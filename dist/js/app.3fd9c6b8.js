(function(e){function a(a){for(var t,l,o=a[0],i=a[1],s=a[2],u=0,m=[];u<o.length;u++)l=o[u],r[l]&&m.push(r[l][0]),r[l]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);c&&c(a);while(m.length)m.shift()();return d.push.apply(d,s||[]),n()}function n(){for(var e,a=0;a<d.length;a++){for(var n=d[a],t=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(t=!1)}t&&(d.splice(a--,1),e=l(l.s=n[0]))}return e}var t={},r={app:0},d=[];function l(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=t,l.d=function(e,a,n){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)l.d(n,t,function(a){return e[a]}.bind(null,t));return n},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=a,o=o.slice();for(var s=0;s<o.length;s++)a(o[s]);var c=i;d.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"034f":function(e,a,n){"use strict";var t=n("64a9"),r=n.n(t);r.a},"182e":function(e,a,n){"use strict";var t=n("9ae9"),r=n.n(t);r.a},"56d7":function(e,a,n){"use strict";n.r(a);n("cadf"),n("551c"),n("f751"),n("097d");var t=n("2b0e"),r=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"mainActions"}},e._l(e.actions,function(a){return n("button",{key:a,on:{click:function(n){return e.execute(a)}}},[e._v("\n      "+e._s(a)+"\n    ")])}),0),n("Editor",{ref:"wrapper"})],1)},d=[],l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container is-fullwidth"},[t("div",{staticClass:"columns is-centered"},[t("div",{staticClass:"column is-12"},[t("table",{staticClass:"table"},[t("tr",[t("td",[t("div",{ref:"toolbar",attrs:{id:"toolbar"}})])]),t("tr",[t("td",{ref:"graphContainer",attrs:{id:"graphContainer",valign:"top"}},[t("div",{attrs:{id:"graph",tabindex:"-1"}},[t("center",{ref:"splash",attrs:{id:"splash"}},[t("img",{attrs:{src:n("a83a")}})])],1),t("textarea",{ref:"xml",attrs:{id:"xml"}})])])]),t("span",{staticClass:"source-ipt"},[t("input",{ref:"source",attrs:{id:"source",type:"checkbox"}}),e._v("Source\n      ")])])])])},o=[];n("6762"),n("2fdb");function i(e,a){window[e]=a}var s="https://spmeditor.herokuapp.com",c="mxassets/images",u='<mxEditor defaultGroup="group" defaultEdge="connector">\n<add as="onInit">\n  <![CDATA[\n  function ()\n  {\n    onInit(this);\n  }\n]]>\n</add>\n<ui>\n  <add as="graph" element="graph" />\n  <add as="toolbar" element="toolbar" />\n</ui>\n<Array as="templates">\n  <add as="group">\n    <Group label="" href="">\n      <mxCell vertex="1" style="group" connectable="0" />\n    </Group>\n  </add>\n  <add as="connector">\n    <Connector label="" href="">\n      <mxCell edge="1">\n        <mxGeometry as="geometry" relative="1" />\n      </mxCell>\n    </Connector>\n  </add>\n  <add as="normal">\n    <Normal label="" href="">\n      <mxCell vertex="1" style="normal">\n        <mxGeometry as="geometry" width="50" height="50" />\n      </mxCell>\n    </Normal>\n  </add>\n  <add as="decomposed">\n    <Decomposed label="" href="">\n      <mxCell vertex="1" style="decomposed">\n        <mxGeometry as="geometry" width="50" height="50" />\n      </mxCell>\n    </Decomposed>\n  </add>\n  <add as="agent">\n    <Agent label="" href="">\n      <mxCell vertex="1" style="agent">\n        <mxGeometry as="geometry" width="50" height="50" />\n      </mxCell>\n    </Agent>\n  </add>\n  <add as="workgroup">\n    <Workgroup label="">\n      <mxCell vertex="1" style="workgroup">\n        <mxGeometry as="geometry" width="50" height="50" />\n      </mxCell>\n    </Workgroup>\n  </add>\n  <add as="artifact">\n    <Artifact label="">\n      <mxCell vertex="1" style="artifact_empty">\n        <mxGeometry as="geometry" width="50" height="50" />\n      </mxCell>\n    </Artifact>\n  </add>\n  <add as="join">\n    <Join label="">\n      <mxCell vertex="1" style="join_or_end_end">\n        <mxGeometry as="geometry" width="50" height="50" />\n      </mxCell>\n    </Join>\n  </add>\n  <add as="branch">\n    <Branch label="">\n      <mxCell vertex="1" style="branch_or_end_end">\n        <mxGeometry as="geometry" width="50" height="50" />\n      </mxCell>\n    </Branch>\n  </add>\n</Array>\n<mxGraph as="graph" allowLoops="1" dropEnabled="1">\n  <add as="isAutoSizeCell">\n    <![CDATA[\n    function(cell)\n    {\n      return mxUtils.isNode(this.model.getValue(cell), \'text\');\n    }\n  ]]>\n  </add>\n  <add as="isSwimlane">\n    <![CDATA[\n    function (cell)\n    {\n      return mxUtils.isNode(this.model.getValue(cell), \'container\');\n    }\n  ]]>\n  </add>\n  <add as="getTooltipForCell">\n    <![CDATA[\n    function(cell)\n    {\n      var label = cell.getAttribute(\'label\');\n      var style = cell.getStyle();\n\n      return ((label != null) ? (\'<b>\' + label +\n          \'</b> (\' + cell.getId() + \')<br>\') : \'\') +\n          ((style != null) ? (\'<br>Style: \' + style + \'<br>\') : \'\') +\n          \'Connections: \' + cell.getEdgeCount()+\n          \'<br>Children: \' + cell.getChildCount();\n    }\n  ]]>\n  </add>\n  <add as="convertValueToString">\n    <![CDATA[\n    function(cell)\n    {\n      return cell.getAttribute(\'label\');\n    }\n  ]]>\n  </add>\n  <mxStylesheet as="stylesheet">\n    <add as="straightConnector">\n      <add as="shape" value="connector" />\n      <add as="endArrow" value="classic" />\n      <add as="edgeStyle" value="straightEdgeStyle" />\n    </add>\n    <add as="swimlane">\n      <add as="shape" value="swimlane" />\n      <add as="shadow" value="0" />\n      <add as="startSize" value="23" />\n      <add as="align" value="center" />\n      <add as="verticalAlign" value="top" />\n      <add as="strokeColor" value="#EEEEEE" />\n      <add as="fillColor" value="#D4D4D4" />\n    </add>\n    <add as="group">\n      <add as="shape" value="rectangle" />\n      <add as="perimeter" value="rectanglePerimeter" />\n      <add as="fontSize" value="10" />\n      <add as="align" value="center" />\n      <add as="verticalAlign" value="middle" />\n      <add as="strokeColor" value="gray" />\n      <add as="dashed" value="1" />\n    </add>\n    <add as="normal">\n      <add as="shape" value="image" />\n      <add as="perimeter" value="rectanglePerimeter" />\n      <add as="fontSize" value="10" />\n      <add as="align" value="center" />\n      <add as="verticalAlign" value="middle" />\n      <add as="image" value="'.concat(s,"/").concat(c,'/spm/normal_blank.gif" />\n    </add>\n    <add as="decomposed">\n      <add as="shape" value="image" />\n      <add as="perimeter" value="rectanglePerimeter" />\n      <add as="fontSize" value="10" />\n      <add as="align" value="center" />\n      <add as="verticalAlign" value="middle" />\n      <add as="image" value="').concat(s,"/").concat(c,'/spm/decomposed_blank.gif" />\n    </add>\n    <add as="agent">\n      <add as="shape" value="image" />\n      <add as="perimeter" value="rectanglePerimeter" />\n      <add as="fontSize" value="10" />\n      <add as="align" value="center" />\n      <add as="verticalAlign" value="middle" />\n      <add as="image" value="').concat(s,"/").concat(c,'/spm/agent.png" />\n    </add>\n    <add as="workgroup">\n      <add as="shape" value="image" />\n      <add as="perimeter" value="rectanglePerimeter" />\n      <add as="fontSize" value="10" />\n      <add as="align" value="center" />\n      <add as="verticalAlign" value="middle" />\n      <add as="image" value="').concat(s,"/").concat(c,'/spm/group.png" />\n    </add>\n    <add as="artifact_empty">\n      <add as="shape" value="image" />\n      <add as="perimeter" value="rectanglePerimeter" />\n      <add as="fontSize" value="10" />\n      <add as="align" value="center" />\n      <add as="verticalAlign" value="middle" />\n      <add as="image" value="').concat(s,"/").concat(c,'/spm/artifact_empty.png" />\n    </add>\n    <add as="artifact_full">\n      <add as="shape" value="image" />\n      <add as="perimeter" value="rectanglePerimeter" />\n      <add as="fontSize" value="10" />\n      <add as="align" value="center" />\n      <add as="verticalAlign" value="middle" />\n      <add as="image" value="').concat(s,"/").concat(c,'/spm/artifact_full.png" />\n    </add>\n    <add as="branch_or_end_end">\n      <add as="shape" value="image" />\n      <add as="perimeter" value="rectanglePerimeter" />\n      <add as="fontSize" value="10" />\n      <add as="align" value="center" />\n      <add as="verticalAlign" value="middle" />\n      <add as="image" value="').concat(s,"/").concat(c,'/spm/branch_or_end_end.gif" />\n    </add>\n    <add as="branch_or_start_start">\n      <add as="shape" value="image" />\n      <add as="perimeter" value="rectanglePerimeter" />\n      <add as="fontSize" value="10" />\n      <add as="align" value="center" />\n      <add as="verticalAlign" value="middle" />\n      <add as="image" value="').concat(s,"/").concat(c,'/spm/branch_or_start_start.gif" />\n    </add>\n    <add as="branch_or_end_start">\n      <add as="shape" value="image" />\n      <add as="perimeter" value="rectanglePerimeter" />\n      <add as="fontSize" value="10" />\n      <add as="align" value="center" />\n      <add as="verticalAlign" value="middle" />\n      <add as="image" value="').concat(s,"/").concat(c,'/spm/branch_or_end_start.gif" />\n    </add>\n    <add as="branch_and_end_end">\n      <add as="shape" value="image" />\n      <add as="perimeter" value="rectanglePerimeter" />\n      <add as="fontSize" value="10" />\n      <add as="align" value="center" />\n      <add as="verticalAlign" value="middle" />\n      <add as="image" value="').concat(s,"/").concat(c,'/spm/branch_and_end_end.gif" />\n    </add>\n    <add as="branch_and_start_start">\n      <add as="shape" value="image" />\n      <add as="perimeter" value="rectanglePerimeter" />\n      <add as="fontSize" value="10" />\n      <add as="align" value="center" />\n      <add as="verticalAlign" value="middle" />\n      <add as="image" value="').concat(s,"/").concat(c,'/spm/branch_and_start_start.gif" />\n    </add>\n    <add as="branch_and_end_start">\n      <add as="shape" value="image" />\n      <add as="perimeter" value="rectanglePerimeter" />\n      <add as="fontSize" value="10" />\n      <add as="align" value="center" />\n      <add as="verticalAlign" value="middle" />\n      <add as="image" value="').concat(s,"/").concat(c,'/spm/branch_and_end_start.gif" />\n    </add>\n    <add as="join_or_end_end">\n      <add as="shape" value="image" />\n      <add as="perimeter" value="rectanglePerimeter" />\n      <add as="fontSize" value="10" />\n      <add as="align" value="center" />\n      <add as="verticalAlign" value="middle" />\n      <add as="image" value="').concat(s,"/").concat(c,'/spm/join_or_end_end.gif" />\n    </add>\n    <add as="join_or_start_start">\n      <add as="shape" value="image" />\n      <add as="perimeter" value="rectanglePerimeter" />\n      <add as="fontSize" value="10" />\n      <add as="align" value="center" />\n      <add as="verticalAlign" value="middle" />\n      <add as="image" value="').concat(s,"/").concat(c,'/spm/join_or_start_start.gif" />\n    </add>\n    <add as="join_or_end_start">\n      <add as="shape" value="image" />\n      <add as="perimeter" value="rectanglePerimeter" />\n      <add as="fontSize" value="10" />\n      <add as="align" value="center" />\n      <add as="verticalAlign" value="middle" />\n      <add as="image" value="').concat(s,"/").concat(c,'/spm/join_or_end_start.gif" />\n    </add>\n    <add as="join_and_end_end">\n      <add as="shape" value="image" />\n      <add as="perimeter" value="rectanglePerimeter" />\n      <add as="fontSize" value="10" />\n      <add as="align" value="center" />\n      <add as="verticalAlign" value="middle" />\n      <add as="image" value="').concat(s,"/").concat(c,'/spm/join_and_end_end.gif" />\n    </add>\n    <add as="join_and_start_start">\n      <add as="shape" value="image" />\n      <add as="perimeter" value="rectanglePerimeter" />\n      <add as="fontSize" value="10" />\n      <add as="align" value="center" />\n      <add as="verticalAlign" value="middle" />\n      <add as="image" value="').concat(s,"/").concat(c,'/spm/join_and_start_start.gif" />\n    </add>\n    <add as="join_and_end_start">\n      <add as="shape" value="image" />\n      <add as="perimeter" value="rectanglePerimeter" />\n      <add as="fontSize" value="10" />\n      <add as="align" value="center" />\n      <add as="verticalAlign" value="middle" />\n      <add as="image" value="').concat(s,"/").concat(c,'/spm/join_and_end_start.gif" />\n    </add>\n  </mxStylesheet>\n  <mxGraphModel as="model">\n    <add as="valueForCellChanged">\n      <![CDATA[\n      function(cell, value)\n      {\n        var previous = null;\n\n        if (value == null || isNaN(value.nodeType))\n        {\n          previous = cell.value.getAttribute(\'label\');\n\n          if (value == null)\n          {\n            cell.value.removeAttribute(\'label\');\n          }\n          else\n          {\n            cell.setAttribute(\'label\', value);\n          }\n        }\n        else\n        {\n          previous = cell.value;\n          cell.value = value;\n        }\n\n        return previous;\n      }\n    ]]>\n    </add>\n    <root>\n      <Diagram label="New Process" href="" id="0">\n        <mxCell />\n      </Diagram>\n      <Layer label="Default Layer" id="1">\n        <mxCell parent="0" />\n      </Layer>\n    </root>\n  </mxGraphModel>\n</mxGraph>\n<mxDefaultToolbar as="toolbar">\n  <add as="Lock" mode="lock" icon="').concat(s,"/").concat(c,"/spm/Lock.png\">\n    <![CDATA[\n    editor => {\n      if (editor.getToolbar().selectedMode.title === 'Lock') {\n        const nodeList = editor.getToolbar().container.children\n        const selectedNode = Object.values(nodeList).find(node => node.title === 'Lock')\n        if (selectedNode) {\n          const b = editor.graph.isEnabled()\n          if (Object.keys(editor.graph.model.cells).length > 2) {\n            editor.graph.setEnabled(!b)\n            const imageName = b ? 'Unlock' : 'Lock'\n            selectedNode.src = '").concat(s,"/").concat(c,'/spm/\' + imageName + \'.png\'\n          }\n        }\n      }\n    }\n  ]]>\n  </add>\n  <add as="Normal" template="normal" icon="').concat(s,"/").concat(c,'/spm/normal.png" />\n  <add as="Decomposed" template="decomposed" icon="').concat(s,"/").concat(c,'/spm/decomposed.png" />\n  <add as="Agent" template="agent" icon="').concat(s,"/").concat(c,'/spm/agent.png" />\n  <add as="Workgroup" template="workgroup" icon="').concat(s,"/").concat(c,'/spm/group.png" />\n  <add as="Artifact" template="artifact" icon="').concat(s,"/").concat(c,'/spm/artifact_full.png" />\n  <add as="Join" template="join" icon="').concat(s,"/").concat(c,'/spm/join.png" />\n  <add as="Branch" template="branch" icon="').concat(s,"/").concat(c,'/spm/branch.png" />\n</mxDefaultToolbar>\n</mxEditor>');function m(){return u}var g=n("7edc"),p=n.n(g),v=new p.a,h=v.mxGeometry,f=v.mxGraph,x=v.mxCodec,b=v.mxGraphModel,y=v.mxUtils,_=v.mxClient,C=v.mxEvent,w=v.mxEffects,A=v.mxEditor,E=v.mxObjectCodec,S=v.mxPanningManager,j=v.mxVertexHandler,T=v.mxGraphHandler,P=v.mxGuide,k=v.mxEdgeHandler,D=v.mxConnectionHandler,G=v.mxXmlRequest,z=v.mxImageExport,M=v.mxSvgCanvas2D,I=v.mxConstants,L=v.mxXmlCanvas2D,O=v.mxImage,N=v.mxResources,V=v.mxStylesheet,F=v.mxDefaultToolbar,H=v.mxToolbar,X=v.mxMultiplicity,B={name:"Editor",data:function(){return{editor:void 0,constraints:[],validatees:{normal:{targets:["normal","decomposed","artifact","join","branch"],constraints:{outgoingTo:{normal:1,decomposed:2},incomingFrom:{normal:1,decomposed:2}}},decomposed:{targets:["normal","decomposed","artifact","join","branch"]},agent:{targets:["normal","decomposed"]},workgroup:{targets:["normal","decomposed"]},artifact:{targets:["normal","decomposed"]},join:{targets:["normal","decomposed","join","branch"]},branch:{targets:["normal","decomposed","join","branch"]}},validators:{targets:this.validateTargets,constraints:this.validateConstraints}}},created:function(){i("mxGeometry",h),i("mxGraph",f),i("mxCodec",x),i("mxGraphModel",b),i("mxUtils",y),i("mxClient",_),i("mxEvent",C),i("mxEffects",w),i("mxEditor",A),i("mxObjectCodec",E),i("mxPanningManager",S),i("mxVertexHandler",j),i("mxGraphHandler",T),i("mxGuide",P),i("mxEdgeHandler",k),i("mxConnectionHandler",D),i("mxXmlRequest",G),i("mxImageExport",z),i("mxSvgCanvas2D",M),i("mxConstants",I),i("mxXmlCanvas2D",L),i("mxImage",O),i("mxResources",N),i("mxStylesheet",V),i("mxDefaultToolbar",F),i("mxToolbar",H),i("mxMultiplicity",X),i("onInit",this.onInit)},mounted:function(){this.editor=this.createEditor(m())},beforeDestroy:function(){window.onbeforeunload=function(){return N.get("changesLost")}},methods:{createEditor:function(e){var a=this,n=null,t=function(){var e=a.$refs.splash;if(null!=e)try{C.release(e),w.fadeOut(e,500,!0)}catch(n){a.loading=!1}};try{if(_.isBrowserSupported()){E.allowEval=!0,A.prototype.getToolbar=function(){return this.toolbar.toolbar};var r=y.parseXml(e).documentElement;n=new A(r),E.allowEval=!1,n.graph.createPanningManager=function(){var e=new S(this);return e.border=30,e},n.graph.allowAutoPanning=!1,n.graph.timerAutoScroll=!0,n.validation=!0,n.graph.multiplicities.push(new X(!0,"join",null,null,0,1,["normal","decomposed","join","branch"],"Join must have at max 1 source node!",null),new X(!1,"branch",null,null,0,1,["normal","decomposed","join","branch"],"Branch must have at max 1 target node!",null));var d=document.title,l=function(e){document.title=d+" - "+e.getTitle()};n.addListener(C.OPEN,l),l(n),n.setStatus("mxGraph "+_.VERSION),t()}else y.error("Browser is not supported!",200,!1)}catch(o){throw t(),y.alert("Cannot start application: "+o.message),o}return n},onInit:function(e){var a=this;j.prototype.rotationEnabled=!1,T.prototype.guidesEnabled=!0,P.prototype.isEnabledForEvent=function(e){return!C.isAltDown(e)},k.prototype.snapToTerminals=!0,f.prototype.setCellsResizable(!1);var n="https://spmeditor.herokuapp.com",t="mxassets/images";D.prototype.connectImage=new O("".concat(n,"/").concat(t,"/connector.gif"),16,16),e.graph.setConnectable(!0);var r=document.getElementById("title");if(null!=r){var d=function(e){r.innerHTML="mxDraw - "+e.getTitle()};d(e)}e.graph.connectionHandler.addListener(C.CONNECT,function(n,t){var r=t.getProperty("cell");try{a.validateConnection(r)}catch(d){alert("Can't create connection: \"".concat(d,'"')),e.graph.removeCells([r],!0)}e.graph.validateGraph(),C.consume(t)}),e.graph.addListener(C.MOVE_CELLS,function(a,n){var t=e.graph.getSelectionCell(),r=e.graph.view.getState(t).origin,d=r.x,l=r.y,o=n.getProperty("dx"),i=n.getProperty("dy");d+=o,l+=i,d<0&&(t.geometry.x=0),l<0&&(t.geometry.y=0),C.consume(n)});var l=this.$refs.xml,o=e.graph.container,i=this.$refs.source;i.checked=!1;var s=function(e){if(i.checked){o.style.display="none",l.style.display="inline";var a=new x,n=a.encode(e.graph.getModel());l.value=y.getPrettyXml(n),l.originalValue=l.value,l.focus()}else{if(o.style.display="",l.value!==l.originalValue){var t=y.parseXml(l.value),r=new x(t);r.decode(t.documentElement,e.graph.getModel())}l.originalValue=null,_.IS_IE&&y.clearSelection(),l.style.display="none",e.graph.container.focus()}};if(e.addAction("switchView",s),C.addListener(i,"click",function(){e.execute("switchView")}),null!=e.urlImage){var c=function(e){var a=e.graph,n=a.view.scale,t=a.getGraphBounds(),r=y.createXmlDocument(),d=r.createElement("output");r.appendChild(d);var l=new L(d);l.translate(Math.floor(1/n-t.x),Math.floor(1/n-t.y)),l.scale(n);var o=new z;o.drawState(a.getView().getState(a.model.root),l);var i=Math.ceil(t.width*n+2),s=Math.ceil(t.height*n+2),c=y.getXml(d);if(i>0&&s>0){var u="export.png",m="png",g="&bg=#FFFFFF";new G(e.urlImage,"filename="+u+"&format="+m+g+"&w="+i+"&h="+s+"&xml="+encodeURIComponent(c)).simulate(document,"_blank")}};e.addAction("exportImage",c)}},validateConnection:function(e){for(var a=[e.source,e.target],n=0,t=a;n<t.length;n++){var r=t[n],d=this.getVertexType(r),l=this.validatees[d];for(var o in l){var i=this.validators[o];try{i(r,e,l[o])}catch(s){throw s}}}},getVertexType:function(e){return e.value.nodeName.toLowerCase()},validateTargets:function(e,a,n){var t=y.equalEntries(e,a.source),r=t?"target":"source",d=this.getVertexType(a[r]);if(!n.includes(d))throw new Error("Invalid type ".concat(d))},validateConstraints:function(e,a,n){var t=this,r=y.equalEntries(e,a.source),d=n[r?"outgoingTo":"incomingFrom"],l=r?"target":"source",o=r?"source":"target",i=this.getVertexType(a[l]),s=e.edges.filter(function(a){return t.getVertexType(a[l])===i&&a[o].id===e.id}),c=s.length;if(c>d[i])throw new Error("Failed to validate, max ".concat(d[i],", found ").concat(c))}}},R=B,$=(n("182e"),n("2877")),J=Object($["a"])(R,l,o,!1,null,"2787fc62",null),U=J.exports,q={name:"App",components:{Editor:U},data:function(){return{actions:["group","ungroup","cut","copy","paste","delete","undo","redo","print","show","exportImage"]}},methods:{execute:function(e){this.$refs.wrapper.editor.execute(e)}}},W=q,K=(n("034f"),Object($["a"])(W,r,d,!1,null,null,null)),Q=K.exports;t["a"].config.productionTip=!1,window.app=new t["a"]({render:function(e){return e(Q)}}).$mount("#app")},"64a9":function(e,a,n){},"9ae9":function(e,a,n){},a83a:function(e,a,n){e.exports=n.p+"img/loading.05538258.gif"}});
//# sourceMappingURL=app.3fd9c6b8.js.map