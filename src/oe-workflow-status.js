import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import "@polymer/iron-flex-layout/iron-flex-layout.js";
import "@polymer/iron-flex-layout/iron-flex-layout-classes.js";
import 'oe-workflow-ui-components/oe-bpmn-viewer.js';
import '@polymer/app-layout/app-layout.js';
import { OECommonMixin } from "oe-mixins/oe-common-mixin.js";
import '@polymer/paper-icon-button/paper-icon-button.js';
/**
 * ### oe-workflow-status
 * `oe-workflow-status`  
 * 
 *
 * @customElement
 * @polymer
 *
 */
class OeWorkflowStatus extends OECommonMixin(PolymerElement) {
  static get template() {
    return html`
    <style include="iron-flex">
    .fullsize {
      height:100%;
      width: 100%;
    }
    .pad{
      padding: var(--my-padding, 12px);
    }
    #viewer {
      height:70vh;
    }
   .buttons {
     padding: 0px 20px;
   }
  </style>
      <app-header fixed condenses slot="header">
      <app-toolbar>
      <paper-icon-button icon="arrow-back" on-tap="handleBackbuton"></paper-icon-button>
      <div main-title>[[procInstance.processDefinitionName]]</div>
      </app-toolbar>
      </app-header>
    <div class="layout vertical fullsize" id="OeWorkflowSt">
    <div class="layout horizontal buttons">
    <paper-icon-button icon="zoom-in" on-tap="zoomIn"></paper-icon-button>
    <paper-icon-button icon="zoom-out" on-tap="zoomOut"></paper-icon-button>
    <paper-icon-button icon="autorenew" on-tap="_resetZoom"></paper-icon-button>
    <paper-icon-button icon="refresh" on-tap="_procIdChanged"></paper-icon-button>
    </div>
    <oe-bpmn-viewer id="viewer"></oe-bpmn-viewer>
    </div>`;
  }
  static get is() {
    return 'oe-workflow-status';
  }

  static get properties() {
    return {
      procInstance: {
        type: Object,
        observer: '_procChanged'
      },
      bpmnDt: {
        type: Object,
        observer: '_bpmnChanged'
      },
      procInstanceId: {
        type: String,
        observer: '_procIdChanged'
      },
      userLt: {
        type: Array,
        value: function () {
          return [];
        }
      },
      roleLt: {
        type: Array,
        value: function () {
          return [];
        }
      },
      userRoleObject: {
        type: Object,
        observer: '_userRoleChanged'
      },
      taskId: {
        type: String
      },
      restUrlApi: {
        type: String
      }
    };
  }
  connectedCallback() {
    super.connectedCallback();
    var self = this;
    window.addEventListener('oe-workflow-rerun',this._handleError.bind(this));
    this.$.viewer.addEventListener('wheel', function (event) {
      event.preventDefault();
      if (event.deltaY > 0) {
        self.zoomOut();
      } else {
        self.zoomIn();
      }
    });
  }
  zoomIn(e) {
    var oeViewer = this.$.viewer;
    var zoom = oeViewer.zoom();
    oeViewer.zoom(zoom + 0.1);
  }
  zoomOut(e) {
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
  _xhrget(url, mime, callback) {
    if (!callback && typeof mime === 'function') {
      callback = mime;
      mime = 'json';
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', function (evt) {
      if (evt.target.status >= 200 && evt.target.status < 300) {
        callback(null, evt.target.response);
      } else {
        callback(evt.target.statusText, null);
      }
    });
    oReq.addEventListener('error', function (err) {
      callback(err);
    });

    oReq.open("GET", url);
    oReq.responseType = mime;
    oReq.send();
  }
  _xhrput(url, body, mime, callback) {
    if (!callback && typeof mime === 'function') {
      callback = mime;
      mime = 'json';
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', function (evt) {
      if (evt.target.status >= 200 && evt.target.status < 300) {
        callback(null, evt.target.response);
      } else {
        callback(evt.target.statusText, null);
      }
    });
    oReq.addEventListener('error', function (err) {
      callback(err);
    });

    oReq.open("PUT", url);
    oReq.setRequestHeader("content-type", "application/json;charset=UTF-8");
    oReq.send(JSON.stringify(body));
  }
  _userRoleChanged() {
    var self = this;
    if (self.userRoleObject) {
      var id = self.userRoleObject.processTokenId;
      self._xhrget(`${self.restUrlApi}/Tasks`, function (err, data) {
        if (data) {
          data.forEach(function (task) {
            if (task.processTokenId === id) {
              self.set('taskId', task.id);
            }
          })
        }
        if (self.taskId) {
          var taskid = self.taskId;
          var inputData = {};
          inputData.assignee = self.userRoleObject.user;
          inputData.role = self.userRoleObject.role;
          inputData.group = [];
          if (inputData.assignee || inputData.role) {
            self._xhrput(`${self.restUrlApi}/Tasks/${taskid}/delegate`, inputData, function (err, res) {
              if (!err) {
                self.fire('oe-show-success', 'Task delegate is trigger for this Task Id'+ taskid);
              }
              else {
                self.fire('oe-show-error', err.message)
              }
            });
          }
          else {
            self.fire('oe-show-error', 'Select Assignee or Role to the task')
          }
        }
      });
    }
  }
  _procChanged(event) {
    var self = this;
    if (self.procInstance) {
      var fileName = self.procInstance.processDefinitionName;
      self._xhrget(`${self.restUrlApi}/bpmndata`, function (err, data) {
        if (data) {
          data.forEach(function (bpmn) {
            if (bpmn.bpmnname === fileName) {
              self.set('bpmnDt', bpmn);
            }
          })
        }
      });
    }
  }
  _procIdChanged(event) {
    var self = this;
    if (self.procInstanceId) {
      var id = self.procInstanceId;
      self._xhrget(`${self.restUrlApi}/ProcessInstances/${id}`, function (err, data) {
        self.set('procInstance', data);
      });
      if (!event.target) {
        self._xhrget(`${self.restUrlApi}/UserInfos`, function (err, data) {
          if (data) {
            var response1 = [];
            data.forEach(function (user) {
              var obj = {};
              obj.userName = user.firstName.toLowerCase();
              obj.userId = user.id;
              response1.push(obj);
            })
            self.set('userLt', response1);
          }
        });
        self._xhrget(`${self.restUrlApi}/Roles`, function (err, data) {
          if (data) {
            var response = [];
            data.forEach(function (role) {
              var obj = {};
              obj.roleName = role.name;
              obj.roleId = role.id;
              response.push(obj);
            })
            self.set('roleLt', response);
          }
        });
      }
    }
  }
  _bpmnChanged() {
    var self = this;
    if (self.bpmnDt) {
      self.$.viewer.set('bpmnXml', self.bpmnDt.xmldata);
      self.$.viewer.set('processInstance', self.procInstance);
      self.$.viewer.set('userList', self.userLt);
      self.$.viewer.set('roleList', self.roleLt);
    }
  }
  _handleError(event) {
    var self = this;
    var processInstanceId = event.detail.processInstanceId;
    var processTokenId = event.detail.processToken.id;
    var inputData = event.detail.data;
    self.$.viewer.$.sidepanel.style.display = 'none'
    if (inputData && typeof(inputData) === 'object') {
      self._xhrput(`${self.restUrlApi}/ProcessInstances/${processInstanceId}/retry/${processTokenId}`, inputData, function (err, data) {
        if (!err) {
          self.set('procInstanceId', null);
          self.fire('rerun-done', processInstanceId);
          self.fire('oe-show-success', 'Retry of failed Task is triggered for process token '+processTokenId);
        }
        else {
          self.fire('oe-show-error', err.message);
        }
      });
    }
    else {
      self.fire('oe-show-error', 'Enter valid process variable to retry failed Task')
    }
  }
  handleBackbuton(e) {
    var self = this;
    this.fire('back-button-pressed');
    self.set('procInstance', null);
    self.set('procInstanceId', null);
    self.set('bpmnDt', null);
    self.$.viewer.$.sidepanel.style.display = 'none';
  }
}

window.customElements.define(OeWorkflowStatus.is, OeWorkflowStatus);