(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`attached`,t=1e3,n=1001,r=1002,i=1003,a=1004,o=1005,s=1006,c=1007,l=1008,u=1009,d=1010,f=1011,p=1012,m=1013,h=1014,g=1015,_=1016,v=1017,y=1018,b=1020,x=35902,S=35899,C=1021,w=1022,T=1023,E=1026,D=1027,O=1028,ee=1029,k=1030,te=1031,ne=1033,re=33776,A=33777,ie=33778,j=33779,ae=35840,oe=35841,se=35842,ce=35843,le=36196,ue=37492,de=37496,fe=37488,pe=37489,me=37490,he=37491,ge=37808,_e=37809,ve=37810,ye=37811,be=37812,xe=37813,Se=37814,Ce=37815,we=37816,Te=37817,Ee=37818,De=37819,Oe=37820,ke=37821,Ae=36492,je=36494,Me=36495,Ne=36283,Pe=36284,Fe=36285,Ie=36286,M=2300,Le=2301,Re=2302,ze=2303,N=2400,Be=2401,Ve=2402,He=3200,Ue=`srgb`,We=`srgb-linear`,Ge=`linear`,Ke=`srgb`,qe=7680,Je=35044,Ye=35048,Xe=2e3;function Ze(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Qe(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function $e(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function et(){let e=$e(`canvas`);return e.style.display=`block`,e}var tt={};function nt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function rt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function P(...e){e=rt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function F(...e){e=rt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function it(...e){let t=e.join(` `);t in tt||(tt[t]=!0,P(...e))}function at(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ot={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},st=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ct=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),lt=1234567,ut=Math.PI/180,dt=180/Math.PI;function ft(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ct[e&255]+ct[e>>8&255]+ct[e>>16&255]+ct[e>>24&255]+`-`+ct[t&255]+ct[t>>8&255]+`-`+ct[t>>16&15|64]+ct[t>>24&255]+`-`+ct[n&63|128]+ct[n>>8&255]+`-`+ct[n>>16&255]+ct[n>>24&255]+ct[r&255]+ct[r>>8&255]+ct[r>>16&255]+ct[r>>24&255]).toLowerCase()}function pt(e,t,n){return Math.max(t,Math.min(n,e))}function mt(e,t){return(e%t+t)%t}function ht(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function gt(e,t,n){return e===t?0:(n-e)/(t-e)}function _t(e,t,n){return(1-n)*e+n*t}function vt(e,t,n,r){return _t(e,t,1-Math.exp(-n*r))}function yt(e,t=1){return t-Math.abs(mt(e,t*2)-t)}function bt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function xt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function St(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Ct(e,t){return e+Math.random()*(t-e)}function wt(e){return e*(.5-Math.random())}function Tt(e){e!==void 0&&(lt=e);let t=lt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Et(e){return e*ut}function Dt(e){return e*dt}function Ot(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function kt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function At(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function jt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:P(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Mt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Nt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Pt={DEG2RAD:ut,RAD2DEG:dt,generateUUID:ft,clamp:pt,euclideanModulo:mt,mapLinear:ht,inverseLerp:gt,lerp:_t,damp:vt,pingpong:yt,smoothstep:bt,smootherstep:xt,randInt:St,randFloat:Ct,randFloatSpread:wt,seededRandom:Tt,degToRad:Et,radToDeg:Dt,isPowerOfTwo:Ot,ceilPowerOfTwo:kt,floorPowerOfTwo:At,setQuaternionFromProperEuler:jt,normalize:Nt,denormalize:Mt},I=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ft=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:P(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return It.copy(this).projectOnVector(e),this.sub(It)}reflect(e){return this.sub(It.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},It=new L,Lt=new Ft,Rt=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return it(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(zt.makeScale(e,t)),this}rotate(e){return it(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(zt.makeRotation(-e)),this}translate(e,t){return it(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(zt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},zt=new Rt,Bt=new Rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vt=new Rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ht(){let e={enabled:!0,workingColorSpace:We,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Wt(e.r),e.g=Wt(e.g),e.b=Wt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Gt(e.r),e.g=Gt(e.g),e.b=Gt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ge:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return it(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return it(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[We]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:Bt,fromXYZ:Vt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:r,transfer:Ke,toXYZ:Bt,fromXYZ:Vt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),e}var Ut=Ht();function Wt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Gt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Kt,qt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kt===void 0&&(Kt=$e(`canvas`)),Kt.width=e.width,Kt.height=e.height;let t=Kt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Kt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=$e(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Wt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Wt(t[e]/255)*255):t[e]=Wt(t[e]);return{data:t,width:e.width,height:e.height}}return P(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Jt=0,Yt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Jt++}),this.uuid=ft(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Xt(r[t].image)):e.push(Xt(r[t]))}else e=Xt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Xt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?qt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(P(`Texture: Unable to serialize Texture.`),{})}var Zt=0,Qt=new L,$t=class e extends st{constructor(t=e.DEFAULT_IMAGE,r=e.DEFAULT_MAPPING,i=n,a=n,o=s,c=l,d=T,f=u,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zt++}),this.uuid=ft(),this.name=``,this.source=new Yt(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new I(0,0),this.repeat=new I(1,1),this.center=new I(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qt).x}get height(){return this.source.getSize(Qt).y}get depth(){return this.source.getSize(Qt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){P(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){P(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case t:e.x-=Math.floor(e.x);break;case n:e.x=e.x<0?0:1;break;case r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case t:e.y-=Math.floor(e.y);break;case n:e.y=e.y<0?0:1;break;case r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null,$t.DEFAULT_MAPPING=300,$t.DEFAULT_ANISOTROPY=1;var en=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tn=class extends st{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:s,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t),this.textures=[];let r=new $t({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:s,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Yt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},nn=class extends tn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},rn=class extends $t{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},an=class extends $t{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},on=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/sn.setFromMatrixColumn(e,0).length(),i=1/sn.setFromMatrixColumn(e,1).length(),a=1/sn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ln,e,un)}lookAt(e,t,n){let r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),dn.crossVectors(n,pn),dn.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),dn.crossVectors(n,pn)),dn.normalize(),fn.crossVectors(pn,dn),r[0]=dn.x,r[4]=fn.x,r[8]=pn.x,r[1]=dn.y,r[5]=fn.y,r[9]=pn.y,r[2]=dn.z,r[6]=fn.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],ee=r[2],k=r[6],te=r[10],ne=r[14],re=r[3],A=r[7],ie=r[11],j=r[15];return i[0]=a*x+o*T+s*ee+c*re,i[4]=a*S+o*E+s*k+c*A,i[8]=a*C+o*D+s*te+c*ie,i[12]=a*w+o*O+s*ne+c*j,i[1]=l*x+u*T+d*ee+f*re,i[5]=l*S+u*E+d*k+f*A,i[9]=l*C+u*D+d*te+f*ie,i[13]=l*w+u*O+d*ne+f*j,i[2]=p*x+m*T+h*ee+g*re,i[6]=p*S+m*E+h*k+g*A,i[10]=p*C+m*D+h*te+g*ie,i[14]=p*w+m*O+h*ne+g*j,i[3]=_*x+v*T+y*ee+b*re,i[7]=_*S+v*E+y*k+b*A,i[11]=_*C+v*D+y*te+b*ie,i[15]=_*w+v*O+y*ne+b*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,ee=_*O-v*D+y*E+b*T-x*w+S*C;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/ee;return e[0]=(o*O-s*D+c*E)*k,e[1]=(r*D-n*O-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*O-c*w)*k,e[5]=(t*O-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=sn.set(r[0],r[1],r[2]).length(),o=sn.set(r[4],r[5],r[6]).length(),s=sn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),cn.copy(this);let c=1/a,l=1/o,u=1/s;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=l,cn.elements[5]*=l,cn.elements[6]*=l,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,t.setFromRotationMatrix(cn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Xe,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Xe,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},sn=new L,cn=new on,ln=new L(0,0,0),un=new L(1,1,1),dn=new L,fn=new L,pn=new L,mn=new on,hn=new Ft,gn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-pt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(pt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:P(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hn.setFromEuler(this),this.setFromQuaternion(hn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gn.DEFAULT_ORDER=`XYZ`;var _n=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},vn=0,yn=new L,bn=new Ft,xn=new on,Sn=new L,Cn=new L,wn=new L,Tn=new Ft,En=new L(1,0,0),Dn=new L(0,1,0),On=new L(0,0,1),kn={type:`added`},An={type:`removed`},jn={type:`childadded`,child:null},Mn={type:`childremoved`,child:null},Nn=class e extends st{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vn++}),this.uuid=ft(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new L,n=new gn,r=new Ft,i=new L(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new on},normalMatrix:{value:new Rt}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _n,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bn.setFromAxisAngle(e,t),this.quaternion.multiply(bn),this}rotateOnWorldAxis(e,t){return bn.setFromAxisAngle(e,t),this.quaternion.premultiply(bn),this}rotateX(e){return this.rotateOnAxis(En,e)}rotateY(e){return this.rotateOnAxis(Dn,e)}rotateZ(e){return this.rotateOnAxis(On,e)}translateOnAxis(e,t){return yn.copy(e).applyQuaternion(this.quaternion),this.position.add(yn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(En,e)}translateY(e){return this.translateOnAxis(Dn,e)}translateZ(e){return this.translateOnAxis(On,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sn.copy(e):Sn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Cn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Cn,Sn,this.up):xn.lookAt(Sn,Cn,this.up),this.quaternion.setFromRotationMatrix(xn),r&&(xn.extractRotation(r.matrixWorld),bn.setFromRotationMatrix(xn),this.quaternion.premultiply(bn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(F(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kn),jn.child=e,this.dispatchEvent(jn),jn.child=null):F(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(An),Mn.child=e,this.dispatchEvent(Mn),Mn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kn),jn.child=e,this.dispatchEvent(jn),jn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cn,e,wn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cn,Tn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Nn.DEFAULT_UP=new L(0,1,0),Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=class extends Nn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Fn={type:`move`},In=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ln={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},zn={h:0,s:0,l:0};function Bn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Vn=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ue){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ut.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ut.workingColorSpace){if(e=mt(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Bn(i,r,e+1/3),this.g=Bn(i,r,e),this.b=Bn(i,r,e-1/3)}return Ut.colorSpaceToWorking(this,r),this}setStyle(e,t=Ue){function n(t){t!==void 0&&parseFloat(t)<1&&P(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:P(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);P(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ue){let n=Ln[e.toLowerCase()];return n===void 0?P(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wt(e.r),this.g=Wt(e.g),this.b=Wt(e.b),this}copyLinearToSRGB(e){return this.r=Gt(e.r),this.g=Gt(e.g),this.b=Gt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ue){return Ut.workingToColorSpace(Hn.copy(this),e),Math.round(pt(Hn.r*255,0,255))*65536+Math.round(pt(Hn.g*255,0,255))*256+Math.round(pt(Hn.b*255,0,255))}getHexString(e=Ue){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.workingToColorSpace(Hn.copy(this),t);let n=Hn.r,r=Hn.g,i=Hn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Ut.workingColorSpace){return Ut.workingToColorSpace(Hn.copy(this),t),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=Ue){Ut.workingToColorSpace(Hn.copy(this),e);let t=Hn.r,n=Hn.g,r=Hn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Rn),this.setHSL(Rn.h+e,Rn.s+t,Rn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(zn);let n=_t(Rn.h,zn.h,t),r=_t(Rn.s,zn.s,t),i=_t(Rn.l,zn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Hn=new Vn;Vn.NAMES=Ln;var Un=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new Vn(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Wn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new Vn(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Gn=class extends Nn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Kn=new L,qn=new L,Jn=new L,Yn=new L,Xn=new L,Zn=new L,Qn=new L,$n=new L,er=new L,tr=new L,nr=new en,rr=new en,ir=new en,ar=class e{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Kn.subVectors(e,t),r.cross(Kn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Kn.subVectors(r,t),qn.subVectors(n,t),Jn.subVectors(e,t);let a=Kn.dot(Kn),o=Kn.dot(qn),s=Kn.dot(Jn),c=qn.dot(qn),l=qn.dot(Jn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Yn)!==null&&Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Yn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Yn.x),s.addScaledVector(a,Yn.y),s.addScaledVector(o,Yn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return nr.setScalar(0),rr.setScalar(0),ir.setScalar(0),nr.fromBufferAttribute(e,t),rr.fromBufferAttribute(e,n),ir.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(nr,i.x),a.addScaledVector(rr,i.y),a.addScaledVector(ir,i.z),a}static isFrontFacing(e,t,n,r){return Kn.subVectors(n,t),qn.subVectors(e,t),Kn.cross(qn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Kn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Xn.subVectors(r,n),Zn.subVectors(i,n),$n.subVectors(e,n);let s=Xn.dot($n),c=Zn.dot($n);if(s<=0&&c<=0)return t.copy(n);er.subVectors(e,r);let l=Xn.dot(er),u=Zn.dot(er);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Xn,a);tr.subVectors(e,i);let f=Xn.dot(tr),p=Zn.dot(tr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Zn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Qn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Qn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Xn,a).addScaledVector(Zn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},or=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=cr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,cr):cr.fromBufferAttribute(r,t),cr.applyMatrix4(e.matrixWorld),this.expandByPoint(cr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),lr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),lr.copy(e.boundingBox)),lr.applyMatrix4(e.matrixWorld),this.union(lr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cr),cr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),_r.subVectors(this.max,gr),ur.subVectors(e.a,gr),dr.subVectors(e.b,gr),fr.subVectors(e.c,gr),pr.subVectors(dr,ur),mr.subVectors(fr,dr),hr.subVectors(ur,fr);let t=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-hr.z,hr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,hr.z,0,-hr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-hr.y,hr.x,0];return!br(t,ur,dr,fr,_r)||(t=[1,0,0,0,1,0,0,0,1],!br(t,ur,dr,fr,_r))?!1:(vr.crossVectors(pr,mr),t=[vr.x,vr.y,vr.z],br(t,ur,dr,fr,_r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},sr=[new L,new L,new L,new L,new L,new L,new L,new L],cr=new L,lr=new or,ur=new L,dr=new L,fr=new L,pr=new L,mr=new L,hr=new L,gr=new L,_r=new L,vr=new L,yr=new L;function br(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){yr.fromArray(e,a);let o=i.x*Math.abs(yr.x)+i.y*Math.abs(yr.y)+i.z*Math.abs(yr.z),s=t.dot(yr),c=n.dot(yr),l=r.dot(yr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var xr=new L,Sr=new I,Cr=0,wr=class extends st{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Je,this.updateRanges=[],this.gpuType=g,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXY(t,Sr.x,Sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXYZ(t,xr.x,xr.y,xr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix4(e),this.setXYZ(t,xr.x,xr.y,xr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyNormalMatrix(e),this.setXYZ(t,xr.x,xr.y,xr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.transformDirection(e),this.setXYZ(t,xr.x,xr.y,xr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),r=Nt(r,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Tr=class extends wr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Er=class extends wr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Dr=class extends wr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Or=new or,kr=new L,Ar=new L,jr=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Or.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);let t=kr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(kr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ar.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(Ar)),this.expandByPoint(kr.copy(e.center).sub(Ar))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Mr=0,Nr=new on,Pr=new Nn,Fr=new L,Ir=new or,Lr=new or,Rr=new L,zr=class e extends st{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mr++}),this.uuid=ft(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ze(e)?Er:Tr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Rt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Nr.makeRotationFromQuaternion(e),this.applyMatrix4(Nr),this}rotateX(e){return Nr.makeRotationX(e),this.applyMatrix4(Nr),this}rotateY(e){return Nr.makeRotationY(e),this.applyMatrix4(Nr),this}rotateZ(e){return Nr.makeRotationZ(e),this.applyMatrix4(Nr),this}translate(e,t,n){return Nr.makeTranslation(e,t,n),this.applyMatrix4(Nr),this}scale(e,t,n){return Nr.makeScale(e,t,n),this.applyMatrix4(Nr),this}lookAt(e){return Pr.lookAt(e),Pr.updateMatrix(),this.applyMatrix4(Pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Dr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&P(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new or);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){F(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ir.setFromBufferAttribute(n),this.morphTargetsRelative?(Rr.addVectors(this.boundingBox.min,Ir.min),this.boundingBox.expandByPoint(Rr),Rr.addVectors(this.boundingBox.max,Ir.max),this.boundingBox.expandByPoint(Rr)):(this.boundingBox.expandByPoint(Ir.min),this.boundingBox.expandByPoint(Ir.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&F(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){F(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Ir.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Lr.setFromBufferAttribute(n),this.morphTargetsRelative?(Rr.addVectors(Ir.min,Lr.min),Ir.expandByPoint(Rr),Rr.addVectors(Ir.max,Lr.max),Ir.expandByPoint(Rr)):(Ir.expandByPoint(Lr.min),Ir.expandByPoint(Lr.max))}Ir.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Rr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Rr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Rr.fromBufferAttribute(a,t),o&&(Fr.fromBufferAttribute(e,t),Rr.add(Fr)),r=Math.max(r,n.distanceToSquared(Rr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&F(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){F(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new wr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new L,s[e]=new L;let c=new L,l=new L,u=new L,d=new I,f=new I,p=new I,m=new L,h=new L;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new L,y=new L,b=new L,x=new L;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new wr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new L,i=new L,a=new L,o=new L,s=new L,c=new L,l=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rr.fromBufferAttribute(e,t),Rr.normalize(),e.setXYZ(t,Rr.x,Rr.y,Rr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new wr(a,r,i)}if(this.index===null)return P(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Br=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Je,this.updateRanges=[],this.version=0,this.uuid=ft()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ft()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ft()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Vr=new L,Hr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix4(e),this.setXYZ(t,Vr.x,Vr.y,Vr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.applyNormalMatrix(e),this.setXYZ(t,Vr.x,Vr.y,Vr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.transformDirection(e),this.setXYZ(t,Vr.x,Vr.y,Vr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Mt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),r=Nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),r=Nt(r,this.array),i=Nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){nt(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new wr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){nt(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ur=new L,Wr=new L,Gr=new Rt,Kr=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ur.subVectors(n,t).cross(Wr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Ur),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Gr.getNormalMatrix(e),r=this.coplanarPoint(Ur).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},qr=0,Jr=class extends st{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qr++}),this.uuid=ft(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vn(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qe,this.stencilZFail=qe,this.stencilZPass=qe,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){P(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){P(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Vn().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Kr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new I().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new I().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Yr=class extends Jr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new Vn(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xr,Zr=new L,Qr=new L,$r=new L,ei=new I,ti=new I,ni=new on,ri=new L,ii=new L,ai=new L,oi=new I,si=new I,ci=new I,li=class extends Nn{constructor(e=new Yr){if(super(),this.isSprite=!0,this.type=`Sprite`,Xr===void 0){Xr=new zr;let e=new Br(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Xr.setIndex([0,1,2,0,2,3]),Xr.setAttribute(`position`,new Hr(e,3,0,!1)),Xr.setAttribute(`uv`,new Hr(e,2,3,!1))}this.geometry=Xr,this.material=e,this.center=new I(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&F(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Qr.setFromMatrixScale(this.matrixWorld),ni.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$r.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qr.multiplyScalar(-$r.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;ui(ri.set(-.5,-.5,0),$r,a,Qr,r,i),ui(ii.set(.5,-.5,0),$r,a,Qr,r,i),ui(ai.set(.5,.5,0),$r,a,Qr,r,i),oi.set(0,0),si.set(1,0),ci.set(1,1);let o=e.ray.intersectTriangle(ri,ii,ai,!1,Zr);if(o===null&&(ui(ii.set(-.5,.5,0),$r,a,Qr,r,i),si.set(0,1),o=e.ray.intersectTriangle(ri,ai,ii,!1,Zr),o===null))return;let s=e.ray.origin.distanceTo(Zr);s<e.near||s>e.far||t.push({distance:s,point:Zr.clone(),uv:ar.getInterpolation(Zr,ri,ii,ai,oi,si,ci,new I),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ui(e,t,n,r,i,a){ei.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?ti.copy(ei):(ti.x=a*ei.x-i*ei.y,ti.y=i*ei.x+a*ei.y),e.copy(t),e.x+=ti.x,e.y+=ti.y,e.applyMatrix4(ni)}var di=new L,fi=new L,pi=class extends Nn{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type=`LOD`,Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let e=0,n=t.length;e<n;e++){let n=t[e];this.addLevel(n.object.clone(),n.distance,n.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let r=this.levels,i=0;for(;i<r.length&&!(t<r[i].distance);i++);return r.splice(i,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){let e=t.splice(n,1);return this.remove(e[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,r;for(n=1,r=t.length;n<r;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){di.setFromMatrixPosition(this.matrixWorld);let n=e.ray.origin.distanceTo(di);this.getObjectForDistance(n).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){di.setFromMatrixPosition(e.matrixWorld),fi.setFromMatrixPosition(this.matrixWorld);let n=di.distanceTo(fi)/e.zoom;t[0].object.visible=!0;let r,i;for(r=1,i=t.length;r<i;r++){let e=t[r].distance;if(t[r].object.visible&&(e-=e*t[r].hysteresis),n>=e)t[r-1].object.visible=!1,t[r].object.visible=!0;else break}for(this._currentLevel=r-1;r<i;r++)t[r].object.visible=!1}}toJSON(e){let t=super.toJSON(e);t.object.autoUpdate=this.autoUpdate,t.object.levels=[];let n=this.levels;for(let e=0,r=n.length;e<r;e++){let r=n[e];t.object.levels.push({object:r.object.uuid,distance:r.distance,hysteresis:r.hysteresis})}return t}},mi=new L,hi=new L,gi=new L,_i=new L,vi=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){hi.copy(e).add(t).multiplyScalar(.5),gi.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(hi);let i=e.distanceTo(t)*.5,a=-this.direction.dot(gi),o=_i.dot(this.direction),s=-_i.dot(gi),c=_i.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(hi).addScaledVector(gi,d),f}intersectSphere(e,t){if(e.radius<0)return null;mi.subVectors(e.center,this.origin);let n=mi.dot(this.direction),r=mi.dot(mi)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,ee,k,te,ne,re;if(y>=b&&y>=x?(w=s,D=u,k=p,re=g,s>=0?(S=c,C=l,T=d,E=f,O=m,ee=h,te=_,ne=v):(S=l,C=c,T=f,E=d,O=h,ee=m,te=v,ne=_)):b>=x?(w=c,D=d,k=m,re=_,c>=0?(S=l,C=s,T=f,E=u,O=h,ee=p,te=v,ne=g):(S=s,C=l,T=u,E=f,O=p,ee=h,te=g,ne=v)):(w=l,D=f,k=h,re=v,l>=0?(S=s,C=c,T=u,E=d,O=p,ee=m,te=g,ne=_):(S=c,C=s,T=d,E=u,O=m,ee=p,te=_,ne=g)),w===0)return null;let A=S/w,ie=C/w,j=1/w,ae=T-A*D,oe=E-ie*D,se=O-A*k,ce=ee-ie*k,le=te-A*re,ue=ne-ie*re,de=le*ce-ue*se,fe=ae*ue-oe*le,pe=se*oe-ce*ae;if(r){if(de<0||fe<0||pe<0)return null}else if((de<0||fe<0||pe<0)&&(de>0||fe>0||pe>0))return null;let me=de+fe+pe;if(me===0)return null;let he=j*(de*D+fe*k+pe*re);return(me>0?he<0:he>0)?null:this.at(he/me,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yi=class extends Jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Vn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bi=new on,xi=new vi,Si=new jr,Ci=new L,wi=new L,Ti=new L,Ei=new L,Di=new L,Oi=new L,ki=new L,Ai=new L,ji=class extends Nn{constructor(e=new zr,t=new yi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Oi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Di.fromBufferAttribute(s,e),a?Oi.addScaledVector(Di,r):Oi.addScaledVector(Di.sub(t),r))}t.add(Oi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Si.copy(n.boundingSphere),Si.applyMatrix4(i),xi.copy(e.ray).recast(e.near),!(Si.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Si,Ci)===null||xi.origin.distanceToSquared(Ci)>(e.far-e.near)**2))&&(bi.copy(i).invert(),xi.copy(e.ray).applyMatrix4(bi),(n.boundingBox===null||xi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ni(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ni(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ni(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ni(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Mi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Ai.copy(s),Ai.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Ai);return l<n.near||l>n.far?null:{distance:l,point:Ai.clone(),object:e}}function Ni(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,wi),e.getVertexPosition(c,Ti),e.getVertexPosition(l,Ei);let u=Mi(e,t,n,r,wi,Ti,Ei,ki);if(u){let e=new L;ar.getBarycoord(ki,wi,Ti,Ei,e),i&&(u.uv=ar.getInterpolatedAttribute(i,s,c,l,e,new I)),a&&(u.uv1=ar.getInterpolatedAttribute(a,s,c,l,e,new I)),o&&(u.normal=ar.getInterpolatedAttribute(o,s,c,l,e,new L),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new L,materialIndex:0};ar.getNormal(wi,Ti,Ei,t.normal),u.face=t,u.barycoord=e}return u}var Pi=new en,Fi=new en,Ii=new en,Li=new en,Ri=new on,zi=new L,Bi=new jr,Vi=new on,Hi=new vi,Ui=class extends ji{constructor(t,n){super(t,n),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=e,this.bindMatrix=new on,this.bindMatrixInverse=new on,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new or),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,zi),this.boundingBox.expandByPoint(zi)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jr),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,zi),this.boundingSphere.expandByPoint(zi)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bi.copy(this.boundingSphere),Bi.applyMatrix4(r),e.ray.intersectsSphere(Bi)!==!1&&(Vi.copy(r).invert(),Hi.copy(e.ray).applyMatrix4(Vi),(this.boundingBox===null||Hi.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,Hi)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new en,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():P(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Fi.fromBufferAttribute(r.attributes.skinIndex,e),Ii.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Pi.copy(t),t.set(0,0,0,0)):(Pi.set(...t,1),t.set(0,0,0)),Pi.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=Ii.getComponent(e);if(r!==0){let i=Fi.getComponent(e);Ri.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(Li.copy(Pi).applyMatrix4(Ri),r)}}return t.isVector4&&(t.w=Pi.w),t.applyMatrix4(this.bindMatrixInverse)}},Wi=class extends Nn{constructor(){super(),this.isBone=!0,this.type=`Bone`}},Gi=class extends $t{constructor(e=null,t=1,n=1,r,a,o,s,c,l=i,u=i,d,f){super(null,o,s,c,l,u,r,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ki=new on,qi=new on,Ji=class e{constructor(e=[],t=[]){this.uuid=ft(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){P(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new on)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new on;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:qi;Ki.multiplyMatrices(i,t[r]),Ki.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Gi(t,e,e,T,g);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(P(`Skeleton: No bone found with UUID:`,r),i=new Wi),this.bones.push(i),this.boneInverses.push(new on().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Yi=class extends wr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Xi=new on,Zi=new on,Qi=[],$i=new or,ea=new on,ta=new ji,na=new jr,ra=class extends ji{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,ea)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new or),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xi),$i.copy(e.boundingBox).applyMatrix4(Xi),this.boundingBox.union($i)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xi),na.copy(e.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(na)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ta.geometry=this.geometry,ta.material=this.material,ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),na.copy(this.boundingSphere),na.applyMatrix4(n),e.ray.intersectsSphere(na)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Xi),Zi.multiplyMatrices(n,Xi),ta.matrixWorld=Zi,ta.raycast(e,Qi);for(let e=0,n=Qi.length;e<n;e++){let n=Qi[e];n.instanceId=i,n.object=this,t.push(n)}Qi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Yi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gi(new Float32Array(r*this.count),r,this.count,O,g));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ia=new jr,aa=new I(.5,.5),oa=new L,sa=class{constructor(e=new Kr,t=new Kr,n=new Kr,r=new Kr,i=new Kr,a=new Kr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xe,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ia.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ia.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ia)}intersectsSprite(e){return ia.center.set(0,0,0),ia.radius=.7071067811865476+aa.distanceTo(e.center),ia.applyMatrix4(e.matrixWorld),this.intersectsSphere(ia)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(oa.x=r.normal.x>0?e.max.x:e.min.x,oa.y=r.normal.y>0?e.max.y:e.min.y,oa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ca=class extends Jr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new Vn(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},la=new L,ua=new L,da=new on,fa=new vi,pa=new jr,ma=new L,ha=new L,ga=class extends Nn{constructor(e=new zr,t=new ca){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)la.fromBufferAttribute(t,e-1),ua.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=la.distanceTo(ua);e.setAttribute(`lineDistance`,new Dr(n,1))}else P(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(r),pa.radius+=i,e.ray.intersectsSphere(pa)===!1)return;da.copy(r).invert(),fa.copy(e.ray).applyMatrix4(da);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=_a(this,e,fa,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=_a(this,e,fa,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=_a(this,e,fa,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=_a(this,e,fa,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function _a(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(la.fromBufferAttribute(s,i),ua.fromBufferAttribute(s,a),n.distanceSqToSegment(la,ua,ma,ha)>r)return;ma.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(ma);if(!(c<t.near||c>t.far))return{distance:c,point:ha.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var va=new L,ya=new L,ba=class extends ga{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)va.fromBufferAttribute(t,e),ya.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+va.distanceTo(ya);e.setAttribute(`lineDistance`,new Dr(n,1))}else P(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},xa=class extends Jr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new Vn(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sa=new on,Ca=new vi,wa=new jr,Ta=new L,Ea=class extends Nn{constructor(e=new zr,t=new xa){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(r),wa.radius+=i,e.ray.intersectsSphere(wa)===!1)return;Sa.copy(r).invert(),Ca.copy(e.ray).applyMatrix4(Sa);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Ta.fromBufferAttribute(l,n),Da(Ta,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Ta.fromBufferAttribute(l,a),Da(Ta,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Da(e,t,n,r,i,a,o){let s=Ca.distanceSqToPoint(e);if(s<n){let n=new L;Ca.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Oa=class extends $t{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ka=class extends $t{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Aa=class extends $t{constructor(e,t,n=h,r,a,o,s=i,c=i,l,u=E,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ja=class extends Aa{constructor(e,t=h,n=301,r,a,o=i,s=i,c,l=E){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ma=class extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Na=class e extends zr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Dr(c,3)),this.setAttribute(`normal`,new Dr(l,3)),this.setAttribute(`uv`,new Dr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new L;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Pa=class e extends zr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new L,l=new I;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Dr(a,3)),this.setAttribute(`normal`,new Dr(o,3)),this.setAttribute(`uv`,new Dr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Fa=class e extends zr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Dr(u,3)),this.setAttribute(`normal`,new Dr(d,3)),this.setAttribute(`uv`,new Dr(f,2));function _(){let a=new L,_=new L,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new I,m=new L,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ia=class e extends zr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Dr(i,3)),this.setAttribute(`normal`,new Dr(i.slice(),3)),this.setAttribute(`uv`,new Dr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new L,r=new L,i=new L;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new L;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new L;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new L,t=new L,n=new L,r=new L,o=new I,s=new I,c=new I;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},La=new L,Ra=new L,za=new L,Ba=new ar,Va=class extends zr{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(ut*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=Ba;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),Ba.getNormal(za),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=Ba[c[e]],o=Ba[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(za.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:za.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];La.fromBufferAttribute(a,t),Ra.fromBufferAttribute(a,n),d.push(La.x,La.y,La.z),d.push(Ra.x,Ra.y,Ra.z)}this.setAttribute(`position`,new Dr(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ha=class e extends Ia{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ua=class e extends Ia{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Wa=class e extends zr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Dr(p,3)),this.setAttribute(`normal`,new Dr(m,3)),this.setAttribute(`uv`,new Dr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ga=class e extends zr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new L,p=new I;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Dr(s,3)),this.setAttribute(`normal`,new Dr(c,3)),this.setAttribute(`uv`,new Dr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ka=class e extends zr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new L,d=new L,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Dr(p,3)),this.setAttribute(`normal`,new Dr(m,3)),this.setAttribute(`uv`,new Dr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function qa(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ya(i))i.isRenderTargetTexture?(P(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Ya(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Ja(e){let t={};for(let n=0;n<e.length;n++){let r=qa(e[n]);for(let e in r)t[e]=r[e]}return t}function Ya(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Xa(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Za(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ut.workingColorSpace}var Qa={clone:qa,merge:Ja},$a=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,to=class extends Jr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$a,this.fragmentShader=eo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qa(e.uniforms),this.uniformsGroups=Xa(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Vn().setHex(r.value);break;case`v2`:this.uniforms[n].value=new I().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new L().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new en().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Rt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new on().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},no=class extends to{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},ro=class extends Jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Vn(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new I(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},io=class extends Jr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new Vn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new I(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ao=class extends Jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=He,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},oo=class extends Jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function so(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function co(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var lo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},uo=class extends lo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:N,endingEnd:N}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Be:i=e,o=2*t-n;break;case Ve:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Be:a=e,s=2*n-t;break;case Ve:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},fo=class extends lo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},po=class extends lo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},mo=class extends lo{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=_o(n,t,g,y,r);i[p]=ho(x,o,_,b,m)}return i}};function ho(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function go(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function _o(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=ho(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=go(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var vo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=so(t,this.TimeBufferType),this.values=so(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:so(e.times,Array),values:so(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),co(e.settings)&&(n.settings={inTangents:so(e.settings.inTangents,Array),outTangents:so(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new mo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case M:t=this.InterpolantFactoryMethodDiscrete;break;case Le:t=this.InterpolantFactoryMethodLinear;break;case Re:t=this.InterpolantFactoryMethodSmooth;break;case ze:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return P(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return M;case this.InterpolantFactoryMethodLinear:return Le;case this.InterpolantFactoryMethodSmooth:return Re;case this.InterpolantFactoryMethodBezier:return ze}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;co(this.settings)&&(yo(this.settings.inTangents,e),yo(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(F(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(F(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){F(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){F(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Qe(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){F(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Re,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,co(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function yo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}vo.prototype.ValueTypeName=``,vo.prototype.TimeBufferType=Float32Array,vo.prototype.ValueBufferType=Float32Array,vo.prototype.DefaultInterpolation=Le;var bo=class extends vo{constructor(e,t,n){super(e,t,n)}};bo.prototype.ValueTypeName=`bool`,bo.prototype.ValueBufferType=Array,bo.prototype.DefaultInterpolation=M,bo.prototype.InterpolantFactoryMethodLinear=void 0,bo.prototype.InterpolantFactoryMethodSmooth=void 0;var xo=class extends vo{constructor(e,t,n,r){super(e,t,n,r)}};xo.prototype.ValueTypeName=`color`;var So=class extends vo{constructor(e,t,n,r){super(e,t,n,r)}};So.prototype.ValueTypeName=`number`;var Co=class extends lo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Ft.slerpFlat(i,0,a,c-o,a,c,s);return i}},wo=class extends vo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Co(this.times,this.values,this.getValueSize(),e)}};wo.prototype.ValueTypeName=`quaternion`,wo.prototype.InterpolantFactoryMethodSmooth=void 0;var To=class extends vo{constructor(e,t,n){super(e,t,n)}};To.prototype.ValueTypeName=`string`,To.prototype.ValueBufferType=Array,To.prototype.DefaultInterpolation=M,To.prototype.InterpolantFactoryMethodLinear=void 0,To.prototype.InterpolantFactoryMethodSmooth=void 0;var Eo=class extends vo{constructor(e,t,n,r){super(e,t,n,r)}};Eo.prototype.ValueTypeName=`vector`;var Do=class extends Nn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Vn(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Oo=class extends Do{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vn(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ko=new on,Ao=new L,jo=new L,Mo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new I(512,512),this.mapType=u,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sa,this._frameExtents=new I(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ao.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ao),jo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ko.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ko,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ko)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},No=new L,Po=new Ft,Fo=new L,Io=class extends Nn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Xe,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(No,Po,Fo),Fo.x===1&&Fo.y===1&&Fo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(No,Po,Fo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(No,Po,Fo),Fo.x===1&&Fo.y===1&&Fo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(No,Po,Fo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Lo=new L,Ro=new I,zo=new I,Bo=class extends Io{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=dt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ut*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dt*2*Math.atan(Math.tan(ut*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Lo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Lo.x,Lo.y).multiplyScalar(-e/Lo.z),Lo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Lo.x,Lo.y).multiplyScalar(-e/Lo.z)}getViewSize(e,t){return this.getViewBounds(e,Ro,zo),t.subVectors(zo,Ro)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ut*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vo=class extends Mo{constructor(){super(new Bo(90,1,.5,500)),this.isPointLightShadow=!0}},Ho=class extends Do{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Vo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Uo=class extends Io{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wo=class extends Mo{constructor(){super(new Uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Go=class extends Do{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new Wo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ko=class extends Do{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},qo=-90,Jo=1,Yo=class extends Nn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Bo(qo,Jo,e,t);r.layers=this.layers,this.add(r);let i=new Bo(qo,Jo,e,t);i.layers=this.layers,this.add(i);let a=new Bo(qo,Jo,e,t);a.layers=this.layers,this.add(a);let o=new Bo(qo,Jo,e,t);o.layers=this.layers,this.add(o);let s=new Bo(qo,Jo,e,t);s.layers=this.layers,this.add(s);let c=new Bo(qo,Jo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Xo=class extends Bo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Zo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Qo.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Qo(){this._document.hidden===!1&&this.reset()}var $o=`\\[\\]\\.:\\/`,es=RegExp(`[\\[\\]\\.:\\/]`,`g`),ts=`[^\\[\\]\\.:\\/]`,ns=`[^`+$o.replace(`\\.`,``)+`]`,rs=`((?:WC+[\\/:])*)`.replace(`WC`,ts),is=`(WCOD+)?`.replace(`WCOD`,ns),as=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,ts),os=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,ts),ss=RegExp(`^`+rs+is+as+os+`$`),cs=[`material`,`materials`,`bones`,`map`],ls=class{constructor(e,t,n){let r=n||us.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},us=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(es,``)}static parseTrackName(e){let t=ss.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);cs.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){P(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){F(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){F(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){F(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){F(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){F(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){F(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){F(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;F(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){F(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){F(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};us.Composite=ls,us.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},us.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},us.prototype.GetterByBindingType=[us.prototype._getValue_direct,us.prototype._getValue_array,us.prototype._getValue_arrayElement,us.prototype._getValue_toArray],us.prototype.SetterByBindingTypeAndVersioning=[[us.prototype._setValue_direct,us.prototype._setValue_direct_setNeedsUpdate,us.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[us.prototype._setValue_array,us.prototype._setValue_array_setNeedsUpdate,us.prototype._setValue_array_setMatrixWorldNeedsUpdate],[us.prototype._setValue_arrayElement,us.prototype._setValue_arrayElement_setNeedsUpdate,us.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[us.prototype._setValue_fromArray,us.prototype._setValue_fromArray_setNeedsUpdate,us.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ds=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,P(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function fs(e,t,n,r){let i=ps(r);switch(n){case C:return e*t;case O:return e*t/i.components*i.byteLength;case ee:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case te:return e*t*2/i.components*i.byteLength;case w:return e*t*3/i.components*i.byteLength;case T:return e*t*4/i.components*i.byteLength;case ne:return e*t*4/i.components*i.byteLength;case re:case A:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ie:case j:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case oe:case ce:return Math.max(e,16)*Math.max(t,8)/4;case ae:case se:return Math.max(e,8)*Math.max(t,8)/2;case le:case ue:case fe:case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case de:case me:case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ve:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case De:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Oe:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ke:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ae:case je:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ne:case Pe:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Fe:case Ie:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ps(e){switch(e){case u:case d:return{byteLength:1,components:1};case p:case f:case _:return{byteLength:2,components:1};case v:case y:return{byteLength:2,components:4};case h:case m:case g:return{byteLength:4,components:1};case x:case S:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?P(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function ms(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function hs(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var gs={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},R={common:{diffuse:{value:new Vn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},envMapRotation:{value:new Rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new I(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Vn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new Vn(16777215)},opacity:{value:1},center:{value:new I(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},_s={basic:{uniforms:Ja([R.common,R.specularmap,R.envmap,R.aomap,R.lightmap,R.fog]),vertexShader:gs.meshbasic_vert,fragmentShader:gs.meshbasic_frag},lambert:{uniforms:Ja([R.common,R.specularmap,R.envmap,R.aomap,R.lightmap,R.emissivemap,R.bumpmap,R.normalmap,R.displacementmap,R.fog,R.lights,{emissive:{value:new Vn(0)},envMapIntensity:{value:1}}]),vertexShader:gs.meshlambert_vert,fragmentShader:gs.meshlambert_frag},phong:{uniforms:Ja([R.common,R.specularmap,R.envmap,R.aomap,R.lightmap,R.emissivemap,R.bumpmap,R.normalmap,R.displacementmap,R.fog,R.lights,{emissive:{value:new Vn(0)},specular:{value:new Vn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gs.meshphong_vert,fragmentShader:gs.meshphong_frag},standard:{uniforms:Ja([R.common,R.envmap,R.aomap,R.lightmap,R.emissivemap,R.bumpmap,R.normalmap,R.displacementmap,R.roughnessmap,R.metalnessmap,R.fog,R.lights,{emissive:{value:new Vn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gs.meshphysical_vert,fragmentShader:gs.meshphysical_frag},toon:{uniforms:Ja([R.common,R.aomap,R.lightmap,R.emissivemap,R.bumpmap,R.normalmap,R.displacementmap,R.gradientmap,R.fog,R.lights,{emissive:{value:new Vn(0)}}]),vertexShader:gs.meshtoon_vert,fragmentShader:gs.meshtoon_frag},matcap:{uniforms:Ja([R.common,R.bumpmap,R.normalmap,R.displacementmap,R.fog,{matcap:{value:null}}]),vertexShader:gs.meshmatcap_vert,fragmentShader:gs.meshmatcap_frag},points:{uniforms:Ja([R.points,R.fog]),vertexShader:gs.points_vert,fragmentShader:gs.points_frag},dashed:{uniforms:Ja([R.common,R.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gs.linedashed_vert,fragmentShader:gs.linedashed_frag},depth:{uniforms:Ja([R.common,R.displacementmap]),vertexShader:gs.depth_vert,fragmentShader:gs.depth_frag},normal:{uniforms:Ja([R.common,R.bumpmap,R.normalmap,R.displacementmap,{opacity:{value:1}}]),vertexShader:gs.meshnormal_vert,fragmentShader:gs.meshnormal_frag},sprite:{uniforms:Ja([R.sprite,R.fog]),vertexShader:gs.sprite_vert,fragmentShader:gs.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gs.background_vert,fragmentShader:gs.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Rt}},vertexShader:gs.backgroundCube_vert,fragmentShader:gs.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gs.cube_vert,fragmentShader:gs.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gs.equirect_vert,fragmentShader:gs.equirect_frag},distance:{uniforms:Ja([R.common,R.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gs.distance_vert,fragmentShader:gs.distance_frag},shadow:{uniforms:Ja([R.lights,R.fog,{color:{value:new Vn(0)},opacity:{value:1}}]),vertexShader:gs.shadow_vert,fragmentShader:gs.shadow_frag}};_s.physical={uniforms:Ja([_s.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new I(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new Vn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new I},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new Vn(0)},specularColor:{value:new Vn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new I},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:gs.meshphysical_vert,fragmentShader:gs.meshphysical_frag};var vs={r:0,b:0,g:0},ys=new on,bs=new Rt;bs.set(-1,0,0,0,1,0,0,0,1);function xs(e,t,n,r,i,a){let o=new Vn(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new ji(new Na(1,1,1),new to({name:`BackgroundCubeMaterial`,uniforms:qa(_s.backgroundCube.uniforms),vertexShader:_s.backgroundCube.vertexShader,fragmentShader:_s.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ys.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(bs),l.material.toneMapped=Ut.getTransfer(i.colorSpace)!==Ke,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new ji(new Wa(2,2),new to({name:`BackgroundMaterial`,uniforms:qa(_s.background.uniforms),vertexShader:_s.background.vertexShader,fragmentShader:_s.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Ut.getTransfer(i.colorSpace)!==Ke,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(vs,Za(e)),n.buffers.color.setClear(vs.r,vs.g,vs.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ss(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Cs(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function ws(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(P(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&P(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Ts(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Kr,s=new Rt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Es=4,Ds=6,Os=20,ks=256,As=new Uo,js=new Vn,Ms=null,Ns=0,Ps=0,Fs=!1,Is=new L,Ls=new L,Rs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Is}=i;Ms=this._renderer.getRenderTarget(),Ns=this._renderer.getActiveCubeFace(),Ps=this._renderer.getActiveMipmapLevel(),Fs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ws(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ms,Ns,Ps),this._renderer.xr.enabled=Fs,e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ms=this._renderer.getRenderTarget(),Ns=this._renderer.getActiveCubeFace(),Ps=this._renderer.getActiveMipmapLevel(),Fs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:s,minFilter:s,generateMipmaps:!1,type:_,format:T,colorSpace:We,depthBuffer:!1},r=Bs(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bs(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=zs(r)),this._blurMaterial=Us(r,e,t),this._ggxMaterial=Hs(r,e,t)}return r}_compileMaterial(e){let t=new ji(new zr,e);this._renderer.compile(t,As)}_sceneToCubeUV(e,t,n,r,i){let a=new Bo(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(js),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ji(new Na,new yi({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(js),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Vs(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ws());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Vs(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,As)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Es?n-d+Es:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Vs(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,As),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Vs(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,As)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Vs(t,3*l*(r>this._lodMax-Es?r-this._lodMax+Es:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,As)}};function zs(e){let t=[],n=[],r=e,i=e-Es+1+Ds;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Ls.set(1,r,n):e===1?Ls.set(-n,1,-r):e===2?Ls.set(-n,r,1):e===3?Ls.set(-1,r,-n):e===4?Ls.set(-n,-1,r):Ls.set(n,r,-1),Ls.toArray(l,(e*6+t)*3)}}let u=new zr;u.setAttribute(`position`,new wr(c,3)),u.setAttribute(`outputDirection`,new wr(l,3)),n.push(new ji(u,null)),r>Es&&r--}return{lodMeshes:n,sizeLods:t}}function Bs(e,t,n){let r=new nn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Vs(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Hs(e,t,n){return new to({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:ks,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ks(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Us(e,t,n){return new to({name:`SphericalGaussianBlur`,defines:{SAMPLES:Os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ks(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ws(){return new to({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Ks(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Gs(){return new to({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ks(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var qs=class extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Oa(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Na(5,5,5),i=new to({name:`CubemapFromEquirect`,uniforms:qa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new ji(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=s),new Yo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Js(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new qs(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Rs(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Rs(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ys(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&it(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Xs(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Er:Tr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Zs(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Qs(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:F(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function $s(e,t,n){let r=new WeakMap,i=new en;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),_=new rn(h,p,m,u);_.type=g,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new I(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function ec(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var tc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function nc(e,t,n,r,i,a){let o=new nn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new zr;l.setAttribute(`position`,new Dr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Dr([0,2,0,0,2,0],2));let u=new no({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ji(l,u),f=new Uo(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new nn(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}),c=new nn(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Ut.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=tc[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var rc=new $t,ic=new Aa(1,1),ac=new rn,oc=new an,sc=new Oa,cc=[],lc=[],uc=new Float32Array(16),dc=new Float32Array(9),fc=new Float32Array(4);function pc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=cc[i];if(a===void 0&&(a=new Float32Array(i),cc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function mc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function hc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function gc(e,t){let n=lc[t];n===void 0&&(n=new Int32Array(t),lc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function _c(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function vc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mc(n,t))return;e.uniform2fv(this.addr,t),hc(n,t)}}function yc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(mc(n,t))return;e.uniform3fv(this.addr,t),hc(n,t)}}function bc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mc(n,t))return;e.uniform4fv(this.addr,t),hc(n,t)}}function xc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(mc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),hc(n,t)}else{if(mc(n,r))return;fc.set(r),e.uniformMatrix2fv(this.addr,!1,fc),hc(n,r)}}function Sc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(mc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),hc(n,t)}else{if(mc(n,r))return;dc.set(r),e.uniformMatrix3fv(this.addr,!1,dc),hc(n,r)}}function Cc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(mc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),hc(n,t)}else{if(mc(n,r))return;uc.set(r),e.uniformMatrix4fv(this.addr,!1,uc),hc(n,r)}}function wc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Tc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mc(n,t))return;e.uniform2iv(this.addr,t),hc(n,t)}}function Ec(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mc(n,t))return;e.uniform3iv(this.addr,t),hc(n,t)}}function Dc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mc(n,t))return;e.uniform4iv(this.addr,t),hc(n,t)}}function Oc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function kc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mc(n,t))return;e.uniform2uiv(this.addr,t),hc(n,t)}}function Ac(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mc(n,t))return;e.uniform3uiv(this.addr,t),hc(n,t)}}function jc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mc(n,t))return;e.uniform4uiv(this.addr,t),hc(n,t)}}function Mc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(ic.compareFunction=n.isReversedDepthBuffer()?518:515,a=ic):a=rc,n.setTexture2D(t||a,i)}function Nc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||oc,i)}function Pc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||sc,i)}function Fc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||ac,i)}function Ic(e){switch(e){case 5126:return _c;case 35664:return vc;case 35665:return yc;case 35666:return bc;case 35674:return xc;case 35675:return Sc;case 35676:return Cc;case 5124:case 35670:return wc;case 35667:case 35671:return Tc;case 35668:case 35672:return Ec;case 35669:case 35673:return Dc;case 5125:return Oc;case 36294:return kc;case 36295:return Ac;case 36296:return jc;case 35678:case 36198:case 36298:case 36306:case 35682:return Mc;case 35679:case 36299:case 36307:return Nc;case 35680:case 36300:case 36308:case 36293:return Pc;case 36289:case 36303:case 36311:case 36292:return Fc}}function Lc(e,t){e.uniform1fv(this.addr,t)}function Rc(e,t){let n=pc(t,this.size,2);e.uniform2fv(this.addr,n)}function zc(e,t){let n=pc(t,this.size,3);e.uniform3fv(this.addr,n)}function Bc(e,t){let n=pc(t,this.size,4);e.uniform4fv(this.addr,n)}function Vc(e,t){let n=pc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Hc(e,t){let n=pc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Uc(e,t){let n=pc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Wc(e,t){e.uniform1iv(this.addr,t)}function Gc(e,t){e.uniform2iv(this.addr,t)}function Kc(e,t){e.uniform3iv(this.addr,t)}function qc(e,t){e.uniform4iv(this.addr,t)}function Jc(e,t){e.uniform1uiv(this.addr,t)}function Yc(e,t){e.uniform2uiv(this.addr,t)}function Xc(e,t){e.uniform3uiv(this.addr,t)}function Zc(e,t){e.uniform4uiv(this.addr,t)}function Qc(e,t,n){let r=this.cache,i=t.length,a=gc(n,i);mc(r,a)||(e.uniform1iv(this.addr,a),hc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?ic:rc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function $c(e,t,n){let r=this.cache,i=t.length,a=gc(n,i);mc(r,a)||(e.uniform1iv(this.addr,a),hc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||oc,a[e])}function el(e,t,n){let r=this.cache,i=t.length,a=gc(n,i);mc(r,a)||(e.uniform1iv(this.addr,a),hc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||sc,a[e])}function tl(e,t,n){let r=this.cache,i=t.length,a=gc(n,i);mc(r,a)||(e.uniform1iv(this.addr,a),hc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||ac,a[e])}function nl(e){switch(e){case 5126:return Lc;case 35664:return Rc;case 35665:return zc;case 35666:return Bc;case 35674:return Vc;case 35675:return Hc;case 35676:return Uc;case 5124:case 35670:return Wc;case 35667:case 35671:return Gc;case 35668:case 35672:return Kc;case 35669:case 35673:return qc;case 5125:return Jc;case 36294:return Yc;case 36295:return Xc;case 36296:return Zc;case 35678:case 36198:case 36298:case 36306:case 35682:return Qc;case 35679:case 36299:case 36307:return $c;case 35680:case 36300:case 36308:case 36293:return el;case 36289:case 36303:case 36311:case 36292:return tl}}var rl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ic(t.type)}},il=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nl(t.type)}},al=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},ol=/(\w+)(\])?(\[|\.)?/g;function sl(e,t){e.seq.push(t),e.map[t.id]=t}function cl(e,t,n){let r=e.name,i=r.length;for(ol.lastIndex=0;;){let a=ol.exec(r),o=ol.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){sl(n,l===void 0?new rl(s,e,t):new il(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new al(s),sl(n,e)),n=e}}}var ll=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);cl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function ul(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var dl=37297,fl=0;function pl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var ml=new Rt;function hl(e){Ut._getMatrix(ml,Ut.workingColorSpace,e);let t=`mat3( ${ml.elements.map(e=>e.toFixed(4))} )`;switch(Ut.getTransfer(e)){case Ge:return[t,`LinearTransferOETF`];case Ke:return[t,`sRGBTransferOETF`];default:return P(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function gl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+pl(e.getShaderSource(t),r)}return i}function _l(e,t){let n=hl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var vl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function yl(e,t){let n=vl[t];return n===void 0?(P(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var bl=new L;function xl(){return Ut.getLuminanceCoefficients(bl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${bl.x.toFixed(4)}, ${bl.y.toFixed(4)}, ${bl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Sl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Tl).join(`
`)}function Cl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function wl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Tl(e){return e!==``}function El(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ol=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(e){return e.replace(Ol,jl)}var Al=new Map;function jl(e,t){let n=gs[t];if(n===void 0){let e=Al.get(t);if(e!==void 0)n=gs[e],P(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return kl(n)}var Ml=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nl(e){return e.replace(Ml,Pl)}function Pl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Fl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Il={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Ll(e){return Il[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Rl={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function zl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Rl[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Bl={302:`ENVMAP_MODE_REFRACTION`};function Vl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Bl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Hl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Ul(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Hl[e.combine]||`ENVMAP_BLENDING_NONE`}function Wl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Gl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Ll(n),l=zl(n),u=Vl(n),d=Ul(n),f=Wl(n),p=Sl(n),m=Cl(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Tl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Tl).join(`
`),_.length>0&&(_+=`
`)):(g=[Fl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Tl).join(`
`),_=[Fl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:gs.tonemapping_pars_fragment,n.toneMapping===0?``:yl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,gs.colorspace_pars_fragment,_l(`linearToOutputTexel`,n.outputColorSpace),xl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Tl).join(`
`)),o=kl(o),o=El(o,n),o=Dl(o,n),s=kl(s),s=El(s,n),s=Dl(s,n),o=Nl(o),s=Nl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=ul(i,i.VERTEX_SHADER,y),S=ul(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=gl(i,x,`vertex`),n=gl(i,S,`fragment`);F(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):P(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new ll(i,h),T=wl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,dl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=fl++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Kl=0,ql=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Jl(e),t.set(e,n)),n}},Jl=class{constructor(e){this.id=Kl++,this.code=e,this.usedTimes=0}};function Yl(e){return e===1030||e===37490||e===36285}function Xl(e,t,n,r,i,a){let o=new _n,s=new ql,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&P(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,ee,k;if(C){let e=_s[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),ee=e.id,k=t.id}let te=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),re=h.isInstancedMesh===!0,A=h.isBatchedMesh===!0,ie=!!i.map,j=!!i.matcap,ae=!!x,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,fe=!!i.metalnessMap,pe=!!i.roughnessMap,me=i.anisotropy>0,he=i.clearcoat>0,ge=i.dispersion>0,_e=i.retroreflectivity>0,ve=i.iridescence>0,ye=i.sheen>0,be=i.transmission>0,xe=me&&!!i.anisotropyMap,Se=he&&!!i.clearcoatMap,Ce=he&&!!i.clearcoatNormalMap,we=he&&!!i.clearcoatRoughnessMap,Te=ve&&!!i.iridescenceMap,Ee=ve&&!!i.iridescenceThicknessMap,De=ye&&!!i.sheenColorMap,Oe=ye&&!!i.sheenRoughnessMap,ke=!!i.specularMap,Ae=!!i.specularColorMap,je=!!i.specularIntensityMap,Me=be&&!!i.transmissionMap,Ne=be&&!!i.thicknessMap,Pe=!!i.gradientMap,Fe=!!i.alphaMap,Ie=i.alphaTest>0,M=!!i.alphaHash,Le=!!i.extensions,Re=0;i.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Re=e.toneMapping);let ze={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:A,batchingColor:A&&h._colorsTexture!==null,instancing:re,instancingColor:re&&h.instanceColor!==null,instancingMorph:re&&h.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ut.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ie,matcap:j,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&Yl(i.normalMap.format),metalnessMap:fe,roughnessMap:pe,anisotropy:me,anisotropyMap:xe,clearcoat:he,clearcoatMap:Se,clearcoatNormalMap:Ce,clearcoatRoughnessMap:we,dispersion:ge,retroreflection:_e,iridescence:ve,iridescenceMap:Te,iridescenceThicknessMap:Ee,sheen:ye,sheenColorMap:De,sheenRoughnessMap:Oe,specularMap:ke,specularColorMap:Ae,specularIntensityMap:je,transmission:be,transmissionMap:Me,thicknessMap:Ne,gradientMap:Pe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Ie,alphaHash:M,combine:i.combine,mapUv:ie&&m(i.map.channel),aoMapUv:oe&&m(i.aoMap.channel),lightMapUv:se&&m(i.lightMap.channel),bumpMapUv:ce&&m(i.bumpMap.channel),normalMapUv:le&&m(i.normalMap.channel),displacementMapUv:ue&&m(i.displacementMap.channel),emissiveMapUv:de&&m(i.emissiveMap.channel),metalnessMapUv:fe&&m(i.metalnessMap.channel),roughnessMapUv:pe&&m(i.roughnessMap.channel),anisotropyMapUv:xe&&m(i.anisotropyMap.channel),clearcoatMapUv:Se&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:De&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&m(i.sheenRoughnessMap.channel),specularMapUv:ke&&m(i.specularMap.channel),specularColorMapUv:Ae&&m(i.specularColorMap.channel),specularIntensityMapUv:je&&m(i.specularIntensityMap.channel),transmissionMapUv:Me&&m(i.transmissionMap.channel),thicknessMapUv:Ne&&m(i.thicknessMap.channel),alphaMapUv:Fe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(le||me),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ie||Fe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ne,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Re,decodeVideoTexture:ie&&i.map.isVideoTexture===!0&&Ut.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Le&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Le&&i.extensions.multiDraw===!0||A)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=_s[t];n=Qa.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Gl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Zl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Ql(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function $l(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function eu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Ql),r.length>1&&r.sort(t||$l),i.length>1&&i.sort(t||$l)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function tu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new eu,e.set(t,[i])):n>=r.length?(i=new eu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function nu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new L,color:new Vn};break;case`SpotLight`:n={position:new L,direction:new L,color:new Vn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new L,color:new Vn,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new L,skyColor:new Vn,groundColor:new Vn};break;case`RectAreaLight`:n={color:new Vn,position:new L,halfWidth:new L,halfHeight:new L}}return e[t.id]=n,n}}}function ru(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var iu=0;function au(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function ou(e){let t=new nu,n=ru(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new L);let i=new L,a=new on,o=new on;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(au);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=R.LTC_FLOAT_1,r.rectAreaLTC2=R.LTC_FLOAT_2):(r.rectAreaLTC1=R.LTC_HALF_1,r.rectAreaLTC2=R.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=iu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function su(e){let t=new ou(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function cu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new su(e),t.set(n,[a])):r>=i.length?(a=new su(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var lu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,du=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],fu=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],pu=new on,mu=new L,hu=new L;function gu(e,t,n){let r=new sa,a=new I,o=new I,c=new en,l=new ao,u=new oo,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new to({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new I},radius:{value:4}},vertexShader:lu,fragmentShader:uu}),v=m.clone();v.defines.HORIZONTAL_PASS=1;let y=new zr;y.setAttribute(`position`,new wr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ji(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(P(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){P(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),o.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(o.x=Math.floor(f/y.x),a.x=o.x*y.x,p.mapSize.x=o.x),a.y>f&&(o.y=Math.floor(f/y.y),a.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){P(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new nn(a.x,a.y,{format:k,type:_,minFilter:s,magFilter:s,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Aa(a.x,a.y,g),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=E,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i}else d.isPointLight?(p.map=new qs(a.x),p.map.depthTexture=new ja(a.x,h)):(p.map=new nn(a.x,a.y),p.map.depthTexture=new Aa(a.x,a.y,h)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=E,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=s,p.map.depthTexture.magFilter=s):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let i=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),mu.setFromMatrixPosition(d.matrixWorld),e.position.copy(mu),hu.copy(e.position),hu.add(du[t]),e.up.copy(fu[t]),e.lookAt(hu),e.updateMatrixWorld(),n.makeTranslation(-mu.x,-mu.y,-mu.z),pu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(pu,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(c)}r=p.getFrustum(t),T(n,l,i,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new nn(a.x,a.y,{format:k,type:_}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,m,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function _u(e,t){function n(){let t=!1,n=new en,r=null,i=new en(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?fe(e.DEPTH_TEST):pe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ot[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?fe(e.STENCIL_TEST):pe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Vn(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,ne=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,A=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),re=A>=2):(A=parseFloat(/^WebGL (\d)/.exec(ie)[1]),re=A>=1);let j=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new en().fromArray(oe),le=new en().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),fe(e.DEPTH_TEST),o.setFunc(3),xe(!1),Se(1),fe(e.CULL_FACE),ye(0);function fe(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function pe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function me(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function he(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ge(t){return h!==t&&(e.useProgram(t),h=t,!0)}let _e={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};_e[103]=e.MIN,_e[104]=e.MAX;let ve={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ye(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(pe(e.BLEND),g=!1);return}if(g===!1&&(fe(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:F(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:F(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:F(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:F(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(_e[n],_e[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ve[r],ve[i],ve[o],ve[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function be(t,n){t.side===2?pe(e.CULL_FACE):fe(e.CULL_FACE);let r=t.side===1;n&&(r=!r),xe(r),t.blending===1&&t.transparent===!1?ye(0):ye(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),we(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?fe(e.SAMPLE_ALPHA_TO_COVERAGE):pe(e.SAMPLE_ALPHA_TO_COVERAGE)}function xe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function Se(t){t===0?pe(e.CULL_FACE):(fe(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function Ce(t){t!==ee&&(re&&e.lineWidth(t),ee=t)}function we(t,n,r){t?(fe(e.POLYGON_OFFSET_FILL),(k!==n||te!==r)&&(k=n,te=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):pe(e.POLYGON_OFFSET_FILL)}function Te(t){t?fe(e.SCISSOR_TEST):pe(e.SCISSOR_TEST)}function Ee(t){t===void 0&&(t=e.TEXTURE0+ne-1),j!==t&&(e.activeTexture(t),j=t)}function De(t,n,r){r===void 0&&(r=j===null?e.TEXTURE0+ne-1:j);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(j!==r&&(e.activeTexture(r),j=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function Oe(){let t=ae[j];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ke(){try{e.compressedTexImage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Ae(){try{e.compressedTexImage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function je(){try{e.texSubImage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Me(){try{e.texSubImage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Pe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Fe(){try{e.texStorage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Ie(){try{e.texStorage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function M(){try{e.texImage2D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Le(){try{e.texImage3D(...arguments)}catch(e){F(`WebGLState:`,e)}}function Re(t){return d[t]===void 0?e.getParameter(t):d[t]}function ze(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function N(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function Be(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function Ve(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function He(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ue(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,ae={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Vn(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:fe,disable:pe,bindFramebuffer:me,drawBuffers:he,useProgram:ge,setBlending:ye,setMaterial:be,setFlipSided:xe,setCullFace:Se,setLineWidth:Ce,setPolygonOffset:we,setScissorTest:Te,activeTexture:Ee,bindTexture:De,unbindTexture:Oe,compressedTexImage2D:ke,compressedTexImage3D:Ae,texImage2D:M,texImage3D:Le,pixelStorei:ze,getParameter:Re,updateUBOMapping:Ve,uniformBlockBinding:He,texStorage2D:Fe,texStorage3D:Ie,texSubImage2D:je,texSubImage3D:Me,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Pe,scissor:N,viewport:Be,reset:Ue}}function vu(e,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new I,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):$e(`canvas`)}function T(e,t,n){let r=1,i=Re(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),P(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&P(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function O(t){e.generateMipmap(t)}function ee(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(t,n,r,i,a,o=!1){if(t!==null){if(e[t]!==void 0)return e[t];P(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+t+`'`)}let s;i&&(s=u.get(`EXT_texture_norm16`),s||P(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let c=n;if(n===e.RED&&(r===e.FLOAT&&(c=e.R32F),r===e.HALF_FLOAT&&(c=e.R16F),r===e.UNSIGNED_BYTE&&(c=e.R8),r===e.UNSIGNED_SHORT&&s&&(c=s.R16_EXT),r===e.SHORT&&s&&(c=s.R16_SNORM_EXT)),n===e.RED_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.R8UI),r===e.UNSIGNED_SHORT&&(c=e.R16UI),r===e.UNSIGNED_INT&&(c=e.R32UI),r===e.BYTE&&(c=e.R8I),r===e.SHORT&&(c=e.R16I),r===e.INT&&(c=e.R32I)),n===e.RG&&(r===e.FLOAT&&(c=e.RG32F),r===e.HALF_FLOAT&&(c=e.RG16F),r===e.UNSIGNED_BYTE&&(c=e.RG8),r===e.UNSIGNED_SHORT&&s&&(c=s.RG16_EXT),r===e.SHORT&&s&&(c=s.RG16_SNORM_EXT)),n===e.RG_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RG8UI),r===e.UNSIGNED_SHORT&&(c=e.RG16UI),r===e.UNSIGNED_INT&&(c=e.RG32UI),r===e.BYTE&&(c=e.RG8I),r===e.SHORT&&(c=e.RG16I),r===e.INT&&(c=e.RG32I)),n===e.RGB_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGB8UI),r===e.UNSIGNED_SHORT&&(c=e.RGB16UI),r===e.UNSIGNED_INT&&(c=e.RGB32UI),r===e.BYTE&&(c=e.RGB8I),r===e.SHORT&&(c=e.RGB16I),r===e.INT&&(c=e.RGB32I)),n===e.RGBA_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGBA8UI),r===e.UNSIGNED_SHORT&&(c=e.RGBA16UI),r===e.UNSIGNED_INT&&(c=e.RGBA32UI),r===e.BYTE&&(c=e.RGBA8I),r===e.SHORT&&(c=e.RGBA16I),r===e.INT&&(c=e.RGBA32I)),n===e.RGB&&(r===e.UNSIGNED_SHORT&&s&&(c=s.RGB16_EXT),r===e.SHORT&&s&&(c=s.RGB16_SNORM_EXT),r===e.UNSIGNED_INT_5_9_9_9_REV&&(c=e.RGB9_E5),r===e.UNSIGNED_INT_10F_11F_11F_REV&&(c=e.R11F_G11F_B10F)),n===e.RGBA){let t=o?Ge:Ut.getTransfer(a);r===e.FLOAT&&(c=e.RGBA32F),r===e.HALF_FLOAT&&(c=e.RGBA16F),r===e.UNSIGNED_BYTE&&(c=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),r===e.UNSIGNED_SHORT&&s&&(c=s.RGBA16_EXT),r===e.SHORT&&s&&(c=s.RGBA16_SNORM_EXT),r===e.UNSIGNED_SHORT_4_4_4_4&&(c=e.RGBA4),r===e.UNSIGNED_SHORT_5_5_5_1&&(c=e.RGB5_A1)}return(c===e.R16F||c===e.R32F||c===e.RG16F||c===e.RG32F||c===e.RGBA16F||c===e.RGBA32F)&&u.get(`EXT_color_buffer_float`),c}function te(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,P(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function ne(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function re(e){let t=e.target;t.removeEventListener(`dispose`,re),ie(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function A(e){let t=e.target;t.removeEventListener(`dispose`,A),ae(t)}function ie(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&j(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function j(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function ae(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let oe=0;function se(){oe=0}function ce(){return oe}function le(e){oe=e}function ue(){let e=oe;return e>=p.maxTextures&&P(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),oe+=1,e}function de(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function fe(t,n){let r=f.get(t);if(t.isVideoTexture&&M(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)P(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)P(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Ce(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function pe(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){Ce(r,t,n);return}t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null),d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n)}function me(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){Ce(r,t,n);return}d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function he(t,n){let r=f.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&r.__version!==t.version){we(r,t,n);return}d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let ge={[t]:e.REPEAT,[n]:e.CLAMP_TO_EDGE,[r]:e.MIRRORED_REPEAT},_e={[i]:e.NEAREST,[a]:e.NEAREST_MIPMAP_NEAREST,[o]:e.NEAREST_MIPMAP_LINEAR,[s]:e.LINEAR,[c]:e.LINEAR_MIPMAP_NEAREST,[l]:e.LINEAR_MIPMAP_LINEAR},ve={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ye(t,n){if(n.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(n.magFilter===1006||n.magFilter===1007||n.magFilter===1005||n.magFilter===1008||n.minFilter===1006||n.minFilter===1007||n.minFilter===1005||n.minFilter===1008)&&P(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(t,e.TEXTURE_WRAP_S,ge[n.wrapS]),e.texParameteri(t,e.TEXTURE_WRAP_T,ge[n.wrapT]),(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)&&e.texParameteri(t,e.TEXTURE_WRAP_R,ge[n.wrapR]),e.texParameteri(t,e.TEXTURE_MAG_FILTER,_e[n.magFilter]),e.texParameteri(t,e.TEXTURE_MIN_FILTER,_e[n.minFilter]),n.compareFunction&&(e.texParameteri(t,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(t,e.TEXTURE_COMPARE_FUNC,ve[n.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(n.magFilter===1003||n.minFilter!==1005&&n.minFilter!==1008||n.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(n.anisotropy>1||f.get(n).__currentAnisotropy){let r=u.get(`EXT_texture_filter_anisotropic`);e.texParameterf(t,r.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(n.anisotropy,p.getMaxAnisotropy())),f.get(n).__currentAnisotropy=n.anisotropy}}}function be(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,re));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=de(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&j(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function xe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Se(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=xe(r.start,n.width,4),c=xe(t.start,n.width,4);r.start<=i+1&&s===c&&xe(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=d.getParameter(e.UNPACK_ROW_LENGTH),c=d.getParameter(e.UNPACK_SKIP_PIXELS),l=d.getParameter(e.UNPACK_SKIP_ROWS);d.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;d.pixelStorei(e.UNPACK_SKIP_PIXELS,l),d.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),d.pixelStorei(e.UNPACK_ROW_LENGTH,s),d.pixelStorei(e.UNPACK_SKIP_PIXELS,c),d.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function Ce(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=be(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){if(d.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=Ut.getPrimaries(Ut.workingColorSpace),r=n.colorSpace===``?null:Ut.getPrimaries(n.colorSpace),i=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=T(n.image,!1,p.maxTextureSize);t=Le(n,t);let c=m.convert(n.format,n.colorSpace),l=m.convert(n.type),u=k(n.internalFormat,c,l,n.normalized,n.colorSpace,n.isVideoTexture);ye(i,n);let f,h=n.mipmaps,g=n.isVideoTexture!==!0,_=s.__version===void 0||a===!0,v=o.dataReady,y=ne(n,t);if(n.isDepthTexture)u=te(n.format===D,n.type),_&&(g?d.texStorage2D(e.TEXTURE_2D,1,u,t.width,t.height):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,null));else if(n.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data);n.generateMipmaps=!1}else g?(_&&d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height),v&&Se(n,t,c,l)):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,t.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){g&&_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,t.depth);for(let r=0,i=h.length;r<i;r++)if(f=h[r],n.format!==1023){if(c!==null){if(g){if(v){if(n.layerUpdates.size>0){let t=fs(f.width,f.height,n.format,n.type);for(let i of n.layerUpdates){let n=f.data.subarray(i*t/f.data.BYTES_PER_ELEMENT,(i+1)*t/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,i,f.width,f.height,1,c,n)}}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,f.data)}}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,f.data,0,0)}else P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,l,f.data):d.texImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,c,l,f.data);n.layerUpdates.size>0&&n.clearLayerUpdates()}else{g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],n.format===1023?g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data):c===null?P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,f.data):d.compressedTexImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,f.data)}}else if(n.isDataArrayTexture){if(g){if(_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,t.width,t.height,t.depth),v){if(n.layerUpdates.size>0){let r=fs(t.width,t.height,n.format,n.type);for(let i of n.layerUpdates){let n=t.data.subarray(i*r/t.data.BYTES_PER_ELEMENT,(i+1)*r/t.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,c,l,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)}}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,u,t.width,t.height,t.depth,0,c,l,t.data)}else if(n.isData3DTexture)g?(_&&d.texStorage3D(e.TEXTURE_3D,y,u,t.width,t.height,t.depth),v&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)):d.texImage3D(e.TEXTURE_3D,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isFramebufferTexture){if(_){if(g)d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<y;t++)d.texImage2D(e.TEXTURE_2D,t,u,n,r,0,c,l,null),n>>=1,r>>=1}}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),b.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Re(h[0]);d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,c,l,f):d.texImage2D(e.TEXTURE_2D,t,u,c,l,f);n.generateMipmaps=!1}else if(g){if(_){let n=Re(t);d.texStorage2D(e.TEXTURE_2D,y,u,n.width,n.height)}v&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,c,l,t)}else d.texImage2D(e.TEXTURE_2D,0,u,c,l,t);E(n)&&O(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function we(t,n,r){if(n.image.length!==6)return;let i=be(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=Ut.getPrimaries(Ut.workingColorSpace),s=n.colorSpace===``?null:Ut.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=T(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=Le(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=k(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=ne(n,h);ye(e.TEXTURE_CUBE_MAP,n);let C;if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=Re(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}E(n)&&O(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function Te(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=k(r.internalFormat,s,c,r.normalized,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),Ie(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,Fe(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=te(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ie(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Fe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Fe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=k(a.internalFormat,o,s,a.normalized,a.colorSpace);Ie(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Fe(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Fe(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function De(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let a=f.get(n.depthTexture);if(a.__renderTarget=n,(!a.__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),i){if(a.__webglInit===void 0&&(a.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,re)),a.__webglTexture===void 0){a.__webglTexture=e.createTexture(),d.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),ye(e.TEXTURE_CUBE_MAP,n.depthTexture);let t=m.convert(n.depthTexture.format),r=m.convert(n.depthTexture.type),i;n.depthTexture.format===1026?i=e.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(i=e.DEPTH24_STENCIL8);for(let a=0;a<6;a++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,i,n.width,n.height,0,t,r,null)}}else fe(n.depthTexture,0);let o=a.__webglTexture,s=Fe(n),c=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,l=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)Ie(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else if(n.depthTexture.format===1027)Ie(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Oe(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)for(let e=0;e<6;e++)De(n.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?De(n.__webglFramebuffer[0],t,0):De(n.__webglFramebuffer,t,0)}}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),Ee(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),Ee(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}}d.bindFramebuffer(e.FRAMEBUFFER,null)}function ke(t,n,r){let i=f.get(t);n!==void 0&&Te(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&Oe(t)}function Ae(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,A);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&Ie(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=k(i.internalFormat,o,s,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),l=Fe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),Ee(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),ye(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)Te(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else Te(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);E(n)&&O(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),ye(s,i),Te(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),E(i)&&O(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),ye(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)Te(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else Te(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);E(n)&&O(a),d.unbindTexture()}t.depthBuffer&&Oe(t)}function je(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(E(r)){let t=ee(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),O(t),d.unbindTexture()}}}let Me=[],Ne=[];function Pe(t){if(t.samples>0){if(Ie(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer);let l=t.texture.mipmaps;l&&l.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(Me.length=0,Ne.length=0,Me.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Me.push(o),Ne.push(o),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ne)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Me))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Fe(e){return Math.min(p.maxSamples,e.samples)}function Ie(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function M(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Le(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Ut.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&P(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):F(`WebGLTextures: Unsupported texture color space:`,n)),t}function Re(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ue,this.resetTextureUnits=se,this.getTextureUnits=ce,this.setTextureUnits=le,this.setTexture2D=fe,this.setTexture2DArray=pe,this.setTexture3D=me,this.setTextureCube=he,this.rebindTextures=ke,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function yu(e,t){function n(n,r=``){let i,a=Ut.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var bu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xu=`
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

}`,Su=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ma(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new to({vertexShader:bu,fragmentShader:xu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ji(new Wa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cu=class extends st{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,d=null,f=null,p=null,m=null,g=typeof XRWebGLBinding<`u`,_=new Su,v={},y=t.getContextAttributes(),x=null,S=null,C=[],w=[],O=new I,ee=null,k=null,te=new Bo;te.viewport=new en;let ne=new Bo;ne.viewport=new en;let re=[te,ne],A=new Xo,ie=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new In,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new In,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new In,C[e]=t),t.getHandSpace()};function ae(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function oe(){r.removeEventListener(`select`,ae),r.removeEventListener(`selectstart`,ae),r.removeEventListener(`selectend`,ae),r.removeEventListener(`squeeze`,ae),r.removeEventListener(`squeezestart`,ae),r.removeEventListener(`squeezeend`,ae),r.removeEventListener(`end`,oe),r.removeEventListener(`inputsourceschange`,se);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}ie=null,j=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(ee),e.setSize(O.width,O.height,!1),k!==null){let e=k.camera;e.fov=k.fov,e.zoom=k.zoom,e.updateProjectionMatrix(),k=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&P(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&P(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ae),r.addEventListener(`selectstart`,ae),r.addEventListener(`selectend`,ae),r.addEventListener(`squeeze`,ae),r.addEventListener(`squeezestart`,ae),r.addEventListener(`squeezeend`,ae),r.addEventListener(`end`,oe),r.addEventListener(`inputsourceschange`,se),y.xrCompatible!==!0&&await t.makeXRCompatible(),ee=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?D:E,a=y.stencil?b:h);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new nn(f.textureWidth,f.textureHeight,{format:T,type:u,depthTexture:new Aa(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new nn(p.framebufferWidth,p.framebufferHeight,{format:T,type:u,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),he.setContext(r),he.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function se(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ce=new L,le=new L;function ue(e,t,n){ce.setFromMatrixPosition(t.matrixWorld),le.setFromMatrixPosition(n.matrixWorld);let r=ce.distanceTo(le),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function de(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),A.near=ne.near=te.near=t,A.far=ne.far=te.far=n,(ie!==A.near||j!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),ie=A.near,j=A.far),A.layers.mask=e.layers.mask|6,te.layers.mask=A.layers.mask&-5,ne.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;de(A,i);for(let e=0;e<a.length;e++)de(a[e],i);a.length===2?ue(A,te,ne):A.projectionMatrix.copy(te.projectionMatrix),k===null&&e.isPerspectiveCamera&&(k={camera:e,fov:e.fov,zoom:e.zoom}),fe(e,A,i)};function fe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=dt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(A)},this.getCameraTexture=function(e){return v[e]};let pe=null;function me(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=re[n];o===void 0&&(o=new Bo,o.layers.enable(n),o.viewport=new en,re[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Ma,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}pe&&pe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let he=new ms;he.setAnimationLoop(me),this.setAnimationLoop=function(e){pe=e},this.dispose=function(){}}},wu=new on,Tu=new Rt;Tu.set(-1,0,0,0,1,0,0,0,1);function Eu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Za(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(wu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Tu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Du(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return F(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?P(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):P(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Ou=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ku=null;function Au(){return ku===null&&(ku=new Gi(Ou,16,16,k,_),ku.name=`DFG_LUT`,ku.minFilter=s,ku.magFilter=s,ku.wrapS=n,ku.wrapT=n,ku.generateMipmaps=!1,ku.needsUpdate=!0),ku}var ju=class{constructor(e={}){let{canvas:t=et(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1,outputBufferType:g=u}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=g,C=new Set([ne,te,ee]),w=new Set([u,h,p,b,v,y]),T=new Uint32Array(4),E=new Int32Array(4),D=new L,O=null,k=null,re=[],A=[],ie=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ae=!1,oe=null,se=null,ce=null,le=null;this._outputColorSpace=Ue;let ue=0,de=0,fe=null,pe=-1,me=null,he=new en,ge=new en,_e=null,ve=new Vn(0),ye=0,be=t.width,xe=t.height,Se=1,Ce=null,we=null,Te=new en(0,0,be,xe),Ee=new en(0,0,be,xe),De=!1,Oe=new sa,ke=!1,Ae=!1,je=new on,Me=new L,Ne=new en,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function Ie(){return fe===null?Se:1}let M=n;function Le(e,n){return t.getContext(e,n)}let Re,ze,N,Be,Ve,He,We,Ge,Ke,qe,Je,Ye,Ze,Qe,$e,tt,rt,it,ot,st,ct,lt,ut;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,pt,!1),t.addEventListener(`webglcontextrestored`,mt,!1),t.addEventListener(`webglcontextcreationerror`,ht,!1),M===null){let t=`webgl2`;if(M=Le(t,e),M===null)throw Le(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}dt()}catch(e){throw t.removeEventListener(`webglcontextlost`,pt,!1),t.removeEventListener(`webglcontextrestored`,mt,!1),t.removeEventListener(`webglcontextcreationerror`,ht,!1),F(`WebGLRenderer: `+e.message),e}function dt(){Re=new Ys(M),Re.init(),ct=new yu(M,Re),ze=new ws(M,Re,e,ct),N=new _u(M,Re),ze.reversedDepthBuffer&&m&&N.buffers.depth.setReversed(!0),se=M.createFramebuffer(),ce=M.createFramebuffer(),le=M.createFramebuffer(),Be=new Qs(M),Ve=new Zl,He=new vu(M,Re,N,Ve,ze,ct,Be),We=new Js(j),Ge=new hs(M),lt=new Ss(M,Ge),Ke=new Xs(M,Ge,Be,lt),qe=new ec(M,Ke,Ge,lt,Be),it=new $s(M,ze,He),$e=new Ts(Ve),Je=new Xl(j,We,Re,ze,lt,$e),Ye=new Eu(j,Ve),Ze=new tu,Qe=new cu(Re),rt=new xs(j,We,N,qe,x,s),tt=new gu(j,qe,ze),ut=new Du(M,Be,ze,N),ot=new Cs(M,Re,Be),st=new Zs(M,Re,Be),Be.programs=Je.programs,j.capabilities=ze,j.extensions=Re,j.properties=Ve,j.renderLists=Ze,j.shadowMap=tt,j.state=N,j.info=Be}S!==1009&&(ie=new nc(S,t.width,t.height,o,r,i));let ft=new Cu(j,M);this.xr=ft,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){let e=Re.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Re.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(e){e!==void 0&&(Se=e,this.setSize(be,xe,!1))},this.getSize=function(e){return e.set(be,xe)},this.setSize=function(e,n,r=!0){if(ft.isPresenting){P(`WebGLRenderer: Can't change size while VR device is presenting.`);return}be=e,xe=n,t.width=Math.floor(e*Se),t.height=Math.floor(n*Se),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ie!==null&&ie.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(be*Se,xe*Se).floor()},this.setDrawingBufferSize=function(e,n,r){be=e,xe=n,Se=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){F(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){P(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ie.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(he)},this.getViewport=function(e){return e.copy(Te)},this.setViewport=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),N.viewport(he.copy(Te).multiplyScalar(Se).round())},this.getScissor=function(e){return e.copy(Ee)},this.setScissor=function(e,t,n,r){e.isVector4?Ee.set(e.x,e.y,e.z,e.w):Ee.set(e,t,n,r),N.scissor(ge.copy(Ee).multiplyScalar(Se).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(e){N.setScissorTest(De=e)},this.setOpaqueSort=function(e){Ce=e},this.setTransparentSort=function(e){we=e},this.getClearColor=function(e){return e.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(fe!==null){let t=fe.texture.format;e=C.has(t)}if(e){let e=fe.texture.type,t=w.has(e),n=rt.getClearColor(),r=rt.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,M.clearBufferuiv(M.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,M.clearBufferiv(M.COLOR,0,E))}else r|=M.COLOR_BUFFER_BIT}t&&(r|=M.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&M.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),oe=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,pt,!1),t.removeEventListener(`webglcontextrestored`,mt,!1),t.removeEventListener(`webglcontextcreationerror`,ht,!1),rt.dispose(),Ze.dispose(),Qe.dispose(),Ve.dispose(),We.dispose(),qe.dispose(),lt.dispose(),ut.dispose(),Je.dispose(),ft.dispose(),ft.removeEventListener(`sessionstart`,St),ft.removeEventListener(`sessionend`,Ct),wt.stop()};function pt(e){e.preventDefault(),nt(`WebGLRenderer: Context Lost.`),ae=!0}function mt(){nt(`WebGLRenderer: Context Restored.`),ae=!1;let e=Be.autoReset,t=tt.enabled,n=tt.autoUpdate,r=tt.needsUpdate,i=tt.type;dt(),Be.autoReset=e,tt.enabled=t,tt.autoUpdate=n,tt.needsUpdate=r,tt.type=i}function ht(e){F(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function gt(e){let t=e.target;t.removeEventListener(`dispose`,gt),_t(t)}function _t(e){vt(e),Ve.remove(e)}function vt(e){let t=Ve.get(e).programs;t!==void 0&&(t.forEach(function(e){Je.releaseProgram(e)}),e.isShaderMaterial&&Je.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Pe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Pt(e,t,n,r,i);N.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ke.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;lt.setup(i,r,s,n,c);let h,g=ot;if(c!==null&&(h=Ge.get(c),g=st,g.setIndex(h)),i.isMesh)r.wireframe===!0?(N.setLineWidth(r.wireframeLinewidth*Ie()),g.setMode(M.LINES)):g.setMode(M.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),N.setLineWidth(e*Ie()),i.isLineSegments?g.setMode(M.LINES):i.isLineLoop?g.setMode(M.LINE_LOOP):g.setMode(M.LINE_STRIP)}else i.isPoints?g.setMode(M.POINTS):i.isSprite&&g.setMode(M.TRIANGLES);if(i.isBatchedMesh){if(Re.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ge.get(c).bytesPerElement:1,o=Ve.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(M,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function yt(e,t,n,r){oe!==null&&e.isNodeMaterial&&oe.setObject(r,e),ke===!0&&$e.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,At(e,t,r),e.side=0,e.needsUpdate=!0,At(e,t,r),e.side=2):At(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),oe!==null&&oe.renderStart(e,t,n),k=Qe.get(n),k.init(t),A.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),oe!==null&&oe.updateLights(k.state.lightsArray),Ae=this.localClippingEnabled,ke=$e.init(this.clippingPlanes,Ae),ke===!0&&$e.setGlobalState(this.clippingPlanes,t),oe!==null&&tt.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];yt(o,n,t,e),r.add(o)}else yt(i,n,t,e),r.add(i)}}),k=A.pop(),oe!==null&&oe.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=Ve.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Re.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let bt=null;function xt(e){bt&&bt(e)}function St(){wt.stop()}function Ct(){wt.start()}let wt=new ms;wt.setAnimationLoop(xt),typeof self<`u`&&wt.setContext(self),this.setAnimationLoop=function(e){bt=e,ft.setAnimationLoop(e),e===null?wt.stop():wt.start()},ft.addEventListener(`sessionstart`,St),ft.addEventListener(`sessionend`,Ct),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){F(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ae===!0)return;oe!==null&&oe.renderStart(e,t);let n=ft.enabled===!0&&ft.isPresenting===!0,r=ie!==null&&(fe===null||n)&&ie.begin(j,fe);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ie===null||ie.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(t),t=ft.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,fe),k=Qe.get(e,A.length),k.init(t),k.state.textureUnits=He.getTextureUnits(),A.push(k),je.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Oe.setFromProjectionMatrix(je,Xe,t.reversedDepth),Ae=this.localClippingEnabled,ke=$e.init(this.clippingPlanes,Ae),O=Ze.get(e,re.length),O.init(),re.push(O),ft.enabled===!0&&ft.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&Tt(e,t,-1/0,j.sortObjects)}Tt(e,t,0,j.sortObjects),O.finish(),oe!==null&&oe.updateLights(k.state.lightsArray),j.sortObjects===!0&&O.sort(Ce,we),Fe=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Fe&&rt.addToRenderList(O,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ke===!0&&$e.beginShadows();let i=k.state.shadowsArray;if(tt.render(i,e,t),ke===!0&&$e.endShadows(),(r&&ie.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Dt(n,r,e,a)}Fe&&rt.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Et(O,e,n,n.viewport)}}else r.length>0&&Dt(n,r,e,t),Fe&&rt.render(e),Et(O,e,t)}fe!==null&&de===0&&(He.updateMultisampleRenderTarget(fe),He.updateRenderTargetMipmap(fe)),r&&ie.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),lt.resetDefaultState(),pe=-1,me=null,A.pop(),A.length>0?(k=A[A.length-1],He.setTextureUnits(k.state.textureUnits),ke===!0&&$e.setGlobalState(j.clippingPlanes,k.state.camera)):k=null,re.pop(),O=re.length>0?re[re.length-1]:null,oe!==null&&oe.renderEnd()};function Tt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Oe)){r&&Ne.setFromMatrixPosition(e.matrixWorld).applyMatrix4(je);let i=qe.update(e),a=e.material;a.visible&&O.push(e,i,a,n,Ne.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Oe))){let i=qe.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ne.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ne.copy(e.boundingSphere.center)),Ne.applyMatrix4(e.matrixWorld).applyMatrix4(je)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,Ne.z,s,t)}}else a.visible&&O.push(e,i,a,n,Ne.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Tt(i[e],t,n,r)}function Et(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),ke===!0&&$e.setGlobalState(j.clippingPlanes,n),r&&N.viewport(he.copy(r)),i.length>0&&Ot(i,t,n),a.length>0&&Ot(a,t,n),o.length>0&&Ot(o,t,n),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function Dt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Re.has(`EXT_color_buffer_half_float`)||Re.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new nn(1,1,{generateMipmaps:!0,type:e?_:u,minFilter:l,samples:Math.max(4,ze.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ut.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||he;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),c=j.getActiveCubeFace(),d=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(ve),ye=j.getClearAlpha(),ye<1&&j.setClearColor(16777215,.5),j.clear(),Fe&&rt.render(n);let f=j.toneMapping;j.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),ke===!0&&$e.setGlobalState(j.clippingPlanes,r),Ot(e,n,r),He.updateMultisampleRenderTarget(a),He.updateRenderTargetMipmap(a),Re.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,kt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(He.updateMultisampleRenderTarget(a),He.updateRenderTargetMipmap(a))}j.setRenderTarget(s,c,d),j.setClearColor(ve,ye),p!==void 0&&(r.viewport=p),j.toneMapping=f}function Ot(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&kt(o,t,n,s,l,c)}}function kt(e,t,n,r,i,a){oe!==null&&i.isNodeMaterial&&oe.setObject(e,i),e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function At(e,t,n){t.isScene!==!0&&(t=Pe);let r=Ve.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=Je.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=Je.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=We.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,gt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Mt(e,s),d}else s.uniforms=Je.getUniforms(e),oe!==null&&e.isNodeMaterial&&oe.build(e,n,s),e.onBeforeCompile(s,j),d=Je.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=$e.uniform),Mt(e,s),r.needsLights=Ft(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function jt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=ll.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Mt(e,t){let n=Ve.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Nt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Pt(e,t,n,r,i){t.isScene!==!0&&(t=Pe),He.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=fe===null?j.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ut.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=We.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=Ve.get(r),y=k.state.lights;if(ke===!0&&(Ae===!0||e!==me)){let t=e===me&&r.id===pe;$e.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==$e.numPlanes||v.numIntersection!==$e.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=At(r,t,i),oe&&r.isNodeMaterial&&oe.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(N.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==pe&&(pe=r.id,C=!0),v.needsLights){let e=Nt(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||me!==e){N.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(M,`projectionMatrix`,e.projectionMatrix),T.setValue(M,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(M,Me.setFromMatrixPosition(e.matrixWorld)),ze.logarithmicDepthBuffer&&T.setValue(M,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(M,`isOrthographic`,e.isOrthographicCamera===!0),me!==e&&(me=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(M,`sunShadowMap`,y.state.sunShadowMap,He),y.state.directionalShadowMap.length>0&&T.setValue(M,`directionalShadowMap`,y.state.directionalShadowMap,He),y.state.spotShadowMap.length>0&&T.setValue(M,`spotShadowMap`,y.state.spotShadowMap,He),y.state.pointShadowMap.length>0&&T.setValue(M,`pointShadowMap`,y.state.pointShadowMap,He)),i.isSkinnedMesh){T.setOptional(M,i,`bindMatrix`),T.setOptional(M,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(M,`boneTexture`,e.boneTexture,He))}i.isBatchedMesh&&(T.setOptional(M,i,`batchingTexture`),T.setValue(M,`batchingTexture`,i._matricesTexture,He),T.setOptional(M,i,`batchingIdTexture`),T.setValue(M,`batchingIdTexture`,i._indirectTexture,He),T.setOptional(M,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(M,`batchingColorTexture`,i._colorsTexture,He));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&it.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(M,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=Au()),C){if(T.setValue(M,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&I(E,w),a&&r.fog===!0&&Ye.refreshFogUniforms(E,a),Ye.refreshMaterialUniforms(E,r,Se,xe,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}ll.upload(M,jt(v),E,He)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(ll.upload(M,jt(v),E,He),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(M,`center`,i.center),T.setValue(M,`modelViewMatrix`,i.modelViewMatrix),T.setValue(M,`normalMatrix`,i.normalMatrix),T.setValue(M,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ut.update(n,x),ut.bind(n,x)}}return x}function I(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ft(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return fe},this.setRenderTargetTextures=function(e,t,n){let r=Ve.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),Ve.get(e.texture).__webglTexture=t,Ve.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=Ve.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){fe=e,ue=t,de=n;let r=null,i=!1,a=!1;if(e){let o=Ve.get(e);if(o.__useDefaultFramebuffer!==void 0){N.bindFramebuffer(M.FRAMEBUFFER,o.__webglFramebuffer),he.copy(e.viewport),ge.copy(e.scissor),_e=e.scissorTest,N.viewport(he),N.scissor(ge),N.setScissorTest(_e),pe=-1;return}if(o.__webglFramebuffer===void 0)He.setupRenderTarget(e);else if(o.__hasExternalTextures)He.rebindTextures(e,Ve.get(e.texture).__webglTexture,Ve.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&Ve.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);He.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=Ve.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&He.useMultisampledRTT(e)===!1?Ve.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,he.copy(e.viewport),ge.copy(e.scissor),_e=e.scissorTest}else he.copy(Te).multiplyScalar(Se).floor(),ge.copy(Ee).multiplyScalar(Se).floor(),_e=De;if(n!==0&&(r=se),N.bindFramebuffer(M.FRAMEBUFFER,r)&&N.drawBuffers(e,r),N.viewport(he),N.scissor(ge),N.setScissorTest(_e),i){let r=Ve.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=Ve.get(e.textures[t]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=Ve.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,t.__webglTexture,n)}pe=-1};function It(e){let t=Ve.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=ze.textureFormatReadable(e.format),t.__typeReadable=ze.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){F(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=Ve.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){N.bindFramebuffer(M.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s);let u=It(o);if(u.__formatReadable===!1){F(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){F(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&M.readPixels(t,n,r,i,ct.convert(c),ct.convert(l),a)}finally{let e=fe===null?null:Ve.get(fe).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=Ve.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){N.bindFramebuffer(M.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s);let d=It(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,f),M.bufferData(M.PIXEL_PACK_BUFFER,a.byteLength,M.STREAM_READ),M.readPixels(t,n,r,i,ct.convert(l),ct.convert(u),0),M.bindBuffer(M.PIXEL_PACK_BUFFER,null);let p=fe===null?null:Ve.get(fe).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,p);let m=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await at(M,m,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,f),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,a),M.bindBuffer(M.PIXEL_PACK_BUFFER,null),M.deleteBuffer(f),M.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;He.setTexture2D(e,0),M.copyTexSubImage2D(M.TEXTURE_2D,n,0,0,o,s,i,a),N.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=ct.convert(t.format),_=ct.convert(t.type),v;t.isData3DTexture?(He.setTexture3D(t,0),v=M.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(He.setTexture2DArray(t,0),v=M.TEXTURE_2D_ARRAY):(He.setTexture2D(t,0),v=M.TEXTURE_2D),N.activeTexture(M.TEXTURE0),N.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,t.flipY),N.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),N.pixelStorei(M.UNPACK_ALIGNMENT,t.unpackAlignment);let y=N.getParameter(M.UNPACK_ROW_LENGTH),b=N.getParameter(M.UNPACK_IMAGE_HEIGHT),x=N.getParameter(M.UNPACK_SKIP_PIXELS),S=N.getParameter(M.UNPACK_SKIP_ROWS),C=N.getParameter(M.UNPACK_SKIP_IMAGES);N.pixelStorei(M.UNPACK_ROW_LENGTH,h.width),N.pixelStorei(M.UNPACK_IMAGE_HEIGHT,h.height),N.pixelStorei(M.UNPACK_SKIP_PIXELS,l),N.pixelStorei(M.UNPACK_SKIP_ROWS,u),N.pixelStorei(M.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=Ve.get(e),r=Ve.get(t),h=Ve.get(n.__renderTarget),g=Ve.get(r.__renderTarget);N.bindFramebuffer(M.READ_FRAMEBUFFER,h.__webglFramebuffer),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Ve.get(e).__webglTexture,i,d+n),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Ve.get(t).__webglTexture,a,m+n)),M.blitFramebuffer(l,u,o,s,f,p,o,s,M.DEPTH_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||Ve.has(e)){let n=Ve.get(e),r=Ve.get(t);N.bindFramebuffer(M.READ_FRAMEBUFFER,ce),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,le);for(let e=0;e<c;e++)w?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,n.__webglTexture,i),T?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,r.__webglTexture,a),i===0?T?M.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):M.copyTexSubImage2D(v,a,f,p,l,u,o,s):M.blitFramebuffer(l,u,o,s,f,p,o,s,M.COLOR_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?M.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h);N.pixelStorei(M.UNPACK_ROW_LENGTH,y),N.pixelStorei(M.UNPACK_IMAGE_HEIGHT,b),N.pixelStorei(M.UNPACK_SKIP_PIXELS,x),N.pixelStorei(M.UNPACK_SKIP_ROWS,S),N.pixelStorei(M.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&M.generateMipmap(v),N.unbindTexture()},this.initRenderTarget=function(e){Ve.get(e).__webglFramebuffer===void 0&&He.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?He.setTextureCube(e,0):e.isData3DTexture?He.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?He.setTexture2DArray(e,0):He.setTexture2D(e,0),N.unbindTexture()},this.resetState=function(){ue=0,de=0,fe=null,N.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Xe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ut._getUnpackColorSpace()}},Mu=e=>`${(Math.abs(e)*100).toFixed(1).replace(/\.0$/,``)}%`,Nu=[{id:`orcbane`,name:`Orcbane`,field:`orcBane`,anchor:.12,pool:`grip`,text:e=>`+${Mu(e)} damage to orcs`},{id:`bonebreaker`,name:`Bonebreaker`,field:`boneBane`,anchor:.12,pool:`grip`,text:e=>`+${Mu(e)} damage to the Risen Dead`},{id:`hivebane`,name:`Hivebane`,field:`hiveBane`,anchor:.12,pool:`grip`,text:e=>`+${Mu(e)} damage to the Hive`},{id:`lifesteal`,name:`Lifesteal`,field:`lifesteal`,anchor:.02,pool:`grip`,text:e=>`heal ${Mu(e)} of the damage you deal`},{id:`siphon`,name:`Siphon`,field:`siphon`,anchor:.4,pool:`grip`,behavior:!0,text:e=>`+${e.toFixed(2)} Magic per hit`},{id:`dig_speed`,name:`Deepdelving`,field:`digSpeed`,anchor:.12,pool:`grip`,behavior:!0,cls:`digger`,text:e=>`dig ${Mu(e)} faster`},{id:`runewright`,name:`Runewright`,field:`towerRate`,anchor:.08,pool:`grip`,behavior:!0,cls:`engineer`,text:e=>`towers you build fire ${Mu(e)} faster`},{id:`thorns`,name:`Thorns`,field:`thorns`,anchor:.12,pool:`armor`,slots:{chest:3},text:e=>`melee hits on you bite back for ${Mu(e)}`},{id:`surefoot`,name:`Surefoot`,field:`staminaCost`,anchor:.1,pool:`armor`,slots:{boots:3},text:e=>`everything costs ${Mu(e)} less Stamina`},{id:`delver`,name:`Delver`,field:`digSpeed`,anchor:.1,pool:`armor`,slots:{legs:3,bracers:3},text:e=>`dig ${Mu(e)} faster`},{id:`lifesteal_armor`,name:`Leeching`,field:`lifesteal`,anchor:.01,pool:`armor`,slots:{bracers:3},text:e=>`heal ${Mu(e)} of the damage you deal`},{id:`runic_haste`,name:`Runic Haste`,field:`cooldown`,anchor:.06,pool:`armor`,slots:{bracers:3,amulet:3},text:e=>`ability cooldowns ${Mu(e)} shorter`},{id:`surge`,name:`Surge`,field:`superRate`,anchor:.1,pool:`armor`,slots:{amulet:3},text:e=>`Super charges ${Mu(e)} faster`},{id:`quench`,name:`Quench`,field:`reloadSpeed`,anchor:.08,pool:`grip`,behavior:!0,text:e=>`reload ${Mu(e)} faster`},{id:`steady_draw`,name:`Steady Draw`,field:`drawSpeed`,anchor:.1,pool:`grip`,behavior:!0,cls:`sniper`,text:e=>`draw ${Mu(e)} faster`},{id:`stalwart`,name:`Stalwart`,field:`drainCut`,anchor:.15,pool:`grip`,behavior:!0,cls:`knight`,text:e=>`a raised shield drains ${Mu(e)} less Stamina`},{id:`swift_recovery`,name:`Swift Recovery`,field:`staminaRegen`,also:`magicRegen`,anchor:.15,pool:`armor`,slots:{amulet:3},text:e=>`Magic and Stamina refill ${Mu(e)} faster`}],Pu={orcBane:.3,boneBane:.3,hiveBane:.3,lifesteal:.05,siphon:1.2,digSpeed:.5,towerRate:.3,thorns:.4,staminaCost:.35,cooldown:.25,superRate:.4,reloadSpeed:.3,drawSpeed:.3,drainCut:.4,staminaRegen:.6,magicRegen:.6},Fu={hpPerSec:4,magicPerSec:5},Iu=`magic`,Lu={rate:{kind:`rate`,rate:1.4,hit:.75},punch:{kind:`punch`,rate:.7,hit:1.4}},Ru=(e,t,n,r)=>({id:`grip_${e}_${n}`,slot:`grip`,cls:e,name:r,gripDamage:.015,style:Lu[t]}),zu=[Ru(`assault`,`rate`,`swift`,`Swiftband Grip`),Ru(`assault`,`punch`,`doom`,`Doomband Grip`),Ru(`sniper`,`rate`,`quick`,`Quickstring Grip`),Ru(`sniper`,`punch`,`heart`,`Heartpiercer Grip`),Ru(`knight`,`rate`,`duel`,`Duelist's Hilt`),Ru(`knight`,`punch`,`heads`,`Headsman's Hilt`),Ru(`engineer`,`rate`,`tinker`,`Tinker's Haft`),Ru(`engineer`,`punch`,`forge`,`Forgemaster's Haft`),Ru(`digger`,`rate`,`burrow`,`Burrower's Haft`),Ru(`digger`,`punch`,`quarry`,`Quarrier's Haft`)];function Bu(e){let t=Math.round(Math.abs(e.rate-1)*100),n=Math.round(Math.abs(e.hit-1)*100);return e.kind===`rate`?`${t}% faster, ${n}% less per hit`:`${t}% slower, ${n}% more per hit`}var Vu=[`grip`,`chest`,`legs`,`bracers`,`boots`,`amulet`],Hu=[`chest`,`legs`,`bracers`,`boots`,`amulet`],Uu={grip:`Rune-grip`,chest:`Chest`,legs:`Legs`,bracers:`Bracers`,boots:`Boots`,amulet:`Amulet`},Wu=[{name:`Plain`,color:`#9a9a96`},{name:`Marked`,color:`#f2efe8`},{name:`Runed`,color:`#5fd35f`},{name:`Warded`,color:`#4a9cff`},{name:`Ancient`,color:`#b36bff`},{name:`Mythic`,color:`#ffa530`},{name:`Ascended`,color:`#ff4a4a`},{name:`Founderforged`,color:`#8fe8ff`}],Gu=e=>Wu[Math.max(1,Math.min(8,e))-1],Ku=[0,0,.6,.8,1,1.2,1.4,1.6,1.8],qu=[0,0,.1,.18,.28,.4,.52,.64,.75],Ju={lo:.85,hi:1.15},Yu=[0,1,2,4,8,16,32,64,100],Xu=[{id:`armor_chest`,slot:`chest`,name:`Warden Cuirass`,mitigation:.04},{id:`armor_legs`,slot:`legs`,name:`Warden Greaves`,mitigation:.035},{id:`armor_bracers`,slot:`bracers`,name:`Warden Bracers`,mitigation:.03},{id:`armor_boots`,slot:`boots`,name:`Warden Treads`,mitigation:.025},{id:`armor_amulet`,slot:`amulet`,name:`Warden Talisman`,mitigation:.02},{id:`grip_assault`,slot:`grip`,cls:`assault`,name:`Stormcaller's Grip`,gripDamage:.015},{id:`grip_sniper`,slot:`grip`,cls:`sniper`,name:`Greylance Grip`,gripDamage:.015},{id:`grip_knight`,slot:`grip`,cls:`knight`,name:`Warden's Hilt`,gripDamage:.015},{id:`grip_engineer`,slot:`grip`,cls:`engineer`,name:`Artificer's Haft`,gripDamage:.015},{id:`grip_digger`,slot:`grip`,cls:`digger`,name:`Delver's Haft`,gripDamage:.015},...zu],Zu=new Map(Xu.map(e=>[e.id,e])),Qu=e=>Zu.get(e),$u=(e,t)=>{let n=Xu.filter(t=>t.cls===e);return n[Math.min(n.length-1,Math.floor(t*n.length))]},ed=e=>Xu.find(t=>t.slot===e&&!t.cls),td=e=>`${(Math.abs(e)*100).toFixed(1).replace(/\.0$/,``)}%`,nd=[{id:`sharpened`,name:`Sharpened`,field:`damage`,anchor:.08,pool:`grip`,text:e=>`+${td(e)} weapon damage`},{id:`quickened`,name:`Quickened`,field:`fireRate`,anchor:.06,pool:`grip`,text:e=>`+${td(e)} fire and swing rate`},{id:`keen`,name:`Keen`,field:`critChance`,anchor:.04,pool:`grip`,text:e=>`+${td(e)} crit chance`},{id:`heartseeking`,name:`Heartseeking`,field:`critDamage`,anchor:.2,pool:`grip`,text:e=>`+${td(e)} crit damage`},{id:`piercing`,name:`Piercing`,field:`pierce`,anchor:1,pool:`grip`,behavior:!0,flat:!0,minTier:4,text:e=>`shots pierce ${e} more foe`},{id:`chaining`,name:`Chaining`,field:`chain`,anchor:1,pool:`grip`,behavior:!0,flat:!0,minTier:4,text:e=>`hits arc to ${e} more foe`},{id:`explosive`,name:`Explosive`,field:`splash`,anchor:.1,pool:`grip`,behavior:!0,minTier:4,text:e=>`${td(e)} of each hit splashes around it`},{id:`bursting`,name:`Bursting`,field:`bloom`,anchor:20,pool:`grip`,behavior:!0,whole:!0,minTier:4,text:e=>`weapon kills burst for ${e}`},{id:`plated`,name:`Plated`,field:`damageTaken`,anchor:-.03,pool:`armor`,slots:{chest:3,legs:3},text:e=>`${td(e)} less damage taken`},{id:`stout`,name:`Stout`,field:`maxHp`,anchor:20,pool:`armor`,whole:!0,slots:{chest:3,legs:3},text:e=>`+${e} max HP`},{id:`vigorous`,name:`Vigorous`,field:`stamina`,anchor:15,pool:`armor`,whole:!0,slots:{legs:3,boots:3},text:e=>`+${e} max Stamina`},{id:`deep_well`,name:`Deep Well`,field:`magic`,anchor:15,pool:`armor`,whole:!0,slots:{amulet:3},text:e=>`+${e} max Magic`},{id:`fleet`,name:`Fleet`,field:`moveSpeed`,anchor:.04,pool:`armor`,slots:{boots:3},only:!0,text:e=>`+${td(e)} move speed`},{id:`springstep`,name:`Springstep`,field:`jump`,anchor:.06,pool:`armor`,slots:{boots:3},only:!0,text:e=>`+${td(e)} jump`},{id:`mending`,name:`Mending`,field:`regen`,anchor:.6,pool:`armor`,slots:{amulet:3,chest:3},text:e=>`+${e.toFixed(2)} HP/s after 4 s unhurt`},{id:`warden_oath`,name:`Warden's Oath`,field:`towerDamage`,anchor:.06,pool:`armor`,slots:{bracers:3,amulet:3},text:e=>`towers you build +${td(e)} damage`},{id:`mason`,name:`Mason`,field:`towerHp`,anchor:.1,pool:`armor`,slots:{bracers:3},text:e=>`towers you build +${td(e)} HP`},{id:`hoarder`,name:`Hoarder`,field:`gold`,anchor:.08,pool:`armor`,slots:{amulet:3},only:!0,text:e=>`+${td(e)} kill gold`},...Nu],rd=new Map(nd.map(e=>[e.id,e])),id=e=>rd.get(e),ad={damage:.4,fireRate:.3,critChance:.2,critDamage:.6,damageTaken:-.35,maxHp:150,moveSpeed:.15,jump:.2,regen:3,pierce:2,chain:2,splash:.3,bloom:120,towerDamage:.4,towerHp:.6,gold:.4,magic:80,stamina:80,...Pu},od=[[1,2,2],[2,2,3],[2,3,4],[4,5,6],[5,6,7]],sd=[9,17],cd={down:.25,up:.25},ld={hoardstone:{chance:.5,offset:1,floor:1},boss:{chance:1,offset:0,floor:4},elite:{chance:.35,offset:0,floor:3},hard:{chance:.2,offset:-1,floor:1},legendary:{chance:.6,offset:-1,floor:1},extraction:{chance:1,offset:0,floor:4,row:2}},ud={perRank:.1,max:1.7};function dd(e,t){let n=Math.max(1,Math.floor(t)||1);return Math.min(1,ld[e].chance*Math.min(ud.max,1+ud.perRank*(n-1)))}var fd={base:1,perWaves:10},pd=e=>fd.base+Math.floor(Math.max(0,e)/fd.perWaves),md=e=>e===4?`legendary`:e===3?`hard`:null,hd={claimRadius:1.5,claimHeight:2.2};function gd(e,t,n,r){let i=t>=sd[1]?2:+(t>=sd[0]),a=ld[n],o=od[Math.max(0,Math.min(od.length-1,a.row??e))],s=r<cd.down?-1:+(r>=1-cd.up);return Math.max(1,Math.min(8,Math.max(a.floor,o[i]+a.offset+s)))}function _d(e,t,n){if(e.flat)return e.anchor;let r=Ju.lo+(Ju.hi-Ju.lo)*Math.max(0,Math.min(63,n))/63,i=e.anchor*Ku[Math.max(2,Math.min(8,t))]*r;return e.whole?Math.round(i):Math.round(i*1e3)/1e3}function vd(e,t){return e.mitigation===void 0?{field:`damage`,value:Math.round((e.gripDamage??0)*t*1e4)/1e4}:{field:`damageTaken`,value:-Math.round(e.mitigation*(.5+t/8)*1e4)/1e4}}function yd(e,t){let n=vd(e,t),r=n.field===`damageTaken`?`${td(n.value)} less damage taken`:`+${td(n.value)} weapon damage`;return e.style?`${r} · ${Bu(e.style)}`:r}function bd(e){let t=Qu(e.base),n=e.a.length>0?id(e.a[0][0]):void 0;return`${n?`${n.name} `:``}${t?.name??`Lost gear`}`}function xd(e,t,n){return(e.minTier??0)>n?!1:t.slot===`grip`?e.pool===`grip`&&(!e.cls||e.cls===t.cls):e.pool===`armor`?!e.only||(e.slots?.[t.slot]??0)>0:!1}var Sd=e=>Math.max(0,e-1)+ +(e>=8);function Cd(e,t,n){let r=e()<.28?$u(t,e()):ed(Hu[Math.min(Hu.length-1,Math.floor(e()*Hu.length))]),i=[],a=n-1+ +(n>=8&&e()<.05);for(let t=0;t<a;t++){let a=wd(e,r,n,i,t===7);if(!a)break;i.push(a)}return{base:r.id,r:n,a:i}}function wd(e,t,n,r,i=!1){let a=t.slot===`grip`&&e()<qu[n],o=nd.filter(e=>xd(e,t,n)&&!r.some(([t])=>t===e.id)),s=o.filter(e=>!!e.behavior===a),c=s.length>0?s:o;if(c.length===0)return null;let l=e=>t.slot===`grip`?1:e.slots?.[t.slot]??1,u=e()*c.reduce((e,t)=>e+l(t),0),d=c[c.length-1];for(let e of c)if(u-=l(e),u<0){d=e;break}return[d.id,i?63:Math.floor(e()*64)]}var Td=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`;function Ed(e){let t=Td[Xu.findIndex(t=>t.id===e.base)]+String(e.r);for(let[n,r]of e.a){let e=nd.findIndex(e=>e.id===n);e>=0&&(t+=Td[e]+Td[Math.max(0,Math.min(63,r))])}return t}function Dd(e,t,n){let r=typeof e==`string`?Qu(e):void 0;if(!r||typeof t!=`number`||!Number.isInteger(t)||t<1||t>8)return null;let i=[];if(Array.isArray(n))for(let e of n){if(!Array.isArray(e)||typeof e[0]!=`string`||typeof e[1]!=`number`)continue;let n=id(e[0]);!n||!xd(n,r,t)||i.some(([e])=>e===n.id)||i.length>=Sd(t)||i.push([n.id,Math.max(0,Math.min(63,Math.floor(e[1])))])}return{base:r.id,r:t,a:i}}function Od(e){if(e.length<2)return null;let t=Xu[Td.indexOf(e[0])],n=[];for(let t=2;t+1<e.length;t+=2){let r=nd[Td.indexOf(e[t])];r&&n.push([r.id,Td.indexOf(e[t+1])])}return Dd(t?.id,Number(e[1]),n)}function kd(e,t){if(typeof e!=`string`)return``;let n=new Set,r=[];for(let i of e.slice(0,200).split(`.`)){let e=Od(i),a=e&&Qu(e.base);!e||!a||n.has(a.slot)||a.cls&&a.cls!==t||(n.add(a.slot),r.push(Ed(e)))}return r.join(`.`)}var Ad=e=>e?e.split(`.`).map(Od).filter(e=>e!==null):[];function jd(e){return Math.round(e.reduce((e,t)=>e+t.r,0)/Vu.length*10)/10}var z={body:0,hips:1,torso:2,head:3,armL:4,foreL:5,armR:6,foreR:7,thighL:8,shinL:9,thighR:10,shinR:11,weapon:12,extra:13,cape:14,stringT:15,stringB:16,cape1:17,cape2:18,cape3:19,cape4:20},Md=[z.cape,z.cape1,z.cape2,z.cape3,z.cape4],B={bX:0,bY:1,bZ:2,bRX:3,bRY:4,bRZ:5,bS:6,hX:7,hY:8,hZ:9,hRX:10,hRY:11,hRZ:12,tRX:13,tRY:14,tRZ:15,nRX:16,nRY:17,nRZ:18,aLX:19,aLY:20,aLZ:21,fL:22,aRX:23,aRY:24,aRZ:25,fR:26,lLX:27,lLZ:28,kL:29,lRX:30,lRZ:31,kR:32,wX:33,wY:34,wZ:35,wRX:36,wRY:37,wRZ:38,cape:39,ikL:40,ikR:41,xZ:42,xS:43,glow:44},Nd=.03,Pd=[Nd,.06,.1],V=Nd;function Fd(e){V=e}var Id=Nd/2,Ld=16777216,Rd=33554432,zd=3,Bd=50331648,Vd=512,Hd=(e,t,n)=>((e+Vd)*1024+(t+Vd))*1024+(n+Vd);function H(e,t,n){let r=e*374761393+t*668265263+n*2147483647|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296}function U(e,t){let n=Math.min(255,Math.round((e>>16&255)*t)),r=Math.min(255,Math.round((e>>8&255)*t)),i=Math.min(255,Math.round((e&255)*t));return e&Bd|n<<16|r<<8|i}function Ud(e,t,n){let r=Math.round((e>>16&255)*(1-n)+(t>>16&255)*n),i=Math.round((e>>8&255)*(1-n)+(t>>8&255)*n),a=Math.round((e&255)*(1-n)+(t&255)*n);return e&Bd|r<<16|i<<8|a}var W=class e{vox=new Map;vs=V;minR=V>.03?V*.72:0;jitter=.05;set(e,t,n,r,i){let a=Hd(e,t,n);if(i===`carve`){this.vox.delete(a);return}let o=this.vox.has(a);if(!(i===`under`&&o)&&(i!==`paint`||o)){if(!(r&16777216)&&this.jitter>0){let i=H(e,t,n);r=U(r,1+(i*2-1)*this.jitter)}this.vox.set(a,r)}}has(e,t,n){return this.vox.has(Hd(e,t,n))}fill(e,t,n,r,i,a,o,s,c=`add`){let l=this.vs,u=Math.floor(Math.min(e,r)/l),d=Math.ceil(Math.max(e,r)/l),f=Math.floor(Math.min(t,i)/l),p=Math.ceil(Math.max(t,i)/l),m=Math.floor(Math.min(n,a)/l),h=Math.ceil(Math.max(n,a)/l);for(let e=u;e<d;e++){let t=(e+.5)*l;for(let n=f;n<p;n++){let r=(n+.5)*l;for(let i=m;i<h;i++){let a=(i+.5)*l;if(!o(t,r,a))continue;let u=typeof s==`number`?s:s(t,r,a);u<0||this.set(e,n,i,u,c)}}}return this}box(e,t,n,r,i,a,o,s=`add`){return this.fill(e,t,n,r,i,a,()=>!0,o,s)}ell(e,t,n,r,i,a,o,s=`add`){let c=this.minR;return r=Math.max(r,c),i=Math.max(i,c),a=Math.max(a,c),this.fill(e-r,t-i,n-a,e+r,t+i,n+a,(o,s,c)=>{let l=(o-e)/r,u=(s-t)/i,d=(c-n)/a;return l*l+u*u+d*d<=1},o,s)}rbox(e,t,n,r,i,a,o,s,c=`add`){let l=this.minR;return r=Math.max(r,l),i=Math.max(i,l),a=Math.max(a,l),this.fill(e-r,t-i,n-a,e+r,t+i,n+a,(s,c,l)=>{let u=Math.abs((s-e)/r),d=Math.abs((c-t)/i),f=Math.abs((l-n)/a);return u**o+d**o+f**o<=1},s,c)}seg(e,t,n,r,i,a,o,s,c,l=`add`){let u=r-e,d=i-t,f=a-n,p=u*u+d*d+f*f||1e-9;o=Math.max(o,this.minR),s=Math.max(s,this.minR);let m=Math.max(o,s);return this.fill(Math.min(e,r)-m,Math.min(t,i)-m,Math.min(n,a)-m,Math.max(e,r)+m,Math.max(t,i)+m,Math.max(n,a)+m,(r,i,a)=>{let c=((r-e)*u+(i-t)*d+(a-n)*f)/p;if(c<0||c>1)return!1;let l=e+u*c-r,m=t+d*c-i,h=n+f*c-a,g=o+(s-o)*c;return l*l+m*m+h*h<=g*g},c,l)}tubeY(e,t,n,r,i,a,o,s,c=`add`){i=Math.max(i,this.minR),a=Math.max(a,this.minR);let l=Math.max(1,o);return this.fill(e-i*l,n,t-a*l,e+i*l,r,t+a*l,(s,c,l)=>{let u=1+(o-1)*((c-n)/(r-n)),d=(s-e)/(i*u),f=(l-t)/(a*u);return d*d+f*f<=1},s,c)}tubeZ(e,t,n,r,i,a,o,s,c=`add`){i=Math.max(i,this.minR),a=Math.max(a,this.minR);let l=Math.max(1,o);return this.fill(e-i*l,t-a*l,n,e+i*l,t+a*l,r,(s,c,l)=>{let u=1+(o-1)*((l-n)/(r-n)),d=(s-e)/(i*u),f=(c-t)/(a*u);return d*d+f*f<=1},s,c)}splitY(t){let n=Array.from({length:t.length+1},()=>new e);for(let[e,r]of this.vox){let i=(Math.floor(e/1024)%1024-Vd+.5)*this.vs,a=0;for(;a<t.length&&i<t[a];)a++;n[a].vox.set(e,r)}return n}mirrorX(){let e=[];for(let[t,n]of this.vox){let r=Math.floor(t/1048576)-Vd,i=t-(r+Vd)*1024*1024,a=-r-1;e.push([(a+Vd)*1024*1024+i,n])}for(let[t,n]of e)this.vox.has(t)||this.vox.set(t,n);return this}},Wd=[.52,.7,.86,1],Gd=class{pos=[];nrm=[];col=[];glow=[];skin=[];idx=[];c=new Vn;add(e,t,n,r,i){let a=(t,n,r)=>e.vox.has(Hd(t,n,r)),o=e.vs,s=[0,0,0],c=[0,0,0],l=[0,0,0],u=[0,0,0];for(let[d,f]of e.vox){let e=Math.floor(d/1048576)-Vd,p=Math.floor(d/1024)%1024-Vd,m=d%1024-Vd;s[0]=e,s[1]=p,s[2]=m;let h=(f&Ld)!==0,g=h?f&33554432?zd:1:0;this.c.setHex(f&16777215);for(let d=0;d<3;d++)for(let f=-1;f<=1;f+=2){if(c[0]=c[1]=c[2]=0,c[d]=f,a(e+c[0],p+c[1],m+c[2]))continue;let _=(d+1)%3,v=(d+2)%3,y=f>0?[0,1,2,3]:[3,2,1,0],b=[[0,0],[1,0],[1,1],[0,1]],x=this.pos.length/3,S=[];for(let x of y){let[y,C]=b[x];l[0]=l[1]=l[2]=0,u[0]=u[1]=u[2]=0,l[_]=y?1:-1,u[v]=C?1:-1;let w=e+c[0],T=p+c[1],E=m+c[2],D=+!!a(w+l[0],T+l[1],E+l[2]),O=+!!a(w+u[0],T+u[1],E+u[2]),ee=+!!a(w+l[0]+u[0],T+l[1]+u[1],E+l[2]+u[2]),k=h?3:D&&O?0:3-(D+O+ee);S.push(k);let te=[s[0],s[1],s[2]];te[d]+=+(f>0),te[_]+=y,te[v]+=C,this.pos.push(te[0]*o+n,te[1]*o+r,te[2]*o+i),this.nrm.push(c[0],c[1],c[2]);let ne=Wd[k];this.col.push(this.c.r*ne,this.c.g*ne,this.c.b*ne),this.glow.push(g),this.skin.push(t)}S[0]+S[2]>=S[1]+S[3]?this.idx.push(x,x+1,x+2,x,x+2,x+3):this.idx.push(x+1,x+2,x+3,x+1,x+3,x)}}}build(){let e=new zr,t=this.pos.length/3;e.setAttribute(`position`,new Dr(this.pos,3)),e.setAttribute(`normal`,new Dr(this.nrm,3)),e.setAttribute(`color`,new Dr(this.col,3)),e.setAttribute(`glow`,new Dr(this.glow,1));let n=new Uint16Array(t*4),r=new Float32Array(t*4);for(let e=0;e<t;e++)n[e*4]=this.skin[e],r[e*4]=1;return e.setAttribute(`skinIndex`,new Tr(n,4)),e.setAttribute(`skinWeight`,new Dr(r,4)),e.setIndex(this.idx),e}},Kd=Math.PI*2,qd=e=>e<0?0:e>1?1:e,G=(e,t,n)=>qd((e-t)/(n-t)),K=e=>1-(1-e)*(1-e)*(1-e),Jd=e=>e*e*e,q=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2,J=e=>e*e*(3-2*e),Yd=e=>1+2.9*(e-1)**3+1.9*(e-1)**2,Y=(e,t,n,r)=>e<=t||e>=r?0:e<n?K((e-t)/(n-t)):1-q((e-n)/(r-n));function X(e,t,n){e[B.wX]+=(t[0]-e[B.wX])*n,e[B.wY]+=(t[1]-e[B.wY])*n,e[B.wZ]+=(t[2]-e[B.wZ])*n,e[B.wRX]+=(t[3]-e[B.wRX])*n,e[B.wRY]+=(t[4]-e[B.wRY])*n,e[B.wRZ]+=(t[5]-e[B.wRZ])*n}var Xd={jump:.9,hit:.34,death:1.6};function Zd(e,t){return t===`attack`?e.attackDur:t===`reload`?+!!e.reload:t===`special`?e.special?e.specialDur??1:0:t===`jump`||t===`hit`||t===`death`?Xd[t]:0}function Qd(e,t){t.fill(0),t[B.bS]=1,t[B.xS]=e.extraScale??1,t[B.tRX]=e.hunch,t[B.nRX]=-e.hunch*.85,t[B.lLZ]=e.stance,t[B.lRZ]=-e.stance,t[B.aLZ]=.14,t[B.aRZ]=-.14,t[B.fL]=-.25,t[B.fR]=-.25,t[B.kL]=t[B.kR]=.06,t[B.lLX]=t[B.lRX]=-.03;let n=e.carry;t[B.wX]=n[0],t[B.wY]=n[1],t[B.wZ]=n[2],t[B.wRX]=n[3],t[B.wRY]=n[4],t[B.wRZ]=n[5],t[B.ikL]=e.ikIdle?e.ikIdle[0]:+!!e.gripL,t[B.ikR]=e.ikIdle?e.ikIdle[1]:+!!e.gripR}function $d(e,t,n){let r=t+n.seed*10,i=Math.sin(r*Kd/3.4);e[B.tRX]+=.025*i,e[B.nRX]-=.02*i,e[B.hY]+=-.006+.006*i,e[B.aLZ]+=.025*(i+1),e[B.aRZ]-=.025*(i+1),e[B.wY]+=.008*i,e[B.wRX]-=.02*i;let a=Math.sin(r*Kd/6.1);e[B.hX]+=.012*a,e[B.hRZ]+=.02*a,e[B.tRZ]-=.025*a,e[B.nRY]+=.22*Math.sin(r*.41)*Math.sin(r*.23+1.3),e[B.nRZ]+=.04*Math.sin(r*.33),e[B.cape]+=.03*i}function ef(e,t,n,r){let i=e.loco,a=Math.sin(n*Kd),o=Math.cos(n*Kd),s=r?i.runStride:i.stride,c=r?i.runKnee:i.knee;t[B.lLX]=-s*a-(r?.12:.04),t[B.lRX]=s*a-(r?.12:.04),t[B.kL]=.1+c*Math.max(0,o)+(r?.25:.05)*Math.max(0,-a),t[B.kR]=.1+c*Math.max(0,-o)+(r?.25:.05)*Math.max(0,a);let l=Math.cos(n*Kd*2);t[B.hY]=-i.bob*(1-l)*.5-(r?.06:.015),t[B.hRY]=.12*a*(r?.8:1),t[B.hRZ]=.05*o,t[B.hX]=.018*o,t[B.tRY]=-.16*a*(r?.9:1),t[B.tRZ]=-.03*o,t[B.tRX]+=(r?i.lean:.04)+(r?.05:.02)*l,t[B.nRX]-=r?i.lean*.7:.03,t[B.nRY]+=.1*a;let u=i.armSwing*(r?1.5:1);t[B.aLX]=u*a,t[B.aRX]=-u*a,t[B.fL]=(r?-1.25:-.3)-.25*Math.max(0,-a),t[B.fR]=(r?-1.25:-.3)-.25*Math.max(0,a),r&&(t[B.aLZ]+=.1,t[B.aRZ]-=.1);let d=r&&e.carryRun?e.carryRun:null;d&&(t[B.wX]=d[0],t[B.wY]=d[1],t[B.wZ]=d[2],t[B.wRX]=d[3],t[B.wRY]=d[4],t[B.wRZ]=d[5]),t[B.wY]+=(r?.03:.012)*l,t[B.wRY]+=.06*a,t[B.cape]=(r?.55:.18)+.08*l}function tf(e,t){let n=K(G(t,0,.14)),r=G(t,.14,.3),i=J(G(t,.3,.46)),a=J(G(t,.62,.86)),o=n*(1-K(r)),s=i*(1-a);e[B.hY]+=-.16*o+.03*Math.sin(r*Math.PI),e[B.kL]+=1.1*o+1.3*s+.35*a,e[B.kR]+=1.1*o+1.1*s+.35*a,e[B.lLX]+=-.6*o-1*s-.2*a,e[B.lRX]+=-.6*o-.6*s-.15*a,e[B.tRX]+=.35*o-.12*Math.sin(r*Math.PI)+.15*s,e[B.nRX]-=.2*o,e[B.bS]=1-.06*o+.09*Math.sin(r*Math.PI),e[B.aLX]+=.7*o-1.5*Math.sin(r*Math.PI)-.5*s,e[B.aRX]+=.7*o-1.5*Math.sin(r*Math.PI)-.5*s,e[B.aLZ]+=.5*s,e[B.aRZ]-=.5*s,e[B.wY]+=-.06*o+.05*s,e[B.wRX]+=.15*o-.15*s,e[B.cape]+=.9*s-.3*o}function nf(e,t,n){let r=Y(t,0,.07,.34);e[B.tRX]-=.34*r,e[B.tRY]+=.22*r*n.flip,e[B.tRZ]+=.1*r*n.flip,e[B.nRX]-=.35*r,e[B.nRY]-=.2*r*n.flip,e[B.hZ]-=.06*r,e[B.hY]-=.03*r,e[B.kL]+=.25*r,e[B.kR]+=.25*r,e[B.aLZ]+=.4*r,e[B.aRZ]-=.4*r,e[B.wZ]-=.06*r,e[B.wRX]-=.2*r,e[B.cape]+=.25*r}function rf(e,t,n,r){let i=r.flip,a=Y(n,0,.12,.5),o=Jd(G(n,.28,.95)),s=G(n,.95,1.35),c=Math.sin(s*Math.PI)*(1-s)*.12,l=Math.PI/2*(o-c);t[B.bRX]=-i*l,t[B.bRY]=.25*o*i,t[B.bY]=e.deathDepth*Math.sin(l),t[B.tRX]+=-.45*a*i-.2*o*i,t[B.tRZ]+=.12*a,t[B.nRX]+=-.5*a*i-.3*o*i,t[B.nRY]+=.5*o,t[B.hZ]-=.08*a*i,t[B.lRX]+=.45*a*i,t[B.kR]+=.5*a+.3*o,t[B.kL]+=.2*o,t[B.lLX]-=.35*o,t[B.lLZ]+=.15*o,t[B.lRZ]-=.1*o,t[B.aLZ]+=.7*a+.6*o,t[B.aRZ]-=.7*a+.6*o,t[B.aLX]+=-.8*o,t[B.aRX]+=-.5*o,t[B.fL]=-.2,t[B.fR]=-.2;let u=1-J(G(n,.15,.55));t[B.ikL]*=u,t[B.ikR]*=u,t[B.wY]+=.12*a,X(t,e.drop,J(G(n,.3,1))),e.deathExtraScale!==void 0&&(t[B.xS]=e.deathExtraScale),t[B.cape]+=.4*a-.3*o}function af(e,t,n,r,i,a,o,s){if(e.gait===`quad`){pf(e,t,n,r,i,a,o,s);return}if(e.gait===`hex`){bf(e,t,n,r,i,a,o,s);return}if(e.gait===`fly`){Of(e,t,n,r,i,a,o,s);return}if(Qd(e,s),t===`jump`){tf(s,r);return}if(t===`death`){rf(e,s,r,o);return}let c=t===`idle`||t===`walk`||t===`run`?t:n;c===`idle`?$d(s,i,o):ef(e,s,a,c===`run`),e.idleExtra&&e.idleExtra(s,i),t===`attack`?e.attack(s,r,o):t===`hit`?nf(s,r,o):t===`reload`?e.reload?.(s,r,o):t===`special`&&e.special?.(s,r,o)}function of(e,t,n){if(t>.001&&(e[B.hY]-=.31*t,e[B.lLX]-=.87*t,e[B.lRX]-=.87*t,e[B.kL]+=1.62*t,e[B.kR]+=1.62*t,e[B.tRX]+=.32*t,e[B.nRX]-=.26*t,e[B.aLZ]+=.08*t,e[B.aRZ]-=.08*t,e[B.cape]+=.15*t),n>.001){let t=(t,r)=>{e[t]+=(r-e[t])*n};t(B.hY,-.55),t(B.hX,0),t(B.hRY,0),t(B.hRZ,0),t(B.lLX,-1.35),t(B.lLZ,.1),t(B.kL,.15),t(B.lRX,-.5),t(B.lRZ,-.12),t(B.kR,2.2),t(B.tRX,-.3),t(B.tRY,.2),t(B.tRZ,0),t(B.nRX,.26),t(B.nRY,-.15),t(B.aLX,.6),t(B.aLZ,.55),t(B.fL,-.4),t(B.cape,.95)}}function sf(e,t){t.fill(0),t[B.bS]=1,t[B.xS]=e.extraScale??1,t[B.tRX]=e.hunch,t[B.lLZ]=e.stance,t[B.lRZ]=-e.stance,t[B.aLZ]=e.stance*.6,t[B.aRZ]=-e.stance*.6,t[B.kL]=t[B.kR]=.08;let n=e.carry;t[B.wX]=n[0],t[B.wY]=n[1],t[B.wZ]=n[2],t[B.wRX]=n[3],t[B.wRY]=n[4],t[B.wRZ]=n[5],t[B.cape]=.35}function cf(e,t,n){let r=t+n.seed*10,i=Math.sin(r*Kd*2.6);e[B.tRX]+=.012*i,e[B.nRX]+=.03*i,e[B.hY]+=.004*i,e[B.nRY]+=.35*Math.sin(r*.47)*Math.sin(r*.21+1.1),e[B.nRX]+=.08*Math.sin(r*.31),e[B.cape]+=.12*Math.sin(r*Kd*1.4)}function lf(e,t,n,r){let i=e.loco,a=n*Kd,o=r?i.runStride:i.stride,s=r?i.runKnee:i.knee;if(!r){let e=Math.sin(a),n=Math.cos(a);t[B.aLX]=-o*e,t[B.lRX]=-o*e,t[B.aRX]=o*e,t[B.lLX]=o*e,t[B.fL]=s*Math.max(0,n),t[B.kR]+=s*Math.max(0,n),t[B.fR]=s*Math.max(0,-n),t[B.kL]+=s*Math.max(0,-n),t[B.hY]=-i.bob*(1-Math.cos(a*2))*.5,t[B.hRZ]=.03*e,t[B.nRX]-=.05*Math.cos(a*2),t[B.cape]+=.1*Math.cos(a*2);return}let c=Math.sin(a),l=Math.sin(a-.7),u=Math.cos(a),d=Math.cos(a-.7);t[B.aLX]=-o*c,t[B.aRX]=-o*l,t[B.lLX]=o*Math.sin(a+.35),t[B.lRX]=o*Math.sin(a-.35),t[B.fL]=s*Math.max(0,u),t[B.fR]=s*Math.max(0,d),t[B.kL]+=s*Math.max(0,-Math.cos(a+.35)),t[B.kR]+=s*Math.max(0,-Math.cos(a-.35)),t[B.hRX]=-.12*c,t[B.tRX]+=.1*c,t[B.hY]=i.bob*Math.sin(a+.9)-.03,t[B.nRX]-=i.lean+.1*c,t[B.cape]+=.25-.2*c}function uf(e,t){let n=K(G(t,0,.16)),r=G(t,.16,.34),i=J(G(t,.28,.45))*(1-J(G(t,.62,.85))),a=n*(1-K(r));e[B.hY]-=.1*a,e[B.hRX]+=.15*a-.25*Math.sin(r*Math.PI)+.12*i,e[B.kL]+=.9*a,e[B.kR]+=.9*a,e[B.fL]+=.8*a,e[B.fR]+=.8*a,e[B.aLX]-=.9*i,e[B.aRX]-=.8*i,e[B.lLX]+=.8*i,e[B.lRX]+=.9*i,e[B.nRX]-=.25*i,e[B.cape]+=.4*i}function df(e,t,n){let r=Y(t,0,.07,.34);e[B.hZ]-=.07*r,e[B.hY]-=.03*r,e[B.hRY]+=.15*r*n.flip,e[B.hRZ]+=.08*r*n.flip,e[B.nRX]-=.35*r,e[B.nRY]-=.3*r*n.flip,e[B.kL]+=.3*r,e[B.kR]+=.3*r,e[B.cape]-=.6*r}function ff(e,t,n,r){let i=r.flip,a=Y(n,0,.12,.5),o=Jd(G(n,.2,.8)),s=G(n,.8,1.2),c=Math.sin(s*Math.PI)*(1-s)*.1,l=Math.PI/2*(o-c);t[B.bRZ]=i*l,t[B.bY]=e.deathDepth*Math.sin(l),t[B.hY]-=.08*a,t[B.nRX]+=-.4*a+.35*o,t[B.nRY]+=.3*o*i,t[B.aLX]+=-.3*a-.5*o,t[B.aRX]+=-.1*a-.35*o,t[B.lLX]+=.3*a+.45*o,t[B.lRX]+=.2*a+.6*o,t[B.fL]=.2*o,t[B.fR]=.5*o,t[B.kL]+=.3*o,t[B.kR]+=.1*o,t[B.cape]=.35-.5*o}function pf(e,t,n,r,i,a,o,s){if(sf(e,s),t===`jump`){uf(s,r);return}if(t===`death`){ff(e,s,r,o);return}let c=t===`idle`||t===`walk`||t===`run`?t:n;c===`idle`?cf(s,i,o):lf(e,s,a,c===`run`),e.idleExtra&&e.idleExtra(s,i),t===`attack`?e.attack(s,r,o):t===`hit`?df(s,r,o):t===`reload`?e.reload?.(s,r,o):t===`special`&&e.special?.(s,r,o)}function mf(e,t){t.fill(0),t[B.bS]=1,t[B.xS]=e.extraScale??1,t[B.tRX]=e.hunch,t[B.lLZ]=e.stance,t[B.lRZ]=-e.stance,t[B.aLZ]=e.stance,t[B.aRZ]=-e.stance;let n=e.carry;t[B.wX]=n[0],t[B.wY]=n[1],t[B.wZ]=n[2],t[B.wRX]=n[3],t[B.wRY]=n[4],t[B.wRZ]=n[5]}function hf(e,t,n){let r=t+n.seed*10,i=Math.sin(r*Kd/1.9);e[B.hY]+=.005*i,e[B.cape]+=.05*i,e[B.nRY]+=.3*Math.sin(r*.9)*Math.sin(r*.37+.8),e[B.nRX]+=.06*Math.sin(r*1.3);let a=Math.max(0,Math.sin(r*1.7+n.seed*5))**8;e[B.aLZ]+=.25*a,e[B.aLX]-=.2*a}function gf(e,t,n,r){let i=e.loco,a=n*Kd,o=r?i.runStride:i.stride,s=r?i.runKnee:i.knee,c=Math.sin(a),l=Math.cos(a),u=Math.max(0,l),d=Math.max(0,-l);t[B.aLX]=-o*c,t[B.lLX]=-o*c,t[B.wRY]+=o*c,t[B.aRX]=o*c,t[B.lRX]=o*c,t[B.aLZ]+=s*u,t[B.lLZ]+=s*u,t[B.aRZ]-=s*d,t[B.lRZ]-=s*d,t[B.wRZ]+=s*(d-u),t[B.hY]=-i.bob*(1-Math.cos(a*2))*.5,t[B.hRZ]=.04*c,t[B.hRY]=.05*c,t[B.nRY]-=.08*c,r&&(t[B.tRX]+=i.lean),t[B.cape]+=.05*Math.cos(a*2)+(r?.08:0)}function _f(e,t){let n=K(G(t,0,.16)),r=G(t,.16,.34),i=J(G(t,.28,.45))*(1-J(G(t,.62,.85))),a=n*(1-K(r));e[B.hY]-=.08*a,e[B.hRX]+=.12*a-.3*Math.sin(r*Math.PI)+.1*i,e[B.aLZ]+=.3*a,e[B.aRZ]-=.3*a,e[B.lLZ]+=.3*a,e[B.lRZ]-=.3*a,e[B.aLX]-=.8*i,e[B.aRX]-=.8*i,e[B.lLX]+=.7*i,e[B.lRX]+=.7*i,e[B.nRX]-=.2*i,e[B.cape]-=.3*i}function vf(e,t,n){let r=Y(t,0,.07,.34);e[B.hZ]-=.06*r,e[B.hY]+=.02*r,e[B.hRY]+=.2*r*n.flip,e[B.hRZ]+=.1*r*n.flip,e[B.nRX]-=.3*r,e[B.nRY]-=.3*r*n.flip,e[B.aLZ]+=.35*r,e[B.aRZ]-=.35*r,e[B.lLZ]+=.25*r,e[B.lRZ]-=.25*r,e[B.cape]+=.3*r}function yf(e,t,n,r){let i=r.flip,a=e.deathRoll??Math.PI,o=Y(n,0,.1,.4),s=Jd(G(n,.15,.7)),c=G(n,.7,1.05),l=Math.sin(c*Math.PI)*(1-c)*.15,u=a*s-l;t[B.bRZ]=i*u,t[B.bY]=e.deathDepth*Math.sin(u/2)/Math.sin(a/2),t[B.hY]+=.05*o,t[B.hRX]-=.3*o;let d=.9*J(G(n,.3,.9)),f=G(n,.9,1.6),p=.25*Math.sin(n*38)*(1-f)*(f>0),m=.25*Math.sin(n*31+1.3)*(1-f)*(f>0);t[B.aLZ]+=d+p,t[B.aRZ]-=d+m,t[B.lLZ]+=d+m,t[B.lRZ]-=d+p,t[B.aLX]-=.3*d,t[B.aRX]-=.3*d,t[B.lLX]+=.3*d,t[B.lRX]+=.3*d,t[B.wRY]+=p*.6,t[B.nRX]+=.4*s,t[B.cape]-=.3*s}function bf(e,t,n,r,i,a,o,s){if(mf(e,s),t===`jump`){_f(s,r);return}if(t===`death`){yf(e,s,r,o);return}let c=t===`idle`||t===`walk`||t===`run`?t:n;c===`idle`?hf(s,i,o):gf(e,s,a,c===`run`),e.idleExtra&&e.idleExtra(s,i),t===`attack`?e.attack(s,r,o):t===`hit`?vf(s,r,o):t===`reload`?e.reload?.(s,r,o):t===`special`&&e.special?.(s,r,o)}function xf(e,t){t.fill(0),t[B.bS]=1,t[B.xS]=e.extraScale??1,t[B.tRX]=e.hunch,t[B.lLZ]=e.stance,t[B.lRZ]=-e.stance;let n=e.carry;t[B.wX]=n[0],t[B.wY]=n[1],t[B.wZ]=n[2],t[B.wRX]=n[3],t[B.wRY]=n[4],t[B.wRZ]=n[5]}function Sf(e,t,n,r,i,a){let o=Math.sin((n+r.seed*3)*Kd*(e.wingHz??11)*i);t[B.aLZ]+=.2+a*o,t[B.aRZ]-=.2+a*o,t[B.aLY]-=.15*o,t[B.aRY]+=.15*o}function Cf(e,t,n){let r=t+n.seed*10;e[B.hY]+=.035*Math.sin(r*Kd*.8),e[B.hX]+=.02*Math.sin(r*Kd*.37),e[B.hRZ]+=.05*Math.sin(r*Kd*.45+1),e[B.hRX]+=.04*Math.sin(r*Kd*.6),e[B.nRY]+=.3*Math.sin(r*.9)*Math.sin(r*.37+.8),e[B.lLX]+=.12*Math.sin(r*Kd*.7),e[B.lRX]+=.12*Math.sin(r*Kd*.7+1.1),e[B.cape]+=.08*Math.sin(r*Kd*1.3)}function wf(e,t,n){let r=t*Kd;e[B.hRX]+=n?.42:.26,e[B.hY]+=.03*Math.sin(r*2),e[B.hX]+=.04*Math.sin(r),e[B.hRZ]+=.1*Math.sin(r),e[B.nRX]-=n?.3:.18,e[B.lLX]+=n?.9:.55,e[B.lRX]+=n?.9:.55,e[B.kL]+=.2,e[B.kR]+=.2,e[B.cape]-=n?.12:.05}function Tf(e,t){let n=Y(t,0,.12,.25),r=Y(t,.15,.4,.9);e[B.hY]+=-.06*n+.35*r,e[B.hRX]+=.15*n-.3*r,e[B.lLX]-=.4*r,e[B.lRX]-=.4*r,e[B.cape]+=.2*r}function Ef(e,t,n){let r=Y(t,0,.07,.34);e[B.hZ]-=.12*r,e[B.hY]+=.05*r,e[B.hRX]-=.4*r,e[B.hRZ]+=.35*r*n.flip,e[B.nRX]-=.3*r,e[B.aLZ]+=.5*r,e[B.aRZ]-=.5*r,e[B.lLX]-=.4*r,e[B.lRX]-=.4*r,e[B.cape]+=.35*r}function Df(e,t,n,r){let i=r.flip,a=e.deathRoll??Math.PI,o=Y(n,0,.1,.4),s=Jd(G(n,.1,.65)),c=G(n,.65,1),l=Math.sin(c*Math.PI)*(1-c)*.2,u=a*s-l;t[B.bRZ]=i*u,t[B.bRY]=.8*s*i,t[B.bY]=e.deathDepth*Math.sin(u/2)/Math.sin(a/2),t[B.hRX]-=.5*o;let d=J(G(n,.05,.5)),f=.5*Math.sin(n*60)*(1-d);t[B.aLZ]+=f-.2*d,t[B.aRZ]-=f-.2*d,t[B.aLY]+=.9*d,t[B.aRY]-=.9*d;let p=J(G(n,.3,.9)),m=G(n,.9,1.6),h=.3*Math.sin(n*36)*(1-m)*(m>0);t[B.lLX]-=.9*p+h,t[B.lRX]-=.9*p-h,t[B.kL]+=.8*p,t[B.kR]+=.8*p,t[B.wRX]+=.4*p,t[B.cape]-=.5*p,t[B.nRX]+=.3*s}function Of(e,t,n,r,i,a,o,s){if(xf(e,s),t===`death`){Df(e,s,r,o);return}let c=t===`idle`||t===`walk`||t===`run`?t:n;if(Sf(e,s,i,o,c===`run`?1.5:c===`walk`?1.25:1,c===`run`?.5:.6),Cf(s,i,o),c!==`idle`&&wf(s,a,c===`run`),t===`jump`){Tf(s,r);return}e.idleExtra&&e.idleExtra(s,i),t===`attack`?e.attack(s,r,o):t===`hit`?Ef(s,r,o):t===`reload`?e.reload?.(s,r,o):t===`special`&&e.special?.(s,r,o)}var Z={steel:11845578,steelDark:8358809,steelShadow:6121591,mail:8358810,white:15265007,cloth:4550815,gold:14068028,goldDark:10648100,skin:15253402,beard:10250806,fur:14341318,runeBlue:7329535|Ld,runeBlueHot:12120319|Ld,timber:8016433,timberDark:5716514,leather:7031343,leatherDark:4862498,sole:3024160,iron:5593439,ironDark:3948357,ironLight:9080726,rust:8210986,bone:14866620,bronze:10250286,bronzeLight:13209930,boneDark:12102538,charcoal:2762276,hideGrunt:7115584,hideBrute:4481082,hideArcher:8033352,hideShaman:8227932,hideChief:5929536,corrupt:4925014,corruptDeep:3414590,acid:9240378|Ld,eyeRed:16726818|Ld,clothRed:8006693,clothBrown:7166530,robe:6957614,fletch:10695723,skBone:14472125,skBoneGrime:10391924,skBoneDark:9076582,skRust:9063210,skGlow:14690378|Ld,skGlowHot:16747162|Ld|Rd,skOoze:2233386,skOozeSheen:4860506,skRag:3100491,inChitin:2827292,inChitinMid:4141862,inChitinLight:5916208,inSheen:8219214,inBelly:9206354,inAcid:10149690|Ld,inAcidHot:13172586|Ld|Rd,inAcidDark:5212700,inOchre:11569724,inOchreDark:7231014,inWing:10127976,inWingVein:3813412,inClay:10124890,inClayDark:6968640,stone:9407878,stoneDark:6710366,stoneLight:11841958,chalk:15131090,dmHide:10103330,dmHideDark:6167064,dmHideLight:12600622,dmChar:2761254,dmCharLight:4536892,dmHorn:4865072,dmHornTip:14207144,dmEmber:16747050|Ld,dmEmberHot:16765024|Ld|Rd,dmMagma:16734746|Ld,dmIron:3025452,dmIronEdge:6970970,dmCloth:3806232,dmClothLight:5906984,dmGold:12092974,dmHex:14692490|Ld,dmHexHot:16747216|Ld|Rd},kf={none:{},iron_host:{},stoneback:{hideGrunt:6253414,hideBrute:4871250,hideArcher:6779500,hideShaman:7107689,hideChief:5397592,iron:8014386,ironDark:5386786,ironLight:12091474,rust:11033130,leather:5916728,leatherDark:3813159},test:{hideGrunt:6121072,hideBrute:4541525,iron:10115630,ironDark:7224866}};function Af(e,t){let n=kf[e];if(!n)throw Error(`withWarbandPalette: unknown warband ${e}`);let r=Object.keys(n),i=r.map(e=>Z[e]);for(let e of r)Z[e]=n[e];try{return t()}finally{r.forEach((e,t)=>Z[e]=i[t])}}function Q(e,t,n,r,i=0){let a=e/r,o=t/r,s=n/r,c=Math.floor(a),l=Math.floor(o),u=Math.floor(s),d=a-c,f=o-l,p=s-u,m=d*d*(3-2*d),h=f*f*(3-2*f),g=p*p*(3-2*p),_=(e,t,n)=>H(c+e+i*131,l+t,u+n),v=(e,t,n)=>e+(t-e)*n;return v(v(v(_(0,0,0),_(1,0,0),m),v(_(0,1,0),_(1,1,0),m),h),v(v(_(0,0,1),_(1,0,1),m),v(_(0,1,1),_(1,1,1),m),h),g)}function jf(e,t,n=0,r=0){let i=U(e,.8);return(a,o,s)=>{let c=Q(a,o,s,.11,r),l=Ud(e,i,Math.max(0,c-.5)*2);if(t>0){let e=Q(a,o,s,.16,r+7);e>1-t*.55&&(l=Ud(l,Z.corrupt,Math.min(1,(e-(1-t*.55))*9)))}if(n>0){let e=Q(a,o,s,.09,r+13);if(Math.abs(e-.5)<.022*n&&Q(a,o,s,.25,r+3)>.45)return Z.acid}return l}}function Mf(e,t=0){return(n,r,i)=>t>0&&Math.abs((r+10)%t-t/2)<V*.5&&(Math.floor(n/V)+Math.floor(i/V))%3==0?Z.ironLight:Q(n,r,i,.08,5)>1-e?Z.rust:Z.iron}function Nf(e,t,n){return(r,i)=>(i%n+n)%n<n/2?e:t}function Pf(e,t,n,r,i,a,o){e.seg(t*n,r,i,t*(n+a),r+a*.35,i-a*.5,.035,.012,o)}function Ff(e,t,n,r,i,a,o){e.seg(t*n,r,i,t*(n+.01),r+a,i+a*.25,o,o*.45,(e,t)=>t>r+a*.7?Z.bone:Z.boneDark)}function If(e,t,n,r){e.rbox(0,-t,.005,n,n*1.05,n*1.05,2.6,r)}function Lf(e,t,n,r,i){e.rbox(0,-t+n*.55,r*.35,n,n*.6,r,3,i),e.box(-n,-t,r*1.2,n,-t+n*.35,r*1.35+V,e=>Math.floor(e/V)&1?Z.boneDark:-1,`add`)}function Rf(e){if(!e||!e.some(e=>e>0))return``;let t=``;for(let n=0;n<6;n++)t+=String(Math.max(0,Math.min(8,Math.floor(e[n]??0))));return t}var zf=[0,7237747,9673894,11845578,12832216,13687267,14213096,14926958,13822719],Bf=[0,Z.leatherDark,Z.bronze,Z.gold,Z.gold,Z.gold,15251530,16767096,16773312],Vf=e=>parseInt(Gu(e).color.slice(1),16);function Hf(e){let t=Math.max(1,Math.min(8,e)),n=Vf(t),r=t===1?Z.leather:t===2?n:n|Ld;return{tier:t,plate:zf[t],dark:U(zf[t],t>=7?.72:.66),accent:Bf[t],trim:r,hot:t>=7?n|Ld|Rd:t>=3?n|Ld:Bf[t],grand:t>=5,radiant:t>=7}}function Uf(e,t){let n=1+.035*(t.tier-1);for(let r of[1,-1]){let i=.245*r,a=.118*n,o=.092*n,s=.128*n;e.fill(i-a,.3,-s,i+a,.36+o,s,(e,t,n)=>{let r=(e-i)/a,c=(t-.36)/o,l=n/s;return t>.305&&r*r+c*c+l*l<=1},(e,n)=>n<.335?t.trim:Math.abs(n-.395)<.014?t.tier>=3?t.trim:t.dark:t.grand&&Math.abs(e-i)<.02?t.accent:t.plate),t.tier>=3&&e.ell(i,.36+o*.75,0,.022,.022,.022,t.hot),t.grand&&e.seg(i,.36+o*.92,-.09,i,.36+o*.92,.09,.018,.018,t.accent),t.radiant&&(e.seg(i*1.12,.42,-.02,i*1.55,.56,-.06,.036,.012,e=>Math.abs(e)>Math.abs(i)*1.45?t.hot:t.accent),e.seg(i*1.1,.4,.05,i*1.45,.5,.03,.026,.01,e=>Math.abs(e)>Math.abs(i)*1.36?t.hot:t.plate))}e.fill(-.24,.255,-.02,.24,.36,.2,(e,t,n)=>{let r=e/.23,i=(t-.25)/.195,a=(n-.005)/.172;return r*r+i*i+a*a<=1},(e,n)=>n<.28?t.trim:t.tier>=3&&Math.abs(e)<.03&&n<.33?t.hot:t.grand&&n>.335?t.trim:t.plate)}function Wf(e,t,n){let r=e=>1+.2*((e+.44)/.48),i=t.grand?-.36:-.3;e.fill(-.14,i,-.14,.14,-.02,.16,(e,t,i)=>{let a=r(t),o=e/(.108*a),s=(i-.004)/(.114*a);return o*o+s*s<=1&&(i>-.01||e*n>.03)},(e,n)=>n<i+.03?t.trim:Math.abs((n-i)%.075-.072)<.012?t.dark:t.plate);let a=1+.04*t.tier;e.ell(0,-.43,.05,.072*a,.066*a,.062*a,(e,n,r)=>Math.abs(n+.43)<.012&&r>.05?t.accent:t.plate),t.tier>=3&&e.ell(0,-.43,.05+.062*a,.02,.02,.014,t.hot),t.radiant&&e.seg(n*.1,-.12,.02,n*.15,-.3,-.02,.024,.01,(e,n)=>n<-.25?t.hot:t.accent)}function Gf(e,t,n){e.fill(-.1,-.175,-.1,.1,-.02,.1,(e,t,r)=>{let i=1+.2*((t+.2)/.2);return Math.hypot(e/(.074*i),r/(.078*i))<=1&&e*n>Math.abs(r)*.55},(e,n)=>n>-.045||n<-.155||t.tier>=3&&Math.abs(n+.1)<.014?t.trim:t.plate);let r=.074+.004*t.tier;e.tubeY(0,.01,-.25,-.21,r*.9,r,1.12,(e,n)=>n>-.222?t.trim:t.plate),e.box(n*.035,-.3,-.035,n*.068,-.25,.05,t.plate),t.grand&&e.seg(n*.07,-.16,-.03,n*.12,-.06,-.05,.02,.008,t.accent),t.radiant&&e.seg(n*.12,-.06,-.05,n*.14,-.02,-.06,.01,.006,t.hot)}function Kf(e,t,n){if(e.fill(-.12,-.34,-.02,.12,-.05,.14,(e,t,n)=>{let r=1+.1*((t+.36)/.36),i=e/(.09*r),a=(n-.004)/(.094*r);return i*i+a*a<=1&&n>.01},(e,n)=>n>-.075||t.tier>=3&&Math.abs(e)<.012&&n>-.3?t.trim:t.plate),e.tubeY(0,0,-.38,-.31,.094,.098,1,(e,n)=>n<-.36?t.trim:t.accent),e.fill(-.09,-.48,.07,.09,-.4,.18,(e,t,n)=>{let r=e/.078,i=(t+.44)/.046,a=(n-.1)/.075;return r*r+i*i+a*a<=1},t.plate),t.grand)for(let r=0;r<(t.radiant?3:2);r++)e.seg(n*.085,-.36+r*.03,-.01,n*(.14+.012*r),-.28+r*.035,-.085,.016,.006,r===0?t.hot:t.accent)}function qf(e,t){let n=t.tier<=2?Z.leatherDark:t.accent,r=.3,i=.19;for(let t of[1,-1])e.seg(t*.085,.4,.07,t*.02,.33499999999999996,.18,.008,.008,n);let a=1+.07*(t.tier-1);if(t.tier===1){e.rbox(0,r,i,.022,.03,.012,2.5,Z.bone);return}if(e.rbox(0,r,.186,.034*a,.04*a,.014,2.2,t.tier>=5?t.accent:Z.ironLight),e.ell(0,r,.198,.022*a,.026*a,.012,t.tier===2?Vf(2):t.hot),t.radiant)for(let n of[0,Math.PI/2,Math.PI,-Math.PI/2]){let o=Math.cos(n)*.05*a,s=Math.sin(n)*.058*a;e.seg(o*.7,r+s*.7,i,o,r+s,i,.008,.005,t.accent)}}function Jf(e,t,n){let[r,i,a]=n.muzzle.p,o=Math.hypot(r,i,a)||1,s=r/o,c=i/o,l=a/o,u=t.radiant?3:t.grand?2:1,d=.03+.002*t.tier;for(let n=0;n<u;n++){let r=.065+n*.045,i=r+.028;e.seg(-s*r,-c*r,-l*r,-s*i,-c*i,-l*i,d,d,t.trim)}if(t.tier>=3){let n=.065+u*.045+.01;e.ell(-s*n,-c*n,-l*n,.024,.024,.024,t.hot)}}function Yf(e,t,n){let r=new Map;for(let t of e)r.has(t.bone)||r.set(t.bone,t.part);let i=new Map,a=e=>{let t=r.get(e);return t&&!i.has(t)&&i.set(t,new Set(t.vox.keys())),t??null},[o,s,c,l,u,d]=[0,1,2,3,4,5].map(e=>Math.floor(n[e]??0)),f=a(`torso`);f&&s>0&&Uf(f,Hf(s)),f&&d>0&&qf(f,Hf(d));for(let[e,t]of[[`thighL`,1],[`thighR`,-1]]){let n=a(e);n&&c>0&&Wf(n,Hf(c),t)}for(let[e,t]of[[`foreL`,1],[`foreR`,-1]]){let n=a(e);n&&l>0&&Gf(n,Hf(l),t)}for(let[e,t]of[[`shinL`,1],[`shinR`,-1]]){let n=a(e);n&&u>0&&Kf(n,Hf(u),t)}let p=a(`weapon`);p&&o>0&&Jf(p,Hf(o),t);for(let t of e){let e=r.get(t.bone);if(!e||e===t.part)continue;let n=i.get(e);if(n)for(let r of t.part.vox.keys())n.has(r)||e.vox.delete(r)}}var Xf={none:0,jig:1,stomp:2,cheer:3,sit:4,flail:5,stretch:6,glance:7,check:8},Zf=[Xf.jig,Xf.stomp],Qf=[Xf.stretch,Xf.glance,Xf.check],$f={[Xf.flail]:1.5,[Xf.stretch]:2.8,[Xf.glance]:3.2,[Xf.check]:2.6};function ep(e){return $f[e]??0}function tp(e){return Zf.includes(e)}var np=2.2,rp=1.8,ip=e=>Math.abs(e.muzzle.p[1])>Math.abs(e.muzzle.p[2]),ap=[-.25,.74,.08,-.12,0,-.1],op=[-.25,.7,.04,-1.42,0,0],sp=[-.22,.24,.3,0,0,-1.45],cp=[-.2,.22,.3,0,1.45,0],lp=[-.24,-.2,.3,0,0,-1.5],up=[-.22,-.18,.28,.1,1.5,0],dp=[-.12,.3,.3,-.25,0,0],fp=[-.1,.3,.3,-.35,.35,0],pp,mp=1,$=(e,t)=>{pp[e]+=(t-pp[e])*mp},hp=(e,t,n)=>e+(t-e)*n;function gp(e){$(B.ikL,0),$(B.aLX,-.25),$(B.aLY,0),$(B.aLZ,2.35+.3*e),$(B.fL,-.35-.8*e)}function _p(e,t){let n=t*np,r=Math.sin(Math.PI*n),i=Math.abs(r),a=Math.max(0,r),o=Math.max(0,-r);$(B.bY,.05*i),$(B.hY,-.05+.02*i),$(B.hX,.02*r),$(B.hRY,.1*r),$(B.hRZ,.05*r),$(B.lLX,-.05-1.05*a),$(B.kL,.1+1.6*a),$(B.lLZ,e.stance+.12*a),$(B.lRX,-.05-1.05*o),$(B.kR,.1+1.6*o),$(B.lRZ,-e.stance-.12*o),$(B.tRX,e.hunch-.04+.08*i),$(B.tRY,-.18*r),$(B.tRZ,-.1*r),$(B.nRX,-.12+.14*i),$(B.nRY,.2*r),$(B.nRZ,.12*r),X(pp,ip(e)?ap:op,mp),pp[B.wY]+=.06*i*mp,pp[B.wRZ]+=.18*r*mp,$(B.ikR,1),gp(i),$(B.cape,.12+.25*i)}function vp(e,t){let n=t*rp,r=Math.sin(Math.PI*n),i=Math.abs(r),a=Math.max(0,r),o=Math.max(0,-r),s=J(G(n%4,3,3.25))*(1-J(G(n%4,3.55,4)));$(B.hY,-.17+.04*i),$(B.hRZ,.06*r),$(B.lLX,-.6-.35*a),$(B.kL,1.05+.45*a),$(B.lLZ,.28+.25*a),$(B.lRX,-.6-.35*o),$(B.kR,1.05+.45*o),$(B.lRZ,-.28-.25*o),$(B.tRX,.28-.3*s),$(B.tRY,.1*r),$(B.tRZ,-.12*r),$(B.nRX,-.25+.2*i-.35*s),$(B.nRY,.15*Math.sin(Math.PI*n/2)),X(pp,ip(e)?sp:cp,mp),pp[B.wY]+=(.1*(1-i)+.3*s)*mp,$(B.ikR,1),e.gripL?$(B.ikL,1):($(B.ikL,0),$(B.aLX,-.7-.3*(1-i)),$(B.aLZ,.45),$(B.fL,-1.1)),$(B.cape,.15+.2*i+.3*s)}function yp(e,t){let n=t*2.4,r=Math.abs(Math.sin(Math.PI*n));$(B.bY,.035*r),$(B.hY,-.03+.03*r),$(B.lLX,-.12*(1-r)),$(B.lRX,-.12*(1-r)),$(B.kL,.12+.28*(1-r)),$(B.kR,.12+.28*(1-r)),$(B.tRX,-.12),$(B.tRY,.08*Math.sin(t*1.3)),$(B.nRX,-.35+.05*r),$(B.nRY,.12*Math.sin(t*1.1)),X(pp,ip(e)?ap:op,mp),pp[B.wY]+=.08*r*mp,pp[B.wRZ]+=.1*Math.sin(t*3)*mp,$(B.ikR,1),gp(r),$(B.cape,.2+.15*r)}function bp(e,t){let n=Math.sin(t*1.85);$(B.bY,0),$(B.hY,-.42),$(B.hX,0),$(B.hZ,0),$(B.hRX,0),$(B.hRY,0),$(B.hRZ,0),$(B.lLX,-1.5),$(B.lRX,-1.5),$(B.kL,1.45),$(B.kR,1.45),$(B.lLZ,.12),$(B.lRZ,-.12),$(B.tRX,.06+.02*n),$(B.tRY,0),$(B.tRZ,0),X(pp,ip(e)?lp:up,mp),$(B.ikR,1),e.gripL?$(B.ikL,1):($(B.ikL,0),$(B.aLX,-.75),$(B.aLZ,.15),$(B.fL,-.55)),$(B.cape,.05)}function xp(e,t){let n=t*9,r=Math.sin(n),i=Math.max(0,r),a=Math.max(0,-r);$(B.bY,.05*Math.abs(r)),$(B.lLX,-.1-.9*i),$(B.kL,.15+1.4*i),$(B.lRX,-.1-.9*a),$(B.kR,.15+1.4*a),$(B.tRX,.05),$(B.tRY,.25*Math.sin(n*.5)),$(B.tRZ,.1*r),$(B.nRX,-.25),$(B.nRY,.5*Math.sin(n*.6)),X(pp,ip(e)?ap:op,mp),pp[B.wX]+=.12*Math.sin(n*1.1)*mp,pp[B.wRZ]+=.5*Math.sin(n*1.1)*mp,$(B.ikR,1),$(B.ikL,0),$(B.aLX,-.5*Math.sin(n*.9)),$(B.aLZ,2.3+.5*Math.sin(n*1.3)),$(B.fL,-.6-.5*Math.sin(n*1.7)),$(B.cape,.4+.3*Math.abs(r))}function Sp(e,t){let n=J(G(t,.2,.9)),r=Math.sin(Math.max(0,t-.9)*2.6)*J(G(t,.9,1.3));X(pp,ip(e)?ap:op,mp*n),$(B.ikR,1),$(B.ikL,0),$(B.aLX,hp(0,-.15,n)),$(B.aLZ,hp(.3,2.75,n)),$(B.fL,hp(-.3,-.15,n)),$(B.tRX,-.2*n),$(B.tRZ,.12*r),$(B.nRX,-.3*n),$(B.nRZ,-.1*r),$(B.bY,.02*n)}function Cp(e,t){let n=Math.sin(qd((t-.5)/2.2)*Math.PI*2);$(B.ikL,0),$(B.aLX,-2.3),$(B.aLZ,-.25),$(B.fL,-1.85),$(B.nRY,.65*n),$(B.nRX,-.08),$(B.tRY,.2*n)}function wp(e,t){let n=Math.sin(qd((t-.4)/1.8)*Math.PI*2),r=ip(e);X(pp,r?dp:fp,mp),r?pp[B.wRY]+=1.2*n*mp:pp[B.wRZ]+=.9*n*mp,$(B.ikR,1),!r&&e.gripL?$(B.ikL,1):($(B.ikL,0),$(B.aLX,-.2),$(B.aLZ,.25),$(B.fL,-.4)),$(B.nRX,r?-.05:.18),$(B.nRY,-.15+.1*n)}var Tp={[Xf.none]:null,[Xf.jig]:_p,[Xf.stomp]:vp,[Xf.cheer]:yp,[Xf.sit]:bp,[Xf.flail]:xp,[Xf.stretch]:Sp,[Xf.glance]:Cp,[Xf.check]:wp};function Ep(e,t,n,r){let i=Tp[n];if(!i)return;let a=ep(n);pp=t,mp=a>0?J(G(r,0,.35))*(1-J(G(r,a-.45,a))):1,!(mp<=0)&&i(e,r)}function Dp(e){e.vertexShader=e.vertexShader.replace(`#include <skinbase_vertex>`,`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
#endif`).replace(`#include <skinnormal_vertex>`,`#ifdef USE_SKINNING
	mat4 skinMatrix = bindMatrixInverse * boneMatX * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
#endif`).replace(`#include <skinning_vertex>`,`#ifdef USE_SKINNING
	transformed = ( bindMatrixInverse * ( boneMatX * ( bindMatrix * vec4( transformed, 1.0 ) ) ) ).xyz;
#endif`)}var Op=null;function kp(){return Op||(Op=new ao,Op.onBeforeCompile=Dp,Op.customProgramCacheKey=()=>`voxel-character-depth`),Op}var Ap=.32,jp=.12;function Mp(e,t,n=null){let r=new ro({vertexColors:!0,roughness:.8,metalness:.05});r.emissive.setRGB(t,t,t);let i=new Vn(n??0);return r.onBeforeCompile=t=>{Dp(t),t.uniforms.uGlow={value:e},t.uniforms.uStatus={value:i},t.uniforms.uStatusMix={value:n===null?0:Ap},t.uniforms.uStatusGlow={value:n===null?0:jp},t.vertexShader=`attribute float glow;
varying float vGlow;
varying vec3 vGrain;
`+t.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>\n\tvGlow = glow;\n\tvGrain = position / ${Id.toFixed(4)} - normal * 0.25;`),t.fragmentShader=`uniform float uGlow;
uniform vec3 uStatus;
uniform float uStatusMix;
uniform float uStatusGlow;
varying float vGlow;
varying vec3 vGrain;
`+t.fragmentShader.replace(`#include <color_fragment>`,`#include <color_fragment>
	float grainH = fract(sin(dot(floor(vGrain), vec3(12.9898, 78.233, 37.719))) * 43758.5453);
	float glowK = min(vGlow, 1.0);
	diffuseColor.rgb *= 0.93 + 0.14 * grainH * (1.0 - glowK);
	diffuseColor.rgb = mix(diffuseColor.rgb, uStatus * (0.7 + 0.6 * grainH), uStatusMix * (1.0 - glowK));
	vec3 glowColor = diffuseColor.rgb;
	diffuseColor.rgb *= 1.0 - 0.8 * glowK;`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
	totalEmissiveRadiance += glowColor * vGlow * uGlow + uStatus * uStatusGlow;`)},r.customProgramCacheKey=()=>`voxel-character-glow`,r}var Np=new Map;function Pp(e=null){let t=e??-1,n=Np.get(t);return n||(n={base:Mp(1,0,e),charged:Mp(2.2,0,e),flashHot:Mp(2,.55,e),flashWarm:Mp(1.5,.25,e)},Np.set(t,n)),n}var Fp=7329535,Ip=3.5,Lp=null,Rp=new Map;function zp(e){let t=Math.round(e*100),n=Rp.get(t);return n||(n=new yi({color:new Vn(Fp).multiplyScalar(Ip*t/100),transparent:!0,blending:2,depthWrite:!1}),Rp.set(t,n)),n}var Bp=5,Vp=null,Hp=null,Up=[0,16,28];function Wp(e){let t=e.rig,n=(e,t=1)=>new L(e[0]*t,e[1],e[2]),r=Array(21),i=Array(21),a=(e,t,n)=>{r[e]=n,i[e]=t};a(z.body,-1,new L),a(z.hips,z.body,n(t.hips)),a(z.torso,z.hips,n(t.torso)),a(z.head,z.torso,n(t.head)),a(z.armL,z.torso,n(t.shoulder)),a(z.armR,z.torso,n(t.shoulder,-1)),a(z.foreL,z.armL,new L(0,-t.upperLen,0)),a(z.foreR,z.armR,new L(0,-t.upperLen,0)),a(z.thighL,z.hips,n(t.hip)),a(z.thighR,z.hips,n(t.hip,-1)),a(z.shinL,z.thighL,new L(0,-t.thighLen,0)),a(z.shinR,z.thighR,new L(0,-t.thighLen,0));let o=e.carry;a(z.weapon,z.torso,new L(o[0],o[1],o[2])),a(z.extra,z.weapon,t.extra?n(t.extra):new L),a(z.cape,z.torso,t.cape?n(t.cape):new L);let s=t.bowString;a(z.stringT,z.weapon,s?new L(0,s.half,s.z):new L),a(z.stringB,z.weapon,s?new L(0,-s.half,s.z):new L);let c=t.capeFlow;for(let e=1;e<Md.length;e++)a(Md[e],Md[e-1],c?new L(0,-c.len,e===1?c.z:0):new L);return{rest:r,parent:i}}var Gp=new Map,Kp=(e,t,n,r)=>`${e.kind}:${t}:${n}${r?`:${r}`:``}`,qp=16,Jp=new Map,Yp=[];function Xp(e,t){let n=(Jp.get(e)??0)+t;Jp.set(e,n);let r=Yp.indexOf(e);if(n>0&&r>=0&&Yp.splice(r,1),!(n>0))for(Jp.delete(e),r<0&&Yp.push(e);Yp.length>qp;){let e=Yp.shift();Gp.get(e)?.geometries.forEach(e=>e.dispose()),Gp.delete(e)}}function Zp(e,t,n=`none`,r=``){let i=kf[n];if(!i)throw Error(`createCharacter: unknown warband ${n}`);let a=Object.keys(i).length?n:`none`,o=Kp(e,t,a,r),s=Gp.get(o);if(s)return s;let c=r?[...r].map(Number):null,{rest:l,parent:u}=Wp(e),d=[];for(let e=0;e<21;e++)d[e]=l[e].clone(),u[e]>=0&&d[e].add(d[u[e]]);let f=[],p=[];for(let n of Pd){Fd(n);let r=new Gd,i=Af(a,()=>e.parts(t));c&&Yf(i,e,c);let o=e.rig.capeFlow;for(let{bone:e,part:t}of i){let n=d[z[e]];o&&e===`cape`?t.splitY(Md.slice(1).map((e,t)=>-o.len*(t+1))).forEach((e,t)=>r.add(e,Md[t],n.x,n.y,n.z)):r.add(t,z[e],n.x,n.y,n.z)}f.push(r.build()),p.push(r.idx.length/3)}return Fd(Nd),s={def:e,geometries:f,rest:l,parent:u,inverses:d.map(e=>new on().makeTranslation(-e.x,-e.y,-e.z)),triangles:p},Gp.set(o,s),s}var Qp=.45,$p=new L(0,-1,0),em=new L,tm=new L,nm=new L,rm=new L,im=new L,am=new Ft,om=new Ft,sm=new Ft,cm=[.75,-.6,-.45],lm=[-.75,-.6,-.45],um=.6,dm=.6,fm=[0,120,85,62,46],pm=.3,mm=8,hm=.09,gm=.045,_m=1.1,vm=.5,ym=.07,bm=.05,xm=.6,Sm=-.06,Cm=[0,0,.05,.05,.04],wm=[0,0,.05,.1,.13],Tm=[0,.25,.6,.85,1],Em=1.5,Dm=[-.3,.7],Om=.6,km=.3,Am=[9,16],jm=0,Mm=class{root=new Pn;kind;height;def;bones=[];meshes=[];skeleton;rest;scaleVar;ctx;state=`idle`;loop=`idle`;speed=1;rate=1;t=0;clock=0;phase=0;flash=0;status=null;groundSpeed=null;stance={crouch:0,slide:0,crouchTo:0,slideTo:0};swingPitch=0;dead=!1;blend=1;blendDur=.2;from=new Float32Array(45);cur=new Float32Array(45);out=new Float32Array(45);muzzleBone;muzzleLocal;rings=[];ringN=0;runes=[];runeK=-1;tint;warband;gearKey=``;capeFlow;capeA=new Float32Array(Md.length);capeW=new Float32Array(Md.length);capeR=new Float32Array(Md.length);capeRW=new Float32Array(Md.length);capeMotion={init:!1,px:0,py:0,pz:0,yaw:0,vx:0,vy:0,vz:0,ax:0,ay:0,az:0,turn:0};emote=0;emoteT=0;fidgets;fidgetOn=!0;fidgetT=0;constructor(e,t){this.def=e,this.kind=e.kind,this.tint=t.tint??e.defaultTint,this.warband=t.warband,this.capeFlow=e.rig.capeFlow!==void 0,this.fidgets=e.kind.startsWith(`warden`)&&!e.gait;let n=Zp(e,this.tint,t.warband);this.rest=n.rest;let r=jm++,i=(r*.6180339887%1+1)%1;this.ctx={seed:i,flip:1,swing:-1},this.fidgetT=Am[0]+(Am[1]-Am[0])*i,this.scaleVar=e.kind.startsWith(`warden`)?1:.95+.1*((r*.7548776662%1+1)%1),this.height=e.height*this.scaleVar;for(let e=0;e<21;e++){let t=new Wi;t.position.copy(n.rest[e]),this.bones.push(t)}for(let e=0;e<21;e++){let t=n.parent[e];t>=0&&this.bones[t].add(this.bones[e])}let a=Pp();this.skeleton=new Ji(this.bones,n.inverses),this.root.add(this.bones[z.body]);let o=new pi;n.geometries.forEach((e,t)=>{let n=new Ui(e,a.base);n.castShadow=!0,n.receiveShadow=!0,n.customDepthMaterial=kp(),n.boundingSphere=new jr(new L(0,this.height*.5,0),this.height*1.15),n.bind(this.skeleton,new on),o.addLevel(n,Up[t],.1),this.meshes.push(n)}),this.root.add(o),this.muzzleBone=this.bones[e.muzzle.bone===`extra`?z.extra:z.weapon],this.muzzleLocal=new L(...e.muzzle.p),af(e,`idle`,`idle`,0,0,0,this.ctx,this.out),this.from.set(this.out),this.settleCape(this.out),this.apply(this.out)}play(e,t=1){if(!this.dead){if(e===`idle`||e===`walk`||e===`run`){if(this.speed=t,e===this.loop)return;e!==`idle`&&Qf.includes(this.emote)&&(this.emote=Xf.none),this.loop=e,(this.state===`idle`||this.state===`walk`||this.state===`run`)&&this.startBlend(e,.22);return}this.rate=e===`attack`||e===`reload`?t:1,this.emote=Xf.none,e===`hit`&&(this.flash=.14,this.ctx.flip=-this.ctx.flip),e===`death`&&(this.dead=!0,this.ctx.flip=this.ctx.seed<.6?1:-1),this.startBlend(e,e===`hit`?.04:e===`death`?.1:.07),this.t=0}}setEmote(e){this.dead||e===this.emote||!e&&!this.emote||(this.emote=e,this.emoteT=0,this.from.set(this.out),this.blend=0,this.blendDur=km)}setFidgets(e){this.fidgetOn=e,!e&&Qf.includes(this.emote)&&this.setEmote(Xf.none)}get emoting(){return this.emote}setStatusTint(e){this.status=e}setGroundSpeed(e){this.groundSpeed=e}cycleLength(e=this.loop===`run`){let t=this.def.rig,n=this.def.loco,r=(t.hips[1]+t.hip[1])*this.scaleVar*this.root.scale.y;return Math.max(.1,4*r*Math.sin(e?n.runStride:n.stride))}gaitFor(e){let t=this.def.loco,n=t.walkHz*this.cycleLength(!1),r=n+Qp*(t.runHz*this.cycleLength(!0)-n);return Math.abs(e)>r*(this.loop===`run`?.9:1.1)?`run`:`walk`}setStance(e,t){this.stance.crouchTo=e,this.stance.slideTo=t}setSwingPitch(e,t=-1){this.swingPitch=e,this.ctx.swing=t<0?-1:1}setRuneLight(e){if(!this.kind.startsWith(`warden`))return;let t=Math.max(0,Math.min(1,e));if(t===this.runeK)return;if(this.runeK=t,this.runes.length===0){Lp??={ring:new Fa(.068,.068,.024,14,1,!0),eye:new Na(.03,.02,.012)};let e=(e,n,r,i,a)=>{let o=new ji(n,zp(t));o.position.set(r,i,a),o.renderOrder=2,this.bones[e].add(o),this.runes.push(o)};e(z.foreL,Lp.ring,0,-.19,0),e(z.foreR,Lp.ring,0,-.19,0),e(z.head,Lp.eye,.048,.15,.134),e(z.head,Lp.eye,-.048,.15,.134)}let n=zp(t);for(let e of this.runes)e.material=n,e.visible=t>0}setGear(e){if(!this.kind.startsWith(`warden`))return;let t=Rf(e);if(t===this.gearKey)return;this.releaseGear(),this.gearKey=t;let n=Zp(this.def,this.tint,this.warband,t);this.meshes.forEach((e,t)=>{e.geometry=n.geometries[t]}),t&&Xp(Kp(this.def,this.tint,this.palette(),t),1)}palette(){let e=this.warband??`none`;return Object.keys(kf[e]??{}).length?e:`none`}releaseGear(){this.gearKey&&Xp(Kp(this.def,this.tint,this.palette(),this.gearKey),-1)}setRings(e){if(!this.kind.startsWith(`warden`))return;let t=Math.max(0,Math.min(Bp,Math.floor(e)));if(t!==this.ringN){this.ringN=t;for(let e of this.rings)e.removeFromParent();this.rings=[],Vp??=new Fa(.07,.07,.018,14,1,!0),Hp??=new yi({color:16765024,side:2});for(let e=0;e<t;e++)for(let t of[z.foreL,z.foreR]){let n=new ji(Vp,Hp);n.position.set(0,-.16+e*.024,0),this.bones[t].add(n),this.rings.push(n)}}}reset(){this.dead=!1,this.emote=Xf.none,this.loop=`idle`,this.state=`idle`,this.t=0,this.flash=0,af(this.def,`idle`,`idle`,0,this.clock,0,this.ctx,this.out),this.blend=1,this.settleCape(this.out),this.capeMotion.init=!1,this.apply(this.out)}startBlend(e,t){this.from.set(this.out),this.state=e,this.blend=0,this.blendDur=t}update(e){let t=this.def;if(this.clock+=e,this.loop!==`idle`&&!this.dead){let n=this.loop===`run`?t.loco.runHz:t.loco.walkHz,r=this.groundSpeed===null?n*this.speed:this.groundSpeed/this.cycleLength();this.phase=((this.phase+e*r)%1+1)%1}if(this.state!==`idle`&&this.state!==`walk`&&this.state!==`run`){this.t+=e*this.rate;let n=Zd(t,this.state);this.t>=n&&(this.state===`death`?this.t=n:this.startBlend(this.loop,.22))}this.flash>0&&(this.flash-=e),this.stepEmote(e),af(t,this.state,this.loop,this.t,this.clock,this.phase,this.ctx,this.cur);let n=this.stance,r=1-Math.exp(-e*16);n.crouch+=(n.crouchTo-n.crouch)*r,n.slide+=(n.slideTo-n.slide)*r,!t.gait&&!this.dead&&of(this.cur,n.crouch,n.slide),this.state===`attack`&&!t.gait&&(this.cur[B.tRX]-=this.swingPitch*um),this.emote&&!t.gait&&!this.dead&&Ep(t,this.cur,this.emote,this.emoteT),this.blend=Math.min(1,this.blend+e/this.blendDur);let i=q(this.blend),a=this.out,o=this.from,s=this.cur;for(let e=0;e<45;e++)a[e]=o[e]+(s[e]-o[e])*i;this.capeFlow&&this.stepCape(e,a),this.apply(a);let c=Pp(this.dead?null:this.status),l=this.flash>.07?c.flashHot:this.flash>0?c.flashWarm:a[B.glow]>.5?c.charged:c.base;for(let e=0;e<this.meshes.length;e++)this.meshes[e].material=l}stepEmote(e){if(this.emote){this.emoteT+=e;let t=ep(this.emote);t>0&&this.emoteT>=t&&this.setEmote(Xf.none)}if(!this.fidgets)return;if(!this.fidgetOn||this.dead||this.emote||this.state!==`idle`||this.loop!==`idle`||this.stance.crouchTo!==0||this.stance.slideTo!==0){this.emote||(this.fidgetT=Math.max(this.fidgetT,Am[0]));return}if(this.fidgetT-=e,this.fidgetT>0)return;let t=(this.clock*.6180339887+this.ctx.seed)%1;this.setEmote(Qf[Math.floor(t*Qf.length)%Qf.length]),this.fidgetT=Am[0]+(Am[1]-Am[0])*(t*7.31%1)}apply(e){let t=this.bones,n=this.rest,r=this.scaleVar;t[z.body].position.set(e[B.bX],e[B.bY],e[B.bZ]),t[z.body].rotation.set(e[B.bRX],e[B.bRY],e[B.bRZ]);let i=e[B.bS];if(t[z.body].scale.set(r/Math.sqrt(i),r*i,r/Math.sqrt(i)),t[z.hips].position.set(n[z.hips].x+e[B.hX],n[z.hips].y+e[B.hY],n[z.hips].z+e[B.hZ]),t[z.hips].rotation.set(e[B.hRX],e[B.hRY],e[B.hRZ]),t[z.torso].rotation.set(e[B.tRX],e[B.tRY],e[B.tRZ]),t[z.head].rotation.set(e[B.nRX],e[B.nRY],e[B.nRZ]),t[z.armL].rotation.set(e[B.aLX],e[B.aLY],e[B.aLZ]),t[z.foreL].rotation.set(e[B.fL],0,0),t[z.armR].rotation.set(e[B.aRX],e[B.aRY],e[B.aRZ]),t[z.foreR].rotation.set(e[B.fR],0,0),t[z.thighL].rotation.set(e[B.lLX],0,e[B.lLZ]),t[z.shinL].rotation.set(e[B.kL],0,0),t[z.thighR].rotation.set(e[B.lRX],0,e[B.lRZ]),t[z.shinR].rotation.set(e[B.kR],0,0),t[z.weapon].position.set(e[B.wX],e[B.wY],e[B.wZ]),t[z.weapon].rotation.set(e[B.wRX],e[B.wRY],e[B.wRZ]),t[z.extra].position.set(n[z.extra].x,n[z.extra].y,n[z.extra].z+e[B.xZ]),t[z.extra].scale.setScalar(Math.max(1e-4,e[B.xS])),this.capeFlow){let n=this.capeA,r=this.capeR,i=-e[B.tRY];t[z.cape].rotation.set(n[0],0,r[0]);for(let e=1;e<Md.length;e++)t[Md[e]].rotation.set(n[e]-n[e-1],i*(Tm[e]-Tm[e-1]),r[e]-r[e-1])}else t[z.cape].rotation.set(e[B.cape],0,0);let a=this.def.rig.bowString;if(a){let n=e[B.xS]>.01?e[B.xZ]:0,r=Math.hypot(a.half,n);t[z.stringT].rotation.x=Math.atan2(-n,a.half),t[z.stringB].rotation.x=Math.atan2(n,a.half),t[z.stringT].scale.y=t[z.stringB].scale.y=r/a.half}let o=this.def;o.gripL&&e[B.ikL]>.001&&this.ik(1,o.gripL,e[B.ikL],o.poleL??cm,!1),o.gripR&&e[B.ikR]>.001&&this.ik(-1,o.gripR,e[B.ikR],o.poleR??lm,o.gripROnExtra===!0)}settleCape(e){if(!this.capeFlow)return;let t=e[B.cape],n=t*.4/(Md.length-1),r=0;for(let e=0;e<Md.length;e++)r+=Cm[e],this.capeA[e]=t*dm+n*e+r,this.capeW[e]=this.capeR[e]=this.capeRW[e]=0}stepCape(e,t){if(e<=0)return;e=Math.min(e,.1);let n=this.capeMotion,r=this.root,i=r.position,a=r.rotation.y;n.init||(n.init=!0,n.px=i.x,n.py=i.y,n.pz=i.z,n.yaw=a,n.vx=n.vy=n.vz=n.ax=n.ay=n.az=n.turn=0);let o=(i.x-n.px)/e,s=(i.y-n.py)/e,c=(i.z-n.pz)/e;o*o+s*s+c*c>1600&&(o=n.vx,s=n.vy,c=n.vz);let l=a-n.yaw;l-=Math.round(l/(Math.PI*2))*Math.PI*2,n.px=i.x,n.py=i.y,n.pz=i.z,n.yaw=a;let u=1-Math.exp(-e/.06),d=1-Math.exp(-e/.1),f=n.vx+(o-n.vx)*u,p=n.vy+(s-n.vy)*u,m=n.vz+(c-n.vz)*u,h=e=>Math.max(-30,Math.min(30,e));n.ax+=(h((f-n.vx)/e)-n.ax)*d,n.ay+=(h((p-n.vy)/e)-n.ay)*d,n.az+=(h((m-n.vz)/e)-n.az)*d,n.vx=f,n.vy=p,n.vz=m,n.turn+=(Math.max(-12,Math.min(12,l/e))-n.turn)*u;let g=Math.sin(a),_=Math.cos(a),v=!this.dead,y=v?n.vx*g+n.vz*_:0,b=v?n.vx*_-n.vz*g:0,x=v?n.ax*g+n.az*_:0,S=v?n.ax*_-n.az*g:0,C=v?n.vy:0,w=v?n.ay:0,T=v?n.turn:0,E=Md.length,D=this.capeA,O=this.capeW,ee=this.capeR,k=this.capeRW,te=t[B.cape],ne=this.clock,re=this.ctx.seed*Math.PI*2,A=Math.max(-.5,Math.min(1.5,y/mm)),ie=te*.4/(E-1)+hm*A+Math.max(-.12,Math.min(.3,-C*gm)),j=Math.max(-.25,Math.min(.25,ym*T-bm*b)),ae=.05*Math.max(0,Math.min(1,Math.abs(y)/mm)),oe=Sm+Math.max(0,t[B.tRX]+t[B.hRX])*.7;D[0]=te*dm,O[0]=0,ee[0]=0;let se=Math.ceil(e/(1/60)),ce=e/se;for(let e=0;e<se;e++)for(let e=1;e<E;e++){let t=fm[e],n=2*pm*Math.sqrt(t),r=v?.035*Math.sin(1.6*ne+.8*e+re)+.02*Math.sin(2.7*ne-.5*e+re*1.7):0,i=t*(D[e-1]+ie+Cm[e]+r+ae*Math.sin(11*ne-1.3*e+re)-D[e])-n*O[e]+_m*x-vm*w*Math.sin(D[e]);O[e]+=i*ce,D[e]+=O[e]*ce;let a=Math.max(oe+wm[e],D[e-1]+Dm[0]),o=Math.min(Em,D[e-1]+Dm[1]);D[e]<a?(D[e]=a,O[e]<0&&(O[e]=0)):D[e]>o&&(D[e]=o,O[e]>0&&(O[e]=0));let s=t*(ee[e-1]+j+(v?.02*Math.sin(1.3*ne+.7*e+re*2.3):0)-ee[e])-n*k[e]-xm*S;k[e]+=s*ce,ee[e]+=k[e]*ce,Math.abs(ee[e])>Om&&(ee[e]=Math.sign(ee[e])*Om,k[e]=0)}}ik(e,t,n,r,i){let a=this.def,o=this.bones[e>0?z.armL:z.armR],s=this.bones[e>0?z.foreL:z.foreR],c=this.bones[z.weapon];if(em.set(t[0],t[1],t[2]),i){let e=this.bones[z.extra];e.updateMatrix(),em.applyMatrix4(e.matrix)}c.updateMatrix(),em.applyMatrix4(c.matrix);let l=a.rig.upperLen,u=a.rig.handLen;tm.subVectors(em,o.position);let d=tm.length();if(d<1e-5)return;tm.divideScalar(d),d=Math.min(Math.max(d,Math.abs(l-u)+.01),(l+u)*.999);let f=Math.min(1,Math.max(-1,(l*l+d*d-u*u)/(2*l*d))),p=Math.sqrt(1-f*f);nm.set(r[0],r[1],r[2]).addScaledVector(tm,-nm.dot(tm)).normalize(),rm.copy(o.position).addScaledVector(tm,l*f).addScaledVector(nm,l*p),im.subVectors(rm,o.position).divideScalar(l),am.setFromUnitVectors($p,im),im.copy(o.position).addScaledVector(tm,d).sub(rm).normalize(),sm.copy(am).invert(),im.applyQuaternion(sm),om.setFromUnitVectors($p,im),n>=.999?(o.quaternion.copy(am),s.quaternion.copy(om)):(o.quaternion.slerp(am,n),s.quaternion.slerp(om,n))}getMuzzleWorldPosition(e){return this.muzzleBone.updateWorldMatrix(!0,!1),e.copy(this.muzzleLocal).applyMatrix4(this.muzzleBone.matrixWorld)}dispose(){this.releaseGear(),this.gearKey=``,this.root.removeFromParent(),this.skeleton.dispose()}};function Nm(e,t={}){return new Mm(e,t)}function Pm(e){return Zp(e,e.defaultTint).triangles}var Fm={hips:[0,.96,0],torso:[0,.1,0],head:[0,.46,.01],shoulder:[.215,.37,0],upperLen:.28,handLen:.28,hip:[.1,-.03,0],thighLen:.44,cape:[0,.4,-.13],capeFlow:{len:.2,z:-.04}};function Im(e,t,n,r,i,a,o,s,c){e.tubeZ(0,t,n,r,i,i,1,(e,n,r)=>a.some(e=>Math.abs(r-e)<.016)?Z.gold:n>t+i*.6&&r>o&&r<s&&Math.floor(r/(V*2))&1?c:Math.floor(r/(V*3))&1?Z.timber:U(Z.timber,.84))}function Lm(e,t,n,r,i,a){e.tubeZ(0,t,n+.012,r-.012,i*.8,i*.8,1,a);for(let a of[n,r-.018])e.tubeZ(0,t,a,a+.018,i+.008,i+.008,1,Z.gold);for(let a=0;a<4;a++){let o=Math.PI/4+a*Math.PI/2,s=Math.cos(o)*i,c=t+Math.sin(o)*i;e.seg(s,c,n,s,c,r,.008,.008,Z.gold)}}var Rm=(e,t,n)=>Math.floor(n/V)&1?e:t;function zm(e){let t=Math.max(0,Math.min(1,(e-.4)/.22));return .02*e+.09*t*t*(3-2*t)}function Bm(e){let t=U(e,.72),n=[],r=new W;r.rbox(0,-.02,0,.165,.11,.12,3,Z.cloth),r.tubeY(0,0,-.16,.02,.18,.135,1.1,(e,t)=>Rm(Z.mail,U(Z.mail,.82),t)),r.tubeY(0,0,0,.08,.185,.14,1,Z.leather),r.box(-.04,0,.12,.04,.08,.16,Z.gold),r.box(-.1,-.34,.12,.1,0,.17,(t,n)=>n<-.3||Math.abs(t)>.075?Z.gold:Math.abs(t)<.03?e:Z.white),r.box(-.1,-.3,-.17,.1,0,-.12,(e,t)=>t<-.26||Math.abs(e)>.075?Z.gold:Z.white),n.push({bone:`hips`,part:r});let i=new W;i.rbox(0,.1,0,.16,.12,.115,2.4,Z.cloth),i.rbox(0,.25,.005,.2,.165,.14,2.6,Z.steel),i.fill(-.3,.02,-.3,.3,.3,.3,()=>!0,(t,n,r)=>{if(n>.27)return Z.gold;if(r>.08){let r=Math.hypot(t,n-.17);if(r<.045)return e;if(r<.075)return Z.gold}return Z.white},`paint`),i.box(-.02,.15,.13,.02,.19,.18,Z.runeBlue,`paint`),i.fill(-.3,.02,-.3,.3,.44,.3,e=>Math.abs(e)>.17,Z.steelDark,`paint`),i.tubeY(0,0,.36,.45,.095,.085,.95,Z.steelDark),i.tubeY(0,0,.4,.44,.1,.09,1,Z.gold),i.ell(0,.4,-.08,.17,.055,.075,(e,t,n)=>U(Z.fur,.9+.2*H(e*50|0,t*50|0,n*50|0)));for(let e of[1,-1]){let t=.235*e;i.fill(t-.12,.28,-.13,t+.12,.45,.13,(e,n,r)=>{let i=(e-t)/.1,a=(n-.35)/.08,o=r/.11;return i*i+a*a+o*o<=1},(e,t)=>t<.31?Z.gold:Z.steel),i.fill(t-.12,.25,-.12,t+.12,.3,.12,(e,n,r)=>{let i=(e-t*1.06)/.1,a=r/.11;return i*i+a*a<=1&&n>.25},Z.steelDark,`under`),i.box(.2*e-.02,.4,.09,.2*e+.02,.44,.13,Z.gold,`paint`)}n.push({bone:`torso`,part:i});let a=new W;a.ell(0,.13,.01,.11,.13,.115,Z.skin),a.ell(0,.045,.06,.085,.075,.072,Z.beard),a.seg(0,.01,.1,0,-.08,.11,.03,.02,(e,t)=>Math.abs(t+.05)<.015?Z.gold:Z.beard),a.box(-.055,.075,.1,.055,.1,.155,U(Z.beard,1.1)),a.fill(-.2,0,-.2,.2,.32,.2,(e,t,n)=>{let r=e/.134,i=(t-.15)/.155,a=(n-.005)/.134;return r*r+i*i+a*a>1?!1:t<.1?n<0:!0},(e,t,n)=>{if(t<.1)return Math.floor(t/V)&1?Z.mail:U(Z.mail,.85);if(t<.2&&n>.06){let n=Math.abs(Math.abs(e)-.048),r=t-.15;return n<.022&&Math.abs(r)<.018?Math.abs(n)<.012?Z.runeBlue:1844275:Z.steelDark}return t<.23?Z.gold:Z.steel}),a.box(-.015,.08,.12,.015,.2,.155,Z.steelDark),a.ell(0,.3,-.01,.03,.06,.13,(n,r,i)=>r>.33||i<-.1?e:t),n.push({bone:`head`,part:a});for(let e of[`L`,`R`]){let t=new W;t.tubeY(0,0,-.28,.02,.058,.06,1,(e,t)=>Rm(Z.mail,U(Z.mail,.85),t)),n.push({bone:e===`L`?`armL`:`armR`,part:t});let r=new W;r.ell(0,-.01,0,.055,.05,.055,Z.mail),r.tubeY(0,0,-.2,0,.058,.062,1.2,(e,t)=>t>-.05?Z.gold:Z.steel),r.rbox(0,-.26,.01,.048,.065,.052,2.5,Z.leather),n.push({bone:e===`L`?`foreL`:`foreR`,part:r})}for(let e of[`L`,`R`]){let t=new W;t.tubeY(0,0,-.44,.04,.082,.088,1.2,Z.cloth),t.ell(0,-.43,.035,.06,.065,.05,Z.steel),n.push({bone:e===`L`?`thighL`:`thighR`,part:t});let r=new W;r.tubeY(0,0,-.36,0,.066,.07,1.1,Z.steel),r.box(-.02,-.34,.05,.02,-.02,.09,Z.gold,`paint`),r.rbox(0,-.425,.03,.068,.075,.115,3,Z.leatherDark),r.box(-.08,-.5,-.1,.08,-.46,.15,Z.sole,`paint`),r.tubeY(0,0,-.37,-.32,.078,.082,1,Z.fur),n.push({bone:e===`L`?`shinL`:`shinR`,part:r})}let o=new W;o.fill(-.3,-.98,-.28,.3,0,.02,(e,t,n)=>{let r=.15+.11*Math.min(1,-t/.9);if(Math.abs(e)>r)return!1;let i=e/r*-.1*(e/r)-zm(-t);return n>i-.045&&n<=i+.001},(n,r)=>r<-.92?Z.gold:Math.abs(n)%.08<.04?e:t),n.push({bone:`cape`,part:o});let s=new W;s.jitter=.05,Im(s,.03,-.4,.62,.025,[-.3,.26,.44],.28,.58,Z.runeBlue),s.rbox(0,.01,-.28,.032,.05,.12,2.4,(e,t,n)=>n<-.37||Math.abs(n+.22)<.015?Z.gold:Z.timberDark),s.ell(0,.02,-.41,.018,.018,.018,Z.runeBlue),s.box(-.02,-.11,-.05,.02,0,.03,(e,t)=>Math.floor(t/V)%3==0?Z.leatherDark:Z.leather),Lm(s,.03,.05,.19,.036,Z.runeBlueHot),s.tubeZ(0,.03,.6,.65,.04,.04,1.1,Z.gold);for(let e=0;e<4;e++){let t=e*Math.PI/2;s.seg(Math.cos(t)*.034,.03+Math.sin(t)*.034,.64,Math.cos(t)*.046,.03+Math.sin(t)*.046,.745,.011,.007,Z.gold)}return s.ell(0,.03,.715,.03,.03,.05,Z.runeBlueHot),n.push({bone:`weapon`,part:s}),n}var Vm=[-.13,.31,.12,0,.05,0];function Hm(e,t){let n=J(G(t,0,.06));X(e,Vm,n),e[B.nRX]+=.08*n,e[B.tRY]+=.1*n;let r=Y(t,.02,.05,.26);e[B.wZ]-=.075*r,e[B.wRX]-=.32*K(r),e[B.tRX]-=.07*r,e[B.tRY]+=.05*r,e[B.nRX]-=.05*r,e[B.hZ]-=.015*r,e[B.cape]+=.08*r}function Um(e,t){let n=J(G(t,0,.18))*(1-J(G(t,.82,1)));e[B.wRZ]+=.75*n,e[B.wRX]+=.35*n,e[B.wY]-=.05*n,e[B.wZ]-=.04*n,e[B.nRX]+=.28*n,e[B.tRX]+=.06*n;let r=Y(t,.2,.42,.72);e[B.ikL]*=1-r,e[B.aLX]+=.5*r,e[B.fL]-=.6*r;let i=Y(t,.7,.74,.86);e[B.wY]+=.03*i,e[B.wRX]-=.12*i}var Wm={kind:`warden`,defaultTint:4165600,height:1.8,rig:Fm,parts:Bm,hunch:.04,stance:.06,loco:{walkHz:.95,runHz:1.4,stride:.45,runStride:.8,knee:.75,runKnee:1.35,bob:.03,armSwing:.35,lean:.2},carry:[-.14,.12,.2,-.8,.58,0],drop:[-.36,.12,0,-1.57,0,0],carryRun:[-.12,.16,.17,-.95,.68,0],gripR:[0,-.05,0],gripL:[0,-.03,.27],poleL:[.4,-1,-.2],poleR:[-.9,-.6,-.4],muzzle:{bone:`weapon`,p:[0,.03,.76]},attackDur:.34,attack:Hm,reload:Um,deathDepth:.14},Gm=16752714|Ld,Km=16765066|Ld,qm=.58;function Jm(e,t=Ym){let n=Bm(e).filter(e=>e.bone!==`weapon`),r=new W;r.jitter=.05,Im(r,.035,-.34,.5,.031,[-.24,.22,.4],.24,.46,Gm),r.rbox(0,0,-.22,.036,.058,.12,2.4,(e,t,n)=>n<-.31?Z.gold:Z.timberDark),r.box(.028,-.07,-.27,.05,.03,-.13,Z.leatherDark);for(let e=0;e<3;e++)r.seg(.04,-.045+e*.03,-.25,.04,-.045+e*.03,-.1,.009,.004,(e,t,n)=>n<-.13?Z.leather:Km);r.box(-.02,-.11,-.05,.02,0,.03,(e,t)=>Math.floor(t/V)%3==0?Z.leatherDark:Z.leather),Lm(r,.035,.05,.17,.042,Gm),r.tubeZ(0,.035,.48,.5499999999999999,.04,.04,1.5,Z.gold);for(let e=0;e<5;e++){let t=Math.PI/2+e*2*Math.PI/5,[n,i]=[Math.cos(t),Math.sin(t)];r.seg(n*.045,.035+i*.045,.5299999999999999,n*.075,.035+i*.075,.6,.013,.006,Gm)}r.ell(0,.035,qm,.032,.032,.03,Km);for(let e of[1,-1])r.seg(e*.04,0,.44,e*.075,0,.52,.014,.011,Z.bone),r.seg(e*.075,0,.52,e*.07,.06,.59,.011,.006,Z.bone);return n.push({bone:`weapon`,part:r}),n.push({bone:`torso`,part:t()}),n}function Ym(){let e=new W;e.jitter=.04;let t=-.29;return e.seg(.2,-.12,t,-.22,.56,t,.028,.026,(e,t)=>Math.abs(t-.4)<.02||Math.abs(t+.02)<.02?Z.gold:Z.timber),e.seg(.1,.035,t,.04,.13,t,.034,.034,Z.runeBlueHot),e.rbox(-.22,.56,t,.036,.03,.036,3,Z.gold),e.ell(-.23,.6,t,.026,.03,.026,Z.runeBlueHot),e.seg(-.2,.36,-.2,.22,.02,-.2,.014,.014,Z.leather),e}function Xm(e,t){let n=J(G(t,0,.05));X(e,Vm,n),e[B.nRX]+=.08*n,e[B.tRY]+=.1*n;let r=Y(t,0,.04,.3);e[B.wZ]-=.12*r,e[B.wRX]-=.42*K(r),e[B.tRX]-=.12*r,e[B.tRY]+=.08*r,e[B.nRX]-=.08*r,e[B.hZ]-=.03*r,e[B.cape]+=.12*r;let i=Y(t,.3,.4,.55);e[B.wRZ]+=.34*i;let a=Y(t,.45,.52,.62);e[B.wRZ]-=.08*a}function Zm(e,t){let n=J(G(t,0,.25))*(1-J(G(t,.85,1))*.6);e[B.wRZ]-=.55*n,e[B.wRX]+=.2*n,e[B.wY]-=.03*n,e[B.nRX]+=.22*n;let r=Y(t,.3,.55,.8);e[B.ikL]*=1-.8*r,e[B.aLX]-=.35*r,e[B.fL]-=.5*r,e[B.wZ]+=.015*r}var Qm={...Wm,kind:`warden_shotgun`,parts:Jm,gripL:[0,-.03,.29],muzzle:{bone:`weapon`,p:[0,.045,.61]},attackDur:.62,attack:Xm,reload:Zm},$m=.86;function eh(e){let t=Wm.parts(e).filter(e=>e.bone!==`weapon`),n=new W;n.jitter=.03,n.ell(0,-.15,0,.03,.03,.03,Z.gold),n.tubeY(0,0,-.13,.05,.022,.022,1,(e,t)=>Math.floor(t/.03)&1?Z.leatherDark:Z.leather),n.box(-.02,.05,-.12,.02,.09,.12,(e,t,n)=>Math.abs(n)>.09?Z.goldDark:Z.gold),n.fill(-.02,.09,-.06,.02,$m,.06,(e,t,n)=>{let r=(t-.09)/.77,i=r<.82?.045-.012*r:.035*(1-(r-.82)/.18);return Math.abs(n)<=i},(e,t,n)=>Math.abs(n)<.012&&t>.14&&t<.72?Math.floor(t/.06)&1?Z.runeBlue:U(Z.steelDark,.9):Math.abs(n)>.03?U(Z.steel,1.12):Z.steel),t.push({bone:`weapon`,part:n});let r=new W;r.jitter=.02;let i=(e,t)=>{let n=(.06-e)/.5,r=n<.35?.19:.19*(1-(n-.35)/.65);return n>=0&&n<=1&&Math.abs(t)<=r};return r.fill(.06,-.46,-.21,.1,.07,.21,(e,t,n)=>i(t,n),(t,n,r)=>{if(!i(n+.035,r)||!i(n-.035,r)||!i(n,r+.035)||!i(n,r-.035))return Z.gold;if(t<.075)return Z.steelDark;let a=Math.hypot(n+.1,r);return a<.035?Z.runeBlueHot:a<.06?Z.gold:Math.abs(r)<.015||Math.abs(n+.1)<.015?U(Z.gold,.85):U(e,.9)}),t.push({bone:`foreL`,part:r}),t}var th=[-.3,.7,-.12,-1.15,.35,.6],nh=[.22,.1,.44,1.8,-.45,-.85],rh=e=>[-e[0],e[1],e[2],e[3],-e[4],-e[5]],ih=rh(th),ah=rh(nh);function oh(e,t,n){let r=n.swing>0,i=r?-1:1,a=K(G(t,0,.08)),o=Jd(G(t,.07,.15)),s=q(G(t,.26,.42));X(e,r?ih:th,a*(1-o)),X(e,r?ah:nh,o*(1-s)),e[B.tRY]+=i*(-.55*a*(1-o)+.5*o*(1-s)),e[B.tRX]+=-.12*a*(1-o)+.26*o*(1-s),e[B.tRZ]+=i*.1*o*(1-s),e[B.nRY]-=i*.25*o*(1-s),e[B.hZ]+=.09*o*(1-s),e[B.hY]-=.03*o*(1-s),e[B.kL]+=.35*o*(1-s),e[B.lLX]-=.3*o*(1-s),e[B.aLX]+=-.7*(a+o)*.5*(1-s),e[B.aLZ]+=.15*a,e[B.fL]+=-.7*(1-s)*Math.min(1,a+o),e[B.cape]+=.22*Y(t,.1,.16,.4)}var sh={...Wm,kind:`warden_knight`,parts:eh,carry:[-.27,-.02,.16,.6,0,.1],carryRun:[-.25,.02,.2,.9,0,.1],drop:[-.36,.1,0,-1.57,0,0],gripR:[0,0,0],gripL:null,muzzle:{bone:`weapon`,p:[0,$m,0]},attackDur:.42,attack:oh},ch=1.3;function lh(e){let t=Wm.parts(e).filter(e=>e.bone!==`weapon`),n=new W;n.jitter=.03,n.ell(0,-.3,0,.04,.04,.04,Z.gold),n.tubeY(0,0,-.28,.05,.024,.024,1,(e,t)=>Math.floor(t/.035)&1?Z.leatherDark:Z.leather),n.box(-.025,.05,-.19,.025,.1,.19,(e,t,n)=>Math.abs(n)>.15?Z.goldDark:Z.gold),n.ell(0,.075,0,.035,.035,.035,Z.runeBlueHot),n.fill(-.024,.1,-.09,.024,ch,.09,(e,t,n)=>{let r=(t-.1)/1.2,i=r<.86?.078-.018*r:.064*(1-(r-.86)/.14);return Math.abs(n)<=i},(e,t,n)=>Math.abs(n)<.016&&t>.16&&t<1.1?Math.floor(t/.07)&1?Z.runeBlueHot:Z.runeBlue:Math.abs(n)>.05?U(Z.steel,1.15):Z.steel),t.push({bone:`weapon`,part:n});let r=new W;r.jitter=.02;let i=(e,t)=>{let n=(.3-t)/.5,r=n<.35?.19:.19*(1-(n-.35)/.65);return n>=0&&n<=1&&Math.abs(e)<=r};return r.fill(-.2,-.21,-.27,.2,.31,-.23,(e,t)=>i(e,t),(t,n)=>{if(!i(t,n+.035)||!i(t,n-.035)||!i(t+.035,n)||!i(t-.035,n))return Z.gold;let r=Math.hypot(t,n-.14);return r<.035?Z.runeBlueHot:r<.06?Z.gold:U(e,.9)}),t.push({bone:`torso`,part:r}),t}var uh=[-.06,-.02,.3,.55,0,.3],dh=[-.34,.5,-.14,-.62,.6,1.2],fh=[.32,.06,.4,1.4,-.6,-1.3],ph=rh(dh),mh=rh(fh);function hh(e,t,n){let r=n.swing>0,i=r?-1:1,a=K(G(t,0,.3)),o=Jd(G(t,.3,.44)),s=q(G(t,.55,.9));X(e,r?ph:dh,a*(1-o)),X(e,r?mh:fh,o*(1-s)),e[B.tRY]+=i*(-.7*a*(1-o)+.7*o*(1-s)),e[B.tRX]+=-.08*a*(1-o)+.26*o*(1-s),e[B.nRY]-=i*.25*o*(1-s),e[B.hZ]+=.08*o*(1-s),e[B.hY]-=.05*o*(1-s),e[B.kL]+=.35*o*(1-s),e[B.kR]+=.2*o*(1-s),e[B.lLX]-=.25*o*(1-s),e[B.cape]+=.25*Y(t,.3,.42,.75)}var gh={...sh,kind:`warden_knight_great`,parts:lh,carry:uh,carryRun:[-.08,.02,.26,.8,0,.35],gripR:[0,0,0],gripL:[0,-.17,0],muzzle:{bone:`weapon`,p:[0,ch,0]},attackDur:.8,attack:hh},_h=11050118;function vh(e){let t=Wm.parts(e).filter(e=>e.bone!==`weapon`),n=new W;n.jitter=.05,n.tubeZ(0,.03,-.42,.84,.023,.023,1,(e,t,n)=>[-.32,.3,.52,.74].some(e=>Math.abs(n-e)<.014)?Z.gold:t>.045&&n>.32&&n<.72&&Math.floor(n/(V*2))&1?Z.runeBlue:Math.floor(n/(V*3))&1?_h:U(_h,.86)),n.rbox(0,.01,-.3,.03,.05,.13,2.4,(e,t,n)=>n<-.4||Math.abs(n+.24)<.015?Z.gold:U(_h,.7)),n.box(-.02,-.11,-.05,.02,0,.03,(e,t)=>Math.floor(t/V)%3==0?Z.leatherDark:Z.leather),Lm(n,.03,.06,.2,.034,Z.runeBlueHot),n.box(-.01,.05,.1,.01,.09,.14,Z.gold),n.ell(0,.1,.12,.016,.016,.024,Z.runeBlueHot),n.tubeZ(0,.03,.8,.86,.036,.036,1.15,Z.gold);for(let e of[1,-1])n.seg(e*.03,.03,.83,e*.1,.03,.74,.012,.006,Z.gold);return n.seg(0,.03,.85,0,.03,1.02,.03,.006,Z.runeBlueHot),t.push({bone:`weapon`,part:n}),t}var yh={...Wm,kind:`warden_sniper`,parts:vh,gripL:[0,-.03,.36],muzzle:{bone:`weapon`,p:[0,.03,1.04]}},bh=.44;function xh(e,t=Sh){let n=Wm.parts(e).filter(e=>e.bone!==`weapon`),r=new W;r.jitter=.05,r.rbox(0,-.035,-.13,.026,.055,.09,3,(e,t,n)=>n<-.19?Z.gold:Z.timberDark),r.box(-.02,-.11,-.05,.02,0,.03,Z.timberDark),r.rbox(0,.01,.15,.03,.038,.22,3,(e,t,n)=>t>.035||Math.abs(n-.15)>.19?Z.gold:Z.timber),r.box(-.008,.045,-.02,.008,.058,.4,(e,t,n)=>Math.floor(n/V)&1?Z.runeBlue:Z.gold),r.rbox(0,.105,.05,.034,.034,.075,3,(e,t,n)=>t>.125||Math.abs(n-.05)>.06?Z.gold:Z.timberDark);for(let e of[-.018,0,.018])r.box(e-.006,.09,.125,e+.006,.105,.145,Z.runeBlueHot);r.fill(-.23,0,.22,.23,.05,.4,(e,t,n)=>Math.abs(n-(.37-.16*e*e/.0529))<.026,e=>Math.abs(e)>.18?Z.runeBlueHot:Math.abs(e)<.045?Z.gold:Z.steel);for(let e of[1,-1])r.seg(.22*e,.028,.215,.012*e,.05,.05,.008,.008,Z.runeBlueHot);return r.tubeZ(0,.068,.05,bh,.011,.011,1,Z.runeBlue),r.ell(0,.068,.46,.018,.018,.03,Z.runeBlueHot),r.rbox(0,.02,.41000000000000003,.032,.03,.02,3,Z.gold),n.push({bone:`weapon`,part:r}),n.push({bone:`torso`,part:t()}),n}function Sh(){let e=new W;e.jitter=.04;let t=-.29;return e.seg(.22,-.2,t,-.2,.62,t,.024,.022,(e,t)=>Math.abs(t-.45)<.02||Math.abs(t+.1)<.02?Z.gold:_h),e.seg(.12,-.005,t,.06,.11,t,.03,.03,Z.runeBlueHot),e.rbox(-.2,.62,t,.034,.03,.034,3,Z.gold),e.seg(-.2,.62,t,-.27,.78,t,.026,.006,Z.runeBlueHot),e.seg(-.2,.36,-.2,.22,.02,-.2,.014,.014,Z.leather),e}var Ch={...yh,kind:`warden_sniper_xbow`,parts:xh,gripL:[0,-.03,.17],muzzle:{bone:`weapon`,p:[0,.068,.49]}};function wh(e){let t=Wm.parts(e).filter(e=>e.bone!==`weapon`),n=new W;n.jitter=.05,n.rbox(0,-.035,-.2,.03,.06,.13,3,(e,t,n)=>n<-.3?Z.bronze:Z.timberDark),n.box(-.02,-.11,-.05,.02,0,.03,Z.timberDark),n.rbox(0,.02,.1,.05,.055,.12,3,(e,t,n)=>t>.055||Math.abs(n-.1)>.1?Z.bronzeLight:Z.bronze),n.ell(0,.03,.12,.034,.034,.05,Z.runeBlueHot),n.box(-.012,.08,.03,.012,.1,.2,(e,t,n)=>Math.floor(n/V)&1?Z.runeBlue:Z.gold),n.tubeZ(0,.03,.2,.52,.026,.026,.9,(e,t,n)=>Math.abs((n-.26)%.1)<.025?Z.gold:U(Z.iron,1.1)),n.fill(-.24,0,.3,.24,.06,.4,(e,t,n)=>Math.abs(n-(.36-e*e*.18/.0576))<.028,e=>Math.abs(e)>.19?Z.runeBlueHot:Math.abs(e)<.05?Z.gold:Z.runeBlue),n.rbox(0,.03,.54,.038,.038,.025,3,Z.gold),n.ell(0,.03,.5800000000000001,.022,.022,.03,Z.runeBlueHot),t.push({bone:`weapon`,part:n}),t.push({bone:`head`,part:Th()});let r=new W;return r.jitter=.04,r.seg(-.2,-.05,-.19,.2,.38,-.19,.018,.018,Z.timber),r.rbox(.2,.4,-.19,.06,.045,.05,3,e=>e>.25?Z.ironLight:Z.iron),r.box(.17,.39,-.245,.23,.41,-.235,Z.runeBlue,`paint`),r.box(-.22,.2,-.16,.22,.23,-.13,Z.leather),t.push({bone:`torso`,part:r}),t}function Th(){let e=new W;e.jitter=.02,e.tubeY(0,.005,.22,.26,.142,.142,1,Z.leatherDark,`under`);for(let t of[1,-1])e.tubeZ(.05*t,.24,.12,.16,.034,.03,1,Z.bronzeLight),e.tubeZ(.05*t,.24,.15,.165,.022,.02,1,Z.runeBlueHot);return e}var Eh={...Wm,kind:`warden_engineer`,parts:wh,gripL:[0,-.03,.24],muzzle:{bone:`weapon`,p:[0,.03,.6100000000000001]}},Dh=.62;function Oh(e,t=kh){let n=Wm.parts(e).filter(e=>e.bone!==`weapon`),r=new W;return r.jitter=.03,r.tubeY(0,0,-.2,.57,.024,.024,1,(e,t)=>t<.02?Math.floor(t/.035)&1?Z.leatherDark:Z.leather:Z.timber),r.ell(0,-.22,0,.032,.03,.032,Z.bronze),r.tubeY(0,0,.52,.57,.034,.034,1,Z.gold),r.rbox(0,Dh,.03,.085,.095,.125,3,(e,t,n)=>Math.abs(t-Dh)>.07?Z.ironLight:n>.13?Z.bronzeLight:Z.iron),r.box(-.065,.5549999999999999,.155,.065,.685,.17,(e,t)=>Math.abs(e)<.018||Math.abs(t-Dh)<.018?Z.runeBlueHot:Z.runeBlue),r.seg(0,.64,-.08,0,.7,-.24,.035,.012,Z.ironDark),n.push({bone:`weapon`,part:r}),n.push({bone:`head`,part:Th()}),n.push({bone:`torso`,part:t()}),n}function kh(){let e=new W;e.jitter=.04;let t=-.28;return e.seg(.2,-.12,t,-.16,.44,t,.03,.026,(e,t)=>t<.05?Z.timberDark:Z.bronze),e.ell(.02,.17,-.30000000000000004,.034,.034,.034,Z.runeBlueHot),e.seg(-.32,.34,-.31000000000000005,0,.54,-.31000000000000005,.02,.02,e=>Math.abs(e+.16)>.12?Z.runeBlueHot:Z.runeBlue),e.seg(-.2,.36,-.2,.22,.02,-.2,.014,.014,Z.leather),e}var Ah=[-.18,.62,-.05,-1.25,.15,.25],jh=[-.02,.05,.5,1.45,0,-.1];function Mh(e,t){let n=K(G(t,0,.16)),r=Jd(G(t,.16,.26)),i=q(G(t,.32,.55));X(e,Ah,n*(1-r)),X(e,jh,r*(1-i)),e[B.tRX]+=-.12*n*(1-r)+.3*r*(1-i),e[B.nRX]+=.12*r*(1-i),e[B.hY]-=.04*r*(1-i),e[B.kL]+=.25*r*(1-i),e[B.kR]+=.25*r*(1-i);let a=Y(t,.26,.29,.36);e[B.wY]+=.05*a,e[B.cape]+=.15*Y(t,.18,.26,.5)}var Nh={...sh,kind:`warden_engineer_hammer`,parts:Oh,carry:[-.25,-.04,.14,.45,0,.1],carryRun:[-.24,0,.18,.8,0,.1],gripR:[0,0,0],gripL:null,muzzle:{bone:`weapon`,p:[0,Dh,.17]},attackDur:.58,attack:Mh},Ph=.8;function Fh(e,t=0,n=0){let r=new W;r.jitter=.04;let i=n=>t+n*e,a=(e,t)=>[Math.min(i(e),i(t)),Math.max(i(e),i(t))],o=n=>(n-t)*e,[s,c]=a(-.14,-.1);r.box(-.02,s,n-.05,.02,c,n+.05,Z.timberDark);let[l,u]=a(-.12,.5);r.tubeY(0,n,l,u,.025,.025,1,(e,t)=>Math.abs(o(t))%.16<.03?Z.leatherDark:Z.timber);let[d,f]=a(.48,.54);r.tubeY(0,n,d,f,.034,.034,1,Z.gold);let[p,m]=a(.52,Ph),h=e=>(o(e)-.52)/.28;return r.fill(-.016,p,n-.1,.016,m,n+.1,(e,t,r)=>{let i=h(t),a=i<.2?.05+.2*i:i<.75?.09:.09*(1-(i-.75)/.25)+.015;return Math.abs(r-n)<=a},(e,t,r)=>{let i=h(t);return i>.86?Z.runeBlueHot:Math.abs(r-n)<.012&&i>.2?Z.runeBlue:Math.abs(r-n)>.065?U(Z.steel,1.1):Z.steelDark}),r}function Ih(e){let t=Wm.parts(e).filter(e=>e.bone!==`weapon`);t.push({bone:`weapon`,part:Fh(1)}),t.push({bone:`foreL`,part:Fh(-1,-.28,.03)});let n=new W;n.jitter=.02,n.rbox(0,.25,.13,.035,.03,.025,3,Z.bronze),n.ell(0,.25,.155,.022,.02,.012,Z.runeBlueHot),t.push({bone:`head`,part:n});let r=new W;return r.jitter=.05,r.rbox(.19,-.1,.02,.05,.08,.09,3,(e,t)=>t>-.04?Z.leatherDark:Z.leather),r.box(.2,-.06,.1,.23,-.02,.115,Z.gold),t.push({bone:`hips`,part:r}),t}var Lh={...sh,kind:`warden_digger`,parts:Ih,muzzle:{bone:`weapon`,p:[0,Ph,0]}},Rh=.52;function zh(e,t=Bh){let n=Wm.parts(e).filter(e=>e.bone!==`weapon`),r=new W;return r.jitter=.05,r.rbox(0,-.03,-.14,.028,.05,.09,3,(e,t,n)=>n<-.2?Z.gold:Z.timberDark),r.box(-.02,-.11,-.05,.02,0,.03,Z.timberDark),r.tubeZ(0,-.06,0,.32,.088,.088,1,(e,t,n)=>Math.abs(n-.16)<.05&&t<-.02?Z.runeBlueHot:Math.abs(n-.03)<.02||Math.abs(n-.29)<.02?Z.gold:Z.bronze),r.rbox(0,.05,.14,.032,.03,.16,3,Z.bronzeLight),r.seg(.06,-.02,.3,.05,.04,.4,.016,.016,Z.leatherDark),r.seg(.05,.04,.4,0,.05,.36,.016,.016,Z.leatherDark),r.tubeZ(0,.05,.28,.46,.022,.022,1,(e,t,n)=>Math.abs((n-.3)%.08)<.02?Z.gold:Z.iron),r.tubeZ(0,.05,.43000000000000005,Rh,.045,.045,1.8,(e,t,n)=>n>.5?Z.runeBlueHot:Z.gold),r.box(-.01,.08,.06,.01,.095,.24,(e,t,n)=>Math.floor(n/.04)&1?Z.runeBlue:Z.gold),n.push({bone:`weapon`,part:r}),n.push({bone:`torso`,part:t()}),n.push(...Ih(e).slice(-2)),n}function Bh(){let e=new W;e.jitter=.04;let t=-.27;for(let n of[1,-1])e.seg(.22*n,-.18,t,-.16*n,.42,t,.02,.02,Z.timber),e.fill(-.22*n-.07,.4,-.29000000000000004,-.22*n+.07,.62,-.25,()=>!0,(e,t)=>t>.58?Z.runeBlueHot:Z.steelDark);return e.seg(-.2,.36,-.2,.22,.02,-.2,.014,.014,Z.leather),e}var Vh={...Wm,kind:`warden_digger_spray`,parts:zh,gripL:[0,-.03,.2],muzzle:{bone:`weapon`,p:[0,.05,.55]}},Hh=16747066|Ld,Uh=16767392|Ld|Rd,Wh=12120319|Ld|Rd,Gh=[-.13,.31,.12,0,.05,0];function Kh(e,t,n,r){let i=J(G(t,0,.05));X(e,Gh,i),e[B.nRX]+=.08*i,e[B.tRY]+=.1*i;let a=Y(t,0,.05,.4);e[B.wZ]-=.1*n*a,e[B.wRX]-=r*K(a),e[B.tRX]-=.12*n*a,e[B.tRY]+=.08*a,e[B.nRX]-=.07*a,e[B.hZ]-=.03*n*a,e[B.cape]+=.12*a}var qh=.74;function Jh(e){let t=Wm.parts(e).filter(e=>e.bone!==`weapon`),n=new W;n.jitter=.05,Im(n,.03,-.4,.58,.026,[-.3,.24,.42],.26,.54,Z.runeBlue),n.rbox(0,.01,-.28,.032,.05,.12,2.4,(e,t,n)=>n<-.37?Z.gold:Z.timberDark),n.box(-.02,-.11,-.05,.02,0,.03,(e,t)=>Math.floor(t/V)%3==0?Z.leatherDark:Z.leather),Lm(n,.03,.05,.19,.036,Z.runeBlueHot),n.tubeZ(0,.03,.56,.62,.045,.045,1.1,Z.gold),n.rbox(0,.03,.635,.06,.055,.02,3,Z.goldDark);for(let e=0;e<4;e++){let t=Math.PI*(.2+.2*e),[r,i]=[Math.cos(t),Math.sin(t)];n.seg(r*.035,.03+i*.035,.64,r*.055,.03+i*.055,.71,.01,.007,Z.gold),n.ell(r*.056,.03+i*.056,.73,.014,.014,.018,Z.runeBlueHot)}return n.seg(.04,-.01,.63,.07,-.03,.69,.016,.012,Z.gold),n.ell(.072,-.032,.72,.024,.024,.03,16773312|Ld|Rd),n.ell(0,.03,.7,.02,.02,.02,Z.runeBlueHot),t.push({bone:`weapon`,part:n}),t}var Yh={...Wm,kind:`warden_burst`,parts:Jh,muzzle:{bone:`weapon`,p:[0,.03,qh]}},Xh=.66;function Zh(e){let t=Wm.parts(e).filter(e=>e.bone!==`weapon`),n=new W;n.jitter=.05,n.rbox(0,-.01,-.2,.034,.06,.16,3,(e,t,n)=>n<-.33?Z.gold:Z.timberDark),n.box(-.022,-.12,-.05,.022,0,.03,Z.timberDark),n.rbox(0,.01,.26,.036,.042,.36,3,(e,t,n)=>t>.042||Math.abs(n-.26)>.33?Z.gold:Math.floor(n/(V*3))&1?Z.timber:U(Z.timber,.85)),n.box(-.01,.05,0,.01,.064,.6000000000000001,(e,t,n)=>Math.floor(n/V)&1?Z.runeBlue:Z.gold),n.tubeZ(-.05,0,-.1,-.08,.045,.045,1,Z.ironDark),n.seg(-.05,0,-.09,-.1,-.04,-.09,.01,.01,Z.iron),n.ell(-.1,-.045,-.09,.014,.014,.014,Z.timber),n.fill(-.34,-.01,.46,.34,.06,.66,(e,t,n)=>Math.abs(n-(.6-.14*e*e/.1156))<.032,e=>Math.abs(e)>.28?Z.runeBlueHot:Math.abs(e)<.06?Z.gold:U(Z.steel,1.05)),n.rbox(0,.025,.58,.05,.05,.05,3,Z.goldDark);for(let e of[1,-1])n.seg(.33*e,.025,.47,.014*e,.06,.12,.009,.009,Z.runeBlueHot);return n.rbox(0,.07,.1,.024,.02,.03,3,Z.iron),n.tubeZ(0,.08,.1,Xh,.016,.016,1,(e,t,n)=>n<.16?Z.fur:Z.timber),n.seg(0,.08,.64,0,.08,.74,.03,.006,Wh),t.push({bone:`weapon`,part:n}),t}var Qh={...yh,kind:`warden_sniper_arbalest`,parts:Zh,gripL:[0,-.02,.3],muzzle:{bone:`weapon`,p:[0,.08,.76]},attackDur:.55,attack:(e,t)=>Kh(e,t,1.4,.5)},$h=.66;function eg(e){let t=sh.parts(e).filter(e=>e.bone!==`weapon`),n=new W;n.jitter=.03,n.ell(0,-.15,0,.03,.03,.03,Z.gold),n.tubeY(0,0,-.13,.06,.026,.026,1,(e,t)=>Math.floor(t/.03)&1?Z.leatherDark:Z.leather),n.tubeY(0,0,.06,.56,.026,.026,1,(e,t)=>Math.abs(t-.3)<.02||Math.abs(t-.45)<.02?Z.gold:Z.steelDark),n.tubeY(0,0,.53,.5700000000000001,.04,.04,1,Z.gold),n.ell(0,$h,0,.06,.09,.06,Z.steelDark);for(let e=0;e<6;e++){let t=e*Math.PI/3,[r,i]=[Math.cos(t),Math.sin(t)];n.fill(-.14,.56,-.14,.14,.76,.14,(e,t,n)=>{let a=e*r+n*i,o=-e*i+n*r,s=(t-$h)/.1;return a>.03&&a<.12-.05*s*s&&Math.abs(o)<.017},(e,t,n)=>e*r+n*i>.1||Math.abs(t-$h)>.075?U(Z.steel,1.1):Math.abs(-e*i+n*r)<.012?Z.runeBlueHot:Z.steel)}return n.seg(0,.74,0,0,.8300000000000001,0,.022,.006,Z.gold),t.push({bone:`weapon`,part:n}),t}var tg={...sh,kind:`warden_knight_mace`,parts:eg,muzzle:{bone:`weapon`,p:[0,$h,0]},attackDur:.5};function ng(e){let t=Eh.parts(e).filter(e=>e.bone!==`weapon`),n=new W;n.jitter=.05,n.rbox(0,-.035,-.2,.03,.06,.13,3,(e,t,n)=>n<-.3?Z.bronze:Z.timberDark),n.box(-.02,-.11,-.05,.02,0,.03,Z.timberDark),n.tubeZ(0,.03,-.04,.16,.055,.055,1,(e,t,n)=>t>.07&&Math.abs(n-.06)<.05?Uh:Math.abs(n-.14)<.015||Math.abs(n+.02)<.015?Z.gold:Z.bronze),n.tubeZ(0,.03,.16,.5,.03,.03,1,Z.ironDark);for(let e=0;e<5;e++){let t=.2+e*.05;n.tubeZ(0,.03,t,t+.018,.055,.055,1,(e,t)=>t>.07?U(Z.bronzeLight,1.1):Z.bronze),n.tubeZ(0,.03,t+.018,t+.05,.036,.036,1,Hh)}return n.tubeZ(0,.03,.49000000000000005,.54,.05,.05,1.2,Z.gold),n.ell(0,.03,.54,.032,.032,.03,Uh),n.box(-.012,.09,0,.012,.105,.12,(e,t,n)=>Math.floor(n/V)&1?Hh:Z.gold),t.push({bone:`weapon`,part:n}),t}var rg={...Eh,kind:`warden_engineer_beam`,parts:ng,muzzle:{bone:`weapon`,p:[0,.03,.5900000000000001]}},ig=.42;function ag(e){let t=[...Wm.parts(e).filter(e=>e.bone!==`weapon`),...Lh.parts(e).slice(-2)],n=new W;n.jitter=.05,n.tubeZ(0,.02,-.34,ig,.03,.03,1,(e,t,n)=>Math.abs(n+.2)<.016||Math.abs(n-.3)<.016?Z.gold:Math.floor(n/(V*3))&1?Z.timber:U(Z.timber,.85)),n.rbox(0,0,-.3,.036,.05,.07,3,(e,t,n)=>n<-.34?Z.bronze:Z.timberDark),n.box(-.02,-.12,-.05,.02,0,.03,Z.leatherDark);for(let e of[1,-1])n.seg(0,.02,.39999999999999997,.1*e,.06,.54,.024,.018,Z.timberDark),n.ell(.1*e,.06,.55,.026,.026,.026,Z.gold),n.ell(.1*e,.086,.55,.012,.012,.012,Hh);return n.seg(-.09,.05,.54,.09,.05,.54,.012,.012,Z.leather),n.rbox(0,.05,.5,.042,.042,.042,2.5,(e,t)=>Math.abs(e)<.01||Math.abs(t-.05)<.01?Uh:U(Z.stone,.8)),t.push({bone:`weapon`,part:n}),t.push({bone:`hips`,part:og()}),t}function og(){let e=new W;e.jitter=.05,e.rbox(-.19,-.1,.03,.05,.07,.07,3,Z.leatherDark);for(let t=0;t<3;t++)e.rbox(-.21+t*.025,-.02,.03+(t-1)*.03,.016,.016,.016,2,t===1?Uh:Hh);return e}var sg={...Wm,kind:`warden_digger_sling`,parts:ag,gripL:[0,-.02,.22],muzzle:{bone:`weapon`,p:[0,.05,.56]},attackDur:.5,attack:(e,t,n)=>Kh(e,t,1,.55)},cg=-.29,lg=[.2,-.14],ug=[-.53,.848],dg=[.848,.53];function fg(e,t=0){return[lg[0]+ug[0]*e+dg[0]*t,lg[1]+ug[1]*e+dg[1]*t]}function pg(e,t){return(e-lg[0])*ug[0]+(t-lg[1])*ug[1]}function mg(e,t,n,r,i,a,o=0,s=cg){let[c,l]=fg(t,o),[u,d]=fg(n,o);e.seg(c,l,s,u,d,s,r,i,a)}function hg(){let e=new W;return e.jitter=.04,e.seg(-.2,.36,-.2,.22,.02,-.2,.014,.014,Z.leather),e}function gg(){let e=hg();mg(e,0,.74,.028,.026,(e,t)=>Math.abs(pg(e,t)-.14)<.02||Math.abs(pg(e,t)-.6)<.02?Z.gold:Z.timber),mg(e,.3,.42,.034,.034,Z.runeBlueHot);let[t,n]=fg(.77);e.ell(t,n,cg,.055,.055,.03,Z.gold);for(let t=0;t<4;t++){let[n,r]=fg(.85,-.055+t*.037);e.ell(n,r,cg,.022,.022,.022,Z.runeBlueHot)}let[r,i]=fg(.76,.08);return e.ell(r,i,cg,.03,.03,.03,16773312|Ld),e}function _g(){let e=hg();mg(e,0,.68,.036,.032,(e,t)=>pg(e,t)<.05||pg(e,t)>.62?Z.gold:Z.timber);let[t,n]=fg(.58);for(let r of[1,-1]){let[i,a]=fg(.5,.28*r);e.seg(t,n,-.3,i,a,-.3,.026,.022,(e,r)=>Math.hypot(e-t,r-n)>.22?Z.runeBlueHot:U(Z.steel,1.05))}e.ell(t,n,-.3,.04,.04,.035,Z.goldDark),mg(e,.68,.78,.028,.008,Z.runeBlueHot);let[r,i]=fg(.12,-.05);return e.ell(r,i,cg,.04,.04,.03,Z.ironDark),e}function vg(){let e=hg(),t=-.31999999999999995,[n,r]=fg(.1);e.ell(n,r,t,.032,.032,.032,Z.gold),mg(e,.12,.3,.027,.027,Z.leather,0,t),mg(e,.3,.66,.026,.026,(e,t)=>Math.abs(pg(e,t)-.46)<.02?Z.gold:Z.steelDark,0,t),mg(e,.64,.69,.042,.042,Z.gold,0,t),mg(e,.69,.88,.07,.06,(e,t)=>Math.abs(pg(e,t)-.785)<.018?Z.runeBlueHot:Z.ironDark,0,t);for(let n of[1,-1])mg(e,.71,.86,.024,.024,U(Z.steel,1.2),.075*n,t);return mg(e,.88,.97,.024,.006,Z.gold,0,t),e}function yg(){let e=hg();mg(e,0,.18,.03,.03,Z.timberDark),mg(e,.18,.36,.055,.055,(e,t)=>{let n=pg(e,t);return n>.24&&n<.3?Hh:n<.2||n>.34?Z.gold:Z.bronze}),mg(e,.36,.62,.03,.03,Z.ironDark);for(let t=0;t<5;t++)mg(e,.39+t*.045,.408+t*.045,.052,.052,U(Z.bronzeLight,1.1));mg(e,.62,.67,.048,.048,Z.gold);let[t,n]=fg(.69);return e.ell(t,n,cg,.032,.032,.03,Uh),e}function bg(){let e=hg();mg(e,0,.56,.03,.03,(e,t)=>Math.abs(pg(e,t)-.12)<.016||Math.abs(pg(e,t)-.46)<.016?Z.gold:Z.timber);let[t,n]=fg(-.02);e.ell(t,n,cg,.036,.036,.036,Z.bronze);let[r,i]=fg(.54);for(let t of[1,-1]){let[n,a]=fg(.68,.1*t);e.seg(r,i,cg,n,a,cg,.024,.018,Z.timberDark),e.ell(n,a,cg,.026,.026,.026,Z.gold)}let[a,o]=fg(.66,-.09),[s,c]=fg(.66,.09);e.seg(a,o,cg,s,c,cg,.02,.02,Z.leather);let[l,u]=fg(.62);return e.rbox(l,u,-.3,.042,.042,.042,2.5,(e,t)=>Math.abs(e-l)<.012||Math.abs(t-u)<.012?Uh:U(Z.stone,.8)),e}var xg={...Qm,kind:`warden_shotgun_burst`,parts:e=>Jm(e,gg)},Sg={...Ch,kind:`warden_sniper_xbow_arbalest`,parts:e=>xh(e,_g)},Cg={...gh,kind:`warden_knight_great_mace`,parts:e=>[...gh.parts(e),{bone:`torso`,part:vg()}]},wg={...Nh,kind:`warden_engineer_hammer_beam`,parts:e=>Oh(e,yg)},Tg={...Vh,kind:`warden_digger_spray_sling`,parts:e=>[...zh(e,bg),{bone:`hips`,part:og()}]},Eg={hips:[0,.9,0],torso:[0,.1,0],head:[0,.49,.08],shoulder:[.29,.42,0],upperLen:.33,handLen:.33,hip:[.12,-.03,0],thighLen:.42};function Dg(e){let t=[],n=jf(Z.hideGrunt,.25,0,1),r=jf(U(Z.hideGrunt,.85),.2,0,2),i=5981746,a=new W;a.rbox(0,-.03,0,.19,.12,.15,2.8,i),a.tubeY(0,0,-.01,.07,.2,.16,1,Z.leatherDark),a.rbox(0,.03,.16,.05,.05,.03,3,Z.bone),a.box(-.03,.02,.18,-.01,.04,.2,Z.charcoal,`paint`),a.box(.01,.02,.18,.03,.04,.2,Z.charcoal,`paint`),a.box(-.1,-.34,.12,.1,0,.17,(t,n,r)=>n<-.26&&H(t*40|0,0,r*40|0)>.55?-1:e),a.box(-.12,-.3,-.17,.12,0,-.12,(t,n)=>n<-.24&&H(t*40|0,1,0)>.5?-1:U(e,.85)),t.push({bone:`hips`,part:a});let o=new W;o.rbox(0,.17,.03,.24,.22,.19,2.2,n),o.ell(0,.34,0,.3,.15,.185,n),o.ell(0,.44,-.04,.2,.1,.14,r),o.fill(-.3,0,.1,.3,.45,.3,(e,t)=>Math.abs(e)<.015||Math.abs(t-.27)<.012,U(Z.hideGrunt,.78),`paint`),o.fill(-.4,-.05,-.3,.4,.55,.3,(e,t)=>Math.abs(e*.95-(t-.22))<.035,(e,t)=>Math.abs(e*.95-(t-.22))<.012&&(t*100|0)%9<2?Z.ironLight:Z.leatherDark,`paint`),o.fill(.14,.38,-.16,.46,.6,.16,(e,t,n)=>{let r=(e-.3)/.14,i=(t-.43)/.1,a=n/.14;return r*r+i*i+a*a<=1&&t>.4},Mf(.35,.06)),o.seg(.3,.5,0,.34,.62,-.02,.03,.008,Z.boneDark),o.seg(.38,.47,.06,.45,.56,.08,.025,.008,Z.boneDark),o.fill(-.3,0,.1,.3,.4,.3,(e,t)=>Math.abs(t-(.12+e*.6))<.012&&e>-.12&&e<.08,Z.acid,`paint`),t.push({bone:`torso`,part:o});let s=new W;s.rbox(0,.14,.02,.135,.135,.135,2.5,n),s.rbox(0,.035,.07,.14,.07,.115,3,r),s.box(-.13,.155,.1,.13,.2,.17,U(Z.hideGrunt,.68)),s.box(-.03,.08,.13,.03,.15,.19,U(Z.hideGrunt,.9)),s.box(-.09,.12,.11,-.05,.14,.17,Z.eyeRed,`paint`),s.box(.05,.12,.11,.09,.14,.17,Z.eyeRed,`paint`),s.box(-.08,.045,.16,.08,.065,.2,Z.charcoal,`paint`);for(let e of[1,-1])Ff(s,e,.075,.03,.16,.12,.024),Pf(s,e,.125,.15,.02,.14,n);s.ell(0,.29,-.05,.05,.05,.05,Z.charcoal),s.seg(0,.29,-.09,0,.13,-.22,.034,.022,Nf(Z.charcoal,U(Z.charcoal,1.35),.06)),t.push({bone:`head`,part:s});for(let e of[`L`,`R`]){let i=new W;i.tubeY(0,0,-.33,.03,.08,.085,1.15,n),i.ell(0,-.14,.03,.085,.1,.08,n),t.push({bone:e===`L`?`armL`:`armR`,part:i});let a=new W;a.ell(0,-.01,0,.075,.06,.075,n),a.tubeY(0,0,-.29,0,.066,.068,1.15,n),a.tubeY(0,0,-.26,-.1,.074,.075,1.12,Nf(Z.leather,Z.leatherDark,.06)),If(a,.33,.068,r),t.push({bone:e===`L`?`foreL`:`foreR`,part:a})}for(let e of[`L`,`R`]){let a=new W;a.tubeY(0,0,-.42,.05,.1,.105,1.2,i),a.box(-.06,-.3,.06,.03,-.18,.13,U(Z.clothBrown,1.1),`paint`),t.push({bone:e===`L`?`thighL`:`thighR`,part:a});let o=new W;o.ell(0,-.01,.01,.08,.07,.08,n),o.tubeY(0,0,-.38,0,.07,.075,1.1,n),o.tubeY(0,0,-.34,-.12,.078,.082,1.08,Nf(Z.clothBrown,U(Z.clothBrown,.8),.05)),Lf(o,.45,.075,.1,r),t.push({bone:e===`L`?`shinL`:`shinR`,part:o})}let c=new W;return c.jitter=.06,c.seg(0,-.16,0,0,.66,0,.024,.022,(e,t)=>Math.abs(t)<.07?Z.leatherDark:Math.abs(t-.3)<.02?Z.iron:Z.timber),c.ell(0,-.17,0,.032,.03,.032,Z.iron),c.fill(-.02,.3,-.02,.02,.84,.36,(e,t,n)=>{if(n<.01)return!1;let r=.06+.6*Math.max(0,n-.02),i=.57+.1*n;return Math.abs(t-i)<Math.min(r,.22)&&n<.3+.06*(1-Math.abs(t-i)/.22)},(e,t,n)=>n>.27?H(0,t*60|0,3)>.85?-1:Z.ironLight:Og(e,t,n)>.62?Z.rust:Z.iron),c.seg(0,.58,0,0,.6,-.13,.028,.008,Z.ironDark),c.tubeY(0,0,.48,.66,.03,.03,1,Nf(Z.leatherDark,Z.leather,.05)),t.push({bone:`weapon`,part:c}),t}function Og(e,t,n){return H(e*25|0,t*25|0,n*25|0)}var kg=[-.2,.72,-.05,-.75,.1,.25],Ag=[-.12,.2,.5,1.9,.05,.1];function jg(e,t){let n=K(G(t,0,.32)),r=Jd(G(t,.3,.44)),i=q(G(t,.52,.85));X(e,kg,n*(1-r)),X(e,Ag,r*(1-i));let a=-.28*n*(1-r)+.42*r*(1-i);e[B.tRX]+=a,e[B.tRY]+=-.3*n*(1-r)+.2*r*(1-i),e[B.nRX]-=a*.6,e[B.hY]-=.08*r*(1-i),e[B.hZ]+=.05*r*(1-i),e[B.kL]+=.4*r*(1-i),e[B.kR]+=.3*r*(1-i),e[B.lLX]-=.3*r*(1-i),e[B.lRX]+=.2*r*(1-i),e[B.aLX]+=-.9*n*(1-r)+.7*r*(1-i),e[B.aLZ]+=.3*n,e[B.fL]+=-.6*n*(1-r),e[B.bS]+=.04*Y(t,.42,.45,.6)}var Mg={kind:`orc_grunt`,defaultTint:Z.clothRed,height:2,rig:Eg,parts:Dg,hunch:.32,stance:.1,loco:{walkHz:.85,runHz:1.3,stride:.42,runStride:.75,knee:.7,runKnee:1.3,bob:.04,armSwing:.45,lean:.25},carry:[-.36,0,.12,.55,0,.12],drop:[-.46,0,0,0,0,0],gripL:null,gripR:[0,0,0],muzzle:{bone:`weapon`,p:[0,.56,.25]},attackDur:.85,attack:jg,deathDepth:.2},Ng={hips:[0,1.18,0],torso:[0,.14,0],head:[0,.64,.16],shoulder:[.45,.55,0],upperLen:.44,handLen:.44,hip:[.19,-.04,0],thighLen:.55};function Pg(e){let t=[],n=jf(Z.hideBrute,.55,.8,11),r=jf(U(Z.hideBrute,.85),.5,.5,12),i=4863270,a=new W;a.rbox(0,-.03,0,.3,.16,.22,2.8,i),a.tubeY(0,0,-.38,0,.32,.25,1.12,(e,t,n)=>Math.abs(e)<.02||Math.abs(n)<.02&&t<-.1?-1:Mf(.3,.09)(e,t,n)),a.tubeY(0,0,-.01,.1,.33,.25,1,Nf(Z.leatherDark,i,.06)),a.box(-.13,-.5,.25,.13,.02,.3,(t,n,r)=>n<-.42&&H(t*40|0,2,r*40|0)>.5?-1:e),a.box(-.15,-.46,-.3,.15,.02,-.25,(t,n)=>n<-.38&&H(t*40|0,3,0)>.5?-1:U(e,.85)),a.rbox(0,.05,.27,.08,.075,.045,3,Z.bone),a.box(-.05,.05,.29,-.015,.08,.33,Z.charcoal,`paint`),a.box(.015,.05,.29,.05,.08,.33,Z.charcoal,`paint`),t.push({bone:`hips`,part:a});let o=new W;o.rbox(0,.14,.06,.33,.22,.27,2.3,n),o.ell(0,.38,.03,.44,.26,.3,n),o.ell(0,.52,-.1,.34,.17,.24,r),o.fill(-.3,.26,.12,.3,.56,.5,(e,t)=>Math.abs(e)<.26-(t-.26)*.25,Mf(.25,.1),`paint`),o.fill(-.5,0,-.5,.5,.7,.5,(e,t)=>Math.abs(Math.abs(e)-(.2+(t-.3)*.2))<.03&&t>.1,Z.leatherDark,`paint`);for(let e of[1,-1]){let t=.46*e;o.fill(t-.24,.5,-.24,t+.24,.8,.24,(e,n,r)=>{let i=(e-t)/.22,a=(n-.56)/.16,o=r/.22;return i*i+a*a+o*o<=1&&n>.52},(e,t,n)=>t<.56?Z.ironDark:Mf(.4,.07)(e,t,n)),o.seg(t,.68,0,t+.03*e,.86,-.02,.045,.01,Z.boneDark),o.seg(t+.1*e,.64,.08,t+.2*e,.78,.1,.035,.008,Z.boneDark),o.seg(t+.1*e,.64,-.08,t+.2*e,.78,-.12,.035,.008,Z.boneDark)}t.push({bone:`torso`,part:o});let s=new W;s.rbox(0,.12,.02,.14,.13,.13,2.5,n),s.rbox(0,.02,.07,.16,.08,.13,3,r),s.fill(-.2,.15,-.2,.2,.32,.2,(e,t,n)=>{let r=e/.155,i=(t-.14)/.15,a=(n-.01)/.15;return r*r+i*i+a*a<=1},(e,t,n)=>t<.18?Z.ironLight:Mf(.3)(e,t,n));for(let e of[1,-1])s.seg(.13*e,.22,.02,.24*e,.3,.04,.04,.03,Z.boneDark),s.seg(.24*e,.3,.04,.28*e,.42,.12,.03,.01,Z.bone),Ff(s,e,.09,.02,.17,.15,.03);s.box(-.09,.1,.12,-.04,.12,.17,Z.eyeRed,`paint`),s.box(.04,.1,.12,.09,.12,.17,Z.eyeRed,`paint`),s.box(-.1,.03,.18,.1,.05,.22,Z.charcoal,`paint`),t.push({bone:`head`,part:s});for(let e of[`L`,`R`]){let i=new W;i.tubeY(0,0,-.44,.04,.12,.13,1.15,n),i.ell(0,-.2,.05,.14,.15,.12,n),t.push({bone:e===`L`?`armL`:`armR`,part:i});let a=new W;a.ell(0,-.01,0,.12,.09,.12,n),a.tubeY(0,0,-.38,0,.1,.1,1.25,n),a.tubeY(0,0,-.34,-.1,.12,.12,1.12,Mf(.3,.08)),a.seg(0,-.22,-.1,0,-.2,-.22,.03,.008,Z.boneDark),If(a,.44,.1,r),t.push({bone:e===`L`?`foreL`:`foreR`,part:a})}for(let a of[`L`,`R`]){let o=new W;o.tubeY(0,0,-.55,.06,.15,.16,1.2,i),o.box(-.12,-.44,.08,.1,-.3,.2,U(e,.9),`paint`),t.push({bone:a===`L`?`thighL`:`thighR`,part:o});let s=new W;s.ell(0,-.01,.02,.12,.1,.12,Mf(.3)),s.tubeY(0,0,-.5,0,.11,.115,1.1,n),s.tubeY(0,0,-.42,-.1,.12,.12,1.1,Mf(.35,.1)),Lf(s,.59,.11,.14,r),t.push({bone:a===`L`?`shinL`:`shinR`,part:s})}let c=new W;c.jitter=.05,c.seg(0,-.36,0,0,1,0,.042,.042,(e,t)=>Math.abs(t-.16)<.24?Nf(Z.leatherDark,Z.leather,.06)(0,t,0):Math.abs(t-.6)<.03?Z.iron:Z.timberDark),c.ell(0,-.38,0,.06,.05,.06,Z.iron),c.rbox(0,1.08,0,.15,.14,.27,4,(e,t,n)=>Math.abs(n)>.22?Z.ironDark:Math.abs(e)>.12&&Math.abs(n)<.06&&Math.abs(t-1.08)<.06?Z.acid:Q(e,t,n,.07,9)>.62?Z.rust:Z.iron);for(let e of[1,-1])c.box(-.08,1,.27*e-.02,.08,1.16,.27*e+.02,Z.ironLight,`paint`);return c.seg(0,1.2,0,0,1.36,0,.04,.01,Z.ironDark),t.push({bone:`weapon`,part:c}),t}var Fg=[-.05,.95,.05,-.8,0,0],Ig=[-.05,0,.58,1.45,0,0];function Lg(e,t){let n=K(G(t,0,.5)),r=Jd(G(t,.48,.62)),i=q(G(t,.85,1.25));X(e,Fg,n*(1-r)),X(e,Ig,r*(1-i));let a=-.3*n*(1-r)+.5*r*(1-i);e[B.tRX]+=a,e[B.nRX]-=a*.5,e[B.hY]+=.04*n*(1-r)-.16*r*(1-i),e[B.kL]+=.6*r*(1-i),e[B.kR]+=.6*r*(1-i),e[B.lLX]-=.45*r*(1-i),e[B.lRX]-=.3*r*(1-i),e[B.lLZ]+=.1*r,e[B.lRZ]-=.1*r;let o=Y(t,.6,.63,.85);e[B.bS]-=.05*o,e[B.tRZ]+=.03*Math.sin(t*90)*o}var Rg={kind:`orc_brute`,defaultTint:Z.clothBrown,height:2.8,rig:Ng,parts:Pg,hunch:.26,stance:.14,loco:{walkHz:.62,runHz:.95,stride:.38,runStride:.62,knee:.65,runKnee:1.15,bob:.07,armSwing:.3,lean:.22},carry:[-.28,.02,.42,.35,0,-1],drop:[-.62,-.1,0,0,0,0],gripR:[0,0,0],gripL:[0,.34,0],poleL:[.9,-.5,-.3],poleR:[-.9,-.5,-.3],muzzle:{bone:`weapon`,p:[0,1.08,0]},attackDur:1.25,attack:Lg,deathDepth:.32},zg=.56,Bg=-.12,Vg=14274740,Hg={hips:[0,.93,0],torso:[0,.1,0],head:[0,.47,.05],shoulder:[.22,.39,0],upperLen:.3,handLen:.31,hip:[.1,-.03,0],thighLen:.43,extra:[0,0,0],bowString:{half:.53,z:Bg}};function Ug(e){let t=[],n=jf(Z.hideArcher,.2,0,21),r=jf(U(Z.hideArcher,.85),.2,0,22),i=6178352,a=7296056,o=new W;o.rbox(0,-.03,0,.16,.11,.12,2.8,5061418),o.tubeY(0,0,-.01,.06,.17,.13,1,Z.leatherDark),o.box(-.08,-.3,.1,.08,0,.14,(e,t)=>t<-.25&&H(e*40|0,5,0)>.5?-1:U(Z.clothBrown,.9)),o.rbox(.15,-.06,.02,.04,.06,.06,3,Z.leather),t.push({bone:`hips`,part:o});let s=new W;s.rbox(0,.16,.02,.18,.19,.13,2.3,a),s.ell(0,.32,0,.22,.11,.14,a),s.fill(-.3,0,.08,.3,.45,.3,e=>Math.abs(e)<.02,Z.leatherDark,`paint`),s.fill(-.3,0,.08,.3,.45,.3,(e,t)=>Math.abs(e)<.02&&(t/V|0)%3==0,Z.bone,`paint`),s.ell(0,.4,0,.2,.06,.14,n),s.ell(0,.41,-.02,.19,.07,.15,i),s.seg(-.1,.02,-.19,.1,.52,-.2,.06,.06,Nf(Z.leather,Z.leatherDark,.12)),s.seg(-.1,.02,-.19,.1,.52,-.2,.065,.065,Z.leatherDark,`under`);for(let t=0;t<6;t++){let n=.07+t%3*.03,r=-.23+(t>>1)*.02+t%2*.01;s.seg(n,.48,r,n+.02,.58,r,.01,.01,13351316),s.seg(n+.015,.55,r,n+.025,.61,r,.016,.006,t%3==1?Z.bone:e)}s.fill(-.3,-.05,-.3,.3,.6,.3,(e,t)=>Math.abs(-e*1.1-(t-.22))<.025,Z.leatherDark,`paint`),t.push({bone:`torso`,part:s});let c=new W;c.rbox(0,.12,.02,.11,.12,.11,2.5,n),c.rbox(0,.04,.06,.1,.055,.09,3,r),c.box(-.025,.08,.1,.025,.13,.15,U(Z.hideArcher,.9)),c.box(-.075,.12,.09,-.04,.145,.14,Z.eyeRed,`paint`),c.box(.04,.12,.09,.075,.145,.14,Z.eyeRed,`paint`);for(let e of[1,-1])Ff(c,e,.05,.03,.12,.06,.016);c.fill(-.2,0,-.25,.2,.34,.2,(e,t,n)=>{let r=e/.145,i=(t-.15)/.16,a=(n+.01)/.145;return r*r+i*i+a*a<=1&&!(n>.02&&t<.2&&Math.abs(e)<.09)},(e,t)=>t<.04?U(i,.85):i),c.seg(0,.22,-.1,0,.3,-.2,.05,.015,i);for(let e of[1,-1])Pf(c,e,.13,.15,0,.12,n);t.push({bone:`head`,part:c});for(let e of[`L`,`R`]){let i=new W;i.tubeY(0,0,-.3,.02,.058,.062,1.1,n),i.tubeY(0,0,-.08,.03,.07,.072,1,a),t.push({bone:e===`L`?`armL`:`armR`,part:i});let o=new W;o.tubeY(0,0,-.27,.01,.05,.052,1.15,n),e===`L`&&o.tubeY(0,0,-.25,-.07,.062,.064,1.1,Nf(Z.leather,Z.leatherDark,.06)),If(o,.31,.052,r),t.push({bone:e===`L`?`foreL`:`foreR`,part:o})}for(let e of[`L`,`R`]){let i=new W;i.tubeY(0,0,-.43,.04,.075,.08,1.2,5061418),t.push({bone:e===`L`?`thighL`:`thighR`,part:i});let a=new W;a.tubeY(0,0,-.42,0,.058,.062,1.15,n),a.tubeY(0,0,-.4,-.08,.065,.068,1.1,Nf(Z.clothBrown,U(Z.clothBrown,.8),.045)),Lf(a,.47,.062,.085,r),t.push({bone:e===`L`?`shinL`:`shinR`,part:a})}let l=new W;l.jitter=.04,l.fill(-.02,-.56-.05,-.2,.02,.6100000000000001,.1,(e,t,n)=>{let r=Math.abs(t)/zg;if(r>1)return!1;let i=-.13*r*r+.035*Math.max(0,r-.8)/.2,a=.032-.016*r;return Math.abs(n-i)<a},(e,t)=>{let n=Math.abs(t)/zg;return n<.12?Z.leatherDark:n>.88?Z.bone:Math.abs(n-.5)<.03?Z.boneDark:Z.timber}),t.push({bone:`weapon`,part:l});let u=new W,d=new W;u.jitter=d.jitter=0,u.box(0,-.53,0,.01,0,.01,Vg),d.box(0,0,0,.01,.53,.01,Vg),t.push({bone:`stringT`,part:u},{bone:`stringB`,part:d});let f=new W;return f.jitter=.03,f.box(0,0,Bg,.01,.01,.5,13351316),f.seg(0,0,.48,0,0,.6,.026,.005,Z.ironLight),f.box(-.03,-.01,-.11,.03,.01,-.01999999999999999,e),f.box(-.01,-.03,-.11,.01,.03,-.01999999999999999,e),t.push({bone:`extra`,part:f}),t}var Wg=[.1,.38,.5,0,.08,-.18];function Gg(e,t){let n=K(G(t,0,.26)),r=t>=.74,i=q(G(t,.84,1.1));X(e,Wg,n*(1-i)),e[B.xS]=G(t,.12,.18)*+!r,e[B.ikR]=J(G(t,.1,.28))*(1-J(G(t,.84,1)));let a=K(G(t,.3,.62)),o=K(G(t,.74,.8));e[B.xZ]=-.4*a-.1*o,e[B.tRY]+=-.22*n*(1-i),e[B.tRX]-=.06*n,e[B.nRY]+=.22*n*(1-i),e[B.nRX]+=.05*n;let s=Y(t,.74,.76,.9);e[B.wRX]-=.12*s,e[B.wZ]+=.03*s,e[B.tRY]+=.06*s}var Kg={kind:`orc_archer`,defaultTint:Z.fletch,height:1.9,rig:Hg,parts:Ug,hunch:.2,stance:.07,loco:{walkHz:.95,runHz:1.45,stride:.45,runStride:.8,knee:.75,runKnee:1.4,bob:.03,armSwing:.4,lean:.25},carry:[.3,-.02,.14,.5,0,-.1],drop:[.38,.1,0,0,0,0],gripL:[0,0,0],gripR:[0,0,Bg],gripROnExtra:!0,ikIdle:[1,0],poleL:[.9,-.6,-.1],poleR:[-.9,-.3,-.4],muzzle:{bone:`extra`,p:[0,0,.6]},attackDur:1.1,attack:Gg,deathDepth:.14,extraScale:0},qg={hips:[0,.9,0],torso:[0,.1,0],head:[0,.45,.06],shoulder:[.21,.37,0],upperLen:.29,handLen:.3,hip:[.09,-.03,0],thighLen:.42,extra:[0,.86,0]},Jg=10354522|Ld;function Yg(e){let t=[],n=jf(Z.hideShaman,.3,0,31),r=jf(U(Z.hideShaman,.85),.3,0,32),i=(t,n,r)=>Q(t,n,r,.12,33)>.7?U(e,.8):e,a=(e,t,n)=>U(7035464,.85+.3*H(e/V|0,t/V|0,n/V|0)),o=new W;o.fill(-.4,-.86,-.4,.4,.08,.4,(e,t,n)=>{let r=Math.min(1,-t/.86),i=.19+.13*r,a=.15+.12*r;return(e/i)**2+(n/a)**2<=1&&t>-.86+.03*Math.abs(Math.sin(e*30+n*20))},(e,t,n)=>t<-.72?t>-.78&&(Math.atan2(n,e)*8|0)%3==0&&H(e/V|0,7,n/V|0)>.4?Z.acid:t<-.8?Z.corruptDeep:Z.corrupt:i(e,t,n)),o.tubeY(0,0,0,.06,.2,.16,1,10521180),o.seg(.08,.02,.15,.1,-.2,.17,.02,.018,10521180),o.rbox(.1,-.24,.17,.035,.04,.03,3,Z.bone),t.push({bone:`hips`,part:o});let s=new W;s.rbox(0,.17,0,.18,.2,.13,2.3,i),s.ell(0,.34,-.03,.2,.1,.15,i),s.ell(0,.4,-.05,.25,.08,.19,a),s.ell(0,.36,-.08,.22,.12,.16,a,`under`),s.fill(-.3,.3,0,.3,.46,.35,(e,t,n)=>{let r=Math.hypot(e/1.1,n-.02);return Math.abs(r-.15)<.018&&t>.36&&t<.42&&n>.02},e=>Math.floor(e/V)&1?Z.bone:Z.boneDark),s.rbox(0,.3,.16,.04,.04,.03,3,Z.bone),s.box(-.03,.3,.18,-.01,.32,.2,Jg,`paint`),s.box(.01,.3,.18,.03,.32,.2,Jg,`paint`),s.fill(-.3,0,.05,.3,.3,.3,(e,t,n)=>Q(e,t,n,.1,34)>.68,Z.corrupt,`paint`),t.push({bone:`torso`,part:s});let c=new W;c.rbox(0,.11,.03,.105,.12,.11,2.4,n),c.rbox(0,.03,.07,.095,.06,.09,3,r),c.seg(0,.14,.12,0,.07,.19,.03,.022,U(Z.hideShaman,.9)),c.box(-.075,.12,.1,-.04,.15,.15,Jg,`paint`),c.box(.04,.12,.1,.075,.15,.15,Jg,`paint`);for(let e of[1,-1])Ff(c,e,.05,.03,.13,.06,.016),Pf(c,e,.1,.1,0,.15,n);c.seg(0,0,.1,0,-.1,.12,.035,.012,12105384),c.fill(-.2,.15,-.2,.2,.34,.26,(e,t,n)=>{let r=e/.13,i=(t-.2)/.1,a=(n-.02)/.14;return r*r+i*i+a*a<=1&&t>.17},(e,t,n)=>n>.08&&Math.abs(Math.abs(e)-.05)<.02?Z.charcoal:Z.bone),c.rbox(0,.22,.17,.06,.04,.07,2.5,Z.boneDark);for(let e of[1,-1])c.seg(.1*e,.26,.02,.2*e,.36,-.06,.035,.028,Z.boneDark),c.seg(.2*e,.36,-.06,.22*e,.46,.04,.028,.01,Z.bone);t.push({bone:`head`,part:c});for(let e of[`L`,`R`]){let a=new W;a.tubeY(0,0,-.3,.03,.065,.068,1.25,i),t.push({bone:e===`L`?`armL`:`armR`,part:a});let o=new W;o.tubeY(0,0,-.12,.01,.085,.088,1.1,(e,t,n)=>t<-.1?Z.corrupt:i(e,t,n)),o.tubeY(0,0,-.27,-.1,.045,.047,1,n),o.tubeY(0,0,-.23,-.2,.055,.057,1,Z.bone),If(o,.3,.05,r),t.push({bone:e===`L`?`foreL`:`foreR`,part:o})}for(let r of[`L`,`R`]){let i=new W;i.tubeY(0,0,-.42,.03,.07,.075,1.1,U(e,.7)),t.push({bone:r===`L`?`thighL`:`thighR`,part:i});let a=new W;a.tubeY(0,0,-.4,0,.052,.055,1.1,n),Lf(a,.45,.06,.085,7166530),t.push({bone:r===`L`?`shinL`:`shinR`,part:a})}let l=new W;l.jitter=.06;let u=[[0,-.92,0],[.02,-.5,-.01],[-.015,-.1,.01],[.01,.3,0],[-.01,.7,.015]];for(let e=0;e+1<u.length;e++){let[t,n]=[u[e],u[e+1]];l.seg(t[0],t[1],t[2],n[0],n[1],n[2],.03,.03,(e,t,n)=>Math.abs(t)<.06?Z.leatherDark:Q(e,t,n,.05,35)>.6?Z.timber:Z.timberDark)}l.ell(0,.4,0,.045,.03,.045,Z.bone),l.ell(0,.46,0,.04,.02,.04,Z.fletch);for(let[e,t]of[[.07,0],[-.05,.05],[-.03,-.07]])l.seg(0,.7,0,e,.84,t,.022,.018,Z.timberDark),l.seg(e,.84,t,e*.5,.97,t*.5,.018,.008,Z.boneDark);t.push({bone:`weapon`,part:l});let d=new W;return d.fill(-.06,-.1,-.06,.06,.12,.06,(e,t,n)=>Math.abs(e)+Math.abs(n)+Math.abs(t)*.55<.065,(e,t)=>t>.02?5111590|Ld|Rd:2277392|Ld|Rd),t.push({bone:`extra`,part:d}),t}var Xg=[-.2,.66,.2,-.4,0,.1],Zg=[-.16,.36,.44,.55,0,0];function Qg(e,t){let n=K(G(t,0,.4)),r=K(G(t,.44,.58)),i=q(G(t,.7,1.15));X(e,Xg,n*(1-r)),X(e,Zg,r*(1-i));let a=n*(1-r),o=r*(1-i);e[B.tRX]+=-.25*a+.25*o,e[B.nRX]+=-.35*a+.1*o,e[B.hY]+=.02*a-.05*o,e[B.aLX]+=-2*a-1.5*o,e[B.aLZ]+=.5*a+.1*o,e[B.fL]+=-.5*a+.2*o,e[B.glow]=J(G(t,.15,.4))*(1-J(G(t,.7,.9))),e[B.xS]=1+.6*J(G(t,.1,.44))*(1-i)+.5*Y(t,.44,.5,.7),e[B.bS]+=.03*Y(t,.44,.48,.65)}function $g(e,t){e[B.xS]*=1+.08*Math.sin(t*3.1)}var e_={kind:`orc_shaman`,defaultTint:Z.robe,height:1.9,rig:qg,parts:Yg,hunch:.28,stance:.06,loco:{walkHz:.8,runHz:1.2,stride:.34,runStride:.6,knee:.6,runKnee:1.1,bob:.03,armSwing:.3,lean:.2},carry:[-.28,.06,.2,-.26,0,.05],drop:[-.34,.2,0,0,0,0],gripL:null,gripR:[0,0,0],muzzle:{bone:`extra`,p:[0,0,0]},attackDur:1.15,attack:Qg,deathDepth:.16,idleExtra:$g},t_={hips:[0,1.24,0],torso:[0,.14,0],head:[0,.63,.08],shoulder:[.42,.53,0],upperLen:.42,handLen:.42,hip:[.18,-.04,0],thighLen:.58,cape:[0,.6,-.22]},n_=3817028;function r_(e,t,n){let r=Q(e,t,n,.08,41);return r>.7?Z.rust:r<.25?U(n_,1.25):n_}function i_(e){let t=[],n=jf(Z.hideChief,.6,1,41),r=jf(U(Z.hideChief,.85),.55,.6,42),i=4140578,a=t=>(n,r,i)=>Math.abs((r*100|0)%9)<2?e:t(n,r,i),o=new W;o.rbox(0,-.03,0,.29,.16,.22,2.8,i),o.tubeY(0,0,-.4,0,.31,.25,1.12,(e,t,n)=>Math.abs(e)<.02||Math.abs(n)<.02&&t<-.1?-1:t<-.36?Z.bronze:r_(e,t,n)),o.tubeY(0,0,-.01,.1,.32,.25,1,Nf(Z.leatherDark,Z.bronze,.05)),o.box(-.13,-.56,.25,.13,.02,.3,(t,n,r)=>n<-.48&&H(t*40|0,2,r*40|0)>.5?-1:e),o.box(-.15,-.5,-.3,.15,.02,-.25,(t,n)=>n<-.42&&H(t*40|0,3,0)>.5?-1:U(e,.8));for(let e of[1,-1])o.rbox(.24*e,-.02,.2,.05,.055,.045,3,Z.bone),o.box(.24*e-.035,-.01,.23,.24*e-.01,.015,.26,Z.charcoal,`paint`),o.box(.24*e+.01,-.01,.23,.24*e+.035,.015,.26,Z.charcoal,`paint`);t.push({bone:`hips`,part:o});let s=new W;s.rbox(0,.15,.05,.3,.22,.25,2.3,n),s.ell(0,.38,.02,.4,.25,.28,n),s.ell(0,.5,-.08,.3,.15,.22,r),s.fill(-.4,.05,.08,.4,.58,.5,(e,t)=>Math.abs(e)<.3-(t-.05)*.12,(e,t,n)=>Math.abs(Math.abs(e)-(.29-(t-.05)*.12))<.035||Math.abs(t-.07)<.03?Z.bronze:r_(e,t,n),`paint`),s.rbox(0,.36,.3,.07,.07,.04,3,Z.bone),s.box(-.045,.37,.33,-.01,.4,.36,Z.eyeRed,`paint`),s.box(.01,.37,.33,.045,.4,.36,Z.eyeRed,`paint`),s.ell(0,.58,-.04,.3,.08,.24,(e,t,n)=>U(3878953,.85+.35*H(e*40|0,t*40|0,n*40|0)));for(let e of[1,-1]){let t=.43*e;s.fill(t-.22,.52,-.22,t+.22,.8,.22,(e,n,r)=>{let i=(e-t)/.2,a=(n-.57)/.14,o=r/.2;return i*i+a*a+o*o<=1&&n>.53},(e,t,n)=>t<.58?Z.bronzeLight:r_(e,t,n)),s.seg(t+.04*e,.66,0,t+.2*e,.9,-.02,.05,.012,Z.bone),s.seg(t+.12*e,.63,.1,t+.26*e,.78,.14,.035,.008,Z.boneDark),s.seg(t+.12*e,.63,-.1,t+.26*e,.78,-.14,.035,.008,Z.boneDark)}s.seg(.16,.1,-.3,.18,1.35,-.32,.03,.028,(e,t)=>Math.abs(t-.7)<.03?Z.bronze:Z.timberDark),s.rbox(.18,1.4,-.32,.055,.06,.055,3,Z.bone),s.box(.15,1.39,-.28,.17,1.41,-.26,Z.eyeRed,`paint`),s.box(.19,1.39,-.28,.21,1.41,-.26,Z.eyeRed,`paint`),s.fill(.19,.8,-.34,.6,1.3,-.3,(e,t)=>t<1.28-(e-.19)*.25&&t>.82+(e-.19)*.35*(.5+.5*Math.sin(e*40)),(t,n)=>Math.abs(n-1.05+(t-.19)*.05)<.07&&t>.28&&t<.44?Z.bone:t<.22||n>1.23?Z.bronze:e),t.push({bone:`torso`,part:s});let c=new W;c.fill(-.4,-1.05,-.16,.4,0,.02,(e,t,n)=>{let r=.28+.1*Math.min(1,-t);if(Math.abs(e)>r||t<-.95&&H(e*40|0,9,0)>.5)return!1;let i=e/r*-.1*(e/r)-.03*-t;return n>i-.05&&n<=i+.001},(t,n,r)=>Q(t,n,r,.1,43)>.7?U(e,.75):n<-.85?U(e,.85):e),t.push({bone:`cape`,part:c});let l=new W;l.rbox(0,.13,.03,.15,.15,.14,2.5,n),l.rbox(0,.03,.08,.165,.08,.13,3,r),l.fill(-.22,.14,-.22,.22,.36,.22,(e,t,n)=>{let r=e/.17,i=(t-.15)/.17,a=(n-.02)/.165;return r*r+i*i+a*a>1?!1:!(n>.08&&t<.2&&Math.abs(e)<.11)},(e,t,n)=>t<.2?Z.bronze:r_(e,t,n)),l.box(-.02,.1,.15,.02,.22,.2,Z.bronze);for(let e=0;e<5;e++){let t=.1-e*.07;l.seg(0,.3,t,0,.42-e*.015,t-.03,.028,.008,e%2?Z.boneDark:Z.bone)}for(let e of[1,-1])l.seg(.15*e,.24,.02,.28*e,.3,0,.05,.035,Z.boneDark),l.seg(.28*e,.3,0,.33*e,.46,.08,.035,.01,Z.bone),Ff(l,e,.1,.02,.18,.17,.032);l.box(-.095,.13,.13,-.045,.15,.19,Z.eyeRed,`paint`),l.box(.045,.13,.13,.095,.15,.19,Z.eyeRed,`paint`),l.box(-.1,.04,.19,.1,.06,.23,Z.charcoal,`paint`),t.push({bone:`head`,part:l});for(let e of[`L`,`R`]){let i=new W;i.tubeY(0,0,-.42,.04,.12,.125,1.15,a(n)),i.ell(0,-.2,.04,.13,.14,.11,a(n)),t.push({bone:e===`L`?`armL`:`armR`,part:i});let o=new W;o.ell(0,-.01,0,.11,.08,.11,n),o.tubeY(0,0,-.36,0,.095,.095,1.25,n),o.tubeY(0,0,-.33,-.1,.115,.115,1.12,(e,t,n)=>Math.abs(t+.12)<.02||Math.abs(t+.31)<.02?Z.bronzeLight:r_(e,t,n)),o.seg(0,-.2,-.1,0,-.18,-.24,.03,.008,Z.bone),o.seg(.1,-.2,0,.2,-.18,0,.025,.008,Z.bone),o.seg(-.1,-.2,0,-.2,-.18,0,.025,.008,Z.bone),If(o,.42,.095,r),t.push({bone:e===`L`?`foreL`:`foreR`,part:o})}for(let e of[`L`,`R`]){let r=new W;r.tubeY(0,0,-.58,.06,.145,.155,1.2,i),r.fill(-.2,-.5,0,.2,-.1,.25,(e,t,n)=>n>.05,r_,`paint`),t.push({bone:e===`L`?`thighL`:`thighR`,part:r});let a=new W;a.ell(0,-.01,.03,.12,.1,.12,Z.bronze),a.tubeY(0,0,-.52,0,.11,.115,1.1,n),a.tubeY(0,0,-.46,-.08,.125,.125,1.08,(e,t,n)=>Math.abs(t+.1)<.02?Z.bronze:r_(e,t,n)),Lf(a,.62,.11,.14,r_),t.push({bone:e===`L`?`shinL`:`shinR`,part:a})}let u=new W;return u.jitter=.05,u.seg(0,-.42,0,0,1.3,0,.04,.04,(e,t)=>Math.abs(t-.15)<.25?Nf(Z.leatherDark,Z.leather,.06)(0,t,0):Math.abs(t-.6)<.03||Math.abs(t-.85)<.03?Z.bronze:Z.timberDark),u.ell(0,-.44,0,.06,.05,.06,Z.bronze),u.fill(-.025,.85,-.45,.025,1.45,.45,(e,t,n)=>{let r=Math.abs(n);if(r<.03)return!1;let i=.07+.55*Math.max(0,r-.04);return Math.abs(t-1.15)<Math.min(i,.26)&&r<.36+.06*(1-Math.abs(t-1.15)/.26)},(e,t,n)=>{let r=Math.abs(n);return r>.33?Z.ironLight:r>.3?Z.acid:Q(e,t,n,.07,44)>.66?Z.rust:n_}),u.rbox(0,1.15,0,.055,.12,.055,3,Z.bronze),u.seg(0,1.26,0,0,1.46,0,.04,.01,Z.ironLight),t.push({bone:`weapon`,part:u}),t}var a_=[-.28,.85,-.05,-.9,.3,.6],o_=[.08,.05,.58,1.45,-.2,-.45];function s_(e,t){let n=K(G(t,0,.45)),r=Jd(G(t,.42,.58)),i=q(G(t,.78,1.2));X(e,a_,n*(1-r)),X(e,o_,r*(1-i));let a=n*(1-r),o=r*(1-i);e[B.tRX]+=-.2*a+.4*o,e[B.tRY]+=-.45*a+.35*o,e[B.nRX]+=.2*a-.25*o,e[B.nRY]+=.3*a-.2*o,e[B.hY]+=.03*a-.14*o,e[B.hRY]+=-.15*a+.15*o,e[B.kL]+=.55*o,e[B.kR]+=.45*o,e[B.lLX]-=.4*o,e[B.lRX]+=.2*o,e[B.cape]+=.4*o-.1*a,e[B.bS]-=.04*Y(t,.56,.59,.8)}var c_={kind:`orc_warchief`,defaultTint:9051930,height:2.9,rig:t_,parts:i_,hunch:.14,stance:.13,loco:{walkHz:.65,runHz:1,stride:.4,runStride:.65,knee:.65,runKnee:1.15,bob:.06,armSwing:.3,lean:.18},carry:[-.26,.05,.38,.25,0,-.75],drop:[-.62,-.1,0,0,0,0],gripR:[0,0,0],gripL:[0,.32,0],poleL:[.9,-.5,-.3],poleR:[-.9,-.5,-.3],muzzle:{bone:`weapon`,p:[0,1.15,.3]},attackDur:1.2,attack:s_,deathDepth:.3},l_=12088356,u_=3090982,d_=13221016,f_=.25,p_=.2,m_=[.13,.36,.07],h_={hips:[0,.86,0],torso:[0,.1,0],head:[0,.43,.08],shoulder:[.23,.37,0],upperLen:.3,handLen:.3,hip:[.1,-.03,0],thighLen:.4,extra:[0,0,0]},g_=e=>p_-.04*(e/f_)**2;function __(e){let t=[],n=jf(Z.hideGrunt,.15,0,41),r=jf(U(Z.hideGrunt,.84),.15,0,42),i=(e,t,n)=>Q(e,t,n,.07,43)>.73?U(u_,1+.3*H(e/V|0,t/V|0,n/V|0)):-1,a=5193518,o=new W;o.rbox(0,-.03,0,.17,.11,.13,2.8,a),o.tubeY(0,0,-.01,.07,.18,.14,1,Nf(e,U(e,.8),.05)),o.seg(-.12,.02,.12,-.16,-.22,.14,.03,.022,U(e,.85)),o.box(-.09,-.28,.11,.09,0,.15,(t,n)=>n<-.21&&H(t*40|0,3,0)>.5?-1:U(e,.75)),o.rbox(.15,-.07,.03,.04,.055,.055,3,Z.leather),o.rbox(-.1,-.08,-.12,.05,.05,.04,3,Z.leatherDark),t.push({bone:`hips`,part:o});let s=new W;s.rbox(0,.15,.02,.19,.19,.14,2.3,n),s.ell(0,.3,0,.24,.12,.155,n),s.ell(0,.38,-.05,.17,.08,.12,r),s.fill(-.3,-.05,-.25,.3,.5,.25,()=>!0,i,`paint`),s.fill(-.3,0,.05,.3,.4,.3,(e,t)=>Math.abs(e)<.013&&t>.12,U(Z.hideGrunt,.75),`paint`),s.fill(-.3,.1,.05,0,.4,.3,(e,t,n)=>Q(e,t,n,.05,44)>.62&&Math.hypot(e+.1,t-.28)<.08,9059628,`paint`);let c=(e,t)=>Math.abs(e*1-(t-.2));s.fill(-.4,-.05,-.3,.4,.55,.3,(e,t)=>c(e,t)<.03,Z.leatherDark,`paint`);for(let e=0;e<4;e++){let t=.08+e*.1,n=t-.2,r=Math.sqrt(Math.max(0,1-(n/.24)**2))*.15+.035;s.ell(n,t,r,.03,.035,.028,Z.corruptDeep),s.seg(n,t+.02,r,n+.01,t+.065,r,.014,.004,Z.acid)}s.fill(-.3,.33,-.25,.3,.5,.3,(e,t,n)=>{let r=Math.hypot(e/1.05,n+.01);return r>.1&&r<.165&&Math.abs(t-(.43-.12*Math.max(0,n)))<.035},Nf(e,U(e,.82),.03)),s.seg(0,.4,.16,.03,.3,.2,.035,.02,U(e,.9)),t.push({bone:`torso`,part:s});let l=new W;l.rbox(0,.12,.02,.12,.125,.12,2.5,n),l.rbox(0,.035,.07,.12,.06,.1,3,r),l.box(-.12,.14,.09,.12,.18,.16,U(Z.hideGrunt,.66)),l.box(-.025,.07,.12,.025,.14,.17,U(Z.hideGrunt,.88)),l.fill(-.2,.09,.05,.2,.16,.2,(e,t,n)=>n>.08&&t<.155,u_,`paint`),l.box(-.085,.11,.1,-.045,.135,.16,Z.eyeRed,`paint`),l.box(.045,.11,.1,.085,.135,.16,Z.eyeRed,`paint`),l.fill(-.2,.02,.1,.2,.07,.2,(e,t)=>Math.abs(e)<.08&&Math.abs(t-(.045+.4*e*e))<.014,Z.charcoal,`paint`),l.fill(-.2,.02,.1,.2,.07,.2,(e,t)=>Math.abs(e)<.07&&Math.abs(t-(.058+.4*e*e))<.006&&(e/V|0)%2==0,Z.bone,`paint`);for(let e of[1,-1])Ff(l,e,.07,.03,.14,.07,.018);Pf(l,1,.115,.14,.02,.15,n),Pf(l,-1,.115,.14,.02,.15,n),l.fill(-.35,.1,-.2,-.2,.3,.1,(e,t)=>e<-.2&&t>.17&&t<.2,0,`carve`),l.fill(-.2,.18,-.2,.2,.24,.2,(e,t,n)=>Math.abs(t-(.205-.08*n))<.018&&Math.hypot(e/1.02,n-.02)>.1,Z.leatherDark,`paint`);for(let e of[1,-1])l.tubeZ(e*.052,.225,.1,.16,.042,.042,1,Z.bronzeLight),l.tubeZ(e*.052,.225,.12,.165,.028,.028,1,2898494),l.box(e*.052-.02,.235,.15,e*.052-.005,.25,.168,12574952);l.box(-.012,.215,.13,.012,.235,.16,Z.bronze),l.ell(0,.27,-.04,.05,.035,.05,u_),l.seg(0,.28,-.05,.02,.36,-.09,.025,.01,U(u_,1.25)),t.push({bone:`head`,part:l});for(let e of[`L`,`R`]){let a=new W;a.tubeY(0,0,-.3,.03,.068,.07,1.15,n),a.ell(0,-.12,.02,.07,.085,.07,n),a.fill(-.1,-.3,-.1,.1,.05,.1,()=>!0,i,`paint`),t.push({bone:e===`L`?`armL`:`armR`,part:a});let o=new W;o.ell(0,-.01,0,.065,.055,.065,n),o.tubeY(0,0,-.27,0,.056,.058,1.12,n),o.tubeY(0,0,-.24,-.06,.064,.066,1.08,Nf(d_,U(d_,.82),.04)),If(o,.3,.06,r),t.push({bone:e===`L`?`foreL`:`foreR`,part:o})}for(let i of[`L`,`R`]){let o=new W;o.tubeY(0,0,-.4,.04,.085,.09,1.15,a),o.box(-.05,-.28,.05,.03,-.16,.11,U(e,.8),`paint`),t.push({bone:i===`L`?`thighL`:`thighR`,part:o});let s=new W;s.ell(0,-.01,.01,.07,.06,.07,n),s.tubeY(0,0,-.36,0,.06,.064,1.1,n),s.tubeY(0,0,-.32,-.1,.068,.07,1.06,Nf(d_,U(d_,.8),.05)),Lf(s,.43,.068,.09,r),t.push({bone:i===`L`?`shinL`:`shinR`,part:s})}let u=new W;u.jitter=.04;let d=(e,t,n)=>g_(t)*(.9+.14*Q(e,t,n,.07,48)),f=(e,t,n)=>Math.hypot(e,n)>d(e,t,n)-V*1.2;u.fill(-.2,-.25,-.2,p_,f_,p_,(e,t,n)=>Math.hypot(e,n)<=d(e,t,n)&&Math.abs(t)<=f_-.03*Q(e,t,n,.06,49),(e,t,n)=>{if(Math.abs(Math.abs(t)-.15)<.02)return Q(e,t,n,.05,45)>.7?Z.rust:Z.ironDark;if(Math.abs(Q(e,t,n,.045,50)-.5)<.035)return Z.acid;let r=Q(e,t,n,.04,46);return r>.7?U(Z.corrupt,1.15):r<.3?U(Z.corruptDeep,.85):Z.corruptDeep}),u.fill(-.12,-.12,.08,.12,.12,.25,(e,t,n)=>f(e,t,n)&&(Math.hypot(e,(t-.025)*1.1)<.085||Math.abs(e)<.05&&t<-.02&&t>-.085),Z.bone,`paint`),u.fill(-.12,-.12,.08,.12,.12,.25,(e,t,n)=>f(e,t,n)&&t<-.045&&t>-.075&&(e/V|0)%2==0&&Math.abs(e)<.045,Z.charcoal,`paint`),u.fill(-.12,-.12,.08,.12,.12,.25,(e,t,n)=>f(e,t,n)&&Math.hypot(Math.abs(e)-.036,t-.03)<.019,Z.acid,`paint`),u.tubeY(.09,.05,.22,.27,.04,.04,.9,Z.ironDark),u.seg(.09,f_,.05,m_[0],m_[1],m_[2],.03,.01,Z.acid),u.seg(.07,f_,.04,.03,.33,.02,.018,.006,U(Z.corrupt,1.4)|Ld),u.seg(.11,f_,.07,.17,.31,.1,.016,.005,Z.acid),u.ell(m_[0],m_[1]+.008,m_[2],.02,.02,.02,10157898|Ld|Rd),u.ell(m_[0],m_[1]+.01,m_[2],.01,.01,.01,15007664|Ld|Rd);for(let[e,t,n]of[[.035,.025,0],[-.025,.04,.02],[.01,.05,-.025]])u.box(m_[0]+e-.012,m_[1]+t-.012,m_[2]+n-.012,m_[0]+e+.012,m_[1]+t+.012,m_[2]+n+.012,12611839|Ld|Rd);return t.push({bone:`extra`,part:u}),t}var v_=[0,.98,-.03,-.12,0,0];function y_(e,t){let n=K(G(t,0,.26));X(e,v_,n);let r=n*G(t,.2,.3);e[B.wRZ]+=.09*r*Math.sin(t*43),e[B.wX]+=.02*r*Math.sin(t*37+1),e[B.tRX]+=-.42*n,e[B.nRX]+=-.2*n-.12*r*(.5+.5*Math.sin(t*22)),e[B.hY]+=-.05*Y(t,0,.1,.3)+.02*r*Math.sin(t*30),e[B.kL]+=.25*n,e[B.kR]+=.25*n,e[B.lLX]-=.12*n,e[B.lRX]-=.12*n,e[B.bS]+=.03*r*Math.sin(t*30),e[B.glow]=J(G(t,.05,.2))}function b_(e,t){e[B.wRZ]+=.03*Math.sin(t*5.3)}var x_={kind:`orc_bomber`,defaultTint:l_,height:1.8,rig:h_,parts:__,hunch:.36,stance:.1,loco:{walkHz:1,runHz:1.55,stride:.42,runStride:.78,knee:.75,runKnee:1.4,bob:.045,armSwing:.2,lean:.3},carry:[0,-.04,.3,-.22,0,0],carryRun:[0,0,.29,-.36,0,0],drop:[0,0,.3,0,0,0],gripL:[.20500000000000002,-.01,.03],gripR:[-.2-.005,-.01,.03],poleL:[.9,-.5,-.4],poleR:[-.9,-.5,-.4],muzzle:{bone:`extra`,p:[m_[0],m_[1]+.008,m_[2]]},attackDur:.8,attack:y_,deathDepth:.17,deathExtraScale:0,idleExtra:b_};function S_(e,t=.12,n=0){return(r,i,a)=>{let o=Q(r,i,a,.07,e),s=Ud(Z.skBone,Z.skBoneGrime,Math.max(0,o-.5)*1.7);if(t>0){let o=Q(r,i,a,.13,e+9),c=1-t*.5;if(o>c&&(s=Ud(s,Z.skOoze,Math.min(1,(o-c)*7))),n>0&&o>c+.03&&Math.abs(Q(r,i,a,.06,e+17)-.5)<.03*n)return Z.skGlow}return s}}function C_(e){return(t,n,r)=>Q(t,n,r,.05,e)>.68?Z.skOozeSheen:Z.skOoze}function w_(e,t=.55){return(n,r,i)=>{let a=Q(n,r,i,.06,e);return a>1-t?a>1-t*.35?U(Z.skRust,.8):Z.skRust:a<.2?Z.ironLight:Z.iron}}function T_(e,t,n){let r=Math.max(.04,V*1.01);return(i,a,o)=>a<t&&H(Math.floor(i/r),n,Math.floor(o/r))>.45+(t-a)*3||a<t-.02&&H(Math.floor(i/r),n+1,Math.floor(o/r))>.55?-1:Q(i,a,o,.06,n)>.62?U(e,.72):e}function E_(e,t,n){if(V<=.03)return;let r=e=>(Math.floor(e/V)+.5)*V;for(let i of[1,-1])e.ell(r(i*.045*t),r(.105*t),.1*t,V*.5,V*.5,V*1.4,n,`paint`)}function D_(e,t,n,r){let i=e=>e*t;e.ell(0,i(.13),i(-.01),i(.1),i(.105),i(.115),n),e.ell(0,i(.07),i(.045),i(.085),i(.07),i(.075),n),e.box(i(-.058),i(0),i(.02),i(.058),i(.05),i(.1),n);for(let t of[1,-1])e.ell(t*i(.074),i(.075),i(.055),i(.03),i(.025),i(.035),n),e.ell(t*i(.042),i(.11),i(.085),i(.034),i(.03),i(.03),Z.charcoal,`paint`),e.ell(t*i(.042),i(.11),i(.125),i(.03),i(.027),i(.03),0,`carve`),e.ell(t*i(.042),i(.108),i(.083),Math.max(i(.016),V*.5),Math.max(i(.014),V*.5),V*.6,r);e.fill(i(-.03),i(.05),i(.08),i(.03),i(.085),i(.13),(e,t)=>Math.abs(e)<(t-i(.045))*.55+V*.3,Z.charcoal,`paint`),e.box(i(-.05),i(0),i(.07),i(.05),i(.03),i(.105),e=>Math.floor(e/V)&1?Z.skBone:Z.skBoneDark,`paint`),e.box(i(-.055),i(-.005),i(.02),i(.055),i(.005),i(.11),Z.charcoal,`paint`),e.rbox(0,i(-.028),i(.045),i(.058),i(.022),i(.06),2.6,n);for(let t of[1,-1])e.seg(t*i(.055),i(-.03),i(0),t*i(.07),i(.05),i(-.02),i(.016),i(.014),n)}function O_(e,t,n,r,i,a,o){e.fill(-r-a,t-.06,n-i-a,r+a,t+.03,n+i+a,(e,o,s)=>{let c=Math.sqrt((e/r)**2+((s-n)/i)**2);if(Math.abs(c-1)*Math.min(r,i)>a)return!1;let l=t-.035*Math.max(0,(s-n)/i);return Math.abs(o-l)<a},o)}function k_(e){let t=e.rig,n=e.r,r=S_(e.seed,e.stain,e.veins??0),i=e.eye??Z.skGlow,a=Math.max(n*.55,V*.55),o=t.shoulder[1],s=t.shoulder[0],c=e.ribW??s*.78,l=new W;for(let e of[1,-1])l.ell(e*t.hip[0]*.85,.035,-.015,n*2.3,n*2.2,n*1.3,r),l.seg(e*t.hip[0],t.hip[1],0,e*t.hip[0]*.3,-.07,n*1.6,n*.8,n*.8,r);l.ell(0,0,-.045,n*1.5,n*2.2,n*1.2,r),l.seg(0,0,-.05,0,t.torso[1]+.02,-.06,n*.9,n*.9,r);for(let e=.02;e<t.torso[1];e+=.04)l.ell(0,e,-.06,n*1.25,n*.6,n*1.1,r);let u=new W,d=-.07;u.seg(0,-.02,d,0,o+.04,-.060000000000000005,n*.9,n*.9,r);for(let e=0;e<o;e+=.045)u.ell(0,e,d-n*.4,n*1.3,n*.6,n*1.4,r);let f=o-.06,p=o*.36;for(let e=0;e<5;e++){let t=e/4;O_(u,f-(f-p)*t,-.005,c*(.92+.08*Math.sin(Math.PI*(.35+.65*t))-.12*t*t),c*.72,a,r)}let m=c*.72-.005;u.seg(0,p-.03,m,0,f+.02,m-.01,n*.9,n*.9,r);for(let e of[1,-1])u.seg(e*.02,o+.01,m-.02,e*s*.95,o+.015,0,n*.75,n*.75,r),u.fill(e*s*.25,o-.2,-.14,e*s*.85,o+.01,-.02,(e,t,n)=>{let r=(Math.abs(e)-s*.25)/(s*.6),i=(o+.01-t)/.21;return r>=0&&r<=1-i*.5&&Math.abs(n-(-.09-.02*r))<a},r),u.ell(e*s,o,0,n*1.5,n*1.3,n*1.5,r);e.ooze>0&&(u.ell(0,p+.03,-.01,c*.62*e.ooze,.055*e.ooze,c*.5*e.ooze,C_(e.seed+3)),u.ell(0,p-.03,-.03,c*.3*e.ooze,.05*e.ooze,c*.3*e.ooze,C_(e.seed+4)));let h=t.head;u.seg(0,o+.03,-.060000000000000005,h[0],h[1]+.02,h[2]-.02,n*.85,n*.85,r);for(let e=.15;e<1;e+=.3)u.ell(0,o+.03+(h[1]-o)*e,d+(h[2]-d)*e,n*1.3,n*.55,n*1.3,r);let g=new W;D_(g,e.skull,r,i);let _={hips:l,torso:u,head:g,finish:()=>E_(g,e.skull,i)},v=V>.03?V*.5:0;for(let e of[`L`,`R`]){let i=new W;i.seg(v,-.01,v,v,-t.upperLen+.02,v,n,n*.9,r),i.ell(0,-.01,0,n*1.5,n*1.5,n*1.5,r),i.ell(0,-t.upperLen+.015,0,n*1.45,n*1.2,n*1.3,r);let a=new W,o=t.handLen;if(v>0)a.seg(v,-.015,v,v,-o+.05,v,n*.8,n*.7,r);else for(let e of[1,-1])a.seg(e*n*.7,-.015,0,e*n*.45,-o+.05,.005,n*.72,n*.62,r);a.ell(0,-o+.045,.005,n*1.2,n*.8,n*1.1,r),a.rbox(0,-o,.008,n*1.35,n*1.35,n*1.45,2.4,r),a.box(-n*1.3,-o-n*.6,n*1.2,n*1.3,-o+n*.6,n*1.55,e=>Math.floor(e/V)&1?Z.skBone:Z.skBoneGrime,`add`),_[e===`L`?`armL`:`armR`]=i,_[e===`L`?`foreL`:`foreR`]=a}let y=t.hips[1]+t.hip[1]-t.thighLen,b=(e,t,n)=>Ud(r(e,t,n),Z.skBoneDark,Math.min(1,Math.max(0,(-t-y*.4)/(y*.6)))*.7);for(let e of[`L`,`R`]){let i=new W;i.seg(v,-.01,v,v,-t.thighLen+.02,v,n*1.1,n,r),i.ell(0,-.005,0,n*1.6,n*1.6,n*1.6,r),i.ell(0,-t.thighLen+.02,.005,n*1.55,n*1.3,n*1.4,r);let a=new W;a.ell(0,-.012,n*1.1,n*1.1,n*1.2,n*.8,r),a.seg(v,-.02,v,v,-y+.07,v,n,n*.8,b),v===0&&a.seg(-n*1.1*(e===`L`?1:-1),-.04,-n*.4,-n*.9*(e===`L`?1:-1),-y+.08,-n*.4,n*.55,n*.55,b),a.ell(0,-y+.05,0,n*1.5,n*1.3,n*1.8,b);for(let e=-1;e<=1;e++)a.seg(e*n*.9,-y+.045,.02,e*n*1.3,-y+V*.5,.11+.01*(1-Math.abs(e)),n*.7,n*.55,b);_[e===`L`?`thighL`:`thighR`]=i,_[e===`L`?`shinL`:`shinR`]=a}return _}function A_(e,t,n,r,i){let a=T_(t,-r+.08,i);e.tubeY(0,0,-.01,.045,n+.02,n*.75,1,U(t,.8)),e.box(-n*.55,-r,n*.6,n*.55,.02,n*.6+V,a),e.box(-n*.6,-r*.95,-n*.6-V,n*.6,.02,-n*.6,T_(U(t,.85),-r*.95+.08,i+2))}var j_=[`hips`,`torso`,`head`,`armL`,`foreL`,`armR`,`foreR`,`thighL`,`shinL`,`thighR`,`shinR`];function M_(e,t=[]){return e.finish?.(),[...j_.map(t=>({bone:t,part:e[t]})),...t]}var N_={hips:[0,.95,0],torso:[0,.1,0],head:[0,.47,.04],shoulder:[.19,.39,0],upperLen:.29,handLen:.29,hip:[.085,-.04,0],thighLen:.43};function P_(e,t,n){let r=w_(n);e.fill(-.2*t,.13*t,-.2*t,.2*t,.3*t,.2*t,(e,n,r)=>{let i=e/(.115*t),a=(n-.13*t)/(.13*t),o=(r+.01*t)/(.125*t);return i*i+a*a+o*o<=1},r),e.tubeY(0,-.01*t,.13*t,.13*t+Math.max(V,.025*t),.17*t,.17*t,1,(e,t,n)=>H(Math.floor(e/.05),7,Math.floor(n/.05))>.9?-1:r(e,t,n)),e.seg(0,.14*t,.12*t,0,.29*t,0,.012*t,.012*t,Z.ironDark)}function F_(e){let t=k_({rig:N_,seed:61,r:.03,skull:1,stain:.16,ooze:1});A_(t.hips,e,.13,.3,62),P_(t.head,1,63);let n=t.foreL,r=[0,-.15,.07],i=.23,a=w_(64,.7);n.fill(r[0]-i,r[1]-i,r[2],r[0]+i,r[1]+i,r[2]+.05,(e,t,n)=>{let a=Math.hypot(e-r[0],t-r[1]);return a<=i&&n<r[2]+.035+.02*(1-a/i)},(e,t,n)=>{let o=Math.hypot(e-r[0],t-r[1]);if(o>.2)return a(e,t,n);if(o<.05)return n>r[2]+.03?Z.ironLight:a(e,t,n);let s=(e-r[0])/.14,c=(t-r[1]-.02)/.14;return s*s+c*c<.9&&!(Math.abs(Math.abs(s)-.38)<.2&&Math.abs(c-.05)<.2)&&c>-.7&&n>r[2]+.02?Z.skBone:Math.floor((e-r[0]+i)/.07)&1?Z.timberDark:U(Z.timberDark,.82)});let o=new W;o.jitter=.05,o.seg(0,-.1,0,0,.07,0,.022,.022,(e,t)=>(t/.03|0)&1?Z.skBoneGrime:Z.leatherDark),o.ell(0,-.12,0,.03,.03,.03,Z.skBone),o.box(-.025,.07,-.09,.025,.1,.09,w_(65,.5));let s=w_(66,.4);return o.fill(-.012,.1,-.06,.012,.72,.06,(e,t,n)=>{let r=.045*(1-Math.max(0,t-.6)/.13);return Math.abs(n)<r&&!(n>r-.02&&H(0,t/.03|0,11)>.8)},(e,t,n)=>Math.abs(n)<.012?U(Z.iron,.8):s(e,t,n)),M_(t,[{bone:`weapon`,part:o}])}var I_=[-.2,.6,-.05,-.8,.1,.3],L_=[-.06,.2,.44,1.9,.05,.1];function R_(e,t){let n=K(G(t,0,.3)),r=Jd(G(t,.3,.43)),i=q(G(t,.52,.85));X(e,I_,n*(1-r)),X(e,L_,r*(1-i));let a=n*(1-r),o=r*(1-i);e[B.tRX]+=-.2*a+.38*o,e[B.tRY]+=-.3*a+.2*o,e[B.nRX]+=.1*a-.2*o,e[B.hY]-=.06*o,e[B.kL]+=.35*o,e[B.kR]+=.25*o,e[B.lLX]-=.28*o,e[B.lRX]+=.18*o;let s=K(G(t,0,.2))*(1-q(G(t,.6,.85)));e[B.aLX]+=-.4*s,e[B.aLZ]+=.15*s,e[B.aLY]+=.6*s,e[B.fL]+=-.15*s,e[B.bS]+=.03*Y(t,.41,.44,.6)}var z_={kind:`skeleton_warrior`,defaultTint:Z.skRag,height:1.85,rig:N_,parts:F_,hunch:.14,stance:.07,loco:{walkHz:.95,runHz:1.45,stride:.44,runStride:.78,knee:.75,runKnee:1.35,bob:.03,armSwing:.4,lean:.22},carry:[-.27,0,.12,.5,0,.1],drop:[-.38,0,0,0,0,0],gripL:null,gripR:[0,0,0],muzzle:{bone:`weapon`,p:[0,.6,0]},attackDur:.85,attack:R_,deathDepth:.13},B_=.66,V_=-.1,H_=13616292,U_={hips:[0,.95,0],torso:[0,.1,0],head:[0,.47,.04],shoulder:[.18,.39,0],upperLen:.29,handLen:.29,hip:[.085,-.04,0],thighLen:.43,extra:[0,0,0],bowString:{half:.63,z:V_}};function W_(e,t,n,r,i){let a=T_(t,-.02*n,i);e.fill(-.2*n,-.06*n,-.22*n,.2*n,.34*n,.2*n,(e,t,r)=>{let i=e/(.135*n),a=(t-.12*n)/(.165*n),o=(r+.005*n)/(.14*n),s=i*i+a*a+o*o<=1,c=r>0&&t<.19*n&&Math.abs(e)<.095*n;return s&&!c},(e,r,i)=>r<.02*n?U(t,.8):a(e,r,i)),e.seg(0,.24*n,-.06*n,0,.24*n+r*.6,-.06*n-r,.06*n,.012*n,t)}function G_(e){let t=k_({rig:U_,seed:71,r:.028,skull:1,stain:.16,ooze:.9});A_(t.hips,e,.12,.26,72),W_(t.head,e,1,.16,73),t.torso.fill(-.26,.2,-.2,.26,.47,.16,(e,t,n)=>{let r=(e/.24)**2+((n+.02)/.15)**2;return r<=1&&r>=.62&&t>.44-.2*(1-Math.abs(e)/.26)-(n<0?.1:0)},T_(e,.3,74));let n=t.torso;n.seg(-.08,.02,-.17,.1,.5,-.18,.055,.055,(e,t)=>Math.abs((t*100|0)%12)<2?Z.skBoneGrime:Z.leatherDark);for(let t=0;t<5;t++){let r=.07+t%3*.025,i=-.2+(t>>1)*.02;n.seg(r,.48,i,r+.02,.6,i,.01,.01,Z.skBoneGrime),n.seg(r+.015,.56,i,r+.025,.63,i,.016,.006,t%2?e:Z.skBone)}let r=new W;r.jitter=.04,r.fill(-.02,-.66-.05,-.2,.02,.7100000000000001,.1,(e,t,n)=>{let r=Math.abs(t)/B_;if(r>1)return!1;let i=-.09*r*r;return Math.abs(n-i)<.03-.013*r},(e,t)=>{let n=Math.abs(t)/B_;return n<.1?Z.leatherDark:n>.86?Z.skBone:Math.abs(n-.45)<.03||Math.abs(n-.7)<.02?Z.skBoneGrime:Z.timberDark}),r.seg(0,.64,-.07,0,.7100000000000001,-.03,.022,.006,Z.skBone),r.seg(0,-.64,-.07,0,-.66-.05,-.03,.022,.006,Z.skBone);let i=new W,a=new W;i.jitter=a.jitter=0,i.box(0,-.63,0,.01,0,.01,H_),a.box(0,0,0,.01,.63,.01,H_);let o=new W;return o.jitter=.03,o.box(0,0,V_,.01,.01,.52,Z.skBoneGrime),o.seg(0,0,.5,0,0,.62,.026,.005,Z.skRust),o.box(-.03,-.01,-.09000000000000001,.03,.01,0,t=>H(t*50|0,1,1)>.8?-1:e),o.box(-.01,-.03,-.09000000000000001,.01,.03,0,e),M_(t,[{bone:`weapon`,part:r},{bone:`stringT`,part:i},{bone:`stringB`,part:a},{bone:`extra`,part:o}])}var K_=[.1,.36,.48,0,.08,-.12];function q_(e,t){let n=K(G(t,0,.26)),r=t>=.8,i=q(G(t,.9,1.15));X(e,K_,n*(1-i)),e[B.xS]=G(t,.12,.18)*+!r,e[B.ikR]=J(G(t,.1,.28))*(1-J(G(t,.88,1.02)));let a=K(G(t,.3,.66)),o=K(G(t,.8,.86));e[B.xZ]=-.42*a-.1*o,e[B.tRY]+=-.24*n*(1-i),e[B.tRX]-=.08*n,e[B.nRY]+=.24*n*(1-i),e[B.nRX]+=.06*n,e[B.nRZ]+=.12*a*(1-i);let s=Y(t,.8,.82,.96);e[B.wRX]-=.12*s,e[B.wZ]+=.03*s,e[B.tRY]+=.06*s}var J_={kind:`skeleton_archer`,defaultTint:Z.skRag,height:1.9,rig:U_,parts:G_,hunch:.12,stance:.06,loco:{walkHz:.95,runHz:1.45,stride:.44,runStride:.78,knee:.75,runKnee:1.35,bob:.03,armSwing:.35,lean:.22},carry:[.27,-.02,.14,.45,0,-.1],drop:[.34,.1,0,0,0,0],gripL:[0,0,0],gripR:[0,0,V_],gripROnExtra:!0,ikIdle:[1,0],poleL:[.9,-.6,-.1],poleR:[-.9,-.3,-.4],muzzle:{bone:`extra`,p:[0,0,.62]},attackDur:1.2,attack:q_,deathDepth:.13,extraScale:0},Y_={hips:[0,1.06,0],torso:[0,.12,0],head:[0,.54,.05],shoulder:[.23,.45,0],upperLen:.32,handLen:.32,hip:[.1,-.04,0],thighLen:.48},X_=9277326,Z_=(e,t,n)=>{let r=Q(e,t,n,.05,91);return r>.72?6189128:r<.28?U(X_,.82):X_};function Q_(e){let t=k_({rig:Y_,seed:81,r:.036,skull:1.1,stain:.22,ooze:1.1,ribW:.2});A_(t.hips,e,.15,.36,82);let n=w_(83,.6),r=t.head;r.fill(-.2,.12,-.2,.2,.34,.2,(e,t,n)=>{let r=e/.125,i=(t-.13)/.15,a=(n+.01)/.135;return r*r+i*i+a*a<=1},n),r.tubeY(0,-.01,.13,.13+Math.max(V,.03),.132,.142,1,Z.ironDark),r.box(-.015,.06,.12,.015,.2,.15,Z.ironDark);for(let e of[1,-1])r.seg(e*.11,.21,0,e*.25,.26,.04,.04,.03,Z.skBoneGrime),r.seg(e*.25,.26,.04,e*.32,.38,.12,.03,.01,Z.skBone);let i=t.torso;for(let e of[1,-1]){let t=.23*e;i.fill(t-.15,.4,-.15,t+.15,.6,.15,(e,n,r)=>{let i=(e-t)/.13,a=(n-.45)/.11,o=r/.13;return i*i+a*a+o*o<=1&&n>.44},(e,t,r)=>t<.47?Z.ironDark:n(e,t,r)),i.seg(t,.54,0,t+.06*e,.63,-.02,.025,.006,Z.ironLight)}i.tubeY(0,-.04,.43,.49,.13,.12,1,(e,t,n)=>Math.abs(e)<.08&&n>0?-1:Z.ironDark);let a=new W;return a.jitter=.05,a.seg(0,-.28,0,0,.88,0,.03,.028,(e,t)=>Math.abs(t)<.08||Math.abs(t-.32)<.07?Z.leatherDark:Math.abs(t-.6)<.03?Z.skRust:Z.timberDark),a.ell(0,-.29,0,.04,.035,.04,Z.skBone),a.rbox(0,.97,0,.11,.13,.23,5,Z_),a.fill(-.12,.83,-.24,.12,1.11,.24,(e,t,n)=>Math.abs(Math.abs(n)-.12)<.025,n,`paint`),a.fill(-.12,.83,-.24,.12,1.11,.24,(e,t,n)=>Math.abs(n)<.015&&Math.abs(t-.97)<.08||Math.abs(t-1)<.015&&Math.abs(n)<.055,U(X_,.55),`paint`),a.box(-.04,.84,-.04,.04,.9,.04,Z.ironDark),M_(t,[{bone:`weapon`,part:a}])}var $_=[-.08,.72,-.05,-.55,0,.1],ev=[-.02,0,.5,2.05,0,0];function tv(e,t){let n=K(G(t,0,.42)),r=Jd(G(t,.42,.56)),i=q(G(t,.78,1.25));X(e,$_,n*(1-r)),X(e,ev,r*(1-i));let a=n*(1-r),o=r*(1-i);e[B.tRX]+=-.28*a+.55*o,e[B.nRX]+=.2*a-.35*o,e[B.hY]+=.03*a-.16*o,e[B.hZ]+=.06*o,e[B.kL]+=.2*a+.7*o,e[B.kR]+=.2*a+.6*o,e[B.lLX]-=.1*a+.5*o,e[B.lRX]+=.3*o,e[B.bS]-=.05*Y(t,.55,.58,.82)}var nv={kind:`skeleton_demolisher`,defaultTint:Z.skRag,height:2.1,rig:Y_,parts:Q_,hunch:.16,stance:.1,loco:{walkHz:.8,runHz:1.2,stride:.4,runStride:.7,knee:.7,runKnee:1.25,bob:.04,armSwing:.3,lean:.2},carry:[-.12,.1,.26,-.9,0,.25],drop:[-.5,-.1,0,0,0,0],gripL:[0,.3,0],gripR:[0,0,0],poleL:[.9,-.5,-.3],poleR:[-.9,-.5,-.3],muzzle:{bone:`weapon`,p:[0,.97,0]},attackDur:1.25,attack:tv,deathDepth:.16},rv={hips:[0,.93,0],torso:[0,.1,0],head:[0,.46,.05],shoulder:[.18,.38,0],upperLen:.28,handLen:.28,hip:[.085,-.04,0],thighLen:.42},iv=13879206;function av(e,t,n,r,i,a,o,s){let c=C_(s+1);e.rbox(t,n,r,i,a,o,6,(e,r,o)=>{let l=(e-t)/i,u=(r-n)/a;return V<=.03&&Math.abs(u)<V*.6/a||Math.abs(l-.1*Math.sign(u))<V*.6/i?c(e,r,o):H(Math.floor(e/.05),Math.floor(r/.05),Math.floor(o/.05)+s)>.8?U(iv,.85):iv})}function ov(e){let t=k_({rig:rv,seed:101,r:.028,skull:1,stain:.18,ooze:.9});A_(t.hips,e,.12,.24,102);let n=S_(103,.1),r=t.torso;for(let e of[1,-1])r.seg(.12*e,-.05,-.16,.08*e,.8,-.2,.022,.018,n),r.seg(.02*e,.37,.07,.11*e,.4,-.17,.014,.014,Z.leatherDark);for(let e of[.1,.35])r.seg(-.13,e,-.17,.13,e,-.17,.016,.016,e=>Math.abs(e)<.03?Z.leatherDark:Z.skBoneGrime);r.box(-.15,.4,-.3,.15,.43,-.12,Z.timberDark),av(r,0,.52,-.22,.14,.085,.1,104),av(r,.01,.69,-.23,.13,.085,.095,105),av(r,-.01,.86,-.22,.12,.08,.09,106),r.seg(-.14,.44,-.12,.13,.95,-.12,.012,.012,Z.leatherDark,`under`),t.hips.seg(-.15,-.02,.02,-.17,-.32,.06,.016,.016,Z.timberDark),t.hips.rbox(-.17,-.34,.06,.05,.045,.08,3,n);let i=new W;return av(i,0,0,0,.13,.08,.1,107),M_(t,[{bone:`weapon`,part:i}])}var sv=[0,.28,.3,-.2,0,0],cv=[0,-.62,.52,0,0,0];function lv(e,t){let n=K(G(t,0,.3)),r=q(G(t,.3,.7)),i=q(G(t,1.05,1.4));X(e,sv,n*(1-r)),X(e,cv,r*(1-i));let a=r*(1-i);e[B.tRX]+=.75*a-.1*n*(1-r),e[B.nRX]-=.45*a,e[B.hY]-=.3*a,e[B.hZ]-=.08*a,e[B.lLX]-=.95*a,e[B.lRX]-=.7*a,e[B.kL]+=1.5*a,e[B.kR]+=1.25*a;let o=Y(t,.74,.78,.86)+Y(t,.88,.92,1);e[B.wY]-=.03*o,e[B.tRX]+=.05*o,e[B.bS]-=.02*o}var uv={kind:`skeleton_builder`,defaultTint:Z.skRag,height:1.8,rig:rv,parts:ov,hunch:.3,stance:.08,loco:{walkHz:.95,runHz:1.4,stride:.4,runStride:.7,knee:.75,runKnee:1.3,bob:.035,armSwing:.3,lean:.2},carry:[0,-.06,.3,0,0,0],drop:[0,.1,.25,0,0,0],gripL:[.13,0,0],gripR:[-.13,0,0],poleL:[.9,-.6,-.3],poleR:[-.9,-.6,-.3],muzzle:{bone:`weapon`,p:[0,0,0]},attackDur:1.4,attack:lv,deathDepth:.18},dv={hips:[0,.94,0],torso:[0,.1,0],head:[0,.47,.05],shoulder:[.19,.39,0],upperLen:.29,handLen:.29,hip:[.085,-.04,0],thighLen:.43};function fv(e){let t=k_({rig:dv,seed:111,r:.029,skull:1,stain:.2,ooze:1});A_(t.hips,e,.12,.28,112);let n=w_(113,.5),r=t.head;r.fill(-.2,.14,-.2,.2,.3,.2,(e,t,n)=>{let r=e/.113,i=(t-.14)/.125,a=(n+.01)/.125;return r*r+i*i+a*a<=1},n),r.tubeY(0,0,.14,.14+Math.max(V,.02),.12,.13,1,Z.leatherDark),r.box(-.04,.17,.1,.04,.26,.17,Z.ironDark),r.box(-.028,.18,.13,.028,.25,.18,Z.skGlowHot),r.box(-.045,.255,.1,.045,.275,.18,Z.ironDark);let i=t.torso;i.tubeY(0,-.02,.38,.46,.12,.11,.85,T_(e,.3,114)),i.fill(-.3,0,-.2,.3,.5,.2,(e,t,n)=>{let r=Math.hypot(e-.02,t-.2);return Math.abs(r-.24)<.022&&Math.abs(n)>.085&&Math.abs(n)<.125},Nf(10259042,8219722,.03));let a=new W;return a.jitter=.05,a.seg(0,-.18,0,0,.82,0,.024,.022,(e,t)=>Math.abs(t)<.08||Math.abs(t-.3)<.06?Z.leatherDark:Z.timber),a.fill(-.03,.66,-.34,.03,.9,.4,(e,t,n)=>{let r=Math.abs(n)/(n>0?.38:.3);if(r>1)return!1;let i=.8-.09*r*r;return Math.abs(t-i)<.045*(1-r*.8)+.008},(e,t,r)=>Math.abs(r)>.3?Z.ironLight:n(e,t,r)),a.box(-.035,.74,-.04,.035,.86,.04,Z.ironDark),M_(t,[{bone:`weapon`,part:a}])}var pv=[-.14,.78,-.12,-.7,0,.15],mv=[-.02,-.12,.48,2.3,0,0],hv=[-.04,0,.42,1.7,0,0];function gv(e,t){let n=K(G(t,0,.34)),r=Jd(G(t,.34,.47)),i=q(G(t,.55,.75)),a=q(G(t,.78,1.05));X(e,pv,n*(1-r)),X(e,mv,r*(1-i)),X(e,hv,i*(1-a));let o=n*(1-r),s=r*(1-a);e[B.tRX]+=-.25*o+.6*s-.12*i*(1-a),e[B.nRX]+=.15*o-.3*s,e[B.hY]-=.14*s,e[B.kL]+=.6*s,e[B.kR]+=.45*s,e[B.lLX]-=.45*s,e[B.lRX]+=.25*s,e[B.bS]-=.03*Y(t,.46,.49,.6)}var _v={kind:`skeleton_carver`,defaultTint:Z.skRag,height:1.85,rig:dv,parts:fv,hunch:.24,stance:.08,loco:{walkHz:.92,runHz:1.4,stride:.42,runStride:.74,knee:.75,runKnee:1.3,bob:.035,armSwing:.3,lean:.24},carry:[-.22,.02,.3,.2,0,-.7],drop:[-.4,-.1,0,0,0,0],gripL:[0,.34,0],gripR:[0,0,0],poleL:[.9,-.5,-.3],poleR:[-.9,-.5,-.3],muzzle:{bone:`weapon`,p:[0,.72,.38]},attackDur:1.05,attack:gv,deathDepth:.13},vv={hips:[0,1.12,0],torso:[0,.12,0],head:[0,.56,.05],shoulder:[.22,.47,0],upperLen:.34,handLen:.34,hip:[.1,-.05,0],thighLen:.5,extra:[0,1.12,0]};function yv(e){let t=k_({rig:vv,seed:131,r:.032,skull:1.15,stain:.35,ooze:1.3,ribW:.19}),n=U(e,.7),r=(t,r,i)=>Q(t,r,i,.07,132)>.64?n:e,i=t.hips;i.fill(-.5,-1.1,-.5,.5,.1,.5,(e,t,n)=>{let r=Math.min(1,-t/1.08),i=.2+.18*r,a=.16+.16*r,o=(e/i)**2+(n/a)**2;return o>1||n>0&&Math.abs(e)<.05+.1*r&&t>-.9?!1:t>-1.08+.05*Math.abs(Math.sin(e*23+n*17))&&(o>.72||t>-.02)},(e,t,n)=>t<-.93?t>-.99&&(Math.atan2(n,e)*9|0)%3==0&&H(e/V|0,7,n/V|0)>.35?Z.skGlow:Z.skOoze:r(e,t,n)),i.tubeY(0,0,-.01,.06,.21,.17,1,e=>Math.floor(e/.04)&1?Z.skBone:Z.skBoneGrime);let a=t.torso;a.fill(-.32,-.08,-.3,.32,.58,.3,(e,t,n)=>{let r=(e/(.2+.04*Math.min(1,t/.4)))**2+((n+.02)/.16)**2;return r<=1&&r>.66&&!(n>.02&&Math.abs(e)<.13-.05*Math.max(0,t-.35)/.2)},r),a.ell(0,.5,-.03,.29,.08,.2,r);let o=S_(133,.3);for(let e=0;e<9;e++){let t=-1.2+e*.3,n=Math.sin(t)*.27,r=Math.cos(t)*.18-.02;a.seg(n,.55,r,n*1.25,.47,r*1.2+.02,.028,.012,o)}a.fill(-.2,0,-.2,.2,.3,.3,(e,t,n)=>Q(e,t,n,.04,134)>.7&&n>0,Z.skOozeSheen,`paint`);let s=t.head;W_(s,e,1.15,.05,135);for(let e=0;e<7;e++){let t=-1.5+e*.5,n=Math.sin(t)*.15,r=Math.cos(t)*.15-.02,i=e===3?.26:e%2?.17:.21;s.seg(n,.28,r,n*1.25,.28+i,r*1.1,.03,.008,e===3?Z.skBone:o)}s.tubeY(0,-.01,.26,.29,.16,.16,1,Z.skRust);for(let n of[`armL`,`armR`])t[n].tubeY(0,0,-.3,.04,.075,.08,1.35,T_(e,-.22,136));let c=new W,l=[[0,-1.18,0],[.02,-.6,.01],[-.01,0,0],[.02,.55,-.01],[0,.98,0]];for(let e=0;e<l.length-1;e++){let[t,n]=[l[e],l[e+1]];c.seg(t[0],t[1],t[2],n[0],n[1],n[2],.028,.028,(e,t,n)=>Math.abs(t)<.07?Z.leatherDark:Q(e,t,n,.06,137)>.55?Z.skBoneGrime:Z.timberDark)}for(let e of[-.3,.3,.7])c.tubeY(0,0,e,e+.04,.036,.036,1,Z.skBone);let u=new W;u.jitter=.03;let d=S_(138,.2);c.ell(0,1,0,.07,.065,.075,d),c.ell(0,.97,.05,.05,.035,.05,d);for(let e of[1,-1])c.ell(e*.028,1,.06,.016,.014,.016,Z.skGlow),c.seg(e*.05,1.03,-.01,e*.13,1.1,0,.022,.014,d),c.seg(e*.13,1.1,0,e*.1,1.22,.02,.014,.005,d);return u.fill(-.08,-.06,-.08,.08,.2,.08,(e,t,n)=>{let r=.065*(1-Math.max(0,t)/.2)+.01;return e*e+n*n<r*r&&(t>-.04||e*e+n*n<.0012)},(e,t,n)=>t<.05&&e*e+n*n<.0016?Z.skGlowHot:Q(e,t,n,.03,139)>.5?Z.skGlow:10492980|Ld),M_(t,[{bone:`weapon`,part:c},{bone:`extra`,part:u}])}var bv=[-.12,.72,.22,-.2,0,.08],xv=[-.2,.28,.36,.1,0,.05];function Sv(e,t){let n=K(G(t,0,.5)),r=Jd(G(t,.55,.68)),i=q(G(t,.95,1.4));X(e,bv,n*(1-r)),X(e,xv,r*(1-i));let a=n*(1-r),o=r*(1-i);e[B.tRX]+=-.3*a+.22*o,e[B.nRX]+=-.35*a+.15*o,e[B.hY]+=.04*a-.08*o,e[B.kL]+=.3*o,e[B.kR]+=.25*o,e[B.aLX]+=-2.4*a-1.1*o,e[B.aLZ]+=.35*a+.25*o,e[B.fL]+=-.3*a,e[B.glow]=J(G(t,.15,.5))*(1-J(G(t,.95,1.2))),e[B.xS]=1+.7*J(G(t,.1,.55))*(1-i)+.6*Y(t,.66,.72,.95),e[B.bS]+=.03*Y(t,.66,.7,.85)}function Cv(e,t){e[B.xS]*=1+.12*Math.sin(t*4.3)+.05*Math.sin(t*11.7)}var wv={kind:`skeleton_necromancer`,defaultTint:2374202,height:2.35,rig:vv,parts:yv,hunch:.12,stance:.06,loco:{walkHz:.72,runHz:1.1,stride:.32,runStride:.56,knee:.55,runKnee:1,bob:.03,armSwing:.25,lean:.16},carry:[-.3,.06,.18,-.2,0,.05],drop:[-.4,.2,0,0,0,0],gripL:null,gripR:[0,0,0],muzzle:{bone:`extra`,p:[0,.05,0]},attackDur:1.4,attack:Sv,deathDepth:.2,idleExtra:Cv},Tv={hips:[0,.56,-.28],torso:[0,.03,.5],head:[0,.14,.2],shoulder:[.085,-.04,.03],upperLen:.26,handLen:.24,hip:[.08,-.02,-.02],thighLen:.25,cape:[0,.03,-.54]};function Ev(e){let t=.03,n=S_(121,.2),r=S_(122,.06),i=V>.03?V*.5:0,a=new W;for(let e of[1,-1])a.ell(e*.055,0,-.02,t*1.4,t*2.4,t*2.8,n);a.seg(0,.04,-.08,0,.06,.28,t*.9,t*.9,n);for(let e=-.06;e<.28;e+=.045)a.ell(0,.075,e,t*.6,t*1.4,t*.7,n);let o=new W;o.seg(0,.03,-.24,0,.05,.08,t*.9,t*.9,n);for(let e=-.22;e<.08;e+=.045)o.ell(0,.075,e,t*.6,t*1.5,t*.7,n);let s=Math.max(t*.4,V*.5);for(let e=0;e<5;e++){let t=-.21+e*.066,r=.1+.035*Math.sin(e/4*Math.PI),i=.075;o.fill(-.075-s,.05-2*r-s,t-s,i+s,.06,t+s,(e,t)=>{let n=Math.sqrt((e/i)**2+((t-(.05-r))/r)**2);return Math.abs(n-1)*i<s&&t<.05&&!(t<.05-1.8*r&&Math.abs(e)<.03)},n)}o.seg(0,-.2,-.2,0,-.18,.06,t*.8,t*.8,n),o.ell(0,-.13,-.08,.05,.035,.09,C_(123));for(let e of[1,-1])o.seg(e*.07,.07,-.03,e*.085,-.03,.04,t*1.3,t*.7,n);o.seg(0,.05,.06,0,.14,.2,t*.9,t*.9,n);for(let e=.2;e<1;e+=.3)o.ell(0,.05+.09*e,.06+.14*e,t*1.3,t*1.3,t*.6,n);let c=w_(124,.6);o.fill(-.08,.02,.06,.08,.2,.2,(e,t,n)=>{let r=[0,.1,.13],i=Math.hypot(e,t-r[1]);return Math.abs(n-r[2]+(t-r[1])*.6)<.025&&i>.035&&i<.068},c);for(let e of[.4,1.3,2.2,-.5,-1.4,-2.3])o.seg(Math.sin(e)*.06,.1+Math.cos(e)*.06,.13-Math.cos(e)*.035,Math.sin(e)*.1,.1+Math.cos(e)*.1,.13-Math.cos(e)*.06,.012,.004,Z.ironLight);o.box(-.025,-.05,.14,.025,0,.16,T_(e,-.02,125));let l=new W;l.ell(0,.02,-.01,.075,.07,.095,n),l.seg(0,.045,-.08,0,.075,.03,.012,.012,n),l.rbox(0,0,.12,.045,.038,.09,2.4,n);for(let e of[1,-1])l.ell(e*.058,0,.03,.02,.022,.035,n),l.ell(e*.035,.035,.06,.022,.018,.02,Z.charcoal,`paint`),l.ell(e*.035,.035,.085,.018,.015,.018,0,`carve`),l.ell(e*.035,.034,.058,Math.max(.009,V*.5),Math.max(.008,V*.5),V*.6,Z.skGlow),l.seg(e*.03,-.02,.17,e*.03,-.075,.175,.01,.004,Z.skBone),l.seg(e*.025,-.08,.14,e*.026,-.035,.145,.009,.004,Z.skBone);l.box(-.05,-.04,.06,.05,-.03,.22,Z.charcoal,`paint`),l.seg(0,-.06,-.02,0,-.09,.16,.022,.014,n);for(let e of[1,-1])l.seg(e*.045,-.02,-.02,e*.02,-.08,.1,.012,.01,n);if(V>.03)for(let e of[1,-1])l.ell(e*.04,.04,.08,V*.5,V*.5,V*1.2,Z.skGlow,`paint`);let u=[{bone:`hips`,part:a},{bone:`torso`,part:o},{bone:`head`,part:l}],d=(e,n,i)=>{for(let a=-1;a<=1;a++)e.seg(a*t*.9,n+.02,i,a*t*1.2,n+V*.5,i+.075,t*.6,t*.45,r)};for(let e of[`L`,`R`]){let a=new W;a.seg(i,0,i,i,-Tv.upperLen+.02,i+.01,t*1.1,t*.9,n),a.ell(0,-.005,0,t*1.5,t*1.5,t*1.5,n),a.ell(0,-Tv.upperLen+.01,.005,t*1.3,t*1.2,t*1.3,n);let o=new W;o.seg(i,-.01,i,i,-Tv.handLen-.025,i,t*.85,t*.8,r),o.ell(0,-Tv.handLen+.02,0,t*1.2,t*1,t*1.2,r),d(o,-Tv.handLen-.04,0),u.push({bone:e===`L`?`armL`:`armR`,part:a},{bone:e===`L`?`foreL`:`foreR`,part:o});let s=new W;s.seg(i,0,i,i,-Tv.thighLen+.02,.03+i,t*1.2,t,n),s.ell(0,0,0,t*1.6,t*1.6,t*1.6,n);let c=new W,l=Tv.hips[1]+Tv.hip[1]-Tv.thighLen;c.seg(i,-.01,i,i,-.17,-.08+i,t*.95,t*.85,r),c.ell(0,-.17,-.08,t*1.2,t*1.2,t*1.4,r),c.seg(i,-.17,-.08+i,i,-l+.03,-.03+i,t*.85,t*.78,r),d(c,-l,-.03),u.push({bone:e===`L`?`thighL`:`thighR`,part:s},{bone:e===`L`?`shinL`:`shinR`,part:c})}let f=new W,p=0,m=0,h=0;for(let e=0;e<7;e++){let r=.25+e*.14,i=m+Math.sin(r)*.055,a=h-Math.cos(r)*.055;f.seg(p,m,h,0,i,a,t*Math.max(.78,.9-e*.03),t*Math.max(.76,.88-e*.03),n),f.ell(0,i,a,t*(1.1-e*.1),t*(1.1-e*.1),t*.6,n),p=0,m=i,h=a}return u.push({bone:`cape`,part:f}),u}function Dv(e,t){let n=K(G(t,0,.22)),r=Jd(G(t,.22,.36)),i=q(G(t,.5,.75)),a=n*(1-r),o=r*(1-i);e[B.hZ]+=-.08*a+.3*o,e[B.hY]+=-.06*a+.03*o,e[B.hRX]+=.1*a-.06*o,e[B.nRX]+=-.3*a+.2*o-.4*Y(t,.34,.38,.5),e[B.kL]+=.6*a,e[B.kR]+=.6*a,e[B.lLX]+=-.3*a+.5*o,e[B.lRX]+=-.3*a+.45*o,e[B.aLX]+=.2*a-1.1*o,e[B.aRX]+=.2*a-.95*o,e[B.fL]+=.25*a,e[B.fR]+=.25*a,e[B.cape]+=.3*a-.2*o}var Ov={kind:`skeleton_hound`,defaultTint:Z.skRag,height:.9,rig:Tv,parts:Ev,gait:`quad`,hunch:0,stance:.03,loco:{walkHz:1.5,runHz:2.2,stride:.38,runStride:.6,knee:.7,runKnee:1,bob:.03,armSwing:0,lean:.1},carry:[0,.12,.42,0,0,0],drop:[0,.12,.42,0,0,0],gripL:null,gripR:null,muzzle:{bone:`weapon`,p:[0,0,0]},attackDur:.75,attack:Dv,deathDepth:.12},kv={hips:[0,1.6,0],torso:[0,.18,0],head:[0,.8,.14],shoulder:[.36,.7,0],upperLen:.5,handLen:.5,hip:[.15,-.06,0],thighLen:.72,cape:[0,.74,-.2]},Av=8356481,jv=(e,t,n)=>{let r=Q(e,t,n,.08,151);return r>.7?5596735:r<.3?U(Av,.8):Av};function Mv(e){let t=k_({rig:kv,seed:141,r:.05,skull:1.6,stain:.6,ooze:1.8,ribW:.3,veins:1}),n=w_(142,.65);A_(t.hips,e,.24,.62,143);let r=t.hips;r.seg(.26,-.02,.08,.28,-.2,.12,.012,.012,Z.ironDark),r.box(.2,-.42,.06,.36,-.2,.2,(e,t,r)=>Math.abs(e-.28)<.05&&Math.abs(r-.13)<.05&&t>-.38&&t<-.24?Z.skGlowHot:n(e,t,r)),r.fill(.2,-.42,.06,.36,-.2,.2,(e,t,n)=>Math.abs(e-.28)<.05&&t>-.37&&t<-.25&&(n<.08||n>.18),Z.skGlowHot,`paint`);let i=t.torso;i.fill(-.4,.05,-.5,.4,1.28,-.24,(e,t,n)=>{let r=.98+Math.sqrt(Math.max(0,.33*.33-e*e))*.9;return Math.abs(e)<.33&&t<r&&Math.abs(n+.35)<.07},(e,t,n)=>n>-.3&&Math.abs(e)<.03&&t>.5&&t<1.1||n>-.3&&Math.abs(t-.92)<.03&&Math.abs(e)<.14?U(Av,.5):jv(e,t,n));let a=(e,t,r,a,o,s)=>{let c=Math.ceil(Math.hypot(a-e,o-t,s-r)/.05);for(let l=0;l<=c;l++){let u=l/c,d=e+(a-e)*u,f=t+(o-t)*u,p=r+(s-r)*u;l%2?i.ell(d,f,p,.022,.022,.022,Z.ironLight):i.ell(d,f,p,.03,.018,.03,n)}};a(.34,.72,-.28,-.24,.12,.26),a(-.34,.72,-.28,.24,.12,.26),a(-.3,.3,-.3,.3,.3,-.3);let o=new W;o.fill(-.5,-1.35,-.14,.5,.05,.02,(e,t,n)=>{let r=.34+.12*Math.min(1,-t);if(Math.abs(e)>r)return!1;let i=e/r*-.08*(e/r)-.04*-t;return n>i-Math.max(.05,V*1.1)&&n<=i+.001},T_(e,-1.1,144));let s=t.head;for(let e=0;e<9;e++){let t=e/9*Math.PI*2,r=Math.sin(t)*.15,i=Math.cos(t)*.16-.02,a=.12+.08*H(e,3,5);s.seg(r,.3,i,r*1.2,.3+a,i*1.2,.022,.01,n)}s.tubeY(0,-.02,.27,.33,.165,.18,1,Z.skRust),s.fill(-.1,-.1,.05,.1,0,.2,(e,t,n)=>Q(e,t,n,.03,145)>.6,Z.skOoze,`paint`);let c=new W;return c.jitter=.05,c.seg(0,-.55,0,0,1.12,0,.042,.04,(e,t,n)=>Math.abs(t)<.1||Math.abs(t-.45)<.1?Z.leatherDark:Q(e,t,n,.08,146)>.6?Z.timber:Z.timberDark),c.fill(-.13,-.8,-.03,.13,-.52,.03,(e,t)=>{let n=Math.hypot(e/.12,(t+.66)/.13);return n<1&&n>.62},Z.timberDark),c.fill(-.25,1.08,-.08,.25,1.75,.06,(e,t,n)=>{let r=(t-1.08)/.67,i=.16+.07*Math.min(1,r*3)-.06*Math.max(0,r-.8)/.2,a=e/i*-.03*(e/i);return Math.abs(e)<i&&Math.abs(n-a)<.022&&!(r>.93&&H(e/.03|0,9,1)>.6)},(e,t,r)=>t>1.68?Z.ironLight:n(e,t,r)),c.box(-.06,1.02,-.05,.06,1.14,.05,Z.ironDark),M_(t,[{bone:`weapon`,part:c},{bone:`cape`,part:o}])}var Nv=[-.1,1.05,-.1,-.5,0,.1],Pv=[-.02,-.05,.75,2.1,0,0],Fv=[0,.2,.62,Math.PI-.12,0,0];function Iv(e,t){let n=K(G(t,0,.5)),r=Jd(G(t,.5,.66)),i=q(G(t,.95,1.5));X(e,Nv,n*(1-r)),X(e,Pv,r*(1-i));let a=n*(1-r),o=r*(1-i);e[B.tRX]+=-.35*a+.5*o,e[B.nRX]+=.25*a-.3*o,e[B.hY]+=.05*a-.22*o,e[B.hZ]+=.1*o,e[B.kL]+=.2*a+.7*o,e[B.kR]+=.2*a+.6*o,e[B.lLX]-=.1*a+.5*o,e[B.lRX]+=.3*o,e[B.cape]+=.5*o-.15*a,e[B.bS]-=.05*Y(t,.64,.67,.9)}function Lv(e,t){let n=q(G(t,0,.18))*(1-q(G(t,.9,1)));X(e,Fv,n);let r=Math.sin(t*90)*.012*n;e[B.tRX]+=-.35*n+r,e[B.nRX]+=-.5*n,e[B.hY]+=.06*n,e[B.tRZ]+=r,e[B.aLZ]+=.2*n,e[B.aRZ]-=.2*n,e[B.cape]+=.35*n+Math.sin(t*23)*.08*n,e[B.glow]=J(G(t,.1,.3))*(1-J(G(t,.85,1)))}var Rv={kind:`skeleton_gravekeeper`,defaultTint:2044721,height:3.4,rig:kv,parts:Mv,hunch:.3,stance:.12,loco:{walkHz:.55,runHz:.85,stride:.36,runStride:.6,knee:.6,runKnee:1.05,bob:.07,armSwing:.25,lean:.15},carry:[-.2,.16,.4,-.9,0,.25],drop:[-.8,-.1,0,0,0,0],gripL:[0,.45,0],gripR:[0,0,0],poleL:[.9,-.5,-.3],poleR:[-.9,-.5,-.3],muzzle:{bone:`weapon`,p:[0,1.45,0]},attackDur:1.5,attack:Iv,reload:Lv,deathDepth:.35};function zv(e,t=.08,n=1/0,r=Z.inChitin,i=Z.inChitinLight){return(a,o,s)=>{let c=Q(a,o,s,.05,e),l=Ud(r,i,Math.max(0,c-.45)*1.6);if(o>n&&(l=Ud(l,Z.inSheen,Math.min(.5,(o-n)*5))),t>0){let n=Q(a,o,s,.09,e+7),r=1-t*.5;n>r&&(l=Ud(l,Z.corrupt,Math.min(.85,(n-r)*8)))}return l}}function Bv(e){return(t,n,r)=>Ud(Z.inBelly,Z.inChitinLight,Q(t,n,r,.04,e)*.8)}function Vv(e,t=!1){return(n,r,i)=>Q(n,r,i,.035,e)>.72?Z.inAcidDark:t?Z.inAcidHot:Z.inAcid}function Hv(e,t,n,r,i,a,o,s){e.fill(t,o,r,n,a,i,()=>!0,Bv(s),`paint`)}function Uv(e,t,n,r,i,a,o=0){e.ell(0,0,0,r*1.5,r*1.5,r*1.5,i),e.seg(0,0,0,t[0],t[1],t[2],r*1.3,r,i),e.ell(t[0],t[1],t[2],r*1.15,r*1.15,r*1.15,i),e.seg(t[0],t[1],t[2],n[0],n[1]+r*.6,n[2],r*.95,r*.6,i);let s=Math.sign(n[0])||1;e.seg(n[0],n[1]+r*.6,n[2],n[0]+s*r*1.6,n[1]+r*.3,n[2]+r*.8,r*.6,r*.3,a);for(let i=1;i<=o;i++){let c=i/(o+1),l=t[0]+(n[0]-t[0])*c,u=t[1]+(n[1]-t[1])*c,d=t[2]+(n[2]-t[2])*c;e.seg(l,u,d,l+s*r*1.4,u+r*1.2,d-r*.4,r*.45,r*.2,a)}}function Wv(e,t,n,r,i){let a=Math.max(.018,e.vs*1.01);e.ell(t,n,r,i,i*.9,i,(e,t,n)=>H(Math.floor(e/a),Math.floor(t/a),Math.floor(n/a))>.55?U(Z.inAcid,.72):Z.inAcid)}function Gv(e,t,n,r,i,a){e.seg(t[0],t[1],t[2],n[0],n[1],n[2],i,i*.85,a),e.ell(n[0],n[1],n[2],i*1.1,i*1.1,i*1.1,a),e.seg(n[0],n[1],n[2],r[0],r[1],r[2],i*.85,i*.6,a)}var Kv={hips:[0,.26,-.08],torso:[0,.01,.13],head:[0,.02,.12],shoulder:[.05,-.03,.01],upperLen:.12,handLen:.12,hip:[.055,-.02,0],thighLen:.12,cape:[0,.02,-.13]},qv=.026;function Jv(){let e=zv(201,.1,.03),t=zv(202,0,1/0,Z.charcoal,Z.inChitin),n=[],r=new W;r.ell(0,0,0,.075,.065,.075,e),Hv(r,-.08,.08,-.08,.08,-.035,-.08,203);let i=new W;i.ell(0,0,-.02,.085,.075,.1,e),i.rbox(0,.045,-.02,.07,.035,.085,2.6,zv(204,.1,.05,Z.inChitinMid)),Hv(i,-.09,.09,-.13,.09,-.035,-.08,205);let a=new W;a.ell(0,0,.05,.075,.065,.07,e);for(let e of[1,-1])Wv(a,e*.058,.022,.075,.032),a.seg(e*.035,-.035,.1,e*.055,-.04,.155,.02,.014,zv(206,0,1/0,Z.inChitinLight,Z.inSheen)),a.seg(e*.055,-.04,.155,e*.014,-.045,.2,.014,.008,t),Gv(a,[e*.025,.05,.09],[e*.07,.15,.13],[e*.11,.22,.23],.011,t);let o=new W;o.ell(0,.03,-.16,.13,.11,.18,e);for(let e of[-.09,-.16,-.23])o.fill(-.14,.02,e-.02,.14,.15,e+.02,(t,n,r)=>Math.abs(r-e)<.016&&n>.03+Math.abs(t)*.3,Vv(207),`paint`);Hv(o,-.14,.14,-.34,.02,-.03,-.09,208),o.seg(0,.02,-.32,0,-.03,-.39,.022,.006,t),n.push({bone:`hips`,part:r},{bone:`torso`,part:i},{bone:`head`,part:a},{bone:`cape`,part:o});let s=-.24,c=zv(209,.04);for(let[e,r]of[[1,`armL`],[-1,`armR`]]){let i=new W;Uv(i,[e*.14,.07,.1],[e*.21,s,.22],qv,c,t,1),n.push({bone:r,part:i})}let l=new W;for(let e of[1,-1])Uv(l,[e*.17,.07,0],[e*.29,s,.02],qv,c,t,1);n.push({bone:`weapon`,part:l});for(let[e,r]of[[1,`thighL`],[-1,`thighR`]]){let i=new W;Uv(i,[e*.14,.07,-.09],[e*.22,s,-.22],qv,c,t,1),n.push({bone:r,part:i})}return n}function Yv(e,t){let n=K(G(t,0,.18)),r=Jd(G(t,.18,.3)),i=q(G(t,.36,.5)),a=n*(1-r),o=r*(1-i);e[B.hZ]+=-.05*a+.14*o,e[B.hY]+=-.02*a+.02*o,e[B.hRX]+=-.12*a+.12*o,e[B.nRX]+=-.35*a+.4*o,e[B.aLZ]+=.45*a,e[B.aRZ]-=.45*a,e[B.aLX]-=.3*a,e[B.aRX]-=.3*a,e[B.cape]+=.3*a-.15*o}var Xv={kind:`insectoid_swarmling`,defaultTint:Z.inAcid,height:.55,rig:Kv,parts:Jv,gait:`hex`,hunch:0,stance:0,loco:{walkHz:3,runHz:4.5,stride:.4,runStride:.6,knee:.35,runKnee:.45,bob:.012,armSwing:0,lean:.05},carry:[0,-.03,-.065,0,0,0],drop:[0,-.03,-.065,0,0,0],gripL:null,gripR:null,muzzle:{bone:`weapon`,p:[0,0,.2]},attackDur:.5,attack:Yv,deathDepth:.44},Zv={hips:[0,.5,-.15],torso:[0,.02,.24],head:[0,.03,.2],shoulder:[.1,-.05,.04],upperLen:.2,handLen:.2,hip:[.11,-.03,0],thighLen:.2,cape:[0,.05,-.24]},Qv=.042;function $v(){let e=zv(301,.1,.06),t=zv(302,0,1/0,Z.charcoal,Z.inChitin),n=[],r=new W;r.ell(0,0,0,.15,.13,.15,e),Hv(r,-.16,.16,-.16,.16,-.06,-.14,303);let i=new W;i.ell(0,0,-.02,.16,.14,.2,e),i.rbox(0,.09,-.01,.15,.06,.17,2.6,zv(304,.1,.1,Z.inChitinMid)),Hv(i,-.17,.17,-.23,.19,-.06,-.15,305);let a=new W;a.ell(0,0,.08,.12,.11,.12,e),a.tubeZ(0,-.02,.14,.32,.055,.05,.75,zv(306,.05,.02,Z.inChitinMid)),a.ell(0,-.02,.325,.04,.035,.02,Vv(307,!0)),a.seg(0,-.05,.33,0,-.1,.34,.016,.01,Z.inAcid);for(let e of[1,-1])Wv(a,e*.095,.05,.13,.05),a.seg(e*.06,-.07,.15,e*.08,-.13,.22,.016,.01,t),Gv(a,[e*.05,.09,.15],[e*.12,.18,.2],[e*.2,.2,.3],.013,t);let o=new W,s=Vv(308);o.ell(0,.24,-.3,.32,.34,.38,(e,t,n)=>{let r=((n+.02)*7.5%1+1)%1;return t>.14+Math.abs(e)*.25&&r<.64?Ud(Z.inChitin,Z.inChitinLight,Q(e,t,n,.05,309)*.7):t<0?Ud(Z.inBelly,Z.inChitinLight,Q(e,t,n,.04,310)*.8):s(e,t,n)}),o.ell(0,.24,-.66,.1,.1,.05,t),n.push({bone:`hips`,part:r},{bone:`torso`,part:i},{bone:`head`,part:a},{bone:`cape`,part:o});let c=-.47,l=zv(311,.05);for(let[e,r]of[[1,`armL`],[-1,`armR`]]){let i=new W;Uv(i,[e*.27,.12,.2],[e*.4,c,.42],Qv,l,t,2),n.push({bone:r,part:i})}let u=new W;for(let e of[1,-1])Uv(u,[e*.32,.13,0],[e*.52,c,.05],Qv,l,t,2);n.push({bone:`weapon`,part:u});for(let[e,r]of[[1,`thighL`],[-1,`thighR`]]){let i=new W;Uv(i,[e*.27,.12,-.14],[e*.42,c,-.38],Qv,l,t,2),n.push({bone:r,part:i})}return n}function ey(e,t){let n=K(G(t,0,.5)),r=Jd(G(t,.52,.62)),i=q(G(t,.68,.95)),a=n*(1-r),o=r*(1-i);e[B.hRX]+=-.22*a-.05*o,e[B.hY]+=.05*a,e[B.hZ]+=-.04*a+.08*o,e[B.nRX]+=-.35*a+.4*o,e[B.cape]+=.3*a-.35*o,e[B.bS]=1+.03*Y(t,.3,.5,.62)-.04*o,e[B.aLZ]+=.2*a,e[B.aRZ]-=.2*a}function ty(e,t){e[B.cape]+=.03*Math.sin(t*5.1)}var ny={kind:`insectoid_spitter`,defaultTint:Z.inAcid,height:1.15,rig:Zv,parts:$v,gait:`hex`,hunch:0,stance:0,loco:{walkHz:1.6,runHz:2.2,stride:.3,runStride:.4,knee:.3,runKnee:.35,bob:.02,armSwing:0,lean:.04},carry:[0,-.05,-.12,0,0,0],drop:[0,-.05,-.12,0,0,0],gripL:null,gripR:null,muzzle:{bone:`weapon`,p:[0,.1,.5]},attackDur:.95,attack:ey,idleExtra:ty,deathDepth:1.12},ry={hips:[0,.62,-.1],torso:[0,.05,.12],head:[0,.6,.24],shoulder:[.07,.42,.18],upperLen:.3,handLen:.28,hip:[.08,-.03,-.05],thighLen:.3,cape:[0,0,-.2]},iy=.04,ay=3749919,oy=7039542,sy=-1.7,cy=2.55;function ly(){let e=zv(401,.08,.05,ay,oy),t=zv(402,0,1/0,Z.charcoal,Z.inChitin),n=[],r=new W;r.ell(0,0,0,.1,.09,.12,e),Hv(r,-.11,.11,-.13,.13,-.04,-.1,403);let i=new W;i.ell(0,0,0,.09,.08,.1,e),i.seg(0,.02,.02,0,.56,.22,.07,.055,e),i.seg(0,.05,.08,0,.5,.26,.02,.015,zv(404,0,1/0,oy,Z.inSheen));let a=new W;a.ell(0,.02,.05,.13,.075,.065,e),a.rbox(0,-.06,.08,.045,.065,.035,2.2,e),a.ell(0,-.12,.09,.03,.025,.025,t);for(let e of[1,-1])Wv(a,e*.12,.05,.05,.055),Gv(a,[e*.03,.07,.08],[e*.1,.25,.12],[e*.18,.4,.04],.01,t);let o=new W;o.ell(0,0,-.36,.12,.11,.42,e),Hv(o,-.13,.13,-.8,.06,-.03,-.12,405);let s=zv(406,.05,.08,4868646,8026686);o.fill(-.16,.05,-.8,.16,.14,.02,(e,t,n)=>{let r=(n+.36)/.44,i=e/.15;return r*r+i*i<=1&&t<.1+.03*(1-i*i)&&t>.06+Math.abs(i)*-.02},(e,t,n)=>Math.abs(e)<.012||Math.abs((n*12%1+1)%1-.5)<.06?Z.inChitin:s(e,t,n)),n.push({bone:`hips`,part:r},{bone:`torso`,part:i},{bone:`head`,part:a},{bone:`cape`,part:o});let c=zv(407,0,1/0,Z.inBelly,Z.inSheen),l=zv(409,.05,1/0,oy,9079370);for(let[e,r,i]of[[1,`armL`,`foreL`],[-1,`armR`,`foreR`]]){let a=new W;a.ell(0,0,0,.05,.05,.05,l),a.seg(0,-.02,0,0,-.29,0,.052,.042,l);for(let t=0;t<4;t++){let n=-.1-t*.05;a.seg(-e*.005,n,.025,-e*.01,n-.015,.075,.012,.004,c)}let o=new W;o.ell(0,0,0,.042,.042,.042,l),o.seg(0,0,0,0,-.25,0,.036,.026,l);for(let e=0;e<3;e++){let t=-.07-e*.055;o.seg(0,t,.02,0,t+.01,.06,.01,.004,c)}o.seg(0,-.25,0,0,-.3,.05,.022,.008,t),n.push({bone:r,part:a},{bone:i,part:o})}let u=-.59,d=zv(408,.04,1/0,ay,oy),f=new W;for(let e of[1,-1])Uv(f,[e*.3,.18,.12],[e*.46,u,.3],iy,d,t);n.push({bone:`weapon`,part:f});for(let[e,r]of[[1,`thighL`],[-1,`thighR`]]){let i=new W;Uv(i,[e*.3,.2,-.2],[e*.44,u,-.55],iy,d,t),n.push({bone:r,part:i})}return n}function uy(e,t){let n=Math.sin(t*2.3);e[B.aLX]=sy+.05*n,e[B.aRX]=sy-.05*n,e[B.aLZ]=.12,e[B.aRZ]=-.12,e[B.aLY]=-.1,e[B.aRY]=.1,e[B.fL]=cy,e[B.fR]=cy}function dy(e,t){let n=K(G(t,0,.35)),r=Jd(G(t,.4,.5)),i=q(G(t,.58,.9)),a=n*(1-r),o=r*(1-i);e[B.aLX]+=-.55*a+.95*o,e[B.aRX]+=-.55*a+.95*o,e[B.fL]+=.3*a-1.4*o,e[B.fR]+=.3*a-1.4*o,e[B.tRX]+=-.15*a+.35*o,e[B.hZ]+=-.05*a+.16*o,e[B.hY]+=.03*a-.04*o,e[B.nRX]+=-.2*a+.25*o}var fy={kind:`insectoid_mantis`,defaultTint:Z.inAcid,height:1.7,rig:ry,parts:ly,gait:`hex`,hunch:0,stance:0,loco:{walkHz:1.8,runHz:2.6,stride:.3,runStride:.42,knee:.3,runKnee:.38,bob:.02,armSwing:0,lean:.12},carry:[0,-.08,-.05,0,0,0],drop:[0,-.08,-.05,0,0,0],gripL:null,gripR:null,muzzle:{bone:`weapon`,p:[0,.6,.4]},attackDur:.9,attack:dy,idleExtra:uy,deathRoll:Math.PI/2,deathDepth:.2},py={hips:[0,.55,-.2],torso:[0,.02,.35],head:[0,-.02,.3],shoulder:[.18,-.08,.08],upperLen:.25,handLen:.25,hip:[.2,-.06,0],thighLen:.25,cape:[0,.05,-.3]},my=.055;function hy(){let e=zv(501,.14,.1),t=zv(502,0,1/0,Z.charcoal,Z.inChitin),n=[],r=new W;r.ell(0,0,0,.3,.22,.24,e),Hv(r,-.31,.31,-.25,.25,-.08,-.23,503);let i=new W;i.rbox(0,.08,.02,.36,.22,.26,2.4,zv(504,.14,.15,Z.inChitin,Z.inChitinMid)),Hv(i,-.37,.37,-.25,.29,-.06,-.15,505),i.seg(0,.26,.08,0,.36,.34,.06,.022,zv(506,0,.3,Z.inChitinMid,Z.inSheen));let a=new W;a.ell(0,0,.1,.2,.15,.16,e);for(let e of[1,-1])Wv(a,e*.17,.05,.15,.045),a.seg(e*.09,-.1,.2,e*.05,-.13,.27,.03,.015,t);let o=zv(507,0,.3,Z.inChitinMid,Z.inBelly);a.seg(0,.04,.2,0,.24,.48,.085,.045,o),a.seg(0,.24,.48,0,.43,.5,.045,.014,o);let s=new W,c=zv(508,.22,.2,Z.inChitin,Z.inChitinMid);s.ell(0,.05,-.38,.46,.38,.55,(e,t,n)=>Math.abs(e)<.018&&t>.1?Q(e,t,n,.05,509)>.6?Z.inAcid:Z.charcoal:t>.05&&Math.abs(Q(e,t,n,.06,510)-.5)<.025?Ud(Z.corrupt,Z.inAcid&16777215,.15):c(e,t,n)),s.fill(-.47,-.34,-.94,.47,-.18,.18,()=>!0,0,`carve`),Hv(s,-.47,.47,-.94,.18,-.08,-.18,511),n.push({bone:`hips`,part:r},{bone:`torso`,part:i},{bone:`head`,part:a},{bone:`cape`,part:s});let l=-.49,u=zv(512,.1);for(let[e,r]of[[1,`armL`],[-1,`armR`]]){let i=new W;Uv(i,[e*.3,.12,.15],[e*.48,l,.42],my,u,t,2),n.push({bone:r,part:i})}let d=new W;for(let e of[1,-1])Uv(d,[e*.38,.14,0],[e*.66,l,.02],my,u,t,2);n.push({bone:`weapon`,part:d});for(let[e,r]of[[1,`thighL`],[-1,`thighR`]]){let i=new W;Uv(i,[e*.32,.12,-.12],[e*.5,l,-.45],my,u,t,2),n.push({bone:r,part:i})}return n}function gy(e,t){let n=K(G(t,0,.6)),r=Jd(G(t,.66,.8)),i=q(G(t,.86,1.1)),a=n*(1-r),o=r*(1-i);e[B.hY]+=-.07*a+.06*o,e[B.hZ]+=-.06*a+.2*o,e[B.hRX]+=.1*a-.18*o,e[B.nRX]+=.4*a-.8*o,e[B.tRX]+=.12*a-.2*o,e[B.aLZ]+=.3*o,e[B.aRZ]-=.3*o,e[B.cape]+=.12*o}var _y={kind:`insectoid_beetle`,defaultTint:Z.inAcid,height:1.1,rig:py,parts:hy,gait:`hex`,hunch:0,stance:0,loco:{walkHz:1.2,runHz:1.6,stride:.26,runStride:.34,knee:.26,runKnee:.3,bob:.025,armSwing:0,lean:.03},carry:[0,-.08,-.18,0,0,0],drop:[0,-.08,-.18,0,0,0],gripL:null,gripR:null,muzzle:{bone:`weapon`,p:[0,.1,.7]},attackDur:1.1,attack:gy,deathDepth:1.06},vy={hips:[0,.68,0],torso:[0,.03,.13],head:[0,.04,.2],shoulder:[.06,.12,-.01],upperLen:.26,handLen:.26,hip:[.06,-.06,.03],thighLen:.26,cape:[0,-.01,-.16]},yy=.024,by=13616292;function xy(e,t,n,r,i,a,o){let s=e=>a*Math.sin(Math.PI*Math.min(1,.12+e*.95))**.7;e.fill(0,o,r-i-a,t*n,o+e.vs,r+a,(e,t,a)=>{let o=Math.abs(e)/n;return o<=1&&Math.abs(a-(r-i*o))<=s(o)},(e,t,o)=>{let c=Math.abs(e)/n,l=o-(r-i*c);return l>s(c)*.7?Ud(Z.inWingVein,Z.inChitin,.3):Math.abs(l+a*.1)<.014||Math.abs(c*5%1-.5)<.05&&c<.8?Z.inWingVein:Ud(by,Z.inWing,Q(e,0,o,.07,211)*.6)})}function Sy(){let e=zv(201,.05,.05),t=zv(202,0,1/0,Z.charcoal,Z.inChitin),n=zv(203,0,.12,Z.inOchre,14067264),r=[],i=new W;i.ell(0,0,0,.045,.045,.065,t);let a=new W;a.ell(0,0,0,.135,.13,.155,(t,n,r)=>Math.abs(Math.abs(t)-.09)<.03&&n>.025&&r>-.03?Z.inOchre:e(t,n,r)),a.ell(0,.09,-.08,.08,.05,.065,e);let o=new W;o.ell(0,0,.08,.12,.11,.1,(t,n,r)=>n<-.02&&r>.1?Z.inOchre:e(t,n,r));for(let e of[1,-1])Wv(o,e*.085,.025,.09,.065),o.seg(e*.045,-.08,.16,e*.012,-.12,.21,.02,.01,t),Gv(o,[e*.03,.08,.14],[e*.08,.21,.21],[e*.13,.2,.36],.013,t);let s=new W;s.seg(0,0,.03,0,-.025,-.1,.032,.04,t),s.fill(-.17,-.27,-.8,.17,.16,-.06,(e,t,n)=>{let r=(-n-.08)/.68,i=-.04-.13*r*r,a=.14*Math.sin(Math.PI*Math.min(1,.18+r*.9))+.014;return r>=0&&r<=1&&e*e/(a*a)+(t-i)*(t-i)/(a*a*.85)<=1},(t,r,i)=>{let a=(-i-.08)/.68;return(a*5.2%1+1)%1<.45?r<-.08-.13*a*a?Z.inOchreDark:n(t,r,i):e(t,r,i)}),s.seg(0,-.17,-.73,0,-.25,-.91,.03,.008,t),s.ell(0,-.255,-.915,.02,.02,.02,Vv(212,!0)),r.push({bone:`hips`,part:i},{bone:`torso`,part:a},{bone:`head`,part:o},{bone:`cape`,part:s});for(let[e,n]of[[1,`armL`],[-1,`armR`]]){let i=new W;i.jitter=.02,xy(i,e,.74,.03,.18,.11,0),xy(i,e,.5,-.13,.13,.08,-i.vs),i.ell(0,0,0,.032,.032,.04,t),r.push({bone:n,part:i})}let c=new W;for(let e of[1,-1])Uv(c,[e*.13,-.04,.13],[e*.1,-.31,.21],yy,n,t),Uv(c,[e*.17,-.05,0],[e*.16,-.39,-.04],yy,n,t);r.push({bone:`weapon`,part:c});for(let[e,i]of[[1,`thighL`],[-1,`thighR`]]){let a=new W;Uv(a,[e*.14,-.04,-.09],[e*.16,-.56,-.18],yy,n,t),r.push({bone:i,part:a})}return r}function Cy(e,t){let n=K(G(t,0,.3)),r=Jd(G(t,.32,.42)),i=q(G(t,.5,.75)),a=n*(1-r),o=r*(1-i);e[B.hRX]+=-.35*a+.3*o,e[B.hZ]+=-.08*a+.24*o,e[B.hY]+=.06*a-.06*o,e[B.cape]+=-.6*a-1.1*o,e[B.nRX]+=.2*a,e[B.lLX]-=.4*a,e[B.lRX]-=.4*a}var wy={kind:`insectoid_wasp`,defaultTint:Z.inAcid,height:1,rig:vy,parts:Sy,gait:`fly`,wingHz:11,hunch:0,stance:.12,loco:{walkHz:1.2,runHz:1.8,stride:.3,runStride:.4,knee:.2,runKnee:.3,bob:.02,armSwing:0,lean:.3},carry:[0,-.08,0,0,0,0],drop:[0,-.08,0,0,0,0],gripL:null,gripR:null,muzzle:{bone:`weapon`,p:[0,-.13,.26]},attackDur:.75,attack:Cy,deathDepth:.86},Ty={hips:[0,.42,-.28],torso:[0,.02,.36],head:[0,-.04,.3],shoulder:[.17,-.07,.12],upperLen:.22,handLen:.22,hip:[.14,-.05,0],thighLen:.22,cape:[0,0,-.44]},Ey=.042;function Dy(e,t,n){return(r,i,a)=>i<t+.06*(Q(r,i,a,.06,n)-.5)?Ud(Z.inClayDark,Z.inClay,Q(r,i,a,.035,n+1)*1.4):e(r,i,a)}function Oy(){let e=zv(601,.07,.08,Z.inChitinMid,Z.inChitinLight),t=zv(602,0,1/0,Z.charcoal,Z.inChitin),n=[],r=new W;r.ell(0,0,0,.19,.15,.18,Dy(e,-.06,603));let i=new W,a=Dy(zv(604,.08,.1,Z.inChitin,Z.inChitinMid),-.07,605);i.rbox(0,.04,0,.27,.17,.25,2.3,a);for(let[e,n]of[[.12,.14],[0,.18],[-.12,.14]])i.seg(0,.18,e,0,.18+n,e-.06,.035,.008,t);for(let e of[1,-1])i.seg(e*.2,.14,-.05,e*.26,.24,-.12,.028,.008,t);let o=new W,s=Dy(zv(606,.05,.02,Z.inChitinMid,Z.inSheen),-.05,607);o.fill(-.3,-.12,-.05,.3,.08,.4,(e,t,n)=>{let r=n/.36,i=.16+.12*Math.min(1,r*1.4),a=.09-.14*r*r-.9*e*e,o=-.1+.03*r;return r>=-.1&&r<=1&&Math.abs(e)<=i&&t<=a&&t>=o},s);for(let e=-3;e<=3;e++)o.seg(e*.075,-.04,.36,e*.08,-.06,.43,.022,.006,t);for(let e of[1,-1])o.seg(e*.1,-.08,.2,e*.07,-.15,.46,.045,.012,zv(608,0,1/0,Z.inChitinLight,Z.inBelly)),Wv(o,e*.13,.04,.05,.035);let c=new W,l=Vv(609),u=Dy(e,-.08,610);for(let e=0;e<4;e++){let t=-.02-e*.16,n=.21-e*.035;c.ell(0,.02-e*.015,t,n,n*.78,.1,(e,n,r)=>Math.abs(r-t+.085)<.018&&n>-.02?l(e,n,r):u(e,n,r))}c.seg(0,-.02,-.6,0,.02,-.8,.05,.01,t),Hv(c,-.25,.25,-.75,.1,-.12,-.2,611),n.push({bone:`hips`,part:r},{bone:`torso`,part:i},{bone:`head`,part:o},{bone:`cape`,part:c});let d=Dy(zv(612,.04),-.2,613);for(let[e,r]of[[1,`armL`],[-1,`armR`]]){let i=new W;i.ell(0,0,0,.07,.07,.07,d),i.seg(0,0,0,e*.24,.08,.12,.07,.06,d),i.seg(e*.24,.08,.12,e*.36,-.29,.28,.06,.05,d),i.rbox(e*.38,-.31,.32,.1,.05,.09,2.2,d);for(let n=0;n<4;n++){let r=e*(.3+n*.05);i.seg(r,-.32,.38,r+e*.02,-.36,.47,.022,.008,t)}n.push({bone:r,part:i})}let f=new W;for(let e of[1,-1])Uv(f,[e*.3,.1,0],[e*.46,-.38,.02],Ey,d,t,2);n.push({bone:`weapon`,part:f});for(let[e,r]of[[1,`thighL`],[-1,`thighR`]]){let i=new W;Uv(i,[e*.28,.12,-.12],[e*.42,-.37,-.4],Ey,d,t,2),n.push({bone:r,part:i})}return n}function ky(e,t){let n=K(G(t,0,.3)),r=Jd(G(t,.32,.44)),i=q(G(t,.5,.8)),a=n*(1-r),o=r*(1-i);e[B.hRX]+=-.25*a+.12*o,e[B.hY]+=.04*a,e[B.hZ]+=.12*o,e[B.aLX]+=-.7*a+.4*o,e[B.aRX]+=-.7*a+.4*o,e[B.aLZ]+=.4*a-.1*o,e[B.aRZ]-=.4*a-.1*o,e[B.aLY]-=.5*o,e[B.aRY]+=.5*o,e[B.nRX]+=.25*o}function Ay(e,t){let n=J(G(t,0,.15)),r=Jd(G(t,.12,1)),i=G(t,.12,.95),a=Math.sin(i*Math.PI*12)*n*(1-J(G(t,.85,1)));e[B.hRX]+=.45*n,e[B.tRX]+=.2*n,e[B.bY]-=1.3*r,e[B.bRZ]+=.05*Math.sin(t*40)*r,e[B.aLX]+=.7*a-.3*n,e[B.aRX]-=.7*a+.3*n,e[B.aLZ]+=.25*Math.max(0,a),e[B.aRZ]-=.25*Math.max(0,-a),e[B.cape]+=.3*n+.1*Math.sin(t*30)*n}function jy(e,t){let n=K(G(t,.05,.35)),r=J(G(t,.35,.55)),i=G(t,.55,.9),a=n*(1-r);e[B.bY]+=-1.2*(1-n)+.18*a,e[B.hRX]+=-.7*(1-r)+.15*Y(t,.45,.52,.65),e[B.aLX]-=1*a,e[B.aRX]-=1*a,e[B.aLZ]+=.7*a,e[B.aRZ]-=.7*a,e[B.lLX]+=.5*a,e[B.lRX]+=.5*a,e[B.cape]-=.4*a,e[B.hRZ]+=.12*Math.sin(i*Math.PI*7)*(1-i)*(i>0),e[B.bS]+=.06*Y(t,.5,.54,.7)*-1}var My={kind:`insectoid_tunneler`,defaultTint:Z.inAcid,height:.75,rig:Ty,parts:Oy,gait:`hex`,hunch:0,stance:0,loco:{walkHz:1.5,runHz:2.1,stride:.28,runStride:.38,knee:.26,runKnee:.32,bob:.02,armSwing:0,lean:.06},carry:[0,-.06,-.18,0,0,0],drop:[0,-.06,-.18,0,0,0],gripL:null,gripR:null,muzzle:{bone:`weapon`,p:[0,0,.8]},attackDur:.8,attack:ky,reload:Ay,special:jy,specialDur:.9,deathDepth:.72},Ny={hips:[0,.74,-.12],torso:[0,.05,.24],head:[0,.06,.28],shoulder:[.13,.2,-.06],upperLen:.3,handLen:.3,hip:[.16,-.08,0],thighLen:.3,cape:[0,.04,-.34]},Py=.05,Fy=.3,Iy=.95;function Ly(e,t,n,r,i,a,o,s,c){let l=e.vs*1.5;e.fill(t-i-l,n-a-l,r-o-l,t+i+l,n+a+l,r+o+l,(s,u,d)=>{let f=(s-t)/(i+l),p=(u-n)/(a+l),m=(d-r)/(o+l);return f*f+p*p+m*m<=1&&H(Math.floor(s/e.vs),Math.floor(u/e.vs)+c,Math.floor(d/e.vs))>.55},s,`under`)}function Ry(){let e=zv(701,.3,.1),t=zv(702,0,1/0,Z.charcoal,Z.inChitin),n=zv(703,.2,.1,Z.inOchreDark,Z.inOchre),r=[],i=new W;i.ell(0,0,0,.2,.19,.2,e);let a=new W,o=(t,r,i)=>i>.1||r>.14&&Math.abs(t)>.1?n(t,r,i):e(t,r,i);a.ell(0,.02,0,.26,.24,.25,o),Ly(a,0,.02,0,.26,.24,.25,o,3),Hv(a,-.3,.3,-.3,.3,-.1,-.26,704);let s=new W;s.ell(0,0,.08,.17,.15,.14,e);for(let e of[1,-1]){Wv(s,e*.12,.03,.1,.07),s.seg(e*.07,-.1,.18,e*.02,-.15,.28,.03,.012,t);let r=[e*.05,.12,.14],i=[e*.14,.42,.2],a=[e*.18,.62,.06];Gv(s,r,i,a,.026,t);for(let t=0;t<=7;t++){let r=t/8,o=i[0]+(a[0]-i[0])*r,c=i[1]+(a[1]-i[1])*r,l=i[2]+(a[2]-i[2])*r,u=.13*(1-Math.abs(r-.45));s.seg(o,c,l,o+e*u,c-.04,l+.02,.016,.008,n),s.seg(o,c,l,o-e*u*.3,c-.03,l+u*.9,.016,.008,n)}}let c=new W,l=-.36;c.ell(0,.02,l,.36,.34,.44,(t,r,i)=>{if((r-.02)/.34>.25&&i<-.06){let e=.075,n=Math.floor(i/(e*.87)),a=t/e+(n&1?.5:0),o=a-Math.round(a),s=i/(e*.87)-n-.5;return Math.abs(o)>.36||Math.abs(s)>.36?Ud(Z.inOchreDark,Z.inChitin,.4):Q(t,r,i,.05,705)>.72?Z.inAcidDark:Z.inAcid}let a=((i-l)*6%1+1)%1;return Math.abs(Q(t,r,i,.08,706)-.5)<.02?Z.inAcid:a<.45?n(t,r,i):e(t,r,i)}),Ly(c,0,.02,l,.36,.34,.44,(t,n,r)=>n>.1?-1:e(t,n,r),5),Hv(c,-.4,.4,-.85,.1,-.12,-.34,707),c.seg(0,-.05,-.78,0,-.1,-.86,.04,.01,t),r.push({bone:`hips`,part:i},{bone:`torso`,part:a},{bone:`head`,part:s},{bone:`cape`,part:c});for(let[e,n]of[[1,`armL`],[-1,`armR`]]){let i=new W;i.jitter=.02,i.fill(0,0,-.14,e*.46,i.vs,.1,(e,t,n)=>{let r=Math.abs(e)/.46;return r<=1&&Math.abs(n+.02+.04*r)<=.11*Math.sqrt(Math.sin(Math.PI*Math.min(1,.1+r*.92)))},(e,t,n)=>Math.abs(n+.02)<.012||Math.abs((e*12%1+1)%1-.5)<.06?Z.inWingVein:Ud(13616292,Z.inWing,Q(e,0,n,.05,708)*.6)),i.ell(0,0,0,.035,.035,.035,t),r.push({bone:n,part:i})}let u=zv(709,.15,1/0,Z.inChitinMid,Z.inOchreDark),d=new W;for(let e of[1,-1])Uv(d,[e*.34,.1,.06],[e*.52,-.67,.18],Py,u,t,2);r.push({bone:`weapon`,part:d});for(let[e,i]of[[1,`thighL`],[-1,`thighR`]]){let a=new W;Uv(a,[e*.34,.1,-.16],[e*.48,-.66,-.46],Py,u,t,2),a.ell(e*.42,-.24,-.3,.07,.11,.07,n),r.push({bone:i,part:a})}return r}function zy(e,t){let n=Math.sin(t*Math.PI*2*13);e[B.aLX]=0,e[B.aRX]=0,e[B.aLY]=Iy,e[B.aRY]=-.95,e[B.aLZ]=Fy+.3*n,e[B.aRZ]=-(Fy+.3*n),e[B.cape]+=.04*Math.sin(t*3.1)}function By(e,t){let n=K(G(t,0,.35)),r=Jd(G(t,.36,.46)),i=q(G(t,.55,.85)),a=n*(1-r),o=r*(1-i);e[B.hZ]+=-.08*a+.2*o,e[B.hRX]+=-.15*a+.15*o,e[B.nRX]+=-.3*a+.45*o,e[B.aLZ]+=.3*a,e[B.aRZ]-=.3*a}function Vy(e,t){let n=J(G(t,0,.18))*(1-J(G(t,.82,1)));e[B.hRX]-=.3*n,e[B.hY]+=.08*n,e[B.nRX]-=.3*n,e[B.aLZ]+=.5*n,e[B.aRZ]-=.5*n,e[B.aLY]-=Iy*.6*n,e[B.aRY]+=Iy*.6*n,e[B.cape]+=(.25+.1*Math.sin(t*40))*n,e[B.glow]=n,e[B.bS]+=.03*Y(t,.3,.4,.6)}var Hy={kind:`insectoid_hive_drone`,defaultTint:Z.inAcid,height:1.45,rig:Ny,parts:Ry,gait:`hex`,hunch:0,stance:0,loco:{walkHz:1.3,runHz:1.8,stride:.28,runStride:.36,knee:.28,runKnee:.34,bob:.03,armSwing:0,lean:.05},carry:[0,-.12,-.02,0,0,0],drop:[0,-.12,-.02,0,0,0],gripL:null,gripR:null,muzzle:{bone:`weapon`,p:[0,.1,.8]},attackDur:.85,attack:By,reload:Vy,idleExtra:zy,deathRoll:Math.PI/2,deathDepth:.4},Uy={hips:[0,1.15,-.55],torso:[0,.08,.6],head:[0,1,.36],shoulder:[.28,.62,.22],upperLen:.7,handLen:.75,hip:[.34,-.1,0],thighLen:.7,cape:[0,.04,-.62]},Wy=.07,Gy=-1.5,Ky=.35,qy=2.2;function Jy(e,t=.2){let n=zv(e,.85,t,Z.inChitin,Z.inChitinMid);return(t,r,i)=>{if(Math.abs(Q(t,r,i,.1,e+5)-.5)<.012&&Q(t,r,i,.3,e+6)>.4)return Z.inAcid;let a=n(t,r,i);return Q(t,r,i,.14,e+9)>.5?Ud(a,Z.corruptDeep,.35):a}}function Yy(){let e=Jy(801),t=zv(802,.3,1/0,Z.charcoal,Z.inChitin),n=[],r=new W;r.ell(0,0,0,.36,.3,.36,e),Hv(r,-.4,.4,-.4,.4,-.12,-.3,803);let i=new W;i.ell(0,0,0,.42,.36,.42,e),Hv(i,-.45,.45,-.45,.45,-.14,-.36,804),i.seg(0,.15,.05,0,.98,.32,.27,.19,(t,n,r)=>Math.abs((n*7%1+1)%1-.5)<.07?Z.inChitin:e(t,n,r));let a=zv(805,.9,1/0,Z.corrupt,Z.inChitinMid);for(let e of[1,-1])i.fill(e*.08,.62,-.35,e*.85,1.62,.3,(e,t,n)=>{let r=(t-.62)/1,i=.16-r*.35,a=.1+r*.18,o=.14+r*.62,s=Math.abs(e);return r>=0&&r<=1&&Math.abs(n-i)<.04&&s>a&&s<o-.08*Math.sin(r*Math.PI*4)**2},(e,t,n)=>{let r=(t-.62)/1,i=Math.abs(e);return i>.1+r*.62-.05?Z.inAcid:Math.abs((Math.atan2(t-.62,i)*6%1+1)%1-.5)<.08?Z.inChitin:a(e,t,n)});let o=new W;o.ell(0,.04,.1,.22,.17,.2,e),o.rbox(0,-.08,.22,.12,.08,.1,2.4,e);for(let e of[1,-1])Wv(o,e*.17,.08,.14,.08),o.seg(e*.1,-.12,.28,e*.14,-.2,.42,.045,.03,t),o.seg(e*.14,-.2,.42,e*.04,-.24,.52,.03,.01,t);for(let e=-3;e<=3;e++){let n=Math.abs(e),r=[e*.1,.56-n*.06,-.02-n*.03];o.seg(e*.055,.17,.08,r[0],r[1],r[2],.045,.012,t),o.ell(r[0],r[1],r[2],.022,.022,.022,Z.inAcidHot)}let s=new W,c=-1.02,l=.8,u=.68,d=1.08,f=Bv(806);s.ell(0,.05,c,l,u,d,(t,n,r)=>n<-.18?f(t,n,r):((r-c)*2.6%1+1)%1<.62?e(t,n,r):Ud(Z.corruptDeep,Z.inAcidDark,Q(t,n,r,.05,807)));let p=Vv(808);for(let e=-2;e<=1;e++){let t=c+(e+.81)/2.6;for(let e=-3;e<=3;e++){let n=e*.34,r=(t-c)/d,i=Math.sqrt(Math.max(0,1-r*r)),a=Math.sin(n)*l*i*.97,o=.05+Math.cos(n)*u*i*.97;o<-.1||s.ell(a,o,t,.1,.1,.1,p)}}s.seg(0,-.05,-2,0,-.3,-2.4,.14,.03,t),n.push({bone:`hips`,part:r},{bone:`torso`,part:i},{bone:`head`,part:o},{bone:`cape`,part:s});let m=zv(809,0,1/0,Z.inBelly,Z.inSheen);for(let[r,i]of[[`armL`,`foreL`],[`armR`,`foreR`]]){let a=new W;a.ell(0,0,0,.12,.12,.12,e),a.seg(0,0,0,0,-.7,0,.1,.08,e);for(let e=0;e<4;e++)a.seg(0,-.18-e*.13,.06,0,-.22-e*.13,.17,.025,.006,m);let o=new W;o.ell(0,0,0,.085,.085,.085,e),o.seg(0,0,0,0,-.62,0,.075,.055,e),o.seg(0,-.6,0,0,-.84,.1,.06,.03,t),o.seg(0,-.84,.1,0,-.8,.24,.03,.008,t);for(let e=0;e<3;e++)o.seg(0,-.2-e*.14,.05,0,-.18-e*.14,.15,.02,.005,m);n.push({bone:r,part:a},{bone:i,part:o})}let h=Jy(810,1/0),g=new W;for(let e of[1,-1])Uv(g,[e*.75,.38,.12],[e*1.12,-1.08,.32],Wy,h,t,3);n.push({bone:`weapon`,part:g});for(let[e,r]of[[1,`thighL`],[-1,`thighR`]]){let i=new W;Uv(i,[e*.7,.34,-.3],[e*1.02,-1.05,-.78],Wy,h,t,3),n.push({bone:r,part:i})}return n}function Xy(e,t){let n=Math.sin(t*1.3);e[B.aLX]=Gy+.06*n,e[B.aRX]=Gy-.06*n,e[B.aLZ]=Ky,e[B.aRZ]=-.35,e[B.aLY]=0,e[B.aRY]=0,e[B.fL]=qy+.08*Math.sin(t*2.1),e[B.fR]=qy+.08*Math.sin(t*2.1+1),e[B.cape]+=.03*Math.sin(t*1.7)}function Zy(e,t){let n=K(G(t,0,.45)),r=Jd(G(t,.48,.6)),i=q(G(t,.8,1.25)),a=n*(1-r),o=r*(1-i);e[B.aLX]+=-.55*a+1.15*o,e[B.aRX]+=-.55*a+1.15*o,e[B.fL]+=.3*a-1.1*o,e[B.fR]+=.3*a-1.1*o,e[B.tRX]+=-.15*a+.3*o,e[B.hRX]+=-.08*a+.1*o,e[B.hZ]+=-.08*a+.2*o,e[B.nRX]+=-.2*a+.3*o,e[B.bS]-=.03*Y(t,.58,.61,.8)}function Qy(e,t){let n=J(G(t,0,.2))*(1-J(G(t,.85,1))),r=Math.max(0,Math.sin(G(t,.2,.85)*Math.PI*3));e[B.hRX]-=.2*n,e[B.tRX]-=.2*n,e[B.hY]+=.08*n,e[B.aLZ]+=.55*n,e[B.aRZ]-=.55*n,e[B.aLX]+=.35*n,e[B.aRX]+=.35*n,e[B.fL]-=.5*n,e[B.fR]-=.5*n,e[B.nRX]-=.55*n,e[B.cape]+=(.12-.22*r)*n,e[B.bS]+=.025*r*n,e[B.glow]=n}var $y={kind:`insectoid_queen`,defaultTint:Z.inAcid,height:2.8,rig:Uy,parts:Yy,gait:`hex`,hunch:0,stance:0,loco:{walkHz:.6,runHz:.85,stride:.22,runStride:.3,knee:.22,runKnee:.28,bob:.04,armSwing:0,lean:.05},carry:[0,-.15,-.3,0,0,0],drop:[0,-.15,-.3,0,0,0],gripL:null,gripR:null,muzzle:{bone:`weapon`,p:[0,.3,1.6]},attackDur:1.25,attack:Zy,reload:Qy,idleExtra:Xy,deathRoll:Math.PI/2,deathDepth:.85},eb=e=>Af(`stoneback`,e);function tb(e){return(t,n,r)=>{let i=Q(t,n,r,.07,e),a=Ud(Z.stoneDark,Z.stoneLight,i);return Math.abs(Q(t,n,r,.12,e+3)-.5)<.018&&(a=U(Z.stoneDark,.75)),a}}function nb(e,t,n=0){return(r,i,a)=>t(r,i,a)&&Q(r,i,a,.03,n+21)>.22?Ud(Z.chalk,Z.stoneLight,Q(r,i,a,.05,n)*.5):typeof e==`number`?e:e(r,i,a)}function rb(e=.1){return(t,n,r)=>((t+r)%e+e)%e<.02&&Q(t,n,r,.2,9)>.2?Z.ironLight:Q(t,n,r,.06,13)>.62?Z.rust:Z.iron}var ib={hips:[0,1,0],torso:[0,.11,0],head:[0,.53,.1],shoulder:[.33,.46,0],upperLen:.36,handLen:.36,hip:[.14,-.03,0],thighLen:.47},ab=-.35,ob=-.04,sb=-1.22;function cb(e){let t=[],n=jf(Z.hideGrunt,.25,0,61),r=jf(U(Z.hideGrunt,.85),.2,0,62),i=4866104,a=tb(63),o=new W;o.rbox(0,-.03,0,.21,.13,.16,2.8,i),o.tubeY(0,0,-.26,0,.23,.18,1.12,(e,t,n)=>Math.abs(e)<.02||Math.abs(n)<.02?-1:Mf(.3,.08)(e,t,n)),o.tubeY(0,0,-.01,.08,.23,.18,1,Nf(Z.leatherDark,Z.leather,.05)),o.box(-.1,-.4,.17,.1,0,.21,(t,n,r)=>n<-.32&&H(t*40|0,4,r*40|0)>.55?-1:e),t.push({bone:`hips`,part:o});let s=new W;s.rbox(0,.17,.03,.26,.23,.2,2.2,n),s.ell(0,.34,0,.32,.16,.195,n),s.ell(0,.45,-.05,.22,.11,.15,r),s.fill(-.4,-.05,-.3,.4,.4,.3,(e,t)=>t<.36,(e,t,n)=>Math.abs(t-.1)<.025||Math.abs(t-.24)<.025?rb(.09)(e,t,n):U(Z.leather,.9+.2*Q(e,t,n,.05,64)),`paint`),s.fill(-.36,.34,.05,.36,.5,.3,(e,t)=>Math.abs(e+.08)<.03&&t>.36,Z.chalk,`paint`),s.fill(-.52,.36,-.2,-.14,.64,.2,(e,t,n)=>{let r=(e+.33)/.18,i=(t-.44)/.14,a=n/.18;return r*r+i*i+a*a<=1&&t>.4&&H(e*33|0,t*33|0,n*33|0)>.04},(e,t,n)=>Math.abs(n)<.025?Z.iron:a(e,t,n)),t.push({bone:`torso`,part:s});let c=new W;c.rbox(0,.14,.02,.135,.135,.135,2.5,n),c.rbox(0,.035,.07,.145,.07,.12,3,r),c.box(-.03,.08,.13,.03,.15,.19,U(Z.hideGrunt,.9)),c.box(-.1,.1,.12,.1,.115,.18,Z.chalk,`paint`),c.box(-.09,.12,.11,-.05,.14,.17,Z.eyeRed,`paint`),c.box(.05,.12,.11,.09,.14,.17,Z.eyeRed,`paint`),c.box(-.08,.045,.16,.08,.065,.2,Z.charcoal,`paint`);for(let e of[1,-1])Ff(c,e,.075,.03,.16,.12,.024),Pf(c,e,.13,.13,0,.1,n);c.fill(-.2,.15,-.2,.2,.34,.2,(e,t,n)=>{let r=e/.165,i=(t-.15)/.17,a=(n-.02)/.165;return r*r+i*i+a*a<=1},(e,t,n)=>t<.18?Z.ironDark:rb(.08)(e,t,n)),c.box(-.022,.08,.17,.022,.2,.2,Z.ironDark),c.ell(0,.33,.02,.03,.03,.03,Z.ironLight),t.push({bone:`head`,part:c});for(let e of[`L`,`R`]){let i=new W,a=nb(n,(e,t)=>Math.abs(t+.12)<.018||Math.abs(t+.18)<.018,65);i.tubeY(0,0,-.36,.03,.09,.095,1.15,a),i.ell(0,-.15,.03,.095,.11,.09,a),t.push({bone:e===`L`?`armL`:`armR`,part:i});let o=new W;o.ell(0,-.01,0,.082,.065,.082,n),o.tubeY(0,0,-.32,0,.074,.076,1.15,n),o.tubeY(0,0,-.29,-.1,.084,.085,1.12,(e,t,n)=>Math.abs((t*100|0)%6)<2?rb(.07)(e,t,n):Z.leatherDark),If(o,.36,.074,r),t.push({bone:e===`L`?`foreL`:`foreR`,part:o})}for(let e of[`L`,`R`]){let o=new W;o.tubeY(0,0,-.47,.05,.11,.115,1.2,i),t.push({bone:e===`L`?`thighL`:`thighR`,part:o});let s=new W;s.tubeY(0,0,-.44,0,.078,.082,1.1,n),s.rbox(0,-.02,.06,.1,.1,.06,2.6,a),s.tubeY(0,0,-.4,-.14,.086,.09,1.08,Nf(Z.leatherDark,U(Z.leather,.8),.05)),Lf(s,.5,.082,.11,r),t.push({bone:e===`L`?`shinL`:`shinR`,part:s})}let l=new W;l.jitter=.03;let u=-.62,d=.22,f=-.82,p=.46,m=(e,t)=>e<u||e>d||t<f||t>p?!1:Math.min(e-u,d-e,t-f,p-t)>.05*Q(e,0,t,.09,66),h=nb(a,(e,t,n)=>{for(let t of[-.22,0,.22])if(Math.abs(e+.2-t-(n+.15)*.35)<.035&&Math.abs(n+.15)<.42)return!0;return!1},67);l.fill(u,-.5,f,d,-.4,p,(e,t,n)=>m(e,n),(e,t,n)=>Math.abs(n-.26)<.045||Math.abs(n+.58)<.045?rb(.12)(e,t,n):t>-.43?U(Z.stoneDark,.9):h(e,t,n)),l.rbox(-.2,-.38,-.15,.07,.03,.07,3,Z.leatherDark),t.push({bone:`foreL`,part:l});let g=new W;return g.jitter=.05,g.seg(0,-.55,0,0,1.12,0,.026,.024,(e,t)=>Math.abs(t)<.08?Z.leatherDark:Math.abs(t-.9)<.03?Z.chalk:Z.timber),g.ell(0,-.57,0,.034,.03,.034,Z.ironDark),g.tubeY(0,0,1.08,1.16,.036,.036,1,Z.iron),g.fill(-.03,1.12,-.13,.03,1.56,.13,(e,t,n)=>{let r=(t-1.12)/.44,i=.11*(r<.35?r/.35:(1-r)/.65)**.75;return Math.abs(n)<=i+.016},(e,t,n)=>Math.abs(n)<.02?Z.ironDark:Math.abs(n)>.06?Z.ironLight:Q(e,t,n,.05,68)>.58?Z.rust:Z.iron),t.push({bone:`weapon`,part:g}),t}var lb=[-.3,.62,-.12,.95,0,0],ub=[-.2,.6,.6,1.1,0,.1];function db(e,t){e[B.aLX]=ab+.03*Math.sin(t*2.1),e[B.aLY]=0,e[B.aLZ]=ob,e[B.fL]=sb}function fb(e,t){let n=K(G(t,0,.3)),r=Jd(G(t,.3,.42)),i=r*(1-q(G(t,.5,.85)));X(e,lb,n*(1-r)),X(e,ub,i),e[B.aLX]-=.3*i,e[B.fL]+=.25*i,e[B.tRX]+=-.12*n*(1-r)+.3*i,e[B.tRY]+=-.2*n*(1-r)+.15*i,e[B.hZ]+=.12*i,e[B.hY]-=.05*i,e[B.kL]+=.35*i,e[B.lLX]-=.35*i,e[B.lRX]+=.25*i,e[B.bS]+=.03*Y(t,.4,.43,.6)}function pb(e,t){let n=K(G(t,0,.12))*(1-J(G(t,.8,1))),r=Math.sin(t*19)*.05*n;e[B.aLZ]+=1.15*n,e[B.aLX]+=.75*n,e[B.fL]+=.95*n,e[B.tRY]+=.45*n,e[B.tRX]-=.28*n+r,e[B.nRX]-=.3*n,e[B.nRY]+=.25*n,e[B.hZ]-=.1*n,e[B.hY]-=.05*n,e[B.lRX]+=.35*n,e[B.kR]+=.3*n,e[B.kL]+=.15*n,e[B.wRX]-=.4*n,e[B.wZ]-=.1*n}var mb={kind:`orc_shield_bearer`,defaultTint:9073734,height:2.2,rig:ib,parts:e=>eb(()=>cb(e)),hunch:.28,stance:.13,loco:{walkHz:.72,runHz:1.05,stride:.36,runStride:.6,knee:.62,runKnee:1.1,bob:.05,armSwing:.3,lean:.18},carry:[-.3,.02,.2,.35,0,.08],drop:[-.5,0,0,0,0,0],gripL:null,gripR:[0,0,0],muzzle:{bone:`weapon`,p:[0,1.45,0]},attackDur:.85,attack:fb,reload:pb,idleExtra:db,deathDepth:.24},hb={hips:[0,.9,0],torso:[0,.1,0],head:[0,.47,.1],shoulder:[.27,.4,0],upperLen:.32,handLen:.32,hip:[.12,-.03,0],thighLen:.42};function gb(e){let t=[],n=jf(Z.hideGrunt,.2,0,71),r=jf(U(Z.hideGrunt,.85),.2,0,72),i=5063225,a=(t,n,r)=>Ud(U(e,.75),U(e,.95),Q(t,n,r,.05,73)),o=(e,t,n)=>Ud(Z.timberDark,Z.timber,Q(e,t,n,.06,74)),s=new W;s.rbox(0,-.03,0,.18,.12,.15,2.8,i),s.tubeY(0,0,-.01,.07,.19,.16,1,Nf(Z.leatherDark,Z.leather,.05));for(let[e,t]of[[.17,.05],[-.16,.08],[.1,-.14]])s.rbox(e,-.05,t,.05,.06,.04,3,Z.leather);s.box(-.15,-.46,.15,.15,.04,.19,(e,t,n)=>t<-.4&&H(e*40|0,5,n*40|0)>.6?-1:a(e,t,n)),t.push({bone:`hips`,part:s});let c=new W;c.rbox(0,.16,.02,.22,.21,.18,2.2,n),c.ell(0,.32,0,.27,.14,.17,n),c.ell(0,.42,-.05,.18,.1,.13,r),c.fill(-.3,-.05,.05,.3,.36,.3,e=>Math.abs(e)<.15,a,`paint`),c.fill(-.4,-.05,-.3,.4,.55,.3,(e,t)=>Math.abs(Math.abs(e)-(.2-(t-.2)*.2))<.03&&t>.25,Z.leatherDark,`paint`);for(let e of[1,-1])c.seg(e*.16,-.05,-.24,e*.13,.95,-.3,.028,.024,o);for(let e of[.1,.5,.88])c.seg(-.17,e,-.25-e*.06,.17,e,-.25-e*.06,.022,.022,o);let l=.55,u=-.36,d=.055;c.fill(-.295,.25500000000000006,u-d*1.6,.295,.8450000000000001,-.27199999999999996,(e,t,n)=>{let r=Math.hypot(e,t-l)-.24;return r*r+((n-u)/1.6)**2<=d*d},(e,t,n)=>{let r=Math.atan2(t-l,e);return Math.abs((r*7/Math.PI%1+1)%1-.5)<.08?Z.ironDark:Q(e,t,n,.05,75)>.6?Z.rust:Math.abs(n-u)>d*1.1?Z.ironLight:Z.iron}),c.seg(.1,.35,-.29,.2,1.12,-.33999999999999997,.02,.02,o),c.seg(.08,1.07,-.33999999999999997,.34,1.13,-.33999999999999997,.03,.012,(e,t,n)=>rb(.2)(e,t,n)),c.seg(-.1,.4,-.29,-.2,1.05,-.33999999999999997,.014,.012,Z.ironDark),c.seg(-.13,.4,-.29,-.25,1.04,-.33999999999999997,.014,.012,Z.ironDark),t.push({bone:`torso`,part:c});let f=new W;f.rbox(0,.13,.02,.125,.13,.13,2.5,n),f.rbox(0,.035,.07,.13,.065,.11,3,r),f.box(-.12,.15,.1,.12,.19,.16,U(Z.hideGrunt,.7)),f.box(-.03,.08,.13,.03,.14,.18,U(Z.hideGrunt,.9)),f.box(.05,.115,.11,.09,.135,.16,Z.eyeRed,`paint`),f.box(-.08,.045,.15,.08,.06,.19,Z.charcoal,`paint`);for(let e of[1,-1])Ff(f,e,.07,.03,.15,.1,.02),Pf(f,e,.12,.14,0,.13,n),f.box(e*.1-.015,.07,.1,e*.1+.015,.1,.16,Z.chalk,`paint`);f.fill(-.2,.17,-.2,.2,.3,.2,(e,t,n)=>{let r=e/.14,i=(t-.13)/.14,a=(n-.01)/.145;return r*r+i*i+a*a<=1},(e,t,n)=>Math.abs(e)<.015?Z.leatherDark:U(Z.leather,.9+.2*Q(e,t,n,.04,76))),f.tubeZ(-.07,.125,.13,.22,.04,.04,.9,Z.ironDark),f.ell(-.07,.125,.22,.03,.03,.012,3951178),f.seg(-.07,.16,.14,-.13,.19,-.02,.01,.01,Z.leatherDark),t.push({bone:`head`,part:f});for(let e of[`L`,`R`]){let i=new W,a=nb(n,(e,t,n)=>n>.02&&t<-.08&&t>-.22&&Math.abs(((e+.2)*40%2+2)%2-1)<.35,77);i.tubeY(0,0,-.32,.03,.074,.078,1.15,a),i.ell(0,-.13,.03,.078,.092,.074,a),t.push({bone:e===`L`?`armL`:`armR`,part:i});let o=new W;o.ell(0,-.01,0,.07,.056,.07,n),o.tubeY(0,0,-.28,0,.062,.064,1.15,n),o.tubeY(0,0,-.27,-.03,.074,.075,1.1,(e,t,n)=>(((t-e*.5)*100|0)%5+5)%5<3?rb(.06)(e,t,n):-1),If(o,.32,.066,r),t.push({bone:e===`L`?`foreL`:`foreR`,part:o})}for(let e of[`L`,`R`]){let a=new W;a.tubeY(0,0,-.42,.05,.095,.1,1.2,i),t.push({bone:e===`L`?`thighL`:`thighR`,part:a});let o=new W;o.ell(0,-.01,.01,.08,.07,.08,Z.leather),o.tubeY(0,0,-.38,0,.068,.072,1.1,n),o.tubeY(0,0,-.34,-.12,.076,.08,1.08,Nf(Z.leatherDark,U(Z.leather,.8),.05)),Lf(o,.45,.074,.1,r),t.push({bone:e===`L`?`shinL`:`shinR`,part:o})}let p=new W;return p.jitter=.05,p.seg(0,-.14,0,0,.6,0,.026,.024,(e,t)=>Math.abs(t)<.08?Z.leatherDark:Z.timber),p.ell(0,-.15,0,.034,.03,.034,Z.ironDark),p.rbox(0,.64,0,.075,.08,.16,5,(e,t,n)=>Math.abs(Math.abs(n)-.08)<.02?Z.ironLight:Math.abs(n)>.14?Z.ironDark:rb(.2)(e,t,n)),t.push({bone:`weapon`,part:p}),t}var _b=[-.22,.7,-.08,-.9,.1,.2],vb=[-.14,.18,.46,1.8,.05,.1],yb=[-.2,.42,.3,.1,0,.15],bb=[-.14,-.2,.5,1.45,0,.1];function xb(e,t){let n=K(G(t,0,.3)),r=Jd(G(t,.3,.42)),i=q(G(t,.5,.8));X(e,_b,n*(1-r)),X(e,vb,r*(1-i));let a=-.25*n*(1-r)+.4*r*(1-i);e[B.tRX]+=a,e[B.nRX]-=a*.6,e[B.hY]-=.06*r*(1-i),e[B.kL]+=.35*r*(1-i),e[B.lLX]-=.25*r*(1-i),e[B.aLX]+=-.6*n*(1-r)+.5*r*(1-i),e[B.bS]+=.03*Y(t,.4,.43,.6)}function Sb(e,t){let n=J(G(t,0,.12))*(1-J(G(t,.88,1)));e[B.hY]-=.26*n,e[B.lLX]-=.75*n,e[B.lRX]-=.55*n,e[B.kL]+=1.4*n,e[B.kR]+=1.2*n,e[B.tRX]+=.45*n,e[B.nRX]-=.1*n,e[B.aLX]-=.9*n,e[B.fL]-=.35*n,e[B.aLZ]-=.1*n;let r=G(t,.14,.86)*3,i=r-Math.floor(r),a=r>=3?0:i<.6?K(i/.6):1-Jd((i-.6)/.4);X(e,yb,n),X(e,bb,n*(1-a)),e[B.tRX]+=.08*n*(1-a),e[B.bS]+=.025*n*Y(i,.95,.97,1)}var Cb={kind:`orc_engineer`,defaultTint:8018486,height:1.95,rig:hb,parts:e=>eb(()=>gb(e)),hunch:.38,stance:.1,loco:{walkHz:.9,runHz:1.35,stride:.42,runStride:.72,knee:.7,runKnee:1.25,bob:.035,armSwing:.4,lean:.25},carry:[-.34,-.02,.12,.5,0,.12],drop:[-.44,0,0,0,0,0],gripL:null,gripR:[0,0,0],muzzle:{bone:`weapon`,p:[0,.64,0]},attackDur:.8,attack:xb,reload:Sb,deathDepth:.3},wb={hips:[0,1.16,0],torso:[0,.14,0],head:[0,.62,.16],shoulder:[.44,.54,0],upperLen:.43,handLen:.43,hip:[.19,-.04,0],thighLen:.54};function Tb(e){let t=[],n=jf(Z.hideBrute,.45,.6,81),r=jf(U(Z.hideBrute,.85),.4,.4,82),i=tb(83),a=4207658,o=new W;o.rbox(0,-.03,0,.3,.16,.22,2.8,a),o.tubeY(0,0,-.36,0,.32,.25,1.1,(e,t,n)=>Math.abs(e)<.02?-1:Math.abs((t*100|0)%12)<3?rb(.1)(e,t,n):U(a,.9+.2*Q(e,t,n,.05,84))),o.tubeY(0,0,-.01,.1,.33,.25,1,Nf(Z.leatherDark,Z.leather,.06)),o.rbox(0,.045,.26,.1,.08,.04,4,i),o.box(-.13,-.48,.25,.13,0,.3,(t,n,r)=>n<-.4&&H(t*40|0,6,r*40|0)>.5?-1:e),t.push({bone:`hips`,part:o});let s=new W;s.rbox(0,.14,.06,.32,.22,.26,2.3,n),s.ell(0,.38,.03,.43,.25,.3,n),s.ell(0,.52,-.1,.34,.17,.24,r),s.fill(-.5,0,-.5,.5,.7,.5,(e,t)=>Math.abs(Math.abs(e)-(.22-(t-.3)*.35))<.04&&t>.05&&t<.58,(e,t,n)=>rb(.09)(e,t,n),`paint`);for(let e of[1,-1]){let t=.45*e,n=nb(i,e=>Math.abs(Math.abs(e-t)-.08)<.022,85+e);s.fill(t-.27,.46,-.27,t+.27,.82,.27,(e,n,r)=>{let i=Math.abs(e-t)/.25,a=Math.abs(r)/.25,o=.74-.12*i*i;return i<=1&&a<=1&&n>.5&&n<o&&H(e*33|0,7,r*33|0)>.03},(e,t,r)=>t<.56?Z.stoneDark:n(e,t,r))}t.push({bone:`torso`,part:s});let c=new W,l=nb(n,(e,t)=>Math.abs(Math.abs(e)-.07)<.018&&t>.06,86);c.rbox(0,.13,.02,.15,.14,.14,2.5,l),c.rbox(0,.03,.08,.16,.075,.13,3,(e,t,n)=>rb(.07)(e,t,n)),c.box(-.14,.16,.1,.14,.21,.18,U(Z.hideBrute,.7)),c.box(-.1,.12,.12,-.04,.145,.19,Z.eyeRed,`paint`),c.box(.04,.12,.12,.1,.145,.19,Z.eyeRed,`paint`);for(let e of[1,-1])Ff(c,e,.1,.06,.18,.14,.03),c.seg(e*.14,.14,0,e*.3,.2,-.06,.035,.012,n);c.ell(0,.29,-.04,.055,.05,.055,Z.charcoal),c.seg(0,.3,-.08,0,.12,-.26,.04,.024,Nf(Z.charcoal,Z.chalk,.07)),t.push({bone:`head`,part:c});for(let e of[`L`,`R`]){let i=new W;i.tubeY(0,0,-.43,.04,.12,.13,1.15,n),i.ell(0,-.2,.05,.14,.15,.12,n),t.push({bone:e===`L`?`armL`:`armR`,part:i});let a=new W;a.ell(0,-.01,0,.12,.09,.12,n),a.tubeY(0,0,-.37,0,.1,.1,1.25,n),a.tubeY(0,0,-.33,-.1,.12,.12,1.12,(e,t,n)=>Math.abs((t*100|0)%7)<3?rb(.08)(e,t,n):Z.leatherDark),If(a,.43,.1,r),t.push({bone:e===`L`?`foreL`:`foreR`,part:a})}for(let e of[`L`,`R`]){let o=new W;o.tubeY(0,0,-.54,.06,.15,.16,1.2,a),t.push({bone:e===`L`?`thighL`:`thighR`,part:o});let s=new W;s.rbox(0,-.02,.07,.13,.13,.08,2.6,i),s.tubeY(0,0,-.5,0,.11,.115,1.1,n),s.tubeY(0,0,-.42,-.14,.12,.12,1.1,Nf(Z.leatherDark,U(Z.leather,.8),.06)),Lf(s,.58,.11,.14,r),t.push({bone:e===`L`?`shinL`:`shinR`,part:s})}let u=new W;u.jitter=.05,u.seg(0,-.3,0,0,.72,0,.08,.085,(e,t,n)=>Math.abs((t*100|0)%30)<4?rb(.1)(e,t,n):U(Z.timberDark,.9+.25*Q(e,t,n,.05,87))),u.ell(0,-.3,0,.085,.03,.085,Z.iron);let d=nb(i,(e,t,n)=>Math.abs(e)>.22&&Math.abs(n)<.04||Math.abs(n)>.22&&Math.abs(e)<.04,88);return u.rbox(0,.92,0,.25,.26,.25,5,(e,t,n)=>Math.abs(t-.8)<.04||Math.abs(t-1.02)<.035?rb(.11)(e,t,n):d(e,t,n)),u.fill(-.2,1.1600000000000001,-.2,.2,1.24,.2,(e,t,n)=>Math.abs(e)+Math.abs(n)*.6<.24,(e,t,n)=>Math.floor(e/.06)+Math.floor(n/.06)&3?Q(e,t,n,.05,89)>.55?Z.rust:Z.iron:Z.ironLight),u.ell(0,1.25,0,.07,.04,.07,Z.ironDark),t.push({bone:`weapon`,part:u}),t}var Eb=[-.08,.1,.02,1.4,0,-.05],Db=[-.06,.02,.62,1.55,0,-.03],Ob=[-.04,.95,-.05,-.35,0,0],kb=[-.04,-.05,.62,2.15,0,0];function Ab(e,t){let n=K(G(t,0,.4)),r=Jd(G(t,.45,.56)),i=q(G(t,.7,1.1)),a=n*(1-r),o=r*(1-i);X(e,Eb,a),X(e,Db,o),e[B.tRX]+=-.15*a+.3*o,e[B.hZ]+=-.08*a+.22*o,e[B.hY]-=.06*o,e[B.lLX]-=.5*o,e[B.kL]+=.4*o,e[B.lRX]+=.3*o,e[B.nRX]-=.1*a,e[B.bS]+=.04*Y(t,.54,.57,.75)}function jb(e,t){let n=K(G(t,0,.42)),r=Jd(G(t,.44,.56)),i=J(G(t,.78,1));X(e,Ob,n*(1-r)),X(e,kb,r*(1-i));let a=-.3*n*(1-r)+.55*r*(1-i);e[B.tRX]+=a,e[B.nRX]-=a*.5,e[B.hY]+=.05*n*(1-r)-.18*r*(1-i),e[B.kL]+=.6*r*(1-i),e[B.kR]+=.6*r*(1-i),e[B.lLX]-=.45*r*(1-i),e[B.lRX]-=.3*r*(1-i),e[B.lLZ]+=.1*r,e[B.lRZ]-=.1*r;let o=Y(t,.55,.58,.8);e[B.bS]-=.05*o,e[B.tRZ]+=.03*Math.sin(t*90)*o}var Mb={kind:`orc_siege_breaker`,defaultTint:9073734,height:2.7,rig:wb,parts:e=>eb(()=>Tb(e)),hunch:.3,stance:.15,loco:{walkHz:.62,runHz:.95,stride:.38,runStride:.6,knee:.65,runKnee:1.15,bob:.07,armSwing:.3,lean:.22},carry:[-.08,.05,.26,1.5,0,-.05],drop:[-.6,-.15,.1,0,0,0],gripR:[0,0,0],gripL:[0,.24,0],poleL:[.9,-.5,-.3],poleR:[-.9,-.5,-.3],muzzle:{bone:`weapon`,p:[0,1.2,0]},attackDur:1.1,attack:Ab,reload:jb,deathDepth:.32};function Nb(e,t,n,r,i){let a=e/r,o=t/r,s=n/r,c=Math.floor(a),l=Math.floor(o),u=Math.floor(s),d=1e9,f=1e9,p=0,m=0,h=0,g=0,_=0,v=0;for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++){let r=c+e,y=l+t,b=u+n,x=r+H(r+i*131,y,b),S=y+H(r,y+i*71,b+17),C=b+H(r+5,y,b+i*53),w=(x-a)**2+(S-o)**2+(C-s)**2;w<d?(f=d,g=p,_=m,v=h,d=w,p=x,m=S,h=C):w<f&&(f=w,g=x,_=S,v=C)}return(f-d)/(2*Math.hypot(g-p,_-m,v-h))*r}var Pb=.45;function Fb(e,t,n,r,i){if(i<=0||Q(e,t,n,.3,r+3)<.66-.5*i)return 0;let a=Nb(e,t,n,Pb,r+13),o=.4*V+.004+.004*i;return a<o?2:+(V<=.03&&a<o+.014)}function Ib(e){return e>.7?Z.dmMagma:Z.dmEmber}function Lb(e,t=0,n=0,r=Z.dmHide){let i=Ud(r,Z.dmHideDark,.75),a=Ud(r,Z.dmHideLight,.7);return(o,s,c)=>{let l=Fb(o,s,c,e,t);if(l===2)return Ib(t);if(l===1)return Z.dmChar;let u=Q(o,s,c,.1,e),d=u>.6?Ud(r,i,Math.min(1,(u-.6)*3)):u<.32?Ud(r,a,Math.min(1,(.32-u)*3)):r;if(n>0){let t=Q(o,s,c,.16,e+7),r=1-n*.55;t>r&&(d=Ud(d,Z.corrupt,Math.min(1,(t-r)*9)))}return d}}function Rb(e,t=0,n=0){return(r,i,a)=>{if(Fb(r,i,a,e,t)===2)return Ib(t);let o=Q(r,i,a,.07,e),s=Ud(Z.dmChar,Z.dmCharLight,Math.max(0,o-.4)*1.6);if(n>0){let t=Q(r,i,a,.14,e+7),o=1-n*.55;t>o&&(s=Ud(s,Z.corrupt,Math.min(.9,(t-o)*8)))}return s}}function zb(e,t,n,r=.06,i=0){return(a,o,s)=>o<n+(Q(a,o,s,.05,i+29)-.5)*2*r?t(a,o,s):e(a,o,s)}function Bb(e,t=0,n=0){return(r,i,a)=>{if(Fb(r,i,a,e,t)===2)return Ib(t);let o=Q(r,i,a,.06,e),s=o>.72?Ud(Z.dmIron,Z.dmIronEdge,.6):o<.22?U(Z.dmIron,.8):Z.dmIron;if(n>0){let t=Q(r,i,a,.15,e+7),o=1-n*.55;t>o&&(s=Ud(s,Z.corrupt,Math.min(.9,(t-o)*8)))}return s}}function Vb(e,t){let n=e.length-1,r=Math.min(n-1e-6,Math.max(0,t*n)),i=Math.floor(r),a=r-i,o=e[Math.max(0,i-1)],s=e[i],c=e[i+1],l=e[Math.min(n,i+2)],u=[0,0,0];for(let e=0;e<3;e++){let t=o[e],n=s[e],r=c[e],i=l[e];u[e]=.5*(2*n+(-t+r)*a+(2*t-5*n+4*r-i)*a*a+(-t+3*n-3*r+i)*a*a*a)}return u}function Hb(e,t,n,r,i=.3){let a=0;for(let e=1;e<t.length;e++)a+=Math.hypot(t[e][0]-t[e-1][0],t[e][1]-t[e-1][1],t[e][2]-t[e-1][2]);let o=Math.max(6,Math.ceil(a/.035)),s=Vb(t,0);for(let a=1;a<=o;a++){let c=(a-1)/o,l=a/o,u=Vb(t,l),d=Math.max(0,(l-(1-i))/i),f=Ud(a%3==0?U(Z.dmHorn,.78):Z.dmHorn,Z.dmHornTip,d*d);e.seg(s[0],s[1],s[2],u[0],u[1],u[2],n+(r-n)*c,n+(r-n)*l,f),s=u}}function Ub(e,t,n,r,i,a,o=.03){for(let s of[1,-1])e.box(s*t-i,n-a,r-o,s*t+i,n+a,r+o*.4,Z.dmEmber),e.box(s*t-i*.45,n-a*.45,r-o,s*t+i*.45,n+a*.45,r+o*.4+V*.5,Z.dmEmberHot)}function Wb(e,t,n,r){let i=[(t[0]+n[0])/2,(t[1]+n[1])/2,(t[2]+n[2])/2];e.seg(t[0],t[1],t[2],i[0],i[1],i[2],r,r*.75,Z.dmChar),e.seg(i[0],i[1],i[2],n[0],n[1],n[2],r*.75,r*.35,Ud(Z.dmChar,Z.dmHornTip,.65))}function Gb(e,t,n,r,i,a=3,o=.5){let s=-t;e.rbox(0,s,.01,n*.95,n*1.05,n*1.1,2.6,r);for(let t=0;t<a;t++){let c=a===1?0:(t/(a-1)-.5)*n*1.3,l=c*(1+o*.8),u=[l,s-n*.9-i*.2,n*.35+i*.15*(1-o)];e.seg(c,s-n*.5,n*.25,u[0],u[1],u[2],n*.42,n*.36,r),Wb(e,u,[l*1.1,u[1]-i*(.45+.35*o),u[2]+i*(.75-.35*o)],n*.34)}Wb(e,[0,s-n*.2,n*.8],[0,s-n*.6-i*.2,n*.8+i*.6],n*.3)}function Kb(e,t,n,r,i,a){e.ell(0,-t*.3,-.01,n*1.12,t*.45,n*1.18,i),e.seg(0,0,-.01,0,-t,a,n,r,i)}function qb(e,t,n,r,i,a,o){let s=[0,-t*.5,-t*.22],c=[0,-t+n*.62,.035];e.ell(0,0,r,n*1.12,n*1.08,n*1.12,i),e.seg(0,0,r,s[0],s[1],s[2],n,n*.72,i),e.ell(s[0],s[1],s[2],n*.8,n*.85,n*.85,a),e.seg(s[0],s[1],s[2],c[0],c[1],c[2],n*.7,n*.58,a),e.ell(c[0],c[1],c[2]+n*.2,n*.8,n*.62,n*.9,a),Wb(e,[0,s[1]+n*.2,s[2]-n*.6],[0,s[1]+n*.9,s[2]-n*1.9],n*.3);for(let r=-1;r<=1;r++){let i=c[2]+o*(r===0?1:.82),s=r*n*.95;e.seg(r*n*.4,c[1],c[2]+n*.3,s,-t+n*.3,i,n*.4,n*.3,a),Wb(e,[s,-t+n*.32,i],[s*1.05,-t+V*.5,i+n*.9],n*.26)}}function Jb(e,t,n,r,i,a=0){let o=[n[0]-t[0],n[1]-t[1],n[2]-t[2]],s=[r[0]-t[0],r[1]-t[1],r[2]-t[2]],c=[o[1]*s[2]-o[2]*s[1],o[2]*s[0]-o[0]*s[2],o[0]*s[1]-o[1]*s[0]],l=Math.hypot(c[0],c[1],c[2])||1e-9,u=Math.max(a,V*1.01)/2,d=o[0]*o[0]+o[1]*o[1]+o[2]*o[2],f=o[0]*s[0]+o[1]*s[1]+o[2]*s[2],p=s[0]*s[0]+s[1]*s[1]+s[2]*s[2],m=d*p-f*f||1e-9;e.fill(Math.min(t[0],n[0],r[0])-u,Math.min(t[1],n[1],r[1])-u,Math.min(t[2],n[2],r[2])-u,Math.max(t[0],n[0],r[0])+u,Math.max(t[1],n[1],r[1])+u,Math.max(t[2],n[2],r[2])+u,(e,n,r)=>{let i=[e-t[0],n-t[1],r-t[2]];if(Math.abs(i[0]*c[0]+i[1]*c[1]+i[2]*c[2])/l>u)return!1;let a=i[0]*o[0]+i[1]*o[1]+i[2]*o[2],h=i[0]*s[0]+i[1]*s[1]+i[2]*s[2],g=(p*a-f*h)/m,_=(d*h-f*a)/m;return g>=-.02&&_>=-.02&&g+_<=1.02},i)}function Yb(e,t,n,r,i,a,o=[0,1,-.6]){let s=Math.hypot(o[0],o[1],o[2]);for(let c=0;c<r;c++){let l=r===1?.5:c/(r-1),u=t[0]+(n[0]-t[0])*l,d=t[1]+(n[1]-t[1])*l,f=t[2]+(n[2]-t[2])*l,p=i*(.65+.35*Math.sin(l*Math.PI));Wb(e,[u,d,f],[u+o[0]/s*p,d+o[1]/s*p,f+o[2]/s*p],a)}}var Xb={hips:[0,.56,0],torso:[0,.05,0],head:[0,.3,.06],shoulder:[.14,.24,0],upperLen:.2,handLen:.21,hip:[.075,-.02,0],thighLen:.25,cape:[0,-.02,-.08]},Zb=Xb.hips[1]+Xb.hip[1]-Xb.thighLen,Qb=.035;function $b(e){let t=[],n=Lb(501,.25,.12),r=Lb(502,.15,.1,Z.dmHideDark),i=Rb(503,.2),a=Lb(507,0,.1),o=Rb(508),s=new W;s.rbox(0,-.01,0,.1,.07,.08,2.6,r),s.tubeY(0,0,-.03,.02,.105,.085,1,Z.dmCharLight),s.fill(-.06,-.19,.05,.06,0,.1,(e,t)=>t>-.15+Math.abs(Math.sin(e*70))*.04&&Math.abs(e)<.06-(t+.19)*-.05,e),s.box(-.06,-.14,-.1,.06,0,-.06,(t,n)=>n<-.1&&Math.abs(Math.sin(t*60))>.6?-1:U(e,.8)),t.push({bone:`hips`,part:s});let c=new W;c.ell(0,.03,.01,.09,.08,.075,n),c.ell(0,.15,0,.12,.12,.085,n),c.ell(0,.24,-.01,.13,.06,.075,r),c.fill(-.12,.08,.02,.12,.22,.1,(e,t)=>Math.abs((t*100|0)%4)===0,U(Z.dmHide,.7),`paint`);for(let e=0;e<5;e++)c.ell(0,.26-e*.055,-.08,.02,.02,.02,i);let l=Rb(504),u=Lb(505,0,.05,Z.dmHideDark);for(let e of[1,-1]){let t=[e*.05,.22,-.08],n=[e*.16,.34,-.15],r=[e*.34,.33,-.2],i=[e*.3,.16,-.19],a=[e*.17,.08,-.14];c.seg(t[0],t[1],t[2],n[0],n[1],n[2],.022,.018,l),c.seg(n[0],n[1],n[2],r[0],r[1],r[2],.016,.01,l),c.seg(n[0],n[1],n[2],i[0],i[1],i[2],.014,.009,l),c.seg(n[0],n[1],n[2],n[0]+e*.02,n[1]+.06,n[2]-.01,.014,.006,Z.dmHornTip),Jb(c,n,r,i,u),Jb(c,n,i,a,u),Jb(c,t,n,a,u)}t.push({bone:`torso`,part:c});let d=new W;d.ell(0,.1,.01,.1,.095,.1,n),d.rbox(0,.03,.07,.075,.05,.06,2.4,n),d.seg(0,0,.1,0,-.04,.12,.03,.012,r),d.box(-.09,.12,.07,.09,.15,.115,Rb(506)),d.seg(0,.09,.1,0,.06,.14,.02,.012,r),Ub(d,.045,.1,.1,.03,.02,.025),d.box(-.06,.02,.1,.06,.035,.14,Z.dmChar,`paint`);for(let e of[1,-1])d.seg(e*.035,.035,.12,e*.03,.005,.125,.012,.005,Z.dmHornTip),d.seg(e*.085,.11,0,e*.2,.16,-.05,.03,.007,n),Hb(d,[[e*.05,.16,.05],[e*.075,.23,.01],[e*.1,.27,-.06]],.024,.008,.4);t.push({bone:`head`,part:d});for(let e of[`L`,`R`]){let n=new W;n.ell(0,0,0,.045,.045,.045,a),n.tubeY(0,0,-.2,0,.034,.036,1.2,a),t.push({bone:e===`L`?`armL`:`armR`,part:n});let r=new W;r.ell(0,0,0,.035,.035,.035,a),r.tubeY(0,0,-.2,0,.028,.03,1.2,zb(a,o,-.1,.04,e===`L`?1:2)),Gb(r,Xb.handLen,.032,o,.08,3,.75),t.push({bone:e===`L`?`foreL`:`foreR`,part:r})}for(let e of[`L`,`R`]){let n=new W;Kb(n,Xb.thighLen,.05,.034,a,Qb),t.push({bone:e===`L`?`thighL`:`thighR`,part:n});let r=new W;qb(r,Zb,.032,Qb,zb(a,o,-.1,.03,3),o,.07),t.push({bone:e===`L`?`shinL`:`shinR`,part:r})}let f=new W,p=[[0,0,0],[0,-.1,-.08],[0,-.2,-.22],[0,-.2,-.38],[0,-.1,-.5],[0,.04,-.54]];for(let e=1;e<p.length;e++){let t=p[e-1],i=p[e];f.seg(t[0],t[1],t[2],i[0],i[1],i[2],Math.max(.023,.032-e*.002),Math.max(.023,.03-e*.002),e>3?r:n)}return f.fill(-.06,.02,-.6,.06,.14,-.5,(e,t,n)=>{let r=(t-.02)/.12,i=.055*Math.sin(Math.min(1,r*1.6)*Math.PI*.5)*(1-Math.max(0,r-.6)/.4);return Math.abs(e)<=i&&Math.abs(n+.545+(t-.02)*.15)<.018},i),t.push({bone:`cape`,part:f}),t}function ex(e,t){let n=Y(t,0,.08,.16)+.7*Y(t,.3,.36,.45),r=Y(t,.08,.2,.34),i=K(G(t,.02,.16))*(1-Jd(G(t,.17,.26))),a=Jd(G(t,.17,.26))*(1-q(G(t,.32,.45)));e[B.hY]+=-.08*n+.16*r,e[B.hZ]+=.28*r+.1*a,e[B.tRX]+=.2*n-.3*i+.4*a,e[B.nRX]-=.15*n-.1*i+.3*a,e[B.kL]+=1*n+.9*r,e[B.kR]+=1*n+.7*r,e[B.lLX]-=.55*n+.8*r,e[B.lRX]-=.55*n+.4*r;let o=-2.5*i-.6*a;e[B.aLX]+=o,e[B.aRX]+=o,e[B.aLZ]+=.45*i-.1*a,e[B.aRZ]-=.45*i-.1*a,e[B.fL]+=-.7*i+.1*a,e[B.fR]+=-.7*i+.1*a,e[B.cape]+=.5*r-.2*n}var tx={kind:`demon_imp`,defaultTint:Z.dmCloth,height:1.2,rig:Xb,parts:$b,hunch:.38,stance:.12,loco:{walkHz:1.3,runHz:2.1,stride:.5,runStride:.85,knee:.9,runKnee:1.5,bob:.03,armSwing:.6,lean:.35},carry:[-.18,-.2,.12,0,0,0],drop:[-.18,-.2,.12,0,0,0],gripL:null,gripR:null,muzzle:{bone:`weapon`,p:[0,0,0]},attackDur:.45,attack:ex,deathDepth:.1},nx={hips:[0,1.05,0],torso:[0,.1,0],head:[0,.5,.14],shoulder:[.28,.42,.02],upperLen:.4,handLen:.42,hip:[.13,-.03,0],thighLen:.45},rx=nx.hips[1]+nx.hip[1]-nx.thighLen,ix=.06;function ax(e){let t=[],n=Lb(601,.3,.12),r=Lb(602,.2,.1,Z.dmHideDark),i=Rb(604,.35,.1),a=Lb(607,0,.1),o=Rb(608),s=new W;s.rbox(0,-.02,0,.19,.12,.15,2.6,r),s.tubeY(0,0,-.03,.05,.2,.16,1,(e,t,n)=>Math.abs(Math.atan2(e,n)%.9)<.12?Z.dmIronEdge:Z.dmIron),s.box(-.1,-.4,.13,.1,0,.18,(t,n)=>n<-.3&&Math.sin(t*55)>.2?-1:n<-.34?U(e,.8):e),s.box(-.11,-.34,-.18,.11,0,-.13,(t,n)=>n<-.26&&Math.sin(t*50+1)>.1?-1:U(e,.8)),t.push({bone:`hips`,part:s});let c=new W;c.rbox(0,.05,.02,.17,.13,.14,2.4,n),c.ell(0,.24,.05,.25,.2,.19,n),c.ell(0,.38,-.07,.24,.15,.18,r),c.fill(-.3,.1,.1,.3,.4,.3,(e,t)=>Math.abs(e)<.012||Math.abs(t-.19)<.012,U(Z.dmHide,.72),`paint`);for(let e of[1,-1])c.fill(e*.28-.14,.32,-.16,e*.28+.14,.56,.16,(t,n,r)=>{let i=(t-e*.27)/.13,a=(n-.38)/.12,o=r/.14;return i*i+a*a+o*o<=1&&n>.37},i);Yb(c,[0,.52,-.15],[0,.06,-.14],7,.12,.024,[0,.55,-1]),t.push({bone:`torso`,part:c});let l=new W;l.ell(0,.1,-.01,.11,.105,.12,n),l.rbox(0,.03,.11,.085,.06,.09,2.4,n),l.rbox(0,-.02,.1,.08,.035,.08,2.4,r),l.box(-.1,.12,.08,.1,.16,.14,Rb(605)),Ub(l,.05,.1,.12,.024,.014,.02),l.box(-.07,.005,.17,.07,.02,.21,Z.dmChar,`paint`),l.ell(0,.06,.2,.025,.02,.012,Z.dmChar,`paint`);for(let e of[1,-1])l.seg(e*.05,.02,.18,e*.05,-.04,.19,.014,.006,Z.dmHornTip),l.seg(e*.03,.03,.19,e*.03,.08,.19,.012,.005,Z.dmHornTip),Hb(l,[[e*.07,.17,.02],[e*.15,.25,-.09],[e*.25,.2,-.17],[e*.3,.05,-.12],[e*.28,-.05,.02],[e*.24,-.02,.15],[e*.21,.06,.22]],.062,.014,.28);t.push({bone:`head`,part:l});for(let e of[`L`,`R`]){let n=new W;n.ell(0,0,0,.085,.08,.085,a),n.tubeY(0,0,-.4,0,.065,.07,1.25,a),n.ell(0,-.16,.02,.075,.1,.07,a),t.push({bone:e===`L`?`armL`:`armR`,part:n});let r=new W;r.ell(0,0,0,.065,.06,.065,a),r.tubeY(0,0,-.4,0,.052,.056,1.2,zb(a,o,-.16,.06,e===`L`?4:5)),r.seg(0,-.1,-.05,0,-.14,-.13,.02,.006,Z.dmChar),Gb(r,nx.handLen,.058,o,.17,3,.45),t.push({bone:e===`L`?`foreL`:`foreR`,part:r})}for(let e of[`L`,`R`]){let r=new W;Kb(r,nx.thighLen,.1,.066,n,ix),t.push({bone:e===`L`?`thighL`:`thighR`,part:r});let i=new W;qb(i,rx,.062,ix,zb(a,o,-.18,.05,6),o,.12),t.push({bone:e===`L`?`shinL`:`shinR`,part:i})}let u=new W;return u.tubeY(0,0,-.34,-.26,.068,.068,1,Bb(606)),u.ell(.07,-.33,0,.02,.03,.03,Z.dmIronEdge),t.push({bone:`foreL`,part:u}),t}function ox(e,t){let n=K(G(t,0,.18)),r=Jd(G(t,.17,.28)),i=q(G(t,.32,.5)),a=n*(1-r),o=r*(1-i);e[B.aLX]+=-1.9*a-1.35*o,e[B.aRX]+=-1.9*a-1.35*o,e[B.aLZ]+=.75*a-.35*o,e[B.aRZ]-=.75*a-.35*o,e[B.aLY]-=.3*o,e[B.aRY]+=.3*o,e[B.fL]+=-.6*a+.2*o,e[B.fR]+=-.6*a+.2*o,e[B.tRX]+=-.2*a+.3*o,e[B.nRX]-=-.15*a+.2*o,e[B.hZ]+=-.05*a+.2*o,e[B.hY]+=.02*a-.07*o,e[B.kL]+=.45*o,e[B.kR]+=.3*o,e[B.lLX]-=.4*o,e[B.lRX]+=.2*o,e[B.bS]+=.03*Y(t,.26,.29,.4)}var sx={kind:`demon_fiend`,defaultTint:Z.dmCloth,height:1.95,rig:nx,parts:ax,hunch:.45,stance:.12,loco:{walkHz:.9,runHz:1.45,stride:.45,runStride:.8,knee:.8,runKnee:1.4,bob:.05,armSwing:.5,lean:.3},carry:[-.32,-.35,.2,0,0,0],drop:[-.32,-.35,.2,0,0,0],gripL:null,gripR:null,muzzle:{bone:`weapon`,p:[0,0,0]},attackDur:.5,attack:ox,deathDepth:.22},cx=.32,lx={hips:[0,1.32,0],torso:[0,.16,0],head:[0,.7,.22],shoulder:[.55,.6,.02],upperLen:.52,handLen:.52,hip:[.24,-.05,0],thighLen:.6,extra:[0,cx,0]},ux=lx.hips[1]+lx.hip[1]-lx.thighLen,dx=.08,fx=2.3;function px(e,t,n,r){let i=r*2.2,a=Math.max(r*.6,V*.8),o=Bb(710);for(let s=t,c=0;s<n-i*.3;s+=i,c++){let t=Math.min(n,s+i*.5);c%2?e.ell(0,t,0,a,i*.62,r*1.2,o):e.ell(0,t,0,r*1.2,i*.62,a,c%4==0?Z.dmIronEdge:o)}}function mx(e){let t=[],n=Lb(701,.75,.3),r=Lb(702,.55,.25,Z.dmHideDark),i=Rb(703,.45),a=Rb(704,.6,.15),o=new W;o.rbox(0,-.04,0,.34,.18,.26,2.6,r),o.tubeY(0,0,-.04,.08,.36,.28,1,Bb(705)),o.tubeZ(0,.02,.27,.32,.07,.07,1,Z.dmIronEdge),o.tubeZ(0,.02,.26,.33,.04,.04,1,0,`carve`),o.box(-.16,-.58,.24,.16,-.02,.3,(t,n)=>n<-.46&&Math.sin(t*40)>.1?-1:n<-.52?U(e,.75):e),o.box(-.18,-.5,-.3,.18,-.02,-.24,(t,n)=>n<-.4&&Math.sin(t*36+1)>.2?-1:U(e,.8)),t.push({bone:`hips`,part:o});let s=new W;s.rbox(0,.12,.08,.38,.26,.3,2.3,n),s.ell(0,.42,.04,.54,.3,.36,n),s.ell(0,.6,-.14,.42,.22,.3,r),s.fill(-.4,.2,.2,.4,.6,.5,(e,t)=>Math.abs(e)<.014||Math.abs(t-.34)<.014,U(Z.dmHideDark,.8),`paint`);for(let[e,t,n,r]of[[0,.72,-.18,.22],[.2,.66,-.26,.16],[-.2,.66,-.26,.16],[0,.56,-.36,.17],[.46,.66,0,.2],[-.46,.66,0,.2]])s.fill(e-r,t-r*.2,n-r,e+r,t+r*.8,n+r,(i,a,o)=>{let s=(i-e)/r,c=(a-t)/(r*.7),l=(o-n)/r;return s*s+c*c+l*l<=1&&a>t-r*.1},a);for(let e of[1,-1])Wb(s,[e*.5,.78,0],[e*.58,.92,-.06],.04);t.push({bone:`torso`,part:s});let c=new W;c.ell(0,.12,-.02,.17,.15,.16,n),c.rbox(0,.02,.1,.17,.09,.14,2.6,r),c.box(-.16,.14,.08,.16,.2,.17,a),Ub(c,.07,.12,.14,.03,.015,.025),c.box(-.12,.03,.2,.12,.05,.25,Z.dmChar,`paint`);for(let e of[1,-1])c.seg(e*.1,.02,.2,e*.12,.13,.24,.028,.01,Z.dmHornTip),Hb(c,[[e*.12,.2,.04],[e*.26,.27,-.04],[e*.38,.37,-.17],[e*.43,.52,-.3]],.085,.02,.3);t.push({bone:`head`,part:c});for(let e of[`L`,`R`]){let r=new W;r.ell(0,-.02,0,.17,.16,.17,n),r.tubeY(0,0,-.52,0,.13,.14,1.2,n),r.ell(0,-.22,.04,.15,.18,.14,n),t.push({bone:e===`L`?`armL`:`armR`,part:r});let a=new W;if(a.ell(0,-.01,0,.13,.11,.13,n),a.tubeY(0,0,-.48,0,.12,.12,1.2,zb(n,i,-.26,.07,e===`L`?7:8)),Gb(a,lx.handLen,.12,i,.13,4,.1),e===`R`){let e=Bb(711);for(let t=0;t<40;t++){let n=t/39,r=n*3.2*Math.PI*2,i=-.08+-.36*n,o=.13+.035*n,s=t%2==0;a.ell(Math.cos(r)*o,i,Math.sin(r)*o,s?.035:.02,.022,s?.035:.02,t%6==0?Z.dmIronEdge:e)}}t.push({bone:e===`L`?`foreL`:`foreR`,part:a})}for(let e of[`L`,`R`]){let r=new W;Kb(r,lx.thighLen,.17,.11,n,dx),t.push({bone:e===`L`?`thighL`:`thighR`,part:r});let a=new W;qb(a,ux,.105,dx,zb(n,i,-.2,.06,9),i,.17),t.push({bone:e===`L`?`shinL`:`shinR`,part:a})}let l=new W;l.jitter=.04,px(l,.03,.36,.035);let u=Bb(712,.3);l.fill(-.03,-.09,-.09,.03,.09,.09,(e,t,n)=>{let r=Math.hypot(t,n);return r>.04&&r<.075},Z.dmIronEdge),Hb(l,[[0,-.06,0],[0,-.3,0],[0,-.5,.06],[0,-.52,.22],[0,-.38,.34],[0,-.2,.33]],.062,.03,.2),l.fill(-.1,-.62,-.1,.1,-.08,.42,()=>!0,(e,t,n)=>n>0&&Math.hypot(t+.35,n-.17)<.15?Z.dmEmber:u(e,t,n),`paint`),l.seg(0,-.22,.33,0,-.06,.3,.03,.008,Z.dmIronEdge),l.seg(0,-.3,.34,0,-.26,.24,.02,.006,Z.dmIronEdge),t.push({bone:`weapon`,part:l});let d=new W;return d.jitter=.03,px(d,0,fx,.035),t.push({bone:`extra`,part:d}),t}var hx=[-lx.shoulder[0],lx.shoulder[1],lx.shoulder[2]],gx=(lx.upperLen+lx.handLen)*.999,_x=[-.35,1.47,-.1,2.36,0,.1],vx=[-.22,-.12,.98,-.93,0,0],yx=[-.72,1.12,-.42,2.8,0,.35],bx=-1.72,xx=.15,Sx=[Math.sin(xx),-Math.cos(xx)*Math.cos(bx),-Math.cos(xx)*Math.sin(bx)],Cx=3.3,wx=[0,0,0,bx,0,xx];function Tx(e){let t=[-Math.sin(xx),Math.cos(xx)*Math.cos(bx),Math.cos(xx)*Math.sin(bx)],n=cx;for(let r=0;r<3;r++)wx[r]=hx[r]+Sx[r]*e-t[r]*n;return wx}function Ex(e,t){let n=K(G(t,0,.32)),r=Jd(G(t,.32,.42)),i=q(G(t,.58,.8)),a=n*(1-r),o=r*(1-i);X(e,_x,a),X(e,vx,o),e[B.aLX]+=-2.7*a-.9*o,e[B.aLZ]+=-.1*a,e[B.fL]+=-.3*a+.15*o,e[B.tRX]+=-.3*a+.5*o,e[B.nRX]-=-.15*a+.3*o,e[B.hY]+=.05*a-.12*o,e[B.hZ]+=.1*o,e[B.kL]+=.6*o,e[B.kR]+=.55*o,e[B.lLX]-=.45*o,e[B.lRX]-=.25*o,e[B.lLZ]+=.08*o,e[B.lRZ]-=.08*o;let s=Y(t,.41,.44,.62);e[B.bS]-=.05*s,e[B.tRZ]+=.03*Math.sin(t*90)*s}function Dx(e,t){let n=K(G(t,0,.26)),r=J(G(t,.24,.3)),i=K(G(t,.28,.42)),a=Jd(G(t,.55,.72)),o=J(G(t,.74,1)),s=gx*.9+(Cx-gx*.9)*i*(1-a);X(e,yx,n*(1-r)),X(e,Tx(s),r*(1-o)),e[B.xS]=r>.5&&o<.5?Math.max(0,s-gx)/fx:0;let c=n*(1-r),l=i*(1-a),u=a*(1-o);e[B.tRY]+=-.45*c+.05*l-.15*u,e[B.tRX]+=-.2*c+.1*l-.35*u,e[B.nRX]-=-.1*c+.15*l-.25*u,e[B.hY]+=.03*c-.03*l-.06*u,e[B.hZ]+=-.06*c+.14*l-.14*u,e[B.hRY]+=-.15*c,e[B.lLX]-=.4*l+.45*u,e[B.kL]+=.25*l+.3*u,e[B.lRX]+=.25*l+.2*u,e[B.kR]+=.15*l+.3*u,e[B.aLX]+=.5*l-1.1*u*(1-a*.4),e[B.aLZ]+=.3*l,e[B.fL]+=-.8*u,e[B.bS]-=.04*Y(t,.4,.43,.55)}var Ox={kind:`demon_behemoth`,defaultTint:Z.dmCloth,height:2.9,rig:lx,parts:mx,hunch:.3,stance:.15,loco:{walkHz:.55,runHz:.85,stride:.36,runStride:.58,knee:.6,runKnee:1.1,bob:.05,armSwing:.25,lean:.2},carry:[-.64,-.72,.2,-.3,0,.05],drop:[-.75,-.3,.1,0,0,0],gripL:null,gripR:[0,cx,0],poleR:[-.9,-.4,-.4],muzzle:{bone:`weapon`,p:[0,-.42,.18]},attackDur:.8,attack:Ex,reload:Dx,extraScale:0,deathExtraScale:0,deathDepth:.36},kx={hips:[0,1,0],torso:[0,.1,0],head:[0,.46,.06],shoulder:[.2,.37,0],upperLen:.32,handLen:.3,hip:[.1,-.03,0],thighLen:.44,cape:[0,-.02,-.1]},Ax=kx.hips[1]+kx.hip[1]-kx.thighLen,jx=.045;function Mx(e,t){let n=Rb(e);return(e,r,i)=>t(e,r,i)?Z.dmEmber:n(e,r,i)}function Nx(e,t){let n=-t-.05,r=.36;e.tubeY(0,.01,-t-.05,-t+.07,.022,.022,1,Z.dmCloth),e.ell(0,-t+.08,.01,.026,.02,.026,Z.dmGold),e.box(-.02,n-.02,-.05,.02,n+.005,.07,Z.dmGold);let i=Bb(820);e.fill(-.021,n-r-.02,-.06,.021,n-.02,.2,(e,t,i)=>{let a=(n-.02-t)/r;if(a<0||a>1)return!1;let o=.14*a*a,s=a<.75?.032-.008*a:.026*(1-(a-.75)/.25);return Math.abs(i-o-.005)<=s+.001},(e,t,a)=>{let o=(n-.02-t)/r,s=.14*o*o;return a-s>.012?Z.dmIronEdge:Math.abs(a-s)<.012&&o>.1&&o<.7?Z.dmEmber:i(e,t,a)})}function Px(e){let t=[],n=Lb(801,0,.1),r=Lb(802,.1,.1,Z.dmHideDark),i=Rb(803),a=(t,n,r)=>Q(t,n,r,.08,807)>.62?U(e,.8):e,o=new W;o.rbox(0,-.03,0,.14,.1,.11,2.6,Mx(804,e=>Math.abs(Math.abs(e)-.07)<.01)),o.tubeY(0,0,-.02,.06,.145,.115,1,(t,n)=>Math.abs(n-.02)<.012?U(e,1.25):e),o.box(.06,-.34,.1,.12,0,.13,(t,n)=>n<-.28&&Math.sin(t*90)>0?-1:U(e,.85)),o.box(.03,-.3,.09,.07,-.02,.12,(t,n)=>n<-.25&&Math.sin(t*90+1)>0?-1:e);for(let e of[1,-1])o.seg(e*.13,-.02,-.04,e*.15,-.26,-.1,.03,.02,i);t.push({bone:`hips`,part:o});let s=new W,c=Mx(805,(e,t)=>Math.abs(Math.abs(e)-.06)<.01&&t<.3||Math.abs(t-.02-Math.abs(e)*.5)<.01);s.rbox(0,.04,.01,.12,.1,.09,2.4,c),s.ell(0,.2,.01,.17,.17,.11,c),s.ell(0,.35,-.02,.2,.08,.13,a),s.fill(-.2,.1,-.16,.2,.36,-.06,(e,t,n)=>n<-.08+.02*(.36-t)&&Math.abs(e)<.16-(.36-t)*.3,a),s.fill(-.2,0,0,.2,.34,.14,(e,t)=>Math.abs(-e*1.1-(t-.17))<.018,i,`paint`),t.push({bone:`torso`,part:s});let l=new W;l.ell(0,.1,.01,.085,.1,.095,r),l.ell(0,.11,-.005,.13,.14,.13,a),l.seg(0,.14,-.03,0,.35,-.24,.115,.012,a),l.fill(-.08,-.03,.02,.08,.17,.2,(e,t,n)=>n>.03+Math.abs(e)*.4&&t>-.03&&t<.17,0,`carve`),l.rbox(0,.08,.06,.075,.08,.05,2.6,(e,t)=>t<.06&&Math.abs(e)<.01?Z.dmCharLight:Z.dmChar),Ub(l,.035,.1,.105,.025,.008,.015);for(let t of[1,-1])Hb(l,[[t*.09,.18,.02],[t*.16,.25,-.07],[t*.2,.27,-.19]],.026,.008,.4),l.box(t*.075-.01,0,.02,t*.075+.01,.2,.06,U(e,1.2),`paint`);t.push({bone:`head`,part:l});for(let r of[`L`,`R`]){let a=new W;a.ell(0,0,0,.055,.055,.055,n),a.tubeY(0,0,-.32,0,.045,.048,1.15,n),t.push({bone:r===`L`?`armL`:`armR`,part:a});let o=new W;o.ell(0,0,0,.045,.045,.045,n),o.tubeY(0,0,-.27,-.02,.043,.045,1.1,(t,n)=>Math.abs((n*100|0)%5)<2?e:i(0,n,0)),o.rbox(0,-kx.handLen,.005,.042,.045,.045,2.6,i),Nx(o,kx.handLen),t.push({bone:r===`L`?`foreL`:`foreR`,part:o})}for(let e of[`L`,`R`]){let r=new W;Kb(r,kx.thighLen,.085,.056,Mx(806,(e,t,n)=>Math.abs(e)<.01&&n>0),jx),t.push({bone:e===`L`?`thighL`:`thighR`,part:r});let a=new W;qb(a,Ax,.055,jx,(e,t,r)=>t>-.12?n(e,t,r):i(e,t,r),i,.1),t.push({bone:e===`L`?`shinL`:`shinR`,part:a})}let u=new W,d=[[0,0,0],[0,-.14,-.1],[0,-.32,-.22],[0,-.46,-.42],[0,-.52,-.66],[0,-.48,-.88]];for(let e=1;e<d.length;e++){let t=d[e-1],i=d[e];u.seg(t[0],t[1],t[2],i[0],i[1],i[2],Math.max(.023,.036-e*.003),Math.max(.023,.033-e*.003),e>3?r:n)}return u.fill(-.012,-.52,-1.08,.012,-.4,-.86,(e,t,n)=>{let r=(-.86-n)/.22;return r>=0&&r<=1&&Math.abs(t+.46+r*.02)<.05*(1-r)+.004},(e,t,n)=>Math.abs(t+.46+(-.86-n)/.22*.02)<.012?Z.dmEmber:Z.dmIronEdge),t.push({bone:`cape`,part:u}),t}function Fx(e,t){let n=K(G(t,0,.08))*(1-G(t,.08,.2)),r=Y(t,.07,.14,.3),i=Y(t,.12,.19,.35);e[B.aRX]+=.35*n-1.45*r,e[B.fR]+=-1.1*n+.2*r,e[B.aRZ]+=.08*r,e[B.aLX]+=.35*n-1.45*i,e[B.fL]+=-1.1*n+.2*i,e[B.aLZ]-=.08*i,e[B.tRY]+=.25*r-.25*i,e[B.tRX]+=.1*n+.18*Math.max(r,i),e[B.hZ]+=.1*Math.max(r,i),e[B.hY]-=.04*Math.max(r,i),e[B.lLX]-=.3*Math.max(r,i),e[B.kL]+=.3*Math.max(r,i),e[B.lRX]+=.15*Math.max(r,i)}function Ix(e,t){e[B.hY]-=.2*t,e[B.lLX]-=.95*t,e[B.lRX]-=.85*t,e[B.kL]+=1.3*t,e[B.kR]+=1.2*t,e[B.tRX]+=.7*t,e[B.nRX]+=.25*t,e[B.aLX]-=.6*t,e[B.aRX]-=.6*t,e[B.aLZ]-=1.05*t,e[B.aRZ]+=1.05*t,e[B.fL]-=1.9*t,e[B.fR]-=1.9*t,e[B.cape]-=.75*t}function Lx(e,t){Ix(e,K(G(t,0,.55))),e[B.tRY]+=.35*J(G(t,.2,1)),e[B.hRY]+=.2*J(G(t,.3,1));let n=G(t,.6,1);e[B.bS]-=.08*n,e[B.tRZ]+=.04*Math.sin(t*80)*n}function Rx(e,t){let n=1-Jd(G(t,.04,.16)),r=K(G(t,.1,.22))*(1-q(G(t,.3,.5)));Ix(e,n),e[B.hZ]+=.45*r,e[B.hY]-=.1*r,e[B.tRX]+=.4*r,e[B.nRX]-=.3*r,e[B.lLX]-=.7*r,e[B.kL]+=.7*r,e[B.lRX]+=.55*r,e[B.kR]+=.3*r,e[B.aLX]-=1.55*r,e[B.aRX]-=1.55*r,e[B.aLZ]-=.12*r,e[B.aRZ]+=.12*r,e[B.fL]+=.15*r,e[B.fR]+=.15*r,e[B.cape]-=.3*r,e[B.bS]+=.05*Y(t,.1,.16,.26)}var zx={kind:`demon_assassin`,defaultTint:Z.dmClothLight,height:1.9,rig:kx,parts:Px,hunch:.22,stance:.1,loco:{walkHz:1,runHz:1.6,stride:.5,runStride:.85,knee:.8,runKnee:1.5,bob:.04,armSwing:.35,lean:.35},carry:[-.22,-.3,.12,0,0,0],drop:[-.22,-.3,.12,0,0,0],gripL:null,gripR:null,muzzle:{bone:`weapon`,p:[0,0,0]},attackDur:.35,attack:Fx,reload:Lx,special:Rx,specialDur:.5,deathDepth:.16},Bx={hips:[0,1.28,0],torso:[0,.15,0],head:[0,.64,.1],shoulder:[.44,.55,0],upperLen:.45,handLen:.44,hip:[.2,-.04,0],thighLen:.6,cape:[0,.58,-.26]},Vx=Bx.hips[1]+Bx.hip[1]-Bx.thighLen,Hx=.08,Ux=.46,Wx=2;function Gx(e){let t=[],n=Bb(901,.2,.4),r=Bb(902,.3,.3),i=Lb(903,.4,.5),a=Rb(904,.3,.3),o=(t,n,r)=>{let i=Q(t,n,r,.12,905);return i>.68?Z.corrupt:i>.6?Z.corruptDeep:i<.25?U(e,.8):e},s=new W;s.rbox(0,-.03,0,.3,.16,.23,2.8,a),s.tubeY(0,0,-.42,.02,.33,.26,1.12,(e,t,r)=>Math.abs(e)<.03||Math.abs(r)<.03&&t<-.1?-1:Math.abs((t*100|0)%10)<1?Z.dmMagma:n(e,t,r)),s.tubeY(0,0,-.02,.1,.34,.27,1,(e,t)=>Math.abs(t-.04)<.015?Z.dmGold:Z.dmIron),s.box(-.14,-.7,.27,.14,.04,.31,(e,t,n)=>t<-.6&&H(e*40|0,4,0)>.5?-1:Math.abs(Math.abs(e)-.12)<.015?Z.dmGold:o(e,t,n)),s.box(-.16,-.62,-.31,.16,.04,-.27,(e,t,n)=>t<-.52&&H(e*40|0,5,0)>.5?-1:o(e,t,n)),t.push({bone:`hips`,part:s});let c=new W;c.rbox(0,.14,.04,.3,.2,.24,2.4,a),c.rbox(0,.36,.03,.4,.26,.28,2.3,n),c.fill(-.4,.1,.1,.4,.62,.36,(e,t)=>Math.abs(e)<.3-(.62-t)*.2,(e,t,r)=>Math.abs(e)<.016&&t>.18&&t<.54?Z.dmMagma:Math.hypot(e,t-.4)<.055?Z.dmEmberHot:Math.hypot(e,t-.4)<.085?Z.dmIronEdge:Math.abs(t-.12)<.02?Z.dmGold:n(e,t,r),`paint`),c.tubeY(0,.04,.56,.72,.17,.15,.92,n);for(let e of[1,-1]){let t=.42*e;for(let e=0;e<3;e++){let r=.62-e*.08,i=.24-e*.03;c.fill(t-i,r-.05,-i,t+i,r+i*.6,i,(e,n,a)=>{let o=(e-t)/i,s=(n-r)/(i*.55),c=a/i;return o*o+s*s+c*c<=1&&n>r-.02},(t,i,a)=>i<r+.01?e===0?Z.dmMagma:Z.dmIronEdge:e===0&&Math.abs(i-r-.05)<.012?Z.dmGold:n(t,i,a))}Wb(c,[t+.06*e,.76,.02],[t+.2*e,.98,-.04],.05),Wb(c,[t+.14*e,.72,-.1],[t+.26*e,.84,-.18],.035),Wb(c,[t+.14*e,.72,.12],[t+.26*e,.84,.2],.035)}t.push({bone:`torso`,part:c});let l=new W;l.fill(-.42,-1.15,-.16,.42,0,.02,(e,t,n)=>{let r=.3+.1*Math.min(1,-t);if(Math.abs(e)>r||t<-.98&&H(e*40|0,9,0)>.45||t<-.8&&H(e*33|0,t*33|0,3)>.9)return!1;let i=e/r*-.1*(e/r)-.03*-t;return n>i-.05&&n<=i+.001},o),t.push({bone:`cape`,part:l});let u=new W;u.rbox(0,.15,.02,.165,.19,.17,3.2,n),u.fill(-.2,-.05,-.2,.2,.4,.24,(e,t,n)=>n>.12&&Math.abs(e)<.02+(t>.13&&t<.17?.11:0)&&t>0&&t<.17,(e,t)=>Math.abs(e)<.012||Math.abs(t-.15)<.012?Z.dmEmberHot:Z.dmEmber,`paint`),u.box(-.17,.26,-.18,.17,.29,.2,Z.dmGold,`paint`);for(let e=0;e<4;e++){let t=.1-e*.08;Wb(u,[0,.33,t],[0,.44-e*.02,t-.05],.03)}for(let e of[1,-1])Hb(u,[[e*.15,.24,.02],[e*.3,.3,-.02],[e*.42,.44,0],[e*.45,.62,.08]],.065,.016,.3),u.box(e*.17-.01,.02,-.12,e*.17+.01,.24,.12,r,`paint`);t.push({bone:`head`,part:u});for(let e of[`L`,`R`]){let a=new W;a.tubeY(0,0,-.44,.03,.125,.13,1.1,n),a.ell(0,-.2,.03,.135,.15,.12,i),a.tubeY(0,0,-.34,-.06,.14,.14,1.05,n),t.push({bone:e===`L`?`armL`:`armR`,part:a});let o=new W;o.ell(0,-.01,0,.12,.09,.12,(e,t,r)=>Math.abs(t+.01)<.02?Z.dmMagma:n(e,t,r)),o.tubeY(0,0,-.4,0,.1,.1,1.2,n),o.tubeY(0,0,-.34,-.08,.12,.12,1.12,(e,t,n)=>Math.abs(t+.2)<.012?Z.dmMagma:r(e,t,n)),o.seg(0,-.2,-.11,0,-.18,-.24,.035,.008,Z.dmIronEdge),Gb(o,Bx.handLen,.1,n,.08,3,.05),t.push({bone:e===`L`?`foreL`:`foreR`,part:o})}for(let e of[`L`,`R`]){let i=new W;Kb(i,Bx.thighLen,.16,.11,n,Hx),i.fill(-.2,-.5,0,.2,-.08,.3,(e,t,n)=>n>.06&&Math.abs((t*100|0)%12)>0,r,`paint`),t.push({bone:e===`L`?`thighL`:`thighR`,part:i});let a=new W;qb(a,Vx,.1,Hx,r,n,.15),a.ell(0,0,.1,.1,.1,.09,(e,t,r)=>Math.abs(t)<.015?Z.dmMagma:n(e,t,r),`add`),t.push({bone:e===`L`?`shinL`:`shinR`,part:a})}let d=new W;d.jitter=.03;let f=Bb(906,.25);d.ell(0,-.16,0,.05,.055,.05,Z.dmGold),d.seg(0,-.17,0,0,-.26,0,.02,.006,Z.dmIronEdge),d.tubeY(0,0,-.13,.38,.034,.034,1,(e,t)=>Math.floor(t/.04)&1?Z.dmCloth:Z.dmChar),d.box(-.04,.38,-.06,.04,.46,.06,Z.dmIron);for(let e of[1,-1])Hb(d,[[0,.42,e*.05],[0,.46,e*.18],[0,.4,e*.28],[0,.3,e*.3]],.04,.012,.35);return d.ell(0,.42,0,.045,.035,.035,Z.dmEmberHot),d.fill(-.03,Ux,-.14,.03,Wx,.14,(e,t,n)=>{let r=(t-Ux)/1.54,i=r<.86?.12-.035*r:.09*(1-(r-.86)/.14);return Math.abs(n)<=i&&Math.abs(e)<=.03-Math.abs(n)/i*.012},(e,t,n)=>{let r=(t-Ux)/1.54;return(r<.86?.12-.035*r:.09*(1-(r-.86)/.14))-Math.abs(n)<.018?H(0,t*50|0,n>0?1:2)>.55?Z.dmEmber:Z.dmIronEdge:Math.abs(n)<.018&&r>.04&&r<.9?H(0,t*40|0,7)>.7?Z.dmEmberHot:Z.dmMagma:Math.abs(n)<.04&&H(e*40|0,t*40|0,n*40|0)>.93?Z.dmEmber:f(e,t,n)}),t.push({bone:`weapon`,part:d}),t}var Kx=[-.3,.9,-.08,-.95,.3,.6],qx=[.1,.12,.6,1.45,-.25,-.5];function Jx(e,t){let n=K(G(t,0,.26)),r=Jd(G(t,.25,.36)),i=q(G(t,.46,.7));X(e,Kx,n*(1-r)),X(e,qx,r*(1-i));let a=n*(1-r),o=r*(1-i);e[B.tRX]+=-.2*a+.42*o,e[B.tRY]+=-.5*a+.4*o,e[B.nRX]+=.2*a-.25*o,e[B.nRY]+=.3*a-.2*o,e[B.hY]+=.03*a-.15*o,e[B.hRY]+=-.15*a+.15*o,e[B.hZ]+=.1*o,e[B.kL]+=.55*o,e[B.kR]+=.45*o,e[B.lLX]-=.45*o,e[B.lRX]+=.2*o,e[B.cape]+=.45*o-.1*a,e[B.bS]-=.04*Y(t,.35,.38,.55)}var Yx={kind:`demon_hellknight`,defaultTint:Z.dmCloth,height:2.9,rig:Bx,parts:Gx,hunch:.14,stance:.13,loco:{walkHz:.62,runHz:.95,stride:.4,runStride:.65,knee:.65,runKnee:1.15,bob:.06,armSwing:.3,lean:.18},carry:[0,-.05,.4,.35,0,.5],drop:[-.64,-.1,0,0,0,0],gripR:[0,0,0],gripL:[0,.22,0],poleL:[.9,-.5,-.3],poleR:[-.9,-.5,-.3],muzzle:{bone:`weapon`,p:[0,1.3,0]},attackDur:.7,attack:Jx,deathDepth:.3},Xx=e=>e<0?0:e>1?1:e,Zx=e=>Math.max(e,V*.6);function Qx(e,t=.12,n=0,r=Z.dmMagma){return(i,a,o)=>{let s=Q(i,a,o,.1,e),c=s>.6?Ud(Z.dmHide,Z.dmHideDark,Math.min(1,(s-.6)*3.5)):s<.32?Ud(Z.dmHide,Z.dmHideLight,Math.min(1,(.32-s)*3)):Z.dmHide;if(t>0){let n=Q(i,a,o,.15,e+7),r=1-t*.55;n>r&&(c=Ud(c,Z.corrupt,Math.min(1,(n-r)*9)))}if(n>0){let t=Q(i,a,o,.08,e+13);if(Math.abs(t-.5)<.022*n&&Q(i,a,o,.24,e+3)>.45)return r}return c}}function $x(e){return(t,n,r)=>Q(t,n,r,.07,e)>.62?Z.dmCharLight:Z.dmChar}function eS(e){return(t,n,r)=>{let i=Q(t,n,r,.06,e);return i>.72?Z.dmIronEdge:i<.25?U(Z.dmIron,1.3):Z.dmIron}}function tS(e,t,n=Z.dmCloth,r=Z.dmClothLight){let i=Math.max(.04,V*1.01);return(a,o,s)=>o<t&&H(Math.floor(a/i),e,Math.floor(s/i))>.45+(t-o)*3||o<t-.02&&H(Math.floor(a/i),e+1,Math.floor(s/i))>.55?-1:Q(a,o,s,.07,e)>.6?r:n}function nS(e,t,n,r,i=Z.dmHorn,a=Z.dmHornTip){let o=[],s=0;for(let e=0;e+1<t.length;e++){let[n,r]=[t[e],t[e+1]],i=Math.hypot(r[0]-n[0],r[1]-n[1],r[2]-n[2]);o.push(i),s+=i}let c=0;for(let l=0;l+1<t.length;l++){let[u,d]=[t[l],t[l+1]],f=c/s,p=(c+o[l])/s,m=d[0]-u[0],h=d[1]-u[1],g=d[2]-u[2],_=m*m+h*h+g*g||1e-9;e.seg(u[0],u[1],u[2],d[0],d[1],d[2],Zx(n+(r-n)*f),Zx(n+(r-n)*p),(e,t,n)=>{let r=Xx(((e-u[0])*m+(t-u[1])*h+(n-u[2])*g)/_),o=f+(p-f)*r;return o>.7?Ud(i,a,(o-.7)/.3):Math.floor(o*s/.035)&1?U(i,.78):i}),c+=o[l]}}var rS=(e,t)=>e.map(([e,n,r])=>[e*t,n,r]);function iS(e,t){let n=e=>e*t.s;e.ell(0,n(.13),n(-.01),n(.1),n(.12),n(.115),t.skin),e.rbox(0,n(.06),n(.06),n(.078),n(.065),n(.08),2.4,t.skin),e.rbox(0,n(-.005),n(.07),n(.062),n(.04),n(.07),2.6,(e,n,r)=>U(t.skin(e,n,r),.72)),e.rbox(0,n(.145),n(.085),n(.098),n(.024),n(.045),2.8,Z.dmChar);for(let r of[1,-1])e.ell(r*n(.07),n(.07),n(.07),n(.03),n(.022),n(.04),t.skin),e.box(r*n(.028),n(.108),n(.1),r*n(.078),n(.132),n(.14),Z.dmChar,`paint`),e.box(r*n(.032),n(.113),n(.1),r*n(.074),Math.max(n(.127),n(.113)+V),n(.15),t.eye,`paint`),e.seg(r*n(.035),n(.02),n(.13),r*n(.038),n(-.035),n(.135),Zx(n(.012)),Zx(n(.005)),Z.dmHornTip),t.ears&&e.seg(r*n(.09),n(.12),n(-.01),r*n(.2),n(.17),n(-.1),n(.03),Zx(n(.008)),t.skin);e.box(n(-.05),n(.022),n(.13),n(.05),n(.034),n(.16),Z.dmChar,`paint`),e.box(n(-.022),n(.07),n(.13),n(.022),n(.085),n(.16),Z.dmHideDark,`paint`)}function aS(e,t,n,r){e.rbox(0,-t,.005,n,n*1.05,n*1.05,2.6,r);for(let r of[-1,0,1])e.seg(r*n*.62,-t-n*.5,n*.7,r*n*.72,-t-n*1.25,n*1.05,Zx(n*.3),Zx(n*.1),Z.dmChar)}function oS(e){let t=e.rig,n=t=>t*e.s,r={hips:new W,torso:new W,head:new W};for(let n of[`L`,`R`]){let i=new W;i.ell(0,-.02,0,e.arm*1.3,e.arm*1.2,e.arm*1.25,e.skin),i.tubeY(0,0,-t.upperLen+.02,0,e.arm*.82,e.arm*.82,1.22,e.skin);let a=new W;a.ell(0,-.01,0,e.fore*1.1,e.fore*1.1,e.fore*1.1,e.skin),a.tubeY(0,0,-t.handLen+.04,0,e.fore*.78,e.fore*.78,1.28,e.skin),aS(a,t.handLen,e.hand,e.skin),r[n===`L`?`armL`:`armR`]=i,r[n===`L`?`foreL`:`foreR`]=a}let i=t.hips[1]+t.hip[1]-t.thighLen,a=(t,n,r)=>Ud(e.skin(t,n,r),Z.dmChar,Xx((-n-i*.3)/(i*.45))*.9),o=[0,-i*.5,n(-.11)],s=[0,-i+n(.055),n(.075)];for(let c of[`L`,`R`]){let l=new W;l.tubeY(0,0,-t.thighLen+.02,.04,e.thigh*.72,e.thigh*.75,1.4,e.skin),l.ell(0,-t.thighLen*.42,n(.02),e.thigh*1.02,t.thighLen*.36,e.thigh*1.08,e.skin);let u=new W;u.ell(0,-.012,n(.02),e.shin*1.25,e.shin*1.2,e.shin*1.2,e.skin),u.seg(0,-.02,n(.01),o[0],o[1],o[2],e.shin,e.shin*.78,a),u.ell(o[0],o[1],o[2],e.shin*.85,e.shin*.85,e.shin*.85,a),u.seg(o[0],o[1],o[2],s[0],s[1],s[2],e.shin*.75,e.shin*.6,a),u.seg(o[0],o[1]+n(.02),o[2],0,o[1]+n(.05),o[2]-n(.08),Zx(n(.02)),Zx(n(.006)),Z.dmHorn),u.rbox(0,-i+n(.035),n(.1),n(.05),n(.035),n(.07),3,Z.dmChar);for(let e of[-1,0,1])u.seg(e*n(.03),-i+n(.03),n(.14),e*n(.036),-i+V*.5,n(.2),Zx(n(.016)),Zx(n(.006)),Z.dmHorn);r[c===`L`?`thighL`:`thighR`]=l,r[c===`L`?`shinL`:`shinR`]=u}return r}function sS(e,t,n,r=-.12){let i=e=>e*t,a=[[0,i(-.02),i(r)],[0,i(-.2),i(r-.17)],[i(.05),i(-.44),i(r-.25)],[i(.1),i(-.64),i(r-.2)]];for(let t=0;t+1<a.length;t++){let[r,o]=[a[t],a[t+1]],s=i(.045-.011*t),c=i(.045-.011*(t+1));e.seg(r[0],r[1],r[2],o[0],o[1],o[2],Zx(s),Zx(c),n)}let[o,s,c]=a[a.length-1];e.fill(o-i(.07),s-i(.12),c-i(.07),o+i(.07),s+i(.02),c+i(.07),(e,t,n)=>{let r=(s-t)/i(.12),a=i(.055)*(r<.35?r/.35:(1-r)/.65);return Math.abs(e-o)<a&&Math.abs(n-c)<Math.max(i(.014),V*.5)},Z.dmChar)}var cS=[`hips`,`torso`,`head`,`armL`,`foreL`,`armR`,`foreR`,`thighL`,`shinL`,`thighR`,`shinR`];function lS(e,t=[]){return[...cS.map(t=>({bone:t,part:e[t]})),...t]}var uS={hips:[0,.92,0],torso:[0,.1,0],head:[0,.44,.07],shoulder:[.2,.36,0],upperLen:.3,handLen:.32,hip:[.09,-.03,0],thighLen:.4,extra:[0,-.44,0]},dS=.3;function fS(e){let t=Qx(201,.12),n=oS({rig:uS,s:1,skin:t,arm:.05,fore:.044,hand:.048,thigh:.075,shin:.05}),r=tS(202,-2,e,U(e,1.35)),i=tS(203,.2,U(e,1.4),e),a=(e,t,n)=>Q(e,t,n,.05,204)>.64?U(Z.dmHornTip,.8):Z.dmHornTip,o=n.hips;o.fill(-.45,-.8,-.45,.45,.08,.45,(e,t,n)=>{let r=Math.min(1,-t/.8),i=.18+.15*r,a=.15+.14*r,o=(e/i)**2+(n/a)**2;return o>1||n>0&&t<-.18&&Math.abs(e)<.02+.13*(r-.22)?!1:(o>.55||t>-.06)&&t>-.8+.06*Math.abs(Math.sin(e*23+n*19))},(e,t,n)=>t<-.7?t>-.75&&(Math.atan2(n,e)*7|0)%3==0&&H(e/V|0,5,n/V|0)>.35?Z.dmHex:t<-.755?Q(e,t,n,.05,205)>.55?Z.corrupt:Z.corruptDeep:Z.dmChar:r(e,t,n)),o.tubeY(0,0,-.02,.05,.2,.165,1,Z.dmChar),o.rbox(0,.01,.17,.04,.035,.02,3,Z.dmGold),o.box(-.012,0,.18,.012,.02,.2,Z.dmHex,`paint`),o.seg(-.05,-.02,.16,-.07,-.3,.2,.022,.015,tS(206,-.2,Z.dmChar,Z.dmCharLight)),sS(o,1.05,t,-.13);let s=n.torso;s.rbox(0,.17,0,.17,.2,.13,2.3,r),s.ell(0,.3,-.06,.21,.14,.16,r),s.fill(-.12,.04,.04,.12,.38,.2,(e,t,n)=>n>.07&&Math.abs(e)<(t-.05)*.3,t,`paint`),s.ell(0,.37,-.03,.26,.09,.19,i),s.fill(-.26,0,-.26,.26,.38,-.08,(e,t,n)=>{let r=.2+.05*(.38-t)/.38;return Math.abs(e)<r&&Math.abs(n-(-.19+.04*(e/r)**2))<.03},tS(207,.1,U(e,1.4),e));for(let e=0;e<7;e++){let t=e/6;s.ell(.16-.3*t,.34-.3*t,.13+.03*Math.sin(t*Math.PI),.018,.018,.018,e%2?Z.dmGold:U(Z.dmGold,.7))}s.rbox(0,.27,.15,.04,.045,.018,3,Z.dmGold),s.box(-.018,.25,.16,.018,.29,.18,Z.dmHexHot,`paint`);let c=n.head;iS(c,{s:1,skin:t,eye:Z.dmHex}),c.fill(-.13,0,0,.13,.27,.19,(e,t,n)=>(e/.118)**2+((t-.135)/.128)**2+((n-.03)/.132)**2<=1&&n>.035,a),c.rbox(0,.06,.13,.055,.05,.05,2.6,a),c.box(-.05,.015,.15,.05,.03,.19,e=>Math.floor(e/V)&1?Z.dmHornTip:Z.dmChar,`paint`),c.box(-.025,.08,.16,.025,.095,.19,Z.dmChar,`paint`);for(let e of[1,-1])c.box(e*.022,.115,.1,e*.075,.165,.2,Z.dmChar,`paint`),c.box(e*.028,.12,.135,e*.07,.16,.2,0,`carve`),c.box(e*.034,.126,.1,e*.064,.154,.135,Z.dmHex,`paint`);c.fill(-.05,.17,.08,.07,.26,.2,(e,t)=>Math.abs(e-.02-.025*Math.sin(t*70))<.013,Z.dmHex,`paint`),c.fill(-.2,-.08,-.22,.2,.33,.12,(e,t,n)=>{let r=(e/.15)**2+((t-.13)/.17)**2+((n+.03)/.16)**2;return r<=1&&r>.62&&n<.05-.25*Math.max(0,t-.2)},tS(203,-2,U(e,1.4),e));for(let e of[1,-1])nS(c,rS([[.07,.2,.05],[.12,.3,0],[.155,.39,-.09],[.15,.45,-.2],[.11,.45,-.29]],e),.036,.008);for(let t of[`L`,`R`])n[t===`L`?`armL`:`armR`].tubeY(0,0,-.31,.04,.068,.072,1.18,r),n[t===`L`?`foreL`:`foreR`].tubeY(0,0,-.2,.02,.09,.095,.66,tS(208,-.13,e,U(e,1.35)));n.foreL.tubeY(0,0,-.275,-.245,.042,.042,1,Z.dmHex);let l=new W;l.jitter=.04;let u=0;for(let e=-.05;e>-.42;e-=.034,u++)u%2?l.ell(0,e,0,.024,.02,.011,Z.dmIronEdge):l.ell(0,e,0,.011,.02,.024,Z.dmIron);for(let e=0;e<3;e++){let t=e/3*Math.PI*2;l.seg(0,-.42,0,Math.cos(t)*.07,-.49,Math.sin(t)*.07,.01,.01,Z.dmIron)}let d=(e,t,n)=>Q(e,t,n,.04,209)>.62?U(Z.dmGold,1.2):Q(e,t,n,.05,210)<.3?U(Z.dmGold,.7):Z.dmGold;l.ell(0,-.575,0,.125,.09,.125,d),l.ell(0,-.495,0,.105,.05,.105,(e,t,n)=>U(d(e,t,n),.8)),l.seg(0,-.46,0,0,-.42,0,.022,.012,Z.dmGold),l.seg(0,-.65,0,0,-.72,0,.035,.018,U(Z.dmGold,.7)),l.fill(-.14,-.63,-.14,.14,-.52,.14,(e,t,n)=>{let r=Math.atan2(n,e);return Math.abs(t+.575)<.036&&(Math.floor(r/(Math.PI/5)+10)&1)==1&&e*e+n*n>.006},(e,t)=>Math.abs(t+.575)<.015?Z.dmHexHot:Z.dmHex,`paint`),l.tubeY(0,0,-.528,-.512,.125,.125,1,U(Z.dmGold,.6),`paint`),V>.03&&l.box(-.2,-.61,-.2,.2,-.54,.2,Z.dmHex,`paint`);let f=new W;return f.jitter=.1,f.fill(-.4,.02,-.2,.1,.42,.12,(e,t,n)=>{let r=-.05-t/.42*.2+.03*Math.sin(t*14),i=t/.42*-.04+.03*Math.cos(t*11),a=.022+t/.42*.07,o=Math.hypot(e-r,n-i);return o<a&&H(Math.floor(e/.03),Math.floor(t/.03),Math.floor(n/.03)+211)>.45+o/a*.8*(t/.42)},(e,t,n)=>H(Math.floor(e/.03)+5,Math.floor(t/.03),Math.floor(n/.03))>.82?Z.dmHex:U(11049128,.85+.3*Q(e,t,n,.04,212))),lS(n,[{bone:`weapon`,part:l},{bone:`extra`,part:f}])}var pS=[-.3,.06,-.12,1.15,0,.15],mS=[-.18,.3,.36,-2.3,0,.1];function hS(e,t){let n=K(G(t,0,.16)),r=K(G(t,.16,.3)),i=q(G(t,.34,.5));X(e,pS,n*(1-r)),X(e,mS,r*(1-i));let a=n*(1-r),o=r*(1-i);e[B.tRY]+=-.35*a+.35*o,e[B.tRX]+=-.08*a+.14*o,e[B.nRX]+=.06*a-.1*o,e[B.hY]-=.03*o,e[B.lLX]-=.25*o,e[B.kL]+=.15*o,e[B.aLX]+=.45*a-.55*o,e[B.aLZ]+=.2*o,e[B.glow]=Y(t,.18,.28,.46),e[B.xS]*=1+.5*Y(t,.2,.3,.5)}function gS(e,t){let n=q(G(t,0,.2))*(1-q(G(t,.86,1))),r=(t,r)=>{e[t]+=(r-e[t])*n};r(B.hY,-.42),r(B.hX,0),r(B.hRY,0),r(B.hRZ,0),r(B.lRX,-1.45),r(B.kR,1.9),r(B.lRZ,-.06),r(B.lLX,.05),r(B.kL,1.4),r(B.lLZ,.08),r(B.tRX,.95),r(B.tRY,-.12),r(B.tRZ,0),r(B.nRX,-.6),r(B.nRY,0),r(B.aLX,-1.4),r(B.aLY,0),r(B.aLZ,.12),r(B.fL,-.12),X(e,[-.2,.91,-.17,-.95+Math.sin(t*17)*.2,0,.05],n),e[B.glow]=J(G(t,.15,.3))*(1-J(G(t,.85,1))),e[B.xS]*=1+.35*n+.1*Math.sin(t*29)*n}function _S(e,t){e[B.wRX]+=.12*Math.sin(t*2.3),e[B.wRZ]+=.05*Math.sin(t*1.7+1),e[B.xS]*=1+.1*Math.sin(t*3.7)}var vS={kind:`demon_corruptor`,defaultTint:Z.dmCloth,height:1.9,rig:uS,parts:fS,hunch:dS,stance:.07,loco:{walkHz:.8,runHz:1.25,stride:.34,runStride:.58,knee:.6,runKnee:1.1,bob:.03,armSwing:.25,lean:.2},carry:[-.28,.02,.2,-.3,0,0],drop:[-.34,.15,0,0,0,0],gripL:null,gripR:[0,0,0],muzzle:{bone:`extra`,p:[0,-.135,0]},attackDur:.5,attack:hS,reload:gS,deathDepth:.16,idleExtra:_S},yS={hips:[0,.96,0],torso:[0,.1,0],head:[0,.47,.04],shoulder:[.19,.38,0],upperLen:.31,handLen:.33,hip:[.085,-.03,0],thighLen:.42,extra:[0,1.12,0]},bS=.1;function xS(e){let t=Qx(221,.12,.35),n=oS({rig:yS,s:.95,skin:t,arm:.042,fore:.036,hand:.044,thigh:.062,shin:.044}),r=$x(222),i=eS(223),a=(t,n)=>Math.floor(n/.06)%3==0&&n/.06%1>.3?Z.dmHex:e,o=n.hips;o.fill(-.4,-.76,-.4,.4,.08,.4,(e,t,n)=>{let r=Math.min(1,-t/.76),i=.16+.12*r,a=.13+.12*r,o=(e/i)**2+(n/a)**2;return o>1||o<.6||n>0&&Math.abs(e)<.04+.16*r&&t<-.04?!1:t>-.76+.07*Math.abs(Math.sin(e*21+n*13))},(t,n,i)=>i>0&&Math.abs(t)<.04+.16*Math.min(1,-n/.76)+.035&&n<-.04?a(t,n):n<-.66?H(t/V|0,3,i/V|0)>.6?Z.corrupt:e:r(t,n,i)),o.tubeY(0,0,-.03,.05,.17,.14,1,e),o.box(-.13,-.3,.12,-.08,-.02,.15,tS(224,-.24,e,U(e,1.3))),o.box(-.05,-.02,-.02,.05,.04,.16,t,`under`),sS(o,.95,t,-.12);let s=n.torso;s.rbox(0,.18,0,.13,.21,.1,2.3,t),s.fill(-.14,.05,.02,.14,.34,.14,(e,t,n)=>n>.05&&Math.abs((t+.5)%.055-.02)<.009&&Math.abs(e)>.02,Z.dmHideDark,`paint`),s.fill(-.26,-.04,-.22,.26,.44,.2,(e,t,n)=>{let r=(e/(.15+.03*Math.min(1,Math.max(0,t)/.35)))**2+(n/.13)**2;return r<=1&&r>.58&&!(n>.02&&Math.abs(e)<.09)},(e,t,n)=>n>0&&Math.abs(e)<.12?a(e,t):r(e,t,n)),s.ell(0,.4,-.03,.23,.07,.15,r),s.tubeY(0,-.02,.4,.48,.1,.09,1,i);for(let e=0;e<7;e++){let t=-1.35+e*.45,n=Math.sin(t)*.12,r=-Math.cos(t)*.1-.02,i=[.17,.25,.33,.39,.33,.25,.17][e],a=.35+Math.abs(t)*.35,o=n+Math.sin(t)*i*a,c=r-Math.cos(t)*i*.22-.03;nS(s,[[n,.44,r],[n*1.2+(o-n)*.4,.44+i*.55,r+(c-r)*.4],[o,.44+i,c]],.04,.012,Z.dmIron,Z.dmIronEdge),s.ell(n,.46,r,.018,.018,.018,Z.dmHex)}let c=n.head;iS(c,{s:.95,skin:t,eye:Z.dmEmber,ears:!0});for(let e of[1,-1])nS(c,rS([[.06,.19,.04],[.1,.27,-.03],[.11,.32,-.12],[.09,.33,-.2]],e),.028,.007);for(let e of[`L`,`R`])n[e===`L`?`armL`:`armR`].tubeY(0,0,-.31,.04,.056,.058,1.25,r),n[e===`L`?`foreL`:`foreR`].tubeY(0,0,-.25,-.1,.038,.038,1.2,(e,t,n)=>Math.abs(t+.175)<.012?Z.dmHex:i(e,t,n));let l=new W;l.jitter=.05,l.seg(0,-.98,0,0,.98,0,.024,.026,(t,n,r)=>Math.abs(n)<.08?Q(t,n,r,.03,225)>.5?e:U(e,.7):Q(t,n,r,.07,226)>.6?Z.dmCharLight:Z.dmChar);for(let e of[-.5,.4,.7])l.tubeY(0,0,e,e+.03,.034,.034,1,Z.dmIronEdge);l.seg(0,-.98,0,0,-1.08,0,.022,.005,Z.dmIronEdge),l.tubeY(0,0,.92,.99,.042,.042,1.3,i);for(let e=0;e<4&&V<.1;e++){let t=e/4*Math.PI*2+Math.PI/4,n=Math.cos(t),r=Math.sin(t);nS(l,[[n*.035,.98,r*.035],[n*.12,1.05,r*.12],[n*.125,1.17,r*.125],[n*.06,1.26,r*.06]],.024,.012,Z.dmIron,Z.dmIronEdge)}let u=new W;return u.ell(0,0,0,.095,.095,.095,(e,t,n)=>{if(V>.03)return Z.dmHexHot;if(n>.045){let n=Math.hypot(e,t);if(Math.abs(e)<.016&&Math.abs(t)<.065)return Z.dmChar;if(n<.066)return Z.dmHexHot}return Z.dmHex}),lS(n,[{bone:`weapon`,part:l},{bone:`extra`,part:u}])}var SS=[-.14,.36,.42,.95,0,.05];function CS(e,t){let n=K(G(t,0,.12)),r=q(G(t,.28,.5));X(e,SS,n*(1-r));let i=n*(1-r);e[B.tRX]+=.22*i,e[B.tRY]+=.15*i,e[B.nRX]-=.12*i,e[B.hY]-=.04*i,e[B.hZ]+=.05*i,e[B.lLX]-=.4*i,e[B.kL]+=.2*i,e[B.lRX]+=.15*i,e[B.aLX]+=-1.45*i,e[B.aLZ]+=.15*i,e[B.fL]+=.15*i,e[B.glow]=i,e[B.xS]=1+.9*Y(t,.02,.1,.36)}function wS(e,t){e[B.xS]*=1+.08*Math.sin(t*3.3)}var TS={kind:`demon_hexer`,defaultTint:Z.dmClothLight,height:1.9,rig:yS,parts:xS,hunch:bS,stance:.06,loco:{walkHz:.78,runHz:1.2,stride:.36,runStride:.6,knee:.6,runKnee:1.1,bob:.03,armSwing:.25,lean:.18},carry:[-.3,.02,.2,-.1,0,.04],drop:[-.36,.2,0,0,0,0],gripL:null,gripR:[0,0,0],muzzle:{bone:`extra`,p:[0,0,.08]},attackDur:.5,attack:CS,deathDepth:.14,idleExtra:wS},ES={hips:[0,.9,0],torso:[0,.12,0],head:[0,.5,.08],shoulder:[.27,.41,0],upperLen:.3,handLen:.31,hip:[.1,-.03,0],thighLen:.4,extra:[0,0,0]},DS=.16;function OS(e,t,n,r,i){e.fill(-r,t,-r,r,n,r,()=>!0,(e,t,n)=>{let r=(t%.08+.08)%.08,a=Math.floor(t/.08),o=Math.floor((Math.atan2(n,e)+Math.PI)/(Math.PI/4));return r<.016&&H(o,a,i)>.4||r>.03&&r<.062&&H(o,a,i+1)>.72&&Math.abs(Math.atan2(n,e)+Math.PI-(o+.5)*(Math.PI/4))<.2?Z.dmEmber:-1},`paint`)}function kS(e){let t=Qx(241,.1,.8),n=Qx(242,.08,0),r=oS({rig:ES,s:1.05,skin:n,arm:.072,fore:.062,hand:.058,thigh:.088,shin:.058}),i=$x(243),a=eS(244),o=r.hips;o.rbox(0,-.04,0,.19,.14,.15,2.6,t),o.tubeY(0,0,-.03,.06,.21,.17,1,a),o.rbox(0,.015,.17,.05,.04,.02,3,Z.dmGold),o.ell(0,.015,.19,.018,.018,.012,Z.dmEmberHot);let s=tS(245,-.38,e,U(e,1.5));o.box(-.12,-.5,.15,.12,0,.18,s),o.box(-.14,-.46,-.18,.14,0,-.15,tS(246,-.34,e,U(e,1.5)));for(let t of[1,-1])o.box(t*.2,-.3,-.1,t*.17,0,.1,tS(247,-.22,U(e,1.2),e));sS(o,1.1,n,-.13);let c=r.torso;c.rbox(0,.12,.03,.2,.16,.15,2.4,i),c.ell(0,.28,.02,.26,.2,.19,t),c.ell(0,.38,-.04,.32,.11,.19,t),c.ell(0,.4,-.1,.2,.12,.13,t),c.fill(-.2,-.04,.05,.2,.22,.25,(e,t,n)=>n>.1&&Math.abs((t+1)%.06-.03)<.006,Z.dmCharLight,`paint`),c.fill(-.3,0,-.3,.3,.52,.3,(e,t)=>Math.abs(e-.03-(t-.26)*.85)<.07,(t,n,r)=>Q(t,n,r,.05,248)>.62?U(e,1.5):e,`paint`),c.tubeY(0,0,.44,.49,.13,.12,1,a),c.ell(0,.46,.125,.022,.022,.015,Z.dmEmberHot),c.fill(.16,.38,-.16,.42,.54,.16,(e,t,n)=>{let r=(e-.3)/.11,i=(t-.43)/.08,a=n/.12;return r*r+i*i+a*a<=1&&t>.42},a),nS(c,[[.32,.49,.03],[.36,.56,.02],[.38,.62,0]],.024,.012),nS(c,[[.28,.5,-.06],[.31,.56,-.08],[.33,.61,-.1]],.02,.012);let l=r.head;iS(l,{s:1.08,skin:t,eye:Z.dmEmber});for(let e of[1,-1])nS(l,rS([[.08,.2,0],[.18,.24,.01],[.26,.3,.04],[.29,.38,.09]],e),.045,.01);for(let e of[`L`,`R`])OS(r[e===`L`?`armL`:`armR`],-.26,-.05,.1,e===`L`?249:250),OS(r[e===`L`?`foreL`:`foreR`],-.24,-.04,.09,e===`L`?251:252),r[e===`L`?`foreL`:`foreR`].tubeY(0,0,-.27,-.23,.058,.058,1,a);let u=new W;u.fill(-.13,-.12,-.13,.13,.26,.13,(e,t,n)=>{if(Math.hypot(e,t,n)<.1)return!0;if(t<0)return!1;let r=.1*(1-t/.26)*(.6+.8*Q(e,t*.5,n,.04,253));return Math.hypot(e,n)<r},(e,t,n)=>{let r=Math.hypot(e,t,n);return r<.055?Z.dmEmberHot:r<.085&&t<.07?Q(e,t,n,.03,254)>.45?Z.dmEmberHot:Z.dmEmber:t>.12||Q(e,t,n,.03,255)>.6?Z.dmMagma:Z.dmEmber});for(let e=0;e<5;e++){let t=e*1.3;u.ell(Math.cos(t)*.13,.1+.05*e,Math.sin(t)*.13,V*.5,V*.5,V*.5,Z.dmEmber)}return lS(r,[{bone:`extra`,part:u}])}var AS=[-.4,.85,-.3,-.7,0,.2],jS=[-.14,.48,.6,1.3,0,0];function MS(e,t){let n=K(G(t,0,.22)),r=Jd(G(t,.22,.32)),i=q(G(t,.36,.55));X(e,AS,n*(1-r)),X(e,jS,r*(1-i));let a=n*(1-r),o=r*(1-i);e[B.tRY]+=-.45*a+.35*o,e[B.tRX]+=-.15*a+.3*o,e[B.nRX]+=.12*a-.25*o,e[B.hY]+=.02*a-.06*o,e[B.lLX]-=.1*a+.35*o,e[B.kL]+=.25*o,e[B.lRX]+=.2*o,e[B.aLX]+=-1.1*a+.6*o,e[B.aLZ]+=.3*a,e[B.glow]=n*(1-G(t,.3,.36)),e[B.xS]=t<.3?e[B.xS]*(1+.35*n):t<.42?0:J(G(t,.42,.55))}function NS(e,t){e[B.xS]*=1+.07*Math.sin(t*9.1)+.04*Math.sin(t*23.7)}var PS={kind:`demon_flamecaller`,defaultTint:Z.dmChar,height:1.9,rig:ES,parts:kS,hunch:DS,stance:.08,loco:{walkHz:.8,runHz:1.2,stride:.36,runStride:.6,knee:.6,runKnee:1.1,bob:.035,armSwing:.3,lean:.2},carry:[-.36,.2,.3,-.16,0,0],drop:[-.42,-.05,.1,0,0,0],gripL:null,gripR:[0,-.14,0],muzzle:{bone:`extra`,p:[0,0,0]},attackDur:.55,attack:MS,deathDepth:.18,deathExtraScale:0,idleExtra:NS},FS={hips:[0,1.72,0],torso:[0,.2,0],head:[0,.86,.08],shoulder:[.4,.72,0],upperLen:.56,handLen:.58,hip:[.17,-.05,0],thighLen:.8,cape:[0,.78,-.2]},IS=.1,LS=Math.PI/2;function RS(e){let t=Qx(301,.62,.9,Z.dmHex),n=oS({rig:FS,s:1.9,skin:t,arm:.088,fore:.078,hand:.082,thigh:.14,shin:.1}),r=eS(302),i=(e,t,n)=>Q(e,t,n,.12,303)>.7?Z.corrupt:r(e,t,n),a=(e,t,n)=>Q(e,t,n,.04,304)>.6?U(Z.dmGold,1.2):Z.dmGold,o=n.hips;o.rbox(0,-.05,0,.25,.2,.19,2.5,t),o.tubeY(0,0,-.75,-.05,.27,.23,.9,tS(305,-.6,e,U(e,1.4))),o.tubeY(0,0,-.42,0,.3,.26,.88,(e,t,n)=>Math.abs((Math.atan2(e,n)/(Math.PI/4)%1+1)%1-.5)>.4||n<-.05?-1:t<-.38?a(e,t,n):i(e,t,n)),o.tubeY(0,0,-.04,.1,.3,.25,1,r),o.rbox(0,.03,.26,.08,.07,.03,3,Z.dmGold),o.ell(0,.03,.29,.03,.03,.02,Z.dmEmber);let s=n.torso;s.rbox(0,.3,0,.2,.34,.16,2.4,t),s.ell(0,.62,-.02,.32,.13,.2,t),s.fill(-.4,.14,-.3,.4,.74,.34,(e,t,n)=>{let r=(e/(.18+.11*Math.min(1,(t-.14)/.45)))**2+((n-.01)/.2)**2;return r<=1&&r>.5},(e,t,n)=>{let r=.18+.11*Math.min(1,(t-.14)/.45);return t<.19||Math.abs(Math.abs(e)-r)<.04||t>.69?a(e,t,n):n>.12&&Math.abs(Math.abs(e)-(t-.26)*.42)<.014&&t<.62?Z.dmHex:i(e,t,n)}),s.ell(0,.5,.22,.055,.065,.035,Z.dmMagma),s.ell(0,.5,.25,.022,.028,.012,Z.dmEmberHot),s.ell(0,.5,.2,.08,.09,.03,Z.dmGold,`under`),s.tubeY(0,0,.7,.86,.17,.16,1.1,r),s.tubeY(0,0,.84,.87,.19,.18,1,Z.dmGold);for(let e of[1,-1]){let t=.42*e;for(let[e,n]of[[0,1],[-.08,.86]])s.fill(t-.26,.58+e,-.26,t+.26,.9+e,.26,(r,i,a)=>{let o=(r-t)/(.17*n),s=(i-.7-e)/.13,c=a/(.18*n);return o*o+s*s+c*c<=1&&i>.66+e},(t,n,r)=>n<.69+e?a(t,n,r):i(t,n,r));nS(s,[[t+.02*e,.8,.02],[t+.1*e,.98,0],[t+.2*e,1.1,-.04]],.05,.01,Z.dmIron,Z.dmIronEdge),nS(s,[[t+.1*e,.78,-.08],[t+.2*e,.9,-.12],[t+.3*e,.96,-.16]],.04,.008,Z.dmIron,Z.dmIronEdge),s.ell(t,.72,.17,.028,.028,.022,Z.dmEmber)}let c=new W,l=tS(306,-2.25,e,U(e,1.35));c.fill(-.8,-2.45,-.3,.8,.06,.05,(e,t,n)=>{let r=.42+.33*Math.min(1,-t/2.2);if(Math.abs(e)>r)return!1;let i=e/r*-.12*(e/r)-.05*-t;return n>i-Math.max(.05,V*1.1)&&n<=i+.001&&t>-2.45+.1*Math.abs(Math.sin(e*13))},(e,t,n)=>{let r=l(e,t,n);return r<0?r:t<-2.05?t<-2.3?H(Math.floor(e/.04),7,0)>.55?Z.dmHexHot:Z.dmHex:t>-2.16&&t<-2.1&&Math.floor(e/.05)%3!=0?Z.dmHex:Z.corruptDeep:Q(e,t,n,.18,307)>.64?Z.corrupt:r}),c.tubeY(0,-.06,-.04,.06,.44,.08,1,a);for(let e of[1,-1])c.ell(.36*e,0,.03,.05,.05,.04,Z.dmEmber);let u=n.head;iS(u,{s:1.7,skin:t,eye:Z.dmHex,ears:!0}),u.fill(-.24,.25,-.26,.24,.35,.24,(e,t,n)=>{let r=(e/.185)**2+((n+.017)/.205)**2;return r<=1&&r>.72&&t>.27&&t<.34},(e,t,n)=>Math.abs(t-.305)<.012?Z.dmGold:r(e,t,n));for(let[e,t,n]of[[-1.9,.52,.26],[-1.25,.36,.12],[-.62,.28,.06],[0,.34,0],[.62,.28,.06],[1.25,.36,.12],[1.9,.52,.26]]){let r=Math.sin(e)*.19,i=Math.cos(e)*.21-.017,a=Math.sin(e)*n,o=Math.cos(e)*n*.3;nS(u,[[r,.3,i],[r+a*.35,.3+t*.5,i+o*.35],[r+a,.3+t,i+o-.04]],Math.abs(e)>1.5?.055:.042,.014,Z.dmIron,Z.dmIronEdge),u.ell(r*1.04,.3,i*1.04,.028,.028,.024,Z.dmEmber)}for(let e of[`L`,`R`]){n[e===`L`?`armL`:`armR`].ell(0,-.54,.02,.09,.07,.09,r);let t=n[e===`L`?`foreL`:`foreR`];t.tubeY(0,0,-.5,-.1,.078,.078,1.25,(e,t,n)=>Math.abs(t+.2)<.02?Z.dmGold:i(e,t,n)),t.rbox(0,-.58,.005,.082,.086,.086,2.6,r,`paint`)}for(let e of[`L`,`R`])n[e===`L`?`thighL`:`thighR`].fill(-.2,-.7,0,.2,-.08,.25,(e,t,n)=>n>.04,i,`paint`),n[e===`L`?`shinL`:`shinR`].ell(0,-.01,.07,.1,.1,.07,(e,t,n)=>t>.03?Z.dmGold:r(e,t,n));let d=new W;d.jitter=.05;let f=$x(308);return d.seg(0,-.95,0,0,1.4,0,.036,.036,(t,n,r)=>Math.abs(n)<.12||Math.abs(n-.45)<.12?Math.floor(n/.04)&1?e:U(e,.7):Math.abs(n+.45)<.025||Math.abs(n-.9)<.025||Math.abs(n-1.25)<.025?Z.dmGold:f(t,n,r)),d.ell(0,-.96,0,.055,.05,.055,Z.dmGold),d.seg(0,-1,0,0,-1.2,0,.035,.006,Z.dmIronEdge),d.rbox(0,1.42,0,.06,.09,.06,2.5,a),d.ell(0,1.42,.06,.025,.03,.015,Z.dmHexHot),d.fill(-.03,1.3,-.2,.03,2.2,.55,(e,t,n)=>{let r=(t-1.36)/.78;if(r<0||r>1)return!1;let i=.36*r*r,a=.12*(1-r)**.7+.014;return Math.abs(n-i)<a&&Math.abs(e)<Math.max(.022,V*.5)},(e,t,n)=>{let i=(t-1.36)/.78,a=.36*i*i,o=.12*(1-i)**.7+.014,s=n-a;return s>o-.028?Z.dmIronEdge:s>o-.06&&s<o-.032&&i<.85?Z.dmHex:r(e,t,n)}),d.seg(0,1.46,-.04,0,1.62,-.26,.035,.006,r),lS(n,[{bone:`weapon`,part:d},{bone:`cape`,part:c}])}var zS=[0,.2,.12,0,.25,LS+.15],BS=[.05,.2,.25,-.1,LS,LS+.15],VS=[.15,.2,.2,-.05,2.4,LS+.15],HS=[-.5,1.5,.25,-.1,0,.14],US=[-.35,-.25,-.3,-2.2,0,.2],WS=[-.05,1.1,-.1,-.35,0,0],GS=[-.05,.25,.4,1.6,0,0];function KS(e,t){let n=K(G(t,0,.3)),r=Jd(G(t,.3,.42)),i=K(G(t,.42,.54)),a=q(G(t,.56,.7));X(e,zS,n*(1-a)),X(e,BS,r*(1-a)),X(e,VS,i*(1-a));let o=r*(1-a);e[B.ikL]=J(G(t,0,.2))*(1-a),e[B.tRY]+=-.55*n*(1-r)+.55*i*(1-a),e[B.tRX]+=-.08*n*(1-r)+.18*o,e[B.hRY]+=-.15*n*(1-r)+.15*i*(1-a),e[B.hY]-=.2*o,e[B.kL]+=1*o,e[B.kR]+=1*o,e[B.lLX]-=.6*o,e[B.lRX]-=.45*o,e[B.cape]+=.15*o,e[B.glow]=Y(t,.3,.42,.62)}function qS(e,t){let n=q(G(t,0,.16))*(1-q(G(t,.88,1)));X(e,HS,n),e[B.ikL]*=1-n,e[B.aLX]+=-.35*n,e[B.aLZ]+=1.25*n,e[B.fL]+=.1*n;let r=Math.sin(t*80)*.01*n;e[B.tRX]+=-.22*n+r,e[B.nRX]+=-.35*n,e[B.hY]+=.04*n,e[B.cape]+=(.35+.08*Math.sin(t*21))*n,e[B.glow]=J(G(t,.1,.25))*(1-J(G(t,.86,1)))}function JS(e,t){let n=Yd(G(t,0,.16));e[B.bS]*=.8+.2*n;let r=1-J(G(t,.3,.6)),i=J(G(t,.3,.6))*(1-Jd(G(t,.78,.88))),a=Jd(G(t,.78,.88))*(1-q(G(t,1,1.2)));X(e,US,r),X(e,WS,i),X(e,GS,a),e[B.ikL]=(1-r)*(1-J(G(t,1,1.2))),e[B.tRX]+=.7*r-.35*i+.55*a,e[B.nRX]+=-.55*r+.1*i-.2*a,e[B.hY]+=-.35*r-.3*a,e[B.lLX]+=-.66*r-.1*i-.75*a,e[B.kL]+=1.3*r+.2*i+1.15*a,e[B.lRX]+=-.66*r-.1*i-.3*a,e[B.kR]+=1.3*r+.2*i+1.1*a,e[B.aLX]+=-.7*r,e[B.aLZ]+=.45*r,e[B.fL]+=-.7*r,e[B.cape]+=.2*r-.15*i-.25*a,e[B.bS]-=.05*Y(t,.86,.89,1.05),e[B.glow]=Math.max(1-J(G(t,.12,.35)),J(G(t,.45,.6))*(1-J(G(t,.95,1.15))))}var YS={kind:`demon_dread_sovereign`,defaultTint:Z.dmCloth,height:3.6,rig:FS,parts:RS,hunch:IS,stance:.1,loco:{walkHz:.5,runHz:.8,stride:.36,runStride:.6,knee:.6,runKnee:1.05,bob:.07,armSwing:.2,lean:.15},carry:[-.46,-.02,.28,.06,0,.1],drop:[-.7,0,0,0,0,.3],gripR:[0,0,0],gripL:[0,.45,0],ikIdle:[0,1],poleL:[.9,-.5,-.3],poleR:[-.9,-.5,-.3],muzzle:{bone:`weapon`,p:[0,1.75,.15]},attackDur:.7,attack:KS,reload:qS,special:JS,specialDur:1.2,deathDepth:.35},XS=Math.PI*2,ZS={hips:[0,.18,0],torso:[0,0,0],head:[0,1.28,0],shoulder:[.3,1.04,0],upperLen:.15,handLen:.15,hip:[.1,0,0],thighLen:.1},QS=11242588,$S=8348736,eC=9340006,tC=14268759,nC=15521415,rC=11110191,iC=10521182,aC=7100472,oC=15130571,sC=12071978,cC=2760730,lC={cy:.8,rx:.26,ry:.36,rz:.2},uC=[.56,1.1],dC=1.04,fC=.8;function pC(e,t=QS){return(n,r,i)=>{let a=Ud(t,$S,qd((Q(n,r,i,.1,e)-.5)*2.2));return V<=.03&&Math.floor(n/V)+Math.floor(r/V)+Math.floor(i/V)&1?U(a,.9):a}}function mC(e){return(t,n,r)=>{let i=H(Math.floor(t/V)+e,Math.floor(n/V),Math.floor(r/V));return i>.72?nC:i<.3?rC:tC}}var hC=(e,t,n)=>Math.floor((e+t+n)/V)&1?iC:aC;function gC(e,t){return(n,r,i)=>{let a=e===`y`?Q(n,r*.12,i,.025,t):e===`x`?Q(n*.12,r,i,.025,t):Q(n,r,i*.12,.025,t);return a>.64?Z.timberDark:a<.3?U(Z.timber,1.12):Z.timber}}function _C(e,t,n,r,i,a,o,s,c,l){e.fill(t-i*1.05,n-a,r-o*1.05,t+i*1.05,n+a,r+o*1.05,(e,l,u)=>{let d=1+.08*(Q(e,l,u,.12,c)-.5);for(let e of s)d-=.1*Math.exp(-(((l-e)/.04)**2));let f=Math.abs(e-t)/(i*d),p=Math.abs(l-n)/a,m=Math.abs(u-r)/(o*d);return f**2.4+p**2.4+m**2.4<=1},l)}function vC(e,t){let{cy:n,rx:r,ry:i,rz:a}=lC;e.fill(-r,t-.025,-a,r,t+.025,a,(e,t,o)=>{let s=Math.abs(e)/(r*.96),c=Math.abs(t-n)/i,l=Math.abs(o)/(a*.96);return s**2.4+c**2.4+l**2.4<=1},hC)}function yC(e,t,n,r,i,a,o,s){let c=mC(s);for(let l=0;l<t;l++){let u=l/t*XS+(H(l,s,1)-.5)*.4,d=u+(H(l,s,2)-.5)*.5,f=.75+.5*H(l,s,3);e.seg(n*Math.cos(u),r,n*o*Math.sin(u),i*f*Math.cos(d),r+(a-r)*f,i*f*o*Math.sin(d),.02,.016,c)}}function bC(e,t,n,r,i,a,o,s){e.ell(t,n,r,.035,.035,.035,U($S,.6),`paint`);let c=mC(s);for(let l=0;l<4;l++){let u=(H(l,s,4)-.5)*.08,d=(H(l,s,5)-.2)*.08,f=(H(l,s,6)-.5)*.08,p=.08+.06*H(l,s,7);e.seg(t-i*.03,n-a*.03,r-o*.03,t+i*p+u,n+a*p+d,r+o*p+f,.02,.016,c)}}function xC(e,t,n,r){for(let i=Math.ceil(.3/V);i>=0;i--)if(e.has(t,n,i)){e.set(t,n,i,r,`paint`);return}}function SC(){let e=new W,t=gC(`x`,601);e.box(-.3,-.18,-.3,.3,-.1,.3,(e,n,r)=>{let i=(r+.3)/.15,a=Math.floor(i);return i-a<.14&&n>-.13?Z.timberDark:U(t(e,n,r),.9+.2*H(a,602,0))});for(let t of[1,-1])for(let n of[1,-1])e.box(t*.3-t*.08,-.1,n*.3-n*.02,t*.3,-.08,n*.3,Z.ironDark),e.box(t*.3-t*.02,-.1,n*.3-n*.08,t*.3,-.08,n*.3,Z.ironDark),e.box(t*.3-t*.02,-.18,n*.3-n*.08,t*.3+t*.012,-.08,n*.3,Z.iron);e.box(-.12,-.1,-.12,.12,0,.12,gC(`y`,603)),e.box(-.127,-.068,-.127,.127,-.038,.127,(e,t,n)=>Q(e,t,n,.05,604)>.7?Z.rust:Z.iron);for(let[t,n,r]of[[.2,-.19,605],[-.2,.19,606]])_C(e,t,-.05,n,.085,.05,.075,[],r,pC(r)),e.box(t-.09,-.1,n-.012,t+.09,-.005,n+.012,hC,`paint`);return e}function CC(e){let t=new W;t.tubeY(0,0,-.02,1.36,.065,.065,.92,gC(`y`,611)),t.seg(-.62,dC,0,.62,dC,0,.04,.04,gC(`x`,612)),_C(t,0,lC.cy,0,lC.rx,lC.ry,lC.rz,uC,613,pC(614));for(let e of uC)vC(t,e);t.fill(-.2,.6000000000000001,.04,.2,1,.3,()=>!0,(t,n,r)=>{let i=Math.hypot(t,n-fC);return i>=.185||H(Math.floor(t/V),Math.floor(n/V),Math.floor(r/V)+615)>.94?-1:i<.05||i>=.1&&i<.15?e:oC},`paint`),t.fill(-.03,.66,-.3,.15,.86,-.08,()=>!0,(e,t)=>e<0||e>.12||t<.69||t>.83?Math.floor(t/V)+Math.floor(e/V)&1?cC:-1:eC,`paint`),yC(t,26,.12,.5,.2,.34,.8,616),yC(t,14,.05,1.12,.12,1.22,1,617),bC(t,.25,.7,.05,1,.3,.1,618),bC(t,-.23,.95,-.09,-1,.35,-.3,619),bC(t,.06,.66,-.2,.2,.25,-1,620),bC(t,-.21,.64,.12,-.8,.2,.6,621);for(let e of[1,-1]){let n=e>0?622:632;t.rbox(e*.47,dC,0,.14,.095,.09,2.2,pC(n));for(let n of[.36,.585])t.seg(e*(n-.017),dC,0,e*(n+.017),dC,0,.07,.07,hC);t.seg(e*.6,dC,0,e*.645,dC,0,.055,.078,pC(n+1));let r=mC(n+2);for(let i=0;i<11;i++){let a=i/11*XS+H(i,n,1)*.5,o=.03+.06*H(i,n,2);t.seg(e*.6,dC+.02*Math.sin(a),.02*Math.cos(a),e*(.7+.05*H(i,n,3)),dC+o*Math.sin(a)-.02,o*Math.cos(a),.02,.016,r)}}return t}function wC(){let e=new W;e.tubeY(0,0,-.1,.2,.06,.06,1,Z.timberDark);let t=pC(641);e.fill(-.17,-.01,-.16,.17,.33,.16,(e,t,n)=>{let r=1+.07*(Q(e,t,n,.09,642)-.5),i=e/(.155*r),a=(t-.16)/.165,o=(n-.01)/(.14*r);return i*i+a*a+o*o<=1},t),e.tubeY(0,0,-.015,.03,.075,.075,1,hC),e.tubeY(0,0,-.08,-.015,.1,.1,.72,pC(643)),yC(e,10,.06,-.05,.12,-.13,1,644);let n=V<=Nd;for(let t of[1,-1]){let r=Math.floor(t*.066/V),i=Math.floor(.17/V);for(let[t,a]of n?[[0,0],[1,1],[1,-1],[-1,1],[-1,-1]]:[[0,0]])xC(e,r+t,i+a,cC)}if(n){let t=Math.floor(.05/V);for(let n=-2;n<=1;n++)xC(e,n,t,cC);xC(e,-3,t+1,cC),xC(e,2,t+1,cC)}let r=.2,i=Math.cos(r),a=Math.sin(r),o=.012,s=.25,c=-.005,l=(e,t,n)=>{let r=Q(e,t,n,.06,645);return r>.74?Z.rust:r<.28?Z.ironDark:Z.iron},u=(e,t)=>[(e-o)*i+(t-s)*a,-(e-o)*a+(t-s)*i];e.fill(-.248,.19,-.20500000000000002,.272,.51,.195,(e,t,n)=>{let[r,i]=u(e,t),a=n-c,o=r*r+a*a;if(i>=0&&i<=.03)return o<=.2*.2;if(i>.03&&i<=.15){let e=.175-i/.15*.02;return o<=e*e}return!1},(e,t,n)=>{let[,r]=u(e,t);return r<=.03?Z.ironLight:r>.13?Z.ironDark:l(e,t,n)});let d=(e,t)=>[o+e*i-t*a,s+e*a+t*i];for(let t of[1,-1]){let[n,r]=d(t*.16,.09),[i,a]=d(t*.23,.1);e.seg(n,r,c,i,a,c,.026,.026,Z.ironDark)}let[f,p]=d(-.17,.09);return e.ell(f,p,.065,.05,.045,.05,0,`carve`),e}function TC(e){return[{bone:`hips`,part:SC()},{bone:`torso`,part:CC(e)},{bone:`head`,part:wC()}]}function EC(e,t){let n=t;e[B.hX]=0,e[B.hY]=0,e[B.hRY]=0,e[B.hRZ]=0,e[B.tRX]=.012*Math.sin(n*XS/3.7)+.005*Math.sin(n*XS/1.7+1.1),e[B.tRY]=.02*Math.sin(n*XS/7.3),e[B.tRZ]=.014*Math.sin(n*XS/4.6+.7),e[B.nRX]=.03*Math.sin(n*XS/3.7-.8),e[B.nRY]=.05*Math.sin(n*XS/9.1+2),e[B.nRZ]=.03*Math.sin(n*XS/4.6-.2)}function DC(){}var OC=[0,fC,.2,0,0,0],kC={warden:Wm,warden_shotgun:Qm,warden_sniper:yh,warden_knight:sh,warden_engineer:Eh,warden_digger:Lh,warden_sniper_xbow:Ch,warden_knight_great:gh,warden_engineer_hammer:Nh,warden_digger_spray:Vh,warden_burst:Yh,warden_sniper_arbalest:Qh,warden_knight_mace:tg,warden_engineer_beam:rg,warden_digger_sling:sg,warden_shotgun_burst:xg,warden_sniper_xbow_arbalest:Sg,warden_knight_great_mace:Cg,warden_engineer_hammer_beam:wg,warden_digger_spray_sling:Tg,orc_grunt:Mg,orc_brute:Rg,orc_archer:Kg,orc_shaman:e_,orc_warchief:c_,orc_bomber:x_,skeleton_warrior:z_,skeleton_archer:J_,skeleton_demolisher:nv,skeleton_builder:uv,skeleton_carver:_v,skeleton_necromancer:wv,skeleton_hound:Ov,skeleton_gravekeeper:Rv,insectoid_swarmling:Xv,insectoid_spitter:ny,insectoid_mantis:fy,insectoid_beetle:_y,insectoid_wasp:wy,insectoid_tunneler:My,insectoid_hive_drone:Hy,insectoid_queen:$y,orc_shield_bearer:mb,orc_engineer:Cb,orc_siege_breaker:Mb,demon_imp:tx,demon_fiend:sx,demon_behemoth:Ox,demon_assassin:zx,demon_hellknight:Yx,demon_corruptor:vS,demon_hexer:TS,demon_flamecaller:PS,demon_dread_sovereign:YS,training_dummy:{kind:`training_dummy`,defaultTint:sC,height:1.9,rig:ZS,parts:TC,hunch:0,stance:0,loco:{walkHz:1,runHz:1.4,stride:.3,runStride:.4,knee:0,runKnee:0,bob:0,armSwing:0,lean:0},carry:OC,drop:OC,gripL:null,gripR:null,muzzle:{bone:`weapon`,p:[0,0,0]},attackDur:1,attack:DC,deathDepth:.3,idleExtra:EC}},AC=(e,t)=>{let n=kC[e];if(!n)throw Error(`createCharacter: unknown kind ${e}`);return Nm(n,t)};export{Gu as $,Ka as $t,Uu as A,ba as At,Dd as B,Uo as Bt,Xu as C,_ as Ct,Wu as D,pi as Dt,od as E,ra as Et,Qu as F,yi as Ft,pd as G,xa as Gt,Od as H,Wa as Ht,yd as I,io as It,bd as J,Ga as Jt,Ad as K,Ft as Kt,vd as L,ro as Lt,id as M,Pt as Mt,_d as N,on as Nt,cd as O,Do as Ot,ed as P,ji as Pt,Cd as Q,to as Qt,gd as R,i as Rt,sd as S,Pn as St,Vu as T,Ha as Tt,dd as U,Ho as Ut,md as V,Bo as Vt,Ed as W,Ea as Wt,wd as X,Ke as Xt,Sd as Y,Ue as Yt,$u as Z,Gn as Zt,Fd as _,Va as _t,Xf as a,L as an,Na as at,Hu as b,Wn as bt,Zd as c,ka as ct,Rd as d,Vn as dt,li as en,Fu as et,Gd as f,Ut as ft,H as g,Ye as gt,W as h,Go as ht,Zf as i,I as in,or as it,xd as j,s as jt,Yu as k,ca as kt,Ld as l,Pa as lt,Nd as m,Gi as mt,kC as n,Zo as nn,ju as nt,tp as o,nn as on,wr as ot,V as p,Fa as pt,jd as q,no as qt,Pm as r,Qa as rn,Ko as rt,Z as s,zr as st,AC as t,Yr as tn,Iu as tt,Id as u,ds as ut,U as v,gn as vt,ad as w,Oo as wt,hd as x,Un as xt,nd as y,Dr as yt,kd as z,Ua as zt};