import{z as P,r as y,P as V,H as E,o as ke,R as B,W as N,X as x,U as X,Y as we,Z as I,e as Ie,f as Se,h as Ae,$ as Te,a0 as je,a1 as qe}from"./index-9b6dcbe1.js";(function(){try{if(typeof document<"u"){var s=document.createElement("style");s.appendChild(document.createTextNode(".mapdiv[data-v-174b771e]{width:100%;height:100%}.info-window-wrapper[data-v-90174664]{display:none}.mapdiv .info-window-wrapper[data-v-90174664]{display:inline-block}.custom-marker-wrapper[data-v-2d2d343a]{display:none}.mapdiv .custom-marker-wrapper[data-v-2d2d343a]{display:inline-block}")),document.head.appendChild(s)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();var Re=Object.defineProperty,Ze=(s,e,t)=>e in s?Re(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,ie=(s,e,t)=>(Ze(s,typeof e!="symbol"?e+"":e,t),t);const z=Symbol("map"),U=Symbol("api"),be=Symbol("marker"),xe=Symbol("markerCluster"),Y=Symbol("CustomMarker"),Ce=Symbol("mapTilesLoaded"),Z=["click","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Be(s,e,t,r){function o(i){return i instanceof t?i:new t(function(n){n(i)})}return new(t||(t=Promise))(function(i,n){function u(c){try{h(r.next(c))}catch(l){n(l)}}function a(c){try{h(r.throw(c))}catch(l){n(l)}}function h(c){c.done?i(c.value):o(c.value).then(u,a)}h((r=r.apply(s,e||[])).next())})}var Ne=function s(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,o,i;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(o=r;o--!==0;)if(!s(e[o],t[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(i=Object.keys(e),r=i.length,r!==Object.keys(t).length)return!1;for(o=r;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[o]))return!1;for(o=r;o--!==0;){var n=i[o];if(!s(e[n],t[n]))return!1}return!0}return e!==e&&t!==t};const ne="__googleMapsScriptId";var q;(function(s){s[s.INITIALIZED=0]="INITIALIZED",s[s.LOADING=1]="LOADING",s[s.SUCCESS=2]="SUCCESS",s[s.FAILURE=3]="FAILURE"})(q||(q={}));class T{constructor({apiKey:e,authReferrerPolicy:t,channel:r,client:o,id:i=ne,language:n,libraries:u=[],mapIds:a,nonce:h,region:c,retries:l=3,url:p="https://maps.googleapis.com/maps/api/js",version:m}){if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=t,this.channel=r,this.client=o,this.id=i||ne,this.language=n,this.libraries=u,this.mapIds=a,this.nonce=h,this.region=c,this.retries=l,this.url=p,this.version=m,T.instance){if(!Ne(this.options,T.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(T.instance.options)}`);return T.instance}T.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?q.FAILURE:this.done?q.SUCCESS:this.loading?q.LOADING:q.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+="?callback=__googleMapsCallback",this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,t)=>{this.loadCallback(r=>{r?t(r.error):e(window.google)})})}importLibrary(e){return this.execute(),google.maps.importLibrary(e)}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){var e,t;if(document.getElementById(this.id)){this.callback();return}const r={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(r).forEach(i=>!r[i]&&delete r[i]),!((t=(e=window==null?void 0:window.google)===null||e===void 0?void 0:e.maps)===null||t===void 0)&&t.importLibrary||(i=>{let n,u,a,h="The Google Maps JavaScript API",c="google",l="importLibrary",p="__ib__",m=document,d=window;d=d[c]||(d[c]={});const g=d.maps||(d.maps={}),f=new Set,v=new URLSearchParams,k=()=>n||(n=new Promise((w,C)=>Be(this,void 0,void 0,function*(){var M;yield u=m.createElement("script"),u.id=this.id,v.set("libraries",[...f]+"");for(a in i)v.set(a.replace(/[A-Z]/g,S=>"_"+S[0].toLowerCase()),i[a]);v.set("callback",c+".maps."+p),u.src=this.url+"?"+v,g[p]=w,u.onerror=()=>n=C(Error(h+" could not load.")),u.nonce=this.nonce||((M=m.querySelector("script[nonce]"))===null||M===void 0?void 0:M.nonce)||"",m.head.append(u)})));g[l]?console.warn(h+" only loads once. Ignoring:",i):g[l]=(w,...C)=>f.add(w)&&k().then(()=>g[l](w,...C))})(r);const o=this.libraries.map(i=>this.importLibrary(i));o.length||o.push(this.importLibrary("core")),Promise.all(o).then(()=>this.callback(),i=>{const n=new ErrorEvent("error",{error:i});this.loadErrorCallback(n)})}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const t=this.errors.length*Math.pow(2,this.errors.length);console.error(`Failed to load Google Maps script, retrying in ${t} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},t)}else this.onerrorEvent=e,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading||(this.loading=!0,this.setScript())}}}function ze(s){return class extends s.OverlayView{constructor(e){super(),ie(this,"element"),ie(this,"opts");const{element:t,...r}=e;this.element=t,this.opts=r,this.opts.map&&this.setMap(this.opts.map)}getPosition(){return this.opts.position?this.opts.position instanceof s.LatLng?this.opts.position:new s.LatLng(this.opts.position):null}getVisible(){if(!this.element)return!1;const e=this.element;return e.style.display!=="none"&&e.style.visibility!=="hidden"&&(e.style.opacity===""||Number(e.style.opacity)>.01)}onAdd(){if(!this.element)return;const e=this.getPanes();e&&e.overlayMouseTarget.appendChild(this.element)}draw(){if(!this.element)return;const e=this.getProjection(),t=e==null?void 0:e.fromLatLngToDivPixel(this.getPosition());if(t){this.element.style.position="absolute";const r=this.element.offsetHeight,o=this.element.offsetWidth;let i,n;switch(this.opts.anchorPoint){case"TOP_CENTER":i=t.x-o/2,n=t.y;break;case"BOTTOM_CENTER":i=t.x-o/2,n=t.y-r;break;case"LEFT_CENTER":i=t.x,n=t.y-r/2;break;case"RIGHT_CENTER":i=t.x-o,n=t.y-r/2;break;case"TOP_LEFT":i=t.x,n=t.y;break;case"TOP_RIGHT":i=t.x-o,n=t.y;break;case"BOTTOM_LEFT":i=t.x,n=t.y-r;break;case"BOTTOM_RIGHT":i=t.x-o,n=t.y-r;break;default:i=t.x-o/2,n=t.y-r/2}this.element.style.left=i+"px",this.element.style.top=n+"px",this.element.style.transform=`translateX(${this.opts.offsetX||0}px) translateY(${this.opts.offsetY||0}px)`,this.opts.zIndex&&(this.element.style.zIndex=this.opts.zIndex.toString())}}onRemove(){this.element&&this.element.remove()}setOptions(e){const{element:t,...r}=e;this.element=t,this.opts=r,this.draw()}}}let ae;const le=["bounds_changed","center_changed","click","dblclick","drag","dragend","dragstart","heading_changed","idle","maptypeid_changed","mousemove","mouseout","mouseover","projection_changed","resize","rightclick","tilesloaded","tilt_changed","zoom_changed"],Ue=P({props:{apiPromise:{type:Promise},apiKey:{type:String,default:""},version:{type:String,default:"weekly"},libraries:{type:Array,default:()=>["places"]},region:{type:String,required:!1},language:{type:String,required:!1},backgroundColor:{type:String,required:!1},center:{type:Object,default:()=>({lat:0,lng:0})},clickableIcons:{type:Boolean,required:!1,default:void 0},controlSize:{type:Number,required:!1},disableDefaultUi:{type:Boolean,required:!1,default:void 0},disableDoubleClickZoom:{type:Boolean,required:!1,default:void 0},draggable:{type:Boolean,required:!1,default:void 0},draggableCursor:{type:String,required:!1},draggingCursor:{type:String,required:!1},fullscreenControl:{type:Boolean,required:!1,default:void 0},fullscreenControlPosition:{type:String,required:!1},gestureHandling:{type:String,required:!1},heading:{type:Number,required:!1},keyboardShortcuts:{type:Boolean,required:!1,default:void 0},mapTypeControl:{type:Boolean,required:!1,default:void 0},mapTypeControlOptions:{type:Object,required:!1},mapTypeId:{type:[Number,String],required:!1},mapId:{type:String,required:!1},maxZoom:{type:Number,required:!1},minZoom:{type:Number,required:!1},noClear:{type:Boolean,required:!1,default:void 0},panControl:{type:Boolean,required:!1,default:void 0},panControlPosition:{type:String,required:!1},restriction:{type:Object,required:!1},rotateControl:{type:Boolean,required:!1,default:void 0},rotateControlPosition:{type:String,required:!1},scaleControl:{type:Boolean,required:!1,default:void 0},scaleControlStyle:{type:Number,required:!1},scrollwheel:{type:Boolean,required:!1,default:void 0},streetView:{type:Object,required:!1},streetViewControl:{type:Boolean,required:!1,default:void 0},streetViewControlPosition:{type:String,required:!1},styles:{type:Array,required:!1},tilt:{type:Number,required:!1},zoom:{type:Number,required:!1},zoomControl:{type:Boolean,required:!1,default:void 0},zoomControlPosition:{type:String,required:!1}},emits:le,setup(s,{emit:e}){const t=y(),r=y(!1),o=y(),i=y(),n=y(!1);V(z,o),V(U,i),V(Ce,n);const u=()=>{const l={...s};Object.keys(l).forEach(d=>{l[d]===void 0&&delete l[d]});const p=d=>{var g;return d?{position:(g=i.value)==null?void 0:g.ControlPosition[d]}:{}},m={scaleControlOptions:s.scaleControlStyle?{style:s.scaleControlStyle}:{},panControlOptions:p(s.panControlPosition),zoomControlOptions:p(s.zoomControlPosition),rotateControlOptions:p(s.rotateControlPosition),streetViewControlOptions:p(s.streetViewControlPosition),fullscreenControlOptions:p(s.fullscreenControlPosition),disableDefaultUI:s.disableDefaultUi};return{...l,...m}},a=E([i,o],([l,p])=>{const m=l,d=p;m&&d&&(m.event.addListenerOnce(d,"tilesloaded",()=>{n.value=!0}),setTimeout(a,0))},{immediate:!0}),h=()=>{try{const{apiKey:l,region:p,version:m,language:d,libraries:g}=s;ae=new T({apiKey:l,region:p,version:m,language:d,libraries:g})}catch(l){console.error(l)}},c=l=>{i.value=I(l.maps),o.value=I(new l.maps.Map(t.value,u()));const p=ze(i.value);i.value[Y]=p,le.forEach(d=>{var g;(g=o.value)==null||g.addListener(d,f=>e(d,f))}),r.value=!0;const m=Object.keys(s).filter(d=>!["apiPromise","apiKey","version","libraries","region","language","center","zoom"].includes(d)).map(d=>N(s,d));E([()=>s.center,()=>s.zoom,...m],([d,g],[f,v])=>{var k,w,C;const{center:M,zoom:S,..._}=u();(k=o.value)==null||k.setOptions(_),g!==void 0&&g!==v&&((w=o.value)==null||w.setZoom(g));const K=!f||d.lng!==f.lng||d.lat!==f.lat;d&&K&&((C=o.value)==null||C.panTo(d))})};return ke(()=>{s.apiPromise&&s.apiPromise instanceof Promise?s.apiPromise.then(c):(h(),ae.load().then(c))}),B(()=>{var l;n.value=!1,o.value&&((l=i.value)==null||l.event.clearInstanceListeners(o.value))}),{mapRef:t,ready:r,map:o,api:i,mapTilesLoaded:n}}}),$e=(s,e)=>{const t=s.__vccOpts||s;for(const[r,o]of e)t[r]=o;return t},De={ref:"mapRef",class:"mapdiv"};function Fe(s,e,t,r,o,i){return Ie(),Se("div",null,[Ae("div",De,null,512),Te(s.$slots,"default",je(qe({ready:s.ready,map:s.map,api:s.api,mapTilesLoaded:s.mapTilesLoaded})),void 0,!0)])}const pt=$e(Ue,[["render",Fe],["__scopeId","data-v-174b771e"]]);function Ve(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ge=function s(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,o,i;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(o=r;o--!==0;)if(!s(e[o],t[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(i=Object.keys(e),r=i.length,r!==Object.keys(t).length)return!1;for(o=r;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[o]))return!1;for(o=r;o--!==0;){var n=i[o];if(!s(e[n],t[n]))return!1}return!0}return e!==e&&t!==t};const j=Ve(Ge),Ke=s=>s==="Marker",We=s=>s===Y,$=(s,e,t,r)=>{const o=y(),i=x(z,y()),n=x(U,y()),u=x(xe,y()),a=X(()=>!!(u.value&&n.value&&(o.value instanceof n.value.Marker||o.value instanceof n.value[Y])));return E([i,t],(h,[c,l])=>{var p,m,d;const g=!j(t.value,l)||i.value!==c;!i.value||!n.value||!g||(o.value?(o.value.setOptions(t.value),a.value&&((p=u.value)==null||p.removeMarker(o.value),(m=u.value)==null||m.addMarker(o.value))):(Ke(s)?o.value=I(new n.value[s](t.value)):We(s)?o.value=I(new n.value[s](t.value)):o.value=I(new n.value[s]({...t.value,map:i.value})),a.value?(d=u.value)==null||d.addMarker(o.value):o.value.setMap(i.value),e.forEach(f=>{var v;(v=o.value)==null||v.addListener(f,k=>r(f,k))})))},{immediate:!0}),B(()=>{var h,c;o.value&&((h=n.value)==null||h.event.clearInstanceListeners(o.value),a.value?(c=u.value)==null||c.removeMarker(o.value):o.value.setMap(null))}),o},ue=["animation_changed","click","dblclick","rightclick","dragstart","dragend","drag","mouseover","mousedown","mouseout","mouseup","draggable_changed","clickable_changed","contextmenu","cursor_changed","flat_changed","rightclick","zindex_changed","icon_changed","position_changed","shape_changed","title_changed","visible_changed"];P({name:"Marker",props:{options:{type:Object,required:!0}},emits:ue,setup(s,{emit:e,expose:t,slots:r}){const o=N(s,"options"),i=$("Marker",ue,o,e);return V(be,i),t({marker:i}),()=>{var n;return(n=r.default)==null?void 0:n.call(r)}}});const dt=P({name:"Polyline",props:{options:{type:Object,required:!0}},emits:Z,setup(s,{emit:e}){const t=N(s,"options");return{polyline:$("Polyline",Z,t,e)}},render:()=>null});P({name:"Polygon",props:{options:{type:Object,required:!0}},emits:Z,setup(s,{emit:e}){const t=N(s,"options");return{polygon:$("Polygon",Z,t,e)}},render:()=>null});const ce=Z.concat(["bounds_changed"]);P({name:"Rectangle",props:{options:{type:Object,required:!0}},emits:ce,setup(s,{emit:e}){const t=N(s,"options");return{rectangle:$("Rectangle",ce,t,e)}},render:()=>null});const he=Z.concat(["center_changed","radius_changed"]);P({name:"Circle",props:{options:{type:Object,required:!0}},emits:he,setup(s,{emit:e}){const t=N(s,"options");return{circle:$("Circle",he,t,e)}},render:()=>null});P({props:{position:{type:String,required:!0},index:{type:Number,default:1}},emits:["content:loaded"],setup(s,{emit:e}){const t=y(null),r=x(z,y()),o=x(U,y()),i=x(Ce,y(!1)),n=y(!1),u=E([i,o,t],([c,l,p])=>{l&&c&&p&&(a(s.position),n.value=!0,e("content:loaded"),setTimeout(u,0))},{immediate:!0}),a=c=>{if(r.value&&o.value&&t.value){const l=o.value.ControlPosition[c];r.value.controls[l].push(t.value)}},h=c=>{if(r.value&&o.value){let l=null;const p=o.value.ControlPosition[c];r.value.controls[p].forEach((m,d)=>{m===t.value&&(l=d)}),l!==null&&r.value.controls[p].removeAt(l)}};return B(()=>h(s.position)),E(()=>s.position,(c,l)=>{h(l),a(c)}),E(()=>s.index,c=>{c&&t.value&&(t.value.index=s.index)}),{controlRef:t,showContent:n}}});const pe=["closeclick","content_changed","domready","position_changed","visible","zindex_changed"];P({inheritAttrs:!1,props:{options:{type:Object,default:()=>({})},modelValue:{type:Boolean}},emits:[...pe,"update:modelValue"],setup(s,{slots:e,emit:t,expose:r}){const o=y(),i=y(),n=x(z,y()),u=x(U,y()),a=x(be,y());let h,c=s.modelValue;const l=X(()=>{var g;return(g=e.default)==null?void 0:g.call(e).some(f=>f.type!==we)}),p=g=>{c=g,t("update:modelValue",g)},m=g=>{o.value&&(o.value.open({map:n.value,anchor:a.value,...g}),p(!0))},d=()=>{o.value&&(o.value.close(),p(!1))};return ke(()=>{E([n,()=>s.options],([g,f],[v,k])=>{var w;const C=!j(f,k)||n.value!==v;n.value&&u.value&&C&&(o.value?(o.value.setOptions({...f,content:l.value?i.value:f.content}),a.value||m()):(o.value=I(new u.value.InfoWindow({...f,content:l.value?i.value:f.content})),a.value&&(h=a.value.addListener("click",()=>{m()})),(!a.value||c)&&m(),pe.forEach(M=>{var S;(S=o.value)==null||S.addListener(M,_=>t(M,_))}),(w=o.value)==null||w.addListener("closeclick",()=>p(!1))))},{immediate:!0}),E(()=>s.modelValue,g=>{g!==c&&(g?m():d())})}),B(()=>{var g;h&&h.remove(),o.value&&((g=u.value)==null||g.event.clearInstanceListeners(o.value),d())}),r({infoWindow:o,open:m,close:d}),{infoWindow:o,infoWindowRef:i,hasSlotContent:l,open:m,close:d}}});const de=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],J=1,D=8;class re{static from(e){if(!(e instanceof ArrayBuffer))throw new Error("Data must be an instance of ArrayBuffer.");const[t,r]=new Uint8Array(e,0,2);if(t!==219)throw new Error("Data does not appear to be in a KDBush format.");const o=r>>4;if(o!==J)throw new Error(`Got v${o} data when expected v${J}.`);const i=de[r&15];if(!i)throw new Error("Unrecognized array type.");const[n]=new Uint16Array(e,2,1),[u]=new Uint32Array(e,4,1);return new re(u,n,i,e)}constructor(e,t=64,r=Float64Array,o){if(isNaN(e)||e<0)throw new Error(`Unpexpected numItems value: ${e}.`);this.numItems=+e,this.nodeSize=Math.min(Math.max(+t,2),65535),this.ArrayType=r,this.IndexArrayType=e<65536?Uint16Array:Uint32Array;const i=de.indexOf(this.ArrayType),n=e*2*this.ArrayType.BYTES_PER_ELEMENT,u=e*this.IndexArrayType.BYTES_PER_ELEMENT,a=(8-u%8)%8;if(i<0)throw new Error(`Unexpected typed array class: ${r}.`);o&&o instanceof ArrayBuffer?(this.data=o,this.ids=new this.IndexArrayType(this.data,D,e),this.coords=new this.ArrayType(this.data,D+u+a,e*2),this._pos=e*2,this._finished=!0):(this.data=new ArrayBuffer(D+n+u+a),this.ids=new this.IndexArrayType(this.data,D,e),this.coords=new this.ArrayType(this.data,D+u+a,e*2),this._pos=0,this._finished=!1,new Uint8Array(this.data,0,2).set([219,(J<<4)+i]),new Uint16Array(this.data,2,1)[0]=t,new Uint32Array(this.data,4,1)[0]=e)}add(e,t){const r=this._pos>>1;return this.ids[r]=r,this.coords[this._pos++]=e,this.coords[this._pos++]=t,r}finish(){const e=this._pos>>1;if(e!==this.numItems)throw new Error(`Added ${e} items when expected ${this.numItems}.`);return te(this.ids,this.coords,this.nodeSize,0,this.numItems-1,0),this._finished=!0,this}range(e,t,r,o){if(!this._finished)throw new Error("Data not yet indexed - call index.finish().");const{ids:i,coords:n,nodeSize:u}=this,a=[0,i.length-1,0],h=[];for(;a.length;){const c=a.pop()||0,l=a.pop()||0,p=a.pop()||0;if(l-p<=u){for(let f=p;f<=l;f++){const v=n[2*f],k=n[2*f+1];v>=e&&v<=r&&k>=t&&k<=o&&h.push(i[f])}continue}const m=p+l>>1,d=n[2*m],g=n[2*m+1];d>=e&&d<=r&&g>=t&&g<=o&&h.push(i[m]),(c===0?e<=d:t<=g)&&(a.push(p),a.push(m-1),a.push(1-c)),(c===0?r>=d:o>=g)&&(a.push(m+1),a.push(l),a.push(1-c))}return h}within(e,t,r){if(!this._finished)throw new Error("Data not yet indexed - call index.finish().");const{ids:o,coords:i,nodeSize:n}=this,u=[0,o.length-1,0],a=[],h=r*r;for(;u.length;){const c=u.pop()||0,l=u.pop()||0,p=u.pop()||0;if(l-p<=n){for(let f=p;f<=l;f++)me(i[2*f],i[2*f+1],e,t)<=h&&a.push(o[f]);continue}const m=p+l>>1,d=i[2*m],g=i[2*m+1];me(d,g,e,t)<=h&&a.push(o[m]),(c===0?e-r<=d:t-r<=g)&&(u.push(p),u.push(m-1),u.push(1-c)),(c===0?e+r>=d:t+r>=g)&&(u.push(m+1),u.push(l),u.push(1-c))}return a}}function te(s,e,t,r,o,i){if(o-r<=t)return;const n=r+o>>1;Me(s,e,n,r,o,i),te(s,e,t,r,n-1,1-i),te(s,e,t,n+1,o,1-i)}function Me(s,e,t,r,o,i){for(;o>r;){if(o-r>600){const h=o-r+1,c=t-r+1,l=Math.log(h),p=.5*Math.exp(2*l/3),m=.5*Math.sqrt(l*p*(h-p)/h)*(c-h/2<0?-1:1),d=Math.max(r,Math.floor(t-c*p/h+m)),g=Math.min(o,Math.floor(t+(h-c)*p/h+m));Me(s,e,t,d,g,i)}const n=e[2*t+i];let u=r,a=o;for(F(s,e,r,t),e[2*o+i]>n&&F(s,e,r,o);u<a;){for(F(s,e,u,a),u++,a--;e[2*u+i]<n;)u++;for(;e[2*a+i]>n;)a--}e[2*r+i]===n?F(s,e,r,a):(a++,F(s,e,a,o)),a<=t&&(r=a+1),t<=a&&(o=a-1)}}function F(s,e,t,r){Q(s,t,r),Q(e,2*t,2*r),Q(e,2*t+1,2*r+1)}function Q(s,e,t){const r=s[e];s[e]=s[t],s[t]=r}function me(s,e,t,r){const o=s-t,i=e-r;return o*o+i*i}const He={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:s=>s},ge=Math.fround||(s=>e=>(s[0]=+e,s[0]))(new Float32Array(1)),A=2,L=3,ee=4,O=5,_e=6;class Pe{constructor(e){this.options=Object.assign(Object.create(He),e),this.trees=new Array(this.options.maxZoom+1),this.stride=this.options.reduce?7:6,this.clusterProps=[]}load(e){const{log:t,minZoom:r,maxZoom:o}=this.options;t&&console.time("total time");const i=`prepare ${e.length} points`;t&&console.time(i),this.points=e;const n=[];for(let a=0;a<e.length;a++){const h=e[a];if(!h.geometry)continue;const[c,l]=h.geometry.coordinates,p=ge(W(c)),m=ge(H(l));n.push(p,m,1/0,a,-1,1),this.options.reduce&&n.push(0)}let u=this.trees[o+1]=this._createTree(n);t&&console.timeEnd(i);for(let a=o;a>=r;a--){const h=+Date.now();u=this.trees[a]=this._createTree(this._cluster(u,a)),t&&console.log("z%d: %d clusters in %dms",a,u.numItems,+Date.now()-h)}return t&&console.timeEnd("total time"),this}getClusters(e,t){let r=((e[0]+180)%360+360)%360-180;const o=Math.max(-90,Math.min(90,e[1]));let i=e[2]===180?180:((e[2]+180)%360+360)%360-180;const n=Math.max(-90,Math.min(90,e[3]));if(e[2]-e[0]>=360)r=-180,i=180;else if(r>i){const l=this.getClusters([r,o,180,n],t),p=this.getClusters([-180,o,i,n],t);return l.concat(p)}const u=this.trees[this._limitZoom(t)],a=u.range(W(r),H(n),W(i),H(o)),h=u.data,c=[];for(const l of a){const p=this.stride*l;c.push(h[p+O]>1?fe(h,p,this.clusterProps):this.points[h[p+L]])}return c}getChildren(e){const t=this._getOriginId(e),r=this._getOriginZoom(e),o="No cluster with the specified id.",i=this.trees[r];if(!i)throw new Error(o);const n=i.data;if(t*this.stride>=n.length)throw new Error(o);const u=this.options.radius/(this.options.extent*Math.pow(2,r-1)),a=n[t*this.stride],h=n[t*this.stride+1],c=i.within(a,h,u),l=[];for(const p of c){const m=p*this.stride;n[m+ee]===e&&l.push(n[m+O]>1?fe(n,m,this.clusterProps):this.points[n[m+L]])}if(l.length===0)throw new Error(o);return l}getLeaves(e,t,r){t=t||10,r=r||0;const o=[];return this._appendLeaves(o,e,t,r,0),o}getTile(e,t,r){const o=this.trees[this._limitZoom(e)],i=Math.pow(2,e),{extent:n,radius:u}=this.options,a=u/n,h=(r-a)/i,c=(r+1+a)/i,l={features:[]};return this._addTileFeatures(o.range((t-a)/i,h,(t+1+a)/i,c),o.data,t,r,i,l),t===0&&this._addTileFeatures(o.range(1-a/i,h,1,c),o.data,i,r,i,l),t===i-1&&this._addTileFeatures(o.range(0,h,a/i,c),o.data,-1,r,i,l),l.features.length?l:null}getClusterExpansionZoom(e){let t=this._getOriginZoom(e)-1;for(;t<=this.options.maxZoom;){const r=this.getChildren(e);if(t++,r.length!==1)break;e=r[0].properties.cluster_id}return t}_appendLeaves(e,t,r,o,i){const n=this.getChildren(t);for(const u of n){const a=u.properties;if(a&&a.cluster?i+a.point_count<=o?i+=a.point_count:i=this._appendLeaves(e,a.cluster_id,r,o,i):i<o?i++:e.push(u),e.length===r)break}return i}_createTree(e){const t=new re(e.length/this.stride|0,this.options.nodeSize,Float32Array);for(let r=0;r<e.length;r+=this.stride)t.add(e[r],e[r+1]);return t.finish(),t.data=e,t}_addTileFeatures(e,t,r,o,i,n){for(const u of e){const a=u*this.stride,h=t[a+O]>1;let c,l,p;if(h)c=Ee(t,a,this.clusterProps),l=t[a],p=t[a+1];else{const g=this.points[t[a+L]];c=g.properties;const[f,v]=g.geometry.coordinates;l=W(f),p=H(v)}const m={type:1,geometry:[[Math.round(this.options.extent*(l*i-r)),Math.round(this.options.extent*(p*i-o))]],tags:c};let d;h||this.options.generateId?d=t[a+L]:d=this.points[t[a+L]].id,d!==void 0&&(m.id=d),n.features.push(m)}}_limitZoom(e){return Math.max(this.options.minZoom,Math.min(Math.floor(+e),this.options.maxZoom+1))}_cluster(e,t){const{radius:r,extent:o,reduce:i,minPoints:n}=this.options,u=r/(o*Math.pow(2,t)),a=e.data,h=[],c=this.stride;for(let l=0;l<a.length;l+=c){if(a[l+A]<=t)continue;a[l+A]=t;const p=a[l],m=a[l+1],d=e.within(a[l],a[l+1],u),g=a[l+O];let f=g;for(const v of d){const k=v*c;a[k+A]>t&&(f+=a[k+O])}if(f>g&&f>=n){let v=p*g,k=m*g,w,C=-1;const M=((l/c|0)<<5)+(t+1)+this.points.length;for(const S of d){const _=S*c;if(a[_+A]<=t)continue;a[_+A]=t;const K=a[_+O];v+=a[_]*K,k+=a[_+1]*K,a[_+ee]=M,i&&(w||(w=this._map(a,l,!0),C=this.clusterProps.length,this.clusterProps.push(w)),i(w,this._map(a,_)))}a[l+ee]=M,h.push(v/f,k/f,1/0,M,-1,f),i&&h.push(C)}else{for(let v=0;v<c;v++)h.push(a[l+v]);if(f>1)for(const v of d){const k=v*c;if(!(a[k+A]<=t)){a[k+A]=t;for(let w=0;w<c;w++)h.push(a[k+w])}}}}return h}_getOriginId(e){return e-this.points.length>>5}_getOriginZoom(e){return(e-this.points.length)%32}_map(e,t,r){if(e[t+O]>1){const n=this.clusterProps[e[t+_e]];return r?Object.assign({},n):n}const o=this.points[e[t+L]].properties,i=this.options.map(o);return r&&i===o?Object.assign({},i):i}}function fe(s,e,t){return{type:"Feature",id:s[e+L],properties:Ee(s,e,t),geometry:{type:"Point",coordinates:[Xe(s[e]),Ye(s[e+1])]}}}function Ee(s,e,t){const r=s[e+O],o=r>=1e4?`${Math.round(r/1e3)}k`:r>=1e3?`${Math.round(r/100)/10}k`:r,i=s[e+_e],n=i===-1?{}:Object.assign({},t[i]);return Object.assign(n,{cluster:!0,cluster_id:s[e+L],point_count:r,point_count_abbreviated:o})}function W(s){return s/360+.5}function H(s){const e=Math.sin(s*Math.PI/180),t=.5-.25*Math.log((1+e)/(1-e))/Math.PI;return t<0?0:t>1?1:t}function Xe(s){return(s-.5)*360}function Ye(s){const e=(180-s*360)*Math.PI/180;return 360*Math.atan(Math.exp(e))/Math.PI-90}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function oe(s,e){var t={};for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&e.indexOf(r)<0&&(t[r]=s[r]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(s);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(s,r[o])&&(t[r[o]]=s[r[o]]);return t}class b{static isAdvancedMarkerAvailable(e){return google.maps.marker&&e.getMapCapabilities().isAdvancedMarkersAvailable===!0}static isAdvancedMarker(e){return google.maps.marker&&e instanceof google.maps.marker.AdvancedMarkerElement}static setMap(e,t){this.isAdvancedMarker(e)?e.map=t:e.setMap(t)}static getPosition(e){if(this.isAdvancedMarker(e)){if(e.position){if(e.position instanceof google.maps.LatLng)return e.position;if(e.position.lat&&e.position.lng)return new google.maps.LatLng(e.position.lat,e.position.lng)}return new google.maps.LatLng(null)}return e.getPosition()}static getVisible(e){return this.isAdvancedMarker(e)?!0:e.getVisible()}}class G{constructor({markers:e,position:t}){this.markers=e,t&&(t instanceof google.maps.LatLng?this._position=t:this._position=new google.maps.LatLng(t))}get bounds(){if(this.markers.length===0&&!this._position)return;const e=new google.maps.LatLngBounds(this._position,this._position);for(const t of this.markers)e.extend(b.getPosition(t));return e}get position(){return this._position||this.bounds.getCenter()}get count(){return this.markers.filter(e=>b.getVisible(e)).length}push(e){this.markers.push(e)}delete(){this.marker&&(b.setMap(this.marker,null),this.marker=void 0),this.markers.length=0}}const Je=(s,e,t,r)=>{const o=Oe(s.getBounds(),e,r);return t.filter(i=>o.contains(b.getPosition(i)))},Oe=(s,e,t)=>{const{northEast:r,southWest:o}=Qe(s,e),i=et({northEast:r,southWest:o},t);return tt(i,e)},ve=(s,e,t)=>{const r=Oe(s,e,t),o=r.getNorthEast(),i=r.getSouthWest();return[i.lng(),i.lat(),o.lng(),o.lat()]},Qe=(s,e)=>({northEast:e.fromLatLngToDivPixel(s.getNorthEast()),southWest:e.fromLatLngToDivPixel(s.getSouthWest())}),et=({northEast:s,southWest:e},t)=>(s.x+=t,s.y-=t,e.x-=t,e.y+=t,{northEast:s,southWest:e}),tt=({northEast:s,southWest:e},t)=>{const r=t.fromDivPixelToLatLng(e),o=t.fromDivPixelToLatLng(s);return new google.maps.LatLngBounds(r,o)};class Le{constructor({maxZoom:e=16}){this.maxZoom=e}noop({markers:e}){return ot(e)}}class rt extends Le{constructor(e){var{viewportPadding:t=60}=e,r=oe(e,["viewportPadding"]);super(r),this.viewportPadding=60,this.viewportPadding=t}calculate({markers:e,map:t,mapCanvasProjection:r}){return t.getZoom()>=this.maxZoom?{clusters:this.noop({markers:e}),changed:!1}:{clusters:this.cluster({markers:Je(t,r,e,this.viewportPadding),map:t,mapCanvasProjection:r})}}}const ot=s=>s.map(e=>new G({position:b.getPosition(e),markers:[e]}));class st extends Le{constructor(e){var{maxZoom:t,radius:r=60}=e,o=oe(e,["maxZoom","radius"]);super({maxZoom:t}),this.state={zoom:-1},this.superCluster=new Pe(Object.assign({maxZoom:this.maxZoom,radius:r},o))}calculate(e){let t=!1;const r={zoom:e.map.getZoom()};if(!j(e.markers,this.markers)){t=!0,this.markers=[...e.markers];const o=this.markers.map(i=>{const n=b.getPosition(i);return{type:"Feature",geometry:{type:"Point",coordinates:[n.lng(),n.lat()]},properties:{marker:i}}});this.superCluster.load(o)}return t||(this.state.zoom<=this.maxZoom||r.zoom<=this.maxZoom)&&(t=!j(this.state,r)),this.state=r,t&&(this.clusters=this.cluster(e)),{clusters:this.clusters,changed:t}}cluster({map:e}){return this.superCluster.getClusters([-180,-90,180,90],Math.round(e.getZoom())).map(t=>this.transformCluster(t))}transformCluster({geometry:{coordinates:[e,t]},properties:r}){if(r.cluster)return new G({markers:this.superCluster.getLeaves(r.cluster_id,1/0).map(i=>i.properties.marker),position:{lat:t,lng:e}});const o=r.marker;return new G({markers:[o],position:b.getPosition(o)})}}class it extends rt{constructor(e){var{maxZoom:t,radius:r=60,viewportPadding:o=60}=e,i=oe(e,["maxZoom","radius","viewportPadding"]);super({maxZoom:t,viewportPadding:o}),this.superCluster=new Pe(Object.assign({maxZoom:this.maxZoom,radius:r},i)),this.state={zoom:-1,view:[0,0,0,0]}}calculate(e){const t={zoom:Math.round(e.map.getZoom()),view:ve(e.map.getBounds(),e.mapCanvasProjection,this.viewportPadding)};let r=!j(this.state,t);if(!j(e.markers,this.markers)){r=!0,this.markers=[...e.markers];const o=this.markers.map(i=>{const n=b.getPosition(i);return{type:"Feature",geometry:{type:"Point",coordinates:[n.lng(),n.lat()]},properties:{marker:i}}});this.superCluster.load(o)}return r&&(this.clusters=this.cluster(e),this.state=t),{clusters:this.clusters,changed:r}}cluster({map:e,mapCanvasProjection:t}){const r={zoom:Math.round(e.getZoom()),view:ve(e.getBounds(),t,this.viewportPadding)};return this.superCluster.getClusters(r.view,r.zoom).map(o=>this.transformCluster(o))}transformCluster({geometry:{coordinates:[e,t]},properties:r}){if(r.cluster)return new G({markers:this.superCluster.getLeaves(r.cluster_id,1/0).map(i=>i.properties.marker),position:{lat:t,lng:e}});const o=r.marker;return new G({markers:[o],position:b.getPosition(o)})}}class nt{constructor(e,t){this.markers={sum:e.length};const r=t.map(i=>i.count),o=r.reduce((i,n)=>i+n,0);this.clusters={count:t.length,markers:{mean:o/t.length,sum:o,min:Math.min(...r),max:Math.max(...r)}}}}class at{render({count:e,position:t},r,o){const i=`<svg fill="${e>Math.max(10,r.clusters.markers.mean)?"#ff0000":"#0000ff"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${e}</text>
</svg>`,n=`Cluster of ${e} markers`,u=Number(google.maps.Marker.MAX_ZINDEX)+e;if(b.isAdvancedMarkerAvailable(o)){const h=document.createElement("div");h.innerHTML=i;const c=h.firstElementChild;c.setAttribute("transform","translate(0 25)");const l={map:o,position:t,zIndex:u,title:n,content:c};return new google.maps.marker.AdvancedMarkerElement(l)}const a={position:t,zIndex:u,title:n,icon:{url:`data:image/svg+xml;base64,${btoa(i)}`,anchor:new google.maps.Point(25,25)}};return new google.maps.Marker(a)}}function lt(s,e){for(let t in e.prototype)s.prototype[t]=e.prototype[t]}class se{constructor(){lt(se,google.maps.OverlayView)}}var R;(function(s){s.CLUSTERING_BEGIN="clusteringbegin",s.CLUSTERING_END="clusteringend",s.CLUSTER_CLICK="click"})(R||(R={}));const ut=(s,e,t)=>{t.fitBounds(e.bounds)};class ct extends se{constructor({map:e,markers:t=[],algorithmOptions:r={},algorithm:o=new st(r),renderer:i=new at,onClusterClick:n=ut}){super(),this.markers=[...t],this.clusters=[],this.algorithm=o,this.renderer=i,this.onClusterClick=n,e&&this.setMap(e)}addMarker(e,t){this.markers.includes(e)||(this.markers.push(e),t||this.render())}addMarkers(e,t){e.forEach(r=>{this.addMarker(r,!0)}),t||this.render()}removeMarker(e,t){const r=this.markers.indexOf(e);return r===-1?!1:(b.setMap(e,null),this.markers.splice(r,1),t||this.render(),!0)}removeMarkers(e,t){let r=!1;return e.forEach(o=>{r=this.removeMarker(o,!0)||r}),r&&!t&&this.render(),r}clearMarkers(e){this.markers.length=0,e||this.render()}render(){const e=this.getMap();if(e instanceof google.maps.Map&&e.getProjection()){google.maps.event.trigger(this,R.CLUSTERING_BEGIN,this);const{clusters:t,changed:r}=this.algorithm.calculate({markers:this.markers,map:e,mapCanvasProjection:this.getProjection()});if(r||r==null){const o=new Set;for(const n of t)n.markers.length==1&&o.add(n.markers[0]);const i=[];for(const n of this.clusters)n.marker!=null&&(n.markers.length==1?o.has(n.marker)||b.setMap(n.marker,null):i.push(n.marker));this.clusters=t,this.renderClusters(),requestAnimationFrame(()=>i.forEach(n=>b.setMap(n,null)))}google.maps.event.trigger(this,R.CLUSTERING_END,this)}}onAdd(){this.idleListener=this.getMap().addListener("idle",this.render.bind(this)),this.render()}onRemove(){google.maps.event.removeListener(this.idleListener),this.reset()}reset(){this.markers.forEach(e=>b.setMap(e,null)),this.clusters.forEach(e=>e.delete()),this.clusters=[]}renderClusters(){const e=new nt(this.markers,this.clusters),t=this.getMap();this.clusters.forEach(r=>{r.markers.length===1?r.marker=r.markers[0]:(r.marker=this.renderer.render(r,e,t),r.markers.forEach(o=>b.setMap(o,null)),this.onClusterClick&&r.marker.addListener("click",o=>{google.maps.event.trigger(this,R.CLUSTER_CLICK,r),this.onClusterClick(o,r,t)})),b.setMap(r.marker,t)})}}const ye=Object.values(R);P({name:"MarkerCluster",props:{options:{type:Object,default:()=>({})}},emits:ye,setup(s,{emit:e,expose:t,slots:r}){const o=y(),i=x(z,y()),n=x(U,y());return V(xe,o),E(i,()=>{i.value&&(o.value=I(new ct({map:i.value,algorithm:new it(s.options.algorithmOptions??{}),...s.options})),ye.forEach(u=>{var a;(a=o.value)==null||a.addListener(u,h=>e(u,h))}))},{immediate:!0}),B(()=>{var u;o.value&&((u=n.value)==null||u.event.clearInstanceListeners(o.value),o.value.clearMarkers(),o.value.setMap(null))}),t({markerCluster:o}),()=>{var u;return(u=r.default)==null?void 0:u.call(r)}}});P({inheritAttrs:!1,props:{options:{type:Object,required:!0}},setup(s,{slots:e,emit:t,expose:r}){const o=y(),i=X(()=>{var a;return(a=e.default)==null?void 0:a.call(e).some(h=>h.type!==we)}),n=X(()=>({...s.options,element:o.value})),u=$(Y,[],n,t);return r({customMarker:u}),{customMarkerRef:o,customMarker:u,hasSlotContent:i}}});P({name:"HeatmapLayer",props:{options:{type:Object,default:()=>({})}},setup(s){const e=y(),t=x(z,y()),r=x(U,y());return E([t,()=>s.options],([o,i],[n,u])=>{var a;const h=!j(i,u)||t.value!==n;if(t.value&&r.value&&h){const c=structuredClone(i);if(c.data&&!(c.data instanceof r.value.MVCArray)){const l=r.value.LatLng;c.data=(a=c.data)==null?void 0:a.map(p=>p instanceof l||"location"in p&&(p.location instanceof l||p.location===null)?p:"location"in p?{...p,location:new l(p.location)}:new l(p))}e.value?e.value.setOptions(c):e.value=I(new r.value.visualization.HeatmapLayer({...c,map:t.value}))}},{immediate:!0}),B(()=>{e.value&&e.value.setMap(null)}),{heatmapLayer:e}},render:()=>null});export{dt as L,pt as O};
