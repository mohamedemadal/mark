import{e as o,f as a,F as d,k as m,a8 as r,h as l,K as D,G as B,l as A,z as V,A as W,B as E,r as b,U as C,d as z,C as k,w as q,i as y,m as H,t as L,j as v,af as U}from"./index-9b6dcbe1.js";var h=(i,s)=>{const t=i.__vccOpts||i;for(const[n,p]of s)t[n]=p;return t};const Z={name:"HollowDotsSpinner",props:{animationDuration:{type:Number,default:1e3},dotSize:{type:Number,default:15},dotsNum:{type:Number,default:3},color:{type:String,default:"#fff"}},computed:{horizontalMargin(){return this.dotSize/2},spinnerStyle(){return{height:`${this.dotSize}px`,width:`${(this.dotSize+this.horizontalMargin*2)*this.dotsNum}px`}},dotStyle(){return{animationDuration:`${this.animationDuration}ms`,width:`${this.dotSize}px`,height:`${this.dotSize}px`,margin:`0 ${this.horizontalMargin}px`,borderWidth:`${this.dotSize/5}px`,borderColor:this.color}},dotsStyles(){const i=[],t=this.animationDuration;for(let n=1;n<=this.dotsNum;n++)i.push({animationDelay:`${t*n*.3}ms`,...this.dotStyle});return i}}};function G(i,s,t,n,p,e){return o(),a("div",{class:"hollow-dots-spinner",style:r(e.spinnerStyle)},[(o(!0),a(d,null,m(e.dotsStyles,(u,c)=>(o(),a("div",{key:c,class:"dot",style:r(u)},null,4))),128))],4)}var J=h(Z,[["render",G]]);var S={appendKeyframes:(i,s)=>{if(!(window!=null&&window.document))return;const t=document.createElement("style");t.setAttribute("id",i),t.innerHTML=`@keyframes ${i} {${s}}`,document.body.appendChild(t)},removeKeyframes:i=>{var t;if(!(window!=null&&window.document))return;const s=document.getElementById(i);s&&((t=s.parentNode)==null||t.removeChild(s))}};const Q={name:"PixelSpinner",props:{animationDuration:{type:Number,default:1500},size:{type:Number,default:70},color:{type:String,default:"#fff"}},data(){return{animationName:`pixel-spinner-animation-${Date.now()}`}},computed:{pixelSize(){return this.size/7},spinnerStyle(){return{width:`${this.size}px`,height:`${this.size}px`}},spinnerInnerStyle(){return{animationDuration:`${this.animationDuration}ms`,animationName:this.animationName,width:`${this.pixelSize}px`,height:`${this.pixelSize}px`,backgroundColor:this.color,color:this.color,boxShadow:`
          ${this.pixelSize*1.5}px ${this.pixelSize*1.5}px 0 0,
          ${this.pixelSize*-1.5}px ${this.pixelSize*-1.5}px 0 0,
          ${this.pixelSize*1.5}px ${this.pixelSize*-1.5}px 0 0,
          ${this.pixelSize*-1.5}px ${this.pixelSize*1.5}px 0 0,
          0 ${this.pixelSize*1.5}px 0 0,
          ${this.pixelSize*1.5}px 0 0 0,
          ${this.pixelSize*-1.5}px 0 0 0,
          0 ${this.pixelSize*-1.5}px 0 0
        `}}},watch:{size:{handler:"updateAnimation",immediate:!0}},mounted(){this.updateAnimation()},beforeUnmount(){S.removeKeyframes(this.animationName)},methods:{updateAnimation(){S.removeKeyframes(this.animationName),S.appendKeyframes(this.animationName,this.generateKeyframes())},generateKeyframes(){return`
        50% {
          box-shadow:  ${this.pixelSize*2}px ${this.pixelSize*2}px 0 0,
                       ${this.pixelSize*-2}px ${this.pixelSize*-2}px 0 0,
                       ${this.pixelSize*2}px ${this.pixelSize*-2}px 0 0,
                       ${this.pixelSize*-2}px ${this.pixelSize*2}px 0 0,
                       0 ${this.pixelSize}px 0 0,
                       ${this.pixelSize}px 0 0 0,
                       ${this.pixelSize*-1}px 0 0 0,
                       0 ${this.pixelSize*-1}px 0 0;
        }
        75% {
          box-shadow:  ${this.pixelSize*2}px ${this.pixelSize*2}px 0 0,
                       ${this.pixelSize*-2}px ${this.pixelSize*-2}px 0 0,
                       ${this.pixelSize*2}px ${this.pixelSize*-2}px 0 0,
                       ${this.pixelSize*-2}px ${this.pixelSize*2}px 0 0,
                       0 ${this.pixelSize}px 0 0,
                       ${this.pixelSize}px 0 0 0,
                       ${this.pixelSize*-1}px 0 0 0,
                       0 ${this.pixelSize*-1}px 0 0;
        }
        100% {
          transform: rotate(360deg);
        }`}}};function X(i,s,t,n,p,e){return o(),a("div",{class:"pixel-spinner",style:r(e.spinnerStyle)},[l("div",{class:"pixel-spinner-inner",style:r(e.spinnerInnerStyle)},null,4)],4)}var Y=h(Q,[["render",X]]);const ee={name:"FlowerSpinner",props:{animationDuration:{type:Number,default:2500},size:{type:Number,default:70},color:{type:String,default:"#fff"}},data(){return{smallDotName:`flower-spinner-small-dot-${Date.now()}`,bigDotName:`flower-spinner-big-dot-${Date.now()}`}},computed:{dotSize(){return this.size/7},spinnerStyle(){return{width:`${this.size}px`,height:`${this.size}px`}},dotsContainerStyle(){return{width:`${this.dotSize}px`,height:`${this.dotSize}px`}},smallerDotStyle(){return{background:this.color,animationDuration:`${this.animationDuration}ms`,animationName:this.smallDotName}},biggerDotStyle(){return{background:this.color,animationDuration:`${this.animationDuration}ms`,animationName:this.bigDotName}}},watch:{size:{handler:"updateAnimation",immediate:!0},color:{handler:"updateAnimation",immediate:!0}},beforeUnmount(){S.removeKeyframes(this.smallDotName),S.removeKeyframes(this.bigDotName)},methods:{updateAnimation(){S.removeKeyframes(this.smallDotName),S.appendKeyframes(this.smallDotName,this.generateSmallDotKeyframes()),S.removeKeyframes(this.bigDotName),S.appendKeyframes(this.bigDotName,this.generateBigDotKeyframes())},generateSmallDotKeyframes(){return`
        0%, 100% {
          box-shadow: 0 0 0 ${this.color},
                      0 0 0 ${this.color},
                      0 0 0 ${this.color},
                      0 0 0 ${this.color},
                      0 0 0 ${this.color},
                      0 0 0 ${this.color},
                      0 0 0 ${this.color},
                      0 0 0 ${this.color};
        }
        25%, 75% {
          box-shadow: ${this.dotSize*1.4}px 0 0 ${this.color},
                      -${this.dotSize*1.4}px 0 0 ${this.color},
                      0 ${this.dotSize*1.4}px 0 ${this.color},
                      0 -${this.dotSize*1.4}px 0 ${this.color},
                      ${this.dotSize}px -${this.dotSize}px 0 ${this.color},
                      ${this.dotSize}px ${this.dotSize}px 0 ${this.color},
                      -${this.dotSize}px -${this.dotSize}px 0 ${this.color},
                      -${this.dotSize}px ${this.dotSize}px 0 ${this.color};
        }
        100% {
          box-shadow: 0 0 0 ${this.color},
                      0 0 0 ${this.color},
                      0 0 0 ${this.color},
                      0 0 0 ${this.color},
                      0 0 0 ${this.color},
                      0 0 0 ${this.color},
                      0 0 0 ${this.color},
                      0 0 0 ${this.color};
        }`},generateBigDotKeyframes(){return`
        0%, 100% {
          box-shadow: 0 0 0 ${this.color},
                      0 0 0 ${this.color},
                      0 0 0 ${this.color},
                      0 0 0 ${this.color},
                      0 0 0 ${this.color},
                      0 0 0 ${this.color},
                      0 0 0 ${this.color},
                      0 0 0 ${this.color};
        }
        50% {
          transform: rotate(180deg);
        }
        25%, 75% {
          box-shadow: ${this.dotSize*2.6}px 0 0 ${this.color},
                      -${this.dotSize*2.6}px 0 0 ${this.color},
                      0 ${this.dotSize*2.6}px 0 ${this.color},
                      0 -${this.dotSize*2.6}px 0 ${this.color},
                      ${this.dotSize*1.9}px -${this.dotSize*1.9}px 0 ${this.color},
                      ${this.dotSize*1.9}px ${this.dotSize*1.9}px 0 ${this.color},
                      -${this.dotSize*1.9}px -${this.dotSize*1.9}px 0 ${this.color},
                      -${this.dotSize*1.9}px ${this.dotSize*1.9}px 0 ${this.color};
        }
        100% {
          transform: rotate(360deg);
          box-shadow: 0 0 0 ${this.color},
                      0 0 0 ${this.color},
                      0 0 0 ${this.color},
                      0 0 0 ${this.color},
                      0 0 0 ${this.color},
                      0 0 0 ${this.color},
                      0 0 0 ${this.color},
                      0 0 0 ${this.color};
        }`}}};function te(i,s,t,n,p,e){return o(),a("div",{class:"flower-spinner",style:r(e.spinnerStyle)},[l("div",{class:"dots-container",style:r(e.dotsContainerStyle)},[l("div",{class:"big-dot",style:r(e.biggerDotStyle)},[l("div",{class:"small-dot",style:r(e.smallerDotStyle)},null,4)],4)],4)],4)}var ie=h(ee,[["render",te]]);const re={name:"IntersectingCirclesSpinner",props:{animationDuration:{type:Number,default:1200},size:{type:Number,default:70},color:{type:String,default:"#fff"}},computed:{circleSize(){return this.size/2},spinnerStyle(){return{width:`${this.size}px`,height:`${this.size}px`}},spinnerBlockStyle(){return{animationDuration:`${this.animationDuration}ms`,width:`${this.circleSize}px`,height:`${this.circleSize}px`}},circleStyle(){return{borderColor:this.color}},circleStyles(){return[{top:0,left:0},{left:`${this.circleSize*-.36}px`,top:`${this.circleSize*.2}px`},{left:`${this.circleSize*-.36}px`,top:`${this.circleSize*-.2}px`},{left:0,top:`${this.circleSize*-.36}px`},{left:`${this.circleSize*.36}px`,top:`${this.circleSize*-.2}px`},{left:`${this.circleSize*.36}px`,top:`${this.circleSize*.2}px`},{left:0,top:`${this.circleSize*.36}px`}].map(s=>Object.assign(s,this.circleStyle))}}};function se(i,s,t,n,p,e){return o(),a("div",{class:"intersecting-circles-spinner",style:r(e.spinnerStyle)},[l("div",{class:"spinnerBlock",style:r(e.spinnerBlockStyle)},[(o(!0),a(d,null,m(e.circleStyles,(u,c)=>(o(),a("span",{key:c,class:"circle",style:r(u)},null,4))),128))],4)],4)}var ne=h(re,[["render",se]]);const oe={name:"OrbitSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:50},color:{type:String,default:"#fff"}},computed:{spinnerStyle(){return{height:`${this.size}px`,width:`${this.size}px`}},orbitStyle(){return{borderColor:this.color,animationDuration:`${this.animationDuration}ms`}}}};function ae(i,s,t,n,p,e){return o(),a("div",{class:"orbit-spinner",style:r(e.spinnerStyle)},[l("div",{class:"orbit one",style:r(e.orbitStyle)},null,4),l("div",{class:"orbit two",style:r(e.orbitStyle)},null,4),l("div",{class:"orbit three",style:r(e.orbitStyle)},null,4)],4)}var le=h(oe,[["render",ae]]);const ce={name:"FingerprintSpinner",props:{animationDuration:{type:Number,default:1500},size:{type:Number,default:60},color:{type:String,default:"#fff"}},data(){return{ringsNum:9,containerPadding:2}},computed:{outerRingSize(){return this.size-this.containerPadding*2},spinnerStyle(){return{height:`${this.size}px`,width:`${this.size}px`,padding:`${this.containerPadding}px`}},ringStyle(){return{borderTopColor:this.color,animationDuration:`${this.animationDuration}ms`}},ringsStyles(){const i=[],s=this.outerRingSize/this.ringsNum,t=s;for(let n=1;n<=this.ringsNum;n++){const p=Object.assign({animationDelay:`${n*50}ms`,height:`${s+(n-1)*t}px`,width:`${s+(n-1)*t}px`},this.ringStyle);i.push(p)}return i}}};function pe(i,s,t,n,p,e){return o(),a("div",{class:"fingerprint-spinner",style:r(e.spinnerStyle)},[(o(!0),a(d,null,m(e.ringsStyles,(u,c)=>(o(),a("div",{key:c,class:"spinner-ring",style:r(u)},null,4))),128))],4)}var ue=h(ce,[["render",pe]]);const he={name:"TrinityRingsSpinner",props:{animationDuration:{type:Number,default:1500},size:{type:Number,default:60},color:{type:String,default:"#fff"}},data(){return{containerPadding:3}},computed:{outerRingSize(){return this.size-this.containerPadding*2},spinnerStyle(){return{height:`${this.size}px`,width:`${this.size}px`,padding:`${this.containerPadding}px`}},ring1Style(){return{height:`${this.outerRingSize}px`,width:`${this.outerRingSize}px`,borderColor:this.color,animationDuration:`${this.animationDuration}ms`}},ring2Style(){return{height:`${this.outerRingSize*.65}px`,width:`${this.outerRingSize*.65}px`,borderColor:this.color,animationDuration:`${this.animationDuration}ms`}},ring3Style(){return{height:`${this.outerRingSize*.1}px`,width:`${this.outerRingSize*.1}px`,borderColor:this.color,animationDuration:`${this.animationDuration}ms`}}}};function de(i,s,t,n,p,e){return o(),a("div",{class:"trinity-rings-spinner",style:r(e.spinnerStyle)},[l("div",{class:"circle circle1",style:r(e.ring1Style)},null,4),l("div",{class:"circle circle2",style:r(e.ring2Style)},null,4),l("div",{class:"circle circle3",style:r(e.ring3Style)},null,4)],4)}var me=h(he,[["render",de]]);const Se={name:"FulfillingSquareSpinner",props:{animationDuration:{type:Number,default:4e3},size:{type:Number,default:50},color:{type:String,default:"#fff"}},computed:{spinnerStyle(){return{height:`${this.size}px`,width:`${this.size}px`,borderColor:this.color,animationDuration:`${this.animationDuration}ms`}},spinnerInnerStyle(){return{backgroundColor:this.color,animationDuration:`${this.animationDuration}ms`}}}};function $e(i,s,t,n,p,e){return o(),a("div",{class:"fulfilling-square-spinner",style:r(e.spinnerStyle)},[l("div",{class:"spinner-inner",style:r(e.spinnerInnerStyle)},null,4)],4)}var ye=h(Se,[["render",$e]]);const fe={name:"CirclesToRhombusesSpinner",props:{animationDuration:{type:Number,default:1200},circleSize:{type:Number,default:15},color:{type:String,default:"#fff"},circlesNum:{type:Number,default:3}},computed:{circleMarginLeft(){return this.circleSize*1.125},spinnerStyle(){return{height:`${this.circleSize}px`,width:`${(this.circleSize+this.circleMarginLeft)*this.circlesNum}px`}},circleStyle(){return{borderColor:this.color,animationDuration:`${this.animationDuration}ms`,height:`${this.circleSize}px`,width:`${this.circleSize}px`,marginLeft:`${this.circleMarginLeft}px`}},circlesStyles(){const i=[];for(let t=1;t<=this.circlesNum;t++){const n=Object.assign({animationDelay:`${t*150}ms`},this.circleStyle);t===1&&(n.marginLeft=0),i.push(n)}return i}}};function xe(i,s,t,n,p,e){return o(),a("div",{class:"circles-to-rhombuses-spinner",style:r(e.spinnerStyle)},[(o(!0),a(d,null,m(e.circlesStyles,(u,c)=>(o(),a("div",{key:c,class:"circle",style:r(u)},null,4))),128))],4)}var ge=h(fe,[["render",xe]]);const ze={name:"SemipolarSpinner",props:{animationDuration:{type:Number,default:2e3},size:{type:Number,default:65},color:{type:String,default:"#fff"}},data(){return{ringsNum:5}},computed:{spinnerStyle(){return{height:`${this.size}px`,width:`${this.size}px`}},ringStyle(){return{animationDuration:`${this.animationDuration}ms`,borderTopColor:this.color,borderLeftColor:this.color}},ringsStyles(){const i=[],t=this.size*.05,n=t*2,p=this.size*.2;for(let e=0;e<this.ringsNum;e++){const u=`${this.size-p*e}px`,c=`${n*e}px`,w=Object.assign({animationDelay:`${this.animationDuration*.1*(this.ringsNum-e-1)}ms`,height:u,width:u,left:c,top:c,borderWidth:`${t}px`},this.ringStyle);i.push(w)}return i}}};function _e(i,s,t,n,p,e){return o(),a("div",{class:"semipolar-spinner",style:r(e.spinnerStyle)},[(o(!0),a(d,null,m(e.ringsStyles,(u,c)=>(o(),a("div",{key:c,class:"ring",style:r(u)},null,4))),128))],4)}var be=h(ze,[["render",_e]]);const ve={name:"BreedingRhombusSpinner",props:{animationDuration:{type:Number,default:2e3},size:{type:Number,default:150},color:{type:String,default:"#fff"}},data(){return{animationBaseName:"breeding-rhombus-spinner-animation-child",rhombusesNum:8}},computed:{spinnerStyle(){return{height:`${this.size}px`,width:`${this.size}px`}},rhombusStyle(){return{height:`${this.size/7.5}px`,width:`${this.size/7.5}px`,animationDuration:`${this.animationDuration}ms`,top:`${this.size/2.3077}px`,left:`${this.size/2.3077}px`,backgroundColor:this.color}},rhombusesStyles(){const i=[],s=this.animationDuration*.05;for(let t=1;t<=this.rhombusesNum;t++)i.push(Object.assign({animationDelay:`${s*(t+1)}ms`},this.rhombusStyle));return i},bigRhombusStyle(){return{height:`${this.size/3}px`,width:`${this.size/3}px`,animationDuration:`${this.animationDuration}`,top:`${this.size/3}px`,left:`${this.size/3}px`,backgroundColor:this.color}}}};function De(i,s,t,n,p,e){return o(),a("div",{class:"breeding-rhombus-spinner",style:r(e.spinnerStyle)},[(o(!0),a(d,null,m(e.rhombusesStyles,(u,c)=>(o(),a("div",{key:c,class:D(["rhombus",`child-${c+1}`]),style:r(u)},null,6))),128)),l("div",{class:"rhombus big",style:r(e.bigRhombusStyle)},null,4)],4)}var we=h(ve,[["render",De]]);const Ne={name:"SwappingSquaresSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:65},color:{type:String,default:"#fff"}},data(){return{animationBaseName:"swapping-squares-animation-child",squaresNum:4}},computed:{spinnerStyle(){return{height:`${this.size}px`,width:`${this.size}px`}},squareStyle(){return{height:`${this.size*.25/1.3}px`,width:`${this.size*.25/1.3}px`,animationDuration:`${this.animationDuration}ms`,borderWidth:`${this.size*.04/1.3}px`,borderColor:this.color}},squaresStyles(){const i=[],s=this.animationDuration*.5;for(let t=1;t<=this.squaresNum;t++)i.push(Object.assign({animationDelay:`${t%2===0?s:0}ms`},this.squareStyle));return i}}};function Ce(i,s,t,n,p,e){return o(),a("div",{class:"swapping-squares-spinner",style:r(e.spinnerStyle)},[(o(!0),a(d,null,m(e.squaresStyles,(u,c)=>(o(),a("div",{key:c,class:D(["square",`square-${c+1}`]),style:r(u)},null,6))),128))],4)}var qe=h(Ne,[["render",Ce]]);const ke={name:"ScalingSquaresSpinner",props:{animationDuration:{type:Number,default:1250},size:{type:Number,default:65},color:{type:String,default:"#fff"}},data(){return{squaresNum:4}},computed:{spinnerStyle(){return{height:`${this.size}px`,width:`${this.size}px`,animationDuration:`${this.animationDuration}ms`}},squareStyle(){return{height:`${this.size*.25/1.3}px`,width:`${this.size*.25/1.3}px`,animationDuration:`${this.animationDuration}ms`,borderWidth:`${this.size*.04/1.3}px`,borderColor:this.color}},squaresStyles(){const i=[];for(let s=1;s<=this.squaresNum;s++)i.push(Object.assign({},this.squareStyle));return i}}};function Le(i,s,t,n,p,e){return o(),a("div",{class:"scaling-squares-spinner",style:r(e.spinnerStyle)},[(o(!0),a(d,null,m(e.squaresStyles,(u,c)=>(o(),a("div",{key:c,class:D(["square",`square-${c+1}`]),style:r(u)},null,6))),128))],4)}var Re=h(ke,[["render",Le]]);const Be={name:"FulfillingBouncingCircleSpinner",props:{animationDuration:{type:Number,default:4e3},size:{type:Number,default:60},color:{type:String,default:"#fff"}},computed:{spinnerStyle(){return{height:`${this.size}px`,width:`${this.size}px`,animationDuration:`${this.animationDuration}ms`}},orbitStyle(){return{height:`${this.size}px`,width:`${this.size}px`,borderColor:this.color,borderWidth:`${this.size*.03}px`,animationDuration:`${this.animationDuration}ms`}},circleStyle(){return{height:`${this.size}px`,width:`${this.size}px`,borderColor:this.color,color:this.color,borderWidth:`${this.size*.1}px`,animationDuration:`${this.animationDuration}ms`}}}};function Ae(i,s,t,n,p,e){return o(),a("div",{class:"fulfilling-bouncing-circle-spinner",style:r(e.spinnerStyle)},[l("div",{class:"circle",style:r(e.circleStyle)},null,4),l("div",{class:"orbit",style:r(e.orbitStyle)},null,4)],4)}var Ke=h(Be,[["render",Ae]]);const Ie={name:"RadarSpinner",props:{animationDuration:{type:Number,default:2e3},size:{type:Number,default:110},color:{type:String,default:"#fff"}},data(){return{circlesNum:4}},computed:{borderWidth(){return this.size*5/110},spinnerStyle(){return{height:`${this.size}px`,width:`${this.size}px`}},circleStyle(){return{animationDuration:`${this.animationDuration}ms`}},circleInnerContainerStyle(){return{borderWidth:`${this.borderWidth}px`}},circleInnerStyle(){return{borderLeftColor:this.color,borderRightColor:this.color,borderWidth:`${this.borderWidth}px`}},circlesStyles(){const i=[],s=this.animationDuration*.15;for(let t=0;t<this.circlesNum;t++)i.push(Object.assign({padding:`${this.borderWidth*2*t}px`,animationDelay:`${t===this.circlesNum-1?0:s}ms`},this.circleStyle));return i}}};function je(i,s,t,n,p,e){return o(),a("div",{class:"radar-spinner",style:r(e.spinnerStyle)},[(o(!0),a(d,null,m(e.circlesStyles,(u,c)=>(o(),a("div",{key:c,class:"circle",style:r(u)},[l("div",{class:"circle-inner-container",style:r(e.circleInnerContainerStyle)},[l("div",{class:"circle-inner",style:r(e.circleInnerStyle)},null,4)],4)],4))),128))],4)}var Me=h(Ie,[["render",je]]);const Oe={name:"SelfBuildingSquareSpinner",props:{animationDuration:{type:Number,default:6e3},size:{type:Number,default:40},color:{type:String,default:"#fff"}},data(){return{squaresNum:9}},computed:{squareSize(){return this.size/4},initialTopPosition(){return-this.squareSize*2/3},spinnerStyle(){return{top:`${-this.initialTopPosition}px`,height:`${this.size}px`,width:`${this.size}px`}},squareStyle(){return{height:`${this.squareSize}px`,width:`${this.squareSize}px`,top:`${this.initialTopPosition}px`,marginRight:`${this.squareSize/3}px`,marginTop:`${this.squareSize/3}px`,animationDuration:`${this.animationDuration}ms`,background:this.color}},squaresStyles(){const i=[],s=[6,7,8,3,4,5,0,1,2],t=this.animationDuration*.05;for(let n=0;n<this.squaresNum;n++)i.push(Object.assign({animationDelay:`${t*s[n]}ms`},this.squareStyle));return i}}};function Pe(i,s,t,n,p,e){return o(),a("div",{class:"self-building-square-spinner",style:r(e.spinnerStyle)},[(o(!0),a(d,null,m(e.squaresStyles,(u,c)=>(o(),a("div",{key:c,class:D(["square",{clear:c&&c%3===0}]),style:r(u)},null,6))),128))],4)}var Fe=h(Oe,[["render",Pe]]);const Te={name:"SpringSpinner",props:{animationDuration:{type:Number,default:3e3},size:{type:Number,default:70},color:{type:String,default:"#fff"}},data(){return{animationName:`spring-spinner-animation-${Date.now()}`}},computed:{spinnerStyle(){return{height:`${this.size}px`,width:`${this.size}px`}},spinnerPartStyle(){return{height:`${this.size/2}px`,width:`${this.size}px`}},rotatorStyle(){return{height:`${this.size}px`,width:`${this.size}px`,borderRightColor:this.color,borderTopColor:this.color,borderWidth:`${this.size/7}px`,animationDuration:`${this.animationDuration}ms`,animationName:this.animationName}}},watch:{size:{handler:"updateAnimation",immediate:!0},color:{handler:"updateAnimation",immediate:!0}},mounted(){this.updateAnimation()},beforeUnmount(){S.removeKeyframes(this.animationName)},methods:{updateAnimation(){S.removeKeyframes(this.animationName),S.appendKeyframes(this.animationName,this.generateKeyframes())},generateKeyframes(){return`
        0% {
          border-width: ${this.size/7}px;
        }
        25% {
          border-width: ${this.size/23.33}px;
        }
        50% {
          transform: rotate(115deg);
          border-width: ${this.size/7}px;
        }
        75% {
          border-width: ${this.size/23.33}px;
          }
        100% {
          border-width: ${this.size/7}px;
        }`}}};function Ve(i,s,t,n,p,e){return o(),a("div",{class:"spring-spinner",style:r(e.spinnerStyle)},[l("div",{class:"spring-spinner-part top",style:r(e.spinnerPartStyle)},[l("div",{class:"spring-spinner-rotator",style:r(e.rotatorStyle)},null,4)],4),l("div",{class:"spring-spinner-part bottom",style:r(e.spinnerPartStyle)},[l("div",{class:"spring-spinner-rotator",style:r(e.rotatorStyle)},null,4)],4)],4)}var We=h(Te,[["render",Ve]]);const Ee={name:"LoopingRhombusesSpinner",props:{animationDuration:{type:Number,default:2500},rhombusSize:{type:Number,default:15},color:{type:String,default:"#fff"}},data(){return{rhombusesNum:3}},computed:{spinnerStyle(){return{height:`${this.rhombusSize}px`,width:`${this.rhombusSize*4}px`}},rhombusStyle(){return{height:`${this.rhombusSize}px`,width:`${this.rhombusSize}px`,backgroundColor:this.color,animationDuration:`${this.animationDuration}ms`,left:`${this.rhombusSize*4}px`}},rhombusesStyles(){const i=[],s=-this.animationDuration/1.5;for(let t=1;t<=this.rhombusesNum;t++){const n=Object.assign({animationDelay:`${t*s}ms`},this.rhombusStyle);i.push(n)}return i}}};function He(i,s,t,n,p,e){return o(),a("div",{class:"looping-rhombuses-spinner",style:r(e.spinnerStyle)},[(o(!0),a(d,null,m(e.rhombusesStyles,(u,c)=>(o(),a("div",{key:c,class:"rhombus",style:r(u)},null,4))),128))],4)}var Ue=h(Ee,[["render",He]]);const Ze={name:"HalfCircleSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:60},color:{type:String,default:"#fff"}},computed:{spinnerStyle(){return{height:`${this.size}px`,width:`${this.size}px`}},circleStyle(){return{borderWidth:`${this.size/10}px`,animationDuration:`${this.animationDuration}ms`}},circle1Style(){return Object.assign({borderTopColor:this.color},this.circleStyle)},circle2Style(){return Object.assign({borderBottomColor:this.color},this.circleStyle)}}};function Ge(i,s,t,n,p,e){return o(),a("div",{class:"half-circle-spinner",style:r(e.spinnerStyle)},[l("div",{class:"circle circle-1",style:r(e.circle1Style)},null,4),l("div",{class:"circle circle-2",style:r(e.circle2Style)},null,4)],4)}var Je=h(Ze,[["render",Ge]]);const Qe={name:"AtomSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:60},color:{type:String,default:"#fff"}},computed:{spinnerStyle(){return{height:`${this.size}px`,width:`${this.size}px`}},circleStyle(){return{color:this.color,fontSize:`${this.size*.24}px`}},lineStyle(){return{animationDuration:`${this.animationDuration}ms`,borderLeftWidth:`${this.size/25}px`,borderTopWidth:`${this.size/25}px`,borderLeftColor:this.color}}}},Xe={class:"spinner-inner"};function Ye(i,s,t,n,p,e){return o(),a("div",{class:"atom-spinner",style:r(e.spinnerStyle)},[l("div",Xe,[l("div",{class:"spinner-line",style:r(e.lineStyle)},null,4),l("div",{class:"spinner-line",style:r(e.lineStyle)},null,4),l("div",{class:"spinner-line",style:r(e.lineStyle)},null,4),l("div",{class:"spinner-circle",style:r(e.circleStyle)},"●",4)])],4)}var et=h(Qe,[["render",Ye]]);const R=Object.freeze(Object.defineProperty({__proto__:null,AtomSpinner:et,BreedingRhombusSpinner:we,CirclesToRhombusesSpinner:ge,FingerprintSpinner:ue,FlowerSpinner:ie,FulfillingBouncingCircleSpinner:Ke,FulfillingSquareSpinner:ye,HalfCircleSpinner:Je,HollowDotsSpinner:J,IntersectingCirclesSpinner:ne,LoopingRhombusesSpinner:Ue,OrbitSpinner:le,PixelSpinner:Y,RadarSpinner:Me,ScalingSquaresSpinner:Re,SelfBuildingSquareSpinner:Fe,SemipolarSpinner:be,SpringSpinner:We,SwappingSquaresSpinner:qe,TrinityRingsSpinner:me},Symbol.toStringTag,{value:"Module"}));const tt={},it={"xmlns:xlink":"http://www.w3.org/1999/xlink",class:"va-icon-faster",viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},rt=A('<title>62EBC3B8-A55C-4B01-95A2-52FB8EDD4150</title><defs></defs><g id="symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="icon-faster" fill="#34495E"><g><path id="A" d="M17.748,19 L16.956,16.3 L12.942,16.3 L12.168,19 L8.928,19 L13.302,6.13 L16.614,6.13 L20.988,19 L17.748,19 Z M14.976,9.064 L14.94,9.064 C14.94,9.064 14.652,10.468 14.418,11.278 L13.68,13.78 L16.218,13.78 L15.498,11.278 C15.264,10.468 14.976,9.064 14.976,9.064 Z"></path><rect id="Rectangle-4" x="3" y="11" width="5" height="2" rx="1"></rect><rect id="Rectangle-4-Copy" x="4" y="7" width="6" height="2" rx="1"></rect><rect id="Rectangle-4" x="2" y="15" width="4" height="2" rx="1"></rect></g></g></g>',3),st=[rt];function nt(i,s){return o(),a("svg",it,st)}const ot=B(tt,[["render",nt]]);const at={},lt={"xmlns:xlink":"http://www.w3.org/1999/xlink",class:"va-icon-slower",viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},ct=A('<title>67046716-A590-445C-AC65-1EEF69089C00</title><defs></defs><g id="symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="icon-slower" fill="#34495E"><g><path id="A" d="M16.82,18.87 L16.028,16.17 L12.014,16.17 L11.24,18.87 L8,18.87 L12.374,6 L15.686,6 L20.06,18.87 L16.82,18.87 Z M14.048,8.934 L14.012,8.934 C14.012,8.934 13.724,10.338 13.49,11.148 L12.752,13.65 L15.29,13.65 L14.57,11.148 C14.336,10.338 14.048,8.934 14.048,8.934 Z"></path><rect id="Rectangle-4" x="5" y="11" width="2" height="2" rx="1"></rect><rect id="Rectangle-4-Copy" x="6" y="7" width="3" height="2" rx="1"></rect><rect id="Rectangle-4" x="4" y="15" width="2" height="2" rx="1"></rect></g></g></g>',3),pt=[ct];function ut(i,s){return o(),a("svg",lt,pt)}const ht=B(at,[["render",ut]]),dt={class:"grid grid-cols-12 gap-6"},mt={class:"flex col-span-12 lg:col-span-4 items-center"},St=l("span",{class:"pr-4 spinners__size-smaller"},"A",-1),$t=l("span",{class:"pl-4 spinners__size-bigger"},"A",-1),yt={class:"flex col-span-12 lg:col-span-4 items-center"},ft={class:"h-[140px] flex justify-center items-center"},xt={class:"text-center"},zt=V({setup(i){const{t:s}=W(),{getColor:t}=E(),n=b({size:70,group:4,duration:2e3}),p=b("primary"),e=b({formatter:f=>`${f}px`,min:40,max:100}),u=b({min:1e3,max:3e3}),c=C(()=>t(p.value)),w=C(()=>I(Object.keys(R),n.value.group)),K=C(()=>["primary","success","danger","warning","dark"]);function I(f,$){const _=[];for(let x=0;x<f.length;x+=$)_.push(f.slice(x,x+$));return _}const j=f=>R[f];return(f,$)=>{const _=z("va-card-title"),x=z("va-slider"),M=z("va-color-palette"),O=z("va-divider"),P=z("va-card-content"),F=z("va-card");return o(),k(F,{class:"spinners"},{default:q(()=>[y(_,null,{default:q(()=>[H(L(v(s)("spinners.title")),1)]),_:1}),y(P,null,{default:q(()=>[l("div",dt,[l("div",mt,[St,y(x,{modelValue:n.value.size,"onUpdate:modelValue":$[0]||($[0]=g=>n.value.size=g),class:"flex-grow","track-label-visible":"","track-label":`${n.value.size}px`,min:e.value.min,max:e.value.max},null,8,["modelValue","track-label","min","max"]),$t]),l("div",yt,[y(ht,{class:"pr-4 spinners__duration-slower"}),y(x,{modelValue:n.value.duration,"onUpdate:modelValue":$[1]||($[1]=g=>n.value.duration=g),class:"flex-grow","track-label-visible":"",min:u.value.min,max:u.value.max},null,8,["modelValue","min","max"]),y(ot,{class:"pl-4 spinners__duration-faster"})]),y(M,{modelValue:p.value,"onUpdate:modelValue":$[2]||($[2]=g=>p.value=g),class:"col-span-12 lg:col-span-4",palette:v(K)},null,8,["modelValue","palette"])]),y(O,{class:"py-3"}),(o(!0),a(d,null,m(v(w),(g,T)=>(o(),a("div",{key:T,class:"grid grid-cols-12 gap-6"},[(o(!0),a(d,null,m(g,N=>(o(),a("div",{key:N,class:"sm:col-span-6 col-span-12 lg:col-span-3 flex flex-col"},[l("div",ft,[(o(),k(U(j(N)),{"animation-duration":n.value.duration,color:v(c),size:n.value.size},null,8,["animation-duration","color","size"]))]),l("div",xt,L(N),1)]))),128))]))),128))]),_:1})]),_:1})}}});export{zt as default};
