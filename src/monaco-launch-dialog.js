import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@polymer/iron-flex-layout/iron-flex-layout-classes.js";
import { OECommonMixin } from "oe-mixins/oe-common-mixin.js";
import {ConfigureScriptEditor} from "../app/index.js";
import "@polymer/paper-dialog/paper-dialog";
import '@polymer/paper-icon-button/paper-icon-button.js';
import "@polymer/paper-button/paper-button.js";

/**
 * `monaco-launch-dialog`
 *  A template element , used to create oe-ui Polymer 3 elements.
 *  By default includes `OECommonMixin` to support use of 'fire','async' and '_deepValue' functions.
 * 
 *
 * @customElement
 * @polymer
 * @appliesMixin OECommonMixin
 * @demo demo/index.html
 */
class MonacoLaunchDialog extends OECommonMixin(PolymerElement) {

  static get is() { return 'monaco-launch-dialog'; }

  static get template() {
    return html`
    <style include="iron-flex iron-flex-alignment designer-theme">
    .dialog{
      height:500px;
      width: 500px;
      min-height:270px;
      margin:0px;
    }

    .button{
      padding: 0px 10px;
      margin: 0px;
      height:40px;
    }
    
  </style>

    <paper-dialog id="monacoDialog" class="dialog" modal>
    <div class="layout horizontal end-justified">
    <paper-icon-button icon="clear" dialog-confirm></paper-icon-button>
    </div>
      <div id="monaco-container">
        <slot></slot>
      </div>
      <div class="button layout horizontal end-justified">
      <paper-button id="retry" dialog-confirm on-tap="_rerunProcess">Retry</paper-button>
      </div>
    </paper-dialog>
    `;
  }
  static get properties() {
    return {
      processObject: {
        type: Object
      }
    };
  }
  connectedCallback() {
    super.connectedCallback();
    var self = this;
    window.addEventListener('oe-workflow-rerun',function(event){
      self.set('processObject',event.detail);
      self.$.monacoDialog.open();
      self.async(function(){
        self.editor.layout();
        self.editor.focus();
      },1000);
    });
     self.editor = ConfigureScriptEditor();
  }

  _rerunProcess(e){
    var self = this;
    var data;
    if(self.editor.getValue()){
      data = JSON.parse(self.editor.getValue());
    }
    self.fire('oe-workflow-retry',{
      processInstanceId: self.processObject.processInstanceId,
      processToken: self.processObject.processToken,
      data: data
    })
  }
}
window.customElements.define(MonacoLaunchDialog.is, MonacoLaunchDialog);
