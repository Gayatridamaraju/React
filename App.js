import React from "react";
var hOneReact=React.createElement("h1",{},"heading created using react");
var htmlRoot=document.getElementById("root");
var rootReact=ReactDOM.createRoot(htmlRoot);
rootReact.render(hOneReact);
console.log(hOneReact);