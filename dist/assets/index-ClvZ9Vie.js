(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qr="160",Zc=0,uo=1,Jc=2,tc=1,nc=2,xn=3,Nn=0,Rt=1,on=2,Ln=0,xi=1,Gi=2,ho=3,fo=4,Qc=5,Wn=100,el=101,tl=102,po=103,mo=104,nl=200,il=201,sl=202,rl=203,Fr=204,Or=205,ol=206,al=207,cl=208,ll=209,ul=210,hl=211,dl=212,fl=213,pl=214,ml=0,_l=1,gl=2,Ds=3,vl=4,xl=5,yl=6,Ml=7,Yr=0,Sl=1,El=2,In=0,wl=1,bl=2,Tl=3,ic=4,Al=5,Cl=6,sc=300,Si=301,Ei=302,Br=303,zr=304,Gs=306,qi=1e3,Zt=1001,kr=1002,Ct=1003,_o=1004,Zs=1005,Ht=1006,Rl=1007,Yi=1008,Dn=1009,Pl=1010,Ll=1011,jr=1012,rc=1013,Rn=1014,Pn=1015,ji=1016,oc=1017,ac=1018,Yn=1020,Il=1021,Jt=1023,Dl=1024,Nl=1025,jn=1026,wi=1027,Ul=1028,cc=1029,Fl=1030,lc=1031,uc=1033,Js=33776,Qs=33777,er=33778,tr=33779,go=35840,vo=35841,xo=35842,yo=35843,hc=36196,Mo=37492,So=37496,Eo=37808,wo=37809,bo=37810,To=37811,Ao=37812,Co=37813,Ro=37814,Po=37815,Lo=37816,Io=37817,Do=37818,No=37819,Uo=37820,Fo=37821,nr=36492,Oo=36494,Bo=36495,Ol=36283,zo=36284,ko=36285,Go=36286,dc=3e3,$n=3001,Bl=3200,zl=3201,fc=0,kl=1,Wt="",gt="srgb",Mn="srgb-linear",$r="display-p3",Hs="display-p3-linear",Ns="linear",Qe="srgb",Us="rec709",Fs="p3",Qn=7680,Ho=519,Gl=512,Hl=513,Vl=514,pc=515,Wl=516,Xl=517,ql=518,Yl=519,Vo=35044,Wo="300 es",Gr=1035,yn=2e3,Os=2001;class Ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ir=Math.PI/180,Hr=180/Math.PI;function Ki(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[r&255]+Mt[r>>8&255]+Mt[r>>16&255]+Mt[r>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function Dt(r,e,t){return Math.max(e,Math.min(t,r))}function jl(r,e){return(r%e+e)%e}function sr(r,e,t){return(1-t)*r+t*e}function Xo(r){return(r&r-1)===0&&r!==0}function Vr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Li(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Lt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,i,s,a,c,u,h){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,c,u,h)}set(e,t,n,i,s,a,c,u,h){const p=this.elements;return p[0]=e,p[1]=i,p[2]=c,p[3]=t,p[4]=s,p[5]=u,p[6]=n,p[7]=a,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],c=n[3],u=n[6],h=n[1],p=n[4],o=n[7],l=n[2],d=n[5],_=n[8],g=i[0],m=i[3],f=i[6],v=i[1],x=i[4],S=i[7],R=i[2],b=i[5],A=i[8];return s[0]=a*g+c*v+u*R,s[3]=a*m+c*x+u*b,s[6]=a*f+c*S+u*A,s[1]=h*g+p*v+o*R,s[4]=h*m+p*x+o*b,s[7]=h*f+p*S+o*A,s[2]=l*g+d*v+_*R,s[5]=l*m+d*x+_*b,s[8]=l*f+d*S+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],c=e[5],u=e[6],h=e[7],p=e[8];return t*a*p-t*c*h-n*s*p+n*c*u+i*s*h-i*a*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],c=e[5],u=e[6],h=e[7],p=e[8],o=p*a-c*h,l=c*u-p*s,d=h*s-a*u,_=t*o+n*l+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=o*g,e[1]=(i*h-p*n)*g,e[2]=(c*n-i*a)*g,e[3]=l*g,e[4]=(p*t-i*u)*g,e[5]=(i*s-c*t)*g,e[6]=d*g,e[7]=(n*u-h*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,c){const u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*a+h*c)+a+e,-i*h,i*u,-i*(-h*a+u*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(rr.makeScale(e,t)),this}rotate(e){return this.premultiply(rr.makeRotation(-e)),this}translate(e,t){return this.premultiply(rr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rr=new ke;function mc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Bs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function $l(){const r=Bs("canvas");return r.style.display="block",r}const qo={};function Hi(r){r in qo||(qo[r]=!0,console.warn(r))}const Yo=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jo=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ns={[Mn]:{transfer:Ns,primaries:Us,toReference:r=>r,fromReference:r=>r},[gt]:{transfer:Qe,primaries:Us,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Hs]:{transfer:Ns,primaries:Fs,toReference:r=>r.applyMatrix3(jo),fromReference:r=>r.applyMatrix3(Yo)},[$r]:{transfer:Qe,primaries:Fs,toReference:r=>r.convertSRGBToLinear().applyMatrix3(jo),fromReference:r=>r.applyMatrix3(Yo).convertLinearToSRGB()}},Kl=new Set([Mn,Hs]),je={enabled:!0,_workingColorSpace:Mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Kl.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=ns[e].toReference,i=ns[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ns[r].primaries},getTransfer:function(r){return r===Wt?Ns:ns[r].transfer}};function yi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function or(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ei;class _c{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ei===void 0&&(ei=Bs("canvas")),ei.width=e.width,ei.height=e.height;const n=ei.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=yi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yi(t[n]/255)*255):t[n]=yi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zl=0;class gc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zl++}),this.uuid=Ki(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,c=i.length;a<c;a++)i[a].isDataTexture?s.push(ar(i[a].image)):s.push(ar(i[a]))}else s=ar(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ar(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_c.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jl=0;class Nt extends Ti{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=Zt,i=Zt,s=Ht,a=Yi,c=Jt,u=Dn,h=Nt.DEFAULT_ANISOTROPY,p=Wt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jl++}),this.uuid=Ki(),this.name="",this.source=new gc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=u,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(Hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===$n?gt:Wt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qi:e.x=e.x-Math.floor(e.x);break;case Zt:e.x=e.x<0?0:1;break;case kr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qi:e.y=e.y-Math.floor(e.y);break;case Zt:e.y=e.y<0?0:1;break;case kr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===gt?$n:dc}set encoding(e){Hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===$n?gt:Wt}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=sc;Nt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,i=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const u=e.elements,h=u[0],p=u[4],o=u[8],l=u[1],d=u[5],_=u[9],g=u[2],m=u[6],f=u[10];if(Math.abs(p-l)<.01&&Math.abs(o-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(p+l)<.1&&Math.abs(o+g)<.1&&Math.abs(_+m)<.1&&Math.abs(h+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(h+1)/2,S=(d+1)/2,R=(f+1)/2,b=(p+l)/4,A=(o+g)/4,O=(_+m)/4;return x>S&&x>R?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=b/n,s=A/n):S>R?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=b/i,s=O/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=A/s,i=O/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(o-g)*(o-g)+(l-p)*(l-p));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(o-g)/v,this.z=(l-p)/v,this.w=Math.acos((h+d+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ql extends Ti{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Hi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===$n?gt:Wt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Nt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends Ql{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class vc extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eu extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Ai=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,c){let u=n[i+0],h=n[i+1],p=n[i+2],o=n[i+3];const l=s[a+0],d=s[a+1],_=s[a+2],g=s[a+3];if(c===0){e[t+0]=u,e[t+1]=h,e[t+2]=p,e[t+3]=o;return}if(c===1){e[t+0]=l,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(o!==g||u!==l||h!==d||p!==_){let m=1-c;const f=u*l+h*d+p*_+o*g,v=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const R=Math.sqrt(x),b=Math.atan2(R,f*v);m=Math.sin(m*b)/R,c=Math.sin(c*b)/R}const S=c*v;if(u=u*m+l*S,h=h*m+d*S,p=p*m+_*S,o=o*m+g*S,m===1-c){const R=1/Math.sqrt(u*u+h*h+p*p+o*o);u*=R,h*=R,p*=R,o*=R}}e[t]=u,e[t+1]=h,e[t+2]=p,e[t+3]=o}static multiplyQuaternionsFlat(e,t,n,i,s,a){const c=n[i],u=n[i+1],h=n[i+2],p=n[i+3],o=s[a],l=s[a+1],d=s[a+2],_=s[a+3];return e[t]=c*_+p*o+u*d-h*l,e[t+1]=u*_+p*l+h*o-c*d,e[t+2]=h*_+p*d+c*l-u*o,e[t+3]=p*_-c*o-u*l-h*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,c=Math.cos,u=Math.sin,h=c(n/2),p=c(i/2),o=c(s/2),l=u(n/2),d=u(i/2),_=u(s/2);switch(a){case"XYZ":this._x=l*p*o+h*d*_,this._y=h*d*o-l*p*_,this._z=h*p*_+l*d*o,this._w=h*p*o-l*d*_;break;case"YXZ":this._x=l*p*o+h*d*_,this._y=h*d*o-l*p*_,this._z=h*p*_-l*d*o,this._w=h*p*o+l*d*_;break;case"ZXY":this._x=l*p*o-h*d*_,this._y=h*d*o+l*p*_,this._z=h*p*_+l*d*o,this._w=h*p*o-l*d*_;break;case"ZYX":this._x=l*p*o-h*d*_,this._y=h*d*o+l*p*_,this._z=h*p*_-l*d*o,this._w=h*p*o+l*d*_;break;case"YZX":this._x=l*p*o+h*d*_,this._y=h*d*o+l*p*_,this._z=h*p*_-l*d*o,this._w=h*p*o-l*d*_;break;case"XZY":this._x=l*p*o-h*d*_,this._y=h*d*o-l*p*_,this._z=h*p*_+l*d*o,this._w=h*p*o+l*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],c=t[5],u=t[9],h=t[2],p=t[6],o=t[10],l=n+c+o;if(l>0){const d=.5/Math.sqrt(l+1);this._w=.25/d,this._x=(p-u)*d,this._y=(s-h)*d,this._z=(a-i)*d}else if(n>c&&n>o){const d=2*Math.sqrt(1+n-c-o);this._w=(p-u)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+h)/d}else if(c>o){const d=2*Math.sqrt(1+c-n-o);this._w=(s-h)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(u+p)/d}else{const d=2*Math.sqrt(1+o-n-c);this._w=(a-i)/d,this._x=(s+h)/d,this._y=(u+p)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,c=t._x,u=t._y,h=t._z,p=t._w;return this._x=n*p+a*c+i*h-s*u,this._y=i*p+a*u+s*c-n*h,this._z=s*p+a*h+n*u-i*c,this._w=a*p-n*c-i*u-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let c=a*e._w+n*e._x+i*e._y+s*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const u=1-c*c;if(u<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const h=Math.sqrt(u),p=Math.atan2(h,c),o=Math.sin((1-t)*p)/h,l=Math.sin(t*p)/h;return this._w=a*o+this._w*l,this._x=n*o+this._x*l,this._y=i*o+this._y*l,this._z=s*o+this._z*l,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($o.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($o.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,c=e.z,u=e.w,h=2*(a*i-c*n),p=2*(c*t-s*i),o=2*(s*n-a*t);return this.x=t+u*h+a*o-c*p,this.y=n+u*p+c*h-s*o,this.z=i+u*o+s*p-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,c=t.y,u=t.z;return this.x=i*u-s*c,this.y=s*a-n*u,this.z=n*c-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return cr.copy(this).projectOnVector(e),this.sub(cr)}reflect(e){return this.sub(cr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cr=new B,$o=new Ai;class Zi{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,c=s.count;a<c;a++)e.isMesh===!0?e.getVertexPosition(a,qt):qt.fromBufferAttribute(s,a),qt.applyMatrix4(e.matrixWorld),this.expandByPoint(qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),is.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),is.copy(n.boundingBox)),is.applyMatrix4(e.matrixWorld),this.union(is)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qt),qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ii),ss.subVectors(this.max,Ii),ti.subVectors(e.a,Ii),ni.subVectors(e.b,Ii),ii.subVectors(e.c,Ii),Sn.subVectors(ni,ti),En.subVectors(ii,ni),On.subVectors(ti,ii);let t=[0,-Sn.z,Sn.y,0,-En.z,En.y,0,-On.z,On.y,Sn.z,0,-Sn.x,En.z,0,-En.x,On.z,0,-On.x,-Sn.y,Sn.x,0,-En.y,En.x,0,-On.y,On.x,0];return!lr(t,ti,ni,ii,ss)||(t=[1,0,0,0,1,0,0,0,1],!lr(t,ti,ni,ii,ss))?!1:(rs.crossVectors(Sn,En),t=[rs.x,rs.y,rs.z],lr(t,ti,ni,ii,ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ln=[new B,new B,new B,new B,new B,new B,new B,new B],qt=new B,is=new Zi,ti=new B,ni=new B,ii=new B,Sn=new B,En=new B,On=new B,Ii=new B,ss=new B,rs=new B,Bn=new B;function lr(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Bn.fromArray(r,s);const c=i.x*Math.abs(Bn.x)+i.y*Math.abs(Bn.y)+i.z*Math.abs(Bn.z),u=e.dot(Bn),h=t.dot(Bn),p=n.dot(Bn);if(Math.max(-Math.max(u,h,p),Math.min(u,h,p))>c)return!1}return!0}const tu=new Zi,Di=new B,ur=new B;class Vs{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):tu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Di.subVectors(e,this.center);const t=Di.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Di,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ur.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Di.copy(e.center).add(ur)),this.expandByPoint(Di.copy(e.center).sub(ur))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new B,hr=new B,os=new B,wn=new B,dr=new B,as=new B,fr=new B;let xc=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){hr.copy(e).add(t).multiplyScalar(.5),os.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(hr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(os),c=wn.dot(this.direction),u=-wn.dot(os),h=wn.lengthSq(),p=Math.abs(1-a*a);let o,l,d,_;if(p>0)if(o=a*u-c,l=a*c-u,_=s*p,o>=0)if(l>=-_)if(l<=_){const g=1/p;o*=g,l*=g,d=o*(o+a*l+2*c)+l*(a*o+l+2*u)+h}else l=s,o=Math.max(0,-(a*l+c)),d=-o*o+l*(l+2*u)+h;else l=-s,o=Math.max(0,-(a*l+c)),d=-o*o+l*(l+2*u)+h;else l<=-_?(o=Math.max(0,-(-a*s+c)),l=o>0?-s:Math.min(Math.max(-s,-u),s),d=-o*o+l*(l+2*u)+h):l<=_?(o=0,l=Math.min(Math.max(-s,-u),s),d=l*(l+2*u)+h):(o=Math.max(0,-(a*s+c)),l=o>0?s:Math.min(Math.max(-s,-u),s),d=-o*o+l*(l+2*u)+h);else l=a>0?-s:s,o=Math.max(0,-(a*l+c)),d=-o*o+l*(l+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,o),i&&i.copy(hr).addScaledVector(os,l),d}intersectSphere(e,t){un.subVectors(e.center,this.origin);const n=un.dot(this.direction),i=un.dot(un)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),c=n-a,u=n+a;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,c,u;const h=1/this.direction.x,p=1/this.direction.y,o=1/this.direction.z,l=this.origin;return h>=0?(n=(e.min.x-l.x)*h,i=(e.max.x-l.x)*h):(n=(e.max.x-l.x)*h,i=(e.min.x-l.x)*h),p>=0?(s=(e.min.y-l.y)*p,a=(e.max.y-l.y)*p):(s=(e.max.y-l.y)*p,a=(e.min.y-l.y)*p),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),o>=0?(c=(e.min.z-l.z)*o,u=(e.max.z-l.z)*o):(c=(e.max.z-l.z)*o,u=(e.min.z-l.z)*o),n>u||c>i)||((c>n||n!==n)&&(n=c),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,n,i,s){dr.subVectors(t,e),as.subVectors(n,e),fr.crossVectors(dr,as);let a=this.direction.dot(fr),c;if(a>0){if(i)return null;c=1}else if(a<0)c=-1,a=-a;else return null;wn.subVectors(this.origin,e);const u=c*this.direction.dot(as.crossVectors(wn,as));if(u<0)return null;const h=c*this.direction.dot(dr.cross(wn));if(h<0||u+h>a)return null;const p=-c*wn.dot(fr);return p<0?null:this.at(p/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class lt{constructor(e,t,n,i,s,a,c,u,h,p,o,l,d,_,g,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,c,u,h,p,o,l,d,_,g,m)}set(e,t,n,i,s,a,c,u,h,p,o,l,d,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=c,f[13]=u,f[2]=h,f[6]=p,f[10]=o,f[14]=l,f[3]=d,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/si.setFromMatrixColumn(e,0).length(),s=1/si.setFromMatrixColumn(e,1).length(),a=1/si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),c=Math.sin(n),u=Math.cos(i),h=Math.sin(i),p=Math.cos(s),o=Math.sin(s);if(e.order==="XYZ"){const l=a*p,d=a*o,_=c*p,g=c*o;t[0]=u*p,t[4]=-u*o,t[8]=h,t[1]=d+_*h,t[5]=l-g*h,t[9]=-c*u,t[2]=g-l*h,t[6]=_+d*h,t[10]=a*u}else if(e.order==="YXZ"){const l=u*p,d=u*o,_=h*p,g=h*o;t[0]=l+g*c,t[4]=_*c-d,t[8]=a*h,t[1]=a*o,t[5]=a*p,t[9]=-c,t[2]=d*c-_,t[6]=g+l*c,t[10]=a*u}else if(e.order==="ZXY"){const l=u*p,d=u*o,_=h*p,g=h*o;t[0]=l-g*c,t[4]=-a*o,t[8]=_+d*c,t[1]=d+_*c,t[5]=a*p,t[9]=g-l*c,t[2]=-a*h,t[6]=c,t[10]=a*u}else if(e.order==="ZYX"){const l=a*p,d=a*o,_=c*p,g=c*o;t[0]=u*p,t[4]=_*h-d,t[8]=l*h+g,t[1]=u*o,t[5]=g*h+l,t[9]=d*h-_,t[2]=-h,t[6]=c*u,t[10]=a*u}else if(e.order==="YZX"){const l=a*u,d=a*h,_=c*u,g=c*h;t[0]=u*p,t[4]=g-l*o,t[8]=_*o+d,t[1]=o,t[5]=a*p,t[9]=-c*p,t[2]=-h*p,t[6]=d*o+_,t[10]=l-g*o}else if(e.order==="XZY"){const l=a*u,d=a*h,_=c*u,g=c*h;t[0]=u*p,t[4]=-o,t[8]=h*p,t[1]=l*o+g,t[5]=a*p,t[9]=d*o-_,t[2]=_*o-d,t[6]=c*p,t[10]=g*o+l}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nu,e,iu)}lookAt(e,t,n){const i=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),bn.crossVectors(n,Ft),bn.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),bn.crossVectors(n,Ft)),bn.normalize(),cs.crossVectors(Ft,bn),i[0]=bn.x,i[4]=cs.x,i[8]=Ft.x,i[1]=bn.y,i[5]=cs.y,i[9]=Ft.y,i[2]=bn.z,i[6]=cs.z,i[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],c=n[4],u=n[8],h=n[12],p=n[1],o=n[5],l=n[9],d=n[13],_=n[2],g=n[6],m=n[10],f=n[14],v=n[3],x=n[7],S=n[11],R=n[15],b=i[0],A=i[4],O=i[8],M=i[12],w=i[1],U=i[5],z=i[9],N=i[13],P=i[2],L=i[6],I=i[10],$=i[14],k=i[3],X=i[7],K=i[11],J=i[15];return s[0]=a*b+c*w+u*P+h*k,s[4]=a*A+c*U+u*L+h*X,s[8]=a*O+c*z+u*I+h*K,s[12]=a*M+c*N+u*$+h*J,s[1]=p*b+o*w+l*P+d*k,s[5]=p*A+o*U+l*L+d*X,s[9]=p*O+o*z+l*I+d*K,s[13]=p*M+o*N+l*$+d*J,s[2]=_*b+g*w+m*P+f*k,s[6]=_*A+g*U+m*L+f*X,s[10]=_*O+g*z+m*I+f*K,s[14]=_*M+g*N+m*$+f*J,s[3]=v*b+x*w+S*P+R*k,s[7]=v*A+x*U+S*L+R*X,s[11]=v*O+x*z+S*I+R*K,s[15]=v*M+x*N+S*$+R*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],c=e[5],u=e[9],h=e[13],p=e[2],o=e[6],l=e[10],d=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+s*u*o-i*h*o-s*c*l+n*h*l+i*c*d-n*u*d)+g*(+t*u*d-t*h*l+s*a*l-i*a*d+i*h*p-s*u*p)+m*(+t*h*o-t*c*d-s*a*o+n*a*d+s*c*p-n*h*p)+f*(-i*c*p-t*u*o+t*c*l+i*a*o-n*a*l+n*u*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],c=e[5],u=e[6],h=e[7],p=e[8],o=e[9],l=e[10],d=e[11],_=e[12],g=e[13],m=e[14],f=e[15],v=o*m*h-g*l*h+g*u*d-c*m*d-o*u*f+c*l*f,x=_*l*h-p*m*h-_*u*d+a*m*d+p*u*f-a*l*f,S=p*g*h-_*o*h+_*c*d-a*g*d-p*c*f+a*o*f,R=_*o*u-p*g*u-_*c*l+a*g*l+p*c*m-a*o*m,b=t*v+n*x+i*S+s*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=v*A,e[1]=(g*l*s-o*m*s-g*i*d+n*m*d+o*i*f-n*l*f)*A,e[2]=(c*m*s-g*u*s+g*i*h-n*m*h-c*i*f+n*u*f)*A,e[3]=(o*u*s-c*l*s-o*i*h+n*l*h+c*i*d-n*u*d)*A,e[4]=x*A,e[5]=(p*m*s-_*l*s+_*i*d-t*m*d-p*i*f+t*l*f)*A,e[6]=(_*u*s-a*m*s-_*i*h+t*m*h+a*i*f-t*u*f)*A,e[7]=(a*l*s-p*u*s+p*i*h-t*l*h-a*i*d+t*u*d)*A,e[8]=S*A,e[9]=(_*o*s-p*g*s-_*n*d+t*g*d+p*n*f-t*o*f)*A,e[10]=(a*g*s-_*c*s+_*n*h-t*g*h-a*n*f+t*c*f)*A,e[11]=(p*c*s-a*o*s-p*n*h+t*o*h+a*n*d-t*c*d)*A,e[12]=R*A,e[13]=(p*g*i-_*o*i+_*n*l-t*g*l-p*n*m+t*o*m)*A,e[14]=(_*c*i-a*g*i-_*n*u+t*g*u+a*n*m-t*c*m)*A,e[15]=(a*o*i-p*c*i+p*n*u-t*o*u-a*n*l+t*c*l)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,c=e.y,u=e.z,h=s*a,p=s*c;return this.set(h*a+n,h*c-i*u,h*u+i*c,0,h*c+i*u,p*c+n,p*u-i*a,0,h*u-i*c,p*u+i*a,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,c=t._z,u=t._w,h=s+s,p=a+a,o=c+c,l=s*h,d=s*p,_=s*o,g=a*p,m=a*o,f=c*o,v=u*h,x=u*p,S=u*o,R=n.x,b=n.y,A=n.z;return i[0]=(1-(g+f))*R,i[1]=(d+S)*R,i[2]=(_-x)*R,i[3]=0,i[4]=(d-S)*b,i[5]=(1-(l+f))*b,i[6]=(m+v)*b,i[7]=0,i[8]=(_+x)*A,i[9]=(m-v)*A,i[10]=(1-(l+g))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=si.set(i[0],i[1],i[2]).length();const a=si.set(i[4],i[5],i[6]).length(),c=si.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Yt.copy(this);const h=1/s,p=1/a,o=1/c;return Yt.elements[0]*=h,Yt.elements[1]*=h,Yt.elements[2]*=h,Yt.elements[4]*=p,Yt.elements[5]*=p,Yt.elements[6]*=p,Yt.elements[8]*=o,Yt.elements[9]*=o,Yt.elements[10]*=o,t.setFromRotationMatrix(Yt),n.x=s,n.y=a,n.z=c,this}makePerspective(e,t,n,i,s,a,c=yn){const u=this.elements,h=2*s/(t-e),p=2*s/(n-i),o=(t+e)/(t-e),l=(n+i)/(n-i);let d,_;if(c===yn)d=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(c===Os)d=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=h,u[4]=0,u[8]=o,u[12]=0,u[1]=0,u[5]=p,u[9]=l,u[13]=0,u[2]=0,u[6]=0,u[10]=d,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,i,s,a,c=yn){const u=this.elements,h=1/(t-e),p=1/(n-i),o=1/(a-s),l=(t+e)*h,d=(n+i)*p;let _,g;if(c===yn)_=(a+s)*o,g=-2*o;else if(c===Os)_=s*o,g=-1*o;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=2*h,u[4]=0,u[8]=0,u[12]=-l,u[1]=0,u[5]=2*p,u[9]=0,u[13]=-d,u[2]=0,u[6]=0,u[10]=g,u[14]=-_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const si=new B,Yt=new lt,nu=new B(0,0,0),iu=new B(1,1,1),bn=new B,cs=new B,Ft=new B,Ko=new lt,Zo=new Ai;class Ws{constructor(e=0,t=0,n=0,i=Ws.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],c=i[8],u=i[1],h=i[5],p=i[9],o=i[2],l=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(l,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,d),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-o,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(-o,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(l,d),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-o,s)):(this._x=0,this._y=Math.atan2(c,d));break;case"XZY":this._z=Math.asin(-Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(l,h),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-p,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ko.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ko,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zo.setFromEuler(this),this.setFromQuaternion(Zo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ws.DEFAULT_ORDER="XYZ";class yc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let su=0;const Jo=new B,ri=new Ai,hn=new lt,ls=new B,Ni=new B,ru=new B,ou=new Ai,Qo=new B(1,0,0),ea=new B(0,1,0),ta=new B(0,0,1),au={type:"added"},cu={type:"removed"};class xt extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new B,t=new Ws,n=new Ai,i=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new lt},normalMatrix:{value:new ke}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.multiply(ri),this}rotateOnWorldAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.premultiply(ri),this}rotateX(e){return this.rotateOnAxis(Qo,e)}rotateY(e){return this.rotateOnAxis(ea,e)}rotateZ(e){return this.rotateOnAxis(ta,e)}translateOnAxis(e,t){return Jo.copy(e).applyQuaternion(this.quaternion),this.position.add(Jo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qo,e)}translateY(e){return this.translateOnAxis(ea,e)}translateZ(e){return this.translateOnAxis(ta,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ls.copy(e):ls.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Ni,ls,this.up):hn.lookAt(ls,Ni,this.up),this.quaternion.setFromRotationMatrix(hn),i&&(hn.extractRotation(i.matrixWorld),ri.setFromRotationMatrix(hn),this.quaternion.premultiply(ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(au)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,e,ru),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,ou,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const c=i[s];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let h=0,p=u.length;h<p;h++){const o=u[h];s(e.shapes,o)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,h=this.material.length;u<h;u++)c.push(s(e.materials,this.material[u]));i.material=c}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];i.animations.push(s(e.animations,u))}}if(t){const c=a(e.geometries),u=a(e.materials),h=a(e.textures),p=a(e.images),o=a(e.shapes),l=a(e.skeletons),d=a(e.animations),_=a(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),o.length>0&&(n.shapes=o),l.length>0&&(n.skeletons=l),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(c){const u=[];for(const h in c){const p=c[h];delete p.metadata,u.push(p)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}xt.DEFAULT_UP=new B(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new B,dn=new B,pr=new B,fn=new B,oi=new B,ai=new B,na=new B,mr=new B,_r=new B,gr=new B;let us=!1;class Kt{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),jt.subVectors(e,t),i.cross(jt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){jt.subVectors(i,t),dn.subVectors(n,t),pr.subVectors(e,t);const a=jt.dot(jt),c=jt.dot(dn),u=jt.dot(pr),h=dn.dot(dn),p=dn.dot(pr),o=a*h-c*c;if(o===0)return s.set(0,0,0),null;const l=1/o,d=(h*u-c*p)*l,_=(a*p-c*u)*l;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(e,t,n,i,s,a,c,u){return us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),us=!0),this.getInterpolation(e,t,n,i,s,a,c,u)}static getInterpolation(e,t,n,i,s,a,c,u){return this.getBarycoord(e,t,n,i,fn)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,fn.x),u.addScaledVector(a,fn.y),u.addScaledVector(c,fn.z),u)}static isFrontFacing(e,t,n,i){return jt.subVectors(n,t),dn.subVectors(e,t),jt.cross(dn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),jt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),us=!0),Kt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Kt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,c;oi.subVectors(i,n),ai.subVectors(s,n),mr.subVectors(e,n);const u=oi.dot(mr),h=ai.dot(mr);if(u<=0&&h<=0)return t.copy(n);_r.subVectors(e,i);const p=oi.dot(_r),o=ai.dot(_r);if(p>=0&&o<=p)return t.copy(i);const l=u*o-p*h;if(l<=0&&u>=0&&p<=0)return a=u/(u-p),t.copy(n).addScaledVector(oi,a);gr.subVectors(e,s);const d=oi.dot(gr),_=ai.dot(gr);if(_>=0&&d<=_)return t.copy(s);const g=d*h-u*_;if(g<=0&&h>=0&&_<=0)return c=h/(h-_),t.copy(n).addScaledVector(ai,c);const m=p*_-d*o;if(m<=0&&o-p>=0&&d-_>=0)return na.subVectors(s,i),c=(o-p)/(o-p+(d-_)),t.copy(i).addScaledVector(na,c);const f=1/(m+g+l);return a=g*f,c=l*f,t.copy(n).addScaledVector(oi,a).addScaledVector(ai,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},hs={h:0,s:0,l:0};function vr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=jl(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=vr(a,s,e+1/3),this.g=vr(a,s,e),this.b=vr(a,s,e-1/3)}return je.toWorkingColorSpace(this,i),this}setStyle(e,t=gt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],c=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){const n=Mc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return je.fromWorkingColorSpace(St.copy(this),e),Math.round(Dt(St.r*255,0,255))*65536+Math.round(Dt(St.g*255,0,255))*256+Math.round(Dt(St.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(St.copy(this),t);const n=St.r,i=St.g,s=St.b,a=Math.max(n,i,s),c=Math.min(n,i,s);let u,h;const p=(c+a)/2;if(c===a)u=0,h=0;else{const o=a-c;switch(h=p<=.5?o/(a+c):o/(2-a-c),a){case n:u=(i-s)/o+(i<s?6:0);break;case i:u=(s-n)/o+2;break;case s:u=(n-i)/o+4;break}u/=6}return e.h=u,e.s=h,e.l=p,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=gt){je.fromWorkingColorSpace(St.copy(this),e);const t=St.r,n=St.g,i=St.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Tn),this.setHSL(Tn.h+e,Tn.s+t,Tn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(hs);const n=sr(Tn.h,hs.h,t),i=sr(Tn.s,hs.s,t),s=sr(Tn.l,hs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new He;He.NAMES=Mc;let lu=0,Ci=class extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=xi,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fr,this.blendDst=Or,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ho,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fr&&(n.blendSrc=this.blendSrc),this.blendDst!==Or&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ho&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const c in s){const u=s[c];delete u.metadata,a.push(u)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class zs extends Ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Yr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new B,ds=new We;class ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ds.fromBufferAttribute(this,t),ds.applyMatrix3(e),this.setXY(t,ds.x,ds.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vo&&(e.usage=this.usage),e}}class Sc extends ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ec extends ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Et extends ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let uu=0;const Gt=new lt,xr=new xt,ci=new B,Ot=new Zi,Ui=new Zi,_t=new B;class Pt extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mc(e)?Ec:Sc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return xr.lookAt(e),xr.updateMatrix(),this.applyMatrix4(xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ot.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const c=t[s];Ui.setFromBufferAttribute(c),this.morphTargetsRelative?(_t.addVectors(Ot.min,Ui.min),Ot.expandByPoint(_t),_t.addVectors(Ot.max,Ui.max),Ot.expandByPoint(_t)):(Ot.expandByPoint(Ui.min),Ot.expandByPoint(Ui.max))}Ot.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)_t.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(_t));if(t)for(let s=0,a=t.length;s<a;s++){const c=t[s],u=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)_t.fromBufferAttribute(c,h),u&&(ci.fromBufferAttribute(e,h),_t.add(ci)),i=Math.max(i,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,c=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ht(new Float32Array(4*c),4));const u=this.getAttribute("tangent").array,h=[],p=[];for(let w=0;w<c;w++)h[w]=new B,p[w]=new B;const o=new B,l=new B,d=new B,_=new We,g=new We,m=new We,f=new B,v=new B;function x(w,U,z){o.fromArray(i,w*3),l.fromArray(i,U*3),d.fromArray(i,z*3),_.fromArray(a,w*2),g.fromArray(a,U*2),m.fromArray(a,z*2),l.sub(o),d.sub(o),g.sub(_),m.sub(_);const N=1/(g.x*m.y-m.x*g.y);isFinite(N)&&(f.copy(l).multiplyScalar(m.y).addScaledVector(d,-g.y).multiplyScalar(N),v.copy(d).multiplyScalar(g.x).addScaledVector(l,-m.x).multiplyScalar(N),h[w].add(f),h[U].add(f),h[z].add(f),p[w].add(v),p[U].add(v),p[z].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let w=0,U=S.length;w<U;++w){const z=S[w],N=z.start,P=z.count;for(let L=N,I=N+P;L<I;L+=3)x(n[L+0],n[L+1],n[L+2])}const R=new B,b=new B,A=new B,O=new B;function M(w){A.fromArray(s,w*3),O.copy(A);const U=h[w];R.copy(U),R.sub(A.multiplyScalar(A.dot(U))).normalize(),b.crossVectors(O,U);const N=b.dot(p[w])<0?-1:1;u[w*4]=R.x,u[w*4+1]=R.y,u[w*4+2]=R.z,u[w*4+3]=N}for(let w=0,U=S.length;w<U;++w){const z=S[w],N=z.start,P=z.count;for(let L=N,I=N+P;L<I;L+=3)M(n[L+0]),M(n[L+1]),M(n[L+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let l=0,d=n.count;l<d;l++)n.setXYZ(l,0,0,0);const i=new B,s=new B,a=new B,c=new B,u=new B,h=new B,p=new B,o=new B;if(e)for(let l=0,d=e.count;l<d;l+=3){const _=e.getX(l+0),g=e.getX(l+1),m=e.getX(l+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),p.subVectors(a,s),o.subVectors(i,s),p.cross(o),c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,g),h.fromBufferAttribute(n,m),c.add(p),u.add(p),h.add(p),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let l=0,d=t.count;l<d;l+=3)i.fromBufferAttribute(t,l+0),s.fromBufferAttribute(t,l+1),a.fromBufferAttribute(t,l+2),p.subVectors(a,s),o.subVectors(i,s),p.cross(o),n.setXYZ(l+0,p.x,p.y,p.z),n.setXYZ(l+1,p.x,p.y,p.z),n.setXYZ(l+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(c,u){const h=c.array,p=c.itemSize,o=c.normalized,l=new h.constructor(u.length*p);let d=0,_=0;for(let g=0,m=u.length;g<m;g++){c.isInterleavedBufferAttribute?d=u[g]*c.data.stride+c.offset:d=u[g]*p;for(let f=0;f<p;f++)l[_++]=h[d++]}return new ht(l,p,o)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,n=this.index.array,i=this.attributes;for(const c in i){const u=i[c],h=e(u,n);t.setAttribute(c,h)}const s=this.morphAttributes;for(const c in s){const u=[],h=s[c];for(let p=0,o=h.length;p<o;p++){const l=h[p],d=e(l,n);u.push(d)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const i={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],p=[];for(let o=0,l=h.length;o<l;o++){const d=h[o];p.push(d.toJSON(e.data))}p.length>0&&(i[u]=p,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const p=i[h];this.setAttribute(h,p.clone(t))}const s=e.morphAttributes;for(const h in s){const p=[],o=s[h];for(let l=0,d=o.length;l<d;l++)p.push(o[l].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,p=a.length;h<p;h++){const o=a[h];this.addGroup(o.start,o.count,o.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ia=new lt,zn=new xc,fs=new Vs,sa=new B,li=new B,ui=new B,hi=new B,yr=new B,ps=new B,ms=new We,_s=new We,gs=new We,ra=new B,oa=new B,aa=new B,vs=new B,xs=new B;class nt extends xt{constructor(e=new Pt,t=new zs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const c=this.morphTargetInfluences;if(s&&c){ps.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const p=c[u],o=s[u];p!==0&&(yr.fromBufferAttribute(o,e),a?ps.addScaledVector(yr,p):ps.addScaledVector(yr.sub(t),p))}t.add(ps)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(s),zn.copy(e.ray).recast(e.near),!(fs.containsPoint(zn.origin)===!1&&(zn.intersectSphere(fs,sa)===null||zn.origin.distanceToSquared(sa)>(e.far-e.near)**2))&&(ia.copy(s).invert(),zn.copy(e.ray).applyMatrix4(ia),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,c=s.index,u=s.attributes.position,h=s.attributes.uv,p=s.attributes.uv1,o=s.attributes.normal,l=s.groups,d=s.drawRange;if(c!==null)if(Array.isArray(a))for(let _=0,g=l.length;_<g;_++){const m=l[_],f=a[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let S=v,R=x;S<R;S+=3){const b=c.getX(S),A=c.getX(S+1),O=c.getX(S+2);i=ys(this,f,e,n,h,p,o,b,A,O),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let m=_,f=g;m<f;m+=3){const v=c.getX(m),x=c.getX(m+1),S=c.getX(m+2);i=ys(this,a,e,n,h,p,o,v,x,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(a))for(let _=0,g=l.length;_<g;_++){const m=l[_],f=a[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(u.count,Math.min(m.start+m.count,d.start+d.count));for(let S=v,R=x;S<R;S+=3){const b=S,A=S+1,O=S+2;i=ys(this,f,e,n,h,p,o,b,A,O),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(u.count,d.start+d.count);for(let m=_,f=g;m<f;m+=3){const v=m,x=m+1,S=m+2;i=ys(this,a,e,n,h,p,o,v,x,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function hu(r,e,t,n,i,s,a,c){let u;if(e.side===Rt?u=n.intersectTriangle(a,s,i,!0,c):u=n.intersectTriangle(i,s,a,e.side===Nn,c),u===null)return null;xs.copy(c),xs.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(xs);return h<t.near||h>t.far?null:{distance:h,point:xs.clone(),object:r}}function ys(r,e,t,n,i,s,a,c,u,h){r.getVertexPosition(c,li),r.getVertexPosition(u,ui),r.getVertexPosition(h,hi);const p=hu(r,e,t,n,li,ui,hi,vs);if(p){i&&(ms.fromBufferAttribute(i,c),_s.fromBufferAttribute(i,u),gs.fromBufferAttribute(i,h),p.uv=Kt.getInterpolation(vs,li,ui,hi,ms,_s,gs,new We)),s&&(ms.fromBufferAttribute(s,c),_s.fromBufferAttribute(s,u),gs.fromBufferAttribute(s,h),p.uv1=Kt.getInterpolation(vs,li,ui,hi,ms,_s,gs,new We),p.uv2=p.uv1),a&&(ra.fromBufferAttribute(a,c),oa.fromBufferAttribute(a,u),aa.fromBufferAttribute(a,h),p.normal=Kt.getInterpolation(vs,li,ui,hi,ra,oa,aa,new B),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const o={a:c,b:u,c:h,normal:new B,materialIndex:0};Kt.getNormal(li,ui,hi,o.normal),p.face=o}return p}class an extends Pt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const c=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const u=[],h=[],p=[],o=[];let l=0,d=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(u),this.setAttribute("position",new Et(h,3)),this.setAttribute("normal",new Et(p,3)),this.setAttribute("uv",new Et(o,2));function _(g,m,f,v,x,S,R,b,A,O,M){const w=S/A,U=R/O,z=S/2,N=R/2,P=b/2,L=A+1,I=O+1;let $=0,k=0;const X=new B;for(let K=0;K<I;K++){const J=K*U-N;for(let j=0;j<L;j++){const Y=j*w-z;X[g]=Y*v,X[m]=J*x,X[f]=P,h.push(X.x,X.y,X.z),X[g]=0,X[m]=0,X[f]=b>0?1:-1,p.push(X.x,X.y,X.z),o.push(j/A),o.push(1-K/O),$+=1}}for(let K=0;K<O;K++)for(let J=0;J<A;J++){const j=l+J+L*K,Y=l+J+L*(K+1),Z=l+(J+1)+L*(K+1),ae=l+(J+1)+L*K;u.push(j,Y,ae),u.push(Y,Z,ae),k+=6}c.addGroup(d,k,M),d+=k,l+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function At(r){const e={};for(let t=0;t<r.length;t++){const n=bi(r[t]);for(const i in n)e[i]=n[i]}return e}function du(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function wc(r){return r.getRenderTarget()===null?r.outputColorSpace:je.workingColorSpace}const fu={clone:bi,merge:At};var pu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends Ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pu,this.fragmentShader=mu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bi(e.uniforms),this.uniformsGroups=du(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bc extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=yn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vt extends bc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ir*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,h=a.fullHeight;s+=a.offsetX*i/u,t-=a.offsetY*n/h,i*=a.width/u,n*=a.height/h}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const di=-90,fi=1;class _u extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Vt(di,fi,e,t);i.layers=this.layers,this.add(i);const s=new Vt(di,fi,e,t);s.layers=this.layers,this.add(s);const a=new Vt(di,fi,e,t);a.layers=this.layers,this.add(a);const c=new Vt(di,fi,e,t);c.layers=this.layers,this.add(c);const u=new Vt(di,fi,e,t);u.layers=this.layers,this.add(u);const h=new Vt(di,fi,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,c,u]=t;for(const h of t)this.remove(h);if(e===yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,c,u,h,p]=this.children,o=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,c),e.setRenderTarget(n,3,i),e.render(t,u),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,p),e.setRenderTarget(o,l,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Tc extends Nt{constructor(e,t,n,i,s,a,c,u,h,p){e=e!==void 0?e:[],t=t!==void 0?t:Si,super(e,t,n,i,s,a,c,u,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gu extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Hi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===$n?gt:Wt),this.texture=new Tc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new an(5,5,5),s=new Zn({name:"CubemapFromEquirect",uniforms:bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:Ln});s.uniforms.tEquirect.value=t;const a=new nt(i,s),c=t.minFilter;return t.minFilter===Yi&&(t.minFilter=Ht),new _u(1,10,this).update(e,a),t.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Mr=new B,vu=new B,xu=new ke;let Hn=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Mr.subVectors(n,t).cross(vu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Mr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xu.getNormalMatrix(e),i=this.coplanarPoint(Mr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const kn=new Vs,Ms=new B;class Kr{constructor(e=new Hn,t=new Hn,n=new Hn,i=new Hn,s=new Hn,a=new Hn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(i),c[4].copy(s),c[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yn){const n=this.planes,i=e.elements,s=i[0],a=i[1],c=i[2],u=i[3],h=i[4],p=i[5],o=i[6],l=i[7],d=i[8],_=i[9],g=i[10],m=i[11],f=i[12],v=i[13],x=i[14],S=i[15];if(n[0].setComponents(u-s,l-h,m-d,S-f).normalize(),n[1].setComponents(u+s,l+h,m+d,S+f).normalize(),n[2].setComponents(u+a,l+p,m+_,S+v).normalize(),n[3].setComponents(u-a,l-p,m-_,S-v).normalize(),n[4].setComponents(u-c,l-o,m-g,S-x).normalize(),t===yn)n[5].setComponents(u+c,l+o,m+g,S+x).normalize();else if(t===Os)n[5].setComponents(c,o,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(e){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ms.x=i.normal.x>0?e.max.x:e.min.x,Ms.y=i.normal.y>0?e.max.y:e.min.y,Ms.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ms)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ac(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function yu(r,e){const t=e.isWebGL2,n=new WeakMap;function i(h,p){const o=h.array,l=h.usage,d=o.byteLength,_=r.createBuffer();r.bindBuffer(p,_),r.bufferData(p,o,l),h.onUploadCallback();let g;if(o instanceof Float32Array)g=r.FLOAT;else if(o instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(o instanceof Int16Array)g=r.SHORT;else if(o instanceof Uint32Array)g=r.UNSIGNED_INT;else if(o instanceof Int32Array)g=r.INT;else if(o instanceof Int8Array)g=r.BYTE;else if(o instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:_,type:g,bytesPerElement:o.BYTES_PER_ELEMENT,version:h.version,size:d}}function s(h,p,o){const l=p.array,d=p._updateRange,_=p.updateRanges;if(r.bindBuffer(o,h),d.count===-1&&_.length===0&&r.bufferSubData(o,0,l),_.length!==0){for(let g=0,m=_.length;g<m;g++){const f=_[g];t?r.bufferSubData(o,f.start*l.BYTES_PER_ELEMENT,l,f.start,f.count):r.bufferSubData(o,f.start*l.BYTES_PER_ELEMENT,l.subarray(f.start,f.start+f.count))}p.clearUpdateRanges()}d.count!==-1&&(t?r.bufferSubData(o,d.offset*l.BYTES_PER_ELEMENT,l,d.offset,d.count):r.bufferSubData(o,d.offset*l.BYTES_PER_ELEMENT,l.subarray(d.offset,d.offset+d.count)),d.count=-1),p.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=n.get(h);p&&(r.deleteBuffer(p.buffer),n.delete(h))}function u(h,p){if(h.isGLBufferAttribute){const l=n.get(h);(!l||l.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const o=n.get(h);if(o===void 0)n.set(h,i(h,p));else if(o.version<h.version){if(o.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(o.buffer,h,p),o.version=h.version}}return{get:a,remove:c,update:u}}class Mi extends Pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,c=Math.floor(n),u=Math.floor(i),h=c+1,p=u+1,o=e/c,l=t/u,d=[],_=[],g=[],m=[];for(let f=0;f<p;f++){const v=f*l-a;for(let x=0;x<h;x++){const S=x*o-s;_.push(S,-v,0),g.push(0,0,1),m.push(x/c),m.push(1-f/u)}}for(let f=0;f<u;f++)for(let v=0;v<c;v++){const x=v+h*f,S=v+h*(f+1),R=v+1+h*(f+1),b=v+1+h*f;d.push(x,S,b),d.push(S,R,b)}this.setIndex(d),this.setAttribute("position",new Et(_,3)),this.setAttribute("normal",new Et(g,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Mu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Su=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Eu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Tu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Au=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ru=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Lu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Iu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Du=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Uu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ju=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ku=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ju=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Qu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,eh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,th=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ih=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ah=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ch=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,uh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ph=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_h=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Eh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Th=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ah=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ch=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ph=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ih=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Fh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Oh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Bh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$h=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Kh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ed=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,td=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,id=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,od=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ad=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ld=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ud=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,md=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Md=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ed=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Td=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ad=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Cd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ld=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Id=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ud=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Od=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$d=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:Mu,alphahash_pars_fragment:Su,alphamap_fragment:Eu,alphamap_pars_fragment:wu,alphatest_fragment:bu,alphatest_pars_fragment:Tu,aomap_fragment:Au,aomap_pars_fragment:Cu,batching_pars_vertex:Ru,batching_vertex:Pu,begin_vertex:Lu,beginnormal_vertex:Iu,bsdfs:Du,iridescence_fragment:Nu,bumpmap_pars_fragment:Uu,clipping_planes_fragment:Fu,clipping_planes_pars_fragment:Ou,clipping_planes_pars_vertex:Bu,clipping_planes_vertex:zu,color_fragment:ku,color_pars_fragment:Gu,color_pars_vertex:Hu,color_vertex:Vu,common:Wu,cube_uv_reflection_fragment:Xu,defaultnormal_vertex:qu,displacementmap_pars_vertex:Yu,displacementmap_vertex:ju,emissivemap_fragment:$u,emissivemap_pars_fragment:Ku,colorspace_fragment:Zu,colorspace_pars_fragment:Ju,envmap_fragment:Qu,envmap_common_pars_fragment:eh,envmap_pars_fragment:th,envmap_pars_vertex:nh,envmap_physical_pars_fragment:ph,envmap_vertex:ih,fog_vertex:sh,fog_pars_vertex:rh,fog_fragment:oh,fog_pars_fragment:ah,gradientmap_pars_fragment:ch,lightmap_fragment:lh,lightmap_pars_fragment:uh,lights_lambert_fragment:hh,lights_lambert_pars_fragment:dh,lights_pars_begin:fh,lights_toon_fragment:mh,lights_toon_pars_fragment:_h,lights_phong_fragment:gh,lights_phong_pars_fragment:vh,lights_physical_fragment:xh,lights_physical_pars_fragment:yh,lights_fragment_begin:Mh,lights_fragment_maps:Sh,lights_fragment_end:Eh,logdepthbuf_fragment:wh,logdepthbuf_pars_fragment:bh,logdepthbuf_pars_vertex:Th,logdepthbuf_vertex:Ah,map_fragment:Ch,map_pars_fragment:Rh,map_particle_fragment:Ph,map_particle_pars_fragment:Lh,metalnessmap_fragment:Ih,metalnessmap_pars_fragment:Dh,morphcolor_vertex:Nh,morphnormal_vertex:Uh,morphtarget_pars_vertex:Fh,morphtarget_vertex:Oh,normal_fragment_begin:Bh,normal_fragment_maps:zh,normal_pars_fragment:kh,normal_pars_vertex:Gh,normal_vertex:Hh,normalmap_pars_fragment:Vh,clearcoat_normal_fragment_begin:Wh,clearcoat_normal_fragment_maps:Xh,clearcoat_pars_fragment:qh,iridescence_pars_fragment:Yh,opaque_fragment:jh,packing:$h,premultiplied_alpha_fragment:Kh,project_vertex:Zh,dithering_fragment:Jh,dithering_pars_fragment:Qh,roughnessmap_fragment:ed,roughnessmap_pars_fragment:td,shadowmap_pars_fragment:nd,shadowmap_pars_vertex:id,shadowmap_vertex:sd,shadowmask_pars_fragment:rd,skinbase_vertex:od,skinning_pars_vertex:ad,skinning_vertex:cd,skinnormal_vertex:ld,specularmap_fragment:ud,specularmap_pars_fragment:hd,tonemapping_fragment:dd,tonemapping_pars_fragment:fd,transmission_fragment:pd,transmission_pars_fragment:md,uv_pars_fragment:_d,uv_pars_vertex:gd,uv_vertex:vd,worldpos_vertex:xd,background_vert:yd,background_frag:Md,backgroundCube_vert:Sd,backgroundCube_frag:Ed,cube_vert:wd,cube_frag:bd,depth_vert:Td,depth_frag:Ad,distanceRGBA_vert:Cd,distanceRGBA_frag:Rd,equirect_vert:Pd,equirect_frag:Ld,linedashed_vert:Id,linedashed_frag:Dd,meshbasic_vert:Nd,meshbasic_frag:Ud,meshlambert_vert:Fd,meshlambert_frag:Od,meshmatcap_vert:Bd,meshmatcap_frag:zd,meshnormal_vert:kd,meshnormal_frag:Gd,meshphong_vert:Hd,meshphong_frag:Vd,meshphysical_vert:Wd,meshphysical_frag:Xd,meshtoon_vert:qd,meshtoon_frag:Yd,points_vert:jd,points_frag:$d,shadow_vert:Kd,shadow_frag:Zd,sprite_vert:Jd,sprite_frag:Qd},se={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},rn={basic:{uniforms:At([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:At([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new He(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:At([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:At([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:At([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new He(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:At([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:At([se.points,se.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:At([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:At([se.common,se.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:At([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:At([se.sprite,se.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:At([se.common,se.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:At([se.lights,se.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};rn.physical={uniforms:At([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Ss={r:0,b:0,g:0};function ef(r,e,t,n,i,s,a){const c=new He(0);let u=s===!0?0:1,h,p,o=null,l=0,d=null;function _(m,f){let v=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?g(c,u):x&&x.isColor&&(g(x,1),v=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Gs)?(p===void 0&&(p=new nt(new an(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:bi(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(R,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(p)),p.material.uniforms.envMap.value=x,p.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,p.material.toneMapped=je.getTransfer(x.colorSpace)!==Qe,(o!==x||l!==x.version||d!==r.toneMapping)&&(p.material.needsUpdate=!0,o=x,l=x.version,d=r.toneMapping),p.layers.enableAll(),m.unshift(p,p.geometry,p.material,0,0,null)):x&&x.isTexture&&(h===void 0&&(h=new nt(new Mi(2,2),new Zn({name:"BackgroundMaterial",uniforms:bi(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=x,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=je.getTransfer(x.colorSpace)!==Qe,x.matrixAutoUpdate===!0&&x.updateMatrix(),h.material.uniforms.uvTransform.value.copy(x.matrix),(o!==x||l!==x.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,o=x,l=x.version,d=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function g(m,f){m.getRGB(Ss,wc(r)),n.buffers.color.setClear(Ss.r,Ss.g,Ss.b,f,a)}return{getClearColor:function(){return c},setClearColor:function(m,f=1){c.set(m),u=f,g(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(m){u=m,g(c,u)},render:_}}function tf(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,c={},u=m(null);let h=u,p=!1;function o(P,L,I,$,k){let X=!1;if(a){const K=g($,I,L);h!==K&&(h=K,d(h.object)),X=f(P,$,I,k),X&&v(P,$,I,k)}else{const K=L.wireframe===!0;(h.geometry!==$.id||h.program!==I.id||h.wireframe!==K)&&(h.geometry=$.id,h.program=I.id,h.wireframe=K,X=!0)}k!==null&&t.update(k,r.ELEMENT_ARRAY_BUFFER),(X||p)&&(p=!1,O(P,L,I,$),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function _(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function g(P,L,I){const $=I.wireframe===!0;let k=c[P.id];k===void 0&&(k={},c[P.id]=k);let X=k[L.id];X===void 0&&(X={},k[L.id]=X);let K=X[$];return K===void 0&&(K=m(l()),X[$]=K),K}function m(P){const L=[],I=[],$=[];for(let k=0;k<i;k++)L[k]=0,I[k]=0,$[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:$,object:P,attributes:{},index:null}}function f(P,L,I,$){const k=h.attributes,X=L.attributes;let K=0;const J=I.getAttributes();for(const j in J)if(J[j].location>=0){const Z=k[j];let ae=X[j];if(ae===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor)),Z===void 0||Z.attribute!==ae||ae&&Z.data!==ae.data)return!0;K++}return h.attributesNum!==K||h.index!==$}function v(P,L,I,$){const k={},X=L.attributes;let K=0;const J=I.getAttributes();for(const j in J)if(J[j].location>=0){let Z=X[j];Z===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));const ae={};ae.attribute=Z,Z&&Z.data&&(ae.data=Z.data),k[j]=ae,K++}h.attributes=k,h.attributesNum=K,h.index=$}function x(){const P=h.newAttributes;for(let L=0,I=P.length;L<I;L++)P[L]=0}function S(P){R(P,0)}function R(P,L){const I=h.newAttributes,$=h.enabledAttributes,k=h.attributeDivisors;I[P]=1,$[P]===0&&(r.enableVertexAttribArray(P),$[P]=1),k[P]!==L&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,L),k[P]=L)}function b(){const P=h.newAttributes,L=h.enabledAttributes;for(let I=0,$=L.length;I<$;I++)L[I]!==P[I]&&(r.disableVertexAttribArray(I),L[I]=0)}function A(P,L,I,$,k,X,K){K===!0?r.vertexAttribIPointer(P,L,I,k,X):r.vertexAttribPointer(P,L,I,$,k,X)}function O(P,L,I,$){if(n.isWebGL2===!1&&(P.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const k=$.attributes,X=I.getAttributes(),K=L.defaultAttributeValues;for(const J in X){const j=X[J];if(j.location>=0){let Y=k[J];if(Y===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){const Z=Y.normalized,ae=Y.itemSize,pe=t.get(Y);if(pe===void 0)continue;const me=pe.buffer,Pe=pe.type,Ie=pe.bytesPerElement,we=n.isWebGL2===!0&&(Pe===r.INT||Pe===r.UNSIGNED_INT||Y.gpuType===rc);if(Y.isInterleavedBufferAttribute){const Ve=Y.data,G=Ve.stride,wt=Y.offset;if(Ve.isInstancedInterleavedBuffer){for(let ye=0;ye<j.locationSize;ye++)R(j.location+ye,Ve.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let ye=0;ye<j.locationSize;ye++)S(j.location+ye);r.bindBuffer(r.ARRAY_BUFFER,me);for(let ye=0;ye<j.locationSize;ye++)A(j.location+ye,ae/j.locationSize,Pe,Z,G*Ie,(wt+ae/j.locationSize*ye)*Ie,we)}else{if(Y.isInstancedBufferAttribute){for(let Ve=0;Ve<j.locationSize;Ve++)R(j.location+Ve,Y.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Ve=0;Ve<j.locationSize;Ve++)S(j.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,me);for(let Ve=0;Ve<j.locationSize;Ve++)A(j.location+Ve,ae/j.locationSize,Pe,Z,ae*Ie,ae/j.locationSize*Ve*Ie,we)}}else if(K!==void 0){const Z=K[J];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(j.location,Z);break;case 3:r.vertexAttrib3fv(j.location,Z);break;case 4:r.vertexAttrib4fv(j.location,Z);break;default:r.vertexAttrib1fv(j.location,Z)}}}}b()}function M(){z();for(const P in c){const L=c[P];for(const I in L){const $=L[I];for(const k in $)_($[k].object),delete $[k];delete L[I]}delete c[P]}}function w(P){if(c[P.id]===void 0)return;const L=c[P.id];for(const I in L){const $=L[I];for(const k in $)_($[k].object),delete $[k];delete L[I]}delete c[P.id]}function U(P){for(const L in c){const I=c[L];if(I[P.id]===void 0)continue;const $=I[P.id];for(const k in $)_($[k].object),delete $[k];delete I[P.id]}}function z(){N(),p=!0,h!==u&&(h=u,d(h.object))}function N(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:o,reset:z,resetDefaultState:N,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:S,disableUnusedAttributes:b}}function nf(r,e,t,n){const i=n.isWebGL2;let s;function a(p){s=p}function c(p,o){r.drawArrays(s,p,o),t.update(o,s,1)}function u(p,o,l){if(l===0)return;let d,_;if(i)d=r,_="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[_](s,p,o,l),t.update(o,s,l)}function h(p,o,l){if(l===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l;_++)this.render(p[_],o[_]);else{d.multiDrawArraysWEBGL(s,p,0,o,0,l);let _=0;for(let g=0;g<l;g++)_+=o[g];t.update(_,s,1)}}this.setMode=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function sf(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const u=s(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=a||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,o=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),l=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=l>0,S=a||e.has("OES_texture_float"),R=x&&S,b=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:s,precision:c,logarithmicDepthBuffer:p,maxTextures:o,maxVertexTextures:l,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:b}}function rf(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Hn,c=new ke,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(o,l){const d=o.length!==0||l||n!==0||i;return i=l,n=o.length,d},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(o,l){t=p(o,l,0)},this.setState=function(o,l,d){const _=o.clippingPlanes,g=o.clipIntersection,m=o.clipShadows,f=r.get(o);if(!i||_===null||_.length===0||s&&!m)s?p(null):h();else{const v=s?0:n,x=v*4;let S=f.clippingState||null;u.value=S,S=p(_,l,x,d);for(let R=0;R!==x;++R)S[R]=t[R];f.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(o,l,d,_){const g=o!==null?o.length:0;let m=null;if(g!==0){if(m=u.value,_!==!0||m===null){const f=d+g*4,v=l.matrixWorldInverse;c.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,S=d;x!==g;++x,S+=4)a.copy(o[x]).applyMatrix4(v,c),a.normal.toArray(m,S),m[S+3]=a.constant}u.value=m,u.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function of(r){let e=new WeakMap;function t(a,c){return c===Br?a.mapping=Si:c===zr&&(a.mapping=Ei),a}function n(a){if(a&&a.isTexture){const c=a.mapping;if(c===Br||c===zr)if(e.has(a)){const u=e.get(a).texture;return t(u,a.mapping)}else{const u=a.image;if(u&&u.height>0){const h=new gu(u.height/2);return h.fromEquirectangularTexture(r,a),e.set(a,h),a.addEventListener("dispose",i),t(h.texture,a.mapping)}else return null}}return a}function i(a){const c=a.target;c.removeEventListener("dispose",i);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Cc extends bc{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,c=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,c-=p*this.view.offsetY,u=c-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,c,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gi=4,ca=[.125,.215,.35,.446,.526,.582],Xn=20,Sr=new Cc,la=new He;let Er=null,wr=0,br=0;const Vn=(1+Math.sqrt(5))/2,pi=1/Vn,ua=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Vn,pi),new B(0,Vn,-pi),new B(pi,0,Vn),new B(-pi,0,Vn),new B(Vn,pi,0),new B(-Vn,pi,0)];class ha{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Er=this._renderer.getRenderTarget(),wr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Er,wr,br),e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Si||e.mapping===Ei?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Er=this._renderer.getRenderTarget(),wr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:ji,format:Jt,colorSpace:Mn,depthBuffer:!1},i=da(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=da(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=af(s)),this._blurMaterial=cf(s,e,t)}return i}_compileMaterial(e){const t=new nt(this._lodPlanes[0],e);this._renderer.compile(t,Sr)}_sceneToCubeUV(e,t,n,i){const c=new Vt(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,o=p.autoClear,l=p.toneMapping;p.getClearColor(la),p.toneMapping=In,p.autoClear=!1;const d=new zs({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),_=new nt(new an,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(la),g=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(c.up.set(0,u[f],0),c.lookAt(h[f],0,0)):v===1?(c.up.set(0,0,u[f]),c.lookAt(0,h[f],0)):(c.up.set(0,u[f],0),c.lookAt(0,0,h[f]));const x=this._cubeSize;Es(i,v*x,f>2?x:0,x,x),p.setRenderTarget(i),g&&p.render(_,c),p.render(e,c)}_.geometry.dispose(),_.material.dispose(),p.toneMapping=l,p.autoClear=o,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Si||e.mapping===Ei;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=pa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fa());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new nt(this._lodPlanes[0],s),c=s.uniforms;c.envMap.value=e;const u=this._cubeSize;Es(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(a,Sr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=ua[(i-1)%ua.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,c){const u=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,o=new nt(this._lodPlanes[i],h),l=h.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Xn-1),g=s/_,m=isFinite(s)?1+Math.floor(p*g):Xn;m>Xn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xn}`);const f=[];let v=0;for(let A=0;A<Xn;++A){const O=A/g,M=Math.exp(-O*O/2);f.push(M),A===0?v+=M:A<m&&(v+=2*M)}for(let A=0;A<f.length;A++)f[A]=f[A]/v;l.envMap.value=e.texture,l.samples.value=m,l.weights.value=f,l.latitudinal.value=a==="latitudinal",c&&(l.poleAxis.value=c);const{_lodMax:x}=this;l.dTheta.value=_,l.mipInt.value=x-n;const S=this._sizeLods[i],R=3*S*(i>x-gi?i-x+gi:0),b=4*(this._cubeSize-S);Es(t,R,b,3*S,2*S),u.setRenderTarget(t),u.render(o,Sr)}}function af(r){const e=[],t=[],n=[];let i=r;const s=r-gi+1+ca.length;for(let a=0;a<s;a++){const c=Math.pow(2,i);t.push(c);let u=1/c;a>r-gi?u=ca[a-r+gi-1]:a===0&&(u=0),n.push(u);const h=1/(c-2),p=-h,o=1+h,l=[p,p,o,p,o,o,p,p,o,o,p,o],d=6,_=6,g=3,m=2,f=1,v=new Float32Array(g*_*d),x=new Float32Array(m*_*d),S=new Float32Array(f*_*d);for(let b=0;b<d;b++){const A=b%3*2/3-1,O=b>2?0:-1,M=[A,O,0,A+2/3,O,0,A+2/3,O+1,0,A,O,0,A+2/3,O+1,0,A,O+1,0];v.set(M,g*_*b),x.set(l,m*_*b);const w=[b,b,b,b,b,b];S.set(w,f*_*b)}const R=new Pt;R.setAttribute("position",new ht(v,g)),R.setAttribute("uv",new ht(x,m)),R.setAttribute("faceIndex",new ht(S,f)),e.push(R),i>gi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function da(r,e,t){const n=new Kn(r,e,t);return n.texture.mapping=Gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function cf(r,e,t){const n=new Float32Array(Xn),i=new B(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function fa(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function pa(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Zr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lf(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const u=c.mapping,h=u===Br||u===zr,p=u===Si||u===Ei;if(h||p)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let o=e.get(c);return t===null&&(t=new ha(r)),o=h?t.fromEquirectangular(c,o):t.fromCubemap(c,o),e.set(c,o),o.texture}else{if(e.has(c))return e.get(c).texture;{const o=c.image;if(h&&o&&o.height>0||p&&o&&i(o)){t===null&&(t=new ha(r));const l=h?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,l),c.addEventListener("dispose",s),l.texture}else return null}}}return c}function i(c){let u=0;const h=6;for(let p=0;p<h;p++)c[p]!==void 0&&u++;return u===h}function s(c){const u=c.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function uf(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function hf(r,e,t,n){const i={},s=new WeakMap;function a(o){const l=o.target;l.index!==null&&e.remove(l.index);for(const _ in l.attributes)e.remove(l.attributes[_]);for(const _ in l.morphAttributes){const g=l.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}l.removeEventListener("dispose",a),delete i[l.id];const d=s.get(l);d&&(e.remove(d),s.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function c(o,l){return i[l.id]===!0||(l.addEventListener("dispose",a),i[l.id]=!0,t.memory.geometries++),l}function u(o){const l=o.attributes;for(const _ in l)e.update(l[_],r.ARRAY_BUFFER);const d=o.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,f=g.length;m<f;m++)e.update(g[m],r.ARRAY_BUFFER)}}function h(o){const l=[],d=o.index,_=o.attributes.position;let g=0;if(d!==null){const v=d.array;g=d.version;for(let x=0,S=v.length;x<S;x+=3){const R=v[x+0],b=v[x+1],A=v[x+2];l.push(R,b,b,A,A,R)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const R=x+0,b=x+1,A=x+2;l.push(R,b,b,A,A,R)}}else return;const m=new(mc(l)?Ec:Sc)(l,1);m.version=g;const f=s.get(o);f&&e.remove(f),s.set(o,m)}function p(o){const l=s.get(o);if(l){const d=o.index;d!==null&&l.version<d.version&&h(o)}else h(o);return s.get(o)}return{get:c,update:u,getWireframeAttribute:p}}function df(r,e,t,n){const i=n.isWebGL2;let s;function a(d){s=d}let c,u;function h(d){c=d.type,u=d.bytesPerElement}function p(d,_){r.drawElements(s,_,c,d*u),t.update(_,s,1)}function o(d,_,g){if(g===0)return;let m,f;if(i)m=r,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,_,c,d*u,g),t.update(_,s,g)}function l(d,_,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<g;f++)this.render(d[f]/u,_[f]);else{m.multiDrawElementsWEBGL(s,_,0,c,d,0,g);let f=0;for(let v=0;v<g;v++)f+=_[v];t.update(f,s,1)}}this.setMode=a,this.setIndex=h,this.render=p,this.renderInstances=o,this.renderMultiDraw=l}function ff(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,c){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=c*(s/3);break;case r.LINES:t.lines+=c*(s/2);break;case r.LINE_STRIP:t.lines+=c*(s-1);break;case r.LINE_LOOP:t.lines+=c*s;break;case r.POINTS:t.points+=c*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function pf(r,e){return r[0]-e[0]}function mf(r,e){return Math.abs(e[1])-Math.abs(r[1])}function _f(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new vt,c=[];for(let h=0;h<8;h++)c[h]=[h,0];function u(h,p,o){const l=h.morphTargetInfluences;if(e.isWebGL2===!0){const _=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(p);if(m===void 0||m.count!==g){let L=function(){N.dispose(),s.delete(p),p.removeEventListener("dispose",L)};var d=L;m!==void 0&&m.texture.dispose();const x=p.morphAttributes.position!==void 0,S=p.morphAttributes.normal!==void 0,R=p.morphAttributes.color!==void 0,b=p.morphAttributes.position||[],A=p.morphAttributes.normal||[],O=p.morphAttributes.color||[];let M=0;x===!0&&(M=1),S===!0&&(M=2),R===!0&&(M=3);let w=p.attributes.position.count*M,U=1;w>e.maxTextureSize&&(U=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const z=new Float32Array(w*U*4*g),N=new vc(z,w,U,g);N.type=Pn,N.needsUpdate=!0;const P=M*4;for(let I=0;I<g;I++){const $=b[I],k=A[I],X=O[I],K=w*U*4*I;for(let J=0;J<$.count;J++){const j=J*P;x===!0&&(a.fromBufferAttribute($,J),z[K+j+0]=a.x,z[K+j+1]=a.y,z[K+j+2]=a.z,z[K+j+3]=0),S===!0&&(a.fromBufferAttribute(k,J),z[K+j+4]=a.x,z[K+j+5]=a.y,z[K+j+6]=a.z,z[K+j+7]=0),R===!0&&(a.fromBufferAttribute(X,J),z[K+j+8]=a.x,z[K+j+9]=a.y,z[K+j+10]=a.z,z[K+j+11]=X.itemSize===4?a.w:1)}}m={count:g,texture:N,size:new We(w,U)},s.set(p,m),p.addEventListener("dispose",L)}let f=0;for(let x=0;x<l.length;x++)f+=l[x];const v=p.morphTargetsRelative?1:1-f;o.getUniforms().setValue(r,"morphTargetBaseInfluence",v),o.getUniforms().setValue(r,"morphTargetInfluences",l),o.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const _=l===void 0?0:l.length;let g=n[p.id];if(g===void 0||g.length!==_){g=[];for(let S=0;S<_;S++)g[S]=[S,0];n[p.id]=g}for(let S=0;S<_;S++){const R=g[S];R[0]=S,R[1]=l[S]}g.sort(mf);for(let S=0;S<8;S++)S<_&&g[S][1]?(c[S][0]=g[S][0],c[S][1]=g[S][1]):(c[S][0]=Number.MAX_SAFE_INTEGER,c[S][1]=0);c.sort(pf);const m=p.morphAttributes.position,f=p.morphAttributes.normal;let v=0;for(let S=0;S<8;S++){const R=c[S],b=R[0],A=R[1];b!==Number.MAX_SAFE_INTEGER&&A?(m&&p.getAttribute("morphTarget"+S)!==m[b]&&p.setAttribute("morphTarget"+S,m[b]),f&&p.getAttribute("morphNormal"+S)!==f[b]&&p.setAttribute("morphNormal"+S,f[b]),i[S]=A,v+=A):(m&&p.hasAttribute("morphTarget"+S)===!0&&p.deleteAttribute("morphTarget"+S),f&&p.hasAttribute("morphNormal"+S)===!0&&p.deleteAttribute("morphNormal"+S),i[S]=0)}const x=p.morphTargetsRelative?1:1-v;o.getUniforms().setValue(r,"morphTargetBaseInfluence",x),o.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:u}}function gf(r,e,t,n){let i=new WeakMap;function s(u){const h=n.render.frame,p=u.geometry,o=e.get(u,p);if(i.get(o)!==h&&(e.update(o),i.set(o,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),i.get(u)!==h&&(t.update(u.instanceMatrix,r.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,r.ARRAY_BUFFER),i.set(u,h))),u.isSkinnedMesh){const l=u.skeleton;i.get(l)!==h&&(l.update(),i.set(l,h))}return o}function a(){i=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}class Rc extends Nt{constructor(e,t,n,i,s,a,c,u,h,p){if(p=p!==void 0?p:jn,p!==jn&&p!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===jn&&(n=Rn),n===void 0&&p===wi&&(n=Yn),super(null,i,s,a,c,u,p,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Ct,this.minFilter=u!==void 0?u:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Pc=new Nt,Lc=new Rc(1,1);Lc.compareFunction=pc;const Ic=new vc,Dc=new eu,Nc=new Tc,ma=[],_a=[],ga=new Float32Array(16),va=new Float32Array(9),xa=new Float32Array(4);function Ri(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=ma[i];if(s===void 0&&(s=new Float32Array(i),ma[i]=s),e!==0){n.toArray(s,0);for(let a=1,c=0;a!==e;++a)c+=t,r[a].toArray(s,c)}return s}function dt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ft(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Xs(r,e){let t=_a[e];t===void 0&&(t=new Int32Array(e),_a[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function vf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function xf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2fv(this.addr,e),ft(t,e)}}function yf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;r.uniform3fv(this.addr,e),ft(t,e)}}function Mf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4fv(this.addr,e),ft(t,e)}}function Sf(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;xa.set(n),r.uniformMatrix2fv(this.addr,!1,xa),ft(t,n)}}function Ef(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;va.set(n),r.uniformMatrix3fv(this.addr,!1,va),ft(t,n)}}function wf(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;ga.set(n),r.uniformMatrix4fv(this.addr,!1,ga),ft(t,n)}}function bf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Tf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2iv(this.addr,e),ft(t,e)}}function Af(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;r.uniform3iv(this.addr,e),ft(t,e)}}function Cf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4iv(this.addr,e),ft(t,e)}}function Rf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Pf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2uiv(this.addr,e),ft(t,e)}}function Lf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;r.uniform3uiv(this.addr,e),ft(t,e)}}function If(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4uiv(this.addr,e),ft(t,e)}}function Df(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Lc:Pc;t.setTexture2D(e||s,i)}function Nf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Dc,i)}function Uf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Nc,i)}function Ff(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ic,i)}function Of(r){switch(r){case 5126:return vf;case 35664:return xf;case 35665:return yf;case 35666:return Mf;case 35674:return Sf;case 35675:return Ef;case 35676:return wf;case 5124:case 35670:return bf;case 35667:case 35671:return Tf;case 35668:case 35672:return Af;case 35669:case 35673:return Cf;case 5125:return Rf;case 36294:return Pf;case 36295:return Lf;case 36296:return If;case 35678:case 36198:case 36298:case 36306:case 35682:return Df;case 35679:case 36299:case 36307:return Nf;case 35680:case 36300:case 36308:case 36293:return Uf;case 36289:case 36303:case 36311:case 36292:return Ff}}function Bf(r,e){r.uniform1fv(this.addr,e)}function zf(r,e){const t=Ri(e,this.size,2);r.uniform2fv(this.addr,t)}function kf(r,e){const t=Ri(e,this.size,3);r.uniform3fv(this.addr,t)}function Gf(r,e){const t=Ri(e,this.size,4);r.uniform4fv(this.addr,t)}function Hf(r,e){const t=Ri(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Vf(r,e){const t=Ri(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Wf(r,e){const t=Ri(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Xf(r,e){r.uniform1iv(this.addr,e)}function qf(r,e){r.uniform2iv(this.addr,e)}function Yf(r,e){r.uniform3iv(this.addr,e)}function jf(r,e){r.uniform4iv(this.addr,e)}function $f(r,e){r.uniform1uiv(this.addr,e)}function Kf(r,e){r.uniform2uiv(this.addr,e)}function Zf(r,e){r.uniform3uiv(this.addr,e)}function Jf(r,e){r.uniform4uiv(this.addr,e)}function Qf(r,e,t){const n=this.cache,i=e.length,s=Xs(t,i);dt(n,s)||(r.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Pc,s[a])}function ep(r,e,t){const n=this.cache,i=e.length,s=Xs(t,i);dt(n,s)||(r.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Dc,s[a])}function tp(r,e,t){const n=this.cache,i=e.length,s=Xs(t,i);dt(n,s)||(r.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Nc,s[a])}function np(r,e,t){const n=this.cache,i=e.length,s=Xs(t,i);dt(n,s)||(r.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ic,s[a])}function ip(r){switch(r){case 5126:return Bf;case 35664:return zf;case 35665:return kf;case 35666:return Gf;case 35674:return Hf;case 35675:return Vf;case 35676:return Wf;case 5124:case 35670:return Xf;case 35667:case 35671:return qf;case 35668:case 35672:return Yf;case 35669:case 35673:return jf;case 5125:return $f;case 36294:return Kf;case 36295:return Zf;case 36296:return Jf;case 35678:case 36198:case 36298:case 36306:case 35682:return Qf;case 35679:case 36299:case 36307:return ep;case 35680:case 36300:case 36308:case 36293:return tp;case 36289:case 36303:case 36311:case 36292:return np}}class sp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Of(t.type)}}class rp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ip(t.type)}}class op{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const c=i[s];c.setValue(e,t[c.id],n)}}}const Tr=/(\w+)(\])?(\[|\.)?/g;function ya(r,e){r.seq.push(e),r.map[e.id]=e}function ap(r,e,t){const n=r.name,i=n.length;for(Tr.lastIndex=0;;){const s=Tr.exec(n),a=Tr.lastIndex;let c=s[1];const u=s[2]==="]",h=s[3];if(u&&(c=c|0),h===void 0||h==="["&&a+2===i){ya(t,h===void 0?new sp(c,r,e):new rp(c,r,e));break}else{let o=t.map[c];o===void 0&&(o=new op(c),ya(t,o)),t=o}}}class Ls{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);ap(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const c=t[s],u=n[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Ma(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const cp=37297;let lp=0;function up(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const c=a+1;n.push(`${c===e?">":" "} ${c}: ${t[a]}`)}return n.join(`
`)}function hp(r){const e=je.getPrimaries(je.workingColorSpace),t=je.getPrimaries(r);let n;switch(e===t?n="":e===Fs&&t===Us?n="LinearDisplayP3ToLinearSRGB":e===Us&&t===Fs&&(n="LinearSRGBToLinearDisplayP3"),r){case Mn:case Hs:return[n,"LinearTransferOETF"];case gt:case $r:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Sa(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+up(r.getShaderSource(e),a)}else return i}function dp(r,e){const t=hp(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function fp(r,e){let t;switch(e){case wl:t="Linear";break;case bl:t="Reinhard";break;case Tl:t="OptimizedCineon";break;case ic:t="ACESFilmic";break;case Cl:t="AgX";break;case Al:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function pp(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vi).join(`
`)}function mp(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(vi).join(`
`)}function _p(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gp(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let c=1;s.type===r.FLOAT_MAT2&&(c=2),s.type===r.FLOAT_MAT3&&(c=3),s.type===r.FLOAT_MAT4&&(c=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:c}}return t}function vi(r){return r!==""}function Ea(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wa(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wr(r){return r.replace(vp,yp)}const xp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function yp(r,e){let t=Ne[e];if(t===void 0){const n=xp.get(e);if(n!==void 0)t=Ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wr(t)}const Mp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ba(r){return r.replace(Mp,Sp)}function Sp(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ta(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ep(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===tc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===nc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===xn&&(e="SHADOWMAP_TYPE_VSM"),e}function wp(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Si:case Ei:e="ENVMAP_TYPE_CUBE";break;case Gs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bp(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ei:e="ENVMAP_MODE_REFRACTION";break}return e}function Tp(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Yr:e="ENVMAP_BLENDING_MULTIPLY";break;case Sl:e="ENVMAP_BLENDING_MIX";break;case El:e="ENVMAP_BLENDING_ADD";break}return e}function Ap(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Cp(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,c=t.fragmentShader;const u=Ep(t),h=wp(t),p=bp(t),o=Tp(t),l=Ap(t),d=t.isWebGL2?"":pp(t),_=mp(t),g=_p(s),m=i.createProgram();let f,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vi).join(`
`),f.length>0&&(f+=`
`),v=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vi).join(`
`),v.length>0&&(v+=`
`)):(f=[Ta(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vi).join(`
`),v=[d,Ta(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+o:"",l?"#define CUBEUV_TEXEL_WIDTH "+l.texelWidth:"",l?"#define CUBEUV_TEXEL_HEIGHT "+l.texelHeight:"",l?"#define CUBEUV_MAX_MIP "+l.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?Ne.tonemapping_pars_fragment:"",t.toneMapping!==In?fp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,dp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vi).join(`
`)),a=Wr(a),a=Ea(a,t),a=wa(a,t),c=Wr(c),c=Ea(c,t),c=wa(c,t),a=ba(a),c=ba(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Wo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const S=x+f+a,R=x+v+c,b=Ma(i,i.VERTEX_SHADER,S),A=Ma(i,i.FRAGMENT_SHADER,R);i.attachShader(m,b),i.attachShader(m,A),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function O(z){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(b).trim(),L=i.getShaderInfoLog(A).trim();let I=!0,$=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(I=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,b,A);else{const k=Sa(i,b,"vertex"),X=Sa(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+k+`
`+X)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(P===""||L==="")&&($=!1);$&&(z.diagnostics={runnable:I,programLog:N,vertexShader:{log:P,prefix:f},fragmentShader:{log:L,prefix:v}})}i.deleteShader(b),i.deleteShader(A),M=new Ls(i,m),w=gp(i,m)}let M;this.getUniforms=function(){return M===void 0&&O(this),M};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(m,cp)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lp++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=A,this}let Rp=0;class Pp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Lp(e),t.set(e,n)),n}}class Lp{constructor(e){this.id=Rp++,this.code=e,this.usedTimes=0}}function Ip(r,e,t,n,i,s,a){const c=new yc,u=new Pp,h=[],p=i.isWebGL2,o=i.logarithmicDepthBuffer,l=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function m(M,w,U,z,N){const P=z.fog,L=N.geometry,I=M.isMeshStandardMaterial?z.environment:null,$=(M.isMeshStandardMaterial?t:e).get(M.envMap||I),k=$&&$.mapping===Gs?$.image.height:null,X=_[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const K=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,J=K!==void 0?K.length:0;let j=0;L.morphAttributes.position!==void 0&&(j=1),L.morphAttributes.normal!==void 0&&(j=2),L.morphAttributes.color!==void 0&&(j=3);let Y,Z,ae,pe;if(X){const bt=rn[X];Y=bt.vertexShader,Z=bt.fragmentShader}else Y=M.vertexShader,Z=M.fragmentShader,u.update(M),ae=u.getVertexShaderID(M),pe=u.getFragmentShaderID(M);const me=r.getRenderTarget(),Pe=N.isInstancedMesh===!0,Ie=N.isBatchedMesh===!0,we=!!M.map,Ve=!!M.matcap,G=!!$,wt=!!M.aoMap,ye=!!M.lightMap,Ce=!!M.bumpMap,_e=!!M.normalMap,et=!!M.displacementMap,Ue=!!M.emissiveMap,C=!!M.metalnessMap,E=!!M.roughnessMap,V=M.anisotropy>0,te=M.clearcoat>0,ee=M.iridescence>0,ne=M.sheen>0,ge=M.transmission>0,ce=V&&!!M.anisotropyMap,de=te&&!!M.clearcoatMap,Ee=te&&!!M.clearcoatNormalMap,Fe=te&&!!M.clearcoatRoughnessMap,Q=ee&&!!M.iridescenceMap,Ye=ee&&!!M.iridescenceThicknessMap,Ge=ne&&!!M.sheenColorMap,Ae=ne&&!!M.sheenRoughnessMap,xe=!!M.specularMap,fe=!!M.specularColorMap,De=!!M.specularIntensityMap,qe=ge&&!!M.transmissionMap,it=ge&&!!M.thicknessMap,Be=!!M.gradientMap,ie=!!M.alphaMap,D=M.alphaTest>0,re=!!M.alphaHash,oe=!!M.extensions,be=!!L.attributes.uv1,Me=!!L.attributes.uv2,$e=!!L.attributes.uv3;let Ke=In;return M.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Ke=r.toneMapping),{isWebGL2:p,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:Y,fragmentShader:Z,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:pe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Ie,instancing:Pe,instancingColor:Pe&&N.instanceColor!==null,supportsVertexTextures:l,outputColorSpace:me===null?r.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Mn,map:we,matcap:Ve,envMap:G,envMapMode:G&&$.mapping,envMapCubeUVHeight:k,aoMap:wt,lightMap:ye,bumpMap:Ce,normalMap:_e,displacementMap:l&&et,emissiveMap:Ue,normalMapObjectSpace:_e&&M.normalMapType===kl,normalMapTangentSpace:_e&&M.normalMapType===fc,metalnessMap:C,roughnessMap:E,anisotropy:V,anisotropyMap:ce,clearcoat:te,clearcoatMap:de,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Fe,iridescence:ee,iridescenceMap:Q,iridescenceThicknessMap:Ye,sheen:ne,sheenColorMap:Ge,sheenRoughnessMap:Ae,specularMap:xe,specularColorMap:fe,specularIntensityMap:De,transmission:ge,transmissionMap:qe,thicknessMap:it,gradientMap:Be,opaque:M.transparent===!1&&M.blending===xi,alphaMap:ie,alphaTest:D,alphaHash:re,combine:M.combine,mapUv:we&&g(M.map.channel),aoMapUv:wt&&g(M.aoMap.channel),lightMapUv:ye&&g(M.lightMap.channel),bumpMapUv:Ce&&g(M.bumpMap.channel),normalMapUv:_e&&g(M.normalMap.channel),displacementMapUv:et&&g(M.displacementMap.channel),emissiveMapUv:Ue&&g(M.emissiveMap.channel),metalnessMapUv:C&&g(M.metalnessMap.channel),roughnessMapUv:E&&g(M.roughnessMap.channel),anisotropyMapUv:ce&&g(M.anisotropyMap.channel),clearcoatMapUv:de&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(M.sheenRoughnessMap.channel),specularMapUv:xe&&g(M.specularMap.channel),specularColorMapUv:fe&&g(M.specularColorMap.channel),specularIntensityMapUv:De&&g(M.specularIntensityMap.channel),transmissionMapUv:qe&&g(M.transmissionMap.channel),thicknessMapUv:it&&g(M.thicknessMap.channel),alphaMapUv:ie&&g(M.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(_e||V),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:Me,vertexUv3s:$e,pointsUvs:N.isPoints===!0&&!!L.attributes.uv&&(we||ie),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:o,skinning:N.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:j,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ke,useLegacyLights:r._useLegacyLights,decodeVideoTexture:we&&M.map.isVideoTexture===!0&&je.getTransfer(M.map.colorSpace)===Qe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===on,flipSided:M.side===Rt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:oe&&M.extensions.derivatives===!0,extensionFragDepth:oe&&M.extensions.fragDepth===!0,extensionDrawBuffers:oe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:p||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)w.push(U),w.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(v(w,M),x(w,M),w.push(r.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function v(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function x(M,w){c.disableAll(),w.isWebGL2&&c.enable(0),w.supportsVertexTextures&&c.enable(1),w.instancing&&c.enable(2),w.instancingColor&&c.enable(3),w.matcap&&c.enable(4),w.envMap&&c.enable(5),w.normalMapObjectSpace&&c.enable(6),w.normalMapTangentSpace&&c.enable(7),w.clearcoat&&c.enable(8),w.iridescence&&c.enable(9),w.alphaTest&&c.enable(10),w.vertexColors&&c.enable(11),w.vertexAlphas&&c.enable(12),w.vertexUv1s&&c.enable(13),w.vertexUv2s&&c.enable(14),w.vertexUv3s&&c.enable(15),w.vertexTangents&&c.enable(16),w.anisotropy&&c.enable(17),w.alphaHash&&c.enable(18),w.batching&&c.enable(19),M.push(c.mask),c.disableAll(),w.fog&&c.enable(0),w.useFog&&c.enable(1),w.flatShading&&c.enable(2),w.logarithmicDepthBuffer&&c.enable(3),w.skinning&&c.enable(4),w.morphTargets&&c.enable(5),w.morphNormals&&c.enable(6),w.morphColors&&c.enable(7),w.premultipliedAlpha&&c.enable(8),w.shadowMapEnabled&&c.enable(9),w.useLegacyLights&&c.enable(10),w.doubleSided&&c.enable(11),w.flipSided&&c.enable(12),w.useDepthPacking&&c.enable(13),w.dithering&&c.enable(14),w.transmission&&c.enable(15),w.sheen&&c.enable(16),w.opaque&&c.enable(17),w.pointsUvs&&c.enable(18),w.decodeVideoTexture&&c.enable(19),M.push(c.mask)}function S(M){const w=_[M.type];let U;if(w){const z=rn[w];U=fu.clone(z.uniforms)}else U=M.uniforms;return U}function R(M,w){let U;for(let z=0,N=h.length;z<N;z++){const P=h[z];if(P.cacheKey===w){U=P,++U.usedTimes;break}}return U===void 0&&(U=new Cp(r,w,M,s),h.push(U)),U}function b(M){if(--M.usedTimes===0){const w=h.indexOf(M);h[w]=h[h.length-1],h.pop(),M.destroy()}}function A(M){u.remove(M)}function O(){u.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:R,releaseProgram:b,releaseShaderCache:A,programs:h,dispose:O}}function Dp(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,c){r.get(s)[a]=c}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Np(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Aa(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ca(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(o,l,d,_,g,m){let f=r[e];return f===void 0?(f={id:o.id,object:o,geometry:l,material:d,groupOrder:_,renderOrder:o.renderOrder,z:g,group:m},r[e]=f):(f.id=o.id,f.object=o,f.geometry=l,f.material=d,f.groupOrder=_,f.renderOrder=o.renderOrder,f.z=g,f.group=m),e++,f}function c(o,l,d,_,g,m){const f=a(o,l,d,_,g,m);d.transmission>0?n.push(f):d.transparent===!0?i.push(f):t.push(f)}function u(o,l,d,_,g,m){const f=a(o,l,d,_,g,m);d.transmission>0?n.unshift(f):d.transparent===!0?i.unshift(f):t.unshift(f)}function h(o,l){t.length>1&&t.sort(o||Np),n.length>1&&n.sort(l||Aa),i.length>1&&i.sort(l||Aa)}function p(){for(let o=e,l=r.length;o<l;o++){const d=r[o];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:u,finish:p,sort:h}}function Up(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Ca,r.set(n,[a])):i>=s.length?(a=new Ca,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Fp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new He};break;case"SpotLight":t={position:new B,direction:new B,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new B,halfWidth:new B,halfHeight:new B};break}return r[e.id]=t,t}}}function Op(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Bp=0;function zp(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function kp(r,e){const t=new Fp,n=Op(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)i.probe.push(new B);const s=new B,a=new lt,c=new lt;function u(p,o){let l=0,d=0,_=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let g=0,m=0,f=0,v=0,x=0,S=0,R=0,b=0,A=0,O=0,M=0;p.sort(zp);const w=o===!0?Math.PI:1;for(let z=0,N=p.length;z<N;z++){const P=p[z],L=P.color,I=P.intensity,$=P.distance,k=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)l+=L.r*I*w,d+=L.g*I*w,_+=L.b*I*w;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],I);M++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){const K=P.shadow,J=n.get(P);J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,i.directionalShadow[g]=J,i.directionalShadowMap[g]=k,i.directionalShadowMatrix[g]=P.shadow.matrix,S++}i.directional[g]=X,g++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(L).multiplyScalar(I*w),X.distance=$,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[f]=X;const K=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,K.updateMatrices(P),P.castShadow&&O++),i.spotLightMatrix[f]=K.matrix,P.castShadow){const J=n.get(P);J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,i.spotShadow[f]=J,i.spotShadowMap[f]=k,b++}f++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(L).multiplyScalar(I),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[v]=X,v++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*w),X.distance=P.distance,X.decay=P.decay,P.castShadow){const K=P.shadow,J=n.get(P);J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,J.shadowCameraNear=K.camera.near,J.shadowCameraFar=K.camera.far,i.pointShadow[m]=J,i.pointShadowMap[m]=k,i.pointShadowMatrix[m]=P.shadow.matrix,R++}i.point[m]=X,m++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(I*w),X.groundColor.copy(P.groundColor).multiplyScalar(I*w),i.hemi[x]=X,x++}}v>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=l,i.ambient[1]=d,i.ambient[2]=_;const U=i.hash;(U.directionalLength!==g||U.pointLength!==m||U.spotLength!==f||U.rectAreaLength!==v||U.hemiLength!==x||U.numDirectionalShadows!==S||U.numPointShadows!==R||U.numSpotShadows!==b||U.numSpotMaps!==A||U.numLightProbes!==M)&&(i.directional.length=g,i.spot.length=f,i.rectArea.length=v,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=b+A-O,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=M,U.directionalLength=g,U.pointLength=m,U.spotLength=f,U.rectAreaLength=v,U.hemiLength=x,U.numDirectionalShadows=S,U.numPointShadows=R,U.numSpotShadows=b,U.numSpotMaps=A,U.numLightProbes=M,i.version=Bp++)}function h(p,o){let l=0,d=0,_=0,g=0,m=0;const f=o.matrixWorldInverse;for(let v=0,x=p.length;v<x;v++){const S=p[v];if(S.isDirectionalLight){const R=i.directional[l];R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),l++}else if(S.isSpotLight){const R=i.spot[_];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),_++}else if(S.isRectAreaLight){const R=i.rectArea[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),c.identity(),a.copy(S.matrixWorld),a.premultiply(f),c.extractRotation(a),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),g++}else if(S.isPointLight){const R=i.point[d];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),d++}else if(S.isHemisphereLight){const R=i.hemi[m];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(f),m++}}}return{setup:u,setupView:h,state:i}}function Ra(r,e){const t=new kp(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(o){n.push(o)}function c(o){i.push(o)}function u(o){t.setup(n,o)}function h(o){t.setupView(n,o)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:u,setupLightsView:h,pushLight:a,pushShadow:c}}function Gp(r,e){let t=new WeakMap;function n(s,a=0){const c=t.get(s);let u;return c===void 0?(u=new Ra(r,e),t.set(s,[u])):a>=c.length?(u=new Ra(r,e),c.push(u)):u=c[a],u}function i(){t=new WeakMap}return{get:n,dispose:i}}class Hp extends Ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vp extends Ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qp(r,e,t){let n=new Kr;const i=new We,s=new We,a=new vt,c=new Hp({depthPacking:zl}),u=new Vp,h={},p=t.maxTextureSize,o={[Nn]:Rt,[Rt]:Nn,[on]:on},l=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Wp,fragmentShader:Xp}),d=l.clone();d.defines.HORIZONTAL_PASS=1;const _=new Pt;_.setAttribute("position",new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new nt(_,l),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tc;let f=this.type;this.render=function(b,A,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const M=r.getRenderTarget(),w=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Ln),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const N=f!==xn&&this.type===xn,P=f===xn&&this.type!==xn;for(let L=0,I=b.length;L<I;L++){const $=b[L],k=$.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const X=k.getFrameExtents();if(i.multiply(X),s.copy(k.mapSize),(i.x>p||i.y>p)&&(i.x>p&&(s.x=Math.floor(p/X.x),i.x=s.x*X.x,k.mapSize.x=s.x),i.y>p&&(s.y=Math.floor(p/X.y),i.y=s.y*X.y,k.mapSize.y=s.y)),k.map===null||N===!0||P===!0){const J=this.type!==xn?{minFilter:Ct,magFilter:Ct}:{};k.map!==null&&k.map.dispose(),k.map=new Kn(i.x,i.y,J),k.map.texture.name=$.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const K=k.getViewportCount();for(let J=0;J<K;J++){const j=k.getViewport(J);a.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),z.viewport(a),k.updateMatrices($,J),n=k.getFrustum(),S(A,O,k.camera,$,this.type)}k.isPointLightShadow!==!0&&this.type===xn&&v(k,O),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(M,w,U)};function v(b,A){const O=e.update(g);l.defines.VSM_SAMPLES!==b.blurSamples&&(l.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,l.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Kn(i.x,i.y)),l.uniforms.shadow_pass.value=b.map.texture,l.uniforms.resolution.value=b.mapSize,l.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(A,null,O,l,g,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(A,null,O,d,g,null)}function x(b,A,O,M){let w=null;const U=O.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)w=U;else if(w=O.isPointLight===!0?u:c,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=w.uuid,N=A.uuid;let P=h[z];P===void 0&&(P={},h[z]=P);let L=P[N];L===void 0&&(L=w.clone(),P[N]=L,A.addEventListener("dispose",R)),w=L}if(w.visible=A.visible,w.wireframe=A.wireframe,M===xn?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:o[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,O.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const z=r.properties.get(w);z.light=O}return w}function S(b,A,O,M,w){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===xn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,b.matrixWorld);const N=e.update(b),P=b.material;if(Array.isArray(P)){const L=N.groups;for(let I=0,$=L.length;I<$;I++){const k=L[I],X=P[k.materialIndex];if(X&&X.visible){const K=x(b,X,M,w);b.onBeforeShadow(r,b,A,O,N,K,k),r.renderBufferDirect(O,null,N,K,b,k),b.onAfterShadow(r,b,A,O,N,K,k)}}}else if(P.visible){const L=x(b,P,M,w);b.onBeforeShadow(r,b,A,O,N,L,null),r.renderBufferDirect(O,null,N,L,b,null),b.onAfterShadow(r,b,A,O,N,L,null)}}const z=b.children;for(let N=0,P=z.length;N<P;N++)S(z[N],A,O,M,w)}function R(b){b.target.removeEventListener("dispose",R);for(const O in h){const M=h[O],w=b.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function Yp(r,e,t){const n=t.isWebGL2;function i(){let D=!1;const re=new vt;let oe=null;const be=new vt(0,0,0,0);return{setMask:function(Me){oe!==Me&&!D&&(r.colorMask(Me,Me,Me,Me),oe=Me)},setLocked:function(Me){D=Me},setClear:function(Me,$e,Ke,pt,bt){bt===!0&&(Me*=pt,$e*=pt,Ke*=pt),re.set(Me,$e,Ke,pt),be.equals(re)===!1&&(r.clearColor(Me,$e,Ke,pt),be.copy(re))},reset:function(){D=!1,oe=null,be.set(-1,0,0,0)}}}function s(){let D=!1,re=null,oe=null,be=null;return{setTest:function(Me){Me?Ie(r.DEPTH_TEST):we(r.DEPTH_TEST)},setMask:function(Me){re!==Me&&!D&&(r.depthMask(Me),re=Me)},setFunc:function(Me){if(oe!==Me){switch(Me){case ml:r.depthFunc(r.NEVER);break;case _l:r.depthFunc(r.ALWAYS);break;case gl:r.depthFunc(r.LESS);break;case Ds:r.depthFunc(r.LEQUAL);break;case vl:r.depthFunc(r.EQUAL);break;case xl:r.depthFunc(r.GEQUAL);break;case yl:r.depthFunc(r.GREATER);break;case Ml:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}oe=Me}},setLocked:function(Me){D=Me},setClear:function(Me){be!==Me&&(r.clearDepth(Me),be=Me)},reset:function(){D=!1,re=null,oe=null,be=null}}}function a(){let D=!1,re=null,oe=null,be=null,Me=null,$e=null,Ke=null,pt=null,bt=null;return{setTest:function(Ze){D||(Ze?Ie(r.STENCIL_TEST):we(r.STENCIL_TEST))},setMask:function(Ze){re!==Ze&&!D&&(r.stencilMask(Ze),re=Ze)},setFunc:function(Ze,Tt,en){(oe!==Ze||be!==Tt||Me!==en)&&(r.stencilFunc(Ze,Tt,en),oe=Ze,be=Tt,Me=en)},setOp:function(Ze,Tt,en){($e!==Ze||Ke!==Tt||pt!==en)&&(r.stencilOp(Ze,Tt,en),$e=Ze,Ke=Tt,pt=en)},setLocked:function(Ze){D=Ze},setClear:function(Ze){bt!==Ze&&(r.clearStencil(Ze),bt=Ze)},reset:function(){D=!1,re=null,oe=null,be=null,Me=null,$e=null,Ke=null,pt=null,bt=null}}}const c=new i,u=new s,h=new a,p=new WeakMap,o=new WeakMap;let l={},d={},_=new WeakMap,g=[],m=null,f=!1,v=null,x=null,S=null,R=null,b=null,A=null,O=null,M=new He(0,0,0),w=0,U=!1,z=null,N=null,P=null,L=null,I=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,X=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(K)[1]),k=X>=1):K.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),k=X>=2);let J=null,j={};const Y=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),ae=new vt().fromArray(Y),pe=new vt().fromArray(Z);function me(D,re,oe,be){const Me=new Uint8Array(4),$e=r.createTexture();r.bindTexture(D,$e),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ke=0;Ke<oe;Ke++)n&&(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)?r.texImage3D(re,0,r.RGBA,1,1,be,0,r.RGBA,r.UNSIGNED_BYTE,Me):r.texImage2D(re+Ke,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Me);return $e}const Pe={};Pe[r.TEXTURE_2D]=me(r.TEXTURE_2D,r.TEXTURE_2D,1),Pe[r.TEXTURE_CUBE_MAP]=me(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Pe[r.TEXTURE_2D_ARRAY]=me(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Pe[r.TEXTURE_3D]=me(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Ie(r.DEPTH_TEST),u.setFunc(Ds),Ue(!1),C(uo),Ie(r.CULL_FACE),_e(Ln);function Ie(D){l[D]!==!0&&(r.enable(D),l[D]=!0)}function we(D){l[D]!==!1&&(r.disable(D),l[D]=!1)}function Ve(D,re){return d[D]!==re?(r.bindFramebuffer(D,re),d[D]=re,n&&(D===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=re),D===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=re)),!0):!1}function G(D,re){let oe=g,be=!1;if(D)if(oe=_.get(re),oe===void 0&&(oe=[],_.set(re,oe)),D.isWebGLMultipleRenderTargets){const Me=D.texture;if(oe.length!==Me.length||oe[0]!==r.COLOR_ATTACHMENT0){for(let $e=0,Ke=Me.length;$e<Ke;$e++)oe[$e]=r.COLOR_ATTACHMENT0+$e;oe.length=Me.length,be=!0}}else oe[0]!==r.COLOR_ATTACHMENT0&&(oe[0]=r.COLOR_ATTACHMENT0,be=!0);else oe[0]!==r.BACK&&(oe[0]=r.BACK,be=!0);be&&(t.isWebGL2?r.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function wt(D){return m!==D?(r.useProgram(D),m=D,!0):!1}const ye={[Wn]:r.FUNC_ADD,[el]:r.FUNC_SUBTRACT,[tl]:r.FUNC_REVERSE_SUBTRACT};if(n)ye[po]=r.MIN,ye[mo]=r.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(ye[po]=D.MIN_EXT,ye[mo]=D.MAX_EXT)}const Ce={[nl]:r.ZERO,[il]:r.ONE,[sl]:r.SRC_COLOR,[Fr]:r.SRC_ALPHA,[ul]:r.SRC_ALPHA_SATURATE,[cl]:r.DST_COLOR,[ol]:r.DST_ALPHA,[rl]:r.ONE_MINUS_SRC_COLOR,[Or]:r.ONE_MINUS_SRC_ALPHA,[ll]:r.ONE_MINUS_DST_COLOR,[al]:r.ONE_MINUS_DST_ALPHA,[hl]:r.CONSTANT_COLOR,[dl]:r.ONE_MINUS_CONSTANT_COLOR,[fl]:r.CONSTANT_ALPHA,[pl]:r.ONE_MINUS_CONSTANT_ALPHA};function _e(D,re,oe,be,Me,$e,Ke,pt,bt,Ze){if(D===Ln){f===!0&&(we(r.BLEND),f=!1);return}if(f===!1&&(Ie(r.BLEND),f=!0),D!==Qc){if(D!==v||Ze!==U){if((x!==Wn||b!==Wn)&&(r.blendEquation(r.FUNC_ADD),x=Wn,b=Wn),Ze)switch(D){case xi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gi:r.blendFunc(r.ONE,r.ONE);break;case ho:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fo:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case xi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gi:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case ho:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fo:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,R=null,A=null,O=null,M.set(0,0,0),w=0,v=D,U=Ze}return}Me=Me||re,$e=$e||oe,Ke=Ke||be,(re!==x||Me!==b)&&(r.blendEquationSeparate(ye[re],ye[Me]),x=re,b=Me),(oe!==S||be!==R||$e!==A||Ke!==O)&&(r.blendFuncSeparate(Ce[oe],Ce[be],Ce[$e],Ce[Ke]),S=oe,R=be,A=$e,O=Ke),(pt.equals(M)===!1||bt!==w)&&(r.blendColor(pt.r,pt.g,pt.b,bt),M.copy(pt),w=bt),v=D,U=!1}function et(D,re){D.side===on?we(r.CULL_FACE):Ie(r.CULL_FACE);let oe=D.side===Rt;re&&(oe=!oe),Ue(oe),D.blending===xi&&D.transparent===!1?_e(Ln):_e(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),u.setFunc(D.depthFunc),u.setTest(D.depthTest),u.setMask(D.depthWrite),c.setMask(D.colorWrite);const be=D.stencilWrite;h.setTest(be),be&&(h.setMask(D.stencilWriteMask),h.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),h.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),V(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ie(r.SAMPLE_ALPHA_TO_COVERAGE):we(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(D){z!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),z=D)}function C(D){D!==Zc?(Ie(r.CULL_FACE),D!==N&&(D===uo?r.cullFace(r.BACK):D===Jc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):we(r.CULL_FACE),N=D}function E(D){D!==P&&(k&&r.lineWidth(D),P=D)}function V(D,re,oe){D?(Ie(r.POLYGON_OFFSET_FILL),(L!==re||I!==oe)&&(r.polygonOffset(re,oe),L=re,I=oe)):we(r.POLYGON_OFFSET_FILL)}function te(D){D?Ie(r.SCISSOR_TEST):we(r.SCISSOR_TEST)}function ee(D){D===void 0&&(D=r.TEXTURE0+$-1),J!==D&&(r.activeTexture(D),J=D)}function ne(D,re,oe){oe===void 0&&(J===null?oe=r.TEXTURE0+$-1:oe=J);let be=j[oe];be===void 0&&(be={type:void 0,texture:void 0},j[oe]=be),(be.type!==D||be.texture!==re)&&(J!==oe&&(r.activeTexture(oe),J=oe),r.bindTexture(D,re||Pe[D]),be.type=D,be.texture=re)}function ge(){const D=j[J];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ce(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(D){ae.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),ae.copy(D))}function qe(D){pe.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),pe.copy(D))}function it(D,re){let oe=o.get(re);oe===void 0&&(oe=new WeakMap,o.set(re,oe));let be=oe.get(D);be===void 0&&(be=r.getUniformBlockIndex(re,D.name),oe.set(D,be))}function Be(D,re){const be=o.get(re).get(D);p.get(re)!==be&&(r.uniformBlockBinding(re,be,D.__bindingPointIndex),p.set(re,be))}function ie(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),l={},J=null,j={},d={},_=new WeakMap,g=[],m=null,f=!1,v=null,x=null,S=null,R=null,b=null,A=null,O=null,M=new He(0,0,0),w=0,U=!1,z=null,N=null,P=null,L=null,I=null,ae.set(0,0,r.canvas.width,r.canvas.height),pe.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:Ie,disable:we,bindFramebuffer:Ve,drawBuffers:G,useProgram:wt,setBlending:_e,setMaterial:et,setFlipSided:Ue,setCullFace:C,setLineWidth:E,setPolygonOffset:V,setScissorTest:te,activeTexture:ee,bindTexture:ne,unbindTexture:ge,compressedTexImage2D:ce,compressedTexImage3D:de,texImage2D:xe,texImage3D:fe,updateUBOMapping:it,uniformBlockBinding:Be,texStorage2D:Ge,texStorage3D:Ae,texSubImage2D:Ee,texSubImage3D:Fe,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ye,scissor:De,viewport:qe,reset:ie}}function jp(r,e,t,n,i,s,a){const c=i.isWebGL2,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let o;const l=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,E){return d?new OffscreenCanvas(C,E):Bs("canvas")}function g(C,E,V,te){let ee=1;if((C.width>te||C.height>te)&&(ee=te/Math.max(C.width,C.height)),ee<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ne=E?Vr:Math.floor,ge=ne(ee*C.width),ce=ne(ee*C.height);o===void 0&&(o=_(ge,ce));const de=V?_(ge,ce):o;return de.width=ge,de.height=ce,de.getContext("2d").drawImage(C,0,0,ge,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ge+"x"+ce+")."),de}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return Xo(C.width)&&Xo(C.height)}function f(C){return c?!1:C.wrapS!==Zt||C.wrapT!==Zt||C.minFilter!==Ct&&C.minFilter!==Ht}function v(C,E){return C.generateMipmaps&&E&&C.minFilter!==Ct&&C.minFilter!==Ht}function x(C){r.generateMipmap(C)}function S(C,E,V,te,ee=!1){if(c===!1)return E;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ne=E;if(E===r.RED&&(V===r.FLOAT&&(ne=r.R32F),V===r.HALF_FLOAT&&(ne=r.R16F),V===r.UNSIGNED_BYTE&&(ne=r.R8)),E===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(ne=r.R8UI),V===r.UNSIGNED_SHORT&&(ne=r.R16UI),V===r.UNSIGNED_INT&&(ne=r.R32UI),V===r.BYTE&&(ne=r.R8I),V===r.SHORT&&(ne=r.R16I),V===r.INT&&(ne=r.R32I)),E===r.RG&&(V===r.FLOAT&&(ne=r.RG32F),V===r.HALF_FLOAT&&(ne=r.RG16F),V===r.UNSIGNED_BYTE&&(ne=r.RG8)),E===r.RGBA){const ge=ee?Ns:je.getTransfer(te);V===r.FLOAT&&(ne=r.RGBA32F),V===r.HALF_FLOAT&&(ne=r.RGBA16F),V===r.UNSIGNED_BYTE&&(ne=ge===Qe?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(ne=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(ne=r.RGB5_A1)}return(ne===r.R16F||ne===r.R32F||ne===r.RG16F||ne===r.RG32F||ne===r.RGBA16F||ne===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function R(C,E,V){return v(C,V)===!0||C.isFramebufferTexture&&C.minFilter!==Ct&&C.minFilter!==Ht?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function b(C){return C===Ct||C===_o||C===Zs?r.NEAREST:r.LINEAR}function A(C){const E=C.target;E.removeEventListener("dispose",A),M(E),E.isVideoTexture&&p.delete(E)}function O(C){const E=C.target;E.removeEventListener("dispose",O),U(E)}function M(C){const E=n.get(C);if(E.__webglInit===void 0)return;const V=C.source,te=l.get(V);if(te){const ee=te[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(C),Object.keys(te).length===0&&l.delete(V)}n.remove(C)}function w(C){const E=n.get(C);r.deleteTexture(E.__webglTexture);const V=C.source,te=l.get(V);delete te[E.__cacheKey],a.memory.textures--}function U(C){const E=C.texture,V=n.get(C),te=n.get(E);if(te.__webglTexture!==void 0&&(r.deleteTexture(te.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(V.__webglFramebuffer[ee]))for(let ne=0;ne<V.__webglFramebuffer[ee].length;ne++)r.deleteFramebuffer(V.__webglFramebuffer[ee][ne]);else r.deleteFramebuffer(V.__webglFramebuffer[ee]);V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[ee])}else{if(Array.isArray(V.__webglFramebuffer))for(let ee=0;ee<V.__webglFramebuffer.length;ee++)r.deleteFramebuffer(V.__webglFramebuffer[ee]);else r.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ee=0;ee<V.__webglColorRenderbuffer.length;ee++)V.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(V.__webglColorRenderbuffer[ee]);V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ee=0,ne=E.length;ee<ne;ee++){const ge=n.get(E[ee]);ge.__webglTexture&&(r.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(E[ee])}n.remove(E),n.remove(C)}let z=0;function N(){z=0}function P(){const C=z;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),z+=1,C}function L(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function I(C,E){const V=n.get(C);if(C.isVideoTexture&&et(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(V,C,E);return}}t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+E)}function $(C,E){const V=n.get(C);if(C.version>0&&V.__version!==C.version){ae(V,C,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+E)}function k(C,E){const V=n.get(C);if(C.version>0&&V.__version!==C.version){ae(V,C,E);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+E)}function X(C,E){const V=n.get(C);if(C.version>0&&V.__version!==C.version){pe(V,C,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+E)}const K={[qi]:r.REPEAT,[Zt]:r.CLAMP_TO_EDGE,[kr]:r.MIRRORED_REPEAT},J={[Ct]:r.NEAREST,[_o]:r.NEAREST_MIPMAP_NEAREST,[Zs]:r.NEAREST_MIPMAP_LINEAR,[Ht]:r.LINEAR,[Rl]:r.LINEAR_MIPMAP_NEAREST,[Yi]:r.LINEAR_MIPMAP_LINEAR},j={[Gl]:r.NEVER,[Yl]:r.ALWAYS,[Hl]:r.LESS,[pc]:r.LEQUAL,[Vl]:r.EQUAL,[ql]:r.GEQUAL,[Wl]:r.GREATER,[Xl]:r.NOTEQUAL};function Y(C,E,V){if(V?(r.texParameteri(C,r.TEXTURE_WRAP_S,K[E.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,K[E.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,K[E.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,J[E.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,J[E.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(E.wrapS!==Zt||E.wrapT!==Zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,b(E.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,b(E.minFilter)),E.minFilter!==Ct&&E.minFilter!==Ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,j[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ct||E.minFilter!==Zs&&E.minFilter!==Yi||E.type===Pn&&e.has("OES_texture_float_linear")===!1||c===!1&&E.type===ji&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(C,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Z(C,E){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",A));const te=E.source;let ee=l.get(te);ee===void 0&&(ee={},l.set(te,ee));const ne=L(E);if(ne!==C.__cacheKey){ee[ne]===void 0&&(ee[ne]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ee[ne].usedTimes++;const ge=ee[C.__cacheKey];ge!==void 0&&(ee[C.__cacheKey].usedTimes--,ge.usedTimes===0&&w(E)),C.__cacheKey=ne,C.__webglTexture=ee[ne].texture}return V}function ae(C,E,V){let te=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(te=r.TEXTURE_3D);const ee=Z(C,E),ne=E.source;t.bindTexture(te,C.__webglTexture,r.TEXTURE0+V);const ge=n.get(ne);if(ne.version!==ge.__version||ee===!0){t.activeTexture(r.TEXTURE0+V);const ce=je.getPrimaries(je.workingColorSpace),de=E.colorSpace===Wt?null:je.getPrimaries(E.colorSpace),Ee=E.colorSpace===Wt||ce===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Fe=f(E)&&m(E.image)===!1;let Q=g(E.image,Fe,!1,i.maxTextureSize);Q=Ue(E,Q);const Ye=m(Q)||c,Ge=s.convert(E.format,E.colorSpace);let Ae=s.convert(E.type),xe=S(E.internalFormat,Ge,Ae,E.colorSpace,E.isVideoTexture);Y(te,E,Ye);let fe;const De=E.mipmaps,qe=c&&E.isVideoTexture!==!0&&xe!==hc,it=ge.__version===void 0||ee===!0,Be=R(E,Q,Ye);if(E.isDepthTexture)xe=r.DEPTH_COMPONENT,c?E.type===Pn?xe=r.DEPTH_COMPONENT32F:E.type===Rn?xe=r.DEPTH_COMPONENT24:E.type===Yn?xe=r.DEPTH24_STENCIL8:xe=r.DEPTH_COMPONENT16:E.type===Pn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===jn&&xe===r.DEPTH_COMPONENT&&E.type!==jr&&E.type!==Rn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Rn,Ae=s.convert(E.type)),E.format===wi&&xe===r.DEPTH_COMPONENT&&(xe=r.DEPTH_STENCIL,E.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Yn,Ae=s.convert(E.type))),it&&(qe?t.texStorage2D(r.TEXTURE_2D,1,xe,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,xe,Q.width,Q.height,0,Ge,Ae,null));else if(E.isDataTexture)if(De.length>0&&Ye){qe&&it&&t.texStorage2D(r.TEXTURE_2D,Be,xe,De[0].width,De[0].height);for(let ie=0,D=De.length;ie<D;ie++)fe=De[ie],qe?t.texSubImage2D(r.TEXTURE_2D,ie,0,0,fe.width,fe.height,Ge,Ae,fe.data):t.texImage2D(r.TEXTURE_2D,ie,xe,fe.width,fe.height,0,Ge,Ae,fe.data);E.generateMipmaps=!1}else qe?(it&&t.texStorage2D(r.TEXTURE_2D,Be,xe,Q.width,Q.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Q.width,Q.height,Ge,Ae,Q.data)):t.texImage2D(r.TEXTURE_2D,0,xe,Q.width,Q.height,0,Ge,Ae,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){qe&&it&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Be,xe,De[0].width,De[0].height,Q.depth);for(let ie=0,D=De.length;ie<D;ie++)fe=De[ie],E.format!==Jt?Ge!==null?qe?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,Q.depth,Ge,fe.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ie,xe,fe.width,fe.height,Q.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,Q.depth,Ge,Ae,fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ie,xe,fe.width,fe.height,Q.depth,0,Ge,Ae,fe.data)}else{qe&&it&&t.texStorage2D(r.TEXTURE_2D,Be,xe,De[0].width,De[0].height);for(let ie=0,D=De.length;ie<D;ie++)fe=De[ie],E.format!==Jt?Ge!==null?qe?t.compressedTexSubImage2D(r.TEXTURE_2D,ie,0,0,fe.width,fe.height,Ge,fe.data):t.compressedTexImage2D(r.TEXTURE_2D,ie,xe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(r.TEXTURE_2D,ie,0,0,fe.width,fe.height,Ge,Ae,fe.data):t.texImage2D(r.TEXTURE_2D,ie,xe,fe.width,fe.height,0,Ge,Ae,fe.data)}else if(E.isDataArrayTexture)qe?(it&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Be,xe,Q.width,Q.height,Q.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Ge,Ae,Q.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,xe,Q.width,Q.height,Q.depth,0,Ge,Ae,Q.data);else if(E.isData3DTexture)qe?(it&&t.texStorage3D(r.TEXTURE_3D,Be,xe,Q.width,Q.height,Q.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Ge,Ae,Q.data)):t.texImage3D(r.TEXTURE_3D,0,xe,Q.width,Q.height,Q.depth,0,Ge,Ae,Q.data);else if(E.isFramebufferTexture){if(it)if(qe)t.texStorage2D(r.TEXTURE_2D,Be,xe,Q.width,Q.height);else{let ie=Q.width,D=Q.height;for(let re=0;re<Be;re++)t.texImage2D(r.TEXTURE_2D,re,xe,ie,D,0,Ge,Ae,null),ie>>=1,D>>=1}}else if(De.length>0&&Ye){qe&&it&&t.texStorage2D(r.TEXTURE_2D,Be,xe,De[0].width,De[0].height);for(let ie=0,D=De.length;ie<D;ie++)fe=De[ie],qe?t.texSubImage2D(r.TEXTURE_2D,ie,0,0,Ge,Ae,fe):t.texImage2D(r.TEXTURE_2D,ie,xe,Ge,Ae,fe);E.generateMipmaps=!1}else qe?(it&&t.texStorage2D(r.TEXTURE_2D,Be,xe,Q.width,Q.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ge,Ae,Q)):t.texImage2D(r.TEXTURE_2D,0,xe,Ge,Ae,Q);v(E,Ye)&&x(te),ge.__version=ne.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function pe(C,E,V){if(E.image.length!==6)return;const te=Z(C,E),ee=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+V);const ne=n.get(ee);if(ee.version!==ne.__version||te===!0){t.activeTexture(r.TEXTURE0+V);const ge=je.getPrimaries(je.workingColorSpace),ce=E.colorSpace===Wt?null:je.getPrimaries(E.colorSpace),de=E.colorSpace===Wt||ge===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ee=E.isCompressedTexture||E.image[0].isCompressedTexture,Fe=E.image[0]&&E.image[0].isDataTexture,Q=[];for(let ie=0;ie<6;ie++)!Ee&&!Fe?Q[ie]=g(E.image[ie],!1,!0,i.maxCubemapSize):Q[ie]=Fe?E.image[ie].image:E.image[ie],Q[ie]=Ue(E,Q[ie]);const Ye=Q[0],Ge=m(Ye)||c,Ae=s.convert(E.format,E.colorSpace),xe=s.convert(E.type),fe=S(E.internalFormat,Ae,xe,E.colorSpace),De=c&&E.isVideoTexture!==!0,qe=ne.__version===void 0||te===!0;let it=R(E,Ye,Ge);Y(r.TEXTURE_CUBE_MAP,E,Ge);let Be;if(Ee){De&&qe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,it,fe,Ye.width,Ye.height);for(let ie=0;ie<6;ie++){Be=Q[ie].mipmaps;for(let D=0;D<Be.length;D++){const re=Be[D];E.format!==Jt?Ae!==null?De?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,D,0,0,re.width,re.height,Ae,re.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,D,fe,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,D,0,0,re.width,re.height,Ae,xe,re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,D,fe,re.width,re.height,0,Ae,xe,re.data)}}}else{Be=E.mipmaps,De&&qe&&(Be.length>0&&it++,t.texStorage2D(r.TEXTURE_CUBE_MAP,it,fe,Q[0].width,Q[0].height));for(let ie=0;ie<6;ie++)if(Fe){De?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Q[ie].width,Q[ie].height,Ae,xe,Q[ie].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,fe,Q[ie].width,Q[ie].height,0,Ae,xe,Q[ie].data);for(let D=0;D<Be.length;D++){const oe=Be[D].image[ie].image;De?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,D+1,0,0,oe.width,oe.height,Ae,xe,oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,D+1,fe,oe.width,oe.height,0,Ae,xe,oe.data)}}else{De?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ae,xe,Q[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,fe,Ae,xe,Q[ie]);for(let D=0;D<Be.length;D++){const re=Be[D];De?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,D+1,0,0,Ae,xe,re.image[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,D+1,fe,Ae,xe,re.image[ie])}}}v(E,Ge)&&x(r.TEXTURE_CUBE_MAP),ne.__version=ee.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function me(C,E,V,te,ee,ne){const ge=s.convert(V.format,V.colorSpace),ce=s.convert(V.type),de=S(V.internalFormat,ge,ce,V.colorSpace);if(!n.get(E).__hasExternalTextures){const Fe=Math.max(1,E.width>>ne),Q=Math.max(1,E.height>>ne);ee===r.TEXTURE_3D||ee===r.TEXTURE_2D_ARRAY?t.texImage3D(ee,ne,de,Fe,Q,E.depth,0,ge,ce,null):t.texImage2D(ee,ne,de,Fe,Q,0,ge,ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),_e(E)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,ee,n.get(V).__webglTexture,0,Ce(E)):(ee===r.TEXTURE_2D||ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,ee,n.get(V).__webglTexture,ne),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Pe(C,E,V){if(r.bindRenderbuffer(r.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let te=c===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(V||_e(E)){const ee=E.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Pn?te=r.DEPTH_COMPONENT32F:ee.type===Rn&&(te=r.DEPTH_COMPONENT24));const ne=Ce(E);_e(E)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,te,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,te,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,te,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){const te=Ce(E);V&&_e(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,te,r.DEPTH24_STENCIL8,E.width,E.height):_e(E)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const te=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0;ee<te.length;ee++){const ne=te[ee],ge=s.convert(ne.format,ne.colorSpace),ce=s.convert(ne.type),de=S(ne.internalFormat,ge,ce,ne.colorSpace),Ee=Ce(E);V&&_e(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,de,E.width,E.height):_e(E)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ee,de,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,de,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ie(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),I(E.depthTexture,0);const te=n.get(E.depthTexture).__webglTexture,ee=Ce(E);if(E.depthTexture.format===jn)_e(E)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0);else if(E.depthTexture.format===wi)_e(E)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function we(C){const E=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ie(E.__webglFramebuffer,C)}else if(V){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]=r.createRenderbuffer(),Pe(E.__webglDepthbuffer[te],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),Pe(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(C,E,V){const te=n.get(C);E!==void 0&&me(te.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&we(C)}function G(C){const E=C.texture,V=n.get(C),te=n.get(E);C.addEventListener("dispose",O),C.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=E.version,a.memory.textures++);const ee=C.isWebGLCubeRenderTarget===!0,ne=C.isWebGLMultipleRenderTargets===!0,ge=m(C)||c;if(ee){V.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(c&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[ce]=[];for(let de=0;de<E.mipmaps.length;de++)V.__webglFramebuffer[ce][de]=r.createFramebuffer()}else V.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(c&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)V.__webglFramebuffer[ce]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(ne)if(i.drawBuffers){const ce=C.texture;for(let de=0,Ee=ce.length;de<Ee;de++){const Fe=n.get(ce[de]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&C.samples>0&&_e(C)===!1){const ce=ne?E:[E];V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let de=0;de<ce.length;de++){const Ee=ce[de];V.__webglColorRenderbuffer[de]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[de]);const Fe=s.convert(Ee.format,Ee.colorSpace),Q=s.convert(Ee.type),Ye=S(Ee.internalFormat,Fe,Q,Ee.colorSpace,C.isXRRenderTarget===!0),Ge=Ce(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge,Ye,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,V.__webglColorRenderbuffer[de])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Pe(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ee){t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),Y(r.TEXTURE_CUBE_MAP,E,ge);for(let ce=0;ce<6;ce++)if(c&&E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)me(V.__webglFramebuffer[ce][de],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else me(V.__webglFramebuffer[ce],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);v(E,ge)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const ce=C.texture;for(let de=0,Ee=ce.length;de<Ee;de++){const Fe=ce[de],Q=n.get(Fe);t.bindTexture(r.TEXTURE_2D,Q.__webglTexture),Y(r.TEXTURE_2D,Fe,ge),me(V.__webglFramebuffer,C,Fe,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,0),v(Fe,ge)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let ce=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(c?ce=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,te.__webglTexture),Y(ce,E,ge),c&&E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)me(V.__webglFramebuffer[de],C,E,r.COLOR_ATTACHMENT0,ce,de);else me(V.__webglFramebuffer,C,E,r.COLOR_ATTACHMENT0,ce,0);v(E,ge)&&x(ce),t.unbindTexture()}C.depthBuffer&&we(C)}function wt(C){const E=m(C)||c,V=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let te=0,ee=V.length;te<ee;te++){const ne=V[te];if(v(ne,E)){const ge=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ce=n.get(ne).__webglTexture;t.bindTexture(ge,ce),x(ge),t.unbindTexture()}}}function ye(C){if(c&&C.samples>0&&_e(C)===!1){const E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],V=C.width,te=C.height;let ee=r.COLOR_BUFFER_BIT;const ne=[],ge=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=n.get(C),de=C.isWebGLMultipleRenderTargets===!0;if(de)for(let Ee=0;Ee<E.length;Ee++)t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Ee=0;Ee<E.length;Ee++){ne.push(r.COLOR_ATTACHMENT0+Ee),C.depthBuffer&&ne.push(ge);const Fe=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Fe===!1&&(C.depthBuffer&&(ee|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ee|=r.STENCIL_BUFFER_BIT)),de&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ce.__webglColorRenderbuffer[Ee]),Fe===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ge]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ge])),de){const Q=n.get(E[Ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,V,te,0,0,V,te,ee,r.NEAREST),h&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),de)for(let Ee=0;Ee<E.length;Ee++){t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,ce.__webglColorRenderbuffer[Ee]);const Fe=n.get(E[Ee]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,Fe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Ce(C){return Math.min(i.maxSamples,C.samples)}function _e(C){const E=n.get(C);return c&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function et(C){const E=a.render.frame;p.get(C)!==E&&(p.set(C,E),C.update())}function Ue(C,E){const V=C.colorSpace,te=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Gr||V!==Mn&&V!==Wt&&(je.getTransfer(V)===Qe?c===!1?e.has("EXT_sRGB")===!0&&te===Jt?(C.format=Gr,C.minFilter=Ht,C.generateMipmaps=!1):E=_c.sRGBToLinear(E):(te!==Jt||ee!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}this.allocateTextureUnit=P,this.resetTextureUnits=N,this.setTexture2D=I,this.setTexture2DArray=$,this.setTexture3D=k,this.setTextureCube=X,this.rebindTextures=Ve,this.setupRenderTarget=G,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=me,this.useMultisampledRTT=_e}function $p(r,e,t){const n=t.isWebGL2;function i(s,a=Wt){let c;const u=je.getTransfer(a);if(s===Dn)return r.UNSIGNED_BYTE;if(s===oc)return r.UNSIGNED_SHORT_4_4_4_4;if(s===ac)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Pl)return r.BYTE;if(s===Ll)return r.SHORT;if(s===jr)return r.UNSIGNED_SHORT;if(s===rc)return r.INT;if(s===Rn)return r.UNSIGNED_INT;if(s===Pn)return r.FLOAT;if(s===ji)return n?r.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(s===Il)return r.ALPHA;if(s===Jt)return r.RGBA;if(s===Dl)return r.LUMINANCE;if(s===Nl)return r.LUMINANCE_ALPHA;if(s===jn)return r.DEPTH_COMPONENT;if(s===wi)return r.DEPTH_STENCIL;if(s===Gr)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(s===Ul)return r.RED;if(s===cc)return r.RED_INTEGER;if(s===Fl)return r.RG;if(s===lc)return r.RG_INTEGER;if(s===uc)return r.RGBA_INTEGER;if(s===Js||s===Qs||s===er||s===tr)if(u===Qe)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Js)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Qs)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===er)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===tr)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Js)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Qs)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===er)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===tr)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===go||s===vo||s===xo||s===yo)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===go)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===vo)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xo)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===yo)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hc)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Mo||s===So)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Mo)return u===Qe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===So)return u===Qe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Eo||s===wo||s===bo||s===To||s===Ao||s===Co||s===Ro||s===Po||s===Lo||s===Io||s===Do||s===No||s===Uo||s===Fo)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Eo)return u===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wo)return u===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===bo)return u===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===To)return u===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ao)return u===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Co)return u===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ro)return u===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Po)return u===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Lo)return u===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Io)return u===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Do)return u===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===No)return u===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Uo)return u===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Fo)return u===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===nr||s===Oo||s===Bo)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===nr)return u===Qe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Oo)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Bo)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ol||s===zo||s===ko||s===Go)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===nr)return c.COMPRESSED_RED_RGTC1_EXT;if(s===zo)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ko)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Go)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Yn?n?r.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Kp extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xt extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zp={type:"move"};class Ar{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const c=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(h,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const p=h.joints["index-finger-tip"],o=h.joints["thumb-tip"],l=p.position.distanceTo(o.position),d=.02,_=.005;h.inputState.pinching&&l>d+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&l<=d-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Zp)))}return c!==null&&(c.visible=i!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Jp extends Ti{constructor(e,t){super();const n=this;let i=null,s=1,a=null,c="local-floor",u=1,h=null,p=null,o=null,l=null,d=null,_=null;const g=t.getContextAttributes();let m=null,f=null;const v=[],x=[],S=new We;let R=null;const b=new Vt;b.layers.enable(1),b.viewport=new vt;const A=new Vt;A.layers.enable(2),A.viewport=new vt;const O=[b,A],M=new Kp;M.layers.enable(1),M.layers.enable(2);let w=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=v[Y];return Z===void 0&&(Z=new Ar,v[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=v[Y];return Z===void 0&&(Z=new Ar,v[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=v[Y];return Z===void 0&&(Z=new Ar,v[Y]=Z),Z.getHandSpace()};function z(Y){const Z=x.indexOf(Y.inputSource);if(Z===-1)return;const ae=v[Z];ae!==void 0&&(ae.update(Y.inputSource,Y.frame,h||a),ae.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",P);for(let Y=0;Y<v.length;Y++){const Z=x[Y];Z!==null&&(x[Y]=null,v[Y].disconnect(Z))}w=null,U=null,e.setRenderTarget(m),d=null,l=null,o=null,i=null,f=null,j.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){c=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return l!==null?l:d},this.getBinding=function(){return o},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",N),i.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(S),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),f=new Kn(d.framebufferWidth,d.framebufferHeight,{format:Jt,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Z=null,ae=null,pe=null;g.depth&&(pe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=g.stencil?wi:jn,ae=g.stencil?Yn:Rn);const me={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};o=new XRWebGLBinding(i,t),l=o.createProjectionLayer(me),i.updateRenderState({layers:[l]}),e.setPixelRatio(1),e.setSize(l.textureWidth,l.textureHeight,!1),f=new Kn(l.textureWidth,l.textureHeight,{format:Jt,type:Dn,depthTexture:new Rc(l.textureWidth,l.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Pe=e.properties.get(f);Pe.__ignoreDepthValues=l.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(u),h=null,a=await i.requestReferenceSpace(c),j.setContext(i),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(Y){for(let Z=0;Z<Y.removed.length;Z++){const ae=Y.removed[Z],pe=x.indexOf(ae);pe>=0&&(x[pe]=null,v[pe].disconnect(ae))}for(let Z=0;Z<Y.added.length;Z++){const ae=Y.added[Z];let pe=x.indexOf(ae);if(pe===-1){for(let Pe=0;Pe<v.length;Pe++)if(Pe>=x.length){x.push(ae),pe=Pe;break}else if(x[Pe]===null){x[Pe]=ae,pe=Pe;break}if(pe===-1)break}const me=v[pe];me&&me.connect(ae)}}const L=new B,I=new B;function $(Y,Z,ae){L.setFromMatrixPosition(Z.matrixWorld),I.setFromMatrixPosition(ae.matrixWorld);const pe=L.distanceTo(I),me=Z.projectionMatrix.elements,Pe=ae.projectionMatrix.elements,Ie=me[14]/(me[10]-1),we=me[14]/(me[10]+1),Ve=(me[9]+1)/me[5],G=(me[9]-1)/me[5],wt=(me[8]-1)/me[0],ye=(Pe[8]+1)/Pe[0],Ce=Ie*wt,_e=Ie*ye,et=pe/(-wt+ye),Ue=et*-wt;Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ue),Y.translateZ(et),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const C=Ie+et,E=we+et,V=Ce-Ue,te=_e+(pe-Ue),ee=Ve*we/E*C,ne=G*we/E*C;Y.projectionMatrix.makePerspective(V,te,ee,ne,C,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function k(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;M.near=A.near=b.near=Y.near,M.far=A.far=b.far=Y.far,(w!==M.near||U!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,U=M.far);const Z=Y.parent,ae=M.cameras;k(M,Z);for(let pe=0;pe<ae.length;pe++)k(ae[pe],Z);ae.length===2?$(M,b,A):M.projectionMatrix.copy(b.projectionMatrix),X(Y,M,Z)};function X(Y,Z,ae){ae===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(ae.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Hr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(l===null&&d===null))return u},this.setFoveation=function(Y){u=Y,l!==null&&(l.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)};let K=null;function J(Y,Z){if(p=Z.getViewerPose(h||a),_=Z,p!==null){const ae=p.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let pe=!1;ae.length!==M.cameras.length&&(M.cameras.length=0,pe=!0);for(let me=0;me<ae.length;me++){const Pe=ae[me];let Ie=null;if(d!==null)Ie=d.getViewport(Pe);else{const Ve=o.getViewSubImage(l,Pe);Ie=Ve.viewport,me===0&&(e.setRenderTargetTextures(f,Ve.colorTexture,l.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(f))}let we=O[me];we===void 0&&(we=new Vt,we.layers.enable(me),we.viewport=new vt,O[me]=we),we.matrix.fromArray(Pe.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Pe.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),me===0&&(M.matrix.copy(we.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),pe===!0&&M.cameras.push(we)}}for(let ae=0;ae<v.length;ae++){const pe=x[ae],me=v[ae];pe!==null&&me!==void 0&&me.update(pe,Z,h||a)}K&&K(Y,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}const j=new Ac;j.setAnimationLoop(J),this.setAnimationLoop=function(Y){K=Y},this.dispose=function(){}}}function Qp(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,wc(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,v,x,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),o(m,f)):f.isMeshPhongMaterial?(s(m,f),p(m,f)):f.isMeshStandardMaterial?(s(m,f),l(m,f),f.isMeshPhysicalMaterial&&d(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&c(m,f)):f.isPointsMaterial?u(m,f,v,x):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Rt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Rt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function c(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function u(m,f,v,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function p(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function o(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function l(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Rt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function em(r,e,t,n){let i={},s={},a=[];const c=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function u(v,x){const S=x.program;n.uniformBlockBinding(v,S)}function h(v,x){let S=i[v.id];S===void 0&&(_(v),S=p(v),i[v.id]=S,v.addEventListener("dispose",m));const R=x.program;n.updateUBOMapping(v,R);const b=e.render.frame;s[v.id]!==b&&(l(v),s[v.id]=b)}function p(v){const x=o();v.__bindingPointIndex=x;const S=r.createBuffer(),R=v.__size,b=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,R,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,S),S}function o(){for(let v=0;v<c;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function l(v){const x=i[v.id],S=v.uniforms,R=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let b=0,A=S.length;b<A;b++){const O=Array.isArray(S[b])?S[b]:[S[b]];for(let M=0,w=O.length;M<w;M++){const U=O[M];if(d(U,b,M,R)===!0){const z=U.__offset,N=Array.isArray(U.value)?U.value:[U.value];let P=0;for(let L=0;L<N.length;L++){const I=N[L],$=g(I);typeof I=="number"||typeof I=="boolean"?(U.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,z+P,U.__data)):I.isMatrix3?(U.__data[0]=I.elements[0],U.__data[1]=I.elements[1],U.__data[2]=I.elements[2],U.__data[3]=0,U.__data[4]=I.elements[3],U.__data[5]=I.elements[4],U.__data[6]=I.elements[5],U.__data[7]=0,U.__data[8]=I.elements[6],U.__data[9]=I.elements[7],U.__data[10]=I.elements[8],U.__data[11]=0):(I.toArray(U.__data,P),P+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(v,x,S,R){const b=v.value,A=x+"_"+S;if(R[A]===void 0)return typeof b=="number"||typeof b=="boolean"?R[A]=b:R[A]=b.clone(),!0;{const O=R[A];if(typeof b=="number"||typeof b=="boolean"){if(O!==b)return R[A]=b,!0}else if(O.equals(b)===!1)return O.copy(b),!0}return!1}function _(v){const x=v.uniforms;let S=0;const R=16;for(let A=0,O=x.length;A<O;A++){const M=Array.isArray(x[A])?x[A]:[x[A]];for(let w=0,U=M.length;w<U;w++){const z=M[w],N=Array.isArray(z.value)?z.value:[z.value];for(let P=0,L=N.length;P<L;P++){const I=N[P],$=g(I),k=S%R;k!==0&&R-k<$.boundary&&(S+=R-k),z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=$.storage}}}const b=S%R;return b>0&&(S+=R-b),v.__size=S,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function f(){for(const v in i)r.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:u,update:h,dispose:f}}class Uc{constructor(e={}){const{canvas:t=$l(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:o=!1}=e;this.isWebGLRenderer=!0;let l;n!==null?l=n.getContextAttributes().alpha:l=a;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const f=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this._useLegacyLights=!1,this.toneMapping=In,this.toneMappingExposure=1;const x=this;let S=!1,R=0,b=0,A=null,O=-1,M=null;const w=new vt,U=new vt;let z=null;const N=new He(0);let P=0,L=t.width,I=t.height,$=1,k=null,X=null;const K=new vt(0,0,L,I),J=new vt(0,0,L,I);let j=!1;const Y=new Kr;let Z=!1,ae=!1,pe=null;const me=new lt,Pe=new We,Ie=new B,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return A===null?$:1}let G=n;function wt(T,F){for(let W=0;W<T.length;W++){const q=T[W],H=t.getContext(q,F);if(H!==null)return H}return null}try{const T={alpha:!0,depth:i,stencil:s,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:o};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qr}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",re,!1),G===null){const F=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&F.shift(),G=wt(F,T),G===null)throw wt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ye,Ce,_e,et,Ue,C,E,V,te,ee,ne,ge,ce,de,Ee,Fe,Q,Ye,Ge,Ae,xe,fe,De,qe;function it(){ye=new uf(G),Ce=new sf(G,ye,e),ye.init(Ce),fe=new $p(G,ye,Ce),_e=new Yp(G,ye,Ce),et=new ff(G),Ue=new Dp,C=new jp(G,ye,_e,Ue,Ce,fe,et),E=new of(x),V=new lf(x),te=new yu(G,Ce),De=new tf(G,ye,te,Ce),ee=new hf(G,te,et,De),ne=new gf(G,ee,te,et),Ge=new _f(G,Ce,C),Fe=new rf(Ue),ge=new Ip(x,E,V,ye,Ce,De,Fe),ce=new Qp(x,Ue),de=new Up,Ee=new Gp(ye,Ce),Ye=new ef(x,E,V,_e,ne,l,u),Q=new qp(x,ne,Ce),qe=new em(G,et,Ce,_e),Ae=new nf(G,ye,et,Ce),xe=new df(G,ye,et,Ce),et.programs=ge.programs,x.capabilities=Ce,x.extensions=ye,x.properties=Ue,x.renderLists=de,x.shadowMap=Q,x.state=_e,x.info=et}it();const Be=new Jp(x,G);this.xr=Be,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(L,I,!1))},this.getSize=function(T){return T.set(L,I)},this.setSize=function(T,F,W=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=T,I=F,t.width=Math.floor(T*$),t.height=Math.floor(F*$),W===!0&&(t.style.width=T+"px",t.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(L*$,I*$).floor()},this.setDrawingBufferSize=function(T,F,W){L=T,I=F,$=W,t.width=Math.floor(T*W),t.height=Math.floor(F*W),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(K)},this.setViewport=function(T,F,W,q){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,F,W,q),_e.viewport(w.copy(K).multiplyScalar($).floor())},this.getScissor=function(T){return T.copy(J)},this.setScissor=function(T,F,W,q){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,F,W,q),_e.scissor(U.copy(J).multiplyScalar($).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(T){_e.setScissorTest(j=T)},this.setOpaqueSort=function(T){k=T},this.setTransparentSort=function(T){X=T},this.getClearColor=function(T){return T.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(T=!0,F=!0,W=!0){let q=0;if(T){let H=!1;if(A!==null){const le=A.texture.format;H=le===uc||le===lc||le===cc}if(H){const le=A.texture.type,ve=le===Dn||le===Rn||le===jr||le===Yn||le===oc||le===ac,Se=Ye.getClearColor(),Te=Ye.getClearAlpha(),Oe=Se.r,Re=Se.g,Le=Se.b;ve?(d[0]=Oe,d[1]=Re,d[2]=Le,d[3]=Te,G.clearBufferuiv(G.COLOR,0,d)):(_[0]=Oe,_[1]=Re,_[2]=Le,_[3]=Te,G.clearBufferiv(G.COLOR,0,_))}else q|=G.COLOR_BUFFER_BIT}F&&(q|=G.DEPTH_BUFFER_BIT),W&&(q|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",re,!1),de.dispose(),Ee.dispose(),Ue.dispose(),E.dispose(),V.dispose(),ne.dispose(),De.dispose(),qe.dispose(),ge.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",bt),Be.removeEventListener("sessionend",Ze),pe&&(pe.dispose(),pe=null),Tt.stop()};function ie(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=et.autoReset,F=Q.enabled,W=Q.autoUpdate,q=Q.needsUpdate,H=Q.type;it(),et.autoReset=T,Q.enabled=F,Q.autoUpdate=W,Q.needsUpdate=q,Q.type=H}function re(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function oe(T){const F=T.target;F.removeEventListener("dispose",oe),be(F)}function be(T){Me(T),Ue.remove(T)}function Me(T){const F=Ue.get(T).programs;F!==void 0&&(F.forEach(function(W){ge.releaseProgram(W)}),T.isShaderMaterial&&ge.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,W,q,H,le){F===null&&(F=we);const ve=H.isMesh&&H.matrixWorld.determinant()<0,Se=Yc(T,F,W,q,H);_e.setMaterial(q,ve);let Te=W.index,Oe=1;if(q.wireframe===!0){if(Te=ee.getWireframeAttribute(W),Te===void 0)return;Oe=2}const Re=W.drawRange,Le=W.attributes.position;let rt=Re.start*Oe,Ut=(Re.start+Re.count)*Oe;le!==null&&(rt=Math.max(rt,le.start*Oe),Ut=Math.min(Ut,(le.start+le.count)*Oe)),Te!==null?(rt=Math.max(rt,0),Ut=Math.min(Ut,Te.count)):Le!=null&&(rt=Math.max(rt,0),Ut=Math.min(Ut,Le.count));const mt=Ut-rt;if(mt<0||mt===1/0)return;De.setup(H,q,Se,W,Te);let cn,tt=Ae;if(Te!==null&&(cn=te.get(Te),tt=xe,tt.setIndex(cn)),H.isMesh)q.wireframe===!0?(_e.setLineWidth(q.wireframeLinewidth*Ve()),tt.setMode(G.LINES)):tt.setMode(G.TRIANGLES);else if(H.isLine){let ze=q.linewidth;ze===void 0&&(ze=1),_e.setLineWidth(ze*Ve()),H.isLineSegments?tt.setMode(G.LINES):H.isLineLoop?tt.setMode(G.LINE_LOOP):tt.setMode(G.LINE_STRIP)}else H.isPoints?tt.setMode(G.POINTS):H.isSprite&&tt.setMode(G.TRIANGLES);if(H.isBatchedMesh)tt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)tt.renderInstances(rt,mt,H.count);else if(W.isInstancedBufferGeometry){const ze=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ys=Math.min(W.instanceCount,ze);tt.renderInstances(rt,mt,Ys)}else tt.render(rt,mt)};function $e(T,F,W){T.transparent===!0&&T.side===on&&T.forceSinglePass===!1?(T.side=Rt,T.needsUpdate=!0,ts(T,F,W),T.side=Nn,T.needsUpdate=!0,ts(T,F,W),T.side=on):ts(T,F,W)}this.compile=function(T,F,W=null){W===null&&(W=T),m=Ee.get(W),m.init(),v.push(m),W.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),T!==W&&T.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(x._useLegacyLights);const q=new Set;return T.traverse(function(H){const le=H.material;if(le)if(Array.isArray(le))for(let ve=0;ve<le.length;ve++){const Se=le[ve];$e(Se,W,H),q.add(Se)}else $e(le,W,H),q.add(le)}),v.pop(),m=null,q},this.compileAsync=function(T,F,W=null){const q=this.compile(T,F,W);return new Promise(H=>{function le(){if(q.forEach(function(ve){Ue.get(ve).currentProgram.isReady()&&q.delete(ve)}),q.size===0){H(T);return}setTimeout(le,10)}ye.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Ke=null;function pt(T){Ke&&Ke(T)}function bt(){Tt.stop()}function Ze(){Tt.start()}const Tt=new Ac;Tt.setAnimationLoop(pt),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(T){Ke=T,Be.setAnimationLoop(T),T===null?Tt.stop():Tt.start()},Be.addEventListener("sessionstart",bt),Be.addEventListener("sessionend",Ze),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(F),F=Be.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,F,A),m=Ee.get(T,v.length),m.init(),v.push(m),me.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(me),ae=this.localClippingEnabled,Z=Fe.init(this.clippingPlanes,ae),g=de.get(T,f.length),g.init(),f.push(g),en(T,F,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(k,X),this.info.render.frame++,Z===!0&&Fe.beginShadows();const W=m.state.shadowsArray;if(Q.render(W,T,F),Z===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ye.render(g,T),m.setupLights(x._useLegacyLights),F.isArrayCamera){const q=F.cameras;for(let H=0,le=q.length;H<le;H++){const ve=q[H];so(g,T,ve,ve.viewport)}}else so(g,T,F);A!==null&&(C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(x,T,F),De.resetDefaultState(),O=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function en(T,F,W,q){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){q&&Ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(me);const ve=ne.update(T),Se=T.material;Se.visible&&g.push(T,ve,Se,W,Ie.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){const ve=ne.update(T),Se=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ie.copy(T.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ie.copy(ve.boundingSphere.center)),Ie.applyMatrix4(T.matrixWorld).applyMatrix4(me)),Array.isArray(Se)){const Te=ve.groups;for(let Oe=0,Re=Te.length;Oe<Re;Oe++){const Le=Te[Oe],rt=Se[Le.materialIndex];rt&&rt.visible&&g.push(T,ve,rt,W,Ie.z,Le)}}else Se.visible&&g.push(T,ve,Se,W,Ie.z,null)}}const le=T.children;for(let ve=0,Se=le.length;ve<Se;ve++)en(le[ve],F,W,q)}function so(T,F,W,q){const H=T.opaque,le=T.transmissive,ve=T.transparent;m.setupLightsView(W),Z===!0&&Fe.setGlobalState(x.clippingPlanes,W),le.length>0&&qc(H,le,F,W),q&&_e.viewport(w.copy(q)),H.length>0&&es(H,F,W),le.length>0&&es(le,F,W),ve.length>0&&es(ve,F,W),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function qc(T,F,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const le=Ce.isWebGL2;pe===null&&(pe=new Kn(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?ji:Dn,minFilter:Yi,samples:le?4:0})),x.getDrawingBufferSize(Pe),le?pe.setSize(Pe.x,Pe.y):pe.setSize(Vr(Pe.x),Vr(Pe.y));const ve=x.getRenderTarget();x.setRenderTarget(pe),x.getClearColor(N),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const Se=x.toneMapping;x.toneMapping=In,es(T,W,q),C.updateMultisampleRenderTarget(pe),C.updateRenderTargetMipmap(pe);let Te=!1;for(let Oe=0,Re=F.length;Oe<Re;Oe++){const Le=F[Oe],rt=Le.object,Ut=Le.geometry,mt=Le.material,cn=Le.group;if(mt.side===on&&rt.layers.test(q.layers)){const tt=mt.side;mt.side=Rt,mt.needsUpdate=!0,ro(rt,W,q,Ut,mt,cn),mt.side=tt,mt.needsUpdate=!0,Te=!0}}Te===!0&&(C.updateMultisampleRenderTarget(pe),C.updateRenderTargetMipmap(pe)),x.setRenderTarget(ve),x.setClearColor(N,P),x.toneMapping=Se}function es(T,F,W){const q=F.isScene===!0?F.overrideMaterial:null;for(let H=0,le=T.length;H<le;H++){const ve=T[H],Se=ve.object,Te=ve.geometry,Oe=q===null?ve.material:q,Re=ve.group;Se.layers.test(W.layers)&&ro(Se,F,W,Te,Oe,Re)}}function ro(T,F,W,q,H,le){T.onBeforeRender(x,F,W,q,H,le),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(x,F,W,q,T,le),H.transparent===!0&&H.side===on&&H.forceSinglePass===!1?(H.side=Rt,H.needsUpdate=!0,x.renderBufferDirect(W,F,q,H,T,le),H.side=Nn,H.needsUpdate=!0,x.renderBufferDirect(W,F,q,H,T,le),H.side=on):x.renderBufferDirect(W,F,q,H,T,le),T.onAfterRender(x,F,W,q,H,le)}function ts(T,F,W){F.isScene!==!0&&(F=we);const q=Ue.get(T),H=m.state.lights,le=m.state.shadowsArray,ve=H.state.version,Se=ge.getParameters(T,H.state,le,F,W),Te=ge.getProgramCacheKey(Se);let Oe=q.programs;q.environment=T.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(T.isMeshStandardMaterial?V:E).get(T.envMap||q.environment),Oe===void 0&&(T.addEventListener("dispose",oe),Oe=new Map,q.programs=Oe);let Re=Oe.get(Te);if(Re!==void 0){if(q.currentProgram===Re&&q.lightsStateVersion===ve)return ao(T,Se),Re}else Se.uniforms=ge.getUniforms(T),T.onBuild(W,Se,x),T.onBeforeCompile(Se,x),Re=ge.acquireProgram(Se,Te),Oe.set(Te,Re),q.uniforms=Se.uniforms;const Le=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Le.clippingPlanes=Fe.uniform),ao(T,Se),q.needsLights=$c(T),q.lightsStateVersion=ve,q.needsLights&&(Le.ambientLightColor.value=H.state.ambient,Le.lightProbe.value=H.state.probe,Le.directionalLights.value=H.state.directional,Le.directionalLightShadows.value=H.state.directionalShadow,Le.spotLights.value=H.state.spot,Le.spotLightShadows.value=H.state.spotShadow,Le.rectAreaLights.value=H.state.rectArea,Le.ltc_1.value=H.state.rectAreaLTC1,Le.ltc_2.value=H.state.rectAreaLTC2,Le.pointLights.value=H.state.point,Le.pointLightShadows.value=H.state.pointShadow,Le.hemisphereLights.value=H.state.hemi,Le.directionalShadowMap.value=H.state.directionalShadowMap,Le.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Le.spotShadowMap.value=H.state.spotShadowMap,Le.spotLightMatrix.value=H.state.spotLightMatrix,Le.spotLightMap.value=H.state.spotLightMap,Le.pointShadowMap.value=H.state.pointShadowMap,Le.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Re,q.uniformsList=null,Re}function oo(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=Ls.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function ao(T,F){const W=Ue.get(T);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Yc(T,F,W,q,H){F.isScene!==!0&&(F=we),C.resetTextureUnits();const le=F.fog,ve=q.isMeshStandardMaterial?F.environment:null,Se=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Mn,Te=(q.isMeshStandardMaterial?V:E).get(q.envMap||ve),Oe=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Re=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Le=!!W.morphAttributes.position,rt=!!W.morphAttributes.normal,Ut=!!W.morphAttributes.color;let mt=In;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(mt=x.toneMapping);const cn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,tt=cn!==void 0?cn.length:0,ze=Ue.get(q),Ys=m.state.lights;if(Z===!0&&(ae===!0||T!==M)){const kt=T===M&&q.id===O;Fe.setState(q,T,kt)}let st=!1;q.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Ys.state.version||ze.outputColorSpace!==Se||H.isBatchedMesh&&ze.batching===!1||!H.isBatchedMesh&&ze.batching===!0||H.isInstancedMesh&&ze.instancing===!1||!H.isInstancedMesh&&ze.instancing===!0||H.isSkinnedMesh&&ze.skinning===!1||!H.isSkinnedMesh&&ze.skinning===!0||H.isInstancedMesh&&ze.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ze.instancingColor===!1&&H.instanceColor!==null||ze.envMap!==Te||q.fog===!0&&ze.fog!==le||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Fe.numPlanes||ze.numIntersection!==Fe.numIntersection)||ze.vertexAlphas!==Oe||ze.vertexTangents!==Re||ze.morphTargets!==Le||ze.morphNormals!==rt||ze.morphColors!==Ut||ze.toneMapping!==mt||Ce.isWebGL2===!0&&ze.morphTargetsCount!==tt)&&(st=!0):(st=!0,ze.__version=q.version);let Un=ze.currentProgram;st===!0&&(Un=ts(q,F,H));let co=!1,Pi=!1,js=!1;const yt=Un.getUniforms(),Fn=ze.uniforms;if(_e.useProgram(Un.program)&&(co=!0,Pi=!0,js=!0),q.id!==O&&(O=q.id,Pi=!0),co||M!==T){yt.setValue(G,"projectionMatrix",T.projectionMatrix),yt.setValue(G,"viewMatrix",T.matrixWorldInverse);const kt=yt.map.cameraPosition;kt!==void 0&&kt.setValue(G,Ie.setFromMatrixPosition(T.matrixWorld)),Ce.logarithmicDepthBuffer&&yt.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&yt.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Pi=!0,js=!0)}if(H.isSkinnedMesh){yt.setOptional(G,H,"bindMatrix"),yt.setOptional(G,H,"bindMatrixInverse");const kt=H.skeleton;kt&&(Ce.floatVertexTextures?(kt.boneTexture===null&&kt.computeBoneTexture(),yt.setValue(G,"boneTexture",kt.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(yt.setOptional(G,H,"batchingTexture"),yt.setValue(G,"batchingTexture",H._matricesTexture,C));const $s=W.morphAttributes;if(($s.position!==void 0||$s.normal!==void 0||$s.color!==void 0&&Ce.isWebGL2===!0)&&Ge.update(H,W,Un),(Pi||ze.receiveShadow!==H.receiveShadow)&&(ze.receiveShadow=H.receiveShadow,yt.setValue(G,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Fn.envMap.value=Te,Fn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Pi&&(yt.setValue(G,"toneMappingExposure",x.toneMappingExposure),ze.needsLights&&jc(Fn,js),le&&q.fog===!0&&ce.refreshFogUniforms(Fn,le),ce.refreshMaterialUniforms(Fn,q,$,I,pe),Ls.upload(G,oo(ze),Fn,C)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ls.upload(G,oo(ze),Fn,C),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&yt.setValue(G,"center",H.center),yt.setValue(G,"modelViewMatrix",H.modelViewMatrix),yt.setValue(G,"normalMatrix",H.normalMatrix),yt.setValue(G,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const kt=q.uniformsGroups;for(let Ks=0,Kc=kt.length;Ks<Kc;Ks++)if(Ce.isWebGL2){const lo=kt[Ks];qe.update(lo,Un),qe.bind(lo,Un)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Un}function jc(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function $c(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,F,W){Ue.get(T.texture).__webglTexture=F,Ue.get(T.depthTexture).__webglTexture=W;const q=Ue.get(T);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,F){const W=Ue.get(T);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,W=0){A=T,R=F,b=W;let q=!0,H=null,le=!1,ve=!1;if(T){const Te=Ue.get(T);Te.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(G.FRAMEBUFFER,null),q=!1):Te.__webglFramebuffer===void 0?C.setupRenderTarget(T):Te.__hasExternalTextures&&C.rebindTextures(T,Ue.get(T.texture).__webglTexture,Ue.get(T.depthTexture).__webglTexture);const Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ve=!0);const Re=Ue.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Re[F])?H=Re[F][W]:H=Re[F],le=!0):Ce.isWebGL2&&T.samples>0&&C.useMultisampledRTT(T)===!1?H=Ue.get(T).__webglMultisampledFramebuffer:Array.isArray(Re)?H=Re[W]:H=Re,w.copy(T.viewport),U.copy(T.scissor),z=T.scissorTest}else w.copy(K).multiplyScalar($).floor(),U.copy(J).multiplyScalar($).floor(),z=j;if(_e.bindFramebuffer(G.FRAMEBUFFER,H)&&Ce.drawBuffers&&q&&_e.drawBuffers(T,H),_e.viewport(w),_e.scissor(U),_e.setScissorTest(z),le){const Te=Ue.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+F,Te.__webglTexture,W)}else if(ve){const Te=Ue.get(T.texture),Oe=F||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Te.__webglTexture,W||0,Oe)}O=-1},this.readRenderTargetPixels=function(T,F,W,q,H,le,ve){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ue.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){_e.bindFramebuffer(G.FRAMEBUFFER,Se);try{const Te=T.texture,Oe=Te.format,Re=Te.type;if(Oe!==Jt&&fe.convert(Oe)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Re===ji&&(ye.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Re!==Dn&&fe.convert(Re)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===Pn&&(Ce.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-q&&W>=0&&W<=T.height-H&&G.readPixels(F,W,q,H,fe.convert(Oe),fe.convert(Re),le)}finally{const Te=A!==null?Ue.get(A).__webglFramebuffer:null;_e.bindFramebuffer(G.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(T,F,W=0){const q=Math.pow(2,-W),H=Math.floor(F.image.width*q),le=Math.floor(F.image.height*q);C.setTexture2D(F,0),G.copyTexSubImage2D(G.TEXTURE_2D,W,0,0,T.x,T.y,H,le),_e.unbindTexture()},this.copyTextureToTexture=function(T,F,W,q=0){const H=F.image.width,le=F.image.height,ve=fe.convert(W.format),Se=fe.convert(W.type);C.setTexture2D(W,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment),F.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,q,T.x,T.y,H,le,ve,Se,F.image.data):F.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,q,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,ve,F.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,q,T.x,T.y,ve,Se,F.image),q===0&&W.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(T,F,W,q,H=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=T.max.x-T.min.x+1,ve=T.max.y-T.min.y+1,Se=T.max.z-T.min.z+1,Te=fe.convert(q.format),Oe=fe.convert(q.type);let Re;if(q.isData3DTexture)C.setTexture3D(q,0),Re=G.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)C.setTexture2DArray(q,0),Re=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const Le=G.getParameter(G.UNPACK_ROW_LENGTH),rt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ut=G.getParameter(G.UNPACK_SKIP_PIXELS),mt=G.getParameter(G.UNPACK_SKIP_ROWS),cn=G.getParameter(G.UNPACK_SKIP_IMAGES),tt=W.isCompressedTexture?W.mipmaps[H]:W.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,tt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,tt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,T.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,T.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,T.min.z),W.isDataTexture||W.isData3DTexture?G.texSubImage3D(Re,H,F.x,F.y,F.z,le,ve,Se,Te,Oe,tt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Re,H,F.x,F.y,F.z,le,ve,Se,Te,tt.data)):G.texSubImage3D(Re,H,F.x,F.y,F.z,le,ve,Se,Te,Oe,tt),G.pixelStorei(G.UNPACK_ROW_LENGTH,Le),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,rt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ut),G.pixelStorei(G.UNPACK_SKIP_ROWS,mt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,cn),H===0&&q.generateMipmaps&&G.generateMipmap(Re),_e.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),_e.unbindTexture()},this.resetState=function(){R=0,b=0,A=null,_e.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===$r?"display-p3":"srgb",t.unpackColorSpace=je.workingColorSpace===Hs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===gt?$n:dc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===$n?gt:Mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class tm extends Uc{}tm.prototype.isWebGL1Renderer=!0;class Jr{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=n}clone(){return new Jr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class nm extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Vi extends Ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pa=new lt,Xr=new xc,ws=new Vs,bs=new B;class Is extends xt{constructor(e=new Pt,t=new Vi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(i),ws.radius+=s,e.ray.intersectsSphere(ws)===!1)return;Pa.copy(i).invert(),Xr.copy(e.ray).applyMatrix4(Pa);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=n.index,o=n.attributes.position;if(h!==null){const l=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let _=l,g=d;_<g;_++){const m=h.getX(_);bs.fromBufferAttribute(o,m),La(bs,m,u,i,e,t,this)}}else{const l=Math.max(0,a.start),d=Math.min(o.count,a.start+a.count);for(let _=l,g=d;_<g;_++)bs.fromBufferAttribute(o,_),La(bs,_,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function La(r,e,t,n,i,s,a){const c=Xr.distanceSqToPoint(r);if(c<t){const u=new B;Xr.closestPointToPoint(r,u),u.applyMatrix4(n);const h=i.ray.origin.distanceTo(u);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(c),point:u,index:e,face:null,object:a})}}class Cr extends Nt{constructor(e,t,n,i,s,a,c,u,h){super(e,t,n,i,s,a,c,u,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $i extends Pt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,c=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:c,thetaLength:u};const h=this;i=Math.floor(i),s=Math.floor(s);const p=[],o=[],l=[],d=[];let _=0;const g=[],m=n/2;let f=0;v(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(p),this.setAttribute("position",new Et(o,3)),this.setAttribute("normal",new Et(l,3)),this.setAttribute("uv",new Et(d,2));function v(){const S=new B,R=new B;let b=0;const A=(t-e)/n;for(let O=0;O<=s;O++){const M=[],w=O/s,U=w*(t-e)+e;for(let z=0;z<=i;z++){const N=z/i,P=N*u+c,L=Math.sin(P),I=Math.cos(P);R.x=U*L,R.y=-w*n+m,R.z=U*I,o.push(R.x,R.y,R.z),S.set(L,A,I).normalize(),l.push(S.x,S.y,S.z),d.push(N,1-w),M.push(_++)}g.push(M)}for(let O=0;O<i;O++)for(let M=0;M<s;M++){const w=g[M][O],U=g[M+1][O],z=g[M+1][O+1],N=g[M][O+1];p.push(w,U,N),p.push(U,z,N),b+=6}h.addGroup(f,b,0),f+=b}function x(S){const R=_,b=new We,A=new B;let O=0;const M=S===!0?e:t,w=S===!0?1:-1;for(let z=1;z<=i;z++)o.push(0,m*w,0),l.push(0,w,0),d.push(.5,.5),_++;const U=_;for(let z=0;z<=i;z++){const P=z/i*u+c,L=Math.cos(P),I=Math.sin(P);A.x=M*I,A.y=m*w,A.z=M*L,o.push(A.x,A.y,A.z),l.push(0,w,0),b.x=L*.5+.5,b.y=I*.5*w+.5,d.push(b.x,b.y),_++}for(let z=0;z<i;z++){const N=R+z,P=U+z;S===!0?p.push(P,P+1,N):p.push(P+1,P,N),O+=3}h.addGroup(f,O,S===!0?1:2),f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qr extends Pt{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const c=[],u=[],h=[],p=[];let o=e;const l=(t-e)/i,d=new B,_=new We;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const f=s+m/n*a;d.x=o*Math.cos(f),d.y=o*Math.sin(f),u.push(d.x,d.y,d.z),h.push(0,0,1),_.x=(d.x/t+1)/2,_.y=(d.y/t+1)/2,p.push(_.x,_.y)}o+=l}for(let g=0;g<i;g++){const m=g*(n+1);for(let f=0;f<n;f++){const v=f+m,x=v,S=v+n+1,R=v+n+2,b=v+1;c.push(x,S,b),c.push(S,R,b)}}this.setIndex(c),this.setAttribute("position",new Et(u,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Wi extends Pt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(a+c,Math.PI);let h=0;const p=[],o=new B,l=new B,d=[],_=[],g=[],m=[];for(let f=0;f<=n;f++){const v=[],x=f/n;let S=0;f===0&&a===0?S=.5/t:f===n&&u===Math.PI&&(S=-.5/t);for(let R=0;R<=t;R++){const b=R/t;o.x=-e*Math.cos(i+b*s)*Math.sin(a+x*c),o.y=e*Math.cos(a+x*c),o.z=e*Math.sin(i+b*s)*Math.sin(a+x*c),_.push(o.x,o.y,o.z),l.copy(o).normalize(),g.push(l.x,l.y,l.z),m.push(b+S,1-x),v.push(h++)}p.push(v)}for(let f=0;f<n;f++)for(let v=0;v<t;v++){const x=p[f][v+1],S=p[f][v],R=p[f+1][v],b=p[f+1][v+1];(f!==0||a>0)&&d.push(x,S,b),(f!==n-1||u<Math.PI)&&d.push(S,R,b)}this.setIndex(d),this.setAttribute("position",new Et(_,3)),this.setAttribute("normal",new Et(g,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bt extends Ci{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Yr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class eo extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Rr=new lt,Ia=new B,Da=new B;class im{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kr,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ia.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ia),Da.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Da),t.updateMatrixWorld(),Rr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sm extends im{constructor(){super(new Cc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fc extends eo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new sm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rm extends eo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class om{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Na(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Na();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Na(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qr);class am{constructor(e,t){this.raceStartTime=0,this.currentLap=1,this.totalLaps=3,this.racePosition=1,this.isCountdownActive=!1,this.raceTime=0,this.isRacing=!1,this.gameData=e,this.audioManager=t}async setupRace(e){this.totalLaps=e.laps,this.currentLap=1,this.racePosition=1,this.raceTime=0,this.updateRaceUI()}async startCountdown(){this.isCountdownActive=!0;const e=["3","2","1","GO!"];for(let t=0;t<e.length;t++)await this.showCountdownStep(e[t]),this.audioManager.playCountdownBeep(),await this.delay(1e3);this.isCountdownActive=!1,this.raceStartTime=Date.now()}async showCountdownStep(e){let t=document.getElementById("countdown-overlay");t||(t=document.createElement("div"),t.id="countdown-overlay",t.className="countdown-overlay",document.body.appendChild(t)),t.textContent=e,t.style.display="flex",t.style.transform="scale(0.5)",t.style.opacity="0",requestAnimationFrame(()=>{t.style.transform="scale(1)",t.style.opacity="1"}),e==="GO!"&&setTimeout(()=>{t.style.display="none"},1e3)}update(e){this.isCountdownActive||(this.raceTime+=e,this.updateRaceUI(),this.checkLapCompletion(),this.checkRaceCompletion())}updateRaceUI(){const e=document.getElementById("race-time");e&&(e.textContent=this.formatTime(this.raceTime));const t=document.getElementById("current-lap"),n=document.getElementById("total-laps");t&&(t.textContent=this.currentLap.toString()),n&&(n.textContent=this.totalLaps.toString());const i=document.getElementById("race-position");i&&(i.textContent=this.racePosition.toString())}formatTime(e){const t=Math.floor(e/60),n=Math.floor(e%60),i=Math.floor(e%1*1e3);return`${t.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}.${i.toString().padStart(3,"0")}`}checkLapCompletion(){Math.floor(this.raceTime/60)+1>this.currentLap&&this.currentLap<this.totalLaps&&(this.currentLap++,this.audioManager.playLapComplete())}checkRaceCompletion(){this.currentLap>this.totalLaps&&this.completeRace()}completeRace(){const e={position:this.racePosition,bestLap:this.formatTime(45.123),creditsEarned:this.calculateCreditsEarned(),starsEarned:this.calculateStarsEarned()};this.gameData.addCredits(e.creditsEarned),this.showRaceResults(e),this.endRace()}calculateCreditsEarned(){return 1e3+(9-this.racePosition)*500}calculateStarsEarned(){return this.racePosition===1?3:this.racePosition<=3?2:1}showRaceResults(e){const t=document.getElementById("race-results");if(t){t.classList.remove("hidden");const n=document.getElementById("final-position"),i=document.getElementById("best-lap"),s=document.getElementById("credits-earned"),a=document.getElementById("stars-earned");n&&(n.textContent=this.getPositionText(e.position)),i&&(i.textContent=e.bestLap),s&&(s.textContent=`+${e.creditsEarned}`),a&&a.querySelectorAll(".star").forEach((u,h)=>{h<e.starsEarned?u.classList.add("earned"):u.classList.remove("earned")})}}getPositionText(e){const n=["st","nd","rd"][e-1]||"th";return`${e}${n}`}endRace(){this.isRacing=!1,this.audioManager.stopRaceMusic()}restart(){this.currentLap=1,this.raceTime=0,this.raceStartTime=Date.now(),this.updateRaceUI()}delay(e){return new Promise(t=>setTimeout(t,e))}}class Qt{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new y);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new y);const n=this.elements,i=e.x,s=e.y,a=e.z;return t.x=n[0]*i+n[1]*s+n[2]*a,t.y=n[3]*i+n[4]*s+n[5]*a,t.z=n[6]*i+n[7]*s+n[8]*a,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Qt);const n=this.elements,i=e.elements,s=t.elements,a=n[0],c=n[1],u=n[2],h=n[3],p=n[4],o=n[5],l=n[6],d=n[7],_=n[8],g=i[0],m=i[1],f=i[2],v=i[3],x=i[4],S=i[5],R=i[6],b=i[7],A=i[8];return s[0]=a*g+c*v+u*R,s[1]=a*m+c*x+u*b,s[2]=a*f+c*S+u*A,s[3]=h*g+p*v+o*R,s[4]=h*m+p*x+o*b,s[5]=h*f+p*S+o*A,s[6]=l*g+d*v+_*R,s[7]=l*m+d*x+_*b,s[8]=l*f+d*S+_*A,t}scale(e,t){t===void 0&&(t=new Qt);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new y);const n=3,i=4,s=[];let a,c;for(a=0;a<n*i;a++)s.push(0);for(a=0;a<3;a++)for(c=0;c<3;c++)s[a+i*c]=this.elements[a+3*c];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let u=3;const h=u;let p;const o=4;let l;do{if(a=h-u,s[a+i*a]===0){for(c=a+1;c<h;c++)if(s[a+i*c]!==0){p=o;do l=o-p,s[l+i*a]+=s[l+i*c];while(--p);break}}if(s[a+i*a]!==0)for(c=a+1;c<h;c++){const d=s[a+i*c]/s[a+i*a];p=o;do l=o-p,s[l+i*c]=l<=a?0:s[l+i*c]-s[l+i*a]*d;while(--p)}}while(--u);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new Qt);const t=3,n=6,i=cm;let s,a;for(s=0;s<3;s++)for(a=0;a<3;a++)i[s+n*a]=this.elements[s+3*a];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let c=3;const u=c;let h;const p=n;let o;do{if(s=u-c,i[s+n*s]===0){for(a=s+1;a<u;a++)if(i[s+n*a]!==0){h=p;do o=p-h,i[o+n*s]+=i[o+n*a];while(--h);break}}if(i[s+n*s]!==0)for(a=s+1;a<u;a++){const l=i[s+n*a]/i[s+n*s];h=p;do o=p-h,i[o+n*a]=o<=s?0:i[o+n*a]-i[o+n*s]*l;while(--h)}}while(--c);s=2;do{a=s-1;do{const l=i[s+n*a]/i[s+n*s];h=n;do o=n-h,i[o+n*a]=i[o+n*a]-i[o+n*s]*l;while(--h)}while(a--)}while(--s);s=2;do{const l=1/i[s+n*s];h=n;do o=n-h,i[o+n*s]=i[o+n*s]*l;while(--h)}while(s--);s=2;do{a=2;do{if(o=i[t+a+n*s],isNaN(o)||o===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,a,o)}while(a--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,a=t+t,c=n+n,u=i+i,h=t*a,p=t*c,o=t*u,l=n*c,d=n*u,_=i*u,g=s*a,m=s*c,f=s*u,v=this.elements;return v[3*0+0]=1-(l+_),v[3*0+1]=p-f,v[3*0+2]=o+m,v[3*1+0]=p+f,v[3*1+1]=1-(h+_),v[3*1+2]=d-g,v[3*2+0]=o-m,v[3*2+1]=d+g,v[3*2+2]=1-(h+l),this}transpose(e){e===void 0&&(e=new Qt);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const cm=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class y{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new y);const n=e.x,i=e.y,s=e.z,a=this.x,c=this.y,u=this.z;return t.x=c*s-u*i,t.y=u*n-a*s,t.z=a*i-c*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new y(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new y(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Qt([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new y);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,c=e.z;return Math.sqrt((s-t)*(s-t)+(a-n)*(a-n)+(c-i)*(c-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,c=e.z;return(s-t)*(s-t)+(a-n)*(a-n)+(c-i)*(c-i)}scale(e,t){t===void 0&&(t=new y);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new y),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new y),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new y),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=lm,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const a=um;Math.abs(i.x)<.9?(a.set(1,0,0),i.cross(a,e)):(a.set(0,1,0),i.cross(a,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,a=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=a+(e.z-a)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Ua),Ua.almostEquals(e,t)}clone(){return new y(this.x,this.y,this.z)}}y.ZERO=new y(0,0,0);y.UNIT_X=new y(1,0,0);y.UNIT_Y=new y(0,1,0);y.UNIT_Z=new y(0,0,1);const lm=new y,um=new y,Ua=new y;class zt{constructor(e){e===void 0&&(e={}),this.lowerBound=new y,this.upperBound=new y,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,a=this.upperBound,c=n;s.copy(e[0]),c&&c.vmult(s,s),a.copy(s);for(let u=1;u<e.length;u++){let h=e[u];c&&(c.vmult(h,Fa),h=Fa),h.x>a.x&&(a.x=h.x),h.x<s.x&&(s.x=h.x),h.y>a.y&&(a.y=h.y),h.y<s.y&&(s.y=h.y),h.z>a.z&&(a.z=h.z),h.z<s.z&&(s.z=h.z)}return t&&(t.vadd(s,s),t.vadd(a,a)),i&&(s.x-=i,s.y-=i,s.z-=i,a.x+=i,a.y+=i,a.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new zt().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,a=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,c=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,u=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return a&&c&&u}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,a,c,u){const h=this.lowerBound,p=this.upperBound;e.copy(h),t.set(p.x,h.y,h.z),n.set(p.x,p.y,h.z),i.set(h.x,p.y,p.z),s.set(p.x,h.y,p.z),a.set(h.x,p.y,h.z),c.set(h.x,h.y,p.z),u.copy(p)}toLocalFrame(e,t){const n=Oa,i=n[0],s=n[1],a=n[2],c=n[3],u=n[4],h=n[5],p=n[6],o=n[7];this.getCorners(i,s,a,c,u,h,p,o);for(let l=0;l!==8;l++){const d=n[l];e.pointToLocal(d,d)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=Oa,i=n[0],s=n[1],a=n[2],c=n[3],u=n[4],h=n[5],p=n[6],o=n[7];this.getCorners(i,s,a,c,u,h,p,o);for(let l=0;l!==8;l++){const d=n[l];e.pointToWorld(d,d)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,a=1/t.z,c=(this.lowerBound.x-n.x)*i,u=(this.upperBound.x-n.x)*i,h=(this.lowerBound.y-n.y)*s,p=(this.upperBound.y-n.y)*s,o=(this.lowerBound.z-n.z)*a,l=(this.upperBound.z-n.z)*a,d=Math.max(Math.max(Math.min(c,u),Math.min(h,p)),Math.min(o,l)),_=Math.min(Math.min(Math.max(c,u),Math.max(h,p)),Math.max(o,l));return!(_<0||d>_)}}const Fa=new y,Oa=[new y,new y,new y,new y,new y,new y,new y,new y];class Ba{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const a=s;s=i,i=a}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class Oc{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class ct{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new y),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=hm,i=dm;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new ct);const n=this.x,i=this.y,s=this.z,a=this.w,c=e.x,u=e.y,h=e.z,p=e.w;return t.x=n*p+a*c+i*h-s*u,t.y=i*p+a*u+s*c-n*h,t.z=s*p+a*h+n*u-i*c,t.w=a*p-n*c-i*u-s*h,t}inverse(e){e===void 0&&(e=new ct);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const a=1/(t*t+n*n+i*i+s*s);return e.x*=a,e.y*=a,e.z*=a,e.w*=a,e}conjugate(e){return e===void 0&&(e=new ct),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new y);const n=e.x,i=e.y,s=e.z,a=this.x,c=this.y,u=this.z,h=this.w,p=h*n+c*s-u*i,o=h*i+u*n-a*s,l=h*s+a*i-c*n,d=-a*n-c*i-u*s;return t.x=p*h+d*-a+o*-u-l*-c,t.y=o*h+d*-c+l*-a-p*-u,t.z=l*h+d*-u+p*-c-o*-a,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const a=this.x,c=this.y,u=this.z,h=this.w;switch(t){case"YZX":const p=a*c+u*h;if(p>.499&&(n=2*Math.atan2(a,h),i=Math.PI/2,s=0),p<-.499&&(n=-2*Math.atan2(a,h),i=-Math.PI/2,s=0),n===void 0){const o=a*a,l=c*c,d=u*u;n=Math.atan2(2*c*h-2*a*u,1-2*l-2*d),i=Math.asin(2*p),s=Math.atan2(2*a*h-2*c*u,1-2*o-2*d)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),a=Math.cos(t/2),c=Math.cos(n/2),u=Math.sin(e/2),h=Math.sin(t/2),p=Math.sin(n/2);return i==="XYZ"?(this.x=u*a*c+s*h*p,this.y=s*h*c-u*a*p,this.z=s*a*p+u*h*c,this.w=s*a*c-u*h*p):i==="YXZ"?(this.x=u*a*c+s*h*p,this.y=s*h*c-u*a*p,this.z=s*a*p-u*h*c,this.w=s*a*c+u*h*p):i==="ZXY"?(this.x=u*a*c-s*h*p,this.y=s*h*c+u*a*p,this.z=s*a*p+u*h*c,this.w=s*a*c-u*h*p):i==="ZYX"?(this.x=u*a*c-s*h*p,this.y=s*h*c+u*a*p,this.z=s*a*p-u*h*c,this.w=s*a*c+u*h*p):i==="YZX"?(this.x=u*a*c+s*h*p,this.y=s*h*c+u*a*p,this.z=s*a*p-u*h*c,this.w=s*a*c-u*h*p):i==="XZY"&&(this.x=u*a*c-s*h*p,this.y=s*h*c-u*a*p,this.z=s*a*p+u*h*c,this.w=s*a*c+u*h*p),this}clone(){return new ct(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new ct);const i=this.x,s=this.y,a=this.z,c=this.w;let u=e.x,h=e.y,p=e.z,o=e.w,l,d,_,g,m;return d=i*u+s*h+a*p+c*o,d<0&&(d=-d,u=-u,h=-h,p=-p,o=-o),1-d>1e-6?(l=Math.acos(d),_=Math.sin(l),g=Math.sin((1-t)*l)/_,m=Math.sin(t*l)/_):(g=1-t,m=t),n.x=g*i+m*u,n.y=g*s+m*h,n.z=g*a+m*p,n.w=g*c+m*o,n}integrate(e,t,n,i){i===void 0&&(i=new ct);const s=e.x*n.x,a=e.y*n.y,c=e.z*n.z,u=this.x,h=this.y,p=this.z,o=this.w,l=t*.5;return i.x+=l*(s*o+a*p-c*h),i.y+=l*(a*o+c*u-s*p),i.z+=l*(c*o+s*h-a*u),i.w+=l*(-s*u-a*h-c*p),i}}const hm=new y,dm=new y,fm={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class ue{constructor(e){e===void 0&&(e={}),this.id=ue.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}ue.idCounter=0;ue.types=fm;class Xe{constructor(e){e===void 0&&(e={}),this.position=new y,this.quaternion=new ct,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Xe.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Xe.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new y),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new y),n.vsub(e,i),t.conjugate(za),za.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new y),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new y),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new y),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const za=new ct;class Xi extends ue{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:a}=e;super({type:ue.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),a?this.boundingSphereRadius=a:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new y;for(let s=0;s!==e.length;s++){const a=e[s],c=a.length;for(let u=0;u!==c;u++){const h=(u+1)%c;t[a[u]].vsub(t[a[h]],i),i.normalize();let p=!1;for(let o=0;o!==n.length;o++)if(n[o].almostEquals(i)||n[o].almostEquals(i)){p=!0;break}p||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new y;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],a=this.vertices[n[2]];Xi.computeNormal(i,s,a,t)}static computeNormal(e,t,n,i){const s=new y,a=new y;t.vsub(e,a),n.vsub(t,s),s.cross(a,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,a,c,u,h){const p=new y;let o=-1,l=-Number.MAX_VALUE;for(let _=0;_<n.faces.length;_++){p.copy(n.faceNormals[_]),s.vmult(p,p);const g=p.dot(a);g>l&&(l=g,o=_)}const d=[];for(let _=0;_<n.faces[o].length;_++){const g=n.vertices[n.faces[o][_]],m=new y;m.copy(g),s.vmult(m,m),i.vadd(m,m),d.push(m)}o>=0&&this.clipFaceAgainstHull(a,e,t,d,c,u,h)}findSeparatingAxis(e,t,n,i,s,a,c,u){const h=new y,p=new y,o=new y,l=new y,d=new y,_=new y;let g=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let f=0;f!==m.uniqueAxes.length;f++){n.vmult(m.uniqueAxes[f],h);const v=m.testSepAxis(h,e,t,n,i,s);if(v===!1)return!1;v<g&&(g=v,a.copy(h))}else{const f=c?c.length:m.faces.length;for(let v=0;v<f;v++){const x=c?c[v]:v;h.copy(m.faceNormals[x]),n.vmult(h,h);const S=m.testSepAxis(h,e,t,n,i,s);if(S===!1)return!1;S<g&&(g=S,a.copy(h))}}if(e.uniqueAxes)for(let f=0;f!==e.uniqueAxes.length;f++){s.vmult(e.uniqueAxes[f],p);const v=m.testSepAxis(p,e,t,n,i,s);if(v===!1)return!1;v<g&&(g=v,a.copy(p))}else{const f=u?u.length:e.faces.length;for(let v=0;v<f;v++){const x=u?u[v]:v;p.copy(e.faceNormals[x]),s.vmult(p,p);const S=m.testSepAxis(p,e,t,n,i,s);if(S===!1)return!1;S<g&&(g=S,a.copy(p))}}for(let f=0;f!==m.uniqueEdges.length;f++){n.vmult(m.uniqueEdges[f],l);for(let v=0;v!==e.uniqueEdges.length;v++)if(s.vmult(e.uniqueEdges[v],d),l.cross(d,_),!_.almostZero()){_.normalize();const x=m.testSepAxis(_,e,t,n,i,s);if(x===!1)return!1;x<g&&(g=x,a.copy(_))}}return i.vsub(t,o),o.dot(a)>0&&a.negate(a),!0}testSepAxis(e,t,n,i,s,a){const c=this;Xi.project(c,e,n,i,Pr),Xi.project(t,e,s,a,Lr);const u=Pr[0],h=Pr[1],p=Lr[0],o=Lr[1];if(u<o||p<h)return!1;const l=u-o,d=p-h;return l<d?l:d}calculateLocalInertia(e,t){const n=new y,i=new y;this.computeLocalAABB(i,n);const s=n.x-i.x,a=n.y-i.y,c=n.z-i.z;t.x=1/12*e*(2*a*2*a+2*c*2*c),t.y=1/12*e*(2*s*2*s+2*c*2*c),t.z=1/12*e*(2*a*2*a+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,a,c){const u=new y,h=new y,p=new y,o=new y,l=new y,d=new y,_=new y,g=new y,m=this,f=[],v=i,x=f;let S=-1,R=Number.MAX_VALUE;for(let w=0;w<m.faces.length;w++){u.copy(m.faceNormals[w]),n.vmult(u,u);const U=u.dot(e);U<R&&(R=U,S=w)}if(S<0)return;const b=m.faces[S];b.connectedFaces=[];for(let w=0;w<m.faces.length;w++)for(let U=0;U<m.faces[w].length;U++)b.indexOf(m.faces[w][U])!==-1&&w!==S&&b.connectedFaces.indexOf(w)===-1&&b.connectedFaces.push(w);const A=b.length;for(let w=0;w<A;w++){const U=m.vertices[b[w]],z=m.vertices[b[(w+1)%A]];U.vsub(z,h),p.copy(h),n.vmult(p,p),t.vadd(p,p),o.copy(this.faceNormals[S]),n.vmult(o,o),t.vadd(o,o),p.cross(o,l),l.negate(l),d.copy(U),n.vmult(d,d),t.vadd(d,d);const N=b.connectedFaces[w];_.copy(this.faceNormals[N]);const P=this.getPlaneConstantOfFace(N);g.copy(_),n.vmult(g,g);const L=P-g.dot(t);for(this.clipFaceAgainstPlane(v,x,g,L);v.length;)v.shift();for(;x.length;)v.push(x.shift())}_.copy(this.faceNormals[S]);const O=this.getPlaneConstantOfFace(S);g.copy(_),n.vmult(g,g);const M=O-g.dot(t);for(let w=0;w<v.length;w++){let U=g.dot(v[w])+M;if(U<=s&&(console.log(`clamped: depth=${U} to minDist=${s}`),U=s),U<=a){const z=v[w];if(U<=1e-6){const N={point:z,normal:g,depth:U};c.push(N)}}}}clipFaceAgainstPlane(e,t,n,i){let s,a;const c=e.length;if(c<2)return t;let u=e[e.length-1],h=e[0];s=n.dot(u)+i;for(let p=0;p<c;p++){if(h=e[p],a=n.dot(h)+i,s<0)if(a<0){const o=new y;o.copy(h),t.push(o)}else{const o=new y;u.lerp(h,s/(s-a),o),t.push(o)}else if(a<0){const o=new y;u.lerp(h,s/(s-a),o),t.push(o),t.push(h)}u=h,s=a}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new y);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new y);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let a,c,u,h,p,o,l=new y;for(let d=0;d<s.length;d++){l.copy(s[d]),t.vmult(l,l),e.vadd(l,l);const _=l;(a===void 0||_.x<a)&&(a=_.x),(h===void 0||_.x>h)&&(h=_.x),(c===void 0||_.y<c)&&(c=_.y),(p===void 0||_.y>p)&&(p=_.y),(u===void 0||_.z<u)&&(u=_.z),(o===void 0||_.z>o)&&(o=_.z)}n.set(a,c,u),i.set(h,p,o)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new y);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const a=i[s];t.vmult(a,a)}for(let s=0;s<this.faceNormals.length;s++){const a=this.faceNormals[s];t.vmult(a,a)}}if(e)for(let s=0;s<n;s++){const a=i[s];a.vadd(e,a)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=new y;this.getAveragePointLocal(s);for(let a=0;a<this.faces.length;a++){let c=i[a];const u=t[n[a][0]],h=new y;e.vsub(u,h);const p=c.dot(h),o=new y;s.vsub(u,o);const l=c.dot(o);if(p<0&&l>0||p>0&&l<0)return!1}return-1}static project(e,t,n,i,s){const a=e.vertices.length,c=pm;let u=0,h=0;const p=mm,o=e.vertices;p.setZero(),Xe.vectorToLocalFrame(n,i,t,c),Xe.pointToLocalFrame(n,i,p,p);const l=p.dot(c);h=u=o[0].dot(c);for(let d=1;d<a;d++){const _=o[d].dot(c);_>u&&(u=_),_<h&&(h=_)}if(h-=l,u-=l,h>u){const d=h;h=u,u=d}s[0]=u,s[1]=h}}const Pr=[],Lr=[];new y;const pm=new y,mm=new y;class qs extends ue{constructor(e){super({type:ue.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=y,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],a=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],c=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],u=new Xi({vertices:s,faces:a,axes:c});this.convexPolyhedronRepresentation=u,u.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new y),qs.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let a=0;a<s.length;a++)An.set(s[a][0],s[a][1],s[a][2]),t.vmult(An,An),e.vadd(An,An),n(An.x,An.y,An.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;tn[0].set(s.x,s.y,s.z),tn[1].set(-s.x,s.y,s.z),tn[2].set(-s.x,-s.y,s.z),tn[3].set(-s.x,-s.y,-s.z),tn[4].set(s.x,-s.y,-s.z),tn[5].set(s.x,s.y,-s.z),tn[6].set(-s.x,s.y,-s.z),tn[7].set(s.x,-s.y,s.z);const a=tn[0];t.vmult(a,a),e.vadd(a,a),i.copy(a),n.copy(a);for(let c=1;c<8;c++){const u=tn[c];t.vmult(u,u),e.vadd(u,u);const h=u.x,p=u.y,o=u.z;h>i.x&&(i.x=h),p>i.y&&(i.y=p),o>i.z&&(i.z=o),h<n.x&&(n.x=h),p<n.y&&(n.y=p),o<n.z&&(n.z=o)}}}const An=new y,tn=[new y,new y,new y,new y,new y,new y,new y,new y],to={DYNAMIC:1,STATIC:2,KINEMATIC:4},no={AWAKE:0,SLEEPY:1,SLEEPING:2};class he extends Oc{constructor(e){e===void 0&&(e={}),super(),this.id=he.idCounter++,this.index=-1,this.world=null,this.vlambda=new y,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new y,this.previousPosition=new y,this.interpolatedPosition=new y,this.initPosition=new y,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new y,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new y,this.force=new y;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?he.STATIC:he.DYNAMIC,typeof e.type==typeof he.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=he.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new y,this.quaternion=new ct,this.initQuaternion=new ct,this.previousQuaternion=new ct,this.interpolatedQuaternion=new ct,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new y,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new y,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new y,this.invInertia=new y,this.invInertiaWorld=new Qt,this.invMassSolve=0,this.invInertiaSolve=new y,this.invInertiaWorldSolve=new Qt,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new y(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new y(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new zt,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new y,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=he.AWAKE,this.wakeUpAfterNarrowphase=!1,e===he.SLEEPING&&this.dispatchEvent(he.wakeupEvent)}sleep(){this.sleepState=he.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===he.AWAKE&&n<i?(this.sleepState=he.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(he.sleepyEvent)):t===he.SLEEPY&&n>i?this.wakeUp():t===he.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(he.sleepEvent))}}updateSolveMassProperties(){this.sleepState===he.SLEEPING||this.type===he.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new y),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new y),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new y),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new y),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new y,s=new ct;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const a=e[s];a.updateBoundingSphereRadius();const c=t[s].length(),u=a.boundingSphereRadius;c+u>i&&(i=c+u)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=_m,a=gm,c=this.quaternion,u=this.aabb,h=vm;for(let p=0;p!==i;p++){const o=e[p];c.vmult(t[p],s),s.vadd(this.position,s),c.mult(n[p],a),o.calculateWorldAABB(s,a,h.lowerBound,h.upperBound),p===0?u.copy(h):u.extend(h)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=xm,i=ym;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new y),this.type!==he.DYNAMIC)return;this.sleepState===he.SLEEPING&&this.wakeUp();const n=Mm;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new y),this.type!==he.DYNAMIC)return;const n=Sm,i=Em;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===he.DYNAMIC&&(this.sleepState===he.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new y),this.type!==he.DYNAMIC)return;this.sleepState===he.SLEEPING&&this.wakeUp();const n=t,i=wm;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=bm;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new y),this.type!==he.DYNAMIC)return;const n=Tm,i=Am;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=Cm;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),qs.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new y;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===he.DYNAMIC||this.type===he.KINEMATIC)||this.sleepState===he.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,a=this.position,c=this.force,u=this.torque,h=this.quaternion,p=this.invMass,o=this.invInertiaWorld,l=this.linearFactor,d=p*e;i.x+=c.x*d*l.x,i.y+=c.y*d*l.y,i.z+=c.z*d*l.z;const _=o.elements,g=this.angularFactor,m=u.x*g.x,f=u.y*g.y,v=u.z*g.z;s.x+=e*(_[0]*m+_[1]*f+_[2]*v),s.y+=e*(_[3]*m+_[4]*f+_[5]*v),s.z+=e*(_[6]*m+_[7]*f+_[8]*v),a.x+=i.x*e,a.y+=i.y*e,a.z+=i.z*e,h.integrate(this.angularVelocity,e,this.angularFactor,h),t&&(n?h.normalizeFast():h.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}he.idCounter=0;he.COLLIDE_EVENT_NAME="collide";he.DYNAMIC=to.DYNAMIC;he.STATIC=to.STATIC;he.KINEMATIC=to.KINEMATIC;he.AWAKE=no.AWAKE;he.SLEEPY=no.SLEEPY;he.SLEEPING=no.SLEEPING;he.wakeupEvent={type:"wakeup"};he.sleepyEvent={type:"sleepy"};he.sleepEvent={type:"sleep"};const _m=new y,gm=new ct,vm=new zt,xm=new Qt,ym=new Qt;new Qt;const Mm=new y,Sm=new y,Em=new y,wm=new y,bm=new y,Tm=new y,Am=new y,Cm=new y;class Rm{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&he.STATIC||e.sleepState===he.SLEEPING)&&(t.type&he.STATIC||t.sleepState===he.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=Pm;t.position.vsub(e.position,s);const a=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<a&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=Lm,i=Im,s=Dm,a=e.length;for(let c=0;c!==a;c++)i[c]=e[c],s[c]=t[c];e.length=0,t.length=0;for(let c=0;c!==a;c++){const u=i[c].id,h=s[c].id,p=u<h?`${u},${h}`:`${h},${u}`;n[p]=c,n.keys.push(p)}for(let c=0;c!==n.keys.length;c++){const u=n.keys.pop(),h=n[u];e.push(i[h]),t.push(s[h]),delete n[u]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new y;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Pm=new y;new y;new ct;new y;const Lm={keys:[]},Im=[],Dm=[];new y;new y;new y;class Bc extends Rm{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let a,c;for(let u=0;u!==s;u++)for(let h=0;h!==u;h++)a=i[u],c=i[h],this.needBroadphaseCollision(a,c)&&this.intersectionTest(a,c,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class ks{constructor(){this.rayFromWorld=new y,this.rayToWorld=new y,this.hitNormalWorld=new y,this.hitPointWorld=new y,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,a,c){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=a,this.distance=c}}let zc,kc,Gc,Hc,Vc,Wc,Xc;const io={CLOSEST:1,ANY:2,ALL:4};zc=ue.types.SPHERE;kc=ue.types.PLANE;Gc=ue.types.BOX;Hc=ue.types.CYLINDER;Vc=ue.types.CONVEXPOLYHEDRON;Wc=ue.types.HEIGHTFIELD;Xc=ue.types.TRIMESH;class at{get[zc](){return this._intersectSphere}get[kc](){return this._intersectPlane}get[Gc](){return this._intersectBox}get[Hc](){return this._intersectConvex}get[Vc](){return this._intersectConvex}get[Wc](){return this._intersectHeightfield}get[Xc](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new y),t===void 0&&(t=new y),this.from=e.clone(),this.to=t.clone(),this.direction=new y,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=at.ANY,this.result=new ks,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||at.ANY,this.result=t.result||new ks,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(ka),Ir.length=0,e.broadphase.aabbQuery(e,ka,Ir),this.intersectBodies(Ir),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const i=Nm,s=Um;for(let a=0,c=e.shapes.length;a<c;a++){const u=e.shapes[a];if(!(n&&!u.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[a],s),e.quaternion.vmult(e.shapeOffsets[a],i),i.vadd(e.position,i),this.intersectShape(u,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if($m(s,this.direction,n)>e.boundingSphereRadius)return;const c=this[e.type];c&&c.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const a=this.from,c=this.to,u=this.direction,h=new y(0,0,1);t.vmult(h,h);const p=new y;a.vsub(n,p);const o=p.dot(h);c.vsub(n,p);const l=p.dot(h);if(o*l>0||a.distanceTo(c)<o)return;const d=h.dot(u);if(Math.abs(d)<this.precision)return;const _=new y,g=new y,m=new y;a.vsub(n,_);const f=-h.dot(_)/d;u.scale(f,g),a.vadd(g,m),this.reportIntersection(h,m,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const a=Fm;a.from.copy(this.from),a.to.copy(this.to),Xe.pointToLocalFrame(n,t,a.from,a.from),Xe.pointToLocalFrame(n,t,a.to,a.to),a.updateDirection();const c=Om;let u,h,p,o;u=h=0,p=o=e.data.length-1;const l=new zt;a.getAABB(l),e.getIndexOfPosition(l.lowerBound.x,l.lowerBound.y,c,!0),u=Math.max(u,c[0]),h=Math.max(h,c[1]),e.getIndexOfPosition(l.upperBound.x,l.upperBound.y,c,!0),p=Math.min(p,c[0]+1),o=Math.min(o,c[1]+1);for(let d=u;d<p;d++)for(let _=h;_<o;_++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(d,_,l),!!l.overlapsRay(a)){if(e.getConvexTrianglePillar(d,_,!1),Xe.pointToWorldFrame(n,t,e.pillarOffset,Ts),this._intersectConvex(e.pillarConvex,t,Ts,i,s,Ga),this.result.shouldStop)return;e.getConvexTrianglePillar(d,_,!0),Xe.pointToWorldFrame(n,t,e.pillarOffset,Ts),this._intersectConvex(e.pillarConvex,t,Ts,i,s,Ga)}}}_intersectSphere(e,t,n,i,s){const a=this.from,c=this.to,u=e.radius,h=(c.x-a.x)**2+(c.y-a.y)**2+(c.z-a.z)**2,p=2*((c.x-a.x)*(a.x-n.x)+(c.y-a.y)*(a.y-n.y)+(c.z-a.z)*(a.z-n.z)),o=(a.x-n.x)**2+(a.y-n.y)**2+(a.z-n.z)**2-u**2,l=p**2-4*h*o,d=Bm,_=zm;if(!(l<0))if(l===0)a.lerp(c,l,d),d.vsub(n,_),_.normalize(),this.reportIntersection(_,d,s,i,-1);else{const g=(-p-Math.sqrt(l))/(2*h),m=(-p+Math.sqrt(l))/(2*h);if(g>=0&&g<=1&&(a.lerp(c,g,d),d.vsub(n,_),_.normalize(),this.reportIntersection(_,d,s,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(a.lerp(c,m,d),d.vsub(n,_),_.normalize(),this.reportIntersection(_,d,s,i,-1))}}_intersectConvex(e,t,n,i,s,a){const c=km,u=Ha,h=a&&a.faceList||null,p=e.faces,o=e.vertices,l=e.faceNormals,d=this.direction,_=this.from,g=this.to,m=_.distanceTo(g),f=h?h.length:p.length,v=this.result;for(let x=0;!v.shouldStop&&x<f;x++){const S=h?h[x]:x,R=p[S],b=l[S],A=t,O=n;u.copy(o[R[0]]),A.vmult(u,u),u.vadd(O,u),u.vsub(_,u),A.vmult(b,c);const M=d.dot(c);if(Math.abs(M)<this.precision)continue;const w=c.dot(u)/M;if(!(w<0)){d.scale(w,It),It.vadd(_,It),$t.copy(o[R[0]]),A.vmult($t,$t),O.vadd($t,$t);for(let U=1;!v.shouldStop&&U<R.length-1;U++){nn.copy(o[R[U]]),sn.copy(o[R[U+1]]),A.vmult(nn,nn),A.vmult(sn,sn),O.vadd(nn,nn),O.vadd(sn,sn);const z=It.distanceTo(_);!(at.pointInTriangle(It,$t,nn,sn)||at.pointInTriangle(It,nn,$t,sn))||z>m||this.reportIntersection(c,It,s,i,S)}}}}_intersectTrimesh(e,t,n,i,s,a){const c=Gm,u=Ym,h=jm,p=Ha,o=Hm,l=Vm,d=Wm,_=qm,g=Xm,m=e.indices;e.vertices;const f=this.from,v=this.to,x=this.direction;h.position.copy(n),h.quaternion.copy(t),Xe.vectorToLocalFrame(n,t,x,o),Xe.pointToLocalFrame(n,t,f,l),Xe.pointToLocalFrame(n,t,v,d),d.x*=e.scale.x,d.y*=e.scale.y,d.z*=e.scale.z,l.x*=e.scale.x,l.y*=e.scale.y,l.z*=e.scale.z,d.vsub(l,o),o.normalize();const S=l.distanceSquared(d);e.tree.rayQuery(this,h,u);for(let R=0,b=u.length;!this.result.shouldStop&&R!==b;R++){const A=u[R];e.getNormal(A,c),e.getVertex(m[A*3],$t),$t.vsub(l,p);const O=o.dot(c),M=c.dot(p)/O;if(M<0)continue;o.scale(M,It),It.vadd(l,It),e.getVertex(m[A*3+1],nn),e.getVertex(m[A*3+2],sn);const w=It.distanceSquared(l);!(at.pointInTriangle(It,nn,$t,sn)||at.pointInTriangle(It,$t,nn,sn))||w>S||(Xe.vectorToWorldFrame(t,c,g),Xe.pointToWorldFrame(n,t,It,_),this.reportIntersection(g,_,s,i,A))}u.length=0}reportIntersection(e,t,n,i,s){const a=this.from,c=this.to,u=a.distanceTo(t),h=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(h.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case at.ALL:this.hasHit=!0,h.set(a,c,e,t,n,i,u),h.hasHit=!0,this.callback(h);break;case at.CLOSEST:(u<h.distance||!h.hasHit)&&(this.hasHit=!0,h.hasHit=!0,h.set(a,c,e,t,n,i,u));break;case at.ANY:this.hasHit=!0,h.hasHit=!0,h.set(a,c,e,t,n,i,u),h.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,qn),n.vsub(t,Fi),e.vsub(t,Dr);const s=qn.dot(qn),a=qn.dot(Fi),c=qn.dot(Dr),u=Fi.dot(Fi),h=Fi.dot(Dr);let p,o;return(p=u*c-a*h)>=0&&(o=s*h-a*c)>=0&&p+o<s*u-a*a}}at.CLOSEST=io.CLOSEST;at.ANY=io.ANY;at.ALL=io.ALL;const ka=new zt,Ir=[],Fi=new y,Dr=new y,Nm=new y,Um=new ct,It=new y,$t=new y,nn=new y,sn=new y;new y;new ks;const Ga={faceList:[0]},Ts=new y,Fm=new at,Om=[],Bm=new y,zm=new y,km=new y;new y;new y;const Ha=new y,Gm=new y,Hm=new y,Vm=new y,Wm=new y,Xm=new y,qm=new y;new zt;const Ym=[],jm=new Xe,qn=new y,As=new y;function $m(r,e,t){t.vsub(r,qn);const n=qn.dot(e);return e.scale(n,As),As.vadd(r,As),t.distanceTo(As)}class Km{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class Va{constructor(){this.spatial=new y,this.rotational=new y}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Ji{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Ji.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Va,this.jacobianElementB=new Va,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,a=n;this.a=4/(a*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(a*a*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),a=this.computeGiMf();return-s*e-i*t-a*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,a=i.position;return e.spatial.dot(s)+t.spatial.dot(a)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,a=i.velocity,c=n.angularVelocity,u=i.angularVelocity;return e.multiplyVectors(s,c)+t.multiplyVectors(a,u)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,a=i.vlambda,c=n.wlambda,u=i.wlambda;return e.multiplyVectors(s,c)+t.multiplyVectors(a,u)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,a=n.torque,c=i.force,u=i.torque,h=n.invMassSolve,p=i.invMassSolve;return s.scale(h,Wa),c.scale(p,Xa),n.invInertiaWorldSolve.vmult(a,qa),i.invInertiaWorldSolve.vmult(u,Ya),e.multiplyVectors(Wa,qa)+t.multiplyVectors(Xa,Ya)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,a=i.invMassSolve,c=n.invInertiaWorldSolve,u=i.invInertiaWorldSolve;let h=s+a;return c.vmult(e.rotational,Cs),h+=Cs.dot(e.rotational),u.vmult(t.rotational,Cs),h+=Cs.dot(t.rotational),h}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,a=Zm;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,a),i.wlambda.addScaledVector(e,a,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,a),s.wlambda.addScaledVector(e,a,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Ji.idCounter=0;const Wa=new y,Xa=new y,qa=new y,Ya=new y,Cs=new y,Zm=new y;class Jm extends Ji{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new y,this.rj=new y,this.ni=new y}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,a=this.ri,c=this.rj,u=Qm,h=e_,p=i.velocity,o=i.angularVelocity;i.force,i.torque;const l=s.velocity,d=s.angularVelocity;s.force,s.torque;const _=t_,g=this.jacobianElementA,m=this.jacobianElementB,f=this.ni;a.cross(f,u),c.cross(f,h),f.negate(g.spatial),u.negate(g.rotational),m.spatial.copy(f),m.rotational.copy(h),_.copy(s.position),_.vadd(c,_),_.vsub(i.position,_),_.vsub(a,_);const v=f.dot(_),x=this.restitution+1,S=x*l.dot(f)-x*p.dot(f)+d.dot(h)-o.dot(u),R=this.computeGiMf();return-v*t-S*n-e*R}getImpactVelocityAlongNormal(){const e=n_,t=i_,n=s_,i=r_,s=o_;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const Qm=new y,e_=new y,t_=new y,n_=new y,i_=new y,s_=new y,r_=new y,o_=new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;class ja extends Ji{constructor(e,t,n){super(e,t,-n,n),this.ri=new y,this.rj=new y,this.t=new y}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=a_,a=c_,c=this.t;n.cross(c,s),i.cross(c,a);const u=this.jacobianElementA,h=this.jacobianElementB;c.negate(u.spatial),s.negate(u.rotational),h.spatial.copy(c),h.rotational.copy(a);const p=this.computeGW(),o=this.computeGiMf();return-p*t-e*o}}const a_=new y,c_=new y;class Qi{constructor(e,t,n){n=Km.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Qi.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Qi.idCounter=0;class Jn{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=Jn.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}Jn.idCounter=0;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new at;new y;new y;new y;new y(1,0,0),new y(0,1,0),new y(0,0,1);new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;class l_ extends ue{constructor(){super({type:ue.types.PLANE}),this.worldNormal=new y,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new y),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){pn.set(0,0,1),t.vmult(pn,pn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),pn.x===1?i.x=e.x:pn.x===-1&&(n.x=e.x),pn.y===1?i.y=e.y:pn.y===-1&&(n.y=e.y),pn.z===1?i.z=e.z:pn.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const pn=new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new zt;new y;new zt;new y;new y;new y;new y;new y;new y;new y;new zt;new y;new Xe;new zt;class u_{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class h_ extends u_{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,a=this.equations,c=a.length,u=t.bodies,h=u.length,p=e;let o,l,d,_,g,m;if(c!==0)for(let S=0;S!==h;S++)u[S].updateSolveMassProperties();const f=f_,v=p_,x=d_;f.length=c,v.length=c,x.length=c;for(let S=0;S!==c;S++){const R=a[S];x[S]=0,v[S]=R.computeB(p),f[S]=1/R.computeC()}if(c!==0){for(let b=0;b!==h;b++){const A=u[b],O=A.vlambda,M=A.wlambda;O.set(0,0,0),M.set(0,0,0)}for(n=0;n!==i;n++){_=0;for(let b=0;b!==c;b++){const A=a[b];o=v[b],l=f[b],m=x[b],g=A.computeGWlambda(),d=l*(o-g-A.eps*m),m+d<A.minForce?d=A.minForce-m:m+d>A.maxForce&&(d=A.maxForce-m),x[b]+=d,_+=d>0?d:-d,A.addToWlambda(d)}if(_*_<s)break}for(let b=0;b!==h;b++){const A=u[b],O=A.velocity,M=A.angularVelocity;A.vlambda.vmul(A.linearFactor,A.vlambda),O.vadd(A.vlambda,O),A.wlambda.vmul(A.angularFactor,A.wlambda),M.vadd(A.wlambda,M)}let S=a.length;const R=1/p;for(;S--;)a[S].multiplier=x[S]*R}return n}}const d_=[],f_=[],p_=[];class m_{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class __ extends m_{constructor(){super(...arguments),this.type=y}constructObject(){return new y}}const Je={sphereSphere:ue.types.SPHERE,spherePlane:ue.types.SPHERE|ue.types.PLANE,boxBox:ue.types.BOX|ue.types.BOX,sphereBox:ue.types.SPHERE|ue.types.BOX,planeBox:ue.types.PLANE|ue.types.BOX,convexConvex:ue.types.CONVEXPOLYHEDRON,sphereConvex:ue.types.SPHERE|ue.types.CONVEXPOLYHEDRON,planeConvex:ue.types.PLANE|ue.types.CONVEXPOLYHEDRON,boxConvex:ue.types.BOX|ue.types.CONVEXPOLYHEDRON,sphereHeightfield:ue.types.SPHERE|ue.types.HEIGHTFIELD,boxHeightfield:ue.types.BOX|ue.types.HEIGHTFIELD,convexHeightfield:ue.types.CONVEXPOLYHEDRON|ue.types.HEIGHTFIELD,sphereParticle:ue.types.PARTICLE|ue.types.SPHERE,planeParticle:ue.types.PLANE|ue.types.PARTICLE,boxParticle:ue.types.BOX|ue.types.PARTICLE,convexParticle:ue.types.PARTICLE|ue.types.CONVEXPOLYHEDRON,cylinderCylinder:ue.types.CYLINDER,sphereCylinder:ue.types.SPHERE|ue.types.CYLINDER,planeCylinder:ue.types.PLANE|ue.types.CYLINDER,boxCylinder:ue.types.BOX|ue.types.CYLINDER,convexCylinder:ue.types.CONVEXPOLYHEDRON|ue.types.CYLINDER,heightfieldCylinder:ue.types.HEIGHTFIELD|ue.types.CYLINDER,particleCylinder:ue.types.PARTICLE|ue.types.CYLINDER,sphereTrimesh:ue.types.SPHERE|ue.types.TRIMESH,planeTrimesh:ue.types.PLANE|ue.types.TRIMESH};class g_{get[Je.sphereSphere](){return this.sphereSphere}get[Je.spherePlane](){return this.spherePlane}get[Je.boxBox](){return this.boxBox}get[Je.sphereBox](){return this.sphereBox}get[Je.planeBox](){return this.planeBox}get[Je.convexConvex](){return this.convexConvex}get[Je.sphereConvex](){return this.sphereConvex}get[Je.planeConvex](){return this.planeConvex}get[Je.boxConvex](){return this.boxConvex}get[Je.sphereHeightfield](){return this.sphereHeightfield}get[Je.boxHeightfield](){return this.boxHeightfield}get[Je.convexHeightfield](){return this.convexHeightfield}get[Je.sphereParticle](){return this.sphereParticle}get[Je.planeParticle](){return this.planeParticle}get[Je.boxParticle](){return this.boxParticle}get[Je.convexParticle](){return this.convexParticle}get[Je.cylinderCylinder](){return this.convexConvex}get[Je.sphereCylinder](){return this.sphereConvex}get[Je.planeCylinder](){return this.planeConvex}get[Je.boxCylinder](){return this.boxConvex}get[Je.convexCylinder](){return this.convexConvex}get[Je.heightfieldCylinder](){return this.heightfieldCylinder}get[Je.particleCylinder](){return this.particleCylinder}get[Je.sphereTrimesh](){return this.sphereTrimesh}get[Je.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new __,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,a){let c;this.contactPointPool.length?(c=this.contactPointPool.pop(),c.bi=e,c.bj=t):c=new Jm(e,t),c.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const u=this.currentContactMaterial;c.restitution=u.restitution,c.setSpookParams(u.contactEquationStiffness,u.contactEquationRelaxation,this.world.dt);const h=n.material||e.material,p=i.material||t.material;return h&&p&&h.restitution>=0&&p.restitution>=0&&(c.restitution=h.restitution*p.restitution),c.si=s||n,c.sj=a||i,c}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,a=e.sj,c=this.world,u=this.currentContactMaterial;let h=u.friction;const p=s.material||n.material,o=a.material||i.material;if(p&&o&&p.friction>=0&&o.friction>=0&&(h=p.friction*o.friction),h>0){const l=h*(c.frictionGravity||c.gravity).length();let d=n.invMass+i.invMass;d>0&&(d=1/d);const _=this.frictionEquationPool,g=_.length?_.pop():new ja(n,i,l*d),m=_.length?_.pop():new ja(n,i,l*d);return g.bi=m.bi=n,g.bj=m.bj=i,g.minForce=m.minForce=-l*d,g.maxForce=m.maxForce=l*d,g.ri.copy(e.ri),g.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(g.t,m.t),g.setSpookParams(u.frictionEquationStiffness,u.frictionEquationRelaxation,c.dt),m.setSpookParams(u.frictionEquationStiffness,u.frictionEquationRelaxation,c.dt),g.enabled=m.enabled=e.enabled,t.push(g,m),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Gn.setZero(),mi.setZero(),_i.setZero();const s=t.bi;t.bj;for(let c=0;c!==e;c++)t=this.result[this.result.length-1-c],t.bi!==s?(Gn.vadd(t.ni,Gn),mi.vadd(t.ri,mi),_i.vadd(t.rj,_i)):(Gn.vsub(t.ni,Gn),mi.vadd(t.rj,mi),_i.vadd(t.ri,_i));const a=1/e;mi.scale(a,n.ri),_i.scale(a,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Gn.normalize(),Gn.tangents(n.t,i.t)}getContacts(e,t,n,i,s,a,c){this.contactPointPool=s,this.frictionEquationPool=c,this.result=i,this.frictionResult=a;const u=y_,h=M_,p=v_,o=x_;for(let l=0,d=e.length;l!==d;l++){const _=e[l],g=t[l];let m=null;_.material&&g.material&&(m=n.getContactMaterial(_.material,g.material)||null);const f=_.type&he.KINEMATIC&&g.type&he.STATIC||_.type&he.STATIC&&g.type&he.KINEMATIC||_.type&he.KINEMATIC&&g.type&he.KINEMATIC;for(let v=0;v<_.shapes.length;v++){_.quaternion.mult(_.shapeOrientations[v],u),_.quaternion.vmult(_.shapeOffsets[v],p),p.vadd(_.position,p);const x=_.shapes[v];for(let S=0;S<g.shapes.length;S++){g.quaternion.mult(g.shapeOrientations[S],h),g.quaternion.vmult(g.shapeOffsets[S],o),o.vadd(g.position,o);const R=g.shapes[S];if(!(x.collisionFilterMask&R.collisionFilterGroup&&R.collisionFilterMask&x.collisionFilterGroup)||p.distanceTo(o)>x.boundingSphereRadius+R.boundingSphereRadius)continue;let b=null;x.material&&R.material&&(b=n.getContactMaterial(x.material,R.material)||null),this.currentContactMaterial=b||m||n.defaultContactMaterial;const A=x.type|R.type,O=this[A];if(O){let M=!1;x.type<R.type?M=O.call(this,x,R,p,o,u,h,_,g,x,R,f):M=O.call(this,R,x,o,p,h,u,g,_,x,R,f),M&&f&&(n.shapeOverlapKeeper.set(x.id,R.id),n.bodyOverlapKeeper.set(_.id,g.id))}}}}}sphereSphere(e,t,n,i,s,a,c,u,h,p,o){if(o)return n.distanceSquared(i)<(e.radius+t.radius)**2;const l=this.createContactEquation(c,u,e,t,h,p);i.vsub(n,l.ni),l.ni.normalize(),l.ri.copy(l.ni),l.rj.copy(l.ni),l.ri.scale(e.radius,l.ri),l.rj.scale(-t.radius,l.rj),l.ri.vadd(n,l.ri),l.ri.vsub(c.position,l.ri),l.rj.vadd(i,l.rj),l.rj.vsub(u.position,l.rj),this.result.push(l),this.createFrictionEquationsFromContact(l,this.frictionResult)}spherePlane(e,t,n,i,s,a,c,u,h,p,o){const l=this.createContactEquation(c,u,e,t,h,p);if(l.ni.set(0,0,1),a.vmult(l.ni,l.ni),l.ni.negate(l.ni),l.ni.normalize(),l.ni.scale(e.radius,l.ri),n.vsub(i,Rs),l.ni.scale(l.ni.dot(Rs),$a),Rs.vsub($a,l.rj),-Rs.dot(l.ni)<=e.radius){if(o)return!0;const d=l.ri,_=l.rj;d.vadd(n,d),d.vsub(c.position,d),_.vadd(i,_),_.vsub(u.position,_),this.result.push(l),this.createFrictionEquationsFromContact(l,this.frictionResult)}}boxBox(e,t,n,i,s,a,c,u,h,p,o){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,a,c,u,e,t,o)}sphereBox(e,t,n,i,s,a,c,u,h,p,o){const l=this.v3pool,d=Y_;n.vsub(i,Ps),t.getSideNormals(d,a);const _=e.radius;let g=!1;const m=$_,f=K_,v=Z_;let x=null,S=0,R=0,b=0,A=null;for(let I=0,$=d.length;I!==$&&g===!1;I++){const k=W_;k.copy(d[I]);const X=k.length();k.normalize();const K=Ps.dot(k);if(K<X+_&&K>0){const J=X_,j=q_;J.copy(d[(I+1)%3]),j.copy(d[(I+2)%3]);const Y=J.length(),Z=j.length();J.normalize(),j.normalize();const ae=Ps.dot(J),pe=Ps.dot(j);if(ae<Y&&ae>-Y&&pe<Z&&pe>-Z){const me=Math.abs(K-X-_);if((A===null||me<A)&&(A=me,R=ae,b=pe,x=X,m.copy(k),f.copy(J),v.copy(j),S++,o))return!0}}}if(S){g=!0;const I=this.createContactEquation(c,u,e,t,h,p);m.scale(-_,I.ri),I.ni.copy(m),I.ni.negate(I.ni),m.scale(x,m),f.scale(R,f),m.vadd(f,m),v.scale(b,v),m.vadd(v,I.rj),I.ri.vadd(n,I.ri),I.ri.vsub(c.position,I.ri),I.rj.vadd(i,I.rj),I.rj.vsub(u.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}let O=l.get();const M=j_;for(let I=0;I!==2&&!g;I++)for(let $=0;$!==2&&!g;$++)for(let k=0;k!==2&&!g;k++)if(O.set(0,0,0),I?O.vadd(d[0],O):O.vsub(d[0],O),$?O.vadd(d[1],O):O.vsub(d[1],O),k?O.vadd(d[2],O):O.vsub(d[2],O),i.vadd(O,M),M.vsub(n,M),M.lengthSquared()<_*_){if(o)return!0;g=!0;const X=this.createContactEquation(c,u,e,t,h,p);X.ri.copy(M),X.ri.normalize(),X.ni.copy(X.ri),X.ri.scale(_,X.ri),X.rj.copy(O),X.ri.vadd(n,X.ri),X.ri.vsub(c.position,X.ri),X.rj.vadd(i,X.rj),X.rj.vsub(u.position,X.rj),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult)}l.release(O),O=null;const w=l.get(),U=l.get(),z=l.get(),N=l.get(),P=l.get(),L=d.length;for(let I=0;I!==L&&!g;I++)for(let $=0;$!==L&&!g;$++)if(I%3!==$%3){d[$].cross(d[I],w),w.normalize(),d[I].vadd(d[$],U),z.copy(n),z.vsub(U,z),z.vsub(i,z);const k=z.dot(w);w.scale(k,N);let X=0;for(;X===I%3||X===$%3;)X++;P.copy(n),P.vsub(N,P),P.vsub(U,P),P.vsub(i,P);const K=Math.abs(k),J=P.length();if(K<d[X].length()&&J<_){if(o)return!0;g=!0;const j=this.createContactEquation(c,u,e,t,h,p);U.vadd(N,j.rj),j.rj.copy(j.rj),P.negate(j.ni),j.ni.normalize(),j.ri.copy(j.rj),j.ri.vadd(i,j.ri),j.ri.vsub(n,j.ri),j.ri.normalize(),j.ri.scale(_,j.ri),j.ri.vadd(n,j.ri),j.ri.vsub(c.position,j.ri),j.rj.vadd(i,j.rj),j.rj.vsub(u.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}}l.release(w,U,z,N,P)}planeBox(e,t,n,i,s,a,c,u,h,p,o){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,a,c,u,e,t,o)}convexConvex(e,t,n,i,s,a,c,u,h,p,o,l,d){const _=dg;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,a,_,l,d)){const g=[],m=fg;e.clipAgainstHull(n,s,t,i,a,_,-100,100,g);let f=0;for(let v=0;v!==g.length;v++){if(o)return!0;const x=this.createContactEquation(c,u,e,t,h,p),S=x.ri,R=x.rj;_.negate(x.ni),g[v].normal.negate(m),m.scale(g[v].depth,m),g[v].point.vadd(m,S),R.copy(g[v].point),S.vsub(n,S),R.vsub(i,R),S.vadd(n,S),S.vsub(c.position,S),R.vadd(i,R),R.vsub(u.position,R),this.result.push(x),f++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&f&&this.createFrictionFromAverage(f)}}sphereConvex(e,t,n,i,s,a,c,u,h,p,o){const l=this.v3pool;n.vsub(i,J_);const d=t.faceNormals,_=t.faces,g=t.vertices,m=e.radius;let f=!1;for(let v=0;v!==g.length;v++){const x=g[v],S=ng;a.vmult(x,S),i.vadd(S,S);const R=tg;if(S.vsub(n,R),R.lengthSquared()<m*m){if(o)return!0;f=!0;const b=this.createContactEquation(c,u,e,t,h,p);b.ri.copy(R),b.ri.normalize(),b.ni.copy(b.ri),b.ri.scale(m,b.ri),S.vsub(i,b.rj),b.ri.vadd(n,b.ri),b.ri.vsub(c.position,b.ri),b.rj.vadd(i,b.rj),b.rj.vsub(u.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult);return}}for(let v=0,x=_.length;v!==x&&f===!1;v++){const S=d[v],R=_[v],b=ig;a.vmult(S,b);const A=sg;a.vmult(g[R[0]],A),A.vadd(i,A);const O=rg;b.scale(-m,O),n.vadd(O,O);const M=og;O.vsub(A,M);const w=M.dot(b),U=ag;if(n.vsub(A,U),w<0&&U.dot(b)>0){const z=[];for(let N=0,P=R.length;N!==P;N++){const L=l.get();a.vmult(g[R[N]],L),i.vadd(L,L),z.push(L)}if(V_(z,b,n)){if(o)return!0;f=!0;const N=this.createContactEquation(c,u,e,t,h,p);b.scale(-m,N.ri),b.negate(N.ni);const P=l.get();b.scale(-w,P);const L=l.get();b.scale(-m,L),n.vsub(i,N.rj),N.rj.vadd(L,N.rj),N.rj.vadd(P,N.rj),N.rj.vadd(i,N.rj),N.rj.vsub(u.position,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(c.position,N.ri),l.release(P),l.release(L),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let I=0,$=z.length;I!==$;I++)l.release(z[I]);return}else for(let N=0;N!==R.length;N++){const P=l.get(),L=l.get();a.vmult(g[R[(N+1)%R.length]],P),a.vmult(g[R[(N+2)%R.length]],L),i.vadd(P,P),i.vadd(L,L);const I=Q_;L.vsub(P,I);const $=eg;I.unit($);const k=l.get(),X=l.get();n.vsub(P,X);const K=X.dot($);$.scale(K,k),k.vadd(P,k);const J=l.get();if(k.vsub(n,J),K>0&&K*K<I.lengthSquared()&&J.lengthSquared()<m*m){if(o)return!0;const j=this.createContactEquation(c,u,e,t,h,p);k.vsub(i,j.rj),k.vsub(n,j.ni),j.ni.normalize(),j.ni.scale(m,j.ri),j.rj.vadd(i,j.rj),j.rj.vsub(u.position,j.rj),j.ri.vadd(n,j.ri),j.ri.vsub(c.position,j.ri),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult);for(let Y=0,Z=z.length;Y!==Z;Y++)l.release(z[Y]);l.release(P),l.release(L),l.release(k),l.release(J),l.release(X);return}l.release(P),l.release(L),l.release(k),l.release(J),l.release(X)}for(let N=0,P=z.length;N!==P;N++)l.release(z[N])}}}planeConvex(e,t,n,i,s,a,c,u,h,p,o){const l=cg,d=lg;d.set(0,0,1),s.vmult(d,d);let _=0;const g=ug;for(let m=0;m!==t.vertices.length;m++)if(l.copy(t.vertices[m]),a.vmult(l,l),i.vadd(l,l),l.vsub(n,g),d.dot(g)<=0){if(o)return!0;const v=this.createContactEquation(c,u,e,t,h,p),x=hg;d.scale(d.dot(g),x),l.vsub(x,x),x.vsub(n,v.ri),v.ni.copy(d),l.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(c.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(u.position,v.rj),this.result.push(v),_++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&_&&this.createFrictionFromAverage(_)}boxConvex(e,t,n,i,s,a,c,u,h,p,o){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,a,c,u,e,t,o)}sphereHeightfield(e,t,n,i,s,a,c,u,h,p,o){const l=t.data,d=e.radius,_=t.elementSize,g=bg,m=wg;Xe.pointToLocalFrame(i,a,n,m);let f=Math.floor((m.x-d)/_)-1,v=Math.ceil((m.x+d)/_)+1,x=Math.floor((m.y-d)/_)-1,S=Math.ceil((m.y+d)/_)+1;if(v<0||S<0||f>l.length||x>l[0].length)return;f<0&&(f=0),v<0&&(v=0),x<0&&(x=0),S<0&&(S=0),f>=l.length&&(f=l.length-1),v>=l.length&&(v=l.length-1),S>=l[0].length&&(S=l[0].length-1),x>=l[0].length&&(x=l[0].length-1);const R=[];t.getRectMinMax(f,x,v,S,R);const b=R[0],A=R[1];if(m.z-d>A||m.z+d<b)return;const O=this.result;for(let M=f;M<v;M++)for(let w=x;w<S;w++){const U=O.length;let z=!1;if(t.getConvexTrianglePillar(M,w,!1),Xe.pointToWorldFrame(i,a,t.pillarOffset,g),n.distanceTo(g)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(z=this.sphereConvex(e,t.pillarConvex,n,g,s,a,c,u,e,t,o)),o&&z||(t.getConvexTrianglePillar(M,w,!0),Xe.pointToWorldFrame(i,a,t.pillarOffset,g),n.distanceTo(g)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(z=this.sphereConvex(e,t.pillarConvex,n,g,s,a,c,u,e,t,o)),o&&z))return!0;if(O.length-U>2)return}}boxHeightfield(e,t,n,i,s,a,c,u,h,p,o){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,a,c,u,e,t,o)}convexHeightfield(e,t,n,i,s,a,c,u,h,p,o){const l=t.data,d=t.elementSize,_=e.boundingSphereRadius,g=Sg,m=Eg,f=Mg;Xe.pointToLocalFrame(i,a,n,f);let v=Math.floor((f.x-_)/d)-1,x=Math.ceil((f.x+_)/d)+1,S=Math.floor((f.y-_)/d)-1,R=Math.ceil((f.y+_)/d)+1;if(x<0||R<0||v>l.length||S>l[0].length)return;v<0&&(v=0),x<0&&(x=0),S<0&&(S=0),R<0&&(R=0),v>=l.length&&(v=l.length-1),x>=l.length&&(x=l.length-1),R>=l[0].length&&(R=l[0].length-1),S>=l[0].length&&(S=l[0].length-1);const b=[];t.getRectMinMax(v,S,x,R,b);const A=b[0],O=b[1];if(!(f.z-_>O||f.z+_<A))for(let M=v;M<x;M++)for(let w=S;w<R;w++){let U=!1;if(t.getConvexTrianglePillar(M,w,!1),Xe.pointToWorldFrame(i,a,t.pillarOffset,g),n.distanceTo(g)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(U=this.convexConvex(e,t.pillarConvex,n,g,s,a,c,u,null,null,o,m,null)),o&&U||(t.getConvexTrianglePillar(M,w,!0),Xe.pointToWorldFrame(i,a,t.pillarOffset,g),n.distanceTo(g)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(U=this.convexConvex(e,t.pillarConvex,n,g,s,a,c,u,null,null,o,m,null)),o&&U))return!0}}sphereParticle(e,t,n,i,s,a,c,u,h,p,o){const l=gg;if(l.set(0,0,1),i.vsub(n,l),l.lengthSquared()<=e.radius*e.radius){if(o)return!0;const _=this.createContactEquation(u,c,t,e,h,p);l.normalize(),_.rj.copy(l),_.rj.scale(e.radius,_.rj),_.ni.copy(l),_.ni.negate(_.ni),_.ri.set(0,0,0),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}planeParticle(e,t,n,i,s,a,c,u,h,p,o){const l=pg;l.set(0,0,1),c.quaternion.vmult(l,l);const d=mg;if(i.vsub(c.position,d),l.dot(d)<=0){if(o)return!0;const g=this.createContactEquation(u,c,t,e,h,p);g.ni.copy(l),g.ni.negate(g.ni),g.ri.set(0,0,0);const m=_g;l.scale(l.dot(i),m),i.vsub(m,m),g.rj.copy(m),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}boxParticle(e,t,n,i,s,a,c,u,h,p,o){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,a,c,u,e,t,o)}convexParticle(e,t,n,i,s,a,c,u,h,p,o){let l=-1;const d=xg,_=yg;let g=null;const m=vg;if(m.copy(i),m.vsub(n,m),s.conjugate(Ka),Ka.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let f=0,v=e.faces.length;f!==v;f++){const x=[e.worldVertices[e.faces[f][0]]],S=e.worldFaceNormals[f];i.vsub(x[0],Za);const R=-S.dot(Za);if(g===null||Math.abs(R)<Math.abs(g)){if(o)return!0;g=R,l=f,d.copy(S)}}if(l!==-1){const f=this.createContactEquation(u,c,t,e,h,p);d.scale(g,_),_.vadd(i,_),_.vsub(n,_),f.rj.copy(_),d.negate(f.ni),f.ri.set(0,0,0);const v=f.ri,x=f.rj;v.vadd(i,v),v.vsub(u.position,v),x.vadd(n,x),x.vsub(c.position,x),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,a,c,u,h,p,o){return this.convexHeightfield(t,e,i,n,a,s,u,c,h,p,o)}particleCylinder(e,t,n,i,s,a,c,u,h,p,o){return this.convexParticle(t,e,i,n,a,s,u,c,h,p,o)}sphereTrimesh(e,t,n,i,s,a,c,u,h,p,o){const l=R_,d=P_,_=L_,g=I_,m=D_,f=N_,v=B_,x=C_,S=T_,R=z_;Xe.pointToLocalFrame(i,a,n,m);const b=e.radius;v.lowerBound.set(m.x-b,m.y-b,m.z-b),v.upperBound.set(m.x+b,m.y+b,m.z+b),t.getTrianglesInAABB(v,R);const A=A_,O=e.radius*e.radius;for(let N=0;N<R.length;N++)for(let P=0;P<3;P++)if(t.getVertex(t.indices[R[N]*3+P],A),A.vsub(m,S),S.lengthSquared()<=O){if(x.copy(A),Xe.pointToWorldFrame(i,a,x,A),A.vsub(n,S),o)return!0;let L=this.createContactEquation(c,u,e,t,h,p);L.ni.copy(S),L.ni.normalize(),L.ri.copy(L.ni),L.ri.scale(e.radius,L.ri),L.ri.vadd(n,L.ri),L.ri.vsub(c.position,L.ri),L.rj.copy(A),L.rj.vsub(u.position,L.rj),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)}for(let N=0;N<R.length;N++)for(let P=0;P<3;P++){t.getVertex(t.indices[R[N]*3+P],l),t.getVertex(t.indices[R[N]*3+(P+1)%3],d),d.vsub(l,_),m.vsub(d,f);const L=f.dot(_);m.vsub(l,f);let I=f.dot(_);if(I>0&&L<0&&(m.vsub(l,f),g.copy(_),g.normalize(),I=f.dot(g),g.scale(I,f),f.vadd(l,f),f.distanceTo(m)<e.radius)){if(o)return!0;const k=this.createContactEquation(c,u,e,t,h,p);f.vsub(m,k.ni),k.ni.normalize(),k.ni.scale(e.radius,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(c.position,k.ri),Xe.pointToWorldFrame(i,a,f,f),f.vsub(u.position,k.rj),Xe.vectorToWorldFrame(a,k.ni,k.ni),Xe.vectorToWorldFrame(a,k.ri,k.ri),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}}const M=U_,w=F_,U=O_,z=b_;for(let N=0,P=R.length;N!==P;N++){t.getTriangleVertices(R[N],M,w,U),t.getNormal(R[N],z),m.vsub(M,f);let L=f.dot(z);if(z.scale(L,f),m.vsub(f,f),L=f.distanceTo(m),at.pointInTriangle(f,M,w,U)&&L<e.radius){if(o)return!0;let I=this.createContactEquation(c,u,e,t,h,p);f.vsub(m,I.ni),I.ni.normalize(),I.ni.scale(e.radius,I.ri),I.ri.vadd(n,I.ri),I.ri.vsub(c.position,I.ri),Xe.pointToWorldFrame(i,a,f,f),f.vsub(u.position,I.rj),Xe.vectorToWorldFrame(a,I.ni,I.ni),Xe.vectorToWorldFrame(a,I.ri,I.ri),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}}R.length=0}planeTrimesh(e,t,n,i,s,a,c,u,h,p,o){const l=new y,d=S_;d.set(0,0,1),s.vmult(d,d);for(let _=0;_<t.vertices.length/3;_++){t.getVertex(_,l);const g=new y;g.copy(l),Xe.pointToWorldFrame(i,a,g,l);const m=E_;if(l.vsub(n,m),d.dot(m)<=0){if(o)return!0;const v=this.createContactEquation(c,u,e,t,h,p);v.ni.copy(d);const x=w_;d.scale(m.dot(d),x),l.vsub(x,x),v.ri.copy(x),v.ri.vsub(c.position,v.ri),v.rj.copy(l),v.rj.vsub(u.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const Gn=new y,mi=new y,_i=new y,v_=new y,x_=new y,y_=new ct,M_=new ct,S_=new y,E_=new y,w_=new y,b_=new y,T_=new y;new y;const A_=new y,C_=new y,R_=new y,P_=new y,L_=new y,I_=new y,D_=new y,N_=new y,U_=new y,F_=new y,O_=new y,B_=new zt,z_=[],Rs=new y,$a=new y,k_=new y,G_=new y,H_=new y;function V_(r,e,t){let n=null;const i=r.length;for(let s=0;s!==i;s++){const a=r[s],c=k_;r[(s+1)%i].vsub(a,c);const u=G_;c.cross(e,u);const h=H_;t.vsub(a,h);const p=u.dot(h);if(n===null||p>0&&n===!0||p<=0&&n===!1){n===null&&(n=p>0);continue}else return!1}return!0}const Ps=new y,W_=new y,X_=new y,q_=new y,Y_=[new y,new y,new y,new y,new y,new y],j_=new y,$_=new y,K_=new y,Z_=new y,J_=new y,Q_=new y,eg=new y,tg=new y,ng=new y,ig=new y,sg=new y,rg=new y,og=new y,ag=new y;new y;new y;const cg=new y,lg=new y,ug=new y,hg=new y,dg=new y,fg=new y,pg=new y,mg=new y,_g=new y,gg=new y,Ka=new ct,vg=new y;new y;const xg=new y,Za=new y,yg=new y,Mg=new y,Sg=new y,Eg=[0],wg=new y,bg=new y;class Ja{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let a=i.length-1;a>=s;a--)i[a+1]=i[a];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,a=i.length;let c=0;for(let u=0;u<s;u++){let h=!1;const p=n[u];for(;p>i[c];)c++;h=p===i[c],h||Qa(e,p)}c=0;for(let u=0;u<a;u++){let h=!1;const p=i[u];for(;p>n[c];)c++;h=n[c]===p,h||Qa(t,p)}}}function Qa(r,e){r.push((e&4294901760)>>16,e&65535)}const Nr=(r,e)=>r<e?`${r}-${e}`:`${e}-${r}`;class Tg{constructor(){this.data={keys:[]}}get(e,t){const n=Nr(e,t);return this.data[n]}set(e,t,n){const i=Nr(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=Nr(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class Ag extends Oc{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new y,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new y,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new Bc,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new h_,this.constraints=[],this.narrowphase=new g_(this),this.collisionMatrix=new Ba,this.collisionMatrixPrevious=new Ba,this.bodyOverlapKeeper=new Ja,this.shapeOverlapKeeper=new Ja,this.contactmaterials=[],this.contactMaterialTable=new Tg,this.defaultMaterial=new Jn("default"),this.defaultContactMaterial=new Qi(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof ks?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=at.ALL,n.from=e,n.to=t,n.callback=i,Ur.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=at.ANY,n.from=e,n.to=t,n.result=i,Ur.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=at.CLOSEST,n.from=e,n.to=t,n.result=i,Ur.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof he&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const a=i[s];if(a.id===e)return a}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=ut.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=ut.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(ut.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const a=this.accumulator/e;for(let c=0;c!==this.bodies.length;c++){const u=this.bodies[c];u.previousPosition.lerp(u.position,a,u.interpolatedPosition),u.previousQuaternion.slerp(u.quaternion,a,u.interpolatedQuaternion),u.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=Ig,i=Dg,s=this.bodies.length,a=this.bodies,c=this.solver,u=this.gravity,h=this.doProfiling,p=this.profile,o=he.DYNAMIC;let l=-1/0;const d=this.constraints,_=Lg;u.length();const g=u.x,m=u.y,f=u.z;let v=0;for(h&&(l=ut.now()),v=0;v!==s;v++){const N=a[v];if(N.type===o){const P=N.force,L=N.mass;P.x+=L*g,P.y+=L*m,P.z+=L*f}}for(let N=0,P=this.subsystems.length;N!==P;N++)this.subsystems[N].update();h&&(l=ut.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),h&&(p.broadphase=ut.now()-l);let x=d.length;for(v=0;v!==x;v++){const N=d[v];if(!N.collideConnected)for(let P=n.length-1;P>=0;P-=1)(N.bodyA===n[P]&&N.bodyB===i[P]||N.bodyB===n[P]&&N.bodyA===i[P])&&(n.splice(P,1),i.splice(P,1))}this.collisionMatrixTick(),h&&(l=ut.now());const S=Pg,R=t.length;for(v=0;v!==R;v++)S.push(t[v]);t.length=0;const b=this.frictionEquations.length;for(v=0;v!==b;v++)_.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,S,this.frictionEquations,_),h&&(p.narrowphase=ut.now()-l),h&&(l=ut.now()),v=0;v<this.frictionEquations.length;v++)c.addEquation(this.frictionEquations[v]);const A=t.length;for(let N=0;N!==A;N++){const P=t[N],L=P.bi,I=P.bj,$=P.si,k=P.sj;let X;if(L.material&&I.material?X=this.getContactMaterial(L.material,I.material)||this.defaultContactMaterial:X=this.defaultContactMaterial,X.friction,L.material&&I.material&&(L.material.friction>=0&&I.material.friction>=0&&L.material.friction*I.material.friction,L.material.restitution>=0&&I.material.restitution>=0&&(P.restitution=L.material.restitution*I.material.restitution)),c.addEquation(P),L.allowSleep&&L.type===he.DYNAMIC&&L.sleepState===he.SLEEPING&&I.sleepState===he.AWAKE&&I.type!==he.STATIC){const K=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),J=I.sleepSpeedLimit**2;K>=J*2&&(L.wakeUpAfterNarrowphase=!0)}if(I.allowSleep&&I.type===he.DYNAMIC&&I.sleepState===he.SLEEPING&&L.sleepState===he.AWAKE&&L.type!==he.STATIC){const K=L.velocity.lengthSquared()+L.angularVelocity.lengthSquared(),J=L.sleepSpeedLimit**2;K>=J*2&&(I.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(L,I,!0),this.collisionMatrixPrevious.get(L,I)||(Oi.body=I,Oi.contact=P,L.dispatchEvent(Oi),Oi.body=L,I.dispatchEvent(Oi)),this.bodyOverlapKeeper.set(L.id,I.id),this.shapeOverlapKeeper.set($.id,k.id)}for(this.emitContactEvents(),h&&(p.makeContactConstraints=ut.now()-l,l=ut.now()),v=0;v!==s;v++){const N=a[v];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(x=d.length,v=0;v!==x;v++){const N=d[v];N.update();for(let P=0,L=N.equations.length;P!==L;P++){const I=N.equations[P];c.addEquation(I)}}c.solve(e,this),h&&(p.solve=ut.now()-l),c.removeAllEquations();const O=Math.pow;for(v=0;v!==s;v++){const N=a[v];if(N.type&o){const P=O(1-N.linearDamping,e),L=N.velocity;L.scale(P,L);const I=N.angularVelocity;if(I){const $=O(1-N.angularDamping,e);I.scale($,I)}}}this.dispatchEvent(Rg),h&&(l=ut.now());const w=this.stepnumber%(this.quatNormalizeSkip+1)===0,U=this.quatNormalizeFast;for(v=0;v!==s;v++)a[v].integrate(e,w,U);this.clearForces(),this.broadphase.dirty=!0,h&&(p.integrate=ut.now()-l),this.stepnumber+=1,this.dispatchEvent(Cg);let z=!0;if(this.allowSleep)for(z=!1,v=0;v!==s;v++){const N=a[v];N.sleepTick(this.time),N.sleepState!==he.SLEEPING&&(z=!0)}this.hasActiveBodies=z}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(mn,_n),e){for(let s=0,a=mn.length;s<a;s+=2)Bi.bodyA=this.getBodyById(mn[s]),Bi.bodyB=this.getBodyById(mn[s+1]),this.dispatchEvent(Bi);Bi.bodyA=Bi.bodyB=null}if(t){for(let s=0,a=_n.length;s<a;s+=2)zi.bodyA=this.getBodyById(_n[s]),zi.bodyB=this.getBodyById(_n[s+1]),this.dispatchEvent(zi);zi.bodyA=zi.bodyB=null}mn.length=_n.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(mn,_n),n){for(let s=0,a=mn.length;s<a;s+=2){const c=this.getShapeById(mn[s]),u=this.getShapeById(mn[s+1]);gn.shapeA=c,gn.shapeB=u,c&&(gn.bodyA=c.body),u&&(gn.bodyB=u.body),this.dispatchEvent(gn)}gn.bodyA=gn.bodyB=gn.shapeA=gn.shapeB=null}if(i){for(let s=0,a=_n.length;s<a;s+=2){const c=this.getShapeById(_n[s]),u=this.getShapeById(_n[s+1]);vn.shapeA=c,vn.shapeB=u,c&&(vn.bodyA=c.body),u&&(vn.bodyB=u.body),this.dispatchEvent(vn)}vn.bodyA=vn.bodyB=vn.shapeA=vn.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new zt;const Ur=new at,ut=globalThis.performance||{};if(!ut.now){let r=Date.now();ut.timing&&ut.timing.navigationStart&&(r=ut.timing.navigationStart),ut.now=()=>Date.now()-r}new y;const Cg={type:"postStep"},Rg={type:"preStep"},Oi={type:he.COLLIDE_EVENT_NAME,body:null,contact:null},Pg=[],Lg=[],Ig=[],Dg=[],mn=[],_n=[],Bi={type:"beginContact",bodyA:null,bodyB:null},zi={type:"endContact",bodyA:null,bodyB:null},gn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},vn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class Ng{constructor(){this.timeStep=1/60,this.world=new Ag({gravity:new y(0,-9.82,0)}),this.setupWorld()}setupWorld(){this.world.broadphase=new Bc,"iterations"in this.world.solver&&(this.world.solver.iterations=10);const e=new Jn("ground"),t=new Jn("car"),n=new Qi(e,t,{friction:.8,restitution:.1});this.world.addContactMaterial(n);const i=new l_,s=new he({mass:0,material:e});s.addShape(i),s.quaternion.setFromAxisAngle(new y(1,0,0),-Math.PI/2),this.world.addBody(s)}step(e){this.world.step(this.timeStep,e,3)}getWorld(){return this.world}addBody(e){this.world.addBody(e)}removeBody(e){this.world.removeBody(e)}}class ec{constructor(e,t,n,i){this.nitroAmount=100,this.maxNitro=100,this.speed=0,this.isAirborne=!1,this.airborneTime=0,this.stuntMultiplier=1,this.lastStuntTime=0,this.id=e,this.model=t,this.scene=n,this.physicsWorld=i,this.stats=this.getCarStats(t),this.createCarMesh(),this.createPhysicsBody()}async init(){this.scene.add(this.mesh),this.physicsWorld.addBody(this.body)}getCarStats(e){const t={"mclaren-p1":{topSpeed:350,acceleration:95,handling:82,nitroEfficiency:90,weight:1400},"ferrari-458":{topSpeed:320,acceleration:88,handling:85,nitroEfficiency:85,weight:1380},"lamborghini-huracan":{topSpeed:325,acceleration:90,handling:80,nitroEfficiency:88,weight:1422},"bugatti-veyron":{topSpeed:400,acceleration:98,handling:70,nitroEfficiency:95,weight:1888},"koenigsegg-one":{topSpeed:450,acceleration:100,handling:75,nitroEfficiency:98,weight:1360}};return t[e]||t["mclaren-p1"]}createCarMesh(){this.mesh=new Xt;const e=new an(4,1.5,8),t=new Bt({color:this.getCarColor()}),n=new nt(e,t);n.position.y=.75,n.castShadow=!0,this.mesh.add(n);const i=new $i(1,1,.5,16),s=new Bt({color:2236962});if([{x:-1.5,y:0,z:2.5},{x:1.5,y:0,z:2.5},{x:-1.5,y:0,z:-2.5},{x:1.5,y:0,z:-2.5}].forEach(c=>{const u=new nt(i,s);u.position.set(c.x,c.y,c.z),u.rotation.z=Math.PI/2,u.castShadow=!0,this.mesh.add(u)}),this.stats.topSpeed>300){const c=new an(3,.2,.5),u=new Bt({color:3355443}),h=new nt(c,u);h.position.set(0,2,-3.5),h.castShadow=!0,this.mesh.add(h)}}createPhysicsBody(){const e=new qs(new y(2,.75,4));this.body=new he({mass:this.stats.weight,shape:e,material:new Jn("car")}),this.body.position.set(0,1,0),this.body.addEventListener("collide",this.handleCollision.bind(this))}getCarColor(){const e=[16711680,255,65280,16776960,16711935,65535,16753920,8388736];return e[Math.floor(Math.random()*e.length)]}update(e,t){this.applyThrottle(t.throttle,e),this.applyBraking(t.brake,e),this.applySteering(t.steering,e),t.nitro&&this.nitroAmount>0?this.applyNitro(e):this.regenerateNitro(e),this.mesh.position.copy(this.body.position),this.mesh.quaternion.copy(this.body.quaternion),this.speed=this.body.velocity.length(),this.checkAirborneStatus(e),this.detectStunts(e)}applyThrottle(e,t){if(e===0)return;const n=e*this.stats.acceleration*1e3,i=new y(0,0,1);this.body.quaternion.vmult(i,i),this.body.applyImpulse(i.scale(n*t),this.body.position)}applyBraking(e,t){if(e===0)return;const n=e*2e3,i=this.body.velocity.clone();i.scale(-n*t),this.body.applyImpulse(i,this.body.position)}applySteering(e,t){if(e===0)return;const n=e*this.stats.handling*10,i=new y(0,n*t,0);this.body.applyTorque(i)}applyNitro(e){const n=new y(0,0,1);this.body.quaternion.vmult(n,n),this.body.applyImpulse(n.scale(3e3*e),this.body.position),this.nitroAmount-=50*e,this.nitroAmount=Math.max(0,this.nitroAmount)}regenerateNitro(e){this.nitroAmount+=20*e,this.nitroAmount=Math.min(this.maxNitro,this.nitroAmount)}checkAirborneStatus(e){const t=this.isAirborne;this.isAirborne=this.body.position.y>2,this.isAirborne?this.airborneTime+=e:(t&&this.airborneTime>.5&&this.handleLanding(),this.airborneTime=0)}detectStunts(e){if(!this.isAirborne||this.airborneTime<.3)return;const n=this.body.angularVelocity.length();n>5&&Date.now()-this.lastStuntTime>1e3&&(this.performStunt(n),this.lastStuntTime=Date.now())}performStunt(e){let t="Barrel Roll",n=100;e>10&&(t="360°",n=200),e>15&&(t="Flat Spin",n=300),this.showStuntNotification(t,n*this.stuntMultiplier),this.stuntMultiplier=Math.min(this.stuntMultiplier+.5,5)}showStuntNotification(e,t){const n=document.getElementById("stunt-display");if(n){const i=n.querySelector(".stunt-text"),s=n.querySelector(".stunt-points");i&&s&&(i.textContent=e,s.textContent=`+${t}`,n.classList.add("active"),setTimeout(()=>{n.classList.remove("active")},2e3))}}handleLanding(){this.stuntMultiplier=1,this.airborneTime>1}handleCollision(e){e.contact.getImpactVelocityAlongNormal()}setPosition(e){this.body.position.set(e.x,e.y,e.z),this.mesh.position.copy(e)}resetVelocity(){this.body.velocity.set(0,0,0),this.body.angularVelocity.set(0,0,0)}getPosition(){return new B(this.body.position.x,this.body.position.y,this.body.position.z)}getRotation(){return new Ai(this.body.quaternion.x,this.body.quaternion.y,this.body.quaternion.z,this.body.quaternion.w)}getVelocity(){return new B(this.body.velocity.x,this.body.velocity.y,this.body.velocity.z)}getSpeed(){return this.speed}getNitroPercentage(){return this.nitroAmount/this.maxNitro*100}getStats(){return this.stats}getId(){return this.id}getModel(){return this.model}isPlayerCar(){return this.id==="player"}dispose(){this.scene.remove(this.mesh),this.physicsWorld.removeBody(this.body)}}class Ug{constructor(e,t,n){this.playerCar=null,this.opponentCars=[],this.cars=[],this.scene=e,this.physicsWorld=t,this.inputManager=n}async init(){}async setupRace(e){this.clearCars(),this.playerCar=new ec("player","mclaren-p1",this.scene,this.physicsWorld),await this.playerCar.init(),this.playerCar.setPosition(new B(0,1,0)),this.cars.push(this.playerCar);for(let t=0;t<e;t++){const n=new ec(`opponent-${t}`,this.getRandomCarModel(),this.scene,this.physicsWorld);await n.init(),n.setPosition(new B((t+1)*4,1,-5)),this.opponentCars.push(n),this.cars.push(n)}}update(e){if(!this.playerCar)return;const t=this.inputManager.getInput();this.playerCar.update(e,t),this.opponentCars.forEach(n=>{const i=this.generateAIInput(n);n.update(e,i)}),this.updateSpeedDisplay(),this.updateNitroDisplay()}updateSpeedDisplay(){if(!this.playerCar)return;const e=document.getElementById("speed-value");if(e){const t=Math.round(this.playerCar.getSpeed()*3.6);e.textContent=t.toString()}}updateNitroDisplay(){if(!this.playerCar)return;const e=document.getElementById("nitro-fill");if(e){const t=this.playerCar.getNitroPercentage();e.style.width=`${t}%`}}generateAIInput(e){return{throttle:.8+Math.random()*.2,brake:0,steering:(Math.random()-.5)*.3,nitro:Math.random()<.1}}getRandomCarModel(){const e=["ferrari-458","lamborghini-huracan","bugatti-veyron","koenigsegg-one"];return e[Math.floor(Math.random()*e.length)]}clearCars(){this.cars.forEach(e=>e.dispose()),this.cars=[],this.opponentCars=[],this.playerCar=null}resetPositions(){this.playerCar&&(this.playerCar.setPosition(new B(0,1,0)),this.playerCar.resetVelocity()),this.opponentCars.forEach((e,t)=>{e.setPosition(new B((t+1)*4,1,-5)),e.resetVelocity()})}getPlayerCar(){return this.playerCar}getAllCars(){return this.cars}}class Fg{constructor(e,t){this.currentTrack=null,this.trackMesh=null,this.checkpoints=[],this.ramps=[],this.tracks={"nevada-desert":{name:"Nevada Desert",location:"Nevada, USA",length:2.8,difficulty:"Medium",weather:"Clear",timeOfDay:"Day"},"tokyo-streets":{name:"Tokyo Neon",location:"Tokyo, Japan",length:2.1,difficulty:"Hard",weather:"Rain",timeOfDay:"Night"},"barcelona-coast":{name:"Barcelona Coast",location:"Barcelona, Spain",length:3.2,difficulty:"Easy",weather:"Sunny",timeOfDay:"Sunset"}},this.scene=e,this.physicsWorld=t}async init(){}async loadTrack(e){if(!this.tracks[e])throw new Error(`Track ${e} not found`);switch(this.clearTrack(),this.currentTrack=this.tracks[e],e){case"nevada-desert":this.generateNevadaDesert();break;case"tokyo-streets":this.generateTokyoStreets();break;case"barcelona-coast":this.generateBarcelonaCoast();break}this.setupEnvironment()}generateNevadaDesert(){this.trackMesh=new Xt;const e=new Mi(1e3,1e3),t=new Bt({color:9139029,map:this.createAsphaltTexture()}),n=new nt(e,t);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,this.trackMesh.add(n),this.addDesertProps(),this.createJumpRamps(),this.setupCheckpoints(),this.scene.add(this.trackMesh)}generateTokyoStreets(){this.trackMesh=new Xt;const e=new Mi(800,800),t=new Bt({color:2894892,map:this.createUrbanTexture()}),n=new nt(e,t);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,this.trackMesh.add(n),this.addTokyoBuildings(),this.createUrbanObstacles(),this.scene.add(this.trackMesh)}generateBarcelonaCoast(){this.trackMesh=new Xt;const e=new Mi(1200,600),t=new Bt({color:4868682,map:this.createCoastalTexture()}),n=new nt(e,t);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,this.trackMesh.add(n),this.addCoastalProps(),this.scene.add(this.trackMesh)}createAsphaltTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d");t.fillStyle="#3C3C3C",t.fillRect(0,0,512,512),t.strokeStyle="#FFFF00",t.lineWidth=4,t.setLineDash([20,20]),t.beginPath(),t.moveTo(256,0),t.lineTo(256,512),t.stroke();const n=new Cr(e);return n.wrapS=qi,n.wrapT=qi,n.repeat.set(10,10),n}createUrbanTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d");t.fillStyle="#2C2C2C",t.fillRect(0,0,512,512),t.strokeStyle="#FFFFFF",t.lineWidth=2;for(let n=0;n<512;n+=64)t.beginPath(),t.moveTo(n,0),t.lineTo(n,512),t.stroke();return new Cr(e)}createCoastalTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d");return t.fillStyle="#4A4A4A",t.fillRect(0,0,512,512),new Cr(e)}addDesertProps(){for(let e=0;e<20;e++){const t=this.createCactus();t.position.set((Math.random()-.5)*800,0,(Math.random()-.5)*800),this.trackMesh.add(t)}for(let e=0;e<30;e++){const t=this.createRock();t.position.set((Math.random()-.5)*900,0,(Math.random()-.5)*900),this.trackMesh.add(t)}}addTokyoBuildings(){for(let e=0;e<15;e++){const t=this.createBuilding();t.position.set((Math.random()-.5)*600,Math.random()*100+50,(Math.random()-.5)*600),this.trackMesh.add(t)}}addCoastalProps(){for(let e=0;e<25;e++){const t=this.createPalmTree();t.position.set((Math.random()-.5)*1e3,0,(Math.random()-.5)*500),this.trackMesh.add(t)}}createCactus(){const e=new $i(1,2,8,8),t=new Bt({color:2969622});return new nt(e,t)}createRock(){const e=new Wi(Math.random()*3+1,8,6),t=new Bt({color:9139029});return new nt(e,t)}createBuilding(){const e=Math.random()*20+10,t=Math.random()*80+40,n=Math.random()*20+10,i=new an(e,t,n),s=new Bt({color:new He().setHSL(.6,.8,.3)}),a=new nt(i,s);return a.castShadow=!0,a}createPalmTree(){const e=new $i(.5,.8,12,8),t=new Bt({color:9127187}),n=new nt(e,t),i=new Wi(4,8,6),s=new Bt({color:2263842}),a=new nt(i,s);a.position.y=8;const c=new Xt;return c.add(n),c.add(a),c}createJumpRamps(){for(let e=0;e<5;e++){const t=this.createRamp();t.position.set((Math.random()-.5)*400,0,(Math.random()-.5)*400),t.rotation.y=Math.random()*Math.PI*2,this.ramps.push(t),this.trackMesh.add(t)}}createRamp(){const e=new an(20,2,40),t=new Bt({color:6710886}),n=new nt(e,t);return n.rotation.x=-Math.PI/8,n.castShadow=!0,n}createUrbanObstacles(){for(let e=0;e<10;e++){const t=this.createBarrier();t.position.set((Math.random()-.5)*300,1,(Math.random()-.5)*300),this.trackMesh.add(t)}}createBarrier(){const e=new an(2,2,10),t=new Bt({color:16729156}),n=new nt(e,t);return n.castShadow=!0,n}setupCheckpoints(){for(let n=0;n<8;n++){const i=n/8*Math.PI*2,s=Math.cos(i)*200,a=Math.sin(i)*200;this.checkpoints.push(new B(s,5,a));const c=new Qr(8,12,16),u=new zs({color:65280,transparent:!0,opacity:.7,side:on}),h=new nt(c,u);h.position.set(s,5,a),h.rotation.x=Math.PI/2,this.trackMesh.add(h)}}setupEnvironment(){this.currentTrack&&(this.createSkybox(),this.setupLighting(),this.setupWeather())}createSkybox(){const e=new Wi(500,32,32),t=new zs({color:this.getSkyColor(),side:Rt}),n=new nt(e,t);this.scene.add(n)}getSkyColor(){if(!this.currentTrack)return 8900331;switch(this.currentTrack.timeOfDay){case"Night":return 1644912;case"Sunset":return 16737095;default:return 8900331}}setupLighting(){this.scene.children.filter(t=>t instanceof eo).forEach(t=>{var n;if(t instanceof Fc)switch((n=this.currentTrack)==null?void 0:n.timeOfDay){case"Night":t.intensity=.2,t.color.setHex(4286945);break;case"Sunset":t.intensity=.8,t.color.setHex(16737095);break;default:t.intensity=1,t.color.setHex(16777215)}})}setupWeather(){var e;((e=this.currentTrack)==null?void 0:e.weather)==="Rain"&&this.createRainEffect()}createRainEffect(){const e=new Pt,t=1e3,n=new Float32Array(t*3);for(let a=0;a<t*3;a+=3)n[a]=(Math.random()-.5)*400,n[a+1]=Math.random()*100+50,n[a+2]=(Math.random()-.5)*400;e.setAttribute("position",new ht(n,3));const i=new Vi({color:8900331,size:.5,transparent:!0,opacity:.6}),s=new Is(e,i);this.scene.add(s)}clearTrack(){this.trackMesh&&(this.scene.remove(this.trackMesh),this.trackMesh=null),this.checkpoints=[],this.ramps=[]}getCurrentTrack(){return this.currentTrack}getCheckpoints(){return this.checkpoints}getRamps(){return this.ramps}isOnRamp(e){return this.ramps.some(t=>e.distanceTo(t.position)<15)}}class Og{constructor(){this.target=null,this.currentMode="chase",this.cameraOffset=new B(0,8,-20),this.lookAtOffset=new B(0,2,0),this.smoothness=.1,this.shakeIntensity=0,this.shakeDecay=.95,this.camera=new Vt(75,window.innerWidth/window.innerHeight,.1,1e3)}init(e){e.add(this.camera),this.camera.position.set(0,10,20),this.camera.lookAt(0,0,0)}setTarget(e){this.target=e}setCameraMode(e){this.currentMode=e,this.updateCameraOffset()}updateCameraOffset(){switch(this.currentMode){case"chase":this.cameraOffset.set(0,8,-20),this.lookAtOffset.set(0,2,0),this.smoothness=.1;break;case"cockpit":this.cameraOffset.set(0,1.5,2),this.lookAtOffset.set(0,1.5,10),this.smoothness=.05;break;case"cinematic":this.cameraOffset.set(-15,12,-10),this.lookAtOffset.set(0,0,20),this.smoothness=.15;break;case"overhead":this.cameraOffset.set(0,50,0),this.lookAtOffset.set(0,0,0),this.smoothness=.08;break}}update(e){if(!this.target)return;const t=this.target.getPosition(),n=this.target.getRotation(),i=new B,s=this.cameraOffset.clone();if(s.applyQuaternion(n),i.copy(t).add(s),this.shakeIntensity>0){const o=new B((Math.random()-.5)*this.shakeIntensity,(Math.random()-.5)*this.shakeIntensity,(Math.random()-.5)*this.shakeIntensity);i.add(o),this.shakeIntensity*=this.shakeDecay}this.camera.position.lerp(i,this.smoothness);const a=new B,c=this.lookAtOffset.clone();c.applyQuaternion(n),a.copy(t).add(c),this.camera.lookAt(a);const u=this.target.getSpeed(),h=75,p=Math.min(u*.5,15);this.camera.fov=h+p,this.camera.updateProjectionMatrix()}addShake(e){this.shakeIntensity=Math.max(this.shakeIntensity,e)}handleResize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}getCamera(){return this.camera}getCurrentMode(){return this.currentMode}}class Bg{constructor(e){this.particleSystems=[],this.explosions=[],this.nitroTrails=[],this.scene=e}init(){}update(e){this.updateParticles(e),this.updateExplosions(e),this.updateNitroTrails(e)}createNitroEffect(e,t){const n=new Xt,i=new Pt,s=50,a=new Float32Array(s*3),c=new Float32Array(s*3),u=new Float32Array(s);for(let o=0;o<s;o++){const l=o*3;a[l]=e.x+(Math.random()-.5)*2,a[l+1]=e.y+Math.random()*2,a[l+2]=e.z+(Math.random()-.5)*2;const d=Math.random();c[l]=1,c[l+1]=d*.5,c[l+2]=0,u[o]=Math.random()*3+1}i.setAttribute("position",new ht(a,3)),i.setAttribute("color",new ht(c,3)),i.setAttribute("size",new ht(u,1));const h=new Vi({size:2,vertexColors:!0,transparent:!0,opacity:.8,blending:Gi}),p=new Is(i,h);return n.add(p),this.nitroTrails.push(n),this.scene.add(n),n}createCrashEffect(e,t){const n=new Xt,i=new Pt,s=Math.floor(t*100),a=new Float32Array(s*3),c=new Float32Array(s*3),u=new Float32Array(s*3);for(let o=0;o<s;o++){const l=o*3;a[l]=e.x,a[l+1]=e.y,a[l+2]=e.z;const d=new B((Math.random()-.5)*2,Math.random(),(Math.random()-.5)*2).normalize();c[l]=d.x*t*20,c[l+1]=d.y*t*20,c[l+2]=d.z*t*20,u[l]=1,u[l+1]=Math.random()*.8,u[l+2]=0}i.setAttribute("position",new ht(a,3)),i.setAttribute("velocity",new ht(c,3)),i.setAttribute("color",new ht(u,3));const h=new Vi({size:4,vertexColors:!0,transparent:!0,opacity:1,blending:Gi}),p=new Is(i,h);return n.add(p),this.explosions.push(n),this.scene.add(n),n}createStuntEffect(e,t){const n=new Xt,i=new Pt,s=30,a=new Float32Array(s*3),c=new Float32Array(s*3);for(let p=0;p<s;p++){const o=p*3;a[o]=e.x+(Math.random()-.5)*10,a[o+1]=e.y+(Math.random()-.5)*10,a[o+2]=e.z+(Math.random()-.5)*10,c[o]=1,c[o+1]=.8,c[o+2]=0}i.setAttribute("position",new ht(a,3)),i.setAttribute("color",new ht(c,3));const u=new Vi({size:3,vertexColors:!0,transparent:!0,opacity:1,blending:Gi}),h=new Is(i,u);return n.add(h),this.scene.add(n),setTimeout(()=>{this.scene.remove(n)},2e3),n}updateParticles(e){this.particleSystems.forEach((t,n)=>{const i=t.geometry.attributes.position.array;for(let s=0;s<i.length;s+=3)i[s+1]-=e*20,i[s+1]<-10&&(this.scene.remove(t),this.particleSystems.splice(n,1));t.geometry.attributes.position.needsUpdate=!0})}updateExplosions(e){this.explosions.forEach((t,n)=>{const i=t.children[0];if(!i)return;const s=i.geometry.attributes.position.array,a=i.geometry.attributes.velocity.array;for(let u=0;u<s.length;u+=3)s[u]+=a[u]*e,s[u+1]+=a[u+1]*e,s[u+2]+=a[u+2]*e,a[u+1]-=9.8*e,a[u]*=.98,a[u+1]*=.98,a[u+2]*=.98;i.geometry.attributes.position.needsUpdate=!0;const c=i.material;c.opacity*=.95,c.opacity<.01&&(this.scene.remove(t),this.explosions.splice(n,1))})}updateNitroTrails(e){this.nitroTrails.forEach((t,n)=>{const i=t.children[0];if(!i)return;const s=i.material;s.opacity*=.92,s.opacity<.1&&(this.scene.remove(t),this.nitroTrails.splice(n,1))})}cleanup(){this.particleSystems.forEach(e=>{this.scene.remove(e)}),this.explosions.forEach(e=>{this.scene.remove(e)}),this.nitroTrails.forEach(e=>{this.scene.remove(e)}),this.particleSystems=[],this.explosions=[],this.nitroTrails=[]}}class zg{constructor(e,t,n){this._isRacing=!1,this.animationId=null,this.clock=new om,this.gameData=e,this.audioManager=t,this.inputManager=n,this.canvas=document.getElementById("game-canvas"),this.setupRenderer(),this.setupScene(),this.initializeManagers()}setupRenderer(){this.renderer=new Uc({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=nc,this.renderer.outputColorSpace=gt,this.renderer.toneMapping=ic,this.renderer.toneMappingExposure=1.2}setupScene(){this.scene=new nm,this.scene.fog=new Jr(8900331,100,1e3);const e=new rm(4210752,.3);this.scene.add(e);const t=new Fc(16777215,1);t.position.set(100,100,50),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.camera.near=.5,t.shadow.camera.far=500,t.shadow.camera.left=-100,t.shadow.camera.right=100,t.shadow.camera.top=100,t.shadow.camera.bottom=-100,this.scene.add(t)}initializeManagers(){this.physicsWorld=new Ng,this.trackManager=new Fg(this.scene,this.physicsWorld),this.carController=new Ug(this.scene,this.physicsWorld,this.inputManager),this.cameraController=new Og,this.effectsManager=new Bg(this.scene),this.raceManager=new am(this.gameData,this.audioManager)}async init(){await this.trackManager.init(),await this.carController.init(),this.cameraController.init(this.scene),this.effectsManager.init(),this.cameraController.setTarget(this.carController.getPlayerCar())}async startRace(e){try{this._isRacing=!0,await this.trackManager.loadTrack(e.track),await this.raceManager.setupRace(e),this.carController.setupRace(e.opponents),await this.raceManager.startCountdown(),this.startGameLoop(),this.audioManager.playRaceMusic()}catch(t){throw console.error("Failed to start race:",t),t}}startGameLoop(){const e=()=>{if(!this._isRacing)return;const t=this.clock.getDelta();this.physicsWorld.step(t),this.carController.update(t),this.cameraController.update(t),this.effectsManager.update(t),this.raceManager.update(t),this.renderer.render(this.scene,this.cameraController.getCamera()),this.animationId=requestAnimationFrame(e)};e()}pauseRace(){this._isRacing=!1,this.animationId&&cancelAnimationFrame(this.animationId),this.audioManager.pauseRaceMusic()}resumeRace(){this._isRacing=!0,this.startGameLoop(),this.audioManager.resumeRaceMusic()}restartRace(){this.pauseRace(),this.carController.resetPositions(),this.raceManager.restart(),this.resumeRace()}endRace(){this._isRacing=!1,this.animationId&&cancelAnimationFrame(this.animationId),this.audioManager.stopRaceMusic()}handleResize(){const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t),this.cameraController.handleResize(e,t)}isRacing(){return this._isRacing}getScene(){return this.scene}getRenderer(){return this.renderer}}class kg{constructor(e,t){this.currentScreen="loading",this.gameData=e,this.audioManager=t}init(){this.setupEventListeners(),this.updatePlayerStats(),this.populateGarage(),this.populateCareerMode()}setupEventListeners(){document.addEventListener("keydown",e=>{e.code==="KeyC"&&console.log("Camera mode switched")}),this.setupMobileControls()}setupMobileControls(){const e=document.getElementById("steering-wheel"),t=document.getElementById("brake-btn"),n=document.getElementById("nitro-btn");e&&this.setupSteeringWheel(e),t&&t.addEventListener("touchstart",()=>{}),n&&n.addEventListener("touchstart",()=>{})}setupSteeringWheel(e){let t=!1,n=0,i=0;e.addEventListener("touchstart",s=>{t=!0;const a=s.touches[0],c=e.getBoundingClientRect(),u=c.left+c.width/2,h=c.top+c.height/2;n=Math.atan2(a.clientY-h,a.clientX-u)}),document.addEventListener("touchmove",s=>{if(!t)return;const a=s.touches[0],c=e.getBoundingClientRect(),u=c.left+c.width/2,h=c.top+c.height/2;i=Math.atan2(a.clientY-h,a.clientX-u)-n,e.style.transform=`rotate(${i}rad)`}),document.addEventListener("touchend",()=>{t=!1,i=0,e.style.transform="rotate(0rad)"})}showMainMenu(){this.hideAllScreens();const e=document.getElementById("main-menu");e&&(e.classList.remove("hidden"),this.currentScreen="main-menu"),this.audioManager.playMenuMusic()}showGameCanvas(){this.hideAllScreens();const e=document.getElementById("game-canvas"),t=document.getElementById("game-ui");e&&e.classList.remove("hidden"),t&&t.classList.remove("hidden"),this.currentScreen="game",this.showMobileControlsIfNeeded()}showGarageScreen(){this.hideAllScreens();const e=document.getElementById("garage-screen");e&&(e.classList.remove("hidden"),this.currentScreen="garage"),this.updateGarageDisplay()}showCareerScreen(){this.hideAllScreens();const e=document.getElementById("career-screen");e&&(e.classList.remove("hidden"),this.currentScreen="career"),this.updateCareerProgress()}showMultiplayerScreen(){alert("Multiplayer mode coming soon!")}showSettingsScreen(){alert("Settings screen coming soon!")}showRaceResults(){const e=document.getElementById("race-results");e&&e.classList.remove("hidden")}hideRaceResults(){const e=document.getElementById("race-results");e&&e.classList.add("hidden")}togglePauseMenu(){const e=document.getElementById("pause-menu");e&&e.classList.toggle("hidden")}hidePauseMenu(){const e=document.getElementById("pause-menu");e&&e.classList.add("hidden")}hideAllScreens(){["main-menu","garage-screen","career-screen","game-canvas","game-ui","race-results","pause-menu"].forEach(t=>{const n=document.getElementById(t);n&&n.classList.add("hidden")})}showMobileControlsIfNeeded(){const e=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),t=document.getElementById("mobile-controls");t&&(e?t.classList.remove("hidden"):t.classList.add("hidden"))}updatePlayerStats(){const e=document.getElementById("player-credits"),t=document.getElementById("player-tokens"),n=document.getElementById("player-league");e&&(e.textContent=this.gameData.getCredits().toLocaleString()),t&&(t.textContent=this.gameData.getTokens().toString()),n&&(n.textContent=this.gameData.getCurrentLeague())}populateGarage(){const e=document.getElementById("car-grid");if(!e)return;const t=this.gameData.getOwnedCars();e.innerHTML="",t.forEach(n=>{const i=this.createCarCard(n);e.appendChild(i)})}createCarCard(e){const t=document.createElement("div");return t.className="car-card",t.innerHTML=`
            <div class="car-preview">
                <div class="car-model">${e.name}</div>
                <div class="car-class">${e.class}-Class</div>
            </div>
            <div class="car-stats-mini">
                <div class="stat-mini">
                    <span>Speed</span>
                    <div class="bar-mini">
                        <div class="fill-mini" style="width: ${e.stats.topSpeed}%"></div>
                    </div>
                </div>
                <div class="stat-mini">
                    <span>Accel</span>
                    <div class="bar-mini">
                        <div class="fill-mini" style="width: ${e.stats.acceleration}%"></div>
                    </div>
                </div>
            </div>
        `,t.addEventListener("click",()=>{this.selectCar(e)}),t}selectCar(e){this.gameData.setSelectedCar(e.id),this.updateGarageDisplay()}updateGarageDisplay(){const e=this.gameData.getSelectedCar();if(!e)return;const t=document.getElementById("selected-car-name"),n=document.getElementById("selected-car-class");t&&(t.textContent=e.name),n&&(n.textContent=`${e.class}-Class`),this.updateCarStatsBars(e.stats)}updateCarStatsBars(e){const t=document.querySelectorAll(".stat-bar .fill"),n=[e.topSpeed,e.acceleration,e.handling,e.nitroEfficiency];t.forEach((i,s)=>{s<n.length&&(i.style.width=`${n[s]}%`)})}populateCareerMode(){const e=document.getElementById("race-nodes");if(!e)return;const t=this.gameData.getCareerProgress();e.innerHTML="",t.seasons.forEach((n,i)=>{n.races.forEach((s,a)=>{const c=this.createRaceNode(s,i,a);e.appendChild(c)})})}createRaceNode(e,t,n){const i=document.createElement("div");return i.className=`race-node ${e.completed?"completed":""} ${e.locked?"locked":""}`,i.style.left=`${n%4*25}%`,i.style.top=`${t*20+n%2*10}%`,i.innerHTML=`
            <div class="node-content">
                <div class="race-number">${n+1}</div>
                <div class="race-name">${e.name}</div>
                <div class="race-stars">
                    ${this.generateStarsHTML(e.stars)}
                </div>
            </div>
        `,e.locked||i.addEventListener("click",()=>{this.startCareerRace(e)}),i}generateStarsHTML(e){let t="";for(let n=0;n<3;n++)n<e?t+='<span class="star earned">⭐</span>':t+='<span class="star">☆</span>';return t}startCareerRace(e){console.log("Starting career race:",e.name)}updateCareerProgress(){const e=document.querySelector(".progress-fill");if(e){const t=this.gameData.getSeasonProgress();e.style.width=`${t}%`}}isMainMenuVisible(){return this.currentScreen==="main-menu"}getCurrentScreen(){return this.currentScreen}}var ki=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Cn={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(r){(function(){var e=function(){this.init()};e.prototype={init:function(){var o=this||t;return o._counter=1e3,o._html5AudioPool=[],o.html5PoolSize=10,o._codecs={},o._howls=[],o._muted=!1,o._volume=1,o._canPlayEvent="canplaythrough",o._navigator=typeof window<"u"&&window.navigator?window.navigator:null,o.masterGain=null,o.noAudio=!1,o.usingWebAudio=!0,o.autoSuspend=!0,o.ctx=null,o.autoUnlock=!0,o._setup(),o},volume:function(o){var l=this||t;if(o=parseFloat(o),l.ctx||p(),typeof o<"u"&&o>=0&&o<=1){if(l._volume=o,l._muted)return l;l.usingWebAudio&&l.masterGain.gain.setValueAtTime(o,t.ctx.currentTime);for(var d=0;d<l._howls.length;d++)if(!l._howls[d]._webAudio)for(var _=l._howls[d]._getSoundIds(),g=0;g<_.length;g++){var m=l._howls[d]._soundById(_[g]);m&&m._node&&(m._node.volume=m._volume*o)}return l}return l._volume},mute:function(o){var l=this||t;l.ctx||p(),l._muted=o,l.usingWebAudio&&l.masterGain.gain.setValueAtTime(o?0:l._volume,t.ctx.currentTime);for(var d=0;d<l._howls.length;d++)if(!l._howls[d]._webAudio)for(var _=l._howls[d]._getSoundIds(),g=0;g<_.length;g++){var m=l._howls[d]._soundById(_[g]);m&&m._node&&(m._node.muted=o?!0:m._muted)}return l},stop:function(){for(var o=this||t,l=0;l<o._howls.length;l++)o._howls[l].stop();return o},unload:function(){for(var o=this||t,l=o._howls.length-1;l>=0;l--)o._howls[l].unload();return o.usingWebAudio&&o.ctx&&typeof o.ctx.close<"u"&&(o.ctx.close(),o.ctx=null,p()),o},codecs:function(o){return(this||t)._codecs[o.replace(/^x-/,"")]},_setup:function(){var o=this||t;if(o.state=o.ctx&&o.ctx.state||"suspended",o._autoSuspend(),!o.usingWebAudio)if(typeof Audio<"u")try{var l=new Audio;typeof l.oncanplaythrough>"u"&&(o._canPlayEvent="canplay")}catch{o.noAudio=!0}else o.noAudio=!0;try{var l=new Audio;l.muted&&(o.noAudio=!0)}catch{}return o.noAudio||o._setupCodecs(),o},_setupCodecs:function(){var o=this||t,l=null;try{l=typeof Audio<"u"?new Audio:null}catch{return o}if(!l||typeof l.canPlayType!="function")return o;var d=l.canPlayType("audio/mpeg;").replace(/^no$/,""),_=o._navigator?o._navigator.userAgent:"",g=_.match(/OPR\/(\d+)/g),m=g&&parseInt(g[0].split("/")[1],10)<33,f=_.indexOf("Safari")!==-1&&_.indexOf("Chrome")===-1,v=_.match(/Version\/(.*?) /),x=f&&v&&parseInt(v[1],10)<15;return o._codecs={mp3:!!(!m&&(d||l.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!d,opus:!!l.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!l.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!l.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(l.canPlayType('audio/wav; codecs="1"')||l.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!l.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!l.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(l.canPlayType("audio/x-m4a;")||l.canPlayType("audio/m4a;")||l.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(l.canPlayType("audio/x-m4b;")||l.canPlayType("audio/m4b;")||l.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(l.canPlayType("audio/x-mp4;")||l.canPlayType("audio/mp4;")||l.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!x&&l.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!x&&l.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!l.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(l.canPlayType("audio/x-flac;")||l.canPlayType("audio/flac;")).replace(/^no$/,"")},o},_unlockAudio:function(){var o=this||t;if(!(o._audioUnlocked||!o.ctx)){o._audioUnlocked=!1,o.autoUnlock=!1,!o._mobileUnloaded&&o.ctx.sampleRate!==44100&&(o._mobileUnloaded=!0,o.unload()),o._scratchBuffer=o.ctx.createBuffer(1,1,22050);var l=function(d){for(;o._html5AudioPool.length<o.html5PoolSize;)try{var _=new Audio;_._unlocked=!0,o._releaseHtml5Audio(_)}catch{o.noAudio=!0;break}for(var g=0;g<o._howls.length;g++)if(!o._howls[g]._webAudio)for(var m=o._howls[g]._getSoundIds(),f=0;f<m.length;f++){var v=o._howls[g]._soundById(m[f]);v&&v._node&&!v._node._unlocked&&(v._node._unlocked=!0,v._node.load())}o._autoResume();var x=o.ctx.createBufferSource();x.buffer=o._scratchBuffer,x.connect(o.ctx.destination),typeof x.start>"u"?x.noteOn(0):x.start(0),typeof o.ctx.resume=="function"&&o.ctx.resume(),x.onended=function(){x.disconnect(0),o._audioUnlocked=!0,document.removeEventListener("touchstart",l,!0),document.removeEventListener("touchend",l,!0),document.removeEventListener("click",l,!0),document.removeEventListener("keydown",l,!0);for(var S=0;S<o._howls.length;S++)o._howls[S]._emit("unlock")}};return document.addEventListener("touchstart",l,!0),document.addEventListener("touchend",l,!0),document.addEventListener("click",l,!0),document.addEventListener("keydown",l,!0),o}},_obtainHtml5Audio:function(){var o=this||t;if(o._html5AudioPool.length)return o._html5AudioPool.pop();var l=new Audio().play();return l&&typeof Promise<"u"&&(l instanceof Promise||typeof l.then=="function")&&l.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(o){var l=this||t;return o._unlocked&&l._html5AudioPool.push(o),l},_autoSuspend:function(){var o=this;if(!(!o.autoSuspend||!o.ctx||typeof o.ctx.suspend>"u"||!t.usingWebAudio)){for(var l=0;l<o._howls.length;l++)if(o._howls[l]._webAudio){for(var d=0;d<o._howls[l]._sounds.length;d++)if(!o._howls[l]._sounds[d]._paused)return o}return o._suspendTimer&&clearTimeout(o._suspendTimer),o._suspendTimer=setTimeout(function(){if(o.autoSuspend){o._suspendTimer=null,o.state="suspending";var _=function(){o.state="suspended",o._resumeAfterSuspend&&(delete o._resumeAfterSuspend,o._autoResume())};o.ctx.suspend().then(_,_)}},3e4),o}},_autoResume:function(){var o=this;if(!(!o.ctx||typeof o.ctx.resume>"u"||!t.usingWebAudio))return o.state==="running"&&o.ctx.state!=="interrupted"&&o._suspendTimer?(clearTimeout(o._suspendTimer),o._suspendTimer=null):o.state==="suspended"||o.state==="running"&&o.ctx.state==="interrupted"?(o.ctx.resume().then(function(){o.state="running";for(var l=0;l<o._howls.length;l++)o._howls[l]._emit("resume")}),o._suspendTimer&&(clearTimeout(o._suspendTimer),o._suspendTimer=null)):o.state==="suspending"&&(o._resumeAfterSuspend=!0),o}};var t=new e,n=function(o){var l=this;if(!o.src||o.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}l.init(o)};n.prototype={init:function(o){var l=this;return t.ctx||p(),l._autoplay=o.autoplay||!1,l._format=typeof o.format!="string"?o.format:[o.format],l._html5=o.html5||!1,l._muted=o.mute||!1,l._loop=o.loop||!1,l._pool=o.pool||5,l._preload=typeof o.preload=="boolean"||o.preload==="metadata"?o.preload:!0,l._rate=o.rate||1,l._sprite=o.sprite||{},l._src=typeof o.src!="string"?o.src:[o.src],l._volume=o.volume!==void 0?o.volume:1,l._xhr={method:o.xhr&&o.xhr.method?o.xhr.method:"GET",headers:o.xhr&&o.xhr.headers?o.xhr.headers:null,withCredentials:o.xhr&&o.xhr.withCredentials?o.xhr.withCredentials:!1},l._duration=0,l._state="unloaded",l._sounds=[],l._endTimers={},l._queue=[],l._playLock=!1,l._onend=o.onend?[{fn:o.onend}]:[],l._onfade=o.onfade?[{fn:o.onfade}]:[],l._onload=o.onload?[{fn:o.onload}]:[],l._onloaderror=o.onloaderror?[{fn:o.onloaderror}]:[],l._onplayerror=o.onplayerror?[{fn:o.onplayerror}]:[],l._onpause=o.onpause?[{fn:o.onpause}]:[],l._onplay=o.onplay?[{fn:o.onplay}]:[],l._onstop=o.onstop?[{fn:o.onstop}]:[],l._onmute=o.onmute?[{fn:o.onmute}]:[],l._onvolume=o.onvolume?[{fn:o.onvolume}]:[],l._onrate=o.onrate?[{fn:o.onrate}]:[],l._onseek=o.onseek?[{fn:o.onseek}]:[],l._onunlock=o.onunlock?[{fn:o.onunlock}]:[],l._onresume=[],l._webAudio=t.usingWebAudio&&!l._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(l),l._autoplay&&l._queue.push({event:"play",action:function(){l.play()}}),l._preload&&l._preload!=="none"&&l.load(),l},load:function(){var o=this,l=null;if(t.noAudio){o._emit("loaderror",null,"No audio support.");return}typeof o._src=="string"&&(o._src=[o._src]);for(var d=0;d<o._src.length;d++){var _,g;if(o._format&&o._format[d])_=o._format[d];else{if(g=o._src[d],typeof g!="string"){o._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}_=/^data:audio\/([^;,]+);/i.exec(g),_||(_=/\.([^.]+)$/.exec(g.split("?",1)[0])),_&&(_=_[1].toLowerCase())}if(_||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),_&&t.codecs(_)){l=o._src[d];break}}if(!l){o._emit("loaderror",null,"No codec support for selected audio sources.");return}return o._src=l,o._state="loading",window.location.protocol==="https:"&&l.slice(0,5)==="http:"&&(o._html5=!0,o._webAudio=!1),new i(o),o._webAudio&&a(o),o},play:function(o,l){var d=this,_=null;if(typeof o=="number")_=o,o=null;else{if(typeof o=="string"&&d._state==="loaded"&&!d._sprite[o])return null;if(typeof o>"u"&&(o="__default",!d._playLock)){for(var g=0,m=0;m<d._sounds.length;m++)d._sounds[m]._paused&&!d._sounds[m]._ended&&(g++,_=d._sounds[m]._id);g===1?o=null:_=null}}var f=_?d._soundById(_):d._inactiveSound();if(!f)return null;if(_&&!o&&(o=f._sprite||"__default"),d._state!=="loaded"){f._sprite=o,f._ended=!1;var v=f._id;return d._queue.push({event:"play",action:function(){d.play(v)}}),v}if(_&&!f._paused)return l||d._loadQueue("play"),f._id;d._webAudio&&t._autoResume();var x=Math.max(0,f._seek>0?f._seek:d._sprite[o][0]/1e3),S=Math.max(0,(d._sprite[o][0]+d._sprite[o][1])/1e3-x),R=S*1e3/Math.abs(f._rate),b=d._sprite[o][0]/1e3,A=(d._sprite[o][0]+d._sprite[o][1])/1e3;f._sprite=o,f._ended=!1;var O=function(){f._paused=!1,f._seek=x,f._start=b,f._stop=A,f._loop=!!(f._loop||d._sprite[o][2])};if(x>=A){d._ended(f);return}var M=f._node;if(d._webAudio){var w=function(){d._playLock=!1,O(),d._refreshBuffer(f);var P=f._muted||d._muted?0:f._volume;M.gain.setValueAtTime(P,t.ctx.currentTime),f._playStart=t.ctx.currentTime,typeof M.bufferSource.start>"u"?f._loop?M.bufferSource.noteGrainOn(0,x,86400):M.bufferSource.noteGrainOn(0,x,S):f._loop?M.bufferSource.start(0,x,86400):M.bufferSource.start(0,x,S),R!==1/0&&(d._endTimers[f._id]=setTimeout(d._ended.bind(d,f),R)),l||setTimeout(function(){d._emit("play",f._id),d._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?w():(d._playLock=!0,d.once("resume",w),d._clearTimer(f._id))}else{var U=function(){M.currentTime=x,M.muted=f._muted||d._muted||t._muted||M.muted,M.volume=f._volume*t.volume(),M.playbackRate=f._rate;try{var P=M.play();if(P&&typeof Promise<"u"&&(P instanceof Promise||typeof P.then=="function")?(d._playLock=!0,O(),P.then(function(){d._playLock=!1,M._unlocked=!0,l?d._loadQueue():d._emit("play",f._id)}).catch(function(){d._playLock=!1,d._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),f._ended=!0,f._paused=!0})):l||(d._playLock=!1,O(),d._emit("play",f._id)),M.playbackRate=f._rate,M.paused){d._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}o!=="__default"||f._loop?d._endTimers[f._id]=setTimeout(d._ended.bind(d,f),R):(d._endTimers[f._id]=function(){d._ended(f),M.removeEventListener("ended",d._endTimers[f._id],!1)},M.addEventListener("ended",d._endTimers[f._id],!1))}catch(L){d._emit("playerror",f._id,L)}};M.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(M.src=d._src,M.load());var z=window&&window.ejecta||!M.readyState&&t._navigator.isCocoonJS;if(M.readyState>=3||z)U();else{d._playLock=!0,d._state="loading";var N=function(){d._state="loaded",U(),M.removeEventListener(t._canPlayEvent,N,!1)};M.addEventListener(t._canPlayEvent,N,!1),d._clearTimer(f._id)}}return f._id},pause:function(o){var l=this;if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"pause",action:function(){l.pause(o)}}),l;for(var d=l._getSoundIds(o),_=0;_<d.length;_++){l._clearTimer(d[_]);var g=l._soundById(d[_]);if(g&&!g._paused&&(g._seek=l.seek(d[_]),g._rateSeek=0,g._paused=!0,l._stopFade(d[_]),g._node))if(l._webAudio){if(!g._node.bufferSource)continue;typeof g._node.bufferSource.stop>"u"?g._node.bufferSource.noteOff(0):g._node.bufferSource.stop(0),l._cleanBuffer(g._node)}else(!isNaN(g._node.duration)||g._node.duration===1/0)&&g._node.pause();arguments[1]||l._emit("pause",g?g._id:null)}return l},stop:function(o,l){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"stop",action:function(){d.stop(o)}}),d;for(var _=d._getSoundIds(o),g=0;g<_.length;g++){d._clearTimer(_[g]);var m=d._soundById(_[g]);m&&(m._seek=m._start||0,m._rateSeek=0,m._paused=!0,m._ended=!0,d._stopFade(_[g]),m._node&&(d._webAudio?m._node.bufferSource&&(typeof m._node.bufferSource.stop>"u"?m._node.bufferSource.noteOff(0):m._node.bufferSource.stop(0),d._cleanBuffer(m._node)):(!isNaN(m._node.duration)||m._node.duration===1/0)&&(m._node.currentTime=m._start||0,m._node.pause(),m._node.duration===1/0&&d._clearSound(m._node))),l||d._emit("stop",m._id))}return d},mute:function(o,l){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"mute",action:function(){d.mute(o,l)}}),d;if(typeof l>"u")if(typeof o=="boolean")d._muted=o;else return d._muted;for(var _=d._getSoundIds(l),g=0;g<_.length;g++){var m=d._soundById(_[g]);m&&(m._muted=o,m._interval&&d._stopFade(m._id),d._webAudio&&m._node?m._node.gain.setValueAtTime(o?0:m._volume,t.ctx.currentTime):m._node&&(m._node.muted=t._muted?!0:o),d._emit("mute",m._id))}return d},volume:function(){var o=this,l=arguments,d,_;if(l.length===0)return o._volume;if(l.length===1||l.length===2&&typeof l[1]>"u"){var g=o._getSoundIds(),m=g.indexOf(l[0]);m>=0?_=parseInt(l[0],10):d=parseFloat(l[0])}else l.length>=2&&(d=parseFloat(l[0]),_=parseInt(l[1],10));var f;if(typeof d<"u"&&d>=0&&d<=1){if(o._state!=="loaded"||o._playLock)return o._queue.push({event:"volume",action:function(){o.volume.apply(o,l)}}),o;typeof _>"u"&&(o._volume=d),_=o._getSoundIds(_);for(var v=0;v<_.length;v++)f=o._soundById(_[v]),f&&(f._volume=d,l[2]||o._stopFade(_[v]),o._webAudio&&f._node&&!f._muted?f._node.gain.setValueAtTime(d,t.ctx.currentTime):f._node&&!f._muted&&(f._node.volume=d*t.volume()),o._emit("volume",f._id))}else return f=_?o._soundById(_):o._sounds[0],f?f._volume:0;return o},fade:function(o,l,d,_){var g=this;if(g._state!=="loaded"||g._playLock)return g._queue.push({event:"fade",action:function(){g.fade(o,l,d,_)}}),g;o=Math.min(Math.max(0,parseFloat(o)),1),l=Math.min(Math.max(0,parseFloat(l)),1),d=parseFloat(d),g.volume(o,_);for(var m=g._getSoundIds(_),f=0;f<m.length;f++){var v=g._soundById(m[f]);if(v){if(_||g._stopFade(m[f]),g._webAudio&&!v._muted){var x=t.ctx.currentTime,S=x+d/1e3;v._volume=o,v._node.gain.setValueAtTime(o,x),v._node.gain.linearRampToValueAtTime(l,S)}g._startFadeInterval(v,o,l,d,m[f],typeof _>"u")}}return g},_startFadeInterval:function(o,l,d,_,g,m){var f=this,v=l,x=d-l,S=Math.abs(x/.01),R=Math.max(4,S>0?_/S:_),b=Date.now();o._fadeTo=d,o._interval=setInterval(function(){var A=(Date.now()-b)/_;b=Date.now(),v+=x*A,v=Math.round(v*100)/100,x<0?v=Math.max(d,v):v=Math.min(d,v),f._webAudio?o._volume=v:f.volume(v,o._id,!0),m&&(f._volume=v),(d<l&&v<=d||d>l&&v>=d)&&(clearInterval(o._interval),o._interval=null,o._fadeTo=null,f.volume(d,o._id),f._emit("fade",o._id))},R)},_stopFade:function(o){var l=this,d=l._soundById(o);return d&&d._interval&&(l._webAudio&&d._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(d._interval),d._interval=null,l.volume(d._fadeTo,o),d._fadeTo=null,l._emit("fade",o)),l},loop:function(){var o=this,l=arguments,d,_,g;if(l.length===0)return o._loop;if(l.length===1)if(typeof l[0]=="boolean")d=l[0],o._loop=d;else return g=o._soundById(parseInt(l[0],10)),g?g._loop:!1;else l.length===2&&(d=l[0],_=parseInt(l[1],10));for(var m=o._getSoundIds(_),f=0;f<m.length;f++)g=o._soundById(m[f]),g&&(g._loop=d,o._webAudio&&g._node&&g._node.bufferSource&&(g._node.bufferSource.loop=d,d&&(g._node.bufferSource.loopStart=g._start||0,g._node.bufferSource.loopEnd=g._stop,o.playing(m[f])&&(o.pause(m[f],!0),o.play(m[f],!0)))));return o},rate:function(){var o=this,l=arguments,d,_;if(l.length===0)_=o._sounds[0]._id;else if(l.length===1){var g=o._getSoundIds(),m=g.indexOf(l[0]);m>=0?_=parseInt(l[0],10):d=parseFloat(l[0])}else l.length===2&&(d=parseFloat(l[0]),_=parseInt(l[1],10));var f;if(typeof d=="number"){if(o._state!=="loaded"||o._playLock)return o._queue.push({event:"rate",action:function(){o.rate.apply(o,l)}}),o;typeof _>"u"&&(o._rate=d),_=o._getSoundIds(_);for(var v=0;v<_.length;v++)if(f=o._soundById(_[v]),f){o.playing(_[v])&&(f._rateSeek=o.seek(_[v]),f._playStart=o._webAudio?t.ctx.currentTime:f._playStart),f._rate=d,o._webAudio&&f._node&&f._node.bufferSource?f._node.bufferSource.playbackRate.setValueAtTime(d,t.ctx.currentTime):f._node&&(f._node.playbackRate=d);var x=o.seek(_[v]),S=(o._sprite[f._sprite][0]+o._sprite[f._sprite][1])/1e3-x,R=S*1e3/Math.abs(f._rate);(o._endTimers[_[v]]||!f._paused)&&(o._clearTimer(_[v]),o._endTimers[_[v]]=setTimeout(o._ended.bind(o,f),R)),o._emit("rate",f._id)}}else return f=o._soundById(_),f?f._rate:o._rate;return o},seek:function(){var o=this,l=arguments,d,_;if(l.length===0)o._sounds.length&&(_=o._sounds[0]._id);else if(l.length===1){var g=o._getSoundIds(),m=g.indexOf(l[0]);m>=0?_=parseInt(l[0],10):o._sounds.length&&(_=o._sounds[0]._id,d=parseFloat(l[0]))}else l.length===2&&(d=parseFloat(l[0]),_=parseInt(l[1],10));if(typeof _>"u")return 0;if(typeof d=="number"&&(o._state!=="loaded"||o._playLock))return o._queue.push({event:"seek",action:function(){o.seek.apply(o,l)}}),o;var f=o._soundById(_);if(f)if(typeof d=="number"&&d>=0){var v=o.playing(_);v&&o.pause(_,!0),f._seek=d,f._ended=!1,o._clearTimer(_),!o._webAudio&&f._node&&!isNaN(f._node.duration)&&(f._node.currentTime=d);var x=function(){v&&o.play(_,!0),o._emit("seek",_)};if(v&&!o._webAudio){var S=function(){o._playLock?setTimeout(S,0):x()};setTimeout(S,0)}else x()}else if(o._webAudio){var R=o.playing(_)?t.ctx.currentTime-f._playStart:0,b=f._rateSeek?f._rateSeek-f._seek:0;return f._seek+(b+R*Math.abs(f._rate))}else return f._node.currentTime;return o},playing:function(o){var l=this;if(typeof o=="number"){var d=l._soundById(o);return d?!d._paused:!1}for(var _=0;_<l._sounds.length;_++)if(!l._sounds[_]._paused)return!0;return!1},duration:function(o){var l=this,d=l._duration,_=l._soundById(o);return _&&(d=l._sprite[_._sprite][1]/1e3),d},state:function(){return this._state},unload:function(){for(var o=this,l=o._sounds,d=0;d<l.length;d++)l[d]._paused||o.stop(l[d]._id),o._webAudio||(o._clearSound(l[d]._node),l[d]._node.removeEventListener("error",l[d]._errorFn,!1),l[d]._node.removeEventListener(t._canPlayEvent,l[d]._loadFn,!1),l[d]._node.removeEventListener("ended",l[d]._endFn,!1),t._releaseHtml5Audio(l[d]._node)),delete l[d]._node,o._clearTimer(l[d]._id);var _=t._howls.indexOf(o);_>=0&&t._howls.splice(_,1);var g=!0;for(d=0;d<t._howls.length;d++)if(t._howls[d]._src===o._src||o._src.indexOf(t._howls[d]._src)>=0){g=!1;break}return s&&g&&delete s[o._src],t.noAudio=!1,o._state="unloaded",o._sounds=[],o=null,null},on:function(o,l,d,_){var g=this,m=g["_on"+o];return typeof l=="function"&&m.push(_?{id:d,fn:l,once:_}:{id:d,fn:l}),g},off:function(o,l,d){var _=this,g=_["_on"+o],m=0;if(typeof l=="number"&&(d=l,l=null),l||d)for(m=0;m<g.length;m++){var f=d===g[m].id;if(l===g[m].fn&&f||!l&&f){g.splice(m,1);break}}else if(o)_["_on"+o]=[];else{var v=Object.keys(_);for(m=0;m<v.length;m++)v[m].indexOf("_on")===0&&Array.isArray(_[v[m]])&&(_[v[m]]=[])}return _},once:function(o,l,d){var _=this;return _.on(o,l,d,1),_},_emit:function(o,l,d){for(var _=this,g=_["_on"+o],m=g.length-1;m>=0;m--)(!g[m].id||g[m].id===l||o==="load")&&(setTimeout((function(f){f.call(this,l,d)}).bind(_,g[m].fn),0),g[m].once&&_.off(o,g[m].fn,g[m].id));return _._loadQueue(o),_},_loadQueue:function(o){var l=this;if(l._queue.length>0){var d=l._queue[0];d.event===o&&(l._queue.shift(),l._loadQueue()),o||d.action()}return l},_ended:function(o){var l=this,d=o._sprite;if(!l._webAudio&&o._node&&!o._node.paused&&!o._node.ended&&o._node.currentTime<o._stop)return setTimeout(l._ended.bind(l,o),100),l;var _=!!(o._loop||l._sprite[d][2]);if(l._emit("end",o._id),!l._webAudio&&_&&l.stop(o._id,!0).play(o._id),l._webAudio&&_){l._emit("play",o._id),o._seek=o._start||0,o._rateSeek=0,o._playStart=t.ctx.currentTime;var g=(o._stop-o._start)*1e3/Math.abs(o._rate);l._endTimers[o._id]=setTimeout(l._ended.bind(l,o),g)}return l._webAudio&&!_&&(o._paused=!0,o._ended=!0,o._seek=o._start||0,o._rateSeek=0,l._clearTimer(o._id),l._cleanBuffer(o._node),t._autoSuspend()),!l._webAudio&&!_&&l.stop(o._id,!0),l},_clearTimer:function(o){var l=this;if(l._endTimers[o]){if(typeof l._endTimers[o]!="function")clearTimeout(l._endTimers[o]);else{var d=l._soundById(o);d&&d._node&&d._node.removeEventListener("ended",l._endTimers[o],!1)}delete l._endTimers[o]}return l},_soundById:function(o){for(var l=this,d=0;d<l._sounds.length;d++)if(o===l._sounds[d]._id)return l._sounds[d];return null},_inactiveSound:function(){var o=this;o._drain();for(var l=0;l<o._sounds.length;l++)if(o._sounds[l]._ended)return o._sounds[l].reset();return new i(o)},_drain:function(){var o=this,l=o._pool,d=0,_=0;if(!(o._sounds.length<l)){for(_=0;_<o._sounds.length;_++)o._sounds[_]._ended&&d++;for(_=o._sounds.length-1;_>=0;_--){if(d<=l)return;o._sounds[_]._ended&&(o._webAudio&&o._sounds[_]._node&&o._sounds[_]._node.disconnect(0),o._sounds.splice(_,1),d--)}}},_getSoundIds:function(o){var l=this;if(typeof o>"u"){for(var d=[],_=0;_<l._sounds.length;_++)d.push(l._sounds[_]._id);return d}else return[o]},_refreshBuffer:function(o){var l=this;return o._node.bufferSource=t.ctx.createBufferSource(),o._node.bufferSource.buffer=s[l._src],o._panner?o._node.bufferSource.connect(o._panner):o._node.bufferSource.connect(o._node),o._node.bufferSource.loop=o._loop,o._loop&&(o._node.bufferSource.loopStart=o._start||0,o._node.bufferSource.loopEnd=o._stop||0),o._node.bufferSource.playbackRate.setValueAtTime(o._rate,t.ctx.currentTime),l},_cleanBuffer:function(o){var l=this,d=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!o.bufferSource)return l;if(t._scratchBuffer&&o.bufferSource&&(o.bufferSource.onended=null,o.bufferSource.disconnect(0),d))try{o.bufferSource.buffer=t._scratchBuffer}catch{}return o.bufferSource=null,l},_clearSound:function(o){var l=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);l||(o.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var i=function(o){this._parent=o,this.init()};i.prototype={init:function(){var o=this,l=o._parent;return o._muted=l._muted,o._loop=l._loop,o._volume=l._volume,o._rate=l._rate,o._seek=0,o._paused=!0,o._ended=!0,o._sprite="__default",o._id=++t._counter,l._sounds.push(o),o.create(),o},create:function(){var o=this,l=o._parent,d=t._muted||o._muted||o._parent._muted?0:o._volume;return l._webAudio?(o._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),o._node.gain.setValueAtTime(d,t.ctx.currentTime),o._node.paused=!0,o._node.connect(t.masterGain)):t.noAudio||(o._node=t._obtainHtml5Audio(),o._errorFn=o._errorListener.bind(o),o._node.addEventListener("error",o._errorFn,!1),o._loadFn=o._loadListener.bind(o),o._node.addEventListener(t._canPlayEvent,o._loadFn,!1),o._endFn=o._endListener.bind(o),o._node.addEventListener("ended",o._endFn,!1),o._node.src=l._src,o._node.preload=l._preload===!0?"auto":l._preload,o._node.volume=d*t.volume(),o._node.load()),o},reset:function(){var o=this,l=o._parent;return o._muted=l._muted,o._loop=l._loop,o._volume=l._volume,o._rate=l._rate,o._seek=0,o._rateSeek=0,o._paused=!0,o._ended=!0,o._sprite="__default",o._id=++t._counter,o},_errorListener:function(){var o=this;o._parent._emit("loaderror",o._id,o._node.error?o._node.error.code:0),o._node.removeEventListener("error",o._errorFn,!1)},_loadListener:function(){var o=this,l=o._parent;l._duration=Math.ceil(o._node.duration*10)/10,Object.keys(l._sprite).length===0&&(l._sprite={__default:[0,l._duration*1e3]}),l._state!=="loaded"&&(l._state="loaded",l._emit("load"),l._loadQueue()),o._node.removeEventListener(t._canPlayEvent,o._loadFn,!1)},_endListener:function(){var o=this,l=o._parent;l._duration===1/0&&(l._duration=Math.ceil(o._node.duration*10)/10,l._sprite.__default[1]===1/0&&(l._sprite.__default[1]=l._duration*1e3),l._ended(o)),o._node.removeEventListener("ended",o._endFn,!1)}};var s={},a=function(o){var l=o._src;if(s[l]){o._duration=s[l].duration,h(o);return}if(/^data:[^;]+;base64,/.test(l)){for(var d=atob(l.split(",")[1]),_=new Uint8Array(d.length),g=0;g<d.length;++g)_[g]=d.charCodeAt(g);u(_.buffer,o)}else{var m=new XMLHttpRequest;m.open(o._xhr.method,l,!0),m.withCredentials=o._xhr.withCredentials,m.responseType="arraybuffer",o._xhr.headers&&Object.keys(o._xhr.headers).forEach(function(f){m.setRequestHeader(f,o._xhr.headers[f])}),m.onload=function(){var f=(m.status+"")[0];if(f!=="0"&&f!=="2"&&f!=="3"){o._emit("loaderror",null,"Failed loading audio file with status: "+m.status+".");return}u(m.response,o)},m.onerror=function(){o._webAudio&&(o._html5=!0,o._webAudio=!1,o._sounds=[],delete s[l],o.load())},c(m)}},c=function(o){try{o.send()}catch{o.onerror()}},u=function(o,l){var d=function(){l._emit("loaderror",null,"Decoding audio data failed.")},_=function(g){g&&l._sounds.length>0?(s[l._src]=g,h(l,g)):d()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(o).then(_).catch(d):t.ctx.decodeAudioData(o,_,d)},h=function(o,l){l&&!o._duration&&(o._duration=l.duration),Object.keys(o._sprite).length===0&&(o._sprite={__default:[0,o._duration*1e3]}),o._state!=="loaded"&&(o._state="loaded",o._emit("load"),o._loadQueue())},p=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var o=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),l=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=l?parseInt(l[1],10):null;if(o&&d&&d<9){var _=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!_&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};r.Howler=t,r.Howl=n,typeof ki<"u"?(ki.HowlerGlobal=e,ki.Howler=t,ki.Howl=n,ki.Sound=i):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=i)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var i=n._howls.length-1;i>=0;i--)n._howls[i].stereo(t);return n},HowlerGlobal.prototype.pos=function(t,n,i){var s=this;if(!s.ctx||!s.ctx.listener)return s;if(n=typeof n!="number"?s._pos[1]:n,i=typeof i!="number"?s._pos[2]:i,typeof t=="number")s._pos=[t,n,i],typeof s.ctx.listener.positionX<"u"?(s.ctx.listener.positionX.setTargetAtTime(s._pos[0],Howler.ctx.currentTime,.1),s.ctx.listener.positionY.setTargetAtTime(s._pos[1],Howler.ctx.currentTime,.1),s.ctx.listener.positionZ.setTargetAtTime(s._pos[2],Howler.ctx.currentTime,.1)):s.ctx.listener.setPosition(s._pos[0],s._pos[1],s._pos[2]);else return s._pos;return s},HowlerGlobal.prototype.orientation=function(t,n,i,s,a,c){var u=this;if(!u.ctx||!u.ctx.listener)return u;var h=u._orientation;if(n=typeof n!="number"?h[1]:n,i=typeof i!="number"?h[2]:i,s=typeof s!="number"?h[3]:s,a=typeof a!="number"?h[4]:a,c=typeof c!="number"?h[5]:c,typeof t=="number")u._orientation=[t,n,i,s,a,c],typeof u.ctx.listener.forwardX<"u"?(u.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),u.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),u.ctx.listener.forwardZ.setTargetAtTime(i,Howler.ctx.currentTime,.1),u.ctx.listener.upX.setTargetAtTime(s,Howler.ctx.currentTime,.1),u.ctx.listener.upY.setTargetAtTime(a,Howler.ctx.currentTime,.1),u.ctx.listener.upZ.setTargetAtTime(c,Howler.ctx.currentTime,.1)):u.ctx.listener.setOrientation(t,n,i,s,a,c);else return h;return u},Howl.prototype.init=function(t){return function(n){var i=this;return i._orientation=n.orientation||[1,0,0],i._stereo=n.stereo||null,i._pos=n.pos||null,i._pannerAttr={coneInnerAngle:typeof n.coneInnerAngle<"u"?n.coneInnerAngle:360,coneOuterAngle:typeof n.coneOuterAngle<"u"?n.coneOuterAngle:360,coneOuterGain:typeof n.coneOuterGain<"u"?n.coneOuterGain:0,distanceModel:typeof n.distanceModel<"u"?n.distanceModel:"inverse",maxDistance:typeof n.maxDistance<"u"?n.maxDistance:1e4,panningModel:typeof n.panningModel<"u"?n.panningModel:"HRTF",refDistance:typeof n.refDistance<"u"?n.refDistance:1,rolloffFactor:typeof n.rolloffFactor<"u"?n.rolloffFactor:1},i._onstereo=n.onstereo?[{fn:n.onstereo}]:[],i._onpos=n.onpos?[{fn:n.onpos}]:[],i._onorientation=n.onorientation?[{fn:n.onorientation}]:[],t.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,n){var i=this;if(!i._webAudio)return i;if(i._state!=="loaded")return i._queue.push({event:"stereo",action:function(){i.stereo(t,n)}}),i;var s=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof n>"u")if(typeof t=="number")i._stereo=t,i._pos=[t,0,0];else return i._stereo;for(var a=i._getSoundIds(n),c=0;c<a.length;c++){var u=i._soundById(a[c]);if(u)if(typeof t=="number")u._stereo=t,u._pos=[t,0,0],u._node&&(u._pannerAttr.panningModel="equalpower",(!u._panner||!u._panner.pan)&&e(u,s),s==="spatial"?typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):u._panner.setPosition(t,0,0):u._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),i._emit("stereo",u._id);else return u._stereo}return i},Howl.prototype.pos=function(t,n,i,s){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"pos",action:function(){a.pos(t,n,i,s)}}),a;if(n=typeof n!="number"?0:n,i=typeof i!="number"?-.5:i,typeof s>"u")if(typeof t=="number")a._pos=[t,n,i];else return a._pos;for(var c=a._getSoundIds(s),u=0;u<c.length;u++){var h=a._soundById(c[u]);if(h)if(typeof t=="number")h._pos=[t,n,i],h._node&&((!h._panner||h._panner.pan)&&e(h,"spatial"),typeof h._panner.positionX<"u"?(h._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),h._panner.positionZ.setValueAtTime(i,Howler.ctx.currentTime)):h._panner.setPosition(t,n,i)),a._emit("pos",h._id);else return h._pos}return a},Howl.prototype.orientation=function(t,n,i,s){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"orientation",action:function(){a.orientation(t,n,i,s)}}),a;if(n=typeof n!="number"?a._orientation[1]:n,i=typeof i!="number"?a._orientation[2]:i,typeof s>"u")if(typeof t=="number")a._orientation=[t,n,i];else return a._orientation;for(var c=a._getSoundIds(s),u=0;u<c.length;u++){var h=a._soundById(c[u]);if(h)if(typeof t=="number")h._orientation=[t,n,i],h._node&&(h._panner||(h._pos||(h._pos=a._pos||[0,0,-.5]),e(h,"spatial")),typeof h._panner.orientationX<"u"?(h._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),h._panner.orientationZ.setValueAtTime(i,Howler.ctx.currentTime)):h._panner.setOrientation(t,n,i)),a._emit("orientation",h._id);else return h._orientation}return a},Howl.prototype.pannerAttr=function(){var t=this,n=arguments,i,s,a;if(!t._webAudio)return t;if(n.length===0)return t._pannerAttr;if(n.length===1)if(typeof n[0]=="object")i=n[0],typeof s>"u"&&(i.pannerAttr||(i.pannerAttr={coneInnerAngle:i.coneInnerAngle,coneOuterAngle:i.coneOuterAngle,coneOuterGain:i.coneOuterGain,distanceModel:i.distanceModel,maxDistance:i.maxDistance,refDistance:i.refDistance,rolloffFactor:i.rolloffFactor,panningModel:i.panningModel}),t._pannerAttr={coneInnerAngle:typeof i.pannerAttr.coneInnerAngle<"u"?i.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof i.pannerAttr.coneOuterAngle<"u"?i.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof i.pannerAttr.coneOuterGain<"u"?i.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof i.pannerAttr.distanceModel<"u"?i.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof i.pannerAttr.maxDistance<"u"?i.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof i.pannerAttr.refDistance<"u"?i.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof i.pannerAttr.rolloffFactor<"u"?i.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof i.pannerAttr.panningModel<"u"?i.pannerAttr.panningModel:t._panningModel});else return a=t._soundById(parseInt(n[0],10)),a?a._pannerAttr:t._pannerAttr;else n.length===2&&(i=n[0],s=parseInt(n[1],10));for(var c=t._getSoundIds(s),u=0;u<c.length;u++)if(a=t._soundById(c[u]),a){var h=a._pannerAttr;h={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:h.coneInnerAngle,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:h.coneOuterAngle,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:h.coneOuterGain,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:h.distanceModel,maxDistance:typeof i.maxDistance<"u"?i.maxDistance:h.maxDistance,refDistance:typeof i.refDistance<"u"?i.refDistance:h.refDistance,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:h.rolloffFactor,panningModel:typeof i.panningModel<"u"?i.panningModel:h.panningModel};var p=a._panner;p||(a._pos||(a._pos=t._pos||[0,0,-.5]),e(a,"spatial"),p=a._panner),p.coneInnerAngle=h.coneInnerAngle,p.coneOuterAngle=h.coneOuterAngle,p.coneOuterGain=h.coneOuterGain,p.distanceModel=h.distanceModel,p.maxDistance=h.maxDistance,p.refDistance=h.refDistance,p.rolloffFactor=h.rolloffFactor,p.panningModel=h.panningModel}return t},Sound.prototype.init=function(t){return function(){var n=this,i=n._parent;n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,t.call(this),n._stereo?i.stereo(n._stereo):n._pos&&i.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var n=this,i=n._parent;return n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,n._stereo?i.stereo(n._stereo):n._pos?i.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,i._refreshBuffer(n)),t.call(this)}}(Sound.prototype.reset);var e=function(t,n){n=n||"spatial",n==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()})(Cn);class Gg{constructor(){this.sounds={},this.musicVolume=.7,this.sfxVolume=.8,this.currentMusic=null,this.engineSounds={}}async init(){Cn.Howler.volume(1),this.sounds.menuMusic=new Cn.Howl({src:["https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"],loop:!0,volume:this.musicVolume,onloaderror:()=>{console.log("Menu music failed to load, using silence")}}),this.sounds.raceMusic=new Cn.Howl({src:["https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"],loop:!0,volume:this.musicVolume,onloaderror:()=>{console.log("Race music failed to load, using silence")}}),this.loadSoundEffects(),this.loadEngineSounds()}loadSoundEffects(){["countdownBeep","lapComplete","raceStart","nitroActivate","crash","stunt","menuSelect","menuHover"].forEach(t=>{this.sounds[t]=new Cn.Howl({src:[`/audio/${t}.wav`],volume:this.sfxVolume,onloaderror:()=>{this.sounds[t]=new Cn.Howl({src:["data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT"]})}})})}loadEngineSounds(){["mclaren-p1","ferrari-458","lamborghini-huracan","bugatti-veyron","koenigsegg-one"].forEach(t=>{this.engineSounds[t]=new Cn.Howl({src:[`/audio/engines/${t}.wav`],loop:!0,volume:.6,onloaderror:()=>{this.engineSounds[t]=new Cn.Howl({src:["data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT"]})}})})}playMenuMusic(){this.stopCurrentMusic(),this.currentMusic=this.sounds.menuMusic,this.currentMusic&&this.currentMusic.play()}playRaceMusic(){this.stopCurrentMusic(),this.currentMusic=this.sounds.raceMusic,this.currentMusic&&this.currentMusic.play()}stopRaceMusic(){this.currentMusic&&this.currentMusic.stop()}pauseRaceMusic(){this.currentMusic&&this.currentMusic.pause()}resumeRaceMusic(){this.currentMusic&&this.currentMusic.play()}stopCurrentMusic(){this.currentMusic&&this.currentMusic.stop()}playCountdownBeep(){this.playSound("countdownBeep")}playLapComplete(){this.playSound("lapComplete")}playRaceStart(){this.playSound("raceStart")}playNitroActivate(){this.playSound("nitroActivate")}playCrash(e=1){const t=this.sounds.crash;t&&(t.volume(this.sfxVolume*e),t.play())}playStunt(){this.playSound("stunt")}playMenuSelect(){this.playSound("menuSelect")}playMenuHover(){this.playSound("menuHover")}playEngineSound(e,t){const n=this.engineSounds[e];if(n){const i=.5+t/8e3*1.5;n.rate(i),n.playing()||n.play()}}stopEngineSound(e){const t=this.engineSounds[e];t&&t.stop()}playSound(e){const t=this.sounds[e];t&&t.play()}setMusicVolume(e){this.musicVolume=Math.max(0,Math.min(1,e)),this.currentMusic&&this.currentMusic.volume(this.musicVolume)}setSFXVolume(e){this.sfxVolume=Math.max(0,Math.min(1,e)),Object.values(this.sounds).forEach(t=>{t!==this.currentMusic&&t.volume(this.sfxVolume)})}getMusicVolume(){return this.musicVolume}getSFXVolume(){return this.sfxVolume}}class Hg{constructor(){this.keys={},this.gamepadIndex=null,this.touchInput={steering:0,throttle:0,brake:!1,nitro:!1}}init(){this.setupKeyboardListeners(),this.setupGamepadListeners(),this.setupTouchListeners()}setupKeyboardListeners(){document.addEventListener("keydown",e=>{this.keys[e.code]=!0}),document.addEventListener("keyup",e=>{this.keys[e.code]=!1})}setupGamepadListeners(){window.addEventListener("gamepadconnected",e=>{console.log("Gamepad connected:",e.gamepad.id),this.gamepadIndex=e.gamepad.index}),window.addEventListener("gamepaddisconnected",e=>{console.log("Gamepad disconnected:",e.gamepad.id),this.gamepadIndex===e.gamepad.index&&(this.gamepadIndex=null)})}setupTouchListeners(){}getInput(){var t,n,i;const e={throttle:0,brake:0,steering:0,nitro:!1};if((this.keys.ArrowUp||this.keys.KeyW)&&(e.throttle=1),(this.keys.ArrowDown||this.keys.KeyS)&&(e.brake=1),(this.keys.ArrowLeft||this.keys.KeyA)&&(e.steering=-1),(this.keys.ArrowRight||this.keys.KeyD)&&(e.steering=1),(this.keys.Space||this.keys.ShiftLeft)&&(e.nitro=!0),this.gamepadIndex!==null){const s=navigator.getGamepads()[this.gamepadIndex];s&&(e.throttle=Math.max(e.throttle,((t=s.buttons[7])==null?void 0:t.value)||0),e.brake=Math.max(e.brake,((n=s.buttons[6])==null?void 0:n.value)||0),e.steering=s.axes[0]||e.steering,(i=s.buttons[0])!=null&&i.pressed&&(e.nitro=!0))}return e.steering=Math.max(-1,Math.min(1,e.steering+this.touchInput.steering)),e.throttle=Math.max(e.throttle,this.touchInput.throttle),this.touchInput.brake&&(e.brake=1),this.touchInput.nitro&&(e.nitro=!0),e}updateTouchInput(e,t,n,i){this.touchInput.steering=e,this.touchInput.throttle=t,this.touchInput.brake=n,this.touchInput.nitro=i}isKeyPressed(e){return this.keys[e]||!1}hasGamepad(){return this.gamepadIndex!==null}}class Vg{constructor(){this.achievements=[],this.loadGameData()}loadGameData(){const e=localStorage.getItem("asphalt-racing-save");if(e){const t=JSON.parse(e);this.playerProgress=t.playerProgress,this.ownedCars=t.ownedCars,this.careerSeasons=t.careerSeasons,this.achievements=t.achievements||[]}else this.initializeDefaultData()}initializeDefaultData(){this.playerProgress={level:1,experience:0,credits:5e4,tokens:100,currentLeague:"Amateur",leagueRating:1200,selectedCarId:"mclaren-p1"},this.ownedCars=[{id:"mclaren-p1",name:"McLaren P1",class:"S",stats:{topSpeed:95,acceleration:88,handling:82,nitroEfficiency:90},price:0,owned:!0,upgrades:{engine:0,tires:0,exhaust:0,ecu:0}},{id:"ferrari-458",name:"Ferrari 458 Italia",class:"A",stats:{topSpeed:85,acceleration:82,handling:88,nitroEfficiency:85},price:0,owned:!0,upgrades:{engine:0,tires:0,exhaust:0,ecu:0}},{id:"lamborghini-huracan",name:"Lamborghini Huracán",class:"A",stats:{topSpeed:88,acceleration:85,handling:80,nitroEfficiency:88},price:0,owned:!0,upgrades:{engine:0,tires:0,exhaust:0,ecu:0}}],this.careerSeasons=this.generateCareerSeasons(),this.saveGameData()}generateCareerSeasons(){return[{id:"season-1",name:"Nevada Championship",location:"Nevada, USA",completed:!1,races:[{id:"nevada-1",name:"Desert Storm",track:"nevada-desert",type:"classic-race",laps:3,opponents:7,difficulty:"easy",completed:!1,locked:!1,stars:0},{id:"nevada-2",name:"Canyon Rush",track:"nevada-desert",type:"elimination",laps:2,opponents:7,difficulty:"easy",completed:!1,locked:!0,stars:0},{id:"nevada-3",name:"Stunt Master",track:"nevada-desert",type:"gate-drift",laps:1,opponents:0,difficulty:"medium",completed:!1,locked:!0,stars:0},{id:"nevada-4",name:"Speed Demon",track:"nevada-desert",type:"time-attack",laps:2,opponents:0,difficulty:"medium",completed:!1,locked:!0,stars:0}]},{id:"season-2",name:"Tokyo Nights",location:"Tokyo, Japan",completed:!1,races:[{id:"tokyo-1",name:"Neon Streets",track:"tokyo-streets",type:"classic-race",laps:4,opponents:7,difficulty:"medium",completed:!1,locked:!0,stars:0},{id:"tokyo-2",name:"Underground",track:"tokyo-streets",type:"knockdown",laps:3,opponents:7,difficulty:"hard",completed:!1,locked:!0,stars:0}]},{id:"season-3",name:"Barcelona Coast",location:"Barcelona, Spain",completed:!1,races:[{id:"barcelona-1",name:"Coastal Drive",track:"barcelona-coast",type:"classic-race",laps:3,opponents:7,difficulty:"medium",completed:!1,locked:!0,stars:0}]}]}saveGameData(){const e={playerProgress:this.playerProgress,ownedCars:this.ownedCars,careerSeasons:this.careerSeasons,achievements:this.achievements};localStorage.setItem("asphalt-racing-save",JSON.stringify(e))}getCredits(){return this.playerProgress.credits}getTokens(){return this.playerProgress.tokens}getCurrentLeague(){return this.playerProgress.currentLeague}getLevel(){return this.playerProgress.level}addCredits(e){this.playerProgress.credits+=e,this.saveGameData()}spendCredits(e){return this.playerProgress.credits>=e?(this.playerProgress.credits-=e,this.saveGameData(),!0):!1}addTokens(e){this.playerProgress.tokens+=e,this.saveGameData()}spendTokens(e){return this.playerProgress.tokens>=e?(this.playerProgress.tokens-=e,this.saveGameData(),!0):!1}addExperience(e){this.playerProgress.experience+=e;const t=this.playerProgress.level*1e3;this.playerProgress.experience>=t&&(this.playerProgress.level++,this.playerProgress.experience-=t,this.addCredits(this.playerProgress.level*500),this.addTokens(10)),this.saveGameData()}getOwnedCars(){return this.ownedCars.filter(e=>e.owned)}getSelectedCar(){return this.ownedCars.find(e=>e.id===this.playerProgress.selectedCarId)||null}setSelectedCar(e){const t=this.ownedCars.find(n=>n.id===e);t&&t.owned&&(this.playerProgress.selectedCarId=e,this.saveGameData())}buyCar(e){const t=this.ownedCars.find(n=>n.id===e);return t&&!t.owned&&this.spendCredits(t.price)?(t.owned=!0,this.saveGameData(),!0):!1}upgradeCar(e,t){const n=this.ownedCars.find(a=>a.id===e);if(!n||!n.owned)return!1;const i=n.upgrades[t];if(i>=5)return!1;const s=(i+1)*5e3;return this.spendCredits(s)?(n.upgrades[t]++,this.updateCarStats(n),this.saveGameData(),!0):!1}updateCarStats(e){const t=this.getBaseCarStats(e.id),n=e.upgrades;e.stats.topSpeed=t.topSpeed+n.engine*2+n.ecu*1,e.stats.acceleration=t.acceleration+n.engine*2+n.exhaust*1.5,e.stats.handling=t.handling+n.tires*3,e.stats.nitroEfficiency=t.nitroEfficiency+n.ecu*1.5}getBaseCarStats(e){const t={"mclaren-p1":{topSpeed:95,acceleration:88,handling:82,nitroEfficiency:90},"ferrari-458":{topSpeed:85,acceleration:82,handling:88,nitroEfficiency:85},"lamborghini-huracan":{topSpeed:88,acceleration:85,handling:80,nitroEfficiency:88}};return t[e]||t["mclaren-p1"]}getCareerProgress(){return{seasons:this.careerSeasons}}completeRace(e,t,n){let i=0;for(const s of this.careerSeasons){const a=s.races.find(c=>c.id===e);if(a){a.completed=!0,a.bestTime=n,t===1?i=3:t<=3?i=2:i=1,a.stars=Math.max(a.stars,i);const c=s.races.indexOf(a);c<s.races.length-1&&(s.races[c+1].locked=!1);break}}return this.saveGameData(),i}getSeasonProgress(){const e=this.careerSeasons[0];return e.races.filter(n=>n.completed).length/e.races.length*100}updateLeagueRating(e){this.playerProgress.leagueRating+=e,this.checkLeagueChange(),this.saveGameData()}checkLeagueChange(){const e=[{name:"Amateur",minRating:0},{name:"Challenger",minRating:1500},{name:"Pro",minRating:2e3},{name:"Champion",minRating:2500},{name:"Elite",minRating:3e3}],t=this.playerProgress.leagueRating;for(let n=e.length-1;n>=0;n--)if(t>=e[n].minRating){this.playerProgress.currentLeague=e[n].name;break}}checkAchievements(e,t){switch(e){case"race-complete":this.checkRaceAchievements(t);break;case"stunt-performed":this.checkStuntAchievements(t);break;case"car-purchased":this.checkCollectionAchievements();break}}checkRaceAchievements(e){e.position===1&&this.unlockAchievement("first-win","First Victory","Win your first race"),e.perfectRace&&this.unlockAchievement("perfect-race","Perfect Race","Complete a race without crashes")}checkStuntAchievements(e){e.stuntType==="Flat Spin"&&this.unlockAchievement("flat-spin-master","Flat Spin Master","Perform a flat spin")}checkCollectionAchievements(){this.getOwnedCars().length>=5&&this.unlockAchievement("car-collector","Car Collector","Own 5 different cars")}unlockAchievement(e,t,n){this.achievements.find(i=>i.id===e)||(this.achievements.push({id:e,name:t,description:n,unlockedAt:new Date().toISOString()}),this.showAchievementNotification(t),this.saveGameData())}showAchievementNotification(e){const t=document.createElement("div");t.className="achievement-notification",t.innerHTML=`
            <div class="achievement-content">
                <div class="achievement-icon">🏆</div>
                <div class="achievement-text">
                    <div class="achievement-title">Achievement Unlocked!</div>
                    <div class="achievement-name">${e}</div>
                </div>
            </div>
        `,document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),100),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>document.body.removeChild(t),300)},3e3)}getAchievements(){return this.achievements}resetProgress(){localStorage.removeItem("asphalt-racing-save"),this.initializeDefaultData()}exportSaveData(){return JSON.stringify({playerProgress:this.playerProgress,ownedCars:this.ownedCars,careerSeasons:this.careerSeasons,achievements:this.achievements},null,2)}importSaveData(e){try{const t=JSON.parse(e);return this.playerProgress=t.playerProgress,this.ownedCars=t.ownedCars,this.careerSeasons=t.careerSeasons,this.achievements=t.achievements||[],this.saveGameData(),!0}catch(t){return console.error("Failed to import save data:",t),!1}}}class Wg{constructor(){this.isInitialized=!1,this.gameData=new Vg,this.audioManager=new Gg,this.inputManager=new Hg,this.uiManager=new kg(this.gameData,this.audioManager),this.gameEngine=new zg(this.gameData,this.audioManager,this.inputManager),this.init()}async init(){try{this.showLoadingScreen(),await this.loadAssets(),await this.audioManager.init(),this.inputManager.init(),this.uiManager.init(),await this.gameEngine.init(),this.setupEventListeners(),this.isInitialized=!0,this.hideLoadingScreen(),this.uiManager.showMainMenu()}catch(e){console.error("Failed to initialize game:",e)}}showLoadingScreen(){const e=document.getElementById("loading-screen");e&&(e.classList.remove("hidden"),this.animateLoadingProgress())}hideLoadingScreen(){const e=document.getElementById("loading-screen");e&&e.classList.add("hidden")}animateLoadingProgress(){const e=document.querySelector(".loading-progress"),t=document.querySelector(".loading-text");if(!e||!t)return;const n=[{progress:20,text:"Loading 3D Engine..."},{progress:40,text:"Loading Car Models..."},{progress:60,text:"Loading Tracks..."},{progress:80,text:"Loading Audio..."},{progress:100,text:"Ready to Race!"}];let i=0;const s=setInterval(()=>{if(i<n.length){const a=n[i];e.style.width=`${a.progress}%`,t.textContent=a.text,i++}else clearInterval(s)},500)}async loadAssets(){return new Promise(e=>setTimeout(e,2500))}setupEventListeners(){document.addEventListener("click",e=>{var i;const t=e.target,n=t.getAttribute("data-action")||((i=t.closest("[data-action]"))==null?void 0:i.getAttribute("data-action"));n&&this.handleMenuAction(n)}),document.addEventListener("keydown",e=>{switch(e.code){case"Escape":this.gameEngine.isRacing()&&this.uiManager.togglePauseMenu();break;case"Enter":this.uiManager.isMainMenuVisible()&&this.handleMenuAction("quick-race");break}}),window.addEventListener("resize",()=>{this.gameEngine.handleResize()})}handleMenuAction(e){if(this.isInitialized)switch(e){case"career":this.uiManager.showCareerScreen();break;case"quick-race":this.startQuickRace();break;case"multiplayer":this.uiManager.showMultiplayerScreen();break;case"garage":this.uiManager.showGarageScreen();break;case"settings":this.uiManager.showSettingsScreen();break;case"back-to-menu":this.uiManager.showMainMenu();break;case"resume":this.uiManager.hidePauseMenu(),this.gameEngine.resumeRace();break;case"restart":this.gameEngine.restartRace(),this.uiManager.hidePauseMenu();break;case"quit":this.gameEngine.endRace(),this.uiManager.showMainMenu();break;case"retry":this.gameEngine.restartRace(),this.uiManager.hideRaceResults();break;case"continue":this.uiManager.hideRaceResults(),this.uiManager.showMainMenu();break}}async startQuickRace(){try{this.uiManager.showGameCanvas(),await this.gameEngine.startRace({track:"nevada-desert",mode:"classic-race",laps:3,opponents:7,difficulty:"normal"})}catch(e){console.error("Failed to start race:",e),this.uiManager.showMainMenu()}}}window.addEventListener("DOMContentLoaded",()=>{new Wg});
