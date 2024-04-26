var Sg=Object.defineProperty;var Eg=(s,e,t)=>e in s?Sg(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Yi=(s,e,t)=>(Eg(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const su="163",Ag=0,Wu=1,wg=2,Mf=1,Ng=2,_i=3,Hi=0,An=1,ni=2,cs=0,pr=1,Xu=2,qu=3,Yu=4,bg=5,bs=100,Rg=101,Cg=102,Lg=103,Ig=104,Pg=200,Dg=201,Ug=202,Og=203,Cl=204,Ll=205,Fg=206,Vg=207,Bg=208,zg=209,kg=210,Hg=211,Gg=212,Wg=213,Xg=214,qg=0,Yg=1,jg=2,Ea=3,Kg=4,$g=5,Zg=6,Jg=7,qa=0,Qg=1,e_=2,ai=0,Tf=1,Sf=2,Ef=3,Af=4,t_=5,wf=6,n_=7,ju="attached",i_="detached",Nf=300,Sr=301,Er=302,Il=303,Pl=304,Ya=306,Ar=1e3,rs=1001,Aa=1002,Kt=1003,bf=1004,po=1005,Dn=1006,Ma=1007,Mi=1008,ls=1009,s_=1010,r_=1011,Rf=1012,Cf=1013,wr=1014,ri=1015,Mo=1016,Lf=1017,If=1018,Io=1020,o_=35902,a_=1021,c_=1022,oi=1023,l_=1024,u_=1025,mr=1026,To=1027,Pf=1028,Df=1029,h_=1030,Uf=1031,Of=1033,Ac=33776,wc=33777,Nc=33778,bc=33779,Ku=35840,$u=35841,Zu=35842,Ju=35843,Ff=36196,Qu=37492,eh=37496,th=37808,nh=37809,ih=37810,sh=37811,rh=37812,oh=37813,ah=37814,ch=37815,lh=37816,uh=37817,hh=37818,dh=37819,fh=37820,ph=37821,Rc=36492,mh=36494,gh=36495,d_=36283,_h=36284,xh=36285,vh=36286,So=2300,Nr=2301,Cc=2302,yh=2400,Mh=2401,Th=2402,f_=2500,p_=0,Vf=1,Dl=2,m_=3200,g_=3201,Ps=0,Bf=1,zi="",fn="srgb",Vt="srgb-linear",ru="display-p3",ja="display-p3-linear",wa="linear",St="srgb",Na="rec709",ba="p3",Hs=7680,Sh=519,__=512,zf=513,x_=514,kf=515,v_=516,y_=517,M_=518,T_=519,Ra=35044,Ul=35048,Eh="300 es",Ti=2e3,br=2001;class fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ah=1234567;const go=Math.PI/180,Rr=180/Math.PI;function ci(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function pn(s,e,t){return Math.max(e,Math.min(t,s))}function ou(s,e){return(s%e+e)%e}function S_(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function E_(s,e,t){return s!==e?(t-s)/(e-s):0}function _o(s,e,t){return(1-t)*s+t*e}function A_(s,e,t,n){return _o(s,e,1-Math.exp(-t*n))}function w_(s,e=1){return e-Math.abs(ou(s,e*2)-e)}function N_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function b_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function R_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function C_(s,e){return s+Math.random()*(e-s)}function L_(s){return s*(.5-Math.random())}function I_(s){s!==void 0&&(Ah=s);let e=Ah+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function P_(s){return s*go}function D_(s){return s*Rr}function U_(s){return(s&s-1)===0&&s!==0}function O_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function F_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function V_(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*h,c*d,a*l);break;case"YZY":s.set(c*d,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*d,a*u,a*l);break;case"XZX":s.set(a*u,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*u,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ii(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ht(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ss={DEG2RAD:go,RAD2DEG:Rr,generateUUID:ci,clamp:pn,euclideanModulo:ou,mapLinear:S_,inverseLerp:E_,lerp:_o,damp:A_,pingpong:w_,smoothstep:N_,smootherstep:b_,randInt:R_,randFloat:C_,randFloatSpread:L_,seededRandom:I_,degToRad:P_,radToDeg:D_,isPowerOfTwo:U_,ceilPowerOfTwo:O_,floorPowerOfTwo:F_,setQuaternionFromProperEuler:V_,normalize:ht,denormalize:ii};class xe{constructor(e=0,t=0){xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,n,i,r,o,a,c,l){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],x=i[4],E=i[7],P=i[2],R=i[5],N=i[8];return r[0]=o*_+a*S+c*P,r[3]=o*m+a*x+c*R,r[6]=o*p+a*E+c*N,r[1]=l*_+u*S+h*P,r[4]=l*m+u*x+h*R,r[7]=l*p+u*E+h*N,r[2]=d*_+f*S+g*P,r[5]=d*m+f*x+g*R,r[8]=d*p+f*E+g*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Lc.makeScale(e,t)),this}rotate(e){return this.premultiply(Lc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lc=new qe;function Hf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Eo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function B_(){const s=Eo("canvas");return s.style.display="block",s}const wh={};function Gf(s){s in wh||(wh[s]=!0,console.warn(s))}const Nh=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bh=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ho={[Vt]:{transfer:wa,primaries:Na,toReference:s=>s,fromReference:s=>s},[fn]:{transfer:St,primaries:Na,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ja]:{transfer:wa,primaries:ba,toReference:s=>s.applyMatrix3(bh),fromReference:s=>s.applyMatrix3(Nh)},[ru]:{transfer:St,primaries:ba,toReference:s=>s.convertSRGBToLinear().applyMatrix3(bh),fromReference:s=>s.applyMatrix3(Nh).convertLinearToSRGB()}},z_=new Set([Vt,ja]),at={enabled:!0,_workingColorSpace:Vt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!z_.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Ho[e].toReference,i=Ho[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ho[s].primaries},getTransfer:function(s){return s===zi?wa:Ho[s].transfer}};function gr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ic(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Gs;class k_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gs===void 0&&(Gs=Eo("canvas")),Gs.width=e.width,Gs.height=e.height;const n=Gs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Eo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=gr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gr(t[n]/255)*255):t[n]=gr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let H_=0;class Wf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=ci(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Pc(i[o].image)):r.push(Pc(i[o]))}else r=Pc(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Pc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?k_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let G_=0;class $t extends fs{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,n=rs,i=rs,r=Dn,o=Mi,a=oi,c=ls,l=$t.DEFAULT_ANISOTROPY,u=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=ci(),this.name="",this.source=new Wf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ar:e.x=e.x-Math.floor(e.x);break;case rs:e.x=e.x<0?0:1;break;case Aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ar:e.y=e.y-Math.floor(e.y);break;case rs:e.y=e.y<0?0:1;break;case Aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Nf;$t.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,i=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,E=(f+1)/2,P=(p+1)/2,R=(u+d)/4,N=(h+_)/4,V=(g+m)/4;return x>E&&x>P?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=R/n,r=N/n):E>P?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=R/i,r=V/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=N/r,i=V/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-_)/S,this.z=(d-u)/S,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class us extends fs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new $t(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ds extends us{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class au extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class W_ extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ps{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*_,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const P=Math.sqrt(x),R=Math.atan2(P,p*S);m=Math.sin(m*R)/P,a=Math.sin(a*R)/P}const E=a*S;if(c=c*m+d*E,l=l*m+f*E,u=u*m+g*E,h=h*m+_*E,m===1-a){const P=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=P,l*=P,u*=P,h*=P}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=i+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dc=new L,Rh=new ps;class Xi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(r,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Go.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Go.copy(n.boundingBox)),Go.applyMatrix4(e.matrixWorld),this.union(Go)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),Wo.subVectors(this.max,eo),Ws.subVectors(e.a,eo),Xs.subVectors(e.b,eo),qs.subVectors(e.c,eo),ji.subVectors(Xs,Ws),Ki.subVectors(qs,Xs),xs.subVectors(Ws,qs);let t=[0,-ji.z,ji.y,0,-Ki.z,Ki.y,0,-xs.z,xs.y,ji.z,0,-ji.x,Ki.z,0,-Ki.x,xs.z,0,-xs.x,-ji.y,ji.x,0,-Ki.y,Ki.x,0,-xs.y,xs.x,0];return!Uc(t,Ws,Xs,qs,Wo)||(t=[1,0,0,0,1,0,0,0,1],!Uc(t,Ws,Xs,qs,Wo))?!1:(Xo.crossVectors(ji,Ki),t=[Xo.x,Xo.y,Xo.z],Uc(t,Ws,Xs,qs,Wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new L,new L,new L,new L,new L,new L,new L,new L],Qn=new L,Go=new Xi,Ws=new L,Xs=new L,qs=new L,ji=new L,Ki=new L,xs=new L,eo=new L,Wo=new L,Xo=new L,vs=new L;function Uc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){vs.fromArray(s,r);const a=i.x*Math.abs(vs.x)+i.y*Math.abs(vs.y)+i.z*Math.abs(vs.z),c=e.dot(vs),l=t.dot(vs),u=n.dot(vs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const X_=new Xi,to=new L,Oc=new L;class wi{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):X_.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);const t=to.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(to,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(Oc)),this.expandByPoint(to.copy(e.center).sub(Oc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new L,Fc=new L,qo=new L,$i=new L,Vc=new L,Yo=new L,Bc=new L;class Ka{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Fc.copy(e).add(t).multiplyScalar(.5),qo.copy(t).sub(e).normalize(),$i.copy(this.origin).sub(Fc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(qo),a=$i.dot(this.direction),c=-$i.dot(qo),l=$i.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Fc).addScaledVector(qo,d),f}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);const n=Ii.dot(this.direction),i=Ii.dot(Ii)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,n,i,r){Vc.subVectors(t,e),Yo.subVectors(n,e),Bc.crossVectors(Vc,Yo);let o=this.direction.dot(Bc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,e);const c=a*this.direction.dot(Yo.crossVectors($i,Yo));if(c<0)return null;const l=a*this.direction.dot(Vc.cross($i));if(l<0||c+l>o)return null;const u=-a*$i.dot(Bc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(e,t,n,i,r,o,a,c,l,u,h,d,f,g,_,m){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,h,d,f,g,_,m)}set(e,t,n,i,r,o,a,c,l,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ys.setFromMatrixColumn(e,0).length(),r=1/Ys.setFromMatrixColumn(e,1).length(),o=1/Ys.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(q_,e,Y_)}lookAt(e,t,n){const i=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Zi.crossVectors(n,Ln),Zi.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Zi.crossVectors(n,Ln)),Zi.normalize(),jo.crossVectors(Ln,Zi),i[0]=Zi.x,i[4]=jo.x,i[8]=Ln.x,i[1]=Zi.y,i[5]=jo.y,i[9]=Ln.y,i[2]=Zi.z,i[6]=jo.z,i[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],x=n[7],E=n[11],P=n[15],R=i[0],N=i[4],V=i[8],T=i[12],y=i[1],k=i[5],$=i[9],U=i[13],Q=i[2],Z=i[6],ae=i[10],re=i[14],q=i[3],ce=i[7],oe=i[11],Ne=i[15];return r[0]=o*R+a*y+c*Q+l*q,r[4]=o*N+a*k+c*Z+l*ce,r[8]=o*V+a*$+c*ae+l*oe,r[12]=o*T+a*U+c*re+l*Ne,r[1]=u*R+h*y+d*Q+f*q,r[5]=u*N+h*k+d*Z+f*ce,r[9]=u*V+h*$+d*ae+f*oe,r[13]=u*T+h*U+d*re+f*Ne,r[2]=g*R+_*y+m*Q+p*q,r[6]=g*N+_*k+m*Z+p*ce,r[10]=g*V+_*$+m*ae+p*oe,r[14]=g*T+_*U+m*re+p*Ne,r[3]=S*R+x*y+E*Q+P*q,r[7]=S*N+x*k+E*Z+P*ce,r[11]=S*V+x*$+E*ae+P*oe,r[15]=S*T+x*U+E*re+P*Ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*h-i*l*h-r*a*d+n*l*d+i*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*u-r*c*u)+m*(+t*l*h-t*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+p*(-i*a*u-t*c*h+t*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=h*m*l-_*d*l+_*c*f-a*m*f-h*c*p+a*d*p,x=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,E=u*_*l-g*h*l+g*a*f-o*_*f-u*a*p+o*h*p,P=g*h*c-u*_*c-g*a*d+o*_*d+u*a*m-o*h*m,R=t*S+n*x+i*E+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/R;return e[0]=S*N,e[1]=(_*d*r-h*m*r-_*i*f+n*m*f+h*i*p-n*d*p)*N,e[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*p+n*c*p)*N,e[3]=(h*c*r-a*d*r-h*i*l+n*d*l+a*i*f-n*c*f)*N,e[4]=x*N,e[5]=(u*m*r-g*d*r+g*i*f-t*m*f-u*i*p+t*d*p)*N,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*p-t*c*p)*N,e[7]=(o*d*r-u*c*r+u*i*l-t*d*l-o*i*f+t*c*f)*N,e[8]=E*N,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*p-t*h*p)*N,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*N,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*f-t*a*f)*N,e[12]=P*N,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*m+t*h*m)*N,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*N,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*d+t*a*d)*N,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,S=c*l,x=c*u,E=c*h,P=n.x,R=n.y,N=n.z;return i[0]=(1-(_+p))*P,i[1]=(f+E)*P,i[2]=(g-x)*P,i[3]=0,i[4]=(f-E)*R,i[5]=(1-(d+p))*R,i[6]=(m+S)*R,i[7]=0,i[8]=(g+x)*N,i[9]=(m-S)*N,i[10]=(1-(d+_))*N,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ys.set(i[0],i[1],i[2]).length();const o=Ys.set(i[4],i[5],i[6]).length(),a=Ys.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],ei.copy(this);const l=1/r,u=1/o,h=1/a;return ei.elements[0]*=l,ei.elements[1]*=l,ei.elements[2]*=l,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=h,ei.elements[9]*=h,ei.elements[10]*=h,t.setFromRotationMatrix(ei),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Ti){const c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===Ti)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===br)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Ti){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*l,f=(n+i)*u;let g,_;if(a===Ti)g=(o+r)*h,_=-2*h;else if(a===br)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ys=new L,ei=new ze,q_=new L(0,0,0),Y_=new L(1,1,1),Zi=new L,jo=new L,Ln=new L,Ch=new ze,Lh=new ps;class Kn{constructor(e=0,t=0,n=0,i=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(pn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-pn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(pn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ch.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ch,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lh.setFromEuler(this),this.setFromQuaternion(Lh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class Xf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let j_=0;const Ih=new L,js=new ps,Pi=new ze,Ko=new L,no=new L,K_=new L,$_=new ps,Ph=new L(1,0,0),Dh=new L(0,1,0),Uh=new L(0,0,1),Oh={type:"added"},Z_={type:"removed"},Ks={type:"childadded",child:null},zc={type:"childremoved",child:null};class Et extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new L,t=new Kn,n=new ps,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new qe}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(Ph,e)}rotateY(e){return this.rotateOnAxis(Dh,e)}rotateZ(e){return this.rotateOnAxis(Uh,e)}translateOnAxis(e,t){return Ih.copy(e).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ph,e)}translateY(e){return this.translateOnAxis(Dh,e)}translateZ(e){return this.translateOnAxis(Uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ko.copy(e):Ko.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(no,Ko,this.up):Pi.lookAt(Ko,no,this.up),this.quaternion.setFromRotationMatrix(Pi),i&&(Pi.extractRotation(i.matrixWorld),js.setFromRotationMatrix(Pi),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oh),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Z_),zc.child=e,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oh),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,K_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,$_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Et.DEFAULT_UP=new L(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new L,Di=new L,kc=new L,Ui=new L,$s=new L,Zs=new L,Fh=new L,Hc=new L,Gc=new L,Wc=new L;class si{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ti.subVectors(e,t),i.cross(ti);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ti.subVectors(i,t),Di.subVectors(n,t),kc.subVectors(e,t);const o=ti.dot(ti),a=ti.dot(Di),c=ti.dot(kc),l=Di.dot(Di),u=Di.dot(kc),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ui.x),c.addScaledVector(o,Ui.y),c.addScaledVector(a,Ui.z),c)}static isFrontFacing(e,t,n,i){return ti.subVectors(n,t),Di.subVectors(e,t),ti.cross(Di).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ti.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return si.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;$s.subVectors(i,n),Zs.subVectors(r,n),Hc.subVectors(e,n);const c=$s.dot(Hc),l=Zs.dot(Hc);if(c<=0&&l<=0)return t.copy(n);Gc.subVectors(e,i);const u=$s.dot(Gc),h=Zs.dot(Gc);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector($s,o);Wc.subVectors(e,r);const f=$s.dot(Wc),g=Zs.dot(Wc);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Zs,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Fh.subVectors(r,i),a=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(Fh,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector($s,o).addScaledVector(Zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},$o={h:0,s:0,l:0};function Xc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=at.workingColorSpace){if(e=ou(e,1),t=pn(t,0,1),n=pn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Xc(o,r,e+1/3),this.g=Xc(o,r,e),this.b=Xc(o,r,e-1/3)}return at.toWorkingColorSpace(this,i),this}setStyle(e,t=fn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const n=qf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=Ic(e.r),this.g=Ic(e.g),this.b=Ic(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return at.fromWorkingColorSpace(dn.copy(this),e),Math.round(pn(dn.r*255,0,255))*65536+Math.round(pn(dn.g*255,0,255))*256+Math.round(pn(dn.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(dn.copy(this),t);const n=dn.r,i=dn.g,r=dn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=fn){at.fromWorkingColorSpace(dn.copy(this),e);const t=dn.r,n=dn.g,i=dn.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL($o);const n=_o(Ji.h,$o.h,t),i=_o(Ji.s,$o.s,t),r=_o(Ji.l,$o.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new ve;ve.NAMES=qf;let J_=0;class yn extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=pr,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cl,this.blendDst=Ll,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=Ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(n.blending=this.blending),this.side!==Hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ll&&(n.blendDst=this.blendDst),this.blendEquation!==bs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ea&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jn extends yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new L,Zo=new xe;class Mn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ra,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Gf("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zo.fromBufferAttribute(this,t),Zo.applyMatrix3(e),this.setXY(t,Zo.x,Zo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ra&&(e.usage=this.usage),e}}class Yf extends Mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jf extends Mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class wn extends Mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Q_=0;const Wn=new ze,qc=new Et,Js=new L,In=new Xi,io=new Xi,en=new L;class Hn extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hf(e)?jf:Yf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,n){return Wn.makeTranslation(e,t,n),this.applyMatrix4(Wn),this}scale(e,t,n){return Wn.makeScale(e,t,n),this.applyMatrix4(Wn),this}lookAt(e){return qc.lookAt(e),qc.updateMatrix(),this.applyMatrix4(qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new wn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];io.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(In.min,io.min),In.expandByPoint(en),en.addVectors(In.max,io.max),In.expandByPoint(en)):(In.expandByPoint(io.min),In.expandByPoint(io.max))}In.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)en.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(en));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)en.fromBufferAttribute(a,l),c&&(Js.fromBufferAttribute(e,l),en.add(Js)),i=Math.max(i,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let V=0;V<n.count;V++)a[V]=new L,c[V]=new L;const l=new L,u=new L,h=new L,d=new xe,f=new xe,g=new xe,_=new L,m=new L;function p(V,T,y){l.fromBufferAttribute(n,V),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,V),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,y),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const k=1/(f.x*g.y-g.x*f.y);isFinite(k)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(k),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(k),a[V].add(_),a[T].add(_),a[y].add(_),c[V].add(m),c[T].add(m),c[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let V=0,T=S.length;V<T;++V){const y=S[V],k=y.start,$=y.count;for(let U=k,Q=k+$;U<Q;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const x=new L,E=new L,P=new L,R=new L;function N(V){P.fromBufferAttribute(i,V),R.copy(P);const T=a[V];x.copy(T),x.sub(P.multiplyScalar(P.dot(T))).normalize(),E.crossVectors(R,T);const k=E.dot(c[V])<0?-1:1;o.setXYZW(V,x.x,x.y,x.z,k)}for(let V=0,T=S.length;V<T;++V){const y=S[V],k=y.start,$=y.count;for(let U=k,Q=k+$;U<Q;U+=3)N(e.getX(U+0)),N(e.getX(U+1)),N(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new L,r=new L,o=new L,a=new L,c=new L,l=new L,u=new L,h=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new Mn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vh=new ze,ys=new Ka,Jo=new wi,Bh=new L,Qs=new L,er=new L,tr=new L,Yc=new L,Qo=new L,ea=new xe,ta=new xe,na=new xe,zh=new L,kh=new L,Hh=new L,ia=new L,sa=new L;class Gt extends Et{constructor(e=new Hn,t=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Qo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Yc.fromBufferAttribute(h,e),o?Qo.addScaledVector(Yc,u):Qo.addScaledVector(Yc.sub(t),u))}t.add(Qo)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(r),ys.copy(e.ray).recast(e.near),!(Jo.containsPoint(ys.origin)===!1&&(ys.intersectSphere(Jo,Bh)===null||ys.origin.distanceToSquared(Bh)>(e.far-e.near)**2))&&(Vh.copy(r).invert(),ys.copy(e.ray).applyMatrix4(Vh),!(n.boundingBox!==null&&ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ys)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let E=S,P=x;E<P;E+=3){const R=a.getX(E),N=a.getX(E+1),V=a.getX(E+2);i=ra(this,p,e,n,l,u,h,R,N,V),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),x=a.getX(m+1),E=a.getX(m+2);i=ra(this,o,e,n,l,u,h,S,x,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let E=S,P=x;E<P;E+=3){const R=E,N=E+1,V=E+2;i=ra(this,p,e,n,l,u,h,R,N,V),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=m,x=m+1,E=m+2;i=ra(this,o,e,n,l,u,h,S,x,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function ex(s,e,t,n,i,r,o,a){let c;if(e.side===An?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Hi,a),c===null)return null;sa.copy(a),sa.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(sa);return l<t.near||l>t.far?null:{distance:l,point:sa.clone(),object:s}}function ra(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Qs),s.getVertexPosition(c,er),s.getVertexPosition(l,tr);const u=ex(s,e,t,n,Qs,er,tr,ia);if(u){i&&(ea.fromBufferAttribute(i,a),ta.fromBufferAttribute(i,c),na.fromBufferAttribute(i,l),u.uv=si.getInterpolation(ia,Qs,er,tr,ea,ta,na,new xe)),r&&(ea.fromBufferAttribute(r,a),ta.fromBufferAttribute(r,c),na.fromBufferAttribute(r,l),u.uv1=si.getInterpolation(ia,Qs,er,tr,ea,ta,na,new xe)),o&&(zh.fromBufferAttribute(o,a),kh.fromBufferAttribute(o,c),Hh.fromBufferAttribute(o,l),u.normal=si.getInterpolation(ia,Qs,er,tr,zh,kh,Hh,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new L,materialIndex:0};si.getNormal(Qs,er,tr,h.normal),u.face=h}return u}class Fr extends Hn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new wn(l,3)),this.setAttribute("normal",new wn(u,3)),this.setAttribute("uv",new wn(h,2));function g(_,m,p,S,x,E,P,R,N,V,T){const y=E/N,k=P/V,$=E/2,U=P/2,Q=R/2,Z=N+1,ae=V+1;let re=0,q=0;const ce=new L;for(let oe=0;oe<ae;oe++){const Ne=oe*k-U;for(let et=0;et<Z;et++){const xt=et*y-$;ce[_]=xt*S,ce[m]=Ne*x,ce[p]=Q,l.push(ce.x,ce.y,ce.z),ce[_]=0,ce[m]=0,ce[p]=R>0?1:-1,u.push(ce.x,ce.y,ce.z),h.push(et/N),h.push(1-oe/V),re+=1}}for(let oe=0;oe<V;oe++)for(let Ne=0;Ne<N;Ne++){const et=d+Ne+Z*oe,xt=d+Ne+Z*(oe+1),j=d+(Ne+1)+Z*(oe+1),le=d+(Ne+1)+Z*oe;c.push(et,xt,le),c.push(xt,j,le),q+=6}a.addGroup(f,q,T),f+=q,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function xn(s){const e={};for(let t=0;t<s.length;t++){const n=Cr(s[t]);for(const i in n)e[i]=n[i]}return e}function tx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Kf(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const nx={clone:Cr,merge:xn};var ix=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ix,this.fragmentShader=sx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=tx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $f extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=Ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new L,Gh=new xe,Wh=new xe;class vn extends $f{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,Gh,Wh),t.subVectors(Wh,Gh)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(go*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const nr=-90,ir=1;class rx extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new vn(nr,ir,e,t);i.layers=this.layers,this.add(i);const r=new vn(nr,ir,e,t);r.layers=this.layers,this.add(r);const o=new vn(nr,ir,e,t);o.layers=this.layers,this.add(o);const a=new vn(nr,ir,e,t);a.layers=this.layers,this.add(a);const c=new vn(nr,ir,e,t);c.layers=this.layers,this.add(c);const l=new vn(nr,ir,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Zf extends $t{constructor(e,t,n,i,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Sr,super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ox extends Ds{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Zf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Fr(5,5,5),r=new Gi({name:"CubemapFromEquirect",uniforms:Cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:cs});r.uniforms.tEquirect.value=t;const o=new Gt(i,r),a=t.minFilter;return t.minFilter===Mi&&(t.minFilter=Dn),new rx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const jc=new L,ax=new L,cx=new qe;class ts{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=jc.subVectors(n,t).cross(ax.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(jc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||cx.getNormalMatrix(e),i=this.coplanarPoint(jc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ms=new wi,oa=new L;class cu{constructor(e=new ts,t=new ts,n=new ts,i=new ts,r=new ts,o=new ts){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ti){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],S=i[13],x=i[14],E=i[15];if(n[0].setComponents(c-r,d-l,m-f,E-p).normalize(),n[1].setComponents(c+r,d+l,m+f,E+p).normalize(),n[2].setComponents(c+o,d+u,m+g,E+S).normalize(),n[3].setComponents(c-o,d-u,m-g,E-S).normalize(),n[4].setComponents(c-a,d-h,m-_,E-x).normalize(),t===Ti)n[5].setComponents(c+a,d+h,m+_,E+x).normalize();else if(t===br)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){return Ms.center.set(0,0,0),Ms.radius=.7071067811865476,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(oa.x=i.normal.x>0?e.max.x:e.min.x,oa.y=i.normal.y>0?e.max.y:e.min.y,oa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jf(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function lx(s){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c._updateRange,d=c.updateRanges;if(s.bindBuffer(l,a),h.count===-1&&d.length===0&&s.bufferSubData(l,0,u),d.length!==0){for(let f=0,g=d.length;f<g;f++){const _=d[f];s.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}h.count!==-1&&(s.bufferSubData(l,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class Po extends Hn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*d-o;for(let x=0;x<l;x++){const E=x*h-r;g.push(E,-S,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const x=S+l*p,E=S+l*(p+1),P=S+1+l*(p+1),R=S+1+l*p;f.push(x,E,R),f.push(E,P,R)}this.setIndex(f),this.setAttribute("position",new wn(g,3)),this.setAttribute("normal",new wn(_,3)),this.setAttribute("uv",new wn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.width,e.height,e.widthSegments,e.heightSegments)}}var ux=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hx=`#ifdef USE_ALPHAHASH
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
#endif`,dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,px=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gx=`#ifdef USE_AOMAP
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
#endif`,_x=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xx=`#ifdef USE_BATCHING
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
#endif`,vx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,yx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sx=`#ifdef USE_IRIDESCENCE
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
#endif`,Ex=`#ifdef USE_BUMPMAP
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
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ix=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Px=`#define PI 3.141592653589793
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
} // validated`,Dx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ux=`vec3 transformedNormal = objectNormal;
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
#endif`,Ox=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zx="gl_FragColor = linearToOutputTexel( gl_FragColor );",kx=`
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
}`,Hx=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Gx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qx=`#ifdef USE_ENVMAP
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
#endif`,Yx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$x=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zx=`#ifdef USE_GRADIENTMAP
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
}`,Jx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Qx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ev=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nv=`uniform bool receiveShadow;
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
#endif`,iv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,sv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ov=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,av=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cv=`PhysicalMaterial material;
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
#endif`,lv=`struct PhysicalMaterial {
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
}`,uv=`
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
#endif`,hv=`#if defined( RE_IndirectDiffuse )
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
#endif`,dv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_v=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yv=`#if defined( USE_POINTS_UV )
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
#endif`,Mv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ev=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Av=`#ifdef USE_MORPHNORMALS
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
#endif`,wv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
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
#endif`,Nv=`#ifdef USE_MORPHTARGETS
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
#endif`,bv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pv=`#ifdef USE_NORMALMAP
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
#endif`,Dv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ov=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Yv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kv=`float getShadowMask() {
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
}`,$v=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zv=`#ifdef USE_SKINNING
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
#endif`,Jv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qv=`#ifdef USE_SKINNING
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
#endif`,ey=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ty=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ny=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iy=`#ifndef saturate
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sy=`#ifdef USE_TRANSMISSION
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
#endif`,ry=`#ifdef USE_TRANSMISSION
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
#endif`,oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ly=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hy=`uniform sampler2D t2D;
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
}`,dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,my=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gy=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,_y=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
}`,xy=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,vy=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,My=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sy=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ey=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Ay=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,wy=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Ny=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,by=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Ry=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Cy=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Ly=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Iy=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,Py=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Dy=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,Uy=`#define STANDARD
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Oy=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Fy=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Vy=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,By=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,zy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,ky=`uniform vec3 color;
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
}`,Hy=`uniform float rotation;
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
}`,Gy=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Ke={alphahash_fragment:ux,alphahash_pars_fragment:hx,alphamap_fragment:dx,alphamap_pars_fragment:fx,alphatest_fragment:px,alphatest_pars_fragment:mx,aomap_fragment:gx,aomap_pars_fragment:_x,batching_pars_vertex:xx,batching_vertex:vx,begin_vertex:yx,beginnormal_vertex:Mx,bsdfs:Tx,iridescence_fragment:Sx,bumpmap_pars_fragment:Ex,clipping_planes_fragment:Ax,clipping_planes_pars_fragment:wx,clipping_planes_pars_vertex:Nx,clipping_planes_vertex:bx,color_fragment:Rx,color_pars_fragment:Cx,color_pars_vertex:Lx,color_vertex:Ix,common:Px,cube_uv_reflection_fragment:Dx,defaultnormal_vertex:Ux,displacementmap_pars_vertex:Ox,displacementmap_vertex:Fx,emissivemap_fragment:Vx,emissivemap_pars_fragment:Bx,colorspace_fragment:zx,colorspace_pars_fragment:kx,envmap_fragment:Hx,envmap_common_pars_fragment:Gx,envmap_pars_fragment:Wx,envmap_pars_vertex:Xx,envmap_physical_pars_fragment:iv,envmap_vertex:qx,fog_vertex:Yx,fog_pars_vertex:jx,fog_fragment:Kx,fog_pars_fragment:$x,gradientmap_pars_fragment:Zx,lightmap_fragment:Jx,lightmap_pars_fragment:Qx,lights_lambert_fragment:ev,lights_lambert_pars_fragment:tv,lights_pars_begin:nv,lights_toon_fragment:sv,lights_toon_pars_fragment:rv,lights_phong_fragment:ov,lights_phong_pars_fragment:av,lights_physical_fragment:cv,lights_physical_pars_fragment:lv,lights_fragment_begin:uv,lights_fragment_maps:hv,lights_fragment_end:dv,logdepthbuf_fragment:fv,logdepthbuf_pars_fragment:pv,logdepthbuf_pars_vertex:mv,logdepthbuf_vertex:gv,map_fragment:_v,map_pars_fragment:xv,map_particle_fragment:vv,map_particle_pars_fragment:yv,metalnessmap_fragment:Mv,metalnessmap_pars_fragment:Tv,morphinstance_vertex:Sv,morphcolor_vertex:Ev,morphnormal_vertex:Av,morphtarget_pars_vertex:wv,morphtarget_vertex:Nv,normal_fragment_begin:bv,normal_fragment_maps:Rv,normal_pars_fragment:Cv,normal_pars_vertex:Lv,normal_vertex:Iv,normalmap_pars_fragment:Pv,clearcoat_normal_fragment_begin:Dv,clearcoat_normal_fragment_maps:Uv,clearcoat_pars_fragment:Ov,iridescence_pars_fragment:Fv,opaque_fragment:Vv,packing:Bv,premultiplied_alpha_fragment:zv,project_vertex:kv,dithering_fragment:Hv,dithering_pars_fragment:Gv,roughnessmap_fragment:Wv,roughnessmap_pars_fragment:Xv,shadowmap_pars_fragment:qv,shadowmap_pars_vertex:Yv,shadowmap_vertex:jv,shadowmask_pars_fragment:Kv,skinbase_vertex:$v,skinning_pars_vertex:Zv,skinning_vertex:Jv,skinnormal_vertex:Qv,specularmap_fragment:ey,specularmap_pars_fragment:ty,tonemapping_fragment:ny,tonemapping_pars_fragment:iy,transmission_fragment:sy,transmission_pars_fragment:ry,uv_pars_fragment:oy,uv_pars_vertex:ay,uv_vertex:cy,worldpos_vertex:ly,background_vert:uy,background_frag:hy,backgroundCube_vert:dy,backgroundCube_frag:fy,cube_vert:py,cube_frag:my,depth_vert:gy,depth_frag:_y,distanceRGBA_vert:xy,distanceRGBA_frag:vy,equirect_vert:yy,equirect_frag:My,linedashed_vert:Ty,linedashed_frag:Sy,meshbasic_vert:Ey,meshbasic_frag:Ay,meshlambert_vert:wy,meshlambert_frag:Ny,meshmatcap_vert:by,meshmatcap_frag:Ry,meshnormal_vert:Cy,meshnormal_frag:Ly,meshphong_vert:Iy,meshphong_frag:Py,meshphysical_vert:Dy,meshphysical_frag:Uy,meshtoon_vert:Oy,meshtoon_frag:Fy,points_vert:Vy,points_frag:By,shadow_vert:zy,shadow_frag:ky,sprite_vert:Hy,sprite_frag:Gy},me={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},vi={basic:{uniforms:xn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:xn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ve(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:xn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:xn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:xn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ve(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:xn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:xn([me.points,me.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:xn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:xn([me.common,me.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:xn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:xn([me.sprite,me.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:xn([me.common,me.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:xn([me.lights,me.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};vi.physical={uniforms:xn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const aa={r:0,b:0,g:0},Ts=new Kn,Wy=new ze;function Xy(s,e,t,n,i,r,o){const a=new ve(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(m,p){let S=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),S=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ya)?(u===void 0&&(u=new Gt(new Fr(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:Cr(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ts.copy(p.backgroundRotation),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Wy.makeRotationFromEuler(Ts)),u.material.toneMapped=at.getTransfer(x.colorSpace)!==St,(h!==x||d!==x.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Gt(new Po(2,2),new Gi({name:"BackgroundMaterial",uniforms:Cr(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=at.getTransfer(x.colorSpace)!==St,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,p){m.getRGB(aa,Kf(s)),n.buffers.color.setClear(aa.r,aa.g,aa.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function qy(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(y,k,$,U,Q){let Z=!1;const ae=h(U,$,k);r!==ae&&(r=ae,l(r.object)),Z=f(y,U,$,Q),Z&&g(y,U,$,Q),Q!==null&&e.update(Q,s.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,E(y,k,$,U),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function u(y){return s.deleteVertexArray(y)}function h(y,k,$){const U=$.wireframe===!0;let Q=n[y.id];Q===void 0&&(Q={},n[y.id]=Q);let Z=Q[k.id];Z===void 0&&(Z={},Q[k.id]=Z);let ae=Z[U];return ae===void 0&&(ae=d(c()),Z[U]=ae),ae}function d(y){const k=[],$=[],U=[];for(let Q=0;Q<t;Q++)k[Q]=0,$[Q]=0,U[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:$,attributeDivisors:U,object:y,attributes:{},index:null}}function f(y,k,$,U){const Q=r.attributes,Z=k.attributes;let ae=0;const re=$.getAttributes();for(const q in re)if(re[q].location>=0){const oe=Q[q];let Ne=Z[q];if(Ne===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(Ne=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(Ne=y.instanceColor)),oe===void 0||oe.attribute!==Ne||Ne&&oe.data!==Ne.data)return!0;ae++}return r.attributesNum!==ae||r.index!==U}function g(y,k,$,U){const Q={},Z=k.attributes;let ae=0;const re=$.getAttributes();for(const q in re)if(re[q].location>=0){let oe=Z[q];oe===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor));const Ne={};Ne.attribute=oe,oe&&oe.data&&(Ne.data=oe.data),Q[q]=Ne,ae++}r.attributes=Q,r.attributesNum=ae,r.index=U}function _(){const y=r.newAttributes;for(let k=0,$=y.length;k<$;k++)y[k]=0}function m(y){p(y,0)}function p(y,k){const $=r.newAttributes,U=r.enabledAttributes,Q=r.attributeDivisors;$[y]=1,U[y]===0&&(s.enableVertexAttribArray(y),U[y]=1),Q[y]!==k&&(s.vertexAttribDivisor(y,k),Q[y]=k)}function S(){const y=r.newAttributes,k=r.enabledAttributes;for(let $=0,U=k.length;$<U;$++)k[$]!==y[$]&&(s.disableVertexAttribArray($),k[$]=0)}function x(y,k,$,U,Q,Z,ae){ae===!0?s.vertexAttribIPointer(y,k,$,Q,Z):s.vertexAttribPointer(y,k,$,U,Q,Z)}function E(y,k,$,U){_();const Q=U.attributes,Z=$.getAttributes(),ae=k.defaultAttributeValues;for(const re in Z){const q=Z[re];if(q.location>=0){let ce=Q[re];if(ce===void 0&&(re==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),re==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor)),ce!==void 0){const oe=ce.normalized,Ne=ce.itemSize,et=e.get(ce);if(et===void 0)continue;const xt=et.buffer,j=et.type,le=et.bytesPerElement,Me=j===s.INT||j===s.UNSIGNED_INT||ce.gpuType===Cf;if(ce.isInterleavedBufferAttribute){const _e=ce.data,Ye=_e.stride,$e=ce.offset;if(_e.isInstancedInterleavedBuffer){for(let st=0;st<q.locationSize;st++)p(q.location+st,_e.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let st=0;st<q.locationSize;st++)m(q.location+st);s.bindBuffer(s.ARRAY_BUFFER,xt);for(let st=0;st<q.locationSize;st++)x(q.location+st,Ne/q.locationSize,j,oe,Ye*le,($e+Ne/q.locationSize*st)*le,Me)}else{if(ce.isInstancedBufferAttribute){for(let _e=0;_e<q.locationSize;_e++)p(q.location+_e,ce.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let _e=0;_e<q.locationSize;_e++)m(q.location+_e);s.bindBuffer(s.ARRAY_BUFFER,xt);for(let _e=0;_e<q.locationSize;_e++)x(q.location+_e,Ne/q.locationSize,j,oe,Ne*le,Ne/q.locationSize*_e*le,Me)}}else if(ae!==void 0){const oe=ae[re];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(q.location,oe);break;case 3:s.vertexAttrib3fv(q.location,oe);break;case 4:s.vertexAttrib4fv(q.location,oe);break;default:s.vertexAttrib1fv(q.location,oe)}}}}S()}function P(){V();for(const y in n){const k=n[y];for(const $ in k){const U=k[$];for(const Q in U)u(U[Q].object),delete U[Q];delete k[$]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;const k=n[y.id];for(const $ in k){const U=k[$];for(const Q in U)u(U[Q].object),delete U[Q];delete k[$]}delete n[y.id]}function N(y){for(const k in n){const $=n[k];if($[y.id]===void 0)continue;const U=$[y.id];for(const Q in U)u(U[Q].object),delete U[Q];delete $[y.id]}}function V(){T(),o=!0,r!==i&&(r=i,l(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:V,resetDefaultState:T,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function Yy(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,u){u!==0&&(s.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function a(c,l,u){if(u===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let d=0;d<u;d++)this.render(c[d],l[d]);else{h.multiDrawArraysWEBGL(n,c,0,l,0,u);let d=0;for(let f=0;f<u;f++)d+=l[f];t.update(d,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function jy(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const a=r(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const c=t.logarithmicDepthBuffer===!0,l=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=s.getParameter(s.MAX_TEXTURE_SIZE),d=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),m=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),p=u>0,S=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:c,maxTextures:l,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:m,vertexTextures:p,maxSamples:S}}function Ky(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new ts,a=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):l();else{const S=r?0:n,x=S*4;let E=p.clippingState||null;c.value=E,E=u(g,d,x,f);for(let P=0;P!==x;++P)E[P]=t[P];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,E=f;x!==_;++x,E+=4)o.copy(h[x]).applyMatrix4(S,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function $y(s){let e=new WeakMap;function t(o,a){return a===Il?o.mapping=Sr:a===Pl&&(o.mapping=Er),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Il||a===Pl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new ox(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class $a extends $f{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ur=4,Xh=[.125,.215,.35,.446,.526,.582],Rs=20,Kc=new $a,qh=new ve;let $c=null,Zc=0,Jc=0,Qc=!1;const Ns=(1+Math.sqrt(5))/2,sr=1/Ns,Yh=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Ns,sr),new L(0,Ns,-sr),new L(sr,0,Ns),new L(-sr,0,Ns),new L(Ns,sr,0),new L(-Ns,sr,0)];class jh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){$c=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($c,Zc,Jc),this._renderer.xr.enabled=Qc,e.scissorTest=!1,ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$c=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Mo,format:oi,colorSpace:Vt,depthBuffer:!1},i=Kh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zy(r)),this._blurMaterial=Jy(r,e,t)}return i}_compileMaterial(e){const t=new Gt(this._lodPlanes[0],e);this._renderer.compile(t,Kc)}_sceneToCubeUV(e,t,n,i){const a=new vn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(qh),u.toneMapping=ai,u.autoClear=!1;const f=new jn({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),g=new Gt(new Fr,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(qh),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;ca(i,S*x,p>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Sr||e.mapping===Er;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$h());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Gt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;ca(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Kc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Yh[(i-1)%Yh.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Gt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Rs-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Rs;m>Rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rs}`);const p=[];let S=0;for(let N=0;N<Rs;++N){const V=N/_,T=Math.exp(-V*V/2);p.push(T),N===0?S+=T:N<m&&(S+=2*T)}for(let N=0;N<p.length;N++)p[N]=p[N]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const E=this._sizeLods[i],P=3*E*(i>x-ur?i-x+ur:0),R=4*(this._cubeSize-E);ca(t,P,R,3*E,2*E),c.setRenderTarget(t),c.render(h,Kc)}}function Zy(s){const e=[],t=[],n=[];let i=s;const r=s-ur+1+Xh.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-ur?c=Xh[o-s+ur-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*f),x=new Float32Array(m*g*f),E=new Float32Array(p*g*f);for(let R=0;R<f;R++){const N=R%3*2/3-1,V=R>2?0:-1,T=[N,V,0,N+2/3,V,0,N+2/3,V+1,0,N,V,0,N+2/3,V+1,0,N,V+1,0];S.set(T,_*g*R),x.set(d,m*g*R);const y=[R,R,R,R,R,R];E.set(y,p*g*R)}const P=new Hn;P.setAttribute("position",new Mn(S,_)),P.setAttribute("uv",new Mn(x,m)),P.setAttribute("faceIndex",new Mn(E,p)),e.push(P),i>ur&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Kh(s,e,t){const n=new Ds(s,e,t);return n.texture.mapping=Ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ca(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Jy(s,e,t){const n=new Float32Array(Rs),i=new L(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:lu(),fragmentShader:`

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
		`,blending:cs,depthTest:!1,depthWrite:!1})}function $h(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lu(),fragmentShader:`

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
		`,blending:cs,depthTest:!1,depthWrite:!1})}function Zh(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cs,depthTest:!1,depthWrite:!1})}function lu(){return`

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
	`}function Qy(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Il||c===Pl,u=c===Sr||c===Er;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new jh(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new jh(s)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function eM(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function tM(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let x=0,E=S.length;x<E;x+=3){const P=S[x+0],R=S[x+1],N=S[x+2];d.push(P,R,R,N,N,P)}}else if(g!==void 0){const S=g.array;_=g.version;for(let x=0,E=S.length/3-1;x<E;x+=3){const P=x+0,R=x+1,N=x+2;d.push(P,R,R,N,N,P)}}else return;const m=new(Hf(d)?jf:Yf)(d,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function nM(s,e,t){let n;function i(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,d){s.drawElements(n,d,r,h*o),t.update(d,n,1)}function l(h,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,h*o,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<f;_++)this.render(h[_]/o,d[_]);else{g.multiDrawElementsWEBGL(n,d,0,r,h,0,f);let _=0;for(let m=0;m<f;m++)_+=d[m];t.update(_,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function iM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function sM(s,e,t){const n=new WeakMap,i=new tt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let y=function(){V.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),m===!0&&(E=3);let P=a.attributes.position.count*E,R=1;P>e.maxTextureSize&&(R=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const N=new Float32Array(P*R*4*h),V=new au(N,P,R,h);V.type=ri,V.needsUpdate=!0;const T=E*4;for(let k=0;k<h;k++){const $=p[k],U=S[k],Q=x[k],Z=P*R*4*k;for(let ae=0;ae<$.count;ae++){const re=ae*T;g===!0&&(i.fromBufferAttribute($,ae),N[Z+re+0]=i.x,N[Z+re+1]=i.y,N[Z+re+2]=i.z,N[Z+re+3]=0),_===!0&&(i.fromBufferAttribute(U,ae),N[Z+re+4]=i.x,N[Z+re+5]=i.y,N[Z+re+6]=i.z,N[Z+re+7]=0),m===!0&&(i.fromBufferAttribute(Q,ae),N[Z+re+8]=i.x,N[Z+re+9]=i.y,N[Z+re+10]=i.z,N[Z+re+11]=Q.itemSize===4?i.w:1)}}d={count:h,texture:V,size:new xe(P,R)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function rM(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Do extends $t{constructor(e,t,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:mr,u!==mr&&u!==To)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===mr&&(n=wr),n===void 0&&u===To&&(n=Io),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kt,this.minFilter=c!==void 0?c:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Qf=new $t,ep=new Do(1,1);ep.compareFunction=kf;const tp=new au,np=new W_,ip=new Zf,Jh=[],Qh=[],ed=new Float32Array(16),td=new Float32Array(9),nd=new Float32Array(4);function Vr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Jh[i];if(r===void 0&&(r=new Float32Array(i),Jh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Zt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Jt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Za(s,e){let t=Qh[e];t===void 0&&(t=new Int32Array(e),Qh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function oM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function aM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;s.uniform2fv(this.addr,e),Jt(t,e)}}function cM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;s.uniform3fv(this.addr,e),Jt(t,e)}}function lM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;s.uniform4fv(this.addr,e),Jt(t,e)}}function uM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;nd.set(n),s.uniformMatrix2fv(this.addr,!1,nd),Jt(t,n)}}function hM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;td.set(n),s.uniformMatrix3fv(this.addr,!1,td),Jt(t,n)}}function dM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;ed.set(n),s.uniformMatrix4fv(this.addr,!1,ed),Jt(t,n)}}function fM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function pM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;s.uniform2iv(this.addr,e),Jt(t,e)}}function mM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;s.uniform3iv(this.addr,e),Jt(t,e)}}function gM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;s.uniform4iv(this.addr,e),Jt(t,e)}}function _M(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function xM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;s.uniform2uiv(this.addr,e),Jt(t,e)}}function vM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;s.uniform3uiv(this.addr,e),Jt(t,e)}}function yM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;s.uniform4uiv(this.addr,e),Jt(t,e)}}function MM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?ep:Qf;t.setTexture2D(e||r,i)}function TM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||np,i)}function SM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ip,i)}function EM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||tp,i)}function AM(s){switch(s){case 5126:return oM;case 35664:return aM;case 35665:return cM;case 35666:return lM;case 35674:return uM;case 35675:return hM;case 35676:return dM;case 5124:case 35670:return fM;case 35667:case 35671:return pM;case 35668:case 35672:return mM;case 35669:case 35673:return gM;case 5125:return _M;case 36294:return xM;case 36295:return vM;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return TM;case 35680:case 36300:case 36308:case 36293:return SM;case 36289:case 36303:case 36311:case 36292:return EM}}function wM(s,e){s.uniform1fv(this.addr,e)}function NM(s,e){const t=Vr(e,this.size,2);s.uniform2fv(this.addr,t)}function bM(s,e){const t=Vr(e,this.size,3);s.uniform3fv(this.addr,t)}function RM(s,e){const t=Vr(e,this.size,4);s.uniform4fv(this.addr,t)}function CM(s,e){const t=Vr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function LM(s,e){const t=Vr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function IM(s,e){const t=Vr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function PM(s,e){s.uniform1iv(this.addr,e)}function DM(s,e){s.uniform2iv(this.addr,e)}function UM(s,e){s.uniform3iv(this.addr,e)}function OM(s,e){s.uniform4iv(this.addr,e)}function FM(s,e){s.uniform1uiv(this.addr,e)}function VM(s,e){s.uniform2uiv(this.addr,e)}function BM(s,e){s.uniform3uiv(this.addr,e)}function zM(s,e){s.uniform4uiv(this.addr,e)}function kM(s,e,t){const n=this.cache,i=e.length,r=Za(t,i);Zt(n,r)||(s.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Qf,r[o])}function HM(s,e,t){const n=this.cache,i=e.length,r=Za(t,i);Zt(n,r)||(s.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||np,r[o])}function GM(s,e,t){const n=this.cache,i=e.length,r=Za(t,i);Zt(n,r)||(s.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ip,r[o])}function WM(s,e,t){const n=this.cache,i=e.length,r=Za(t,i);Zt(n,r)||(s.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||tp,r[o])}function XM(s){switch(s){case 5126:return wM;case 35664:return NM;case 35665:return bM;case 35666:return RM;case 35674:return CM;case 35675:return LM;case 35676:return IM;case 5124:case 35670:return PM;case 35667:case 35671:return DM;case 35668:case 35672:return UM;case 35669:case 35673:return OM;case 5125:return FM;case 36294:return VM;case 36295:return BM;case 36296:return zM;case 35678:case 36198:case 36298:case 36306:case 35682:return kM;case 35679:case 36299:case 36307:return HM;case 35680:case 36300:case 36308:case 36293:return GM;case 36289:case 36303:case 36311:case 36292:return WM}}class qM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=AM(t.type)}}class YM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=XM(t.type)}}class jM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const el=/(\w+)(\])?(\[|\.)?/g;function id(s,e){s.seq.push(e),s.map[e.id]=e}function KM(s,e,t){const n=s.name,i=n.length;for(el.lastIndex=0;;){const r=el.exec(n),o=el.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){id(t,l===void 0?new qM(a,s,e):new YM(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new jM(a),id(t,h)),t=h}}}class Ta{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);KM(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function sd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const $M=37297;let ZM=0;function JM(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function QM(s){const e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(s);let n;switch(e===t?n="":e===ba&&t===Na?n="LinearDisplayP3ToLinearSRGB":e===Na&&t===ba&&(n="LinearSRGBToLinearDisplayP3"),s){case Vt:case ja:return[n,"LinearTransferOETF"];case fn:case ru:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function rd(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+JM(s.getShaderSource(e),o)}else return i}function eT(s,e){const t=QM(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function tT(s,e){let t;switch(e){case Tf:t="Linear";break;case Sf:t="Reinhard";break;case Ef:t="OptimizedCineon";break;case Af:t="ACESFilmic";break;case wf:t="AgX";break;case n_:t="Neutral";break;case t_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function nT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mo).join(`
`)}function iT(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sT(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function mo(s){return s!==""}function od(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ad(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(s){return s.replace(rT,aT)}const oT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function aT(s,e){let t=Ke[e];if(t===void 0){const n=oT.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ol(t)}const cT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cd(s){return s.replace(cT,lT)}function lT(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ld(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uT(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Mf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ng?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function hT(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Sr:case Er:e="ENVMAP_TYPE_CUBE";break;case Ya:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dT(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Er:e="ENVMAP_MODE_REFRACTION";break}return e}function fT(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case qa:e="ENVMAP_BLENDING_MULTIPLY";break;case Qg:e="ENVMAP_BLENDING_MIX";break;case e_:e="ENVMAP_BLENDING_ADD";break}return e}function pT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function mT(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=uT(t),l=hT(t),u=dT(t),h=fT(t),d=pT(t),f=nT(t),g=iT(r),_=i.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mo).join(`
`),p.length>0&&(p+=`
`)):(m=[ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mo).join(`
`),p=[ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?Ke.tonemapping_pars_fragment:"",t.toneMapping!==ai?tT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,eT("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mo).join(`
`)),o=Ol(o),o=od(o,t),o=ad(o,t),a=Ol(a),a=od(a,t),a=ad(a,t),o=cd(o),a=cd(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=S+m+o,E=S+p+a,P=sd(i,i.VERTEX_SHADER,x),R=sd(i,i.FRAGMENT_SHADER,E);i.attachShader(_,P),i.attachShader(_,R),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function N(k){if(s.debug.checkShaderErrors){const $=i.getProgramInfoLog(_).trim(),U=i.getShaderInfoLog(P).trim(),Q=i.getShaderInfoLog(R).trim();let Z=!0,ae=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,P,R);else{const re=rd(i,P,"vertex"),q=rd(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+$+`
`+re+`
`+q)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(U===""||Q==="")&&(ae=!1);ae&&(k.diagnostics={runnable:Z,programLog:$,vertexShader:{log:U,prefix:m},fragmentShader:{log:Q,prefix:p}})}i.deleteShader(P),i.deleteShader(R),V=new Ta(i,_),T=sT(i,_)}let V;this.getUniforms=function(){return V===void 0&&N(this),V};let T;this.getAttributes=function(){return T===void 0&&N(this),T};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,$M)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ZM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=R,this}let gT=0;class _T{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xT(e),t.set(e,n)),n}}class xT{constructor(e){this.id=gT++,this.code=e,this.usedTimes=0}}function vT(s,e,t,n,i,r,o){const a=new Xf,c=new _T,l=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,y,k,$,U){const Q=$.fog,Z=U.geometry,ae=T.isMeshStandardMaterial?$.environment:null,re=(T.isMeshStandardMaterial?t:e).get(T.envMap||ae),q=re&&re.mapping===Ya?re.image.height:null,ce=g[T.type];T.precision!==null&&(f=i.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const oe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ne=oe!==void 0?oe.length:0;let et=0;Z.morphAttributes.position!==void 0&&(et=1),Z.morphAttributes.normal!==void 0&&(et=2),Z.morphAttributes.color!==void 0&&(et=3);let xt,j,le,Me;if(ce){const ln=vi[ce];xt=ln.vertexShader,j=ln.fragmentShader}else xt=T.vertexShader,j=T.fragmentShader,c.update(T),le=c.getVertexShaderID(T),Me=c.getFragmentShaderID(T);const _e=s.getRenderTarget(),Ye=U.isInstancedMesh===!0,$e=U.isBatchedMesh===!0,st=!!T.map,z=!!T.matcap,Ze=!!re,Fe=!!T.aoMap,Xt=!!T.lightMap,Be=!!T.bumpMap,pt=!!T.normalMap,A=!!T.displacementMap,v=!!T.emissiveMap,X=!!T.metalnessMap,J=!!T.roughnessMap,ee=T.anisotropy>0,te=T.clearcoat>0,De=T.iridescence>0,se=T.sheen>0,Ce=T.transmission>0,Oe=ee&&!!T.anisotropyMap,pe=te&&!!T.clearcoatMap,ye=te&&!!T.clearcoatNormalMap,ke=te&&!!T.clearcoatRoughnessMap,Se=De&&!!T.iridescenceMap,Ee=De&&!!T.iridescenceThicknessMap,it=se&&!!T.sheenColorMap,rt=se&&!!T.sheenRoughnessMap,ut=!!T.specularMap,ot=!!T.specularColorMap,wt=!!T.specularIntensityMap,be=Ce&&!!T.transmissionMap,b=Ce&&!!T.thicknessMap,fe=!!T.gradientMap,ue=!!T.alphaMap,Re=T.alphaTest>0,Ie=!!T.alphaHash,vt=!!T.extensions;let Nt=ai;T.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Nt=s.toneMapping);const Ct={shaderID:ce,shaderType:T.type,shaderName:T.name,vertexShader:xt,fragmentShader:j,defines:T.defines,customVertexShaderID:le,customFragmentShaderID:Me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:$e,instancing:Ye,instancingColor:Ye&&U.instanceColor!==null,instancingMorph:Ye&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Vt,alphaToCoverage:!!T.alphaToCoverage,map:st,matcap:z,envMap:Ze,envMapMode:Ze&&re.mapping,envMapCubeUVHeight:q,aoMap:Fe,lightMap:Xt,bumpMap:Be,normalMap:pt,displacementMap:d&&A,emissiveMap:v,normalMapObjectSpace:pt&&T.normalMapType===Bf,normalMapTangentSpace:pt&&T.normalMapType===Ps,metalnessMap:X,roughnessMap:J,anisotropy:ee,anisotropyMap:Oe,clearcoat:te,clearcoatMap:pe,clearcoatNormalMap:ye,clearcoatRoughnessMap:ke,iridescence:De,iridescenceMap:Se,iridescenceThicknessMap:Ee,sheen:se,sheenColorMap:it,sheenRoughnessMap:rt,specularMap:ut,specularColorMap:ot,specularIntensityMap:wt,transmission:Ce,transmissionMap:be,thicknessMap:b,gradientMap:fe,opaque:T.transparent===!1&&T.blending===pr&&T.alphaToCoverage===!1,alphaMap:ue,alphaTest:Re,alphaHash:Ie,combine:T.combine,mapUv:st&&_(T.map.channel),aoMapUv:Fe&&_(T.aoMap.channel),lightMapUv:Xt&&_(T.lightMap.channel),bumpMapUv:Be&&_(T.bumpMap.channel),normalMapUv:pt&&_(T.normalMap.channel),displacementMapUv:A&&_(T.displacementMap.channel),emissiveMapUv:v&&_(T.emissiveMap.channel),metalnessMapUv:X&&_(T.metalnessMap.channel),roughnessMapUv:J&&_(T.roughnessMap.channel),anisotropyMapUv:Oe&&_(T.anisotropyMap.channel),clearcoatMapUv:pe&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:ye&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:it&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:rt&&_(T.sheenRoughnessMap.channel),specularMapUv:ut&&_(T.specularMap.channel),specularColorMapUv:ot&&_(T.specularColorMap.channel),specularIntensityMapUv:wt&&_(T.specularIntensityMap.channel),transmissionMapUv:be&&_(T.transmissionMap.channel),thicknessMapUv:b&&_(T.thicknessMap.channel),alphaMapUv:ue&&_(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(pt||ee),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!Z.attributes.uv&&(st||ue),fog:!!Q,useFog:T.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:U.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:et,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Nt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:st&&T.map.isVideoTexture===!0&&at.getTransfer(T.map.colorSpace)===St,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ni,flipSided:T.side===An,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:vt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:vt&&T.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function p(T){const y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)y.push(k),y.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(S(y,T),x(y,T),y.push(s.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function S(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function x(T,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),T.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),T.push(a.mask)}function E(T){const y=g[T.type];let k;if(y){const $=vi[y];k=nx.clone($.uniforms)}else k=T.uniforms;return k}function P(T,y){let k;for(let $=0,U=u.length;$<U;$++){const Q=u[$];if(Q.cacheKey===y){k=Q,++k.usedTimes;break}}return k===void 0&&(k=new mT(s,y,T,r),u.push(k)),k}function R(T){if(--T.usedTimes===0){const y=u.indexOf(T);u[y]=u[u.length-1],u.pop(),T.destroy()}}function N(T){c.remove(T)}function V(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:P,releaseProgram:R,releaseShaderCache:N,programs:u,dispose:V}}function yT(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function MT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ud(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function hd(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||MT),n.length>1&&n.sort(d||ud),i.length>1&&i.sort(d||ud)}function u(){for(let h=e,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function TT(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new hd,s.set(n,[o])):i>=r.length?(o=new hd,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function ST(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ve};break;case"SpotLight":t={position:new L,direction:new L,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function ET(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let AT=0;function wT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function NT(s){const e=new ST,t=ET(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const i=new L,r=new ze,o=new ze;function a(l,u){let h=0,d=0,f=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let g=0,_=0,m=0,p=0,S=0,x=0,E=0,P=0,R=0,N=0,V=0;l.sort(wT);const T=u===!0?Math.PI:1;for(let k=0,$=l.length;k<$;k++){const U=l[k],Q=U.color,Z=U.intensity,ae=U.distance,re=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=Q.r*Z*T,d+=Q.g*Z*T,f+=Q.b*Z*T;else if(U.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(U.sh.coefficients[q],Z);V++}else if(U.isDirectionalLight){const q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity*T),U.castShadow){const ce=U.shadow,oe=t.get(U);oe.shadowBias=ce.bias,oe.shadowNormalBias=ce.normalBias,oe.shadowRadius=ce.radius,oe.shadowMapSize=ce.mapSize,n.directionalShadow[g]=oe,n.directionalShadowMap[g]=re,n.directionalShadowMatrix[g]=U.shadow.matrix,x++}n.directional[g]=q,g++}else if(U.isSpotLight){const q=e.get(U);q.position.setFromMatrixPosition(U.matrixWorld),q.color.copy(Q).multiplyScalar(Z*T),q.distance=ae,q.coneCos=Math.cos(U.angle),q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),q.decay=U.decay,n.spot[m]=q;const ce=U.shadow;if(U.map&&(n.spotLightMap[R]=U.map,R++,ce.updateMatrices(U),U.castShadow&&N++),n.spotLightMatrix[m]=ce.matrix,U.castShadow){const oe=t.get(U);oe.shadowBias=ce.bias,oe.shadowNormalBias=ce.normalBias,oe.shadowRadius=ce.radius,oe.shadowMapSize=ce.mapSize,n.spotShadow[m]=oe,n.spotShadowMap[m]=re,P++}m++}else if(U.isRectAreaLight){const q=e.get(U);q.color.copy(Q).multiplyScalar(Z),q.halfWidth.set(U.width*.5,0,0),q.halfHeight.set(0,U.height*.5,0),n.rectArea[p]=q,p++}else if(U.isPointLight){const q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity*T),q.distance=U.distance,q.decay=U.decay,U.castShadow){const ce=U.shadow,oe=t.get(U);oe.shadowBias=ce.bias,oe.shadowNormalBias=ce.normalBias,oe.shadowRadius=ce.radius,oe.shadowMapSize=ce.mapSize,oe.shadowCameraNear=ce.camera.near,oe.shadowCameraFar=ce.camera.far,n.pointShadow[_]=oe,n.pointShadowMap[_]=re,n.pointShadowMatrix[_]=U.shadow.matrix,E++}n.point[_]=q,_++}else if(U.isHemisphereLight){const q=e.get(U);q.skyColor.copy(U.color).multiplyScalar(Z*T),q.groundColor.copy(U.groundColor).multiplyScalar(Z*T),n.hemi[S]=q,S++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const y=n.hash;(y.directionalLength!==g||y.pointLength!==_||y.spotLength!==m||y.rectAreaLength!==p||y.hemiLength!==S||y.numDirectionalShadows!==x||y.numPointShadows!==E||y.numSpotShadows!==P||y.numSpotMaps!==R||y.numLightProbes!==V)&&(n.directional.length=g,n.spot.length=m,n.rectArea.length=p,n.point.length=_,n.hemi.length=S,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=P,n.spotShadowMap.length=P,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=P+R-N,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=V,y.directionalLength=g,y.pointLength=_,y.spotLength=m,y.rectAreaLength=p,y.hemiLength=S,y.numDirectionalShadows=x,y.numPointShadows=E,y.numSpotShadows=P,y.numSpotMaps=R,y.numLightProbes=V,n.version=AT++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const x=l[p];if(x.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),h++}else if(x.isSpotLight){const E=n.spot[f];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function dd(s){const e=new NT(s),t=[],n=[];function i(){t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(u){e.setup(t,u)}function c(u){e.setupView(t,u)}return{init:i,state:{lightsArray:t,shadowsArray:n,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function bT(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new dd(s),e.set(i,[a])):r>=o.length?(a=new dd(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class RT extends yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=m_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class CT extends yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const LT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IT=`uniform sampler2D shadow_pass;
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
}`;function PT(s,e,t){let n=new cu;const i=new xe,r=new xe,o=new tt,a=new RT({depthPacking:g_}),c=new CT,l={},u=t.maxTextureSize,h={[Hi]:An,[An]:Hi,[ni]:ni},d=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:LT,fragmentShader:IT}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Hn;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Gt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mf;let p=this.type;this.render=function(R,N,V){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const T=s.getRenderTarget(),y=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),$=s.state;$.setBlending(cs),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const U=p!==_i&&this.type===_i,Q=p===_i&&this.type!==_i;for(let Z=0,ae=R.length;Z<ae;Z++){const re=R[Z],q=re.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const ce=q.getFrameExtents();if(i.multiply(ce),r.copy(q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ce.x),i.x=r.x*ce.x,q.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ce.y),i.y=r.y*ce.y,q.mapSize.y=r.y)),q.map===null||U===!0||Q===!0){const Ne=this.type!==_i?{minFilter:Kt,magFilter:Kt}:{};q.map!==null&&q.map.dispose(),q.map=new Ds(i.x,i.y,Ne),q.map.texture.name=re.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const oe=q.getViewportCount();for(let Ne=0;Ne<oe;Ne++){const et=q.getViewport(Ne);o.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),$.viewport(o),q.updateMatrices(re,Ne),n=q.getFrustum(),E(N,V,q.camera,re,this.type)}q.isPointLightShadow!==!0&&this.type===_i&&S(q,V),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(T,y,k)};function S(R,N){const V=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ds(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(N,null,V,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(N,null,V,f,_,null)}function x(R,N,V,T){let y=null;const k=V.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(k!==void 0)y=k;else if(y=V.isPointLight===!0?c:a,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const $=y.uuid,U=N.uuid;let Q=l[$];Q===void 0&&(Q={},l[$]=Q);let Z=Q[U];Z===void 0&&(Z=y.clone(),Q[U]=Z,N.addEventListener("dispose",P)),y=Z}if(y.visible=N.visible,y.wireframe=N.wireframe,T===_i?y.side=N.shadowSide!==null?N.shadowSide:N.side:y.side=N.shadowSide!==null?N.shadowSide:h[N.side],y.alphaMap=N.alphaMap,y.alphaTest=N.alphaTest,y.map=N.map,y.clipShadows=N.clipShadows,y.clippingPlanes=N.clippingPlanes,y.clipIntersection=N.clipIntersection,y.displacementMap=N.displacementMap,y.displacementScale=N.displacementScale,y.displacementBias=N.displacementBias,y.wireframeLinewidth=N.wireframeLinewidth,y.linewidth=N.linewidth,V.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const $=s.properties.get(y);$.light=V}return y}function E(R,N,V,T,y){if(R.visible===!1)return;if(R.layers.test(N.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===_i)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,R.matrixWorld);const U=e.update(R),Q=R.material;if(Array.isArray(Q)){const Z=U.groups;for(let ae=0,re=Z.length;ae<re;ae++){const q=Z[ae],ce=Q[q.materialIndex];if(ce&&ce.visible){const oe=x(R,ce,T,y);R.onBeforeShadow(s,R,N,V,U,oe,q),s.renderBufferDirect(V,null,U,oe,R,q),R.onAfterShadow(s,R,N,V,U,oe,q)}}}else if(Q.visible){const Z=x(R,Q,T,y);R.onBeforeShadow(s,R,N,V,U,Z,null),s.renderBufferDirect(V,null,U,Z,R,null),R.onAfterShadow(s,R,N,V,U,Z,null)}}const $=R.children;for(let U=0,Q=$.length;U<Q;U++)E($[U],N,V,T,y)}function P(R){R.target.removeEventListener("dispose",P);for(const V in l){const T=l[V],y=R.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}function DT(s){function e(){let b=!1;const fe=new tt;let ue=null;const Re=new tt(0,0,0,0);return{setMask:function(Ie){ue!==Ie&&!b&&(s.colorMask(Ie,Ie,Ie,Ie),ue=Ie)},setLocked:function(Ie){b=Ie},setClear:function(Ie,vt,Nt,Ct,ln){ln===!0&&(Ie*=Ct,vt*=Ct,Nt*=Ct),fe.set(Ie,vt,Nt,Ct),Re.equals(fe)===!1&&(s.clearColor(Ie,vt,Nt,Ct),Re.copy(fe))},reset:function(){b=!1,ue=null,Re.set(-1,0,0,0)}}}function t(){let b=!1,fe=null,ue=null,Re=null;return{setTest:function(Ie){Ie?Me(s.DEPTH_TEST):_e(s.DEPTH_TEST)},setMask:function(Ie){fe!==Ie&&!b&&(s.depthMask(Ie),fe=Ie)},setFunc:function(Ie){if(ue!==Ie){switch(Ie){case qg:s.depthFunc(s.NEVER);break;case Yg:s.depthFunc(s.ALWAYS);break;case jg:s.depthFunc(s.LESS);break;case Ea:s.depthFunc(s.LEQUAL);break;case Kg:s.depthFunc(s.EQUAL);break;case $g:s.depthFunc(s.GEQUAL);break;case Zg:s.depthFunc(s.GREATER);break;case Jg:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ue=Ie}},setLocked:function(Ie){b=Ie},setClear:function(Ie){Re!==Ie&&(s.clearDepth(Ie),Re=Ie)},reset:function(){b=!1,fe=null,ue=null,Re=null}}}function n(){let b=!1,fe=null,ue=null,Re=null,Ie=null,vt=null,Nt=null,Ct=null,ln=null;return{setTest:function(Tt){b||(Tt?Me(s.STENCIL_TEST):_e(s.STENCIL_TEST))},setMask:function(Tt){fe!==Tt&&!b&&(s.stencilMask(Tt),fe=Tt)},setFunc:function(Tt,mi,gi){(ue!==Tt||Re!==mi||Ie!==gi)&&(s.stencilFunc(Tt,mi,gi),ue=Tt,Re=mi,Ie=gi)},setOp:function(Tt,mi,gi){(vt!==Tt||Nt!==mi||Ct!==gi)&&(s.stencilOp(Tt,mi,gi),vt=Tt,Nt=mi,Ct=gi)},setLocked:function(Tt){b=Tt},setClear:function(Tt){ln!==Tt&&(s.clearStencil(Tt),ln=Tt)},reset:function(){b=!1,fe=null,ue=null,Re=null,Ie=null,vt=null,Nt=null,Ct=null,ln=null}}}const i=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,S=null,x=null,E=null,P=null,R=new ve(0,0,0),N=0,V=!1,T=null,y=null,k=null,$=null,U=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ae=0;const re=s.getParameter(s.VERSION);re.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(re)[1]),Z=ae>=1):re.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),Z=ae>=2);let q=null,ce={};const oe=s.getParameter(s.SCISSOR_BOX),Ne=s.getParameter(s.VIEWPORT),et=new tt().fromArray(oe),xt=new tt().fromArray(Ne);function j(b,fe,ue,Re){const Ie=new Uint8Array(4),vt=s.createTexture();s.bindTexture(b,vt),s.texParameteri(b,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(b,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Nt=0;Nt<ue;Nt++)b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY?s.texImage3D(fe,0,s.RGBA,1,1,Re,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(fe+Nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return vt}const le={};le[s.TEXTURE_2D]=j(s.TEXTURE_2D,s.TEXTURE_2D,1),le[s.TEXTURE_CUBE_MAP]=j(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[s.TEXTURE_2D_ARRAY]=j(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),le[s.TEXTURE_3D]=j(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Me(s.DEPTH_TEST),r.setFunc(Ea),Be(!1),pt(Wu),Me(s.CULL_FACE),Fe(cs);function Me(b){l[b]!==!0&&(s.enable(b),l[b]=!0)}function _e(b){l[b]!==!1&&(s.disable(b),l[b]=!1)}function Ye(b,fe){return u[b]!==fe?(s.bindFramebuffer(b,fe),u[b]=fe,b===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=fe),b===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=fe),!0):!1}function $e(b,fe){let ue=d,Re=!1;if(b){ue=h.get(fe),ue===void 0&&(ue=[],h.set(fe,ue));const Ie=b.textures;if(ue.length!==Ie.length||ue[0]!==s.COLOR_ATTACHMENT0){for(let vt=0,Nt=Ie.length;vt<Nt;vt++)ue[vt]=s.COLOR_ATTACHMENT0+vt;ue.length=Ie.length,Re=!0}}else ue[0]!==s.BACK&&(ue[0]=s.BACK,Re=!0);Re&&s.drawBuffers(ue)}function st(b){return f!==b?(s.useProgram(b),f=b,!0):!1}const z={[bs]:s.FUNC_ADD,[Rg]:s.FUNC_SUBTRACT,[Cg]:s.FUNC_REVERSE_SUBTRACT};z[Lg]=s.MIN,z[Ig]=s.MAX;const Ze={[Pg]:s.ZERO,[Dg]:s.ONE,[Ug]:s.SRC_COLOR,[Cl]:s.SRC_ALPHA,[kg]:s.SRC_ALPHA_SATURATE,[Bg]:s.DST_COLOR,[Fg]:s.DST_ALPHA,[Og]:s.ONE_MINUS_SRC_COLOR,[Ll]:s.ONE_MINUS_SRC_ALPHA,[zg]:s.ONE_MINUS_DST_COLOR,[Vg]:s.ONE_MINUS_DST_ALPHA,[Hg]:s.CONSTANT_COLOR,[Gg]:s.ONE_MINUS_CONSTANT_COLOR,[Wg]:s.CONSTANT_ALPHA,[Xg]:s.ONE_MINUS_CONSTANT_ALPHA};function Fe(b,fe,ue,Re,Ie,vt,Nt,Ct,ln,Tt){if(b===cs){g===!0&&(_e(s.BLEND),g=!1);return}if(g===!1&&(Me(s.BLEND),g=!0),b!==bg){if(b!==_||Tt!==V){if((m!==bs||x!==bs)&&(s.blendEquation(s.FUNC_ADD),m=bs,x=bs),Tt)switch(b){case pr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xu:s.blendFunc(s.ONE,s.ONE);break;case qu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case pr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xu:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case qu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}p=null,S=null,E=null,P=null,R.set(0,0,0),N=0,_=b,V=Tt}return}Ie=Ie||fe,vt=vt||ue,Nt=Nt||Re,(fe!==m||Ie!==x)&&(s.blendEquationSeparate(z[fe],z[Ie]),m=fe,x=Ie),(ue!==p||Re!==S||vt!==E||Nt!==P)&&(s.blendFuncSeparate(Ze[ue],Ze[Re],Ze[vt],Ze[Nt]),p=ue,S=Re,E=vt,P=Nt),(Ct.equals(R)===!1||ln!==N)&&(s.blendColor(Ct.r,Ct.g,Ct.b,ln),R.copy(Ct),N=ln),_=b,V=!1}function Xt(b,fe){b.side===ni?_e(s.CULL_FACE):Me(s.CULL_FACE);let ue=b.side===An;fe&&(ue=!ue),Be(ue),b.blending===pr&&b.transparent===!1?Fe(cs):Fe(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),r.setFunc(b.depthFunc),r.setTest(b.depthTest),r.setMask(b.depthWrite),i.setMask(b.colorWrite);const Re=b.stencilWrite;o.setTest(Re),Re&&(o.setMask(b.stencilWriteMask),o.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),o.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),v(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?Me(s.SAMPLE_ALPHA_TO_COVERAGE):_e(s.SAMPLE_ALPHA_TO_COVERAGE)}function Be(b){T!==b&&(b?s.frontFace(s.CW):s.frontFace(s.CCW),T=b)}function pt(b){b!==Ag?(Me(s.CULL_FACE),b!==y&&(b===Wu?s.cullFace(s.BACK):b===wg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_e(s.CULL_FACE),y=b}function A(b){b!==k&&(Z&&s.lineWidth(b),k=b)}function v(b,fe,ue){b?(Me(s.POLYGON_OFFSET_FILL),($!==fe||U!==ue)&&(s.polygonOffset(fe,ue),$=fe,U=ue)):_e(s.POLYGON_OFFSET_FILL)}function X(b){b?Me(s.SCISSOR_TEST):_e(s.SCISSOR_TEST)}function J(b){b===void 0&&(b=s.TEXTURE0+Q-1),q!==b&&(s.activeTexture(b),q=b)}function ee(b,fe,ue){ue===void 0&&(q===null?ue=s.TEXTURE0+Q-1:ue=q);let Re=ce[ue];Re===void 0&&(Re={type:void 0,texture:void 0},ce[ue]=Re),(Re.type!==b||Re.texture!==fe)&&(q!==ue&&(s.activeTexture(ue),q=ue),s.bindTexture(b,fe||le[b]),Re.type=b,Re.texture=fe)}function te(){const b=ce[q];b!==void 0&&b.type!==void 0&&(s.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function De(){try{s.compressedTexImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function se(){try{s.compressedTexImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ce(){try{s.texSubImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Oe(){try{s.texSubImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ye(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ke(){try{s.texStorage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Se(){try{s.texStorage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ee(){try{s.texImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function it(){try{s.texImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function rt(b){et.equals(b)===!1&&(s.scissor(b.x,b.y,b.z,b.w),et.copy(b))}function ut(b){xt.equals(b)===!1&&(s.viewport(b.x,b.y,b.z,b.w),xt.copy(b))}function ot(b,fe){let ue=c.get(fe);ue===void 0&&(ue=new WeakMap,c.set(fe,ue));let Re=ue.get(b);Re===void 0&&(Re=s.getUniformBlockIndex(fe,b.name),ue.set(b,Re))}function wt(b,fe){const Re=c.get(fe).get(b);a.get(fe)!==Re&&(s.uniformBlockBinding(fe,Re,b.__bindingPointIndex),a.set(fe,Re))}function be(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},q=null,ce={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,S=null,x=null,E=null,P=null,R=new ve(0,0,0),N=0,V=!1,T=null,y=null,k=null,$=null,U=null,et.set(0,0,s.canvas.width,s.canvas.height),xt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:Me,disable:_e,bindFramebuffer:Ye,drawBuffers:$e,useProgram:st,setBlending:Fe,setMaterial:Xt,setFlipSided:Be,setCullFace:pt,setLineWidth:A,setPolygonOffset:v,setScissorTest:X,activeTexture:J,bindTexture:ee,unbindTexture:te,compressedTexImage2D:De,compressedTexImage3D:se,texImage2D:Ee,texImage3D:it,updateUBOMapping:ot,uniformBlockBinding:wt,texStorage2D:ke,texStorage3D:Se,texSubImage2D:Ce,texSubImage3D:Oe,compressedTexSubImage2D:pe,compressedTexSubImage3D:ye,scissor:rt,viewport:ut,reset:be}}function UT(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xe,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return f?new OffscreenCanvas(A,v):Eo("canvas")}function _(A,v,X){let J=1;const ee=pt(A);if((ee.width>X||ee.height>X)&&(J=X/Math.max(ee.width,ee.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const te=Math.floor(J*ee.width),De=Math.floor(J*ee.height);h===void 0&&(h=g(te,De));const se=v?g(te,De):h;return se.width=te,se.height=De,se.getContext("2d").drawImage(A,0,0,te,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+te+"x"+De+")."),se}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==Kt&&A.minFilter!==Dn}function p(A){s.generateMipmap(A)}function S(A,v,X,J,ee=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let te=v;if(v===s.RED&&(X===s.FLOAT&&(te=s.R32F),X===s.HALF_FLOAT&&(te=s.R16F),X===s.UNSIGNED_BYTE&&(te=s.R8)),v===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(te=s.R8UI),X===s.UNSIGNED_SHORT&&(te=s.R16UI),X===s.UNSIGNED_INT&&(te=s.R32UI),X===s.BYTE&&(te=s.R8I),X===s.SHORT&&(te=s.R16I),X===s.INT&&(te=s.R32I)),v===s.RG&&(X===s.FLOAT&&(te=s.RG32F),X===s.HALF_FLOAT&&(te=s.RG16F),X===s.UNSIGNED_BYTE&&(te=s.RG8)),v===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(te=s.RG8UI),X===s.UNSIGNED_SHORT&&(te=s.RG16UI),X===s.UNSIGNED_INT&&(te=s.RG32UI),X===s.BYTE&&(te=s.RG8I),X===s.SHORT&&(te=s.RG16I),X===s.INT&&(te=s.RG32I)),v===s.RGB&&X===s.UNSIGNED_INT_5_9_9_9_REV&&(te=s.RGB9_E5),v===s.RGBA){const De=ee?wa:at.getTransfer(J);X===s.FLOAT&&(te=s.RGBA32F),X===s.HALF_FLOAT&&(te=s.RGBA16F),X===s.UNSIGNED_BYTE&&(te=De===St?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Kt&&A.minFilter!==Dn?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function E(A){const v=A.target;v.removeEventListener("dispose",E),R(v),v.isVideoTexture&&u.delete(v)}function P(A){const v=A.target;v.removeEventListener("dispose",P),V(v)}function R(A){const v=n.get(A);if(v.__webglInit===void 0)return;const X=A.source,J=d.get(X);if(J){const ee=J[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&N(A),Object.keys(J).length===0&&d.delete(X)}n.remove(A)}function N(A){const v=n.get(A);s.deleteTexture(v.__webglTexture);const X=A.source,J=d.get(X);delete J[v.__cacheKey],o.memory.textures--}function V(A){const v=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let ee=0;ee<v.__webglFramebuffer[J].length;ee++)s.deleteFramebuffer(v.__webglFramebuffer[J][ee]);else s.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)s.deleteFramebuffer(v.__webglFramebuffer[J]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const X=A.textures;for(let J=0,ee=X.length;J<ee;J++){const te=n.get(X[J]);te.__webglTexture&&(s.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(X[J])}n.remove(A)}let T=0;function y(){T=0}function k(){const A=T;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),T+=1,A}function $(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function U(A,v){const X=n.get(A);if(A.isVideoTexture&&Xt(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(X,A,v);return}}t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+v)}function Q(A,v){const X=n.get(A);if(A.version>0&&X.__version!==A.version){et(X,A,v);return}t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+v)}function Z(A,v){const X=n.get(A);if(A.version>0&&X.__version!==A.version){et(X,A,v);return}t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+v)}function ae(A,v){const X=n.get(A);if(A.version>0&&X.__version!==A.version){xt(X,A,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+v)}const re={[Ar]:s.REPEAT,[rs]:s.CLAMP_TO_EDGE,[Aa]:s.MIRRORED_REPEAT},q={[Kt]:s.NEAREST,[bf]:s.NEAREST_MIPMAP_NEAREST,[po]:s.NEAREST_MIPMAP_LINEAR,[Dn]:s.LINEAR,[Ma]:s.LINEAR_MIPMAP_NEAREST,[Mi]:s.LINEAR_MIPMAP_LINEAR},ce={[__]:s.NEVER,[T_]:s.ALWAYS,[zf]:s.LESS,[kf]:s.LEQUAL,[x_]:s.EQUAL,[M_]:s.GEQUAL,[v_]:s.GREATER,[y_]:s.NOTEQUAL};function oe(A,v){if(v.type===ri&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Dn||v.magFilter===Ma||v.magFilter===po||v.magFilter===Mi||v.minFilter===Dn||v.minFilter===Ma||v.minFilter===po||v.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,re[v.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,re[v.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,re[v.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,q[v.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,q[v.minFilter]),v.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ce[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Kt||v.minFilter!==po&&v.minFilter!==Mi||v.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ne(A,v){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",E));const J=v.source;let ee=d.get(J);ee===void 0&&(ee={},d.set(J,ee));const te=$(v);if(te!==A.__cacheKey){ee[te]===void 0&&(ee[te]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ee[te].usedTimes++;const De=ee[A.__cacheKey];De!==void 0&&(ee[A.__cacheKey].usedTimes--,De.usedTimes===0&&N(v)),A.__cacheKey=te,A.__webglTexture=ee[te].texture}return X}function et(A,v,X){let J=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=s.TEXTURE_3D);const ee=Ne(A,v),te=v.source;t.bindTexture(J,A.__webglTexture,s.TEXTURE0+X);const De=n.get(te);if(te.version!==De.__version||ee===!0){t.activeTexture(s.TEXTURE0+X);const se=at.getPrimaries(at.workingColorSpace),Ce=v.colorSpace===zi?null:at.getPrimaries(v.colorSpace),Oe=v.colorSpace===zi||se===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let pe=_(v.image,!1,i.maxTextureSize);pe=Be(v,pe);const ye=r.convert(v.format,v.colorSpace),ke=r.convert(v.type);let Se=S(v.internalFormat,ye,ke,v.colorSpace,v.isVideoTexture);oe(J,v);let Ee;const it=v.mipmaps,rt=v.isVideoTexture!==!0&&Se!==Ff,ut=De.__version===void 0||ee===!0,ot=te.dataReady,wt=x(v,pe);if(v.isDepthTexture)Se=s.DEPTH_COMPONENT16,v.type===ri?Se=s.DEPTH_COMPONENT32F:v.type===wr?Se=s.DEPTH_COMPONENT24:v.type===Io&&(Se=s.DEPTH24_STENCIL8),ut&&(rt?t.texStorage2D(s.TEXTURE_2D,1,Se,pe.width,pe.height):t.texImage2D(s.TEXTURE_2D,0,Se,pe.width,pe.height,0,ye,ke,null));else if(v.isDataTexture)if(it.length>0){rt&&ut&&t.texStorage2D(s.TEXTURE_2D,wt,Se,it[0].width,it[0].height);for(let be=0,b=it.length;be<b;be++)Ee=it[be],rt?ot&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,Ee.width,Ee.height,ye,ke,Ee.data):t.texImage2D(s.TEXTURE_2D,be,Se,Ee.width,Ee.height,0,ye,ke,Ee.data);v.generateMipmaps=!1}else rt?(ut&&t.texStorage2D(s.TEXTURE_2D,wt,Se,pe.width,pe.height),ot&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,pe.width,pe.height,ye,ke,pe.data)):t.texImage2D(s.TEXTURE_2D,0,Se,pe.width,pe.height,0,ye,ke,pe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){rt&&ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,wt,Se,it[0].width,it[0].height,pe.depth);for(let be=0,b=it.length;be<b;be++)Ee=it[be],v.format!==oi?ye!==null?rt?ot&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,Ee.width,Ee.height,pe.depth,ye,Ee.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,be,Se,Ee.width,Ee.height,pe.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?ot&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,Ee.width,Ee.height,pe.depth,ye,ke,Ee.data):t.texImage3D(s.TEXTURE_2D_ARRAY,be,Se,Ee.width,Ee.height,pe.depth,0,ye,ke,Ee.data)}else{rt&&ut&&t.texStorage2D(s.TEXTURE_2D,wt,Se,it[0].width,it[0].height);for(let be=0,b=it.length;be<b;be++)Ee=it[be],v.format!==oi?ye!==null?rt?ot&&t.compressedTexSubImage2D(s.TEXTURE_2D,be,0,0,Ee.width,Ee.height,ye,Ee.data):t.compressedTexImage2D(s.TEXTURE_2D,be,Se,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?ot&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,Ee.width,Ee.height,ye,ke,Ee.data):t.texImage2D(s.TEXTURE_2D,be,Se,Ee.width,Ee.height,0,ye,ke,Ee.data)}else if(v.isDataArrayTexture)rt?(ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,wt,Se,pe.width,pe.height,pe.depth),ot&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,ye,ke,pe.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Se,pe.width,pe.height,pe.depth,0,ye,ke,pe.data);else if(v.isData3DTexture)rt?(ut&&t.texStorage3D(s.TEXTURE_3D,wt,Se,pe.width,pe.height,pe.depth),ot&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,ye,ke,pe.data)):t.texImage3D(s.TEXTURE_3D,0,Se,pe.width,pe.height,pe.depth,0,ye,ke,pe.data);else if(v.isFramebufferTexture){if(ut)if(rt)t.texStorage2D(s.TEXTURE_2D,wt,Se,pe.width,pe.height);else{let be=pe.width,b=pe.height;for(let fe=0;fe<wt;fe++)t.texImage2D(s.TEXTURE_2D,fe,Se,be,b,0,ye,ke,null),be>>=1,b>>=1}}else if(it.length>0){if(rt&&ut){const be=pt(it[0]);t.texStorage2D(s.TEXTURE_2D,wt,Se,be.width,be.height)}for(let be=0,b=it.length;be<b;be++)Ee=it[be],rt?ot&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,ye,ke,Ee):t.texImage2D(s.TEXTURE_2D,be,Se,ye,ke,Ee);v.generateMipmaps=!1}else if(rt){if(ut){const be=pt(pe);t.texStorage2D(s.TEXTURE_2D,wt,Se,be.width,be.height)}ot&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ye,ke,pe)}else t.texImage2D(s.TEXTURE_2D,0,Se,ye,ke,pe);m(v)&&p(J),De.__version=te.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function xt(A,v,X){if(v.image.length!==6)return;const J=Ne(A,v),ee=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+X);const te=n.get(ee);if(ee.version!==te.__version||J===!0){t.activeTexture(s.TEXTURE0+X);const De=at.getPrimaries(at.workingColorSpace),se=v.colorSpace===zi?null:at.getPrimaries(v.colorSpace),Ce=v.colorSpace===zi||De===se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Oe=v.isCompressedTexture||v.image[0].isCompressedTexture,pe=v.image[0]&&v.image[0].isDataTexture,ye=[];for(let b=0;b<6;b++)!Oe&&!pe?ye[b]=_(v.image[b],!0,i.maxCubemapSize):ye[b]=pe?v.image[b].image:v.image[b],ye[b]=Be(v,ye[b]);const ke=ye[0],Se=r.convert(v.format,v.colorSpace),Ee=r.convert(v.type),it=S(v.internalFormat,Se,Ee,v.colorSpace),rt=v.isVideoTexture!==!0,ut=te.__version===void 0||J===!0,ot=ee.dataReady;let wt=x(v,ke);oe(s.TEXTURE_CUBE_MAP,v);let be;if(Oe){rt&&ut&&t.texStorage2D(s.TEXTURE_CUBE_MAP,wt,it,ke.width,ke.height);for(let b=0;b<6;b++){be=ye[b].mipmaps;for(let fe=0;fe<be.length;fe++){const ue=be[fe];v.format!==oi?Se!==null?rt?ot&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+b,fe,0,0,ue.width,ue.height,Se,ue.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+b,fe,it,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?ot&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+b,fe,0,0,ue.width,ue.height,Se,Ee,ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+b,fe,it,ue.width,ue.height,0,Se,Ee,ue.data)}}}else{if(be=v.mipmaps,rt&&ut){be.length>0&&wt++;const b=pt(ye[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,wt,it,b.width,b.height)}for(let b=0;b<6;b++)if(pe){rt?ot&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,0,0,ye[b].width,ye[b].height,Se,Ee,ye[b].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,it,ye[b].width,ye[b].height,0,Se,Ee,ye[b].data);for(let fe=0;fe<be.length;fe++){const Re=be[fe].image[b].image;rt?ot&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+b,fe+1,0,0,Re.width,Re.height,Se,Ee,Re.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+b,fe+1,it,Re.width,Re.height,0,Se,Ee,Re.data)}}else{rt?ot&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,0,0,Se,Ee,ye[b]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,it,Se,Ee,ye[b]);for(let fe=0;fe<be.length;fe++){const ue=be[fe];rt?ot&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+b,fe+1,0,0,Se,Ee,ue.image[b]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+b,fe+1,it,Se,Ee,ue.image[b])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),te.__version=ee.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function j(A,v,X,J,ee,te){const De=r.convert(X.format,X.colorSpace),se=r.convert(X.type),Ce=S(X.internalFormat,De,se,X.colorSpace);if(!n.get(v).__hasExternalTextures){const pe=Math.max(1,v.width>>te),ye=Math.max(1,v.height>>te);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,te,Ce,pe,ye,v.depth,0,De,se,null):t.texImage2D(ee,te,Ce,pe,ye,0,De,se,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),Fe(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,ee,n.get(X).__webglTexture,0,Ze(v)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,ee,n.get(X).__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function le(A,v,X){if(s.bindRenderbuffer(s.RENDERBUFFER,A),v.depthBuffer&&!v.stencilBuffer){let J=s.DEPTH_COMPONENT24;if(X||Fe(v)){const ee=v.depthTexture;ee&&ee.isDepthTexture&&(ee.type===ri?J=s.DEPTH_COMPONENT32F:ee.type===wr&&(J=s.DEPTH_COMPONENT24));const te=Ze(v);Fe(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,J,v.width,v.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,te,J,v.width,v.height)}else s.renderbufferStorage(s.RENDERBUFFER,J,v.width,v.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,A)}else if(v.depthBuffer&&v.stencilBuffer){const J=Ze(v);X&&Fe(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,J,s.DEPTH24_STENCIL8,v.width,v.height):Fe(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,J,s.DEPTH24_STENCIL8,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,A)}else{const J=v.textures;for(let ee=0;ee<J.length;ee++){const te=J[ee],De=r.convert(te.format,te.colorSpace),se=r.convert(te.type),Ce=S(te.internalFormat,De,se,te.colorSpace),Oe=Ze(v);X&&Fe(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,Ce,v.width,v.height):Fe(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Oe,Ce,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Ce,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Me(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),U(v.depthTexture,0);const J=n.get(v.depthTexture).__webglTexture,ee=Ze(v);if(v.depthTexture.format===mr)Fe(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(v.depthTexture.format===To)Fe(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function _e(A){const v=n.get(A),X=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Me(v.__webglFramebuffer,A)}else if(X){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]=s.createRenderbuffer(),le(v.__webglDepthbuffer[J],A,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=s.createRenderbuffer(),le(v.__webglDepthbuffer,A,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(A,v,X){const J=n.get(A);v!==void 0&&j(J.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&_e(A)}function $e(A){const v=A.texture,X=n.get(A),J=n.get(v);A.addEventListener("dispose",P);const ee=A.textures,te=A.isWebGLCubeRenderTarget===!0,De=ee.length>1;if(De||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=v.version,o.memory.textures++),te){X.__webglFramebuffer=[];for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0){X.__webglFramebuffer[se]=[];for(let Ce=0;Ce<v.mipmaps.length;Ce++)X.__webglFramebuffer[se][Ce]=s.createFramebuffer()}else X.__webglFramebuffer[se]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){X.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)X.__webglFramebuffer[se]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(De)for(let se=0,Ce=ee.length;se<Ce;se++){const Oe=n.get(ee[se]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&Fe(A)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let se=0;se<ee.length;se++){const Ce=ee[se];X.__webglColorRenderbuffer[se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[se]);const Oe=r.convert(Ce.format,Ce.colorSpace),pe=r.convert(Ce.type),ye=S(Ce.internalFormat,Oe,pe,Ce.colorSpace,A.isXRRenderTarget===!0),ke=Ze(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,ye,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,X.__webglColorRenderbuffer[se])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),le(X.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(te){t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),oe(s.TEXTURE_CUBE_MAP,v);for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)j(X.__webglFramebuffer[se][Ce],A,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce);else j(X.__webglFramebuffer[se],A,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(v)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let se=0,Ce=ee.length;se<Ce;se++){const Oe=ee[se],pe=n.get(Oe);t.bindTexture(s.TEXTURE_2D,pe.__webglTexture),oe(s.TEXTURE_2D,Oe),j(X.__webglFramebuffer,A,Oe,s.COLOR_ATTACHMENT0+se,s.TEXTURE_2D,0),m(Oe)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let se=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(se=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,J.__webglTexture),oe(se,v),v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)j(X.__webglFramebuffer[Ce],A,v,s.COLOR_ATTACHMENT0,se,Ce);else j(X.__webglFramebuffer,A,v,s.COLOR_ATTACHMENT0,se,0);m(v)&&p(se),t.unbindTexture()}A.depthBuffer&&_e(A)}function st(A){const v=A.textures;for(let X=0,J=v.length;X<J;X++){const ee=v[X];if(m(ee)){const te=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,De=n.get(ee).__webglTexture;t.bindTexture(te,De),p(te),t.unbindTexture()}}}function z(A){if(A.samples>0&&Fe(A)===!1){const v=A.textures,X=A.width,J=A.height;let ee=s.COLOR_BUFFER_BIT;const te=[],De=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=n.get(A),Ce=v.length>1;if(Ce)for(let Oe=0;Oe<v.length;Oe++)t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let Oe=0;Oe<v.length;Oe++){te.push(s.COLOR_ATTACHMENT0+Oe),A.depthBuffer&&te.push(De);const pe=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(pe===!1&&(A.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&se.__isTransmissionRenderTarget!==!0&&(ee|=s.STENCIL_BUFFER_BIT)),Ce&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,se.__webglColorRenderbuffer[Oe]),pe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[De]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[De])),Ce){const ye=n.get(v[Oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ye,0)}s.blitFramebuffer(0,0,X,J,0,0,X,J,ee,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let Oe=0;Oe<v.length;Oe++){t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,se.__webglColorRenderbuffer[Oe]);const pe=n.get(v[Oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,pe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function Ze(A){return Math.min(i.maxSamples,A.samples)}function Fe(A){const v=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Xt(A){const v=o.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function Be(A,v){const X=A.colorSpace,J=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||X!==Vt&&X!==zi&&(at.getTransfer(X)===St?(J!==oi||ee!==ls)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),v}function pt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=y,this.setTexture2D=U,this.setTexture2DArray=Q,this.setTexture3D=Z,this.setTextureCube=ae,this.rebindTextures=Ye,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Fe}function OT(s,e){function t(n,i=zi){let r;const o=at.getTransfer(i);if(n===ls)return s.UNSIGNED_BYTE;if(n===Lf)return s.UNSIGNED_SHORT_4_4_4_4;if(n===If)return s.UNSIGNED_SHORT_5_5_5_1;if(n===o_)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===s_)return s.BYTE;if(n===r_)return s.SHORT;if(n===Rf)return s.UNSIGNED_SHORT;if(n===Cf)return s.INT;if(n===wr)return s.UNSIGNED_INT;if(n===ri)return s.FLOAT;if(n===Mo)return s.HALF_FLOAT;if(n===a_)return s.ALPHA;if(n===c_)return s.RGB;if(n===oi)return s.RGBA;if(n===l_)return s.LUMINANCE;if(n===u_)return s.LUMINANCE_ALPHA;if(n===mr)return s.DEPTH_COMPONENT;if(n===To)return s.DEPTH_STENCIL;if(n===Pf)return s.RED;if(n===Df)return s.RED_INTEGER;if(n===h_)return s.RG;if(n===Uf)return s.RG_INTEGER;if(n===Of)return s.RGBA_INTEGER;if(n===Ac||n===wc||n===Nc||n===bc)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ac)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Nc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ac)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Nc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ku||n===$u||n===Zu||n===Ju)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ku)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$u)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ju)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ff)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Qu||n===eh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qu)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===eh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===th||n===nh||n===ih||n===sh||n===rh||n===oh||n===ah||n===ch||n===lh||n===uh||n===hh||n===dh||n===fh||n===ph)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===th)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ih)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ah)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ch)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ph)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rc||n===mh||n===gh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Rc)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===d_||n===_h||n===xh||n===vh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_h)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Io?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class FT extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ls extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VT={type:"move"};class tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(VT)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ls;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const BT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new $t,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new Gi({vertexShader:BT,fragmentShader:zT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Gt(new Po(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class HT extends fs{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=new kT,m=t.getContextAttributes();let p=null,S=null;const x=[],E=[],P=new xe;let R=null;const N=new vn;N.layers.enable(1),N.viewport=new tt;const V=new vn;V.layers.enable(2),V.viewport=new tt;const T=[N,V],y=new FT;y.layers.enable(1),y.layers.enable(2);let k=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let le=x[j];return le===void 0&&(le=new tl,x[j]=le),le.getTargetRaySpace()},this.getControllerGrip=function(j){let le=x[j];return le===void 0&&(le=new tl,x[j]=le),le.getGripSpace()},this.getHand=function(j){let le=x[j];return le===void 0&&(le=new tl,x[j]=le),le.getHandSpace()};function U(j){const le=E.indexOf(j.inputSource);if(le===-1)return;const Me=x[le];Me!==void 0&&(Me.update(j.inputSource,j.frame,l||o),Me.dispatchEvent({type:j.type,data:j.inputSource}))}function Q(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",Z);for(let j=0;j<x.length;j++){const le=E[j];le!==null&&(E[j]=null,x[j].disconnect(le))}k=null,$=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,i=null,S=null,xt.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),i.renderState.layers===void 0){const le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,le),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Ds(f.framebufferWidth,f.framebufferHeight,{format:oi,type:ls,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let le=null,Me=null,_e=null;m.depth&&(_e=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=m.stencil?To:mr,Me=m.stencil?Io:wr);const Ye={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Ye),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Ds(d.textureWidth,d.textureHeight,{format:oi,type:ls,depthTexture:new Do(d.textureWidth,d.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const $e=e.properties.get(S);$e.__ignoreDepthValues=d.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),xt.setContext(i),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function Z(j){for(let le=0;le<j.removed.length;le++){const Me=j.removed[le],_e=E.indexOf(Me);_e>=0&&(E[_e]=null,x[_e].disconnect(Me))}for(let le=0;le<j.added.length;le++){const Me=j.added[le];let _e=E.indexOf(Me);if(_e===-1){for(let $e=0;$e<x.length;$e++)if($e>=E.length){E.push(Me),_e=$e;break}else if(E[$e]===null){E[$e]=Me,_e=$e;break}if(_e===-1)break}const Ye=x[_e];Ye&&Ye.connect(Me)}}const ae=new L,re=new L;function q(j,le,Me){ae.setFromMatrixPosition(le.matrixWorld),re.setFromMatrixPosition(Me.matrixWorld);const _e=ae.distanceTo(re),Ye=le.projectionMatrix.elements,$e=Me.projectionMatrix.elements,st=Ye[14]/(Ye[10]-1),z=Ye[14]/(Ye[10]+1),Ze=(Ye[9]+1)/Ye[5],Fe=(Ye[9]-1)/Ye[5],Xt=(Ye[8]-1)/Ye[0],Be=($e[8]+1)/$e[0],pt=st*Xt,A=st*Be,v=_e/(-Xt+Be),X=v*-Xt;le.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(X),j.translateZ(v),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const J=st+v,ee=z+v,te=pt-X,De=A+(_e-X),se=Ze*z/ee*J,Ce=Fe*z/ee*J;j.projectionMatrix.makePerspective(te,De,se,Ce,J,ee),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function ce(j,le){le===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(le.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;_.texture!==null&&(j.near=_.depthNear,j.far=_.depthFar),y.near=V.near=N.near=j.near,y.far=V.far=N.far=j.far,(k!==y.near||$!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),k=y.near,$=y.far,N.near=k,N.far=$,V.near=k,V.far=$,N.updateProjectionMatrix(),V.updateProjectionMatrix(),j.updateProjectionMatrix());const le=j.parent,Me=y.cameras;ce(y,le);for(let _e=0;_e<Me.length;_e++)ce(Me[_e],le);Me.length===2?q(y,N,V):y.projectionMatrix.copy(N.projectionMatrix),oe(j,y,le)};function oe(j,le,Me){Me===null?j.matrix.copy(le.matrixWorld):(j.matrix.copy(Me.matrixWorld),j.matrix.invert(),j.matrix.multiply(le.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(le.projectionMatrix),j.projectionMatrixInverse.copy(le.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Rr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null};let Ne=null;function et(j,le){if(u=le.getViewerPose(l||o),g=le,u!==null){const Me=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let _e=!1;Me.length!==y.cameras.length&&(y.cameras.length=0,_e=!0);for(let $e=0;$e<Me.length;$e++){const st=Me[$e];let z=null;if(f!==null)z=f.getViewport(st);else{const Fe=h.getViewSubImage(d,st);z=Fe.viewport,$e===0&&(e.setRenderTargetTextures(S,Fe.colorTexture,d.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(S))}let Ze=T[$e];Ze===void 0&&(Ze=new vn,Ze.layers.enable($e),Ze.viewport=new tt,T[$e]=Ze),Ze.matrix.fromArray(st.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(st.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(z.x,z.y,z.width,z.height),$e===0&&(y.matrix.copy(Ze.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),_e===!0&&y.cameras.push(Ze)}const Ye=i.enabledFeatures;if(Ye&&Ye.includes("depth-sensing")){const $e=h.getDepthInformation(Me[0]);$e&&$e.isValid&&$e.texture&&_.init(e,$e,i.renderState)}}for(let Me=0;Me<x.length;Me++){const _e=E[Me],Ye=x[Me];_e!==null&&Ye!==void 0&&Ye.update(_e,le,l||o)}_.render(e,y),Ne&&Ne(j,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}const xt=new Jf;xt.setAnimationLoop(et),this.setAnimationLoop=function(j){Ne=j},this.dispose=function(){}}}const Ss=new Kn,GT=new ze;function WT(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Kf(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,x,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===An&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===An&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),x=S.envMap,E=S.envMapRotation;if(x&&(m.envMap.value=x,Ss.copy(E),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),m.envMapRotation.value.setFromMatrix4(GT.makeRotationFromEuler(Ss)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const P=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*P,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===An&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function XT(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,x){const E=x.program;n.uniformBlockBinding(S,E)}function l(S,x){let E=i[S.id];E===void 0&&(g(S),E=u(S),i[S.id]=E,S.addEventListener("dispose",m));const P=x.program;n.updateUBOMapping(S,P);const R=e.render.frame;r[S.id]!==R&&(d(S),r[S.id]=R)}function u(S){const x=h();S.__bindingPointIndex=x;const E=s.createBuffer(),P=S.__size,R=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,P,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,E),E}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const x=i[S.id],E=S.uniforms,P=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let R=0,N=E.length;R<N;R++){const V=Array.isArray(E[R])?E[R]:[E[R]];for(let T=0,y=V.length;T<y;T++){const k=V[T];if(f(k,R,T,P)===!0){const $=k.__offset,U=Array.isArray(k.value)?k.value:[k.value];let Q=0;for(let Z=0;Z<U.length;Z++){const ae=U[Z],re=_(ae);typeof ae=="number"||typeof ae=="boolean"?(k.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,$+Q,k.__data)):ae.isMatrix3?(k.__data[0]=ae.elements[0],k.__data[1]=ae.elements[1],k.__data[2]=ae.elements[2],k.__data[3]=0,k.__data[4]=ae.elements[3],k.__data[5]=ae.elements[4],k.__data[6]=ae.elements[5],k.__data[7]=0,k.__data[8]=ae.elements[6],k.__data[9]=ae.elements[7],k.__data[10]=ae.elements[8],k.__data[11]=0):(ae.toArray(k.__data,Q),Q+=re.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(S,x,E,P){const R=S.value,N=x+"_"+E;if(P[N]===void 0)return typeof R=="number"||typeof R=="boolean"?P[N]=R:P[N]=R.clone(),!0;{const V=P[N];if(typeof R=="number"||typeof R=="boolean"){if(V!==R)return P[N]=R,!0}else if(V.equals(R)===!1)return V.copy(R),!0}return!1}function g(S){const x=S.uniforms;let E=0;const P=16;for(let N=0,V=x.length;N<V;N++){const T=Array.isArray(x[N])?x[N]:[x[N]];for(let y=0,k=T.length;y<k;y++){const $=T[y],U=Array.isArray($.value)?$.value:[$.value];for(let Q=0,Z=U.length;Q<Z;Q++){const ae=U[Q],re=_(ae),q=E%P;q!==0&&P-q<re.boundary&&(E+=P-q),$.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=E,E+=re.storage}}}const R=E%P;return R>0&&(E+=P-R),S.__size=E,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class qT{constructor(e={}){const{canvas:t=B_(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this._useLegacyLights=!1,this.toneMapping=ai,this.toneMappingExposure=1;const x=this;let E=!1,P=0,R=0,N=null,V=-1,T=null;const y=new tt,k=new tt;let $=null;const U=new ve(0);let Q=0,Z=t.width,ae=t.height,re=1,q=null,ce=null;const oe=new tt(0,0,Z,ae),Ne=new tt(0,0,Z,ae);let et=!1;const xt=new cu;let j=!1,le=!1;const Me=new ze,_e=new xe,Ye=new L,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function st(){return N===null?re:1}let z=n;function Ze(M,O){const G=t.getContext(M,O);return G!==null?G:null}try{const M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${su}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",Re,!1),z===null){const O="webgl2";if(z=Ze(O,M),z===null)throw Ze(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Fe,Xt,Be,pt,A,v,X,J,ee,te,De,se,Ce,Oe,pe,ye,ke,Se,Ee,it,rt,ut,ot,wt;function be(){Fe=new eM(z),Fe.init(),Xt=new jy(z,Fe,e),ut=new OT(z,Fe),Be=new DT(z),pt=new iM(z),A=new yT,v=new UT(z,Fe,Be,A,Xt,ut,pt),X=new $y(x),J=new Qy(x),ee=new lx(z),ot=new qy(z,ee),te=new tM(z,ee,pt,ot),De=new rM(z,te,ee,pt),Ee=new sM(z,Xt,v),ye=new Ky(A),se=new vT(x,X,J,Fe,Xt,ot,ye),Ce=new WT(x,A),Oe=new TT,pe=new bT(Fe),Se=new Xy(x,X,J,Be,De,d,c),ke=new PT(x,De,Xt),wt=new XT(z,pt,Xt,Be),it=new Yy(z,Fe,pt),rt=new nM(z,Fe,pt),pt.programs=se.programs,x.capabilities=Xt,x.extensions=Fe,x.properties=A,x.renderLists=Oe,x.shadowMap=ke,x.state=Be,x.info=pt}be();const b=new HT(x,z);this.xr=b,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const M=Fe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Fe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(M){M!==void 0&&(re=M,this.setSize(Z,ae,!1))},this.getSize=function(M){return M.set(Z,ae)},this.setSize=function(M,O,G=!0){if(b.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=M,ae=O,t.width=Math.floor(M*re),t.height=Math.floor(O*re),G===!0&&(t.style.width=M+"px",t.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(Z*re,ae*re).floor()},this.setDrawingBufferSize=function(M,O,G){Z=M,ae=O,re=G,t.width=Math.floor(M*G),t.height=Math.floor(O*G),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(y)},this.getViewport=function(M){return M.copy(oe)},this.setViewport=function(M,O,G,W){M.isVector4?oe.set(M.x,M.y,M.z,M.w):oe.set(M,O,G,W),Be.viewport(y.copy(oe).multiplyScalar(re).round())},this.getScissor=function(M){return M.copy(Ne)},this.setScissor=function(M,O,G,W){M.isVector4?Ne.set(M.x,M.y,M.z,M.w):Ne.set(M,O,G,W),Be.scissor(k.copy(Ne).multiplyScalar(re).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(M){Be.setScissorTest(et=M)},this.setOpaqueSort=function(M){q=M},this.setTransparentSort=function(M){ce=M},this.getClearColor=function(M){return M.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(M=!0,O=!0,G=!0){let W=0;if(M){let H=!1;if(N!==null){const ge=N.texture.format;H=ge===Of||ge===Uf||ge===Df}if(H){const ge=N.texture.type,we=ge===ls||ge===wr||ge===Rf||ge===Io||ge===Lf||ge===If,Pe=Se.getClearColor(),Ve=Se.getClearAlpha(),We=Pe.r,He=Pe.g,Xe=Pe.b;we?(f[0]=We,f[1]=He,f[2]=Xe,f[3]=Ve,z.clearBufferuiv(z.COLOR,0,f)):(g[0]=We,g[1]=He,g[2]=Xe,g[3]=Ve,z.clearBufferiv(z.COLOR,0,g))}else W|=z.COLOR_BUFFER_BIT}O&&(W|=z.DEPTH_BUFFER_BIT),G&&(W|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),Oe.dispose(),pe.dispose(),A.dispose(),X.dispose(),J.dispose(),De.dispose(),ot.dispose(),wt.dispose(),se.dispose(),b.dispose(),b.removeEventListener("sessionstart",mi),b.removeEventListener("sessionend",gi),gs.stop()};function fe(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=pt.autoReset,O=ke.enabled,G=ke.autoUpdate,W=ke.needsUpdate,H=ke.type;be(),pt.autoReset=M,ke.enabled=O,ke.autoUpdate=G,ke.needsUpdate=W,ke.type=H}function Re(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ie(M){const O=M.target;O.removeEventListener("dispose",Ie),vt(O)}function vt(M){Nt(M),A.remove(M)}function Nt(M){const O=A.get(M).programs;O!==void 0&&(O.forEach(function(G){se.releaseProgram(G)}),M.isShaderMaterial&&se.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,G,W,H,ge){O===null&&(O=$e);const we=H.isMesh&&H.matrixWorld.determinant()<0,Pe=vg(M,O,G,W,H);Be.setMaterial(W,we);let Ve=G.index,We=1;if(W.wireframe===!0){if(Ve=te.getWireframeAttribute(G),Ve===void 0)return;We=2}const He=G.drawRange,Xe=G.attributes.position;let Dt=He.start*We,Cn=(He.start+He.count)*We;ge!==null&&(Dt=Math.max(Dt,ge.start*We),Cn=Math.min(Cn,(ge.start+ge.count)*We)),Ve!==null?(Dt=Math.max(Dt,0),Cn=Math.min(Cn,Ve.count)):Xe!=null&&(Dt=Math.max(Dt,0),Cn=Math.min(Cn,Xe.count));const Qt=Cn-Dt;if(Qt<0||Qt===1/0)return;ot.setup(H,W,Pe,G,Ve);let Ci,Lt=it;if(Ve!==null&&(Ci=ee.get(Ve),Lt=rt,Lt.setIndex(Ci)),H.isMesh)W.wireframe===!0?(Be.setLineWidth(W.wireframeLinewidth*st()),Lt.setMode(z.LINES)):Lt.setMode(z.TRIANGLES);else if(H.isLine){let je=W.linewidth;je===void 0&&(je=1),Be.setLineWidth(je*st()),H.isLineSegments?Lt.setMode(z.LINES):H.isLineLoop?Lt.setMode(z.LINE_LOOP):Lt.setMode(z.LINE_STRIP)}else H.isPoints?Lt.setMode(z.POINTS):H.isSprite&&Lt.setMode(z.TRIANGLES);if(H.isBatchedMesh)Lt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)Lt.renderInstances(Dt,Qt,H.count);else if(G.isInstancedBufferGeometry){const je=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Mc=Math.min(G.instanceCount,je);Lt.renderInstances(Dt,Qt,Mc)}else Lt.render(Dt,Qt)};function Ct(M,O,G){M.transparent===!0&&M.side===ni&&M.forceSinglePass===!1?(M.side=An,M.needsUpdate=!0,ko(M,O,G),M.side=Hi,M.needsUpdate=!0,ko(M,O,G),M.side=ni):ko(M,O,G)}this.compile=function(M,O,G=null){G===null&&(G=M),m=pe.get(G),m.init(),S.push(m),G.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),M!==G&&M.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(x._useLegacyLights);const W=new Set;return M.traverse(function(H){const ge=H.material;if(ge)if(Array.isArray(ge))for(let we=0;we<ge.length;we++){const Pe=ge[we];Ct(Pe,G,H),W.add(Pe)}else Ct(ge,G,H),W.add(ge)}),S.pop(),m=null,W},this.compileAsync=function(M,O,G=null){const W=this.compile(M,O,G);return new Promise(H=>{function ge(){if(W.forEach(function(we){A.get(we).currentProgram.isReady()&&W.delete(we)}),W.size===0){H(M);return}setTimeout(ge,10)}Fe.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let ln=null;function Tt(M){ln&&ln(M)}function mi(){gs.stop()}function gi(){gs.start()}const gs=new Jf;gs.setAnimationLoop(Tt),typeof self<"u"&&gs.setContext(self),this.setAnimationLoop=function(M){ln=M,b.setAnimationLoop(M),M===null?gs.stop():gs.start()},b.addEventListener("sessionstart",mi),b.addEventListener("sessionend",gi),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),b.enabled===!0&&b.isPresenting===!0&&(b.cameraAutoUpdate===!0&&b.updateCamera(O),O=b.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,O,N),m=pe.get(M,S.length),m.init(),S.push(m),Me.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),xt.setFromProjectionMatrix(Me),le=this.localClippingEnabled,j=ye.init(this.clippingPlanes,le),_=Oe.get(M,p.length),_.init(),p.push(_),Fu(M,O,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(q,ce),this.info.render.frame++,j===!0&&ye.beginShadows();const G=m.state.shadowsArray;if(ke.render(G,M,O),j===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(b.enabled===!1||b.isPresenting===!1||b.hasDepthSensing()===!1)&&Se.render(_,M),m.setupLights(x._useLegacyLights),O.isArrayCamera){const W=O.cameras;for(let H=0,ge=W.length;H<ge;H++){const we=W[H];Vu(_,M,we,we.viewport)}}else Vu(_,M,O);N!==null&&(v.updateMultisampleRenderTarget(N),v.updateRenderTargetMipmap(N)),M.isScene===!0&&M.onAfterRender(x,M,O),ot.resetDefaultState(),V=-1,T=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Fu(M,O,G,W){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||xt.intersectsSprite(M)){W&&Ye.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Me);const we=De.update(M),Pe=M.material;Pe.visible&&_.push(M,we,Pe,G,Ye.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||xt.intersectsObject(M))){const we=De.update(M),Pe=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ye.copy(M.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ye.copy(we.boundingSphere.center)),Ye.applyMatrix4(M.matrixWorld).applyMatrix4(Me)),Array.isArray(Pe)){const Ve=we.groups;for(let We=0,He=Ve.length;We<He;We++){const Xe=Ve[We],Dt=Pe[Xe.materialIndex];Dt&&Dt.visible&&_.push(M,we,Dt,G,Ye.z,Xe)}}else Pe.visible&&_.push(M,we,Pe,G,Ye.z,null)}}const ge=M.children;for(let we=0,Pe=ge.length;we<Pe;we++)Fu(ge[we],O,G,W)}function Vu(M,O,G,W){const H=M.opaque,ge=M.transmissive,we=M.transparent;m.setupLightsView(G),j===!0&&ye.setGlobalState(x.clippingPlanes,G),ge.length>0&&xg(H,ge,O,G),W&&Be.viewport(y.copy(W)),H.length>0&&zo(H,O,G),ge.length>0&&zo(ge,O,G),we.length>0&&zo(we,O,G),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function xg(M,O,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(m.state.transmissionRenderTarget===null){m.state.transmissionRenderTarget=new Ds(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Mo:ls,minFilter:Mi,samples:4,stencilBuffer:r});const We=A.get(m.state.transmissionRenderTarget);We.__isTransmissionRenderTarget=!0}const ge=m.state.transmissionRenderTarget;x.getDrawingBufferSize(_e),ge.setSize(_e.x,_e.y);const we=x.getRenderTarget();x.setRenderTarget(ge),x.getClearColor(U),Q=x.getClearAlpha(),Q<1&&x.setClearColor(16777215,.5),x.clear();const Pe=x.toneMapping;x.toneMapping=ai,zo(M,G,W),v.updateMultisampleRenderTarget(ge),v.updateRenderTargetMipmap(ge);let Ve=!1;for(let We=0,He=O.length;We<He;We++){const Xe=O[We],Dt=Xe.object,Cn=Xe.geometry,Qt=Xe.material,Ci=Xe.group;if(Qt.side===ni&&Dt.layers.test(W.layers)){const Lt=Qt.side;Qt.side=An,Qt.needsUpdate=!0,Bu(Dt,G,W,Cn,Qt,Ci),Qt.side=Lt,Qt.needsUpdate=!0,Ve=!0}}Ve===!0&&(v.updateMultisampleRenderTarget(ge),v.updateRenderTargetMipmap(ge)),x.setRenderTarget(we),x.setClearColor(U,Q),x.toneMapping=Pe}function zo(M,O,G){const W=O.isScene===!0?O.overrideMaterial:null;for(let H=0,ge=M.length;H<ge;H++){const we=M[H],Pe=we.object,Ve=we.geometry,We=W===null?we.material:W,He=we.group;Pe.layers.test(G.layers)&&Bu(Pe,O,G,Ve,We,He)}}function Bu(M,O,G,W,H,ge){M.onBeforeRender(x,O,G,W,H,ge),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(x,O,G,W,M,ge),H.transparent===!0&&H.side===ni&&H.forceSinglePass===!1?(H.side=An,H.needsUpdate=!0,x.renderBufferDirect(G,O,W,H,M,ge),H.side=Hi,H.needsUpdate=!0,x.renderBufferDirect(G,O,W,H,M,ge),H.side=ni):x.renderBufferDirect(G,O,W,H,M,ge),M.onAfterRender(x,O,G,W,H,ge)}function ko(M,O,G){O.isScene!==!0&&(O=$e);const W=A.get(M),H=m.state.lights,ge=m.state.shadowsArray,we=H.state.version,Pe=se.getParameters(M,H.state,ge,O,G),Ve=se.getProgramCacheKey(Pe);let We=W.programs;W.environment=M.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(M.isMeshStandardMaterial?J:X).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,We===void 0&&(M.addEventListener("dispose",Ie),We=new Map,W.programs=We);let He=We.get(Ve);if(He!==void 0){if(W.currentProgram===He&&W.lightsStateVersion===we)return ku(M,Pe),He}else Pe.uniforms=se.getUniforms(M),M.onBuild(G,Pe,x),M.onBeforeCompile(Pe,x),He=se.acquireProgram(Pe,Ve),We.set(Ve,He),W.uniforms=Pe.uniforms;const Xe=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Xe.clippingPlanes=ye.uniform),ku(M,Pe),W.needsLights=Mg(M),W.lightsStateVersion=we,W.needsLights&&(Xe.ambientLightColor.value=H.state.ambient,Xe.lightProbe.value=H.state.probe,Xe.directionalLights.value=H.state.directional,Xe.directionalLightShadows.value=H.state.directionalShadow,Xe.spotLights.value=H.state.spot,Xe.spotLightShadows.value=H.state.spotShadow,Xe.rectAreaLights.value=H.state.rectArea,Xe.ltc_1.value=H.state.rectAreaLTC1,Xe.ltc_2.value=H.state.rectAreaLTC2,Xe.pointLights.value=H.state.point,Xe.pointLightShadows.value=H.state.pointShadow,Xe.hemisphereLights.value=H.state.hemi,Xe.directionalShadowMap.value=H.state.directionalShadowMap,Xe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Xe.spotShadowMap.value=H.state.spotShadowMap,Xe.spotLightMatrix.value=H.state.spotLightMatrix,Xe.spotLightMap.value=H.state.spotLightMap,Xe.pointShadowMap.value=H.state.pointShadowMap,Xe.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=He,W.uniformsList=null,He}function zu(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=Ta.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function ku(M,O){const G=A.get(M);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function vg(M,O,G,W,H){O.isScene!==!0&&(O=$e),v.resetTextureUnits();const ge=O.fog,we=W.isMeshStandardMaterial?O.environment:null,Pe=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Vt,Ve=(W.isMeshStandardMaterial?J:X).get(W.envMap||we),We=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,He=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Xe=!!G.morphAttributes.position,Dt=!!G.morphAttributes.normal,Cn=!!G.morphAttributes.color;let Qt=ai;W.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Qt=x.toneMapping);const Ci=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Lt=Ci!==void 0?Ci.length:0,je=A.get(W),Mc=m.state.lights;if(j===!0&&(le===!0||M!==T)){const Gn=M===T&&W.id===V;ye.setState(W,M,Gn)}let bt=!1;W.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Mc.state.version||je.outputColorSpace!==Pe||H.isBatchedMesh&&je.batching===!1||!H.isBatchedMesh&&je.batching===!0||H.isInstancedMesh&&je.instancing===!1||!H.isInstancedMesh&&je.instancing===!0||H.isSkinnedMesh&&je.skinning===!1||!H.isSkinnedMesh&&je.skinning===!0||H.isInstancedMesh&&je.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&je.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&je.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&je.instancingMorph===!1&&H.morphTexture!==null||je.envMap!==Ve||W.fog===!0&&je.fog!==ge||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ye.numPlanes||je.numIntersection!==ye.numIntersection)||je.vertexAlphas!==We||je.vertexTangents!==He||je.morphTargets!==Xe||je.morphNormals!==Dt||je.morphColors!==Cn||je.toneMapping!==Qt||je.morphTargetsCount!==Lt)&&(bt=!0):(bt=!0,je.__version=W.version);let _s=je.currentProgram;bt===!0&&(_s=ko(W,O,H));let Hu=!1,Qr=!1,Tc=!1;const un=_s.getUniforms(),qi=je.uniforms;if(Be.useProgram(_s.program)&&(Hu=!0,Qr=!0,Tc=!0),W.id!==V&&(V=W.id,Qr=!0),Hu||T!==M){un.setValue(z,"projectionMatrix",M.projectionMatrix),un.setValue(z,"viewMatrix",M.matrixWorldInverse);const Gn=un.map.cameraPosition;Gn!==void 0&&Gn.setValue(z,Ye.setFromMatrixPosition(M.matrixWorld)),Xt.logarithmicDepthBuffer&&un.setValue(z,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&un.setValue(z,"isOrthographic",M.isOrthographicCamera===!0),T!==M&&(T=M,Qr=!0,Tc=!0)}if(H.isSkinnedMesh){un.setOptional(z,H,"bindMatrix"),un.setOptional(z,H,"bindMatrixInverse");const Gn=H.skeleton;Gn&&(Gn.boneTexture===null&&Gn.computeBoneTexture(),un.setValue(z,"boneTexture",Gn.boneTexture,v))}H.isBatchedMesh&&(un.setOptional(z,H,"batchingTexture"),un.setValue(z,"batchingTexture",H._matricesTexture,v));const Sc=G.morphAttributes;if((Sc.position!==void 0||Sc.normal!==void 0||Sc.color!==void 0)&&Ee.update(H,G,_s),(Qr||je.receiveShadow!==H.receiveShadow)&&(je.receiveShadow=H.receiveShadow,un.setValue(z,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(qi.envMap.value=Ve,qi.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(qi.envMapIntensity.value=O.environmentIntensity),Qr&&(un.setValue(z,"toneMappingExposure",x.toneMappingExposure),je.needsLights&&yg(qi,Tc),ge&&W.fog===!0&&Ce.refreshFogUniforms(qi,ge),Ce.refreshMaterialUniforms(qi,W,re,ae,m.state.transmissionRenderTarget),Ta.upload(z,zu(je),qi,v)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ta.upload(z,zu(je),qi,v),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&un.setValue(z,"center",H.center),un.setValue(z,"modelViewMatrix",H.modelViewMatrix),un.setValue(z,"normalMatrix",H.normalMatrix),un.setValue(z,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Gn=W.uniformsGroups;for(let Ec=0,Tg=Gn.length;Ec<Tg;Ec++){const Gu=Gn[Ec];wt.update(Gu,_s),wt.bind(Gu,_s)}}return _s}function yg(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function Mg(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(M,O,G){A.get(M.texture).__webglTexture=O,A.get(M.depthTexture).__webglTexture=G;const W=A.get(M);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,O){const G=A.get(M);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,G=0){N=M,P=O,R=G;let W=!0,H=null,ge=!1,we=!1;if(M){const Ve=A.get(M);Ve.__useDefaultFramebuffer!==void 0?(Be.bindFramebuffer(z.FRAMEBUFFER,null),W=!1):Ve.__webglFramebuffer===void 0?v.setupRenderTarget(M):Ve.__hasExternalTextures&&v.rebindTextures(M,A.get(M.texture).__webglTexture,A.get(M.depthTexture).__webglTexture);const We=M.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);const He=A.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(He[O])?H=He[O][G]:H=He[O],ge=!0):M.samples>0&&v.useMultisampledRTT(M)===!1?H=A.get(M).__webglMultisampledFramebuffer:Array.isArray(He)?H=He[G]:H=He,y.copy(M.viewport),k.copy(M.scissor),$=M.scissorTest}else y.copy(oe).multiplyScalar(re).floor(),k.copy(Ne).multiplyScalar(re).floor(),$=et;if(Be.bindFramebuffer(z.FRAMEBUFFER,H)&&W&&Be.drawBuffers(M,H),Be.viewport(y),Be.scissor(k),Be.setScissorTest($),ge){const Ve=A.get(M.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ve.__webglTexture,G)}else if(we){const Ve=A.get(M.texture),We=O||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ve.__webglTexture,G||0,We)}V=-1},this.readRenderTargetPixels=function(M,O,G,W,H,ge,we){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=A.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){Be.bindFramebuffer(z.FRAMEBUFFER,Pe);try{const Ve=M.texture,We=Ve.format,He=Ve.type;if(We!==oi&&ut.convert(We)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=He===Mo&&(Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float"));if(He!==ls&&ut.convert(He)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&He!==ri&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-W&&G>=0&&G<=M.height-H&&z.readPixels(O,G,W,H,ut.convert(We),ut.convert(He),ge)}finally{const Ve=N!==null?A.get(N).__webglFramebuffer:null;Be.bindFramebuffer(z.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(M,O,G=0){const W=Math.pow(2,-G),H=Math.floor(O.image.width*W),ge=Math.floor(O.image.height*W);v.setTexture2D(O,0),z.copyTexSubImage2D(z.TEXTURE_2D,G,0,0,M.x,M.y,H,ge),Be.unbindTexture()},this.copyTextureToTexture=function(M,O,G,W=0){const H=O.image.width,ge=O.image.height,we=ut.convert(G.format),Pe=ut.convert(G.type);v.setTexture2D(G,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment),O.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,W,M.x,M.y,H,ge,we,Pe,O.image.data):O.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,W,M.x,M.y,O.mipmaps[0].width,O.mipmaps[0].height,we,O.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,W,M.x,M.y,we,Pe,O.image),W===0&&G.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Be.unbindTexture()},this.copyTextureToTexture3D=function(M,O,G,W,H=0){const ge=Math.round(M.max.x-M.min.x),we=Math.round(M.max.y-M.min.y),Pe=M.max.z-M.min.z+1,Ve=ut.convert(W.format),We=ut.convert(W.type);let He;if(W.isData3DTexture)v.setTexture3D(W,0),He=z.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)v.setTexture2DArray(W,0),He=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const Xe=z.getParameter(z.UNPACK_ROW_LENGTH),Dt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Cn=z.getParameter(z.UNPACK_SKIP_PIXELS),Qt=z.getParameter(z.UNPACK_SKIP_ROWS),Ci=z.getParameter(z.UNPACK_SKIP_IMAGES),Lt=G.isCompressedTexture?G.mipmaps[H]:G.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Lt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Lt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,M.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,M.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,M.min.z),G.isDataTexture||G.isData3DTexture?z.texSubImage3D(He,H,O.x,O.y,O.z,ge,we,Pe,Ve,We,Lt.data):W.isCompressedArrayTexture?z.compressedTexSubImage3D(He,H,O.x,O.y,O.z,ge,we,Pe,Ve,Lt.data):z.texSubImage3D(He,H,O.x,O.y,O.z,ge,we,Pe,Ve,We,Lt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Xe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Dt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Cn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Qt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ci),H===0&&W.generateMipmaps&&z.generateMipmap(He),Be.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?v.setTextureCube(M,0):M.isData3DTexture?v.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?v.setTexture2DArray(M,0):v.setTexture2D(M,0),Be.unbindTexture()},this.resetState=function(){P=0,R=0,N=null,Be.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ru?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===ja?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class YT extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ja{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ra,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Gf("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const _n=new L;class Lr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ii(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Lr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class uu extends yn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let rr;const so=new L,or=new L,ar=new L,cr=new xe,ro=new xe,sp=new ze,la=new L,oo=new L,ua=new L,fd=new xe,nl=new xe,pd=new xe;class jT extends Et{constructor(e=new uu){if(super(),this.isSprite=!0,this.type="Sprite",rr===void 0){rr=new Hn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ja(t,5);rr.setIndex([0,1,2,0,2,3]),rr.setAttribute("position",new Lr(n,3,0,!1)),rr.setAttribute("uv",new Lr(n,2,3,!1))}this.geometry=rr,this.material=e,this.center=new xe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),or.setFromMatrixScale(this.matrixWorld),sp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ar.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&or.multiplyScalar(-ar.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;ha(la.set(-.5,-.5,0),ar,o,or,i,r),ha(oo.set(.5,-.5,0),ar,o,or,i,r),ha(ua.set(.5,.5,0),ar,o,or,i,r),fd.set(0,0),nl.set(1,0),pd.set(1,1);let a=e.ray.intersectTriangle(la,oo,ua,!1,so);if(a===null&&(ha(oo.set(-.5,.5,0),ar,o,or,i,r),nl.set(0,1),a=e.ray.intersectTriangle(la,ua,oo,!1,so),a===null))return;const c=e.ray.origin.distanceTo(so);c<e.near||c>e.far||t.push({distance:c,point:so.clone(),uv:si.getInterpolation(so,la,oo,ua,fd,nl,pd,new xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ha(s,e,t,n,i,r){cr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(ro.x=r*cr.x-i*cr.y,ro.y=i*cr.x+r*cr.y):ro.copy(cr),s.copy(e),s.x+=ro.x,s.y+=ro.y,s.applyMatrix4(sp)}const md=new L,gd=new tt,_d=new tt,KT=new L,xd=new ze,da=new L,il=new wi,vd=new ze,sl=new Ka;class $T extends Gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ju,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,da),this.boundingBox.expandByPoint(da)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,da),this.boundingSphere.expandByPoint(da)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),il.copy(this.boundingSphere),il.applyMatrix4(i),e.ray.intersectsSphere(il)!==!1&&(vd.copy(i).invert(),sl.copy(e.ray).applyMatrix4(vd),!(this.boundingBox!==null&&sl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,sl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ju?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===i_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;gd.fromBufferAttribute(i.attributes.skinIndex,e),_d.fromBufferAttribute(i.attributes.skinWeight,e),md.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=_d.getComponent(r);if(o!==0){const a=gd.getComponent(r);xd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(KT.copy(md).applyMatrix4(xd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class rp extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}}class op extends $t{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Kt,u=Kt,h,d){super(null,o,a,c,l,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yd=new ze,ZT=new ze;class hu{constructor(e=[],t=[]){this.uuid=ci(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:ZT;yd.multiplyMatrices(a,t[r]),yd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new hu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new op(t,e,e,oi,ri);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new rp),this.bones.push(o),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Ca extends Mn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const lr=new ze,Md=new ze,fa=[],Td=new Xi,JT=new ze,ao=new Gt,co=new wi;class QT extends Gt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ca(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,JT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,lr),Td.copy(e.boundingBox).applyMatrix4(lr),this.boundingBox.union(Td)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,lr),co.copy(e.boundingSphere).applyMatrix4(lr),this.boundingSphere.union(co)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ao.geometry=this.geometry,ao.material=this.material,ao.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),co.copy(this.boundingSphere),co.applyMatrix4(n),e.ray.intersectsSphere(co)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,lr),Md.multiplyMatrices(n,lr),ao.matrixWorld=Md,ao.raycast(e,fa);for(let o=0,a=fa.length;o<a;o++){const c=fa[o];c.instanceId=r,c.object=this,t.push(c)}fa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ca(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new op(new Float32Array(i*this.count),i,this.count,Pf,ri));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Qa extends yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sd=new L,Ed=new L,Ad=new ze,rl=new Ka,pa=new wi;class du extends Et{constructor(e=new Hn,t=new Qa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Sd.fromBufferAttribute(t,i-1),Ed.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Sd.distanceTo(Ed);e.setAttribute("lineDistance",new wn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(i),pa.radius+=r,e.ray.intersectsSphere(pa)===!1)return;Ad.copy(i).invert(),rl.copy(e.ray).applyMatrix4(Ad);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new L,u=new L,h=new L,d=new L,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let x=p,E=S-1;x<E;x+=f){const P=g.getX(x),R=g.getX(x+1);if(l.fromBufferAttribute(m,P),u.fromBufferAttribute(m,R),rl.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const V=e.ray.origin.distanceTo(d);V<e.near||V>e.far||t.push({distance:V,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),S=Math.min(m.count,o.start+o.count);for(let x=p,E=S-1;x<E;x+=f){if(l.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),rl.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const wd=new L,Nd=new L;class eS extends du{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)wd.fromBufferAttribute(t,i),Nd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+wd.distanceTo(Nd);e.setAttribute("lineDistance",new wn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tS extends du{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ec extends yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bd=new ze,Fl=new Ka,ma=new wi,ga=new L;class nS extends Et{constructor(e=new Hn,t=new ec){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(i),ma.radius+=r,e.ray.intersectsSphere(ma)===!1)return;bd.copy(i).invert(),Fl.copy(e.ray).applyMatrix4(bd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);ga.fromBufferAttribute(h,m),Rd(ga,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)ga.fromBufferAttribute(h,g),Rd(ga,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Rd(s,e,t,n,i,r,o){const a=Fl.distanceSqToPoint(s);if(a<t){const c=new L;Fl.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class ap extends $t{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Kt,this.minFilter=Kt,this.generateMipmaps=!1,this.needsUpdate=!0}}class Ir extends Hn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new L,d=new L,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const S=[],x=p/n;let E=0;p===0&&o===0?E=.5/t:p===n&&c===Math.PI&&(E=-.5/t);for(let P=0;P<=t;P++){const R=P/t;h.x=-e*Math.cos(i+R*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(i+R*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(R+E,1-x),S.push(l++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){const x=u[p][S+1],E=u[p][S],P=u[p+1][S],R=u[p+1][S+1];(p!==0||o>0)&&f.push(x,E,R),(p!==n-1||c<Math.PI)&&f.push(E,P,R)}this.setIndex(f),this.setAttribute("position",new wn(g,3)),this.setAttribute("normal",new wn(_,3)),this.setAttribute("uv",new wn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Br extends yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ps,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ni extends Br{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class iS extends yn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ve(16777215),this.specular=new ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ps,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sS extends yn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ps,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class rS extends yn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ps,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cp extends Qa{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function _a(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function oS(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function aS(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Cd(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function lp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Uo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class cS extends Uo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yh,endingEnd:yh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mh:r=e,a=2*t-n;break;case Th:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Mh:o=e,c=2*n-t;break;case Th:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,S=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,E=f*m-f*_;for(let P=0;P!==a;++P)r[P]=p*o[u+P]+S*o[l+P]+x*o[c+P]+E*o[h+P];return r}}class lS extends Uo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class uS extends Uo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class bi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_a(t,this.TimeBufferType),this.values=_a(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_a(e.times,Array),values:_a(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new uS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case So:t=this.InterpolantFactoryMethodDiscrete;break;case Nr:t=this.InterpolantFactoryMethodLinear;break;case Cc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return So;case this.InterpolantFactoryMethodLinear:return Nr;case this.InterpolantFactoryMethodSmooth:return Cc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&oS(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Cc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=Nr;class zr extends bi{}zr.prototype.ValueTypeName="bool";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=So;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;class up extends bi{}up.prototype.ValueTypeName="color";class Pr extends bi{}Pr.prototype.ValueTypeName="number";class hS extends Uo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)ps.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Us extends bi{InterpolantFactoryMethodLinear(e){return new hS(this.times,this.values,this.getValueSize(),e)}}Us.prototype.ValueTypeName="quaternion";Us.prototype.DefaultInterpolation=Nr;Us.prototype.InterpolantFactoryMethodSmooth=void 0;class kr extends bi{}kr.prototype.ValueTypeName="string";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=So;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;class Dr extends bi{}Dr.prototype.ValueTypeName="vector";class dS{constructor(e="",t=-1,n=[],i=f_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ci(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(pS(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(bi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=aS(c);c=Cd(c,1,u),l=Cd(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Pr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];lp(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let S=0;S!==d[g].morphTargets.length;++S){const x=d[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new Pr(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[h].name+"]";n(Dr,f+".position",d,"pos",i),n(Us,f+".quaternion",d,"rot",i),n(Dr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function fS(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Pr;case"vector":case"vector2":case"vector3":case"vector4":return Dr;case"color":return up;case"quaternion":return Us;case"bool":case"boolean":return zr;case"string":return kr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function pS(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=fS(s.type);if(s.times===void 0){const t=[],n=[];lp(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const os={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class mS{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const gS=new mS;class Hr{constructor(e){this.manager=e!==void 0?e:gS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Hr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Oi={};class _S extends Error{constructor(e,t){super(e),this.response=t}}class hp extends Hr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=os.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Oi[e]!==void 0){Oi[e].push({onLoad:t,onProgress:n,onError:i});return}Oi[e]=[],Oi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Oi[e],h=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){S();function S(){h.read().then(({done:x,value:E})=>{if(x)p.close();else{_+=E.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let R=0,N=u.length;R<N;R++){const V=u[R];V.onProgress&&V.onProgress(P)}p.enqueue(E),S()}})}}});return new Response(m)}else throw new _S(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{os.add(e,l);const u=Oi[e];delete Oi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=Oi[e];if(u===void 0)throw this.manager.itemError(e),l;delete Oi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class xS extends Hr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=os.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Eo("img");function c(){u(),os.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class dp extends Hr{constructor(e){super(e)}load(e,t,n,i){const r=new $t,o=new xS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Oo extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class vS extends Oo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ol=new ze,Ld=new L,Id=new L;class fu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cu,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ld.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ld),Id.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Id),t.updateMatrixWorld(),ol.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ol),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ol)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class yS extends fu{constructor(){super(new vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Rr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class tc extends Oo{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new yS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Pd=new ze,lo=new L,al=new L;class MS extends fu{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),lo.setFromMatrixPosition(e.matrixWorld),n.position.copy(lo),al.copy(n.position),al.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(al),n.updateMatrixWorld(),i.makeTranslation(-lo.x,-lo.y,-lo.z),Pd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pd)}}class fp extends Oo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new MS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class TS extends fu{constructor(){super(new $a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pu extends Oo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new TS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pp extends Oo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class xo{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class SS extends Hr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=os.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return os.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),os.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});os.add(e,c),r.manager.itemStart(e)}}class ES{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Dd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Dd(){return(typeof performance>"u"?Date:performance).now()}const mu="\\[\\]\\.:\\/",AS=new RegExp("["+mu+"]","g"),gu="[^"+mu+"]",wS="[^"+mu.replace("\\.","")+"]",NS=/((?:WC+[\/:])*)/.source.replace("WC",gu),bS=/(WCOD+)?/.source.replace("WCOD",wS),RS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gu),CS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gu),LS=new RegExp("^"+NS+bS+RS+CS+"$"),IS=["material","materials","bones","map"];class PS{constructor(e,t,n){const i=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class dt{constructor(e,t,n){this.path=t,this.parsedPath=n||dt.parseTrackName(t),this.node=dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new dt.Composite(e,t,n):new dt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(AS,"")}static parseTrackName(e){const t=LS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);IS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}dt.Composite=PS;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class DS extends Ja{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:su}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=su);function Ud(s,e){if(e===p_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Dl||e===Vf){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Dl)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class US extends Hr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new zS(t)}),this.register(function(t){return new KS(t)}),this.register(function(t){return new $S(t)}),this.register(function(t){return new ZS(t)}),this.register(function(t){return new HS(t)}),this.register(function(t){return new GS(t)}),this.register(function(t){return new WS(t)}),this.register(function(t){return new XS(t)}),this.register(function(t){return new BS(t)}),this.register(function(t){return new qS(t)}),this.register(function(t){return new kS(t)}),this.register(function(t){return new jS(t)}),this.register(function(t){return new YS(t)}),this.register(function(t){return new FS(t)}),this.register(function(t){return new JS(t)}),this.register(function(t){return new QS(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=xo.extractUrlBase(e);o=xo.resolveURL(l,this.path)}else o=xo.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new hp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===mp){try{o[Je.KHR_BINARY_GLTF]=new eE(e)}catch(h){i&&i(h);return}r=JSON.parse(o[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new fE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Je.KHR_MATERIALS_UNLIT:o[h]=new VS;break;case Je.KHR_DRACO_MESH_COMPRESSION:o[h]=new tE(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:o[h]=new nE;break;case Je.KHR_MESH_QUANTIZATION:o[h]=new iE;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function OS(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class FS{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new ve(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Vt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new pu(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new fp(u),l.distance=h;break;case"spot":l=new tc(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ns(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class VS{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return jn}extendParams(e,t,n){const i=[];e.color=new ve(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Vt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,fn))}return Promise.all(i)}}class BS{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class zS{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new xe(a,a)}return Promise.all(r)}}class kS{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class HS{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Vt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,fn)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class GS{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class WS{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ve().setRGB(a[0],a[1],a[2],Vt),Promise.all(r)}}class XS{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class qS{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ve().setRGB(a[0],a[1],a[2],Vt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,fn)),Promise.all(r)}}class YS{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class jS{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class KS{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class $S{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ZS{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class JS{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class QS{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Xn.TRIANGLES&&l.mode!==Xn.TRIANGLE_STRIP&&l.mode!==Xn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const g of h){const _=new ze,m=new L,p=new ps,S=new L(1,1,1),x=new QT(g.geometry,g.material,d);for(let E=0;E<d;E++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,E),c.SCALE&&S.fromBufferAttribute(c.SCALE,E),x.setMatrixAt(E,_.compose(m,p,S));for(const E in c)if(E==="_COLOR_0"){const P=c[E];x.instanceColor=new Ca(P.array,P.itemSize,P.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&g.geometry.setAttribute(E,c[E]);Et.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const mp="glTF",uo=12,Od={JSON:1313821514,BIN:5130562};class eE{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,uo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==mp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-uo,r=new DataView(e,uo);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Od.JSON){const l=new Uint8Array(e,uo+o,a);this.content=n.decode(l)}else if(c===Od.BIN){const l=uo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class tE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=Vl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Vl[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=_r[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}h(f)},a,l,Vt,d)})})}}class nE{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class iE{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class gp extends Uo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,S=1-m,x=p-d+h;for(let E=0;E!==a;E++){const P=o[_+E+a],R=o[_+E+c]*u,N=o[g+E+a],V=o[g+E]*u;r[E]=S*P+x*R+m*N+p*V}return r}}const sE=new ps;class rE extends gp{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return sE.fromArray(r).normalize().toArray(r),r}}const Xn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},_r={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fd={9728:Kt,9729:Dn,9984:bf,9985:Ma,9986:po,9987:Mi},Vd={33071:rs,33648:Aa,10497:Ar},cl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Vl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},es={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},oE={CUBICSPLINE:void 0,LINEAR:Nr,STEP:So},ll={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function aE(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Br({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Hi})),s.DefaultMaterial}function Es(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ns(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cE(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function lE(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function uE(s){let e;const t=s.extensions&&s.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ul(t.attributes):e=s.indices+":"+ul(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ul(s.targets[n]);return e}function ul(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Bl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function hE(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const dE=new ze;class fE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new OS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new dp(this.options.manager):this.textureLoader=new SS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Es(r,a,i),ns(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(xo.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=cl[i.type],a=_r[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Mn(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=cl[i.type],l=_r[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(S);x||(_=new l(a,p*f,i.count*f/u),x=new Ja(_,f/u),t.cache.add(S,x)),m=new Lr(x,c,d%f/u,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),m=new Mn(_,c,g);if(i.sparse!==void 0){const p=cl.SCALAR,S=_r[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,P=new S(o[1],x,i.sparse.count*p),R=new l(o[2],E,i.sparse.count*c);a!==null&&(m=new Mn(m.array.slice(),m.itemSize,m.normalized));for(let N=0,V=P.length;N<V;N++){const T=P[N];if(m.setX(T,R[N*c]),c>=2&&m.setY(T,R[N*c+1]),c>=3&&m.setZ(T,R[N*c+2]),c>=4&&m.setW(T,R[N*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Fd[d.magFilter]||Dn,u.minFilter=Fd[d.minFilter]||Mi,u.wrapS=Vd[d.wrapS]||Ar,u.wrapT=Vd[d.wrapT]||Ar,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new $t(_);m.needsUpdate=!0,d(m)}),t.load(xo.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),h.userData.mimeType=o.mimeType||hE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new ec,yn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Qa,yn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Br}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[Je.KHR_MATERIALS_UNLIT]){const h=i[Je.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new ve(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Vt),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,fn)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ni);const u=r.alphaMode||ll.OPAQUE;if(u===ll.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ll.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==jn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new xe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==jn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==jn){const h=r.emissiveFactor;a.emissive=new ve().setRGB(h[0],h[1],h[2],Vt)}return r.emissiveTexture!==void 0&&o!==jn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,fn)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),ns(h,r),t.associations.set(h,{materials:e}),r.extensions&&Es(i,h,r),h})}createUniqueName(e){const t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Bd(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=uE(l),h=i[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Bd(new Hn,l,t),i[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?aE(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=o[f];let p;const S=l[f];if(m.mode===Xn.TRIANGLES||m.mode===Xn.TRIANGLE_STRIP||m.mode===Xn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new $T(_,S):new Gt(_,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Xn.TRIANGLE_STRIP?p.geometry=Ud(p.geometry,Vf):m.mode===Xn.TRIANGLE_FAN&&(p.geometry=Ud(p.geometry,Dl));else if(m.mode===Xn.LINES)p=new eS(_,S);else if(m.mode===Xn.LINE_STRIP)p=new du(_,S);else if(m.mode===Xn.LINE_LOOP)p=new tS(_,S);else if(m.mode===Xn.POINTS)p=new nS(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&lE(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ns(p,r),m.extensions&&Es(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Es(i,h[0],r),h[0];const d=new Ls;r.extensions&&Es(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new vn(ss.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new $a(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ns(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new ze;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new hu(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,S=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",S)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let S=0,x=d.length;S<x;S++){const E=d[S],P=f[S],R=g[S],N=_[S],V=m[S];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const T=n._createAnimationTracks(E,P,R,N,V);if(T)for(let y=0;y<T.length;y++)p.push(T[y])}return new dS(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,dE)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new rp:l.length>1?u=new Ls:l.length===1?u=l[0]:u=new Et,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),ns(u,r),r.extensions&&Es(n,u,r),r.matrix!==void 0){const h=new ze;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Ls;n.name&&(r.name=i.createUniqueName(n.name)),ns(r,n),n.extensions&&Es(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof yn||d instanceof $t)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];es[r.path]===es.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(es[r.path]){case es.weights:l=Pr;break;case es.rotation:l=Us;break;case es.position:case es.scale:l=Dr;break;default:switch(n.itemSize){case 1:l=Pr;break;case 2:case 3:default:l=Dr;break}break}const u=i.interpolation!==void 0?oE[i.interpolation]:Nr,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+es[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Bl(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Us?rE:gp;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function pE(s,e,t){const n=e.attributes,i=new Xi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),a.normalized){const u=Bl(_r[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,c=new L;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Bl(_r[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new wi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Bd(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=Vl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return at.workingColorSpace!==Vt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),ns(s,e),pE(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?cE(s,e.targets,t):s})}new US;const _p=.46,xp=.5,mE=90,gE=0,_E="p",vp=1,yp=2,Mp=3,Tp=4,Sp=5,Ep=6,Ap=7,wp=8,Np=9,xE=[vp,yp,Mp,Tp,Sp,Ep,Ap,wp,Np],vE={backgroundColor:"#eeeeee",array:[[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],[5,"p",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5],[5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,5,0,0,0,0,0,0,5],[5,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,5,0,0,5],[5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,5],[5,0,0,0,0,0,0,5,0,0,0,0,0,0,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,5],[5,0,0,0,0,0,0,0,0,5,0,0,0,0,3,3,3,9,3,0,0,0,0,0,0,0,0,0,0,5],[5,0,0,0,0,5,0,0,0,0,0,0,0,0,3,3,3,3,2,1,0,5,0,0,0,0,0,0,0,5],[5,0,0,0,0,0,0,0,0,0,3,0,3,3,3,3,3,3,0,0,0,5,0,0,0,0,0,5,0,5],[5,0,0,5,0,0,0,0,0,0,3,8,3,3,8,3,3,3,3,0,0,0,0,0,5,5,0,0,0,5],[5,0,0,0,0,0,0,0,5,0,3,3,8,8,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,5],[0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,5],[5,0,0,0,5,0,0,0,0,0,0,3,3,3,3,3,3,3,0,0,0,0,0,5,0,0,0,0,0,5],[5,0,0,0,0,0,4,0,0,0,0,0,3,3,3,3,3,0,0,0,0,0,0,0,0,0,5,0,0,5],[5,0,0,4,0,0,4,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,5],[5,0,0,4,0,0,4,0,0,0,4,0,0,1,1,2,1,2,0,0,0,0,0,0,0,0,0,0,0,5],[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]]},yE={backgroundColor:"#ffffff",array:[[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,9,9,5,5,5],[5,"p",0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9,9,0,5],[5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,9,0,0,9,5],[5,0,0,0,0,0,5,0,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,5],[5,0,0,0,5,0,0,0,9,9,9,0,0,0,5,0,0,0,0,0,0,0,0,0,0,9,0,0,0,5],[5,0,0,0,0,0,0,5,9,0,0,9,0,0,0,0,0,0,0,0,0,0,0,9,9,9,0,0,0,5],[5,0,0,0,0,5,0,0,9,0,0,0,0,0,0,9,9,9,9,9,9,0,9,9,9,9,0,0,0,5],[5,0,0,0,0,0,0,0,9,0,0,0,0,0,5,9,0,0,0,0,9,0,9,9,9,9,0,0,0,5],[5,0,0,0,0,0,9,9,9,0,0,0,0,0,0,9,9,9,9,9,9,0,0,9,9,0,0,0,0,0],[5,5,0,0,0,9,9,9,9,0,0,0,0,0,0,9,0,0,0,0,9,0,5,0,0,0,0,0,0,5],[5,0,0,0,0,9,9,9,9,0,0,0,0,0,0,9,0,0,0,0,9,0,0,0,0,0,0,0,0,5],[5,0,5,0,0,0,9,9,0,0,0,0,0,0,0,9,0,0,0,0,9,0,0,0,0,0,0,0,0,5],[5,0,0,5,0,0,0,0,0,0,0,0,0,9,9,9,0,0,9,9,9,0,0,0,0,0,5,0,0,5],[5,0,0,0,0,0,0,0,0,5,0,0,9,9,9,9,0,9,9,9,9,0,0,5,0,0,0,0,0,5],[5,0,0,0,5,0,0,0,0,0,0,0,9,9,9,9,0,9,9,9,9,0,0,0,0,0,0,5,0,5],[5,0,0,5,0,0,0,0,0,5,5,0,0,9,9,0,0,0,9,9,0,0,0,0,0,0,0,0,0,5],[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]]},ME={backgroundColor:0,array:[[6,6,6,6,6,6,0,6,6,6,6,6,6,6,6,6,6,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[6,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[6,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,6,7,7,7,7,7,7,0,7,7,7,7,7,7,7,7,0,7,7,7,7,7,7,7,7,7,7,7,7],[6,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7],[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,6,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1],[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1],[6,0,0,0,0,0,0,0,0,8,0,0,0,8,0,0,0,6,7,7,7,7,0,0,0,7,7,7,7,7,7,7,7,0,7,7,7,0,7,7,7,7,0,7,7,7],[6,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,7,7,7,7,0,7,0,7,7,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7,0,7,7,7],[6,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,6,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1],[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,6,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1],[6,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,6,7,7,7,7,0,7,7,7,7,7,7,7,7,7,0,7,7,7,7,0,7,7,7,7,7,0,7,7],[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7,7,7,7,7,7,7,0,7,7],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1],[1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1],[7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,0,0,7,7,7,0,7,7,7,7,0,0,7,7,7,7,7,7,7,7,7,0,7,7],[7,7,7,7,0,7,7,7,7,7,7,7,7,7,7,7,7,7,7,0,7,7,7,0,7,7,7,0,7,7,7,7,7,0,7,7,7,7,7,7,7,7,7,0,7,7],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1],[1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1],[7,0,7,7,0,7,0,7,7,7,7,7,7,7,0,0,0,0,0,0,7,7,7,0,7,7,7,0,7,7,7,0,7,7,7,7,7,0,0,0,0,0,0,0,7,7],[7,0,7,7,0,7,0,7,7,7,7,7,7,7,0,7,7,7,7,7,7,7,7,0,7,7,7,0,7,7,7,0,7,7,7,7,7,0,7,7,7,0,7,7,7,7],[1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1],[7,0,7,7,7,7,7,7,0,7,7,7,7,7,0,7,7,7,7,7,7,7,7,0,7,7,7,0,7,7,7,7,7,7,7,7,0,0,0,0,0,0,7,7,7,7],[7,0,7,7,7,7,0,0,0,7,7,7,7,7,0,7,7,7,7,7,7,7,7,0,0,0,0,0,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[1,"p",1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},TE={backgroundColor:0,array:[[1,2,3,4,5,6,7,6,5,4,3,2,1,2,3,4,5,6,7,6,5,4,3,2,1,2,3,4,5,6],[6,"p",0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,7],[5,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5],[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],[2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],[5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4],[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5],[7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],[6,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],[5,0,1,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,6],[4,0,1,0,0,0,0,0,0,6,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,2,0,0,0,5],[3,2,1,2,3,4,5,6,7,6,5,4,3,2,1,2,3,4,5,6,7,6,5,4,3,2,1,2,3,4]]},SE={backgroundColor:"#f4eaa1",array:[[5,5,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,8,8,8,8,8,8,9,9,9,9,9],[5,0,0,0,0,0,5,0,0,6,0,0,6,0,0,0,0,0,7,0,0,0,0,0,8,0,0,0,0,9],[5,0,0,"p",0,0,5,0,6,0,0,0,6,0,7,7,7,0,7,0,0,0,8,0,8,0,0,0,0,0],[5,0,0,5,0,0,5,0,0,0,6,0,6,0,0,0,0,0,7,8,0,0,0,0,8,9,0,9,0,9],[5,0,0,0,0,5,5,6,0,0,0,0,6,0,0,0,7,0,7,0,0,0,0,8,8,0,0,0,0,9],[5,5,5,0,0,0,5,0,0,6,6,0,0,0,0,0,7,0,7,0,8,0,0,0,8,0,0,0,9,9],[5,0,0,0,5,5,5,0,6,0,0,6,6,0,0,0,7,0,7,0,0,0,8,0,8,0,9,0,0,9],[5,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,7,0,0,0,0,0,8,0,0,0,0,9],[5,0,0,0,5,5,5,0,0,0,0,0,6,0,7,7,7,0,7,0,0,0,0,0,8,9,9,9,0,9],[5,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,7,8,0,0,8,0,8,0,9,0,0,9],[5,0,0,0,5,0,5,0,0,0,0,0,6,0,0,0,7,0,7,0,0,0,0,0,8,0,0,0,0,9],[5,5,5,0,0,0,5,0,0,0,0,0,6,7,7,0,7,0,7,0,0,0,0,0,8,0,0,0,9,9],[5,0,0,0,0,5,5,0,0,0,0,0,6,0,0,0,0,0,7,0,8,0,0,0,8,0,0,0,0,9],[5,0,0,5,0,0,5,0,6,0,0,0,6,0,0,7,7,7,7,0,0,0,8,0,8,0,0,9,0,9],[5,0,0,0,0,0,5,0,0,0,0,0,6,7,0,0,0,0,7,0,0,0,0,8,8,9,0,0,0,9],[5,0,0,0,0,0,5,0,0,6,0,0,6,7,0,0,0,0,0,0,8,8,0,0,0,0,0,0,0,9],[5,5,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,8,8,8,8,8,8,9,9,9,9,9]]},EE={backgroundColor:"#ffffff",array:[[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],[6,"p",0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],[6,4,4,4,4,4,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,6],[6,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,4,4,4,0,0,0,0,0,0,4,0,0,0,6],[6,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,4,4,0,0,0,6],[6,0,0,4,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],[6,0,4,4,4,0,0,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,6],[6,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,6],[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,6],[6,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],[6,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[6,4,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,6],[6,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,0,0,6],[6,0,4,4,0,0,0,0,0,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,6],[6,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0,4,4,4,0,0,0,0,0,0,0,0,0,0,6],[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,6],[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]]},AE={backgroundColor:"#ffffff",array:[[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,4,8,8,8,8,8,8],[8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,8],[8,"p",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,4,0,0,0,0,8],[8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,8],[4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,8],[8,4,4,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,8],[0,0,0,0,0,0,4,0,4,4,0,0,0,4,4,0,0,0,0,0,0,0,4,4,0,0,0,4,4,8],[8,0,0,0,0,4,4,0,0,4,4,0,0,0,4,0,0,0,0,0,0,0,4,0,0,0,4,4,0,8],[8,0,0,0,0,4,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,8],[8,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,4,0,0,0,0,8],[8,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,4,0,0,0,8],[8,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,4,0,0,0,4,0,0,0,8],[8,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,4,4,4,0,0,4,0,0,0,0,0,0,0,8],[8,0,0,0,0,0,4,4,0,0,0,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,8],[8,0,0,4,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,8],[8,0,0,4,4,0,0,0,0,0,0,4,0,0,0,0,0,0,4,4,0,0,0,0,4,0,0,0,0,8],[8,8,8,8,4,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,4,4,8,8,8,8,8]]},wE={backgroundColor:"#b3e0f2",array:[[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[9,"p",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,9,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,9],[0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,9,0,9],[9,0,0,9,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,0,1,3,1,1,1,3,1,0,0,0,0,0,0,0,0,0,0,9],[9,9,0,0,0,0,0,0,0,0,0,0,1,3,7,3,7,3,1,0,0,0,0,0,0,0,9,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,0,1,3,3,3,3,3,1,0,0,9,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,0,0,0,0,0,0,0,9],[9,0,9,0,0,0,0,0,0,0,0,1,1,1,1,7,1,1,1,1,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,9,0,0,0,0,0,0,1,3,1,3,1,3,1,3,1,0,0,0,0,0,0,0,9,0,9],[9,0,0,0,0,0,9,0,0,0,0,0,0,1,1,1,1,1,0,0,0,9,0,9,0,0,0,0,0,9],[9,0,9,0,0,0,0,0,0,0,0,0,0,3,3,1,3,3,0,0,0,0,0,0,0,0,9,0,0,9],[9,0,0,0,0,0,0,0,0,0,9,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,9],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]]},NE={backgroundColor:"#add4ff",array:[[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],[5,"p",0,0,0,0,0,0,5,5,0,0,0,0,0,0,5,5,0,0,5,0,0,0,0,0,0,0,5,5],[5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,5,0,5],[5,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,0,0,0,5],[5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,9,3,3,3,0,0,0,0,0,0],[5,0,5,0,0,0,0,0,3,3,3,0,0,0,0,0,0,0,0,3,3,3,3,3,0,0,3,0,0,5],[5,0,0,0,0,0,2,3,9,3,3,3,0,0,0,0,0,0,0,0,3,3,3,0,0,3,3,0,0,5],[5,5,5,0,0,0,0,3,3,3,3,3,0,0,3,0,5,0,0,3,3,3,3,3,3,3,3,0,0,5],[5,0,0,5,0,0,0,0,3,3,3,0,0,3,3,0,0,5,5,3,3,3,3,3,3,3,3,5,5,5],[5,0,0,0,0,0,0,3,3,3,3,3,3,3,3,0,0,0,0,3,3,3,3,3,3,3,3,0,0,5],[5,0,0,0,0,0,0,3,3,3,3,3,3,3,3,5,5,5,0,0,0,3,3,3,3,3,0,0,0,5],[5,0,0,0,0,0,0,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5],[5,0,0,0,0,5,0,5,5,3,3,3,3,3,0,5,5,0,0,0,0,0,0,0,0,0,0,0,0,5],[5,0,0,0,0,0,0,0,5,5,5,5,5,5,5,0,0,0,0,0,0,0,5,5,5,5,0,0,0,5],[5,0,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,0,0,0,0,0,0,5],[5,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5],[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]]},bE={backgroundColor:"#add4ff",array:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,8,8,0,0,0,0,0,8,8,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[8,8,8,8,8,8,8,8,8,8,8,8,0,8,8,8,8,8,0,8,8,8,8,8,8,8,8,8,8,8],[8,0,0,0,0,0,0,0,8,0,0,0,0,0,9,9,0,0,0,0,0,8,8,0,0,0,0,0,"p",8],[8,0,8,0,0,0,0,0,0,0,0,0,0,9,3,3,9,0,0,0,0,0,0,0,0,0,0,8,0,8],[8,0,0,0,8,0,0,0,0,8,0,0,0,9,3,3,9,0,0,0,0,0,8,0,0,8,0,0,0,8],[0,0,0,0,0,0,8,0,0,0,0,0,9,3,3,3,3,9,0,0,0,0,0,8,0,0,0,0,0,8],[8,0,0,0,0,0,0,9,9,9,9,9,9,3,3,3,3,9,9,9,9,9,0,0,0,0,0,0,0,8],[8,0,0,8,0,0,0,9,3,3,3,3,3,3,3,3,3,3,3,3,3,3,9,0,0,0,8,0,0,8],[8,0,0,0,0,0,0,0,9,3,3,3,3,9,3,3,9,3,3,3,3,9,0,0,0,0,0,0,0,8],[8,8,0,8,0,0,0,0,0,9,3,3,3,9,3,3,9,3,3,3,9,0,0,0,0,0,8,0,8,8],[8,8,0,0,0,0,0,0,0,0,9,3,3,9,3,3,9,3,3,9,0,0,0,0,0,0,0,0,8,8],[8,0,0,0,0,0,0,0,0,0,9,3,3,3,3,3,3,3,3,9,0,0,0,0,0,0,0,0,0,8],[8,0,0,0,0,8,8,0,0,9,3,3,3,3,3,3,3,3,3,3,9,0,0,8,8,0,0,0,0,8],[8,0,0,0,0,0,0,0,0,9,3,3,3,3,3,3,3,3,3,3,9,0,0,0,0,0,0,0,0,8],[8,0,8,0,0,0,8,0,9,3,3,3,3,3,9,9,3,3,3,3,3,9,0,8,0,0,0,8,0,8],[8,0,0,0,0,0,0,8,9,3,3,3,9,9,0,0,9,9,3,3,3,9,8,0,0,0,0,0,0,8],[8,0,0,8,0,0,0,9,3,3,9,9,0,0,0,0,0,0,9,9,3,3,9,0,0,0,8,0,0,8],[8,8,8,8,8,8,8,9,9,9,8,8,8,8,8,8,8,8,8,8,9,9,9,8,8,8,8,8,8,8]]},RE={backgroundColor:"#ff474c",array:[[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[7,0,0,0,7,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,7,7,0,0,0,0,0,0,7],[7,0,7,0,0,0,0,0,7,0,0,0,9,9,9,9,9,0,0,0,0,7,0,0,0,0,7,"p",0,7],[7,0,7,7,0,0,0,0,0,0,9,9,1,1,1,1,0,0,9,9,0,0,0,0,0,0,7,7,0,7],[7,0,0,0,0,0,7,0,0,9,0,0,1,1,1,1,0,0,0,0,9,7,0,0,0,0,0,0,0,7],[7,0,7,0,0,0,0,0,9,0,0,1,1,1,1,1,1,0,0,0,0,9,0,0,0,0,0,0,0,7],[7,0,0,0,0,0,0,0,9,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,7],[7,7,0,0,0,0,0,9,1,1,1,0,0,0,0,0,0,1,1,1,1,1,9,0,0,7,0,0,0,7],[7,0,0,0,0,0,0,9,1,1,1,0,0,0,0,0,0,1,1,0,0,1,9,0,0,0,0,0,0,7],[7,0,0,0,7,0,0,9,0,1,1,1,0,0,0,0,1,1,0,0,0,0,9,0,0,0,0,0,0,7],[0,0,0,0,0,0,0,9,0,0,1,1,1,1,1,1,1,1,0,0,0,1,9,0,0,0,0,0,0,7],[7,0,0,0,0,0,0,9,0,1,1,9,9,9,9,9,9,9,9,1,1,1,9,0,0,0,0,0,0,7],[7,0,0,0,0,0,0,0,9,9,9,0,0,9,0,0,9,0,0,9,9,9,0,0,0,0,0,0,7,7],[7,0,0,0,0,0,0,0,0,9,0,0,0,9,0,0,9,0,0,0,9,0,0,0,0,0,0,0,7,7],[7,0,0,7,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,7],[7,0,0,0,0,0,0,0,7,0,9,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,7],[7,7,7,7,7,7,7,7,7,7,7,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7]]},CE={backgroundColor:"#f7b0bb",array:[[0,0,0,0,0,0,0,0,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,9,1,1,1,1,1,1,1,1,1,9,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,9,1,1,2,2,2,2,2,2,2,1,1,9,7,7,7,7,7,7,7,7,7,7,7],[0,0,0,0,0,9,1,1,2,2,2,3,3,3,2,2,2,1,1,9,0,0,0,7,7,0,0,0,0,7],[0,0,0,0,9,1,1,2,2,3,3,3,3,3,3,3,2,2,1,1,9,0,0,0,7,0,0,0,0,7],[0,0,0,0,9,1,2,2,3,3,9,9,9,9,9,3,3,2,2,1,9,0,0,0,0,7,0,0,0,7],[0,0,0,9,1,1,2,3,3,9,0,7,0,0,0,9,3,3,2,1,1,9,0,0,0,0,0,0,0,7],[0,0,0,9,9,9,2,3,9,0,0,0,0,7,0,0,9,3,2,2,1,9,0,0,0,0,0,0,0,7],[0,0,9,0,0,0,9,9,0,9,9,0,0,0,0,0,9,3,3,2,1,9,0,0,0,0,0,0,0,7],[0,9,0,0,0,0,0,0,0,0,0,9,0,0,0,7,9,9,3,9,9,9,0,0,0,0,0,0,0,7],[7,9,0,0,0,0,0,0,0,0,0,9,0,0,0,9,0,0,9,0,0,9,9,0,0,0,0,0,0,7],[7,0,9,0,0,9,9,0,0,0,9,0,0,0,9,0,0,0,0,0,0,0,0,9,0,0,0,0,7,7],[7,0,0,9,9,0,0,9,9,9,0,0,0,0,9,0,0,0,0,0,0,0,9,0,0,0,0,0,7,7],[7,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,9,0,0,7,0,0,0,7],[7,7,0,0,0,0,0,7,7,7,0,0,0,7,0,9,0,0,0,0,9,9,0,0,0,0,7,0,0,7],[7,0,0,0,0,0,7,0,0,7,0,0,0,0,0,0,9,9,9,9,0,0,0,0,0,0,7,0,0,7],[7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],[7,"p",0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,7,0,0,7,0,0,0,0,7],[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]]},LE={backgroundColor:"#ffffff",array:[[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,9,9,0,0,0,0,0,9,9,7,7,7,7,7,7,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,7,7,7,9,0,0,0,0,0,0,0,0,0,9,7,7,7,7,7,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,7,7,9,0,0,0,0,0,0,0,0,0,0,0,9,7,7,7,7,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,7,9,0,0,0,0,0,0,0,0,0,0,0,0,0,9,7,7,7,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,7,9,0,0,0,0,9,9,0,0,0,9,9,0,0,0,9,7,7,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,9,0,0,0,0,9,0,0,9,0,9,0,0,9,0,0,9,7,7,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,9,0,0,0,0,9,0,9,9,0,9,0,9,9,0,0,9,7,7,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,9,0,0,0,0,9,9,9,9,0,9,9,9,9,0,0,9,7,7,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,9,9,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,9,9,7,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,9,0,0,9,0,0,0,0,0,9,9,9,9,9,0,0,0,9,0,0,9,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,9,0,0,9,0,0,0,0,0,9,0,0,0,9,0,0,0,9,0,0,9,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,9,0,0,0,9,0,0,0,0,0,9,9,9,0,0,0,9,0,0,0,9,7,7,7,7,7,7],[7,7,7,7,7,9,7,7,7,9,0,0,0,0,9,0,0,0,0,0,0,0,0,0,9,0,0,0,0,9,7,7,7,7,7,7],[7,7,7,7,9,0,9,7,7,7,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,7,7,7,7,7,7,7],[7,7,7,9,0,0,9,7,7,7,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9,7,7,7,7,7,7,7,7],[7,7,7,9,0,0,0,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,7,7,7,7,7,7,7,7,7],[7,7,7,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,7,7,7,7,7,7,7,7,7],[7,7,7,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,7,7,7,7,7,7,7,7,7,7],[7,7,7,7,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,7,7,7,7,7,7,7,7,7,7],[7,7,7,7,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,7,7,7,7,7,7,7,7,7,7,7],[7,7,7,7,7,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,7,7,7,7,7,7,7,7,7,7,7],[7,7,7,7,7,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,7,7,7,7,7,7,7,7,7,7,7,7],[7,7,7,7,7,7,9,9,0,0,0,0,0,7,0,0,0,0,0,9,0,0,9,7,7,7,7,7,7,7,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,9,9,"p",0,0,0,0,0,0,0,0,0,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,9,9,9,9,9,9,9,0,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,0,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,0,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,0,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]]},IE={backgroundColor:"#ae4e4a",array:[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,"p",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,1],[1,0,2,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1],[1,0,2,0,3,3,3,3,3,3,3,3,3,3,0,3,3,3,3,3,3,3,3,3,3,3,3,0,2,0,1],[1,0,2,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,2,0,1],[1,0,2,0,3,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,3,0,2,0,1],[1,0,2,0,3,0,4,0,5,5,0,0,0,0,0,0,0,0,0,0,0,5,5,0,4,0,3,0,2,0,1],[1,0,2,0,3,0,4,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,4,0,3,0,2,0,1],[1,0,2,0,3,0,4,0,0,0,6,6,0,0,0,0,0,0,0,6,6,0,0,0,4,0,3,0,2,0,1],[1,0,2,0,3,0,4,0,0,0,6,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,3,0,2,0,1],[1,0,2,0,3,0,4,0,0,0,0,0,0,0,0,0,0,8,8,0,0,0,0,0,4,0,3,0,2,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,4,0,3,0,2,0,1],[1,0,2,0,3,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,3,0,2,0,1],[1,0,2,0,3,0,4,0,0,0,6,0,0,0,0,0,0,0,8,0,0,0,0,0,4,0,3,0,2,0,1],[1,0,2,0,3,0,4,0,0,0,6,6,0,0,0,0,0,8,8,0,0,0,0,0,4,0,3,0,2,0,1],[1,0,2,0,3,0,4,0,5,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,3,0,2,0,1],[1,0,2,0,3,0,4,0,5,5,0,0,0,0,0,0,0,0,0,6,6,0,0,0,4,0,3,0,2,0,1],[1,0,2,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,4,0,3,0,2,0,1],[1,0,2,0,3,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,0,4,0,3,0,2,0,1],[1,0,2,0,3,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,3,0,2,0,1],[1,0,2,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,2,0,1],[1,0,2,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,2,0,1],[1,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1],[1,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},zd=[vE,yE,ME,TE,SE,EE,AE,wE,NE,bE,RE,CE,LE,IE];class bp{constructor(e){this.scene=e,this._particles=[]}triggerPulse(e,t){return Math.random()<t*e}static triggerPulse(e,t){return Math.random()<t*e}addParticle(e,t,n,i){this._particles.push(new i({scene:this.scene,x:e,y:t,z:n}))}update(e){for(var t of this._particles){if(t.shouldRemove()){t.mesh.geometry.dispose(),t.mesh.material.dispose(),this.scene.remove(t.mesh),this._particles.splice(this._particles.indexOf(t),1);continue}t.update(e)}}}class nc{constructor({scene:e,x:t,y:n,z:i}){this.scene=e,this.position=new L(t,n,i)}shouldRemove(){throw new Error("Not implemented")}update(e){throw new Error("Not implemented")}}class Rp extends nc{constructor({scene:e,x:t,y:n,z:i}){var r=Math.random()-.5,o=Math.random()-.5;super({scene:e,x:t+r,y:n+o,z:i}),this.velocity=new L(0,0,-.3);var a=.04,c=.1,l=Math.random()*(c-a)+a;this.mesh=new Gt(new Ir(l),new jn({color:"#ffffff"})),this.mesh.position.copy(this.position),this.mesh.castShadow=!0,e.add(this.mesh)}shouldRemove(){return this.position.z<=-.5}move(e){this.position.add(this.velocity.clone().multiplyScalar(e));var t=this.position.clone();t.x+=Math.sin(this.position.z*4)*.1,t.y+=Math.cos(this.position.z*5)*.1,this.mesh.position.copy(t)}update(e){this.move(e)}}const Xa=class Xa extends nc{constructor({scene:e,x:t,y:n,z:i}){var r=-.4,o=.4;t+=Math.random()*(o-r)+r,n+=Math.random()*(o-r)+r,i+=Math.random()*(o-r)+r,super({scene:e,x:t,y:n,z:i}),this.mesh=Xa.mesh.clone(),this.mesh.position.copy(this.position),e.add(this.mesh),this.maxBlackDots=40,this.currentBlackDots=0}shouldRemove(){return this.mesh.scale.x<=.1}decreaseLightIntensity(e){}decreaseRadius(e){this.mesh.scale.x-=e,this.mesh.scale.y-=e,this.mesh.scale.z-=e}spawnBlackDots(e){if(!(this.currentBlackDots>=this.maxBlackDots)&&bp.triggerPulse(e,20)){this.currentBlackDots+=1;const n=Math.random()*.1+.01;var t=new Gt(new Ir(n,8,4),new jn({color:"#000000"}));t.position.x+=Math.random()-.5,t.position.y+=Math.random()-.5,t.position.z+=Math.random()-.5,this.mesh.add(t)}}move(e){}update(e){this.decreaseLightIntensity(e),this.decreaseRadius(e),this.move(e),this.spawnBlackDots(e)}};Yi(Xa,"mesh",new Gt(new Ir(.1,8,4),new jn({color:"#fff376"})));let zl=Xa;const Ut=class Ut extends nc{constructor({scene:e,x:t,y:n,z:i,orbitRadius:r=.7,orbitSpeed:o=Math.PI*2/1.5,lifeTime:a=2,startScale:c=.5}){super({scene:e,x:t,y:n,z:i}),this.orbitRadius=r,this.orbitSpeed=o,this.time=0,this.lifeTime=a,this.startScale=c,this.angleOffset=Math.random()*Math.PI*2;const l=Ut.spriteMaps[Math.floor(Math.random()*Ut.spriteMaps.length)],u=new uu({map:l});this.sprite=new jT(u),this.sprite.scale.set(this.startScale,this.startScale,0),this.sprite.position.z=this.position.z,this.move(0),e.add(this.sprite),this.mesh=this.sprite}shouldRemove(){return this.time>=this.lifeTime}scaleDown(){var e=this.time/this.lifeTime;this.sprite.scale.set(this.startScale*(1-e)+.1,this.startScale*(1-e)+.1,0)}move(e){this.time+=e,this.sprite.position.x=Math.sin(this.time*this.orbitSpeed+this.angleOffset)*this.orbitRadius,this.sprite.position.y=Math.cos(this.time*this.orbitSpeed+this.angleOffset)*this.orbitRadius,this.sprite.position.x+=this.position.x,this.sprite.position.y+=this.position.y}update(e){this.move(e),this.scaleDown()}};Yi(Ut,"textureLoader",new dp),Yi(Ut,"starMap",Ut.textureLoader.load("assets/star.png")),Yi(Ut,"planetMap",Ut.textureLoader.load("assets/planet.png")),Yi(Ut,"exclamationMap",Ut.textureLoader.load("assets/exclamation.png")),Yi(Ut,"interogationMap",Ut.textureLoader.load("assets/interogation.png")),Yi(Ut,"spriteMaps",[Ut.starMap,Ut.starMap,Ut.starMap,Ut.starMap,Ut.planetMap,Ut.exclamationMap,Ut.interogationMap]);let La=Ut;class PE extends nc{constructor({scene:e,x:t,y:n,z:i}){const r=new Ir(ss.randFloat(.07,.11),6,3);super({scene:e,x:t,y:n,z:i}),this.velocity=new L(ss.randFloat(-.7,.7),ss.randFloat(-.7,.7),ss.randFloat(3,8)),this.gravity=new L(0,0,-3);const o=ss.randInt(0,16777215);this.mesh=new Gt(r,new jn({color:o})),this.mesh.position.copy(this.position),e.add(this.mesh)}shouldRemove(){return this.mesh.scale.z<=.1}scaleDown(e){this.mesh.scale.x-=e*.3,this.mesh.scale.y-=e*.3,this.mesh.scale.z-=e*.3}move(e){return this.position.add(this.velocity.clone().multiplyScalar(e)),this.mesh.position.copy(this.position),this.velocity.add(this.gravity.clone().multiplyScalar(e)),this.position.z<0?(this.position.z=0,this.velocity=new L(0,0,0),!1):!0}update(e){this.move(e)||this.scaleDown(e)}}class _u{constructor({scene:e,x:t=0,y:n=0,z:i=0,width:r=1,depth:o=1,color:a="#ffffff"}){this.mesh=this.createMesh(t,n,i,r,o,a),e.add(this.mesh)}createMesh(e,t,n,i,r,o){const a=new Fr(i,i,r),c=new Br({color:o}),l=new Gt(a,c);return l.position.set(e,t,n),l.castShadow=!0,l.receiveShadow=!0,l}}class xu extends _u{constructor({scene:e,x:t,y:n,color:i}){super({scene:e,x:t,y:n,z:0,width:.5,depth:.5,color:i}),this.scene=e,this.position=new xe(t,n),this.hasBeenActivated=!1,this.mesh.position.z=10,this.fallSpeed=31}fall(e){this.mesh.position.z>0&&(this.mesh.position.z=Math.max(0,this.mesh.position.z-this.fallSpeed*e))}update(e){this.mesh.rotation.x+=e,this.mesh.rotation.y+=e,this.fall(e)}activateByPlayer(e){throw new Error("Not implemented")}delete(){this.scene.remove(this.mesh)}}class hl extends xu{constructor({scene:e,x:t,y:n,players:i,particlesSystem:r}){super({scene:e,x:t,y:n,color:5614335}),this.players=i,this.particlesSystem=r}activateByPlayer(e){this.hasBeenActivated=!0;for(let t of this.players)t!=e&&(t.slowDuration=10)}update(e){this.particlesSystem.triggerPulse(e,3)&&this.particlesSystem.addParticle(this.position.x,this.position.y,1.5,Rp),super.update(e)}}class ic extends xu{constructor({scene:e,x:t,y:n,players:i,particlesSystem:r}){super({scene:e,x:t,y:n,color:0}),this.players=i,this.particlesSystem=r}static desactivateSceneLights(e,t,n){for(let i of e.children)i.type=="DirectionalLight"?i.intensity=t:i.type=="AmbientLight"&&(i.intensity=n)}static activateSceneLights(e){for(let t of e.children)t.type=="DirectionalLight"?t.intensity=xp:t.type=="AmbientLight"&&(t.intensity=_p)}activateByPlayer(e){this.hasBeenActivated=!0;for(let t of this.players)t!=e&&(t.spotLightOffDuration=10);ic.desactivateSceneLights(this.scene,0,.003)}update(e){this.particlesSystem.triggerPulse(e,3)&&this.particlesSystem.addParticle(this.position.x,this.position.y,.5,zl),super.update(e)}}class kd extends xu{constructor({scene:e,x:t,y:n,players:i,particlesSystem:r}){super({scene:e,x:t,y:n,color:16756736}),this.players=i,this.particlesSystem=r}activateByPlayer(e){this.hasBeenActivated=!0;for(let t of this.players)t!=e&&(t.dazedDuration=10)}update(e){this.particlesSystem.triggerPulse(e,4)&&this.particlesSystem.addParticle(this.position.x,this.position.y,1,La),super.update(e)}}const DE=[{color:"#ff0000",upKey:87,leftKey:65,downKey:83,rightKey:68},{color:"#00ff00",upKey:38,leftKey:37,downKey:40,rightKey:39},{color:"#0000ff",upKey:73,leftKey:74,downKey:75,rightKey:76},{color:"#ff00ff",upKey:84,leftKey:70,downKey:71,rightKey:72}];class UE extends _u{constructor({scene:e,x:t=0,y:n=0,depth:i=1,presetNb:r=0,preset:o=DE[r],particlesSystem:a}){super({scene:e,x:t,y:n,depth:i,color:o.color}),this.scene=e,this.depth=i,this.particlesSystem=a,this.keys={up:o.upKey,left:o.leftKey,down:o.downKey,right:o.rightKey},this.position=new xe(t,n),this.movingDirection=new xe(0,0),this.canMove=!0,this.meshStartMovingVelocity=-8,this.meshCurrentMovingVelocity=this.meshStartMovingVelocity,this.meshMovingAcceleration=1,this.spotLightIntensity=155,this.spotLight=this.createSpotlight(this.spotLightIntensity),this.hasWin=!1,this.slowDuration=0,this.slowedMeshMovingVelocity=8,this.spotLightOffDuration=0,this.dazedDuration=0,this.dazedKeys={up:this.keys.down,down:this.keys.up,left:this.keys.right,right:this.keys.left},this.defaultKeys={up:this.keys.up,down:this.keys.down,left:this.keys.left,right:this.keys.right}}createSpotlight(e){const t=this.mesh.material.color;var n=new tc(t,e,12,Math.PI/4,.5,2);return n.position.set(0,0,8),this.mesh.add(n),this.mesh.add(n.target),n}moveRight(){this.movingDirection.x=1,this.canMove=!1}moveLeft(){this.movingDirection.x=-1,this.canMove=!1}moveUp(){this.movingDirection.y=1,this.canMove=!1}moveDown(){this.movingDirection.y=-1,this.canMove=!1}setMovement(e){this.canMove&&(e.includes(this.keys.up)?this.moveUp():e.includes(this.keys.down)?this.moveDown():e.includes(this.keys.left)?this.moveLeft():e.includes(this.keys.right)&&this.moveRight())}activatePowerup(e){for(let t of e)this.position.x==t.position.x&&this.position.y==t.position.y&&t.activateByPlayer(this)}updateMovement(e,t,n,i){if(this.setMovement(n),this.movingDirection.x!=0||this.movingDirection.y!=0){for(;!this.hasWin&&!xE.includes(t.getCell(this.position.x+this.movingDirection.x,this.position.y+this.movingDirection.y));)this.position.x+=this.movingDirection.x,this.position.y+=this.movingDirection.y,this.checkVictory(t),this.activatePowerup(i);this.movingDirection.x=0,this.movingDirection.y=0}this.canMove=this.moveMeshToPosition(e),this.canMove&&(this.meshCurrentMovingVelocity=this.meshStartMovingVelocity)}moveMeshToPosition(e){var t=new xe(this.position.x-this.mesh.position.x,this.position.y-this.mesh.position.y).normalize();if(this.position.x!=this.mesh.position.x||this.position.y!=this.mesh.position.y){this.mesh.position.x+=Math.sign(this.position.x-this.mesh.position.x)*this.meshCurrentMovingVelocity*e,this.mesh.position.y+=Math.sign(this.position.y-this.mesh.position.y)*this.meshCurrentMovingVelocity*e,this.meshCurrentMovingVelocity+=this.meshMovingAcceleration;var n=new xe(this.position.x-this.mesh.position.x,this.position.y-this.mesh.position.y).normalize();return(Math.sign(t.x)!=Math.sign(n.x)||Math.sign(t.y)!=Math.sign(n.y))&&this.mesh.position.copy(new L(this.position.x,this.position.y,0)),!1}return!0}checkVictory(e){e.isOutOfBounds(this.position.x,this.position.y)&&(this.hasWin=!0,console.log("You have won!"))}updatePowerups(e){this.slowDuration>0&&(this.particlesSystem.triggerPulse(e,this.canMove?4:22)&&this.particlesSystem.addParticle(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z+1.5,Rp),this.meshCurrentMovingVelocity>=0&&(this.meshCurrentMovingVelocity=this.slowedMeshMovingVelocity),this.slowDuration-=e),this.spotLightOffDuration>0&&(this.spotLight.intensity=2,this.spotLightOffDuration-=e,this.spotLightOffDuration<=0&&(this.spotLight.intensity=this.spotLightIntensity,console.log("LightsDown powerup deactivated"),ic.activateSceneLights(this.scene),this.spotLightOffDuration=-1)),this.dazedDuration>0&&(this.particlesSystem.triggerPulse(e,this.canMove?4:10)&&this.particlesSystem.addParticle(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z+1,La),this.keys=this.dazedKeys,this.dazedDuration-=e,this.dazedDuration<=0&&(this.keys=this.defaultKeys))}winAnimation(e){this.winTimer||(this.winTimer=0),this.winTimer+=e,this.mesh.position.z=Math.abs(Math.sin(this.winTimer*3))*1.5,this.particlesSystem.triggerPulse(e,this.canMove?20:200)&&this.particlesSystem.addParticle(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z,PE)}update(e,t,n,i){this.updateMovement(e,n,t,i),this.updatePowerups(e),this.hasWin&&this.winAnimation(e)}}class OE{constructor(e){this._mapArray=e,this._height=e.length,this._width=e[0].length}isOutOfBounds(e,t){return e<0||e>=this.getWidth()||t<0||t>=this.getHeight()}getCell(e,t){return this.isOutOfBounds(e,t)?null:this._mapArray[this._height-t-1][e]}getRandomEmptyCell(e=100){let t=Math.floor(Math.random()*this.getWidth()),n=Math.floor(Math.random()*this.getHeight());for(;this.getCell(t,n)!==gE&&e>0;)t=Math.floor(Math.random()*this.getWidth()),n=Math.floor(Math.random()*this.getHeight()),e--;return e===0?(console.error("Could not find an empty cell for powerup"),null):{x:t,y:n}}getHeight(){return this._height}getWidth(){return this._width}}const Hd={VERTEX:"vertex",FRAGMENT:"fragment"},gt={NONE:"none",FRAME:"frame",RENDER:"render",OBJECT:"object"},sc=["x","y","z","w"];function Cp(s,e=!1){let t="{";s.isNode===!0&&(t+=s.id);for(const{property:n,childNode:i}of Ia(s))t+=","+n.slice(0,-4)+":"+i.getCacheKey(e);return t+="}",t}function*Ia(s,e=!1){for(const t in s){if(t.startsWith("_")===!0)continue;const n=s[t];if(Array.isArray(n)===!0)for(let i=0;i<n.length;i++){const r=n[i];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:i,childNode:r})}else if(n&&n.isNode===!0)yield{property:t,childNode:n};else if(typeof n=="object")for(const i in n){const r=n[i];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:i,childNode:r})}}}function as(s){if(s==null)return null;const e=typeof s;return s.isNode===!0?"node":e==="number"?"float":e==="boolean"?"bool":e==="string"?"string":e==="function"?"shader":s.isVector2===!0?"vec2":s.isVector3===!0?"vec3":s.isVector4===!0?"vec4":s.isMatrix3===!0?"mat3":s.isMatrix4===!0?"mat4":s.isColor===!0?"color":s instanceof ArrayBuffer?"ArrayBuffer":null}function Lp(s,...e){const t=s?s.slice(-4):void 0;return e.length===1&&(t==="vec2"?e=[e[0],e[0]]:t==="vec3"?e=[e[0],e[0],e[0]]:t==="vec4"&&(e=[e[0],e[0],e[0],e[0]])),s==="color"?new ve(...e):t==="vec2"?new xe(...e):t==="vec3"?new L(...e):t==="vec4"?new tt(...e):t==="mat3"?new qe(...e):t==="mat4"?new ze(...e):s==="bool"?e[0]||!1:s==="float"||s==="int"||s==="uint"?e[0]||0:s==="string"?e[0]||"":s==="ArrayBuffer"?Pp(e[0]):null}function Ip(s){let e="";const t=new Uint8Array(s);for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function Pp(s){return Uint8Array.from(atob(s),e=>e.charCodeAt(0)).buffer}const Gd=new Map;let FE=0;class Ae extends fs{constructor(e=null){super(),this.nodeType=e,this.updateType=gt.NONE,this.updateBeforeType=gt.NONE,this.uuid=ss.generateUUID(),this.version=0,this._cacheKey=null,this._cacheKeyVersion=0,this.isNode=!0,Object.defineProperty(this,"id",{value:FE++})}set needsUpdate(e){e===!0&&this.version++}get type(){return this.constructor.type}onUpdate(e,t){return this.updateType=t,this.update=e.bind(this.getSelf()),this}onFrameUpdate(e){return this.onUpdate(e,gt.FRAME)}onRenderUpdate(e){return this.onUpdate(e,gt.RENDER)}onObjectUpdate(e){return this.onUpdate(e,gt.OBJECT)}getSelf(){return this.self||this}updateReference(){return this}isGlobal(){return!1}*getChildren(){for(const{childNode:e}of Ia(this))yield e}dispose(){this.dispatchEvent({type:"dispose"})}traverse(e){e(this);for(const t of this.getChildren())t.traverse(e)}getCacheKey(e=!1){return e=e||this.version!==this._cacheKeyVersion,(e===!0||this._cacheKey===null)&&(this._cacheKey=Cp(this,e),this._cacheKeyVersion=this.version),this._cacheKey}getHash(){return this.uuid}getUpdateType(){return this.updateType}getUpdateBeforeType(){return this.updateBeforeType}getNodeType(e){const t=e.getNodeProperties(this);return t.outputNode?t.outputNode.getNodeType(e):this.nodeType}getShared(e){const t=this.getHash(e);return e.getNodeFromHash(t)||this}setup(e){const t=e.getNodeProperties(this);for(const n of this.getChildren())t["_node"+n.id]=n;return null}construct(e){return console.warn("THREE.Node: construct() is deprecated. Use setup() instead."),this.setup(e)}increaseUsage(e){const t=e.getDataFromNode(this);return t.usageCount=t.usageCount===void 0?1:t.usageCount+1,t.usageCount}analyze(e){if(this.increaseUsage(e)===1){const n=e.getNodeProperties(this);for(const i of Object.values(n))i&&i.isNode===!0&&i.build(e)}}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);if(n&&n.isNode===!0)return n.build(e,t)}updateBefore(){console.warn("Abstract function.")}update(){console.warn("Abstract function.")}build(e,t=null){const n=this.getShared(e);if(this!==n)return n.build(e,t);e.addNode(this),e.addChain(this);let i=null;const r=e.getBuildStage();if(r==="setup"){this.updateReference(e);const o=e.getNodeProperties(this);if(o.initialized!==!0||e.context.tempRead===!1){const a=e.stack.nodes.length;o.initialized=!0,o.outputNode=this.setup(e),o.outputNode!==null&&e.stack.nodes.length!==a&&(o.outputNode=e.stack);for(const c of Object.values(o))c&&c.isNode===!0&&c.build(e)}}else if(r==="analyze")this.analyze(e);else if(r==="generate")if(this.generate.length===1){const a=this.getNodeType(e),c=e.getDataFromNode(this);i=c.snippet,i===void 0&&(i=this.generate(e)||"",c.snippet=i),i=e.format(i,a,t)}else i=this.generate(e,t)||"";return e.removeChain(this),i}getSerializeChildren(){return Ia(this)}serialize(e){const t=this.getSerializeChildren(),n={};for(const{property:i,index:r,childNode:o}of t)r!==void 0?(n[i]===void 0&&(n[i]=Number.isInteger(r)?[]:{}),n[i][r]=o.toJSON(e.meta).uuid):n[i]=o.toJSON(e.meta).uuid;Object.keys(n).length>0&&(e.inputNodes=n)}deserialize(e){if(e.inputNodes!==void 0){const t=e.meta.nodes;for(const n in e.inputNodes)if(Array.isArray(e.inputNodes[n])){const i=[];for(const r of e.inputNodes[n])i.push(t[r]);this[n]=i}else if(typeof e.inputNodes[n]=="object"){const i={};for(const r in e.inputNodes[n]){const o=e.inputNodes[n][r];i[r]=t[o]}this[n]=i}else{const i=e.inputNodes[n];this[n]=t[i]}}}toJSON(e){const{uuid:t,type:n}=this,i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{},nodes:{}});let r=e.nodes[t];r===void 0&&(r={uuid:t,type:n,meta:e,metadata:{version:4.6,type:"Node",generator:"Node.toJSON"}},i!==!0&&(e.nodes[r.uuid]=r),this.serialize(r),delete r.meta);function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}if(i){const a=o(e.textures),c=o(e.images),l=o(e.nodes);a.length>0&&(r.textures=a),c.length>0&&(r.images=c),l.length>0&&(r.nodes=l)}return r}}function K(s,e){if(typeof e!="function"||!s)throw new Error(`Node class ${s} is not a class`);if(Gd.has(s)){console.warn(`Redefinition of node class ${s}`);return}Gd.set(s,e),e.type=s}class _t extends Ae{constructor(e){super(e),this.isTempNode=!0}hasDependencies(e){return e.getDataFromNode(this).usageCount>1}build(e,t){if(e.getBuildStage()==="generate"){const i=e.getVectorType(this.getNodeType(e,t)),r=e.getDataFromNode(this);if(e.context.tempRead!==!1&&r.propertyName!==void 0)return e.format(r.propertyName,i,t);if(e.context.tempWrite!==!1&&i!=="void"&&t!=="void"&&this.hasDependencies(e)){const o=super.build(e,i),a=e.getVarFromNode(this,null,i),c=e.getPropertyName(a);return e.addLineFlowCode(`${c} = ${o}`),r.snippet=o,r.propertyName=c,e.format(r.propertyName,i,t)}}return super.build(e,t)}}K("TempNode",_t);class Gr extends Ae{constructor(e,t){super(),this.node=e,this.indexNode=t,this.isArrayElementNode=!0}getNodeType(e){return this.node.getNodeType(e)}generate(e){const t=this.node.build(e),n=this.indexNode.build(e,"uint");return`${t}[ ${n} ]`}}K("ArrayElementNode",Gr);class vu extends Ae{constructor(e,t){super(),this.node=e,this.convertTo=t}getNodeType(e){const t=this.node.getNodeType(e);let n=null;for(const i of this.convertTo.split("|"))(n===null||e.getTypeLength(t)===e.getTypeLength(i))&&(n=i);return n}serialize(e){super.serialize(e),e.convertTo=this.convertTo}deserialize(e){super.deserialize(e),this.convertTo=e.convertTo}generate(e,t){const n=this.node,i=this.getNodeType(e),r=n.build(e,i);return e.format(r,i,t)}}K("ConvertNode",vu);class Dp extends _t{constructor(e=[],t=null){super(t),this.nodes=e}getNodeType(e){return this.nodeType!==null?e.getVectorType(this.nodeType):e.getTypeFromLength(this.nodes.reduce((t,n)=>t+e.getTypeLength(n.getNodeType(e)),0))}generate(e,t){const n=this.getNodeType(e),i=this.nodes,r=e.getComponentType(n),o=[];for(const c of i){let l=c.build(e);const u=e.getComponentType(c.getNodeType(e));u!==r&&(l=e.format(l,u,r)),o.push(l)}const a=`${e.getType(n)}( ${o.join(", ")} )`;return e.format(a,n,t)}}K("JoinNode",Dp);const VE=sc.join("");class kl extends Ae{constructor(e,t="x"){super(),this.node=e,this.components=t,this.isSplitNode=!0}getVectorLength(){let e=this.components.length;for(const t of this.components)e=Math.max(sc.indexOf(t)+1,e);return e}getComponentType(e){return e.getComponentType(this.node.getNodeType(e))}getNodeType(e){return e.getTypeFromLength(this.components.length,this.getComponentType(e))}generate(e,t){const n=this.node,i=e.getTypeLength(n.getNodeType(e));let r=null;if(i>1){let o=null;this.getVectorLength()>=i&&(o=e.getTypeFromLength(this.getVectorLength(),this.getComponentType(e)));const c=n.build(e,o);this.components.length===i&&this.components===VE.slice(0,this.components.length)?r=e.format(c,o,t):r=e.format(`${c}.${this.components}`,this.getNodeType(e),t)}else r=n.build(e,t);return r}serialize(e){super.serialize(e),e.components=this.components}deserialize(e){super.deserialize(e),this.components=e.components}}K("SplitNode",kl);class Up extends _t{constructor(e,t,n){super(),this.sourceNode=e,this.components=t,this.targetNode=n}getNodeType(e){return this.sourceNode.getNodeType(e)}generate(e){const{sourceNode:t,components:n,targetNode:i}=this,r=this.getNodeType(e),o=e.getTypeFromLength(n.length),a=i.build(e,o),c=t.build(e,r),l=e.getTypeLength(r),u=[];for(let h=0;h<l;h++){const d=sc[h];d===n[0]?(u.push(a),h+=n.length-1):u.push(c+"."+d)}return`${e.getType(r)}( ${u.join(", ")} )`}}K("SetNode",Up);class rc extends Ae{constructor(e,t=null){super(t),this.isInputNode=!0,this.value=e,this.precision=null}getNodeType(){return this.nodeType===null?as(this.value):this.nodeType}getInputType(e){return this.getNodeType(e)}setPrecision(e){return this.precision=e,this}serialize(e){super.serialize(e),e.value=this.value,this.value&&this.value.toArray&&(e.value=this.value.toArray()),e.valueType=as(this.value),e.nodeType=this.nodeType,e.valueType==="ArrayBuffer"&&(e.value=Ip(e.value)),e.precision=this.precision}deserialize(e){super.deserialize(e),this.nodeType=e.nodeType,this.value=Array.isArray(e.value)?Lp(e.valueType,...e.value):e.value,this.precision=e.precision||null,this.value&&this.value.fromArray&&(this.value=this.value.fromArray(e.value))}generate(){console.warn("Abstract function.")}}K("InputNode",rc);class $n extends rc{constructor(e,t=null){super(e,t),this.isConstNode=!0}generateConst(e){return e.generateConst(this.getNodeType(e),this.value)}generate(e,t){const n=this.getNodeType(e);return e.format(this.generateConst(e),n,t)}}K("ConstNode",$n);let Ur=null;const hr=new Map;function D(s,e){if(hr.has(s)){console.warn(`Redefinition of node element ${s}`);return}if(typeof e!="function")throw new Error(`Node element ${s} is not a function`);hr.set(s,e)}const Wd=s=>s.replace(/r|s/g,"x").replace(/g|t/g,"y").replace(/b|p/g,"z").replace(/a|q/g,"w"),Op={setup(s,e){const t=e.shift();return s(cc(t),...e)},get(s,e,t){if(typeof e=="string"&&s[e]===void 0){if(s.isStackNode!==!0&&e==="assign")return(...n)=>(Ur.assign(t,...n),t);if(hr.has(e)){const n=hr.get(e);return s.isStackNode?(...i)=>t.add(n(...i)):(...i)=>n(t,...i)}else{if(e==="self")return s;if(e.endsWith("Assign")&&hr.has(e.slice(0,e.length-6))){const n=hr.get(e.slice(0,e.length-6));return s.isStackNode?(...i)=>t.assign(i[0],n(...i)):(...i)=>t.assign(n(t,...i))}else{if(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0)return e=Wd(e),de(new kl(t,e));if(/^set[XYZWRGBASTPQ]{1,4}$/.test(e)===!0)return e=Wd(e.slice(3).toLowerCase()),e=e.split("").sort().join(""),n=>de(new Up(s,e,n));if(e==="width"||e==="height"||e==="depth")return e==="width"?e="x":e==="height"?e="y":e==="depth"&&(e="z"),de(new kl(s,e));if(/^\d+$/.test(e)===!0)return de(new Gr(t,new $n(Number(e),"uint")))}}}return Reflect.get(s,e,t)},set(s,e,t,n){return typeof e=="string"&&s[e]===void 0&&(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0||e==="width"||e==="height"||e==="depth"||/^\d+$/.test(e)===!0)?(n[e].assign(t),!0):Reflect.set(s,e,t,n)}},dl=new WeakMap,Xd=new WeakMap,BE=function(s,e=null){const t=as(s);if(t==="node"){let n=dl.get(s);return n===void 0&&(n=new Proxy(s,Op),dl.set(s,n),dl.set(n,n)),n}else{if(e===null&&(t==="float"||t==="boolean")||t&&t!=="shader"&&t!=="string")return de(Hl(s,e));if(t==="shader")return Y(s)}return s},zE=function(s,e=null){for(const t in s)s[t]=de(s[t],e);return s},kE=function(s,e=null){const t=s.length;for(let n=0;n<t;n++)s[n]=de(s[n],e);return s},HE=function(s,e=null,t=null,n=null){const i=r=>de(n!==null?Object.assign(r,n):r);return e===null?(...r)=>i(new s(...xr(r))):t!==null?(t=de(t),(...r)=>i(new s(e,...xr(r),t))):(...r)=>i(new s(e,...xr(r)))},GE=function(s,...e){return de(new s(...xr(e)))};class WE extends Ae{constructor(e,t){super(),this.shaderNode=e,this.inputNodes=t}getNodeType(e){const{outputNode:t}=e.getNodeProperties(this);return t?t.getNodeType(e):super.getNodeType(e)}call(e){const{shaderNode:t,inputNodes:n}=this;if(t.layout){let o=Xd.get(e.constructor);o===void 0&&(o=new WeakMap,Xd.set(e.constructor,o));let a=o.get(t);return a===void 0&&(a=de(e.buildFunctionNode(t)),o.set(t,a)),e.currentFunctionNode!==null&&e.currentFunctionNode.includes.push(a),de(a.call(n))}const i=t.jsFunc,r=n!==null?i(n,e.stack,e):i(e.stack,e);return de(r)}setup(e){return e.addStack(),e.stack.outputNode=this.call(e),e.removeStack()}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);return n===null?this.call(e).build(e,t):super.generate(e,t)}}class XE extends Ae{constructor(e){super(),this.jsFunc=e,this.layout=null}get isArrayInput(){return/^\((\s+)?\[/.test(this.jsFunc.toString())}setLayout(e){return this.layout=e,this}call(e=null){return cc(e),de(new WE(this,e))}setup(){return this.call()}}const qE=[!1,!0],YE=[0,1,2,3],jE=[-1,-2],Fp=[.5,1.5,1/3,1e-6,1e6,Math.PI,Math.PI*2,1/Math.PI,2/Math.PI,1/(Math.PI*2),Math.PI/2],yu=new Map;for(const s of qE)yu.set(s,new $n(s));const Mu=new Map;for(const s of YE)Mu.set(s,new $n(s,"uint"));const Tu=new Map([...Mu].map(s=>new $n(s.value,"int")));for(const s of jE)Tu.set(s,new $n(s,"int"));const oc=new Map([...Tu].map(s=>new $n(s.value)));for(const s of Fp)oc.set(s,new $n(s));for(const s of Fp)oc.set(-s,new $n(-s));const ac={bool:yu,uint:Mu,ints:Tu,float:oc},qd=new Map([...yu,...oc]),Hl=(s,e)=>qd.has(s)?qd.get(s):s.isNode===!0?s:new $n(s,e),KE=s=>{try{return s.getNodeType()}catch{return}},ft=function(s,e=null){return(...t)=>{if((t.length===0||!["bool","float","int","uint"].includes(s)&&t.every(i=>typeof i!="object"))&&(t=[Lp(s,...t)]),t.length===1&&e!==null&&e.has(t[0]))return de(e.get(t[0]));if(t.length===1){const i=Hl(t[0],s);return KE(i)===s?de(i):de(new vu(i,s))}const n=t.map(i=>Hl(i));return de(new Dp(n,s))}},$E=s=>s!=null?s.nodeType||s.convertTo||(typeof s=="string"?s:null):null;function vo(s){return new Proxy(new XE(s),Op)}const de=(s,e=null)=>BE(s,e),cc=(s,e=null)=>new zE(s,e),xr=(s,e=null)=>new kE(s,e),B=(...s)=>new HE(...s),ne=(...s)=>new GE(...s),Y=s=>{const e=new vo(s),t=(...n)=>{let i;return cc(n),n[0]&&n[0].isNode?i=[...n]:i=n[0],e.call(i)};return t.shaderNode=e,t.setLayout=n=>(e.setLayout(n),t),t};K("ShaderNode",vo);const Yd=s=>{Ur=s},ZE=()=>Ur,Qe=(...s)=>Ur.if(...s);function JE(s){return Ur&&Ur.add(s),s}D("append",JE);const QE=new ft("color"),w=new ft("float",ac.float),C=new ft("int",ac.ints),he=new ft("uint",ac.uint),Os=new ft("bool",ac.bool),Le=new ft("vec2"),Is=new ft("ivec2"),eA=new ft("uvec2"),tA=new ft("bvec2"),F=new ft("vec3"),nA=new ft("ivec3"),Fo=new ft("uvec3"),Vp=new ft("bvec3"),Te=new ft("vec4"),iA=new ft("ivec4"),sA=new ft("uvec4"),rA=new ft("bvec4"),Bp=new ft("mat2"),oA=new ft("imat2"),aA=new ft("umat2"),cA=new ft("bmat2"),hi=new ft("mat3"),lA=new ft("imat3"),uA=new ft("umat3"),hA=new ft("bmat3"),vr=new ft("mat4"),dA=new ft("imat4"),fA=new ft("umat4"),pA=new ft("bmat4"),mA=(s="")=>de(new $n(s,"string")),gA=s=>de(new $n(s,"ArrayBuffer"));D("color",QE);D("float",w);D("int",C);D("uint",he);D("bool",Os);D("vec2",Le);D("ivec2",Is);D("uvec2",eA);D("bvec2",tA);D("vec3",F);D("ivec3",nA);D("uvec3",Fo);D("bvec3",Vp);D("vec4",Te);D("ivec4",iA);D("uvec4",sA);D("bvec4",rA);D("mat2",Bp);D("imat2",oA);D("umat2",aA);D("bmat2",cA);D("mat3",hi);D("imat3",lA);D("umat3",uA);D("bmat3",hA);D("mat4",vr);D("imat4",dA);D("umat4",fA);D("bmat4",pA);D("string",mA);D("arrayBuffer",gA);const _A=B(Gr),xA=(s,e)=>de(new vu(de(s),e));D("element",_A);D("convert",xA);class zp extends _t{constructor(e,t){super(),this.targetNode=e,this.sourceNode=t}hasDependencies(){return!1}getNodeType(e,t){return t!=="void"?this.targetNode.getNodeType(e):"void"}needsSplitAssign(e){const{targetNode:t}=this;if(e.isAvailable("swizzleAssign")===!1&&t.isSplitNode&&t.components.length>1){const n=e.getTypeLength(t.node.getNodeType(e));return sc.join("").slice(0,n)!==t.components}return!1}generate(e,t){const{targetNode:n,sourceNode:i}=this,r=this.needsSplitAssign(e),o=n.getNodeType(e),a=n.context({assign:!0}).build(e),c=i.build(e,o),l=i.getNodeType(e),u=e.getDataFromNode(this);let h;if(u.initialized===!0)t!=="void"&&(h=a);else if(r){const d=e.getVarFromNode(this,null,o),f=e.getPropertyName(d);e.addLineFlowCode(`${f} = ${c}`);const g=n.node.context({assign:!0}).build(e);for(let _=0;_<n.components.length;_++){const m=n.components[_];e.addLineFlowCode(`${g}.${m} = ${f}[ ${_} ]`)}t!=="void"&&(h=a)}else h=`${a} = ${c}`,(t==="void"||l==="void")&&(e.addLineFlowCode(h),t!=="void"&&(h=a));return u.initialized=!0,e.format(h,o,t)}}const vA=B(zp);K("AssignNode",zp);D("assign",vA);class kp extends Ae{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVaryingNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{name:t,node:n}=this,i=this.getNodeType(e),r=e.getVaryingFromNode(this,t,i);r.needsInterpolation||(r.needsInterpolation=e.shaderStage==="fragment");const o=e.getPropertyName(r,Hd.VERTEX);return e.flowNodeFromShaderStage(Hd.VERTEX,n,i,o),e.getPropertyName(r)}}const It=B(kp);D("varying",It);K("VaryingNode",kp);class lc extends Ae{constructor(e,t=null){super(t),this._attributeName=e}isGlobal(){return!0}getHash(e){return this.getAttributeName(e)}getNodeType(e){let t=super.getNodeType(e);if(t===null){const n=this.getAttributeName(e);if(e.hasGeometryAttribute(n)){const i=e.geometry.getAttribute(n);t=e.getTypeFromAttribute(i)}else t="float"}return t}setAttributeName(e){return this._attributeName=e,this}getAttributeName(){return this._attributeName}generate(e){const t=this.getAttributeName(e),n=this.getNodeType(e);if(e.hasGeometryAttribute(t)===!0){const r=e.geometry.getAttribute(t),o=e.getTypeFromAttribute(r),a=e.getAttribute(t,o);return e.shaderStage==="vertex"?e.format(a.name,o,n):It(this).build(e,n)}else return console.warn(`AttributeNode: Vertex attribute "${t}" not found on geometry.`),e.generateConst(n)}}const mn=(s,e)=>de(new lc(s,e));K("AttributeNode",lc);class Hp extends Ae{constructor(e,t){super(),this.isBypassNode=!0,this.outputNode=e,this.callNode=t}getNodeType(e){return this.outputNode.getNodeType(e)}generate(e){const t=this.callNode.build(e,"void");return t!==""&&e.addLineFlowCode(t),this.outputNode.build(e)}}const Gp=B(Hp);D("bypass",Gp);K("BypassNode",Hp);let yA=0;class MA{constructor(){this.id=yA++,this.nodesData=new WeakMap}getNodeData(e){return this.nodesData.get(e)}setNodeData(e,t){this.nodesData.set(e,t)}}class Wp extends Ae{constructor(e,t=new MA){super(),this.isCacheNode=!0,this.node=e,this.cache=t}getNodeType(e){return this.node.getNodeType(e)}build(e,...t){const n=e.getCache(),i=this.cache||e.globalCache;e.setCache(i);const r=this.node.build(e,...t);return e.setCache(n),r}}const Pa=B(Wp),TA=s=>Pa(s,null);D("cache",Pa);D("globalCache",TA);K("CacheNode",Wp);class Su extends Ae{constructor(e,t={}){super(),this.isContextNode=!0,this.node=e,this.context=t}getNodeType(e){return this.node.getNodeType(e)}setup(e){const t=e.getContext();e.setContext({...e.context,...this.context});const n=this.node.build(e);return e.setContext(t),n}generate(e,t){const n=e.getContext();e.setContext({...e.context,...this.context});const i=this.node.build(e,t);return e.setContext(n),i}}const ki=B(Su),SA=(s,e)=>ki(s,{label:e});D("context",ki);D("label",SA);K("ContextNode",Su);class Ei extends Ae{constructor(e){super("uint"),this.scope=e,this.isInstanceIndexNode=!0}generate(e){const t=this.getNodeType(e),n=this.scope;let i;if(n===Ei.VERTEX)i=e.getVertexIndex();else if(n===Ei.INSTANCE)i=e.getInstanceIndex();else throw new Error("THREE.IndexNode: Unknown scope: "+n);let r;return e.shaderStage==="vertex"||e.shaderStage==="compute"?r=i:r=It(this).build(e,t),r}}Ei.VERTEX="vertex";Ei.INSTANCE="instance";const EA=ne(Ei,Ei.VERTEX),Xp=ne(Ei,Ei.INSTANCE);K("IndexNode",Ei);class qp{start(){}finish(){}direct(){}indirectDiffuse(){}indirectSpecular(){}ambientOcclusion(){}}class Yp extends Ae{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVarNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{node:t,name:n}=this,i=e.getVarFromNode(this,n,e.getVectorType(this.getNodeType(e))),r=e.getPropertyName(i),o=t.build(e,i.type);return e.addLineFlowCode(`${r} = ${o}`),r}}const Ao=B(Yp);D("temp",Ao);D("toVar",(...s)=>Ao(...s).append());K("VarNode",Yp);class Wt extends Ae{constructor(e,t=null,n=!1){super(e),this.name=t,this.varying=n,this.isPropertyNode=!0}getHash(e){return this.name||super.getHash(e)}isGlobal(){return!0}generate(e){let t;return this.varying===!0?(t=e.getVaryingFromNode(this,this.name),t.needsInterpolation=!0):t=e.getVarFromNode(this,this.name),e.getPropertyName(t)}}const rn=(s,e)=>de(new Wt(s,e)),xi=(s,e)=>de(new Wt(s,e,!0)),nn=ne(Wt,"vec4","DiffuseColor"),yo=ne(Wt,"float","Roughness"),AA=ne(Wt,"float","Metalness"),Gl=ne(Wt,"float","Clearcoat"),Da=ne(Wt,"float","ClearcoatRoughness"),dr=ne(Wt,"vec3","Sheen"),Eu=ne(Wt,"float","SheenRoughness"),Au=ne(Wt,"float","Iridescence"),jp=ne(Wt,"float","IridescenceIOR"),Kp=ne(Wt,"float","IridescenceThickness"),Fi=ne(Wt,"color","SpecularColor"),Wl=ne(Wt,"float","Shininess"),wA=ne(Wt,"vec4","Output"),yr=ne(Wt,"float","dashSize"),Ua=ne(Wt,"float","gapSize");ne(Wt,"float","pointWidth");K("PropertyNode",Wt);class NA extends Wt{constructor(e,t=null){super(e,t),this.isParameterNode=!0}getHash(){return this.uuid}generate(){return this.name}}K("ParameterNode",NA);class wu extends Ae{constructor(e="",t=[],n=""){super("code"),this.isCodeNode=!0,this.code=e,this.language=n,this.includes=t}isGlobal(){return!0}setIncludes(e){return this.includes=e,this}getIncludes(){return this.includes}generate(e){const t=this.getIncludes(e);for(const i of t)i.build(e);const n=e.getCodeFromNode(this,this.getNodeType(e));return n.code=this.code,n.code}serialize(e){super.serialize(e),e.code=this.code,e.language=this.language}deserialize(e){super.deserialize(e),this.code=e.code,this.language=e.language}}B(wu);K("CodeNode",wu);class bA extends wu{constructor(e="",t=[],n=""){super(e,t,n),this.keywords={}}getNodeType(e){return this.getNodeFunction(e).type}getInputs(e){return this.getNodeFunction(e).inputs}getNodeFunction(e){const t=e.getDataFromNode(this);let n=t.nodeFunction;return n===void 0&&(n=e.parser.parseFunction(this.code),t.nodeFunction=n),n}generate(e,t){super.generate(e);const n=this.getNodeFunction(e),i=n.name,r=n.type,o=e.getCodeFromNode(this,r);i!==""&&(o.name=i);const a=e.getPropertyName(o);let c=this.getNodeFunction(e).getCode(a);const l=this.keywords,u=Object.keys(l);if(u.length>0)for(const h of u){const d=new RegExp(`\\b${h}\\b`,"g"),f=l[h].build(e,"property");c=c.replace(d,f)}return o.code=c+`
`,t==="property"?a:e.format(`${a}()`,r,t)}}K("FunctionNode",bA);class Nu extends Ae{constructor(e,t=!1){super("string"),this.name=e,this.version=0,this.shared=t,this.isUniformGroup=!0}set needsUpdate(e){e===!0&&this.version++}}const RA=s=>new Nu(s),$p=s=>new Nu(s,!0);$p("frame");$p("render");const CA=RA("object");K("UniformGroupNode",Nu);class Bs extends rc{constructor(e,t=null){super(e,t),this.isUniformNode=!0,this.groupNode=CA}setGroup(e){return this.groupNode=e,this}getGroup(){return this.groupNode}getUniformHash(e){return this.getHash(e)}onUpdate(e,t){const n=this.getSelf();return e=e.bind(n),super.onUpdate(i=>{const r=e(i,n);r!==void 0&&(this.value=r)},t)}generate(e,t){const n=this.getNodeType(e),i=this.getUniformHash(e);let r=e.getNodeFromHash(i);r===void 0&&(e.setHashNode(this,i),r=this);const o=r.getInputType(e),a=e.getUniformFromNode(r,o,e.shaderStage,e.context.label),c=e.getPropertyName(a);return e.context.label!==void 0&&delete e.context.label,e.format(c,n,t)}}const yt=(s,e)=>{const t=$E(e||s),n=s&&s.isNode===!0?s.node&&s.node.value||s.value:s;return de(new Bs(n,t))};K("UniformNode",Bs);class Zp extends lc{constructor(e=0){super(null,"vec2"),this.isUVNode=!0,this.index=e}getAttributeName(){const e=this.index;return"uv"+(e>0?e:"")}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}const Ri=(...s)=>de(new Zp(...s));K("UVNode",Zp);class Jp extends Ae{constructor(e,t=null){super("uvec2"),this.isTextureSizeNode=!0,this.textureNode=e,this.levelNode=t}generate(e,t){const n=this.textureNode.build(e,"property"),i=this.levelNode.build(e,"int");return e.format(`${e.getMethod("textureDimensions")}( ${n}, ${i} )`,this.getNodeType(e),t)}}const bu=B(Jp);D("textureSize",bu);K("TextureSizeNode",Jp);class Rt extends _t{constructor(e,t,n,...i){if(super(),this.op=e,i.length>0){let r=n;for(let o=0;o<i.length;o++)r=new Rt(e,r,i[o]);n=r}this.aNode=t,this.bNode=n}getNodeType(e,t){const n=this.op,i=this.aNode,r=this.bNode,o=i.getNodeType(e),a=typeof r<"u"?r.getNodeType(e):null;if(o==="void"||a==="void")return"void";if(n==="%")return o;if(n==="~"||n==="&"||n==="|"||n==="^"||n===">>"||n==="<<")return e.getIntegerType(o);if(n==="!"||n==="=="||n==="&&"||n==="||"||n==="^^")return"bool";if(n==="<"||n===">"||n==="<="||n===">="){const c=t?e.getTypeLength(t):Math.max(e.getTypeLength(o),e.getTypeLength(a));return c>1?`bvec${c}`:"bool"}else return o==="float"&&e.isMatrix(a)?a:e.isMatrix(o)&&e.isVector(a)?e.getVectorFromMatrix(o):e.isVector(o)&&e.isMatrix(a)?e.getVectorFromMatrix(a):e.getTypeLength(a)>e.getTypeLength(o)?a:o}generate(e,t){const n=this.op,i=this.aNode,r=this.bNode,o=this.getNodeType(e,t);let a=null,c=null;o!=="void"?(a=i.getNodeType(e),c=typeof r<"u"?r.getNodeType(e):null,n==="<"||n===">"||n==="<="||n===">="||n==="=="?e.isVector(a)?c=a:a=c="float":n===">>"||n==="<<"?(a=o,c=e.changeComponentType(c,"uint")):e.isMatrix(a)&&e.isVector(c)?c=e.getVectorFromMatrix(a):e.isVector(a)&&e.isMatrix(c)?a=e.getVectorFromMatrix(c):a=c=o):a=c=o;const l=i.build(e,a),u=typeof r<"u"?r.build(e,c):null,h=e.getTypeLength(t),d=e.getFunctionOperator(n);if(t!=="void")return n==="<"&&h>1?e.format(`${e.getMethod("lessThan")}( ${l}, ${u} )`,o,t):n==="<="&&h>1?e.format(`${e.getMethod("lessThanEqual")}( ${l}, ${u} )`,o,t):n===">"&&h>1?e.format(`${e.getMethod("greaterThan")}( ${l}, ${u} )`,o,t):n===">="&&h>1?e.format(`${e.getMethod("greaterThanEqual")}( ${l}, ${u} )`,o,t):n==="!"||n==="~"?e.format(`(${n}${l})`,a,t):d?e.format(`${d}( ${l}, ${u} )`,o,t):e.format(`( ${l} ${n} ${u} )`,o,t);if(a!=="void")return d?e.format(`${d}( ${l}, ${u} )`,o,t):e.format(`${l} ${n} ${u}`,o,t)}serialize(e){super.serialize(e),e.op=this.op}deserialize(e){super.deserialize(e),this.op=e.op}}const Vn=B(Rt,"+"),Ft=B(Rt,"-"),nt=B(Rt,"*"),Or=B(Rt,"/"),LA=B(Rt,"%"),IA=B(Rt,"=="),PA=B(Rt,"!="),DA=B(Rt,"<"),Qp=B(Rt,">"),UA=B(Rt,"<="),OA=B(Rt,">="),FA=B(Rt,"&&"),VA=B(Rt,"||"),BA=B(Rt,"!"),zA=B(Rt,"^^"),kA=B(Rt,"&"),HA=B(Rt,"~"),GA=B(Rt,"|"),WA=B(Rt,"^"),XA=B(Rt,"<<"),qA=B(Rt,">>");D("add",Vn);D("sub",Ft);D("mul",nt);D("div",Or);D("remainder",LA);D("equal",IA);D("notEqual",PA);D("lessThan",DA);D("greaterThan",Qp);D("lessThanEqual",UA);D("greaterThanEqual",OA);D("and",FA);D("or",VA);D("not",BA);D("xor",zA);D("bitAnd",kA);D("bitNot",HA);D("bitOr",GA);D("bitXor",WA);D("shiftLeft",XA);D("shiftRight",qA);K("OperatorNode",Rt);class I extends _t{constructor(e,t,n=null,i=null){super(),this.method=e,this.aNode=t,this.bNode=n,this.cNode=i}getInputType(e){const t=this.aNode.getNodeType(e),n=this.bNode?this.bNode.getNodeType(e):null,i=this.cNode?this.cNode.getNodeType(e):null,r=e.isMatrix(t)?0:e.getTypeLength(t),o=e.isMatrix(n)?0:e.getTypeLength(n),a=e.isMatrix(i)?0:e.getTypeLength(i);return r>o&&r>a?t:o>a?n:a>r?i:t}getNodeType(e){const t=this.method;return t===I.LENGTH||t===I.DISTANCE||t===I.DOT?"float":t===I.CROSS?"vec3":t===I.ALL?"bool":t===I.EQUALS?e.changeComponentType(this.aNode.getNodeType(e),"bool"):t===I.MOD?this.aNode.getNodeType(e):this.getInputType(e)}generate(e,t){const n=this.method,i=this.getNodeType(e),r=this.getInputType(e),o=this.aNode,a=this.bNode,c=this.cNode,l=e.renderer.isWebGLRenderer===!0;if(n===I.TRANSFORM_DIRECTION){let u=o,h=a;e.isMatrix(u.getNodeType(e))?h=Te(F(h),0):u=Te(F(u),0);const d=nt(u,h).xyz;return Bn(d).build(e,t)}else{if(n===I.NEGATE)return e.format("( - "+o.build(e,r)+" )",i,t);if(n===I.ONE_MINUS)return Ft(1,o).build(e,t);if(n===I.RECIPROCAL)return Or(1,o).build(e,t);if(n===I.DIFFERENCE)return zt(Ft(o,a)).build(e,t);{const u=[];return n===I.CROSS||n===I.MOD?u.push(o.build(e,i),a.build(e,i)):n===I.STEP?u.push(o.build(e,e.getTypeLength(o.getNodeType(e))===1?"float":r),a.build(e,r)):l&&(n===I.MIN||n===I.MAX)||n===I.MOD?u.push(o.build(e,r),a.build(e,e.getTypeLength(a.getNodeType(e))===1?"float":r)):n===I.REFRACT?u.push(o.build(e,r),a.build(e,r),c.build(e,"float")):n===I.MIX?u.push(o.build(e,r),a.build(e,r),c.build(e,e.getTypeLength(c.getNodeType(e))===1?"float":r)):(u.push(o.build(e,r)),a!==null&&u.push(a.build(e,r)),c!==null&&u.push(c.build(e,r))),e.format(`${e.getMethod(n,i)}( ${u.join(", ")} )`,i,t)}}}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}I.ALL="all";I.ANY="any";I.EQUALS="equals";I.RADIANS="radians";I.DEGREES="degrees";I.EXP="exp";I.EXP2="exp2";I.LOG="log";I.LOG2="log2";I.SQRT="sqrt";I.INVERSE_SQRT="inversesqrt";I.FLOOR="floor";I.CEIL="ceil";I.NORMALIZE="normalize";I.FRACT="fract";I.SIN="sin";I.COS="cos";I.TAN="tan";I.ASIN="asin";I.ACOS="acos";I.ATAN="atan";I.ABS="abs";I.SIGN="sign";I.LENGTH="length";I.NEGATE="negate";I.ONE_MINUS="oneMinus";I.DFDX="dFdx";I.DFDY="dFdy";I.ROUND="round";I.RECIPROCAL="reciprocal";I.TRUNC="trunc";I.FWIDTH="fwidth";I.BITCAST="bitcast";I.ATAN2="atan2";I.MIN="min";I.MAX="max";I.MOD="mod";I.STEP="step";I.REFLECT="reflect";I.DISTANCE="distance";I.DIFFERENCE="difference";I.DOT="dot";I.CROSS="cross";I.POW="pow";I.TRANSFORM_DIRECTION="transformDirection";I.MIX="mix";I.CLAMP="clamp";I.REFRACT="refract";I.SMOOTHSTEP="smoothstep";I.FACEFORWARD="faceforward";const e0=w(1e-6);w(1e6);const jd=w(Math.PI);w(Math.PI*2);const t0=B(I,I.ALL),YA=B(I,I.ANY),jA=B(I,I.EQUALS),KA=B(I,I.RADIANS),$A=B(I,I.DEGREES),ZA=B(I,I.EXP),Xl=B(I,I.EXP2),JA=B(I,I.LOG),Ru=B(I,I.LOG2),zs=B(I,I.SQRT),QA=B(I,I.INVERSE_SQRT),Wr=B(I,I.FLOOR),n0=B(I,I.CEIL),Bn=B(I,I.NORMALIZE),uc=B(I,I.FRACT),Vi=B(I,I.SIN),is=B(I,I.COS),e1=B(I,I.TAN),t1=B(I,I.ASIN),n1=B(I,I.ACOS),i1=B(I,I.ATAN),zt=B(I,I.ABS),Cu=B(I,I.SIGN),s1=B(I,I.LENGTH),r1=B(I,I.NEGATE),o1=B(I,I.ONE_MINUS),a1=B(I,I.DFDX),c1=B(I,I.DFDY),l1=B(I,I.ROUND),u1=B(I,I.RECIPROCAL),i0=B(I,I.TRUNC),h1=B(I,I.FWIDTH);B(I,I.BITCAST);const d1=B(I,I.ATAN2),wo=B(I,I.MIN),zn=B(I,I.MAX),f1=B(I,I.MOD),p1=B(I,I.STEP),m1=B(I,I.REFLECT),g1=B(I,I.DISTANCE),_1=B(I,I.DIFFERENCE),Xr=B(I,I.DOT),s0=B(I,I.CROSS),Si=B(I,I.POW),x1=B(I,I.POW,2),v1=B(I,I.POW,3),y1=B(I,I.POW,4),M1=B(I,I.TRANSFORM_DIRECTION),T1=s=>nt(Cu(s),Si(zt(s),1/3)),S1=s=>Xr(s,s),kn=B(I,I.MIX),No=(s,e=0,t=1)=>de(new I(I.CLAMP,de(s),de(e),de(t))),E1=s=>No(s),A1=B(I,I.REFRACT),Wi=B(I,I.SMOOTHSTEP),w1=B(I,I.FACEFORWARD),N1=(s,e,t)=>kn(e,t,s),b1=(s,e,t)=>Wi(e,t,s);D("all",t0);D("any",YA);D("equals",jA);D("radians",KA);D("degrees",$A);D("exp",ZA);D("exp2",Xl);D("log",JA);D("log2",Ru);D("sqrt",zs);D("inverseSqrt",QA);D("floor",Wr);D("ceil",n0);D("normalize",Bn);D("fract",uc);D("sin",Vi);D("cos",is);D("tan",e1);D("asin",t1);D("acos",n1);D("atan",i1);D("abs",zt);D("sign",Cu);D("length",s1);D("lengthSq",S1);D("negate",r1);D("oneMinus",o1);D("dFdx",a1);D("dFdy",c1);D("round",l1);D("reciprocal",u1);D("trunc",i0);D("fwidth",h1);D("atan2",d1);D("min",wo);D("max",zn);D("mod",f1);D("step",p1);D("reflect",m1);D("distance",g1);D("dot",Xr);D("cross",s0);D("pow",Si);D("pow2",x1);D("pow3",v1);D("pow4",y1);D("transformDirection",M1);D("mix",N1);D("clamp",No);D("refract",A1);D("smoothstep",b1);D("faceForward",w1);D("difference",_1);D("saturate",E1);D("cbrt",T1);K("MathNode",I);const R1=Y(s=>{const{value:e}=s,{rgb:t}=e,n=t.mul(.9478672986).add(.0521327014).pow(2.4),i=t.mul(.0773993808),r=t.lessThanEqual(.04045),o=kn(n,i,r);return Te(o,e.a)}),C1=Y(s=>{const{value:e}=s,{rgb:t}=e,n=t.pow(.41666).mul(1.055).sub(.055),i=t.mul(12.92),r=t.lessThanEqual(.0031308),o=kn(n,i,r);return Te(o,e.a)}),Kd=s=>{let e=null;return s===Vt?e="Linear":s===fn&&(e="sRGB"),e},r0=(s,e)=>Kd(s)+"To"+Kd(e);class bn extends _t{constructor(e,t){super("vec4"),this.method=e,this.node=t}setup(){const{method:e,node:t}=this;return e===bn.LINEAR_TO_LINEAR?t:L1[e]({value:t})}}bn.LINEAR_TO_LINEAR="LinearToLinear";bn.LINEAR_TO_sRGB="LinearTosRGB";bn.sRGB_TO_LINEAR="sRGBToLinear";const L1={[bn.LINEAR_TO_sRGB]:C1,[bn.sRGB_TO_LINEAR]:R1},I1=(s,e)=>de(new bn(r0(Vt,e),de(s))),o0=(s,e)=>de(new bn(r0(e,Vt),de(s))),P1=B(bn,bn.LINEAR_TO_sRGB),D1=B(bn,bn.sRGB_TO_LINEAR);D("linearTosRGB",P1);D("sRGBToLinear",D1);D("linearToColorSpace",I1);D("colorSpaceToLinear",o0);K("ColorSpaceNode",bn);class a0 extends Ae{constructor(e="",t="void"){super(t),this.snippet=e}generate(e,t){const n=this.getNodeType(e),i=this.snippet;if(n==="void")e.addLineFlowCode(i);else return e.format(`( ${i} )`,n,t)}}const hc=B(a0);K("ExpressionNode",a0);class c0 extends Bs{constructor(e){super(0),this.textureNode=e,this.updateType=gt.FRAME}get texture(){return this.textureNode.value}update(){const e=this.texture,t=e.images,n=t&&t.length>0?t[0]&&t[0].image||t[0]:e.image;if(n&&n.width!==void 0){const{width:i,height:r}=n;this.value=Math.log2(Math.max(i,r))}}}const U1=B(c0);K("MaxMipLevelNode",c0);class qr extends Bs{constructor(e,t=null,n=null){super(e),this.isTextureNode=!0,this.uvNode=t,this.levelNode=n,this.compareNode=null,this.depthNode=null,this.sampler=!0,this.updateMatrix=!1,this.updateType=gt.NONE,this.referenceNode=null,this._value=e,this.setUpdateMatrix(t===null)}set value(e){this.referenceNode?this.referenceNode.value=e:this._value=e}get value(){return this.referenceNode?this.referenceNode.value:this._value}getUniformHash(){return this.value.uuid}getNodeType(){return this.value.isDepthTexture===!0?"float":"vec4"}getInputType(){return"texture"}getDefaultUV(){return Ri(this.value.channel)}updateReference(){return this.value}getTransformedUV(e){const t=this.value;return yt(t.matrix).mul(F(e,1)).xy}setUpdateMatrix(e){return this.updateMatrix=e,this.updateType=e?gt.FRAME:gt.NONE,this}setupUV(e,t){const n=this.value;return e.isFlipY()&&(n.isRenderTargetTexture===!0||n.isFramebufferTexture===!0||n.isDepthTexture===!0)&&(t=t.setY(t.y.oneMinus())),t}setup(e){const t=e.getNodeProperties(this);let n=this.uvNode;(n===null||e.context.forceUVContext===!0)&&e.context.getUV&&(n=e.context.getUV(this)),n||(n=this.getDefaultUV()),this.updateMatrix===!0&&(n=this.getTransformedUV(n)),n=this.setupUV(e,n);let i=this.levelNode;i===null&&e.context.getTextureLevel&&(i=e.context.getTextureLevel(this)),t.uvNode=n,t.levelNode=i,t.compareNode=this.compareNode,t.depthNode=this.depthNode}generateUV(e,t){return t.build(e,this.sampler===!0?"vec2":"ivec2")}generateSnippet(e,t,n,i,r,o){const a=this.value;let c;return i?c=e.generateTextureLevel(a,t,n,i,r):o?c=e.generateTextureCompare(a,t,n,o,r):this.sampler===!1?c=e.generateTextureLoad(a,t,n,r):c=e.generateTexture(a,t,n,r),c}generate(e,t){const n=e.getNodeProperties(this),i=this.value;if(!i||i.isTexture!==!0)throw new Error("TextureNode: Need a three.js texture.");const r=super.generate(e,"property");if(t==="sampler")return r+"_sampler";if(e.isReference(t))return r;{const o=e.getDataFromNode(this);let a=o.propertyName;if(a===void 0){const{uvNode:u,levelNode:h,compareNode:d,depthNode:f}=n,g=this.generateUV(e,u),_=h?h.build(e,"float"):null,m=f?f.build(e,"int"):null,p=d?d.build(e,"float"):null,S=e.getVarFromNode(this);a=e.getPropertyName(S);const x=this.generateSnippet(e,r,g,_,m,p);e.addLineFlowCode(`${a} = ${x}`),e.context.tempWrite!==!1&&(o.snippet=x,o.propertyName=a)}let c=a;const l=this.getNodeType(e);return e.needsColorSpaceToLinear(i)&&(c=o0(hc(c,l),i.colorSpace).setup(e).build(e,l)),e.format(c,l,t)}}setSampler(e){return this.sampler=e,this}getSampler(){return this.sampler}uv(e){const t=this.clone();return t.uvNode=e,t.referenceNode=this,de(t)}blur(e){const t=this.clone();return t.levelNode=e.mul(U1(t)),t.referenceNode=this,de(t)}level(e){const t=this.clone();return t.levelNode=e,t.referenceNode=this,t}size(e){return bu(this,e)}compare(e){const t=this.clone();return t.compareNode=de(e),t.referenceNode=this,de(t)}depth(e){const t=this.clone();return t.depthNode=de(e),t.referenceNode=this,de(t)}serialize(e){super.serialize(e),e.value=this.value.toJSON(e.meta).uuid}deserialize(e){super.deserialize(e),this.value=e.meta.textures[e.value]}update(){const e=this.value;e.matrixAutoUpdate===!0&&e.updateMatrix()}clone(){const e=new this.constructor(this.value,this.uvNode,this.levelNode);return e.sampler=this.sampler,e}}const Fn=B(qr),Cs=(...s)=>Fn(...s).setSampler(!1);D("texture",Fn);K("TextureNode",qr);class dc extends Bs{constructor(e,t,n=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferCount=n}getInputType(){return"buffer"}}const Lu=(s,e,t)=>de(new dc(s,e,t));K("BufferNode",dc);class O1 extends Gr{constructor(e,t){super(e,t),this.isArrayBufferElementNode=!0}getNodeType(e){return this.node.getElementType(e)}generate(e){const t=super.generate(e),n=this.getNodeType();return e.format(t,"vec4",n)}}class l0 extends dc{constructor(e,t=null){super(null,"vec4"),this.array=e,this.elementType=t,this._elementType=null,this._elementLength=0,this.updateType=gt.RENDER,this.isArrayBufferNode=!0}getElementType(){return this.elementType||this._elementType}getElementLength(){return this._elementLength}update(){const{array:e,value:t}=this,n=this.getElementLength(),i=this.getElementType();if(n===1)for(let r=0;r<e.length;r++){const o=r*4;t[o]=e[r]}else if(i==="color")for(let r=0;r<e.length;r++){const o=r*4,a=e[r];t[o]=a.r,t[o+1]=a.g,t[o+2]=a.b||0}else for(let r=0;r<e.length;r++){const o=r*4,a=e[r];t[o]=a.x,t[o+1]=a.y,t[o+2]=a.z||0,t[o+3]=a.w||0}}setup(e){const t=this.array.length;return this._elementType=this.elementType===null?as(this.array[0]):this.elementType,this._elementLength=e.getTypeLength(this._elementType),this.value=new Float32Array(t*4),this.bufferCount=t,super.setup(e)}element(e){return de(new O1(this,de(e)))}}const ql=(s,e)=>de(new l0(s,e));K("UniformsNode",l0);class F1 extends Gr{constructor(e,t){super(e,t),this.referenceNode=e,this.isReferenceElementNode=!0}getNodeType(){return this.referenceNode.uniformType}generate(e){const t=super.generate(e),n=this.referenceNode.getNodeType(),i=this.getNodeType();return e.format(t,n,i)}}class Yr extends Ae{constructor(e,t,n=null,i=null){super(),this.property=e,this.uniformType=t,this.object=n,this.count=i,this.properties=e.split("."),this.reference=null,this.node=null,this.updateType=gt.OBJECT}element(e){return de(new F1(this,de(e)))}setNodeType(e){let t=null;this.count!==null?t=Lu(null,e,this.count):Array.isArray(this.getValueFromReference())?t=ql(null,e):e==="texture"?t=Fn(null):t=yt(null,e),this.node=t}getNodeType(e){return this.node.getNodeType(e)}getValueFromReference(e=this.reference){const{properties:t}=this;let n=e[t[0]];for(let i=1;i<t.length;i++)n=n[t[i]];return n}updateReference(e){return this.reference=this.object!==null?this.object:e.object,this.reference}setup(){return this.updateValue(),this.node}update(){this.updateValue()}updateValue(){this.node===null&&this.setNodeType(this.uniformType);const e=this.getValueFromReference();Array.isArray(e)?this.node.array=e:this.node.value=e}}const di=(s,e,t)=>de(new Yr(s,e,t)),V1=(s,e,t,n)=>de(new Yr(s,e,n,t));K("ReferenceNode",Yr);class u0 extends Yr{constructor(e,t,n=null){super(e,t,n),this.material=n}updateReference(e){return this.reference=this.material!==null?this.material:e.material,this.reference}}const B1=(s,e,t)=>de(new u0(s,e,t));K("MaterialReferenceNode",u0);class Ue extends Ae{constructor(e=Ue.VIEW_MATRIX,t=null){super(),this.scope=e,this.object3d=t,this.updateType=gt.OBJECT,this._uniformNode=new Bs(null)}getNodeType(){const e=this.scope;if(e===Ue.WORLD_MATRIX||e===Ue.VIEW_MATRIX)return"mat4";if(e===Ue.NORMAL_MATRIX)return"mat3";if(e===Ue.POSITION||e===Ue.VIEW_POSITION||e===Ue.DIRECTION||e===Ue.SCALE)return"vec3"}update(e){const t=this.object3d,n=this._uniformNode,i=this.scope;if(i===Ue.VIEW_MATRIX)n.value=t.modelViewMatrix;else if(i===Ue.NORMAL_MATRIX)n.value=t.normalMatrix;else if(i===Ue.WORLD_MATRIX)n.value=t.matrixWorld;else if(i===Ue.POSITION)n.value=n.value||new L,n.value.setFromMatrixPosition(t.matrixWorld);else if(i===Ue.SCALE)n.value=n.value||new L,n.value.setFromMatrixScale(t.matrixWorld);else if(i===Ue.DIRECTION)n.value=n.value||new L,t.getWorldDirection(n.value);else if(i===Ue.VIEW_POSITION){const r=e.camera;n.value=n.value||new L,n.value.setFromMatrixPosition(t.matrixWorld),n.value.applyMatrix4(r.matrixWorldInverse)}}generate(e){const t=this.scope;return t===Ue.WORLD_MATRIX||t===Ue.VIEW_MATRIX?this._uniformNode.nodeType="mat4":t===Ue.NORMAL_MATRIX?this._uniformNode.nodeType="mat3":(t===Ue.POSITION||t===Ue.VIEW_POSITION||t===Ue.DIRECTION||t===Ue.SCALE)&&(this._uniformNode.nodeType="vec3"),this._uniformNode.build(e)}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Ue.VIEW_MATRIX="viewMatrix";Ue.NORMAL_MATRIX="normalMatrix";Ue.WORLD_MATRIX="worldMatrix";Ue.POSITION="position";Ue.SCALE="scale";Ue.VIEW_POSITION="viewPosition";Ue.DIRECTION="direction";B(Ue,Ue.DIRECTION);B(Ue,Ue.VIEW_MATRIX);B(Ue,Ue.NORMAL_MATRIX);B(Ue,Ue.WORLD_MATRIX);const Yl=B(Ue,Ue.POSITION);B(Ue,Ue.SCALE);const h0=B(Ue,Ue.VIEW_POSITION);K("Object3DNode",Ue);class Ge extends Ue{constructor(e=Ge.POSITION){super(e),this.updateType=gt.RENDER}getNodeType(e){const t=this.scope;return t===Ge.PROJECTION_MATRIX||t===Ge.PROJECTION_MATRIX_INVERSE?"mat4":t===Ge.NEAR||t===Ge.FAR||t===Ge.LOG_DEPTH?"float":super.getNodeType(e)}update(e){const t=e.camera,n=this._uniformNode,i=this.scope;i===Ge.VIEW_MATRIX?n.value=t.matrixWorldInverse:i===Ge.PROJECTION_MATRIX?n.value=t.projectionMatrix:i===Ge.PROJECTION_MATRIX_INVERSE?n.value=t.projectionMatrixInverse:i===Ge.NEAR?n.value=t.near:i===Ge.FAR?n.value=t.far:i===Ge.LOG_DEPTH?n.value=2/(Math.log(t.far+1)/Math.LN2):(this.object3d=t,super.update(e))}generate(e){const t=this.scope;return t===Ge.PROJECTION_MATRIX||t===Ge.PROJECTION_MATRIX_INVERSE?this._uniformNode.nodeType="mat4":(t===Ge.NEAR||t===Ge.FAR||t===Ge.LOG_DEPTH)&&(this._uniformNode.nodeType="float"),super.generate(e)}}Ge.PROJECTION_MATRIX="projectionMatrix";Ge.PROJECTION_MATRIX_INVERSE="projectionMatrixInverse";Ge.NEAR="near";Ge.FAR="far";Ge.LOG_DEPTH="logDepth";const Bi=ne(Ge,Ge.PROJECTION_MATRIX);ne(Ge,Ge.PROJECTION_MATRIX_INVERSE);const fl=ne(Ge,Ge.NEAR),pl=ne(Ge,Ge.FAR),z1=ne(Ge,Ge.LOG_DEPTH),ms=ne(Ge,Ge.VIEW_MATRIX);ne(Ge,Ge.NORMAL_MATRIX);ne(Ge,Ge.WORLD_MATRIX);ne(Ge,Ge.POSITION);K("CameraNode",Ge);class cn extends Ue{constructor(e=cn.VIEW_MATRIX){super(e)}update(e){this.object3d=e.object,super.update(e)}}ne(cn,cn.DIRECTION);const Fs=ne(cn,cn.VIEW_MATRIX).label("modelViewMatrix").temp("ModelViewMatrix"),d0=ne(cn,cn.NORMAL_MATRIX),Oa=ne(cn,cn.WORLD_MATRIX);ne(cn,cn.POSITION);ne(cn,cn.SCALE);ne(cn,cn.VIEW_POSITION);K("ModelNode",cn);class qt extends Ae{constructor(e=qt.LOCAL){super("vec3"),this.scope=e}isGlobal(){return!0}getHash(){return`normal-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===qt.GEOMETRY)e.hasGeometryAttribute("normal")===!1?n=F(0,1,0):n=mn("normal","vec3");else if(t===qt.LOCAL)n=It(Fa);else if(t===qt.VIEW){const i=d0.mul(fi);n=Bn(It(i))}else if(t===qt.WORLD){const i=hs.transformDirection(ms);n=Bn(It(i))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}qt.GEOMETRY="geometry";qt.LOCAL="local";qt.VIEW="view";qt.WORLD="world";const Fa=ne(qt,qt.GEOMETRY),fi=ne(qt,qt.LOCAL).temp("Normal"),hs=ne(qt,qt.VIEW),f0=ne(qt,qt.WORLD),Ot=rn("vec3","TransformedNormalView"),k1=Ot.transformDirection(ms).normalize(),fr=rn("vec3","TransformedClearcoatNormalView");K("NormalNode",qt);const $d=new Map;class ie extends Ae{constructor(e){super(),this.scope=e}getCache(e,t){let n=$d.get(e);return n===void 0&&(n=B1(e,t),$d.set(e,n)),n}getFloat(e){return this.getCache(e,"float")}getColor(e){return this.getCache(e,"color")}getTexture(e){return this.getCache(e==="map"?"map":e+"Map","texture")}setup(e){const t=e.context.material,n=this.scope;let i=null;if(n===ie.COLOR){const r=this.getColor(n);t.map&&t.map.isTexture===!0?i=r.mul(this.getTexture("map")):i=r}else if(n===ie.OPACITY){const r=this.getFloat(n);t.alphaMap&&t.alphaMap.isTexture===!0?i=r.mul(this.getTexture("alpha")):i=r}else if(n===ie.SPECULAR_STRENGTH)t.specularMap&&t.specularMap.isTexture===!0?i=this.getTexture(n).r:i=w(1);else if(n===ie.ROUGHNESS){const r=this.getFloat(n);t.roughnessMap&&t.roughnessMap.isTexture===!0?i=r.mul(this.getTexture(n).g):i=r}else if(n===ie.METALNESS){const r=this.getFloat(n);t.metalnessMap&&t.metalnessMap.isTexture===!0?i=r.mul(this.getTexture(n).b):i=r}else if(n===ie.EMISSIVE){const r=this.getColor(n);t.emissiveMap&&t.emissiveMap.isTexture===!0?i=r.mul(this.getTexture(n)):i=r}else if(n===ie.NORMAL)t.normalMap?i=this.getTexture("normal").normalMap(this.getCache("normalScale","vec2")):t.bumpMap?i=this.getTexture("bump").r.bumpMap(this.getFloat("bumpScale")):i=hs;else if(n===ie.CLEARCOAT){const r=this.getFloat(n);t.clearcoatMap&&t.clearcoatMap.isTexture===!0?i=r.mul(this.getTexture(n).r):i=r}else if(n===ie.CLEARCOAT_ROUGHNESS){const r=this.getFloat(n);t.clearcoatRoughnessMap&&t.clearcoatRoughnessMap.isTexture===!0?i=r.mul(this.getTexture(n).r):i=r}else if(n===ie.CLEARCOAT_NORMAL)t.clearcoatNormalMap?i=this.getTexture(n).normalMap(this.getCache(n+"Scale","vec2")):i=hs;else if(n===ie.SHEEN){const r=this.getColor("sheenColor").mul(this.getFloat("sheen"));t.sheenColorMap&&t.sheenColorMap.isTexture===!0?i=r.mul(this.getTexture("sheenColor").rgb):i=r}else if(n===ie.SHEEN_ROUGHNESS){const r=this.getFloat(n);t.sheenRoughnessMap&&t.sheenRoughnessMap.isTexture===!0?i=r.mul(this.getTexture(n).a):i=r,i=i.clamp(.07,1)}else if(n===ie.IRIDESCENCE_THICKNESS){const r=di("1","float",t.iridescenceThicknessRange);if(t.iridescenceThicknessMap){const o=di("0","float",t.iridescenceThicknessRange);i=r.sub(o).mul(this.getTexture(n).g).add(o)}else i=r}else{const r=this.getNodeType(e);i=this.getCache(n,r)}return i}}ie.ALPHA_TEST="alphaTest";ie.COLOR="color";ie.OPACITY="opacity";ie.SHININESS="shininess";ie.SPECULAR_COLOR="specular";ie.SPECULAR_STRENGTH="specularStrength";ie.REFLECTIVITY="reflectivity";ie.ROUGHNESS="roughness";ie.METALNESS="metalness";ie.NORMAL="normal";ie.CLEARCOAT="clearcoat";ie.CLEARCOAT_ROUGHNESS="clearcoatRoughness";ie.CLEARCOAT_NORMAL="clearcoatNormal";ie.EMISSIVE="emissive";ie.ROTATION="rotation";ie.SHEEN="sheen";ie.SHEEN_ROUGHNESS="sheenRoughness";ie.IRIDESCENCE="iridescence";ie.IRIDESCENCE_IOR="iridescenceIOR";ie.IRIDESCENCE_THICKNESS="iridescenceThickness";ie.LINE_SCALE="scale";ie.LINE_DASH_SIZE="dashSize";ie.LINE_GAP_SIZE="gapSize";ie.LINE_WIDTH="linewidth";ie.LINE_DASH_OFFSET="dashOffset";ie.POINT_WIDTH="pointWidth";const H1=ne(ie,ie.ALPHA_TEST),bo=ne(ie,ie.COLOR),G1=ne(ie,ie.SHININESS),W1=ne(ie,ie.EMISSIVE),p0=ne(ie,ie.OPACITY),X1=ne(ie,ie.SPECULAR_COLOR),q1=ne(ie,ie.SPECULAR_STRENGTH);ne(ie,ie.REFLECTIVITY);const Y1=ne(ie,ie.ROUGHNESS),j1=ne(ie,ie.METALNESS),K1=ne(ie,ie.NORMAL),$1=ne(ie,ie.CLEARCOAT),Z1=ne(ie,ie.CLEARCOAT_ROUGHNESS),J1=ne(ie,ie.CLEARCOAT_NORMAL),Q1=ne(ie,ie.ROTATION),ew=ne(ie,ie.SHEEN),tw=ne(ie,ie.SHEEN_ROUGHNESS),nw=ne(ie,ie.IRIDESCENCE),iw=ne(ie,ie.IRIDESCENCE_IOR),sw=ne(ie,ie.IRIDESCENCE_THICKNESS),jl=ne(ie,ie.LINE_SCALE),m0=ne(ie,ie.LINE_DASH_SIZE),g0=ne(ie,ie.LINE_GAP_SIZE),ml=ne(ie,ie.LINE_WIDTH),Zd=ne(ie,ie.LINE_DASH_OFFSET),rw=ne(ie,ie.POINT_WIDTH);K("MaterialNode",ie);class mt extends Ae{constructor(e=mt.LOCAL){super("vec3"),this.scope=e}isGlobal(){return!0}getHash(){return`position-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===mt.GEOMETRY)n=mn("position","vec3");else if(t===mt.LOCAL)n=It(Tn);else if(t===mt.WORLD){const i=Oa.mul(gn);n=It(i)}else if(t===mt.VIEW){const i=Fs.mul(gn);n=It(i)}else if(t===mt.VIEW_DIRECTION){const i=Un.negate();n=Bn(It(i))}else if(t===mt.WORLD_DIRECTION){const i=gn.transformDirection(Oa);n=Bn(It(i))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}mt.GEOMETRY="geometry";mt.LOCAL="local";mt.WORLD="world";mt.WORLD_DIRECTION="worldDirection";mt.VIEW="view";mt.VIEW_DIRECTION="viewDirection";const Tn=ne(mt,mt.GEOMETRY),gn=ne(mt,mt.LOCAL).temp("Position"),ow=ne(mt,mt.WORLD),aw=ne(mt,mt.WORLD_DIRECTION),Un=ne(mt,mt.VIEW),kt=ne(mt,mt.VIEW_DIRECTION);K("PositionNode",mt);class _0 extends _t{constructor(e=null){super("vec4"),this.positionNode=e}setup(e){if(e.shaderStage==="fragment")return It(e.context.mvp);const t=this.positionNode||gn;return Bi.mul(Fs).mul(t)}}const Jd=B(_0);K("ModelViewProjectionNode",_0);class x0 extends rc{constructor(e,t=null,n=0,i=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferStride=n,this.bufferOffset=i,this.usage=Ra,this.instanced=!1,this.attribute=null,e&&e.isBufferAttribute===!0&&(this.attribute=e,this.usage=e.usage,this.instanced=e.isInstancedBufferAttribute)}getNodeType(e){return this.bufferType===null&&(this.bufferType=e.getTypeFromAttribute(this.attribute)),this.bufferType}setup(e){if(this.attribute!==null)return;const t=this.getNodeType(e),n=this.value,i=e.getTypeLength(t),r=this.bufferStride||i,o=this.bufferOffset,a=n.isInterleavedBuffer===!0?n:new Ja(n,r),c=new Lr(a,i,o);a.setUsage(this.usage),this.attribute=c,this.attribute.isInstancedBufferAttribute=this.instanced}generate(e){const t=this.getNodeType(e),n=e.getBufferAttributeFromNode(this,t),i=e.getPropertyName(n);let r=null;return e.shaderStage==="vertex"||e.shaderStage==="compute"?(this.name=i,r=i):r=It(this).build(e,t),r}getInputType(){return"bufferAttribute"}setUsage(e){return this.usage=e,this}setInstanced(e){return this.instanced=e,this}}const fc=(s,e,t,n)=>de(new x0(s,e,t,n)),cw=(s,e,t,n)=>fc(s,e,t,n).setUsage(Ul),Qd=(s,e,t,n)=>fc(s,e,t,n).setInstanced(!0),ef=(s,e,t,n)=>cw(s,e,t,n).setInstanced(!0);D("toAttribute",s=>fc(s.value));K("BufferAttributeNode",x0);class v0 extends Ae{constructor(e){super("void"),this.instanceMesh=e,this.instanceMatrixNode=null,this.instanceColorNode=null}setup(){let e=this.instanceMatrixNode;const t=this.instanceMesh;if(e===null){const c=t.instanceMatrix,l=new DS(c.array,16,1),u=c.usage===Ul?ef:Qd,h=[u(l,"vec4",16,0),u(l,"vec4",16,4),u(l,"vec4",16,8),u(l,"vec4",16,12)];e=vr(...h),this.instanceMatrixNode=e}const n=t.instanceColor;if(n&&this.instanceColorNode===null){const c=new Ca(n.array,3),l=n.usage===Ul?ef:Qd;this.instanceColorNode=F(l(c,"vec3",3,0))}const i=e.mul(gn).xyz,r=hi(e[0].xyz,e[1].xyz,e[2].xyz),o=fi.div(F(r[0].dot(r[0]),r[1].dot(r[1]),r[2].dot(r[2]))),a=r.mul(o).xyz;gn.assign(i),fi.assign(a),this.instanceColorNode!==null&&xi("vec3","vInstanceColor").assign(this.instanceColorNode)}}const lw=B(v0);K("InstanceNode",v0);class Ht extends Ae{constructor(e=Ht.LOCAL){super(),this.scope=e}getHash(){return`tangent-${this.scope}`}getNodeType(){return this.scope===Ht.GEOMETRY?"vec4":"vec3"}generate(e){const t=this.scope;let n=null;if(t===Ht.GEOMETRY)n=mn("tangent","vec4"),e.geometry.hasAttribute("tangent")===!1&&e.geometry.computeTangents();else if(t===Ht.LOCAL)n=It(Va.xyz);else if(t===Ht.VIEW){const i=Fs.mul(Te(pc,0)).xyz;n=Bn(It(i))}else if(t===Ht.WORLD){const i=mc.transformDirection(ms);n=Bn(It(i))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Ht.GEOMETRY="geometry";Ht.LOCAL="local";Ht.VIEW="view";Ht.WORLD="world";const Va=ne(Ht,Ht.GEOMETRY),pc=ne(Ht,Ht.LOCAL),mc=ne(Ht,Ht.VIEW),uw=ne(Ht,Ht.WORLD),y0=Ao(mc,"TransformedTangentView");Bn(y0.transformDirection(ms));K("TangentNode",Ht);class M0 extends Ae{constructor(e){super("void"),this.batchMesh=e,this.instanceColorNode=null,this.batchingIdNode=null}setup(e){this.batchingIdNode===null&&(this.batchingIdNode=mn("batchId"));const t=this.batchMesh._matricesTexture,n=bu(Cs(t),0),i=w(C(this.batchingIdNode)).mul(4).toVar(),r=C(i.mod(n)),o=C(i).div(C(n)),a=vr(Cs(t,Is(r,o)),Cs(t,Is(r.add(1),o)),Cs(t,Is(r.add(2),o)),Cs(t,Is(r.add(3),o))),c=hi(a[0].xyz,a[1].xyz,a[2].xyz);gn.assign(a.mul(gn));const l=fi.div(F(c[0].dot(c[0]),c[1].dot(c[1]),c[2].dot(c[2]))),u=c.mul(l).xyz;fi.assign(u),e.hasGeometryAttribute("tangent")&&pc.mulAssign(c)}}const hw=B(M0);K("batch",M0);class T0 extends Ae{constructor(e,t=!1){super("void"),this.skinnedMesh=e,this.useReference=t,this.updateType=gt.OBJECT,this.skinIndexNode=mn("skinIndex","uvec4"),this.skinWeightNode=mn("skinWeight","vec4");let n,i,r;t?(n=di("bindMatrix","mat4"),i=di("bindMatrixInverse","mat4"),r=V1("skeleton.boneMatrices","mat4",e.skeleton.bones.length)):(n=yt(e.bindMatrix,"mat4"),i=yt(e.bindMatrixInverse,"mat4"),r=Lu(e.skeleton.boneMatrices,"mat4",e.skeleton.bones.length)),this.bindMatrixNode=n,this.bindMatrixInverseNode=i,this.boneMatricesNode=r}setup(e){const{skinIndexNode:t,skinWeightNode:n,bindMatrixNode:i,bindMatrixInverseNode:r,boneMatricesNode:o}=this,a=o.element(t.x),c=o.element(t.y),l=o.element(t.z),u=o.element(t.w),h=i.mul(gn),d=Vn(a.mul(n.x).mul(h),c.mul(n.y).mul(h),l.mul(n.z).mul(h),u.mul(n.w).mul(h)),f=r.mul(d).xyz;let g=Vn(n.x.mul(a),n.y.mul(c),n.z.mul(l),n.w.mul(u));g=r.mul(g).mul(i);const _=g.transformDirection(fi).xyz;gn.assign(f),fi.assign(_),e.hasGeometryAttribute("tangent")&&pc.assign(_)}generate(e,t){if(t!=="void")return gn.build(e,t)}update(e){(this.useReference?e.object:this.skinnedMesh).skeleton.update()}}const dw=s=>de(new T0(s,!0));K("SkinningNode",T0);class S0 extends Ae{constructor(e=[]){super(),this.params=e}getVarName(e){return String.fromCharCode(105+e)}getProperties(e){const t=e.getNodeProperties(this);if(t.stackNode!==void 0)return t;const n={};for(let i=0,r=this.params.length-1;i<r;i++){const o=this.params[i],a=o.isNode!==!0&&o.name||this.getVarName(i),c=o.isNode!==!0&&o.type||"int";n[a]=hc(a,c)}return t.returnsNode=this.params[this.params.length-1](n,e.addStack(),e),t.stackNode=e.removeStack(),t}getNodeType(e){const{returnsNode:t}=this.getProperties(e);return t?t.getNodeType(e):"void"}setup(e){this.getProperties(e)}generate(e){const t=this.getProperties(e),n={tempWrite:!1},i=this.params,r=t.stackNode;for(let c=0,l=i.length-1;c<l;c++){const u=i[c];let h=null,d=null,f=null,g=null,_=null,m=null;u.isNode?(g="int",f=this.getVarName(c),h="0",d=u.build(e,g),_="<"):(g=u.type||"int",f=u.name||this.getVarName(c),h=u.start,d=u.end,_=u.condition,m=u.update,typeof h=="number"?h=h.toString():h&&h.isNode&&(h=h.build(e,g)),typeof d=="number"?d=d.toString():d&&d.isNode&&(d=d.build(e,g)),h!==void 0&&d===void 0?(h=h+" - 1",d="0",_=">="):d!==void 0&&h===void 0&&(h="0",_="<"),_===void 0&&(Number(h)>Number(d)?_=">=":_="<"));const p={start:h,end:d,condition:_},S=p.start,x=p.end;let E="",P="",R="";m||(g==="int"||g==="uint"?_.includes("<")?m="++":m="--":_.includes("<")?m="+= 1.":m="-= 1."),E+=e.getVar(g,f)+" = "+S,P+=f+" "+_+" "+x,R+=f+" "+m;const N=`for ( ${E}; ${P}; ${R} )`;e.addFlowCode((c===0?`
`:"")+e.tab+N+` {

`).addFlowTab()}const o=ki(r,n).build(e,"void"),a=t.returnsNode?t.returnsNode.build(e):"";e.removeFlowTab().addFlowCode(`
`+e.tab+o);for(let c=0,l=this.params.length-1;c<l;c++)e.addFlowCode((c===0?"":e.tab)+`}

`).removeFlowTab();return e.addFlowTab(),a}}const Mt=(...s)=>de(new S0(xr(s,"int"))).append(),fw=()=>hc("break").append();D("loop",(s,...e)=>Gp(s,Mt(...e)));K("LoopNode",S0);const gl=new WeakMap,Pn=new tt,tf=Y(({bufferMap:s,influence:e,stride:t,width:n,depth:i,offset:r})=>{const o=C(EA).mul(t).add(r),a=o.div(n),c=o.sub(a.mul(n));return Cs(s,Is(c,a)).depth(i).mul(e)});function pw(s){const e=s.morphAttributes.position!==void 0,t=s.morphAttributes.normal!==void 0,n=s.morphAttributes.color!==void 0,i=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,r=i!==void 0?i.length:0;let o=gl.get(s);if(o===void 0||o.count!==r){let S=function(){m.dispose(),gl.delete(s),s.removeEventListener("dispose",S)};var a=S;o!==void 0&&o.texture.dispose();const c=s.morphAttributes.position||[],l=s.morphAttributes.normal||[],u=s.morphAttributes.color||[];let h=0;e===!0&&(h=1),t===!0&&(h=2),n===!0&&(h=3);let d=s.attributes.position.count*h,f=1;const g=4096;d>g&&(f=Math.ceil(d/g),d=g);const _=new Float32Array(d*f*4*r),m=new au(_,d,f,r);m.type=ri,m.needsUpdate=!0;const p=h*4;for(let x=0;x<r;x++){const E=c[x],P=l[x],R=u[x],N=d*f*4*x;for(let V=0;V<E.count;V++){const T=V*p;e===!0&&(Pn.fromBufferAttribute(E,V),_[N+T+0]=Pn.x,_[N+T+1]=Pn.y,_[N+T+2]=Pn.z,_[N+T+3]=0),t===!0&&(Pn.fromBufferAttribute(P,V),_[N+T+4]=Pn.x,_[N+T+5]=Pn.y,_[N+T+6]=Pn.z,_[N+T+7]=0),n===!0&&(Pn.fromBufferAttribute(R,V),_[N+T+8]=Pn.x,_[N+T+9]=Pn.y,_[N+T+10]=Pn.z,_[N+T+11]=R.itemSize===4?Pn.w:1)}}o={count:r,texture:m,stride:h,size:new xe(d,f)},gl.set(s,o),s.addEventListener("dispose",S)}return o}class E0 extends Ae{constructor(e){super("void"),this.mesh=e,this.morphBaseInfluence=yt(1),this.updateType=gt.OBJECT}setup(e){const{geometry:t}=e,n=t.morphAttributes.position!==void 0,i=t.morphAttributes.normal!==void 0,r=t.morphAttributes.position||t.morphAttributes.normal||t.morphAttributes.color,o=r!==void 0?r.length:0,{texture:a,stride:c,size:l}=pw(t);n===!0&&gn.mulAssign(this.morphBaseInfluence),i===!0&&fi.mulAssign(this.morphBaseInfluence);const u=C(l.width);Mt(o,({i:h})=>{const d=w(0).toVar();this.mesh.isInstancedMesh===!0&&this.mesh.morphTexture!==null&&this.mesh.morphTexture!==void 0?d.assign(Cs(this.mesh.morphTexture,Is(C(h).add(1),C(Xp))).r):d.assign(di("morphTargetInfluences","float").element(h).toVar()),n===!0&&gn.addAssign(tf({bufferMap:a,influence:d,stride:c,width:u,depth:h,offset:C(0)})),i===!0&&fi.addAssign(tf({bufferMap:a,influence:d,stride:c,width:u,depth:h,offset:C(1)}))})}update(){const e=this.morphBaseInfluence;this.mesh.geometry.morphTargetsRelative?e.value=1:e.value=1-this.mesh.morphTargetInfluences.reduce((t,n)=>t+n,0)}}const mw=B(E0);K("MorphNode",E0);class A0 extends Ae{constructor(){super("vec3")}getHash(){return"reflectVector"}setup(){return kt.negate().reflect(Ot).transformDirection(ms)}}const gw=ne(A0);K("ReflectVectorNode",A0);class w0 extends qr{constructor(e,t=null,n=null){super(e,t,n),this.isCubeTextureNode=!0}getInputType(){return"cubeTexture"}getDefaultUV(){return gw}setUpdateMatrix(){}setupUV(e,t){const n=this.value;return e.renderer.coordinateSystem===br||!n.isRenderTargetTexture?F(t.x.negate(),t.yz):t}generateUV(e,t){return t.build(e,"vec3")}}const N0=B(w0);D("cubeTexture",N0);K("CubeTextureNode",w0);class gc extends Ae{constructor(){super("vec3")}generate(){console.warn("Abstract function.")}}K("LightingNode",gc);let ho=null;class ks extends gc{constructor(e=null){super(),this.updateType=gt.FRAME,this.light=e,this.rtt=null,this.shadowNode=null,this.color=new ve,this._defaultColorNode=yt(this.color),this.colorNode=this._defaultColorNode,this.isAnalyticLightNode=!0}getCacheKey(){return super.getCacheKey()+"-"+(this.light.id+"-"+(this.light.castShadow?"1":"0"))}getHash(){return this.light.uuid}setupShadow(e){let t=this.shadowNode;if(t===null){ho===null&&(ho=e.createNodeMaterial(),ho.fragmentNode=Te(0,0,0,1),ho.isShadowNodeMaterial=!0);const n=this.light.shadow,i=e.createRenderTarget(n.mapSize.width,n.mapSize.height),r=new Do;r.minFilter=Kt,r.magFilter=Kt,r.image.width=n.mapSize.width,r.image.height=n.mapSize.height,r.compareFunction=zf,i.depthTexture=r,n.camera.updateProjectionMatrix();const o=di("bias","float",n),a=di("normalBias","float",n);let c=yt(n.matrix).mul(ow.add(f0.mul(a)));c=c.xyz.div(c.w);const l=c.x.greaterThanEqual(0).and(c.x.lessThanEqual(1)).and(c.y.greaterThanEqual(0)).and(c.y.lessThanEqual(1)).and(c.z.lessThanEqual(1));let u=c.z.add(o);e.renderer.coordinateSystem===br&&(u=u.mul(2).sub(1)),c=F(c.x,c.y.oneMinus(),u),t=((f,g,_)=>Fn(f,g).compare(_))(r,c.xy,c.z);const d=Fn(i.texture,c);this.rtt=i,this.colorNode=this.colorNode.mul(l.mix(1,t.mix(d.a.mix(1,d),1))),this.shadowNode=t,this.updateBeforeType=gt.RENDER}}setup(e){this.light.castShadow?this.setupShadow(e):this.shadowNode!==null&&this.disposeShadow()}updateShadow(e){const{rtt:t,light:n}=this,{renderer:i,scene:r}=e,o=r.overrideMaterial;r.overrideMaterial=ho,t.setSize(n.shadow.mapSize.width,n.shadow.mapSize.height),n.shadow.updateMatrices(n);const a=i.getRenderTarget(),c=i.getRenderObjectFunction();i.setRenderObjectFunction((l,...u)=>{l.castShadow===!0&&i.renderObject(l,...u)}),i.setRenderTarget(t),i.render(r,n.shadow.camera),i.setRenderTarget(a),i.setRenderObjectFunction(c),r.overrideMaterial=o}disposeShadow(){this.rtt.dispose(),this.shadowNode=null,this.rtt=null,this.colorNode=this._defaultColorNode}updateBefore(e){const{light:t}=this;t.castShadow&&this.updateShadow(e)}update(){const{light:e}=this;this.color.copy(e.color).multiplyScalar(e.intensity)}}K("AnalyticLightNode",ks);const Ba=new WeakMap,_w=s=>s.sort((e,t)=>e.id-t.id);class xw extends Ae{constructor(e=[]){super("vec3"),this.totalDiffuseNode=F().temp("totalDiffuse"),this.totalSpecularNode=F().temp("totalSpecular"),this.outgoingLightNode=F().temp("outgoingLight"),this.lightNodes=e,this._hash=null}get hasLight(){return this.lightNodes.length>0}getHash(){if(this._hash===null){const e=[];for(const t of this.lightNodes)e.push(t.getHash());this._hash="lights-"+e.join(",")}return this._hash}setup(e){const t=e.context,n=t.lightingModel;let i=this.outgoingLightNode;if(n){const{lightNodes:r,totalDiffuseNode:o,totalSpecularNode:a}=this;t.outgoingLight=i;const c=e.addStack();n.start(t,c,e);for(const m of r)m.build(e);n.indirectDiffuse(t,c,e),n.indirectSpecular(t,c,e),n.ambientOcclusion(t,c,e);const{backdrop:l,backdropAlpha:u}=t,{directDiffuse:h,directSpecular:d,indirectDiffuse:f,indirectSpecular:g}=t.reflectedLight;let _=h.add(f);l!==null&&(_=F(u!==null?u.mix(_,l):l)),o.assign(_),a.assign(d.add(g)),i.assign(o.add(a)),n.finish(t,c,e),i=i.bypass(e.removeStack())}return i}_getLightNodeById(e){for(const t of this.lightNodes)if(t.isAnalyticLightNode&&t.light.id===e)return t;return null}fromLights(e=[]){const t=[];e=_w(e);for(const n of e){let i=this._getLightNodeById(n.id);if(i===null){const r=n.constructor,o=Ba.has(r)?Ba.get(r):ks;i=de(new o(n))}t.push(i)}return this.lightNodes=t,this._hash=null,this}}const vw=B(xw);function jr(s,e){if(Ba.has(s)){console.warn(`Redefinition of light node ${e.type}`);return}if(typeof s!="function")throw new Error(`Light ${s.name} is not a class`);if(typeof e!="function"||!e.type)throw new Error(`Light node ${e.type} is not a class`);Ba.set(s,e)}class b0 extends gc{constructor(e=null){super(),this.aoNode=e}setup(e){const n=this.aoNode.x.sub(1).mul(1).add(1);e.context.ambientOcclusion.mulAssign(n)}}K("AONode",b0);class R0 extends Su{constructor(e,t=null,n=null,i=null){super(e),this.lightingModel=t,this.backdropNode=n,this.backdropAlphaNode=i,this._context=null}getContext(){const{backdropNode:e,backdropAlphaNode:t}=this,n=F().temp("directDiffuse"),i=F().temp("directSpecular"),r=F().temp("indirectDiffuse"),o=F().temp("indirectSpecular"),a={directDiffuse:n,directSpecular:i,indirectDiffuse:r,indirectSpecular:o};return{radiance:F().temp("radiance"),irradiance:F().temp("irradiance"),iblIrradiance:F().temp("iblIrradiance"),ambientOcclusion:w(1).temp("ambientOcclusion"),reflectedLight:a,backdrop:e,backdropAlpha:t}}setup(e){return this.context=this._context||(this._context=this.getContext()),this.context.lightingModel=this.lightingModel||e.context.lightingModel,super.setup(e)}}const C0=B(R0);D("lightingContext",C0);K("LightingContextNode",R0);class Iu extends Ae{constructor(e,t,n=null){super(),this.condNode=e,this.ifNode=t,this.elseNode=n}getNodeType(e){const t=this.ifNode.getNodeType(e);if(this.elseNode!==null){const n=this.elseNode.getNodeType(e);if(e.getTypeLength(n)>e.getTypeLength(t))return n}return t}generate(e,t){const n=this.getNodeType(e),i={tempWrite:!1},r=e.getDataFromNode(this);if(r.nodeProperty!==void 0)return r.nodeProperty;const{ifNode:o,elseNode:a}=this,c=t!=="void",l=c?rn(n).build(e):"";r.nodeProperty=l;const u=ki(this.condNode).build(e,"bool");e.addFlowCode(`
${e.tab}if ( ${u} ) {

`).addFlowTab();let h=ki(o,i).build(e,n);if(h&&(c?h=l+" = "+h+";":h="return "+h+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+h+`

`+e.tab+"}"),a!==null){e.addFlowCode(` else {

`).addFlowTab();let d=ki(a,i).build(e,n);d&&(c?d=l+" = "+d+";":d="return "+d+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+d+`

`+e.tab+`}

`)}else e.addFlowCode(`

`);return e.format(l,n,t)}}const On=B(Iu);D("cond",On);K("CondNode",Iu);const nf=w(1),Kl=w(-2),xa=w(.8),_l=w(-1),va=w(.4),xl=w(2),ya=w(.305),vl=w(3),sf=w(.21),yw=w(4),rf=w(4),Mw=w(16),Tw=Y(([s])=>{const e=F(zt(s)).toVar(),t=w(-1).toVar();return Qe(e.x.greaterThan(e.z),()=>{Qe(e.x.greaterThan(e.y),()=>{t.assign(On(s.x.greaterThan(0),0,3))}).else(()=>{t.assign(On(s.y.greaterThan(0),1,4))})}).else(()=>{Qe(e.z.greaterThan(e.y),()=>{t.assign(On(s.z.greaterThan(0),2,5))}).else(()=>{t.assign(On(s.y.greaterThan(0),1,4))})}),t}).setLayout({name:"getFace",type:"float",inputs:[{name:"direction",type:"vec3"}]}),Sw=Y(([s,e])=>{const t=Le().toVar();return Qe(e.equal(0),()=>{t.assign(Le(s.z,s.y).div(zt(s.x)))}).elseif(e.equal(1),()=>{t.assign(Le(s.x.negate(),s.z.negate()).div(zt(s.y)))}).elseif(e.equal(2),()=>{t.assign(Le(s.x.negate(),s.y).div(zt(s.z)))}).elseif(e.equal(3),()=>{t.assign(Le(s.z.negate(),s.y).div(zt(s.x)))}).elseif(e.equal(4),()=>{t.assign(Le(s.x.negate(),s.z).div(zt(s.y)))}).else(()=>{t.assign(Le(s.x,s.y).div(zt(s.z)))}),nt(.5,t.add(1))}).setLayout({name:"getUV",type:"vec2",inputs:[{name:"direction",type:"vec3"},{name:"face",type:"float"}]}),Ew=Y(([s])=>{const e=w(0).toVar();return Qe(s.greaterThanEqual(xa),()=>{e.assign(nf.sub(s).mul(_l.sub(Kl)).div(nf.sub(xa)).add(Kl))}).elseif(s.greaterThanEqual(va),()=>{e.assign(xa.sub(s).mul(xl.sub(_l)).div(xa.sub(va)).add(_l))}).elseif(s.greaterThanEqual(ya),()=>{e.assign(va.sub(s).mul(vl.sub(xl)).div(va.sub(ya)).add(xl))}).elseif(s.greaterThanEqual(sf),()=>{e.assign(ya.sub(s).mul(yw.sub(vl)).div(ya.sub(sf)).add(vl))}).else(()=>{e.assign(w(-2).mul(Ru(nt(1.16,s))))}),e}).setLayout({name:"roughnessToMip",type:"float",inputs:[{name:"roughness",type:"float"}]});Y(([s,e])=>{const t=s.toVar();t.assign(nt(2,t).sub(1));const n=F(t,1).toVar();return Qe(e.equal(0),()=>{n.assign(n.zyx)}).elseif(e.equal(1),()=>{n.assign(n.xzy),n.xz.mulAssign(-1)}).elseif(e.equal(2),()=>{n.x.mulAssign(-1)}).elseif(e.equal(3),()=>{n.assign(n.zyx),n.xz.mulAssign(-1)}).elseif(e.equal(4),()=>{n.assign(n.xzy),n.xy.mulAssign(-1)}).elseif(e.equal(5),()=>{n.z.mulAssign(-1)}),n}).setLayout({name:"getDirection",type:"vec3",inputs:[{name:"uv",type:"vec2"},{name:"face",type:"float"}]});const Aw=Y(([s,e,t,n,i,r])=>{const o=w(t),a=F(e),c=No(Ew(o),Kl,r),l=uc(c),u=Wr(c),h=F($l(s,a,u,n,i,r)).toVar();return Qe(l.notEqual(0),()=>{const d=F($l(s,a,u.add(1),n,i,r)).toVar();h.assign(kn(h,d,l))}),h}),$l=Y(([s,e,t,n,i,r])=>{const o=w(t).toVar(),a=F(e),c=w(Tw(a)).toVar(),l=w(zn(rf.sub(o),0)).toVar();o.assign(zn(o,rf));const u=w(Xl(o)).toVar(),h=Le(Sw(a,c).mul(u.sub(2)).add(1)).toVar();return Qe(c.greaterThan(2),()=>{h.y.addAssign(u),c.subAssign(3)}),h.x.addAssign(c.mul(u)),h.x.addAssign(l.mul(nt(3,Mw))),h.y.addAssign(nt(4,Xl(r).sub(u))),h.x.mulAssign(n),h.y.mulAssign(i),s.uv(h)}),yl=Y(({envMap:s,mipInt:e,outputDirection:t,theta:n,axis:i,CUBEUV_TEXEL_WIDTH:r,CUBEUV_TEXEL_HEIGHT:o,CUBEUV_MAX_MIP:a})=>{const c=is(n),l=t.mul(c).add(i.cross(t).mul(Vi(n))).add(i.mul(i.dot(t).mul(c.oneMinus())));return $l(s,l,e,r,o,a)});Y(({n:s,latitudinal:e,poleAxis:t,outputDirection:n,weights:i,samples:r,dTheta:o,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h})=>{const d=F(On(e,t,s0(t,n))).toVar();Qe(t0(d.equals(F(0))),()=>{d.assign(F(n.z,0,n.x.negate()))}),d.assign(Bn(d));const f=F().toVar();return f.addAssign(i.element(C(0)).mul(yl({theta:0,axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h}))),Mt({start:C(1),end:s},({i:g})=>{Qe(g.greaterThanEqual(r),()=>{fw()});const _=w(o.mul(w(g))).toVar();f.addAssign(i.element(g).mul(yl({theta:_.mul(-1),axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h}))),f.addAssign(i.element(g).mul(yl({theta:_,axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h})))}),Te(f,1)});let za=null;const of=new WeakMap;function ww(s){const e=Math.log2(s)-2,t=1/s;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:t,maxMip:e}}function Nw(s){let e=of.get(s);if((e!==void 0?e.pmremVersion:-1)!==s.pmremVersion){if(s.isCubeTexture){if(s.source.data.some(n=>n===void 0))throw new Error("PMREMNode: Undefined texture in CubeTexture. Use onLoad callback or async loader");e=za.fromCubemap(s,e)}else{if(s.image===void 0)throw new Error("PMREMNode: Undefined image in Texture. Use onLoad callback or async loader");e=za.fromEquirectangular(s,e)}e.pmremVersion=s.pmremVersion,of.set(s,e)}return e.texture}class L0 extends _t{constructor(e,t=null,n=null){super("vec3"),this._value=e,this._pmrem=null,this.uvNode=t,this.levelNode=n,this._generator=null,this._texture=Fn(null),this._width=yt(0),this._height=yt(0),this._maxMip=yt(0),this.updateBeforeType=gt.RENDER}set value(e){this._value=e,this._pmrem=null}get value(){return this._value}updateFromTexture(e){const t=ww(e.image.height);this._texture.value=e,this._width.value=t.texelWidth,this._height.value=t.texelHeight,this._maxMip.value=t.maxMip}updateBefore(){let e=this._pmrem;const t=e?e.pmremVersion:-1,n=this._value;t!==n.pmremVersion&&(n.isPMREMTexture===!0?e=n:e=Nw(n),this._pmrem=e,this.updateFromTexture(e))}setup(e){za===null&&(za=e.createPMREMGenerator()),this.updateBefore(e);let t=this.uvNode;t===null&&e.context.getUV&&(t=e.context.getUV(this));const n=this.value;e.renderer.coordinateSystem===Ti&&n.isPMREMTexture!==!0&&n.isRenderTargetTexture===!0&&(t=F(t.x.negate(),t.yz));let i=this.levelNode;return i===null&&e.context.getTextureLevel&&(i=e.context.getTextureLevel(this)),Aw(this._texture,t,i,this._width,this._height,this._maxMip)}}const bw=B(L0);K("PMREMNode",L0);const af=new WeakMap;class I0 extends gc{constructor(e=null){super(),this.envNode=e}setup(e){let t=this.envNode;if(t.isTextureNode){let l=af.get(t.value);l===void 0&&(l=bw(t.value),af.set(t.value,l)),t=l}const i=e.material.envMap?di("envMapIntensity","float",e.material):di("environmentIntensity","float",e.scene),r=ki(t,cf(yo,Ot)).mul(i),o=ki(t,Rw(k1)).mul(Math.PI).mul(i),a=Pa(r);e.context.radiance.addAssign(a),e.context.iblIrradiance.addAssign(o);const c=e.context.lightingModel.clearcoatRadiance;if(c){const l=ki(t,cf(Da,fr)).mul(i),u=Pa(l);c.addAssign(u)}}}const cf=(s,e)=>{let t=null;return{getUV:()=>(t===null&&(t=kt.negate().reflect(e),t=s.mul(s).mix(t,e).normalize(),t=t.transformDirection(ms)),t),getTextureLevel:()=>s}},Rw=s=>({getUV:()=>s,getTextureLevel:()=>w(1)});K("EnvironmentNode",I0);let Ml,Tl;class lt extends Ae{constructor(e){super(),this.scope=e,this.isViewportNode=!0}getNodeType(){return this.scope===lt.VIEWPORT?"vec4":"vec2"}getUpdateType(){let e=gt.NONE;return(this.scope===lt.RESOLUTION||this.scope===lt.VIEWPORT)&&(e=gt.FRAME),this.updateType=e,e}update({renderer:e}){this.scope===lt.VIEWPORT?e.getViewport(Tl):e.getDrawingBufferSize(Ml)}setup(){const e=this.scope;let t=null;if(e===lt.RESOLUTION)t=yt(Ml||(Ml=new xe));else if(e===lt.VIEWPORT)t=yt(Tl||(Tl=new tt));else{t=Cw.div(lf);let n=t.x,i=t.y;/bottom/i.test(e)&&(i=i.oneMinus()),/right/i.test(e)&&(n=n.oneMinus()),t=Le(n,i)}return t}generate(e){if(this.scope===lt.COORDINATE){let t=e.getFragCoord();if(e.isFlipY()){const n=e.getNodeProperties(lf).outputNode.build(e);t=`${e.getType("vec2")}( ${t}.x, ${n}.y - ${t}.y )`}return t}return super.generate(e)}}lt.COORDINATE="coordinate";lt.RESOLUTION="resolution";lt.VIEWPORT="viewport";lt.TOP_LEFT="topLeft";lt.BOTTOM_LEFT="bottomLeft";lt.TOP_RIGHT="topRight";lt.BOTTOM_RIGHT="bottomRight";const Cw=ne(lt,lt.COORDINATE),lf=ne(lt,lt.RESOLUTION),Mr=ne(lt,lt.VIEWPORT),Ro=ne(lt,lt.TOP_LEFT);ne(lt,lt.BOTTOM_LEFT);ne(lt,lt.TOP_RIGHT);ne(lt,lt.BOTTOM_RIGHT);K("ViewportNode",lt);const fo=new xe;class Vo extends qr{constructor(e=Ro,t=null,n=null){n===null&&(n=new ap,n.minFilter=Mi),super(n,e,t),this.generateMipmaps=!1,this.isOutputTextureNode=!0,this.updateBeforeType=gt.FRAME}updateBefore(e){const t=e.renderer;t.getDrawingBufferSize(fo);const n=this.value;(n.image.width!==fo.width||n.image.height!==fo.height)&&(n.image.width=fo.width,n.image.height=fo.height,n.needsUpdate=!0);const i=n.generateMipmaps;n.generateMipmaps=this.generateMipmaps,t.copyFramebufferToTexture(n),n.generateMipmaps=i}clone(){return new this.constructor(this.uvNode,this.levelNode,this.value)}}const Lw=B(Vo),Iw=B(Vo,null,null,{generateMipmaps:!0});D("viewportTexture",Lw);D("viewportMipTexture",Iw);K("ViewportTextureNode",Vo);let Sl=null;class P0 extends Vo{constructor(e=Ro,t=null){Sl===null&&(Sl=new Do),super(e,t,Sl)}}const D0=B(P0);D("viewportDepthTexture",D0);K("ViewportDepthTextureNode",P0);class on extends Ae{constructor(e,t=null){super("float"),this.scope=e,this.valueNode=t,this.isViewportDepthNode=!0}generate(e){const{scope:t}=this;return t===on.DEPTH_PIXEL?e.getFragDepth():super.generate(e)}setup(){const{scope:e}=this;let t=null;if(e===on.DEPTH)t=Zl(Un.z,fl,pl);else if(e===on.DEPTH_TEXTURE){const n=this.valueNode||D0(),i=U0(n,fl,pl);t=Zl(i,fl,pl)}else e===on.DEPTH_PIXEL&&this.valueNode!==null&&(t=O0().assign(this.valueNode));return t}}const Zl=(s,e,t)=>s.add(e).div(e.sub(t)),U0=(s,e,t)=>e.mul(t).div(t.sub(e).mul(s).sub(t));on.DEPTH="depth";on.DEPTH_TEXTURE="depthTexture";on.DEPTH_PIXEL="depthPixel";const O0=B(on,on.DEPTH_PIXEL);ne(on,on.DEPTH);B(on,on.DEPTH_TEXTURE);const F0=ne(on,on.DEPTH_PIXEL);F0.assign=s=>O0(s);K("ViewportDepthNode",on);class ds extends Ae{constructor(e=ds.DEFAULT){super(),this.scope=e}setup(e){super.setup(e);const t=e.clippingContext,{localClipIntersection:n,localClippingCount:i,globalClippingCount:r}=t,o=r+i,a=n?o-i:o;return this.scope===ds.ALPHA_TO_COVERAGE?this.setupAlphaToCoverage(t.planes,o,a):this.setupDefault(t.planes,o,a)}setupAlphaToCoverage(e,t,n){return Y(()=>{const i=ql(e),r=rn("float","distanceToPlane"),o=rn("float","distanceToGradient"),a=rn("float","clipOpacity");a.assign(1);let c;if(Mt(n,({i:l})=>{c=i.element(l),r.assign(Un.dot(c.xyz).negate().add(c.w)),o.assign(r.fwidth().div(2)),a.mulAssign(Wi(o.negate(),o,r)),a.equal(0).discard()}),n<t){const l=rn("float","unionclipOpacity");l.assign(1),Mt({start:n,end:t},({i:u})=>{c=i.element(u),r.assign(Un.dot(c.xyz).negate().add(c.w)),o.assign(r.fwidth().div(2)),l.mulAssign(Wi(o.negate(),o,r).oneMinus())}),a.mulAssign(l.oneMinus())}nn.a.mulAssign(a),nn.a.equal(0).discard()})()}setupDefault(e,t,n){return Y(()=>{const i=ql(e);let r;if(Mt(n,({i:o})=>{r=i.element(o),Un.dot(r.xyz).greaterThan(r.w).discard()}),n<t){const o=rn("bool","clipped");o.assign(!0),Mt({start:n,end:t},({i:a})=>{r=i.element(a),o.assign(Un.dot(r.xyz).greaterThan(r.w).and(o))}),o.discard()}})()}}ds.ALPHA_TO_COVERAGE="alphaToCoverage";ds.DEFAULT="default";const Pw=()=>de(new ds),Dw=()=>de(new ds(ds.ALPHA_TO_COVERAGE));class V0 extends Ae{constructor(){super("bool"),this.isFrontFacingNode=!0}generate(e){return e.getFrontFacing()}}const Uw=ne(V0),ka=w(Uw).mul(2).sub(1);K("FrontFacingNode",V0);const Jl=new Map;class Zn extends Gi{constructor(){super(),this.isNodeMaterial=!0,this.type=this.constructor.type,this.forceSinglePass=!1,this.fog=!0,this.lights=!0,this.normals=!0,this.colorSpaced=!0,this.lightsNode=null,this.envNode=null,this.colorNode=null,this.normalNode=null,this.opacityNode=null,this.backdropNode=null,this.backdropAlphaNode=null,this.alphaTestNode=null,this.positionNode=null,this.depthNode=null,this.shadowNode=null,this.outputNode=null,this.fragmentNode=null,this.vertexNode=null}customProgramCacheKey(){return this.type+Cp(this)}build(e){this.setup(e)}setup(e){e.addStack(),e.stack.outputNode=this.vertexNode||this.setupPosition(e),e.addFlow("vertex",e.removeStack()),e.addStack();let t;const n=this.setupClipping(e);if(this.fragmentNode===null){this.depthWrite===!0&&this.setupDepth(e),this.normals===!0&&this.setupNormal(e),this.setupDiffuseColor(e),this.setupVariants(e);const i=this.setupLighting(e);n!==null&&e.stack.add(n);const r=Te(i,nn.a).max(0);t=this.setupOutput(e,r),wA.assign(t),this.outputNode!==null&&(t=this.outputNode)}else t=this.setupOutput(e,this.fragmentNode);e.stack.outputNode=t,e.addFlow("fragment",e.removeStack())}setupClipping(e){const{globalClippingCount:t,localClippingCount:n}=e.clippingContext;let i=null;return(t||n)&&(this.alphaToCoverage?i=Dw():e.stack.add(Pw())),i}setupDepth(e){const{renderer:t}=e;let n=this.depthNode;n===null&&t.logarithmicDepthBuffer===!0&&(n=Jd().w.add(1).log2().mul(z1).mul(.5)),n!==null&&F0.assign(n).append()}setupPosition(e){const{object:t}=e,n=t.geometry;e.addStack(),(n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color)&&mw(t).append(),t.isSkinnedMesh===!0&&dw(t).append(),t.isBatchedMesh&&hw(t).append(),t.instanceMatrix&&t.instanceMatrix.isInstancedBufferAttribute===!0&&e.isAvailable("instance")===!0&&lw(t).append(),this.positionNode!==null&&gn.assign(this.positionNode);const i=Jd();return e.context.vertex=e.removeStack(),e.context.mvp=i,i}setupDiffuseColor({object:e,geometry:t}){let n=this.colorNode?Te(this.colorNode):bo;this.vertexColors===!0&&t.hasAttribute("color")&&(n=Te(n.xyz.mul(mn("color","vec3")),n.a)),e.instanceColor&&(n=xi("vec3","vInstanceColor").mul(n)),nn.assign(n);const i=this.opacityNode?w(this.opacityNode):p0;if(nn.a.assign(nn.a.mul(i)),this.alphaTestNode!==null||this.alphaTest>0){const r=this.alphaTestNode!==null?w(this.alphaTestNode):H1;nn.a.lessThanEqual(r).discard()}}setupVariants(){}setupNormal(){if(this.flatShading===!0){const e=Un.dFdx().cross(Un.dFdy()).normalize();Ot.assign(e.mul(ka))}else{const e=this.normalNode?F(this.normalNode):K1;Ot.assign(e.mul(ka))}}getEnvNode(e){let t=null;return this.envNode?t=this.envNode:this.envMap?t=this.envMap.isCubeTexture?N0(this.envMap):Fn(this.envMap):e.environmentNode&&(t=e.environmentNode),t}setupLights(e){const t=this.getEnvNode(e),n=[];t&&n.push(new I0(t)),e.material.aoMap&&n.push(new b0(Fn(e.material.aoMap)));let i=this.lightsNode||e.lightsNode;return n.length>0&&(i=vw([...i.lightNodes,...n])),i}setupLightingModel(){}setupLighting(e){const{material:t}=e,{backdropNode:n,backdropAlphaNode:i,emissiveNode:r}=this,a=this.lights===!0||this.lightsNode!==null?this.setupLights(e):null;let c=nn.rgb;if(a&&a.hasLight!==!1){const l=this.setupLightingModel(e);c=C0(a,l,n,i)}else n!==null&&(c=F(i!==null?kn(c,n,i):n));return(r&&r.isNode===!0||t.emissive&&t.emissive.isColor===!0)&&(c=c.add(F(r||W1))),c}setupOutput(e,t){const n=e.renderer;if(this.fog===!0){const r=e.fogNode;r&&(t=Te(r.mix(t.rgb,r.colorNode),t.a))}const i=e.toneMappingNode;if(this.toneMapped===!0&&i&&(t=Te(i.context({color:t.rgb}),t.a)),this.colorSpaced===!0){const r=n.currentColorSpace;r!==Vt&&r!==zi&&(t=t.linearToColorSpace(r))}return t}setDefaultValues(e){for(const n in e){const i=e[n];this[n]===void 0&&(this[n]=i,i&&i.clone&&(this[n]=i.clone()))}Object.assign(this.defines,e.defines);const t=Object.getOwnPropertyDescriptors(e.constructor.prototype);for(const n in t)Object.getOwnPropertyDescriptor(this.constructor.prototype,n)===void 0&&t[n].get!==void 0&&Object.defineProperty(this.constructor.prototype,n,t[n])}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{},nodes:{}});const n=yn.prototype.toJSON.call(this,e),i=Ia(this);n.inputNodes={};for(const{property:o,childNode:a}of i)n.inputNodes[o]=a.toJSON(e).uuid;function r(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}if(t){const o=r(e.textures),a=r(e.images),c=r(e.nodes);o.length>0&&(n.textures=o),a.length>0&&(n.images=a),c.length>0&&(n.nodes=c)}return n}copy(e){return this.lightsNode=e.lightsNode,this.envNode=e.envNode,this.colorNode=e.colorNode,this.normalNode=e.normalNode,this.opacityNode=e.opacityNode,this.backdropNode=e.backdropNode,this.backdropAlphaNode=e.backdropAlphaNode,this.alphaTestNode=e.alphaTestNode,this.positionNode=e.positionNode,this.depthNode=e.depthNode,this.shadowNode=e.shadowNode,this.outputNode=e.outputNode,this.fragmentNode=e.fragmentNode,this.vertexNode=e.vertexNode,super.copy(e)}static fromMaterial(e){if(e.isNodeMaterial===!0)return e;const t=e.type.replace("Material","NodeMaterial"),n=Ow(t);if(n===void 0)throw new Error(`NodeMaterial: Material "${e.type}" is not compatible.`);for(const i in e)n[i]=e[i];return n}}function Rn(s,e){if(typeof e!="function"||!s)throw new Error(`Node material ${s} is not a class`);if(Jl.has(s)){console.warn(`Redefinition of node material ${s}`);return}Jl.set(s,e),e.type=s}function Ow(s){const e=Jl.get(s);if(e!==void 0)return new e}Rn("NodeMaterial",Zn);class B0 extends Ae{constructor(e=null){super(),this.nodes=[],this.outputNode=null,this.parent=e,this._currentCond=null,this.isStackNode=!0}getNodeType(e){return this.outputNode?this.outputNode.getNodeType(e):"void"}add(e){return this.nodes.push(e),this}if(e,t){const n=new vo(t);return this._currentCond=On(e,n),this.add(this._currentCond)}elseif(e,t){const n=new vo(t),i=On(e,n);return this._currentCond.elseNode=i,this._currentCond=i,this}else(e){return this._currentCond.elseNode=new vo(e),this}build(e,...t){const n=ZE();Yd(this);for(const i of this.nodes)i.build(e,"void");return Yd(n),this.outputNode?this.outputNode.build(e,...t):super.build(e,...t)}}B(B0);K("StackNode",B0);class z0 extends _t{constructor(e=aw){super("vec2"),this.dirNode=e}setup(){const e=this.dirNode,t=e.z.atan2(e.x).mul(1/(Math.PI*2)).add(.5),n=e.y.clamp(-1,1).asin().mul(1/Math.PI).add(.5);return Le(t,n)}}B(z0);K("EquirectUVNode",z0);class k0 extends Ae{constructor(e){super(),this.types=e,this.isStructTypeNode=!0}getMemberTypes(){return this.types}}K("StructTypeNode",k0);class H0 extends Ae{constructor(...e){super(),this.isOutputStructNode=!0,this.members=e}setup(e){super.setup(e);const t=this.members,n=[];for(let i=0;i<t.length;i++)n.push(t[i].getNodeType(e));this.nodeType=e.getStructTypeFromNode(new k0(n)).name}generate(e,t){const n=e.getVarFromNode(this);n.isOutputStructVar=!0;const i=e.getPropertyName(n),r=this.members,o=i!==""?i+".":"";for(let a=0;a<r.length;a++){const c=r[a].build(e,t);e.addLineFlowCode(`${o}m${a} = ${c}`)}return i}}B(H0);K("OutputStructNode",H0);class G0 extends Ae{constructor(e){super(),this.seedNode=e}setup(){const e=this.seedNode.uint().mul(747796405).add(2891336453),t=e.shiftRight(e.shiftRight(28).add(4)).bitXor(e).mul(277803737);return t.shiftRight(22).bitXor(t).float().mul(1/2**32)}}const Fw=B(G0);D("hash",Fw);K("HashNode",G0);const Ql=(s,e)=>Si(nt(4,s.mul(Ft(1,s))),e),Vw=(s,e)=>s.lessThan(.5)?Ql(s.mul(2),e).div(2):Ft(1,Ql(nt(Ft(1,s),2),e).div(2)),Bw=(s,e,t)=>Si(Or(Si(s,e),Vn(Si(s,e),Si(Ft(1,s),t))),1/e),zw=(s,e)=>Vi(jd.mul(e.mul(s).sub(1))).div(jd.mul(e.mul(s).sub(1)));D("parabola",Ql);D("gain",Vw);D("pcurve",Bw);D("sinc",zw);const yi=Y(([s])=>s.fract().sub(.5).abs()),W0=Y(([s])=>F(yi(s.z.add(yi(s.y.mul(1)))),yi(s.z.add(yi(s.x.mul(1)))),yi(s.y.add(yi(s.x.mul(1)))))),kw=Y(([s,e,t])=>{const n=F(s).toVar(),i=w(1.4).toVar(),r=w(0).toVar(),o=F(n).toVar();return Mt({start:w(0),end:w(3),type:"float",condition:"<="},()=>{const a=F(W0(o.mul(2))).toVar();n.addAssign(a.add(t.mul(w(.1).mul(e)))),o.mulAssign(1.8),i.mulAssign(1.5),n.mulAssign(1.2);const c=w(yi(n.z.add(yi(n.x.add(yi(n.y)))))).toVar();r.addAssign(c.div(i)),o.addAssign(.14)}),r});yi.setLayout({name:"tri",type:"float",inputs:[{name:"x",type:"float"}]});W0.setLayout({name:"tri3",type:"vec3",inputs:[{name:"p",type:"vec3"}]});kw.setLayout({name:"triNoise3D",type:"float",inputs:[{name:"p",type:"vec3"},{name:"spd",type:"float"},{name:"time",type:"float"}]});let El;class X0 extends Iu{constructor(e){El=El||hc("discard"),super(e,El)}}const Hw=B(X0),Gw=s=>Hw(s).append();D("discard",Gw);K("DiscardNode",X0);class q0 extends Ae{constructor(e=[],...t){super(),this.functionNodes=e,this.parametersNodes=t,this._candidateFnCall=null}getNodeType(){return this.functionNodes[0].shaderNode.layout.type}setup(e){const t=this.parametersNodes;let n=this._candidateFnCall;if(n===null){let i=null,r=-1;for(const o of this.functionNodes){const c=o.shaderNode.layout;if(c===null)throw new Error("FunctionOverloadingNode: FunctionNode must be a layout.");const l=c.inputs;if(t.length===l.length){let u=0;for(let h=0;h<t.length;h++){const d=t[h],f=l[h];d.getNodeType(e)===f.type?u++:u=0}u>r&&(i=o,r=u)}}this._candidateFnCall=n=i(...t)}return n}}const Ww=B(q0),Jn=s=>(...e)=>Ww(s,...e);K("FunctionOverloadingNode",q0);class Y0 extends _t{constructor(){super("vec2")}setup(){const e=F(kt.z,0,kt.x.negate()).normalize(),t=kt.cross(e);return Le(e.dot(Ot),t.dot(Ot)).mul(.495).add(.5)}}ne(Y0);K("MatcapUVNode",Y0);class En extends Bs{constructor(e=En.LOCAL,t=1,n=0){super(n),this.scope=e,this.scale=t,this.updateType=gt.FRAME}update(e){const t=this.scope,n=this.scale;t===En.LOCAL?this.value+=e.deltaTime*n:t===En.DELTA?this.value=e.deltaTime*n:t===En.FRAME?this.value=e.frameId:this.value=e.time*n}serialize(e){super.serialize(e),e.scope=this.scope,e.scale=this.scale}deserialize(e){super.deserialize(e),this.scope=e.scope,this.scale=e.scale}}En.LOCAL="local";En.GLOBAL="global";En.DELTA="delta";En.FRAME="frame";const Xw=(s,e=0)=>de(new En(En.LOCAL,s,e));ne(En,En.FRAME).uint();K("TimerNode",En);class Yt extends Ae{constructor(e=Yt.SINE,t=Xw()){super(),this.method=e,this.timeNode=t}getNodeType(e){return this.timeNode.getNodeType(e)}setup(){const e=this.method,t=de(this.timeNode);let n=null;return e===Yt.SINE?n=t.add(.75).mul(Math.PI*2).sin().mul(.5).add(.5):e===Yt.SQUARE?n=t.fract().round():e===Yt.TRIANGLE?n=t.add(.5).fract().mul(2).sub(1).abs():e===Yt.SAWTOOTH&&(n=t.fract()),n}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}Yt.SINE="sine";Yt.SQUARE="square";Yt.TRIANGLE="triangle";Yt.SAWTOOTH="sawtooth";B(Yt,Yt.SINE);B(Yt,Yt.SQUARE);B(Yt,Yt.TRIANGLE);B(Yt,Yt.SAWTOOTH);K("OscNode",Yt);class Ai extends _t{constructor(e,t){super(),this.scope=e,this.node=t}getNodeType(e){return this.node.getNodeType(e)}setup(){const{scope:e,node:t}=this;let n=null;return e===Ai.DIRECTION_TO_COLOR?n=t.mul(.5).add(.5):e===Ai.COLOR_TO_DIRECTION&&(n=t.mul(2).sub(1)),n}}Ai.DIRECTION_TO_COLOR="directionToColor";Ai.COLOR_TO_DIRECTION="colorToDirection";const j0=B(Ai,Ai.DIRECTION_TO_COLOR),qw=B(Ai,Ai.COLOR_TO_DIRECTION);D("directionToColor",j0);D("colorToDirection",qw);K("PackingNode",Ai);class Pu extends Ae{constructor(e,t,n,i=w(0),r=w(1)){super(),this.node=e,this.inLowNode=t,this.inHighNode=n,this.outLowNode=i,this.outHighNode=r,this.doClamp=!0}setup(){const{node:e,inLowNode:t,inHighNode:n,outLowNode:i,outHighNode:r,doClamp:o}=this;let a=e.sub(t).div(n.sub(t));return o===!0&&(a=a.clamp()),a.mul(r.sub(i)).add(i)}}const Yw=B(Pu,null,null,{doClamp:!1}),jw=B(Pu);D("remap",Yw);D("remapClamp",jw);K("RemapNode",Pu);class K0 extends _t{constructor(e,t,n=Le(.5)){super("vec2"),this.uvNode=e,this.rotationNode=t,this.centerNode=n}setup(){const{uvNode:e,rotationNode:t,centerNode:n}=this;return e.sub(n).rotate(t).add(n)}}const Kw=B(K0);D("rotateUV",Kw);K("RotateUVNode",K0);class $0 extends _t{constructor(e,t){super(),this.positionNode=e,this.rotationNode=t}getNodeType(e){return this.positionNode.getNodeType(e)}setup(e){const{rotationNode:t,positionNode:n}=this;if(this.getNodeType(e)==="vec2"){const r=t.cos(),o=t.sin();return Bp(r,o,o.negate(),r).mul(n)}else{const r=t,o=vr(Te(1,0,0,0),Te(0,is(r.x),Vi(r.x).negate(),0),Te(0,Vi(r.x),is(r.x),0),Te(0,0,0,1)),a=vr(Te(is(r.y),0,Vi(r.y),0),Te(0,1,0,0),Te(Vi(r.y).negate(),0,is(r.y),0),Te(0,0,0,1)),c=vr(Te(is(r.z),Vi(r.z).negate(),0,0),Te(Vi(r.z),is(r.z),0,0),Te(0,0,1,0),Te(0,0,0,1));return o.mul(a).mul(c).mul(Te(n,1)).xyz}}}const $w=B($0);D("rotate",$w);K("RotateNode",$0);class Z0 extends Ae{constructor(e,t=Ri(),n=w(0)){super("vec2"),this.countNode=e,this.uvNode=t,this.frameNode=n}setup(){const{frameNode:e,uvNode:t,countNode:n}=this,{width:i,height:r}=n,o=e.mod(i.mul(r)).floor(),a=o.mod(i),c=r.sub(o.add(1).div(i).ceil()),l=n.reciprocal(),u=Le(a,c);return t.add(u).mul(l)}}B(Z0);K("SpriteSheetUVNode",Z0);class J0 extends Gr{constructor(e,t){super(e,t),this.isStorageArrayElementNode=!0}set storageBufferNode(e){this.node=e}get storageBufferNode(){return this.node}setup(e){return e.isAvailable("storageBuffer")===!1&&!this.node.instanceIndex&&this.node.bufferObject===!0&&e.setupPBO(this.node),super.setup(e)}generate(e,t){let n;const i=e.context.assign;if(e.isAvailable("storageBuffer")===!1){const{node:r}=this;!r.instanceIndex&&this.node.bufferObject===!0&&i!==!0?n=e.generatePBO(this):n=r.build(e)}else n=super.generate(e);if(i!==!0){const r=this.getNodeType(e);n=e.format(n,r,t)}return n}}const Q0=B(J0);D("storageElement",Q0);K("StorageArrayElementNode",J0);class em extends Ae{constructor(e,t=null,n=null,i=w(1),r=gn,o=fi){super("vec4"),this.textureXNode=e,this.textureYNode=t,this.textureZNode=n,this.scaleNode=i,this.positionNode=r,this.normalNode=o}setup(){const{textureXNode:e,textureYNode:t,textureZNode:n,scaleNode:i,positionNode:r,normalNode:o}=this;let a=o.abs().normalize();a=a.div(a.dot(F(1)));const c=r.yz.mul(i),l=r.zx.mul(i),u=r.xy.mul(i),h=e.value,d=t!==null?t.value:h,f=n!==null?n.value:h,g=Fn(h,c).mul(a.x),_=Fn(d,l).mul(a.y),m=Fn(f,u).mul(a.z);return Vn(g,_,m)}}const Zw=B(em),Jw=(...s)=>Zw(...s);D("triplanarTexture",Jw);K("TriplanarTexturesNode",em);new ts;new L;new L;new L;new ze;new L(0,0,-1);new tt;new L;new L;new tt;new xe;new us;Le(Ro.x.oneMinus(),Ro.y);class jt extends Ae{constructor(e=jt.LOCAL){super("vec3"),this.scope=e}getHash(){return`bitangent-${this.scope}`}generate(e){const t=this.scope;let n;t===jt.GEOMETRY?n=Fa.cross(Va):t===jt.LOCAL?n=fi.cross(pc):t===jt.VIEW?n=hs.cross(mc):t===jt.WORLD&&(n=f0.cross(uw));const i=n.mul(Va.w).xyz;return Bn(It(i)).build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}jt.GEOMETRY="geometry";jt.LOCAL="local";jt.VIEW="view";jt.WORLD="world";ne(jt,jt.GEOMETRY);ne(jt,jt.LOCAL);const Qw=ne(jt,jt.VIEW);ne(jt,jt.WORLD);const eN=Bn(Ot.cross(y0).mul(Va.w));Bn(eN.transformDirection(ms));K("BitangentNode",jt);const tm=hi(mc,Qw,hs);kt.mul(tm);class tN extends lc{constructor(e=0){super(null,"vec4"),this.isVertexColorNode=!0,this.index=e}getAttributeName(){const e=this.index;return"color"+(e>0?e:"")}generate(e){const t=this.getAttributeName(e),n=e.hasGeometryAttribute(t);let i;return n===!0?i=super.generate(e):i=e.generateConst(this.nodeType,new tt(1,1,1,1)),i}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}K("VertexColorNode",tN);class nm extends Yr{constructor(e,t,n=null){super(e,t,n),this.renderer=n}updateReference(e){return this.reference=this.renderer!==null?this.renderer:e.renderer,this.reference}}const nN=(s,e,t)=>de(new nm(s,e,t));K("RendererReferenceNode",nm);const _c=1/6,im=s=>nt(_c,nt(s,nt(s,s.negate().add(3)).sub(3)).add(1)),eu=s=>nt(_c,nt(s,nt(s,nt(3,s).sub(6))).add(4)),sm=s=>nt(_c,nt(s,nt(s,nt(-3,s).add(3)).add(3)).add(1)),tu=s=>nt(_c,Si(s,3)),uf=s=>im(s).add(eu(s)),hf=s=>sm(s).add(tu(s)),df=s=>Vn(-1,eu(s).div(im(s).add(eu(s)))),ff=s=>Vn(1,tu(s).div(sm(s).add(tu(s)))),pf=(s,e,t)=>{const n=s.uvNode,i=nt(n,e.zw).add(.5),r=Wr(i),o=uc(i),a=uf(o.x),c=hf(o.x),l=df(o.x),u=ff(o.x),h=df(o.y),d=ff(o.y),f=Le(r.x.add(l),r.y.add(h)).sub(.5).mul(e.xy),g=Le(r.x.add(u),r.y.add(h)).sub(.5).mul(e.xy),_=Le(r.x.add(l),r.y.add(d)).sub(.5).mul(e.xy),m=Le(r.x.add(u),r.y.add(d)).sub(.5).mul(e.xy),p=uf(o.y).mul(Vn(a.mul(s.uv(f).level(t)),c.mul(s.uv(g).level(t)))),S=hf(o.y).mul(Vn(a.mul(s.uv(_).level(t)),c.mul(s.uv(m).level(t))));return p.add(S)},iN=(s,e)=>{const t=Le(s.size(C(e))),n=Le(s.size(C(e.add(1)))),i=Or(1,t),r=Or(1,n),o=pf(s,Te(i,t),Wr(e)),a=pf(s,Te(r,n),n0(e));return uc(e).mix(o,a)};class rm extends _t{constructor(e,t=w(3)){super("vec4"),this.textureNode=e,this.blurNode=t}setup(){return iN(this.textureNode,this.blurNode)}}const sN=B(rm);D("bicubic",sN);K("TextureBicubicNode",rm);class om extends Ae{constructor(){super("vec2"),this.isPointUVNode=!0}generate(){return"vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y )"}}ne(om);K("PointUVNode",om);class li extends Ae{constructor(e=li.BACKGROUND_BLURRINESS,t=null){super(),this.scope=e,this.scene=t}setup(e){const t=this.scope,n=this.scene!==null?this.scene:e.scene;let i;return t===li.BACKGROUND_BLURRINESS?i=di("backgroundBlurriness","float",n):t===li.BACKGROUND_INTENSITY?i=di("backgroundIntensity","float",n):console.error("THREE.SceneNode: Unknown scope:",t),i}}li.BACKGROUND_BLURRINESS="backgroundBlurriness";li.BACKGROUND_INTENSITY="backgroundIntensity";ne(li,li.BACKGROUND_BLURRINESS);ne(li,li.BACKGROUND_INTENSITY);K("SceneNode",li);class rN extends dc{constructor(e,t,n=0){super(e,t,n),this.isStorageBufferNode=!0,this.bufferObject=!1,this._attribute=null,this._varying=null}getInputType(){return"storageBuffer"}element(e){return Q0(this,e)}setBufferObject(e){return this.bufferObject=e,this}generate(e){if(e.isAvailable("storageBuffer"))return super.generate(e);const t=this.getNodeType(e);this._attribute===null&&(this._attribute=fc(this.value),this._varying=It(this._attribute));const n=this._varying.build(e,t);return e.registerTransform(n,this._attribute),n}}K("StorageBufferNode",rN);class am extends qr{constructor(e,t,n=null){super(e,t),this.storeNode=n,this.isStoreTextureNode=!0}getInputType(){return"storageTexture"}setup(e){super.setup(e);const t=e.getNodeProperties(this);t.storeNode=this.storeNode}generate(e,t){let n;return this.storeNode!==null?n=this.generateStore(e):n=super.generate(e,t),n}generateStore(e){const t=e.getNodeProperties(this),{uvNode:n,storeNode:i}=t,r=super.generate(e,"property"),o=n.build(e,"uvec2"),a=i.build(e,"vec4"),c=e.generateTextureStore(e,r,o,a);e.addLineFlowCode(c)}}B(am);K("TextureStoreNode",am);class oN extends Yr{constructor(e,t,n=null){super(e,t,n),this.userData=n}update(e){this.reference=this.userData!==null?this.userData:e.object.userData,super.update(e)}}K("UserDataNode",oN);const aN=Y(({base:s,blend:e})=>{const t=n=>e[n].lessThan(e0).cond(e[n],s[n].oneMinus().div(e[n]).oneMinus().max(0));return F(t("x"),t("y"),t("z"))}).setLayout({name:"burnColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),cN=Y(({base:s,blend:e})=>{const t=n=>e[n].equal(1).cond(e[n],s[n].div(e[n].oneMinus()).max(0));return F(t("x"),t("y"),t("z"))}).setLayout({name:"dodgeColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),lN=Y(({base:s,blend:e})=>{const t=n=>s[n].oneMinus().mul(e[n].oneMinus()).oneMinus();return F(t("x"),t("y"),t("z"))}).setLayout({name:"screenColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),uN=Y(({base:s,blend:e})=>{const t=n=>s[n].lessThan(.5).cond(s[n].mul(e[n],2),s[n].oneMinus().mul(e[n].oneMinus()).oneMinus());return F(t("x"),t("y"),t("z"))}).setLayout({name:"overlayColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]});class sn extends _t{constructor(e,t,n){super(),this.blendMode=e,this.baseNode=t,this.blendNode=n}setup(){const{blendMode:e,baseNode:t,blendNode:n}=this,i={base:t,blend:n};let r=null;return e===sn.BURN?r=aN(i):e===sn.DODGE?r=cN(i):e===sn.SCREEN?r=lN(i):e===sn.OVERLAY&&(r=uN(i)),r}}sn.BURN="burn";sn.DODGE="dodge";sn.SCREEN="screen";sn.OVERLAY="overlay";const hN=B(sn,sn.BURN),dN=B(sn,sn.DODGE),fN=B(sn,sn.OVERLAY),pN=B(sn,sn.SCREEN);D("burn",hN);D("dodge",dN);D("overlay",fN);D("screen",pN);K("BlendModeNode",sn);const mN=Y(({textureNode:s,bumpScale:e})=>{let t=s;if(t.isTextureNode!==!0&&t.traverse(o=>{o.isTextureNode===!0&&(t=o)}),t.isTextureNode!==!0)throw new Error("THREE.TSL: dHdxy_fwd() requires a TextureNode.");const n=w(s),i=t.uvNode||Ri(),r=o=>s.cache().context({getUV:()=>o,forceUVContext:!0});return Le(w(r(i.add(i.dFdx()))).sub(n),w(r(i.add(i.dFdy()))).sub(n)).mul(e)}),gN=Y(s=>{const{surf_pos:e,surf_norm:t,dHdxy:n}=s,i=e.dFdx().normalize(),r=e.dFdy().normalize(),o=t,a=r.cross(o),c=o.cross(i),l=i.dot(a).mul(ka),u=l.sign().mul(n.x.mul(a).add(n.y.mul(c)));return l.abs().mul(t).sub(u).normalize()});class cm extends _t{constructor(e,t=null){super("vec3"),this.textureNode=e,this.scaleNode=t}setup(){const e=this.scaleNode!==null?this.scaleNode:1,t=mN({textureNode:this.textureNode,bumpScale:e});return gN({surf_pos:Un,surf_norm:hs,dHdxy:t})}}const _N=B(cm);D("bumpMap",_N);K("BumpMapNode",cm);const xN=Y(({color:s,adjustment:e})=>e.mix(lm(s.rgb),s.rgb)),vN=Y(({color:s,adjustment:e})=>{const t=Vn(s.r,s.g,s.b).div(3),n=s.r.max(s.g.max(s.b)),i=n.sub(t).mul(e).mul(-3);return kn(s.rgb,n,i)}),yN=Y(({color:s,adjustment:e})=>{const t=F(.57735,.57735,.57735),n=e.cos();return F(s.rgb.mul(n).add(t.cross(s.rgb).mul(e.sin()).add(t.mul(Xr(t,s.rgb).mul(n.oneMinus())))))});class Nn extends _t{constructor(e,t,n=w(1)){super("vec3"),this.method=e,this.colorNode=t,this.adjustmentNode=n}setup(){const{method:e,colorNode:t,adjustmentNode:n}=this,i={color:t,adjustment:n};let r=null;return e===Nn.SATURATION?r=xN(i):e===Nn.VIBRANCE?r=vN(i):e===Nn.HUE?r=yN(i):console.error(`${this.type}: Method "${this.method}" not supported!`),r}}Nn.SATURATION="saturation";Nn.VIBRANCE="vibrance";Nn.HUE="hue";const MN=B(Nn,Nn.SATURATION),TN=B(Nn,Nn.VIBRANCE),SN=B(Nn,Nn.HUE),EN=F(.2125,.7154,.0721),lm=(s,e=EN)=>Xr(s,e),um=(s,e)=>kn(F(0),s,lm(s).sub(e).max(0));D("saturation",MN);D("vibrance",TN);D("hue",SN);D("threshold",um);K("ColorAdjustmentNode",Nn);const AN=Y(s=>{const{eye_pos:e,surf_norm:t,mapN:n,uv:i}=s,r=e.dFdx(),o=e.dFdy(),a=i.dFdx(),c=i.dFdy(),l=t,u=o.cross(l),h=l.cross(r),d=u.mul(a.x).add(h.mul(c.x)),f=u.mul(a.y).add(h.mul(c.y)),g=d.dot(d).max(f.dot(f)),_=ka.mul(g.inverseSqrt());return Vn(d.mul(n.x,_),f.mul(n.y,_),l.mul(n.z)).normalize()});class hm extends _t{constructor(e,t=null){super("vec3"),this.node=e,this.scaleNode=t,this.normalMapType=Ps}setup(e){const{normalMapType:t,scaleNode:n}=this;let i=this.node.mul(2).sub(1);n!==null&&(i=F(i.xy.mul(n),i.z));let r=null;return t===Bf?r=d0.mul(i).normalize():t===Ps&&(e.hasGeometryAttribute("tangent")===!0?r=tm.mul(i).normalize():r=AN({eye_pos:Un,surf_norm:hs,mapN:i,uv:Ri()})),r}}const wN=B(hm);D("normalMap",wN);K("NormalMapNode",hm);class dm extends _t{constructor(e,t){super(),this.sourceNode=e,this.stepsNode=t}setup(){const{sourceNode:e,stepsNode:t}=this;return e.mul(t).floor().div(t)}}const NN=B(dm);D("posterize",NN);K("PosterizeNode",dm);const bN=Y(({color:s,exposure:e})=>s.mul(e).clamp()),RN=Y(({color:s,exposure:e})=>(s=s.mul(e),s.div(s.add(1)).clamp())),CN=Y(({color:s,exposure:e})=>{s=s.mul(e),s=s.sub(.004).max(0);const t=s.mul(s.mul(6.2).add(.5)),n=s.mul(s.mul(6.2).add(1.7)).add(.06);return t.div(n).pow(2.2)}),LN=Y(({color:s})=>{const e=s.mul(s.add(.0245786)).sub(90537e-9),t=s.mul(s.add(.432951).mul(.983729)).add(.238081);return e.div(t)}),IN=Y(({color:s,exposure:e})=>{const t=hi(.59719,.35458,.04823,.076,.90834,.01566,.0284,.13383,.83777),n=hi(1.60475,-.53108,-.07367,-.10208,1.10813,-.00605,-.00327,-.07276,1.07602);return s=s.mul(e).div(.6),s=t.mul(s),s=LN({color:s}),s=n.mul(s),s.clamp()}),PN=hi(F(1.6605,-.1246,-.0182),F(-.5876,1.1329,-.1006),F(-.0728,-.0083,1.1187)),DN=hi(F(.6274,.0691,.0164),F(.3293,.9195,.088),F(.0433,.0113,.8956)),UN=Y(([s])=>{const e=F(s).toVar(),t=F(e.mul(e)).toVar(),n=F(t.mul(t)).toVar();return w(15.5).mul(n.mul(t)).sub(nt(40.14,n.mul(e))).add(nt(31.96,n).sub(nt(6.868,t.mul(e))).add(nt(.4298,t).add(nt(.1191,e).sub(.00232))))}),ON=Y(({color:s,exposure:e})=>{const t=F(s).toVar(),n=hi(F(.856627153315983,.137318972929847,.11189821299995),F(.0951212405381588,.761241990602591,.0767994186031903),F(.0482516061458583,.101439036467562,.811302368396859)),i=hi(F(1.1271005818144368,-.1413297634984383,-.14132976349843826),F(-.11060664309660323,1.157823702216272,-.11060664309660294),F(-.016493938717834573,-.016493938717834257,1.2519364065950405)),r=w(-12.47393),o=w(4.026069);return t.mulAssign(e),t.assign(DN.mul(t)),t.assign(n.mul(t)),t.assign(zn(t,1e-10)),t.assign(Ru(t)),t.assign(t.sub(r).div(o.sub(r))),t.assign(No(t,0,1)),t.assign(UN(t)),t.assign(i.mul(t)),t.assign(Si(zn(F(0),t),F(2.2))),t.assign(PN.mul(t)),t.assign(No(t,0,1)),t}),FN={[Tf]:bN,[Sf]:RN,[Ef]:CN,[Af]:IN,[wf]:ON};class fm extends _t{constructor(e=ai,t=BN,n=null){super("vec3"),this.toneMapping=e,this.exposureNode=t,this.colorNode=n}getCacheKey(){let e=super.getCacheKey();return e="{toneMapping:"+this.toneMapping+",nodes:"+e+"}",e}setup(e){const t=this.colorNode||e.context.color,n=this.toneMapping;if(n===ai)return t;const i={exposure:this.exposureNode,color:t},r=FN[n];let o=null;return r?o=r(i):(console.error("ToneMappingNode: Unsupported Tone Mapping configuration.",n),o=t),o}}const VN=(s,e,t)=>de(new fm(s,de(e),de(t))),BN=nN("toneMappingExposure","float");D("toneMapping",(s,e,t)=>VN(e,t,s));K("ToneMappingNode",fm);let Al=null;class pm extends Vo{constructor(e=Ro,t=null){Al===null&&(Al=new ap),super(e,t,Al)}updateReference(){return this}}const zN=B(pm);D("viewportSharedTexture",zN);K("ViewportSharedTextureNode",pm);class nu extends qr{constructor(e,t){super(t),this.passNode=e,this.setUpdateMatrix(!1)}setup(e){return this.passNode.build(e),super.setup(e)}clone(){return new this.constructor(this.passNode,this.value)}}class Bo extends _t{constructor(e,t,n){super("vec4"),this.scope=e,this.scene=t,this.camera=n,this._pixelRatio=1,this._width=1,this._height=1;const i=new Do;i.isRenderTargetTexture=!0,i.name="PostProcessingDepth";const r=new us(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mo});r.texture.name="PostProcessing",r.depthTexture=i,this.renderTarget=r,this.updateBeforeType=gt.FRAME,this._textureNode=de(new nu(this,r.texture)),this._depthTextureNode=de(new nu(this,i)),this._depthNode=null,this._viewZNode=null,this._cameraNear=yt(0),this._cameraFar=yt(0),this.isPassNode=!0}isGlobal(){return!0}getTextureNode(){return this._textureNode}getTextureDepthNode(){return this._depthTextureNode}getViewZNode(){if(this._viewZNode===null){const e=this._cameraNear,t=this._cameraFar;this._viewZNode=U0(this._depthTextureNode,e,t)}return this._viewZNode}getDepthNode(){if(this._depthNode===null){const e=this._cameraNear,t=this._cameraFar;this._depthNode=Zl(this.getViewZNode(),e,t)}return this._depthNode}setup(){return this.scope===Bo.COLOR?this.getTextureNode():this.getDepthNode()}updateBefore(e){const{renderer:t}=e,{scene:n,camera:i}=this;this._pixelRatio=t.getPixelRatio();const r=t.getSize(new xe);this.setSize(r.width,r.height);const o=t.toneMapping,a=t.toneMappingNode,c=t.getRenderTarget();this._cameraNear.value=i.near,this._cameraFar.value=i.far,t.toneMapping=ai,t.toneMappingNode=null,t.setRenderTarget(this.renderTarget),t.render(n,i),t.toneMapping=o,t.toneMappingNode=a,t.setRenderTarget(c)}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget.setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget.dispose()}}Bo.COLOR="color";Bo.DEPTH="depth";const Du=(s,e)=>de(new nu(s,e));K("PassNode",Bo);const wl=new $a(-1,1,1,-1,0,1);class kN extends Hn{constructor(e=!1){super();const t=e===!1?[0,-1,0,1,2,1]:[0,2,0,0,2,0];this.setAttribute("position",new wn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new wn(t,2))}}const HN=new kN;class xc extends Gt{constructor(e=null){super(HN,e),this.camera=wl}renderAsync(e){return e.renderAsync(this,wl)}render(e){e.render(this,wl)}}const mf=new xc,gf=new xc;class GN extends _t{constructor(e,t=2){super("vec4"),this.textureNode=e,this.sigma=t,this.directionNode=Le(1),this._invSize=yt(new xe),this._passDirection=yt(new xe),this._horizontalRT=new us,this._horizontalRT.texture.name="GaussianBlurNode.horizontal",this._verticalRT=new us,this._verticalRT.texture.name="GaussianBlurNode.vertical",this._textureNode=Du(this,this._verticalRT.texture),this.updateBeforeType=gt.RENDER,this.resolution=new xe(1,1)}setSize(e,t){e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._invSize.value.set(1/e,1/t),this._horizontalRT.setSize(e,t),this._verticalRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,i=n.value,r=t.getRenderTarget(),o=n.value;mf.material=this._material,gf.material=this._material,this.setSize(i.image.width,i.image.height);const a=i.type;this._horizontalRT.texture.type=a,this._verticalRT.texture.type=a,t.setRenderTarget(this._horizontalRT),this._passDirection.value.set(1,0),mf.render(t),n.value=this._horizontalRT.texture,t.setRenderTarget(this._verticalRT),this._passDirection.value.set(0,1),gf.render(t),t.setRenderTarget(r),n.value=o}getTextureNode(){return this._textureNode}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("GaussianBlurNode requires a TextureNode."),Te();const n=t.uvNode||Ri(),i=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),r=Y(()=>{const c=3+2*this.sigma,l=this._getCoefficients(c),u=this._invSize,h=Le(this.directionNode).mul(this._passDirection),d=w(l[0]).toVar(),f=Te(i(n).mul(d)).toVar();for(let g=1;g<c;g++){const _=w(g),m=w(l[g]),p=Le(h.mul(u.mul(_))).toVar(),S=Te(i(n.add(p))),x=Te(i(n.sub(p)));f.addAssign(S.add(x).mul(m)),d.addAssign(nt(2,m))}return f.div(d)}),o=this._material||(this._material=e.createNodeMaterial());o.fragmentNode=r();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}_getCoefficients(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return t}}const WN=(s,e)=>de(new GN(de(s),e));D("gaussianBlur",WN);const _f=new xc;class XN extends _t{constructor(e,t=.96){super(e),this.textureNode=e,this.textureNodeOld=Fn(),this.damp=yt(t),this._compRT=new us,this._compRT.texture.name="AfterImageNode.comp",this._oldRT=new us,this._oldRT.texture.name="AfterImageNode.old",this._textureNode=Du(this,this._compRT.texture),this.updateBeforeType=gt.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._compRT.setSize(e,t),this._oldRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,i=n.value,r=i.type;this._compRT.texture.type=r,this._oldRT.texture.type=r;const o=t.getRenderTarget(),a=n.value;this.textureNodeOld.value=this._oldRT.texture,t.setRenderTarget(this._compRT),_f.render(t);const c=this._oldRT;this._oldRT=this._compRT,this._compRT=c,this.setSize(i.image.width,i.image.height),t.setRenderTarget(o),n.value=a}setup(e){const t=this.textureNode,n=this.textureNodeOld;if(t.isTextureNode!==!0)return console.error("AfterImageNode requires a TextureNode."),Te();const i=t.uvNode||Ri();n.uvNode=i;const r=u=>t.cache().context({getUV:()=>u,forceUVContext:!0}),o=Y(([u,h])=>{const d=w(h).toVar(),f=Te(u).toVar();return zn(Cu(f.sub(d)),0)}),a=Y(()=>{const u=Te(n),h=Te(r(i));return u.mulAssign(this.damp.mul(o(u,.1))),zn(h,u)}),c=this._materialComposed||(this._materialComposed=e.createNodeMaterial());c.fragmentNode=a(),_f.material=c;const l=e.getNodeProperties(this);return l.textureNode=t,this._textureNode}}const qN=(s,e)=>de(new XN(de(s),e));D("afterImage",qN);const xf=new xc;class YN extends _t{constructor(e,t,n,i){super("vec4"),this.textureNode=e,this.tresholdNode=t,this.scaleNode=n,this.colorNode=F(.1,0,1),this.samples=i,this.resolution=new xe(1,1),this._renderTarget=new us,this._renderTarget.texture.name="anamorphic",this._invSize=yt(new xe),this._textureNode=Du(this,this._renderTarget.texture),this.updateBeforeType=gt.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._invSize.value.set(1/e,1/t),e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._renderTarget.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,i=n.value;this._renderTarget.texture.type=i.type;const r=t.getRenderTarget(),o=n.value;xf.material=this._material,this.setSize(i.image.width,i.image.height),t.setRenderTarget(this._renderTarget),xf.render(t),t.setRenderTarget(r),n.value=o}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("AnamorphNode requires a TextureNode."),Te();const n=t.uvNode||Ri(),i=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),r=Y(()=>{const c=this.samples,l=Math.floor(c/2),u=F(0).toVar();return Mt({start:-l,end:l},({i:h})=>{const d=w(h).abs().div(l).oneMinus(),f=Le(n.x.add(this._invSize.x.mul(h).mul(this.scaleNode)),n.y),g=i(f),_=um(g,this.tresholdNode).mul(d);u.addAssign(_)}),u.mul(this.colorNode)}),o=this._material||(this._material=e.createNodeMaterial());o.fragmentNode=r();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}}const jN=(s,e=.9,t=3,n=32)=>de(new YN(de(s),de(e),de(t),n));D("anamorphic",jN);class mm extends _t{constructor(e=null,t={}){super(),this.functionNode=e,this.parameters=t}setParameters(e){return this.parameters=e,this}getParameters(){return this.parameters}getNodeType(e){return this.functionNode.getNodeType(e)}generate(e){const t=[],n=this.functionNode,i=n.getInputs(e),r=this.parameters;if(Array.isArray(r))for(let a=0;a<r.length;a++){const c=i[a],l=r[a];t.push(l.build(e,c.type))}else for(const a of i){const c=r[a.name];if(c!==void 0)t.push(c.build(e,a.type));else throw new Error(`FunctionCallNode: Input '${a.name}' not found in FunctionNode.`)}return`${n.build(e,"property")}( ${t.join(", ")} )`}}const KN=(s,...e)=>(e=e.length>1||e[0]&&e[0].isNode===!0?xr(e):cc(e[0]),de(new mm(de(s),e)));D("call",KN);K("FunctionCallNode",mm);class gm extends Ae{constructor(e=null){super(),this._value=e,this._cache=null,this.inputType=null,this.outpuType=null,this.events=new fs,this.isScriptableValueNode=!0}get isScriptableOutputNode(){return this.outputType!==null}set value(e){this._value!==e&&(this._cache&&this.inputType==="URL"&&this.value.value instanceof ArrayBuffer&&(URL.revokeObjectURL(this._cache),this._cache=null),this._value=e,this.events.dispatchEvent({type:"change"}),this.refresh())}get value(){return this._value}refresh(){this.events.dispatchEvent({type:"refresh"})}getValue(){const e=this.value;if(e&&this._cache===null&&this.inputType==="URL"&&e.value instanceof ArrayBuffer)this._cache=URL.createObjectURL(new Blob([e.value]));else if(e&&e.value!==null&&e.value!==void 0&&((this.inputType==="URL"||this.inputType==="String")&&typeof e.value=="string"||this.inputType==="Number"&&typeof e.value=="number"||this.inputType==="Vector2"&&e.value.isVector2||this.inputType==="Vector3"&&e.value.isVector3||this.inputType==="Vector4"&&e.value.isVector4||this.inputType==="Color"&&e.value.isColor||this.inputType==="Matrix3"&&e.value.isMatrix3||this.inputType==="Matrix4"&&e.value.isMatrix4))return e.value;return this._cache||e}getNodeType(e){return this.value&&this.value.isNode?this.value.getNodeType(e):"float"}setup(){return this.value&&this.value.isNode?this.value:w()}serialize(e){super.serialize(e),this.value!==null?this.inputType==="ArrayBuffer"?e.value=Ip(this.value):e.value=this.value?this.value.toJSON(e.meta).uuid:null:e.value=null,e.inputType=this.inputType,e.outputType=this.outputType}deserialize(e){super.deserialize(e);let t=null;e.value!==null&&(e.inputType==="ArrayBuffer"?t=Pp(e.value):e.inputType==="Texture"?t=e.meta.textures[e.value]:t=e.meta.nodes[e.value]||null),this.value=t,this.inputType=e.inputType,this.outputType=e.outputType}}const Sa=B(gm);D("scriptableValue",Sa);K("ScriptableValueNode",gm);class _m extends Map{get(e,t=null,...n){if(this.has(e))return super.get(e);if(t!==null){const i=t(...n);return this.set(e,i),i}}}class $N{constructor(e){this.scriptableNode=e}get parameters(){return this.scriptableNode.parameters}get layout(){return this.scriptableNode.getLayout()}getInputLayout(e){return this.scriptableNode.getInputLayout(e)}get(e){const t=this.parameters[e];return t?t.getValue():null}}const Nl=new _m;class xm extends Ae{constructor(e=null,t={}){super(),this.codeNode=e,this.parameters=t,this._local=new _m,this._output=Sa(),this._outputs={},this._source=this.source,this._method=null,this._object=null,this._value=null,this._needsOutputUpdate=!0,this.onRefresh=this.onRefresh.bind(this),this.isScriptableNode=!0}get source(){return this.codeNode?this.codeNode.code:""}setLocal(e,t){return this._local.set(e,t)}getLocal(e){return this._local.get(e)}onRefresh(){this._refresh()}getInputLayout(e){for(const t of this.getLayout())if(t.inputType&&(t.id===e||t.name===e))return t}getOutputLayout(e){for(const t of this.getLayout())if(t.outputType&&(t.id===e||t.name===e))return t}setOutput(e,t){const n=this._outputs;return n[e]===void 0?n[e]=Sa(t):n[e].value=t,this}getOutput(e){return this._outputs[e]}getParameter(e){return this.parameters[e]}setParameter(e,t){const n=this.parameters;return t&&t.isScriptableNode?(this.deleteParameter(e),n[e]=t,n[e].getDefaultOutput().events.addEventListener("refresh",this.onRefresh)):t&&t.isScriptableValueNode?(this.deleteParameter(e),n[e]=t,n[e].events.addEventListener("refresh",this.onRefresh)):n[e]===void 0?(n[e]=Sa(t),n[e].events.addEventListener("refresh",this.onRefresh)):n[e].value=t,this}getValue(){return this.getDefaultOutput().getValue()}deleteParameter(e){let t=this.parameters[e];return t&&(t.isScriptableNode&&(t=t.getDefaultOutput()),t.events.removeEventListener("refresh",this.onRefresh)),this}clearParameters(){for(const e of Object.keys(this.parameters))this.deleteParameter(e);return this.needsUpdate=!0,this}call(e,...t){const i=this.getObject()[e];if(typeof i=="function")return i(...t)}async callAsync(e,...t){const i=this.getObject()[e];if(typeof i=="function")return i.constructor.name==="AsyncFunction"?await i(...t):i(...t)}getNodeType(e){return this.getDefaultOutputNode().getNodeType(e)}refresh(e=null){e!==null?this.getOutput(e).refresh():this._refresh()}getObject(){if(this.needsUpdate&&this.dispose(),this._object!==null)return this._object;const e=()=>this.refresh(),t=(l,u)=>this.setOutput(l,u),n=new $N(this),i=Nl.get("THREE"),r=Nl.get("TSL"),o=this.getMethod(this.codeNode),a=[n,this._local,Nl,e,t,i,r];this._object=o(...a);const c=this._object.layout;if(c&&(c.cache===!1&&this._local.clear(),this._output.outputType=c.outputType||null,Array.isArray(c.elements)))for(const l of c.elements){const u=l.id||l.name;l.inputType&&(this.getParameter(u)===void 0&&this.setParameter(u,null),this.getParameter(u).inputType=l.inputType),l.outputType&&(this.getOutput(u)===void 0&&this.setOutput(u,null),this.getOutput(u).outputType=l.outputType)}return this._object}deserialize(e){super.deserialize(e);for(const t in this.parameters){let n=this.parameters[t];n.isScriptableNode&&(n=n.getDefaultOutput()),n.events.addEventListener("refresh",this.onRefresh)}}getLayout(){return this.getObject().layout}getDefaultOutputNode(){const e=this.getDefaultOutput().value;return e&&e.isNode?e:w()}getDefaultOutput(){return this._exec()._output}getMethod(){if(this.needsUpdate&&this.dispose(),this._method!==null)return this._method;const e=["parameters","local","global","refresh","setOutput","THREE","TSL"],n=["layout","init","main","dispose"].join(", "),i="var "+n+`; var output = {};
`,r=`
return { ...output, `+n+" };",o=i+this.codeNode.code+r;return this._method=new Function(...e,o),this._method}dispose(){this._method!==null&&(this._object&&typeof this._object.dispose=="function"&&this._object.dispose(),this._method=null,this._object=null,this._source=null,this._value=null,this._needsOutputUpdate=!0,this._output.value=null,this._outputs={})}setup(){return this.getDefaultOutputNode()}set needsUpdate(e){e===!0&&this.dispose()}get needsUpdate(){return this.source!==this._source}_exec(){return this.codeNode===null?this:(this._needsOutputUpdate===!0&&(this._value=this.call("main"),this._needsOutputUpdate=!1),this._output.value=this._value,this)}_refresh(){this.needsUpdate=!0,this._exec(),this._output.refresh()}}const ZN=B(xm);D("scriptable",ZN);K("ScriptableNode",xm);class vc extends Ae{constructor(e,t){super("float"),this.isFogNode=!0,this.colorNode=e,this.factorNode=t}getViewZNode(e){let t;const n=e.context.getViewZ;return n!==void 0&&(t=n(this)),(t||Un.z).negate()}setup(){return this.factorNode}}const JN=B(vc);D("fog",JN);K("FogNode",vc);class vm extends vc{constructor(e,t,n){super(e),this.isFogRangeNode=!0,this.nearNode=t,this.farNode=n}setup(e){const t=this.getViewZNode(e);return Wi(this.nearNode,this.farNode,t)}}const QN=B(vm);D("rangeFog",QN);K("FogRangeNode",vm);class ym extends vc{constructor(e,t){super(e),this.isFogExp2Node=!0,this.densityNode=t}setup(e){const t=this.getViewZNode(e),n=this.densityNode;return n.mul(n,t,t).negate().exp().oneMinus()}}const eb=B(ym);D("densityFog",eb);K("FogExp2Node",ym);let As=null,ws=null;class Mm extends Ae{constructor(e=w(),t=w()){super(),this.minNode=e,this.maxNode=t}getVectorLength(e){const t=e.getTypeLength(as(this.minNode.value)),n=e.getTypeLength(as(this.maxNode.value));return t>n?t:n}getNodeType(e){return e.object.isInstancedMesh===!0?e.getTypeFromLength(this.getVectorLength(e)):"float"}setup(e){const t=e.object;let n=null;if(t.isInstancedMesh===!0){const i=this.minNode.value,r=this.maxNode.value,o=e.getTypeLength(as(i)),a=e.getTypeLength(as(r));As=As||new tt,ws=ws||new tt,As.setScalar(0),ws.setScalar(0),o===1?As.setScalar(i):i.isColor?As.set(i.r,i.g,i.b):As.set(i.x,i.y,i.z||0,i.w||0),a===1?ws.setScalar(r):r.isColor?ws.set(r.r,r.g,r.b):ws.set(r.x,r.y,r.z||0,r.w||0);const c=4,l=c*t.count,u=new Float32Array(l);for(let d=0;d<l;d++){const f=d%c,g=As.getComponent(f),_=ws.getComponent(f);u[d]=ss.lerp(g,_,Math.random())}const h=this.getNodeType(e);n=Lu(u,"vec4",t.count).element(Xp).convert(h)}else n=w(0);return n}}B(Mm);K("RangeNode",Mm);class Tm extends Ae{constructor(e,t,n=[64]){super("void"),this.isComputeNode=!0,this.computeNode=e,this.count=t,this.workgroupSize=n,this.dispatchCount=0,this.version=1,this.updateBeforeType=gt.OBJECT,this.updateDispatchCount()}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}updateDispatchCount(){const{count:e,workgroupSize:t}=this;let n=t[0];for(let i=1;i<t.length;i++)n*=t[i];this.dispatchCount=Math.ceil(e/n)}onInit(){}updateBefore({renderer:e}){e.compute(this)}generate(e){const{shaderStage:t}=e;if(t==="compute"){const n=this.computeNode.build(e,"void");n!==""&&e.addLineFlowCode(n)}}}const tb=(s,e,t)=>de(new Tm(de(s),e,t));D("compute",tb);K("ComputeNode",Tm);class Vs extends Ae{constructor(e=Vs.TARGET_DIRECTION,t=null){super(),this.scope=e,this.light=t}setup(){const{scope:e,light:t}=this;let n=null;return e===Vs.TARGET_DIRECTION&&(n=ms.transformDirection(Yl(t).sub(Yl(t.target)))),n}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Vs.TARGET_DIRECTION="targetDirection";const Sm=B(Vs,Vs.TARGET_DIRECTION);K("LightNode",Vs);const Em=Y(s=>{const{lightDistance:e,cutoffDistance:t,decayExponent:n}=s,i=e.pow(n).max(.01).reciprocal();return t.greaterThan(0).cond(i.mul(e.div(t).pow4().oneMinus().clamp().pow2()),i)});class Am extends ks{constructor(e=null){super(e),this.cutoffDistanceNode=yt(0),this.decayExponentNode=yt(0)}update(e){const{light:t}=this;super.update(e),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}setup(e){const{colorNode:t,cutoffDistanceNode:n,decayExponentNode:i,light:r}=this,o=e.context.lightingModel,a=h0(r).sub(Un),c=a.normalize(),l=a.length(),u=Em({lightDistance:l,cutoffDistance:n,decayExponent:i}),h=t.mul(u),d=e.context.reflectedLight;o.direct({lightDirection:c,lightColor:h,reflectedLight:d},e.stack,e)}}K("PointLightNode",Am);jr(fp,Am);class wm extends ks{constructor(e=null){super(e)}setup(e){super.setup(e);const t=e.context.lightingModel,n=this.colorNode,i=Sm(this.light),r=e.context.reflectedLight;t.direct({lightDirection:i,lightColor:n,reflectedLight:r},e.stack,e)}}K("DirectionalLightNode",wm);jr(pu,wm);class Uu extends ks{constructor(e=null){super(e),this.coneCosNode=yt(0),this.penumbraCosNode=yt(0),this.cutoffDistanceNode=yt(0),this.decayExponentNode=yt(0)}update(e){super.update(e);const{light:t}=this;this.coneCosNode.value=Math.cos(t.angle),this.penumbraCosNode.value=Math.cos(t.angle*(1-t.penumbra)),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}getSpotAttenuation(e){const{coneCosNode:t,penumbraCosNode:n}=this;return Wi(t,n,e)}setup(e){super.setup(e);const t=e.context.lightingModel,{colorNode:n,cutoffDistanceNode:i,decayExponentNode:r,light:o}=this,a=h0(o).sub(Un),c=a.normalize(),l=c.dot(Sm(o)),u=this.getSpotAttenuation(l),h=a.length(),d=Em({lightDistance:h,cutoffDistance:i,decayExponent:r}),f=n.mul(u).mul(d),g=e.context.reflectedLight;t.direct({lightDirection:c,lightColor:f,reflectedLight:g},e.stack,e)}}K("SpotLightNode",Uu);jr(tc,Uu);class nb extends tc{constructor(e,t,n,i,r,o){super(e,t,n,i,r,o),this.iesMap=null}copy(e,t){return super.copy(e,t),this.iesMap=e.iesMap,this}}const ib=nb;class Nm extends Uu{getSpotAttenuation(e){const t=this.light.iesMap;let n=null;if(t&&t.isTexture===!0){const i=e.acos().mul(1/Math.PI);n=Fn(t,Le(i,0),0).r}else n=super.getSpotAttenuation(e);return n}}K("IESSpotLightNode",Nm);jr(ib,Nm);class bm extends ks{constructor(e=null){super(e)}setup({context:e}){e.irradiance.addAssign(this.colorNode)}}K("AmbientLightNode",bm);jr(pp,bm);class Rm extends ks{constructor(e=null){super(e),this.lightPositionNode=Yl(e),this.lightDirectionNode=this.lightPositionNode.normalize(),this.groundColorNode=yt(new ve)}update(e){const{light:t}=this;super.update(e),this.lightPositionNode.object3d=t,this.groundColorNode.value.copy(t.groundColor).multiplyScalar(t.intensity)}setup(e){const{colorNode:t,groundColorNode:n,lightDirectionNode:i}=this,o=hs.dot(i).mul(.5).add(.5),a=kn(n,t,o);e.context.irradiance.addAssign(a)}}K("HemisphereLightNode",Rm);jr(vS,Rm);const sb=Y(s=>{const e=s.uv.mul(2),t=e.x.floor(),n=e.y.floor();return t.add(n).mod(2).sign()});class Cm extends _t{constructor(e=Ri()){super("float"),this.uvNode=e}setup(){return sb({uv:this.uvNode})}}const rb=B(Cm);D("checker",rb);K("CheckerNode",Cm);const ob=new ec;class ab extends Zn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.pointWidth=1,this.pointColorNode=null,this.setDefaultValues(ob),this.setupShaders(),this.setValues(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor;this.vertexNode=Y(()=>{It(Le(),"vUv").assign(Ri());const n=mn("instancePosition"),i=rn("vec4","mvPos");i.assign(Fs.mul(Te(n,1)));const r=Mr.z.div(Mr.w),o=Bi.mul(i),a=rn("vec2","offset");return a.assign(Tn.xy),a.assign(a.mul(rw)),a.assign(a.div(Mr.z)),a.y.assign(a.y.mul(r)),a.assign(a.mul(o.w)),o.assign(o.add(Te(a,0,0))),o})(),this.fragmentNode=Y(()=>{const n=It(Le(),"vUv"),i=rn("float","alpha");i.assign(1);const r=n.x,o=n.y,a=r.mul(r).add(o.mul(o));if(e){const l=rn("float","dlen");l.assign(a.fwidth()),i.assign(Wi(l.oneMinus(),l.add(1),a).oneMinus())}else a.greaterThan(1).discard();let c;return this.pointColorNode?c=this.pointColorNode:t?c=mn("instanceColor").mul(bo):c=bo,Te(c,i)})(),this.needsUpdate=!0}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.setupShaders())}}Rn("InstancedPointsNodeMaterial",ab);const cb=new Qa;class lb extends Zn{constructor(e){super(),this.isLineBasicNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(cb),this.setValues(e)}}Rn("LineBasicNodeMaterial",lb);const ub=new cp;class hb extends Zn{constructor(e){super(),this.isLineDashedNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(ub),this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setupVariants(){const e=this.offsetNode,t=this.dashScaleNode?w(this.dashScaleNode):jl,n=this.dashSizeNode?w(this.dashSizeNode):m0,i=this.dashSizeNode?w(this.dashGapNode):g0;yr.assign(n),Ua.assign(i);const r=It(mn("lineDistance").mul(t));(e?r.add(e):r).mod(yr.add(Ua)).greaterThan(yr).discard()}}Rn("LineDashedNodeMaterial",hb);const db=new cp;class fb extends Zn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.setDefaultValues(db),this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.useDash=e.dashed,this.useWorldUnits=!1,this.dashOffset=0,this.lineWidth=1,this.lineColorNode=null,this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setupShaders(),this.setValues(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor,n=this.dashed,i=this.worldUnits,r=Y(({start:a,end:c})=>{const l=Bi.element(2).element(2),d=Bi.element(3).element(2).mul(-.5).div(l).sub(a.z).div(c.z.sub(a.z));return Te(kn(a.xyz,c.xyz,d),c.w)});this.vertexNode=Y(()=>{xi("vec2","vUv").assign(Ri());const a=mn("instanceStart"),c=mn("instanceEnd"),l=rn("vec4","start"),u=rn("vec4","end");l.assign(Fs.mul(Te(a,1))),u.assign(Fs.mul(Te(c,1))),i&&(xi("vec3","worldStart").assign(l.xyz),xi("vec3","worldEnd").assign(u.xyz));const h=Mr.z.div(Mr.w),d=Bi.element(2).element(3).equal(-1);Qe(d,()=>{Qe(l.z.lessThan(0).and(u.z.greaterThan(0)),()=>{u.assign(r({start:l,end:u}))}).elseif(u.z.lessThan(0).and(l.z.greaterThanEqual(0)),()=>{l.assign(r({start:u,end:l}))})});const f=Bi.mul(l),g=Bi.mul(u),_=f.xyz.div(f.w),m=g.xyz.div(g.w),p=m.xy.sub(_.xy).temp();p.x.assign(p.x.mul(h)),p.assign(p.normalize());const S=Ao(Te());if(i){const x=u.xyz.sub(l.xyz).normalize(),E=kn(l.xyz,u.xyz,.5).normalize(),P=x.cross(E).normalize(),R=x.cross(P),N=xi("vec4","worldPos");N.assign(Tn.y.lessThan(.5).cond(l,u));const V=ml.mul(.5);N.addAssign(Te(Tn.x.lessThan(0).cond(P.mul(V),P.mul(V).negate()),0)),n||(N.addAssign(Te(Tn.y.lessThan(.5).cond(x.mul(V).negate(),x.mul(V)),0)),N.addAssign(Te(R.mul(V),0)),Qe(Tn.y.greaterThan(1).or(Tn.y.lessThan(0)),()=>{N.subAssign(Te(R.mul(2).mul(V),0))})),S.assign(Bi.mul(N));const T=Ao(F());T.assign(Tn.y.lessThan(.5).cond(_,m)),S.z.assign(T.z.mul(S.w))}else{const x=rn("vec2","offset");x.assign(Le(p.y,p.x.negate())),p.x.assign(p.x.div(h)),x.x.assign(x.x.div(h)),x.assign(Tn.x.lessThan(0).cond(x.negate(),x)),Qe(Tn.y.lessThan(0),()=>{x.assign(x.sub(p))}).elseif(Tn.y.greaterThan(1),()=>{x.assign(x.add(p))}),x.assign(x.mul(ml)),x.assign(x.div(Mr.w)),S.assign(Tn.y.lessThan(.5).cond(f,g)),x.assign(x.mul(S.w)),S.assign(S.add(Te(x,0,0)))}return S})();const o=Y(({p1:a,p2:c,p3:l,p4:u})=>{const h=a.sub(l),d=u.sub(l),f=c.sub(a),g=h.dot(d),_=d.dot(f),m=h.dot(f),p=d.dot(d),x=f.dot(f).mul(p).sub(_.mul(_)),P=g.mul(_).sub(m.mul(p)).div(x).clamp(),R=g.add(_.mul(P)).div(p).clamp();return Le(P,R)});this.fragmentNode=Y(()=>{const a=xi("vec2","vUv");if(n){const u=this.offsetNode?w(this.offsetNodeNode):Zd,h=this.dashScaleNode?w(this.dashScaleNode):jl,d=this.dashSizeNode?w(this.dashSizeNode):m0,f=this.dashSizeNode?w(this.dashGapNode):g0;yr.assign(d),Ua.assign(f);const g=mn("instanceDistanceStart"),_=mn("instanceDistanceEnd"),m=Tn.y.lessThan(.5).cond(h.mul(g),jl.mul(_)),p=It(m.add(Zd)),S=u?p.add(u):p;a.y.lessThan(-1).or(a.y.greaterThan(1)).discard(),S.mod(yr.add(Ua)).greaterThan(yr).discard()}const c=rn("float","alpha");if(c.assign(1),i){const u=xi("vec3","worldStart"),h=xi("vec3","worldEnd"),d=xi("vec4","worldPos").xyz.normalize().mul(1e5),f=h.sub(u),g=o({p1:u,p2:h,p3:F(0,0,0),p4:d}),_=u.add(f.mul(g.x)),m=d.mul(g.y),x=_.sub(m).length().div(ml);if(!n)if(e){const E=x.fwidth();c.assign(Wi(E.negate().add(.5),E.add(.5),x).oneMinus())}else x.greaterThan(.5).discard()}else if(e){const u=a.x,h=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1)),d=u.mul(u).add(h.mul(h)),f=rn("float","dlen");f.assign(d.fwidth()),Qe(a.y.abs().greaterThan(1),()=>{c.assign(Wi(f.oneMinus(),f.add(1),d).oneMinus())})}else Qe(a.y.abs().greaterThan(1),()=>{const u=a.x,h=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1));u.mul(u).add(h.mul(h)).greaterThan(1).discard()});let l;if(this.lineColorNode)l=this.lineColorNode;else if(t){const u=mn("instanceColorStart"),h=mn("instanceColorEnd");l=Tn.y.lessThan(.5).cond(u,h).mul(bo)}else l=bo;return Te(l,c)})(),this.needsUpdate=!0}get worldUnits(){return this.useWorldUnits}set worldUnits(e){this.useWorldUnits!==e&&(this.useWorldUnits=e,this.setupShaders())}get dashed(){return this.useDash}set dashed(e){this.useDash!==e&&(this.useDash=e,this.setupShaders())}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.setupShaders())}}Rn("Line2NodeMaterial",fb);const pb=new sS;class mb extends Zn{constructor(e){super(),this.isMeshNormalNodeMaterial=!0,this.colorSpaced=!1,this.setDefaultValues(pb),this.setValues(e)}setupDiffuseColor(){const e=this.opacityNode?w(this.opacityNode):p0;nn.assign(Te(j0(Ot),e))}}Rn("MeshNormalNodeMaterial",mb);const gb=new jn;class _b extends Zn{constructor(e){super(),this.isMeshBasicNodeMaterial=!0,this.lights=!1,this.setDefaultValues(gb),this.setValues(e)}}Rn("MeshBasicNodeMaterial",_b);const Co=Y(({f0:s,f90:e,dotVH:t})=>{const n=t.mul(-5.55473).sub(6.98316).mul(t).exp2();return s.mul(n.oneMinus()).add(e.mul(n))}),Ha=Y(s=>s.diffuseColor.mul(1/Math.PI)),xb=()=>w(.25),vb=Y(({dotNH:s})=>Wl.mul(.5/Math.PI).add(1).mul(s.pow(Wl))),yb=Y(({lightDirection:s})=>{const e=s.add(kt).normalize(),t=Ot.dot(e).clamp(),n=kt.dot(e).clamp(),i=Co({f0:Fi,f90:1,dotVH:n}),r=xb(),o=vb({dotNH:t});return i.mul(r).mul(o)});class Lm extends qp{constructor(e=!0){super(),this.specular=e}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const r=Ot.dot(e).clamp().mul(t);n.directDiffuse.addAssign(r.mul(Ha({diffuseColor:nn.rgb}))),this.specular===!0&&n.directSpecular.addAssign(r.mul(yb({lightDirection:e})).mul(q1))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(Ha({diffuseColor:nn})))}}const Mb=new rS;class Tb extends Zn{constructor(e){super(),this.isMeshLambertNodeMaterial=!0,this.lights=!0,this.setDefaultValues(Mb),this.setValues(e)}setupLightingModel(){return new Lm(!1)}}Rn("MeshLambertNodeMaterial",Tb);const Sb=new iS;class Eb extends Zn{constructor(e){super(),this.isMeshPhongNodeMaterial=!0,this.lights=!0,this.shininessNode=null,this.specularNode=null,this.setDefaultValues(Sb),this.setValues(e)}setupLightingModel(){return new Lm}setupVariants(){const e=(this.shininessNode?w(this.shininessNode):G1).max(1e-4);Wl.assign(e);const t=this.specularNode||X1;Fi.assign(t)}copy(e){return this.shininessNode=e.shininessNode,this.specularNode=e.specularNode,super.copy(e)}}Rn("MeshPhongNodeMaterial",Eb);const Ab=Y(()=>{const s=Fa.dFdx().abs().max(Fa.dFdy().abs());return s.x.max(s.y).max(s.z)}),wb=Y(s=>{const{roughness:e}=s,t=Ab();let n=e.max(.0525);return n=n.add(t),n=n.min(1),n}),Nb=Y(s=>{const{alpha:e,dotNL:t,dotNV:n}=s,i=e.pow2(),r=t.mul(i.add(i.oneMinus().mul(n.pow2())).sqrt()),o=n.mul(i.add(i.oneMinus().mul(t.pow2())).sqrt());return Or(.5,r.add(o).max(e0))}).setLayout({name:"V_GGX_SmithCorrelated",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNL",type:"float"},{name:"dotNV",type:"float"}]}),bb=Y(({alpha:s,dotNH:e})=>{const t=s.pow2(),n=e.pow2().mul(t.oneMinus()).oneMinus();return t.div(n.pow2()).mul(1/Math.PI)}).setLayout({name:"D_GGX",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNH",type:"float"}]}),vf=Y(s=>{const{lightDirection:e,f0:t,f90:n,roughness:i,iridescenceFresnel:r}=s,o=s.normalView||Ot,a=i.pow2(),c=e.add(kt).normalize(),l=o.dot(e).clamp(),u=o.dot(kt).clamp(),h=o.dot(c).clamp(),d=kt.dot(c).clamp();let f=Co({f0:t,f90:n,dotVH:d});r&&(f=Au.mix(f,r));const g=Nb({alpha:a,dotNL:l,dotNV:u}),_=bb({alpha:a,dotNH:h});return f.mul(g).mul(_)}),Im=Y(({roughness:s,dotNV:e})=>{const t=Te(-1,-.0275,-.572,.022),n=Te(1,.0425,1.04,-.04),i=s.mul(t).add(n),r=i.x.mul(i.x).min(e.mul(-9.28).exp2()).mul(i.x).add(i.y);return Le(-1.04,1.04).mul(r).add(i.zw)}).setLayout({name:"DFGApprox",type:"vec2",inputs:[{name:"roughness",type:"float"},{name:"dotNV",type:"vec3"}]}),Rb=Y(s=>{const{dotNV:e,specularColor:t,specularF90:n,roughness:i}=s,r=Im({dotNV:e,roughness:i});return t.mul(r.x).add(n.mul(r.y))}),Cb=Y(({f:s,f90:e,dotVH:t})=>{const n=t.oneMinus().saturate(),i=n.mul(n),r=n.mul(i,i).clamp(0,.9999);return s.sub(F(e).mul(r)).div(r.oneMinus())}).setLayout({name:"Schlick_to_F0",type:"vec3",inputs:[{name:"f",type:"vec3"},{name:"f90",type:"float"},{name:"dotVH",type:"float"}]}),Lb=Y(({roughness:s,dotNH:e})=>{const t=s.pow2(),n=w(1).div(t),r=e.pow2().oneMinus().max(.0078125);return w(2).add(n).mul(r.pow(n.mul(.5))).div(2*Math.PI)}).setLayout({name:"D_Charlie",type:"float",inputs:[{name:"roughness",type:"float"},{name:"dotNH",type:"float"}]}),Ib=Y(({dotNV:s,dotNL:e})=>w(1).div(w(4).mul(e.add(s).sub(e.mul(s))))).setLayout({name:"V_Neubelt",type:"float",inputs:[{name:"dotNV",type:"float"},{name:"dotNL",type:"float"}]}),Pb=Y(({lightDirection:s})=>{const e=s.add(kt).normalize(),t=Ot.dot(s).clamp(),n=Ot.dot(kt).clamp(),i=Ot.dot(e).clamp(),r=Lb({roughness:Eu,dotNH:i}),o=Ib({dotNV:n,dotNL:t});return dr.mul(r).mul(o)}),Db=hi(3.2404542,-.969266,.0556434,-1.5371385,1.8760108,-.2040259,-.4985314,.041556,1.0572252),Ub=s=>{const e=s.sqrt();return F(1).add(e).div(F(1).sub(e))},yf=(s,e)=>s.sub(e).div(s.add(e)).pow2(),Ob=(s,e)=>{const t=s.mul(2*Math.PI*1e-9),n=F(54856e-17,44201e-17,52481e-17),i=F(1681e3,1795300,2208400),r=F(43278e5,93046e5,66121e5),o=w(9747e-17*Math.sqrt(2*Math.PI*45282e5)).mul(t.mul(2239900).add(e.x).cos()).mul(t.pow2().mul(-45282e5).exp());let a=n.mul(r.mul(2*Math.PI).sqrt()).mul(i.mul(t).add(e).cos()).mul(t.pow2().negate().mul(r).exp());return a=F(a.x.add(o),a.y,a.z).div(10685e-11),Db.mul(a)},Fb=Y(({outsideIOR:s,eta2:e,cosTheta1:t,thinFilmThickness:n,baseF0:i})=>{const r=kn(s,e,Wi(0,.03,n)),o=s.div(r).pow2().mul(w(1).sub(t.pow2())),c=w(1).sub(o).sqrt(),l=yf(r,s),u=Co({f0:l,f90:1,dotVH:t}),h=u.oneMinus(),d=r.lessThan(s).cond(Math.PI,0),f=w(Math.PI).sub(d),g=Ub(i.clamp(0,.9999)),_=yf(g,r.vec3()),m=Co({f0:_,f90:1,dotVH:c}),p=F(g.x.lessThan(r).cond(Math.PI,0),g.y.lessThan(r).cond(Math.PI,0),g.z.lessThan(r).cond(Math.PI,0)),S=r.mul(n,c,2),x=F(f).add(p),E=u.mul(m).clamp(1e-5,.9999),P=E.sqrt(),R=h.pow2().mul(m).div(F(1).sub(E));let V=u.add(R),T=R.sub(h);for(let y=1;y<=2;++y){T=T.mul(P);const k=Ob(w(y).mul(S),w(y).mul(x)).mul(2);V=V.add(T.mul(k))}return V.max(F(0))}).setLayout({name:"evalIridescence",type:"vec3",inputs:[{name:"outsideIOR",type:"float"},{name:"eta2",type:"float"},{name:"cosTheta1",type:"float"},{name:"thinFilmThickness",type:"float"},{name:"baseF0",type:"vec3"}]}),Vb=Y(({normal:s,viewDir:e,roughness:t})=>{const n=s.dot(e).saturate(),i=t.pow2(),r=On(t.lessThan(.25),w(-339.2).mul(i).add(w(161.4).mul(t)).sub(25.9),w(-8.48).mul(i).add(w(14.3).mul(t)).sub(9.95)),o=On(t.lessThan(.25),w(44).mul(i).sub(w(23.7).mul(t)).add(3.26),w(1.97).mul(i).sub(w(3.27).mul(t)).add(.72));return On(t.lessThan(.25),0,w(.1).mul(t).sub(.025)).add(r.mul(n).add(o).exp()).mul(1/Math.PI).saturate()}),bl=F(.04),Rl=F(1);class Ou extends qp{constructor(e=!1,t=!1,n=!1){super(),this.clearcoat=e,this.sheen=t,this.iridescence=n,this.clearcoatRadiance=null,this.clearcoatSpecularDirect=null,this.clearcoatSpecularIndirect=null,this.sheenSpecularDirect=null,this.sheenSpecularIndirect=null,this.iridescenceFresnel=null,this.iridescenceF0=null}start(){if(this.clearcoat===!0&&(this.clearcoatRadiance=F().temp("clearcoatRadiance"),this.clearcoatSpecularDirect=F().temp("clearcoatSpecularDirect"),this.clearcoatSpecularIndirect=F().temp("clearcoatSpecularIndirect")),this.sheen===!0&&(this.sheenSpecularDirect=F().temp("sheenSpecularDirect"),this.sheenSpecularIndirect=F().temp("sheenSpecularIndirect")),this.iridescence===!0){const e=Ot.dot(kt).clamp();this.iridescenceFresnel=Fb({outsideIOR:w(1),eta2:jp,cosTheta1:e,thinFilmThickness:Kp,baseF0:Fi}),this.iridescenceF0=Cb({f:this.iridescenceFresnel,f90:1,dotVH:e})}}computeMultiscattering(e,t,n=w(1)){const i=Ot.dot(kt).clamp(),r=Im({roughness:yo,dotNV:i}),a=(this.iridescenceF0?Au.mix(Fi,this.iridescenceF0):Fi).mul(r.x).add(n.mul(r.y)),l=r.x.add(r.y).oneMinus(),u=Fi.add(Fi.oneMinus().mul(.047619)),h=a.mul(u).div(l.mul(u).oneMinus());e.addAssign(a),t.addAssign(h.mul(l))}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const r=Ot.dot(e).clamp().mul(t);if(this.sheen===!0&&this.sheenSpecularDirect.addAssign(r.mul(Pb({lightDirection:e}))),this.clearcoat===!0){const a=fr.dot(e).clamp().mul(t);this.clearcoatSpecularDirect.addAssign(a.mul(vf({lightDirection:e,f0:bl,f90:Rl,roughness:Da,normalView:fr})))}n.directDiffuse.addAssign(r.mul(Ha({diffuseColor:nn.rgb}))),n.directSpecular.addAssign(r.mul(vf({lightDirection:e,f0:Fi,f90:1,roughness:yo,iridescence:this.iridescence,iridescenceFresnel:this.iridescenceFresnel})))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(Ha({diffuseColor:nn})))}indirectSpecular({radiance:e,iblIrradiance:t,reflectedLight:n}){if(this.sheen===!0&&this.sheenSpecularIndirect.addAssign(t.mul(dr,Vb({normal:Ot,viewDir:kt,roughness:Eu}))),this.clearcoat===!0){const l=fr.dot(kt).clamp(),u=Rb({dotNV:l,specularColor:bl,specularF90:Rl,roughness:Da});this.clearcoatSpecularIndirect.addAssign(this.clearcoatRadiance.mul(u))}const i=F().temp("singleScattering"),r=F().temp("multiScattering"),o=t.mul(1/Math.PI);this.computeMultiscattering(i,r);const a=i.add(r),c=nn.mul(a.r.max(a.g).max(a.b).oneMinus());n.indirectSpecular.addAssign(e.mul(i)),n.indirectSpecular.addAssign(r.mul(o)),n.indirectDiffuse.addAssign(c.mul(o))}ambientOcclusion({ambientOcclusion:e,reflectedLight:t}){const i=Ot.dot(kt).clamp().add(e),r=yo.mul(-16).oneMinus().negate().exp2(),o=e.sub(i.pow(r).oneMinus()).clamp();this.clearcoat===!0&&this.clearcoatSpecularIndirect.mulAssign(e),this.sheen===!0&&this.sheenSpecularIndirect.mulAssign(e),t.indirectDiffuse.mulAssign(e),t.indirectSpecular.mulAssign(o)}finish(e){const{outgoingLight:t}=e;if(this.clearcoat===!0){const n=fr.dot(kt).clamp(),i=Co({dotVH:n,f0:bl,f90:Rl}),r=t.mul(Gl.mul(i).oneMinus()).add(this.clearcoatSpecularDirect.add(this.clearcoatSpecularIndirect).mul(Gl));t.assign(r)}if(this.sheen===!0){const n=dr.r.max(dr.g).max(dr.b).mul(.157).oneMinus(),i=t.mul(n).add(this.sheenSpecularDirect,this.sheenSpecularIndirect);t.assign(i)}}}const Bb=new Br;class Pm extends Zn{constructor(e){super(),this.isMeshStandardNodeMaterial=!0,this.emissiveNode=null,this.metalnessNode=null,this.roughnessNode=null,this.setDefaultValues(Bb),this.setValues(e)}setupLightingModel(){return new Ou}setupVariants(){const e=this.metalnessNode?w(this.metalnessNode):j1;AA.assign(e);let t=this.roughnessNode?w(this.roughnessNode):Y1;t=wb({roughness:t}),yo.assign(t);const n=kn(F(.04),nn.rgb,e);Fi.assign(n),nn.assign(Te(nn.rgb.mul(e.oneMinus()),nn.a))}copy(e){return this.emissiveNode=e.emissiveNode,this.metalnessNode=e.metalnessNode,this.roughnessNode=e.roughnessNode,super.copy(e)}}Rn("MeshStandardNodeMaterial",Pm);const zb=new Ni;class Dm extends Pm{constructor(e){super(),this.isMeshPhysicalNodeMaterial=!0,this.clearcoatNode=null,this.clearcoatRoughnessNode=null,this.clearcoatNormalNode=null,this.sheenNode=null,this.sheenRoughnessNode=null,this.iridescenceNode=null,this.iridescenceIORNode=null,this.iridescenceThicknessNode=null,this.specularIntensityNode=null,this.specularColorNode=null,this.transmissionNode=null,this.thicknessNode=null,this.attenuationDistanceNode=null,this.attenuationColorNode=null,this.setDefaultValues(zb),this.setValues(e)}get useClearcoat(){return this.clearcoat>0||this.clearcoatNode!==null}get useIridescence(){return this.iridescence>0||this.iridescenceNode!==null}get useSheen(){return this.sheen>0||this.sheenNode!==null}setupLightingModel(){return new Ou(this.useClearcoat,this.useSheen,this.useIridescence)}setupVariants(e){if(super.setupVariants(e),this.useClearcoat){const t=this.clearcoatNode?w(this.clearcoatNode):$1,n=this.clearcoatRoughnessNode?w(this.clearcoatRoughnessNode):Z1;Gl.assign(t),Da.assign(n)}if(this.useSheen){const t=this.sheenNode?F(this.sheenNode):ew,n=this.sheenRoughnessNode?w(this.sheenRoughnessNode):tw;dr.assign(t),Eu.assign(n)}if(this.useIridescence){const t=this.iridescenceNode?w(this.iridescenceNode):nw,n=this.iridescenceIORNode?w(this.iridescenceIORNode):iw,i=this.iridescenceThicknessNode?w(this.iridescenceThicknessNode):sw;Au.assign(t),jp.assign(n),Kp.assign(i)}}setupNormal(e){super.setupNormal(e);const t=this.clearcoatNormalNode?F(this.clearcoatNormalNode):J1;fr.assign(t)}copy(e){return this.clearcoatNode=e.clearcoatNode,this.clearcoatRoughnessNode=e.clearcoatRoughnessNode,this.clearcoatNormalNode=e.clearcoatNormalNode,this.sheenNode=e.sheenNode,this.sheenRoughnessNode=e.sheenRoughnessNode,this.iridescenceNode=e.iridescenceNode,this.iridescenceIORNode=e.iridescenceIORNode,this.iridescenceThicknessNode=e.iridescenceThicknessNode,this.specularIntensityNode=e.specularIntensityNode,this.specularColorNode=e.specularColorNode,this.transmissionNode=e.transmissionNode,this.thicknessNode=e.thicknessNode,this.attenuationDistanceNode=e.attenuationDistanceNode,this.attenuationColorNode=e.attenuationColorNode,super.copy(e)}}Rn("MeshPhysicalNodeMaterial",Dm);class kb extends Ou{constructor(e,t,n,i){super(e,t,n),this.useSSS=i}direct({lightDirection:e,lightColor:t,reflectedLight:n},i,r){if(this.useSSS===!0){const o=r.material,{thicknessColorNode:a,thicknessDistortionNode:c,thicknessAmbientNode:l,thicknessAttenuationNode:u,thicknessPowerNode:h,thicknessScaleNode:d}=o,f=e.add(Ot.mul(c)).normalize(),g=w(kt.dot(f.negate()).saturate().pow(h).mul(d)),_=F(g.add(l).mul(a));n.directDiffuse.addAssign(_.mul(u.mul(t)))}super.direct({lightDirection:e,lightColor:t,reflectedLight:n},i,r)}}class Hb extends Dm{constructor(e){super(e),this.thicknessColorNode=null,this.thicknessDistortionNode=w(.1),this.thicknessAmbientNode=w(0),this.thicknessAttenuationNode=w(.1),this.thicknessPowerNode=w(2),this.thicknessScaleNode=w(10)}get useSSS(){return this.thicknessColorNode!==null}setupLightingModel(){return new kb(this.useClearcoat,this.useSheen,this.useIridescence,this.useSSS)}copy(e){return this.thicknessColorNode=e.thicknessColorNode,this.thicknessDistortionNode=e.thicknessDistortionNode,this.thicknessAmbientNode=e.thicknessAmbientNode,this.thicknessAttenuationNode=e.thicknessAttenuationNode,this.thicknessPowerNode=e.thicknessPowerNode,this.thicknessScaleNode=e.thicknessScaleNode,super.copy(e)}}Rn("MeshSSSNodeMaterial",Hb);const Gb=new ec;class Wb extends Zn{constructor(e){super(),this.isPointsNodeMaterial=!0,this.lights=!1,this.normals=!1,this.transparent=!0,this.sizeNode=null,this.setDefaultValues(Gb),this.setValues(e)}copy(e){return this.sizeNode=e.sizeNode,super.copy(e)}}Rn("PointsNodeMaterial",Wb);const Xb=new uu;class qb extends Zn{constructor(e){super(),this.isSpriteNodeMaterial=!0,this.lights=!1,this.normals=!1,this.positionNode=null,this.rotationNode=null,this.scaleNode=null,this.setDefaultValues(Xb),this.setValues(e)}setupPosition({object:e,context:t}){const{positionNode:n,rotationNode:i,scaleNode:r}=this,o=gn;let a=Fs.mul(F(n||0)),c=Le(Oa[0].xyz.length(),Oa[1].xyz.length());r!==null&&(c=c.mul(r));let l=o.xy;e.center&&e.center.isVector2===!0&&(l=l.sub(yt(e.center).sub(.5))),l=l.mul(c);const u=w(i||Q1),h=l.rotate(u);a=Te(a.xy.add(h),a.zw);const d=Bi.mul(a);return t.vertex=o,d}copy(e){return this.positionNode=e.positionNode,this.rotationNode=e.rotationNode,this.scaleNode=e.scaleNode,super.copy(e)}}Rn("SpriteNodeMaterial",qb);const Tr=Y(([s,e,t])=>{const n=w(t).toVar(),i=w(e).toVar(),r=Os(s).toVar();return On(r,i,n)}),Lo=Y(([s,e])=>{const t=Os(e).toVar(),n=w(s).toVar();return On(t,n.negate(),n)}),Pt=Y(([s])=>{const e=w(s).toVar();return C(Wr(e))}),At=Y(([s,e])=>{const t=w(s).toVar();return e.assign(Pt(t)),t.sub(w(e))}),Um=Y(([s,e,t,n,i,r])=>{const o=w(r).toVar(),a=w(i).toVar(),c=w(n).toVar(),l=w(t).toVar(),u=w(e).toVar(),h=w(s).toVar(),d=w(Ft(1,a)).toVar();return Ft(1,o).mul(h.mul(d).add(u.mul(a))).add(o.mul(l.mul(d).add(c.mul(a))))}),Om=Y(([s,e,t,n,i,r])=>{const o=w(r).toVar(),a=w(i).toVar(),c=F(n).toVar(),l=F(t).toVar(),u=F(e).toVar(),h=F(s).toVar(),d=w(Ft(1,a)).toVar();return Ft(1,o).mul(h.mul(d).add(u.mul(a))).add(o.mul(l.mul(d).add(c.mul(a))))}),Fm=Jn([Um,Om]),Vm=Y(([s,e,t,n,i,r,o,a,c,l,u])=>{const h=w(u).toVar(),d=w(l).toVar(),f=w(c).toVar(),g=w(a).toVar(),_=w(o).toVar(),m=w(r).toVar(),p=w(i).toVar(),S=w(n).toVar(),x=w(t).toVar(),E=w(e).toVar(),P=w(s).toVar(),R=w(Ft(1,f)).toVar(),N=w(Ft(1,d)).toVar();return w(Ft(1,h)).toVar().mul(N.mul(P.mul(R).add(E.mul(f))).add(d.mul(x.mul(R).add(S.mul(f))))).add(h.mul(N.mul(p.mul(R).add(m.mul(f))).add(d.mul(_.mul(R).add(g.mul(f))))))}),Bm=Y(([s,e,t,n,i,r,o,a,c,l,u])=>{const h=w(u).toVar(),d=w(l).toVar(),f=w(c).toVar(),g=F(a).toVar(),_=F(o).toVar(),m=F(r).toVar(),p=F(i).toVar(),S=F(n).toVar(),x=F(t).toVar(),E=F(e).toVar(),P=F(s).toVar(),R=w(Ft(1,f)).toVar(),N=w(Ft(1,d)).toVar();return w(Ft(1,h)).toVar().mul(N.mul(P.mul(R).add(E.mul(f))).add(d.mul(x.mul(R).add(S.mul(f))))).add(h.mul(N.mul(p.mul(R).add(m.mul(f))).add(d.mul(_.mul(R).add(g.mul(f))))))}),zm=Jn([Vm,Bm]),km=Y(([s,e,t])=>{const n=w(t).toVar(),i=w(e).toVar(),r=he(s).toVar(),o=he(r.bitAnd(he(7))).toVar(),a=w(Tr(o.lessThan(he(4)),i,n)).toVar(),c=w(nt(2,Tr(o.lessThan(he(4)),n,i))).toVar();return Lo(a,Os(o.bitAnd(he(1)))).add(Lo(c,Os(o.bitAnd(he(2)))))}),Hm=Y(([s,e,t,n])=>{const i=w(n).toVar(),r=w(t).toVar(),o=w(e).toVar(),a=he(s).toVar(),c=he(a.bitAnd(he(15))).toVar(),l=w(Tr(c.lessThan(he(8)),o,r)).toVar(),u=w(Tr(c.lessThan(he(4)),r,Tr(c.equal(he(12)).or(c.equal(he(14))),o,i))).toVar();return Lo(l,Os(c.bitAnd(he(1)))).add(Lo(u,Os(c.bitAnd(he(2)))))}),tn=Jn([km,Hm]),Gm=Y(([s,e,t])=>{const n=w(t).toVar(),i=w(e).toVar(),r=Fo(s).toVar();return F(tn(r.x,i,n),tn(r.y,i,n),tn(r.z,i,n))}),Wm=Y(([s,e,t,n])=>{const i=w(n).toVar(),r=w(t).toVar(),o=w(e).toVar(),a=Fo(s).toVar();return F(tn(a.x,o,r,i),tn(a.y,o,r,i),tn(a.z,o,r,i))}),qn=Jn([Gm,Wm]),Xm=Y(([s])=>{const e=w(s).toVar();return nt(.6616,e)}),qm=Y(([s])=>{const e=w(s).toVar();return nt(.982,e)}),Ym=Y(([s])=>{const e=F(s).toVar();return nt(.6616,e)}),jm=Jn([Xm,Ym]),Km=Y(([s])=>{const e=F(s).toVar();return nt(.982,e)}),$m=Jn([qm,Km]),Sn=Y(([s,e])=>{const t=C(e).toVar(),n=he(s).toVar();return n.shiftLeft(t).bitOr(n.shiftRight(C(32).sub(t)))}),Zm=Y(([s,e,t])=>{s.subAssign(t),s.bitXorAssign(Sn(t,C(4))),t.addAssign(e),e.subAssign(s),e.bitXorAssign(Sn(s,C(6))),s.addAssign(t),t.subAssign(e),t.bitXorAssign(Sn(e,C(8))),e.addAssign(s),s.subAssign(t),s.bitXorAssign(Sn(t,C(16))),t.addAssign(e),e.subAssign(s),e.bitXorAssign(Sn(s,C(19))),s.addAssign(t),t.subAssign(e),t.bitXorAssign(Sn(e,C(4))),e.addAssign(s)}),Kr=Y(([s,e,t])=>{const n=he(t).toVar(),i=he(e).toVar(),r=he(s).toVar();return n.bitXorAssign(i),n.subAssign(Sn(i,C(14))),r.bitXorAssign(n),r.subAssign(Sn(n,C(11))),i.bitXorAssign(r),i.subAssign(Sn(r,C(25))),n.bitXorAssign(i),n.subAssign(Sn(i,C(16))),r.bitXorAssign(n),r.subAssign(Sn(n,C(4))),i.bitXorAssign(r),i.subAssign(Sn(r,C(14))),n.bitXorAssign(i),n.subAssign(Sn(i,C(24))),n}),an=Y(([s])=>{const e=he(s).toVar();return w(e).div(w(he(C(4294967295))))}),ui=Y(([s])=>{const e=w(s).toVar();return e.mul(e.mul(e.mul(e.mul(e.mul(6).sub(15)).add(10))))}),Jm=Y(([s])=>{const e=C(s).toVar(),t=he(he(1)).toVar(),n=he(he(C(3735928559)).add(t.shiftLeft(he(2)).add(he(13)))).toVar();return Kr(n.add(he(e)),n,n)}),Qm=Y(([s,e])=>{const t=C(e).toVar(),n=C(s).toVar(),i=he(he(2)).toVar(),r=he().toVar(),o=he().toVar(),a=he().toVar();return r.assign(o.assign(a.assign(he(C(3735928559)).add(i.shiftLeft(he(2)).add(he(13)))))),r.addAssign(he(n)),o.addAssign(he(t)),Kr(r,o,a)}),eg=Y(([s,e,t])=>{const n=C(t).toVar(),i=C(e).toVar(),r=C(s).toVar(),o=he(he(3)).toVar(),a=he().toVar(),c=he().toVar(),l=he().toVar();return a.assign(c.assign(l.assign(he(C(3735928559)).add(o.shiftLeft(he(2)).add(he(13)))))),a.addAssign(he(r)),c.addAssign(he(i)),l.addAssign(he(n)),Kr(a,c,l)}),tg=Y(([s,e,t,n])=>{const i=C(n).toVar(),r=C(t).toVar(),o=C(e).toVar(),a=C(s).toVar(),c=he(he(4)).toVar(),l=he().toVar(),u=he().toVar(),h=he().toVar();return l.assign(u.assign(h.assign(he(C(3735928559)).add(c.shiftLeft(he(2)).add(he(13)))))),l.addAssign(he(a)),u.addAssign(he(o)),h.addAssign(he(r)),Zm(l,u,h),l.addAssign(he(i)),Kr(l,u,h)}),ng=Y(([s,e,t,n,i])=>{const r=C(i).toVar(),o=C(n).toVar(),a=C(t).toVar(),c=C(e).toVar(),l=C(s).toVar(),u=he(he(5)).toVar(),h=he().toVar(),d=he().toVar(),f=he().toVar();return h.assign(d.assign(f.assign(he(C(3735928559)).add(u.shiftLeft(he(2)).add(he(13)))))),h.addAssign(he(l)),d.addAssign(he(c)),f.addAssign(he(a)),Zm(h,d,f),h.addAssign(he(o)),d.addAssign(he(r)),Kr(h,d,f)}),ct=Jn([Jm,Qm,eg,tg,ng]),ig=Y(([s,e])=>{const t=C(e).toVar(),n=C(s).toVar(),i=he(ct(n,t)).toVar(),r=Fo().toVar();return r.x.assign(i.bitAnd(C(255))),r.y.assign(i.shiftRight(C(8)).bitAnd(C(255))),r.z.assign(i.shiftRight(C(16)).bitAnd(C(255))),r}),sg=Y(([s,e,t])=>{const n=C(t).toVar(),i=C(e).toVar(),r=C(s).toVar(),o=he(ct(r,i,n)).toVar(),a=Fo().toVar();return a.x.assign(o.bitAnd(C(255))),a.y.assign(o.shiftRight(C(8)).bitAnd(C(255))),a.z.assign(o.shiftRight(C(16)).bitAnd(C(255))),a}),Yn=Jn([ig,sg]),rg=Y(([s])=>{const e=Le(s).toVar(),t=C().toVar(),n=C().toVar(),i=w(At(e.x,t)).toVar(),r=w(At(e.y,n)).toVar(),o=w(ui(i)).toVar(),a=w(ui(r)).toVar(),c=w(Fm(tn(ct(t,n),i,r),tn(ct(t.add(C(1)),n),i.sub(1),r),tn(ct(t,n.add(C(1))),i,r.sub(1)),tn(ct(t.add(C(1)),n.add(C(1))),i.sub(1),r.sub(1)),o,a)).toVar();return jm(c)}),og=Y(([s])=>{const e=F(s).toVar(),t=C().toVar(),n=C().toVar(),i=C().toVar(),r=w(At(e.x,t)).toVar(),o=w(At(e.y,n)).toVar(),a=w(At(e.z,i)).toVar(),c=w(ui(r)).toVar(),l=w(ui(o)).toVar(),u=w(ui(a)).toVar(),h=w(zm(tn(ct(t,n,i),r,o,a),tn(ct(t.add(C(1)),n,i),r.sub(1),o,a),tn(ct(t,n.add(C(1)),i),r,o.sub(1),a),tn(ct(t.add(C(1)),n.add(C(1)),i),r.sub(1),o.sub(1),a),tn(ct(t,n,i.add(C(1))),r,o,a.sub(1)),tn(ct(t.add(C(1)),n,i.add(C(1))),r.sub(1),o,a.sub(1)),tn(ct(t,n.add(C(1)),i.add(C(1))),r,o.sub(1),a.sub(1)),tn(ct(t.add(C(1)),n.add(C(1)),i.add(C(1))),r.sub(1),o.sub(1),a.sub(1)),c,l,u)).toVar();return $m(h)}),Yb=Jn([rg,og]),ag=Y(([s])=>{const e=Le(s).toVar(),t=C().toVar(),n=C().toVar(),i=w(At(e.x,t)).toVar(),r=w(At(e.y,n)).toVar(),o=w(ui(i)).toVar(),a=w(ui(r)).toVar(),c=F(Fm(qn(Yn(t,n),i,r),qn(Yn(t.add(C(1)),n),i.sub(1),r),qn(Yn(t,n.add(C(1))),i,r.sub(1)),qn(Yn(t.add(C(1)),n.add(C(1))),i.sub(1),r.sub(1)),o,a)).toVar();return jm(c)}),cg=Y(([s])=>{const e=F(s).toVar(),t=C().toVar(),n=C().toVar(),i=C().toVar(),r=w(At(e.x,t)).toVar(),o=w(At(e.y,n)).toVar(),a=w(At(e.z,i)).toVar(),c=w(ui(r)).toVar(),l=w(ui(o)).toVar(),u=w(ui(a)).toVar(),h=F(zm(qn(Yn(t,n,i),r,o,a),qn(Yn(t.add(C(1)),n,i),r.sub(1),o,a),qn(Yn(t,n.add(C(1)),i),r,o.sub(1),a),qn(Yn(t.add(C(1)),n.add(C(1)),i),r.sub(1),o.sub(1),a),qn(Yn(t,n,i.add(C(1))),r,o,a.sub(1)),qn(Yn(t.add(C(1)),n,i.add(C(1))),r.sub(1),o,a.sub(1)),qn(Yn(t,n.add(C(1)),i.add(C(1))),r,o.sub(1),a.sub(1)),qn(Yn(t.add(C(1)),n.add(C(1)),i.add(C(1))),r.sub(1),o.sub(1),a.sub(1)),c,l,u)).toVar();return $m(h)}),jb=Jn([ag,cg]),Kb=Y(([s])=>{const e=w(s).toVar(),t=C(Pt(e)).toVar();return an(ct(t))}),$b=Y(([s])=>{const e=Le(s).toVar(),t=C(Pt(e.x)).toVar(),n=C(Pt(e.y)).toVar();return an(ct(t,n))}),Zb=Y(([s])=>{const e=F(s).toVar(),t=C(Pt(e.x)).toVar(),n=C(Pt(e.y)).toVar(),i=C(Pt(e.z)).toVar();return an(ct(t,n,i))}),Jb=Y(([s])=>{const e=Te(s).toVar(),t=C(Pt(e.x)).toVar(),n=C(Pt(e.y)).toVar(),i=C(Pt(e.z)).toVar(),r=C(Pt(e.w)).toVar();return an(ct(t,n,i,r))}),lg=Y(([s])=>{const e=w(s).toVar(),t=C(Pt(e)).toVar();return F(an(ct(t,C(0))),an(ct(t,C(1))),an(ct(t,C(2))))}),ug=Y(([s])=>{const e=Le(s).toVar(),t=C(Pt(e.x)).toVar(),n=C(Pt(e.y)).toVar();return F(an(ct(t,n,C(0))),an(ct(t,n,C(1))),an(ct(t,n,C(2))))}),hg=Y(([s])=>{const e=F(s).toVar(),t=C(Pt(e.x)).toVar(),n=C(Pt(e.y)).toVar(),i=C(Pt(e.z)).toVar();return F(an(ct(t,n,i,C(0))),an(ct(t,n,i,C(1))),an(ct(t,n,i,C(2))))}),dg=Y(([s])=>{const e=Te(s).toVar(),t=C(Pt(e.x)).toVar(),n=C(Pt(e.y)).toVar(),i=C(Pt(e.z)).toVar(),r=C(Pt(e.w)).toVar();return F(an(ct(t,n,i,r,C(0))),an(ct(t,n,i,r,C(1))),an(ct(t,n,i,r,C(2))))}),fg=Jn([lg,ug,hg,dg]),Ga=Y(([s,e,t,n])=>{const i=w(n).toVar(),r=w(t).toVar(),o=C(e).toVar(),a=F(s).toVar(),c=w(0).toVar(),l=w(1).toVar();return Mt({start:C(0),end:o},({i:u})=>{c.addAssign(l.mul(Yb(a))),l.mulAssign(i),a.mulAssign(r)}),c}),pg=Y(([s,e,t,n])=>{const i=w(n).toVar(),r=w(t).toVar(),o=C(e).toVar(),a=F(s).toVar(),c=F(0).toVar(),l=w(1).toVar();return Mt({start:C(0),end:o},({i:u})=>{c.addAssign(l.mul(jb(a))),l.mulAssign(i),a.mulAssign(r)}),c}),Qb=Y(([s,e,t,n])=>{const i=w(n).toVar(),r=w(t).toVar(),o=C(e).toVar(),a=F(s).toVar();return Le(Ga(a,o,r,i),Ga(a.add(F(C(19),C(193),C(17))),o,r,i))}),eR=Y(([s,e,t,n])=>{const i=w(n).toVar(),r=w(t).toVar(),o=C(e).toVar(),a=F(s).toVar(),c=F(pg(a,o,r,i)).toVar(),l=w(Ga(a.add(F(C(19),C(193),C(17))),o,r,i)).toVar();return Te(c,l)}),mg=Y(([s,e,t,n,i,r,o])=>{const a=C(o).toVar(),c=w(r).toVar(),l=C(i).toVar(),u=C(n).toVar(),h=C(t).toVar(),d=C(e).toVar(),f=Le(s).toVar(),g=F(fg(Le(d.add(u),h.add(l)))).toVar(),_=Le(g.x,g.y).toVar();_.subAssign(.5),_.mulAssign(c),_.addAssign(.5);const m=Le(Le(w(d),w(h)).add(_)).toVar(),p=Le(m.sub(f)).toVar();return Qe(a.equal(C(2)),()=>zt(p.x).add(zt(p.y))),Qe(a.equal(C(3)),()=>zn(zt(p.x),zt(p.y))),Xr(p,p)}),gg=Y(([s,e,t,n,i,r,o,a,c])=>{const l=C(c).toVar(),u=w(a).toVar(),h=C(o).toVar(),d=C(r).toVar(),f=C(i).toVar(),g=C(n).toVar(),_=C(t).toVar(),m=C(e).toVar(),p=F(s).toVar(),S=F(fg(F(m.add(f),_.add(d),g.add(h)))).toVar();S.subAssign(.5),S.mulAssign(u),S.addAssign(.5);const x=F(F(w(m),w(_),w(g)).add(S)).toVar(),E=F(x.sub(p)).toVar();return Qe(l.equal(C(2)),()=>zt(E.x).add(zt(E.y).add(zt(E.z)))),Qe(l.equal(C(3)),()=>zn(zn(zt(E.x),zt(E.y)),zt(E.z))),Xr(E,E)}),$r=Jn([mg,gg]),tR=Y(([s,e,t])=>{const n=C(t).toVar(),i=w(e).toVar(),r=Le(s).toVar(),o=C().toVar(),a=C().toVar(),c=Le(At(r.x,o),At(r.y,a)).toVar(),l=w(1e6).toVar();return Mt({start:-1,end:C(1),name:"x",condition:"<="},({x:u})=>{Mt({start:-1,end:C(1),name:"y",condition:"<="},({y:h})=>{const d=w($r(c,u,h,o,a,i,n)).toVar();l.assign(wo(l,d))})}),Qe(n.equal(C(0)),()=>{l.assign(zs(l))}),l}),nR=Y(([s,e,t])=>{const n=C(t).toVar(),i=w(e).toVar(),r=Le(s).toVar(),o=C().toVar(),a=C().toVar(),c=Le(At(r.x,o),At(r.y,a)).toVar(),l=Le(1e6,1e6).toVar();return Mt({start:-1,end:C(1),name:"x",condition:"<="},({x:u})=>{Mt({start:-1,end:C(1),name:"y",condition:"<="},({y:h})=>{const d=w($r(c,u,h,o,a,i,n)).toVar();Qe(d.lessThan(l.x),()=>{l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.y.assign(d)})})}),Qe(n.equal(C(0)),()=>{l.assign(zs(l))}),l}),iR=Y(([s,e,t])=>{const n=C(t).toVar(),i=w(e).toVar(),r=Le(s).toVar(),o=C().toVar(),a=C().toVar(),c=Le(At(r.x,o),At(r.y,a)).toVar(),l=F(1e6,1e6,1e6).toVar();return Mt({start:-1,end:C(1),name:"x",condition:"<="},({x:u})=>{Mt({start:-1,end:C(1),name:"y",condition:"<="},({y:h})=>{const d=w($r(c,u,h,o,a,i,n)).toVar();Qe(d.lessThan(l.x),()=>{l.z.assign(l.y),l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.z.assign(l.y),l.y.assign(d)}).elseif(d.lessThan(l.z),()=>{l.z.assign(d)})})}),Qe(n.equal(C(0)),()=>{l.assign(zs(l))}),l}),sR=Y(([s,e,t])=>{const n=C(t).toVar(),i=w(e).toVar(),r=F(s).toVar(),o=C().toVar(),a=C().toVar(),c=C().toVar(),l=F(At(r.x,o),At(r.y,a),At(r.z,c)).toVar(),u=w(1e6).toVar();return Mt({start:-1,end:C(1),name:"x",condition:"<="},({x:h})=>{Mt({start:-1,end:C(1),name:"y",condition:"<="},({y:d})=>{Mt({start:-1,end:C(1),name:"z",condition:"<="},({z:f})=>{const g=w($r(l,h,d,f,o,a,c,i,n)).toVar();u.assign(wo(u,g))})})}),Qe(n.equal(C(0)),()=>{u.assign(zs(u))}),u}),rR=Y(([s,e,t])=>{const n=C(t).toVar(),i=w(e).toVar(),r=F(s).toVar(),o=C().toVar(),a=C().toVar(),c=C().toVar(),l=F(At(r.x,o),At(r.y,a),At(r.z,c)).toVar(),u=Le(1e6,1e6).toVar();return Mt({start:-1,end:C(1),name:"x",condition:"<="},({x:h})=>{Mt({start:-1,end:C(1),name:"y",condition:"<="},({y:d})=>{Mt({start:-1,end:C(1),name:"z",condition:"<="},({z:f})=>{const g=w($r(l,h,d,f,o,a,c,i,n)).toVar();Qe(g.lessThan(u.x),()=>{u.y.assign(u.x),u.x.assign(g)}).elseif(g.lessThan(u.y),()=>{u.y.assign(g)})})})}),Qe(n.equal(C(0)),()=>{u.assign(zs(u))}),u}),oR=Y(([s,e,t])=>{const n=C(t).toVar(),i=w(e).toVar(),r=F(s).toVar(),o=C().toVar(),a=C().toVar(),c=C().toVar(),l=F(At(r.x,o),At(r.y,a),At(r.z,c)).toVar(),u=F(1e6,1e6,1e6).toVar();return Mt({start:-1,end:C(1),name:"x",condition:"<="},({x:h})=>{Mt({start:-1,end:C(1),name:"y",condition:"<="},({y:d})=>{Mt({start:-1,end:C(1),name:"z",condition:"<="},({z:f})=>{const g=w($r(l,h,d,f,o,a,c,i,n)).toVar();Qe(g.lessThan(u.x),()=>{u.z.assign(u.y),u.y.assign(u.x),u.x.assign(g)}).elseif(g.lessThan(u.y),()=>{u.z.assign(u.y),u.y.assign(g)}).elseif(g.lessThan(u.z),()=>{u.z.assign(g)})})})}),Qe(n.equal(C(0)),()=>{u.assign(zs(u))}),u});Tr.setLayout({name:"mx_select",type:"float",inputs:[{name:"b",type:"bool"},{name:"t",type:"float"},{name:"f",type:"float"}]});Lo.setLayout({name:"mx_negate_if",type:"float",inputs:[{name:"val",type:"float"},{name:"b",type:"bool"}]});Pt.setLayout({name:"mx_floor",type:"int",inputs:[{name:"x",type:"float"}]});Um.setLayout({name:"mx_bilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"}]});Om.setLayout({name:"mx_bilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"}]});Vm.setLayout({name:"mx_trilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"v4",type:"float"},{name:"v5",type:"float"},{name:"v6",type:"float"},{name:"v7",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});Bm.setLayout({name:"mx_trilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"v4",type:"vec3"},{name:"v5",type:"vec3"},{name:"v6",type:"vec3"},{name:"v7",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});km.setLayout({name:"mx_gradient_float_0",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"}]});Hm.setLayout({name:"mx_gradient_float_1",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});Gm.setLayout({name:"mx_gradient_vec3_0",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"}]});Wm.setLayout({name:"mx_gradient_vec3_1",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});Xm.setLayout({name:"mx_gradient_scale2d_0",type:"float",inputs:[{name:"v",type:"float"}]});qm.setLayout({name:"mx_gradient_scale3d_0",type:"float",inputs:[{name:"v",type:"float"}]});Ym.setLayout({name:"mx_gradient_scale2d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});Km.setLayout({name:"mx_gradient_scale3d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});Sn.setLayout({name:"mx_rotl32",type:"uint",inputs:[{name:"x",type:"uint"},{name:"k",type:"int"}]});Kr.setLayout({name:"mx_bjfinal",type:"uint",inputs:[{name:"a",type:"uint"},{name:"b",type:"uint"},{name:"c",type:"uint"}]});an.setLayout({name:"mx_bits_to_01",type:"float",inputs:[{name:"bits",type:"uint"}]});ui.setLayout({name:"mx_fade",type:"float",inputs:[{name:"t",type:"float"}]});Jm.setLayout({name:"mx_hash_int_0",type:"uint",inputs:[{name:"x",type:"int"}]});Qm.setLayout({name:"mx_hash_int_1",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});eg.setLayout({name:"mx_hash_int_2",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});tg.setLayout({name:"mx_hash_int_3",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"}]});ng.setLayout({name:"mx_hash_int_4",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"},{name:"yy",type:"int"}]});ig.setLayout({name:"mx_hash_vec3_0",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});sg.setLayout({name:"mx_hash_vec3_1",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});rg.setLayout({name:"mx_perlin_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"}]});og.setLayout({name:"mx_perlin_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"}]});ag.setLayout({name:"mx_perlin_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"}]});cg.setLayout({name:"mx_perlin_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"}]});Kb.setLayout({name:"mx_cell_noise_float_0",type:"float",inputs:[{name:"p",type:"float"}]});$b.setLayout({name:"mx_cell_noise_float_1",type:"float",inputs:[{name:"p",type:"vec2"}]});Zb.setLayout({name:"mx_cell_noise_float_2",type:"float",inputs:[{name:"p",type:"vec3"}]});Jb.setLayout({name:"mx_cell_noise_float_3",type:"float",inputs:[{name:"p",type:"vec4"}]});lg.setLayout({name:"mx_cell_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"float"}]});ug.setLayout({name:"mx_cell_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec2"}]});hg.setLayout({name:"mx_cell_noise_vec3_2",type:"vec3",inputs:[{name:"p",type:"vec3"}]});dg.setLayout({name:"mx_cell_noise_vec3_3",type:"vec3",inputs:[{name:"p",type:"vec4"}]});Ga.setLayout({name:"mx_fractal_noise_float",type:"float",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});pg.setLayout({name:"mx_fractal_noise_vec3",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});Qb.setLayout({name:"mx_fractal_noise_vec2",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});eR.setLayout({name:"mx_fractal_noise_vec4",type:"vec4",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});mg.setLayout({name:"mx_worley_distance_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});gg.setLayout({name:"mx_worley_distance_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"zoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});tR.setLayout({name:"mx_worley_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});nR.setLayout({name:"mx_worley_noise_vec2_0",type:"vec2",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});iR.setLayout({name:"mx_worley_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});sR.setLayout({name:"mx_worley_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});rR.setLayout({name:"mx_worley_noise_vec2_1",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});oR.setLayout({name:"mx_worley_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});const aR=Y(([s])=>{const e=F(s).toVar(),t=w(e.x).toVar(),n=w(e.y).toVar(),i=w(e.z).toVar();Qe(n.lessThan(1e-4),()=>F(i,i,i)).else(()=>{t.assign(nt(6,t.sub(Wr(t))));const r=C(i0(t)).toVar(),o=w(t.sub(w(r))).toVar(),a=w(i.mul(Ft(1,n))).toVar(),c=w(i.mul(Ft(1,n.mul(o)))).toVar(),l=w(i.mul(Ft(1,n.mul(Ft(1,o))))).toVar();return Qe(r.equal(C(0)),()=>F(i,l,a)).elseif(r.equal(C(1)),()=>F(c,i,a)).elseif(r.equal(C(2)),()=>F(a,i,l)).elseif(r.equal(C(3)),()=>F(a,c,i)).elseif(r.equal(C(4)),()=>F(l,a,i)),F(i,a,c)})}),cR=Y(([s])=>{const e=F(s).toVar(),t=w(e.x).toVar(),n=w(e.y).toVar(),i=w(e.z).toVar(),r=w(wo(t,wo(n,i))).toVar(),o=w(zn(t,zn(n,i))).toVar(),a=w(o.sub(r)).toVar(),c=w().toVar(),l=w().toVar(),u=w().toVar();return u.assign(o),Qe(o.greaterThan(0),()=>{l.assign(a.div(o))}).else(()=>{l.assign(0)}),Qe(l.lessThanEqual(0),()=>{c.assign(0)}).else(()=>{Qe(t.greaterThanEqual(o),()=>{c.assign(n.sub(i).div(a))}).elseif(n.greaterThanEqual(o),()=>{c.assign(Vn(2,i.sub(t).div(a)))}).else(()=>{c.assign(Vn(4,t.sub(n).div(a)))}),c.mulAssign(1/6),Qe(c.lessThan(0),()=>{c.addAssign(1)})}),F(c,l,u)});aR.setLayout({name:"mx_hsvtorgb",type:"vec3",inputs:[{name:"hsv",type:"vec3"}]});cR.setLayout({name:"mx_rgbtohsv",type:"vec3",inputs:[{name:"c",type:"vec3"}]});const lR=Y(([s])=>{const e=F(s).toVar(),t=Vp(Qp(e,F(.04045))).toVar(),n=F(e.div(12.92)).toVar(),i=F(Si(zn(e.add(F(.055)),F(0)).div(1.055),F(2.4))).toVar();return kn(n,i,t)});lR.setLayout({name:"mx_srgb_texture_to_lin_rec709",type:"vec3",inputs:[{name:"color",type:"vec3"}]});class uR{constructor(e,t,n,i,r){this.scene=e,this.camera=t,this.mapData=new OE(n.array),this.particlesSystem=r,[this.walls,this.players,this.powerups]=this.loadMap(this.mapData,i),this.activateSpawnAnimation(),this.createPlane(n.backgroundColor),this.spawnPowerupsFrequency=10,this.spawnPowerupsTimer=this.spawnPowerupsFrequency-1,this.allPowerups=[hl,hl,hl,ic,kd,kd],this.defineCameraStartPos()}defineCameraStartPos(){var e=this.mapData.getHeight(),t=this.mapData.getWidth();this.camera.position.x=t/2,this.camera.position.y=0;var n=Math.max(e,t);this.camera.position.z=Math.tan(mE*Math.PI/180/2)*n/2}createPlane(e=16777215){const t=new Po(100,100),n=new Br({color:e,side:ni}),i=new Gt(t,n);i.position.z=-.5,i.position.x+=25,i.position.y+=25,i.receiveShadow=!0,this.scene.add(i)}activateSpawnAnimation(e=4){this.spawnAnimationFallHeight=10;for(let t=0;t<this.walls.length;t++){let n=this.walls[t];n.mesh.position.z=this.spawnAnimationFallHeight,n.mesh.material.opacity=0}this.showSpawnAnimation=!0,this.currentSpawnAnimationTime=0,this.spawnAnimationDuration=e;for(let t of this.players)t.mesh.visible=!1}desactivateSpawnAnimation(){this.showSpawnAnimation=!1;for(let e of this.players)e.mesh.visible=!0}spawnAnimation(e){if(this.showSpawnAnimation){var t=!0;for(let n=0;n<this.walls.length;n++){if(this.currentSpawnAnimationTime<n/this.walls.length*this.spawnAnimationDuration)continue;let i=this.walls[n];i.mesh.position.z-=.15,i.mesh.position.z<0&&(i.mesh.position.z=0),i.mesh.material.opacity=1-i.mesh.position.z/this.spawnAnimationFallHeight,i.mesh.position.z>0&&(t=!1)}if(this.currentSpawnAnimationTime>this.spawnAnimationDuration)t&&this.desactivateSpawnAnimation();else{this.currentSpawnAnimationTime+=e;for(let n=0;n<this.walls.length;n++){let i=this.walls[n];i.mesh.visible=this.currentSpawnAnimationTime>n/this.walls.length*this.spawnAnimationDuration,i.mesh.material.transparent=!0}}}}loadMap(e,t){const n=[],i=[],r=[];var o=e.getHeight(),a=e.getWidth();for(let u=0;u<o;u++)for(let h=0;h<a;h++){var c=e.getCell(h,u),l=null;if(c===vp?l=new ve("#c0392b"):c===yp?l=new ve("#e67e22"):c===Mp?l=new ve("#f1c40f"):c===Tp?l=new ve("#2ecc71"):c===Sp?l=new ve("#3ca4ff"):c===Ep?l=new ve("#2980b9"):c===Ap?l=new ve("#ffffff"):c===wp?l=new ve("#7f8c8d"):c===Np&&(l=new ve(0,0,0)),l){const d=new _u({scene:this.scene,x:h,y:u,depth:1.1,color:l});n.push(d)}else if(c===_E)for(let d=0;d<t;d++){const f=new UE({scene:this.scene,x:h,y:u,presetNb:d,particlesSystem:this.particlesSystem});i.push(f)}}return[n,i,r]}stackPlayers(e){for(let t of this.players)t.mesh.position.z>0&&(t.mesh.position.z-=6*e,t.mesh.position.z<0&&(t.mesh.position.z=0));for(let t=0;t<this.players.length;t++){let n=this.players[t];for(let i=t+1;i<this.players.length;i++){let r=this.players[i];n.mesh.position.x==r.mesh.position.x&&n.mesh.position.y==r.mesh.position.y&&r.mesh.position.z<n.mesh.position.z+n.depth&&(r.mesh.position.z=Math.min(n.mesh.position.z+n.depth,r.mesh.position.z+18*e))}}}spawnPowerup(){const e=this.mapData.getRandomEmptyCell();if(e!==null){const t=this.allPowerups[Math.floor(Math.random()*this.allPowerups.length)];this.powerups.push(new t({scene:this.scene,x:e.x,y:e.y,players:this.players,particlesSystem:this.particlesSystem}))}}updatePowerups(e){for(let t of this.powerups)t.update(e),t.hasBeenActivated&&(t.delete(),this.powerups=this.powerups.filter(n=>n!=t));this.spawnPowerupsTimer+=e,this.spawnPowerupsTimer>this.spawnPowerupsFrequency&&(this.spawnPowerupsTimer=0,this.spawnPowerup())}updateCamera(e,{x:t=null,y:n=null,moveSpeed:i=.5,maxDistFromCenter:r=2}){var o=this.mapData.getWidth()/2,a=this.mapData.getHeight()/2;if(!t||!n){var t=0,n=0;for(let u of this.players)t+=u.position.x,n+=u.position.y;t/=this.players.length,n/=this.players.length}t=Math.min(Math.max(t,o-r),o+r),n=Math.min(Math.max(n,a-r),a+r),this.camera.position.x+=(t-this.camera.position.x)*e*i,this.camera.position.y+=(n-this.camera.position.y)*e*i}update(e,t){this.spawnAnimation(e);for(let n of this.players)n.update(e,t,this.mapData,this.powerups),n.hasWin&&this.updateCamera(e,{x:n.position.x,y:n.position.y,maxDistFromCenter:8,moveSpeed:3});this.stackPlayers(e),this.updatePowerups(e),this.updateCamera(e,{maxDistFromCenter:2,moveSpeed:.3})}}class hR{constructor(e,t,n,i=4){this.clock=new ES,this.particlesSystem=new bp(e),this.level=new uR(e,t,n,i,this.particlesSystem)}update(e){var t=this.clock.getDelta();this.particlesSystem.update(t),this.level.update(t,e)}}class dR{constructor(e,t,n=2){this.scene=e,this.camera=t,this.playersNb=n,this.scores=[];for(let i=0;i<n;i++)this.scores.push(0);this.initNewGame()}initNewGame(){var e=zd[Math.floor(Math.random()*zd.length)];this.game=new hR(this.scene,this.camera,e,this.playersNb)}update(e){this.game&&this.game.update(e)}}const fR=document.querySelector("canvas.webgl"),Wa={width:1e3,height:800},Zr=new YT;Zr.background=new ve("#444444");const yc=new vn(90,Wa.width/Wa.height,.1,1e4);Zr.add(yc);yc.position.z=20;const Jr=new qT({canvas:fR,antialias:!0});Jr.setSize(Wa.width,Wa.height);document.body.appendChild(Jr.domElement);Jr.shadowMap.enabled=!0;Jr.shadowMap.type=_i;Jr.setPixelRatio(window.devicePixelRatio);const pR=new pp(16777215,_p);Zr.add(pR);var pi=new pu("#ffffff",xp);pi.position.set(-2,-2,14);pi.shadow.camera.near=12;pi.shadow.camera.far=26;pi.shadow.camera.top=40;pi.shadow.camera.bottom=-2;pi.shadow.camera.left=-2;pi.shadow.camera.right=60;pi.castShadow=!0;pi.shadow.mapSize.width=1024*2;pi.shadow.mapSize.height=1024*2;Zr.add(pi);var iu=[];document.addEventListener("keydown",mR,!1);function mR(s){var e=s.which;iu.push(e)}const gR=new dR(Zr,yc);function _g(){window.requestAnimationFrame(_g),gR.update(iu),Jr.render(Zr,yc),iu=[]}_g();
