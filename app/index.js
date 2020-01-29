import '../src/oe-dashboard-element.js';
import * as monaco from 'monaco-editor';
import '../src/monaco-launch-dialog.js';

function ConfigureScriptEditor(){
    window.MonacoEnvironment = {
      getWorkerUrl: function (moduleId, label) {
        if (label === 'json') {
          return './json.worker.js';
        }
        if (label === 'css') {
          return './css.worker.js';
        }
        if (label === 'html') {
          return './html.worker.js';
        }
        if (label === 'typescript' || label === 'javascript') {
          return './typescript.worker.js';
        }
        return './editor.worker.js';
      }
    }
    var scriptEditor = monaco.editor.create(document.getElementById('monaco-input-editor'), {
      value: '',
      language: 'json',
      minimap: { enabled: false },
      scrollBeyondLastLine: false
    });
    return scriptEditor;
  }
  
  export {ConfigureScriptEditor};