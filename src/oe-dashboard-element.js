import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import 'oe-utils/oe-utils.js';
import "@polymer/iron-pages/iron-pages.js";
import "@polymer/iron-flex-layout/iron-flex-layout.js";
import "@polymer/iron-flex-layout/iron-flex-layout-classes.js";
import '@polymer/app-layout/app-layout.js';
import 'oe-workflow-ui-components/oe-workflow-element.js';
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
      <style include="iron-flex">
        .fullsize {
          height:100%;
          width: 100%;
        }
        app-header {
          background-color: var(--dark-primary-color);
          color: #FFF;
      }

      #launchMenuBtn{
        margin:8px;
        padding: 0px;
      }

      #launchMenuBtn paper-button{
        margin:0px;
        height: 40px;
        width: 150px;
      }
      </style>
    <app-header fixed condenses slot="header">
      <app-toolbar>
        <div main-title>Workflow Dashboard</div>
      </app-toolbar>
    </app-header>
   <!-- <paper-menu-button id="launchMenuBtn" vertical-offset="42">
      <paper-button raised icon="menu" slot="dropdown-trigger">Test Workflow</paper-button> 
      <paper-listbox slot="dropdown-content"> 
        <template is="dom-repeat" items=[[allWorkflows]]>
            <paper-item on-tap="_handleTestWorkflow">[[item.name]]</paper-item>
        </template>
      </paper-listbox>
    </paper-menu-button> -->
    <div class="layout horizontal" id="OeDashboardEle">
      <iron-pages class="fullsize" selected="{{_selectedPage}}">
          <oe-workflow-element workflow-def-name={{allWorkflows}} rest-url="{{restApiRoot}}" id="list" on-oe-workflow-instance="_handleInstance"></oe-workflow-element>
          <oe-workflow-status id="status" rest-url-api="{{restApiRoot}}" page-before="{{_selectedPage}}"></oe-workflow-status>
      </iron-pages>
      <oe-message-handler persist-on="error"></oe-message-handler>
    </div>
   <!-- <oe-workflow-playground id="playground"></oe-workflow-playground> -->
    `
      ;
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
  connectedCallback() {
    super.connectedCallback();
    var self = this;
    self._xhrget(`config`, function (err, data) {
      if (data.restApiRoot) {
        window.OEUtils.apibaseroute = location.origin;
        self.set('restApiRoot', data.restApiRoot);
        window.OEUtils.restApiRoot = self.restApiRoot;
        self.$.list._getWorkFlowInstance();
      }
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
      self.set('_selectedPage', 1);
      self.$.status.set('procInstanceId', e.detail.processId);
    }
  }

  _handleTestWorkflow(e) {
    this.$.playground.launch(e.model.item.name);
  }
}

window.customElements.define(OeDashboardElement.is, OeDashboardElement);