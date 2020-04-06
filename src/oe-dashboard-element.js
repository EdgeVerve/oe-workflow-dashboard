import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import 'oe-utils/oe-utils.js';
import "@polymer/iron-pages/iron-pages.js";
import "@polymer/iron-flex-layout/iron-flex-layout.js";
import "@polymer/iron-flex-layout/iron-flex-layout-classes.js";
import "@polymer/paper-icon-button/paper-icon-button";
import '@polymer/app-layout/app-layout.js';
import './oe-workflow-element.js';
import './oe-workflow-status.js';
import 'oe-message-handler/oe-message-handler.js'
import { OECommonMixin } from "oe-mixins/oe-common-mixin.js";
import './playground/oe-workflow-playground.js';
/**
 * ### oe-dashboard-element
 * `oe-dashboard-element`  
 * 
 *
 * @customElement
 * @polymer
 *
 */
class OeDashboardElement extends OECommonMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="iron-flex iron-flex-alignment">
        .fullsize {
          height:100%;
          width: 100%;
        }
        app-header {
          background-color: var(--dark-primary-color);
          color: #FFF;
      }
      #launchMenuBtn {
        padding: 0px;
      }
      .item {
        width: 225px;
        justify-content: center;
      }
      .link {
        width: 100%;
        justify-items: center;
        text-align: center;
        position: absolute;
        margin-top: 240px;
      }
     .link a {
       color: #303f9f;
     }
      </style>
      <app-header-layout>
      <app-header condenses reveals fixed slot="header" effects="waterfall">
      <app-toolbar>
        <paper-icon-button icon="menu" on-tap="_navTap"></paper-icon-button>
        <div class="center horizontal justified layout fullsize">
        <div main-title>Workflow Dashboard</div>
        <paper-icon-button icon="refresh" on-tap="_refresh" class="icon-button"></paper-icon-button>
        </div>
      </app-toolbar>
    </app-header>
    <div class="layout horizontal" id="OeDashboardEle">
      <iron-pages class="fullsize" selected="{{_selectedPage}}">
          <oe-workflow-element workflow-def-name={{allWorkflows}} rest-url="{{restApiRoot}}" id="list" on-oe-workflow-instance="_handleInstance"></oe-workflow-element>
          <oe-workflow-status id="status" rest-url-api="{{restApiRoot}}" page-before="{{_selectedPage}}"></oe-workflow-status>
      </iron-pages>
      <template is="dom-if" if=[[!allWorkflows.length]]>
      <div class="link">
    <a href="[[_modelerLink]]" title="Click here for Workflow Modeler tool" target="_blank">
      <paper-card elevation="0">
      <paper-icon-button id="create" icon="create"></paper-icon-button>
        <div class="title">Workflow Modeler</div>
        <div class="desc">Create workflow bpmn files for the project</div>
      </paper-card>
    </a>
    </div>
    </template>
      <oe-message-handler persist-on="error"></oe-message-handler>
    </div>
   <oe-workflow-playground id="playground" worfklows=[[allWorkflows]]></oe-workflow-playground> 
   </app-header-layout>
   <app-drawer id="startDrawer" align="start">
   <paper-item class="item" on-tap="_handleTestWorkflow">Test Workflow</paper-item>
   <paper-item class="item" on-tap="_handleCompWorkflow">Completed Workflow</paper-item>
   <paper-item class="item" on-tap="_handleRunWorkflow">Running Workflow</paper-item>
   </app-drawer>
    `;
  }
  static get is() {
    return 'oe-dashboard-element';
  }

  static get properties() {
    return {
      _selectedPage: {
        type: Number,
        value: 0
      },
      restApiRoot: {
        type: String
      },
      _modelerLink: {
        type: String
      }
    };

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
  _navTap(e) {
    this.$.startDrawer.toggle();
  }
  connectedCallback() {
    super.connectedCallback();
    var self = this;
    self._xhrget(`config`, function (err, data) {
      if (!err) {
        window.OEUtils.apibaseroute = location.origin;
        self.set('restApiRoot',data.restApiRoot);
        self.set('_modelerLink',data._modelerLink);
        window.OEUtils.restApiRoot = self.restApiRoot;
      }
      self.$.list._getWorkFlowInstance();
      
    });
    self.addEventListener('back-button-pressed', function (event) {
      self.set('_selectedPage', 0);
      self.$.list._getWorkFlowInstance();
    });
    self.addEventListener('rerun-done', function (event) {
      self._handleInstance(event);
    });
    self.addEventListener('user-role-changed', function (event) {
      self.$.status.set('userRoleObject', event.detail);
    })
    window.addEventListener('reassign-task',function(event){
      self.$.status.set('reassign',event.detail.processInstanceId);
    })
  }
  _handleInstance(e) {
    var self = this;
    if (self._selectedPage) {
      self.async(function () {
        self.$.list._getWorkFlowInstance();
        self.$.status.set('procInstanceId', e.detail);
      }, 1000);
    }
    else {
      if(e.detail.processId){
        self.set('_selectedPage', 1);
        self.$.status.set('procInstanceId', e.detail.processId);
      }
    }
  }

  _handleTestWorkflow(e) {
    this.$.startDrawer.close();
    this.$.playground.launch();
  }
  _handleCompWorkflow(e) {
    this.$.startDrawer.close();
    this.$.list.set('flag', true);
  }
  _handleRunWorkflow(e) {
    this.$.startDrawer.close();
    this.$.list.set('flag', false);
  }
  _refresh(e){
    this.$.list._getWorkFlowInstance();
  }
}

window.customElements.define(OeDashboardElement.is, OeDashboardElement);