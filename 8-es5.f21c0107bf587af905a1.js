function _createForOfIteratorHelper(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return r=t.done,t},e:function(t){c=!0,i=t},f:function(){try{r||null==n.return||n.return()}finally{if(c)throw i}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Iab2:function(t,e,n){var a,o;void 0===(o="function"==typeof(a=function(){"use strict";function e(t,e,n){var a=new XMLHttpRequest;a.open("GET",t),a.responseType="blob",a.onload=function(){i(a.response,e,n)},a.onerror=function(){console.error("could not download file")},a.send()}function n(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function a(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(n)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,i=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype?function(t,i,r){var c=o.URL||o.webkitURL,s=document.createElement("a");s.download=i=i||t.name||"download",s.rel="noopener","string"==typeof t?(s.href=t,s.origin===location.origin?a(s):n(s.href)?e(t,i,r):a(s,s.target="_blank")):(s.href=c.createObjectURL(t),setTimeout((function(){c.revokeObjectURL(s.href)}),4e4),setTimeout((function(){a(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,o,i){if(o=o||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,i),o);else if(n(t))e(t,o,i);else{var r=document.createElement("a");r.href=t,r.target="_blank",setTimeout((function(){a(r)}))}}:function(t,n,a,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof t)return e(t,n,a);var r="application/octet-stream"===t.type,c=/constructor/i.test(o.HTMLElement)||o.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||r&&c)&&"object"==typeof FileReader){var l=new FileReader;l.onloadend=function(){var t=l.result;t=s?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=t:location=t,i=null},l.readAsDataURL(t)}else{var u=o.URL||o.webkitURL,f=u.createObjectURL(t);i?i.location=f:location.href=f,i=null,setTimeout((function(){u.revokeObjectURL(f)}),4e4)}});o.saveAs=i.saveAs=i,t.exports=i})?a.apply(e,[]):a)||(t.exports=o)},Qirc:function(t,e,n){"use strict";n.r(e),n.d(e,"UploadModule",(function(){return O}));var a,o=n("ofXK"),i=n("tyNb"),r=n("Iab2"),c=n.n(r),s=n("fXoL"),l=((a=function(){function t(){_classCallCheck(this,t),this.Types=["image/jpeg","image/png"],this.Changed=new s.n}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"GetReady",value:function(t){var e={Type:t.type,Size:t.size,Name:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),DataURI:""},n=new FileReader;return n.onload=function(t){e.DataURI=t.target.result},n.readAsDataURL(t),e}},{key:"onFileChange",value:function(t){var e=this,n=Array();if(t.target.files&&t.target.files.length>0){var a,o=_createForOfIteratorHelper(t.target.files);try{var i=function(){var t=a.value;e.Types.find((function(e){return e===t.type}))&&n.push(e.GetReady(t))};for(o.s();!(a=o.n()).done;)i()}catch(r){o.e(r)}finally{o.f()}t.target.value="",n.length>0&&this.Changed.emit(n)}}}]),t}()).\u0275fac=function(t){return new(t||a)},a.\u0275cmp=s.Db({type:a,selectors:[["app-uploader"]],inputs:{Types:"Types"},outputs:{Changed:"Changed"},decls:10,vars:0,consts:[[1,"card"],[1,"card-body"],[1,"input-group","mb-3"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"custom-file"],["type","file","id","customFile","multiple","","accept","image/*",1,"custom-file-input",3,"change"],["for","customFile",1,"custom-file-label"]],template:function(t,e){1&t&&(s.Pb(0,"div",0),s.Pb(1,"div",1),s.Pb(2,"div",2),s.Pb(3,"div",3),s.Pb(4,"span",4),s.Ac(5,"Upload"),s.Ob(),s.Ob(),s.Pb(6,"div",5),s.Pb(7,"input",6),s.Wb("change",(function(t){return e.onFileChange(t)})),s.Ob(),s.Pb(8,"label",7),s.Ac(9,"Choose file"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob())},styles:[""]}),a);function u(t,e){if(1&t){var n=s.Qb();s.Pb(0,"div",9),s.Pb(1,"div",2),s.Kb(2,"img",10),s.Pb(3,"button",11),s.Wb("click",(function(){s.tc(n);var t=e.$implicit;return s.ac().onDelete(t)})),s.Kb(4,"i",12),s.Ob(),s.Pb(5,"button",13),s.Wb("click",(function(){s.tc(n);var t=e.$implicit;return s.ac().onSelect(t)})),s.Kb(6,"i",14),s.Ob(),s.Ac(7),s.Ob(),s.Ob()}if(2&t){var a=e.$implicit;s.xb(2),s.hc("src",a.DataURI,s.vc),s.xb(5),s.Ec(" ",a.Type," ",a.Name," ",a.Size," ")}}function f(t,e){if(1&t){var n=s.Qb();s.Pb(0,"div",9),s.Pb(1,"div",2),s.Pb(2,"button",15),s.Wb("click",(function(){s.tc(n);var t=s.ac();return t.onRotate(t.Selected,"Left")})),s.Kb(3,"i",16),s.Ob(),s.Pb(4,"button",15),s.Wb("click",(function(){s.tc(n);var t=s.ac();return t.onRotate(t.Selected,"Right")})),s.Kb(5,"i",17),s.Ob(),s.Pb(6,"button",15),s.Wb("click",(function(){s.tc(n);var t=s.ac();return t.onFlip(t.Selected,"H")})),s.Kb(7,"i",18),s.Ob(),s.Pb(8,"button",15),s.Wb("click",(function(){s.tc(n);var t=s.ac();return t.onFlip(t.Selected,"V")})),s.Kb(9,"i",19),s.Ob(),s.Pb(10,"button",15),s.Wb("click",(function(){s.tc(n);var t=s.ac();return t.onCrop(t.Selected)})),s.Kb(11,"i",20),s.Ob(),s.Pb(12,"button",15),s.Wb("click",(function(){s.tc(n);var t=s.ac();return t.onSave(t.Selected)})),s.Kb(13,"i",21),s.Ob(),s.Pb(14,"button",22),s.Ac(15," Black & White"),s.Ob(),s.Pb(16,"button",22),s.Ac(17," Sepia"),s.Ob(),s.Pb(18,"button",15),s.Wb("click",(function(){s.tc(n);var t=s.ac();return t.onNegative(t.Selected)})),s.Ac(19," Negative"),s.Ob(),s.Ob(),s.Pb(20,"div",23),s.Kb(21,"img",24),s.Ob(),s.Ob()}if(2&t){var a=s.ac();s.xb(21),s.hc("src",a.Selected.DataURI,s.vc)}}var b,h,d,p=((b=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"onChanged",value:function(t){this.Images=t,console.log(t)}},{key:"onDelete",value:function(t){var e=this.Images.indexOf(t);e>-1&&this.Images.splice(e,1)}},{key:"onSelect",value:function(t){this.Selected=t}},{key:"onRotate",value:function(t,e){var n=new v(t.DataURI);"Left"===e?n.Rotate(-90):"Right"===e&&n.Rotate(90),t.DataURI=n.toDataURL(),console.log(n.DataURItoBlob(t.DataURI)),this.update(t)}},{key:"update",value:function(t){var e=this.Images.indexOf(t);e>-1&&this.Images.splice(e,1),this.Images.push(t)}},{key:"onFlip",value:function(t,e){var n=new v(t.DataURI);"H"===e?n.Flip():"V"===e&&n.Flip(!0),t.DataURI=n.toDataURL(),console.log(n.DataURItoBlob(t.DataURI)),this.update(t)}},{key:"onNegative",value:function(t){var e=new v(t.DataURI);e.Negative(),t.DataURI=e.toDataURL(),console.log(e.DataURItoBlob(t.DataURI)),this.update(t)}},{key:"onCrop",value:function(t){console.log("onCrop"),$("#target").Jcrop({aspectRatio:2/3,minSize:[2,100],maxSize:[500,750]})}},{key:"onSave",value:function(t){var e=new v(t.DataURI).DataURItoBlob(t.DataURI);c.a.saveAs(e,"Test.jpg")}}]),t}()).\u0275fac=function(t){return new(t||b)},b.\u0275cmp=s.Db({type:b,selectors:[["app-image"]],decls:12,vars:2,consts:[[1,"container"],[1,"row"],[1,"col-12"],[1,"card","mb-2"],[1,"card-body"],[1,"btn","btn-outline-primary"],["class","row m-1",4,"ngFor","ngForOf"],["class","row m-1",4,"ngIf"],[3,"Changed"],[1,"row","m-1"],["width","180",1,"img-thumbnail","mb-3","mr-1",3,"src"],[1,"btn","btn-danger",3,"click"],["aria-hidden","true",1,"fa","fa-trash"],[1,"btn","btn-info",3,"click"],["aria-hidden","true",1,"fa","fa-laptop"],[1,"btn","btn-lg","btn-outline-dark","mr-1",3,"click"],[1,"fas","fa-undo"],[1,"fas","fa-redo"],[1,"fas","fa-arrows-alt-h"],[1,"fas","fa-arrows-alt-v"],[1,"fas","fa-crop"],[1,"fas","fa-save"],[1,"btn","btn-lg","btn-outline-dark","mr-1"],[1,"col-6","mx-auto","bg-dark",2,"max-height","800px"],["id","target",1,"img-fluid",3,"src"]],template:function(t,e){1&t&&(s.Pb(0,"div",0),s.Pb(1,"div",1),s.Pb(2,"div",2),s.Pb(3,"div",3),s.Pb(4,"div",4),s.Pb(5,"button",5),s.Ac(6,"Resize"),s.Ob(),s.Pb(7,"button",5),s.Ac(8,"Edit"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.yc(9,u,8,4,"div",6),s.yc(10,f,22,1,"div",7),s.Ob(),s.Pb(11,"app-uploader",8),s.Wb("Changed",(function(t){return e.onChanged(t)})),s.Ob(),s.Ob()),2&t&&(s.xb(9),s.hc("ngForOf",e.Images),s.xb(1),s.hc("ngIf",e.Selected))},directives:[o.k,o.l,l],styles:[""]}),b),v=function(){function t(e){_classCallCheck(this,t),this.canvas=document.createElement("canvas"),this.image=new Image,this.image.src=e,this.canvas.width=this.image.width,this.canvas.height=this.image.height,this.context=this.canvas.getContext("2d"),this.image.onload=function(){console.log(222)}}return _createClass(t,[{key:"toDataURL",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"image/jpeg";return this.context.drawImage(this.image,0,0,this.image.width,this.image.height),this.context.restore(),this.canvas.toDataURL(t,.9)}},{key:"Flip",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.save();var e=this.canvas.width;t?(this.context.translate(0,this.canvas.height),this.context.scale(1,-1)):(this.context.translate(e,0),this.context.scale(-1,1))}},{key:"Rotate",value:function(t){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.save();var e=this.canvas.width,n=this.canvas.height;this.newSize(e,n,t),-90===t?(this.context.rotate(-.5*Math.PI),this.context.translate(-e,0)):90===t&&(this.context.rotate(.5*Math.PI),this.context.translate(0,-n))}},{key:"Negative",value:function(){this.context.drawImage(this.image,0,0);for(var t=this.context.getImageData(0,0,this.canvas.width,this.canvas.height),e=t.data,n=0;n<e.length;n+=4)e[n]=255-e[n],e[n+1]=255-e[n+1],e[n+2]=255-e[n+2];this.context.putImageData(t,0,0)}},{key:"newSize",value:function(t,e,n){var a=n*Math.PI/180,o=Math.cos(a),i=Math.sin(a);i<0&&(i=-i),o<0&&(o=-o),this.canvas.width=e*i+t*o,this.canvas.height=e*o+t*i}},{key:"DataURItoBlob",value:function(t){for(var e=t.split(",")[0].indexOf("base64")>=0?atob(t.split(",")[1]):unescape(t.split(",")[1]),n=t.split(",")[0].split(":")[1].split(";")[0],a=new Uint8Array(e.length),o=0;o<e.length;o++)a[o]=e.charCodeAt(o);return new Blob([a],{type:n})}}]),t}(),g=n("L2Ov"),m=n("wjAv"),y=[{path:"",children:[{path:"Image",component:p,children:[]},{path:"",component:p,children:[]},{path:"**",resolve:{path:g.c},component:m.c}]}],w=((h=function t(){_classCallCheck(this,t)}).\u0275mod=s.Hb({type:h}),h.\u0275inj=s.Gb({factory:function(t){return new(t||h)},imports:[[i.h.forChild(y)],i.h]}),h),k=[n("H8qh").a],O=((d=function t(){_classCallCheck(this,t)}).\u0275mod=s.Hb({type:d}),d.\u0275inj=s.Gb({factory:function(t){return new(t||d)},imports:[[o.c].concat(k,[w])]}),d)}}]);