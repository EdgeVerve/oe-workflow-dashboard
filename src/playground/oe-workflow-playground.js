import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import {
  OEAjaxMixin
} from 'oe-mixins/oe-ajax-mixin.js';
import '@polymer/paper-dialog/paper-dialog';
import 'oe-input/oe-textarea';
import 'oe-input/oe-json-input';
import 'oe-combo/oe-combo';
/**
 * ###oe-workflow-playground
 * `oe-workflow-playground`
 *
 *
 * @customElement
 * @polymer
 */
class OeWorkflowPlayground extends OEAjaxMixin(PolymerElement) {
  static get is() {
    return 'oe-workflow-playground';
  }

  static get template() {
    return html`
    <style include="iron-flex iron-flex-alignment">

        paper-dialog{
            width:90vw;
            height:90vh;
            margin:0px;
            @apply --layout-vertical;
        }

        #viewer{
            height:60vh;
        }
        .action-panel paper-button{
            margin:0px 8px;
            border:1px solid rgba(0,0,0,0.4);
            border-radius:4px;
        }

        .page-content{
          @apply --layout-vertical;
          height: 100%;
        }
        .page-content h2{
          margin-bottom:0px;
        }
        iron-pages{
          height: 100%;
        }

        .buttons-container{
          @apply --layout-horizontal;
          @apply --layout-end-justified;
        }

        *[hidden]{
          display:none !important;
        }
    </style>
    <paper-dialog id="dialog">
      <iron-pages selected=[[selectedPage]] attr-for-selected="page">
        <div page="payload" class="page-content">
          <h2>Process Variables for [[workflowDef.name]]</h2>
          <oe-json-input class="flex" label="Process Variables" value={{workflowDef.payload}} invalid={{isPayloadInvalid}}></oe-json-input>
          <div class="buttons-container">
            <paper-button primary on-tap="_executeWorkflow" disabled=[[isPayloadInvalid]]>Simulate</paper-button>
            <paper-button dialog-dismiss>Cancel</paper-button>
          </div>
        </div>
        <div page="progress" class="page-content">
          <div class="header layout horizontal center justified">
            <h2>[[workflowDef.name]]</h2>
            <div class="action-panel layout horizontal center-center">
              <paper-button on-tap="_zoomIn">Zoom in</paper-button>
              <paper-button on-tap="_zoomOut">Zoom out</paper-button>
              <paper-button on-tap="_resetZoom">Reset</paper-button>
              <paper-button on-tap="refreshProcess">Refresh</paper-button>
            </div>
          </div>
          <div class=" flex">
            <oe-bpmn-viewer id="viewer" token-view-mode="auto" on-oe-bpmn-viewer-selection="_tokenClicked"></oe-bpmn-viewer>
            <div class="layout horizontal justified" hidden=[[!_selectedToken.isVisible]]>
              <div class="layout vertical status-pane flex">
                <label>Name : [[_selectedToken.name]]</label>
                <label>[[_selectedToken.status]] : [[_selectedToken.message]]</label>
              </div>
              <div hidden=[[!_selectedToken.allowAction]]>
                <paper-button on-tap="_gotoCompleteTask">Complete Task</paper-button>
              </div>
            </div>
          </div>
          <div class="buttons-container">
              <paper-button primary on-tap="_gotoPayload">Back</paper-button>
              <paper-button dialog-dismiss>Cancel</paper-button>
          </div>
        </div>
        <div page="task" class="page-content">
          <h2>[[_selectedToken.name]]</h2>
          <div class="flex">
            <oe-combo label="Action" value={{taskPayload.__action__}} listdata=[[__taskActionListData]]></oe-combo>
            <oe-textarea label="Comments" value={{taskPayload.__comments__}} max-rows="3"></oe-textarea>
            <oe-json-input label="Message" value={{taskPayload.msg}} max-rows="4" invalid={{isTaskMessageInvalid}}></oe-json-input>
            <oe-json-input label="Process Variables" value={{taskPayload.pv}} max-rows="4" invalid={{isTaskPayloadInvalid}}></oe-json-input>
          </div>
          <div class="buttons-container">
              <paper-button primary on-tap="__completeActiveTask" disabled=[[__or(isTaskPayloadInvalid,isTaskMessageInvalid)]]>Complete</paper-button>
              <paper-button primary on-tap="_gotoProgress">Cancel</paper-button>
          </div>
        </div>
      </iron-pages>
    </paper-dialog>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    var self = this;
    this.$.viewer.addEventListener('wheel', function (event) {
      event.preventDefault();
      if (event.deltaY > 0) {
        self._zoomOut();
      } else {
        self._zoomIn();
      }
    });
    window.OEUtils.apibaseroute = location.origin;
    this.set('__taskActionListData', [
      'accept', 'reject'
    ]);
  }

  launch(wfDefName) {
    this.set('workflowDef', {
      name: wfDefName,
      payload: {}
    });
    this.set('selectedPage', 'payload');
    this.$.dialog.open();
    this.set('_selectedToken', {
      isVisible: false,
      status: '',
      message: ''
    });
  }

  _gotoPayload() {
    this.set('selectedPage', 'payload');
  }

  _gotoProgress() {
    this.set('selectedPage', 'progress');
  }

  _gotoCompleteTask() {
    this.set('selectedPage', 'task');
    this.set('taskPayload', {
      msg: {},
      pv: {}
    });
  }

  /** payload page functions */

  _executeWorkflow() {
    let body = {
      workflowDefinitionName: this.workflowDef.name,
      processVariables: this.workflowDef.payload
    };
    this.makeAjaxCall(this.__getApiUrl('/WorkflowInstances'), 'post', body, null, null, null, (err, wfInstance) => {
      if (err) {
        return console.error(err);
      }
      this.__getMainProcessForWorkflow(wfInstance.id, (processErr, process) => {
        if (processErr) {
          return console.error(processErr);
        }
        this.__getBpmnForProcess(process.name, (bpmnErr, bpmndt) => {
          if (bpmnErr) {
            return console.error(bpmnErr);
          }
          this.set('simulationResp', {
            workflowInstance: wfInstance,
            processInstance: process,
            bpmn: bpmndt
          });
          let bpmnViewer = this.$.viewer;
          bpmnViewer.set('bpmnXml', bpmndt[0].xmldata);
          bpmnViewer.set('processInstance', process);
          this.set('_selectedToken', {
            isVisible: false,
            status: '',
            message: ''
          });
          this._gotoProgress();
        });
      });
    });
  }

  /* BPMN actions */
  _zoomIn(e) {
    var oeViewer = this.$.viewer;
    var zoom = oeViewer.zoom();
    oeViewer.zoom(zoom + 0.1);
  }
  _zoomOut(e) {
    var oeViewer = this.$.viewer;
    var zoom = oeViewer.zoom();
    oeViewer.zoom(zoom - 0.1);
  }
  _resetZoom() {
    let canvas = this.$.viewer.viewer.get('canvas');
    var zoomedAndScrolledViewbox = canvas.viewbox();
    canvas.viewbox({
      x: 0,
      y: 0,
      width: zoomedAndScrolledViewbox.outer.width,
      height: zoomedAndScrolledViewbox.outer.height
    });
    canvas.zoom('fit-viewport');
  }
  refreshProcess() {
    this.__getMainProcessForWorkflow(this.simulationResp.workflowInstance.id, (err, process) => {
      if (err) {
        console.log(err);
        return;
      }
      this.set('simulationResp.processInstance', process);
      this.$.viewer.set('processInstance', process);
    });
  }
  _tokenClicked(event) {
    let 
      processToken
     = event.detail.processToken;

    if (!processToken) {
      this.set('_selectedToken', {
        isVisible: false,
        status: '',
        message: ''
      });
      return;
    }

    let selected = {
      name: processToken.name,
      status: processToken.status,
      isVisible: true
    }


    let endTimeStr = '';
    if (processToken.endTime) {
      let end = new Date(processToken.endTime);
      endTimeStr = `${end.toDateString()} at ${end.toLocaleTimeString()}`;
    }

    switch (processToken.status) {
      case "complete":
        selected.message = `Completed on ${endTimeStr}`;
        break;
      case "failed":
        selected.message = (processToken.error && processToken.error.message) ? processToken.error.message : `Failed on ${endTimeStr}`;
        break;
      case "pending":
        selected.allowAction = !!processToken.isUserTask;
        selected.__token = processToken;
        break;
      default:
        selected.message = null;
        selected.isVisible = false;
    }

    this.set('_selectedToken', selected);
  }

  __or(bool1, bool2) {
    return bool1 || bool2;
  }
  __getApiUrl(url) {
    var restApiRoot = (window.OEUtils && window.OEUtils.restApiRoot) ? window.OEUtils.restApiRoot : '/api';
    return restApiRoot + url;
  }
  __getMainProcessForWorkflow(wfInstanceId, cb) {
    var self = this;
    let url = `/WorkflowInstances/${wfInstanceId}/processes`;
    this.makeAjaxCall(this.__getApiUrl(url), 'get', null, null, null, null, function (err, resp) {
      if (err) {
        cb(err, null);
        return;
      }
      let mainProcess = resp.find(function (proc) {
        return proc.processDefinitionName === self.workflowDef.name;
      });
      cb(null, mainProcess);
    });
  }
  __getBpmnForProcess(processName, cb) {
    let url = this.__getApiUrl('/bpmndata');
    let bpmnFilter = {
      where: {
        bpmnname: processName
      }
    };
    this.makeAjaxCall(url, 'get', null, null, {
      'filter': bpmnFilter
    }, null, function (err, resp) {
      if (err) {
        cb(err, null);
        return;
      }
      cb(null, resp);
    });
  }

  __getTasksForProcess(processId, cb) {
    let url = this.__getApiUrl(`ProcessInstances/${processId}/tasks`);
    this.makeAjaxCall(url, 'get', null, null, null, null, function (err, resp) {
      if (err) {
        cb(err, null);
        return;
      }
      cb(null, resp);
    });
  }

  __completeActiveTask() {
    var self = this;
    this.__completeTask(this._selectedToken.__token.taskId, this.taskPayload, function (err, resp) {
      if (err) {
        this.fire('oe-show-error', err);
        return;
      }
      self._gotoProgress();
      self.refreshProcess();
    });
  }

  __completeTask(taskId, payload, cb) {
    let url = this.__getApiUrl(`/Tasks/${taskId}/complete`);
    this.makeAjaxCall(url, 'put', payload, null, null, null, function (err, resp) {
      if (err) {
        cb(err, null);
        return;
      }
      cb(null, resp);
    });
  }
}
window.customElements.define(OeWorkflowPlayground.is, OeWorkflowPlayground);