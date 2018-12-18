module.exports = {
    generateFrontend : () => `
        import 'monaco-editor'
        import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'

        let jsonWorker       = new Worker('../node_modules/monaco-editor/esm/vs/language/json/json.worker.js')
        let cssWorker        = new Worker('../node_modules/monaco-editor/esm/vs/language/css/css.worker.js')
        let htmlWorker       = new Worker('../node_modules/monaco-editor/esm/vs/language/html/html.worker.js')
        let typescriptWorker = new Worker('../node_modules/monaco-editor/esm/vs/language/typescript/ts.worker.js')
        let editorWorker     = new Worker('../node_modules/monaco-editor/esm/vs/editor/editor.worker.js')

        self.MonacoEnvironment = {
            getWorker: function (moduleId, label) {
                if (label === 'json') {
                    return jsonWorker
                }
                if (label === 'css') {
                    return cssWorker
                }
                if (label === 'html') {
                    return htmlWorker
                }
                if (label === 'typescript' || label === 'javascript') {
                    return typescriptWorker
                }
                return editorWorker
            }
        }
        window.monaco = monaco
    `
}