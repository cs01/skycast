(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yr="180",ed=0,wl=1,td=2,Eh=1,Th=2,Cn=3,gn=0,kt=1,tn=2,jn=0,Hi=1,xl=2,yl=3,bl=4,nd=5,hi=100,id=101,ad=102,sd=103,od=104,rd=200,ld=201,cd=202,hd=203,Jo=204,Qo=205,ud=206,dd=207,fd=208,pd=209,md=210,gd=211,vd=212,_d=213,wd=214,er=0,tr=1,nr=2,$i=3,ir=4,ar=5,sr=6,or=7,Ah=0,xd=1,yd=2,Nn=0,bd=1,Md=2,Sd=3,Ed=4,Td=5,Ad=6,Rd=7,Rh=300,qi=301,Yi=302,rr=303,lr=304,Fs=306,Gi=1e3,$t=1001,cr=1002,mt=1003,Cd=1004,za=1005,ht=1006,Zs=1007,In=1008,Et=1009,Ch=1010,Dh=1011,ba=1012,jr=1013,vn=1014,pn=1015,_n=1016,Zr=1017,Kr=1018,Ma=1020,Ph=35902,Lh=35899,Ih=1021,Uh=1022,wt=1023,Zn=1026,Sa=1027,mi=1028,Jr=1029,Nh=1030,Qr=1031,el=1033,vs=33776,_s=33777,ws=33778,xs=33779,hr=35840,ur=35841,dr=35842,fr=35843,pr=36196,mr=37492,gr=37496,vr=37808,_r=37809,wr=37810,xr=37811,yr=37812,br=37813,Mr=37814,Sr=37815,Er=37816,Tr=37817,Ar=37818,Rr=37819,Cr=37820,Dr=37821,Pr=36492,Lr=36494,Ir=36495,Ur=36283,Nr=36284,Fr=36285,kr=36286,Dd=3200,Pd=3201,Ld=0,Id=1,Pn="",Qt="srgb",pi="srgb-linear",Rs="linear",tt="srgb",_i=7680,Ml=519,Ud=512,Nd=513,Fd=514,Fh=515,kd=516,Od=517,zd=518,Bd=519,Sl=35044,Hd=35048,Ot="300 es",mn=2e3,Cs=2001;class ta{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,o=a.length;s<o;s++)a[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let El=1234567;const va=Math.PI/180,Ea=180/Math.PI;function na(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function Xe(n,e,t){return Math.max(e,Math.min(t,n))}function tl(n,e){return(n%e+e)%e}function Gd(n,e,t,i,a){return i+(n-e)*(a-i)/(t-e)}function Vd(n,e,t){return n!==e?(t-n)/(e-n):0}function _a(n,e,t){return(1-t)*n+t*e}function Wd(n,e,t,i){return _a(n,e,1-Math.exp(-t*i))}function Xd(n,e=1){return e-Math.abs(tl(n,e*2)-e)}function $d(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function qd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Yd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function jd(n,e){return n+Math.random()*(e-n)}function Zd(n){return n*(.5-Math.random())}function Kd(n){n!==void 0&&(El=n);let e=El+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jd(n){return n*va}function Qd(n){return n*Ea}function ef(n){return(n&n-1)===0&&n!==0}function tf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function nf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function af(n,e,t,i,a){const s=Math.cos,o=Math.sin,r=s(t/2),l=o(t/2),c=s((e+i)/2),h=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(a){case"XYX":n.set(r*h,l*d,l*f,r*c);break;case"YZY":n.set(l*f,r*h,l*d,r*c);break;case"ZXZ":n.set(l*d,l*f,r*h,r*c);break;case"XZX":n.set(r*h,l*g,l*p,r*c);break;case"YXY":n.set(l*p,r*h,l*g,r*c);break;case"ZYZ":n.set(l*g,l*p,r*h,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Ni(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function It(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Tl={DEG2RAD:va,RAD2DEG:Ea,generateUUID:na,clamp:Xe,euclideanModulo:tl,mapLinear:Gd,inverseLerp:Vd,lerp:_a,damp:Wd,pingpong:Xd,smoothstep:$d,smootherstep:qd,randInt:Yd,randFloat:jd,randFloatSpread:Zd,seededRandom:Kd,degToRad:Jd,radToDeg:Qd,isPowerOfTwo:ef,ceilPowerOfTwo:tf,floorPowerOfTwo:nf,setQuaternionFromProperEuler:af,normalize:It,denormalize:Ni};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*a+e.x,this.y=s*a+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kn{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,s,o,r){let l=i[a+0],c=i[a+1],h=i[a+2],d=i[a+3];const f=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(r===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(r===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==f||c!==p||h!==g){let m=1-r;const u=l*f+c*p+h*g+d*v,_=u>=0?1:-1,w=1-u*u;if(w>Number.EPSILON){const S=Math.sqrt(w),E=Math.atan2(S,u*_);m=Math.sin(m*E)/S,r=Math.sin(r*E)/S}const x=r*_;if(l=l*m+f*x,c=c*m+p*x,h=h*m+g*x,d=d*m+v*x,m===1-r){const S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,a,s,o){const r=i[a],l=i[a+1],c=i[a+2],h=i[a+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=r*g+h*d+l*p-c*f,e[t+1]=l*g+h*f+c*d-r*p,e[t+2]=c*g+h*p+r*f-l*d,e[t+3]=h*g-r*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,s=e._z,o=e._order,r=Math.cos,l=Math.sin,c=r(i/2),h=r(a/2),d=r(s/2),f=l(i/2),p=l(a/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],s=t[8],o=t[1],r=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+r+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-a)*p}else if(i>r&&i>d){const p=2*Math.sqrt(1+i-r-d);this._w=(h-l)/p,this._x=.25*p,this._y=(a+o)/p,this._z=(s+c)/p}else if(r>d){const p=2*Math.sqrt(1+r-i-d);this._w=(s-c)/p,this._x=(a+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-r);this._w=(o-a)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,s=e._z,o=e._w,r=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*r+a*c-s*l,this._y=a*h+o*l+s*r-i*c,this._z=s*h+o*c+i*l-a*r,this._w=o*h-i*r-a*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,s=this._z,o=this._w;let r=o*e._w+i*e._x+a*e._y+s*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=o,this._x=i,this._y=a,this._z=s,this;const l=1-r*r;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*a+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,r),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=a*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Al.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Al.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*a,this.y=s[1]*t+s[4]*i+s[7]*a,this.z=s[2]*t+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*a+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*a+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*a+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,s=e.x,o=e.y,r=e.z,l=e.w,c=2*(o*a-r*i),h=2*(r*t-s*a),d=2*(s*i-o*t);return this.x=t+l*c+o*d-r*h,this.y=i+l*h+r*c-s*d,this.z=a+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a,this.y=s[1]*t+s[5]*i+s[9]*a,this.z=s[2]*t+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,s=e.z,o=t.x,r=t.y,l=t.z;return this.x=a*l-s*r,this.y=s*o-i*l,this.z=i*r-a*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ks.copy(this).projectOnVector(e),this.sub(Ks)}reflect(e){return this.sub(Ks.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ks=new F,Al=new Kn;class ze{constructor(e,t,i,a,s,o,r,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,o,r,l,c)}set(e,t,i,a,s,o,r,l,c){const h=this.elements;return h[0]=e,h[1]=a,h[2]=r,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,o=i[0],r=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],g=i[8],v=a[0],m=a[3],u=a[6],_=a[1],w=a[4],x=a[7],S=a[2],E=a[5],R=a[8];return s[0]=o*v+r*_+l*S,s[3]=o*m+r*w+l*E,s[6]=o*u+r*x+l*R,s[1]=c*v+h*_+d*S,s[4]=c*m+h*w+d*E,s[7]=c*u+h*x+d*R,s[2]=f*v+p*_+g*S,s[5]=f*m+p*w+g*E,s[8]=f*u+p*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],o=e[4],r=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*r*c-i*s*h+i*r*l+a*s*c-a*o*l}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],o=e[4],r=e[5],l=e[6],c=e[7],h=e[8],d=h*o-r*c,f=r*l-h*s,p=c*s-o*l,g=t*d+i*f+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(a*c-h*i)*v,e[2]=(r*i-a*o)*v,e[3]=f*v,e[4]=(h*t-a*l)*v,e[5]=(a*s-r*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,s,o,r){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*r)+o+e,-a*c,a*l,-a*(-c*o+l*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(Js.makeScale(e,t)),this}rotate(e){return this.premultiply(Js.makeRotation(-e)),this}translate(e,t){return this.premultiply(Js.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Js=new ze;function kh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ds(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sf(){const n=Ds("canvas");return n.style.display="block",n}const Rl={};function Ta(n){n in Rl||(Rl[n]=!0,console.warn(n))}function of(n,e,t){return new Promise(function(i,a){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Cl=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dl=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rf(){const n={enabled:!0,workingColorSpace:pi,spaces:{},convert:function(a,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===tt&&(a.r=Fn(a.r),a.g=Fn(a.g),a.b=Fn(a.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tt&&(a.r=Vi(a.r),a.g=Vi(a.g),a.b=Vi(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Pn?Rs:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,o){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return Ta("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return Ta("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(a,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[pi]:{primaries:e,whitePoint:i,transfer:Rs,toXYZ:Cl,fromXYZ:Dl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:Cl,fromXYZ:Dl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),n}const Ze=rf();function Fn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let wi;class lf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{wi===void 0&&(wi=Ds("canvas")),wi.width=e.width,wi.height=e.height;const a=wi.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=wi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ds("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let o=0;o<s.length;o++)s[o]=Fn(s[o]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Fn(t[i]/255)*255):t[i]=Fn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cf=0;class nl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=na(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let o=0,r=a.length;o<r;o++)a[o].isDataTexture?s.push(Qs(a[o].image)):s.push(Qs(a[o]))}else s=Qs(a);i.url=s}return t||(e.images[this.uuid]=i),i}}function Qs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hf=0;const eo=new F;class Dt extends ta{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=$t,a=$t,s=ht,o=In,r=wt,l=Et,c=Dt.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=na(),this.name="",this.source=new nl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(eo).x}get height(){return this.source.getSize(eo).y}get depth(){return this.source.getSize(eo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gi:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case cr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gi:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case cr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Rh;Dt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,i=0,a=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*a+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*a+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*a+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,s;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,x=(p+1)/2,S=(u+1)/2,E=(h+f)/4,R=(d+v)/4,C=(g+m)/4;return w>x&&w>S?w<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(w),a=E/i,s=R/i):x>S?x<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(x),i=E/a,s=C/a):S<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(S),i=R/s,a=C/s),this.set(i,a,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-v)/_,this.z=(f-h)/_,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uf extends ta{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const a={width:e,height:t,depth:i.depth},s=new Dt(a);this.textures=[];const o=i.count;for(let r=0;r<o;r++)this.textures[r]=s.clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new nl(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pt extends uf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Oh extends Dt{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=mt,this.minFilter=mt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zh extends Dt{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=mt,this.minFilter=mt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ca{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,r=s.count;o<r;o++)e.isMesh===!0?e.getVertexPosition(o,sn):sn.fromBufferAttribute(s,o),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ba.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ba.copy(i.boundingBox)),Ba.applyMatrix4(e.matrixWorld),this.union(Ba)}const a=e.children;for(let s=0,o=a.length;s<o;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),Ha.subVectors(this.max,sa),xi.subVectors(e.a,sa),yi.subVectors(e.b,sa),bi.subVectors(e.c,sa),zn.subVectors(yi,xi),Bn.subVectors(bi,yi),ei.subVectors(xi,bi);let t=[0,-zn.z,zn.y,0,-Bn.z,Bn.y,0,-ei.z,ei.y,zn.z,0,-zn.x,Bn.z,0,-Bn.x,ei.z,0,-ei.x,-zn.y,zn.x,0,-Bn.y,Bn.x,0,-ei.y,ei.x,0];return!to(t,xi,yi,bi,Ha)||(t=[1,0,0,0,1,0,0,0,1],!to(t,xi,yi,bi,Ha))?!1:(Ga.crossVectors(zn,Bn),t=[Ga.x,Ga.y,Ga.z],to(t,xi,yi,bi,Ha))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yn=[new F,new F,new F,new F,new F,new F,new F,new F],sn=new F,Ba=new Ca,xi=new F,yi=new F,bi=new F,zn=new F,Bn=new F,ei=new F,sa=new F,Ha=new F,Ga=new F,ti=new F;function to(n,e,t,i,a){for(let s=0,o=n.length-3;s<=o;s+=3){ti.fromArray(n,s);const r=a.x*Math.abs(ti.x)+a.y*Math.abs(ti.y)+a.z*Math.abs(ti.z),l=e.dot(ti),c=t.dot(ti),h=i.dot(ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const df=new Ca,oa=new F,no=new F;class kn{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):df.setFromPoints(e).getCenter(i);let a=0;for(let s=0,o=e.length;s<o;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);const t=oa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(oa,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(no.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(no)),this.expandByPoint(oa.copy(e.center).sub(no))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const bn=new F,io=new F,Va=new F,Hn=new F,ao=new F,Wa=new F,so=new F;class ff{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.origin).addScaledVector(this.direction,t),bn.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){io.copy(e).add(t).multiplyScalar(.5),Va.copy(t).sub(e).normalize(),Hn.copy(this.origin).sub(io);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Va),r=Hn.dot(this.direction),l=-Hn.dot(Va),c=Hn.lengthSq(),h=Math.abs(1-o*o);let d,f,p,g;if(h>0)if(d=o*l-r,f=o*r-l,g=s*h,d>=0)if(f>=-g)if(f<=g){const v=1/h;d*=v,f*=v,p=d*(d+o*f+2*r)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+r)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+r)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+r)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+r)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+r)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(io).addScaledVector(Va,f),p}intersectSphere(e,t){bn.subVectors(e.center,this.origin);const i=bn.dot(this.direction),a=bn.dot(bn)-i*i,s=e.radius*e.radius;if(a>s)return null;const o=Math.sqrt(s-a),r=i-o,l=i+o;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,s,o,r,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,a=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,a=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||s>a||((s>i||isNaN(i))&&(i=s),(o<a||isNaN(a))&&(a=o),d>=0?(r=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(r=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||r>a)||((r>i||i!==i)&&(i=r),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,i,a,s){ao.subVectors(t,e),Wa.subVectors(i,e),so.crossVectors(ao,Wa);let o=this.direction.dot(so),r;if(o>0){if(a)return null;r=1}else if(o<0)r=-1,o=-o;else return null;Hn.subVectors(this.origin,e);const l=r*this.direction.dot(Wa.crossVectors(Hn,Wa));if(l<0)return null;const c=r*this.direction.dot(ao.cross(Hn));if(c<0||l+c>o)return null;const h=-r*Hn.dot(so);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,i,a,s,o,r,l,c,h,d,f,p,g,v,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,o,r,l,c,h,d,f,p,g,v,m)}set(e,t,i,a,s,o,r,l,c,h,d,f,p,g,v,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=a,u[1]=s,u[5]=o,u[9]=r,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/Mi.setFromMatrixColumn(e,0).length(),s=1/Mi.setFromMatrixColumn(e,1).length(),o=1/Mi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,s=e.z,o=Math.cos(i),r=Math.sin(i),l=Math.cos(a),c=Math.sin(a),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*h,p=o*d,g=r*h,v=r*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-r*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,p=l*d,g=c*h,v=c*d;t[0]=f+v*r,t[4]=g*r-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-r,t[2]=p*r-g,t[6]=v+f*r,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,p=l*d,g=c*h,v=c*d;t[0]=f-v*r,t[4]=-o*d,t[8]=g+p*r,t[1]=p+g*r,t[5]=o*h,t[9]=v-f*r,t[2]=-o*c,t[6]=r,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,p=o*d,g=r*h,v=r*d;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=r*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=r*l,v=r*c;t[0]=l*h,t[4]=v-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*h,t[9]=-r*h,t[2]=-c*h,t[6]=p*d+g,t[10]=f-v*d}else if(e.order==="XZY"){const f=o*l,p=o*c,g=r*l,v=r*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+v,t[5]=o*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=r*h,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pf,e,mf)}lookAt(e,t,i){const a=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Gn.crossVectors(i,Ht),Gn.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Gn.crossVectors(i,Ht)),Gn.normalize(),Xa.crossVectors(Ht,Gn),a[0]=Gn.x,a[4]=Xa.x,a[8]=Ht.x,a[1]=Gn.y,a[5]=Xa.y,a[9]=Ht.y,a[2]=Gn.z,a[6]=Xa.z,a[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,o=i[0],r=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],g=i[2],v=i[6],m=i[10],u=i[14],_=i[3],w=i[7],x=i[11],S=i[15],E=a[0],R=a[4],C=a[8],b=a[12],y=a[1],A=a[5],P=a[9],I=a[13],U=a[2],k=a[6],H=a[10],V=a[14],z=a[3],j=a[7],ee=a[11],oe=a[15];return s[0]=o*E+r*y+l*U+c*z,s[4]=o*R+r*A+l*k+c*j,s[8]=o*C+r*P+l*H+c*ee,s[12]=o*b+r*I+l*V+c*oe,s[1]=h*E+d*y+f*U+p*z,s[5]=h*R+d*A+f*k+p*j,s[9]=h*C+d*P+f*H+p*ee,s[13]=h*b+d*I+f*V+p*oe,s[2]=g*E+v*y+m*U+u*z,s[6]=g*R+v*A+m*k+u*j,s[10]=g*C+v*P+m*H+u*ee,s[14]=g*b+v*I+m*V+u*oe,s[3]=_*E+w*y+x*U+S*z,s[7]=_*R+w*A+x*k+S*j,s[11]=_*C+w*P+x*H+S*ee,s[15]=_*b+w*I+x*V+S*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],s=e[12],o=e[1],r=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],u=e[15];return g*(+s*l*d-a*c*d-s*r*f+i*c*f+a*r*p-i*l*p)+v*(+t*l*p-t*c*f+s*o*f-a*o*p+a*c*h-s*l*h)+m*(+t*c*d-t*r*p-s*o*d+i*o*p+s*r*h-i*c*h)+u*(-a*r*h-t*l*d+t*r*f+a*o*d-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],o=e[4],r=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],u=e[15],_=d*m*c-v*f*c+v*l*p-r*m*p-d*l*u+r*f*u,w=g*f*c-h*m*c-g*l*p+o*m*p+h*l*u-o*f*u,x=h*v*c-g*d*c+g*r*p-o*v*p-h*r*u+o*d*u,S=g*d*l-h*v*l-g*r*f+o*v*f+h*r*m-o*d*m,E=t*_+i*w+a*x+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=_*R,e[1]=(v*f*s-d*m*s-v*a*p+i*m*p+d*a*u-i*f*u)*R,e[2]=(r*m*s-v*l*s+v*a*c-i*m*c-r*a*u+i*l*u)*R,e[3]=(d*l*s-r*f*s-d*a*c+i*f*c+r*a*p-i*l*p)*R,e[4]=w*R,e[5]=(h*m*s-g*f*s+g*a*p-t*m*p-h*a*u+t*f*u)*R,e[6]=(g*l*s-o*m*s-g*a*c+t*m*c+o*a*u-t*l*u)*R,e[7]=(o*f*s-h*l*s+h*a*c-t*f*c-o*a*p+t*l*p)*R,e[8]=x*R,e[9]=(g*d*s-h*v*s-g*i*p+t*v*p+h*i*u-t*d*u)*R,e[10]=(o*v*s-g*r*s+g*i*c-t*v*c-o*i*u+t*r*u)*R,e[11]=(h*r*s-o*d*s-h*i*c+t*d*c+o*i*p-t*r*p)*R,e[12]=S*R,e[13]=(h*v*a-g*d*a+g*i*f-t*v*f-h*i*m+t*d*m)*R,e[14]=(g*r*a-o*v*a-g*i*l+t*v*l+o*i*m-t*r*m)*R,e[15]=(o*d*a-h*r*a+h*i*l-t*d*l-o*i*f+t*r*f)*R,this}scale(e){const t=this.elements,i=e.x,a=e.y,s=e.z;return t[0]*=i,t[4]*=a,t[8]*=s,t[1]*=i,t[5]*=a,t[9]*=s,t[2]*=i,t[6]*=a,t[10]*=s,t[3]*=i,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),s=1-i,o=e.x,r=e.y,l=e.z,c=s*o,h=s*r;return this.set(c*o+i,c*r-a*l,c*l+a*r,0,c*r+a*l,h*r+i,h*l-a*o,0,c*l-a*r,h*l+a*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,s,o){return this.set(1,i,s,0,e,1,o,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,s=t._x,o=t._y,r=t._z,l=t._w,c=s+s,h=o+o,d=r+r,f=s*c,p=s*h,g=s*d,v=o*h,m=o*d,u=r*d,_=l*c,w=l*h,x=l*d,S=i.x,E=i.y,R=i.z;return a[0]=(1-(v+u))*S,a[1]=(p+x)*S,a[2]=(g-w)*S,a[3]=0,a[4]=(p-x)*E,a[5]=(1-(f+u))*E,a[6]=(m+_)*E,a[7]=0,a[8]=(g+w)*R,a[9]=(m-_)*R,a[10]=(1-(f+v))*R,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let s=Mi.set(a[0],a[1],a[2]).length();const o=Mi.set(a[4],a[5],a[6]).length(),r=Mi.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],on.copy(this);const c=1/s,h=1/o,d=1/r;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,t.setFromRotationMatrix(on),i.x=s,i.y=o,i.z=r,this}makePerspective(e,t,i,a,s,o,r=mn,l=!1){const c=this.elements,h=2*s/(t-e),d=2*s/(i-a),f=(t+e)/(t-e),p=(i+a)/(i-a);let g,v;if(l)g=s/(o-s),v=o*s/(o-s);else if(r===mn)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(r===Cs)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,a,s,o,r=mn,l=!1){const c=this.elements,h=2/(t-e),d=2/(i-a),f=-(t+e)/(t-e),p=-(i+a)/(i-a);let g,v;if(l)g=1/(o-s),v=o/(o-s);else if(r===mn)g=-2/(o-s),v=-(o+s)/(o-s);else if(r===Cs)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Mi=new F,on=new ot,pf=new F(0,0,0),mf=new F(1,1,1),Gn=new F,Xa=new F,Ht=new F,Pl=new ot,Ll=new Kn;class wn{constructor(e=0,t=0,i=0,a=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,s=a[0],o=a[4],r=a[8],l=a[1],c=a[5],h=a[9],d=a[2],f=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(Xe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(r,p));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Pl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class Bh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gf=0;const Il=new F,Si=new Kn,Mn=new ot,$a=new F,ra=new F,vf=new F,_f=new Kn,Ul=new F(1,0,0),Nl=new F(0,1,0),Fl=new F(0,0,1),kl={type:"added"},wf={type:"removed"},Ei={type:"childadded",child:null},oo={type:"childremoved",child:null};class Yt extends ta{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new F,t=new wn,i=new Kn,a=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ot},normalMatrix:{value:new ze}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.multiply(Si),this}rotateOnWorldAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.premultiply(Si),this}rotateX(e){return this.rotateOnAxis(Ul,e)}rotateY(e){return this.rotateOnAxis(Nl,e)}rotateZ(e){return this.rotateOnAxis(Fl,e)}translateOnAxis(e,t){return Il.copy(e).applyQuaternion(this.quaternion),this.position.add(Il.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ul,e)}translateY(e){return this.translateOnAxis(Nl,e)}translateZ(e){return this.translateOnAxis(Fl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$a.copy(e):$a.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(ra,$a,this.up):Mn.lookAt($a,ra,this.up),this.quaternion.setFromRotationMatrix(Mn),a&&(Mn.extractRotation(a.matrixWorld),Si.setFromRotationMatrix(Mn),this.quaternion.premultiply(Si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kl),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wf),oo.child=e,this.dispatchEvent(oo),oo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kl),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,vf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,_f,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(r=>({...r,boundingBox:r.boundingBox?r.boundingBox.toJSON():void 0,boundingSphere:r.boundingSphere?r.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(r=>({...r})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(s(e.materials,this.material[l]));a.material=r}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let r=0;r<this.children.length;r++)a.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];a.animations.push(s(e.animations,l))}}if(t){const r=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);r.length>0&&(i.geometries=r),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=a,i;function o(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Yt.DEFAULT_UP=new F(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new F,Sn=new F,ro=new F,En=new F,Ti=new F,Ai=new F,Ol=new F,lo=new F,co=new F,ho=new F,uo=new vt,fo=new vt,po=new vt;class hn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),rn.subVectors(e,t),a.cross(rn);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,i,a,s){rn.subVectors(a,t),Sn.subVectors(i,t),ro.subVectors(e,t);const o=rn.dot(rn),r=rn.dot(Sn),l=rn.dot(ro),c=Sn.dot(Sn),h=Sn.dot(ro),d=o*c-r*r;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-r*h)*f,g=(o*h-r*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,i,a,s,o,r,l){return this.getBarycoord(e,t,i,a,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,En.x),l.addScaledVector(o,En.y),l.addScaledVector(r,En.z),l)}static getInterpolatedAttribute(e,t,i,a,s,o){return uo.setScalar(0),fo.setScalar(0),po.setScalar(0),uo.fromBufferAttribute(e,t),fo.fromBufferAttribute(e,i),po.fromBufferAttribute(e,a),o.setScalar(0),o.addScaledVector(uo,s.x),o.addScaledVector(fo,s.y),o.addScaledVector(po,s.z),o}static isFrontFacing(e,t,i,a){return rn.subVectors(i,t),Sn.subVectors(e,t),rn.cross(Sn).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),rn.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,s){return hn.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,s=this.c;let o,r;Ti.subVectors(a,i),Ai.subVectors(s,i),lo.subVectors(e,i);const l=Ti.dot(lo),c=Ai.dot(lo);if(l<=0&&c<=0)return t.copy(i);co.subVectors(e,a);const h=Ti.dot(co),d=Ai.dot(co);if(h>=0&&d<=h)return t.copy(a);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Ti,o);ho.subVectors(e,s);const p=Ti.dot(ho),g=Ai.dot(ho);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return r=c/(c-g),t.copy(i).addScaledVector(Ai,r);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Ol.subVectors(s,a),r=(d-h)/(d-h+(p-g)),t.copy(a).addScaledVector(Ol,r);const u=1/(m+v+f);return o=v*u,r=f*u,t.copy(i).addScaledVector(Ti,o).addScaledVector(Ai,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},qa={h:0,s:0,l:0};function mo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Te{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=Ze.workingColorSpace){if(e=tl(e,1),t=Xe(t,0,1),i=Xe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=mo(o,s,e+1/3),this.g=mo(o,s,e),this.b=mo(o,s,e-1/3)}return Ze.colorSpaceToWorking(this,a),this}setStyle(e,t=Qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=a[1],r=a[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=Hh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}copyLinearToSRGB(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Ze.workingToColorSpace(Rt.copy(this),e),Math.round(Xe(Rt.r*255,0,255))*65536+Math.round(Xe(Rt.g*255,0,255))*256+Math.round(Xe(Rt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Rt.copy(this),t);const i=Rt.r,a=Rt.g,s=Rt.b,o=Math.max(i,a,s),r=Math.min(i,a,s);let l,c;const h=(r+o)/2;if(r===o)l=0,c=0;else{const d=o-r;switch(c=h<=.5?d/(o+r):d/(2-o-r),o){case i:l=(a-s)/d+(a<s?6:0);break;case a:l=(s-i)/d+2;break;case s:l=(i-a)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Qt){Ze.workingToColorSpace(Rt.copy(this),e);const t=Rt.r,i=Rt.g,a=Rt.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(qa);const i=_a(Vn.h,qa.h,t),a=_a(Vn.s,qa.s,t),s=_a(Vn.l,qa.l,t);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*a,this.g=s[1]*t+s[4]*i+s[7]*a,this.b=s[2]*t+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new Te;Te.NAMES=Hh;let xf=0;class ks extends ta{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=na(),this.name="",this.type="Material",this.blending=Hi,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jo,this.blendDst=Qo,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ml,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(i.blending=this.blending),this.side!==gn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jo&&(i.blendSrc=this.blendSrc),this.blendDst!==Qo&&(i.blendDst=this.blendDst),this.blendEquation!==hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ml&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const o=[];for(const r in s){const l=s[r];delete l.metadata,o.push(l)}return o}if(t){const s=a(e.textures),o=a(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gh extends ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ln=yf();function yf(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),a=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,a[l]=24,a[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,a[l]=-c-1,a[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,a[l]=13,a[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,a[l]=24,a[l|256]=24):(i[l]=31744,i[l|256]=64512,a[l]=13,a[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),r=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(r[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:a,mantissaTable:s,exponentTable:o,offsetTable:r}}function bf(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=Xe(n,-65504,65504),Ln.floatView[0]=n;const e=Ln.uint32View[0],t=e>>23&511;return Ln.baseTable[t]+((e&8388607)>>Ln.shiftTable[t])}function Mf(n){const e=n>>10;return Ln.uint32View[0]=Ln.mantissaTable[Ln.offsetTable[e]+(n&1023)]+Ln.exponentTable[e],Ln.floatView[0]}class Vh{static toHalfFloat(e){return bf(e)}static fromHalfFloat(e){return Mf(e)}}const _t=new F,Ya=new ke;let Sf=0;class dt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sl,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ya.fromBufferAttribute(this,t),Ya.applyMatrix3(e),this.setXY(t,Ya.x,Ya.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),a=It(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),a=It(a,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sl&&(e.usage=this.usage),e}}class Os extends dt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class zs extends dt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class qt extends dt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ef=0;const Kt=new ot,go=new Yt,Ri=new F,Gt=new Ca,la=new Ca,Mt=new F;class Tt extends ta{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=na(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kh(e)?zs:Os)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,i){return Kt.makeTranslation(e,t,i),this.applyMatrix4(Kt),this}scale(e,t,i){return Kt.makeScale(e,t,i),this.applyMatrix4(Kt),this}lookAt(e){return go.lookAt(e),go.updateMatrix(),this.applyMatrix4(go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,s=e.length;a<s;a++){const o=e[a];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qt(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const s=e[a];t.setXYZ(a,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ca);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const r=t[s];la.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(Gt.min,la.min),Gt.expandByPoint(Mt),Mt.addVectors(Gt.max,la.max),Gt.expandByPoint(Mt)):(Gt.expandByPoint(la.min),Gt.expandByPoint(la.max))}Gt.getCenter(i);let a=0;for(let s=0,o=e.count;s<o;s++)Mt.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(Mt));if(t)for(let s=0,o=t.length;s<o;s++){const r=t[s],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)Mt.fromBufferAttribute(r,c),l&&(Ri.fromBufferAttribute(e,c),Mt.add(Ri)),a=Math.max(a,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),r=[],l=[];for(let C=0;C<i.count;C++)r[C]=new F,l[C]=new F;const c=new F,h=new F,d=new F,f=new ke,p=new ke,g=new ke,v=new F,m=new F;function u(C,b,y){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,b),d.fromBufferAttribute(i,y),f.fromBufferAttribute(s,C),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,y),h.sub(c),d.sub(c),p.sub(f),g.sub(f);const A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(A),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(A),r[C].add(v),r[b].add(v),r[y].add(v),l[C].add(m),l[b].add(m),l[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,b=_.length;C<b;++C){const y=_[C],A=y.start,P=y.count;for(let I=A,U=A+P;I<U;I+=3)u(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const w=new F,x=new F,S=new F,E=new F;function R(C){S.fromBufferAttribute(a,C),E.copy(S);const b=r[C];w.copy(b),w.sub(S.multiplyScalar(S.dot(b))).normalize(),x.crossVectors(E,b);const A=x.dot(l[C])<0?-1:1;o.setXYZW(C,w.x,w.y,w.z,A)}for(let C=0,b=_.length;C<b;++C){const y=_[C],A=y.start,P=y.count;for(let I=A,U=A+P;I<U;I+=3)R(e.getX(I+0)),R(e.getX(I+1)),R(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const a=new F,s=new F,o=new F,r=new F,l=new F,c=new F,h=new F,d=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);a.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,s),d.subVectors(a,s),h.cross(d),r.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),r.add(h),l.add(h),c.add(h),i.setXYZ(g,r.x,r.y,r.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)a.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),d.subVectors(a,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(r,l){const c=r.array,h=r.itemSize,d=r.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){r.isInterleavedBufferAttribute?p=l[v]*r.data.stride+r.offset:p=l[v]*h;for(let u=0;u<h;u++)f[g++]=c[p++]}return new dt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,i=this.index.array,a=this.attributes;for(const r in a){const l=a[r],c=e(l,i);t.setAttribute(r,c)}const s=this.morphAttributes;for(const r in s){const l=[],c=s[r];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=e(f,i);l.push(p)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,l=o.length;r<l;r++){const c=o[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(a[l]=h,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere=r.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const h=a[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zl=new ot,ni=new ff,ja=new kn,Bl=new F,Za=new F,Ka=new F,Ja=new F,vo=new F,Qa=new F,Hl=new F,es=new F;class xt extends Yt{constructor(e=new Tt,t=new Gh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=a.length;s<o;s++){const r=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const r=this.morphTargetInfluences;if(s&&r){Qa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=r[l],d=s[l];h!==0&&(vo.fromBufferAttribute(d,e),o?Qa.addScaledVector(vo,h):Qa.addScaledVector(vo.sub(t),h))}t.add(Qa)}return t}raycast(e,t){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(s),ni.copy(e.ray).recast(e.near),!(ja.containsPoint(ni.origin)===!1&&(ni.intersectSphere(ja,Bl)===null||ni.origin.distanceToSquared(Bl)>(e.far-e.near)**2))&&(zl.copy(s).invert(),ni.copy(e.ray).applyMatrix4(zl),!(i.boundingBox!==null&&ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,i){let a;const s=this.geometry,o=this.material,r=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(r!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],u=o[m.materialIndex],_=Math.max(m.start,p.start),w=Math.min(r.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,S=w;x<S;x+=3){const E=r.getX(x),R=r.getX(x+1),C=r.getX(x+2);a=ts(this,u,e,i,c,h,d,E,R,C),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,p.start),v=Math.min(r.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){const _=r.getX(m),w=r.getX(m+1),x=r.getX(m+2);a=ts(this,o,e,i,c,h,d,_,w,x),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],u=o[m.materialIndex],_=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,S=w;x<S;x+=3){const E=x,R=x+1,C=x+2;a=ts(this,u,e,i,c,h,d,E,R,C),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){const _=m,w=m+1,x=m+2;a=ts(this,o,e,i,c,h,d,_,w,x),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function Tf(n,e,t,i,a,s,o,r){let l;if(e.side===kt?l=i.intersectTriangle(o,s,a,!0,r):l=i.intersectTriangle(a,s,o,e.side===gn,r),l===null)return null;es.copy(r),es.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(es);return c<t.near||c>t.far?null:{distance:c,point:es.clone(),object:n}}function ts(n,e,t,i,a,s,o,r,l,c){n.getVertexPosition(r,Za),n.getVertexPosition(l,Ka),n.getVertexPosition(c,Ja);const h=Tf(n,e,t,i,Za,Ka,Ja,Hl);if(h){const d=new F;hn.getBarycoord(Hl,Za,Ka,Ja,d),a&&(h.uv=hn.getInterpolatedAttribute(a,r,l,c,d,new ke)),s&&(h.uv1=hn.getInterpolatedAttribute(s,r,l,c,d,new ke)),o&&(h.normal=hn.getInterpolatedAttribute(o,r,l,c,d,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:r,b:l,c,normal:new F,materialIndex:0};hn.getNormal(Za,Ka,Ja,f.normal),h.face=f,h.barycoord=d}return h}class Da extends Tt{constructor(e=1,t=1,i=1,a=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:s,depthSegments:o};const r=this;a=Math.floor(a),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,a,o,2),g("x","z","y",1,-1,e,i,-t,a,o,3),g("x","y","z",1,-1,e,t,i,a,s,4),g("x","y","z",-1,-1,e,t,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(d,2));function g(v,m,u,_,w,x,S,E,R,C,b){const y=x/R,A=S/C,P=x/2,I=S/2,U=E/2,k=R+1,H=C+1;let V=0,z=0;const j=new F;for(let ee=0;ee<H;ee++){const oe=ee*A-I;for(let Ee=0;Ee<k;Ee++){const Ge=Ee*y-P;j[v]=Ge*_,j[m]=oe*w,j[u]=U,c.push(j.x,j.y,j.z),j[v]=0,j[m]=0,j[u]=E>0?1:-1,h.push(j.x,j.y,j.z),d.push(Ee/R),d.push(1-ee/C),V+=1}}for(let ee=0;ee<C;ee++)for(let oe=0;oe<R;oe++){const Ee=f+oe+k*ee,Ge=f+oe+k*(ee+1),Fe=f+(oe+1)+k*(ee+1),Le=f+(oe+1)+k*ee;l.push(Ee,Ge,Le),l.push(Ge,Fe,Le),z+=6}r.addGroup(p,z,b),p+=z,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ji(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function Ut(n){const e={};for(let t=0;t<n.length;t++){const i=ji(n[t]);for(const a in i)e[a]=i[a]}return e}function Af(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Wh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Rf={clone:ji,merge:Ut};var Cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Df=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cf,this.fragmentShader=Df,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=Af(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const o=this.uniforms[a].value;o&&o.isTexture?t.uniforms[a]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[a]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[a]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[a]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[a]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[a]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[a]={type:"m4",value:o.toArray()}:t.uniforms[a]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class il extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new F,Gl=new ke,Vl=new ke;class en extends il{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ea*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ea*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z)}getViewSize(e,t){return this.getViewBounds(e,Gl,Vl),t.subVectors(Vl,Gl)}setViewOffset(e,t,i,a,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(va*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,s=-.5*a;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*a/l,t-=o.offsetY*i/c,a*=o.width/l,i*=o.height/c}const r=this.filmOffset;r!==0&&(s+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ci=-90,Di=1;class Pf extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new en(Ci,Di,e,t);a.layers=this.layers,this.add(a);const s=new en(Ci,Di,e,t);s.layers=this.layers,this.add(s);const o=new en(Ci,Di,e,t);o.layers=this.layers,this.add(o);const r=new en(Ci,Di,e,t);r.layers=this.layers,this.add(r);const l=new en(Ci,Di,e,t);l.layers=this.layers,this.add(l);const c=new en(Ci,Di,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,s,o,r,l]=t;for(const c of t)this.remove(c);if(e===mn)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cs)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,r,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,s),e.setRenderTarget(i,1,a),e.render(t,o),e.setRenderTarget(i,2,a),e.render(t,r),e.setRenderTarget(i,3,a),e.render(t,l),e.setRenderTarget(i,4,a),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,a),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Xh extends Dt{constructor(e=[],t=qi,i,a,s,o,r,l,c,h){super(e,t,i,a,s,o,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $h extends Pt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Xh(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Da(5,5,5),s=new On({name:"CubemapFromEquirect",uniforms:ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:jn});s.uniforms.tEquirect.value=t;const o=new xt(a,s),r=t.minFilter;return t.minFilter===In&&(t.minFilter=ht),new Pf(1,10,this).update(e,o),t.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,a);e.setRenderTarget(s)}}class qn extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lf={type:"move"};class _o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,s=null,o=null;const r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(r.matrix.fromArray(a.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,a.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(a.linearVelocity)):r.hasLinearVelocity=!1,a.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(a.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Lf)))}return r!==null&&(r.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new qn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Un extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Pa extends Dt{constructor(e=null,t=1,i=1,a,s,o,r,l,c=mt,h=mt,d,f){super(null,o,r,l,c,h,a,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class If extends dt{constructor(e,t,i,a=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const wo=new F,Uf=new F,Nf=new ze;class li{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=wo.subVectors(i,t).cross(Uf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(wo),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Nf.getNormalMatrix(e),a=this.coplanarPoint(wo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new kn,Ff=new ke(.5,.5),ns=new F;class qh{constructor(e=new li,t=new li,i=new li,a=new li,s=new li,o=new li){this.planes=[e,t,i,a,s,o]}set(e,t,i,a,s,o){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(i),r[3].copy(a),r[4].copy(s),r[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=mn,i=!1){const a=this.planes,s=e.elements,o=s[0],r=s[1],l=s[2],c=s[3],h=s[4],d=s[5],f=s[6],p=s[7],g=s[8],v=s[9],m=s[10],u=s[11],_=s[12],w=s[13],x=s[14],S=s[15];if(a[0].setComponents(c-o,p-h,u-g,S-_).normalize(),a[1].setComponents(c+o,p+h,u+g,S+_).normalize(),a[2].setComponents(c+r,p+d,u+v,S+w).normalize(),a[3].setComponents(c-r,p-d,u-v,S-w).normalize(),i)a[4].setComponents(l,f,m,x).normalize(),a[5].setComponents(c-l,p-f,u-m,S-x).normalize();else if(a[4].setComponents(c-l,p-f,u-m,S-x).normalize(),t===mn)a[5].setComponents(c+l,p+f,u+m,S+x).normalize();else if(t===Cs)a[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){ii.center.set(0,0,0);const t=Ff.distanceTo(e.center);return ii.radius=.7071067811865476+t,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(ns.x=a.normal.x>0?e.max.x:e.min.x,ns.y=a.normal.y>0?e.max.y:e.min.y,ns.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ns)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kf extends Dt{constructor(e,t,i,a,s,o,r,l,c){super(e,t,i,a,s,o,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class La extends Dt{constructor(e,t,i=vn,a,s,o,r=mt,l=mt,c,h=Zn,d=1){if(h!==Zn&&h!==Sa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,a,s,o,r,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Yh extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bs extends Tt{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const s=e/2,o=t/2,r=Math.floor(i),l=Math.floor(a),c=r+1,h=l+1,d=e/r,f=t/l,p=[],g=[],v=[],m=[];for(let u=0;u<h;u++){const _=u*f-o;for(let w=0;w<c;w++){const x=w*d-s;g.push(x,-_,0),v.push(0,0,1),m.push(w/r),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<r;_++){const w=_+c*u,x=_+c*(u+1),S=_+1+c*(u+1),E=_+1+c*u;p.push(w,x,E),p.push(x,S,E)}this.setIndex(p),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.width,e.height,e.widthSegments,e.heightSegments)}}class nn extends On{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Of extends ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zf extends ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Hs extends il{constructor(e=-1,t=1,i=1,a=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,o=i+e,r=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,r,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Wl extends Tt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Bf extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Hf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Xl(n,e,t,i){const a=Gf(i);switch(t){case Ih:return n*e;case mi:return n*e/a.components*a.byteLength;case Jr:return n*e/a.components*a.byteLength;case Nh:return n*e*2/a.components*a.byteLength;case Qr:return n*e*2/a.components*a.byteLength;case Uh:return n*e*3/a.components*a.byteLength;case wt:return n*e*4/a.components*a.byteLength;case el:return n*e*4/a.components*a.byteLength;case vs:case _s:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ws:case xs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ur:case fr:return Math.max(n,16)*Math.max(e,8)/4;case hr:case dr:return Math.max(n,8)*Math.max(e,8)/2;case pr:case mr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _r:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case wr:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case xr:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case yr:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case br:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Mr:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Sr:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Er:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Tr:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ar:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Rr:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Cr:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Dr:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Pr:case Lr:case Ir:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ur:case Nr:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Fr:case kr:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gf(n){switch(n){case Et:case Ch:return{byteLength:1,components:1};case ba:case Dh:case _n:return{byteLength:2,components:1};case Zr:case Kr:return{byteLength:2,components:4};case vn:case jr:case pn:return{byteLength:4,components:1};case Ph:case Lh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yr);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jh(){let n=null,e=!1,t=null,i=null;function a(s,o){t(s,o),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Vf(n){const e=new WeakMap;function t(r,l){const c=r.array,h=r.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),r.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:d}}function i(r,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,r),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const v=d[p];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(r){return r.isInterleavedBufferAttribute&&(r=r.data),e.get(r)}function s(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=e.get(r);l&&(n.deleteBuffer(l.buffer),e.delete(r))}function o(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const h=e.get(r);(!h||h.version<r.version)&&e.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=e.get(r);if(c===void 0)e.set(r,t(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,r,l),c.version=r.version}}return{get:a,remove:s,update:o}}var Wf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xf=`#ifdef USE_ALPHAHASH
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
#endif`,$f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zf=`#ifdef USE_AOMAP
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
#endif`,Kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jf=`#ifdef USE_BATCHING
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
#endif`,Qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,np=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ip=`#ifdef USE_IRIDESCENCE
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
#endif`,ap=`#ifdef USE_BUMPMAP
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
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fp=`#define PI 3.141592653589793
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
} // validated`,pp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mp=`vec3 transformedNormal = objectNormal;
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
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",yp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pp=`#ifdef USE_GRADIENTMAP
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
}`,Lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Np=`uniform bool receiveShadow;
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
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hp=`PhysicalMaterial material;
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
#endif`,Gp=`struct PhysicalMaterial {
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
}`,Vp=`
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
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$p=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qp=`#if defined( USE_POINTS_UV )
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
#endif`,em=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`#ifdef USE_MORPHTARGETS
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
#endif`,om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dm=`#ifdef USE_NORMALMAP
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
#endif`,fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_m=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rm=`float getShadowMask() {
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
}`,Cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dm=`#ifdef USE_SKINNING
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
#endif`,Pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lm=`#ifdef USE_SKINNING
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
#endif`,Im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,km=`#ifdef USE_TRANSMISSION
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
#endif`,Om=`#ifdef USE_TRANSMISSION
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wm=`uniform sampler2D t2D;
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
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`#include <common>
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
}`,Zm=`#if DEPTH_PACKING == 3200
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
}`,Km=`#define DISTANCE
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
}`,Jm=`#define DISTANCE
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`uniform float scale;
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#include <common>
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
}`,ag=`uniform vec3 diffuse;
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
}`,sg=`#define LAMBERT
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
}`,og=`#define LAMBERT
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
}`,rg=`#define MATCAP
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
}`,lg=`#define MATCAP
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
}`,cg=`#define NORMAL
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
}`,hg=`#define NORMAL
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
}`,ug=`#define PHONG
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
}`,dg=`#define PHONG
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
}`,fg=`#define STANDARD
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
}`,pg=`#define STANDARD
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
}`,mg=`#define TOON
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
}`,gg=`#define TOON
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
}`,vg=`uniform float size;
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
}`,_g=`uniform vec3 diffuse;
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
}`,wg=`#include <common>
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
}`,xg=`uniform vec3 color;
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
}`,yg=`uniform float rotation;
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
}`,bg=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:Wf,alphahash_pars_fragment:Xf,alphamap_fragment:$f,alphamap_pars_fragment:qf,alphatest_fragment:Yf,alphatest_pars_fragment:jf,aomap_fragment:Zf,aomap_pars_fragment:Kf,batching_pars_vertex:Jf,batching_vertex:Qf,begin_vertex:ep,beginnormal_vertex:tp,bsdfs:np,iridescence_fragment:ip,bumpmap_pars_fragment:ap,clipping_planes_fragment:sp,clipping_planes_pars_fragment:op,clipping_planes_pars_vertex:rp,clipping_planes_vertex:lp,color_fragment:cp,color_pars_fragment:hp,color_pars_vertex:up,color_vertex:dp,common:fp,cube_uv_reflection_fragment:pp,defaultnormal_vertex:mp,displacementmap_pars_vertex:gp,displacementmap_vertex:vp,emissivemap_fragment:_p,emissivemap_pars_fragment:wp,colorspace_fragment:xp,colorspace_pars_fragment:yp,envmap_fragment:bp,envmap_common_pars_fragment:Mp,envmap_pars_fragment:Sp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Fp,envmap_vertex:Tp,fog_vertex:Ap,fog_pars_vertex:Rp,fog_fragment:Cp,fog_pars_fragment:Dp,gradientmap_pars_fragment:Pp,lightmap_pars_fragment:Lp,lights_lambert_fragment:Ip,lights_lambert_pars_fragment:Up,lights_pars_begin:Np,lights_toon_fragment:kp,lights_toon_pars_fragment:Op,lights_phong_fragment:zp,lights_phong_pars_fragment:Bp,lights_physical_fragment:Hp,lights_physical_pars_fragment:Gp,lights_fragment_begin:Vp,lights_fragment_maps:Wp,lights_fragment_end:Xp,logdepthbuf_fragment:$p,logdepthbuf_pars_fragment:qp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:jp,map_fragment:Zp,map_pars_fragment:Kp,map_particle_fragment:Jp,map_particle_pars_fragment:Qp,metalnessmap_fragment:em,metalnessmap_pars_fragment:tm,morphinstance_vertex:nm,morphcolor_vertex:im,morphnormal_vertex:am,morphtarget_pars_vertex:sm,morphtarget_vertex:om,normal_fragment_begin:rm,normal_fragment_maps:lm,normal_pars_fragment:cm,normal_pars_vertex:hm,normal_vertex:um,normalmap_pars_fragment:dm,clearcoat_normal_fragment_begin:fm,clearcoat_normal_fragment_maps:pm,clearcoat_pars_fragment:mm,iridescence_pars_fragment:gm,opaque_fragment:vm,packing:_m,premultiplied_alpha_fragment:wm,project_vertex:xm,dithering_fragment:ym,dithering_pars_fragment:bm,roughnessmap_fragment:Mm,roughnessmap_pars_fragment:Sm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:Tm,shadowmap_vertex:Am,shadowmask_pars_fragment:Rm,skinbase_vertex:Cm,skinning_pars_vertex:Dm,skinning_vertex:Pm,skinnormal_vertex:Lm,specularmap_fragment:Im,specularmap_pars_fragment:Um,tonemapping_fragment:Nm,tonemapping_pars_fragment:Fm,transmission_fragment:km,transmission_pars_fragment:Om,uv_pars_fragment:zm,uv_pars_vertex:Bm,uv_vertex:Hm,worldpos_vertex:Gm,background_vert:Vm,background_frag:Wm,backgroundCube_vert:Xm,backgroundCube_frag:$m,cube_vert:qm,cube_frag:Ym,depth_vert:jm,depth_frag:Zm,distanceRGBA_vert:Km,distanceRGBA_frag:Jm,equirect_vert:Qm,equirect_frag:eg,linedashed_vert:tg,linedashed_frag:ng,meshbasic_vert:ig,meshbasic_frag:ag,meshlambert_vert:sg,meshlambert_frag:og,meshmatcap_vert:rg,meshmatcap_frag:lg,meshnormal_vert:cg,meshnormal_frag:hg,meshphong_vert:ug,meshphong_frag:dg,meshphysical_vert:fg,meshphysical_frag:pg,meshtoon_vert:mg,meshtoon_frag:gg,points_vert:vg,points_frag:_g,shadow_vert:wg,shadow_frag:xg,sprite_vert:yg,sprite_frag:bg},ce={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},fn={basic:{uniforms:Ut([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Ut([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Ut([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Ut([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Ut([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Ut([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Ut([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Ut([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Ut([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Ut([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Ut([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Ut([ce.common,ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Ut([ce.lights,ce.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};fn.physical={uniforms:Ut([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const is={r:0,b:0,g:0},ai=new wn,Mg=new ot;function Sg(n,e,t,i,a,s,o){const r=new Te(0);let l=s===!0?0:1,c,h,d=null,f=0,p=null;function g(w){let x=w.isScene===!0?w.background:null;return x&&x.isTexture&&(x=(w.backgroundBlurriness>0?t:e).get(x)),x}function v(w){let x=!1;const S=g(w);S===null?u(r,l):S&&S.isColor&&(u(S,1),x=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===Fs)?(h===void 0&&(h=new xt(new Da(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:ji(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),ai.copy(x.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(ai)),h.material.toneMapped=Ze.getTransfer(S.colorSpace)!==tt,(d!==S||f!==S.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new xt(new Bs(2,2),new On({name:"BackgroundMaterial",uniforms:ji(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(S.colorSpace)!==tt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function u(w,x){w.getRGB(is,Wh(n)),i.buffers.color.setClear(is.r,is.g,is.b,x,o)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(w,x=1){r.set(w),l=x,u(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,u(r,l)},render:v,addToRenderList:m,dispose:_}}function Eg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=f(null);let s=a,o=!1;function r(y,A,P,I,U){let k=!1;const H=d(I,P,A);s!==H&&(s=H,c(s.object)),k=p(y,I,P,U),k&&g(y,I,P,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,x(y,A,P,I),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function d(y,A,P){const I=P.wireframe===!0;let U=i[y.id];U===void 0&&(U={},i[y.id]=U);let k=U[A.id];k===void 0&&(k={},U[A.id]=k);let H=k[I];return H===void 0&&(H=f(l()),k[I]=H),H}function f(y){const A=[],P=[],I=[];for(let U=0;U<t;U++)A[U]=0,P[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:P,attributeDivisors:I,object:y,attributes:{},index:null}}function p(y,A,P,I){const U=s.attributes,k=A.attributes;let H=0;const V=P.getAttributes();for(const z in V)if(V[z].location>=0){const ee=U[z];let oe=k[z];if(oe===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor)),ee===void 0||ee.attribute!==oe||oe&&ee.data!==oe.data)return!0;H++}return s.attributesNum!==H||s.index!==I}function g(y,A,P,I){const U={},k=A.attributes;let H=0;const V=P.getAttributes();for(const z in V)if(V[z].location>=0){let ee=k[z];ee===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor));const oe={};oe.attribute=ee,ee&&ee.data&&(oe.data=ee.data),U[z]=oe,H++}s.attributes=U,s.attributesNum=H,s.index=I}function v(){const y=s.newAttributes;for(let A=0,P=y.length;A<P;A++)y[A]=0}function m(y){u(y,0)}function u(y,A){const P=s.newAttributes,I=s.enabledAttributes,U=s.attributeDivisors;P[y]=1,I[y]===0&&(n.enableVertexAttribArray(y),I[y]=1),U[y]!==A&&(n.vertexAttribDivisor(y,A),U[y]=A)}function _(){const y=s.newAttributes,A=s.enabledAttributes;for(let P=0,I=A.length;P<I;P++)A[P]!==y[P]&&(n.disableVertexAttribArray(P),A[P]=0)}function w(y,A,P,I,U,k,H){H===!0?n.vertexAttribIPointer(y,A,P,U,k):n.vertexAttribPointer(y,A,P,I,U,k)}function x(y,A,P,I){v();const U=I.attributes,k=P.getAttributes(),H=A.defaultAttributeValues;for(const V in k){const z=k[V];if(z.location>=0){let j=U[V];if(j===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(j=y.instanceColor)),j!==void 0){const ee=j.normalized,oe=j.itemSize,Ee=e.get(j);if(Ee===void 0)continue;const Ge=Ee.buffer,Fe=Ee.type,Le=Ee.bytesPerElement,q=Fe===n.INT||Fe===n.UNSIGNED_INT||j.gpuType===jr;if(j.isInterleavedBufferAttribute){const K=j.data,fe=K.stride,De=j.offset;if(K.isInstancedInterleavedBuffer){for(let we=0;we<z.locationSize;we++)u(z.location+we,K.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let we=0;we<z.locationSize;we++)m(z.location+we);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let we=0;we<z.locationSize;we++)w(z.location+we,oe/z.locationSize,Fe,ee,fe*Le,(De+oe/z.locationSize*we)*Le,q)}else{if(j.isInstancedBufferAttribute){for(let K=0;K<z.locationSize;K++)u(z.location+K,j.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let K=0;K<z.locationSize;K++)m(z.location+K);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let K=0;K<z.locationSize;K++)w(z.location+K,oe/z.locationSize,Fe,ee,oe*Le,oe/z.locationSize*K*Le,q)}}else if(H!==void 0){const ee=H[V];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(z.location,ee);break;case 3:n.vertexAttrib3fv(z.location,ee);break;case 4:n.vertexAttrib4fv(z.location,ee);break;default:n.vertexAttrib1fv(z.location,ee)}}}}_()}function S(){C();for(const y in i){const A=i[y];for(const P in A){const I=A[P];for(const U in I)h(I[U].object),delete I[U];delete A[P]}delete i[y]}}function E(y){if(i[y.id]===void 0)return;const A=i[y.id];for(const P in A){const I=A[P];for(const U in I)h(I[U].object),delete I[U];delete A[P]}delete i[y.id]}function R(y){for(const A in i){const P=i[A];if(P[y.id]===void 0)continue;const I=P[y.id];for(const U in I)h(I[U].object),delete I[U];delete P[y.id]}}function C(){b(),o=!0,s!==a&&(s=a,c(s.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:r,reset:C,resetDefaultState:b,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function Tg(n,e,t){let i;function a(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function r(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,i,1)}function l(c,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*f[v];t.update(g,i,1)}}this.setMode=a,this.render=s,this.renderInstances=o,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function Ag(n,e,t,i){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function o(R){return!(R!==wt&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(R){const C=R===_n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Et&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==pn&&!C)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:x,vertexTextures:S,maxSamples:E}}function Rg(n){const e=this;let t=null,i=0,a=!1,s=!1;const o=new li,r=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||a;return a=f,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,u=n.get(d);if(!a||g===null||g.length===0||s&&!m)s?h(null):c();else{const _=s?0:i,w=_*4;let x=u.clippingState||null;l.value=x,x=h(g,f,w,p);for(let S=0;S!==w;++S)x[S]=t[S];u.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const u=p+v*4,_=f.matrixWorldInverse;r.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let w=0,x=p;w!==v;++w,x+=4)o.copy(d[w]).applyMatrix4(_,r),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Cg(n){let e=new WeakMap;function t(o,r){return r===rr?o.mapping=qi:r===lr&&(o.mapping=Yi),o}function i(o){if(o&&o.isTexture){const r=o.mapping;if(r===rr||r===lr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new $h(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",a),t(c.texture,o.mapping)}else return null}}return o}function a(o){const r=o.target;r.removeEventListener("dispose",a);const l=e.get(r);l!==void 0&&(e.delete(r),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const zi=4,$l=[.125,.215,.35,.446,.526,.582],ui=20,xo=new Hs,ql=new Te;let yo=null,bo=0,Mo=0,So=!1;const ci=(1+Math.sqrt(5))/2,Pi=1/ci,Yl=[new F(-ci,Pi,0),new F(ci,Pi,0),new F(-Pi,0,ci),new F(Pi,0,ci),new F(0,ci,-Pi),new F(0,ci,Pi),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Dg=new F;class jl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100,s={}){const{size:o=256,position:r=Dg}=s;yo=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,r),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yo,bo,Mo),this._renderer.xr.enabled=So,e.scissorTest=!1,as(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===Yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yo=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ht,minFilter:ht,generateMipmaps:!1,type:_n,format:wt,colorSpace:pi,depthBuffer:!1},a=Zl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pg(s)),this._blurMaterial=Lg(s,e,t)}return a}_compileMaterial(e){const t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,xo)}_sceneToCubeUV(e,t,i,a,s){const l=new en(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(ql),d.toneMapping=Nn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(a),d.clearDepth(),d.setRenderTarget(null));const v=new Gh({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),m=new xt(new Da,v);let u=!1;const _=e.background;_?_.isColor&&(v.color.copy(_),e.background=null,u=!0):(v.color.copy(ql),u=!0);for(let w=0;w<6;w++){const x=w%3;x===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[w],s.y,s.z)):x===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[w]));const S=this._cubeSize;as(a,x*S,w>2?S:0,S,S),d.setRenderTarget(a),u&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===qi||e.mapping===Yi;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kl());const s=a?this._cubemapMaterial:this._equirectMaterial,o=new xt(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=e;const l=this._cubeSize;as(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,xo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let s=1;s<a;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),r=Yl[(a-s-1)%Yl.length];this._blur(e,s-1,s,o,r)}t.autoClear=i}_blur(e,t,i,a,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,a,"latitudinal",s),this._halfBlur(o,e,i,i,a,"longitudinal",s)}_halfBlur(e,t,i,a,s,o,r){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new xt(this._lodPlanes[a],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ui-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):ui;m>ui&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);const u=[];let _=0;for(let R=0;R<ui;++R){const C=R/v,b=Math.exp(-C*C/2);u.push(b),R===0?_+=b:R<m&&(_+=2*b)}for(let R=0;R<u.length;R++)u[R]=u[R]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",r&&(f.poleAxis.value=r);const{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-i;const x=this._sizeLods[a],S=3*x*(a>w-zi?a-w+zi:0),E=4*(this._cubeSize-x);as(t,S,E,3*x,2*x),l.setRenderTarget(t),l.render(d,xo)}}function Pg(n){const e=[],t=[],i=[];let a=n;const s=n-zi+1+$l.length;for(let o=0;o<s;o++){const r=Math.pow(2,a);t.push(r);let l=1/r;o>n-zi?l=$l[o-n+zi-1]:o===0&&(l=0),i.push(l);const c=1/(r-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,v=3,m=2,u=1,_=new Float32Array(v*g*p),w=new Float32Array(m*g*p),x=new Float32Array(u*g*p);for(let E=0;E<p;E++){const R=E%3*2/3-1,C=E>2?0:-1,b=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];_.set(b,v*g*E),w.set(f,m*g*E);const y=[E,E,E,E,E,E];x.set(y,u*g*E)}const S=new Tt;S.setAttribute("position",new dt(_,v)),S.setAttribute("uv",new dt(w,m)),S.setAttribute("faceIndex",new dt(x,u)),e.push(S),a>zi&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Zl(n,e,t){const i=new Pt(n,e,t);return i.texture.mapping=Fs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function as(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function Lg(n,e,t){const i=new Float32Array(ui),a=new F(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:al(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Kl(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:al(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Jl(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function al(){return`

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
	`}function Ig(n){let e=new WeakMap,t=null;function i(r){if(r&&r.isTexture){const l=r.mapping,c=l===rr||l===lr,h=l===qi||l===Yi;if(c||h){let d=e.get(r);const f=d!==void 0?d.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==f)return t===null&&(t=new jl(n)),d=c?t.fromEquirectangular(r,d):t.fromCubemap(r,d),d.texture.pmremVersion=r.pmremVersion,e.set(r,d),d.texture;if(d!==void 0)return d.texture;{const p=r.image;return c&&p&&p.height>0||h&&p&&a(p)?(t===null&&(t=new jl(n)),d=c?t.fromEquirectangular(r):t.fromCubemap(r),d.texture.pmremVersion=r.pmremVersion,e.set(r,d),r.addEventListener("dispose",s),d.texture):null}}}return r}function a(r){let l=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function s(r){const l=r.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Ug(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&Ta("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function Ng(n,e,t,i){const a={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete a[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function r(d,f){return a[f.id]===!0||(f.addEventListener("dispose",o),a[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let w=0,x=_.length;w<x;w+=3){const S=_[w+0],E=_[w+1],R=_[w+2];f.push(S,E,E,R,R,S)}}else if(g!==void 0){const _=g.array;v=g.version;for(let w=0,x=_.length/3-1;w<x;w+=3){const S=w+0,E=w+1,R=w+2;f.push(S,E,E,R,R,S)}}else return;const m=new(kh(f)?zs:Os)(f,1);m.version=v;const u=s.get(d);u&&e.remove(u),s.set(d,m)}function h(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:r,update:l,getWireframeAttribute:h}}function Fg(n,e,t){let i;function a(f){i=f}let s,o;function r(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),t.update(p,i,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];t.update(m,i,1)}function d(f,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/o,p[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,v,0,g);let u=0;for(let _=0;_<g;_++)u+=p[_]*v[_];t.update(u,i,1)}}this.setMode=a,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function kg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,r){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=r*(s/3);break;case n.LINES:t.lines+=r*(s/2);break;case n.LINE_STRIP:t.lines+=r*(s-1);break;case n.LINE_LOOP:t.lines+=r*s;break;case n.POINTS:t.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function Og(n,e,t){const i=new WeakMap,a=new vt;function s(o,r,l){const c=o.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(r);if(f===void 0||f.count!==d){let y=function(){C.dispose(),i.delete(r),r.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const g=r.morphAttributes.position!==void 0,v=r.morphAttributes.normal!==void 0,m=r.morphAttributes.color!==void 0,u=r.morphAttributes.position||[],_=r.morphAttributes.normal||[],w=r.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let S=r.attributes.position.count*x,E=1;S>e.maxTextureSize&&(E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const R=new Float32Array(S*E*4*d),C=new Oh(R,S,E,d);C.type=pn,C.needsUpdate=!0;const b=x*4;for(let A=0;A<d;A++){const P=u[A],I=_[A],U=w[A],k=S*E*4*A;for(let H=0;H<P.count;H++){const V=H*b;g===!0&&(a.fromBufferAttribute(P,H),R[k+V+0]=a.x,R[k+V+1]=a.y,R[k+V+2]=a.z,R[k+V+3]=0),v===!0&&(a.fromBufferAttribute(I,H),R[k+V+4]=a.x,R[k+V+5]=a.y,R[k+V+6]=a.z,R[k+V+7]=0),m===!0&&(a.fromBufferAttribute(U,H),R[k+V+8]=a.x,R[k+V+9]=a.y,R[k+V+10]=a.z,R[k+V+11]=U.itemSize===4?a.w:1)}}f={count:d,texture:C,size:new ke(S,E)},i.set(r,f),r.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=r.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function zg(n,e,t,i){let a=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(a.get(d)!==c&&(e.update(d),a.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),a.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==c&&(f.update(),a.set(f,c))}return d}function o(){a=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Zh=new Dt,Ql=new La(1,1),Kh=new Oh,Jh=new zh,Qh=new Xh,ec=[],tc=[],nc=new Float32Array(16),ic=new Float32Array(9),ac=new Float32Array(4);function ia(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let s=ec[a];if(s===void 0&&(s=new Float32Array(a),ec[a]=s),e!==0){i.toArray(s,0);for(let o=1,r=0;o!==e;++o)r+=t,n[o].toArray(s,r)}return s}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Gs(n,e){let t=tc[e];t===void 0&&(t=new Int32Array(e),tc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Bg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function Gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function Vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function Wg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,i))return;ac.set(i),n.uniformMatrix2fv(this.addr,!1,ac),bt(t,i)}}function Xg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,i))return;ic.set(i),n.uniformMatrix3fv(this.addr,!1,ic),bt(t,i)}}function $g(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,i))return;nc.set(i),n.uniformMatrix4fv(this.addr,!1,nc),bt(t,i)}}function qg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),bt(t,e)}}function jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),bt(t,e)}}function Zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),bt(t,e)}}function Kg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),bt(t,e)}}function Qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),bt(t,e)}}function e0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),bt(t,e)}}function t0(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let s;this.type===n.SAMPLER_2D_SHADOW?(Ql.compareFunction=Fh,s=Ql):s=Zh,t.setTexture2D(e||s,a)}function n0(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Jh,a)}function i0(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||Qh,a)}function a0(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Kh,a)}function s0(n){switch(n){case 5126:return Bg;case 35664:return Hg;case 35665:return Gg;case 35666:return Vg;case 35674:return Wg;case 35675:return Xg;case 35676:return $g;case 5124:case 35670:return qg;case 35667:case 35671:return Yg;case 35668:case 35672:return jg;case 35669:case 35673:return Zg;case 5125:return Kg;case 36294:return Jg;case 36295:return Qg;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return a0}}function o0(n,e){n.uniform1fv(this.addr,e)}function r0(n,e){const t=ia(e,this.size,2);n.uniform2fv(this.addr,t)}function l0(n,e){const t=ia(e,this.size,3);n.uniform3fv(this.addr,t)}function c0(n,e){const t=ia(e,this.size,4);n.uniform4fv(this.addr,t)}function h0(n,e){const t=ia(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function u0(n,e){const t=ia(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function d0(n,e){const t=ia(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function f0(n,e){n.uniform1iv(this.addr,e)}function p0(n,e){n.uniform2iv(this.addr,e)}function m0(n,e){n.uniform3iv(this.addr,e)}function g0(n,e){n.uniform4iv(this.addr,e)}function v0(n,e){n.uniform1uiv(this.addr,e)}function _0(n,e){n.uniform2uiv(this.addr,e)}function w0(n,e){n.uniform3uiv(this.addr,e)}function x0(n,e){n.uniform4uiv(this.addr,e)}function y0(n,e,t){const i=this.cache,a=e.length,s=Gs(t,a);yt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==a;++o)t.setTexture2D(e[o]||Zh,s[o])}function b0(n,e,t){const i=this.cache,a=e.length,s=Gs(t,a);yt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==a;++o)t.setTexture3D(e[o]||Jh,s[o])}function M0(n,e,t){const i=this.cache,a=e.length,s=Gs(t,a);yt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==a;++o)t.setTextureCube(e[o]||Qh,s[o])}function S0(n,e,t){const i=this.cache,a=e.length,s=Gs(t,a);yt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==a;++o)t.setTexture2DArray(e[o]||Kh,s[o])}function E0(n){switch(n){case 5126:return o0;case 35664:return r0;case 35665:return l0;case 35666:return c0;case 35674:return h0;case 35675:return u0;case 35676:return d0;case 5124:case 35670:return f0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return v0;case 36294:return _0;case 36295:return w0;case 36296:return x0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return S0}}class T0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=s0(t.type)}}class A0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=E0(t.type)}}class R0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let s=0,o=a.length;s!==o;++s){const r=a[s];r.setValue(e,t[r.id],i)}}}const Eo=/(\w+)(\])?(\[|\.)?/g;function sc(n,e){n.seq.push(e),n.map[e.id]=e}function C0(n,e,t){const i=n.name,a=i.length;for(Eo.lastIndex=0;;){const s=Eo.exec(i),o=Eo.lastIndex;let r=s[1];const l=s[2]==="]",c=s[3];if(l&&(r=r|0),c===void 0||c==="["&&o+2===a){sc(t,c===void 0?new T0(r,n,e):new A0(r,n,e));break}else{let d=t.map[r];d===void 0&&(d=new R0(r),sc(t,d)),t=d}}}class ys{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=e.getActiveUniform(t,a),o=e.getUniformLocation(t,s.name);C0(s,o,this)}}setValue(e,t,i,a){const s=this.map[t];s!==void 0&&s.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let s=0,o=t.length;s!==o;++s){const r=t[s],l=i[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,s=e.length;a!==s;++a){const o=e[a];o.id in t&&i.push(o)}return i}}function oc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const D0=37297;let P0=0;function L0(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=a;o<s;o++){const r=o+1;i.push(`${r===e?">":" "} ${r}: ${t[o]}`)}return i.join(`
`)}const rc=new ze;function I0(n){Ze._getMatrix(rc,Ze.workingColorSpace,n);const e=`mat3( ${rc.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case Rs:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function lc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+L0(n.getShaderSource(e),r)}else return s}function U0(n,e){const t=I0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function N0(n,e){let t;switch(e){case bd:t="Linear";break;case Md:t="Reinhard";break;case Sd:t="Cineon";break;case Ed:t="ACESFilmic";break;case Ad:t="AgX";break;case Rd:t="Neutral";break;case Td:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ss=new F;function F0(){Ze.getLuminanceCoefficients(ss);const n=ss.x.toFixed(4),e=ss.y.toFixed(4),t=ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function O0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function z0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=n.getActiveAttrib(e,a),o=s.name;let r=1;s.type===n.FLOAT_MAT2&&(r=2),s.type===n.FLOAT_MAT3&&(r=3),s.type===n.FLOAT_MAT4&&(r=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:r}}return t}function ma(n){return n!==""}function cc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const B0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Or(n){return n.replace(B0,G0)}const H0=new Map;function G0(n,e){let t=Ve[e];if(t===void 0){const i=H0.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Or(t)}const V0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uc(n){return n.replace(V0,W0)}function W0(n,e,t,i){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function dc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function X0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Eh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Th?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Cn&&(e="SHADOWMAP_TYPE_VSM"),e}function $0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qi:case Yi:e="ENVMAP_TYPE_CUBE";break;case Fs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Yi:e="ENVMAP_MODE_REFRACTION";break}return e}function Y0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ah:e="ENVMAP_BLENDING_MULTIPLY";break;case xd:e="ENVMAP_BLENDING_MIX";break;case yd:e="ENVMAP_BLENDING_ADD";break}return e}function j0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Z0(n,e,t,i){const a=n.getContext(),s=t.defines;let o=t.vertexShader,r=t.fragmentShader;const l=X0(t),c=$0(t),h=q0(t),d=Y0(t),f=j0(t),p=k0(t),g=O0(s),v=a.createProgram();let m,u,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ma).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ma).join(`
`),u.length>0&&(u+=`
`)):(m=[dc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),u=[dc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Nn?N0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,U0("linearToOutputTexel",t.outputColorSpace),F0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ma).join(`
`)),o=Or(o),o=cc(o,t),o=hc(o,t),r=Or(r),r=cc(r,t),r=hc(r,t),o=uc(o),r=uc(r),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===Ot?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ot?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const w=_+m+o,x=_+u+r,S=oc(a,a.VERTEX_SHADER,w),E=oc(a,a.FRAGMENT_SHADER,x);a.attachShader(v,S),a.attachShader(v,E),t.index0AttributeName!==void 0?a.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v);function R(A){if(n.debug.checkShaderErrors){const P=a.getProgramInfoLog(v)||"",I=a.getShaderInfoLog(S)||"",U=a.getShaderInfoLog(E)||"",k=P.trim(),H=I.trim(),V=U.trim();let z=!0,j=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,v,S,E);else{const ee=lc(a,S,"vertex"),oe=lc(a,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+k+`
`+ee+`
`+oe)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(H===""||V==="")&&(j=!1);j&&(A.diagnostics={runnable:z,programLog:k,vertexShader:{log:H,prefix:m},fragmentShader:{log:V,prefix:u}})}a.deleteShader(S),a.deleteShader(E),C=new ys(a,v),b=z0(a,v)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=a.getProgramParameter(v,D0)),y},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=P0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=E,this}let K0=0;class J0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(a)===!1&&(o.add(a),a.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Q0(e),t.set(e,i)),i}}class Q0{constructor(e){this.id=K0++,this.code=e,this.usedTimes=0}}function ev(n,e,t,i,a,s,o){const r=new Bh,l=new J0,c=new Set,h=[],d=a.logarithmicDepthBuffer,f=a.vertexTextures;let p=a.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,A,P,I){const U=P.fog,k=I.geometry,H=b.isMeshStandardMaterial?P.environment:null,V=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),z=V&&V.mapping===Fs?V.image.height:null,j=g[b.type];b.precision!==null&&(p=a.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const ee=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,oe=ee!==void 0?ee.length:0;let Ee=0;k.morphAttributes.position!==void 0&&(Ee=1),k.morphAttributes.normal!==void 0&&(Ee=2),k.morphAttributes.color!==void 0&&(Ee=3);let Ge,Fe,Le,q;if(j){const Je=fn[j];Ge=Je.vertexShader,Fe=Je.fragmentShader}else Ge=b.vertexShader,Fe=b.fragmentShader,l.update(b),Le=l.getVertexShaderID(b),q=l.getFragmentShaderID(b);const K=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),De=I.isInstancedMesh===!0,we=I.isBatchedMesh===!0,We=!!b.map,ut=!!b.matcap,L=!!V,nt=!!b.aoMap,Oe=!!b.lightMap,J=!!b.bumpMap,re=!!b.normalMap,qe=!!b.displacementMap,pe=!!b.emissiveMap,Ie=!!b.metalnessMap,Re=!!b.roughnessMap,Ke=b.anisotropy>0,D=b.clearcoat>0,M=b.dispersion>0,G=b.iridescence>0,Y=b.sheen>0,Q=b.transmission>0,$=Ke&&!!b.anisotropyMap,Me=D&&!!b.clearcoatMap,se=D&&!!b.clearcoatNormalMap,xe=D&&!!b.clearcoatRoughnessMap,ye=G&&!!b.iridescenceMap,ie=G&&!!b.iridescenceThicknessMap,de=Y&&!!b.sheenColorMap,Ue=Y&&!!b.sheenRoughnessMap,be=!!b.specularMap,he=!!b.specularColorMap,He=!!b.specularIntensityMap,N=Q&&!!b.transmissionMap,ae=Q&&!!b.thicknessMap,le=!!b.gradientMap,ge=!!b.alphaMap,te=b.alphaTest>0,Z=!!b.alphaHash,_e=!!b.extensions;let Be=Nn;b.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Be=n.toneMapping);const rt={shaderID:j,shaderType:b.type,shaderName:b.name,vertexShader:Ge,fragmentShader:Fe,defines:b.defines,customVertexShaderID:Le,customFragmentShaderID:q,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:we,batchingColor:we&&I._colorsTexture!==null,instancing:De,instancingColor:De&&I.instanceColor!==null,instancingMorph:De&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:pi,alphaToCoverage:!!b.alphaToCoverage,map:We,matcap:ut,envMap:L,envMapMode:L&&V.mapping,envMapCubeUVHeight:z,aoMap:nt,lightMap:Oe,bumpMap:J,normalMap:re,displacementMap:f&&qe,emissiveMap:pe,normalMapObjectSpace:re&&b.normalMapType===Id,normalMapTangentSpace:re&&b.normalMapType===Ld,metalnessMap:Ie,roughnessMap:Re,anisotropy:Ke,anisotropyMap:$,clearcoat:D,clearcoatMap:Me,clearcoatNormalMap:se,clearcoatRoughnessMap:xe,dispersion:M,iridescence:G,iridescenceMap:ye,iridescenceThicknessMap:ie,sheen:Y,sheenColorMap:de,sheenRoughnessMap:Ue,specularMap:be,specularColorMap:he,specularIntensityMap:He,transmission:Q,transmissionMap:N,thicknessMap:ae,gradientMap:le,opaque:b.transparent===!1&&b.blending===Hi&&b.alphaToCoverage===!1,alphaMap:ge,alphaTest:te,alphaHash:Z,combine:b.combine,mapUv:We&&v(b.map.channel),aoMapUv:nt&&v(b.aoMap.channel),lightMapUv:Oe&&v(b.lightMap.channel),bumpMapUv:J&&v(b.bumpMap.channel),normalMapUv:re&&v(b.normalMap.channel),displacementMapUv:qe&&v(b.displacementMap.channel),emissiveMapUv:pe&&v(b.emissiveMap.channel),metalnessMapUv:Ie&&v(b.metalnessMap.channel),roughnessMapUv:Re&&v(b.roughnessMap.channel),anisotropyMapUv:$&&v(b.anisotropyMap.channel),clearcoatMapUv:Me&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:se&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:de&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&v(b.sheenRoughnessMap.channel),specularMapUv:be&&v(b.specularMap.channel),specularColorMapUv:he&&v(b.specularColorMap.channel),specularIntensityMapUv:He&&v(b.specularIntensityMap.channel),transmissionMapUv:N&&v(b.transmissionMap.channel),thicknessMapUv:ae&&v(b.thicknessMap.channel),alphaMapUv:ge&&v(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(re||Ke),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(We||ge),fog:!!U,useFog:b.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:fe,skinning:I.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Ee,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Be,decodeVideoTexture:We&&b.map.isVideoTexture===!0&&Ze.getTransfer(b.map.colorSpace)===tt,decodeVideoTextureEmissive:pe&&b.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(b.emissiveMap.colorSpace)===tt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===tn,flipSided:b.side===kt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:_e&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&b.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function u(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const A in b.defines)y.push(A),y.push(b.defines[A]);return b.isRawShaderMaterial===!1&&(_(y,b),w(y,b),y.push(n.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function _(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function w(b,y){r.disableAll(),y.supportsVertexTextures&&r.enable(0),y.instancing&&r.enable(1),y.instancingColor&&r.enable(2),y.instancingMorph&&r.enable(3),y.matcap&&r.enable(4),y.envMap&&r.enable(5),y.normalMapObjectSpace&&r.enable(6),y.normalMapTangentSpace&&r.enable(7),y.clearcoat&&r.enable(8),y.iridescence&&r.enable(9),y.alphaTest&&r.enable(10),y.vertexColors&&r.enable(11),y.vertexAlphas&&r.enable(12),y.vertexUv1s&&r.enable(13),y.vertexUv2s&&r.enable(14),y.vertexUv3s&&r.enable(15),y.vertexTangents&&r.enable(16),y.anisotropy&&r.enable(17),y.alphaHash&&r.enable(18),y.batching&&r.enable(19),y.dispersion&&r.enable(20),y.batchingColor&&r.enable(21),y.gradientMap&&r.enable(22),b.push(r.mask),r.disableAll(),y.fog&&r.enable(0),y.useFog&&r.enable(1),y.flatShading&&r.enable(2),y.logarithmicDepthBuffer&&r.enable(3),y.reversedDepthBuffer&&r.enable(4),y.skinning&&r.enable(5),y.morphTargets&&r.enable(6),y.morphNormals&&r.enable(7),y.morphColors&&r.enable(8),y.premultipliedAlpha&&r.enable(9),y.shadowMapEnabled&&r.enable(10),y.doubleSided&&r.enable(11),y.flipSided&&r.enable(12),y.useDepthPacking&&r.enable(13),y.dithering&&r.enable(14),y.transmission&&r.enable(15),y.sheen&&r.enable(16),y.opaque&&r.enable(17),y.pointsUvs&&r.enable(18),y.decodeVideoTexture&&r.enable(19),y.decodeVideoTextureEmissive&&r.enable(20),y.alphaToCoverage&&r.enable(21),b.push(r.mask)}function x(b){const y=g[b.type];let A;if(y){const P=fn[y];A=Rf.clone(P.uniforms)}else A=b.uniforms;return A}function S(b,y){let A;for(let P=0,I=h.length;P<I;P++){const U=h[P];if(U.cacheKey===y){A=U,++A.usedTimes;break}}return A===void 0&&(A=new Z0(n,y,b,s),h.push(A)),A}function E(b){if(--b.usedTimes===0){const y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function R(b){l.remove(b)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:x,acquireProgram:S,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:C}}function tv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let r=n.get(o);return r===void 0&&(r={},n.set(o,r)),r}function i(o){n.delete(o)}function a(o,r,l){n.get(o)[r]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:s}}function nv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function fc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function pc(){const n=[];let e=0;const t=[],i=[],a=[];function s(){e=0,t.length=0,i.length=0,a.length=0}function o(d,f,p,g,v,m){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=v,u.group=m),e++,u}function r(d,f,p,g,v,m){const u=o(d,f,p,g,v,m);p.transmission>0?i.push(u):p.transparent===!0?a.push(u):t.push(u)}function l(d,f,p,g,v,m){const u=o(d,f,p,g,v,m);p.transmission>0?i.unshift(u):p.transparent===!0?a.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||nv),i.length>1&&i.sort(f||fc),a.length>1&&a.sort(f||fc)}function h(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:a,init:s,push:r,unshift:l,finish:h,sort:c}}function iv(){let n=new WeakMap;function e(i,a){const s=n.get(i);let o;return s===void 0?(o=new pc,n.set(i,[o])):a>=s.length?(o=new pc,s.push(o)):o=s[a],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function av(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Te};break;case"SpotLight":t={position:new F,direction:new F,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function sv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ov=0;function rv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function lv(n){const e=new av,t=sv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const a=new F,s=new ot,o=new ot;function r(c){let h=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,g=0,v=0,m=0,u=0,_=0,w=0,x=0,S=0,E=0,R=0;c.sort(rv);for(let b=0,y=c.length;b<y;b++){const A=c[b],P=A.color,I=A.intensity,U=A.distance,k=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=P.r*I,d+=P.g*I,f+=P.b*I;else if(A.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(A.sh.coefficients[H],I);R++}else if(A.isDirectionalLight){const H=e.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const V=A.shadow,z=t.get(A);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=A.shadow.matrix,_++}i.directional[p]=H,p++}else if(A.isSpotLight){const H=e.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(P).multiplyScalar(I),H.distance=U,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,i.spot[v]=H;const V=A.shadow;if(A.map&&(i.spotLightMap[S]=A.map,S++,V.updateMatrices(A),A.castShadow&&E++),i.spotLightMatrix[v]=V.matrix,A.castShadow){const z=t.get(A);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,i.spotShadow[v]=z,i.spotShadowMap[v]=k,x++}v++}else if(A.isRectAreaLight){const H=e.get(A);H.color.copy(P).multiplyScalar(I),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=H,m++}else if(A.isPointLight){const H=e.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),H.distance=A.distance,H.decay=A.decay,A.castShadow){const V=A.shadow,z=t.get(A);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,z.shadowCameraNear=V.camera.near,z.shadowCameraFar=V.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=A.shadow.matrix,w++}i.point[g]=H,g++}else if(A.isHemisphereLight){const H=e.get(A);H.skyColor.copy(A.color).multiplyScalar(I),H.groundColor.copy(A.groundColor).multiplyScalar(I),i.hemi[u]=H,u++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==m||C.hemiLength!==u||C.numDirectionalShadows!==_||C.numPointShadows!==w||C.numSpotShadows!==x||C.numSpotMaps!==S||C.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=x+S-E,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,C.directionalLength=p,C.pointLength=g,C.spotLength=v,C.rectAreaLength=m,C.hemiLength=u,C.numDirectionalShadows=_,C.numPointShadows=w,C.numSpotShadows=x,C.numSpotMaps=S,C.numLightProbes=R,i.version=ov++)}function l(c,h){let d=0,f=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const w=c[u];if(w.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(a),x.direction.transformDirection(m),d++}else if(w.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(a),x.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(w.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:r,setupView:l,state:i}}function mc(n){const e=new lv(n),t=[],i=[];function a(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function o(h){i.push(h)}function r(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:r,setupLightsView:l,pushLight:s,pushShadow:o}}function cv(n){let e=new WeakMap;function t(a,s=0){const o=e.get(a);let r;return o===void 0?(r=new mc(n),e.set(a,[r])):s>=o.length?(r=new mc(n),o.push(r)):r=o[s],r}function i(){e=new WeakMap}return{get:t,dispose:i}}const hv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uv=`uniform sampler2D shadow_pass;
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
}`;function dv(n,e,t){let i=new qh;const a=new ke,s=new ke,o=new vt,r=new Of({depthPacking:Pd}),l=new zf,c={},h=t.maxTextureSize,d={[gn]:kt,[kt]:gn,[tn]:tn},f=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:hv,fragmentShader:uv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Tt;g.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new xt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eh;let u=this.type;this.render=function(E,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const b=n.getRenderTarget(),y=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),P=n.state;P.setBlending(jn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const I=u!==Cn&&this.type===Cn,U=u===Cn&&this.type!==Cn;for(let k=0,H=E.length;k<H;k++){const V=E[k],z=V.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const j=z.getFrameExtents();if(a.multiply(j),s.copy(z.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/j.x),a.x=s.x*j.x,z.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/j.y),a.y=s.y*j.y,z.mapSize.y=s.y)),z.map===null||I===!0||U===!0){const oe=this.type!==Cn?{minFilter:mt,magFilter:mt}:{};z.map!==null&&z.map.dispose(),z.map=new Pt(a.x,a.y,oe),z.map.texture.name=V.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const ee=z.getViewportCount();for(let oe=0;oe<ee;oe++){const Ee=z.getViewport(oe);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),P.viewport(o),z.updateMatrices(V,oe),i=z.getFrustum(),x(R,C,z.camera,V,this.type)}z.isPointLightShadow!==!0&&this.type===Cn&&_(z,C),z.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(b,y,A)};function _(E,R){const C=e.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Pt(a.x,a.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,C,f,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,C,p,v,null)}function w(E,R,C,b){let y=null;const A=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)y=A;else if(y=C.isPointLight===!0?l:r,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const P=y.uuid,I=R.uuid;let U=c[P];U===void 0&&(U={},c[P]=U);let k=U[I];k===void 0&&(k=y.clone(),U[I]=k,R.addEventListener("dispose",S)),y=k}if(y.visible=R.visible,y.wireframe=R.wireframe,b===Cn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:d[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const P=n.properties.get(y);P.light=C}return y}function x(E,R,C,b,y){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===Cn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const I=e.update(E),U=E.material;if(Array.isArray(U)){const k=I.groups;for(let H=0,V=k.length;H<V;H++){const z=k[H],j=U[z.materialIndex];if(j&&j.visible){const ee=w(E,j,b,y);E.onBeforeShadow(n,E,R,C,I,ee,z),n.renderBufferDirect(C,null,I,ee,E,z),E.onAfterShadow(n,E,R,C,I,ee,z)}}}else if(U.visible){const k=w(E,U,b,y);E.onBeforeShadow(n,E,R,C,I,k,null),n.renderBufferDirect(C,null,I,k,E,null),E.onAfterShadow(n,E,R,C,I,k,null)}}const P=E.children;for(let I=0,U=P.length;I<U;I++)x(P[I],R,C,b,y)}function S(E){E.target.removeEventListener("dispose",S);for(const C in c){const b=c[C],y=E.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const fv={[er]:tr,[nr]:sr,[ir]:or,[$i]:ar,[tr]:er,[sr]:nr,[or]:ir,[ar]:$i};function pv(n,e){function t(){let N=!1;const ae=new vt;let le=null;const ge=new vt(0,0,0,0);return{setMask:function(te){le!==te&&!N&&(n.colorMask(te,te,te,te),le=te)},setLocked:function(te){N=te},setClear:function(te,Z,_e,Be,rt){rt===!0&&(te*=Be,Z*=Be,_e*=Be),ae.set(te,Z,_e,Be),ge.equals(ae)===!1&&(n.clearColor(te,Z,_e,Be),ge.copy(ae))},reset:function(){N=!1,le=null,ge.set(-1,0,0,0)}}}function i(){let N=!1,ae=!1,le=null,ge=null,te=null;return{setReversed:function(Z){if(ae!==Z){const _e=e.get("EXT_clip_control");Z?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),ae=Z;const Be=te;te=null,this.setClear(Be)}},getReversed:function(){return ae},setTest:function(Z){Z?K(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(Z){le!==Z&&!N&&(n.depthMask(Z),le=Z)},setFunc:function(Z){if(ae&&(Z=fv[Z]),ge!==Z){switch(Z){case er:n.depthFunc(n.NEVER);break;case tr:n.depthFunc(n.ALWAYS);break;case nr:n.depthFunc(n.LESS);break;case $i:n.depthFunc(n.LEQUAL);break;case ir:n.depthFunc(n.EQUAL);break;case ar:n.depthFunc(n.GEQUAL);break;case sr:n.depthFunc(n.GREATER);break;case or:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=Z}},setLocked:function(Z){N=Z},setClear:function(Z){te!==Z&&(ae&&(Z=1-Z),n.clearDepth(Z),te=Z)},reset:function(){N=!1,le=null,ge=null,te=null,ae=!1}}}function a(){let N=!1,ae=null,le=null,ge=null,te=null,Z=null,_e=null,Be=null,rt=null;return{setTest:function(Je){N||(Je?K(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(Je){ae!==Je&&!N&&(n.stencilMask(Je),ae=Je)},setFunc:function(Je,xn,un){(le!==Je||ge!==xn||te!==un)&&(n.stencilFunc(Je,xn,un),le=Je,ge=xn,te=un)},setOp:function(Je,xn,un){(Z!==Je||_e!==xn||Be!==un)&&(n.stencilOp(Je,xn,un),Z=Je,_e=xn,Be=un)},setLocked:function(Je){N=Je},setClear:function(Je){rt!==Je&&(n.clearStencil(Je),rt=Je)},reset:function(){N=!1,ae=null,le=null,ge=null,te=null,Z=null,_e=null,Be=null,rt=null}}}const s=new t,o=new i,r=new a,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,p=[],g=null,v=!1,m=null,u=null,_=null,w=null,x=null,S=null,E=null,R=new Te(0,0,0),C=0,b=!1,y=null,A=null,P=null,I=null,U=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,V=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),H=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),H=V>=2);let j=null,ee={};const oe=n.getParameter(n.SCISSOR_BOX),Ee=n.getParameter(n.VIEWPORT),Ge=new vt().fromArray(oe),Fe=new vt().fromArray(Ee);function Le(N,ae,le,ge){const te=new Uint8Array(4),Z=n.createTexture();n.bindTexture(N,Z),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _e=0;_e<le;_e++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,te):n.texImage2D(ae+_e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,te);return Z}const q={};q[n.TEXTURE_2D]=Le(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=Le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=Le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=Le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),K(n.DEPTH_TEST),o.setFunc($i),J(!1),re(wl),K(n.CULL_FACE),nt(jn);function K(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function fe(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function De(N,ae){return d[N]!==ae?(n.bindFramebuffer(N,ae),d[N]=ae,N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ae),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function we(N,ae){let le=p,ge=!1;if(N){le=f.get(ae),le===void 0&&(le=[],f.set(ae,le));const te=N.textures;if(le.length!==te.length||le[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,_e=te.length;Z<_e;Z++)le[Z]=n.COLOR_ATTACHMENT0+Z;le.length=te.length,ge=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,ge=!0);ge&&n.drawBuffers(le)}function We(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const ut={[hi]:n.FUNC_ADD,[id]:n.FUNC_SUBTRACT,[ad]:n.FUNC_REVERSE_SUBTRACT};ut[sd]=n.MIN,ut[od]=n.MAX;const L={[rd]:n.ZERO,[ld]:n.ONE,[cd]:n.SRC_COLOR,[Jo]:n.SRC_ALPHA,[md]:n.SRC_ALPHA_SATURATE,[fd]:n.DST_COLOR,[ud]:n.DST_ALPHA,[hd]:n.ONE_MINUS_SRC_COLOR,[Qo]:n.ONE_MINUS_SRC_ALPHA,[pd]:n.ONE_MINUS_DST_COLOR,[dd]:n.ONE_MINUS_DST_ALPHA,[gd]:n.CONSTANT_COLOR,[vd]:n.ONE_MINUS_CONSTANT_COLOR,[_d]:n.CONSTANT_ALPHA,[wd]:n.ONE_MINUS_CONSTANT_ALPHA};function nt(N,ae,le,ge,te,Z,_e,Be,rt,Je){if(N===jn){v===!0&&(fe(n.BLEND),v=!1);return}if(v===!1&&(K(n.BLEND),v=!0),N!==nd){if(N!==m||Je!==b){if((u!==hi||x!==hi)&&(n.blendEquation(n.FUNC_ADD),u=hi,x=hi),Je)switch(N){case Hi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xl:n.blendFunc(n.ONE,n.ONE);break;case yl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Hi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case yl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}_=null,w=null,S=null,E=null,R.set(0,0,0),C=0,m=N,b=Je}return}te=te||ae,Z=Z||le,_e=_e||ge,(ae!==u||te!==x)&&(n.blendEquationSeparate(ut[ae],ut[te]),u=ae,x=te),(le!==_||ge!==w||Z!==S||_e!==E)&&(n.blendFuncSeparate(L[le],L[ge],L[Z],L[_e]),_=le,w=ge,S=Z,E=_e),(Be.equals(R)===!1||rt!==C)&&(n.blendColor(Be.r,Be.g,Be.b,rt),R.copy(Be),C=rt),m=N,b=!1}function Oe(N,ae){N.side===tn?fe(n.CULL_FACE):K(n.CULL_FACE);let le=N.side===kt;ae&&(le=!le),J(le),N.blending===Hi&&N.transparent===!1?nt(jn):nt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const ge=N.stencilWrite;r.setTest(ge),ge&&(r.setMask(N.stencilWriteMask),r.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),r.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),pe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(N){y!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),y=N)}function re(N){N!==ed?(K(n.CULL_FACE),N!==A&&(N===wl?n.cullFace(n.BACK):N===td?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),A=N}function qe(N){N!==P&&(H&&n.lineWidth(N),P=N)}function pe(N,ae,le){N?(K(n.POLYGON_OFFSET_FILL),(I!==ae||U!==le)&&(n.polygonOffset(ae,le),I=ae,U=le)):fe(n.POLYGON_OFFSET_FILL)}function Ie(N){N?K(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function Re(N){N===void 0&&(N=n.TEXTURE0+k-1),j!==N&&(n.activeTexture(N),j=N)}function Ke(N,ae,le){le===void 0&&(j===null?le=n.TEXTURE0+k-1:le=j);let ge=ee[le];ge===void 0&&(ge={type:void 0,texture:void 0},ee[le]=ge),(ge.type!==N||ge.texture!==ae)&&(j!==le&&(n.activeTexture(le),j=le),n.bindTexture(N,ae||q[N]),ge.type=N,ge.texture=ae)}function D(){const N=ee[j];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{n.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{n.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{n.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{n.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{n.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{n.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(N){Ge.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Ge.copy(N))}function Ue(N){Fe.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Fe.copy(N))}function be(N,ae){let le=c.get(ae);le===void 0&&(le=new WeakMap,c.set(ae,le));let ge=le.get(N);ge===void 0&&(ge=n.getUniformBlockIndex(ae,N.name),le.set(N,ge))}function he(N,ae){const ge=c.get(ae).get(N);l.get(ae)!==ge&&(n.uniformBlockBinding(ae,ge,N.__bindingPointIndex),l.set(ae,ge))}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},j=null,ee={},d={},f=new WeakMap,p=[],g=null,v=!1,m=null,u=null,_=null,w=null,x=null,S=null,E=null,R=new Te(0,0,0),C=0,b=!1,y=null,A=null,P=null,I=null,U=null,Ge.set(0,0,n.canvas.width,n.canvas.height),Fe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:K,disable:fe,bindFramebuffer:De,drawBuffers:we,useProgram:We,setBlending:nt,setMaterial:Oe,setFlipSided:J,setCullFace:re,setLineWidth:qe,setPolygonOffset:pe,setScissorTest:Ie,activeTexture:Re,bindTexture:Ke,unbindTexture:D,compressedTexImage2D:M,compressedTexImage3D:G,texImage2D:ye,texImage3D:ie,updateUBOMapping:be,uniformBlockBinding:he,texStorage2D:se,texStorage3D:xe,texSubImage2D:Y,texSubImage3D:Q,compressedTexSubImage2D:$,compressedTexSubImage3D:Me,scissor:de,viewport:Ue,reset:He}}function mv(n,e,t,i,a,s,o){const r=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,M){return p?new OffscreenCanvas(D,M):Ds("canvas")}function v(D,M,G){let Y=1;const Q=Ke(D);if((Q.width>G||Q.height>G)&&(Y=G/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const $=Math.floor(Y*Q.width),Me=Math.floor(Y*Q.height);d===void 0&&(d=g($,Me));const se=M?g($,Me):d;return se.width=$,se.height=Me,se.getContext("2d").drawImage(D,0,0,$,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+Me+")."),se}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),D;return D}function m(D){return D.generateMipmaps}function u(D){n.generateMipmap(D)}function _(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(D,M,G,Y,Q=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let $=M;if(M===n.RED&&(G===n.FLOAT&&($=n.R32F),G===n.HALF_FLOAT&&($=n.R16F),G===n.UNSIGNED_BYTE&&($=n.R8)),M===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.R8UI),G===n.UNSIGNED_SHORT&&($=n.R16UI),G===n.UNSIGNED_INT&&($=n.R32UI),G===n.BYTE&&($=n.R8I),G===n.SHORT&&($=n.R16I),G===n.INT&&($=n.R32I)),M===n.RG&&(G===n.FLOAT&&($=n.RG32F),G===n.HALF_FLOAT&&($=n.RG16F),G===n.UNSIGNED_BYTE&&($=n.RG8)),M===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.RG8UI),G===n.UNSIGNED_SHORT&&($=n.RG16UI),G===n.UNSIGNED_INT&&($=n.RG32UI),G===n.BYTE&&($=n.RG8I),G===n.SHORT&&($=n.RG16I),G===n.INT&&($=n.RG32I)),M===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.RGB8UI),G===n.UNSIGNED_SHORT&&($=n.RGB16UI),G===n.UNSIGNED_INT&&($=n.RGB32UI),G===n.BYTE&&($=n.RGB8I),G===n.SHORT&&($=n.RGB16I),G===n.INT&&($=n.RGB32I)),M===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.RGBA8UI),G===n.UNSIGNED_SHORT&&($=n.RGBA16UI),G===n.UNSIGNED_INT&&($=n.RGBA32UI),G===n.BYTE&&($=n.RGBA8I),G===n.SHORT&&($=n.RGBA16I),G===n.INT&&($=n.RGBA32I)),M===n.RGB&&(G===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),M===n.RGBA){const Me=Q?Rs:Ze.getTransfer(Y);G===n.FLOAT&&($=n.RGBA32F),G===n.HALF_FLOAT&&($=n.RGBA16F),G===n.UNSIGNED_BYTE&&($=Me===tt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(D,M){let G;return D?M===null||M===vn||M===Ma?G=n.DEPTH24_STENCIL8:M===pn?G=n.DEPTH32F_STENCIL8:M===ba&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===vn||M===Ma?G=n.DEPTH_COMPONENT24:M===pn?G=n.DEPTH_COMPONENT32F:M===ba&&(G=n.DEPTH_COMPONENT16),G}function S(D,M){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==mt&&D.minFilter!==ht?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function E(D){const M=D.target;M.removeEventListener("dispose",E),C(M),M.isVideoTexture&&h.delete(M)}function R(D){const M=D.target;M.removeEventListener("dispose",R),y(M)}function C(D){const M=i.get(D);if(M.__webglInit===void 0)return;const G=D.source,Y=f.get(G);if(Y){const Q=Y[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(D),Object.keys(Y).length===0&&f.delete(G)}i.remove(D)}function b(D){const M=i.get(D);n.deleteTexture(M.__webglTexture);const G=D.source,Y=f.get(G);delete Y[M.__cacheKey],o.memory.textures--}function y(D){const M=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let Q=0;Q<M.__webglFramebuffer[Y].length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[Y][Q]);else n.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)n.deleteFramebuffer(M.__webglFramebuffer[Y]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=D.textures;for(let Y=0,Q=G.length;Y<Q;Y++){const $=i.get(G[Y]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(G[Y])}i.remove(D)}let A=0;function P(){A=0}function I(){const D=A;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),A+=1,D}function U(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function k(D,M){const G=i.get(D);if(D.isVideoTexture&&Ie(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&G.__version!==D.version){const Y=D.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(G,D,M);return}}else D.isExternalTexture&&(G.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+M)}function H(D,M){const G=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){q(G,D,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+M)}function V(D,M){const G=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){q(G,D,M);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+M)}function z(D,M){const G=i.get(D);if(D.version>0&&G.__version!==D.version){K(G,D,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+M)}const j={[Gi]:n.REPEAT,[$t]:n.CLAMP_TO_EDGE,[cr]:n.MIRRORED_REPEAT},ee={[mt]:n.NEAREST,[Cd]:n.NEAREST_MIPMAP_NEAREST,[za]:n.NEAREST_MIPMAP_LINEAR,[ht]:n.LINEAR,[Zs]:n.LINEAR_MIPMAP_NEAREST,[In]:n.LINEAR_MIPMAP_LINEAR},oe={[Ud]:n.NEVER,[Bd]:n.ALWAYS,[Nd]:n.LESS,[Fh]:n.LEQUAL,[Fd]:n.EQUAL,[zd]:n.GEQUAL,[kd]:n.GREATER,[Od]:n.NOTEQUAL};function Ee(D,M){if(M.type===pn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ht||M.magFilter===Zs||M.magFilter===za||M.magFilter===In||M.minFilter===ht||M.minFilter===Zs||M.minFilter===za||M.minFilter===In)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,j[M.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,j[M.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,j[M.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,ee[M.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,ee[M.minFilter]),M.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,oe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===mt||M.minFilter!==za&&M.minFilter!==In||M.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ge(D,M){let G=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",E));const Y=M.source;let Q=f.get(Y);Q===void 0&&(Q={},f.set(Y,Q));const $=U(M);if($!==D.__cacheKey){Q[$]===void 0&&(Q[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[$].usedTimes++;const Me=Q[D.__cacheKey];Me!==void 0&&(Q[D.__cacheKey].usedTimes--,Me.usedTimes===0&&b(M)),D.__cacheKey=$,D.__webglTexture=Q[$].texture}return G}function Fe(D,M,G){return Math.floor(Math.floor(D/G)/M)}function Le(D,M,G,Y){const $=D.updateRanges;if($.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,G,Y,M.data);else{$.sort((ie,de)=>ie.start-de.start);let Me=0;for(let ie=1;ie<$.length;ie++){const de=$[Me],Ue=$[ie],be=de.start+de.count,he=Fe(Ue.start,M.width,4),He=Fe(de.start,M.width,4);Ue.start<=be+1&&he===He&&Fe(Ue.start+Ue.count-1,M.width,4)===he?de.count=Math.max(de.count,Ue.start+Ue.count-de.start):(++Me,$[Me]=Ue)}$.length=Me+1;const se=n.getParameter(n.UNPACK_ROW_LENGTH),xe=n.getParameter(n.UNPACK_SKIP_PIXELS),ye=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let ie=0,de=$.length;ie<de;ie++){const Ue=$[ie],be=Math.floor(Ue.start/4),he=Math.ceil(Ue.count/4),He=be%M.width,N=Math.floor(be/M.width),ae=he,le=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,He),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,He,N,ae,le,G,Y,M.data)}D.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,se),n.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,ye)}}function q(D,M,G){let Y=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=n.TEXTURE_3D);const Q=Ge(D,M),$=M.source;t.bindTexture(Y,D.__webglTexture,n.TEXTURE0+G);const Me=i.get($);if($.version!==Me.__version||Q===!0){t.activeTexture(n.TEXTURE0+G);const se=Ze.getPrimaries(Ze.workingColorSpace),xe=M.colorSpace===Pn?null:Ze.getPrimaries(M.colorSpace),ye=M.colorSpace===Pn||se===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let ie=v(M.image,!1,a.maxTextureSize);ie=Re(M,ie);const de=s.convert(M.format,M.colorSpace),Ue=s.convert(M.type);let be=w(M.internalFormat,de,Ue,M.colorSpace,M.isVideoTexture);Ee(Y,M);let he;const He=M.mipmaps,N=M.isVideoTexture!==!0,ae=Me.__version===void 0||Q===!0,le=$.dataReady,ge=S(M,ie);if(M.isDepthTexture)be=x(M.format===Sa,M.type),ae&&(N?t.texStorage2D(n.TEXTURE_2D,1,be,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,be,ie.width,ie.height,0,de,Ue,null));else if(M.isDataTexture)if(He.length>0){N&&ae&&t.texStorage2D(n.TEXTURE_2D,ge,be,He[0].width,He[0].height);for(let te=0,Z=He.length;te<Z;te++)he=He[te],N?le&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,he.width,he.height,de,Ue,he.data):t.texImage2D(n.TEXTURE_2D,te,be,he.width,he.height,0,de,Ue,he.data);M.generateMipmaps=!1}else N?(ae&&t.texStorage2D(n.TEXTURE_2D,ge,be,ie.width,ie.height),le&&Le(M,ie,de,Ue)):t.texImage2D(n.TEXTURE_2D,0,be,ie.width,ie.height,0,de,Ue,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){N&&ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,be,He[0].width,He[0].height,ie.depth);for(let te=0,Z=He.length;te<Z;te++)if(he=He[te],M.format!==wt)if(de!==null)if(N){if(le)if(M.layerUpdates.size>0){const _e=Xl(he.width,he.height,M.format,M.type);for(const Be of M.layerUpdates){const rt=he.data.subarray(Be*_e/he.data.BYTES_PER_ELEMENT,(Be+1)*_e/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,Be,he.width,he.height,1,de,rt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ie.depth,de,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,be,he.width,he.height,ie.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ie.depth,de,Ue,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,be,he.width,he.height,ie.depth,0,de,Ue,he.data)}else{N&&ae&&t.texStorage2D(n.TEXTURE_2D,ge,be,He[0].width,He[0].height);for(let te=0,Z=He.length;te<Z;te++)he=He[te],M.format!==wt?de!==null?N?le&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,he.width,he.height,de,he.data):t.compressedTexImage2D(n.TEXTURE_2D,te,be,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?le&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,he.width,he.height,de,Ue,he.data):t.texImage2D(n.TEXTURE_2D,te,be,he.width,he.height,0,de,Ue,he.data)}else if(M.isDataArrayTexture)if(N){if(ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,be,ie.width,ie.height,ie.depth),le)if(M.layerUpdates.size>0){const te=Xl(ie.width,ie.height,M.format,M.type);for(const Z of M.layerUpdates){const _e=ie.data.subarray(Z*te/ie.data.BYTES_PER_ELEMENT,(Z+1)*te/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,de,Ue,_e)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,de,Ue,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,ie.width,ie.height,ie.depth,0,de,Ue,ie.data);else if(M.isData3DTexture)N?(ae&&t.texStorage3D(n.TEXTURE_3D,ge,be,ie.width,ie.height,ie.depth),le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,de,Ue,ie.data)):t.texImage3D(n.TEXTURE_3D,0,be,ie.width,ie.height,ie.depth,0,de,Ue,ie.data);else if(M.isFramebufferTexture){if(ae)if(N)t.texStorage2D(n.TEXTURE_2D,ge,be,ie.width,ie.height);else{let te=ie.width,Z=ie.height;for(let _e=0;_e<ge;_e++)t.texImage2D(n.TEXTURE_2D,_e,be,te,Z,0,de,Ue,null),te>>=1,Z>>=1}}else if(He.length>0){if(N&&ae){const te=Ke(He[0]);t.texStorage2D(n.TEXTURE_2D,ge,be,te.width,te.height)}for(let te=0,Z=He.length;te<Z;te++)he=He[te],N?le&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,de,Ue,he):t.texImage2D(n.TEXTURE_2D,te,be,de,Ue,he);M.generateMipmaps=!1}else if(N){if(ae){const te=Ke(ie);t.texStorage2D(n.TEXTURE_2D,ge,be,te.width,te.height)}le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,Ue,ie)}else t.texImage2D(n.TEXTURE_2D,0,be,de,Ue,ie);m(M)&&u(Y),Me.__version=$.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function K(D,M,G){if(M.image.length!==6)return;const Y=Ge(D,M),Q=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+G);const $=i.get(Q);if(Q.version!==$.__version||Y===!0){t.activeTexture(n.TEXTURE0+G);const Me=Ze.getPrimaries(Ze.workingColorSpace),se=M.colorSpace===Pn?null:Ze.getPrimaries(M.colorSpace),xe=M.colorSpace===Pn||Me===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const ye=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,de=[];for(let Z=0;Z<6;Z++)!ye&&!ie?de[Z]=v(M.image[Z],!0,a.maxCubemapSize):de[Z]=ie?M.image[Z].image:M.image[Z],de[Z]=Re(M,de[Z]);const Ue=de[0],be=s.convert(M.format,M.colorSpace),he=s.convert(M.type),He=w(M.internalFormat,be,he,M.colorSpace),N=M.isVideoTexture!==!0,ae=$.__version===void 0||Y===!0,le=Q.dataReady;let ge=S(M,Ue);Ee(n.TEXTURE_CUBE_MAP,M);let te;if(ye){N&&ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,He,Ue.width,Ue.height);for(let Z=0;Z<6;Z++){te=de[Z].mipmaps;for(let _e=0;_e<te.length;_e++){const Be=te[_e];M.format!==wt?be!==null?N?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,0,0,Be.width,Be.height,be,Be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,He,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,0,0,Be.width,Be.height,be,he,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e,He,Be.width,Be.height,0,be,he,Be.data)}}}else{if(te=M.mipmaps,N&&ae){te.length>0&&ge++;const Z=Ke(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,He,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){N?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,de[Z].width,de[Z].height,be,he,de[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,de[Z].width,de[Z].height,0,be,he,de[Z].data);for(let _e=0;_e<te.length;_e++){const rt=te[_e].image[Z].image;N?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,0,0,rt.width,rt.height,be,he,rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,He,rt.width,rt.height,0,be,he,rt.data)}}else{N?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,be,he,de[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,be,he,de[Z]);for(let _e=0;_e<te.length;_e++){const Be=te[_e];N?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,0,0,be,he,Be.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e+1,He,be,he,Be.image[Z])}}}m(M)&&u(n.TEXTURE_CUBE_MAP),$.__version=Q.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function fe(D,M,G,Y,Q,$){const Me=s.convert(G.format,G.colorSpace),se=s.convert(G.type),xe=w(G.internalFormat,Me,se,G.colorSpace),ye=i.get(M),ie=i.get(G);if(ie.__renderTarget=M,!ye.__hasExternalTextures){const de=Math.max(1,M.width>>$),Ue=Math.max(1,M.height>>$);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,$,xe,de,Ue,M.depth,0,Me,se,null):t.texImage2D(Q,$,xe,de,Ue,0,Me,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),pe(M)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,Q,ie.__webglTexture,0,qe(M)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,Q,ie.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(D,M,G){if(n.bindRenderbuffer(n.RENDERBUFFER,D),M.depthBuffer){const Y=M.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,$=x(M.stencilBuffer,Q),Me=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=qe(M);pe(M)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,$,M.width,M.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,$,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,$,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,D)}else{const Y=M.textures;for(let Q=0;Q<Y.length;Q++){const $=Y[Q],Me=s.convert($.format,$.colorSpace),se=s.convert($.type),xe=w($.internalFormat,Me,se,$.colorSpace),ye=qe(M);G&&pe(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,xe,M.width,M.height):pe(M)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,xe,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,xe,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(D,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),k(M.depthTexture,0);const Q=Y.__webglTexture,$=qe(M);if(M.depthTexture.format===Zn)pe(M)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(M.depthTexture.format===Sa)pe(M)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function We(D){const M=i.get(D),G=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const Y=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=Y}if(D.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const Y=D.texture.mipmaps;Y&&Y.length>0?we(M.__webglFramebuffer[0],D):we(M.__webglFramebuffer,D)}else if(G){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=n.createRenderbuffer(),De(M.__webglDepthbuffer[Y],D,!1);else{const Q=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,$)}}else{const Y=D.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),De(M.__webglDepthbuffer,D,!1);else{const Q=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,$)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(D,M,G){const Y=i.get(D);M!==void 0&&fe(Y.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&We(D)}function L(D){const M=D.texture,G=i.get(D),Y=i.get(M);D.addEventListener("dispose",R);const Q=D.textures,$=D.isWebGLCubeRenderTarget===!0,Me=Q.length>1;if(Me||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=M.version,o.memory.textures++),$){G.__webglFramebuffer=[];for(let se=0;se<6;se++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[se]=[];for(let xe=0;xe<M.mipmaps.length;xe++)G.__webglFramebuffer[se][xe]=n.createFramebuffer()}else G.__webglFramebuffer[se]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let se=0;se<M.mipmaps.length;se++)G.__webglFramebuffer[se]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Me)for(let se=0,xe=Q.length;se<xe;se++){const ye=i.get(Q[se]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),o.memory.textures++)}if(D.samples>0&&pe(D)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let se=0;se<Q.length;se++){const xe=Q[se];G.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[se]);const ye=s.convert(xe.format,xe.colorSpace),ie=s.convert(xe.type),de=w(xe.internalFormat,ye,ie,xe.colorSpace,D.isXRRenderTarget===!0),Ue=qe(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,de,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,G.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),De(G.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Ee(n.TEXTURE_CUBE_MAP,M);for(let se=0;se<6;se++)if(M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)fe(G.__webglFramebuffer[se][xe],D,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe);else fe(G.__webglFramebuffer[se],D,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(M)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let se=0,xe=Q.length;se<xe;se++){const ye=Q[se],ie=i.get(ye);let de=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(de=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,ie.__webglTexture),Ee(de,ye),fe(G.__webglFramebuffer,D,ye,n.COLOR_ATTACHMENT0+se,de,0),m(ye)&&u(de)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(se=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,Y.__webglTexture),Ee(se,M),M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)fe(G.__webglFramebuffer[xe],D,M,n.COLOR_ATTACHMENT0,se,xe);else fe(G.__webglFramebuffer,D,M,n.COLOR_ATTACHMENT0,se,0);m(M)&&u(se),t.unbindTexture()}D.depthBuffer&&We(D)}function nt(D){const M=D.textures;for(let G=0,Y=M.length;G<Y;G++){const Q=M[G];if(m(Q)){const $=_(D),Me=i.get(Q).__webglTexture;t.bindTexture($,Me),u($),t.unbindTexture()}}}const Oe=[],J=[];function re(D){if(D.samples>0){if(pe(D)===!1){const M=D.textures,G=D.width,Y=D.height;let Q=n.COLOR_BUFFER_BIT;const $=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(D),se=M.length>1;if(se)for(let ye=0;ye<M.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const xe=D.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ye=0;ye<M.length;ye++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ye]);const ie=i.get(M[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,G,Y,0,0,G,Y,Q,n.NEAREST),l===!0&&(Oe.length=0,J.length=0,Oe.push(n.COLOR_ATTACHMENT0+ye),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Oe.push($),J.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,J)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let ye=0;ye<M.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ye]);const ie=i.get(M[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const M=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function qe(D){return Math.min(a.maxSamples,D.samples)}function pe(D){const M=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ie(D){const M=o.render.frame;h.get(D)!==M&&(h.set(D,M),D.update())}function Re(D,M){const G=D.colorSpace,Y=D.format,Q=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||G!==pi&&G!==Pn&&(Ze.getTransfer(G)===tt?(Y!==wt||Q!==Et)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function Ke(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=P,this.setTexture2D=k,this.setTexture2DArray=H,this.setTexture3D=V,this.setTextureCube=z,this.rebindTextures=ut,this.setupRenderTarget=L,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=pe}function gv(n,e){function t(i,a=Pn){let s;const o=Ze.getTransfer(a);if(i===Et)return n.UNSIGNED_BYTE;if(i===Zr)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kr)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ph)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Lh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ch)return n.BYTE;if(i===Dh)return n.SHORT;if(i===ba)return n.UNSIGNED_SHORT;if(i===jr)return n.INT;if(i===vn)return n.UNSIGNED_INT;if(i===pn)return n.FLOAT;if(i===_n)return n.HALF_FLOAT;if(i===Ih)return n.ALPHA;if(i===Uh)return n.RGB;if(i===wt)return n.RGBA;if(i===Zn)return n.DEPTH_COMPONENT;if(i===Sa)return n.DEPTH_STENCIL;if(i===mi)return n.RED;if(i===Jr)return n.RED_INTEGER;if(i===Nh)return n.RG;if(i===Qr)return n.RG_INTEGER;if(i===el)return n.RGBA_INTEGER;if(i===vs||i===_s||i===ws||i===xs)if(o===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===vs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===vs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_s)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ws)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hr||i===ur||i===dr||i===fr)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===hr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ur)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pr||i===mr||i===gr)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===pr||i===mr)return o===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===gr)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vr||i===_r||i===wr||i===xr||i===yr||i===br||i===Mr||i===Sr||i===Er||i===Tr||i===Ar||i===Rr||i===Cr||i===Dr)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===vr)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_r)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wr)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xr)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yr)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===br)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Mr)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sr)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Er)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tr)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ar)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rr)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Cr)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dr)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pr||i===Lr||i===Ir)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Pr)return o===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lr)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ir)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ur||i===Nr||i===Fr||i===kr)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ur)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Nr)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kr)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ma?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const vv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_v=`
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

}`;class wv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Yh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new On({vertexShader:vv,fragmentShader:_v,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new Bs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xv extends ta{constructor(e,t){super();const i=this;let a=null,s=1,o=null,r="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new wv,u={},_=t.getContextAttributes();let w=null,x=null;const S=[],E=[],R=new ke;let C=null;const b=new en;b.viewport=new vt;const y=new en;y.viewport=new vt;const A=[b,y],P=new Bf;let I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=S[q];return K===void 0&&(K=new _o,S[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=S[q];return K===void 0&&(K=new _o,S[q]=K),K.getGripSpace()},this.getHand=function(q){let K=S[q];return K===void 0&&(K=new _o,S[q]=K),K.getHandSpace()};function k(q){const K=E.indexOf(q.inputSource);if(K===-1)return;const fe=S[K];fe!==void 0&&(fe.update(q.inputSource,q.frame,c||o),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){a.removeEventListener("select",k),a.removeEventListener("selectstart",k),a.removeEventListener("selectend",k),a.removeEventListener("squeeze",k),a.removeEventListener("squeezestart",k),a.removeEventListener("squeezeend",k),a.removeEventListener("end",H),a.removeEventListener("inputsourceschange",V);for(let q=0;q<S.length;q++){const K=E[q];K!==null&&(E[q]=null,S[q].disconnect(K))}I=null,U=null,m.reset();for(const q in u)delete u[q];e.setRenderTarget(w),p=null,f=null,d=null,a=null,x=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(a,t)),d},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(q){if(a=q,a!==null){if(w=e.getRenderTarget(),a.addEventListener("select",k),a.addEventListener("selectstart",k),a.addEventListener("selectend",k),a.addEventListener("squeeze",k),a.addEventListener("squeezestart",k),a.addEventListener("squeezeend",k),a.addEventListener("end",H),a.addEventListener("inputsourceschange",V),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,De=null,we=null;_.depth&&(we=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=_.stencil?Sa:Zn,De=_.stencil?Ma:vn);const We={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(We),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Pt(f.textureWidth,f.textureHeight,{format:wt,type:Et,depthTexture:new La(f.textureWidth,f.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const fe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,t,fe),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Pt(p.framebufferWidth,p.framebufferHeight,{format:wt,type:Et,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await a.requestReferenceSpace(r),Le.setContext(a),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(q){for(let K=0;K<q.removed.length;K++){const fe=q.removed[K],De=E.indexOf(fe);De>=0&&(E[De]=null,S[De].disconnect(fe))}for(let K=0;K<q.added.length;K++){const fe=q.added[K];let De=E.indexOf(fe);if(De===-1){for(let We=0;We<S.length;We++)if(We>=E.length){E.push(fe),De=We;break}else if(E[We]===null){E[We]=fe,De=We;break}if(De===-1)break}const we=S[De];we&&we.connect(fe)}}const z=new F,j=new F;function ee(q,K,fe){z.setFromMatrixPosition(K.matrixWorld),j.setFromMatrixPosition(fe.matrixWorld);const De=z.distanceTo(j),we=K.projectionMatrix.elements,We=fe.projectionMatrix.elements,ut=we[14]/(we[10]-1),L=we[14]/(we[10]+1),nt=(we[9]+1)/we[5],Oe=(we[9]-1)/we[5],J=(we[8]-1)/we[0],re=(We[8]+1)/We[0],qe=ut*J,pe=ut*re,Ie=De/(-J+re),Re=Ie*-J;if(K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Re),q.translateZ(Ie),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),we[10]===-1)q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Ke=ut+Ie,D=L+Ie,M=qe-Re,G=pe+(De-Re),Y=nt*L/D*Ke,Q=Oe*L/D*Ke;q.projectionMatrix.makePerspective(M,G,Y,Q,Ke,D),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function oe(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(a===null)return;let K=q.near,fe=q.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),P.near=y.near=b.near=K,P.far=y.far=b.far=fe,(I!==P.near||U!==P.far)&&(a.updateRenderState({depthNear:P.near,depthFar:P.far}),I=P.near,U=P.far),P.layers.mask=q.layers.mask|6,b.layers.mask=P.layers.mask&3,y.layers.mask=P.layers.mask&5;const De=q.parent,we=P.cameras;oe(P,De);for(let We=0;We<we.length;We++)oe(we[We],De);we.length===2?ee(P,b,y):P.projectionMatrix.copy(b.projectionMatrix),Ee(q,P,De)};function Ee(q,K,fe){fe===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ea*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(q){return u[q]};let Ge=null;function Fe(q,K){if(h=K.getViewerPose(c||o),g=K,h!==null){const fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let De=!1;fe.length!==P.cameras.length&&(P.cameras.length=0,De=!0);for(let L=0;L<fe.length;L++){const nt=fe[L];let Oe=null;if(p!==null)Oe=p.getViewport(nt);else{const re=d.getViewSubImage(f,nt);Oe=re.viewport,L===0&&(e.setRenderTargetTextures(x,re.colorTexture,re.depthStencilTexture),e.setRenderTarget(x))}let J=A[L];J===void 0&&(J=new en,J.layers.enable(L),J.viewport=new vt,A[L]=J),J.matrix.fromArray(nt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(nt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),L===0&&(P.matrix.copy(J.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),De===!0&&P.cameras.push(J)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const L=d.getDepthInformation(fe[0]);L&&L.isValid&&L.texture&&m.init(L,a.renderState)}if(we&&we.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let L=0;L<fe.length;L++){const nt=fe[L].camera;if(nt){let Oe=u[nt];Oe||(Oe=new Yh,u[nt]=Oe);const J=d.getCameraImage(nt);Oe.sourceTexture=J}}}}for(let fe=0;fe<S.length;fe++){const De=E[fe],we=S[fe];De!==null&&we!==void 0&&we.update(De,K,c||o)}Ge&&Ge(q,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}const Le=new jh;Le.setAnimationLoop(Fe),this.setAnimationLoop=function(q){Ge=q},this.dispose=function(){}}}const si=new wn,yv=new ot;function bv(n,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Wh(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function a(m,u,_,w,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,x)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),v(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&r(m,u)):u.isPointsMaterial?l(m,u,_,w):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===kt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===kt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const _=e.get(u),w=_.envMap,x=_.envMapRotation;w&&(m.envMap.value=w,si.copy(x),si.x*=-1,si.y*=-1,si.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),m.envMapRotation.value.setFromMatrix4(yv.makeRotationFromEuler(si)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function r(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,w){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=w*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===kt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const _=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Mv(n,e,t,i){let a={},s={},o=[];const r=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,w){const x=w.program;i.uniformBlockBinding(_,x)}function c(_,w){let x=a[_.id];x===void 0&&(g(_),x=h(_),a[_.id]=x,_.addEventListener("dispose",m));const S=w.program;i.updateUBOMapping(_,S);const E=e.render.frame;s[_.id]!==E&&(f(_),s[_.id]=E)}function h(_){const w=d();_.__bindingPointIndex=w;const x=n.createBuffer(),S=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,S,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,x),x}function d(){for(let _=0;_<r;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const w=a[_.id],x=_.uniforms,S=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let E=0,R=x.length;E<R;E++){const C=Array.isArray(x[E])?x[E]:[x[E]];for(let b=0,y=C.length;b<y;b++){const A=C[b];if(p(A,E,b,S)===!0){const P=A.__offset,I=Array.isArray(A.value)?A.value:[A.value];let U=0;for(let k=0;k<I.length;k++){const H=I[k],V=v(H);typeof H=="number"||typeof H=="boolean"?(A.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,P+U,A.__data)):H.isMatrix3?(A.__data[0]=H.elements[0],A.__data[1]=H.elements[1],A.__data[2]=H.elements[2],A.__data[3]=0,A.__data[4]=H.elements[3],A.__data[5]=H.elements[4],A.__data[6]=H.elements[5],A.__data[7]=0,A.__data[8]=H.elements[6],A.__data[9]=H.elements[7],A.__data[10]=H.elements[8],A.__data[11]=0):(H.toArray(A.__data,U),U+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,w,x,S){const E=_.value,R=w+"_"+x;if(S[R]===void 0)return typeof E=="number"||typeof E=="boolean"?S[R]=E:S[R]=E.clone(),!0;{const C=S[R];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return S[R]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(_){const w=_.uniforms;let x=0;const S=16;for(let R=0,C=w.length;R<C;R++){const b=Array.isArray(w[R])?w[R]:[w[R]];for(let y=0,A=b.length;y<A;y++){const P=b[y],I=Array.isArray(P.value)?P.value:[P.value];for(let U=0,k=I.length;U<k;U++){const H=I[U],V=v(H),z=x%S,j=z%V.boundary,ee=z+j;x+=j,ee!==0&&S-ee<V.storage&&(x+=S-ee),P.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=x,x+=V.storage}}}const E=x%S;return E>0&&(x+=S-E),_.__size=x,_.__cache={},this}function v(_){const w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),w}function m(_){const w=_.target;w.removeEventListener("dispose",m);const x=o.indexOf(w.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(a[w.id]),delete a[w.id],delete s[w.id]}function u(){for(const _ in a)n.deleteBuffer(a[_]);o=[],a={},s={}}return{bind:l,update:c,dispose:u}}class Sv{constructor(e={}){const{canvas:t=sf(),context:i=null,depth:a=!0,stencil:s=!1,alpha:o=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,u=null;const _=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let S=!1;this._outputColorSpace=Qt;let E=0,R=0,C=null,b=-1,y=null;const A=new vt,P=new vt;let I=null;const U=new Te(0);let k=0,H=t.width,V=t.height,z=1,j=null,ee=null;const oe=new vt(0,0,H,V),Ee=new vt(0,0,H,V);let Ge=!1;const Fe=new qh;let Le=!1,q=!1;const K=new ot,fe=new F,De=new vt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function ut(){return C===null?z:1}let L=i;function nt(T,O){return t.getContext(T,O)}try{const T={alpha:!0,depth:a,stencil:s,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yr}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",te,!1),L===null){const O="webgl2";if(L=nt(O,T),L===null)throw nt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Oe,J,re,qe,pe,Ie,Re,Ke,D,M,G,Y,Q,$,Me,se,xe,ye,ie,de,Ue,be,he,He;function N(){Oe=new Ug(L),Oe.init(),be=new gv(L,Oe),J=new Ag(L,Oe,e,be),re=new pv(L,Oe),J.reversedDepthBuffer&&f&&re.buffers.depth.setReversed(!0),qe=new kg(L),pe=new tv,Ie=new mv(L,Oe,re,pe,J,be,qe),Re=new Cg(x),Ke=new Ig(x),D=new Vf(L),he=new Eg(L,D),M=new Ng(L,D,qe,he),G=new zg(L,M,D,qe),ie=new Og(L,J,Ie),se=new Rg(pe),Y=new ev(x,Re,Ke,Oe,J,he,se),Q=new bv(x,pe),$=new iv,Me=new cv(Oe),ye=new Sg(x,Re,Ke,re,G,p,l),xe=new dv(x,G,J),He=new Mv(L,qe,J,re),de=new Tg(L,Oe,qe),Ue=new Fg(L,Oe,qe),qe.programs=Y.programs,x.capabilities=J,x.extensions=Oe,x.properties=pe,x.renderLists=$,x.shadowMap=xe,x.state=re,x.info=qe}N();const ae=new xv(x,L);this.xr=ae,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=Oe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Oe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(H,V,!1))},this.getSize=function(T){return T.set(H,V)},this.setSize=function(T,O,W=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,V=O,t.width=Math.floor(T*z),t.height=Math.floor(O*z),W===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(H*z,V*z).floor()},this.setDrawingBufferSize=function(T,O,W){H=T,V=O,z=W,t.width=Math.floor(T*W),t.height=Math.floor(O*W),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(oe)},this.setViewport=function(T,O,W,X){T.isVector4?oe.set(T.x,T.y,T.z,T.w):oe.set(T,O,W,X),re.viewport(A.copy(oe).multiplyScalar(z).round())},this.getScissor=function(T){return T.copy(Ee)},this.setScissor=function(T,O,W,X){T.isVector4?Ee.set(T.x,T.y,T.z,T.w):Ee.set(T,O,W,X),re.scissor(P.copy(Ee).multiplyScalar(z).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(T){re.setScissorTest(Ge=T)},this.setOpaqueSort=function(T){j=T},this.setTransparentSort=function(T){ee=T},this.getClearColor=function(T){return T.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,W=!0){let X=0;if(T){let B=!1;if(C!==null){const ne=C.texture.format;B=ne===el||ne===Qr||ne===Jr}if(B){const ne=C.texture.type,ue=ne===Et||ne===vn||ne===ba||ne===Ma||ne===Zr||ne===Kr,ve=ye.getClearColor(),me=ye.getClearAlpha(),Pe=ve.r,Ne=ve.g,Ae=ve.b;ue?(g[0]=Pe,g[1]=Ne,g[2]=Ae,g[3]=me,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=Pe,v[1]=Ne,v[2]=Ae,v[3]=me,L.clearBufferiv(L.COLOR,0,v))}else X|=L.COLOR_BUFFER_BIT}O&&(X|=L.DEPTH_BUFFER_BIT),W&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",te,!1),ye.dispose(),$.dispose(),Me.dispose(),pe.dispose(),Re.dispose(),Ke.dispose(),G.dispose(),he.dispose(),He.dispose(),Y.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",un),ae.removeEventListener("sessionend",fl),Jn.stop()};function le(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=qe.autoReset,O=xe.enabled,W=xe.autoUpdate,X=xe.needsUpdate,B=xe.type;N(),qe.autoReset=T,xe.enabled=O,xe.autoUpdate=W,xe.needsUpdate=X,xe.type=B}function te(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Z(T){const O=T.target;O.removeEventListener("dispose",Z),_e(O)}function _e(T){Be(T),pe.remove(T)}function Be(T){const O=pe.get(T).programs;O!==void 0&&(O.forEach(function(W){Y.releaseProgram(W)}),T.isShaderMaterial&&Y.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,W,X,B,ne){O===null&&(O=we);const ue=B.isMesh&&B.matrixWorld.determinant()<0,ve=Yu(T,O,W,X,B);re.setMaterial(X,ue);let me=W.index,Pe=1;if(X.wireframe===!0){if(me=M.getWireframeAttribute(W),me===void 0)return;Pe=2}const Ne=W.drawRange,Ae=W.attributes.position;let $e=Ne.start*Pe,et=(Ne.start+Ne.count)*Pe;ne!==null&&($e=Math.max($e,ne.start*Pe),et=Math.min(et,(ne.start+ne.count)*Pe)),me!==null?($e=Math.max($e,0),et=Math.min(et,me.count)):Ae!=null&&($e=Math.max($e,0),et=Math.min(et,Ae.count));const gt=et-$e;if(gt<0||gt===1/0)return;he.setup(B,X,ve,W,me);let lt,it=de;if(me!==null&&(lt=D.get(me),it=Ue,it.setIndex(lt)),B.isMesh)X.wireframe===!0?(re.setLineWidth(X.wireframeLinewidth*ut()),it.setMode(L.LINES)):it.setMode(L.TRIANGLES);else if(B.isLine){let Ce=X.linewidth;Ce===void 0&&(Ce=1),re.setLineWidth(Ce*ut()),B.isLineSegments?it.setMode(L.LINES):B.isLineLoop?it.setMode(L.LINE_LOOP):it.setMode(L.LINE_STRIP)}else B.isPoints?it.setMode(L.POINTS):B.isSprite&&it.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Ta("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))it.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ce=B._multiDrawStarts,ft=B._multiDrawCounts,je=B._multiDrawCount,zt=me?D.get(me).bytesPerElement:1,vi=pe.get(X).currentProgram.getUniforms();for(let Bt=0;Bt<je;Bt++)vi.setValue(L,"_gl_DrawID",Bt),it.render(Ce[Bt]/zt,ft[Bt])}else if(B.isInstancedMesh)it.renderInstances($e,gt,B.count);else if(W.isInstancedBufferGeometry){const Ce=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ft=Math.min(W.instanceCount,Ce);it.renderInstances($e,gt,ft)}else it.render($e,gt)};function rt(T,O,W){T.transparent===!0&&T.side===tn&&T.forceSinglePass===!1?(T.side=kt,T.needsUpdate=!0,Oa(T,O,W),T.side=gn,T.needsUpdate=!0,Oa(T,O,W),T.side=tn):Oa(T,O,W)}this.compile=function(T,O,W=null){W===null&&(W=T),u=Me.get(W),u.init(O),w.push(u),W.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),T!==W&&T.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),u.setupLights();const X=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ne=B.material;if(ne)if(Array.isArray(ne))for(let ue=0;ue<ne.length;ue++){const ve=ne[ue];rt(ve,W,B),X.add(ve)}else rt(ne,W,B),X.add(ne)}),u=w.pop(),X},this.compileAsync=function(T,O,W=null){const X=this.compile(T,O,W);return new Promise(B=>{function ne(){if(X.forEach(function(ue){pe.get(ue).currentProgram.isReady()&&X.delete(ue)}),X.size===0){B(T);return}setTimeout(ne,10)}Oe.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Je=null;function xn(T){Je&&Je(T)}function un(){Jn.stop()}function fl(){Jn.start()}const Jn=new jh;Jn.setAnimationLoop(xn),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(T){Je=T,ae.setAnimationLoop(T),T===null?Jn.stop():Jn.start()},ae.addEventListener("sessionstart",un),ae.addEventListener("sessionend",fl),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(O),O=ae.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,O,C),u=Me.get(T,w.length),u.init(O),w.push(u),K.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Fe.setFromProjectionMatrix(K,mn,O.reversedDepth),q=this.localClippingEnabled,Le=se.init(this.clippingPlanes,q),m=$.get(T,_.length),m.init(),_.push(m),ae.enabled===!0&&ae.isPresenting===!0){const ne=x.xr.getDepthSensingMesh();ne!==null&&Ys(ne,O,-1/0,x.sortObjects)}Ys(T,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(j,ee),We=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,We&&ye.addToRenderList(m,T),this.info.render.frame++,Le===!0&&se.beginShadows();const W=u.state.shadowsArray;xe.render(W,T,O),Le===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,B=m.transmissive;if(u.setupLights(),O.isArrayCamera){const ne=O.cameras;if(B.length>0)for(let ue=0,ve=ne.length;ue<ve;ue++){const me=ne[ue];ml(X,B,T,me)}We&&ye.render(T);for(let ue=0,ve=ne.length;ue<ve;ue++){const me=ne[ue];pl(m,T,me,me.viewport)}}else B.length>0&&ml(X,B,T,O),We&&ye.render(T),pl(m,T,O);C!==null&&R===0&&(Ie.updateMultisampleRenderTarget(C),Ie.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(x,T,O),he.resetDefaultState(),b=-1,y=null,w.pop(),w.length>0?(u=w[w.length-1],Le===!0&&se.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Ys(T,O,W,X){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)u.pushLight(T),T.castShadow&&u.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Fe.intersectsSprite(T)){X&&De.setFromMatrixPosition(T.matrixWorld).applyMatrix4(K);const ue=G.update(T),ve=T.material;ve.visible&&m.push(T,ue,ve,W,De.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Fe.intersectsObject(T))){const ue=G.update(T),ve=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),De.copy(T.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),De.copy(ue.boundingSphere.center)),De.applyMatrix4(T.matrixWorld).applyMatrix4(K)),Array.isArray(ve)){const me=ue.groups;for(let Pe=0,Ne=me.length;Pe<Ne;Pe++){const Ae=me[Pe],$e=ve[Ae.materialIndex];$e&&$e.visible&&m.push(T,ue,$e,W,De.z,Ae)}}else ve.visible&&m.push(T,ue,ve,W,De.z,null)}}const ne=T.children;for(let ue=0,ve=ne.length;ue<ve;ue++)Ys(ne[ue],O,W,X)}function pl(T,O,W,X){const B=T.opaque,ne=T.transmissive,ue=T.transparent;u.setupLightsView(W),Le===!0&&se.setGlobalState(x.clippingPlanes,W),X&&re.viewport(A.copy(X)),B.length>0&&ka(B,O,W),ne.length>0&&ka(ne,O,W),ue.length>0&&ka(ue,O,W),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function ml(T,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[X.id]===void 0&&(u.state.transmissionRenderTarget[X.id]=new Pt(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?_n:Et,minFilter:In,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ne=u.state.transmissionRenderTarget[X.id],ue=X.viewport||A;ne.setSize(ue.z*x.transmissionResolutionScale,ue.w*x.transmissionResolutionScale);const ve=x.getRenderTarget(),me=x.getActiveCubeFace(),Pe=x.getActiveMipmapLevel();x.setRenderTarget(ne),x.getClearColor(U),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear(),We&&ye.render(W);const Ne=x.toneMapping;x.toneMapping=Nn;const Ae=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),u.setupLightsView(X),Le===!0&&se.setGlobalState(x.clippingPlanes,X),ka(T,W,X),Ie.updateMultisampleRenderTarget(ne),Ie.updateRenderTargetMipmap(ne),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let et=0,gt=O.length;et<gt;et++){const lt=O[et],it=lt.object,Ce=lt.geometry,ft=lt.material,je=lt.group;if(ft.side===tn&&it.layers.test(X.layers)){const zt=ft.side;ft.side=kt,ft.needsUpdate=!0,gl(it,W,X,Ce,ft,je),ft.side=zt,ft.needsUpdate=!0,$e=!0}}$e===!0&&(Ie.updateMultisampleRenderTarget(ne),Ie.updateRenderTargetMipmap(ne))}x.setRenderTarget(ve,me,Pe),x.setClearColor(U,k),Ae!==void 0&&(X.viewport=Ae),x.toneMapping=Ne}function ka(T,O,W){const X=O.isScene===!0?O.overrideMaterial:null;for(let B=0,ne=T.length;B<ne;B++){const ue=T[B],ve=ue.object,me=ue.geometry,Pe=ue.group;let Ne=ue.material;Ne.allowOverride===!0&&X!==null&&(Ne=X),ve.layers.test(W.layers)&&gl(ve,O,W,me,Ne,Pe)}}function gl(T,O,W,X,B,ne){T.onBeforeRender(x,O,W,X,B,ne),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(x,O,W,X,T,ne),B.transparent===!0&&B.side===tn&&B.forceSinglePass===!1?(B.side=kt,B.needsUpdate=!0,x.renderBufferDirect(W,O,X,B,T,ne),B.side=gn,B.needsUpdate=!0,x.renderBufferDirect(W,O,X,B,T,ne),B.side=tn):x.renderBufferDirect(W,O,X,B,T,ne),T.onAfterRender(x,O,W,X,B,ne)}function Oa(T,O,W){O.isScene!==!0&&(O=we);const X=pe.get(T),B=u.state.lights,ne=u.state.shadowsArray,ue=B.state.version,ve=Y.getParameters(T,B.state,ne,O,W),me=Y.getProgramCacheKey(ve);let Pe=X.programs;X.environment=T.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(T.isMeshStandardMaterial?Ke:Re).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Pe===void 0&&(T.addEventListener("dispose",Z),Pe=new Map,X.programs=Pe);let Ne=Pe.get(me);if(Ne!==void 0){if(X.currentProgram===Ne&&X.lightsStateVersion===ue)return _l(T,ve),Ne}else ve.uniforms=Y.getUniforms(T),T.onBeforeCompile(ve,x),Ne=Y.acquireProgram(ve,me),Pe.set(me,Ne),X.uniforms=ve.uniforms;const Ae=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ae.clippingPlanes=se.uniform),_l(T,ve),X.needsLights=Zu(T),X.lightsStateVersion=ue,X.needsLights&&(Ae.ambientLightColor.value=B.state.ambient,Ae.lightProbe.value=B.state.probe,Ae.directionalLights.value=B.state.directional,Ae.directionalLightShadows.value=B.state.directionalShadow,Ae.spotLights.value=B.state.spot,Ae.spotLightShadows.value=B.state.spotShadow,Ae.rectAreaLights.value=B.state.rectArea,Ae.ltc_1.value=B.state.rectAreaLTC1,Ae.ltc_2.value=B.state.rectAreaLTC2,Ae.pointLights.value=B.state.point,Ae.pointLightShadows.value=B.state.pointShadow,Ae.hemisphereLights.value=B.state.hemi,Ae.directionalShadowMap.value=B.state.directionalShadowMap,Ae.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ae.spotShadowMap.value=B.state.spotShadowMap,Ae.spotLightMatrix.value=B.state.spotLightMatrix,Ae.spotLightMap.value=B.state.spotLightMap,Ae.pointShadowMap.value=B.state.pointShadowMap,Ae.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Ne,X.uniformsList=null,Ne}function vl(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=ys.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function _l(T,O){const W=pe.get(T);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Yu(T,O,W,X,B){O.isScene!==!0&&(O=we),Ie.resetTextureUnits();const ne=O.fog,ue=X.isMeshStandardMaterial?O.environment:null,ve=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:pi,me=(X.isMeshStandardMaterial?Ke:Re).get(X.envMap||ue),Pe=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ne=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ae=!!W.morphAttributes.position,$e=!!W.morphAttributes.normal,et=!!W.morphAttributes.color;let gt=Nn;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(gt=x.toneMapping);const lt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,it=lt!==void 0?lt.length:0,Ce=pe.get(X),ft=u.state.lights;if(Le===!0&&(q===!0||T!==y)){const Lt=T===y&&X.id===b;se.setState(X,T,Lt)}let je=!1;X.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==ft.state.version||Ce.outputColorSpace!==ve||B.isBatchedMesh&&Ce.batching===!1||!B.isBatchedMesh&&Ce.batching===!0||B.isBatchedMesh&&Ce.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ce.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ce.instancing===!1||!B.isInstancedMesh&&Ce.instancing===!0||B.isSkinnedMesh&&Ce.skinning===!1||!B.isSkinnedMesh&&Ce.skinning===!0||B.isInstancedMesh&&Ce.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ce.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ce.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ce.instancingMorph===!1&&B.morphTexture!==null||Ce.envMap!==me||X.fog===!0&&Ce.fog!==ne||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==se.numPlanes||Ce.numIntersection!==se.numIntersection)||Ce.vertexAlphas!==Pe||Ce.vertexTangents!==Ne||Ce.morphTargets!==Ae||Ce.morphNormals!==$e||Ce.morphColors!==et||Ce.toneMapping!==gt||Ce.morphTargetsCount!==it)&&(je=!0):(je=!0,Ce.__version=X.version);let zt=Ce.currentProgram;je===!0&&(zt=Oa(X,O,B));let vi=!1,Bt=!1,aa=!1;const pt=zt.getUniforms(),jt=Ce.uniforms;if(re.useProgram(zt.program)&&(vi=!0,Bt=!0,aa=!0),X.id!==b&&(b=X.id,Bt=!0),vi||y!==T){re.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),pt.setValue(L,"projectionMatrix",T.projectionMatrix),pt.setValue(L,"viewMatrix",T.matrixWorldInverse);const Nt=pt.map.cameraPosition;Nt!==void 0&&Nt.setValue(L,fe.setFromMatrixPosition(T.matrixWorld)),J.logarithmicDepthBuffer&&pt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&pt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Bt=!0,aa=!0)}if(B.isSkinnedMesh){pt.setOptional(L,B,"bindMatrix"),pt.setOptional(L,B,"bindMatrixInverse");const Lt=B.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),pt.setValue(L,"boneTexture",Lt.boneTexture,Ie))}B.isBatchedMesh&&(pt.setOptional(L,B,"batchingTexture"),pt.setValue(L,"batchingTexture",B._matricesTexture,Ie),pt.setOptional(L,B,"batchingIdTexture"),pt.setValue(L,"batchingIdTexture",B._indirectTexture,Ie),pt.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&pt.setValue(L,"batchingColorTexture",B._colorsTexture,Ie));const Zt=W.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&ie.update(B,W,zt),(Bt||Ce.receiveShadow!==B.receiveShadow)&&(Ce.receiveShadow=B.receiveShadow,pt.setValue(L,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(jt.envMap.value=me,jt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(jt.envMapIntensity.value=O.environmentIntensity),Bt&&(pt.setValue(L,"toneMappingExposure",x.toneMappingExposure),Ce.needsLights&&ju(jt,aa),ne&&X.fog===!0&&Q.refreshFogUniforms(jt,ne),Q.refreshMaterialUniforms(jt,X,z,V,u.state.transmissionRenderTarget[T.id]),ys.upload(L,vl(Ce),jt,Ie)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ys.upload(L,vl(Ce),jt,Ie),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&pt.setValue(L,"center",B.center),pt.setValue(L,"modelViewMatrix",B.modelViewMatrix),pt.setValue(L,"normalMatrix",B.normalMatrix),pt.setValue(L,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Lt=X.uniformsGroups;for(let Nt=0,js=Lt.length;Nt<js;Nt++){const Qn=Lt[Nt];He.update(Qn,zt),He.bind(Qn,zt)}}return zt}function ju(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Zu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,O,W){const X=pe.get(T);X.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),pe.get(T.texture).__webglTexture=O,pe.get(T.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){const W=pe.get(T);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const Ku=L.createFramebuffer();this.setRenderTarget=function(T,O=0,W=0){C=T,E=O,R=W;let X=!0,B=null,ne=!1,ue=!1;if(T){const me=pe.get(T);if(me.__useDefaultFramebuffer!==void 0)re.bindFramebuffer(L.FRAMEBUFFER,null),X=!1;else if(me.__webglFramebuffer===void 0)Ie.setupRenderTarget(T);else if(me.__hasExternalTextures)Ie.rebindTextures(T,pe.get(T.texture).__webglTexture,pe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ae=T.depthTexture;if(me.__boundDepthTexture!==Ae){if(Ae!==null&&pe.has(Ae)&&(T.width!==Ae.image.width||T.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(T)}}const Pe=T.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ue=!0);const Ne=pe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ne[O])?B=Ne[O][W]:B=Ne[O],ne=!0):T.samples>0&&Ie.useMultisampledRTT(T)===!1?B=pe.get(T).__webglMultisampledFramebuffer:Array.isArray(Ne)?B=Ne[W]:B=Ne,A.copy(T.viewport),P.copy(T.scissor),I=T.scissorTest}else A.copy(oe).multiplyScalar(z).floor(),P.copy(Ee).multiplyScalar(z).floor(),I=Ge;if(W!==0&&(B=Ku),re.bindFramebuffer(L.FRAMEBUFFER,B)&&X&&re.drawBuffers(T,B),re.viewport(A),re.scissor(P),re.setScissorTest(I),ne){const me=pe.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,me.__webglTexture,W)}else if(ue){const me=O;for(let Pe=0;Pe<T.textures.length;Pe++){const Ne=pe.get(T.textures[Pe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Pe,Ne.__webglTexture,W,me)}}else if(T!==null&&W!==0){const me=pe.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,me.__webglTexture,W)}b=-1},this.readRenderTargetPixels=function(T,O,W,X,B,ne,ue,ve=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ue!==void 0&&(me=me[ue]),me){re.bindFramebuffer(L.FRAMEBUFFER,me);try{const Pe=T.textures[ve],Ne=Pe.format,Ae=Pe.type;if(!J.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-X&&W>=0&&W<=T.height-B&&(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ve),L.readPixels(O,W,X,B,be.convert(Ne),be.convert(Ae),ne))}finally{const Pe=C!==null?pe.get(C).__webglFramebuffer:null;re.bindFramebuffer(L.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(T,O,W,X,B,ne,ue,ve=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ue!==void 0&&(me=me[ue]),me)if(O>=0&&O<=T.width-X&&W>=0&&W<=T.height-B){re.bindFramebuffer(L.FRAMEBUFFER,me);const Pe=T.textures[ve],Ne=Pe.format,Ae=Pe.type;if(!J.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,$e),L.bufferData(L.PIXEL_PACK_BUFFER,ne.byteLength,L.STREAM_READ),T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ve),L.readPixels(O,W,X,B,be.convert(Ne),be.convert(Ae),0);const et=C!==null?pe.get(C).__webglFramebuffer:null;re.bindFramebuffer(L.FRAMEBUFFER,et);const gt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await of(L,gt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,$e),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ne),L.deleteBuffer($e),L.deleteSync(gt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,W=0){const X=Math.pow(2,-W),B=Math.floor(T.image.width*X),ne=Math.floor(T.image.height*X),ue=O!==null?O.x:0,ve=O!==null?O.y:0;Ie.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,ue,ve,B,ne),re.unbindTexture()};const Ju=L.createFramebuffer(),Qu=L.createFramebuffer();this.copyTextureToTexture=function(T,O,W=null,X=null,B=0,ne=null){ne===null&&(B!==0?(Ta("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=B,B=0):ne=0);let ue,ve,me,Pe,Ne,Ae,$e,et,gt;const lt=T.isCompressedTexture?T.mipmaps[ne]:T.image;if(W!==null)ue=W.max.x-W.min.x,ve=W.max.y-W.min.y,me=W.isBox3?W.max.z-W.min.z:1,Pe=W.min.x,Ne=W.min.y,Ae=W.isBox3?W.min.z:0;else{const Zt=Math.pow(2,-B);ue=Math.floor(lt.width*Zt),ve=Math.floor(lt.height*Zt),T.isDataArrayTexture?me=lt.depth:T.isData3DTexture?me=Math.floor(lt.depth*Zt):me=1,Pe=0,Ne=0,Ae=0}X!==null?($e=X.x,et=X.y,gt=X.z):($e=0,et=0,gt=0);const it=be.convert(O.format),Ce=be.convert(O.type);let ft;O.isData3DTexture?(Ie.setTexture3D(O,0),ft=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ie.setTexture2DArray(O,0),ft=L.TEXTURE_2D_ARRAY):(Ie.setTexture2D(O,0),ft=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const je=L.getParameter(L.UNPACK_ROW_LENGTH),zt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),vi=L.getParameter(L.UNPACK_SKIP_PIXELS),Bt=L.getParameter(L.UNPACK_SKIP_ROWS),aa=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,lt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,lt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Pe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ne),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ae);const pt=T.isDataArrayTexture||T.isData3DTexture,jt=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){const Zt=pe.get(T),Lt=pe.get(O),Nt=pe.get(Zt.__renderTarget),js=pe.get(Lt.__renderTarget);re.bindFramebuffer(L.READ_FRAMEBUFFER,Nt.__webglFramebuffer),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,js.__webglFramebuffer);for(let Qn=0;Qn<me;Qn++)pt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pe.get(T).__webglTexture,B,Ae+Qn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pe.get(O).__webglTexture,ne,gt+Qn)),L.blitFramebuffer(Pe,Ne,ue,ve,$e,et,ue,ve,L.DEPTH_BUFFER_BIT,L.NEAREST);re.bindFramebuffer(L.READ_FRAMEBUFFER,null),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||T.isRenderTargetTexture||pe.has(T)){const Zt=pe.get(T),Lt=pe.get(O);re.bindFramebuffer(L.READ_FRAMEBUFFER,Ju),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,Qu);for(let Nt=0;Nt<me;Nt++)pt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Zt.__webglTexture,B,Ae+Nt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Zt.__webglTexture,B),jt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Lt.__webglTexture,ne,gt+Nt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Lt.__webglTexture,ne),B!==0?L.blitFramebuffer(Pe,Ne,ue,ve,$e,et,ue,ve,L.COLOR_BUFFER_BIT,L.NEAREST):jt?L.copyTexSubImage3D(ft,ne,$e,et,gt+Nt,Pe,Ne,ue,ve):L.copyTexSubImage2D(ft,ne,$e,et,Pe,Ne,ue,ve);re.bindFramebuffer(L.READ_FRAMEBUFFER,null),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else jt?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(ft,ne,$e,et,gt,ue,ve,me,it,Ce,lt.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(ft,ne,$e,et,gt,ue,ve,me,it,lt.data):L.texSubImage3D(ft,ne,$e,et,gt,ue,ve,me,it,Ce,lt):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ne,$e,et,ue,ve,it,Ce,lt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ne,$e,et,lt.width,lt.height,it,lt.data):L.texSubImage2D(L.TEXTURE_2D,ne,$e,et,ue,ve,it,Ce,lt);L.pixelStorei(L.UNPACK_ROW_LENGTH,je),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,zt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,vi),L.pixelStorei(L.UNPACK_SKIP_ROWS,Bt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,aa),ne===0&&O.generateMipmaps&&L.generateMipmap(ft),re.unbindTexture()},this.initRenderTarget=function(T){pe.get(T).__webglFramebuffer===void 0&&Ie.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ie.setTextureCube(T,0):T.isData3DTexture?Ie.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ie.setTexture2DArray(T,0):Ie.setTexture2D(T,0),re.unbindTexture()},this.resetState=function(){E=0,R=0,C=null,re.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}function Ev(n,e){const t=new Sv({canvas:n,antialias:!0,powerPreference:"high-performance",stencil:!1,alpha:!1,preserveDrawingBuffer:new URLSearchParams(location.search).has("shot")});t.setPixelRatio(e.device.pixelRatio),t.outputColorSpace=pi,t.toneMapping=Nn,t.shadowMap.enabled=!0,t.shadowMap.type=Th;const i=new Un,a=new en(62,1,2,2e5),s=()=>{const o=n.clientWidth||innerWidth,r=n.clientHeight||innerHeight;t.setSize(o,r,!1),a.aspect=o/r,a.updateProjectionMatrix()};return s(),addEventListener("resize",s),{renderer:t,scene:i,camera:a}}function Tv(n,e){const t=n.getDrawingBufferSize(new ke),i=new La(t.x,t.y);return i.type=vn,i.format=Zn,i.minFilter=mt,i.magFilter=mt,new Pt(t.x,t.y,{type:_n,format:wt,minFilter:ht,magFilter:ht,depthBuffer:!0,stencilBuffer:!1,depthTexture:i,samples:e.msaaSamples})}const gc=[1,.85,.72,.6,.5,.4],Av=20,Rv=12;class Cv{index=0;slowFrames=0;fastFrames=0;cooldown=0;pinned=null;baseRatio;constructor(e){this.baseRatio=e.getPixelRatio()}get scale(){return this.pinned??gc[this.index]}pin(e){this.pinned=e}update(e,t){return this.pinned!==null?!1:this.cooldown>0?(this.cooldown-=t,!1):(e>Av?(this.slowFrames++,this.fastFrames=0):e<Rv?(this.fastFrames++,this.slowFrames=0):(this.slowFrames=0,this.fastFrames=0),this.slowFrames>30&&this.index<gc.length-1?(this.index++,this.slowFrames=0,this.cooldown=1.5,!0):this.fastFrames>180&&this.index>0?(this.index--,this.fastFrames=0,this.cooldown=3,!0):!1)}apply(e){e.setPixelRatio(this.baseRatio*this.scale)}}const gi=`
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
vec3 atmosphere(vec3 ro, vec3 rd, float maxDist, out vec3 transmittance) {
  float shell = rayShell(ro, rd, R_TOP);
  if (shell <= 0.0) { transmittance = vec3(1.0); return vec3(0.0); }

  float ground = rayGround(ro, rd);
  float far = shell;
  if (ground > 0.0) far = min(far, ground);
  far = min(far, maxDist);

  const int N = ATMO_STEPS;
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

/** Ray origin for a camera 'altM' metres above the ground at the scene origin. */
vec3 atmoOrigin(float altM) {
  return vec3(0.0, R_GROUND + max(altM, 1.0), 0.0);
}
`,Ia=`
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
`,Dv=`
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
`,Pv=`
precision highp float;
in vec3 vRayDir;
out vec4 fragColor;

${gi}
${Ia}

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

  fragColor = vec4(col, 1.0);
}
`;class Lv{mesh;uniforms;constructor(){this.uniforms={uInvProj:{value:new ot},uInvView:{value:new ot},uSunDir:{value:new F(0,1,0)},uSunColor:{value:new Te(1,1,1)},uSunIntensity:{value:22},uMieG:{value:.76},uTurbidity:{value:1},uCamAltitude:{value:100},uMultiScatter:{value:.055},uExposure:{value:1},uMoonDir:{value:new F(0,-1,0)},uMoonIllum:{value:1},uNightAmount:{value:0},uTime:{value:0}};const e=new nn({vertexShader:Dv,fragmentShader:Pv,uniforms:this.uniforms,glslVersion:Ot,depthWrite:!1,depthTest:!1,side:tn}),t=new Tt;t.setAttribute("position",new dt(new Float32Array(9),3)),t.boundingSphere=new kn(new F,1/0),this.mesh=new xt(t,e),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1e3,this.mesh.matrixAutoUpdate=!1}update(e,t,i,a){const s=this.uniforms,o=e.sun.dir;s.uSunDir.value.set(o.x,o.y,o.z);const r=e.moon.dir;s.uMoonDir.value.set(r.x,r.y,r.z),s.uMoonIllum.value=e.moonIllum,s.uCamAltitude.value=i,s.uTime.value=a;const l=1-Math.max(0,Math.min(1,(e.sun.altitude+12)/14));s.uNightAmount.value=l*(1-.85*t.totalCover),s.uMieG.value=.62+.22*Math.max(0,Math.min(1,(t.humidity-30)/60));const c=Math.max(.2,t.visibility/1e3);s.uTurbidity.value=Math.max(.6,Math.min(12,34/c)),s.uSunIntensity.value=22,s.uSunColor.value.setRGB(1,1,1)}syncCamera(e){this.uniforms.uInvProj.value.copy(e.projectionMatrixInverse),this.uniforms.uInvView.value.copy(e.matrixWorld)}}const Iv=1.5,sl=[{extent:400,segments:128,imageryZoom:18},{extent:1100,segments:192,imageryZoom:17},{extent:2200,segments:224,imageryZoom:16},{extent:6e3,segments:320,imageryZoom:15},{extent:2e4,segments:256,imageryZoom:13},{extent:7e4,segments:192,imageryZoom:10}],Uv=[{extent:400,segments:96,imageryZoom:18},{extent:1100,segments:144,imageryZoom:16},{extent:2200,segments:160,imageryZoom:15},{extent:6e3,segments:224,imageryZoom:14},{extent:2e4,segments:192,imageryZoom:12},{extent:7e4,segments:160,imageryZoom:9}],vc=4,Nv=3,Fv=8,kv=42,Ov=1.05,eu=256,zv=111412,_c=3,Bv=4,Hv=4/3,Gv=12,Vv=5,wc=.5,Wv=21,Xv=1.7*48+12,$v=48;function tu(n){return n.deviceMemoryGb!==null?n.deviceMemoryGb:n.coarsePointer?Nv:Fv}function qv(n){let e=0;for(const t of n)e=Math.max(e,nu(t)*eu);return e}function nu(n){const e=2*n.extent*Ov,t=Math.cos(kv*Math.PI/180),i=zv*t*360/2**n.imageryZoom;return Math.floor(e/i)+1}function Yv(n){return n.length>0?iu([n[0]]):0}function iu(n){let e=0;for(const t of n){const i=nu(t)*eu;e+=i*i*Bv*Hv}return e}const jv={rings:sl,msaaSamples:4,shadowCascadeSize:2048,shadowCascadeCount:3,aoEnabled:!0,buildingTriangleBudget:4e6,roadTriangleBudget:7e5},Zv={rings:Uv,msaaSamples:0,shadowCascadeSize:1024,shadowCascadeCount:2,aoEnabled:!1,buildingTriangleBudget:75e4,roadTriangleBudget:35e4},Kv={full:jv,reduced:Zv};function Jv(n,e){const t=e.drawingBufferWidth,i=e.drawingBufferHeight,a=Math.max(1,Math.floor(t*wc)),s=Math.max(1,Math.floor(i*wc)),o=[{what:"drape rings",bytes:iu(n.rings)},{what:`scene target ${t}x${i} msaa ${n.msaaSamples}`,bytes:t*i*Gv*(1+n.msaaSamples)},{what:`shadow cascades ${_c}x${n.shadowCascadeSize}`,bytes:_c*n.shadowCascadeSize**2*Vv},{what:`ambient occlusion ${n.aoEnabled?`${a}x${s}`:"off"}`,bytes:n.aoEnabled?a*s*Wv:0},{what:`detail ring restitch ${n.rings[0].extent} m z${n.rings[0].imageryZoom}`,bytes:Yv(n.rings)},{what:`building geometry ${(n.buildingTriangleBudget/1e3).toFixed(0)}k tris`,bytes:n.buildingTriangleBudget*Xv},{what:`road geometry ${(n.roadTriangleBudget/1e3).toFixed(0)}k tris`,bytes:n.roadTriangleBudget*$v}];let r=0;for(const l of o)r+=l.bytes;return{items:o,totalBytes:r}}function Qv(n,e){const t=Kv[n];return{tier:n,device:e,reasons:[],assumedMemoryGb:tu(e),...t,memory:Jv(t,e)}}function e_(n){const e=[],t=tu(n);if(n.coarsePointer&&e.push("pointer is coarse"),t<=vc){const s=n.deviceMemoryGb===null?"assumed":"reported";e.push(`memory ${s} ${t} GB, at or below ${vc} GB`)}const i=qv(sl);n.maxTextureSize!==null&&n.maxTextureSize<i&&e.push(`MAX_TEXTURE_SIZE ${n.maxTextureSize} below the ${i} px the full drape needs`);const a=Qv(e.length>0?"reduced":"full",n);return a.reasons=e,a}function t_(){const n=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,e=typeof navigator>"u"?void 0:navigator.deviceMemory,t=Math.min(typeof devicePixelRatio=="number"?devicePixelRatio:1,Iv);return{coarsePointer:n,deviceMemoryGb:typeof e=="number"?e:null,maxTextureSize:n_(),drawingBufferWidth:Math.round(innerWidth*t),drawingBufferHeight:Math.round(innerHeight*t),pixelRatio:t}}function n_(){if(typeof document>"u")return null;try{const n=document.createElement("canvas").getContext("webgl2");if(!n)return null;const e=n.getParameter(n.MAX_TEXTURE_SIZE);return n.getExtension("WEBGL_lose_context")?.loseContext(),e}catch{return null}}let To=null;function au(){return To===null&&(To=e_(t_())),To}function xc(n){return`${(n/1048576).toFixed(1)} MB`}const yc=new F,bc=new F,Ao=new Te(.016,.02,.034),Ro=new Te(.01,.013,.022),i_=.42,a_=.54,s_=.34,o_=new Te(.72,.82,1);function r_(n,e){const t=n.sun.altitude;yc.set(n.sun.dir.x,n.sun.dir.y,n.sun.dir.z);const i=1-Math.max(0,Math.min(1,(t+6)/10)),a=e.totalCover,o=26*(Math.max(0,Math.min(1,(t+2)/8))*(1-e.opacity)),r=new Te(.26,.38,.58),l=new Te(.52,.55,.58),c=r.clone().lerp(l,a);c.multiplyScalar(s_*(1+1.5*e.opacity*Math.max(0,Math.min(1,(t+4)/12))));const h=Math.max(0,Math.min(1,(n.moon.altitude+1.5)/14)),d=n.moonIllum*h*(1-.92*e.opacity)*i;c.multiplyScalar(Math.max(0,1-i)),c.r+=Ao.r*i+Ro.r*d,c.g+=Ao.g*i+Ro.g*d,c.b+=Ao.b*i+Ro.b*d,bc.set(n.moon.dir.x,n.moon.dir.y,n.moon.dir.z);const f=o_.clone().multiplyScalar(i_*d),p=Math.max(0,Math.min(1,e.precip*1.6))*(e.precipKind==="rain"?1:.3),g=e.precipKind==="snow"?Math.max(0,Math.min(1,.35+e.precip*.9)):e.tempC<-3?.25:0,v=Math.max(.2,e.visibility/1e3);return{sunDir:yc.clone(),sunColor:new Te(1,1,1),sunIntensity:o,moonDir:bc.clone(),moonLight:f,ambient:c,night:i,nightGlow:new Te(.03,.028,.027).multiplyScalar(i),wetness:p,snow:g,mieG:.62+.22*Math.max(0,Math.min(1,(e.humidity-30)/60)),turbidity:Math.max(.6,Math.min(12,34/v)),exposure:a_+2.16*i*i,fogEnd:Math.min(16e4,e.visibility*2.6)}}function su(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Co=new Int8Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function l_(n){const e=new Uint8Array(512);for(let t=0;t<256;t++)e[t]=t;for(let t=255;t>0;t--){const i=n()*(t+1)|0,a=e[t];e[t]=e[i],e[i]=a}return e.copyWithin(256,0,256),e}function Do(n){return n*n*n*(n*(n*6-15)+10)}function Po(n,e,t,i,a){const s=Math.floor(n),o=Math.floor(e),r=Math.floor(t),l=n-s,c=e-o,h=t-r,d=(s%i+i)%i,f=(o%i+i)%i,p=(r%i+i)%i,g=(d+1)%i,v=(f+1)%i,m=(p+1)%i,u=Do(l),_=Do(c),w=Do(h),x=(j,ee,oe,Ee,Ge,Fe)=>{const Le=a[a[a[j]+ee]+oe]%12*3;return Co[Le]*Ee+Co[Le+1]*Ge+Co[Le+2]*Fe},S=x(d,f,p,l,c,h),E=x(g,f,p,l-1,c,h),R=x(d,v,p,l,c-1,h),C=x(g,v,p,l-1,c-1,h),b=x(d,f,m,l,c,h-1),y=x(g,f,m,l-1,c,h-1),A=x(d,v,m,l,c-1,h-1),P=x(g,v,m,l-1,c-1,h-1),I=S+u*(E-S),U=R+u*(C-R),k=b+u*(y-b),H=A+u*(P-A),V=I+_*(U-I),z=k+_*(H-k);return V+w*(z-V)}function Wi(n,e){const t=new Float32Array(n*n*n*3);for(let i=0;i<t.length;i++)t[i]=e();return t}function Lo(n,e,t,i,a){const s=Math.floor(n),o=Math.floor(e),r=Math.floor(t);let l=4;for(let c=-1;c<=1;c++){const h=r+c,d=(h%i+i)%i;for(let f=-1;f<=1;f++){const p=o+f,g=(p%i+i)%i;for(let v=-1;v<=1;v++){const m=s+v,u=(m%i+i)%i,_=((d*i+g)*i+u)*3,w=m+a[_]-n,x=p+a[_+1]-e,S=h+a[_+2]-t,E=w*w+x*x+S*S;E<l&&(l=E)}}}return 1-Math.min(1,Math.sqrt(l))}function ou(n,e,t,i,a,s,o){return[Lo(n*i,e*i,t*i,i,a),Lo(n*i*2,e*i*2,t*i*2,i*2,s),Lo(n*i*4,e*i*4,t*i*4,i*4,o)]}function ru(n,e){const t=new zh(e,n,n,n);return t.format=wt,t.type=Et,t.minFilter=ht,t.magFilter=ht,t.wrapS=Gi,t.wrapT=Gi,t.wrapR=Gi,t.needsUpdate=!0,t}const c_=64,h_=32;function u_(){const n=su(6221072),e=l_(n),t=4,i=Wi(t,n),a=Wi(t*2,n),s=Wi(t*4,n),o=c_,r=new Uint8Array(o*o*o*4),l=1/o;for(let c=0;c<o;c++){const h=c*l;for(let d=0;d<o;d++){const f=d*l;for(let p=0;p<o;p++){const g=p*l;let v=0;v+=.5*Po(g*4,f*4,h*4,4,e),v+=.25*Po(g*8,f*8,h*8,8,e),v+=.125*Po(g*16,f*16,h*16,16,e);const m=Math.max(0,Math.min(1,v/(.875*1.4)+.5)),[u,_,w]=ou(g,f,h,t,i,a,s),x=((c*o+d)*o+p)*4;r[x]=m*255|0,r[x+1]=u*255|0,r[x+2]=_*255|0,r[x+3]=w*255|0}}}return ru(o,r)}function d_(){const n=su(13859345),e=2,t=Wi(e,n),i=Wi(e*2,n),a=Wi(e*4,n),s=h_,o=new Uint8Array(s*s*s*4),r=1/s;for(let l=0;l<s;l++)for(let c=0;c<s;c++)for(let h=0;h<s;h++){const[d,f,p]=ou(h*r,c*r,l*r,e,t,i,a),g=((l*s+c)*s+h)*4;o[g]=d*255|0,o[g+1]=f*255|0,o[g+2]=p*255|0,o[g+3]=255}return ru(s,o)}const Io=`
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
`,f_=`
precision highp float;
precision highp sampler3D;
in vec2 vUv;
in vec3 vRayDir;
out vec4 fragColor;

${gi}
${Ia}

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
  float d = texture(uDepth, vUv).r;
  float sceneDist = 1.0e9;
  if (d < 1.0) {
    vec4 clip = vec4(vUv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0);
    vec4 view = uInvProj2 * clip;
    sceneDist = length(view.xyz / view.w);
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
        if (through.g < 0.02) break;

        dt = dt0 * max(1.0, t / 6000.0);
        vec3 p = uCameraPos + rd * t;
        // Fade the deck out toward the march limit by thinning it, NOT by
        // dimming it. Dimming the light while leaving the opacity alone turned
        // distant cloud BLACK and drew a hard dark line across the sky where
        // the march ended -- the deck was still fully opaque, just unlit.
        float dens = cloudDensity(p) * smoothstep(400000.0, 200000.0, t);

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
        float shadow = 0.0;
        float lt = 0.0;
        for (int j = 0; j < 3; j++) {
          float ls = LIGHT_STEP * pow(1.5, float(j));
          shadow += cloudDensity(p + uSunDir * (lt + ls * 0.5)) * ls;
          lt += ls;
        }
        float sunT = exp(-shadow * SIGMA_LIGHT * (4.0 / 3.0));

        // Powder: the dark cores of a cloud seen against the light. Without
        // it clouds look like cotton wool with no interior.
        float powder = 1.0 - exp(-dens * 8.0);

        float sigma = dens * SIGMA_VIEW;
        vec3 stepT = exp(-vec3(sigma) * dt);

        vec3 sunColour = uSunColor * uSunIntensity * uSunSurfaceCloud;
        vec3 lum = sunColour * (ph * 4.0 + 0.5) * sunT * mix(0.35, 1.0, powder)
                 + uAmbient * 0.9;

        // Rain shafts read as darker cloud bases.
        lum *= 1.0 - 0.35 * uPrecip * smoothstep(uLow.z, uLow.y, p.y);

        scattered += through * lum * (1.0 - stepT.g);
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
      // weights them.
      float meanDens = 0.0;
      if (lowCover > 0.06) meanDens += lowCover * 0.36 * (1.0 + uPrecip * 0.6);
      if (midCover > 0.06) meanDens += midCover * 0.36 * 0.75;

      float cosSunH = dot(rd, uSunDir);
      float phH = mix(miePhase(cosSunH, 0.80), miePhase(cosSunH, -0.30), 0.35);
      // Seen edge-on through kilometres of deck, a sample is deep in it: the
      // 0.45 stands for the sun transmittance the light march would find there,
      // and the powder term is 1 because nothing that far in is an edge.
      vec3 lumH = uSunColor * uSunIntensity * uSunSurfaceCloud * (phH * 4.0 + 0.5) * 0.45
                + uAmbient * 0.9;

      float w = smoothstep(2000.0, 20000.0, rest);
      float od = meanDens * SIGMA_VIEW_REST * rest * w;
      vec3 restT = exp(-vec3(od));
      scattered += through * lumH * (1.0 - restT.g);
      through *= restT;
    }
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
      veil *= smoothstep(0.02, 0.25, rd.y);
      vec3 lit = uSunColor * uSunIntensity * uSunSurfaceCloud * 2.2 + uAmbient * 1.2;
      float a = veil * 0.55 * uHighCover;
      scattered = scattered * (1.0 - a) + lit * a;
      through *= (1.0 - a);
    }
  }

  // rgb: light added by cloud. a: fraction of the world still visible.
  fragColor = vec4(scattered, through.g);
}
`,lu=`
uniform float uNight;
float bloomThreshold() { return mix(1.15, 0.085, uNight); }
float bloomStrength()  { return mix(0.10, 0.55, uNight); }
`,p_=`
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uScene;
uniform float uExposure;
${lu}

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
`,m_=`
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
`,g_=`
precision highp float;
in vec2 vUv;
out vec4 fragColor;

${Ia}

uniform sampler2D uScene;
uniform sampler2D uCloud;
uniform sampler2D uBloom;
${lu}

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
`;function Uo(){const n=new Tt;return n.setAttribute("position",new dt(new Float32Array(9),3)),n.boundingSphere=new kn(new F,1/0),n}class v_{scene=new Un;presentScene=new Un;camera=new Hs(-1,1,1,-1,0,1);uniforms;presentUniforms;brightUniforms;brightScene=new Un;blurScene=new Un;blurUniforms;bloomA;bloomB;cloudTarget;shapeNoise;detailNoise;readback=null;constructor(e){const t=performance.now();this.shapeNoise=u_(),this.detailNoise=d_(),console.log(`[skycast] cloud noise baked in ${(performance.now()-t).toFixed(0)} ms`),this.uniforms={uDepth:{value:null},uInvProj:{value:new ot},uInvProj2:{value:new ot},uInvView:{value:new ot},uCameraPos:{value:new F},uAmbient:{value:new Te(.2,.24,.3)},uNear:{value:2},uFar:{value:2e5},uTime:{value:0},uLow:{value:new F(0,800,1800)},uMid:{value:new F(0,3800,5e3)},uHighCover:{value:0},uHighBase:{value:9e3},uWind:{value:new ke},uPrecip:{value:0},uExposure:{value:1},uSunDir:{value:new F(0,1,0)},uSunColor:{value:new Te(1,1,1)},uSunIntensity:{value:16},uSunSurfaceCloud:{value:.105},uMieG:{value:.76},uTurbidity:{value:1},uCamAltitude:{value:100},uMultiScatter:{value:.055},uShape:{value:this.shapeNoise},uDetail:{value:this.detailNoise}};const i=new nn({vertexShader:Io,fragmentShader:f_,uniforms:this.uniforms,glslVersion:Ot,depthTest:!1,depthWrite:!1}),a=new xt(Uo(),i);a.frustumCulled=!1,this.scene.add(a),this.presentUniforms={uScene:{value:null},uCloud:{value:null},uBloom:{value:null},uExposure:{value:1},uNight:{value:0}},this.brightUniforms={uScene:{value:null},uExposure:{value:1},uNight:{value:0}},this.blurUniforms={uSource:{value:null},uDirection:{value:new ke(1,0)}};const s=new nn({vertexShader:Io,fragmentShader:g_,uniforms:this.presentUniforms,glslVersion:Ot,depthTest:!1,depthWrite:!1}),o=new xt(Uo(),s);o.frustumCulled=!1,this.presentScene.add(o);const r=(f,p,g)=>{const v=new xt(Uo(),new nn({vertexShader:Io,fragmentShader:p,uniforms:g,glslVersion:Ot,depthTest:!1,depthWrite:!1}));v.frustumCulled=!1,f.add(v)};r(this.brightScene,p_,this.brightUniforms),r(this.blurScene,m_,this.blurUniforms);const l=e.getDrawingBufferSize(new ke),c={type:_n,format:wt,minFilter:ht,magFilter:ht,depthBuffer:!1,stencilBuffer:!1},h=Math.max(1,Math.floor(l.x/4)),d=Math.max(1,Math.floor(l.y/4));this.bloomA=new Pt(h,d,c),this.bloomB=new Pt(h,d,c),this.cloudTarget=new Pt(Math.max(1,Math.floor(l.x/2)),Math.max(1,Math.floor(l.y/2)),{type:_n,format:wt,minFilter:ht,magFilter:ht,depthBuffer:!1,stencilBuffer:!1})}resize(e){const t=e.getDrawingBufferSize(new ke);this.cloudTarget.setSize(Math.max(1,Math.floor(t.x/2)),Math.max(1,Math.floor(t.y/2)));const i=Math.max(1,Math.floor(t.x/4)),a=Math.max(1,Math.floor(t.y/4));this.bloomA.setSize(i,a),this.bloomB.setSize(i,a)}render(e,t,i){this.uniforms.uDepth.value=i,e.setRenderTarget(this.cloudTarget),e.render(this.scene,this.camera),this.brightUniforms.uScene.value=t,e.setRenderTarget(this.bloomA),e.render(this.brightScene,this.camera),this.blurUniforms.uSource.value=this.bloomA.texture,this.blurUniforms.uDirection.value.set(1,0),e.setRenderTarget(this.bloomB),e.render(this.blurScene,this.camera),this.blurUniforms.uSource.value=this.bloomB.texture,this.blurUniforms.uDirection.value.set(0,1),e.setRenderTarget(this.bloomA),e.render(this.blurScene,this.camera),this.presentUniforms.uScene.value=t,this.presentUniforms.uCloud.value=this.cloudTarget.texture,this.presentUniforms.uBloom.value=this.bloomA.texture,e.setRenderTarget(null),e.render(this.presentScene,this.camera)}measureBanding(e){const t=this.cloudTarget.width,i=this.cloudTarget.height,a=t*i*4;(!this.readback||this.readback.length!==a)&&(this.readback=new Uint16Array(a));const s=this.readback;e.readRenderTargetPixels(this.cloudTarget,0,0,t,i,s);const o=8,r=Math.floor(t/o),l=Math.floor(i/o);if(r<2||l<2)return{rows:0,cols:0,ratio:0};const c=new Float32Array(r*l),h=new Uint8Array(r*l),d=Vh.fromHalfFloat;for(let _=0;_<l;_++)for(let w=0;w<r;w++){let x=0,S=0;for(let E=0;E<o;E++){const R=(_*o+E)*t;for(let C=0;C<o;C++){const b=(R+w*o+C)*4;d(s[b+3])>=.5||(x+=.2126*d(s[b])+.7152*d(s[b+1])+.0722*d(s[b+2]),S++)}}S===o*o&&(c[_*r+w]=x/S,h[_*r+w]=1)}let f=0,p=0,g=0,v=0;for(let _=0;_<l;_++)for(let w=0;w<r;w++){const x=_*r+w;h[x]&&(_+1<l&&h[x+r]&&(f+=Math.abs(c[x+r]-c[x]),p++),w+1<r&&h[x+1]&&(g+=Math.abs(c[x+1]-c[x]),v++))}if(p===0||v===0)return{rows:0,cols:0,ratio:0};const m=f/p,u=g/v;return{rows:m,cols:u,ratio:m/Math.max(u,1e-9)}}update(e,t,i,a){const s=this.uniforms;s.uInvProj.value.copy(e.projectionMatrixInverse),s.uInvProj2.value.copy(e.projectionMatrixInverse),s.uInvView.value.copy(e.matrixWorld),s.uCameraPos.value.copy(e.position),s.uNear.value=e.near,s.uFar.value=e.far,s.uTime.value=a,s.uLow.value.set(t.low.cover,t.low.base,t.low.top),s.uMid.value.set(t.mid.cover,t.mid.base,t.mid.top),s.uHighCover.value=t.high.cover,s.uHighBase.value=t.high.base;const o=(t.windDir+180)*Math.PI/180;s.uWind.value.set(Math.sin(o)*t.windSpeed,-Math.cos(o)*t.windSpeed),s.uPrecip.value=Math.min(1,t.precip*1.2),s.uAmbient.value.copy(i.ambient),s.uSunDir.value.copy(i.sunDir),s.uSunColor.value.copy(i.sunColor),s.uSunIntensity.value=i.sunIntensity,s.uMieG.value=i.mieG,s.uTurbidity.value=i.turbidity,s.uCamAltitude.value=e.position.y}}const __=`
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
`,Ua=2,Tn=[350,1400,6e3],Mc=3e3,w_=2,x_=.02,y_=.06,Vs=`
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
`,b_=`precision highp float;
in vec3 position;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,M_=`precision highp float;
out vec4 c;
void main() { c = vec4(1.0); }`;function cu(){return new nn({glslVersion:Ot,vertexShader:b_,fragmentShader:M_,side:tn,colorWrite:!1})}function S_(n){const e=new La(n,n);return e.type=vn,e.format=Zn,e.minFilter=mt,e.magFilter=mt,e.compareFunction=null,new Pt(n,n,{depthBuffer:!0,stencilBuffer:!1,depthTexture:e,format:mi,type:Et})}const os=new F,Li=new F,E_=new F,No=new F,Sc=new ot,rs=new Kn,Ec=new Kn;class T_{uniforms;enabled=!0;cascades=[];depthMaterial;size;budget;constructor(e){this.budget=e;const t=e.shadowCascadeSize;this.size=t;for(let i=0;i<3;i++)this.cascades.push({target:S_(t),camera:new Hs(-1,1,1,-1,1,100),matrix:new ot,texelWorld:1,depthRange:1});this.depthMaterial=cu(),this.uniforms={uShadowMap0:{value:this.cascades[0].target.depthTexture},uShadowMap1:{value:this.cascades[1].target.depthTexture},uShadowMap2:{value:this.cascades[2].target.depthTexture},uShadowMat0:{value:this.cascades[0].matrix},uShadowMat1:{value:this.cascades[1].matrix},uShadowMat2:{value:this.cascades[2].matrix},uCascadeFar:{value:new F(Tn[0],Tn[1],Tn[2])},uCascadeTexelWorld:{value:new F(1,1,1)},uCascadeDepth:{value:new F(1,1,1)},uShadowTexel:{value:1/t},uShadowStrength:{value:0}}}update(e,t,i,a,s,o=[]){const r=this.uniforms,l=Tl.smoothstep(a.y,x_,y_);if(!this.enabled||l<=0){r.uShadowStrength.value=0;return}const c=s<.8;this.setSize(c?Math.min(this.budget.shadowCascadeSize,1024):this.budget.shadowCascadeSize);const h=c?Math.min(this.budget.shadowCascadeCount,2):this.budget.shadowCascadeCount;for(let g=0;g<h;g++)this.fit(this.cascades[g],i,a,g);const d=e.getRenderTarget(),f=t.overrideMaterial,p=e.autoClear;t.overrideMaterial=this.depthMaterial,e.autoClear=!1;for(let g=0;g<h;g++){const v=this.cascades[g];if(v.camera.layers.set(Ua),e.setRenderTarget(v.target),e.clear(!1,!0,!1),e.render(t,v.camera),o.length&&g<w_){t.overrideMaterial=null;for(const m of o)e.render(m,v.camera);t.overrideMaterial=this.depthMaterial}}e.autoClear=p,t.overrideMaterial=f,e.setRenderTarget(d),r.uShadowMat0.value.copy(this.cascades[0].matrix),r.uShadowMat1.value.copy(this.cascades[1].matrix),r.uShadowMat2.value.copy(this.cascades[2].matrix),r.uCascadeTexelWorld.value.set(this.cascades[0].texelWorld,this.cascades[1].texelWorld,this.cascades[2].texelWorld),r.uCascadeDepth.value.set(this.cascades[0].depthRange,this.cascades[1].depthRange,this.cascades[2].depthRange),r.uCascadeFar.value.set(Tn[0],Tn[1],h>2?Tn[2]:Tn[1]),r.uShadowTexel.value=1/this.size,r.uShadowStrength.value=l}fit(e,t,i,a){const s=a===0?t.near:Tn[a-1],o=Tn[a],r=Math.tan(Tl.degToRad(t.fov*.5)),l=r*t.aspect,c=l*l+r*r;let h,d;c>=(o-s)/(o+s)?(h=-o,d=o*Math.sqrt(c)):(h=-.5*(o+s)*(1+c),d=.5*Math.sqrt((o-s)*(o-s)+2*(o*o+s*s)*c+(o+s)*(o+s)*c*c)),os.set(0,0,h).applyMatrix4(t.matrixWorld),No.set(0,1,0),Math.abs(i.y)>.999&&No.set(0,0,1),Sc.lookAt(i,E_.set(0,0,0),No),rs.setFromRotationMatrix(Sc),Ec.copy(rs).invert();const f=2*d/this.size;Li.copy(os).applyQuaternion(Ec),Li.x=Math.round(Li.x/f)*f,Li.y=Math.round(Li.y/f)*f,os.copy(Li).applyQuaternion(rs);const p=e.camera;p.quaternion.copy(rs),p.position.copy(os).addScaledVector(i,d+Mc),p.updateMatrixWorld(!0);const g=d+f;p.left=-g,p.right=g,p.top=g,p.bottom=-g,p.near=1,p.far=2*d+2*Mc,p.updateProjectionMatrix(),e.matrix.multiplyMatrices(p.projectionMatrix,p.matrixWorldInverse),e.texelWorld=f,e.depthRange=p.far-p.near}setSize(e){if(e!==this.size){this.size=e;for(const t of this.cascades)t.target.setSize(e,e);this.uniforms.uShadowMap0.value=this.cascades[0].target.depthTexture,this.uniforms.uShadowMap1.value=this.cascades[1].target.depthTexture,this.uniforms.uShadowMap2.value=this.cascades[2].target.depthTexture}}dispose(){for(const e of this.cascades)e.target.dispose();this.depthMaterial.dispose()}}const A_=`
precision highp float;
out vec2 vUv;
void main() {
  vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2) * 2.0 - 1.0;
  vUv = p * 0.5 + 0.5;
  gl_Position = vec4(p, 1.0, 1.0);
}
`,R_=3,C_=6,D_=2,P_=`
precision highp float;
${__}

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

const int SLICES = ${R_};
const int STEPS = ${C_};

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
      float d = radiusPx * pow((float(si) + 1.0 + stepOffset) / float(STEPS), ${D_.toFixed(1)});
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
`,L_=`
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
`,Ws=`
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
`;function Xs(){return{uAo:{value:null},uAoStrength:{value:0},uAoInvResolution:{value:new ke(1/1920,1/1080)}}}function I_(){const n=new Tt;return n.setAttribute("position",new dt(new Float32Array(9),3)),n.boundingSphere=new kn(new F,1/0),n}const Tc=.5,Fo=new ke;class U_{enabled=!0;depthTarget;rawTarget;blurTarget;depthMaterial;scene=new Un;blurScene=new Un;camera=new Hs(-1,1,1,-1,0,1);uniforms;blurUniforms;frameSize=new ke(1,1);readback=null;constructor(e){const t=this.aoSize(e);this.depthTarget=N_(t.x,t.y);const i={type:_n,format:wt,minFilter:ht,magFilter:ht,depthBuffer:!1,stencilBuffer:!1};this.rawTarget=new Pt(t.x,t.y,i),this.blurTarget=new Pt(t.x,t.y,i),this.depthMaterial=cu(),this.uniforms={uDepth:{value:this.depthTarget.depthTexture},uTexel:{value:new ke(1/t.x,1/t.y)},uViewScale:{value:new ke(1,1)},uViewToWorld:{value:new ze},uNear:{value:2},uFar:{value:2e5},uFocalPx:{value:1},uRadius:{value:14},uMaxRadiusPx:{value:96},uFalloffStart:{value:.7},uFade:{value:new ke(1200,3e3)}},this.blurUniforms={uSource:{value:this.rawTarget.texture},uDepth:{value:this.depthTarget.depthTexture},uTexel:{value:new ke(1/t.x,1/t.y)},uNear:{value:2},uFar:{value:2e5}};const a=(s,o,r)=>{const l=new xt(I_(),new nn({vertexShader:A_,fragmentShader:o,uniforms:r,glslVersion:Ot,depthTest:!1,depthWrite:!1}));l.frustumCulled=!1,s.add(l)};a(this.scene,P_,this.uniforms),a(this.blurScene,L_,this.blurUniforms)}get texture(){return this.blurTarget.texture}aoSize(e){return e.getDrawingBufferSize(Fo),new ke(Math.max(1,Math.floor(Fo.x*Tc)),Math.max(1,Math.floor(Fo.y*Tc)))}resize(e){const t=this.aoSize(e);t.x===this.rawTarget.width&&t.y===this.rawTarget.height||(this.depthTarget.setSize(t.x,t.y),this.rawTarget.setSize(t.x,t.y),this.blurTarget.setSize(t.x,t.y),this.uniforms.uDepth.value=this.depthTarget.depthTexture,this.blurUniforms.uDepth.value=this.depthTarget.depthTexture,this.uniforms.uTexel.value.set(1/t.x,1/t.y),this.blurUniforms.uTexel.value.set(1/t.x,1/t.y))}render(e,t,i,a=[]){if(!this.enabled)return;this.resize(e),e.getDrawingBufferSize(this.frameSize);const s=e.getRenderTarget(),o=t.overrideMaterial,r=e.autoClear,l=i.layers.mask;if(t.overrideMaterial=this.depthMaterial,e.autoClear=!1,i.layers.set(Ua),e.setRenderTarget(this.depthTarget),e.clear(!1,!0,!1),e.render(t,i),a.length){t.overrideMaterial=null;for(const h of a)e.render(h,i)}i.layers.mask=l,t.overrideMaterial=o,e.autoClear=r;const c=Math.tan(i.fov*Math.PI/360);this.uniforms.uViewScale.value.set(c*i.aspect,c),this.uniforms.uViewToWorld.value.setFromMatrix4(i.matrixWorld),this.uniforms.uNear.value=i.near,this.uniforms.uFar.value=i.far,this.blurUniforms.uNear.value=i.near,this.blurUniforms.uFar.value=i.far,this.uniforms.uFocalPx.value=this.rawTarget.height/(2*c),e.setRenderTarget(this.rawTarget),e.render(this.scene,this.camera),e.setRenderTarget(this.blurTarget),e.render(this.blurScene,this.camera),e.setRenderTarget(s)}measure(e){const t=this.blurTarget.width,i=this.blurTarget.height,a=t*i*4;(!this.readback||this.readback.length!==a)&&(this.readback=new Uint16Array(a));const s=this.readback;e.readRenderTargetPixels(this.blurTarget,0,0,t,i,s);const o=Vh.fromHalfFloat;let r=0,l=0,c=1;const h=t*i;for(let d=0;d<h;d++){const f=o(s[d*4+3]);r+=f,f<.95&&l++,c=Math.min(c,f)}return{mean:r/h,occluded:l/h,darkest:c}}apply(e,t){e.uAo.value=this.enabled?this.blurTarget.texture:null,e.uAoStrength.value=this.enabled?t:0,e.uAoInvResolution.value.set(1/this.frameSize.x,1/this.frameSize.y)}dispose(){this.depthTarget.dispose(),this.rawTarget.dispose(),this.blurTarget.dispose(),this.depthMaterial.dispose()}}function N_(n,e){const t=new La(n,e);return t.type=vn,t.format=Zn,t.minFilter=mt,t.magFilter=mt,t.compareFunction=null,new Pt(n,e,{depthBuffer:!0,stencilBuffer:!1,depthTexture:t,format:mi,type:Et})}const Na=9;function zr(){return new Float32Array(Na*3)}const ol=Math.sqrt(1/(4*Math.PI)),wa=Math.sqrt(3/(4*Math.PI)),bs=.5*Math.sqrt(15/Math.PI),hu=.25*Math.sqrt(5/Math.PI),uu=.25*Math.sqrt(15/Math.PI),rl=Math.PI,xa=2*Math.PI/3,Xn=Math.PI/4,F_=[rl,xa,xa,xa,Xn,Xn,Xn,Xn,Xn],Ps=new Float32Array(Na);function du(n,e,t,i){i[0]=ol,i[1]=wa*e,i[2]=wa*t,i[3]=wa*n,i[4]=bs*n*e,i[5]=bs*e*t,i[6]=hu*(3*t*t-1),i[7]=bs*n*t,i[8]=uu*(n*n-e*e)}function k_(n,e,t,i,a,s,o,r){du(e,t,i,Ps);for(let l=0;l<Na;l++){const c=Ps[l]*r;n[l*3]+=a*c,n[l*3+1]+=s*c,n[l*3+2]+=o*c}}function O_(n,e,t,i,a){du(e,t,i,Ps);let s=0,o=0,r=0;for(let l=0;l<Na;l++){const c=F_[l]*Ps[l];s+=n[l*3]*c,o+=n[l*3+1]*c,r+=n[l*3+2]*c}a[0]=Math.max(0,s),a[1]=Math.max(0,o),a[2]=Math.max(0,r)}function Zi(n,e,t){const i=zr();for(let a=0;a<3;a++)i[a]=n[a]*e/(rl*ol),i[3+a]=n[a]*t/(xa*wa);return i}const ls=new Float32Array(3);function z_(n,e,t,i,a,s){O_(n,e,t,i,ls);for(let o=0;o<3;o++)if(!(ls[o]>s)||!Number.isFinite(ls[o]))return!1;for(let o=0;o<3;o++){const r=a[o]/ls[o];if(!Number.isFinite(r))return!1;for(let l=0;l<Na;l++)n[l*3+o]*=r}return!0}const ll=[[0,0,-1,0,-1,0,1,0,0],[0,0,1,0,-1,0,-1,0,0],[1,0,0,0,0,1,0,1,0],[1,0,0,0,0,-1,0,-1,0],[1,0,0,0,-1,0,0,0,1],[-1,0,0,0,-1,0,0,0,-1]],Fi=ll.length;function B_(n,e,t,i){const a=ll[n],s=a[0]*e+a[3]*t+a[6],o=a[1]*e+a[4]*t+a[7],r=a[2]*e+a[5]*t+a[8],l=1/Math.sqrt(s*s+o*o+r*r);i[0]=s*l,i[1]=o*l,i[2]=r*l}function cs(n,e){return Math.atan2(n*e,Math.sqrt(n*n+e*e+1))}function H_(n,e,t,i){return cs(e,i)-cs(n,i)-cs(e,t)+cs(n,t)}const hs=new Float32Array(3);function G_(n,e,t){t.fill(0);const i=2/e;for(let a=0;a<Fi;a++)for(let s=0;s<e;s++){const o=s*i-1,r=o+i,l=(o+r)*.5;for(let c=0;c<e;c++){const h=c*i-1,d=h+i,f=(h+d)*.5;B_(a,f,l,hs);const p=((a*e+s)*e+c)*4;k_(t,hs[0],hs[1],hs[2],n[p],n[p+1],n[p+2],H_(h,d,o,r))}}}const ca=n=>n.toPrecision(9),$s=`
uniform vec3 uSH[9];

/** Sky irradiance for a surface normal. Clamped: see the note in sh.ts. */
vec3 shIrradiance(vec3 n) {
  vec3 e = ${ca(rl*ol)} * uSH[0]
         + ${ca(xa*wa)} * (uSH[1] * n.y + uSH[2] * n.z + uSH[3] * n.x)
         + ${ca(Xn*bs)} * (uSH[4] * n.x * n.y + uSH[5] * n.y * n.z + uSH[7] * n.x * n.z)
         + ${ca(Xn*hu)} * uSH[6] * (3.0 * n.z * n.z - 1.0)
         + ${ca(Xn*uu)} * uSH[8] * (n.x * n.x - n.y * n.y);
  return max(e, vec3(0.0));
}
`,V_=.105,Vt=16,W_=`
out vec2 vNdc;
void main() {
  // Fullscreen triangle from gl_VertexID; no attributes, same trick as sky.ts.
  vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2) * 2.0 - 1.0;
  vNdc = p;
  gl_Position = vec4(p, 1.0, 1.0);
}
`,X_=`
precision highp float;
in vec2 vNdc;
out vec4 fragColor;

// The probe is six small renders on a slow cadence, so it can afford the full
// march the sky dome uses rather than the shortened one the surface shaders
// run per fragment.
${gi}

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
      (uSunColor * uSunIntensity * ${V_.toFixed(4)} * groundSunT * max(0.0, uSunDir.y)
       + uGroundAmbient);
    // Faded in over the first couple of degrees below the horizon. A hard edge
    // here would show up as a hard line in every glass reflection in the city.
    col += lit * trans * smoothstep(0.0, -0.035, rd.y);
  }

  fragColor = vec4(col, 1.0);
}
`,$_=6,Ac=45,q_=.009,Y_=new Te(.72,.75,.8);class j_{texture;sh=zr();cube;strip;pixels=new Float32Array(Vt*Vt*Fi*4);raw=zr();reading=!1;ambient=new Float32Array(3);material;uniforms;scene=new Un;camera=new il;basis=[];frames=Ac;lastSun=new F(0,-1,0);lastAlt=-1;lastTurbidity=-1;rendered=!1;constructor(e=64){this.cube=new $h(e,{type:_n,format:wt,generateMipmaps:!0,minFilter:In,magFilter:ht}),this.texture=this.cube.texture,this.strip=new Pt(Vt,Vt*Fi,{type:pn,format:wt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1,minFilter:mt,magFilter:mt});for(const a of ll)this.basis.push(new ze().set(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8]));this.uniforms={uSunDir:{value:new F(0,1,0)},uSunColor:{value:new Te(1,1,1)},uSunIntensity:{value:22},uMieG:{value:.76},uTurbidity:{value:1},uCamAltitude:{value:100},uMultiScatter:{value:.055},uFaceBasis:{value:new ze},uGroundAlbedo:{value:new Te(.16,.155,.145)},uGroundAmbient:{value:new Te(.2,.24,.3)}},this.material=new nn({vertexShader:W_,fragmentShader:X_,uniforms:this.uniforms,glslVersion:Ot,depthWrite:!1,depthTest:!1});const t=new Tt;t.setAttribute("position",new dt(new Float32Array(9),3)),t.boundingSphere=new kn(new F,1/0);const i=new xt(t,this.material);i.frustumCulled=!1,this.scene.add(i),this.sh.set(Zi([.28,.36,.5],.55,.45))}get maxLod(){return Math.log2(this.cube.width)}setSize(e){e!==this.cube.width&&(this.cube.setSize(e,e),this.rendered=!1)}update(e,t,i){const a=this.uniforms;this.frames++;const s=!this.rendered||this.lastSun.dot(t.sunDir)<Math.cos(q_)||Math.abs(i-this.lastAlt)>60+.12*Math.abs(this.lastAlt)||Math.abs(t.turbidity-this.lastTurbidity)>.04*this.lastTurbidity;if(!(this.frames>=Ac||s&&this.frames>=$_))return!1;this.frames=0,a.uSunDir.value.copy(t.sunDir),a.uSunColor.value.copy(t.sunColor),a.uSunIntensity.value=t.sunIntensity,a.uMieG.value=t.mieG,a.uTurbidity.value=t.turbidity,a.uCamAltitude.value=i,a.uGroundAmbient.value.copy(t.ambient),a.uGroundAlbedo.value.setRGB(.16,.155,.145).lerp(Y_,t.snow),this.lastSun.copy(t.sunDir),this.lastAlt=i,this.lastTurbidity=t.turbidity;const o=e.getRenderTarget(),r=a.uFaceBasis.value;for(let l=0;l<Fi;l++)r.copy(this.basis[l]),e.setRenderTarget(this.cube,l),e.render(this.scene,this.camera);this.strip.scissorTest=!0;for(let l=0;l<Fi;l++)r.copy(this.basis[l]),this.strip.viewport.set(0,l*Vt,Vt,Vt),this.strip.scissor.set(0,l*Vt,Vt,Vt),e.setRenderTarget(this.strip),e.render(this.scene,this.camera);return this.strip.scissorTest=!1,e.setRenderTarget(o),this.rendered=!0,this.reading||(this.reading=!0,this.ambient[0]=t.ambient.r,this.ambient[1]=t.ambient.g,this.ambient[2]=t.ambient.b,e.readRenderTargetPixelsAsync(this.strip,0,0,Vt,Vt*Fi,this.pixels).then(()=>this.project()).catch(()=>{}).finally(()=>{this.reading=!1})),!0}project(){G_(this.pixels,Vt,this.raw),z_(this.raw,0,1,0,this.ambient,1e-5)?this.sh.set(this.raw):this.sh.set(Zi(this.ambient,.55,.45))}dispose(){this.cube.dispose(),this.strip.dispose(),this.material.dispose()}}const Z_="skycast",Ft="tiles",an="index",K_=2,cl=720*3600*1e3,fu=600*1e3,Rc=1/0,J_=512*1024*1024,Q_=.4,ew=.8,tw=12*3600*1e3;let us=null;function qs(){return us||(us=new Promise(n=>{let e;try{e=indexedDB.open(Z_,K_)}catch{n(null);return}e.onupgradeneeded=()=>{const t=e.result;t.objectStoreNames.contains(Ft)||t.createObjectStore(Ft,{keyPath:"url"}),e.transaction&&t.objectStoreNames.contains(Ft)&&e.transaction.objectStore(Ft).clear(),t.objectStoreNames.contains(an)||t.createObjectStore(an,{keyPath:"url"}).createIndex("at","at")},e.onsuccess=()=>n(e.result),e.onerror=()=>n(null),e.onblocked=()=>n(null)}),us)}let ga=null;function nw(n){return ga||(ga=(async()=>{try{await navigator.storage?.persist?.()}catch{}let e=J_;try{const i=await navigator.storage?.estimate?.();i?.quota&&(e=Math.max(64*1024*1024,i.quota*Q_))}catch{}const t=await new Promise(i=>{try{const s=n.transaction(an,"readonly").objectStore(an).getAll();s.onsuccess=()=>i(s.result.reduce((o,r)=>o+r.size,0)),s.onerror=()=>i(0)}catch{i(0)}});return{budget:e,total:t}})(),ga)}async function iw(n,e){const t=e.budget*ew;e.total<=t||await new Promise(i=>{try{const a=n.transaction([Ft,an],"readwrite"),s=a.objectStore(an),o=a.objectStore(Ft),r=s.index("at").openCursor();r.onsuccess=()=>{const l=r.result;if(!l||e.total<=t){i();return}const c=l.value;o.delete(c.url),s.delete(c.url),e.total-=c.size,l.continue()},r.onerror=()=>i(),a.onabort=()=>i()}catch{i()}})}async function Br(n,e){const t=await qs();return t?new Promise(i=>{try{const s=t.transaction(Ft,"readonly").objectStore(Ft).get(n);s.onsuccess=()=>{const o=s.result;if(!o||Date.now()-o.at>e){i(null);return}Date.now()-o.at>tw&&aw(n),i(o.body)},s.onerror=()=>i(null)}catch{i(null)}}):null}async function aw(n){const e=await qs();if(e)try{const t=e.transaction([Ft,an],"readwrite"),i=Date.now(),a=t.objectStore(Ft),s=a.get(n);s.onsuccess=()=>{const l=s.result;l&&a.put({...l,at:i})};const o=t.objectStore(an),r=o.get(n);r.onsuccess=()=>{const l=r.result;l&&o.put({...l,at:i})}}catch{}}async function pu(n,e){const t=await qs();if(!t)return;const i=await nw(t);if(!(e.byteLength>i.budget)){try{const a=Date.now(),s=t.transaction([Ft,an],"readwrite");s.objectStore(Ft).put({url:n,at:a,body:e});const o=s.objectStore(an),r=o.get(n);r.onsuccess=()=>{const l=r.result;l&&(i.total-=l.size)},o.put({url:n,at:a,size:e.byteLength}),i.total+=e.byteLength}catch{return}i.total>i.budget&&await iw(t,i)}}const ko=new Map;function mu(n,e=cl){const t=ko.get(n);if(t)return t;const i=(async()=>{const a=await Br(n,e);if(a)return a;const s=await fetch(n,{mode:"cors",credentials:"omit"});if(!s.ok)throw new Error(`${s.status} ${s.statusText} for ${n}`);if((s.headers.get("content-type")??"").includes("text/html")&&!/\.html?($|\?)/.test(n))throw new Error(`${n} returned an HTML page, not an asset (likely a 404 served as the app shell)`);const r=await s.arrayBuffer();return pu(n,r),r})().finally(()=>ko.delete(n));return ko.set(n,i),i}async function gu(n,e=cl){const t=await mu(n,e);return JSON.parse(new TextDecoder().decode(t))}async function Hr(n,e=cl){const t=await mu(n,e);return createImageBitmap(new Blob([t]))}async function sw(){const n=await qs();if(!n)return;const e=n.transaction([Ft,an],"readwrite");e.objectStore(Ft).clear(),e.objectStore(an).clear(),ga=null}function vu(n,e){return 125*Math.max(0,n-e)}function ow(n,e){const a=Math.max(1,Math.min(100,e))/100,s=Math.log(a)+17.625*n/(243.04+n);return 243.04*s/(17.625-s)}const rw={0:"Clear",1:"Mainly clear",2:"Partly cloudy",3:"Overcast",45:"Fog",48:"Freezing fog",51:"Light drizzle",53:"Drizzle",55:"Heavy drizzle",56:"Freezing drizzle",57:"Freezing drizzle",61:"Light rain",63:"Rain",65:"Heavy rain",66:"Freezing rain",67:"Freezing rain",71:"Light snow",73:"Snow",75:"Heavy snow",77:"Snow grains",80:"Rain showers",81:"Rain showers",82:"Violent rain showers",85:"Snow showers",86:"Heavy snow showers",95:"Thunderstorm",96:"Thunderstorm with hail",99:"Thunderstorm with hail"};function _u(n,e,t){return 1-(1-.92*n)*(1-.6*e)*(1-.28*t)}function lw(n,e){return n>=71&&n<=77||n===85||n===86?"snow":n>=51&&n<=82?e<.5?"snow":"rain":n>=95?"rain":"none"}const wu=["temperature_2m","relative_humidity_2m","dew_point_2m","surface_pressure","wind_speed_10m","wind_direction_10m","wind_gusts_10m","visibility","precipitation","weather_code","is_day","cloud_cover","cloud_cover_low","cloud_cover_mid","cloud_cover_high"].join(",");function Ms(){const t=vu(18,10);return{time:new Date,live:!1,source:"simulated",tempC:18,dewC:10,humidity:60,pressureHpa:1013.25,windSpeed:4,windDir:270,gust:6,visibility:2e4,precip:0,precipKind:"none",wmoCode:2,isDay:!0,low:{cover:.25,base:t,top:t+900},mid:{cover:.1,base:4200,top:5400},high:{cover:.15,base:9e3,top:10500},totalCover:.3,opacity:_u(.25,.1,.15),summary:"Partly cloudy"}}async function cw(n,e){const t=`https://api.open-meteo.com/v1/forecast?latitude=${n.toFixed(4)}&longitude=${e.toFixed(4)}&current=${wu}&wind_speed_unit=ms&timezone=UTC`;let i;try{i=(await gu(t,fu)).current}catch{return Ms()}return xu(i,new Date(i.time+"Z"),"observation")}function xu(n,e,t){const i=n.temperature_2m,a=n.dew_point_2m??ow(i,n.relative_humidity_2m),s=n.weather_code|0,o=Math.max(120,vu(i,a)),r=n.cloud_cover_low/100,l=n.cloud_cover_mid/100,c=n.cloud_cover_high/100;return{time:e,live:!0,source:t,tempC:i,dewC:a,humidity:n.relative_humidity_2m,pressureHpa:n.surface_pressure,windSpeed:n.wind_speed_10m,windDir:n.wind_direction_10m,gust:n.wind_gusts_10m??n.wind_speed_10m,visibility:n.visibility>=24e3?6e4:n.visibility,precip:n.precipitation,precipKind:lw(s,i),wmoCode:s,isDay:n.is_day===1,low:{cover:r,base:o,top:o+300+1400*r},mid:{cover:l,base:3800,top:4400+1800*l},high:{cover:c,base:8500,top:9400+1500*c},totalCover:n.cloud_cover/100,opacity:_u(r,l,c),summary:rw[s]??"Unknown"}}const Cc=wu;function hw(n,e,t){let i=(e-n+540)%360-180;return(n+i*t+360)%360}async function uw(n,e){const t=`https://api.open-meteo.com/v1/forecast?latitude=${n.toFixed(4)}&longitude=${e.toFixed(4)}&hourly=${Cc}&wind_speed_unit=ms&timezone=auto&timeformat=unixtime&forecast_days=7&past_days=1`;let i;try{i=await gu(t,fu)}catch{return null}const a=i.hourly?.time??[];if(a.length<2)return null;const s=a.map(d=>d*1e3),o=d=>i.hourly[d]??[],r={};for(const d of Cc.split(","))r[d]=o(d);const l=(d,f,p)=>{const g=r[d]?.[f];return typeof g=="number"&&Number.isFinite(g)?g:p},c=d=>({time:"",temperature_2m:l("temperature_2m",d,15),relative_humidity_2m:l("relative_humidity_2m",d,60),dew_point_2m:l("dew_point_2m",d,NaN),surface_pressure:l("surface_pressure",d,1013.25),wind_speed_10m:l("wind_speed_10m",d,3),wind_direction_10m:l("wind_direction_10m",d,270),wind_gusts_10m:l("wind_gusts_10m",d,l("wind_speed_10m",d,3)),visibility:l("visibility",d,24e3),precipitation:l("precipitation",d,0),weather_code:l("weather_code",d,2),is_day:l("is_day",d,1),cloud_cover:l("cloud_cover",d,0),cloud_cover_low:l("cloud_cover_low",d,0),cloud_cover_mid:l("cloud_cover_mid",d,0),cloud_cover_high:l("cloud_cover_high",d,0)}),h=d=>{const f=d.getTime(),p=s[1]-s[0],g=(f-s[0])/p,v=Math.max(0,Math.min(s.length-2,Math.floor(g))),m=Math.max(0,Math.min(1,g-v)),u=c(v),_=c(v+1),w=(E,R)=>E+(R-E)*m,x=m<.5?u:_,S={temperature_2m:w(u.temperature_2m,_.temperature_2m),relative_humidity_2m:w(u.relative_humidity_2m,_.relative_humidity_2m),dew_point_2m:w(u.dew_point_2m,_.dew_point_2m),surface_pressure:w(u.surface_pressure,_.surface_pressure),wind_speed_10m:w(u.wind_speed_10m,_.wind_speed_10m),wind_direction_10m:hw(u.wind_direction_10m,_.wind_direction_10m,m),wind_gusts_10m:w(u.wind_gusts_10m,_.wind_gusts_10m),visibility:w(u.visibility,_.visibility),precipitation:w(u.precipitation,_.precipitation),weather_code:x.weather_code,is_day:x.is_day,cloud_cover:w(u.cloud_cover,_.cloud_cover),cloud_cover_low:w(u.cloud_cover_low,_.cloud_cover_low),cloud_cover_mid:w(u.cloud_cover_mid,_.cloud_cover_mid),cloud_cover_high:w(u.cloud_cover_high,_.cloud_cover_high)};return xu(S,d,"forecast")};return{timezone:i.timezone??"UTC",utcOffsetSeconds:i.utc_offset_seconds??0,start:new Date(s[0]),end:new Date(s[s.length-1]),at:h}}const Ct=Math.PI/180,Yn=180/Math.PI;function dw(n){return n.getTime()/864e5+24405875e-1}function fw(n,e){const t=n*Ct,i=e*Ct,a=Math.cos(t);return{x:a*Math.sin(i),y:Math.sin(t),z:-a*Math.cos(i)}}function Dc(n,e,t,i,a){const s=(t+a-n*Yn)*Ct,o=i*Ct,r=e*Ct,l=Math.sin(o)*Math.sin(r)+Math.cos(o)*Math.cos(r)*Math.cos(s),c=Math.asin(Math.max(-1,Math.min(1,l))),h=Math.atan2(-Math.sin(s)*Math.cos(r),Math.cos(o)*Math.sin(r)-Math.sin(o)*Math.cos(r)*Math.cos(s)),d=c*Yn,f=(h*Yn+360)%360;return{altitude:d,azimuth:f,ra:(n*Yn%360+360)%360,dec:e,dir:fw(d,f)}}function Ki(n,e,t){const a=dw(n)-2451545,s=a/36525,o=(280.46061837+360.98564736629*a+387933e-9*s*s)%360,r=(280.46646+36000.76983*s+3032e-7*s*s)%360,c=(357.52911+35999.05029*s-1537e-7*s*s)*Ct,h=(1.914602-.004817*s-14e-6*s*s)*Math.sin(c)+(.019993-101e-6*s)*Math.sin(2*c)+289e-6*Math.sin(3*c),d=r+h,f=125.04-1934.136*s,p=(d-.00569-.00478*Math.sin(f*Ct))*Ct,v=(23+(26+(21.448-s*(46.815+s*(59e-5-s*.001813)))/60)/60+.00256*Math.cos(f*Ct))*Ct,m=Math.atan2(Math.cos(v)*Math.sin(p),Math.cos(p)),u=Math.asin(Math.sin(v)*Math.sin(p))*Yn,_=Dc(m,u,o,e,t),w=(218.316+13.176396*a)*Ct,x=(134.963+13.064993*a)*Ct,S=(93.272+13.22935*a)*Ct,E=w+6.289*Ct*Math.sin(x),R=5.128*Ct*Math.sin(S),C=Math.atan2(Math.sin(E)*Math.cos(v)-Math.tan(R)*Math.sin(v),Math.cos(E)),b=Math.asin(Math.sin(R)*Math.cos(v)+Math.cos(R)*Math.sin(v)*Math.sin(E))*Yn,y=Dc(C,b,o,e,t),A=((E-p)*Yn+360)%360,P=A/360,I=(1-Math.cos(A*Ct))/2,U=Math.max(0,Math.min(1,(_.altitude+6)/10));return{sun:_,moon:y,moonPhase:P,moonElongation:A,moonIllum:I,daylight:U,obliquity:v*Yn}}function pw(n){const e=[n.name,n.region,n.country].filter(t=>t&&t.length>0);return e.filter((t,i)=>e.indexOf(t)===i).join(", ")}async function mw(n,e){const t=n.trim();if(t.length<2)return[];const i=`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(t)}&count=6&language=en&format=json`;try{const a=await fetch(i,{mode:"cors",credentials:"omit",signal:e});return a.ok?((await a.json()).results??[]).map(o=>({name:o.name,region:o.admin1??"",country:o.country??o.country_code??"",lat:o.latitude,lon:o.longitude,population:o.population??0})):[]}catch{return[]}}async function gw(n,e){const t=`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${n.toFixed(3)}&longitude=${e.toFixed(3)}&localityLanguage=en`;try{const i=await fetch(t,{mode:"cors",credentials:"omit"});if(!i.ok)return null;const a=await i.json(),s=a.city||a.locality||a.principalSubdivision||"";return s?{name:s,region:a.principalSubdivision&&a.principalSubdivision!==s?a.principalSubdivision:"",country:a.countryName??""}:null}catch{return null}}const vw=["EXT_color_buffer_float","EXT_color_buffer_half_float","OES_texture_float_linear","EXT_float_blend","WEBGL_depth_texture"];function ct(n,e){return`<div><span style="opacity:.6">${n}</span> ${e}</div>`}function _w(n){const e=document.createElement("div");e.id="diag",e.setAttribute("style","position:fixed;left:8px;top:8px;right:8px;z-index:9999;font:11px/1.5 ui-monospace,monospace;color:#dfe6ee;background:rgba(8,12,18,.92);border:1px solid rgba(255,255,255,.18);border-radius:8px;padding:10px;max-height:70vh;overflow:auto;");const t=[];t.push(ct("ua",navigator.userAgent.slice(0,120))),t.push(ct("screen",`${innerWidth}x${innerHeight}`));const i=au(),a=i.device;t.push(ct("dpr",`${devicePixelRatio} capped to ${a.pixelRatio}`)),t.push(ct("deviceMemory",a.deviceMemoryGb===null?`unknown, assuming ${i.assumedMemoryGb} GB`:`${a.deviceMemoryGb} GB`)),t.push(ct("pointer",a.coarsePointer?"coarse":"fine")),t.push(ct("<b>tier</b>",`<b>${i.tier}</b>`)),t.push(ct("tier because",i.reasons.length?i.reasons.join("; "):"nothing forced it down")),t.push(ct("drape rings",i.rings.map(l=>`${l.extent}m@z${l.imageryZoom}`).join(" "))),t.push(ct("msaa",i.msaaSamples===0?"off":`${i.msaaSamples}x`)),t.push(ct("sun cascades",`${i.shadowCascadeCount} x ${i.shadowCascadeSize}`)),t.push(),t.push(ct("ambient occlusion",i.aoEnabled?"on":"off")),t.push(ct("triangle budget",`${(i.buildingTriangleBudget/1e3).toFixed(0)}k buildings, ${(i.roadTriangleBudget/1e3).toFixed(0)}k roads`));for(const l of i.memory.items)t.push(ct(`&nbsp;&nbsp;${l.what}`,xc(l.bytes)));t.push(ct("<b>gpu estimate</b>",`<b>${xc(i.memory.totalBytes)}</b>`));let s=null;try{s=n.getContext("webgl2",{failIfMajorPerformanceCaveat:!1})}catch{s=null}if(!s)t.push(ct("webgl2","<b style='color:#ff8a8a'>UNAVAILABLE</b>"));else{const l=s.getExtension("WEBGL_debug_renderer_info"),c=String(l?s.getParameter(l.UNMASKED_RENDERER_WEBGL):s.getParameter(s.RENDERER));t.push(ct("gpu",c.slice(0,90))),t.push(ct("maxTexture",String(s.getParameter(s.MAX_TEXTURE_SIZE)))),t.push(ct("maxRenderbuffer",String(s.getParameter(s.MAX_RENDERBUFFER_SIZE)))),t.push(ct("maxSamples",String(s.getParameter(s.MAX_SAMPLES))));for(const h of vw){const d=s.getExtension(h)!==null;t.push(ct(h,d?"yes":"<b style='color:#ff8a8a'>NO</b>"))}}e.innerHTML=t.join(""),document.body.append(e);const o=document.createElement("div");e.append(o);const r=()=>{const c=window.skycast,h=[];if(h.push(ct("app booted",c?"yes":"<b style='color:#ff8a8a'>NO</b>")),c){h.push(ct("scene time",String(c.time??"?"))),c.wx&&h.push(ct("cloud/precip",`${c.wx.totalCover?.toFixed(2)} / ${c.wx.precip?.toFixed(2)}`));const d=c.ground?.status;h.push(ct("buildings streamed",d?.buildings?String(d.buildings):"<b style='color:#ff8a8a'>0 so far</b>"));const f=c.renderer?.info?.memory;f&&h.push(ct("gpu textures",`${f.textures} tex / ${f.geometries} geo`))}o.innerHTML=h.join("")};r(),setInterval(r,2e3)}function ww(n){const e=i=>{let a=document.getElementById("diag-err");a||(a=document.createElement("div"),a.id="diag-err",a.setAttribute("style","position:fixed;left:8px;right:8px;bottom:8px;z-index:10000;font:11px/1.4 ui-monospace,monospace;color:#ffd9d9;background:rgba(60,10,10,.94);border:1px solid #ff6b6b;border-radius:8px;padding:8px;max-height:40vh;overflow:auto;"),document.body.append(a)),a.textContent=`${a.textContent??""}
${i}`.trim()},t=window;t.__skycastShout=e,n.addEventListener("webglcontextlost",i=>{i.preventDefault(),e("WEBGL CONTEXT LOST (usually out of GPU memory)")}),addEventListener("error",i=>e(`error: ${i.message}`)),addEventListener("unhandledrejection",i=>e(`unhandled: ${String(i.reason).slice(0,200)}`))}const xw=6378137,fi=Math.PI/180;function yw(n){const e=n*fi;return 111132.92-559.82*Math.cos(2*e)+1.175*Math.cos(4*e)-.0023*Math.cos(6*e)}function bw(n){const e=n*fi;return 111412.84*Math.cos(e)-93.5*Math.cos(3*e)+.118*Math.cos(5*e)}class Pc{lat;lon;mPerLat;mPerLon;constructor(e,t){this.lat=e,this.lon=t,this.mPerLat=yw(e),this.mPerLon=bw(e)}toWorld(e,t){return{x:(t-this.lon)*this.mPerLon,z:-(e-this.lat)*this.mPerLat}}toLatLon(e,t){return{lat:this.lat-t/this.mPerLat,lon:this.lon+e/this.mPerLon}}}function Aa(n,e){return(n+180)/360*2**e}function Ra(n,e){const t=n*fi;return(1-Math.log(Math.tan(t)+1/Math.cos(t))/Math.PI)/2*2**e}function Ji(n,e){return n/2**e*360-180}function Qi(n,e){const t=Math.PI-2*Math.PI*(n/2**e);return 180/Math.PI*Math.atan(.5*(Math.exp(t)-Math.exp(-t)))}function Mw(n,e,t){return{z:t,x:Math.floor(Aa(e,t)),y:Math.floor(Ra(n,t))}}function Ls(n){return{west:Ji(n.x,n.z),east:Ji(n.x+1,n.z),north:Qi(n.y,n.z),south:Qi(n.y+1,n.z)}}function Sw(n){return`${n.z}/${n.x}/${n.y}`}function Lc(n,e,t){return n<e?e:n>t?t:n}function Gr(n,e){const t=(e.lat-n.lat)*fi,i=(e.lon-n.lon)*fi,a=Math.sin(t/2)**2+Math.cos(n.lat*fi)*Math.cos(e.lat*fi)*Math.sin(i/2)**2;return 2*xw*Math.asin(Math.min(1,Math.sqrt(a)))}const Ew=.5,yu=`
uniform sampler2D uUrban;
uniform float uUrbanExtent;
uniform float uFlatBounce;
uniform float uGroundDebug;

const float SHADOW_TARGET = ${Ew.toFixed(4)};

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
`;function bu(){return{uUrban:{value:null},uUrbanExtent:{value:1},uFlatBounce:{value:0},uGroundDebug:{value:0}}}const Tw=`
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
`,Aw=`
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
${gi}
${Ia}
${Vs}
${yu}
${$s}
${Ws}

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
  vec3 n = normalize(vNormal);

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
  float herb = lc.a * uHasLand * (1.0 - roadCov);
  float canopy = lc.b * uHasLand;
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
    float grassNear = smoothstep(70.0, 14.0, vViewDist);
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
  float lumA = dot(albedo, vec3(0.299, 0.587, 0.114));
  float byElevation = smoothstep(3.5, 0.4, vWorld.y);
  float byAppearance = smoothstep(0.26, 0.07, lumA) * smoothstep(7.0, 1.0, vWorld.y);
  float heur = clamp(max(byElevation, byAppearance), 0.0, 1.0);
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
`;function Rw(n){return{...n,...Xs(),...bu(),uDrape:{value:null},uSH:{value:Zi([.28,.36,.5],.55,.45)},uCameraPos:{value:new F},uAmbient:{value:new Te(.28,.36,.5)},uWetness:{value:0},uSnow:{value:0},uNight:{value:0},uNightGlow:{value:new Te(0,0,0)},uMoonDir:{value:new F(0,-1,0)},uMoonLight:{value:new Te(0,0,0)},uLandNear:{value:null},uLandFar:{value:null},uLandNearExtent:{value:1},uLandFarExtent:{value:1},uHasLand:{value:0},uTime:{value:0},uWind:{value:new ke},uFlatWater:{value:0},uRoadMask:{value:null},uRoadMaskExtent:{value:1},uHasRoadMask:{value:0},uExposure:{value:1},uSunSurface:{value:.105},uDebug:{value:0},uSunDir:{value:new F(0,1,0)},uSunColor:{value:new Te(1,1,1)},uSunIntensity:{value:22},uMieG:{value:.76},uTurbidity:{value:1},uCamAltitude:{value:100},uMultiScatter:{value:.055}}}function Ic(n,e,t,i,a,s,o){const r=n.segments,l=n.extent*2/r,c=(r+1)*(r+1),h=[];for(let u=0;u<=r;u++)h.push(0*(r+1)+u);for(let u=1;u<=r;u++)h.push(u*(r+1)+r);for(let u=r-1;u>=0;u--)h.push(r*(r+1)+u);for(let u=r-1;u>=1;u--)h.push(u*(r+1)+0);const d=new Float32Array((c+h.length)*3),f=new Float32Array((c+h.length)*2);for(let u=0;u<=r;u++)for(let _=0;_<=r;_++){const w=t-n.extent+_*l,x=i-n.extent+u*l,S=a.toLatLon(w,x),E=u*(r+1)+_;d[E*3]=w,d[E*3+1]=s(S.lat,S.lon),d[E*3+2]=x,f[E*2]=(S.lon-o.west)/(o.east-o.west),f[E*2+1]=(o.north-S.lat)/(o.north-o.south)}const p=400;for(let u=0;u<h.length;u++){const _=h[u],w=c+u;d[w*3]=d[_*3],d[w*3+1]=d[_*3+1]-p,d[w*3+2]=d[_*3+2],f[w*2]=f[_*2],f[w*2+1]=f[_*2+1]}const g={ring:n,inner:0,cx:t,cz:i,positions:d,gridCount:c,skirtRing:h},v=new Tt;v.setAttribute("position",new dt(d,3)),v.setIndex(hl(g,null)),v.computeVertexNormals();const m=v.getAttribute("normal").array;return v.dispose(),{ring:n,inner:e,cx:t,cz:i,positions:d,uvs:f,normals:m,gridCount:c,skirtRing:h}}function hl(n,e){const t=n.ring.segments,i=n.ring.extent*2/t,a=[],s=r=>{const l=n.positions[r*3],c=n.positions[r*3+2];if(n.inner>0){const h=n.inner-i;if(Math.abs(l-n.cx)<h&&Math.abs(c-n.cz)<h)return!0}if(e){const h=e.extent-i;if(Math.abs(l-e.x)<h&&Math.abs(c-e.z)<h)return!0}return!1};for(let r=0;r<t;r++)for(let l=0;l<t;l++){const c=r*(t+1)+l,h=r*(t+1)+l+1,d=(r+1)*(t+1)+l,f=(r+1)*(t+1)+l+1;s(c)||s(h)||s(d)||s(f)||a.push(c,d,h,h,d,f)}const o=n.skirtRing;for(let r=0;r<o.length-1;r++)a.push(o[r],n.gridCount+r,o[r+1]),a.push(o[r+1],n.gridCount+r,n.gridCount+r+1);return a}function Uc(n,e){const t=new Tt;return t.setAttribute("position",new dt(n.positions,3)),t.setAttribute("uv",new dt(n.uvs,2)),t.setAttribute("normal",new dt(n.normals,3)),t.setIndex(hl(n,e)),t.computeBoundingSphere(),t}class Cw{group=new qn;uniforms=[];heightAt;origin;sample;grids=[];meshes=[];textures=[];detail;constructor(e,t,i,a,s=sl){this.origin=e;const o=(r,l)=>{for(const h of t)if(h.contains(r,l))return h.sample(r,l);const c=t[t.length-1];return c?c.sample(r,l):0};this.sample=o,this.heightAt=(r,l)=>{const c=e.toLatLon(r,l);return o(c.lat,c.lon)},this.detail={x:0,z:0,extent:s[0].extent};for(let r=0;r<s.length;r++){const l=s[r],c=r>=2?s[r-1].extent:0,h=i[Math.min(r,i.length-1)],d=Ic(l,c,0,0,e,o,h.bbox),f=Uc(d,r===0?null:this.detail),p=Nc(h),g=Rw(a);g.uDrape.value=p,this.uniforms.push(g);const v=new nn({vertexShader:Tw,fragmentShader:Aw,uniforms:g,glslVersion:Ot}),m=new xt(f,v);m.frustumCulled=!1,m.renderOrder=r,l.extent<=6e3&&m.layers.enable(Ua),this.group.add(m),this.grids.push(d),this.meshes.push(m),this.textures.push(p)}}get detailCentre(){return this.detail}recentreDetail(e,t,i){const a=this.detail,s={x:e,z:t,extent:this.grids[0].ring.extent},o=Ic(this.grids[0].ring,0,e,t,this.origin,this.sample,i.bbox),r=Uc(o,null),l=Nc(i),c=this.meshes[0].geometry,h=this.textures[0];this.grids[0]=o,this.meshes[0].geometry=r,this.textures[0]=l,this.uniforms[0].uDrape.value=l,this.detail=s,c.dispose(),h.dispose();for(let d=1;d<this.grids.length;d++)!this.affected(d,a)&&!this.affected(d,s)||(this.meshes[d].geometry.setIndex(hl(this.grids[d],s)),this.meshes[d].geometry.computeBoundingSphere())}dispose(){for(const e of this.meshes)e.geometry.dispose(),e.material.dispose();for(const e of this.textures)e.dispose()}affected(e,t){const i=this.grids[e],a=i.ring.extent+t.extent;if(Math.abs(t.x)>=a||Math.abs(t.z)>=a)return!1;const s=i.inner-t.extent;return!(s>0&&Math.abs(t.x)<s&&Math.abs(t.z)<s)}}function Nc(n){const e=new kf(n.canvas);return e.colorSpace=Pn,e.wrapS=$t,e.wrapT=$t,e.anisotropy=16,e.generateMipmaps=!0,e.minFilter=In,e.needsUpdate=!0,e}const Fc="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile",An=256;async function Mu(n,e){const t=Math.floor(Aa(n.west,e)),i=Math.floor(Aa(n.east,e)),a=Math.floor(Ra(n.north,e)),s=Math.floor(Ra(n.south,e)),o=i-t+1,r=s-a+1,l=new OffscreenCanvas(o*An,r*An),c=l.getContext("2d");c.fillStyle="#1b3a52",c.fillRect(0,0,l.width,l.height);const h=2**e,d=[];let f=0,p=0;for(let g=a;g<=s;g++)for(let v=t;v<=i;v++){const m=(v%h+h)%h,u=(v-t)*An,_=(g-a)*An;d.push((async()=>{for(let w=0;w<3;w++)try{const x=await Hr(`${Fc}/${e}/${g}/${m}`);c.drawImage(x,u,_,An,An),x.close();return}catch{w<2&&await new Promise(x=>setTimeout(x,250*(w+1)**2))}if(e>2)try{const w=m>>1,x=g>>1,S=await Hr(`${Fc}/${e-1}/${x}/${w}`),E=An/2;c.drawImage(S,(m&1)*E,(g&1)*E,E,E,u,_,An,An),S.close(),p++;return}catch{}f++})())}if(await Promise.all(d),f>0||p>0){const g=o*r;console.warn(`[skycast] imagery z${e}: ${f}/${g} tiles missing, ${p} filled from z${e-1}`)}return{missing:f,coarse:p,canvas:l,bbox:{west:Ji(t,e),east:Ji(i+1,e),north:Qi(a,e),south:Qi(s+1,e)}}}const Dw="https://s3.amazonaws.com/elevation-tiles-prod/terrarium",Rn=256,Pw=0;class Lw{bbox;w;h;data;loaded=!1;constructor(e,t,i){this.bbox=e,this.w=t,this.h=i,this.data=new Float32Array(t*i)}sample(e,t){const{west:i,east:a,south:s,north:o}=this.bbox,r=Lc((t-i)/(a-i)*(this.w-1),0,this.w-1),l=Lc((o-e)/(o-s)*(this.h-1),0,this.h-1),c=Math.floor(r),h=Math.floor(l),d=Math.min(c+1,this.w-1),f=Math.min(h+1,this.h-1),p=r-c,g=l-h,v=this.data,m=v[h*this.w+c],u=v[h*this.w+d],_=v[f*this.w+c],w=v[f*this.w+d];return(m*(1-p)+u*p)*(1-g)+(_*(1-p)+w*p)*g}contains(e,t){const i=this.bbox;return e>=i.south&&e<=i.north&&t>=i.west&&t<=i.east}}function Iw(n){const t=new OffscreenCanvas(n.width,n.height).getContext("2d",{willReadFrequently:!0});t.drawImage(n,0,0);const i=t.getImageData(0,0,n.width,n.height).data,a=new Float32Array(n.width*n.height);for(let s=0,o=0;s<a.length;s++,o+=4){const r=i[o]*256+i[o+1]+i[o+2]/256-32768;a[s]=r<0?0:r}return n.close(),a}async function kc(n,e,t){const i=Math.floor(Aa(n.west,e)),a=Math.floor(Aa(n.east,e)),s=Math.floor(Ra(n.north,e)),o=Math.floor(Ra(n.south,e)),r={west:Ji(i,e),east:Ji(a+1,e),north:Qi(s,e),south:Qi(o+1,e)},l=a-i+1,c=o-s+1,h=new Lw(r,l*Rn,c*Rn),d=[];let f=0;const p=l*c;for(let g=s;g<=o;g++)for(let v=i;v<=a;v++){const m=2**e,u=(v%m+m)%m,_=`${Dw}/${e}/${u}/${g}.png`,w=(v-i)*Rn,x=(g-s)*Rn;d.push(Hr(_).then(S=>{const E=Iw(S);for(let R=0;R<Rn;R++)h.data.set(E.subarray(R*Rn,(R+1)*Rn),(x+R)*h.w+w)}).catch(()=>{for(let S=0;S<Rn;S++)h.data.fill(Pw,(x+S)*h.w+w,(x+S)*h.w+w+Rn)}).finally(()=>t?.(++f,p)))}return await Promise.all(d),Uw(h),h.loaded=!0,h}function Uw(n,e=55){const{w:t,h:i,data:a}=n,s=[];for(let o=1;o<i-1;o++)for(let r=1;r<t-1;r++){const l=o*t+r,c=a[l],h=[a[l-1],a[l+1],a[l-t],a[l+t]];let d=-1/0;for(const f of h)f>d&&(d=f);c-d<=e||(h.sort((f,p)=>f-p),s.push([l,(h[1]+h[2])/2]))}for(const[o,r]of s)a[o]=r}function Ss(n,e,t){const i=t/111132,a=t/(111412*Math.max(.05,Math.cos(n*Math.PI/180)));return{west:e-a,east:e+a,south:n-i,north:n+i}}const Nw=140,Oc=4,ds=32,Fw=1.05;class kw{stats={moves:0,lastStitchMs:0,lastApplyMs:0,worstApplyMs:0,pending:!1,lastMissing:0,lastCoarse:0};origin;terrain;ring;inFlight=!1;disposed=!1;constructor(e,t,i){this.origin=e,this.terrain=t,this.ring=i}follow(e,t,i,a){if(this.inFlight||this.disposed)return;const s=this.terrain.detailCentre;if(Math.hypot(e-s.x,t-s.z)<=Nw)return;const o=Math.round((e+i*Oc)/ds)*ds,r=Math.round((t+a*Oc)/ds)*ds;o===s.x&&r===s.z||(this.inFlight=!0,this.stats.pending=!0,this.move(o,r))}dispose(){this.disposed=!0}async move(e,t){const i=performance.now();try{const a=this.origin.toLatLon(e,t),s=await Mu(Ss(a.lat,a.lon,this.ring.extent*Fw),this.ring.imageryZoom);if(this.stats.lastStitchMs=performance.now()-i,this.stats.lastMissing=s.missing,this.stats.lastCoarse=s.coarse,this.disposed)return;const o=performance.now();this.terrain.recentreDetail(e,t,s),this.stats.lastApplyMs=performance.now()-o,this.stats.worstApplyMs=Math.max(this.stats.worstApplyMs,this.stats.lastApplyMs),this.stats.moves++}catch(a){console.warn("[skycast] detail ring restitch failed, keeping the old drape",a)}finally{this.inFlight=!1,this.stats.pending=!1}}}const St=192;function Ow(n){const e=Math.max(2e3,n.radiusM),t=e*2/St,i=new Float32Array(St*St);for(const c of n.buildings){let h=1/0,d=-1/0,f=1/0,p=-1/0;for(let u=0;u<c.ring.length;u+=2){const _=c.ring[u],w=c.ring[u+1];_<h&&(h=_),_>d&&(d=_),w<f&&(f=w),w>p&&(p=w)}const g=Math.max(0,(d-h)*(p-f)),v=Math.floor((c.cx+e)/t),m=Math.floor((c.cz+e)/t);v<0||v>=St||m<0||m>=St||(i[m*St+v]+=g)}const a=Float32Array.from(i).sort(),s=a[Math.floor(a.length*.98)]||1,o=new Float32Array(St*St);for(let c=0;c<St;c++)for(let h=0;h<St;h++){let d=0,f=0;for(let p=-1;p<=1;p++)for(let g=-1;g<=1;g++){const v=h+g,m=c+p;v<0||v>=St||m<0||m>=St||(d+=i[m*St+v],f++)}o[c*St+h]=d/f}const r=new Uint8Array(St*St);for(let c=0;c<r.length;c++)r[c]=Math.round(255*Math.min(1,Math.sqrt(o[c]/s)));const l=new Pa(r,St,St,mi,Et);return l.minFilter=ht,l.magFilter=ht,l.wrapS=$t,l.wrapT=$t,l.needsUpdate=!0,{texture:l,extent:e}}function zc(){const n=new Uint8Array(1),e=new Pa(n,1,1,mi,Et);return e.needsUpdate=!0,{texture:e,extent:1}}const Bc=.25,zw=8e3;var st=(n=>(n[n.Motorway=0]="Motorway",n[n.Trunk=1]="Trunk",n[n.Primary=2]="Primary",n[n.Secondary=3]="Secondary",n[n.Tertiary=4]="Tertiary",n[n.Residential=5]="Residential",n[n.Unclassified=6]="Unclassified",n[n.Service=7]="Service",n[n.LivingStreet=8]="LivingStreet",n[n.Busway=9]="Busway",n[n.Pedestrian=10]="Pedestrian",n[n.Footway=11]="Footway",n[n.Cycleway=12]="Cycleway",n[n.Track=13]="Track",n))(st||{}),at=(n=>(n[n.Unknown=0]="Unknown",n[n.Asphalt=1]="Asphalt",n[n.Concrete=2]="Concrete",n[n.Paved=3]="Paved",n[n.Gravel=4]="Gravel",n[n.Dirt=5]="Dirt",n[n.Cobblestone=6]="Cobblestone",n))(at||{});const Bw=1,ea=2,Fa=4,Su=8,Hw=-5,Gw=5,Vw=3.5,Ww=[4,4,4,2,2,2,2,1,1,2,0,0,0,0],Xw=[null,null,null,null,null,null,null,null,null,null,6,1.8,2.5,3],$w=1,Dn=.35,Eu=3.5,qw=2.5;function Yw(n,e){return(n&ea)===0?Dn:Dn+Eu+Math.max(0,e)*qw}function ul(n,e,t=0){const i=Xw[n];return i??(e>0?e:(t&Su)!==0?$w:Ww[n]??2)*Vw}function jw(n){const e=new Array(n.length);for(let t=0;t<n.length;t++){const i=n[t],a=Math.fround(i.cx),s=Math.fround(i.cz),o=i.dx.length,r=new Float32Array(o*2);for(let l=0;l<o;l++)r[l*2]=a+i.dx[l]*Bc,r[l*2+1]=s+i.dz[l]*Bc;e[t]={cls:i.cls,lanes:i.lanes,flags:i.flags,layer:i.layer,surface:i.surface,cx:a,cz:s,pts:r,name:i.name}}return e}function Zw(n){let e=0;for(let t=2;t<n.pts.length;t+=2)e+=Math.hypot(n.pts[t]-n.pts[t-2],n.pts[t+1]-n.pts[t-1]);return e}(()=>{const n=new Array(14).fill(!0);return n[st.Footway]=!1,n[st.Cycleway]=!1,n[st.Track]=!1,n})();function Kw(){const n=new Pa(new Uint8Array(1),1,1,mi,Et);return n.needsUpdate=!0,{texture:n,extent:1,has:!1,cellM:0,bytes:1}}var Xt=(n=>(n[n.NoData=0]="NoData",n[n.Tree=10]="Tree",n[n.Shrub=20]="Shrub",n[n.Grass=30]="Grass",n[n.Crop=40]="Crop",n[n.Built=50]="Built",n[n.Bare=60]="Bare",n[n.Snow=70]="Snow",n[n.Water=80]="Water",n[n.Wetland=90]="Wetland",n[n.Mangrove=95]="Mangrove",n[n.Moss=100]="Moss",n))(Xt||{});Xt.NoData+"",Xt.Water+"",Xt.Built+"",Xt.Tree+"",Xt.Mangrove+"",Xt.Shrub+"",Xt.Grass+"",Xt.Crop+"",Xt.Wetland+"",Xt.Moss+"",Xt.Bare+"",Xt.Snow+"";function Jw(n,e,t,i,a){const s=t*2/e,o=(i+t)/s-.5,r=(a+t)/s-.5,l=Math.floor(o),c=Math.floor(r),h=o-l,d=r-c,f=x=>x<0?0:x>=e?e-1:x,p=f(l),g=f(l+1),v=f(c),m=f(c+1),u=[0,0,0,0],_=[[p,v,(1-h)*(1-d)],[g,v,h*(1-d)],[p,m,(1-h)*d],[g,m,h*d]];for(const[x,S,E]of _){const R=(S*e+x)*4;for(let C=0;C<4;C++)u[C]+=E*(n[R+C]/255)}const w=Math.max(0,1-(u[0]+u[1]+u[2]+u[3]));return{water:u[0],built:u[1],tree:u[2],herb:u[3],bare:w}}function Qw(n,e){const t=new Pa(n,e,e,wt,Et);return t.minFilter=ht,t.magFilter=ht,t.wrapS=$t,t.wrapT=$t,t.needsUpdate=!0,t}function ex(){const n=()=>Qw(new Uint8Array(4),1);return{near:n(),far:n(),nearExtent:1,farExtent:1,has:!1}}class tx{geometry;arrays={};capacity;attributes={};derived=[];constructor(e,t,i){this.capacity=t;const a=new Wl;a.index=e.index;for(const s of Object.keys(e.attributes))a.setAttribute(s,e.attributes[s]);for(const s of i){const o=new Float32Array(t*s.itemSize),r=new If(o,s.itemSize);r.setUsage(Hd),a.setAttribute(s.name,r),this.arrays[s.name]=o,this.attributes[s.name]=r}a.instanceCount=0,a.boundingSphere=new kn(new F,1/0),this.geometry=a}derive(e){const t=new Wl;t.index=e.index;for(const i of Object.keys(e.attributes))t.setAttribute(i,e.attributes[i]);for(const i of Object.keys(this.attributes))t.setAttribute(i,this.attributes[i]);return t.instanceCount=this.geometry.instanceCount,t.boundingSphere=new kn(new F,1/0),this.derived.push(t),t}upload(e){const t=Math.min(e,this.capacity);for(const i of Object.keys(this.attributes)){const a=this.attributes[i];a.clearUpdateRanges(),a.addUpdateRange(0,t*a.itemSize),a.needsUpdate=!0}this.geometry.instanceCount=t;for(const i of this.derived)i.instanceCount=t}dispose(){this.geometry.dispose();for(const e of this.derived)e.dispose()}}const nx=`
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
`,Es=Math.PI*2,Is=[{name:"broadleaf",crownBase:.38,trunkTop:.48,trunkR0:.13,trunkR1:.075,profile:[.3,.7,.93,1,.86,.96,.82,.61,.42,.16],lobes:[{n:2,amp:.2,phase:.72,twist:.9},{n:3,amp:.22,phase:2.1,twist:-1.4},{n:5,amp:.1,phase:4.02,twist:2.2},{n:7,amp:.06,phase:1.24,twist:-2.8}]},{name:"conifer",crownBase:.14,trunkTop:.26,trunkR0:.2,trunkR1:.11,profile:[.84,1,.79,.9,.66,.76,.52,.6,.37,.43,.21,.25,.06],lobes:[{n:3,amp:.1,phase:1.5,twist:1.1},{n:5,amp:.09,phase:3.3,twist:-2},{n:8,amp:.06,phase:.4,twist:3}]}],ix=0,ax=1,di=[{name:"near",sides:20,rings:11,trunkSides:8,farM:260},{name:"mid",sides:14,rings:8,trunkSides:5,farM:600},{name:"far",sides:9,rings:4,trunkSides:4,farM:1/0}];function sx(n,e){const t=n.length,i=Math.min(Math.max(e,0),1)*(t-1),a=Math.min(t-2,Math.floor(i)),s=i-a,o=s*s*(3-2*s);return n[a]*(1-o)+n[a+1]*o}function ox(n,e,t){let i=0;for(const a of n.lobes)i+=a.amp*Math.sin(a.n*e+a.phase+a.twist*t);return sx(n.profile,t)*(1+i)}const Ii=5;function Tu(n,e,t,i,a){let s=0;for(let o=0;o<Ii;o++){const r=e+((o+.5)/Ii-.5)*i;for(let l=0;l<Ii;l++){const c=t+((l+.5)/Ii-.5)*a;s+=ox(n,r,Math.min(1,Math.max(0,c)))}}return s/(Ii*Ii)}function Au(n,e,t,i){let a=0;for(let s=t;s<i;s+=3){const o=e[s]*3,r=e[s+1]*3,l=e[s+2]*3,c=n[o],h=n[o+1],d=n[o+2],f=n[r],p=n[r+1],g=n[r+2],v=n[l],m=n[l+1],u=n[l+2];a+=c*(p*u-g*m)-h*(f*u-g*v)+d*(f*m-p*v)}return a/6}const rx=96,lx=48,Hc=new Map;function cx(n){const e=Hc.get(n.name);if(e!==void 0)return e;const t=Ru(n,rx,lx,1),i=Au(t.pos,t.idx,0,t.idx.length);return Hc.set(n.name,i),i}function Ru(n,e,t,i){const a=Es/e,s=1/t,o=1-n.crownBase,r=new Float32Array((e*t+2)*3);r[0]=0,r[1]=n.crownBase,r[2]=0;for(let d=0;d<t;d++){const f=(d+.5)/t;for(let p=0;p<e;p++){const g=p*a,v=Tu(n,g,f,a,s)*i,m=(1+d*e+p)*3;r[m]=Math.cos(g)*v,r[m+1]=n.crownBase+o*f,r[m+2]=Math.sin(g)*v}}const l=e*t+1;r[l*3]=0,r[l*3+1]=1,r[l*3+2]=0;const c=[];for(let d=0;d<e;d++)c.push(0,1+d,1+(d+1)%e);for(let d=0;d+1<t;d++){const f=1+d*e,p=1+(d+1)*e;for(let g=0;g<e;g++){const v=(g+1)%e;c.push(f+g,p+g,p+v,f+g,p+v,f+v)}}const h=1+(t-1)*e;for(let d=0;d<e;d++)c.push(h+d,l,h+(d+1)%e);return{pos:r,idx:c}}function hx(n,e){const t=e*Math.PI/n;return t===0?1:Math.max(0,Math.sin(t)/t)}const ux=3;function Cu(n,e){const t=Is[n],i=di[e],{sides:a,rings:s,trunkSides:o}=i,r=Ru(t,a,s,1),l=Au(r.pos,r.idx,0,r.idx.length),c=l>0?Math.sqrt(cx(t)/l):1,h=[],d=[],f=[],p=hx(a,ux),g=(P,I,U,k,H,V)=>(h.push(P,I,U),d.push(k,H,V,k>.5?p:0),h.length/3-1),v=(P,I)=>{const U=[];for(let k=0;k<o;k++){const H=k/o,V=H*Es;U.push(g(Math.cos(V)*I,P,Math.sin(V)*I,0,0,H))}return U},m=(P,I)=>{for(let U=0;U<P.length;U++){const k=(U+1)%P.length;f.push(P[U],I[U],I[k],P[U],I[k],P[k])}};m(v(0,t.trunkR0),v(t.trunkTop,t.trunkR1));const u=f.length,_=Es/a,w=1/s,x=1-t.crownBase,S=g(0,t.crownBase,0,1,0,0),E=[];for(let P=0;P<s;P++){const I=(P+.5)/s,U=[];for(let k=0;k<a;k++){const H=k/a,V=H*Es,z=Tu(t,V,I,_,w)*c;U.push(g(Math.cos(V)*z,t.crownBase+x*I,Math.sin(V)*z,1,I,H))}E.push(U)}const R=g(0,1,0,1,1,0);for(let P=0;P<a;P++)f.push(S,E[0][P],E[0][(P+1)%a]);for(let P=0;P+1<s;P++)m(E[P],E[P+1]);const C=E[s-1];for(let P=0;P<a;P++)f.push(C[P],R,C[(P+1)%a]);const b=new Float32Array(h),y=new Uint16Array(f),A=new Float32Array(b.length);for(let P=0;P<y.length;P+=3){const I=y[P]*3,U=y[P+1]*3,k=y[P+2]*3,H=b[U]-b[I],V=b[U+1]-b[I+1],z=b[U+2]-b[I+2],j=b[k]-b[I],ee=b[k+1]-b[I+1],oe=b[k+2]-b[I+2],Ee=V*oe-z*ee,Ge=z*j-H*oe,Fe=H*ee-V*j;for(const Le of[I,U,k])A[Le]+=Ee,A[Le+1]+=Ge,A[Le+2]+=Fe}for(let P=0;P<A.length;P+=3){const I=Math.hypot(A[P],A[P+1],A[P+2])||1;A[P]/=I,A[P+1]/=I,A[P+2]/=I}return{position:b,normal:A,aTree:new Float32Array(d),index:y,triangles:y.length/3,crownIndexStart:u}}function dx(n){return Math.min(1,Math.max(.08,n/12))||.08}const fx=`
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
`,Vr=16,ln=256,px=.12,mx=.85,gx=4,vx=1.5,_x=6.5,wx=10;function xx(n){const e=ul(n.cls,n.lanes,n.flags)*.5;return n.cls>=wx?e+vx:Math.max(_x,e+gx)}const Ts=[{name:"broadleaf",minHeightM:9,maxHeightM:19,crownRatio:.38,conifer:0,tint:.3},{name:"street",minHeightM:6,maxHeightM:12,crownRatio:.34,conifer:.1,tint:.62},{name:"conifer",minHeightM:12,maxHeightM:28,crownRatio:.24,conifer:1,tint:.08},{name:"scrub",minHeightM:3,maxHeightM:7,crownRatio:.5,conifer:0,tint:.85}];function oi(n,e,t){let i=Math.imul(n,668265261)^Math.imul(e,374761393)^Math.imul(t,2654435761);return i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>13,695872825),((i^i>>>16)>>>0)/4294967296}const yx=528734635,bx=1541459225,Mx=2600822924,Sx=1359893119,Ex=2773480762,Tx=1013904242,Ax=3144134277,Gc=.92;class Du{ax;az;bx;bz;pad;owner;cellM;minX;minZ;nx;nz;start;items;segments;constructor(e,t,i=32,a){this.cellM=i;let s=0;for(const v of e)s+=v.pts.length/2-1;this.segments=s,this.ax=new Float32Array(s),this.az=new Float32Array(s),this.bx=new Float32Array(s),this.bz=new Float32Array(s),this.pad=new Float32Array(s),this.owner=new Int32Array(s);let o=1/0,r=-1/0,l=1/0,c=-1/0,h=0;for(let v=0;v<e.length;v++){const m=e[v],u=t(m);for(let _=2;_<m.pts.length;_+=2){const w=m.pts[_-2],x=m.pts[_-1],S=m.pts[_],E=m.pts[_+1];this.ax[h]=w,this.az[h]=x,this.bx[h]=S,this.bz[h]=E,this.pad[h]=u,this.owner[h]=a?a(m,v):v,h++;const R=Math.min(w,S)-u,C=Math.max(w,S)+u,b=Math.min(x,E)-u,y=Math.max(x,E)+u;R<o&&(o=R),C>r&&(r=C),b<l&&(l=b),y>c&&(c=y)}}s===0&&(o=0,r=0,l=0,c=0),this.minX=o,this.minZ=l,this.nx=Math.max(1,Math.ceil((r-o)/i)+1),this.nz=Math.max(1,Math.ceil((c-l)/i)+1);const d=this.nx*this.nz,f=new Int32Array(d+1),p=v=>{for(let m=0;m<s;m++){const u=this.pad[m],_=this.col(Math.min(this.ax[m],this.bx[m])-u),w=this.col(Math.max(this.ax[m],this.bx[m])+u),x=this.row(Math.min(this.az[m],this.bz[m])-u),S=this.row(Math.max(this.az[m],this.bz[m])+u);for(let E=x;E<=S;E++)for(let R=_;R<=w;R++)v(E*this.nx+R,m)}};p(v=>{f[v+1]++});for(let v=0;v<d;v++)f[v+1]+=f[v];this.start=f,this.items=new Int32Array(f[d]);const g=new Int32Array(d);p((v,m)=>{this.items[this.start[v]+g[v]++]=m})}rawCol(e){return Math.floor((e-this.minX)/this.cellM)}rawRow(e){return Math.floor((e-this.minZ)/this.cellM)}col(e){const t=Math.floor((e-this.minX)/this.cellM);return t<0?0:t>=this.nx?this.nx-1:t}row(e){const t=Math.floor((e-this.minZ)/this.cellM);return t<0?0:t>=this.nz?this.nz-1:t}distSq(e,t,i){const a=this.ax[e],s=this.az[e],o=this.bx[e]-a,r=this.bz[e]-s,l=o*o+r*r;let c=l>0?((t-a)*o+(i-s)*r)/l:0;c=c<0?0:c>1?1:c;const h=t-(a+c*o),d=i-(s+c*r);return h*h+d*d}blocked(e,t){const i=this.row(t)*this.nx+this.col(e);for(let a=this.start[i];a<this.start[i+1];a++){const s=this.items[a],o=this.pad[s];if(this.distSq(s,e,t)<=o*o)return!0}return!1}blockedExcept(e,t,i){const a=this.row(t)*this.nx+this.col(e);for(let s=this.start[a];s<this.start[a+1];s++){const o=this.items[s];if(this.owner[o]===i)continue;const r=this.pad[o];if(this.distSq(o,e,t)<=r*r)return!0}return!1}nearest(e,t){const i=this.row(t)*this.nx+this.col(e);let a=1/0;for(let s=this.start[i];s<this.start[i+1];s++){const o=this.distSq(Rx(this.items,s),e,t);o<a&&(a=o)}return a===1/0?1/0:Math.sqrt(a)}nearestSegment(e,t,i){const a=this.rawCol(e),s=this.rawRow(t),o=Math.ceil(i/this.cellM)+1;let r=i*i,l=-1;const c=(m,u)=>{if(m<0||u<0||m>=this.nx||u>=this.nz)return;const _=u*this.nx+m;for(let w=this.start[_];w<this.start[_+1];w++){const x=this.items[w],S=this.distSq(x,e,t);(S<r||S===r&&l>=0&&x<l)&&(r=S,l=x)}};for(let m=0;m<=o;m++){if(m===0)c(a,s);else{for(let u=-m;u<=m;u++)c(a+u,s-m),c(a+u,s+m);for(let u=-m+1;u<=m-1;u++)c(a-m,s+u),c(a+m,s+u)}if(l>=0&&r<=(m*this.cellM)**2)break}if(l<0)return null;const h=this.ax[l],d=this.az[l],f=this.bx[l]-h,p=this.bz[l]-d,g=f*f+p*p;let v=g>0?((e-h)*f+(t-d)*p)/g:0;return v=v<0?0:v>1?1:v,{road:this.owner[l],segment:l,distanceM:Math.sqrt(r),x:h+v*f,z:d+v*p,dirX:g>0?f/Math.sqrt(g):1,dirZ:g>0?p/Math.sqrt(g):0}}}function Rx(n,e){return n[e]}const ha=4;class Cx{bits;n;extentM;constructor(e,t){this.extentM=t,this.n=Math.max(1,Math.ceil(t*2/ha)),this.bits=new Uint32Array(Math.ceil(this.n*this.n/32)),this.add(e)}add(e){const t=this.extentM;for(const i of e){const a=i.ring;if(a.length<6)continue;let s=1/0,o=-1/0,r=1/0,l=-1/0;for(let p=0;p<a.length;p+=2)a[p]<s&&(s=a[p]),a[p]>o&&(o=a[p]),a[p+1]<r&&(r=a[p+1]),a[p+1]>l&&(l=a[p+1]);const c=this.index(s),h=this.index(o),d=this.index(r),f=this.index(l);if(!(h<0||f<0||c>=this.n||d>=this.n)){for(let p=0,g=a.length-2;p<a.length;g=p,p+=2){const v=a[p]-a[g],m=a[p+1]-a[g+1],u=Math.max(1,Math.ceil(Math.hypot(v,m)/(ha*.5)));for(let _=0;_<=u;_++){const w=this.index(a[g]+v*_/u),x=this.index(a[g+1]+m*_/u);w>=0&&x>=0&&w<this.n&&x<this.n&&this.set(w,x)}}for(let p=Math.max(0,d);p<=Math.min(this.n-1,f);p++){const g=-t+(p+.5)*ha;for(let v=Math.max(0,c);v<=Math.min(this.n-1,h);v++){const m=-t+(v+.5)*ha;Dx(a,m,g)&&this.set(v,p)}}}}}index(e){return Math.floor((e+this.extentM)/ha)}set(e,t){const i=t*this.n+e;this.bits[i>>>5]|=1<<(i&31)}occupied(e,t){const i=this.index(e),a=this.index(t);if(i<0||a<0||i>=this.n||a>=this.n)return!1;const s=a*this.n+i;return(this.bits[s>>>5]&1<<(s&31))!==0}}function Dx(n,e,t){let i=!1;for(let a=0,s=n.length-2;a<n.length;s=a,a+=2){const o=n[a+1],r=n[s+1];if(o>t!=r>t){const l=(t-o)/(r-o);e<n[a]+l*(n[s]-n[a])&&(i=!i)}}return i}class Px{parts=[];add(e){this.parts.push(e)}blocked(e,t){for(const i of this.parts)if(i.blocked(e,t))return!0;return!1}}function Lx(n,e,t,i,a,s=[]){const o=n.spacingM??Vr,{mask:r,heightAt:l,roads:c,footprints:h}=n,d=Math.floor(e/o)-1,f=Math.floor(i/o)+1,p=Math.floor(t/o)-1,g=Math.floor(a/o)+1;for(let v=p;v<=g;v++)for(let m=d;m<=f;m++){const u=(m+.5+(oi(m,v,yx)-.5)*Gc)*o,_=(v+.5+(oi(m,v,bx)-.5)*Gc)*o;if(u<e||u>=i||_<t||_>=a)continue;const w=Jw(r.rgba,r.n,r.extentM,u,_);if(w.water>px||w.built>mx||oi(m,v,Mx)>=w.tree||h&&h.occupied(u,_)||c&&c.blocked(u,_))continue;const x=Math.min(Ts.length-1,Math.floor(oi(m,v,Sx)*Ts.length)),S=Ts[x],E=oi(m,v,Ex),R=S.minHeightM+(S.maxHeightM-S.minHeightM)*E,C=R*S.crownRatio*(.78+.5*w.tree);s.push({x:u,y:l(u,_),z:_,heightM:R,radiusM:C,yaw:oi(m,v,Tx)*Math.PI*2,species:x,tint:oi(m,v,Ax)})}return s}const Ix=2200,Ux=1100,Vc=1400,Nx=64,Fx=.5,kx=1.15,Ox=.22;di.map((n,e)=>Math.max(...Is.map((t,i)=>Cu(i,e).triangles)));const Pu=`
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

${nx}
${fx}

const float LEAN_MAX = ${Ox};
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
`,zx=`
${Pu}
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
`,Bx=`
${Pu}
void main() {
  Placed pl = placeVertex();
  gl_Position = pl.culled ? INSTANCE_CULLED
              : projectionMatrix * modelViewMatrix * vec4(pl.world, 1.0);
}
`,Hx=`precision highp float;
out vec4 c;
void main() { c = vec4(1.0); }`,Gx=`
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
${gi}
${Vs}
${$s}
${Ws}

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
`,Vx=(n,e)=>`${n},${e}`,Wx=n=>n-Math.floor(n);class Xx{group=new qn;depthScene=new Un;uniforms;stats={count:0,tiles:0,triangles:0,lodCounts:di.map(()=>0),rebuildMs:0,clipped:!1};field;buckets=[];lodFarM;tiles=new Map;radiusM;extentM;atX=-1e9;atZ=-1e9;packedX=0;packedZ=0;constructor(e,t,i){this.field=e,this.radiusM=i?Ux:Ix,this.extentM=e.mask.extentM;const a=i?Fx:1;this.lodFarM=di.map(l=>Math.min(l.farM*a,this.radiusM)),this.uniforms={...t,...Xs(),uCameraPos:{value:new F},uSH:{value:Zi([.28,.36,.5],.55,.45)},uFade:{value:new ke(this.radiusM*.76,this.radiusM)},uWind:{value:new F(1,0,.3)},uTime:{value:0},uSunDir:{value:new F(0,1,0)},uSunColor:{value:new Te(1,1,1)},uSunIntensity:{value:22},uSunSurface:{value:.105},uMoonDir:{value:new F(0,-1,0)},uMoonLight:{value:new Te(0,0,0)},uNight:{value:0},uNightGlow:{value:new Te(0,0,0)},uMieG:{value:.76},uTurbidity:{value:1},uCamAltitude:{value:100},uMultiScatter:{value:.055}};const s=new nn({vertexShader:zx,fragmentShader:Gx,uniforms:this.uniforms,glslVersion:Ot,side:gn}),o={...this.uniforms,uFade:{value:new ke(Vc*.8,Vc)}},r=new nn({vertexShader:Bx,fragmentShader:Hx,uniforms:o,glslVersion:Ot,colorWrite:!1});for(let l=0;l<di.length;l++){const c=this.capacityFor(l);for(let h=0;h<Is.length;h++){const d=Cu(h,l),f=new Tt;f.setAttribute("position",new dt(d.position,3)),f.setAttribute("normal",new dt(d.normal,3)),f.setAttribute("aTree",new dt(d.aTree,4)),f.setIndex(new dt(d.index,1));const p=new tx(f,c,[{name:"iPos",itemSize:4},{name:"iShape",itemSize:4}]);this.buckets.push({form:h,lod:l,field:p,triangles:d.triangles,count:0});const g=new xt(p.geometry,s);g.frustumCulled=!1,g.renderOrder=-1,this.group.add(g);const v=new xt(p.geometry,r);v.frustumCulled=!1,v.layers.enable(Ua),this.depthScene.add(v)}}}capacityFor(e){const t=e===0?0:this.lodFarM[e-1],i=Math.min(this.lodFarM[e],this.radiusM),a=Math.PI*Math.max(0,i*i-t*t);return Math.max(64,Math.ceil(a/(Vr*Vr)*kx))}invalidate(){this.tiles.clear(),this.atX=-1e9,this.atZ=-1e9}update(e,t){const i=Math.floor(e/ln),a=Math.floor(t/ln),s=Math.hypot(e-this.packedX,t-this.packedZ);if(i===this.atX&&a===this.atZ&&s<Nx)return;this.atX=i,this.atZ=a,this.packedX=e,this.packedZ=t;const o=performance.now(),r=this.radiusM,l=Math.ceil(r/ln)+1,c=[];for(let v=a-l;v<=a+l;v++)for(let m=i-l;m<=i+l;m++){const u=m*ln,_=v*ln;if(u+ln<-this.extentM||u>this.extentM||_+ln<-this.extentM||_>this.extentM)continue;const w=Math.max(0,Math.max(u-e,e-(u+ln))),x=Math.max(0,Math.max(_-t,t-(_+ln))),S=w*w+x*x;S>r*r||c.push({key:Vx(m,v),x:u,z:_,d2:S})}c.sort((v,m)=>v.d2-m.d2);for(const v of this.buckets)v.count=0;const h=new Set;let d=0,f=!1;for(const v of c){let m=this.tiles.get(v.key);m||(m=Lx(this.field,v.x,v.z,v.x+ln,v.z+ln),this.tiles.set(v.key,m)),h.add(v.key);for(const u of m){const _=Math.hypot(u.x-e,u.z-t);if(_>r)continue;let w=di.length-1;for(let b=0;b<this.lodFarM.length;b++)if(_<=this.lodFarM[b]){w=b;break}const x=Ts[u.species].conifer>=.5?ax:ix,S=this.buckets[w*Is.length+x];if(S.count>=S.field.capacity){f=!0;continue}const E=S.count*4,R=S.field.arrays.iPos,C=S.field.arrays.iShape;R[E]=u.x,R[E+1]=u.y,R[E+2]=u.z,R[E+3]=u.yaw,C[E]=u.radiusM,C[E+1]=u.heightM,C[E+2]=Wx(u.tint*7.13+u.yaw*.6180339),C[E+3]=u.tint,S.count++,d++}}for(const v of this.tiles.keys())h.has(v)||this.tiles.delete(v);let p=0;const g=di.map(()=>0);for(const v of this.buckets)v.field.upload(v.count),p+=v.count*v.triangles,g[v.lod]+=v.count;this.stats.count=d,this.stats.tiles=h.size,this.stats.triangles=p,this.stats.lodCounts=g,this.stats.rebuildMs=performance.now()-o,this.stats.clipped=this.stats.clipped||f}setWind(e,t){const i=(t+180)*Math.PI/180,a=this.uniforms.uWind.value;a.x=Math.sin(i),a.y=-Math.cos(i),a.z=dx(e)}dispose(){for(const e of this.buckets)e.field.dispose()}}function $n(n,e,t){let i=(n|0)*668265261;return i=Math.imul(i^(e|0),2246822507),i=Math.imul(i^i>>>13,3266489909),i=Math.imul(i^(t|0),668265261),i^=i>>>16,(i>>>0)/4294967296}const Qe=(n,e)=>$n(n,e,40503),Wt=(n,e,t)=>n+(e-n)*t,Oo=5,$x={0:{lo:[.19,.23,.29],hi:[.38,.42,.47],storeyM:3.9,columnM:1.6,win:[.05,.95,.08,.96],glass:.92,roughness:.06,relief:.1,parapetM:.9,f0:.22},1:{lo:[.31,.15,.11],hi:[.54,.31,.23],storeyM:3.1,columnM:3.3,win:[.29,.71,.28,.82],glass:.2,roughness:.86,relief:.75,parapetM:1,f0:.05},2:{lo:[.44,.41,.35],hi:[.68,.64,.55],storeyM:3,columnM:3,win:[.25,.75,.26,.84],glass:.22,roughness:.78,relief:.5,parapetM:.7,f0:.05},3:{lo:[.31,.31,.3],hi:[.58,.57,.55],storeyM:3.5,columnM:2.4,win:[.13,.87,.24,.78],glass:.45,roughness:.62,relief:.55,parapetM:1.1,f0:.14},4:{lo:[.42,.39,.34],hi:[.63,.59,.52],storeyM:4.2,columnM:3.6,win:[.3,.7,.24,.84],glass:.18,roughness:.72,relief:.8,parapetM:1.4,f0:.05}},ri={storeyM:2.85,columnM:4.3,win:[.23,.77,.3,.8],relief:.3,storeyJitter:.1,columnJitter:.13,winJitter:.035},zo=.55,qx=11,Bo=[12,30,70],Yx=[[.02,.34,.34,.18,.12],[.08,.34,.24,.24,.1],[.34,.14,.08,.3,.14],[.6,.02,.02,.25,.11]],Wc={0:[1,1,1,1,1],1:[.25,1.7,1.7,.8,.5],2:[2.2,.7,.4,1.2,1.1],3:[.2,1.2,.6,2.2,.2],4:[1.2,1.1,1.5,.8,.5],5:[.4,.8,.5,.9,3],6:[3.2,.05,.05,1,.7]};function jx(n){for(let e=0;e<Bo.length;e++)if(n<Bo[e])return e;return Bo.length}function Zx(n,e,t){const i=Yx[jx(e)],a=Wc[n]??Wc[0];let s=0;const o=new Array(Oo);for(let l=0;l<Oo;l++)o[l]=i[l]*a[l],s+=o[l];let r=Qe(t,17)*s;for(let l=0;l<Oo;l++)if(r-=o[l],r<=0)return l;return 3}function Kx(n,e,t){return e===1?0:e===2||e===6?1:e===3||e===4||e===5?2:t>=30||n===0||n===3?1:n===1||n===2?0:2}function Ho(n,e,t){let i=Math.abs(n-e);i>12&&(i=24-i);const a=Math.min(1,i/t);return 1-a*a*(3-2*a)}function Jx(n){const e=(n%24+24)%24,t=.25+.75*Math.max(Ho(e,21,7),0),i=.12+.88*Math.max(Ho(e,18.5,6.5),0),a=.08+.62*Math.max(Ho(e,19,5.5),0);return{residential:t,office:i,other:a}}const Qx=7,ya=Qx*4,Lu=ya/2,Iu=32;function ey(n){const e=Math.max(0,Math.min(1,n/Iu)),t=Math.round(e*65535);return[t&255,t>>8&255]}function ty(n,e,t){const i=Zx(n,e,t),a=$x[i],s=n===1&&e<=qx?1:0,o=Qe(t,33),r=Qe(t,49)-.5,l=Qe(t,50)-.5,c=Qe(t,51)-.5,h=1+.14*(Qe(t,52)-.5),d=[dn(Wt(a.lo[0],a.hi[0],o)*h+.035*r),dn(Wt(a.lo[1],a.hi[1],o)*h+.035*l),dn(Wt(a.lo[2],a.hi[2],o)*h+.035*c)],f=(s?ri.storeyM:a.storeyM)*(1+(s?ri.storeyJitter:.1)*(Qe(t,65)-.5)),p=(s?ri.columnM:a.columnM)*(1+(s?ri.columnJitter:.18)*(Qe(t,66)-.5)),g=Math.min(1,Math.max(0,(e-20)/80)),v=(s?ri.winJitter:.06)*(Qe(t,67)-.5),m=s?ri.win:a.win,u=[dn(Wt(m[0],m[0]*.45,g)+v),dn(Wt(m[1],1-(1-m[1])*.45,g)-v),dn(m[2]+v),dn(m[3]-v*.5)],_=dn(a.glass*(.82+.36*Qe(t,68))*(1+.55*g)),w=Xc+Math.floor(Qe(t,88)*($c-Xc+1)),x=Math.floor(Qe(t,89)*$c)%w,S=Kx(i,n,e),E=S===1,R=qc[n]??qc[0],C=dn(R*(.55+.9*Qe(t,97))+.35*Math.min(1,Math.max(0,(e-10)/40))),b=Math.min(iy,Math.max(ny,f*Wt(1.04,1.55,C)*(1+.1*(Qe(t,98)-.5))));return{family:i,colour:d,roughness:dn(a.roughness*(1+.2*(Qe(t,69)-.5))),f0:a.f0,storeyM:f,columnM:p,win:u,glassFrac:_,relief:(s?ri.relief:a.relief)*(.8+.4*Qe(t,70)),parapetM:a.parapetM*(.7+.6*Qe(t,71)),groundStoreyM:b,shopfront:C,house:s,pFloor:E?Wt(.5,.8,Qe(t,81)):Wt(.72,.95,Qe(t,81)),pTenant:E?Wt(.55,.9,Qe(t,82)):Wt(.42,.72,Qe(t,82)),pCell:Wt(.72,.92,Qe(t,83)),pCore:Wt(.55,.9,Qe(t,84)),tenantW:E?3+Math.floor(Qe(t,85)*6):2+Math.floor(Qe(t,85)*3),tenantH:E?1+Math.floor(Qe(t,86)*3):1+Math.floor(Qe(t,86)*2),coreW:1+Math.floor(Qe(t,87)*2),corePeriod:w,coreSlot:x,group:S,seed:t%4096/4096}}const Xc=7,$c=14,ny=2.9,iy=6,qc={0:.4,1:.12,2:.72,3:.06,4:.95,5:.35,6:.65};function dn(n){return n<0?0:n>1?1:n}function ay(n,e,t){let i=t*ya;e[i++]=n.colour[0],e[i++]=n.colour[1],e[i++]=n.colour[2],e[i++]=n.roughness,e[i++]=n.storeyM,e[i++]=n.columnM,e[i++]=n.glassFrac,e[i++]=n.seed,e[i++]=n.win[0],e[i++]=n.win[1],e[i++]=n.win[2],e[i++]=n.win[3],e[i++]=n.pFloor,e[i++]=n.pTenant,e[i++]=n.pCell,e[i++]=n.pCore,e[i++]=n.tenantW,e[i++]=n.tenantH,e[i++]=n.coreW,e[i++]=n.corePeriod,e[i++]=n.coreSlot,e[i++]=n.group*8+n.family,e[i++]=n.relief,e[i++]=n.parapetM,e[i++]=n.groundStoreyM,e[i++]=n.shopfront,e[i++]=n.house,e[i++]=n.f0}const sy=`
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
vec2 facadePair(float bidx, float k) {
  float t = bidx * ${Lu}.0 + k;
  float y = floor(t / uFacadeWidth);
  vec4 e = texelFetch(uFacade, ivec2(int(t - y * uFacadeWidth), int(y)), 0);
  float lo0 = floor(e.r * 255.0 + 0.5);
  float hi0 = floor(e.g * 255.0 + 0.5);
  float lo1 = floor(e.b * 255.0 + 0.5);
  float hi1 = floor(e.a * 255.0 + 0.5);
  return vec2((lo0 + hi0 * 256.0) / 65535.0, (lo1 + hi1 * 256.0) / 65535.0)
       * ${Iu}.0;
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
`;function oy(n){const e=n.length/2;if(e<3)return new Uint32Array(0);if(e===3)return new Uint32Array([0,1,2]);const t=new Array(e);for(let s=0;s<e;s++)t[s]=s;const i=[];let a=e*e;for(;t.length>3&&a-- >0;){let s=!1;for(let o=0;o<t.length;o++){const r=t[(o+t.length-1)%t.length],l=t[o],c=t[(o+1)%t.length],h=n[r*2],d=n[r*2+1],f=n[l*2],p=n[l*2+1],g=n[c*2],v=n[c*2+1];if((f-h)*(v-d)-(p-d)*(g-h)<=0)continue;let u=!1;for(let _=0;_<t.length;_++){const w=t[_];if(w===r||w===l||w===c)continue;const x=n[w*2],S=n[w*2+1],E=(f-h)*(S-d)-(p-d)*(x-h),R=(g-f)*(S-p)-(v-p)*(x-f),C=(h-g)*(S-v)-(d-v)*(x-g);if(E>=0&&R>=0&&C>=0){u=!0;break}}if(!u){i.push(r,l,c),t.splice(o,1),s=!0;break}}if(!s)break}for(let s=1;s+1<t.length;s++)i.push(t[0],t[s],t[s+1]);return new Uint32Array(i)}function Us(n){const e=n.length/2;let t=0;for(let i=0,a=e-1;i<e;a=i++)t+=(n[a*2]-n[i*2])*(n[a*2+1]+n[i*2+1]);return t/2}const Yc=.25;var Se=(n=>(n[n.Generic=0]="Generic",n[n.Residential=1]="Residential",n[n.Commercial=2]="Commercial",n[n.Industrial=3]="Industrial",n[n.Retail=4]="Retail",n[n.Civic=5]="Civic",n[n.Tower=6]="Tower",n))(Se||{}),Ye=(n=>(n[n.Flat=0]="Flat",n[n.Pitched=1]="Pitched",n[n.Dome=2]="Dome",n[n.Pyramid=3]="Pyramid",n[n.Tapered=4]="Tapered",n))(Ye||{});function ry(n){const e=new Array(n.length);for(let t=0;t<n.length;t++){const i=n[t],a=Math.fround(i.cx),s=Math.fround(i.cz),o=i.dx.length,r=new Float32Array(o*2);for(let l=0;l<o;l++)r[l*2]=a+i.dx[l]*Yc,r[l*2+1]=s+i.dz[l]*Yc;e[t]={cx:a,cz:s,baseM:Math.fround(i.baseM),topM:Math.fround(i.topM),kind:i.kind,roof:i.roof,ring:r}}return e}const ly=12,cy=100,hy=30;function uy(n,e){return e<ly&&n>cy?!0:n/Math.max(1,e)>hy}function dy(n,e){let t=1/0;for(let i=0;i<n.ring.length;i+=2){const a=e(n.ring[i],n.ring[i+1]);a<t&&(t=a)}return Number.isFinite(t)?t:e(n.cx,n.cz)}const jc=1500;function Uu(n,e){if(n<Go/e)return 0;const t=(n-Go/e)/(fy-Go/e);return Math.min(1,Math.max(0,t))*py*e}const Go=4200,fy=9e3,py=40,my=1200,Nu=1600;function gy(n){return n*2+Math.max(0,n-2)}const As={parapet:!1,boxes:0,overrun:!1};function Fu(n,e,t,i,a,s){if(s!==Ye.Flat||a===Se.Residential||t<6||i<120)return As;const o=n<Nu/e;if(!o)return As;if(n>=my/e)return{parapet:o,boxes:0,overrun:!1};const r=Math.min(4,Math.floor(i/900)),l=t>=22&&i>=350;return{parapet:o,boxes:r,overrun:l}}function vy(n,e){return(e.parapet?n*2:0)+(e.boxes+(e.overrun?1:0))*10}function _y(n,e){for(const t of[1,1.4,2,3,4.5,7,11,18]){let i=0;for(const a of n.buildings){const s=a.topM-a.baseM,o=Math.hypot(a.cx,a.cz);if(s<Uu(o,t))continue;const r=a.ring.length/2;if(i+=gy(r),a.roof===Ye.Pitched&&s>=4&&s<=20&&(i+=8),o<Nu/t&&(i+=vy(r,Fu(o,t,s,Math.abs(Us(a.ring)),a.kind,a.roof))),i>e)break}if(i<=e)return t}return 18}const wy=`
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
`,xy=0,yy=1,by=2,My=3,fs=4,Zc=5,Wr=.5,ku=.75,Sy=1-Wr*ku/2,Kc=.35,Jc=.2,Xr=.35,$r=1.6,Ey=Math.log($r/Xr)/($r-Xr),Ty=`
precision highp float;
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
${gi}
${Ia}
${Vs}
${$s}
${Ws}
${sy}

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
  float bidx  = vInfo.x;
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
      openMean = ${zo};
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
                             ${zo});
        shop *= mix(${zo}, max(bayKeep, isDoor), detailX);
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
      float drop = step(bHash, ${Wr}) * ${ku} * (bHash / ${Wr});
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
      float sx = ${Kc} / fp.columnM;
      float sy = ${Kc} / fp.storeyM;
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
      float profileMean = ${Sy}
                        * (winMean + ${Jc} * max(0.0, spillMeanX * spillMeanY - winMean));
      float profile = (winX * litY + ${Jc} * halo) * (winMean / max(profileMean, 1e-4));

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
                       exp(mix(log(${Xr}), log(${$r}),
                               hash21(vec2(tb * 1.63 + fp.seed * 7.0, th * 0.29 + 3.0))))
                       * ${Ey.toFixed(6)},
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
`;function Ay(n){return{...n,...Xs(),uCameraPos:{value:new F},uSH:{value:Zi([.2,.24,.3],.55,.45)},uEnv:{value:null},uEnvMaxLod:{value:6},uNight:{value:0},uNightGlow:{value:new Te(0,0,0)},uMoonDir:{value:new F(0,-1,0)},uMoonLight:{value:new Te(0,0,0)},uWetness:{value:0},uSunSurface:{value:.105},uFlatGlass:{value:0},uFlatRefl:{value:0},uUrban:{value:null},uUrbanExtent:{value:1},uBuildingDebug:{value:0},uExposure:{value:1},uSunDir:{value:new F(0,1,0)},uSunColor:{value:new Te(1,1,1)},uSunIntensity:{value:16},uMieG:{value:.76},uTurbidity:{value:1},uCamAltitude:{value:100},uMultiScatter:{value:.055},uFacade:{value:null},uFacadeWidth:{value:1},uHourFactor:{value:new F(1,1,1)}}}function Ry(){return{pos:[],nrm:[],uv:[],info:[],idx:[]}}function ua(n,e,t){let i=!1;const a=n.length/2;for(let s=0,o=a-1;s<a;o=s++){const r=n[s*2],l=n[s*2+1],c=n[o*2],h=n[o*2+1];l>t!=h>t&&e<(c-r)*(t-l)/(h-l)+r&&(i=!i)}return i}function Cy(n,e,t,i,a,s,o,r,l){const c=(g,v,m,u,_,w,x,S,E,R,C,b,y,A,P,I)=>{const U=n.pos.length/3;n.pos.push(g,v,m,u,_,w,x,S,E,R,C,b);for(let k=0;k<4;k++)n.nrm.push(y,A,P),n.uv.push(0,0),n.info.push(r,l,I,My);n.idx.push(U,U+1,U+2,U,U+2,U+3)},h=e-i,d=e+i,f=t-a,p=t+a;c(h,s,f,h,o,f,d,o,f,d,s,f,0,0,-1,0),c(d,s,p,d,o,p,h,o,p,h,s,p,0,0,1,0),c(h,s,p,h,o,p,h,o,f,h,s,f,-1,0,0,0),c(d,s,f,d,o,f,d,o,p,d,s,p,1,0,0,0),c(h,o,f,h,o,p,d,o,p,d,o,f,0,1,0,1)}function Dy(n,e,t,i,a,s,o){let r=1/0,l=-1/0,c=1/0,h=-1/0;for(let v=0;v<e.ring.length;v+=2)r=Math.min(r,e.ring[v]),l=Math.max(l,e.ring[v]),c=Math.min(c,e.ring[v+1]),h=Math.max(h,e.ring[v+1]);const d=l-r,f=h-c;if(d<6||f<6)return;const p=i.boxes+(i.overrun?1:0);let g=0;for(let v=0;v<p*6&&g<p;v++){const m=$n(o,2048+v,1),u=$n(o,2048+v,2),_=r+d*(.12+.76*m),w=c+f*(.12+.76*u);if(!ua(e.ring,_,w))continue;const x=i.overrun&&g===0,S=$n(o,2304+v,3),E=$n(o,2304+v,4),R=$n(o,2304+v,5),C=x?2.2+1.8*S:1.1+1.6*S,b=x?2+1.8*E:1+1.5*E,y=x?3+1.6*R:.9+1.6*R;!ua(e.ring,_-C,w-b)||!ua(e.ring,_+C,w-b)||!ua(e.ring,_-C,w+b)||!ua(e.ring,_+C,w+b)||(Cy(n,_,w,C,b,t,t+y,a,s),g++)}}function Py(n){const e=n.length/2;if(e<3)return null;let t=1/0,i=1,a=0,s=0,o=0,r=0,l=0;for(let u=0;u<e;u++){const _=(u+1)%e,w=n[_*2]-n[u*2],x=n[_*2+1]-n[u*2+1],S=Math.hypot(w,x);if(S<.05)continue;const E=w/S,R=x/S;let C=1/0,b=-1/0,y=1/0,A=-1/0;for(let I=0;I<e;I++){const U=n[I*2],k=n[I*2+1],H=U*E+k*R,V=-U*R+k*E;H<C&&(C=H),H>b&&(b=H),V<y&&(y=V),V>A&&(A=V)}const P=(b-C)*(A-y);P<t&&(t=P,i=E,a=R,s=C,o=b,r=y,l=A)}if(!isFinite(t))return null;const c=(s+o)/2,h=(r+l)/2,d=c*i+h*-a,f=c*a+h*i;let p=(o-s)/2,g=(l-r)/2,v=i,m=a;if(g>p){v=-a,m=i;const u=p;p=g,g=u}return g<.5?null:{cx:d,cz:f,ux:v,uz:m,halfL:p,halfW:g,area:4*p*g}}const Qc=.45,Ly=20,eh=61455;function Iy(n,e,t){if(n.roof!==Ye.Pitched||e<4||e>Ly)return null;const i=n.ring.length/2;if(i<3||i>64)return null;const a=Py(n.ring);if(!a)return null;const s=Math.abs(Us(n.ring))/a.area;if(s<.72)return null;const o=20+14*$n(t,eh,1);let r=a.halfW*Math.tan(o*Math.PI/180);if(r=Math.min(r,4.5,.55*e,e-2.4),r<1)return null;const l=s>=.88&&$n(t,eh,2)<.5;return{obb:a,rise:r,gable:l,ridgeHalfL:Math.max(0,a.halfL-a.halfW)}}function Uy(n,e,t,i,a,s,o){const{obb:r,gable:l,ridgeHalfL:c}=e,{ux:h,uz:d,halfL:f,halfW:p}=r,g=-d,v=h,m=f+Qc,u=p+Qc,_=i-t,w=Math.hypot(u,_),x=Math.hypot(m-c,_),S=(A,P,I,U,k,H)=>{const V=n.pos.length/3;for(const[z,j,ee,oe,Ee]of A)n.pos.push(r.cx+z*h+j*g,ee,r.cz+z*d+j*v),n.nrm.push(P,I,U),n.uv.push(oe,Ee),n.info.push(s,o,H,k);for(let z=1;z+1<A.length;z++)n.idx.push(V,V+z,V+z+1)},E=l?m:c,R=u/w,C=_/w,b=[[-m,u,t,0,0],[m,u,t,2*m,0],[E,0,i,E+m,w],[-E,0,i,m-E,w]],y=[[m,-u,t,0,0],[-m,-u,t,2*m,0],[-E,0,i,m+E,w],[E,0,i,m-E,w]];if(E<.001&&(b.pop(),y.pop()),S(b,g*C,R,v*C,fs,1),S(y,-g*C,R,-v*C,fs,1),l)S([[f,p,t,0,o],[f,-p,t,2*p,o],[f,0,i,p,i-a]],h,0,d,Zc,0),S([[-f,-p,t,0,o],[-f,p,t,2*p,o],[-f,0,i,p,i-a]],-h,0,-d,Zc,0);else{const A=(m-c)/x,P=_/x;S([[m,u,t,0,0],[m,-u,t,2*u,0],[c,0,i,u,x]],h*P,A,d*P,fs,1),S([[-m,-u,t,0,0],[-m,u,t,2*u,0],[-c,0,i,u,x]],-h*P,A,-d*P,fs,1)}}function Ny(n,e,t,i,a=As,s){const o=e.ring.length/2;if(o<3)return;const r=t+e.baseM,l=t+e.topM,c=l-r;if(c<=.5)return;const h=r-3,d=s?s.seed*4096:i,f=Iy(e,c,d),p=!f&&a.parapet&&s?Math.max(.4,s.parapetM):0,g=f?l-f.rise:l,v=f?g:l+p,m=g-r,u=(x,S)=>n.info.push(i,m,x,S);let _=0;for(let x=0;x<o;x++){const S=(x+1)%o,E=e.ring[x*2],R=e.ring[x*2+1],C=e.ring[S*2],b=e.ring[S*2+1],y=C-E,A=b-R,P=Math.hypot(y,A);if(P<.05)continue;const I=A/P,U=-y/P,k=n.pos.length/3;n.pos.push(E,h,R,C,h,b,C,v,b,E,v,R);for(let z=0;z<4;z++)n.nrm.push(I,0,U);const H=h-r,V=m+p;n.uv.push(_,H,_+P,H,_+P,V,_,V);for(let z=0;z<4;z++)u(0,xy);if(n.idx.push(k,k+2,k+1,k,k+3,k+2),p>0){const z=n.pos.length/3;n.pos.push(E,l,R,C,l,b,C,v,b,E,v,R);for(let j=0;j<4;j++)n.nrm.push(-I,0,-U);n.uv.push(_,c,_+P,c,_+P,V,_,V);for(let j=0;j<4;j++)u(0,by);n.idx.push(z,z+1,z+2,z,z+2,z+3)}_+=P}const w=oy(e.ring);if(w.length){const x=n.pos.length/3;for(let S=0;S<o;S++)n.pos.push(e.ring[S*2],g,e.ring[S*2+1]),n.nrm.push(0,1,0),n.uv.push(e.ring[S*2],e.ring[S*2+1]),n.info.push(i,m,1,yy);for(let S=0;S+2<w.length;S+=3)n.idx.push(x+w[S],x+w[S+2],x+w[S+1])}f?Uy(n,f,g,l,r,i,m):(a.boxes>0||a.overrun)&&Dy(n,e,l,a,i,m,d)}function Fy(n,e){if(!n.idx.length)return null;const t=new Tt;t.setAttribute("position",new qt(n.pos,3)),t.setAttribute("normal",new qt(n.nrm,3)),t.setAttribute("uv",new qt(n.uv,2)),t.setAttribute("info",new qt(n.info,4)),t.setIndex(n.pos.length/3>65535?new zs(n.idx,1):new Os(n.idx,1)),t.computeBoundingSphere();const i=new nn({vertexShader:wy,fragmentShader:Ty,uniforms:e,glslVersion:Ot,side:gn});return new xt(t,i)}const Ns=1024;function ky(n){const e=n.length*Lu,t=Math.max(1,Math.ceil(e/Ns)),i=new Uint8Array(Ns*t*4),a=new Float32Array(ya);for(let s=0;s<n.length;s++){ay(n[s],a,0);for(let o=0;o<ya;o++){const[r,l]=ey(a[o]),c=(s*ya+o)*2;i[c]=r,i[c+1]=l}}return{data:i,height:t}}function Oy(n){const{data:e,height:t}=ky(n),i=new Pa(e,Ns,t,wt,Et);return i.minFilter=mt,i.magFilter=mt,i.generateMipmaps=!1,i.needsUpdate=!0,i}class zy{group=new qn;uniforms;stats;constructor(e,t,i,a){this.uniforms=Ay(i);const s=_y(e,a.buildingTriangleBudget),o=new Map,r=[],l=new Array(5).fill(0);let c=0,h=0,d=0,f=0,p=0;for(let m=0;m<e.buildings.length;m++){const u=e.buildings[m],_=Math.hypot(u.cx,u.cz),w=u.topM-u.baseM;if(w<Uu(_,s)){h++;continue}const x=Math.abs(Us(u.ring));if(w<8&&x>2e4){d++;continue}if(Us(u.ring)<0){const A=u.ring;for(let P=0,I=A.length/2-1;P<I;P++,I--){const U=A[P*2],k=A[P*2+1];A[P*2]=A[I*2],A[P*2+1]=A[I*2+1],A[I*2]=U,A[I*2+1]=k}}const S=dy(u,t),E=`${Math.floor(u.cx/jc)},${Math.floor(u.cz/jc)}`;let R=o.get(E);R||(R=Ry(),o.set(E,R));const C=ty(u.kind,w,m),b=r.length;r.push(C),l[C.family]++;const y=Fu(_,s,w,x,u.kind,u.roof);y.parapet&&f++,p+=y.boxes+(y.overrun?1:0),Ny(R,u,S,b,y,C),c++}const g=Oy(r);this.uniforms.uFacade.value=g,this.uniforms.uFacadeWidth.value=Ns;let v=0;for(const m of o.values()){const u=Fy(m,this.uniforms);u&&(u.layers.enable(Ua),v+=m.idx.length/3,this.group.add(u))}this.stats={drawn:c,skippedFar:h,skippedFlat:d,triangles:v,cells:o.size,lod:s,parapets:f,plantBoxes:p,families:l}}dispose(){this.uniforms.uFacade.value?.dispose();for(const e of this.group.children){const t=e;t.geometry?.dispose(),t.material?.dispose()}this.group.clear()}}const By=st.Pedestrian;function th(n){return(n.flags&Fa)!==0?!1:n.cls<By}const ps=.3,Hy=200,Gy=250;function Vy(n,e){const t=n.s.length;if(t===0)return 0;if(e<=n.s[0])return n.y[0];if(e>=n.s[t-1])return n.y[t-1];for(let i=1;i<t;i++)if(e<=n.s[i]){const a=n.s[i]-n.s[i-1],s=a>1e-6?(e-n.s[i-1])/a:0;return n.y[i-1]+(n.y[i]-n.y[i-1])*s}return n.y[t-1]}class Wy{cells=new Map;x=[];z=[];key(e,t){return e*73856093^t*19349663}find(e,t,i){const a=Math.floor(e/ps),s=Math.floor(t/ps);let o=-1,r=ps*ps;for(let d=-1;d<=1;d++)for(let f=-1;f<=1;f++){const p=this.cells.get(this.key(a+f,s+d));if(p)for(const g of p){const v=this.x[g]-e,m=this.z[g]-t,u=v*v+m*m;(u<r||u===r&&o>=0&&g<o)&&(r=u,o=g)}}if(o>=0||!i)return o;const l=this.x.length;this.x.push(e),this.z.push(t);const c=this.key(a,s),h=this.cells.get(c);return h?h.push(l):this.cells.set(c,[l]),l}}function Xy(n,e,t){const i=Date.now(),a=new Array(n.length).fill(null),s=[];for(let y=0;y<n.length;y++)(n[y].flags&ea)!==0&&n[y].pts.length>=4&&s.push(y);const o=()=>({deck:a,stats:{bridgeWays:s.length,chains:0,abutments:0,orphanChains:0,orphanChainsLifted:0,orphanChainsDraped:0,longestChainM:0,buildMs:Date.now()-i}});if(s.length===0)return o();const r=new Wy,l=[],c=[],h=[],d=[];for(let y=0;y<n.length;y++){const A=(n[y].flags&ea)!==0,P=th(n[y]),I=n[y].pts;for(let U=0;U<I.length;U+=2){const k=r.find(I[U],I[U+1],!0);for(;l.length<=k;)l.push(y),c.push(!1),h.push(!1),d.push(!1);l[k]!==y&&(c[k]=!0),A||(P?h[k]=!0:d[k]=!0)}}const f=[],p=[],g=[];for(const y of s){g.push(th(n[y]));const A=n[y].pts,P=A.length/2,I=[],U=[];let k=0;for(let H=0;H<P;H++){H>0&&(k+=Math.hypot(A[H*2]-A[(H-1)*2],A[H*2+1]-A[(H-1)*2+1]));const V=r.find(A[H*2],A[H*2+1],!1),z=H===0||H===P-1;V>=0&&(z||c[V])&&(U.length===0||k-U[U.length-1]>.001)&&(I.push(V),U.push(k))}f.push(I),p.push(U)}const v=new Map,m=new Set,u=(y,A,P)=>{y!==A&&(v.has(y)||v.set(y,[]),v.has(A)||v.set(A,[]),v.get(y).push({other:A,len:P}),v.get(A).push({other:y,len:P}))};for(let y=0;y<s.length;y++){const A=f[y],P=p[y];for(let I=1;I<A.length;I++)u(A[I-1],A[I],Math.max(.001,P[I]-P[I-1]));if(A.length===1&&!v.has(A[0])&&v.set(A[0],[]),g[y])for(const I of A)m.add(I)}const _=new Map,w=new Set;let x=0,S=0,E=0,R=0,C=0,b=0;for(const y of v.keys()){if(w.has(y))continue;const A=[],P=[y];w.add(y);let I=0;for(;P.length;){const j=P.pop();A.push(j);for(const{other:ee,len:oe}of v.get(j)??[])I+=oe*.5,w.has(ee)||(w.add(ee),P.push(ee))}x++,I>b&&(b=I);const k=A.some(j=>m.has(j))?A.filter(j=>h[j]):A.filter(j=>h[j]||d[j]);if(S+=k.length,k.length===0){E++;const j=I>Gy||A.some(oe=>Math.hypot(r.x[oe],r.z[oe])>t-Hy);j?R++:C++;const ee=j?Dn+Eu:Dn;for(const oe of A)_.set(oe,e(r.x[oe],r.z[oe])+ee);continue}const H=new Map;A.forEach((j,ee)=>H.set(j,ee));const V=[],z=[];for(const j of k){z.push(e(r.x[j],r.z[j])+Dn);const ee=new Float64Array(A.length).fill(1/0);ee[H.get(j)]=0;const oe=new Uint8Array(A.length);for(;;){let Ee=-1,Ge=1/0;for(let Fe=0;Fe<A.length;Fe++)!oe[Fe]&&ee[Fe]<Ge&&(Ge=ee[Fe],Ee=Fe);if(Ee<0)break;oe[Ee]=1;for(const{other:Fe,len:Le}of v.get(A[Ee])??[]){const q=H.get(Fe);if(q===void 0)continue;const K=Ge+Le;K<ee[q]&&(ee[q]=K)}}V.push(ee)}for(let j=0;j<A.length;j++){let ee=0,oe=0,Ee=-1;for(let Fe=0;Fe<k.length;Fe++){const Le=V[Fe][j];if(!isFinite(Le))continue;if(Le<1e-6){Ee=Fe;break}const q=1/Le;ee+=q,oe+=q*z[Fe]}const Ge=A[j];_.set(Ge,Ee>=0?z[Ee]:ee>0?oe/ee:e(r.x[Ge],r.z[Ge])+Dn)}}for(let y=0;y<s.length;y++){const A=s[y],P=f[y],I=p[y];if(P.length<2){const U=P.length===1?_.get(P[0])??e(n[A].pts[0],n[A].pts[1])+Dn:e(n[A].pts[0],n[A].pts[1])+Dn;a[A]={s:Float32Array.from([0,Math.max(.001,Zw(n[A]))]),y:Float32Array.from([U,U])};continue}a[A]={s:Float32Array.from(I),y:Float32Array.from(P.map(U=>_.get(U)??e(r.x[U],r.z[U])+Dn))}}return{deck:a,stats:{bridgeWays:s.length,chains:x,abutments:S,orphanChains:E,orphanChainsLifted:R,orphanChainsDraped:C,longestChainM:b,buildMs:Date.now()-i}}}const $y=2,nh=1e-4;function qy(){return{xz:[],uv:[],idx:[]}}function Yy(n){return Math.max(0,n-1)*2}function jy(n,e,t){const i=t*.5;if(!(i>0))return 0;const a=[],s=[];for(let _=0;_+1<e.length;_+=2){const w=e[_],x=e[_+1],S=a.length-1;S>=0&&Math.abs(w-a[S])<nh&&Math.abs(x-s[S])<nh||(a.push(w),s.push(x))}const o=a.length;if(o<2)return 0;const r=o-1,l=new Float64Array(r),c=new Float64Array(r),h=new Float64Array(r),d=new Float64Array(r),f=new Float64Array(o);for(let _=0;_<r;_++){const w=a[_+1]-a[_],x=s[_+1]-s[_],S=Math.hypot(w,x);l[_]=w/S,c[_]=x/S,h[_]=c[_],d[_]=-l[_],f[_+1]=f[_]+S}const p=n.xz.length/2;let g=0;const v=(_,w,x,S,E)=>{n.xz.push(_+S,w+E),n.uv.push(x,0),n.xz.push(_-S,w-E),n.uv.push(x,1),g++};v(a[0],s[0],f[0],h[0]*i,d[0]*i);for(let _=1;_<o-1;_++){const w=_-1,x=_;let S=h[w]+h[x],E=d[w]+d[x];const R=Math.hypot(S,E),C=R>1e-9?2/R:1/0;C<=$y?(S/=R,E/=R,v(a[_],s[_],f[_],S*i*C,E*i*C)):(v(a[_],s[_],f[_],h[w]*i,d[w]*i),v(a[_],s[_],f[_],h[x]*i,d[x]*i))}const m=r-1;v(a[o-1],s[o-1],f[o-1],h[m]*i,d[m]*i);let u=0;for(let _=0;_+1<g;_++){const w=p+_*2,x=w+1,S=w+2,E=w+3;n.idx.push(w,S,x,x,S,E),u+=2}return u}const Zy=[62,58,52,46,40,34,34,44,28,46,0,0,0,0],Ky=.06,Jy=`
const float LAMP_SPACING[14] = float[14](${Zy.map(n=>n.toFixed(1)).join(", ")});
const float LAMP_POOL_V = ${Ky.toFixed(4)};

float lampSpacingM(float cls) {
  int i = int(clamp(cls + 0.5, 0.0, 13.0));
  return LAMP_SPACING[i];
}
`,ih=1500,Qy=[0,0,1,1,2,2,2,3,2,2,3,4,4,3],eb=5,tb=[4e4,4e4,4e4,4e4,3e4,25e3,25e3,12e3,15e3,25e3,12e3,8e3,12e3,1e4],nb=6;function ib(n,e){return(tb[n]??4e3)/e}function Ou(n,e,t){return e<=ib(n.cls,t)}function ab(n,e,t){for(const i of[1,1.3,1.8,2.5,3.5,5,8,13,22]){let a=0;for(let s=0;s<n.roads.length;s++){const o=n.roads[s];if((o.flags&Fa)===0&&Ou(o,e[s],i)&&(a+=Yy(o.pts.length/2),a>t))break}if(a<=t)return i}return 22}const sb=`
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
`,ob=`
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
${gi}
${Vs}
${yu}
${$s}
${Ws}
${Jy}

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
`;function rb(n){return{...n,...Xs(),...bu(),uCameraPos:{value:new F},uSH:{value:Zi([.2,.24,.3],.55,.45)},uEnv:{value:null},uEnvMaxLod:{value:6},uWetness:{value:0},uSnow:{value:0},uNight:{value:0},uNightGlow:{value:new Te(0,0,0)},uMoonDir:{value:new F(0,-1,0)},uMoonLight:{value:new Te(0,0,0)},uSunSurface:{value:.105},uFadeNear:{value:400},uFadeFar:{value:800},uSunDir:{value:new F(0,1,0)},uSunColor:{value:new Te(1,1,1)},uSunIntensity:{value:22},uMieG:{value:.76},uTurbidity:{value:1},uCamAltitude:{value:100},uMultiScatter:{value:.055}}}class lb{group=new qn;uniforms;stats;constructor(e,t,i,a,s){const o=performance.now();this.uniforms=rb(i);const r=new Float64Array(e.roads.length);for(let u=0;u<e.roads.length;u++)r[u]=Math.hypot(e.roads[u].cx,e.roads[u].cz);const l=ab(e,r,a.roadTriangleBudget),c=new Map;let h=0,d=0,f=0,p=0,g=0;for(let u=0;u<e.roads.length;u++){const _=e.roads[u];if((_.flags&Fa)!==0){d++;continue}if(!Ou(_,r[u],l)){f++;continue}let w=0;for(let U=2;U<_.pts.length;U+=2)w+=Math.hypot(_.pts[U]-_.pts[U-2],_.pts[U+1]-_.pts[U-1]);if(w<nb){p++;continue}const x=ul(_.cls,_.lanes,_.flags),S=(_.flags&ea)!==0,E=S?eb:Qy[_.cls]??2,R=`${E}:${Math.floor(_.cx/ih)},${Math.floor(_.cz/ih)}`;let C=c.get(R);C||(C={ribbon:qy(),y:[],info:[],rank:E},c.set(R,C));const b=C.ribbon.xz.length/2;if(jy(C.ribbon,_.pts,x)===0){p++;continue}S&&g++;const A=Yw(_.flags,_.layer),P=C.ribbon.xz.length/2-b,I=S?s[u]??null:null;for(let U=0;U<P;U++){const k=C.ribbon.xz[(b+U)*2],H=C.ribbon.xz[(b+U)*2+1];I?C.y.push(Vy(I,C.ribbon.uv[(b+U)*2])):C.y.push(t(k,H)+A),C.info.push(_.cls,_.surface,x,S?1:0)}h++}let v=0,m=0;for(const u of c.values()){if(!u.ribbon.idx.length)continue;const _=u.y.length,w=new Float32Array(_*3);for(let R=0;R<_;R++)w[R*3]=u.ribbon.xz[R*2],w[R*3+1]=u.y[R],w[R*3+2]=u.ribbon.xz[R*2+1];const x=new Tt;x.setAttribute("position",new dt(w,3)),x.setAttribute("uv",new qt(u.ribbon.uv,2)),x.setAttribute("info",new qt(u.info,4)),x.setIndex(_>65535?new zs(u.ribbon.idx,1):new Os(u.ribbon.idx,1)),x.computeVertexNormals(),x.computeBoundingSphere();const S=new nn({vertexShader:sb,fragmentShader:ob,uniforms:this.uniforms,glslVersion:Ot,side:tn,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),E=new xt(x,S);E.renderOrder=10+u.rank,this.group.add(E),v+=u.ribbon.idx.length/3,m++}this.stats={drawn:h,skippedTunnel:d,skippedFar:f,skippedShort:p,bridges:g,triangles:v,meshes:m,lod:l,buildMs:performance.now()-o}}dispose(){for(const e of this.group.children){const t=e;t.geometry?.dispose(),t.material?.dispose()}this.group.clear()}}function dl(n){return`${n.s.toFixed(7)},${n.w.toFixed(7)},${n.n.toFixed(7)},${n.e.toFixed(7)}`}class zu{counts=new Map;add(e,t=1){this.counts.set(e,(this.counts.get(e)??0)+t)}total(){let e=0;for(const t of this.counts.values())e+=t;return e}entries(){return[...this.counts.entries()].sort((e,t)=>t[1]-e[1])}}function Vo(n){if(n===void 0)return!1;const e=n.toLowerCase();return e!==""&&e!=="no"&&e!=="false"&&e!=="0"}const Bi=.25,ah=32e3,cb=12,hb=2,ub=900,sh=3.2,db=/^(-?\d+(?:\.\d+)?)\s*(?:'|ft|feet)\s*(\d+(?:\.\d+)?)\s*(?:"|''|in|inch(?:es)?)?$/,fb=/^(-?\d+(?:[.,]\d+)?)\s*([a-z'"]*)$/;function Wo(n){if(n===void 0)return null;const e=n.trim().toLowerCase();if(e==="")return null;const t=db.exec(e);if(t){const s=Number(t[1]),o=Number(t[2]);return!Number.isFinite(s)||!Number.isFinite(o)?null:(s*12+o)*.0254}const i=fb.exec(e);if(!i)return null;const a=Number(i[1].replace(",","."));if(!Number.isFinite(a))return null;switch(i[2]){case"":case"m":case"metre":case"metres":case"meter":case"meters":return a;case"'":case"ft":case"feet":case"foot":return a*.3048;default:return null}}function oh(n){if(n===void 0)return null;const e=/^-?\d+(?:[.,]\d+)?/.exec(n.trim());if(!e)return null;const t=Number(e[0].replace(",","."));return Number.isFinite(t)?t:null}const pb={house:6,detached:6,bungalow:6,semidetached_house:6,terrace:6,apartments:15,residential:10,dormitory:10,hotel:15,commercial:14,office:14,retail:8,supermarket:8,kiosk:8,industrial:10,warehouse:10,manufacture:10,church:20,cathedral:20,chapel:20,mosque:20,temple:20,synagogue:20,school:12,university:12,college:12,hospital:12,civic:12,public:12,government:12,garage:3,garages:3,shed:3,hut:3,carport:3,roof:3},mb=9,gb={house:Se.Residential,detached:Se.Residential,bungalow:Se.Residential,semidetached_house:Se.Residential,terrace:Se.Residential,apartments:Se.Residential,residential:Se.Residential,dormitory:Se.Residential,house_boat:Se.Residential,commercial:Se.Commercial,office:Se.Commercial,hotel:Se.Commercial,industrial:Se.Industrial,warehouse:Se.Industrial,manufacture:Se.Industrial,hangar:Se.Industrial,retail:Se.Retail,supermarket:Se.Retail,kiosk:Se.Retail,church:Se.Civic,cathedral:Se.Civic,chapel:Se.Civic,mosque:Se.Civic,temple:Se.Civic,synagogue:Se.Civic,shrine:Se.Civic,monastery:Se.Civic,school:Se.Civic,university:Se.Civic,college:Se.Civic,kindergarten:Se.Civic,hospital:Se.Civic,civic:Se.Civic,public:Se.Civic,government:Se.Civic,museum:Se.Civic,train_station:Se.Civic,transportation:Se.Civic,stadium:Se.Civic,tower:Se.Tower,skyscraper:Se.Tower};function vb(n,e){const t=(n.building??n["building:part"]??"").toLowerCase(),i=gb[t];return i!==void 0?e>=100&&i!==Se.Civic?Se.Tower:i:e>=100||n.man_made==="tower"||n.man_made==="communications_tower"?Se.Tower:n.office!==void 0?Se.Commercial:n.shop!==void 0?Se.Retail:n.amenity==="place_of_worship"||n.amenity!==void 0||n.tourism!==void 0?Se.Civic:n.industrial!==void 0?Se.Industrial:Se.Generic}const Bu={flat:Ye.Flat,gabled:Ye.Pitched,"half-hipped":Ye.Pitched,hipped:Ye.Pitched,"gabled-hipped":Ye.Pitched,gambrel:Ye.Pitched,mansard:Ye.Pitched,skillion:Ye.Pitched,double_saltbox:Ye.Pitched,saltbox:Ye.Pitched,round:Ye.Pitched,side_half_hipped:Ye.Pitched,dome:Ye.Dome,onion:Ye.Dome,cupola:Ye.Dome,pyramidal:Ye.Pyramid,"half-pyramidal":Ye.Pyramid,quadruple_saltbox:Ye.Pyramid,spherical:Ye.Dome,cone:Ye.Tapered,conical:Ye.Tapered,spire:Ye.Tapered,pyramidal_spire:Ye.Tapered,tented:Ye.Tapered},_b=15;function wb(n,e,t){const i=(n["roof:shape"]??n["building:roof:shape"]??"").toLowerCase(),a=Bu[i];if(a!==void 0)return a;const s=(n.building??"").toLowerCase();return s==="church"||s==="cathedral"||s==="chapel"?Ye.Tapered:s==="mosque"||s==="temple"||s==="synagogue"?Ye.Dome:e===Se.Residential&&s!=="apartments"&&t<=_b?Ye.Pitched:Ye.Flat}function xb(n){let e=Wo(n.height??n["building:height"]);if(e===null){const a=oh(n["building:levels"]??n.levels);if(a!==null){e=a*sh;const s=Wo(n["roof:height"]);s!==null&&(e+=s)}}if(e===null){const a=(n.building??n["building:part"]??"").toLowerCase();e=pb[a]??mb}let t=Wo(n.min_height??n["building:min_height"]);if(t===null){const a=oh(n["building:min_level"]??n.min_level);t=a!==null?a*sh:0}(!Number.isFinite(t)||t<0)&&(t=0);const i=Math.min(ub,Math.max(hb,e));return i<=t?null:{baseM:t,topM:i}}function rh(n,e){const t=[],i=[];for(const a of e){if(!Number.isFinite(a.lat)||!Number.isFinite(a.lon))continue;const s=n.toWorld(a.lat,a.lon),o=t.length;o>0&&Math.abs(s.x-t[o-1])<1e-6&&Math.abs(s.z-i[o-1])<1e-6||(t.push(s.x),i.push(s.z))}for(;t.length>1&&Math.abs(t[0]-t[t.length-1])<1e-6&&Math.abs(i[0]-i[i.length-1])<1e-6;)t.pop(),i.pop();return t.length<3?null:{x:t,z:i}}function yb(n){let e=0;const t=n.x.length;for(let i=0;i<t;i++){const a=i+1===t?0:i+1;e+=n.x[i]*n.z[a]-n.x[a]*n.z[i]}return e/2}function bb(n){n.x.reverse(),n.z.reverse()}function Mb(n){const e=dl(n);return`way["building"](${e});
 way["building:part"](${e});
 relation["building"](${e});`}function Sb(n){const e=n.tags??{};return n.type==="way"?e.building!==void 0||e["building:part"]!==void 0:n.type==="relation"?e.building!==void 0:!1}const Eb=9,Tb=45,Ab=400,Rb=25,Ui=70,ms=6;function Cb(n){const e=n.dx.length;let t=0,i=0;for(let a=0;a<e;a++){const s=a+1===e?0:a+1;t+=n.dx[a]*n.dz[s]-n.dx[s]*n.dz[a];const o=(n.dx[s]-n.dx[a])*Bi,r=(n.dz[s]-n.dz[a])*Bi,l=Math.hypot(o,r);l>i&&(i=l)}return{area:Math.abs(t/2)*Bi*Bi,longestEdge:i}}function Db(n,e){const t=[];for(let r=0;r<n.length;r++){const l=n[r];if(l.kind!==Se.Generic||l.topM>Eb)continue;const{area:c,longestEdge:h}=Cb(l);c<Tb||c>Ab||h>Rb||t.push(r)}const i=new Map,a=r=>`${Math.floor(r.cx/Ui)},${Math.floor(r.cz/Ui)}`;for(const r of t){const l=a(n[r]),c=i.get(l);c===void 0?i.set(l,[r]):c.push(r)}const s=Ui*Ui;let o=0;for(const r of t){const l=n[r],c=Math.floor(l.cx/Ui),h=Math.floor(l.cz/Ui);let d=0;for(let f=-1;f<=1&&d<ms;f++)for(let p=-1;p<=1&&d<ms;p++){const g=i.get(`${c+f},${h+p}`);if(g!==void 0)for(const v of g){if(v===r)continue;const m=n[v].cx-l.cx,u=n[v].cz-l.cz;if(m*m+u*u<=s&&++d>=ms)break}}d<ms||(l.kind=Se.Residential,e[r]||(l.roof=Ye.Pitched),o++)}return o}function Pb(n,e,t){const i=new zu,a=[],s=[];for(const o of n){const r=o.tags??{};if(r.building==="no"||r["building:part"]==="no"){i.add("tagged building=no");continue}const l=[];if(o.type==="way"){if(!o.geometry||o.geometry.length===0){i.add("way with no geometry");continue}const p=rh(e,o.geometry);if(p===null){i.add("ring under 3 distinct vertices");continue}l.push(p)}else if(o.type==="relation"){let p=!1;for(const g of o.members??[]){if(g.role!=="outer"||!g.geometry||g.geometry.length===0)continue;p=!0;const v=rh(e,g.geometry);if(v===null){i.add("ring under 3 distinct vertices");continue}l.push(v)}if(!p){i.add("relation with no outer geometry");continue}if(l.length===0)continue}else{i.add(`unhandled element type ${o.type}`);continue}const c=xb(r);if(c===null){i.add("top height not above base");continue}const h=vb(r,c.topM),d=wb(r,h,c.topM),f=Bu[(r["roof:shape"]??r["building:roof:shape"]??"").toLowerCase()]!==void 0;for(const p of l){const g=yb(p);if(Math.abs(g)<cb){i.add("footprint under 12 m^2");continue}g<0&&bb(p);const v=p.x.length;let m=0,u=0;for(let A=0;A<v;A++)m+=p.x[A],u+=p.z[A];const _=m/v,w=u/v;if(Math.hypot(_,w)>t){i.add("centroid outside radius");continue}if(v>65535){i.add("ring over 65535 vertices");continue}let x=1/0,S=-1/0,E=1/0,R=-1/0;for(let A=0;A<v;A++)p.x[A]<x&&(x=p.x[A]),p.x[A]>S&&(S=p.x[A]),p.z[A]<E&&(E=p.z[A]),p.z[A]>R&&(R=p.z[A]);if(uy(c.topM-c.baseM,Math.min(S-x,R-E))){i.add("mast-shaped: tall on a footprint too small to stand on");continue}const C=new Int16Array(v),b=new Int16Array(v);let y=!1;for(let A=0;A<v;A++){const P=Math.round((p.x[A]-_)/Bi),I=Math.round((p.z[A]-w)/Bi);if(Math.abs(P)>ah||Math.abs(I)>ah){y=!0;break}C[A]=P,b[A]=I}if(y){i.add("vertex offset overflows i16 (bad relation)");continue}a.push({cx:_,cz:w,baseM:c.baseM,topM:c.topM,kind:h,roof:d,dx:C,dz:b}),s.push(f)}}return Db(a,s),{buildings:a,skips:i}}var ki=(n=>(n[n.StreetLamp=0]="StreetLamp",n[n.TrafficSignal=1]="TrafficSignal",n[n.Bench=2]="Bench",n[n.WasteBasket=3]="WasteBasket",n[n.FireHydrant=4]="FireHydrant",n))(ki||{});ki.StreetLamp,ki.TrafficSignal,ki.Bench,ki.WasteBasket,ki.FireHydrant;const lh=.25,Lb=65535,Ib=15,ch=2*zw-100,hh={motorway:st.Motorway,trunk:st.Trunk,primary:st.Primary,secondary:st.Secondary,tertiary:st.Tertiary,residential:st.Residential,unclassified:st.Unclassified,road:st.Unclassified,service:st.Service,living_street:st.LivingStreet,busway:st.Busway,bus_guideway:st.Busway,pedestrian:st.Pedestrian,footway:st.Footway,path:st.Footway,corridor:st.Footway,cycleway:st.Cycleway,track:st.Track},Hu=new Set(["steps","platform","construction","proposed","raceway","bridleway"]),Ub={asphalt:at.Asphalt,chipseal:at.Asphalt,concrete:at.Concrete,"concrete:plates":at.Concrete,"concrete:lanes":at.Concrete,paved:at.Paved,paving_stones:at.Paved,metal:at.Paved,wood:at.Paved,bricks:at.Paved,sett:at.Cobblestone,cobblestone:at.Cobblestone,unhewn_cobblestone:at.Cobblestone,"cobblestone:flattened":at.Cobblestone,gravel:at.Gravel,fine_gravel:at.Gravel,compacted:at.Gravel,pebblestone:at.Gravel,ground:at.Dirt,dirt:at.Dirt,earth:at.Dirt,mud:at.Dirt,sand:at.Dirt,grass:at.Dirt,unpaved:at.Dirt};function Nb(n){const e=(n.highway??"").toLowerCase();if(e===""||Hu.has(e))return null;const t=hh[e];if(t!==void 0)return e==="path"&&n.bicycle==="designated"?{cls:st.Cycleway,link:!1}:{cls:t,link:!1};if(e.endsWith("_link")){const i=hh[e.slice(0,-5)];if(i!==void 0)return{cls:i,link:!0}}return null}function Fb(n){if(n===void 0)return 0;const e=/^\s*(\d+)/.exec(n);if(!e)return 0;const t=Number(e[1]);return!Number.isFinite(t)||t<=0?0:Math.min(Ib,Math.round(t))}function kb(n){if(n===void 0)return 0;const e=/^\s*(-?\d+)/.exec(n);if(!e)return 0;const t=Number(e[1]);return Number.isFinite(t)?Math.max(Hw,Math.min(Gw,Math.round(t))):0}function Ob(n){const e=(n.oneway??"").toLowerCase();if(e==="-1"||e==="reverse")return{oneway:!0,reversed:!0};if(e==="yes"||e==="true"||e==="1")return{oneway:!0,reversed:!1};const t=(n.junction??"").toLowerCase();return t==="roundabout"||t==="circular"?{oneway:!0,reversed:!1}:{oneway:!1,reversed:!1}}function zb(n,e){const t=[],i=[];for(const a of e){if(!Number.isFinite(a.lat)||!Number.isFinite(a.lon))continue;const s=n.toWorld(a.lat,a.lon),o=t.length;o>0&&Math.abs(s.x-t[o-1])<1e-6&&Math.abs(s.z-i[o-1])<1e-6||(t.push(s.x),i.push(s.z))}return t.length<2?null:{x:t,z:i}}function Bb(n,e){const t=e*e,i=[];let a=null;const s=(r,l,c)=>{const h=r.x.length;h>0&&Math.abs(l-r.x[h-1])<1e-6&&Math.abs(c-r.z[h-1])<1e-6||(r.x.push(l),r.z.push(c))},o=()=>{a!==null&&a.x.length>=2&&i.push(a),a=null};for(let r=0;r+1<n.x.length;r++){const l=n.x[r],c=n.z[r],h=n.x[r+1],d=n.z[r+1],f=l*l+c*c<=t,p=h*h+d*d<=t;if(f&&p){a===null?a={x:[l],z:[c]}:s(a,l,c),s(a,h,d);continue}const g=h-l,v=d-c,m=g*g+v*v,u=2*(l*g+c*v),_=l*l+c*c-t,w=u*u-4*m*_;if(m===0||w<=0){f||o();continue}const x=Math.sqrt(w),S=(-u-x)/(2*m),E=(-u+x)/(2*m),R=C=>[l+C*g,c+C*v];if(f&&!p){const C=S>=0&&S<=1?S:E,[b,y]=R(Math.min(1,Math.max(0,C)));a===null?a={x:[l],z:[c]}:s(a,l,c),s(a,b,y),o()}else if(!f&&p){const C=E>=0&&E<=1?E:S,[b,y]=R(Math.min(1,Math.max(0,C)));o(),a={x:[b],z:[y]},s(a,h,d)}else if(o(),S>0&&E<1){const[C,b]=R(S),[y,A]=R(E),P={x:[C],z:[b]};s(P,y,A),P.x.length>=2&&i.push(P)}}return o(),i}function Hb(n){const e=[];let t=[],i=[],a=1/0,s=-1/0,o=1/0,r=-1/0;const l=()=>{t.length>=2&&e.push({x:t,z:i})};for(let c=0;c<n.x.length;c++){const h=n.x[c],d=n.z[c],f=Math.min(a,h),p=Math.max(s,h),g=Math.min(o,d),v=Math.max(r,d);if(t.length>0&&(p-f>ch||v-g>ch||t.length>=Lb)){l();const u=t[t.length-1],_=i[i.length-1];t=[u],i=[_],a=s=u,o=r=_}t.push(h),i.push(d),a=Math.min(a,h),s=Math.max(s,h),o=Math.min(o,d),r=Math.max(r,d)}return l(),e}function Gb(n){return`way["highway"](${dl(n)});`}function Vb(n){return n.type==="way"&&(n.tags??{}).highway!==void 0}function Wb(n,e,t){const i=new zu,a=[];let s=0;for(const o of n){if(o.type!=="way"){i.add(`unhandled element type ${o.type}`);continue}const r=o.tags??{};if(Vo(r.area)){i.add("area=yes (a polygon, not a centreline)");continue}const l=Nb(r);if(l===null){const w=(r.highway??"").toLowerCase();i.add(Hu.has(w)?`excluded highway=${w}`:`unmapped highway=${w||"(none)"}`);continue}if(!o.geometry||o.geometry.length===0){i.add("way with no geometry");continue}const c=zb(e,o.geometry);if(c===null){i.add("under 2 distinct vertices");continue}const h=Bb(c,t);if(h.length===0){i.add("entirely outside the city radius");continue}const{oneway:d,reversed:f}=Ob(r);if(f)for(const w of h)w.x.reverse(),w.z.reverse();let p=0;d&&(p|=Bw),Vo(r.bridge)&&(p|=ea),Vo(r.tunnel)&&(p|=Fa),l.link&&(p|=Su);const g=(r.name??"").trim(),v=Fb(r.lanes),m=kb(r.layer),u=Ub[(r.surface??"").toLowerCase()]??at.Unknown,_=[];for(const w of h)_.push(...Hb(w));_.length>h.length&&(s+=_.length-h.length);for(const w of _){const x=w.x.length;let S=1/0,E=-1/0,R=1/0,C=-1/0;for(let U=0;U<x;U++)w.x[U]<S&&(S=w.x[U]),w.x[U]>E&&(E=w.x[U]),w.z[U]<R&&(R=w.z[U]),w.z[U]>C&&(C=w.z[U]);const b=(S+E)/2,y=(R+C)/2,A=new Int16Array(x),P=new Int16Array(x);let I=!1;for(let U=0;U<x;U++){const k=Math.round((w.x[U]-b)/lh),H=Math.round((w.z[U]-y)/lh);if(Math.abs(k)>32767||Math.abs(H)>32767){I=!0;break}A[U]=k,P[U]=H}if(I){i.add("BUG: offset overflows i16 after split");continue}a.push({cls:l.cls,name:g,lanes:v,flags:p,layer:m,surface:u,cx:b,cz:y,dx:A,dz:P})}}return{ways:a,skips:i,splits:s}}const Xb=20,uh={"natural=wood":.85,"landuse=forest":.85,"landuse=orchard":.7,"natural=scrub":.35,"leisure=nature_reserve":.35,"landuse=cemetery":.3,"leisure=park":.3,"leisure=garden":.25,"landuse=village_green":.2,"landuse=recreation_ground":.15,"leisure=golf_course":.12,"landuse=meadow":.05,"landuse=grass":.05},$b=["natural=water","natural=wetland","landuse=reservoir","landuse=basin","waterway=riverbank"],qb=1;function Yb(n){const e=dl(n);return`way["natural"~"^(wood|scrub|water|wetland)$"](${e});
 way["landuse"~"^(forest|orchard|meadow|grass|village_green|recreation_ground|cemetery|reservoir|basin)$"](${e});
 way["leisure"~"^(park|garden|golf_course|nature_reserve)$"](${e});
 way["waterway"="riverbank"](${e});
 relation["natural"~"^(wood|scrub|water|wetland)$"](${e});
 relation["landuse"~"^(forest|orchard|cemetery)$"](${e});
 relation["leisure"~"^(park|garden|nature_reserve)$"](${e});
 node["natural"="tree"](${e});`}function jb(n){for(const e of $b){const t=e.indexOf("=");if(n[e.slice(0,t)]===e.slice(t+1))return{canopy:0,water:!0}}for(const e of Object.keys(uh)){const t=e.indexOf("=");if(n[e.slice(0,t)]===e.slice(t+1))return{canopy:uh[e],water:!1}}return null}class Zb{rgba;n;extentM;cellM;constructor(e,t=Xb){this.extentM=e,this.cellM=t,this.n=Math.max(1,Math.ceil(e*2/t)),this.rgba=new Uint8Array(this.n*this.n*4)}index(e){return Math.floor((e+this.extentM)/this.cellM)}raise(e,t,i,a){if(e<0||t<0||e>=this.n||t>=this.n)return!1;const s=(t*this.n+e)*4+i,o=Math.round(Math.max(0,Math.min(1,a))*255);return this.rgba[s]>=o?!1:(this.rgba[s]=o,!0)}add(e,t){let i=0,a=0,s=0;for(const o of e){const r=o.tags??{};if(o.type==="node"){if(r.natural!=="tree"||!Number.isFinite(o.lat)||!Number.isFinite(o.lon))continue;const f=t.toWorld(o.lat,o.lon);this.raise(this.index(f.x),this.index(f.z),2,qb)&&s++,a++;continue}const l=jb(r);if(l===null)continue;const c=[];if(o.type==="way"&&o.geometry&&o.geometry.length>=3)c.push(o.geometry);else if(o.type==="relation")for(const f of o.members??[])f.role!=="outer"||!f.geometry||f.geometry.length<3||c.push(f.geometry);if(c.length===0)continue;i++;const h=l.water?0:2,d=l.water?1:l.canopy;for(const f of c)s+=this.fill(f,t,h,d)}return{polygons:i,nodes:a,cells:s}}fill(e,t,i,a){const s=e.length,o=new Float64Array(s),r=new Float64Array(s);let l=1/0,c=-1/0,h=1/0,d=-1/0;for(let u=0;u<s;u++){const _=t.toWorld(e[u].lat,e[u].lon);o[u]=_.x,r[u]=_.z,_.x<l&&(l=_.x),_.x>c&&(c=_.x),_.z<h&&(h=_.z),_.z>d&&(d=_.z)}if(!Number.isFinite(l)||!Number.isFinite(h))return 0;const f=Math.max(0,this.index(l)),p=Math.min(this.n-1,this.index(c)),g=Math.max(0,this.index(h)),v=Math.min(this.n-1,this.index(d));if(p<f||v<g)return 0;let m=0;for(let u=g;u<=v;u++){const _=-this.extentM+(u+.5)*this.cellM;for(let w=f;w<=p;w++){const x=-this.extentM+(w+.5)*this.cellM;Kb(o,r,x,_)&&this.raise(w,u,i,a)&&m++}}if(m===0){let u=0,_=0;for(let w=0;w<s;w++)u+=o[w],_+=r[w];this.raise(this.index(u/s),this.index(_/s),i,a)&&m++}return m}}function Kb(n,e,t,i){let a=!1;const s=n.length;for(let o=0,r=s-1;o<s;r=o,o++){const l=e[o],c=e[r];if(l>i!=c>i){const h=(i-l)/(c-l);t<n[o]+h*(n[r]-n[o])&&(a=!a)}}return a}const Jb=14,da=2e4;function Qb(n,e=180){return`[out:json][timeout:${e}];
(${Mb(n)}
 ${Gb(n)}
 ${Yb(n)});
out geom;`}function eM(n){const e=Ls(n);return{s:e.south,w:e.west,n:e.north,e:e.east}}function tM(n,e){if(e.length===0)return!1;const t=Ls(n),i=[{lat:t.north,lon:t.west},{lat:t.north,lon:t.east},{lat:t.south,lon:t.west},{lat:t.south,lon:t.east}];for(const a of e){let s=!0;for(const o of i)if(Gr({lat:a.lat,lon:a.lon},o)>a.radiusM){s=!1;break}if(s)return!0}return!1}function nM(n,e,t,i,a=[],s=Jb){const o=n.toLatLon(e,t),r=Mw(o.lat,o.lon,s),l=Ls(r),c=Math.max(1,Gr({lat:l.north,lon:l.west},{lat:l.north,lon:l.east})),h=Math.max(1,Gr({lat:l.north,lon:l.west},{lat:l.south,lon:l.west})),d=Math.ceil(i/c)+1,f=Math.ceil(i/h)+1,p=[],g=2**s;for(let v=-f;v<=f;v++)for(let m=-d;m<=d;m++){const u=r.y+v;if(u<0||u>=g)continue;const _={z:s,x:((r.x+m)%g+g)%g,y:u},w=Ls(_),x=n.toWorld(w.north,w.west),S=n.toWorld(w.south,w.east),E=Math.min(x.x,S.x),R=Math.max(x.x,S.x),C=Math.min(x.z,S.z),b=Math.max(x.z,S.z),y=Math.max(0,Math.max(E-e,e-R)),A=Math.max(0,Math.max(C-t,t-b)),P=Math.hypot(y,A);P>i||tM(_,a)||p.push({tile:_,key:Sw(_),bbox:eM(_),distM:P})}return p.sort((v,m)=>v.distM-m.distM),p}const iM=4e3,Xo=24,aM=250,$o=8e3;class sM{overpass;stats={tiles:0,empty:0,failed:0,buildings:0,roads:0,vegPolygons:0,vegNodes:0,triangles:0,fetching:!1};opts;state=new Map;seen=new Set;queue=[];scannedX=1/0;scannedZ=1/0;busy=!1;disposed=!1;groups=[];radius;tileBudget;constructor(e){this.opts=e,this.overpass=e.overpass,this.radius=e.wantRadiusM??iM,this.tileBudget={...e.budget,buildingTriangleBudget:Math.round(e.budget.buildingTriangleBudget/Xo),roadTriangleBudget:Math.round(e.budget.roadTriangleBudget/Xo)}}update(e,t){this.disposed||(Math.hypot(e-this.scannedX,t-this.scannedZ)>aM&&(this.scannedX=e,this.scannedZ=t,this.rescan(e,t)),this.busy||this.pump())}rescan(e,t){const i=nM(this.opts.origin,e,t,this.radius,this.opts.packs);this.queue=[];for(const a of i){const s=this.state.get(a.key);s!==void 0&&s!=="wanted"||(this.state.set(a.key,"wanted"),this.queue.push({key:a.key,bbox:a.bbox}))}}async pump(){if(this.stats.tiles>=Xo)return;const e=this.queue.shift();if(e){this.busy=!0,this.stats.fetching=!0,this.state.set(e.key,"loading");try{const t=await this.overpass.json(Qb(e.bbox));if(this.disposed)return;if(t===null){this.state.set(e.key,"failed"),this.stats.failed++;return}const i=t.elements??[],a=this.build(e.key,i);this.state.set(e.key,a?"done":"empty"),a||this.stats.empty++}catch(t){console.warn(`[skycast] live tile ${e.key} failed to build:`,t),this.state.set(e.key,"failed"),this.stats.failed++}finally{this.busy=!1,this.stats.fetching=!1,this.queue.length>0&&!this.disposed&&this.pump()}}}build(e,t){const{origin:i,scene:a,heightAt:s,shadow:o,vegetation:r,footprints:l,roadBlockers:c}=this.opts,h=[];for(const v of t){const m=`${v.type}/${v.id}`;this.seen.has(m)||(this.seen.add(m),h.push(v))}let d=!1;const f=h.filter(Sb);let p=[];if(f.length>0){const v=Pb(f,i,da);if(p=ry(v.buildings),p.length>0){const m={lat0:i.lat,lon0:i.lon,radiusM:da,buildings:p},u=new zy(m,s,o,this.tileBudget);a.add(u.group),this.groups.push(u),this.opts.buildingUniforms.push(u.uniforms),this.stats.buildings+=p.length,this.stats.triangles+=u.stats.triangles,l.add(p),this.opts.onBuildings?.(p),d=!0}}const g=h.filter(Vb);if(g.length>0){const v=Wb(g,i,da),m=jw(v.ways);if(m.length>0){const u={lat0:i.lat,lon0:i.lon,radiusM:da,roads:m},_=Xy(m,s,da).deck,w=new lb(u,s,o,this.tileBudget,_);a.add(w.group),this.groups.push(w),this.opts.roadUniforms.push(w.uniforms),this.stats.roads+=m.length,this.stats.triangles+=w.stats.triangles,c.add(new Du(m,xx)),this.opts.onRoads?.(m),d=!0}}if(r){const v=r.add(h,i);this.stats.vegPolygons+=v.polygons,this.stats.vegNodes+=v.nodes,v.cells>0&&(this.opts.onVegetation(),d=!0)}else p.length>0&&this.opts.onVegetation();return d?this.stats.tiles++:console.info(`[skycast] live tile ${e}: nothing mapped here`),d}set wantRadiusM(e){e!==this.radius&&(this.radius=e,this.scannedX=1/0)}get wantRadiusM(){return this.radius}dispose(){this.disposed=!0,this.queue=[];for(const e of this.groups)this.opts.scene.remove(e.group),e.dispose();this.groups.length=0}get pending(){return this.queue.length}latency(){const e=[...this.overpass.stats.latencyMs].sort((t,i)=>t-i);return e.length===0?{n:0,median:0,max:0}:{n:e.length,median:e[e.length>>1],max:e[e.length-1]}}}const dh=["https://overpass-api.de/api/interpreter"],oM={minGapMs:2e3,backoffBaseMs:4e3,timeoutMs:6e4},rM=3,lM=4,qo=60;class cM{stats={cacheHits:0,networkHits:0,failures:0,deduped:0,refused:0,latencyMs:[],broken:!1};endpoints;timing;inflight=new Map;queue=Promise.resolve();lastRequestAt=0;consecutiveFailures=0;spent=0;holdUntil=0;constructor(e=dh,t={}){this.endpoints=e.length>0?e:dh,this.timing={...oM,...t}}url(e,t=this.endpoints[0]){return`${t}?data=${encodeURIComponent(e)}`}async cached(e){return await Br(this.url(e),Rc)!==null}async json(e){const t=this.url(e),i=this.inflight.get(t);if(i)return this.stats.deduped++,await i;const a=this.run(t).finally(()=>this.inflight.delete(t));return this.inflight.set(t,a),a}async run(e){const t=await Br(e,Rc);if(t)return this.stats.cacheHits++,fh(t);if(this.stats.broken)return this.stats.refused++,null;if(this.spent>=qo)return this.stats.refused++,this.spent===qo&&(this.spent++,console.warn(`[skycast] live OSM: session budget of ${qo} Overpass requests spent; no more will be made. Everything already fetched stays cached.`)),null;this.spent++;for(let i=0;i<rM;i++){const s=this.endpoints[i%this.endpoints.length]+e.slice(e.indexOf("?data=")),o=await this.send(s);if(o.body){const l=fh(o.body);if(l!==null)return this.consecutiveFailures=0,pu(e,o.body),l;console.warn("[skycast] live OSM: answer was not JSON (instance busy?)"),this.holdUntil=Math.max(this.holdUntil,Date.now()+this.timing.backoffBaseMs*2**i);continue}if(o.fatal)break;const r=Math.max(o.retryAfterMs,this.timing.backoffBaseMs*2**i);this.holdUntil=Math.max(this.holdUntil,Date.now()+r)}return this.stats.failures++,this.consecutiveFailures++,this.consecutiveFailures>=lM&&(this.stats.broken=!0,console.warn(`[skycast] live OSM: ${this.consecutiveFailures} Overpass requests failed in a row; not asking again this session.`)),null}send(e){const t=this.queue.then(async()=>{const i=Math.max(this.lastRequestAt+this.timing.minGapMs-Date.now(),this.holdUntil-Date.now());i>0&&await hM(i);const a=performance.now();try{const s=await fetch(e,{mode:"cors",credentials:"omit",signal:AbortSignal.timeout(this.timing.timeoutMs)});if(this.lastRequestAt=Date.now(),s.ok){const c=await s.arrayBuffer();return this.stats.networkHits++,this.stats.latencyMs.push(performance.now()-a),{body:c,retryAfterMs:0,fatal:!1}}const o=Number(s.headers.get("Retry-After")),r=Number.isFinite(o)&&o>0?o*1e3:0,l=s.status===400;return console.warn(`[skycast] live OSM: ${s.status} ${s.statusText}`),{body:null,retryAfterMs:r,fatal:l}}catch(s){return this.lastRequestAt=Date.now(),console.warn("[skycast] live OSM: request failed:",s),{body:null,retryAfterMs:0,fatal:!1}}});return this.queue=t.then(()=>{},()=>{}),t}}function fh(n){try{return JSON.parse(new TextDecoder().decode(n))}catch{return null}}function hM(n){return new Promise(e=>setTimeout(e,n))}const ph={skyline:4500,street:2e3},uM=40,dM=1.5;function fM(n){return(n.flags&(ea|Fa))!==0?!1:n.cls>=st.Primary&&n.cls<=st.Pedestrian&&n.cls!==st.Busway}class pM{shadowCasters=[];status={ready:!1,buildings:0,idle:!1,note:""};scene;budget;shadow;overpass;world=null;generation=0;urban=zc();roadMask=Kw();land=ex();buildingUniforms=[];roadUniforms=[];constructor(e,t,i,a){this.scene=e,this.budget=t,this.shadow=i,this.overpass=new cM(a?[a]:void 0)}heightAt=(e,t)=>this.world?this.world.terrain.heightAt(e,t):0;async setOrigin(e,t){const i=++this.generation;this.dispose();const a=t??(()=>{});let s=0;const o=45,r=()=>a(.05+.4*Math.min(1,++s/o),"loading terrain");a(.05,"loading terrain");const l=await Promise.all([kc(Ss(e.lat,e.lon,22e3),12,r),kc(Ss(e.lat,e.lon,8e4),9,r)]);if(i!==this.generation)return;const c=[],h=this.budget.rings;for(let _=0;_<h.length;_++)if(a(.45+.45*(_/h.length),"loading imagery"),c.push(await Mu(Ss(e.lat,e.lon,h[_].extent*1.05),h[_].imageryZoom)),i!==this.generation)return;a(.92,"building ground");const d=new Cw(e,l,c,this.shadow);this.scene.add(d.group);for(const _ of d.uniforms)_.uLandNear.value=this.land.near,_.uLandFar.value=this.land.far,_.uLandNearExtent.value=this.land.nearExtent,_.uLandFarExtent.value=this.land.farExtent,_.uHasLand.value=0,_.uRoadMask.value=this.roadMask.texture,_.uRoadMaskExtent.value=this.roadMask.extent,_.uHasRoadMask.value=0;const f=new kw(e,d,h[0]),p=new Cx([],$o),g=new Px,v=new Zb($o),m=new Xx({mask:{rgba:v.rgba,n:v.n,extentM:v.extentM},heightAt:d.heightAt,roads:g,footprints:p},this.shadow,this.budget.tier==="reduced");m.update(0,0),this.scene.add(m.group),this.buildingUniforms=[],this.roadUniforms=[];const u={origin:e,terrain:d,detailRing:f,foliage:m,footprints:p,spawnRoads:[],liveBuildings:[],urbanDirty:!1,urbanBuiltAt:0,live:null};u.live=new sM({origin:e,scene:this.scene,heightAt:d.heightAt,shadow:this.shadow,budget:this.budget,packs:[],vegetation:v,footprints:p,roadBlockers:g,buildingUniforms:this.buildingUniforms,roadUniforms:this.roadUniforms,onVegetation:()=>m.invalidate(),onBuildings:_=>{for(const w of _)u.liveBuildings.push(w);u.urbanDirty=!0},onRoads:_=>{const w=_.filter(fM);w.length&&u.spawnRoads.push(new Du(w,x=>ul(x.cls,x.lanes,x.flags)*.5))},overpass:this.overpass,wantRadiusM:ph.skyline}),this.world=u,this.shadowCasters.length=0,this.shadowCasters.push(m.depthScene),this.status.ready=!0,a(1,"ready")}update(e,t){const i=this.world;if(!i)return;i.live.wantRadiusM=ph[t.mode],i.live.update(t.x,t.z);const a=e.position;a.y-i.terrain.heightAt(a.x,a.z)<uM&&i.detailRing.follow(a.x,a.z,0,0),i.foliage.update(a.x,a.z);const s=i.live.stats;this.status.buildings=s.buildings,this.status.idle=!s.fetching&&i.live.pending===0&&!i.detailRing.stats.pending,this.status.note=this.status.idle?"":`streaming city ${s.tiles} tile${s.tiles===1?"":"s"}, ${s.buildings.toLocaleString()} buildings`}get drapePending(){return this.world?this.world.detailRing.stats.pending:!0}get liveStats(){return this.world?this.world.live.stats:null}prepareFrame(e){const t=this.world;if(!t)return;const{camera:i,light:a,wx:s,skyProbe:o,elapsed:r}=e,l=i.position.y,c=performance.now();if(t.urbanDirty&&c-t.urbanBuiltAt>dM*1e3){t.urbanDirty=!1,t.urbanBuiltAt=c;const g=Ow({lat0:t.origin.lat,lon0:t.origin.lon,radiusM:$o,buildings:t.liveBuildings});this.urban.texture.dispose(),this.urban=g}const h=this.urban,d=(s.windDir+180)*(Math.PI/180);for(const g of t.terrain.uniforms)g.uSH.value=o.sh,g.uCameraPos.value.copy(i.position),g.uSunDir.value.copy(a.sunDir),g.uSunColor.value.copy(a.sunColor),g.uSunIntensity.value=a.sunIntensity,g.uAmbient.value.copy(a.ambient),g.uWetness.value=a.wetness,g.uSnow.value=a.snow,g.uNight.value=a.night,g.uNightGlow.value.copy(a.nightGlow),g.uMoonDir.value.copy(a.moonDir),g.uMoonLight.value.copy(a.moonLight),g.uUrban.value=h.texture,g.uUrbanExtent.value=h.extent,g.uMieG.value=a.mieG,g.uTurbidity.value=a.turbidity,g.uCamAltitude.value=l,g.uExposure.value=a.exposure,g.uTime.value=r,g.uWind.value.set(Math.sin(d)*s.windSpeed,-Math.cos(d)*s.windSpeed);const f=Jx(e.solarHour);for(const g of this.buildingUniforms)g.uCameraPos.value.copy(i.position),g.uSH.value=o.sh,g.uEnv.value=o.texture,g.uEnvMaxLod.value=o.maxLod,g.uSunDir.value.copy(a.sunDir),g.uSunColor.value.copy(a.sunColor),g.uSunIntensity.value=a.sunIntensity,g.uNight.value=a.night,g.uNightGlow.value.copy(a.nightGlow),g.uMoonDir.value.copy(a.moonDir),g.uMoonLight.value.copy(a.moonLight),g.uWetness.value=a.wetness,g.uMieG.value=a.mieG,g.uTurbidity.value=a.turbidity,g.uCamAltitude.value=l,g.uExposure.value=a.exposure,g.uHourFactor.value.set(f.residential,f.office,f.other),g.uUrban.value=h.texture,g.uUrbanExtent.value=h.extent;for(const g of this.roadUniforms)g.uCameraPos.value.copy(i.position),g.uSH.value=o.sh,g.uEnv.value=o.texture,g.uEnvMaxLod.value=o.maxLod,g.uSunDir.value.copy(a.sunDir),g.uSunColor.value.copy(a.sunColor),g.uSunIntensity.value=a.sunIntensity,g.uWetness.value=a.wetness,g.uUrban.value=h.texture,g.uUrbanExtent.value=h.extent,g.uSnow.value=a.snow,g.uNight.value=a.night,g.uNightGlow.value.copy(a.nightGlow),g.uMoonDir.value.copy(a.moonDir),g.uMoonLight.value.copy(a.moonLight),g.uMieG.value=a.mieG,g.uTurbidity.value=a.turbidity,g.uCamAltitude.value=l;t.foliage.setWind(s.windSpeed,s.windDir);const p=t.foliage.uniforms;p.uTime.value=r,p.uCameraPos.value.copy(i.position),p.uSH.value=o.sh,p.uSunDir.value.copy(a.sunDir),p.uSunColor.value.copy(a.sunColor),p.uSunIntensity.value=a.sunIntensity,p.uNight.value=a.night,p.uNightGlow.value.copy(a.nightGlow),p.uMoonDir.value.copy(a.moonDir),p.uMoonLight.value.copy(a.moonLight),p.uMieG.value=a.mieG,p.uTurbidity.value=a.turbidity,p.uCamAltitude.value=l}setAo(e,t){const i=this.world;if(i){for(const a of i.terrain.uniforms)e.apply(a,t);for(const a of this.buildingUniforms)e.apply(a,t);for(const a of this.roadUniforms)e.apply(a,t);e.apply(i.foliage.uniforms,t)}}streetSpawn(e,t,i){const a=this.world;if(!a)return null;let s=null,o=1/0;for(const r of a.spawnRoads){const l=r.nearestSegment(e,t,i);if(!l||l.distanceM>=o)continue;o=l.distanceM;const c=Math.atan2(l.dirX,-l.dirZ)*180/Math.PI;s={x:l.x,z:l.z,headingDeg:(c+360)%360}}return s}blocked(e,t){return this.world?this.world.footprints.occupied(e,t):!1}dispose(){const e=this.world;e&&(this.world=null,this.status.ready=!1,this.status.buildings=0,this.status.idle=!1,e.live.dispose(),e.detailRing.dispose(),this.scene.remove(e.terrain.group),e.terrain.dispose(),this.scene.remove(e.foliage.group),e.foliage.dispose(),this.shadowCasters.length=0,this.buildingUniforms=[],this.roadUniforms=[],this.urban.texture.dispose(),this.urban=zc())}}const mh=6e4,Jt=36e5,Yo=-.833,gh=6,vh=-4,mM=22,gM=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function _h(n,e){const t=new Date(n+e*1e3);return{weekday:gM[t.getUTCDay()],hour:t.getUTCHours()+t.getUTCMinutes()/60}}function jo(n,e,t,i,a){const s=r=>Ki(new Date(r),n,e).sun.altitude-a;let o=s(t);for(let r=0;r<20&&i-t>5e3;r++){const l=(t+i)/2,c=s(l);Math.sign(c)===Math.sign(o)?(t=l,o=c):i=l}return(t+i)/2}function vM(n,e,t,i,a){const s=t+i*Jt,o=t-24*Jt,r=s+24*Jt,l=10*mh,c=[],h=[],d=[],f=[];let p=o,g=Ki(new Date(p),n,e).sun.altitude,v=!1;for(let _=o+l;_<=r;_+=l){const w=Ki(new Date(_),n,e).sun.altitude,x=w>g,S=E=>(g-E)*(w-E)<0;if(S(Yo)){const E=jo(n,e,p,_,Yo);x?(h.push(E),c.push({t:E,kind:"Sunrise"})):d.push(E)}!x&&S(gh)&&c.push({t:jo(n,e,p,_,gh),kind:"Golden hour"}),!x&&S(vh)&&c.push({t:jo(n,e,p,_,vh),kind:"Dusk"}),v&&!x&&g>Yo&&f.push(p),v=x,g=w,p=_}for(const _ of f){c.push({t:_,kind:"Noon"});const w=h.filter(S=>S<_&&_-S<20*Jt).pop(),x=d.find(S=>S>_&&S-_<20*Jt);w!==void 0&&c.push({t:w+.4*(_-w),kind:"Mid-morning"}),x!==void 0&&c.push({t:_+.65*(x-_),kind:"Late afternoon"})}const m=a*1e3;for(let _=Math.floor((o+m)/Jt)*Jt-m;_<=r;_+=Jt)Math.abs(_h(_,a).hour-mM)<1e-6&&c.push({t:_,kind:"Night"});let u=c.filter(_=>_.t>=t&&_.t<s);if(u.length===0){const _=Math.ceil(t/(3*Jt))*3*Jt;for(let w=_;w<s;w+=3*Jt)u.push({t:w,kind:""})}return u.sort((_,w)=>_.t-w.t),u=u.filter((_,w)=>w===0||_.t-u[w-1].t>15*mh),u.map(_=>{const w=_h(_.t,a),x=String(Math.floor(w.hour)).padStart(2,"0"),S=_.kind||`${x}:00`;return{t:_.t,kind:S,label:`${S}, ${w.weekday}`}})}function Gu(n){const e=Math.max(0,Math.min(1,n));return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}const Vu=[{label:"15 min/s",secPerSec:900},{label:"1 h/s",secPerSec:3600},{label:"3 h/s",secPerSec:3*3600}],wh=4,_M=5,wM=36;class xM{mode="paused";live=!0;t;rateIndex=1;min=-1/0;max=1/0;moments=[];tourIndex=0;phase="move";phaseS=0;moveFrom=0;momentSource=null;constructor(e){this.t=e}get label(){return this.mode!=="tour"||this.moments.length===0?null:this.moments[this.tourIndex].label}setBounds(e,t){this.min=e,this.max=t,this.t=this.clamp(this.t)}startTour(e,t){this.momentSource=e,this.moments=e(t).filter(i=>i.t>=this.min&&i.t<=this.max),this.mode=this.moments.length>0?"tour":"paused",this.live=!1,this.tourIndex=0,this.phase="move",this.phaseS=0,this.moveFrom=this.t}play(){this.mode="continuous",this.live=!1}pause(){this.mode="paused",this.live=!1}scrubTo(e){this.mode="paused",this.live=!1,this.t=this.clamp(e)}stepHours(e){this.scrubTo(this.t+e*Jt)}goLive(e){this.mode="paused",this.live=!0,this.t=this.clamp(e)}step(e,t){if(this.live){this.t=this.clamp(t);return}if(this.mode==="continuous"){this.t+=e*Vu[this.rateIndex].secPerSec*1e3,this.t>this.max&&(this.t=this.clamp(t));return}if(this.mode!=="tour"||this.moments.length===0)return;this.phaseS+=e;const i=this.moments[this.tourIndex].t;if(this.phase==="move"){const a=Gu(this.phaseS/wh);this.t=this.moveFrom+(i-this.moveFrom)*a,this.phaseS>=wh&&(this.t=i,this.phase="dwell",this.phaseS=0);return}if(this.phaseS>=_M){if(this.tourIndex++,this.tourIndex>=this.moments.length&&(this.tourIndex=0,this.momentSource)){const a=this.momentSource(t).filter(s=>s.t>=this.min&&s.t<=this.max);a.length>0&&(this.moments=a)}this.phase="move",this.phaseS=0,this.moveFrom=this.t}}clamp(e){return Math.max(this.min,Math.min(this.max,e))}}const fa=Math.PI/180,yM=new F(0,1,0),bM=new ot,MM=new wn,SM=1.7,EM=1.8,TM=5,AM=2,RM=8,CM=2.5,DM=250,PM=3e3,LM=350,IM=7e3,xh=55,UM=70,NM=1,FM=2,kM=-40,OM=70;class zM{mode="skyline";frozen=!1;target=new F;hdg=20;el=24;dist=2100;sx=0;sz=0;yaw=0;pitch=2;spawnProvisional=!1;hasStreet=!1;tween=null;idleS=0;keys=new Set;pointers=new Map;pinchDist=0;camera;ground;tmpPose={pos:new F,quat:new Kn,fov:xh};constructor(e,t,i){this.camera=t,this.ground=i,this.armPointer(e),addEventListener("keydown",a=>{Wu(a)||this.keys.add(a.code)}),addEventListener("keyup",a=>this.keys.delete(a.code)),addEventListener("blur",()=>this.keys.clear())}resetPlace(){this.target.set(0,0,0),this.hasStreet=!1,this.tween=null,this.idleS=0}setMode(e,t=!1){if(e===this.mode&&!t)return;const i=e==="street";i&&!this.hasStreet&&this.spawnStreet(),this.mode=e,this.tween=t?null:{from:{pos:this.camera.position.clone(),quat:this.camera.quaternion.clone(),fov:this.camera.fov},t:0,down:i},this.idleS=0}focus(){return this.mode==="street"?{x:this.sx,z:this.sz,mode:"street"}:{x:this.target.x,z:this.target.z,mode:"skyline"}}get tweening(){return this.tween!==null}update(e){this.idleS+=e;const t=this.ground.heightAt(this.target.x,this.target.z);this.target.y=t,this.mode==="street"?(this.spawnProvisional&&this.spawnStreet(),this.walk(e)):!this.frozen&&this.idleS>RM&&!this.tween&&(this.hdg=(this.hdg+CM*e)%360);const i=this.mode==="street"?this.streetPose(this.tmpPose):this.orbitPose(this.tmpPose),a=this.camera;if(this.tween){this.tween.t+=e/AM;const o=Gu(this.tween.t),r=this.tween.down?o*o:1-(1-o)*(1-o),l=this.tween.from;a.position.set(l.pos.x+(i.pos.x-l.pos.x)*o,l.pos.y+(i.pos.y-l.pos.y)*r,l.pos.z+(i.pos.z-l.pos.z)*o),a.quaternion.copy(l.quat).slerp(i.quat,o),a.fov=l.fov+(i.fov-l.fov)*o,this.tween.t>=1&&(this.tween=null)}else a.position.copy(i.pos),a.quaternion.copy(i.quat),a.fov=i.fov;a.up.set(0,1,0);const s=a.position.y-this.ground.heightAt(a.position.x,a.position.z);a.near=s<30?NM:FM,a.updateProjectionMatrix(),a.updateMatrixWorld()}orbitPose(e){const t=this.el*fa,i=this.hdg*fa,a=Math.cos(t)*this.dist,s=this.target.x-Math.sin(i)*a,o=this.target.z+Math.cos(i)*a;let r=this.target.y+Math.sin(t)*this.dist;const l=Math.max(this.ground.heightAt(s,o),this.target.y);return r=Math.min(Math.max(r,l+DM),l+PM),e.pos.set(s,r,o),e.quat.setFromRotationMatrix(bM.lookAt(e.pos,this.target,yM)),e.fov=xh,e}streetPose(e){return e.pos.set(this.sx,this.ground.heightAt(this.sx,this.sz)+SM,this.sz),e.quat.setFromEuler(MM.set(this.pitch*fa,-this.yaw*fa,0,"YXZ")),e.fov=UM,e}spawnStreet(){const e=this.ground.streetSpawn(this.target.x,this.target.z,600);if(e){this.sx=e.x,this.sz=e.z;const t=Math.abs(BM(e.headingDeg,this.hdg))>90;this.yaw=t?(e.headingDeg+180)%360:e.headingDeg,this.spawnProvisional=!1}else this.hasStreet||(this.sx=this.target.x,this.sz=this.target.z,this.yaw=this.hdg,this.spawnProvisional=!0);this.pitch=2,this.hasStreet=!0}walk(e){if(this.frozen)return;const t=this.keys;let i=0,a=0;if((t.has("KeyW")||t.has("ArrowUp"))&&(i+=1),(t.has("KeyS")||t.has("ArrowDown"))&&(i-=1),t.has("KeyD")&&(a+=1),t.has("KeyA")&&(a-=1),!i&&!a)return;const s=EM*(t.has("ShiftLeft")||t.has("ShiftRight")?TM:1),o=this.yaw*fa,r=Math.hypot(i,a),l=(Math.sin(o)*i+Math.cos(o)*a)/r*s*e,c=(-Math.cos(o)*i+Math.sin(o)*a)/r*s*e,h=this.ground,d=h.blocked(this.sx,this.sz);(d||!h.blocked(this.sx+l,this.sz))&&(this.sx+=l),(d||!h.blocked(this.sx,this.sz+c))&&(this.sz+=c),this.spawnProvisional=!1,this.idleS=0}armPointer(e){e.style.touchAction="none",e.addEventListener("pointerdown",i=>{e.setPointerCapture(i.pointerId),this.pointers.set(i.pointerId,{x:i.clientX,y:i.clientY}),this.pinchDist=this.currentPinch(),this.idleS=0});const t=i=>{this.pointers.delete(i.pointerId),this.pinchDist=this.currentPinch()};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t),e.addEventListener("pointermove",i=>{const a=this.pointers.get(i.pointerId);if(!a||this.frozen)return;const s=i.clientX-a.x,o=i.clientY-a.y;if(a.x=i.clientX,a.y=i.clientY,this.idleS=0,this.pointers.size>=2){const r=this.currentPinch();this.pinchDist>0&&r>0&&this.mode==="skyline"&&this.zoom(this.pinchDist/r),this.pinchDist=r;return}this.tween||(this.mode==="skyline"?(this.hdg=(this.hdg-s*.3+360)%360,this.el=Zo(this.el+o*.2,8,80)):(this.yaw=(this.yaw-s*.15+360)%360,this.pitch=Zo(this.pitch+o*.15,kM,OM)))}),e.addEventListener("wheel",i=>{i.preventDefault(),this.idleS=0,this.mode==="skyline"&&!this.frozen&&this.zoom(Math.exp(i.deltaY*.0012))},{passive:!1})}zoom(e){this.dist=Zo(this.dist*e,LM,IM)}currentPinch(){if(this.pointers.size<2)return 0;const[e,t]=[...this.pointers.values()];return Math.hypot(e.x-t.x,e.y-t.y)}}function Zo(n,e,t){return Math.max(e,Math.min(t,n))}function BM(n,e){return(n-e+540)%360-180}function Wu(n){const e=n.target;return!!e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)}class yh{constructor(e){this.timezone=e;const t={timeZone:e,weekday:"short",hour:"numeric",minute:"2-digit",hour12:!0};try{this.fmt=new Intl.DateTimeFormat("en-US",t)}catch{this.fmt=new Intl.DateTimeFormat("en-US",{...t,timeZone:"UTC"})}try{this.zoneFmt=new Intl.DateTimeFormat("en-US",{timeZone:e,timeZoneName:"short"})}catch{this.zoneFmt=new Intl.DateTimeFormat("en-US",{timeZone:"UTC",timeZoneName:"short"})}}fmt;zoneFmt;dateFmt=null;parts(e){const t=this.fmt.formatToParts(e),i=l=>t.find(c=>c.type===l)?.value??"",a=Number(i("hour")),s=Number(i("minute")),o=/p/i.test(i("dayPeriod")),r=a%12+(o?12:0);return{time:`${a}:${String(s).padStart(2,"0")} ${o?"PM":"AM"}`,day:i("weekday"),hour:r+s/60}}abbrev(e){return this.zoneFmt.formatToParts(e).find(t=>t.type==="timeZoneName")?.value??"UTC"}date(e){if(!this.dateFmt){const t={weekday:"short",day:"numeric",month:"short"};try{this.dateFmt=new Intl.DateTimeFormat("en-US",{...t,timeZone:this.timezone})}catch{this.dateFmt=new Intl.DateTimeFormat("en-US",{...t,timeZone:"UTC"})}}return this.dateFmt.format(e)}}function HM(n){return n<=1?"clear":n===2?"partly":n===3?"cloud":n===45||n===48?"fog":n>=51&&n<=57?"drizzle":n>=71&&n<=77||n===85||n===86?"snow":n>=95?"storm":n>=58?"rain":"cloud"}const pa='<path d="M7 18h10a4 4 0 0 0 .4-8A5.5 5.5 0 0 0 6.8 9.3 4.4 4.4 0 0 0 7 18z" fill="currentColor" fill-opacity=".9"/>',GM='<circle cx="12" cy="12" r="4.2" fill="#ffd66b"/><g stroke="#ffd66b" stroke-width="1.8" stroke-linecap="round">'+[0,45,90,135,180,225,270,315].map(n=>{const e=n*Math.PI/180,t=i=>`${(12+Math.cos(e)*i).toFixed(1)} ${(12+Math.sin(e)*i).toFixed(1)}`;return`<path d="M${t(6.8)}L${t(9.2)}"/>`}).join("")+"</g>",VM='<path d="M15.5 4.5a7.5 7.5 0 1 0 4 12.5 6 6 0 0 1-4-12.5z" fill="#dfe6ff"/>';function Xu(n,e,t=18){const i=HM(n),a=e?GM:VM;let s;switch(i){case"clear":s=a;break;case"partly":s=`<g transform="translate(-3 -3) scale(.8)">${a}</g><g transform="translate(2 3) scale(.85)">${pa}</g>`;break;case"cloud":s=pa;break;case"fog":s='<g stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 9h16M6 13h12M4 17h16"/></g>';break;case"drizzle":case"rain":s=`<g transform="translate(0 -3)">${pa}</g><g stroke="#7cc4ff" stroke-width="1.8" stroke-linecap="round">`+(i==="rain"?'<path d="M8 18l-1 3M12 18l-1 3M16 18l-1 3"/>':'<path d="M9 18l-.5 1.5M14 18l-.5 1.5"/>')+"</g>";break;case"snow":s=`<g transform="translate(0 -3)">${pa}</g><g fill="#ffffff"><circle cx="8" cy="19.5" r="1.2"/><circle cx="12" cy="21" r="1.2"/><circle cx="16" cy="19.5" r="1.2"/></g>`;break;case"storm":s=`<g transform="translate(0 -3)">${pa}</g><path d="M12.5 15l-3 5h2.5l-1 3.5 3.8-5.5h-2.6l1.3-3z" fill="#ffd66b"/>`;break}return`<svg class="glyph" width="${t}" height="${t}" viewBox="0 0 24 24" aria-hidden="true">${s}</svg>`}const $u="skycast.temp",WM=new Set(["US","LR","MM","BS","BZ","KY","PW","FM","MH"]);let Oi=null;function bh(){try{const n=new Intl.Locale(navigator.language||"en-US"),e=n.region??n.maximize().region??"";return WM.has(e)?"F":"C"}catch{return"C"}}function Xi(){if(Oi)return Oi;try{const n=localStorage.getItem($u);Oi=n==="C"||n==="F"?n:bh()}catch{Oi=bh()}return Oi}function XM(n){Oi=n;try{localStorage.setItem($u,n)}catch{}}function qr(n){return Xi()==="F"?`${Math.round(n*1.8+32)}°F`:`${Math.round(n)}°C`}function $M(n){return Xi()==="F"?`${Math.round(n*2.23694)} mph`:`${Math.round(n*3.6)} km/h`}function qM(n){return n<.05?"none":Xi()==="F"?`${(n/25.4).toFixed(2)} in/h`:`${n.toFixed(1)} mm/h`}function YM(n){return["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"][Math.round((n%360+360)%360/22.5)%16]}const cn=36e5;function jM(n,e,t){const i=Math.max(0,1-Math.abs(t-3)/9),a=12+n*96+i*130,s=18+n*132+i*60,o=34+n*190+i*6,r=.62*e,l=c=>Math.round(c*(1-r)+(150*n+30)*r);return`rgb(${l(a)},${l(s)},${l(o)})`}class ZM{root;track;svgHost;cursor;nowMark;tourBtn;playBtn;rateSel;nowBtn;range=null;builtWidth=0;constructor(e,t){this.root=document.createElement("div"),this.root.className="scrubber glass",this.root.innerHTML=`
      <div class="sc-controls">
        <button class="sc-tour" title="Tour key moments (T)">Tour</button>
        <button class="sc-play" title="Play / pause (space)">Play</button>
        <select class="sc-rate" title="Playback rate">${Vu.map((a,s)=>`<option value="${s}">${a.label}</option>`).join("")}</select>
        <button class="sc-now" title="Back to live time">Now</button>
      </div>
      <div class="sc-track"><div class="sc-svg"></div><div class="sc-nowmark"></div><div class="sc-cursor"></div></div>`,e.append(this.root),this.track=this.root.querySelector(".sc-track"),this.svgHost=this.root.querySelector(".sc-svg"),this.cursor=this.root.querySelector(".sc-cursor"),this.nowMark=this.root.querySelector(".sc-nowmark"),this.tourBtn=this.root.querySelector(".sc-tour"),this.playBtn=this.root.querySelector(".sc-play"),this.rateSel=this.root.querySelector(".sc-rate"),this.nowBtn=this.root.querySelector(".sc-now"),this.tourBtn.onclick=()=>t.onTour(),this.playBtn.onclick=()=>t.onPlayPause(),this.nowBtn.onclick=()=>t.onNow(),this.rateSel.onchange=()=>t.onRate(Number(this.rateSel.value));const i=a=>{if(!this.range)return;const s=this.track.getBoundingClientRect(),o=Math.max(0,Math.min(1,(a-s.left)/Math.max(1,s.width)));t.onScrub(this.range.start+o*(this.range.end-this.range.start))};this.track.addEventListener("pointerdown",a=>{this.track.setPointerCapture(a.pointerId),i(a.clientX),a.preventDefault()}),this.track.addEventListener("pointermove",a=>{this.track.hasPointerCapture(a.pointerId)&&i(a.clientX)}),addEventListener("resize",()=>this.draw())}setRange(e){this.range=e,this.builtWidth=0,this.draw()}update(e,t,i,a,s){const o=this.range;if(!o)return;this.track.clientWidth!==this.builtWidth&&this.draw();const r=o.end-o.start,l=this.track.clientWidth;this.cursor.style.transform=`translateX(${((e-o.start)/r*l).toFixed(1)}px)`,this.nowMark.style.transform=`translateX(${((t-o.start)/r*l).toFixed(1)}px)`,Ko(this.tourBtn,"on",i==="tour"),Ko(this.playBtn,"on",i==="continuous");const c=i==="paused"?"Play":"Pause";this.playBtn.textContent!==c&&(this.playBtn.textContent=c),Ko(this.nowBtn,"on",a),this.rateSel.value!==String(s)&&(this.rateSel.value=String(s))}draw(){const e=this.range,t=this.track.clientWidth;if(!e||t<=0)return;this.builtWidth=t;const i=this.track.clientHeight||64,a=e.end-e.start,s=h=>(h-e.start)/a*t,o=Math.round(a/cn),r=[],l=t/o;for(let h=0;h<o;h++){const d=e.start+(h+.5)*cn,f=Ki(new Date(d),e.lat,e.lon),p=e.timeline?e.timeline.at(new Date(d)).totalCover:0;r.push(`<rect x="${(h*l).toFixed(2)}" y="0" width="${(l+.6).toFixed(2)}" height="${i}" fill="${jM(f.daylight,p,f.sun.altitude)}"/>`)}if(r.push(`<rect x="0" y="0" width="${t}" height="${i}" fill="rgba(8,12,22,.28)"/>`),e.timeline){const h=[];for(let u=0;u<=o;u++)h.push(e.timeline.at(new Date(e.start+u*cn)).tempC);const d=Math.min(...h),f=Math.max(...h),p=i*.66,g=i*.36,v=u=>p+(u-d)/Math.max(1,f-d)*(g-p),m=h.map((u,_)=>`${(_/o*t).toFixed(1)},${v(u).toFixed(1)}`).join(" ");r.push(`<polyline points="${m}" fill="none" stroke="#ffb86b" stroke-width="1.5" stroke-opacity=".95"/>`)}const c=[];for(let h=0;h<=o;h++){const d=e.start+h*cn;e.clock.parts(new Date(d)).hour<1&&c.push(d)}for(let h=0;h<c.length;h++){const d=c[h],f=s(d);r.push(`<line x1="${f.toFixed(1)}" x2="${f.toFixed(1)}" y1="0" y2="${i}" stroke="rgba(255,255,255,.55)" stroke-width="1"/>`);const p=c[h+1]??d+24*cn;let g=e.clock.parts(new Date(d+cn)).day;if(e.timeline&&p-d>=12*cn){let v=-1/0,m=1/0;for(let u=d;u<Math.min(p,e.end);u+=cn){const _=e.timeline.at(new Date(u)).tempC;v=Math.max(v,_),m=Math.min(m,_)}Number.isFinite(v)&&(g+=` ${qr(v)}/${qr(m).replace(/[CF]$/,"")}`)}s(p)-f>60&&r.push(`<text x="${(f+4).toFixed(1)}" y="${i-5}" class="sc-day">${g}</text>`)}if(e.timeline){const h=l*3>=18?3:l*6>=18?6:12,d=Math.ceil(e.start/(h*cn))*h*cn;for(let f=d;f<e.end;f+=h*cn){const p=e.timeline.at(new Date(f)),g=Ki(new Date(f),e.lat,e.lon).sun.altitude,v=s(f)-8;r.push(`<g transform="translate(${v.toFixed(1)} 3)">${Xu(p.wmoCode,g>-.8,16)}</g>`)}}this.svgHost.innerHTML=`<svg width="${t}" height="${i}" viewBox="0 0 ${t} ${i}">${r.join("")}</svg>`}}function Ko(n,e,t){n.classList.contains(e)!==t&&n.classList.toggle(e,t)}const KM={observation:"Observed",forecast:"Forecast",simulated:"Simulated"};class JM{root;el={};last="";constructor(e,t){this.root=document.createElement("div"),this.root.className="hud glass",this.root.innerHTML=`
      <div class="hud-place"></div>
      <div class="hud-when"></div>
      <div class="hud-main">
        <span class="hud-glyph"></span>
        <span class="hud-temp"></span>
        <button class="hud-unit" title="Switch C / F"></button>
      </div>
      <div class="hud-cond"></div>
      <div class="hud-rows">
        <span>Wind</span><b class="hud-wind"></b>
        <span>Precip</span><b class="hud-precip"></b>
        <span>Cloud</span><b class="hud-cloud"></b>
      </div>
      <div class="hud-foot"><span class="hud-badge"></span><span class="hud-status"></span></div>`,e.append(this.root);for(const i of["place","when","glyph","temp","unit","cond","wind","precip","cloud","badge","status"])this.el[i]=this.root.querySelector(`.hud-${i}`);this.el.unit.onclick=()=>{XM(Xi()==="C"?"F":"C"),this.last="",t()}}update(e,t,i,a,s,o){const r=i?i.parts(t):null,l=i&&r?`${i.date(t)} · ${r.time} ${i.abbrev(t)}`:"",c=[e,l,a?.tempC.toFixed(1),a?.wmoCode,a?.source,a?.windSpeed.toFixed(1),a?.precip.toFixed(2),a?.totalCover.toFixed(2),s,o,Xi()].join("|");if(c!==this.last){if(this.last=c,this.el.place.textContent=e,this.el.when.textContent=l,this.el.unit.textContent=`°${Xi()==="C"?"F":"C"}`,this.el.status.textContent=o,!a){this.el.temp.textContent="--",this.el.cond.textContent="loading weather";return}this.el.glyph.innerHTML=Xu(a.wmoCode,s,30),this.el.temp.textContent=qr(a.tempC),this.el.cond.textContent=a.summary,this.el.wind.textContent=`${$M(a.windSpeed)} ${YM(a.windDir)}`,this.el.precip.textContent=qM(a.precip),this.el.cloud.textContent=`${Math.round(a.totalCover*100)}%`,this.el.badge.textContent=KM[a.source],this.el.badge.dataset.source=a.source}}}class QM{el;constructor(e){this.el=document.createElement("div"),this.el.className="pill glass",e.append(this.el)}set(e){const t=!!e;this.el.classList.toggle("show",t),t&&this.el.textContent!==e&&(this.el.textContent=e)}}class eS{buttons;constructor(e,t){const i=document.createElement("div");i.className="modes glass",i.innerHTML='<button data-m="skyline" title="Skyline view (1)">Skyline</button><button data-m="street" title="Street view (2)">Street</button>',e.append(i);const a=[...i.querySelectorAll("button")];this.buttons={skyline:a[0],street:a[1]};for(const s of a)s.onclick=()=>t(s.dataset.m)}set(e){this.buttons.skyline.classList.toggle("on",e==="skyline"),this.buttons.street.classList.toggle("on",e==="street")}}class tS{el;constructor(e){this.el=document.createElement("div"),this.el.className="loading glass",this.el.innerHTML='<div class="ld-label">starting</div><div class="ld-bar"><i></i></div>',e.append(this.el)}set(e,t){this.el.classList.add("show"),this.el.querySelector(".ld-label").textContent=t,this.el.querySelector(".ld-bar i").style.width=`${Math.round(e*100)}%`}done(){this.el.classList.remove("show")}fail(e){this.el.classList.add("show"),this.el.querySelector(".ld-label").textContent=e}}const qu=[{name:"New York",lat:40.758,lon:-73.9855},{name:"San Francisco",lat:37.7925,lon:-122.4015},{name:"London",lat:51.5079,lon:-.1281},{name:"Paris",lat:48.8566,lon:2.3522},{name:"Tokyo",lat:35.6812,lon:139.7671},{name:"Sydney",lat:-33.8688,lon:151.2093},{name:"Chicago",lat:41.8826,lon:-87.6233},{name:"Seattle",lat:47.6062,lon:-122.3321}];class nS{constructor(e,t){this.onPick=t,this.root=document.createElement("div"),this.root.className="where glass",this.root.innerHTML=`
      <div class="wh-row">
        <input class="wh-input" type="search" placeholder="Search a place" autocomplete="off" spellcheck="false" />
        <button class="wh-geo" title="My location" aria-label="My location">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>
        </button>
      </div>
      <div class="wh-list"></div>
      <div class="wh-note"></div>`,e.append(this.root),this.input=this.root.querySelector(".wh-input"),this.list=this.root.querySelector(".wh-list"),this.note=this.root.querySelector(".wh-note"),this.input.addEventListener("focus",()=>this.showPresets()),this.input.addEventListener("input",()=>{clearTimeout(this.timer);const i=this.input.value.trim();if(i.length<2){this.showPresets();return}this.timer=window.setTimeout(()=>void this.search(i),250)}),this.input.addEventListener("keydown",i=>{i.key==="Escape"&&this.close(),i.key==="Enter"&&this.list.querySelector("button")?.click()}),document.addEventListener("pointerdown",i=>{this.root.contains(i.target)||this.close()}),this.root.querySelector(".wh-geo").addEventListener("click",()=>this.locate())}root;input;list;note;abort=null;timer=0;showPresets(){this.render(qu.map(e=>({label:e.name,pick:{lat:e.lat,lon:e.lon,name:e.name}})))}async search(e){this.abort?.abort(),this.abort=new AbortController;const t=await mw(e,this.abort.signal);if(this.input.value.trim()===e){if(t.length===0){this.render([]),this.setNote(`nothing found for "${e}"`);return}this.render(t.map(i=>({label:pw(i),pick:{lat:i.lat,lon:i.lon,name:i.name}})))}}render(e){this.setNote(""),this.list.innerHTML="";for(const t of e){const i=document.createElement("button");i.textContent=t.label,i.onclick=()=>{this.close(),this.input.value="",this.input.blur(),this.onPick(t.pick)},this.list.append(i)}this.root.classList.toggle("open",e.length>0)}close(){this.root.classList.remove("open"),this.list.innerHTML=""}setNote(e){this.note.textContent=e}locate(){if(!("geolocation"in navigator)){this.setNote("location is not available in this browser");return}this.setNote("locating..."),navigator.geolocation.getCurrentPosition(e=>{this.setNote(""),this.onPick({lat:e.coords.latitude,lon:e.coords.longitude,name:null})},e=>this.setNote(e.code===e.PERMISSION_DENIED?"location permission denied":"could not get a location"),{enableHighAccuracy:!1,timeout:1e4,maximumAge:6e5})}}const iS={lat:37.7925,lon:-122.4015,mode:"skyline",time:null};function Mh(n){const e=decodeURIComponent(n.replace(/^#/,"")).split(",");if(e.length<2)return null;const t=Number(e[0]),i=Number(e[1]);if(!Number.isFinite(t)||!Number.isFinite(i)||Math.abs(t)>90||Math.abs(i)>180)return null;const a=e[2]==="street"?"street":"skyline";let s=null;if(e[3]){const o=e[3].trim(),r=/^\d+$/.test(o)?Number(o)*1e3:Date.parse(o);Number.isFinite(r)&&(s=r)}return{lat:t,lon:i,mode:a,time:s}}function Sh(n){const e=`#${n.lat.toFixed(4)},${n.lon.toFixed(4)},${n.mode}`;return n.time===null?e:`${e},${new Date(n.time).toISOString().slice(0,16)}Z`}const gs=36e5,aS=15*6e4;async function sS(){const n=document.getElementById("view"),e=document.getElementById("ui"),t=new URLSearchParams(location.search);ww(n),t.has("diag")&&_w(document.createElement("canvas"));const i=t.has("shot");i&&(e.style.display="none");const a=au(),{renderer:s,scene:o,camera:r}=Ev(n,a);s.debug.onShaderError=(J,re,qe,pe)=>{const Ie=window.__skycastShout;Ie?.("SHADER FAILED"),console.error("[skycast] vertex shader log:",J.getShaderInfoLog(qe)),console.error("[skycast] fragment shader log:",J.getShaderInfoLog(pe))};const l=new v_(s),c=Tv(s,a),h=new U_(s);h.enabled=a.aoEnabled;const d=new Cv(s),f=()=>{const J=s.getDrawingBufferSize(new ke);c.setSize(J.x,J.y),l.resize(s),h.resize(s)};addEventListener("resize",f),i&&(d.pin(1),d.apply(s),s.setSize(n.clientWidth||innerWidth,n.clientHeight||innerHeight,!1),f());const p=new Lv;o.add(p.mesh);const g=new T_(a),v=new j_,m=new pM(o,a,g.uniforms,t.get("overpass")),u=new zM(n,r,m);u.frozen=i;const _=new xM(Date.now()),w=new tS(e),x=new JM(e,()=>k&&R.setRange(k)),S=new QM(e),E=new eS(e,J=>j(J)),R=new ZM(e,{onScrub:J=>{_.scrubTo(J),z()},onTour:()=>oe(),onPlayPause:()=>Ee(),onRate:J=>{_.rateIndex=J,_.play(),z()},onNow:()=>{_.goLive(Date.now()),z()}});new nS(e,J=>void Ge(J));let C=Mh(location.hash)??{...iS},b=new Pc(C.lat,C.lon),y="",A=null,P=null,I=null,U=Math.round(C.lon/15)*3600,k=null,H=0,V="";const z=()=>{C.mode=u.mode,C.time=_.mode==="paused"&&!_.live?Math.round(_.t/6e4)*6e4:null;const J=Sh(C);J!==V&&(V=J,history.replaceState(null,"",`${location.pathname}${location.search}${J}`))},j=J=>{u.setMode(J),E.set(J),z()},ee=J=>vM(C.lat,C.lon,J,wM,U),oe=()=>{_.goLive(Date.now()),_.startTour(ee,Date.now()),z()},Ee=()=>{_.mode==="paused"?_.play():_.pause(),z()},Ge=async J=>{C={lat:J.lat,lon:J.lon,mode:u.mode,time:null},V="",Fe(),await Le(J.name)},Fe=()=>{const J=Sh(C);V=J,history.replaceState(null,"",`${location.pathname}${location.search}${J}`)},Le=async J=>{const re=++H;b=new Pc(C.lat,C.lon),U=Math.round(C.lon/15)*3600,P=null,I=null,A=null,k=null;const qe=qu.find(Re=>Math.abs(Re.lat-C.lat)<.001&&Math.abs(Re.lon-C.lon)<.001);y=J??qe?.name??`${C.lat.toFixed(3)}, ${C.lon.toFixed(3)}`,document.title=`${y} · skycast`,!J&&!qe&&gw(C.lat,C.lon).then(Re=>{Re&&re===H&&(y=Re.name,document.title=`${y} · skycast`)}),u.resetPlace(),u.setMode(C.mode,!0),E.set(C.mode),C.time!==null?_.scrubTo(C.time):_.goLive(Date.now());const pe=cw(C.lat,C.lon).then(Re=>{re===H&&(P=Re)}),Ie=uw(C.lat,C.lon).then(Re=>{if(re===H){if(I=Re,Re)A=new yh(Re.timezone),U=Re.utcOffsetSeconds,_.setBounds(Re.start.getTime(),Re.end.getTime()),k={start:Re.start.getTime(),end:Re.end.getTime(),lat:C.lat,lon:C.lon,timeline:Re,clock:A};else{A=new yh("UTC");const Ke=Date.now();_.setBounds(Ke-24*gs,Ke+48*gs),k={start:Ke-24*gs,end:Ke+48*gs,lat:C.lat,lon:C.lon,timeline:null,clock:A}}R.setRange(k)}});try{await m.setOrigin(b,(Re,Ke)=>{re===H&&w.set(Re,Ke)})}catch(Re){console.error(Re),re===H&&w.fail(`could not load terrain: ${Re.message}`);return}re===H&&(w.done(),await Promise.all([pe,Ie]),re===H&&(P||(P=Ms()),C.time===null&&!i&&oe(),z()))};addEventListener("hashchange",()=>{if(location.hash===V)return;const J=Mh(location.hash);if(!J)return;const re=Math.abs(J.lat-C.lat)>1e-5||Math.abs(J.lon-C.lon)>1e-5;if(C=J,V=location.hash,re){Le(null);return}j(J.mode),J.time!==null?_.scrubTo(J.time):oe()});let q=!1;addEventListener("keydown",J=>{if(!(Wu(J)||J.metaKey||J.ctrlKey||J.altKey))switch(J.code){case"Digit1":j("skyline");break;case"Digit2":j("street");break;case"Space":J.preventDefault(),Ee();break;case"ArrowLeft":J.preventDefault(),_.stepHours(-1),z();break;case"ArrowRight":J.preventDefault(),_.stepHours(1),z();break;case"KeyT":oe();break;case"KeyH":q=!q,e.classList.toggle("hidden",q);break}}),Le(null);const K=new Hf;let fe=0,De=16,we=1,We=0,ut=Ms(),L=NaN,nt=0;const Oe=J=>{const re=Date.now();return P&&(!I||Math.abs(J-re)<aS)?P:I?I.at(new Date(J)):P??Ms()};s.setAnimationLoop(()=>{const J=K.getDelta(),re=Math.min(.05,J);i||(fe+=re),_.step(re,Date.now());const qe=new Date(_.t);u.update(re),m.update(r,u.focus());const pe=performance.now();(!(Math.abs(_.t-L)<6e4)||pe-nt>500)&&(ut=Oe(_.t),L=_.t,nt=pe);const Ie=Ki(qe,C.lat,C.lon),Re=r_(Ie,ut),Ke=r.position.y;p.update(Ie,ut,Ke,fe),p.syncCamera(r),p.uniforms.uExposure.value=Re.exposure;const D=(qe.getUTCHours()+qe.getUTCMinutes()/60+C.lon/15+48)%24;m.prepareFrame({camera:r,light:Re,wx:ut,skyProbe:v,elapsed:fe,solarHour:D}),v.setSize(d.scale<.8?32:64),v.update(s,Re,Ke),g.update(s,o,r,Re.sunDir,d.scale,m.shadowCasters),m.setAo(h,0),p.syncCamera(r),h.render(s,o,r,m.shadowCasters),m.setAo(h,1),s.setRenderTarget(c),s.render(o,r),l.update(r,ut,Re,fe),l.uniforms.uSunSurfaceCloud.value=.105,l.presentUniforms.uExposure.value=Re.exposure,l.presentUniforms.uNight.value=Re.night,l.brightUniforms.uExposure.value=Re.exposure,l.brightUniforms.uNight.value=Re.night,l.render(s,c.texture,c.depthTexture),We++,De+=(re*1e3-De)*.06,!i&&d.update(De,re)&&(d.apply(s),s.setSize(n.clientWidth||innerWidth,n.clientHeight||innerHeight,!1),f()),R.update(_.t,Date.now(),_.mode,_.live,_.rateIndex),S.set(_.label),we+=re,we>.25&&(we=0,x.update(y,qe,A,P?ut:null,Ie.sun.altitude>-.833,m.status.note))}),Object.assign(window,{skycastShot:{get frames(){return We},get settled(){return m.status.ready&&m.status.idle&&!m.drapePending&&P!==null&&I!==null},get buildings(){return m.status.buildings},get liveStats(){return m.liveStats},capture:()=>n.toDataURL("image/png")},skycast:{scene:o,camera:r,renderer:s,sky:p,composite:l,ground:m,rig:u,get time(){return new Date(_.t)},get mode(){return u.mode},get play(){return _.mode},get label(){return _.label},get wx(){return ut}},skycastClearCache:async()=>{await sw(),console.info("[skycast] tile cache cleared; reload to refetch")}})}sS().catch(n=>{console.error(n);const e=window.__skycastShout;e?.(`failed: ${n.message}`)});
