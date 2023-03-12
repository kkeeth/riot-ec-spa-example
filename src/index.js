import "@riotjs/hot-reload";
import { component } from "riot";
// import { registerPreprocessor } from "@riotjs/compiler";
// import sass from "sass";
import App from "./app.riot";
import registerGlobalComponents from "./register-global-components";

// register preprocessor
// registerPreprocessor("css", "sass", function (code, { options }) {
//   const { file } = options;
//   console.log("Compile the sass code in", file);

//   return {
//     code: sass.compileString(code, { syntax: "indented" }).css,
//     map: null,
//   };
// });

// register
registerGlobalComponents();

// mount the root tag
component(App)(document.getElementById("root") || document.body);
