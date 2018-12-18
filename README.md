# quik-text-editor
An integration of the the Monaco (vs-code) browser-side text editor

## How do I get started?
This is a plugin for quik-stack (https://github.com/jeff-hykin/quik-stack). Just like any other plugin, open up `server.js` and add a line `let quikTextEditor  = server.quikAdd("quik-text-editor")`. Then on the frontend the `monaco` object will be avaliable on all pages. For example here's how to create a quick editor:
```
let editor = monaco.editor.create(document.body, {
    value: `console.log('hello world! im in a text editor!')`,
    language: 'javascript'
});
```

## How do I do things?
This just used the monaco editor so see their documentation: https://github.com/Microsoft/monaco-editor


## I see Warnings
If you see "Could not load existing sourcemap of" for now just ignore the error. Hopefully in the future sourcemaps will be added to the the core of Parcel.js and this will no longer be an issue.
