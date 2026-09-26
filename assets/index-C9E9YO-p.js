(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dl="180",Nd=0,zl=1,kd=2,nu=1,iu=2,Cn=3,gn=0,Ot=1,tn=2,Kn=0,Yi=1,Bl=2,Hl=3,Gl=4,Od=5,di=100,zd=101,Bd=102,Hd=103,Gd=104,Vd=200,Wd=201,Xd=202,$d=203,dr=204,fr=205,qd=206,Yd=207,jd=208,Zd=209,Kd=210,Jd=211,Qd=212,ef=213,tf=214,pr=0,mr=1,gr=2,Qi=3,vr=4,wr=5,xr=6,_r=7,au=0,nf=1,af=2,Nn=0,sf=1,of=2,rf=3,lf=4,cf=5,hf=6,uf=7,su=300,ea=301,ta=302,yr=303,br=304,Xs=306,ji=1e3,Tt=1001,Mr=1002,mt=1003,df=1004,Wa=1005,et=1006,lo=1007,In=1008,yt=1009,ou=1010,ru=1011,Aa=1012,fl=1013,vn=1014,pn=1015,wn=1016,pl=1017,ml=1018,Ra=1020,lu=35902,cu=35899,hu=1021,uu=1022,wt=1023,Jn=1026,Ca=1027,Qn=1028,gl=1029,du=1030,vl=1031,wl=1033,bs=33776,Ms=33777,Ss=33778,Es=33779,Sr=35840,Er=35841,Tr=35842,Ar=35843,Rr=36196,Cr=37492,Dr=37496,Pr=37808,Lr=37809,Ir=37810,Fr=37811,Ur=37812,Nr=37813,kr=37814,Or=37815,zr=37816,Br=37817,Hr=37818,Gr=37819,Vr=37820,Wr=37821,Xr=36492,$r=36494,qr=36495,Yr=36283,jr=36284,Zr=36285,Kr=36286,ff=3200,pf=3201,mf=0,gf=1,Pn="",Qt="srgb",gi="srgb-linear",Fs="linear",nt="srgb",bi=7680,Vl=519,vf=512,wf=513,xf=514,fu=515,_f=516,yf=517,bf=518,Mf=519,Wl=35044,Sf=35048,zt="300 es",mn=2e3,Us=2001;class oa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,o=a.length;s<o;s++)a[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xl=1234567;const ya=Math.PI/180,Da=180/Math.PI;function ra(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function xl(n,e){return(n%e+e)%e}function Ef(n,e,t,i,a){return i+(n-e)*(a-i)/(t-e)}function Tf(n,e,t){return n!==e?(t-n)/(e-n):0}function ba(n,e,t){return(1-t)*n+t*e}function Af(n,e,t,i){return ba(n,e,1-Math.exp(-t*i))}function Rf(n,e=1){return e-Math.abs(xl(n,e*2)-e)}function Cf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Df(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Pf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Lf(n,e){return n+Math.random()*(e-n)}function If(n){return n*(.5-Math.random())}function Ff(n){n!==void 0&&(Xl=n);let e=Xl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Uf(n){return n*ya}function Nf(n){return n*Da}function kf(n){return(n&n-1)===0&&n!==0}function Of(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function zf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Bf(n,e,t,i,a){const s=Math.cos,o=Math.sin,r=s(t/2),l=o(t/2),c=s((e+i)/2),h=o((e+i)/2),d=s((e-i)/2),p=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(a){case"XYX":n.set(r*h,l*d,l*p,r*c);break;case"YZY":n.set(l*p,r*h,l*d,r*c);break;case"ZXZ":n.set(l*d,l*p,r*h,r*c);break;case"XZX":n.set(r*h,l*g,l*f,r*c);break;case"YXY":n.set(l*f,r*h,l*g,r*c);break;case"ZYZ":n.set(l*g,l*f,r*h,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Hi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const $l={DEG2RAD:ya,RAD2DEG:Da,generateUUID:ra,clamp:$e,euclideanModulo:xl,mapLinear:Ef,inverseLerp:Tf,lerp:ba,damp:Af,pingpong:Rf,smoothstep:Cf,smootherstep:Df,randInt:Pf,randFloat:Lf,randFloatSpread:If,seededRandom:Ff,degToRad:Uf,radToDeg:Nf,isPowerOfTwo:kf,ceilPowerOfTwo:Of,floorPowerOfTwo:zf,setQuaternionFromProperEuler:Bf,normalize:Ft,denormalize:Hi};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*a+e.x,this.y=s*a+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bn{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,s,o,r){let l=i[a+0],c=i[a+1],h=i[a+2],d=i[a+3];const p=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(r===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(r===1){e[t+0]=p,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==p||c!==f||h!==g){let m=1-r;const u=l*p+c*f+h*g+d*v,w=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const y=Math.sqrt(x),S=Math.atan2(y,u*w);m=Math.sin(m*S)/y,r=Math.sin(r*S)/y}const _=r*w;if(l=l*m+p*_,c=c*m+f*_,h=h*m+g*_,d=d*m+v*_,m===1-r){const y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,a,s,o){const r=i[a],l=i[a+1],c=i[a+2],h=i[a+3],d=s[o],p=s[o+1],f=s[o+2],g=s[o+3];return e[t]=r*g+h*d+l*f-c*p,e[t+1]=l*g+h*p+c*d-r*f,e[t+2]=c*g+h*f+r*p-l*d,e[t+3]=h*g-r*d-l*p-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,s=e._z,o=e._order,r=Math.cos,l=Math.sin,c=r(i/2),h=r(a/2),d=r(s/2),p=l(i/2),f=l(a/2),g=l(s/2);switch(o){case"XYZ":this._x=p*h*d+c*f*g,this._y=c*f*d-p*h*g,this._z=c*h*g+p*f*d,this._w=c*h*d-p*f*g;break;case"YXZ":this._x=p*h*d+c*f*g,this._y=c*f*d-p*h*g,this._z=c*h*g-p*f*d,this._w=c*h*d+p*f*g;break;case"ZXY":this._x=p*h*d-c*f*g,this._y=c*f*d+p*h*g,this._z=c*h*g+p*f*d,this._w=c*h*d-p*f*g;break;case"ZYX":this._x=p*h*d-c*f*g,this._y=c*f*d+p*h*g,this._z=c*h*g-p*f*d,this._w=c*h*d+p*f*g;break;case"YZX":this._x=p*h*d+c*f*g,this._y=c*f*d+p*h*g,this._z=c*h*g-p*f*d,this._w=c*h*d-p*f*g;break;case"XZY":this._x=p*h*d-c*f*g,this._y=c*f*d-p*h*g,this._z=c*h*g+p*f*d,this._w=c*h*d+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],s=t[8],o=t[1],r=t[5],l=t[9],c=t[2],h=t[6],d=t[10],p=i+r+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-a)*f}else if(i>r&&i>d){const f=2*Math.sqrt(1+i-r-d);this._w=(h-l)/f,this._x=.25*f,this._y=(a+o)/f,this._z=(s+c)/f}else if(r>d){const f=2*Math.sqrt(1+r-i-d);this._w=(s-c)/f,this._x=(a+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-r);this._w=(o-a)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,s=e._z,o=e._w,r=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*r+a*c-s*l,this._y=a*h+o*l+s*r-i*c,this._z=s*h+o*c+i*l-a*r,this._w=o*h-i*r-a*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,s=this._z,o=this._w;let r=o*e._w+i*e._x+a*e._y+s*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=o,this._x=i,this._y=a,this._z=s,this;const l=1-r*r;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*a+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,r),d=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*d+this._w*p,this._x=i*d+this._x*p,this._y=a*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ql.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ql.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*a,this.y=s[1]*t+s[4]*i+s[7]*a,this.z=s[2]*t+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*a+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*a+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*a+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,s=e.x,o=e.y,r=e.z,l=e.w,c=2*(o*a-r*i),h=2*(r*t-s*a),d=2*(s*i-o*t);return this.x=t+l*c+o*d-r*h,this.y=i+l*h+r*c-s*d,this.z=a+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a,this.y=s[1]*t+s[5]*i+s[9]*a,this.z=s[2]*t+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,s=e.z,o=t.x,r=t.y,l=t.z;return this.x=a*l-s*r,this.y=s*o-i*l,this.z=i*r-a*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return co.copy(this).projectOnVector(e),this.sub(co)}reflect(e){return this.sub(co.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const co=new N,ql=new Bn;class Be{constructor(e,t,i,a,s,o,r,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,o,r,l,c)}set(e,t,i,a,s,o,r,l,c){const h=this.elements;return h[0]=e,h[1]=a,h[2]=r,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,o=i[0],r=i[3],l=i[6],c=i[1],h=i[4],d=i[7],p=i[2],f=i[5],g=i[8],v=a[0],m=a[3],u=a[6],w=a[1],x=a[4],_=a[7],y=a[2],S=a[5],A=a[8];return s[0]=o*v+r*w+l*y,s[3]=o*m+r*x+l*S,s[6]=o*u+r*_+l*A,s[1]=c*v+h*w+d*y,s[4]=c*m+h*x+d*S,s[7]=c*u+h*_+d*A,s[2]=p*v+f*w+g*y,s[5]=p*m+f*x+g*S,s[8]=p*u+f*_+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],o=e[4],r=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*r*c-i*s*h+i*r*l+a*s*c-a*o*l}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],o=e[4],r=e[5],l=e[6],c=e[7],h=e[8],d=h*o-r*c,p=r*l-h*s,f=c*s-o*l,g=t*d+i*p+a*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(a*c-h*i)*v,e[2]=(r*i-a*o)*v,e[3]=p*v,e[4]=(h*t-a*l)*v,e[5]=(a*s-r*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,s,o,r){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*r)+o+e,-a*c,a*l,-a*(-c*o+l*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(ho.makeScale(e,t)),this}rotate(e){return this.premultiply(ho.makeRotation(-e)),this}translate(e,t){return this.premultiply(ho.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ho=new Be;function pu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ns(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hf(){const n=Ns("canvas");return n.style.display="block",n}const Yl={};function Pa(n){n in Yl||(Yl[n]=!0,console.warn(n))}function Gf(n,e,t){return new Promise(function(i,a){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const jl=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zl=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vf(){const n={enabled:!0,workingColorSpace:gi,spaces:{},convert:function(a,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===nt&&(a.r=kn(a.r),a.g=kn(a.g),a.b=kn(a.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(a.r=Zi(a.r),a.g=Zi(a.g),a.b=Zi(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Pn?Fs:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,o){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return Pa("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return Pa("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(a,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[gi]:{primaries:e,whitePoint:i,transfer:Fs,toXYZ:jl,fromXYZ:Zl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:jl,fromXYZ:Zl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),n}const Ke=Vf();function kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Mi;class Wf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Mi===void 0&&(Mi=Ns("canvas")),Mi.width=e.width,Mi.height=e.height;const a=Mi.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Mi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ns("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let o=0;o<s.length;o++)s[o]=kn(s[o]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(kn(t[i]/255)*255):t[i]=kn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xf=0;class _l{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=ra(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let o=0,r=a.length;o<r;o++)a[o].isDataTexture?s.push(uo(a[o].image)):s.push(uo(a[o]))}else s=uo(a);i.url=s}return t||(e.images[this.uuid]=i),i}}function uo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $f=0;const fo=new N;class Pt extends oa{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,i=Tt,a=Tt,s=et,o=In,r=wt,l=yt,c=Pt.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=ra(),this.name="",this.source=new _l(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fo).x}get height(){return this.source.getSize(fo).y}get depth(){return this.source.getSize(fo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ji:e.x=e.x-Math.floor(e.x);break;case Tt:e.x=e.x<0?0:1;break;case Mr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ji:e.y=e.y-Math.floor(e.y);break;case Tt:e.y=e.y<0?0:1;break;case Mr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=su;Pt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,i=0,a=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*a+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*a+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*a+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,s;const l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],f=l[5],g=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(h-p)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,_=(f+1)/2,y=(u+1)/2,S=(h+p)/4,A=(d+v)/4,C=(g+m)/4;return x>_&&x>y?x<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(x),a=S/i,s=A/i):_>y?_<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(_),i=S/a,s=C/a):y<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(y),i=A/s,a=C/s),this.set(i,a,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(p-h)*(p-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-v)/w,this.z=(p-h)/w,this.w=Math.acos((c+f+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qf extends oa{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:et,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const a={width:e,height:t,depth:i.depth},s=new Pt(a);this.textures=[];const o=i.count;for(let r=0;r<o;r++)this.textures[r]=s.clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new _l(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lt extends qf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class mu extends Pt{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=mt,this.minFilter=mt,this.wrapR=Tt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gu extends Pt{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=mt,this.minFilter=mt,this.wrapR=Tt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ua{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,r=s.count;o<r;o++)e.isMesh===!0?e.getVertexPosition(o,sn):sn.fromBufferAttribute(s,o),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xa.copy(i.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}const a=e.children;for(let s=0,o=a.length;s<o;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ha),$a.subVectors(this.max,ha),Si.subVectors(e.a,ha),Ei.subVectors(e.b,ha),Ti.subVectors(e.c,ha),Hn.subVectors(Ei,Si),Gn.subVectors(Ti,Ei),ni.subVectors(Si,Ti);let t=[0,-Hn.z,Hn.y,0,-Gn.z,Gn.y,0,-ni.z,ni.y,Hn.z,0,-Hn.x,Gn.z,0,-Gn.x,ni.z,0,-ni.x,-Hn.y,Hn.x,0,-Gn.y,Gn.x,0,-ni.y,ni.x,0];return!po(t,Si,Ei,Ti,$a)||(t=[1,0,0,0,1,0,0,0,1],!po(t,Si,Ei,Ti,$a))?!1:(qa.crossVectors(Hn,Gn),t=[qa.x,qa.y,qa.z],po(t,Si,Ei,Ti,$a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yn=[new N,new N,new N,new N,new N,new N,new N,new N],sn=new N,Xa=new Ua,Si=new N,Ei=new N,Ti=new N,Hn=new N,Gn=new N,ni=new N,ha=new N,$a=new N,qa=new N,ii=new N;function po(n,e,t,i,a){for(let s=0,o=n.length-3;s<=o;s+=3){ii.fromArray(n,s);const r=a.x*Math.abs(ii.x)+a.y*Math.abs(ii.y)+a.z*Math.abs(ii.z),l=e.dot(ii),c=t.dot(ii),h=i.dot(ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const Yf=new Ua,ua=new N,mo=new N;class On{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Yf.setFromPoints(e).getCenter(i);let a=0;for(let s=0,o=e.length;s<o;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ua.subVectors(e,this.center);const t=ua.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(ua,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ua.copy(e.center).add(mo)),this.expandByPoint(ua.copy(e.center).sub(mo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const bn=new N,go=new N,Ya=new N,Vn=new N,vo=new N,ja=new N,wo=new N;class jf{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.origin).addScaledVector(this.direction,t),bn.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){go.copy(e).add(t).multiplyScalar(.5),Ya.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(go);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ya),r=Vn.dot(this.direction),l=-Vn.dot(Ya),c=Vn.lengthSq(),h=Math.abs(1-o*o);let d,p,f,g;if(h>0)if(d=o*l-r,p=o*r-l,g=s*h,d>=0)if(p>=-g)if(p<=g){const v=1/h;d*=v,p*=v,f=d*(d+o*p+2*r)+p*(o*d+p+2*l)+c}else p=s,d=Math.max(0,-(o*p+r)),f=-d*d+p*(p+2*l)+c;else p=-s,d=Math.max(0,-(o*p+r)),f=-d*d+p*(p+2*l)+c;else p<=-g?(d=Math.max(0,-(-o*s+r)),p=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+p*(p+2*l)+c):p<=g?(d=0,p=Math.min(Math.max(-s,-l),s),f=p*(p+2*l)+c):(d=Math.max(0,-(o*s+r)),p=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+p*(p+2*l)+c);else p=o>0?-s:s,d=Math.max(0,-(o*p+r)),f=-d*d+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(go).addScaledVector(Ya,p),f}intersectSphere(e,t){bn.subVectors(e.center,this.origin);const i=bn.dot(this.direction),a=bn.dot(bn)-i*i,s=e.radius*e.radius;if(a>s)return null;const o=Math.sqrt(s-a),r=i-o,l=i+o;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,s,o,r,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,a=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,a=(e.min.x-p.x)*c),h>=0?(s=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),i>o||s>a||((s>i||isNaN(i))&&(i=s),(o<a||isNaN(a))&&(a=o),d>=0?(r=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(r=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),i>l||r>a)||((r>i||i!==i)&&(i=r),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,i,a,s){vo.subVectors(t,e),ja.subVectors(i,e),wo.crossVectors(vo,ja);let o=this.direction.dot(wo),r;if(o>0){if(a)return null;r=1}else if(o<0)r=-1,o=-o;else return null;Vn.subVectors(this.origin,e);const l=r*this.direction.dot(ja.crossVectors(Vn,ja));if(l<0)return null;const c=r*this.direction.dot(vo.cross(Vn));if(c<0||l+c>o)return null;const h=-r*Vn.dot(wo);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,i,a,s,o,r,l,c,h,d,p,f,g,v,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,o,r,l,c,h,d,p,f,g,v,m)}set(e,t,i,a,s,o,r,l,c,h,d,p,f,g,v,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=a,u[1]=s,u[5]=o,u[9]=r,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=p,u[3]=f,u[7]=g,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/Ai.setFromMatrixColumn(e,0).length(),s=1/Ai.setFromMatrixColumn(e,1).length(),o=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,s=e.z,o=Math.cos(i),r=Math.sin(i),l=Math.cos(a),c=Math.sin(a),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=o*h,f=o*d,g=r*h,v=r*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=p-v*c,t[9]=-r*l,t[2]=v-p*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*h,f=l*d,g=c*h,v=c*d;t[0]=p+v*r,t[4]=g*r-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-r,t[2]=f*r-g,t[6]=v+p*r,t[10]=o*l}else if(e.order==="ZXY"){const p=l*h,f=l*d,g=c*h,v=c*d;t[0]=p-v*r,t[4]=-o*d,t[8]=g+f*r,t[1]=f+g*r,t[5]=o*h,t[9]=v-p*r,t[2]=-o*c,t[6]=r,t[10]=o*l}else if(e.order==="ZYX"){const p=o*h,f=o*d,g=r*h,v=r*d;t[0]=l*h,t[4]=g*c-f,t[8]=p*c+v,t[1]=l*d,t[5]=v*c+p,t[9]=f*c-g,t[2]=-c,t[6]=r*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,f=o*c,g=r*l,v=r*c;t[0]=l*h,t[4]=v-p*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-r*h,t[2]=-c*h,t[6]=f*d+g,t[10]=p-v*d}else if(e.order==="XZY"){const p=o*l,f=o*c,g=r*l,v=r*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=p*d+v,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=r*h,t[10]=v*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zf,e,Kf)}lookAt(e,t,i){const a=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Wn.crossVectors(i,Gt),Wn.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Wn.crossVectors(i,Gt)),Wn.normalize(),Za.crossVectors(Gt,Wn),a[0]=Wn.x,a[4]=Za.x,a[8]=Gt.x,a[1]=Wn.y,a[5]=Za.y,a[9]=Gt.y,a[2]=Wn.z,a[6]=Za.z,a[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,o=i[0],r=i[4],l=i[8],c=i[12],h=i[1],d=i[5],p=i[9],f=i[13],g=i[2],v=i[6],m=i[10],u=i[14],w=i[3],x=i[7],_=i[11],y=i[15],S=a[0],A=a[4],C=a[8],M=a[12],b=a[1],T=a[5],P=a[9],I=a[13],F=a[2],k=a[6],H=a[10],V=a[14],z=a[3],j=a[7],ee=a[11],oe=a[15];return s[0]=o*S+r*b+l*F+c*z,s[4]=o*A+r*T+l*k+c*j,s[8]=o*C+r*P+l*H+c*ee,s[12]=o*M+r*I+l*V+c*oe,s[1]=h*S+d*b+p*F+f*z,s[5]=h*A+d*T+p*k+f*j,s[9]=h*C+d*P+p*H+f*ee,s[13]=h*M+d*I+p*V+f*oe,s[2]=g*S+v*b+m*F+u*z,s[6]=g*A+v*T+m*k+u*j,s[10]=g*C+v*P+m*H+u*ee,s[14]=g*M+v*I+m*V+u*oe,s[3]=w*S+x*b+_*F+y*z,s[7]=w*A+x*T+_*k+y*j,s[11]=w*C+x*P+_*H+y*ee,s[15]=w*M+x*I+_*V+y*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],s=e[12],o=e[1],r=e[5],l=e[9],c=e[13],h=e[2],d=e[6],p=e[10],f=e[14],g=e[3],v=e[7],m=e[11],u=e[15];return g*(+s*l*d-a*c*d-s*r*p+i*c*p+a*r*f-i*l*f)+v*(+t*l*f-t*c*p+s*o*p-a*o*f+a*c*h-s*l*h)+m*(+t*c*d-t*r*f-s*o*d+i*o*f+s*r*h-i*c*h)+u*(-a*r*h-t*l*d+t*r*p+a*o*d-i*o*p+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],o=e[4],r=e[5],l=e[6],c=e[7],h=e[8],d=e[9],p=e[10],f=e[11],g=e[12],v=e[13],m=e[14],u=e[15],w=d*m*c-v*p*c+v*l*f-r*m*f-d*l*u+r*p*u,x=g*p*c-h*m*c-g*l*f+o*m*f+h*l*u-o*p*u,_=h*v*c-g*d*c+g*r*f-o*v*f-h*r*u+o*d*u,y=g*d*l-h*v*l-g*r*p+o*v*p+h*r*m-o*d*m,S=t*w+i*x+a*_+s*y;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/S;return e[0]=w*A,e[1]=(v*p*s-d*m*s-v*a*f+i*m*f+d*a*u-i*p*u)*A,e[2]=(r*m*s-v*l*s+v*a*c-i*m*c-r*a*u+i*l*u)*A,e[3]=(d*l*s-r*p*s-d*a*c+i*p*c+r*a*f-i*l*f)*A,e[4]=x*A,e[5]=(h*m*s-g*p*s+g*a*f-t*m*f-h*a*u+t*p*u)*A,e[6]=(g*l*s-o*m*s-g*a*c+t*m*c+o*a*u-t*l*u)*A,e[7]=(o*p*s-h*l*s+h*a*c-t*p*c-o*a*f+t*l*f)*A,e[8]=_*A,e[9]=(g*d*s-h*v*s-g*i*f+t*v*f+h*i*u-t*d*u)*A,e[10]=(o*v*s-g*r*s+g*i*c-t*v*c-o*i*u+t*r*u)*A,e[11]=(h*r*s-o*d*s-h*i*c+t*d*c+o*i*f-t*r*f)*A,e[12]=y*A,e[13]=(h*v*a-g*d*a+g*i*p-t*v*p-h*i*m+t*d*m)*A,e[14]=(g*r*a-o*v*a-g*i*l+t*v*l+o*i*m-t*r*m)*A,e[15]=(o*d*a-h*r*a+h*i*l-t*d*l-o*i*p+t*r*p)*A,this}scale(e){const t=this.elements,i=e.x,a=e.y,s=e.z;return t[0]*=i,t[4]*=a,t[8]*=s,t[1]*=i,t[5]*=a,t[9]*=s,t[2]*=i,t[6]*=a,t[10]*=s,t[3]*=i,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),s=1-i,o=e.x,r=e.y,l=e.z,c=s*o,h=s*r;return this.set(c*o+i,c*r-a*l,c*l+a*r,0,c*r+a*l,h*r+i,h*l-a*o,0,c*l-a*r,h*l+a*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,s,o){return this.set(1,i,s,0,e,1,o,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,s=t._x,o=t._y,r=t._z,l=t._w,c=s+s,h=o+o,d=r+r,p=s*c,f=s*h,g=s*d,v=o*h,m=o*d,u=r*d,w=l*c,x=l*h,_=l*d,y=i.x,S=i.y,A=i.z;return a[0]=(1-(v+u))*y,a[1]=(f+_)*y,a[2]=(g-x)*y,a[3]=0,a[4]=(f-_)*S,a[5]=(1-(p+u))*S,a[6]=(m+w)*S,a[7]=0,a[8]=(g+x)*A,a[9]=(m-w)*A,a[10]=(1-(p+v))*A,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let s=Ai.set(a[0],a[1],a[2]).length();const o=Ai.set(a[4],a[5],a[6]).length(),r=Ai.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],on.copy(this);const c=1/s,h=1/o,d=1/r;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,t.setFromRotationMatrix(on),i.x=s,i.y=o,i.z=r,this}makePerspective(e,t,i,a,s,o,r=mn,l=!1){const c=this.elements,h=2*s/(t-e),d=2*s/(i-a),p=(t+e)/(t-e),f=(i+a)/(i-a);let g,v;if(l)g=s/(o-s),v=o*s/(o-s);else if(r===mn)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(r===Us)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,a,s,o,r=mn,l=!1){const c=this.elements,h=2/(t-e),d=2/(i-a),p=-(t+e)/(t-e),f=-(i+a)/(i-a);let g,v;if(l)g=1/(o-s),v=o/(o-s);else if(r===mn)g=-2/(o-s),v=-(o+s)/(o-s);else if(r===Us)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ai=new N,on=new ot,Zf=new N(0,0,0),Kf=new N(1,1,1),Wn=new N,Za=new N,Gt=new N,Kl=new ot,Jl=new Bn;class xn{constructor(e=0,t=0,i=0,a=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,s=a[0],o=a[4],r=a[8],l=a[1],c=a[5],h=a[9],d=a[2],p=a[6],f=a[10];switch(t){case"XYZ":this._y=Math.asin($e(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(r,f));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Kl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jl.setFromEuler(this),this.setFromQuaternion(Jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class vu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jf=0;const Ql=new N,Ri=new Bn,Mn=new ot,Ka=new N,da=new N,Qf=new N,ep=new Bn,ec=new N(1,0,0),tc=new N(0,1,0),nc=new N(0,0,1),ic={type:"added"},tp={type:"removed"},Ci={type:"childadded",child:null},xo={type:"childremoved",child:null};class Yt extends oa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new N,t=new xn,i=new Bn,a=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ot},normalMatrix:{value:new Be}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(ec,e)}rotateY(e){return this.rotateOnAxis(tc,e)}rotateZ(e){return this.rotateOnAxis(nc,e)}translateOnAxis(e,t){return Ql.copy(e).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ec,e)}translateY(e){return this.translateOnAxis(tc,e)}translateZ(e){return this.translateOnAxis(nc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ka.copy(e):Ka.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(da,Ka,this.up):Mn.lookAt(Ka,da,this.up),this.quaternion.setFromRotationMatrix(Mn),a&&(Mn.extractRotation(a.matrixWorld),Ri.setFromRotationMatrix(Mn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ic),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tp),xo.child=e,this.dispatchEvent(xo),xo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ic),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,e,Qf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,ep,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(r=>({...r,boundingBox:r.boundingBox?r.boundingBox.toJSON():void 0,boundingSphere:r.boundingSphere?r.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(r=>({...r})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(s(e.materials,this.material[l]));a.material=r}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let r=0;r<this.children.length;r++)a.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];a.animations.push(s(e.animations,l))}}if(t){const r=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),p=o(e.skeletons),f=o(e.animations),g=o(e.nodes);r.length>0&&(i.geometries=r),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=a,i;function o(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Yt.DEFAULT_UP=new N(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new N,Sn=new N,_o=new N,En=new N,Di=new N,Pi=new N,ac=new N,yo=new N,bo=new N,Mo=new N,So=new vt,Eo=new vt,To=new vt;class hn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),rn.subVectors(e,t),a.cross(rn);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,i,a,s){rn.subVectors(a,t),Sn.subVectors(i,t),_o.subVectors(e,t);const o=rn.dot(rn),r=rn.dot(Sn),l=rn.dot(_o),c=Sn.dot(Sn),h=Sn.dot(_o),d=o*c-r*r;if(d===0)return s.set(0,0,0),null;const p=1/d,f=(c*l-r*h)*p,g=(o*h-r*l)*p;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,i,a,s,o,r,l){return this.getBarycoord(e,t,i,a,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,En.x),l.addScaledVector(o,En.y),l.addScaledVector(r,En.z),l)}static getInterpolatedAttribute(e,t,i,a,s,o){return So.setScalar(0),Eo.setScalar(0),To.setScalar(0),So.fromBufferAttribute(e,t),Eo.fromBufferAttribute(e,i),To.fromBufferAttribute(e,a),o.setScalar(0),o.addScaledVector(So,s.x),o.addScaledVector(Eo,s.y),o.addScaledVector(To,s.z),o}static isFrontFacing(e,t,i,a){return rn.subVectors(i,t),Sn.subVectors(e,t),rn.cross(Sn).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),rn.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,s){return hn.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,s=this.c;let o,r;Di.subVectors(a,i),Pi.subVectors(s,i),yo.subVectors(e,i);const l=Di.dot(yo),c=Pi.dot(yo);if(l<=0&&c<=0)return t.copy(i);bo.subVectors(e,a);const h=Di.dot(bo),d=Pi.dot(bo);if(h>=0&&d<=h)return t.copy(a);const p=l*d-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Di,o);Mo.subVectors(e,s);const f=Di.dot(Mo),g=Pi.dot(Mo);if(g>=0&&f<=g)return t.copy(s);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return r=c/(c-g),t.copy(i).addScaledVector(Pi,r);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return ac.subVectors(s,a),r=(d-h)/(d-h+(f-g)),t.copy(a).addScaledVector(ac,r);const u=1/(m+v+p);return o=v*u,r=p*u,t.copy(i).addScaledVector(Di,o).addScaledVector(Pi,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function Ao(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ee{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=Ke.workingColorSpace){if(e=xl(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ao(o,s,e+1/3),this.g=Ao(o,s,e),this.b=Ao(o,s,e-1/3)}return Ke.colorSpaceToWorking(this,a),this}setStyle(e,t=Qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=a[1],r=a[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=wu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Ke.workingToColorSpace(Ct.copy(this),e),Math.round($e(Ct.r*255,0,255))*65536+Math.round($e(Ct.g*255,0,255))*256+Math.round($e(Ct.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Ct.copy(this),t);const i=Ct.r,a=Ct.g,s=Ct.b,o=Math.max(i,a,s),r=Math.min(i,a,s);let l,c;const h=(r+o)/2;if(r===o)l=0,c=0;else{const d=o-r;switch(c=h<=.5?d/(o+r):d/(2-o-r),o){case i:l=(a-s)/d+(a<s?6:0);break;case a:l=(s-i)/d+2;break;case s:l=(i-a)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Qt){Ke.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,a=Ct.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(Ja);const i=ba(Xn.h,Ja.h,t),a=ba(Xn.s,Ja.s,t),s=ba(Xn.l,Ja.l,t);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*a,this.g=s[1]*t+s[4]*i+s[7]*a,this.b=s[2]*t+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Ee;Ee.NAMES=wu;let np=0;class $s extends oa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=ra(),this.name="",this.type="Material",this.blending=Yi,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dr,this.blendDst=fr,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(i.blending=this.blending),this.side!==gn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dr&&(i.blendSrc=this.blendSrc),this.blendDst!==fr&&(i.blendDst=this.blendDst),this.blendEquation!==di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const o=[];for(const r in s){const l=s[r];delete l.metadata,o.push(l)}return o}if(t){const s=a(e.textures),o=a(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xu extends $s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ln=ip();function ip(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),a=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,a[l]=24,a[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,a[l]=-c-1,a[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,a[l]=13,a[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,a[l]=24,a[l|256]=24):(i[l]=31744,i[l|256]=64512,a[l]=13,a[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),r=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(r[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:a,mantissaTable:s,exponentTable:o,offsetTable:r}}function ap(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=$e(n,-65504,65504),Ln.floatView[0]=n;const e=Ln.uint32View[0],t=e>>23&511;return Ln.baseTable[t]+((e&8388607)>>Ln.shiftTable[t])}function sp(n){const e=n>>10;return Ln.uint32View[0]=Ln.mantissaTable[Ln.offsetTable[e]+(n&1023)]+Ln.exponentTable[e],Ln.floatView[0]}class _u{static toHalfFloat(e){return ap(e)}static fromHalfFloat(e){return sp(e)}}const xt=new N,Qa=new Oe;let op=0;class dt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:op++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wl,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Qa.fromBufferAttribute(this,t),Qa.applyMatrix3(e),this.setXY(t,Qa.x,Qa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),a=Ft(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),a=Ft(a,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wl&&(e.usage=this.usage),e}}class qs extends dt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ys extends dt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class qt extends dt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let rp=0;const Kt=new ot,Ro=new Yt,Li=new N,Vt=new Ua,fa=new Ua,St=new N;class At extends oa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=ra(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pu(e)?Ys:qs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,i){return Kt.makeTranslation(e,t,i),this.applyMatrix4(Kt),this}scale(e,t,i){return Kt.makeScale(e,t,i),this.applyMatrix4(Kt),this}lookAt(e){return Ro.lookAt(e),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,s=e.length;a<s;a++){const o=e[a];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qt(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const s=e[a];t.setXYZ(a,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ua);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const s=t[i];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const r=t[s];fa.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(Vt.min,fa.min),Vt.expandByPoint(St),St.addVectors(Vt.max,fa.max),Vt.expandByPoint(St)):(Vt.expandByPoint(fa.min),Vt.expandByPoint(fa.max))}Vt.getCenter(i);let a=0;for(let s=0,o=e.count;s<o;s++)St.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(St));if(t)for(let s=0,o=t.length;s<o;s++){const r=t[s],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)St.fromBufferAttribute(r,c),l&&(Li.fromBufferAttribute(e,c),St.add(Li)),a=Math.max(a,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),r=[],l=[];for(let C=0;C<i.count;C++)r[C]=new N,l[C]=new N;const c=new N,h=new N,d=new N,p=new Oe,f=new Oe,g=new Oe,v=new N,m=new N;function u(C,M,b){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),d.fromBufferAttribute(i,b),p.fromBufferAttribute(s,C),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,b),h.sub(c),d.sub(c),f.sub(p),g.sub(p);const T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(T),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(T),r[C].add(v),r[M].add(v),r[b].add(v),l[C].add(m),l[M].add(m),l[b].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let C=0,M=w.length;C<M;++C){const b=w[C],T=b.start,P=b.count;for(let I=T,F=T+P;I<F;I+=3)u(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const x=new N,_=new N,y=new N,S=new N;function A(C){y.fromBufferAttribute(a,C),S.copy(y);const M=r[C];x.copy(M),x.sub(y.multiplyScalar(y.dot(M))).normalize(),_.crossVectors(S,M);const T=_.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,T)}for(let C=0,M=w.length;C<M;++C){const b=w[C],T=b.start,P=b.count;for(let I=T,F=T+P;I<F;I+=3)A(e.getX(I+0)),A(e.getX(I+1)),A(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,f=i.count;p<f;p++)i.setXYZ(p,0,0,0);const a=new N,s=new N,o=new N,r=new N,l=new N,c=new N,h=new N,d=new N;if(e)for(let p=0,f=e.count;p<f;p+=3){const g=e.getX(p+0),v=e.getX(p+1),m=e.getX(p+2);a.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,s),d.subVectors(a,s),h.cross(d),r.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),r.add(h),l.add(h),c.add(h),i.setXYZ(g,r.x,r.y,r.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=t.count;p<f;p+=3)a.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,s),d.subVectors(a,s),h.cross(d),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(r,l){const c=r.array,h=r.itemSize,d=r.normalized,p=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){r.isInterleavedBufferAttribute?f=l[v]*r.data.stride+r.offset:f=l[v]*h;for(let u=0;u<h;u++)p[g++]=c[f++]}return new dt(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,i=this.index.array,a=this.attributes;for(const r in a){const l=a[r],c=e(l,i);t.setAttribute(r,c)}const s=this.morphAttributes;for(const r in s){const l=[],c=s[r];for(let h=0,d=c.length;h<d;h++){const p=c[h],f=e(p,i);l.push(f)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,l=o.length;r<l;r++){const c=o[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,p=c.length;d<p;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(a[l]=h,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere=r.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const h=a[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sc=new ot,ai=new jf,es=new On,oc=new N,ts=new N,ns=new N,is=new N,Co=new N,as=new N,rc=new N,ss=new N;class _t extends Yt{constructor(e=new At,t=new xu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=a.length;s<o;s++){const r=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const r=this.morphTargetInfluences;if(s&&r){as.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=r[l],d=s[l];h!==0&&(Co.fromBufferAttribute(d,e),o?as.addScaledVector(Co,h):as.addScaledVector(Co.sub(t),h))}t.add(as)}return t}raycast(e,t){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),es.copy(i.boundingSphere),es.applyMatrix4(s),ai.copy(e.ray).recast(e.near),!(es.containsPoint(ai.origin)===!1&&(ai.intersectSphere(es,oc)===null||ai.origin.distanceToSquared(oc)>(e.far-e.near)**2))&&(sc.copy(s).invert(),ai.copy(e.ray).applyMatrix4(sc),!(i.boundingBox!==null&&ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ai)))}_computeIntersections(e,t,i){let a;const s=this.geometry,o=this.material,r=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,p=s.groups,f=s.drawRange;if(r!==null)if(Array.isArray(o))for(let g=0,v=p.length;g<v;g++){const m=p[g],u=o[m.materialIndex],w=Math.max(m.start,f.start),x=Math.min(r.count,Math.min(m.start+m.count,f.start+f.count));for(let _=w,y=x;_<y;_+=3){const S=r.getX(_),A=r.getX(_+1),C=r.getX(_+2);a=os(this,u,e,i,c,h,d,S,A,C),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,f.start),v=Math.min(r.count,f.start+f.count);for(let m=g,u=v;m<u;m+=3){const w=r.getX(m),x=r.getX(m+1),_=r.getX(m+2);a=os(this,o,e,i,c,h,d,w,x,_),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=p.length;g<v;g++){const m=p[g],u=o[m.materialIndex],w=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=w,y=x;_<y;_+=3){const S=_,A=_+1,C=_+2;a=os(this,u,e,i,c,h,d,S,A,C),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,u=v;m<u;m+=3){const w=m,x=m+1,_=m+2;a=os(this,o,e,i,c,h,d,w,x,_),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function lp(n,e,t,i,a,s,o,r){let l;if(e.side===Ot?l=i.intersectTriangle(o,s,a,!0,r):l=i.intersectTriangle(a,s,o,e.side===gn,r),l===null)return null;ss.copy(r),ss.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ss);return c<t.near||c>t.far?null:{distance:c,point:ss.clone(),object:n}}function os(n,e,t,i,a,s,o,r,l,c){n.getVertexPosition(r,ts),n.getVertexPosition(l,ns),n.getVertexPosition(c,is);const h=lp(n,e,t,i,ts,ns,is,rc);if(h){const d=new N;hn.getBarycoord(rc,ts,ns,is,d),a&&(h.uv=hn.getInterpolatedAttribute(a,r,l,c,d,new Oe)),s&&(h.uv1=hn.getInterpolatedAttribute(s,r,l,c,d,new Oe)),o&&(h.normal=hn.getInterpolatedAttribute(o,r,l,c,d,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:r,b:l,c,normal:new N,materialIndex:0};hn.getNormal(ts,ns,is,p.normal),h.face=p,h.barycoord=d}return h}class Na extends At{constructor(e=1,t=1,i=1,a=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:s,depthSegments:o};const r=this;a=Math.floor(a),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let p=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,a,o,2),g("x","z","y",1,-1,e,i,-t,a,o,3),g("x","y","z",1,-1,e,t,i,a,s,4),g("x","y","z",-1,-1,e,t,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(d,2));function g(v,m,u,w,x,_,y,S,A,C,M){const b=_/A,T=y/C,P=_/2,I=y/2,F=S/2,k=A+1,H=C+1;let V=0,z=0;const j=new N;for(let ee=0;ee<H;ee++){const oe=ee*T-I;for(let Se=0;Se<k;Se++){const Ve=Se*b-P;j[v]=Ve*w,j[m]=oe*x,j[u]=F,c.push(j.x,j.y,j.z),j[v]=0,j[m]=0,j[u]=S>0?1:-1,h.push(j.x,j.y,j.z),d.push(Se/A),d.push(1-ee/C),V+=1}}for(let ee=0;ee<C;ee++)for(let oe=0;oe<A;oe++){const Se=p+oe+k*ee,Ve=p+oe+k*(ee+1),Ne=p+(oe+1)+k*(ee+1),Le=p+(oe+1)+k*ee;l.push(Se,Ve,Le),l.push(Ve,Ne,Le),z+=6}r.addGroup(f,z,M),f+=z,p+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function na(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function Ut(n){const e={};for(let t=0;t<n.length;t++){const i=na(n[t]);for(const a in i)e[a]=i[a]}return e}function cp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function yu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const hp={clone:na,merge:Ut};var up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends $s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=up,this.fragmentShader=dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=na(e.uniforms),this.uniformsGroups=cp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const o=this.uniforms[a].value;o&&o.isTexture?t.uniforms[a]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[a]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[a]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[a]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[a]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[a]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[a]={type:"m4",value:o.toArray()}:t.uniforms[a]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class yl extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new N,lc=new Oe,cc=new Oe;class en extends yl{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Da*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,lc,cc),t.subVectors(cc,lc)}setViewOffset(e,t,i,a,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ya*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,s=-.5*a;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*a/l,t-=o.offsetY*i/c,a*=o.width/l,i*=o.height/c}const r=this.filmOffset;r!==0&&(s+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ii=-90,Fi=1;class fp extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new en(Ii,Fi,e,t);a.layers=this.layers,this.add(a);const s=new en(Ii,Fi,e,t);s.layers=this.layers,this.add(s);const o=new en(Ii,Fi,e,t);o.layers=this.layers,this.add(o);const r=new en(Ii,Fi,e,t);r.layers=this.layers,this.add(r);const l=new en(Ii,Fi,e,t);l.layers=this.layers,this.add(l);const c=new en(Ii,Fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,s,o,r,l]=t;for(const c of t)this.remove(c);if(e===mn)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Us)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,r,l,c,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,s),e.setRenderTarget(i,1,a),e.render(t,o),e.setRenderTarget(i,2,a),e.render(t,r),e.setRenderTarget(i,3,a),e.render(t,l),e.setRenderTarget(i,4,a),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,a),e.render(t,h),e.setRenderTarget(d,p,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class bu extends Pt{constructor(e=[],t=ea,i,a,s,o,r,l,c,h){super(e,t,i,a,s,o,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mu extends Lt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new bu(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Na(5,5,5),s=new zn({name:"CubemapFromEquirect",uniforms:na(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:Kn});s.uniforms.tEquirect.value=t;const o=new _t(a,s),r=t.minFilter;return t.minFilter===In&&(t.minFilter=et),new fp(1,10,this).update(e,o),t.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,a);e.setRenderTarget(s)}}class jn extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pp={type:"move"};class Do{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,s=null,o=null;const r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&p>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(r.matrix.fromArray(a.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,a.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(a.linearVelocity)):r.hasLinearVelocity=!1,a.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(a.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(pp)))}return r!==null&&(r.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new jn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Fn extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class xi extends Pt{constructor(e=null,t=1,i=1,a,s,o,r,l,c=mt,h=mt,d,p){super(null,o,r,l,c,h,a,s,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mp extends dt{constructor(e,t,i,a=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Po=new N,gp=new N,vp=new Be;class hi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Po.subVectors(i,t).cross(gp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Po),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||vp.getNormalMatrix(e),a=this.coplanarPoint(Po).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const si=new On,wp=new Oe(.5,.5),rs=new N;class Su{constructor(e=new hi,t=new hi,i=new hi,a=new hi,s=new hi,o=new hi){this.planes=[e,t,i,a,s,o]}set(e,t,i,a,s,o){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(i),r[3].copy(a),r[4].copy(s),r[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=mn,i=!1){const a=this.planes,s=e.elements,o=s[0],r=s[1],l=s[2],c=s[3],h=s[4],d=s[5],p=s[6],f=s[7],g=s[8],v=s[9],m=s[10],u=s[11],w=s[12],x=s[13],_=s[14],y=s[15];if(a[0].setComponents(c-o,f-h,u-g,y-w).normalize(),a[1].setComponents(c+o,f+h,u+g,y+w).normalize(),a[2].setComponents(c+r,f+d,u+v,y+x).normalize(),a[3].setComponents(c-r,f-d,u-v,y-x).normalize(),i)a[4].setComponents(l,p,m,_).normalize(),a[5].setComponents(c-l,f-p,u-m,y-_).normalize();else if(a[4].setComponents(c-l,f-p,u-m,y-_).normalize(),t===mn)a[5].setComponents(c+l,f+p,u+m,y+_).normalize();else if(t===Us)a[5].setComponents(l,p,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(e){si.center.set(0,0,0);const t=wp.distanceTo(e.center);return si.radius=.7071067811865476+t,si.applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(rs.x=a.normal.x>0?e.max.x:e.min.x,rs.y=a.normal.y>0?e.max.y:e.min.y,rs.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xp extends Pt{constructor(e,t,i,a,s,o,r,l,c){super(e,t,i,a,s,o,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ka extends Pt{constructor(e,t,i=vn,a,s,o,r=mt,l=mt,c,h=Jn,d=1){if(h!==Jn&&h!==Ca)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:d};super(p,a,s,o,r,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _l(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Eu extends Pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class js extends At{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const s=e/2,o=t/2,r=Math.floor(i),l=Math.floor(a),c=r+1,h=l+1,d=e/r,p=t/l,f=[],g=[],v=[],m=[];for(let u=0;u<h;u++){const w=u*p-o;for(let x=0;x<c;x++){const _=x*d-s;g.push(_,-w,0),v.push(0,0,1),m.push(x/r),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let w=0;w<r;w++){const x=w+c*u,_=w+c*(u+1),y=w+1+c*(u+1),S=w+1+c*u;f.push(x,_,S),f.push(_,y,S)}this.setIndex(f),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.width,e.height,e.widthSegments,e.heightSegments)}}class nn extends zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _p extends $s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ff,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yp extends $s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Zs extends yl{constructor(e=-1,t=1,i=1,a=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,o=i+e,r=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,r,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class hc extends At{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class bp extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Mp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function uc(n,e,t,i){const a=Sp(i);switch(t){case hu:return n*e;case Qn:return n*e/a.components*a.byteLength;case gl:return n*e/a.components*a.byteLength;case du:return n*e*2/a.components*a.byteLength;case vl:return n*e*2/a.components*a.byteLength;case uu:return n*e*3/a.components*a.byteLength;case wt:return n*e*4/a.components*a.byteLength;case wl:return n*e*4/a.components*a.byteLength;case bs:case Ms:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ss:case Es:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Er:case Ar:return Math.max(n,16)*Math.max(e,8)/4;case Sr:case Tr:return Math.max(n,8)*Math.max(e,8)/2;case Rr:case Cr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Dr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lr:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ir:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Fr:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ur:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Nr:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case kr:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Or:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case zr:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Br:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Hr:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Gr:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Vr:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Wr:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Xr:case $r:case qr:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Yr:case jr:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Zr:case Kr:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sp(n){switch(n){case yt:case ou:return{byteLength:1,components:1};case Aa:case ru:case wn:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case vn:case fl:case pn:return{byteLength:4,components:1};case lu:case cu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tu(){let n=null,e=!1,t=null,i=null;function a(s,o){t(s,o),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ep(n){const e=new WeakMap;function t(r,l){const c=r.array,h=r.usage,d=c.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,c,h),r.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:d}}function i(r,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,r),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<d.length;f++){const g=d[p],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,d[p]=v)}d.length=p+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(r){return r.isInterleavedBufferAttribute&&(r=r.data),e.get(r)}function s(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=e.get(r);l&&(n.deleteBuffer(l.buffer),e.delete(r))}function o(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const h=e.get(r);(!h||h.version<r.version)&&e.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=e.get(r);if(c===void 0)e.set(r,t(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,r,l),c.version=r.version}}return{get:a,remove:s,update:o}}var Tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ap=`#ifdef USE_ALPHAHASH
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
#endif`,Rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lp=`#ifdef USE_AOMAP
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
#endif`,Ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zp=`#ifdef USE_IRIDESCENCE
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
#endif`,Bp=`#ifdef USE_BUMPMAP
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jp=`#define PI 3.141592653589793
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
} // validated`,Zp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kp=`vec3 transformedNormal = objectNormal;
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
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",im=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,am=`#ifdef USE_ENVMAP
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
#endif`,sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fm=`#ifdef USE_GRADIENTMAP
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
}`,pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vm=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,wm=`#ifdef USE_ENVMAP
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
#endif`,xm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mm=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Sm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Em=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Um=`#if defined( USE_POINTS_UV )
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
#endif`,Nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,km=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,Gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ym=`#ifdef USE_NORMALMAP
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
#endif`,jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,t0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,c0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,h0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,u0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d0=`#ifdef USE_SKINNING
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
#endif`,f0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p0=`#ifdef USE_SKINNING
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
#endif`,m0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w0=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,x0=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_0=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const E0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T0=`uniform sampler2D t2D;
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`#include <common>
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
}`,L0=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,I0=`#define DISTANCE
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
}`,F0=`#define DISTANCE
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
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`uniform float scale;
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
}`,O0=`uniform vec3 diffuse;
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
}`,z0=`#include <common>
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
}`,B0=`uniform vec3 diffuse;
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
}`,H0=`#define LAMBERT
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
}`,G0=`#define LAMBERT
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
}`,V0=`#define MATCAP
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
}`,W0=`#define MATCAP
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
}`,X0=`#define NORMAL
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
}`,$0=`#define NORMAL
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
}`,q0=`#define PHONG
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
}`,Y0=`#define PHONG
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
}`,j0=`#define STANDARD
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
}`,Z0=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,K0=`#define TOON
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
}`,J0=`#define TOON
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
}`,Q0=`uniform float size;
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
}`,eg=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,ng=`uniform vec3 color;
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
}`,ig=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,ag=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:Tp,alphahash_pars_fragment:Ap,alphamap_fragment:Rp,alphamap_pars_fragment:Cp,alphatest_fragment:Dp,alphatest_pars_fragment:Pp,aomap_fragment:Lp,aomap_pars_fragment:Ip,batching_pars_vertex:Fp,batching_vertex:Up,begin_vertex:Np,beginnormal_vertex:kp,bsdfs:Op,iridescence_fragment:zp,bumpmap_pars_fragment:Bp,clipping_planes_fragment:Hp,clipping_planes_pars_fragment:Gp,clipping_planes_pars_vertex:Vp,clipping_planes_vertex:Wp,color_fragment:Xp,color_pars_fragment:$p,color_pars_vertex:qp,color_vertex:Yp,common:jp,cube_uv_reflection_fragment:Zp,defaultnormal_vertex:Kp,displacementmap_pars_vertex:Jp,displacementmap_vertex:Qp,emissivemap_fragment:em,emissivemap_pars_fragment:tm,colorspace_fragment:nm,colorspace_pars_fragment:im,envmap_fragment:am,envmap_common_pars_fragment:sm,envmap_pars_fragment:om,envmap_pars_vertex:rm,envmap_physical_pars_fragment:wm,envmap_vertex:lm,fog_vertex:cm,fog_pars_vertex:hm,fog_fragment:um,fog_pars_fragment:dm,gradientmap_pars_fragment:fm,lightmap_pars_fragment:pm,lights_lambert_fragment:mm,lights_lambert_pars_fragment:gm,lights_pars_begin:vm,lights_toon_fragment:xm,lights_toon_pars_fragment:_m,lights_phong_fragment:ym,lights_phong_pars_fragment:bm,lights_physical_fragment:Mm,lights_physical_pars_fragment:Sm,lights_fragment_begin:Em,lights_fragment_maps:Tm,lights_fragment_end:Am,logdepthbuf_fragment:Rm,logdepthbuf_pars_fragment:Cm,logdepthbuf_pars_vertex:Dm,logdepthbuf_vertex:Pm,map_fragment:Lm,map_pars_fragment:Im,map_particle_fragment:Fm,map_particle_pars_fragment:Um,metalnessmap_fragment:Nm,metalnessmap_pars_fragment:km,morphinstance_vertex:Om,morphcolor_vertex:zm,morphnormal_vertex:Bm,morphtarget_pars_vertex:Hm,morphtarget_vertex:Gm,normal_fragment_begin:Vm,normal_fragment_maps:Wm,normal_pars_fragment:Xm,normal_pars_vertex:$m,normal_vertex:qm,normalmap_pars_fragment:Ym,clearcoat_normal_fragment_begin:jm,clearcoat_normal_fragment_maps:Zm,clearcoat_pars_fragment:Km,iridescence_pars_fragment:Jm,opaque_fragment:Qm,packing:e0,premultiplied_alpha_fragment:t0,project_vertex:n0,dithering_fragment:i0,dithering_pars_fragment:a0,roughnessmap_fragment:s0,roughnessmap_pars_fragment:o0,shadowmap_pars_fragment:r0,shadowmap_pars_vertex:l0,shadowmap_vertex:c0,shadowmask_pars_fragment:h0,skinbase_vertex:u0,skinning_pars_vertex:d0,skinning_vertex:f0,skinnormal_vertex:p0,specularmap_fragment:m0,specularmap_pars_fragment:g0,tonemapping_fragment:v0,tonemapping_pars_fragment:w0,transmission_fragment:x0,transmission_pars_fragment:_0,uv_pars_fragment:y0,uv_pars_vertex:b0,uv_vertex:M0,worldpos_vertex:S0,background_vert:E0,background_frag:T0,backgroundCube_vert:A0,backgroundCube_frag:R0,cube_vert:C0,cube_frag:D0,depth_vert:P0,depth_frag:L0,distanceRGBA_vert:I0,distanceRGBA_frag:F0,equirect_vert:U0,equirect_frag:N0,linedashed_vert:k0,linedashed_frag:O0,meshbasic_vert:z0,meshbasic_frag:B0,meshlambert_vert:H0,meshlambert_frag:G0,meshmatcap_vert:V0,meshmatcap_frag:W0,meshnormal_vert:X0,meshnormal_frag:$0,meshphong_vert:q0,meshphong_frag:Y0,meshphysical_vert:j0,meshphysical_frag:Z0,meshtoon_vert:K0,meshtoon_frag:J0,points_vert:Q0,points_frag:eg,shadow_vert:tg,shadow_frag:ng,sprite_vert:ig,sprite_frag:ag},le={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},fn={basic:{uniforms:Ut([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Ut([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ee(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Ut([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Ut([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Ut([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ee(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Ut([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Ut([le.points,le.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Ut([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Ut([le.common,le.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Ut([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Ut([le.sprite,le.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Ut([le.common,le.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Ut([le.lights,le.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};fn.physical={uniforms:Ut([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const ls={r:0,b:0,g:0},oi=new xn,sg=new ot;function og(n,e,t,i,a,s,o){const r=new Ee(0);let l=s===!0?0:1,c,h,d=null,p=0,f=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_)),_}function v(x){let _=!1;const y=g(x);y===null?u(r,l):y&&y.isColor&&(u(y,1),_=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,_){const y=g(_);y&&(y.isCubeTexture||y.mapping===Xs)?(h===void 0&&(h=new _t(new Na(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:na(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),oi.copy(_.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(sg.makeRotationFromEuler(oi)),h.material.toneMapped=Ke.getTransfer(y.colorSpace)!==nt,(d!==y||p!==y.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=y,p=y.version,f=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new _t(new js(2,2),new zn({name:"BackgroundMaterial",uniforms:na(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(y.colorSpace)!==nt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||p!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,p=y.version,f=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,_){x.getRGB(ls,yu(n)),i.buffers.color.setClear(ls.r,ls.g,ls.b,_,o)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(x,_=1){r.set(x),l=_,u(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(r,l)},render:v,addToRenderList:m,dispose:w}}function rg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=p(null);let s=a,o=!1;function r(b,T,P,I,F){let k=!1;const H=d(I,P,T);s!==H&&(s=H,c(s.object)),k=f(b,I,P,F),k&&g(b,I,P,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,_(b,T,P,I),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function d(b,T,P){const I=P.wireframe===!0;let F=i[b.id];F===void 0&&(F={},i[b.id]=F);let k=F[T.id];k===void 0&&(k={},F[T.id]=k);let H=k[I];return H===void 0&&(H=p(l()),k[I]=H),H}function p(b){const T=[],P=[],I=[];for(let F=0;F<t;F++)T[F]=0,P[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:P,attributeDivisors:I,object:b,attributes:{},index:null}}function f(b,T,P,I){const F=s.attributes,k=T.attributes;let H=0;const V=P.getAttributes();for(const z in V)if(V[z].location>=0){const ee=F[z];let oe=k[z];if(oe===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor)),ee===void 0||ee.attribute!==oe||oe&&ee.data!==oe.data)return!0;H++}return s.attributesNum!==H||s.index!==I}function g(b,T,P,I){const F={},k=T.attributes;let H=0;const V=P.getAttributes();for(const z in V)if(V[z].location>=0){let ee=k[z];ee===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(ee=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(ee=b.instanceColor));const oe={};oe.attribute=ee,ee&&ee.data&&(oe.data=ee.data),F[z]=oe,H++}s.attributes=F,s.attributesNum=H,s.index=I}function v(){const b=s.newAttributes;for(let T=0,P=b.length;T<P;T++)b[T]=0}function m(b){u(b,0)}function u(b,T){const P=s.newAttributes,I=s.enabledAttributes,F=s.attributeDivisors;P[b]=1,I[b]===0&&(n.enableVertexAttribArray(b),I[b]=1),F[b]!==T&&(n.vertexAttribDivisor(b,T),F[b]=T)}function w(){const b=s.newAttributes,T=s.enabledAttributes;for(let P=0,I=T.length;P<I;P++)T[P]!==b[P]&&(n.disableVertexAttribArray(P),T[P]=0)}function x(b,T,P,I,F,k,H){H===!0?n.vertexAttribIPointer(b,T,P,F,k):n.vertexAttribPointer(b,T,P,I,F,k)}function _(b,T,P,I){v();const F=I.attributes,k=P.getAttributes(),H=T.defaultAttributeValues;for(const V in k){const z=k[V];if(z.location>=0){let j=F[V];if(j===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(j=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(j=b.instanceColor)),j!==void 0){const ee=j.normalized,oe=j.itemSize,Se=e.get(j);if(Se===void 0)continue;const Ve=Se.buffer,Ne=Se.type,Le=Se.bytesPerElement,q=Ne===n.INT||Ne===n.UNSIGNED_INT||j.gpuType===fl;if(j.isInterleavedBufferAttribute){const J=j.data,fe=J.stride,Ce=j.offset;if(J.isInstancedInterleavedBuffer){for(let we=0;we<z.locationSize;we++)u(z.location+we,J.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let we=0;we<z.locationSize;we++)m(z.location+we);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let we=0;we<z.locationSize;we++)x(z.location+we,oe/z.locationSize,Ne,ee,fe*Le,(Ce+oe/z.locationSize*we)*Le,q)}else{if(j.isInstancedBufferAttribute){for(let J=0;J<z.locationSize;J++)u(z.location+J,j.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let J=0;J<z.locationSize;J++)m(z.location+J);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let J=0;J<z.locationSize;J++)x(z.location+J,oe/z.locationSize,Ne,ee,oe*Le,oe/z.locationSize*J*Le,q)}}else if(H!==void 0){const ee=H[V];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(z.location,ee);break;case 3:n.vertexAttrib3fv(z.location,ee);break;case 4:n.vertexAttrib4fv(z.location,ee);break;default:n.vertexAttrib1fv(z.location,ee)}}}}w()}function y(){C();for(const b in i){const T=i[b];for(const P in T){const I=T[P];for(const F in I)h(I[F].object),delete I[F];delete T[P]}delete i[b]}}function S(b){if(i[b.id]===void 0)return;const T=i[b.id];for(const P in T){const I=T[P];for(const F in I)h(I[F].object),delete I[F];delete T[P]}delete i[b.id]}function A(b){for(const T in i){const P=i[T];if(P[b.id]===void 0)continue;const I=P[b.id];for(const F in I)h(I[F].object),delete I[F];delete P[b.id]}}function C(){M(),o=!0,s!==a&&(s=a,c(s.object))}function M(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:r,reset:C,resetDefaultState:M,dispose:y,releaseStatesOfGeometry:S,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function lg(n,e,t){let i;function a(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function r(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,i,1)}function l(c,h,d,p){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,p,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*p[v];t.update(g,i,1)}}this.setMode=a,this.render=s,this.renderInstances=o,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function cg(n,e,t,i){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function o(A){return!(A!==wt&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(A){const C=A===wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==yt&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==pn&&!C)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=g>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:w,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:y,maxSamples:S}}function hg(n){const e=this;let t=null,i=0,a=!1,s=!1;const o=new hi,r=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||i!==0||a;return a=p,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,u=n.get(d);if(!a||g===null||g.length===0||s&&!m)s?h(null):c();else{const w=s?0:i,x=w*4;let _=u.clippingState||null;l.value=_,_=h(g,p,x,f);for(let y=0;y!==x;++y)_[y]=t[y];u.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,p,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const u=f+v*4,w=p.matrixWorldInverse;r.getNormalMatrix(w),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,_=f;x!==v;++x,_+=4)o.copy(d[x]).applyMatrix4(w,r),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function ug(n){let e=new WeakMap;function t(o,r){return r===yr?o.mapping=ea:r===br&&(o.mapping=ta),o}function i(o){if(o&&o.isTexture){const r=o.mapping;if(r===yr||r===br)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Mu(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",a),t(c.texture,o.mapping)}else return null}}return o}function a(o){const r=o.target;r.removeEventListener("dispose",a);const l=e.get(r);l!==void 0&&(e.delete(r),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Xi=4,dc=[.125,.215,.35,.446,.526,.582],fi=20,Lo=new Zs,fc=new Ee;let Io=null,Fo=0,Uo=0,No=!1;const ui=(1+Math.sqrt(5))/2,Ui=1/ui,pc=[new N(-ui,Ui,0),new N(ui,Ui,0),new N(-Ui,0,ui),new N(Ui,0,ui),new N(0,ui,-Ui),new N(0,ui,Ui),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],dg=new N;class mc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100,s={}){const{size:o=256,position:r=dg}=s;Io=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,r),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Io,Fo,Uo),this._renderer.xr.enabled=No,e.scissorTest=!1,cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ea||e.mapping===ta?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Io=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:et,minFilter:et,generateMipmaps:!1,type:wn,format:wt,colorSpace:gi,depthBuffer:!1},a=gc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fg(s)),this._blurMaterial=pg(s,e,t)}return a}_compileMaterial(e){const t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,i,a,s){const l=new en(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(fc),d.toneMapping=Nn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(a),d.clearDepth(),d.setRenderTarget(null));const v=new xu({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),m=new _t(new Na,v);let u=!1;const w=e.background;w?w.isColor&&(v.color.copy(w),e.background=null,u=!0):(v.color.copy(fc),u=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[x],s.y,s.z)):_===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[x]));const y=this._cubeSize;cs(a,_*y,x>2?y:0,y,y),d.setRenderTarget(a),u&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=p,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===ea||e.mapping===ta;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vc());const s=a?this._cubemapMaterial:this._equirectMaterial,o=new _t(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=e;const l=this._cubeSize;cs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Lo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let s=1;s<a;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),r=pc[(a-s-1)%pc.length];this._blur(e,s-1,s,o,r)}t.autoClear=i}_blur(e,t,i,a,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,a,"latitudinal",s),this._halfBlur(o,e,i,i,a,"longitudinal",s)}_halfBlur(e,t,i,a,s,o,r){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new _t(this._lodPlanes[a],c),p=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*fi-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):fi;m>fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fi}`);const u=[];let w=0;for(let A=0;A<fi;++A){const C=A/v,M=Math.exp(-C*C/2);u.push(M),A===0?w+=M:A<m&&(w+=2*M)}for(let A=0;A<u.length;A++)u[A]=u[A]/w;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=o==="latitudinal",r&&(p.poleAxis.value=r);const{_lodMax:x}=this;p.dTheta.value=g,p.mipInt.value=x-i;const _=this._sizeLods[a],y=3*_*(a>x-Xi?a-x+Xi:0),S=4*(this._cubeSize-_);cs(t,y,S,3*_,2*_),l.setRenderTarget(t),l.render(d,Lo)}}function fg(n){const e=[],t=[],i=[];let a=n;const s=n-Xi+1+dc.length;for(let o=0;o<s;o++){const r=Math.pow(2,a);t.push(r);let l=1/r;o>n-Xi?l=dc[o-n+Xi-1]:o===0&&(l=0),i.push(l);const c=1/(r-2),h=-c,d=1+c,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,m=2,u=1,w=new Float32Array(v*g*f),x=new Float32Array(m*g*f),_=new Float32Array(u*g*f);for(let S=0;S<f;S++){const A=S%3*2/3-1,C=S>2?0:-1,M=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];w.set(M,v*g*S),x.set(p,m*g*S);const b=[S,S,S,S,S,S];_.set(b,u*g*S)}const y=new At;y.setAttribute("position",new dt(w,v)),y.setAttribute("uv",new dt(x,m)),y.setAttribute("faceIndex",new dt(_,u)),e.push(y),a>Xi&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function gc(n,e,t){const i=new Lt(n,e,t);return i.texture.mapping=Xs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cs(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function pg(n,e,t){const i=new Float32Array(fi),a=new N(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:bl(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function vc(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function wc(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function bl(){return`

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
	`}function mg(n){let e=new WeakMap,t=null;function i(r){if(r&&r.isTexture){const l=r.mapping,c=l===yr||l===br,h=l===ea||l===ta;if(c||h){let d=e.get(r);const p=d!==void 0?d.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==p)return t===null&&(t=new mc(n)),d=c?t.fromEquirectangular(r,d):t.fromCubemap(r,d),d.texture.pmremVersion=r.pmremVersion,e.set(r,d),d.texture;if(d!==void 0)return d.texture;{const f=r.image;return c&&f&&f.height>0||h&&f&&a(f)?(t===null&&(t=new mc(n)),d=c?t.fromEquirectangular(r):t.fromCubemap(r),d.texture.pmremVersion=r.pmremVersion,e.set(r,d),r.addEventListener("dispose",s),d.texture):null}}}return r}function a(r){let l=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function s(r){const l=r.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function gg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&Pa("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function vg(n,e,t,i){const a={},s=new WeakMap;function o(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete a[p.id];const f=s.get(p);f&&(e.remove(f),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function r(d,p){return a[p.id]===!0||(p.addEventListener("dispose",o),a[p.id]=!0,t.memory.geometries++),p}function l(d){const p=d.attributes;for(const f in p)e.update(p[f],n.ARRAY_BUFFER)}function c(d){const p=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const w=f.array;v=f.version;for(let x=0,_=w.length;x<_;x+=3){const y=w[x+0],S=w[x+1],A=w[x+2];p.push(y,S,S,A,A,y)}}else if(g!==void 0){const w=g.array;v=g.version;for(let x=0,_=w.length/3-1;x<_;x+=3){const y=x+0,S=x+1,A=x+2;p.push(y,S,S,A,A,y)}}else return;const m=new(pu(p)?Ys:qs)(p,1);m.version=v;const u=s.get(d);u&&e.remove(u),s.set(d,m)}function h(d){const p=s.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:r,update:l,getWireframeAttribute:h}}function wg(n,e,t){let i;function a(p){i=p}let s,o;function r(p){s=p.type,o=p.bytesPerElement}function l(p,f){n.drawElements(i,f,s,p*o),t.update(f,i,1)}function c(p,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,p*o,g),t.update(f,i,g))}function h(p,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,g);let m=0;for(let u=0;u<g;u++)m+=f[u];t.update(m,i,1)}function d(p,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)c(p[u]/o,f[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,p,0,v,0,g);let u=0;for(let w=0;w<g;w++)u+=f[w]*v[w];t.update(u,i,1)}}this.setMode=a,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function xg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,r){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=r*(s/3);break;case n.LINES:t.lines+=r*(s/2);break;case n.LINE_STRIP:t.lines+=r*(s-1);break;case n.LINE_LOOP:t.lines+=r*s;break;case n.POINTS:t.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function _g(n,e,t){const i=new WeakMap,a=new vt;function s(o,r,l){const c=o.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,d=h!==void 0?h.length:0;let p=i.get(r);if(p===void 0||p.count!==d){let b=function(){C.dispose(),i.delete(r),r.removeEventListener("dispose",b)};var f=b;p!==void 0&&p.texture.dispose();const g=r.morphAttributes.position!==void 0,v=r.morphAttributes.normal!==void 0,m=r.morphAttributes.color!==void 0,u=r.morphAttributes.position||[],w=r.morphAttributes.normal||[],x=r.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let y=r.attributes.position.count*_,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const A=new Float32Array(y*S*4*d),C=new mu(A,y,S,d);C.type=pn,C.needsUpdate=!0;const M=_*4;for(let T=0;T<d;T++){const P=u[T],I=w[T],F=x[T],k=y*S*4*T;for(let H=0;H<P.count;H++){const V=H*M;g===!0&&(a.fromBufferAttribute(P,H),A[k+V+0]=a.x,A[k+V+1]=a.y,A[k+V+2]=a.z,A[k+V+3]=0),v===!0&&(a.fromBufferAttribute(I,H),A[k+V+4]=a.x,A[k+V+5]=a.y,A[k+V+6]=a.z,A[k+V+7]=0),m===!0&&(a.fromBufferAttribute(F,H),A[k+V+8]=a.x,A[k+V+9]=a.y,A[k+V+10]=a.z,A[k+V+11]=F.itemSize===4?a.w:1)}}p={count:d,texture:C,size:new Oe(y,S)},i.set(r,p),r.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=r.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function yg(n,e,t,i){let a=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(a.get(d)!==c&&(e.update(d),a.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),a.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;a.get(p)!==c&&(p.update(),a.set(p,c))}return d}function o(){a=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Au=new Pt,xc=new ka(1,1),Ru=new mu,Cu=new gu,Du=new bu,_c=[],yc=[],bc=new Float32Array(16),Mc=new Float32Array(9),Sc=new Float32Array(4);function la(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let s=_c[a];if(s===void 0&&(s=new Float32Array(a),_c[a]=s),e!==0){i.toArray(s,0);for(let o=1,r=0;o!==e;++o)r+=t,n[o].toArray(s,r)}return s}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ks(n,e){let t=yc[e];t===void 0&&(t=new Int32Array(e),yc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function bg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function Sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function Eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function Tg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,i))return;Sc.set(i),n.uniformMatrix2fv(this.addr,!1,Sc),Mt(t,i)}}function Ag(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,i))return;Mc.set(i),n.uniformMatrix3fv(this.addr,!1,Mc),Mt(t,i)}}function Rg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,i))return;bc.set(i),n.uniformMatrix4fv(this.addr,!1,bc),Mt(t,i)}}function Cg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function Pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function Lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function Ig(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Fg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function Ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function Ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function kg(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let s;this.type===n.SAMPLER_2D_SHADOW?(xc.compareFunction=fu,s=xc):s=Au,t.setTexture2D(e||s,a)}function Og(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Cu,a)}function zg(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||Du,a)}function Bg(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Ru,a)}function Hg(n){switch(n){case 5126:return bg;case 35664:return Mg;case 35665:return Sg;case 35666:return Eg;case 35674:return Tg;case 35675:return Ag;case 35676:return Rg;case 5124:case 35670:return Cg;case 35667:case 35671:return Dg;case 35668:case 35672:return Pg;case 35669:case 35673:return Lg;case 5125:return Ig;case 36294:return Fg;case 36295:return Ug;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return Bg}}function Gg(n,e){n.uniform1fv(this.addr,e)}function Vg(n,e){const t=la(e,this.size,2);n.uniform2fv(this.addr,t)}function Wg(n,e){const t=la(e,this.size,3);n.uniform3fv(this.addr,t)}function Xg(n,e){const t=la(e,this.size,4);n.uniform4fv(this.addr,t)}function $g(n,e){const t=la(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function qg(n,e){const t=la(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Yg(n,e){const t=la(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function jg(n,e){n.uniform1iv(this.addr,e)}function Zg(n,e){n.uniform2iv(this.addr,e)}function Kg(n,e){n.uniform3iv(this.addr,e)}function Jg(n,e){n.uniform4iv(this.addr,e)}function Qg(n,e){n.uniform1uiv(this.addr,e)}function ev(n,e){n.uniform2uiv(this.addr,e)}function tv(n,e){n.uniform3uiv(this.addr,e)}function nv(n,e){n.uniform4uiv(this.addr,e)}function iv(n,e,t){const i=this.cache,a=e.length,s=Ks(t,a);bt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==a;++o)t.setTexture2D(e[o]||Au,s[o])}function av(n,e,t){const i=this.cache,a=e.length,s=Ks(t,a);bt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==a;++o)t.setTexture3D(e[o]||Cu,s[o])}function sv(n,e,t){const i=this.cache,a=e.length,s=Ks(t,a);bt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==a;++o)t.setTextureCube(e[o]||Du,s[o])}function ov(n,e,t){const i=this.cache,a=e.length,s=Ks(t,a);bt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==a;++o)t.setTexture2DArray(e[o]||Ru,s[o])}function rv(n){switch(n){case 5126:return Gg;case 35664:return Vg;case 35665:return Wg;case 35666:return Xg;case 35674:return $g;case 35675:return qg;case 35676:return Yg;case 5124:case 35670:return jg;case 35667:case 35671:return Zg;case 35668:case 35672:return Kg;case 35669:case 35673:return Jg;case 5125:return Qg;case 36294:return ev;case 36295:return tv;case 36296:return nv;case 35678:case 36198:case 36298:case 36306:case 35682:return iv;case 35679:case 36299:case 36307:return av;case 35680:case 36300:case 36308:case 36293:return sv;case 36289:case 36303:case 36311:case 36292:return ov}}class lv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Hg(t.type)}}class cv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rv(t.type)}}class hv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let s=0,o=a.length;s!==o;++s){const r=a[s];r.setValue(e,t[r.id],i)}}}const ko=/(\w+)(\])?(\[|\.)?/g;function Ec(n,e){n.seq.push(e),n.map[e.id]=e}function uv(n,e,t){const i=n.name,a=i.length;for(ko.lastIndex=0;;){const s=ko.exec(i),o=ko.lastIndex;let r=s[1];const l=s[2]==="]",c=s[3];if(l&&(r=r|0),c===void 0||c==="["&&o+2===a){Ec(t,c===void 0?new lv(r,n,e):new cv(r,n,e));break}else{let d=t.map[r];d===void 0&&(d=new hv(r),Ec(t,d)),t=d}}}class Ts{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=e.getActiveUniform(t,a),o=e.getUniformLocation(t,s.name);uv(s,o,this)}}setValue(e,t,i,a){const s=this.map[t];s!==void 0&&s.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let s=0,o=t.length;s!==o;++s){const r=t[s],l=i[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,s=e.length;a!==s;++a){const o=e[a];o.id in t&&i.push(o)}return i}}function Tc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const dv=37297;let fv=0;function pv(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=a;o<s;o++){const r=o+1;i.push(`${r===e?">":" "} ${r}: ${t[o]}`)}return i.join(`
`)}const Ac=new Be;function mv(n){Ke._getMatrix(Ac,Ke.workingColorSpace,n);const e=`mat3( ${Ac.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case Fs:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Rc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+pv(n.getShaderSource(e),r)}else return s}function gv(n,e){const t=mv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function vv(n,e){let t;switch(e){case sf:t="Linear";break;case of:t="Reinhard";break;case rf:t="Cineon";break;case lf:t="ACESFilmic";break;case hf:t="AgX";break;case uf:t="Neutral";break;case cf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hs=new N;function wv(){Ke.getLuminanceCoefficients(hs);const n=hs.x.toFixed(4),e=hs.y.toFixed(4),t=hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function _v(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=n.getActiveAttrib(e,a),o=s.name;let r=1;s.type===n.FLOAT_MAT2&&(r=2),s.type===n.FLOAT_MAT3&&(r=3),s.type===n.FLOAT_MAT4&&(r=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:r}}return t}function xa(n){return n!==""}function Cc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jr(n){return n.replace(bv,Sv)}const Mv=new Map;function Sv(n,e){let t=We[e];if(t===void 0){const i=Mv.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jr(t)}const Ev=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pc(n){return n.replace(Ev,Tv)}function Tv(n,e,t,i){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Lc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Av(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===iu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Cn&&(e="SHADOWMAP_TYPE_VSM"),e}function Rv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ea:case ta:e="ENVMAP_TYPE_CUBE";break;case Xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ta:e="ENVMAP_MODE_REFRACTION";break}return e}function Dv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case au:e="ENVMAP_BLENDING_MULTIPLY";break;case nf:e="ENVMAP_BLENDING_MIX";break;case af:e="ENVMAP_BLENDING_ADD";break}return e}function Pv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Lv(n,e,t,i){const a=n.getContext(),s=t.defines;let o=t.vertexShader,r=t.fragmentShader;const l=Av(t),c=Rv(t),h=Cv(t),d=Dv(t),p=Pv(t),f=xv(t),g=_v(s),v=a.createProgram();let m,u,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xa).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xa).join(`
`),u.length>0&&(u+=`
`)):(m=[Lc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),u=[Lc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?We.tonemapping_pars_fragment:"",t.toneMapping!==Nn?vv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,gv("linearToOutputTexel",t.outputColorSpace),wv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xa).join(`
`)),o=Jr(o),o=Cc(o,t),o=Dc(o,t),r=Jr(r),r=Cc(r,t),r=Dc(r,t),o=Pc(o),r=Pc(r),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===zt?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zt?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=w+m+o,_=w+u+r,y=Tc(a,a.VERTEX_SHADER,x),S=Tc(a,a.FRAGMENT_SHADER,_);a.attachShader(v,y),a.attachShader(v,S),t.index0AttributeName!==void 0?a.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v);function A(T){if(n.debug.checkShaderErrors){const P=a.getProgramInfoLog(v)||"",I=a.getShaderInfoLog(y)||"",F=a.getShaderInfoLog(S)||"",k=P.trim(),H=I.trim(),V=F.trim();let z=!0,j=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,v,y,S);else{const ee=Rc(a,y,"vertex"),oe=Rc(a,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+k+`
`+ee+`
`+oe)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(H===""||V==="")&&(j=!1);j&&(T.diagnostics={runnable:z,programLog:k,vertexShader:{log:H,prefix:m},fragmentShader:{log:V,prefix:u}})}a.deleteShader(y),a.deleteShader(S),C=new Ts(a,v),M=yv(a,v)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=a.getProgramParameter(v,dv)),b},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=S,this}let Iv=0;class Fv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(a)===!1&&(o.add(a),a.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Uv(e),t.set(e,i)),i}}class Uv{constructor(e){this.id=Iv++,this.code=e,this.usedTimes=0}}function Nv(n,e,t,i,a,s,o){const r=new vu,l=new Fv,c=new Set,h=[],d=a.logarithmicDepthBuffer,p=a.vertexTextures;let f=a.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,b,T,P,I){const F=P.fog,k=I.geometry,H=M.isMeshStandardMaterial?P.environment:null,V=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),z=V&&V.mapping===Xs?V.image.height:null,j=g[M.type];M.precision!==null&&(f=a.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const ee=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,oe=ee!==void 0?ee.length:0;let Se=0;k.morphAttributes.position!==void 0&&(Se=1),k.morphAttributes.normal!==void 0&&(Se=2),k.morphAttributes.color!==void 0&&(Se=3);let Ve,Ne,Le,q;if(j){const Je=fn[j];Ve=Je.vertexShader,Ne=Je.fragmentShader}else Ve=M.vertexShader,Ne=M.fragmentShader,l.update(M),Le=l.getVertexShaderID(M),q=l.getFragmentShaderID(M);const J=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),Ce=I.isInstancedMesh===!0,we=I.isBatchedMesh===!0,Xe=!!M.map,ct=!!M.matcap,L=!!V,it=!!M.aoMap,ke=!!M.lightMap,De=!!M.bumpMap,Z=!!M.normalMap,ze=!!M.displacementMap,ce=!!M.emissiveMap,Fe=!!M.metalnessMap,rt=!!M.roughnessMap,Te=M.anisotropy>0,D=M.clearcoat>0,E=M.dispersion>0,G=M.iridescence>0,Y=M.sheen>0,Q=M.transmission>0,$=Te&&!!M.anisotropyMap,be=D&&!!M.clearcoatMap,se=D&&!!M.clearcoatNormalMap,xe=D&&!!M.clearcoatRoughnessMap,_e=G&&!!M.iridescenceMap,ie=G&&!!M.iridescenceThicknessMap,de=Y&&!!M.sheenColorMap,Ie=Y&&!!M.sheenRoughnessMap,ye=!!M.specularMap,he=!!M.specularColorMap,Ge=!!M.specularIntensityMap,U=Q&&!!M.transmissionMap,ae=Q&&!!M.thicknessMap,re=!!M.gradientMap,me=!!M.alphaMap,te=M.alphaTest>0,K=!!M.alphaHash,ve=!!M.extensions;let He=Nn;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(He=n.toneMapping);const lt={shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:Ve,fragmentShader:Ne,defines:M.defines,customVertexShaderID:Le,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:we,batchingColor:we&&I._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&I.instanceColor!==null,instancingMorph:Ce&&I.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:gi,alphaToCoverage:!!M.alphaToCoverage,map:Xe,matcap:ct,envMap:L,envMapMode:L&&V.mapping,envMapCubeUVHeight:z,aoMap:it,lightMap:ke,bumpMap:De,normalMap:Z,displacementMap:p&&ze,emissiveMap:ce,normalMapObjectSpace:Z&&M.normalMapType===gf,normalMapTangentSpace:Z&&M.normalMapType===mf,metalnessMap:Fe,roughnessMap:rt,anisotropy:Te,anisotropyMap:$,clearcoat:D,clearcoatMap:be,clearcoatNormalMap:se,clearcoatRoughnessMap:xe,dispersion:E,iridescence:G,iridescenceMap:_e,iridescenceThicknessMap:ie,sheen:Y,sheenColorMap:de,sheenRoughnessMap:Ie,specularMap:ye,specularColorMap:he,specularIntensityMap:Ge,transmission:Q,transmissionMap:U,thicknessMap:ae,gradientMap:re,opaque:M.transparent===!1&&M.blending===Yi&&M.alphaToCoverage===!1,alphaMap:me,alphaTest:te,alphaHash:K,combine:M.combine,mapUv:Xe&&v(M.map.channel),aoMapUv:it&&v(M.aoMap.channel),lightMapUv:ke&&v(M.lightMap.channel),bumpMapUv:De&&v(M.bumpMap.channel),normalMapUv:Z&&v(M.normalMap.channel),displacementMapUv:ze&&v(M.displacementMap.channel),emissiveMapUv:ce&&v(M.emissiveMap.channel),metalnessMapUv:Fe&&v(M.metalnessMap.channel),roughnessMapUv:rt&&v(M.roughnessMap.channel),anisotropyMapUv:$&&v(M.anisotropyMap.channel),clearcoatMapUv:be&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:se&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:de&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&v(M.sheenRoughnessMap.channel),specularMapUv:ye&&v(M.specularMap.channel),specularColorMapUv:he&&v(M.specularColorMap.channel),specularIntensityMapUv:Ge&&v(M.specularIntensityMap.channel),transmissionMapUv:U&&v(M.transmissionMap.channel),thicknessMapUv:ae&&v(M.thicknessMap.channel),alphaMapUv:me&&v(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Z||Te),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(Xe||me),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:fe,skinning:I.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Se,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,decodeVideoTexture:Xe&&M.map.isVideoTexture===!0&&Ke.getTransfer(M.map.colorSpace)===nt,decodeVideoTextureEmissive:ce&&M.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(M.emissiveMap.colorSpace)===nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===tn,flipSided:M.side===Ot,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ve&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&M.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function u(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const T in M.defines)b.push(T),b.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(w(b,M),x(b,M),b.push(n.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function w(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function x(M,b){r.disableAll(),b.supportsVertexTextures&&r.enable(0),b.instancing&&r.enable(1),b.instancingColor&&r.enable(2),b.instancingMorph&&r.enable(3),b.matcap&&r.enable(4),b.envMap&&r.enable(5),b.normalMapObjectSpace&&r.enable(6),b.normalMapTangentSpace&&r.enable(7),b.clearcoat&&r.enable(8),b.iridescence&&r.enable(9),b.alphaTest&&r.enable(10),b.vertexColors&&r.enable(11),b.vertexAlphas&&r.enable(12),b.vertexUv1s&&r.enable(13),b.vertexUv2s&&r.enable(14),b.vertexUv3s&&r.enable(15),b.vertexTangents&&r.enable(16),b.anisotropy&&r.enable(17),b.alphaHash&&r.enable(18),b.batching&&r.enable(19),b.dispersion&&r.enable(20),b.batchingColor&&r.enable(21),b.gradientMap&&r.enable(22),M.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.reversedDepthBuffer&&r.enable(4),b.skinning&&r.enable(5),b.morphTargets&&r.enable(6),b.morphNormals&&r.enable(7),b.morphColors&&r.enable(8),b.premultipliedAlpha&&r.enable(9),b.shadowMapEnabled&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),b.decodeVideoTextureEmissive&&r.enable(20),b.alphaToCoverage&&r.enable(21),M.push(r.mask)}function _(M){const b=g[M.type];let T;if(b){const P=fn[b];T=hp.clone(P.uniforms)}else T=M.uniforms;return T}function y(M,b){let T;for(let P=0,I=h.length;P<I;P++){const F=h[P];if(F.cacheKey===b){T=F,++T.usedTimes;break}}return T===void 0&&(T=new Lv(n,b,M,s),h.push(T)),T}function S(M){if(--M.usedTimes===0){const b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function A(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:_,acquireProgram:y,releaseProgram:S,releaseShaderCache:A,programs:h,dispose:C}}function kv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let r=n.get(o);return r===void 0&&(r={},n.set(o,r)),r}function i(o){n.delete(o)}function a(o,r,l){n.get(o)[r]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:s}}function Ov(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ic(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Fc(){const n=[];let e=0;const t=[],i=[],a=[];function s(){e=0,t.length=0,i.length=0,a.length=0}function o(d,p,f,g,v,m){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:p,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=f,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=v,u.group=m),e++,u}function r(d,p,f,g,v,m){const u=o(d,p,f,g,v,m);f.transmission>0?i.push(u):f.transparent===!0?a.push(u):t.push(u)}function l(d,p,f,g,v,m){const u=o(d,p,f,g,v,m);f.transmission>0?i.unshift(u):f.transparent===!0?a.unshift(u):t.unshift(u)}function c(d,p){t.length>1&&t.sort(d||Ov),i.length>1&&i.sort(p||Ic),a.length>1&&a.sort(p||Ic)}function h(){for(let d=e,p=n.length;d<p;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:a,init:s,push:r,unshift:l,finish:h,sort:c}}function zv(){let n=new WeakMap;function e(i,a){const s=n.get(i);let o;return s===void 0?(o=new Fc,n.set(i,[o])):a>=s.length?(o=new Fc,s.push(o)):o=s[a],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Bv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ee};break;case"SpotLight":t={position:new N,direction:new N,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function Hv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Gv=0;function Vv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Wv(n){const e=new Bv,t=Hv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const a=new N,s=new ot,o=new ot;function r(c){let h=0,d=0,p=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,g=0,v=0,m=0,u=0,w=0,x=0,_=0,y=0,S=0,A=0;c.sort(Vv);for(let M=0,b=c.length;M<b;M++){const T=c[M],P=T.color,I=T.intensity,F=T.distance,k=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=P.r*I,d+=P.g*I,p+=P.b*I;else if(T.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(T.sh.coefficients[H],I);A++}else if(T.isDirectionalLight){const H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const V=T.shadow,z=t.get(T);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,i.directionalShadow[f]=z,i.directionalShadowMap[f]=k,i.directionalShadowMatrix[f]=T.shadow.matrix,w++}i.directional[f]=H,f++}else if(T.isSpotLight){const H=e.get(T);H.position.setFromMatrixPosition(T.matrixWorld),H.color.copy(P).multiplyScalar(I),H.distance=F,H.coneCos=Math.cos(T.angle),H.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),H.decay=T.decay,i.spot[v]=H;const V=T.shadow;if(T.map&&(i.spotLightMap[y]=T.map,y++,V.updateMatrices(T),T.castShadow&&S++),i.spotLightMatrix[v]=V.matrix,T.castShadow){const z=t.get(T);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,i.spotShadow[v]=z,i.spotShadowMap[v]=k,_++}v++}else if(T.isRectAreaLight){const H=e.get(T);H.color.copy(P).multiplyScalar(I),H.halfWidth.set(T.width*.5,0,0),H.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=H,m++}else if(T.isPointLight){const H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),H.distance=T.distance,H.decay=T.decay,T.castShadow){const V=T.shadow,z=t.get(T);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,z.shadowCameraNear=V.camera.near,z.shadowCameraFar=V.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=T.shadow.matrix,x++}i.point[g]=H,g++}else if(T.isHemisphereLight){const H=e.get(T);H.skyColor.copy(T.color).multiplyScalar(I),H.groundColor.copy(T.groundColor).multiplyScalar(I),i.hemi[u]=H,u++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=p;const C=i.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==m||C.hemiLength!==u||C.numDirectionalShadows!==w||C.numPointShadows!==x||C.numSpotShadows!==_||C.numSpotMaps!==y||C.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=_+y-S,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=A,C.directionalLength=f,C.pointLength=g,C.spotLength=v,C.rectAreaLength=m,C.hemiLength=u,C.numDirectionalShadows=w,C.numPointShadows=x,C.numSpotShadows=_,C.numSpotMaps=y,C.numLightProbes=A,i.version=Gv++)}function l(c,h){let d=0,p=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let u=0,w=c.length;u<w;u++){const x=c[u];if(x.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(a),_.direction.transformDirection(m),d++}else if(x.isSpotLight){const _=i.spot[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(a),_.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const _=i.point[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),p++}else if(x.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:r,setupView:l,state:i}}function Uc(n){const e=new Wv(n),t=[],i=[];function a(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function o(h){i.push(h)}function r(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:r,setupLightsView:l,pushLight:s,pushShadow:o}}function Xv(n){let e=new WeakMap;function t(a,s=0){const o=e.get(a);let r;return o===void 0?(r=new Uc(n),e.set(a,[r])):s>=o.length?(r=new Uc(n),o.push(r)):r=o[s],r}function i(){e=new WeakMap}return{get:t,dispose:i}}const $v=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qv=`uniform sampler2D shadow_pass;
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
}`;function Yv(n,e,t){let i=new Su;const a=new Oe,s=new Oe,o=new vt,r=new _p({depthPacking:pf}),l=new yp,c={},h=t.maxTextureSize,d={[gn]:Ot,[Ot]:gn,[tn]:tn},p=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:$v,fragmentShader:qv}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new At;g.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new _t(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nu;let u=this.type;this.render=function(S,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const M=n.getRenderTarget(),b=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),P=n.state;P.setBlending(Kn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const I=u!==Cn&&this.type===Cn,F=u===Cn&&this.type!==Cn;for(let k=0,H=S.length;k<H;k++){const V=S[k],z=V.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const j=z.getFrameExtents();if(a.multiply(j),s.copy(z.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/j.x),a.x=s.x*j.x,z.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/j.y),a.y=s.y*j.y,z.mapSize.y=s.y)),z.map===null||I===!0||F===!0){const oe=this.type!==Cn?{minFilter:mt,magFilter:mt}:{};z.map!==null&&z.map.dispose(),z.map=new Lt(a.x,a.y,oe),z.map.texture.name=V.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const ee=z.getViewportCount();for(let oe=0;oe<ee;oe++){const Se=z.getViewport(oe);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),P.viewport(o),z.updateMatrices(V,oe),i=z.getFrustum(),_(A,C,z.camera,V,this.type)}z.isPointLightShadow!==!0&&this.type===Cn&&w(z,C),z.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(M,b,T)};function w(S,A){const C=e.update(v);p.defines.VSM_SAMPLES!==S.blurSamples&&(p.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Lt(a.x,a.y)),p.uniforms.shadow_pass.value=S.map.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(A,null,C,p,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(A,null,C,f,v,null)}function x(S,A,C,M){let b=null;const T=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)b=T;else if(b=C.isPointLight===!0?l:r,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const P=b.uuid,I=A.uuid;let F=c[P];F===void 0&&(F={},c[P]=F);let k=F[I];k===void 0&&(k=b.clone(),F[I]=k,A.addEventListener("dispose",y)),b=k}if(b.visible=A.visible,b.wireframe=A.wireframe,M===Cn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:d[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const P=n.properties.get(b);P.light=C}return b}function _(S,A,C,M,b){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===Cn)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const I=e.update(S),F=S.material;if(Array.isArray(F)){const k=I.groups;for(let H=0,V=k.length;H<V;H++){const z=k[H],j=F[z.materialIndex];if(j&&j.visible){const ee=x(S,j,M,b);S.onBeforeShadow(n,S,A,C,I,ee,z),n.renderBufferDirect(C,null,I,ee,S,z),S.onAfterShadow(n,S,A,C,I,ee,z)}}}else if(F.visible){const k=x(S,F,M,b);S.onBeforeShadow(n,S,A,C,I,k,null),n.renderBufferDirect(C,null,I,k,S,null),S.onAfterShadow(n,S,A,C,I,k,null)}}const P=S.children;for(let I=0,F=P.length;I<F;I++)_(P[I],A,C,M,b)}function y(S){S.target.removeEventListener("dispose",y);for(const C in c){const M=c[C],b=S.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const jv={[pr]:mr,[gr]:xr,[vr]:_r,[Qi]:wr,[mr]:pr,[xr]:gr,[_r]:vr,[wr]:Qi};function Zv(n,e){function t(){let U=!1;const ae=new vt;let re=null;const me=new vt(0,0,0,0);return{setMask:function(te){re!==te&&!U&&(n.colorMask(te,te,te,te),re=te)},setLocked:function(te){U=te},setClear:function(te,K,ve,He,lt){lt===!0&&(te*=He,K*=He,ve*=He),ae.set(te,K,ve,He),me.equals(ae)===!1&&(n.clearColor(te,K,ve,He),me.copy(ae))},reset:function(){U=!1,re=null,me.set(-1,0,0,0)}}}function i(){let U=!1,ae=!1,re=null,me=null,te=null;return{setReversed:function(K){if(ae!==K){const ve=e.get("EXT_clip_control");K?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),ae=K;const He=te;te=null,this.setClear(He)}},getReversed:function(){return ae},setTest:function(K){K?J(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(K){re!==K&&!U&&(n.depthMask(K),re=K)},setFunc:function(K){if(ae&&(K=jv[K]),me!==K){switch(K){case pr:n.depthFunc(n.NEVER);break;case mr:n.depthFunc(n.ALWAYS);break;case gr:n.depthFunc(n.LESS);break;case Qi:n.depthFunc(n.LEQUAL);break;case vr:n.depthFunc(n.EQUAL);break;case wr:n.depthFunc(n.GEQUAL);break;case xr:n.depthFunc(n.GREATER);break;case _r:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=K}},setLocked:function(K){U=K},setClear:function(K){te!==K&&(ae&&(K=1-K),n.clearDepth(K),te=K)},reset:function(){U=!1,re=null,me=null,te=null,ae=!1}}}function a(){let U=!1,ae=null,re=null,me=null,te=null,K=null,ve=null,He=null,lt=null;return{setTest:function(Je){U||(Je?J(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(Je){ae!==Je&&!U&&(n.stencilMask(Je),ae=Je)},setFunc:function(Je,_n,un){(re!==Je||me!==_n||te!==un)&&(n.stencilFunc(Je,_n,un),re=Je,me=_n,te=un)},setOp:function(Je,_n,un){(K!==Je||ve!==_n||He!==un)&&(n.stencilOp(Je,_n,un),K=Je,ve=_n,He=un)},setLocked:function(Je){U=Je},setClear:function(Je){lt!==Je&&(n.clearStencil(Je),lt=Je)},reset:function(){U=!1,ae=null,re=null,me=null,te=null,K=null,ve=null,He=null,lt=null}}}const s=new t,o=new i,r=new a,l=new WeakMap,c=new WeakMap;let h={},d={},p=new WeakMap,f=[],g=null,v=!1,m=null,u=null,w=null,x=null,_=null,y=null,S=null,A=new Ee(0,0,0),C=0,M=!1,b=null,T=null,P=null,I=null,F=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,V=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),H=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),H=V>=2);let j=null,ee={};const oe=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),Ve=new vt().fromArray(oe),Ne=new vt().fromArray(Se);function Le(U,ae,re,me){const te=new Uint8Array(4),K=n.createTexture();n.bindTexture(U,K),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ve=0;ve<re;ve++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,te):n.texImage2D(ae+ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,te);return K}const q={};q[n.TEXTURE_2D]=Le(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=Le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=Le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=Le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),J(n.DEPTH_TEST),o.setFunc(Qi),De(!1),Z(zl),J(n.CULL_FACE),it(Kn);function J(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function fe(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Ce(U,ae){return d[U]!==ae?(n.bindFramebuffer(U,ae),d[U]=ae,U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ae),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function we(U,ae){let re=f,me=!1;if(U){re=p.get(ae),re===void 0&&(re=[],p.set(ae,re));const te=U.textures;if(re.length!==te.length||re[0]!==n.COLOR_ATTACHMENT0){for(let K=0,ve=te.length;K<ve;K++)re[K]=n.COLOR_ATTACHMENT0+K;re.length=te.length,me=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,me=!0);me&&n.drawBuffers(re)}function Xe(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const ct={[di]:n.FUNC_ADD,[zd]:n.FUNC_SUBTRACT,[Bd]:n.FUNC_REVERSE_SUBTRACT};ct[Hd]=n.MIN,ct[Gd]=n.MAX;const L={[Vd]:n.ZERO,[Wd]:n.ONE,[Xd]:n.SRC_COLOR,[dr]:n.SRC_ALPHA,[Kd]:n.SRC_ALPHA_SATURATE,[jd]:n.DST_COLOR,[qd]:n.DST_ALPHA,[$d]:n.ONE_MINUS_SRC_COLOR,[fr]:n.ONE_MINUS_SRC_ALPHA,[Zd]:n.ONE_MINUS_DST_COLOR,[Yd]:n.ONE_MINUS_DST_ALPHA,[Jd]:n.CONSTANT_COLOR,[Qd]:n.ONE_MINUS_CONSTANT_COLOR,[ef]:n.CONSTANT_ALPHA,[tf]:n.ONE_MINUS_CONSTANT_ALPHA};function it(U,ae,re,me,te,K,ve,He,lt,Je){if(U===Kn){v===!0&&(fe(n.BLEND),v=!1);return}if(v===!1&&(J(n.BLEND),v=!0),U!==Od){if(U!==m||Je!==M){if((u!==di||_!==di)&&(n.blendEquation(n.FUNC_ADD),u=di,_=di),Je)switch(U){case Yi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bl:n.blendFunc(n.ONE,n.ONE);break;case Hl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Yi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Hl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,x=null,y=null,S=null,A.set(0,0,0),C=0,m=U,M=Je}return}te=te||ae,K=K||re,ve=ve||me,(ae!==u||te!==_)&&(n.blendEquationSeparate(ct[ae],ct[te]),u=ae,_=te),(re!==w||me!==x||K!==y||ve!==S)&&(n.blendFuncSeparate(L[re],L[me],L[K],L[ve]),w=re,x=me,y=K,S=ve),(He.equals(A)===!1||lt!==C)&&(n.blendColor(He.r,He.g,He.b,lt),A.copy(He),C=lt),m=U,M=!1}function ke(U,ae){U.side===tn?fe(n.CULL_FACE):J(n.CULL_FACE);let re=U.side===Ot;ae&&(re=!re),De(re),U.blending===Yi&&U.transparent===!1?it(Kn):it(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const me=U.stencilWrite;r.setTest(me),me&&(r.setMask(U.stencilWriteMask),r.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),r.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ce(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function De(U){b!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),b=U)}function Z(U){U!==Nd?(J(n.CULL_FACE),U!==T&&(U===zl?n.cullFace(n.BACK):U===kd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),T=U}function ze(U){U!==P&&(H&&n.lineWidth(U),P=U)}function ce(U,ae,re){U?(J(n.POLYGON_OFFSET_FILL),(I!==ae||F!==re)&&(n.polygonOffset(ae,re),I=ae,F=re)):fe(n.POLYGON_OFFSET_FILL)}function Fe(U){U?J(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function rt(U){U===void 0&&(U=n.TEXTURE0+k-1),j!==U&&(n.activeTexture(U),j=U)}function Te(U,ae,re){re===void 0&&(j===null?re=n.TEXTURE0+k-1:re=j);let me=ee[re];me===void 0&&(me={type:void 0,texture:void 0},ee[re]=me),(me.type!==U||me.texture!==ae)&&(j!==re&&(n.activeTexture(re),j=re),n.bindTexture(U,ae||q[U]),me.type=U,me.texture=ae)}function D(){const U=ee[j];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function E(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(U){Ve.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Ve.copy(U))}function Ie(U){Ne.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Ne.copy(U))}function ye(U,ae){let re=c.get(ae);re===void 0&&(re=new WeakMap,c.set(ae,re));let me=re.get(U);me===void 0&&(me=n.getUniformBlockIndex(ae,U.name),re.set(U,me))}function he(U,ae){const me=c.get(ae).get(U);l.get(ae)!==me&&(n.uniformBlockBinding(ae,me,U.__bindingPointIndex),l.set(ae,me))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},j=null,ee={},d={},p=new WeakMap,f=[],g=null,v=!1,m=null,u=null,w=null,x=null,_=null,y=null,S=null,A=new Ee(0,0,0),C=0,M=!1,b=null,T=null,P=null,I=null,F=null,Ve.set(0,0,n.canvas.width,n.canvas.height),Ne.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:J,disable:fe,bindFramebuffer:Ce,drawBuffers:we,useProgram:Xe,setBlending:it,setMaterial:ke,setFlipSided:De,setCullFace:Z,setLineWidth:ze,setPolygonOffset:ce,setScissorTest:Fe,activeTexture:rt,bindTexture:Te,unbindTexture:D,compressedTexImage2D:E,compressedTexImage3D:G,texImage2D:_e,texImage3D:ie,updateUBOMapping:ye,uniformBlockBinding:he,texStorage2D:se,texStorage3D:xe,texSubImage2D:Y,texSubImage3D:Q,compressedTexSubImage2D:$,compressedTexSubImage3D:be,scissor:de,viewport:Ie,reset:Ge}}function Kv(n,e,t,i,a,s,o){const r=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,h=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,E){return f?new OffscreenCanvas(D,E):Ns("canvas")}function v(D,E,G){let Y=1;const Q=Te(D);if((Q.width>G||Q.height>G)&&(Y=G/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const $=Math.floor(Y*Q.width),be=Math.floor(Y*Q.height);d===void 0&&(d=g($,be));const se=E?g($,be):d;return se.width=$,se.height=be,se.getContext("2d").drawImage(D,0,0,$,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+be+")."),se}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),D;return D}function m(D){return D.generateMipmaps}function u(D){n.generateMipmap(D)}function w(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(D,E,G,Y,Q=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let $=E;if(E===n.RED&&(G===n.FLOAT&&($=n.R32F),G===n.HALF_FLOAT&&($=n.R16F),G===n.UNSIGNED_BYTE&&($=n.R8)),E===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.R8UI),G===n.UNSIGNED_SHORT&&($=n.R16UI),G===n.UNSIGNED_INT&&($=n.R32UI),G===n.BYTE&&($=n.R8I),G===n.SHORT&&($=n.R16I),G===n.INT&&($=n.R32I)),E===n.RG&&(G===n.FLOAT&&($=n.RG32F),G===n.HALF_FLOAT&&($=n.RG16F),G===n.UNSIGNED_BYTE&&($=n.RG8)),E===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.RG8UI),G===n.UNSIGNED_SHORT&&($=n.RG16UI),G===n.UNSIGNED_INT&&($=n.RG32UI),G===n.BYTE&&($=n.RG8I),G===n.SHORT&&($=n.RG16I),G===n.INT&&($=n.RG32I)),E===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.RGB8UI),G===n.UNSIGNED_SHORT&&($=n.RGB16UI),G===n.UNSIGNED_INT&&($=n.RGB32UI),G===n.BYTE&&($=n.RGB8I),G===n.SHORT&&($=n.RGB16I),G===n.INT&&($=n.RGB32I)),E===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.RGBA8UI),G===n.UNSIGNED_SHORT&&($=n.RGBA16UI),G===n.UNSIGNED_INT&&($=n.RGBA32UI),G===n.BYTE&&($=n.RGBA8I),G===n.SHORT&&($=n.RGBA16I),G===n.INT&&($=n.RGBA32I)),E===n.RGB&&(G===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),E===n.RGBA){const be=Q?Fs:Ke.getTransfer(Y);G===n.FLOAT&&($=n.RGBA32F),G===n.HALF_FLOAT&&($=n.RGBA16F),G===n.UNSIGNED_BYTE&&($=be===nt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(D,E){let G;return D?E===null||E===vn||E===Ra?G=n.DEPTH24_STENCIL8:E===pn?G=n.DEPTH32F_STENCIL8:E===Aa&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===vn||E===Ra?G=n.DEPTH_COMPONENT24:E===pn?G=n.DEPTH_COMPONENT32F:E===Aa&&(G=n.DEPTH_COMPONENT16),G}function y(D,E){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==mt&&D.minFilter!==et?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function S(D){const E=D.target;E.removeEventListener("dispose",S),C(E),E.isVideoTexture&&h.delete(E)}function A(D){const E=D.target;E.removeEventListener("dispose",A),b(E)}function C(D){const E=i.get(D);if(E.__webglInit===void 0)return;const G=D.source,Y=p.get(G);if(Y){const Q=Y[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(D),Object.keys(Y).length===0&&p.delete(G)}i.remove(D)}function M(D){const E=i.get(D);n.deleteTexture(E.__webglTexture);const G=D.source,Y=p.get(G);delete Y[E.__cacheKey],o.memory.textures--}function b(D){const E=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(E.__webglFramebuffer[Y]))for(let Q=0;Q<E.__webglFramebuffer[Y].length;Q++)n.deleteFramebuffer(E.__webglFramebuffer[Y][Q]);else n.deleteFramebuffer(E.__webglFramebuffer[Y]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[Y])}else{if(Array.isArray(E.__webglFramebuffer))for(let Y=0;Y<E.__webglFramebuffer.length;Y++)n.deleteFramebuffer(E.__webglFramebuffer[Y]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Y=0;Y<E.__webglColorRenderbuffer.length;Y++)E.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[Y]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=D.textures;for(let Y=0,Q=G.length;Y<Q;Y++){const $=i.get(G[Y]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(G[Y])}i.remove(D)}let T=0;function P(){T=0}function I(){const D=T;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),T+=1,D}function F(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function k(D,E){const G=i.get(D);if(D.isVideoTexture&&Fe(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&G.__version!==D.version){const Y=D.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(G,D,E);return}}else D.isExternalTexture&&(G.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+E)}function H(D,E){const G=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){q(G,D,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+E)}function V(D,E){const G=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){q(G,D,E);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+E)}function z(D,E){const G=i.get(D);if(D.version>0&&G.__version!==D.version){J(G,D,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+E)}const j={[ji]:n.REPEAT,[Tt]:n.CLAMP_TO_EDGE,[Mr]:n.MIRRORED_REPEAT},ee={[mt]:n.NEAREST,[df]:n.NEAREST_MIPMAP_NEAREST,[Wa]:n.NEAREST_MIPMAP_LINEAR,[et]:n.LINEAR,[lo]:n.LINEAR_MIPMAP_NEAREST,[In]:n.LINEAR_MIPMAP_LINEAR},oe={[vf]:n.NEVER,[Mf]:n.ALWAYS,[wf]:n.LESS,[fu]:n.LEQUAL,[xf]:n.EQUAL,[bf]:n.GEQUAL,[_f]:n.GREATER,[yf]:n.NOTEQUAL};function Se(D,E){if(E.type===pn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===et||E.magFilter===lo||E.magFilter===Wa||E.magFilter===In||E.minFilter===et||E.minFilter===lo||E.minFilter===Wa||E.minFilter===In)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,j[E.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,j[E.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,j[E.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,ee[E.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,ee[E.minFilter]),E.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,oe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===mt||E.minFilter!==Wa&&E.minFilter!==In||E.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ve(D,E){let G=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",S));const Y=E.source;let Q=p.get(Y);Q===void 0&&(Q={},p.set(Y,Q));const $=F(E);if($!==D.__cacheKey){Q[$]===void 0&&(Q[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[$].usedTimes++;const be=Q[D.__cacheKey];be!==void 0&&(Q[D.__cacheKey].usedTimes--,be.usedTimes===0&&M(E)),D.__cacheKey=$,D.__webglTexture=Q[$].texture}return G}function Ne(D,E,G){return Math.floor(Math.floor(D/G)/E)}function Le(D,E,G,Y){const $=D.updateRanges;if($.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,G,Y,E.data);else{$.sort((ie,de)=>ie.start-de.start);let be=0;for(let ie=1;ie<$.length;ie++){const de=$[be],Ie=$[ie],ye=de.start+de.count,he=Ne(Ie.start,E.width,4),Ge=Ne(de.start,E.width,4);Ie.start<=ye+1&&he===Ge&&Ne(Ie.start+Ie.count-1,E.width,4)===he?de.count=Math.max(de.count,Ie.start+Ie.count-de.start):(++be,$[be]=Ie)}$.length=be+1;const se=n.getParameter(n.UNPACK_ROW_LENGTH),xe=n.getParameter(n.UNPACK_SKIP_PIXELS),_e=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let ie=0,de=$.length;ie<de;ie++){const Ie=$[ie],ye=Math.floor(Ie.start/4),he=Math.ceil(Ie.count/4),Ge=ye%E.width,U=Math.floor(ye/E.width),ae=he,re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Ge,U,ae,re,G,Y,E.data)}D.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,se),n.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,_e)}}function q(D,E,G){let Y=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Y=n.TEXTURE_3D);const Q=Ve(D,E),$=E.source;t.bindTexture(Y,D.__webglTexture,n.TEXTURE0+G);const be=i.get($);if($.version!==be.__version||Q===!0){t.activeTexture(n.TEXTURE0+G);const se=Ke.getPrimaries(Ke.workingColorSpace),xe=E.colorSpace===Pn?null:Ke.getPrimaries(E.colorSpace),_e=E.colorSpace===Pn||se===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let ie=v(E.image,!1,a.maxTextureSize);ie=rt(E,ie);const de=s.convert(E.format,E.colorSpace),Ie=s.convert(E.type);let ye=x(E.internalFormat,de,Ie,E.colorSpace,E.isVideoTexture);Se(Y,E);let he;const Ge=E.mipmaps,U=E.isVideoTexture!==!0,ae=be.__version===void 0||Q===!0,re=$.dataReady,me=y(E,ie);if(E.isDepthTexture)ye=_(E.format===Ca,E.type),ae&&(U?t.texStorage2D(n.TEXTURE_2D,1,ye,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,ye,ie.width,ie.height,0,de,Ie,null));else if(E.isDataTexture)if(Ge.length>0){U&&ae&&t.texStorage2D(n.TEXTURE_2D,me,ye,Ge[0].width,Ge[0].height);for(let te=0,K=Ge.length;te<K;te++)he=Ge[te],U?re&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,he.width,he.height,de,Ie,he.data):t.texImage2D(n.TEXTURE_2D,te,ye,he.width,he.height,0,de,Ie,he.data);E.generateMipmaps=!1}else U?(ae&&t.texStorage2D(n.TEXTURE_2D,me,ye,ie.width,ie.height),re&&Le(E,ie,de,Ie)):t.texImage2D(n.TEXTURE_2D,0,ye,ie.width,ie.height,0,de,Ie,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){U&&ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,ye,Ge[0].width,Ge[0].height,ie.depth);for(let te=0,K=Ge.length;te<K;te++)if(he=Ge[te],E.format!==wt)if(de!==null)if(U){if(re)if(E.layerUpdates.size>0){const ve=uc(he.width,he.height,E.format,E.type);for(const He of E.layerUpdates){const lt=he.data.subarray(He*ve/he.data.BYTES_PER_ELEMENT,(He+1)*ve/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,He,he.width,he.height,1,de,lt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ie.depth,de,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,ye,he.width,he.height,ie.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ie.depth,de,Ie,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,ye,he.width,he.height,ie.depth,0,de,Ie,he.data)}else{U&&ae&&t.texStorage2D(n.TEXTURE_2D,me,ye,Ge[0].width,Ge[0].height);for(let te=0,K=Ge.length;te<K;te++)he=Ge[te],E.format!==wt?de!==null?U?re&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,he.width,he.height,de,he.data):t.compressedTexImage2D(n.TEXTURE_2D,te,ye,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?re&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,he.width,he.height,de,Ie,he.data):t.texImage2D(n.TEXTURE_2D,te,ye,he.width,he.height,0,de,Ie,he.data)}else if(E.isDataArrayTexture)if(U){if(ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,ye,ie.width,ie.height,ie.depth),re)if(E.layerUpdates.size>0){const te=uc(ie.width,ie.height,E.format,E.type);for(const K of E.layerUpdates){const ve=ie.data.subarray(K*te/ie.data.BYTES_PER_ELEMENT,(K+1)*te/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ie.width,ie.height,1,de,Ie,ve)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,de,Ie,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,ie.width,ie.height,ie.depth,0,de,Ie,ie.data);else if(E.isData3DTexture)U?(ae&&t.texStorage3D(n.TEXTURE_3D,me,ye,ie.width,ie.height,ie.depth),re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,de,Ie,ie.data)):t.texImage3D(n.TEXTURE_3D,0,ye,ie.width,ie.height,ie.depth,0,de,Ie,ie.data);else if(E.isFramebufferTexture){if(ae)if(U)t.texStorage2D(n.TEXTURE_2D,me,ye,ie.width,ie.height);else{let te=ie.width,K=ie.height;for(let ve=0;ve<me;ve++)t.texImage2D(n.TEXTURE_2D,ve,ye,te,K,0,de,Ie,null),te>>=1,K>>=1}}else if(Ge.length>0){if(U&&ae){const te=Te(Ge[0]);t.texStorage2D(n.TEXTURE_2D,me,ye,te.width,te.height)}for(let te=0,K=Ge.length;te<K;te++)he=Ge[te],U?re&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,de,Ie,he):t.texImage2D(n.TEXTURE_2D,te,ye,de,Ie,he);E.generateMipmaps=!1}else if(U){if(ae){const te=Te(ie);t.texStorage2D(n.TEXTURE_2D,me,ye,te.width,te.height)}re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,Ie,ie)}else t.texImage2D(n.TEXTURE_2D,0,ye,de,Ie,ie);m(E)&&u(Y),be.__version=$.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function J(D,E,G){if(E.image.length!==6)return;const Y=Ve(D,E),Q=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+G);const $=i.get(Q);if(Q.version!==$.__version||Y===!0){t.activeTexture(n.TEXTURE0+G);const be=Ke.getPrimaries(Ke.workingColorSpace),se=E.colorSpace===Pn?null:Ke.getPrimaries(E.colorSpace),xe=E.colorSpace===Pn||be===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const _e=E.isCompressedTexture||E.image[0].isCompressedTexture,ie=E.image[0]&&E.image[0].isDataTexture,de=[];for(let K=0;K<6;K++)!_e&&!ie?de[K]=v(E.image[K],!0,a.maxCubemapSize):de[K]=ie?E.image[K].image:E.image[K],de[K]=rt(E,de[K]);const Ie=de[0],ye=s.convert(E.format,E.colorSpace),he=s.convert(E.type),Ge=x(E.internalFormat,ye,he,E.colorSpace),U=E.isVideoTexture!==!0,ae=$.__version===void 0||Y===!0,re=Q.dataReady;let me=y(E,Ie);Se(n.TEXTURE_CUBE_MAP,E);let te;if(_e){U&&ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ge,Ie.width,Ie.height);for(let K=0;K<6;K++){te=de[K].mipmaps;for(let ve=0;ve<te.length;ve++){const He=te[ve];E.format!==wt?ye!==null?U?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve,0,0,He.width,He.height,ye,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve,Ge,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve,0,0,He.width,He.height,ye,he,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve,Ge,He.width,He.height,0,ye,he,He.data)}}}else{if(te=E.mipmaps,U&&ae){te.length>0&&me++;const K=Te(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ge,K.width,K.height)}for(let K=0;K<6;K++)if(ie){U?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,de[K].width,de[K].height,ye,he,de[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ge,de[K].width,de[K].height,0,ye,he,de[K].data);for(let ve=0;ve<te.length;ve++){const lt=te[ve].image[K].image;U?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve+1,0,0,lt.width,lt.height,ye,he,lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve+1,Ge,lt.width,lt.height,0,ye,he,lt.data)}}else{U?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ye,he,de[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ge,ye,he,de[K]);for(let ve=0;ve<te.length;ve++){const He=te[ve];U?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve+1,0,0,ye,he,He.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve+1,Ge,ye,he,He.image[K])}}}m(E)&&u(n.TEXTURE_CUBE_MAP),$.__version=Q.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function fe(D,E,G,Y,Q,$){const be=s.convert(G.format,G.colorSpace),se=s.convert(G.type),xe=x(G.internalFormat,be,se,G.colorSpace),_e=i.get(E),ie=i.get(G);if(ie.__renderTarget=E,!_e.__hasExternalTextures){const de=Math.max(1,E.width>>$),Ie=Math.max(1,E.height>>$);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,$,xe,de,Ie,E.depth,0,be,se,null):t.texImage2D(Q,$,xe,de,Ie,0,be,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),ce(E)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,Q,ie.__webglTexture,0,ze(E)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,Q,ie.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(D,E,G){if(n.bindRenderbuffer(n.RENDERBUFFER,D),E.depthBuffer){const Y=E.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,$=_(E.stencilBuffer,Q),be=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=ze(E);ce(E)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,$,E.width,E.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,$,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,$,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,D)}else{const Y=E.textures;for(let Q=0;Q<Y.length;Q++){const $=Y[Q],be=s.convert($.format,$.colorSpace),se=s.convert($.type),xe=x($.internalFormat,be,se,$.colorSpace),_e=ze(E);G&&ce(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,xe,E.width,E.height):ce(E)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,xe,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,xe,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(E.depthTexture);Y.__renderTarget=E,(!Y.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),k(E.depthTexture,0);const Q=Y.__webglTexture,$=ze(E);if(E.depthTexture.format===Jn)ce(E)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(E.depthTexture.format===Ca)ce(E)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Xe(D){const E=i.get(D),G=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const Y=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Y){const Q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),E.__depthDisposeCallback=Q}E.__boundDepthTexture=Y}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const Y=D.texture.mipmaps;Y&&Y.length>0?we(E.__webglFramebuffer[0],D):we(E.__webglFramebuffer,D)}else if(G){E.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[Y]),E.__webglDepthbuffer[Y]===void 0)E.__webglDepthbuffer[Y]=n.createRenderbuffer(),Ce(E.__webglDepthbuffer[Y],D,!1);else{const Q=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,$)}}else{const Y=D.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),Ce(E.__webglDepthbuffer,D,!1);else{const Q=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,$)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(D,E,G){const Y=i.get(D);E!==void 0&&fe(Y.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Xe(D)}function L(D){const E=D.texture,G=i.get(D),Y=i.get(E);D.addEventListener("dispose",A);const Q=D.textures,$=D.isWebGLCubeRenderTarget===!0,be=Q.length>1;if(be||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=E.version,o.memory.textures++),$){G.__webglFramebuffer=[];for(let se=0;se<6;se++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[se]=[];for(let xe=0;xe<E.mipmaps.length;xe++)G.__webglFramebuffer[se][xe]=n.createFramebuffer()}else G.__webglFramebuffer[se]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let se=0;se<E.mipmaps.length;se++)G.__webglFramebuffer[se]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(be)for(let se=0,xe=Q.length;se<xe;se++){const _e=i.get(Q[se]);_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture(),o.memory.textures++)}if(D.samples>0&&ce(D)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let se=0;se<Q.length;se++){const xe=Q[se];G.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[se]);const _e=s.convert(xe.format,xe.colorSpace),ie=s.convert(xe.type),de=x(xe.internalFormat,_e,ie,xe.colorSpace,D.isXRRenderTarget===!0),Ie=ze(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,de,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,G.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(G.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Se(n.TEXTURE_CUBE_MAP,E);for(let se=0;se<6;se++)if(E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)fe(G.__webglFramebuffer[se][xe],D,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe);else fe(G.__webglFramebuffer[se],D,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(E)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let se=0,xe=Q.length;se<xe;se++){const _e=Q[se],ie=i.get(_e);let de=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(de=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,ie.__webglTexture),Se(de,_e),fe(G.__webglFramebuffer,D,_e,n.COLOR_ATTACHMENT0+se,de,0),m(_e)&&u(de)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(se=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,Y.__webglTexture),Se(se,E),E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)fe(G.__webglFramebuffer[xe],D,E,n.COLOR_ATTACHMENT0,se,xe);else fe(G.__webglFramebuffer,D,E,n.COLOR_ATTACHMENT0,se,0);m(E)&&u(se),t.unbindTexture()}D.depthBuffer&&Xe(D)}function it(D){const E=D.textures;for(let G=0,Y=E.length;G<Y;G++){const Q=E[G];if(m(Q)){const $=w(D),be=i.get(Q).__webglTexture;t.bindTexture($,be),u($),t.unbindTexture()}}}const ke=[],De=[];function Z(D){if(D.samples>0){if(ce(D)===!1){const E=D.textures,G=D.width,Y=D.height;let Q=n.COLOR_BUFFER_BIT;const $=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(D),se=E.length>1;if(se)for(let _e=0;_e<E.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const xe=D.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let _e=0;_e<E.length;_e++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[_e]);const ie=i.get(E[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,G,Y,0,0,G,Y,Q,n.NEAREST),l===!0&&(ke.length=0,De.length=0,ke.push(n.COLOR_ATTACHMENT0+_e),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ke.push($),De.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,De)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let _e=0;_e<E.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,be.__webglColorRenderbuffer[_e]);const ie=i.get(E[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const E=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function ze(D){return Math.min(a.maxSamples,D.samples)}function ce(D){const E=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Fe(D){const E=o.render.frame;h.get(D)!==E&&(h.set(D,E),D.update())}function rt(D,E){const G=D.colorSpace,Y=D.format,Q=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||G!==gi&&G!==Pn&&(Ke.getTransfer(G)===nt?(Y!==wt||Q!==yt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function Te(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=P,this.setTexture2D=k,this.setTexture2DArray=H,this.setTexture3D=V,this.setTextureCube=z,this.rebindTextures=ct,this.setupRenderTarget=L,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ce}function Jv(n,e){function t(i,a=Pn){let s;const o=Ke.getTransfer(a);if(i===yt)return n.UNSIGNED_BYTE;if(i===pl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ml)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ou)return n.BYTE;if(i===ru)return n.SHORT;if(i===Aa)return n.UNSIGNED_SHORT;if(i===fl)return n.INT;if(i===vn)return n.UNSIGNED_INT;if(i===pn)return n.FLOAT;if(i===wn)return n.HALF_FLOAT;if(i===hu)return n.ALPHA;if(i===uu)return n.RGB;if(i===wt)return n.RGBA;if(i===Jn)return n.DEPTH_COMPONENT;if(i===Ca)return n.DEPTH_STENCIL;if(i===Qn)return n.RED;if(i===gl)return n.RED_INTEGER;if(i===du)return n.RG;if(i===vl)return n.RG_INTEGER;if(i===wl)return n.RGBA_INTEGER;if(i===bs||i===Ms||i===Ss||i===Es)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===bs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===bs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ms)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ss)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Es)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sr||i===Er||i===Tr||i===Ar)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Sr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Er)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ar)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rr||i===Cr||i===Dr)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Rr||i===Cr)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Dr)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pr||i===Lr||i===Ir||i===Fr||i===Ur||i===Nr||i===kr||i===Or||i===zr||i===Br||i===Hr||i===Gr||i===Vr||i===Wr)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Pr)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lr)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ir)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fr)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ur)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nr)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kr)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Or)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zr)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Br)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hr)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gr)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vr)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wr)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xr||i===$r||i===qr)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Xr)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$r)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qr)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yr||i===jr||i===Zr||i===Kr)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Yr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===jr)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kr)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ra?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Qv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ew=`
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

}`;class tw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Eu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new zn({vertexShader:Qv,fragmentShader:ew,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _t(new js(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nw extends oa{constructor(e,t){super();const i=this;let a=null,s=1,o=null,r="local-floor",l=1,c=null,h=null,d=null,p=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new tw,u={},w=t.getContextAttributes();let x=null,_=null;const y=[],S=[],A=new Oe;let C=null;const M=new en;M.viewport=new vt;const b=new en;b.viewport=new vt;const T=[M,b],P=new bp;let I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=y[q];return J===void 0&&(J=new Do,y[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=y[q];return J===void 0&&(J=new Do,y[q]=J),J.getGripSpace()},this.getHand=function(q){let J=y[q];return J===void 0&&(J=new Do,y[q]=J),J.getHandSpace()};function k(q){const J=S.indexOf(q.inputSource);if(J===-1)return;const fe=y[J];fe!==void 0&&(fe.update(q.inputSource,q.frame,c||o),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){a.removeEventListener("select",k),a.removeEventListener("selectstart",k),a.removeEventListener("selectend",k),a.removeEventListener("squeeze",k),a.removeEventListener("squeezestart",k),a.removeEventListener("squeezeend",k),a.removeEventListener("end",H),a.removeEventListener("inputsourceschange",V);for(let q=0;q<y.length;q++){const J=S[q];J!==null&&(S[q]=null,y[q].disconnect(J))}I=null,F=null,m.reset();for(const q in u)delete u[q];e.setRenderTarget(x),f=null,p=null,d=null,a=null,_=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(a,t)),d},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(q){if(a=q,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",k),a.addEventListener("selectstart",k),a.addEventListener("selectend",k),a.addEventListener("squeeze",k),a.addEventListener("squeezestart",k),a.addEventListener("squeezeend",k),a.addEventListener("end",H),a.addEventListener("inputsourceschange",V),w.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ce=null,we=null;w.depth&&(we=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=w.stencil?Ca:Jn,Ce=w.stencil?Ra:vn);const Xe={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};d=this.getBinding(),p=d.createProjectionLayer(Xe),a.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),_=new Lt(p.textureWidth,p.textureHeight,{format:wt,type:yt,depthTexture:new ka(p.textureWidth,p.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const fe={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(a,t,fe),a.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Lt(f.framebufferWidth,f.framebufferHeight,{format:wt,type:yt,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await a.requestReferenceSpace(r),Le.setContext(a),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(q){for(let J=0;J<q.removed.length;J++){const fe=q.removed[J],Ce=S.indexOf(fe);Ce>=0&&(S[Ce]=null,y[Ce].disconnect(fe))}for(let J=0;J<q.added.length;J++){const fe=q.added[J];let Ce=S.indexOf(fe);if(Ce===-1){for(let Xe=0;Xe<y.length;Xe++)if(Xe>=S.length){S.push(fe),Ce=Xe;break}else if(S[Xe]===null){S[Xe]=fe,Ce=Xe;break}if(Ce===-1)break}const we=y[Ce];we&&we.connect(fe)}}const z=new N,j=new N;function ee(q,J,fe){z.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(fe.matrixWorld);const Ce=z.distanceTo(j),we=J.projectionMatrix.elements,Xe=fe.projectionMatrix.elements,ct=we[14]/(we[10]-1),L=we[14]/(we[10]+1),it=(we[9]+1)/we[5],ke=(we[9]-1)/we[5],De=(we[8]-1)/we[0],Z=(Xe[8]+1)/Xe[0],ze=ct*De,ce=ct*Z,Fe=Ce/(-De+Z),rt=Fe*-De;if(J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(rt),q.translateZ(Fe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),we[10]===-1)q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Te=ct+Fe,D=L+Fe,E=ze-rt,G=ce+(Ce-rt),Y=it*L/D*Te,Q=ke*L/D*Te;q.projectionMatrix.makePerspective(E,G,Y,Q,Te,D),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function oe(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(a===null)return;let J=q.near,fe=q.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),P.near=b.near=M.near=J,P.far=b.far=M.far=fe,(I!==P.near||F!==P.far)&&(a.updateRenderState({depthNear:P.near,depthFar:P.far}),I=P.near,F=P.far),P.layers.mask=q.layers.mask|6,M.layers.mask=P.layers.mask&3,b.layers.mask=P.layers.mask&5;const Ce=q.parent,we=P.cameras;oe(P,Ce);for(let Xe=0;Xe<we.length;Xe++)oe(we[Xe],Ce);we.length===2?ee(P,M,b):P.projectionMatrix.copy(M.projectionMatrix),Se(q,P,Ce)};function Se(q,J,fe){fe===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Da*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(q){l=q,p!==null&&(p.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(q){return u[q]};let Ve=null;function Ne(q,J){if(h=J.getViewerPose(c||o),g=J,h!==null){const fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Ce=!1;fe.length!==P.cameras.length&&(P.cameras.length=0,Ce=!0);for(let L=0;L<fe.length;L++){const it=fe[L];let ke=null;if(f!==null)ke=f.getViewport(it);else{const Z=d.getViewSubImage(p,it);ke=Z.viewport,L===0&&(e.setRenderTargetTextures(_,Z.colorTexture,Z.depthStencilTexture),e.setRenderTarget(_))}let De=T[L];De===void 0&&(De=new en,De.layers.enable(L),De.viewport=new vt,T[L]=De),De.matrix.fromArray(it.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(it.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(ke.x,ke.y,ke.width,ke.height),L===0&&(P.matrix.copy(De.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ce===!0&&P.cameras.push(De)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const L=d.getDepthInformation(fe[0]);L&&L.isValid&&L.texture&&m.init(L,a.renderState)}if(we&&we.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let L=0;L<fe.length;L++){const it=fe[L].camera;if(it){let ke=u[it];ke||(ke=new Eu,u[it]=ke);const De=d.getCameraImage(it);ke.sourceTexture=De}}}}for(let fe=0;fe<y.length;fe++){const Ce=S[fe],we=y[fe];Ce!==null&&we!==void 0&&we.update(Ce,J,c||o)}Ve&&Ve(q,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const Le=new Tu;Le.setAnimationLoop(Ne),this.setAnimationLoop=function(q){Ve=q},this.dispose=function(){}}}const ri=new xn,iw=new ot;function aw(n,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,yu(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function a(m,u,w,x,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),p(m,u),u.isMeshPhysicalMaterial&&f(m,u,_)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),v(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&r(m,u)):u.isPointsMaterial?l(m,u,w,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Ot&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Ot&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const w=e.get(u),x=w.envMap,_=w.envMapRotation;x&&(m.envMap.value=x,ri.copy(_),ri.x*=-1,ri.y*=-1,ri.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),m.envMapRotation.value.setFromMatrix4(iw.makeRotationFromEuler(ri)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function r(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,w,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*w,m.scale.value=x*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,w){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ot&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const w=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function sw(n,e,t,i){let a={},s={},o=[];const r=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,x){const _=x.program;i.uniformBlockBinding(w,_)}function c(w,x){let _=a[w.id];_===void 0&&(g(w),_=h(w),a[w.id]=_,w.addEventListener("dispose",m));const y=x.program;i.updateUBOMapping(w,y);const S=e.render.frame;s[w.id]!==S&&(p(w),s[w.id]=S)}function h(w){const x=d();w.__bindingPointIndex=x;const _=n.createBuffer(),y=w.__size,S=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,y,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,_),_}function d(){for(let w=0;w<r;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){const x=a[w.id],_=w.uniforms,y=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let S=0,A=_.length;S<A;S++){const C=Array.isArray(_[S])?_[S]:[_[S]];for(let M=0,b=C.length;M<b;M++){const T=C[M];if(f(T,S,M,y)===!0){const P=T.__offset,I=Array.isArray(T.value)?T.value:[T.value];let F=0;for(let k=0;k<I.length;k++){const H=I[k],V=v(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,P+F,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,F),F+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(w,x,_,y){const S=w.value,A=x+"_"+_;if(y[A]===void 0)return typeof S=="number"||typeof S=="boolean"?y[A]=S:y[A]=S.clone(),!0;{const C=y[A];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return y[A]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function g(w){const x=w.uniforms;let _=0;const y=16;for(let A=0,C=x.length;A<C;A++){const M=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,T=M.length;b<T;b++){const P=M[b],I=Array.isArray(P.value)?P.value:[P.value];for(let F=0,k=I.length;F<k;F++){const H=I[F],V=v(H),z=_%y,j=z%V.boundary,ee=z+j;_+=j,ee!==0&&y-ee<V.storage&&(_+=y-ee),P.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=_,_+=V.storage}}}const S=_%y;return S>0&&(_+=y-S),w.__size=_,w.__cache={},this}function v(w){const x={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function m(w){const x=w.target;x.removeEventListener("dispose",m);const _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(a[x.id]),delete a[x.id],delete s[x.id]}function u(){for(const w in a)n.deleteBuffer(a[w]);o=[],a={},s={}}return{bind:l,update:c,dispose:u}}class ow{constructor(e={}){const{canvas:t=Hf(),context:i=null,depth:a=!0,stencil:s=!1,alpha:o=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,u=null;const w=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let y=!1;this._outputColorSpace=Qt;let S=0,A=0,C=null,M=-1,b=null;const T=new vt,P=new vt;let I=null;const F=new Ee(0);let k=0,H=t.width,V=t.height,z=1,j=null,ee=null;const oe=new vt(0,0,H,V),Se=new vt(0,0,H,V);let Ve=!1;const Ne=new Su;let Le=!1,q=!1;const J=new ot,fe=new N,Ce=new vt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function ct(){return C===null?z:1}let L=i;function it(R,O){return t.getContext(R,O)}try{const R={alpha:!0,depth:a,stencil:s,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dl}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",te,!1),L===null){const O="webgl2";if(L=it(O,R),L===null)throw it(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ke,De,Z,ze,ce,Fe,rt,Te,D,E,G,Y,Q,$,be,se,xe,_e,ie,de,Ie,ye,he,Ge;function U(){ke=new gg(L),ke.init(),ye=new Jv(L,ke),De=new cg(L,ke,e,ye),Z=new Zv(L,ke),De.reversedDepthBuffer&&p&&Z.buffers.depth.setReversed(!0),ze=new xg(L),ce=new kv,Fe=new Kv(L,ke,Z,ce,De,ye,ze),rt=new ug(_),Te=new mg(_),D=new Ep(L),he=new rg(L,D),E=new vg(L,D,ze,he),G=new yg(L,E,D,ze),ie=new _g(L,De,Fe),se=new hg(ce),Y=new Nv(_,rt,Te,ke,De,he,se),Q=new aw(_,ce),$=new zv,be=new Xv(ke),_e=new og(_,rt,Te,Z,G,f,l),xe=new Yv(_,G,De),Ge=new sw(L,ze,De,Z),de=new lg(L,ke,ze),Ie=new wg(L,ke,ze),ze.programs=Y.programs,_.capabilities=De,_.extensions=ke,_.properties=ce,_.renderLists=$,_.shadowMap=xe,_.state=Z,_.info=ze}U();const ae=new nw(_,L);this.xr=ae,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const R=ke.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ke.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(R){R!==void 0&&(z=R,this.setSize(H,V,!1))},this.getSize=function(R){return R.set(H,V)},this.setSize=function(R,O,W=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=R,V=O,t.width=Math.floor(R*z),t.height=Math.floor(O*z),W===!0&&(t.style.width=R+"px",t.style.height=O+"px"),this.setViewport(0,0,R,O)},this.getDrawingBufferSize=function(R){return R.set(H*z,V*z).floor()},this.setDrawingBufferSize=function(R,O,W){H=R,V=O,z=W,t.width=Math.floor(R*W),t.height=Math.floor(O*W),this.setViewport(0,0,R,O)},this.getCurrentViewport=function(R){return R.copy(T)},this.getViewport=function(R){return R.copy(oe)},this.setViewport=function(R,O,W,X){R.isVector4?oe.set(R.x,R.y,R.z,R.w):oe.set(R,O,W,X),Z.viewport(T.copy(oe).multiplyScalar(z).round())},this.getScissor=function(R){return R.copy(Se)},this.setScissor=function(R,O,W,X){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,O,W,X),Z.scissor(P.copy(Se).multiplyScalar(z).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(R){Z.setScissorTest(Ve=R)},this.setOpaqueSort=function(R){j=R},this.setTransparentSort=function(R){ee=R},this.getClearColor=function(R){return R.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(R=!0,O=!0,W=!0){let X=0;if(R){let B=!1;if(C!==null){const ne=C.texture.format;B=ne===wl||ne===vl||ne===gl}if(B){const ne=C.texture.type,ue=ne===yt||ne===vn||ne===Aa||ne===Ra||ne===pl||ne===ml,ge=_e.getClearColor(),pe=_e.getClearAlpha(),Pe=ge.r,Ue=ge.g,Ae=ge.b;ue?(g[0]=Pe,g[1]=Ue,g[2]=Ae,g[3]=pe,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=Pe,v[1]=Ue,v[2]=Ae,v[3]=pe,L.clearBufferiv(L.COLOR,0,v))}else X|=L.COLOR_BUFFER_BIT}O&&(X|=L.DEPTH_BUFFER_BIT),W&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",te,!1),_e.dispose(),$.dispose(),be.dispose(),ce.dispose(),rt.dispose(),Te.dispose(),G.dispose(),he.dispose(),Ge.dispose(),Y.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",un),ae.removeEventListener("sessionend",Il),ei.stop()};function re(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=ze.autoReset,O=xe.enabled,W=xe.autoUpdate,X=xe.needsUpdate,B=xe.type;U(),ze.autoReset=R,xe.enabled=O,xe.autoUpdate=W,xe.needsUpdate=X,xe.type=B}function te(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function K(R){const O=R.target;O.removeEventListener("dispose",K),ve(O)}function ve(R){He(R),ce.remove(R)}function He(R){const O=ce.get(R).programs;O!==void 0&&(O.forEach(function(W){Y.releaseProgram(W)}),R.isShaderMaterial&&Y.releaseShaderCache(R))}this.renderBufferDirect=function(R,O,W,X,B,ne){O===null&&(O=we);const ue=B.isMesh&&B.matrixWorld.determinant()<0,ge=Dd(R,O,W,X,B);Z.setMaterial(X,ue);let pe=W.index,Pe=1;if(X.wireframe===!0){if(pe=E.getWireframeAttribute(W),pe===void 0)return;Pe=2}const Ue=W.drawRange,Ae=W.attributes.position;let qe=Ue.start*Pe,tt=(Ue.start+Ue.count)*Pe;ne!==null&&(qe=Math.max(qe,ne.start*Pe),tt=Math.min(tt,(ne.start+ne.count)*Pe)),pe!==null?(qe=Math.max(qe,0),tt=Math.min(tt,pe.count)):Ae!=null&&(qe=Math.max(qe,0),tt=Math.min(tt,Ae.count));const gt=tt-qe;if(gt<0||gt===1/0)return;he.setup(B,X,ge,W,pe);let ht,at=de;if(pe!==null&&(ht=D.get(pe),at=Ie,at.setIndex(ht)),B.isMesh)X.wireframe===!0?(Z.setLineWidth(X.wireframeLinewidth*ct()),at.setMode(L.LINES)):at.setMode(L.TRIANGLES);else if(B.isLine){let Re=X.linewidth;Re===void 0&&(Re=1),Z.setLineWidth(Re*ct()),B.isLineSegments?at.setMode(L.LINES):B.isLineLoop?at.setMode(L.LINE_LOOP):at.setMode(L.LINE_STRIP)}else B.isPoints?at.setMode(L.POINTS):B.isSprite&&at.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Pa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))at.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Re=B._multiDrawStarts,ft=B._multiDrawCounts,Ze=B._multiDrawCount,Bt=pe?D.get(pe).bytesPerElement:1,yi=ce.get(X).currentProgram.getUniforms();for(let Ht=0;Ht<Ze;Ht++)yi.setValue(L,"_gl_DrawID",Ht),at.render(Re[Ht]/Bt,ft[Ht])}else if(B.isInstancedMesh)at.renderInstances(qe,gt,B.count);else if(W.isInstancedBufferGeometry){const Re=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ft=Math.min(W.instanceCount,Re);at.renderInstances(qe,gt,ft)}else at.render(qe,gt)};function lt(R,O,W){R.transparent===!0&&R.side===tn&&R.forceSinglePass===!1?(R.side=Ot,R.needsUpdate=!0,Va(R,O,W),R.side=gn,R.needsUpdate=!0,Va(R,O,W),R.side=tn):Va(R,O,W)}this.compile=function(R,O,W=null){W===null&&(W=R),u=be.get(W),u.init(O),x.push(u),W.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),R!==W&&R.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),u.setupLights();const X=new Set;return R.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ne=B.material;if(ne)if(Array.isArray(ne))for(let ue=0;ue<ne.length;ue++){const ge=ne[ue];lt(ge,W,B),X.add(ge)}else lt(ne,W,B),X.add(ne)}),u=x.pop(),X},this.compileAsync=function(R,O,W=null){const X=this.compile(R,O,W);return new Promise(B=>{function ne(){if(X.forEach(function(ue){ce.get(ue).currentProgram.isReady()&&X.delete(ue)}),X.size===0){B(R);return}setTimeout(ne,10)}ke.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Je=null;function _n(R){Je&&Je(R)}function un(){ei.stop()}function Il(){ei.start()}const ei=new Tu;ei.setAnimationLoop(_n),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(R){Je=R,ae.setAnimationLoop(R),R===null?ei.stop():ei.start()},ae.addEventListener("sessionstart",un),ae.addEventListener("sessionend",Il),this.render=function(R,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(O),O=ae.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,O,C),u=be.get(R,x.length),u.init(O),x.push(u),J.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ne.setFromProjectionMatrix(J,mn,O.reversedDepth),q=this.localClippingEnabled,Le=se.init(this.clippingPlanes,q),m=$.get(R,w.length),m.init(),w.push(m),ae.enabled===!0&&ae.isPresenting===!0){const ne=_.xr.getDepthSensingMesh();ne!==null&&oo(ne,O,-1/0,_.sortObjects)}oo(R,O,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(j,ee),Xe=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Xe&&_e.addToRenderList(m,R),this.info.render.frame++,Le===!0&&se.beginShadows();const W=u.state.shadowsArray;xe.render(W,R,O),Le===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,B=m.transmissive;if(u.setupLights(),O.isArrayCamera){const ne=O.cameras;if(B.length>0)for(let ue=0,ge=ne.length;ue<ge;ue++){const pe=ne[ue];Ul(X,B,R,pe)}Xe&&_e.render(R);for(let ue=0,ge=ne.length;ue<ge;ue++){const pe=ne[ue];Fl(m,R,pe,pe.viewport)}}else B.length>0&&Ul(X,B,R,O),Xe&&_e.render(R),Fl(m,R,O);C!==null&&A===0&&(Fe.updateMultisampleRenderTarget(C),Fe.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(_,R,O),he.resetDefaultState(),M=-1,b=null,x.pop(),x.length>0?(u=x[x.length-1],Le===!0&&se.setGlobalState(_.clippingPlanes,u.state.camera)):u=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function oo(R,O,W,X){if(R.visible===!1)return;if(R.layers.test(O.layers)){if(R.isGroup)W=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(O);else if(R.isLight)u.pushLight(R),R.castShadow&&u.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ne.intersectsSprite(R)){X&&Ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(J);const ue=G.update(R),ge=R.material;ge.visible&&m.push(R,ue,ge,W,Ce.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ne.intersectsObject(R))){const ue=G.update(R),ge=R.material;if(X&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ce.copy(R.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ce.copy(ue.boundingSphere.center)),Ce.applyMatrix4(R.matrixWorld).applyMatrix4(J)),Array.isArray(ge)){const pe=ue.groups;for(let Pe=0,Ue=pe.length;Pe<Ue;Pe++){const Ae=pe[Pe],qe=ge[Ae.materialIndex];qe&&qe.visible&&m.push(R,ue,qe,W,Ce.z,Ae)}}else ge.visible&&m.push(R,ue,ge,W,Ce.z,null)}}const ne=R.children;for(let ue=0,ge=ne.length;ue<ge;ue++)oo(ne[ue],O,W,X)}function Fl(R,O,W,X){const B=R.opaque,ne=R.transmissive,ue=R.transparent;u.setupLightsView(W),Le===!0&&se.setGlobalState(_.clippingPlanes,W),X&&Z.viewport(T.copy(X)),B.length>0&&Ga(B,O,W),ne.length>0&&Ga(ne,O,W),ue.length>0&&Ga(ue,O,W),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Ul(R,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[X.id]===void 0&&(u.state.transmissionRenderTarget[X.id]=new Lt(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?wn:yt,minFilter:In,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ne=u.state.transmissionRenderTarget[X.id],ue=X.viewport||T;ne.setSize(ue.z*_.transmissionResolutionScale,ue.w*_.transmissionResolutionScale);const ge=_.getRenderTarget(),pe=_.getActiveCubeFace(),Pe=_.getActiveMipmapLevel();_.setRenderTarget(ne),_.getClearColor(F),k=_.getClearAlpha(),k<1&&_.setClearColor(16777215,.5),_.clear(),Xe&&_e.render(W);const Ue=_.toneMapping;_.toneMapping=Nn;const Ae=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),u.setupLightsView(X),Le===!0&&se.setGlobalState(_.clippingPlanes,X),Ga(R,W,X),Fe.updateMultisampleRenderTarget(ne),Fe.updateRenderTargetMipmap(ne),ke.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let tt=0,gt=O.length;tt<gt;tt++){const ht=O[tt],at=ht.object,Re=ht.geometry,ft=ht.material,Ze=ht.group;if(ft.side===tn&&at.layers.test(X.layers)){const Bt=ft.side;ft.side=Ot,ft.needsUpdate=!0,Nl(at,W,X,Re,ft,Ze),ft.side=Bt,ft.needsUpdate=!0,qe=!0}}qe===!0&&(Fe.updateMultisampleRenderTarget(ne),Fe.updateRenderTargetMipmap(ne))}_.setRenderTarget(ge,pe,Pe),_.setClearColor(F,k),Ae!==void 0&&(X.viewport=Ae),_.toneMapping=Ue}function Ga(R,O,W){const X=O.isScene===!0?O.overrideMaterial:null;for(let B=0,ne=R.length;B<ne;B++){const ue=R[B],ge=ue.object,pe=ue.geometry,Pe=ue.group;let Ue=ue.material;Ue.allowOverride===!0&&X!==null&&(Ue=X),ge.layers.test(W.layers)&&Nl(ge,O,W,pe,Ue,Pe)}}function Nl(R,O,W,X,B,ne){R.onBeforeRender(_,O,W,X,B,ne),R.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),B.onBeforeRender(_,O,W,X,R,ne),B.transparent===!0&&B.side===tn&&B.forceSinglePass===!1?(B.side=Ot,B.needsUpdate=!0,_.renderBufferDirect(W,O,X,B,R,ne),B.side=gn,B.needsUpdate=!0,_.renderBufferDirect(W,O,X,B,R,ne),B.side=tn):_.renderBufferDirect(W,O,X,B,R,ne),R.onAfterRender(_,O,W,X,B,ne)}function Va(R,O,W){O.isScene!==!0&&(O=we);const X=ce.get(R),B=u.state.lights,ne=u.state.shadowsArray,ue=B.state.version,ge=Y.getParameters(R,B.state,ne,O,W),pe=Y.getProgramCacheKey(ge);let Pe=X.programs;X.environment=R.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(R.isMeshStandardMaterial?Te:rt).get(R.envMap||X.environment),X.envMapRotation=X.environment!==null&&R.envMap===null?O.environmentRotation:R.envMapRotation,Pe===void 0&&(R.addEventListener("dispose",K),Pe=new Map,X.programs=Pe);let Ue=Pe.get(pe);if(Ue!==void 0){if(X.currentProgram===Ue&&X.lightsStateVersion===ue)return Ol(R,ge),Ue}else ge.uniforms=Y.getUniforms(R),R.onBeforeCompile(ge,_),Ue=Y.acquireProgram(ge,pe),Pe.set(pe,Ue),X.uniforms=ge.uniforms;const Ae=X.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ae.clippingPlanes=se.uniform),Ol(R,ge),X.needsLights=Ld(R),X.lightsStateVersion=ue,X.needsLights&&(Ae.ambientLightColor.value=B.state.ambient,Ae.lightProbe.value=B.state.probe,Ae.directionalLights.value=B.state.directional,Ae.directionalLightShadows.value=B.state.directionalShadow,Ae.spotLights.value=B.state.spot,Ae.spotLightShadows.value=B.state.spotShadow,Ae.rectAreaLights.value=B.state.rectArea,Ae.ltc_1.value=B.state.rectAreaLTC1,Ae.ltc_2.value=B.state.rectAreaLTC2,Ae.pointLights.value=B.state.point,Ae.pointLightShadows.value=B.state.pointShadow,Ae.hemisphereLights.value=B.state.hemi,Ae.directionalShadowMap.value=B.state.directionalShadowMap,Ae.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ae.spotShadowMap.value=B.state.spotShadowMap,Ae.spotLightMatrix.value=B.state.spotLightMatrix,Ae.spotLightMap.value=B.state.spotLightMap,Ae.pointShadowMap.value=B.state.pointShadowMap,Ae.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Ue,X.uniformsList=null,Ue}function kl(R){if(R.uniformsList===null){const O=R.currentProgram.getUniforms();R.uniformsList=Ts.seqWithValue(O.seq,R.uniforms)}return R.uniformsList}function Ol(R,O){const W=ce.get(R);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Dd(R,O,W,X,B){O.isScene!==!0&&(O=we),Fe.resetTextureUnits();const ne=O.fog,ue=X.isMeshStandardMaterial?O.environment:null,ge=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:gi,pe=(X.isMeshStandardMaterial?Te:rt).get(X.envMap||ue),Pe=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ue=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ae=!!W.morphAttributes.position,qe=!!W.morphAttributes.normal,tt=!!W.morphAttributes.color;let gt=Nn;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(gt=_.toneMapping);const ht=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,at=ht!==void 0?ht.length:0,Re=ce.get(X),ft=u.state.lights;if(Le===!0&&(q===!0||R!==b)){const It=R===b&&X.id===M;se.setState(X,R,It)}let Ze=!1;X.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==ft.state.version||Re.outputColorSpace!==ge||B.isBatchedMesh&&Re.batching===!1||!B.isBatchedMesh&&Re.batching===!0||B.isBatchedMesh&&Re.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Re.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Re.instancing===!1||!B.isInstancedMesh&&Re.instancing===!0||B.isSkinnedMesh&&Re.skinning===!1||!B.isSkinnedMesh&&Re.skinning===!0||B.isInstancedMesh&&Re.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Re.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Re.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Re.instancingMorph===!1&&B.morphTexture!==null||Re.envMap!==pe||X.fog===!0&&Re.fog!==ne||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==se.numPlanes||Re.numIntersection!==se.numIntersection)||Re.vertexAlphas!==Pe||Re.vertexTangents!==Ue||Re.morphTargets!==Ae||Re.morphNormals!==qe||Re.morphColors!==tt||Re.toneMapping!==gt||Re.morphTargetsCount!==at)&&(Ze=!0):(Ze=!0,Re.__version=X.version);let Bt=Re.currentProgram;Ze===!0&&(Bt=Va(X,O,B));let yi=!1,Ht=!1,ca=!1;const pt=Bt.getUniforms(),jt=Re.uniforms;if(Z.useProgram(Bt.program)&&(yi=!0,Ht=!0,ca=!0),X.id!==M&&(M=X.id,Ht=!0),yi||b!==R){Z.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),pt.setValue(L,"projectionMatrix",R.projectionMatrix),pt.setValue(L,"viewMatrix",R.matrixWorldInverse);const Nt=pt.map.cameraPosition;Nt!==void 0&&Nt.setValue(L,fe.setFromMatrixPosition(R.matrixWorld)),De.logarithmicDepthBuffer&&pt.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&pt.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,Ht=!0,ca=!0)}if(B.isSkinnedMesh){pt.setOptional(L,B,"bindMatrix"),pt.setOptional(L,B,"bindMatrixInverse");const It=B.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),pt.setValue(L,"boneTexture",It.boneTexture,Fe))}B.isBatchedMesh&&(pt.setOptional(L,B,"batchingTexture"),pt.setValue(L,"batchingTexture",B._matricesTexture,Fe),pt.setOptional(L,B,"batchingIdTexture"),pt.setValue(L,"batchingIdTexture",B._indirectTexture,Fe),pt.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&pt.setValue(L,"batchingColorTexture",B._colorsTexture,Fe));const Zt=W.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&ie.update(B,W,Bt),(Ht||Re.receiveShadow!==B.receiveShadow)&&(Re.receiveShadow=B.receiveShadow,pt.setValue(L,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(jt.envMap.value=pe,jt.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(jt.envMapIntensity.value=O.environmentIntensity),Ht&&(pt.setValue(L,"toneMappingExposure",_.toneMappingExposure),Re.needsLights&&Pd(jt,ca),ne&&X.fog===!0&&Q.refreshFogUniforms(jt,ne),Q.refreshMaterialUniforms(jt,X,z,V,u.state.transmissionRenderTarget[R.id]),Ts.upload(L,kl(Re),jt,Fe)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ts.upload(L,kl(Re),jt,Fe),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&pt.setValue(L,"center",B.center),pt.setValue(L,"modelViewMatrix",B.modelViewMatrix),pt.setValue(L,"normalMatrix",B.normalMatrix),pt.setValue(L,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const It=X.uniformsGroups;for(let Nt=0,ro=It.length;Nt<ro;Nt++){const ti=It[Nt];Ge.update(ti,Bt),Ge.bind(ti,Bt)}}return Bt}function Pd(R,O){R.ambientLightColor.needsUpdate=O,R.lightProbe.needsUpdate=O,R.directionalLights.needsUpdate=O,R.directionalLightShadows.needsUpdate=O,R.pointLights.needsUpdate=O,R.pointLightShadows.needsUpdate=O,R.spotLights.needsUpdate=O,R.spotLightShadows.needsUpdate=O,R.rectAreaLights.needsUpdate=O,R.hemisphereLights.needsUpdate=O}function Ld(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,O,W){const X=ce.get(R);X.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),ce.get(R.texture).__webglTexture=O,ce.get(R.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,O){const W=ce.get(R);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const Id=L.createFramebuffer();this.setRenderTarget=function(R,O=0,W=0){C=R,S=O,A=W;let X=!0,B=null,ne=!1,ue=!1;if(R){const pe=ce.get(R);if(pe.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(L.FRAMEBUFFER,null),X=!1;else if(pe.__webglFramebuffer===void 0)Fe.setupRenderTarget(R);else if(pe.__hasExternalTextures)Fe.rebindTextures(R,ce.get(R.texture).__webglTexture,ce.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ae=R.depthTexture;if(pe.__boundDepthTexture!==Ae){if(Ae!==null&&ce.has(Ae)&&(R.width!==Ae.image.width||R.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(R)}}const Pe=R.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ue=!0);const Ue=ce.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ue[O])?B=Ue[O][W]:B=Ue[O],ne=!0):R.samples>0&&Fe.useMultisampledRTT(R)===!1?B=ce.get(R).__webglMultisampledFramebuffer:Array.isArray(Ue)?B=Ue[W]:B=Ue,T.copy(R.viewport),P.copy(R.scissor),I=R.scissorTest}else T.copy(oe).multiplyScalar(z).floor(),P.copy(Se).multiplyScalar(z).floor(),I=Ve;if(W!==0&&(B=Id),Z.bindFramebuffer(L.FRAMEBUFFER,B)&&X&&Z.drawBuffers(R,B),Z.viewport(T),Z.scissor(P),Z.setScissorTest(I),ne){const pe=ce.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,pe.__webglTexture,W)}else if(ue){const pe=O;for(let Pe=0;Pe<R.textures.length;Pe++){const Ue=ce.get(R.textures[Pe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Pe,Ue.__webglTexture,W,pe)}}else if(R!==null&&W!==0){const pe=ce.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pe.__webglTexture,W)}M=-1},this.readRenderTargetPixels=function(R,O,W,X,B,ne,ue,ge=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=ce.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ue!==void 0&&(pe=pe[ue]),pe){Z.bindFramebuffer(L.FRAMEBUFFER,pe);try{const Pe=R.textures[ge],Ue=Pe.format,Ae=Pe.type;if(!De.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=R.width-X&&W>=0&&W<=R.height-B&&(R.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ge),L.readPixels(O,W,X,B,ye.convert(Ue),ye.convert(Ae),ne))}finally{const Pe=C!==null?ce.get(C).__webglFramebuffer:null;Z.bindFramebuffer(L.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(R,O,W,X,B,ne,ue,ge=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=ce.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ue!==void 0&&(pe=pe[ue]),pe)if(O>=0&&O<=R.width-X&&W>=0&&W<=R.height-B){Z.bindFramebuffer(L.FRAMEBUFFER,pe);const Pe=R.textures[ge],Ue=Pe.format,Ae=Pe.type;if(!De.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,qe),L.bufferData(L.PIXEL_PACK_BUFFER,ne.byteLength,L.STREAM_READ),R.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ge),L.readPixels(O,W,X,B,ye.convert(Ue),ye.convert(Ae),0);const tt=C!==null?ce.get(C).__webglFramebuffer:null;Z.bindFramebuffer(L.FRAMEBUFFER,tt);const gt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Gf(L,gt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,qe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ne),L.deleteBuffer(qe),L.deleteSync(gt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,O=null,W=0){const X=Math.pow(2,-W),B=Math.floor(R.image.width*X),ne=Math.floor(R.image.height*X),ue=O!==null?O.x:0,ge=O!==null?O.y:0;Fe.setTexture2D(R,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,ue,ge,B,ne),Z.unbindTexture()};const Fd=L.createFramebuffer(),Ud=L.createFramebuffer();this.copyTextureToTexture=function(R,O,W=null,X=null,B=0,ne=null){ne===null&&(B!==0?(Pa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=B,B=0):ne=0);let ue,ge,pe,Pe,Ue,Ae,qe,tt,gt;const ht=R.isCompressedTexture?R.mipmaps[ne]:R.image;if(W!==null)ue=W.max.x-W.min.x,ge=W.max.y-W.min.y,pe=W.isBox3?W.max.z-W.min.z:1,Pe=W.min.x,Ue=W.min.y,Ae=W.isBox3?W.min.z:0;else{const Zt=Math.pow(2,-B);ue=Math.floor(ht.width*Zt),ge=Math.floor(ht.height*Zt),R.isDataArrayTexture?pe=ht.depth:R.isData3DTexture?pe=Math.floor(ht.depth*Zt):pe=1,Pe=0,Ue=0,Ae=0}X!==null?(qe=X.x,tt=X.y,gt=X.z):(qe=0,tt=0,gt=0);const at=ye.convert(O.format),Re=ye.convert(O.type);let ft;O.isData3DTexture?(Fe.setTexture3D(O,0),ft=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Fe.setTexture2DArray(O,0),ft=L.TEXTURE_2D_ARRAY):(Fe.setTexture2D(O,0),ft=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const Ze=L.getParameter(L.UNPACK_ROW_LENGTH),Bt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),yi=L.getParameter(L.UNPACK_SKIP_PIXELS),Ht=L.getParameter(L.UNPACK_SKIP_ROWS),ca=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ht.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Pe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ue),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ae);const pt=R.isDataArrayTexture||R.isData3DTexture,jt=O.isDataArrayTexture||O.isData3DTexture;if(R.isDepthTexture){const Zt=ce.get(R),It=ce.get(O),Nt=ce.get(Zt.__renderTarget),ro=ce.get(It.__renderTarget);Z.bindFramebuffer(L.READ_FRAMEBUFFER,Nt.__webglFramebuffer),Z.bindFramebuffer(L.DRAW_FRAMEBUFFER,ro.__webglFramebuffer);for(let ti=0;ti<pe;ti++)pt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ce.get(R).__webglTexture,B,Ae+ti),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ce.get(O).__webglTexture,ne,gt+ti)),L.blitFramebuffer(Pe,Ue,ue,ge,qe,tt,ue,ge,L.DEPTH_BUFFER_BIT,L.NEAREST);Z.bindFramebuffer(L.READ_FRAMEBUFFER,null),Z.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||R.isRenderTargetTexture||ce.has(R)){const Zt=ce.get(R),It=ce.get(O);Z.bindFramebuffer(L.READ_FRAMEBUFFER,Fd),Z.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ud);for(let Nt=0;Nt<pe;Nt++)pt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Zt.__webglTexture,B,Ae+Nt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Zt.__webglTexture,B),jt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,It.__webglTexture,ne,gt+Nt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,It.__webglTexture,ne),B!==0?L.blitFramebuffer(Pe,Ue,ue,ge,qe,tt,ue,ge,L.COLOR_BUFFER_BIT,L.NEAREST):jt?L.copyTexSubImage3D(ft,ne,qe,tt,gt+Nt,Pe,Ue,ue,ge):L.copyTexSubImage2D(ft,ne,qe,tt,Pe,Ue,ue,ge);Z.bindFramebuffer(L.READ_FRAMEBUFFER,null),Z.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else jt?R.isDataTexture||R.isData3DTexture?L.texSubImage3D(ft,ne,qe,tt,gt,ue,ge,pe,at,Re,ht.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(ft,ne,qe,tt,gt,ue,ge,pe,at,ht.data):L.texSubImage3D(ft,ne,qe,tt,gt,ue,ge,pe,at,Re,ht):R.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ne,qe,tt,ue,ge,at,Re,ht.data):R.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ne,qe,tt,ht.width,ht.height,at,ht.data):L.texSubImage2D(L.TEXTURE_2D,ne,qe,tt,ue,ge,at,Re,ht);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ze),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Bt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,yi),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ht),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ca),ne===0&&O.generateMipmaps&&L.generateMipmap(ft),Z.unbindTexture()},this.initRenderTarget=function(R){ce.get(R).__webglFramebuffer===void 0&&Fe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Fe.setTextureCube(R,0):R.isData3DTexture?Fe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Fe.setTexture2DArray(R,0):Fe.setTexture2D(R,0),Z.unbindTexture()},this.resetState=function(){S=0,A=0,C=null,Z.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}function rw(n,e){const t=new ow({canvas:n,antialias:!0,powerPreference:"high-performance",stencil:!1,alpha:!1,preserveDrawingBuffer:new URLSearchParams(location.search).has("shot")});t.setPixelRatio(e.device.pixelRatio),t.outputColorSpace=gi,t.toneMapping=Nn,t.shadowMap.enabled=!0,t.shadowMap.type=iu;const i=new Fn,a=new en(62,1,2,2e5),s=()=>{const o=n.clientWidth||innerWidth,r=n.clientHeight||innerHeight;t.setSize(o,r,!1),a.aspect=o/r,a.updateProjectionMatrix()};return s(),addEventListener("resize",s),{renderer:t,scene:i,camera:a}}function lw(n,e){const t=n.getDrawingBufferSize(new Oe),i=new ka(t.x,t.y);return i.type=vn,i.format=Jn,i.minFilter=mt,i.magFilter=mt,new Lt(t.x,t.y,{type:wn,format:wt,minFilter:et,magFilter:et,depthBuffer:!0,stencilBuffer:!1,depthTexture:i,samples:e.msaaSamples})}const Nc=[1,.85,.72,.6,.5,.4],cw=20,hw=12,Pu={full:{startIndex:0,targetMs:cw,comfortableMs:hw},reduced:{startIndex:2,targetMs:30,comfortableMs:20}};class uw{index=0;targetMs;comfortableMs;slowFrames=0;fastFrames=0;cooldown=0;pinned=null;baseRatio;constructor(e,t=Pu.full){this.baseRatio=e.getPixelRatio(),this.index=t.startIndex,this.targetMs=t.targetMs,this.comfortableMs=t.comfortableMs}get scale(){return this.pinned??Nc[this.index]}pin(e){this.pinned=e}update(e,t){return this.pinned!==null?!1:this.cooldown>0?(this.cooldown-=t,!1):(e>this.targetMs?(this.slowFrames++,this.fastFrames=0):e<this.comfortableMs?(this.fastFrames++,this.slowFrames=0):(this.slowFrames=0,this.fastFrames=0),this.slowFrames>30&&this.index<Nc.length-1?(this.index++,this.slowFrames=0,this.cooldown=1.5,!0):this.fastFrames>180&&this.index>0?(this.index--,this.fastFrames=0,this.cooldown=3,!0):!1)}apply(e){e.setPixelRatio(this.baseRatio*this.scale)}}const _i=`
// Step counts, overridable per shader with a #define ahead of this chunk.
//
// The sky is one full-screen pass and can afford the full march. Terrain and
// buildings evaluate the SAME integral for aerial perspective over every
// fragment they cover, with overdraw, and at 16x4 that is 64 exp() calls per
// pixel before anything else in the frame runs. Aerial perspective over a few
// kilometres is a smooth, slowly varying quantity; halving its step count is
// invisible and is one of the largest single savings available here.
#ifndef ATMO_STEPS
#define ATMO_STEPS 16
#endif
#ifndef ATMO_SUN_STEPS
#define ATMO_SUN_STEPS 4
#endif

const float PI = 3.141592653589793;

// Earth and atmosphere shell, metres. The camera lives at ground level plus
// altitude, so these are absolute radii and the ray origin is R_GROUND + alt.
const float R_GROUND = 6360000.0;
const float R_TOP    = 6420000.0;

// Scattering coefficients at sea level, per metre, for 680/550/440 nm.
const vec3  BETA_R = vec3(5.802e-6, 13.558e-6, 33.1e-6);
const float BETA_M = 3.996e-6;
const vec3  BETA_O = vec3(0.650e-6, 1.881e-6, 0.085e-6);

const float H_R = 8000.0;   // Rayleigh scale height
const float H_M = 1200.0;   // Mie scale height

uniform vec3  uSunDir;        // world-space, normalised, +y up
uniform float uSunIntensity;
uniform vec3  uSunColor;
uniform float uMieG;          // forward-scatter asymmetry, from humidity
uniform float uTurbidity;     // aerosol multiplier, from visibility
uniform float uCamAltitude;   // metres above sea level
// Multiple-scattering gain. Compare against the Rayleigh phase function, which
// averages 1/4pi = 0.0796 over the sphere: this term is isotropic, so a value
// near 0.05 makes multiple scattering a realistic fraction of single scattering.
// It is a uniform rather than a constant because it is the one number in the
// model with no closed form, and it has to be tuned by eye against a real sky.
uniform float uMultiScatter;

float rayleighPhase(float c) {
  return (3.0 / (16.0 * PI)) * (1.0 + c * c);
}

float miePhase(float c, float g) {
  float g2 = g * g;
  float d = 1.0 + g2 - 2.0 * g * c;
  return (3.0 / (8.0 * PI)) * ((1.0 - g2) * (1.0 + c * c))
       / ((2.0 + g2) * pow(max(d, 1e-4), 1.5));
}

// Ozone sits in a layer around 25 km rather than falling off exponentially.
// A tent function is close enough and is what gives twilight its colour.
float ozoneDensity(float h) {
  return max(0.0, 1.0 - abs(h - 25000.0) / 15000.0);
}

// Distance from 'ro' to the atmosphere shell, or -1 if the ray misses.
float rayShell(vec3 ro, vec3 rd, float radius) {
  float b = dot(ro, rd);
  float c = dot(ro, ro) - radius * radius;
  float d = b * b - c;
  if (d < 0.0) return -1.0;
  return -b + sqrt(d);
}

// Ground hit distance, or -1. Used to stop the sky march at the horizon.
float rayGround(vec3 ro, vec3 rd) {
  float b = dot(ro, rd);
  float c = dot(ro, ro) - R_GROUND * R_GROUND;
  float d = b * b - c;
  if (d < 0.0 || (-b - sqrt(d)) < 0.0) return -1.0;
  return -b - sqrt(d);
}

// Optical depth from a point toward the sun, 4 steps. Cheap and the error is
// invisible next to the single-scatter approximation already in play.
vec3 sunTransmittance(vec3 p, vec3 sunDir, float turbidity) {
  float t = rayShell(p, sunDir, R_TOP);
  if (t <= 0.0) return vec3(1.0);
  const int N = ATMO_SUN_STEPS;
  float dt = t / float(N);
  float odR = 0.0, odM = 0.0, odO = 0.0;
  for (int i = 0; i < N; i++) {
    vec3 s = p + sunDir * (dt * (float(i) + 0.5));
    float h = max(0.0, length(s) - R_GROUND);
    odR += exp(-h / H_R) * dt;
    odM += exp(-h / H_M) * dt;
    odO += ozoneDensity(h) * dt;
  }
  return exp(-(BETA_R * odR + BETA_M * turbidity * 1.11 * odM + BETA_O * odO));
}

/**
 * Integrate scattering along a ray for 'maxDist' metres (use a huge number for
 * the open sky). Returns in-scattered radiance and writes the transmittance of
 * the segment, so a surface shader can do "surface * transmittance + scatter"
 * and get aerial perspective for free.
 */
vec3 atmosphereSteps(vec3 ro, vec3 rd, float maxDist, out vec3 transmittance, int steps) {
  float shell = rayShell(ro, rd, R_TOP);
  if (shell <= 0.0) { transmittance = vec3(1.0); return vec3(0.0); }

  float ground = rayGround(ro, rd);
  float far = shell;
  if (ground > 0.0) far = min(far, ground);
  far = min(far, maxDist);

  int N = steps;
  float dt = far / float(N);
  float odR = 0.0, odM = 0.0, odO = 0.0;
  vec3 sumR = vec3(0.0);
  vec3 sumM = vec3(0.0);
  vec3 sumMS = vec3(0.0);

  for (int i = 0; i < N; i++) {
    vec3 p = ro + rd * (dt * (float(i) + 0.5));
    float h = max(0.0, length(p) - R_GROUND);
    float dR = exp(-h / H_R) * dt;
    float dM = exp(-h / H_M) * dt;
    odR += dR; odM += dM; odO += ozoneDensity(h) * dt;

    vec3 viewT = exp(-(BETA_R * odR + BETA_M * uTurbidity * 1.11 * odM + BETA_O * odO));
    vec3 sunT  = sunTransmittance(p, uSunDir, uTurbidity);
    vec3 t = viewT * sunT;
    sumR += t * dR;
    sumM += t * dM;

    // Multiple scattering, approximated. Single scattering alone leaves the
    // horizon orange at MIDDAY: a 100 km horizon ray is so reddened by the time
    // it is scattered once that no blue survives. Real photons reaching the eye
    // from the horizon have bounced several times, each bounce over a much
    // shorter path, so they are far less reddened. Raising the sun
    // transmittance to a fractional power models that shorter effective path,
    // and the isotropic (phase-free) term restores the pale blue-white horizon
    // that the single-scatter model cannot produce.
    vec3 shortPathSunT = pow(sunT, vec3(0.45));
    sumMS += viewT * shortPathSunT * (BETA_R * dR + BETA_M * uTurbidity * 1.11 * dM);
  }

  transmittance = exp(-(BETA_R * odR + BETA_M * uTurbidity * 1.11 * odM + BETA_O * odO));

  float c = dot(rd, uSunDir);
  vec3 scatter = uSunIntensity * uSunColor *
    (sumR * BETA_R * rayleighPhase(c) +
     sumM * BETA_M * uTurbidity * miePhase(c, uMieG) +
     sumMS * uMultiScatter);
  return scatter;
}

/** The integral at this shader's own step count; see ATMO_STEPS. */
vec3 atmosphere(vec3 ro, vec3 rd, float maxDist, out vec3 transmittance) {
  return atmosphereSteps(ro, rd, maxDist, transmittance, ATMO_STEPS);
}

/**
 * The open sky along a ray, exactly as the sky dome draws it (16 steps, the
 * dome's own count whatever ATMO_STEPS this shader was built with). For a
 * surface that has to fade into the sky seamlessly: a fade to a 7-step
 * estimate of it would leave a faint line where the real sky takes over.
 */
vec3 openSky(vec3 ro, vec3 rd, out vec3 transmittance) {
  return atmosphereSteps(ro, rd, 1.0e7, transmittance, 16);
}

/** Ray origin for a camera 'altM' metres above the ground at the scene origin. */
vec3 atmoOrigin(float altM) {
  return vec3(0.0, R_GROUND + max(altM, 1.0), 0.0);
}
`,Oa=`
uniform float uExposure;

// ACES filmic, Narkowicz's fit. Chosen over AgX because it keeps saturation in
// the bright end, and a sunset over a city is mostly bright saturated colour.
vec3 tonemapACES(vec3 x) {
  x *= 0.6;
  const float a = 2.51;
  const float b = 0.03;
  const float c = 2.43;
  const float d = 0.59;
  const float e = 0.14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}

vec3 linearToSRGB(vec3 c) {
  vec3 lo = c * 12.92;
  vec3 hi = 1.055 * pow(max(c, vec3(1e-5)), vec3(1.0 / 2.4)) - 0.055;
  return mix(lo, hi, step(vec3(0.0031308), c));
}

/**
 * sRGB -> linear, done explicitly.
 *
 * Satellite imagery is sRGB-encoded. Sampling it without decoding leaves every
 * albedo far too high and, worse, COMPRESSES the dark end: sRGB 0.25 water
 * reads as 0.25 instead of linear 0.05, so deep ocean lights up like concrete
 * and any threshold that tries to detect water by darkness fails outright.
 * Setting texture.colorSpace is not enough here -- three.js drives that through
 * its own material chunks, which a RawShaderMaterial never gets.
 */
vec3 srgbToLinear(vec3 c) {
  vec3 lo = c / 12.92;
  vec3 hi = pow((c + 0.055) / 1.055, vec3(2.4));
  return mix(lo, hi, step(vec3(0.04045), c));
}

/** Linear HDR radiance -> the sRGB-encoded value the framebuffer expects. */
vec3 present(vec3 linearHdr) {
  return linearToSRGB(tonemapACES(linearHdr * uExposure));
}
`,dw=`
out vec3 vRayDir;
uniform mat4 uInvProj;
uniform mat4 uInvView;
void main() {
  // Fullscreen triangle from gl_VertexID; no attributes needed.
  vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2) * 2.0 - 1.0;
  vec4 clip = vec4(p, 1.0, 1.0);
  // The perspective divide is not optional here. uInvProj returns a homogeneous
  // point; using its xy without dividing by w scales the ray by the projection
  // and skews the whole sky into a diagonal gradient.
  vec4 view = uInvProj * clip;
  // Pass the ray UNNORMALISED and let the fragment shader normalise it.
  // Normalising per-vertex and interpolating is wrong: interpolation is linear
  // in the vector, not in the angle, and this triangle's corners sit far
  // outside the frustum, so the error skews the whole sky into diagonal bands.
  vRayDir = mat3(uInvView) * (view.xyz / view.w);
  gl_Position = clip;
}
`,fw=`
precision highp float;
in vec3 vRayDir;
out vec4 fragColor;

${_i}
${Oa}

uniform vec3  uMoonDir;
uniform float uMoonIllum;
uniform float uNightAmount;
uniform float uTime;

// Hash-based starfield. Cheap, stable under camera motion because it is keyed
// on the world-space ray direction rather than on screen position.
float hash13(vec3 p) {
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

vec3 stars(vec3 rd, float amount) {
  if (amount <= 0.001) return vec3(0.0);
  vec3 c = vec3(0.0);
  // Two octaves: a dense faint field and a sparse bright one, so the sky has
  // both a milky texture and individually resolvable stars.
  for (int oct = 0; oct < 2; oct++) {
    float scale = oct == 0 ? 420.0 : 160.0;
    float thresh = oct == 0 ? 0.9965 : 0.9992;
    vec3 g = rd * scale;
    vec3 cell = floor(g);
    float h = hash13(cell);
    if (h > thresh) {
      vec3 jitter = vec3(hash13(cell + 1.7), hash13(cell + 3.1), hash13(cell + 5.3)) - 0.5;
      vec3 centre = (cell + 0.5 + jitter * 0.6) / scale;
      float d = length(normalize(centre) - rd) * scale;
      float mag = smoothstep(1.0, 0.0, d) * (h - thresh) / (1.0 - thresh);
      // Twinkle harder near the horizon, where real air does it.
      float tw = 0.75 + 0.25 * sin(uTime * 3.0 + h * 90.0);
      float horizonFade = smoothstep(-0.02, 0.15, rd.y);
      // Colour by a second hash: real starfields are not white.
      vec3 tint = mix(vec3(0.75, 0.83, 1.0), vec3(1.0, 0.86, 0.7), hash13(cell + 9.1));
      c += tint * mag * tw * horizonFade * (oct == 0 ? 0.5 : 2.2);
    }
  }
  return c * amount;
}

void main() {
  vec3 rd = normalize(vRayDir);
  vec3 ro = atmoOrigin(uCamAltitude);

  vec3 trans;
  vec3 col = atmosphere(ro, rd, 1.0e7, trans);

  // Sun disc, 0.53 degrees across, with limb darkening. Drawn behind the
  // atmosphere's transmittance so it reddens and dims at the horizon exactly
  // as the sky around it does.
  float cs = dot(rd, uSunDir);
  float sunAng = acos(clamp(cs, -1.0, 1.0));
  float sunR = 0.00465;
  if (sunAng < sunR) {
    float limb = sqrt(max(0.0, 1.0 - pow(sunAng / sunR, 2.0)));
    col += trans * uSunColor * uSunIntensity * 12.0 * (0.55 + 0.45 * limb);
  }

  // Moon: a lit sphere, drawn as a disc.
  //
  // The terminator comes from the REAL sun direction rather than from a phase
  // number, which is what gets the crescent's tilt right. A phase-driven
  // terminator can only cut the disc along one fixed screen axis, so an
  // evening crescent that should be lying on its back like a bowl was drawn
  // standing on end -- the phase was correct and the picture still wrong.
  // Projecting the sun into the disc's own basis gets the fraction AND the
  // orientation from one piece of geometry, and there is nothing left to
  // disagree.
  float cm = dot(rd, uMoonDir);
  float moonAng = acos(clamp(cm, -1.0, 1.0));
  float moonR = 0.00475;
  vec3 mUp = abs(uMoonDir.y) < 0.9 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
  vec3 mx = normalize(cross(mUp, uMoonDir));
  vec3 my = cross(uMoonDir, mx);
  // Bright at night, but NOT gated on night: the moon is up in daylight about
  // half the time and a daytime sky with no moon in it is a missing object,
  // not a subtle one. The daytime sky simply out-scatters it, as it does in
  // reality, so the pale disc reads without any special case.
  float moonBright = mix(0.50, 0.92, uNightAmount);
  if (moonAng < moonR) {
    // Small-angle projection into the disc plane: at 0.005 rad the difference
    // between the chord and the arc is far under a pixel.
    vec2 uv = vec2(dot(rd - uMoonDir, mx), dot(rd - uMoonDir, my)) / moonR;
    float r2 = clamp(1.0 - dot(uv, uv), 0.0, 1.0);
    // Disc basis: x along mx, y along my, z toward the viewer.
    vec3 n = normalize(vec3(uv, sqrt(r2)));
    vec3 lit = normalize(vec3(dot(uSunDir, mx), dot(uSunDir, my), dot(uSunDir, -uMoonDir)));
    float ndl = clamp(dot(n, lit), 0.0, 1.0);
    float mare = 0.80 + 0.20 * hash13(floor(n * 8.0));
    // Earthshine: the dark limb lit by a full Earth. It is brightest at a thin
    // crescent, because a thin crescent from here is a nearly full Earth from
    // there -- so it scales with what is NOT lit.
    float earthshine = 0.045 * (1.0 - uMoonIllum) * uNightAmount;
    // Antialias the limb; a hard step on an object 0.5 deg across crawls.
    float edge = smoothstep(moonR, moonR * 0.94, moonAng);
    col += trans * vec3(1.0, 0.97, 0.92) * (ndl * mare + earthshine) * moonBright * edge;
  }

  // The aureole in the air around the disc. Small, and it is what stops the
  // moon looking pasted onto the sky; it also gives the eye a reason to find
  // the moon at all when it is a thin crescent.
  float halo = exp(-moonAng * 110.0) * 0.045 + exp(-moonAng * 14.0) * 0.005;
  col += trans * vec3(0.78, 0.84, 1.0) * halo * uMoonIllum * uNightAmount;

  col += stars(rd, uNightAmount) * trans;

  // Alpha 0 on purpose: geometry writes 1, so after the MSAA resolve the
  // scene's alpha is each pixel's geometry coverage, which the cloud present
  // pass needs to take the clear sky back out of a silhouette pixel before
  // the deck is laid over it (see PRESENT_FRAG in composite.ts).
  fragColor = vec4(col, 0.0);
}
`;class pw{mesh;uniforms;constructor(){this.uniforms={uInvProj:{value:new ot},uInvView:{value:new ot},uSunDir:{value:new N(0,1,0)},uSunColor:{value:new Ee(1,1,1)},uSunIntensity:{value:22},uMieG:{value:.76},uTurbidity:{value:1},uCamAltitude:{value:100},uMultiScatter:{value:.055},uExposure:{value:1},uMoonDir:{value:new N(0,-1,0)},uMoonIllum:{value:1},uNightAmount:{value:0},uTime:{value:0}};const e=new nn({vertexShader:dw,fragmentShader:fw,uniforms:this.uniforms,glslVersion:zt,depthWrite:!1,depthTest:!1,side:tn}),t=new At;t.setAttribute("position",new dt(new Float32Array(9),3)),t.boundingSphere=new On(new N,1/0),this.mesh=new _t(t,e),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1e3,this.mesh.matrixAutoUpdate=!1}update(e,t,i,a){const s=this.uniforms,o=e.sun.dir;s.uSunDir.value.set(o.x,o.y,o.z);const r=e.moon.dir;s.uMoonDir.value.set(r.x,r.y,r.z),s.uMoonIllum.value=e.moonIllum,s.uCamAltitude.value=i,s.uTime.value=a;const l=1-Math.max(0,Math.min(1,(e.sun.altitude+12)/14));s.uNightAmount.value=l*(1-.85*t.totalCover),s.uMieG.value=.62+.22*Math.max(0,Math.min(1,(t.humidity-30)/60));const c=Math.max(.2,t.visibility/1e3);s.uTurbidity.value=Math.max(.6,Math.min(12,34/c)),s.uSunIntensity.value=22,s.uSunColor.value.setRGB(1,1,1)}syncCamera(e){this.uniforms.uInvProj.value.copy(e.projectionMatrixInverse),this.uniforms.uInvView.value.copy(e.matrixWorld)}}const mw=1.5,La=[{extent:400,segments:128,imageryZoom:18},{extent:1100,segments:192,imageryZoom:17},{extent:2200,segments:224,imageryZoom:16},{extent:6e3,segments:320,imageryZoom:15},{extent:2e4,segments:256,imageryZoom:13},{extent:7e4,segments:192,imageryZoom:10}],gw=[{extent:400,segments:96,imageryZoom:18},{extent:1100,segments:144,imageryZoom:16},{extent:2200,segments:160,imageryZoom:15},{extent:6e3,segments:224,imageryZoom:14},{extent:2e4,segments:192,imageryZoom:12},{extent:7e4,segments:160,imageryZoom:9}],kc=4,vw=3,ww=8,xw=42,_w=1.05,Lu=256,yw=111412,Oc=3,bw=4,Mw=4/3,Sw=12,Ew=5,zc=.5,Tw=21,Aw=1.7*48+12,Rw=48;function Iu(n){return n.deviceMemoryGb!==null?n.deviceMemoryGb:n.coarsePointer?vw:ww}function Cw(n){let e=0;for(const t of n)e=Math.max(e,Fu(t)*Lu);return e}function Fu(n){const e=2*n.extent*_w,t=Math.cos(xw*Math.PI/180),i=yw*t*360/2**n.imageryZoom;return Math.floor(e/i)+1}function Dw(n){return n.length>0?Uu([n[0]]):0}function Uu(n){let e=0;for(const t of n){const i=Fu(t)*Lu;e+=i*i*bw*Mw}return e}const Pw={rings:La,msaaSamples:4,shadowCascadeSize:2048,shadowCascadeCount:3,aoEnabled:!0,buildingTriangleBudget:4e6,roadTriangleBudget:7e5},Lw={rings:gw,msaaSamples:0,shadowCascadeSize:1024,shadowCascadeCount:2,aoEnabled:!1,buildingTriangleBudget:75e4,roadTriangleBudget:35e4},Iw={full:Pw,reduced:Lw};function Fw(n,e){const t=e.drawingBufferWidth,i=e.drawingBufferHeight,a=Math.max(1,Math.floor(t*zc)),s=Math.max(1,Math.floor(i*zc)),o=[{what:"drape rings",bytes:Uu(n.rings)},{what:`scene target ${t}x${i} msaa ${n.msaaSamples}`,bytes:t*i*Sw*(1+n.msaaSamples)},{what:`shadow cascades ${Oc}x${n.shadowCascadeSize}`,bytes:Oc*n.shadowCascadeSize**2*Ew},{what:`ambient occlusion ${n.aoEnabled?`${a}x${s}`:"off"}`,bytes:n.aoEnabled?a*s*Tw:0},{what:`detail ring restitch ${n.rings[0].extent} m z${n.rings[0].imageryZoom}`,bytes:Dw(n.rings)},{what:`building geometry ${(n.buildingTriangleBudget/1e3).toFixed(0)}k tris`,bytes:n.buildingTriangleBudget*Aw},{what:`road geometry ${(n.roadTriangleBudget/1e3).toFixed(0)}k tris`,bytes:n.roadTriangleBudget*Rw}];let r=0;for(const l of o)r+=l.bytes;return{items:o,totalBytes:r}}function Uw(n,e){const t=Iw[n];return{tier:n,device:e,reasons:[],assumedMemoryGb:Iu(e),...t,memory:Fw(t,e)}}function Nw(n){const e=[],t=Iu(n);if(n.coarsePointer&&e.push("pointer is coarse"),t<=kc){const s=n.deviceMemoryGb===null?"assumed":"reported";e.push(`memory ${s} ${t} GB, at or below ${kc} GB`)}const i=Cw(La);n.maxTextureSize!==null&&n.maxTextureSize<i&&e.push(`MAX_TEXTURE_SIZE ${n.maxTextureSize} below the ${i} px the full drape needs`);const a=Uw(e.length>0?"reduced":"full",n);return a.reasons=e,a}function kw(){const n=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,e=typeof navigator>"u"?void 0:navigator.deviceMemory,t=Math.min(typeof devicePixelRatio=="number"?devicePixelRatio:1,mw);return{coarsePointer:n,deviceMemoryGb:typeof e=="number"?e:null,maxTextureSize:Ow(),drawingBufferWidth:Math.round(innerWidth*t),drawingBufferHeight:Math.round(innerHeight*t),pixelRatio:t}}function Ow(){if(typeof document>"u")return null;try{const n=document.createElement("canvas").getContext("webgl2");if(!n)return null;const e=n.getParameter(n.MAX_TEXTURE_SIZE);return n.getExtension("WEBGL_lose_context")?.loseContext(),e}catch{return null}}let Oo=null;function Nu(){return Oo===null&&(Oo=Nw(kw())),Oo}function Bc(n){return`${(n/1048576).toFixed(1)} MB`}const Hc=new N,Gc=new N,zo=new Ee(.016,.02,.034),Bo=new Ee(.01,.013,.022),zw=.42,Bw=.54,Hw=.34,Gw=new Ee(.72,.82,1);function Vw(n,e){const t=n.sun.altitude;Hc.set(n.sun.dir.x,n.sun.dir.y,n.sun.dir.z);const i=1-Math.max(0,Math.min(1,(t+6)/10)),a=e.totalCover,o=26*(Math.max(0,Math.min(1,(t+2)/8))*(1-e.opacity)),r=new Ee(.26,.38,.58),l=new Ee(.52,.55,.58),c=r.clone().lerp(l,a);c.multiplyScalar(Hw*(1+1.5*e.opacity*Math.max(0,Math.min(1,(t+4)/12))));const h=Math.max(0,Math.min(1,(n.moon.altitude+1.5)/14)),d=n.moonIllum*h*(1-.92*e.opacity)*i;c.multiplyScalar(Math.max(0,1-i)),c.r+=zo.r*i+Bo.r*d,c.g+=zo.g*i+Bo.g*d,c.b+=zo.b*i+Bo.b*d,Gc.set(n.moon.dir.x,n.moon.dir.y,n.moon.dir.z);const p=Gw.clone().multiplyScalar(zw*d),f=Math.max(0,Math.min(1,e.wetness)),g=1-Math.exp(-Math.max(0,e.snowDepth)/.025),v=e.precip*(1-e.snowFrac),m=Math.min(1,Math.sqrt(Math.max(0,v)/8)),u=Math.max(.2,e.visibility/1e3);return{sunDir:Hc.clone(),sunColor:new Ee(1,1,1),sunIntensity:o,moonDir:Gc.clone(),moonLight:p,ambient:c,night:i,nightGlow:new Ee(.03,.028,.027).multiplyScalar(i),wetness:f*(1-.6*g),puddles:Math.max(0,Math.min(1,e.puddles))*(1-g),rainfall:m,snow:g,mieG:.62+.22*Math.max(0,Math.min(1,(e.humidity-30)/60)),turbidity:Math.max(.6,Math.min(12,34/u)),exposure:Bw+2.16*i*i,fogEnd:Math.min(16e4,e.visibility*2.6)}}const za=2,Tn=[350,1400,6e3],Vc=3e3,Ww=2,Xw=.02,$w=.06,Js=`
uniform sampler2D uShadowMap0;
uniform sampler2D uShadowMap1;
uniform sampler2D uShadowMap2;
uniform mat4  uShadowMat0;
uniform mat4  uShadowMat1;
uniform mat4  uShadowMat2;
uniform vec3  uCascadeFar;
uniform vec3  uCascadeTexelWorld;
uniform vec3  uCascadeDepth;
uniform float uShadowTexel;
uniform float uShadowStrength;

// Bias constants, in units of ONE SHADOW TEXEL's world size. Expressing them
// this way is what lets one set of numbers serve a 0.4 m/texel cascade and a
// 7 m/texel one.
//
// The offset is applied along the NORMAL rather than only along the light,
// which is what handles the hard case here: a flat roof under a grazing sun.
// The depth across a texel then changes by texelWorld * tan(angle), which for a
// sun 5 degrees up is ten times the texel size, and no pure depth bias small
// enough to keep the wing of a shadow attached is large enough to stop that
// acneing. Moving the sample off the surface sidesteps the whole problem.
const float SHADOW_NORMAL_OFFSET = 1.5;
const float SHADOW_SLOPE_OFFSET  = 4.5;
const float SHADOW_DEPTH_BIAS    = 1.0;
const float SHADOW_SLOPE_BIAS    = 3.0;

/** 3x3 PCF. sp is the shadow-map coordinate in 0..1, bias in depth units. */
float shadowPcf(int c, vec3 sp, float bias) {
  float lit = 0.0;
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 o = vec2(float(x), float(y)) * uShadowTexel;
      float d;
      // GLSL ES 3.0 will not index an array of samplers dynamically, so the
      // cascade choice has to be a branch.
      if (c == 0)      d = texture(uShadowMap0, sp.xy + o).r;
      else if (c == 1) d = texture(uShadowMap1, sp.xy + o).r;
      else             d = texture(uShadowMap2, sp.xy + o).r;
      lit += (sp.z - bias > d) ? 0.0 : 1.0;
    }
  }
  return lit * (1.0 / 9.0);
}

float cascadeVisibility(int c, vec3 worldPos, vec3 normal, vec3 sunDir) {
  float texelWorld = c == 0 ? uCascadeTexelWorld.x : (c == 1 ? uCascadeTexelWorld.y : uCascadeTexelWorld.z);
  float depthRange = c == 0 ? uCascadeDepth.x     : (c == 1 ? uCascadeDepth.y     : uCascadeDepth.z);

  float ndl = clamp(dot(normal, sunDir), 0.0, 1.0);
  vec3 p = worldPos + normal * texelWorld * (SHADOW_NORMAL_OFFSET + SHADOW_SLOPE_OFFSET * (1.0 - ndl));

  vec4 sc = c == 0 ? uShadowMat0 * vec4(p, 1.0)
          : (c == 1 ? uShadowMat1 * vec4(p, 1.0) : uShadowMat2 * vec4(p, 1.0));
  vec3 sp = sc.xyz / sc.w * 0.5 + 0.5;
  if (sp.x < 0.0 || sp.x > 1.0 || sp.y < 0.0 || sp.y > 1.0 || sp.z > 1.0) return 1.0;

  float bias = (SHADOW_DEPTH_BIAS + SHADOW_SLOPE_BIAS * (1.0 - ndl)) * texelWorld / depthRange;
  return shadowPcf(c, sp, bias);
}

/** Returns 0..1, how much of the sun reaches this fragment. */
float sunVisibility(vec3 worldPos, vec3 normal, vec3 sunDir, float viewDist) {
  if (uShadowStrength <= 0.0) return 1.0;
  if (viewDist >= uCascadeFar.z) return 1.0;

  // Shadows must not end at a hard circle round the aircraft, so the last
  // stretch of the outermost cascade fades to unshadowed.
  float fade = 1.0 - smoothstep(uCascadeFar.z * 0.85, uCascadeFar.z, viewDist);
  if (fade <= 0.0) return 1.0;

  int c;
  float nearD;
  float farD;
  if (viewDist < uCascadeFar.x)      { c = 0; nearD = 0.0;            farD = uCascadeFar.x; }
  else if (viewDist < uCascadeFar.y) { c = 1; nearD = uCascadeFar.x;  farD = uCascadeFar.y; }
  else                               { c = 2; nearD = uCascadeFar.y;  farD = uCascadeFar.z; }

  float vis = cascadeVisibility(c, worldPos, normal, sunDir);

  // Cross-fade into the next cascade over the last 12% of this one. Without it
  // the resolution step draws a visible line straight across the city.
  // The second test is what keeps a DISABLED outer cascade (whose far equals
  // the previous one's) from being blended in as a stale map.
  if (c < 2 && farD < uCascadeFar.z) {
    float t = smoothstep(farD - (farD - nearD) * 0.12, farD, viewDist);
    if (t > 0.0) vis = mix(vis, cascadeVisibility(c + 1, worldPos, normal, sunDir), t);
  }

  return mix(1.0, vis, uShadowStrength * fade);
}
`,qw=`precision highp float;
in vec3 position;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Yw=`precision highp float;
out vec4 c;
void main() { c = vec4(1.0); }`;function ku(){return new nn({glslVersion:zt,vertexShader:qw,fragmentShader:Yw,side:tn,colorWrite:!1})}function jw(n){const e=new ka(n,n);return e.type=vn,e.format=Jn,e.minFilter=mt,e.magFilter=mt,e.compareFunction=null,new Lt(n,n,{depthBuffer:!0,stencilBuffer:!1,depthTexture:e,format:Qn,type:yt})}const us=new N,Ni=new N,Zw=new N,Ho=new N,Wc=new ot,ds=new Bn,Xc=new Bn;class Kw{uniforms;enabled=!0;cascades=[];depthMaterial;size;budget;constructor(e){this.budget=e;const t=e.shadowCascadeSize;this.size=t;for(let i=0;i<3;i++)this.cascades.push({target:jw(t),camera:new Zs(-1,1,1,-1,1,100),matrix:new ot,texelWorld:1,depthRange:1});this.depthMaterial=ku(),this.uniforms={uShadowMap0:{value:this.cascades[0].target.depthTexture},uShadowMap1:{value:this.cascades[1].target.depthTexture},uShadowMap2:{value:this.cascades[2].target.depthTexture},uShadowMat0:{value:this.cascades[0].matrix},uShadowMat1:{value:this.cascades[1].matrix},uShadowMat2:{value:this.cascades[2].matrix},uCascadeFar:{value:new N(Tn[0],Tn[1],Tn[2])},uCascadeTexelWorld:{value:new N(1,1,1)},uCascadeDepth:{value:new N(1,1,1)},uShadowTexel:{value:1/t},uShadowStrength:{value:0}}}update(e,t,i,a,s,o=[]){const r=this.uniforms,l=$l.smoothstep(a.y,Xw,$w);if(!this.enabled||l<=0){r.uShadowStrength.value=0;return}const c=s<.8;this.setSize(c?Math.min(this.budget.shadowCascadeSize,1024):this.budget.shadowCascadeSize);const h=c?Math.min(this.budget.shadowCascadeCount,2):this.budget.shadowCascadeCount;for(let g=0;g<h;g++)this.fit(this.cascades[g],i,a,g);const d=e.getRenderTarget(),p=t.overrideMaterial,f=e.autoClear;t.overrideMaterial=this.depthMaterial,e.autoClear=!1;for(let g=0;g<h;g++){const v=this.cascades[g];if(v.camera.layers.set(za),e.setRenderTarget(v.target),e.clear(!1,!0,!1),e.render(t,v.camera),o.length&&g<Ww){t.overrideMaterial=null;for(const m of o)e.render(m,v.camera);t.overrideMaterial=this.depthMaterial}}e.autoClear=f,t.overrideMaterial=p,e.setRenderTarget(d),r.uShadowMat0.value.copy(this.cascades[0].matrix),r.uShadowMat1.value.copy(this.cascades[1].matrix),r.uShadowMat2.value.copy(this.cascades[2].matrix),r.uCascadeTexelWorld.value.set(this.cascades[0].texelWorld,this.cascades[1].texelWorld,this.cascades[2].texelWorld),r.uCascadeDepth.value.set(this.cascades[0].depthRange,this.cascades[1].depthRange,this.cascades[2].depthRange),r.uCascadeFar.value.set(Tn[0],Tn[1],h>2?Tn[2]:Tn[1]),r.uShadowTexel.value=1/this.size,r.uShadowStrength.value=l}fit(e,t,i,a){const s=a===0?t.near:Tn[a-1],o=Tn[a],r=Math.tan($l.degToRad(t.fov*.5)),l=r*t.aspect,c=l*l+r*r;let h,d;c>=(o-s)/(o+s)?(h=-o,d=o*Math.sqrt(c)):(h=-.5*(o+s)*(1+c),d=.5*Math.sqrt((o-s)*(o-s)+2*(o*o+s*s)*c+(o+s)*(o+s)*c*c)),us.set(0,0,h).applyMatrix4(t.matrixWorld),Ho.set(0,1,0),Math.abs(i.y)>.999&&Ho.set(0,0,1),Wc.lookAt(i,Zw.set(0,0,0),Ho),ds.setFromRotationMatrix(Wc),Xc.copy(ds).invert();const p=2*d/this.size;Ni.copy(us).applyQuaternion(Xc),Ni.x=Math.round(Ni.x/p)*p,Ni.y=Math.round(Ni.y/p)*p,us.copy(Ni).applyQuaternion(ds);const f=e.camera;f.quaternion.copy(ds),f.position.copy(us).addScaledVector(i,d+Vc),f.updateMatrixWorld(!0);const g=d+p;f.left=-g,f.right=g,f.top=g,f.bottom=-g,f.near=1,f.far=2*d+2*Vc,f.updateProjectionMatrix(),e.matrix.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),e.texelWorld=p,e.depthRange=f.far-f.near}setSize(e){if(e!==this.size){this.size=e;for(const t of this.cascades)t.target.setSize(e,e);this.uniforms.uShadowMap0.value=this.cascades[0].target.depthTexture,this.uniforms.uShadowMap1.value=this.cascades[1].target.depthTexture,this.uniforms.uShadowMap2.value=this.cascades[2].target.depthTexture}}dispose(){for(const e of this.cascades)e.target.dispose();this.depthMaterial.dispose()}}const Jw=.5,Ou=`
uniform sampler2D uUrban;
uniform float uUrbanExtent;
uniform float uFlatBounce;
uniform float uGroundDebug;

const float SHADOW_TARGET = ${Jw.toFixed(4)};

/**
 * 0..1 coverage by baked building footprints; see render/urbanmask.ts.
 *
 * Zero OUTSIDE the grid rather than the clamped edge texel, or a city's
 * built-ness would smear to the horizon along every edge of the mask.
 */
float builtness(vec3 worldPos) {
  vec2 uv = worldPos.xz / (2.0 * uUrbanExtent) + 0.5;
  float inside = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
  return texture(uUrban, uv).r * inside;
}

/**
 * Light bounced onto this ground fragment off the sunlit walls around it.
 *
 * sunRadiance is the beam that reaches those walls -- sunColor * intensity *
 * surface * transmittance -- i.e. exactly what the direct term is built from
 * before its own cosine and shadow, so the two cannot drift out of step.
 *
 * THE SKY IS SUBTRACTED, NOT ADDED TO, and that is the part that took a
 * measurement to get right. A wall and the sky share one hemisphere: light the
 * sky is already delivering here is light the wall is NOT also delivering,
 * because a ground pixel that can still see that much sky is not standing in a
 * canyon. Written as a gain instead -- ambient plus a wall term -- the same
 * coefficient that rescues the LaSalle floor lifts a building shadow on Van
 * Ness by 73%, to within 0.15 of a stop of the sunlit avenue beside it, which
 * is not a shadow any more. Written as a TARGET the two frames separate on
 * their own: in the canyon the sky term is near zero and the wall supplies
 * almost all of it, on the open avenue the sky has already got there and the
 * wall has nothing left to add.
 *
 * Componentwise, so a blue sky term and a warm wall term each cover their own
 * part of the spectrum rather than one cancelling the other.
 */
vec3 canyonBounce(vec3 sunRadiance, vec3 skyAmbient, float sunVis, vec3 sunDir, float built) {
  float occ = (1.0 - sunVis) * max(0.0, sunDir.y) * built;
  vec3 target = sunRadiance * (SHADOW_TARGET * occ);
  return max(vec3(0.0), target - skyAmbient) * (1.0 - uFlatBounce);
}

/** What kind of street floor a shader draws; see groundDebugColor. */
const float GROUND_CARRIAGEWAY = 2.0;
const float GROUND_FOOTWAY     = 3.0;
const float GROUND_DRAPE       = 4.0;

/**
 * ?groundDebug: which pixels are street floor, and which of them the sun
 * reaches. RED where the ground is shadowed, BLUE where it is lit, and nothing
 * anywhere else, so tools/verify-street.ts never has to guess either one from
 * colour in the beauty frame.
 *
 * Mode 1 is every ground surface. Modes 2, 3 and 4 narrow it to the
 * carriageway, the footway and the terrain drape respectively, and that split
 * is not a convenience: a sunlit-over-shadowed ratio taken across all three at
 * once is measuring ALBEDO as much as light. Half the shadowed ground in the
 * LaSalle frame is drape whose baked satellite texel is nearly black, so that
 * ratio reads 5.6 with a term that has already brought the illumination to
 * within a stop. Taken over the carriageway alone it is one material either
 * side of the shadow line and the ratio is a ratio of light.
 */
bool groundDebugColor(float sunVis, float kind, out vec3 col) {
  if (uGroundDebug < 0.5) return false;
  if (uGroundDebug > 1.5 && abs(uGroundDebug - kind) > 0.5) return false;
  col = sunVis < 0.5 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 0.0, 1.0);
  return true;
}
`;function zu(){return{uUrban:{value:null},uUrbanExtent:{value:1},uFlatBounce:{value:0},uGroundDebug:{value:0}}}const Ba=9;function Qr(){return new Float32Array(Ba*3)}const Ml=Math.sqrt(1/(4*Math.PI)),Ma=Math.sqrt(3/(4*Math.PI)),As=.5*Math.sqrt(15/Math.PI),Bu=.25*Math.sqrt(5/Math.PI),Hu=.25*Math.sqrt(15/Math.PI),Sl=Math.PI,Sa=2*Math.PI/3,qn=Math.PI/4,Qw=[Sl,Sa,Sa,Sa,qn,qn,qn,qn,qn],ks=new Float32Array(Ba);function Gu(n,e,t,i){i[0]=Ml,i[1]=Ma*e,i[2]=Ma*t,i[3]=Ma*n,i[4]=As*n*e,i[5]=As*e*t,i[6]=Bu*(3*t*t-1),i[7]=As*n*t,i[8]=Hu*(n*n-e*e)}function ex(n,e,t,i,a,s,o,r){Gu(e,t,i,ks);for(let l=0;l<Ba;l++){const c=ks[l]*r;n[l*3]+=a*c,n[l*3+1]+=s*c,n[l*3+2]+=o*c}}function tx(n,e,t,i,a){Gu(e,t,i,ks);let s=0,o=0,r=0;for(let l=0;l<Ba;l++){const c=Qw[l]*ks[l];s+=n[l*3]*c,o+=n[l*3+1]*c,r+=n[l*3+2]*c}a[0]=Math.max(0,s),a[1]=Math.max(0,o),a[2]=Math.max(0,r)}function ia(n,e,t){const i=Qr();for(let a=0;a<3;a++)i[a]=n[a]*e/(Sl*Ml),i[3+a]=n[a]*t/(Sa*Ma);return i}const fs=new Float32Array(3);function nx(n,e,t,i,a,s){tx(n,e,t,i,fs);for(let o=0;o<3;o++)if(!(fs[o]>s)||!Number.isFinite(fs[o]))return!1;for(let o=0;o<3;o++){const r=a[o]/fs[o];if(!Number.isFinite(r))return!1;for(let l=0;l<Ba;l++)n[l*3+o]*=r}return!0}const El=[[0,0,-1,0,-1,0,1,0,0],[0,0,1,0,-1,0,-1,0,0],[1,0,0,0,0,1,0,1,0],[1,0,0,0,0,-1,0,-1,0],[1,0,0,0,-1,0,0,0,1],[-1,0,0,0,-1,0,0,0,-1]],Gi=El.length;function ix(n,e,t,i){const a=El[n],s=a[0]*e+a[3]*t+a[6],o=a[1]*e+a[4]*t+a[7],r=a[2]*e+a[5]*t+a[8],l=1/Math.sqrt(s*s+o*o+r*r);i[0]=s*l,i[1]=o*l,i[2]=r*l}function ps(n,e){return Math.atan2(n*e,Math.sqrt(n*n+e*e+1))}function ax(n,e,t,i){return ps(e,i)-ps(n,i)-ps(e,t)+ps(n,t)}const ms=new Float32Array(3);function sx(n,e,t){t.fill(0);const i=2/e;for(let a=0;a<Gi;a++)for(let s=0;s<e;s++){const o=s*i-1,r=o+i,l=(o+r)*.5;for(let c=0;c<e;c++){const h=c*i-1,d=h+i,p=(h+d)*.5;ix(a,p,l,ms);const f=((a*e+s)*e+c)*4;ex(t,ms[0],ms[1],ms[2],n[f],n[f+1],n[f+2],ax(h,d,o,r))}}}const pa=n=>n.toPrecision(9),Qs=`
uniform vec3 uSH[9];

/** Sky irradiance for a surface normal. Clamped: see the note in sh.ts. */
vec3 shIrradiance(vec3 n) {
  vec3 e = ${pa(Sl*Ml)} * uSH[0]
         + ${pa(Sa*Ma)} * (uSH[1] * n.y + uSH[2] * n.z + uSH[3] * n.x)
         + ${pa(qn*As)} * (uSH[4] * n.x * n.y + uSH[5] * n.y * n.z + uSH[7] * n.x * n.z)
         + ${pa(qn*Bu)} * uSH[6] * (3.0 * n.z * n.z - 1.0)
         + ${pa(qn*Hu)} * uSH[8] * (n.x * n.x - n.y * n.y);
  return max(e, vec3(0.0));
}
`,ox=`
const float GTAO_HALF_PI = 1.57079632679;

/** Cosine-weighted visibility of the arc [h1, h2] about a normal at angle g. */
float gtaoSliceVisibility(float h1, float h2, float g) {
  float cg = cos(g);
  float sg = sin(g);
  return 0.25 * (-cos(2.0 * h1 - g) + cg + 2.0 * h1 * sg)
       + 0.25 * (-cos(2.0 * h2 - g) + cg + 2.0 * h2 * sg);
}

/** Tangential component of the slice's unnormalised bent normal. */
float gtaoSliceBentTangent(float h1, float h2, float g) {
  return (6.0 * sin(h1 - g) - sin(3.0 * h1 - g)
        + 6.0 * sin(h2 - g) - sin(3.0 * h2 - g)
        + 16.0 * sin(g)
        - 3.0 * (sin(h1 + g) + sin(h2 + g))) / 12.0;
}

/** View component of the slice's unnormalised bent normal. */
float gtaoSliceBentView(float h1, float h2, float g) {
  return (-cos(3.0 * h1 - g) - cos(3.0 * h2 - g)
        + 8.0 * cos(g)
        - 3.0 * (cos(h1 + g) + cos(h2 + g))) / 12.0;
}
`,rx=`
precision highp float;
out vec2 vUv;
void main() {
  vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2) * 2.0 - 1.0;
  vUv = p * 0.5 + 0.5;
  gl_Position = vec4(p, 1.0, 1.0);
}
`,lx=3,cx=6,hx=2,ux=`
precision highp float;
${ox}

in vec2 vUv;
out vec4 fragColor;

uniform sampler2D uDepth;
uniform vec2  uTexel;        // 1 / AO buffer size
uniform vec2  uViewScale;    // tan(fov/2) * (aspect, 1)
uniform mat3  uViewToWorld;
uniform float uNear;
uniform float uFar;
uniform float uFocalPx;      // pixels one metre subtends at one metre
uniform float uRadius;       // world metres
uniform float uMaxRadiusPx;
uniform float uFalloffStart; // fraction of uRadius
uniform vec2  uFade;         // view distance where AO starts and finishes fading out

const int SLICES = ${lx};
const int STEPS = ${cx};

/**
 * View distance along -z, in metres, from the hardware depth buffer.
 *
 * A cleared texel reads 1.0, which this returns as a very large number so the
 * search treats sky as "nothing there" rather than as an occluder at the far
 * plane. Without that, every silhouette against the sky would be ringed.
 */
float linearDepth(float d) {
  if (d >= 0.999999) return 1e9;
  float z = d * 2.0 - 1.0;
  return (2.0 * uNear * uFar) / (uFar + uNear - z * (uFar - uNear));
}

vec3 viewPosAt(vec2 uv) {
  float depth = linearDepth(texture(uDepth, uv).r);
  return vec3((uv * 2.0 - 1.0) * uViewScale, -1.0) * depth;
}

void main() {
  float centreDepth = linearDepth(texture(uDepth, vUv).r);
  vec3 P = vec3((vUv * 2.0 - 1.0) * uViewScale, -1.0) * centreDepth;

  // Sky, or past the fade: nothing to occlude and nothing to bend. A zero
  // direction is the agreed "no bent normal here" value; see AO_GLSL below.
  float fade = 1.0 - smoothstep(uFade.x, uFade.y, centreDepth);
  if (centreDepth > 1e8 || fade <= 0.0) {
    fragColor = vec4(0.0, 0.0, 0.0, 1.0);
    return;
  }

  // Normal from depth, taking the SHORTER of the two one-sided differences on
  // each axis. A centred difference straddles a silhouette and produces a
  // normal that belongs to neither surface, which on a city of hard vertical
  // edges is every building outline in the frame.
  vec3 pr = viewPosAt(vUv + vec2(uTexel.x, 0.0));
  vec3 pl = viewPosAt(vUv - vec2(uTexel.x, 0.0));
  vec3 pu = viewPosAt(vUv + vec2(0.0, uTexel.y));
  vec3 pd = viewPosAt(vUv - vec2(0.0, uTexel.y));
  vec3 dx = abs(pr.z - P.z) < abs(P.z - pl.z) ? (pr - P) : (P - pl);
  vec3 dy = abs(pu.z - P.z) < abs(P.z - pd.z) ? (pu - P) : (P - pd);
  vec3 N = cross(dx, dy);
  float nlen = length(N);
  if (nlen < 1e-12) {
    fragColor = vec4(0.0, 0.0, 0.0, 1.0);
    return;
  }
  N /= nlen;
  vec3 V = normalize(-P);
  if (dot(N, V) < 0.0) N = -N;

  float radiusPx = min(uMaxRadiusPx, uRadius * uFocalPx / max(centreDepth, 1e-4));
  if (radiusPx < 1.0) {
    fragColor = vec4(uViewToWorld * N, 1.0);
    return;
  }
  float fadeStart = uFalloffStart * uRadius;
  float fadeSpan = max(1e-4, uRadius - fadeStart);

  // Per-pixel slice rotation and step offset. Interleaved gradient noise, which
  // has almost all its energy above the 4x4 period the denoise below removes;
  // a per-pixel hash instead leaves low-frequency blotches the blur cannot
  // reach. Driven by gl_FragCoord alone and never by time, because the
  // screenshot harness compares two builds pixel for pixel.
  vec2 fc = gl_FragCoord.xy;
  float ign = fract(52.9829189 * fract(0.06711056 * fc.x + 0.00583715 * fc.y));
  float stepOffset = fract(floor(fc.x) * 0.5 + floor(fc.y) * 0.25);

  float visibility = 0.0;
  vec3 bent = vec3(0.0);

  for (int slice = 0; slice < SLICES; slice++) {
    float phi = (float(slice) + ign) * (3.14159265359 / float(SLICES));
    vec2 dir = vec2(cos(phi), sin(phi));

    vec3 axis = cross(vec3(dir, 0.0), V);
    float alen = length(axis);
    if (alen < 1e-9) continue;
    axis /= alen;
    vec3 T = normalize(cross(V, axis));

    vec3 nProj = N - axis * dot(N, axis);
    float projLen = length(nProj);
    if (projLen < 1e-6) continue;
    nProj /= projLen;

    float g = atan(dot(nProj, T), dot(nProj, V));

    // -1 is "no occluder anywhere", which clamps to the open hemisphere below.
    float cosPos = -1.0;
    float cosNeg = -1.0;

    for (int si = 0; si < STEPS; si++) {
      float d = radiusPx * pow((float(si) + 1.0 + stepOffset) / float(STEPS), ${hx.toFixed(1)});
      vec2 o = dir * d * uTexel;

      vec3 qp = viewPosAt(vUv + o);
      vec3 ep = qp - P;
      float lp = length(ep);
      if (lp > 1e-6 && qp.z > -1e8) {
        float c = dot(ep, V) / lp;
        float w = clamp(1.0 - (lp - fadeStart) / fadeSpan, 0.0, 1.0);
        cosPos = max(cosPos, mix(cosPos, c, w));
      }

      vec3 qn = viewPosAt(vUv - o);
      vec3 en = qn - P;
      float ln = length(en);
      if (ln > 1e-6 && qn.z > -1e8) {
        float c = dot(en, V) / ln;
        float w = clamp(1.0 - (ln - fadeStart) / fadeSpan, 0.0, 1.0);
        cosNeg = max(cosNeg, mix(cosNeg, c, w));
      }
    }

    float hPos = acos(clamp(cosPos, -1.0, 1.0));
    float hNeg = -acos(clamp(cosNeg, -1.0, 1.0));
    float h2 = g + min(hPos - g, GTAO_HALF_PI);
    float h1 = g + max(hNeg - g, -GTAO_HALF_PI);

    visibility += projLen * gtaoSliceVisibility(h1, h2, g);
    bent += projLen * (T * gtaoSliceBentTangent(h1, h2, g)
                     + V * gtaoSliceBentView(h1, h2, g));
  }

  visibility = clamp(visibility / float(SLICES), 0.0, 1.0);
  float bl = length(bent);
  vec3 bentView = bl > 1e-7 ? bent / bl : N;

  // Fade back to fully open with distance, both the level and the direction, so
  // the horizon does not develop a band of noise where the depth buffer runs
  // out of resolution.
  visibility = mix(1.0, visibility, fade);
  bentView = normalize(mix(N, bentView, fade));

  // Stored as direction * visibility so the denoise below averages visibility
  // CONES rather than directions: a pixel that can see nothing must not get an
  // equal vote on which way the open sky is.
  fragColor = vec4((uViewToWorld * bentView) * visibility, visibility);
}
`,dx=`
precision highp float;
in vec2 vUv;
out vec4 fragColor;

uniform sampler2D uSource;
uniform sampler2D uDepth;
uniform vec2  uTexel;
uniform float uNear;
uniform float uFar;

float linearDepth(float d) {
  if (d >= 0.999999) return 1e9;
  float z = d * 2.0 - 1.0;
  return (2.0 * uNear * uFar) / (uFar + uNear - z * (uFar - uNear));
}

/**
 * 4x4 box, weighted by depth similarity.
 *
 * Four by four because that is exactly the period of the interleaved-gradient
 * rotation in the pass above: a smaller kernel leaves the slice pattern in as
 * a visible weave, and a larger one only blurs across geometry the depth weight
 * is then fighting to keep apart.
 */
void main() {
  float centre = linearDepth(texture(uDepth, vUv).r);
  vec4 sum = vec4(0.0);
  float wsum = 0.0;
  for (int y = -2; y <= 1; y++) {
    for (int x = -2; x <= 1; x++) {
      vec2 uv = vUv + vec2(float(x) + 0.5, float(y) + 0.5) * uTexel;
      float d = linearDepth(texture(uDepth, uv).r);
      // Tolerance proportional to distance: a 20 cm step matters on a kerb at
      // 30 m and is below the depth buffer's own resolution at 3 km.
      float w = step(abs(d - centre), 0.02 * centre + 0.05);
      sum += texture(uSource, uv) * w;
      wsum += w;
    }
  }
  fragColor = wsum > 0.0 ? sum / wsum : texture(uSource, vUv);
}
`,eo=`
uniform sampler2D uAo;
uniform float uAoStrength;
uniform vec2 uAoInvResolution;

struct SkyOcclusion {
  float visibility;
  vec3 bentNormal;
};

SkyOcclusion sampleSkyOcclusion(vec3 n) {
  SkyOcclusion o;
  o.visibility = 1.0;
  o.bentNormal = n;
  if (uAoStrength <= 0.0) return o;

  vec4 s = texture(uAo, gl_FragCoord.xy * uAoInvResolution);
  o.visibility = mix(1.0, s.a, uAoStrength);

  // The stored direction is scaled by visibility, and near a silhouette a
  // bilinear tap mixes in the zero the sky texels carry. A short vector is
  // therefore "not much information here", not "the sky is that way".
  float len = length(s.rgb);
  if (len > 1e-3) {
    vec3 b = s.rgb / len;
    // The AO pass derives its normal from depth and this one comes from the
    // geometry, so they can disagree by a lot on a facade detail. Refusing a
    // bent normal that has ended up under the shading normal is what keeps a
    // wall from picking up the pavement's light.
    if (dot(b, n) > 0.0) o.bentNormal = normalize(mix(n, b, uAoStrength));
  }
  return o;
}

/**
 * Sky irradiance a surface with this normal actually receives.
 *
 * shIrradiance(bentNormal) * visibility is GTAO's own diffuse form and it is
 * the whole reason for computing a bent normal: a wall in a canyon then gets
 * the light from the strip of sky it can see, up and along the street, rather
 * than a uniformly dimmed sample of the whole dome.
 *
 * The min is not tidying. That form does not respect its own bound: the bent
 * normal leans toward the open part of the sky, which is also the bright part,
 * and a cosine lobe pointed there can integrate to MORE than the same lobe on
 * the geometric normal even after the visibility factor has been applied.
 * Measured on the Chelsea rooftop pose, that came out as a fraction of a code
 * value of extra light over most of the facades in the frame while the corners
 * correctly went dark. Putting a wall next to a surface cannot brighten it, so
 * the unoccluded irradiance is the ceiling.
 *
 * Requires SH_GLSL, which every caller interpolates before this.
 */
vec3 occludedSkyIrradiance(vec3 n) {
  SkyOcclusion o = sampleSkyOcclusion(n);
  return min(shIrradiance(o.bentNormal) * o.visibility, shIrradiance(n));
}
`;function to(){return{uAo:{value:null},uAoStrength:{value:0},uAoInvResolution:{value:new Oe(1/1920,1/1080)}}}function fx(){const n=new At;return n.setAttribute("position",new dt(new Float32Array(9),3)),n.boundingSphere=new On(new N,1/0),n}const $c=.5,Go=new Oe;class px{enabled=!0;depthTarget;rawTarget;blurTarget;depthMaterial;scene=new Fn;blurScene=new Fn;camera=new Zs(-1,1,1,-1,0,1);uniforms;blurUniforms;frameSize=new Oe(1,1);readback=null;constructor(e){const t=this.aoSize(e);this.depthTarget=mx(t.x,t.y);const i={type:wn,format:wt,minFilter:et,magFilter:et,depthBuffer:!1,stencilBuffer:!1};this.rawTarget=new Lt(t.x,t.y,i),this.blurTarget=new Lt(t.x,t.y,i),this.depthMaterial=ku(),this.uniforms={uDepth:{value:this.depthTarget.depthTexture},uTexel:{value:new Oe(1/t.x,1/t.y)},uViewScale:{value:new Oe(1,1)},uViewToWorld:{value:new Be},uNear:{value:2},uFar:{value:2e5},uFocalPx:{value:1},uRadius:{value:14},uMaxRadiusPx:{value:96},uFalloffStart:{value:.7},uFade:{value:new Oe(1200,3e3)}},this.blurUniforms={uSource:{value:this.rawTarget.texture},uDepth:{value:this.depthTarget.depthTexture},uTexel:{value:new Oe(1/t.x,1/t.y)},uNear:{value:2},uFar:{value:2e5}};const a=(s,o,r)=>{const l=new _t(fx(),new nn({vertexShader:rx,fragmentShader:o,uniforms:r,glslVersion:zt,depthTest:!1,depthWrite:!1}));l.frustumCulled=!1,s.add(l)};a(this.scene,ux,this.uniforms),a(this.blurScene,dx,this.blurUniforms)}get texture(){return this.blurTarget.texture}aoSize(e){return e.getDrawingBufferSize(Go),new Oe(Math.max(1,Math.floor(Go.x*$c)),Math.max(1,Math.floor(Go.y*$c)))}resize(e){const t=this.aoSize(e);t.x===this.rawTarget.width&&t.y===this.rawTarget.height||(this.depthTarget.setSize(t.x,t.y),this.rawTarget.setSize(t.x,t.y),this.blurTarget.setSize(t.x,t.y),this.uniforms.uDepth.value=this.depthTarget.depthTexture,this.blurUniforms.uDepth.value=this.depthTarget.depthTexture,this.uniforms.uTexel.value.set(1/t.x,1/t.y),this.blurUniforms.uTexel.value.set(1/t.x,1/t.y))}render(e,t,i,a=[]){if(!this.enabled)return;this.resize(e),e.getDrawingBufferSize(this.frameSize);const s=e.getRenderTarget(),o=t.overrideMaterial,r=e.autoClear,l=i.layers.mask;if(t.overrideMaterial=this.depthMaterial,e.autoClear=!1,i.layers.set(za),e.setRenderTarget(this.depthTarget),e.clear(!1,!0,!1),e.render(t,i),a.length){t.overrideMaterial=null;for(const h of a)e.render(h,i)}i.layers.mask=l,t.overrideMaterial=o,e.autoClear=r;const c=Math.tan(i.fov*Math.PI/360);this.uniforms.uViewScale.value.set(c*i.aspect,c),this.uniforms.uViewToWorld.value.setFromMatrix4(i.matrixWorld),this.uniforms.uNear.value=i.near,this.uniforms.uFar.value=i.far,this.blurUniforms.uNear.value=i.near,this.blurUniforms.uFar.value=i.far,this.uniforms.uFocalPx.value=this.rawTarget.height/(2*c),e.setRenderTarget(this.rawTarget),e.render(this.scene,this.camera),e.setRenderTarget(this.blurTarget),e.render(this.blurScene,this.camera),e.setRenderTarget(s)}measure(e){const t=this.blurTarget.width,i=this.blurTarget.height,a=t*i*4;(!this.readback||this.readback.length!==a)&&(this.readback=new Uint16Array(a));const s=this.readback;e.readRenderTargetPixels(this.blurTarget,0,0,t,i,s);const o=_u.fromHalfFloat;let r=0,l=0,c=1;const h=t*i;for(let d=0;d<h;d++){const p=o(s[d*4+3]);r+=p,p<.95&&l++,c=Math.min(c,p)}return{mean:r/h,occluded:l/h,darkest:c}}apply(e,t){e.uAo.value=this.enabled?this.blurTarget.texture:null,e.uAoStrength.value=this.enabled?t:0,e.uAoInvResolution.value.set(1/this.frameSize.x,1/this.frameSize.y)}dispose(){this.depthTarget.dispose(),this.rawTarget.dispose(),this.blurTarget.dispose(),this.depthMaterial.dispose()}}function mx(n,e){const t=new ka(n,e);return t.type=vn,t.format=Jn,t.minFilter=mt,t.magFilter=mt,t.compareFunction=null,new Lt(n,e,{depthBuffer:!0,stencilBuffer:!1,depthTexture:t,format:Qn,type:yt})}const Vu=`
float farFieldFade(vec2 xz) {
  const float EDGE = ${La[La.length-1].extent.toFixed(1)};
  float r = max(abs(xz.x), abs(xz.y));
  return smoothstep(EDGE * 0.6, EDGE * 0.95, r);
}
`,gx=`
precision highp float;
in vec3 position;
in vec2 uv;
in vec3 normal;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;
uniform vec3 uCameraPos;
out vec2 vUv;
out vec3 vNormal;
out vec3 vWorld;
out float vViewDist;
void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vWorld = position;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vViewDist = length(position - uCameraPos);
  gl_Position = projectionMatrix * mv;
}
`,vx=`
precision highp float;
in vec2 vUv;
in vec3 vNormal;
in vec3 vWorld;
in float vViewDist;
out vec4 fragColor;

// Aerial perspective only: a shorter march than the sky uses. See the note in
// atmosphere.glsl.ts -- this is per-fragment with overdraw, and it is smooth.
#define ATMO_STEPS 7
#define ATMO_SUN_STEPS 2
${_i}
${Vu}
${Oa}
${Js}
${Ou}
${Qs}
${eo}

uniform sampler2D uDrape;
uniform vec3  uCameraPos;
uniform vec3  uAmbient;
uniform float uWetness;
uniform float uSnow;
uniform float uNight;
uniform float uSunSurface;
uniform float uDebug;
uniform vec3 uNightGlow;
uniform vec3 uMoonDir;
// Moon colour * intensity, in the same units as uSunColor * uSunIntensity, so
// it converts to surface irradiance through the same uSunSurface.
uniform vec3 uMoonLight;
// Baked ESA WorldCover coverage: R water, G built, B tree, A herbaceous.
// Two levels, for the same reason the terrain has rings: 10 m over the city,
// ~137 m out to the horizon.
uniform sampler2D uLandNear;
uniform sampler2D uLandFar;
uniform float uLandNearExtent;
uniform float uLandFarExtent;
uniform float uHasLand;
// Coverage grid over the baked road centrelines; see render/roadmask.ts.
uniform sampler2D uRoadMask;
uniform float uRoadMaskExtent;
uniform float uHasRoadMask;
// The live OSM vegetation grid (render channels as the landcover: R water,
// B canopy, A herbaceous), 20 m cells; see data/osmveg.ts. Unlike uLandNear
// it covers only what has streamed, so it only ever ADDS material near the
// camera and never replaces the drape-based water and far-field logic.
uniform sampler2D uVeg;
uniform float uVegExtent;
uniform float uHasVeg;
// Scene clock, seconds. Held at zero in shot mode, which is what keeps a
// screenshot of moving water reproducible.
uniform float uTime;
// Wind at 10 m, metres/second, as (east, south) -- the same convention and the
// same observation render/composite.ts drifts the clouds with. The waves take
// both their steepness and their drift from it.
uniform vec2 uWind;
// 1 restores the pre-wave water: terrain normal, constant ambient reflection,
// no glint. It exists so tools/verify-water.ts can run the OLD behaviour in the
// SAME binary and prove its assertions can fail.
uniform float uFlatWater;

float hash21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

/** Bilinear value noise on the world's own metre grid. */
float vnoise2(vec2 p) {
  vec2 i = floor(p);
  vec2 f = p - i;
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash21(i), hash21(i + vec2(1.0, 0.0)), f.x),
             mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), f.x), f.y);
}

/**
 * GGX specular on water, returned as the factor a light's surface irradiance is
 * multiplied by. Fresnel is INSIDE it (F0 = 0.02, water), so the caller must not
 * apply the sheet Fresnel to it again.
 *
 * Why a microfacet lobe and not the Blinn power this replaces: a glitter path
 * is a strip of surface whose facets happen to be tilted toward the sun, and
 * its WIDTH is set by how steep the chop is. GGX takes that steepness as its
 * roughness and gets both the width and the long tail right; a fixed exponent
 * has one width forever, so it draws the same small hard dot on a millpond and
 * in a gale.
 */
float waterGGX(vec3 nrm, vec3 v, vec3 l, float alpha) {
  float nl = dot(nrm, l);
  if (nl <= 0.0) return 0.0;
  vec3 h = normalize(v + l);
  float nh = max(dot(nrm, h), 0.0);
  float nv = max(dot(nrm, v), 1e-3);
  float a2 = alpha * alpha;
  float d = nh * nh * (a2 - 1.0) + 1.0;
  float D = a2 / (PI * d * d + 1e-8);
  float k = alpha * 0.5;
  float G = (nv / (nv * (1.0 - k) + k)) * (nl / (nl * (1.0 - k) + k));
  float F = 0.02 + 0.98 * pow(1.0 - max(dot(v, h), 0.0), 5.0);
  // Clamped, because D goes to a2 / (PI * a2 * a2) as alpha shrinks: a near
  // mirror puts thousands of units of radiance into one pixel and the bloom
  // pass spreads that firefly across a quarter of the frame.
  return min(D * G * F / (4.0 * nv), 40.0);
}

void main() {
  vec3 albedo = srgbToLinear(texture(uDrape, vUv).rgb);
  vec3 drape0 = albedo;
  vec3 n = normalize(vNormal);
  // The drape as a TONE, a mip or so down: at eye height its 0.5 m texels are
  // blotches, and only their low-frequency brightness is worth keeping.
  vec3 drapeTone = srgbToLinear(texture(uDrape, vUv, 1.5).rgb);

  // Landcover, sampled once and used by both the water term and the night
  // lighting. Near level inside its own extent, far level outside, crossfaded
  // over the last tenth of the near extent: a hard switch would draw the near
  // grid's 12 km square onto the ground as a visible edge, since the two levels
  // disagree by a texel or two along any coastline they share.
  vec2 lcUvN = vWorld.xz / (2.0 * uLandNearExtent) + 0.5;
  vec2 lcUvF = vWorld.xz / (2.0 * uLandFarExtent) + 0.5;
  // Chebyshev distance, not Euclidean: the near grid is a SQUARE, so this is
  // the distance to the edge that actually runs out of data.
  float lcR = max(abs(vWorld.x), abs(vWorld.z)) / max(1.0, uLandNearExtent);
  vec4 lc = mix(texture(uLandNear, lcUvN), texture(uLandFar, lcUvF),
                smoothstep(0.9, 1.0, lcR));
  float lcWater = lc.r;
  float lcBuilt = lc.g;
  // Roads, which the landcover cannot see. WorldCover is a 10 m posting and a
  // suburban street plus its verges is one texel of it, classified by whatever
  // dominates: in a leafy suburb that is lawn, so the measurement paints grass
  // over the tarmac and up to and over the kerb. The road pack knows where the
  // carriageway is to within a metre, so it vetoes the herbaceous channel.
  //
  // Herbaceous ONLY. Canopy still applies over a road (a street under trees is
  // shaded by them), water still applies (a road on a causeway does not drain
  // the bay), and built is what a road is.
  vec2 rmUv = vWorld.xz / (2.0 * uRoadMaskExtent) + 0.5;
  // The same guard the urban mask uses: clamp-to-edge would smear the border
  // texel, and roads reach the edge of the pack, so the border texel is not
  // zero and the smear would be a stripe of dead grass out to the horizon.
  float roadCov = texture(uRoadMask, rmUv).r * uHasRoadMask
                * step(0.0, rmUv.x) * step(rmUv.x, 1.0)
                * step(0.0, rmUv.y) * step(rmUv.y, 1.0);

  // Ground vegetation, from the two channels that exist to describe it. This
  // is what stops Central Park being green paint: the drape carries the right
  // large-scale pattern (mown against rough, the shadow of a stand of trees)
  // but at 0.47 m per pixel at its very best it is a blur with no material in
  // it, and every earlier attempt at "make the parks greener" was a uniform
  // tint that made a car park green too.
  //
  // It MODULATES the drape rather than replacing it. Luminance is kept, so a
  // lawn in the sun stays brighter than one in a photographed shadow, and only
  // the chroma and the fine structure come from here.
  vec2 vgUv = vWorld.xz / (2.0 * uVegExtent) + 0.5;
  vec4 vg = texture(uVeg, vgUv) * uHasVeg
          * step(0.0, vgUv.x) * step(vgUv.x, 1.0) * step(0.0, vgUv.y) * step(vgUv.y, 1.0);
  // Close in, a drape texel that is plainly GREEN is lawn whether or not
  // anyone mapped it: residential front gardens and verges are almost never
  // in OSM. Only near, where a wrong call is a few square metres of grass.
  float drapeLum = dot(drapeTone, vec3(0.299, 0.587, 0.114));
  // Blue is weighted up so teal (glass roofs and shadowed pavement in the
  // imagery) does not count: grass is yellow-green, g > r > b.
  float greenness = (drapeTone.g - max(drapeTone.r, drapeTone.b * 1.25)) / max(drapeLum, 0.02);
  float herbProxy = smoothstep(0.04, 0.16, greenness) * smoothstep(260.0, 60.0, vViewDist);
  float herb = max(max(lc.a * uHasLand, vg.a), herbProxy) * (1.0 - roadCov) * (1.0 - vg.r);
  float canopy = max(lc.b * uHasLand, vg.b * 0.6);
  float veg = clamp(herb + canopy, 0.0, 1.0);
  if (veg > 0.004) {
    // Two distance gates, and the tighter one matters more than it looks.
    //
    // A procedural noise has no mip chain, so every octave aliases the moment
    // its period drops under a pixel. The first version of this ran a 0.8 m
    // octave out to a kilometre and turned a Californian hillside into
    // high-contrast leopard print: from 200 m up, that period is two pixels.
    // So the fine octave only exists within a couple of hundred metres, where
    // it has pixels to be made of, and the coarse one carries everything else.
    float detail = smoothstep(2600.0, 700.0, vViewDist);
    float closeUp = smoothstep(300.0, 80.0, vViewDist);

    // Clumps at ~8 m, which is what you actually see of rough grass from the
    // air, and blade-cluster texture at ~1.6 m for the last few hundred feet.
    //
    // TWO octaves for the clump, not one, and the second is not a harmonic of
    // the first. A single value noise is built on a square lattice and at 12%
    // amplitude it reads as a regular field of DOTS, which is worse than the
    // blur it replaced; an incommensurate second octave breaks the lattice up
    // for one extra lookup.
    float clump = vnoise2(vWorld.xz * 0.13) * 0.60
                + vnoise2(vWorld.xz * 0.047 + vec2(17.3, 5.1)) * 0.40;
    float fine = closeUp > 0.0 ? vnoise2(vWorld.xz * 0.62) : 0.5;
    float tuft = mix(mix(0.5, clump, detail * 0.8), fine, closeUp * 0.35);

    // SATURATE the drape's own colour; do not replace it. The satellite carries
    // the season and this mask does not: WorldCover calls a Californian hill
    // "grass" in June when it is straw gold, and an earlier version of this
    // block that mixed toward chlorophyll painted the whole peninsula spring
    // green. So the measurement decides how much MATERIAL a texel has and the
    // drape decides what colour it is.
    float lum = dot(albedo, vec3(0.299, 0.587, 0.114));
    vec3 vegCol = vec3(lum) + (albedo - vec3(lum)) * (1.0 + 0.75 * veg);
    // Clump variation, mostly in value with a little hue wobble, so a lawn is
    // not one flat colour. This is the part the drape genuinely cannot supply:
    // at 0.47 m a pixel it has no structure below a couple of metres.
    vegCol *= 0.91 + 0.18 * tuft;
    vegCol.g *= 1.0 + (tuft - 0.5) * 0.10 * veg;
    albedo = mix(albedo, vegCol, veg * (0.45 + 0.40 * detail));

    // --- and WITHIN A FEW METRES, stop showing a photograph of grass ------
    //
    // Everything above modulates the drape, which is the right answer from the
    // air and the wrong one from a footpath. The imagery is 0.47 m a pixel at
    // its very best and several metres a pixel away from the start point, so
    // standing on a lawn you are looking at a photo with nothing in it: a
    // smear of green and orange blobs a metre across. No amount of saturating
    // that makes it grass, because the structure is not there to saturate.
    //
    // So inside grassNear the drape stops deciding the colour and starts
    // deciding only the TONE. Chlorophyll green, mixed by how much herbaceous
    // cover the measurement says is there, modulated by the drape's own
    // luminance so a mown strip stays lighter than the rough beside it and a
    // photographed shadow stays a shadow. That is the part of the imagery that
    // survives at this range; the hue is not.
    //
    // This is deliberately NOT what the block above does, and the distinction
    // is the whole reason both exist. Mixing toward chlorophyll at ALL
    // distances is what once painted the entire peninsula spring green, since
    // WorldCover calls a Californian hill "grass" in June when it is straw
    // gold. From two metres that failure cannot happen: you can see what is
    // under your feet, and it is either grass or it is not.
    // TWO TIERS, and they are not the same job.
    //
    // The HUE has to reach much further than the structure does. A lawn two
    // hundred metres off is still unmistakably green, but the 9 cm blade noise
    // that makes it read as grass at arm's length has no pixels to live in out
    // there and would alias into a shimmering rash. So the colour runs out to
    // a couple of hundred metres and the blades stop at seventy, which is what
    // removes the band of orange smear that a single gate leaves across the
    // middle of a park.
    float grassFar = smoothstep(260.0, 60.0, vViewDist);
    // And by the pixel footprint: at a walking eye height the ground a few
    // metres ahead is seen so obliquely that 9 cm blades are sub-pixel along
    // the view, and a distance gate alone left them aliasing into speckle.
    float gpx = max(fwidth(vWorld.x), fwidth(vWorld.z));
    float grassNear = smoothstep(70.0, 14.0, vViewDist) * (1.0 - smoothstep(0.04, 0.12, gpx));
    if (grassFar > 0.001 && herb > 0.05) {
      // Blades at ~9 cm and clumps at ~45 cm. Two scales, because a lawn read
      // from a metre away has both and one alone reads as noise. The blade
      // octave is faded out with the near gate rather than switched off, so it
      // dissolves instead of ending on a line.
      float blade = grassNear > 0.0 ? vnoise2(vWorld.xz * 11.0) : 0.5;
      float clod  = vnoise2(vWorld.xz * 2.2 + vec2(4.7, 9.1));
      float g = mix(clod, 0.62 * blade + 0.38 * clod, grassNear);

      // A real lawn is not one green. It runs from a yellow-green in the sun
      // to a blue-green in the thatch, and that spread is most of what makes
      // it read as living material rather than as paint.
      vec3 dry  = vec3(0.145, 0.132, 0.052);
      vec3 lush = vec3(0.048, 0.098, 0.032);
      vec3 grass = mix(dry, lush, smoothstep(0.25, 0.80, clod));
      grass *= 0.72 + 0.56 * g;

      // Keep the drape's tone: lum is its luminance before any of this, so a
      // path worn through the grass, a shadow and a bare patch all survive.
      float shade = clamp(lum / 0.16, 0.45, 1.7);
      grass *= shade;

      albedo = mix(albedo, grass, herb * min(0.88, 0.52 * grassFar + 0.36 * grassNear));

      // And it has to catch the light like grass, not like tarmac painted
      // green. The normal wobble is small on purpose: at 9 cm a strong one is
      // a field of hard dots the moment the period drops under a pixel.
      if (grassNear > 0.0) {
        const float GE = 0.06;
        float gx = vnoise2((vWorld.xz + vec2(GE, 0.0)) * 11.0)
                 - vnoise2((vWorld.xz - vec2(GE, 0.0)) * 11.0);
        float gz = vnoise2((vWorld.xz + vec2(0.0, GE)) * 11.0)
                 - vnoise2((vWorld.xz - vec2(0.0, GE)) * 11.0);
        n = normalize(n + vec3(-gx, 0.0, -gz) * 0.55 * herb * grassNear);
      }
    }

    // Under a canopy the floor is genuinely dark, and the dapple stands in for
    // the crown shadows the instanced trees stop drawing past their own fade.
    // The handoff between the two is what keeps a forest reading as a forest
    // all the way to the horizon instead of ending in a ring.
    albedo *= 1.0 - canopy * (0.26 + 0.24 * (1.0 - tuft) * detail);

    // A detail normal, so grass catches the sun rather than being a flat
    // surface with a green photograph on it. Central differences of the same
    // fine octave: four more lookups, on the same tight gate, for the same
    // reason. A bump whose period is under a pixel is not texture, it is noise
    // that swims when the camera moves.
    if (closeUp > 0.0 && herb > 0.03) {
      const float E = 0.55;
      float hx = vnoise2((vWorld.xz + vec2(E, 0.0)) * 0.62)
               - vnoise2((vWorld.xz - vec2(E, 0.0)) * 0.62);
      float hz = vnoise2((vWorld.xz + vec2(0.0, E)) * 0.62)
               - vnoise2((vWorld.xz - vec2(0.0, E)) * 0.62);
      // 0.12, and the number matters more than it looks. hx and hz are the
      // difference of two noise samples about a metre apart, so they reach
      // ~0.6; at 0.55 that tilts the ground by nearly twenty degrees and under
      // a low sun the hillside came out as a field of hard dark dots. This is
      // a few degrees of shading variation, which is what grass actually is.
      n = normalize(n + vec3(-hx, 0.0, -hz) * 0.12 * herb * closeUp);
    }
  }

  // --- AT EYE HEIGHT, the hard ground too ---------------------------------
  //
  // The grass block above covers lawn. Everything else a pedestrian stands
  // beside (pavement, car parks, plazas, bare dirt) was still the satellite
  // photograph, which from 1.7 m is a smear of half-metre blotches with no
  // material in it. So within ~140 m it becomes a material chosen from what
  // the drape's tone says it is (dark: asphalt; warm and bright: dirt; else
  // concrete; concrete near a road, where the verge is a footway), with the
  // drape keeping only the low-frequency brightness, so a painted bay, a
  // stain or a photographed shadow survives. Fine octaves fade by the pixel
  // footprint, never by distance alone, so nothing aliases into shimmer.
  float eye = smoothstep(140.0, 25.0, vViewDist) * (1.0 - vg.r) * (1.0 - lc.r * uHasLand);
  float hard = (1.0 - herb) * eye;
  if (hard > 0.004) {
    float px = max(fwidth(vWorld.x), fwidth(vWorld.z)) + 1e-5;
    float fineK = 1.0 - smoothstep(0.02, 0.10, px);
    float midK = 1.0 - smoothstep(0.12, 0.6, px);
    float agg = mix(0.5, vnoise2(vWorld.xz * 22.0), fineK) * 0.5
              + mix(0.5, vnoise2(vWorld.xz * 3.1 + vec2(7.3, 1.9)), midK) * 0.5;
    float stain = vnoise2(vWorld.xz * 0.35 + vec2(3.1, 8.7));

    float warm = (drapeTone.r - drapeTone.b) / max(drapeLum, 0.02);
    float dirtW = smoothstep(0.30, 0.65, warm) * smoothstep(0.025, 0.07, drapeLum);
    float asphW = smoothstep(0.075, 0.035, drapeLum) * (1.0 - dirtW);
    // The verge of a mapped road is footway: concrete, whatever the photo says.
    float kerbside = smoothstep(0.05, 0.3, roadCov) * (1.0 - smoothstep(0.9, 1.0, roadCov));
    asphW *= 1.0 - kerbside;
    dirtW *= 1.0 - kerbside;
    float concW = max(0.0, 1.0 - asphW - dirtW);

    vec3 asph = vec3(0.066, 0.065, 0.068) * (0.80 + 0.40 * agg);
    vec3 conc = vec3(0.170, 0.166, 0.156) * (0.86 + 0.28 * agg) * (0.92 + 0.12 * stain);
    // Dirt: pebbles are the bright end of the aggregate, not a separate layer.
    vec3 dirt = vec3(0.120, 0.092, 0.066) * (0.70 + 0.60 * agg * agg);
    vec3 mat = asph * asphW + conc * concW + dirt * dirtW;

    // The drape's tone, relative to what the chosen material averages to.
    float matLum = dot(asph * asphW + vec3(0.165) * concW + vec3(0.095) * dirtW, vec3(0.333));
    mat *= clamp(drapeLum / max(matLum, 1e-3), 0.55, 1.6);

    albedo = mix(albedo, mat, hard * 0.85);

    // A little relief so a low sun catches the grain.
    vec3 tX = normalize(dFdx(vWorld));
    vec3 tY = normalize(dFdy(vWorld));
    n = normalize(n - (tX * dFdx(agg) + tY * dFdy(agg)) * (0.012 + 0.03 * dirtW) / max(px, 1e-4) * hard);
  }

  // Snow settles on flat ground and slides off anything steep. The slope test
  // is what keeps a snowy city from looking like it was dipped in paint.
  float flat_ = smoothstep(0.55, 0.85, n.y);
  albedo = mix(albedo, vec3(0.92, 0.94, 0.98), uSnow * flat_);

  // Wet ground is darker and shinier. Both, or it reads as mud.
  albedo *= (1.0 - 0.42 * uWetness);

  // Night flattening applies to ALL ground, not just built-up ground.
  //
  // This used to live down in the skyglow block, multiplied by the urban mask,
  // which conflated two different things: light a city ADDS to its surroundings
  // is genuinely urban-only, but a dark-adapted eye taking almost no colour or
  // texture off a surface is a property of the eye and applies everywhere.
  //
  // The visible result was San Francisco at night with the Presidio and the
  // western hills glowing sand-tan, brighter than the lit city beside them:
  // unbuilt ground kept its full daytime drape albedo, and moonlight on a
  // bright hillside beat street lighting. It read as a desert.
  float nightGrey = dot(albedo, vec3(0.299, 0.587, 0.114));
  nightGrey = mix(0.30, nightGrey, 0.40);
  albedo = mix(albedo, mix(vec3(nightGrey), albedo, 0.12), uNight);

  float ndl = max(0.0, dot(n, uSunDir));
  vec3 sunT = sunTransmittance(atmoOrigin(max(0.0, vWorld.y)), uSunDir, uTurbidity);
  // uSunIntensity is the scale the ATMOSPHERE integral wants: it gets multiplied
  // by scattering coefficients of order 1e-5, so it is ~16 and that is correct
  // there. uSunSurface converts it to the irradiance a surface receives.
  //
  // It is not 1/PI. A true 1/PI puts direct at ~4.3, which saturates the tone
  // curve to flat white on its own -- measured, by rendering the direct term by
  // itself. The value below is what makes a mid-albedo surface land in the
  // middle of the curve while leaving inscatter at the level the same
  // atmosphere produces, so aerial perspective stays proportionate.
  // Cascaded shadow map, on the DIRECT beam only. The ambient sky term below is
  // deliberately untouched: ground in the shadow of a tower is still under the
  // whole sky dome, and zeroing that is what turns a shadow into a black hole.
  float sunVis = sunVisibility(vWorld, n, uSunDir, vViewDist);
  vec3 direct = uSunColor * uSunIntensity * uSunSurface * sunT * ndl * sunVis;

  // Moonlight. The one thing that makes a night flight over open country
  // something other than a black frame: the street-lamp mask only covers
  // built-up ground, so without this a coastline, a river or a ridge line
  // outside the city simply is not there.
  float mndl = max(0.0, dot(n, uMoonDir));
  vec3 moonBeam = uMoonLight * uSunSurface * mndl;
  vec3 beam = direct + moonBeam;

  // Sky irradiance, from the scene probe. This is the whole reason a valley
  // floor is darker than a ridge and, more than that, the reason a slope facing
  // the sunset is warm while the one behind it is blue: the nine coefficients
  // carry the sky's actual distribution, which the hemispherical constant this
  // replaces could not express at all -- it had no azimuth in it.
  // Screen-space sky occlusion, on the SKY term alone. The bent normal is
  // what makes it read as enclosure rather than as dirt: ground at the foot of
  // a tower gets the light from the strip of sky it can actually see instead
  // of a dimmed average of the whole dome. The direct beam above is untouched
  // -- multiplying sunlight by a screen-space term is what produces dark
  // smears that swim with the camera.
  vec3 ambient = occludedSkyIrradiance(n);

  // BOUNCE OFF THE WALLS. Most of the black canyon floor a user reported is
  // this shader, not the carriageway: the drape covers everything either side
  // of the tarmac and the kerbs, and it lost the sky to the same towers. The
  // term and its two weights live in render/groundbounce.ts, shared with
  // render/roads.ts and render/pavement.ts.
  //
  // The built-ness weight is the union the night lighting below already uses:
  // footprints where a .city pack has them, WorldCover's built class
  // everywhere else. That is what confines this to streets -- a ridge line and
  // a forest cast a shadow too, and neither is a sunlit wall.
  vec3 bounce = canyonBounce(uSunColor * uSunIntensity * uSunSurface * sunT, ambient, sunVis,
                             uSunDir, max(builtness(vWorld), lcBuilt * uHasLand));

  vec3 lit = albedo * (beam + ambient + bounce);

  // Specular sheen on wet ground, and always on water (which the drape shows
  // as dark blue; using luminance as a water proxy is crude but it is right
  // far more often than it is wrong, and it costs one texture read).
  // Water is identified by ELEVATION, not by colour.
  //
  // The obvious test -- "this pixel is dark, so it is water" -- does not work
  // on real satellite imagery: Esri's ocean is a mid blue-grey well above any
  // threshold that excludes dark roofs and shadowed streets, so the test never
  // fired and the sea rendered as flat lit ground. Elevation is unambiguous
  // here because the DEM decoder clamps everything below sea level to exactly
  // zero, which makes open water a plateau at 0 m. The soft ramp gives a
  // natural shoreline, since a 30 m DEM posting interpolates across the coast.
  // Water: elevation FIRST, appearance as a backstop.
  //
  // Elevation alone is not enough. The DEM carries small positive values in
  // patches out on open water, and where that lifted a patch above the
  // threshold it was shaded as LAND -- using the drape's near-black water
  // pixels, which lights to roughly a tenth of the Fresnel water all around it.
  // The result was dark angular holes lying in the middle of the Hudson.
  //
  // So a second test runs alongside: ground that is BOTH low and dark in the
  // imagery is water too. Neither test alone is reliable (open water is not
  // always exactly zero, and dark low ground is sometimes a car park), but a
  // patch has to fail both to be mistaken for land.
  //
  // ALL OF THAT IS NOW THE FALLBACK. Both tests are anchored to SEA LEVEL, so
  // any water above it is invisible to them: Lake Michigan's surface is at
  // 176 m, and Chicago's entire lakefront shaded as lit land. Where a .land
  // pack exists the measured landcover REPLACES the heuristic outright rather
  // than joining it, because a union can only ever add water, and half the
  // gain here is removing the heuristic's false positives (a dark car park, a
  // shadowed street) that no amount of extra evidence could take back.
  // The drape as sampled, not the material the eye-height block put over it:
  // this test was tuned on the photograph, and asphalt is dark on purpose.
  float lumA = dot(drape0, vec3(0.299, 0.587, 0.114));
  float byElevation = smoothstep(3.5, 0.4, vWorld.y);
  float byAppearance = smoothstep(0.26, 0.07, lumA) * smoothstep(7.0, 1.0, vWorld.y);
  // A mapped road and its verge are land, however low and dark: the
  // heuristic put waves on the shadowed pavement beside a waterfront street.
  float heur = clamp(max(byElevation, byAppearance), 0.0, 1.0) * (1.0 - roadCov);
  float water = mix(heur, lcWater, uHasLand);
  vec3 v = normalize(uCameraPos - vWorld);

  // --- THE SURFACE OF THE WATER -------------------------------------------
  //
  // The Fresnel term below needs a normal that is not the terrain's. Over water
  // the heightfield is a plateau, so every pixel of a river shares ONE normal
  // and therefore one Fresnel factor: standing on the kerb beside the Chicago
  // river that factor is ~1 across the whole surface, and the river renders as
  // a single blown-out slab of paper. Water reads as water because its normal
  // varies from facet to facet, and nothing else in this shader supplies that.
  //
  // Two octaves of the value noise this file already carries, scrolling
  // downwind. A gradient noise would be a little smoother; it would also be a
  // second noise function in a shader that already has one the grass trusts.
  vec3 wn = n;
  float waveAlpha = 0.0;
  if (water > 0.01 && uFlatWater < 0.5) {
    // How hard it is blowing, as a multiplier on both the steepness and the
    // drift. uWind is the observed 10 m wind, so 4 m/s is an ordinary day; the
    // clamp stops a dead calm being a perfect mirror (there is always a swell
    // too long to resolve here) and a gale being corrugated iron.
    float wind = clamp(length(uWind) / 6.0, 0.30, 1.70);

    // THE PIXEL FOOTPRINT IN METRES, and this is the whole anti-aliasing story.
    //
    // The drape is ~10 m a texel and water fills the lower half of a grazing
    // frame, so a 2 m wave is sub-pixel a few hundred metres out. A sub-pixel
    // bump is not detail: it is a fresh random number per pixel that changes
    // every time the camera moves, which is a sheet of sparkling static.
    // fwidth answers "how much world does this pixel cover" directly, and it
    // answers it for GRAZING angles too -- which distance alone cannot, because
    // a shallow view stretches the footprint along the view ray long before the
    // range gets large. That is exactly the frame this defect was reported in.
    float px = max(fwidth(vWorld.x), fwidth(vWorld.z)) + 1e-4;

    // Wavelengths in metres and the peak slope each carries at an ordinary
    // wind. Chop on a river and in a harbour is metre-scale; anything longer is
    // swell the drape's own shading already stands in for.
    const float LAM_A = 2.6;
    const float LAM_B = 0.95;
    const float SLOPE_A = 0.30;
    const float SLOPE_B = 0.22;

    // An octave lives while its wavelength is comfortably over the footprint,
    // and is faded out rather than switched off: a hard cutoff draws a ring on
    // the water at whatever range it fires.
    float keepA = smoothstep(LAM_A * 0.85, LAM_A * 0.30, px);
    float keepB = smoothstep(LAM_B * 0.85, LAM_B * 0.30, px);

    vec2 drift = uWind * uTime * 0.35;
    vec2 pa = (vWorld.xz - drift) / LAM_A;
    vec2 pb = (vWorld.xz - drift * 1.6 + vec2(31.7, 11.3)) / LAM_B;

    // Central differences a fifth of a wavelength apart. The step is in NOISE
    // CELLS rather than metres, so both octaves are differenced over the same
    // fraction of their own period and neither is measured off its own scale.
    const float E = 0.2;
    vec2 ga = vec2(vnoise2(pa + vec2(E, 0.0)) - vnoise2(pa - vec2(E, 0.0)),
                   vnoise2(pa + vec2(0.0, E)) - vnoise2(pa - vec2(0.0, E)));
    vec2 gb = vec2(vnoise2(pb + vec2(E, 0.0)) - vnoise2(pb - vec2(E, 0.0)),
                   vnoise2(pb + vec2(0.0, E)) - vnoise2(pb - vec2(0.0, E)));
    vec2 slope = ga * (SLOPE_A * wind * keepA) + gb * (SLOPE_B * wind * keepB);

    // Water is LEVEL. The terrain normal under it is whatever the heightfield's
    // noise made of a flat plateau, so the waves are hung off vertical and only
    // blend back to the ground's own normal where the water mask fades out at a
    // shoreline.
    vec3 flatN = normalize(mix(n, vec3(0.0, 1.0, 0.0), water));
    wn = normalize(flatN + vec3(-slope.x, 0.0, -slope.y));

    // WHERE THE FADED-OUT DETAIL GOES, and it does not go in the bin.
    //
    // Dropping an octave because it is sub-pixel turns distant water into
    // polished glass: a mirror-flat surface has one tiny highlight and is dark
    // everywhere else, so the far half of the frame would go dead exactly where
    // real water is at its brightest. The slope VARIANCE the octave was
    // carrying is added to the GGX roughness instead. That is the same energy
    // spread over a wider lobe: one soft bright band instead of ten thousand
    // aliasing points, which is what the eye sees at that range anyway.
    //
    // 0.06 is the variance of a central difference of this value noise, whose
    // rms is about a quarter of its peak. 0.0016 is the floor: alpha 0.04, the
    // long swell nothing here resolves.
    float lost = 0.06 * wind * wind
               * (SLOPE_A * SLOPE_A * (1.0 - keepA * keepA)
                + SLOPE_B * SLOPE_B * (1.0 - keepB * keepB));
    waveAlpha = clamp(sqrt(0.0016 + 2.0 * lost), 0.04, 0.42);
  }

  // Wet ground gets the Blinn lobe below; open water gets its own GGX on the
  // wave normal and must not be lit twice. Under the flat-water probe the old
  // shared lobe comes back, because that is the behaviour being measured.
  float gloss = max(uWetness, water * uFlatWater);
  if (gloss > 0.01) {
    float shine = mix(48.0, 320.0, water);
    vec3 hv = normalize(v + uSunDir);
    float spec = pow(max(0.0, dot(n, hv)), shine);
    lit += uSunColor * uSunIntensity * uSunSurface * sunT * spec * gloss * 1.6 * sunVis;
    // The moon's own glitter path. Water at night is otherwise the darkest
    // thing in the frame, and the moonglade is the only thing that says which
    // part of that darkness is sea.
    vec3 hm = normalize(v + uMoonDir);
    float specM = pow(max(0.0, dot(n, hm)), shine);
    lit += uMoonLight * uSunSurface * specM * gloss * 1.6;
  }

  // Grass at a grazing angle goes pale and silvery: the blades are near
  // vertical, so a low view direction sees their sides and the whole sward
  // scatters forward. One power of a dot product, and it is the difference
  // between a lawn and a green plane.
  if (herb > 0.02) {
    float sheen = pow(1.0 - clamp(dot(n, v), 0.0, 1.0), 4.0);
    lit += ambient * albedo * sheen * herb * 0.85;
  }

  // Open water is not a dark diffuse surface. Its colour is almost entirely
  // FRESNEL: looking straight down it is nearly black (you see the 0.02
  // reflectance and a little subsurface blue-green), and at a grazing angle it
  // becomes a mirror of the sky. That angular swing is what makes water read as
  // water, and no amount of tinting a diffuse albedo reproduces it.
  if (water > 0.01) {
    float f = pow(1.0 - clamp(dot(v, wn), 0.0, 1.0), 5.0);
    float fres = 0.02 + 0.98 * f;
    vec3 deep = vec3(0.004, 0.016, 0.030) * (beam + ambient);

    vec3 skyRefl;
    vec3 glint = vec3(0.0);
    if (uFlatWater > 0.5) {
      skyRefl = uAmbient * 1.7
              + uSunColor * uSunIntensity * uSunSurface * sunT * 0.10
              + uMoonLight * uSunSurface * 0.10;
    } else {
      // THE SKY ALONG THE REFLECTED RAY, from the same integral the dome and
      // the aerial perspective already use. A constant ambient cannot express
      // what a mirror actually shows: the horizon-to-zenith gradient, the warm
      // half of the sky at sunset, the bright band low down that is most of why
      // a river is legible at all.
      //
      // It is a SECOND atmosphere march and it is the most expensive thing in
      // this shader, so it runs on water pixels only, at the 7 steps the aerial
      // perspective already settled on. Measured through tools/shots.ts against
      // the same frame with the water flat: chicago-river-kerb 12.83 -> 13.31
      // ms mean at 39.5% water, sydney-harbour 8.25 -> 9.54 ms at 33.3% water,
      // the wave block included. The harbour is the worst case in the pose set
      // and it costs 1.3 ms.
      vec3 r = reflect(-v, wn);
      // A steep facet can tip the reflected ray under the horizon, where the
      // march hits the ground and returns near-black. That is a hole in the
      // water, not a reflection: what real water shows there is the back of the
      // next wave, which is lit by the sky just above the horizon.
      r = normalize(vec3(r.x, max(r.y, 0.004), r.z));
      vec3 refTrans;
      skyRefl = atmosphere(atmoOrigin(max(0.0, vWorld.y)), r, 1.0e7, refTrans);
      // The integral is driven by the sun and goes to zero after dark, so
      // without these two terms water becomes the one black hole in a moonlit
      // frame -- which is the failure the moonglade above exists to prevent.
      skyRefl += uMoonLight * uSunSurface * 0.10 + uAmbient * uNight * 0.35;

      // Sun glint. This is the term that says "water" when the sun is low: a
      // glitter path is thousands of facets each catching the disc, and the
      // roughness the wave slope hands the lobe is what sets how far up the
      // river it runs. Fresnel is inside waterGGX, so it is not applied here.
      glint = uSunColor * uSunIntensity * uSunSurface * sunT * sunVis
                * waterGGX(wn, v, uSunDir, waveAlpha)
            + uMoonLight * uSunSurface * waterGGX(wn, v, uMoonDir, waveAlpha);
    }
    lit = mix(lit, mix(deep, skyRefl, fres) + glint, water);
  }

  // City lights at night, keyed to how built-up the drape looks. Grey, bright
  // and low-saturation pixels are roads and roofs; vegetation and water are not.
  if (uNight > 0.01) {
    // Street lighting, gated by the URBAN MASK -- a coverage grid built from the
    // actual building footprints, not inferred from the daylight drape. The
    // drape cannot answer "is this built up": it is bright and desaturated over
    // beach, bare hill and runway alike, so every threshold either lit the whole
    // map or none of it.
    float urban = builtness(vWorld);

    // Union with the landcover's built class. Only a handful of cities have a
    // .city pack, and the rest were getting emptyUrbanMask() and rendering
    // pitch black after dark. WorldCover's built class is coarser than a
    // footprint grid (it cannot tell a tower from a bungalow) but it covers
    // everywhere, so the union is "footprints where we have them, measured
    // land use everywhere else".
    urban = max(urban, lcBuilt * uHasLand);

    // Night from the air is DISCRETE LIGHTS with black between them, not a lit
    // surface. Speckled on a ~26 m lattice with only a fraction of cells lit, so
    // the peak reads as a lamp while the average stays near black. Far away the
    // speckle converges to its own mean, or it would alias into crawling noise.
    // Lamps are POINTS inside their cell, not the whole cell.
    //
    // Filling the cell made a lattice of glowing rectangles -- from the air it
    // read as luminous paving rather than street lighting. A soft dot at a
    // jittered position within each chosen cell reads as a light, and the
    // jitter stops the grid itself from being visible.
    const float LAMP_SPACING = 30.0;
    const float LAMP_FRACTION = 0.22;
    // How tight the dot is. exp(-k d^2) integrates to pi/k over the cell for
    // any k this large, which is what keeps the far-field mean honest below.
    //
    // It used to be 18, and 18 is a blob 12 m across: from the air the city
    // read as a field of soft orange smudges rather than as lights. A lamp is
    // a POINT with a hot core -- the peak is deliberately over 1.0 so the tone
    // curve clips it to white, because that is what a light source does and it
    // is the difference between a lamp and a glowing patch of ground.
    const float LAMP_SHARP = 55.0;
    const float LAMP_PEAK = 3.05;   // energy-matched to the old soft kernel
    const float LAMP_MEAN = LAMP_FRACTION * LAMP_PEAK * (3.14159265 / LAMP_SHARP);

    float detail = smoothstep(4500.0, 900.0, vViewDist);
    vec2 g = vWorld.xz * (1.0 / LAMP_SPACING);
    vec2 gi = floor(g);
    vec2 gf = fract(g);
    float pick = hash21(gi);
    float dot_ = 0.0;
    // Sodium against mercury and LED. A city is not one colour of light, and
    // a field of identically warm dots is most of what made this look
    // synthetic. Skewed warm, because most street lighting still is.
    vec3 tint = vec3(1.0, 0.78, 0.50);
    if (pick < LAMP_FRACTION) {
      vec2 jit = vec2(hash21(gi + 11.1), hash21(gi + 27.3));
      float d = length(gf - jit);
      // Per-lamp brightness, mean 1.0 so the far-field average is unchanged.
      float bright = 0.55 + 0.9 * hash21(gi + 41.7);
      dot_ = LAMP_PEAK * bright * exp(-d * d * LAMP_SHARP);
      float warmth = hash21(gi + 63.1);
      tint = mix(vec3(0.80, 0.88, 1.0), vec3(1.0, 0.70, 0.32),
                 smoothstep(0.05, 0.55, warmth));
    }
    float lamps = mix(LAMP_MEAN, dot_, detail);
    // Far away the individual tints have averaged out too, so the mean colour
    // is what the far field must use.
    vec3 lampColour = mix(vec3(1.0, 0.78, 0.50), tint, detail);

    // No street lamps on water.
    //
    // The urban mask is a blurred coverage grid, so it bleeds past a shoreline
    // by design (street lighting really does spill past the last building), and
    // a pier or a bridge approach carries footprints right up to the edge. The
    // result was rows of lamps standing out on the bay and down the middle of
    // rivers. The landcover water channel is a measurement rather than an
    // inference, so it is the right thing to veto with.
    float dryLand = 1.0 - clamp(water, 0.0, 1.0);
    lit += lampColour * lamps * urban * dryLand * uNight * 1.15;

    // Skyglow on the built-up ground only, and nearly monochrome: at this light
    // level the eye takes almost no colour off a surface, and carrying the
    // drape's daytime hue through is what made the city look like a dimmed
    // photograph rather than a dark place with lights in it.
    // Skyglow, which a city genuinely does add to its own surroundings, so
    // this one IS gated on the urban mask. The flattening it used to carry has
    // moved up to the albedo, where it belongs.
    lit += albedo * uNightGlow * urban * dryLand * 0.85;
  }

  // Aerial perspective: the same integral the sky uses, over the distance to
  // this fragment. This is what unifies ground and sky into one atmosphere.
  vec3 ro = atmoOrigin(uCamAltitude);
  vec3 rd = normalize(vWorld - uCameraPos);
  vec3 trans;
  vec3 inscatter = atmosphere(ro, rd, vViewDist, trans);
  vec3 col = lit * trans + inscatter;

  // THE EDGE OF THE WORLD. The outermost ring stops at a square 70 km out, and
  // past it the sky dome draws the same ray as open air. From a skyline orbit
  // that boundary sits a fraction of a degree under the horizon, and the two
  // sides disagreed: lit ground under 70 km of air on one, air alone on the
  // other, which read as a hard dark strip (or at night a black one) lying
  // along the horizon. Over the outer part of the ring the ground hands over
  // to exactly what the dome would draw there, so by the edge there is
  // nothing left to see. The cloud pass stretches this fragment's depth by
  // the same fade (farFieldFade in composite.ts), so the deck closes over it
  // as it does over the sky beyond.
  float farFade = farFieldFade(vWorld.xz);
  if (farFade > 0.0) {
    vec3 skyT;
    col = mix(col, openSky(ro, rd, skyT), farFade);
  }

  // Term isolation. Chasing a too-bright image by arithmetic is slow and easy
  // to get wrong; showing one term at a time answers it in one look.
  //   1 albedo       2 direct        3 ambient      4 inscatter
  //   5 lit          6 transmittance 7 water        8 elevation/200
  //   9 landcover water          10 landcover built
  //  11 landcover false-colour: blue water, red built, green tree, white
  //     herbaceous. Black means no pack, which is the one thing the
  //     single-channel views cannot distinguish from "none of this class".
  //  12 landcover tree           13 landcover herbaceous (after the road veto)
  //  14 road coverage: white on a carriageway, ramping off across the verge.
  //     Black everywhere for a city with no road pack, which is most of them.
  if (uDebug > 0.5) {
    if (uDebug < 1.5)       col = albedo;
    else if (uDebug < 2.5)  col = beam;
    else if (uDebug < 3.5)  col = ambient;
    else if (uDebug < 4.5)  col = inscatter;
    else if (uDebug < 5.5)  col = lit;
    else if (uDebug < 6.5)  col = trans;
    else if (uDebug < 7.5)  col = vec3(water);
    else if (uDebug < 8.5)  col = vec3(vWorld.y / 200.0);
    else if (uDebug < 9.5)  col = vec3(lcWater * uHasLand);
    else if (uDebug < 10.5) col = vec3(lcBuilt * uHasLand);
    else if (uDebug < 11.5) col = (vec3(0.1, 0.3, 1.0) * lc.r + vec3(1.0, 0.15, 0.1) * lc.g
              + vec3(0.1, 0.8, 0.2) * lc.b + vec3(1.0) * lc.a) * uHasLand;
    else if (uDebug < 12.5) col = vec3(canopy);
    else if (uDebug < 13.5) col = vec3(herb);
    else col = vec3(roadCov);
  }

  // The ground/sun mask; see groundDebugColor in render/groundbounce.ts. Water
  // is excluded by hand: a shadowed river is not a street floor, and the street
  // assertions must not average one in.
  vec3 dbg;
  if (water < 0.5 && groundDebugColor(sunVis, GROUND_DRAPE, dbg)) col = dbg;

  fragColor = vec4(col, 1.0);
}
`;function wx(n){return{...n,...to(),...zu(),uDrape:{value:null},uSH:{value:ia([.28,.36,.5],.55,.45)},uCameraPos:{value:new N},uAmbient:{value:new Ee(.28,.36,.5)},uWetness:{value:0},uSnow:{value:0},uNight:{value:0},uNightGlow:{value:new Ee(0,0,0)},uMoonDir:{value:new N(0,-1,0)},uMoonLight:{value:new Ee(0,0,0)},uLandNear:{value:null},uLandFar:{value:null},uLandNearExtent:{value:1},uLandFarExtent:{value:1},uHasLand:{value:0},uTime:{value:0},uWind:{value:new Oe},uFlatWater:{value:0},uRoadMask:{value:null},uRoadMaskExtent:{value:1},uHasRoadMask:{value:0},uVeg:{value:null},uVegExtent:{value:1},uHasVeg:{value:0},uExposure:{value:1},uSunSurface:{value:.105},uDebug:{value:0},uSunDir:{value:new N(0,1,0)},uSunColor:{value:new Ee(1,1,1)},uSunIntensity:{value:22},uMieG:{value:.76},uTurbidity:{value:1},uCamAltitude:{value:100},uMultiScatter:{value:.055}}}function qc(n,e,t,i,a,s,o){const r=n.segments,l=n.extent*2/r,c=(r+1)*(r+1),h=[];for(let u=0;u<=r;u++)h.push(0*(r+1)+u);for(let u=1;u<=r;u++)h.push(u*(r+1)+r);for(let u=r-1;u>=0;u--)h.push(r*(r+1)+u);for(let u=r-1;u>=1;u--)h.push(u*(r+1)+0);const d=new Float32Array((c+h.length)*3),p=new Float32Array((c+h.length)*2);for(let u=0;u<=r;u++)for(let w=0;w<=r;w++){const x=t-n.extent+w*l,_=i-n.extent+u*l,y=a.toLatLon(x,_),S=u*(r+1)+w;d[S*3]=x,d[S*3+1]=s(y.lat,y.lon),d[S*3+2]=_,p[S*2]=(y.lon-o.west)/(o.east-o.west),p[S*2+1]=(o.north-y.lat)/(o.north-o.south)}const f=400;for(let u=0;u<h.length;u++){const w=h[u],x=c+u;d[x*3]=d[w*3],d[x*3+1]=d[w*3+1]-f,d[x*3+2]=d[w*3+2],p[x*2]=p[w*2],p[x*2+1]=p[w*2+1]}const g={ring:n,inner:0,cx:t,cz:i,positions:d,gridCount:c,skirtRing:h},v=new At;v.setAttribute("position",new dt(d,3)),v.setIndex(Tl(g,null)),v.computeVertexNormals();const m=v.getAttribute("normal").array;return v.dispose(),{ring:n,inner:e,cx:t,cz:i,positions:d,uvs:p,normals:m,gridCount:c,skirtRing:h}}function Tl(n,e){const t=n.ring.segments,i=n.ring.extent*2/t,a=[],s=r=>{const l=n.positions[r*3],c=n.positions[r*3+2];if(n.inner>0){const h=n.inner-i;if(Math.abs(l-n.cx)<h&&Math.abs(c-n.cz)<h)return!0}if(e){const h=e.extent-i;if(Math.abs(l-e.x)<h&&Math.abs(c-e.z)<h)return!0}return!1};for(let r=0;r<t;r++)for(let l=0;l<t;l++){const c=r*(t+1)+l,h=r*(t+1)+l+1,d=(r+1)*(t+1)+l,p=(r+1)*(t+1)+l+1;s(c)||s(h)||s(d)||s(p)||a.push(c,d,h,h,d,p)}const o=n.skirtRing;for(let r=0;r<o.length-1;r++)a.push(o[r],n.gridCount+r,o[r+1]),a.push(o[r+1],n.gridCount+r,n.gridCount+r+1);return a}function Yc(n,e){const t=new At;return t.setAttribute("position",new dt(n.positions,3)),t.setAttribute("uv",new dt(n.uvs,2)),t.setAttribute("normal",new dt(n.normals,3)),t.setIndex(Tl(n,e)),t.computeBoundingSphere(),t}class xx{group=new jn;uniforms=[];heightAt;origin;sample;grids=[];meshes=[];textures=[];detail;constructor(e,t,i,a,s=La){this.origin=e;const o=(r,l)=>{for(const h of t)if(h.contains(r,l))return h.sample(r,l);const c=t[t.length-1];return c?c.sample(r,l):0};this.sample=o,this.heightAt=(r,l)=>{const c=e.toLatLon(r,l);return o(c.lat,c.lon)},this.detail={x:0,z:0,extent:s[0].extent};for(let r=0;r<s.length;r++){const l=s[r],c=r>=2?s[r-1].extent:0,h=i[Math.min(r,i.length-1)],d=qc(l,c,0,0,e,o,h.bbox),p=Yc(d,r===0?null:this.detail),f=jc(h),g=wx(a);g.uDrape.value=f,this.uniforms.push(g);const v=new nn({vertexShader:gx,fragmentShader:vx,uniforms:g,glslVersion:zt}),m=new _t(p,v);m.frustumCulled=!1,m.renderOrder=r,l.extent<=6e3&&m.layers.enable(za),this.group.add(m),this.grids.push(d),this.meshes.push(m),this.textures.push(f)}}get detailCentre(){return this.detail}recentreDetail(e,t,i){const a=this.detail,s={x:e,z:t,extent:this.grids[0].ring.extent},o=qc(this.grids[0].ring,0,e,t,this.origin,this.sample,i.bbox),r=Yc(o,null),l=jc(i),c=this.meshes[0].geometry,h=this.textures[0];this.grids[0]=o,this.meshes[0].geometry=r,this.textures[0]=l,this.uniforms[0].uDrape.value=l,this.detail=s,c.dispose(),h.dispose();for(let d=1;d<this.grids.length;d++)!this.affected(d,a)&&!this.affected(d,s)||(this.meshes[d].geometry.setIndex(Tl(this.grids[d],s)),this.meshes[d].geometry.computeBoundingSphere())}dispose(){for(const e of this.meshes)e.geometry.dispose(),e.material.dispose();for(const e of this.textures)e.dispose()}affected(e,t){const i=this.grids[e],a=i.ring.extent+t.extent;if(Math.abs(t.x)>=a||Math.abs(t.z)>=a)return!1;const s=i.inner-t.extent;return!(s>0&&Math.abs(t.x)<s&&Math.abs(t.z)<s)}}function jc(n){const e=new xp(n.canvas);return e.colorSpace=Pn,e.wrapS=Tt,e.wrapT=Tt,e.anisotropy=16,e.generateMipmaps=!0,e.minFilter=In,e.needsUpdate=!0,e}function Wu(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Vo=new Int8Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function _x(n){const e=new Uint8Array(512);for(let t=0;t<256;t++)e[t]=t;for(let t=255;t>0;t--){const i=n()*(t+1)|0,a=e[t];e[t]=e[i],e[i]=a}return e.copyWithin(256,0,256),e}function Wo(n){return n*n*n*(n*(n*6-15)+10)}function Xo(n,e,t,i,a){const s=Math.floor(n),o=Math.floor(e),r=Math.floor(t),l=n-s,c=e-o,h=t-r,d=(s%i+i)%i,p=(o%i+i)%i,f=(r%i+i)%i,g=(d+1)%i,v=(p+1)%i,m=(f+1)%i,u=Wo(l),w=Wo(c),x=Wo(h),_=(j,ee,oe,Se,Ve,Ne)=>{const Le=a[a[a[j]+ee]+oe]%12*3;return Vo[Le]*Se+Vo[Le+1]*Ve+Vo[Le+2]*Ne},y=_(d,p,f,l,c,h),S=_(g,p,f,l-1,c,h),A=_(d,v,f,l,c-1,h),C=_(g,v,f,l-1,c-1,h),M=_(d,p,m,l,c,h-1),b=_(g,p,m,l-1,c,h-1),T=_(d,v,m,l,c-1,h-1),P=_(g,v,m,l-1,c-1,h-1),I=y+u*(S-y),F=A+u*(C-A),k=M+u*(b-M),H=T+u*(P-T),V=I+w*(F-I),z=k+w*(H-k);return V+x*(z-V)}function Ki(n,e){const t=new Float32Array(n*n*n*3);for(let i=0;i<t.length;i++)t[i]=e();return t}function $o(n,e,t,i,a){const s=Math.floor(n),o=Math.floor(e),r=Math.floor(t);let l=4;for(let c=-1;c<=1;c++){const h=r+c,d=(h%i+i)%i;for(let p=-1;p<=1;p++){const f=o+p,g=(f%i+i)%i;for(let v=-1;v<=1;v++){const m=s+v,u=(m%i+i)%i,w=((d*i+g)*i+u)*3,x=m+a[w]-n,_=f+a[w+1]-e,y=h+a[w+2]-t,S=x*x+_*_+y*y;S<l&&(l=S)}}}return 1-Math.min(1,Math.sqrt(l))}function Xu(n,e,t,i,a,s,o){return[$o(n*i,e*i,t*i,i,a),$o(n*i*2,e*i*2,t*i*2,i*2,s),$o(n*i*4,e*i*4,t*i*4,i*4,o)]}function $u(n,e){const t=new gu(e,n,n,n);return t.format=wt,t.type=yt,t.minFilter=et,t.magFilter=et,t.wrapS=ji,t.wrapT=ji,t.wrapR=ji,t.needsUpdate=!0,t}const yx=64,bx=32;function Mx(){const n=Wu(6221072),e=_x(n),t=4,i=Ki(t,n),a=Ki(t*2,n),s=Ki(t*4,n),o=yx,r=new Uint8Array(o*o*o*4),l=1/o;for(let c=0;c<o;c++){const h=c*l;for(let d=0;d<o;d++){const p=d*l;for(let f=0;f<o;f++){const g=f*l;let v=0;v+=.5*Xo(g*4,p*4,h*4,4,e),v+=.25*Xo(g*8,p*8,h*8,8,e),v+=.125*Xo(g*16,p*16,h*16,16,e);const m=Math.max(0,Math.min(1,v/(.875*1.4)+.5)),[u,w,x]=Xu(g,p,h,t,i,a,s),_=((c*o+d)*o+f)*4;r[_]=m*255|0,r[_+1]=u*255|0,r[_+2]=w*255|0,r[_+3]=x*255|0}}}return $u(o,r)}function Sx(){const n=Wu(13859345),e=2,t=Ki(e,n),i=Ki(e*2,n),a=Ki(e*4,n),s=bx,o=new Uint8Array(s*s*s*4),r=1/s;for(let l=0;l<s;l++)for(let c=0;c<s;c++)for(let h=0;h<s;h++){const[d,p,f]=Xu(h*r,c*r,l*r,e,t,i,a),g=((l*s+c)*s+h)*4;o[g]=d*255|0,o[g+1]=p*255|0,o[g+2]=f*255|0,o[g+3]=255}return $u(s,o)}function el(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}const Ex=(()=>{let n=0;const e=1e3;for(let t=0;t<e;t++){const i=(t+.5)/e;n+=el(0,.2,i)*el(1,.6,i)}return n/e})(),$i=20;function Tx(n){const e=n.image.data,t=n.image.width,i=t*t*t,a=3,s=[],o=[];for(let c=0;c<i;c+=a){const h=c*4,d=e[h]/255,f=-(1-(e[h+1]/255*.625+e[h+2]/255*.25+e[h+3]/255*.125));s.push(Math.min(1,Math.max(0,(d-f)/(1-f)))),o.push(e[c*7919%i*4]/255)}const r=new Float32Array($i+1),l=new Float32Array($i+1);for(let c=1;c<=$i;c++){const h=c/$i;let d=0,p=0;for(let f=0;f<s.length;f++){const g=Math.min(1,Math.max(0,h*(.8+.4*o[f])));d+=Math.min(1,Math.max(0,(s[f]-(1-g))/Math.max(g,1e-6))),p+=el(1-h,1-.35*h,s[f])}r[c]=d/s.length,l[c]=p/s.length}return{deck:r,cirrus:l}}function qo(n,e){const t=Math.min(1,Math.max(0,e))*$i,i=Math.min($i-1,Math.floor(t)),a=t-i;return n[i]*(1-a)+n[i+1]*a}const Yo=`
precision highp float;
out vec2 vUv;
out vec3 vRayDir;
uniform mat4 uInvProj;
uniform mat4 uInvView;
void main() {
  vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2) * 2.0 - 1.0;
  vUv = p * 0.5 + 0.5;
  vec4 view = uInvProj * vec4(p, 1.0, 1.0);
  // Unnormalised, as in the sky pass: normalising per-vertex and interpolating
  // skews the ray across a triangle this large.
  vRayDir = mat3(uInvView) * (view.xyz / view.w);
  gl_Position = vec4(p, 1.0, 1.0);
}
`,Ax=`
precision highp float;
precision highp sampler3D;
in vec2 vUv;
in vec3 vRayDir;
out vec4 fragColor;

${_i}
${Vu}
${Oa}

uniform sampler2D uDepth;
uniform float uSunSurfaceCloud;
uniform mat4  uInvProj2;
uniform vec3  uCameraPos;
uniform vec3  uAmbient;
uniform float uNear;
uniform float uFar;
uniform float uTime;

// Per-deck: x = coverage 0..1, y = base (m AMSL), z = top (m AMSL)
uniform vec3 uLow;
uniform vec3 uMid;
uniform float uHighCover;
uniform float uHighBase;
uniform vec2  uWind;        // metres/second, (east, south)
uniform float uPrecip;      // mm/h, darkens and thickens the low deck
// Expected shape density of each deck (before the vertical profile) and the
// expected cirrus veil at the current cover, measured off the shape volume
// (noise3d.ts meanDensityTables).
uniform float uLowMean;
uniform float uMidMean;
uniform float uHighMean;
// Angle one half-res cloud pixel subtends, radians.
uniform float uPixelAngle;

// Baked, tileable, and sampled with hardware trilinear filtering. See
// noise3d.ts for what is in each channel and why it is baked rather than
// evaluated per sample here.
uniform sampler3D uShape;   // rgba: perlin, then worley at 1x / 2x / 4x
uniform sampler3D uDetail;  // rgb: worley at three frequencies

float remap(float v, float lo, float hi, float nlo, float nhi) {
  return nlo + (v - lo) / (hi - lo) * (nhi - nlo);
}

/**
 * The Perlin-Worley combine, one texture fetch.
 *
 * Perlin alone is a field of smooth blobs and reads as fog rather than as
 * cloud. The Worley fbm enters as the LOW END of a remap rather than as a
 * multiplier, which keeps Perlin's large-scale wandering while giving the
 * inside of it the packed-billow silhouette a cumulus actually has.
 */
float perlinWorley(vec3 p) {
  vec4 t = texture(uShape, p);
  float wfbm = t.g * 0.625 + t.b * 0.25 + t.a * 0.125;
  return clamp(remap(t.r, -(1.0 - wfbm), 1.0, 0.0, 1.0), 0.0, 1.0);
}

/**
 * Density of a cloud slab at a world point.
 *
 * Coverage enters as a THRESHOLD on the noise, not as a multiplier. That
 * distinction is what makes 30% coverage look like scattered cumulus with blue
 * between them rather than a uniform grey haze at 30% opacity -- which is what
 * a multiplier gives, and it looks nothing like a real sky.
 */
float slabDensity(vec3 p, float cover, float base, float top, float scale) {
  if (cover <= 0.01) return 0.0;
  float thickness = max(top - base, 1.0);

  // The WEATHER field: one low-frequency tap at a fixed depth, so it varies
  // over kilometres of ground and not at all with height. It is what stops a
  // full overcast being a plane. The reported coverage is the average over the
  // sky, so letting it vary about that average is not inventing weather, it is
  // declining to pretend the deck is uniform.
  float w = texture(uShape, vec3(p.xz * scale * 0.25, 0.37)).r;

  float localCover = clamp(cover * (0.8 + 0.4 * w), 0.0, 1.0);
  // The base and the top are surfaces, not altitudes. A real stratocumulus
  // base sags and lifts by a good fraction of the deck's own depth, and the top
  // moves further than the base because that is where the convection is.
  float localBase = base + 0.15 * thickness * (w - 0.5);
  float localTop  = top  + 0.25 * thickness * (w - 0.5);

  float h = (p.y - localBase) / max(localTop - localBase, 1.0);
  if (h < 0.0 || h > 1.0) return 0.0;

  // Round the top, flatten the bottom: cumulus grow upward from a flat base.
  // Both ends are a FRACTION of the deck's thickness. As a fixed 120 m the ramp
  // was a hard event at one altitude, and the march crossed it at a different
  // step for every screen row, which is one of the things the terracing was.
  float profile = smoothstep(0.0, 0.2, h) * smoothstep(1.0, 0.6, h);

  vec3 q = p;
  q.xz += uWind * uTime;
  float shape = perlinWorley(q * scale);

  // The threshold is a REMAP rather than a smoothstep, which is what makes it
  // survive full coverage. smoothstep(0, 0.14, n) is 1 almost everywhere, so a
  // 100% deck came out as a constant: a mathematically flat plane of plaster.
  // The remap hands back the noise itself at localCover 1, so an overcast still
  // has thick and thin parts for the light to find.
  float d = clamp(remap(shape, 1.0 - localCover, 1.0, 0.0, 1.0), 0.0, 1.0) * profile;

  // Erosion, at the edges only, where it is the entire difference between a
  // cloud and a blob. The interior is opaque and nothing about it is visible,
  // so it does not pay for the second fetch. The detail rides the same wind as
  // the shape, or it would crawl across a moving cloud.
  if (d > 0.0 && d < 0.3) {
    vec3 t = texture(uDetail, q * scale * 6.0).rgb;
    float detail = t.r * 0.625 + t.g * 0.25 + t.b * 0.125;
    d = clamp(remap(d, detail * 0.35, 1.0, 0.0, 1.0), 0.0, 1.0);
  }
  return d;
}

/**
 * Where the ray crosses a shell at height h, as (near, far). (-1, -1) misses.
 *
 * A SHELL AND NOT A PLANE, and that is the whole of the horizon fix. The
 * density field below is a flat slab between two altitudes, which is right
 * overhead and wrong at the horizon: a plane above the camera is only ever
 * reached by a ray going UP, so a deck drawn against a flat slab stops dead at
 * eye level. Every ray below that gets no cloud, and what shows through is the
 * bright clear-sky haze -- a hard cream stripe lying along the horizon under a
 * total overcast, with the deck starting abruptly above it.
 *
 * On a round planet that band is exactly where the deck is thickest. The
 * horizon at 709 m is 0.85 degrees BELOW level, and every ray between there and
 * level climbs away from the surface and meets a deck 1500 m up somewhere
 * between 130 and 500 km out. The band that had no cloud in it at all is the
 * band that should be solid.
 *
 * R_GROUND comes from the atmosphere chunk, so the clouds sit on the same
 * planet the sky is integrated over rather than on one of their own.
 */
vec2 shellHits(vec3 rd, float h) {
  float r = R_GROUND + h;
  float ro = R_GROUND + uCameraPos.y;
  float b = ro * rd.y;
  float c = ro * ro - r * r;
  float disc = b * b - c;
  if (disc < 0.0) return vec2(-1.0);
  float sq = sqrt(disc);
  return vec2(-b - sq, -b + sq);
}

const float PROFILE_MEAN = ${Ex.toFixed(5)};

float slabProfile(float y, float base, float top) {
  float h = (y - base) / max(top - base, 1.0);
  if (h < 0.0 || h > 1.0) return 0.0;
  return smoothstep(0.0, 0.2, h) * smoothstep(1.0, 0.6, h);
}

/**
 * What cloudDensity averages to at this height, weighted the same way. The
 * march hands over to it once its step outgrows the noise (see the LOD note
 * in the march), and the closure past the march uses its slab average.
 */
float meanDensity(vec3 p) {
  float d = 0.0;
  if (uLow.x > 0.06) d += uLowMean * slabProfile(p.y, uLow.y, uLow.z) * (1.0 + uPrecip * 0.6);
  if (uMid.x > 0.06) d += uMidMean * slabProfile(p.y, uMid.y, uMid.z) * 0.75;
  return d;
}

float cloudDensity(vec3 p) {
  float d = slabDensity(p, uLow.x, uLow.y, uLow.z, 0.00055) * (1.0 + uPrecip * 0.6);
  d += slabDensity(p, uMid.x, uMid.y, uMid.z, 0.00030) * 0.75;
  return d;
}

void main() {
  vec3 rd = normalize(vRayDir);
  // Accumulated in-scatter, and how much of the world survives through it.
  vec3 scattered = vec3(0.0);
  vec3 through = vec3(1.0);

  // Scene distance from the depth buffer, so clouds occlude and are occluded.
  //
  // One exact full-res texel, (2x, 2y), and not a filtered tap at the half-res
  // centre (which sits on a four-way texel corner and resolves to whichever the
  // GPU rounds to). The present pass reads the same texel back to decide which
  // cloud texels belong to which surface, so the two have to agree on it.
  float d = texelFetch(uDepth, ivec2(gl_FragCoord.xy) * 2, 0).r;
  float farF = 0.0;
  float geoDist = 1.0e9;
  // Cloud state at geoDist, for the far-field blend below.
  vec3 scatGeo = vec3(0.0);
  vec3 thrGeo = vec3(1.0);
  bool snapped = false;
  // Opacity-weighted distance of everything the cloud put in front of the
  // world, for the aerial perspective at the end.
  float tcSum = 0.0;
  float wSum = 0.0;
  float sceneDist = 1.0e9;
  if (d < 1.0) {
    vec4 clip = vec4(vUv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0);
    vec4 view = uInvProj2 * clip;
    sceneDist = length(view.xyz / view.w);
    // Ground in the outer ring is fading into open sky (see FAR_FIELD_GLSL).
    // Its pixel is then part ground and part sky, and each part wants its own
    // cloud: the march runs the WHOLE ray and snapshots its state where the
    // ground is, and the two are blended by the same fade at the end. Just
    // stretching the depth instead left the faded ground short of a deck the
    // ray only meets 100 km further on, so the open-sky colour it had faded to
    // showed through as a bright line along the horizon.
    farF = farFieldFade((uCameraPos + rd * sceneDist).xz);
    if (farF > 0.0) {
      geoDist = sceneDist;
      sceneDist = 1.0e9;
    }
  }

  float lowCover = uLow.x;
  float midCover = uMid.x;

  // Below this there is nothing to see and the march is pure waste. The old
  // 0.01 gate meant a 3% sky paid the full 32-step price for a few wisps.
  if (lowCover > 0.06 || midCover > 0.06) {
    // Only the decks that are actually THERE. A mid deck at zero coverage used
    // to widen these bounds anyway, which stretched the step size derived from
    // them: a 1200 m low deck was being sampled as if it were 4 km thick.
    float slabLo = 1.0e9;
    float slabHi = -1.0e9;
    if (lowCover > 0.06) { slabLo = min(slabLo, uLow.y); slabHi = max(slabHi, uLow.z); }
    if (midCover > 0.06) { slabLo = min(slabLo, uMid.y); slabHi = max(slabHi, uMid.z); }

    // WHERE THE DECK IS, and separately, HOW FAR OF IT IS WORTH MARCHING.
    //
    // Keeping those apart is the point. The world is a flat plane, so a deck
    // seen from underneath runs to the horizon and the crossing of a grazing
    // ray is hundreds of kilometres long; marching that is neither affordable
    // nor useful. But CLIPPING the crossing, which is what this did, throws the
    // deck away rather than approximating it: a ray whose entry is past the
    // limit failed the t1 > t0 test and drew no cloud at all.
    //
    // That is a hard-edged bug and not a soft one. The deck base is 785 m over
    // the camera in the case this was found in, so the entry passes 120 km at
    // an elevation of 0.37 degrees, and the geometric horizon at that altitude
    // is 0.85 degrees BELOW level: a 1.2 degree band of sky along the whole
    // horizon, about 17 pixels of a 720-line frame, in which a 48% overcast
    // simply was not drawn and the bright clear-sky haze behind it came
    // through. It reads as a hard cream stripe lying on the horizon, with the
    // barely-sampled edge of the march above it as speckle.
    //
    // sEnter/sExit are the real crossing. t0/t1 are what gets marched. The
    // remainder between them is closed analytically below.
    //
    // The crossing is the part of the ray inside the OUTER shell and outside
    // the inner one. Written as that difference rather than as two cases,
    // because the camera can be under the deck, in it, or over it, and the
    // arithmetic is the same either way. Where a downward ray leaves the deck
    // and re-enters it further on, only the first span is taken: the second is
    // on the far side of the planet.
    vec2 hitLo = shellHits(rd, slabLo);
    vec2 hitHi = shellHits(rd, slabHi);
    float sEnter = 0.0;
    float sExit = 0.0;
    if (hitHi.y > 0.0) {
      float aHi = max(0.0, hitHi.x);
      float bHi = hitHi.y;
      if (hitLo.y > 0.0) {
        float aLo = max(0.0, hitLo.x);
        // Starting inside the inner shell: the deck begins where it is left.
        if (aLo <= aHi) { sEnter = max(aHi, hitLo.y); sExit = bHi; }
        else            { sEnter = aHi; sExit = min(bHi, aLo); }
      } else {
        sEnter = aHi;
        sExit = bHi;
      }
    }
    sExit = min(sExit, sceneDist);
    sEnter = min(sEnter, sExit);

    float t0 = sEnter;
    float t1 = min(sExit, 120000.0);
    // How far along the ray the march actually got. Without a march it never
    // left the entry, which is what makes the closure below cover the whole
    // crossing for a grazing ray rather than none of it.
    float marchedTo = t0;
    // The march's level of detail where it stopped; see the closure's ramp.
    float lodEnd = 0.0;

    if (t1 > t0) {
      // 64 steps now that a density sample is one filtered texture fetch
      // instead of two dozen hashes. The step BUDGET stopped being what limits
      // the march; the step SIZE is.
      const int STEPS = 64;

      // The step size is a function of distance and of nothing else. This is
      // the whole terracing fix.
      //
      // Normalising the steps to span t0..t1 made the step size a function of
      // the pixel's ELEVATION, because the slab crossing t1-t0 is
      // thickness/rd.y. The integral has discrete events in it (which step
      // lands in the base ramp, which step drives transmittance under the
      // early-out), and as elevation changed each event moved one step earlier
      // or later. One band per event, spread across the sky as iso-elevation
      // arcs. A dither jitters WITHIN a step and cannot hide a seam that is a
      // whole step wide.
      //
      // Tying the step to distance instead keeps a sample's screen size roughly
      // constant, which is the right thing to hold steady, and two neighbouring
      // pixels now march the same way whatever their elevation.
      float dt0 = (slabHi - slabLo) / 24.0;
      float dt = dt0 * max(1.0, t0 / 6000.0);
      // Dither the start offset, or the fixed step size shows as concentric
      // banding. A per-pixel HASH decorrelates but is spatially incoherent, and
      // this pass runs at HALF resolution, so the upsample magnified every
      // speck into a 2x2 block: television static.
      //
      // A 2x2 ordered matrix, not the 4x4 this used to use, and the size is the
      // whole point. The present pass reconstructs the march by averaging a
      // 3x3 half-res neighbourhood with tent weights [1 2 1; 2 4 2; 1 2 1]/16,
      // and over a period-2 pattern those weights land 4/16 on EVERY phase --
      // an exact average of all four offsets, so the dither cancels completely
      // rather than being smeared. A 4x4 pattern has sixteen phases and no
      // small kernel can average them evenly, which is why it survived the
      // upsample as the visible cross-hatch it was drawing across the sky.
      // STRATIFIED, not merely ordered. The 2x2 matrix says which QUARTER of
      // the step this pixel samples, and interleaved gradient noise picks a
      // position inside that quarter. The ordered part is what the tent
      // cancels exactly; the noise is what turns the leftover into fine grain
      // instead of the concentric rings a purely ordered pattern leaves, which
      // is what four fixed offsets over a kilometre-long step looked like.
      ivec2 px = ivec2(gl_FragCoord.xy) & 1;
      const float BAYER[4] = float[4](0.0, 2.0, 3.0, 1.0);
      float ign = fract(52.9829189 *
        fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
      float jitter = (BAYER[px.y * 2 + px.x] + ign) * 0.25;
      float t = t0 + dt * jitter;

      float cosSun = dot(rd, uSunDir);
      // Two lobes: a strong forward one for the silver lining looking toward
      // the sun, and a weak backward one so the far side is not dead flat.
      float ph = mix(miePhase(cosSun, 0.80), miePhase(cosSun, -0.30), 0.35);

      // Empty-space skipping. A broken deck is mostly gaps, and integrating a
      // gap at the resolution the cloud needs is the entire cost of a sky that
      // has almost nothing in it. While the last sample was empty the march
      // strides three steps at a time; the step that finds cloud is thrown
      // away and the march backs up two steps to enter the edge at full
      // resolution, or the leading edge of every cloud is quantised to the
      // coarse stride and reads as a staircase.
      bool coarse = true;
      int empties = 0;

      for (int i = 0; i < STEPS; i++) {
        if (t > t1) break;
        if (!snapped && t > geoDist) { scatGeo = scattered; thrGeo = through; snapped = true; }
        if (through.g < 0.02) break;

        dt = dt0 * max(1.0, t / 6000.0);
        vec3 p = uCameraPos + rd * t;
        // Fade the deck out toward the march limit by thinning it, NOT by
        // dimming it. Dimming the light while leaving the opacity alone turned
        // distant cloud BLACK and drew a hard dark line across the sky where
        // the march ended -- the deck was still fully opaque, just unlit.
        // LEVEL OF DETAIL. Past a few tens of kilometres the step is longer
        // than the clouds (a mid-deck feature is ~200-800 m; the step at
        // 100 km is ~1 km), so single taps land in a cloud or a gap by chance
        // and a distant deck broke up into rows of dashes along the horizon.
        // Once the step outgrows the noise the tap hands over to the deck's
        // measured average, which is also exactly what the closure past the
        // march uses, so the march and the closure now meet without a seam.
        float lod = smoothstep(400.0, 1200.0, dt);
        lodEnd = lod;
        float dens = (lod < 0.999 ? mix(cloudDensity(p), meanDensity(p), lod) : meanDensity(p))
                   * smoothstep(400000.0, 200000.0, t);

        if (dens <= 0.001) {
          empties++;
          // Back to striding once the cloud that was being resolved is behind
          // us. Immediately would oscillate: the backed-up sample is empty by
          // construction, and going coarse on it would step straight back into
          // the same edge.
          if (empties > 4) coarse = true;
          t += coarse ? 3.0 * dt : dt;
          continue;
        }
        empties = 0;
        if (coarse) {
          coarse = false;
          t = max(t0, t - 2.0 * dt);
          continue;
        }

        // Light march toward the sun: how deep is this sample buried?
        //
        // The two extinction coefficients below are not free. A sunlit cloud
        // top is the BRIGHTEST thing in a daytime frame -- brighter than lit
        // ground, because cloud albedo is ~0.9 against a city's ~0.2. Setting
        // the light-march extinction too high buries the tops in their own
        // shadow and the whole deck turns dirty grey, which is what happened.
        // These values put a cloud top near transmittance 0.8 and a deep base
        // near 0.3, which is the range that reads as a cloud.
        const float LIGHT_STEP = 120.0;
        const float SIGMA_LIGHT = 0.004;
        const float SIGMA_VIEW = 0.012;

        // Three steps that GROW. What matters near the sample is resolved,
        // and the reach extends to 570 m instead of 360 m for the same three
        // fetches, which is the difference between knowing a sample is under
        // a metre of cloud and knowing it is under half a deck.
        // At full LOD the sample IS the average, and it is lit the way the
        // closure lights the average (sun transmittance 0.45, no edge), so
        // the light march is skipped rather than paid for and thrown away.
        float sunT = 0.45;
        if (lod < 0.999) {
          float shadow = 0.0;
          float lt = 0.0;
          for (int j = 0; j < 3; j++) {
            float ls = LIGHT_STEP * pow(1.5, float(j));
            shadow += cloudDensity(p + uSunDir * (lt + ls * 0.5)) * ls;
            lt += ls;
          }
          sunT = mix(exp(-shadow * SIGMA_LIGHT * (4.0 / 3.0)), 0.45, lod);
        }

        // Powder: the dark cores of a cloud seen against the light. Without
        // it clouds look like cotton wool with no interior.
        float powder = mix(1.0 - exp(-dens * 8.0), 1.0, lod);

        float sigma = dens * SIGMA_VIEW;
        vec3 stepT = exp(-vec3(sigma) * dt);

        vec3 sunColour = uSunColor * uSunIntensity * uSunSurfaceCloud;
        vec3 lum = sunColour * (ph * 4.0 + 0.5) * sunT * mix(0.35, 1.0, powder)
                 + uAmbient * 0.9;

        // Rain shafts read as darker cloud bases.
        lum *= 1.0 - 0.35 * uPrecip * smoothstep(uLow.z, uLow.y, p.y);

        scattered += through * lum * (1.0 - stepT.g);
        tcSum += through.g * (1.0 - stepT.g) * t;
        wSum += through.g * (1.0 - stepT.g);
        through *= stepT;
        t += dt;
      }
      marchedTo = t;

    }

    // --- THE HORIZON, WHICH IS NOT MARCHED --------------------------------
    //
    // Everything the march did not reach: past its 120 km limit, past its step
    // budget, or the whole crossing when the entry was already past the limit
    // and the loop never ran. Under a deck that runs to the horizon this is
    // most of the sky near it, and leaving it empty is what drew the stripe.
    //
    // CLOSED WITH THE DECK'S OWN AVERAGE, not with a measurement, and that is
    // the honest form of the answer rather than a cheap one. Along a path of
    // tens of kilometres the noise field averages to its expectation and cannot
    // do anything else: the threshold remap returns about cover/2 over a shape
    // that is roughly uniform, and the base/top profile integrates to about
    // 0.72 of the slab, so the deck's mean density is near 0.36 * cover
    // whatever the weather field happens to be doing at any one point. Using an
    // expectation also means neighbouring pixels get the same answer, which is
    // what takes the speckle out of the band rather than merely darkening it.
    //
    // RAMPED IN BY HOW MUCH PATH IS LEFT, because the claim only holds over a
    // long one. A ray forty degrees up leaves a couple of hundred metres of
    // crossing unmarched, and over that distance a broken deck is its own
    // structure and not its average -- veiling it would put a flat haze across
    // a sky with holes in it. Twenty kilometres is several times the size of
    // anything in the noise, so by there the average is all that is left.
    float restStart = max(marchedTo, sEnter);
    float rest = sExit - restStart;
    if (through.g > 0.02 && rest > 0.0) {
      const float SIGMA_VIEW_REST = 0.012;
      // Expected density of each deck, weighted the same way cloudDensity
      // weights them. MEASURED, not assumed (see meanDensityTables): the old
      // 0.36 * cover drew a thin deck the march shows as wisps as a solid grey
      // band along the horizon, starting hard at the march limit.
      float meanDens = 0.0;
      if (lowCover > 0.06) meanDens += uLowMean * PROFILE_MEAN * (1.0 + uPrecip * 0.6);
      if (midCover > 0.06) meanDens += uMidMean * PROFILE_MEAN * 0.75;

      float cosSunH = dot(rd, uSunDir);
      float phH = mix(miePhase(cosSunH, 0.80), miePhase(cosSunH, -0.30), 0.35);
      // Seen edge-on through kilometres of deck, a sample is deep in it: the
      // 0.45 stands for the sun transmittance the light march would find there,
      // and the powder term is 1 because nothing that far in is an edge.
      vec3 lumH = uSunColor * uSunIntensity * uSunSurfaceCloud * (phH * 4.0 + 0.5) * 0.45
                + uAmbient * 0.9;

      // ...unless the march had already handed over to the average where it
      // stopped (lodEnd): then the remainder is more of the same average and
      // is closed in full however short it is. Ramping it by length there
      // left grazing rays that skim the deck base for tens of kilometres
      // partly clear, and the clear sky behind showed as a bright broken line
      // just above the ground on the horizon.
      float w = max(smoothstep(2000.0, 20000.0, rest), lodEnd);
      float od = meanDens * SIGMA_VIEW_REST * rest * w;
      if (!snapped && geoDist < sExit) {
        // The ground sits inside the closed-over stretch: its share of it.
        vec3 partT = exp(-vec3(od * max(0.0, geoDist - restStart) / rest));
        scatGeo = scattered + through * lumH * (1.0 - partT.g);
        thrGeo = through * partT;
        snapped = true;
      }
      vec3 restT = exp(-vec3(od));
      // Where in the remainder the light comes from: about one optical depth
      // in, or half way through when it is thin.
      float depthIn = min(rest * 0.5, rest / max(od, 1e-4));
      tcSum += through.g * (1.0 - restT.g) * (restStart + depthIn);
      wSum += through.g * (1.0 - restT.g);
      scattered += through * lumH * (1.0 - restT.g);
      through *= restT;
    }
  }

  if (farF > 0.0) {
    // Nothing between the ground and the end of the ray: the ground saw all of it.
    if (!snapped) { scatGeo = scattered; thrGeo = through; }
    scattered = mix(scatGeo, scattered, farF);
    through = mix(thrGeo, through, farF);
  }

  // --- High cirrus -------------------------------------------------------
  // Drawn analytically as a veil on the ray's intersection with one altitude,
  // not marched. Cirrus is a two-dimensional smear of ice; giving it volume
  // costs steps and makes it look like a low deck in the wrong place.
  if (uHighCover > 0.01 && rd.y > 0.02) {
    float th = (uHighBase - uCameraPos.y) / rd.y;
    if (th > 0.0 && th < sceneDist) {
      vec3 p = uCameraPos + rd * th;
      vec2 q = (p.xz + uWind * uTime * 2.5) * 0.00016;
      // Stretch the noise along one axis: cirrus is combed out by the wind. One
      // fixed slice of the shape volume, because cirrus has no depth to sample.
      float n = perlinWorley(vec3(q.x * 0.35, q.y * 2.4, 0.37));
      float veil = smoothstep(1.0 - uHighCover, 1.0 - uHighCover * 0.35, n);
      // Toward the horizon one pixel spans kilometres of cirrus, far more than
      // the noise's finest octave, and a single tap per pixel aliases into
      // the row of broken dashes that sat just above the horizon at night.
      // Past that footprint the only honest value is the veil's average, so
      // the tap hands over to it. Footprint in noise texels along the combed
      // axis (the 2.4x one, 64 texels per period): grazing rays stretch it by
      // 1 / rd.y. The finest octave has a 4-texel period, the coarsest 16.
      float footprint = th * uPixelAngle / max(rd.y, 1e-3) * 0.00016 * 2.4 * 64.0;
      veil = mix(veil, uHighMean, smoothstep(1.0, 8.0, footprint));
      veil *= smoothstep(0.02, 0.25, rd.y);
      vec3 lit = uSunColor * uSunIntensity * uSunSurfaceCloud * 2.2 + uAmbient * 1.2;
      float a = veil * 0.55 * uHighCover;
      tcSum += through.g * a * th;
      wSum += through.g * a;
      scattered = scattered * (1.0 - a) + lit * a;
      through *= (1.0 - a);
    }
  }

  // AERIAL PERSPECTIVE FOR THE CLOUD. The present pass does
  // world * through + scattered, and the world behind a sky pixel is the sky
  // dome, whose colour already holds the air along the WHOLE ray. Hiding it
  // by through also hid the air in front of the cloud, and the cloud's own
  // light arrived without crossing any air at all: a deck 150 km out at the
  // horizon was as dark and as grey as one overhead, a flat wall under a
  // bright horizon glow. Here the cloud's light is dimmed by the air between
  // it and the eye, and the air in front of it is put back, both over the
  // opacity-weighted distance of the cloud, with the same atmosphere the sky
  // and the ground use. Eight steps: the integral is smooth and this runs on
  // every clouded pixel.
  if (wSum > 1e-3) {
    float tc = tcSum / wSum;
    vec3 airT;
    vec3 front = atmosphereSteps(atmoOrigin(uCamAltitude), rd, tc, airT, 8);
    scattered = scattered * airT + (1.0 - through) * front;
  }

  // rgb: light added by cloud. a: fraction of the world still visible.
  fragColor = vec4(scattered, through.g);
}
`,qu=`
uniform float uNight;
float bloomThreshold() { return mix(1.15, 0.085, uNight); }
float bloomStrength()  { return mix(0.10, 0.55, uNight); }
`,Rx=`
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uScene;
uniform float uExposure;
${qu}

void main() {
  // Thresholded in EXPOSED linear, not in raw radiance. Exposure moves by
  // nearly three stops between noon and midnight, so a threshold in raw
  // radiance would mean something different at every hour of the day.
  vec3 c = texture(uScene, vUv).rgb * uExposure;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  float t = bloomThreshold();
  // Soft knee: a hard cut makes the bloom pop on as a surface crosses the
  // threshold, which on a facade of windows is a flicker.
  float w = smoothstep(t, t * 2.0, l);
  fragColor = vec4(c * w, 1.0);
}
`,Cx=`
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uSource;
uniform vec2 uDirection;   // (1,0) then (0,1), in texels

void main() {
  // Nine-tap Gaussian as five bilinear fetches: the offsets sit between texels
  // so the hardware filter does half the summing.
  vec2 texel = uDirection / vec2(textureSize(uSource, 0));
  vec3 c = texture(uSource, vUv).rgb * 0.2270270270;
  c += (texture(uSource, vUv + texel * 1.3846153846).rgb
      + texture(uSource, vUv - texel * 1.3846153846).rgb) * 0.3162162162;
  c += (texture(uSource, vUv + texel * 3.2307692308).rgb
      + texture(uSource, vUv - texel * 3.2307692308).rgb) * 0.0702702703;
  fragColor = vec4(c, 1.0);
}
`,Dx=`
precision highp float;
in vec2 vUv;
out vec4 fragColor;

${Oa}

uniform sampler2D uScene;
uniform sampler2D uCloud;
uniform sampler2D uBloom;
uniform sampler2D uDepth;
uniform float uNear;
uniform float uFar;
${qu}

/** View distance of a hardware depth value; the sky (1.0) is infinitely far. */
float linearDepth(float d) {
  if (d >= 1.0) return 1.0e9;
  float z = d * 2.0 - 1.0;
  return 2.0 * uNear * uFar / (uFar + uNear - z * (uFar - uNear));
}

/** Weight on half-res texel k of the tent below, for a pixel at c (texel units). */
float tentWeight(float c, float k) {
  return 0.5 * (max(0.0, 1.0 - abs(c - 0.5 - k)) + max(0.0, 1.0 - abs(c + 0.5 - k)));
}

void main() {
  vec3 scene = texture(uScene, vUv).rgb;
  // Upsample of the half-resolution cloud buffer, and it is a TENT rather than
  // the single bilinear tap it used to be. Four taps half a texel off the
  // centre sum to weights [1 2 1; 2 4 2; 1 2 1]/16 over a 3x3 half-res
  // neighbourhood, which puts exactly 4/16 on each of the march's four dither
  // phases: the ray-start jitter averages out to nothing instead of arriving
  // on screen as a cross-hatch. Clouds are soft and low-frequency, so the two
  // full-res pixels of extra blur cost nothing that was really there.
  vec2 texel = 1.0 / vec2(textureSize(uCloud, 0));
  vec4 cloud = 0.25 * (
      texture(uCloud, vUv + vec2(-0.5, -0.5) * texel)
    + texture(uCloud, vUv + vec2( 0.5, -0.5) * texel)
    + texture(uCloud, vUv + vec2(-0.5,  0.5) * texel)
    + texture(uCloud, vUv + vec2( 0.5,  0.5) * texel));

  // DEPTH-AWARE AT SILHOUETTES. The tent above mixes cloud texels that were
  // marched against different surfaces: at a tower's edge against an overcast,
  // half its taps saw the tower (little cloud in front, world visible) and half
  // saw the sky (a whole deck, world hidden). Averaged, the tower's edge pixels
  // got the deck's light added and the sky's edge pixels let the clear sky
  // behind the deck through: the bright rim that outlined every building and
  // the horizon ridge. Where the texels' depths disagree with this pixel's, the
  // same tent is reweighted by depth, so a pixel only takes cloud from texels
  // marched against its own surface. Everywhere else (nearly every pixel) the
  // four-tap path above stands, dither cancellation included.
  //
  // COVERAGE. That alone leaves a one-pixel line, because MSAA has already
  // blended the edge pixel's colour: P = a * tower + (1 - a) * sky, where the
  // sky part is the CLEAR sky the deck is supposed to hide. The sky pass writes
  // alpha 0 and geometry alpha 1, so the resolve hands this pass a = coverage.
  // The sky part is taken from a neighbouring pure-sky pixel (the sky is smooth
  // at pixel scale), unmixed out of P, and each part gets its own cloud.
  vec4 sceneA = texture(uScene, vUv);
  float cover = sceneA.a;
  bool partial = cover > 0.002 && cover < 0.998;
  ivec2 hs = textureSize(uCloud, 0);
  vec2 c = vUv * vec2(hs) - 0.5;
  ivec2 b = ivec2(floor(c));
  float z0 = linearDepth(texelFetch(uDepth, ivec2(gl_FragCoord.xy), 0).r);
  bool edge = partial;
  // Every texel the tent gives weight: three per axis, starting one below the
  // floor when the pixel sits in the lower half of its texel. Checking only
  // the nearest 2x2 missed the third, and a sky pixel one pixel off a tower
  // took a sliver of the tower's cloud through it: a hairline beside the rim.
  ivec2 lo = b - ivec2(step(c - vec2(b), vec2(0.5)) );
  for (int j = 0; j <= 2; j++) {
    for (int i = 0; i <= 2; i++) {
      ivec2 t = clamp(lo + ivec2(i, j), ivec2(0), hs - 1);
      float zi = linearDepth(texelFetch(uDepth, t * 2, 0).r);
      if (abs(zi - z0) > 0.03 * min(zi, z0)) edge = true;
    }
  }
  if (edge) {
    // Two reweighted tents: one over texels marched against geometry near this
    // pixel's own depth (or, for a sky-depth pixel, the nearest geometry in
    // reach), one over texels marched against open sky.
    float zg = z0;
    if (zg >= 1.0e8) {
      for (int j = -1; j <= 2; j++)
        for (int i = -1; i <= 2; i++) {
          float zi = linearDepth(texelFetch(uDepth, clamp(b + ivec2(i, j), ivec2(0), hs - 1) * 2, 0).r);
          zg = min(zg, zi);
        }
    }
    vec4 geoAcc = vec4(0.0), skyAcc = vec4(0.0);
    float geoW = 0.0, skyW = 0.0;
    for (int j = -1; j <= 2; j++) {
      for (int i = -1; i <= 2; i++) {
        ivec2 k = b + ivec2(i, j);
        float wt = tentWeight(c.x, float(k.x)) * tentWeight(c.y, float(k.y));
        if (wt <= 0.0) continue;
        ivec2 t = clamp(k, ivec2(0), hs - 1);
        vec4 ci = texelFetch(uCloud, t, 0);
        float zi = linearDepth(texelFetch(uDepth, t * 2, 0).r);
        if (zi >= 1.0e8) {
          skyAcc += ci * wt;
          skyW += wt;
        } else if (zg < 1.0e8) {
          // Floored so a pixel whose own surface has no texel in reach (a
          // one-pixel sliver) still takes the closest rather than nothing.
          float w = wt * max(exp(-abs(zi - zg) / zg * 30.0), 1e-4);
          geoAcc += ci * w;
          geoW += w;
        }
      }
    }
    vec4 geoCloud = geoW > 0.0 ? geoAcc / geoW : (skyW > 0.0 ? skyAcc / skyW : cloud);
    vec4 skyCloud = skyW > 0.0 ? skyAcc / skyW : geoCloud;
    float a = z0 >= 1.0e8 ? (partial ? cover : 0.0) : (partial ? cover : 1.0);
    if (a >= 0.998) {
      cloud = geoCloud;
    } else if (a <= 0.002) {
      cloud = skyCloud;
    } else {
      // The clear-sky colour behind this pixel, from the nearest pure-sky
      // neighbour. Found in all but a sliver of sky narrower than a pixel,
      // where the coverage-weighted blend of the two clouds is the fallback.
      vec3 sky = vec3(0.0);
      float nSky = 0.0;
      for (int j = -1; j <= 1; j++)
        for (int i = -1; i <= 1; i++) {
          vec4 si = texelFetch(uScene, ivec2(gl_FragCoord.xy) + ivec2(i, j), 0);
          if (si.a < 0.002) { sky += si.rgb; nSky += 1.0; }
        }
      if (nSky > 0.0) {
        sky /= nSky;
        vec3 geo = max(scene - (1.0 - a) * sky, vec3(0.0));
        vec3 bloomE = texture(uBloom, vUv).rgb * (bloomStrength() / max(uExposure, 1e-4));
        vec3 outc = geo * geoCloud.a + a * geoCloud.rgb
                  + (1.0 - a) * (sky * skyCloud.a + skyCloud.rgb)
                  + bloomE * mix(skyCloud.a, geoCloud.a, a);
        fragColor = vec4(present(outc), 1.0);
        return;
      }
      cloud = mix(skyCloud, geoCloud, a);
    }
  }
  // Bloom is added AFTER the clouds and BEFORE the tone curve, and both halves
  // of that matter: a halo that ignored the cloud in front of it would glow
  // through an overcast, and one added after the curve would be a flat wash on
  // top of the picture rather than light.
  //
  // Divided by the exposure because the bright pass multiplied by it: present()
  // is about to apply it again, and applying it twice would make the halo grow
  // three stops between noon and midnight all by itself.
  vec3 bloom = texture(uBloom, vUv).rgb * (bloomStrength() / max(uExposure, 1e-4));
  fragColor = vec4(present(scene * cloud.a + cloud.rgb + bloom * cloud.a), 1.0);
}
`;function jo(){const n=new At;return n.setAttribute("position",new dt(new Float32Array(9),3)),n.boundingSphere=new On(new N,1/0),n}class Px{scene=new Fn;presentScene=new Fn;camera=new Zs(-1,1,1,-1,0,1);uniforms;presentUniforms;brightUniforms;brightScene=new Fn;blurScene=new Fn;blurUniforms;bloomA;bloomB;cloudTarget;shapeNoise;detailNoise;means;readback=null;constructor(e){const t=performance.now();this.shapeNoise=Mx(),this.detailNoise=Sx(),this.means=Tx(this.shapeNoise),console.log(`[skycast] cloud noise baked in ${(performance.now()-t).toFixed(0)} ms`),this.uniforms={uDepth:{value:null},uInvProj:{value:new ot},uInvProj2:{value:new ot},uInvView:{value:new ot},uCameraPos:{value:new N},uAmbient:{value:new Ee(.2,.24,.3)},uNear:{value:2},uFar:{value:2e5},uTime:{value:0},uLow:{value:new N(0,800,1800)},uMid:{value:new N(0,3800,5e3)},uHighCover:{value:0},uHighBase:{value:9e3},uWind:{value:new Oe},uPrecip:{value:0},uLowMean:{value:0},uMidMean:{value:0},uHighMean:{value:0},uPixelAngle:{value:.002},uExposure:{value:1},uSunDir:{value:new N(0,1,0)},uSunColor:{value:new Ee(1,1,1)},uSunIntensity:{value:16},uSunSurfaceCloud:{value:.105},uMieG:{value:.76},uTurbidity:{value:1},uCamAltitude:{value:100},uMultiScatter:{value:.055},uShape:{value:this.shapeNoise},uDetail:{value:this.detailNoise}};const i=new nn({vertexShader:Yo,fragmentShader:Ax,uniforms:this.uniforms,glslVersion:zt,depthTest:!1,depthWrite:!1}),a=new _t(jo(),i);a.frustumCulled=!1,this.scene.add(a),this.presentUniforms={uScene:{value:null},uCloud:{value:null},uBloom:{value:null},uDepth:{value:null},uNear:{value:2},uFar:{value:2e5},uExposure:{value:1},uNight:{value:0}},this.brightUniforms={uScene:{value:null},uExposure:{value:1},uNight:{value:0}},this.blurUniforms={uSource:{value:null},uDirection:{value:new Oe(1,0)}};const s=new nn({vertexShader:Yo,fragmentShader:Dx,uniforms:this.presentUniforms,glslVersion:zt,depthTest:!1,depthWrite:!1}),o=new _t(jo(),s);o.frustumCulled=!1,this.presentScene.add(o);const r=(p,f,g)=>{const v=new _t(jo(),new nn({vertexShader:Yo,fragmentShader:f,uniforms:g,glslVersion:zt,depthTest:!1,depthWrite:!1}));v.frustumCulled=!1,p.add(v)};r(this.brightScene,Rx,this.brightUniforms),r(this.blurScene,Cx,this.blurUniforms);const l=e.getDrawingBufferSize(new Oe),c={type:wn,format:wt,minFilter:et,magFilter:et,depthBuffer:!1,stencilBuffer:!1},h=Math.max(1,Math.floor(l.x/4)),d=Math.max(1,Math.floor(l.y/4));this.bloomA=new Lt(h,d,c),this.bloomB=new Lt(h,d,c),this.cloudTarget=new Lt(Math.max(1,Math.floor(l.x/2)),Math.max(1,Math.floor(l.y/2)),{type:wn,format:wt,minFilter:et,magFilter:et,depthBuffer:!1,stencilBuffer:!1})}resize(e){const t=e.getDrawingBufferSize(new Oe);this.cloudTarget.setSize(Math.max(1,Math.floor(t.x/2)),Math.max(1,Math.floor(t.y/2)));const i=Math.max(1,Math.floor(t.x/4)),a=Math.max(1,Math.floor(t.y/4));this.bloomA.setSize(i,a),this.bloomB.setSize(i,a)}render(e,t,i){this.uniforms.uDepth.value=i,e.setRenderTarget(this.cloudTarget),e.render(this.scene,this.camera),this.brightUniforms.uScene.value=t,e.setRenderTarget(this.bloomA),e.render(this.brightScene,this.camera),this.blurUniforms.uSource.value=this.bloomA.texture,this.blurUniforms.uDirection.value.set(1,0),e.setRenderTarget(this.bloomB),e.render(this.blurScene,this.camera),this.blurUniforms.uSource.value=this.bloomB.texture,this.blurUniforms.uDirection.value.set(0,1),e.setRenderTarget(this.bloomA),e.render(this.blurScene,this.camera),this.presentUniforms.uScene.value=t,this.presentUniforms.uCloud.value=this.cloudTarget.texture,this.presentUniforms.uBloom.value=this.bloomA.texture,this.presentUniforms.uDepth.value=i,e.setRenderTarget(null),e.render(this.presentScene,this.camera)}measureBanding(e){const t=this.cloudTarget.width,i=this.cloudTarget.height,a=t*i*4;(!this.readback||this.readback.length!==a)&&(this.readback=new Uint16Array(a));const s=this.readback;e.readRenderTargetPixels(this.cloudTarget,0,0,t,i,s);const o=8,r=Math.floor(t/o),l=Math.floor(i/o);if(r<2||l<2)return{rows:0,cols:0,ratio:0};const c=new Float32Array(r*l),h=new Uint8Array(r*l),d=_u.fromHalfFloat;for(let w=0;w<l;w++)for(let x=0;x<r;x++){let _=0,y=0;for(let S=0;S<o;S++){const A=(w*o+S)*t;for(let C=0;C<o;C++){const M=(A+x*o+C)*4;d(s[M+3])>=.5||(_+=.2126*d(s[M])+.7152*d(s[M+1])+.0722*d(s[M+2]),y++)}}y===o*o&&(c[w*r+x]=_/y,h[w*r+x]=1)}let p=0,f=0,g=0,v=0;for(let w=0;w<l;w++)for(let x=0;x<r;x++){const _=w*r+x;h[_]&&(w+1<l&&h[_+r]&&(p+=Math.abs(c[_+r]-c[_]),f++),x+1<r&&h[_+1]&&(g+=Math.abs(c[_+1]-c[_]),v++))}if(f===0||v===0)return{rows:0,cols:0,ratio:0};const m=p/f,u=g/v;return{rows:m,cols:u,ratio:m/Math.max(u,1e-9)}}update(e,t,i,a){const s=this.uniforms;s.uInvProj.value.copy(e.projectionMatrixInverse),s.uInvProj2.value.copy(e.projectionMatrixInverse),s.uInvView.value.copy(e.matrixWorld),s.uCameraPos.value.copy(e.position),s.uNear.value=e.near,s.uFar.value=e.far,this.presentUniforms.uNear.value=e.near,this.presentUniforms.uFar.value=e.far,s.uPixelAngle.value=2*Math.tan(e.fov*Math.PI/360)/Math.max(1,this.cloudTarget.height),s.uTime.value=a,s.uLow.value.set(t.low.cover,t.low.base,t.low.top),s.uMid.value.set(t.mid.cover,t.mid.base,t.mid.top),s.uHighCover.value=t.high.cover,s.uLowMean.value=qo(this.means.deck,t.low.cover),s.uMidMean.value=qo(this.means.deck,t.mid.cover),s.uHighMean.value=qo(this.means.cirrus,t.high.cover),s.uHighBase.value=t.high.base;const o=(t.windDir+180)*Math.PI/180;s.uWind.value.set(Math.sin(o)*t.windSpeed,-Math.cos(o)*t.windSpeed),s.uPrecip.value=Math.min(1,t.precip*1.2),s.uAmbient.value.copy(i.ambient),s.uSunDir.value.copy(i.sunDir),s.uSunColor.value.copy(i.sunColor),s.uSunIntensity.value=i.sunIntensity,s.uMieG.value=i.mieG,s.uTurbidity.value=i.turbidity,s.uCamAltitude.value=e.position.y}}const Lx=.105,Wt=16,Ix=`
out vec2 vNdc;
void main() {
  // Fullscreen triangle from gl_VertexID; no attributes, same trick as sky.ts.
  vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2) * 2.0 - 1.0;
  vNdc = p;
  gl_Position = vec4(p, 1.0, 1.0);
}
`,Fx=`
precision highp float;
in vec2 vNdc;
out vec4 fragColor;

// The probe is six small renders on a slow cadence, so it can afford the full
// march the sky dome uses rather than the shortened one the surface shaders
// run per fragment.
${_i}

// Maps face coordinates to a world direction. Handed in from sh.ts so the
// capture and the CPU-side SH projection cannot disagree about which texel
// looks where.
uniform mat3  uFaceBasis;
uniform vec3  uGroundAlbedo;
uniform vec3  uGroundAmbient;

void main() {
  vec3 rd = normalize(uFaceBasis * vec3(vNdc, 1.0));
  vec3 ro = atmoOrigin(uCamAltitude);

  vec3 trans;
  vec3 col = atmosphere(ro, rd, 1.0e7, trans);

  // A ground plane under the horizon, shaded the way terrain.ts shades it:
  // albedo times (direct beam plus sky ambient), through the same transmittance
  // the view ray accumulates on its way down.
  //
  // Crude, and it earns its place anyway. Sunlit ground is BRIGHTER than blue
  // sky, so for a vertical wall the bounce off the street is a larger part of
  // the ambient than the sky is. Leaving the lower hemisphere as haze is
  // exactly the "shaded faces go black" defect this probe exists to fix.
  //
  // atmosphere() already stopped the march at the ground for a downward ray,
  // so trans is the transmittance of the whole path to it and the aerial
  // perspective on the ground is the same as the terrain's own.
  if (rd.y < 0.0) {
    vec3 groundSunT = sunTransmittance(atmoOrigin(0.0), uSunDir, uTurbidity);
    vec3 lit = uGroundAlbedo *
      (uSunColor * uSunIntensity * ${Lx.toFixed(4)} * groundSunT * max(0.0, uSunDir.y)
       + uGroundAmbient);
    // Faded in over the first couple of degrees below the horizon. A hard edge
    // here would show up as a hard line in every glass reflection in the city.
    col += lit * trans * smoothstep(0.0, -0.035, rd.y);
  }

  fragColor = vec4(col, 1.0);
}
`,Ux=6,Zc=45,Nx=.009,kx=new Ee(.72,.75,.8);class Ox{texture;sh=Qr();cube;strip;pixels=new Float32Array(Wt*Wt*Gi*4);raw=Qr();reading=!1;ambient=new Float32Array(3);material;uniforms;scene=new Fn;camera=new yl;basis=[];frames=Zc;lastSun=new N(0,-1,0);lastAlt=-1;lastTurbidity=-1;rendered=!1;constructor(e=64){this.cube=new Mu(e,{type:wn,format:wt,generateMipmaps:!0,minFilter:In,magFilter:et}),this.texture=this.cube.texture,this.strip=new Lt(Wt,Wt*Gi,{type:pn,format:wt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1,minFilter:mt,magFilter:mt});for(const a of El)this.basis.push(new Be().set(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8]));this.uniforms={uSunDir:{value:new N(0,1,0)},uSunColor:{value:new Ee(1,1,1)},uSunIntensity:{value:22},uMieG:{value:.76},uTurbidity:{value:1},uCamAltitude:{value:100},uMultiScatter:{value:.055},uFaceBasis:{value:new Be},uGroundAlbedo:{value:new Ee(.16,.155,.145)},uGroundAmbient:{value:new Ee(.2,.24,.3)}},this.material=new nn({vertexShader:Ix,fragmentShader:Fx,uniforms:this.uniforms,glslVersion:zt,depthWrite:!1,depthTest:!1});const t=new At;t.setAttribute("position",new dt(new Float32Array(9),3)),t.boundingSphere=new On(new N,1/0);const i=new _t(t,this.material);i.frustumCulled=!1,this.scene.add(i),this.sh.set(ia([.28,.36,.5],.55,.45))}get maxLod(){return Math.log2(this.cube.width)}setSize(e){e!==this.cube.width&&(this.cube.setSize(e,e),this.rendered=!1)}update(e,t,i){const a=this.uniforms;this.frames++;const s=!this.rendered||this.lastSun.dot(t.sunDir)<Math.cos(Nx)||Math.abs(i-this.lastAlt)>60+.12*Math.abs(this.lastAlt)||Math.abs(t.turbidity-this.lastTurbidity)>.04*this.lastTurbidity;if(!(this.frames>=Zc||s&&this.frames>=Ux))return!1;this.frames=0,a.uSunDir.value.copy(t.sunDir),a.uSunColor.value.copy(t.sunColor),a.uSunIntensity.value=t.sunIntensity,a.uMieG.value=t.mieG,a.uTurbidity.value=t.turbidity,a.uCamAltitude.value=i,a.uGroundAmbient.value.copy(t.ambient),a.uGroundAlbedo.value.setRGB(.16,.155,.145).lerp(kx,t.snow),this.lastSun.copy(t.sunDir),this.lastAlt=i,this.lastTurbidity=t.turbidity;const o=e.getRenderTarget(),r=a.uFaceBasis.value;for(let l=0;l<Gi;l++)r.copy(this.basis[l]),e.setRenderTarget(this.cube,l),e.render(this.scene,this.camera);this.strip.scissorTest=!0;for(let l=0;l<Gi;l++)r.copy(this.basis[l]),this.strip.viewport.set(0,l*Wt,Wt,Wt),this.strip.scissor.set(0,l*Wt,Wt,Wt),e.setRenderTarget(this.strip),e.render(this.scene,this.camera);return this.strip.scissorTest=!1,e.setRenderTarget(o),this.rendered=!0,this.reading||(this.reading=!0,this.ambient[0]=t.ambient.r,this.ambient[1]=t.ambient.g,this.ambient[2]=t.ambient.b,e.readRenderTargetPixelsAsync(this.strip,0,0,Wt,Wt*Gi,this.pixels).then(()=>this.project()).catch(()=>{}).finally(()=>{this.reading=!1})),!0}project(){sx(this.pixels,Wt,this.raw),nx(this.raw,0,1,0,this.ambient,1e-5)?this.sh.set(this.raw):this.sh.set(ia(this.ambient,.55,.45))}dispose(){this.cube.dispose(),this.strip.dispose(),this.material.dispose()}}const zx="skycast",kt="tiles",an="index",Bx=2,no=720*3600*1e3,Yu=600*1e3,Kc=1/0,Hx=512*1024*1024,Gx=.4,Vx=.8,Wx=12*3600*1e3;let gs=null;function io(){return gs||(gs=new Promise(n=>{let e;try{e=indexedDB.open(zx,Bx)}catch{n(null);return}e.onupgradeneeded=()=>{const t=e.result;t.objectStoreNames.contains(kt)||t.createObjectStore(kt,{keyPath:"url"}),e.transaction&&t.objectStoreNames.contains(kt)&&e.transaction.objectStore(kt).clear(),t.objectStoreNames.contains(an)||t.createObjectStore(an,{keyPath:"url"}).createIndex("at","at")},e.onsuccess=()=>n(e.result),e.onerror=()=>n(null),e.onblocked=()=>n(null)}),gs)}let _a=null;function Xx(n){return _a||(_a=(async()=>{try{await navigator.storage?.persist?.()}catch{}let e=Hx;try{const i=await navigator.storage?.estimate?.();i?.quota&&(e=Math.max(64*1024*1024,i.quota*Gx))}catch{}const t=await new Promise(i=>{try{const s=n.transaction(an,"readonly").objectStore(an).getAll();s.onsuccess=()=>i(s.result.reduce((o,r)=>o+r.size,0)),s.onerror=()=>i(0)}catch{i(0)}});return{budget:e,total:t}})(),_a)}async function $x(n,e){const t=e.budget*Vx;e.total<=t||await new Promise(i=>{try{const a=n.transaction([kt,an],"readwrite"),s=a.objectStore(an),o=a.objectStore(kt),r=s.index("at").openCursor();r.onsuccess=()=>{const l=r.result;if(!l||e.total<=t){i();return}const c=l.value;o.delete(c.url),s.delete(c.url),e.total-=c.size,l.continue()},r.onerror=()=>i(),a.onabort=()=>i()}catch{i()}})}async function Os(n,e){const t=await io();return t?new Promise(i=>{try{const s=t.transaction(kt,"readonly").objectStore(kt).get(n);s.onsuccess=()=>{const o=s.result;if(!o||Date.now()-o.at>e){i(null);return}Date.now()-o.at>Wx&&qx(n),i(o.body)},s.onerror=()=>i(null)}catch{i(null)}}):null}async function qx(n){const e=await io();if(e)try{const t=e.transaction([kt,an],"readwrite"),i=Date.now(),a=t.objectStore(kt),s=a.get(n);s.onsuccess=()=>{const l=s.result;l&&a.put({...l,at:i})};const o=t.objectStore(an),r=o.get(n);r.onsuccess=()=>{const l=r.result;l&&o.put({...l,at:i})}}catch{}}async function Al(n,e){const t=await io();if(!t)return;const i=await Xx(t);if(!(e.byteLength>i.budget)){try{const a=Date.now(),s=t.transaction([kt,an],"readwrite");s.objectStore(kt).put({url:n,at:a,body:e});const o=s.objectStore(an),r=o.get(n);r.onsuccess=()=>{const l=r.result;l&&(i.total-=l.size)},o.put({url:n,at:a,size:e.byteLength}),i.total+=e.byteLength}catch{return}i.total>i.budget&&await $x(t,i)}}const Zo=new Map;function Rl(n,e=no){const t=Zo.get(n);if(t)return t;const i=(async()=>{const a=await Os(n,e);if(a)return a;const s=await fetch(n,{mode:"cors",credentials:"omit"});if(!s.ok)throw new Error(`${s.status} ${s.statusText} for ${n}`);if((s.headers.get("content-type")??"").includes("text/html")&&!/\.html?($|\?)/.test(n))throw new Error(`${n} returned an HTML page, not an asset (likely a 404 served as the app shell)`);const r=await s.arrayBuffer();return Al(n,r),r})().finally(()=>Zo.delete(n));return Zo.set(n,i),i}async function ju(n,e=no){const t=await Rl(n,e);return JSON.parse(new TextDecoder().decode(t))}async function tl(n,e=no){const t=await Rl(n,e);return createImageBitmap(new Blob([t]))}async function Yx(){const n=await io();if(!n)return;const e=n.transaction([kt,an],"readwrite");e.objectStore(kt).clear(),e.objectStore(an).clear(),_a=null}const Rs=.5,Zu=3,jx=.35,Zx=.2;function zs(n){return 6.112*Math.exp(17.62*n/(243.12+n))}function Jc(n){const t=.01*Math.max(0,zs(n.tempC)-zs(Math.min(n.dewC,n.tempC)))*(1+.45*Math.max(0,n.windSpeed)),i=.18*Math.max(0,n.shortwave)*(3600/245e4);let a=.02+t+i;return a/=1+4*Math.max(0,n.liquidMm),n.tempC<0?a*.25:a}function Ku(n,e,t){const i=Jc(e)*t,a=Math.max(0,e.liquidMm)*t;let s=n.film+a-i,o=0;s>Rs&&(o=s-Rs,s=Rs),s=Math.max(0,s);let r=n.puddle+o*jx-(Zx+.8*Jc(e))*t;return r=Math.min(Zu,Math.max(0,r)),{film:s,puddle:r}}const Kx={film:0,puddle:0};function nl(n,e=Kx){const t=[];let i=e;const a=6;for(let s=0;s<n.length;s++){if(s>0){const o=n[s-1],r=n[s];for(let l=0;l<a;l++){const c=(l+.5)/a,h=(d,p)=>d+(p-d)*c;i=Ku(i,{tempC:h(o.tempC,r.tempC),dewC:h(o.dewC,r.dewC),windSpeed:h(o.windSpeed,r.windSpeed),liquidMm:r.liquidMm,shortwave:h(o.shortwave,r.shortwave)},1/a)}}t.push(i)}return t}function il(n){return Math.pow(Math.min(1,Math.max(0,n.film/Rs)),.6)}function al(n){return Math.min(1,Math.max(0,n.puddle/Zu))}function Jx(n,e){const t=Math.max(5,Math.min(100,e));return n*Math.atan(.151977*Math.sqrt(t+8.313659))+Math.atan(n+t)-Math.atan(t-1.676331)+.00391838*Math.pow(t,1.5)*Math.atan(.023101*t)-4.686035}function Qx(n,e){return 100*zs(Math.min(e,n))/zs(n)}function e_(n,e){const t=Jx(n,Qx(n,e)),i=Math.min(1,Math.max(0,(1.5-t)/1.5));return i*i*(3-2*i)}function Bs(n,e,t,i,a){const s=Math.max(0,t)*1.4285714285714286,o=Math.max(0,e);let r=Math.max(n,o+s),l;if(o+s>.005?l=s/(o+s):l=e_(i,a),r<.005)return{kind:"none",snowFrac:l,rate:0};const c=l>.85?"snow":l<.15?"rain":"sleet";return r=Math.max(r,0),{kind:c,snowFrac:l,rate:r}}function Ju(n,e,t){if(n>=95&&n<=99)return n===95?.75:1;const i=Math.min(1,Math.max(0,(e-1e3)/2e3)),a=Math.min(1,Math.max(0,t/3));return .6*i*a}function Qu(n,e){return 125*Math.max(0,n-e)}function ed(n,e){const a=Math.max(1,Math.min(100,e))/100,s=Math.log(a)+17.625*n/(243.04+n);return 243.04*s/(17.625-s)}const t_={0:"Clear",1:"Mainly clear",2:"Partly cloudy",3:"Overcast",45:"Fog",48:"Freezing fog",51:"Light drizzle",53:"Drizzle",55:"Heavy drizzle",56:"Freezing drizzle",57:"Freezing drizzle",61:"Light rain",63:"Rain",65:"Heavy rain",66:"Freezing rain",67:"Freezing rain",71:"Light snow",73:"Snow",75:"Heavy snow",77:"Snow grains",80:"Rain showers",81:"Rain showers",82:"Violent rain showers",85:"Snow showers",86:"Heavy snow showers",95:"Thunderstorm",96:"Thunderstorm with hail",99:"Thunderstorm with hail"};function Cl(n,e,t){return 1-(1-.92*n)*(1-.6*e)*(1-.28*t)}const n_={wetness:0,puddles:0,drift:{x:0,z:0}},td=["temperature_2m","relative_humidity_2m","dew_point_2m","surface_pressure","wind_speed_10m","wind_direction_10m","wind_gusts_10m","visibility","precipitation","weather_code","is_day","cloud_cover","cloud_cover_low","cloud_cover_mid","cloud_cover_high","rain","showers","snowfall","snow_depth","cape","precipitation_probability","shortwave_radiation","wind_speed_850hPa","wind_direction_850hPa"].join(",");function Ea(){const t=Qu(18,10);return{time:new Date,live:!1,source:"simulated",tempC:18,dewC:10,humidity:60,pressureHpa:1013.25,windSpeed:4,windDir:270,gust:6,visibility:2e4,precip:0,precipKind:"none",snowFrac:0,snowfall:0,snowDepth:0,cape:0,precipProb:0,shortwave:400,windAloft:{speed:8,dir:270},wetness:0,puddles:0,storm:0,drift:{x:0,z:0},wmoCode:2,isDay:!0,low:{cover:.25,base:t,top:t+900},mid:{cover:.1,base:4200,top:5400},high:{cover:.15,base:9e3,top:10500},totalCover:.3,opacity:Cl(.25,.1,.15),summary:"Partly cloudy"}}async function i_(n,e){const t=`https://api.open-meteo.com/v1/forecast?latitude=${n.toFixed(4)}&longitude=${e.toFixed(4)}&current=${td}&wind_speed_unit=ms&timezone=UTC`;let i;try{i=(await ju(t,Yu)).current}catch{return Ea()}const a=3600/(i.interval&&i.interval>0?i.interval:3600);return i={...i,precipitation:(i.precipitation??0)*a,rain:(i.rain??0)*a,showers:(i.showers??0)*a,snowfall:(i.snowfall??0)*a},nd(i,new Date(i.time+"Z"),"observation",n_)}function nd(n,e,t,i){const a=n.temperature_2m,s=Number.isFinite(n.dew_point_2m)?n.dew_point_2m:ed(a,n.relative_humidity_2m),o=n.weather_code|0,r=(n.rain??0)+(n.showers??0),l=Bs(n.precipitation??0,r,n.snowfall??0,a,s),c=Math.max(120,Qu(a,s)),h=n.cloud_cover_low/100,d=n.cloud_cover_mid/100,p=n.cloud_cover_high/100;return{time:e,live:!0,source:t,tempC:a,dewC:s,humidity:n.relative_humidity_2m,pressureHpa:n.surface_pressure,windSpeed:n.wind_speed_10m,windDir:n.wind_direction_10m,gust:n.wind_gusts_10m??n.wind_speed_10m,visibility:n.visibility>=24e3?6e4:n.visibility,precip:l.rate,precipKind:l.kind,snowFrac:l.snowFrac,snowfall:Math.max(0,n.snowfall??0),snowDepth:Math.max(0,n.snow_depth??0),cape:Math.max(0,n.cape??0),precipProb:n.precipitation_probability??0,shortwave:Math.max(0,n.shortwave_radiation??0),windAloft:{speed:Number.isFinite(n.wind_speed_850hPa)?n.wind_speed_850hPa:n.wind_speed_10m*1.8,dir:Number.isFinite(n.wind_direction_850hPa)?n.wind_direction_850hPa:n.wind_direction_10m},wetness:i.wetness,puddles:i.puddles,storm:Ju(o,n.cape??0,l.rate),drift:i.drift,wmoCode:o,isDay:n.is_day===1,low:{cover:h,base:c,top:c+300+1400*h},mid:{cover:d,base:3800,top:4400+1800*d},high:{cover:p,base:8500,top:9400+1500*p},totalCover:n.cloud_cover/100,opacity:Cl(h,d,p),summary:t_[o]??"Unknown"}}const Qc=td;function eh(n,e,t){let i=(e-n+540)%360-180;return(n+i*t+360)%360}function id(n,e){const t=(e+180)*Math.PI/180;return{x:Math.sin(t)*n,z:-Math.cos(t)*n}}function a_(n){const e=n.temperature_2m,t=Number.isFinite(n.dew_point_2m)?n.dew_point_2m:ed(e,n.relative_humidity_2m),i=(n.rain??0)+(n.showers??0),a=Bs(n.precipitation??0,i,n.snowfall??0,e,t);return{tempC:e,dewC:t,windSpeed:n.wind_speed_10m,liquidMm:a.rate*(1-a.snowFrac),shortwave:n.shortwave_radiation??0}}function s_(n,e){const t=nl(n.map(a_)),i=[];let a=0,s=0;for(let o=0;o<n.length;o++){if(o>0){const r=n[o-1],l=n[o],c=p=>id(Number.isFinite(p.wind_speed_850hPa)?p.wind_speed_850hPa:p.wind_speed_10m*1.8,Number.isFinite(p.wind_direction_850hPa)?p.wind_direction_850hPa:p.wind_direction_10m),h=c(r),d=c(l);a+=.5*(h.x+d.x)*e,s+=.5*(h.z+d.z)*e}i.push({wetness:il(t[o]),puddles:al(t[o]),drift:{x:a,z:s}})}return i}async function o_(n,e){const t=`https://api.open-meteo.com/v1/forecast?latitude=${n.toFixed(4)}&longitude=${e.toFixed(4)}&hourly=${Qc}&wind_speed_unit=ms&timezone=auto&timeformat=unixtime&forecast_days=7&past_days=1`;let i;try{i=await ju(t,Yu)}catch{return null}const a=i.hourly?.time??[];if(a.length<2)return null;const s=a.map(f=>f*1e3),o=f=>i.hourly[f]??[],r={};for(const f of Qc.split(","))r[f]=o(f);const l=(f,g,v)=>{const m=r[f]?.[g];return typeof m=="number"&&Number.isFinite(m)?m:v},c=f=>({time:"",temperature_2m:l("temperature_2m",f,15),relative_humidity_2m:l("relative_humidity_2m",f,60),dew_point_2m:l("dew_point_2m",f,NaN),surface_pressure:l("surface_pressure",f,1013.25),wind_speed_10m:l("wind_speed_10m",f,3),wind_direction_10m:l("wind_direction_10m",f,270),wind_gusts_10m:l("wind_gusts_10m",f,l("wind_speed_10m",f,3)),visibility:l("visibility",f,24e3),precipitation:l("precipitation",f,0),weather_code:l("weather_code",f,2),is_day:l("is_day",f,1),cloud_cover:l("cloud_cover",f,0),cloud_cover_low:l("cloud_cover_low",f,0),cloud_cover_mid:l("cloud_cover_mid",f,0),cloud_cover_high:l("cloud_cover_high",f,0),rain:l("rain",f,0),showers:l("showers",f,0),snowfall:l("snowfall",f,0),snow_depth:l("snow_depth",f,0),cape:l("cape",f,0),precipitation_probability:l("precipitation_probability",f,0),shortwave_radiation:l("shortwave_radiation",f,0),wind_speed_850hPa:l("wind_speed_850hPa",f,NaN),wind_direction_850hPa:l("wind_direction_850hPa",f,NaN)}),h=s.map((f,g)=>c(g)),d=s_(h,(s[1]-s[0])/1e3),p=f=>{const g=f.getTime(),v=s[1]-s[0],m=(g-s[0])/v,u=Math.max(0,Math.min(s.length-2,Math.floor(m))),w=Math.max(0,Math.min(1,m-u)),x=h[u],_=h[u+1],y=(T,P)=>T+(P-T)*w,S=w<.5?x:_,A={temperature_2m:y(x.temperature_2m,_.temperature_2m),relative_humidity_2m:y(x.relative_humidity_2m,_.relative_humidity_2m),dew_point_2m:y(x.dew_point_2m,_.dew_point_2m),surface_pressure:y(x.surface_pressure,_.surface_pressure),wind_speed_10m:y(x.wind_speed_10m,_.wind_speed_10m),wind_direction_10m:eh(x.wind_direction_10m,_.wind_direction_10m,w),wind_gusts_10m:y(x.wind_gusts_10m,_.wind_gusts_10m),visibility:y(x.visibility,_.visibility),precipitation:y(x.precipitation,_.precipitation),weather_code:S.weather_code,is_day:S.is_day,cloud_cover:y(x.cloud_cover,_.cloud_cover),cloud_cover_low:y(x.cloud_cover_low,_.cloud_cover_low),cloud_cover_mid:y(x.cloud_cover_mid,_.cloud_cover_mid),cloud_cover_high:y(x.cloud_cover_high,_.cloud_cover_high),rain:y(x.rain,_.rain),showers:y(x.showers,_.showers),snowfall:y(x.snowfall,_.snowfall),snow_depth:y(x.snow_depth,_.snow_depth),cape:y(x.cape,_.cape),precipitation_probability:y(x.precipitation_probability,_.precipitation_probability),shortwave_radiation:y(x.shortwave_radiation,_.shortwave_radiation),wind_speed_850hPa:y(x.wind_speed_850hPa,_.wind_speed_850hPa),wind_direction_850hPa:eh(x.wind_direction_850hPa,_.wind_direction_850hPa,w)},C=d[u],M=d[u+1],b={wetness:y(C.wetness,M.wetness),puddles:y(C.puddles,M.puddles),drift:{x:y(C.drift.x,M.drift.x),z:y(C.drift.z,M.drift.z)}};return nd(A,f,"forecast",b)};return{timezone:i.timezone??"UTC",utcOffsetSeconds:i.utc_offset_seconds??0,start:new Date(s[0]),end:new Date(s[s.length-1]),at:p}}const Dt=Math.PI/180,Zn=180/Math.PI;function r_(n){return n.getTime()/864e5+24405875e-1}function l_(n,e){const t=n*Dt,i=e*Dt,a=Math.cos(t);return{x:a*Math.sin(i),y:Math.sin(t),z:-a*Math.cos(i)}}function th(n,e,t,i,a){const s=(t+a-n*Zn)*Dt,o=i*Dt,r=e*Dt,l=Math.sin(o)*Math.sin(r)+Math.cos(o)*Math.cos(r)*Math.cos(s),c=Math.asin(Math.max(-1,Math.min(1,l))),h=Math.atan2(-Math.sin(s)*Math.cos(r),Math.cos(o)*Math.sin(r)-Math.sin(o)*Math.cos(r)*Math.cos(s)),d=c*Zn,p=(h*Zn+360)%360;return{altitude:d,azimuth:p,ra:(n*Zn%360+360)%360,dec:e,dir:l_(d,p)}}function aa(n,e,t){const a=r_(n)-2451545,s=a/36525,o=(280.46061837+360.98564736629*a+387933e-9*s*s)%360,r=(280.46646+36000.76983*s+3032e-7*s*s)%360,c=(357.52911+35999.05029*s-1537e-7*s*s)*Dt,h=(1.914602-.004817*s-14e-6*s*s)*Math.sin(c)+(.019993-101e-6*s)*Math.sin(2*c)+289e-6*Math.sin(3*c),d=r+h,p=125.04-1934.136*s,f=(d-.00569-.00478*Math.sin(p*Dt))*Dt,v=(23+(26+(21.448-s*(46.815+s*(59e-5-s*.001813)))/60)/60+.00256*Math.cos(p*Dt))*Dt,m=Math.atan2(Math.cos(v)*Math.sin(f),Math.cos(f)),u=Math.asin(Math.sin(v)*Math.sin(f))*Zn,w=th(m,u,o,e,t),x=(218.316+13.176396*a)*Dt,_=(134.963+13.064993*a)*Dt,y=(93.272+13.22935*a)*Dt,S=x+6.289*Dt*Math.sin(_),A=5.128*Dt*Math.sin(y),C=Math.atan2(Math.sin(S)*Math.cos(v)-Math.tan(A)*Math.sin(v),Math.cos(S)),M=Math.asin(Math.sin(A)*Math.cos(v)+Math.cos(A)*Math.sin(v)*Math.sin(S))*Zn,b=th(C,M,o,e,t),T=((S-f)*Zn+360)%360,P=T/360,I=(1-Math.cos(T*Dt))/2,F=Math.max(0,Math.min(1,(w.altitude+6)/10));return{sun:w,moon:b,moonPhase:P,moonElongation:T,moonIllum:I,daylight:F,obliquity:v*Zn}}function c_(n){const e=[n.name,n.region,n.country].filter(t=>t&&t.length>0);return e.filter((t,i)=>e.indexOf(t)===i).join(", ")}async function h_(n,e){const t=n.trim();if(t.length<2)return[];const i=`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(t)}&count=6&language=en&format=json`;try{const a=await fetch(i,{mode:"cors",credentials:"omit",signal:e});return a.ok?((await a.json()).results??[]).map(o=>({name:o.name,region:o.admin1??"",country:o.country??o.country_code??"",lat:o.latitude,lon:o.longitude,population:o.population??0})):[]}catch{return[]}}async function u_(n,e){const t=`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${n.toFixed(3)}&longitude=${e.toFixed(3)}&localityLanguage=en`;try{const i=await fetch(t,{mode:"cors",credentials:"omit"});if(!i.ok)return null;const a=await i.json(),s=a.city||a.locality||a.principalSubdivision||"";return s?{name:s,region:a.principalSubdivision&&a.principalSubdivision!==s?a.principalSubdivision:"",country:a.countryName??""}:null}catch{return null}}const d_=["EXT_color_buffer_float","EXT_color_buffer_half_float","OES_texture_float_linear","EXT_float_blend","WEBGL_depth_texture"];function ut(n,e){return`<div><span style="opacity:.6">${n}</span> ${e}</div>`}function f_(n){const e=document.createElement("div");e.id="diag",e.setAttribute("style","position:fixed;left:8px;top:8px;right:8px;z-index:9999;font:11px/1.5 ui-monospace,monospace;color:#dfe6ee;background:rgba(8,12,18,.92);border:1px solid rgba(255,255,255,.18);border-radius:8px;padding:10px;max-height:70vh;overflow:auto;");const t=[];t.push(ut("ua",navigator.userAgent.slice(0,120))),t.push(ut("screen",`${innerWidth}x${innerHeight}`));const i=Nu(),a=i.device;t.push(ut("dpr",`${devicePixelRatio} capped to ${a.pixelRatio}`)),t.push(ut("deviceMemory",a.deviceMemoryGb===null?`unknown, assuming ${i.assumedMemoryGb} GB`:`${a.deviceMemoryGb} GB`)),t.push(ut("pointer",a.coarsePointer?"coarse":"fine")),t.push(ut("<b>tier</b>",`<b>${i.tier}</b>`)),t.push(ut("tier because",i.reasons.length?i.reasons.join("; "):"nothing forced it down")),t.push(ut("drape rings",i.rings.map(l=>`${l.extent}m@z${l.imageryZoom}`).join(" "))),t.push(ut("msaa",i.msaaSamples===0?"off":`${i.msaaSamples}x`)),t.push(ut("sun cascades",`${i.shadowCascadeCount} x ${i.shadowCascadeSize}`)),t.push(),t.push(ut("ambient occlusion",i.aoEnabled?"on":"off")),t.push(ut("triangle budget",`${(i.buildingTriangleBudget/1e3).toFixed(0)}k buildings, ${(i.roadTriangleBudget/1e3).toFixed(0)}k roads`));for(const l of i.memory.items)t.push(ut(`&nbsp;&nbsp;${l.what}`,Bc(l.bytes)));t.push(ut("<b>gpu estimate</b>",`<b>${Bc(i.memory.totalBytes)}</b>`));let s=null;try{s=n.getContext("webgl2",{failIfMajorPerformanceCaveat:!1})}catch{s=null}if(!s)t.push(ut("webgl2","<b style='color:#ff8a8a'>UNAVAILABLE</b>"));else{const l=s.getExtension("WEBGL_debug_renderer_info"),c=String(l?s.getParameter(l.UNMASKED_RENDERER_WEBGL):s.getParameter(s.RENDERER));t.push(ut("gpu",c.slice(0,90))),t.push(ut("maxTexture",String(s.getParameter(s.MAX_TEXTURE_SIZE)))),t.push(ut("maxRenderbuffer",String(s.getParameter(s.MAX_RENDERBUFFER_SIZE)))),t.push(ut("maxSamples",String(s.getParameter(s.MAX_SAMPLES))));for(const h of d_){const d=s.getExtension(h)!==null;t.push(ut(h,d?"yes":"<b style='color:#ff8a8a'>NO</b>"))}}e.innerHTML=t.join(""),document.body.append(e);const o=document.createElement("div");e.append(o);const r=()=>{const c=window.skycast,h=[];if(h.push(ut("app booted",c?"yes":"<b style='color:#ff8a8a'>NO</b>")),c){h.push(ut("scene time",String(c.time??"?"))),c.wx&&h.push(ut("cloud/precip",`${c.wx.totalCover?.toFixed(2)} / ${c.wx.precip?.toFixed(2)}`));const d=c.ground?.status;h.push(ut("buildings streamed",d?.buildings?String(d.buildings):"<b style='color:#ff8a8a'>0 so far</b>"));const p=c.renderer?.info?.memory;p&&h.push(ut("gpu textures",`${p.textures} tex / ${p.geometries} geo`))}o.innerHTML=h.join("")};r(),setInterval(r,2e3)}function p_(n){const e=i=>{let a=document.getElementById("diag-err");a||(a=document.createElement("div"),a.id="diag-err",a.setAttribute("style","position:fixed;left:8px;right:8px;bottom:8px;z-index:10000;font:11px/1.4 ui-monospace,monospace;color:#ffd9d9;background:rgba(60,10,10,.94);border:1px solid #ff6b6b;border-radius:8px;padding:8px;max-height:40vh;overflow:auto;"),document.body.append(a)),a.textContent=`${a.textContent??""}
${i}`.trim()},t=window;t.__skycastShout=e,n.addEventListener("webglcontextlost",i=>{i.preventDefault(),e("WEBGL CONTEXT LOST (usually out of GPU memory)")}),addEventListener("error",i=>e(`error: ${i.message}`)),addEventListener("unhandledrejection",i=>e(`unhandled: ${String(i.reason).slice(0,200)}`))}const m_=6378137,mi=Math.PI/180;function g_(n){const e=n*mi;return 111132.92-559.82*Math.cos(2*e)+1.175*Math.cos(4*e)-.0023*Math.cos(6*e)}function v_(n){const e=n*mi;return 111412.84*Math.cos(e)-93.5*Math.cos(3*e)+.118*Math.cos(5*e)}class nh{lat;lon;mPerLat;mPerLon;constructor(e,t){this.lat=e,this.lon=t,this.mPerLat=g_(e),this.mPerLon=v_(e)}toWorld(e,t){return{x:(t-this.lon)*this.mPerLon,z:-(e-this.lat)*this.mPerLat}}toLatLon(e,t){return{lat:this.lat-t/this.mPerLat,lon:this.lon+e/this.mPerLon}}}function Ia(n,e){return(n+180)/360*2**e}function Fa(n,e){const t=n*mi;return(1-Math.log(Math.tan(t)+1/Math.cos(t))/Math.PI)/2*2**e}function vi(n,e){return n/2**e*360-180}function wi(n,e){const t=Math.PI-2*Math.PI*(n/2**e);return 180/Math.PI*Math.atan(.5*(Math.exp(t)-Math.exp(-t)))}function w_(n,e,t){return{z:t,x:Math.floor(Ia(e,t)),y:Math.floor(Fa(n,t))}}function Hs(n){return{west:vi(n.x,n.z),east:vi(n.x+1,n.z),north:wi(n.y,n.z),south:wi(n.y+1,n.z)}}function x_(n){return`${n.z}/${n.x}/${n.y}`}function ih(n,e,t){return n<e?e:n>t?t:n}function sl(n,e){const t=(e.lat-n.lat)*mi,i=(e.lon-n.lon)*mi,a=Math.sin(t/2)**2+Math.cos(n.lat*mi)*Math.cos(e.lat*mi)*Math.sin(i/2)**2;return 2*m_*Math.asin(Math.min(1,Math.sqrt(a)))}const ah="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile",An=256;async function ad(n,e){const t=Math.floor(Ia(n.west,e)),i=Math.floor(Ia(n.east,e)),a=Math.floor(Fa(n.north,e)),s=Math.floor(Fa(n.south,e)),o=i-t+1,r=s-a+1,l=new OffscreenCanvas(o*An,r*An),c=l.getContext("2d");c.fillStyle="#1b3a52",c.fillRect(0,0,l.width,l.height);const h=2**e,d=[];let p=0,f=0;for(let g=a;g<=s;g++)for(let v=t;v<=i;v++){const m=(v%h+h)%h,u=(v-t)*An,w=(g-a)*An;d.push((async()=>{for(let x=0;x<3;x++)try{const _=await tl(`${ah}/${e}/${g}/${m}`);c.drawImage(_,u,w,An,An),_.close();return}catch{x<2&&await new Promise(_=>setTimeout(_,250*(x+1)**2))}if(e>2)try{const x=m>>1,_=g>>1,y=await tl(`${ah}/${e-1}/${_}/${x}`),S=An/2;c.drawImage(y,(m&1)*S,(g&1)*S,S,S,u,w,An,An),y.close(),f++;return}catch{}p++})())}if(await Promise.all(d),p>0||f>0){const g=o*r;console.warn(`[skycast] imagery z${e}: ${p}/${g} tiles missing, ${f} filled from z${e-1}`)}return{missing:p,coarse:f,canvas:l,bbox:{west:vi(t,e),east:vi(i+1,e),north:wi(a,e),south:wi(s+1,e)}}}const __="https://s3.amazonaws.com/elevation-tiles-prod/terrarium",Rn=256,y_=0;class b_{bbox;w;h;data;loaded=!1;constructor(e,t,i){this.bbox=e,this.w=t,this.h=i,this.data=new Float32Array(t*i)}sample(e,t){const{west:i,east:a,south:s,north:o}=this.bbox,r=ih((t-i)/(a-i)*(this.w-1),0,this.w-1),l=ih((o-e)/(o-s)*(this.h-1),0,this.h-1),c=Math.floor(r),h=Math.floor(l),d=Math.min(c+1,this.w-1),p=Math.min(h+1,this.h-1),f=r-c,g=l-h,v=this.data,m=v[h*this.w+c],u=v[h*this.w+d],w=v[p*this.w+c],x=v[p*this.w+d];return(m*(1-f)+u*f)*(1-g)+(w*(1-f)+x*f)*g}contains(e,t){const i=this.bbox;return e>=i.south&&e<=i.north&&t>=i.west&&t<=i.east}}function M_(n){const t=new OffscreenCanvas(n.width,n.height).getContext("2d",{willReadFrequently:!0});t.drawImage(n,0,0);const i=t.getImageData(0,0,n.width,n.height).data,a=new Float32Array(n.width*n.height);for(let s=0,o=0;s<a.length;s++,o+=4){const r=i[o]*256+i[o+1]+i[o+2]/256-32768;a[s]=r<0?0:r}return n.close(),a}async function sh(n,e,t){const i=Math.floor(Ia(n.west,e)),a=Math.floor(Ia(n.east,e)),s=Math.floor(Fa(n.north,e)),o=Math.floor(Fa(n.south,e)),r={west:vi(i,e),east:vi(a+1,e),north:wi(s,e),south:wi(o+1,e)},l=a-i+1,c=o-s+1,h=new b_(r,l*Rn,c*Rn),d=[];let p=0;const f=l*c;for(let g=s;g<=o;g++)for(let v=i;v<=a;v++){const m=2**e,u=(v%m+m)%m,w=`${__}/${e}/${u}/${g}.png`,x=(v-i)*Rn,_=(g-s)*Rn;d.push(tl(w).then(y=>{const S=M_(y);for(let A=0;A<Rn;A++)h.data.set(S.subarray(A*Rn,(A+1)*Rn),(_+A)*h.w+x)}).catch(()=>{for(let y=0;y<Rn;y++)h.data.fill(y_,(_+y)*h.w+x,(_+y)*h.w+x+Rn)}).finally(()=>t?.(++p,f)))}return await Promise.all(d),S_(h),h.loaded=!0,h}function S_(n,e=55){const{w:t,h:i,data:a}=n,s=[];for(let o=1;o<i-1;o++)for(let r=1;r<t-1;r++){const l=o*t+r,c=a[l],h=[a[l-1],a[l+1],a[l-t],a[l+t]];let d=-1/0;for(const p of h)p>d&&(d=p);c-d<=e||(h.sort((p,f)=>p-f),s.push([l,(h[1]+h[2])/2]))}for(const[o,r]of s)a[o]=r}function Cs(n,e,t){const i=t/111132,a=t/(111412*Math.max(.05,Math.cos(n*Math.PI/180)));return{west:e-a,east:e+a,south:n-i,north:n+i}}const E_=140,oh=4,vs=32,T_=1.05;class A_{stats={moves:0,lastStitchMs:0,lastApplyMs:0,worstApplyMs:0,pending:!1,lastMissing:0,lastCoarse:0};origin;terrain;ring;inFlight=!1;disposed=!1;constructor(e,t,i){this.origin=e,this.terrain=t,this.ring=i}follow(e,t,i,a){if(this.inFlight||this.disposed)return;const s=this.terrain.detailCentre;if(Math.hypot(e-s.x,t-s.z)<=E_)return;const o=Math.round((e+i*oh)/vs)*vs,r=Math.round((t+a*oh)/vs)*vs;o===s.x&&r===s.z||(this.inFlight=!0,this.stats.pending=!0,this.move(o,r))}dispose(){this.disposed=!0}async move(e,t){const i=performance.now();try{const a=this.origin.toLatLon(e,t),s=await ad(Cs(a.lat,a.lon,this.ring.extent*T_),this.ring.imageryZoom);if(this.stats.lastStitchMs=performance.now()-i,this.stats.lastMissing=s.missing,this.stats.lastCoarse=s.coarse,this.disposed)return;const o=performance.now();this.terrain.recentreDetail(e,t,s),this.stats.lastApplyMs=performance.now()-o,this.stats.worstApplyMs=Math.max(this.stats.worstApplyMs,this.stats.lastApplyMs),this.stats.moves++}catch(a){console.warn("[skycast] detail ring restitch failed, keeping the old drape",a)}finally{this.inFlight=!1,this.stats.pending=!1}}}const Et=192;function R_(n){const e=Math.max(2e3,n.radiusM),t=e*2/Et,i=new Float32Array(Et*Et);for(const c of n.buildings){let h=1/0,d=-1/0,p=1/0,f=-1/0;for(let u=0;u<c.ring.length;u+=2){const w=c.ring[u],x=c.ring[u+1];w<h&&(h=w),w>d&&(d=w),x<p&&(p=x),x>f&&(f=x)}const g=Math.max(0,(d-h)*(f-p)),v=Math.floor((c.cx+e)/t),m=Math.floor((c.cz+e)/t);v<0||v>=Et||m<0||m>=Et||(i[m*Et+v]+=g)}const a=Float32Array.from(i).sort(),s=a[Math.floor(a.length*.98)]||1,o=new Float32Array(Et*Et);for(let c=0;c<Et;c++)for(let h=0;h<Et;h++){let d=0,p=0;for(let f=-1;f<=1;f++)for(let g=-1;g<=1;g++){const v=h+g,m=c+f;v<0||v>=Et||m<0||m>=Et||(d+=i[m*Et+v],p++)}o[c*Et+h]=d/p}const r=new Uint8Array(Et*Et);for(let c=0;c<r.length;c++)r[c]=Math.round(255*Math.min(1,Math.sqrt(o[c]/s)));const l=new xi(r,Et,Et,Qn,yt);return l.minFilter=et,l.magFilter=et,l.wrapS=Tt,l.wrapT=Tt,l.needsUpdate=!0,{texture:l,extent:e}}function rh(){const n=new Uint8Array(1),e=new xi(n,1,1,Qn,yt);return e.needsUpdate=!0,{texture:e,extent:1}}const lh=.25,C_=8e3;var je=(n=>(n[n.Motorway=0]="Motorway",n[n.Trunk=1]="Trunk",n[n.Primary=2]="Primary",n[n.Secondary=3]="Secondary",n[n.Tertiary=4]="Tertiary",n[n.Residential=5]="Residential",n[n.Unclassified=6]="Unclassified",n[n.Service=7]="Service",n[n.LivingStreet=8]="LivingStreet",n[n.Busway=9]="Busway",n[n.Pedestrian=10]="Pedestrian",n[n.Footway=11]="Footway",n[n.Cycleway=12]="Cycleway",n[n.Track=13]="Track",n))(je||{}),st=(n=>(n[n.Unknown=0]="Unknown",n[n.Asphalt=1]="Asphalt",n[n.Concrete=2]="Concrete",n[n.Paved=3]="Paved",n[n.Gravel=4]="Gravel",n[n.Dirt=5]="Dirt",n[n.Cobblestone=6]="Cobblestone",n))(st||{});const D_=1,sa=2,Ha=4,sd=8,P_=-5,L_=5,I_=3.5,F_=[4,4,4,2,2,2,2,1,1,2,0,0,0,0],U_=[null,null,null,null,null,null,null,null,null,null,6,1.8,2.5,3],N_=1,Dn=.35,od=3.5,k_=2.5;function O_(n,e){return(n&sa)===0?Dn:Dn+od+Math.max(0,e)*k_}function ao(n,e,t=0){const i=U_[n];return i??(e>0?e:(t&sd)!==0?N_:F_[n]??2)*I_}function z_(n){const e=new Array(n.length);for(let t=0;t<n.length;t++){const i=n[t],a=Math.fround(i.cx),s=Math.fround(i.cz),o=i.dx.length,r=new Float32Array(o*2);for(let l=0;l<o;l++)r[l*2]=a+i.dx[l]*lh,r[l*2+1]=s+i.dz[l]*lh;e[t]={cls:i.cls,lanes:i.lanes,flags:i.flags,layer:i.layer,surface:i.surface,cx:a,cz:s,pts:r,name:i.name}}return e}function B_(n){let e=0;for(let t=2;t<n.pts.length;t+=2)e+=Math.hypot(n.pts[t]-n.pts[t-2],n.pts[t+1]-n.pts[t-1]);return e}const H_=5,G_=2560,rd=1.5,ol=6,V_=(()=>{const n=new Array(14).fill(!0);return n[je.Footway]=!1,n[je.Cycleway]=!1,n[je.Track]=!1,n})();function W_(n){return Math.min(G_,Math.max(256,Math.ceil(n*2/H_)))}function X_(n,e){const t=e*.5+rd,i=t+ol;return n<=t?1:n>=i?0:(i-n)/ol}function $_(n,e,t,i,a,s){const o=a-t,r=s-i,l=o*o+r*r;let c=l>0?((n-t)*o+(e-i)*r)/l:0;c=c<0?0:c>1?1:c;const h=t+c*o-n,d=i+c*r-e;return h*h+d*d}function q_(n,e){const{n:t,data:i}=n,a=n.extent,s=a*2/t;for(const o of e){if(!V_[o.cls])continue;const r=ao(o.cls,o.lanes,o.flags),l=r*.5+rd+ol,c=l*l;for(let h=2;h<o.pts.length;h+=2){const d=o.pts[h-2],p=o.pts[h-1],f=o.pts[h],g=o.pts[h+1],v=Math.max(0,Math.floor((Math.min(d,f)+a-l)/s)),m=Math.max(0,Math.floor((Math.min(p,g)+a-l)/s)),u=Math.min(t-1,Math.floor((Math.max(d,f)+a+l)/s)),w=Math.min(t-1,Math.floor((Math.max(p,g)+a+l)/s));for(let x=m;x<=w;x++){const _=(x+.5)*s-a,y=x*t;for(let S=v;S<=u;S++){const A=(S+.5)*s-a,C=$_(A,_,d,p,f,g);if(C>=c)continue;const M=Math.round(255*X_(Math.sqrt(C),r));M>i[y+S]&&(i[y+S]=M)}}}}}class Y_{cov;texture;constructor(e){const t=W_(e);this.cov={data:new Uint8Array(t*t),n:t,extent:e},this.texture=new xi(this.cov.data,t,t,Qn,yt),this.texture.minFilter=et,this.texture.magFilter=et,this.texture.wrapS=Tt,this.texture.wrapT=Tt,this.texture.needsUpdate=!0}add(e){q_(this.cov,e)}dispose(){this.texture.dispose()}}function j_(){const n=new xi(new Uint8Array(1),1,1,Qn,yt);return n.needsUpdate=!0,{texture:n,extent:1,has:!1,cellM:0,bytes:1}}var $t=(n=>(n[n.NoData=0]="NoData",n[n.Tree=10]="Tree",n[n.Shrub=20]="Shrub",n[n.Grass=30]="Grass",n[n.Crop=40]="Crop",n[n.Built=50]="Built",n[n.Bare=60]="Bare",n[n.Snow=70]="Snow",n[n.Water=80]="Water",n[n.Wetland=90]="Wetland",n[n.Mangrove=95]="Mangrove",n[n.Moss=100]="Moss",n))($t||{});$t.NoData+"",$t.Water+"",$t.Built+"",$t.Tree+"",$t.Mangrove+"",$t.Shrub+"",$t.Grass+"",$t.Crop+"",$t.Wetland+"",$t.Moss+"",$t.Bare+"",$t.Snow+"";function Z_(n,e,t,i,a){const s=t*2/e,o=(i+t)/s-.5,r=(a+t)/s-.5,l=Math.floor(o),c=Math.floor(r),h=o-l,d=r-c,p=_=>_<0?0:_>=e?e-1:_,f=p(l),g=p(l+1),v=p(c),m=p(c+1),u=[0,0,0,0],w=[[f,v,(1-h)*(1-d)],[g,v,h*(1-d)],[f,m,(1-h)*d],[g,m,h*d]];for(const[_,y,S]of w){const A=(y*e+_)*4;for(let C=0;C<4;C++)u[C]+=S*(n[A+C]/255)}const x=Math.max(0,1-(u[0]+u[1]+u[2]+u[3]));return{water:u[0],built:u[1],tree:u[2],herb:u[3],bare:x}}function K_(n,e){const t=new xi(n,e,e,wt,yt);return t.minFilter=et,t.magFilter=et,t.wrapS=Tt,t.wrapT=Tt,t.needsUpdate=!0,t}function J_(){const n=()=>K_(new Uint8Array(4),1);return{near:n(),far:n(),nearExtent:1,farExtent:1,has:!1}}class Q_{geometry;arrays={};capacity;attributes={};derived=[];constructor(e,t,i){this.capacity=t;const a=new hc;a.index=e.index;for(const s of Object.keys(e.attributes))a.setAttribute(s,e.attributes[s]);for(const s of i){const o=new Float32Array(t*s.itemSize),r=new mp(o,s.itemSize);r.setUsage(Sf),a.setAttribute(s.name,r),this.arrays[s.name]=o,this.attributes[s.name]=r}a.instanceCount=0,a.boundingSphere=new On(new N,1/0),this.geometry=a}derive(e){const t=new hc;t.index=e.index;for(const i of Object.keys(e.attributes))t.setAttribute(i,e.attributes[i]);for(const i of Object.keys(this.attributes))t.setAttribute(i,this.attributes[i]);return t.instanceCount=this.geometry.instanceCount,t.boundingSphere=new On(new N,1/0),this.derived.push(t),t}upload(e){const t=Math.min(e,this.capacity);for(const i of Object.keys(this.attributes)){const a=this.attributes[i];a.clearUpdateRanges(),a.addUpdateRange(0,t*a.itemSize),a.needsUpdate=!0}this.geometry.instanceCount=t;for(const i of this.derived)i.instanceCount=t}dispose(){this.geometry.dispose();for(const e of this.derived)e.dispose()}}const ey=`
/**
 * The yawCS parameter is (cos yaw, sin yaw), already evaluated.
 *
 * The overloads below take the angle instead and are the ones to reach for
 * first. Take this one when a vertex shader needs the instance's rotation more
 * than once -- to place the vertex, to rotate its normal, to point something
 * else in the instance's own direction -- because a transcendental pair per
 * vertex per use is a real cost on a field of tens of thousands of instances
 * and no compiler will hoist it out of a per-vertex expression for you.
 */
vec3 instanceToWorld(vec3 local, vec3 origin, vec2 yawCS, vec3 scale) {
  vec3 s = local * scale;
  return origin + vec3(yawCS.x * s.x + yawCS.y * s.z, s.y, -yawCS.y * s.x + yawCS.x * s.z);
}

/** The same rotation applied to a direction, for normals. Yaw is orthonormal,
 *  so this is the inverse transpose as well and needs no correction. */
vec3 instanceRotate(vec3 v, vec2 yawCS) {
  return vec3(yawCS.x * v.x + yawCS.y * v.z, v.y, -yawCS.y * v.x + yawCS.x * v.z);
}

vec3 instanceToWorld(vec3 local, vec3 origin, float yaw, vec3 scale) {
  return instanceToWorld(local, origin, vec2(cos(yaw), sin(yaw)), scale);
}

vec3 instanceRotate(vec3 v, float yaw) {
  return instanceRotate(v, vec2(cos(yaw), sin(yaw)));
}

/**
 * Where a collapsed instance is sent.
 *
 * All of its vertices land on the same clip-space point, so every triangle is
 * degenerate and the rasteriser drops it before it costs a fragment. It is
 * outside the clip volume as well, which is belt and braces: a driver that
 * rasterises zero-area triangles still has nothing to do here.
 */
const vec4 INSTANCE_CULLED = vec4(2.0, 2.0, 2.0, 1.0);
`,Ds=Math.PI*2,Gs=[{name:"broadleaf",crownBase:.38,trunkTop:.48,trunkR0:.13,trunkR1:.075,profile:[.3,.7,.93,1,.86,.96,.82,.61,.42,.16],lobes:[{n:2,amp:.2,phase:.72,twist:.9},{n:3,amp:.22,phase:2.1,twist:-1.4},{n:5,amp:.1,phase:4.02,twist:2.2},{n:7,amp:.06,phase:1.24,twist:-2.8}]},{name:"conifer",crownBase:.14,trunkTop:.26,trunkR0:.2,trunkR1:.11,profile:[.84,1,.79,.9,.66,.76,.52,.6,.37,.43,.21,.25,.06],lobes:[{n:3,amp:.1,phase:1.5,twist:1.1},{n:5,amp:.09,phase:3.3,twist:-2},{n:8,amp:.06,phase:.4,twist:3}]}],ty=0,ny=1,pi=[{name:"near",sides:20,rings:11,trunkSides:8,farM:260},{name:"mid",sides:14,rings:8,trunkSides:5,farM:600},{name:"far",sides:9,rings:4,trunkSides:4,farM:1/0}];function iy(n,e){const t=n.length,i=Math.min(Math.max(e,0),1)*(t-1),a=Math.min(t-2,Math.floor(i)),s=i-a,o=s*s*(3-2*s);return n[a]*(1-o)+n[a+1]*o}function ay(n,e,t){let i=0;for(const a of n.lobes)i+=a.amp*Math.sin(a.n*e+a.phase+a.twist*t);return iy(n.profile,t)*(1+i)}const ki=5;function ld(n,e,t,i,a){let s=0;for(let o=0;o<ki;o++){const r=e+((o+.5)/ki-.5)*i;for(let l=0;l<ki;l++){const c=t+((l+.5)/ki-.5)*a;s+=ay(n,r,Math.min(1,Math.max(0,c)))}}return s/(ki*ki)}function cd(n,e,t,i){let a=0;for(let s=t;s<i;s+=3){const o=e[s]*3,r=e[s+1]*3,l=e[s+2]*3,c=n[o],h=n[o+1],d=n[o+2],p=n[r],f=n[r+1],g=n[r+2],v=n[l],m=n[l+1],u=n[l+2];a+=c*(f*u-g*m)-h*(p*u-g*v)+d*(p*m-f*v)}return a/6}const sy=96,oy=48,ch=new Map;function ry(n){const e=ch.get(n.name);if(e!==void 0)return e;const t=hd(n,sy,oy,1),i=cd(t.pos,t.idx,0,t.idx.length);return ch.set(n.name,i),i}function hd(n,e,t,i){const a=Ds/e,s=1/t,o=1-n.crownBase,r=new Float32Array((e*t+2)*3);r[0]=0,r[1]=n.crownBase,r[2]=0;for(let d=0;d<t;d++){const p=(d+.5)/t;for(let f=0;f<e;f++){const g=f*a,v=ld(n,g,p,a,s)*i,m=(1+d*e+f)*3;r[m]=Math.cos(g)*v,r[m+1]=n.crownBase+o*p,r[m+2]=Math.sin(g)*v}}const l=e*t+1;r[l*3]=0,r[l*3+1]=1,r[l*3+2]=0;const c=[];for(let d=0;d<e;d++)c.push(0,1+d,1+(d+1)%e);for(let d=0;d+1<t;d++){const p=1+d*e,f=1+(d+1)*e;for(let g=0;g<e;g++){const v=(g+1)%e;c.push(p+g,f+g,f+v,p+g,f+v,p+v)}}const h=1+(t-1)*e;for(let d=0;d<e;d++)c.push(h+d,l,h+(d+1)%e);return{pos:r,idx:c}}function ly(n,e){const t=e*Math.PI/n;return t===0?1:Math.max(0,Math.sin(t)/t)}const cy=3;function ud(n,e){const t=Gs[n],i=pi[e],{sides:a,rings:s,trunkSides:o}=i,r=hd(t,a,s,1),l=cd(r.pos,r.idx,0,r.idx.length),c=l>0?Math.sqrt(ry(t)/l):1,h=[],d=[],p=[],f=ly(a,cy),g=(P,I,F,k,H,V)=>(h.push(P,I,F),d.push(k,H,V,k>.5?f:0),h.length/3-1),v=(P,I)=>{const F=[];for(let k=0;k<o;k++){const H=k/o,V=H*Ds;F.push(g(Math.cos(V)*I,P,Math.sin(V)*I,0,0,H))}return F},m=(P,I)=>{for(let F=0;F<P.length;F++){const k=(F+1)%P.length;p.push(P[F],I[F],I[k],P[F],I[k],P[k])}};m(v(0,t.trunkR0),v(t.trunkTop,t.trunkR1));const u=p.length,w=Ds/a,x=1/s,_=1-t.crownBase,y=g(0,t.crownBase,0,1,0,0),S=[];for(let P=0;P<s;P++){const I=(P+.5)/s,F=[];for(let k=0;k<a;k++){const H=k/a,V=H*Ds,z=ld(t,V,I,w,x)*c;F.push(g(Math.cos(V)*z,t.crownBase+_*I,Math.sin(V)*z,1,I,H))}S.push(F)}const A=g(0,1,0,1,1,0);for(let P=0;P<a;P++)p.push(y,S[0][P],S[0][(P+1)%a]);for(let P=0;P+1<s;P++)m(S[P],S[P+1]);const C=S[s-1];for(let P=0;P<a;P++)p.push(C[P],A,C[(P+1)%a]);const M=new Float32Array(h),b=new Uint16Array(p),T=new Float32Array(M.length);for(let P=0;P<b.length;P+=3){const I=b[P]*3,F=b[P+1]*3,k=b[P+2]*3,H=M[F]-M[I],V=M[F+1]-M[I+1],z=M[F+2]-M[I+2],j=M[k]-M[I],ee=M[k+1]-M[I+1],oe=M[k+2]-M[I+2],Se=V*oe-z*ee,Ve=z*j-H*oe,Ne=H*ee-V*j;for(const Le of[I,F,k])T[Le]+=Se,T[Le+1]+=Ve,T[Le+2]+=Ne}for(let P=0;P<T.length;P+=3){const I=Math.hypot(T[P],T[P+1],T[P+2])||1;T[P]/=I,T[P+1]/=I,T[P+2]/=I}return{position:M,normal:T,aTree:new Float32Array(d),index:b,triangles:b.length/3,crownIndexStart:u}}function hy(n){return Math.min(1,Math.max(.08,n/12))||.08}const uy=`
// Per-instance crown lobes. The baked outline is one shape rotated by the
// instance yaw, which is enough variety in a hedgerow and not enough in a
// stand seen from above; this rotates and reshapes it per tree.
const float LOBE_A2 = 0.11;
const float LOBE_A3 = 0.08;

float crownLobe(float ang, float t, float seed) {
  return LOBE_A2 * sin(2.0 * ang + seed * 6.2831853 + t * 1.7)
       + LOBE_A3 * sin(3.0 * ang + seed * 15.7079633 - t * 2.3);
}

// Wind.
//
// A static forest is the loudest artificial signal in the frame after the
// silhouette, and this is the cheapest thing on the whole list: three sines in
// the vertex shader, no new pass, no new buffer.
//
// The two weight pairs each sum to one and the height weight is at most one, so
// |windSway| <= 1 BY CONSTRUCTION rather than by measurement, and the caller
// multiplies by WIND_MAX_LOCAL crown radii. That is what makes "no vertex
// travels more than a fixed fraction of the crown radius" an assertion about
// the code instead of a hope about the numbers.
const float WIND_W_A = 0.68;
const float WIND_W_B = 0.32;
const float WIND_FREQ_A = 1.15;
const float WIND_FREQ_B = 2.70;
const float WIND_GUST_BASE = 0.72;
const float WIND_GUST_AMP = 0.28;
const float WIND_FREQ_GUST = 0.23;

/** Sway at the crown top, as a fraction of the instance's crown radius. */
const float WIND_MAX_LOCAL = 0.14;

/**
 * Sway of a vertex, -1 to 1, for a unit tree.
 *
 * The parameter y is the vertex height, 0 at the foot of the trunk and 1 at
 * the apex; the square is what keeps the trunk planted while the crown moves,
 * and it makes the sway exactly zero at the base rather than nearly zero.
 */
float windSway(float y, float seed, float t, float gustPhase) {
  float w = clamp(y, 0.0, 1.0);
  w = w * w;
  float a = t * WIND_FREQ_A + seed * 6.2831853;
  float b = t * WIND_FREQ_B + seed * 15.7079633;
  float s = WIND_W_A * sin(a) + WIND_W_B * sin(b);
  // The gust is a WAVE crossing the wood rather than per-tree jitter: its phase
  // runs along the wind direction (the caller supplies it from the instance's
  // own position), so a stand ripples from one side to the other instead of
  // every tree breathing on its own.
  float gust = WIND_GUST_BASE + WIND_GUST_AMP * sin(t * WIND_FREQ_GUST - gustPhase);
  return w * s * gust;
}
`,rl=16,ln=256,dy=.12,fy=.85,py=4,my=1.5,gy=6.5,vy=10;function wy(n){const e=ao(n.cls,n.lanes,n.flags)*.5;return n.cls>=vy?e+my:Math.max(gy,e+py)}const Ps=[{name:"broadleaf",minHeightM:9,maxHeightM:19,crownRatio:.38,conifer:0,tint:.3},{name:"street",minHeightM:6,maxHeightM:12,crownRatio:.34,conifer:.1,tint:.62},{name:"conifer",minHeightM:12,maxHeightM:28,crownRatio:.24,conifer:1,tint:.08},{name:"scrub",minHeightM:3,maxHeightM:7,crownRatio:.5,conifer:0,tint:.85}];function li(n,e,t){let i=Math.imul(n,668265261)^Math.imul(e,374761393)^Math.imul(t,2654435761);return i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>13,695872825),((i^i>>>16)>>>0)/4294967296}const xy=528734635,_y=1541459225,yy=2600822924,by=1359893119,My=2773480762,Sy=1013904242,Ey=3144134277,hh=.92;class Ls{ax;az;bx;bz;pad;owner;cellM;minX;minZ;nx;nz;start;items;segments;constructor(e,t,i=32,a){this.cellM=i;let s=0;for(const v of e)s+=v.pts.length/2-1;this.segments=s,this.ax=new Float32Array(s),this.az=new Float32Array(s),this.bx=new Float32Array(s),this.bz=new Float32Array(s),this.pad=new Float32Array(s),this.owner=new Int32Array(s);let o=1/0,r=-1/0,l=1/0,c=-1/0,h=0;for(let v=0;v<e.length;v++){const m=e[v],u=t(m);for(let w=2;w<m.pts.length;w+=2){const x=m.pts[w-2],_=m.pts[w-1],y=m.pts[w],S=m.pts[w+1];this.ax[h]=x,this.az[h]=_,this.bx[h]=y,this.bz[h]=S,this.pad[h]=u,this.owner[h]=a?a(m,v):v,h++;const A=Math.min(x,y)-u,C=Math.max(x,y)+u,M=Math.min(_,S)-u,b=Math.max(_,S)+u;A<o&&(o=A),C>r&&(r=C),M<l&&(l=M),b>c&&(c=b)}}s===0&&(o=0,r=0,l=0,c=0),this.minX=o,this.minZ=l,this.nx=Math.max(1,Math.ceil((r-o)/i)+1),this.nz=Math.max(1,Math.ceil((c-l)/i)+1);const d=this.nx*this.nz,p=new Int32Array(d+1),f=v=>{for(let m=0;m<s;m++){const u=this.pad[m],w=this.col(Math.min(this.ax[m],this.bx[m])-u),x=this.col(Math.max(this.ax[m],this.bx[m])+u),_=this.row(Math.min(this.az[m],this.bz[m])-u),y=this.row(Math.max(this.az[m],this.bz[m])+u);for(let S=_;S<=y;S++)for(let A=w;A<=x;A++)v(S*this.nx+A,m)}};f(v=>{p[v+1]++});for(let v=0;v<d;v++)p[v+1]+=p[v];this.start=p,this.items=new Int32Array(p[d]);const g=new Int32Array(d);f((v,m)=>{this.items[this.start[v]+g[v]++]=m})}rawCol(e){return Math.floor((e-this.minX)/this.cellM)}rawRow(e){return Math.floor((e-this.minZ)/this.cellM)}col(e){const t=Math.floor((e-this.minX)/this.cellM);return t<0?0:t>=this.nx?this.nx-1:t}row(e){const t=Math.floor((e-this.minZ)/this.cellM);return t<0?0:t>=this.nz?this.nz-1:t}distSq(e,t,i){const a=this.ax[e],s=this.az[e],o=this.bx[e]-a,r=this.bz[e]-s,l=o*o+r*r;let c=l>0?((t-a)*o+(i-s)*r)/l:0;c=c<0?0:c>1?1:c;const h=t-(a+c*o),d=i-(s+c*r);return h*h+d*d}blocked(e,t){const i=this.row(t)*this.nx+this.col(e);for(let a=this.start[i];a<this.start[i+1];a++){const s=this.items[a],o=this.pad[s];if(this.distSq(s,e,t)<=o*o)return!0}return!1}blockedExcept(e,t,i){const a=this.row(t)*this.nx+this.col(e);for(let s=this.start[a];s<this.start[a+1];s++){const o=this.items[s];if(this.owner[o]===i)continue;const r=this.pad[o];if(this.distSq(o,e,t)<=r*r)return!0}return!1}nearest(e,t){const i=this.row(t)*this.nx+this.col(e);let a=1/0;for(let s=this.start[i];s<this.start[i+1];s++){const o=this.distSq(Ty(this.items,s),e,t);o<a&&(a=o)}return a===1/0?1/0:Math.sqrt(a)}nearestSegment(e,t,i){const a=this.rawCol(e),s=this.rawRow(t),o=Math.ceil(i/this.cellM)+1;let r=i*i,l=-1;const c=(m,u)=>{if(m<0||u<0||m>=this.nx||u>=this.nz)return;const w=u*this.nx+m;for(let x=this.start[w];x<this.start[w+1];x++){const _=this.items[x],y=this.distSq(_,e,t);(y<r||y===r&&l>=0&&_<l)&&(r=y,l=_)}};for(let m=0;m<=o;m++){if(m===0)c(a,s);else{for(let u=-m;u<=m;u++)c(a+u,s-m),c(a+u,s+m);for(let u=-m+1;u<=m-1;u++)c(a-m,s+u),c(a+m,s+u)}if(l>=0&&r<=(m*this.cellM)**2)break}if(l<0)return null;const h=this.ax[l],d=this.az[l],p=this.bx[l]-h,f=this.bz[l]-d,g=p*p+f*f;let v=g>0?((e-h)*p+(t-d)*f)/g:0;return v=v<0?0:v>1?1:v,{road:this.owner[l],segment:l,distanceM:Math.sqrt(r),x:h+v*p,z:d+v*f,dirX:g>0?p/Math.sqrt(g):1,dirZ:g>0?f/Math.sqrt(g):0}}}function Ty(n,e){return n[e]}const ma=4;class Ay{bits;n;extentM;constructor(e,t){this.extentM=t,this.n=Math.max(1,Math.ceil(t*2/ma)),this.bits=new Uint32Array(Math.ceil(this.n*this.n/32)),this.add(e)}add(e){const t=this.extentM;for(const i of e){const a=i.ring;if(a.length<6)continue;let s=1/0,o=-1/0,r=1/0,l=-1/0;for(let f=0;f<a.length;f+=2)a[f]<s&&(s=a[f]),a[f]>o&&(o=a[f]),a[f+1]<r&&(r=a[f+1]),a[f+1]>l&&(l=a[f+1]);const c=this.index(s),h=this.index(o),d=this.index(r),p=this.index(l);if(!(h<0||p<0||c>=this.n||d>=this.n)){for(let f=0,g=a.length-2;f<a.length;g=f,f+=2){const v=a[f]-a[g],m=a[f+1]-a[g+1],u=Math.max(1,Math.ceil(Math.hypot(v,m)/(ma*.5)));for(let w=0;w<=u;w++){const x=this.index(a[g]+v*w/u),_=this.index(a[g+1]+m*w/u);x>=0&&_>=0&&x<this.n&&_<this.n&&this.set(x,_)}}for(let f=Math.max(0,d);f<=Math.min(this.n-1,p);f++){const g=-t+(f+.5)*ma;for(let v=Math.max(0,c);v<=Math.min(this.n-1,h);v++){const m=-t+(v+.5)*ma;Ry(a,m,g)&&this.set(v,f)}}}}}index(e){return Math.floor((e+this.extentM)/ma)}set(e,t){const i=t*this.n+e;this.bits[i>>>5]|=1<<(i&31)}occupied(e,t){const i=this.index(e),a=this.index(t);if(i<0||a<0||i>=this.n||a>=this.n)return!1;const s=a*this.n+i;return(this.bits[s>>>5]&1<<(s&31))!==0}}function Ry(n,e,t){let i=!1;for(let a=0,s=n.length-2;a<n.length;s=a,a+=2){const o=n[a+1],r=n[s+1];if(o>t!=r>t){const l=(t-o)/(r-o);e<n[a]+l*(n[s]-n[a])&&(i=!i)}}return i}class Cy{parts=[];add(e){this.parts.push(e)}blocked(e,t){for(const i of this.parts)if(i.blocked(e,t))return!0;return!1}}function Dy(n,e,t,i,a,s=[]){const o=n.spacingM??rl,{mask:r,heightAt:l,roads:c,footprints:h}=n,d=Math.floor(e/o)-1,p=Math.floor(i/o)+1,f=Math.floor(t/o)-1,g=Math.floor(a/o)+1;for(let v=f;v<=g;v++)for(let m=d;m<=p;m++){const u=(m+.5+(li(m,v,xy)-.5)*hh)*o,w=(v+.5+(li(m,v,_y)-.5)*hh)*o;if(u<e||u>=i||w<t||w>=a)continue;const x=Z_(r.rgba,r.n,r.extentM,u,w);if(x.water>dy||x.built>fy||li(m,v,yy)>=x.tree||h&&h.occupied(u,w)||c&&c.blocked(u,w))continue;const _=Math.min(Ps.length-1,Math.floor(li(m,v,by)*Ps.length)),y=Ps[_],S=li(m,v,My),A=y.minHeightM+(y.maxHeightM-y.minHeightM)*S,C=A*y.crownRatio*(.78+.5*x.tree);s.push({x:u,y:l(u,w),z:w,heightM:A,radiusM:C,yaw:li(m,v,Sy)*Math.PI*2,species:_,tint:li(m,v,Ey)})}return s}const Py=2200,Ly=1100,uh=1400,Iy=64,Fy=.5,Uy=1.15,Ny=.22;pi.map((n,e)=>Math.max(...Gs.map((t,i)=>ud(i,e).triangles)));const dd=`
precision highp float;
in vec3 position;
in vec3 normal;
// x crown flag, y canopy depth, z angle 0..1, w this level's lobe gain.
in vec4 aTree;
// Two vec4s, not a mat4: see render/instanced.ts.
in vec4 iPos;    // xyz world origin, w yaw
in vec4 iShape;  // x crown radius m, y height m, z shape seed 0..1, w tint 0..1

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec3 uCameraPos;
uniform vec2 uFade;
// xy: the unit direction the wind blows TOWARD. z: strength, 0 to 1.
uniform vec3 uWind;
uniform float uTime;

${ey}
${uy}

const float LEAN_MAX = ${Ny};
/** Radians of gust phase per metre downwind: a ~90 m gust front. */
const float GUST_WAVE_PER_M = 0.07;

float hash13(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.yzx + 33.33);
  return fract((p.x + p.y) * p.z);
}

struct Placed {
  vec3 world;
  /** (cos, sin) of the instance yaw, kept so the beauty pass can reuse it. */
  vec2 yawCS;
  vec3 scale;
  bool culled;
};

/**
 * Everything BOTH passes need, and nothing either of them does not.
 *
 * The depth copy is drawn three times a frame -- two shadow cascades and the
 * ambient-occlusion prepass -- against the beauty pass's one, so the shading
 * normal and the facet hash are computed by the beauty vertex shader instead of
 * here. That is three quarters of the invocations that no longer pay for a
 * normalise and a hash they were going to throw away.
 */
Placed placeVertex() {
  Placed o;
  o.world = vec3(0.0);
  o.yawCS = vec2(1.0, 0.0);
  o.scale = vec3(1.0);
  float d = distance(iPos.xyz, uCameraPos);
  // Shrunk to nothing over the last stretch rather than popped out. At the far
  // end of the fade a tree is two or three pixels tall, so the shrink is
  // invisible, and it is what keeps the edge of the field from reading as a
  // circle drawn around the aircraft.
  float fade = 1.0 - smoothstep(uFade.x, uFade.y, d);
  o.culled = fade <= 0.0;
  if (o.culled) return o;

  float crown = aTree.x;
  float seed = iShape.z;
  vec3 p = position;
  o.yawCS = vec2(cos(iPos.w), sin(iPos.w));

  // Per-tree crown lobes, on top of the baked ones, attenuated by aTree.w so a
  // level only carries the harmonics its ring count can actually resolve.
  // Radial, so a shared vertex moves identically from every triangle that owns
  // it and the crown stays closed.
  float lobe = crownLobe(aTree.z * 6.2831853, aTree.y, seed) * aTree.w;
  p.xz *= 1.0 + lobe * crown;

  // Lean. A crown centred exactly over its trunk is the other half of why a
  // stand of instances reads as one asset repeated: real crowns grow toward the
  // light and away from their neighbours. Zero at the crown base, so the crown
  // stays attached to the trunk it grew out of. The direction is the yaw's own
  // cosine and sine, which is a free uniformly random direction: the yaw is
  // already random per tree and the pair is already in a register.
  p.xz += o.yawCS * (LEAN_MAX * aTree.y * aTree.y * crown);

  o.scale = vec3(iShape.x, iShape.y, iShape.x) * fade;
  o.world = instanceToWorld(p, iPos.xyz, o.yawCS, o.scale);
  // Wind, applied in WORLD space so the sway direction does not have to be
  // rotated into every instance's own frame. |windSway| <= 1 by construction
  // and uWind.z is clamped to 0..1 on the way in, so no vertex ever travels
  // further than WIND_MAX_LOCAL crown radii.
  float gustPhase = dot(iPos.xz, uWind.xy) * GUST_WAVE_PER_M;
  float sway = windSway(p.y, seed, uTime, gustPhase);
  o.world.xz += uWind.xy * (sway * uWind.z * WIND_MAX_LOCAL * o.scale.x);
  return o;
}
`,ky=`
${dd}
out vec3 vNormal;
out vec3 vWorld;
out vec2 vTree;
out float vViewDist;
out float vTint;
out float vLeaf;

void main() {
  Placed pl = placeVertex();
  if (pl.culled) { gl_Position = INSTANCE_CULLED; return; }
  // Inverse transpose of a diagonal scale is its reciprocal; the yaw is
  // orthonormal and needs no correction.
  vNormal = normalize(instanceRotate(normal / max(pl.scale, vec3(1e-4)), pl.yawCS));
  // Facet-scale break-up, hashed off the vertex's OWN base position so shared
  // vertices agree. Carries the crown at distances where the fragment shader's
  // noise is switched off.
  vLeaf = 0.72 + 0.56 * hash13(position * 13.7 + iShape.z * 331.0);
  vWorld = pl.world;
  vTree = aTree.xy;
  vTint = iShape.w;
  vViewDist = distance(pl.world, uCameraPos);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pl.world, 1.0);
}
`,Oy=`
${dd}
void main() {
  Placed pl = placeVertex();
  gl_Position = pl.culled ? INSTANCE_CULLED
              : projectionMatrix * modelViewMatrix * vec4(pl.world, 1.0);
}
`,zy=`precision highp float;
out vec4 c;
void main() { c = vec4(1.0); }`,By=`
precision highp float;
in vec3 vNormal;
in vec3 vWorld;
in vec2 vTree;
in float vViewDist;
in float vTint;
in float vLeaf;
out vec4 fragColor;

// Aerial perspective only, the same short march the terrain and the buildings
// use. Trees without it are a saturated green band against a hazed hillside.
#define ATMO_STEPS 7
#define ATMO_SUN_STEPS 2
${_i}
${Js}
${Qs}
${eo}

uniform vec3  uCameraPos;
uniform float uSunSurface;
uniform vec3  uMoonDir;
uniform vec3  uMoonLight;
uniform float uNight;
uniform vec3  uNightGlow;

/** How far the leaf-cluster noise is allowed to tilt the shading normal. */
const float LEAF_BUMP = 0.42;

float hash13f(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.yzx + 33.33);
  return fract((p.x + p.y) * p.z);
}

/**
 * Trilinear value noise AND its analytic gradient, from one set of corners.
 *
 * The gradient is the product here: it is what perturbs the shading normal, and
 * the alternative -- four separate noise lookups differenced against each other
 * -- costs four times the hashes for a worse answer. Returned as
 * (value, d/dx, d/dy, d/dz) with the derivative of the smoothstep folded in.
 */
vec4 vnoise3d(vec3 p) {
  vec3 i = floor(p);
  vec3 f = p - i;
  vec3 u = f * f * (3.0 - 2.0 * f);
  vec3 du = 6.0 * f * (1.0 - f);

  float a = hash13f(i);
  float b = hash13f(i + vec3(1.0, 0.0, 0.0));
  float c = hash13f(i + vec3(0.0, 1.0, 0.0));
  float d = hash13f(i + vec3(1.0, 1.0, 0.0));
  float e = hash13f(i + vec3(0.0, 0.0, 1.0));
  float g = hash13f(i + vec3(1.0, 0.0, 1.0));
  float h = hash13f(i + vec3(0.0, 1.0, 1.0));
  float k = hash13f(i + vec3(1.0, 1.0, 1.0));

  float k1 = b - a;
  float k2 = c - a;
  float k3 = e - a;
  float k4 = a - b - c + d;
  float k5 = a - c - e + h;
  float k6 = a - b - e + g;
  float k7 = -a + b + c - d + e - g - h + k;

  float v = a + k1 * u.x + k2 * u.y + k3 * u.z
          + k4 * u.x * u.y + k5 * u.y * u.z + k6 * u.z * u.x
          + k7 * u.x * u.y * u.z;
  vec3 grad = du * vec3(
    k1 + k4 * u.y + k6 * u.z + k7 * u.y * u.z,
    k2 + k4 * u.x + k5 * u.z + k7 * u.z * u.x,
    k3 + k5 * u.y + k6 * u.x + k7 * u.x * u.y);
  return vec4(v, grad);
}

void main() {
  vec3 n = normalize(vNormal);
  float crown = step(0.5, vTree.x);
  // Depth into the canopy: 0 at the crown base, 1 at the apex. The trunk is
  // given a fixed mid value; it is inside the crown's shadow either way.
  float exposure = crown > 0.5 ? vTree.y : 0.35;

  // Leaf break-up, switched off past ~430 m where a whole tree is a few pixels
  // and the detail would only alias. There is no temporal antialiasing to hide
  // shimmer, so anything at this scale has to converge with distance rather
  // than be filtered later.
  float near = smoothstep(430.0, 140.0, vViewDist);
  float fine = 0.5;
  if (crown > 0.5 && near > 0.0) {
    vec4 a = vnoise3d(vWorld * 0.62);
    vec4 b = vnoise3d(vWorld * 2.35);
    fine = a.x * 0.62 + b.x * 0.38;
    // Leaf clusters as a NORMAL perturbation rather than as a colour. Foliage
    // is thousands of small surfaces at random orientations; a crown with one
    // smooth normal over it shades like a ball whatever colour it is painted,
    // and that is most of what reads as a plastic tree.
    n = normalize(n - (a.yzw + b.yzw * 0.35) * (LEAF_BUMP * near));
  }

  // Three scales of variation, deliberately: the facet term is the vertex hash
  // interpolated across the triangle and costs nothing, the fine term is the
  // noise above, and the exposure term says where in its own crown this patch
  // is. A canopy with only one of them reads as one painted surface.
  float upFace = n.y * 0.5 + 0.5;
  float sunlit = clamp(exposure * 0.65 + upFace * 0.35, 0.0, 1.0);
  float shade = mix(0.5, vLeaf, 0.60) * 0.40
              + mix(0.5, fine, near) * 0.30
              + sunlit * 0.30;

  // Two greens per species position rather than a palette: the species tint
  // picks where in the ramp a tree sits, the break-up moves each patch of its
  // own crown around that point.
  vec3 leafDark = vec3(0.014, 0.036, 0.011);
  vec3 leafLight = vec3(0.088, 0.134, 0.034);
  vec3 leaf = mix(leafDark, leafLight, clamp(vTint * 0.55 + shade * 0.60 - 0.06, 0.0, 1.0));
  // The inside of a crown is BROWNER as well as darker: bare wood, last year's
  // growth and leaves that never see the sun. Darkening alone leaves the whole
  // crown one hue and that is the tell.
  leaf = mix(leaf, vec3(0.030, 0.028, 0.014), (1.0 - exposure) * 0.34 * crown);
  // A few leaves in every patch are turned edge-on and catch the sky instead of
  // the sun.
  leaf = mix(leaf, vec3(0.115, 0.135, 0.058), smoothstep(0.70, 0.96, fine) * 0.35 * near);
  // Autumn is not modelled, but a stand where every tree is the same green is
  // the thing that reads as one asset repeated, so a few per cent of them are
  // pulled toward olive.
  leaf = mix(leaf, vec3(0.105, 0.086, 0.026), smoothstep(0.93, 1.0, vTint));
  vec3 bark = vec3(0.038, 0.028, 0.020) * (0.7 + 0.6 * shade);
  vec3 albedo = mix(bark, leaf, crown);

  // Depth into the canopy, as occlusion. A crown's underside sees almost no
  // sky and this is far cheaper than asking the screen-space pass to resolve
  // something a few metres across.
  float canopyAo = mix(0.46, 1.0, exposure);

  float ndl = max(0.0, dot(n, uSunDir));
  vec3 sunT = sunTransmittance(atmoOrigin(max(0.0, vWorld.y)), uSunDir, uTurbidity);
  vec3 sunE = uSunColor * uSunIntensity * uSunSurface * sunT;
  float sunVis = sunVisibility(vWorld, n, uSunDir, vViewDist);

  // Transmission through the leaf. A leaf is thin and green, so the light that
  // comes through the far side of a crown is a large fraction of what a tree
  // looks like against a low sun, and leaving it out is most of the difference
  // between a tree and a green rock.
  float back = max(0.0, dot(-n, uSunDir));
  vec3 through = sunE * pow(back, 1.6) * sunVis * crown * 0.7 * vec3(0.62, 1.0, 0.30);

  vec3 ambient = occludedSkyIrradiance(n) * canopyAo;
  vec3 moon = uMoonLight * uSunSurface * max(0.0, dot(n, uMoonDir));

  vec3 lit = albedo * (sunE * ndl * sunVis + ambient + moon) + albedo * through;
  // Skyglow, so a tree in a lit city at night is dark rather than a black
  // cut-out. No street lamps on the canopy: the lamp field in terrain.ts is a
  // ground pattern and stamping it onto a crown would light the treetops.
  lit += albedo * uNightGlow * uNight * 0.35;

  vec3 ro = atmoOrigin(uCamAltitude);
  vec3 rd = normalize(vWorld - uCameraPos);
  vec3 trans;
  vec3 inscatter = atmosphere(ro, rd, vViewDist, trans);
  fragColor = vec4(lit * trans + inscatter, 1.0);
}
`,Hy=(n,e)=>`${n},${e}`,Gy=n=>n-Math.floor(n);class Vy{group=new jn;depthScene=new Fn;uniforms;stats={count:0,tiles:0,triangles:0,lodCounts:pi.map(()=>0),rebuildMs:0,clipped:!1};field;buckets=[];lodFarM;tiles=new Map;radiusM;extentM;atX=-1e9;atZ=-1e9;packedX=0;packedZ=0;constructor(e,t,i){this.field=e,this.radiusM=i?Ly:Py,this.extentM=e.mask.extentM;const a=i?Fy:1;this.lodFarM=pi.map(l=>Math.min(l.farM*a,this.radiusM)),this.uniforms={...t,...to(),uCameraPos:{value:new N},uSH:{value:ia([.28,.36,.5],.55,.45)},uFade:{value:new Oe(this.radiusM*.76,this.radiusM)},uWind:{value:new N(1,0,.3)},uTime:{value:0},uSunDir:{value:new N(0,1,0)},uSunColor:{value:new Ee(1,1,1)},uSunIntensity:{value:22},uSunSurface:{value:.105},uMoonDir:{value:new N(0,-1,0)},uMoonLight:{value:new Ee(0,0,0)},uNight:{value:0},uNightGlow:{value:new Ee(0,0,0)},uMieG:{value:.76},uTurbidity:{value:1},uCamAltitude:{value:100},uMultiScatter:{value:.055}};const s=new nn({vertexShader:ky,fragmentShader:By,uniforms:this.uniforms,glslVersion:zt,side:gn}),o={...this.uniforms,uFade:{value:new Oe(uh*.8,uh)}},r=new nn({vertexShader:Oy,fragmentShader:zy,uniforms:o,glslVersion:zt,colorWrite:!1});for(let l=0;l<pi.length;l++){const c=this.capacityFor(l);for(let h=0;h<Gs.length;h++){const d=ud(h,l),p=new At;p.setAttribute("position",new dt(d.position,3)),p.setAttribute("normal",new dt(d.normal,3)),p.setAttribute("aTree",new dt(d.aTree,4)),p.setIndex(new dt(d.index,1));const f=new Q_(p,c,[{name:"iPos",itemSize:4},{name:"iShape",itemSize:4}]);this.buckets.push({form:h,lod:l,field:f,triangles:d.triangles,count:0});const g=new _t(f.geometry,s);g.frustumCulled=!1,g.renderOrder=-1,this.group.add(g);const v=new _t(f.geometry,r);v.frustumCulled=!1,v.layers.enable(za),this.depthScene.add(v)}}}capacityFor(e){const t=e===0?0:this.lodFarM[e-1],i=Math.min(this.lodFarM[e],this.radiusM),a=Math.PI*Math.max(0,i*i-t*t);return Math.max(64,Math.ceil(a/(rl*rl)*Uy))}invalidate(){this.tiles.clear(),this.atX=-1e9,this.atZ=-1e9}update(e,t){const i=Math.floor(e/ln),a=Math.floor(t/ln),s=Math.hypot(e-this.packedX,t-this.packedZ);if(i===this.atX&&a===this.atZ&&s<Iy)return;this.atX=i,this.atZ=a,this.packedX=e,this.packedZ=t;const o=performance.now(),r=this.radiusM,l=Math.ceil(r/ln)+1,c=[];for(let v=a-l;v<=a+l;v++)for(let m=i-l;m<=i+l;m++){const u=m*ln,w=v*ln;if(u+ln<-this.extentM||u>this.extentM||w+ln<-this.extentM||w>this.extentM)continue;const x=Math.max(0,Math.max(u-e,e-(u+ln))),_=Math.max(0,Math.max(w-t,t-(w+ln))),y=x*x+_*_;y>r*r||c.push({key:Hy(m,v),x:u,z:w,d2:y})}c.sort((v,m)=>v.d2-m.d2);for(const v of this.buckets)v.count=0;const h=new Set;let d=0,p=!1;for(const v of c){let m=this.tiles.get(v.key);m||(m=Dy(this.field,v.x,v.z,v.x+ln,v.z+ln),this.tiles.set(v.key,m)),h.add(v.key);for(const u of m){const w=Math.hypot(u.x-e,u.z-t);if(w>r)continue;let x=pi.length-1;for(let M=0;M<this.lodFarM.length;M++)if(w<=this.lodFarM[M]){x=M;break}const _=Ps[u.species].conifer>=.5?ny:ty,y=this.buckets[x*Gs.length+_];if(y.count>=y.field.capacity){p=!0;continue}const S=y.count*4,A=y.field.arrays.iPos,C=y.field.arrays.iShape;A[S]=u.x,A[S+1]=u.y,A[S+2]=u.z,A[S+3]=u.yaw,C[S]=u.radiusM,C[S+1]=u.heightM,C[S+2]=Gy(u.tint*7.13+u.yaw*.6180339),C[S+3]=u.tint,y.count++,d++}}for(const v of this.tiles.keys())h.has(v)||this.tiles.delete(v);let f=0;const g=pi.map(()=>0);for(const v of this.buckets)v.field.upload(v.count),f+=v.count*v.triangles,g[v.lod]+=v.count;this.stats.count=d,this.stats.tiles=h.size,this.stats.triangles=f,this.stats.lodCounts=g,this.stats.rebuildMs=performance.now()-o,this.stats.clipped=this.stats.clipped||p}setWind(e,t){const i=(t+180)*Math.PI/180,a=this.uniforms.uWind.value;a.x=Math.sin(i),a.y=-Math.cos(i),a.z=hy(e)}dispose(){for(const e of this.buckets)e.field.dispose()}}function Yn(n,e,t){let i=(n|0)*668265261;return i=Math.imul(i^(e|0),2246822507),i=Math.imul(i^i>>>13,3266489909),i=Math.imul(i^(t|0),668265261),i^=i>>>16,(i>>>0)/4294967296}const Qe=(n,e)=>Yn(n,e,40503),Xt=(n,e,t)=>n+(e-n)*t,Ko=5,Wy={0:{lo:[.19,.23,.29],hi:[.38,.42,.47],storeyM:3.9,columnM:1.6,win:[.05,.95,.08,.96],glass:.92,roughness:.06,relief:.1,parapetM:.9,f0:.22},1:{lo:[.31,.15,.11],hi:[.54,.31,.23],storeyM:3.1,columnM:3.3,win:[.29,.71,.28,.82],glass:.2,roughness:.86,relief:.75,parapetM:1,f0:.05},2:{lo:[.44,.41,.35],hi:[.68,.64,.55],storeyM:3,columnM:3,win:[.25,.75,.26,.84],glass:.22,roughness:.78,relief:.5,parapetM:.7,f0:.05},3:{lo:[.31,.31,.3],hi:[.58,.57,.55],storeyM:3.5,columnM:2.4,win:[.13,.87,.24,.78],glass:.45,roughness:.62,relief:.55,parapetM:1.1,f0:.14},4:{lo:[.42,.39,.34],hi:[.63,.59,.52],storeyM:4.2,columnM:3.6,win:[.3,.7,.24,.84],glass:.18,roughness:.72,relief:.8,parapetM:1.4,f0:.05}},ci={storeyM:2.85,columnM:4.3,win:[.23,.77,.3,.8],relief:.3,storeyJitter:.1,columnJitter:.13,winJitter:.035},Jo=.55,Xy=11,Qo=[12,30,70],$y=[[.02,.34,.34,.18,.12],[.08,.34,.24,.24,.1],[.34,.14,.08,.3,.14],[.6,.02,.02,.25,.11]],dh={0:[1,1,1,1,1],1:[.25,1.7,1.7,.8,.5],2:[2.2,.7,.4,1.2,1.1],3:[.2,1.2,.6,2.2,.2],4:[1.2,1.1,1.5,.8,.5],5:[.4,.8,.5,.9,3],6:[3.2,.05,.05,1,.7]};function qy(n){for(let e=0;e<Qo.length;e++)if(n<Qo[e])return e;return Qo.length}function Yy(n,e,t){const i=$y[qy(e)],a=dh[n]??dh[0];let s=0;const o=new Array(Ko);for(let l=0;l<Ko;l++)o[l]=i[l]*a[l],s+=o[l];let r=Qe(t,17)*s;for(let l=0;l<Ko;l++)if(r-=o[l],r<=0)return l;return 3}function jy(n,e,t){return e===1?0:e===2||e===6?1:e===3||e===4||e===5?2:t>=30||n===0||n===3?1:n===1||n===2?0:2}function er(n,e,t){let i=Math.abs(n-e);i>12&&(i=24-i);const a=Math.min(1,i/t);return 1-a*a*(3-2*a)}function Zy(n){const e=(n%24+24)%24,t=.25+.75*Math.max(er(e,21,7),0),i=.12+.88*Math.max(er(e,18.5,6.5),0),a=.08+.62*Math.max(er(e,19,5.5),0);return{residential:t,office:i,other:a}}const Ky=7,Ta=Ky*4,fd=Ta/2,pd=32;function Jy(n){const e=Math.max(0,Math.min(1,n/pd)),t=Math.round(e*65535);return[t&255,t>>8&255]}function Qy(n,e,t){const i=Yy(n,e,t),a=Wy[i],s=n===1&&e<=Xy?1:0,o=Qe(t,33),r=Qe(t,49)-.5,l=Qe(t,50)-.5,c=Qe(t,51)-.5,h=1+.14*(Qe(t,52)-.5),d=[dn(Xt(a.lo[0],a.hi[0],o)*h+.035*r),dn(Xt(a.lo[1],a.hi[1],o)*h+.035*l),dn(Xt(a.lo[2],a.hi[2],o)*h+.035*c)],p=(s?ci.storeyM:a.storeyM)*(1+(s?ci.storeyJitter:.1)*(Qe(t,65)-.5)),f=(s?ci.columnM:a.columnM)*(1+(s?ci.columnJitter:.18)*(Qe(t,66)-.5)),g=Math.min(1,Math.max(0,(e-20)/80)),v=(s?ci.winJitter:.06)*(Qe(t,67)-.5),m=s?ci.win:a.win,u=[dn(Xt(m[0],m[0]*.45,g)+v),dn(Xt(m[1],1-(1-m[1])*.45,g)-v),dn(m[2]+v),dn(m[3]-v*.5)],w=dn(a.glass*(.82+.36*Qe(t,68))*(1+.55*g)),x=fh+Math.floor(Qe(t,88)*(ph-fh+1)),_=Math.floor(Qe(t,89)*ph)%x,y=jy(i,n,e),S=y===1,A=mh[n]??mh[0],C=dn(A*(.55+.9*Qe(t,97))+.35*Math.min(1,Math.max(0,(e-10)/40))),M=Math.min(tb,Math.max(eb,p*Xt(1.04,1.55,C)*(1+.1*(Qe(t,98)-.5))));return{family:i,colour:d,roughness:dn(a.roughness*(1+.2*(Qe(t,69)-.5))),f0:a.f0,storeyM:p,columnM:f,win:u,glassFrac:w,relief:(s?ci.relief:a.relief)*(.8+.4*Qe(t,70)),parapetM:a.parapetM*(.7+.6*Qe(t,71)),groundStoreyM:M,shopfront:C,house:s,pFloor:S?Xt(.5,.8,Qe(t,81)):Xt(.72,.95,Qe(t,81)),pTenant:S?Xt(.55,.9,Qe(t,82)):Xt(.42,.72,Qe(t,82)),pCell:Xt(.72,.92,Qe(t,83)),pCore:Xt(.55,.9,Qe(t,84)),tenantW:S?3+Math.floor(Qe(t,85)*6):2+Math.floor(Qe(t,85)*3),tenantH:S?1+Math.floor(Qe(t,86)*3):1+Math.floor(Qe(t,86)*2),coreW:1+Math.floor(Qe(t,87)*2),corePeriod:x,coreSlot:_,group:y,seed:t%4096/4096}}const fh=7,ph=14,eb=2.9,tb=6,mh={0:.4,1:.12,2:.72,3:.06,4:.95,5:.35,6:.65};function dn(n){return n<0?0:n>1?1:n}function nb(n,e,t){let i=t*Ta;e[i++]=n.colour[0],e[i++]=n.colour[1],e[i++]=n.colour[2],e[i++]=n.roughness,e[i++]=n.storeyM,e[i++]=n.columnM,e[i++]=n.glassFrac,e[i++]=n.seed,e[i++]=n.win[0],e[i++]=n.win[1],e[i++]=n.win[2],e[i++]=n.win[3],e[i++]=n.pFloor,e[i++]=n.pTenant,e[i++]=n.pCell,e[i++]=n.pCore,e[i++]=n.tenantW,e[i++]=n.tenantH,e[i++]=n.coreW,e[i++]=n.corePeriod,e[i++]=n.coreSlot,e[i++]=n.group*8+n.family,e[i++]=n.relief,e[i++]=n.parapetM,e[i++]=n.groundStoreyM,e[i++]=n.shopfront,e[i++]=n.house,e[i++]=n.f0}const ib=`
uniform sampler2D uFacade;
uniform float uFacadeWidth;
uniform vec3 uHourFactor;   // residential, office, other

struct Facade {
  vec3  colour;
  float roughness;
  float f0;
  float storeyM;
  float columnM;
  float glassFrac;
  float seed;
  vec4  win;
  float pFloor;
  float pTenant;
  float pCell;
  float pCore;
  float tenantW;
  float tenantH;
  float coreW;
  float corePeriod;
  float coreSlot;
  float group;
  float relief;
  float family;
  float parapetM;
  float groundStoreyM;
  float shopfront;
  float house;
};

// One RGBA8 texel is two 16-bit values: (r,g) is the first, (b,a) the second.
// texture() returns 0..1, so a byte is that times 255, and rounding matters
// because 0.5/255 of drift in the high byte is 128 counts of the value.
//
// INTEGER ADDRESSING, ROUNDED. The index arrives as an interpolated float, and
// a phone GPU delivers a per-triangle constant only to within an ulp, varying
// per pixel (see render/glrepro.ts). The old float arithmetic truncated with
// int(), so 1233.9999 read building 1233's LAST texel in place of 1234's
// first on about half the pixels: the blue/brown speckle over every facade on
// an Android phone. Rounded to the nearest integer and addressed with integer
// math, an ulp cannot move the lookup. Gate: the sf-street-mobilegl shot.
vec2 facadePair(float bidx, float k) {
  int w = int(uFacadeWidth + 0.5);
  int t = int(floor(bidx + 0.5)) * ${fd} + int(floor(k + 0.5));
  vec4 e = texelFetch(uFacade, ivec2(t % w, t / w), 0);
  float lo0 = floor(e.r * 255.0 + 0.5);
  float hi0 = floor(e.g * 255.0 + 0.5);
  float lo1 = floor(e.b * 255.0 + 0.5);
  float hi1 = floor(e.a * 255.0 + 0.5);
  return vec2((lo0 + hi0 * 256.0) / 65535.0, (lo1 + hi1 * 256.0) / 65535.0)
       * ${pd}.0;
}

// The old four-at-a-time accessor, rebuilt on top of the byte pairs so the
// twenty-odd call sites below did not all have to change shape.
vec4 facadeTexel(float bidx, float k) {
  vec2 ab = facadePair(bidx, k * 2.0);
  vec2 cd = facadePair(bidx, k * 2.0 + 1.0);
  return vec4(ab.x, ab.y, cd.x, cd.y);
}

Facade readFacade(float bidx) {
  vec4 a = facadeTexel(bidx, 0.0);
  vec4 b = facadeTexel(bidx, 1.0);
  vec4 c = facadeTexel(bidx, 2.0);
  vec4 d = facadeTexel(bidx, 3.0);
  vec4 e = facadeTexel(bidx, 4.0);
  vec4 f = facadeTexel(bidx, 5.0);
  vec4 g = facadeTexel(bidx, 6.0);
  Facade p;
  p.colour = a.rgb;   p.roughness = a.w;
  p.storeyM = b.x;    p.columnM = b.y;  p.glassFrac = b.z;  p.seed = b.w;
  p.win = c;
  p.pFloor = d.x;     p.pTenant = d.y;  p.pCell = d.z;      p.pCore = d.w;
  p.tenantW = e.x;    p.tenantH = e.y;  p.coreW = e.z;      p.corePeriod = e.w;
  p.coreSlot = f.x;   p.group = floor(f.y / 8.0);  p.family = f.y - p.group * 8.0;
  p.relief = f.z;     p.parapetM = f.w;
  p.groundStoreyM = g.x;  p.shopfront = g.y;  p.house = g.z;  p.f0 = g.w;

  // A DEAD TABLE MUST DEGRADE, NOT BREAK.
  //
  // If the parameter texture never reached the GPU, every texelFetch returns
  // (0,0,0,1). Then storeyM and columnM are 0, vUv / 0 is Inf, fract(Inf) is
  // NaN, and NaN renders black: an entire city black with nothing thrown on the
  // JS side and no way to tell it from a lighting bug.
  //
  // This first shipped as a magenta sentinel, which did its job perfectly. One
  // phone screenshot identified the failure in seconds after two days of
  // guessing at black buildings. But it was a diagnostic, and the diagnosis has
  // been made: at least one Android device cannot read this table as fp32 OR as
  // fp16, so a magenta city is now just a worse black city.
  //
  // So the fallback is a PLAUSIBLE facade instead. It is deliberately NOT a
  // transcription of facadeFor: duplicating that rule in GLSL is exactly the
  // drift this file's design avoids. It is a coarse per-building variation that
  // reads as a city rather than as an error, and it is honest that it is a
  // fallback (uFacadeFallback goes to 1 so the app can say so).
  //
  // corePeriod is >= CORE_PERIOD_MIN (7) by construction for any real record,
  // so a value under 1 cannot come from a healthy read.
  if (p.corePeriod < 1.0) {
    float fb = fract(sin(bidx * 12.9898) * 43758.5453);
    float fb2 = fract(sin(bidx * 78.233) * 24634.6345);
    // Five bands of plausible masonry and concrete, warm to cool.
    p.colour = mix(vec3(0.42, 0.36, 0.31), vec3(0.62, 0.63, 0.64), fb);
    p.colour = mix(p.colour, vec3(0.30, 0.34, 0.38), step(0.82, fb2));
    p.storeyM = 3.1 + 0.5 * fb2;
    p.columnM = 2.4 + 0.6 * fb;
    p.glassFrac = fb2 > 0.82 ? 0.55 : 0.12;
    p.roughness = 0.72;
    p.tenantW = 4.0; p.tenantH = 2.0;
    p.coreW = 2.0; p.corePeriod = 9.0; p.coreSlot = 3.0;
    p.pFloor = 0.75; p.pTenant = 0.6; p.pCell = 0.5; p.pCore = 0.7;
    p.win = vec4(0.18, 0.82, 0.16, 0.86);
    p.relief = 0.5; p.parapetM = 0.9;
    p.group = 1.0; p.family = fb2 > 0.82 ? 0.0 : 1.0;
    p.groundStoreyM = 4.0; p.shopfront = 0.45; p.house = 0.0;
    p.f0 = fb2 > 0.82 ? 0.22 : 0.05;
  }

  // Belt and braces: clamp every divisor at the point of use anyway, so a
  // partially bad record cannot NaN-poison the fragment either.
  p.storeyM = max(p.storeyM, 0.1);
  p.columnM = max(p.columnM, 0.1);
  p.coreW = max(p.coreW, 1.0);
  p.corePeriod = max(p.corePeriod, 1.0);
  p.tenantW = max(p.tenantW, 1.0);
  p.tenantH = max(p.tenantH, 1.0);
  p.groundStoreyM = max(p.groundStoreyM, 0.5);
  return p;
}

float facadeHourFactor(float group) {
  return group < 0.5 ? uHourFactor.x : (group < 1.5 ? uHourFactor.y : uHourFactor.z);
}

float fHash(float a, float b, float c) {
  vec3 p3 = fract(vec3(a, b, c) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

// The transcription of isLit(). Four gates, same order, same constants.
// Core stripe, then floor, then tenancy, then the individual window.
float facadeLit(Facade p, float col, float floorIdx, float heightFade) {
  // No core on a house: it has no lift and no stair shaft, and two storeys of
  // stripe is correlation with nothing behind it. Mirrors isLit().
  if (p.house < 0.5) {
    float coreIdx = floor(col / p.coreW);
    if (abs(mod(coreIdx, p.corePeriod) - p.coreSlot) < 0.5) {
      return step(fHash(p.seed, 7.13, coreIdx), p.pCore);
    }
  }
  if (fHash(p.seed, 51.7, floorIdx) > p.pFloor * heightFade) return 0.0;
  float tb = floor(col / p.tenantW);
  float th = floor(floorIdx / p.tenantH);
  float hourF = facadeHourFactor(p.group);
  if (fHash(p.seed + tb * 0.977, 71.4, th) > p.pTenant * hourF) return 0.0;
  return step(fHash(p.seed + col * 0.131, 91.1, floorIdx), p.pCell);
}

// The closed form of the same thing, for the far field. See meanOccupancy().
float facadeMeanOccupancy(Facade p, float heightFade) {
  float coreFrac = p.house > 0.5 ? 0.0 : 1.0 / p.corePeriod;
  float hourF = facadeHourFactor(p.group);
  float body = p.pFloor * heightFade * min(1.0, p.pTenant * hourF) * p.pCell;
  return coreFrac * p.pCore + (1.0 - coreFrac) * body;
}
`,ab=typeof location<"u"&&new URLSearchParams(location.search).get("mobilegl")==="1",sb=ab?`#define MOBILE_GL_REPRO 1
`:"",ob=`
float mobileUlpJitter(float x) {
#ifdef MOBILE_GL_REPRO
  float h = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  return x * (1.0 + (h - 0.5) * 4.0e-7);
#else
  return x;
#endif
}
`;function rb(n){const e=n.length/2;if(e<3)return new Uint32Array(0);if(e===3)return new Uint32Array([0,1,2]);const t=new Array(e);for(let s=0;s<e;s++)t[s]=s;const i=[];let a=e*e;for(;t.length>3&&a-- >0;){let s=!1;for(let o=0;o<t.length;o++){const r=t[(o+t.length-1)%t.length],l=t[o],c=t[(o+1)%t.length],h=n[r*2],d=n[r*2+1],p=n[l*2],f=n[l*2+1],g=n[c*2],v=n[c*2+1];if((p-h)*(v-d)-(f-d)*(g-h)<=0)continue;let u=!1;for(let w=0;w<t.length;w++){const x=t[w];if(x===r||x===l||x===c)continue;const _=n[x*2],y=n[x*2+1],S=(p-h)*(y-d)-(f-d)*(_-h),A=(g-p)*(y-f)-(v-f)*(_-p),C=(h-g)*(y-v)-(d-v)*(_-g);if(S>=0&&A>=0&&C>=0){u=!0;break}}if(!u){i.push(r,l,c),t.splice(o,1),s=!0;break}}if(!s)break}for(let s=1;s+1<t.length;s++)i.push(t[0],t[s],t[s+1]);return new Uint32Array(i)}function Vs(n){const e=n.length/2;let t=0;for(let i=0,a=e-1;i<e;a=i++)t+=(n[a*2]-n[i*2])*(n[a*2+1]+n[i*2+1]);return t/2}const gh=.25;var Me=(n=>(n[n.Generic=0]="Generic",n[n.Residential=1]="Residential",n[n.Commercial=2]="Commercial",n[n.Industrial=3]="Industrial",n[n.Retail=4]="Retail",n[n.Civic=5]="Civic",n[n.Tower=6]="Tower",n))(Me||{}),Ye=(n=>(n[n.Flat=0]="Flat",n[n.Pitched=1]="Pitched",n[n.Dome=2]="Dome",n[n.Pyramid=3]="Pyramid",n[n.Tapered=4]="Tapered",n))(Ye||{});function lb(n){const e=new Array(n.length);for(let t=0;t<n.length;t++){const i=n[t],a=Math.fround(i.cx),s=Math.fround(i.cz),o=i.dx.length,r=new Float32Array(o*2);for(let l=0;l<o;l++)r[l*2]=a+i.dx[l]*gh,r[l*2+1]=s+i.dz[l]*gh;e[t]={cx:a,cz:s,baseM:Math.fround(i.baseM),topM:Math.fround(i.topM),kind:i.kind,roof:i.roof,ring:r}}return e}const cb=12,hb=100,ub=30;function db(n,e){return e<cb&&n>hb?!0:n/Math.max(1,e)>ub}function fb(n,e){let t=1/0;for(let i=0;i<n.ring.length;i+=2){const a=e(n.ring[i],n.ring[i+1]);a<t&&(t=a)}return Number.isFinite(t)?t:e(n.cx,n.cz)}const vh=1500;function md(n,e){if(n<tr/e)return 0;const t=(n-tr/e)/(pb-tr/e);return Math.min(1,Math.max(0,t))*mb*e}const tr=4200,pb=9e3,mb=40,gb=1200,gd=1600;function vb(n){return n*2+Math.max(0,n-2)}const Is={parapet:!1,boxes:0,overrun:!1};function vd(n,e,t,i,a,s){if(s!==Ye.Flat||a===Me.Residential||t<6||i<120)return Is;const o=n<gd/e;if(!o)return Is;if(n>=gb/e)return{parapet:o,boxes:0,overrun:!1};const r=Math.min(4,Math.floor(i/900)),l=t>=22&&i>=350;return{parapet:o,boxes:r,overrun:l}}function wb(n,e){return(e.parapet?n*2:0)+(e.boxes+(e.overrun?1:0))*10}function xb(n,e){for(const t of[1,1.4,2,3,4.5,7,11,18]){let i=0;for(const a of n.buildings){const s=a.topM-a.baseM,o=Math.hypot(a.cx,a.cz);if(s<md(o,t))continue;const r=a.ring.length/2;if(i+=vb(r),a.roof===Ye.Pitched&&s>=4&&s<=20&&(i+=8),o<gd/t&&(i+=wb(r,vd(o,t,s,Math.abs(Vs(a.ring)),a.kind,a.roof))),i>e)break}if(i<=e)return t}return 18}const _b=`
precision highp float;
in vec3 position;
in vec3 normal;
in vec2 uv;        // x: metres along the wall, y: metres up the wall
in vec4 info;      // building index, building height, isRoof, part

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec3 uCameraPos;

out vec3 vNormal;
out vec3 vWorld;
out vec2 vUv;
out vec4 vInfo;
out float vViewDist;

void main() {
  vNormal = normal;
  vWorld = position;
  vUv = uv;
  vInfo = info;
  vViewDist = length(position - uCameraPos);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,yb=0,bb=1,Mb=2,Sb=3,ws=4,wh=5,ll=.5,wd=.75,Eb=1-ll*wd/2,xh=.35,_h=.2,cl=.35,hl=1.6,Tb=Math.log(hl/cl)/(hl-cl),Ab=`
precision highp float;
${sb}${ob}
in vec3 vNormal;
in vec3 vWorld;
in vec2 vUv;
in vec4 vInfo;
in float vViewDist;
out vec4 fragColor;

// Aerial perspective only: a shorter march than the sky uses. See the note in
// atmosphere.glsl.ts -- this is per-fragment with overdraw, and it is smooth.
#define ATMO_STEPS 7
#define ATMO_SUN_STEPS 2
${_i}
${Oa}
${Js}
${Qs}
${eo}
${ib}

uniform vec3  uCameraPos;
// The scene sky probe: prefiltered radiance for the glass, roughness to mip.
uniform samplerCube uEnv;
uniform float uEnvMaxLod;
uniform float uNight;
uniform vec3  uNightGlow;
uniform vec3  uMoonDir;
uniform vec3  uMoonLight;
uniform float uWetness;
uniform float uSunSurface;
// ?flatglass=1: put the glazing back in the plane of the wall. See the reveal
// block in the facade branch, and tools/verify-glass.ts, which needs to run the
// old behaviour in the SAME binary or its assertions measure nothing.
uniform float uFlatGlass;
// ?flatrefl=1: put the ENV REFLECTION back to what this repo had before the
// glazing reflectance work -- one bare-dielectric F0 of 0.04 for every family,
// and the probe's open sunlit ground under every downward reflected ray. The
// vacuity probe for the reflection half of tools/verify-glass.ts.
uniform float uFlatRefl;
// Built-ness over the city, 0..1, from render/urbanmask.ts. The same coverage
// grid terrain.ts lights its streets from; here it says how much of what a
// facade reflects BELOW the horizon is other buildings rather than open ground.
uniform sampler2D uUrban;
uniform float uUrbanExtent;
// ?buildingDebug=1 replaces the shaded output with a flat marker on the FACADE
// fragments and nothing else, so a measurement of a facade can ask the shader
// which pixels are facade instead of guessing from colour. Pure blue rather
// than white: r and g stay at zero through the tonemap, and nothing else in a
// daylight frame -- not sky, not water, not pale render -- comes out with two
// dead channels.
//
// ?buildingDebug=2 is the same marker restricted to the facade fragments seen
// at a GRAZING angle, so a measurement of the Fresnel term can ask the shader
// which faces are grazing instead of drawing boxes on a frame. Same encoding,
// so one mask reader serves both, and mode 1 minus mode 2 is the square-on set.
uniform float uBuildingDebug;

// The split between "grazing" and "square-on" for buildingDebug=2, as cos of
// the angle off the wall normal. 0.5 is 60 degrees off, which is where Schlick
// starts to run away: a 0.04 surface returns 7% at 45 degrees and 15% at 70.
const float GRAZE_COS = 0.5;

float hash11(float p) {
  p = fract(p * 0.1031);
  p *= p + 33.33;
  return fract(p * (p + p));
}

float hash21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

// Smooth value noise, for surfaces whose variation is CONTINUOUS.
//
// hash21 of a floored coordinate is a lattice of flat random squares, and on a
// roof seen from directly above that is the single largest surface in an aerial
// frame: it reads as pixelation, because that is exactly what it is. Tar,
// gravel and weathering vary smoothly, so they want an interpolated noise.
//
// Hard-edged cells are still right for the things that genuinely have edges (a
// re-covered section, a membrane seam), which is why hash21 stays.
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  // Smoothstep weights, so there is no directional bias along the cell edges.
  vec2 w = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, w.x), mix(c, d, w.x), w.y);
}

/**
 * A narrow tent peaking at c. Used as the DERIVATIVE of the window mask: the
 * mask itself steps up at one edge and down at the other, so a spike at each
 * edge, positive then negative, is the slope of the surface a recessed window
 * actually has. Perturbing the normal by it is what turns a flat painted-on
 * window into one with a reveal that catches the light.
 */
float tent(float x, float c, float ew) {
  return smoothstep(c - ew, c, x) * smoothstep(c + ew, c, x);
}

/**
 * The window rectangle sampled at an ARBITRARY point in grid space, every edge
 * widened by the pixel footprint the way the main window mask is.
 *
 * The reveal needs the same aperture three times at three different offsets --
 * where the glass is, where the wall face is, and where the sun reaches
 * through it -- so it stops being something to write out inline.
 *
 * g is the continuous grid coordinate, not a cell coordinate: fract() is
 * taken here so a caller may push the sample past the edge of its own cell and
 * land on the neighbouring window, which is where a real facade's next opening
 * actually is.
 */
float winRect(vec2 g, vec4 win, vec2 w) {
  vec2 c = fract(g);
  return smoothstep(win.x - w.x, win.x + w.x, c.x) * smoothstep(win.y + w.x, win.y - w.x, c.x)
       * smoothstep(win.z - w.y, win.z + w.y, c.y) * smoothstep(win.w + w.y, win.w - w.y, c.y);
}

/**
 * The coping on top of a parapet. Pale grey stone or concrete whatever the
 * wall below it is made of, which is exactly the line that makes a box read as
 * a building from the air.
 */
vec3 parapetColour(Facade p) {
  return mix(p.colour, vec3(0.42, 0.41, 0.39), 0.55 + 0.25 * hash11(p.seed * 31.0 + 5.0));
}

void main() {
  // Rounded, because it is an integer that arrived through an interpolator:
  // see facadePair in render/facade.ts and render/glrepro.ts.
  float bidx  = floor(mobileUlpJitter(vInfo.x) + 0.5);
  float bldH  = vInfo.y;
  float isRoof = vInfo.z;
  float part  = vInfo.w;

  Facade fp = readFacade(bidx);

  vec3 n = normalize(vNormal);
  vec3 albedo = fp.colour;

  // Roughness is a local, not fp.roughness read straight through, because the
  // shingle branch has to override it: a facade family's roughness describes
  // its WALL, and a house's wall and its roof covering are not the same stuff.
  float roughness = fp.roughness;

  // A lit window EMITS. It was being added into the albedo, which then went
  // through the sun and ambient terms like everything else -- so a lit window
  // got dimmer at night, which is the one time it is supposed to be the
  // brightest thing on the building.
  vec3 emissive = vec3(0.0);

  // How much of this fragment behaves as glass rather than as wall. Drives the
  // Fresnel reflection and the sun glint, and nothing else.
  float glassMask = 0.0;

  // The room behind a ground-storey window, as an effective albedo. It is a
  // quantity of its own rather than part of albedo because it takes the AMBIENT
  // light and not the beam: see the ground-storey branch, which is the only
  // thing that sets it.
  vec3 seeIn = vec3(0.0);

  // How much of the sky dome this fragment can see, beyond its own orientation.
  // 1.0 on a roof; less and less as you go down into a street canyon.
  float skyOcc = 1.0;

  // How much DIRECT sun reaches this fragment from inside its own window
  // reveal. 1.0 everywhere except in the shadow the head and one jamb cast on
  // the glazing set back behind them; see the reveal block below. It is a
  // separate quantity from albedo because being in shadow takes the beam away
  // and leaves the sky, and darkening the albedo instead would take both.
  float revealShade = 1.0;

  // And how much of the SKY it can see from in there. A reveal is not a sun
  // effect: a recessed pane sees less of the dome than the wall around it,
  // most of all in the band directly under the head, which is why a window on
  // the shadowed side of a street still reads as a hole and not as a decal.
  // Applied to the ambient AND to the glass reflection -- on a curtain wall the
  // reflection is nearly all of the pixel, so occluding the ambient alone moves
  // nothing at all.
  float revealOcc = 1.0;

  /** 1 on a wall fragment, 0 on a roof or a parapet. See uBuildingDebug. */
  float facadeMarker = 0.0;

  // PART_GABLE shares the facade branch, so the chain cannot be a plain
  // ascending ladder any more: the shingle test has to come first (it is the
  // highest tag but the clutter branch is the trailing else), and the gable
  // has to be pulled back out of it.
  bool gableEnd = part > 4.5;

  if (part > 3.5 && !gableEnd) {
    // --- Shingle --------------------------------------------------------
    // Asphalt shingle or tile, and it is DARK: a real roof covering is
    // 0.05-0.14 linear, which is well under any wall it sits on.
    float pick = hash11(fp.seed * 23.0 + 1.0);
    vec3 cover = pick < 0.45 ? vec3(0.045, 0.046, 0.049)      // charcoal asphalt
               : pick < 0.80 ? vec3(0.078, 0.070, 0.060)      // weathered grey-brown
                             : vec3(0.105, 0.060, 0.044);     // faded clay tile
    // Granules, on the smooth noise for the same reason the flat roof uses it:
    // from the air this is the largest surface in the frame, and a lattice of
    // flat random squares seen from above reads as pixelation.
    float grain = vnoise(vWorld.xz * 5.5 + fp.seed * 31.0);
    albedo = cover * (0.88 + 0.24 * grain);

    // THE COURSES. This is the thing that says shingle rather than grey slab:
    // a 0.30 m band up the slope with its lower edge in its own shadow, and a
    // weaker tab break across it every 0.90 m.
    //
    // Filtered and faded exactly the way the wall's mortar course is: a 0.3 m
    // stripe is under a pixel from any height worth flying, and point-sampling
    // it would moire against the pixel grid rather than converge.
    float cy = vUv.y / 0.30;
    float wy = max(fwidth(cy), 1e-4);
    float courseFade = 1.0 - clamp(wy * 1.6, 0.0, 1.0);
    float course = 1.0 - smoothstep(0.0, max(0.18, wy), fract(cy));
    float cx = vUv.x / 0.90;
    float wx = max(fwidth(cx), 1e-4);
    float tabFade = 1.0 - clamp(wx * 1.6, 0.0, 1.0);
    float tab = 1.0 - smoothstep(0.0, max(0.10, wx), fract(cx));
    albedo *= 1.0 - 0.18 * course * courseFade - 0.08 * tab * tabFade;

    roughness = 0.92;    // shingle is matte, whatever the wall under it is
    skyOcc = 1.0;        // a pitched roof sees the whole dome
    glassMask = 0.0;
    // n is left alone: the tent carries a real per-face normal already.
  } else if (part < 0.5 || gableEnd) {
    // --- Facade ---------------------------------------------------------
    facadeMarker = 1.0;
    // Storey and column pitch are per BUILDING, out of the parameter texture.
    // A curtain wall's mullions are 1.6 m apart and a brick terrace's windows
    // are 3.3 m apart; sharing one grid between them is most of why a street
    // of these used to read as wallpaper.
    //
    // The upper grid starts at the HEAD of the ground storey, not at the
    // pavement. A ground floor is half again as tall as the flat above it (see
    // groundStoreyM in facade.ts), so a grid measured from the ground puts
    // every storey line on a building a metre out from where the floor slab
    // actually is, and the error accumulates all the way up.
    float groundH = min(fp.groundStoreyM, max(1.2, bldH * 0.92));
    vec2 grid = vec2(vUv.x / fp.columnM, (vUv.y - groundH) / fp.storeyM);
    float floorIdx = floor(grid.y);
    float colIdx = floor(grid.x);
    vec2 cell = fract(grid);

    // How much of a window cell one pixel covers. Taken on the CONTINUOUS
    // grid coordinate, not on the fract()ed one: fract() has a derivative spike
    // at every seam, and fwidth of that reads as an enormous width along a
    // one-pixel line.
    vec2 w = max(fwidth(grid), vec2(1e-4));

    // Analytic filtering, not a distance fade.
    //
    // A 2.6 m window at 2 km is far smaller than a pixel, and point-sampling
    // it sparkles: the pattern aliases against the pixel grid and every frame
    // lands on different windows. The old answer was to cross-fade the whole
    // pattern to its mean between 4200 m and 900 m, which killed it while it
    // was still several pixels wide -- from 800 m up, most of the city was
    // past the fade, and a city of flat-shaded boxes is exactly what it looked
    // like.
    //
    // Widening each edge by the pixel footprint is what a correctly filtered
    // version does: the windows stay resolved for as long as the PIXELS can
    // hold them, and dissolve into their own mean exactly when they can't.
    // It is also per-pixel rather than per-vertex-distance, so a wall seen
    // edge-on -- where a pixel really does span many windows -- converges even
    // though it is close.
    // Filtered PER AXIS, not by the worse of the two.
    //
    // This was one number off max(w.x, w.y), and that is what made a wall seen
    // from a car a sheet of flat colour: from the pavement the along-the-wall
    // footprint is enormous (a pixel spans several window columns) while the
    // vertical one is a few centimetres, so taking the worse of them threw away
    // the storey lines, the cornice and the whole ground floor along with the
    // column rhythm that genuinely could not be resolved. A separable filter
    // dissolves each axis when THAT axis runs out of pixels, so a grazing wall
    // keeps its horizontals and loses its verticals, which is what a photograph
    // taken along a street shows.
    //
    // detail itself is unchanged -- min of the two IS 1 - max(w) - so
    // everything that still reads it behaves exactly as before.
    float detailX = 1.0 - clamp(w.x * 1.6, 0.0, 1.0);
    float detailY = 1.0 - clamp(w.y * 1.6, 0.0, 1.0);
    float detail = min(detailX, detailY);
    float winMeanX = fp.win.y - fp.win.x;
    float winMeanY = fp.win.w - fp.win.z;
    float winMean = winMeanX * winMeanY;

    // Window rectangle inside the cell, every edge softened by the pixel
    // footprint so it antialiases instead of stair-stepping.
    // The wall carries on past the roof slab to make the parapet, so the grid
    // has to STOP at the roof line -- otherwise the coping gets a row of
    // windows in it and the parapet reads as one more storey.
    float capped = step(vUv.y, bldH);

    // --- THE REVEAL: the glass is BEHIND the wall, not in it ---------------
    //
    // Until this block the glazing sat exactly in the wall plane, and that is
    // geometric, not textural: a flat sheet with a pattern on it is what a
    // Chicago or Manhattan tower was, which is why it read as painted concrete
    // however the pattern was tuned. Real glazing is set back 100-250 mm and
    // two things fall out of the setback, both of them needed:
    //
    //   * PARALLAX. Seen off normal, the glass slides within its opening. The
    //     wall overhangs it on the near side and the jamb is exposed on the
    //     far side, so the opening stops being a decal and starts being a
    //     hole. One offset along the view vector in the wall's tangent frame.
    //     No march: the second sample would buy a silhouette nobody can see at
    //     this scale and cost a loop on every building pixel in the frame.
    //
    //   * SELF-SHADOW. The aperture casts onto the recessed plane, giving a
    //     hard line under every head and down exactly ONE jamb, and the jamb
    //     it picks swaps as the sun crosses the facade. At a grazing angle
    //     this is most of what tells the eye the wall has thickness, and it is
    //     the part that shows in a still.
    //
    // Depths are measured, not tuned, and they differ by building type because
    // the openings do: a curtain wall's glass sits just behind its mullion
    // line, while a punched opening in solid masonry is a whole brick deep.
    // fp.relief is already the per-family measure of how modelled a wall is
    // (0.10 on glass, 0.75-0.80 on brick and stone), so it picks the depth and
    // no second table can drift away from the first.
    const float REVEAL_CURTAIN_M = 0.10;  // curtain wall: glass behind the mullion
    const float REVEAL_PUNCHED_M = 0.25;  // punched opening in solid masonry
    // How much of the beam the shaded part of a reveal loses. Not 1.0: the
    // jamb opposite is a bright diffuse bounce a few centimetres away, and a
    // reveal that goes black reads as a hole punched through the building.
    const float REVEAL_SHADOW = 0.80;
    // The band under the head, which loses most of the dome even at noon under
    // cloud. This is the term that survives into the shade.
    const float REVEAL_HEAD_SKY = 0.60;
    // The exposed jamb face itself: turned ninety degrees off the wall, so it
    // sees about half the sky the wall does and takes a matching albedo knock.
    const float REVEAL_SIDE_SKY = 0.45;
    const float REVEAL_SIDE_DARK = 0.22;

    // ?flatglass=1 puts the glass back in the wall plane, in this same
    // binary, so tools/verify-glass.ts can watch its own assertions go red.
    float recess = 1.0 - step(0.5, uFlatGlass);
    float revealM = mix(REVEAL_CURTAIN_M, REVEAL_PUNCHED_M, clamp(fp.relief, 0.0, 1.0)) * recess;

    // uv.x runs along +(-n.z, 0, n.x). buildWall() gives a wall quad the
    // outward normal (dz, 0, -dx)/len and runs u along (dx, 0, dz)/len, so the
    // along-wall axis is the normal turned the OTHER way from the tang the
    // relief block below uses. Getting this backwards does not look subtly
    // wrong, it makes the glass appear to stand proud of the wall.
    vec3 uDir = vec3(-n.z, 0.0, n.x);
    vec3 upDir = vec3(0.0, 1.0, 0.0);
    vec3 eyeDir = normalize(uCameraPos - vWorld);
    // Clamped at 0.35, which is 70 degrees off normal. The exact offset is
    // depth * tan(angle) and diverges at grazing incidence; past 70 degrees a
    // real opening is occluded by its own jamb anyway, so the honest limit is
    // a fixed slide rather than an offset that runs away.
    vec2 par = -(revealM / max(dot(eyeDir, n), 0.35))
             * vec2(dot(eyeDir, uDir) / fp.columnM, dot(eyeDir, upDir) / fp.storeyM);
    // The aperture's own shadow on the recessed plane: the same construction
    // with the sun in place of the eye. A point set back by revealM is lit
    // only if the ray from it to the sun clears the opening, which is the
    // aperture tested at this offset.
    float sn = dot(uSunDir, n);
    vec2 shd = (revealM / max(sn, 0.35))
             * vec2(dot(uSunDir, uDir) / fp.columnM, dot(uSunDir, upDir) / fp.storeyM);
    // A wall the sun is behind is wholly in shade and has no reveal shadow to
    // draw inside it.
    float sunFacing = step(0.02, sn);
    // Half a window of slide is as far as this can mean anything: past that
    // fract() would wrap the sample onto the NEXT opening along, which is a
    // periodicity artifact and not a deeper reveal.
    vec2 slide = 0.5 * vec2(winMeanX, winMeanY);
    par = clamp(par, -slide, slide);
    shd = clamp(shd, -slide, slide);

    // LOD. A window is a few pixels across from any distance worth flying and
    // an offset that survives to sub-pixel scale is aliasing, so both offsets
    // fade on the pixel footprint -- per axis, the way every other mask in
    // this branch does, so a wall seen along its length keeps its heads while
    // losing its jambs. What the fade costs in contrast is put back as the
    // reveal's own MEAN further down rather than deleted, or the far city
    // would sit at a different brightness from the near one.
    vec2 parPx = par * vec2(detailX, detailY);
    vec2 shdPx = shd * vec2(detailX, detailY);

    // The recessed glazing. This is the only change to the mask itself: the
    // same rectangle, sampled where the glass actually is.
    vec2 pcell = fract(grid + parPx);
    float winX = smoothstep(fp.win.x - w.x, fp.win.x + w.x, pcell.x)
               * smoothstep(fp.win.y + w.x, fp.win.y - w.x, pcell.x);
    float winY = smoothstep(fp.win.z - w.y, fp.win.z + w.y, pcell.y)
               * smoothstep(fp.win.w + w.y, fp.win.w - w.y, pcell.y);
    // Each axis converges to its own mean as it runs out of pixels, so a wall
    // seen along its length keeps a row of ribbon windows instead of going
    // blank. Far away both terms converge and this equals the old winMean.
    float win = mix(winMeanX, winX, detailX) * mix(winMeanY, winY, detailY) * capped;

    // IRREGULAR OPENINGS.
    //
    // A house elevation is two to four windows with blank wall between them.
    // Half of what makes the uniform grid read as an office block is not the
    // size of the openings, it is that EVERY cell has one: a lattice is a
    // curtain wall's structure, not a house's. So on a house each cell keeps
    // its window only if a hash of (column, floor) passes, and 45% do not.
    //
    // It has to filter the way the rectangle above does. The keep is a hard
    // step, and a hard step under a pixel is exactly the sparkle the analytic
    // filtering exists to prevent, so it mixes to its own mean -- which is the
    // keep fraction itself, and comes from facade.ts so the CPU and the shader
    // cannot hold two different ones.
    float openMean = 1.0;
    float openPick = 1.0;
    if (fp.house > 0.5) {
      openMean = ${Jo};
      openPick = step(hash21(vec2(colIdx * 1.37 + fp.seed * 53.0,
                                  floorIdx * 0.79 + 11.0)), openMean);
    }
    win *= mix(openMean, openPick, detail);

    win *= step(groundH, vUv.y);   // the ground storey draws its own thing

    glassMask = win * fp.glassFrac;

    vec3 glass = mix(vec3(0.075, 0.095, 0.125), vec3(0.15, 0.19, 0.24), hash11(fp.seed + 3.3));
    albedo = mix(albedo, glass, glassMask);

    // --- What the reveal does to the light ---------------------------------
    //
    // Three samples of one rectangle, no loop:
    //   apertureDeep  the glazing, already computed above as winX * winY
    //   apertureFlat  the same opening in the plane of the WALL
    //   sunReach      the opening as the sun sees it through the setback
    //
    // Where the wall-plane opening is inside and the recessed one is not, this
    // fragment is looking at the SIDE of the hole -- a jamb, a head or a sill.
    // A flat facade has no pixels for that surface at all, which is the whole
    // defect: there is nothing there to shade.
    float apertureDeep = winX * winY;
    float apertureFlat = winRect(grid, fp.win, w);
    float jamb = clamp(apertureFlat - apertureDeep, 0.0, 1.0) * capped * step(groundH, vUv.y);
    float sunReach = winRect(grid + parPx + shdPx, fp.win, w);
    // Everything inside the opening the sun cannot see into.
    float aperture = clamp(apertureDeep + jamb, 0.0, 1.0);
    float inShade = (1.0 - sunReach) * aperture
                  * sunFacing * capped * step(groundH, vUv.y);
    // The same construction with the ZENITH in place of the sun: the band the
    // head keeps the sky out of. This one has no sunFacing gate, because it is
    // there on the north elevation at midnight as much as at noon.
    float skyShd = revealM / fp.storeyM;
    float skyReach = winRect(grid + parPx + vec2(0.0, skyShd * detailY), fp.win, w);
    float headBlock = (1.0 - skyReach) * aperture * capped * step(groundH, vUv.y);

    // AND WHAT IT AVERAGES TO, for when the reveal is under a pixel.
    //
    // Fading the shadow to nothing would leave a distant facade brighter than
    // the near one that has it, so the far field gets the mean instead of the
    // deletion: the fraction of the opening the head and jamb take away is the
    // shadow offset over the opening's own size, which is arithmetic on
    // numbers already in registers. par/shd here are the UNFADED offsets,
    // so this term survives exactly where the per-pixel one dies.
    float apMean = winMeanX * winMeanY;
    float shadeFrac = min(1.0, abs(shd.x) / max(winMeanX, 0.02) + abs(shd.y) / max(winMeanY, 0.02));
    float jambFrac = min(1.0, abs(par.x) / max(winMeanX, 0.02) + abs(par.y) / max(winMeanY, 0.02));
    float inShadeMean = apMean * shadeFrac * sunFacing * capped * step(groundH, vUv.y);
    float jambMean = apMean * jambFrac * capped * step(groundH, vUv.y);
    float headMean = apMean * min(1.0, skyShd / max(winMeanY, 0.02))
                   * capped * step(groundH, vUv.y);

    // The beam, not the albedo: a shaded reveal loses the sun and keeps the
    // sky, and taking it out of albedo would take both and turn the reveal
    // into a smudge that stayed dark at dusk.
    revealShade = 1.0 - REVEAL_SHADOW * mix(inShadeMean, inShade, detail);
    // The exposed jamb is a face turned off the wall: less sky, and a knock on
    // the albedo for the ambient occlusion of a 200 mm slot.
    float jambLod = mix(jambMean, jamb, detail);
    // Kept as a value rather than applied to skyOcc here: the canyon term below
    // assigns skyOcc outright, so a multiply at this point would be discarded.
    revealOcc = 1.0 - REVEAL_HEAD_SKY * mix(headMean, headBlock, detail)
                    - REVEAL_SIDE_SKY * jambLod;
    albedo *= 1.0 - REVEAL_SIDE_DARK * jambLod;

    // --- The ground storey ------------------------------------------------
    //
    // This used to be a win *= 0.35 inside the first storey, which is a
    // dimming hack: it leaves the same 1.8 m punched hole floating two metres
    // above the pavement, only darker, and from a car that is the single most
    // obviously wrong thing on a street. A ground floor is not a dimmer version
    // of the floor above it. It is a plinth, a tall sheet of glass in a bay two
    // or three metres wide, a fascia over the top of it carrying the signage,
    // and a door every few bays. The shopfront parameter says how much of that a
    // given building gets: a retail unit gets all of it and a terraced house gets
    // a plinth, a door and a window.
    float ground = 1.0 - step(groundH, vUv.y);
    if (ground > 0.5) {
      float plinthM = mix(0.75, 0.34, fp.shopfront) * (0.7 + 0.6 * hash11(fp.seed * 17.0 + 1.0));
      float fasciaM = mix(0.35, 0.85, fp.shopfront);
      float headY = max(plinthM + 0.6, groundH - fasciaM);

      // Shop bays are wider than the window columns above them, and they do not
      // line up with them either: the structure above is on a column grid and
      // the tenancies below are on a lease plan.
      float bayM = mix(fp.columnM, 2.4 + 2.2 * hash11(fp.seed * 5.0 + 9.0), fp.shopfront);
      float bay = (vUv.x + 0.37 * bayM) / bayM;
      float bayIdx = floor(bay);
      float bx = fract(bay);
      float bw = max(fwidth(bay), 1e-4);

      // The pier between two bays, in metres, so it stays a pier rather than a
      // fraction that widens with the bay.
      //
      // On a house the pier takes whatever the bay has left over once the
      // opening is the same width as the windows on the storeys above. A house
      // ground floor is a window and a front door in a wall; a bay of glass
      // between slim piers is a shopfront, and drawing one on every bay of a
      // two-storey house is how a suburb comes out looking like a parade.
      float pierM = mix(0.55, 0.20, fp.shopfront);
      if (fp.house > 0.5) {
        pierM = max(pierM, 0.5 * (bayM - (fp.win.y - fp.win.x) * fp.columnM));
      }
      float pier = pierM / bayM;
      float gx = smoothstep(pier - bw, pier + bw, bx)
               * smoothstep(1.0 - pier + bw, 1.0 - pier - bw, bx);

      float aaY = max(fwidth(vUv.y), 1e-4);
      float gyTop = smoothstep(headY + aaY, headY - aaY, vUv.y);
      float gyWin = smoothstep(plinthM - aaY, plinthM + aaY, vUv.y) * gyTop;

      // A door every few bays, glazed to the pavement rather than to a cill.
      float doorEvery = 3.0 + floor(hash11(fp.seed * 9.0 + 4.0) * 4.0);
      float isDoor = step(abs(mod(bayIdx, doorEvery) - 1.0), 0.5);
      float gyDoor = smoothstep(0.04 - aaY, 0.04 + aaY, vUv.y) * gyTop;
      float shop = 0.0;

      // Same analytic filtering as the upper grid: at two kilometres a
      // shopfront is far under a pixel and point-sampling it sparkles.
      float shopY = mix(gyWin, gyDoor, isDoor);
      shop = mix(clamp(1.0 - 2.0 * pier, 0.0, 1.0), gx, detailX) * shopY;

      // THE GARAGE DOOR.
      //
      // In a US suburb this is the strongest single "this is a house" cue at
      // street level, and it is the one the ground band had no way to draw: a
      // flush ribbed panel a little over two metres tall sitting straight on
      // the driveway, with no plinth under it and no glass in it.
      float garage = 0.0;
      if (fp.house > 0.5) {
        // Width in METRES rather than as a fraction of the bay: a single door
        // is 2.5 m and a double is 5.0 m whatever bay it happens to land in,
        // and a door that scaled with the bay would stop reading as a door.
        float garW = 2.5 + 2.5 * hash11(fp.seed * 6.1 + 2.0);
        float garH = 2.05 + 0.30 * hash11(fp.seed * 8.3 + 7.0);
        // Roughly one per house: a 10 x 8 m house has a perimeter of about
        // eight bays at this bay width, so a period of six to nine puts one
        // door on it and only sometimes a second.
        float garEvery = 6.0 + floor(hash11(fp.seed * 12.7 + 5.0) * 4.0);
        float garSlot = floor(hash11(fp.seed * 15.3 + 8.0) * garEvery);
        float inBay = step(abs(mod(bayIdx, garEvery) - garSlot), 0.5);
        float aaX = max(fwidth(vUv.x), 1e-4);
        float doorX = smoothstep(garW * 0.5 + aaX, garW * 0.5 - aaX,
                                 abs(bx - 0.5) * bayM);
        float doorY = smoothstep(garH + aaY, garH - aaY, vUv.y);
        // Converges to the door's share of the whole band, so a bay under a
        // pixel dissolves into the wall instead of flickering in and out.
        float garMean = clamp(garW / bayM, 0.0, 1.0) / garEvery;
        garage = mix(garMean, inBay * doorX, detailX) * doorY;
      }
      shop *= 1.0 - garage;   // no glazing in a garage door

      // The same keep as the storeys above, for the same reason: an opening in
      // every bay is a lattice, and a house does not have one at street level
      // either. Filtered to the keep fraction so the band converges instead of
      // flickering bay by bay as it goes under a pixel.
      if (fp.house > 0.5) {
        float bayKeep = step(hash21(vec2(bayIdx * 1.91 + fp.seed * 29.0, 3.0)),
                             ${Jo});
        shop *= mix(${Jo}, max(bayKeep, isDoor), detailX);
      }

      // Shop glass is darker than the sky-reflecting curtain wall above: you
      // are looking into a room, not at a mirror, and the room is unlit by day.
      vec3 shopGlass = mix(vec3(0.055, 0.058, 0.062), vec3(0.10, 0.11, 0.13),
                           hash11(fp.seed * 3.7 + 21.0));
      // The plinth: a dark stone or tiled base that takes the kicks. Real, and
      // it is also what stops the glass from meeting the pavement in a line.
      vec3 plinthCol = fp.colour * mix(0.55, 0.40, hash11(fp.seed * 11.0 + 6.0));
      // The fascia over the shop: painted board, a different colour per unit,
      // which is most of what makes a parade of shops read as separate shops.
      vec3 fasciaCol = mix(fp.colour * 0.8,
                           vec3(hash11(bayIdx * 3.1 + fp.seed * 41.0),
                                hash11(bayIdx * 7.7 + fp.seed * 13.0),
                                hash11(bayIdx * 5.3 + fp.seed * 29.0)) * 0.22 + 0.05,
                           fp.shopfront * 0.8 * detailX);

      // The plinth stops at the garage: a door sits on the driveway, and a
      // kerb across the bottom of it would read as a step into a wall.
      albedo = mix(albedo, plinthCol,
                   (1.0 - smoothstep(plinthM - aaY, plinthM + aaY, vUv.y))
                   * (1.0 - isDoor * gx) * (1.0 - garage));
      albedo = mix(albedo, fasciaCol, smoothstep(headY - aaY, headY + aaY, vUv.y));
      albedo = mix(albedo, shopGlass, shop);

      // Painted trim, close to the wall but not the wall: a door the exact
      // colour of the siding reads as a hole in it rather than as a door.
      // Horizontal ribs every 0.25 m, faded with the pixel footprint like
      // every other line on this facade.
      vec3 garageCol = mix(fp.colour, vec3(0.72, 0.71, 0.69), 0.35)
                     * mix(0.86, 1.06, hash11(fp.seed * 19.0 + 3.0));
      float ribP = vUv.y / 0.25;
      float ribW = max(fwidth(ribP), 1e-4);
      float rib = 1.0 - smoothstep(0.0, max(0.12, ribW), fract(ribP));
      albedo = mix(albedo, garageCol * (1.0 - 0.22 * rib * (1.0 - clamp(ribW * 1.6, 0.0, 1.0))), garage);

      glassMask = shop * mix(0.30, 0.92, fp.shopfront);

      // A shopfront is set back behind its piers, so the reveal is deep and the
      // line of shadow under the fascia is the strongest thing on the band.
      albedo *= 1.0 - 0.30 * shop * smoothstep(headY, headY - 0.35, vUv.y) * detailY;

      // A cornice line at the head of the ground storey: the one horizontal
      // that says where the shopfront stops and the building starts.
      albedo *= 1.0 - 0.35 * fp.relief * detailY
                    * smoothstep(0.0, 0.12, groundH - vUv.y) * smoothstep(0.40, 0.12, groundH - vUv.y);

      // WHAT IS BEHIND THE GLASS.
      //
      // shopGlass is a 0.055-0.13 albedo and, seen straight on, Schlick puts
      // only 4% of the sky probe on top of it, so until now there was nothing
      // behind a shop window at all. Van Ness came out as near-black rectangles
      // between pale piers, which reads as a row of loading bays rather than as
      // a shopping street. A real shopfront IS dark seen straight on, but it is
      // dark because you are looking INTO a room that has a floor, a ceiling
      // and stock in it.
      //
      // So the bay gets an effective albedo of its own, and it is added to the
      // AMBIENT term only, never to the beam. That is both the physics and what
      // keeps it in its place: the daylight in a shop arrived through this same
      // window and leaves through it again after a couple of bounces, so it
      // tracks the sky and the lit wall opposite, and it cannot rival a wall
      // the sun is directly on.
      //
      // Brighter at the head than at the cill because a shop is lit from its
      // ceiling. The gradient is most of the effect: a flat panel of any
      // brightness still reads as a panel rather than as depth.
      float headroom = max(headY - plinthM, 0.5);
      float up = clamp((vUv.y - plinthM) / headroom, 0.0, 1.0);
      // 0.12 at the cill to 0.42 at the head, warm because a shop is tungsten
      // and timber and cardboard and the sky feeding it is not.
      //
      // Measured on the sf-street pose, against a sunlit pier at 138/255: the
      // bay head reads 23 with no interior at all (a black rectangle), 66 at
      // these constants, and 83 at 0.20/0.70. 83 is too much. The pier is
      // taking the full beam there and the bay is not, so the same numbers on a
      // SHADED elevation put the bay level with the wall beside it, which is a
      // light box rather than a shop.
      //
      // Filtered for free: it is a product of the shop mask, which already
      // converges to its own bay-mean through detailX, and a smooth ramp in
      // vUv.y that has no detail to lose. No step in it, so no sparkle.
      //
      // Faded out with uNight so it does not double-count the shop's own
      // lighting, which arrives below as an emissive term after dark.
      seeIn = vec3(1.00, 0.90, 0.76) * mix(0.12, 0.42, up * up)
            * glassMask * (1.0 - uNight);
    }

    // Horizontal banding between storeys: a thin darker line reads as a floor
    // slab and gives the facade its scale at distance.
    albedo *= 1.0 - 0.18 * detailY * smoothstep(0.10 + w.y, 0.0, cell.y);

    // --- Relief ---------------------------------------------------------
    // Every facade used to be geometrically flat and lit as flat, which is a
    // thing no photograph of a building has ever been. The window edges get a
    // normal that tilts into the reveal, and the reveal itself is darkened,
    // so the wall has depth from any angle the sun is in.
    //
    // Scaled by detail like everything else here: at two kilometres a 100 mm
    // reveal is far under a pixel and perturbing the normal by it would just
    // make the wall sparkle.
    float ew = max(0.05, w.x * 2.0);
    float ewy = max(0.05, w.y * 2.0);
    float gx = tent(cell.x, fp.win.x, ew) - tent(cell.x, fp.win.y, ew);
    float gy = tent(cell.y, fp.win.z, ewy) - tent(cell.y, fp.win.w, ewy);
    float relief = fp.relief * detail;
    // The wall's own tangent frame: along the wall, and straight up.
    vec3 tang = normalize(vec3(n.z, 0.0, -n.x));
    // 0.22, not the 0.55 this started at. A reveal is 100-200 mm deep on a
    // 1.8 m window, so the surface it presents is a narrow chamfer, not a
    // 20-degree fold -- and at 0.55 every window grew a bright mullion round
    // it and a wall of them read as glazed tiles rather than as masonry.
    n = normalize(n + (tang * gx + vec3(0.0, 1.0, 0.0) * gy) * relief * 0.22);
    // Most of what a reveal actually does is cast a line of shadow, so the
    // darkening carries more of the effect than the normal does.
    albedo *= 1.0 - 0.38 * relief * (abs(gx) + abs(gy));

    // THE WALL BETWEEN THE WINDOWS.
    //
    // Everything above shapes the openings and leaves the masonry itself dead
    // flat: from a car the near wall was a single tan panel with a grid ruled
    // on it. A wall is not flat. Brick has a mortar course every 75 mm and a
    // perpend every 215; a concrete panel has a joint every few metres and a
    // shutter mark inside it; stucco has a float texture. None of it is more
    // than a few millimetres deep, which is exactly why it needs a NORMAL
    // rather than a darker pixel: at a grazing sun those millimetres are the
    // whole difference between masonry and cardboard.
    //
    // Frequency comes from the family so a curtain wall gets none of it.
    // fp.relief is already the per-family measure of how modelled a facade is:
    // near zero on glass, high on brick and stone.
    // A house is not laid in brick, it is clad in lap siding: one board edge
    // every 0.16 m (a 150 mm board with a 25 mm lap) running horizontally with
    // nothing crossing it, so the perpends go too. Brick and Stucco are the
    // families a house lands in; on Concrete or Stone the joint pattern is
    // already right for a rendered or panelled house.
    float lap = fp.house * step(0.5, fp.family) * step(fp.family, 2.5);
    float courseHz = mix(mix(2.0, 13.3, fp.relief), 6.25, lap);  // 13.3/m is a 75 mm course
    float coursePhase = vUv.y * courseHz;
    float course = abs(fract(coursePhase) - 0.5) * 2.0;
    // Perpends every 215 mm, offset half a brick on alternate courses, which is
    // the bond pattern and the reason brick does not read as stripes.
    float row = floor(coursePhase);
    float perpHz = courseHz * 0.35;
    float perp = abs(fract(vUv.x * perpHz + 0.5 * mod(row, 2.0)) - 0.5) * 2.0;

    // Converge with the pixel footprint, like every other detail here: a
    // mortar course is under a pixel from any distance worth flying and must
    // fade to flat rather than alias into a moire.
    float mortarFade = detailY * detailX * fp.relief;
    float mortar = (1.0 - smoothstep(0.55, 0.95, course))
                 + (1.0 - smoothstep(0.70, 0.97, perp)) * 0.6 * (1.0 - lap);
    mortar *= mortarFade;

    // 3 mm of recess, expressed as a slope along the wall's own tangent frame.
    n = normalize(n + (vec3(0.0, 1.0, 0.0) * (fract(coursePhase) - 0.5)
                       * mortarFade * 0.22));
    // A lap edge stands 20 mm proud and casts a real line where a mortar joint
    // is 10 mm deep and mostly a colour change. The house's relief is 0.3
    // against brick's 0.75 and mortarFade is scaled by it, so the coefficient
    // has to make some of that back or the siding comes out flat.
    albedo *= 1.0 - mix(0.10, 0.30, lap) * mortar;

    // A cornice: the last metre below the parapet is a projecting band, so it
    // is brighter on top and casts a line of shadow under itself. On a stone
    // or brick building this is a real moulding; on a curtain wall the relief
    // parameter is near zero and it barely shows, which is also correct.
    float belowTop = bldH - vUv.y;
    albedo *= 1.0 - 0.45 * fp.relief * detailY
                  * smoothstep(0.0, 1.4, belowTop) * smoothstep(2.6, 1.4, belowTop);

    // Ambient occlusion down the wall -- on the SKY term, not the albedo.
    //
    // A street is a canyon. A wall at pavement level sees a slot of sky; the
    // same wall thirty storeys up sees half a dome. That is an occlusion of
    // ambient light and of nothing else.
    //
    // This used to multiply albedo, and that is why it had to be kept weak:
    // scaling albedo also darkens the face the SUN is falling on, so stacking
    // it down every wall on the block turned the streets into black trenches
    // from the air, and it was backed off to 0.74 over 9 m. Against the sky
    // term alone it can be far stronger and go far deeper, because a sunlit
    // wall at street level keeps its whole beam and stays bright -- which is
    // what a photograph of a city at low sun actually looks like.
    //
    // The floor stays at 0.34 even though GTAO now measures contact occlusion
    // directly, because inside a canyon the two barely overlap. Measured on the
    // 7th Ave pose, the screen-space pass finds occlusion on 7% of its buffer
    // against 34% to 63% on the rooftop and residential poses: from a camera in
    // the street the far wall is most of a screen width away and the pavement
    // at the foot of this one is usually not in the frame at all, so there is
    // almost nothing for it to find. The overlap is a narrow band at the base
    // of a wall whose pavement happens to be visible, and there the extra
    // darkening is the right answer anyway.
    skyOcc = mix(0.34, 1.0, smoothstep(0.0, 48.0, vUv.y));
    skyOcc *= revealOcc;

    // --- Lit windows at night -------------------------------------------
    if (uNight > 0.02) {
      // Upper floors empty first: the top of a tower is the executive floor
      // and the plant room, and neither is occupied at two in the morning.
      float heightFade = mix(1.0, 0.55, smoothstep(0.0, 120.0, vUv.y));

      // BLINDS.
      //
      // A lit window in a night photograph is usually not a full lit rectangle:
      // roughly half of them are partly blocked, and what you see is a band
      // from the cill up to wherever the blind stops. It matters more than its
      // size suggests, because a wall of identical full rectangles is the
      // remaining thing that reads as a texture map rather than as glass.
      //
      // One hash carries both decisions: below BLIND_FRAC there is a blind, and
      // its position within that range says how far down it hangs. So the drop
      // is uniform on (0, BLIND_MAX] exactly when there is one, which is what
      // makes BLIND_KEEP the right compensation.
      float bHash = hash21(vec2(colIdx * 0.71 + fp.seed * 17.0, floorIdx * 1.13 + 5.0));
      float drop = step(bHash, ${ll}) * ${wd} * (bHash / ${ll});
      float blindY = mix(fp.win.w, fp.win.z, drop);
      // Filtered on the same footprint as every other edge on this facade.
      float litY = smoothstep(fp.win.z - w.y, fp.win.z + w.y, cell.y)
                 * smoothstep(blindY + w.y, blindY - w.y, cell.y);

      // LIGHT SPILL.
      //
      // The emissive stopped dead at the window edge, which is most of what
      // made the windows read as decals stuck on a wall. Real light leaves the
      // pane and lands on its own reveal and on the spandrel around it. Sized
      // in METRES and converted to cell fractions, because the throw is a
      // property of the lamp and not of the window grid: a 1.6 m curtain-wall
      // module and a 3.6 m stone bay spill the same 350 mm.
      float sx = ${xh} / fp.columnM;
      float sy = ${xh} / fp.storeyM;
      float spillX = smoothstep(fp.win.x - sx - w.x, fp.win.x + w.x, cell.x)
                   * smoothstep(fp.win.y + sx + w.x, fp.win.y - w.x, cell.x);
      float spillY = smoothstep(fp.win.z - sy - w.y, fp.win.z + w.y, cell.y)
                   * smoothstep(fp.win.w + sy + w.y, fp.win.w - w.y, cell.y);
      // A shuttered window throws less: the halo tracks what the blind leaves.
      float halo = max(0.0, spillX * spillY - winX * winY) * (1.0 - drop);

      // THE MEAN IS THE THING THAT MAY NOT MOVE.
      //
      // Blinds take light off the wall and spill puts light back beside it, and
      // both are near-field detail that has to dissolve into the SAME far-field
      // number as before or a building changes brightness as you approach it.
      // So the profile is divided by its own mean: a smoothstep ramp integrates
      // to half its width, so a spill of sx either side of the rectangle adds
      // sx to the mean of that axis (clamped, since it cannot leave the cell),
      // and the blind multiplies the whole thing by BLIND_KEEP. Measured over
      // 2812 buildings across the seven packs the normaliser runs 1.09x to
      // 1.21x (mean 1.13), so the blinds take rather more off than the spill
      // puts back and the pane itself ends up brighter to compensate.
      float spillMeanX = min(1.0, winMeanX + sx);
      float spillMeanY = min(1.0, winMeanY + sy);
      float profileMean = ${Eb}
                        * (winMean + ${_h} * max(0.0, spillMeanX * spillMeanY - winMean));
      float profile = (winX * litY + ${_h} * halo) * (winMean / max(profileMean, 1e-4));

      // Correlated occupancy: cores, then floors, then tenancies, then the
      // individual window. See facade.ts -- an independent coin per cell is
      // exactly what produced a checkerboard.
      float litPattern = facadeLit(fp, colIdx, floorIdx, heightFade) * profile * openPick * capped;
      float occ = facadeMeanOccupancy(fp, heightFade);
      // Same treatment as the window pattern: resolve individual lit windows
      // up close, converge to the average glow of a lit building far away. The
      // far-field term is untouched by the blinds and the spill, which is the
      // whole point of the normaliser above.
      float lit = mix(occ * winMean * openMean, litPattern, detail);

      // WHAT IS LIT TOGETHER IS LIT THE SAME.
      //
      // Colour and brightness are per TENANCY, not per window. One flat's three
      // windows are lit by the same lamps and one office floor's fluorescents
      // are the same tube across the whole let, so a coin per cell is the same
      // uncorrelated noise this file's occupancy model exists to replace -- it
      // was the last thing on a night facade still flipping cell by cell.
      //
      // Both converge on the CELL's own pixel footprint, and not on the
      // tenancy's own larger one. Converging on the tenancy was tried first and
      // it is wrong twice over: a block of four by two cells is still several
      // pixels across at a kilometre, so what survived out there was not a
      // patch of lit windows but a rectangle of the wall's own mean glow at a
      // different brightness and hue from the rectangle beside it, and the
      // mid-field towers came out as tan and grey mosaics. A tenancy's colour
      // and its brightness are carried BY its lit windows, so they have to
      // dissolve when those do.
      float tb = floor(colIdx / fp.tenantW);
      float th = floor(floorIdx / fp.tenantH);

      // A third of the windows cool. Offices are fluorescent and LED, homes
      // are warm, and a city that is entirely sodium-orange at night is a city
      // from before about 1995. Homes lean warm and offices lean cool, which
      // is why the mix is keyed on the occupancy group and not on a coin.
      float coolBias = fp.group < 0.5 ? 0.80 : 0.42;
      vec3 warmC = vec3(1.0, 0.74, 0.42);
      vec3 coolC = vec3(0.82, 0.88, 1.0);
      // step() fires on a fraction (1 - coolBias) of the tenancies, so that is
      // exactly the colour this converges to once the windows are under a pixel.
      vec3 warm = mix(mix(warmC, coolC, 1.0 - coolBias),
                      mix(warmC, coolC, step(coolBias, hash21(vec2(tb * 0.37 + fp.seed, th * 0.71)))),
                      detail);

      // AND THEY ARE NOT ALL THE SAME BRIGHTNESS.
      //
      // The lit flag is binary, so every lit window was emitting the identical
      // 0.09 and a facade came out as a punched card. Across a real night frame
      // the spread is several stops. Per tenancy again, log-distributed, and
      // normalised to a mean of exactly 1 (see LAMP_NORM) so the city's night
      // exposure is where it was. Converges to 1 as the windows dissolve, so
      // the far field is unchanged.
      float gain = mix(1.0,
                       exp(mix(log(${cl}), log(${hl}),
                               hash21(vec2(tb * 1.63 + fp.seed * 7.0, th * 0.29 + 3.0))))
                       * ${Tb.toFixed(6)},
                       detail);

      // The number to watch is not the peak, it is the MEAN. Far away this
      // converges to occupancy x winMean x scale over the whole facade, and at
      // 0.2 that mean was about four times the wall's own night lighting: a
      // warm wash over every surface, which is what made the city read tan
      // however neutral the skyglow and the albedo were made. At 0.09 the mean
      // sits at roughly the wall, so a building is dark with lit windows in
      // it, and the peak is still 12x the wall up close where it should be.
      emissive += warm * gain * lit * uNight * 0.09;

      // Shopfronts. A lit shop window is far brighter than a flat above it and
      // it is at eye height, so it carries the night street the way the lit
      // office windows carry the night skyline. Roughly half of them are lit,
      // per building, because a parade at midnight is not all open.
      if (ground > 0.5) {
        float open_ = step(0.45, hash11(fp.seed * 23.0 + 3.0));
        emissive += vec3(1.0, 0.88, 0.70) * glassMask * uNight * open_ * 0.26;
      }
    }

    // Above the wall top, a PART_WALL fragment is the outer face of the
    // parapet. A gable end is above it too and is not: it is the same siding
    // carried up to the ridge.
    if (capped < 0.5 && !gableEnd) {
      albedo = parapetColour(fp);
      skyOcc = 0.9;
    }
  } else if (part < 1.5) {
    // --- Roof -----------------------------------------------------------
    // Roofs are dirtier and flatter than facades, and they are what you see
    // most of from an aircraft, so they get their own noise rather than the
    // facade colour applied upward.
    // Two octaves at scales with no common factor, the second one ROTATED.
    // Both on the same axis-aligned grid at 2:1 contrast came out as a
    // chessboard, which from directly above is the largest single surface in
    // the frame and the most obviously fake thing in it.
    vec2 rp = mat2(0.88, 0.47, -0.47, 0.88) * vWorld.xz;
    vec2 sp = vWorld.xz + fp.seed * 97.0;
    // Three smooth octaves, from gravel grain up to the scale a roof soils
    // over. Continuous, so no lattice survives to be seen as pixels.
    float g = 0.55 * vnoise(sp * 1.9)
            + 0.30 * vnoise(rp * 0.55 + fp.seed * 7.0)
            + 0.15 * vnoise(sp * 0.19);
    // Real roofs are tar, black membrane and gravel: about 0.06-0.12 linear.
    // These were 0.26-0.42, two to three times too reflective, which made the
    // roof the BRIGHTEST surface in a top-down shot when in every aerial
    // photograph it is the darkest.
    albedo = mix(vec3(0.128, 0.128, 0.122), vec3(0.188, 0.183, 0.170), g);
    // Patchwork: membrane seams, ponding, a re-covered section. One more
    // octave, at a scale a roof actually varies over.
    // Re-covered sections DO have hard edges, so this layer keeps its lattice.
    // What changes is that it is sparse: a roof has a couple of patches, not a
    // different value in every cell. Everything else is the smooth grain above.
    float patchCell = hash21(floor(rp * 0.085) + fp.seed * 13.0);
    float repatch = step(0.72, patchCell) * (0.5 + 0.5 * hash21(floor(rp * 0.085) + 3.7));
    albedo *= 0.88 + 0.20 * g;
    albedo *= 1.0 - 0.14 * repatch;
  } else if (part < 2.5) {
    // --- Parapet --------------------------------------------------------
    // The low wall round the roof edge. Coped in stone or concrete whatever
    // the wall below is made of, so it is its own pale grey rather than the
    // facade colour carried upward -- which is exactly the line that makes a
    // box read as a building from the air.
    albedo = parapetColour(fp);
    // The inner face of the parapet is in permanent shade from the roof.
    albedo *= n.y < -0.01 ? 0.7 : 1.0;
    skyOcc = 0.85;
  } else {
    // --- Rooftop plant --------------------------------------------------
    // Air handlers, chillers, stair overruns, tanks. Galvanised and painted
    // metal, greyer and slightly glossier than the roof they stand on.
    float g = vnoise(vWorld.xz * 0.6 + fp.seed * 41.0);
    albedo = mix(vec3(0.30, 0.30, 0.31), vec3(0.46, 0.46, 0.45), g);
    if (isRoof > 0.5) albedo *= 0.86;   // the tops streak and collect dirt
    skyOcc = 0.8;
  }

  // At night a facade has no colour of its own. It is lit by skyglow and by
  // whatever is lit opposite it, and both are the same colour for every
  // building on the block -- so carrying the daytime brick, sandstone and
  // concrete palette through at full strength is what made a night city read
  // as a tan photograph with dots sprinkled over it. The windows keep their
  // colour, because they are the light source rather than a surface.
  if (uNight > 0.02) {
    float ng = dot(albedo, vec3(0.299, 0.587, 0.114));
    albedo = mix(albedo, vec3(ng * 0.55), uNight * 0.88);
  }

  albedo *= (1.0 - 0.35 * uWetness);

  float ndl = max(0.0, dot(n, uSunDir));
  vec3 sunT = sunTransmittance(atmoOrigin(max(0.0, vWorld.y)), uSunDir, uTurbidity);
  // Cascaded shadow map. It multiplies the DIRECT beam and the sun's specular
  // and nothing else: a wall in shadow is still lit by the sky above it and by
  // the light bouncing off everything opposite, which is why real city shadows
  // are blue rather than black.
  float sunVis = sunVisibility(vWorld, n, uSunDir, vViewDist);
  // The window reveal shadows itself before the cascade ever gets to say so: a
  // 200 mm setback is far under one shadow-map texel, so nothing in the pass
  // above can draw the line under a window head.
  sunVis *= revealShade;
  vec3 direct = uSunColor * uSunIntensity * uSunSurface * sunT * ndl * sunVis;
  // Moonlight, same units as the sun beam. Lit windows alone made a night city
  // read as a floating grid of dots with no buildings behind them; this is
  // what puts the facades back under the lights.
  vec3 beam = direct + uMoonLight * uSunSurface * max(0.0, dot(n, uMoonDir));

  // Sky irradiance, from the scene probe. This used to be a hemispherical
  // constant in n.y with a hand-rolled fudge to make faces toward the sun a
  // little brighter; the probe measures that instead, and gets the sunset case
  // right for the same cost, because an SH evaluation IS nine multiply-adds.
  //
  // Two occlusions, at two scales, and they do not overlap.
  //
  //   skyOcc is the STREET CANYON: the building across the road, forty metres
  //   away and frequently outside the frame. Analytic, from the height up the
  //   wall, because no screen-space search can see it.
  //
  //   sampleSkyOcclusion is the CONTACT: the pavement at the foot of the wall,
  //   the inside corner where two wings meet, the parapet, the plant room. Six
  //   metres of measured geometry.
  //
  // The bent normal is what turns the second one into enclosure rather than
  // dirt in the corners. A wall in a canyon looks the sky up along the strip it
  // can actually see -- upward, and out along the street -- instead of getting
  // a uniformly dimmed sample of the whole dome.
  //
  // Both multiply the SKY term and neither touches the beam above. Skyglow is
  // left alone as well: it comes from the street, not from the dome, so a
  // hemisphere-shaped occlusion is the wrong instrument for it.
  vec3 ambient = occludedSkyIrradiance(n) * skyOcc
               + uNightGlow * (1.0 - 0.35 * n.y);

  // BOUNCE. The wall opposite is lit, and it is lit AT you.
  //
  // Once the exposure was corrected the shaded sides went blue-black, and that
  // is not what a shaded wall looks like on a sunny day: the building across
  // the street is in full sun, it is roughly mid-grey, and it throws a large
  // fraction of that straight back. In a canyon the bounce can rival the sky.
  //
  // The probe cannot supply this. Its lower hemisphere is a flat ground plane
  // and it contains no city, deliberately, because a probe that contained the
  // buildings would feed its own output back into itself.
  //
  // So it is analytic, and skyOcc is exactly the right weight INVERTED: that
  // term already measures how much of the sky dome a point up a wall has lost
  // to the building opposite. Whatever it lost to, it gained a lit wall from.
  // A rooftop (skyOcc 1) gets none; the foot of a canyon wall gets the most.
  //
  // Mean city albedo is about 0.2 and the bounce is one diffuse reflection off
  // a vertical surface, so the coefficient is deliberately modest. Tinted by
  // the sun through the same transmittance the direct beam uses, because the
  // light doing the bouncing is sunlight and at low sun it is orange.
  // The weight is what the AO pass MEASURED, not the height up the wall.
  //
  // skyOcc is analytic from vUv.y and saturates to 1 above about 48 m, so in a
  // canyon at 65 m it contributed nothing and the bounce term multiplied to
  // zero: exactly the frame that needed it most got none. A wall that high
  // between two 150 m towers still faces a great deal of lit wall.
  //
  // sampleSkyOcclusion is the real geometry, so whatever sky it says this point
  // has lost, it has gained a lit surface in the same direction. Both terms are
  // kept: the analytic one still carries the far side of the street, which no
  // screen-space search can see.
  SkyOcclusion bounceOccl = sampleSkyOcclusion(n);
  float bounceOcc = max(1.0 - bounceOccl.visibility, 1.0 - skyOcc);
  float horizonWeight = 1.0 - abs(n.y);
  vec3 bounce = uSunColor * uSunIntensity * uSunSurface * sunT
              * (0.35 * bounceOcc * horizonWeight * max(0.0, uSunDir.y));

  vec3 ambientTotal = ambient + bounce;

  // seeIn takes the ambient in full and only a tenth of the beam. A vertical
  // shop window does not put the sun on its own back wall: what the sun does is
  // reach a strip of floor just inside the cill and bounce a little of that back
  // out, which is why a sunlit parade still shows its interiors instead of
  // going flat black. At the full beam the bay would outrun the pier beside it
  // and the base of every sunlit elevation would read as a row of light boxes.
  vec3 lit = albedo * (beam + ambientTotal) + seeIn * (ambientTotal + beam * 0.10)
           + emissive;

  vec3 v = normalize(uCameraPos - vWorld);

  // --- Glass ------------------------------------------------------------
  //
  // A glass tower is a MIRROR, and that is not a detail: looking at one
  // straight on you see a dark green-grey pane, and at a grazing angle you see
  // the sky. The whole angular swing happens over about thirty degrees, and it
  // is what separates a glass building from a grey one. Terrain does the same
  // thing for water and for the same reason.
  //
  // The reflected radiance is the scene sky probe, sampled at the facade
  // family's own roughness: see render/skyprobe.ts. One probe serves every
  // building because the sky is at infinity, which is what makes this
  // affordable where a probe per building never could be. It is the sky and the
  // ground rather than the real skyline reflected back, so a tower does not
  // show its neighbours; what it does show is the right colour swinging the
  // right way at the right angle, which is what the eye is reading.
  //
  // Modulated by glassMask, so the spandrel panel between the floors stays
  // matte. A tower that is shiny all over reads as plastic.
  if (glassMask > 0.004) {
    vec3 refl = reflect(-v, n);

    // WHAT IS UNDER THE HORIZON IS A CITY, NOT A FIELD.
    //
    // The probe has no geometry in it (see render/skyprobe.ts, which explains
    // why), so its lower hemisphere is one shaded ground plane at 0.16 albedo
    // with the sun full on it. For a tower in open country that is right. For
    // one in the Loop it is the single most wrong thing in the reflection: a
    // downward reflected ray there lands on the flank of the building opposite,
    // which is in its own shadow half the day and is dark building mass the
    // rest of it, and instead the facade returns bright sunlit prairie.
    //
    // The fix is not an invented darkening. render/urbanmask.ts already carries
    // a MEASURED built-ness field over the footprints in the pack, and it is
    // sampled at the building's own position, so a tower downtown reflects dark
    // mass below the horizon and one on the edge of the map still reflects
    // ground. Same texture and same lookup the terrain shader runs.
    vec2 urbanUv = vWorld.xz / (2.0 * uUrbanExtent) + 0.5;
    float built = texture(uUrban, urbanUv).r
                * step(0.0, urbanUv.x) * step(urbanUv.x, 1.0)
                * step(0.0, urbanUv.y) * step(urbanUv.y, 1.0);
    // Faded across the horizon over a few degrees rather than switched at it:
    // a hard edge here draws a hard line across every glass tower in the frame,
    // which is the defect the probe's own ground fade exists to avoid.
    float underHorizon = smoothstep(0.02, -0.10, refl.y);
    // 0.55 leaves 45% of the open-ground radiance at full built-ness. A dense
    // downtown block is not black -- it is masonry and glass at 0.2 albedo lit
    // by the same sky, next to open ground at 0.16 albedo lit by sky AND sun --
    // so roughly half is what the difference between those two actually is.
    float urbanDark = 1.0 - 0.55 * built * underHorizon * (1.0 - uFlatRefl);
    // The cube holds RADIANCE in the same linear HDR space this shader writes,
    // so it goes straight into the Fresnel mix with no scale factor. That is
    // the point of capturing it through the same atmosphere the sky dome runs:
    // the reflection and the sky behind the tower are the same numbers.
    //
    // Skyglow is added on top because the probe has no city in it, and after
    // dark a glass tower reflects the city rather than the sky.
    // revealOcc, because on a curtain wall this reflection IS the pixel: the
    // glass albedo is 0.08 and everything you see in a glass tower is the sky
    // coming back off it. A pane at the bottom of a 100 mm box reflects the
    // soffit above it, not the dome, and without this the reveal shows up
    // everywhere except on the buildings it was written for.
    vec3 skyRefl = (textureLod(uEnv, refl, clamp(roughness, 0.0, 1.0) * uEnvMaxLod).rgb * urbanDark
                 + uNightGlow * 0.4) * revealOcc;
    // Schlick, on the reflectance of the glazing this family is actually built
    // with -- fp.f0, out of the same table roughness and relief come from. A
    // curtain wall is a coated insulating unit at 0.22 and a punched masonry
    // window is a bare pane over a dark room at 0.05; see the note on f0 in
    // render/facade.ts for where those two numbers come from.
    //
    // This replaced a flat 0.04 for every wall in the city, which is the
    // reflectance of ONE air/glass interface and is the wrong material: it put
    // 7% of the sky on a curtain wall at 45 degrees, so a tower shaded almost
    // entirely as diffuse albedo and read as painted concrete. Measured over
    // the facade mask on chicago-loop-day, the old reflection moved mean facade
    // luminance by 1.3% against a non-directional one -- the radiance term was
    // never the problem, the reflectance was.
    float f0 = mix(fp.f0, 0.04, uFlatRefl);
    float f = pow(1.0 - clamp(dot(v, n), 0.0, 1.0), 5.0);
    float fres = f0 + (1.0 - f0) * f;
    lit = mix(lit, skyRefl, fres * glassMask * (1.0 - roughness * 0.6));
  }

  // Specular: a tight sun glint on glass, a broad one on wet stone.
  float gloss = max(glassMask, uWetness);
  if (gloss > 0.02) {
    float shine = mix(900.0, 40.0, roughness);
    vec3 h = normalize(v + uSunDir);
    float spec = pow(max(0.0, dot(n, h)), shine);
    lit += uSunColor * uSunIntensity * uSunSurface * sunT * spec * gloss * 1.4 * sunVis;
    vec3 hm = normalize(v + uMoonDir);
    lit += uMoonLight * uSunSurface * pow(max(0.0, dot(n, hm)), shine) * gloss * 1.4;
  }

  vec3 ro = atmoOrigin(uCamAltitude);
  vec3 rd = normalize(vWorld - uCameraPos);
  vec3 trans;
  vec3 inscatter = atmosphere(ro, rd, vViewDist, trans);

  fragColor = vec4(lit * trans + inscatter, 1.0);
  if (uBuildingDebug > 0.5) {
    // The GEOMETRIC normal, not the relief-perturbed n the Fresnel term uses:
    // this is classifying FACES, and the per-pixel bump would scatter pixels
    // across the threshold inside one wall and blur the two populations into
    // each other. The face angle is what the classification is about.
    float faceCos = clamp(dot(v, normalize(vNormal)), 0.0, 1.0);
    float graze = uBuildingDebug > 1.5 ? step(faceCos, GRAZE_COS) : 1.0;
    fragColor = vec4(0.0, 0.0, facadeMarker * graze, 1.0);
  }
}
`;function Rb(n){return{...n,...to(),uCameraPos:{value:new N},uSH:{value:ia([.2,.24,.3],.55,.45)},uEnv:{value:null},uEnvMaxLod:{value:6},uNight:{value:0},uNightGlow:{value:new Ee(0,0,0)},uMoonDir:{value:new N(0,-1,0)},uMoonLight:{value:new Ee(0,0,0)},uWetness:{value:0},uSunSurface:{value:.105},uFlatGlass:{value:0},uFlatRefl:{value:0},uUrban:{value:null},uUrbanExtent:{value:1},uBuildingDebug:{value:0},uExposure:{value:1},uSunDir:{value:new N(0,1,0)},uSunColor:{value:new Ee(1,1,1)},uSunIntensity:{value:16},uMieG:{value:.76},uTurbidity:{value:1},uCamAltitude:{value:100},uMultiScatter:{value:.055},uFacade:{value:null},uFacadeWidth:{value:1},uHourFactor:{value:new N(1,1,1)}}}function Cb(){return{pos:[],nrm:[],uv:[],info:[],idx:[]}}function ga(n,e,t){let i=!1;const a=n.length/2;for(let s=0,o=a-1;s<a;o=s++){const r=n[s*2],l=n[s*2+1],c=n[o*2],h=n[o*2+1];l>t!=h>t&&e<(c-r)*(t-l)/(h-l)+r&&(i=!i)}return i}function Db(n,e,t,i,a,s,o,r,l){const c=(g,v,m,u,w,x,_,y,S,A,C,M,b,T,P,I)=>{const F=n.pos.length/3;n.pos.push(g,v,m,u,w,x,_,y,S,A,C,M);for(let k=0;k<4;k++)n.nrm.push(b,T,P),n.uv.push(0,0),n.info.push(r,l,I,Sb);n.idx.push(F,F+1,F+2,F,F+2,F+3)},h=e-i,d=e+i,p=t-a,f=t+a;c(h,s,p,h,o,p,d,o,p,d,s,p,0,0,-1,0),c(d,s,f,d,o,f,h,o,f,h,s,f,0,0,1,0),c(h,s,f,h,o,f,h,o,p,h,s,p,-1,0,0,0),c(d,s,p,d,o,p,d,o,f,d,s,f,1,0,0,0),c(h,o,p,h,o,f,d,o,f,d,o,p,0,1,0,1)}function Pb(n,e,t,i,a,s,o){let r=1/0,l=-1/0,c=1/0,h=-1/0;for(let v=0;v<e.ring.length;v+=2)r=Math.min(r,e.ring[v]),l=Math.max(l,e.ring[v]),c=Math.min(c,e.ring[v+1]),h=Math.max(h,e.ring[v+1]);const d=l-r,p=h-c;if(d<6||p<6)return;const f=i.boxes+(i.overrun?1:0);let g=0;for(let v=0;v<f*6&&g<f;v++){const m=Yn(o,2048+v,1),u=Yn(o,2048+v,2),w=r+d*(.12+.76*m),x=c+p*(.12+.76*u);if(!ga(e.ring,w,x))continue;const _=i.overrun&&g===0,y=Yn(o,2304+v,3),S=Yn(o,2304+v,4),A=Yn(o,2304+v,5),C=_?2.2+1.8*y:1.1+1.6*y,M=_?2+1.8*S:1+1.5*S,b=_?3+1.6*A:.9+1.6*A;!ga(e.ring,w-C,x-M)||!ga(e.ring,w+C,x-M)||!ga(e.ring,w-C,x+M)||!ga(e.ring,w+C,x+M)||(Db(n,w,x,C,M,t,t+b,a,s),g++)}}function Lb(n){const e=n.length/2;if(e<3)return null;let t=1/0,i=1,a=0,s=0,o=0,r=0,l=0;for(let u=0;u<e;u++){const w=(u+1)%e,x=n[w*2]-n[u*2],_=n[w*2+1]-n[u*2+1],y=Math.hypot(x,_);if(y<.05)continue;const S=x/y,A=_/y;let C=1/0,M=-1/0,b=1/0,T=-1/0;for(let I=0;I<e;I++){const F=n[I*2],k=n[I*2+1],H=F*S+k*A,V=-F*A+k*S;H<C&&(C=H),H>M&&(M=H),V<b&&(b=V),V>T&&(T=V)}const P=(M-C)*(T-b);P<t&&(t=P,i=S,a=A,s=C,o=M,r=b,l=T)}if(!isFinite(t))return null;const c=(s+o)/2,h=(r+l)/2,d=c*i+h*-a,p=c*a+h*i;let f=(o-s)/2,g=(l-r)/2,v=i,m=a;if(g>f){v=-a,m=i;const u=f;f=g,g=u}return g<.5?null:{cx:d,cz:p,ux:v,uz:m,halfL:f,halfW:g,area:4*f*g}}const yh=.45,Ib=20,bh=61455;function Fb(n,e,t){if(n.roof!==Ye.Pitched||e<4||e>Ib)return null;const i=n.ring.length/2;if(i<3||i>64)return null;const a=Lb(n.ring);if(!a)return null;const s=Math.abs(Vs(n.ring))/a.area;if(s<.72)return null;const o=20+14*Yn(t,bh,1);let r=a.halfW*Math.tan(o*Math.PI/180);if(r=Math.min(r,4.5,.55*e,e-2.4),r<1)return null;const l=s>=.88&&Yn(t,bh,2)<.5;return{obb:a,rise:r,gable:l,ridgeHalfL:Math.max(0,a.halfL-a.halfW)}}function Ub(n,e,t,i,a,s,o){const{obb:r,gable:l,ridgeHalfL:c}=e,{ux:h,uz:d,halfL:p,halfW:f}=r,g=-d,v=h,m=p+yh,u=f+yh,w=i-t,x=Math.hypot(u,w),_=Math.hypot(m-c,w),y=(T,P,I,F,k,H)=>{const V=n.pos.length/3;for(const[z,j,ee,oe,Se]of T)n.pos.push(r.cx+z*h+j*g,ee,r.cz+z*d+j*v),n.nrm.push(P,I,F),n.uv.push(oe,Se),n.info.push(s,o,H,k);for(let z=1;z+1<T.length;z++)n.idx.push(V,V+z,V+z+1)},S=l?m:c,A=u/x,C=w/x,M=[[-m,u,t,0,0],[m,u,t,2*m,0],[S,0,i,S+m,x],[-S,0,i,m-S,x]],b=[[m,-u,t,0,0],[-m,-u,t,2*m,0],[-S,0,i,m+S,x],[S,0,i,m-S,x]];if(S<.001&&(M.pop(),b.pop()),y(M,g*C,A,v*C,ws,1),y(b,-g*C,A,-v*C,ws,1),l)y([[p,f,t,0,o],[p,-f,t,2*f,o],[p,0,i,f,i-a]],h,0,d,wh,0),y([[-p,-f,t,0,o],[-p,f,t,2*f,o],[-p,0,i,f,i-a]],-h,0,-d,wh,0);else{const T=(m-c)/_,P=w/_;y([[m,u,t,0,0],[m,-u,t,2*u,0],[c,0,i,u,_]],h*P,T,d*P,ws,1),y([[-m,-u,t,0,0],[-m,u,t,2*u,0],[-c,0,i,u,_]],-h*P,T,-d*P,ws,1)}}function Nb(n,e,t,i,a=Is,s){const o=e.ring.length/2;if(o<3)return;const r=t+e.baseM,l=t+e.topM,c=l-r;if(c<=.5)return;const h=r-3,d=s?s.seed*4096:i,p=Fb(e,c,d),f=!p&&a.parapet&&s?Math.max(.4,s.parapetM):0,g=p?l-p.rise:l,v=p?g:l+f,m=g-r,u=(_,y)=>n.info.push(i,m,_,y);let w=0;for(let _=0;_<o;_++){const y=(_+1)%o,S=e.ring[_*2],A=e.ring[_*2+1],C=e.ring[y*2],M=e.ring[y*2+1],b=C-S,T=M-A,P=Math.hypot(b,T);if(P<.05)continue;const I=T/P,F=-b/P,k=n.pos.length/3;n.pos.push(S,h,A,C,h,M,C,v,M,S,v,A);for(let z=0;z<4;z++)n.nrm.push(I,0,F);const H=h-r,V=m+f;n.uv.push(w,H,w+P,H,w+P,V,w,V);for(let z=0;z<4;z++)u(0,yb);if(n.idx.push(k,k+2,k+1,k,k+3,k+2),f>0){const z=n.pos.length/3;n.pos.push(S,l,A,C,l,M,C,v,M,S,v,A);for(let j=0;j<4;j++)n.nrm.push(-I,0,-F);n.uv.push(w,c,w+P,c,w+P,V,w,V);for(let j=0;j<4;j++)u(0,Mb);n.idx.push(z,z+1,z+2,z,z+2,z+3)}w+=P}const x=rb(e.ring);if(x.length){const _=n.pos.length/3;for(let y=0;y<o;y++)n.pos.push(e.ring[y*2],g,e.ring[y*2+1]),n.nrm.push(0,1,0),n.uv.push(e.ring[y*2],e.ring[y*2+1]),n.info.push(i,m,1,bb);for(let y=0;y+2<x.length;y+=3)n.idx.push(_+x[y],_+x[y+2],_+x[y+1])}p?Ub(n,p,g,l,r,i,m):(a.boxes>0||a.overrun)&&Pb(n,e,l,a,i,m,d)}function kb(n,e){if(!n.idx.length)return null;const t=new At;t.setAttribute("position",new qt(n.pos,3)),t.setAttribute("normal",new qt(n.nrm,3)),t.setAttribute("uv",new qt(n.uv,2)),t.setAttribute("info",new qt(n.info,4)),t.setIndex(n.pos.length/3>65535?new Ys(n.idx,1):new qs(n.idx,1)),t.computeBoundingSphere();const i=new nn({vertexShader:_b,fragmentShader:Ab,uniforms:e,glslVersion:zt,side:gn});return new _t(t,i)}const Ws=1024;function Ob(n){const e=n.length*fd,t=Math.max(1,Math.ceil(e/Ws)),i=new Uint8Array(Ws*t*4),a=new Float32Array(Ta);for(let s=0;s<n.length;s++){nb(n[s],a,0);for(let o=0;o<Ta;o++){const[r,l]=Jy(a[o]),c=(s*Ta+o)*2;i[c]=r,i[c+1]=l}}return{data:i,height:t}}function zb(n){const{data:e,height:t}=Ob(n),i=new xi(e,Ws,t,wt,yt);return i.minFilter=mt,i.magFilter=mt,i.generateMipmaps=!1,i.needsUpdate=!0,i}class Bb{group=new jn;uniforms;stats;constructor(e,t,i,a){this.uniforms=Rb(i);const s=xb(e,a.buildingTriangleBudget),o=new Map,r=[],l=new Array(5).fill(0);let c=0,h=0,d=0,p=0,f=0;for(let m=0;m<e.buildings.length;m++){const u=e.buildings[m],w=Math.hypot(u.cx,u.cz),x=u.topM-u.baseM;if(x<md(w,s)){h++;continue}const _=Math.abs(Vs(u.ring));if(x<8&&_>2e4){d++;continue}if(Vs(u.ring)<0){const T=u.ring;for(let P=0,I=T.length/2-1;P<I;P++,I--){const F=T[P*2],k=T[P*2+1];T[P*2]=T[I*2],T[P*2+1]=T[I*2+1],T[I*2]=F,T[I*2+1]=k}}const y=fb(u,t),S=`${Math.floor(u.cx/vh)},${Math.floor(u.cz/vh)}`;let A=o.get(S);A||(A=Cb(),o.set(S,A));const C=Qy(u.kind,x,m),M=r.length;r.push(C),l[C.family]++;const b=vd(w,s,x,_,u.kind,u.roof);b.parapet&&p++,f+=b.boxes+(b.overrun?1:0),Nb(A,u,y,M,b,C),c++}const g=zb(r);this.uniforms.uFacade.value=g,this.uniforms.uFacadeWidth.value=Ws;let v=0;for(const m of o.values()){const u=kb(m,this.uniforms);u&&(u.layers.enable(za),v+=m.idx.length/3,this.group.add(u))}this.stats={drawn:c,skippedFar:h,skippedFlat:d,triangles:v,cells:o.size,lod:s,parapets:p,plantBoxes:f,families:l}}dispose(){this.uniforms.uFacade.value?.dispose();for(const e of this.group.children){const t=e;t.geometry?.dispose(),t.material?.dispose()}this.group.clear()}}const Hb=je.Pedestrian;function Mh(n){return(n.flags&Ha)!==0?!1:n.cls<Hb}const xs=.3,Gb=200,Vb=250;function Wb(n,e){const t=n.s.length;if(t===0)return 0;if(e<=n.s[0])return n.y[0];if(e>=n.s[t-1])return n.y[t-1];for(let i=1;i<t;i++)if(e<=n.s[i]){const a=n.s[i]-n.s[i-1],s=a>1e-6?(e-n.s[i-1])/a:0;return n.y[i-1]+(n.y[i]-n.y[i-1])*s}return n.y[t-1]}class Xb{cells=new Map;x=[];z=[];key(e,t){return e*73856093^t*19349663}find(e,t,i){const a=Math.floor(e/xs),s=Math.floor(t/xs);let o=-1,r=xs*xs;for(let d=-1;d<=1;d++)for(let p=-1;p<=1;p++){const f=this.cells.get(this.key(a+p,s+d));if(f)for(const g of f){const v=this.x[g]-e,m=this.z[g]-t,u=v*v+m*m;(u<r||u===r&&o>=0&&g<o)&&(r=u,o=g)}}if(o>=0||!i)return o;const l=this.x.length;this.x.push(e),this.z.push(t);const c=this.key(a,s),h=this.cells.get(c);return h?h.push(l):this.cells.set(c,[l]),l}}function $b(n,e,t){const i=Date.now(),a=new Array(n.length).fill(null),s=[];for(let b=0;b<n.length;b++)(n[b].flags&sa)!==0&&n[b].pts.length>=4&&s.push(b);const o=()=>({deck:a,stats:{bridgeWays:s.length,chains:0,abutments:0,orphanChains:0,orphanChainsLifted:0,orphanChainsDraped:0,longestChainM:0,buildMs:Date.now()-i}});if(s.length===0)return o();const r=new Xb,l=[],c=[],h=[],d=[];for(let b=0;b<n.length;b++){const T=(n[b].flags&sa)!==0,P=Mh(n[b]),I=n[b].pts;for(let F=0;F<I.length;F+=2){const k=r.find(I[F],I[F+1],!0);for(;l.length<=k;)l.push(b),c.push(!1),h.push(!1),d.push(!1);l[k]!==b&&(c[k]=!0),T||(P?h[k]=!0:d[k]=!0)}}const p=[],f=[],g=[];for(const b of s){g.push(Mh(n[b]));const T=n[b].pts,P=T.length/2,I=[],F=[];let k=0;for(let H=0;H<P;H++){H>0&&(k+=Math.hypot(T[H*2]-T[(H-1)*2],T[H*2+1]-T[(H-1)*2+1]));const V=r.find(T[H*2],T[H*2+1],!1),z=H===0||H===P-1;V>=0&&(z||c[V])&&(F.length===0||k-F[F.length-1]>.001)&&(I.push(V),F.push(k))}p.push(I),f.push(F)}const v=new Map,m=new Set,u=(b,T,P)=>{b!==T&&(v.has(b)||v.set(b,[]),v.has(T)||v.set(T,[]),v.get(b).push({other:T,len:P}),v.get(T).push({other:b,len:P}))};for(let b=0;b<s.length;b++){const T=p[b],P=f[b];for(let I=1;I<T.length;I++)u(T[I-1],T[I],Math.max(.001,P[I]-P[I-1]));if(T.length===1&&!v.has(T[0])&&v.set(T[0],[]),g[b])for(const I of T)m.add(I)}const w=new Map,x=new Set;let _=0,y=0,S=0,A=0,C=0,M=0;for(const b of v.keys()){if(x.has(b))continue;const T=[],P=[b];x.add(b);let I=0;for(;P.length;){const j=P.pop();T.push(j);for(const{other:ee,len:oe}of v.get(j)??[])I+=oe*.5,x.has(ee)||(x.add(ee),P.push(ee))}_++,I>M&&(M=I);const k=T.some(j=>m.has(j))?T.filter(j=>h[j]):T.filter(j=>h[j]||d[j]);if(y+=k.length,k.length===0){S++;const j=I>Vb||T.some(oe=>Math.hypot(r.x[oe],r.z[oe])>t-Gb);j?A++:C++;const ee=j?Dn+od:Dn;for(const oe of T)w.set(oe,e(r.x[oe],r.z[oe])+ee);continue}const H=new Map;T.forEach((j,ee)=>H.set(j,ee));const V=[],z=[];for(const j of k){z.push(e(r.x[j],r.z[j])+Dn);const ee=new Float64Array(T.length).fill(1/0);ee[H.get(j)]=0;const oe=new Uint8Array(T.length);for(;;){let Se=-1,Ve=1/0;for(let Ne=0;Ne<T.length;Ne++)!oe[Ne]&&ee[Ne]<Ve&&(Ve=ee[Ne],Se=Ne);if(Se<0)break;oe[Se]=1;for(const{other:Ne,len:Le}of v.get(T[Se])??[]){const q=H.get(Ne);if(q===void 0)continue;const J=Ve+Le;J<ee[q]&&(ee[q]=J)}}V.push(ee)}for(let j=0;j<T.length;j++){let ee=0,oe=0,Se=-1;for(let Ne=0;Ne<k.length;Ne++){const Le=V[Ne][j];if(!isFinite(Le))continue;if(Le<1e-6){Se=Ne;break}const q=1/Le;ee+=q,oe+=q*z[Ne]}const Ve=T[j];w.set(Ve,Se>=0?z[Se]:ee>0?oe/ee:e(r.x[Ve],r.z[Ve])+Dn)}}for(let b=0;b<s.length;b++){const T=s[b],P=p[b],I=f[b];if(P.length<2){const F=P.length===1?w.get(P[0])??e(n[T].pts[0],n[T].pts[1])+Dn:e(n[T].pts[0],n[T].pts[1])+Dn;a[T]={s:Float32Array.from([0,Math.max(.001,B_(n[T]))]),y:Float32Array.from([F,F])};continue}a[T]={s:Float32Array.from(I),y:Float32Array.from(P.map(F=>w.get(F)??e(r.x[F],r.z[F])+Dn))}}return{deck:a,stats:{bridgeWays:s.length,chains:_,abutments:y,orphanChains:S,orphanChainsLifted:A,orphanChainsDraped:C,longestChainM:M,buildMs:Date.now()-i}}}const qb=2,Sh=1e-4;function Yb(){return{xz:[],uv:[],idx:[]}}function jb(n){return Math.max(0,n-1)*2}function Zb(n,e,t){const i=t*.5;if(!(i>0))return 0;const a=[],s=[];for(let w=0;w+1<e.length;w+=2){const x=e[w],_=e[w+1],y=a.length-1;y>=0&&Math.abs(x-a[y])<Sh&&Math.abs(_-s[y])<Sh||(a.push(x),s.push(_))}const o=a.length;if(o<2)return 0;const r=o-1,l=new Float64Array(r),c=new Float64Array(r),h=new Float64Array(r),d=new Float64Array(r),p=new Float64Array(o);for(let w=0;w<r;w++){const x=a[w+1]-a[w],_=s[w+1]-s[w],y=Math.hypot(x,_);l[w]=x/y,c[w]=_/y,h[w]=c[w],d[w]=-l[w],p[w+1]=p[w]+y}const f=n.xz.length/2;let g=0;const v=(w,x,_,y,S)=>{n.xz.push(w+y,x+S),n.uv.push(_,0),n.xz.push(w-y,x-S),n.uv.push(_,1),g++};v(a[0],s[0],p[0],h[0]*i,d[0]*i);for(let w=1;w<o-1;w++){const x=w-1,_=w;let y=h[x]+h[_],S=d[x]+d[_];const A=Math.hypot(y,S),C=A>1e-9?2/A:1/0;C<=qb?(y/=A,S/=A,v(a[w],s[w],p[w],y*i*C,S*i*C)):(v(a[w],s[w],p[w],h[x]*i,d[x]*i),v(a[w],s[w],p[w],h[_]*i,d[_]*i))}const m=r-1;v(a[o-1],s[o-1],p[o-1],h[m]*i,d[m]*i);let u=0;for(let w=0;w+1<g;w++){const x=f+w*2,_=x+1,y=x+2,S=x+3;n.idx.push(x,y,_,_,y,S),u+=2}return u}const Kb=[62,58,52,46,40,34,34,44,28,46,0,0,0,0],Jb=.06,Qb=`
const float LAMP_SPACING[14] = float[14](${Kb.map(n=>n.toFixed(1)).join(", ")});
const float LAMP_POOL_V = ${Jb.toFixed(4)};

float lampSpacingM(float cls) {
  int i = int(clamp(cls + 0.5, 0.0, 13.0));
  return LAMP_SPACING[i];
}
`,Eh=1500,eM=[0,0,1,1,2,2,2,3,2,2,3,4,4,3],tM=5,nM=[4e4,4e4,4e4,4e4,3e4,25e3,25e3,12e3,15e3,25e3,12e3,8e3,12e3,1e4],iM=6;function aM(n,e){return(nM[n]??4e3)/e}function xd(n,e,t){return e<=aM(n.cls,t)}function sM(n,e,t){for(const i of[1,1.3,1.8,2.5,3.5,5,8,13,22]){let a=0;for(let s=0;s<n.roads.length;s++){const o=n.roads[s];if((o.flags&Ha)===0&&xd(o,e[s],i)&&(a+=jb(o.pts.length/2),a>t))break}if(a<=t)return i}return 22}const oM=`
precision highp float;
in vec3 position;
in vec3 normal;
in vec2 uv;    // x: metres along the centreline, y: 0..1 across the carriageway
in vec4 info;  // class, surface kind, carriageway width in metres, bridge flag

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec3 uCameraPos;

out vec3 vWorld;
out vec3 vNormal;
out vec2 vUv;
out vec4 vInfo;
out float vViewDist;

void main() {
  vWorld = position;
  vNormal = normal;
  vUv = uv;
  vInfo = info;
  vViewDist = length(position - uCameraPos);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,rM=`
precision highp float;
in vec3 vWorld;
in vec3 vNormal;
in vec2 vUv;
in vec4 vInfo;
in float vViewDist;
out vec4 fragColor;

// Aerial perspective only, same short march the terrain and buildings use.
#define ATMO_STEPS 7
#define ATMO_SUN_STEPS 2
${_i}
${Js}
${Ou}
${Qs}
${eo}
${Qb}

uniform vec3  uCameraPos;
// The scene sky probe: what wet asphalt reflects.
uniform samplerCube uEnv;
uniform float uEnvMaxLod;
uniform float uWetness;
uniform float uSnow;
uniform float uNight;
uniform vec3  uNightGlow;
uniform vec3  uMoonDir;
uniform vec3  uMoonLight;
uniform float uSunSurface;
uniform float uFadeNear;
uniform float uFadeFar;

float hash11(float p) {
  p = fract(p * 0.1031);
  p *= p + 33.33;
  return fract(p * (p + p));
}

float hash21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

/** Value noise, smoothstep-interpolated. Cheap and, unlike gradient noise,
 *  it has usable low-frequency structure for the patch quilt. */
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

/** Soft band of half-width hw centred on c, antialiased by the pixel footprint
 *  aa. Returns 1 inside, 0 outside. */
float band(float x, float c, float hw, float aa) {
  return smoothstep(hw + aa, max(hw - aa, 0.0), abs(x - c));
}

void main() {
  // The fade, FIRST, and nothing else before it.
  //
  // Everything below is expensive, and the whole city's ribbons are resident so
  // that the near field can be complete. Past uFadeFar this shader must cost
  // one comparison, not a noise field and an atmosphere integral.
  //
  // A BRIDGE FADES ON ITS OWN, MUCH LONGER SCALE, and that is not a tweak.
  // The fade is invisible on a street because the satellite drape underneath
  // still shows a road where the ribbon stopped being drawn: what fades is the
  // detail, not the road. A bridge deck has nothing behind it but open water,
  // so the same fade deletes the bridge. At 400 to 800 m the Golden Gate --
  // 2.7 km of it -- was two towers standing in an empty strait from anywhere
  // far enough away to see the whole span, which is everywhere you would look
  // at it from.
  //
  // Bridges are 401 of San Francisco's 33,568 drawn ways, so carrying them to
  // 12 km costs almost nothing, and the ones that do reach that far are the
  // ones worth flying to.
  const float BRIDGE_FADE_NEAR = 9000.0;
  const float BRIDGE_FADE_FAR = 12000.0;
  float bridge = vInfo.w;
  float fade = bridge > 0.5
    ? 1.0 - smoothstep(BRIDGE_FADE_NEAR, BRIDGE_FADE_FAR, vViewDist)
    : 1.0 - smoothstep(uFadeNear, uFadeFar, vViewDist);
  if (fade < 0.004) discard;

  float cls    = vInfo.x;
  float surf   = vInfo.y;
  float width  = max(vInfo.z, 1.0);

  float u = vUv.x;
  float v = vUv.y;
  vec2  w = vWorld.xz;

  // A road ribbon is a surface with no inside, so it is drawn double-sided and
  // the winding decides nothing. The normal still has to point at the sky.
  vec3 n = normalize(vNormal);
  n *= sign(n.y + 1e-6);

  // Metres of world per pixel, for filtering every layer that has detail finer
  // than the screen can hold. Taken on the world position, not on any fract()ed
  // coordinate: fract has a derivative spike at every seam and fwidth of that
  // reads as an enormous footprint along a one-pixel line.
  float px = max(fwidth(w.x), fwidth(w.y)) + 1e-5;

  bool isConcrete = surf > 1.5 && surf < 2.5;
  bool isGravel   = surf > 3.5 && surf < 4.5;
  bool isDirt     = surf > 4.5 && surf < 5.5;
  bool isCobble   = surf > 5.5;
  // Track and (unsurfaced) path are unpaved whatever the surface tag says, and
  // the tag is missing far more often than not.
  bool isTrack    = cls > 12.5;
  bool unpaved    = isGravel || isDirt || (isTrack && surf < 0.5);

  // --- base surface -------------------------------------------------------
  // Linear albedos, measured-ish: asphalt really is about 0.06-0.08 and reads
  // as WRONG at the 0.2 a colour picker suggests, because a screenshot of a
  // road is a screenshot of a road under a tone curve.
  vec3 albedo = vec3(0.064, 0.063, 0.066);
  float roughness = 0.85;
  if (isConcrete)     { albedo = vec3(0.168, 0.166, 0.158); roughness = 0.80; }
  else if (isGravel)  { albedo = vec3(0.150, 0.133, 0.108); roughness = 0.97; }
  else if (isDirt)    { albedo = vec3(0.118, 0.088, 0.062); roughness = 0.99; }
  else if (isCobble)  { albedo = vec3(0.090, 0.086, 0.082); roughness = 0.78; }
  else if (isTrack)   { albedo = vec3(0.125, 0.100, 0.074); roughness = 0.98; }

  // --- aggregate: two octaves, ~0.05 m and ~0.4 m -------------------------
  // The fine octave is sub-pixel from any altitude worth flying, so it is
  // faded to its own mean by the pixel footprint rather than by distance: a
  // road seen edge-on needs the same convergence even when it is close.
  float fine   = 1.0 - smoothstep(0.03, 0.16, px);
  float medium = 1.0 - smoothstep(0.20, 1.10, px);
  float agg = mix(0.5, vnoise(w * 20.0), fine) * 0.45
            + mix(0.5, vnoise(w * 2.5 + 17.0), medium) * 0.55;
  albedo *= 1.0 + (agg - 0.5) * (unpaved ? 0.75 : 0.30);

  // RELIEF. The aggregate is a height field, so use it as one.
  //
  // Until now every ground surface in this renderer returned one flat normal
  // per triangle and put all its detail in the albedo. That is why asphalt read
  // as painted lino from a car: a real road catches a low sun across the stone
  // and this one could not, because there was nothing for the light to catch.
  //
  // The gradient is taken with dFdx/dFdy of the noise that was ALREADY
  // evaluated, so the bump costs two derivatives rather than two more octaves,
  // and it converges exactly like the albedo does because it is the same
  // number: as px grows, agg goes to its mean, the gradient goes to zero, and
  // the surface flattens instead of boiling into per-pixel noise.
  //
  // Strength is in metres of apparent depth over a metre of ground. Asphalt
  // aggregate is a few millimetres and gravel is centimetres, hence the split.
  float reliefScale = unpaved ? 0.055 : 0.018;
  vec3 tangentX = normalize(dFdx(vWorld));
  vec3 tangentY = normalize(dFdy(vWorld));
  n = normalize(n - (tangentX * dFdx(agg) + tangentY * dFdy(agg))
                    * reliefScale / max(px, 1e-4));

  // --- patch quilt --------------------------------------------------------
  // The most important layer here. Two low frequencies summed and then
  // QUANTISED, so the boundaries are hard the way a saw-cut repair edge is, and
  // each band gets its own age. Fresh asphalt is nearly black, a twenty-year-old
  // patch is pale grey, and the +-8% between them is what stops a street from
  // reading as one flat swatch.
  float p1 = vnoise(w * 0.055 + 13.0);
  float p2 = vnoise(w * 0.019 + 71.0);
  float quilt = p1 * 0.62 + p2 * 0.38;
  float bandIdx = floor(quilt * 7.0);
  float age = hash11(bandIdx * 7.31 + 2.7);
  albedo *= 1.0 + (age - 0.5) * 0.26;
  // Slight warm/cool drift between patches: bitumen batches differ.
  albedo *= mix(vec3(1.02, 1.00, 0.97), vec3(0.98, 1.00, 1.03), hash11(bandIdx * 3.9 + 8.1));
  // An old patch is polished smooth by twenty years of traffic and a fresh one
  // is open-graded and coarse, so the AGGREGATE contrast varies by patch too.
  // That is what makes the boundary read as two different surfaces meeting
  // rather than as one surface with a brightness step painted across it.
  albedo *= 1.0 + (agg - 0.5) * (0.5 - age) * 0.30;

  // --- cracks -------------------------------------------------------------
  // Ridged value noise: the ridge lives on the contour where the noise crosses
  // its midpoint, which is a connected curve, so it reads as a crack rather
  // than as speckle. Masked to the OLDER patches, because a crack running
  // straight across a fresh repair is the thing that gives the trick away.
  // Only from LOW: a hairline crack is a centimetre wide, so past about 6 cm
  // per pixel it is not a crack any more, it is a smear. The first version
  // faded out at 0.35 m/px and drew half-metre-wide worms across every street
  // from 200 m up, which read as graffiti rather than as a road surface.
  float crackDetail = 1.0 - smoothstep(0.02, 0.09, px);
  if (crackDetail > 0.01 && !unpaved) {
    float c1 = vnoise(w * 1.9 + 40.0);
    float c2 = vnoise(w * 4.7 + 91.0);
    float ridge = max(1.0 - abs(c1 * 2.0 - 1.0), (1.0 - abs(c2 * 2.0 - 1.0)) * 0.85);
    float crack = smoothstep(0.962, 0.999, ridge) * smoothstep(0.42, 0.72, age);
    albedo *= 1.0 - 0.42 * crack * crackDetail;
  }

  // --- concrete slab joints ----------------------------------------------
  // Concrete carriageway is cast in bays, and the transverse joint every ~4.6 m
  // is the thing that says "concrete" before the colour does.
  if (isConcrete) {
    float jd = band(mod(u, 4.6), 0.0, 0.05, fwidth(u) * 0.5 + 0.01)
             + band(mod(u, 4.6), 4.6, 0.05, fwidth(u) * 0.5 + 0.01);
    albedo *= 1.0 - 0.35 * clamp(jd, 0.0, 1.0) * medium;
  }

  // --- cobbles ------------------------------------------------------------
  if (isCobble) {
    vec2 cg = w * 9.0;                       // ~11 cm setts
    float cell = hash21(floor(cg));
    vec2 cf = abs(fract(cg) - 0.5);
    float mortar = smoothstep(0.36, 0.48, max(cf.x, cf.y));
    albedo *= mix(0.80 + 0.55 * cell, 0.55, mortar * medium);
  }

  // --- wheel tracks -------------------------------------------------------
  // Two per lane, and the lane count comes from the width rather than from a
  // second table: a 14 m road is four lanes and its wear is four lanes' worth.
  // Polished, not just darker -- the point is that a wet road streaks along the
  // tracks instead of shining uniformly, which is most of what a night city
  // after rain looks like from the air.
  float lanes = max(1.0, floor(width / 3.5 + 0.5));
  float lv = fract(v * lanes);
  float t1 = exp(-pow((lv - 0.30) / 0.085, 2.0));
  float t2 = exp(-pow((lv - 0.70) / 0.085, 2.0));
  float wheel = clamp(t1 + t2, 0.0, 1.0) * (unpaved ? 0.55 : 1.0);
  albedo *= 1.0 - 0.10 * wheel;
  roughness -= 0.22 * wheel;

  // The drip line. Every lane has a dark stripe of oil and rubber down its
  // middle, laid there by the sumps of everything that has ever queued on it,
  // and it is one of the few road features that survives being resurfaced. It
  // is broken up by noise along the road so it is a stain and not a stripe.
  float drip = exp(-pow((lv - 0.5) / 0.11, 2.0))
             * smoothstep(0.25, 0.75, vnoise(vec2(u * 0.13, v) + 51.0));
  albedo *= 1.0 - 0.16 * drip * (unpaved ? 0.0 : 1.0);

  // --- markings -----------------------------------------------------------
  // Presence and colour by class. Most streets in most cities carry no paint at
  // all: an unmarked residential street is not a missing feature, it is what a
  // residential street looks like, and painting every one of them is what makes
  // a render read as a MAP rather than as a city.
  bool paved      = !unpaved && cls < 10.5;
  bool hasEdge    = paved && (cls < 4.5 || (cls > 8.5 && cls < 9.5) || lanes >= 4.0);
  bool hasCentre  = paved && cls < 6.5 && lanes >= 2.0;
  bool motorway   = cls < 1.5;
  float aaV = fwidth(v) * 0.6 + 1e-4;
  float aaU = fwidth(u) * 0.6 + 1e-4;

  // Paint is ~0.12 m wide; v is normalised, so convert.
  float pw = 0.06 / width;
  float edgeV = clamp(0.45 / width, 0.015, 0.16);

  float white = 0.0;
  float yellow = 0.0;

  if (hasEdge) {
    white += band(v, edgeV, pw, aaV) + band(v, 1.0 - edgeV, pw, aaV);
  }
  if (hasCentre) {
    // Dashed white between lanes within a carriageway, solid double yellow (or
    // a median on a motorway) down the middle.
    float dash = smoothstep(3.0 + aaU * 12.0, 3.0 - aaU * 12.0, mod(u, 12.0));
    for (float i = 1.0; i < 6.0; i += 1.0) {
      if (i >= lanes) break;
      float lb = i / lanes;
      if (abs(lb - 0.5) < 0.01) continue;   // the centre is the yellow's
      white += band(v, lb, pw, aaV) * dash;
    }
    // Double yellow down the middle: the American centre line. On a motorway
    // the ribbon spans both carriageways, so the pair is opened out to read as
    // the edges of a median rather than as a centre line nobody would paint on
    // a freeway.
    float o = (motorway ? 0.45 : 0.125) / width;
    yellow += band(v, 0.5 - o, pw, aaV) + band(v, 0.5 + o, pw, aaV);
  }
  white = clamp(white, 0.0, 1.0);
  yellow = clamp(yellow, 0.0, 1.0);

  // Wear. Paint is NEVER crisp on a real road: it is scrubbed thin under the
  // wheel tracks, patchy where a repair was laid over it, and repainted at
  // different times along the same street. Everything above is multiplied by
  // this, so no marking is ever a clean rectangle.
  float wearN = vnoise(vec2(u * 0.9, v * 3.0) + 88.0) * 0.6
              + vnoise(vec2(u * 4.5, v * 14.0) + 3.0) * 0.4;
  float wear = smoothstep(0.20, 0.68, wearN) * (1.0 - 0.55 * wheel);
  wear = mix(wear, 1.0, 0.25);                 // never fully gone
  float paintFade = 1.0 - smoothstep(0.10, 0.45, px);   // sub-pixel paint dissolves
  float paint = clamp(white + yellow, 0.0, 1.0) * wear * paintFade;
  vec3 paintCol = mix(vec3(0.60, 0.60, 0.57), vec3(0.52, 0.38, 0.055),
                      yellow > white ? 1.0 : 0.0);
  albedo = mix(albedo, paintCol, paint);

  // A bridge parapet: a dark kerb line at the very edge of the deck. Cheap, and
  // it is what separates a bridge from a stripe of tarmac lying on the water.
  if (bridge > 0.5) {
    float kerb = band(v, 0.0, 0.012, aaV) + band(v, 1.0, 0.012, aaV);
    albedo = mix(albedo, vec3(0.055, 0.055, 0.058), clamp(kerb, 0.0, 1.0) * medium);
  }

  // Ploughed, not buried: a road under snow is the one dark line left in a
  // white city, so it takes a fraction of what the terrain takes.
  albedo = mix(albedo, vec3(0.86, 0.88, 0.92), uSnow * 0.30);

  // Wet asphalt is much darker than dry asphalt, and the paint much less so.
  albedo *= 1.0 - 0.46 * uWetness * (1.0 - 0.6 * paint);

  // At night a dark-adapted eye takes almost no colour or texture off a road
  // surface, exactly as in the terrain shader. The PAINT is exempt: markings
  // are retroreflective and are the brightest thing on a lit street.
  if (uNight > 0.02) {
    float g = dot(albedo, vec3(0.299, 0.587, 0.114));
    vec3 flat_ = vec3(mix(0.035, g, 0.45));
    albedo = mix(mix(albedo, flat_, uNight * 0.85), albedo * 1.9, paint * uNight);
  }

  // --- lighting, matched to the ground the road sits on -------------------
  float ndl = max(0.0, dot(n, uSunDir));
  vec3 sunT = sunTransmittance(atmoOrigin(max(0.0, vWorld.y)), uSunDir, uTurbidity);
  float sunVis = sunVisibility(vWorld, n, uSunDir, vViewDist);
  vec3 direct = uSunColor * uSunIntensity * uSunSurface * sunT * ndl * sunVis;
  vec3 beam = direct + uMoonLight * uSunSurface * max(0.0, dot(n, uMoonDir));
  // Sky irradiance from the scene probe, in place of the hemispherical constant
  // this used to run. A road is close to horizontal, so the diffuse change here
  // is small; what the probe buys on a road is the reflection below.
  // Screen-space sky occlusion on the sky term only, exactly as in terrain.ts.
  // A road is horizontal and open, so this is near 1 in the middle of a
  // carriageway and does its work at the kerb and under the buildings that
  // stand on it.
  SkyOcclusion skyOccl = sampleSkyOcclusion(n);
  vec3 ambient = min(shIrradiance(skyOccl.bentNormal) * skyOccl.visibility, shIrradiance(n));

  // BOUNCE OFF THE WALLS, which is what actually lights a street canyon. The
  // term, both its weights and why it is not the screen-space AO, are in
  // render/groundbounce.ts; the carriageway, the footway beside it and the
  // terrain drape under both share that one helper so they cannot disagree
  // about how bright a shadowed street is.
  vec3 bounce = canyonBounce(uSunColor * uSunIntensity * uSunSurface * sunT, ambient,
                             sunVis, uSunDir, builtness(vWorld));

  vec3 lit = albedo * (beam + ambient + bounce);

  // Wet asphalt is a MIRROR, and a rainy city is mostly that: a bright sky
  // lying on a dark street. The sun glint below is one point of light, the
  // reflection is the whole sky, and it is the reflection that carries it.
  //
  // Gated on wetness, so the per-fragment cube fetch is paid for only on the
  // frames a road is actually wet. The mip comes from the SAME per-fragment
  // roughness the wheel tracks already modulate, so the reflection sharpens
  // down the two polished streaks and stays diffuse on the coarse tarmac
  // between them, which is what a wet carriageway looks like from the air.
  if (uWetness > 0.02) {
    vec3 vdir = normalize(uCameraPos - vWorld);
    vec3 refl = reflect(-vdir, n);
    vec3 env = textureLod(uEnv, refl, clamp(roughness, 0.0, 1.0) * uEnvMaxLod).rgb;
    // Schlick against the 2% normal reflectance of a water film.
    float f = pow(1.0 - clamp(dot(vdir, n), 0.0, 1.0), 5.0);
    lit = mix(lit, env, (0.02 + 0.98 * f) * uWetness);
  }

  // Specular. Dry asphalt is not matte -- a low sun sheets off it -- and wet
  // asphalt is a mirror. The wheel tracks are smoother than the rest, so the
  // highlight runs in two streaks down the carriageway rather than covering it.
  // The exponent matters more than the strength. At 28 the lobe is so broad
  // that a road seen along its length under a high sun is uniformly white --
  // measured, looking down Van Ness at midday -- because every fragment on a
  // flat surface is within the lobe at once. Dry asphalt has a wide but WEAK
  // sheen; a narrow bright one is what wet asphalt has.
  float gloss = clamp((1.0 - roughness) * 0.22 + uWetness * 0.9, 0.0, 1.0);
  if (gloss > 0.01) {
    vec3 vdir = normalize(uCameraPos - vWorld);
    float shine = mix(110.0, 220.0, uWetness);
    vec3 hv = normalize(vdir + uSunDir);
    lit += uSunColor * uSunIntensity * uSunSurface * sunT
         * pow(max(0.0, dot(n, hv)), shine) * gloss * 1.5 * sunVis;
    vec3 hm = normalize(vdir + uMoonDir);
    lit += uMoonLight * uSunSurface * pow(max(0.0, dot(n, hm)), shine) * gloss * 1.5;
  }

  // --- night ---------------------------------------------------------------
  // Roads ARE the night city from the air: the lit grid is the picture. The
  // terrain paints street lamps on a random lattice because it has no idea
  // where the streets are; here the geometry knows, so the lamps go where lamps
  // go -- along the kerb, evenly spaced, alternating sides.
  if (uNight > 0.02) {
    // Carriageways only. Lighting the pavements as well put three rows of lamps
    // down every street, and the pools merged into a continuous glowing tube:
    // the city read as a diagram of its own road network rather than as a place
    // with lamps in it. A street lamp lights the STREET.
    float spacing = lampSpacingM(cls);
    if (spacing > 0.0 && !isTrack) {
      float su = u / spacing;
      float idx = floor(su);
      // On the kerb, alternating sides, with the lantern arm reaching a little
      // over the carriageway. render/streetlamps.ts stands a column over every
      // one of these, at u = (idx + 0.5) * spacing and on the same side; the
      // spacing table it places from is the one this array was generated FROM.
      // Neither number exists twice. See data/streetfurniture.ts.
      float side = mod(idx, 2.0) < 1.0 ? LAMP_POOL_V : 1.0 - LAMP_POOL_V;
      float du = (fract(su) - 0.5) * spacing;
      float dv = (v - side) * width;
      float d2 = du * du + dv * dv;
      // ~5 m pool: tight enough that consecutive lamps do not run together, so
      // there is dark road between them the way there is on a real street.
      //
      // EVERY LAMP IS LIT, and it did not used to be: half the pools were
      // switched off by a hash. That was a good way to get
      // the ragged rhythm a real run of lamps has, and it stopped being
      // available the moment there were posts, because the post is placed in
      // TypeScript and cannot evaluate this hash. A post over a dark pool is a
      // broken lamp; half the posts over dark pools is a broken street. So the
      // rhythm comes from the brightness spread alone, which is wider now to
      // make up for it.
      // Mean 0.75 against the old population's effective 0.49, so a street with
      // every lamp working is about half a stop brighter than one with half of
      // them out, rather than twice as bright.
      float bright = 0.30 + 0.90 * hash11(idx * 3.3);
      float pool = exp(-d2 * 0.018) * bright;
      // Far away the pools are sub-pixel and must converge to their mean, or
      // the whole city crawls with aliasing as the camera moves.
      float lampDetail = smoothstep(1.6, 0.35, px);
      float meanPool = 0.75 * 3.14159265 / (0.018 * spacing * width);
      pool = mix(min(meanPool, 0.22), pool, lampDetail);
      vec3 lampCol = mix(vec3(0.85, 0.90, 1.0), vec3(1.0, 0.72, 0.36),
                         smoothstep(0.05, 0.6, hash11(idx * 9.1 + 2.0)));
      lampCol = mix(vec3(1.0, 0.80, 0.55), lampCol, lampDetail);
      // Wet tarmac throws the lamp back at you: this is the single strongest
      // cue that a night city has been rained on.
      lit += lampCol * pool * uNight * (1.0 + 2.2 * uWetness) * 0.19;
      // Retroreflective paint under the lamps.
      lit += vec3(1.0, 0.95, 0.85) * paint * pool * uNight * 0.32;
    }
    lit += albedo * uNightGlow * 0.9;
  }

  // The ground/sun mask, before the atmosphere: see groundDebugColor in
  // render/groundbounce.ts. Opaque, so a faded far-field fragment cannot dilute
  // the marker into something the mask thresholds would half-accept.
  vec3 dbg;
  if (groundDebugColor(sunVis, GROUND_CARRIAGEWAY, dbg)) { fragColor = vec4(dbg, 1.0); return; }

  vec3 ro = atmoOrigin(uCamAltitude);
  vec3 rd = normalize(vWorld - uCameraPos);
  vec3 trans;
  vec3 inscatter = atmosphere(ro, rd, vViewDist, trans);

  fragColor = vec4(lit * trans + inscatter, fade);
}
`;function lM(n){return{...n,...to(),...zu(),uCameraPos:{value:new N},uSH:{value:ia([.2,.24,.3],.55,.45)},uEnv:{value:null},uEnvMaxLod:{value:6},uWetness:{value:0},uSnow:{value:0},uNight:{value:0},uNightGlow:{value:new Ee(0,0,0)},uMoonDir:{value:new N(0,-1,0)},uMoonLight:{value:new Ee(0,0,0)},uSunSurface:{value:.105},uFadeNear:{value:400},uFadeFar:{value:800},uSunDir:{value:new N(0,1,0)},uSunColor:{value:new Ee(1,1,1)},uSunIntensity:{value:22},uMieG:{value:.76},uTurbidity:{value:1},uCamAltitude:{value:100},uMultiScatter:{value:.055}}}class cM{group=new jn;uniforms;stats;constructor(e,t,i,a,s){const o=performance.now();this.uniforms=lM(i);const r=new Float64Array(e.roads.length);for(let u=0;u<e.roads.length;u++)r[u]=Math.hypot(e.roads[u].cx,e.roads[u].cz);const l=sM(e,r,a.roadTriangleBudget),c=new Map;let h=0,d=0,p=0,f=0,g=0;for(let u=0;u<e.roads.length;u++){const w=e.roads[u];if((w.flags&Ha)!==0){d++;continue}if(!xd(w,r[u],l)){p++;continue}let x=0;for(let F=2;F<w.pts.length;F+=2)x+=Math.hypot(w.pts[F]-w.pts[F-2],w.pts[F+1]-w.pts[F-1]);if(x<iM){f++;continue}const _=ao(w.cls,w.lanes,w.flags),y=(w.flags&sa)!==0,S=y?tM:eM[w.cls]??2,A=`${S}:${Math.floor(w.cx/Eh)},${Math.floor(w.cz/Eh)}`;let C=c.get(A);C||(C={ribbon:Yb(),y:[],info:[],rank:S},c.set(A,C));const M=C.ribbon.xz.length/2;if(Zb(C.ribbon,w.pts,_)===0){f++;continue}y&&g++;const T=O_(w.flags,w.layer),P=C.ribbon.xz.length/2-M,I=y?s[u]??null:null;for(let F=0;F<P;F++){const k=C.ribbon.xz[(M+F)*2],H=C.ribbon.xz[(M+F)*2+1];I?C.y.push(Wb(I,C.ribbon.uv[(M+F)*2])):C.y.push(t(k,H)+T),C.info.push(w.cls,w.surface,_,y?1:0)}h++}let v=0,m=0;for(const u of c.values()){if(!u.ribbon.idx.length)continue;const w=u.y.length,x=new Float32Array(w*3);for(let A=0;A<w;A++)x[A*3]=u.ribbon.xz[A*2],x[A*3+1]=u.y[A],x[A*3+2]=u.ribbon.xz[A*2+1];const _=new At;_.setAttribute("position",new dt(x,3)),_.setAttribute("uv",new qt(u.ribbon.uv,2)),_.setAttribute("info",new qt(u.info,4)),_.setIndex(w>65535?new Ys(u.ribbon.idx,1):new qs(u.ribbon.idx,1)),_.computeVertexNormals(),_.computeBoundingSphere();const y=new nn({vertexShader:oM,fragmentShader:rM,uniforms:this.uniforms,glslVersion:zt,side:tn,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),S=new _t(_,y);S.renderOrder=10+u.rank,this.group.add(S),v+=u.ribbon.idx.length/3,m++}this.stats={drawn:h,skippedTunnel:d,skippedFar:p,skippedShort:f,bridges:g,triangles:v,meshes:m,lod:l,buildMs:performance.now()-o}}dispose(){for(const e of this.group.children){const t=e;t.geometry?.dispose(),t.material?.dispose()}this.group.clear()}}function so(n){return`${n.s.toFixed(7)},${n.w.toFixed(7)},${n.n.toFixed(7)},${n.e.toFixed(7)}`}class _d{counts=new Map;add(e,t=1){this.counts.set(e,(this.counts.get(e)??0)+t)}total(){let e=0;for(const t of this.counts.values())e+=t;return e}entries(){return[...this.counts.entries()].sort((e,t)=>t[1]-e[1])}}function nr(n){if(n===void 0)return!1;const e=n.toLowerCase();return e!==""&&e!=="no"&&e!=="false"&&e!=="0"}const qi=.25,Th=32e3,hM=12,uM=2,dM=900,Ah=3.2,fM=/^(-?\d+(?:\.\d+)?)\s*(?:'|ft|feet)\s*(\d+(?:\.\d+)?)\s*(?:"|''|in|inch(?:es)?)?$/,pM=/^(-?\d+(?:[.,]\d+)?)\s*([a-z'"]*)$/;function ir(n){if(n===void 0)return null;const e=n.trim().toLowerCase();if(e==="")return null;const t=fM.exec(e);if(t){const s=Number(t[1]),o=Number(t[2]);return!Number.isFinite(s)||!Number.isFinite(o)?null:(s*12+o)*.0254}const i=pM.exec(e);if(!i)return null;const a=Number(i[1].replace(",","."));if(!Number.isFinite(a))return null;switch(i[2]){case"":case"m":case"metre":case"metres":case"meter":case"meters":return a;case"'":case"ft":case"feet":case"foot":return a*.3048;default:return null}}function Rh(n){if(n===void 0)return null;const e=/^-?\d+(?:[.,]\d+)?/.exec(n.trim());if(!e)return null;const t=Number(e[0].replace(",","."));return Number.isFinite(t)?t:null}const mM={house:6,detached:6,bungalow:6,semidetached_house:6,terrace:6,apartments:15,residential:10,dormitory:10,hotel:15,commercial:14,office:14,retail:8,supermarket:8,kiosk:8,industrial:10,warehouse:10,manufacture:10,church:20,cathedral:20,chapel:20,mosque:20,temple:20,synagogue:20,school:12,university:12,college:12,hospital:12,civic:12,public:12,government:12,garage:3,garages:3,shed:3,hut:3,carport:3,roof:3},gM=9,vM={house:Me.Residential,detached:Me.Residential,bungalow:Me.Residential,semidetached_house:Me.Residential,terrace:Me.Residential,apartments:Me.Residential,residential:Me.Residential,dormitory:Me.Residential,house_boat:Me.Residential,commercial:Me.Commercial,office:Me.Commercial,hotel:Me.Commercial,industrial:Me.Industrial,warehouse:Me.Industrial,manufacture:Me.Industrial,hangar:Me.Industrial,retail:Me.Retail,supermarket:Me.Retail,kiosk:Me.Retail,church:Me.Civic,cathedral:Me.Civic,chapel:Me.Civic,mosque:Me.Civic,temple:Me.Civic,synagogue:Me.Civic,shrine:Me.Civic,monastery:Me.Civic,school:Me.Civic,university:Me.Civic,college:Me.Civic,kindergarten:Me.Civic,hospital:Me.Civic,civic:Me.Civic,public:Me.Civic,government:Me.Civic,museum:Me.Civic,train_station:Me.Civic,transportation:Me.Civic,stadium:Me.Civic,tower:Me.Tower,skyscraper:Me.Tower};function wM(n,e){const t=(n.building??n["building:part"]??"").toLowerCase(),i=vM[t];return i!==void 0?e>=100&&i!==Me.Civic?Me.Tower:i:e>=100||n.man_made==="tower"||n.man_made==="communications_tower"?Me.Tower:n.office!==void 0?Me.Commercial:n.shop!==void 0?Me.Retail:n.amenity==="place_of_worship"||n.amenity!==void 0||n.tourism!==void 0?Me.Civic:n.industrial!==void 0?Me.Industrial:Me.Generic}const yd={flat:Ye.Flat,gabled:Ye.Pitched,"half-hipped":Ye.Pitched,hipped:Ye.Pitched,"gabled-hipped":Ye.Pitched,gambrel:Ye.Pitched,mansard:Ye.Pitched,skillion:Ye.Pitched,double_saltbox:Ye.Pitched,saltbox:Ye.Pitched,round:Ye.Pitched,side_half_hipped:Ye.Pitched,dome:Ye.Dome,onion:Ye.Dome,cupola:Ye.Dome,pyramidal:Ye.Pyramid,"half-pyramidal":Ye.Pyramid,quadruple_saltbox:Ye.Pyramid,spherical:Ye.Dome,cone:Ye.Tapered,conical:Ye.Tapered,spire:Ye.Tapered,pyramidal_spire:Ye.Tapered,tented:Ye.Tapered},xM=15;function _M(n,e,t){const i=(n["roof:shape"]??n["building:roof:shape"]??"").toLowerCase(),a=yd[i];if(a!==void 0)return a;const s=(n.building??"").toLowerCase();return s==="church"||s==="cathedral"||s==="chapel"?Ye.Tapered:s==="mosque"||s==="temple"||s==="synagogue"?Ye.Dome:e===Me.Residential&&s!=="apartments"&&t<=xM?Ye.Pitched:Ye.Flat}function yM(n){let e=ir(n.height??n["building:height"]);if(e===null){const a=Rh(n["building:levels"]??n.levels);if(a!==null){e=a*Ah;const s=ir(n["roof:height"]);s!==null&&(e+=s)}}if(e===null){const a=(n.building??n["building:part"]??"").toLowerCase();e=mM[a]??gM}let t=ir(n.min_height??n["building:min_height"]);if(t===null){const a=Rh(n["building:min_level"]??n.min_level);t=a!==null?a*Ah:0}(!Number.isFinite(t)||t<0)&&(t=0);const i=Math.min(dM,Math.max(uM,e));return i<=t?null:{baseM:t,topM:i}}function Ch(n,e){const t=[],i=[];for(const a of e){if(!Number.isFinite(a.lat)||!Number.isFinite(a.lon))continue;const s=n.toWorld(a.lat,a.lon),o=t.length;o>0&&Math.abs(s.x-t[o-1])<1e-6&&Math.abs(s.z-i[o-1])<1e-6||(t.push(s.x),i.push(s.z))}for(;t.length>1&&Math.abs(t[0]-t[t.length-1])<1e-6&&Math.abs(i[0]-i[i.length-1])<1e-6;)t.pop(),i.pop();return t.length<3?null:{x:t,z:i}}function bM(n){let e=0;const t=n.x.length;for(let i=0;i<t;i++){const a=i+1===t?0:i+1;e+=n.x[i]*n.z[a]-n.x[a]*n.z[i]}return e/2}function MM(n){n.x.reverse(),n.z.reverse()}function SM(n){const e=so(n);return`way["building"](${e});
 way["building:part"](${e});
 relation["building"](${e});`}function EM(n){const e=n.tags??{};return n.type==="way"?e.building!==void 0||e["building:part"]!==void 0:n.type==="relation"?e.building!==void 0:!1}const TM=9,AM=45,RM=400,CM=25,Oi=70,_s=6;function DM(n){const e=n.dx.length;let t=0,i=0;for(let a=0;a<e;a++){const s=a+1===e?0:a+1;t+=n.dx[a]*n.dz[s]-n.dx[s]*n.dz[a];const o=(n.dx[s]-n.dx[a])*qi,r=(n.dz[s]-n.dz[a])*qi,l=Math.hypot(o,r);l>i&&(i=l)}return{area:Math.abs(t/2)*qi*qi,longestEdge:i}}function PM(n,e){const t=[];for(let r=0;r<n.length;r++){const l=n[r];if(l.kind!==Me.Generic||l.topM>TM)continue;const{area:c,longestEdge:h}=DM(l);c<AM||c>RM||h>CM||t.push(r)}const i=new Map,a=r=>`${Math.floor(r.cx/Oi)},${Math.floor(r.cz/Oi)}`;for(const r of t){const l=a(n[r]),c=i.get(l);c===void 0?i.set(l,[r]):c.push(r)}const s=Oi*Oi;let o=0;for(const r of t){const l=n[r],c=Math.floor(l.cx/Oi),h=Math.floor(l.cz/Oi);let d=0;for(let p=-1;p<=1&&d<_s;p++)for(let f=-1;f<=1&&d<_s;f++){const g=i.get(`${c+p},${h+f}`);if(g!==void 0)for(const v of g){if(v===r)continue;const m=n[v].cx-l.cx,u=n[v].cz-l.cz;if(m*m+u*u<=s&&++d>=_s)break}}d<_s||(l.kind=Me.Residential,e[r]||(l.roof=Ye.Pitched),o++)}return o}function LM(n,e,t){const i=new _d,a=[],s=[];for(const o of n){const r=o.tags??{};if(r.building==="no"||r["building:part"]==="no"){i.add("tagged building=no");continue}const l=[];if(o.type==="way"){if(!o.geometry||o.geometry.length===0){i.add("way with no geometry");continue}const f=Ch(e,o.geometry);if(f===null){i.add("ring under 3 distinct vertices");continue}l.push(f)}else if(o.type==="relation"){let f=!1;for(const g of o.members??[]){if(g.role!=="outer"||!g.geometry||g.geometry.length===0)continue;f=!0;const v=Ch(e,g.geometry);if(v===null){i.add("ring under 3 distinct vertices");continue}l.push(v)}if(!f){i.add("relation with no outer geometry");continue}if(l.length===0)continue}else{i.add(`unhandled element type ${o.type}`);continue}const c=yM(r);if(c===null){i.add("top height not above base");continue}const h=wM(r,c.topM),d=_M(r,h,c.topM),p=yd[(r["roof:shape"]??r["building:roof:shape"]??"").toLowerCase()]!==void 0;for(const f of l){const g=bM(f);if(Math.abs(g)<hM){i.add("footprint under 12 m^2");continue}g<0&&MM(f);const v=f.x.length;let m=0,u=0;for(let T=0;T<v;T++)m+=f.x[T],u+=f.z[T];const w=m/v,x=u/v;if(Math.hypot(w,x)>t){i.add("centroid outside radius");continue}if(v>65535){i.add("ring over 65535 vertices");continue}let _=1/0,y=-1/0,S=1/0,A=-1/0;for(let T=0;T<v;T++)f.x[T]<_&&(_=f.x[T]),f.x[T]>y&&(y=f.x[T]),f.z[T]<S&&(S=f.z[T]),f.z[T]>A&&(A=f.z[T]);if(db(c.topM-c.baseM,Math.min(y-_,A-S))){i.add("mast-shaped: tall on a footprint too small to stand on");continue}const C=new Int16Array(v),M=new Int16Array(v);let b=!1;for(let T=0;T<v;T++){const P=Math.round((f.x[T]-w)/qi),I=Math.round((f.z[T]-x)/qi);if(Math.abs(P)>Th||Math.abs(I)>Th){b=!0;break}C[T]=P,M[T]=I}if(b){i.add("vertex offset overflows i16 (bad relation)");continue}a.push({cx:w,cz:x,baseM:c.baseM,topM:c.topM,kind:h,roof:d,dx:C,dz:M}),s.push(p)}}return PM(a,s),{buildings:a,skips:i}}var Vi=(n=>(n[n.StreetLamp=0]="StreetLamp",n[n.TrafficSignal=1]="TrafficSignal",n[n.Bench=2]="Bench",n[n.WasteBasket=3]="WasteBasket",n[n.FireHydrant=4]="FireHydrant",n))(Vi||{});Vi.StreetLamp,Vi.TrafficSignal,Vi.Bench,Vi.WasteBasket,Vi.FireHydrant;const Dh=.25,IM=65535,FM=15,Ph=2*C_-100,Lh={motorway:je.Motorway,trunk:je.Trunk,primary:je.Primary,secondary:je.Secondary,tertiary:je.Tertiary,residential:je.Residential,unclassified:je.Unclassified,road:je.Unclassified,service:je.Service,living_street:je.LivingStreet,busway:je.Busway,bus_guideway:je.Busway,pedestrian:je.Pedestrian,footway:je.Footway,path:je.Footway,corridor:je.Footway,cycleway:je.Cycleway,track:je.Track},bd=new Set(["steps","platform","construction","proposed","raceway","bridleway"]),UM={asphalt:st.Asphalt,chipseal:st.Asphalt,concrete:st.Concrete,"concrete:plates":st.Concrete,"concrete:lanes":st.Concrete,paved:st.Paved,paving_stones:st.Paved,metal:st.Paved,wood:st.Paved,bricks:st.Paved,sett:st.Cobblestone,cobblestone:st.Cobblestone,unhewn_cobblestone:st.Cobblestone,"cobblestone:flattened":st.Cobblestone,gravel:st.Gravel,fine_gravel:st.Gravel,compacted:st.Gravel,pebblestone:st.Gravel,ground:st.Dirt,dirt:st.Dirt,earth:st.Dirt,mud:st.Dirt,sand:st.Dirt,grass:st.Dirt,unpaved:st.Dirt};function NM(n){const e=(n.highway??"").toLowerCase();if(e===""||bd.has(e))return null;const t=Lh[e];if(t!==void 0)return e==="path"&&n.bicycle==="designated"?{cls:je.Cycleway,link:!1}:{cls:t,link:!1};if(e.endsWith("_link")){const i=Lh[e.slice(0,-5)];if(i!==void 0)return{cls:i,link:!0}}return null}function kM(n){if(n===void 0)return 0;const e=/^\s*(\d+)/.exec(n);if(!e)return 0;const t=Number(e[1]);return!Number.isFinite(t)||t<=0?0:Math.min(FM,Math.round(t))}function OM(n){if(n===void 0)return 0;const e=/^\s*(-?\d+)/.exec(n);if(!e)return 0;const t=Number(e[1]);return Number.isFinite(t)?Math.max(P_,Math.min(L_,Math.round(t))):0}function zM(n){const e=(n.oneway??"").toLowerCase();if(e==="-1"||e==="reverse")return{oneway:!0,reversed:!0};if(e==="yes"||e==="true"||e==="1")return{oneway:!0,reversed:!1};const t=(n.junction??"").toLowerCase();return t==="roundabout"||t==="circular"?{oneway:!0,reversed:!1}:{oneway:!1,reversed:!1}}function BM(n,e){const t=[],i=[];for(const a of e){if(!Number.isFinite(a.lat)||!Number.isFinite(a.lon))continue;const s=n.toWorld(a.lat,a.lon),o=t.length;o>0&&Math.abs(s.x-t[o-1])<1e-6&&Math.abs(s.z-i[o-1])<1e-6||(t.push(s.x),i.push(s.z))}return t.length<2?null:{x:t,z:i}}function HM(n,e){const t=e*e,i=[];let a=null;const s=(r,l,c)=>{const h=r.x.length;h>0&&Math.abs(l-r.x[h-1])<1e-6&&Math.abs(c-r.z[h-1])<1e-6||(r.x.push(l),r.z.push(c))},o=()=>{a!==null&&a.x.length>=2&&i.push(a),a=null};for(let r=0;r+1<n.x.length;r++){const l=n.x[r],c=n.z[r],h=n.x[r+1],d=n.z[r+1],p=l*l+c*c<=t,f=h*h+d*d<=t;if(p&&f){a===null?a={x:[l],z:[c]}:s(a,l,c),s(a,h,d);continue}const g=h-l,v=d-c,m=g*g+v*v,u=2*(l*g+c*v),w=l*l+c*c-t,x=u*u-4*m*w;if(m===0||x<=0){p||o();continue}const _=Math.sqrt(x),y=(-u-_)/(2*m),S=(-u+_)/(2*m),A=C=>[l+C*g,c+C*v];if(p&&!f){const C=y>=0&&y<=1?y:S,[M,b]=A(Math.min(1,Math.max(0,C)));a===null?a={x:[l],z:[c]}:s(a,l,c),s(a,M,b),o()}else if(!p&&f){const C=S>=0&&S<=1?S:y,[M,b]=A(Math.min(1,Math.max(0,C)));o(),a={x:[M],z:[b]},s(a,h,d)}else if(o(),y>0&&S<1){const[C,M]=A(y),[b,T]=A(S),P={x:[C],z:[M]};s(P,b,T),P.x.length>=2&&i.push(P)}}return o(),i}function GM(n){const e=[];let t=[],i=[],a=1/0,s=-1/0,o=1/0,r=-1/0;const l=()=>{t.length>=2&&e.push({x:t,z:i})};for(let c=0;c<n.x.length;c++){const h=n.x[c],d=n.z[c],p=Math.min(a,h),f=Math.max(s,h),g=Math.min(o,d),v=Math.max(r,d);if(t.length>0&&(f-p>Ph||v-g>Ph||t.length>=IM)){l();const u=t[t.length-1],w=i[i.length-1];t=[u],i=[w],a=s=u,o=r=w}t.push(h),i.push(d),a=Math.min(a,h),s=Math.max(s,h),o=Math.min(o,d),r=Math.max(r,d)}return l(),e}function VM(n){return`way["highway"](${so(n)});`}function WM(n){return n.type==="way"&&(n.tags??{}).highway!==void 0}function XM(n,e,t){const i=new _d,a=[];let s=0;for(const o of n){if(o.type!=="way"){i.add(`unhandled element type ${o.type}`);continue}const r=o.tags??{};if(nr(r.area)){i.add("area=yes (a polygon, not a centreline)");continue}const l=NM(r);if(l===null){const x=(r.highway??"").toLowerCase();i.add(bd.has(x)?`excluded highway=${x}`:`unmapped highway=${x||"(none)"}`);continue}if(!o.geometry||o.geometry.length===0){i.add("way with no geometry");continue}const c=BM(e,o.geometry);if(c===null){i.add("under 2 distinct vertices");continue}const h=HM(c,t);if(h.length===0){i.add("entirely outside the city radius");continue}const{oneway:d,reversed:p}=zM(r);if(p)for(const x of h)x.x.reverse(),x.z.reverse();let f=0;d&&(f|=D_),nr(r.bridge)&&(f|=sa),nr(r.tunnel)&&(f|=Ha),l.link&&(f|=sd);const g=(r.name??"").trim(),v=kM(r.lanes),m=OM(r.layer),u=UM[(r.surface??"").toLowerCase()]??st.Unknown,w=[];for(const x of h)w.push(...GM(x));w.length>h.length&&(s+=w.length-h.length);for(const x of w){const _=x.x.length;let y=1/0,S=-1/0,A=1/0,C=-1/0;for(let F=0;F<_;F++)x.x[F]<y&&(y=x.x[F]),x.x[F]>S&&(S=x.x[F]),x.z[F]<A&&(A=x.z[F]),x.z[F]>C&&(C=x.z[F]);const M=(y+S)/2,b=(A+C)/2,T=new Int16Array(_),P=new Int16Array(_);let I=!1;for(let F=0;F<_;F++){const k=Math.round((x.x[F]-M)/Dh),H=Math.round((x.z[F]-b)/Dh);if(Math.abs(k)>32767||Math.abs(H)>32767){I=!0;break}T[F]=k,P[F]=H}if(I){i.add("BUG: offset overflows i16 after split");continue}a.push({cls:l.cls,name:g,lanes:v,flags:f,layer:m,surface:u,cx:M,cz:b,dx:T,dz:P})}}return{ways:a,skips:i,splits:s}}function Un(n,e){this.x=n,this.y=e}Un.prototype={clone(){return new Un(this.x,this.y)},add(n){return this.clone()._add(n)},sub(n){return this.clone()._sub(n)},multByPoint(n){return this.clone()._multByPoint(n)},divByPoint(n){return this.clone()._divByPoint(n)},mult(n){return this.clone()._mult(n)},div(n){return this.clone()._div(n)},rotate(n){return this.clone()._rotate(n)},rotateAround(n,e){return this.clone()._rotateAround(n,e)},matMult(n){return this.clone()._matMult(n)},unit(){return this.clone()._unit()},perp(){return this.clone()._perp()},round(){return this.clone()._round()},mag(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals(n){return this.x===n.x&&this.y===n.y},dist(n){return Math.sqrt(this.distSqr(n))},distSqr(n){const e=n.x-this.x,t=n.y-this.y;return e*e+t*t},angle(){return Math.atan2(this.y,this.x)},angleTo(n){return Math.atan2(this.y-n.y,this.x-n.x)},angleWith(n){return this.angleWithSep(n.x,n.y)},angleWithSep(n,e){return Math.atan2(this.x*e-this.y*n,this.x*n+this.y*e)},_matMult(n){const e=n[0]*this.x+n[1]*this.y,t=n[2]*this.x+n[3]*this.y;return this.x=e,this.y=t,this},_add(n){return this.x+=n.x,this.y+=n.y,this},_sub(n){return this.x-=n.x,this.y-=n.y,this},_mult(n){return this.x*=n,this.y*=n,this},_div(n){return this.x/=n,this.y/=n,this},_multByPoint(n){return this.x*=n.x,this.y*=n.y,this},_divByPoint(n){return this.x/=n.x,this.y/=n.y,this},_unit(){return this._div(this.mag()),this},_perp(){const n=this.y;return this.y=this.x,this.x=-n,this},_rotate(n){const e=Math.cos(n),t=Math.sin(n),i=e*this.x-t*this.y,a=t*this.x+e*this.y;return this.x=i,this.y=a,this},_rotateAround(n,e){const t=Math.cos(n),i=Math.sin(n),a=e.x+t*(this.x-e.x)-i*(this.y-e.y),s=e.y+i*(this.x-e.x)+t*(this.y-e.y);return this.x=a,this.y=s,this},_round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},constructor:Un};Un.convert=function(n){if(n instanceof Un)return n;if(Array.isArray(n))return new Un(+n[0],+n[1]);if(n.x!==void 0&&n.y!==void 0)return new Un(+n.x,+n.y);throw new Error("Expected [x, y] or {x, y} point format")};class Md{constructor(e,t,i,a,s){for(this.properties=Object.create(null),this.extent=i,this.type=0,this.id=void 0,this._pbf=e,this._geometry=-1,this._keys=a,this._values=s;e.pos<t;){const o=e.readVarint();if(o===8)this.id=e.readVarint();else if(o===18){const r=e.readVarint()+e.pos;for(;e.pos<r;){const l=a[e.readVarint()],c=s[e.readVarint()];this.properties[l]=c}}else o===24?this.type=e.readVarint():(o===34&&(this._geometry=e.pos),e.skip(o))}}loadGeometry(){if(this._geometry<0)throw new Error("feature has no geometry");const e=this._pbf;e.pos=this._geometry;const t=e.readVarint()+e.pos,i=[];let a,s=1,o=0,r=0,l=0;for(;e.pos<t;){if(o<=0){const c=e.readVarint();if(s=c&7,o=c>>3,o===0)continue}if(o--,s===1)r+=e.readSVarint(),l+=e.readSVarint(),a&&i.push(a),a=[new Un(r,l)];else if(s===2)r+=e.readSVarint(),l+=e.readSVarint(),a&&a.push(new Un(r,l));else if(s===7)a&&a.push(a[0].clone());else throw new Error(`unknown command ${s}`)}return a&&i.push(a),i}bbox(){if(this._geometry<0)throw new Error("feature has no geometry");const e=this._pbf;e.pos=this._geometry;const t=e.readVarint()+e.pos;let i=1,a=0,s=0,o=0,r=1/0,l=-1/0,c=1/0,h=-1/0;for(;e.pos<t;){if(a<=0){const d=e.readVarint();if(i=d&7,a=d>>3,a===0)continue}if(a--,i===1||i===2)s+=e.readSVarint(),o+=e.readSVarint(),s<r&&(r=s),s>l&&(l=s),o<c&&(c=o),o>h&&(h=o);else if(i!==7)throw new Error(`unknown command ${i}`)}return[r,c,l,h]}toGeoJSON(e,t,i){const a=this.extent*Math.pow(2,i),s=this.extent*e,o=this.extent*t,r=this.loadGeometry();function l(p){return[(p.x+s)*360/a-180,360/Math.PI*Math.atan(Math.exp((1-(p.y+o)*2/a)*Math.PI))-90]}function c(p){return p.map(l)}let h;if(this.type===1){const p=[];for(const g of r)p.push(g[0]);const f=c(p);h=p.length===1?{type:"Point",coordinates:f[0]}:{type:"MultiPoint",coordinates:f}}else if(this.type===2){const p=r.map(c);h=p.length===1?{type:"LineString",coordinates:p[0]}:{type:"MultiLineString",coordinates:p}}else if(this.type===3){const p=Dl(r),f=[];for(const g of p)f.push(g.map(c));h=f.length===1?{type:"Polygon",coordinates:f[0]}:{type:"MultiPolygon",coordinates:f}}else throw new Error("unknown feature type");const d={type:"Feature",geometry:h,properties:this.properties};return this.id!=null&&(d.id=this.id),d}}Md.types=["Unknown","Point","LineString","Polygon"];function Dl(n){const e=n.length;if(e<=1)return[n];const t=[];let i,a;for(let s=0;s<e;s++){const o=$M(n[s]);o!==0&&(a===void 0&&(a=o<0),a===o<0?(i&&t.push(i),i=[n[s]]):i&&i.push(n[s]))}return i&&t.push(i),t}function $M(n){let e=0;for(let t=0,i=n.length,a=i-1,s,o;t<i;a=t++)s=n[t],o=n[a],e+=(o.x-s.x)*(s.y+o.y);return e}class qM{constructor(e,t){for(this.version=1,this.name="",this.extent=4096,this.length=0,this._pbf=e,this._keys=[],this._values=[],this._features=[],t===void 0&&(t=e.length);e.pos<t;){const i=e.readVarint();i===10?this.name=e.readString():i===18?(this._features.push(e.pos),e.skip(i)):i===26?this._keys.push(e.readString()):i===34?this._values.push(YM(e)):i===40?this.extent=e.readVarint():i===120?this.version=e.readVarint():e.skip(i)}this.length=this._features.length}feature(e){if(e<0||e>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[e];const t=this._pbf.readVarint()+this._pbf.pos;return new Md(this._pbf,t,this.extent,this._keys,this._values)}}function YM(n){let e=null;const t=n.readVarint()+n.pos;for(;n.pos<t;){const i=n.readVarint();e=i===10?n.readString():i===21?n.readFloat():i===25?n.readDouble():i===32?n.readVarint(!0):i===40?n.readVarint():i===48?n.readSVarint():i===56?n.readBoolean():(n.skip(i),null)}if(e==null)throw new Error("unknown feature value");return e}class jM{constructor(e,t=e.length){const i=Object.create(null);for(;e.pos<t;){const a=e.readVarint();if(a===26){const s=new qM(e,e.readVarint()+e.pos);s.length&&(i[s.name]=s)}else e.skip(a)}this.layers=i}}const Ih=65536*65536,ZM=12,Fh=typeof TextDecoder>"u"?null:new TextDecoder("utf-8"),KM=0,JM=1,Uh=2,QM=5;class e1{constructor(e){this.buf=ArrayBuffer.isView(e)?e:new Uint8Array(e),this.dataView=new DataView(this.buf.buffer,this.buf.byteOffset,this.buf.byteLength),this.pos=0,this.type=0,this._valueStart=-1,this.length=this.buf.length}readFields(e,t,i=this.length){let a;for(;a=this.nextField(i);)e(a,t,this);return t}readMessage(e,t){return this.readFields(e,t,this.readVarint()+this.pos)}readFixed32(){const e=this.dataView.getUint32(this.pos,!0);return this.pos+=4,e}readSFixed32(){const e=this.dataView.getInt32(this.pos,!0);return this.pos+=4,e}readFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getUint32(this.pos+4,!0)*Ih;return this.pos+=8,e}readSFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getInt32(this.pos+4,!0)*Ih;return this.pos+=8,e}readFloat(){const e=this.dataView.getFloat32(this.pos,!0);return this.pos+=4,e}readDouble(){const e=this.dataView.getFloat64(this.pos,!0);return this.pos+=8,e}readVarint(e){const t=this.buf,i=t[this.pos++];if(i<128)return i;let a=i&127,s;return s=t[this.pos++],a|=(s&127)<<7,s<128||(s=t[this.pos++],a|=(s&127)<<14,s<128)||(s=t[this.pos++],a|=(s&127)<<21,s<128)?a:(s=t[this.pos],a|=(s&15)<<28,t1(a,e,this))}readSVarint(){const e=this.readVarint();return e%2===1?(e+1)/-2:e/2}readBoolean(){return!!this.readVarint()}readString(){const e=this.readVarint()+this.pos,t=this.pos;return this.pos=e,e-t>=ZM&&Fh?Fh.decode(this.buf.subarray(t,e)):n1(this.buf,t,e)}readBytes(){const e=this.readVarint()+this.pos,t=this.buf.subarray(this.pos,e);return this.pos=e,t}readPackedVarint(e=[],t){const i=this.readPackedEnd();for(;this.pos<i;)e.push(this.readVarint(t));return e}readPackedSVarint(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSVarint());return e}readPackedBoolean(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readBoolean());return e}readPackedFloat(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFloat());return e}readPackedDouble(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readDouble());return e}readPackedFixed32(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFixed32());return e}readPackedSFixed32(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSFixed32());return e}readPackedFixed64(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFixed64());return e}readPackedSFixed64(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSFixed64());return e}readPackedEnd(){return this.type===Uh?this.readVarint()+this.pos:this.pos+1}nextField(e=this.length){if(this.pos===this._valueStart&&this.skip(this.type),this.pos>=e)return 0;const t=this.readVarint();return this.type=t&7,this._valueStart=this.pos,t>>>3}skip(e){const t=e&7;if(t===KM)for(;this.buf[this.pos++]>127;);else if(t===Uh)this.pos=this.readVarint()+this.pos;else if(t===QM)this.pos+=4;else if(t===JM)this.pos+=8;else throw new Error(`Unimplemented type: ${t}`)}}function t1(n,e,t){const i=t.buf;let a,s;if(s=i[t.pos++],a=(s&112)>>4,s<128||(s=i[t.pos++],a|=(s&127)<<3,s<128)||(s=i[t.pos++],a|=(s&127)<<10,s<128)||(s=i[t.pos++],a|=(s&127)<<17,s<128)||(s=i[t.pos++],a|=(s&127)<<24,s<128)||(s=i[t.pos++],a|=(s&1)<<31,s<128))return zi(n,a,e);throw new Error("Expected varint not more than 10 bytes")}function zi(n,e,t){return t?e*4294967296+(n>>>0):(e>>>0)*4294967296+(n>>>0)}function n1(n,e,t){let i="",a=e;for(;a<t;){const s=n[a];let o=null,r=s>239?4:s>223?3:s>191?2:1;if(a+r>t)break;let l,c,h;r===1?s<128&&(o=s):r===2?(l=n[a+1],(l&192)===128&&(o=(s&31)<<6|l&63,o<=127&&(o=null))):r===3?(l=n[a+1],c=n[a+2],(l&192)===128&&(c&192)===128&&(o=(s&15)<<12|(l&63)<<6|c&63,(o<=2047||o>=55296&&o<=57343)&&(o=null))):r===4&&(l=n[a+1],c=n[a+2],h=n[a+3],(l&192)===128&&(c&192)===128&&(h&192)===128&&(o=(s&15)<<18|(l&63)<<12|(c&63)<<6|h&63,(o<=65535||o>=1114112)&&(o=null))),o===null?(o=65533,r=1):o>65535&&(o-=65536,i+=String.fromCharCode(o>>>10&1023|55296),o=56320|o&1023),i+=String.fromCharCode(o),a+=r}return i}const i1=64/4096;let Pl=-1;function a1(n,e){switch(n){case"motorway":case"trunk":case"primary":case"secondary":case"tertiary":case"service":case"track":case"busway":return n;case"minor":return"residential";case"path":return e&&e!==""?e:"footway";default:return null}}const Nh={"landcover:wood/wood":["natural","wood"],"landcover:wood/forest":["landuse","forest"],"landcover:farmland/orchard":["landuse","orchard"],"landcover:grass/scrub":["natural","scrub"],"landcover:grass/shrubbery":["natural","scrub"],"landcover:grass/park":["leisure","park"],"landcover:grass/garden":["leisure","garden"],"landcover:grass/village_green":["landuse","village_green"],"landcover:grass/recreation_ground":["landuse","recreation_ground"],"landcover:grass/golf_course":["leisure","golf_course"],"landcover:grass/meadow":["landuse","meadow"],"landcover:grass/grass":["landuse","grass"],"landcover:wetland/":["natural","wetland"],"landuse:cemetery/":["landuse","cemetery"],"park:nature_reserve/":["leisure","nature_reserve"]};function s1(n,e,t){if(n==="water")return["natural","water"];const i=Nh[`${n}:${e}/${t??""}`];return i||(Nh[`${n}:${e}/`]??null)}function o1(n,e){const t=n instanceof Uint8Array?n:new Uint8Array(n),i=new jM(new e1(t)),a=[],s={whole:0,cut:0,neighbour:0,hidden:0,roads:0,cover:0},o=i.layers.building;o&&r1(o,e,a,s);const r=i.layers.transportation;r&&u1(r,e,a,s);for(const l of["landcover","landuse","park","water"]){const c=i.layers[l];c&&d1(c,l,e,a,s)}return{elements:a,stats:s}}function Ll(n,e,t){const i=new Array(n.length);for(let a=0;a<n.length;a++)i[a]={lat:wi(e.y+n[a].y/t,e.z),lon:vi(e.x+n[a].x/t,e.z)};return i}function r1(n,e,t,i){const a=n.extent;for(let s=0;s<n.length;s++){const o=n.feature(s);if(o.type!==3)continue;const r=o.properties;if(r.hide_3d===!0){i.hidden++;continue}const l=Number(r.render_height),c=Number(r.render_min_height??0),h={building:"yes"};Number.isFinite(l)&&(h.height=String(l)),Number.isFinite(c)&&c>0&&(h.min_height=String(c));for(const d of Dl(o.loadGeometry())){const p=d[0];if(!p||p.length<4)continue;const f=l1(p,a);if(f.kind==="neighbour"){i.neighbour++;continue}f.ring.length<3||(f.kind==="whole"?i.whole++:i.cut++,t.push({type:"way",id:Pl--,tags:h,geometry:Ll(f.ring,e,a)}))}}}function l1(n,e){const t=Math.round(e*i1);let i=1/0,a=-1/0,s=1/0,o=-1/0,r=!1,l=!1,c=!1,h=!1;for(const A of n)A.x<i&&(i=A.x),A.x>a&&(a=A.x),A.y<s&&(s=A.y),A.y>o&&(o=A.y),A.x<=-t&&(r=!0),A.x>=e+t&&(l=!0),A.y<=-t&&(c=!0),A.y>=e+t&&(h=!0);if(!r&&!l&&!c&&!h){const A=(i+a)/2,C=(s+o)/2;return A>=0&&A<e&&C>=0&&C<e?{kind:"whole",ring:n.slice()}:{kind:"neighbour"}}const d=c1(n,0,0,e,e);if(d.length<3)return{kind:"neighbour"};let p=1/0,f=-1/0,g=1/0,v=-1/0;for(const A of d)A.x<p&&(p=A.x),A.x>f&&(f=A.x),A.y<g&&(g=A.y),A.y>v&&(v=A.y);const m=f<=t,u=p>=e-t,w=v<=t,x=g>=e-t;return(!r||m)&&(!l||u)&&((!c||w)&&(!h||x))&&!(r&&l||c&&h)?{kind:"neighbour"}:{kind:"cut",ring:d}}function c1(n,e,t,i,a){let s=n.slice();s.length>1&&s[0].x===s[s.length-1].x&&s[0].y===s[s.length-1].y&&s.pop();const o=[[r=>r.x>=e,(r,l)=>({x:e,y:r.y+(l.y-r.y)*(e-r.x)/(l.x-r.x)})],[r=>r.x<=i,(r,l)=>({x:i,y:r.y+(l.y-r.y)*(i-r.x)/(l.x-r.x)})],[r=>r.y>=t,(r,l)=>({x:r.x+(l.x-r.x)*(t-r.y)/(l.y-r.y),y:t})],[r=>r.y<=a,(r,l)=>({x:r.x+(l.x-r.x)*(a-r.y)/(l.y-r.y),y:a})]];for(const[r,l]of o){if(s.length===0)break;const c=[];for(let h=0;h<s.length;h++){const d=s[h],p=s[(h+1)%s.length],f=r(d),g=r(p);f&&c.push(d),f!==g&&c.push(l(d,p))}s=c}return s}function h1(n,e,t,i,a){const s=[];let o=[];const r=()=>{o.length>=2&&s.push(o),o=[]};for(let l=0;l+1<n.length;l++){const c=n[l],h=n[l+1],d=h.x-c.x,p=h.y-c.y;let f=0,g=1,v=!0;for(const[x,_]of[[-d,c.x-e],[d,i-c.x],[-p,c.y-t],[p,a-c.y]]){if(x===0){if(_<0){v=!1;break}continue}const y=_/x;if(x<0){if(y>g){v=!1;break}y>f&&(f=y)}else{if(y<f){v=!1;break}y<g&&(g=y)}}if(!v){r();continue}const m={x:c.x+f*d,y:c.y+f*p},u={x:c.x+g*d,y:c.y+g*p},w=o[o.length-1];(!w||w.x!==m.x||w.y!==m.y)&&(r(),o.push(m)),o.push(u),g<1&&r()}return r(),s}function u1(n,e,t,i){const a=n.extent;for(let s=0;s<n.length;s++){const o=n.feature(s);if(o.type!==2)continue;const r=o.properties,l=a1(String(r.class??""),r.subclass);if(l===null)continue;const c={highway:Number(r.ramp)===1&&/^(motorway|trunk|primary|secondary|tertiary)$/.test(l)?`${l}_link`:l};r.brunnel==="bridge"&&(c.bridge="yes"),r.brunnel==="tunnel"&&(c.tunnel="yes"),Number(r.oneway)===1&&(c.oneway="yes"),Number(r.oneway)===-1&&(c.oneway="-1"),r.layer!==void 0&&(c.layer=String(r.layer)),typeof r.surface=="string"&&(c.surface=r.surface),typeof r.service=="string"&&(c.service=r.service);for(const h of o.loadGeometry())for(const d of h1(h,0,0,a,a))t.push({type:"way",id:Pl--,tags:c,geometry:Ll(d,e,a)}),i.roads++}}function d1(n,e,t,i,a){const s=n.extent;for(let o=0;o<n.length;o++){const r=n.feature(o);if(r.type!==3)continue;const l=r.properties,c=s1(e,String(l.class??""),l.subclass);if(c===null)continue;const h={[c[0]]:c[1]};for(const d of Dl(r.loadGeometry()))!d[0]||d[0].length<4||(i.push({type:"way",id:Pl--,tags:h,geometry:Ll(d[0],t,s)}),a.cover++)}}const f1=20,kh={"natural=wood":.85,"landuse=forest":.85,"landuse=orchard":.7,"natural=scrub":.35,"leisure=nature_reserve":.35,"landuse=cemetery":.3,"leisure=park":.3,"leisure=garden":.25,"landuse=village_green":.2,"landuse=recreation_ground":.15,"leisure=golf_course":.12,"landuse=meadow":.05,"landuse=grass":.05},Oh={"leisure=park":.8,"leisure=garden":.7,"leisure=golf_course":.95,"landuse=grass":.95,"landuse=meadow":.95,"landuse=village_green":.9,"landuse=recreation_ground":.85,"landuse=cemetery":.75,"natural=scrub":.5},p1=["natural=water","natural=wetland","landuse=reservoir","landuse=basin","waterway=riverbank"],m1=1;function g1(n){const e=so(n);return`way["natural"~"^(wood|scrub|water|wetland)$"](${e});
 way["landuse"~"^(forest|orchard|meadow|grass|village_green|recreation_ground|cemetery|reservoir|basin)$"](${e});
 way["leisure"~"^(park|garden|golf_course|nature_reserve)$"](${e});
 way["waterway"="riverbank"](${e});
 relation["natural"~"^(wood|scrub|water|wetland)$"](${e});
 relation["landuse"~"^(forest|orchard|cemetery)$"](${e});
 relation["leisure"~"^(park|garden|nature_reserve)$"](${e});
 node["natural"="tree"](${e});`}function v1(n){for(const e of p1){const t=e.indexOf("=");if(n[e.slice(0,t)]===e.slice(t+1))return{canopy:0,water:!0}}for(const e of Object.keys(kh)){const t=e.indexOf("=");if(n[e.slice(0,t)]===e.slice(t+1))return{canopy:kh[e],water:!1}}return null}function w1(n){for(const e of Object.keys(Oh)){const t=e.indexOf("=");if(n[e.slice(0,t)]===e.slice(t+1))return Oh[e]}return 0}class x1{rgba;n;extentM;cellM;constructor(e,t=f1){this.extentM=e,this.cellM=t,this.n=Math.max(1,Math.ceil(e*2/t)),this.rgba=new Uint8Array(this.n*this.n*4)}index(e){return Math.floor((e+this.extentM)/this.cellM)}raise(e,t,i,a){if(e<0||t<0||e>=this.n||t>=this.n)return!1;const s=(t*this.n+e)*4+i,o=Math.round(Math.max(0,Math.min(1,a))*255);return this.rgba[s]>=o?!1:(this.rgba[s]=o,!0)}add(e,t){let i=0,a=0,s=0;for(const o of e){const r=o.tags??{};if(o.type==="node"){if(r.natural!=="tree"||!Number.isFinite(o.lat)||!Number.isFinite(o.lon))continue;const f=t.toWorld(o.lat,o.lon);this.raise(this.index(f.x),this.index(f.z),2,m1)&&s++,a++;continue}const l=v1(r);if(l===null)continue;const c=[];if(o.type==="way"&&o.geometry&&o.geometry.length>=3)c.push(o.geometry);else if(o.type==="relation")for(const f of o.members??[])f.role!=="outer"||!f.geometry||f.geometry.length<3||c.push(f.geometry);if(c.length===0)continue;i++;const h=l.water?0:2,d=l.water?1:l.canopy;for(const f of c)s+=this.fill(f,t,h,d);const p=l.water?0:w1(r);if(p>0)for(const f of c)this.fill(f,t,3,p)}return{polygons:i,nodes:a,cells:s}}fill(e,t,i,a){const s=e.length,o=new Float64Array(s),r=new Float64Array(s);let l=1/0,c=-1/0,h=1/0,d=-1/0;for(let u=0;u<s;u++){const w=t.toWorld(e[u].lat,e[u].lon);o[u]=w.x,r[u]=w.z,w.x<l&&(l=w.x),w.x>c&&(c=w.x),w.z<h&&(h=w.z),w.z>d&&(d=w.z)}if(!Number.isFinite(l)||!Number.isFinite(h))return 0;const p=Math.max(0,this.index(l)),f=Math.min(this.n-1,this.index(c)),g=Math.max(0,this.index(h)),v=Math.min(this.n-1,this.index(d));if(f<p||v<g)return 0;let m=0;for(let u=g;u<=v;u++){const w=-this.extentM+(u+.5)*this.cellM;for(let x=p;x<=f;x++){const _=-this.extentM+(x+.5)*this.cellM;_1(o,r,_,w)&&this.raise(x,u,i,a)&&m++}}if(m===0){let u=0,w=0;for(let x=0;x<s;x++)u+=o[x],w+=r[x];this.raise(this.index(u/s),this.index(w/s),i,a)&&m++}return m}}function _1(n,e,t,i){let a=!1;const s=n.length;for(let o=0,r=s-1;o<s;r=o,o++){const l=e[o],c=e[r];if(l>i!=c>i){const h=(i-l)/(c-l);t<n[o]+h*(n[r]-n[o])&&(a=!a)}}return a}const y1=14,va=2e4;function b1(n,e=180){return`[out:json][timeout:${e}];
(${SM(n)}
 ${VM(n)}
 ${g1(n)});
out geom;`}function M1(n){const e=Hs(n);return{s:e.south,w:e.west,n:e.north,e:e.east}}function S1(n,e){if(e.length===0)return!1;const t=Hs(n),i=[{lat:t.north,lon:t.west},{lat:t.north,lon:t.east},{lat:t.south,lon:t.west},{lat:t.south,lon:t.east}];for(const a of e){let s=!0;for(const o of i)if(sl({lat:a.lat,lon:a.lon},o)>a.radiusM){s=!1;break}if(s)return!0}return!1}function E1(n,e,t,i,a=[],s=y1){const o=n.toLatLon(e,t),r=w_(o.lat,o.lon,s),l=Hs(r),c=Math.max(1,sl({lat:l.north,lon:l.west},{lat:l.north,lon:l.east})),h=Math.max(1,sl({lat:l.north,lon:l.west},{lat:l.south,lon:l.west})),d=Math.ceil(i/c)+1,p=Math.ceil(i/h)+1,f=[],g=2**s;for(let v=-p;v<=p;v++)for(let m=-d;m<=d;m++){const u=r.y+v;if(u<0||u>=g)continue;const w={z:s,x:((r.x+m)%g+g)%g,y:u},x=Hs(w),_=n.toWorld(x.north,x.west),y=n.toWorld(x.south,x.east),S=Math.min(_.x,y.x),A=Math.max(_.x,y.x),C=Math.min(_.z,y.z),M=Math.max(_.z,y.z),b=Math.max(0,Math.max(S-e,e-A)),T=Math.max(0,Math.max(C-t,t-M)),P=Math.hypot(b,T);P>i||S1(w,a)||f.push({tile:w,key:x_(w),bbox:M1(w),distM:P})}return f.sort((v,m)=>v.distM-m.distM),f}const T1=4e3,ar=24,A1=250,sr=8e3,R1=4;function C1(n,e=60){return`[out:json][timeout:${e}];
node["natural"="tree"](${so(n)});
out;`}class D1{overpass;stats={tiles:0,empty:0,failed:0,buildings:0,roads:0,vegPolygons:0,vegNodes:0,triangles:0,fetching:!1,fromVector:0,fromOverpass:0,enriched:0};opts;state=new Map;seen=new Set;queue=[];enrichQueue=[];enriching=!1;scannedX=1/0;scannedZ=1/0;inflight=0;disposed=!1;groups=[];radius;tileBudget;constructor(e){this.opts=e,this.overpass=e.overpass,this.radius=e.wantRadiusM??T1,this.tileBudget={...e.budget,buildingTriangleBudget:Math.round(e.budget.buildingTriangleBudget/ar),roadTriangleBudget:Math.round(e.budget.roadTriangleBudget/ar)}}update(e,t){this.disposed||(Math.hypot(e-this.scannedX,t-this.scannedZ)>A1&&(this.scannedX=e,this.scannedZ=t,this.rescan(e,t)),this.pump())}rescan(e,t){const i=E1(this.opts.origin,e,t,this.radius,this.opts.packs);this.queue=[];for(const a of i){const s=this.state.get(a.key);s!==void 0&&s!=="wanted"||(this.state.set(a.key,"wanted"),this.queue.push({key:a.key,tile:a.tile,bbox:a.bbox}))}}pump(){const e=this.opts.vector&&!this.opts.vector.stats.broken?R1:1;for(;this.inflight<e&&!this.atCap&&!this.disposed;){const t=this.queue.shift();if(!t)break;this.inflight++,this.stats.fetching=!0,this.state.set(t.key,"loading"),this.load(t).finally(()=>{this.inflight--,this.stats.fetching=this.inflight>0,this.queue.length>0&&!this.disposed&&this.pump()})}this.pumpEnrichment()}async load(e){try{let t=null,i=!1;const a=this.opts.vector;if(a){const o=await a.tile(e.tile);if(this.disposed)return;o!==null&&(t=o1(o,e.tile).elements,i=!0)}if(t===null){const o=await this.overpass.json(b1(e.bbox));if(this.disposed)return;if(o===null){this.state.set(e.key,"failed"),this.stats.failed++;return}t=o.elements??[]}const s=this.build(e.key,t);this.state.set(e.key,s?"done":"empty"),s||this.stats.empty++,i?(this.stats.fromVector+=s?1:0,this.opts.vegetation&&this.enrichQueue.push({key:e.key,bbox:e.bbox})):s&&this.stats.fromOverpass++}catch(t){console.warn(`[skycast] live tile ${e.key} failed to build:`,t),this.state.set(e.key,"failed"),this.stats.failed++}}pumpEnrichment(){if(this.enriching||this.disposed||this.pending>0)return;const e=this.enrichQueue.shift();if(!e)return;const t=this.opts.vegetation;!t||this.overpass.stats.broken||(this.enriching=!0,(async()=>{try{const i=await this.overpass.json(C1(e.bbox));if(this.disposed||i===null)return;const a=t.add(i.elements??[],this.opts.origin);this.stats.vegNodes+=a.nodes,this.stats.enriched++,a.cells>0&&this.opts.onVegetation()}catch(i){console.warn(`[skycast] tree enrichment for ${e.key} failed:`,i)}finally{this.enriching=!1,this.disposed||this.pumpEnrichment()}})())}build(e,t){const{origin:i,scene:a,heightAt:s,shadow:o,vegetation:r,footprints:l,roadBlockers:c}=this.opts,h=[];for(const v of t){const m=`${v.type}/${v.id}`;this.seen.has(m)||(this.seen.add(m),h.push(v))}let d=!1;const p=h.filter(EM);let f=[];if(p.length>0){const v=LM(p,i,va);if(f=lb(v.buildings),f.length>0){const m={lat0:i.lat,lon0:i.lon,radiusM:va,buildings:f},u=new Bb(m,s,o,this.tileBudget);a.add(u.group),this.groups.push(u),this.opts.buildingUniforms.push(u.uniforms),this.stats.buildings+=f.length,this.stats.triangles+=u.stats.triangles,l.add(f),this.opts.onBuildings?.(f),d=!0}}const g=h.filter(WM);if(g.length>0){const v=XM(g,i,va),m=z_(v.ways);if(m.length>0){const u={lat0:i.lat,lon0:i.lon,radiusM:va,roads:m},w=$b(m,s,va).deck,x=new cM(u,s,o,this.tileBudget,w);a.add(x.group),this.groups.push(x),this.opts.roadUniforms.push(x.uniforms),this.stats.roads+=m.length,this.stats.triangles+=x.stats.triangles,c.add(new Ls(m,wy)),this.opts.onRoads?.(m),d=!0}}if(r){const v=r.add(h,i);this.stats.vegPolygons+=v.polygons,this.stats.vegNodes+=v.nodes,v.cells>0&&(this.opts.onVegetation(),d=!0)}else f.length>0&&this.opts.onVegetation();return d?this.stats.tiles++:console.info(`[skycast] live tile ${e}: nothing mapped here`),d}set wantRadiusM(e){e!==this.radius&&(this.radius=e,this.scannedX=1/0)}get wantRadiusM(){return this.radius}dispose(){this.disposed=!0,this.queue=[],this.enrichQueue=[];for(const e of this.groups)this.opts.scene.remove(e.group),e.dispose();this.groups.length=0}get pending(){return this.atCap?0:this.queue.length}get atCap(){return this.stats.tiles+this.inflight>=ar}latency(){const e=[...this.overpass.stats.latencyMs].sort((t,i)=>t-i);return e.length===0?{n:0,median:0,max:0}:{n:e.length,median:e[e.length>>1],max:e[e.length-1]}}}const zh=["https://overpass-api.de/api/interpreter","https://maps.mail.ru/osm/tools/overpass/api/interpreter","https://overpass.private.coffee/api/interpreter","https://overpass.kumi.systems/api/interpreter"],P1={minGapMs:2e3,backoffBaseMs:4e3,timeoutMs:3e4},L1=3,I1=600*1e3,F1=4,or=60;class U1{stats={cacheHits:0,networkHits:0,failures:0,deduped:0,refused:0,latencyMs:[],broken:!1};endpoints;health;timing;inflight=new Map;queue=Promise.resolve();lastRequestAt=0;consecutiveFailures=0;spent=0;constructor(e=zh,t={}){this.endpoints=e.length>0?e:zh,this.health=this.endpoints.map(i=>({url:i,downUntil:0,failures:0})),this.timing={...P1,...t}}url(e,t=this.endpoints[0]){return`${t}?data=${encodeURIComponent(e)}`}async cached(e){return await Os(this.url(e),Kc)!==null}async json(e){const t=this.url(e),i=this.inflight.get(t);if(i)return this.stats.deduped++,await i;const a=this.run(t).finally(()=>this.inflight.delete(t));return this.inflight.set(t,a),a}async run(e){const t=await Os(e,Kc);if(t)return this.stats.cacheHits++,Bh(t);if(this.stats.broken)return this.stats.refused++,null;if(this.spent>=or)return this.stats.refused++,this.spent===or&&(this.spent++,console.warn(`[skycast] live OSM: session budget of ${or} Overpass requests spent; no more will be made. Everything already fetched stays cached.`)),null;this.spent++;const i=new Set;for(let a=0;a<L1;a++){const s=this.pick(i);i.add(s);const o=s.url+e.slice(e.indexOf("?data=")),r=await this.send(o,s);if(r.body){const l=Bh(r.body);if(l!==null)return this.consecutiveFailures=0,s.failures=0,s.downUntil=0,Al(e,r.body),l;console.warn("[skycast] live OSM: answer was not JSON (instance busy?)"),this.bench(s,0);continue}if(r.fatal)break;this.bench(s,r.retryAfterMs)}return this.stats.failures++,this.consecutiveFailures++,this.consecutiveFailures>=F1&&(this.stats.broken=!0,console.warn(`[skycast] live OSM: ${this.consecutiveFailures} Overpass requests failed in a row; not asking again this session.`)),null}pick(e){const t=Date.now(),i=this.health.filter(o=>!e.has(o)),a=i.length>0?i:this.health,s=a.find(o=>o.downUntil<=t);return s||a.reduce((o,r)=>r.downUntil<o.downUntil?r:o)}bench(e,t){const i=Math.min(I1,this.timing.backoffBaseMs*2**Math.min(e.failures,4));e.failures++,e.downUntil=Math.max(e.downUntil,Date.now()+Math.max(t,i))}send(e,t){const i=this.queue.then(async()=>{const a=Math.max(this.lastRequestAt+this.timing.minGapMs-Date.now(),t.downUntil-Date.now());a>0&&await N1(a);const s=performance.now();try{const o=await fetch(e,{mode:"cors",credentials:"omit",signal:AbortSignal.timeout(this.timing.timeoutMs)});if(this.lastRequestAt=Date.now(),o.ok){const h=await o.arrayBuffer();return this.stats.networkHits++,this.stats.latencyMs.push(performance.now()-s),{body:h,retryAfterMs:0,fatal:!1}}const r=Number(o.headers.get("Retry-After")),l=Number.isFinite(r)&&r>0?r*1e3:0,c=o.status===400;return console.warn(`[skycast] live OSM: ${o.status} ${o.statusText}`),{body:null,retryAfterMs:l,fatal:c}}catch(o){return this.lastRequestAt=Date.now(),console.warn("[skycast] live OSM: request failed:",o),{body:null,retryAfterMs:0,fatal:!1}}});return this.queue=i.then(()=>{},()=>{}),i}}function Bh(n){try{return JSON.parse(new TextDecoder().decode(n))}catch{return null}}function N1(n){return new Promise(e=>setTimeout(e,n))}const k1="https://tiles.openfreemap.org/planet",O1=6*3600*1e3,Hh=4,Gh=15e3;class z1{constructor(e=k1){this.tilejson=e}stats={tiles:0,failures:0,broken:!1,latencyMs:[]};template=null;consecutiveFailures=0;urlTemplate(){return this.template||(this.template=(async()=>{try{const e=await Os(this.tilejson,O1);let t=e;if(!t){const s=await fetch(this.tilejson,{mode:"cors",credentials:"omit",signal:AbortSignal.timeout(Gh)});if(!s.ok)throw new Error(`${s.status} ${s.statusText}`);t=await s.arrayBuffer()}const a=JSON.parse(new TextDecoder().decode(t)).tiles?.[0];if(!a||!a.includes("{z}"))throw new Error("TileJSON has no tile template");return e||Al(this.tilejson,t),a}catch(e){return console.warn("[skycast] vector tiles: TileJSON unavailable, using Overpass:",e),this.stats.broken=!0,null}})()),this.template}async tile(e){if(this.stats.broken)return null;const t=await this.urlTemplate();if(t===null)return null;const i=t.replace("{z}",String(e.z)).replace("{x}",String(e.x)).replace("{y}",String(e.y)),a=performance.now();try{const s=await B1(Rl(i,no),Gh);return this.stats.tiles++,this.stats.latencyMs.push(performance.now()-a),this.consecutiveFailures=0,s}catch(s){return this.stats.failures++,++this.consecutiveFailures>=Hh&&(this.stats.broken=!0,console.warn(`[skycast] vector tiles: ${Hh} failures in a row, using Overpass from here on`)),console.warn(`[skycast] vector tile ${e.z}/${e.x}/${e.y} failed:`,s),null}}}function B1(n,e){return new Promise((t,i)=>{const a=setTimeout(()=>i(new Error(`timed out after ${e} ms`)),e);n.then(s=>{clearTimeout(a),t(s)},s=>{clearTimeout(a),i(s)})})}const Vh={skyline:4500,street:2e3},H1=40,G1=1.5,V1=120;function W1(n,e,t){return(n&&(!e||n.distanceM<e.distanceM+V1)?n:e)??t}function rr(n){return(n.flags&(sa|Ha))!==0?!1:n.cls>=je.Primary&&n.cls<=je.Pedestrian&&n.cls!==je.Busway}const Wh=4e3,X1=1;class $1{shadowCasters=[];status={ready:!1,buildings:0,idle:!1,note:""};scene;budget;shadow;overpass;vector;world=null;generation=0;urban=rh();roadMask=j_();land=J_();buildingUniforms=[];roadUniforms=[];constructor(e,t,i,a,s=!0){this.scene=e,this.budget=t,this.shadow=i,this.overpass=new U1(a?[a]:void 0),this.vector=s?new z1:null}heightAt=(e,t)=>this.world?this.world.terrain.heightAt(e,t):0;async setOrigin(e,t){const i=++this.generation;this.dispose();const a=t??(()=>{});let s=0;const o=45,r=()=>a(.05+.4*Math.min(1,++s/o),"loading terrain");a(.05,"loading terrain");const l=this.budget.rings;let c=0;const h=Promise.all(l.map(S=>ad(Cs(e.lat,e.lon,S.extent*1.05),S.imageryZoom).then(A=>(a(.45+.45*(++c/l.length),"loading imagery"),A)))),d=await Promise.all([sh(Cs(e.lat,e.lon,22e3),12,r),sh(Cs(e.lat,e.lon,8e4),9,r)]),p=await h;if(i!==this.generation)return;a(.92,"building ground");const f=new xx(e,d,p,this.shadow,this.budget.rings);this.scene.add(f.group);for(const S of f.uniforms)S.uLandNear.value=this.land.near,S.uLandFar.value=this.land.far,S.uLandNearExtent.value=this.land.nearExtent,S.uLandFarExtent.value=this.land.farExtent,S.uHasLand.value=0,S.uRoadMask.value=this.roadMask.texture,S.uRoadMaskExtent.value=this.roadMask.extent,S.uHasRoadMask.value=0;const g=new A_(e,f,l[0]),v=new Ay([],sr),m=new Cy,u=new x1(sr),w=new xi(u.rgba,u.n,u.n,wt,yt);w.minFilter=et,w.magFilter=et,w.wrapS=Tt,w.wrapT=Tt,w.needsUpdate=!0;const x=new Y_(Wh);for(const S of f.uniforms)S.uVeg.value=w,S.uVegExtent.value=u.extentM,S.uHasVeg.value=1,S.uRoadMask.value=x.texture,S.uRoadMaskExtent.value=Wh,S.uHasRoadMask.value=1;const _=new Vy({mask:{rgba:u.rgba,n:u.n,extentM:u.extentM},heightAt:f.heightAt,roads:m,footprints:v},this.shadow,this.budget.tier==="reduced");_.update(0,0),this.scene.add(_.group),this.buildingUniforms=[],this.roadUniforms=[];const y={origin:e,terrain:f,detailRing:g,foliage:_,footprints:v,spawnMajor:[],spawnLocal:[],spawnMinor:[],liveBuildings:[],urbanDirty:!1,urbanBuiltAt:0,roadMask:x,vegTexture:w,masksDirty:!1,masksUploadedAt:0,live:null};y.live=new D1({origin:e,scene:this.scene,heightAt:f.heightAt,shadow:this.shadow,budget:this.budget,packs:[],vegetation:u,footprints:v,roadBlockers:m,buildingUniforms:this.buildingUniforms,roadUniforms:this.roadUniforms,onVegetation:()=>{_.invalidate(),y.masksDirty=!0},onBuildings:S=>{for(const A of S)y.liveBuildings.push(A);y.urbanDirty=!0},onRoads:S=>{const A=T=>ao(T.cls,T.lanes,T.flags)*.5,C=S.filter(T=>rr(T)&&T.cls<=je.Tertiary),M=S.filter(T=>rr(T)&&(T.cls===je.Residential||T.cls===je.Unclassified||T.cls===je.LivingStreet)),b=S.filter(T=>rr(T)&&(T.cls===je.Service||T.cls===je.Pedestrian));C.length&&y.spawnMajor.push(new Ls(C,A)),M.length&&y.spawnLocal.push(new Ls(M,A)),b.length&&y.spawnMinor.push(new Ls(b,A)),y.roadMask.add(S),y.masksDirty=!0},overpass:this.overpass,vector:this.vector,wantRadiusM:Vh.skyline}),this.world=y,this.shadowCasters.length=0,this.shadowCasters.push(_.depthScene),this.status.ready=!0,a(1,"ready")}update(e,t){const i=this.world;if(!i)return;i.live.wantRadiusM=Vh[t.mode],i.live.update(t.x,t.z);const a=e.position;a.y-i.terrain.heightAt(a.x,a.z)<H1&&i.detailRing.follow(a.x,a.z,0,0),i.foliage.update(a.x,a.z);const s=i.live.stats;this.status.buildings=s.buildings,this.status.idle=!s.fetching&&i.live.pending===0&&!i.detailRing.stats.pending,this.status.note=this.status.idle?"":`streaming city ${s.tiles} tile${s.tiles===1?"":"s"}, ${s.buildings.toLocaleString()} buildings`}get drapePending(){return this.world?this.world.detailRing.stats.pending:!0}get liveStats(){return this.world?this.world.live.stats:null}prepareFrame(e){const t=this.world;if(!t)return;const{camera:i,light:a,wx:s,skyProbe:o,elapsed:r}=e,l=i.position.y,c=performance.now();if(t.urbanDirty&&c-t.urbanBuiltAt>G1*1e3){t.urbanDirty=!1,t.urbanBuiltAt=c;const g=R_({lat0:t.origin.lat,lon0:t.origin.lon,radiusM:sr,buildings:t.liveBuildings});this.urban.texture.dispose(),this.urban=g}const h=this.urban;t.masksDirty&&c-t.masksUploadedAt>X1*1e3&&(t.masksDirty=!1,t.masksUploadedAt=c,t.vegTexture.needsUpdate=!0,t.roadMask.texture.needsUpdate=!0);const d=(s.windDir+180)*(Math.PI/180);for(const g of t.terrain.uniforms)g.uSH.value=o.sh,g.uCameraPos.value.copy(i.position),g.uSunDir.value.copy(a.sunDir),g.uSunColor.value.copy(a.sunColor),g.uSunIntensity.value=a.sunIntensity,g.uAmbient.value.copy(a.ambient),g.uWetness.value=a.wetness,g.uSnow.value=a.snow,g.uNight.value=a.night,g.uNightGlow.value.copy(a.nightGlow),g.uMoonDir.value.copy(a.moonDir),g.uMoonLight.value.copy(a.moonLight),g.uUrban.value=h.texture,g.uUrbanExtent.value=h.extent,g.uMieG.value=a.mieG,g.uTurbidity.value=a.turbidity,g.uCamAltitude.value=l,g.uExposure.value=a.exposure,g.uTime.value=r,g.uWind.value.set(Math.sin(d)*s.windSpeed,-Math.cos(d)*s.windSpeed);const p=Zy(e.solarHour);for(const g of this.buildingUniforms)g.uCameraPos.value.copy(i.position),g.uSH.value=o.sh,g.uEnv.value=o.texture,g.uEnvMaxLod.value=o.maxLod,g.uSunDir.value.copy(a.sunDir),g.uSunColor.value.copy(a.sunColor),g.uSunIntensity.value=a.sunIntensity,g.uNight.value=a.night,g.uNightGlow.value.copy(a.nightGlow),g.uMoonDir.value.copy(a.moonDir),g.uMoonLight.value.copy(a.moonLight),g.uWetness.value=a.wetness,g.uMieG.value=a.mieG,g.uTurbidity.value=a.turbidity,g.uCamAltitude.value=l,g.uExposure.value=a.exposure,g.uHourFactor.value.set(p.residential,p.office,p.other),g.uUrban.value=h.texture,g.uUrbanExtent.value=h.extent;for(const g of this.roadUniforms)g.uCameraPos.value.copy(i.position),g.uSH.value=o.sh,g.uEnv.value=o.texture,g.uEnvMaxLod.value=o.maxLod,g.uSunDir.value.copy(a.sunDir),g.uSunColor.value.copy(a.sunColor),g.uSunIntensity.value=a.sunIntensity,g.uWetness.value=a.wetness,g.uUrban.value=h.texture,g.uUrbanExtent.value=h.extent,g.uSnow.value=a.snow,g.uNight.value=a.night,g.uNightGlow.value.copy(a.nightGlow),g.uMoonDir.value.copy(a.moonDir),g.uMoonLight.value.copy(a.moonLight),g.uMieG.value=a.mieG,g.uTurbidity.value=a.turbidity,g.uCamAltitude.value=l;t.foliage.setWind(s.windSpeed,s.windDir);const f=t.foliage.uniforms;f.uTime.value=r,f.uCameraPos.value.copy(i.position),f.uSH.value=o.sh,f.uSunDir.value.copy(a.sunDir),f.uSunColor.value.copy(a.sunColor),f.uSunIntensity.value=a.sunIntensity,f.uNight.value=a.night,f.uNightGlow.value.copy(a.nightGlow),f.uMoonDir.value.copy(a.moonDir),f.uMoonLight.value.copy(a.moonLight),f.uMieG.value=a.mieG,f.uTurbidity.value=a.turbidity,f.uCamAltitude.value=l}setAo(e,t){const i=this.world;if(i){for(const a of i.terrain.uniforms)e.apply(a,t);for(const a of this.buildingUniforms)e.apply(a,t);for(const a of this.roadUniforms)e.apply(a,t);e.apply(i.foliage.uniforms,t)}}streetSpawn(e,t,i){const a=this.world;if(!a)return null;const s=d=>{let p=null;for(const f of d){const g=f.nearestSegment(e,t,i);g&&(!p||g.distanceM<p.distanceM)&&(p=g)}return p},o=s(a.spawnMajor),r=s(a.spawnLocal),l=s(a.spawnMinor),c=W1(o,r,l);if(!c)return null;const h=Math.atan2(c.dirX,-c.dirZ)*180/Math.PI;return{x:c.x,z:c.z,headingDeg:(h+360)%360}}blocked(e,t){return this.world?this.world.footprints.occupied(e,t):!1}dispose(){const e=this.world;e&&(this.world=null,this.status.ready=!1,this.status.buildings=0,this.status.idle=!1,e.live.dispose(),e.detailRing.dispose(),this.scene.remove(e.terrain.group),e.terrain.dispose(),this.scene.remove(e.foliage.group),e.foliage.dispose(),this.shadowCasters.length=0,this.buildingUniforms=[],this.roadUniforms=[],this.urban.texture.dispose(),this.urban=rh(),e.roadMask.dispose(),e.vegTexture.dispose())}}const Xh=6e4,Jt=36e5,lr=-.833,$h=6,qh=-4,q1=22,Y1=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function Yh(n,e){const t=new Date(n+e*1e3);return{weekday:Y1[t.getUTCDay()],hour:t.getUTCHours()+t.getUTCMinutes()/60}}function cr(n,e,t,i,a){const s=r=>aa(new Date(r),n,e).sun.altitude-a;let o=s(t);for(let r=0;r<20&&i-t>5e3;r++){const l=(t+i)/2,c=s(l);Math.sign(c)===Math.sign(o)?(t=l,o=c):i=l}return(t+i)/2}function j1(n,e,t,i,a){const s=t+i*Jt,o=t-24*Jt,r=s+24*Jt,l=10*Xh,c=[],h=[],d=[],p=[];let f=o,g=aa(new Date(f),n,e).sun.altitude,v=!1;for(let w=o+l;w<=r;w+=l){const x=aa(new Date(w),n,e).sun.altitude,_=x>g,y=S=>(g-S)*(x-S)<0;if(y(lr)){const S=cr(n,e,f,w,lr);_?(h.push(S),c.push({t:S,kind:"Sunrise"})):d.push(S)}!_&&y($h)&&c.push({t:cr(n,e,f,w,$h),kind:"Golden hour"}),!_&&y(qh)&&c.push({t:cr(n,e,f,w,qh),kind:"Dusk"}),v&&!_&&g>lr&&p.push(f),v=_,g=x,f=w}for(const w of p){c.push({t:w,kind:"Noon"});const x=h.filter(y=>y<w&&w-y<20*Jt).pop(),_=d.find(y=>y>w&&y-w<20*Jt);x!==void 0&&c.push({t:x+.4*(w-x),kind:"Mid-morning"}),_!==void 0&&c.push({t:w+.65*(_-w),kind:"Late afternoon"})}const m=a*1e3;for(let w=Math.floor((o+m)/Jt)*Jt-m;w<=r;w+=Jt)Math.abs(Yh(w,a).hour-q1)<1e-6&&c.push({t:w,kind:"Night"});let u=c.filter(w=>w.t>=t&&w.t<s);if(u.length===0){const w=Math.ceil(t/(3*Jt))*3*Jt;for(let x=w;x<s;x+=3*Jt)u.push({t:x,kind:""})}return u.sort((w,x)=>w.t-x.t),u=u.filter((w,x)=>x===0||w.t-u[x-1].t>15*Xh),u.map(w=>{const x=Yh(w.t,a),_=String(Math.floor(x.hour)).padStart(2,"0"),y=w.kind||`${_}:00`;return{t:w.t,kind:y,label:`${y}, ${x.weekday}`}})}function Sd(n){const e=Math.max(0,Math.min(1,n));return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}const Ed=[{label:"15 min/s",secPerSec:900},{label:"1 h/s",secPerSec:3600},{label:"3 h/s",secPerSec:3*3600}],jh=4,Z1=5,K1=36;class J1{mode="paused";live=!0;t;rateIndex=1;min=-1/0;max=1/0;moments=[];tourIndex=0;phase="move";phaseS=0;moveFrom=0;momentSource=null;constructor(e){this.t=e}get label(){return this.mode!=="tour"||this.moments.length===0?null:this.moments[this.tourIndex].label}setBounds(e,t){this.min=e,this.max=t,this.t=this.clamp(this.t)}startTour(e,t){this.momentSource=e,this.moments=e(t).filter(i=>i.t>=this.min&&i.t<=this.max),this.mode=this.moments.length>0?"tour":"paused",this.live=!1,this.tourIndex=0,this.phase="move",this.phaseS=0,this.moveFrom=this.t}play(){this.mode="continuous",this.live=!1}pause(){this.mode="paused",this.live=!1}scrubTo(e){this.mode="paused",this.live=!1,this.t=this.clamp(e)}stepHours(e){this.scrubTo(this.t+e*Jt)}goLive(e){this.mode="paused",this.live=!0,this.t=this.clamp(e)}step(e,t){if(this.live){this.t=this.clamp(t);return}if(this.mode==="continuous"){this.t+=e*Ed[this.rateIndex].secPerSec*1e3,this.t>this.max&&(this.t=this.clamp(t));return}if(this.mode!=="tour"||this.moments.length===0)return;this.phaseS+=e;const i=this.moments[this.tourIndex].t;if(this.phase==="move"){const a=Sd(this.phaseS/jh);this.t=this.moveFrom+(i-this.moveFrom)*a,this.phaseS>=jh&&(this.t=i,this.phase="dwell",this.phaseS=0);return}if(this.phaseS>=Z1){if(this.tourIndex++,this.tourIndex>=this.moments.length&&(this.tourIndex=0,this.momentSource)){const a=this.momentSource(t).filter(s=>s.t>=this.min&&s.t<=this.max);a.length>0&&(this.moments=a)}this.phase="move",this.phaseS=0,this.moveFrom=this.t}}clamp(e){return Math.max(this.min,Math.min(this.max,e))}}const Bi=Math.PI/180,Q1=new N(0,1,0),eS=new ot,tS=new xn,nS=new Bn,iS=new N(1,0,0),aS=1.7,sS=1.8,oS=5,rS=2,lS=8,cS=2.5,hS=250,uS=3e3,dS=350,fS=7e3,pS=9,mS=150,Zh=40,gS=1500,Kh=55,vS=70,wS=1,xS=2,_S=-40,yS=70,bS=1e3;class MS{mode="skyline";frozen=!1;target=new N;hdg=20;el=17;dist=2600;ceiling=1/0;orbitY=NaN;sx=0;sz=0;yaw=0;pitch=2;spawnProvisional=!1;hasStreet=!1;tween=null;idleS=0;keys=new Set;pointers=new Map;pinchDist=0;camera;ground;tmpPose={pos:new N,quat:new Bn,fov:Kh};constructor(e,t,i){this.camera=t,this.ground=i,this.armPointer(e),addEventListener("keydown",a=>{Td(a)||this.keys.add(a.code)}),addEventListener("keyup",a=>this.keys.delete(a.code)),addEventListener("blur",()=>this.keys.clear())}resetPlace(){this.target.set(0,0,0),this.hasStreet=!1,this.tween=null,this.idleS=0,this.orbitY=NaN}setMode(e,t=!1){if(e===this.mode&&!t)return;const i=e==="street";i&&!this.hasStreet&&this.spawnStreet(),this.mode=e,this.tween=t?null:{from:{pos:this.camera.position.clone(),quat:this.camera.quaternion.clone(),fov:this.camera.fov},t:0,down:i},this.idleS=0}setCeiling(e){this.ceiling=e}focus(){return this.mode==="street"?{x:this.sx,z:this.sz,mode:"street"}:{x:this.target.x,z:this.target.z,mode:"skyline"}}get tweening(){return this.tween!==null}update(e){this.idleS+=e;const t=this.ground.heightAt(this.target.x,this.target.z);this.target.y=t,this.mode==="street"?(this.spawnProvisional&&this.spawnStreet(),this.walk(e)):!this.frozen&&this.idleS>lS&&!this.tween&&(this.hdg=(this.hdg+cS*e)%360);const i=this.mode==="street"?this.streetPose(this.tmpPose):this.orbitPose(this.tmpPose,e),a=this.camera;if(this.tween){this.tween.t+=e/rS;const o=Sd(this.tween.t),r=this.tween.down?o*o:1-(1-o)*(1-o),l=this.tween.from;a.position.set(l.pos.x+(i.pos.x-l.pos.x)*o,l.pos.y+(i.pos.y-l.pos.y)*r,l.pos.z+(i.pos.z-l.pos.z)*o),a.quaternion.copy(l.quat).slerp(i.quat,o),a.fov=l.fov+(i.fov-l.fov)*o,this.tween.t>=1&&(this.tween=null)}else a.position.copy(i.pos),a.quaternion.copy(i.quat),a.fov=i.fov;a.up.set(0,1,0);const s=a.position.y-this.ground.heightAt(a.position.x,a.position.z);a.near=s<30?wS:xS,a.updateProjectionMatrix(),a.updateMatrixWorld()}orbitPose(e,t){const i=this.el*Bi,a=this.hdg*Bi;let s=Math.cos(i)*this.dist,o=this.target.x-Math.sin(a)*s,r=this.target.z+Math.cos(a)*s,l=Math.max(this.ground.heightAt(o,r),this.target.y),c=l+hS;const h=Math.min(l+uS,this.ceiling);h<c&&(s=Math.min(s,gS),o=this.target.x-Math.sin(a)*s,r=this.target.z+Math.cos(a)*s,l=Math.max(this.ground.heightAt(o,r),this.target.y),c=l+mS);const d=this.target.y+Math.sin(i)*this.dist,p=Math.max(Math.min(d,h),Math.min(c,h),l+Zh);this.orbitY=Number.isNaN(this.orbitY)?p:this.orbitY+(p-this.orbitY)*(1-Math.exp(-2.5*t));const f=Math.max(Math.min(this.orbitY,h),l+Zh);return e.pos.set(o,f,r),e.quat.setFromRotationMatrix(eS.lookAt(e.pos,this.target,Q1)),e.quat.multiply(nS.setFromAxisAngle(iS,pS*Bi)),e.fov=Kh,e}streetPose(e){return e.pos.set(this.sx,this.ground.heightAt(this.sx,this.sz)+aS,this.sz),e.quat.setFromEuler(tS.set(this.pitch*Bi,-this.yaw*Bi,0,"YXZ")),e.fov=vS,e}spawnStreet(){const e=this.ground.streetSpawn(this.target.x,this.target.z,bS);if(e){if(!this.hasStreet||Math.hypot(e.x-this.sx,e.z-this.sz)>1){this.sx=e.x,this.sz=e.z;const i=Math.abs(SS(e.headingDeg,this.hdg))>90;this.yaw=i?(e.headingDeg+180)%360:e.headingDeg,this.pitch=2}this.spawnProvisional=!this.ground.status.idle}else this.hasStreet||(this.sx=this.target.x,this.sz=this.target.z,this.yaw=this.hdg,this.pitch=2,this.spawnProvisional=!0);this.hasStreet=!0}walk(e){if(this.frozen)return;const t=this.keys;let i=0,a=0;if((t.has("KeyW")||t.has("ArrowUp"))&&(i+=1),(t.has("KeyS")||t.has("ArrowDown"))&&(i-=1),t.has("KeyD")&&(a+=1),t.has("KeyA")&&(a-=1),!i&&!a)return;const s=sS*(t.has("ShiftLeft")||t.has("ShiftRight")?oS:1),o=this.yaw*Bi,r=Math.hypot(i,a),l=(Math.sin(o)*i+Math.cos(o)*a)/r*s*e,c=(-Math.cos(o)*i+Math.sin(o)*a)/r*s*e,h=this.ground,d=h.blocked(this.sx,this.sz);(d||!h.blocked(this.sx+l,this.sz))&&(this.sx+=l),(d||!h.blocked(this.sx,this.sz+c))&&(this.sz+=c),this.spawnProvisional=!1,this.idleS=0}armPointer(e){e.style.touchAction="none",e.addEventListener("pointerdown",i=>{e.setPointerCapture(i.pointerId),this.pointers.set(i.pointerId,{x:i.clientX,y:i.clientY}),this.pinchDist=this.currentPinch(),this.idleS=0});const t=i=>{this.pointers.delete(i.pointerId),this.pinchDist=this.currentPinch()};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t),e.addEventListener("pointermove",i=>{const a=this.pointers.get(i.pointerId);if(!a||this.frozen)return;const s=i.clientX-a.x,o=i.clientY-a.y;if(a.x=i.clientX,a.y=i.clientY,this.idleS=0,this.pointers.size>=2){const r=this.currentPinch();this.pinchDist>0&&r>0&&this.mode==="skyline"&&this.zoom(this.pinchDist/r),this.pinchDist=r;return}this.tween||(this.mode==="skyline"?(this.hdg=(this.hdg-s*.3+360)%360,this.el=hr(this.el+o*.2,8,80)):(this.yaw=(this.yaw-s*.15+360)%360,this.pitch=hr(this.pitch+o*.15,_S,yS)))}),e.addEventListener("wheel",i=>{i.preventDefault(),this.idleS=0,this.mode==="skyline"&&!this.frozen&&this.zoom(Math.exp(i.deltaY*.0012))},{passive:!1})}zoom(e){this.dist=hr(this.dist*e,dS,fS)}currentPinch(){if(this.pointers.size<2)return 0;const[e,t]=[...this.pointers.values()];return Math.hypot(e.x-t.x,e.y-t.y)}}function hr(n,e,t){return Math.max(e,Math.min(t,n))}function SS(n,e){return(n-e+540)%360-180}function Td(n){const e=n.target;return!!e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)}class Jh{constructor(e){this.timezone=e;const t={timeZone:e,weekday:"short",hour:"numeric",minute:"2-digit",hour12:!0};try{this.fmt=new Intl.DateTimeFormat("en-US",t)}catch{this.fmt=new Intl.DateTimeFormat("en-US",{...t,timeZone:"UTC"})}try{this.zoneFmt=new Intl.DateTimeFormat("en-US",{timeZone:e,timeZoneName:"short"})}catch{this.zoneFmt=new Intl.DateTimeFormat("en-US",{timeZone:"UTC",timeZoneName:"short"})}}fmt;zoneFmt;dateFmt=null;parts(e){const t=this.fmt.formatToParts(e),i=l=>t.find(c=>c.type===l)?.value??"",a=Number(i("hour")),s=Number(i("minute")),o=/p/i.test(i("dayPeriod")),r=a%12+(o?12:0);return{time:`${a}:${String(s).padStart(2,"0")} ${o?"PM":"AM"}`,day:i("weekday"),hour:r+s/60}}abbrev(e){return this.zoneFmt.formatToParts(e).find(t=>t.type==="timeZoneName")?.value??"UTC"}date(e){if(!this.dateFmt){const t={weekday:"short",day:"numeric",month:"short"};try{this.dateFmt=new Intl.DateTimeFormat("en-US",{...t,timeZone:this.timezone})}catch{this.dateFmt=new Intl.DateTimeFormat("en-US",{...t,timeZone:"UTC"})}}return this.dateFmt.format(e)}}function ES(n){return n<=1?"clear":n===2?"partly":n===3?"cloud":n===45||n===48?"fog":n>=51&&n<=57?"drizzle":n>=71&&n<=77||n===85||n===86?"snow":n>=95?"storm":n>=58?"rain":"cloud"}const wa='<path d="M7 18h10a4 4 0 0 0 .4-8A5.5 5.5 0 0 0 6.8 9.3 4.4 4.4 0 0 0 7 18z" fill="currentColor" fill-opacity=".9"/>',TS='<circle cx="12" cy="12" r="4.2" fill="#ffd66b"/><g stroke="#ffd66b" stroke-width="1.8" stroke-linecap="round">'+[0,45,90,135,180,225,270,315].map(n=>{const e=n*Math.PI/180,t=i=>`${(12+Math.cos(e)*i).toFixed(1)} ${(12+Math.sin(e)*i).toFixed(1)}`;return`<path d="M${t(6.8)}L${t(9.2)}"/>`}).join("")+"</g>",AS='<path d="M15.5 4.5a7.5 7.5 0 1 0 4 12.5 6 6 0 0 1-4-12.5z" fill="#dfe6ff"/>';function Ad(n,e,t=18){const i=ES(n),a=e?TS:AS;let s;switch(i){case"clear":s=a;break;case"partly":s=`<g transform="translate(-3 -3) scale(.8)">${a}</g><g transform="translate(2 3) scale(.85)">${wa}</g>`;break;case"cloud":s=wa;break;case"fog":s='<g stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 9h16M6 13h12M4 17h16"/></g>';break;case"drizzle":case"rain":s=`<g transform="translate(0 -3)">${wa}</g><g stroke="#7cc4ff" stroke-width="1.8" stroke-linecap="round">`+(i==="rain"?'<path d="M8 18l-1 3M12 18l-1 3M16 18l-1 3"/>':'<path d="M9 18l-.5 1.5M14 18l-.5 1.5"/>')+"</g>";break;case"snow":s=`<g transform="translate(0 -3)">${wa}</g><g fill="#ffffff"><circle cx="8" cy="19.5" r="1.2"/><circle cx="12" cy="21" r="1.2"/><circle cx="16" cy="19.5" r="1.2"/></g>`;break;case"storm":s=`<g transform="translate(0 -3)">${wa}</g><path d="M12.5 15l-3 5h2.5l-1 3.5 3.8-5.5h-2.6l1.3-3z" fill="#ffd66b"/>`;break}return`<svg class="glyph" width="${t}" height="${t}" viewBox="0 0 24 24" aria-hidden="true">${s}</svg>`}const Rd="skycast.temp",RS=new Set(["US","LR","MM","BS","BZ","KY","PW","FM","MH"]);let Wi=null;function Qh(){try{const n=new Intl.Locale(navigator.language||"en-US"),e=n.region??n.maximize().region??"";return RS.has(e)?"F":"C"}catch{return"C"}}function Ji(){if(Wi)return Wi;try{const n=localStorage.getItem(Rd);Wi=n==="C"||n==="F"?n:Qh()}catch{Wi=Qh()}return Wi}function CS(n){Wi=n;try{localStorage.setItem(Rd,n)}catch{}}function ul(n){return Ji()==="F"?`${Math.round(n*1.8+32)}°F`:`${Math.round(n)}°C`}function DS(n){return Ji()==="F"?`${Math.round(n*2.23694)} mph`:`${Math.round(n*3.6)} km/h`}function PS(n){return n<.05?"none":Ji()==="F"?`${(n/25.4).toFixed(2)} in/h`:`${n.toFixed(1)} mm/h`}function LS(n){return["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"][Math.round((n%360+360)%360/22.5)%16]}const cn=36e5;function IS(n,e,t){const i=Math.max(0,1-Math.abs(t-3)/9),a=12+n*96+i*130,s=18+n*132+i*60,o=34+n*190+i*6,r=.62*e,l=c=>Math.round(c*(1-r)+(150*n+30)*r);return`rgb(${l(a)},${l(s)},${l(o)})`}class FS{root;controls;track;svgHost;cursor;nowMark;tourBtn;playBtn;rateSel;nowBtn;range=null;builtWidth=0;constructor(e,t){this.root=document.createElement("div"),this.root.className="scrubber glass",this.root.innerHTML=`
      <div class="sc-controls">
        <button class="sc-tour" title="Tour key moments (T)">Tour</button>
        <button class="sc-play" title="Play / pause (space)">Play</button>
        <select class="sc-rate" title="Playback rate">${Ed.map((a,s)=>`<option value="${s}">${a.label}</option>`).join("")}</select>
        <button class="sc-now" title="Back to live time">Now</button>
      </div>
      <div class="sc-track"><div class="sc-svg"></div><div class="sc-nowmark"></div><div class="sc-cursor"></div></div>`,e.append(this.root),this.controls=this.root.querySelector(".sc-controls"),this.track=this.root.querySelector(".sc-track"),this.svgHost=this.root.querySelector(".sc-svg"),this.cursor=this.root.querySelector(".sc-cursor"),this.nowMark=this.root.querySelector(".sc-nowmark"),this.tourBtn=this.root.querySelector(".sc-tour"),this.playBtn=this.root.querySelector(".sc-play"),this.rateSel=this.root.querySelector(".sc-rate"),this.nowBtn=this.root.querySelector(".sc-now"),this.tourBtn.onclick=()=>t.onTour(),this.playBtn.onclick=()=>t.onPlayPause(),this.nowBtn.onclick=()=>t.onNow(),this.rateSel.onchange=()=>t.onRate(Number(this.rateSel.value));const i=a=>{if(!this.range)return;const s=this.track.getBoundingClientRect(),o=Math.max(0,Math.min(1,(a-s.left)/Math.max(1,s.width)));t.onScrub(this.range.start+o*(this.range.end-this.range.start))};this.track.addEventListener("pointerdown",a=>{this.track.setPointerCapture(a.pointerId),i(a.clientX),a.preventDefault()}),this.track.addEventListener("pointermove",a=>{this.track.hasPointerCapture(a.pointerId)&&i(a.clientX)}),addEventListener("resize",()=>this.draw())}setRange(e){this.range=e,this.builtWidth=0,this.draw()}update(e,t,i,a,s){const o=this.range;if(!o)return;this.track.clientWidth!==this.builtWidth&&this.draw();const r=o.end-o.start,l=this.track.clientWidth;this.cursor.style.transform=`translateX(${((e-o.start)/r*l).toFixed(1)}px)`,this.nowMark.style.transform=`translateX(${((t-o.start)/r*l).toFixed(1)}px)`,ur(this.tourBtn,"on",i==="tour"),ur(this.playBtn,"on",i==="continuous");const c=i==="paused"?"Play":"Pause";this.playBtn.textContent!==c&&(this.playBtn.textContent=c),ur(this.nowBtn,"on",a),this.rateSel.value!==String(s)&&(this.rateSel.value=String(s))}draw(){const e=this.range,t=this.track.clientWidth;if(!e||t<=0)return;this.builtWidth=t;const i=this.track.clientHeight||64,a=e.end-e.start,s=h=>(h-e.start)/a*t,o=Math.round(a/cn),r=[],l=t/o;for(let h=0;h<o;h++){const d=e.start+(h+.5)*cn,p=aa(new Date(d),e.lat,e.lon),f=e.timeline?e.timeline.at(new Date(d)).totalCover:0;r.push(`<rect x="${(h*l).toFixed(2)}" y="0" width="${(l+.6).toFixed(2)}" height="${i}" fill="${IS(p.daylight,f,p.sun.altitude)}"/>`)}if(r.push(`<rect x="0" y="0" width="${t}" height="${i}" fill="rgba(8,12,22,.28)"/>`),e.timeline){const h=[];for(let u=0;u<=o;u++)h.push(e.timeline.at(new Date(e.start+u*cn)).tempC);const d=Math.min(...h),p=Math.max(...h),f=i*.66,g=i*.36,v=u=>f+(u-d)/Math.max(1,p-d)*(g-f),m=h.map((u,w)=>`${(w/o*t).toFixed(1)},${v(u).toFixed(1)}`).join(" ");r.push(`<polyline points="${m}" fill="none" stroke="#ffb86b" stroke-width="1.5" stroke-opacity=".95"/>`)}const c=[];for(let h=0;h<=o;h++){const d=e.start+h*cn;e.clock.parts(new Date(d)).hour<1&&c.push(d)}for(let h=0;h<c.length;h++){const d=c[h],p=s(d);r.push(`<line x1="${p.toFixed(1)}" x2="${p.toFixed(1)}" y1="0" y2="${i}" stroke="rgba(255,255,255,.55)" stroke-width="1"/>`);const f=c[h+1]??d+24*cn;let g=e.clock.parts(new Date(d+cn)).day;if(e.timeline&&f-d>=12*cn){let v=-1/0,m=1/0;for(let u=d;u<Math.min(f,e.end);u+=cn){const w=e.timeline.at(new Date(u)).tempC;v=Math.max(v,w),m=Math.min(m,w)}Number.isFinite(v)&&(g+=` ${ul(v)}/${ul(m).replace(/[CF]$/,"")}`)}s(f)-p>60&&r.push(`<text x="${(p+4).toFixed(1)}" y="${i-5}" class="sc-day">${g}</text>`)}if(e.timeline){const h=l*3>=18?3:l*6>=18?6:12,d=Math.ceil(e.start/(h*cn))*h*cn;for(let p=d;p<e.end;p+=h*cn){const f=e.timeline.at(new Date(p)),g=aa(new Date(p),e.lat,e.lon).sun.altitude,v=s(p)-8;r.push(`<g transform="translate(${v.toFixed(1)} 3)">${Ad(f.wmoCode,g>-.8,16)}</g>`)}}this.svgHost.innerHTML=`<svg width="${t}" height="${i}" viewBox="0 0 ${t} ${i}">${r.join("")}</svg>`}}function ur(n,e,t){n.classList.contains(e)!==t&&n.classList.toggle(e,t)}const US={observation:"Observed",forecast:"Forecast",simulated:"Simulated"};class NS{root;el={};last="";constructor(e,t){this.root=document.createElement("div"),this.root.className="hud glass",this.root.innerHTML=`
      <div class="hud-place"></div>
      <div class="hud-when"></div>
      <div class="hud-main">
        <span class="hud-glyph"></span>
        <span class="hud-temp"></span>
        <span class="hud-cond"></span>
        <button class="hud-unit" title="Switch C / F"></button>
      </div>
      <div class="hud-rows">
        <span>Wind</span><b class="hud-wind"></b>
        <span>Precip</span><b class="hud-precip"></b>
        <span>Cloud</span><b class="hud-cloud"></b>
      </div>
      <div class="hud-foot"><span class="hud-badge"></span><span class="hud-status"></span></div>`,e.append(this.root);for(const i of["place","when","glyph","temp","unit","cond","wind","precip","cloud","badge","status"])this.el[i]=this.root.querySelector(`.hud-${i}`);this.el.unit.onclick=i=>{i.stopPropagation(),CS(Ji()==="C"?"F":"C"),this.last="",t()},this.root.onclick=()=>this.root.classList.toggle("expanded")}update(e,t,i,a,s,o){const r=i?i.parts(t):null,l=i&&r?`${i.date(t)} · ${r.time} ${i.abbrev(t)}`:"",c=[e,l,a?.tempC.toFixed(1),a?.wmoCode,a?.source,a?.windSpeed.toFixed(1),a?.precip.toFixed(2),a?.totalCover.toFixed(2),s,o,Ji()].join("|");if(c!==this.last){if(this.last=c,this.el.place.textContent=e,this.el.when.textContent=l,this.el.unit.textContent=`°${Ji()==="C"?"F":"C"}`,this.el.status.textContent=o,!a){this.el.temp.textContent="--",this.el.cond.textContent="loading weather";return}this.el.glyph.innerHTML=Ad(a.wmoCode,s,30),this.el.temp.textContent=ul(a.tempC),this.el.cond.textContent=a.summary,this.el.wind.textContent=`${DS(a.windSpeed)} ${LS(a.windDir)}`,this.el.precip.textContent=PS(a.precip),this.el.cloud.textContent=`${Math.round(a.totalCover*100)}%`,this.el.badge.textContent=US[a.source],this.el.badge.dataset.source=a.source}}}class kS{el;constructor(e){this.el=document.createElement("div"),this.el.className="pill glass",e.append(this.el)}set(e){const t=!!e;this.el.classList.toggle("show",t),t&&this.el.textContent!==e&&(this.el.textContent=e)}}class OS{buttons;constructor(e,t){const i=document.createElement("div");i.className="modes",i.innerHTML='<button data-m="skyline" title="Skyline view (1)">Skyline</button><button data-m="street" title="Street view (2)">Street</button>',e.append(i);const a=[...i.querySelectorAll("button")];this.buttons={skyline:a[0],street:a[1]};for(const s of a)s.onclick=()=>t(s.dataset.m)}set(e){this.buttons.skyline.classList.toggle("on",e==="skyline"),this.buttons.street.classList.toggle("on",e==="street")}}class zS{el;constructor(e){this.el=document.createElement("div"),this.el.className="loading glass",this.el.innerHTML='<div class="ld-label">starting</div><div class="ld-bar"><i></i></div>',e.append(this.el)}set(e,t){this.el.classList.add("show"),this.el.querySelector(".ld-label").textContent=t,this.el.querySelector(".ld-bar i").style.width=`${Math.round(e*100)}%`}done(){this.el.classList.remove("show")}fail(e){this.el.classList.add("show"),this.el.querySelector(".ld-label").textContent=e}}const Cd=[{name:"New York",lat:40.758,lon:-73.9855},{name:"San Francisco",lat:37.7925,lon:-122.4015},{name:"London",lat:51.5079,lon:-.1281},{name:"Paris",lat:48.8566,lon:2.3522},{name:"Tokyo",lat:35.6812,lon:139.7671},{name:"Sydney",lat:-33.8688,lon:151.2093},{name:"Chicago",lat:41.8826,lon:-87.6233},{name:"Seattle",lat:47.6062,lon:-122.3321}];class BS{constructor(e,t){this.onPick=t,this.root=document.createElement("div"),this.root.className="where glass",this.root.innerHTML=`
      <div class="wh-row">
        <input class="wh-input" type="search" placeholder="Search a place" autocomplete="off" spellcheck="false" />
        <button class="wh-geo" title="My location" aria-label="My location">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>
        </button>
      </div>
      <div class="wh-list"></div>
      <div class="wh-note"></div>`,e.append(this.root),this.input=this.root.querySelector(".wh-input"),this.list=this.root.querySelector(".wh-list"),this.note=this.root.querySelector(".wh-note"),this.input.addEventListener("focus",()=>this.showPresets()),this.input.addEventListener("input",()=>{clearTimeout(this.timer);const i=this.input.value.trim();if(i.length<2){this.showPresets();return}this.timer=window.setTimeout(()=>void this.search(i),250)}),this.input.addEventListener("keydown",i=>{i.key==="Escape"&&this.close(),i.key==="Enter"&&this.list.querySelector("button")?.click()}),document.addEventListener("pointerdown",i=>{this.root.contains(i.target)||this.close()}),this.root.querySelector(".wh-geo").addEventListener("click",()=>this.locate())}root;input;list;note;abort=null;timer=0;showPresets(){this.render(Cd.map(e=>({label:e.name,pick:{lat:e.lat,lon:e.lon,name:e.name}})))}async search(e){this.abort?.abort(),this.abort=new AbortController;const t=await h_(e,this.abort.signal);if(this.input.value.trim()===e){if(t.length===0){this.render([]),this.setNote(`nothing found for "${e}"`);return}this.render(t.map(i=>({label:c_(i),pick:{lat:i.lat,lon:i.lon,name:i.name}})))}}render(e){this.setNote(""),this.list.innerHTML="";for(const t of e){const i=document.createElement("button");i.textContent=t.label,i.onclick=()=>{this.close(),this.input.value="",this.input.blur(),this.onPick(t.pick)},this.list.append(i)}this.root.classList.toggle("open",e.length>0)}close(){this.root.classList.remove("open"),this.list.innerHTML=""}setNote(e){this.note.textContent=e}locate(){if(!("geolocation"in navigator)){this.setNote("location is not available in this browser");return}this.setNote("locating..."),navigator.geolocation.getCurrentPosition(e=>{this.setNote(""),this.onPick({lat:e.coords.latitude,lon:e.coords.longitude,name:null})},e=>this.setNote(e.code===e.PERMISSION_DENIED?"location permission denied":"could not get a location"),{enableHighAccuracy:!1,timeout:1e4,maximumAge:6e5})}}const HS={lat:37.7925,lon:-122.4015,mode:"skyline",time:null};function eu(n){const e=decodeURIComponent(n.replace(/^#/,"")).split(",");if(e.length<2)return null;const t=Number(e[0]),i=Number(e[1]);if(!Number.isFinite(t)||!Number.isFinite(i)||Math.abs(t)>90||Math.abs(i)>180)return null;const a=e[2]==="street"?"street":"skyline";let s=null;if(e[3]){const o=e[3].trim(),r=/^\d+$/.test(o)?Number(o)*1e3:Date.parse(o);Number.isFinite(r)&&(s=r)}return{lat:t,lon:i,mode:a,time:s}}function tu(n){const e=`#${n.lat.toFixed(4)},${n.lon.toFixed(4)},${n.mode}`;return n.time===null?e:`${e},${new Date(n.time).toISOString().slice(0,16)}Z`}const GS={0:"Clear",2:"Partly cloudy",3:"Overcast",45:"Fog",51:"Drizzle",61:"Light rain",63:"Rain",65:"Heavy rain",71:"Light snow",73:"Snow",75:"Heavy snow",80:"Rain showers",95:"Thunderstorm",96:"Thunderstorm with hail",99:"Thunderstorm with hail"};function VS(n){if(!n)return null;const e={...Ea(),live:!1,source:"simulated",tempC:15,dewC:8,humidity:63,pressureHpa:1013,windSpeed:4,windDir:270,gust:6,precip:0,precipKind:"none",visibility:2e4,low:{cover:0,base:900,top:2100},mid:{cover:0,base:3800,top:5e3},high:{cover:0,base:8500,top:9400}};let t=null,i=-1,a=-1,s=-1,o=-1,r=0;for(const g of n.split(",")){const v=g.split(":"),m=(w,x)=>{const _=Number(v[w]);return v.length>w&&v[w]!==""&&Number.isFinite(_)?_:x},u=v[0];if(u==="precip")e.precip=Math.max(0,m(1,0));else if(u==="temp")e.tempC=m(1,e.tempC);else if(u==="dew")e.dewC=m(1,e.dewC);else if(u==="wind")e.windSpeed=Math.max(0,m(1,e.windSpeed)),e.windDir=m(2,e.windDir),e.gust=Math.max(e.windSpeed,m(3,e.windSpeed*1.5));else if(u==="aloft")e.windAloft={speed:Math.max(0,m(1,8)),dir:m(2,e.windDir)};else if(u==="snow")i=Math.max(0,m(1,0));else if(u==="depth")r=Math.max(0,m(1,0));else if(u==="code")a=m(1,-1);else if(u==="cape")e.cape=Math.max(0,m(1,0));else if(u==="sun")e.shortwave=Math.max(0,m(1,0));else if(u==="rained")t={mm:Math.max(0,m(1,2)),ago:Math.max(0,m(2,3))};else if(u==="wet")s=Math.max(0,Math.min(1,m(1,0)));else if(u==="puddle")o=Math.max(0,Math.min(1,m(1,0)));else if(u==="vis")e.visibility=Math.max(100,m(1,e.visibility));else if(u==="low"||u==="mid"||u==="high"){const w=e[u];e[u]={cover:Math.max(0,Math.min(1,m(1,w.cover))),base:m(2,w.base),top:m(3,w.top)}}}e.dewC=Math.min(e.dewC,e.tempC),e.humidity=100*Math.exp(17.62*e.dewC/(243.12+e.dewC)-17.62*e.tempC/(243.12+e.tempC)),n.includes("aloft:")||(e.windAloft={speed:e.windSpeed*1.8,dir:e.windDir});const l=i>=0?Bs(e.precip,0,i,e.tempC,e.dewC):Bs(e.precip,0,0,e.tempC,e.dewC);e.precip=l.rate,e.precipKind=l.kind,e.snowFrac=l.snowFrac,e.snowfall=i>=0?i:l.rate*l.snowFrac*.7,e.snowDepth=r/100;const c={tempC:e.tempC,dewC:e.dewC,windSpeed:e.windSpeed,liquidMm:e.precip*(1-e.snowFrac),shortwave:e.shortwave},h=[];if(t){const g={...c,liquidMm:t.mm,shortwave:30,dewC:e.tempC-.5};for(let m=0;m<4;m++)h.push(g);let v=nl(h).at(-1);for(let m=0,u=Math.round(t.ago*6);m<u;m++)v=Ku(v,c,1/6);e.wetness=il(v),e.puddles=al(v)}else{for(let v=0;v<13;v++)h.push(c);const g=nl(h).at(-1);e.wetness=il(g),e.puddles=al(g)}s>=0&&(e.wetness=s),o>=0&&(e.puddles=o),e.totalCover=1-(1-e.low.cover)*(1-e.mid.cover)*(1-e.high.cover),e.opacity=Cl(e.low.cover,e.mid.cover,e.high.cover);const d=e.precipKind==="snow",p=e.precip>2.5?d?73:63:e.precip>0?d?71:e.precip<.4?51:61:e.visibility<1e3?45:e.totalCover>.85?3:e.totalCover>.3?2:0;e.wmoCode=a>=0?a:p,e.summary=GS[e.wmoCode]??"Simulated",e.storm=Ju(e.wmoCode,e.cape,e.precip);const f=id(e.windAloft.speed,e.windAloft.dir);return e.drift={x:f.x*3600,z:f.z*3600},e}const ys=36e5,WS=15*6e4;function XS(n,e){return n.low.cover<.3||n.low.top-e<60?1/0:e+.85*(n.low.base-e)-40}async function $S(){const n=document.getElementById("view"),e=document.getElementById("ui"),t=new URLSearchParams(location.search);p_(n),t.has("diag")&&f_(document.createElement("canvas"));const i=t.has("shot");i&&(e.style.display="none");const a=Nu(),{renderer:s,scene:o,camera:r}=rw(n,a);s.debug.onShaderError=(Z,ze,ce,Fe)=>{const rt=window.__skycastShout;rt?.("SHADER FAILED"),console.error("[skycast] vertex shader log:",Z.getShaderInfoLog(ce)),console.error("[skycast] fragment shader log:",Z.getShaderInfoLog(Fe))};const l=new Px(s),c=lw(s,a),h=new px(s);h.enabled=a.aoEnabled;const d=new uw(s,Pu[a.tier]),p=()=>{const Z=s.getDrawingBufferSize(new Oe);c.setSize(Z.x,Z.y),l.resize(s),h.resize(s)};addEventListener("resize",p),i?(d.pin(1),d.apply(s),s.setSize(n.clientWidth||innerWidth,n.clientHeight||innerHeight,!1),p()):(d.apply(s),p());const f=new pw;o.add(f.mesh);const g=new Kw(a),v=new Ox,m=new $1(o,a,g.uniforms,t.get("overpass"),t.get("vector")!=="0"),u=new MS(n,r,m);u.frozen=i;const w=new J1(Date.now()),x=new zS(e),_=new NS(e,()=>k&&S.setRange(k)),y=new kS(e),S=new FS(e,{onScrub:Z=>{w.scrubTo(Z),z()},onTour:()=>oe(),onPlayPause:()=>Se(),onRate:Z=>{w.rateIndex=Z,w.play(),z()},onNow:()=>{w.goLive(Date.now()),z()}}),A=new OS(S.controls,Z=>j(Z));new BS(e,Z=>void Ve(Z));let C=eu(location.hash)??{...HS},M=new nh(C.lat,C.lon),b="",T=null,P=null,I=null,F=Math.round(C.lon/15)*3600,k=null,H=0,V="";const z=()=>{C.mode=u.mode,C.time=w.mode==="paused"&&!w.live?Math.round(w.t/6e4)*6e4:null;const Z=tu(C);Z!==V&&(V=Z,history.replaceState(null,"",`${location.pathname}${location.search}${Z}`))},j=Z=>{u.setMode(Z),A.set(Z),z()},ee=Z=>j1(C.lat,C.lon,Z,K1,F),oe=()=>{w.goLive(Date.now()),w.startTour(ee,Date.now()),z()},Se=()=>{w.mode==="paused"?w.play():w.pause(),z()},Ve=async Z=>{C={lat:Z.lat,lon:Z.lon,mode:u.mode,time:null},V="",Ne(),await Le(Z.name)},Ne=()=>{const Z=tu(C);V=Z,history.replaceState(null,"",`${location.pathname}${location.search}${Z}`)},Le=async Z=>{const ze=++H;M=new nh(C.lat,C.lon),F=Math.round(C.lon/15)*3600,P=null,I=null,T=null,k=null;const ce=Cd.find(Te=>Math.abs(Te.lat-C.lat)<.001&&Math.abs(Te.lon-C.lon)<.001);b=Z??ce?.name??`${C.lat.toFixed(3)}, ${C.lon.toFixed(3)}`,document.title=`${b} · skycast`,!Z&&!ce&&u_(C.lat,C.lon).then(Te=>{Te&&ze===H&&(b=Te.name,document.title=`${b} · skycast`)}),u.resetPlace(),u.setMode(C.mode,!0),A.set(C.mode),C.time!==null?w.scrubTo(C.time):w.goLive(Date.now());const Fe=i_(C.lat,C.lon).then(Te=>{ze===H&&(P=Te)}),rt=o_(C.lat,C.lon).then(Te=>{if(ze===H){if(I=Te,Te)T=new Jh(Te.timezone),F=Te.utcOffsetSeconds,w.setBounds(Te.start.getTime(),Te.end.getTime()),k={start:Te.start.getTime(),end:Te.end.getTime(),lat:C.lat,lon:C.lon,timeline:Te,clock:T};else{T=new Jh("UTC");const D=Date.now();w.setBounds(D-24*ys,D+48*ys),k={start:D-24*ys,end:D+48*ys,lat:C.lat,lon:C.lon,timeline:null,clock:T}}S.setRange(k)}});try{await m.setOrigin(M,(Te,D)=>{ze===H&&x.set(Te,D)})}catch(Te){console.error(Te),ze===H&&x.fail(`could not load terrain: ${Te.message}`);return}ze===H&&(x.done(),await Promise.all([Fe,rt]),ze===H&&(P||(P=Ea()),C.time===null&&!i&&oe(),z()))};addEventListener("hashchange",()=>{if(location.hash===V)return;const Z=eu(location.hash);if(!Z)return;const ze=Math.abs(Z.lat-C.lat)>1e-5||Math.abs(Z.lon-C.lon)>1e-5;if(C=Z,V=location.hash,ze){Le(null);return}j(Z.mode),Z.time!==null?w.scrubTo(Z.time):oe()});let q=!1;addEventListener("keydown",Z=>{if(!(Td(Z)||Z.metaKey||Z.ctrlKey||Z.altKey))switch(Z.code){case"Digit1":j("skyline");break;case"Digit2":j("street");break;case"Space":Z.preventDefault(),Se();break;case"ArrowLeft":Z.preventDefault(),w.stepHours(-1),z();break;case"ArrowRight":Z.preventDefault(),w.stepHours(1),z();break;case"KeyT":oe();break;case"KeyH":q=!q,e.classList.toggle("hidden",q);break}}),Le(null);const J=new Mp;let fe=0,Ce=16,we=1,Xe=0,ct=Ea(),L=NaN,it=0;const ke=VS(t.get("wx")),De=Z=>{if(ke)return ke;const ze=Date.now();if(P&&(!I||Math.abs(Z-ze)<WS)){if(!I)return P;const ce=I.at(new Date(Z));return{...P,wetness:ce.wetness,puddles:ce.puddles,drift:ce.drift,snowDepth:P.snowDepth||ce.snowDepth}}return I?I.at(new Date(Z)):P??Ea()};s.setAnimationLoop(()=>{const Z=J.getDelta(),ze=Math.min(.05,Z);i||(fe+=ze),w.step(ze,Date.now());const ce=new Date(w.t);u.setCeiling(XS(ct,m.heightAt(0,0))),u.update(ze),m.update(r,u.focus());const Fe=performance.now();(!(Math.abs(w.t-L)<6e4)||Fe-it>500)&&(ct=De(w.t),L=w.t,it=Fe);const rt=aa(ce,C.lat,C.lon),Te=Vw(rt,ct),D=r.position.y;f.update(rt,ct,D,fe),f.syncCamera(r),f.uniforms.uExposure.value=Te.exposure;const E=(ce.getUTCHours()+ce.getUTCMinutes()/60+C.lon/15+48)%24;m.prepareFrame({camera:r,light:Te,wx:ct,skyProbe:v,elapsed:fe,solarHour:E}),v.setSize(d.scale<.8?32:64),v.update(s,Te,D),g.update(s,o,r,Te.sunDir,d.scale,m.shadowCasters),m.setAo(h,0),f.syncCamera(r),h.render(s,o,r,m.shadowCasters),m.setAo(h,1),s.setRenderTarget(c),s.render(o,r),l.update(r,ct,Te,fe),l.uniforms.uSunSurfaceCloud.value=.105,l.presentUniforms.uExposure.value=Te.exposure,l.presentUniforms.uNight.value=Te.night,l.brightUniforms.uExposure.value=Te.exposure,l.brightUniforms.uNight.value=Te.night,l.render(s,c.texture,c.depthTexture),Xe++,Ce+=(ze*1e3-Ce)*.06,!i&&d.update(Ce,ze)&&(d.apply(s),s.setSize(n.clientWidth||innerWidth,n.clientHeight||innerHeight,!1),p()),S.update(w.t,Date.now(),w.mode,w.live,w.rateIndex),y.set(w.label),we+=ze,we>.25&&(we=0,_.update(b,ce,T,P?ct:null,rt.sun.altitude>-.833,m.status.note))}),Object.assign(window,{skycastShot:{get frames(){return Xe},get settled(){return m.status.ready&&m.status.idle&&!m.drapePending&&P!==null&&I!==null},get buildings(){return m.status.buildings},get liveStats(){return m.liveStats},capture:()=>n.toDataURL("image/png")},skycast:{scene:o,camera:r,renderer:s,sky:f,composite:l,ground:m,rig:u,get time(){return new Date(w.t)},get mode(){return u.mode},get play(){return w.mode},get label(){return w.label},get wx(){return ct}},skycastBudget:a,skycastClearCache:async()=>{await Yx(),console.info("[skycast] tile cache cleared; reload to refetch")}})}$S().catch(n=>{console.error(n);const e=window.__skycastShout;e?.(`failed: ${n.message}`)});
