(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tc="180",np=0,Tc=1,ip=2,ld=1,cd=2,Un=3,En=0,Vt=1,zt=2,si=0,Ai=1,Ac=2,Rc=3,Cc=4,ap=5,bi=100,sp=101,op=102,rp=103,lp=104,cp=200,hp=201,up=202,dp=203,Jr=204,Qr=205,fp=206,pp=207,mp=208,gp=209,vp=210,wp=211,xp=212,yp=213,_p=214,el=0,tl=1,nl=2,pa=3,il=4,al=5,sl=6,ol=7,hd=0,bp=1,Mp=2,Wn=0,Sp=1,Ep=2,Tp=3,Ap=4,Rp=5,Cp=6,Dp=7,ud=300,ma=301,ga=302,rl=303,ll=304,Ro=306,ha=1e3,Tt=1001,cl=1002,vt=1003,Pp=1004,ms=1005,Ze=1006,Wo=1007,Gn=1008,_t=1009,dd=1010,fd=1011,Za=1012,nc=1013,Tn=1014,gn=1015,wn=1016,ic=1017,ac=1018,Ja=1020,pd=35902,md=35899,gd=1021,vd=1022,gt=1023,li=1026,Qa=1027,Yn=1028,sc=1029,wd=1030,oc=1031,rc=1033,eo=33776,to=33777,no=33778,io=33779,hl=35840,ul=35841,dl=35842,fl=35843,pl=36196,ml=37492,gl=37496,vl=37808,wl=37809,xl=37810,yl=37811,_l=37812,bl=37813,Ml=37814,Sl=37815,El=37816,Tl=37817,Al=37818,Rl=37819,Cl=37820,Dl=37821,Pl=36492,Ll=36494,Il=36495,Fl=36283,kl=36284,Nl=36285,Ul=36286,Lp=3200,Ip=3201,Fp=0,kp=1,Bn="",on="srgb",Ci="srgb-linear",mo="linear",at="srgb",Ni=7680,Dc=519,Np=512,Up=513,Op=514,xd=515,zp=516,Bp=517,Hp=518,Gp=519,Pc=35044,Vp=35048,It="300 es",Sn=2e3,go=2001;class Ma{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,o=a.length;s<o;s++)a[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lc=1234567;const Xa=Math.PI/180,es=180/Math.PI;function Sa(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function lc(n,e){return(n%e+e)%e}function Wp(n,e,t,i,a){return i+(n-e)*(a-i)/(t-e)}function Xp(n,e,t){return n!==e?(t-n)/(e-n):0}function $a(n,e,t){return(1-t)*n+t*e}function $p(n,e,t,i){return $a(n,e,1-Math.exp(-t*i))}function qp(n,e=1){return e-Math.abs(lc(n,e*2)-e)}function Yp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function jp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Kp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Zp(n,e){return n+Math.random()*(e-n)}function Jp(n){return n*(.5-Math.random())}function Qp(n){n!==void 0&&(Lc=n);let e=Lc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function em(n){return n*Xa}function tm(n){return n*es}function nm(n){return(n&n-1)===0&&n!==0}function im(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function am(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function sm(n,e,t,i,a){const s=Math.cos,o=Math.sin,r=s(t/2),l=o(t/2),c=s((e+i)/2),h=o((e+i)/2),u=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),w=o((i-e)/2);switch(a){case"XYX":n.set(r*h,l*u,l*f,r*c);break;case"YZY":n.set(l*f,r*h,l*u,r*c);break;case"ZXZ":n.set(l*u,l*f,r*h,r*c);break;case"XZX":n.set(r*h,l*w,l*p,r*c);break;case"YXY":n.set(l*p,r*h,l*w,r*c);break;case"ZYZ":n.set(l*w,l*p,r*h,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function ia(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ic={DEG2RAD:Xa,RAD2DEG:es,generateUUID:Sa,clamp:$e,euclideanModulo:lc,mapLinear:Wp,inverseLerp:Xp,lerp:$a,damp:$p,pingpong:qp,smoothstep:Yp,smootherstep:jp,randInt:Kp,randFloat:Zp,randFloatSpread:Jp,seededRandom:Qp,degToRad:em,radToDeg:tm,isPowerOfTwo:nm,ceilPowerOfTwo:im,floorPowerOfTwo:am,setQuaternionFromProperEuler:sm,normalize:Nt,denormalize:ia};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*a+e.x,this.y=s*a+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xn{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,s,o,r){let l=i[a+0],c=i[a+1],h=i[a+2],u=i[a+3];const f=s[o+0],p=s[o+1],w=s[o+2],g=s[o+3];if(r===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(r===1){e[t+0]=f,e[t+1]=p,e[t+2]=w,e[t+3]=g;return}if(u!==g||l!==f||c!==p||h!==w){let m=1-r;const d=l*f+c*p+h*w+u*g,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const _=Math.sqrt(x),b=Math.atan2(_,d*v);m=Math.sin(m*b)/_,r=Math.sin(r*b)/_}const y=r*v;if(l=l*m+f*y,c=c*m+p*y,h=h*m+w*y,u=u*m+g*y,m===1-r){const _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,a,s,o){const r=i[a],l=i[a+1],c=i[a+2],h=i[a+3],u=s[o],f=s[o+1],p=s[o+2],w=s[o+3];return e[t]=r*w+h*u+l*p-c*f,e[t+1]=l*w+h*f+c*u-r*p,e[t+2]=c*w+h*p+r*f-l*u,e[t+3]=h*w-r*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,s=e._z,o=e._order,r=Math.cos,l=Math.sin,c=r(i/2),h=r(a/2),u=r(s/2),f=l(i/2),p=l(a/2),w=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*p*w,this._y=c*p*u-f*h*w,this._z=c*h*w+f*p*u,this._w=c*h*u-f*p*w;break;case"YXZ":this._x=f*h*u+c*p*w,this._y=c*p*u-f*h*w,this._z=c*h*w-f*p*u,this._w=c*h*u+f*p*w;break;case"ZXY":this._x=f*h*u-c*p*w,this._y=c*p*u+f*h*w,this._z=c*h*w+f*p*u,this._w=c*h*u-f*p*w;break;case"ZYX":this._x=f*h*u-c*p*w,this._y=c*p*u+f*h*w,this._z=c*h*w-f*p*u,this._w=c*h*u+f*p*w;break;case"YZX":this._x=f*h*u+c*p*w,this._y=c*p*u+f*h*w,this._z=c*h*w-f*p*u,this._w=c*h*u-f*p*w;break;case"XZY":this._x=f*h*u-c*p*w,this._y=c*p*u-f*h*w,this._z=c*h*w+f*p*u,this._w=c*h*u+f*p*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],s=t[8],o=t[1],r=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+r+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-a)*p}else if(i>r&&i>u){const p=2*Math.sqrt(1+i-r-u);this._w=(h-l)/p,this._x=.25*p,this._y=(a+o)/p,this._z=(s+c)/p}else if(r>u){const p=2*Math.sqrt(1+r-i-u);this._w=(s-c)/p,this._x=(a+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-r);this._w=(o-a)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,s=e._z,o=e._w,r=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*r+a*c-s*l,this._y=a*h+o*l+s*r-i*c,this._z=s*h+o*c+i*l-a*r,this._w=o*h-i*r-a*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,s=this._z,o=this._w;let r=o*e._w+i*e._x+a*e._y+s*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=o,this._x=i,this._y=a,this._z=s,this;const l=1-r*r;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*a+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,r),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=a*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*a,this.y=s[1]*t+s[4]*i+s[7]*a,this.z=s[2]*t+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*a+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*a+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*a+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,s=e.x,o=e.y,r=e.z,l=e.w,c=2*(o*a-r*i),h=2*(r*t-s*a),u=2*(s*i-o*t);return this.x=t+l*c+o*u-r*h,this.y=i+l*h+r*c-s*u,this.z=a+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a,this.y=s[1]*t+s[5]*i+s[9]*a,this.z=s[2]*t+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,s=e.z,o=t.x,r=t.y,l=t.z;return this.x=a*l-s*r,this.y=s*o-i*l,this.z=i*r-a*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xo.copy(this).projectOnVector(e),this.sub(Xo)}reflect(e){return this.sub(Xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xo=new k,Fc=new xn;class He{constructor(e,t,i,a,s,o,r,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,o,r,l,c)}set(e,t,i,a,s,o,r,l,c){const h=this.elements;return h[0]=e,h[1]=a,h[2]=r,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,o=i[0],r=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],p=i[5],w=i[8],g=a[0],m=a[3],d=a[6],v=a[1],x=a[4],y=a[7],_=a[2],b=a[5],E=a[8];return s[0]=o*g+r*v+l*_,s[3]=o*m+r*x+l*b,s[6]=o*d+r*y+l*E,s[1]=c*g+h*v+u*_,s[4]=c*m+h*x+u*b,s[7]=c*d+h*y+u*E,s[2]=f*g+p*v+w*_,s[5]=f*m+p*x+w*b,s[8]=f*d+p*y+w*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],o=e[4],r=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*r*c-i*s*h+i*r*l+a*s*c-a*o*l}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],o=e[4],r=e[5],l=e[6],c=e[7],h=e[8],u=h*o-r*c,f=r*l-h*s,p=c*s-o*l,w=t*u+i*f+a*p;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/w;return e[0]=u*g,e[1]=(a*c-h*i)*g,e[2]=(r*i-a*o)*g,e[3]=f*g,e[4]=(h*t-a*l)*g,e[5]=(a*s-r*t)*g,e[6]=p*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,s,o,r){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*r)+o+e,-a*c,a*l,-a*(-c*o+l*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply($o.makeScale(e,t)),this}rotate(e){return this.premultiply($o.makeRotation(-e)),this}translate(e,t){return this.premultiply($o.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $o=new He;function yd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function vo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function om(){const n=vo("canvas");return n.style.display="block",n}const kc={};function ts(n){n in kc||(kc[n]=!0,console.warn(n))}function rm(n,e,t){return new Promise(function(i,a){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Nc=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uc=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lm(){const n={enabled:!0,workingColorSpace:Ci,spaces:{},convert:function(a,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===at&&(a.r=Xn(a.r),a.g=Xn(a.g),a.b=Xn(a.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(a.r=ua(a.r),a.g=ua(a.g),a.b=ua(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Bn?mo:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,o){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return ts("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return ts("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(a,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ci]:{primaries:e,whitePoint:i,transfer:mo,toXYZ:Nc,fromXYZ:Uc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Nc,fromXYZ:Uc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),n}const Qe=lm();function Xn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ua(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ui;class cm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ui===void 0&&(Ui=vo("canvas")),Ui.width=e.width,Ui.height=e.height;const a=Ui.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Ui}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let o=0;o<s.length;o++)s[o]=Xn(s[o]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xn(t[i]/255)*255):t[i]=Xn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hm=0;class cc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Sa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let o=0,r=a.length;o<r;o++)a[o].isDataTexture?s.push(qo(a[o].image)):s.push(qo(a[o]))}else s=qo(a);i.url=s}return t||(e.images[this.uuid]=i),i}}function qo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?cm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let um=0;const Yo=new k;class Ft extends Ma{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=Tt,a=Tt,s=Ze,o=Gn,r=gt,l=_t,c=Ft.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=Sa(),this.name="",this.source=new cc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yo).x}get height(){return this.source.getSize(Yo).y}get depth(){return this.source.getSize(Yo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ud)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ha:e.x=e.x-Math.floor(e.x);break;case Tt:e.x=e.x<0?0:1;break;case cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ha:e.y=e.y-Math.floor(e.y);break;case Tt:e.y=e.y<0?0:1;break;case cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=ud;Ft.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,i=0,a=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*a+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*a+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*a+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,s;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],w=l[9],g=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(w-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(w+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(p+1)/2,_=(d+1)/2,b=(h+f)/4,E=(u+g)/4,R=(w+m)/4;return x>y&&x>_?x<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(x),a=b/i,s=E/i):y>_?y<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(y),i=b/a,s=R/a):_<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(_),i=E/s,a=R/s),this.set(i,a,s,t),this}let v=Math.sqrt((m-w)*(m-w)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-w)/v,this.y=(u-g)/v,this.z=(f-h)/v,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dm extends Ma{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const a={width:e,height:t,depth:i.depth},s=new Ft(a);this.textures=[];const o=i.count;for(let r=0;r<o;r++)this.textures[r]=s.clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Ze,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new cc(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rt extends dm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class _d extends Ft{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=vt,this.minFilter=vt,this.wrapR=Tt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bd extends Ft{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=vt,this.minFilter=vt,this.wrapR=Tt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,r=s.count;o<r;o++)e.isMesh===!0?e.getVertexPosition(o,cn):cn.fromBufferAttribute(s,o),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gs.copy(i.boundingBox)),gs.applyMatrix4(e.matrixWorld),this.union(gs)}const a=e.children;for(let s=0,o=a.length;s<o;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(La),vs.subVectors(this.max,La),Oi.subVectors(e.a,La),zi.subVectors(e.b,La),Bi.subVectors(e.c,La),Kn.subVectors(zi,Oi),Zn.subVectors(Bi,zi),ui.subVectors(Oi,Bi);let t=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-ui.z,ui.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,ui.z,0,-ui.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-ui.y,ui.x,0];return!jo(t,Oi,zi,Bi,vs)||(t=[1,0,0,0,1,0,0,0,1],!jo(t,Oi,zi,Bi,vs))?!1:(ws.crossVectors(Kn,Zn),t=[ws.x,ws.y,ws.z],jo(t,Oi,zi,Bi,vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Cn=[new k,new k,new k,new k,new k,new k,new k,new k],cn=new k,gs=new Ii,Oi=new k,zi=new k,Bi=new k,Kn=new k,Zn=new k,ui=new k,La=new k,vs=new k,ws=new k,di=new k;function jo(n,e,t,i,a){for(let s=0,o=n.length-3;s<=o;s+=3){di.fromArray(n,s);const r=a.x*Math.abs(di.x)+a.y*Math.abs(di.y)+a.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),h=i.dot(di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const fm=new Ii,Ia=new k,Ko=new k;class rn{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):fm.setFromPoints(e).getCenter(i);let a=0;for(let s=0,o=e.length;s<o;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ia.subVectors(e,this.center);const t=Ia.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(Ia,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ia.copy(e.center).add(Ko)),this.expandByPoint(Ia.copy(e.center).sub(Ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Dn=new k,Zo=new k,xs=new k,Jn=new k,Jo=new k,ys=new k,Qo=new k;class pm{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Zo.copy(e).add(t).multiplyScalar(.5),xs.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(Zo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(xs),r=Jn.dot(this.direction),l=-Jn.dot(xs),c=Jn.lengthSq(),h=Math.abs(1-o*o);let u,f,p,w;if(h>0)if(u=o*l-r,f=o*r-l,w=s*h,u>=0)if(f>=-w)if(f<=w){const g=1/h;u*=g,f*=g,p=u*(u+o*f+2*r)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+r)),p=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+r)),p=-u*u+f*(f+2*l)+c;else f<=-w?(u=Math.max(0,-(-o*s+r)),f=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c):f<=w?(u=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(u=Math.max(0,-(o*s+r)),f=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+r)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),a&&a.copy(Zo).addScaledVector(xs,f),p}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);const i=Dn.dot(this.direction),a=Dn.dot(Dn)-i*i,s=e.radius*e.radius;if(a>s)return null;const o=Math.sqrt(s-a),r=i-o,l=i+o;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,s,o,r,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,a=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,a=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||s>a||((s>i||isNaN(i))&&(i=s),(o<a||isNaN(a))&&(a=o),u>=0?(r=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(r=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||r>a)||((r>i||i!==i)&&(i=r),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,i,a,s){Jo.subVectors(t,e),ys.subVectors(i,e),Qo.crossVectors(Jo,ys);let o=this.direction.dot(Qo),r;if(o>0){if(a)return null;r=1}else if(o<0)r=-1,o=-o;else return null;Jn.subVectors(this.origin,e);const l=r*this.direction.dot(ys.crossVectors(Jn,ys));if(l<0)return null;const c=r*this.direction.dot(Jo.cross(Jn));if(c<0||l+c>o)return null;const h=-r*Jn.dot(Qo);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,t,i,a,s,o,r,l,c,h,u,f,p,w,g,m){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,o,r,l,c,h,u,f,p,w,g,m)}set(e,t,i,a,s,o,r,l,c,h,u,f,p,w,g,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=a,d[1]=s,d[5]=o,d[9]=r,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=w,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/Hi.setFromMatrixColumn(e,0).length(),s=1/Hi.setFromMatrixColumn(e,1).length(),o=1/Hi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,s=e.z,o=Math.cos(i),r=Math.sin(i),l=Math.cos(a),c=Math.sin(a),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=o*h,p=o*u,w=r*h,g=r*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+w*c,t[5]=f-g*c,t[9]=-r*l,t[2]=g-f*c,t[6]=w+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,p=l*u,w=c*h,g=c*u;t[0]=f+g*r,t[4]=w*r-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-r,t[2]=p*r-w,t[6]=g+f*r,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,p=l*u,w=c*h,g=c*u;t[0]=f-g*r,t[4]=-o*u,t[8]=w+p*r,t[1]=p+w*r,t[5]=o*h,t[9]=g-f*r,t[2]=-o*c,t[6]=r,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,p=o*u,w=r*h,g=r*u;t[0]=l*h,t[4]=w*c-p,t[8]=f*c+g,t[1]=l*u,t[5]=g*c+f,t[9]=p*c-w,t[2]=-c,t[6]=r*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,w=r*l,g=r*c;t[0]=l*h,t[4]=g-f*u,t[8]=w*u+p,t[1]=u,t[5]=o*h,t[9]=-r*h,t[2]=-c*h,t[6]=p*u+w,t[10]=f-g*u}else if(e.order==="XZY"){const f=o*l,p=o*c,w=r*l,g=r*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+g,t[5]=o*h,t[9]=p*u-w,t[2]=w*u-p,t[6]=r*h,t[10]=g*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mm,e,gm)}lookAt(e,t,i){const a=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Qn.crossVectors(i,$t),Qn.lengthSq()===0&&(Math.abs(i.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Qn.crossVectors(i,$t)),Qn.normalize(),_s.crossVectors($t,Qn),a[0]=Qn.x,a[4]=_s.x,a[8]=$t.x,a[1]=Qn.y,a[5]=_s.y,a[9]=$t.y,a[2]=Qn.z,a[6]=_s.z,a[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,o=i[0],r=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],p=i[13],w=i[2],g=i[6],m=i[10],d=i[14],v=i[3],x=i[7],y=i[11],_=i[15],b=a[0],E=a[4],R=a[8],M=a[12],S=a[1],A=a[5],D=a[9],I=a[13],F=a[2],O=a[6],V=a[10],z=a[14],N=a[3],K=a[7],ne=a[11],le=a[15];return s[0]=o*b+r*S+l*F+c*N,s[4]=o*E+r*A+l*O+c*K,s[8]=o*R+r*D+l*V+c*ne,s[12]=o*M+r*I+l*z+c*le,s[1]=h*b+u*S+f*F+p*N,s[5]=h*E+u*A+f*O+p*K,s[9]=h*R+u*D+f*V+p*ne,s[13]=h*M+u*I+f*z+p*le,s[2]=w*b+g*S+m*F+d*N,s[6]=w*E+g*A+m*O+d*K,s[10]=w*R+g*D+m*V+d*ne,s[14]=w*M+g*I+m*z+d*le,s[3]=v*b+x*S+y*F+_*N,s[7]=v*E+x*A+y*O+_*K,s[11]=v*R+x*D+y*V+_*ne,s[15]=v*M+x*I+y*z+_*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],s=e[12],o=e[1],r=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],w=e[3],g=e[7],m=e[11],d=e[15];return w*(+s*l*u-a*c*u-s*r*f+i*c*f+a*r*p-i*l*p)+g*(+t*l*p-t*c*f+s*o*f-a*o*p+a*c*h-s*l*h)+m*(+t*c*u-t*r*p-s*o*u+i*o*p+s*r*h-i*c*h)+d*(-a*r*h-t*l*u+t*r*f+a*o*u-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],o=e[4],r=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],w=e[12],g=e[13],m=e[14],d=e[15],v=u*m*c-g*f*c+g*l*p-r*m*p-u*l*d+r*f*d,x=w*f*c-h*m*c-w*l*p+o*m*p+h*l*d-o*f*d,y=h*g*c-w*u*c+w*r*p-o*g*p-h*r*d+o*u*d,_=w*u*l-h*g*l-w*r*f+o*g*f+h*r*m-o*u*m,b=t*v+i*x+a*y+s*_;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=v*E,e[1]=(g*f*s-u*m*s-g*a*p+i*m*p+u*a*d-i*f*d)*E,e[2]=(r*m*s-g*l*s+g*a*c-i*m*c-r*a*d+i*l*d)*E,e[3]=(u*l*s-r*f*s-u*a*c+i*f*c+r*a*p-i*l*p)*E,e[4]=x*E,e[5]=(h*m*s-w*f*s+w*a*p-t*m*p-h*a*d+t*f*d)*E,e[6]=(w*l*s-o*m*s-w*a*c+t*m*c+o*a*d-t*l*d)*E,e[7]=(o*f*s-h*l*s+h*a*c-t*f*c-o*a*p+t*l*p)*E,e[8]=y*E,e[9]=(w*u*s-h*g*s-w*i*p+t*g*p+h*i*d-t*u*d)*E,e[10]=(o*g*s-w*r*s+w*i*c-t*g*c-o*i*d+t*r*d)*E,e[11]=(h*r*s-o*u*s-h*i*c+t*u*c+o*i*p-t*r*p)*E,e[12]=_*E,e[13]=(h*g*a-w*u*a+w*i*f-t*g*f-h*i*m+t*u*m)*E,e[14]=(w*r*a-o*g*a-w*i*l+t*g*l+o*i*m-t*r*m)*E,e[15]=(o*u*a-h*r*a+h*i*l-t*u*l-o*i*f+t*r*f)*E,this}scale(e){const t=this.elements,i=e.x,a=e.y,s=e.z;return t[0]*=i,t[4]*=a,t[8]*=s,t[1]*=i,t[5]*=a,t[9]*=s,t[2]*=i,t[6]*=a,t[10]*=s,t[3]*=i,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),s=1-i,o=e.x,r=e.y,l=e.z,c=s*o,h=s*r;return this.set(c*o+i,c*r-a*l,c*l+a*r,0,c*r+a*l,h*r+i,h*l-a*o,0,c*l-a*r,h*l+a*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,s,o){return this.set(1,i,s,0,e,1,o,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,s=t._x,o=t._y,r=t._z,l=t._w,c=s+s,h=o+o,u=r+r,f=s*c,p=s*h,w=s*u,g=o*h,m=o*u,d=r*u,v=l*c,x=l*h,y=l*u,_=i.x,b=i.y,E=i.z;return a[0]=(1-(g+d))*_,a[1]=(p+y)*_,a[2]=(w-x)*_,a[3]=0,a[4]=(p-y)*b,a[5]=(1-(f+d))*b,a[6]=(m+v)*b,a[7]=0,a[8]=(w+x)*E,a[9]=(m-v)*E,a[10]=(1-(f+g))*E,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let s=Hi.set(a[0],a[1],a[2]).length();const o=Hi.set(a[4],a[5],a[6]).length(),r=Hi.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],hn.copy(this);const c=1/s,h=1/o,u=1/r;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,t.setFromRotationMatrix(hn),i.x=s,i.y=o,i.z=r,this}makePerspective(e,t,i,a,s,o,r=Sn,l=!1){const c=this.elements,h=2*s/(t-e),u=2*s/(i-a),f=(t+e)/(t-e),p=(i+a)/(i-a);let w,g;if(l)w=s/(o-s),g=o*s/(o-s);else if(r===Sn)w=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(r===go)w=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=w,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,a,s,o,r=Sn,l=!1){const c=this.elements,h=2/(t-e),u=2/(i-a),f=-(t+e)/(t-e),p=-(i+a)/(i-a);let w,g;if(l)w=1/(o-s),g=o/(o-s);else if(r===Sn)w=-2/(o-s),g=-(o+s)/(o-s);else if(r===go)w=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=w,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Hi=new k,hn=new Ye,mm=new k(0,0,0),gm=new k(1,1,1),Qn=new k,_s=new k,$t=new k,Oc=new Ye,zc=new xn;class An{constructor(e=0,t=0,i=0,a=An.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,s=a[0],o=a[4],r=a[8],l=a[1],c=a[5],h=a[9],u=a[2],f=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin($e(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(r,p));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Oc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zc.setFromEuler(this),this.setFromQuaternion(zc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class Md{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vm=0;const Bc=new k,Gi=new xn,Pn=new Ye,bs=new k,Fa=new k,wm=new k,xm=new xn,Hc=new k(1,0,0),Gc=new k(0,1,0),Vc=new k(0,0,1),Wc={type:"added"},ym={type:"removed"},Vi={type:"childadded",child:null},er={type:"childremoved",child:null};class Jt extends Ma{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new k,t=new An,i=new xn,a=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ye},normalMatrix:{value:new He}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Md,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.premultiply(Gi),this}rotateX(e){return this.rotateOnAxis(Hc,e)}rotateY(e){return this.rotateOnAxis(Gc,e)}rotateZ(e){return this.rotateOnAxis(Vc,e)}translateOnAxis(e,t){return Bc.copy(e).applyQuaternion(this.quaternion),this.position.add(Bc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hc,e)}translateY(e){return this.translateOnAxis(Gc,e)}translateZ(e){return this.translateOnAxis(Vc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?bs.copy(e):bs.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Fa,bs,this.up):Pn.lookAt(bs,Fa,this.up),this.quaternion.setFromRotationMatrix(Pn),a&&(Pn.extractRotation(a.matrixWorld),Gi.setFromRotationMatrix(Pn),this.quaternion.premultiply(Gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wc),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ym),er.child=e,this.dispatchEvent(er),er.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wc),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,wm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,xm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(r=>({...r,boundingBox:r.boundingBox?r.boundingBox.toJSON():void 0,boundingSphere:r.boundingSphere?r.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(r=>({...r})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(s(e.materials,this.material[l]));a.material=r}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let r=0;r<this.children.length;r++)a.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];a.animations.push(s(e.animations,l))}}if(t){const r=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),w=o(e.nodes);r.length>0&&(i.geometries=r),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),w.length>0&&(i.nodes=w)}return i.object=a,i;function o(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Jt.DEFAULT_UP=new k(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new k,Ln=new k,tr=new k,In=new k,Wi=new k,Xi=new k,Xc=new k,nr=new k,ir=new k,ar=new k,sr=new rt,or=new rt,rr=new rt;class pn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),un.subVectors(e,t),a.cross(un);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,i,a,s){un.subVectors(a,t),Ln.subVectors(i,t),tr.subVectors(e,t);const o=un.dot(un),r=un.dot(Ln),l=un.dot(tr),c=Ln.dot(Ln),h=Ln.dot(tr),u=o*c-r*r;if(u===0)return s.set(0,0,0),null;const f=1/u,p=(c*l-r*h)*f,w=(o*h-r*l)*f;return s.set(1-p-w,w,p)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,i,a,s,o,r,l){return this.getBarycoord(e,t,i,a,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,In.x),l.addScaledVector(o,In.y),l.addScaledVector(r,In.z),l)}static getInterpolatedAttribute(e,t,i,a,s,o){return sr.setScalar(0),or.setScalar(0),rr.setScalar(0),sr.fromBufferAttribute(e,t),or.fromBufferAttribute(e,i),rr.fromBufferAttribute(e,a),o.setScalar(0),o.addScaledVector(sr,s.x),o.addScaledVector(or,s.y),o.addScaledVector(rr,s.z),o}static isFrontFacing(e,t,i,a){return un.subVectors(i,t),Ln.subVectors(e,t),un.cross(Ln).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),un.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,s){return pn.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,s=this.c;let o,r;Wi.subVectors(a,i),Xi.subVectors(s,i),nr.subVectors(e,i);const l=Wi.dot(nr),c=Xi.dot(nr);if(l<=0&&c<=0)return t.copy(i);ir.subVectors(e,a);const h=Wi.dot(ir),u=Xi.dot(ir);if(h>=0&&u<=h)return t.copy(a);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Wi,o);ar.subVectors(e,s);const p=Wi.dot(ar),w=Xi.dot(ar);if(w>=0&&p<=w)return t.copy(s);const g=p*c-l*w;if(g<=0&&c>=0&&w<=0)return r=c/(c-w),t.copy(i).addScaledVector(Xi,r);const m=h*w-p*u;if(m<=0&&u-h>=0&&p-w>=0)return Xc.subVectors(s,a),r=(u-h)/(u-h+(p-w)),t.copy(a).addScaledVector(Xc,r);const d=1/(m+g+f);return o=g*d,r=f*d,t.copy(i).addScaledVector(Wi,o).addScaledVector(Xi,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function lr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class me{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=Qe.workingColorSpace){if(e=lc(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=lr(o,s,e+1/3),this.g=lr(o,s,e),this.b=lr(o,s,e-1/3)}return Qe.colorSpaceToWorking(this,a),this}setStyle(e,t=on){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=a[1],r=a[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const i=Sd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return Qe.workingToColorSpace(Dt.copy(this),e),Math.round($e(Dt.r*255,0,255))*65536+Math.round($e(Dt.g*255,0,255))*256+Math.round($e(Dt.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Dt.copy(this),t);const i=Dt.r,a=Dt.g,s=Dt.b,o=Math.max(i,a,s),r=Math.min(i,a,s);let l,c;const h=(r+o)/2;if(r===o)l=0,c=0;else{const u=o-r;switch(c=h<=.5?u/(o+r):u/(2-o-r),o){case i:l=(a-s)/u+(a<s?6:0);break;case a:l=(s-i)/u+2;break;case s:l=(i-a)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=on){Qe.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,a=Dt.b;return e!==on?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(Ms);const i=$a(ei.h,Ms.h,t),a=$a(ei.s,Ms.s,t),s=$a(ei.l,Ms.l,t);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*a,this.g=s[1]*t+s[4]*i+s[7]*a,this.b=s[2]*t+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new me;me.NAMES=Sd;let _m=0;class Co extends Ma{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=Sa(),this.name="",this.type="Material",this.blending=Ai,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jr,this.blendDst=Qr,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(i.blending=this.blending),this.side!==En&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jr&&(i.blendSrc=this.blendSrc),this.blendDst!==Qr&&(i.blendDst=this.blendDst),this.blendEquation!==bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const o=[];for(const r in s){const l=s[r];delete l.metadata,o.push(l)}return o}if(t){const s=a(e.textures),o=a(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ns extends Co{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hn=bm();function bm(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),a=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,a[l]=24,a[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,a[l]=-c-1,a[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,a[l]=13,a[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,a[l]=24,a[l|256]=24):(i[l]=31744,i[l|256]=64512,a[l]=13,a[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),r=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(r[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:a,mantissaTable:s,exponentTable:o,offsetTable:r}}function Mm(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=$e(n,-65504,65504),Hn.floatView[0]=n;const e=Hn.uint32View[0],t=e>>23&511;return Hn.baseTable[t]+((e&8388607)>>Hn.shiftTable[t])}function Sm(n){const e=n>>10;return Hn.uint32View[0]=Hn.mantissaTable[Hn.offsetTable[e]+(n&1023)]+Hn.exponentTable[e],Hn.floatView[0]}class Ed{static toHalfFloat(e){return Mm(e)}static fromHalfFloat(e){return Sm(e)}}const yt=new k,Ss=new Ne;let Em=0;class dt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Em++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Pc,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ss.fromBufferAttribute(this,t),Ss.applyMatrix3(e),this.setXY(t,Ss.x,Ss.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ia(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ia(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ia(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ia(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ia(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),a=Nt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),a=Nt(a,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pc&&(e.usage=this.usage),e}}class Do extends dt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Po extends dt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Lt extends dt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Tm=0;const an=new Ye,cr=new Jt,$i=new k,qt=new Ii,ka=new Ii,St=new k;class At extends Ma{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=Sa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yd(e)?Po:Do)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return cr.lookAt(e),cr.updateMatrix(),this.applyMatrix4(cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,s=e.length;a<s;a++){const o=e[a];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Lt(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const s=e[a];t.setXYZ(a,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const s=t[i];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const r=t[s];ka.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(qt.min,ka.min),qt.expandByPoint(St),St.addVectors(qt.max,ka.max),qt.expandByPoint(St)):(qt.expandByPoint(ka.min),qt.expandByPoint(ka.max))}qt.getCenter(i);let a=0;for(let s=0,o=e.count;s<o;s++)St.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(St));if(t)for(let s=0,o=t.length;s<o;s++){const r=t[s],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)St.fromBufferAttribute(r,c),l&&($i.fromBufferAttribute(e,c),St.add($i)),a=Math.max(a,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),r=[],l=[];for(let R=0;R<i.count;R++)r[R]=new k,l[R]=new k;const c=new k,h=new k,u=new k,f=new Ne,p=new Ne,w=new Ne,g=new k,m=new k;function d(R,M,S){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,S),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,M),w.fromBufferAttribute(s,S),h.sub(c),u.sub(c),p.sub(f),w.sub(f);const A=1/(p.x*w.y-w.x*p.y);isFinite(A)&&(g.copy(h).multiplyScalar(w.y).addScaledVector(u,-p.y).multiplyScalar(A),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-w.x).multiplyScalar(A),r[R].add(g),r[M].add(g),r[S].add(g),l[R].add(m),l[M].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,M=v.length;R<M;++R){const S=v[R],A=S.start,D=S.count;for(let I=A,F=A+D;I<F;I+=3)d(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const x=new k,y=new k,_=new k,b=new k;function E(R){_.fromBufferAttribute(a,R),b.copy(_);const M=r[R];x.copy(M),x.sub(_.multiplyScalar(_.dot(M))).normalize(),y.crossVectors(b,M);const A=y.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,A)}for(let R=0,M=v.length;R<M;++R){const S=v[R],A=S.start,D=S.count;for(let I=A,F=A+D;I<F;I+=3)E(e.getX(I+0)),E(e.getX(I+1)),E(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const a=new k,s=new k,o=new k,r=new k,l=new k,c=new k,h=new k,u=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){const w=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);a.fromBufferAttribute(t,w),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(a,s),h.cross(u),r.fromBufferAttribute(i,w),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),r.add(h),l.add(h),c.add(h),i.setXYZ(w,r.x,r.y,r.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)a.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(a,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(r,l){const c=r.array,h=r.itemSize,u=r.normalized,f=new c.constructor(l.length*h);let p=0,w=0;for(let g=0,m=l.length;g<m;g++){r.isInterleavedBufferAttribute?p=l[g]*r.data.stride+r.offset:p=l[g]*h;for(let d=0;d<h;d++)f[w++]=c[p++]}return new dt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,i=this.index.array,a=this.attributes;for(const r in a){const l=a[r],c=e(l,i);t.setAttribute(r,c)}const s=this.morphAttributes;for(const r in s){const l=[],c=s[r];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=e(f,i);l.push(p)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,l=o.length;r<l;r++){const c=o[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(a[l]=h,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere=r.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const h=a[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $c=new Ye,fi=new pm,Es=new rn,qc=new k,Ts=new k,As=new k,Rs=new k,hr=new k,Cs=new k,Yc=new k,Ds=new k;class lt extends Jt{constructor(e=new At,t=new ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=a.length;s<o;s++){const r=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const r=this.morphTargetInfluences;if(s&&r){Cs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=r[l],u=s[l];h!==0&&(hr.fromBufferAttribute(u,e),o?Cs.addScaledVector(hr,h):Cs.addScaledVector(hr.sub(t),h))}t.add(Cs)}return t}raycast(e,t){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere),Es.applyMatrix4(s),fi.copy(e.ray).recast(e.near),!(Es.containsPoint(fi.origin)===!1&&(fi.intersectSphere(Es,qc)===null||fi.origin.distanceToSquared(qc)>(e.far-e.near)**2))&&($c.copy(s).invert(),fi.copy(e.ray).applyMatrix4($c),!(i.boundingBox!==null&&fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,i){let a;const s=this.geometry,o=this.material,r=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,p=s.drawRange;if(r!==null)if(Array.isArray(o))for(let w=0,g=f.length;w<g;w++){const m=f[w],d=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(r.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,_=x;y<_;y+=3){const b=r.getX(y),E=r.getX(y+1),R=r.getX(y+2);a=Ps(this,d,e,i,c,h,u,b,E,R),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const w=Math.max(0,p.start),g=Math.min(r.count,p.start+p.count);for(let m=w,d=g;m<d;m+=3){const v=r.getX(m),x=r.getX(m+1),y=r.getX(m+2);a=Ps(this,o,e,i,c,h,u,v,x,y),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(o))for(let w=0,g=f.length;w<g;w++){const m=f[w],d=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,_=x;y<_;y+=3){const b=y,E=y+1,R=y+2;a=Ps(this,d,e,i,c,h,u,b,E,R),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const w=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=w,d=g;m<d;m+=3){const v=m,x=m+1,y=m+2;a=Ps(this,o,e,i,c,h,u,v,x,y),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function Am(n,e,t,i,a,s,o,r){let l;if(e.side===Vt?l=i.intersectTriangle(o,s,a,!0,r):l=i.intersectTriangle(a,s,o,e.side===En,r),l===null)return null;Ds.copy(r),Ds.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ds);return c<t.near||c>t.far?null:{distance:c,point:Ds.clone(),object:n}}function Ps(n,e,t,i,a,s,o,r,l,c){n.getVertexPosition(r,Ts),n.getVertexPosition(l,As),n.getVertexPosition(c,Rs);const h=Am(n,e,t,i,Ts,As,Rs,Yc);if(h){const u=new k;pn.getBarycoord(Yc,Ts,As,Rs,u),a&&(h.uv=pn.getInterpolatedAttribute(a,r,l,c,u,new Ne)),s&&(h.uv1=pn.getInterpolatedAttribute(s,r,l,c,u,new Ne)),o&&(h.normal=pn.getInterpolatedAttribute(o,r,l,c,u,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:r,b:l,c,normal:new k,materialIndex:0};pn.getNormal(Ts,As,Rs,f.normal),h.face=f,h.barycoord=u}return h}class oi extends At{constructor(e=1,t=1,i=1,a=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:s,depthSegments:o};const r=this;a=Math.floor(a),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,p=0;w("z","y","x",-1,-1,i,t,e,o,s,0),w("z","y","x",1,-1,i,t,-e,o,s,1),w("x","z","y",1,1,e,i,t,a,o,2),w("x","z","y",1,-1,e,i,-t,a,o,3),w("x","y","z",1,-1,e,t,i,a,s,4),w("x","y","z",-1,-1,e,t,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(u,2));function w(g,m,d,v,x,y,_,b,E,R,M){const S=y/E,A=_/R,D=y/2,I=_/2,F=b/2,O=E+1,V=R+1;let z=0,N=0;const K=new k;for(let ne=0;ne<V;ne++){const le=ne*A-I;for(let Te=0;Te<O;Te++){const oe=Te*S-D;K[g]=oe*v,K[m]=le*x,K[d]=F,c.push(K.x,K.y,K.z),K[g]=0,K[m]=0,K[d]=b>0?1:-1,h.push(K.x,K.y,K.z),u.push(Te/E),u.push(1-ne/R),z+=1}}for(let ne=0;ne<R;ne++)for(let le=0;le<E;le++){const Te=f+le+O*ne,oe=f+le+O*(ne+1),Ue=f+(le+1)+O*(ne+1),Ie=f+(le+1)+O*ne;l.push(Te,oe,Ie),l.push(oe,Ue,Ie),N+=6}r.addGroup(p,N,M),p+=N,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function va(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function Ut(n){const e={};for(let t=0;t<n.length;t++){const i=va(n[t]);for(const a in i)e[a]=i[a]}return e}function Rm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Td(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Cm={clone:va,merge:Ut};var Dm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends Co{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dm,this.fragmentShader=Pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=va(e.uniforms),this.uniformsGroups=Rm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const o=this.uniforms[a].value;o&&o.isTexture?t.uniforms[a]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[a]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[a]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[a]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[a]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[a]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[a]={type:"m4",value:o.toArray()}:t.uniforms[a]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class hc extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new k,jc=new Ne,Kc=new Ne;class Zt extends hc{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,jc,Kc),t.subVectors(Kc,jc)}setViewOffset(e,t,i,a,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xa*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,s=-.5*a;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*a/l,t-=o.offsetY*i/c,a*=o.width/l,i*=o.height/c}const r=this.filmOffset;r!==0&&(s+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qi=-90,Yi=1;class Lm extends Jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Zt(qi,Yi,e,t);a.layers=this.layers,this.add(a);const s=new Zt(qi,Yi,e,t);s.layers=this.layers,this.add(s);const o=new Zt(qi,Yi,e,t);o.layers=this.layers,this.add(o);const r=new Zt(qi,Yi,e,t);r.layers=this.layers,this.add(r);const l=new Zt(qi,Yi,e,t);l.layers=this.layers,this.add(l);const c=new Zt(qi,Yi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,s,o,r,l]=t;for(const c of t)this.remove(c);if(e===Sn)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===go)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,r,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,s),e.setRenderTarget(i,1,a),e.render(t,o),e.setRenderTarget(i,2,a),e.render(t,r),e.setRenderTarget(i,3,a),e.render(t,l),e.setRenderTarget(i,4,a),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,a),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=w,i.texture.needsPMREMUpdate=!0}}class Ad extends Ft{constructor(e=[],t=ma,i,a,s,o,r,l,c,h){super(e,t,i,a,s,o,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rd extends Rt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Ad(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new oi(5,5,5),s=new qn({name:"CubemapFromEquirect",uniforms:va(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:si});s.uniforms.tEquirect.value=t;const o=new lt(a,s),r=t.minFilter;return t.minFilter===Gn&&(t.minFilter=Ze),new Lm(1,10,this).update(e,o),t.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,a);e.setRenderTarget(s)}}class vn extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Im={type:"move"};class ur{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,s=null,o=null;const r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),d=this._getHandJoint(c,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,w=.005;c.inputState.pinching&&f>p+w?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-w&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(r.matrix.fromArray(a.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,a.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(a.linearVelocity)):r.hasLinearVelocity=!1,a.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(a.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Im)))}return r!==null&&(r.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new vn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class mn extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Rn extends Ft{constructor(e=null,t=1,i=1,a,s,o,r,l,c=vt,h=vt,u,f){super(null,o,r,l,c,h,a,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wa extends dt{constructor(e,t,i,a=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ji=new Ye,Zc=new Ye,Ls=[],Jc=new Ii,Fm=new Ye,Na=new lt,Ua=new rn;class dr extends lt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<i;a++)this.setMatrixAt(a,Fm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ji),Jc.copy(e.boundingBox).applyMatrix4(ji),this.boundingBox.union(Jc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ji),Ua.copy(e.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(Ua)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,a=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let r=0;r<i.length;r++)i[r]=a[o+r]}raycast(e,t){const i=this.matrixWorld,a=this.count;if(Na.geometry=this.geometry,Na.material=this.material,Na.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ua.copy(this.boundingSphere),Ua.applyMatrix4(i),e.ray.intersectsSphere(Ua)!==!1))for(let s=0;s<a;s++){this.getMatrixAt(s,ji),Zc.multiplyMatrices(i,ji),Na.matrixWorld=Zc,Na.raycast(e,Ls);for(let o=0,r=Ls.length;o<r;o++){const l=Ls[o];l.instanceId=s,l.object=this,t.push(l)}Ls.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,a=i.length+1;this.morphTexture===null&&(this.morphTexture=new Rn(new Float32Array(a*this.count),a,this.count,Yn,gn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const r=this.geometry.morphTargetsRelative?1:1-o,l=a*e;s[l]=r,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const fr=new k,km=new k,Nm=new He;class yi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=fr.subVectors(i,t).cross(km.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(fr),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Nm.getNormalMatrix(e),a=this.coplanarPoint(fr).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new rn,Um=new Ne(.5,.5),Is=new k;class Cd{constructor(e=new yi,t=new yi,i=new yi,a=new yi,s=new yi,o=new yi){this.planes=[e,t,i,a,s,o]}set(e,t,i,a,s,o){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(i),r[3].copy(a),r[4].copy(s),r[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Sn,i=!1){const a=this.planes,s=e.elements,o=s[0],r=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],p=s[7],w=s[8],g=s[9],m=s[10],d=s[11],v=s[12],x=s[13],y=s[14],_=s[15];if(a[0].setComponents(c-o,p-h,d-w,_-v).normalize(),a[1].setComponents(c+o,p+h,d+w,_+v).normalize(),a[2].setComponents(c+r,p+u,d+g,_+x).normalize(),a[3].setComponents(c-r,p-u,d-g,_-x).normalize(),i)a[4].setComponents(l,f,m,y).normalize(),a[5].setComponents(c-l,p-f,d-m,_-y).normalize();else if(a[4].setComponents(c-l,p-f,d-m,_-y).normalize(),t===Sn)a[5].setComponents(c+l,p+f,d+m,_+y).normalize();else if(t===go)a[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){pi.center.set(0,0,0);const t=Um.distanceTo(e.center);return pi.radius=.7071067811865476+t,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Is.x=a.normal.x>0?e.max.x:e.min.x,Is.y=a.normal.y>0?e.max.y:e.min.y,Is.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Om extends Ft{constructor(e,t,i,a,s,o,r,l,c){super(e,t,i,a,s,o,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cs extends Ft{constructor(e,t,i=Tn,a,s,o,r=vt,l=vt,c,h=li,u=1){if(h!==li&&h!==Qa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,a,s,o,r,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Dd extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Lo extends At{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const s=e/2,o=t/2,r=Math.floor(i),l=Math.floor(a),c=r+1,h=l+1,u=e/r,f=t/l,p=[],w=[],g=[],m=[];for(let d=0;d<h;d++){const v=d*f-o;for(let x=0;x<c;x++){const y=x*u-s;w.push(y,-v,0),g.push(0,0,1),m.push(x/r),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<r;v++){const x=v+c*d,y=v+c*(d+1),_=v+1+c*(d+1),b=v+1+c*d;p.push(x,y,b),p.push(y,_,b)}this.setIndex(p),this.setAttribute("position",new Lt(w,3)),this.setAttribute("normal",new Lt(g,3)),this.setAttribute("uv",new Lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bt extends qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zm extends Co{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bm extends Co{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Io extends hc{constructor(e=-1,t=1,i=1,a=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,o=i+e,r=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,r,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wo extends At{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Hm extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Gm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Qc(n,e,t,i){const a=Vm(i);switch(t){case gd:return n*e;case Yn:return n*e/a.components*a.byteLength;case sc:return n*e/a.components*a.byteLength;case wd:return n*e*2/a.components*a.byteLength;case oc:return n*e*2/a.components*a.byteLength;case vd:return n*e*3/a.components*a.byteLength;case gt:return n*e*4/a.components*a.byteLength;case rc:return n*e*4/a.components*a.byteLength;case eo:case to:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case no:case io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ul:case fl:return Math.max(n,16)*Math.max(e,8)/4;case hl:case dl:return Math.max(n,8)*Math.max(e,8)/2;case pl:case ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case xl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case yl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case _l:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case bl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case El:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Al:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Cl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Dl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Pl:case Ll:case Il:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Fl:case kl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Nl:case Ul:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vm(n){switch(n){case _t:case dd:return{byteLength:1,components:1};case Za:case fd:case wn:return{byteLength:2,components:1};case ic:case ac:return{byteLength:2,components:4};case Tn:case nc:case gn:return{byteLength:4,components:1};case pd:case md:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Pd(){let n=null,e=!1,t=null,i=null;function a(s,o){t(s,o),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Wm(n){const e=new WeakMap;function t(r,l){const c=r.array,h=r.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),r.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:u}}function i(r,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,r),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,w)=>p.start-w.start);let f=0;for(let p=1;p<u.length;p++){const w=u[f],g=u[p];g.start<=w.start+w.count+1?w.count=Math.max(w.count,g.start+g.count-w.start):(++f,u[f]=g)}u.length=f+1;for(let p=0,w=u.length;p<w;p++){const g=u[p];n.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(r){return r.isInterleavedBufferAttribute&&(r=r.data),e.get(r)}function s(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=e.get(r);l&&(n.deleteBuffer(l.buffer),e.delete(r))}function o(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const h=e.get(r);(!h||h.version<r.version)&&e.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=e.get(r);if(c===void 0)e.set(r,t(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,r,l),c.version=r.version}}return{get:a,remove:s,update:o}}var Xm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$m=`#ifdef USE_ALPHAHASH
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
#endif`,qm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ym=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Km=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zm=`#ifdef USE_AOMAP
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
#endif`,Jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qm=`#ifdef USE_BATCHING
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
#endif`,e0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,t0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,n0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,i0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a0=`#ifdef USE_IRIDESCENCE
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
#endif`,s0=`#ifdef USE_BUMPMAP
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
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,u0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,p0=`#define PI 3.141592653589793
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
} // validated`,m0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,g0=`vec3 transformedNormal = objectNormal;
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
#endif`,v0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,x0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_0="gl_FragColor = linearToOutputTexel( gl_FragColor );",b0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M0=`#ifdef USE_ENVMAP
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
#endif`,S0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,E0=`#ifdef USE_ENVMAP
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
#endif`,T0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,A0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,C0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L0=`#ifdef USE_GRADIENTMAP
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
}`,I0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N0=`uniform bool receiveShadow;
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
#endif`,U0=`#ifdef USE_ENVMAP
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
#endif`,O0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G0=`PhysicalMaterial material;
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
#endif`,V0=`struct PhysicalMaterial {
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
}`,W0=`
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
#endif`,X0=`#if defined( RE_IndirectDiffuse )
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
#endif`,$0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eg=`#if defined( USE_POINTS_UV )
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
#endif`,tg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ng=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ig=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ag=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,og=`#ifdef USE_MORPHTARGETS
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
#endif`,rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fg=`#ifdef USE_NORMALMAP
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
#endif`,pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_g=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cg=`float getShadowMask() {
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
}`,Dg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pg=`#ifdef USE_SKINNING
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
#endif`,Lg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ig=`#ifdef USE_SKINNING
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
#endif`,Fg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ug=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Og=`#ifdef USE_TRANSMISSION
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
#endif`,zg=`#ifdef USE_TRANSMISSION
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
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xg=`uniform sampler2D t2D;
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`#include <common>
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
}`,Zg=`#if DEPTH_PACKING == 3200
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
}`,Jg=`#define DISTANCE
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
}`,Qg=`#define DISTANCE
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
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nv=`uniform float scale;
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
}`,iv=`uniform vec3 diffuse;
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
}`,av=`#include <common>
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
}`,sv=`uniform vec3 diffuse;
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
}`,ov=`#define LAMBERT
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
}`,rv=`#define LAMBERT
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
}`,lv=`#define MATCAP
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
}`,cv=`#define MATCAP
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
}`,hv=`#define NORMAL
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
}`,uv=`#define NORMAL
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
}`,dv=`#define PHONG
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
}`,fv=`#define PHONG
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
}`,pv=`#define STANDARD
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
}`,mv=`#define STANDARD
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
}`,gv=`#define TOON
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
}`,vv=`#define TOON
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
}`,wv=`uniform float size;
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
}`,xv=`uniform vec3 diffuse;
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
}`,yv=`#include <common>
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
}`,_v=`uniform vec3 color;
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
}`,bv=`uniform float rotation;
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
}`,Mv=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:Xm,alphahash_pars_fragment:$m,alphamap_fragment:qm,alphamap_pars_fragment:Ym,alphatest_fragment:jm,alphatest_pars_fragment:Km,aomap_fragment:Zm,aomap_pars_fragment:Jm,batching_pars_vertex:Qm,batching_vertex:e0,begin_vertex:t0,beginnormal_vertex:n0,bsdfs:i0,iridescence_fragment:a0,bumpmap_pars_fragment:s0,clipping_planes_fragment:o0,clipping_planes_pars_fragment:r0,clipping_planes_pars_vertex:l0,clipping_planes_vertex:c0,color_fragment:h0,color_pars_fragment:u0,color_pars_vertex:d0,color_vertex:f0,common:p0,cube_uv_reflection_fragment:m0,defaultnormal_vertex:g0,displacementmap_pars_vertex:v0,displacementmap_vertex:w0,emissivemap_fragment:x0,emissivemap_pars_fragment:y0,colorspace_fragment:_0,colorspace_pars_fragment:b0,envmap_fragment:M0,envmap_common_pars_fragment:S0,envmap_pars_fragment:E0,envmap_pars_vertex:T0,envmap_physical_pars_fragment:U0,envmap_vertex:A0,fog_vertex:R0,fog_pars_vertex:C0,fog_fragment:D0,fog_pars_fragment:P0,gradientmap_pars_fragment:L0,lightmap_pars_fragment:I0,lights_lambert_fragment:F0,lights_lambert_pars_fragment:k0,lights_pars_begin:N0,lights_toon_fragment:O0,lights_toon_pars_fragment:z0,lights_phong_fragment:B0,lights_phong_pars_fragment:H0,lights_physical_fragment:G0,lights_physical_pars_fragment:V0,lights_fragment_begin:W0,lights_fragment_maps:X0,lights_fragment_end:$0,logdepthbuf_fragment:q0,logdepthbuf_pars_fragment:Y0,logdepthbuf_pars_vertex:j0,logdepthbuf_vertex:K0,map_fragment:Z0,map_pars_fragment:J0,map_particle_fragment:Q0,map_particle_pars_fragment:eg,metalnessmap_fragment:tg,metalnessmap_pars_fragment:ng,morphinstance_vertex:ig,morphcolor_vertex:ag,morphnormal_vertex:sg,morphtarget_pars_vertex:og,morphtarget_vertex:rg,normal_fragment_begin:lg,normal_fragment_maps:cg,normal_pars_fragment:hg,normal_pars_vertex:ug,normal_vertex:dg,normalmap_pars_fragment:fg,clearcoat_normal_fragment_begin:pg,clearcoat_normal_fragment_maps:mg,clearcoat_pars_fragment:gg,iridescence_pars_fragment:vg,opaque_fragment:wg,packing:xg,premultiplied_alpha_fragment:yg,project_vertex:_g,dithering_fragment:bg,dithering_pars_fragment:Mg,roughnessmap_fragment:Sg,roughnessmap_pars_fragment:Eg,shadowmap_pars_fragment:Tg,shadowmap_pars_vertex:Ag,shadowmap_vertex:Rg,shadowmask_pars_fragment:Cg,skinbase_vertex:Dg,skinning_pars_vertex:Pg,skinning_vertex:Lg,skinnormal_vertex:Ig,specularmap_fragment:Fg,specularmap_pars_fragment:kg,tonemapping_fragment:Ng,tonemapping_pars_fragment:Ug,transmission_fragment:Og,transmission_pars_fragment:zg,uv_pars_fragment:Bg,uv_pars_vertex:Hg,uv_vertex:Gg,worldpos_vertex:Vg,background_vert:Wg,background_frag:Xg,backgroundCube_vert:$g,backgroundCube_frag:qg,cube_vert:Yg,cube_frag:jg,depth_vert:Kg,depth_frag:Zg,distanceRGBA_vert:Jg,distanceRGBA_frag:Qg,equirect_vert:ev,equirect_frag:tv,linedashed_vert:nv,linedashed_frag:iv,meshbasic_vert:av,meshbasic_frag:sv,meshlambert_vert:ov,meshlambert_frag:rv,meshmatcap_vert:lv,meshmatcap_frag:cv,meshnormal_vert:hv,meshnormal_frag:uv,meshphong_vert:dv,meshphong_frag:fv,meshphysical_vert:pv,meshphysical_frag:mv,meshtoon_vert:gv,meshtoon_frag:vv,points_vert:wv,points_frag:xv,shadow_vert:yv,shadow_frag:_v,sprite_vert:bv,sprite_frag:Mv},de={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Mn={basic:{uniforms:Ut([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Ut([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new me(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Ut([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Ut([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Ut([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new me(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Ut([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Ut([de.points,de.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Ut([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Ut([de.common,de.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Ut([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Ut([de.sprite,de.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Ut([de.common,de.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Ut([de.lights,de.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Mn.physical={uniforms:Ut([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Fs={r:0,b:0,g:0},mi=new An,Sv=new Ye;function Ev(n,e,t,i,a,s,o){const r=new me(0);let l=s===!0?0:1,c,h,u=null,f=0,p=null;function w(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function g(x){let y=!1;const _=w(x);_===null?d(r,l):_&&_.isColor&&(d(_,1),y=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,y){const _=w(y);_&&(_.isCubeTexture||_.mapping===Ro)?(h===void 0&&(h=new lt(new oi(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:va(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),mi.copy(y.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Sv.makeRotationFromEuler(mi)),h.material.toneMapped=Qe.getTransfer(_.colorSpace)!==at,(u!==_||f!==_.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,p=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new lt(new Lo(2,2),new qn({name:"BackgroundMaterial",uniforms:va(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(_.colorSpace)!==at,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,p=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function d(x,y){x.getRGB(Fs,Td(n)),i.buffers.color.setClear(Fs.r,Fs.g,Fs.b,y,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(x,y=1){r.set(x),l=y,d(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,d(r,l)},render:g,addToRenderList:m,dispose:v}}function Tv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=f(null);let s=a,o=!1;function r(S,A,D,I,F){let O=!1;const V=u(I,D,A);s!==V&&(s=V,c(s.object)),O=p(S,I,D,F),O&&w(S,I,D,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,y(S,A,D,I),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function u(S,A,D){const I=D.wireframe===!0;let F=i[S.id];F===void 0&&(F={},i[S.id]=F);let O=F[A.id];O===void 0&&(O={},F[A.id]=O);let V=O[I];return V===void 0&&(V=f(l()),O[I]=V),V}function f(S){const A=[],D=[],I=[];for(let F=0;F<t;F++)A[F]=0,D[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:D,attributeDivisors:I,object:S,attributes:{},index:null}}function p(S,A,D,I){const F=s.attributes,O=A.attributes;let V=0;const z=D.getAttributes();for(const N in z)if(z[N].location>=0){const ne=F[N];let le=O[N];if(le===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(le=S.instanceColor)),ne===void 0||ne.attribute!==le||le&&ne.data!==le.data)return!0;V++}return s.attributesNum!==V||s.index!==I}function w(S,A,D,I){const F={},O=A.attributes;let V=0;const z=D.getAttributes();for(const N in z)if(z[N].location>=0){let ne=O[N];ne===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor));const le={};le.attribute=ne,ne&&ne.data&&(le.data=ne.data),F[N]=le,V++}s.attributes=F,s.attributesNum=V,s.index=I}function g(){const S=s.newAttributes;for(let A=0,D=S.length;A<D;A++)S[A]=0}function m(S){d(S,0)}function d(S,A){const D=s.newAttributes,I=s.enabledAttributes,F=s.attributeDivisors;D[S]=1,I[S]===0&&(n.enableVertexAttribArray(S),I[S]=1),F[S]!==A&&(n.vertexAttribDivisor(S,A),F[S]=A)}function v(){const S=s.newAttributes,A=s.enabledAttributes;for(let D=0,I=A.length;D<I;D++)A[D]!==S[D]&&(n.disableVertexAttribArray(D),A[D]=0)}function x(S,A,D,I,F,O,V){V===!0?n.vertexAttribIPointer(S,A,D,F,O):n.vertexAttribPointer(S,A,D,I,F,O)}function y(S,A,D,I){g();const F=I.attributes,O=D.getAttributes(),V=A.defaultAttributeValues;for(const z in O){const N=O[z];if(N.location>=0){let K=F[z];if(K===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){const ne=K.normalized,le=K.itemSize,Te=e.get(K);if(Te===void 0)continue;const oe=Te.buffer,Ue=Te.type,Ie=Te.bytesPerElement,q=Ue===n.INT||Ue===n.UNSIGNED_INT||K.gpuType===nc;if(K.isInterleavedBufferAttribute){const Q=K.data,ve=Q.stride,Fe=K.offset;if(Q.isInstancedInterleavedBuffer){for(let Ee=0;Ee<N.locationSize;Ee++)d(N.location+Ee,Q.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ee=0;Ee<N.locationSize;Ee++)m(N.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let Ee=0;Ee<N.locationSize;Ee++)x(N.location+Ee,le/N.locationSize,Ue,ne,ve*Ie,(Fe+le/N.locationSize*Ee)*Ie,q)}else{if(K.isInstancedBufferAttribute){for(let Q=0;Q<N.locationSize;Q++)d(N.location+Q,K.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Q=0;Q<N.locationSize;Q++)m(N.location+Q);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let Q=0;Q<N.locationSize;Q++)x(N.location+Q,le/N.locationSize,Ue,ne,le*Ie,le/N.locationSize*Q*Ie,q)}}else if(V!==void 0){const ne=V[z];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(N.location,ne);break;case 3:n.vertexAttrib3fv(N.location,ne);break;case 4:n.vertexAttrib4fv(N.location,ne);break;default:n.vertexAttrib1fv(N.location,ne)}}}}v()}function _(){R();for(const S in i){const A=i[S];for(const D in A){const I=A[D];for(const F in I)h(I[F].object),delete I[F];delete A[D]}delete i[S]}}function b(S){if(i[S.id]===void 0)return;const A=i[S.id];for(const D in A){const I=A[D];for(const F in I)h(I[F].object),delete I[F];delete A[D]}delete i[S.id]}function E(S){for(const A in i){const D=i[A];if(D[S.id]===void 0)continue;const I=D[S.id];for(const F in I)h(I[F].object),delete I[F];delete D[S.id]}}function R(){M(),o=!0,s!==a&&(s=a,c(s.object))}function M(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:r,reset:R,resetDefaultState:M,dispose:_,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function Av(n,e,t){let i;function a(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function r(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let w=0;w<u;w++)p+=h[w];t.update(p,i,1)}function l(c,h,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let w=0;w<c.length;w++)o(c[w],h[w],f[w]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let w=0;for(let g=0;g<u;g++)w+=h[g]*f[g];t.update(w,i,1)}}this.setMode=a,this.render=s,this.renderInstances=o,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function Rv(n,e,t,i){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function o(E){return!(E!==gt&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(E){const R=E===wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==_t&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==gn&&!R)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=w>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:w,maxTextureSize:g,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:_,maxSamples:b}}function Cv(n){const e=this;let t=null,i=0,a=!1,s=!1;const o=new yi,r=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||i!==0||a;return a=f,i=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){const w=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,d=n.get(u);if(!a||w===null||w.length===0||s&&!m)s?h(null):c();else{const v=s?0:i,x=v*4;let y=d.clippingState||null;l.value=y,y=h(w,f,x,p);for(let _=0;_!==x;++_)y[_]=t[_];d.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,p,w){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,w!==!0||m===null){const d=p+g*4,v=f.matrixWorldInverse;r.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,y=p;x!==g;++x,y+=4)o.copy(u[x]).applyMatrix4(v,r),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Dv(n){let e=new WeakMap;function t(o,r){return r===rl?o.mapping=ma:r===ll&&(o.mapping=ga),o}function i(o){if(o&&o.isTexture){const r=o.mapping;if(r===rl||r===ll)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Rd(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",a),t(c.texture,o.mapping)}else return null}}return o}function a(o){const r=o.target;r.removeEventListener("dispose",a);const l=e.get(r);l!==void 0&&(e.delete(r),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ra=4,eh=[.125,.215,.35,.446,.526,.582],Mi=20,pr=new Io,th=new me;let mr=null,gr=0,vr=0,wr=!1;const _i=(1+Math.sqrt(5))/2,Ki=1/_i,nh=[new k(-_i,Ki,0),new k(_i,Ki,0),new k(-Ki,0,_i),new k(Ki,0,_i),new k(0,_i,-Ki),new k(0,_i,Ki),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],Pv=new k;class ih{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100,s={}){const{size:o=256,position:r=Pv}=s;mr=this._renderer.getRenderTarget(),gr=this._renderer.getActiveCubeFace(),vr=this._renderer.getActiveMipmapLevel(),wr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,r),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mr,gr,vr),this._renderer.xr.enabled=wr,e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ma||e.mapping===ga?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mr=this._renderer.getRenderTarget(),gr=this._renderer.getActiveCubeFace(),vr=this._renderer.getActiveMipmapLevel(),wr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:wn,format:gt,colorSpace:Ci,depthBuffer:!1},a=ah(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ah(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lv(s)),this._blurMaterial=Iv(s,e,t)}return a}_compileMaterial(e){const t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,pr)}_sceneToCubeUV(e,t,i,a,s){const l=new Zt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(th),u.toneMapping=Wn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(a),u.clearDepth(),u.setRenderTarget(null));const g=new ns({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),m=new lt(new oi,g);let d=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,d=!0):(g.color.copy(th),d=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[x],s.y,s.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[x]));const _=this._cubeSize;ks(a,y*_,x>2?_:0,_,_),u.setRenderTarget(a),d&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===ma||e.mapping===ga;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sh());const s=a?this._cubemapMaterial:this._equirectMaterial,o=new lt(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=e;const l=this._cubeSize;ks(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,pr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let s=1;s<a;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),r=nh[(a-s-1)%nh.length];this._blur(e,s-1,s,o,r)}t.autoClear=i}_blur(e,t,i,a,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,a,"latitudinal",s),this._halfBlur(o,e,i,i,a,"longitudinal",s)}_halfBlur(e,t,i,a,s,o,r){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new lt(this._lodPlanes[a],c),f=c.uniforms,p=this._sizeLods[i]-1,w=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Mi-1),g=s/w,m=isFinite(s)?1+Math.floor(h*g):Mi;m>Mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);const d=[];let v=0;for(let E=0;E<Mi;++E){const R=E/g,M=Math.exp(-R*R/2);d.push(M),E===0?v+=M:E<m&&(v+=2*M)}for(let E=0;E<d.length;E++)d[E]=d[E]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",r&&(f.poleAxis.value=r);const{_lodMax:x}=this;f.dTheta.value=w,f.mipInt.value=x-i;const y=this._sizeLods[a],_=3*y*(a>x-ra?a-x+ra:0),b=4*(this._cubeSize-y);ks(t,_,b,3*y,2*y),l.setRenderTarget(t),l.render(u,pr)}}function Lv(n){const e=[],t=[],i=[];let a=n;const s=n-ra+1+eh.length;for(let o=0;o<s;o++){const r=Math.pow(2,a);t.push(r);let l=1/r;o>n-ra?l=eh[o-n+ra-1]:o===0&&(l=0),i.push(l);const c=1/(r-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,w=6,g=3,m=2,d=1,v=new Float32Array(g*w*p),x=new Float32Array(m*w*p),y=new Float32Array(d*w*p);for(let b=0;b<p;b++){const E=b%3*2/3-1,R=b>2?0:-1,M=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];v.set(M,g*w*b),x.set(f,m*w*b);const S=[b,b,b,b,b,b];y.set(S,d*w*b)}const _=new At;_.setAttribute("position",new dt(v,g)),_.setAttribute("uv",new dt(x,m)),_.setAttribute("faceIndex",new dt(y,d)),e.push(_),a>ra&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ah(n,e,t){const i=new Rt(n,e,t);return i.texture.mapping=Ro,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ks(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function Iv(n,e,t){const i=new Float32Array(Mi),a=new k(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:uc(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function sh(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function oh(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function uc(){return`

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
	`}function Fv(n){let e=new WeakMap,t=null;function i(r){if(r&&r.isTexture){const l=r.mapping,c=l===rl||l===ll,h=l===ma||l===ga;if(c||h){let u=e.get(r);const f=u!==void 0?u.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==f)return t===null&&(t=new ih(n)),u=c?t.fromEquirectangular(r,u):t.fromCubemap(r,u),u.texture.pmremVersion=r.pmremVersion,e.set(r,u),u.texture;if(u!==void 0)return u.texture;{const p=r.image;return c&&p&&p.height>0||h&&p&&a(p)?(t===null&&(t=new ih(n)),u=c?t.fromEquirectangular(r):t.fromCubemap(r),u.texture.pmremVersion=r.pmremVersion,e.set(r,u),r.addEventListener("dispose",s),u.texture):null}}}return r}function a(r){let l=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function s(r){const l=r.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function kv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&ts("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function Nv(n,e,t,i){const a={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const w in f.attributes)e.remove(f.attributes[w]);f.removeEventListener("dispose",o),delete a[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function r(u,f){return a[f.id]===!0||(f.addEventListener("dispose",o),a[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,w=u.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let x=0,y=v.length;x<y;x+=3){const _=v[x+0],b=v[x+1],E=v[x+2];f.push(_,b,b,E,E,_)}}else if(w!==void 0){const v=w.array;g=w.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const _=x+0,b=x+1,E=x+2;f.push(_,b,b,E,E,_)}}else return;const m=new(yd(f)?Po:Do)(f,1);m.version=g;const d=s.get(u);d&&e.remove(d),s.set(u,m)}function h(u){const f=s.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:r,update:l,getWireframeAttribute:h}}function Uv(n,e,t){let i;function a(f){i=f}let s,o;function r(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function c(f,p,w){w!==0&&(n.drawElementsInstanced(i,p,s,f*o,w),t.update(p,i,w))}function h(f,p,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,w);let m=0;for(let d=0;d<w;d++)m+=p[d];t.update(m,i,1)}function u(f,p,w,g){if(w===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],g[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,g,0,w);let d=0;for(let v=0;v<w;v++)d+=p[v]*g[v];t.update(d,i,1)}}this.setMode=a,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ov(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,r){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=r*(s/3);break;case n.LINES:t.lines+=r*(s/2);break;case n.LINE_STRIP:t.lines+=r*(s-1);break;case n.LINE_LOOP:t.lines+=r*s;break;case n.POINTS:t.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function zv(n,e,t){const i=new WeakMap,a=new rt;function s(o,r,l){const c=o.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(r);if(f===void 0||f.count!==u){let S=function(){R.dispose(),i.delete(r),r.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const w=r.morphAttributes.position!==void 0,g=r.morphAttributes.normal!==void 0,m=r.morphAttributes.color!==void 0,d=r.morphAttributes.position||[],v=r.morphAttributes.normal||[],x=r.morphAttributes.color||[];let y=0;w===!0&&(y=1),g===!0&&(y=2),m===!0&&(y=3);let _=r.attributes.position.count*y,b=1;_>e.maxTextureSize&&(b=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const E=new Float32Array(_*b*4*u),R=new _d(E,_,b,u);R.type=gn,R.needsUpdate=!0;const M=y*4;for(let A=0;A<u;A++){const D=d[A],I=v[A],F=x[A],O=_*b*4*A;for(let V=0;V<D.count;V++){const z=V*M;w===!0&&(a.fromBufferAttribute(D,V),E[O+z+0]=a.x,E[O+z+1]=a.y,E[O+z+2]=a.z,E[O+z+3]=0),g===!0&&(a.fromBufferAttribute(I,V),E[O+z+4]=a.x,E[O+z+5]=a.y,E[O+z+6]=a.z,E[O+z+7]=0),m===!0&&(a.fromBufferAttribute(F,V),E[O+z+8]=a.x,E[O+z+9]=a.y,E[O+z+10]=a.z,E[O+z+11]=F.itemSize===4?a.w:1)}}f={count:u,texture:R,size:new Ne(_,b)},i.set(r,f),r.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let w=0;for(let m=0;m<c.length;m++)w+=c[m];const g=r.morphTargetsRelative?1:1-w;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Bv(n,e,t,i){let a=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(a.get(u)!==c&&(e.update(u),a.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),a.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==c&&(f.update(),a.set(f,c))}return u}function o(){a=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Ld=new Ft,rh=new cs(1,1),Id=new _d,Fd=new bd,kd=new Ad,lh=[],ch=[],hh=new Float32Array(16),uh=new Float32Array(9),dh=new Float32Array(4);function Ea(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let s=lh[a];if(s===void 0&&(s=new Float32Array(a),lh[a]=s),e!==0){i.toArray(s,0);for(let o=1,r=0;o!==e;++o)r+=t,n[o].toArray(s,r)}return s}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Fo(n,e){let t=ch[e];t===void 0&&(t=new Int32Array(e),ch[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Hv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Gv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function Vv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function Wv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function Xv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,i))return;dh.set(i),n.uniformMatrix2fv(this.addr,!1,dh),Mt(t,i)}}function $v(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,i))return;uh.set(i),n.uniformMatrix3fv(this.addr,!1,uh),Mt(t,i)}}function qv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,i))return;hh.set(i),n.uniformMatrix4fv(this.addr,!1,hh),Mt(t,i)}}function Yv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function jv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function Kv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function Zv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function Jv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function ew(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function tw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function nw(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let s;this.type===n.SAMPLER_2D_SHADOW?(rh.compareFunction=xd,s=rh):s=Ld,t.setTexture2D(e||s,a)}function iw(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Fd,a)}function aw(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||kd,a)}function sw(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Id,a)}function ow(n){switch(n){case 5126:return Hv;case 35664:return Gv;case 35665:return Vv;case 35666:return Wv;case 35674:return Xv;case 35675:return $v;case 35676:return qv;case 5124:case 35670:return Yv;case 35667:case 35671:return jv;case 35668:case 35672:return Kv;case 35669:case 35673:return Zv;case 5125:return Jv;case 36294:return Qv;case 36295:return ew;case 36296:return tw;case 35678:case 36198:case 36298:case 36306:case 35682:return nw;case 35679:case 36299:case 36307:return iw;case 35680:case 36300:case 36308:case 36293:return aw;case 36289:case 36303:case 36311:case 36292:return sw}}function rw(n,e){n.uniform1fv(this.addr,e)}function lw(n,e){const t=Ea(e,this.size,2);n.uniform2fv(this.addr,t)}function cw(n,e){const t=Ea(e,this.size,3);n.uniform3fv(this.addr,t)}function hw(n,e){const t=Ea(e,this.size,4);n.uniform4fv(this.addr,t)}function uw(n,e){const t=Ea(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function dw(n,e){const t=Ea(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function fw(n,e){const t=Ea(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function pw(n,e){n.uniform1iv(this.addr,e)}function mw(n,e){n.uniform2iv(this.addr,e)}function gw(n,e){n.uniform3iv(this.addr,e)}function vw(n,e){n.uniform4iv(this.addr,e)}function ww(n,e){n.uniform1uiv(this.addr,e)}function xw(n,e){n.uniform2uiv(this.addr,e)}function yw(n,e){n.uniform3uiv(this.addr,e)}function _w(n,e){n.uniform4uiv(this.addr,e)}function bw(n,e,t){const i=this.cache,a=e.length,s=Fo(t,a);bt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==a;++o)t.setTexture2D(e[o]||Ld,s[o])}function Mw(n,e,t){const i=this.cache,a=e.length,s=Fo(t,a);bt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==a;++o)t.setTexture3D(e[o]||Fd,s[o])}function Sw(n,e,t){const i=this.cache,a=e.length,s=Fo(t,a);bt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==a;++o)t.setTextureCube(e[o]||kd,s[o])}function Ew(n,e,t){const i=this.cache,a=e.length,s=Fo(t,a);bt(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==a;++o)t.setTexture2DArray(e[o]||Id,s[o])}function Tw(n){switch(n){case 5126:return rw;case 35664:return lw;case 35665:return cw;case 35666:return hw;case 35674:return uw;case 35675:return dw;case 35676:return fw;case 5124:case 35670:return pw;case 35667:case 35671:return mw;case 35668:case 35672:return gw;case 35669:case 35673:return vw;case 5125:return ww;case 36294:return xw;case 36295:return yw;case 36296:return _w;case 35678:case 36198:case 36298:case 36306:case 35682:return bw;case 35679:case 36299:case 36307:return Mw;case 35680:case 36300:case 36308:case 36293:return Sw;case 36289:case 36303:case 36311:case 36292:return Ew}}class Aw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ow(t.type)}}class Rw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tw(t.type)}}class Cw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let s=0,o=a.length;s!==o;++s){const r=a[s];r.setValue(e,t[r.id],i)}}}const xr=/(\w+)(\])?(\[|\.)?/g;function fh(n,e){n.seq.push(e),n.map[e.id]=e}function Dw(n,e,t){const i=n.name,a=i.length;for(xr.lastIndex=0;;){const s=xr.exec(i),o=xr.lastIndex;let r=s[1];const l=s[2]==="]",c=s[3];if(l&&(r=r|0),c===void 0||c==="["&&o+2===a){fh(t,c===void 0?new Aw(r,n,e):new Rw(r,n,e));break}else{let u=t.map[r];u===void 0&&(u=new Cw(r),fh(t,u)),t=u}}}class ao{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=e.getActiveUniform(t,a),o=e.getUniformLocation(t,s.name);Dw(s,o,this)}}setValue(e,t,i,a){const s=this.map[t];s!==void 0&&s.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let s=0,o=t.length;s!==o;++s){const r=t[s],l=i[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,s=e.length;a!==s;++a){const o=e[a];o.id in t&&i.push(o)}return i}}function ph(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Pw=37297;let Lw=0;function Iw(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=a;o<s;o++){const r=o+1;i.push(`${r===e?">":" "} ${r}: ${t[o]}`)}return i.join(`
`)}const mh=new He;function Fw(n){Qe._getMatrix(mh,Qe.workingColorSpace,n);const e=`mat3( ${mh.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case mo:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function gh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Iw(n.getShaderSource(e),r)}else return s}function kw(n,e){const t=Fw(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Nw(n,e){let t;switch(e){case Sp:t="Linear";break;case Ep:t="Reinhard";break;case Tp:t="Cineon";break;case Ap:t="ACESFilmic";break;case Cp:t="AgX";break;case Dp:t="Neutral";break;case Rp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ns=new k;function Uw(){Qe.getLuminanceCoefficients(Ns);const n=Ns.x.toFixed(4),e=Ns.y.toFixed(4),t=Ns.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ow(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function zw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Bw(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=n.getActiveAttrib(e,a),o=s.name;let r=1;s.type===n.FLOAT_MAT2&&(r=2),s.type===n.FLOAT_MAT3&&(r=3),s.type===n.FLOAT_MAT4&&(r=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:r}}return t}function Va(n){return n!==""}function vh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(n){return n.replace(Hw,Vw)}const Gw=new Map;function Vw(n,e){let t=We[e];if(t===void 0){const i=Gw.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ol(t)}const Ww=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xh(n){return n.replace(Ww,Xw)}function Xw(n,e,t,i){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function yh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function $w(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ld?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===cd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Un&&(e="SHADOWMAP_TYPE_VSM"),e}function qw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ma:case ga:e="ENVMAP_TYPE_CUBE";break;case Ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ga:e="ENVMAP_MODE_REFRACTION";break}return e}function jw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case hd:e="ENVMAP_BLENDING_MULTIPLY";break;case bp:e="ENVMAP_BLENDING_MIX";break;case Mp:e="ENVMAP_BLENDING_ADD";break}return e}function Kw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Zw(n,e,t,i){const a=n.getContext(),s=t.defines;let o=t.vertexShader,r=t.fragmentShader;const l=$w(t),c=qw(t),h=Yw(t),u=jw(t),f=Kw(t),p=Ow(t),w=zw(s),g=a.createProgram();let m,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Va).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Va).join(`
`),d.length>0&&(d+=`
`)):(m=[yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),d=[yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?We.tonemapping_pars_fragment:"",t.toneMapping!==Wn?Nw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,kw("linearToOutputTexel",t.outputColorSpace),Uw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Va).join(`
`)),o=Ol(o),o=vh(o,t),o=wh(o,t),r=Ol(r),r=vh(r,t),r=wh(r,t),o=xh(o),r=xh(r),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===It?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===It?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=v+m+o,y=v+d+r,_=ph(a,a.VERTEX_SHADER,x),b=ph(a,a.FRAGMENT_SHADER,y);a.attachShader(g,_),a.attachShader(g,b),t.index0AttributeName!==void 0?a.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(g,0,"position"),a.linkProgram(g);function E(A){if(n.debug.checkShaderErrors){const D=a.getProgramInfoLog(g)||"",I=a.getShaderInfoLog(_)||"",F=a.getShaderInfoLog(b)||"",O=D.trim(),V=I.trim(),z=F.trim();let N=!0,K=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,g,_,b);else{const ne=gh(a,_,"vertex"),le=gh(a,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+O+`
`+ne+`
`+le)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(V===""||z==="")&&(K=!1);K&&(A.diagnostics={runnable:N,programLog:O,vertexShader:{log:V,prefix:m},fragmentShader:{log:z,prefix:d}})}a.deleteShader(_),a.deleteShader(b),R=new ao(a,g),M=Bw(a,g)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=a.getProgramParameter(g,Pw)),S},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lw++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=_,this.fragmentShader=b,this}let Jw=0;class Qw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(a)===!1&&(o.add(a),a.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ex(e),t.set(e,i)),i}}class ex{constructor(e){this.id=Jw++,this.code=e,this.usedTimes=0}}function tx(n,e,t,i,a,s,o){const r=new Md,l=new Qw,c=new Set,h=[],u=a.logarithmicDepthBuffer,f=a.vertexTextures;let p=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,A,D,I){const F=D.fog,O=I.geometry,V=M.isMeshStandardMaterial?D.environment:null,z=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),N=z&&z.mapping===Ro?z.image.height:null,K=w[M.type];M.precision!==null&&(p=a.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ne=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,le=ne!==void 0?ne.length:0;let Te=0;O.morphAttributes.position!==void 0&&(Te=1),O.morphAttributes.normal!==void 0&&(Te=2),O.morphAttributes.color!==void 0&&(Te=3);let oe,Ue,Ie,q;if(K){const Be=Mn[K];oe=Be.vertexShader,Ue=Be.fragmentShader}else oe=M.vertexShader,Ue=M.fragmentShader,l.update(M),Ie=l.getVertexShaderID(M),q=l.getFragmentShaderID(M);const Q=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),Fe=I.isInstancedMesh===!0,Ee=I.isBatchedMesh===!0,Xe=!!M.map,ft=!!M.matcap,L=!!z,et=!!M.aoMap,Ce=!!M.lightMap,De=!!M.bumpMap,_e=!!M.normalMap,tt=!!M.displacementMap,xe=!!M.emissiveMap,Ve=!!M.metalnessMap,xt=!!M.roughnessMap,ct=M.anisotropy>0,P=M.clearcoat>0,T=M.dispersion>0,G=M.iridescence>0,j=M.sheen>0,ee=M.transmission>0,Y=ct&&!!M.anisotropyMap,Se=P&&!!M.clearcoatMap,re=P&&!!M.clearcoatNormalMap,ye=P&&!!M.clearcoatRoughnessMap,he=G&&!!M.iridescenceMap,ie=G&&!!M.iridescenceThicknessMap,fe=j&&!!M.sheenColorMap,Pe=j&&!!M.sheenRoughnessMap,be=!!M.specularMap,ue=!!M.specularColorMap,Ge=!!M.specularIntensityMap,U=ee&&!!M.transmissionMap,ae=ee&&!!M.thicknessMap,W=!!M.gradientMap,te=!!M.alphaMap,J=M.alphaTest>0,Z=!!M.alphaHash,pe=!!M.extensions;let ce=Wn;M.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ce=n.toneMapping);const ze={shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:oe,fragmentShader:Ue,defines:M.defines,customVertexShaderID:Ie,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ee,batchingColor:Ee&&I._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&I.instanceColor!==null,instancingMorph:Fe&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ci,alphaToCoverage:!!M.alphaToCoverage,map:Xe,matcap:ft,envMap:L,envMapMode:L&&z.mapping,envMapCubeUVHeight:N,aoMap:et,lightMap:Ce,bumpMap:De,normalMap:_e,displacementMap:f&&tt,emissiveMap:xe,normalMapObjectSpace:_e&&M.normalMapType===kp,normalMapTangentSpace:_e&&M.normalMapType===Fp,metalnessMap:Ve,roughnessMap:xt,anisotropy:ct,anisotropyMap:Y,clearcoat:P,clearcoatMap:Se,clearcoatNormalMap:re,clearcoatRoughnessMap:ye,dispersion:T,iridescence:G,iridescenceMap:he,iridescenceThicknessMap:ie,sheen:j,sheenColorMap:fe,sheenRoughnessMap:Pe,specularMap:be,specularColorMap:ue,specularIntensityMap:Ge,transmission:ee,transmissionMap:U,thicknessMap:ae,gradientMap:W,opaque:M.transparent===!1&&M.blending===Ai&&M.alphaToCoverage===!1,alphaMap:te,alphaTest:J,alphaHash:Z,combine:M.combine,mapUv:Xe&&g(M.map.channel),aoMapUv:et&&g(M.aoMap.channel),lightMapUv:Ce&&g(M.lightMap.channel),bumpMapUv:De&&g(M.bumpMap.channel),normalMapUv:_e&&g(M.normalMap.channel),displacementMapUv:tt&&g(M.displacementMap.channel),emissiveMapUv:xe&&g(M.emissiveMap.channel),metalnessMapUv:Ve&&g(M.metalnessMap.channel),roughnessMapUv:xt&&g(M.roughnessMap.channel),anisotropyMapUv:Y&&g(M.anisotropyMap.channel),clearcoatMapUv:Se&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&g(M.sheenRoughnessMap.channel),specularMapUv:be&&g(M.specularMap.channel),specularColorMapUv:ue&&g(M.specularColorMap.channel),specularIntensityMapUv:Ge&&g(M.specularIntensityMap.channel),transmissionMapUv:U&&g(M.transmissionMap.channel),thicknessMapUv:ae&&g(M.thicknessMap.channel),alphaMapUv:te&&g(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(_e||ct),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!O.attributes.uv&&(Xe||te),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ve,skinning:I.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Te,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:ce,decodeVideoTexture:Xe&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===at,decodeVideoTextureEmissive:xe&&M.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(M.emissiveMap.colorSpace)===at,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===zt,flipSided:M.side===Vt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:pe&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&M.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function d(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const A in M.defines)S.push(A),S.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(v(S,M),x(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function v(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){r.disableAll(),S.supportsVertexTextures&&r.enable(0),S.instancing&&r.enable(1),S.instancingColor&&r.enable(2),S.instancingMorph&&r.enable(3),S.matcap&&r.enable(4),S.envMap&&r.enable(5),S.normalMapObjectSpace&&r.enable(6),S.normalMapTangentSpace&&r.enable(7),S.clearcoat&&r.enable(8),S.iridescence&&r.enable(9),S.alphaTest&&r.enable(10),S.vertexColors&&r.enable(11),S.vertexAlphas&&r.enable(12),S.vertexUv1s&&r.enable(13),S.vertexUv2s&&r.enable(14),S.vertexUv3s&&r.enable(15),S.vertexTangents&&r.enable(16),S.anisotropy&&r.enable(17),S.alphaHash&&r.enable(18),S.batching&&r.enable(19),S.dispersion&&r.enable(20),S.batchingColor&&r.enable(21),S.gradientMap&&r.enable(22),M.push(r.mask),r.disableAll(),S.fog&&r.enable(0),S.useFog&&r.enable(1),S.flatShading&&r.enable(2),S.logarithmicDepthBuffer&&r.enable(3),S.reversedDepthBuffer&&r.enable(4),S.skinning&&r.enable(5),S.morphTargets&&r.enable(6),S.morphNormals&&r.enable(7),S.morphColors&&r.enable(8),S.premultipliedAlpha&&r.enable(9),S.shadowMapEnabled&&r.enable(10),S.doubleSided&&r.enable(11),S.flipSided&&r.enable(12),S.useDepthPacking&&r.enable(13),S.dithering&&r.enable(14),S.transmission&&r.enable(15),S.sheen&&r.enable(16),S.opaque&&r.enable(17),S.pointsUvs&&r.enable(18),S.decodeVideoTexture&&r.enable(19),S.decodeVideoTextureEmissive&&r.enable(20),S.alphaToCoverage&&r.enable(21),M.push(r.mask)}function y(M){const S=w[M.type];let A;if(S){const D=Mn[S];A=Cm.clone(D.uniforms)}else A=M.uniforms;return A}function _(M,S){let A;for(let D=0,I=h.length;D<I;D++){const F=h[D];if(F.cacheKey===S){A=F,++A.usedTimes;break}}return A===void 0&&(A=new Zw(n,S,M,s),h.push(A)),A}function b(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function E(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:_,releaseProgram:b,releaseShaderCache:E,programs:h,dispose:R}}function nx(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let r=n.get(o);return r===void 0&&(r={},n.set(o,r)),r}function i(o){n.delete(o)}function a(o,r,l){n.get(o)[r]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:s}}function ix(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function _h(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bh(){const n=[];let e=0;const t=[],i=[],a=[];function s(){e=0,t.length=0,i.length=0,a.length=0}function o(u,f,p,w,g,m){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:w,renderOrder:u.renderOrder,z:g,group:m},n[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=w,d.renderOrder=u.renderOrder,d.z=g,d.group=m),e++,d}function r(u,f,p,w,g,m){const d=o(u,f,p,w,g,m);p.transmission>0?i.push(d):p.transparent===!0?a.push(d):t.push(d)}function l(u,f,p,w,g,m){const d=o(u,f,p,w,g,m);p.transmission>0?i.unshift(d):p.transparent===!0?a.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||ix),i.length>1&&i.sort(f||_h),a.length>1&&a.sort(f||_h)}function h(){for(let u=e,f=n.length;u<f;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:a,init:s,push:r,unshift:l,finish:h,sort:c}}function ax(){let n=new WeakMap;function e(i,a){const s=n.get(i);let o;return s===void 0?(o=new bh,n.set(i,[o])):a>=s.length?(o=new bh,s.push(o)):o=s[a],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function sx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new me};break;case"SpotLight":t={position:new k,direction:new k,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function ox(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let rx=0;function lx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function cx(n){const e=new sx,t=ox(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const a=new k,s=new Ye,o=new Ye;function r(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,w=0,g=0,m=0,d=0,v=0,x=0,y=0,_=0,b=0,E=0;c.sort(lx);for(let M=0,S=c.length;M<S;M++){const A=c[M],D=A.color,I=A.intensity,F=A.distance,O=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=D.r*I,u+=D.g*I,f+=D.b*I;else if(A.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(A.sh.coefficients[V],I);E++}else if(A.isDirectionalLight){const V=e.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const z=A.shadow,N=t.get(A);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=O,i.directionalShadowMatrix[p]=A.shadow.matrix,v++}i.directional[p]=V,p++}else if(A.isSpotLight){const V=e.get(A);V.position.setFromMatrixPosition(A.matrixWorld),V.color.copy(D).multiplyScalar(I),V.distance=F,V.coneCos=Math.cos(A.angle),V.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),V.decay=A.decay,i.spot[g]=V;const z=A.shadow;if(A.map&&(i.spotLightMap[_]=A.map,_++,z.updateMatrices(A),A.castShadow&&b++),i.spotLightMatrix[g]=z.matrix,A.castShadow){const N=t.get(A);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,i.spotShadow[g]=N,i.spotShadowMap[g]=O,y++}g++}else if(A.isRectAreaLight){const V=e.get(A);V.color.copy(D).multiplyScalar(I),V.halfWidth.set(A.width*.5,0,0),V.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=V,m++}else if(A.isPointLight){const V=e.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),V.distance=A.distance,V.decay=A.decay,A.castShadow){const z=A.shadow,N=t.get(A);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,N.shadowCameraNear=z.camera.near,N.shadowCameraFar=z.camera.far,i.pointShadow[w]=N,i.pointShadowMap[w]=O,i.pointShadowMatrix[w]=A.shadow.matrix,x++}i.point[w]=V,w++}else if(A.isHemisphereLight){const V=e.get(A);V.skyColor.copy(A.color).multiplyScalar(I),V.groundColor.copy(A.groundColor).multiplyScalar(I),i.hemi[d]=V,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==w||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==v||R.numPointShadows!==x||R.numSpotShadows!==y||R.numSpotMaps!==_||R.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=w,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+_-b,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=E,R.directionalLength=p,R.pointLength=w,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=v,R.numPointShadows=x,R.numSpotShadows=y,R.numSpotMaps=_,R.numLightProbes=E,i.version=rx++)}function l(c,h){let u=0,f=0,p=0,w=0,g=0;const m=h.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){const x=c[d];if(x.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(m),u++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=i.rectArea[w];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),w++}else if(x.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const y=i.hemi[g];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:r,setupView:l,state:i}}function Mh(n){const e=new cx(n),t=[],i=[];function a(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function o(h){i.push(h)}function r(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:r,setupLightsView:l,pushLight:s,pushShadow:o}}function hx(n){let e=new WeakMap;function t(a,s=0){const o=e.get(a);let r;return o===void 0?(r=new Mh(n),e.set(a,[r])):s>=o.length?(r=new Mh(n),o.push(r)):r=o[s],r}function i(){e=new WeakMap}return{get:t,dispose:i}}const ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dx=`uniform sampler2D shadow_pass;
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
}`;function fx(n,e,t){let i=new Cd;const a=new Ne,s=new Ne,o=new rt,r=new zm({depthPacking:Ip}),l=new Bm,c={},h=t.maxTextureSize,u={[En]:Vt,[Vt]:En,[zt]:zt},f=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:ux,fragmentShader:dx}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const w=new At;w.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new lt(w,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ld;let d=this.type;this.render=function(b,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),D=n.state;D.setBlending(si),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const I=d!==Un&&this.type===Un,F=d===Un&&this.type!==Un;for(let O=0,V=b.length;O<V;O++){const z=b[O],N=z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;a.copy(N.mapSize);const K=N.getFrameExtents();if(a.multiply(K),s.copy(N.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/K.x),a.x=s.x*K.x,N.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/K.y),a.y=s.y*K.y,N.mapSize.y=s.y)),N.map===null||I===!0||F===!0){const le=this.type!==Un?{minFilter:vt,magFilter:vt}:{};N.map!==null&&N.map.dispose(),N.map=new Rt(a.x,a.y,le),N.map.texture.name=z.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const ne=N.getViewportCount();for(let le=0;le<ne;le++){const Te=N.getViewport(le);o.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),D.viewport(o),N.updateMatrices(z,le),i=N.getFrustum(),y(E,R,N.camera,z,this.type)}N.isPointLightShadow!==!0&&this.type===Un&&v(N,R),N.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,A)};function v(b,E){const R=e.update(g);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Rt(a.x,a.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(E,null,R,f,g,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(E,null,R,p,g,null)}function x(b,E,R,M){let S=null;const A=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)S=A;else if(S=R.isPointLight===!0?l:r,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const D=S.uuid,I=E.uuid;let F=c[D];F===void 0&&(F={},c[D]=F);let O=F[I];O===void 0&&(O=S.clone(),F[I]=O,E.addEventListener("dispose",_)),S=O}if(S.visible=E.visible,S.wireframe=E.wireframe,M===Un?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:u[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const D=n.properties.get(S);D.light=R}return S}function y(b,E,R,M,S){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===Un)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const I=e.update(b),F=b.material;if(Array.isArray(F)){const O=I.groups;for(let V=0,z=O.length;V<z;V++){const N=O[V],K=F[N.materialIndex];if(K&&K.visible){const ne=x(b,K,M,S);b.onBeforeShadow(n,b,E,R,I,ne,N),n.renderBufferDirect(R,null,I,ne,b,N),b.onAfterShadow(n,b,E,R,I,ne,N)}}}else if(F.visible){const O=x(b,F,M,S);b.onBeforeShadow(n,b,E,R,I,O,null),n.renderBufferDirect(R,null,I,O,b,null),b.onAfterShadow(n,b,E,R,I,O,null)}}const D=b.children;for(let I=0,F=D.length;I<F;I++)y(D[I],E,R,M,S)}function _(b){b.target.removeEventListener("dispose",_);for(const R in c){const M=c[R],S=b.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const px={[el]:tl,[nl]:sl,[il]:ol,[pa]:al,[tl]:el,[sl]:nl,[ol]:il,[al]:pa};function mx(n,e){function t(){let U=!1;const ae=new rt;let W=null;const te=new rt(0,0,0,0);return{setMask:function(J){W!==J&&!U&&(n.colorMask(J,J,J,J),W=J)},setLocked:function(J){U=J},setClear:function(J,Z,pe,ce,ze){ze===!0&&(J*=ce,Z*=ce,pe*=ce),ae.set(J,Z,pe,ce),te.equals(ae)===!1&&(n.clearColor(J,Z,pe,ce),te.copy(ae))},reset:function(){U=!1,W=null,te.set(-1,0,0,0)}}}function i(){let U=!1,ae=!1,W=null,te=null,J=null;return{setReversed:function(Z){if(ae!==Z){const pe=e.get("EXT_clip_control");Z?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),ae=Z;const ce=J;J=null,this.setClear(ce)}},getReversed:function(){return ae},setTest:function(Z){Z?Q(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(Z){W!==Z&&!U&&(n.depthMask(Z),W=Z)},setFunc:function(Z){if(ae&&(Z=px[Z]),te!==Z){switch(Z){case el:n.depthFunc(n.NEVER);break;case tl:n.depthFunc(n.ALWAYS);break;case nl:n.depthFunc(n.LESS);break;case pa:n.depthFunc(n.LEQUAL);break;case il:n.depthFunc(n.EQUAL);break;case al:n.depthFunc(n.GEQUAL);break;case sl:n.depthFunc(n.GREATER);break;case ol:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=Z}},setLocked:function(Z){U=Z},setClear:function(Z){J!==Z&&(ae&&(Z=1-Z),n.clearDepth(Z),J=Z)},reset:function(){U=!1,W=null,te=null,J=null,ae=!1}}}function a(){let U=!1,ae=null,W=null,te=null,J=null,Z=null,pe=null,ce=null,ze=null;return{setTest:function(Be){U||(Be?Q(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(Be){ae!==Be&&!U&&(n.stencilMask(Be),ae=Be)},setFunc:function(Be,Qt,en){(W!==Be||te!==Qt||J!==en)&&(n.stencilFunc(Be,Qt,en),W=Be,te=Qt,J=en)},setOp:function(Be,Qt,en){(Z!==Be||pe!==Qt||ce!==en)&&(n.stencilOp(Be,Qt,en),Z=Be,pe=Qt,ce=en)},setLocked:function(Be){U=Be},setClear:function(Be){ze!==Be&&(n.clearStencil(Be),ze=Be)},reset:function(){U=!1,ae=null,W=null,te=null,J=null,Z=null,pe=null,ce=null,ze=null}}}const s=new t,o=new i,r=new a,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],w=null,g=!1,m=null,d=null,v=null,x=null,y=null,_=null,b=null,E=new me(0,0,0),R=0,M=!1,S=null,A=null,D=null,I=null,F=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,z=0;const N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(N)[1]),V=z>=1):N.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),V=z>=2);let K=null,ne={};const le=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),oe=new rt().fromArray(le),Ue=new rt().fromArray(Te);function Ie(U,ae,W,te){const J=new Uint8Array(4),Z=n.createTexture();n.bindTexture(U,Z),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let pe=0;pe<W;pe++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(ae+pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return Z}const q={};q[n.TEXTURE_2D]=Ie(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=Ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=Ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=Ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),Q(n.DEPTH_TEST),o.setFunc(pa),De(!1),_e(Tc),Q(n.CULL_FACE),et(si);function Q(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function ve(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Fe(U,ae){return u[U]!==ae?(n.bindFramebuffer(U,ae),u[U]=ae,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ae),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ee(U,ae){let W=p,te=!1;if(U){W=f.get(ae),W===void 0&&(W=[],f.set(ae,W));const J=U.textures;if(W.length!==J.length||W[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,pe=J.length;Z<pe;Z++)W[Z]=n.COLOR_ATTACHMENT0+Z;W.length=J.length,te=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,te=!0);te&&n.drawBuffers(W)}function Xe(U){return w!==U?(n.useProgram(U),w=U,!0):!1}const ft={[bi]:n.FUNC_ADD,[sp]:n.FUNC_SUBTRACT,[op]:n.FUNC_REVERSE_SUBTRACT};ft[rp]=n.MIN,ft[lp]=n.MAX;const L={[cp]:n.ZERO,[hp]:n.ONE,[up]:n.SRC_COLOR,[Jr]:n.SRC_ALPHA,[vp]:n.SRC_ALPHA_SATURATE,[mp]:n.DST_COLOR,[fp]:n.DST_ALPHA,[dp]:n.ONE_MINUS_SRC_COLOR,[Qr]:n.ONE_MINUS_SRC_ALPHA,[gp]:n.ONE_MINUS_DST_COLOR,[pp]:n.ONE_MINUS_DST_ALPHA,[wp]:n.CONSTANT_COLOR,[xp]:n.ONE_MINUS_CONSTANT_COLOR,[yp]:n.CONSTANT_ALPHA,[_p]:n.ONE_MINUS_CONSTANT_ALPHA};function et(U,ae,W,te,J,Z,pe,ce,ze,Be){if(U===si){g===!0&&(ve(n.BLEND),g=!1);return}if(g===!1&&(Q(n.BLEND),g=!0),U!==ap){if(U!==m||Be!==M){if((d!==bi||y!==bi)&&(n.blendEquation(n.FUNC_ADD),d=bi,y=bi),Be)switch(U){case Ai:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ac:n.blendFunc(n.ONE,n.ONE);break;case Rc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ai:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ac:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Rc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,x=null,_=null,b=null,E.set(0,0,0),R=0,m=U,M=Be}return}J=J||ae,Z=Z||W,pe=pe||te,(ae!==d||J!==y)&&(n.blendEquationSeparate(ft[ae],ft[J]),d=ae,y=J),(W!==v||te!==x||Z!==_||pe!==b)&&(n.blendFuncSeparate(L[W],L[te],L[Z],L[pe]),v=W,x=te,_=Z,b=pe),(ce.equals(E)===!1||ze!==R)&&(n.blendColor(ce.r,ce.g,ce.b,ze),E.copy(ce),R=ze),m=U,M=!1}function Ce(U,ae){U.side===zt?ve(n.CULL_FACE):Q(n.CULL_FACE);let W=U.side===Vt;ae&&(W=!W),De(W),U.blending===Ai&&U.transparent===!1?et(si):et(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const te=U.stencilWrite;r.setTest(te),te&&(r.setMask(U.stencilWriteMask),r.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),r.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),xe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function De(U){S!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),S=U)}function _e(U){U!==np?(Q(n.CULL_FACE),U!==A&&(U===Tc?n.cullFace(n.BACK):U===ip?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),A=U}function tt(U){U!==D&&(V&&n.lineWidth(U),D=U)}function xe(U,ae,W){U?(Q(n.POLYGON_OFFSET_FILL),(I!==ae||F!==W)&&(n.polygonOffset(ae,W),I=ae,F=W)):ve(n.POLYGON_OFFSET_FILL)}function Ve(U){U?Q(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function xt(U){U===void 0&&(U=n.TEXTURE0+O-1),K!==U&&(n.activeTexture(U),K=U)}function ct(U,ae,W){W===void 0&&(K===null?W=n.TEXTURE0+O-1:W=K);let te=ne[W];te===void 0&&(te={type:void 0,texture:void 0},ne[W]=te),(te.type!==U||te.texture!==ae)&&(K!==W&&(n.activeTexture(W),K=W),n.bindTexture(U,ae||q[U]),te.type=U,te.texture=ae)}function P(){const U=ne[K];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function T(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(U){oe.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),oe.copy(U))}function Pe(U){Ue.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Ue.copy(U))}function be(U,ae){let W=c.get(ae);W===void 0&&(W=new WeakMap,c.set(ae,W));let te=W.get(U);te===void 0&&(te=n.getUniformBlockIndex(ae,U.name),W.set(U,te))}function ue(U,ae){const te=c.get(ae).get(U);l.get(ae)!==te&&(n.uniformBlockBinding(ae,te,U.__bindingPointIndex),l.set(ae,te))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},K=null,ne={},u={},f=new WeakMap,p=[],w=null,g=!1,m=null,d=null,v=null,x=null,y=null,_=null,b=null,E=new me(0,0,0),R=0,M=!1,S=null,A=null,D=null,I=null,F=null,oe.set(0,0,n.canvas.width,n.canvas.height),Ue.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:Q,disable:ve,bindFramebuffer:Fe,drawBuffers:Ee,useProgram:Xe,setBlending:et,setMaterial:Ce,setFlipSided:De,setCullFace:_e,setLineWidth:tt,setPolygonOffset:xe,setScissorTest:Ve,activeTexture:xt,bindTexture:ct,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:G,texImage2D:he,texImage3D:ie,updateUBOMapping:be,uniformBlockBinding:ue,texStorage2D:re,texStorage3D:ye,texSubImage2D:j,texSubImage3D:ee,compressedTexSubImage2D:Y,compressedTexSubImage3D:Se,scissor:fe,viewport:Pe,reset:Ge}}function gx(n,e,t,i,a,s,o){const r=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(P,T){return p?new OffscreenCanvas(P,T):vo("canvas")}function g(P,T,G){let j=1;const ee=ct(P);if((ee.width>G||ee.height>G)&&(j=G/Math.max(ee.width,ee.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Y=Math.floor(j*ee.width),Se=Math.floor(j*ee.height);u===void 0&&(u=w(Y,Se));const re=T?w(Y,Se):u;return re.width=Y,re.height=Se,re.getContext("2d").drawImage(P,0,0,Y,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Y+"x"+Se+")."),re}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),P;return P}function m(P){return P.generateMipmaps}function d(P){n.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(P,T,G,j,ee=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Y=T;if(T===n.RED&&(G===n.FLOAT&&(Y=n.R32F),G===n.HALF_FLOAT&&(Y=n.R16F),G===n.UNSIGNED_BYTE&&(Y=n.R8)),T===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(Y=n.R8UI),G===n.UNSIGNED_SHORT&&(Y=n.R16UI),G===n.UNSIGNED_INT&&(Y=n.R32UI),G===n.BYTE&&(Y=n.R8I),G===n.SHORT&&(Y=n.R16I),G===n.INT&&(Y=n.R32I)),T===n.RG&&(G===n.FLOAT&&(Y=n.RG32F),G===n.HALF_FLOAT&&(Y=n.RG16F),G===n.UNSIGNED_BYTE&&(Y=n.RG8)),T===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(Y=n.RG8UI),G===n.UNSIGNED_SHORT&&(Y=n.RG16UI),G===n.UNSIGNED_INT&&(Y=n.RG32UI),G===n.BYTE&&(Y=n.RG8I),G===n.SHORT&&(Y=n.RG16I),G===n.INT&&(Y=n.RG32I)),T===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),G===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),G===n.UNSIGNED_INT&&(Y=n.RGB32UI),G===n.BYTE&&(Y=n.RGB8I),G===n.SHORT&&(Y=n.RGB16I),G===n.INT&&(Y=n.RGB32I)),T===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),G===n.UNSIGNED_INT&&(Y=n.RGBA32UI),G===n.BYTE&&(Y=n.RGBA8I),G===n.SHORT&&(Y=n.RGBA16I),G===n.INT&&(Y=n.RGBA32I)),T===n.RGB&&(G===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),T===n.RGBA){const Se=ee?mo:Qe.getTransfer(j);G===n.FLOAT&&(Y=n.RGBA32F),G===n.HALF_FLOAT&&(Y=n.RGBA16F),G===n.UNSIGNED_BYTE&&(Y=Se===at?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(P,T){let G;return P?T===null||T===Tn||T===Ja?G=n.DEPTH24_STENCIL8:T===gn?G=n.DEPTH32F_STENCIL8:T===Za&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Tn||T===Ja?G=n.DEPTH_COMPONENT24:T===gn?G=n.DEPTH_COMPONENT32F:T===Za&&(G=n.DEPTH_COMPONENT16),G}function _(P,T){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==vt&&P.minFilter!==Ze?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function b(P){const T=P.target;T.removeEventListener("dispose",b),R(T),T.isVideoTexture&&h.delete(T)}function E(P){const T=P.target;T.removeEventListener("dispose",E),S(T)}function R(P){const T=i.get(P);if(T.__webglInit===void 0)return;const G=P.source,j=f.get(G);if(j){const ee=j[T.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(P),Object.keys(j).length===0&&f.delete(G)}i.remove(P)}function M(P){const T=i.get(P);n.deleteTexture(T.__webglTexture);const G=P.source,j=f.get(G);delete j[T.__cacheKey],o.memory.textures--}function S(P){const T=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(T.__webglFramebuffer[j]))for(let ee=0;ee<T.__webglFramebuffer[j].length;ee++)n.deleteFramebuffer(T.__webglFramebuffer[j][ee]);else n.deleteFramebuffer(T.__webglFramebuffer[j]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[j])}else{if(Array.isArray(T.__webglFramebuffer))for(let j=0;j<T.__webglFramebuffer.length;j++)n.deleteFramebuffer(T.__webglFramebuffer[j]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let j=0;j<T.__webglColorRenderbuffer.length;j++)T.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[j]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const G=P.textures;for(let j=0,ee=G.length;j<ee;j++){const Y=i.get(G[j]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(G[j])}i.remove(P)}let A=0;function D(){A=0}function I(){const P=A;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),A+=1,P}function F(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function O(P,T){const G=i.get(P);if(P.isVideoTexture&&Ve(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){const j=P.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(G,P,T);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+T)}function V(P,T){const G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){q(G,P,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+T)}function z(P,T){const G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){q(G,P,T);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+T)}function N(P,T){const G=i.get(P);if(P.version>0&&G.__version!==P.version){Q(G,P,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+T)}const K={[ha]:n.REPEAT,[Tt]:n.CLAMP_TO_EDGE,[cl]:n.MIRRORED_REPEAT},ne={[vt]:n.NEAREST,[Pp]:n.NEAREST_MIPMAP_NEAREST,[ms]:n.NEAREST_MIPMAP_LINEAR,[Ze]:n.LINEAR,[Wo]:n.LINEAR_MIPMAP_NEAREST,[Gn]:n.LINEAR_MIPMAP_LINEAR},le={[Np]:n.NEVER,[Gp]:n.ALWAYS,[Up]:n.LESS,[xd]:n.LEQUAL,[Op]:n.EQUAL,[Hp]:n.GEQUAL,[zp]:n.GREATER,[Bp]:n.NOTEQUAL};function Te(P,T){if(T.type===gn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ze||T.magFilter===Wo||T.magFilter===ms||T.magFilter===Gn||T.minFilter===Ze||T.minFilter===Wo||T.minFilter===ms||T.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,K[T.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,K[T.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,K[T.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,ne[T.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,ne[T.minFilter]),T.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,le[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===vt||T.minFilter!==ms&&T.minFilter!==Gn||T.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function oe(P,T){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",b));const j=T.source;let ee=f.get(j);ee===void 0&&(ee={},f.set(j,ee));const Y=F(T);if(Y!==P.__cacheKey){ee[Y]===void 0&&(ee[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ee[Y].usedTimes++;const Se=ee[P.__cacheKey];Se!==void 0&&(ee[P.__cacheKey].usedTimes--,Se.usedTimes===0&&M(T)),P.__cacheKey=Y,P.__webglTexture=ee[Y].texture}return G}function Ue(P,T,G){return Math.floor(Math.floor(P/G)/T)}function Ie(P,T,G,j){const Y=P.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,G,j,T.data);else{Y.sort((ie,fe)=>ie.start-fe.start);let Se=0;for(let ie=1;ie<Y.length;ie++){const fe=Y[Se],Pe=Y[ie],be=fe.start+fe.count,ue=Ue(Pe.start,T.width,4),Ge=Ue(fe.start,T.width,4);Pe.start<=be+1&&ue===Ge&&Ue(Pe.start+Pe.count-1,T.width,4)===ue?fe.count=Math.max(fe.count,Pe.start+Pe.count-fe.start):(++Se,Y[Se]=Pe)}Y.length=Se+1;const re=n.getParameter(n.UNPACK_ROW_LENGTH),ye=n.getParameter(n.UNPACK_SKIP_PIXELS),he=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let ie=0,fe=Y.length;ie<fe;ie++){const Pe=Y[ie],be=Math.floor(Pe.start/4),ue=Math.ceil(Pe.count/4),Ge=be%T.width,U=Math.floor(be/T.width),ae=ue,W=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Ge,U,ae,W,G,j,T.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,re),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,he)}}function q(P,T,G){let j=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(j=n.TEXTURE_3D);const ee=oe(P,T),Y=T.source;t.bindTexture(j,P.__webglTexture,n.TEXTURE0+G);const Se=i.get(Y);if(Y.version!==Se.__version||ee===!0){t.activeTexture(n.TEXTURE0+G);const re=Qe.getPrimaries(Qe.workingColorSpace),ye=T.colorSpace===Bn?null:Qe.getPrimaries(T.colorSpace),he=T.colorSpace===Bn||re===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let ie=g(T.image,!1,a.maxTextureSize);ie=xt(T,ie);const fe=s.convert(T.format,T.colorSpace),Pe=s.convert(T.type);let be=x(T.internalFormat,fe,Pe,T.colorSpace,T.isVideoTexture);Te(j,T);let ue;const Ge=T.mipmaps,U=T.isVideoTexture!==!0,ae=Se.__version===void 0||ee===!0,W=Y.dataReady,te=_(T,ie);if(T.isDepthTexture)be=y(T.format===Qa,T.type),ae&&(U?t.texStorage2D(n.TEXTURE_2D,1,be,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,be,ie.width,ie.height,0,fe,Pe,null));else if(T.isDataTexture)if(Ge.length>0){U&&ae&&t.texStorage2D(n.TEXTURE_2D,te,be,Ge[0].width,Ge[0].height);for(let J=0,Z=Ge.length;J<Z;J++)ue=Ge[J],U?W&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ue.width,ue.height,fe,Pe,ue.data):t.texImage2D(n.TEXTURE_2D,J,be,ue.width,ue.height,0,fe,Pe,ue.data);T.generateMipmaps=!1}else U?(ae&&t.texStorage2D(n.TEXTURE_2D,te,be,ie.width,ie.height),W&&Ie(T,ie,fe,Pe)):t.texImage2D(n.TEXTURE_2D,0,be,ie.width,ie.height,0,fe,Pe,ie.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){U&&ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,te,be,Ge[0].width,Ge[0].height,ie.depth);for(let J=0,Z=Ge.length;J<Z;J++)if(ue=Ge[J],T.format!==gt)if(fe!==null)if(U){if(W)if(T.layerUpdates.size>0){const pe=Qc(ue.width,ue.height,T.format,T.type);for(const ce of T.layerUpdates){const ze=ue.data.subarray(ce*pe/ue.data.BYTES_PER_ELEMENT,(ce+1)*pe/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,ce,ue.width,ue.height,1,fe,ze)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ue.width,ue.height,ie.depth,fe,ue.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,be,ue.width,ue.height,ie.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?W&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ue.width,ue.height,ie.depth,fe,Pe,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,be,ue.width,ue.height,ie.depth,0,fe,Pe,ue.data)}else{U&&ae&&t.texStorage2D(n.TEXTURE_2D,te,be,Ge[0].width,Ge[0].height);for(let J=0,Z=Ge.length;J<Z;J++)ue=Ge[J],T.format!==gt?fe!==null?U?W&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ue.width,ue.height,fe,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,J,be,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?W&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ue.width,ue.height,fe,Pe,ue.data):t.texImage2D(n.TEXTURE_2D,J,be,ue.width,ue.height,0,fe,Pe,ue.data)}else if(T.isDataArrayTexture)if(U){if(ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,te,be,ie.width,ie.height,ie.depth),W)if(T.layerUpdates.size>0){const J=Qc(ie.width,ie.height,T.format,T.type);for(const Z of T.layerUpdates){const pe=ie.data.subarray(Z*J/ie.data.BYTES_PER_ELEMENT,(Z+1)*J/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,fe,Pe,pe)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,fe,Pe,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,ie.width,ie.height,ie.depth,0,fe,Pe,ie.data);else if(T.isData3DTexture)U?(ae&&t.texStorage3D(n.TEXTURE_3D,te,be,ie.width,ie.height,ie.depth),W&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,fe,Pe,ie.data)):t.texImage3D(n.TEXTURE_3D,0,be,ie.width,ie.height,ie.depth,0,fe,Pe,ie.data);else if(T.isFramebufferTexture){if(ae)if(U)t.texStorage2D(n.TEXTURE_2D,te,be,ie.width,ie.height);else{let J=ie.width,Z=ie.height;for(let pe=0;pe<te;pe++)t.texImage2D(n.TEXTURE_2D,pe,be,J,Z,0,fe,Pe,null),J>>=1,Z>>=1}}else if(Ge.length>0){if(U&&ae){const J=ct(Ge[0]);t.texStorage2D(n.TEXTURE_2D,te,be,J.width,J.height)}for(let J=0,Z=Ge.length;J<Z;J++)ue=Ge[J],U?W&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,fe,Pe,ue):t.texImage2D(n.TEXTURE_2D,J,be,fe,Pe,ue);T.generateMipmaps=!1}else if(U){if(ae){const J=ct(ie);t.texStorage2D(n.TEXTURE_2D,te,be,J.width,J.height)}W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,Pe,ie)}else t.texImage2D(n.TEXTURE_2D,0,be,fe,Pe,ie);m(T)&&d(j),Se.__version=Y.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Q(P,T,G){if(T.image.length!==6)return;const j=oe(P,T),ee=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+G);const Y=i.get(ee);if(ee.version!==Y.__version||j===!0){t.activeTexture(n.TEXTURE0+G);const Se=Qe.getPrimaries(Qe.workingColorSpace),re=T.colorSpace===Bn?null:Qe.getPrimaries(T.colorSpace),ye=T.colorSpace===Bn||Se===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const he=T.isCompressedTexture||T.image[0].isCompressedTexture,ie=T.image[0]&&T.image[0].isDataTexture,fe=[];for(let Z=0;Z<6;Z++)!he&&!ie?fe[Z]=g(T.image[Z],!0,a.maxCubemapSize):fe[Z]=ie?T.image[Z].image:T.image[Z],fe[Z]=xt(T,fe[Z]);const Pe=fe[0],be=s.convert(T.format,T.colorSpace),ue=s.convert(T.type),Ge=x(T.internalFormat,be,ue,T.colorSpace),U=T.isVideoTexture!==!0,ae=Y.__version===void 0||j===!0,W=ee.dataReady;let te=_(T,Pe);Te(n.TEXTURE_CUBE_MAP,T);let J;if(he){U&&ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,te,Ge,Pe.width,Pe.height);for(let Z=0;Z<6;Z++){J=fe[Z].mipmaps;for(let pe=0;pe<J.length;pe++){const ce=J[pe];T.format!==gt?be!==null?U?W&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,0,0,ce.width,ce.height,be,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,Ge,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,0,0,ce.width,ce.height,be,ue,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,Ge,ce.width,ce.height,0,be,ue,ce.data)}}}else{if(J=T.mipmaps,U&&ae){J.length>0&&te++;const Z=ct(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,te,Ge,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){U?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,fe[Z].width,fe[Z].height,be,ue,fe[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ge,fe[Z].width,fe[Z].height,0,be,ue,fe[Z].data);for(let pe=0;pe<J.length;pe++){const ze=J[pe].image[Z].image;U?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,0,0,ze.width,ze.height,be,ue,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,Ge,ze.width,ze.height,0,be,ue,ze.data)}}else{U?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,be,ue,fe[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ge,be,ue,fe[Z]);for(let pe=0;pe<J.length;pe++){const ce=J[pe];U?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,0,0,be,ue,ce.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,Ge,be,ue,ce.image[Z])}}}m(T)&&d(n.TEXTURE_CUBE_MAP),Y.__version=ee.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ve(P,T,G,j,ee,Y){const Se=s.convert(G.format,G.colorSpace),re=s.convert(G.type),ye=x(G.internalFormat,Se,re,G.colorSpace),he=i.get(T),ie=i.get(G);if(ie.__renderTarget=T,!he.__hasExternalTextures){const fe=Math.max(1,T.width>>Y),Pe=Math.max(1,T.height>>Y);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,Y,ye,fe,Pe,T.depth,0,Se,re,null):t.texImage2D(ee,Y,ye,fe,Pe,0,Se,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),xe(T)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,ee,ie.__webglTexture,0,tt(T)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,ee,ie.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(P,T,G){if(n.bindRenderbuffer(n.RENDERBUFFER,P),T.depthBuffer){const j=T.depthTexture,ee=j&&j.isDepthTexture?j.type:null,Y=y(T.stencilBuffer,ee),Se=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=tt(T);xe(T)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,Y,T.width,T.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,Y,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Y,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,P)}else{const j=T.textures;for(let ee=0;ee<j.length;ee++){const Y=j[ee],Se=s.convert(Y.format,Y.colorSpace),re=s.convert(Y.type),ye=x(Y.internalFormat,Se,re,Y.colorSpace),he=tt(T);G&&xe(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,ye,T.width,T.height):xe(T)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,ye,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ye,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ee(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(T.depthTexture);j.__renderTarget=T,(!j.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),O(T.depthTexture,0);const ee=j.__webglTexture,Y=tt(T);if(T.depthTexture.format===li)xe(T)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(T.depthTexture.format===Qa)xe(T)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Xe(P){const T=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const j=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),j){const ee=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,j.removeEventListener("dispose",ee)};j.addEventListener("dispose",ee),T.__depthDisposeCallback=ee}T.__boundDepthTexture=j}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const j=P.texture.mipmaps;j&&j.length>0?Ee(T.__webglFramebuffer[0],P):Ee(T.__webglFramebuffer,P)}else if(G){T.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[j]),T.__webglDepthbuffer[j]===void 0)T.__webglDepthbuffer[j]=n.createRenderbuffer(),Fe(T.__webglDepthbuffer[j],P,!1);else{const ee=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=T.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Y)}}else{const j=P.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),Fe(T.__webglDepthbuffer,P,!1);else{const ee=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(P,T,G){const j=i.get(P);T!==void 0&&ve(j.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Xe(P)}function L(P){const T=P.texture,G=i.get(P),j=i.get(T);P.addEventListener("dispose",E);const ee=P.textures,Y=P.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=T.version,o.memory.textures++),Y){G.__webglFramebuffer=[];for(let re=0;re<6;re++)if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[re]=[];for(let ye=0;ye<T.mipmaps.length;ye++)G.__webglFramebuffer[re][ye]=n.createFramebuffer()}else G.__webglFramebuffer[re]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let re=0;re<T.mipmaps.length;re++)G.__webglFramebuffer[re]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Se)for(let re=0,ye=ee.length;re<ye;re++){const he=i.get(ee[re]);he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&xe(P)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let re=0;re<ee.length;re++){const ye=ee[re];G.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[re]);const he=s.convert(ye.format,ye.colorSpace),ie=s.convert(ye.type),fe=x(ye.internalFormat,he,ie,ye.colorSpace,P.isXRRenderTarget===!0),Pe=tt(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,fe,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,G.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Fe(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Te(n.TEXTURE_CUBE_MAP,T);for(let re=0;re<6;re++)if(T.mipmaps&&T.mipmaps.length>0)for(let ye=0;ye<T.mipmaps.length;ye++)ve(G.__webglFramebuffer[re][ye],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye);else ve(G.__webglFramebuffer[re],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(T)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let re=0,ye=ee.length;re<ye;re++){const he=ee[re],ie=i.get(he);let fe=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(fe=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,ie.__webglTexture),Te(fe,he),ve(G.__webglFramebuffer,P,he,n.COLOR_ATTACHMENT0+re,fe,0),m(he)&&d(fe)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(re=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,j.__webglTexture),Te(re,T),T.mipmaps&&T.mipmaps.length>0)for(let ye=0;ye<T.mipmaps.length;ye++)ve(G.__webglFramebuffer[ye],P,T,n.COLOR_ATTACHMENT0,re,ye);else ve(G.__webglFramebuffer,P,T,n.COLOR_ATTACHMENT0,re,0);m(T)&&d(re),t.unbindTexture()}P.depthBuffer&&Xe(P)}function et(P){const T=P.textures;for(let G=0,j=T.length;G<j;G++){const ee=T[G];if(m(ee)){const Y=v(P),Se=i.get(ee).__webglTexture;t.bindTexture(Y,Se),d(Y),t.unbindTexture()}}}const Ce=[],De=[];function _e(P){if(P.samples>0){if(xe(P)===!1){const T=P.textures,G=P.width,j=P.height;let ee=n.COLOR_BUFFER_BIT;const Y=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(P),re=T.length>1;if(re)for(let he=0;he<T.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const ye=P.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let he=0;he<T.length;he++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[he]);const ie=i.get(T[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,G,j,0,0,G,j,ee,n.NEAREST),l===!0&&(Ce.length=0,De.length=0,Ce.push(n.COLOR_ATTACHMENT0+he),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ce.push(Y),De.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,De)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ce))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let he=0;he<T.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,Se.__webglColorRenderbuffer[he]);const ie=i.get(T[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const T=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function tt(P){return Math.min(a.maxSamples,P.samples)}function xe(P){const T=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ve(P){const T=o.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function xt(P,T){const G=P.colorSpace,j=P.format,ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Ci&&G!==Bn&&(Qe.getTransfer(G)===at?(j!==gt||ee!==_t)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}function ct(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=D,this.setTexture2D=O,this.setTexture2DArray=V,this.setTexture3D=z,this.setTextureCube=N,this.rebindTextures=ft,this.setupRenderTarget=L,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=xe}function vx(n,e){function t(i,a=Bn){let s;const o=Qe.getTransfer(a);if(i===_t)return n.UNSIGNED_BYTE;if(i===ic)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ac)return n.UNSIGNED_SHORT_5_5_5_1;if(i===pd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===md)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===dd)return n.BYTE;if(i===fd)return n.SHORT;if(i===Za)return n.UNSIGNED_SHORT;if(i===nc)return n.INT;if(i===Tn)return n.UNSIGNED_INT;if(i===gn)return n.FLOAT;if(i===wn)return n.HALF_FLOAT;if(i===gd)return n.ALPHA;if(i===vd)return n.RGB;if(i===gt)return n.RGBA;if(i===li)return n.DEPTH_COMPONENT;if(i===Qa)return n.DEPTH_STENCIL;if(i===Yn)return n.RED;if(i===sc)return n.RED_INTEGER;if(i===wd)return n.RG;if(i===oc)return n.RG_INTEGER;if(i===rc)return n.RGBA_INTEGER;if(i===eo||i===to||i===no||i===io)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===eo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===eo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===to)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===no)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===io)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hl||i===ul||i===dl||i===fl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===hl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ul)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pl||i===ml||i===gl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===pl||i===ml)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===gl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vl||i===wl||i===xl||i===yl||i===_l||i===bl||i===Ml||i===Sl||i===El||i===Tl||i===Al||i===Rl||i===Cl||i===Dl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===vl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_l)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ml)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===El)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Al)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Cl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pl||i===Ll||i===Il)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Pl)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ll)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Il)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fl||i===kl||i===Nl||i===Ul)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Fl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===kl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ul)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ja?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const wx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xx=`
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

}`;class yx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Dd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new qn({vertexShader:wx,fragmentShader:xx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new Lo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _x extends Ma{constructor(e,t){super();const i=this;let a=null,s=1,o=null,r="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,w=null;const g=typeof XRWebGLBinding<"u",m=new yx,d={},v=t.getContextAttributes();let x=null,y=null;const _=[],b=[],E=new Ne;let R=null;const M=new Zt;M.viewport=new rt;const S=new Zt;S.viewport=new rt;const A=[M,S],D=new Hm;let I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=_[q];return Q===void 0&&(Q=new ur,_[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=_[q];return Q===void 0&&(Q=new ur,_[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=_[q];return Q===void 0&&(Q=new ur,_[q]=Q),Q.getHandSpace()};function O(q){const Q=b.indexOf(q.inputSource);if(Q===-1)return;const ve=_[Q];ve!==void 0&&(ve.update(q.inputSource,q.frame,c||o),ve.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){a.removeEventListener("select",O),a.removeEventListener("selectstart",O),a.removeEventListener("selectend",O),a.removeEventListener("squeeze",O),a.removeEventListener("squeezestart",O),a.removeEventListener("squeezeend",O),a.removeEventListener("end",V),a.removeEventListener("inputsourceschange",z);for(let q=0;q<_.length;q++){const Q=b[q];Q!==null&&(b[q]=null,_[q].disconnect(Q))}I=null,F=null,m.reset();for(const q in d)delete d[q];e.setRenderTarget(x),p=null,f=null,u=null,a=null,y=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(a,t)),u},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(q){if(a=q,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",O),a.addEventListener("selectstart",O),a.addEventListener("selectend",O),a.addEventListener("squeeze",O),a.addEventListener("squeezestart",O),a.addEventListener("squeezeend",O),a.addEventListener("end",V),a.addEventListener("inputsourceschange",z),v.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(E),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Fe=null,Ee=null;v.depth&&(Ee=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=v.stencil?Qa:li,Fe=v.stencil?Ja:Tn);const Xe={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(Xe),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Rt(f.textureWidth,f.textureHeight,{format:gt,type:_t,depthTexture:new cs(f.textureWidth,f.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ve={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,t,ve),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Rt(p.framebufferWidth,p.framebufferHeight,{format:gt,type:_t,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await a.requestReferenceSpace(r),Ie.setContext(a),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(q){for(let Q=0;Q<q.removed.length;Q++){const ve=q.removed[Q],Fe=b.indexOf(ve);Fe>=0&&(b[Fe]=null,_[Fe].disconnect(ve))}for(let Q=0;Q<q.added.length;Q++){const ve=q.added[Q];let Fe=b.indexOf(ve);if(Fe===-1){for(let Xe=0;Xe<_.length;Xe++)if(Xe>=b.length){b.push(ve),Fe=Xe;break}else if(b[Xe]===null){b[Xe]=ve,Fe=Xe;break}if(Fe===-1)break}const Ee=_[Fe];Ee&&Ee.connect(ve)}}const N=new k,K=new k;function ne(q,Q,ve){N.setFromMatrixPosition(Q.matrixWorld),K.setFromMatrixPosition(ve.matrixWorld);const Fe=N.distanceTo(K),Ee=Q.projectionMatrix.elements,Xe=ve.projectionMatrix.elements,ft=Ee[14]/(Ee[10]-1),L=Ee[14]/(Ee[10]+1),et=(Ee[9]+1)/Ee[5],Ce=(Ee[9]-1)/Ee[5],De=(Ee[8]-1)/Ee[0],_e=(Xe[8]+1)/Xe[0],tt=ft*De,xe=ft*_e,Ve=Fe/(-De+_e),xt=Ve*-De;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(xt),q.translateZ(Ve),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ee[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const ct=ft+Ve,P=L+Ve,T=tt-xt,G=xe+(Fe-xt),j=et*L/P*ct,ee=Ce*L/P*ct;q.projectionMatrix.makePerspective(T,G,j,ee,ct,P),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function le(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(a===null)return;let Q=q.near,ve=q.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),D.near=S.near=M.near=Q,D.far=S.far=M.far=ve,(I!==D.near||F!==D.far)&&(a.updateRenderState({depthNear:D.near,depthFar:D.far}),I=D.near,F=D.far),D.layers.mask=q.layers.mask|6,M.layers.mask=D.layers.mask&3,S.layers.mask=D.layers.mask&5;const Fe=q.parent,Ee=D.cameras;le(D,Fe);for(let Xe=0;Xe<Ee.length;Xe++)le(Ee[Xe],Fe);Ee.length===2?ne(D,M,S):D.projectionMatrix.copy(M.projectionMatrix),Te(q,D,Fe)};function Te(q,Q,ve){ve===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(ve.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=es*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(q){return d[q]};let oe=null;function Ue(q,Q){if(h=Q.getViewerPose(c||o),w=Q,h!==null){const ve=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Fe=!1;ve.length!==D.cameras.length&&(D.cameras.length=0,Fe=!0);for(let L=0;L<ve.length;L++){const et=ve[L];let Ce=null;if(p!==null)Ce=p.getViewport(et);else{const _e=u.getViewSubImage(f,et);Ce=_e.viewport,L===0&&(e.setRenderTargetTextures(y,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(y))}let De=A[L];De===void 0&&(De=new Zt,De.layers.enable(L),De.viewport=new rt,A[L]=De),De.matrix.fromArray(et.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(et.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),L===0&&(D.matrix.copy(De.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Fe===!0&&D.cameras.push(De)}const Ee=a.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&g){u=i.getBinding();const L=u.getDepthInformation(ve[0]);L&&L.isValid&&L.texture&&m.init(L,a.renderState)}if(Ee&&Ee.includes("camera-access")&&g){e.state.unbindTexture(),u=i.getBinding();for(let L=0;L<ve.length;L++){const et=ve[L].camera;if(et){let Ce=d[et];Ce||(Ce=new Dd,d[et]=Ce);const De=u.getCameraImage(et);Ce.sourceTexture=De}}}}for(let ve=0;ve<_.length;ve++){const Fe=b[ve],Ee=_[ve];Fe!==null&&Ee!==void 0&&Ee.update(Fe,Q,c||o)}oe&&oe(q,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),w=null}const Ie=new Pd;Ie.setAnimationLoop(Ue),this.setAnimationLoop=function(q){oe=q},this.dispose=function(){}}}const gi=new An,bx=new Ye;function Mx(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Td(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function a(m,d,v,x,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),w(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&r(m,d)):d.isPointsMaterial?l(m,d,v,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Vt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Vt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),x=v.envMap,y=v.envMapRotation;x&&(m.envMap.value=x,gi.copy(y),gi.x*=-1,gi.y*=-1,gi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),m.envMapRotation.value.setFromMatrix4(bx.makeRotationFromEuler(gi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function r(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Vt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function w(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Sx(n,e,t,i){let a={},s={},o=[];const r=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function c(v,x){let y=a[v.id];y===void 0&&(w(v),y=h(v),a[v.id]=y,v.addEventListener("dispose",m));const _=x.program;i.updateUBOMapping(v,_);const b=e.render.frame;s[v.id]!==b&&(f(v),s[v.id]=b)}function h(v){const x=u();v.__bindingPointIndex=x;const y=n.createBuffer(),_=v.__size,b=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,_,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function u(){for(let v=0;v<r;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=a[v.id],y=v.uniforms,_=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let b=0,E=y.length;b<E;b++){const R=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,S=R.length;M<S;M++){const A=R[M];if(p(A,b,M,_)===!0){const D=A.__offset,I=Array.isArray(A.value)?A.value:[A.value];let F=0;for(let O=0;O<I.length;O++){const V=I[O],z=g(V);typeof V=="number"||typeof V=="boolean"?(A.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,D+F,A.__data)):V.isMatrix3?(A.__data[0]=V.elements[0],A.__data[1]=V.elements[1],A.__data[2]=V.elements[2],A.__data[3]=0,A.__data[4]=V.elements[3],A.__data[5]=V.elements[4],A.__data[6]=V.elements[5],A.__data[7]=0,A.__data[8]=V.elements[6],A.__data[9]=V.elements[7],A.__data[10]=V.elements[8],A.__data[11]=0):(V.toArray(A.__data,F),F+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,y,_){const b=v.value,E=x+"_"+y;if(_[E]===void 0)return typeof b=="number"||typeof b=="boolean"?_[E]=b:_[E]=b.clone(),!0;{const R=_[E];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return _[E]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function w(v){const x=v.uniforms;let y=0;const _=16;for(let E=0,R=x.length;E<R;E++){const M=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,A=M.length;S<A;S++){const D=M[S],I=Array.isArray(D.value)?D.value:[D.value];for(let F=0,O=I.length;F<O;F++){const V=I[F],z=g(V),N=y%_,K=N%z.boundary,ne=N+K;y+=K,ne!==0&&_-ne<z.storage&&(y+=_-ne),D.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=z.storage}}}const b=y%_;return b>0&&(y+=_-b),v.__size=y,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(a[x.id]),delete a[x.id],delete s[x.id]}function d(){for(const v in a)n.deleteBuffer(a[v]);o=[],a={},s={}}return{bind:l,update:c,dispose:d}}class Ex{constructor(e={}){const{canvas:t=om(),context:i=null,depth:a=!0,stencil:s=!1,alpha:o=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const w=new Uint32Array(4),g=new Int32Array(4);let m=null,d=null;const v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let _=!1;this._outputColorSpace=on;let b=0,E=0,R=null,M=-1,S=null;const A=new rt,D=new rt;let I=null;const F=new me(0);let O=0,V=t.width,z=t.height,N=1,K=null,ne=null;const le=new rt(0,0,V,z),Te=new rt(0,0,V,z);let oe=!1;const Ue=new Cd;let Ie=!1,q=!1;const Q=new Ye,ve=new k,Fe=new rt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function ft(){return R===null?N:1}let L=i;function et(C,B){return t.getContext(C,B)}try{const C={alpha:!0,depth:a,stencil:s,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tc}`),t.addEventListener("webglcontextlost",W,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",J,!1),L===null){const B="webgl2";if(L=et(B,C),L===null)throw et(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ce,De,_e,tt,xe,Ve,xt,ct,P,T,G,j,ee,Y,Se,re,ye,he,ie,fe,Pe,be,ue,Ge;function U(){Ce=new kv(L),Ce.init(),be=new vx(L,Ce),De=new Rv(L,Ce,e,be),_e=new mx(L,Ce),De.reversedDepthBuffer&&f&&_e.buffers.depth.setReversed(!0),tt=new Ov(L),xe=new nx,Ve=new gx(L,Ce,_e,xe,De,be,tt),xt=new Dv(y),ct=new Fv(y),P=new Wm(L),ue=new Tv(L,P),T=new Nv(L,P,tt,ue),G=new Bv(L,T,P,tt),ie=new zv(L,De,Ve),re=new Cv(xe),j=new tx(y,xt,ct,Ce,De,ue,re),ee=new Mx(y,xe),Y=new ax,Se=new hx(Ce),he=new Ev(y,xt,ct,_e,G,p,l),ye=new fx(y,G,De),Ge=new Sx(L,tt,De,_e),fe=new Av(L,Ce,tt),Pe=new Uv(L,Ce,tt),tt.programs=j.programs,y.capabilities=De,y.extensions=Ce,y.properties=xe,y.renderLists=Y,y.shadowMap=ye,y.state=_e,y.info=tt}U();const ae=new _x(y,L);this.xr=ae,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=Ce.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ce.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(C){C!==void 0&&(N=C,this.setSize(V,z,!1))},this.getSize=function(C){return C.set(V,z)},this.setSize=function(C,B,X=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=C,z=B,t.width=Math.floor(C*N),t.height=Math.floor(B*N),X===!0&&(t.style.width=C+"px",t.style.height=B+"px"),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(V*N,z*N).floor()},this.setDrawingBufferSize=function(C,B,X){V=C,z=B,N=X,t.width=Math.floor(C*X),t.height=Math.floor(B*X),this.setViewport(0,0,C,B)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(le)},this.setViewport=function(C,B,X,$){C.isVector4?le.set(C.x,C.y,C.z,C.w):le.set(C,B,X,$),_e.viewport(A.copy(le).multiplyScalar(N).round())},this.getScissor=function(C){return C.copy(Te)},this.setScissor=function(C,B,X,$){C.isVector4?Te.set(C.x,C.y,C.z,C.w):Te.set(C,B,X,$),_e.scissor(D.copy(Te).multiplyScalar(N).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(C){_e.setScissorTest(oe=C)},this.setOpaqueSort=function(C){K=C},this.setTransparentSort=function(C){ne=C},this.getClearColor=function(C){return C.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(C=!0,B=!0,X=!0){let $=0;if(C){let H=!1;if(R!==null){const se=R.texture.format;H=se===rc||se===oc||se===sc}if(H){const se=R.texture.type,ge=se===_t||se===Tn||se===Za||se===Ja||se===ic||se===ac,Me=he.getClearColor(),we=he.getClearAlpha(),ke=Me.r,Oe=Me.g,Re=Me.b;ge?(w[0]=ke,w[1]=Oe,w[2]=Re,w[3]=we,L.clearBufferuiv(L.COLOR,0,w)):(g[0]=ke,g[1]=Oe,g[2]=Re,g[3]=we,L.clearBufferiv(L.COLOR,0,g))}else $|=L.COLOR_BUFFER_BIT}B&&($|=L.DEPTH_BUFFER_BIT),X&&($|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",W,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",J,!1),he.dispose(),Y.dispose(),Se.dispose(),xe.dispose(),xt.dispose(),ct.dispose(),G.dispose(),ue.dispose(),Ge.dispose(),j.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",en),ae.removeEventListener("sessionend",ci),_n.stop()};function W(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const C=tt.autoReset,B=ye.enabled,X=ye.autoUpdate,$=ye.needsUpdate,H=ye.type;U(),tt.autoReset=C,ye.enabled=B,ye.autoUpdate=X,ye.needsUpdate=$,ye.type=H}function J(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Z(C){const B=C.target;B.removeEventListener("dispose",Z),pe(B)}function pe(C){ce(C),xe.remove(C)}function ce(C){const B=xe.get(C).programs;B!==void 0&&(B.forEach(function(X){j.releaseProgram(X)}),C.isShaderMaterial&&j.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,X,$,H,se){B===null&&(B=Ee);const ge=H.isMesh&&H.matrixWorld.determinant()<0,Me=Kf(C,B,X,$,H);_e.setMaterial($,ge);let we=X.index,ke=1;if($.wireframe===!0){if(we=T.getWireframeAttribute(X),we===void 0)return;ke=2}const Oe=X.drawRange,Re=X.attributes.position;let qe=Oe.start*ke,it=(Oe.start+Oe.count)*ke;se!==null&&(qe=Math.max(qe,se.start*ke),it=Math.min(it,(se.start+se.count)*ke)),we!==null?(qe=Math.max(qe,0),it=Math.min(it,we.count)):Re!=null&&(qe=Math.max(qe,0),it=Math.min(it,Re.count));const wt=it-qe;if(wt<0||wt===1/0)return;ue.setup(H,$,Me,X,we);let ht,st=fe;if(we!==null&&(ht=P.get(we),st=Pe,st.setIndex(ht)),H.isMesh)$.wireframe===!0?(_e.setLineWidth($.wireframeLinewidth*ft()),st.setMode(L.LINES)):st.setMode(L.TRIANGLES);else if(H.isLine){let Le=$.linewidth;Le===void 0&&(Le=1),_e.setLineWidth(Le*ft()),H.isLineSegments?st.setMode(L.LINES):H.isLineLoop?st.setMode(L.LINE_LOOP):st.setMode(L.LINE_STRIP)}else H.isPoints?st.setMode(L.POINTS):H.isSprite&&st.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ts("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))st.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Le=H._multiDrawStarts,pt=H._multiDrawCounts,Je=H._multiDrawCount,Wt=we?P.get(we).bytesPerElement:1,ki=xe.get($).currentProgram.getUniforms();for(let Xt=0;Xt<Je;Xt++)ki.setValue(L,"_gl_DrawID",Xt),st.render(Le[Xt]/Wt,pt[Xt])}else if(H.isInstancedMesh)st.renderInstances(qe,wt,H.count);else if(X.isInstancedBufferGeometry){const Le=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,pt=Math.min(X.instanceCount,Le);st.renderInstances(qe,wt,pt)}else st.render(qe,wt)};function ze(C,B,X){C.transparent===!0&&C.side===zt&&C.forceSinglePass===!1?(C.side=Vt,C.needsUpdate=!0,ps(C,B,X),C.side=En,C.needsUpdate=!0,ps(C,B,X),C.side=zt):ps(C,B,X)}this.compile=function(C,B,X=null){X===null&&(X=C),d=Se.get(X),d.init(B),x.push(d),X.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),C!==X&&C.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights();const $=new Set;return C.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const se=H.material;if(se)if(Array.isArray(se))for(let ge=0;ge<se.length;ge++){const Me=se[ge];ze(Me,X,H),$.add(Me)}else ze(se,X,H),$.add(se)}),d=x.pop(),$},this.compileAsync=function(C,B,X=null){const $=this.compile(C,B,X);return new Promise(H=>{function se(){if($.forEach(function(ge){xe.get(ge).currentProgram.isReady()&&$.delete(ge)}),$.size===0){H(C);return}setTimeout(se,10)}Ce.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Be=null;function Qt(C){Be&&Be(C)}function en(){_n.stop()}function ci(){_n.start()}const _n=new Pd;_n.setAnimationLoop(Qt),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(C){Be=C,ae.setAnimationLoop(C),C===null?_n.stop():_n.start()},ae.addEventListener("sessionstart",en),ae.addEventListener("sessionend",ci),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(B),B=ae.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,B,R),d=Se.get(C,x.length),d.init(B),x.push(d),Q.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ue.setFromProjectionMatrix(Q,Sn,B.reversedDepth),q=this.localClippingEnabled,Ie=re.init(this.clippingPlanes,q),m=Y.get(C,v.length),m.init(),v.push(m),ae.enabled===!0&&ae.isPresenting===!0){const se=y.xr.getDepthSensingMesh();se!==null&&Ra(se,B,-1/0,y.sortObjects)}Ra(C,B,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(K,ne),Xe=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Xe&&he.addToRenderList(m,C),this.info.render.frame++,Ie===!0&&re.beginShadows();const X=d.state.shadowsArray;ye.render(X,C,B),Ie===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,H=m.transmissive;if(d.setupLights(),B.isArrayCamera){const se=B.cameras;if(H.length>0)for(let ge=0,Me=se.length;ge<Me;ge++){const we=se[ge];Da($,H,C,we)}Xe&&he.render(C);for(let ge=0,Me=se.length;ge<Me;ge++){const we=se[ge];Ca(m,C,we,we.viewport)}}else H.length>0&&Da($,H,C,B),Xe&&he.render(C),Ca(m,C,B);R!==null&&E===0&&(Ve.updateMultisampleRenderTarget(R),Ve.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(y,C,B),ue.resetDefaultState(),M=-1,S=null,x.pop(),x.length>0?(d=x[x.length-1],Ie===!0&&re.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Ra(C,B,X,$){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ue.intersectsSprite(C)){$&&Fe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Q);const ge=G.update(C),Me=C.material;Me.visible&&m.push(C,ge,Me,X,Fe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ue.intersectsObject(C))){const ge=G.update(C),Me=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Fe.copy(C.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Fe.copy(ge.boundingSphere.center)),Fe.applyMatrix4(C.matrixWorld).applyMatrix4(Q)),Array.isArray(Me)){const we=ge.groups;for(let ke=0,Oe=we.length;ke<Oe;ke++){const Re=we[ke],qe=Me[Re.materialIndex];qe&&qe.visible&&m.push(C,ge,qe,X,Fe.z,Re)}}else Me.visible&&m.push(C,ge,Me,X,Fe.z,null)}}const se=C.children;for(let ge=0,Me=se.length;ge<Me;ge++)Ra(se[ge],B,X,$)}function Ca(C,B,X,$){const H=C.opaque,se=C.transmissive,ge=C.transparent;d.setupLightsView(X),Ie===!0&&re.setGlobalState(y.clippingPlanes,X),$&&_e.viewport(A.copy($)),H.length>0&&Fi(H,B,X),se.length>0&&Fi(se,B,X),ge.length>0&&Fi(ge,B,X),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Da(C,B,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[$.id]===void 0&&(d.state.transmissionRenderTarget[$.id]=new Rt(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float")?wn:_t,minFilter:Gn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const se=d.state.transmissionRenderTarget[$.id],ge=$.viewport||A;se.setSize(ge.z*y.transmissionResolutionScale,ge.w*y.transmissionResolutionScale);const Me=y.getRenderTarget(),we=y.getActiveCubeFace(),ke=y.getActiveMipmapLevel();y.setRenderTarget(se),y.getClearColor(F),O=y.getClearAlpha(),O<1&&y.setClearColor(16777215,.5),y.clear(),Xe&&he.render(X);const Oe=y.toneMapping;y.toneMapping=Wn;const Re=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),d.setupLightsView($),Ie===!0&&re.setGlobalState(y.clippingPlanes,$),Fi(C,X,$),Ve.updateMultisampleRenderTarget(se),Ve.updateRenderTargetMipmap(se),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let it=0,wt=B.length;it<wt;it++){const ht=B[it],st=ht.object,Le=ht.geometry,pt=ht.material,Je=ht.group;if(pt.side===zt&&st.layers.test($.layers)){const Wt=pt.side;pt.side=Vt,pt.needsUpdate=!0,Mc(st,X,$,Le,pt,Je),pt.side=Wt,pt.needsUpdate=!0,qe=!0}}qe===!0&&(Ve.updateMultisampleRenderTarget(se),Ve.updateRenderTargetMipmap(se))}y.setRenderTarget(Me,we,ke),y.setClearColor(F,O),Re!==void 0&&($.viewport=Re),y.toneMapping=Oe}function Fi(C,B,X){const $=B.isScene===!0?B.overrideMaterial:null;for(let H=0,se=C.length;H<se;H++){const ge=C[H],Me=ge.object,we=ge.geometry,ke=ge.group;let Oe=ge.material;Oe.allowOverride===!0&&$!==null&&(Oe=$),Me.layers.test(X.layers)&&Mc(Me,B,X,we,Oe,ke)}}function Mc(C,B,X,$,H,se){C.onBeforeRender(y,B,X,$,H,se),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),H.onBeforeRender(y,B,X,$,C,se),H.transparent===!0&&H.side===zt&&H.forceSinglePass===!1?(H.side=Vt,H.needsUpdate=!0,y.renderBufferDirect(X,B,$,H,C,se),H.side=En,H.needsUpdate=!0,y.renderBufferDirect(X,B,$,H,C,se),H.side=zt):y.renderBufferDirect(X,B,$,H,C,se),C.onAfterRender(y,B,X,$,H,se)}function ps(C,B,X){B.isScene!==!0&&(B=Ee);const $=xe.get(C),H=d.state.lights,se=d.state.shadowsArray,ge=H.state.version,Me=j.getParameters(C,H.state,se,B,X),we=j.getProgramCacheKey(Me);let ke=$.programs;$.environment=C.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(C.isMeshStandardMaterial?ct:xt).get(C.envMap||$.environment),$.envMapRotation=$.environment!==null&&C.envMap===null?B.environmentRotation:C.envMapRotation,ke===void 0&&(C.addEventListener("dispose",Z),ke=new Map,$.programs=ke);let Oe=ke.get(we);if(Oe!==void 0){if($.currentProgram===Oe&&$.lightsStateVersion===ge)return Ec(C,Me),Oe}else Me.uniforms=j.getUniforms(C),C.onBeforeCompile(Me,y),Oe=j.acquireProgram(Me,we),ke.set(we,Oe),$.uniforms=Me.uniforms;const Re=$.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Re.clippingPlanes=re.uniform),Ec(C,Me),$.needsLights=Jf(C),$.lightsStateVersion=ge,$.needsLights&&(Re.ambientLightColor.value=H.state.ambient,Re.lightProbe.value=H.state.probe,Re.directionalLights.value=H.state.directional,Re.directionalLightShadows.value=H.state.directionalShadow,Re.spotLights.value=H.state.spot,Re.spotLightShadows.value=H.state.spotShadow,Re.rectAreaLights.value=H.state.rectArea,Re.ltc_1.value=H.state.rectAreaLTC1,Re.ltc_2.value=H.state.rectAreaLTC2,Re.pointLights.value=H.state.point,Re.pointLightShadows.value=H.state.pointShadow,Re.hemisphereLights.value=H.state.hemi,Re.directionalShadowMap.value=H.state.directionalShadowMap,Re.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Re.spotShadowMap.value=H.state.spotShadowMap,Re.spotLightMatrix.value=H.state.spotLightMatrix,Re.spotLightMap.value=H.state.spotLightMap,Re.pointShadowMap.value=H.state.pointShadowMap,Re.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Oe,$.uniformsList=null,Oe}function Sc(C){if(C.uniformsList===null){const B=C.currentProgram.getUniforms();C.uniformsList=ao.seqWithValue(B.seq,C.uniforms)}return C.uniformsList}function Ec(C,B){const X=xe.get(C);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Kf(C,B,X,$,H){B.isScene!==!0&&(B=Ee),Ve.resetTextureUnits();const se=B.fog,ge=$.isMeshStandardMaterial?B.environment:null,Me=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ci,we=($.isMeshStandardMaterial?ct:xt).get($.envMap||ge),ke=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Oe=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Re=!!X.morphAttributes.position,qe=!!X.morphAttributes.normal,it=!!X.morphAttributes.color;let wt=Wn;$.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(wt=y.toneMapping);const ht=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,st=ht!==void 0?ht.length:0,Le=xe.get($),pt=d.state.lights;if(Ie===!0&&(q===!0||C!==S)){const kt=C===S&&$.id===M;re.setState($,C,kt)}let Je=!1;$.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==pt.state.version||Le.outputColorSpace!==Me||H.isBatchedMesh&&Le.batching===!1||!H.isBatchedMesh&&Le.batching===!0||H.isBatchedMesh&&Le.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Le.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Le.instancing===!1||!H.isInstancedMesh&&Le.instancing===!0||H.isSkinnedMesh&&Le.skinning===!1||!H.isSkinnedMesh&&Le.skinning===!0||H.isInstancedMesh&&Le.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Le.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Le.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Le.instancingMorph===!1&&H.morphTexture!==null||Le.envMap!==we||$.fog===!0&&Le.fog!==se||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==re.numPlanes||Le.numIntersection!==re.numIntersection)||Le.vertexAlphas!==ke||Le.vertexTangents!==Oe||Le.morphTargets!==Re||Le.morphNormals!==qe||Le.morphColors!==it||Le.toneMapping!==wt||Le.morphTargetsCount!==st)&&(Je=!0):(Je=!0,Le.__version=$.version);let Wt=Le.currentProgram;Je===!0&&(Wt=ps($,B,H));let ki=!1,Xt=!1,Pa=!1;const mt=Wt.getUniforms(),tn=Le.uniforms;if(_e.useProgram(Wt.program)&&(ki=!0,Xt=!0,Pa=!0),$.id!==M&&(M=$.id,Xt=!0),ki||S!==C){_e.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),mt.setValue(L,"projectionMatrix",C.projectionMatrix),mt.setValue(L,"viewMatrix",C.matrixWorldInverse);const Ht=mt.map.cameraPosition;Ht!==void 0&&Ht.setValue(L,ve.setFromMatrixPosition(C.matrixWorld)),De.logarithmicDepthBuffer&&mt.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&mt.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,Xt=!0,Pa=!0)}if(H.isSkinnedMesh){mt.setOptional(L,H,"bindMatrix"),mt.setOptional(L,H,"bindMatrixInverse");const kt=H.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),mt.setValue(L,"boneTexture",kt.boneTexture,Ve))}H.isBatchedMesh&&(mt.setOptional(L,H,"batchingTexture"),mt.setValue(L,"batchingTexture",H._matricesTexture,Ve),mt.setOptional(L,H,"batchingIdTexture"),mt.setValue(L,"batchingIdTexture",H._indirectTexture,Ve),mt.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&mt.setValue(L,"batchingColorTexture",H._colorsTexture,Ve));const nn=X.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&ie.update(H,X,Wt),(Xt||Le.receiveShadow!==H.receiveShadow)&&(Le.receiveShadow=H.receiveShadow,mt.setValue(L,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(tn.envMap.value=we,tn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&B.environment!==null&&(tn.envMapIntensity.value=B.environmentIntensity),Xt&&(mt.setValue(L,"toneMappingExposure",y.toneMappingExposure),Le.needsLights&&Zf(tn,Pa),se&&$.fog===!0&&ee.refreshFogUniforms(tn,se),ee.refreshMaterialUniforms(tn,$,N,z,d.state.transmissionRenderTarget[C.id]),ao.upload(L,Sc(Le),tn,Ve)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ao.upload(L,Sc(Le),tn,Ve),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&mt.setValue(L,"center",H.center),mt.setValue(L,"modelViewMatrix",H.modelViewMatrix),mt.setValue(L,"normalMatrix",H.normalMatrix),mt.setValue(L,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const kt=$.uniformsGroups;for(let Ht=0,Vo=kt.length;Ht<Vo;Ht++){const hi=kt[Ht];Ge.update(hi,Wt),Ge.bind(hi,Wt)}}return Wt}function Zf(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function Jf(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,B,X){const $=xe.get(C);$.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),xe.get(C.texture).__webglTexture=B,xe.get(C.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:X,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,B){const X=xe.get(C);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0};const Qf=L.createFramebuffer();this.setRenderTarget=function(C,B=0,X=0){R=C,b=B,E=X;let $=!0,H=null,se=!1,ge=!1;if(C){const we=xe.get(C);if(we.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(L.FRAMEBUFFER,null),$=!1;else if(we.__webglFramebuffer===void 0)Ve.setupRenderTarget(C);else if(we.__hasExternalTextures)Ve.rebindTextures(C,xe.get(C.texture).__webglTexture,xe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Re=C.depthTexture;if(we.__boundDepthTexture!==Re){if(Re!==null&&xe.has(Re)&&(C.width!==Re.image.width||C.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(C)}}const ke=C.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ge=!0);const Oe=xe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Oe[B])?H=Oe[B][X]:H=Oe[B],se=!0):C.samples>0&&Ve.useMultisampledRTT(C)===!1?H=xe.get(C).__webglMultisampledFramebuffer:Array.isArray(Oe)?H=Oe[X]:H=Oe,A.copy(C.viewport),D.copy(C.scissor),I=C.scissorTest}else A.copy(le).multiplyScalar(N).floor(),D.copy(Te).multiplyScalar(N).floor(),I=oe;if(X!==0&&(H=Qf),_e.bindFramebuffer(L.FRAMEBUFFER,H)&&$&&_e.drawBuffers(C,H),_e.viewport(A),_e.scissor(D),_e.setScissorTest(I),se){const we=xe.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,we.__webglTexture,X)}else if(ge){const we=B;for(let ke=0;ke<C.textures.length;ke++){const Oe=xe.get(C.textures[ke]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ke,Oe.__webglTexture,X,we)}}else if(C!==null&&X!==0){const we=xe.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,we.__webglTexture,X)}M=-1},this.readRenderTargetPixels=function(C,B,X,$,H,se,ge,Me=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=xe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){_e.bindFramebuffer(L.FRAMEBUFFER,we);try{const ke=C.textures[Me],Oe=ke.format,Re=ke.type;if(!De.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-$&&X>=0&&X<=C.height-H&&(C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Me),L.readPixels(B,X,$,H,be.convert(Oe),be.convert(Re),se))}finally{const ke=R!==null?xe.get(R).__webglFramebuffer:null;_e.bindFramebuffer(L.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(C,B,X,$,H,se,ge,Me=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=xe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we)if(B>=0&&B<=C.width-$&&X>=0&&X<=C.height-H){_e.bindFramebuffer(L.FRAMEBUFFER,we);const ke=C.textures[Me],Oe=ke.format,Re=ke.type;if(!De.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,qe),L.bufferData(L.PIXEL_PACK_BUFFER,se.byteLength,L.STREAM_READ),C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Me),L.readPixels(B,X,$,H,be.convert(Oe),be.convert(Re),0);const it=R!==null?xe.get(R).__webglFramebuffer:null;_e.bindFramebuffer(L.FRAMEBUFFER,it);const wt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await rm(L,wt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,qe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,se),L.deleteBuffer(qe),L.deleteSync(wt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,B=null,X=0){const $=Math.pow(2,-X),H=Math.floor(C.image.width*$),se=Math.floor(C.image.height*$),ge=B!==null?B.x:0,Me=B!==null?B.y:0;Ve.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,ge,Me,H,se),_e.unbindTexture()};const ep=L.createFramebuffer(),tp=L.createFramebuffer();this.copyTextureToTexture=function(C,B,X=null,$=null,H=0,se=null){se===null&&(H!==0?(ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=H,H=0):se=0);let ge,Me,we,ke,Oe,Re,qe,it,wt;const ht=C.isCompressedTexture?C.mipmaps[se]:C.image;if(X!==null)ge=X.max.x-X.min.x,Me=X.max.y-X.min.y,we=X.isBox3?X.max.z-X.min.z:1,ke=X.min.x,Oe=X.min.y,Re=X.isBox3?X.min.z:0;else{const nn=Math.pow(2,-H);ge=Math.floor(ht.width*nn),Me=Math.floor(ht.height*nn),C.isDataArrayTexture?we=ht.depth:C.isData3DTexture?we=Math.floor(ht.depth*nn):we=1,ke=0,Oe=0,Re=0}$!==null?(qe=$.x,it=$.y,wt=$.z):(qe=0,it=0,wt=0);const st=be.convert(B.format),Le=be.convert(B.type);let pt;B.isData3DTexture?(Ve.setTexture3D(B,0),pt=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Ve.setTexture2DArray(B,0),pt=L.TEXTURE_2D_ARRAY):(Ve.setTexture2D(B,0),pt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const Je=L.getParameter(L.UNPACK_ROW_LENGTH),Wt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ki=L.getParameter(L.UNPACK_SKIP_PIXELS),Xt=L.getParameter(L.UNPACK_SKIP_ROWS),Pa=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ht.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ke),L.pixelStorei(L.UNPACK_SKIP_ROWS,Oe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Re);const mt=C.isDataArrayTexture||C.isData3DTexture,tn=B.isDataArrayTexture||B.isData3DTexture;if(C.isDepthTexture){const nn=xe.get(C),kt=xe.get(B),Ht=xe.get(nn.__renderTarget),Vo=xe.get(kt.__renderTarget);_e.bindFramebuffer(L.READ_FRAMEBUFFER,Ht.__webglFramebuffer),_e.bindFramebuffer(L.DRAW_FRAMEBUFFER,Vo.__webglFramebuffer);for(let hi=0;hi<we;hi++)mt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.get(C).__webglTexture,H,Re+hi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.get(B).__webglTexture,se,wt+hi)),L.blitFramebuffer(ke,Oe,ge,Me,qe,it,ge,Me,L.DEPTH_BUFFER_BIT,L.NEAREST);_e.bindFramebuffer(L.READ_FRAMEBUFFER,null),_e.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||C.isRenderTargetTexture||xe.has(C)){const nn=xe.get(C),kt=xe.get(B);_e.bindFramebuffer(L.READ_FRAMEBUFFER,ep),_e.bindFramebuffer(L.DRAW_FRAMEBUFFER,tp);for(let Ht=0;Ht<we;Ht++)mt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,nn.__webglTexture,H,Re+Ht):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,nn.__webglTexture,H),tn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,kt.__webglTexture,se,wt+Ht):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,kt.__webglTexture,se),H!==0?L.blitFramebuffer(ke,Oe,ge,Me,qe,it,ge,Me,L.COLOR_BUFFER_BIT,L.NEAREST):tn?L.copyTexSubImage3D(pt,se,qe,it,wt+Ht,ke,Oe,ge,Me):L.copyTexSubImage2D(pt,se,qe,it,ke,Oe,ge,Me);_e.bindFramebuffer(L.READ_FRAMEBUFFER,null),_e.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else tn?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(pt,se,qe,it,wt,ge,Me,we,st,Le,ht.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(pt,se,qe,it,wt,ge,Me,we,st,ht.data):L.texSubImage3D(pt,se,qe,it,wt,ge,Me,we,st,Le,ht):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,se,qe,it,ge,Me,st,Le,ht.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,se,qe,it,ht.width,ht.height,st,ht.data):L.texSubImage2D(L.TEXTURE_2D,se,qe,it,ge,Me,st,Le,ht);L.pixelStorei(L.UNPACK_ROW_LENGTH,Je),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Wt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ki),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pa),se===0&&B.generateMipmaps&&L.generateMipmap(pt),_e.unbindTexture()},this.initRenderTarget=function(C){xe.get(C).__webglFramebuffer===void 0&&Ve.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Ve.setTextureCube(C,0):C.isData3DTexture?Ve.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ve.setTexture2DArray(C,0):Ve.setTexture2D(C,0),_e.unbindTexture()},this.resetState=function(){b=0,E=0,R=null,_e.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function Tx(n,e){const t=new Ex({canvas:n,antialias:!0,powerPreference:"high-performance",stencil:!1,alpha:!1,preserveDrawingBuffer:new URLSearchParams(location.search).has("shot")});t.setPixelRatio(e.device.pixelRatio),t.outputColorSpace=Ci,t.toneMapping=Wn,t.shadowMap.enabled=!0,t.shadowMap.type=cd;const i=new mn,a=new Zt(62,1,2,2e5),s=()=>{const o=n.clientWidth||innerWidth,r=n.clientHeight||innerHeight;t.setSize(o,r,!1),a.aspect=o/r,a.updateProjectionMatrix()};return s(),addEventListener("resize",s),{renderer:t,scene:i,camera:a}}function Ax(n,e){const t=n.getDrawingBufferSize(new Ne),i=new cs(t.x,t.y);return i.type=Tn,i.format=li,i.minFilter=vt,i.magFilter=vt,new Rt(t.x,t.y,{type:wn,format:gt,minFilter:Ze,magFilter:Ze,depthBuffer:!0,stencilBuffer:!1,depthTexture:i,samples:e.msaaSamples})}const Sh=[1,.85,.72,.6,.5,.4],Rx=20,Cx=12,Nd={full:{startIndex:0,targetMs:Rx,comfortableMs:Cx},reduced:{startIndex:2,targetMs:30,comfortableMs:20}};class Dx{index=0;targetMs;comfortableMs;slowFrames=0;fastFrames=0;cooldown=0;pinned=null;baseRatio;constructor(e,t=Nd.full){this.baseRatio=e.getPixelRatio(),this.index=t.startIndex,this.targetMs=t.targetMs,this.comfortableMs=t.comfortableMs}get scale(){return this.pinned??Sh[this.index]}pin(e){this.pinned=e}update(e,t){return this.pinned!==null?!1:this.cooldown>0?(this.cooldown-=t,!1):(e>this.targetMs?(this.slowFrames++,this.fastFrames=0):e<this.comfortableMs?(this.fastFrames++,this.slowFrames=0):(this.slowFrames=0,this.fastFrames=0),this.slowFrames>30&&this.index<Sh.length-1?(this.index++,this.slowFrames=0,this.cooldown=1.5,!0):this.fastFrames>180&&this.index>0?(this.index--,this.fastFrames=0,this.cooldown=3,!0):!1)}apply(e){e.setPixelRatio(this.baseRatio*this.scale)}}const yn={uAerosolExt:{value:new k},uAerosolScat:{value:new k}},jn=`
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
// Smoke and dust: a mixed layer a few kilometres deep. On the clean-air
// Mie profile the whole column sat in the bottom kilometre and a smoky day
// hid the city a kilometre away. Only evaluated when there is aerosol.
const float H_A = 2500.0;

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
uniform vec3  uAerosolExt;
uniform vec3  uAerosolScat;
// Smoke and dust scatter forward, less sharply than a humid haze.
const float AEROSOL_G = 0.68;

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
// Clean air, exactly as before smoke: see atmosphereClean for why it is separate.
vec3 sunTransmittanceClean(vec3 p, vec3 sunDir, float turbidity) {
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

// Column density (metres at sea-level concentration) of the aerosol layer
// from p toward the sun: its scale height times the density at p times the
// airmass of an exponential layer on a sphere (the Chapman form for a
// homogeneous shell of height H_A: 1 overhead, about 71 at the horizon).
// Closed form rather than marched, because the terrain and roads march the
// sun path in TWO steps, whose midpoints sit 15 km and more up where a
// 2.5 km layer has nothing left: the sun came through smoke unreddened and
// the ground's aerial perspective went grey while the sky went brown.
float aerosolSunDepth(vec3 p, vec3 sunDir) {
  float r = length(p);
  float h = max(0.0, r - R_GROUND);
  float mu = dot(p / r, sunDir);
  float x = R_GROUND / H_A;
  float airmass = sqrt(x * x * mu * mu + 2.0 * x + 1.0) - x * mu;
  return H_A * exp(-h / H_A) * airmass;
}

// The clean-air part is returned and the aerosol part written to aer, so
// the multiple-scatter term can treat the two differently.
vec3 sunTransmittanceSplit(vec3 p, vec3 sunDir, float turbidity, out vec3 aer) {
  aer = vec3(1.0);
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
  if (uAerosolExt.g > 0.0) aer = exp(-uAerosolExt * aerosolSunDepth(p, sunDir));
  return exp(-(BETA_R * odR + BETA_M * turbidity * 1.11 * odM + BETA_O * odO));
}

vec3 sunTransmittance(vec3 p, vec3 sunDir, float turbidity) {
  if (uAerosolExt.g <= 0.0) return sunTransmittanceClean(p, sunDir, turbidity);
  vec3 aer;
  return sunTransmittanceSplit(p, sunDir, turbidity, aer) * aer;
}

/**
 * The aerosol's share of the sun's transmittance from p: 1 in clean air. For
 * a shader lit by a white uSunColor (the cloud march) that should still see
 * the sun go orange through smoke without changing how it is lit on a clean
 * day.
 */
vec3 aerosolSunT(vec3 p, vec3 sunDir) {
  if (uAerosolExt.g <= 0.0) return vec3(1.0);
  return exp(-uAerosolExt * aerosolSunDepth(p, sunDir));
}

/**
 * Integrate scattering along a ray for 'maxDist' metres (use a huge number for
 * the open sky). Returns in-scattered radiance and writes the transmittance of
 * the segment, so a surface shader can do "surface * transmittance + scatter"
 * and get aerial perspective for free.
 */
// The clean-air march exactly as it was before smoke, for the short surface
// marches: a uniform branch around whole loops, because folding the smoke
// terms into one loop cost 3 ms a frame on the rain street (the compiler
// evaluates both sides of small per-step branches).
vec3 atmosphereClean(vec3 ro, vec3 rd, float maxDist, out vec3 transmittance, int steps) {
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
    vec3 sunT  = sunTransmittanceClean(p, uSunDir, uTurbidity);
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

vec3 atmosphereSteps(vec3 ro, vec3 rd, float maxDist, out vec3 transmittance, int steps) {
  if (uAerosolExt.g <= 0.0 && steps < 16) return atmosphereClean(ro, rd, maxDist, transmittance, steps);
  float shell = rayShell(ro, rd, R_TOP);
  if (shell <= 0.0) { transmittance = vec3(1.0); return vec3(0.0); }

  float ground = rayGround(ro, rd);
  float far = shell;
  if (ground > 0.0) far = min(far, ground);
  far = min(far, maxDist);

  int N = steps;
  float dt = far / float(N);
  float odR = 0.0, odM = 0.0, odO = 0.0, odA = 0.0;
  bool smoky = uAerosolExt.g > 0.0;
  vec3 sumR = vec3(0.0);
  vec3 sumM = vec3(0.0);
  vec3 sumA = vec3(0.0);
  vec3 sumMS = vec3(0.0);
  // Transmittance to the start of the step, for the exact step integral below.
  vec3 prevT = vec3(1.0);

  for (int i = 0; i < N; i++) {
    vec3 p = ro + rd * (dt * (float(i) + 0.5));
    float h = max(0.0, length(p) - R_GROUND);
    float dR = exp(-h / H_R) * dt;
    float dM = exp(-h / H_M) * dt;
    float dO = ozoneDensity(h) * dt;
    float dA = smoky ? exp(-h / H_A) * dt : 0.0;
    odR += dR; odM += dM; odO += dO; odA += dA;

    vec3 viewT = exp(-(BETA_R * odR + BETA_M * uTurbidity * 1.11 * odM + uAerosolExt * odA + BETA_O * odO));
    // THE HORIZON STRIPE. Each step's in-scatter used to be weighted by the
    // transmittance at the step's END. That is fine for an optically thin
    // step and wrong for a thick one, and a horizon ray has sixteen steps
    // over several hundred kilometres: a step is 20 to 60 km of sea-level air,
    // Rayleigh optical depth about 2 in the blue, so the blue scattered in
    // the first part of every step was thrown away and what survived was the
    // red and green. That drew a hard ochre band along the horizon of every
    // skyline shot at noon, strongest in the lowest degree of the sky
    // (model: (1.74, 1.63, 0.85) at 0.05 deg where the exact integral gives
    // (2.05, 2.38, 2.29), the pale blue-white a real horizon is). In smoke
    // the same error was a black band. The exact integral of a step with
    // constant coefficients is prevT * (1 - e^-dtau) / dtau, and it costs one
    // exp per step.
    //
    // Only for the full sky march (the dome, the probe, the far field's open
    // sky: 16 steps) and in smoke. The short surface marches keep the end
    // weight their look was tuned with: switching them too turned the far end
    // of a wet street under an overcast into a white bar (the road's own
    // aerial perspective, found by elimination and not fully explained), and
    // over a surface's few kilometres the two agree anyway.
    vec3 w = viewT;
    if (smoky || steps >= 16) {
      vec3 dtau = BETA_R * dR + BETA_M * uTurbidity * 1.11 * dM + uAerosolExt * dA + BETA_O * dO;
      w = prevT * (1.0 - exp(-dtau)) / max(dtau, vec3(1e-6));
      prevT = viewT;
    }
    vec3 aerSlant;
    vec3 cleanSunT = sunTransmittanceSplit(p, uSunDir, uTurbidity, aerSlant);
    vec3 sunT = cleanSunT * aerSlant;
    vec3 t = w * sunT;
    sumR += t * dR;
    sumM += t * dM;
    sumA += t * dA;

    // Multiple scattering, approximated. Single scattering alone leaves the
    // horizon orange at MIDDAY: a 100 km horizon ray is so reddened by the time
    // it is scattered once that no blue survives. Real photons reaching the eye
    // from the horizon have bounced several times, each bounce over a much
    // shorter path, so they are far less reddened. Raising the sun
    // transmittance to a fractional power models that shorter effective path,
    // and the isotropic (phase-free) term restores the pale blue-white horizon
    // that the single-scatter model cannot produce.
    vec3 shortPathSunT = pow(cleanSunT, vec3(0.45));
    // Smoke and dust are the exception to that shortcut. A thick aerosol
    // layer at a low sun leaves almost no DIRECT beam at the bottom of it
    // (optical depth 2.5 at airmass 10), and the power law took the
    // multiple-scatter term to zero with it: the horizon under a smoky sunset
    // went black. What reaches the bottom of a thick layer is diffuse light
    // that has worked its way down through the column ABOVE the point, much
    // as at noon, so the aerosol part of this term is that vertical column's
    // transmittance (0.75 of it: forward scattering loses less) rather than
    // the slant path's.
    // With a high sun the slant path's power law is the larger, and wins.
    if (smoky) {
      shortPathSunT *= max(pow(aerSlant, vec3(0.45)), exp(-uAerosolExt * H_A * exp(-h / H_A) * 0.75));
    }
    sumMS += w * shortPathSunT * (BETA_R * dR + BETA_M * uTurbidity * 1.11 * dM + uAerosolScat * dA);
  }

  transmittance = exp(-(BETA_R * odR + BETA_M * uTurbidity * 1.11 * odM + uAerosolExt * odA + BETA_O * odO));

  float c = dot(rd, uSunDir);
  vec3 scatter = uSunIntensity * uSunColor *
    (sumR * BETA_R * rayleighPhase(c) +
     sumM * BETA_M * uTurbidity * miePhase(c, uMieG) +
     sumA * uAerosolScat * miePhase(c, AEROSOL_G) +
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
`,Ta=`
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
`,Px=`
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
`,Lx=`
precision highp float;
in vec3 vRayDir;
out vec4 fragColor;

${jn}
${Ta}

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
`;class Ix{mesh;uniforms;constructor(){this.uniforms={uInvProj:{value:new Ye},uInvView:{value:new Ye},uSunDir:{value:new k(0,1,0)},uSunColor:{value:new me(1,1,1)},uSunIntensity:{value:22},uMieG:{value:.76},uTurbidity:{value:1},...yn,uCamAltitude:{value:100},uMultiScatter:{value:.055},uExposure:{value:1},uMoonDir:{value:new k(0,-1,0)},uMoonIllum:{value:1},uNightAmount:{value:0},uTime:{value:0}};const e=new Bt({vertexShader:Px,fragmentShader:Lx,uniforms:this.uniforms,glslVersion:It,depthWrite:!1,depthTest:!1,side:zt}),t=new At;t.setAttribute("position",new dt(new Float32Array(9),3)),t.boundingSphere=new rn(new k,1/0),this.mesh=new lt(t,e),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1e3,this.mesh.matrixAutoUpdate=!1}update(e,t,i,a){const s=this.uniforms,o=e.sun.dir;s.uSunDir.value.set(o.x,o.y,o.z);const r=e.moon.dir;s.uMoonDir.value.set(r.x,r.y,r.z),s.uMoonIllum.value=e.moonIllum,s.uCamAltitude.value=i,s.uTime.value=a;const l=1-Math.max(0,Math.min(1,(e.sun.altitude+12)/14));s.uNightAmount.value=l*(1-.85*t.totalCover),s.uMieG.value=.62+.22*Math.max(0,Math.min(1,(t.humidity-30)/60));const c=Math.max(.2,t.visibility/1e3);s.uTurbidity.value=Math.max(.6,Math.min(12,34/c)),s.uSunIntensity.value=22,s.uSunColor.value.setRGB(1,1,1)}syncCamera(e){this.uniforms.uInvProj.value.copy(e.projectionMatrixInverse),this.uniforms.uInvView.value.copy(e.matrixWorld)}}const Fx=1.5,is=[{extent:400,segments:128,imageryZoom:18},{extent:1100,segments:192,imageryZoom:17},{extent:2200,segments:224,imageryZoom:16},{extent:6e3,segments:320,imageryZoom:15},{extent:2e4,segments:256,imageryZoom:13},{extent:7e4,segments:192,imageryZoom:10}],kx=[{extent:400,segments:96,imageryZoom:18},{extent:1100,segments:144,imageryZoom:16},{extent:2200,segments:160,imageryZoom:15},{extent:6e3,segments:224,imageryZoom:14},{extent:2e4,segments:192,imageryZoom:12},{extent:7e4,segments:160,imageryZoom:9}],Eh=4,Nx=3,Ux=8,Ox=42,zx=1.05,Ud=256,Bx=111412,Th=3,Hx=4,Gx=4/3,Vx=12,Wx=5,Ah=.5,Xx=21,$x=1.7*48+12,qx=48;function Od(n){return n.deviceMemoryGb!==null?n.deviceMemoryGb:n.coarsePointer?Nx:Ux}function Yx(n){let e=0;for(const t of n)e=Math.max(e,zd(t)*Ud);return e}function zd(n){const e=2*n.extent*zx,t=Math.cos(Ox*Math.PI/180),i=Bx*t*360/2**n.imageryZoom;return Math.floor(e/i)+1}function jx(n){return n.length>0?Bd([n[0]]):0}function Bd(n){let e=0;for(const t of n){const i=zd(t)*Ud;e+=i*i*Hx*Gx}return e}const Kx={rings:is,msaaSamples:4,shadowCascadeSize:2048,shadowCascadeCount:3,aoEnabled:!0,buildingTriangleBudget:4e6,roadTriangleBudget:7e5},Zx={rings:kx,msaaSamples:0,shadowCascadeSize:1024,shadowCascadeCount:2,aoEnabled:!1,buildingTriangleBudget:75e4,roadTriangleBudget:35e4},Jx={full:Kx,reduced:Zx};function Qx(n,e){const t=e.drawingBufferWidth,i=e.drawingBufferHeight,a=Math.max(1,Math.floor(t*Ah)),s=Math.max(1,Math.floor(i*Ah)),o=[{what:"drape rings",bytes:Bd(n.rings)},{what:`scene target ${t}x${i} msaa ${n.msaaSamples}`,bytes:t*i*Vx*(1+n.msaaSamples)},{what:`shadow cascades ${Th}x${n.shadowCascadeSize}`,bytes:Th*n.shadowCascadeSize**2*Wx},{what:`ambient occlusion ${n.aoEnabled?`${a}x${s}`:"off"}`,bytes:n.aoEnabled?a*s*Xx:0},{what:`detail ring restitch ${n.rings[0].extent} m z${n.rings[0].imageryZoom}`,bytes:jx(n.rings)},{what:`building geometry ${(n.buildingTriangleBudget/1e3).toFixed(0)}k tris`,bytes:n.buildingTriangleBudget*$x},{what:`road geometry ${(n.roadTriangleBudget/1e3).toFixed(0)}k tris`,bytes:n.roadTriangleBudget*qx}];let r=0;for(const l of o)r+=l.bytes;return{items:o,totalBytes:r}}function ey(n,e){const t=Jx[n];return{tier:n,device:e,reasons:[],assumedMemoryGb:Od(e),...t,memory:Qx(t,e)}}function ty(n){const e=[],t=Od(n);if(n.coarsePointer&&e.push("pointer is coarse"),t<=Eh){const s=n.deviceMemoryGb===null?"assumed":"reported";e.push(`memory ${s} ${t} GB, at or below ${Eh} GB`)}const i=Yx(is);n.maxTextureSize!==null&&n.maxTextureSize<i&&e.push(`MAX_TEXTURE_SIZE ${n.maxTextureSize} below the ${i} px the full drape needs`);const a=ey(e.length>0?"reduced":"full",n);return a.reasons=e,a}function ny(){const n=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,e=typeof navigator>"u"?void 0:navigator.deviceMemory,t=Math.min(typeof devicePixelRatio=="number"?devicePixelRatio:1,Fx);return{coarsePointer:n,deviceMemoryGb:typeof e=="number"?e:null,maxTextureSize:iy(),drawingBufferWidth:Math.round(innerWidth*t),drawingBufferHeight:Math.round(innerHeight*t),pixelRatio:t}}function iy(){if(typeof document>"u")return null;try{const n=document.createElement("canvas").getContext("webgl2");if(!n)return null;const e=n.getParameter(n.MAX_TEXTURE_SIZE);return n.getExtension("WEBGL_lose_context")?.loseContext(),e}catch{return null}}let yr=null;function Hd(){return yr===null&&(yr=ty(ny())),yr}function Rh(n){return`${(n/1048576).toFixed(1)} MB`}const Ch=new k,Dh=new k,_r=new me(.016,.02,.034),br=new me(.01,.013,.022),ay=.42,sy=.54,oy=.34,ry=new me(.72,.82,1);function ly(n,e){const t=n.sun.altitude;Ch.set(n.sun.dir.x,n.sun.dir.y,n.sun.dir.z);const i=1-Math.max(0,Math.min(1,(t+6)/10)),a=e.totalCover,o=26*(Math.max(0,Math.min(1,(t+2)/8))*(1-e.opacity)),r=new me(.26,.38,.58),l=new me(.52,.55,.58),c=r.clone().lerp(l,a);c.multiplyScalar(oy*(1+1.5*e.opacity*Math.max(0,Math.min(1,(t+4)/12))));const h=Math.max(0,Math.min(1,(n.moon.altitude+1.5)/14)),u=n.moonIllum*h*(1-.92*e.opacity)*i;c.multiplyScalar(Math.max(0,1-i)),c.r+=_r.r*i+br.r*u,c.g+=_r.g*i+br.g*u,c.b+=_r.b*i+br.b*u,Dh.set(n.moon.dir.x,n.moon.dir.y,n.moon.dir.z);const f=ry.clone().multiplyScalar(ay*u),p=Math.max(0,Math.min(1,e.wetness)),w=1-Math.exp(-Math.max(0,e.snowDepth)/.025),g=e.precip*(1-e.snowFrac),m=Math.min(1,Math.sqrt(Math.max(0,g)/8)),d=Math.max(.2,e.visibility/1e3);return{sunDir:Ch.clone(),sunColor:new me(1,1,1),sunIntensity:o,moonDir:Dh.clone(),moonLight:f,ambient:c,night:i,nightGlow:new me(.03,.028,.027).multiplyScalar(i),wetness:p*(1-.6*w),puddles:Math.max(0,Math.min(1,e.puddles))*(1-w),rainfall:m,snow:w,mieG:.62+.22*Math.max(0,Math.min(1,(e.humidity-30)/60)),turbidity:Math.max(.6,Math.min(12,34/d)),exposure:sy+2.16*i*i,fogEnd:Math.min(16e4,e.visibility*2.6)}}const dc=`
float wetHash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float wetNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(wetHash(i), wetHash(i + vec2(1.0, 0.0)), f.x),
             mix(wetHash(i + vec2(0.0, 1.0)), wetHash(i + vec2(1.0, 1.0)), f.x), f.y);
}

/** 0..1, how low this spot sits: dips a few metres across, and finer ruts. */
float wetLowness(vec2 xz) {
  return wetNoise(xz * 0.11 + vec2(3.7, 1.3)) * 0.6
       + wetNoise(xz * 0.37 + vec2(9.1, 4.4)) * 0.3
       + wetNoise(xz * 1.3) * 0.1;
}

/**
 * Local film wetness from the place's (0..1) and the spot's lowness, plus a
 * kerb term (0..1, 1 in the gutter) where water collects. At full wetness
 * everything is wet; as it dries, the high ground goes first.
 */
float wetLocal(float wet, float low, float kerb) {
  float need = 1.0 - wet;
  return wet <= 0.001 ? 0.0 : smoothstep(need - 0.05, need + 0.25, low * 0.85 + kerb * 0.35 + 0.08);
}

/** 0..1 standing water: the lowest spots, growing as the puddles fill. */
float puddleLocal(float fill, float low, float kerb) {
  if (fill <= 0.001) return 0.0;
  float level = 1.0 - 0.55 * fill;
  float l = low + kerb * 0.25;
  return smoothstep(level, level + 0.04, l);
}

/**
 * The damp margin a drying puddle leaves: a band of darker, glossier ground
 * just beyond its edge, which is what stops a puddle reading as a decal.
 */
float puddleHalo(float fill, float low) {
  if (fill <= 0.001) return 0.0;
  float level = 1.0 - 0.55 * fill;
  return 0.75 * smoothstep(level - 0.10, level, low);
}

/**
 * Rain-drop ripples on standing water: rings expanding from a random point
 * in each 0.4 m cell, each on its own phase, a new drop every ~0.8 s per
 * cell at full rate. Returns a tangent-plane slope (dx, dz). The rate scales
 * both how many cells are active and the amplitude, so drizzle is a sparse
 * dimpling and a downpour is a boiling surface.
 */
vec2 rainRipples(vec2 xz, float t, float rain) {
  if (rain <= 0.001) return vec2(0.0);
  vec2 slope = vec2(0.0);
  for (int layer = 0; layer < 2; layer++) {
    vec2 q = xz * (layer == 0 ? 2.5 : 3.7) + float(layer) * 17.0;
    vec2 c = floor(q);
    for (int j = -1; j <= 1; j++)
      for (int i = -1; i <= 1; i++) {
        vec2 cell = c + vec2(i, j);
        float h = wetHash(cell);
        if (h > rain * 0.9 + 0.1) continue;
        vec2 ctr = cell + vec2(wetHash(cell + 3.1), wetHash(cell + 7.7));
        float period = 0.8;
        float age = fract(t / period + h * 7.0);
        vec2 d = q - ctr;
        float r = length(d);
        float front = age * 0.9;
        float ring = sin((r - front) * 38.0) * exp(-abs(r - front) * 22.0) * (1.0 - age);
        slope += (r > 1e-3 ? d / r : vec2(0.0)) * ring;
      }
  }
  return slope * 0.12 * (0.4 + 0.6 * rain);
}
`,hs=2,Fn=[350,1400,6e3],Ph=3e3,cy=2,hy=.02,uy=.06,ko=`
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
`,dy=`precision highp float;
in vec3 position;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fy=`precision highp float;
out vec4 c;
void main() { c = vec4(1.0); }`;function Gd(){return new Bt({glslVersion:It,vertexShader:dy,fragmentShader:fy,side:zt,colorWrite:!1})}function py(n){const e=new cs(n,n);return e.type=Tn,e.format=li,e.minFilter=vt,e.magFilter=vt,e.compareFunction=null,new Rt(n,n,{depthBuffer:!0,stencilBuffer:!1,depthTexture:e,format:Yn,type:_t})}const Us=new k,Zi=new k,my=new k,Mr=new k,Lh=new Ye,Os=new xn,Ih=new xn;class gy{uniforms;enabled=!0;cascades=[];depthMaterial;size;budget;constructor(e){this.budget=e;const t=e.shadowCascadeSize;this.size=t;for(let i=0;i<3;i++)this.cascades.push({target:py(t),camera:new Io(-1,1,1,-1,1,100),matrix:new Ye,texelWorld:1,depthRange:1});this.depthMaterial=Gd(),this.uniforms={uShadowMap0:{value:this.cascades[0].target.depthTexture},uShadowMap1:{value:this.cascades[1].target.depthTexture},uShadowMap2:{value:this.cascades[2].target.depthTexture},uShadowMat0:{value:this.cascades[0].matrix},uShadowMat1:{value:this.cascades[1].matrix},uShadowMat2:{value:this.cascades[2].matrix},uCascadeFar:{value:new k(Fn[0],Fn[1],Fn[2])},uCascadeTexelWorld:{value:new k(1,1,1)},uCascadeDepth:{value:new k(1,1,1)},uShadowTexel:{value:1/t},uShadowStrength:{value:0}}}update(e,t,i,a,s,o=[]){const r=this.uniforms,l=Ic.smoothstep(a.y,hy,uy);if(!this.enabled||l<=0){r.uShadowStrength.value=0;return}const c=s<.8;this.setSize(c?Math.min(this.budget.shadowCascadeSize,1024):this.budget.shadowCascadeSize);const h=c?Math.min(this.budget.shadowCascadeCount,2):this.budget.shadowCascadeCount;for(let w=0;w<h;w++)this.fit(this.cascades[w],i,a,w);const u=e.getRenderTarget(),f=t.overrideMaterial,p=e.autoClear;t.overrideMaterial=this.depthMaterial,e.autoClear=!1;for(let w=0;w<h;w++){const g=this.cascades[w];if(g.camera.layers.set(hs),e.setRenderTarget(g.target),e.clear(!1,!0,!1),e.render(t,g.camera),o.length&&w<cy){t.overrideMaterial=null;for(const m of o)e.render(m,g.camera);t.overrideMaterial=this.depthMaterial}}e.autoClear=p,t.overrideMaterial=f,e.setRenderTarget(u),r.uShadowMat0.value.copy(this.cascades[0].matrix),r.uShadowMat1.value.copy(this.cascades[1].matrix),r.uShadowMat2.value.copy(this.cascades[2].matrix),r.uCascadeTexelWorld.value.set(this.cascades[0].texelWorld,this.cascades[1].texelWorld,this.cascades[2].texelWorld),r.uCascadeDepth.value.set(this.cascades[0].depthRange,this.cascades[1].depthRange,this.cascades[2].depthRange),r.uCascadeFar.value.set(Fn[0],Fn[1],h>2?Fn[2]:Fn[1]),r.uShadowTexel.value=1/this.size,r.uShadowStrength.value=l}fit(e,t,i,a){const s=a===0?t.near:Fn[a-1],o=Fn[a],r=Math.tan(Ic.degToRad(t.fov*.5)),l=r*t.aspect,c=l*l+r*r;let h,u;c>=(o-s)/(o+s)?(h=-o,u=o*Math.sqrt(c)):(h=-.5*(o+s)*(1+c),u=.5*Math.sqrt((o-s)*(o-s)+2*(o*o+s*s)*c+(o+s)*(o+s)*c*c)),Us.set(0,0,h).applyMatrix4(t.matrixWorld),Mr.set(0,1,0),Math.abs(i.y)>.999&&Mr.set(0,0,1),Lh.lookAt(i,my.set(0,0,0),Mr),Os.setFromRotationMatrix(Lh),Ih.copy(Os).invert();const f=2*u/this.size;Zi.copy(Us).applyQuaternion(Ih),Zi.x=Math.round(Zi.x/f)*f,Zi.y=Math.round(Zi.y/f)*f,Us.copy(Zi).applyQuaternion(Os);const p=e.camera;p.quaternion.copy(Os),p.position.copy(Us).addScaledVector(i,u+Ph),p.updateMatrixWorld(!0);const w=u+f;p.left=-w,p.right=w,p.top=w,p.bottom=-w,p.near=1,p.far=2*u+2*Ph,p.updateProjectionMatrix(),e.matrix.multiplyMatrices(p.projectionMatrix,p.matrixWorldInverse),e.texelWorld=f,e.depthRange=p.far-p.near}setSize(e){if(e!==this.size){this.size=e;for(const t of this.cascades)t.target.setSize(e,e);this.uniforms.uShadowMap0.value=this.cascades[0].target.depthTexture,this.uniforms.uShadowMap1.value=this.cascades[1].target.depthTexture,this.uniforms.uShadowMap2.value=this.cascades[2].target.depthTexture}}dispose(){for(const e of this.cascades)e.target.dispose();this.depthMaterial.dispose()}}const vy=.5,Vd=`
uniform sampler2D uUrban;
uniform float uUrbanExtent;
uniform float uFlatBounce;
uniform float uGroundDebug;

const float SHADOW_TARGET = ${vy.toFixed(4)};

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
`;function Wd(){return{uUrban:{value:null},uUrbanExtent:{value:1},uFlatBounce:{value:0},uGroundDebug:{value:0}}}const us=9;function zl(){return new Float32Array(us*3)}const fc=Math.sqrt(1/(4*Math.PI)),qa=Math.sqrt(3/(4*Math.PI)),so=.5*Math.sqrt(15/Math.PI),Xd=.25*Math.sqrt(5/Math.PI),$d=.25*Math.sqrt(15/Math.PI),pc=Math.PI,Ya=2*Math.PI/3,ni=Math.PI/4,wy=[pc,Ya,Ya,Ya,ni,ni,ni,ni,ni],xo=new Float32Array(us);function qd(n,e,t,i){i[0]=fc,i[1]=qa*e,i[2]=qa*t,i[3]=qa*n,i[4]=so*n*e,i[5]=so*e*t,i[6]=Xd*(3*t*t-1),i[7]=so*n*t,i[8]=$d*(n*n-e*e)}function xy(n,e,t,i,a,s,o,r){qd(e,t,i,xo);for(let l=0;l<us;l++){const c=xo[l]*r;n[l*3]+=a*c,n[l*3+1]+=s*c,n[l*3+2]+=o*c}}function yy(n,e,t,i,a){qd(e,t,i,xo);let s=0,o=0,r=0;for(let l=0;l<us;l++){const c=wy[l]*xo[l];s+=n[l*3]*c,o+=n[l*3+1]*c,r+=n[l*3+2]*c}a[0]=Math.max(0,s),a[1]=Math.max(0,o),a[2]=Math.max(0,r)}function xa(n,e,t){const i=zl();for(let a=0;a<3;a++)i[a]=n[a]*e/(pc*fc),i[3+a]=n[a]*t/(Ya*qa);return i}const zs=new Float32Array(3);function _y(n,e,t,i,a,s){yy(n,e,t,i,zs);for(let o=0;o<3;o++)if(!(zs[o]>s)||!Number.isFinite(zs[o]))return!1;for(let o=0;o<3;o++){const r=a[o]/zs[o];if(!Number.isFinite(r))return!1;for(let l=0;l<us;l++)n[l*3+o]*=r}return!0}const mc=[[0,0,-1,0,-1,0,1,0,0],[0,0,1,0,-1,0,-1,0,0],[1,0,0,0,0,1,0,1,0],[1,0,0,0,0,-1,0,-1,0],[1,0,0,0,-1,0,0,0,1],[-1,0,0,0,-1,0,0,0,-1]],aa=mc.length;function by(n,e,t,i){const a=mc[n],s=a[0]*e+a[3]*t+a[6],o=a[1]*e+a[4]*t+a[7],r=a[2]*e+a[5]*t+a[8],l=1/Math.sqrt(s*s+o*o+r*r);i[0]=s*l,i[1]=o*l,i[2]=r*l}function Bs(n,e){return Math.atan2(n*e,Math.sqrt(n*n+e*e+1))}function My(n,e,t,i){return Bs(e,i)-Bs(n,i)-Bs(e,t)+Bs(n,t)}const Hs=new Float32Array(3);function Sy(n,e,t){t.fill(0);const i=2/e;for(let a=0;a<aa;a++)for(let s=0;s<e;s++){const o=s*i-1,r=o+i,l=(o+r)*.5;for(let c=0;c<e;c++){const h=c*i-1,u=h+i,f=(h+u)*.5;by(a,f,l,Hs);const p=((a*e+s)*e+c)*4;xy(t,Hs[0],Hs[1],Hs[2],n[p],n[p+1],n[p+2],My(h,u,o,r))}}}const Oa=n=>n.toPrecision(9),ds=`
uniform vec3 uSH[9];

/** Sky irradiance for a surface normal. Clamped: see the note in sh.ts. */
vec3 shIrradiance(vec3 n) {
  vec3 e = ${Oa(pc*fc)} * uSH[0]
         + ${Oa(Ya*qa)} * (uSH[1] * n.y + uSH[2] * n.z + uSH[3] * n.x)
         + ${Oa(ni*so)} * (uSH[4] * n.x * n.y + uSH[5] * n.y * n.z + uSH[7] * n.x * n.z)
         + ${Oa(ni*Xd)} * uSH[6] * (3.0 * n.z * n.z - 1.0)
         + ${Oa(ni*$d)} * uSH[8] * (n.x * n.x - n.y * n.y);
  return max(e, vec3(0.0));
}
`,Ey=`
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
`,Ty=`
precision highp float;
out vec2 vUv;
void main() {
  vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2) * 2.0 - 1.0;
  vUv = p * 0.5 + 0.5;
  gl_Position = vec4(p, 1.0, 1.0);
}
`,Ay=3,Ry=6,Cy=2,Dy=`
precision highp float;
${Ey}

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

const int SLICES = ${Ay};
const int STEPS = ${Ry};

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
      float d = radiusPx * pow((float(si) + 1.0 + stepOffset) / float(STEPS), ${Cy.toFixed(1)});
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
`,Py=`
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
`,No=`
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
`;function Uo(){return{uAo:{value:null},uAoStrength:{value:0},uAoInvResolution:{value:new Ne(1/1920,1/1080)}}}function Ly(){const n=new At;return n.setAttribute("position",new dt(new Float32Array(9),3)),n.boundingSphere=new rn(new k,1/0),n}const Fh=.5,Sr=new Ne;class Iy{enabled=!0;depthTarget;rawTarget;blurTarget;depthMaterial;scene=new mn;blurScene=new mn;camera=new Io(-1,1,1,-1,0,1);uniforms;blurUniforms;frameSize=new Ne(1,1);readback=null;constructor(e){const t=this.aoSize(e);this.depthTarget=Fy(t.x,t.y);const i={type:wn,format:gt,minFilter:Ze,magFilter:Ze,depthBuffer:!1,stencilBuffer:!1};this.rawTarget=new Rt(t.x,t.y,i),this.blurTarget=new Rt(t.x,t.y,i),this.depthMaterial=Gd(),this.uniforms={uDepth:{value:this.depthTarget.depthTexture},uTexel:{value:new Ne(1/t.x,1/t.y)},uViewScale:{value:new Ne(1,1)},uViewToWorld:{value:new He},uNear:{value:2},uFar:{value:2e5},uFocalPx:{value:1},uRadius:{value:14},uMaxRadiusPx:{value:96},uFalloffStart:{value:.7},uFade:{value:new Ne(1200,3e3)}},this.blurUniforms={uSource:{value:this.rawTarget.texture},uDepth:{value:this.depthTarget.depthTexture},uTexel:{value:new Ne(1/t.x,1/t.y)},uNear:{value:2},uFar:{value:2e5}};const a=(s,o,r)=>{const l=new lt(Ly(),new Bt({vertexShader:Ty,fragmentShader:o,uniforms:r,glslVersion:It,depthTest:!1,depthWrite:!1}));l.frustumCulled=!1,s.add(l)};a(this.scene,Dy,this.uniforms),a(this.blurScene,Py,this.blurUniforms)}get texture(){return this.blurTarget.texture}aoSize(e){return e.getDrawingBufferSize(Sr),new Ne(Math.max(1,Math.floor(Sr.x*Fh)),Math.max(1,Math.floor(Sr.y*Fh)))}resize(e){const t=this.aoSize(e);t.x===this.rawTarget.width&&t.y===this.rawTarget.height||(this.depthTarget.setSize(t.x,t.y),this.rawTarget.setSize(t.x,t.y),this.blurTarget.setSize(t.x,t.y),this.uniforms.uDepth.value=this.depthTarget.depthTexture,this.blurUniforms.uDepth.value=this.depthTarget.depthTexture,this.uniforms.uTexel.value.set(1/t.x,1/t.y),this.blurUniforms.uTexel.value.set(1/t.x,1/t.y))}render(e,t,i,a=[]){if(!this.enabled)return;this.resize(e),e.getDrawingBufferSize(this.frameSize);const s=e.getRenderTarget(),o=t.overrideMaterial,r=e.autoClear,l=i.layers.mask;if(t.overrideMaterial=this.depthMaterial,e.autoClear=!1,i.layers.set(hs),e.setRenderTarget(this.depthTarget),e.clear(!1,!0,!1),e.render(t,i),a.length){t.overrideMaterial=null;for(const h of a)e.render(h,i)}i.layers.mask=l,t.overrideMaterial=o,e.autoClear=r;const c=Math.tan(i.fov*Math.PI/360);this.uniforms.uViewScale.value.set(c*i.aspect,c),this.uniforms.uViewToWorld.value.setFromMatrix4(i.matrixWorld),this.uniforms.uNear.value=i.near,this.uniforms.uFar.value=i.far,this.blurUniforms.uNear.value=i.near,this.blurUniforms.uFar.value=i.far,this.uniforms.uFocalPx.value=this.rawTarget.height/(2*c),e.setRenderTarget(this.rawTarget),e.render(this.scene,this.camera),e.setRenderTarget(this.blurTarget),e.render(this.blurScene,this.camera),e.setRenderTarget(s)}measure(e){const t=this.blurTarget.width,i=this.blurTarget.height,a=t*i*4;(!this.readback||this.readback.length!==a)&&(this.readback=new Uint16Array(a));const s=this.readback;e.readRenderTargetPixels(this.blurTarget,0,0,t,i,s);const o=Ed.fromHalfFloat;let r=0,l=0,c=1;const h=t*i;for(let u=0;u<h;u++){const f=o(s[u*4+3]);r+=f,f<.95&&l++,c=Math.min(c,f)}return{mean:r/h,occluded:l/h,darkest:c}}apply(e,t){e.uAo.value=this.enabled?this.blurTarget.texture:null,e.uAoStrength.value=this.enabled?t:0,e.uAoInvResolution.value.set(1/this.frameSize.x,1/this.frameSize.y)}dispose(){this.depthTarget.dispose(),this.rawTarget.dispose(),this.blurTarget.dispose(),this.depthMaterial.dispose()}}function Fy(n,e){const t=new cs(n,e);return t.type=Tn,t.format=li,t.minFilter=vt,t.magFilter=vt,t.compareFunction=null,new Rt(n,e,{depthBuffer:!0,stencilBuffer:!1,depthTexture:t,format:Yn,type:_t})}const Yd=`
float farFieldFade(vec2 xz) {
  const float EDGE = ${is[is.length-1].extent.toFixed(1)};
  float r = max(abs(xz.x), abs(xz.y));
  return smoothstep(EDGE * 0.6, EDGE * 0.95, r);
}
`,ky=`
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
`,Ny=`
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
${jn}
${Yd}
${Ta}
${ko}
${Vd}
${ds}
${No}
${dc}

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
// Sky probe (wet ground mirrors it) and the rain state; see render/wet.glsl.ts.
uniform samplerCube uEnv;
uniform float uEnvMaxLod;
uniform float uPuddles;
uniform float uRain;
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
  if (uSnow > 0.01) {
    // Not paint: snow lies in drifts a few metres across and ripples finer
    // than that, and while it is thin (uSnow is cover from depth, see
    // lighting.ts) the high spots and the lawn show through in patches.
    float sN = vnoise2(vWorld.xz * 0.22) * 0.55 + vnoise2(vWorld.xz * 1.1 + 3.3) * 0.30
             + vnoise2(vWorld.xz * 4.7 + 9.1) * 0.15;
    float cover = smoothstep(1.0 - uSnow - 0.12, 1.0 - uSnow + 0.12, sN * 0.75 + 0.25 * flat_) * flat_;
    // Ploughed onto the verge: a white bank the length of every mapped road.
    float bankS = smoothstep(0.2, 0.6, roadCov) * (1.0 - smoothstep(0.9, 1.0, roadCov));
    cover = max(cover, bankS * uSnow);
    // Albedo ~0.8, not 0.95: fresh snow is 0.9 but a day of city air greys
    // it, and at 0.95 under daylight exposure every flat surface clipped.
    vec3 snowC = vec3(0.78, 0.80, 0.85) * (0.92 + 0.12 * sN);
    albedo = mix(albedo, snowC, cover);
    // The drifts catch the light: a gentle relief from the same field.
    float spx = max(fwidth(vWorld.x), fwidth(vWorld.z)) + 1e-4;
    vec3 sX = normalize(dFdx(vWorld));
    vec3 sY = normalize(dFdy(vWorld));
    n = normalize(n - (sX * dFdx(sN) + sY * dFdy(sN)) * 0.35 / spx * cover
                    * (1.0 - smoothstep(0.3, 2.0, spx)));
  }

  // Wet ground is darker and shinier. Both, or it reads as mud. Locally, as
  // on the roads: water lies in the dips and dries off the high ground first
  // (render/wet.glsl.ts), and lawn holds no standing water worth drawing.
  float flatW = smoothstep(0.85, 0.97, n.y);
  float wLow = wetLowness(vWorld.xz);
  // World position only, as in roads.ts, so the reflection pass agrees.
  float haloW = puddleHalo(uPuddles, wLow);
  float wl = max(wetLocal(uWetness, wLow, 0.0), 0.3 * haloW) * mix(1.0, 0.6, herb);
  float pud = puddleLocal(uPuddles, wLow, 0.0) * flatW * (1.0 - herb) * (1.0 - canopy * 0.5);
  albedo *= (1.0 - 0.42 * max(wl, haloW * (1.0 - herb))) * (1.0 - 0.55 * pud);
  if (pud > 0.01 || wl > 0.01) {
    n = normalize(mix(n, vec3(0.0, 1.0, 0.0), clamp(0.6 * wl * flatW + pud, 0.0, 1.0)));
    if (pud > 0.01 && vViewDist < 60.0) {
      vec2 rs = rainRipples(vWorld.xz, uTime, uRain) * smoothstep(60.0, 15.0, vViewDist);
      n = normalize(n + vec3(rs.x, 0.0, rs.y) * pud);
    }
  }

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
  // Wet ground mirrors the sky, as the roads do (and the screen-space pass
  // swaps in the city where it can see it). Not open water, which has its own
  // reflection below.
  float wetR = max(wl * 0.7 * flatW, pud) * (1.0 - clamp(water, 0.0, 1.0));
  if (wetR > 0.02) {
    vec3 rv = reflect(-v, n);
    vec3 env = textureLod(uEnv, rv, mix(0.8, 0.0, pud) * uEnvMaxLod).rgb;
    float fw = pow(1.0 - clamp(dot(v, n), 0.0, 1.0), 5.0);
    lit = mix(lit, env, (0.02 + 0.98 * fw) * wetR);
  }

  float gloss = max(max(wl * flatW, pud), water * uFlatWater);
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
    // Within a few hundred metres the lamps are REAL (render/lampposts.ts
    // over the road shader's pools), and a lattice dot 4 m across lying on
    // the pavement beside a kerb read as a glowing slab. The lattice is an
    // aerial stand-in, so it hands over as the ground comes close.
    lamps *= smoothstep(90.0, 320.0, vViewDist);
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
`;function Uy(n){return{...n,...Uo(),...Wd(),uDrape:{value:null},uSH:{value:xa([.28,.36,.5],.55,.45)},uCameraPos:{value:new k},uAmbient:{value:new me(.28,.36,.5)},uWetness:{value:0},uSnow:{value:0},uNight:{value:0},uNightGlow:{value:new me(0,0,0)},uMoonDir:{value:new k(0,-1,0)},uMoonLight:{value:new me(0,0,0)},uLandNear:{value:null},uLandFar:{value:null},uLandNearExtent:{value:1},uLandFarExtent:{value:1},uHasLand:{value:0},uTime:{value:0},uWind:{value:new Ne},uFlatWater:{value:0},uRoadMask:{value:null},uRoadMaskExtent:{value:1},uHasRoadMask:{value:0},uVeg:{value:null},uEnv:{value:null},uEnvMaxLod:{value:6},uPuddles:{value:0},uRain:{value:0},uVegExtent:{value:1},uHasVeg:{value:0},uExposure:{value:1},uSunSurface:{value:.105},uDebug:{value:0},uSunDir:{value:new k(0,1,0)},uSunColor:{value:new me(1,1,1)},uSunIntensity:{value:22},uMieG:{value:.76},uTurbidity:{value:1},...yn,uCamAltitude:{value:100},uMultiScatter:{value:.055}}}function kh(n,e,t,i,a,s,o){const r=n.segments,l=n.extent*2/r,c=(r+1)*(r+1),h=[];for(let d=0;d<=r;d++)h.push(0*(r+1)+d);for(let d=1;d<=r;d++)h.push(d*(r+1)+r);for(let d=r-1;d>=0;d--)h.push(r*(r+1)+d);for(let d=r-1;d>=1;d--)h.push(d*(r+1)+0);const u=new Float32Array((c+h.length)*3),f=new Float32Array((c+h.length)*2);for(let d=0;d<=r;d++)for(let v=0;v<=r;v++){const x=t-n.extent+v*l,y=i-n.extent+d*l,_=a.toLatLon(x,y),b=d*(r+1)+v;u[b*3]=x,u[b*3+1]=s(_.lat,_.lon),u[b*3+2]=y,f[b*2]=(_.lon-o.west)/(o.east-o.west),f[b*2+1]=(o.north-_.lat)/(o.north-o.south)}const p=400;for(let d=0;d<h.length;d++){const v=h[d],x=c+d;u[x*3]=u[v*3],u[x*3+1]=u[v*3+1]-p,u[x*3+2]=u[v*3+2],f[x*2]=f[v*2],f[x*2+1]=f[v*2+1]}const w={ring:n,inner:0,cx:t,cz:i,positions:u,gridCount:c,skirtRing:h},g=new At;g.setAttribute("position",new dt(u,3)),g.setIndex(gc(w,null)),g.computeVertexNormals();const m=g.getAttribute("normal").array;return g.dispose(),{ring:n,inner:e,cx:t,cz:i,positions:u,uvs:f,normals:m,gridCount:c,skirtRing:h}}function gc(n,e){const t=n.ring.segments,i=n.ring.extent*2/t,a=[],s=r=>{const l=n.positions[r*3],c=n.positions[r*3+2];if(n.inner>0){const h=n.inner-i;if(Math.abs(l-n.cx)<h&&Math.abs(c-n.cz)<h)return!0}if(e){const h=e.extent-i;if(Math.abs(l-e.x)<h&&Math.abs(c-e.z)<h)return!0}return!1};for(let r=0;r<t;r++)for(let l=0;l<t;l++){const c=r*(t+1)+l,h=r*(t+1)+l+1,u=(r+1)*(t+1)+l,f=(r+1)*(t+1)+l+1;s(c)||s(h)||s(u)||s(f)||a.push(c,u,h,h,u,f)}const o=n.skirtRing;for(let r=0;r<o.length-1;r++)a.push(o[r],n.gridCount+r,o[r+1]),a.push(o[r+1],n.gridCount+r,n.gridCount+r+1);return a}function Nh(n,e){const t=new At;return t.setAttribute("position",new dt(n.positions,3)),t.setAttribute("uv",new dt(n.uvs,2)),t.setAttribute("normal",new dt(n.normals,3)),t.setIndex(gc(n,e)),t.computeBoundingSphere(),t}class Oy{group=new vn;uniforms=[];heightAt;origin;sample;grids=[];meshes=[];textures=[];detail;constructor(e,t,i,a,s=is){this.origin=e;const o=(r,l)=>{for(const h of t)if(h.contains(r,l))return h.sample(r,l);const c=t[t.length-1];return c?c.sample(r,l):0};this.sample=o,this.heightAt=(r,l)=>{const c=e.toLatLon(r,l);return o(c.lat,c.lon)},this.detail={x:0,z:0,extent:s[0].extent};for(let r=0;r<s.length;r++){const l=s[r],c=r>=2?s[r-1].extent:0,h=i[Math.min(r,i.length-1)],u=kh(l,c,0,0,e,o,h.bbox),f=Nh(u,r===0?null:this.detail),p=Uh(h),w=Uy(a);w.uDrape.value=p,this.uniforms.push(w);const g=new Bt({vertexShader:ky,fragmentShader:Ny,uniforms:w,glslVersion:It}),m=new lt(f,g);m.frustumCulled=!1,m.renderOrder=r,l.extent<=6e3&&m.layers.enable(hs),this.group.add(m),this.grids.push(u),this.meshes.push(m),this.textures.push(p)}}get detailCentre(){return this.detail}recentreDetail(e,t,i){const a=this.detail,s={x:e,z:t,extent:this.grids[0].ring.extent},o=kh(this.grids[0].ring,0,e,t,this.origin,this.sample,i.bbox),r=Nh(o,null),l=Uh(i),c=this.meshes[0].geometry,h=this.textures[0];this.grids[0]=o,this.meshes[0].geometry=r,this.textures[0]=l,this.uniforms[0].uDrape.value=l,this.detail=s,c.dispose(),h.dispose();for(let u=1;u<this.grids.length;u++)!this.affected(u,a)&&!this.affected(u,s)||(this.meshes[u].geometry.setIndex(gc(this.grids[u],s)),this.meshes[u].geometry.computeBoundingSphere())}dispose(){for(const e of this.meshes)e.geometry.dispose(),e.material.dispose();for(const e of this.textures)e.dispose()}affected(e,t){const i=this.grids[e],a=i.ring.extent+t.extent;if(Math.abs(t.x)>=a||Math.abs(t.z)>=a)return!1;const s=i.inner-t.extent;return!(s>0&&Math.abs(t.x)<s&&Math.abs(t.z)<s)}}function Uh(n){const e=new Om(n.canvas);return e.colorSpace=Bn,e.wrapS=Tt,e.wrapT=Tt,e.anisotropy=16,e.generateMipmaps=!0,e.minFilter=Gn,e.needsUpdate=!0,e}const Er=(n,e,t)=>{const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)};function zy(n,e,t=0){const i=Math.max(50,n.visibility),a=Er(8e3,3e3,i),s=Math.max(0,3.912/i-t)*a;if(s<=0)return{sigma:0,top:e,soft:1};const o=700,r=250,l=n.low.base-e,c=n.low.cover>.5&&l<450,h=Math.max(0,n.tempC-n.dewC),u=c?Math.max(60,l)+40:90+90*Er(2,0,h),f=c?45:30,p=Er(3e3,800,i);return{sigma:s,top:e+o+(u-o)*p,soft:r+(f-r)*p}}const jd=`
uniform vec4 uFog;
uniform vec3 uFogAmb;
uniform vec3 uFogSun;

float fogSoftplus(float x) { return max(x, 0.0) + log(1.0 + exp(-abs(x))); }
/** Integral of the density profile from -inf-ish to h, per unit sigma. */
float fogCdf(float h) { return -uFog.z * fogSoftplus((uFog.y - h) / uFog.z); }
float fogDensity(float h) { return 1.0 / (1.0 + exp((h - uFog.y) / uFog.z)); }

/** Optical depth from ro along unit rd for dist metres. */
float fogDepth(vec3 ro, vec3 rd, float dist) {
  if (uFog.x <= 0.0) return 0.0;
  float h0 = ro.y;
  float h1 = ro.y + rd.y * dist;
  float dh = h1 - h0;
  // Exact for any slope; near horizontal the closed form divides small by
  // small, so the midpoint density is used instead (the error is nil there).
  float od = abs(dh) > 0.5
    ? (fogCdf(h1) - fogCdf(h0)) / rd.y
    : fogDensity(0.5 * (h0 + h1)) * dist;
  return uFog.x * max(od, 0.0);
}

/** In-scattered radiance at full opacity, for a view ray. */
vec3 fogRadiance(vec3 rd) {
  float c = dot(rd, uSunDir);
  float ph = mix(miePhase(c, 0.80), miePhase(c, -0.30), 0.35);
  return uFogAmb + uFogSun * (ph * 4.0 + 0.5);
}
`;function Kd(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Tr=new Int8Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function By(n){const e=new Uint8Array(512);for(let t=0;t<256;t++)e[t]=t;for(let t=255;t>0;t--){const i=n()*(t+1)|0,a=e[t];e[t]=e[i],e[i]=a}return e.copyWithin(256,0,256),e}function Ar(n){return n*n*n*(n*(n*6-15)+10)}function Rr(n,e,t,i,a){const s=Math.floor(n),o=Math.floor(e),r=Math.floor(t),l=n-s,c=e-o,h=t-r,u=(s%i+i)%i,f=(o%i+i)%i,p=(r%i+i)%i,w=(u+1)%i,g=(f+1)%i,m=(p+1)%i,d=Ar(l),v=Ar(c),x=Ar(h),y=(K,ne,le,Te,oe,Ue)=>{const Ie=a[a[a[K]+ne]+le]%12*3;return Tr[Ie]*Te+Tr[Ie+1]*oe+Tr[Ie+2]*Ue},_=y(u,f,p,l,c,h),b=y(w,f,p,l-1,c,h),E=y(u,g,p,l,c-1,h),R=y(w,g,p,l-1,c-1,h),M=y(u,f,m,l,c,h-1),S=y(w,f,m,l-1,c,h-1),A=y(u,g,m,l,c-1,h-1),D=y(w,g,m,l-1,c-1,h-1),I=_+d*(b-_),F=E+d*(R-E),O=M+d*(S-M),V=A+d*(D-A),z=I+v*(F-I),N=O+v*(V-O);return z+x*(N-z)}function da(n,e){const t=new Float32Array(n*n*n*3);for(let i=0;i<t.length;i++)t[i]=e();return t}function Cr(n,e,t,i,a){const s=Math.floor(n),o=Math.floor(e),r=Math.floor(t);let l=4;for(let c=-1;c<=1;c++){const h=r+c,u=(h%i+i)%i;for(let f=-1;f<=1;f++){const p=o+f,w=(p%i+i)%i;for(let g=-1;g<=1;g++){const m=s+g,d=(m%i+i)%i,v=((u*i+w)*i+d)*3,x=m+a[v]-n,y=p+a[v+1]-e,_=h+a[v+2]-t,b=x*x+y*y+_*_;b<l&&(l=b)}}}return 1-Math.min(1,Math.sqrt(l))}function Zd(n,e,t,i,a,s,o){return[Cr(n*i,e*i,t*i,i,a),Cr(n*i*2,e*i*2,t*i*2,i*2,s),Cr(n*i*4,e*i*4,t*i*4,i*4,o)]}function Jd(n,e){const t=new bd(e,n,n,n);return t.format=gt,t.type=_t,t.minFilter=Ze,t.magFilter=Ze,t.wrapS=ha,t.wrapT=ha,t.wrapR=ha,t.needsUpdate=!0,t}const Hy=64,Gy=32;function Vy(){const n=Kd(6221072),e=By(n),t=4,i=da(t,n),a=da(t*2,n),s=da(t*4,n),o=Hy,r=new Uint8Array(o*o*o*4),l=1/o;for(let c=0;c<o;c++){const h=c*l;for(let u=0;u<o;u++){const f=u*l;for(let p=0;p<o;p++){const w=p*l;let g=0;g+=.5*Rr(w*4,f*4,h*4,4,e),g+=.25*Rr(w*8,f*8,h*8,8,e),g+=.125*Rr(w*16,f*16,h*16,16,e);const m=Math.max(0,Math.min(1,g/(.875*1.4)+.5)),[d,v,x]=Zd(w,f,h,t,i,a,s),y=((c*o+u)*o+p)*4;r[y]=m*255|0,r[y+1]=d*255|0,r[y+2]=v*255|0,r[y+3]=x*255|0}}}return Jd(o,r)}function Wy(){const n=Kd(13859345),e=2,t=da(e,n),i=da(e*2,n),a=da(e*4,n),s=Gy,o=new Uint8Array(s*s*s*4),r=1/s;for(let l=0;l<s;l++)for(let c=0;c<s;c++)for(let h=0;h<s;h++){const[u,f,p]=Zd(h*r,c*r,l*r,e,t,i,a),w=((l*s+c)*s+h)*4;o[w]=u*255|0,o[w+1]=f*255|0,o[w+2]=p*255|0,o[w+3]=255}return Jd(s,o)}function Bl(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}const Xy=(()=>{let n=0;const e=1e3;for(let t=0;t<e;t++){const i=(t+.5)/e;n+=Bl(0,.2,i)*Bl(1,.6,i)}return n/e})(),la=20;function $y(n){const e=n.image.data,t=n.image.width,i=t*t*t,a=3,s=[],o=[];for(let c=0;c<i;c+=a){const h=c*4,u=e[h]/255,p=-(1-(e[h+1]/255*.625+e[h+2]/255*.25+e[h+3]/255*.125));s.push(Math.min(1,Math.max(0,(u-p)/(1-p)))),o.push(e[c*7919%i*4]/255)}const r=new Float32Array(la+1),l=new Float32Array(la+1);for(let c=1;c<=la;c++){const h=c/la;let u=0,f=0;for(let p=0;p<s.length;p++){const w=Math.min(1,Math.max(0,h*(.8+.4*o[p])));u+=Math.min(1,Math.max(0,(s[p]-(1-w))/Math.max(w,1e-6))),f+=Bl(1-h,1-.35*h,s[p])}r[c]=u/s.length,l[c]=f/s.length}return{deck:r,cirrus:l}}function Dr(n,e){const t=Math.min(1,Math.max(0,e))*la,i=Math.min(la-1,Math.floor(t)),a=t-i;return n[i]*(1-a)+n[i+1]*a}const qy="skycast",Gt="tiles",ln="index",Yy=2,ya=720*3600*1e3,vc=600*1e3,Hl=1/0,jy=512*1024*1024,Ky=.4,Zy=.8,Jy=12*3600*1e3;let Gs=null;function Oo(){return Gs||(Gs=new Promise(n=>{let e;try{e=indexedDB.open(qy,Yy)}catch{n(null);return}e.onupgradeneeded=()=>{const t=e.result;t.objectStoreNames.contains(Gt)||t.createObjectStore(Gt,{keyPath:"url"}),e.transaction&&t.objectStoreNames.contains(Gt)&&e.transaction.objectStore(Gt).clear(),t.objectStoreNames.contains(ln)||t.createObjectStore(ln,{keyPath:"url"}).createIndex("at","at")},e.onsuccess=()=>n(e.result),e.onerror=()=>n(null),e.onblocked=()=>n(null)}),Gs)}let Wa=null;function Qy(n){return Wa||(Wa=(async()=>{try{await navigator.storage?.persist?.()}catch{}let e=jy;try{const i=await navigator.storage?.estimate?.();i?.quota&&(e=Math.max(64*1024*1024,i.quota*Ky))}catch{}const t=await new Promise(i=>{try{const s=n.transaction(ln,"readonly").objectStore(ln).getAll();s.onsuccess=()=>i(s.result.reduce((o,r)=>o+r.size,0)),s.onerror=()=>i(0)}catch{i(0)}});return{budget:e,total:t}})(),Wa)}async function e_(n,e){const t=e.budget*Zy;e.total<=t||await new Promise(i=>{try{const a=n.transaction([Gt,ln],"readwrite"),s=a.objectStore(ln),o=a.objectStore(Gt),r=s.index("at").openCursor();r.onsuccess=()=>{const l=r.result;if(!l||e.total<=t){i();return}const c=l.value;o.delete(c.url),s.delete(c.url),e.total-=c.size,l.continue()},r.onerror=()=>i(),a.onabort=()=>i()}catch{i()}})}const t_=typeof location<"u"&&new URLSearchParams(location.search).has("nocache");async function yo(n,e){if(t_)return null;const t=await Oo();return t?new Promise(i=>{try{const s=t.transaction(Gt,"readonly").objectStore(Gt).get(n);s.onsuccess=()=>{const o=s.result;if(!o||Date.now()-o.at>e){i(null);return}Date.now()-o.at>Jy&&n_(n),i(o.body)},s.onerror=()=>i(null)}catch{i(null)}}):null}async function n_(n){const e=await Oo();if(e)try{const t=e.transaction([Gt,ln],"readwrite"),i=Date.now(),a=t.objectStore(Gt),s=a.get(n);s.onsuccess=()=>{const l=s.result;l&&a.put({...l,at:i})};const o=t.objectStore(ln),r=o.get(n);r.onsuccess=()=>{const l=r.result;l&&o.put({...l,at:i})}}catch{}}async function wc(n,e){const t=await Oo();if(!t)return;const i=await Qy(t);if(!(e.byteLength>i.budget)){try{const a=Date.now(),s=t.transaction([Gt,ln],"readwrite");s.objectStore(Gt).put({url:n,at:a,body:e});const o=s.objectStore(ln),r=o.get(n);r.onsuccess=()=>{const l=r.result;l&&(i.total-=l.size)},o.put({url:n,at:a,size:e.byteLength}),i.total+=e.byteLength}catch{return}i.total>i.budget&&await e_(t,i)}}const Pr=new Map;function as(n,e=ya){const t=Pr.get(n);if(t)return t;const i=(async()=>{const a=await yo(n,e);if(a)return a;const s=await fetch(n,{mode:"cors",credentials:"omit"});if(!s.ok)throw new Error(`${s.status} ${s.statusText} for ${n}`);if((s.headers.get("content-type")??"").includes("text/html")&&!/\.html?($|\?)/.test(n))throw new Error(`${n} returned an HTML page, not an asset (likely a 404 served as the app shell)`);const r=await s.arrayBuffer();return wc(n,r),r})().finally(()=>Pr.delete(n));return Pr.set(n,i),i}async function zo(n,e=ya){const t=await as(n,e);return JSON.parse(new TextDecoder().decode(t))}async function Gl(n,e=ya){const t=await as(n,e);return createImageBitmap(new Blob([t]))}async function i_(){const n=await Oo();if(!n)return;const e=n.transaction([Gt,ln],"readwrite");e.objectStore(Gt).clear(),e.objectStore(ln).clear(),Wa=null}const oo=.5,Qd=3,a_=.35,s_=.2;function _o(n){return 6.112*Math.exp(17.62*n/(243.12+n))}function Oh(n){const t=.01*Math.max(0,_o(n.tempC)-_o(Math.min(n.dewC,n.tempC)))*(1+.45*Math.max(0,n.windSpeed)),i=.18*Math.max(0,n.shortwave)*(3600/245e4);let a=.02+t+i;return a/=1+4*Math.max(0,n.liquidMm),n.tempC<0?a*.25:a}function ef(n,e,t){const i=Oh(e)*t,a=Math.max(0,e.liquidMm)*t;let s=n.film+a-i,o=0;s>oo&&(o=s-oo,s=oo),s=Math.max(0,s);let r=n.puddle+o*a_-(s_+.8*Oh(e))*t;return r=Math.min(Qd,Math.max(0,r)),{film:s,puddle:r}}const o_={film:0,puddle:0};function Vl(n,e=o_){const t=[];let i=e;const a=6;for(let s=0;s<n.length;s++){if(s>0){const o=n[s-1],r=n[s];for(let l=0;l<a;l++){const c=(l+.5)/a,h=(u,f)=>u+(f-u)*c;i=ef(i,{tempC:h(o.tempC,r.tempC),dewC:h(o.dewC,r.dewC),windSpeed:h(o.windSpeed,r.windSpeed),liquidMm:r.liquidMm,shortwave:h(o.shortwave,r.shortwave)},1/a)}}t.push(i)}return t}function Wl(n){return Math.pow(Math.min(1,Math.max(0,n.film/oo)),.6)}function Xl(n){return Math.min(1,Math.max(0,n.puddle/Qd))}function r_(n,e){const t=Math.max(5,Math.min(100,e));return n*Math.atan(.151977*Math.sqrt(t+8.313659))+Math.atan(n+t)-Math.atan(t-1.676331)+.00391838*Math.pow(t,1.5)*Math.atan(.023101*t)-4.686035}function l_(n,e){return 100*_o(Math.min(e,n))/_o(n)}function c_(n,e){const t=r_(n,l_(n,e)),i=Math.min(1,Math.max(0,(1.5-t)/1.5));return i*i*(3-2*i)}function bo(n,e,t,i,a){const s=Math.max(0,t)*1.4285714285714286,o=Math.max(0,e);let r=Math.max(n,o+s),l;if(o+s>.005?l=s/(o+s):l=c_(i,a),r<.005)return{kind:"none",snowFrac:l,rate:0};const c=l>.85?"snow":l<.15?"rain":"sleet";return r=Math.max(r,0),{kind:c,snowFrac:l,rate:r}}function tf(n,e,t){if(n>=95&&n<=99)return n===95?.75:1;const i=Math.min(1,Math.max(0,(e-1e3)/2e3)),a=Math.min(1,Math.max(0,t/3));return .6*i*a}function $l(n,e){let t=Math.imul(n|0,2654435761)^Math.imul(e|0,2246822519);return t^=t>>>15,t=Math.imul(t,739982445),t^=t>>>12,t=Math.imul(t,695872825),t^=t>>>15,(t>>>0)/4294967296}function nf(n){return Math.floor(n/36e5)}const ro=1.5,h_=14;function u_(n,e,t){if(t<=0)return null;const i=Math.min(.95,h_/60*ro*t);if($l(n*7919+13,e)>=i)return null;const a=l=>$l(n*31+l,e*17+l),s=1500+9e3*Math.sqrt(a(2)),o=a(3)*Math.PI*2,r=1+Math.floor(a(4)*4);return{start:e*ro+a(1)*ro*.6,dur:.08+.12*r*a(5),strokes:r,peak:(.45+.55*a(6))*Math.min(1,3e3/s+.35),x:Math.cos(o)*s,z:Math.sin(o)*s,ground:a(7)<.45,seed:Math.floor(a(8)*1e6)}}function d_(n,e){const t=e-n.start;if(t<0||t>n.dur+.3)return 0;let i=0;for(let a=0;a<n.strokes;a++){const s=n.strokes===1?0:n.dur*a/(n.strokes-1),o=t-s;if(o<0)continue;const r=o<.008?o/.008:Math.exp(-(o-.008)/.06);i=Math.max(i,r*(a===0?1:.55+.1*a))}return i*n.peak}function af(n,e,t){if(t<=0)return null;const i=Math.floor(e/ro);let a=null;for(let s=i-1;s<=i;s++){const o=u_(n,s,t);if(!o)continue;const r=d_(o,e);r>.002&&(!a||r>a.brightness)&&(a={flash:o,brightness:r})}return a}function sf(n,e){return 125*Math.max(0,n-e)}function of(n,e){const a=Math.max(1,Math.min(100,e))/100,s=Math.log(a)+17.625*n/(243.04+n);return 243.04*s/(17.625-s)}const f_={0:"Clear",1:"Mainly clear",2:"Partly cloudy",3:"Overcast",45:"Fog",48:"Freezing fog",51:"Light drizzle",53:"Drizzle",55:"Heavy drizzle",56:"Freezing drizzle",57:"Freezing drizzle",61:"Light rain",63:"Rain",65:"Heavy rain",66:"Freezing rain",67:"Freezing rain",71:"Light snow",73:"Snow",75:"Heavy snow",77:"Snow grains",80:"Rain showers",81:"Rain showers",82:"Violent rain showers",85:"Snow showers",86:"Heavy snow showers",95:"Thunderstorm",96:"Thunderstorm with hail",99:"Thunderstorm with hail"};function _a(n,e,t){return 1-(1-.92*n)*(1-.6*e)*(1-.28*t)}const p_={wetness:0,puddles:0,drift:{x:0,z:0}},rf=["temperature_2m","relative_humidity_2m","dew_point_2m","surface_pressure","wind_speed_10m","wind_direction_10m","wind_gusts_10m","visibility","precipitation","weather_code","is_day","cloud_cover","cloud_cover_low","cloud_cover_mid","cloud_cover_high","rain","showers","snowfall","snow_depth","cape","precipitation_probability","shortwave_radiation","wind_speed_850hPa","wind_direction_850hPa"].join(",");function ja(){const t=sf(18,10);return{time:new Date,live:!1,source:"simulated",tempC:18,dewC:10,humidity:60,pressureHpa:1013.25,windSpeed:4,windDir:270,gust:6,visibility:2e4,precip:0,precipKind:"none",snowFrac:0,snowfall:0,snowDepth:0,cape:0,precipProb:0,shortwave:400,windAloft:{speed:8,dir:270},wetness:0,puddles:0,storm:0,drift:{x:0,z:0},air:null,wmoCode:2,isDay:!0,low:{cover:.25,base:t,top:t+900},mid:{cover:.1,base:4200,top:5400},high:{cover:.15,base:9e3,top:10500},totalCover:.3,opacity:_a(.25,.1,.15),summary:"Partly cloudy"}}async function m_(n,e){const t=`https://api.open-meteo.com/v1/forecast?latitude=${n.toFixed(4)}&longitude=${e.toFixed(4)}&current=${rf}&wind_speed_unit=ms&timezone=UTC`;let i;try{i=(await zo(t,vc)).current}catch{return ja()}const a=3600/(i.interval&&i.interval>0?i.interval:3600);return i={...i,precipitation:(i.precipitation??0)*a,rain:(i.rain??0)*a,showers:(i.showers??0)*a,snowfall:(i.snowfall??0)*a},lf(i,new Date(i.time+"Z"),"observation",p_)}function lf(n,e,t,i){const a=n.temperature_2m,s=Number.isFinite(n.dew_point_2m)?n.dew_point_2m:of(a,n.relative_humidity_2m),o=n.weather_code|0,r=(n.rain??0)+(n.showers??0),l=bo(n.precipitation??0,r,n.snowfall??0,a,s),c=Math.max(120,sf(a,s)),h=n.cloud_cover_low/100,u=n.cloud_cover_mid/100,f=n.cloud_cover_high/100;return{time:e,live:!0,source:t,tempC:a,dewC:s,humidity:n.relative_humidity_2m,pressureHpa:n.surface_pressure,windSpeed:n.wind_speed_10m,windDir:n.wind_direction_10m,gust:n.wind_gusts_10m??n.wind_speed_10m,visibility:n.visibility>=24e3?6e4:n.visibility,precip:l.rate,precipKind:l.kind,snowFrac:l.snowFrac,snowfall:Math.max(0,n.snowfall??0),snowDepth:Math.max(0,n.snow_depth??0),cape:Math.max(0,n.cape??0),precipProb:n.precipitation_probability??0,shortwave:Math.max(0,n.shortwave_radiation??0),windAloft:{speed:Number.isFinite(n.wind_speed_850hPa)?n.wind_speed_850hPa:n.wind_speed_10m*1.8,dir:Number.isFinite(n.wind_direction_850hPa)?n.wind_direction_850hPa:n.wind_direction_10m},wetness:i.wetness,puddles:i.puddles,storm:tf(o,n.cape??0,l.rate),drift:i.drift,air:null,wmoCode:o,isDay:n.is_day===1,low:{cover:h,base:c,top:c+300+1400*h},mid:{cover:u,base:3800,top:4400+1800*u},high:{cover:f,base:8500,top:9400+1500*f},totalCover:n.cloud_cover/100,opacity:_a(h,u,f),summary:f_[o]??"Unknown"}}const zh=rf;function Bh(n,e,t){let i=(e-n+540)%360-180;return(n+i*t+360)%360}function cf(n,e){const t=(e+180)*Math.PI/180;return{x:Math.sin(t)*n,z:-Math.cos(t)*n}}function g_(n){const e=n.temperature_2m,t=Number.isFinite(n.dew_point_2m)?n.dew_point_2m:of(e,n.relative_humidity_2m),i=(n.rain??0)+(n.showers??0),a=bo(n.precipitation??0,i,n.snowfall??0,e,t);return{tempC:e,dewC:t,windSpeed:n.wind_speed_10m,liquidMm:a.rate*(1-a.snowFrac),shortwave:n.shortwave_radiation??0}}function v_(n,e){const t=Vl(n.map(g_)),i=[];let a=0,s=0;for(let o=0;o<n.length;o++){if(o>0){const r=n[o-1],l=n[o],c=f=>cf(Number.isFinite(f.wind_speed_850hPa)?f.wind_speed_850hPa:f.wind_speed_10m*1.8,Number.isFinite(f.wind_direction_850hPa)?f.wind_direction_850hPa:f.wind_direction_10m),h=c(r),u=c(l);a+=.5*(h.x+u.x)*e,s+=.5*(h.z+u.z)*e}i.push({wetness:Wl(t[o]),puddles:Xl(t[o]),drift:{x:a,z:s}})}return i}async function w_(n,e){const t=`https://api.open-meteo.com/v1/forecast?latitude=${n.toFixed(4)}&longitude=${e.toFixed(4)}&hourly=${zh}&wind_speed_unit=ms&timezone=auto&timeformat=unixtime&forecast_days=7&past_days=1`;let i;try{i=await zo(t,vc)}catch{return null}const a=i.hourly?.time??[];if(a.length<2)return null;const s=a.map(p=>p*1e3),o=p=>i.hourly[p]??[],r={};for(const p of zh.split(","))r[p]=o(p);const l=(p,w,g)=>{const m=r[p]?.[w];return typeof m=="number"&&Number.isFinite(m)?m:g},c=p=>({time:"",temperature_2m:l("temperature_2m",p,15),relative_humidity_2m:l("relative_humidity_2m",p,60),dew_point_2m:l("dew_point_2m",p,NaN),surface_pressure:l("surface_pressure",p,1013.25),wind_speed_10m:l("wind_speed_10m",p,3),wind_direction_10m:l("wind_direction_10m",p,270),wind_gusts_10m:l("wind_gusts_10m",p,l("wind_speed_10m",p,3)),visibility:l("visibility",p,24e3),precipitation:l("precipitation",p,0),weather_code:l("weather_code",p,2),is_day:l("is_day",p,1),cloud_cover:l("cloud_cover",p,0),cloud_cover_low:l("cloud_cover_low",p,0),cloud_cover_mid:l("cloud_cover_mid",p,0),cloud_cover_high:l("cloud_cover_high",p,0),rain:l("rain",p,0),showers:l("showers",p,0),snowfall:l("snowfall",p,0),snow_depth:l("snow_depth",p,0),cape:l("cape",p,0),precipitation_probability:l("precipitation_probability",p,0),shortwave_radiation:l("shortwave_radiation",p,0),wind_speed_850hPa:l("wind_speed_850hPa",p,NaN),wind_direction_850hPa:l("wind_direction_850hPa",p,NaN)}),h=s.map((p,w)=>c(w)),u=v_(h,(s[1]-s[0])/1e3),f=p=>{const w=p.getTime(),g=s[1]-s[0],m=(w-s[0])/g,d=Math.max(0,Math.min(s.length-2,Math.floor(m))),v=Math.max(0,Math.min(1,m-d)),x=h[d],y=h[d+1],_=(A,D)=>A+(D-A)*v,b=v<.5?x:y,E={temperature_2m:_(x.temperature_2m,y.temperature_2m),relative_humidity_2m:_(x.relative_humidity_2m,y.relative_humidity_2m),dew_point_2m:_(x.dew_point_2m,y.dew_point_2m),surface_pressure:_(x.surface_pressure,y.surface_pressure),wind_speed_10m:_(x.wind_speed_10m,y.wind_speed_10m),wind_direction_10m:Bh(x.wind_direction_10m,y.wind_direction_10m,v),wind_gusts_10m:_(x.wind_gusts_10m,y.wind_gusts_10m),visibility:_(x.visibility,y.visibility),precipitation:_(x.precipitation,y.precipitation),weather_code:b.weather_code,is_day:b.is_day,cloud_cover:_(x.cloud_cover,y.cloud_cover),cloud_cover_low:_(x.cloud_cover_low,y.cloud_cover_low),cloud_cover_mid:_(x.cloud_cover_mid,y.cloud_cover_mid),cloud_cover_high:_(x.cloud_cover_high,y.cloud_cover_high),rain:_(x.rain,y.rain),showers:_(x.showers,y.showers),snowfall:_(x.snowfall,y.snowfall),snow_depth:_(x.snow_depth,y.snow_depth),cape:_(x.cape,y.cape),precipitation_probability:_(x.precipitation_probability,y.precipitation_probability),shortwave_radiation:_(x.shortwave_radiation,y.shortwave_radiation),wind_speed_850hPa:_(x.wind_speed_850hPa,y.wind_speed_850hPa),wind_direction_850hPa:Bh(x.wind_direction_850hPa,y.wind_direction_850hPa,v)},R=u[d],M=u[d+1],S={wetness:_(R.wetness,M.wetness),puddles:_(R.puddles,M.puddles),drift:{x:_(R.drift.x,M.drift.x),z:_(R.drift.z,M.drift.z)}};return lf(E,p,"forecast",S)};return{timezone:i.timezone??"UTC",utcOffsetSeconds:i.utc_offset_seconds??0,start:new Date(s[0]),end:new Date(s[s.length-1]),at:f}}const Lr=`
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
`,x_=`
precision highp float;
precision highp sampler3D;
in vec2 vUv;
in vec3 vRayDir;
out vec4 fragColor;

${jn}
${Yd}
${Ta}
${jd}

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
// Far-field precipitation under the deck: x = extinction at full shaft (1/m),
// y = ground height (m), z = fall speed (m/s, for the wind slant), w = snow 0..1.
uniform vec4  uShafts;
uniform vec2  uDrift;
// 0 stratiform rain (a uniform veil), 1 convective (showers, storms: the rain
// is in cells a few kilometres across with dry air between them).
uniform float uShaftCell;
// Lightning inside the deck: where, and its colour times brightness.
uniform vec3  uFlashPos;
uniform vec3  uFlashCol;       // metres the cloud field has been carried, (east, south)
// Expected shape density of each deck (before the vertical profile) and the
// expected cirrus veil at the current cover, measured off the shape volume
// (noise3d.ts meanDensityTables).
uniform float uLowMean;
uniform float uMidMean;
uniform float uHighMean;
// Angle one half-res cloud pixel subtends, radians.
uniform float uPixelAngle;

// SATELLITE CLOUD MASK (src/data/satellite.ts, src/app/satfield.ts). Two
// frames, each an RGBA8 grid about the origin: r cloudiness, g top height
// above the ground (0..12 km), b data present, a top height known. Per frame
// xy is how far the wind has carried the clouds since it was taken (m,
// east/south) and z its weight, the time fade already in it; 0 is off.
uniform sampler2D uSatA;
uniform sampler2D uSatB;
uniform vec4  uSatOffA;
uniform vec4  uSatOffB;
uniform float uSatHalf;
// How far the satellite may speak for the low, mid and high deck (IR cannot
// see a deck whose top is near the ground's temperature).
uniform vec3  uSatConf;
uniform float uSatGround;
// sampleMeanTable(deck) for the march's far-field hand-over, cover = i / 20.
uniform float uDeckMean[21];

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
float deckMean(float cover) {
  float x = clamp(cover, 0.0, 1.0) * 20.0;
  int i = min(19, int(floor(x)));
  return mix(uDeckMean[i], uDeckMean[i + 1], x - float(i));
}

vec4 satFrame(sampler2D tex, vec4 off, vec2 xz, float offScale) {
  vec2 uv = (xz - off.xy * offScale) / (2.0 * uSatHalf) + 0.5;
  vec4 t = texture(tex, uv);
  // Fade out over the last 8% of the window, into the forecast's field.
  vec2 e = smoothstep(vec2(0.0), vec2(0.08), uv) * smoothstep(vec2(1.0), vec2(0.92), uv);
  float w = off.z * e.x * e.y * t.b;
  // Divided by the data flag, because the bilinear tap blends a texel with
  // data against one without, and the one without holds zeros, not clear sky.
  // g holds the top as a fraction of 12 km (satellite.ts maskTexels).
  return vec4(t.r / max(t.b, 1e-3), t.g / max(t.a, 1e-3) * 12000.0, t.a / max(t.b, 1e-3), 1.0) * w;
}

/**
 * The satellite at a point: (cloudiness, top height m above the ground, top
 * known 0..1, weight). Weight 0 is the forecast's field alone. offScale
 * carries cirrus on its own, faster, wind.
 */
vec4 satSample(vec2 xz, float offScale) {
  if (uSatOffA.z + uSatOffB.z < 1e-3) return vec4(0.0);
  vec4 a = uSatOffA.z > 1e-3 ? satFrame(uSatA, uSatOffA, xz, offScale) : vec4(0.0);
  vec4 b = uSatOffB.z > 1e-3 ? satFrame(uSatB, uSatOffB, xz, offScale) : vec4(0.0);
  float w = a.w + b.w;
  if (w < 1e-4) return vec4(0.0);
  return vec4((a.xyz + b.xyz) / w, w);
}

/**
 * A deck's local cover where the satellite speaks for it, and how much it
 * does (k). Satellite pixels are one per 2 km: they say WHERE the deck is,
 * and the noise below still draws the billows inside it.
 *
 * A cold top well above this deck is a higher deck hiding it: the satellite
 * cannot see through, so this deck keeps the forecast's field there. A top
 * under this deck's base is a lower deck's cloud, so this deck is clear.
 */
float satDeckCover(vec4 sat, float base, float top, float conf, out float k) {
  k = 0.0;
  if (sat.w <= 0.0) return 0.0;
  float topAbs = uSatGround + sat.y;
  float hidden = sat.z * sat.x * smoothstep(top + 500.0, top + 2000.0, topAbs);
  float lower = sat.z * (1.0 - smoothstep(base - 800.0, base, topAbs));
  k = sat.w * conf * (1.0 - hidden);
  return sat.x * (1.0 - lower);
}

float slabDensity(vec3 p, float cover, float base, float top, float scale, vec4 sat, float conf) {
  if (cover <= 0.01) return 0.0;
  float thickness = max(top - base, 1.0);

  // The WEATHER field: one low-frequency tap at a fixed depth, so it varies
  // over kilometres of ground and not at all with height. It is what stops a
  // full overcast being a plane. The reported coverage is the average over the
  // sky, so letting it vary about that average is not inventing weather, it is
  // declining to pretend the deck is uniform.
  float w = texture(uShape, vec3((p.xz - uDrift) * scale * 0.25, 0.37)).r;

  float localCover = clamp(cover * (0.8 + 0.4 * w), 0.0, 1.0);
  float satK;
  float satCover = satDeckCover(sat, base, top, conf, satK);
  localCover = mix(localCover, satCover, satK);
  if (localCover <= 0.01) return 0.0;
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

  // Carried by the wind aloft integrated over SCENE time (Weather.drift), not
  // by the animation clock: scrubbing an afternoon moves the deck across the
  // city by the distance the wind really carried it, and returning to a time
  // returns the clouds to where they were.
  vec3 q = p;
  q.xz -= uDrift;
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

const float PROFILE_MEAN = ${Xy.toFixed(5)};

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
float meanDensity(vec3 p, vec4 sat) {
  float d = 0.0;
  float k;
  if (uLow.x > 0.06) {
    float c = satDeckCover(sat, uLow.y, uLow.z, uSatConf.x, k);
    d += mix(uLowMean, deckMean(c), k) * slabProfile(p.y, uLow.y, uLow.z) * (1.0 + uPrecip * 0.6);
  }
  if (uMid.x > 0.06) {
    float c = satDeckCover(sat, uMid.y, uMid.z, uSatConf.y, k);
    d += mix(uMidMean, deckMean(c), k) * slabProfile(p.y, uMid.y, uMid.z) * 0.75;
  }
  return d;
}

// sat is satSample at (or near) p: the light march reuses its view
// sample's, since its steps are a few hundred metres and a texel is 2 km.
float cloudDensity(vec3 p, vec4 sat) {
  float d = slabDensity(p, uLow.x, uLow.y, uLow.z, 0.00055, sat, uSatConf.x) * (1.0 + uPrecip * 0.6);
  d += slabDensity(p, uMid.x, uMid.y, uMid.z, 0.00030, sat, uSatConf.y) * 0.75;
  return d;
}

void main() {
  vec3 rd = normalize(vRayDir);
  // The sun the clouds are lit by, through any smoke or dust over them: the
  // aerosol part of the transmittance from a typical deck height, once per
  // pixel. Exactly white in clean air, so a clean day is lit as before.
  vec3 sunCol = uSunColor * aerosolSunT(atmoOrigin(2000.0), uSunDir);
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
  // The surface's distance for the fog, kept before the far-field branch
  // below moves sceneDist off to infinity.
  float fogDist = 1.0e7;
  if (d < 1.0) {
    vec4 clip = vec4(vUv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0);
    vec4 view = uInvProj2 * clip;
    sceneDist = length(view.xyz / view.w);
    fogDist = sceneDist;
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
        vec4 sat = satSample(p.xz, 1.0);
        float dens = (lod < 0.999 ? mix(cloudDensity(p, sat), meanDensity(p, sat), lod) : meanDensity(p, sat))
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
            shadow += cloudDensity(p + uSunDir * (lt + ls * 0.5), sat) * ls;
            lt += ls;
          }
          sunT = mix(exp(-shadow * SIGMA_LIGHT * (4.0 / 3.0)), 0.45, lod);
        }

        // Powder: the dark cores of a cloud seen against the light. Without
        // it clouds look like cotton wool with no interior.
        float powder = mix(1.0 - exp(-dens * 8.0), 1.0, lod);

        float sigma = dens * SIGMA_VIEW;
        vec3 stepT = exp(-vec3(sigma) * dt);

        vec3 sunColour = sunCol * uSunIntensity * uSunSurfaceCloud;
        vec3 lum = sunColour * (ph * 4.0 + 0.5) * sunT * mix(0.35, 1.0, powder)
                 + uAmbient * 0.9;

        // Rain shafts read as darker cloud bases.
        lum *= 1.0 - 0.35 * uPrecip * smoothstep(uLow.z, uLow.y, p.y);
        // A flash lights the deck from inside, strongest round the strike.
        lum += uFlashCol * 2.5 * exp(-length(p - uFlashPos) / 1800.0);

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
      vec3 lumH = sunCol * uSunIntensity * uSunSurfaceCloud * (phH * 4.0 + 0.5) * 0.45
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
      // Cirrus rides the faster wind near the tropopause: about twice the 850 hPa drift.
      vec2 q = (p.xz - uDrift * 2.0) * 0.00016;
      // Stretch the noise along one axis: cirrus is combed out by the wind. One
      // fixed slice of the shape volume, because cirrus has no depth to sample.
      float n = perlinWorley(vec3(q.x * 0.35, q.y * 2.4, 0.37));
      // The satellite's cold tops (over 6 km) are where the cirrus is. IR
      // sees thin cirrus poorly, and a warm top says nothing about a veil
      // above it, so where the top is known and low the forecast's cover
      // stays rather than clearing the veil.
      vec4 sat = satSample(p.xz, 2.0);
      float highCover = uHighCover;
      if (sat.w > 0.0) {
        float cold = smoothstep(5000.0, 7000.0, uSatGround + sat.y);
        float satHigh = mix(sat.x, sat.x * cold, sat.z);
        float k = sat.w * uSatConf.z * mix(1.0, cold * sat.x + (1.0 - sat.x), sat.z);
        highCover = mix(uHighCover, satHigh, k);
      }
      float veil = smoothstep(1.0 - highCover, 1.0 - highCover * 0.35, n);
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
      vec3 lit = sunCol * uSunIntensity * uSunSurfaceCloud * 2.2 + uAmbient * 1.2;
      float a = veil * 0.55 * highCover;
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

  // RAIN SHAFTS. The particles stop at ~18 m; past them the rain is a veil
  // hanging under the deck, heavier under the thicker parts of the cloud
  // field (the same weather tap slabDensity thresholds the deck with, so a
  // shaft is under a cloud and not under a gap) and slanted by the wind as it
  // falls. Marched coarsely (twenty-four steps with a stratified start): shafts are
  // kilometres wide and soft, and in street view this is the grey that
  // swallows the far end of a street in a downpour.
  if (uShafts.x > 0.0 && uLow.x > 0.06) {
    float base = uLow.y;
    float tEnd = min(fogDist, 25000.0);
    // Where the ray is below the base.
    float tTop = rd.y > 1e-4 ? (base - uCameraPos.y) / rd.y : 1.0e9;
    if (uCameraPos.y > base) tTop = -1.0;
    float t1 = min(tEnd, tTop);
    float t0 = 18.0;
    if (t1 > t0) {
      // Twenty-four: with fewer, each pixel's dithered samples straddled the
      // shaft edges differently and the veil broke into blocky 2x2 static.
      const int RN = 24;
      // Stratified like the cloud march's start (2x2 ordered + IGN inside the
      // quarter), for the same reason: the present pass's tent averages the
      // four ordered phases exactly, and IGN alone left moire stripes.
      ivec2 rpx = ivec2(gl_FragCoord.xy) & 1;
      const float RBAYER[4] = float[4](0.0, 2.0, 3.0, 1.0);
      float ign2 = (RBAYER[rpx.y * 2 + rpx.x]
        + fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))))) * 0.25;
      // Steps grow with distance: fine near, where the veil is seen against
      // the street, coarse far, where it is a shaft kilometres wide.
      float lr0 = log(t0), lr1 = log(t1);
      vec3 rainLum = uAmbient * 0.75 + sunCol * uSunIntensity * uSunSurfaceCloud * 0.35
                   + uFogAmb * 0.25;
      rainLum = mix(rainLum, rainLum * 1.35 + 0.02, uShafts.w);
      float tPrev = t0;
      vec3 rs = vec3(0.0);
      vec3 rt = vec3(1.0);
      for (int i = 0; i < RN; i++) {
        float tt = exp(mix(lr0, lr1, (float(i) + ign2) / float(RN)));
        float ds = tt - tPrev;
        tPrev = tt;
        vec3 p = uCameraPos + rd * tt;
        // Where this air's rain left the base: upwind by the fall time.
        vec2 src = p.xz - uWind * (base - p.y) / max(uShafts.z, 0.5);
        float wf = texture(uShape, vec3((src - uDrift) * 0.00055 * 0.25, 0.37)).r;
        // Under the satellite's cloud, not the noise's: 0.25 to 0.85 spans
        // the shaft ramps below from none to full.
        float sk;
        float sc = satDeckCover(satSample(src, 1.0), uLow.y, uLow.z, uSatConf.x, sk);
        wf = mix(wf, 0.25 + 0.6 * sc, sk);
        // Mean-preserving: the cellular pattern puts the same water in cores.
        float shaft = mix(smoothstep(0.30, 0.75, wf) * 0.8 + 0.2,
                          smoothstep(0.52, 0.78, wf) * 2.6 + 0.02, uShaftCell);
        // Evaporates a little on the way down, so the veil is densest at the
        // base and thins toward the ground (virga in dry air).
        float h = clamp((p.y - uShafts.y) / max(base - uShafts.y, 1.0), 0.0, 1.0);
        float dens = uShafts.x * shaft * mix(0.75, 1.0, h);
        float st = exp(-dens * ds);
        rs += rt * rainLum * (1.0 - st);
        rt *= st;
      }
      // Under the deck the veil is nearer than the deck on every ray, so it
      // goes in front of everything marched so far.
      scattered = rs + rt * scattered;
      through *= rt;
    }
  }

  // FOG, in front of everything the march saw (fog is on the ground and the
  // decks are above it; under a marine layer the fog runs up into the deck's
  // base, and the camera cannot be above a deck it is under). Closed form,
  // see render/fog.ts. The cloud's own light is dimmed by the fog in front of
  // it and the fog's light is added, exactly as the air was above.
  //
  // ...unless the lens is ABOVE the fog, looking down on a marine layer: then
  // the deck it looks down through is in front of the fog, not behind it,
  // and fog composited in front turned the sunlit deck top into grey soup
  // with the buildings under it glowing through.
  float fogT = exp(-fogDepth(uCameraPos, rd, fogDist));
  if (fogT < 0.99999) {
    vec3 fogL = fogRadiance(rd) * (1.0 - fogT);
    float above = uFog.x > 0.0 ? smoothstep(uFog.y, uFog.y + 2.0 * uFog.z, uCameraPos.y) : 0.0;
    vec3 front = fogL + fogT * scattered;
    vec3 behind = scattered + through * fogL;
    scattered = mix(front, behind, above);
    through *= fogT;
  }

  // rgb: light added by cloud. a: fraction of the world still visible.
  fragColor = vec4(scattered, through.g);
}
`,hf=`
uniform float uNight;
float bloomThreshold() { return mix(1.15, 0.085, uNight); }
float bloomStrength()  { return mix(0.10, 0.55, uNight); }
`,y_=`
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uScene;
uniform sampler2D uRefl;
uniform float uExposure;
${hf}

void main() {
  // Thresholded in EXPOSED linear, not in raw radiance. Exposure moves by
  // nearly three stops between noon and midnight, so a threshold in raw
  // radiance would mean something different at every hour of the day.
  // The reflections bloom too: a lantern mirrored in a puddle is a light.
  vec3 c = (texture(uScene, vUv).rgb + texture(uRefl, vUv).rgb) * uExposure;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  float t = bloomThreshold();
  // Soft knee: a hard cut makes the bloom pop on as a surface crosses the
  // threshold, which on a facade of windows is a flicker.
  float w = smoothstep(t, t * 2.0, l);
  fragColor = vec4(c * w, 1.0);
}
`,__=`
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
`,b_=`
precision highp float;
in vec2 vUv;
out vec4 fragColor;

${dc}

uniform sampler2D uScene;
uniform sampler2D uDepth;
uniform samplerCube uEnv;
uniform float uEnvMaxLod;
uniform mat4 uProj;
uniform mat4 uInvProj;
uniform mat4 uView;
uniform mat4 uInvView;
uniform vec3 uCameraPos;
uniform float uNear;
uniform float uFar;
uniform float uWet;
uniform float uPuddles;
uniform float uRain;
uniform float uTime;
uniform int uSteps;

float linZ(float d) {
  float z = d * 2.0 - 1.0;
  return 2.0 * uNear * uFar / (uFar + uNear - z * (uFar - uNear));
}
vec3 viewPos(vec2 uv, float d) {
  vec4 v = uInvProj * vec4(uv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0);
  return v.xyz / v.w;
}

void main() {
  fragColor = vec4(0.0);
  if (uWet <= 0.001 && uPuddles <= 0.001) return;
  ivec2 full = textureSize(uDepth, 0);
  ivec2 px = ivec2(gl_FragCoord.xy) * 2;
  float d = texelFetch(uDepth, px, 0).r;
  if (d >= 1.0) return;
  vec2 uv = (vec2(px) + 0.5) / vec2(full);
  vec3 P = viewPos(uv, d);
  float dist = length(P);
  if (dist > 1500.0) return;

  // Normal from the depth of the neighbours, each axis from the side that
  // agrees best, so a pixel on a kerb edge does not take the wall's slope.
  vec3 Pr = viewPos(uv + vec2(2.0, 0.0) / vec2(full), texelFetch(uDepth, px + ivec2(2, 0), 0).r);
  vec3 Pl = viewPos(uv - vec2(2.0, 0.0) / vec2(full), texelFetch(uDepth, px - ivec2(2, 0), 0).r);
  vec3 Pu = viewPos(uv + vec2(0.0, 2.0) / vec2(full), texelFetch(uDepth, px + ivec2(0, 2), 0).r);
  vec3 Pd = viewPos(uv - vec2(0.0, 2.0) / vec2(full), texelFetch(uDepth, px - ivec2(0, 2), 0).r);
  vec3 dx = abs(Pr.z - P.z) < abs(P.z - Pl.z) ? Pr - P : P - Pl;
  vec3 dy = abs(Pu.z - P.z) < abs(P.z - Pd.z) ? Pu - P : P - Pd;
  vec3 nV = normalize(cross(dx, dy));
  vec3 nW = normalize(mat3(uInvView) * nV);
  if (nW.y < 0.0) nW = -nW;
  if (nW.y < 0.92) return;

  vec3 Pw = (uInvView * vec4(P, 1.0)).xyz;
  float low = wetLowness(Pw.xz);
  float wl = max(wetLocal(uWet, low, 0.0), 0.3 * puddleHalo(uPuddles, low));
  float pud = puddleLocal(uPuddles, low, 0.0);
  float weight = max(wl * 0.85, pud) * smoothstep(1500.0, 500.0, dist);
  if (weight < 0.02) return;

  vec3 N = vec3(0.0, 1.0, 0.0);
  if (pud > 0.01 && dist < 60.0) {
    // Half the material's ripple slope: at half resolution a full-strength
    // ripple scatters a lantern's reflection into sparks, where the eye sees
    // a trembling streak.
    vec2 rs = rainRipples(Pw.xz, uTime, uRain) * smoothstep(60.0, 15.0, dist);
    N = normalize(N + vec3(rs.x, 0.0, rs.y) * pud * 0.5);
  }
  vec3 V = normalize(Pw - uCameraPos);
  vec3 R = reflect(V, N);
  if (R.y <= 0.0) return;
  float F = 0.02 + 0.98 * pow(1.0 - clamp(dot(-V, N), 0.0, 1.0), 5.0);

  // March in world space with a step that grows, projecting each point.
  vec3 hitUv = vec3(0.0);
  float step_ = 0.25 + dist * 0.01;
  vec3 q = Pw + N * 0.05;
  float t = 0.0;
  bool hit = false;
  vec3 prev = q;
  for (int i = 0; i < 40; i++) {
    if (i >= uSteps) break;
    prev = q;
    t += step_;
    q = Pw + R * t;
    step_ *= 1.22;
    vec4 c = uProj * uView * vec4(q, 1.0);
    if (c.w <= 0.0) break;
    vec2 su = c.xy / c.w * 0.5 + 0.5;
    if (su.x < 0.0 || su.x > 1.0 || su.y < 0.0 || su.y > 1.0) break;
    float sd = texelFetch(uDepth, ivec2(su * vec2(full)), 0).r;
    float sz = sd >= 1.0 ? 1.0e9 : linZ(sd);
    float qz = c.w;
    if (qz > sz && qz - sz < max(0.6, step_ * 2.5)) {
      // Refine between the last two points.
      vec3 a = prev, b = q;
      for (int k = 0; k < 5; k++) {
        vec3 m = 0.5 * (a + b);
        vec4 cm = uProj * uView * vec4(m, 1.0);
        vec2 mu = cm.xy / cm.w * 0.5 + 0.5;
        float md = texelFetch(uDepth, ivec2(clamp(mu, 0.0, 0.999) * vec2(full)), 0).r;
        if (cm.w > (md >= 1.0 ? 1.0e9 : linZ(md))) b = m; else a = m;
      }
      vec4 cb = uProj * uView * vec4(b, 1.0);
      hitUv = vec3(cb.xy / cb.w * 0.5 + 0.5, length(b - Pw));
      hit = true;
      break;
    }
  }
  if (!hit) return;

  // Confidence: fade at the screen edge and with how far the ray went.
  vec2 e = min(hitUv.xy, 1.0 - hitUv.xy);
  float conf = smoothstep(0.0, 0.06, min(e.x, e.y)) * smoothstep(700.0, 250.0, hitUv.z);

  // The streak: taps down the screen column, spread by roughness (none on a
  // puddle) and shrinking with distance.
  float spread = (1.0 - pud) * 0.035 * clamp(12.0 / max(dist, 1.0), 0.15, 1.0);
  vec3 col = vec3(0.0);
  float wsum = 0.0;
  for (int k = -3; k <= 3; k++) {
    float fk = float(k) / 3.0;
    float w = exp(-fk * fk * 2.0);
    vec2 tuv = clamp(hitUv.xy + vec2(0.0, fk * spread), 0.001, 0.999);
    // Not the sky: the scene target holds the CLEAR dome, and the clouds go
    // over it later in this pass. A streak tap above a far rooftop picked up
    // the bright clear horizon and laid a white bar down a wet street under
    // a full overcast. Where the streak runs off the city, the material's
    // own sky reflection (the probe, env below) stands.
    if (texelFetch(uDepth, ivec2(tuv * vec2(full)), 0).r >= 1.0) continue;
    col += texture(uScene, tuv).rgb * w;
    wsum += w;
  }
  if (wsum < 1e-4) return;
  col /= wsum;
  float lod = 0.8 * mix(0.75, 0.0, pud) * uEnvMaxLod;
  vec3 env = textureLod(uEnv, R, lod).rgb;
  fragColor = vec4((col - env) * F * weight * conf, 1.0);
}
`,M_=`
precision highp float;
in vec2 vUv;
out vec4 fragColor;

${Ta}

uniform sampler2D uScene;
uniform sampler2D uCloud;
uniform sampler2D uBloom;
uniform sampler2D uDepth;
uniform sampler2D uRefl;
uniform float uNear;
uniform float uFar;
// 0..1 how much fog or rain there is to scatter a light into a halo.
uniform float uFogGlow;
// Lightning's momentary light on every surface; see render/lightning.ts.
uniform float uFlashGain;
${hf}

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
  // The wet-ground reflections (REFLECT_FRAG) are part of the surface, so
  // they go in before the cloud and fog composite that fogs the surface.
  vec3 scene = (texture(uScene, vUv).rgb + texture(uRefl, vUv).rgb) * (1.0 + uFlashGain);
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
  // In fog or rain the halo is not the lens but the air: the droplets between
  // you and a lamp scatter it into a glow, so the fog that hides the lamp's
  // surroundings strengthens its halo instead of hiding it.
  float halo = mix(cloud.a, 1.0, 0.7 * uFogGlow) * (1.0 + 0.9 * uFogGlow);
  fragColor = vec4(present(scene * cloud.a + cloud.rgb + bloom * halo), 1.0);
}
`,lo=new Rn(new Uint8Array(4),1,1);lo.needsUpdate=!0;function Ir(){const n=new At;return n.setAttribute("position",new dt(new Float32Array(9),3)),n.boundingSphere=new rn(new k,1/0),n}class S_{scene=new mn;presentScene=new mn;camera=new Io(-1,1,1,-1,0,1);uniforms;reflUniforms;reflScene=new mn;reflTarget;reflBlur;reflActive=!1;presentUniforms;brightUniforms;brightScene=new mn;blurScene=new mn;blurUniforms;bloomA;bloomB;cloudTarget;shapeNoise;detailNoise;means;readback=null;constructor(e){const t=performance.now();this.shapeNoise=Vy(),this.detailNoise=Wy(),this.means=$y(this.shapeNoise),console.log(`[skycast] cloud noise baked in ${(performance.now()-t).toFixed(0)} ms`),this.uniforms={uDepth:{value:null},uInvProj:{value:new Ye},uInvProj2:{value:new Ye},uInvView:{value:new Ye},uCameraPos:{value:new k},uAmbient:{value:new me(.2,.24,.3)},uNear:{value:2},uFar:{value:2e5},uTime:{value:0},uLow:{value:new k(0,800,1800)},uMid:{value:new k(0,3800,5e3)},uHighCover:{value:0},uHighBase:{value:9e3},uWind:{value:new Ne},uPrecip:{value:0},uLowMean:{value:0},uMidMean:{value:0},uHighMean:{value:0},uPixelAngle:{value:.002},uExposure:{value:1},uSunDir:{value:new k(0,1,0)},uSunColor:{value:new me(1,1,1)},uSunIntensity:{value:16},uSunSurfaceCloud:{value:.105},uMieG:{value:.76},uTurbidity:{value:1},...yn,uCamAltitude:{value:100},uMultiScatter:{value:.055},uShape:{value:this.shapeNoise},uDetail:{value:this.detailNoise},uFog:{value:new rt(0,0,1,0)},uShafts:{value:new rt(0,0,5,0)},uDrift:{value:new Ne},uShaftCell:{value:0},uFlashPos:{value:new k},uFlashCol:{value:new me(0,0,0)},uFogAmb:{value:new me(0,0,0)},uFogSun:{value:new me(0,0,0)},uSatA:{value:lo},uSatB:{value:lo},uSatOffA:{value:new rt},uSatOffB:{value:new rt},uSatHalf:{value:256e3},uSatConf:{value:new k},uSatGround:{value:0},uDeckMean:{value:Array.from(this.means.deck)}};const i=new Bt({vertexShader:Lr,fragmentShader:x_,uniforms:this.uniforms,glslVersion:It,depthTest:!1,depthWrite:!1}),a=new lt(Ir(),i);a.frustumCulled=!1,this.scene.add(a),this.presentUniforms={uFogGlow:{value:0},uFlashGain:{value:0},uRefl:{value:null},uScene:{value:null},uCloud:{value:null},uBloom:{value:null},uDepth:{value:null},uNear:{value:2},uFar:{value:2e5},uExposure:{value:1},uNight:{value:0}},this.brightUniforms={uRefl:{value:null},uScene:{value:null},uExposure:{value:1},uNight:{value:0}},this.blurUniforms={uSource:{value:null},uDirection:{value:new Ne(1,0)}};const s=new Bt({vertexShader:Lr,fragmentShader:M_,uniforms:this.presentUniforms,glslVersion:It,depthTest:!1,depthWrite:!1}),o=new lt(Ir(),s);o.frustumCulled=!1,this.presentScene.add(o);const r=(f,p,w)=>{const g=new lt(Ir(),new Bt({vertexShader:Lr,fragmentShader:p,uniforms:w,glslVersion:It,depthTest:!1,depthWrite:!1}));g.frustumCulled=!1,f.add(g)};r(this.brightScene,y_,this.brightUniforms),this.reflUniforms={uScene:{value:null},uDepth:{value:null},uEnv:{value:null},uEnvMaxLod:{value:6},uProj:{value:new Ye},uInvProj:{value:new Ye},uView:{value:new Ye},uInvView:{value:new Ye},uCameraPos:{value:new k},uNear:{value:1},uFar:{value:2e5},uWet:{value:0},uPuddles:{value:0},uRain:{value:0},uTime:{value:0},uSteps:{value:28}},r(this.reflScene,b_,this.reflUniforms),r(this.blurScene,__,this.blurUniforms);const l=e.getDrawingBufferSize(new Ne),c={type:wn,format:gt,minFilter:Ze,magFilter:Ze,depthBuffer:!1,stencilBuffer:!1},h=Math.max(1,Math.floor(l.x/4)),u=Math.max(1,Math.floor(l.y/4));this.bloomA=new Rt(h,u,c),this.bloomB=new Rt(h,u,c),this.reflTarget=new Rt(Math.max(1,Math.floor(l.x/2)),Math.max(1,Math.floor(l.y/2)),{type:wn,format:gt,minFilter:Ze,magFilter:Ze,depthBuffer:!1,stencilBuffer:!1}),this.reflBlur=this.reflTarget.clone(),this.cloudTarget=new Rt(Math.max(1,Math.floor(l.x/2)),Math.max(1,Math.floor(l.y/2)),{type:wn,format:gt,minFilter:Ze,magFilter:Ze,depthBuffer:!1,stencilBuffer:!1})}resize(e){const t=e.getDrawingBufferSize(new Ne);this.cloudTarget.setSize(Math.max(1,Math.floor(t.x/2)),Math.max(1,Math.floor(t.y/2))),this.reflTarget.setSize(Math.max(1,Math.floor(t.x/2)),Math.max(1,Math.floor(t.y/2))),this.reflBlur.setSize(Math.max(1,Math.floor(t.x/2)),Math.max(1,Math.floor(t.y/2)));const i=Math.max(1,Math.floor(t.x/4)),a=Math.max(1,Math.floor(t.y/4));this.bloomA.setSize(i,a),this.bloomB.setSize(i,a)}render(e,t,i){this.uniforms.uDepth.value=i,e.setRenderTarget(this.cloudTarget),e.render(this.scene,this.camera),e.setRenderTarget(this.reflTarget),this.reflActive?(this.reflUniforms.uScene.value=t,this.reflUniforms.uDepth.value=i,e.render(this.reflScene,this.camera),this.blurUniforms.uSource.value=this.reflTarget.texture,this.blurUniforms.uDirection.value.set(0,1.5),e.setRenderTarget(this.reflBlur),e.render(this.blurScene,this.camera)):(e.setRenderTarget(this.reflBlur),e.setClearColor(0,0),e.clear(!0,!1,!1)),this.presentUniforms.uRefl.value=this.reflBlur.texture,this.brightUniforms.uRefl.value=this.reflBlur.texture,this.brightUniforms.uScene.value=t,e.setRenderTarget(this.bloomA),e.render(this.brightScene,this.camera),this.blurUniforms.uSource.value=this.bloomA.texture,this.blurUniforms.uDirection.value.set(1,0),e.setRenderTarget(this.bloomB),e.render(this.blurScene,this.camera),this.blurUniforms.uSource.value=this.bloomB.texture,this.blurUniforms.uDirection.value.set(0,1),e.setRenderTarget(this.bloomA),e.render(this.blurScene,this.camera),this.presentUniforms.uScene.value=t,this.presentUniforms.uCloud.value=this.cloudTarget.texture,this.presentUniforms.uBloom.value=this.bloomA.texture,this.presentUniforms.uDepth.value=i,e.setRenderTarget(null),e.render(this.presentScene,this.camera)}measureBanding(e){const t=this.cloudTarget.width,i=this.cloudTarget.height,a=t*i*4;(!this.readback||this.readback.length!==a)&&(this.readback=new Uint16Array(a));const s=this.readback;e.readRenderTargetPixels(this.cloudTarget,0,0,t,i,s);const o=8,r=Math.floor(t/o),l=Math.floor(i/o);if(r<2||l<2)return{rows:0,cols:0,ratio:0};const c=new Float32Array(r*l),h=new Uint8Array(r*l),u=Ed.fromHalfFloat;for(let v=0;v<l;v++)for(let x=0;x<r;x++){let y=0,_=0;for(let b=0;b<o;b++){const E=(v*o+b)*t;for(let R=0;R<o;R++){const M=(E+x*o+R)*4;u(s[M+3])>=.5||(y+=.2126*u(s[M])+.7152*u(s[M+1])+.0722*u(s[M+2]),_++)}}_===o*o&&(c[v*r+x]=y/_,h[v*r+x]=1)}let f=0,p=0,w=0,g=0;for(let v=0;v<l;v++)for(let x=0;x<r;x++){const y=v*r+x;h[y]&&(v+1<l&&h[y+r]&&(f+=Math.abs(c[y+r]-c[y]),p++),x+1<r&&h[y+1]&&(w+=Math.abs(c[y+1]-c[y]),g++))}if(p===0||g===0)return{rows:0,cols:0,ratio:0};const m=f/p,d=w/g;return{rows:m,cols:d,ratio:m/Math.max(d,1e-9)}}setReflection(e,t,i,a,s,o){const r=this.reflUniforms;this.reflActive=o>0&&t!==null&&(a.wetness>.01||a.puddles>.01),this.reflActive&&(r.uProj.value.copy(e.projectionMatrix),r.uInvProj.value.copy(e.projectionMatrixInverse),r.uView.value.copy(e.matrixWorldInverse),r.uInvView.value.copy(e.matrixWorld),r.uCameraPos.value.copy(e.position),r.uNear.value=e.near,r.uFar.value=e.far,r.uEnv.value=t,r.uEnvMaxLod.value=i,r.uWet.value=a.wetness,r.uPuddles.value=a.puddles,r.uRain.value=a.rainfall,r.uTime.value=s,r.uSteps.value=o)}setSatellite(e,t){const i=this.uniforms,a=(s,o,r)=>{o.value=s?.tex??lo,r.value.set(s?.x??0,s?.z??0,s&&s.w>.001?s.w:0,0)};a(e?.a??null,i.uSatA,i.uSatOffA),a(e?.b??null,i.uSatB,i.uSatOffB),e&&(i.uSatHalf.value=e.half,i.uSatConf.value.set(e.conf[0],e.conf[1],e.conf[2])),i.uSatGround.value=t}update(e,t,i,a,s=0,o,r){const l=this.uniforms;l.uInvProj.value.copy(e.projectionMatrixInverse),l.uInvProj2.value.copy(e.projectionMatrixInverse),l.uInvView.value.copy(e.matrixWorld),l.uCameraPos.value.copy(e.position),l.uNear.value=e.near,l.uFar.value=e.far,this.presentUniforms.uNear.value=e.near,this.presentUniforms.uFar.value=e.far,l.uPixelAngle.value=2*Math.tan(e.fov*Math.PI/360)/Math.max(1,this.cloudTarget.height),l.uTime.value=a,l.uLow.value.set(t.low.cover,t.low.base,t.low.top),l.uMid.value.set(t.mid.cover,t.mid.base,t.mid.top),l.uHighCover.value=t.high.cover,l.uLowMean.value=Dr(this.means.deck,t.low.cover),l.uMidMean.value=Dr(this.means.deck,t.mid.cover),l.uHighMean.value=Dr(this.means.cirrus,t.high.cover),l.uHighBase.value=t.high.base;const c=(t.windDir+180)*Math.PI/180;l.uWind.value.set(Math.sin(c)*t.windSpeed,-Math.cos(c)*t.windSpeed),l.uPrecip.value=Math.min(1,t.precip*1.2),l.uAmbient.value.copy(i.ambient),l.uSunDir.value.copy(i.sunDir),l.uSunColor.value.copy(i.sunColor);const h=e.position.y,u=r??{low:t.low.cover,mid:t.mid.cover,high:t.high.cover},f=r?_a(u.low,u.mid,u.high):t.opacity,p=_a(h<t.low.top?u.low:0,h<t.mid.top?u.mid:0,u.high);l.uSunIntensity.value=i.sunIntensity*(1-p)/Math.max(.02,1-f),l.uMieG.value=i.mieG,l.uTurbidity.value=i.turbidity,l.uCamAltitude.value=e.position.y;const w=t.precip*(1-t.snowFrac),g=t.precip*t.snowFrac,m=w>.02?325e-6*Math.pow(w,.6):0,d=g>.02?.0039*Math.pow(g,.7):0;l.uShafts.value.set(m+d,s,t.snowFrac>.5?1.2:6.5,t.snowFrac),l.uDrift.value.set(t.drift.x,t.drift.z);const v=t.wmoCode>=80&&t.wmoCode<=86||t.wmoCode>=95;l.uShaftCell.value=Math.max(v?1:0,Math.min(1,t.storm*1.5));const x=zy(t,s,m+d);l.uFog.value.set(x.sigma,x.top,x.soft,0),this.presentUniforms.uFogGlow.value=Math.min(1,(x.sigma+m+d)*250),l.uFogAmb.value.copy(i.ambient).multiplyScalar(.9),l.uFogAmb.value.r+=.034*i.night,l.uFogAmb.value.g+=.026*i.night,l.uFogAmb.value.b+=.018*i.night,o&&l.uFogAmb.value.add(o),l.uFogSun.value.copy(i.sunColor).multiplyScalar(i.sunIntensity*.105)}}const E_=.105,Yt=16,T_=`
out vec2 vNdc;
void main() {
  // Fullscreen triangle from gl_VertexID; no attributes, same trick as sky.ts.
  vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2) * 2.0 - 1.0;
  vNdc = p;
  gl_Position = vec4(p, 1.0, 1.0);
}
`,A_=`
precision highp float;
in vec2 vNdc;
out vec4 fragColor;

// The probe is six small renders on a slow cadence, so it can afford the full
// march the sky dome uses rather than the shortened one the surface shaders
// run per fragment.
${jn}

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
      (uSunColor * uSunIntensity * ${E_.toFixed(4)} * groundSunT * max(0.0, uSunDir.y)
       + uGroundAmbient);
    // Faded in over the first couple of degrees below the horizon. A hard edge
    // here would show up as a hard line in every glass reflection in the city.
    col += lit * trans * smoothstep(0.0, -0.035, rd.y);
  }

  fragColor = vec4(col, 1.0);
}
`,R_=6,Hh=45,C_=.009,D_=new me(.72,.75,.8);class P_{texture;sh=zl();cube;strip;pixels=new Float32Array(Yt*Yt*aa*4);raw=zl();reading=!1;ambient=new Float32Array(3);material;uniforms;scene=new mn;camera=new hc;basis=[];frames=Hh;lastSun=new k(0,-1,0);lastAlt=-1;lastTurbidity=-1;rendered=!1;constructor(e=64){this.cube=new Rd(e,{type:wn,format:gt,generateMipmaps:!0,minFilter:Gn,magFilter:Ze}),this.texture=this.cube.texture,this.strip=new Rt(Yt,Yt*aa,{type:gn,format:gt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1,minFilter:vt,magFilter:vt});for(const a of mc)this.basis.push(new He().set(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8]));this.uniforms={uSunDir:{value:new k(0,1,0)},uSunColor:{value:new me(1,1,1)},uSunIntensity:{value:22},uMieG:{value:.76},uTurbidity:{value:1},...yn,uCamAltitude:{value:100},uMultiScatter:{value:.055},uFaceBasis:{value:new He},uGroundAlbedo:{value:new me(.16,.155,.145)},uGroundAmbient:{value:new me(.2,.24,.3)}},this.material=new Bt({vertexShader:T_,fragmentShader:A_,uniforms:this.uniforms,glslVersion:It,depthWrite:!1,depthTest:!1});const t=new At;t.setAttribute("position",new dt(new Float32Array(9),3)),t.boundingSphere=new rn(new k,1/0);const i=new lt(t,this.material);i.frustumCulled=!1,this.scene.add(i),this.sh.set(xa([.28,.36,.5],.55,.45))}get maxLod(){return Math.log2(this.cube.width)}setSize(e){e!==this.cube.width&&(this.cube.setSize(e,e),this.rendered=!1)}update(e,t,i){const a=this.uniforms;this.frames++;const s=!this.rendered||this.lastSun.dot(t.sunDir)<Math.cos(C_)||Math.abs(i-this.lastAlt)>60+.12*Math.abs(this.lastAlt)||Math.abs(t.turbidity-this.lastTurbidity)>.04*this.lastTurbidity;if(!(this.frames>=Hh||s&&this.frames>=R_))return!1;this.frames=0,a.uSunDir.value.copy(t.sunDir),a.uSunColor.value.copy(t.sunColor),a.uSunIntensity.value=t.sunIntensity,a.uMieG.value=t.mieG,a.uTurbidity.value=t.turbidity,a.uCamAltitude.value=i,a.uGroundAmbient.value.copy(t.ambient),a.uGroundAlbedo.value.setRGB(.16,.155,.145).lerp(D_,t.snow),this.lastSun.copy(t.sunDir),this.lastAlt=i,this.lastTurbidity=t.turbidity;const o=e.getRenderTarget(),r=a.uFaceBasis.value;for(let l=0;l<aa;l++)r.copy(this.basis[l]),e.setRenderTarget(this.cube,l),e.render(this.scene,this.camera);this.strip.scissorTest=!0;for(let l=0;l<aa;l++)r.copy(this.basis[l]),this.strip.viewport.set(0,l*Yt,Yt,Yt),this.strip.scissor.set(0,l*Yt,Yt,Yt),e.setRenderTarget(this.strip),e.render(this.scene,this.camera);return this.strip.scissorTest=!1,e.setRenderTarget(o),this.rendered=!0,this.reading||(this.reading=!0,this.ambient[0]=t.ambient.r,this.ambient[1]=t.ambient.g,this.ambient[2]=t.ambient.b,e.readRenderTargetPixelsAsync(this.strip,0,0,Yt,Yt*aa,this.pixels).then(()=>this.project()).catch(()=>{}).finally(()=>{this.reading=!1})),!0}project(){Sy(this.pixels,Yt,this.raw),_y(this.raw,0,1,0,this.ambient,1e-5)?this.sh.set(this.raw):this.sh.set(xa(this.ambient,.55,.45))}dispose(){this.cube.dispose(),this.strip.dispose(),this.material.dispose()}}const Ri=12,L_=`
precision highp float;
in vec2 corner;
in vec4 aSeed;

uniform mat4 uViewProj;
uniform vec3 uCam;
uniform float uBox;
uniform float uTime;
uniform vec3 uWindVel;
uniform float uFall;
uniform float uSnowFall;
uniform float uSnowFrac;
uniform float uShutter;
uniform vec2 uViewport;
uniform float uFocalPx;
uniform float uDropM;
uniform float uFlakeM;
uniform float uInner;

out vec2 vLocal;      // px: x across, y along from head
out float vHalfW;     // px
out float vLenPx;
out float vDist;      // m from the eye
out float vFade;
out float vSnow;
out float vBright;
out vec3 vPos;

void main() {
  float r1 = fract(aSeed.w * 7.13 + aSeed.x * 3.1);
  float r2 = fract(aSeed.y * 5.71 + aSeed.w * 2.3);
  bool snow = r2 < uSnowFrac;
  vSnow = snow ? 1.0 : 0.0;
  vBright = 0.55 + 0.45 * r1;

  vec3 vel = snow
    ? vec3(uWindVel.x, -uSnowFall * (0.7 + 0.6 * r1), uWindVel.z)
    : vec3(uWindVel.x, -uFall * (0.75 + 0.5 * r1), uWindVel.z);
  vec3 base = aSeed.xyz * uBox + vel * uTime;
  if (snow) {
    // Flakes tumble: a slow wander of a few tens of centimetres, each on its
    // own phase, so a snowfall does not fall in lockstep like rain.
    float ph = aSeed.w * 40.0 + uTime * (0.9 + r1);
    base.xz += vec2(sin(ph), cos(ph * 0.83)) * 0.3;
  }
  vec3 rel = uBox * (fract((base - uCam) / uBox) - 0.5);
  vec3 p = uCam + rel;
  vPos = p;
  // Flakes are big and slow, so a flake's blur is short next to its size:
  // drawn with a rain streak's shutter they read as dashes.
  vec3 tail = p - vel * uShutter * (snow ? 0.2 : 1.0);

  float dist = length(rel);
  vDist = dist;
  // Fade at the box surface (where a particle wraps, it must be invisible),
  // inside the inner radius (the near layer owns that), and very close to the
  // lens, where a real drop is an out-of-focus blur and not a streak.
  vFade = (1.0 - smoothstep(0.36 * uBox, 0.5 * uBox, max(abs(rel.x), max(abs(rel.y), abs(rel.z)))))
        * smoothstep(uInner * 0.8, uInner, dist)
        * smoothstep(0.35, 1.1, dist);

  vec4 ch = uViewProj * vec4(p, 1.0);
  vec4 ct = uViewProj * vec4(tail, 1.0);
  if (ch.w < 0.3 || ct.w < 0.3 || vFade <= 0.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }
  vec2 hp = ch.xy / ch.w * 0.5 * uViewport;
  vec2 tp = ct.xy / ct.w * 0.5 * uViewport;
  vec2 d = tp - hp;
  float len = length(d);
  vec2 dir = len > 1e-3 ? d / len : vec2(0.0, 1.0);
  vec2 perp = vec2(-dir.y, dir.x);

  float size = snow ? uFlakeM * (0.6 + 0.8 * r1) : uDropM;
  float wRaw = size * uFocalPx / ch.w;
  float halfW = max(0.55, 0.5 * wRaw);
  // Sub-pixel drops keep their energy as coverage rather than a 1 px line
  // that is brighter than the drop could ever be.
  vFade *= clamp(wRaw / 1.1, snow ? 0.45 : 0.45, 1.0);
  vHalfW = halfW;
  vLenPx = len;

  float pad = halfW + 1.0;
  vec2 local = vec2(corner.x * pad, mix(-pad, len + pad, corner.y));
  vLocal = local;
  vec2 px = hp + perp * local.x + dir * local.y;
  gl_Position = vec4(px / (0.5 * uViewport), 0.0, 1.0);
}
`,I_=`
precision highp float;
in vec2 vLocal;
in float vHalfW;
in float vLenPx;
in float vDist;
in float vFade;
in float vSnow;
in float vBright;
in vec3 vPos;
out vec4 fragColor;

${jn}
${Ta}
${ds}
${jd}

uniform sampler2D uDepth;
uniform float uSceneNear;
uniform float uSceneFar;
uniform vec3 uCam;
uniform vec3 uViewFwd;
uniform float uSunSurface;
uniform vec3 uNightGlow;
uniform vec3 uFlash;
uniform float uOpacity;
uniform float uSnowOpacity;
uniform vec4 uLampPos[${Ri}];   // xyz, w = intensity
uniform vec3 uLampCol[${Ri}];
uniform int uLampCount;

float linearDepth(float d) {
  float z = d * 2.0 - 1.0;
  return 2.0 * uSceneNear * uSceneFar / (uSceneFar + uSceneNear - z * (uSceneFar - uSceneNear));
}

void main() {
  // Distance from the streak's centre segment, in px, for a capsule.
  float along = clamp(vLocal.y, 0.0, vLenPx);
  float dd = length(vec2(vLocal.x, vLocal.y - along));
  float cov = clamp(vHalfW + 0.5 - dd, 0.0, 1.0);
  if (cov <= 0.0) discard;

  vec3 rd = vPos - uCam;
  float dist = length(rd);
  rd /= dist;

  // Occlusion by the scene, against its depth buffer: the drop's view-space
  // z (distance times the cosine to the view axis) against the surface's.
  float sd = texelFetch(uDepth, ivec2(gl_FragCoord.xy), 0).r;
  if (sd < 1.0) {
    float zs = linearDepth(sd);
    float cosA = max(dot(rd, uViewFwd), 0.05);
    if (dist * cosA > zs - 0.05) discard;
  }

  vec3 up = vec3(0.0, 1.0, 0.0);
  vec3 rad;
  float alpha;
  if (vSnow > 0.5) {
    // A flake is a white diffuse scatterer: lit by the sky from all round
    // and by the sun, like any white surface, and by the lamps it passes.
    vec3 sky = 0.55 * shIrradiance(up) + 0.45 * shIrradiance(-rd);
    vec3 sun = uSunColor * uSunIntensity * uSunSurface * 0.5;
    rad = 0.85 * (sky + sun + uNightGlow * 1.5);
    alpha = uSnowOpacity;
    // A flake a metre from the lens is a soft out-of-focus disc.
    alpha *= mix(0.45, 1.0, smoothstep(1.0, 3.0, dist));
    cov *= smoothstep(0.0, 0.8, 1.0 - dd / (vHalfW + 0.5));
  } else {
    // A drop refracts the sky above and around it into the eye.
    rad = 0.95 * shIrradiance(up) + 0.25 * shIrradiance(-rd);
    // Backlit drops glint: the forward lobe of a water sphere is strong.
    float fwd = max(0.0, dot(rd, uSunDir));
    rad += uSunColor * uSunIntensity * uSunSurface * (0.06 + 1.6 * pow(fwd, 12.0));
    rad += uNightGlow * 2.5;
    alpha = uOpacity;
    // Ends taper, as a blurred sphere's streak does.
    float t = vLocal.y / max(vLenPx, 1.0);
    alpha *= smoothstep(-0.15, 0.25, t) * smoothstep(1.15, 0.6, t);
  }

  // Street lamps. Inverse square with a soft core, and a forward lobe: a drop
  // between you and a lamp flares, which is what rain in a lamp's cone is.
  for (int i = 0; i < ${Ri}; i++) {
    if (i >= uLampCount) break;
    vec3 L = uLampPos[i].xyz - vPos;
    float l2 = dot(L, L);
    vec3 Ln = L * inversesqrt(max(l2, 1e-4));
    // Only under the lantern: the housing shades everything above it.
    float cone = smoothstep(-0.05, -0.35, -Ln.y);
    float fwd = max(0.0, dot(rd, Ln));
    float phase = vSnow > 0.5 ? 1.0 : 0.35 + 3.0 * pow(fwd, 6.0);
    rad += uLampCol[i] * uLampPos[i].w * cone * phase / (1.0 + l2 * 0.35);
  }
  rad += uFlash;
  rad *= vBright;

  float T = exp(-fogDepth(uCam, rd, dist));
  rad = rad * T + fogRadiance(rd) * (1.0 - T);

  float a = clamp(alpha * cov * vFade * mix(1.0, T, 0.5), 0.0, 1.0);
  if (a < 0.002) discard;
  fragColor = vec4(present(rad), a);
}
`;function F_(n){return n<=.02?0:Math.min(1.6,.25+.5*Math.sqrt(n))}function k_(n){const e=Math.min(3,Math.max(.3,.9*Math.pow(Math.max(n,.01),.21)));return 9.65-10.3*Math.exp(-.6*e)}class N_{scene=new mn;uniforms;layers=[];cam=new Zt;viewProj=new Ye;active=!1;constructor(e){const t=e.tier==="reduced";this.uniforms={uViewProj:{value:this.viewProj},uCam:{value:new k},uViewFwd:{value:new k(0,0,-1)},uBox:{value:10},uInner:{value:0},uTime:{value:0},uWindVel:{value:new k},uFall:{value:7},uSnowFall:{value:1},uSnowFrac:{value:0},uShutter:{value:1/40},uViewport:{value:new Ne(1,1)},uFocalPx:{value:600},uDropM:{value:.0022},uFlakeM:{value:.008},uDepth:{value:null},uSceneNear:{value:1},uSceneFar:{value:2e5},uSunSurface:{value:.105},uNightGlow:{value:new me(0,0,0)},uFlash:{value:new me(0,0,0)},uOpacity:{value:.3},uSnowOpacity:{value:.85},uLampPos:{value:Array.from({length:Ri},()=>new rt)},uLampCol:{value:Array.from({length:Ri},()=>new me)},uLampCount:{value:0},uSH:{value:new Float32Array(27)},uExposure:{value:1},uSunDir:{value:new k(0,1,0)},uSunColor:{value:new me(1,1,1)},uSunIntensity:{value:20},uMieG:{value:.76},uTurbidity:{value:1},...yn,uCamAltitude:{value:0},uMultiScatter:{value:.055},uFog:{value:new rt(0,0,1,0)},uFogAmb:{value:new me(0,0,0)},uFogSun:{value:new me(0,0,0)}},this.addLayer(t?1400:4e3,9,0),this.addLayer(t?5e3:16e3,36,4)}addLayer(e,t,i){const a=new wo;a.setAttribute("corner",new Lt([-1,0,1,0,-1,1,1,1],2)),a.setIndex([0,1,2,2,1,3]);const s=new Float32Array(e*4);let o=2654435769;const r=()=>(o^=o<<13,o^=o>>>17,o^=o<<5,(o>>>0)/4294967296);for(let u=0;u<s.length;u++)s[u]=r();a.setAttribute("aSeed",new wa(s,4)),a.instanceCount=0,a.boundingSphere=new rn(new k,1/0);const l={...this.uniforms,uBox:{value:t},uInner:{value:i}},c=new Bt({vertexShader:L_,fragmentShader:I_,uniforms:l,glslVersion:It,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ai,side:zt}),h=new lt(a,c);h.frustumCulled=!1,this.scene.add(h),this.layers.push({mesh:h,geo:a,max:e,box:t,inner:i})}wanted(e){return e.precip>.02&&e.precipKind!=="none"}update(e,t,i,a,s,o,r,l,c){const h=t.precip;if(this.active=this.wanted(t),!this.active){for(const b of this.layers)b.geo.instanceCount=0;return}const u=this.uniforms;this.cam.fov=e.fov,this.cam.aspect=e.aspect,this.cam.near=.25,this.cam.far=400,this.cam.updateProjectionMatrix(),this.viewProj.multiplyMatrices(this.cam.projectionMatrix,e.matrixWorldInverse),u.uCam.value.copy(e.position),e.getWorldDirection(u.uViewFwd.value),u.uTime.value=s,u.uViewport.value.copy(o),u.uFocalPx.value=o.y/(2*Math.tan(e.fov*Math.PI/360)),u.uSceneNear.value=e.near,u.uSceneFar.value=e.far;const f=Math.max(0,t.gust-t.windSpeed),p=(t.windSpeed+f*.5*(1+Math.sin(s*.7)))*.7,w=(t.windDir+180)*Math.PI/180;u.uWindVel.value.set(Math.sin(w)*p,0,-Math.cos(w)*p);const g=h*(1-t.snowFrac);u.uFall.value=k_(Math.max(g,.05)),u.uSnowFall.value=1,u.uSnowFrac.value=t.snowFrac,u.uDropM.value=.0018+.0017*Math.min(1,Math.sqrt(g/10)),u.uOpacity.value=.24+.26*Math.min(1,Math.sqrt(g/12)),u.uSnowOpacity.value=.8,u.uFlakeM.value=t.tempC>-2?.016:.01;const m=Math.max(0,e.position.y-c),d=1-Math.min(1,Math.max(0,(m-20)/180)),v=F_(h)*(t.snowFrac>.5?.8:1)*d;for(const b of this.layers){const E=b.box*b.box*b.box;b.geo.instanceCount=Math.min(b.max,Math.round(E*v*(b.inner>0?.3:2.5)))}u.uSH.value=a,u.uSunDir.value.copy(i.sunDir),u.uSunColor.value.copy(i.sunColor),u.uSunIntensity.value=i.sunIntensity,u.uMieG.value=i.mieG,u.uTurbidity.value=i.turbidity,u.uCamAltitude.value=e.position.y,u.uExposure.value=i.exposure,u.uNightGlow.value.copy(i.nightGlow),u.uFlash.value.copy(l);const x=Math.min(Ri,r.length);u.uLampCount.value=x;const y=u.uLampPos.value,_=u.uLampCol.value;for(let b=0;b<x;b++){const E=r[b];y[b].set(E.x,E.y,E.z,E.intensity*i.night),_[b].copy(E.color)}}setFog(e,t,i){this.uniforms.uFog.value.copy(e),this.uniforms.uFogAmb.value.copy(t),this.uniforms.uFogSun.value.copy(i)}render(e,t){if(!this.active)return;this.uniforms.uDepth.value=t;const i=e.autoClear;e.autoClear=!1,e.setRenderTarget(null),e.render(this.scene,this.cam),e.autoClear=i}}const Gh=new me(.78,.84,1);class U_{group=new vn;state={brightness:0,color:new me(0,0,0),pos:new k,gain:0};mat=new ns({color:16777215,side:zt});mesh=null;boltSeed=-1;update(e,t,i,a,s,o,r,l){const c=this.state,h=af(nf(e),t,i);if(!h)return c.brightness=0,c.gain=0,c.color.setRGB(0,0,0),this.mesh&&(this.mesh.visible=!1),c;const u=h.flash,f=h.brightness;return c.brightness=f,c.pos.set(a.x+u.x,Math.max(o,s+300)+500,a.z+u.z),c.color.copy(Gh).multiplyScalar(f*(.25+1.2*r)),c.gain=f*(.35+2.2*r),u.ground?this.showBolt(u,s,Math.max(o,s+300),f,l,a):this.mesh&&(this.mesh.visible=!1),c}showBolt(e,t,i,a,s,o){e.seed!==this.boltSeed&&(this.boltSeed=e.seed,this.mesh&&(this.group.remove(this.mesh),this.mesh.geometry.dispose()),this.mesh=new lt(O_(e.seed,i-t),this.mat),this.mesh.frustumCulled=!1,this.group.add(this.mesh));const r=this.mesh;r.visible=!0,r.position.set(o.x+e.x,t,o.z+e.z);const l=s.position.x-r.position.x,c=s.position.z-r.position.z;r.rotation.set(0,Math.atan2(l,c),0),this.mat.color.copy(Gh).multiplyScalar(60*a)}}function O_(n,e){const t=[],i=[];let a=0;const s=()=>$l(n,a++),o=(h,u,f,p,w)=>{let g=h,m=u;const d=[{x:g,y:m}],v=Math.max(4,Math.floor((u-f)/60)),x=(u-f)/v;for(let y=0;y<v;y++){const _=g+(s()-.5)*70+w,b=Math.max(f,m-x*(.7+.6*s())),E=t.length/3;if(t.push(g-p,m,0,g+p,m,0,_-p,b,0,_+p,b,0),i.push(E,E+1,E+2,E+2,E+1,E+3),g=_,m=b,d.push({x:g,y:m}),m<=f)break}return d},r=o(0,e,0,3,(s()-.5)*10),l=2+Math.floor(s()*2);for(let h=0;h<l;h++){const u=r[Math.floor(s()*r.length*.6)];o(u.x,u.y,u.y*(.3+.4*s()),1.4,(s()-.5)*60)}const c=new At;return c.setAttribute("position",new Lt(t,3)),c.setIndex(i),c}const Pt=Math.PI/180,ai=180/Math.PI;function z_(n){return n.getTime()/864e5+24405875e-1}function B_(n,e){const t=n*Pt,i=e*Pt,a=Math.cos(t);return{x:a*Math.sin(i),y:Math.sin(t),z:-a*Math.cos(i)}}function Vh(n,e,t,i,a){const s=(t+a-n*ai)*Pt,o=i*Pt,r=e*Pt,l=Math.sin(o)*Math.sin(r)+Math.cos(o)*Math.cos(r)*Math.cos(s),c=Math.asin(Math.max(-1,Math.min(1,l))),h=Math.atan2(-Math.sin(s)*Math.cos(r),Math.cos(o)*Math.sin(r)-Math.sin(o)*Math.cos(r)*Math.cos(s)),u=c*ai,f=(h*ai+360)%360;return{altitude:u,azimuth:f,ra:(n*ai%360+360)%360,dec:e,dir:B_(u,f)}}function Di(n,e,t){const a=z_(n)-2451545,s=a/36525,o=(280.46061837+360.98564736629*a+387933e-9*s*s)%360,r=(280.46646+36000.76983*s+3032e-7*s*s)%360,c=(357.52911+35999.05029*s-1537e-7*s*s)*Pt,h=(1.914602-.004817*s-14e-6*s*s)*Math.sin(c)+(.019993-101e-6*s)*Math.sin(2*c)+289e-6*Math.sin(3*c),u=r+h,f=125.04-1934.136*s,p=(u-.00569-.00478*Math.sin(f*Pt))*Pt,g=(23+(26+(21.448-s*(46.815+s*(59e-5-s*.001813)))/60)/60+.00256*Math.cos(f*Pt))*Pt,m=Math.atan2(Math.cos(g)*Math.sin(p),Math.cos(p)),d=Math.asin(Math.sin(g)*Math.sin(p))*ai,v=Vh(m,d,o,e,t),x=(218.316+13.176396*a)*Pt,y=(134.963+13.064993*a)*Pt,_=(93.272+13.22935*a)*Pt,b=x+6.289*Pt*Math.sin(y),E=5.128*Pt*Math.sin(_),R=Math.atan2(Math.sin(b)*Math.cos(g)-Math.tan(E)*Math.sin(g),Math.cos(b)),M=Math.asin(Math.sin(E)*Math.cos(g)+Math.cos(E)*Math.sin(g)*Math.sin(b))*ai,S=Vh(R,M,o,e,t),A=((b-p)*ai+360)%360,D=A/360,I=(1-Math.cos(A*Pt))/2,F=Math.max(0,Math.min(1,(v.altitude+6)/10));return{sun:v,moon:S,moonPhase:D,moonElongation:A,moonIllum:I,daylight:F,obliquity:g*ai}}function H_(n){const e=[n.name,n.region,n.country].filter(t=>t&&t.length>0);return e.filter((t,i)=>e.indexOf(t)===i).join(", ")}async function G_(n,e){const t=n.trim();if(t.length<2)return[];const i=`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(t)}&count=6&language=en&format=json`;try{const a=await fetch(i,{mode:"cors",credentials:"omit",signal:e});return a.ok?((await a.json()).results??[]).map(o=>({name:o.name,region:o.admin1??"",country:o.country??o.country_code??"",lat:o.latitude,lon:o.longitude,population:o.population??0})):[]}catch{return[]}}async function V_(n,e){const t=`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${n.toFixed(3)}&longitude=${e.toFixed(3)}&localityLanguage=en`;try{const i=await fetch(t,{mode:"cors",credentials:"omit"});if(!i.ok)return null;const a=await i.json(),s=a.city||a.locality||a.principalSubdivision||"";return s?{name:s,region:a.principalSubdivision&&a.principalSubdivision!==s?a.principalSubdivision:"",country:a.countryName??""}:null}catch{return null}}const W_=["EXT_color_buffer_float","EXT_color_buffer_half_float","OES_texture_float_linear","EXT_float_blend","WEBGL_depth_texture"];function ut(n,e){return`<div><span style="opacity:.6">${n}</span> ${e}</div>`}function X_(n){const e=document.createElement("div");e.id="diag",e.setAttribute("style","position:fixed;left:8px;top:8px;right:8px;z-index:9999;font:11px/1.5 ui-monospace,monospace;color:#dfe6ee;background:rgba(8,12,18,.92);border:1px solid rgba(255,255,255,.18);border-radius:8px;padding:10px;max-height:70vh;overflow:auto;");const t=[];t.push(ut("ua",navigator.userAgent.slice(0,120))),t.push(ut("screen",`${innerWidth}x${innerHeight}`));const i=Hd(),a=i.device;t.push(ut("dpr",`${devicePixelRatio} capped to ${a.pixelRatio}`)),t.push(ut("deviceMemory",a.deviceMemoryGb===null?`unknown, assuming ${i.assumedMemoryGb} GB`:`${a.deviceMemoryGb} GB`)),t.push(ut("pointer",a.coarsePointer?"coarse":"fine")),t.push(ut("<b>tier</b>",`<b>${i.tier}</b>`)),t.push(ut("tier because",i.reasons.length?i.reasons.join("; "):"nothing forced it down")),t.push(ut("drape rings",i.rings.map(l=>`${l.extent}m@z${l.imageryZoom}`).join(" "))),t.push(ut("msaa",i.msaaSamples===0?"off":`${i.msaaSamples}x`)),t.push(ut("sun cascades",`${i.shadowCascadeCount} x ${i.shadowCascadeSize}`)),t.push(),t.push(ut("ambient occlusion",i.aoEnabled?"on":"off")),t.push(ut("triangle budget",`${(i.buildingTriangleBudget/1e3).toFixed(0)}k buildings, ${(i.roadTriangleBudget/1e3).toFixed(0)}k roads`));for(const l of i.memory.items)t.push(ut(`&nbsp;&nbsp;${l.what}`,Rh(l.bytes)));t.push(ut("<b>gpu estimate</b>",`<b>${Rh(i.memory.totalBytes)}</b>`));let s=null;try{s=n.getContext("webgl2",{failIfMajorPerformanceCaveat:!1})}catch{s=null}if(!s)t.push(ut("webgl2","<b style='color:#ff8a8a'>UNAVAILABLE</b>"));else{const l=s.getExtension("WEBGL_debug_renderer_info"),c=String(l?s.getParameter(l.UNMASKED_RENDERER_WEBGL):s.getParameter(s.RENDERER));t.push(ut("gpu",c.slice(0,90))),t.push(ut("maxTexture",String(s.getParameter(s.MAX_TEXTURE_SIZE)))),t.push(ut("maxRenderbuffer",String(s.getParameter(s.MAX_RENDERBUFFER_SIZE)))),t.push(ut("maxSamples",String(s.getParameter(s.MAX_SAMPLES))));for(const h of W_){const u=s.getExtension(h)!==null;t.push(ut(h,u?"yes":"<b style='color:#ff8a8a'>NO</b>"))}}e.innerHTML=t.join(""),document.body.append(e);const o=document.createElement("div");e.append(o);const r=()=>{const c=window.skycast,h=[];if(h.push(ut("app booted",c?"yes":"<b style='color:#ff8a8a'>NO</b>")),c){h.push(ut("scene time",String(c.time??"?"))),c.wx&&h.push(ut("cloud/precip",`${c.wx.totalCover?.toFixed(2)} / ${c.wx.precip?.toFixed(2)}`));const u=c.ground?.status;h.push(ut("buildings streamed",u?.buildings?String(u.buildings):"<b style='color:#ff8a8a'>0 so far</b>"));const f=c.renderer?.info?.memory;f&&h.push(ut("gpu textures",`${f.textures} tex / ${f.geometries} geo`))}o.innerHTML=h.join("")};r(),setInterval(r,2e3)}function $_(n){const e=i=>{let a=document.getElementById("diag-err");a||(a=document.createElement("div"),a.id="diag-err",a.setAttribute("style","position:fixed;left:8px;right:8px;bottom:8px;z-index:10000;font:11px/1.4 ui-monospace,monospace;color:#ffd9d9;background:rgba(60,10,10,.94);border:1px solid #ff6b6b;border-radius:8px;padding:8px;max-height:40vh;overflow:auto;"),document.body.append(a)),a.textContent=`${a.textContent??""}
${i}`.trim()},t=window;t.__skycastShout=e,n.addEventListener("webglcontextlost",i=>{i.preventDefault(),e("WEBGL CONTEXT LOST (usually out of GPU memory)")}),addEventListener("error",i=>e(`error: ${i.message}`)),addEventListener("unhandledrejection",i=>e(`unhandled: ${String(i.reason).slice(0,200)}`))}const q_=6378137,Ei=Math.PI/180;function Y_(n){const e=n*Ei;return 111132.92-559.82*Math.cos(2*e)+1.175*Math.cos(4*e)-.0023*Math.cos(6*e)}function j_(n){const e=n*Ei;return 111412.84*Math.cos(e)-93.5*Math.cos(3*e)+.118*Math.cos(5*e)}class Mo{lat;lon;mPerLat;mPerLon;constructor(e,t){this.lat=e,this.lon=t,this.mPerLat=Y_(e),this.mPerLon=j_(e)}toWorld(e,t){return{x:(t-this.lon)*this.mPerLon,z:-(e-this.lat)*this.mPerLat}}toLatLon(e,t){return{lat:this.lat-t/this.mPerLat,lon:this.lon+e/this.mPerLon}}}function ss(n,e){return(n+180)/360*2**e}function os(n,e){const t=n*Ei;return(1-Math.log(Math.tan(t)+1/Math.cos(t))/Math.PI)/2*2**e}function Pi(n,e){return n/2**e*360-180}function Li(n,e){const t=Math.PI-2*Math.PI*(n/2**e);return 180/Math.PI*Math.atan(.5*(Math.exp(t)-Math.exp(-t)))}function K_(n,e,t){return{z:t,x:Math.floor(ss(e,t)),y:Math.floor(os(n,t))}}function rs(n){return{west:Pi(n.x,n.z),east:Pi(n.x+1,n.z),north:Li(n.y,n.z),south:Li(n.y+1,n.z)}}function Z_(n){return`${n.z}/${n.x}/${n.y}`}function Wh(n,e,t){return n<e?e:n>t?t:n}function ql(n,e){const t=(e.lat-n.lat)*Ei,i=(e.lon-n.lon)*Ei,a=Math.sin(t/2)**2+Math.cos(n.lat*Ei)*Math.cos(e.lat*Ei)*Math.sin(i/2)**2;return 2*q_*Math.asin(Math.min(1,Math.sqrt(a)))}function Vs(n,e,t){const i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)}function J_(n){const e=new Date(n);return(n-Date.UTC(e.getUTCFullYear(),0,1))/864e5}const Q_=4,eb=1.2;function tb(n,e){const t=Math.abs(n);let i=J_(e);n<0&&(i=(i+182.5)%365.25);const a=(Math.min(t,62)-40)*Q_,s=(Math.min(t,62)-40)*eb,o=100+a,r=128+a,l=272-s,c=300-s,h=292-s,u=325-s,f=Vs(o,r,i),p=1-Vs(h,u,i),w=Math.min(f,p),g=i>200?Vs(l,c,i):0,m=Vs(23,30,t);return{on:1-m*(1-w),autumn:g*m}}const Xh="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile",kn=256;async function uf(n,e){const t=Math.floor(ss(n.west,e)),i=Math.floor(ss(n.east,e)),a=Math.floor(os(n.north,e)),s=Math.floor(os(n.south,e)),o=i-t+1,r=s-a+1,l=new OffscreenCanvas(o*kn,r*kn),c=l.getContext("2d");c.fillStyle="#1b3a52",c.fillRect(0,0,l.width,l.height);const h=2**e,u=[];let f=0,p=0;for(let w=a;w<=s;w++)for(let g=t;g<=i;g++){const m=(g%h+h)%h,d=(g-t)*kn,v=(w-a)*kn;u.push((async()=>{for(let x=0;x<3;x++)try{const y=await Gl(`${Xh}/${e}/${w}/${m}`);c.drawImage(y,d,v,kn,kn),y.close();return}catch{x<2&&await new Promise(y=>setTimeout(y,250*(x+1)**2))}if(e>2)try{const x=m>>1,y=w>>1,_=await Gl(`${Xh}/${e-1}/${y}/${x}`),b=kn/2;c.drawImage(_,(m&1)*b,(w&1)*b,b,b,d,v,kn,kn),_.close(),p++;return}catch{}f++})())}if(await Promise.all(u),f>0||p>0){const w=o*r;console.warn(`[skycast] imagery z${e}: ${f}/${w} tiles missing, ${p} filled from z${e-1}`)}return{missing:f,coarse:p,canvas:l,bbox:{west:Pi(t,e),east:Pi(i+1,e),north:Li(a,e),south:Li(s+1,e)}}}const nb="https://s3.amazonaws.com/elevation-tiles-prod/terrarium",Nn=256,ib=0;class ab{bbox;w;h;data;loaded=!1;constructor(e,t,i){this.bbox=e,this.w=t,this.h=i,this.data=new Float32Array(t*i)}sample(e,t){const{west:i,east:a,south:s,north:o}=this.bbox,r=Wh((t-i)/(a-i)*(this.w-1),0,this.w-1),l=Wh((o-e)/(o-s)*(this.h-1),0,this.h-1),c=Math.floor(r),h=Math.floor(l),u=Math.min(c+1,this.w-1),f=Math.min(h+1,this.h-1),p=r-c,w=l-h,g=this.data,m=g[h*this.w+c],d=g[h*this.w+u],v=g[f*this.w+c],x=g[f*this.w+u];return(m*(1-p)+d*p)*(1-w)+(v*(1-p)+x*p)*w}contains(e,t){const i=this.bbox;return e>=i.south&&e<=i.north&&t>=i.west&&t<=i.east}}function sb(n){const t=new OffscreenCanvas(n.width,n.height).getContext("2d",{willReadFrequently:!0});t.drawImage(n,0,0);const i=t.getImageData(0,0,n.width,n.height).data,a=new Float32Array(n.width*n.height);for(let s=0,o=0;s<a.length;s++,o+=4){const r=i[o]*256+i[o+1]+i[o+2]/256-32768;a[s]=r<0?0:r}return n.close(),a}async function $h(n,e,t){const i=Math.floor(ss(n.west,e)),a=Math.floor(ss(n.east,e)),s=Math.floor(os(n.north,e)),o=Math.floor(os(n.south,e)),r={west:Pi(i,e),east:Pi(a+1,e),north:Li(s,e),south:Li(o+1,e)},l=a-i+1,c=o-s+1,h=new ab(r,l*Nn,c*Nn),u=[];let f=0;const p=l*c;for(let w=s;w<=o;w++)for(let g=i;g<=a;g++){const m=2**e,d=(g%m+m)%m,v=`${nb}/${e}/${d}/${w}.png`,x=(g-i)*Nn,y=(w-s)*Nn;u.push(Gl(v).then(_=>{const b=sb(_);for(let E=0;E<Nn;E++)h.data.set(b.subarray(E*Nn,(E+1)*Nn),(y+E)*h.w+x)}).catch(()=>{for(let _=0;_<Nn;_++)h.data.fill(ib,(y+_)*h.w+x,(y+_)*h.w+x+Nn)}).finally(()=>t?.(++f,p)))}return await Promise.all(u),ob(h),h.loaded=!0,h}function ob(n,e=55){const{w:t,h:i,data:a}=n,s=[];for(let o=1;o<i-1;o++)for(let r=1;r<t-1;r++){const l=o*t+r,c=a[l],h=[a[l-1],a[l+1],a[l-t],a[l+t]];let u=-1/0;for(const f of h)f>u&&(u=f);c-u<=e||(h.sort((f,p)=>f-p),s.push([l,(h[1]+h[2])/2]))}for(const[o,r]of s)a[o]=r}function co(n,e,t){const i=t/111132,a=t/(111412*Math.max(.05,Math.cos(n*Math.PI/180)));return{west:e-a,east:e+a,south:n-i,north:n+i}}const rb=140,qh=4,Ws=32,lb=1.05;class cb{stats={moves:0,lastStitchMs:0,lastApplyMs:0,worstApplyMs:0,pending:!1,lastMissing:0,lastCoarse:0};origin;terrain;ring;inFlight=!1;disposed=!1;constructor(e,t,i){this.origin=e,this.terrain=t,this.ring=i}follow(e,t,i,a){if(this.inFlight||this.disposed)return;const s=this.terrain.detailCentre;if(Math.hypot(e-s.x,t-s.z)<=rb)return;const o=Math.round((e+i*qh)/Ws)*Ws,r=Math.round((t+a*qh)/Ws)*Ws;o===s.x&&r===s.z||(this.inFlight=!0,this.stats.pending=!0,this.move(o,r))}dispose(){this.disposed=!0}async move(e,t){const i=performance.now();try{const a=this.origin.toLatLon(e,t),s=await uf(co(a.lat,a.lon,this.ring.extent*lb),this.ring.imageryZoom);if(this.stats.lastStitchMs=performance.now()-i,this.stats.lastMissing=s.missing,this.stats.lastCoarse=s.coarse,this.disposed)return;const o=performance.now();this.terrain.recentreDetail(e,t,s),this.stats.lastApplyMs=performance.now()-o,this.stats.worstApplyMs=Math.max(this.stats.worstApplyMs,this.stats.lastApplyMs),this.stats.moves++}catch(a){console.warn("[skycast] detail ring restitch failed, keeping the old drape",a)}finally{this.inFlight=!1,this.stats.pending=!1}}}const Et=192;function hb(n){const e=Math.max(2e3,n.radiusM),t=e*2/Et,i=new Float32Array(Et*Et);for(const c of n.buildings){let h=1/0,u=-1/0,f=1/0,p=-1/0;for(let d=0;d<c.ring.length;d+=2){const v=c.ring[d],x=c.ring[d+1];v<h&&(h=v),v>u&&(u=v),x<f&&(f=x),x>p&&(p=x)}const w=Math.max(0,(u-h)*(p-f)),g=Math.floor((c.cx+e)/t),m=Math.floor((c.cz+e)/t);g<0||g>=Et||m<0||m>=Et||(i[m*Et+g]+=w)}const a=Float32Array.from(i).sort(),s=a[Math.floor(a.length*.98)]||1,o=new Float32Array(Et*Et);for(let c=0;c<Et;c++)for(let h=0;h<Et;h++){let u=0,f=0;for(let p=-1;p<=1;p++)for(let w=-1;w<=1;w++){const g=h+w,m=c+p;g<0||g>=Et||m<0||m>=Et||(u+=i[m*Et+g],f++)}o[c*Et+h]=u/f}const r=new Uint8Array(Et*Et);for(let c=0;c<r.length;c++)r[c]=Math.round(255*Math.min(1,Math.sqrt(o[c]/s)));const l=new Rn(r,Et,Et,Yn,_t);return l.minFilter=Ze,l.magFilter=Ze,l.wrapS=Tt,l.wrapT=Tt,l.needsUpdate=!0,{texture:l,extent:e}}function Yh(){const n=new Uint8Array(1),e=new Rn(n,1,1,Yn,_t);return e.needsUpdate=!0,{texture:e,extent:1}}const jh=.25,ub=8e3;var Ke=(n=>(n[n.Motorway=0]="Motorway",n[n.Trunk=1]="Trunk",n[n.Primary=2]="Primary",n[n.Secondary=3]="Secondary",n[n.Tertiary=4]="Tertiary",n[n.Residential=5]="Residential",n[n.Unclassified=6]="Unclassified",n[n.Service=7]="Service",n[n.LivingStreet=8]="LivingStreet",n[n.Busway=9]="Busway",n[n.Pedestrian=10]="Pedestrian",n[n.Footway=11]="Footway",n[n.Cycleway=12]="Cycleway",n[n.Track=13]="Track",n))(Ke||{}),ot=(n=>(n[n.Unknown=0]="Unknown",n[n.Asphalt=1]="Asphalt",n[n.Concrete=2]="Concrete",n[n.Paved=3]="Paved",n[n.Gravel=4]="Gravel",n[n.Dirt=5]="Dirt",n[n.Cobblestone=6]="Cobblestone",n))(ot||{});const db=1,ba=2,Aa=4,df=8,fb=-5,pb=5,mb=3.5,gb=[4,4,4,2,2,2,2,1,1,2,0,0,0,0],vb=[null,null,null,null,null,null,null,null,null,null,6,1.8,2.5,3],wb=1,On=.35,ff=3.5,xb=2.5;function pf(n,e){return(n&ba)===0?On:On+ff+Math.max(0,e)*xb}function fs(n,e,t=0){const i=vb[n];return i??(e>0?e:(t&df)!==0?wb:gb[n]??2)*mb}function yb(n){const e=new Array(n.length);for(let t=0;t<n.length;t++){const i=n[t],a=Math.fround(i.cx),s=Math.fround(i.cz),o=i.dx.length,r=new Float32Array(o*2);for(let l=0;l<o;l++)r[l*2]=a+i.dx[l]*jh,r[l*2+1]=s+i.dz[l]*jh;e[t]={cls:i.cls,lanes:i.lanes,flags:i.flags,layer:i.layer,surface:i.surface,cx:a,cz:s,pts:r,name:i.name}}return e}function _b(n){let e=0;for(let t=2;t<n.pts.length;t+=2)e+=Math.hypot(n.pts[t]-n.pts[t-2],n.pts[t+1]-n.pts[t-1]);return e}const bb=5,Mb=2560,mf=1.5,Yl=6,Sb=(()=>{const n=new Array(14).fill(!0);return n[Ke.Footway]=!1,n[Ke.Cycleway]=!1,n[Ke.Track]=!1,n})();function Eb(n){return Math.min(Mb,Math.max(256,Math.ceil(n*2/bb)))}function Tb(n,e){const t=e*.5+mf,i=t+Yl;return n<=t?1:n>=i?0:(i-n)/Yl}function Ab(n,e,t,i,a,s){const o=a-t,r=s-i,l=o*o+r*r;let c=l>0?((n-t)*o+(e-i)*r)/l:0;c=c<0?0:c>1?1:c;const h=t+c*o-n,u=i+c*r-e;return h*h+u*u}function Rb(n,e){const{n:t,data:i}=n,a=n.extent,s=a*2/t;for(const o of e){if(!Sb[o.cls])continue;const r=fs(o.cls,o.lanes,o.flags),l=r*.5+mf+Yl,c=l*l;for(let h=2;h<o.pts.length;h+=2){const u=o.pts[h-2],f=o.pts[h-1],p=o.pts[h],w=o.pts[h+1],g=Math.max(0,Math.floor((Math.min(u,p)+a-l)/s)),m=Math.max(0,Math.floor((Math.min(f,w)+a-l)/s)),d=Math.min(t-1,Math.floor((Math.max(u,p)+a+l)/s)),v=Math.min(t-1,Math.floor((Math.max(f,w)+a+l)/s));for(let x=m;x<=v;x++){const y=(x+.5)*s-a,_=x*t;for(let b=g;b<=d;b++){const E=(b+.5)*s-a,R=Ab(E,y,u,f,p,w);if(R>=c)continue;const M=Math.round(255*Tb(Math.sqrt(R),r));M>i[_+b]&&(i[_+b]=M)}}}}}class Cb{cov;texture;constructor(e){const t=Eb(e);this.cov={data:new Uint8Array(t*t),n:t,extent:e},this.texture=new Rn(this.cov.data,t,t,Yn,_t),this.texture.minFilter=Ze,this.texture.magFilter=Ze,this.texture.wrapS=Tt,this.texture.wrapT=Tt,this.texture.needsUpdate=!0}add(e){Rb(this.cov,e)}dispose(){this.texture.dispose()}}function Db(){const n=new Rn(new Uint8Array(1),1,1,Yn,_t);return n.needsUpdate=!0,{texture:n,extent:1,has:!1,cellM:0,bytes:1}}const Pb=.135,Bo=[62,58,52,46,40,34,34,44,28,46,0,0,0,0],Lb=[10,10,9.5,8.5,7.5,5.5,5.5,5,5,8,0,0,0,0],gf=.06,Ib=.75,Fb=`
const float LAMP_SPACING[14] = float[14](${Bo.map(n=>n.toFixed(1)).join(", ")});
const float LAMP_POOL_V = ${gf.toFixed(4)};

float lampSpacingM(float cls) {
  int i = int(clamp(cls + 0.5, 0.0, 13.0));
  return LAMP_SPACING[i];
}
`;function kb(n){return(n.flags&Aa)!==0?!1:(Bo[n.cls]??0)>0}const Nb=3;function Ub(n){const e=n.length/2,t=new Float64Array(e);for(let i=1;i<e;i++)t[i]=t[i-1]+Math.hypot(n[i*2]-n[i*2-2],n[i*2+1]-n[i*2-1]);return t}function Ob(n,e,t){const i=e.length;if(i<2)return null;let a=1;for(;a<i-1&&e[a]<t;)a++;const s=e[a]-e[a-1];if(!(s>0))return null;const o=Math.min(1,Math.max(0,(t-e[a-1])/s)),r=n[a*2-2],l=n[a*2-1],c=n[a*2],h=n[a*2+1];return{x:r+(c-r)*o,z:l+(h-l)*o,dirX:(c-r)/s,dirZ:(h-l)/s}}function zb(n,e,t,i){if(!kb(e))return 0;const a=Bo[e.cls],s=Lb[e.cls];if(!(a>0)||!(s>0))return 0;const o=Ub(e.pts),r=o[o.length-1],l=fs(e.cls,e.lanes,e.flags)*.5,c=l*Math.abs(1-2*gf),h=l+Ib,u=h-c;let f=0;for(let p=0;;p++){const w=(p+.5)*a;if(w>r)break;const g=Ob(e.pts,o,w);if(!g)break;const m=g.dirZ,d=-g.dirX,v=p%2===0?1:-1,x=g.x+m*h*v,y=g.z+d*h*v;if(i.occupied&&i.occupied(x,y)||i.onCarriageway&&i.onCarriageway(x,y,t))continue;const _=i.nearestMeasuredLamp?i.nearestMeasuredLamp(x,y,Nb):null,b=_?_.x:x,E=_?_.z:y,R=-m*v,M=-d*v;n.push({x:b,y:i.groundY(b,E)+pf(e.flags,e.layer)+Pb,z:E,yaw:Math.atan2(-M,R),heightM:s,armM:u,cls:e.cls,u:w,road:t,side:v,measured:_!==null}),f++}return f}function Kh(n){const e=Math.fround,t=a=>e(a-Math.floor(a));let i=t(e(n*e(.1031)));return i=e(i*e(i+e(33.33))),t(e(i*e(i+i)))}const Bb=new me,Hb=450,Xs=1200;class xc{group=new vn;lamps=[];grid=new Map;cell=100;column;armMesh;lantern;steel=new ns({color:1118481});glow=new ns({color:16777215});lastX=1/0;lastZ=1/0;dirty=!1;constructor(){const e=new oi(1,1,1);e.translate(0,.5,0),this.column=new dr(e,this.steel,Xs);const t=new oi(1,1,1);t.translate(.5,0,0),this.armMesh=new dr(t,this.steel,Xs);const i=new oi(1,1,1);this.lantern=new dr(i,this.glow,Xs),this.lantern.setColorAt(0,new me(1,1,1));for(const a of[this.column,this.armMesh,this.lantern])a.count=0,a.frustumCulled=!1,this.group.add(a)}add(e,t=""){for(const i of e){const a=Math.cos(i.yaw),s=Math.sin(i.yaw),o=new k(i.x+a*i.armM,i.y+i.heightM,i.z-s*i.armM),r=Bo[i.cls]||30,l=new me,c=xc.tint(Math.round(i.u/r-.5),l),h={top:o,base:new k(i.x,i.y,i.z),yaw:i.yaw,height:i.heightM,arm:i.armM,color:l,bright:c,tag:t};this.lamps.push(h);const u=`${Math.floor(o.x/this.cell)},${Math.floor(o.z/this.cell)}`,f=this.grid.get(u);f?f.push(h):this.grid.set(u,[h])}this.dirty=!0}static tint(e,t){const i=Math.min(1,Math.max(0,(Kh(e*9.1+2)-.05)/.55)),a=i*i*(3-2*i);return t.setRGB(.85+.15*a,.9-.18*a,1-.64*a),.3+.9*Kh(e*3.3)}update(e,t,i,a){if(this.steel.color.copy(a),this.glow.color.setScalar(28*i),this.lantern.visible=i>.02,!this.dirty&&Math.hypot(e-this.lastX,t-this.lastZ)<25)return;this.dirty=!1,this.lastX=e,this.lastZ=t;const s=this.lamps.map(u=>({l:u,d:Math.hypot(u.top.x-e,u.top.z-t)})).filter(u=>u.d<Hb).sort((u,f)=>u.d-f.d).slice(0,Xs),o=new Ye,r=new xn,l=new k(0,1,0),c=new k,h=new k;s.forEach(({l:u},f)=>{r.setFromAxisAngle(l,u.yaw),o.compose(c.copy(u.base),r,h.set(.14,u.height,.14)),this.column.setMatrixAt(f,o),o.compose(c.set(u.base.x,u.base.y+u.height-.1,u.base.z),r,h.set(u.arm,.1,.1)),this.armMesh.setMatrixAt(f,o),o.compose(c.set(u.top.x,u.top.y-.15,u.top.z),r,h.set(.6,.12,.3)),this.lantern.setMatrixAt(f,o),this.lantern.setColorAt(f,Bb.copy(u.color).multiplyScalar(u.bright))});for(const u of[this.column,this.armMesh,this.lantern])u.count=s.length,u.instanceMatrix.needsUpdate=!0;this.lantern.instanceColor&&(this.lantern.instanceColor.needsUpdate=!0)}nearest(e,t,i,a,s){s.length=0;const o=Math.floor(e/this.cell),r=Math.floor(i/this.cell),l=[];for(let c=-1;c<=1;c++)for(let h=-1;h<=1;h++){const u=this.grid.get(`${o+h},${r+c}`);if(u)for(const f of u){const p=f.top.x-e,w=f.top.y-t,g=f.top.z-i;l.push({l:f,d2:p*p+w*w+g*g})}}l.sort((c,h)=>c.d2-h.d2);for(let c=0;c<Math.min(a,l.length);c++){const h=l[c].l;s.push({x:h.top.x,y:h.top.y-.25,z:h.top.z,intensity:1.6*h.bright,color:h.color})}return s}removeTag(e){const t=this.lamps.filter(i=>i.tag!==e);if(t.length!==this.lamps.length){this.lamps.length=0,this.lamps.push(...t);for(const[i,a]of this.grid){const s=a.filter(o=>o.tag!==e);s.length?this.grid.set(i,s):this.grid.delete(i)}this.dirty=!0}}clear(){this.lamps.length=0,this.grid.clear(),this.dirty=!0}dispose(){this.column.geometry.dispose(),this.armMesh.geometry.dispose(),this.lantern.geometry.dispose(),this.steel.dispose(),this.glow.dispose()}}var Kt=(n=>(n[n.NoData=0]="NoData",n[n.Tree=10]="Tree",n[n.Shrub=20]="Shrub",n[n.Grass=30]="Grass",n[n.Crop=40]="Crop",n[n.Built=50]="Built",n[n.Bare=60]="Bare",n[n.Snow=70]="Snow",n[n.Water=80]="Water",n[n.Wetland=90]="Wetland",n[n.Mangrove=95]="Mangrove",n[n.Moss=100]="Moss",n))(Kt||{});Kt.NoData+"",Kt.Water+"",Kt.Built+"",Kt.Tree+"",Kt.Mangrove+"",Kt.Shrub+"",Kt.Grass+"",Kt.Crop+"",Kt.Wetland+"",Kt.Moss+"",Kt.Bare+"",Kt.Snow+"";function Gb(n,e,t,i,a){const s=t*2/e,o=(i+t)/s-.5,r=(a+t)/s-.5,l=Math.floor(o),c=Math.floor(r),h=o-l,u=r-c,f=y=>y<0?0:y>=e?e-1:y,p=f(l),w=f(l+1),g=f(c),m=f(c+1),d=[0,0,0,0],v=[[p,g,(1-h)*(1-u)],[w,g,h*(1-u)],[p,m,(1-h)*u],[w,m,h*u]];for(const[y,_,b]of v){const E=(_*e+y)*4;for(let R=0;R<4;R++)d[R]+=b*(n[E+R]/255)}const x=Math.max(0,1-(d[0]+d[1]+d[2]+d[3]));return{water:d[0],built:d[1],tree:d[2],herb:d[3],bare:x}}function Vb(n,e){const t=new Rn(n,e,e,gt,_t);return t.minFilter=Ze,t.magFilter=Ze,t.wrapS=Tt,t.wrapT=Tt,t.needsUpdate=!0,t}function Wb(){const n=()=>Vb(new Uint8Array(4),1);return{near:n(),far:n(),nearExtent:1,farExtent:1,has:!1}}class Xb{geometry;arrays={};capacity;attributes={};derived=[];constructor(e,t,i){this.capacity=t;const a=new wo;a.index=e.index;for(const s of Object.keys(e.attributes))a.setAttribute(s,e.attributes[s]);for(const s of i){const o=new Float32Array(t*s.itemSize),r=new wa(o,s.itemSize);r.setUsage(Vp),a.setAttribute(s.name,r),this.arrays[s.name]=o,this.attributes[s.name]=r}a.instanceCount=0,a.boundingSphere=new rn(new k,1/0),this.geometry=a}derive(e){const t=new wo;t.index=e.index;for(const i of Object.keys(e.attributes))t.setAttribute(i,e.attributes[i]);for(const i of Object.keys(this.attributes))t.setAttribute(i,this.attributes[i]);return t.instanceCount=this.geometry.instanceCount,t.boundingSphere=new rn(new k,1/0),this.derived.push(t),t}upload(e){const t=Math.min(e,this.capacity);for(const i of Object.keys(this.attributes)){const a=this.attributes[i];a.clearUpdateRanges(),a.addUpdateRange(0,t*a.itemSize),a.needsUpdate=!0}this.geometry.instanceCount=t;for(const i of this.derived)i.instanceCount=t}dispose(){this.geometry.dispose();for(const e of this.derived)e.dispose()}}const $b=`
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
`,ho=Math.PI*2,So=[{name:"broadleaf",crownBase:.38,trunkTop:.48,trunkR0:.13,trunkR1:.075,profile:[.3,.7,.93,1,.86,.96,.82,.61,.42,.16],lobes:[{n:2,amp:.2,phase:.72,twist:.9},{n:3,amp:.22,phase:2.1,twist:-1.4},{n:5,amp:.1,phase:4.02,twist:2.2},{n:7,amp:.06,phase:1.24,twist:-2.8}]},{name:"conifer",crownBase:.14,trunkTop:.26,trunkR0:.2,trunkR1:.11,profile:[.84,1,.79,.9,.66,.76,.52,.6,.37,.43,.21,.25,.06],lobes:[{n:3,amp:.1,phase:1.5,twist:1.1},{n:5,amp:.09,phase:3.3,twist:-2},{n:8,amp:.06,phase:.4,twist:3}]}],qb=0,Zh=1,Si=[{name:"near",sides:20,rings:11,trunkSides:8,farM:260},{name:"mid",sides:14,rings:8,trunkSides:5,farM:600},{name:"far",sides:9,rings:4,trunkSides:4,farM:1/0}];function Yb(n,e){const t=n.length,i=Math.min(Math.max(e,0),1)*(t-1),a=Math.min(t-2,Math.floor(i)),s=i-a,o=s*s*(3-2*s);return n[a]*(1-o)+n[a+1]*o}function jb(n,e,t){let i=0;for(const a of n.lobes)i+=a.amp*Math.sin(a.n*e+a.phase+a.twist*t);return Yb(n.profile,t)*(1+i)}const Ji=5;function vf(n,e,t,i,a){let s=0;for(let o=0;o<Ji;o++){const r=e+((o+.5)/Ji-.5)*i;for(let l=0;l<Ji;l++){const c=t+((l+.5)/Ji-.5)*a;s+=jb(n,r,Math.min(1,Math.max(0,c)))}}return s/(Ji*Ji)}function wf(n,e,t,i){let a=0;for(let s=t;s<i;s+=3){const o=e[s]*3,r=e[s+1]*3,l=e[s+2]*3,c=n[o],h=n[o+1],u=n[o+2],f=n[r],p=n[r+1],w=n[r+2],g=n[l],m=n[l+1],d=n[l+2];a+=c*(p*d-w*m)-h*(f*d-w*g)+u*(f*m-p*g)}return a/6}const Kb=96,Zb=48,Jh=new Map;function Jb(n){const e=Jh.get(n.name);if(e!==void 0)return e;const t=xf(n,Kb,Zb,1),i=wf(t.pos,t.idx,0,t.idx.length);return Jh.set(n.name,i),i}function xf(n,e,t,i){const a=ho/e,s=1/t,o=1-n.crownBase,r=new Float32Array((e*t+2)*3);r[0]=0,r[1]=n.crownBase,r[2]=0;for(let u=0;u<t;u++){const f=(u+.5)/t;for(let p=0;p<e;p++){const w=p*a,g=vf(n,w,f,a,s)*i,m=(1+u*e+p)*3;r[m]=Math.cos(w)*g,r[m+1]=n.crownBase+o*f,r[m+2]=Math.sin(w)*g}}const l=e*t+1;r[l*3]=0,r[l*3+1]=1,r[l*3+2]=0;const c=[];for(let u=0;u<e;u++)c.push(0,1+u,1+(u+1)%e);for(let u=0;u+1<t;u++){const f=1+u*e,p=1+(u+1)*e;for(let w=0;w<e;w++){const g=(w+1)%e;c.push(f+w,p+w,p+g,f+w,p+g,f+g)}}const h=1+(t-1)*e;for(let u=0;u<e;u++)c.push(h+u,l,h+(u+1)%e);return{pos:r,idx:c}}function Qb(n,e){const t=e*Math.PI/n;return t===0?1:Math.max(0,Math.sin(t)/t)}const e1=3;function yf(n,e){const t=So[n],i=Si[e],{sides:a,rings:s,trunkSides:o}=i,r=xf(t,a,s,1),l=wf(r.pos,r.idx,0,r.idx.length),c=l>0?Math.sqrt(Jb(t)/l):1,h=[],u=[],f=[],p=Qb(a,e1),w=(D,I,F,O,V,z)=>(h.push(D,I,F),u.push(O,V,z,O>.5?p:0),h.length/3-1),g=(D,I)=>{const F=[];for(let O=0;O<o;O++){const V=O/o,z=V*ho;F.push(w(Math.cos(z)*I,D,Math.sin(z)*I,0,0,V))}return F},m=(D,I)=>{for(let F=0;F<D.length;F++){const O=(F+1)%D.length;f.push(D[F],I[F],I[O],D[F],I[O],D[O])}};m(g(0,t.trunkR0),g(t.trunkTop,t.trunkR1));const d=f.length,v=ho/a,x=1/s,y=1-t.crownBase,_=w(0,t.crownBase,0,1,0,0),b=[];for(let D=0;D<s;D++){const I=(D+.5)/s,F=[];for(let O=0;O<a;O++){const V=O/a,z=V*ho,N=vf(t,z,I,v,x)*c;F.push(w(Math.cos(z)*N,t.crownBase+y*I,Math.sin(z)*N,1,I,V))}b.push(F)}const E=w(0,1,0,1,1,0);for(let D=0;D<a;D++)f.push(_,b[0][D],b[0][(D+1)%a]);for(let D=0;D+1<s;D++)m(b[D],b[D+1]);const R=b[s-1];for(let D=0;D<a;D++)f.push(R[D],E,R[(D+1)%a]);const M=new Float32Array(h),S=new Uint16Array(f),A=new Float32Array(M.length);for(let D=0;D<S.length;D+=3){const I=S[D]*3,F=S[D+1]*3,O=S[D+2]*3,V=M[F]-M[I],z=M[F+1]-M[I+1],N=M[F+2]-M[I+2],K=M[O]-M[I],ne=M[O+1]-M[I+1],le=M[O+2]-M[I+2],Te=z*le-N*ne,oe=N*K-V*le,Ue=V*ne-z*K;for(const Ie of[I,F,O])A[Ie]+=Te,A[Ie+1]+=oe,A[Ie+2]+=Ue}for(let D=0;D<A.length;D+=3){const I=Math.hypot(A[D],A[D+1],A[D+2])||1;A[D]/=I,A[D+1]/=I,A[D+2]/=I}return{position:M,normal:A,aTree:new Float32Array(u),index:S,triangles:S.length/3,crownIndexStart:d}}function t1(n){return Math.min(1,Math.max(.08,n/12))||.08}const n1=`
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
`,jl=16,dn=256,i1=.12,a1=.85,s1=4,o1=1.5,r1=6.5,l1=10;function c1(n){const e=fs(n.cls,n.lanes,n.flags)*.5;return n.cls>=l1?e+o1:Math.max(r1,e+s1)}const uo=[{name:"broadleaf",minHeightM:9,maxHeightM:19,crownRatio:.38,conifer:0,tint:.3},{name:"street",minHeightM:6,maxHeightM:12,crownRatio:.34,conifer:.1,tint:.62},{name:"conifer",minHeightM:12,maxHeightM:28,crownRatio:.24,conifer:1,tint:.08},{name:"scrub",minHeightM:3,maxHeightM:7,crownRatio:.5,conifer:0,tint:.85}];function vi(n,e,t){let i=Math.imul(n,668265261)^Math.imul(e,374761393)^Math.imul(t,2654435761);return i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>13,695872825),((i^i>>>16)>>>0)/4294967296}const h1=528734635,u1=1541459225,d1=2600822924,f1=1359893119,p1=2773480762,m1=1013904242,g1=3144134277,Qh=.92;class _f{ax;az;bx;bz;pad;owner;cellM;minX;minZ;nx;nz;start;items;segments;constructor(e,t,i=32,a){this.cellM=i;let s=0;for(const g of e)s+=g.pts.length/2-1;this.segments=s,this.ax=new Float32Array(s),this.az=new Float32Array(s),this.bx=new Float32Array(s),this.bz=new Float32Array(s),this.pad=new Float32Array(s),this.owner=new Int32Array(s);let o=1/0,r=-1/0,l=1/0,c=-1/0,h=0;for(let g=0;g<e.length;g++){const m=e[g],d=t(m);for(let v=2;v<m.pts.length;v+=2){const x=m.pts[v-2],y=m.pts[v-1],_=m.pts[v],b=m.pts[v+1];this.ax[h]=x,this.az[h]=y,this.bx[h]=_,this.bz[h]=b,this.pad[h]=d,this.owner[h]=a?a(m,g):g,h++;const E=Math.min(x,_)-d,R=Math.max(x,_)+d,M=Math.min(y,b)-d,S=Math.max(y,b)+d;E<o&&(o=E),R>r&&(r=R),M<l&&(l=M),S>c&&(c=S)}}s===0&&(o=0,r=0,l=0,c=0),this.minX=o,this.minZ=l,this.nx=Math.max(1,Math.ceil((r-o)/i)+1),this.nz=Math.max(1,Math.ceil((c-l)/i)+1);const u=this.nx*this.nz,f=new Int32Array(u+1),p=g=>{for(let m=0;m<s;m++){const d=this.pad[m],v=this.col(Math.min(this.ax[m],this.bx[m])-d),x=this.col(Math.max(this.ax[m],this.bx[m])+d),y=this.row(Math.min(this.az[m],this.bz[m])-d),_=this.row(Math.max(this.az[m],this.bz[m])+d);for(let b=y;b<=_;b++)for(let E=v;E<=x;E++)g(b*this.nx+E,m)}};p(g=>{f[g+1]++});for(let g=0;g<u;g++)f[g+1]+=f[g];this.start=f,this.items=new Int32Array(f[u]);const w=new Int32Array(u);p((g,m)=>{this.items[this.start[g]+w[g]++]=m})}rawCol(e){return Math.floor((e-this.minX)/this.cellM)}rawRow(e){return Math.floor((e-this.minZ)/this.cellM)}col(e){const t=Math.floor((e-this.minX)/this.cellM);return t<0?0:t>=this.nx?this.nx-1:t}row(e){const t=Math.floor((e-this.minZ)/this.cellM);return t<0?0:t>=this.nz?this.nz-1:t}distSq(e,t,i){const a=this.ax[e],s=this.az[e],o=this.bx[e]-a,r=this.bz[e]-s,l=o*o+r*r;let c=l>0?((t-a)*o+(i-s)*r)/l:0;c=c<0?0:c>1?1:c;const h=t-(a+c*o),u=i-(s+c*r);return h*h+u*u}blocked(e,t){const i=this.row(t)*this.nx+this.col(e);for(let a=this.start[i];a<this.start[i+1];a++){const s=this.items[a],o=this.pad[s];if(this.distSq(s,e,t)<=o*o)return!0}return!1}blockedExcept(e,t,i){const a=this.row(t)*this.nx+this.col(e);for(let s=this.start[a];s<this.start[a+1];s++){const o=this.items[s];if(this.owner[o]===i)continue;const r=this.pad[o];if(this.distSq(o,e,t)<=r*r)return!0}return!1}nearest(e,t){const i=this.row(t)*this.nx+this.col(e);let a=1/0;for(let s=this.start[i];s<this.start[i+1];s++){const o=this.distSq(v1(this.items,s),e,t);o<a&&(a=o)}return a===1/0?1/0:Math.sqrt(a)}nearestSegment(e,t,i){const a=this.rawCol(e),s=this.rawRow(t),o=Math.ceil(i/this.cellM)+1;let r=i*i,l=-1;const c=(m,d)=>{if(m<0||d<0||m>=this.nx||d>=this.nz)return;const v=d*this.nx+m;for(let x=this.start[v];x<this.start[v+1];x++){const y=this.items[x],_=this.distSq(y,e,t);(_<r||_===r&&l>=0&&y<l)&&(r=_,l=y)}};for(let m=0;m<=o;m++){if(m===0)c(a,s);else{for(let d=-m;d<=m;d++)c(a+d,s-m),c(a+d,s+m);for(let d=-m+1;d<=m-1;d++)c(a-m,s+d),c(a+m,s+d)}if(l>=0&&r<=(m*this.cellM)**2)break}if(l<0)return null;const h=this.ax[l],u=this.az[l],f=this.bx[l]-h,p=this.bz[l]-u,w=f*f+p*p;let g=w>0?((e-h)*f+(t-u)*p)/w:0;return g=g<0?0:g>1?1:g,{road:this.owner[l],segment:l,distanceM:Math.sqrt(r),x:h+g*f,z:u+g*p,dirX:w>0?f/Math.sqrt(w):1,dirZ:w>0?p/Math.sqrt(w):0}}}function v1(n,e){return n[e]}const za=4;class w1{bits;n;extentM;constructor(e,t){this.extentM=t,this.n=Math.max(1,Math.ceil(t*2/za)),this.bits=new Uint32Array(Math.ceil(this.n*this.n/32)),this.add(e)}add(e){const t=this.extentM;for(const i of e){const a=i.ring;if(a.length<6)continue;let s=1/0,o=-1/0,r=1/0,l=-1/0;for(let p=0;p<a.length;p+=2)a[p]<s&&(s=a[p]),a[p]>o&&(o=a[p]),a[p+1]<r&&(r=a[p+1]),a[p+1]>l&&(l=a[p+1]);const c=this.index(s),h=this.index(o),u=this.index(r),f=this.index(l);if(!(h<0||f<0||c>=this.n||u>=this.n)){for(let p=0,w=a.length-2;p<a.length;w=p,p+=2){const g=a[p]-a[w],m=a[p+1]-a[w+1],d=Math.max(1,Math.ceil(Math.hypot(g,m)/(za*.5)));for(let v=0;v<=d;v++){const x=this.index(a[w]+g*v/d),y=this.index(a[w+1]+m*v/d);x>=0&&y>=0&&x<this.n&&y<this.n&&this.set(x,y)}}for(let p=Math.max(0,u);p<=Math.min(this.n-1,f);p++){const w=-t+(p+.5)*za;for(let g=Math.max(0,c);g<=Math.min(this.n-1,h);g++){const m=-t+(g+.5)*za;x1(a,m,w)&&this.set(g,p)}}}}}index(e){return Math.floor((e+this.extentM)/za)}set(e,t){const i=t*this.n+e;this.bits[i>>>5]|=1<<(i&31)}occupied(e,t){const i=this.index(e),a=this.index(t);if(i<0||a<0||i>=this.n||a>=this.n)return!1;const s=a*this.n+i;return(this.bits[s>>>5]&1<<(s&31))!==0}}function x1(n,e,t){let i=!1;for(let a=0,s=n.length-2;a<n.length;s=a,a+=2){const o=n[a+1],r=n[s+1];if(o>t!=r>t){const l=(t-o)/(r-o);e<n[a]+l*(n[s]-n[a])&&(i=!i)}}return i}class y1{parts=[];add(e){this.parts.push(e)}remove(e){const t=this.parts.indexOf(e);t>=0&&this.parts.splice(t,1)}blocked(e,t){for(const i of this.parts)if(i.blocked(e,t))return!0;return!1}}function _1(n,e,t,i,a,s=[]){const o=n.spacingM??jl,{mask:r,heightAt:l,roads:c,footprints:h}=n,u=Math.floor(e/o)-1,f=Math.floor(i/o)+1,p=Math.floor(t/o)-1,w=Math.floor(a/o)+1;for(let g=p;g<=w;g++)for(let m=u;m<=f;m++){const d=(m+.5+(vi(m,g,h1)-.5)*Qh)*o,v=(g+.5+(vi(m,g,u1)-.5)*Qh)*o;if(d<e||d>=i||v<t||v>=a)continue;const x=Gb(r.rgba,r.n,r.extentM,d,v);if(x.water>i1||x.built>a1||vi(m,g,d1)>=x.tree||h&&h.occupied(d,v)||c&&c.blocked(d,v))continue;const y=Math.min(uo.length-1,Math.floor(vi(m,g,f1)*uo.length)),_=uo[y],b=vi(m,g,p1),E=_.minHeightM+(_.maxHeightM-_.minHeightM)*b,R=E*_.crownRatio*(.78+.5*x.tree);s.push({x:d,y:l(d,v),z:v,heightM:E,radiusM:R,yaw:vi(m,g,m1)*Math.PI*2,species:y,tint:vi(m,g,g1)})}return s}const b1=2200,M1=1100,eu=1400,S1=64,E1=.5,T1=1.15,A1=.22;Si.map((n,e)=>Math.max(...So.map((t,i)=>yf(i,e).triangles)));const bf=`
precision highp float;
in vec3 position;
in vec3 normal;
// x crown flag, y canopy depth, z angle 0..1, w this level's lobe gain.
in vec4 aTree;
// Two vec4s, not a mat4: see render/instanced.ts.
in vec4 iPos;    // xyz world origin, w yaw
// x crown radius m, y height m, z shape seed 0..1, w tint 0..1 (+10 for a
// conifer: one material draws both forms, and only a broadleaf drops leaves)
in vec4 iShape;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec3 uCameraPos;
uniform vec2 uFade;
// xy: the unit direction the wind blows TOWARD. z: strength, 0 to 1.
uniform vec3 uWind;
uniform float uTime;

${$b}
${n1}

const float LEAN_MAX = ${A1};
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
`,R1=`
${bf}
out vec3 vNormal;
out vec3 vWorld;
out vec2 vTree;
out float vViewDist;
out float vTint;
out float vLeaf;
out float vDecid;

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
  vDecid = 1.0 - step(5.0, iShape.w);
  vTint = iShape.w - 10.0 * (1.0 - vDecid);
  vViewDist = distance(pl.world, uCameraPos);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pl.world, 1.0);
}
`,C1=`
${bf}
out vec3 vWorld;
out float vBare;
uniform float uLeafOn;
void main() {
  Placed pl = placeVertex();
  vWorld = pl.world;
  // How much of this crown is gone for the winter, per tree (see FRAG).
  float decid = 1.0 - step(5.0, iShape.w);
  float j = fract((iShape.w - 10.0 * (1.0 - decid)) * 13.7);
  vBare = aTree.x > 0.5 ? decid * (1.0 - smoothstep(j * 0.3, j * 0.3 + 0.7, uLeafOn)) : 0.0;
  gl_Position = pl.culled ? INSTANCE_CULLED
              : projectionMatrix * modelViewMatrix * vec4(pl.world, 1.0);
}
`,D1=`precision highp float;
in vec3 vWorld;
in float vBare;
out vec4 c;
void main() {
  if (vBare > 0.0) {
    vec3 q = fract(floor(vWorld * 1.3) * 0.1031);
    q += dot(q, q.yzx + 33.33);
    if (fract((q.x + q.y) * q.z) > 1.0 - vBare * ${1-.35}) discard;
  }
  c = vec4(1.0);
}`,P1=`
precision highp float;
in vec3 vNormal;
in vec3 vWorld;
in vec2 vTree;
in float vViewDist;
in float vTint;
in float vLeaf;
in float vDecid;
out vec4 fragColor;

// Aerial perspective only, the same short march the terrain and the buildings
// use. Trees without it are a saturated green band against a hazed hillside.
#define ATMO_STEPS 7
#define ATMO_SUN_STEPS 2
${jn}
${ko}
${ds}
${No}

uniform vec3  uCameraPos;
uniform float uSunSurface;
uniform vec3  uMoonDir;
uniform vec3  uMoonLight;
uniform float uNight;
uniform float uSnow;
// The broadleaf season (data/phenology.ts): 0 bare to 1 in full leaf, and
// 0 green to 1 turned.
uniform float uLeafOn;
uniform float uAutumn;
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

  // THE SEASON, broadleaves only. Each tree keeps its own phase (a few days
  // either side of the calendar), so a street turns tree by tree rather than
  // all at once. Autumn is yellow, orange, red or brown per tree, brighter
  // than summer green because a turning leaf has lost its chlorophyll.
  // Bare, a crown is a mass of twigs: most of it is let through (discarded,
  // near the lens only: far away a hole pattern would sparkle, and a bare
  // wood seen from afar IS a grey-brown haze) and what is left is twig.
  float j = fract(vTint * 13.7);
  float on = mix(1.0, smoothstep(j * 0.3, j * 0.3 + 0.7, uLeafOn), vDecid);
  float turned = vDecid * smoothstep(j * 0.35, j * 0.35 + 0.65, uAutumn);
  float hue = fract(vTint * 7.31);
  // Muted on purpose: a street's worth of pure orange read as a cartoon.
  // A crown turns in patches, so some green stays in most of them.
  vec3 autumnC = hue < 0.35 ? vec3(0.20, 0.15, 0.035)  // yellow
               : hue < 0.65 ? vec3(0.20, 0.085, 0.022) // orange
               : hue < 0.82 ? vec3(0.14, 0.032, 0.020) // red
               : vec3(0.090, 0.055, 0.026);            // brown
  leaf = mix(leaf, autumnC * (0.65 + 0.7 * shade), turned * mix(0.75, 1.0, mix(0.5, fine, near)));
  vec3 twig = vec3(0.060, 0.050, 0.046) * (0.8 + 0.4 * shade);
  float bare = 1.0 - on;
  if (crown > 0.5 && bare > 0.0) {
    float q = near > 0.0 ? fract(vnoise3d(vWorld * 1.7).x * 3.0 + fine) : 0.5;
    // Leaf where q is under the canopy share, twig in the next 35% of what
    // is left, and through the rest.
    if (near > 0.0 && q > on + (1.0 - on) * 0.35 && q > 1.0 - near * bare) discard;
    leaf = mix(leaf, twig, near > 0.0 ? step(on, q) : bare);
  }
  vec3 albedo = mix(bark, leaf, crown);
  // Snow caught on the tops of the crowns, and a little on the upper side of
  // every branch; the undersides stay dark, which is what makes a snowy tree
  // read as a tree under snow and not as a white tree. A bare crown catches
  // it along every twig and whitens through, a conifer holds it on top of
  // green.
  albedo = mix(albedo, vec3(0.74, 0.76, 0.80), uSnow * smoothstep(0.15, 0.75, n.y) * (0.35 + 0.5 * crown));
  albedo = mix(albedo, vec3(0.62, 0.64, 0.68), uSnow * bare * crown * 0.3);

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
`,L1=(n,e)=>`${n},${e}`,I1=n=>n-Math.floor(n);class F1{group=new vn;depthScene=new mn;uniforms;stats={count:0,tiles:0,triangles:0,lodCounts:Si.map(()=>0),rebuildMs:0,clipped:!1};field;buckets=[];lodFarM;tiles=new Map;radiusM;extentM;atX=-1e9;atZ=-1e9;packedX=0;packedZ=0;constructor(e,t,i){this.field=e,this.radiusM=i?M1:b1,this.extentM=e.mask.extentM;const a=i?E1:1;this.lodFarM=Si.map(l=>Math.min(l.farM*a,this.radiusM)),this.uniforms={...t,...Uo(),uCameraPos:{value:new k},uSH:{value:xa([.28,.36,.5],.55,.45)},uFade:{value:new Ne(this.radiusM*.76,this.radiusM)},uWind:{value:new k(1,0,.3)},uTime:{value:0},uSunDir:{value:new k(0,1,0)},uSunColor:{value:new me(1,1,1)},uSunIntensity:{value:22},uSunSurface:{value:.105},uMoonDir:{value:new k(0,-1,0)},uMoonLight:{value:new me(0,0,0)},uNight:{value:0},uSnow:{value:0},uLeafOn:{value:1},uAutumn:{value:0},uNightGlow:{value:new me(0,0,0)},uMieG:{value:.76},uTurbidity:{value:1},...yn,uCamAltitude:{value:100},uMultiScatter:{value:.055}};const s=new Bt({vertexShader:R1,fragmentShader:P1,uniforms:this.uniforms,glslVersion:It,side:En}),o={...this.uniforms,uFade:{value:new Ne(eu*.8,eu)}},r=new Bt({vertexShader:C1,fragmentShader:D1,uniforms:o,glslVersion:It,colorWrite:!1});for(let l=0;l<Si.length;l++){const c=this.capacityFor(l);for(let h=0;h<So.length;h++){const u=yf(h,l),f=new At;f.setAttribute("position",new dt(u.position,3)),f.setAttribute("normal",new dt(u.normal,3)),f.setAttribute("aTree",new dt(u.aTree,4)),f.setIndex(new dt(u.index,1));const p=new Xb(f,c,[{name:"iPos",itemSize:4},{name:"iShape",itemSize:4}]);this.buckets.push({form:h,lod:l,field:p,triangles:u.triangles,count:0});const w=new lt(p.geometry,s);w.frustumCulled=!1,w.renderOrder=-1,this.group.add(w);const g=new lt(p.geometry,r);g.frustumCulled=!1,g.layers.enable(hs),this.depthScene.add(g)}}}capacityFor(e){const t=e===0?0:this.lodFarM[e-1],i=Math.min(this.lodFarM[e],this.radiusM),a=Math.PI*Math.max(0,i*i-t*t);return Math.max(64,Math.ceil(a/(jl*jl)*T1))}invalidate(){this.tiles.clear(),this.atX=-1e9,this.atZ=-1e9}update(e,t){const i=Math.floor(e/dn),a=Math.floor(t/dn),s=Math.hypot(e-this.packedX,t-this.packedZ);if(i===this.atX&&a===this.atZ&&s<S1)return;this.atX=i,this.atZ=a,this.packedX=e,this.packedZ=t;const o=performance.now(),r=this.radiusM,l=Math.ceil(r/dn)+1,c=[];for(let g=a-l;g<=a+l;g++)for(let m=i-l;m<=i+l;m++){const d=m*dn,v=g*dn;if(d+dn<-this.extentM||d>this.extentM||v+dn<-this.extentM||v>this.extentM)continue;const x=Math.max(0,Math.max(d-e,e-(d+dn))),y=Math.max(0,Math.max(v-t,t-(v+dn))),_=x*x+y*y;_>r*r||c.push({key:L1(m,g),x:d,z:v,d2:_})}c.sort((g,m)=>g.d2-m.d2);for(const g of this.buckets)g.count=0;const h=new Set;let u=0,f=!1;for(const g of c){let m=this.tiles.get(g.key);m||(m=_1(this.field,g.x,g.z,g.x+dn,g.z+dn),this.tiles.set(g.key,m)),h.add(g.key);for(const d of m){const v=Math.hypot(d.x-e,d.z-t);if(v>r)continue;let x=Si.length-1;for(let M=0;M<this.lodFarM.length;M++)if(v<=this.lodFarM[M]){x=M;break}const y=uo[d.species].conifer>=.5?Zh:qb,_=this.buckets[x*So.length+y];if(_.count>=_.field.capacity){f=!0;continue}const b=_.count*4,E=_.field.arrays.iPos,R=_.field.arrays.iShape;E[b]=d.x,E[b+1]=d.y,E[b+2]=d.z,E[b+3]=d.yaw,R[b]=d.radiusM,R[b+1]=d.heightM,R[b+2]=I1(d.tint*7.13+d.yaw*.6180339),R[b+3]=d.tint+(y===Zh?10:0),_.count++,u++}}for(const g of this.tiles.keys())h.has(g)||this.tiles.delete(g);let p=0;const w=Si.map(()=>0);for(const g of this.buckets)g.field.upload(g.count),p+=g.count*g.triangles,w[g.lod]+=g.count;this.stats.count=u,this.stats.tiles=h.size,this.stats.triangles=p,this.stats.lodCounts=w,this.stats.rebuildMs=performance.now()-o,this.stats.clipped=this.stats.clipped||f}setWind(e,t){const i=(t+180)*Math.PI/180,a=this.uniforms.uWind.value;a.x=Math.sin(i),a.y=-Math.cos(i),a.z=t1(e)}dispose(){for(const e of this.buckets)e.field.dispose()}}function ii(n,e,t){let i=(n|0)*668265261;return i=Math.imul(i^(e|0),2246822507),i=Math.imul(i^i>>>13,3266489909),i=Math.imul(i^(t|0),668265261),i^=i>>>16,(i>>>0)/4294967296}const nt=(n,e)=>ii(n,e,40503),jt=(n,e,t)=>n+(e-n)*t,Fr=5,k1={0:{lo:[.19,.23,.29],hi:[.38,.42,.47],storeyM:3.9,columnM:1.6,win:[.05,.95,.08,.96],glass:.92,roughness:.06,relief:.1,parapetM:.9,f0:.22},1:{lo:[.31,.15,.11],hi:[.54,.31,.23],storeyM:3.1,columnM:3.3,win:[.29,.71,.28,.82],glass:.2,roughness:.86,relief:.75,parapetM:1,f0:.05},2:{lo:[.44,.41,.35],hi:[.68,.64,.55],storeyM:3,columnM:3,win:[.25,.75,.26,.84],glass:.22,roughness:.78,relief:.5,parapetM:.7,f0:.05},3:{lo:[.31,.31,.3],hi:[.58,.57,.55],storeyM:3.5,columnM:2.4,win:[.13,.87,.24,.78],glass:.45,roughness:.62,relief:.55,parapetM:1.1,f0:.14},4:{lo:[.42,.39,.34],hi:[.63,.59,.52],storeyM:4.2,columnM:3.6,win:[.3,.7,.24,.84],glass:.18,roughness:.72,relief:.8,parapetM:1.4,f0:.05}},wi={storeyM:2.85,columnM:4.3,win:[.23,.77,.3,.8],relief:.3,storeyJitter:.1,columnJitter:.13,winJitter:.035},kr=.55,N1=11,Nr=[12,30,70],U1=[[.02,.34,.34,.18,.12],[.08,.34,.24,.24,.1],[.34,.14,.08,.3,.14],[.6,.02,.02,.25,.11]],tu={0:[1,1,1,1,1],1:[.25,1.7,1.7,.8,.5],2:[2.2,.7,.4,1.2,1.1],3:[.2,1.2,.6,2.2,.2],4:[1.2,1.1,1.5,.8,.5],5:[.4,.8,.5,.9,3],6:[3.2,.05,.05,1,.7]};function O1(n){for(let e=0;e<Nr.length;e++)if(n<Nr[e])return e;return Nr.length}function z1(n,e,t){const i=U1[O1(e)],a=tu[n]??tu[0];let s=0;const o=new Array(Fr);for(let l=0;l<Fr;l++)o[l]=i[l]*a[l],s+=o[l];let r=nt(t,17)*s;for(let l=0;l<Fr;l++)if(r-=o[l],r<=0)return l;return 3}function B1(n,e,t){return e===1?0:e===2||e===6?1:e===3||e===4||e===5?2:t>=30||n===0||n===3?1:n===1||n===2?0:2}function Ur(n,e,t){let i=Math.abs(n-e);i>12&&(i=24-i);const a=Math.min(1,i/t);return 1-a*a*(3-2*a)}function H1(n){const e=(n%24+24)%24,t=.25+.75*Math.max(Ur(e,21,7),0),i=.12+.88*Math.max(Ur(e,18.5,6.5),0),a=.08+.62*Math.max(Ur(e,19,5.5),0);return{residential:t,office:i,other:a}}const G1=7,Ka=G1*4,Mf=Ka/2,Sf=32;function V1(n){const e=Math.max(0,Math.min(1,n/Sf)),t=Math.round(e*65535);return[t&255,t>>8&255]}function W1(n,e,t){const i=z1(n,e,t),a=k1[i],s=n===1&&e<=N1?1:0,o=nt(t,33),r=nt(t,49)-.5,l=nt(t,50)-.5,c=nt(t,51)-.5,h=1+.14*(nt(t,52)-.5),u=[bn(jt(a.lo[0],a.hi[0],o)*h+.035*r),bn(jt(a.lo[1],a.hi[1],o)*h+.035*l),bn(jt(a.lo[2],a.hi[2],o)*h+.035*c)],f=(s?wi.storeyM:a.storeyM)*(1+(s?wi.storeyJitter:.1)*(nt(t,65)-.5)),p=(s?wi.columnM:a.columnM)*(1+(s?wi.columnJitter:.18)*(nt(t,66)-.5)),w=Math.min(1,Math.max(0,(e-20)/80)),g=(s?wi.winJitter:.06)*(nt(t,67)-.5),m=s?wi.win:a.win,d=[bn(jt(m[0],m[0]*.45,w)+g),bn(jt(m[1],1-(1-m[1])*.45,w)-g),bn(m[2]+g),bn(m[3]-g*.5)],v=bn(a.glass*(.82+.36*nt(t,68))*(1+.55*w)),x=nu+Math.floor(nt(t,88)*(iu-nu+1)),y=Math.floor(nt(t,89)*iu)%x,_=B1(i,n,e),b=_===1,E=au[n]??au[0],R=bn(E*(.55+.9*nt(t,97))+.35*Math.min(1,Math.max(0,(e-10)/40))),M=Math.min($1,Math.max(X1,f*jt(1.04,1.55,R)*(1+.1*(nt(t,98)-.5))));return{family:i,colour:u,roughness:bn(a.roughness*(1+.2*(nt(t,69)-.5))),f0:a.f0,storeyM:f,columnM:p,win:d,glassFrac:v,relief:(s?wi.relief:a.relief)*(.8+.4*nt(t,70)),parapetM:a.parapetM*(.7+.6*nt(t,71)),groundStoreyM:M,shopfront:R,house:s,pFloor:b?jt(.5,.8,nt(t,81)):jt(.72,.95,nt(t,81)),pTenant:b?jt(.55,.9,nt(t,82)):jt(.42,.72,nt(t,82)),pCell:jt(.72,.92,nt(t,83)),pCore:jt(.55,.9,nt(t,84)),tenantW:b?3+Math.floor(nt(t,85)*6):2+Math.floor(nt(t,85)*3),tenantH:b?1+Math.floor(nt(t,86)*3):1+Math.floor(nt(t,86)*2),coreW:1+Math.floor(nt(t,87)*2),corePeriod:x,coreSlot:y,group:_,seed:t%4096/4096}}const nu=7,iu=14,X1=2.9,$1=6,au={0:.4,1:.12,2:.72,3:.06,4:.95,5:.35,6:.65};function bn(n){return n<0?0:n>1?1:n}function q1(n,e,t){let i=t*Ka;e[i++]=n.colour[0],e[i++]=n.colour[1],e[i++]=n.colour[2],e[i++]=n.roughness,e[i++]=n.storeyM,e[i++]=n.columnM,e[i++]=n.glassFrac,e[i++]=n.seed,e[i++]=n.win[0],e[i++]=n.win[1],e[i++]=n.win[2],e[i++]=n.win[3],e[i++]=n.pFloor,e[i++]=n.pTenant,e[i++]=n.pCell,e[i++]=n.pCore,e[i++]=n.tenantW,e[i++]=n.tenantH,e[i++]=n.coreW,e[i++]=n.corePeriod,e[i++]=n.coreSlot,e[i++]=n.group*8+n.family,e[i++]=n.relief,e[i++]=n.parapetM,e[i++]=n.groundStoreyM,e[i++]=n.shopfront,e[i++]=n.house,e[i++]=n.f0}const Y1=`
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
  int t = int(floor(bidx + 0.5)) * ${Mf} + int(floor(k + 0.5));
  vec4 e = texelFetch(uFacade, ivec2(t % w, t / w), 0);
  float lo0 = floor(e.r * 255.0 + 0.5);
  float hi0 = floor(e.g * 255.0 + 0.5);
  float lo1 = floor(e.b * 255.0 + 0.5);
  float hi1 = floor(e.a * 255.0 + 0.5);
  return vec2((lo0 + hi0 * 256.0) / 65535.0, (lo1 + hi1 * 256.0) / 65535.0)
       * ${Sf}.0;
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
`,j1=typeof location<"u"&&new URLSearchParams(location.search).get("mobilegl")==="1",K1=j1?`#define MOBILE_GL_REPRO 1
`:"",Z1=`
float mobileUlpJitter(float x) {
#ifdef MOBILE_GL_REPRO
  float h = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  return x * (1.0 + (h - 0.5) * 4.0e-7);
#else
  return x;
#endif
}
`;function J1(n){const e=n.length/2;if(e<3)return new Uint32Array(0);if(e===3)return new Uint32Array([0,1,2]);const t=new Array(e);for(let s=0;s<e;s++)t[s]=s;const i=[];let a=e*e;for(;t.length>3&&a-- >0;){let s=!1;for(let o=0;o<t.length;o++){const r=t[(o+t.length-1)%t.length],l=t[o],c=t[(o+1)%t.length],h=n[r*2],u=n[r*2+1],f=n[l*2],p=n[l*2+1],w=n[c*2],g=n[c*2+1];if((f-h)*(g-u)-(p-u)*(w-h)<=0)continue;let d=!1;for(let v=0;v<t.length;v++){const x=t[v];if(x===r||x===l||x===c)continue;const y=n[x*2],_=n[x*2+1],b=(f-h)*(_-u)-(p-u)*(y-h),E=(w-f)*(_-p)-(g-p)*(y-f),R=(h-w)*(_-g)-(u-g)*(y-w);if(b>=0&&E>=0&&R>=0){d=!0;break}}if(!d){i.push(r,l,c),t.splice(o,1),s=!0;break}}if(!s)break}for(let s=1;s+1<t.length;s++)i.push(t[0],t[s],t[s+1]);return new Uint32Array(i)}function Eo(n){const e=n.length/2;let t=0;for(let i=0,a=e-1;i<e;a=i++)t+=(n[a*2]-n[i*2])*(n[a*2+1]+n[i*2+1]);return t/2}const su=.25;var Ae=(n=>(n[n.Generic=0]="Generic",n[n.Residential=1]="Residential",n[n.Commercial=2]="Commercial",n[n.Industrial=3]="Industrial",n[n.Retail=4]="Retail",n[n.Civic=5]="Civic",n[n.Tower=6]="Tower",n))(Ae||{}),je=(n=>(n[n.Flat=0]="Flat",n[n.Pitched=1]="Pitched",n[n.Dome=2]="Dome",n[n.Pyramid=3]="Pyramid",n[n.Tapered=4]="Tapered",n))(je||{});function Q1(n){const e=new Array(n.length);for(let t=0;t<n.length;t++){const i=n[t],a=Math.fround(i.cx),s=Math.fround(i.cz),o=i.dx.length,r=new Float32Array(o*2);for(let l=0;l<o;l++)r[l*2]=a+i.dx[l]*su,r[l*2+1]=s+i.dz[l]*su;e[t]={cx:a,cz:s,baseM:Math.fround(i.baseM),topM:Math.fround(i.topM),kind:i.kind,roof:i.roof,ring:r}}return e}const eM=12,tM=100,nM=30;function iM(n,e){return e<eM&&n>tM?!0:n/Math.max(1,e)>nM}function Ef(n,e){let t=1/0;for(let i=0;i<n.ring.length;i+=2){const a=e(n.ring[i],n.ring[i+1]);a<t&&(t=a)}return Number.isFinite(t)?t:e(n.cx,n.cz)}const ou=1500;function Tf(n,e){if(n<Or/e)return 0;const t=(n-Or/e)/(aM-Or/e);return Math.min(1,Math.max(0,t))*sM*e}const Or=4200,aM=9e3,sM=40,oM=1200,Af=1600;function rM(n){return n*2+Math.max(0,n-2)}const fo={parapet:!1,boxes:0,overrun:!1};function Rf(n,e,t,i,a,s){if(s!==je.Flat||a===Ae.Residential||t<6||i<120)return fo;const o=n<Af/e;if(!o)return fo;if(n>=oM/e)return{parapet:o,boxes:0,overrun:!1};const r=Math.min(4,Math.floor(i/900)),l=t>=22&&i>=350;return{parapet:o,boxes:r,overrun:l}}function lM(n,e){return(e.parapet?n*2:0)+(e.boxes+(e.overrun?1:0))*10}function cM(n,e){for(const t of[1,1.4,2,3,4.5,7,11,18]){let i=0;for(const a of n.buildings){const s=a.topM-a.baseM,o=Math.hypot(a.cx,a.cz);if(s<Tf(o,t))continue;const r=a.ring.length/2;if(i+=rM(r),a.roof===je.Pitched&&s>=4&&s<=20&&(i+=8),o<Af/t&&(i+=lM(r,Rf(o,t,s,Math.abs(Eo(a.ring)),a.kind,a.roof))),i>e)break}if(i<=e)return t}return 18}const hM=`
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
`,uM=0,dM=1,fM=2,pM=3,$s=4,ru=5,Kl=.5,Cf=.75,mM=1-Kl*Cf/2,lu=.35,cu=.2,Zl=.35,Jl=1.6,gM=Math.log(Jl/Zl)/(Jl-Zl),vM=`
precision highp float;
${K1}${Z1}
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
${jn}
${Ta}
${ko}
${ds}
${No}
${Y1}

uniform vec3  uCameraPos;
// The scene sky probe: prefiltered radiance for the glass, roughness to mip.
uniform samplerCube uEnv;
uniform float uEnvMaxLod;
uniform float uNight;
uniform vec3  uNightGlow;
uniform vec3  uMoonDir;
uniform vec3  uMoonLight;
uniform float uWetness;
uniform float uSnow;
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

// Mean of the tint table below weighted by its shares, and the brightness
// spread's own mean, so a bay under a pixel converges to the average shop.
const vec3  SHOP_TINT_MEAN = vec3(0.985, 0.795, 0.622);
const float SHOP_OPEN = 0.58;
// Mean of room() over the visible surfaces seen square on, measured by eye
// against the near field; the far field converges to it.
const float SHOP_ROOM_MEAN = 0.62;
// Emission of an average lit shop at full night. Upper-storey windows are
// 0.09; a shop is lit harder and sits at eye level, but the old 0.26 flat
// was overexposed white at the night exposure.
const float SHOP_SCALE = 0.085;

/**
 * A lit shop at night, seen through its glass: parallax interior mapping of
 * a box DEPTH deep behind the bay, the eye ray walked to the first of its
 * ceiling (lit, with light strips), back wall (shelving), side walls and
 * floor. Per bay: open or shut, lamp colour and brightness. detail is the
 * bay's surviving pixel detail; at 0 everything is its mean.
 */
vec3 shopInterior(float tId, float u0, float bayM, float headY, float cillY, float detail) {
  float open_ = step(1.0 - SHOP_OPEN, hash11(tId * 1.7 + 3.1));
  float k = hash11(tId * 3.3 + 0.7);
  vec3 tint = k < 0.45 ? vec3(1.0, 0.70, 0.42)     // tungsten and warm LED
            : k < 0.80 ? vec3(1.0, 0.92, 0.80)     // neutral LED
            : k < 0.95 ? vec3(0.80, 0.88, 1.0)     // fluorescent
            : vec3(1.0, 0.45, 0.80);               // a coloured sign
  // Log-spread over about two stops, normalised to a mean of 1.
  float bright = exp(mix(log(0.45), log(1.9), hash11(tId * 5.9 + 2.0))) / 1.03;

  vec3 d = normalize(vWorld - uCameraPos);
  vec3 ng = normalize(vNormal);
  vec3 tg = normalize(vec3(ng.z, 0.0, -ng.x));
  // Which way vUv.x runs along the wall, from the screen derivatives.
  float sgn = sign(dot(dFdx(vWorld), tg) * dFdx(vUv.x) + dot(dFdy(vWorld), tg) * dFdy(vUv.x) + 1e-12);
  float dT = dot(d, tg) * sgn;
  float dN = max(dot(d, -ng), 0.08);
  const float DEPTH = 5.0;
  float ceilY = headY + 0.4;   // above the glass head, behind the fascia
  float sBack = DEPTH / dN;
  float sSide = dT > 1e-4 ? (bayM - u0) / dT : dT < -1e-4 ? -u0 / dT : 1e9;
  float sCeil = d.y > 1e-4 ? (ceilY - vUv.y) / d.y : 1e9;
  float sFloor = d.y < -1e-4 ? (0.0 - vUv.y) / d.y : 1e9;
  float s = min(min(sBack, sSide), min(sCeil, sFloor));
  float inZ = s * dN;
  float hy = vUv.y + d.y * s;
  float hu = u0 + dT * s;
  float room;
  if (s == sCeil) {
    // Ceiling, with a light strip every 1.6 m going back.
    room = 1.05 + 0.9 * (1.0 - smoothstep(0.0, 0.25, abs(fract(inZ / 1.6) - 0.5) * 1.6 - 0.2));
  } else if (s == sFloor) {
    room = 0.28;
  } else if (s == sBack) {
    // Shelving: lit fronts and dark gaps, lower half busier.
    float shelf = step(0.55, fract(hy / 0.55));
    room = mix(0.75, 0.42, shelf * step(hy, headY - 0.3)) * (0.85 + 0.3 * hash11(floor(hu / 0.9) + tId));
  } else {
    room = 0.5;
  }
  // Light falls off from the ceiling down and from the window back.
  room *= mix(1.0, 0.55, clamp(inZ / DEPTH, 0.0, 1.0)) * mix(0.75, 1.0, clamp(hy / max(ceilY, 1.0), 0.0, 1.0));
  // Mullions every 1.2 m and a transom at 2.4 m: the frame is dark against the room.
  float mull = smoothstep(0.04, 0.02, abs(fract(u0 / 1.2 + 0.5) - 0.5) * 1.2)
             + smoothstep(0.05, 0.02, abs(vUv.y - min(2.4, headY - 0.2)));
  room *= 1.0 - 0.85 * clamp(mull, 0.0, 1.0);

  // A shut shop keeps a dim security light.
  float on = mix(0.05, 1.0, open_);
  vec3 near = tint * bright * room * on;
  vec3 far = SHOP_TINT_MEAN * SHOP_ROOM_MEAN * mix(0.05, 1.0, SHOP_OPEN);
  return mix(far, near, detail) * SHOP_SCALE;
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
  // The shop bay this ground-storey fragment is in, for the lit interior at
  // night: its index, where across it (metres), its width, the glass head
  // and cill heights, and how much bay detail survives the pixel footprint.
  float shopBayIdx = 0.0;
  float shopU = 0.0;
  float shopBayM = 1.0;
  float shopHead = 3.0;
  float shopCill = 0.5;
  float shopDetail = 0.0;

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
      openMean = ${kr};
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
                             ${kr});
        shop *= mix(${kr}, max(bayKeep, isDoor), detailX);
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
      shopBayIdx = bayIdx;
      shopU = bx * bayM;
      shopBayM = bayM;
      shopHead = headY;
      shopCill = mix(plinthM, 0.04, isDoor);
      shopDetail = detailX;

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
      float drop = step(bHash, ${Kl}) * ${Cf} * (bHash / ${Kl});
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
      float sx = ${lu} / fp.columnM;
      float sy = ${lu} / fp.storeyM;
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
      float profileMean = ${mM}
                        * (winMean + ${cu} * max(0.0, spillMeanX * spillMeanY - winMean));
      float profile = (winX * litY + ${cu} * halo) * (winMean / max(profileMean, 1e-4));

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
                       exp(mix(log(${Zl}), log(${Jl}),
                               hash21(vec2(tb * 1.63 + fp.seed * 7.0, th * 0.29 + 3.0))))
                       * ${gM.toFixed(6)},
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
      //
      // They were one flat 0.26 cream over every bay of half the buildings,
      // which at the night exposure is a row of overexposed light boxes, the
      // worst thing in a wet night street. A lit shop is a ROOM seen through
      // glass: per bay (a tenancy), open or shut, its own lamps (tungsten,
      // LED, fluorescent, now and then a coloured sign), several stops of
      // brightness between one and the next, and depth: a lit ceiling, a back
      // wall with shelving, a darker floor, seen at the angle the eye sees
      // them from. Only the brightest few are bright enough to bloom.
      if (ground > 0.5 && glassMask > 0.0) {
        emissive += shopInterior(shopBayIdx + fp.seed * 13.0, shopU, shopBayM, shopHead, shopCill, shopDetail)
                  * glassMask * uNight;
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

  // Lying snow on anything flat enough to hold it: roofs, parapet tops, the
  // flat top of every setback. By slope, and patchy while it is thin, with
  // the roof's own colour showing through where it has blown clear.
  if (uSnow > 0.01) {
    float flatR = smoothstep(0.55, 0.9, n.y);
    float drift = fract(sin(dot(floor(vWorld.xz * 0.7), vec2(12.9898, 78.233))) * 43758.5453);
    float lie = smoothstep(1.0 - uSnow - 0.15, 1.0 - uSnow + 0.15, 0.35 + 0.3 * drift + 0.35 * flatR);
    albedo = mix(albedo, vec3(0.80, 0.82, 0.86), flatR * lie);
  }

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
`;function wM(n){return{...n,...Uo(),uCameraPos:{value:new k},uSH:{value:xa([.2,.24,.3],.55,.45)},uEnv:{value:null},uEnvMaxLod:{value:6},uNight:{value:0},uNightGlow:{value:new me(0,0,0)},uMoonDir:{value:new k(0,-1,0)},uMoonLight:{value:new me(0,0,0)},uWetness:{value:0},uSnow:{value:0},uSunSurface:{value:.105},uFlatGlass:{value:0},uFlatRefl:{value:0},uUrban:{value:null},uUrbanExtent:{value:1},uBuildingDebug:{value:0},uExposure:{value:1},uSunDir:{value:new k(0,1,0)},uSunColor:{value:new me(1,1,1)},uSunIntensity:{value:16},uMieG:{value:.76},uTurbidity:{value:1},...yn,uCamAltitude:{value:100},uMultiScatter:{value:.055},uFacade:{value:null},uFacadeWidth:{value:1},uHourFactor:{value:new k(1,1,1)}}}function xM(){return{pos:[],nrm:[],uv:[],info:[],idx:[]}}function Ba(n,e,t){let i=!1;const a=n.length/2;for(let s=0,o=a-1;s<a;o=s++){const r=n[s*2],l=n[s*2+1],c=n[o*2],h=n[o*2+1];l>t!=h>t&&e<(c-r)*(t-l)/(h-l)+r&&(i=!i)}return i}function yM(n,e,t,i,a,s,o,r,l){const c=(w,g,m,d,v,x,y,_,b,E,R,M,S,A,D,I)=>{const F=n.pos.length/3;n.pos.push(w,g,m,d,v,x,y,_,b,E,R,M);for(let O=0;O<4;O++)n.nrm.push(S,A,D),n.uv.push(0,0),n.info.push(r,l,I,pM);n.idx.push(F,F+1,F+2,F,F+2,F+3)},h=e-i,u=e+i,f=t-a,p=t+a;c(h,s,f,h,o,f,u,o,f,u,s,f,0,0,-1,0),c(u,s,p,u,o,p,h,o,p,h,s,p,0,0,1,0),c(h,s,p,h,o,p,h,o,f,h,s,f,-1,0,0,0),c(u,s,f,u,o,f,u,o,p,u,s,p,1,0,0,0),c(h,o,f,h,o,p,u,o,p,u,o,f,0,1,0,1)}function _M(n,e,t,i,a,s,o){let r=1/0,l=-1/0,c=1/0,h=-1/0;for(let g=0;g<e.ring.length;g+=2)r=Math.min(r,e.ring[g]),l=Math.max(l,e.ring[g]),c=Math.min(c,e.ring[g+1]),h=Math.max(h,e.ring[g+1]);const u=l-r,f=h-c;if(u<6||f<6)return;const p=i.boxes+(i.overrun?1:0);let w=0;for(let g=0;g<p*6&&w<p;g++){const m=ii(o,2048+g,1),d=ii(o,2048+g,2),v=r+u*(.12+.76*m),x=c+f*(.12+.76*d);if(!Ba(e.ring,v,x))continue;const y=i.overrun&&w===0,_=ii(o,2304+g,3),b=ii(o,2304+g,4),E=ii(o,2304+g,5),R=y?2.2+1.8*_:1.1+1.6*_,M=y?2+1.8*b:1+1.5*b,S=y?3+1.6*E:.9+1.6*E;!Ba(e.ring,v-R,x-M)||!Ba(e.ring,v+R,x-M)||!Ba(e.ring,v-R,x+M)||!Ba(e.ring,v+R,x+M)||(yM(n,v,x,R,M,t,t+S,a,s),w++)}}function bM(n){const e=n.length/2;if(e<3)return null;let t=1/0,i=1,a=0,s=0,o=0,r=0,l=0;for(let d=0;d<e;d++){const v=(d+1)%e,x=n[v*2]-n[d*2],y=n[v*2+1]-n[d*2+1],_=Math.hypot(x,y);if(_<.05)continue;const b=x/_,E=y/_;let R=1/0,M=-1/0,S=1/0,A=-1/0;for(let I=0;I<e;I++){const F=n[I*2],O=n[I*2+1],V=F*b+O*E,z=-F*E+O*b;V<R&&(R=V),V>M&&(M=V),z<S&&(S=z),z>A&&(A=z)}const D=(M-R)*(A-S);D<t&&(t=D,i=b,a=E,s=R,o=M,r=S,l=A)}if(!isFinite(t))return null;const c=(s+o)/2,h=(r+l)/2,u=c*i+h*-a,f=c*a+h*i;let p=(o-s)/2,w=(l-r)/2,g=i,m=a;if(w>p){g=-a,m=i;const d=p;p=w,w=d}return w<.5?null:{cx:u,cz:f,ux:g,uz:m,halfL:p,halfW:w,area:4*p*w}}const hu=.45,MM=20,uu=61455;function SM(n,e,t){if(n.roof!==je.Pitched||e<4||e>MM)return null;const i=n.ring.length/2;if(i<3||i>64)return null;const a=bM(n.ring);if(!a)return null;const s=Math.abs(Eo(n.ring))/a.area;if(s<.72)return null;const o=20+14*ii(t,uu,1);let r=a.halfW*Math.tan(o*Math.PI/180);if(r=Math.min(r,4.5,.55*e,e-2.4),r<1)return null;const l=s>=.88&&ii(t,uu,2)<.5;return{obb:a,rise:r,gable:l,ridgeHalfL:Math.max(0,a.halfL-a.halfW)}}function EM(n,e,t,i,a,s,o){const{obb:r,gable:l,ridgeHalfL:c}=e,{ux:h,uz:u,halfL:f,halfW:p}=r,w=-u,g=h,m=f+hu,d=p+hu,v=i-t,x=Math.hypot(d,v),y=Math.hypot(m-c,v),_=(A,D,I,F,O,V)=>{const z=n.pos.length/3;for(const[N,K,ne,le,Te]of A)n.pos.push(r.cx+N*h+K*w,ne,r.cz+N*u+K*g),n.nrm.push(D,I,F),n.uv.push(le,Te),n.info.push(s,o,V,O);for(let N=1;N+1<A.length;N++)n.idx.push(z,z+N,z+N+1)},b=l?m:c,E=d/x,R=v/x,M=[[-m,d,t,0,0],[m,d,t,2*m,0],[b,0,i,b+m,x],[-b,0,i,m-b,x]],S=[[m,-d,t,0,0],[-m,-d,t,2*m,0],[-b,0,i,m+b,x],[b,0,i,m-b,x]];if(b<.001&&(M.pop(),S.pop()),_(M,w*R,E,g*R,$s,1),_(S,-w*R,E,-g*R,$s,1),l)_([[f,p,t,0,o],[f,-p,t,2*p,o],[f,0,i,p,i-a]],h,0,u,ru,0),_([[-f,-p,t,0,o],[-f,p,t,2*p,o],[-f,0,i,p,i-a]],-h,0,-u,ru,0);else{const A=(m-c)/y,D=v/y;_([[m,d,t,0,0],[m,-d,t,2*d,0],[c,0,i,d,y]],h*D,A,u*D,$s,1),_([[-m,-d,t,0,0],[-m,d,t,2*d,0],[-c,0,i,d,y]],-h*D,A,-u*D,$s,1)}}function TM(n,e,t,i,a=fo,s){const o=e.ring.length/2;if(o<3)return;const r=t+e.baseM,l=t+e.topM,c=l-r;if(c<=.5)return;const h=r-3,u=s?s.seed*4096:i,f=SM(e,c,u),p=!f&&a.parapet&&s?Math.max(.4,s.parapetM):0,w=f?l-f.rise:l,g=f?w:l+p,m=w-r,d=(y,_)=>n.info.push(i,m,y,_);let v=0;for(let y=0;y<o;y++){const _=(y+1)%o,b=e.ring[y*2],E=e.ring[y*2+1],R=e.ring[_*2],M=e.ring[_*2+1],S=R-b,A=M-E,D=Math.hypot(S,A);if(D<.05)continue;const I=A/D,F=-S/D,O=n.pos.length/3;n.pos.push(b,h,E,R,h,M,R,g,M,b,g,E);for(let N=0;N<4;N++)n.nrm.push(I,0,F);const V=h-r,z=m+p;n.uv.push(v,V,v+D,V,v+D,z,v,z);for(let N=0;N<4;N++)d(0,uM);if(n.idx.push(O,O+2,O+1,O,O+3,O+2),p>0){const N=n.pos.length/3;n.pos.push(b,l,E,R,l,M,R,g,M,b,g,E);for(let K=0;K<4;K++)n.nrm.push(-I,0,-F);n.uv.push(v,c,v+D,c,v+D,z,v,z);for(let K=0;K<4;K++)d(0,fM);n.idx.push(N,N+1,N+2,N,N+2,N+3)}v+=D}const x=J1(e.ring);if(x.length){const y=n.pos.length/3;for(let _=0;_<o;_++)n.pos.push(e.ring[_*2],w,e.ring[_*2+1]),n.nrm.push(0,1,0),n.uv.push(e.ring[_*2],e.ring[_*2+1]),n.info.push(i,m,1,dM);for(let _=0;_+2<x.length;_+=3)n.idx.push(y+x[_],y+x[_+2],y+x[_+1])}f?EM(n,f,w,l,r,i,m):(a.boxes>0||a.overrun)&&_M(n,e,l,a,i,m,u)}function AM(n,e){if(!n.idx.length)return null;const t=new At;t.setAttribute("position",new Lt(n.pos,3)),t.setAttribute("normal",new Lt(n.nrm,3)),t.setAttribute("uv",new Lt(n.uv,2)),t.setAttribute("info",new Lt(n.info,4)),t.setIndex(n.pos.length/3>65535?new Po(n.idx,1):new Do(n.idx,1)),t.computeBoundingSphere();const i=new Bt({vertexShader:hM,fragmentShader:vM,uniforms:e,glslVersion:It,side:En});return new lt(t,i)}const To=1024;function RM(n){const e=n.length*Mf,t=Math.max(1,Math.ceil(e/To)),i=new Uint8Array(To*t*4),a=new Float32Array(Ka);for(let s=0;s<n.length;s++){q1(n[s],a,0);for(let o=0;o<Ka;o++){const[r,l]=V1(a[o]),c=(s*Ka+o)*2;i[c]=r,i[c+1]=l}}return{data:i,height:t}}function CM(n){const{data:e,height:t}=RM(n),i=new Rn(e,To,t,gt,_t);return i.minFilter=vt,i.magFilter=vt,i.generateMipmaps=!1,i.needsUpdate=!0,i}class DM{group=new vn;uniforms;stats;constructor(e,t,i,a){this.uniforms=wM(i);const s=cM(e,a.buildingTriangleBudget),o=new Map,r=[],l=new Array(5).fill(0);let c=0,h=0,u=0,f=0,p=0;for(let m=0;m<e.buildings.length;m++){const d=e.buildings[m],v=Math.hypot(d.cx,d.cz),x=d.topM-d.baseM;if(x<Tf(v,s)){h++;continue}const y=Math.abs(Eo(d.ring));if(x<8&&y>2e4){u++;continue}if(Eo(d.ring)<0){const A=d.ring;for(let D=0,I=A.length/2-1;D<I;D++,I--){const F=A[D*2],O=A[D*2+1];A[D*2]=A[I*2],A[D*2+1]=A[I*2+1],A[I*2]=F,A[I*2+1]=O}}const _=Ef(d,t),b=`${Math.floor(d.cx/ou)},${Math.floor(d.cz/ou)}`;let E=o.get(b);E||(E=xM(),o.set(b,E));const R=W1(d.kind,x,m),M=r.length;r.push(R),l[R.family]++;const S=Rf(v,s,x,y,d.kind,d.roof);S.parapet&&f++,p+=S.boxes+(S.overrun?1:0),TM(E,d,_,M,S,R),c++}const w=CM(r);this.uniforms.uFacade.value=w,this.uniforms.uFacadeWidth.value=To;let g=0;for(const m of o.values()){const d=AM(m,this.uniforms);d&&(d.layers.enable(hs),g+=m.idx.length/3,this.group.add(d))}this.stats={drawn:c,skippedFar:h,skippedFlat:u,triangles:g,cells:o.size,lod:s,parapets:f,plantBoxes:p,families:l}}dispose(){this.uniforms.uFacade.value?.dispose();for(const e of this.group.children){const t=e;t.geometry?.dispose(),t.material?.dispose()}this.group.clear()}}const PM=Ke.Pedestrian;function du(n){return(n.flags&Aa)!==0?!1:n.cls<PM}const qs=.3,LM=200,IM=250;function FM(n,e){const t=n.s.length;if(t===0)return 0;if(e<=n.s[0])return n.y[0];if(e>=n.s[t-1])return n.y[t-1];for(let i=1;i<t;i++)if(e<=n.s[i]){const a=n.s[i]-n.s[i-1],s=a>1e-6?(e-n.s[i-1])/a:0;return n.y[i-1]+(n.y[i]-n.y[i-1])*s}return n.y[t-1]}class kM{cells=new Map;x=[];z=[];key(e,t){return e*73856093^t*19349663}find(e,t,i){const a=Math.floor(e/qs),s=Math.floor(t/qs);let o=-1,r=qs*qs;for(let u=-1;u<=1;u++)for(let f=-1;f<=1;f++){const p=this.cells.get(this.key(a+f,s+u));if(p)for(const w of p){const g=this.x[w]-e,m=this.z[w]-t,d=g*g+m*m;(d<r||d===r&&o>=0&&w<o)&&(r=d,o=w)}}if(o>=0||!i)return o;const l=this.x.length;this.x.push(e),this.z.push(t);const c=this.key(a,s),h=this.cells.get(c);return h?h.push(l):this.cells.set(c,[l]),l}}function NM(n,e,t){const i=Date.now(),a=new Array(n.length).fill(null),s=[];for(let S=0;S<n.length;S++)(n[S].flags&ba)!==0&&n[S].pts.length>=4&&s.push(S);const o=()=>({deck:a,stats:{bridgeWays:s.length,chains:0,abutments:0,orphanChains:0,orphanChainsLifted:0,orphanChainsDraped:0,longestChainM:0,buildMs:Date.now()-i}});if(s.length===0)return o();const r=new kM,l=[],c=[],h=[],u=[];for(let S=0;S<n.length;S++){const A=(n[S].flags&ba)!==0,D=du(n[S]),I=n[S].pts;for(let F=0;F<I.length;F+=2){const O=r.find(I[F],I[F+1],!0);for(;l.length<=O;)l.push(S),c.push(!1),h.push(!1),u.push(!1);l[O]!==S&&(c[O]=!0),A||(D?h[O]=!0:u[O]=!0)}}const f=[],p=[],w=[];for(const S of s){w.push(du(n[S]));const A=n[S].pts,D=A.length/2,I=[],F=[];let O=0;for(let V=0;V<D;V++){V>0&&(O+=Math.hypot(A[V*2]-A[(V-1)*2],A[V*2+1]-A[(V-1)*2+1]));const z=r.find(A[V*2],A[V*2+1],!1),N=V===0||V===D-1;z>=0&&(N||c[z])&&(F.length===0||O-F[F.length-1]>.001)&&(I.push(z),F.push(O))}f.push(I),p.push(F)}const g=new Map,m=new Set,d=(S,A,D)=>{S!==A&&(g.has(S)||g.set(S,[]),g.has(A)||g.set(A,[]),g.get(S).push({other:A,len:D}),g.get(A).push({other:S,len:D}))};for(let S=0;S<s.length;S++){const A=f[S],D=p[S];for(let I=1;I<A.length;I++)d(A[I-1],A[I],Math.max(.001,D[I]-D[I-1]));if(A.length===1&&!g.has(A[0])&&g.set(A[0],[]),w[S])for(const I of A)m.add(I)}const v=new Map,x=new Set;let y=0,_=0,b=0,E=0,R=0,M=0;for(const S of g.keys()){if(x.has(S))continue;const A=[],D=[S];x.add(S);let I=0;for(;D.length;){const K=D.pop();A.push(K);for(const{other:ne,len:le}of g.get(K)??[])I+=le*.5,x.has(ne)||(x.add(ne),D.push(ne))}y++,I>M&&(M=I);const O=A.some(K=>m.has(K))?A.filter(K=>h[K]):A.filter(K=>h[K]||u[K]);if(_+=O.length,O.length===0){b++;const K=I>IM||A.some(le=>Math.hypot(r.x[le],r.z[le])>t-LM);K?E++:R++;const ne=K?On+ff:On;for(const le of A)v.set(le,e(r.x[le],r.z[le])+ne);continue}const V=new Map;A.forEach((K,ne)=>V.set(K,ne));const z=[],N=[];for(const K of O){N.push(e(r.x[K],r.z[K])+On);const ne=new Float64Array(A.length).fill(1/0);ne[V.get(K)]=0;const le=new Uint8Array(A.length);for(;;){let Te=-1,oe=1/0;for(let Ue=0;Ue<A.length;Ue++)!le[Ue]&&ne[Ue]<oe&&(oe=ne[Ue],Te=Ue);if(Te<0)break;le[Te]=1;for(const{other:Ue,len:Ie}of g.get(A[Te])??[]){const q=V.get(Ue);if(q===void 0)continue;const Q=oe+Ie;Q<ne[q]&&(ne[q]=Q)}}z.push(ne)}for(let K=0;K<A.length;K++){let ne=0,le=0,Te=-1;for(let Ue=0;Ue<O.length;Ue++){const Ie=z[Ue][K];if(!isFinite(Ie))continue;if(Ie<1e-6){Te=Ue;break}const q=1/Ie;ne+=q,le+=q*N[Ue]}const oe=A[K];v.set(oe,Te>=0?N[Te]:ne>0?le/ne:e(r.x[oe],r.z[oe])+On)}}for(let S=0;S<s.length;S++){const A=s[S],D=f[S],I=p[S];if(D.length<2){const F=D.length===1?v.get(D[0])??e(n[A].pts[0],n[A].pts[1])+On:e(n[A].pts[0],n[A].pts[1])+On;a[A]={s:Float32Array.from([0,Math.max(.001,_b(n[A]))]),y:Float32Array.from([F,F])};continue}a[A]={s:Float32Array.from(I),y:Float32Array.from(D.map(F=>v.get(F)??e(r.x[F],r.z[F])+On))}}return{deck:a,stats:{bridgeWays:s.length,chains:y,abutments:_,orphanChains:b,orphanChainsLifted:E,orphanChainsDraped:R,longestChainM:M,buildMs:Date.now()-i}}}const UM=2,fu=1e-4;function OM(){return{xz:[],uv:[],idx:[]}}function zM(n){return Math.max(0,n-1)*2}function BM(n,e,t){const i=t*.5;if(!(i>0))return 0;const a=[],s=[];for(let v=0;v+1<e.length;v+=2){const x=e[v],y=e[v+1],_=a.length-1;_>=0&&Math.abs(x-a[_])<fu&&Math.abs(y-s[_])<fu||(a.push(x),s.push(y))}const o=a.length;if(o<2)return 0;const r=o-1,l=new Float64Array(r),c=new Float64Array(r),h=new Float64Array(r),u=new Float64Array(r),f=new Float64Array(o);for(let v=0;v<r;v++){const x=a[v+1]-a[v],y=s[v+1]-s[v],_=Math.hypot(x,y);l[v]=x/_,c[v]=y/_,h[v]=c[v],u[v]=-l[v],f[v+1]=f[v]+_}const p=n.xz.length/2;let w=0;const g=(v,x,y,_,b)=>{n.xz.push(v+_,x+b),n.uv.push(y,0),n.xz.push(v-_,x-b),n.uv.push(y,1),w++};g(a[0],s[0],f[0],h[0]*i,u[0]*i);for(let v=1;v<o-1;v++){const x=v-1,y=v;let _=h[x]+h[y],b=u[x]+u[y];const E=Math.hypot(_,b),R=E>1e-9?2/E:1/0;R<=UM?(_/=E,b/=E,g(a[v],s[v],f[v],_*i*R,b*i*R)):(g(a[v],s[v],f[v],h[x]*i,u[x]*i),g(a[v],s[v],f[v],h[y]*i,u[y]*i))}const m=r-1;g(a[o-1],s[o-1],f[o-1],h[m]*i,u[m]*i);let d=0;for(let v=0;v+1<w;v++){const x=p+v*2,y=x+1,_=x+2,b=x+3;n.idx.push(x,_,y,y,_,b),d+=2}return d}const pu=1500,HM=[0,0,1,1,2,2,2,3,2,2,3,4,4,3],GM=5,VM=[4e4,4e4,4e4,4e4,3e4,25e3,25e3,12e3,15e3,25e3,12e3,8e3,12e3,1e4],WM=6;function XM(n,e){return(VM[n]??4e3)/e}function Df(n,e,t){return e<=XM(n.cls,t)}function $M(n,e,t){for(const i of[1,1.3,1.8,2.5,3.5,5,8,13,22]){let a=0;for(let s=0;s<n.roads.length;s++){const o=n.roads[s];if((o.flags&Aa)===0&&Df(o,e[s],i)&&(a+=zM(o.pts.length/2),a>t))break}if(a<=t)return i}return 22}const qM=`
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
`,YM=`
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
${jn}
${ko}
${Vd}
${ds}
${No}
${Fb}
${dc}

uniform vec3  uCameraPos;
uniform float uPuddles;
uniform float uRain;
uniform float uTime;
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

  // --- wet, locally --------------------------------------------------------
  // The place's wetness is one number; where it lies is not (wet.glsl.ts).
  // Water gathers in the gutter at both edges, in the dips, and in the
  // wheel ruts, which are the polished strips: a drying street is grey with
  // dark streaks down its tracks and a dark margin along each kerb.
  //
  // The reflecting water (wl, pud) is a function of world position ONLY, the
  // same function the screen-space reflection pass evaluates (it cannot see
  // this ribbon's u/v), or the two would disagree about where a puddle is
  // and the reflection would land on dry road. The gutter and the ruts
  // darken, which the pass does not need to know about.
  float kerb = smoothstep(0.10, 0.0, min(v, 1.0 - v));
  float low = wetLowness(w);
  // The damp margin round a puddle darkens fully but is only a weak mirror.
  float film = wetLocal(uWetness, low, 0.0);
  float halo = puddleHalo(uPuddles, low);
  float wl = max(film, 0.3 * halo);
  float pud = puddleLocal(uPuddles, low, 0.0);
  float damp = clamp(max(film, halo) + (kerb * 0.6 + wheel * 0.3) * uWetness, 0.0, 1.0);
  // Slush melts in the tracks: wet there whatever the rain is doing.
  float slushWet = uSnow * wheel * 0.9;
  wl = max(wl, slushWet);
  damp = max(damp, slushWet);
  // A film fills the aggregate's relief: a wet road's normal is the road's,
  // and the bumps that catch a dry low sun drown. Standing water is flat
  // except where rain is hitting it.
  vec3 upN = vec3(0.0, 1.0, 0.0);
  n = normalize(mix(n, upN, clamp(0.7 * wl + pud, 0.0, 1.0)));
  if (pud > 0.01 && vViewDist < 60.0) {
    vec2 rs = rainRipples(w, uTime, uRain) * smoothstep(60.0, 15.0, vViewDist);
    n = normalize(n + vec3(rs.x, 0.0, rs.y) * pud);
  }

  // Ploughed, not buried: a road under snow is the one dark line left in a
  // white city. Grey-brown slush between the lanes, black wet tarmac down the
  // wheel tracks where traffic has cleared it, and the plough's white banks
  // along both kerbs. Salted slush is wet, so the tracks shine.
  float slushN = wetNoise(w * 0.9 + vec2(2.0, 5.0)) * 0.6 + wetNoise(w * 4.0) * 0.4;
  vec3 slush = vec3(0.30, 0.285, 0.27) * (0.7 + 0.6 * slushN);
  float bank = smoothstep(0.16, 0.03, min(v, 1.0 - v));
  float lane = uSnow * (1.0 - 0.85 * wheel) * smoothstep(0.25, 0.6, slushN + 0.2 * uSnow);
  albedo = mix(albedo, slush, clamp(lane, 0.0, 1.0) * 0.8);
  albedo = mix(albedo, vec3(0.80, 0.82, 0.86), uSnow * bank);
  paint *= 1.0 - 0.8 * uSnow * max(bank, lane);

  // Wet asphalt is much darker than dry asphalt, and the paint much less so.
  albedo *= 1.0 - 0.46 * damp * (1.0 - 0.6 * paint);
  // Standing water over tarmac: nearly all of what you see is reflection, and
  // what is left of the surface under it is dark.
  albedo *= 1.0 - 0.6 * pud;

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
  float wetR = max(wl * 0.85, pud);
  if (wetR > 0.02) {
    vec3 vdir = normalize(uCameraPos - vWorld);
    vec3 refl = reflect(-vdir, n);
    // The film smooths the surface but a wet road is still a blurred mirror;
    // a puddle is a sharp one. The screen-space pass (composite.ts) swaps
    // this sky for the buildings and lights where it can see them, by the
    // same Fresnel and the same local wetness.
    float lod = clamp(roughness, 0.0, 1.0) * mix(0.75, 0.0, pud) * uEnvMaxLod;
    vec3 env = textureLod(uEnv, refl, lod).rgb;
    // Schlick against the 2% normal reflectance of a water film.
    float f = pow(1.0 - clamp(dot(vdir, n), 0.0, 1.0), 5.0);
    lit = mix(lit, env, (0.02 + 0.98 * f) * wetR);
  }

  // Specular. Dry asphalt is not matte -- a low sun sheets off it -- and wet
  // asphalt is a mirror. The wheel tracks are smoother than the rest, so the
  // highlight runs in two streaks down the carriageway rather than covering it.
  // The exponent matters more than the strength. At 28 the lobe is so broad
  // that a road seen along its length under a high sun is uniformly white --
  // measured, looking down Van Ness at midday -- because every fragment on a
  // flat surface is within the lobe at once. Dry asphalt has a wide but WEAK
  // sheen; a narrow bright one is what wet asphalt has.
  float gloss = clamp((1.0 - roughness) * 0.22 + wetR * 0.9, 0.0, 1.0);
  if (gloss > 0.01) {
    vec3 vdir = normalize(uCameraPos - vWorld);
    float shine = mix(110.0, 220.0, wetR) * (1.0 + 3.0 * pud);
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
      lit += lampCol * pool * uNight * (1.0 + 2.2 * wetR) * 0.19;
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
`;function jM(n){return{...n,...Uo(),...Wd(),uCameraPos:{value:new k},uSH:{value:xa([.2,.24,.3],.55,.45)},uEnv:{value:null},uEnvMaxLod:{value:6},uWetness:{value:0},uPuddles:{value:0},uRain:{value:0},uTime:{value:0},uSnow:{value:0},uNight:{value:0},uNightGlow:{value:new me(0,0,0)},uMoonDir:{value:new k(0,-1,0)},uMoonLight:{value:new me(0,0,0)},uSunSurface:{value:.105},uFadeNear:{value:400},uFadeFar:{value:800},uSunDir:{value:new k(0,1,0)},uSunColor:{value:new me(1,1,1)},uSunIntensity:{value:22},uMieG:{value:.76},uTurbidity:{value:1},...yn,uCamAltitude:{value:100},uMultiScatter:{value:.055}}}class KM{group=new vn;uniforms;stats;constructor(e,t,i,a,s){const o=performance.now();this.uniforms=jM(i);const r=new Float64Array(e.roads.length);for(let d=0;d<e.roads.length;d++)r[d]=Math.hypot(e.roads[d].cx,e.roads[d].cz);const l=$M(e,r,a.roadTriangleBudget),c=new Map;let h=0,u=0,f=0,p=0,w=0;for(let d=0;d<e.roads.length;d++){const v=e.roads[d];if((v.flags&Aa)!==0){u++;continue}if(!Df(v,r[d],l)){f++;continue}let x=0;for(let F=2;F<v.pts.length;F+=2)x+=Math.hypot(v.pts[F]-v.pts[F-2],v.pts[F+1]-v.pts[F-1]);if(x<WM){p++;continue}const y=fs(v.cls,v.lanes,v.flags),_=(v.flags&ba)!==0,b=_?GM:HM[v.cls]??2,E=`${b}:${Math.floor(v.cx/pu)},${Math.floor(v.cz/pu)}`;let R=c.get(E);R||(R={ribbon:OM(),y:[],info:[],rank:b},c.set(E,R));const M=R.ribbon.xz.length/2;if(BM(R.ribbon,v.pts,y)===0){p++;continue}_&&w++;const A=pf(v.flags,v.layer),D=R.ribbon.xz.length/2-M,I=_?s[d]??null:null;for(let F=0;F<D;F++){const O=R.ribbon.xz[(M+F)*2],V=R.ribbon.xz[(M+F)*2+1];I?R.y.push(FM(I,R.ribbon.uv[(M+F)*2])):R.y.push(t(O,V)+A),R.info.push(v.cls,v.surface,y,_?1:0)}h++}let g=0,m=0;for(const d of c.values()){if(!d.ribbon.idx.length)continue;const v=d.y.length,x=new Float32Array(v*3);for(let E=0;E<v;E++)x[E*3]=d.ribbon.xz[E*2],x[E*3+1]=d.y[E],x[E*3+2]=d.ribbon.xz[E*2+1];const y=new At;y.setAttribute("position",new dt(x,3)),y.setAttribute("uv",new Lt(d.ribbon.uv,2)),y.setAttribute("info",new Lt(d.info,4)),y.setIndex(v>65535?new Po(d.ribbon.idx,1):new Do(d.ribbon.idx,1)),y.computeVertexNormals(),y.computeBoundingSphere();const _=new Bt({vertexShader:qM,fragmentShader:YM,uniforms:this.uniforms,glslVersion:It,side:zt,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),b=new lt(y,_);b.renderOrder=10+d.rank,this.group.add(b),g+=d.ribbon.idx.length/3,m++}this.stats={drawn:h,skippedTunnel:u,skippedFar:f,skippedShort:p,bridges:w,triangles:g,meshes:m,lod:l,buildMs:performance.now()-o}}dispose(){for(const e of this.group.children){const t=e;t.geometry?.dispose(),t.material?.dispose()}this.group.clear()}}function Ho(n){return`${n.s.toFixed(7)},${n.w.toFixed(7)},${n.n.toFixed(7)},${n.e.toFixed(7)}`}class Pf{counts=new Map;add(e,t=1){this.counts.set(e,(this.counts.get(e)??0)+t)}total(){let e=0;for(const t of this.counts.values())e+=t;return e}entries(){return[...this.counts.entries()].sort((e,t)=>t[1]-e[1])}}function zr(n){if(n===void 0)return!1;const e=n.toLowerCase();return e!==""&&e!=="no"&&e!=="false"&&e!=="0"}const ca=.25,mu=32e3,ZM=12,JM=2,QM=900,gu=3.2,eS=/^(-?\d+(?:\.\d+)?)\s*(?:'|ft|feet)\s*(\d+(?:\.\d+)?)\s*(?:"|''|in|inch(?:es)?)?$/,tS=/^(-?\d+(?:[.,]\d+)?)\s*([a-z'"]*)$/;function Br(n){if(n===void 0)return null;const e=n.trim().toLowerCase();if(e==="")return null;const t=eS.exec(e);if(t){const s=Number(t[1]),o=Number(t[2]);return!Number.isFinite(s)||!Number.isFinite(o)?null:(s*12+o)*.0254}const i=tS.exec(e);if(!i)return null;const a=Number(i[1].replace(",","."));if(!Number.isFinite(a))return null;switch(i[2]){case"":case"m":case"metre":case"metres":case"meter":case"meters":return a;case"'":case"ft":case"feet":case"foot":return a*.3048;default:return null}}function vu(n){if(n===void 0)return null;const e=/^-?\d+(?:[.,]\d+)?/.exec(n.trim());if(!e)return null;const t=Number(e[0].replace(",","."));return Number.isFinite(t)?t:null}const nS={house:6,detached:6,bungalow:6,semidetached_house:6,terrace:6,apartments:15,residential:10,dormitory:10,hotel:15,commercial:14,office:14,retail:8,supermarket:8,kiosk:8,industrial:10,warehouse:10,manufacture:10,church:20,cathedral:20,chapel:20,mosque:20,temple:20,synagogue:20,school:12,university:12,college:12,hospital:12,civic:12,public:12,government:12,garage:3,garages:3,shed:3,hut:3,carport:3,roof:3},iS=9,aS={house:Ae.Residential,detached:Ae.Residential,bungalow:Ae.Residential,semidetached_house:Ae.Residential,terrace:Ae.Residential,apartments:Ae.Residential,residential:Ae.Residential,dormitory:Ae.Residential,house_boat:Ae.Residential,commercial:Ae.Commercial,office:Ae.Commercial,hotel:Ae.Commercial,industrial:Ae.Industrial,warehouse:Ae.Industrial,manufacture:Ae.Industrial,hangar:Ae.Industrial,retail:Ae.Retail,supermarket:Ae.Retail,kiosk:Ae.Retail,church:Ae.Civic,cathedral:Ae.Civic,chapel:Ae.Civic,mosque:Ae.Civic,temple:Ae.Civic,synagogue:Ae.Civic,shrine:Ae.Civic,monastery:Ae.Civic,school:Ae.Civic,university:Ae.Civic,college:Ae.Civic,kindergarten:Ae.Civic,hospital:Ae.Civic,civic:Ae.Civic,public:Ae.Civic,government:Ae.Civic,museum:Ae.Civic,train_station:Ae.Civic,transportation:Ae.Civic,stadium:Ae.Civic,tower:Ae.Tower,skyscraper:Ae.Tower};function sS(n,e){const t=(n.building??n["building:part"]??"").toLowerCase(),i=aS[t];return i!==void 0?e>=100&&i!==Ae.Civic?Ae.Tower:i:e>=100||n.man_made==="tower"||n.man_made==="communications_tower"?Ae.Tower:n.office!==void 0?Ae.Commercial:n.shop!==void 0?Ae.Retail:n.amenity==="place_of_worship"||n.amenity!==void 0||n.tourism!==void 0?Ae.Civic:n.industrial!==void 0?Ae.Industrial:Ae.Generic}const Lf={flat:je.Flat,gabled:je.Pitched,"half-hipped":je.Pitched,hipped:je.Pitched,"gabled-hipped":je.Pitched,gambrel:je.Pitched,mansard:je.Pitched,skillion:je.Pitched,double_saltbox:je.Pitched,saltbox:je.Pitched,round:je.Pitched,side_half_hipped:je.Pitched,dome:je.Dome,onion:je.Dome,cupola:je.Dome,pyramidal:je.Pyramid,"half-pyramidal":je.Pyramid,quadruple_saltbox:je.Pyramid,spherical:je.Dome,cone:je.Tapered,conical:je.Tapered,spire:je.Tapered,pyramidal_spire:je.Tapered,tented:je.Tapered},oS=15;function rS(n,e,t){const i=(n["roof:shape"]??n["building:roof:shape"]??"").toLowerCase(),a=Lf[i];if(a!==void 0)return a;const s=(n.building??"").toLowerCase();return s==="church"||s==="cathedral"||s==="chapel"?je.Tapered:s==="mosque"||s==="temple"||s==="synagogue"?je.Dome:e===Ae.Residential&&s!=="apartments"&&t<=oS?je.Pitched:je.Flat}function lS(n){let e=Br(n.height??n["building:height"]);if(e===null){const a=vu(n["building:levels"]??n.levels);if(a!==null){e=a*gu;const s=Br(n["roof:height"]);s!==null&&(e+=s)}}if(e===null){const a=(n.building??n["building:part"]??"").toLowerCase();e=nS[a]??iS}let t=Br(n.min_height??n["building:min_height"]);if(t===null){const a=vu(n["building:min_level"]??n.min_level);t=a!==null?a*gu:0}(!Number.isFinite(t)||t<0)&&(t=0);const i=Math.min(QM,Math.max(JM,e));return i<=t?null:{baseM:t,topM:i}}function wu(n,e){const t=[],i=[];for(const a of e){if(!Number.isFinite(a.lat)||!Number.isFinite(a.lon))continue;const s=n.toWorld(a.lat,a.lon),o=t.length;o>0&&Math.abs(s.x-t[o-1])<1e-6&&Math.abs(s.z-i[o-1])<1e-6||(t.push(s.x),i.push(s.z))}for(;t.length>1&&Math.abs(t[0]-t[t.length-1])<1e-6&&Math.abs(i[0]-i[i.length-1])<1e-6;)t.pop(),i.pop();return t.length<3?null:{x:t,z:i}}function cS(n){let e=0;const t=n.x.length;for(let i=0;i<t;i++){const a=i+1===t?0:i+1;e+=n.x[i]*n.z[a]-n.x[a]*n.z[i]}return e/2}function hS(n){n.x.reverse(),n.z.reverse()}function uS(n){const e=Ho(n);return`way["building"](${e});
 way["building:part"](${e});
 relation["building"](${e});`}function dS(n){const e=n.tags??{};return n.type==="way"?e.building!==void 0||e["building:part"]!==void 0:n.type==="relation"?e.building!==void 0:!1}const fS=9,pS=45,mS=400,gS=25,Qi=70,Ys=6;function vS(n){const e=n.dx.length;let t=0,i=0;for(let a=0;a<e;a++){const s=a+1===e?0:a+1;t+=n.dx[a]*n.dz[s]-n.dx[s]*n.dz[a];const o=(n.dx[s]-n.dx[a])*ca,r=(n.dz[s]-n.dz[a])*ca,l=Math.hypot(o,r);l>i&&(i=l)}return{area:Math.abs(t/2)*ca*ca,longestEdge:i}}function wS(n,e){const t=[];for(let r=0;r<n.length;r++){const l=n[r];if(l.kind!==Ae.Generic||l.topM>fS)continue;const{area:c,longestEdge:h}=vS(l);c<pS||c>mS||h>gS||t.push(r)}const i=new Map,a=r=>`${Math.floor(r.cx/Qi)},${Math.floor(r.cz/Qi)}`;for(const r of t){const l=a(n[r]),c=i.get(l);c===void 0?i.set(l,[r]):c.push(r)}const s=Qi*Qi;let o=0;for(const r of t){const l=n[r],c=Math.floor(l.cx/Qi),h=Math.floor(l.cz/Qi);let u=0;for(let f=-1;f<=1&&u<Ys;f++)for(let p=-1;p<=1&&u<Ys;p++){const w=i.get(`${c+f},${h+p}`);if(w!==void 0)for(const g of w){if(g===r)continue;const m=n[g].cx-l.cx,d=n[g].cz-l.cz;if(m*m+d*d<=s&&++u>=Ys)break}}u<Ys||(l.kind=Ae.Residential,e[r]||(l.roof=je.Pitched),o++)}return o}function xS(n,e,t){const i=new Pf,a=[],s=[];for(const o of n){const r=o.tags??{};if(r.building==="no"||r["building:part"]==="no"){i.add("tagged building=no");continue}const l=[];if(o.type==="way"){if(!o.geometry||o.geometry.length===0){i.add("way with no geometry");continue}const p=wu(e,o.geometry);if(p===null){i.add("ring under 3 distinct vertices");continue}l.push(p)}else if(o.type==="relation"){let p=!1;for(const w of o.members??[]){if(w.role!=="outer"||!w.geometry||w.geometry.length===0)continue;p=!0;const g=wu(e,w.geometry);if(g===null){i.add("ring under 3 distinct vertices");continue}l.push(g)}if(!p){i.add("relation with no outer geometry");continue}if(l.length===0)continue}else{i.add(`unhandled element type ${o.type}`);continue}const c=lS(r);if(c===null){i.add("top height not above base");continue}const h=sS(r,c.topM),u=rS(r,h,c.topM),f=Lf[(r["roof:shape"]??r["building:roof:shape"]??"").toLowerCase()]!==void 0;for(const p of l){const w=cS(p);if(Math.abs(w)<ZM){i.add("footprint under 12 m^2");continue}w<0&&hS(p);const g=p.x.length;let m=0,d=0;for(let A=0;A<g;A++)m+=p.x[A],d+=p.z[A];const v=m/g,x=d/g;if(Math.hypot(v,x)>t){i.add("centroid outside radius");continue}if(g>65535){i.add("ring over 65535 vertices");continue}let y=1/0,_=-1/0,b=1/0,E=-1/0;for(let A=0;A<g;A++)p.x[A]<y&&(y=p.x[A]),p.x[A]>_&&(_=p.x[A]),p.z[A]<b&&(b=p.z[A]),p.z[A]>E&&(E=p.z[A]);if(iM(c.topM-c.baseM,Math.min(_-y,E-b))){i.add("mast-shaped: tall on a footprint too small to stand on");continue}const R=new Int16Array(g),M=new Int16Array(g);let S=!1;for(let A=0;A<g;A++){const D=Math.round((p.x[A]-v)/ca),I=Math.round((p.z[A]-x)/ca);if(Math.abs(D)>mu||Math.abs(I)>mu){S=!0;break}R[A]=D,M[A]=I}if(S){i.add("vertex offset overflows i16 (bad relation)");continue}a.push({cx:v,cz:x,baseM:c.baseM,topM:c.topM,kind:h,roof:u,dx:R,dz:M}),s.push(f)}}return wS(a,s),{buildings:a,skips:i}}var sa=(n=>(n[n.StreetLamp=0]="StreetLamp",n[n.TrafficSignal=1]="TrafficSignal",n[n.Bench=2]="Bench",n[n.WasteBasket=3]="WasteBasket",n[n.FireHydrant=4]="FireHydrant",n))(sa||{});sa.StreetLamp,sa.TrafficSignal,sa.Bench,sa.WasteBasket,sa.FireHydrant;const xu=.25,yS=65535,_S=15,yu=2*ub-100,_u={motorway:Ke.Motorway,trunk:Ke.Trunk,primary:Ke.Primary,secondary:Ke.Secondary,tertiary:Ke.Tertiary,residential:Ke.Residential,unclassified:Ke.Unclassified,road:Ke.Unclassified,service:Ke.Service,living_street:Ke.LivingStreet,busway:Ke.Busway,bus_guideway:Ke.Busway,pedestrian:Ke.Pedestrian,footway:Ke.Footway,path:Ke.Footway,corridor:Ke.Footway,cycleway:Ke.Cycleway,track:Ke.Track},If=new Set(["steps","platform","construction","proposed","raceway","bridleway"]),bS={asphalt:ot.Asphalt,chipseal:ot.Asphalt,concrete:ot.Concrete,"concrete:plates":ot.Concrete,"concrete:lanes":ot.Concrete,paved:ot.Paved,paving_stones:ot.Paved,metal:ot.Paved,wood:ot.Paved,bricks:ot.Paved,sett:ot.Cobblestone,cobblestone:ot.Cobblestone,unhewn_cobblestone:ot.Cobblestone,"cobblestone:flattened":ot.Cobblestone,gravel:ot.Gravel,fine_gravel:ot.Gravel,compacted:ot.Gravel,pebblestone:ot.Gravel,ground:ot.Dirt,dirt:ot.Dirt,earth:ot.Dirt,mud:ot.Dirt,sand:ot.Dirt,grass:ot.Dirt,unpaved:ot.Dirt};function MS(n){const e=(n.highway??"").toLowerCase();if(e===""||If.has(e))return null;const t=_u[e];if(t!==void 0)return e==="path"&&n.bicycle==="designated"?{cls:Ke.Cycleway,link:!1}:{cls:t,link:!1};if(e.endsWith("_link")){const i=_u[e.slice(0,-5)];if(i!==void 0)return{cls:i,link:!0}}return null}function SS(n){if(n===void 0)return 0;const e=/^\s*(\d+)/.exec(n);if(!e)return 0;const t=Number(e[1]);return!Number.isFinite(t)||t<=0?0:Math.min(_S,Math.round(t))}function ES(n){if(n===void 0)return 0;const e=/^\s*(-?\d+)/.exec(n);if(!e)return 0;const t=Number(e[1]);return Number.isFinite(t)?Math.max(fb,Math.min(pb,Math.round(t))):0}function TS(n){const e=(n.oneway??"").toLowerCase();if(e==="-1"||e==="reverse")return{oneway:!0,reversed:!0};if(e==="yes"||e==="true"||e==="1")return{oneway:!0,reversed:!1};const t=(n.junction??"").toLowerCase();return t==="roundabout"||t==="circular"?{oneway:!0,reversed:!1}:{oneway:!1,reversed:!1}}function AS(n,e){const t=[],i=[];for(const a of e){if(!Number.isFinite(a.lat)||!Number.isFinite(a.lon))continue;const s=n.toWorld(a.lat,a.lon),o=t.length;o>0&&Math.abs(s.x-t[o-1])<1e-6&&Math.abs(s.z-i[o-1])<1e-6||(t.push(s.x),i.push(s.z))}return t.length<2?null:{x:t,z:i}}function RS(n,e){const t=e*e,i=[];let a=null;const s=(r,l,c)=>{const h=r.x.length;h>0&&Math.abs(l-r.x[h-1])<1e-6&&Math.abs(c-r.z[h-1])<1e-6||(r.x.push(l),r.z.push(c))},o=()=>{a!==null&&a.x.length>=2&&i.push(a),a=null};for(let r=0;r+1<n.x.length;r++){const l=n.x[r],c=n.z[r],h=n.x[r+1],u=n.z[r+1],f=l*l+c*c<=t,p=h*h+u*u<=t;if(f&&p){a===null?a={x:[l],z:[c]}:s(a,l,c),s(a,h,u);continue}const w=h-l,g=u-c,m=w*w+g*g,d=2*(l*w+c*g),v=l*l+c*c-t,x=d*d-4*m*v;if(m===0||x<=0){f||o();continue}const y=Math.sqrt(x),_=(-d-y)/(2*m),b=(-d+y)/(2*m),E=R=>[l+R*w,c+R*g];if(f&&!p){const R=_>=0&&_<=1?_:b,[M,S]=E(Math.min(1,Math.max(0,R)));a===null?a={x:[l],z:[c]}:s(a,l,c),s(a,M,S),o()}else if(!f&&p){const R=b>=0&&b<=1?b:_,[M,S]=E(Math.min(1,Math.max(0,R)));o(),a={x:[M],z:[S]},s(a,h,u)}else if(o(),_>0&&b<1){const[R,M]=E(_),[S,A]=E(b),D={x:[R],z:[M]};s(D,S,A),D.x.length>=2&&i.push(D)}}return o(),i}function CS(n){const e=[];let t=[],i=[],a=1/0,s=-1/0,o=1/0,r=-1/0;const l=()=>{t.length>=2&&e.push({x:t,z:i})};for(let c=0;c<n.x.length;c++){const h=n.x[c],u=n.z[c],f=Math.min(a,h),p=Math.max(s,h),w=Math.min(o,u),g=Math.max(r,u);if(t.length>0&&(p-f>yu||g-w>yu||t.length>=yS)){l();const d=t[t.length-1],v=i[i.length-1];t=[d],i=[v],a=s=d,o=r=v}t.push(h),i.push(u),a=Math.min(a,h),s=Math.max(s,h),o=Math.min(o,u),r=Math.max(r,u)}return l(),e}function DS(n){return`way["highway"](${Ho(n)});`}function PS(n){return n.type==="way"&&(n.tags??{}).highway!==void 0}function LS(n,e,t){const i=new Pf,a=[];let s=0;for(const o of n){if(o.type!=="way"){i.add(`unhandled element type ${o.type}`);continue}const r=o.tags??{};if(zr(r.area)){i.add("area=yes (a polygon, not a centreline)");continue}const l=MS(r);if(l===null){const x=(r.highway??"").toLowerCase();i.add(If.has(x)?`excluded highway=${x}`:`unmapped highway=${x||"(none)"}`);continue}if(!o.geometry||o.geometry.length===0){i.add("way with no geometry");continue}const c=AS(e,o.geometry);if(c===null){i.add("under 2 distinct vertices");continue}const h=RS(c,t);if(h.length===0){i.add("entirely outside the city radius");continue}const{oneway:u,reversed:f}=TS(r);if(f)for(const x of h)x.x.reverse(),x.z.reverse();let p=0;u&&(p|=db),zr(r.bridge)&&(p|=ba),zr(r.tunnel)&&(p|=Aa),l.link&&(p|=df);const w=(r.name??"").trim(),g=SS(r.lanes),m=ES(r.layer),d=bS[(r.surface??"").toLowerCase()]??ot.Unknown,v=[];for(const x of h)v.push(...CS(x));v.length>h.length&&(s+=v.length-h.length);for(const x of v){const y=x.x.length;let _=1/0,b=-1/0,E=1/0,R=-1/0;for(let F=0;F<y;F++)x.x[F]<_&&(_=x.x[F]),x.x[F]>b&&(b=x.x[F]),x.z[F]<E&&(E=x.z[F]),x.z[F]>R&&(R=x.z[F]);const M=(_+b)/2,S=(E+R)/2,A=new Int16Array(y),D=new Int16Array(y);let I=!1;for(let F=0;F<y;F++){const O=Math.round((x.x[F]-M)/xu),V=Math.round((x.z[F]-S)/xu);if(Math.abs(O)>32767||Math.abs(V)>32767){I=!0;break}A[F]=O,D[F]=V}if(I){i.add("BUG: offset overflows i16 after split");continue}a.push({cls:l.cls,name:w,lanes:g,flags:p,layer:m,surface:d,cx:M,cz:S,dx:A,dz:D})}}return{ways:a,skips:i,splits:s}}function Vn(n,e){this.x=n,this.y=e}Vn.prototype={clone(){return new Vn(this.x,this.y)},add(n){return this.clone()._add(n)},sub(n){return this.clone()._sub(n)},multByPoint(n){return this.clone()._multByPoint(n)},divByPoint(n){return this.clone()._divByPoint(n)},mult(n){return this.clone()._mult(n)},div(n){return this.clone()._div(n)},rotate(n){return this.clone()._rotate(n)},rotateAround(n,e){return this.clone()._rotateAround(n,e)},matMult(n){return this.clone()._matMult(n)},unit(){return this.clone()._unit()},perp(){return this.clone()._perp()},round(){return this.clone()._round()},mag(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals(n){return this.x===n.x&&this.y===n.y},dist(n){return Math.sqrt(this.distSqr(n))},distSqr(n){const e=n.x-this.x,t=n.y-this.y;return e*e+t*t},angle(){return Math.atan2(this.y,this.x)},angleTo(n){return Math.atan2(this.y-n.y,this.x-n.x)},angleWith(n){return this.angleWithSep(n.x,n.y)},angleWithSep(n,e){return Math.atan2(this.x*e-this.y*n,this.x*n+this.y*e)},_matMult(n){const e=n[0]*this.x+n[1]*this.y,t=n[2]*this.x+n[3]*this.y;return this.x=e,this.y=t,this},_add(n){return this.x+=n.x,this.y+=n.y,this},_sub(n){return this.x-=n.x,this.y-=n.y,this},_mult(n){return this.x*=n,this.y*=n,this},_div(n){return this.x/=n,this.y/=n,this},_multByPoint(n){return this.x*=n.x,this.y*=n.y,this},_divByPoint(n){return this.x/=n.x,this.y/=n.y,this},_unit(){return this._div(this.mag()),this},_perp(){const n=this.y;return this.y=this.x,this.x=-n,this},_rotate(n){const e=Math.cos(n),t=Math.sin(n),i=e*this.x-t*this.y,a=t*this.x+e*this.y;return this.x=i,this.y=a,this},_rotateAround(n,e){const t=Math.cos(n),i=Math.sin(n),a=e.x+t*(this.x-e.x)-i*(this.y-e.y),s=e.y+i*(this.x-e.x)+t*(this.y-e.y);return this.x=a,this.y=s,this},_round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},constructor:Vn};Vn.convert=function(n){if(n instanceof Vn)return n;if(Array.isArray(n))return new Vn(+n[0],+n[1]);if(n.x!==void 0&&n.y!==void 0)return new Vn(+n.x,+n.y);throw new Error("Expected [x, y] or {x, y} point format")};class Ff{constructor(e,t,i,a,s){for(this.properties=Object.create(null),this.extent=i,this.type=0,this.id=void 0,this._pbf=e,this._geometry=-1,this._keys=a,this._values=s;e.pos<t;){const o=e.readVarint();if(o===8)this.id=e.readVarint();else if(o===18){const r=e.readVarint()+e.pos;for(;e.pos<r;){const l=a[e.readVarint()],c=s[e.readVarint()];this.properties[l]=c}}else o===24?this.type=e.readVarint():(o===34&&(this._geometry=e.pos),e.skip(o))}}loadGeometry(){if(this._geometry<0)throw new Error("feature has no geometry");const e=this._pbf;e.pos=this._geometry;const t=e.readVarint()+e.pos,i=[];let a,s=1,o=0,r=0,l=0;for(;e.pos<t;){if(o<=0){const c=e.readVarint();if(s=c&7,o=c>>3,o===0)continue}if(o--,s===1)r+=e.readSVarint(),l+=e.readSVarint(),a&&i.push(a),a=[new Vn(r,l)];else if(s===2)r+=e.readSVarint(),l+=e.readSVarint(),a&&a.push(new Vn(r,l));else if(s===7)a&&a.push(a[0].clone());else throw new Error(`unknown command ${s}`)}return a&&i.push(a),i}bbox(){if(this._geometry<0)throw new Error("feature has no geometry");const e=this._pbf;e.pos=this._geometry;const t=e.readVarint()+e.pos;let i=1,a=0,s=0,o=0,r=1/0,l=-1/0,c=1/0,h=-1/0;for(;e.pos<t;){if(a<=0){const u=e.readVarint();if(i=u&7,a=u>>3,a===0)continue}if(a--,i===1||i===2)s+=e.readSVarint(),o+=e.readSVarint(),s<r&&(r=s),s>l&&(l=s),o<c&&(c=o),o>h&&(h=o);else if(i!==7)throw new Error(`unknown command ${i}`)}return[r,c,l,h]}toGeoJSON(e,t,i){const a=this.extent*Math.pow(2,i),s=this.extent*e,o=this.extent*t,r=this.loadGeometry();function l(f){return[(f.x+s)*360/a-180,360/Math.PI*Math.atan(Math.exp((1-(f.y+o)*2/a)*Math.PI))-90]}function c(f){return f.map(l)}let h;if(this.type===1){const f=[];for(const w of r)f.push(w[0]);const p=c(f);h=f.length===1?{type:"Point",coordinates:p[0]}:{type:"MultiPoint",coordinates:p}}else if(this.type===2){const f=r.map(c);h=f.length===1?{type:"LineString",coordinates:f[0]}:{type:"MultiLineString",coordinates:f}}else if(this.type===3){const f=yc(r),p=[];for(const w of f)p.push(w.map(c));h=p.length===1?{type:"Polygon",coordinates:p[0]}:{type:"MultiPolygon",coordinates:p}}else throw new Error("unknown feature type");const u={type:"Feature",geometry:h,properties:this.properties};return this.id!=null&&(u.id=this.id),u}}Ff.types=["Unknown","Point","LineString","Polygon"];function yc(n){const e=n.length;if(e<=1)return[n];const t=[];let i,a;for(let s=0;s<e;s++){const o=IS(n[s]);o!==0&&(a===void 0&&(a=o<0),a===o<0?(i&&t.push(i),i=[n[s]]):i&&i.push(n[s]))}return i&&t.push(i),t}function IS(n){let e=0;for(let t=0,i=n.length,a=i-1,s,o;t<i;a=t++)s=n[t],o=n[a],e+=(o.x-s.x)*(s.y+o.y);return e}class FS{constructor(e,t){for(this.version=1,this.name="",this.extent=4096,this.length=0,this._pbf=e,this._keys=[],this._values=[],this._features=[],t===void 0&&(t=e.length);e.pos<t;){const i=e.readVarint();i===10?this.name=e.readString():i===18?(this._features.push(e.pos),e.skip(i)):i===26?this._keys.push(e.readString()):i===34?this._values.push(kS(e)):i===40?this.extent=e.readVarint():i===120?this.version=e.readVarint():e.skip(i)}this.length=this._features.length}feature(e){if(e<0||e>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[e];const t=this._pbf.readVarint()+this._pbf.pos;return new Ff(this._pbf,t,this.extent,this._keys,this._values)}}function kS(n){let e=null;const t=n.readVarint()+n.pos;for(;n.pos<t;){const i=n.readVarint();e=i===10?n.readString():i===21?n.readFloat():i===25?n.readDouble():i===32?n.readVarint(!0):i===40?n.readVarint():i===48?n.readSVarint():i===56?n.readBoolean():(n.skip(i),null)}if(e==null)throw new Error("unknown feature value");return e}class NS{constructor(e,t=e.length){const i=Object.create(null);for(;e.pos<t;){const a=e.readVarint();if(a===26){const s=new FS(e,e.readVarint()+e.pos);s.length&&(i[s.name]=s)}else e.skip(a)}this.layers=i}}const bu=65536*65536,US=12,Mu=typeof TextDecoder>"u"?null:new TextDecoder("utf-8"),OS=0,zS=1,Su=2,BS=5;class HS{constructor(e){this.buf=ArrayBuffer.isView(e)?e:new Uint8Array(e),this.dataView=new DataView(this.buf.buffer,this.buf.byteOffset,this.buf.byteLength),this.pos=0,this.type=0,this._valueStart=-1,this.length=this.buf.length}readFields(e,t,i=this.length){let a;for(;a=this.nextField(i);)e(a,t,this);return t}readMessage(e,t){return this.readFields(e,t,this.readVarint()+this.pos)}readFixed32(){const e=this.dataView.getUint32(this.pos,!0);return this.pos+=4,e}readSFixed32(){const e=this.dataView.getInt32(this.pos,!0);return this.pos+=4,e}readFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getUint32(this.pos+4,!0)*bu;return this.pos+=8,e}readSFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getInt32(this.pos+4,!0)*bu;return this.pos+=8,e}readFloat(){const e=this.dataView.getFloat32(this.pos,!0);return this.pos+=4,e}readDouble(){const e=this.dataView.getFloat64(this.pos,!0);return this.pos+=8,e}readVarint(e){const t=this.buf,i=t[this.pos++];if(i<128)return i;let a=i&127,s;return s=t[this.pos++],a|=(s&127)<<7,s<128||(s=t[this.pos++],a|=(s&127)<<14,s<128)||(s=t[this.pos++],a|=(s&127)<<21,s<128)?a:(s=t[this.pos],a|=(s&15)<<28,GS(a,e,this))}readSVarint(){const e=this.readVarint();return e%2===1?(e+1)/-2:e/2}readBoolean(){return!!this.readVarint()}readString(){const e=this.readVarint()+this.pos,t=this.pos;return this.pos=e,e-t>=US&&Mu?Mu.decode(this.buf.subarray(t,e)):VS(this.buf,t,e)}readBytes(){const e=this.readVarint()+this.pos,t=this.buf.subarray(this.pos,e);return this.pos=e,t}readPackedVarint(e=[],t){const i=this.readPackedEnd();for(;this.pos<i;)e.push(this.readVarint(t));return e}readPackedSVarint(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSVarint());return e}readPackedBoolean(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readBoolean());return e}readPackedFloat(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFloat());return e}readPackedDouble(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readDouble());return e}readPackedFixed32(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFixed32());return e}readPackedSFixed32(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSFixed32());return e}readPackedFixed64(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFixed64());return e}readPackedSFixed64(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSFixed64());return e}readPackedEnd(){return this.type===Su?this.readVarint()+this.pos:this.pos+1}nextField(e=this.length){if(this.pos===this._valueStart&&this.skip(this.type),this.pos>=e)return 0;const t=this.readVarint();return this.type=t&7,this._valueStart=this.pos,t>>>3}skip(e){const t=e&7;if(t===OS)for(;this.buf[this.pos++]>127;);else if(t===Su)this.pos=this.readVarint()+this.pos;else if(t===BS)this.pos+=4;else if(t===zS)this.pos+=8;else throw new Error(`Unimplemented type: ${t}`)}}function GS(n,e,t){const i=t.buf;let a,s;if(s=i[t.pos++],a=(s&112)>>4,s<128||(s=i[t.pos++],a|=(s&127)<<3,s<128)||(s=i[t.pos++],a|=(s&127)<<10,s<128)||(s=i[t.pos++],a|=(s&127)<<17,s<128)||(s=i[t.pos++],a|=(s&127)<<24,s<128)||(s=i[t.pos++],a|=(s&1)<<31,s<128))return ea(n,a,e);throw new Error("Expected varint not more than 10 bytes")}function ea(n,e,t){return t?e*4294967296+(n>>>0):(e>>>0)*4294967296+(n>>>0)}function VS(n,e,t){let i="",a=e;for(;a<t;){const s=n[a];let o=null,r=s>239?4:s>223?3:s>191?2:1;if(a+r>t)break;let l,c,h;r===1?s<128&&(o=s):r===2?(l=n[a+1],(l&192)===128&&(o=(s&31)<<6|l&63,o<=127&&(o=null))):r===3?(l=n[a+1],c=n[a+2],(l&192)===128&&(c&192)===128&&(o=(s&15)<<12|(l&63)<<6|c&63,(o<=2047||o>=55296&&o<=57343)&&(o=null))):r===4&&(l=n[a+1],c=n[a+2],h=n[a+3],(l&192)===128&&(c&192)===128&&(h&192)===128&&(o=(s&15)<<18|(l&63)<<12|(c&63)<<6|h&63,(o<=65535||o>=1114112)&&(o=null))),o===null?(o=65533,r=1):o>65535&&(o-=65536,i+=String.fromCharCode(o>>>10&1023|55296),o=56320|o&1023),i+=String.fromCharCode(o),a+=r}return i}const WS=64/4096;let _c=-1;function XS(n,e){switch(n){case"motorway":case"trunk":case"primary":case"secondary":case"tertiary":case"service":case"track":case"busway":return n;case"minor":return"residential";case"path":return e&&e!==""?e:"footway";default:return null}}const Eu={"landcover:wood/wood":["natural","wood"],"landcover:wood/forest":["landuse","forest"],"landcover:farmland/orchard":["landuse","orchard"],"landcover:grass/scrub":["natural","scrub"],"landcover:grass/shrubbery":["natural","scrub"],"landcover:grass/park":["leisure","park"],"landcover:grass/garden":["leisure","garden"],"landcover:grass/village_green":["landuse","village_green"],"landcover:grass/recreation_ground":["landuse","recreation_ground"],"landcover:grass/golf_course":["leisure","golf_course"],"landcover:grass/meadow":["landuse","meadow"],"landcover:grass/grass":["landuse","grass"],"landcover:wetland/":["natural","wetland"],"landuse:cemetery/":["landuse","cemetery"],"park:nature_reserve/":["leisure","nature_reserve"]};function $S(n,e,t){if(n==="water")return["natural","water"];const i=Eu[`${n}:${e}/${t??""}`];return i||(Eu[`${n}:${e}/`]??null)}function qS(n,e){const t=n instanceof Uint8Array?n:new Uint8Array(n),i=new NS(new HS(t)),a=[],s={whole:0,cut:0,neighbour:0,hidden:0,roads:0,cover:0},o=i.layers.building;o&&YS(o,e,a,s);const r=i.layers.transportation;r&&JS(r,e,a,s);for(const l of["landcover","landuse","park","water"]){const c=i.layers[l];c&&QS(c,l,e,a,s)}return{elements:a,stats:s}}function bc(n,e,t){const i=new Array(n.length);for(let a=0;a<n.length;a++)i[a]={lat:Li(e.y+n[a].y/t,e.z),lon:Pi(e.x+n[a].x/t,e.z)};return i}function YS(n,e,t,i){const a=n.extent;for(let s=0;s<n.length;s++){const o=n.feature(s);if(o.type!==3)continue;const r=o.properties;if(r.hide_3d===!0){i.hidden++;continue}const l=Number(r.render_height),c=Number(r.render_min_height??0),h={building:"yes"};Number.isFinite(l)&&(h.height=String(l)),Number.isFinite(c)&&c>0&&(h.min_height=String(c));for(const u of yc(o.loadGeometry())){const f=u[0];if(!f||f.length<4)continue;const p=jS(f,a);if(p.kind==="neighbour"){i.neighbour++;continue}p.ring.length<3||(p.kind==="whole"?i.whole++:i.cut++,t.push({type:"way",id:_c--,tags:h,geometry:bc(p.ring,e,a)}))}}}function jS(n,e){const t=Math.round(e*WS);let i=1/0,a=-1/0,s=1/0,o=-1/0,r=!1,l=!1,c=!1,h=!1;for(const E of n)E.x<i&&(i=E.x),E.x>a&&(a=E.x),E.y<s&&(s=E.y),E.y>o&&(o=E.y),E.x<=-t&&(r=!0),E.x>=e+t&&(l=!0),E.y<=-t&&(c=!0),E.y>=e+t&&(h=!0);if(!r&&!l&&!c&&!h){const E=(i+a)/2,R=(s+o)/2;return E>=0&&E<e&&R>=0&&R<e?{kind:"whole",ring:n.slice()}:{kind:"neighbour"}}const u=KS(n,0,0,e,e);if(u.length<3)return{kind:"neighbour"};let f=1/0,p=-1/0,w=1/0,g=-1/0;for(const E of u)E.x<f&&(f=E.x),E.x>p&&(p=E.x),E.y<w&&(w=E.y),E.y>g&&(g=E.y);const m=p<=t,d=f>=e-t,v=g<=t,x=w>=e-t;return(!r||m)&&(!l||d)&&((!c||v)&&(!h||x))&&!(r&&l||c&&h)?{kind:"neighbour"}:{kind:"cut",ring:u}}function KS(n,e,t,i,a){let s=n.slice();s.length>1&&s[0].x===s[s.length-1].x&&s[0].y===s[s.length-1].y&&s.pop();const o=[[r=>r.x>=e,(r,l)=>({x:e,y:r.y+(l.y-r.y)*(e-r.x)/(l.x-r.x)})],[r=>r.x<=i,(r,l)=>({x:i,y:r.y+(l.y-r.y)*(i-r.x)/(l.x-r.x)})],[r=>r.y>=t,(r,l)=>({x:r.x+(l.x-r.x)*(t-r.y)/(l.y-r.y),y:t})],[r=>r.y<=a,(r,l)=>({x:r.x+(l.x-r.x)*(a-r.y)/(l.y-r.y),y:a})]];for(const[r,l]of o){if(s.length===0)break;const c=[];for(let h=0;h<s.length;h++){const u=s[h],f=s[(h+1)%s.length],p=r(u),w=r(f);p&&c.push(u),p!==w&&c.push(l(u,f))}s=c}return s}function ZS(n,e,t,i,a){const s=[];let o=[];const r=()=>{o.length>=2&&s.push(o),o=[]};for(let l=0;l+1<n.length;l++){const c=n[l],h=n[l+1],u=h.x-c.x,f=h.y-c.y;let p=0,w=1,g=!0;for(const[x,y]of[[-u,c.x-e],[u,i-c.x],[-f,c.y-t],[f,a-c.y]]){if(x===0){if(y<0){g=!1;break}continue}const _=y/x;if(x<0){if(_>w){g=!1;break}_>p&&(p=_)}else{if(_<p){g=!1;break}_<w&&(w=_)}}if(!g){r();continue}const m={x:c.x+p*u,y:c.y+p*f},d={x:c.x+w*u,y:c.y+w*f},v=o[o.length-1];(!v||v.x!==m.x||v.y!==m.y)&&(r(),o.push(m)),o.push(d),w<1&&r()}return r(),s}function JS(n,e,t,i){const a=n.extent;for(let s=0;s<n.length;s++){const o=n.feature(s);if(o.type!==2)continue;const r=o.properties,l=XS(String(r.class??""),r.subclass);if(l===null)continue;const c={highway:Number(r.ramp)===1&&/^(motorway|trunk|primary|secondary|tertiary)$/.test(l)?`${l}_link`:l};r.brunnel==="bridge"&&(c.bridge="yes"),r.brunnel==="tunnel"&&(c.tunnel="yes"),Number(r.oneway)===1&&(c.oneway="yes"),Number(r.oneway)===-1&&(c.oneway="-1"),r.layer!==void 0&&(c.layer=String(r.layer)),typeof r.surface=="string"&&(c.surface=r.surface),typeof r.service=="string"&&(c.service=r.service);for(const h of o.loadGeometry())for(const u of ZS(h,0,0,a,a))t.push({type:"way",id:_c--,tags:c,geometry:bc(u,e,a)}),i.roads++}}function QS(n,e,t,i,a){const s=n.extent;for(let o=0;o<n.length;o++){const r=n.feature(o);if(r.type!==3)continue;const l=r.properties,c=$S(e,String(l.class??""),l.subclass);if(c===null)continue;const h={[c[0]]:c[1]};for(const u of yc(r.loadGeometry()))!u[0]||u[0].length<4||(i.push({type:"way",id:_c--,tags:h,geometry:bc(u[0],t,s)}),a.cover++)}}const eE=20,Tu={"natural=wood":.85,"landuse=forest":.85,"landuse=orchard":.7,"natural=scrub":.35,"leisure=nature_reserve":.35,"landuse=cemetery":.3,"leisure=park":.3,"leisure=garden":.25,"landuse=village_green":.2,"landuse=recreation_ground":.15,"leisure=golf_course":.12,"landuse=meadow":.05,"landuse=grass":.05},Au={"leisure=park":.8,"leisure=garden":.7,"leisure=golf_course":.95,"landuse=grass":.95,"landuse=meadow":.95,"landuse=village_green":.9,"landuse=recreation_ground":.85,"landuse=cemetery":.75,"natural=scrub":.5},tE=["natural=water","natural=wetland","landuse=reservoir","landuse=basin","waterway=riverbank"],nE=1;function iE(n){const e=Ho(n);return`way["natural"~"^(wood|scrub|water|wetland)$"](${e});
 way["landuse"~"^(forest|orchard|meadow|grass|village_green|recreation_ground|cemetery|reservoir|basin)$"](${e});
 way["leisure"~"^(park|garden|golf_course|nature_reserve)$"](${e});
 way["waterway"="riverbank"](${e});
 relation["natural"~"^(wood|scrub|water|wetland)$"](${e});
 relation["landuse"~"^(forest|orchard|cemetery)$"](${e});
 relation["leisure"~"^(park|garden|nature_reserve)$"](${e});
 node["natural"="tree"](${e});`}function aE(n){for(const e of tE){const t=e.indexOf("=");if(n[e.slice(0,t)]===e.slice(t+1))return{canopy:0,water:!0}}for(const e of Object.keys(Tu)){const t=e.indexOf("=");if(n[e.slice(0,t)]===e.slice(t+1))return{canopy:Tu[e],water:!1}}return null}function sE(n){for(const e of Object.keys(Au)){const t=e.indexOf("=");if(n[e.slice(0,t)]===e.slice(t+1))return Au[e]}return 0}class oE{rgba;n;extentM;cellM;constructor(e,t=eE){this.extentM=e,this.cellM=t,this.n=Math.max(1,Math.ceil(e*2/t)),this.rgba=new Uint8Array(this.n*this.n*4)}index(e){return Math.floor((e+this.extentM)/this.cellM)}raise(e,t,i,a){if(e<0||t<0||e>=this.n||t>=this.n)return!1;const s=(t*this.n+e)*4+i,o=Math.round(Math.max(0,Math.min(1,a))*255);return this.rgba[s]>=o?!1:(this.rgba[s]=o,!0)}add(e,t){let i=0,a=0,s=0;for(const o of e){const r=o.tags??{};if(o.type==="node"){if(r.natural!=="tree"||!Number.isFinite(o.lat)||!Number.isFinite(o.lon))continue;const p=t.toWorld(o.lat,o.lon);this.raise(this.index(p.x),this.index(p.z),2,nE)&&s++,a++;continue}const l=aE(r);if(l===null)continue;const c=[];if(o.type==="way"&&o.geometry&&o.geometry.length>=3)c.push(o.geometry);else if(o.type==="relation")for(const p of o.members??[])p.role!=="outer"||!p.geometry||p.geometry.length<3||c.push(p.geometry);if(c.length===0)continue;i++;const h=l.water?0:2,u=l.water?1:l.canopy;for(const p of c)s+=this.fill(p,t,h,u);const f=l.water?0:sE(r);if(f>0)for(const p of c)this.fill(p,t,3,f)}return{polygons:i,nodes:a,cells:s}}fill(e,t,i,a){const s=e.length,o=new Float64Array(s),r=new Float64Array(s);let l=1/0,c=-1/0,h=1/0,u=-1/0;for(let d=0;d<s;d++){const v=t.toWorld(e[d].lat,e[d].lon);o[d]=v.x,r[d]=v.z,v.x<l&&(l=v.x),v.x>c&&(c=v.x),v.z<h&&(h=v.z),v.z>u&&(u=v.z)}if(!Number.isFinite(l)||!Number.isFinite(h))return 0;const f=Math.max(0,this.index(l)),p=Math.min(this.n-1,this.index(c)),w=Math.max(0,this.index(h)),g=Math.min(this.n-1,this.index(u));if(p<f||g<w)return 0;let m=0;for(let d=w;d<=g;d++){const v=-this.extentM+(d+.5)*this.cellM;for(let x=f;x<=p;x++){const y=-this.extentM+(x+.5)*this.cellM;rE(o,r,y,v)&&this.raise(x,d,i,a)&&m++}}if(m===0){let d=0,v=0;for(let x=0;x<s;x++)d+=o[x],v+=r[x];this.raise(this.index(d/s),this.index(v/s),i,a)&&m++}return m}}function rE(n,e,t,i){let a=!1;const s=n.length;for(let o=0,r=s-1;o<s;r=o,o++){const l=e[o],c=e[r];if(l>i!=c>i){const h=(i-l)/(c-l);t<n[o]+h*(n[r]-n[o])&&(a=!a)}}return a}const lE=14,Ha=2e4;function cE(n,e=180){return`[out:json][timeout:${e}];
(${uS(n)}
 ${DS(n)}
 ${iE(n)});
out geom;`}function hE(n){const e=rs(n);return{s:e.south,w:e.west,n:e.north,e:e.east}}function uE(n,e){if(e.length===0)return!1;const t=rs(n),i=[{lat:t.north,lon:t.west},{lat:t.north,lon:t.east},{lat:t.south,lon:t.west},{lat:t.south,lon:t.east}];for(const a of e){let s=!0;for(const o of i)if(ql({lat:a.lat,lon:a.lon},o)>a.radiusM){s=!1;break}if(s)return!0}return!1}function Ru(n,e,t,i,a=[],s=lE){const o=n.toLatLon(e,t),r=K_(o.lat,o.lon,s),l=rs(r),c=Math.max(1,ql({lat:l.north,lon:l.west},{lat:l.north,lon:l.east})),h=Math.max(1,ql({lat:l.north,lon:l.west},{lat:l.south,lon:l.west})),u=Math.ceil(i/c)+1,f=Math.ceil(i/h)+1,p=[],w=2**s;for(let g=-f;g<=f;g++)for(let m=-u;m<=u;m++){const d=r.y+g;if(d<0||d>=w)continue;const v={z:s,x:((r.x+m)%w+w)%w,y:d},x=rs(v),y=n.toWorld(x.north,x.west),_=n.toWorld(x.south,x.east),b=Math.min(y.x,_.x),E=Math.max(y.x,_.x),R=Math.min(y.z,_.z),M=Math.max(y.z,_.z),S=Math.max(0,Math.max(b-e,e-E)),A=Math.max(0,Math.max(R-t,t-M)),D=Math.hypot(S,A);D>i||uE(v,a)||p.push({tile:v,key:Z_(v),bbox:hE(v),distM:D})}return p.sort((g,m)=>g.distM-m.distM),p}const dE=4e3,Hr=24,fE=250,Gr=8e3,pE=4;function mE(n,e=60){return`[out:json][timeout:${e}];
node["natural"="tree"](${Ho(n)});
out;`}class gE{overpass;stats={tiles:0,empty:0,failed:0,buildings:0,roads:0,vegPolygons:0,vegNodes:0,triangles:0,fetching:!1,fromVector:0,fromOverpass:0,enriched:0,evicted:0};opts;resident=new Map;wantedKeys=new Set;centreX=0;centreZ=0;state=new Map;seen=new Set;queue=[];enrichQueue=[];enriching=!1;scannedX=1/0;scannedZ=1/0;inflight=0;disposed=!1;groups=[];radius;tileBudget;constructor(e){this.opts=e,this.overpass=e.overpass,this.radius=e.wantRadiusM??dE,this.tileBudget={...e.budget,buildingTriangleBudget:Math.round(e.budget.buildingTriangleBudget/Hr),roadTriangleBudget:Math.round(e.budget.roadTriangleBudget/Hr)}}update(e,t){this.disposed||(Math.hypot(e-this.scannedX,t-this.scannedZ)>fE&&(this.scannedX=e,this.scannedZ=t,this.rescan(e,t)),this.pump())}rescan(e,t){const i=Ru(this.opts.origin,e,t,this.radius,this.opts.packs);this.wantedKeys=new Set(i.map(a=>a.key)),this.centreX=e,this.centreZ=t,this.queue=[];for(const a of i){const s=this.state.get(a.key);s!==void 0&&s!=="wanted"||(this.state.set(a.key,"wanted"),this.queue.push({key:a.key,tile:a.tile,bbox:a.bbox}))}}pump(){const e=this.opts.vector&&!this.opts.vector.stats.broken?pE:1;for(;this.inflight<e&&!this.disposed&&!(this.atCap&&!(this.queue.length>0&&this.evictOne()));){const t=this.queue.shift();if(!t)break;this.inflight++,this.stats.fetching=!0,this.state.set(t.key,"loading"),this.load(t).finally(()=>{this.inflight--,this.stats.fetching=this.inflight>0,this.queue.length>0&&!this.disposed&&this.pump()})}this.pumpEnrichment()}async load(e){try{let t=null,i=!1;const a=this.opts.vector;if(a){const o=await a.tile(e.tile);if(this.disposed)return;o!==null&&(t=qS(o,e.tile).elements,i=!0)}if(t===null){const o=await this.overpass.json(cE(e.bbox));if(this.disposed)return;if(o===null){this.state.set(e.key,"failed"),this.stats.failed++;return}t=o.elements??[]}const s=this.build(e.key,t);this.state.set(e.key,s?"done":"empty"),s||this.stats.empty++,i?(this.stats.fromVector+=s?1:0,this.opts.vegetation&&this.enrichQueue.push({key:e.key,bbox:e.bbox})):s&&this.stats.fromOverpass++}catch(t){console.warn(`[skycast] live tile ${e.key} failed to build:`,t),this.state.set(e.key,"failed"),this.stats.failed++}}pumpEnrichment(){if(this.enriching||this.disposed||this.pending>0)return;const e=this.enrichQueue.shift();if(!e)return;const t=this.opts.vegetation;!t||this.overpass.stats.broken||(this.enriching=!0,(async()=>{try{const i=await this.overpass.json(mE(e.bbox));if(this.disposed||i===null)return;const a=t.add(i.elements??[],this.opts.origin);this.stats.vegNodes+=a.nodes,this.stats.enriched++,a.cells>0&&this.opts.onVegetation()}catch(i){console.warn(`[skycast] tree enrichment for ${e.key} failed:`,i)}finally{this.enriching=!1,this.disposed||this.pumpEnrichment()}})())}build(e,t){const{origin:i,scene:a,heightAt:s,shadow:o,vegetation:r,footprints:l,roadBlockers:c}=this.opts,h=[],u={groups:[],buildingUniforms:[],roadUniforms:[],blockers:[],ids:[],cx:0,cz:0,buildings:0,roads:0,triangles:0};for(const m of t){const d=`${m.type}/${m.id}`;this.seen.has(d)||(this.seen.add(d),u.ids.push(d),h.push(m))}let f=!1;const p=h.filter(dS);let w=[];if(p.length>0){const m=xS(p,i,Ha);if(w=Q1(m.buildings),w.length>0){const d={lat0:i.lat,lon0:i.lon,radiusM:Ha,buildings:w},v=new DM(d,s,o,this.tileBudget);a.add(v.group),this.groups.push(v),this.opts.buildingUniforms.push(v.uniforms),this.stats.buildings+=w.length,this.stats.triangles+=v.stats.triangles,u.groups.push(v),u.buildingUniforms.push(v.uniforms),u.buildings+=w.length,u.triangles+=v.stats.triangles,l.add(w),this.opts.onBuildings?.(w,e),f=!0}}const g=h.filter(PS);if(g.length>0){const m=LS(g,i,Ha),d=yb(m.ways);if(d.length>0){const v={lat0:i.lat,lon0:i.lon,radiusM:Ha,roads:d},x=NM(d,s,Ha).deck,y=new KM(v,s,o,this.tileBudget,x);a.add(y.group),this.groups.push(y),this.opts.roadUniforms.push(y.uniforms),this.stats.roads+=d.length,this.stats.triangles+=y.stats.triangles;const _=new _f(d,c1);c.add(_),u.groups.push(y),u.roadUniforms.push(y.uniforms),u.blockers.push(_),u.roads+=d.length,u.triangles+=y.stats.triangles,this.opts.onRoads?.(d,e),f=!0}}if(r){const m=r.add(h,i);this.stats.vegPolygons+=m.polygons,this.stats.vegNodes+=m.nodes,m.cells>0&&(this.opts.onVegetation(),f=!0)}else w.length>0&&this.opts.onVegetation();if(f){this.stats.tiles++;const m=e.split("/").map(Number),d={z:m[0],x:m[1],y:m[2]},v=rs(d),x=i.toWorld((v.north+v.south)/2,(v.west+v.east)/2);u.cx=x.x,u.cz=x.z,this.resident.set(e,u)}else console.info(`[skycast] live tile ${e}: nothing mapped here`);return f}evictOne(){let e=null,t=-1;for(const[i,a]of this.resident){if(this.wantedKeys.has(i))continue;const s=Math.hypot(a.cx-this.centreX,a.cz-this.centreZ);s>t&&(t=s,e=i)}return e===null?!1:(this.evict(e),!0)}evict(e){const t=this.resident.get(e);if(!t)return;this.resident.delete(e);for(const a of t.groups){this.opts.scene.remove(a.group),a.dispose();const s=this.groups.indexOf(a);s>=0&&this.groups.splice(s,1)}const i=(a,s)=>{for(const o of s){const r=a.indexOf(o);r>=0&&a.splice(r,1)}};i(this.opts.buildingUniforms,t.buildingUniforms),i(this.opts.roadUniforms,t.roadUniforms);for(const a of t.blockers)this.opts.roadBlockers.remove(a);for(const a of t.ids)this.seen.delete(a);this.state.delete(e),this.stats.tiles--,this.stats.buildings-=t.buildings,this.stats.roads-=t.roads,this.stats.triangles-=t.triangles,this.stats.evicted++,this.opts.onEvict?.(e)}settledNear(e,t,i){for(const a of Ru(this.opts.origin,e,t,i,this.opts.packs)){const s=this.state.get(a.key);if(!(s==="done"||s==="empty"||s==="failed")&&!(this.atCap&&!this.inflight&&![...this.resident.keys()].some(o=>!this.wantedKeys.has(o))))return!1}return!0}set wantRadiusM(e){e!==this.radius&&(this.radius=e,this.scannedX=1/0)}get wantRadiusM(){return this.radius}dispose(){this.disposed=!0,this.queue=[],this.enrichQueue=[];for(const e of this.groups)this.opts.scene.remove(e.group),e.dispose();this.groups.length=0}get pending(){return this.atCap&&![...this.resident.keys()].some(e=>!this.wantedKeys.has(e))?0:this.queue.length}get atCap(){return this.stats.tiles+this.inflight>=Hr}latency(){const e=[...this.overpass.stats.latencyMs].sort((t,i)=>t-i);return e.length===0?{n:0,median:0,max:0}:{n:e.length,median:e[e.length>>1],max:e[e.length-1]}}}const Cu=["https://overpass-api.de/api/interpreter","https://maps.mail.ru/osm/tools/overpass/api/interpreter","https://overpass.private.coffee/api/interpreter","https://overpass.kumi.systems/api/interpreter"],vE={minGapMs:2e3,backoffBaseMs:4e3,timeoutMs:3e4},wE=3,xE=600*1e3,yE=4,Vr=60;class _E{stats={cacheHits:0,networkHits:0,failures:0,deduped:0,refused:0,latencyMs:[],broken:!1};endpoints;health;timing;inflight=new Map;queue=Promise.resolve();lastRequestAt=0;consecutiveFailures=0;spent=0;constructor(e=Cu,t={}){this.endpoints=e.length>0?e:Cu,this.health=this.endpoints.map(i=>({url:i,downUntil:0,failures:0})),this.timing={...vE,...t}}url(e,t=this.endpoints[0]){return`${t}?data=${encodeURIComponent(e)}`}async cached(e){return await yo(this.url(e),Hl)!==null}async json(e){const t=this.url(e),i=this.inflight.get(t);if(i)return this.stats.deduped++,await i;const a=this.run(t).finally(()=>this.inflight.delete(t));return this.inflight.set(t,a),a}async run(e){const t=await yo(e,Hl);if(t)return this.stats.cacheHits++,Du(t);if(this.stats.broken)return this.stats.refused++,null;if(this.spent>=Vr)return this.stats.refused++,this.spent===Vr&&(this.spent++,console.warn(`[skycast] live OSM: session budget of ${Vr} Overpass requests spent; no more will be made. Everything already fetched stays cached.`)),null;this.spent++;const i=new Set;for(let a=0;a<wE;a++){const s=this.pick(i);i.add(s);const o=s.url+e.slice(e.indexOf("?data=")),r=await this.send(o,s);if(r.body){const l=Du(r.body);if(l!==null)return this.consecutiveFailures=0,s.failures=0,s.downUntil=0,wc(e,r.body),l;console.warn("[skycast] live OSM: answer was not JSON (instance busy?)"),this.bench(s,0);continue}if(r.fatal)break;this.bench(s,r.retryAfterMs)}return this.stats.failures++,this.consecutiveFailures++,this.consecutiveFailures>=yE&&(this.stats.broken=!0,console.warn(`[skycast] live OSM: ${this.consecutiveFailures} Overpass requests failed in a row; not asking again this session.`)),null}pick(e){const t=Date.now(),i=this.health.filter(o=>!e.has(o)),a=i.length>0?i:this.health,s=a.find(o=>o.downUntil<=t);return s||a.reduce((o,r)=>r.downUntil<o.downUntil?r:o)}bench(e,t){const i=Math.min(xE,this.timing.backoffBaseMs*2**Math.min(e.failures,4));e.failures++,e.downUntil=Math.max(e.downUntil,Date.now()+Math.max(t,i))}send(e,t){const i=this.queue.then(async()=>{const a=Math.max(this.lastRequestAt+this.timing.minGapMs-Date.now(),t.downUntil-Date.now());a>0&&await bE(a);const s=performance.now();try{const o=await fetch(e,{mode:"cors",credentials:"omit",signal:AbortSignal.timeout(this.timing.timeoutMs)});if(this.lastRequestAt=Date.now(),o.ok){const h=await o.arrayBuffer();return this.stats.networkHits++,this.stats.latencyMs.push(performance.now()-s),{body:h,retryAfterMs:0,fatal:!1}}const r=Number(o.headers.get("Retry-After")),l=Number.isFinite(r)&&r>0?r*1e3:0,c=o.status===400;return console.warn(`[skycast] live OSM: ${o.status} ${o.statusText}`),{body:null,retryAfterMs:l,fatal:c}}catch(o){return this.lastRequestAt=Date.now(),console.warn("[skycast] live OSM: request failed:",o),{body:null,retryAfterMs:0,fatal:!1}}});return this.queue=i.then(()=>{},()=>{}),i}}function Du(n){try{return JSON.parse(new TextDecoder().decode(n))}catch{return null}}function bE(n){return new Promise(e=>setTimeout(e,n))}const ME="https://tiles.openfreemap.org/planet",SE=6*3600*1e3,Pu=4,Lu=15e3;class EE{constructor(e=ME){this.tilejson=e}stats={tiles:0,failures:0,broken:!1,latencyMs:[]};template=null;consecutiveFailures=0;urlTemplate(){return this.template||(this.template=(async()=>{try{const e=await yo(this.tilejson,SE);let t=e;if(!t){const s=await fetch(this.tilejson,{mode:"cors",credentials:"omit",signal:AbortSignal.timeout(Lu)});if(!s.ok)throw new Error(`${s.status} ${s.statusText}`);t=await s.arrayBuffer()}const a=JSON.parse(new TextDecoder().decode(t)).tiles?.[0];if(!a||!a.includes("{z}"))throw new Error("TileJSON has no tile template");return e||wc(this.tilejson,t),a}catch(e){return console.warn("[skycast] vector tiles: TileJSON unavailable, using Overpass:",e),this.stats.broken=!0,null}})()),this.template}async tile(e){if(this.stats.broken)return null;const t=await this.urlTemplate();if(t===null)return null;const i=t.replace("{z}",String(e.z)).replace("{x}",String(e.x)).replace("{y}",String(e.y)),a=performance.now();try{const s=await TE(as(i,ya),Lu);return this.stats.tiles++,this.stats.latencyMs.push(performance.now()-a),this.consecutiveFailures=0,s}catch(s){return this.stats.failures++,++this.consecutiveFailures>=Pu&&(this.stats.broken=!0,console.warn(`[skycast] vector tiles: ${Pu} failures in a row, using Overpass from here on`)),console.warn(`[skycast] vector tile ${e.z}/${e.x}/${e.y} failed:`,s),null}}}function TE(n,e){return new Promise((t,i)=>{const a=setTimeout(()=>i(new Error(`timed out after ${e} ms`)),e);n.then(s=>{clearTimeout(a),t(s)},s=>{clearTimeout(a),i(s)})})}const Iu={skyline:4500,street:2e3},AE=40,RE=1.5,CE=120;function DE(n,e,t){return(n&&(!e||n.distanceM<e.distanceM+CE)?n:e)??t}function Wr(n){return(n.flags&(ba|Aa))!==0?!1:n.cls>=Ke.Primary&&n.cls<=Ke.Pedestrian&&n.cls!==Ke.Busway}const ta=50;function PE(n,e,t){let i=!1;for(let a=0,s=n.length-2;a<n.length;s=a,a+=2){const o=n[a+1],r=n[s+1];o>t!=r>t&&e<(n[s]-n[a])*(t-o)/(r-o)+n[a]&&(i=!i)}return i}const LE=400,Fu=4e3,IE=1;class FE{shadowCasters=[];status={ready:!1,buildings:0,idle:!1,note:""};scene;budget;shadow;overpass;vector;world=null;generation=0;urban=Yh();roadMask=Db();land=Wb();buildingUniforms=[];roadUniforms=[];constructor(e,t,i,a,s=!0){this.scene=e,this.budget=t,this.shadow=i,this.overpass=new _E(a?[a]:void 0),this.vector=s?new EE:null}heightAt=(e,t)=>this.world?this.world.terrain.heightAt(e,t):0;roofGrid=null;roofGridFor=null;roofGridN=-1;surfaceAt=(e,t)=>{const i=this.world;if(!i)return 0;const a=i.terrain.heightAt(e,t);if(this.roofGridFor!==i.liveBuildings||this.roofGridN!==i.liveBuildings.length){const o=new Map;for(const r of i.liveBuildings){let l=1/0,c=-1/0,h=1/0,u=-1/0;for(let f=0;f<r.ring.length;f+=2)l=Math.min(l,r.ring[f]),c=Math.max(c,r.ring[f]),h=Math.min(h,r.ring[f+1]),u=Math.max(u,r.ring[f+1]);for(let f=Math.floor(h/ta);f<=Math.floor(u/ta);f++)for(let p=Math.floor(l/ta);p<=Math.floor(c/ta);p++){const w=`${p},${f}`,g=o.get(w);g?g.push(r):o.set(w,[r])}}this.roofGrid=o,this.roofGridFor=i.liveBuildings,this.roofGridN=i.liveBuildings.length}let s=a;for(const o of this.roofGrid?.get(`${Math.floor(e/ta)},${Math.floor(t/ta)}`)??[])PE(o.ring,e,t)&&(s=Math.max(s,Ef(o,i.terrain.heightAt)+o.topM));return s};async setOrigin(e,t){const i=++this.generation;this.dispose();const a=t??(()=>{});let s=0;const o=45,r=()=>a(.05+.4*Math.min(1,++s/o),"loading terrain");a(.05,"loading terrain");const l=this.budget.rings;let c=0;const h=Promise.all(l.map(R=>uf(co(e.lat,e.lon,R.extent*1.05),R.imageryZoom).then(M=>(a(.45+.45*(++c/l.length),"loading imagery"),M)))),u=await Promise.all([$h(co(e.lat,e.lon,22e3),12,r),$h(co(e.lat,e.lon,8e4),9,r)]),f=await h;if(i!==this.generation)return;a(.92,"building ground");const p=new Oy(e,u,f,this.shadow,this.budget.rings);this.scene.add(p.group);for(const R of p.uniforms)R.uLandNear.value=this.land.near,R.uLandFar.value=this.land.far,R.uLandNearExtent.value=this.land.nearExtent,R.uLandFarExtent.value=this.land.farExtent,R.uHasLand.value=0,R.uRoadMask.value=this.roadMask.texture,R.uRoadMaskExtent.value=this.roadMask.extent,R.uHasRoadMask.value=0;const w=new cb(e,p,l[0]),g=new w1([],Gr),m=new y1,d=new oE(Gr),v=new Rn(d.rgba,d.n,d.n,gt,_t);v.minFilter=Ze,v.magFilter=Ze,v.wrapS=Tt,v.wrapT=Tt,v.needsUpdate=!0;const x=new Cb(Fu),y=new xc;this.scene.add(y.group);for(const R of p.uniforms)R.uVeg.value=v,R.uVegExtent.value=d.extentM,R.uHasVeg.value=1,R.uRoadMask.value=x.texture,R.uRoadMaskExtent.value=Fu,R.uHasRoadMask.value=1;const _=new F1({mask:{rgba:d.rgba,n:d.n,extentM:d.extentM},heightAt:p.heightAt,roads:m,footprints:g},this.shadow,this.budget.tier==="reduced");_.update(0,0),this.scene.add(_.group),this.buildingUniforms=[],this.roadUniforms=[];const b={origin:e,terrain:p,detailRing:w,foliage:_,footprints:g,spawnMajor:[],spawnLocal:[],spawnMinor:[],liveBuildings:[],byTile:new Map,urbanDirty:!1,urbanBuiltAt:0,roadMask:x,vegTexture:v,masksDirty:!1,masksUploadedAt:0,lamps:y,live:null},E=R=>{let M=b.byTile.get(R);return M||b.byTile.set(R,M={spawn:[],buildings:[]}),M};b.live=new gE({origin:e,scene:this.scene,heightAt:p.heightAt,shadow:this.shadow,budget:this.budget,packs:[],vegetation:d,footprints:g,roadBlockers:m,buildingUniforms:this.buildingUniforms,roadUniforms:this.roadUniforms,onVegetation:()=>{_.invalidate(),b.masksDirty=!0},onBuildings:(R,M)=>{for(const S of R)b.liveBuildings.push(S);E(M).buildings=R,b.urbanDirty=!0},onEvict:R=>{const M=b.byTile.get(R);if(!M)return;b.byTile.delete(R);const S=new Set(M.spawn);if(b.spawnMajor=b.spawnMajor.filter(A=>!S.has(A)),b.spawnLocal=b.spawnLocal.filter(A=>!S.has(A)),b.spawnMinor=b.spawnMinor.filter(A=>!S.has(A)),M.buildings.length){const A=new Set(M.buildings);b.liveBuildings=b.liveBuildings.filter(D=>!A.has(D)),b.urbanDirty=!0}b.lamps.removeTag(R)},onRoads:(R,M)=>{const S=N=>fs(N.cls,N.lanes,N.flags)*.5,A=R.filter(N=>Wr(N)&&N.cls<=Ke.Tertiary),D=R.filter(N=>Wr(N)&&(N.cls===Ke.Residential||N.cls===Ke.Unclassified||N.cls===Ke.LivingStreet)),I=R.filter(N=>Wr(N)&&(N.cls===Ke.Service||N.cls===Ke.Pedestrian)),F=E(M),O=(N,K)=>{if(!K.length)return;const ne=new _f(K,S);N.push(ne),F.spawn.push(ne)};O(b.spawnMajor,A),O(b.spawnLocal,D),O(b.spawnMinor,I),b.roadMask.add(R),b.masksDirty=!0;const V=[],z={groundY:p.heightAt,occupied:null,onCarriageway:null,nearestMeasuredLamp:null};for(const N of R)zb(V,N,-1,z);for(const N of V){const K=Math.cos(N.yaw),ne=-Math.sin(N.yaw);for(let le=0;le<10;le++){const Te=N.x+K*N.armM,oe=N.z+ne*N.armM;if(!g.occupied(N.x,N.z)&&!g.occupied(Te,oe))break;N.x+=K*.5,N.z+=ne*.5}}b.lamps.add(V,M)},overpass:this.overpass,vector:this.vector,wantRadiusM:Iu.skyline}),this.world=b,this.shadowCasters.length=0,this.shadowCasters.push(_.depthScene),this.status.ready=!0,a(1,"ready")}update(e,t){const i=this.world;if(!i)return;i.live.wantRadiusM=Iu[t.mode],i.live.update(t.x,t.z);const a=e.position;a.y-i.terrain.heightAt(a.x,a.z)<AE&&i.detailRing.follow(a.x,a.z,0,0),i.foliage.update(a.x,a.z);const s=i.live.stats;this.status.buildings=s.buildings,this.status.idle=!s.fetching&&i.live.pending===0&&!i.detailRing.stats.pending,this.status.note=this.status.idle?"":`streaming city ${s.tiles} tile${s.tiles===1?"":"s"}, ${s.buildings.toLocaleString()} buildings`}get drapePending(){return this.world?this.world.detailRing.stats.pending:!0}get liveStats(){return this.world?this.world.live.stats:null}prepareFrame(e){const t=this.world;if(!t)return;const{camera:i,light:a,wx:s,skyProbe:o,elapsed:r}=e,l=i.position.y,c=performance.now();if(t.urbanDirty&&c-t.urbanBuiltAt>RE*1e3){t.urbanDirty=!1,t.urbanBuiltAt=c;const v=hb({lat0:t.origin.lat,lon0:t.origin.lon,radiusM:Gr,buildings:t.liveBuildings});this.urban.texture.dispose(),this.urban=v}const h=this.urban;t.masksDirty&&c-t.masksUploadedAt>IE*1e3&&(t.masksDirty=!1,t.masksUploadedAt=c,t.vegTexture.needsUpdate=!0,t.roadMask.texture.needsUpdate=!0);const u=(s.windDir+180)*(Math.PI/180);for(const v of t.terrain.uniforms)v.uSH.value=o.sh,v.uCameraPos.value.copy(i.position),v.uSunDir.value.copy(a.sunDir),v.uSunColor.value.copy(a.sunColor),v.uSunIntensity.value=a.sunIntensity,v.uAmbient.value.copy(a.ambient),v.uWetness.value=a.wetness,v.uPuddles.value=a.puddles,v.uRain.value=a.rainfall,v.uEnv.value=o.texture,v.uEnvMaxLod.value=o.maxLod,v.uSnow.value=a.snow,v.uNight.value=a.night,v.uNightGlow.value.copy(a.nightGlow),v.uMoonDir.value.copy(a.moonDir),v.uMoonLight.value.copy(a.moonLight),v.uUrban.value=h.texture,v.uUrbanExtent.value=h.extent,v.uMieG.value=a.mieG,v.uTurbidity.value=a.turbidity,v.uCamAltitude.value=l,v.uExposure.value=a.exposure,v.uTime.value=r,v.uWind.value.set(Math.sin(u)*s.windSpeed,-Math.cos(u)*s.windSpeed);const f=H1(e.solarHour);for(const v of this.buildingUniforms)v.uCameraPos.value.copy(i.position),v.uSH.value=o.sh,v.uEnv.value=o.texture,v.uEnvMaxLod.value=o.maxLod,v.uSunDir.value.copy(a.sunDir),v.uSunColor.value.copy(a.sunColor),v.uSunIntensity.value=a.sunIntensity,v.uNight.value=a.night,v.uNightGlow.value.copy(a.nightGlow),v.uMoonDir.value.copy(a.moonDir),v.uMoonLight.value.copy(a.moonLight),v.uWetness.value=a.wetness,v.uSnow.value=a.snow,v.uMieG.value=a.mieG,v.uTurbidity.value=a.turbidity,v.uCamAltitude.value=l,v.uExposure.value=a.exposure,v.uHourFactor.value.set(f.residential,f.office,f.other),v.uUrban.value=h.texture,v.uUrbanExtent.value=h.extent;for(const v of this.roadUniforms)v.uCameraPos.value.copy(i.position),v.uSH.value=o.sh,v.uEnv.value=o.texture,v.uEnvMaxLod.value=o.maxLod,v.uSunDir.value.copy(a.sunDir),v.uSunColor.value.copy(a.sunColor),v.uSunIntensity.value=a.sunIntensity,v.uWetness.value=a.wetness,v.uPuddles.value=a.puddles,v.uRain.value=a.rainfall,v.uTime.value=r,v.uUrban.value=h.texture,v.uUrbanExtent.value=h.extent,v.uSnow.value=a.snow,v.uNight.value=a.night,v.uNightGlow.value.copy(a.nightGlow),v.uMoonDir.value.copy(a.moonDir),v.uMoonLight.value.copy(a.moonLight),v.uMieG.value=a.mieG,v.uTurbidity.value=a.turbidity,v.uCamAltitude.value=l;const p=new me().copy(a.ambient).add(a.nightGlow).addScalar(a.sunIntensity*.105*.25).multiplyScalar(.08);t.lamps.update(i.position.x,i.position.z,a.night,p);const w=Math.max(0,s.gust-s.windSpeed),g=.5+.3*Math.sin(r*.43)+.2*Math.sin(r*1.13+1.7);t.foliage.setWind(s.windSpeed+w*Math.max(0,g),s.windDir);const m=t.foliage.uniforms;m.uTime.value=r,m.uCameraPos.value.copy(i.position),m.uSH.value=o.sh,m.uSunDir.value.copy(a.sunDir),m.uSunColor.value.copy(a.sunColor),m.uSunIntensity.value=a.sunIntensity,m.uNight.value=a.night,m.uSnow.value=a.snow;const d=tb(t.origin.lat,e.timeMs);m.uLeafOn.value=d.on,m.uAutumn.value=d.autumn,m.uNightGlow.value.copy(a.nightGlow),m.uMoonDir.value.copy(a.moonDir),m.uMoonLight.value.copy(a.moonLight),m.uMieG.value=a.mieG,m.uTurbidity.value=a.turbidity,m.uCamAltitude.value=l}setAo(e,t){const i=this.world;if(i){for(const a of i.terrain.uniforms)e.apply(a,t);for(const a of this.buildingUniforms)e.apply(a,t);for(const a of this.roadUniforms)e.apply(a,t);e.apply(i.foliage.uniforms,t)}}settledNear(e,t){const i=this.world;return!!i&&this.status.ready&&i.live.settledNear(e,t,LE)}streetSpawn(e,t,i){const a=this.world;if(!a)return null;const s=u=>{let f=null;for(const p of u){const w=p.nearestSegment(e,t,i);w&&(!f||w.distanceM<f.distanceM)&&(f=w)}return f},o=s(a.spawnMajor),r=s(a.spawnLocal),l=s(a.spawnMinor),c=DE(o,r,l);if(!c)return null;const h=Math.atan2(c.dirX,-c.dirZ)*180/Math.PI;return{x:c.x,z:c.z,headingDeg:(h+360)%360}}lightsNear(e,t,i,a,s){return this.world?this.world.lamps.nearest(e,t,i,a,s):(s.length=0,s)}blocked(e,t){return this.world?this.world.footprints.occupied(e,t):!1}dispose(){const e=this.world;e&&(this.world=null,this.status.ready=!1,this.status.buildings=0,this.status.idle=!1,e.live.dispose(),e.detailRing.dispose(),this.scene.remove(e.terrain.group),e.terrain.dispose(),this.scene.remove(e.foliage.group),e.foliage.dispose(),this.shadowCasters.length=0,this.buildingUniforms=[],this.roadUniforms=[],this.urban.texture.dispose(),this.urban=Yh(),e.roadMask.dispose(),this.scene.remove(e.lamps.group),e.lamps.dispose(),e.vegTexture.dispose())}}const ku=6e4,sn=36e5,Xr=-.833,Nu=6,Uu=-4,kE=22,NE=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function Ou(n,e){const t=new Date(n+e*1e3);return{weekday:NE[t.getUTCDay()],hour:t.getUTCHours()+t.getUTCMinutes()/60}}function $r(n,e,t,i,a){const s=r=>Di(new Date(r),n,e).sun.altitude-a;let o=s(t);for(let r=0;r<20&&i-t>5e3;r++){const l=(t+i)/2,c=s(l);Math.sign(c)===Math.sign(o)?(t=l,o=c):i=l}return(t+i)/2}function UE(n,e,t,i,a){const s=t+i*sn,o=t-24*sn,r=s+24*sn,l=10*ku,c=[],h=[],u=[],f=[];let p=o,w=Di(new Date(p),n,e).sun.altitude,g=!1;for(let v=o+l;v<=r;v+=l){const x=Di(new Date(v),n,e).sun.altitude,y=x>w,_=b=>(w-b)*(x-b)<0;if(_(Xr)){const b=$r(n,e,p,v,Xr);y?(h.push(b),c.push({t:b,kind:"Sunrise"})):u.push(b)}!y&&_(Nu)&&c.push({t:$r(n,e,p,v,Nu),kind:"Golden hour"}),!y&&_(Uu)&&c.push({t:$r(n,e,p,v,Uu),kind:"Dusk"}),g&&!y&&w>Xr&&f.push(p),g=y,w=x,p=v}for(const v of f){c.push({t:v,kind:"Noon"});const x=h.filter(_=>_<v&&v-_<20*sn).pop(),y=u.find(_=>_>v&&_-v<20*sn);x!==void 0&&c.push({t:x+.4*(v-x),kind:"Mid-morning"}),y!==void 0&&c.push({t:v+.65*(y-v),kind:"Late afternoon"})}const m=a*1e3;for(let v=Math.floor((o+m)/sn)*sn-m;v<=r;v+=sn)Math.abs(Ou(v,a).hour-kE)<1e-6&&c.push({t:v,kind:"Night"});let d=c.filter(v=>v.t>=t&&v.t<s);if(d.length===0){const v=Math.ceil(t/(3*sn))*3*sn;for(let x=v;x<s;x+=3*sn)d.push({t:x,kind:""})}return d.sort((v,x)=>v.t-x.t),d=d.filter((v,x)=>x===0||v.t-d[x-1].t>15*ku),d.map(v=>{const x=Ou(v.t,a),y=String(Math.floor(x.hour)).padStart(2,"0"),_=v.kind||`${y}:00`;return{t:v.t,kind:_,label:`${_}, ${x.weekday}`}})}function kf(n){const e=Math.max(0,Math.min(1,n));return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}const Nf=[{label:"15 min/s",secPerSec:900},{label:"1 h/s",secPerSec:3600},{label:"3 h/s",secPerSec:3*3600}],zu=4,OE=5,zE=36;class BE{mode="paused";live=!0;t;rateIndex=1;min=-1/0;max=1/0;moments=[];tourIndex=0;phase="move";phaseS=0;moveFrom=0;momentSource=null;constructor(e){this.t=e}get label(){return this.mode!=="tour"||this.moments.length===0?null:this.moments[this.tourIndex].label}setBounds(e,t){this.min=e,this.max=t,this.t=this.clamp(this.t)}startTour(e,t){this.momentSource=e,this.moments=e(t).filter(i=>i.t>=this.min&&i.t<=this.max),this.mode=this.moments.length>0?"tour":"paused",this.live=!1,this.tourIndex=0,this.phase="move",this.phaseS=0,this.moveFrom=this.t}play(){this.mode="continuous",this.live=!1}pause(){this.mode="paused",this.live=!1}scrubTo(e){this.mode="paused",this.live=!1,this.t=this.clamp(e)}stepHours(e){this.scrubTo(this.t+e*sn)}goLive(e){this.mode="paused",this.live=!0,this.t=this.clamp(e)}step(e,t){if(this.live){this.t=this.clamp(t);return}if(this.mode==="continuous"){this.t+=e*Nf[this.rateIndex].secPerSec*1e3,this.t>this.max&&(this.t=this.clamp(t));return}if(this.mode!=="tour"||this.moments.length===0)return;this.phaseS+=e;const i=this.moments[this.tourIndex].t;if(this.phase==="move"){const a=kf(this.phaseS/zu);this.t=this.moveFrom+(i-this.moveFrom)*a,this.phaseS>=zu&&(this.t=i,this.phase="dwell",this.phaseS=0);return}if(this.phaseS>=OE){if(this.tourIndex++,this.tourIndex>=this.moments.length&&(this.tourIndex=0,this.momentSource)){const a=this.momentSource(t).filter(s=>s.t>=this.min&&s.t<=this.max);a.length>0&&(this.moments=a)}this.phase="move",this.phaseS=0,this.moveFrom=this.t}}clamp(e){return Math.max(this.min,Math.min(this.max,e))}}const xi=Math.PI/180,Bu=new k(0,1,0),Hu=new Ye,HE=new An,GE=new xn,VE=new k(1,0,0),WE=1.7,XE=1.8,$E=5,qE=2,YE=8,jE=2.5,KE=250,ZE=3e3,JE=350,QE=7e3,eT=9,tT=150,Gu=40,nT=1500,js=55,iT=70,aT=1,sT=2,oT=-40,rT=70,lT=12,Vu=320,cT=150,hT=1e3;class uT{mode="skyline";frozen=!1;target=new k;hdg=20;el=17;dist=2600;ceiling=1/0;orbitY=NaN;sx=0;sz=0;yaw=0;pitch=2;spawnProvisional=!1;hasStreet=!1;tween=null;holdS=null;holdPoseNow={pos:new k,quat:new xn,fov:js};holdEased=!1;idleS=0;keys=new Set;pointers=new Map;pinchDist=0;camera;ground;tmpPose={pos:new k,quat:new xn,fov:js};constructor(e,t,i){this.camera=t,this.ground=i,this.armPointer(e),addEventListener("keydown",a=>{Uf(a)||this.keys.add(a.code)}),addEventListener("keyup",a=>this.keys.delete(a.code)),addEventListener("blur",()=>this.keys.clear())}resetPlace(){this.target.set(0,0,0),this.hasStreet=!1,this.tween=null,this.holdS=null,this.idleS=0,this.orbitY=NaN}setMode(e,t=!1){if(e===this.mode&&!t)return;const i=e==="street";i&&!this.hasStreet&&this.spawnStreet(),this.mode=e,this.holdS=i&&!this.ground.settledNear(this.sx,this.sz)?0:null,this.holdEased=!1,this.tween=t?null:{from:{pos:this.camera.position.clone(),quat:this.camera.quaternion.clone(),fov:this.camera.fov},t:0,down:i},this.idleS=0}setCeiling(e){this.ceiling=e}focus(){return this.mode==="street"?{x:this.sx,z:this.sz,mode:"street"}:{x:this.target.x,z:this.target.z,mode:"skyline"}}get tweening(){return this.tween!==null}get holding(){return this.holdS!==null}update(e){this.idleS+=e;const t=this.ground.heightAt(this.target.x,this.target.z);this.target.y=t,this.mode==="street"?(this.spawnProvisional&&this.spawnStreet(),this.walk(e)):!this.frozen&&this.idleS>YE&&!this.tween&&(this.hdg=(this.hdg+jE*e)%360),this.holdS!==null&&(this.ground.status.ready&&(this.holdS+=e),this.mode!=="street"?this.holdS=null:(this.ground.settledNear(this.sx,this.sz)||this.holdS>lT)&&(this.holdS=null,this.tween=this.frozen?null:{from:{pos:this.camera.position.clone(),quat:this.camera.quaternion.clone(),fov:this.camera.fov},t:0,down:!0}));const i=this.mode==="street"?this.holdS!==null?this.holdPose(e):this.streetPose(this.tmpPose):this.orbitPose(this.tmpPose,e),a=this.camera;if(this.tween){this.tween.t+=e/qE;const o=kf(this.tween.t),r=this.tween.down?o*o:1-(1-o)*(1-o),l=this.tween.from;a.position.set(l.pos.x+(i.pos.x-l.pos.x)*o,l.pos.y+(i.pos.y-l.pos.y)*r,l.pos.z+(i.pos.z-l.pos.z)*o),a.quaternion.copy(l.quat).slerp(i.quat,o),a.fov=l.fov+(i.fov-l.fov)*o,this.tween.t>=1&&(this.tween=null)}else a.position.copy(i.pos),a.quaternion.copy(i.quat),a.fov=i.fov;a.up.set(0,1,0);const s=a.position.y-this.ground.heightAt(a.position.x,a.position.z);a.near=s<30?aT:sT,a.updateProjectionMatrix(),a.updateMatrixWorld()}orbitPose(e,t){const i=this.el*xi,a=this.hdg*xi;let s=Math.cos(i)*this.dist,o=this.target.x-Math.sin(a)*s,r=this.target.z+Math.cos(a)*s,l=Math.max(this.ground.heightAt(o,r),this.target.y),c=l+KE;const h=Math.min(l+ZE,this.ceiling);h<c&&(s=Math.min(s,nT),o=this.target.x-Math.sin(a)*s,r=this.target.z+Math.cos(a)*s,l=Math.max(this.ground.heightAt(o,r),this.target.y),c=l+tT);const u=this.target.y+Math.sin(i)*this.dist,f=Math.max(Math.min(u,h),Math.min(c,h),l+Gu);this.orbitY=Number.isNaN(this.orbitY)?f:this.orbitY+(f-this.orbitY)*(1-Math.exp(-2.5*t));const p=Math.max(Math.min(this.orbitY,h),l+Gu);return e.pos.set(o,p,r),e.quat.setFromRotationMatrix(Hu.lookAt(e.pos,this.target,Bu)),e.quat.multiply(GE.setFromAxisAngle(VE,eT*xi)),e.fov=js,e}holdPose(e){const t=this.yaw*xi,i=Math.sin(t),a=-Math.cos(t),s=this.ground.heightAt(this.sx,this.sz),o=this.sx-i*Vu,r=this.sz-a*Vu,l=Math.max(s,this.ground.heightAt(o,r))+cT,c=this.tmpPose;c.pos.set(o,l,r),c.quat.setFromRotationMatrix(Hu.lookAt(c.pos,new k(this.sx,s+15,this.sz),Bu)),c.fov=js;const h=this.holdPoseNow,u=this.holdEased?1-Math.exp(-3*e):1;return this.holdEased=!0,h.pos.lerp(c.pos,u),h.quat.slerp(c.quat,u),h.fov=c.fov,h}streetPose(e){return e.pos.set(this.sx,this.ground.heightAt(this.sx,this.sz)+WE,this.sz),e.quat.setFromEuler(HE.set(this.pitch*xi,-this.yaw*xi,0,"YXZ")),e.fov=iT,e}spawnStreet(){const e=this.ground.streetSpawn(this.target.x,this.target.z,hT);if(e){if(!this.hasStreet||Math.hypot(e.x-this.sx,e.z-this.sz)>1){this.sx=e.x,this.sz=e.z;const i=Math.abs(dT(e.headingDeg,this.hdg))>90;this.yaw=i?(e.headingDeg+180)%360:e.headingDeg,this.pitch=2}this.spawnProvisional=!this.ground.status.idle}else this.hasStreet||(this.sx=this.target.x,this.sz=this.target.z,this.yaw=this.hdg,this.pitch=2,this.spawnProvisional=!0);this.hasStreet=!0}walk(e){if(this.frozen)return;const t=this.keys;let i=0,a=0;if((t.has("KeyW")||t.has("ArrowUp"))&&(i+=1),(t.has("KeyS")||t.has("ArrowDown"))&&(i-=1),t.has("KeyD")&&(a+=1),t.has("KeyA")&&(a-=1),!i&&!a)return;const s=XE*(t.has("ShiftLeft")||t.has("ShiftRight")?$E:1),o=this.yaw*xi,r=Math.hypot(i,a),l=(Math.sin(o)*i+Math.cos(o)*a)/r*s*e,c=(-Math.cos(o)*i+Math.sin(o)*a)/r*s*e,h=this.ground,u=h.blocked(this.sx,this.sz);(u||!h.blocked(this.sx+l,this.sz))&&(this.sx+=l),(u||!h.blocked(this.sx,this.sz+c))&&(this.sz+=c),this.spawnProvisional=!1,this.idleS=0}armPointer(e){e.style.touchAction="none",e.addEventListener("pointerdown",i=>{e.setPointerCapture(i.pointerId),this.pointers.set(i.pointerId,{x:i.clientX,y:i.clientY}),this.pinchDist=this.currentPinch(),this.idleS=0});const t=i=>{this.pointers.delete(i.pointerId),this.pinchDist=this.currentPinch()};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t),e.addEventListener("pointermove",i=>{const a=this.pointers.get(i.pointerId);if(!a||this.frozen)return;const s=i.clientX-a.x,o=i.clientY-a.y;if(a.x=i.clientX,a.y=i.clientY,this.idleS=0,this.pointers.size>=2){const r=this.currentPinch();this.pinchDist>0&&r>0&&this.mode==="skyline"&&this.zoom(this.pinchDist/r),this.pinchDist=r;return}this.tween||(this.mode==="skyline"?(this.hdg=(this.hdg-s*.3+360)%360,this.el=qr(this.el+o*.2,8,80)):(this.yaw=(this.yaw-s*.15+360)%360,this.pitch=qr(this.pitch+o*.15,oT,rT)))}),e.addEventListener("wheel",i=>{i.preventDefault(),this.idleS=0,this.mode==="skyline"&&!this.frozen&&this.zoom(Math.exp(i.deltaY*.0012))},{passive:!1})}zoom(e){this.dist=qr(this.dist*e,JE,QE)}currentPinch(){if(this.pointers.size<2)return 0;const[e,t]=[...this.pointers.values()];return Math.hypot(e.x-t.x,e.y-t.y)}}function qr(n,e,t){return Math.max(e,Math.min(t,n))}function dT(n,e){return(n-e+540)%360-180}function Uf(n){const e=n.target;return!!e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)}class Wu{constructor(e){this.timezone=e;const t={timeZone:e,weekday:"short",hour:"numeric",minute:"2-digit",hour12:!0};try{this.fmt=new Intl.DateTimeFormat("en-US",t)}catch{this.fmt=new Intl.DateTimeFormat("en-US",{...t,timeZone:"UTC"})}try{this.zoneFmt=new Intl.DateTimeFormat("en-US",{timeZone:e,timeZoneName:"short"})}catch{this.zoneFmt=new Intl.DateTimeFormat("en-US",{timeZone:"UTC",timeZoneName:"short"})}}fmt;zoneFmt;dateFmt=null;ymdFmt=null;parts(e){const t=this.fmt.formatToParts(e),i=l=>t.find(c=>c.type===l)?.value??"",a=Number(i("hour")),s=Number(i("minute")),o=/p/i.test(i("dayPeriod")),r=a%12+(o?12:0);return{time:`${a}:${String(s).padStart(2,"0")} ${o?"PM":"AM"}`,day:i("weekday"),hour:r+s/60}}abbrev(e){return this.zoneFmt.formatToParts(e).find(t=>t.type==="timeZoneName")?.value??"UTC"}ymd(e){if(!this.ymdFmt){const a={year:"numeric",month:"numeric",day:"numeric"};try{this.ymdFmt=new Intl.DateTimeFormat("en-US",{...a,timeZone:this.timezone})}catch{this.ymdFmt=new Intl.DateTimeFormat("en-US",{...a,timeZone:"UTC"})}}const t=this.ymdFmt.formatToParts(e),i=a=>Number(t.find(s=>s.type===a)?.value??0);return{y:i("year"),m:i("month"),d:i("day")}}date(e){if(!this.dateFmt){const t={weekday:"short",day:"numeric",month:"short"};try{this.dateFmt=new Intl.DateTimeFormat("en-US",{...t,timeZone:this.timezone})}catch{this.dateFmt=new Intl.DateTimeFormat("en-US",{...t,timeZone:"UTC"})}}return this.dateFmt.format(e)}}function Xu(n,e){const t=n.ymd(e);return Math.round(Date.UTC(t.y,t.m-1,t.d)/864e5)}function fT(n,e,t,i){if(i)return"Now";const a=e-t,s=Math.abs(a);if(s<5*6e4)return"Now";if(s<60*6e4){const r=Math.round(s/6e4);return a>0?`in ${r} min`:`${r} min ago`}const o=Xu(n,new Date(e))-Xu(n,new Date(t));if(s<6*36e5||o===0){const r=Math.round(s/36e5);return a>0?`in ${r} h`:`${r} h ago`}return o===1?"tomorrow":o===-1?"yesterday":o>0?`in ${o} days`:`${-o} days ago`}function pT(n){return n<=1?"clear":n===2?"partly":n===3?"cloud":n===45||n===48?"fog":n>=51&&n<=57?"drizzle":n>=71&&n<=77||n===85||n===86?"snow":n>=95?"storm":n>=58?"rain":"cloud"}const Ga='<path d="M7 18h10a4 4 0 0 0 .4-8A5.5 5.5 0 0 0 6.8 9.3 4.4 4.4 0 0 0 7 18z" fill="currentColor" fill-opacity=".9"/>',mT='<circle cx="12" cy="12" r="4.2" fill="#ffd66b"/><g stroke="#ffd66b" stroke-width="1.8" stroke-linecap="round">'+[0,45,90,135,180,225,270,315].map(n=>{const e=n*Math.PI/180,t=i=>`${(12+Math.cos(e)*i).toFixed(1)} ${(12+Math.sin(e)*i).toFixed(1)}`;return`<path d="M${t(6.8)}L${t(9.2)}"/>`}).join("")+"</g>",gT='<path d="M15.5 4.5a7.5 7.5 0 1 0 4 12.5 6 6 0 0 1-4-12.5z" fill="#dfe6ff"/>';function Of(n,e,t=18){const i=pT(n),a=e?mT:gT;let s;switch(i){case"clear":s=a;break;case"partly":s=`<g transform="translate(-3 -3) scale(.8)">${a}</g><g transform="translate(2 3) scale(.85)">${Ga}</g>`;break;case"cloud":s=Ga;break;case"fog":s='<g stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 9h16M6 13h12M4 17h16"/></g>';break;case"drizzle":case"rain":s=`<g transform="translate(0 -3)">${Ga}</g><g stroke="#7cc4ff" stroke-width="1.8" stroke-linecap="round">`+(i==="rain"?'<path d="M8 18l-1 3M12 18l-1 3M16 18l-1 3"/>':'<path d="M9 18l-.5 1.5M14 18l-.5 1.5"/>')+"</g>";break;case"snow":s=`<g transform="translate(0 -3)">${Ga}</g><g fill="#ffffff"><circle cx="8" cy="19.5" r="1.2"/><circle cx="12" cy="21" r="1.2"/><circle cx="16" cy="19.5" r="1.2"/></g>`;break;case"storm":s=`<g transform="translate(0 -3)">${Ga}</g><path d="M12.5 15l-3 5h2.5l-1 3.5 3.8-5.5h-2.6l1.3-3z" fill="#ffd66b"/>`;break}return`<svg class="glyph" width="${t}" height="${t}" viewBox="0 0 24 24" aria-hidden="true">${s}</svg>`}const zf="skycast.temp",vT=new Set(["US","LR","MM","BS","BZ","KY","PW","FM","MH"]);let oa=null;function $u(){try{const n=new Intl.Locale(navigator.language||"en-US"),e=n.region??n.maximize().region??"";return vT.has(e)?"F":"C"}catch{return"C"}}function fa(){if(oa)return oa;try{const n=localStorage.getItem(zf);oa=n==="C"||n==="F"?n:$u()}catch{oa=$u()}return oa}function wT(n){oa=n;try{localStorage.setItem(zf,n)}catch{}}function Ql(n){return fa()==="F"?`${Math.round(n*1.8+32)}°F`:`${Math.round(n)}°C`}function xT(n){return fa()==="F"?`${Math.round(n*2.23694)} mph`:`${Math.round(n*3.6)} km/h`}function yT(n){return n<.05?"none":fa()==="F"?`${(n/25.4).toFixed(2)} in/h`:`${n.toFixed(1)} mm/h`}function _T(n){return["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"][Math.round((n%360+360)%360/22.5)%16]}const fn=36e5;function bT(n,e,t){const i=Math.max(0,1-Math.abs(t-3)/9),a=12+n*96+i*130,s=18+n*132+i*60,o=34+n*190+i*6,r=.62*e,l=c=>Math.round(c*(1-r)+(150*n+30)*r);return`rgb(${l(a)},${l(s)},${l(o)})`}class MT{root;controls;track;svgHost;cursor;nowMark;tourBtn;playBtn;rateSel;nowBtn;range=null;builtWidth=0;constructor(e,t){this.root=document.createElement("div"),this.root.className="scrubber glass",this.root.innerHTML=`
      <div class="sc-controls">
        <button class="sc-tour" title="Tour key moments (T)">Tour</button>
        <button class="sc-play" title="Play / pause (space)">Play</button>
        <select class="sc-rate" title="Playback rate">${Nf.map((a,s)=>`<option value="${s}">${a.label}</option>`).join("")}</select>
        <button class="sc-now" title="Back to live time">Now</button>
      </div>
      <div class="sc-track"><div class="sc-svg"></div><div class="sc-nowmark"></div><div class="sc-cursor"></div></div>`,e.append(this.root),this.controls=this.root.querySelector(".sc-controls"),this.track=this.root.querySelector(".sc-track"),this.svgHost=this.root.querySelector(".sc-svg"),this.cursor=this.root.querySelector(".sc-cursor"),this.nowMark=this.root.querySelector(".sc-nowmark"),this.tourBtn=this.root.querySelector(".sc-tour"),this.playBtn=this.root.querySelector(".sc-play"),this.rateSel=this.root.querySelector(".sc-rate"),this.nowBtn=this.root.querySelector(".sc-now"),this.tourBtn.onclick=()=>t.onTour(),this.playBtn.onclick=()=>t.onPlayPause(),this.nowBtn.onclick=()=>t.onNow(),this.rateSel.onchange=()=>t.onRate(Number(this.rateSel.value));const i=a=>{if(!this.range)return;const s=this.track.getBoundingClientRect(),o=Math.max(0,Math.min(1,(a-s.left)/Math.max(1,s.width)));t.onScrub(this.range.start+o*(this.range.end-this.range.start))};this.track.addEventListener("pointerdown",a=>{this.track.setPointerCapture(a.pointerId),i(a.clientX),a.preventDefault()}),this.track.addEventListener("pointermove",a=>{this.track.hasPointerCapture(a.pointerId)&&i(a.clientX)}),addEventListener("resize",()=>this.draw())}setRange(e){this.range=e,this.builtWidth=0,this.draw()}update(e,t,i,a,s){const o=this.range;if(!o)return;this.track.clientWidth!==this.builtWidth&&this.draw();const r=o.end-o.start,l=this.track.clientWidth;this.cursor.style.transform=`translateX(${((e-o.start)/r*l).toFixed(1)}px)`,this.nowMark.style.transform=`translateX(${((t-o.start)/r*l).toFixed(1)}px)`,Yr(this.tourBtn,"on",i==="tour"),Yr(this.playBtn,"on",i==="continuous");const c=i==="paused"?"Play":"Pause";this.playBtn.textContent!==c&&(this.playBtn.textContent=c),Yr(this.nowBtn,"on",a),this.rateSel.value!==String(s)&&(this.rateSel.value=String(s))}draw(){const e=this.range,t=this.track.clientWidth;if(!e||t<=0)return;this.builtWidth=t;const i=this.track.clientHeight||64,a=e.end-e.start,s=h=>(h-e.start)/a*t,o=Math.round(a/fn),r=[],l=t/o;for(let h=0;h<o;h++){const u=e.start+(h+.5)*fn,f=Di(new Date(u),e.lat,e.lon),p=e.timeline?e.timeline.at(new Date(u)).totalCover:0;r.push(`<rect x="${(h*l).toFixed(2)}" y="0" width="${(l+.6).toFixed(2)}" height="${i}" fill="${bT(f.daylight,p,f.sun.altitude)}"/>`)}if(r.push(`<rect x="0" y="0" width="${t}" height="${i}" fill="rgba(8,12,22,.28)"/>`),e.timeline){const h=[];for(let d=0;d<=o;d++)h.push(e.timeline.at(new Date(e.start+d*fn)).tempC);const u=Math.min(...h),f=Math.max(...h),p=i*.66,w=i*.36,g=d=>p+(d-u)/Math.max(1,f-u)*(w-p),m=h.map((d,v)=>`${(v/o*t).toFixed(1)},${g(d).toFixed(1)}`).join(" ");r.push(`<polyline points="${m}" fill="none" stroke="#ffb86b" stroke-width="1.5" stroke-opacity=".95"/>`)}const c=[];for(let h=0;h<=o;h++){const u=e.start+h*fn;e.clock.parts(new Date(u)).hour<1&&c.push(u)}for(let h=0;h<c.length;h++){const u=c[h],f=s(u);r.push(`<line x1="${f.toFixed(1)}" x2="${f.toFixed(1)}" y1="0" y2="${i}" stroke="rgba(255,255,255,.55)" stroke-width="1"/>`);const p=c[h+1]??u+24*fn;let w=e.clock.parts(new Date(u+fn)).day;if(e.timeline&&p-u>=12*fn){let g=-1/0,m=1/0;for(let d=u;d<Math.min(p,e.end);d+=fn){const v=e.timeline.at(new Date(d)).tempC;g=Math.max(g,v),m=Math.min(m,v)}Number.isFinite(g)&&(w+=` ${Ql(g)}/${Ql(m).replace(/[CF]$/,"")}`)}s(p)-f>60&&r.push(`<text x="${(f+4).toFixed(1)}" y="${i-5}" class="sc-day">${w}</text>`)}if(e.timeline){const h=l*3>=18?3:l*6>=18?6:12,u=Math.ceil(e.start/(h*fn))*h*fn;for(let f=u;f<e.end;f+=h*fn){const p=e.timeline.at(new Date(f)),w=Di(new Date(f),e.lat,e.lon).sun.altitude,g=s(f)-8;r.push(`<g transform="translate(${g.toFixed(1)} 3)">${Of(p.wmoCode,w>-.8,16)}</g>`)}}this.svgHost.innerHTML=`<svg width="${t}" height="${i}" viewBox="0 0 ${t} ${i}">${r.join("")}</svg>`}}function Yr(n,e,t){n.classList.contains(e)!==t&&n.classList.toggle(e,t)}const ST={observation:"Observed",forecast:"Forecast",simulated:"Simulated"};class ET{root;el={};last="";constructor(e,t){this.root=document.createElement("div"),this.root.className="hud glass",this.root.innerHTML=`
      <div class="hud-place"></div>
      <div class="hud-clock"><span class="hud-clock-t"></span><span class="hud-clock-rel"></span><span class="hud-clock-sep">·</span></div>
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
        <span class="hud-sat-k">Satellite</span><b class="hud-sat"></b>
        <span class="hud-air-k">Air</span><b class="hud-air"></b>
        <span class="hud-limits-k">City limits</span><b class="hud-limits-b"><button class="hud-limits" title="Show or hide the city limits"></button></b>
      </div>
      <div class="hud-foot"><span class="hud-badge"></span><span class="hud-status"></span></div>`,e.append(this.root);for(const i of["place","clock-t","clock-rel","when","glyph","temp","unit","cond","wind","precip","cloud","sat","sat-k","air","air-k","limits","limits-k","limits-b","badge","status"])this.el[i]=this.root.querySelector(`.hud-${i}`);this.el.unit.onclick=i=>{i.stopPropagation(),wT(fa()==="C"?"F":"C"),this.last="",t()},this.el["limits-b"].hidden=this.el["limits-k"].hidden=!0,this.root.onclick=()=>this.root.classList.toggle("expanded")}setLimits(e,t,i){const a=this.el.limits;this.el["limits-b"].hidden=this.el["limits-k"].hidden=!e,a.textContent=e?`${e} · ${t?"shown":"hidden"}`:"",a.classList.toggle("on",t),a.onclick=s=>{s.stopPropagation(),i()}}update(e,t,i,a,s,o,r="",l="",c=Date.now(),h=!1){const u=i?i.parts(t):null,f=u?`${u.day} ${u.time}`:"",p=i?fT(i,t.getTime(),c,h):"",w=i&&u?`${i.date(t)} · ${i.abbrev(t)}`:"",g=[e,f,p,w,a?.tempC.toFixed(1),a?.wmoCode,a?.source,a?.windSpeed.toFixed(1),a?.precip.toFixed(2),a?.totalCover.toFixed(2),s,o,fa(),r,l].join("|");if(g!==this.last){this.last=g,this.el.place.textContent=e,this.el["clock-t"].textContent=f,this.el["clock-rel"].textContent=p,this.el["clock-rel"].classList.toggle("live",p==="Now"),this.el.when.textContent=w,this.el.unit.textContent=`°${fa()==="C"?"F":"C"}`,this.el.status.textContent=o;for(const[m,d]of[["sat",r],["air",l]])this.el[m].textContent=d,this.el[m].hidden=!d,this.el[`${m}-k`].hidden=!d;if(!a){this.el.temp.textContent="--",this.el.cond.textContent="loading weather";return}this.el.glyph.innerHTML=Of(a.wmoCode,s,30),this.el.temp.textContent=Ql(a.tempC),this.el.cond.textContent=a.summary,this.el.wind.textContent=`${xT(a.windSpeed)} ${_T(a.windDir)}`,this.el.precip.textContent=yT(a.precip),this.el.cloud.textContent=`${Math.round(a.totalCover*100)}%`,this.el.badge.textContent=ST[a.source],this.el.badge.dataset.source=a.source}}}class TT{el;constructor(e){this.el=document.createElement("div"),this.el.className="pill glass",e.append(this.el)}set(e){const t=!!e;this.el.classList.toggle("show",t),t&&this.el.textContent!==e&&(this.el.textContent=e)}}class AT{buttons;constructor(e,t){const i=document.createElement("div");i.className="modes",i.innerHTML='<button data-m="skyline" title="Skyline view (1)">Skyline</button><button data-m="street" title="Street view (2)">Street</button>',e.append(i);const a=[...i.querySelectorAll("button")];this.buttons={skyline:a[0],street:a[1]};for(const s of a)s.onclick=()=>t(s.dataset.m)}set(e){this.buttons.skyline.classList.toggle("on",e==="skyline"),this.buttons.street.classList.toggle("on",e==="street")}}class RT{el;constructor(e){this.el=document.createElement("div"),this.el.className="loading glass",this.el.innerHTML='<div class="ld-label">starting</div><div class="ld-bar"><i></i></div>',e.append(this.el)}set(e,t){this.el.classList.add("show"),this.el.querySelector(".ld-label").textContent=t,this.el.querySelector(".ld-bar i").style.width=`${Math.round(e*100)}%`}done(){this.el.classList.remove("show")}fail(e){this.el.classList.add("show"),this.el.querySelector(".ld-label").textContent=e}}const Bf=[{name:"New York",lat:40.758,lon:-73.9855},{name:"San Francisco",lat:37.7925,lon:-122.4015},{name:"London",lat:51.5079,lon:-.1281},{name:"Paris",lat:48.8566,lon:2.3522},{name:"Tokyo",lat:35.6812,lon:139.7671},{name:"Sydney",lat:-33.8688,lon:151.2093},{name:"Chicago",lat:41.8826,lon:-87.6233},{name:"Seattle",lat:47.6062,lon:-122.3321}];class CT{constructor(e,t){this.onPick=t,this.root=document.createElement("div"),this.root.className="where glass",this.root.innerHTML=`
      <div class="wh-row">
        <input class="wh-input" type="search" placeholder="Search a place" autocomplete="off" spellcheck="false" />
        <button class="wh-geo" title="My location" aria-label="My location">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>
        </button>
      </div>
      <div class="wh-list"></div>
      <div class="wh-note"></div>`,e.append(this.root),this.input=this.root.querySelector(".wh-input"),this.list=this.root.querySelector(".wh-list"),this.note=this.root.querySelector(".wh-note"),this.input.addEventListener("focus",()=>this.showPresets()),this.input.addEventListener("input",()=>{clearTimeout(this.timer);const i=this.input.value.trim();if(i.length<2){this.showPresets();return}this.timer=window.setTimeout(()=>void this.search(i),250)}),this.input.addEventListener("keydown",i=>{i.key==="Escape"&&this.close(),i.key==="Enter"&&this.list.querySelector("button")?.click()}),document.addEventListener("pointerdown",i=>{this.root.contains(i.target)||this.close()}),this.root.querySelector(".wh-geo").addEventListener("click",()=>this.locate())}root;input;list;note;abort=null;timer=0;showPresets(){this.render(Bf.map(e=>({label:e.name,pick:{lat:e.lat,lon:e.lon,name:e.name}})))}async search(e){this.abort?.abort(),this.abort=new AbortController;const t=await G_(e,this.abort.signal);if(this.input.value.trim()===e){if(t.length===0){this.render([]),this.setNote(`nothing found for "${e}"`);return}this.render(t.map(i=>({label:H_(i),pick:{lat:i.lat,lon:i.lon,name:i.name}})))}}render(e){this.setNote(""),this.list.innerHTML="";for(const t of e){const i=document.createElement("button");i.textContent=t.label,i.onclick=()=>{this.close(),this.input.value="",this.input.blur(),this.onPick(t.pick)},this.list.append(i)}this.root.classList.toggle("open",e.length>0)}close(){this.root.classList.remove("open"),this.list.innerHTML=""}setNote(e){this.note.textContent=e}locate(){if(!("geolocation"in navigator)){this.setNote("location is not available in this browser");return}this.setNote("locating..."),navigator.geolocation.getCurrentPosition(e=>{this.setNote(""),this.onPick({lat:e.coords.latitude,lon:e.coords.longitude,name:null})},e=>this.setNote(e.code===e.PERMISSION_DENIED?"location permission denied":"could not get a location"),{enableHighAccuracy:!1,timeout:1e4,maximumAge:6e5})}}const DT={lat:37.7925,lon:-122.4015,mode:"skyline",time:null};function qu(n){const e=decodeURIComponent(n.replace(/^#/,"")).split(",");if(e.length<2)return null;const t=Number(e[0]),i=Number(e[1]);if(!Number.isFinite(t)||!Number.isFinite(i)||Math.abs(t)>90||Math.abs(i)>180)return null;const a=e[2]==="street"?"street":"skyline";let s=null;if(e[3]){const o=e[3].trim(),r=/^\d+$/.test(o)?Number(o)*1e3:Date.parse(o);Number.isFinite(r)&&(s=r)}return{lat:t,lon:i,mode:a,time:s}}function Yu(n){const e=`#${n.lat.toFixed(4)},${n.lon.toFixed(4)},${n.mode}`;return n.time===null?e:`${e},${new Date(n.time).toISOString().slice(0,16)}Z`}const PT={0:"Clear",2:"Partly cloudy",3:"Overcast",45:"Fog",51:"Drizzle",61:"Light rain",63:"Rain",65:"Heavy rain",71:"Light snow",73:"Snow",75:"Heavy snow",80:"Rain showers",95:"Thunderstorm",96:"Thunderstorm with hail",99:"Thunderstorm with hail"};function LT(n){if(!n)return null;const e={...ja(),live:!1,source:"simulated",tempC:15,dewC:8,humidity:63,pressureHpa:1013,windSpeed:4,windDir:270,gust:6,precip:0,precipKind:"none",visibility:2e4,low:{cover:0,base:900,top:2100},mid:{cover:0,base:3800,top:5e3},high:{cover:0,base:8500,top:9400}};let t=null,i=-1,a=-1,s=-1,o=-1,r=0;for(const w of n.split(",")){const g=w.split(":"),m=(v,x)=>{const y=Number(g[v]);return g.length>v&&g[v]!==""&&Number.isFinite(y)?y:x},d=g[0];if(d==="precip")e.precip=Math.max(0,m(1,0));else if(d==="temp")e.tempC=m(1,e.tempC);else if(d==="dew")e.dewC=m(1,e.dewC);else if(d==="wind")e.windSpeed=Math.max(0,m(1,e.windSpeed)),e.windDir=m(2,e.windDir),e.gust=Math.max(e.windSpeed,m(3,e.windSpeed*1.5));else if(d==="aloft")e.windAloft={speed:Math.max(0,m(1,8)),dir:m(2,e.windDir)};else if(d==="snow")i=Math.max(0,m(1,0));else if(d==="depth")r=Math.max(0,m(1,0));else if(d==="code")a=m(1,-1);else if(d==="cape")e.cape=Math.max(0,m(1,0));else if(d==="sun")e.shortwave=Math.max(0,m(1,0));else if(d==="rained")t={mm:Math.max(0,m(1,2)),ago:Math.max(0,m(2,3))};else if(d==="wet")s=Math.max(0,Math.min(1,m(1,0)));else if(d==="puddle")o=Math.max(0,Math.min(1,m(1,0)));else if(d==="aod")e.air={aod:Math.max(0,m(1,0)),dustFrac:Math.max(0,Math.min(1,m(2,0))),pm25:NaN,pm10:NaN,usAqi:NaN};else if(d==="vis")e.visibility=Math.max(100,m(1,e.visibility));else if(d==="low"||d==="mid"||d==="high"){const v=e[d];e[d]={cover:Math.max(0,Math.min(1,m(1,v.cover))),base:m(2,v.base),top:m(3,v.top)}}}e.dewC=Math.min(e.dewC,e.tempC),e.humidity=100*Math.exp(17.62*e.dewC/(243.12+e.dewC)-17.62*e.tempC/(243.12+e.tempC)),n.includes("aloft:")||(e.windAloft={speed:e.windSpeed*1.8,dir:e.windDir});const l=i>=0?bo(e.precip,0,i,e.tempC,e.dewC):bo(e.precip,0,0,e.tempC,e.dewC);e.precip=l.rate,e.precipKind=l.kind,e.snowFrac=l.snowFrac,e.snowfall=i>=0?i:l.rate*l.snowFrac*.7,e.snowDepth=r/100;const c={tempC:e.tempC,dewC:e.dewC,windSpeed:e.windSpeed,liquidMm:e.precip*(1-e.snowFrac),shortwave:e.shortwave},h=[];if(t){const w={...c,liquidMm:t.mm,shortwave:30,dewC:e.tempC-.5};for(let m=0;m<4;m++)h.push(w);let g=Vl(h).at(-1);for(let m=0,d=Math.round(t.ago*6);m<d;m++)g=ef(g,c,1/6);e.wetness=Wl(g),e.puddles=Xl(g)}else{for(let g=0;g<13;g++)h.push(c);const w=Vl(h).at(-1);e.wetness=Wl(w),e.puddles=Xl(w)}s>=0&&(e.wetness=s),o>=0&&(e.puddles=o),e.totalCover=1-(1-e.low.cover)*(1-e.mid.cover)*(1-e.high.cover),e.opacity=_a(e.low.cover,e.mid.cover,e.high.cover);const u=e.precipKind==="snow",f=e.precip>2.5?u?73:63:e.precip>0?u?71:e.precip<.4?51:61:e.visibility<1e3?45:e.totalCover>.85?3:e.totalCover>.3?2:0;e.wmoCode=a>=0?a:f,e.summary=PT[e.wmoCode]??"Simulated",e.storm=tf(e.wmoCode,e.cape,e.precip);const p=cf(e.windAloft.speed,e.windAloft.dir);return e.drift={x:p.x*3600,z:p.z*3600},e}const zn=[16777215,-91.6,8323199,-90.6,9178503,-89.6,10033550,-88.6,10823318,-87.6,11678621,-86.6,12533925,-85.6,13388973,-84.6,14244276,-83.6,15034044,-82.6,15889091,-81.6,16744395,-80.6,15132390,-79.6,13421772,-78.6,11645361,-77.6,10197915,-76.6,8487297,-75.6,6710886,-74.6,5000268,-73.6,3552822,-72.6,1776411,-71.6,328965,-70.6,1703936,-69.6,3342336,-68.6,5046272,-67.6,6684672,-66.6,8388608,-65.6,10027008,-64.6,11730944,-63.6,13369344,-62.6,15073280,-61.6,16711680,-60.6,16718336,-59.6,16724736,-58.6,16731392,-57.6,16737792,-56.6,16744448,-55.6,16750848,-54.6,16757504,-53.6,16763904,-52.6,16770560,-51.6,16776960,-50.6,15138560,-49.6,13434624,-48.6,11796224,-47.6,10092288,-46.6,8453888,-45.6,6749952,-44.6,5111552,-43.6,3407616,-42.6,1769216,-41.6,65280,-40.6,59914,-39.6,54291,-38.6,48925,-37.6,43558,-36.6,38192,-35.6,32826,-34.6,27203,-33.6,21837,-32.6,16470,-31.6,10848,-30.85,5481,-30.35,115,-29.85,125,-29.35,3450,-28.85,6785,-28.35,9864,-27.85,13199,-27.35,16534,-26.85,19613,-26.35,22948,-25.85,26283,-25.35,29618,-24.85,32953,-24.35,36032,-23.85,39367,-23.35,42702,-22.85,45781,-22.35,49116,-21.85,52451,-21.35,55786,-20.85,59121,-20.35,62200,-19.85,65535,-19.35,12961221,-18.85,12895428,-18.35,12763842,-17.85,12698049,-17.35,12632256,-16.85,12566463,-16.35,12434877,-15.85,12369084,-15.35,12303291,-14.85,12171705,-14.35,12105912,-13.85,12040119,-13.35,11908533,-12.85,11842740,-12.35,11776947,-11.85,11711154,-11.35,11579568,-10.85,11513775,-10.35,11447982,-9.85,11316396,-9.35,11250603,-8.85,11184810,-8.35,11119017,-7.85,10987431,-7.35,10921638,-6.85,10855845,-6.35,10724259,-5.85,10658466,-5.35,10592673,-4.85,10461087,-4.35,10395294,-3.85,10329501,-3.35,10263708,-2.85,10132122,-2.35,10066329,-1.85,10000536,-1.35,9868950,-.85,9803157,-.35,9737364,.15,9671571,.65,9539985,1.15,9474192,1.65,9408399,2.15,9276813,2.65,9211020,3.15,9145227,3.65,9079434,4.15,8947848,4.65,8882055,5.15,8816262,5.65,8684676,6.15,8618883,6.65,8553090,7.15,8421504,7.65,8355711,8.15,8289918,8.65,8224125,9.15,8092539,9.65,8026746,10.15,7960953,10.65,7829367,11.15,7763574,11.65,7697781,12.15,7631988,12.65,7500402,13.15,7434609,13.65,7368816,14.15,7237230,14.65,7171437,15.15,7105644,15.65,6974058,16.15,6908265,16.65,6842472,17.15,6776679,17.65,6645093,18.15,6579300,18.65,6513507,19.15,6381921,19.65,6316128,20.15,6250335,20.65,6184542,21.15,6052956,21.65,5987163,22.15,5921370,22.65,5789784,23.15,5723991,23.65,5658198,24.15,5526612,24.65,5460819,25.15,5395026,25.65,5329233,26.15,5197647,26.65,5131854,27.15,5066061,27.65,4934475,28.15,4868682,28.65,4802889,29.15,4737096,29.65,4605510,30.15,4539717,30.65,4473924,31.15,4342338,31.65,4276545,32.15,4210752,32.65,4079166,33.15,4013373,33.65,3947580,34.15,3881787,34.65,3750201,35.15,3684408,35.65,3618615,36.15,3487029,36.65,3421236,37.15,3355443,37.65,3289650,38.15,3158064,38.65,3092271,39.15,3026478,39.65,2894892,40.15,2829099,40.65,2763306,41.15,2697513,41.65,2565927,42.15,2500134,42.65,2434341,43.15,2302755,43.65,2236962,44.15,2171169,44.65,2039583,45.15,1973790,45.65,1907997,46.15,1842204,46.65,1710618,47.15,1644825,47.65,1579032,48.15,1447446,48.65,1381653,49.15,1315860,49.65,1250067,50.15,1118481,50.65,1052688,51.15,986895,51.65,855309,52.15,789516,52.65,723723,53.15,592137,53.65,526344,54.15,460551,54.65,394758,55.15,263172,55.65,197379,56.15,131586,56.65,65793,57.4];async function IT(n){const e=new Blob([n]).stream().pipeThrough(new DecompressionStream("deflate"));return new Uint8Array(await new Response(e).arrayBuffer())}function FT(n,e,t){const i=n+e-t,a=Math.abs(i-n),s=Math.abs(i-e),o=Math.abs(i-t);return a<=s&&a<=o?n:s<=o?e:t}async function Hf(n){const e=n instanceof Uint8Array?n:new Uint8Array(n),t=[137,80,78,71,13,10,26,10];for(let x=0;x<8;x++)if(e[x]!==t[x])throw new Error("not a PNG");const i=new DataView(e.buffer,e.byteOffset,e.byteLength);let a=8,s=0,o=0,r=0,l=null,c=null;const h=[];for(;a+8<=e.length;){const x=i.getUint32(a),y=String.fromCharCode(e[a+4],e[a+5],e[a+6],e[a+7]),_=e.subarray(a+8,a+8+x);if(y==="IHDR"){s=i.getUint32(a+8),o=i.getUint32(a+12);const b=_[8];if(r=_[9],b!==8||_[12]!==0)throw new Error(`unsupported PNG: depth ${b}, interlace ${_[12]}`)}else if(y==="PLTE")l=_;else if(y==="tRNS")c=_;else if(y==="IDAT")h.push(_);else if(y==="IEND")break;a+=12+x}const u={0:1,2:3,3:1,4:2,6:4}[r];if(!u)throw new Error(`unsupported PNG colour type ${r}`);const f=h.reduce((x,y)=>x+y.length,0),p=new Uint8Array(f);let w=0;for(const x of h)p.set(x,w),w+=x.length;const g=await IT(p),m=s*u,d=new Uint8Array(s*o*u);for(let x=0;x<o;x++){const y=g[x*(m+1)],_=x*(m+1)+1,b=x*m;for(let E=0;E<m;E++){const R=g[_+E],M=E>=u?d[b+E-u]:0,S=x>0?d[b-m+E]:0,A=E>=u&&x>0?d[b-m+E-u]:0;let D;switch(y){case 0:D=R;break;case 1:D=R+M;break;case 2:D=R+S;break;case 3:D=R+(M+S>>1);break;case 4:D=R+FT(M,S,A);break;default:throw new Error(`bad PNG filter ${y}`)}d[b+E]=D&255}}const v=new Uint8Array(s*o*4);for(let x=0;x<s*o;x++){const y=x*u,_=x*4;switch(r){case 0:v[_]=v[_+1]=v[_+2]=d[y],v[_+3]=255;break;case 2:v[_]=d[y],v[_+1]=d[y+1],v[_+2]=d[y+2],v[_+3]=255;break;case 3:{const b=d[y];v[_]=l[b*3],v[_+1]=l[b*3+1],v[_+2]=l[b*3+2],v[_+3]=c&&b<c.length?c[b]:255;break}case 4:v[_]=v[_+1]=v[_+2]=d[y],v[_+3]=d[y+1];break;case 6:v[_]=d[y],v[_+1]=d[y+1],v[_+2]=d[y+2],v[_+3]=d[y+3];break}}return{width:s,height:o,rgba:v}}const Gf="https://gibs.earthdata.nasa.gov/wmts/epsg4326/best",po=6e4,ri=36e5,kT=[{lon:-137.2,p:{name:"GOES-West",layer:"GOES-West_ABI_Band13_Clean_Infrared",visLayer:"GOES-West_ABI_Band2_Red_Visible_1km",kind:"ir",matrixSet:"2km",ext:"png",cadenceMs:10*po}},{lon:-75.2,p:{name:"GOES-East",layer:"GOES-East_ABI_Band13_Clean_Infrared",visLayer:"GOES-East_ABI_Band2_Red_Visible_1km",kind:"ir",matrixSet:"2km",ext:"png",cadenceMs:10*po}},{lon:140.7,p:{name:"Himawari",layer:"Himawari_AHI_Band13_Clean_Infrared",visLayer:"Himawari_AHI_Band3_Red_Visible_1km",kind:"ir",matrixSet:"2km",ext:"png",cadenceMs:10*po}}],NT={name:"VIIRS NOAA-20",layer:"VIIRS_NOAA20_CorrectedReflectance_TrueColor",kind:"vis",matrixSet:"250m",ext:"jpeg",cadenceMs:24*ri},UT=68;function OT(n,e){let t=null,i=UT;for(const a of kT){const s=Math.cos(n*Math.PI/180)*Math.cos((e-a.lon)*Math.PI/180),o=Math.acos(Math.max(-1,Math.min(1,s)))*180/Math.PI;o<i&&(i=o,t=a.p)}return t??NT}const Ot=512,ju=9/Ot,zT=5,Ti=40,BT=20;function HT(n,e){const t=new Date(e).toISOString();return n.cadenceMs>=24*ri?t.slice(0,10):`${t.slice(0,16)}:00Z`}function Ku(n,e,t,i){return`${Gf}/${n.layer}/default/${HT(n,e)}/${n.matrixSet}/${zT}/${t}/${i}.${n.ext}`}function ec(n,e){return{gx:(((e+180)%360+360)%360-180+180)/ju,gy:(90-n)/ju}}function GT(n,e,t){const i=new Mo(n,e),a=t/i.mPerLat,s=t/Math.max(1,i.mPerLon),o=ec(Math.min(89.9,n+a),e-s),r=ec(Math.max(-89.9,n-a),e+s),l=[],c=Math.floor(o.gy/Ot),h=Math.floor(r.gy/Ot),u=Math.floor(o.gx/Ot),f=Math.floor(r.gx/Ot)+(r.gx<o.gx?Ti:0);for(let p=Math.max(0,c);p<=Math.min(BT-1,h);p++)for(let w=u;w<=f;w++)l.push({row:p,col:(w%Ti+Ti)%Ti});return l}const Vf=new Map;for(let n=0;n<zn.length;n+=2)Vf.set(zn[n],zn[n+1]);const Zu=new Map;function VT(n){const e=Vf.get(n);if(e!==void 0)return e;const t=Zu.get(n);if(t!==void 0)return t;const i=n>>16,a=n>>8&255,s=n&255;let o=1/0,r=NaN;for(let l=0;l+3<zn.length;l+=2){const c=zn[l],h=zn[l+2],u=c>>16,f=c>>8&255,p=c&255,w=(h>>16)-u,g=(h>>8&255)-f,m=(h&255)-p,d=w*w+g*g+m*m,v=d>0?Math.max(0,Math.min(1,((i-u)*w+(a-f)*g+(s-p)*m)/d)):0,x=u+v*w-i,y=f+v*g-a,_=p+v*m-s,b=x*x+y*y+_*_+.02*d;b<o&&(o=b,r=zn[l+1]+v*(zn[l+3]-zn[l+1]))}return Zu.set(n,r),r}function WT(n,e){const t=new Float32Array(e);for(let i=0;i<e;i++){if(n[i*4+3]<128){t[i]=NaN;continue}t[i]=VT(n[i*4]<<16|n[i*4+1]<<8|n[i*4+2])}return t}const Ao=[6,16],Wf=6.5;function $n(n,e,t){const i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)}const Xf=20,Ju=12;function Qu(n,e,t,i){const a=i>0?-1/0:1/0,s=(l,c)=>i>0?l>c:l<c,o=new Float32Array(e*e),r=new Float32Array(e*e);for(let l=0;l<e;l++)for(let c=0;c<e;c++){let h=a;for(let u=Math.max(0,c-t);u<=Math.min(e-1,c+t);u++){const f=n[l*e+u];s(f,h)&&(h=f)}o[l*e+c]=h}for(let l=0;l<e;l++)for(let c=0;c<e;c++){let h=a;for(let u=Math.max(0,c-t);u<=Math.min(e-1,c+t);u++){const f=o[u*e+l];s(f,h)&&(h=f)}r[c*e+l]=h}return r}function $f(n,e,t,i,a){const s=Qu(n,e,t,i);if(!a)return s;const o=s.slice();for(const r of[0,1]){const l=new Float32Array(e*e);for(let h=0;h<e*e;h++)l[h]=a[h]===r?n[h]:NaN;const c=Qu(l,e,t,i);for(let h=0;h<e*e;h++)a[h]===r&&Number.isFinite(c[h])&&(o[h]=c[h])}return o}function XT(n,e,t,i=null){const a=[];for(let r=0;r<n.length;r+=3)Number.isFinite(n[r])&&a.push(n[r]);a.sort((r,l)=>r-l);let s=a.length?a[Math.floor(a.length*.9)]-Ju:(t??15)-Ju;t!==null&&(s=Math.max(t-12,Math.min(t+12,s)));const o=$f(n,e,Xf,1,i);for(let r=0;r<e*e;r++)o[r]=Math.max(s,o[r]);return o}const $T=58,ed=[30,80];function qT(n,e,t){return $f(n,e,Xf,-1,t)}function YT(n,e){const t=e-n;return{cloud:$n(Ao[0],Ao[1],t),topM:Math.max(0,t)/Wf*1e3}}function jT(n,e,t){const i=Math.max(n,e,t),a=Math.min(n,e,t),s=i>0?(i-a)/i:0;return $n(.32,.62,a/255)*(1-$n(.18,.4,s))}const KT=3*ri;function jr(n,e,t){const i=n<e?e-n:n>t?n-t:0;return 1-$n(0,KT,i)}const Kr=30*po;function ZT(n,e,t){if(t.cadenceMs>=24*ri)return[{ms:e,w:1}];if(n>=e)return[{ms:e,w:1}];const i=Math.floor(n/Kr)*Kr,a=Math.min(e,i+Kr);if(a<=i)return[{ms:i,w:1}];const s=(n-i)/(a-i);return[{ms:i,w:1-s},{ms:a,w:s}]}function td(n,e){const t=new Date(n);return Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate())+(13.5-e/15)*ri}const Go=256e3,ls=256;function nd(n,e,t,i=Go,a=ls){const s=new Mo(e,t),o=new Float32Array(a*a),r=new Map;for(const c of n)r.set(`${c.row}/${c.col}`,c);const l=(c,h)=>{const u=(Math.floor(c/Ot)%Ti+Ti)%Ti,f=Math.floor(h/Ot),p=r.get(`${f}/${u}`);if(!p)return NaN;const w=c-Math.floor(c/Ot)*Ot,g=h-f*Ot;return p.value[g*Ot+w]};for(let c=0;c<a;c++)for(let h=0;h<a;h++){const u=s.toLatLon((h+.5)/a*2*i-i,(c+.5)/a*2*i-i),{gx:f,gy:p}=ec(u.lat,u.lon),w=f-.5,g=p-.5,m=Math.floor(w),d=Math.floor(g);let v=0,x=0;for(let y=0;y<2;y++)for(let _=0;_<2;_++){const b=l(m+_,d+y);if(!Number.isFinite(b))continue;const E=(_?w-m:1-(w-m))*(y?g-d:1-(g-d));v+=b*E,x+=E}o[c*a+h]=x>1e-4?v/x:NaN}return o}function JT(n,e,t,i,a=null){const s=new Uint8Array(t*t*4),o=new Float32Array(t*t),r=new Float32Array(t*t);let l=null,c=null;if(a){l=new Uint8Array(t*t);for(let u=0;u<t*t;u++)l[u]=a[u]<$T?1:0;c=qT(a,t,l)}const h=n.kind==="ir"?XT(e,t,i,l):null;for(let u=0;u<t*t;u++){const f=e[u];if(!Number.isFinite(f)){o[u]=r[u]=NaN;continue}if(h){const p=YT(f,h[u]);a&&c&&Number.isFinite(a[u])&&(p.cloud=Math.max(p.cloud,$n(ed[0],ed[1],a[u]-c[u]))),o[u]=p.cloud,r[u]=p.topM,s[u*4+1]=Math.round(Math.min(1,p.topM/12e3)*255),s[u*4+3]=255}else o[u]=f,r[u]=NaN;s[u*4]=Math.round(o[u]*255),s[u*4+2]=255}return{texels:s,cloud:o,topM:r}}async function QT(n,e,t,i){const a=Ot*Ot;if(n.kind==="ir"){const h=await Hf(e);return{row:t,col:i,value:WT(h.rgba,a)}}const s=await createImageBitmap(new Blob([e])),r=new OffscreenCanvas(s.width,s.height).getContext("2d");r.drawImage(s,0,0);const l=r.getImageData(0,0,s.width,s.height).data;s.close();const c=new Float32Array(a);for(let h=0;h<a;h++){const u=l[h*4],f=l[h*4+1],p=l[h*4+2];c[h]=u+f+p<10?NaN:jT(u,f,p)}return{row:t,col:i,value:c}}async function e2(n,e,t,i,a){const s=GT(e,t,Go),o=Promise.all(s.map(async({row:p,col:w})=>QT(n,await as(Ku(n,i,p,w),ya),p,w))),r=n.visLayer&&Di(new Date(i),e,t).sun.altitude>8?t2(n):null,l=r?Promise.all(s.map(async({row:p,col:w})=>n2(await as(Ku(r,i,p,w),ya),p,w))).catch(()=>null):Promise.resolve(null),[c,h]=await Promise.all([o,l]),u=nd(c,e,t),f=h?nd(h,e,t):null;return{provider:n,ms:i,vis:!!f,texels:JT(n,u,ls,a,f).texels}}function t2(n){return{...n,layer:n.visLayer,matrixSet:"1km",ext:"png"}}async function n2(n,e,t){const i=await Hf(n),a=Ot*Ot,s=new Float32Array(a);for(let o=0;o<a;o++)s[o]=i.rgba[o*4+3]<128?NaN:i.rgba[o*4];return{row:e,col:t,value:s}}function Zr(n,e,t,i=!1){if(n.kind==="vis"||i)return 1;const a=Wf*Math.max(0,e-t)/1e3;return $n(Ao[0]-2,Ao[0]+4,a)}function i2(n,e){const t=n.match(/<Domain>([^<]*)<\/Domain>/);if(!t)return null;let i=null;for(const a of t[1].split(",")){const s=a.trim().split("/"),o=Date.parse(s.length>=2?s[1]:s[0]);Number.isFinite(o)&&o<=e&&(i===null||o>i)&&(i=o)}return i}function id(n){return`${new Date(n).toISOString().slice(0,19)}Z`}async function a2(n,e){const t=e-(n.cadenceMs>=24*ri?96*ri:6*ri),i=`${Gf}/wmts.cgi?SERVICE=WMTS&REQUEST=DescribeDomains&VERSION=1.0.0&LAYER=${n.layer}&TILEMATRIXSET=${n.matrixSet}&TIME=${id(t)}/${id(e)}`;try{const a=await fetch(i,{mode:"cors",credentials:"omit"});return a.ok?i2(await a.text(),e):null}catch{return null}}const qf=7;function s2(n,e,t,i=qf,a=Go,s=ls){const o=Math.floor((e+a)/(2*a)*s),r=Math.floor((t+a)/(2*a)*s),l=i>>1;let c=0,h=0,u=0,f=0;for(let w=r-l;w<=r+l;w++)for(let g=o-l;g<=o+l;g++){if(g<0||w<0||g>=s||w>=s)continue;const m=(w*s+g)*4;if(!(n[m+2]<128)&&(f++,c+=n[m]/255,n[m+3]>=128)){const d=n[m]/255;u+=d,h+=d*(n[m+1]/255)*12e3}}if(!f)return null;let p=0;for(let w=r-l;w<=r+l;w++)for(let g=o-l;g<=o+l;g++)g>=0&&w>=0&&g<s&&w<s&&n[(w*s+g)*4+2]>=128&&n[(w*s+g)*4+3]>=128&&p++;return{cloud:c/f,topM:u>1e-6?h/u:0,topKnown:p/f}}function o2(n,e,t,i,a,s){const o=i+t.topM,r=(c,h,u,f)=>{if(c<=.06)return c;const p=t.topKnown*t.cloud*$n(u+500,u+2e3,o),w=t.topKnown*(1-$n(h-800,h,o)),g=a*f*(1-p);return c+(t.cloud*(1-w)-c)*g};let l=n.high;if(l>.01){const c=$n(5e3,7e3,o),h=t.cloud+(t.cloud*c-t.cloud)*t.topKnown,u=a*s[2]*(1+(c*t.cloud+(1-t.cloud)-1)*t.topKnown);l=l+(h-l)*u}return{low:r(n.low,e.low[0],e.low[1],s[0]),mid:r(n.mid,e.mid[0],e.mid[1],s[1]),high:l}}const r2=41,l2=.06;function c2(n,e,t,i,a){if(!e||i<=0||e.cloud<l2)return n;const s={low:{...n.low},mid:{...n.mid},high:{...n.high}},o=e.cloud*i,r=a.kind==="vis"||e.topKnown<.5?n.low.base+1e3:t+e.topM;if(r<4e3){const l=s.low;o>l.cover&&(l.cover=o,l.top=Math.max(l.top,r),l.base=Math.min(l.base,l.top-400))}else if(r<7e3){const l=s.mid;o>l.cover&&(l.cover=o,l.top=Math.max(l.top,r),l.base=Math.min(l.base,Math.max(t+2e3,l.top-1800)))}else o>s.high.cover&&(s.high.cover=o);return s}const Yf=6e4,na=36e5,h2=10,ad=5*Yf;class u2{provider=null;lat=0;lon=0;gen=0;enabled=!1;latestMs=null;findingLatest=!1;latestCheckedAt=-1/0;frames=new Map;inflight=new Set;failedAt=new Map;airC=null;wanted=[];lit=null;decks=null;status={provider:null,frameMs:null,weight:0,here:NaN,note:""};setPlace(e,t,i){this.gen++;for(const a of this.frames.values())a.tex.dispose();this.frames.clear(),this.inflight.clear(),this.failedAt.clear(),this.latestMs=null,this.findingLatest=!1,this.latestCheckedAt=-1/0,this.lit=null,this.decks=null,this.lat=e,this.lon=t,this.enabled=i,this.provider=i?OT(e,t):null,this.status={provider:this.provider?.name??null,frameMs:null,weight:0,here:NaN,note:i?"looking":"off"}}get idle(){return!this.enabled||!this.provider?!0:this.findingLatest||this.inflight.size?!1:this.latestMs===null?!0:this.wanted.every(e=>this.frames.has(e)||this.failedAt.has(e))}update(e,t,i,a,s){const o=this.provider;if(!this.enabled||!o)return null;if(this.airC=i.tempC,this.lit=null,this.decks=null,this.latestMs===null)return!this.findingLatest&&t-this.latestCheckedAt>ad&&this.findLatest(t),null;!this.findingLatest&&t-this.latestCheckedAt>10*Yf&&o.cadenceMs<24*na&&this.findLatest(t);const r=this.latestMs;let l,c;if(o.cadenceMs>=24*na){const R=Math.min(td(e,this.lon),r);l=[{ms:R,w:1}],c=jr(e,R,R)}else l=ZT(e,r,o),c=jr(e,r-30*na,Math.max(r,t));this.wanted=c>0?l.map(R=>R.ms):[];for(const R of this.wanted)this.request(R);const h=[];for(const R of l){let M=this.frames.get(R.ms),S=R.w*c;if(!M){let D=null;for(const I of this.frames.values())(!D||Math.abs(I.ms-e)<Math.abs(D.ms-e))&&(D=I);if(!D)continue;M=D,S*=jr(e,D.ms,D.ms)}const A=h.find(D=>D.f===M);A?A.w+=S:h.push({f:M,w:S})}const u=a(e),f=R=>{if(!R)return null;R.f.usedAt=performance.now();const M=a(R.f.ms);return{tex:R.f.tex,x:u.x-M.x,z:u.z-M.z,w:R.w}},p=f(h[0]),w=f(h[1]),g=(p?.w??0)+(w?.w??0),m=R=>{let M=null,S=0;for(const[A,D]of[[h[0],p],[h[1],w]]){if(!A||!D||D.w<=0)continue;const I=s2(A.f.texels,-D.x,-D.z,R);if(!I)continue;const F=D.w/(S+D.w);M=M?{cloud:M.cloud+(I.cloud-M.cloud)*F,topM:M.topM+(I.topM-M.topM)*F,topKnown:M.topKnown+(I.topKnown-M.topKnown)*F}:I,S+=D.w}return{h:M,w:S}},{h:d,w:v}=m(qf),x=m(r2),y=c2({low:i.low,mid:i.mid,high:i.high},x.h,s,x.w,o);this.decks=y;const _=h.length>0&&h.every(R=>R.f.vis),b=[Zr(o,y.low.top,s,_),Zr(o,y.mid.top,s,_),Zr(o,y.high.top,s,_)];this.lit=d&&v>0?o2({low:y.low.cover,mid:y.mid.cover,high:y.high.cover},{low:[y.low.base,y.low.top],mid:[y.mid.base,y.mid.top]},d,s,v,b):null;const E=h.length?h.reduce((R,M)=>M.w>R.w?M:R).f:null;return this.status={provider:o.name,frameMs:E?.ms??null,weight:g,here:d?d.cloud:NaN,note:E?"":this.inflight.size?"loading":"no frame"},{a:p,b:w,half:Go,conf:b}}async findLatest(e){const t=this.provider,i=this.gen;this.findingLatest=!0,this.latestCheckedAt=e;try{const a=await a2(t,e);if(i!==this.gen)return;let s=a;s!==null&&t.cadenceMs>=24*na&&(s=td(s,this.lon),s>e&&(s-=24*na)),s!==null&&t.cadenceMs<24*na&&(s-=t.cadenceMs);for(let o=0;s!==null&&o<3;o++,s-=t.cadenceMs){if(s===this.latestMs||await this.load(s,i)){i===this.gen&&(this.latestMs=s);return}if(i!==this.gen)return}i===this.gen&&(this.status={...this.status,note:"no recent frame"})}finally{i===this.gen&&(this.findingLatest=!1)}}request(e){if(this.frames.has(e)||this.inflight.has(e)||this.inflight.size>=2)return;const t=this.failedAt.get(e);t!==void 0&&performance.now()-t<ad||this.load(e,this.gen)}async load(e,t){const i=this.provider;if(!i)return!1;this.inflight.add(e);try{const a=await e2(i,this.lat,this.lon,e,this.airC);if(t!==this.gen)return!1;const s=new Rn(a.texels,ls,ls,gt,_t);return s.magFilter=Ze,s.minFilter=Ze,s.wrapS=s.wrapT=Tt,s.needsUpdate=!0,this.frames.set(e,{ms:e,tex:s,texels:a.texels,vis:a.vis,usedAt:performance.now()}),this.failedAt.delete(e),this.evict(),!0}catch{return t===this.gen&&this.failedAt.set(e,performance.now()),!1}finally{t===this.gen&&this.inflight.delete(e)}}evict(){for(;this.frames.size>h2;){let e=null;for(const t of this.frames.values())(!e||t.usedAt<e.usedAt)&&(e=t);if(!e)return;e.tex.dispose(),this.frames.delete(e.ms)}}}const d2=new Set(["city","town","village","municipality","borough","city_district","suburb","hamlet"]);function f2(n){const e=n?.features?.[0],t=e?.geometry,i=e?.properties??{};if(!t||t.type!=="Polygon"&&t.type!=="MultiPolygon"||i.category!=="boundary"&&i.category!=="place")return null;const a=i.addresstype??"";if(a&&!d2.has(a))return null;const o=(t.type==="Polygon"?[t.coordinates]:t.coordinates).map(r=>({rings:r.filter(l=>Array.isArray(l)&&l.length>=4)})).filter(r=>r.rings.length>0);return o.length?{name:i.name??"",kind:a,polygons:o}:null}function p2(n,e){const t=e.length,a=t>1&&e[0][0]===e[t-1][0]&&e[0][1]===e[t-1][1]?t:t+1,s=new Float32Array(a*2);for(let o=0;o<a;o++){const[r,l]=e[o%t],c=n.toWorld(l,r);s[o*2]=c.x,s[o*2+1]=c.z}return s}function m2(n,e){const t=n.length/2;if(t<=2)return n;const i=new Uint8Array(t);i[0]=i[t-1]=1;const a=[[0,t-1]],s=e*e;for(;a.length;){const[l,c]=a.pop(),h=n[l*2],u=n[l*2+1],f=n[c*2]-h,p=n[c*2+1]-u,w=f*f+p*p;let g=-1,m=s;for(let d=l+1;d<c;d++){const v=n[d*2]-h,x=n[d*2+1]-u,y=w>0?Math.max(0,Math.min(1,(v*f+x*p)/w)):0,_=v-y*f,b=x-y*p,E=_*_+b*b;E>m&&(m=E,g=d)}g>=0&&(i[g]=1,a.push([l,g],[g,c]))}let o=0;for(let l=0;l<t;l++)o+=i[l];const r=new Float32Array(o*2);for(let l=0,c=0;l<t;l++)i[l]&&(r[c++]=n[l*2],r[c++]=n[l*2+1]);return r}function g2(n,e){const t=[];let i=[];const a=e*e;for(let s=0;s<n.length;s+=2){const o=n[s],r=n[s+1];o*o+r*r<=a?i.push(o,r):i.length&&(i.length>=4&&t.push(Float32Array.from(i)),i=[])}return i.length>=4&&t.push(Float32Array.from(i)),t}const v2=6e3;function w2(n,e,t,i=v2){const a=[];for(const o of n.polygons)for(const r of o.rings)a.push(...g2(p2(e,r),t));let s=2;for(;;){const o=a.map(l=>m2(l,s)).filter(l=>l.length>=4);if(o.reduce((l,c)=>l+c.length/2,0)<=i||s>5e3)return{lines:o,tolM:s};s*=2}}function x2(n,e,t){let i=1/0;for(const a of n)for(let s=0;s+3<a.length;s+=2){const o=a[s],r=a[s+1],l=a[s+2]-o,c=a[s+3]-r,h=l*l+c*c,u=h>0?Math.max(0,Math.min(1,((e-o)*l+(t-r)*c)/h)):0,f=Math.hypot(e-o-u*l,t-r-u*c);f<i&&(i=f)}return i}function y2(n,e){return`https://nominatim.openstreetmap.org/reverse?lat=${n.toFixed(5)}&lon=${e.toFixed(5)}&zoom=10&polygon_geojson=1&polygon_threshold=0.0005&format=geojson`}async function _2(n,e){try{return f2(await zo(y2(n,e),Hl))}catch{return null}}const b2=12,sd=1.2,M2=60,Ks=new me(1,.86,.62),S2=`
precision highp float;
in vec3 position;     // x: which end (0, 1); y: which side (-1, 1)
in vec3 iA;
in vec3 iB;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec2 uResolution;
uniform float uHalfWidthPx;
uniform float uNear;
uniform vec3 uCameraPos;
out float vSide;
out vec3 vWorld;
// Toward the lens by a metre and a fraction of the distance, in WORLD space.
// A constant pull in depth-buffer units was a few metres near and hundreds
// far away, where depth precision is coarse: the far line was drawn through
// the ridges it should sit behind, both flanks of a hill at once, which read
// as doubled zig-zag strokes along the skyline.
vec3 pulled(vec3 p) {
  vec3 d = uCameraPos - p;
  float l = length(d);
  return p + d / max(l, 1e-3) * min(l * 0.5, 1.0 + 0.002 * l);
}
void main() {
  vec4 a = modelViewMatrix * vec4(pulled(iA), 1.0);
  vec4 b = modelViewMatrix * vec4(pulled(iB), 1.0);
  vWorld = mix(iA, iB, position.x);
  // Clip the segment to the near plane in view space first: an end behind the
  // lens projects through w <= 0 and would flip the quad across the screen.
  float zn = -uNear * 1.01;
  if (a.z > zn && b.z > zn) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
  if (a.z > zn) a = mix(a, b, (zn - a.z) / (b.z - a.z));
  if (b.z > zn) b = mix(b, a, (zn - b.z) / (a.z - b.z));
  vec4 ca = projectionMatrix * a;
  vec4 cb = projectionMatrix * b;
  vec2 sa = ca.xy / ca.w * uResolution;
  vec2 sb = cb.xy / cb.w * uResolution;
  vec2 d = sb - sa;
  vec2 dir = length(d) > 1e-4 ? normalize(d) : vec2(1.0, 0.0);
  vec2 nrm = vec2(-dir.y, dir.x);
  vec4 c = position.x < 0.5 ? ca : cb;
  // Past the ends by the half width too, so consecutive segments join
  // without a notch at every bend.
  vec2 off = nrm * position.y + dir * (position.x < 0.5 ? -1.0 : 1.0);
  c.xy += off * uHalfWidthPx / uResolution * 2.0 * c.w;
  vSide = position.y;
  gl_Position = c;
}
`,jf=`
#define ATMO_STEPS 5
#define ATMO_SUN_STEPS 2
${jn}
uniform vec3 uCameraPos;
vec3 throughAir(vec3 col, vec3 world, out float t) {
  vec3 rd = normalize(world - uCameraPos);
  vec3 trans;
  vec3 ins = atmosphere(atmoOrigin(uCamAltitude), rd, distance(world, uCameraPos), trans);
  t = trans.g;
  return col * trans + ins;
}
`,E2=`
precision highp float;
in float vSide;
in vec3 vWorld;
uniform vec3 uColour;
uniform float uExposure;
${jf}
out vec4 fragColor;
void main() {
  float s = abs(vSide);
  // A warm white core inside a dark edge, fading out at the rim.
  float core = smoothstep(0.50, 0.30, s);
  float a = smoothstep(1.0, 0.75, s);
  vec3 col = mix(vec3(0.02, 0.018, 0.016), uColour, core);
  float t;
  // Both in scene units: the colour was divided by the exposure on the way
  // in, and the air's inscatter is what the ground behind it gets too.
  col = throughAir(col, vWorld, t);
  fragColor = vec4(col, a * mix(0.85, 1.0, core));
}
`,T2=`
precision highp float;
in vec3 position;     // x: along (0, 1); y: up (0, 1)
in vec3 iA;
in vec3 iB;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float uHeight;
uniform vec3 uCameraPos;
out float vUp;
out vec3 vWorld;
void main() {
  vec3 p = mix(iA, iB, position.x) + vec3(0.0, position.y * uHeight, 0.0);
  vUp = position.y;
  vWorld = p;
  vec3 d = uCameraPos - p;
  float l = length(d);
  p += d / max(l, 1e-3) * min(l * 0.5, 1.0 + 0.002 * l);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,A2=`
precision highp float;
in float vUp;
in vec3 vWorld;
uniform vec3 uColour;
uniform float uAlpha;
uniform float uExposure;
${jf}
out vec4 fragColor;
void main() {
  float f = (1.0 - vUp);
  float t;
  vec3 col = throughAir(uColour, vWorld, t);
  // The veil thins with the air in front of it, as a surface's contrast does.
  fragColor = vec4(col, f * f * uAlpha * t);
}
`,od=[0,-1,0,1,-1,0,1,1,0,0,1,0],rd=[0,0,0,1,0,0,1,1,0,0,1,0],Zs=[0,1,2,0,2,3];function Js(n,e){const t=new wo;return t.setAttribute("position",new Lt(n,3)),t.setIndex(e),t}class R2{group=new vn;lineGeo=Js(od,Zs);curtainGeo=Js(rd,Zs);lineMat;curtainMat;lineMesh;curtainMesh;flat=[];air={uCameraPos:{value:new k},uExposure:{value:1},uSunDir:{value:new k(0,1,0)},uSunColor:{value:new me(1,1,1)},uSunIntensity:{value:22},uMieG:{value:.76},uTurbidity:{value:1},uCamAltitude:{value:100},uMultiScatter:{value:.055},...yn};constructor(){const e={glslVersion:It,transparent:!0,depthWrite:!1,depthTest:!0,side:zt};this.lineMat=new Bt({...e,vertexShader:S2,fragmentShader:E2,uniforms:{...this.air,uResolution:{value:new Ne(1280,720)},uHalfWidthPx:{value:2.2},uNear:{value:2},uColour:{value:Ks.clone()}}}),this.curtainMat=new Bt({...e,vertexShader:T2,fragmentShader:A2,uniforms:{...this.air,uHeight:{value:M2},uColour:{value:Ks.clone()},uAlpha:{value:.22}}}),this.lineMesh=new lt(this.lineGeo,this.lineMat),this.curtainMesh=new lt(this.curtainGeo,this.curtainMat);for(const t of[this.lineMesh,this.curtainMesh])t.frustumCulled=!1,t.renderOrder=5,this.group.add(t);this.group.visible=!1}setLines(e,t){this.flat=e,this.drape(t)}drape(e){const t=[];let i=0;for(const r of this.flat){const l=[];for(let u=0;u+3<r.length;u+=2){const f=r[u],p=r[u+1],w=r[u+2],g=r[u+3],m=Math.max(1,Math.ceil(Math.hypot(w-f,g-p)/b2));for(let d=0;d<m;d++){const v=d/m,x=f+(w-f)*v,y=p+(g-p)*v;l.push(x,e(x,y)+sd,y)}}const c=r[r.length-2],h=r[r.length-1];l.push(c,e(c,h)+sd,h),t.push(Float32Array.from(l)),i+=l.length/3-1}const a=new Float32Array(i*3),s=new Float32Array(i*3);let o=0;for(const r of t)for(let l=0;l+5<r.length;l+=3,o++)a.set(r.subarray(l,l+3),o*3),s.set(r.subarray(l+3,l+6),o*3);this.lineGeo.dispose(),this.curtainGeo.dispose(),this.lineGeo=Js(od,Zs),this.curtainGeo=Js(rd,Zs);for(const r of[this.lineGeo,this.curtainGeo])r.setAttribute("iA",new wa(a,3)),r.setAttribute("iB",new wa(s,3)),r.instanceCount=i;this.lineMesh.geometry=this.lineGeo,this.curtainMesh.geometry=this.curtainGeo}get segments(){return this.lineGeo.instanceCount}update(e,t,i,a,s){if(this.group.visible=e&&this.lineGeo.instanceCount>0,!this.group.visible)return;const o=s.exposure,r=this.air;r.uCameraPos.value.copy(a.position),r.uCamAltitude.value=a.position.y,r.uExposure.value=o,r.uSunDir.value.copy(s.sunDir),r.uSunColor.value.copy(s.sunColor),r.uSunIntensity.value=s.sunIntensity,r.uMieG.value=s.mieG,r.uTurbidity.value=s.turbidity;const l=this.lineMat.uniforms;l.uResolution.value.set(t,i),l.uNear.value=a.near;const c=.9/Math.max(.2,o)*(1-.6*s.night);l.uColour.value.copy(Ks).multiplyScalar(c),this.curtainMat.uniforms.uColour.value.copy(Ks).multiplyScalar(c*.8)}dispose(){this.lineGeo.dispose(),this.curtainGeo.dispose(),this.lineMat.dispose(),this.curtainMat.dispose()}}const C2=.12,D2=2500,P2=[680,550,440];function L2(n,e){const t=Math.max(0,n-C2),i=Math.max(0,Math.min(1,e)),a=1.8+(.3-1.8)*i,s=[.92,.86,.74],o=[.97,.93,.8],r=t/D2,l=P2.map(h=>r*Math.pow(h/550,-a)),c=l.map((h,u)=>h*(s[u]+(o[u]-s[u])*i));return{ext:l,scat:c}}function I2(n){return Number.isFinite(n)?n<=50?"Good":n<=100?"Moderate":n<=150?"Unhealthy for sensitive groups":n<=200?"Unhealthy":n<=300?"Very unhealthy":"Hazardous":""}function F2(n){return n.aod<.3?"clear air":n.dustFrac>.5?"dust":n.dustFrac>.2?"dust and haze":"smoke haze"}function k2(n,e){return e>1?Math.max(0,Math.min(1,n/e)):0}function N2(n){const e=n.hourly,t=e?.time??[];if(t.length<2)return null;const i=u=>e?.[u]??[],a=i("aerosol_optical_depth"),s=i("pm2_5"),o=i("pm10"),r=i("dust"),l=i("us_aqi"),c=u=>{const f=a[u];if(typeof f!="number")return null;const p=o[u]??NaN;return{aod:f,dustFrac:k2(r[u]??0,p),pm25:s[u]??NaN,pm10:p,usAqi:l[u]??NaN}},h=(t[1]-t[0])*1e3;return{at(u){const f=(u-t[0]*1e3)/h;if(f<0||f>t.length-1)return null;const p=Math.min(t.length-2,Math.floor(f)),w=f-p,g=c(p),m=c(p+1);if(!g||!m)return w<.5?g:m;const d=(v,x)=>v+(x-v)*w;return{aod:d(g.aod,m.aod),dustFrac:d(g.dustFrac,m.dustFrac),pm25:d(g.pm25,m.pm25),pm10:d(g.pm10,m.pm10),usAqi:Math.round(d(g.usAqi,m.usAqi))}}}}async function U2(n,e){const t=`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${n.toFixed(4)}&longitude=${e.toFixed(4)}&hourly=pm2_5,pm10,dust,aerosol_optical_depth,us_aqi&timeformat=unixtime&past_days=1&forecast_days=7`;try{return N2(await zo(t,vc))}catch{return null}}const Qs=36e5,O2=15*6e4;function z2(n,e){return n.low.cover<.3||n.low.base-e<250&&n.visibility<1500||n.low.top-e<60?1/0:e+.85*(n.low.base-e)-40}function B2(n,e){const t=(s,o,r)=>1-(1-s)*(1-o)*(1-r),i=t(n.low.cover,n.mid.cover,n.high.cover),a=t(e.low,e.mid,e.high);return{...n,low:{...n.low,cover:e.low},mid:{...n.mid,cover:e.mid},high:{...n.high,cover:e.high},opacity:_a(e.low,e.mid,e.high),totalCover:i>.01?Math.min(1,n.totalCover*a/i):a}}async function H2(){const n=document.getElementById("view"),e=document.getElementById("ui"),t=new URLSearchParams(location.search);$_(n),t.has("diag")&&X_(document.createElement("canvas"));const i=t.has("shot");i&&(e.style.display="none");const a=Hd(),{renderer:s,scene:o,camera:r}=Tx(n,a);s.debug.onShaderError=(W,te,J,Z)=>{const pe=window.__skycastShout;pe?.("SHADER FAILED"),console.error("[skycast] vertex shader log:",W.getShaderInfoLog(J)),console.error("[skycast] fragment shader log:",W.getShaderInfoLog(Z))};const l=new S_(s),c=Ax(s,a),h=new Iy(s);h.enabled=a.aoEnabled;const u=new Dx(s,Nd[a.tier]),f=()=>{const W=s.getDrawingBufferSize(new Ne);c.setSize(W.x,W.y),l.resize(s),h.resize(s)};addEventListener("resize",f),i?(u.pin(Number(t.get("scale"))||1),u.apply(s),s.setSize(n.clientWidth||innerWidth,n.clientHeight||innerHeight,!1),f()):(u.apply(s),f());const p=new N_(a),w=new U_;o.add(w.group);const g=new Ix;o.add(g.mesh);const m=new gy(a),d=new P_,v=new FE(o,a,m.uniforms,t.get("overpass"),t.get("vector")!=="0"),x=new uT(n,r,v),y=new u2,_=new R2;o.add(_.group);let b=null,E=[],R={buildings:-1,ms:0},M=1/0,S=!0,A=!1;try{S=localStorage.getItem("skycast.cityLimits")!=="0"}catch{}const D=()=>{S=!S;try{localStorage.setItem("skycast.cityLimits",S?"1":"0")}catch{}K.setLimits(b?.name??null,S,D)},I=!t.get("wx")&&t.get("sat")!=="0";let F=null;const O=Date.parse(t.get("now")??""),V=()=>Number.isFinite(O)?O:Date.now();x.frozen=i;const z=new BE(Date.now()),N=new RT(e),K=new ET(e,()=>ft&&le.setRange(ft)),ne=new TT(e),le=new MT(e,{onScrub:W=>{z.scrubTo(W),Ce()},onTour:()=>tt(),onPlayPause:()=>xe(),onRate:W=>{z.rateIndex=W,z.play(),Ce()},onNow:()=>{z.goLive(Date.now()),Ce()}}),Te=new AT(le.controls,W=>De(W));new CT(e,W=>void Ve(W));let oe=qu(location.hash)??{...DT},Ue=new Mo(oe.lat,oe.lon),Ie="",q=null,Q=null,ve=null,Fe=null,Ee=!1,Xe=Math.round(oe.lon/15)*3600,ft=null,L=0,et="";const Ce=()=>{oe.mode=x.mode,oe.time=z.mode==="paused"&&!z.live?Math.round(z.t/6e4)*6e4:null;const W=Yu(oe);W!==et&&(et=W,history.replaceState(null,"",`${location.pathname}${location.search}${W}`))},De=W=>{x.setMode(W),Te.set(W),Ce()},_e=W=>UE(oe.lat,oe.lon,W,zE,Xe),tt=()=>{z.goLive(Date.now()),z.startTour(_e,Date.now()),Ce()},xe=()=>{z.mode==="paused"?z.play():z.pause(),Ce()},Ve=async W=>{oe={lat:W.lat,lon:W.lon,mode:x.mode,time:null},et="",xt(),await ct(W.name)},xt=()=>{const W=Yu(oe);et=W,history.replaceState(null,"",`${location.pathname}${location.search}${W}`)},ct=async W=>{const te=++L;Ue=new Mo(oe.lat,oe.lon),Xe=Math.round(oe.lon/15)*3600,Q=null,ve=null,Fe=null,Ee=!1,q=null,ft=null;const J=Bf.find(ce=>Math.abs(ce.lat-oe.lat)<.001&&Math.abs(ce.lon-oe.lon)<.001);Ie=W??J?.name??`${oe.lat.toFixed(3)}, ${oe.lon.toFixed(3)}`,document.title=`${Ie} · skycast`,!W&&!J&&V_(oe.lat,oe.lon).then(ce=>{ce&&te===L&&(Ie=ce.name,document.title=`${Ie} · skycast`)}),x.resetPlace(),y.setPlace(oe.lat,oe.lon,I),F=null,x.setMode(oe.mode,!0),Te.set(oe.mode),oe.time!==null?z.scrubTo(oe.time):z.goLive(Date.now());const Z=m_(oe.lat,oe.lon).then(ce=>{te===L&&(Q=ce)});U2(oe.lat,oe.lon).then(ce=>{te===L&&(Fe=ce,Ee=!0)});const pe=w_(oe.lat,oe.lon).then(ce=>{if(te===L){if(ve=ce,ce){q=new Wu(ce.timezone),Xe=ce.utcOffsetSeconds;const ze=t.get("wx")&&oe.time!==null?oe.time:null;z.setBounds(Math.min(ce.start.getTime(),ze??1/0),Math.max(ce.end.getTime(),ze??-1/0)),ft={start:ce.start.getTime(),end:ce.end.getTime(),lat:oe.lat,lon:oe.lon,timeline:ce,clock:q}}else{q=new Wu("UTC");const ze=Date.now();z.setBounds(ze-24*Qs,ze+48*Qs),ft={start:ze-24*Qs,end:ze+48*Qs,lat:oe.lat,lon:oe.lon,timeline:null,clock:q}}le.setRange(ft)}});try{await v.setOrigin(Ue,(ce,ze)=>{te===L&&N.set(ce,ze)})}catch(ce){console.error(ce),te===L&&N.fail(`could not load terrain: ${ce.message}`);return}te===L&&(N.done(),b=null,E=[],A=!1,_.setLines([],v.surfaceAt),K.setLimits(null,S,D),setTimeout(()=>{te===L&&_2(oe.lat,oe.lon).then(ce=>{te===L&&(A=!0,ce&&(b=ce,E=w2(ce,Ue,6e4).lines,_.setLines(E,v.surfaceAt),R={buildings:v.status.buildings,ms:performance.now()},K.setLimits(ce.name,S,D)))})},1e3),await Promise.all([Z,pe]),te===L&&(Q||(Q=ja()),oe.time===null&&!i&&tt(),Ce()))};addEventListener("hashchange",()=>{if(location.hash===et)return;const W=qu(location.hash);if(!W)return;const te=Math.abs(W.lat-oe.lat)>1e-5||Math.abs(W.lon-oe.lon)>1e-5;if(oe=W,et=location.hash,te){ct(null);return}De(W.mode),W.time!==null?z.scrubTo(W.time):tt()});let P=!1;addEventListener("keydown",W=>{if(!(Uf(W)||W.metaKey||W.ctrlKey||W.altKey))switch(W.code){case"Digit1":De("skyline");break;case"Digit2":De("street");break;case"Space":W.preventDefault(),xe();break;case"ArrowLeft":W.preventDefault(),z.stepHours(-1),Ce();break;case"ArrowRight":W.preventDefault(),z.stepHours(1),Ce();break;case"KeyT":tt();break;case"KeyH":P=!P,e.classList.toggle("hidden",P);break}}),ct(null);const T=new Gm;let G=i&&Number(t.get("anim")??0)||0;const j=new Ne,ee=new me(0,0,0),Y=[];let Se=16,re=1,ye=0,he=ja(),ie=he,fe=NaN,Pe=0;const be=LT(t.get("wx")),ue=W=>be||{...Ge(W),air:Fe?.at(W)??null},Ge=W=>{const te=Date.now();if(Q&&(!ve||Math.abs(W-te)<O2)){if(!ve)return Q;const J=ve.at(new Date(W));return{...Q,wetness:J.wetness,puddles:J.puddles,drift:J.drift,snowDepth:Q.snowDepth||J.snowDepth}}return ve?ve.at(new Date(W)):Q??ja()},U=()=>{const W=y.status;if(!W.provider||W.frameMs===null||W.weight<.02)return"";const te=new Date(W.frameMs),J=q?q.parts(te).time:`${te.toISOString().slice(11,16)}Z`,Z=Number.isFinite(W.here)?` · ${Math.round(W.here*100)}% here`:"";return`${W.provider} ${J}${Z}${W.weight<.98?` · weight ${Math.round(W.weight*100)}%`:""}`},ae=W=>{const te=W.air;if(!te)return"";const J=[];return Number.isFinite(te.usAqi)&&J.push(`AQI ${te.usAqi} ${I2(te.usAqi)}`),Number.isFinite(te.pm25)&&J.push(`PM2.5 ${Math.round(te.pm25)}`),J.push(`${F2(te)}, AOD ${te.aod.toFixed(2)}`),J.join(" · ")};s.setAnimationLoop(()=>{const W=T.getDelta(),te=Math.min(.05,W);i||(G+=te),z.step(te,Date.now());const J=new Date(z.t);x.setCeiling(z2(ie,v.heightAt(0,0))),x.update(te),v.update(r,x.focus());const Z=performance.now();if(!(Math.abs(z.t-fe)<6e4)||Z-Pe>500){he=ue(z.t),fe=z.t,Pe=Z;const Da=ve;F=y.update(z.t,V(),he,Fi=>Da?Da.at(new Date(Fi)).drift:he.drift,v.heightAt(0,0)),ie=y.decks?{...he,low:y.decks.low,mid:y.decks.mid,high:y.decks.high}:he}const pe=Di(J,oe.lat,oe.lon),ce=y.lit,ze=ce?B2(he,ce):he,Be=ly(pe,ze),Qt=L2(he.air?.aod??0,he.air?.dustFrac??0);yn.uAerosolExt.value.set(...Qt.ext),yn.uAerosolScat.value.set(...Qt.scat);const en=v.heightAt(r.position.x,r.position.z),ci=w.update(z.t,G,he.storm,x.focus(),v.heightAt(0,0),he.low.base,Be.night,r);ee.copy(ci.color),l.presentUniforms.uFlashGain.value=ci.gain,l.uniforms.uFlashPos.value.copy(ci.pos),l.uniforms.uFlashCol.value.copy(ci.color);const _n=r.position.y;g.update(pe,he,_n,G),g.syncCamera(r),g.uniforms.uExposure.value=Be.exposure;const Ra=(J.getUTCHours()+J.getUTCMinutes()/60+oe.lon/15+48)%24;v.prepareFrame({camera:r,light:Be,wx:he,skyProbe:d,elapsed:G,solarHour:Ra,timeMs:z.t}),d.setSize(u.scale<.8?32:64),d.update(s,Be,_n),m.update(s,o,r,Be.sunDir,u.scale,v.shadowCasters),v.setAo(h,0),g.syncCamera(r),h.render(s,o,r,v.shadowCasters),v.setAo(h,1),E.length&&(Z-R.ms>2e3&&v.status.buildings!==R.buildings&&(_.drape(v.surfaceAt),R={buildings:v.status.buildings,ms:Z}),ye%15===0&&(M=x2(E,r.position.x,r.position.z))),s.getDrawingBufferSize(j),_.update(S&&(x.mode==="skyline"||M<150),j.x,j.y,r,Be),s.setRenderTarget(c),s.render(o,r);const Ca=en;l.setSatellite(F,v.heightAt(0,0)),l.update(r,ie,Be,G,Ca,ee,ce),l.uniforms.uSunSurfaceCloud.value=.105,l.presentUniforms.uExposure.value=Be.exposure,l.presentUniforms.uNight.value=Be.night,l.brightUniforms.uExposure.value=Be.exposure,l.brightUniforms.uNight.value=Be.night,l.setReflection(r,d.texture,d.maxLod,Be,G,a.tier==="reduced"?16:30),l.render(s,c.texture,c.depthTexture),s.getDrawingBufferSize(j),p.wanted(he)?v.lightsNear(r.position.x,r.position.y,r.position.z,Ri,Y):Y.length=0,p.update(r,he,Be,d.sh,G,j,Y,ee,Ca),p.setFog(l.uniforms.uFog.value,l.uniforms.uFogAmb.value,l.uniforms.uFogSun.value),p.render(s,c.depthTexture),ye++,Se+=(te*1e3-Se)*.06,!i&&u.update(Se,te)&&(u.apply(s),s.setSize(n.clientWidth||innerWidth,n.clientHeight||innerHeight,!1),f()),le.update(z.t,Date.now(),z.mode,z.live,z.rateIndex),ne.set(x.holding?"Loading street":z.label),re+=te,re>.1&&(re=0,K.update(Ie,J,q,Q?he:null,pe.sun.altitude>-.833,v.status.note,U(),ae(he),Date.now(),z.live))}),Object.assign(window,{skycastShot:{get frames(){return ye},get settled(){return v.status.ready&&v.status.idle&&!v.drapePending&&Q!==null&&ve!==null&&y.idle&&(Ee||be!==null)&&A},get buildings(){return v.status.buildings},get liveStats(){return v.liveStats},capture:()=>n.toDataURL("image/png")},skycast:{scene:o,camera:r,renderer:s,sky:g,composite:l,ground:v,rig:x,precip:p,skyProbe:d,get time(){return new Date(z.t)},get mode(){return x.mode},get holding(){return x.holding},get limits(){return{name:b?.name??null,on:S,nearM:M,segments:_.segments,shown:_.group.visible}},get play(){return z.mode},get label(){return z.label},get wx(){return he},get sat(){return y.status},get flash(){return w.state.brightness},findFlash(W=900){const te=nf(z.t),J=x.focus(),Z=v.heightAt(0,0),pe=new k;for(let ce=0;ce<W;ce+=.004){const ze=af(te,ce,he.storm);if(!(!ze||!ze.flash.ground||ze.brightness<.6)&&(pe.set(J.x+ze.flash.x,Z+300,J.z+ze.flash.z).project(r),Math.abs(pe.x)<.75&&pe.y>-.6&&pe.y<.9&&pe.z<1))return Math.round(ce*1e3)/1e3}return null}},skycastBudget:a,skycastClearCache:async()=>{await i_(),console.info("[skycast] tile cache cleared; reload to refetch")}})}H2().catch(n=>{console.error(n);const e=window.__skycastShout;e?.(`failed: ${n.message}`)});
