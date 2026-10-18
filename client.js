(()=>{var xe=(i,t,e)=>()=>{if(e)throw e[0];try{return i&&(t=i(i=0)),t}catch(n){throw e=[n],n}};var Qf=(i,t)=>()=>{try{return t||i((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};function tp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ep(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function id(){let i=br("canvas");return i.style.display="block",i}function Wc(...i){let t="THREE."+i.shift();Ds?Ds("log",t,...i):console.log(t,...i)}function sd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qt(...i){i=sd(i);let t="THREE."+i.shift();if(Ds)Ds("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function $t(...i){i=sd(i);let t="THREE."+i.shift();if(Ds)Ds("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ji(...i){let t=i.join(" ");t in Hh||(Hh[t]=!0,qt(...i))}function rd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function cs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function Xc(i,t){return(i%t+t)%t}function np(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ip(i,t,e){return i!==t?(e-i)/(t-i):0}function mr(i,t,e){return(1-e)*i+e*t}function sp(i,t,e,n){return mr(i,t,1-Math.exp(-e*n))}function rp(i,t=1){return t-Math.abs(Xc(i,t*2)-t)}function op(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ap(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function lp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function cp(i,t){return i+Math.random()*(t-i)}function hp(i){return i*(.5-Math.random())}function up(i){i!==void 0&&(Gh=i);let t=Gh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function dp(i){return i*pr}function fp(i){return i*Qi}function pp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function mp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function gp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _p(){let i={enabled:!0,workingColorSpace:vr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pe&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pe&&(s.r=Ps(s.r),s.g=Ps(s.g),s.b=Ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xe?yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ji("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ji("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vr]:{primaries:t,whitePoint:n,transfer:yr,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),i}function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function ql(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ia.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}function Kl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}function sc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){$i.fromArray(i,r);let a=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),l=t.dot($i),c=e.dot($i),h=n.dot($i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function Np(i,t,e,n,s,r,o,a){let l;if(t.side===Ve?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Bi,a),l===null)return null;No.copy(a),No.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(No);return c<e.near||c>e.far?null:{distance:c,point:No.clone(),object:i}}function Uo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Po),i.getVertexPosition(l,Io),i.getVertexPosition(c,Lo);let h=Np(i,t,e,n,Po,Io,Lo,nu);if(h){let d=new R;Ri.getBarycoord(nu,Po,Io,Lo,d),s&&(h.uv=Ri.getInterpolatedAttribute(s,a,l,c,d,new ut)),r&&(h.uv1=Ri.getInterpolatedAttribute(r,a,l,c,d,new ut)),o&&(h.normal=Ri.getInterpolatedAttribute(o,a,l,c,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new R,materialIndex:0};Ri.getNormal(Po,Io,Lo,u.normal),h.face=u,h.barycoord=d}return h}function ko(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(oa.fromBufferAttribute(a,s),aa.fromBufferAttribute(a,r),e.distanceSqToSegment(oa,aa,hc,ou)>n)return;hc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(hc);if(!(c<t.near||c>t.far))return{distance:c,point:ou.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}function lu(i,t,e,n,s,r,o){let a=yc.distanceSqToPoint(i);if(a<e){let l=new R;yc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}function Yc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}function uu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Op(i,t){let e=1-i;return e*e*t}function Bp(i,t){return 2*(1-i)*i*t}function kp(i,t){return i*i*t}function gr(i,t,e,n){return Op(i,t)+Bp(i,e)+kp(i,n)}function zp(i,t){let e=1-i;return e*e*e*t}function Hp(i,t){let e=1-i;return 3*e*e*i*t}function Gp(i,t){return 3*(1-i)*i*i*t}function Vp(i,t){return i*i*i*t}function xr(i,t,e,n,s){return zp(i,t)+Hp(i,e)+Gp(i,n)+Vp(i,s)}function Wp(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=ld(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=$p(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let u=e;u<s;u+=e){let f=i[u],g=i[u+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Or(r,o,e,a,l,c,0),o}function ld(i,t,e,n,s){let r;if(s===om(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=du(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=du(o/n|0,i[o],i[o+1],r);return r&&Hs(r,r.next)&&(kr(r),r=r.next),r}function es(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Hs(e,e.next)||Pe(e.prev,e,e.next)===0)){if(kr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Or(i,t,e,n,s,r,o){if(!i)return;!o&&r&&tm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Yp(i,n,s,r):Xp(i)){t.push(l.i,i.i,c.i),kr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=qp(es(i),t),Or(i,t,e,n,s,r,2)):o===2&&Zp(i,t,e,n,s,r):Or(es(i),t,e,n,s,r,1);break}}}function Xp(i){let t=i.prev,e=i,n=i.next;if(Pe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&fr(s,a,r,l,o,c,g.x,g.y)&&Pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Yp(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Pe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),g=Math.min(h,d,u),x=Math.max(a,l,c),m=Math.max(h,d,u),p=bc(f,g,t,e,n),b=bc(x,m,t,e,n),w=i.prevZ,v=i.nextZ;for(;w&&w.z>=p&&v&&v.z<=b;){if(w.x>=f&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&fr(a,h,l,d,c,u,w.x,w.y)&&Pe(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&fr(a,h,l,d,c,u,v.x,v.y)&&Pe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&fr(a,h,l,d,c,u,w.x,w.y)&&Pe(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=b;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&fr(a,h,l,d,c,u,v.x,v.y)&&Pe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function qp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Hs(n,s)&&hd(n,e,e.next,s)&&Br(n,s)&&Br(s,n)&&(t.push(n.i,e.i,s.i),kr(e),kr(e.next),e=i=s),e=e.next}while(e!==i);return es(e)}function Zp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&im(o,a)){let l=ud(o,a);o=es(o,o.next),l=es(l,l.next),Or(o,t,e,n,s,r,0),Or(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function $p(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=ld(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(nm(c))}s.sort(Kp);for(let r=0;r<s.length;r++)e=Jp(s[r],e);return e}function Kp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Jp(i,t){let e=jp(i,t);if(!e)return t;let n=ud(e,i);return es(n,n.next),es(e,e.next)}function jp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Hs(i,e))return e;do{if(Hs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&cd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Br(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Qp(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Qp(i,t){return Pe(i.prev,i,t.prev)<0&&Pe(t.next,i,i.next)<0}function tm(i,t,e,n){let s=i;do s.z===0&&(s.z=bc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,em(s)}function em(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function bc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function nm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function cd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function fr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&cd(i,t,e,n,s,r,o,a)}function im(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!sm(i,t)&&(Br(i,t)&&Br(t,i)&&rm(i,t)&&(Pe(i.prev,i,t.prev)||Pe(i,t.prev,t))||Hs(i,t)&&Pe(i.prev,i,i.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Hs(i,t){return i.x===t.x&&i.y===t.y}function hd(i,t,e,n){let s=Vo(Pe(i,t,e)),r=Vo(Pe(i,t,n)),o=Vo(Pe(e,n,i)),a=Vo(Pe(e,n,t));return!!(s!==r&&o!==a||s===0&&Go(i,e,t)||r===0&&Go(i,n,t)||o===0&&Go(e,i,n)||a===0&&Go(e,t,n))}function Go(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Vo(i){return i>0?1:i<0?-1:0}function sm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&hd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Br(i,t){return Pe(i.prev,i,i.next)<0?Pe(i,t,i.next)>=0&&Pe(i,i.prev,t)>=0:Pe(i,t,i.prev)<0||Pe(i,i.next,t)<0}function rm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ud(i,t){let e=Mc(i.i,i.x,i.y),n=Mc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function du(i,t,e,n){let s=Mc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function kr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Mc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function om(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}function fu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function pu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}function lm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function cm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}function hs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(mu(s))s.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(mu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function cn(i){let t={};for(let e=0;e<i.length;e++){let n=hs(i[e]);for(let s in n)t[s]=n[s]}return t}function mu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function hm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function qc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}function Ts(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function pc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function dd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function fm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function pm(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=dd(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=fm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}function gu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}function mm(){this._document.hidden===!1&&this.reset()}function Mu(i,t){return i.distance-t.distance}function Rc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Rc(r[o],t,e,!0)}}function Kc(i,t,e,n){let s=Em(n);switch(e){case Hc:return i*t;case Ua:return i*t/s.components*s.byteLength;case Fa:return i*t/s.components*s.byteLength;case Gi:return i*t*2/s.components*s.byteLength;case Oa:return i*t*2/s.components*s.byteLength;case Gc:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case Ba:return i*t*4/s.components*s.byteLength;case io:case so:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ro:case oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case za:case Ga:return Math.max(i,16)*Math.max(t,8)/4;case ka:case Ha:return Math.max(i,8)*Math.max(t,8)/2;case Va:case Wa:case Ya:case qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xa:case ao:case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case tl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case el:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case nl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case il:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case rl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ol:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case al:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ll:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case cl:case hl:case ul:return Math.ceil(i/4)*Math.ceil(t/4)*16;case dl:case fl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case lo:case pl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Em(i){switch(i){case _n:case Oc:return{byteLength:1,components:1};case $s:case Bc:case We:return{byteLength:2,components:1};case Da:case Na:return{byteLength:2,components:4};case Vn:case La:case Ln:return{byteLength:4,components:1};case kc:case zc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var Fi,Oi,Su,Pc,Eu,rs,wu,qs,Bi,Ve,ke,In,Zs,ln,Ic,Lc,Tu,os,Au,Ru,Cu,Pu,Iu,Lu,Du,Nu,Dc,Nc,Uu,Fu,Ou,Bu,ku,zu,Hu,Gu,Vu,Zo,$o,Ko,Is,Jo,jo,Qo,ta,Uc,Wu,Xu,Gn,$r,Kr,Jr,jr,Qr,to,as,Fc,ki,ls,Ca,Pa,eo,an,je,ea,Qe,Yu,no,nn,Ia,zi,_n,Oc,Bc,$s,La,Vn,Ln,We,Da,Na,Ks,kc,zc,Hc,Gc,vn,$n,Hi,Ua,Fa,Gi,Oa,Ba,io,so,ro,oo,ka,za,Ha,Ga,Va,Wa,Xa,Ya,qa,ao,Za,$a,Ka,Ja,ja,Qa,tl,el,nl,il,sl,rl,ol,al,ll,cl,hl,ul,dl,fl,lo,pl,_r,na,Yo,gc,xc,_c,vc,qu,ml,Zu,Xe,Ce,vr,yr,pe,qo,$u,Ku,Ju,ju,gl,Qu,td,xl,ed,nd,Vc,Bn,Ls,Hh,Ds,od,kn,rn,Gh,pr,Qi,Vi,Jc,ut,Ie,jc,R,Xl,Vh,Qc,Jt,Yl,Wh,Xh,oe,ms,ia,vp,Ns,yp,Zl,fn,th,Re,sa,De,Mr,ra,Ra,te,gs,Un,bp,Mp,Si,yo,Mn,Yh,qh,pn,Us,Sp,Zh,xs,li,bo,or,Ep,wp,$h,Kh,Jh,jh,Tp,_s,$l,Oe,he,Ap,Fs,ad,Ei,Mo,wt,on,Sr,Os,Fn,ci,Jl,hi,vs,ys,Qh,jl,Ql,tc,ec,nc,ic,Ri,Kn,ui,On,So,bs,Ms,Ss,wi,Ti,Zi,ar,Eo,wo,$i,Fe,To,Rp,Se,Er,wr,Zt,Cp,lr,rc,Jn,Pp,Pn,oc,Es,Sn,cr,Ke,ie,ac,Ip,Lp,En,Dp,jn,di,lc,Ao,Ro,pi,Be,tu,Ki,Co,eu,Po,Io,Lo,cc,Do,nu,No,At,Tr,Ar,ws,iu,Fo,su,Up,hr,ur,wn,Ji,Fp,Oo,Bs,Qn,oa,aa,ru,dr,Bo,hc,ou,mi,zn,au,yc,zo,Ho,ti,Rr,ei,Ci,la,Cr,me,ts,mn,_e,Pr,ks,Tn,zs,ca,cu,hu,uc,dc,fc,Hn,Ir,ha,Lr,ua,Dr,Nr,Ur,da,fa,Fr,Pi,Sc,Zn,Gs,am,zr,Ge,Ii,ns,xn,gn,is,gi,um,dm,Le,Vs,Kt,ni,pa,ma,Li,ga,xa,_a,va,An,Di,ya,ba,Ma,Hr,Ni,Sa,Ea,fd,wa,ss,Gr,mc,xu,_u,Ws,Wo,Xo,qn,Vr,Ai,vu,yu,Je,Ec,Wr,wc,Xr,Ui,Tc,Xs,As,Rs,Ta,Aa,Yr,Zc,gm,$c,xm,_m,vm,ym,bm,Mm,Sm,Ac,Ae,yy,bu,qr,Ys,eh,Cc,Zr,nh=xe(()=>{Fi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Oi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Su=0,Pc=1,Eu=2,rs=1,wu=2,qs=3,Bi=0,Ve=1,ke=2,In=0,Zs=1,ln=2,Ic=3,Lc=4,Tu=5,os=100,Au=101,Ru=102,Cu=103,Pu=104,Iu=200,Lu=201,Du=202,Nu=203,Dc=204,Nc=205,Uu=206,Fu=207,Ou=208,Bu=209,ku=210,zu=211,Hu=212,Gu=213,Vu=214,Zo=0,$o=1,Ko=2,Is=3,Jo=4,jo=5,Qo=6,ta=7,Uc=0,Wu=1,Xu=2,Gn=0,$r=1,Kr=2,Jr=3,jr=4,Qr=5,to=6,as=7,Fc=300,ki=301,ls=302,Ca=303,Pa=304,eo=306,an=1e3,je=1001,ea=1002,Qe=1003,Yu=1004,no=1005,nn=1006,Ia=1007,zi=1008,_n=1009,Oc=1010,Bc=1011,$s=1012,La=1013,Vn=1014,Ln=1015,We=1016,Da=1017,Na=1018,Ks=1020,kc=35902,zc=35899,Hc=1021,Gc=1022,vn=1023,$n=1026,Hi=1027,Ua=1028,Fa=1029,Gi=1030,Oa=1031,Ba=1033,io=33776,so=33777,ro=33778,oo=33779,ka=35840,za=35841,Ha=35842,Ga=35843,Va=36196,Wa=37492,Xa=37496,Ya=37488,qa=37489,ao=37490,Za=37491,$a=37808,Ka=37809,Ja=37810,ja=37811,Qa=37812,tl=37813,el=37814,nl=37815,il=37816,sl=37817,rl=37818,ol=37819,al=37820,ll=37821,cl=36492,hl=36494,ul=36495,dl=36283,fl=36284,lo=36285,pl=36286,_r=2300,na=2301,Yo=2302,gc=2303,xc=2400,_c=2401,vc=2402,qu=3200,ml=0,Zu=1,Xe="",Ce="srgb",vr="srgb-linear",yr="linear",pe="srgb",qo=7680,$u=519,Ku=512,Ju=513,ju=514,gl=515,Qu=516,td=517,xl=518,ed=519,nd=35044,Vc="300 es",Bn=2e3,Ls=2001;Hh={},Ds=null;od={[Zo]:$o,[Ko]:Qo,[Jo]:ta,[Is]:jo,[$o]:Zo,[Qo]:Ko,[ta]:Jo,[jo]:Is},kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gh=1234567,pr=Math.PI/180,Qi=180/Math.PI;Vi={DEG2RAD:pr,RAD2DEG:Qi,generateUUID:cs,clamp:ne,euclideanModulo:Xc,mapLinear:np,inverseLerp:ip,lerp:mr,damp:sp,pingpong:rp,smoothstep:op,smootherstep:ap,randInt:lp,randFloat:cp,randFloatSpread:hp,seededRandom:up,degToRad:dp,radToDeg:fp,isPowerOfTwo:pp,ceilPowerOfTwo:mp,floorPowerOfTwo:gp,setQuaternionFromProperEuler:xp,normalize:dn,denormalize:Cs},Jc=class Jc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Jc.prototype.isVector2=!0;ut=Jc,Ie=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*x;m<0&&(u=-u,f=-f,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let b=Math.acos(m),w=Math.sin(b);p=Math.sin(p*b)/w,a=Math.sin(a*b)/w,l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+x*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+x*a;let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},jc=class jc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xl.copy(this).projectOnVector(t),this.sub(Xl)}reflect(t){return this.sub(Xl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jc.prototype.isVector3=!0;R=jc,Xl=new R,Vh=new Ie,Qc=class Qc{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],b=s[1],w=s[4],v=s[7],S=s[2],M=s[5],A=s[8];return r[0]=o*x+a*b+l*S,r[3]=o*m+a*w+l*M,r[6]=o*p+a*v+l*A,r[1]=c*x+h*b+d*S,r[4]=c*m+h*w+d*M,r[7]=c*p+h*v+d*A,r[2]=u*x+f*b+g*S,r[5]=u*m+f*w+g*M,r[8]=u*p+f*v+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yl.makeScale(t,e)),this}rotate(t){return ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yl.makeRotation(-t)),this}translate(t,e){return ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Qc.prototype.isMatrix3=!0;Jt=Qc,Yl=new Jt,Wh=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xh=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);oe=_p();ia=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ms===void 0&&(ms=br("canvas")),ms.width=t.width,ms.height=t.height;let s=ms.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ms}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=br("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fi(e[n]/255)*255):e[n]=fi(e[n]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},vp=0,Ns=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=cs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ql(s[o].image)):r.push(ql(s[o]))}else r=ql(s);n.url=r}return e||(t.images[this.uuid]=n),n}};yp=0,Zl=new R,fn=class i extends kn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=je,s=je,r=nn,o=zi,a=vn,l=_n,c=i.DEFAULT_ANISOTROPY,h=Xe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=cs(),this.name="",this.source=new Ns(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zl).x}get height(){return this.source.getSize(Zl).y}get depth(){return this.source.getSize(Zl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case an:t.x=t.x-Math.floor(t.x);break;case je:t.x=t.x<0?0:1;break;case ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case an:t.y=t.y-Math.floor(t.y);break;case je:t.y=t.y<0?0:1;break;case ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Fc;fn.DEFAULT_ANISOTROPY=1;th=class th{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,v=(f+1)/2,S=(p+1)/2,M=(h+u)/4,A=(d+x)/4,_=(g+m)/4;return w>v&&w>S?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=M/n,r=A/n):v>S?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=M/s,r=_/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=A/r,s=_/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-x)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};th.prototype.isVector4=!0;Re=th,sa=class extends kn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new fn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ns(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},De=class extends sa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Mr=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},ra=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},Ra=class Ra{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,g,x,m)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ra().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/gs.setFromMatrixColumn(t,0).length(),r=1/gs.setFromMatrixColumn(t,1).length(),o=1/gs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,g=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u+x*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,g=a*h,x=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bp,t,Mp)}lookAt(t,e,n){let s=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Si.crossVectors(n,Mn),Si.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Si.crossVectors(n,Mn)),Si.normalize(),yo.crossVectors(Mn,Si),s[0]=Si.x,s[4]=yo.x,s[8]=Mn.x,s[1]=Si.y,s[5]=yo.y,s[9]=Mn.y,s[2]=Si.z,s[6]=yo.z,s[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],b=n[3],w=n[7],v=n[11],S=n[15],M=s[0],A=s[4],_=s[8],T=s[12],P=s[1],L=s[5],F=s[9],O=s[13],D=s[2],B=s[6],Y=s[10],W=s[14],nt=s[3],X=s[7],it=s[11],lt=s[15];return r[0]=o*M+a*P+l*D+c*nt,r[4]=o*A+a*L+l*B+c*X,r[8]=o*_+a*F+l*Y+c*it,r[12]=o*T+a*O+l*W+c*lt,r[1]=h*M+d*P+u*D+f*nt,r[5]=h*A+d*L+u*B+f*X,r[9]=h*_+d*F+u*Y+f*it,r[13]=h*T+d*O+u*W+f*lt,r[2]=g*M+x*P+m*D+p*nt,r[6]=g*A+x*L+m*B+p*X,r[10]=g*_+x*F+m*Y+p*it,r[14]=g*T+x*O+m*W+p*lt,r[3]=b*M+w*P+v*D+S*nt,r[7]=b*A+w*L+v*B+S*X,r[11]=b*_+w*F+v*Y+S*it,r[15]=b*T+w*O+v*W+S*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15],b=l*f-c*u,w=a*f-c*d,v=a*u-l*d,S=o*f-c*h,M=o*u-l*h,A=o*d-a*h;return e*(x*b-m*w+p*v)-n*(g*b-m*S+p*M)+s*(g*w-x*S+p*A)-r*(g*v-x*M+m*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],b=e*a-n*o,w=e*l-s*o,v=e*c-r*o,S=n*l-s*a,M=n*c-r*a,A=s*c-r*l,_=h*x-d*g,T=h*m-u*g,P=h*p-f*g,L=d*m-u*x,F=d*p-f*x,O=u*p-f*m,D=b*O-w*F+v*L+S*P-M*T+A*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/D;return t[0]=(a*O-l*F+c*L)*B,t[1]=(s*F-n*O-r*L)*B,t[2]=(x*A-m*M+p*S)*B,t[3]=(u*M-d*A-f*S)*B,t[4]=(l*P-o*O-c*T)*B,t[5]=(e*O-s*P+r*T)*B,t[6]=(m*v-g*A-p*w)*B,t[7]=(h*A-u*v+f*w)*B,t[8]=(o*F-a*P+c*_)*B,t[9]=(n*P-e*F-r*_)*B,t[10]=(g*M-x*v+p*b)*B,t[11]=(d*v-h*M-f*b)*B,t[12]=(a*T-o*L-l*_)*B,t[13]=(e*L-n*T+s*_)*B,t[14]=(x*w-g*S-m*b)*B,t[15]=(h*S-d*w+u*b)*B,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,x=o*h,m=o*d,p=a*d,b=l*c,w=l*h,v=l*d,S=n.x,M=n.y,A=n.z;return s[0]=(1-(x+p))*S,s[1]=(f+v)*S,s[2]=(g-w)*S,s[3]=0,s[4]=(f-v)*M,s[5]=(1-(u+p))*M,s[6]=(m+b)*M,s[7]=0,s[8]=(g+w)*A,s[9]=(m-b)*A,s[10]=(1-(u+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=gs.set(s[0],s[1],s[2]).length(),a=gs.set(s[4],s[5],s[6]).length(),l=gs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Un.copy(this);let c=1/o,h=1/a,d=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=d,Un.elements[9]*=d,Un.elements[10]*=d,e.setFromRotationMatrix(Un),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Bn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===Bn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ls)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Bn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===Bn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Ls)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ra.prototype.isMatrix4=!0;te=Ra,gs=new R,Un=new te,bp=new R(0,0,0),Mp=new R(1,1,1),Si=new R,yo=new R,Mn=new R,Yh=new te,qh=new Ie,pn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qh.setFromEuler(this),this.setFromQuaternion(qh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER="XYZ";Us=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Sp=0,Zh=new R,xs=new Ie,li=new te,bo=new R,or=new R,Ep=new R,wp=new Ie,$h=new R(1,0,0),Kh=new R(0,1,0),Jh=new R(0,0,1),jh={type:"added"},Tp={type:"removed"},_s={type:"childadded",child:null},$l={type:"childremoved",child:null},Oe=class i extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new pn,n=new Ie,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new Jt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis($h,t)}rotateY(t){return this.rotateOnAxis(Kh,t)}rotateZ(t){return this.rotateOnAxis(Jh,t)}translateOnAxis(t,e){return Zh.copy(t).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($h,t)}translateY(t){return this.translateOnAxis(Kh,t)}translateZ(t){return this.translateOnAxis(Jh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?bo.copy(t):bo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(or,bo,this.up):li.lookAt(bo,or,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(li),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jh),_s.child=t,this.dispatchEvent(_s),_s.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tp),$l.child=t,this.dispatchEvent($l),$l.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),li.multiply(t.parent.matrixWorld)),t.applyMatrix4(li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jh),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,t,Ep),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,wp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Oe.DEFAULT_UP=new R(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;he=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ap={type:"move"},Fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new he,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new he,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new he,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ap)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new he;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Mo={h:0,s:0,l:0};wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=Xc(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Kl(o,r,t+1/3),this.g=Kl(o,r,t),this.b=Kl(o,r,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=ad[t.toLowerCase()];return n!==void 0?this.setHex(n,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return oe.workingToColorSpace(on.copy(this),t),Math.round(ne(on.r*255,0,255))*65536+Math.round(ne(on.g*255,0,255))*256+Math.round(ne(on.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(on.copy(this),e);let n=on.r,s=on.g,r=on.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=Ce){oe.workingToColorSpace(on.copy(this),t);let e=on.r,n=on.g,s=on.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(Mo);let n=mr(Ei.h,Mo.h,e),s=mr(Ei.s,Mo.s,e),r=mr(Ei.l,Mo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new wt;wt.NAMES=ad;Sr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new wt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Os=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fn=new R,ci=new R,Jl=new R,hi=new R,vs=new R,ys=new R,Qh=new R,jl=new R,Ql=new R,tc=new R,ec=new Re,nc=new Re,ic=new Re,Ri=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fn.subVectors(t,e),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fn.subVectors(s,e),ci.subVectors(n,e),Jl.subVectors(t,e);let o=Fn.dot(Fn),a=Fn.dot(ci),l=Fn.dot(Jl),c=ci.dot(ci),h=ci.dot(Jl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ec.setScalar(0),nc.setScalar(0),ic.setScalar(0),ec.fromBufferAttribute(t,e),nc.fromBufferAttribute(t,n),ic.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ec,r.x),o.addScaledVector(nc,r.y),o.addScaledVector(ic,r.z),o}static isFrontFacing(t,e,n,s){return Fn.subVectors(n,e),ci.subVectors(t,e),Fn.cross(ci).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Fn.cross(ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;vs.subVectors(s,n),ys.subVectors(r,n),jl.subVectors(t,n);let l=vs.dot(jl),c=ys.dot(jl);if(l<=0&&c<=0)return e.copy(n);Ql.subVectors(t,s);let h=vs.dot(Ql),d=ys.dot(Ql);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(vs,o);tc.subVectors(t,r);let f=vs.dot(tc),g=ys.dot(tc);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ys,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Qh.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Qh,a);let p=1/(m+x+u);return o=x*p,a=u*p,e.copy(n).addScaledVector(vs,o).addScaledVector(ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Kn=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),So.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),So.copy(n.boundingBox)),So.applyMatrix4(t.matrixWorld),this.union(So)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ar),Eo.subVectors(this.max,ar),bs.subVectors(t.a,ar),Ms.subVectors(t.b,ar),Ss.subVectors(t.c,ar),wi.subVectors(Ms,bs),Ti.subVectors(Ss,Ms),Zi.subVectors(bs,Ss);let e=[0,-wi.z,wi.y,0,-Ti.z,Ti.y,0,-Zi.z,Zi.y,wi.z,0,-wi.x,Ti.z,0,-Ti.x,Zi.z,0,-Zi.x,-wi.y,wi.x,0,-Ti.y,Ti.x,0,-Zi.y,Zi.x,0];return!sc(e,bs,Ms,Ss,Eo)||(e=[1,0,0,0,1,0,0,0,1],!sc(e,bs,Ms,Ss,Eo))?!1:(wo.crossVectors(wi,Ti),e=[wo.x,wo.y,wo.z],sc(e,bs,Ms,Ss,Eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ui=[new R,new R,new R,new R,new R,new R,new R,new R],On=new R,So=new Kn,bs=new R,Ms=new R,Ss=new R,wi=new R,Ti=new R,Zi=new R,ar=new R,Eo=new R,wo=new R,$i=new R;Fe=new R,To=new ut,Rp=0,Se=class extends kn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nd,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)To.fromBufferAttribute(this,e),To.applyMatrix3(t),this.setXY(e,To.x,To.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=dn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cs(e,this.array)),e}setX(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cs(e,this.array)),e}setY(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cs(e,this.array)),e}setW(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),s=dn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),s=dn(s,this.array),r=dn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},Er=class extends Se{constructor(t,e,n){super(new Uint16Array(t),e,n)}},wr=class extends Se{constructor(t,e,n){super(new Uint32Array(t),e,n)}},Zt=class extends Se{constructor(t,e,n){super(new Float32Array(t),e,n)}},Cp=new Kn,lr=new R,rc=new R,Jn=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Cp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;lr.subVectors(t,this.center);let e=lr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(lr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(lr.copy(t.center).add(rc)),this.expandByPoint(lr.copy(t.center).sub(rc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Pp=0,Pn=new te,oc=new Oe,Es=new R,Sn=new Kn,cr=new Kn,Ke=new R,ie=class i extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tp(t)?wr:Er)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return oc.lookAt(t),oc.updateMatrix(),this.applyMatrix4(oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(Sn.min,cr.min),Sn.expandByPoint(Ke),Ke.addVectors(Sn.max,cr.max),Sn.expandByPoint(Ke)):(Sn.expandByPoint(cr.min),Sn.expandByPoint(cr.max))}Sn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ke));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ke.fromBufferAttribute(a,c),l&&(Es.fromBufferAttribute(t,c),Ke.add(Es)),s=Math.max(s,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Se(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new R,l[_]=new R;let c=new R,h=new R,d=new R,u=new ut,f=new ut,g=new ut,x=new R,m=new R;function p(_,T,P){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,P),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),a[_].add(x),a[T].add(x),a[P].add(x),l[_].add(m),l[T].add(m),l[P].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let _=0,T=b.length;_<T;++_){let P=b[_],L=P.start,F=P.count;for(let O=L,D=L+F;O<D;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let w=new R,v=new R,S=new R,M=new R;function A(_){S.fromBufferAttribute(s,_),M.copy(S);let T=a[_];w.copy(T),w.sub(S.multiplyScalar(S.dot(T))).normalize(),v.crossVectors(M,T);let L=v.dot(l[_])<0?-1:1;o.setXYZW(_,w.x,w.y,w.z,L)}for(let _=0,T=b.length;_<T;++_){let P=b[_],L=P.start,F=P.count;for(let O=L,D=L+F;O<D;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,d=new R;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Se(u,h,d)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ac=new R,Ip=new R,Lp=new Jt,En=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ac.subVectors(n,e).cross(Ip.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(ac),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Lp.getNormalMatrix(t),s=this.coplanarPoint(ac).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Dp=0,jn=class extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=Zs,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dc,this.blendDst=Nc,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qo,this.stencilZFail=qo,this.stencilZPass=qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new wt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new En().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ut().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ut().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},di=new R,lc=new R,Ao=new R,Ro=new R,pi=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(di.copy(this.origin).addScaledVector(this.direction,e),di.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){lc.copy(t).add(e).multiplyScalar(.5),Ao.copy(e).sub(t).normalize(),Ro.copy(this.origin).sub(lc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ao),a=Ro.dot(this.direction),l=-Ro.dot(Ao),c=Ro.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(lc).addScaledVector(Ao,u),f}intersectSphere(t,e){if(t.radius<0)return null;di.subVectors(t.center,this.origin);let n=di.dot(this.direction),s=di.dot(di)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,di)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,g=e.x-o.x,x=e.y-o.y,m=e.z-o.z,p=n.x-o.x,b=n.y-o.y,w=n.z-o.z,v=Math.abs(l),S=Math.abs(c),M=Math.abs(h),A,_,T,P,L,F,O,D,B,Y,W,nt;if(v>=S&&v>=M?(T=l,F=d,B=g,nt=p,l>=0?(A=c,_=h,P=u,L=f,O=x,D=m,Y=b,W=w):(A=h,_=c,P=f,L=u,O=m,D=x,Y=w,W=b)):S>=M?(T=c,F=u,B=x,nt=b,c>=0?(A=h,_=l,P=f,L=d,O=m,D=g,Y=w,W=p):(A=l,_=h,P=d,L=f,O=g,D=m,Y=p,W=w)):(T=h,F=f,B=m,nt=w,h>=0?(A=l,_=c,P=d,L=u,O=g,D=x,Y=p,W=b):(A=c,_=l,P=u,L=d,O=x,D=g,Y=b,W=p)),T===0)return null;let X=A/T,it=_/T,lt=1/T,Mt=P-X*F,yt=L-it*F,st=O-X*B,mt=D-it*B,bt=Y-X*nt,G=W-it*nt,j=bt*mt-G*st,xt=Mt*G-yt*bt,Bt=st*yt-mt*Mt;if(s){if(j<0||xt<0||Bt<0)return null}else if((j<0||xt<0||Bt<0)&&(j>0||xt>0||Bt>0))return null;let St=j+xt+Bt;if(St===0)return null;let Vt=lt*(j*F+xt*B+Bt*nt);return(St>0?Vt<0:Vt>0)?null:this.at(Vt/St,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Be=class extends jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},tu=new te,Ki=new pi,Co=new Jn,eu=new R,Po=new R,Io=new R,Lo=new R,cc=new R,Do=new R,nu=new R,No=new R,At=class extends Oe{constructor(t=new ie,e=new Be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Do.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(cc.fromBufferAttribute(d,t),o?Do.addScaledVector(cc,h):Do.addScaledVector(cc.sub(e),h))}e.add(Do)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(r),Ki.copy(t.ray).recast(t.near),!(Co.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(Co,eu)===null||Ki.origin.distanceToSquared(eu)>(t.far-t.near)**2))&&(tu.copy(r).invert(),Ki.copy(t.ray).applyMatrix4(tu),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ki)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,S=w;v<S;v+=3){let M=a.getX(v),A=a.getX(v+1),_=a.getX(v+2);s=Uo(this,p,t,n,c,h,d,M,A,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let b=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);s=Uo(this,o,t,n,c,h,d,b,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,S=w;v<S;v+=3){let M=v,A=v+1,_=v+2;s=Uo(this,p,t,n,c,h,d,M,A,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let b=m,w=m+1,v=m+2;s=Uo(this,o,t,n,c,h,d,b,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};Tr=class extends fn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Qe,h=Qe,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ar=class extends Se{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ws=new te,iu=new te,Fo=[],su=new Kn,Up=new te,hr=new At,ur=new Jn,wn=class extends At{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ar(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Up)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),su.copy(t.boundingBox).applyMatrix4(ws),this.boundingBox.union(su)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),ur.copy(t.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),t.ray.intersectsSphere(ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ws),iu.multiplyMatrices(n,ws),hr.matrixWorld=iu,hr.raycast(t,Fo);for(let o=0,a=Fo.length;o<a;o++){let l=Fo[o];l.instanceId=r,l.object=this,e.push(l)}Fo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ar(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tr(new Float32Array(s*this.count),s,this.count,Ua,Ln));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ji=new Jn,Fp=new ut(.5,.5),Oo=new R,Bs=class{constructor(t=new En,e=new En,n=new En,s=new En,r=new En,o=new En){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],b=r[12],w=r[13],v=r[14],S=r[15];if(s[0].setComponents(c-o,f-h,p-g,S-b).normalize(),s[1].setComponents(c+o,f+h,p+g,S+b).normalize(),s[2].setComponents(c+a,f+d,p+x,S+w).normalize(),s[3].setComponents(c-a,f-d,p-x,S-w).normalize(),n)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(c-l,f-u,p-m,S-v).normalize();else if(s[4].setComponents(c-l,f-u,p-m,S-v).normalize(),e===Bn)s[5].setComponents(c+l,f+u,p+m,S+v).normalize();else if(e===Ls)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(t){Ji.center.set(0,0,0);let e=Fp.distanceTo(t.center);return Ji.radius=.7071067811865476+e,Ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Oo.x=s.normal.x>0?t.max.x:t.min.x,Oo.y=s.normal.y>0?t.max.y:t.min.y,Oo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Qn=class extends jn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},oa=new R,aa=new R,ru=new te,dr=new pi,Bo=new Jn,hc=new R,ou=new R,mi=class extends Oe{constructor(t=new ie,e=new Qn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)oa.fromBufferAttribute(e,s-1),aa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=oa.distanceTo(aa);t.setAttribute("lineDistance",new Zt(n,1))}else qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(s),Bo.radius+=r,t.ray.intersectsSphere(Bo)===!1)return;ru.copy(s).invert(),dr.copy(t.ray).applyMatrix4(ru);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=h.getX(x),b=h.getX(x+1),w=ko(this,t,dr,l,p,b,x);w&&e.push(w)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=ko(this,t,dr,l,x,m,g-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=ko(this,t,dr,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=ko(this,t,dr,l,g-1,f,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};zn=class extends jn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},au=new te,yc=new pi,zo=new Jn,Ho=new R,ti=class extends Oe{constructor(t=new ie,e=new zn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(s),zo.radius+=r,t.ray.intersectsSphere(zo)===!1)return;au.copy(s).invert(),yc.copy(t.ray).applyMatrix4(au);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,x=f;g<x;g++){let m=c.getX(g);Ho.fromBufferAttribute(d,m),lu(Ho,m,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,x=f;g<x;g++)Ho.fromBufferAttribute(d,g),lu(Ho,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Rr=class extends fn{constructor(t=[],e=ki,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ei=class extends fn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ci=class extends fn{constructor(t,e,n=Vn,s,r,o,a=Qe,l=Qe,c,h=$n,d=1){if(h!==$n&&h!==Hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ns(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},la=class extends Ci{constructor(t,e=Vn,n=ki,s,r,o=Qe,a=Qe,l,c=$n){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Cr=class extends fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},me=class i extends ie{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(d,2));function g(x,m,p,b,w,v,S,M,A,_,T){let P=v/A,L=S/_,F=v/2,O=S/2,D=M/2,B=A+1,Y=_+1,W=0,nt=0,X=new R;for(let it=0;it<Y;it++){let lt=it*L-O;for(let Mt=0;Mt<B;Mt++){let yt=Mt*P-F;X[x]=yt*b,X[m]=lt*w,X[p]=D,c.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[p]=M>0?1:-1,h.push(X.x,X.y,X.z),d.push(Mt/A),d.push(1-it/_),W+=1}}for(let it=0;it<_;it++)for(let lt=0;lt<A;lt++){let Mt=u+lt+B*it,yt=u+lt+B*(it+1),st=u+(lt+1)+B*(it+1),mt=u+(lt+1)+B*it;l.push(Mt,yt,mt),l.push(yt,st,mt),nt+=6}a.addGroup(f,nt,T),f+=nt,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ts=class i extends ie{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,g=n*2+r,x=s+1,m=new R,p=new R;for(let b=0;b<=g;b++){let w=0,v=0,S=0,M=0;if(b<=n){let T=b/n,P=T*Math.PI/2;v=-h-t*Math.cos(P),S=t*Math.sin(P),M=-t*Math.cos(P),w=T*d}else if(b<=n+r){let T=(b-n)/r;v=-h+T*e,S=t,M=0,w=d+T*u}else{let T=(b-n-r)/n,P=T*Math.PI/2;v=h+t*Math.sin(P),S=t*Math.cos(P),M=t*Math.sin(P),w=d+u+T*d}let A=Math.max(0,Math.min(1,w/f)),_=0;b===0?_=.5/s:b===g&&(_=-.5/s);for(let T=0;T<=s;T++){let P=T/s,L=P*Math.PI*2,F=Math.sin(L),O=Math.cos(L);p.x=-S*O,p.y=v,p.z=S*F,a.push(p.x,p.y,p.z),m.set(-S*O,M,S*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(P+_,A)}if(b>0){let T=(b-1)*x;for(let P=0;P<s;P++){let L=T+P,F=T+P+1,O=b*x+P,D=b*x+P+1;o.push(L,F,O),o.push(F,D,O)}}}this.setIndex(o),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},mn=class i extends ie{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new R,h=new ut;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},_e=class i extends ie{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,x=[],m=n/2,p=0;b(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Zt(d,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(f,2));function b(){let v=new R,S=new R,M=0,A=(e-t)/n;for(let _=0;_<=r;_++){let T=[],P=_/r,L=P*(e-t)+t;for(let F=0;F<=s;F++){let O=F/s,D=O*l+a,B=Math.sin(D),Y=Math.cos(D);S.x=L*B,S.y=-P*n+m,S.z=L*Y,d.push(S.x,S.y,S.z),v.set(B,A,Y).normalize(),u.push(v.x,v.y,v.z),f.push(O,1-P),T.push(g++)}x.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){let P=x[T][_],L=x[T+1][_],F=x[T+1][_+1],O=x[T][_+1];(t>0||T!==0)&&(h.push(P,L,O),M+=3),(e>0||T!==r-1)&&(h.push(L,F,O),M+=3)}c.addGroup(p,M,0),p+=M}function w(v){let S=g,M=new ut,A=new R,_=0,T=v===!0?t:e,P=v===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*P,0),u.push(0,P,0),f.push(.5,.5),g++;let L=g;for(let F=0;F<=s;F++){let D=F/s*l+a,B=Math.cos(D),Y=Math.sin(D);A.x=T*Y,A.y=m*P,A.z=T*B,d.push(A.x,A.y,A.z),u.push(0,P,0),M.x=B*.5+.5,M.y=Y*.5*P+.5,f.push(M.x,M.y),g++}for(let F=0;F<s;F++){let O=S+F,D=L+F;v===!0?h.push(D,D+1,O):h.push(D+1,D,O),_+=3}c.addGroup(p,_,v===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Pr=class i extends ie{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let w=new R,v=new R,S=new R;for(let M=0;M<e.length;M+=3)f(e[M+0],w),f(e[M+1],v),f(e[M+2],S),l(w,v,S,b)}function l(b,w,v,S){let M=S+1,A=[];for(let _=0;_<=M;_++){A[_]=[];let T=b.clone().lerp(v,_/M),P=w.clone().lerp(v,_/M),L=M-_;for(let F=0;F<=L;F++)F===0&&_===M?A[_][F]=T:A[_][F]=T.clone().lerp(P,F/L)}for(let _=0;_<M;_++)for(let T=0;T<2*(M-_)-1;T++){let P=Math.floor(T/2);T%2===0?(u(A[_][P+1]),u(A[_+1][P]),u(A[_][P])):(u(A[_][P+1]),u(A[_+1][P+1]),u(A[_+1][P]))}}function c(b){let w=new R;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(b),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function h(){let b=new R;for(let w=0;w<r.length;w+=3){b.x=r[w+0],b.y=r[w+1],b.z=r[w+2];let v=m(b)/2/Math.PI+.5,S=p(b)/Math.PI+.5;o.push(v,1-S)}g(),d()}function d(){for(let b=0;b<o.length;b+=6){let w=o[b+0],v=o[b+2],S=o[b+4],M=Math.max(w,v,S),A=Math.min(w,v,S);M>.9&&A<.1&&(w<.2&&(o[b+0]+=1),v<.2&&(o[b+2]+=1),S<.2&&(o[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function f(b,w){let v=b*3;w.x=t[v+0],w.y=t[v+1],w.z=t[v+2]}function g(){let b=new R,w=new R,v=new R,S=new R,M=new ut,A=new ut,_=new ut;for(let T=0,P=0;T<r.length;T+=9,P+=6){b.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),v.set(r[T+6],r[T+7],r[T+8]),M.set(o[P+0],o[P+1]),A.set(o[P+2],o[P+3]),_.set(o[P+4],o[P+5]),S.copy(b).add(w).add(v).divideScalar(3);let L=m(S);x(M,P+0,b,L),x(A,P+2,w,L),x(_,P+4,v,L)}}function x(b,w,v,S){S<0&&b.x===1&&(o[w]=b.x-1),v.x===0&&v.z===0&&(o[w]=S/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},ks=class i extends Pr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ut:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new R,s=[],r=[],o=[],a=new R,l=new te;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ne(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ne(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},zs=class extends Tn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ut){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ca=class extends zs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};cu=new R,hu=new R,uc=new Yc,dc=new Yc,fc=new Yc,Hn=class extends Tn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(hu.subVectors(s[0],s[1]).add(s[0]),c=hu);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(cu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=cu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),uc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,x,m),dc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,x,m),fc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(uc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),dc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),fc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(uc.calc(l),dc.calc(l),fc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};Ir=class extends Tn{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xr(t,s.x,r.x,o.x,a.x),xr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ha=class extends Tn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xr(t,s.x,r.x,o.x,a.x),xr(t,s.y,r.y,o.y,a.y),xr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Lr=class extends Tn{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ua=class extends Tn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dr=class extends Tn{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(gr(t,s.x,r.x,o.x),gr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nr=class extends Tn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(gr(t,s.x,r.x,o.x),gr(t,s.y,r.y,o.y),gr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ur=class extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(uu(a,l.x,c.x,h.x,d.x),uu(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ut().fromArray(s))}return this}},da=Object.freeze({__proto__:null,ArcCurve:ca,CatmullRomCurve3:Hn,CubicBezierCurve:Ir,CubicBezierCurve3:ha,EllipseCurve:zs,LineCurve:Lr,LineCurve3:ua,QuadraticBezierCurve:Dr,QuadraticBezierCurve3:Nr,SplineCurve:Ur}),fa=class extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new da[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new da[s.type]().fromJSON(s))}return this}},Fr=class extends fa{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Lr(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Dr(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Ir(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ur(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new zs(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Pi=class extends Fr{constructor(t){super(t),this.uuid=cs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Fr().fromJSON(s))}return this}};Sc=class{static triangulate(t,e,n=2){return Wp(t,e,n)}},Zn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];fu(t),pu(n,t);let o=t.length;e.forEach(fu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,pu(n,e[l]);let a=Sc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};Gs=class i extends ie{constructor(t=new Pi([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Zt(s,3)),this.setAttribute("uv",new Zt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:am,w,v=!1,S,M,A,_;if(p){w=p.getSpacedPoints(h),v=!0,u=!1;let k=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(h,k),M=new R,A=new R,_=new R}u||(m=0,f=0,g=0,x=0);let T=a.extractPoints(c),P=T.shape,L=T.holes;if(!Zn.isClockWise(P)){P=P.reverse();for(let k=0,K=L.length;k<K;k++){let ot=L[k];Zn.isClockWise(ot)&&(L[k]=ot.reverse())}}function O(k){let ot=10000000000000001e-36,Q=k[0];for(let dt=1;dt<=k.length;dt++){let Lt=dt%k.length,Dt=k[Lt],Ut=Dt.x-Q.x,Yt=Dt.y-Q.y,U=Ut*Ut+Yt*Yt,fe=Math.max(Math.abs(Dt.x),Math.abs(Dt.y),Math.abs(Q.x),Math.abs(Q.y)),Qt=ot*fe*fe;if(U<=Qt){k.splice(Lt,1),dt--;continue}Q=Dt}}O(P),L.forEach(O);let D=L.length,B=P;for(let k=0;k<D;k++){let K=L[k];P=P.concat(K)}function Y(k,K,ot){return K||$t("ExtrudeGeometry: vec does not exist"),k.clone().addScaledVector(K,ot)}let W=P.length;function nt(k,K,ot){let Q,dt,Lt,Dt=k.x-K.x,Ut=k.y-K.y,Yt=ot.x-k.x,U=ot.y-k.y,fe=Dt*Dt+Ut*Ut,Qt=Dt*U-Ut*Yt;if(Math.abs(Qt)>Number.EPSILON){let I=Math.sqrt(fe),y=Math.sqrt(Yt*Yt+U*U),V=K.x-Ut/I,J=K.y+Dt/I,rt=ot.x-U/y,gt=ot.y+Yt/y,_t=((rt-V)*U-(gt-J)*Yt)/(Dt*U-Ut*Yt);Q=V+Dt*_t-k.x,dt=J+Ut*_t-k.y;let at=Q*Q+dt*dt;if(at<=2)return new ut(Q,dt);Lt=Math.sqrt(at/2)}else{let I=!1;Dt>Number.EPSILON?Yt>Number.EPSILON&&(I=!0):Dt<-Number.EPSILON?Yt<-Number.EPSILON&&(I=!0):Math.sign(Ut)===Math.sign(U)&&(I=!0),I?(Q=-Ut,dt=Dt,Lt=Math.sqrt(fe)):(Q=Dt,dt=Ut,Lt=Math.sqrt(fe/2))}return new ut(Q/Lt,dt/Lt)}let X=[];for(let k=0,K=B.length,ot=K-1,Q=k+1;k<K;k++,ot++,Q++)ot===K&&(ot=0),Q===K&&(Q=0),X[k]=nt(B[k],B[ot],B[Q]);let it=[],lt,Mt=X.concat();for(let k=0,K=D;k<K;k++){let ot=L[k];lt=[];for(let Q=0,dt=ot.length,Lt=dt-1,Dt=Q+1;Q<dt;Q++,Lt++,Dt++)Lt===dt&&(Lt=0),Dt===dt&&(Dt=0),lt[Q]=nt(ot[Q],ot[Lt],ot[Dt]);it.push(lt),Mt=Mt.concat(lt)}let yt;if(m===0)yt=Zn.triangulateShape(B,L);else{let k=[],K=[];for(let ot=0;ot<m;ot++){let Q=ot/m,dt=f*Math.cos(Q*Math.PI/2),Lt=g*Math.sin(Q*Math.PI/2)+x;for(let Dt=0,Ut=B.length;Dt<Ut;Dt++){let Yt=Y(B[Dt],X[Dt],Lt);xt(Yt.x,Yt.y,-dt),Q===0&&k.push(Yt)}for(let Dt=0,Ut=D;Dt<Ut;Dt++){let Yt=L[Dt];lt=it[Dt];let U=[];for(let fe=0,Qt=Yt.length;fe<Qt;fe++){let I=Y(Yt[fe],lt[fe],Lt);xt(I.x,I.y,-dt),Q===0&&U.push(I)}Q===0&&K.push(U)}}yt=Zn.triangulateShape(k,K)}let st=yt.length,mt=g+x;for(let k=0;k<W;k++){let K=u?Y(P[k],Mt[k],mt):P[k];v?(A.copy(S.normals[0]).multiplyScalar(K.x),M.copy(S.binormals[0]).multiplyScalar(K.y),_.copy(w[0]).add(A).add(M),xt(_.x,_.y,_.z)):xt(K.x,K.y,0)}for(let k=1;k<=h;k++)for(let K=0;K<W;K++){let ot=u?Y(P[K],Mt[K],mt):P[K];v?(A.copy(S.normals[k]).multiplyScalar(ot.x),M.copy(S.binormals[k]).multiplyScalar(ot.y),_.copy(w[k]).add(A).add(M),xt(_.x,_.y,_.z)):xt(ot.x,ot.y,d/h*k)}for(let k=m-1;k>=0;k--){let K=k/m,ot=f*Math.cos(K*Math.PI/2),Q=g*Math.sin(K*Math.PI/2)+x;for(let dt=0,Lt=B.length;dt<Lt;dt++){let Dt=Y(B[dt],X[dt],Q);xt(Dt.x,Dt.y,d+ot)}for(let dt=0,Lt=L.length;dt<Lt;dt++){let Dt=L[dt];lt=it[dt];for(let Ut=0,Yt=Dt.length;Ut<Yt;Ut++){let U=Y(Dt[Ut],lt[Ut],Q);v?xt(U.x,U.y+w[h-1].y,w[h-1].x+ot):xt(U.x,U.y,d+ot)}}}bt(),G();function bt(){let k=s.length/3;if(u){let K=0,ot=W*K;for(let Q=0;Q<st;Q++){let dt=yt[Q];Bt(dt[2]+ot,dt[1]+ot,dt[0]+ot)}K=h+m*2,ot=W*K;for(let Q=0;Q<st;Q++){let dt=yt[Q];Bt(dt[0]+ot,dt[1]+ot,dt[2]+ot)}}else{for(let K=0;K<st;K++){let ot=yt[K];Bt(ot[2],ot[1],ot[0])}for(let K=0;K<st;K++){let ot=yt[K];Bt(ot[0]+W*h,ot[1]+W*h,ot[2]+W*h)}}n.addGroup(k,s.length/3-k,0)}function G(){let k=s.length/3,K=0;j(B,K),K+=B.length;for(let ot=0,Q=L.length;ot<Q;ot++){let dt=L[ot];j(dt,K),K+=dt.length}n.addGroup(k,s.length/3-k,1)}function j(k,K){let ot=k.length;for(;--ot>=0;){let Q=ot,dt=ot-1;dt<0&&(dt=k.length-1);for(let Lt=0,Dt=h+m*2;Lt<Dt;Lt++){let Ut=W*Lt,Yt=W*(Lt+1),U=K+Q+Ut,fe=K+dt+Ut,Qt=K+dt+Yt,I=K+Q+Yt;St(U,fe,Qt,I)}}}function xt(k,K,ot){l.push(k),l.push(K),l.push(ot)}function Bt(k,K,ot){Vt(k),Vt(K),Vt(ot);let Q=s.length/3,dt=b.generateTopUV(n,s,Q-3,Q-2,Q-1);le(dt[0]),le(dt[1]),le(dt[2])}function St(k,K,ot,Q){Vt(k),Vt(K),Vt(Q),Vt(K),Vt(ot),Vt(Q);let dt=s.length/3,Lt=b.generateSideWallUV(n,s,dt-6,dt-3,dt-2,dt-1);le(Lt[0]),le(Lt[1]),le(Lt[3]),le(Lt[1]),le(Lt[2]),le(Lt[3])}function Vt(k){s.push(l[k*3+0]),s.push(l[k*3+1]),s.push(l[k*3+2])}function le(k){r.push(k.x),r.push(k.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return lm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new da[s.type]().fromJSON(s)),new i(n,t.options)}},am={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ut(r,o),new ut(a,l),new ut(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ut(o,1-l),new ut(c,1-d),new ut(u,1-g),new ut(x,1-p)]:[new ut(a,1-l),new ut(h,1-d),new ut(f,1-g),new ut(m,1-p)]}};zr=class i extends Pr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Ge=class i extends ie{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let b=p*u-o;for(let w=0;w<c;w++){let v=w*d-r;g.push(v,-b,0),x.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let w=b+c*p,v=b+c*(p+1),S=b+1+c*(p+1),M=b+1+c*p;f.push(w,v,M),f.push(v,S,M)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ii=class i extends ie{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new R,g=new ut;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let b=p+m,w=b,v=b+n+1,S=b+n+2,M=b+1;a.push(w,v,M),a.push(v,S,M)}}this.setIndex(a),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ns=class i extends ie{constructor(t=new Pi([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(r,3)),this.setAttribute("uv",new Zt(o,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,g=u.holes;Zn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let b=g[m];Zn.isClockWise(b)===!0&&(g[m]=b.reverse())}let x=Zn.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let b=g[m];f=f.concat(b)}for(let m=0,p=f.length;m<p;m++){let b=f[m];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let m=0,p=x.length;m<p;m++){let b=x[m],w=b[0]+d,v=b[1]+d,S=b[2]+d;n.push(w,v,S),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return cm(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};xn=class i extends ie{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new R,u=new R,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let b=[],w=p/n,v=o+w*a,S=t*Math.cos(v),M=Math.sqrt(t*t-S*S),A=0;p===0&&o===0?A=.5/e:p===n&&l===Math.PI&&(A=-.5/e);for(let _=0;_<=e;_++){let T=_/e,P=s+T*r;d.x=-M*Math.cos(P),d.y=S,d.z=M*Math.sin(P),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(T+A,1-w),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let w=h[p][b+1],v=h[p][b],S=h[p+1][b],M=h[p+1][b+1];(p!==0||o>0)&&f.push(w,v,M),(p!==n-1||l<Math.PI)&&f.push(v,S,M)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},gn=class i extends ie{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new R,f=new R,g=new R;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let p=0;p<=s;p++){let b=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(b),f.y=(t+e*Math.cos(m))*Math.sin(b),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(b),u.y=t*Math.sin(b),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let p=(s+1)*x+m-1,b=(s+1)*(x-1)+m-1,w=(s+1)*(x-1)+m,v=(s+1)*x+m;l.push(p,b,v),l.push(b,w,v)}this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},is=class i extends ie{constructor(t=new Nr(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,l=new R,c=new ut,h=new R,d=[],u=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Zt(d,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(f,2));function x(){for(let w=0;w<e;w++)m(w);m(r===!1?e:0),b(),p()}function m(w){h=t.getPointAt(w/e,h);let v=o.normals[w],S=o.binormals[w];for(let M=0;M<=s;M++){let A=M/s*Math.PI*2,_=Math.sin(A),T=-Math.cos(A);l.x=T*v.x+_*S.x,l.y=T*v.y+_*S.y,l.z=T*v.z+_*S.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let w=1;w<=e;w++)for(let v=1;v<=s;v++){let S=(s+1)*(w-1)+(v-1),M=(s+1)*w+(v-1),A=(s+1)*w+v,_=(s+1)*(w-1)+v;g.push(S,M,_),g.push(M,A,_)}}function b(){for(let w=0;w<=e;w++)for(let v=0;v<=s;v++)c.x=w/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new da[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};gi={clone:hs,merge:cn},um=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Le=class extends jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=um,this.fragmentShader=dm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=hm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new wt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ut().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Re().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Jt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new te().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Vs=class extends Le{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Kt=class extends jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ni=class extends Kt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new wt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new wt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new wt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},pa=class extends jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ma=class extends jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};Li=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ga=class extends Li{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xc,endingEnd:xc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case _c:r=t,a=2*e-n;break;case vc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _c:o=t,l=2*n-e;break;case vc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,b=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,w=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let S=0;S!==a;++S)r[S]=p*o[h+S]+b*o[c+S]+w*o[l+S]+v*o[d+S];return r}},xa=class extends Li{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},_a=class extends Li{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},va=class extends Li{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),x=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*g;return r}let u=a*2,f=t-1;for(let g=0;g!==a;++g){let x=o[c+g],m=o[l+g],p=f*u+g*2,b=d[p],w=d[p+1],v=t*u+g*2,S=h[v],M=h[v+1],A=pm(n,e,b,S,s);r[g]=dd(A,x,w,M,m)}return r}};An=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ts(e,this.TimeBufferType),this.values=Ts(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ts(t.times,Array),values:Ts(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),pc(t.settings)&&(n.settings={inTangents:Ts(t.settings.inTangents,Array),outTangents:Ts(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new _a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new xa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new va(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case _r:e=this.InterpolantFactoryMethodDiscrete;break;case na:e=this.InterpolantFactoryMethodLinear;break;case Yo:e=this.InterpolantFactoryMethodSmooth;break;case gc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _r;case this.InterpolantFactoryMethodLinear:return na;case this.InterpolantFactoryMethodSmooth:return Yo;case this.InterpolantFactoryMethodBezier:return gc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;pc(this.settings)&&(gu(this.settings.inTangents,t),gu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&($t("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&($t("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){$t("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){$t("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&ep(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){$t("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Yo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[u+g]||x!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,pc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=na;Di=class extends An{constructor(t,e,n){super(t,e,n)}};Di.prototype.ValueTypeName="bool";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=_r;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;ya=class extends An{constructor(t,e,n,s){super(t,e,n,s)}};ya.prototype.ValueTypeName="color";ba=class extends An{constructor(t,e,n,s){super(t,e,n,s)}};ba.prototype.ValueTypeName="number";Ma=class extends Li{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ie.slerpFlat(r,0,o,c-a,o,c,l);return r}},Hr=class extends An{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ma(this.times,this.values,this.getValueSize(),t)}};Hr.prototype.ValueTypeName="quaternion";Hr.prototype.InterpolantFactoryMethodSmooth=void 0;Ni=class extends An{constructor(t,e,n){super(t,e,n)}};Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=_r;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;Sa=class extends An{constructor(t,e,n,s){super(t,e,n,s)}};Sa.prototype.ValueTypeName="vector";Ea=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},fd=new Ea,wa=class{constructor(t){this.manager=t!==void 0?t:fd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};wa.DEFAULT_MATERIAL_NAME="__DEFAULT";ss=class extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Gr=class extends ss{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},mc=new te,xu=new R,_u=new R,Ws=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bs,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;xu.setFromMatrixPosition(t.matrixWorld),e.position.copy(xu),_u.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_u),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){mc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(mc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ls||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(mc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Wo=new R,Xo=new Ie,qn=new R,Vr=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Wo,Xo,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wo,Xo,qn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Wo,Xo,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wo,Xo,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ai=new R,vu=new ut,yu=new ut,Je=class extends Vr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qi*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z)}getViewSize(t,e){return this.getViewBounds(t,vu,yu),e.subVectors(yu,vu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(pr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ec=class extends Ws{constructor(){super(new Je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Qi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Wr=class extends ss{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ec}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},wc=class extends Ws{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0}},Xr=class extends ss{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new wc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ui=class extends Vr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Tc=class extends Ws{constructor(){super(new Ui(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xs=class extends ss{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new Tc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},As=-90,Rs=1,Ta=class extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(As,Rs,t,e);s.layers=this.layers,this.add(s);let r=new Je(As,Rs,t,e);r.layers=this.layers,this.add(r);let o=new Je(As,Rs,t,e);o.layers=this.layers,this.add(o);let a=new Je(As,Rs,t,e);a.layers=this.layers,this.add(a);let l=new Je(As,Rs,t,e);l.layers=this.layers,this.add(l);let c=new Je(As,Rs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Aa=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Yr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=mm.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};Zc="\\[\\]\\.:\\/",gm=new RegExp("["+Zc+"]","g"),$c="[^"+Zc+"]",xm="[^"+Zc.replace("\\.","")+"]",_m=/((?:WC+[\/:])*)/.source.replace("WC",$c),vm=/(WCOD+)?/.source.replace("WCOD",xm),ym=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$c),bm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$c),Mm=new RegExp("^"+_m+vm+ym+bm+"$"),Sm=["material","materials","bones","map"],Ac=class{constructor(t,e,n){let s=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(gm,"")}static parseTrackName(t){let e=Mm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Sm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){$t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){$t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){$t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){$t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){$t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;$t("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=Ac;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];yy=new Float32Array(1),bu=new te,qr=class{constructor(t,e,n=0,s=1/0){this.ray=new pi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Us,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):$t("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return bu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bu),this}intersectObject(t,e=!0,n=[]){return Rc(t,this,n,e),n.sort(Mu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Rc(t[s],this,n,e);return n.sort(Mu),n}};Ys=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ne(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ne(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},eh=class eh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};eh.prototype.isMatrix2=!0;Cc=eh,Zr=class extends kn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function Ud(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Tm(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function lx(i,t,e,n,s,r){let o=new wt(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){let v=b.backgroundBlurriness>0;w=t.get(w,v)}return w}function g(b){let w=!1,v=f(b);v===null?m(o,a):v&&v.isColor&&(m(v,1),w=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(b,w){let v=f(w);v&&(v.isCubeTexture||v.mapping===eo)?(c===void 0&&(c=new At(new me(1,1,1),new Le({name:"BackgroundCubeMaterial",uniforms:hs(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ax.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Fd),c.material.toneMapped=oe.getTransfer(v.colorSpace)!==pe,(h!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new At(new Ge(2,2),new Le({name:"BackgroundMaterial",uniforms:hs(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=oe.getTransfer(v.colorSpace)!==pe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,w){b.getRGB(_l,qc(i)),e.buffers.color.setClear(_l.r,_l.g,_l.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,w=1){o.set(b),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:g,addToRenderList:x,dispose:p}}function cx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(L,F,O,D,B){let Y=!1,W=d(L,D,O,F);r!==W&&(r=W,c(r.object)),Y=f(L,D,O,B),Y&&g(L,D,O,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(L,F,O,D),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function d(L,F,O,D){let B=D.wireframe===!0,Y=n[F.id];Y===void 0&&(Y={},n[F.id]=Y);let W=L.isInstancedMesh===!0?L.id:0,nt=Y[W];nt===void 0&&(nt={},Y[W]=nt);let X=nt[O.id];X===void 0&&(X={},nt[O.id]=X);let it=X[B];return it===void 0&&(it=u(l()),X[B]=it),it}function u(L){let F=[],O=[],D=[];for(let B=0;B<e;B++)F[B]=0,O[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:O,attributeDivisors:D,object:L,attributes:{},index:null}}function f(L,F,O,D){let B=r.attributes,Y=F.attributes,W=0,nt=O.getAttributes();for(let X in nt)if(nt[X].location>=0){let lt=B[X],Mt=Y[X];if(Mt===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(Mt=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(Mt=L.instanceColor)),lt===void 0||lt.attribute!==Mt||Mt&&lt.data!==Mt.data)return!0;W++}return r.attributesNum!==W||r.index!==D}function g(L,F,O,D){let B={},Y=F.attributes,W=0,nt=O.getAttributes();for(let X in nt)if(nt[X].location>=0){let lt=Y[X];lt===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(lt=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(lt=L.instanceColor));let Mt={};Mt.attribute=lt,lt&&lt.data&&(Mt.data=lt.data),B[X]=Mt,W++}r.attributes=B,r.attributesNum=W,r.index=D}function x(){let L=r.newAttributes;for(let F=0,O=L.length;F<O;F++)L[F]=0}function m(L){p(L,0)}function p(L,F){let O=r.newAttributes,D=r.enabledAttributes,B=r.attributeDivisors;O[L]=1,D[L]===0&&(i.enableVertexAttribArray(L),D[L]=1),B[L]!==F&&(i.vertexAttribDivisor(L,F),B[L]=F)}function b(){let L=r.newAttributes,F=r.enabledAttributes;for(let O=0,D=F.length;O<D;O++)F[O]!==L[O]&&(i.disableVertexAttribArray(O),F[O]=0)}function w(L,F,O,D,B,Y,W){W===!0?i.vertexAttribIPointer(L,F,O,B,Y):i.vertexAttribPointer(L,F,O,D,B,Y)}function v(L,F,O,D){x();let B=D.attributes,Y=O.getAttributes(),W=F.defaultAttributeValues;for(let nt in Y){let X=Y[nt];if(X.location>=0){let it=B[nt];if(it===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&(it=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&(it=L.instanceColor)),it!==void 0){let lt=it.normalized,Mt=it.itemSize,yt=t.get(it);if(yt===void 0)continue;let st=yt.buffer,mt=yt.type,bt=yt.bytesPerElement,G=mt===i.INT||mt===i.UNSIGNED_INT||it.gpuType===La;if(it.isInterleavedBufferAttribute){let j=it.data,xt=j.stride,Bt=it.offset;if(j.isInstancedInterleavedBuffer){for(let St=0;St<X.locationSize;St++)p(X.location+St,j.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let St=0;St<X.locationSize;St++)m(X.location+St);i.bindBuffer(i.ARRAY_BUFFER,st);for(let St=0;St<X.locationSize;St++)w(X.location+St,Mt/X.locationSize,mt,lt,xt*bt,(Bt+Mt/X.locationSize*St)*bt,G)}else{if(it.isInstancedBufferAttribute){for(let j=0;j<X.locationSize;j++)p(X.location+j,it.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let j=0;j<X.locationSize;j++)m(X.location+j);i.bindBuffer(i.ARRAY_BUFFER,st);for(let j=0;j<X.locationSize;j++)w(X.location+j,Mt/X.locationSize,mt,lt,Mt*bt,Mt/X.locationSize*j*bt,G)}}else if(W!==void 0){let lt=W[nt];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(X.location,lt);break;case 3:i.vertexAttrib3fv(X.location,lt);break;case 4:i.vertexAttrib4fv(X.location,lt);break;default:i.vertexAttrib1fv(X.location,lt)}}}}b()}function S(){T();for(let L in n){let F=n[L];for(let O in F){let D=F[O];for(let B in D){let Y=D[B];for(let W in Y)h(Y[W].object),delete Y[W];delete D[B]}}delete n[L]}}function M(L){if(n[L.id]===void 0)return;let F=n[L.id];for(let O in F){let D=F[O];for(let B in D){let Y=D[B];for(let W in Y)h(Y[W].object),delete Y[W];delete D[B]}}delete n[L.id]}function A(L){for(let F in n){let O=n[F];for(let D in O){let B=O[D];if(B[L.id]===void 0)continue;let Y=B[L.id];for(let W in Y)h(Y[W].object),delete Y[W];delete B[L.id]}}}function _(L){for(let F in n){let O=n[F],D=L.isInstancedMesh===!0?L.id:0,B=O[D];if(B!==void 0){for(let Y in B){let W=B[Y];for(let nt in W)h(W[nt].object),delete W[nt];delete B[Y]}delete O[D],Object.keys(O).length===0&&delete n[F]}}}function T(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:P,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function hx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ux(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==vn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let _=A===We&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==_n&&A!==Ln&&!_&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:v,maxSamples:S,samples:M}}function dx(i){let t=this,e=null,n=0,s=!1,r=!1,o=new En,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,w=b*4,v=p.clippingState||null;l.value=v,v=h(g,u,w,f);for(let S=0;S!==w;++S)v[S]=e[S];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,v=f;w!==x;++w,v+=4)o.copy(d[w]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function xx(i){let t=[],e=[],n=i,s=i-js+1+fx;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let p=0;p<d;p++){let b=p%3*2/3-1,w=p>2?0:-1,v=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];g.set(v,f*u*p);for(let S=0;S<u;S++){let M=h[S*2]*2-1,A=h[S*2+1]*2-1;p===0?us.set(1,A,M):p===1?us.set(-M,1,-A):p===2?us.set(-M,A,1):p===3?us.set(-1,A,-M):p===4?us.set(-M,-1,A):us.set(M,A,-1),us.toArray(x,(p*u+S)*f)}}let m=new ie;m.setAttribute("position",new Se(g,f)),m.setAttribute("outputDirection",new Se(x,f)),e.push(new At(m,null)),n>js&&n--}return{lodMeshes:e,sizeLods:t}}function md(i,t,e){let n=new De(i,t,e);return n.texture.mapping=eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Js(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function _x(i,t,e){return new Le({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function vx(i,t,e){return new Le({name:"SphericalGaussianBlur",defines:{SAMPLES:px,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function gd(){return new Le({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function xd(){return new Le({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Ml(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function yx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ca||f===Pa)if(t.has(u)){let g=t.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new yl(g.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,g=f===Ca||f===Pa,x=f===ki||f===ls;if(g||x){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new tr(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return g&&b&&b.height>0||x&&b&&l(b)?(n===null&&(n=new tr(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Ca?u.mapping=ki:f===Pa&&(u.mapping=ls),u}function l(u){let f=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function bx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ji("WebGLRenderer: "+n+" extension not supported."),s}}}function Mx(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,x=0;if(g===void 0)return;if(f!==null){let b=f.array;x=f.version;for(let w=0,v=b.length;w<v;w+=3){let S=b[w+0],M=b[w+1],A=b[w+2];u.push(S,M,M,A,A,S)}}else{let b=g.array;x=g.version;for(let w=0,v=b.length/3-1;w<v;w+=3){let S=w+0,M=w+1,A=w+2;u.push(S,M,M,A,A,S)}}let m=new(g.count>=65535?wr:Er)(u,1);m.version=x;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Sx(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ex(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:$t("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function wx(i,t,e){let n=new WeakMap,s=new Re;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let T=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let v=a.attributes.position.count*w,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let M=new Float32Array(v*S*4*d),A=new Mr(M,v,S,d);A.type=Ln,A.needsUpdate=!0;let _=w*4;for(let P=0;P<d;P++){let L=m[P],F=p[P],O=b[P],D=v*S*4*P;for(let B=0;B<L.count;B++){let Y=B*_;f===!0&&(s.fromBufferAttribute(L,B),M[D+Y+0]=s.x,M[D+Y+1]=s.y,M[D+Y+2]=s.z,M[D+Y+3]=0),g===!0&&(s.fromBufferAttribute(F,B),M[D+Y+4]=s.x,M[D+Y+5]=s.y,M[D+Y+6]=s.z,M[D+Y+7]=0),x===!0&&(s.fromBufferAttribute(O,B),M[D+Y+8]=s.x,M[D+Y+9]=s.y,M[D+Y+10]=s.z,M[D+Y+11]=O.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new ut(v,S)},n.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Tx(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}function Rx(i,t,e,n,s,r){let o=new De(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new ie;c.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Zt([0,2,0,0,2,0],2));let h=new Vs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new At(c,h),u=new Ui(-1,1,1,-1,0,1),f=null,g=null,x=!1,m,p=null,b=[],w=!1;this.setSize=function(v,S){o.setSize(v,S),a!==null&&a.setSize(v,S),l!==null&&l.setSize(v,S);for(let M=0;M<b.length;M++){let A=b[M];A.setSize&&A.setSize(v,S)}},this.setEffects=function(v){b=v,w=b.length>0&&b[0].isRenderPass===!0;let S=o.width,M=o.height;b.length>0&&a===null&&(a=new De(S,M,{type:We,depthBuffer:!1,stencilBuffer:!1}),l=new De(S,M,{type:We,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<b.length;A++){let _=b[A];_.setSize&&_.setSize(S,M)}},this.begin=function(v,S){if(x||v.toneMapping===Gn&&b.length===0)return!1;if(p=S,S!==null){let M=S.width,A=S.height;(o.width!==M||o.height!==A)&&this.setSize(M,A)}return w===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=Gn,!0},this.hasRenderPass=function(){return w},this.end=function(v,S){v.toneMapping=m,x=!0;let M=o,A=a;for(let _=0;_<b.length;_++){let T=b[_];T.enabled!==!1&&(T.render(v,A,M,S),T.needsSwap!==!1&&(M=A,A=A===a?l:a))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,h.defines={},oe.getTransfer(f)===pe&&(h.defines.SRGB_TRANSFER="");let _=Ax[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(p),v.render(d,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}function er(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=_d[s];if(r===void 0&&(r=new Float32Array(s),_d[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Sl(i,t){let e=vd[t];e===void 0&&(e=new Int32Array(t),vd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Cx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Px(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2fv(this.addr,t),qe(e,t)}}function Ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;i.uniform3fv(this.addr,t),qe(e,t)}}function Lx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4fv(this.addr,t),qe(e,t)}}function Dx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;Md.set(n),i.uniformMatrix2fv(this.addr,!1,Md),qe(e,n)}}function Nx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;bd.set(n),i.uniformMatrix3fv(this.addr,!1,bd),qe(e,n)}}function Ux(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;yd.set(n),i.uniformMatrix4fv(this.addr,!1,yd),qe(e,n)}}function Fx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2iv(this.addr,t),qe(e,t)}}function Bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3iv(this.addr,t),qe(e,t)}}function kx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4iv(this.addr,t),qe(e,t)}}function zx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Hx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2uiv(this.addr,t),qe(e,t)}}function Gx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3uiv(this.addr,t),qe(e,t)}}function Vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4uiv(this.addr,t),qe(e,t)}}function Wx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ch.compareFunction=e.isReversedDepthBuffer()?xl:gl,r=ch):r=Od,e.setTexture2D(t||r,s)}function Xx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||kd,s)}function Yx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||zd,s)}function qx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bd,s)}function Zx(i){switch(i){case 5126:return Cx;case 35664:return Px;case 35665:return Ix;case 35666:return Lx;case 35674:return Dx;case 35675:return Nx;case 35676:return Ux;case 5124:case 35670:return Fx;case 35667:case 35671:return Ox;case 35668:case 35672:return Bx;case 35669:case 35673:return kx;case 5125:return zx;case 36294:return Hx;case 36295:return Gx;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Wx;case 35679:case 36299:case 36307:return Xx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return qx}}function $x(i,t){i.uniform1fv(this.addr,t)}function Kx(i,t){let e=er(t,this.size,2);i.uniform2fv(this.addr,e)}function Jx(i,t){let e=er(t,this.size,3);i.uniform3fv(this.addr,e)}function jx(i,t){let e=er(t,this.size,4);i.uniform4fv(this.addr,e)}function Qx(i,t){let e=er(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function t_(i,t){let e=er(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function e_(i,t){let e=er(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function n_(i,t){i.uniform1iv(this.addr,t)}function i_(i,t){i.uniform2iv(this.addr,t)}function s_(i,t){i.uniform3iv(this.addr,t)}function r_(i,t){i.uniform4iv(this.addr,t)}function o_(i,t){i.uniform1uiv(this.addr,t)}function a_(i,t){i.uniform2uiv(this.addr,t)}function l_(i,t){i.uniform3uiv(this.addr,t)}function c_(i,t){i.uniform4uiv(this.addr,t)}function h_(i,t,e){let n=this.cache,s=t.length,r=Sl(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=ch:o=Od;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function u_(i,t,e){let n=this.cache,s=t.length,r=Sl(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||kd,r[o])}function d_(i,t,e){let n=this.cache,s=t.length,r=Sl(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||zd,r[o])}function f_(i,t,e){let n=this.cache,s=t.length,r=Sl(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Bd,r[o])}function p_(i){switch(i){case 5126:return $x;case 35664:return Kx;case 35665:return Jx;case 35666:return jx;case 35674:return Qx;case 35675:return t_;case 35676:return e_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return s_;case 35669:case 35673:return r_;case 5125:return o_;case 36294:return a_;case 36295:return l_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return f_}}function Sd(i,t){i.seq.push(t),i.map[t.id]=t}function m_(i,t,e){let n=i.name,s=n.length;for(ah.lastIndex=0;;){let r=ah.exec(n),o=ah.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Sd(e,c===void 0?new hh(a,i,t):new uh(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new dh(a),Sd(e,d)),e=d}}}function Ed(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}function __(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function v_(i){oe._getMatrix(wd,oe.workingColorSpace,i);let t=`mat3( ${wd.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case yr:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Td(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+__(i.getShaderSource(t),a)}else return r}function y_(i,t){let e=v_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function M_(i,t){let e=b_[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function S_(){oe.getLuminanceCoefficients(vl);let i=vl.x.toFixed(4),t=vl.y.toFixed(4),e=vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(uo).join(`
`)}function w_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function T_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function uo(i){return i!==""}function Ad(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function fh(i){return i.replace(A_,C_)}function C_(i,t){let e=re[t];if(e===void 0){let n=R_.get(t);if(n!==void 0)e=re[n],qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return fh(e)}function Cd(i){return i.replace(P_,I_)}function I_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function D_(i){return L_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function U_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":N_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}function O_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":F_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function k_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":B_[i.combine]||"ENVMAP_BLENDING_NONE"}function z_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function H_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=D_(e),c=U_(e),h=O_(e),d=k_(e),u=z_(e),f=E_(e),g=w_(r),x=s.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(uo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(uo).join(`
`),p.length>0&&(p+=`
`)):(m=[Pd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uo).join(`
`),p=[Pd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?re.tonemapping_pars_fragment:"",e.toneMapping!==Gn?M_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,y_("linearToOutputTexel",e.outputColorSpace),S_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(uo).join(`
`)),o=fh(o),o=Ad(o,e),o=Rd(o,e),a=fh(a),a=Ad(a,e),a=Rd(a,e),o=Cd(o),a=Cd(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=b+m+o,v=b+p+a,S=Ed(s,s.VERTEX_SHADER,w),M=Ed(s,s.FRAGMENT_SHADER,v);s.attachShader(x,S),s.attachShader(x,M),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(L){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(x)||"",O=s.getShaderInfoLog(S)||"",D=s.getShaderInfoLog(M)||"",B=F.trim(),Y=O.trim(),W=D.trim(),nt=!0,X=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,M);else{let it=Td(s,S,"vertex"),lt=Td(s,M,"fragment");$t("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+it+`
`+lt)}else B!==""?qt("WebGLProgram: Program Info Log:",B):(Y===""||W==="")&&(X=!1);X&&(L.diagnostics={runnable:nt,programLog:B,vertexShader:{log:Y,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(S),s.deleteShader(M),_=new Qs(s,x),T=T_(s,x)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(x,g_)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=x_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=M,this}function V_(i){return i===Gi||i===ao||i===lo}function W_(i,t,e,n,s,r){let o=new Us,a=new ph,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,T,P,L,F,O){let D=L.fog,B=F.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,nt=t.get(_.envMap||Y,W),X=nt&&nt.mapping===eo?nt.image.height:null,it=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&qt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let lt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Mt=lt!==void 0?lt.length:0,yt=0;B.morphAttributes.position!==void 0&&(yt=1),B.morphAttributes.normal!==void 0&&(yt=2),B.morphAttributes.color!==void 0&&(yt=3);let st,mt,bt,G;if(it){let ee=si[it];st=ee.vertexShader,mt=ee.fragmentShader}else{st=_.vertexShader,mt=_.fragmentShader;let ee=a.getVertexShaderStage(_),ce=a.getFragmentShaderStage(_);a.update(_,ee,ce),bt=ee.id,G=ce.id}let j=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Bt=F.isInstancedMesh===!0,St=F.isBatchedMesh===!0,Vt=!!_.map,le=!!_.matcap,k=!!nt,K=!!_.aoMap,ot=!!_.lightMap,Q=!!_.bumpMap&&_.wireframe===!1,dt=!!_.normalMap,Lt=!!_.displacementMap,Dt=!!_.emissiveMap,Ut=!!_.metalnessMap,Yt=!!_.roughnessMap,U=_.anisotropy>0,fe=_.clearcoat>0,Qt=_.dispersion>0,I=_.retroreflectivity>0,y=_.iridescence>0,V=_.sheen>0,J=_.transmission>0,rt=U&&!!_.anisotropyMap,gt=fe&&!!_.clearcoatMap,_t=fe&&!!_.clearcoatNormalMap,at=fe&&!!_.clearcoatRoughnessMap,ht=y&&!!_.iridescenceMap,Et=y&&!!_.iridescenceThicknessMap,Gt=V&&!!_.sheenColorMap,Ct=V&&!!_.sheenRoughnessMap,Rt=!!_.specularMap,kt=!!_.specularColorMap,Xt=!!_.specularIntensityMap,N=J&&!!_.transmissionMap,C=J&&!!_.thicknessMap,et=!!_.gradientMap,q=!!_.alphaMap,ft=_.alphaTest>0,pt=!!_.alphaHash,ct=!!_.extensions,Tt=Gn;_.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Tt=i.toneMapping);let vt={shaderID:it,shaderType:_.type,shaderName:_.name,vertexShader:st,fragmentShader:mt,defines:_.defines,customVertexShaderID:bt,customFragmentShaderID:G,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:St,batchingColor:St&&F._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&F.instanceColor!==null,instancingMorph:Bt&&F.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Vt,matcap:le,envMap:k,envMapMode:k&&nt.mapping,envMapCubeUVHeight:X,aoMap:K,lightMap:ot,bumpMap:Q,normalMap:dt,displacementMap:Lt,emissiveMap:Dt,normalMapObjectSpace:dt&&_.normalMapType===Zu,normalMapTangentSpace:dt&&_.normalMapType===ml,packedNormalMap:dt&&_.normalMapType===ml&&V_(_.normalMap.format),metalnessMap:Ut,roughnessMap:Yt,anisotropy:U,anisotropyMap:rt,clearcoat:fe,clearcoatMap:gt,clearcoatNormalMap:_t,clearcoatRoughnessMap:at,dispersion:Qt,retroreflection:I,iridescence:y,iridescenceMap:ht,iridescenceThicknessMap:Et,sheen:V,sheenColorMap:Gt,sheenRoughnessMap:Ct,specularMap:Rt,specularColorMap:kt,specularIntensityMap:Xt,transmission:J,transmissionMap:N,thicknessMap:C,gradientMap:et,opaque:_.transparent===!1&&_.blending===Zs&&_.alphaToCoverage===!1,alphaMap:q,alphaTest:ft,alphaHash:pt,combine:_.combine,mapUv:Vt&&g(_.map.channel),aoMapUv:K&&g(_.aoMap.channel),lightMapUv:ot&&g(_.lightMap.channel),bumpMapUv:Q&&g(_.bumpMap.channel),normalMapUv:dt&&g(_.normalMap.channel),displacementMapUv:Lt&&g(_.displacementMap.channel),emissiveMapUv:Dt&&g(_.emissiveMap.channel),metalnessMapUv:Ut&&g(_.metalnessMap.channel),roughnessMapUv:Yt&&g(_.roughnessMap.channel),anisotropyMapUv:rt&&g(_.anisotropyMap.channel),clearcoatMapUv:gt&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:_t&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&g(_.sheenRoughnessMap.channel),specularMapUv:Rt&&g(_.specularMap.channel),specularColorMapUv:kt&&g(_.specularColorMap.channel),specularIntensityMapUv:Xt&&g(_.specularIntensityMap.channel),transmissionMapUv:N&&g(_.transmissionMap.channel),thicknessMapUv:C&&g(_.thicknessMap.channel),alphaMapUv:q&&g(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(dt||U),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(Vt||q),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&dt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:yt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Tt,decodeVideoTexture:Vt&&_.map.isVideoTexture===!0&&oe.getTransfer(_.map.colorSpace)===pe,decodeVideoTextureEmissive:Dt&&_.emissiveMap.isVideoTexture===!0&&oe.getTransfer(_.emissiveMap.colorSpace)===pe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ke,flipSided:_.side===Ve,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ct&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&_.extensions.multiDraw===!0||St)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return vt.vertexUv1s=l.has(1),vt.vertexUv2s=l.has(2),vt.vertexUv3s=l.has(3),l.clear(),vt}function m(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)T.push(P),T.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(T,_),b(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function b(_,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function w(_){let T=f[_.type],P;if(T){let L=si[T];P=gi.clone(L.uniforms)}else P=_.uniforms;return P}function v(_,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new H_(i,T,_,s),c.push(P),h.set(T,P)),P}function S(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function M(_){a.remove(_)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:w,acquireProgram:v,releaseProgram:S,releaseShaderCache:M,programs:c,dispose:A}}function X_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Y_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Id(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ld(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,x,m,p){let b=i[t];return b===void 0?(b={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:p},i[t]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=g,b.materialVariant=o(u),b.groupOrder=x,b.renderOrder=u.renderOrder,b.z=m,b.group=p),t++,b}function l(u,f,g,x,m,p,b){b.reversedDepth===!0&&(m=-m);let w=a(u,f,g,x,m,p);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):e.push(w)}function c(u,f,g,x,m,p){let b=a(u,f,g,x,m,p);g.transmission>0?n.unshift(b):g.transparent===!0?s.unshift(b):e.unshift(b)}function h(u,f){e.length>1&&e.sort(u||Y_),n.length>1&&n.sort(f||Id),s.length>1&&s.sort(f||Id)}function d(){for(let u=t,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function q_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Ld,i.set(n,[o])):s>=r.length?(o=new Ld,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Z_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new wt};break;case"SpotLight":e={position:new R,direction:new R,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function $_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}function J_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function j_(i){let t=new Z_,e=$_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new te,o=new te;function a(c){let h=0,d=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,b=0,w=0,v=0,S=0,M=0,A=0,_=0,T=0,P=0;c.sort(J_);for(let F=0,O=c.length;F<O;F++){let D=c[F],B=D.color,Y=D.intensity,W=D.distance,nt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Gi?nt=D.shadow.map.texture:nt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=B.r*Y,d+=B.g*Y,u+=B.b*Y;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],Y);P++}else if(D.isSunLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let it=D.shadow,lt=e.get(D);lt.shadowIntensity=it.intensity,lt.shadowBias=it.bias,lt.shadowNormalBias=it.normalBias,lt.shadowRadius=it.radius,lt.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),n.sunShadow[g]=lt,n.sunShadowMap[g]=nt;let Mt=it.getViewportCount();for(let yt=0;yt<Mt;yt++)n.sunShadowMatrix[x+yt]=it.getMatrix(yt),n.sunShadowCascade[x+yt]=it._cascadeData[yt];x+=Mt,g++}n.sun[f]=X,f++}else if(D.isDirectionalLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let it=D.shadow,lt=e.get(D);lt.shadowIntensity=it.intensity,lt.shadowBias=it.bias,lt.shadowNormalBias=it.normalBias,lt.shadowRadius=it.radius,lt.shadowMapSize=it.mapSize,n.directionalShadow[m]=lt,n.directionalShadowMap[m]=nt,n.directionalShadowMatrix[m]=D.shadow.matrix,S++}n.directional[m]=X,m++}else if(D.isSpotLight){let X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(B).multiplyScalar(Y),X.distance=W,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[b]=X;let it=D.shadow;if(D.map&&(n.spotLightMap[_]=D.map,_++,it.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[b]=it.matrix,D.castShadow){let lt=e.get(D);lt.shadowIntensity=it.intensity,lt.shadowBias=it.bias,lt.shadowNormalBias=it.normalBias,lt.shadowRadius=it.radius,lt.shadowMapSize=it.mapSize,n.spotShadow[b]=lt,n.spotShadowMap[b]=nt,A++}b++}else if(D.isRectAreaLight){let X=t.get(D);X.color.copy(B).multiplyScalar(Y),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[w]=X,w++}else if(D.isPointLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){let it=D.shadow,lt=e.get(D);lt.shadowIntensity=it.intensity,lt.shadowBias=it.bias,lt.shadowNormalBias=it.normalBias,lt.shadowRadius=it.radius,lt.shadowMapSize=it.mapSize,lt.shadowCameraNear=it.camera.near,lt.shadowCameraFar=it.camera.far,n.pointShadow[p]=lt,n.pointShadowMap[p]=nt,n.pointShadowMatrix[p]=D.shadow.matrix,M++}n.point[p]=X,p++}else if(D.isHemisphereLight){let X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(Y),X.groundColor.copy(D.groundColor).multiplyScalar(Y),n.hemi[v]=X,v++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==b||L.rectAreaLength!==w||L.hemiLength!==v||L.numSunShadows!==g||L.numDirectionalShadows!==S||L.numPointShadows!==M||L.numSpotShadows!==A||L.numSpotMaps!==_||L.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=m,n.spot.length=b,n.rectArea.length=w,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=b,L.rectAreaLength=w,L.hemiLength=v,L.numSunShadows=g,L.numDirectionalShadows=S,L.numPointShadows=M,L.numSpotShadows=A,L.numSpotMaps=_,L.numLightProbes=P,n.version=K_++)}function l(c,h){let d=0,u=0,f=0,g=0,x=0,m=0,p=h.matrixWorldInverse;for(let b=0,w=c.length;b<w;b++){let v=c[b];if(v.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(v.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function Dd(i){let t=new j_(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Q_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Dd(i),t.set(s,[a])):r>=o.length?(a=new Dd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function sv(i,t,e){let n=new Bs,s=new ut,r=new ut,o=new Re,a=new pa,l=new ma,c={},h=e.maxTextureSize,d={[Bi]:Ve,[Ve]:Bi,[ke]:ke},u=new Le({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:tv,fragmentShader:ev}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new ie;g.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new At(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rs;let p=this.type;this.render=function(M,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===wu&&(qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=rs);let T=i.getRenderTarget(),P=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),F=i.state;F.setBlending(In),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let O=p!==this.type;O&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(B=>B.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,B=M.length;D<B;D++){let Y=M[D],W=Y.shadow;if(W===void 0){qt("WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let nt=W.getFrameExtents();s.multiply(nt),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,W.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=X,W.map===null||O===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===qs){if(Y.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new De(s.x,s.y,{format:Gi,type:We,minFilter:nn,magFilter:nn,generateMipmaps:!1}),W.map.texture.name=Y.name+".shadowMap",W.map.depthTexture=new Ci(s.x,s.y,Ln),W.map.depthTexture.name=Y.name+".shadowMapDepth",W.map.depthTexture.format=$n,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Qe,W.map.depthTexture.magFilter=Qe}else Y.isPointLight?(W.map=new yl(s.x),W.map.depthTexture=new la(s.x,Vn)):(W.map=new De(s.x,s.y),W.map.depthTexture=new Ci(s.x,s.y,Vn)),W.map.depthTexture.name=Y.name+".shadowMap",W.map.depthTexture.format=$n,this.type===rs?(W.map.depthTexture.compareFunction=X?xl:gl,W.map.depthTexture.minFilter=nn,W.map.depthTexture.magFilter=nn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Qe,W.map.depthTexture.magFilter=Qe);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let it=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();Y.isPointLight!==!0&&W.updateMatrices(Y,_);for(let lt=0;lt<it;lt++){let Mt=W.getCamera(lt);if(Y.isPointLight){let yt=W.camera,st=W.matrix,mt=Y.distance||yt.far;mt!==yt.far&&(yt.far=mt,yt.updateProjectionMatrix()),ho.setFromMatrixPosition(Y.matrixWorld),yt.position.copy(ho),lh.copy(yt.position),lh.add(nv[lt]),yt.up.copy(iv[lt]),yt.lookAt(lh),yt.updateMatrixWorld(),st.makeTranslation(-ho.x,-ho.y,-ho.z),Nd.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Nd,yt.coordinateSystem,yt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,lt),i.clear();else{lt===0&&(i.setRenderTarget(W.map),i.clear());let yt=W.getViewport(lt);o.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),F.viewport(o)}n=W.getFrustum(lt),v(A,_,Mt,Y,this.type)}W.isPointLightShadow!==!0&&this.type===qs&&b(W,_),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,P,L)};function b(M,A){let _=t.update(x);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new De(s.x,s.y,{format:Gi,type:We}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(A,null,_,u,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(A,null,_,f,x,null)}function w(M,A,_,T){let P=null,L=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(L!==void 0)P=L;else if(P=_.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let F=P.uuid,O=A.uuid,D=c[F];D===void 0&&(D={},c[F]=D);let B=D[O];B===void 0&&(B=P.clone(),D[O]=B,A.addEventListener("dispose",S)),P=B}if(P.visible=A.visible,P.wireframe=A.wireframe,T===qs?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:d[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let F=i.properties.get(P);F.light=_}return P}function v(M,A,_,T,P){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&P===qs)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);let O=t.update(M),D=M.material;if(Array.isArray(D)){let B=O.groups;for(let Y=0,W=B.length;Y<W;Y++){let nt=B[Y],X=D[nt.materialIndex];if(X&&X.visible){let it=w(M,X,T,P);M.onBeforeShadow(i,M,A,_,O,it,nt),i.renderBufferDirect(_,null,O,it,M,nt),M.onAfterShadow(i,M,A,_,O,it,nt)}}}else if(D.visible){let B=w(M,D,T,P);M.onBeforeShadow(i,M,A,_,O,B,null),i.renderBufferDirect(_,null,O,B,M,null),M.onAfterShadow(i,M,A,_,O,B,null)}}let F=M.children;for(let O=0,D=F.length;O<D;O++)v(F[O],A,_,T,P)}function S(M){M.target.removeEventListener("dispose",S);for(let _ in c){let T=c[_],P=M.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function rv(i,t){function e(){let C=!1,et=new Re,q=null,ft=new Re(0,0,0,0);return{setMask:function(pt){q!==pt&&!C&&(i.colorMask(pt,pt,pt,pt),q=pt)},setLocked:function(pt){C=pt},setClear:function(pt,ct,Tt,vt,ee){ee===!0&&(pt*=vt,ct*=vt,Tt*=vt),et.set(pt,ct,Tt,vt),ft.equals(et)===!1&&(i.clearColor(pt,ct,Tt,vt),ft.copy(et))},reset:function(){C=!1,q=null,ft.set(-1,0,0,0)}}}function n(){let C=!1,et=!1,q=null,ft=null,pt=null;return{setReversed:function(ct){if(et!==ct){let Tt=t.get("EXT_clip_control");ct?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),et=ct;let vt=pt;pt=null,this.setClear(vt)}},getReversed:function(){return et},setTest:function(ct){ct?j(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(ct){q!==ct&&!C&&(i.depthMask(ct),q=ct)},setFunc:function(ct){if(et&&(ct=od[ct]),ft!==ct){switch(ct){case Zo:i.depthFunc(i.NEVER);break;case $o:i.depthFunc(i.ALWAYS);break;case Ko:i.depthFunc(i.LESS);break;case Is:i.depthFunc(i.LEQUAL);break;case Jo:i.depthFunc(i.EQUAL);break;case jo:i.depthFunc(i.GEQUAL);break;case Qo:i.depthFunc(i.GREATER);break;case ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=ct}},setLocked:function(ct){C=ct},setClear:function(ct){pt!==ct&&(pt=ct,et&&(ct=1-ct),i.clearDepth(ct))},reset:function(){C=!1,q=null,ft=null,pt=null,et=!1}}}function s(){let C=!1,et=null,q=null,ft=null,pt=null,ct=null,Tt=null,vt=null,ee=null;return{setTest:function(ce){C||(ce?j(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(ce){et!==ce&&!C&&(i.stencilMask(ce),et=ce)},setFunc:function(ce,en,Xn){(q!==ce||ft!==en||pt!==Xn)&&(i.stencilFunc(ce,en,Xn),q=ce,ft=en,pt=Xn)},setOp:function(ce,en,Xn){(ct!==ce||Tt!==en||vt!==Xn)&&(i.stencilOp(ce,en,Xn),ct=ce,Tt=en,vt=Xn)},setLocked:function(ce){C=ce},setClear:function(ce){ee!==ce&&(i.clearStencil(ce),ee=ce)},reset:function(){C=!1,et=null,q=null,ft=null,pt=null,ct=null,Tt=null,vt=null,ee=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],x=null,m=!1,p=null,b=null,w=null,v=null,S=null,M=null,A=null,_=new wt(0,0,0),T=0,P=!1,L=null,F=null,O=null,D=null,B=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,nt=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=nt>=1):X.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=nt>=2);let it=null,lt={},Mt=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),st=new Re().fromArray(Mt),mt=new Re().fromArray(yt);function bt(C,et,q,ft){let pt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(C,ct),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Tt=0;Tt<q;Tt++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(et,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(et+Tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return ct}let G={};G[i.TEXTURE_2D]=bt(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=bt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=bt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=bt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc(Is),Q(!1),dt(Pc),j(i.CULL_FACE),K(In);function j(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function xt(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function Bt(C,et){return u[C]!==et?(i.bindFramebuffer(C,et),u[C]=et,C===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=et),C===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=et),!0):!1}function St(C,et){let q=g,ft=!1;if(C){q=f.get(et),q===void 0&&(q=[],f.set(et,q));let pt=C.textures;if(q.length!==pt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Tt=pt.length;ct<Tt;ct++)q[ct]=i.COLOR_ATTACHMENT0+ct;q.length=pt.length,ft=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,ft=!0);ft&&i.drawBuffers(q)}function Vt(C){return x!==C?(i.useProgram(C),x=C,!0):!1}let le={[os]:i.FUNC_ADD,[Au]:i.FUNC_SUBTRACT,[Ru]:i.FUNC_REVERSE_SUBTRACT};le[Cu]=i.MIN,le[Pu]=i.MAX;let k={[Iu]:i.ZERO,[Lu]:i.ONE,[Du]:i.SRC_COLOR,[Dc]:i.SRC_ALPHA,[ku]:i.SRC_ALPHA_SATURATE,[Ou]:i.DST_COLOR,[Uu]:i.DST_ALPHA,[Nu]:i.ONE_MINUS_SRC_COLOR,[Nc]:i.ONE_MINUS_SRC_ALPHA,[Bu]:i.ONE_MINUS_DST_COLOR,[Fu]:i.ONE_MINUS_DST_ALPHA,[zu]:i.CONSTANT_COLOR,[Hu]:i.ONE_MINUS_CONSTANT_COLOR,[Gu]:i.CONSTANT_ALPHA,[Vu]:i.ONE_MINUS_CONSTANT_ALPHA};function K(C,et,q,ft,pt,ct,Tt,vt,ee,ce){if(C===In){m===!0&&(xt(i.BLEND),m=!1);return}if(m===!1&&(j(i.BLEND),m=!0),C!==Tu){if(C!==p||ce!==P){if((b!==os||S!==os)&&(i.blendEquation(i.FUNC_ADD),b=os,S=os),ce)switch(C){case Zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ln:i.blendFunc(i.ONE,i.ONE);break;case Ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$t("WebGLState: Invalid blending: ",C);break}else switch(C){case Zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ln:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ic:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lc:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",C);break}w=null,v=null,M=null,A=null,_.set(0,0,0),T=0,p=C,P=ce}return}pt=pt||et,ct=ct||q,Tt=Tt||ft,(et!==b||pt!==S)&&(i.blendEquationSeparate(le[et],le[pt]),b=et,S=pt),(q!==w||ft!==v||ct!==M||Tt!==A)&&(i.blendFuncSeparate(k[q],k[ft],k[ct],k[Tt]),w=q,v=ft,M=ct,A=Tt),(vt.equals(_)===!1||ee!==T)&&(i.blendColor(vt.r,vt.g,vt.b,ee),_.copy(vt),T=ee),p=C,P=!1}function ot(C,et){C.side===ke?xt(i.CULL_FACE):j(i.CULL_FACE);let q=C.side===Ve;et&&(q=!q),Q(q),C.blending===Zs&&C.transparent===!1?K(In):K(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);let ft=C.stencilWrite;a.setTest(ft),ft&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Dt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(C){L!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),L=C)}function dt(C){C!==Su?(j(i.CULL_FACE),C!==F&&(C===Pc?i.cullFace(i.BACK):C===Eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),F=C}function Lt(C){C!==O&&(W&&i.lineWidth(C),O=C)}function Dt(C,et,q){C?(j(i.POLYGON_OFFSET_FILL),(D!==et||B!==q)&&(D=et,B=q,o.getReversed()&&(et=-et),i.polygonOffset(et,q))):xt(i.POLYGON_OFFSET_FILL)}function Ut(C){C?j(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function Yt(C){C===void 0&&(C=i.TEXTURE0+Y-1),it!==C&&(i.activeTexture(C),it=C)}function U(C,et,q){q===void 0&&(it===null?q=i.TEXTURE0+Y-1:q=it);let ft=lt[q];ft===void 0&&(ft={type:void 0,texture:void 0},lt[q]=ft),(ft.type!==C||ft.texture!==et)&&(it!==q&&(i.activeTexture(q),it=q),i.bindTexture(C,et||G[C]),ft.type=C,ft.texture=et)}function fe(){let C=lt[it];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Qt(){try{i.compressedTexImage2D(...arguments)}catch(C){$t("WebGLState:",C)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(C){$t("WebGLState:",C)}}function y(){try{i.texSubImage2D(...arguments)}catch(C){$t("WebGLState:",C)}}function V(){try{i.texSubImage3D(...arguments)}catch(C){$t("WebGLState:",C)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(C){$t("WebGLState:",C)}}function rt(){try{i.compressedTexSubImage3D(...arguments)}catch(C){$t("WebGLState:",C)}}function gt(){try{i.texStorage2D(...arguments)}catch(C){$t("WebGLState:",C)}}function _t(){try{i.texStorage3D(...arguments)}catch(C){$t("WebGLState:",C)}}function at(){try{i.texImage2D(...arguments)}catch(C){$t("WebGLState:",C)}}function ht(){try{i.texImage3D(...arguments)}catch(C){$t("WebGLState:",C)}}function Et(C){return d[C]!==void 0?d[C]:i.getParameter(C)}function Gt(C,et){d[C]!==et&&(i.pixelStorei(C,et),d[C]=et)}function Ct(C){st.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),st.copy(C))}function Rt(C){mt.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),mt.copy(C))}function kt(C,et){let q=c.get(et);q===void 0&&(q=new WeakMap,c.set(et,q));let ft=q.get(C);ft===void 0&&(ft=i.getUniformBlockIndex(et,C.name),q.set(C,ft))}function Xt(C,et){let ft=c.get(et).get(C);l.get(et)!==ft&&(i.uniformBlockBinding(et,ft,C.__bindingPointIndex),l.set(et,ft))}function N(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},it=null,lt={},u={},f=new WeakMap,g=[],x=null,m=!1,p=null,b=null,w=null,v=null,S=null,M=null,A=null,_=new wt(0,0,0),T=0,P=!1,L=null,F=null,O=null,D=null,B=null,st.set(0,0,i.canvas.width,i.canvas.height),mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:xt,bindFramebuffer:Bt,drawBuffers:St,useProgram:Vt,setBlending:K,setMaterial:ot,setFlipSided:Q,setCullFace:dt,setLineWidth:Lt,setPolygonOffset:Dt,setScissorTest:Ut,activeTexture:Yt,bindTexture:U,unbindTexture:fe,compressedTexImage2D:Qt,compressedTexImage3D:I,texImage2D:at,texImage3D:ht,pixelStorei:Gt,getParameter:Et,updateUBOMapping:kt,uniformBlockBinding:Xt,texStorage2D:gt,texStorage3D:_t,texSubImage2D:y,texSubImage3D:V,compressedTexSubImage2D:J,compressedTexSubImage3D:rt,scissor:Ct,viewport:Rt,reset:N}}function ov(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,y){return g?new OffscreenCanvas(I,y):br("canvas")}function m(I,y,V){let J=1,rt=Qt(I);if((rt.width>V||rt.height>V)&&(J=V/Math.max(rt.width,rt.height)),J<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let gt=Math.floor(J*rt.width),_t=Math.floor(J*rt.height);u===void 0&&(u=x(gt,_t));let at=y?x(gt,_t):u;return at.width=gt,at.height=_t,at.getContext("2d").drawImage(I,0,0,gt,_t),qt("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+gt+"x"+_t+")."),at}else return"data"in I&&qt("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),I;return I}function p(I){return I.generateMipmaps}function b(I){i.generateMipmap(I)}function w(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(I,y,V,J,rt,gt=!1){if(I!==null){if(i[I]!==void 0)return i[I];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let _t;J&&(_t=t.get("EXT_texture_norm16"),_t||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let at=y;if(y===i.RED&&(V===i.FLOAT&&(at=i.R32F),V===i.HALF_FLOAT&&(at=i.R16F),V===i.UNSIGNED_BYTE&&(at=i.R8),V===i.UNSIGNED_SHORT&&_t&&(at=_t.R16_EXT),V===i.SHORT&&_t&&(at=_t.R16_SNORM_EXT)),y===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(at=i.R8UI),V===i.UNSIGNED_SHORT&&(at=i.R16UI),V===i.UNSIGNED_INT&&(at=i.R32UI),V===i.BYTE&&(at=i.R8I),V===i.SHORT&&(at=i.R16I),V===i.INT&&(at=i.R32I)),y===i.RG&&(V===i.FLOAT&&(at=i.RG32F),V===i.HALF_FLOAT&&(at=i.RG16F),V===i.UNSIGNED_BYTE&&(at=i.RG8),V===i.UNSIGNED_SHORT&&_t&&(at=_t.RG16_EXT),V===i.SHORT&&_t&&(at=_t.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(at=i.RG8UI),V===i.UNSIGNED_SHORT&&(at=i.RG16UI),V===i.UNSIGNED_INT&&(at=i.RG32UI),V===i.BYTE&&(at=i.RG8I),V===i.SHORT&&(at=i.RG16I),V===i.INT&&(at=i.RG32I)),y===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(at=i.RGB8UI),V===i.UNSIGNED_SHORT&&(at=i.RGB16UI),V===i.UNSIGNED_INT&&(at=i.RGB32UI),V===i.BYTE&&(at=i.RGB8I),V===i.SHORT&&(at=i.RGB16I),V===i.INT&&(at=i.RGB32I)),y===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(at=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(at=i.RGBA16UI),V===i.UNSIGNED_INT&&(at=i.RGBA32UI),V===i.BYTE&&(at=i.RGBA8I),V===i.SHORT&&(at=i.RGBA16I),V===i.INT&&(at=i.RGBA32I)),y===i.RGB&&(V===i.UNSIGNED_SHORT&&_t&&(at=_t.RGB16_EXT),V===i.SHORT&&_t&&(at=_t.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(at=i.R11F_G11F_B10F)),y===i.RGBA){let ht=gt?yr:oe.getTransfer(rt);V===i.FLOAT&&(at=i.RGBA32F),V===i.HALF_FLOAT&&(at=i.RGBA16F),V===i.UNSIGNED_BYTE&&(at=ht===pe?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&_t&&(at=_t.RGBA16_EXT),V===i.SHORT&&_t&&(at=_t.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function S(I,y){let V;return I?y===null||y===Vn||y===Ks?V=i.DEPTH24_STENCIL8:y===Ln?V=i.DEPTH32F_STENCIL8:y===$s&&(V=i.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Vn||y===Ks?V=i.DEPTH_COMPONENT24:y===Ln?V=i.DEPTH_COMPONENT32F:y===$s&&(V=i.DEPTH_COMPONENT16),V}function M(I,y){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==Qe&&I.minFilter!==nn?Math.log2(Math.max(y.width,y.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?y.mipmaps.length:1}function A(I){let y=I.target;y.removeEventListener("dispose",A),T(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function _(I){let y=I.target;y.removeEventListener("dispose",_),L(y)}function T(I){let y=n.get(I);if(y.__webglInit===void 0)return;let V=I.source,J=f.get(V);if(J){let rt=J[y.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&P(I),Object.keys(J).length===0&&f.delete(V)}n.remove(I)}function P(I){let y=n.get(I);i.deleteTexture(y.__webglTexture);let V=I.source,J=f.get(V);delete J[y.__cacheKey],o.memory.textures--}function L(I){let y=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let rt=0;rt<y.__webglFramebuffer[J].length;rt++)i.deleteFramebuffer(y.__webglFramebuffer[J][rt]);else i.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)i.deleteFramebuffer(y.__webglFramebuffer[J]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let V=I.textures;for(let J=0,rt=V.length;J<rt;J++){let gt=n.get(V[J]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(V[J])}n.remove(I)}let F=0;function O(){F=0}function D(){return F}function B(I){F=I}function Y(){let I=F;return I>=s.maxTextures&&qt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,I}function W(I){let y=[];return y.push(I.wrapS),y.push(I.wrapT),y.push(I.wrapR||0),y.push(I.magFilter),y.push(I.minFilter),y.push(I.anisotropy),y.push(I.internalFormat),y.push(I.format),y.push(I.type),y.push(I.generateMipmaps),y.push(I.premultiplyAlpha),y.push(I.flipY),y.push(I.unpackAlignment),y.push(I.colorSpace),y.join()}function nt(I,y){let V=n.get(I);if(I.isVideoTexture&&U(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&V.__version!==I.version){let J=I.image;if(J===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(V,I,y);return}}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+y)}function X(I,y){let V=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){xt(V,I,y);return}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+y)}function it(I,y){let V=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){xt(V,I,y);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+y)}function lt(I,y){let V=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&V.__version!==I.version){Bt(V,I,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+y)}let Mt={[an]:i.REPEAT,[je]:i.CLAMP_TO_EDGE,[ea]:i.MIRRORED_REPEAT},yt={[Qe]:i.NEAREST,[Yu]:i.NEAREST_MIPMAP_NEAREST,[no]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[Ia]:i.LINEAR_MIPMAP_NEAREST,[zi]:i.LINEAR_MIPMAP_LINEAR},st={[Ku]:i.NEVER,[ed]:i.ALWAYS,[Ju]:i.LESS,[gl]:i.LEQUAL,[ju]:i.EQUAL,[xl]:i.GEQUAL,[Qu]:i.GREATER,[td]:i.NOTEQUAL};function mt(I,y){if(y.type===Ln&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===nn||y.magFilter===Ia||y.magFilter===no||y.magFilter===zi||y.minFilter===nn||y.minFilter===Ia||y.minFilter===no||y.minFilter===zi)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Mt[y.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Mt[y.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Mt[y.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,yt[y.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,yt[y.minFilter]),y.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,st[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Qe||y.minFilter!==no&&y.minFilter!==zi||y.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function bt(I,y){let V=!1;I.__webglInit===void 0&&(I.__webglInit=!0,y.addEventListener("dispose",A));let J=y.source,rt=f.get(J);rt===void 0&&(rt={},f.set(J,rt));let gt=W(y);if(gt!==I.__cacheKey){rt[gt]===void 0&&(rt[gt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),rt[gt].usedTimes++;let _t=rt[I.__cacheKey];_t!==void 0&&(rt[I.__cacheKey].usedTimes--,_t.usedTimes===0&&P(y)),I.__cacheKey=gt,I.__webglTexture=rt[gt].texture}return V}function G(I,y,V){return Math.floor(Math.floor(I/V)/y)}function j(I,y,V,J){let gt=I.updateRanges;if(gt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,V,J,y.data);else{gt.sort((Gt,Ct)=>Gt.start-Ct.start);let _t=0;for(let Gt=1;Gt<gt.length;Gt++){let Ct=gt[_t],Rt=gt[Gt],kt=Ct.start+Ct.count,Xt=G(Rt.start,y.width,4),N=G(Ct.start,y.width,4);Rt.start<=kt+1&&Xt===N&&G(Rt.start+Rt.count-1,y.width,4)===Xt?Ct.count=Math.max(Ct.count,Rt.start+Rt.count-Ct.start):(++_t,gt[_t]=Rt)}gt.length=_t+1;let at=e.getParameter(i.UNPACK_ROW_LENGTH),ht=e.getParameter(i.UNPACK_SKIP_PIXELS),Et=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Gt=0,Ct=gt.length;Gt<Ct;Gt++){let Rt=gt[Gt],kt=Math.floor(Rt.start/4),Xt=Math.ceil(Rt.count/4),N=kt%y.width,C=Math.floor(kt/y.width),et=Xt,q=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,N),e.pixelStorei(i.UNPACK_SKIP_ROWS,C),e.texSubImage2D(i.TEXTURE_2D,0,N,C,et,q,V,J,y.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,at),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(i.UNPACK_SKIP_ROWS,Et)}}function xt(I,y,V){let J=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=i.TEXTURE_3D);let rt=bt(I,y),gt=y.source;e.bindTexture(J,I.__webglTexture,i.TEXTURE0+V);let _t=n.get(gt);if(gt.version!==_t.__version||rt===!0){if(e.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let q=oe.getPrimaries(oe.workingColorSpace),ft=y.colorSpace===Xe?null:oe.getPrimaries(y.colorSpace),pt=y.colorSpace===Xe||q===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let ht=m(y.image,!1,s.maxTextureSize);ht=fe(y,ht);let Et=r.convert(y.format,y.colorSpace),Gt=r.convert(y.type),Ct=v(y.internalFormat,Et,Gt,y.normalized,y.colorSpace,y.isVideoTexture);mt(J,y);let Rt,kt=y.mipmaps,Xt=y.isVideoTexture!==!0,N=_t.__version===void 0||rt===!0,C=gt.dataReady,et=M(y,ht);if(y.isDepthTexture)Ct=S(y.format===Hi,y.type),N&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Ct,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,Ct,ht.width,ht.height,0,Et,Gt,null));else if(y.isDataTexture)if(kt.length>0){Xt&&N&&e.texStorage2D(i.TEXTURE_2D,et,Ct,kt[0].width,kt[0].height);for(let q=0,ft=kt.length;q<ft;q++)Rt=kt[q],Xt?C&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Rt.width,Rt.height,Et,Gt,Rt.data):e.texImage2D(i.TEXTURE_2D,q,Ct,Rt.width,Rt.height,0,Et,Gt,Rt.data);y.generateMipmaps=!1}else Xt?(N&&e.texStorage2D(i.TEXTURE_2D,et,Ct,ht.width,ht.height),C&&j(y,ht,Et,Gt)):e.texImage2D(i.TEXTURE_2D,0,Ct,ht.width,ht.height,0,Et,Gt,ht.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Xt&&N&&e.texStorage3D(i.TEXTURE_2D_ARRAY,et,Ct,kt[0].width,kt[0].height,ht.depth);for(let q=0,ft=kt.length;q<ft;q++)if(Rt=kt[q],y.format!==vn)if(Et!==null)if(Xt){if(C)if(y.layerUpdates.size>0){let pt=Kc(Rt.width,Rt.height,y.format,y.type);for(let ct of y.layerUpdates){let Tt=Rt.data.subarray(ct*pt/Rt.data.BYTES_PER_ELEMENT,(ct+1)*pt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,ct,Rt.width,Rt.height,1,Et,Tt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Rt.width,Rt.height,ht.depth,Et,Rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Ct,Rt.width,Rt.height,ht.depth,0,Rt.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?C&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Rt.width,Rt.height,ht.depth,Et,Gt,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Ct,Rt.width,Rt.height,ht.depth,0,Et,Gt,Rt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Xt&&N&&e.texStorage2D(i.TEXTURE_2D,et,Ct,kt[0].width,kt[0].height);for(let q=0,ft=kt.length;q<ft;q++)Rt=kt[q],y.format!==vn?Et!==null?Xt?C&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,Rt.width,Rt.height,Et,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Ct,Rt.width,Rt.height,0,Rt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?C&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Rt.width,Rt.height,Et,Gt,Rt.data):e.texImage2D(i.TEXTURE_2D,q,Ct,Rt.width,Rt.height,0,Et,Gt,Rt.data)}else if(y.isDataArrayTexture)if(Xt){if(N&&e.texStorage3D(i.TEXTURE_2D_ARRAY,et,Ct,ht.width,ht.height,ht.depth),C)if(y.layerUpdates.size>0){let q=Kc(ht.width,ht.height,y.format,y.type);for(let ft of y.layerUpdates){let pt=ht.data.subarray(ft*q/ht.data.BYTES_PER_ELEMENT,(ft+1)*q/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ft,ht.width,ht.height,1,Et,Gt,pt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Et,Gt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,ht.width,ht.height,ht.depth,0,Et,Gt,ht.data);else if(y.isData3DTexture)Xt?(N&&e.texStorage3D(i.TEXTURE_3D,et,Ct,ht.width,ht.height,ht.depth),C&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Et,Gt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,ht.width,ht.height,ht.depth,0,Et,Gt,ht.data);else if(y.isFramebufferTexture){if(N)if(Xt)e.texStorage2D(i.TEXTURE_2D,et,Ct,ht.width,ht.height);else{let q=ht.width,ft=ht.height;for(let pt=0;pt<et;pt++)e.texImage2D(i.TEXTURE_2D,pt,Ct,q,ft,0,Et,Gt,null),q>>=1,ft>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let q=i.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),ht.parentNode!==q){q.appendChild(ht),d.add(y),q.onpaint=ft=>{let pt=ft.changedElements;for(let ct of d)pt.includes(ct.image)&&(ct.needsUpdate=!0)},q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ht);else{let pt=i.RGBA,ct=i.RGBA,Tt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pt,ct,Tt,ht)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(kt.length>0){if(Xt&&N){let q=Qt(kt[0]);e.texStorage2D(i.TEXTURE_2D,et,Ct,q.width,q.height)}for(let q=0,ft=kt.length;q<ft;q++)Rt=kt[q],Xt?C&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Et,Gt,Rt):e.texImage2D(i.TEXTURE_2D,q,Ct,Et,Gt,Rt);y.generateMipmaps=!1}else if(Xt){if(N){let q=Qt(ht);e.texStorage2D(i.TEXTURE_2D,et,Ct,q.width,q.height)}C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Gt,ht)}else e.texImage2D(i.TEXTURE_2D,0,Ct,Et,Gt,ht);p(y)&&b(J),_t.__version=gt.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function Bt(I,y,V){if(y.image.length!==6)return;let J=bt(I,y),rt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+V);let gt=n.get(rt);if(rt.version!==gt.__version||J===!0){e.activeTexture(i.TEXTURE0+V);let _t=oe.getPrimaries(oe.workingColorSpace),at=y.colorSpace===Xe?null:oe.getPrimaries(y.colorSpace),ht=y.colorSpace===Xe||_t===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Et=y.isCompressedTexture||y.image[0].isCompressedTexture,Gt=y.image[0]&&y.image[0].isDataTexture,Ct=[];for(let ct=0;ct<6;ct++)!Et&&!Gt?Ct[ct]=m(y.image[ct],!0,s.maxCubemapSize):Ct[ct]=Gt?y.image[ct].image:y.image[ct],Ct[ct]=fe(y,Ct[ct]);let Rt=Ct[0],kt=r.convert(y.format,y.colorSpace),Xt=r.convert(y.type),N=v(y.internalFormat,kt,Xt,y.normalized,y.colorSpace),C=y.isVideoTexture!==!0,et=gt.__version===void 0||J===!0,q=rt.dataReady,ft=M(y,Rt);mt(i.TEXTURE_CUBE_MAP,y);let pt;if(Et){C&&et&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,N,Rt.width,Rt.height);for(let ct=0;ct<6;ct++){pt=Ct[ct].mipmaps;for(let Tt=0;Tt<pt.length;Tt++){let vt=pt[Tt];y.format!==vn?kt!==null?C?q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt,0,0,vt.width,vt.height,kt,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt,N,vt.width,vt.height,0,vt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt,0,0,vt.width,vt.height,kt,Xt,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt,N,vt.width,vt.height,0,kt,Xt,vt.data)}}}else{if(pt=y.mipmaps,C&&et){pt.length>0&&ft++;let ct=Qt(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,N,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Gt){C?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Ct[ct].width,Ct[ct].height,kt,Xt,Ct[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,N,Ct[ct].width,Ct[ct].height,0,kt,Xt,Ct[ct].data);for(let Tt=0;Tt<pt.length;Tt++){let ee=pt[Tt].image[ct].image;C?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt+1,0,0,ee.width,ee.height,kt,Xt,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt+1,N,ee.width,ee.height,0,kt,Xt,ee.data)}}else{C?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,kt,Xt,Ct[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,N,kt,Xt,Ct[ct]);for(let Tt=0;Tt<pt.length;Tt++){let vt=pt[Tt];C?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt+1,0,0,kt,Xt,vt.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt+1,N,kt,Xt,vt.image[ct])}}}p(y)&&b(i.TEXTURE_CUBE_MAP),gt.__version=rt.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function St(I,y,V,J,rt,gt){let _t=r.convert(V.format,V.colorSpace),at=r.convert(V.type),ht=v(V.internalFormat,_t,at,V.normalized,V.colorSpace),Et=n.get(y),Gt=n.get(V);if(Gt.__renderTarget=y,!Et.__hasExternalTextures){let Ct=Math.max(1,y.width>>gt),Rt=Math.max(1,y.height>>gt);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,gt,ht,Ct,Rt,y.depth,0,_t,at,null):e.texImage2D(rt,gt,ht,Ct,Rt,0,_t,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),Yt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,rt,Gt.__webglTexture,0,Ut(y)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,rt,Gt.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(I,y,V){if(i.bindRenderbuffer(i.RENDERBUFFER,I),y.depthBuffer){let J=y.depthTexture,rt=J&&J.isDepthTexture?J.type:null,gt=S(y.stencilBuffer,rt),_t=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Yt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut(y),gt,y.width,y.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut(y),gt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,gt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,I)}else{let J=y.textures;for(let rt=0;rt<J.length;rt++){let gt=J[rt],_t=r.convert(gt.format,gt.colorSpace),at=r.convert(gt.type),ht=v(gt.internalFormat,_t,at,gt.normalized,gt.colorSpace);Yt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut(y),ht,y.width,y.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut(y),ht,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ht,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function le(I,y,V){let J=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let rt=n.get(y.depthTexture);if(rt.__renderTarget=y,(!rt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J){if(rt.__webglInit===void 0&&(rt.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),rt.__webglTexture===void 0){rt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),mt(i.TEXTURE_CUBE_MAP,y.depthTexture);let Et=r.convert(y.depthTexture.format),Gt=r.convert(y.depthTexture.type),Ct;y.depthTexture.format===$n?Ct=i.DEPTH_COMPONENT24:y.depthTexture.format===Hi&&(Ct=i.DEPTH24_STENCIL8);for(let Rt=0;Rt<6;Rt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Ct,y.width,y.height,0,Et,Gt,null)}}else nt(y.depthTexture,0);let gt=rt.__webglTexture,_t=Ut(y),at=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,ht=y.depthTexture.format===Hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===$n)Yt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,at,gt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,ht,at,gt,0);else if(y.depthTexture.format===Hi)Yt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,at,gt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,ht,at,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function k(I){let y=n.get(I),V=I.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==I.depthTexture){let J=I.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){let rt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",rt)};J.addEventListener("dispose",rt),y.__depthDisposeCallback=rt}y.__boundDepthTexture=J}if(I.depthTexture&&!y.__autoAllocateDepthBuffer)if(V)for(let J=0;J<6;J++)le(y.__webglFramebuffer[J],I,J);else{let J=I.texture.mipmaps;J&&J.length>0?le(y.__webglFramebuffer[0],I,0):le(y.__webglFramebuffer,I,0)}else if(V){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=i.createRenderbuffer(),Vt(y.__webglDepthbuffer[J],I,!1);else{let rt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=y.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,gt)}}else{let J=I.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Vt(y.__webglDepthbuffer,I,!1);else{let rt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,gt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function K(I,y,V){let J=n.get(I);y!==void 0&&St(J.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&k(I)}function ot(I){let y=I.texture,V=n.get(I),J=n.get(y);I.addEventListener("dispose",_);let rt=I.textures,gt=I.isWebGLCubeRenderTarget===!0,_t=rt.length>1;if(_t||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=y.version,o.memory.textures++),gt){V.__webglFramebuffer=[];for(let at=0;at<6;at++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[at]=[];for(let ht=0;ht<y.mipmaps.length;ht++)V.__webglFramebuffer[at][ht]=i.createFramebuffer()}else V.__webglFramebuffer[at]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let at=0;at<y.mipmaps.length;at++)V.__webglFramebuffer[at]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(_t)for(let at=0,ht=rt.length;at<ht;at++){let Et=n.get(rt[at]);Et.__webglTexture===void 0&&(Et.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Yt(I)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let at=0;at<rt.length;at++){let ht=rt[at];V.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[at]);let Et=r.convert(ht.format,ht.colorSpace),Gt=r.convert(ht.type),Ct=v(ht.internalFormat,Et,Gt,ht.normalized,ht.colorSpace,I.isXRRenderTarget===!0),Rt=Ut(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,Ct,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,V.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Vt(V.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),mt(i.TEXTURE_CUBE_MAP,y);for(let at=0;at<6;at++)if(y.mipmaps&&y.mipmaps.length>0)for(let ht=0;ht<y.mipmaps.length;ht++)St(V.__webglFramebuffer[at][ht],I,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ht);else St(V.__webglFramebuffer[at],I,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(y)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let at=0,ht=rt.length;at<ht;at++){let Et=rt[at],Gt=n.get(Et),Ct=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ct=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ct,Gt.__webglTexture),mt(Ct,Et),St(V.__webglFramebuffer,I,Et,i.COLOR_ATTACHMENT0+at,Ct,0),p(Et)&&b(Ct)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(at=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,J.__webglTexture),mt(at,y),y.mipmaps&&y.mipmaps.length>0)for(let ht=0;ht<y.mipmaps.length;ht++)St(V.__webglFramebuffer[ht],I,y,i.COLOR_ATTACHMENT0,at,ht);else St(V.__webglFramebuffer,I,y,i.COLOR_ATTACHMENT0,at,0);p(y)&&b(at),e.unbindTexture()}I.depthBuffer&&k(I)}function Q(I){let y=I.textures;for(let V=0,J=y.length;V<J;V++){let rt=y[V];if(p(rt)){let gt=w(I),_t=n.get(rt).__webglTexture;e.bindTexture(gt,_t),b(gt),e.unbindTexture()}}}let dt=[],Lt=[];function Dt(I){if(I.samples>0){if(Yt(I)===!1){let y=I.textures,V=I.width,J=I.height,rt=i.COLOR_BUFFER_BIT,gt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(I),at=y.length>1;if(at)for(let Et=0;Et<y.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);let ht=I.texture.mipmaps;ht&&ht.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Et=0;Et<y.length;Et++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Et]);let Gt=n.get(y[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,V,J,0,0,V,J,rt,i.NEAREST),l===!0&&(dt.length=0,Lt.length=0,dt.push(i.COLOR_ATTACHMENT0+Et),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(dt.push(gt),Lt.push(gt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Lt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let Et=0;Et<y.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Et]);let Gt=n.get(y[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let y=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ut(I){return Math.min(s.maxSamples,I.samples)}function Yt(I){let y=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function U(I){let y=o.render.frame;h.get(I)!==y&&(h.set(I,y),I.update())}function fe(I,y){let V=I.colorSpace,J=I.format,rt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||V!==vr&&V!==Xe&&(oe.getTransfer(V)===pe?(J!==vn||rt!==_n)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",V)),y}function Qt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=O,this.getTextureUnits=D,this.setTextureUnits=B,this.setTexture2D=nt,this.setTexture2DArray=X,this.setTexture3D=it,this.setTextureCube=lt,this.rebindTextures=K,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=k,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function av(i,t){function e(n,s=Xe){let r,o=oe.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===Da)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Na)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Oc)return i.BYTE;if(n===Bc)return i.SHORT;if(n===$s)return i.UNSIGNED_SHORT;if(n===La)return i.INT;if(n===Vn)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===We)return i.HALF_FLOAT;if(n===Hc)return i.ALPHA;if(n===Gc)return i.RGB;if(n===vn)return i.RGBA;if(n===$n)return i.DEPTH_COMPONENT;if(n===Hi)return i.DEPTH_STENCIL;if(n===Ua)return i.RED;if(n===Fa)return i.RED_INTEGER;if(n===Gi)return i.RG;if(n===Oa)return i.RG_INTEGER;if(n===Ba)return i.RGBA_INTEGER;if(n===io||n===so||n===ro||n===oo)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ka||n===za||n===Ha||n===Ga)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Va||n===Wa||n===Xa||n===Ya||n===qa||n===ao||n===Za)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Va||n===Wa)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ya)return r.COMPRESSED_R11_EAC;if(n===qa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ao)return r.COMPRESSED_RG11_EAC;if(n===Za)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$a||n===Ka||n===Ja||n===ja||n===Qa||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$a)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ka)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ja)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ja)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===el)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===il)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ol)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===al)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ll)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cl||n===hl||n===ul)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===cl)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dl||n===fl||n===lo||n===pl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===dl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}function uv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,qc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,w,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ve&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ve&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),w=b.envMap,v=b.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(hv.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Hd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function dv(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let M=S.program;n.uniformBlockBinding(v,M)}function c(v,S){let M=s[v.id];M===void 0&&(m(v),M=h(v),s[v.id]=M,v.addEventListener("dispose",b));let A=S.program;n.updateUBOMapping(v,A);let _=t.render.frame;r[v.id]!==_&&(u(v),r[v.id]=_)}function h(v){let S=d();v.__bindingPointIndex=S;let M=i.createBuffer(),A=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let S=s[v.id],M=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,T=M.length;_<T;_++){let P=M[_];if(Array.isArray(P))for(let L=0,F=P.length;L<F;L++)f(P[L],_,L,A);else f(P,_,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,S,M,A){if(x(v,S,M,A)===!0){let _=v.__offset,T=v.value;if(Array.isArray(T)){let P=0;for(let L=0;L<T.length;L++){let F=T[L],O=p(F);g(F,v.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function g(v,S,M){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,M)}function x(v,S,M,A){let _=v.value,T=S+"_"+M;if(A[T]===void 0)return typeof _=="number"||typeof _=="boolean"?A[T]=_:ArrayBuffer.isView(_)?A[T]=_.slice():A[T]=_.clone(),!0;{let P=A[T];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return A[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function m(v){let S=v.uniforms,M=0,A=16;for(let T=0,P=S.length;T<P;T++){let L=Array.isArray(S[T])?S[T]:[S[T]];for(let F=0,O=L.length;F<O;F++){let D=L[F],B=Array.isArray(D.value)?D.value:[D.value];for(let Y=0,W=B.length;Y<W;Y++){let nt=B[Y],X=p(nt),it=M%A,lt=it%X.boundary,Mt=it+lt;M+=lt,Mt!==0&&A-Mt<X.storage&&(M+=A-Mt),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=X.storage}}}let _=M%A;return _>0&&(M+=A-_),v.__size=M,v.__cache={},this}function p(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",v),S}function b(v){let S=v.target;S.removeEventListener("dispose",b);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function w(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:w}}function pv(){return ii===null&&(ii=new Tr(fv,16,16,Gi,We),ii.name="DFG_LUT",ii.minFilter=nn,ii.magFilter=nn,ii.wrapS=je,ii.wrapT=je,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}var Am,Rm,Cm,Pm,Im,Lm,Dm,Nm,Um,Fm,Om,Bm,km,zm,Hm,Gm,Vm,Wm,Xm,Ym,qm,Zm,$m,Km,Jm,jm,Qm,t0,e0,n0,i0,s0,r0,o0,a0,l0,c0,h0,u0,d0,f0,p0,m0,g0,x0,_0,v0,y0,b0,M0,S0,E0,w0,T0,A0,R0,C0,P0,I0,L0,D0,N0,U0,F0,O0,B0,k0,z0,H0,G0,V0,W0,X0,Y0,q0,Z0,$0,K0,J0,j0,Q0,tg,eg,ng,ig,sg,rg,og,ag,lg,cg,hg,ug,dg,fg,pg,mg,gg,xg,_g,vg,yg,bg,Mg,Sg,Eg,wg,Tg,Ag,Rg,Cg,Pg,Ig,Lg,Dg,Ng,Ug,Fg,Og,Bg,kg,zg,Hg,Gg,Vg,Wg,Xg,Yg,qg,Zg,$g,Kg,Jg,jg,Qg,tx,ex,nx,ix,sx,rx,ox,re,Pt,si,_l,ax,Fd,js,fx,px,mx,co,pd,ih,sh,rh,oh,gx,us,tr,yl,Ax,Od,ch,Bd,kd,zd,_d,vd,yd,bd,Md,hh,uh,dh,ah,Qs,g_,x_,wd,b_,vl,A_,R_,P_,L_,N_,F_,B_,G_,ph,mh,K_,tv,ev,nv,iv,Nd,ho,lh,lv,cv,gh,xh,hv,Hd,fv,ii,bl,Ze=xe(()=>{nh();nh();Am=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rm=`#ifdef USE_ALPHAHASH
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
#endif`,Cm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Im=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dm=`#ifdef USE_AOMAP
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
#endif`,Nm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Um=`#ifdef USE_BATCHING
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
#endif`,Fm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Om=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,km=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zm=`#ifdef USE_IRIDESCENCE
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
#endif`,Hm=`#ifdef USE_BUMPMAP
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
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Km=`#define PI 3.141592653589793
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
} // validated`,Jm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jm=`vec3 transformedNormal = objectNormal;
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
#endif`,Qm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,e0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,i0="gl_FragColor = linearToOutputTexel( gl_FragColor );",s0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,r0=`#ifdef USE_ENVMAP
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
#endif`,o0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
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
#endif`,l0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c0=`#ifdef USE_ENVMAP
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
#endif`,h0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p0=`#ifdef USE_GRADIENTMAP
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
}`,m0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,g0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,v0=`#ifdef USE_ENVMAP
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
#endif`,y0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E0=`PhysicalMaterial material;
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
#endif`,w0=`uniform sampler2D dfgLUT;
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
}`,T0=`
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
#endif`,A0=`#if defined( RE_IndirectDiffuse )
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
#endif`,R0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,P0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,N0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,O0=`#if defined( USE_POINTS_UV )
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
#endif`,B0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,k0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,H0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,G0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V0=`#ifdef USE_MORPHTARGETS
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
#endif`,W0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Y0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,K0=`#ifdef USE_NORMALMAP
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
#endif`,J0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ng=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,og=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ug=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dg=`float getShadowMask() {
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
}`,fg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pg=`#ifdef USE_SKINNING
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
#endif`,mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gg=`#ifdef USE_SKINNING
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
#endif`,xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bg=`#ifdef USE_TRANSMISSION
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
#endif`,Mg=`#ifdef USE_TRANSMISSION
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ag=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rg=`uniform sampler2D t2D;
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`#include <common>
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
}`,Ng=`#if DEPTH_PACKING == 3200
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
}`,Ug=`#define DISTANCE
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
}`,Fg=`#define DISTANCE
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
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kg=`uniform float scale;
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
}`,zg=`uniform vec3 diffuse;
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
}`,Hg=`#include <common>
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Vg=`#define LAMBERT
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
}`,Wg=`#define LAMBERT
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
}`,Xg=`#define MATCAP
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
}`,Yg=`#define MATCAP
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
}`,qg=`#define NORMAL
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
}`,Zg=`#define NORMAL
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
}`,$g=`#define PHONG
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
}`,Kg=`#define PHONG
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
}`,Jg=`#define STANDARD
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
}`,jg=`#define STANDARD
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
}`,Qg=`#define TOON
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
}`,tx=`#define TOON
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
}`,ex=`uniform float size;
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
}`,nx=`uniform vec3 diffuse;
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
}`,ix=`#include <common>
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
}`,sx=`uniform vec3 color;
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
}`,rx=`uniform float rotation;
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
}`,ox=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:Am,alphahash_pars_fragment:Rm,alphamap_fragment:Cm,alphamap_pars_fragment:Pm,alphatest_fragment:Im,alphatest_pars_fragment:Lm,aomap_fragment:Dm,aomap_pars_fragment:Nm,batching_pars_vertex:Um,batching_vertex:Fm,begin_vertex:Om,beginnormal_vertex:Bm,bsdfs:km,iridescence_fragment:zm,bumpmap_pars_fragment:Hm,clipping_planes_fragment:Gm,clipping_planes_pars_fragment:Vm,clipping_planes_pars_vertex:Wm,clipping_planes_vertex:Xm,color_fragment:Ym,color_pars_fragment:qm,color_pars_vertex:Zm,color_vertex:$m,common:Km,cube_uv_reflection_fragment:Jm,defaultnormal_vertex:jm,displacementmap_pars_vertex:Qm,displacementmap_vertex:t0,emissivemap_fragment:e0,emissivemap_pars_fragment:n0,colorspace_fragment:i0,colorspace_pars_fragment:s0,envmap_fragment:r0,envmap_common_pars_fragment:o0,envmap_pars_fragment:a0,envmap_pars_vertex:l0,envmap_physical_pars_fragment:v0,envmap_vertex:c0,fog_vertex:h0,fog_pars_vertex:u0,fog_fragment:d0,fog_pars_fragment:f0,gradientmap_pars_fragment:p0,lightmap_pars_fragment:m0,lights_lambert_fragment:g0,lights_lambert_pars_fragment:x0,lights_pars_begin:_0,lights_toon_fragment:y0,lights_toon_pars_fragment:b0,lights_phong_fragment:M0,lights_phong_pars_fragment:S0,lights_physical_fragment:E0,lights_physical_pars_fragment:w0,lights_fragment_begin:T0,lights_fragment_maps:A0,lights_fragment_end:R0,lightprobes_pars_fragment:C0,logdepthbuf_fragment:P0,logdepthbuf_pars_fragment:I0,logdepthbuf_pars_vertex:L0,logdepthbuf_vertex:D0,map_fragment:N0,map_pars_fragment:U0,map_particle_fragment:F0,map_particle_pars_fragment:O0,metalnessmap_fragment:B0,metalnessmap_pars_fragment:k0,morphinstance_vertex:z0,morphcolor_vertex:H0,morphnormal_vertex:G0,morphtarget_pars_vertex:V0,morphtarget_vertex:W0,normal_fragment_begin:X0,normal_fragment_maps:Y0,normal_pars_fragment:q0,normal_pars_vertex:Z0,normal_vertex:$0,normalmap_pars_fragment:K0,clearcoat_normal_fragment_begin:J0,clearcoat_normal_fragment_maps:j0,clearcoat_pars_fragment:Q0,iridescence_pars_fragment:tg,opaque_fragment:eg,packing:ng,premultiplied_alpha_fragment:ig,project_vertex:sg,dithering_fragment:rg,dithering_pars_fragment:og,roughnessmap_fragment:ag,roughnessmap_pars_fragment:lg,shadowmap_pars_fragment:cg,shadowmap_pars_vertex:hg,shadowmap_vertex:ug,shadowmask_pars_fragment:dg,skinbase_vertex:fg,skinning_pars_vertex:pg,skinning_vertex:mg,skinnormal_vertex:gg,specularmap_fragment:xg,specularmap_pars_fragment:_g,tonemapping_fragment:vg,tonemapping_pars_fragment:yg,transmission_fragment:bg,transmission_pars_fragment:Mg,uv_pars_fragment:Sg,uv_pars_vertex:Eg,uv_vertex:wg,worldpos_vertex:Tg,background_vert:Ag,background_frag:Rg,backgroundCube_vert:Cg,backgroundCube_frag:Pg,cube_vert:Ig,cube_frag:Lg,depth_vert:Dg,depth_frag:Ng,distance_vert:Ug,distance_frag:Fg,equirect_vert:Og,equirect_frag:Bg,linedashed_vert:kg,linedashed_frag:zg,meshbasic_vert:Hg,meshbasic_frag:Gg,meshlambert_vert:Vg,meshlambert_frag:Wg,meshmatcap_vert:Xg,meshmatcap_frag:Yg,meshnormal_vert:qg,meshnormal_frag:Zg,meshphong_vert:$g,meshphong_frag:Kg,meshphysical_vert:Jg,meshphysical_frag:jg,meshtoon_vert:Qg,meshtoon_frag:tx,points_vert:ex,points_frag:nx,shadow_vert:ix,shadow_frag:sx,sprite_vert:rx,sprite_frag:ox},Pt={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},si={basic:{uniforms:cn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:cn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new wt(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:cn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:cn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:cn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new wt(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:cn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:cn([Pt.points,Pt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:cn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:cn([Pt.common,Pt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:cn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:cn([Pt.sprite,Pt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:cn([Pt.common,Pt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:cn([Pt.lights,Pt.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};si.physical={uniforms:cn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};_l={r:0,b:0,g:0},ax=new te,Fd=new Jt;Fd.set(-1,0,0,0,1,0,0,0,1);js=4,fx=6,px=20,mx=256,co=new Ui,pd=new wt,ih=null,sh=0,rh=0,oh=!1,gx=new R,us=new R,tr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=gx}=r;ih=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ih,sh,rh),this._renderer.xr.enabled=oh,t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ih=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:We,format:vn,colorSpace:vr,depthBuffer:!1},s=md(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=md(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=xx(r)),this._blurMaterial=vx(r,t,e),this._ggxMaterial=_x(r,t,e)}return s}_compileMaterial(t){let e=new At(new ie,t);this._renderer.compile(e,co)}_sceneToCubeUV(t,e,n,s,r){let l=new Je(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(pd),d.toneMapping=Gn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new At(new me,new Be({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,p=!0):(m.color.copy(pd),p=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let S=this._cubeSize;Js(s,v*S,w>2?S:0,S,S),d.setRenderTarget(s),p&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ki||t.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Js(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,co)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-js?n-g+js:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Js(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,co),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Js(t,m,p,3*x,2*x),s.setRenderTarget(t),s.render(a,co)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-js?s-this._lodMax+js:0),u=4*(this._cubeSize-h);Js(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,co)}};yl=class extends De{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Rr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new me(5,5,5),r=new Le({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:In});r.uniforms.tEquirect.value=e;let o=new At(s,r),a=e.minFilter;return e.minFilter===zi&&(e.minFilter=nn),new Ta(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};Ax={[$r]:"LINEAR_TONE_MAPPING",[Kr]:"REINHARD_TONE_MAPPING",[Jr]:"CINEON_TONE_MAPPING",[jr]:"ACES_FILMIC_TONE_MAPPING",[to]:"AGX_TONE_MAPPING",[as]:"NEUTRAL_TONE_MAPPING",[Qr]:"CUSTOM_TONE_MAPPING"};Od=new fn,ch=new Ci(1,1),Bd=new Mr,kd=new ra,zd=new Rr,_d=[],vd=[],yd=new Float32Array(16),bd=new Float32Array(9),Md=new Float32Array(4);hh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zx(e.type)}},uh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=p_(e.type)}},dh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ah=/(\w+)(\])?(\[|\.)?/g;Qs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);m_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};g_=37297,x_=0;wd=new Jt;b_={[$r]:"Linear",[Kr]:"Reinhard",[Jr]:"Cineon",[jr]:"ACESFilmic",[to]:"AgX",[as]:"Neutral",[Qr]:"Custom"};vl=new R;A_=/^[ \t]*#include +<([\w\d./]+)>/gm;R_=new Map;P_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;L_={[rs]:"SHADOWMAP_TYPE_PCF",[qs]:"SHADOWMAP_TYPE_VSM"};N_={[ki]:"ENVMAP_TYPE_CUBE",[ls]:"ENVMAP_TYPE_CUBE",[eo]:"ENVMAP_TYPE_CUBE_UV"};F_={[ls]:"ENVMAP_MODE_REFRACTION"};B_={[Uc]:"ENVMAP_BLENDING_MULTIPLY",[Wu]:"ENVMAP_BLENDING_MIX",[Xu]:"ENVMAP_BLENDING_ADD"};G_=0,ph=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new mh(t),e.set(t,n)),n}},mh=class{constructor(t){this.id=G_++,this.code=t,this.usedTimes=0}};K_=0;tv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ev=`uniform sampler2D shadow_pass;
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
}`,nv=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],iv=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Nd=new te,ho=new R,lh=new R;lv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cv=`
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

}`,gh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Cr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Le({vertexShader:lv,fragmentShader:cv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new At(new Ge(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xh=class extends kn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new gh,p={},b=e.getContextAttributes(),w=null,v=null,S=[],M=[],A=new ut,_=null,T=null,P=new Je;P.viewport=new Re;let L=new Je;L.viewport=new Re;let F=[P,L],O=new Aa,D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let j=S[G];return j===void 0&&(j=new Fs,S[G]=j),j.getTargetRaySpace()},this.getControllerGrip=function(G){let j=S[G];return j===void 0&&(j=new Fs,S[G]=j),j.getGripSpace()},this.getHand=function(G){let j=S[G];return j===void 0&&(j=new Fs,S[G]=j),j.getHandSpace()};function Y(G){let j=M.indexOf(G.inputSource);if(j===-1)return;let xt=S[j];xt!==void 0&&(xt.update(G.inputSource,G.frame,c||o),xt.dispatchEvent({type:G.type,data:G.inputSource}))}function W(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",nt);for(let G=0;G<S.length;G++){let j=M[G];j!==null&&(M[G]=null,S[G].disconnect(j))}D=null,B=null,m.reset();for(let G in p)delete p[G];if(t.setRenderTarget(w),f=null,u=null,d=null,s=null,v=null,bt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),T!==null){let G=T.camera;G.fov=T.fov,G.zoom=T.zoom,G.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",W),s.addEventListener("inputsourceschange",nt),b.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Bt=null,St=null;b.depth&&(St=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=b.stencil?Hi:$n,Bt=b.stencil?Ks:Vn);let Vt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Vt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new De(u.textureWidth,u.textureHeight,{format:vn,type:_n,depthTexture:new Ci(u.textureWidth,u.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let xt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new De(f.framebufferWidth,f.framebufferHeight,{format:vn,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),bt.setContext(s),bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(G){for(let j=0;j<G.removed.length;j++){let xt=G.removed[j],Bt=M.indexOf(xt);Bt>=0&&(M[Bt]=null,S[Bt].disconnect(xt))}for(let j=0;j<G.added.length;j++){let xt=G.added[j],Bt=M.indexOf(xt);if(Bt===-1){for(let Vt=0;Vt<S.length;Vt++)if(Vt>=M.length){M.push(xt),Bt=Vt;break}else if(M[Vt]===null){M[Vt]=xt,Bt=Vt;break}if(Bt===-1)break}let St=S[Bt];St&&St.connect(xt)}}let X=new R,it=new R;function lt(G,j,xt){X.setFromMatrixPosition(j.matrixWorld),it.setFromMatrixPosition(xt.matrixWorld);let Bt=X.distanceTo(it),St=j.projectionMatrix.elements,Vt=xt.projectionMatrix.elements,le=St[14]/(St[10]-1),k=St[14]/(St[10]+1),K=(St[9]+1)/St[5],ot=(St[9]-1)/St[5],Q=(St[8]-1)/St[0],dt=(Vt[8]+1)/Vt[0],Lt=le*Q,Dt=le*dt,Ut=Bt/(-Q+dt),Yt=Ut*-Q;if(j.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Yt),G.translateZ(Ut),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),St[10]===-1)G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let U=le+Ut,fe=k+Ut,Qt=Lt-Yt,I=Dt+(Bt-Yt),y=K*k/fe*U,V=ot*k/fe*U;G.projectionMatrix.makePerspective(Qt,I,y,V,U,fe),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function Mt(G,j){j===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(j.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let j=G.near,xt=G.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),O.near=L.near=P.near=j,O.far=L.far=P.far=xt,(D!==O.near||B!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),D=O.near,B=O.far),O.layers.mask=G.layers.mask|6,P.layers.mask=O.layers.mask&-5,L.layers.mask=O.layers.mask&-3;let Bt=G.parent,St=O.cameras;Mt(O,Bt);for(let Vt=0;Vt<St.length;Vt++)Mt(St[Vt],Bt);St.length===2?lt(O,P,L):O.projectionMatrix.copy(P.projectionMatrix),T===null&&G.isPerspectiveCamera&&(T={camera:G,fov:G.fov,zoom:G.zoom}),yt(G,O,Bt)};function yt(G,j,xt){xt===null?G.matrix.copy(j.matrixWorld):(G.matrix.copy(xt.matrixWorld),G.matrix.invert(),G.matrix.multiply(j.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Qi*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(G){l=G,u!==null&&(u.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(G){return p[G]};let st=null;function mt(G,j){if(h=j.getViewerPose(c||o),g=j,h!==null){let xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Bt=!1;xt.length!==O.cameras.length&&(O.cameras.length=0,Bt=!0);for(let k=0;k<xt.length;k++){let K=xt[k],ot=null;if(f!==null)ot=f.getViewport(K);else{let dt=d.getViewSubImage(u,K);ot=dt.viewport,k===0&&(t.setRenderTargetTextures(v,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(v))}let Q=F[k];Q===void 0&&(Q=new Je,Q.layers.enable(k),Q.viewport=new Re,F[k]=Q),Q.matrix.fromArray(K.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(K.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ot.x,ot.y,ot.width,ot.height),k===0&&(O.matrix.copy(Q.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Bt===!0&&O.cameras.push(Q)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let k=d.getDepthInformation(xt[0]);k&&k.isValid&&k.texture&&m.init(k,s.renderState)}if(St&&St.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let k=0;k<xt.length;k++){let K=xt[k].camera;if(K){let ot=p[K];ot||(ot=new Cr,p[K]=ot);let Q=d.getCameraImage(K);ot.sourceTexture=Q}}}}for(let xt=0;xt<S.length;xt++){let Bt=M[xt],St=S[xt];Bt!==null&&St!==void 0&&St.update(Bt,j,c||o)}st&&st(G,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let bt=new Ud;bt.setAnimationLoop(mt),this.setAnimationLoop=function(G){st=G},this.dispose=function(){}}},hv=new te,Hd=new Jt;Hd.set(-1,0,0,0,1,0,0,0,1);fv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ii=null;bl=class{constructor(t={}){let{canvas:e=id(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=_n}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=f,m=new Set([Ba,Oa,Fa]),p=new Set([_n,Vn,$s,Ks,Da,Na]),b=new Uint32Array(4),w=new Int32Array(4),v=new R,S=null,M=null,A=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,L=!1,F=null,O=null,D=null,B=null;this._outputColorSpace=Ce;let Y=0,W=0,nt=null,X=-1,it=null,lt=new Re,Mt=new Re,yt=null,st=new wt(0),mt=0,bt=e.width,G=e.height,j=1,xt=null,Bt=null,St=new Re(0,0,bt,G),Vt=new Re(0,0,bt,G),le=!1,k=new Bs,K=!1,ot=!1,Q=new te,dt=new R,Lt=new Re,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ut=!1;function Yt(){return nt===null?j:1}let U=n;function fe(E,z){return e.getContext(E,z)}let Qt,I,y,V,J,rt,gt,_t,at,ht,Et,Gt,Ct,Rt,kt,Xt,N,C,et,q,ft,pt,ct;try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ee,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",en,!1),U===null){let z="webgl2";if(U=fe(z,E),U===null)throw fe(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Tt()}catch(E){throw e.removeEventListener("webglcontextlost",ee,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",en,!1),$t("WebGLRenderer: "+E.message),E}function Tt(){Qt=new bx(U),Qt.init(),ft=new av(U,Qt),I=new ux(U,Qt,t,ft),y=new rv(U,Qt),I.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),O=U.createFramebuffer(),D=U.createFramebuffer(),B=U.createFramebuffer(),V=new Ex(U),J=new X_,rt=new ov(U,Qt,y,J,I,ft,V),gt=new yx(P),_t=new Tm(U),pt=new cx(U,_t),at=new Mx(U,_t,V,pt),ht=new Tx(U,at,_t,pt,V),C=new wx(U,I,rt),kt=new dx(J),Et=new W_(P,gt,Qt,I,pt,kt),Gt=new uv(P,J),Ct=new q_,Rt=new Q_(Qt),N=new lx(P,gt,y,ht,g,l),Xt=new sv(P,ht,I),ct=new dv(U,V,I,y),et=new hx(U,Qt,V),q=new Sx(U,Qt,V),V.programs=Et.programs,P.capabilities=I,P.extensions=Qt,P.properties=J,P.renderLists=Ct,P.shadowMap=Xt,P.state=y,P.info=V}x!==_n&&(T=new Rx(x,e.width,e.height,a,s,r));let vt=new xh(P,U);this.xr=vt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let E=Qt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Qt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(bt,G,!1))},this.getSize=function(E){return E.set(bt,G)},this.setSize=function(E,z,tt=!0){if(vt.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}bt=E,G=z,e.width=Math.floor(E*j),e.height=Math.floor(z*j),tt===!0&&(e.style.width=E+"px",e.style.height=z+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(bt*j,G*j).floor()},this.setDrawingBufferSize=function(E,z,tt){bt=E,G=z,j=tt,e.width=Math.floor(E*tt),e.height=Math.floor(z*tt),this.setViewport(0,0,E,z)},this.setEffects=function(E){if(x===_n){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let z=0;z<E.length;z++)if(E[z].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(lt)},this.getViewport=function(E){return E.copy(St)},this.setViewport=function(E,z,tt,Z){E.isVector4?St.set(E.x,E.y,E.z,E.w):St.set(E,z,tt,Z),y.viewport(lt.copy(St).multiplyScalar(j).round())},this.getScissor=function(E){return E.copy(Vt)},this.setScissor=function(E,z,tt,Z){E.isVector4?Vt.set(E.x,E.y,E.z,E.w):Vt.set(E,z,tt,Z),y.scissor(Mt.copy(Vt).multiplyScalar(j).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(E){y.setScissorTest(le=E)},this.setOpaqueSort=function(E){xt=E},this.setTransparentSort=function(E){Bt=E},this.getClearColor=function(E){return E.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,tt=!0){let Z=0;if(E){let $=!1;if(nt!==null){let Nt=nt.texture.format;$=m.has(Nt)}if($){let Nt=nt.texture.type,Ot=p.has(Nt),It=N.getClearColor(),zt=N.getClearAlpha(),Wt=It.r,se=It.g,ae=It.b;Ot?(b[0]=Wt,b[1]=se,b[2]=ae,b[3]=zt,U.clearBufferuiv(U.COLOR,0,b)):(w[0]=Wt,w[1]=se,w[2]=ae,w[3]=zt,U.clearBufferiv(U.COLOR,0,w))}else Z|=U.COLOR_BUFFER_BIT}z&&(Z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&(Z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&U.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){e.removeEventListener("webglcontextlost",ee,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",en,!1),N.dispose(),Ct.dispose(),Rt.dispose(),J.dispose(),gt.dispose(),ht.dispose(),pt.dispose(),ct.dispose(),Et.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",Lh),vt.removeEventListener("sessionend",Dh),qi.stop()};function ee(E){E.preventDefault(),Wc("WebGLRenderer: Context Lost."),L=!0}function ce(){Wc("WebGLRenderer: Context Restored."),L=!1;let E=V.autoReset,z=Xt.enabled,tt=Xt.autoUpdate,Z=Xt.needsUpdate,$=Xt.type;Tt(),V.autoReset=E,Xt.enabled=z,Xt.autoUpdate=tt,Xt.needsUpdate=Z,Xt.type=$}function en(E){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Xn(E){let z=E.target;z.removeEventListener("dispose",Xn),Yf(z)}function Yf(E){qf(E),J.remove(E)}function qf(E){let z=J.get(E).programs;z!==void 0&&(z.forEach(function(tt){Et.releaseProgram(tt)}),E.isShaderMaterial&&Et.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,tt,Z,$,Nt){z===null&&(z=Dt);let Ot=$.isMesh&&$.matrixWorld.determinantAffine()<0,It=Kf(E,z,tt,Z,$);y.setMaterial(Z,Ot);let zt=tt.index,Wt=1;if(Z.wireframe===!0){if(zt=at.getWireframeAttribute(tt),zt===void 0)return;Wt=2}let se=tt.drawRange,ae=tt.attributes.position,Ht=se.start*Wt,ge=(se.start+se.count)*Wt;Nt!==null&&(Ht=Math.max(Ht,Nt.start*Wt),ge=Math.min(ge,(Nt.start+Nt.count)*Wt)),zt!==null?(Ht=Math.max(Ht,0),ge=Math.min(ge,zt.count)):ae!=null&&(Ht=Math.max(Ht,0),ge=Math.min(ge,ae.count));let Ue=ge-Ht;if(Ue<0||Ue===1/0)return;pt.setup($,Z,It,tt,zt);let Te,Ee=et;if(zt!==null&&(Te=_t.get(zt),Ee=q,Ee.setIndex(Te)),$.isMesh)Z.wireframe===!0?(y.setLineWidth(Z.wireframeLinewidth*Yt()),Ee.setMode(U.LINES)):Ee.setMode(U.TRIANGLES);else if($.isLine){let sn=Z.linewidth;sn===void 0&&(sn=1),y.setLineWidth(sn*Yt()),$.isLineSegments?Ee.setMode(U.LINES):$.isLineLoop?Ee.setMode(U.LINE_LOOP):Ee.setMode(U.LINE_STRIP)}else $.isPoints?Ee.setMode(U.POINTS):$.isSprite&&Ee.setMode(U.TRIANGLES);if($.isBatchedMesh)if(Qt.get("WEBGL_multi_draw"))Ee.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let sn=$._multiDrawStarts,Ft=$._multiDrawCounts,un=$._multiDrawCount,ue=zt?_t.get(zt).bytesPerElement:1,Cn=J.get(Z).currentProgram.getUniforms();for(let Yn=0;Yn<un;Yn++)Cn.setValue(U,"_gl_DrawID",Yn),Ee.render(sn[Yn]/ue,Ft[Yn])}else if($.isInstancedMesh)Ee.renderInstances(Ht,Ue,$.count);else if(tt.isInstancedBufferGeometry){let sn=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Ft=Math.min(tt.instanceCount,sn);Ee.renderInstances(Ht,Ue,Ft)}else Ee.render(Ht,Ue)};function Ih(E,z,tt,Z){F!==null&&E.isNodeMaterial&&F.setObject(Z,E),K===!0&&kt.setState(E,tt,!1),E.transparent===!0&&E.side===ke&&E.forceSinglePass===!1?(E.side=Ve,E.needsUpdate=!0,vo(E,z,Z),E.side=Bi,E.needsUpdate=!0,vo(E,z,Z),E.side=ke):vo(E,z,Z)}this.compile=function(E,z,tt=null){tt===null&&(tt=E),F!==null&&F.renderStart(E,z,tt),M=Rt.get(tt),M.init(z),_.push(M),tt.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),E!==tt&&E.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),M.setupLights(),F!==null&&F.updateLights(M.state.lightsArray),ot=this.localClippingEnabled,K=kt.init(this.clippingPlanes,ot),K===!0&&kt.setGlobalState(this.clippingPlanes,z),F!==null&&Xt.render(M.state.shadowsArray,tt,z);let Z=new Set;return E.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Nt=$.material;if(Nt)if(Array.isArray(Nt))for(let Ot=0;Ot<Nt.length;Ot++){let It=Nt[Ot];Ih(It,tt,z,$),Z.add(It)}else Ih(Nt,tt,z,$),Z.add(Nt)}),M=_.pop(),F!==null&&F.renderEnd(),Z},this.compileAsync=function(E,z,tt=null){let Z=this.compile(E,z,tt);return new Promise($=>{function Nt(){if(Z.forEach(function(Ot){let zt=J.get(Ot).currentProgram;(zt===void 0||zt.isReady())&&Z.delete(Ot)}),Z.size===0){$(E);return}setTimeout(Nt,10)}Qt.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Vl=null;function Zf(E){Vl&&Vl(E)}function Lh(){qi.stop()}function Dh(){qi.start()}let qi=new Ud;qi.setAnimationLoop(Zf),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(E){Vl=E,vt.setAnimationLoop(E),E===null?qi.stop():qi.start()},vt.addEventListener("sessionstart",Lh),vt.addEventListener("sessionend",Dh),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(E,z);let tt=vt.enabled===!0&&vt.isPresenting===!0,Z=T!==null&&(nt===null||tt)&&T.begin(P,nt);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(z),z=vt.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,z,nt),M=Rt.get(E,_.length),M.init(z),M.state.textureUnits=rt.getTextureUnits(),_.push(M),Q.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),k.setFromProjectionMatrix(Q,Bn,z.reversedDepth),ot=this.localClippingEnabled,K=kt.init(this.clippingPlanes,ot),S=Ct.get(E,A.length),S.init(),A.push(S),vt.enabled===!0&&vt.isPresenting===!0){let Ot=P.xr.getDepthSensingMesh();Ot!==null&&Wl(Ot,z,-1/0,P.sortObjects)}Wl(E,z,0,P.sortObjects),S.finish(),F!==null&&F.updateLights(M.state.lightsArray),P.sortObjects===!0&&S.sort(xt,Bt),Ut=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,Ut&&N.addToRenderList(S,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),K===!0&&kt.beginShadows();let $=M.state.shadowsArray;if(Xt.render($,E,z),K===!0&&kt.endShadows(),(Z&&T.hasRenderPass())===!1){let Ot=S.opaque,It=S.transmissive;if(M.setupLights(),z.isArrayCamera){let zt=z.cameras;if(It.length>0)for(let Wt=0,se=zt.length;Wt<se;Wt++){let ae=zt[Wt];Uh(Ot,It,E,ae)}Ut&&N.render(E);for(let Wt=0,se=zt.length;Wt<se;Wt++){let ae=zt[Wt];Nh(S,E,ae,ae.viewport)}}else It.length>0&&Uh(Ot,It,E,z),Ut&&N.render(E),Nh(S,E,z)}nt!==null&&W===0&&(rt.updateMultisampleRenderTarget(nt),rt.updateRenderTargetMipmap(nt)),Z&&T.end(P),E.isScene===!0&&E.onAfterRender(P,E,z),pt.resetDefaultState(),X=-1,it=null,_.pop(),_.length>0?(M=_[_.length-1],rt.setTextureUnits(M.state.textureUnits),K===!0&&kt.setGlobalState(P.clippingPlanes,M.state.camera)):M=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,F!==null&&F.renderEnd()};function Wl(E,z,tt,Z){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)tt=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLightProbeGrid)M.pushLightProbeGrid(E);else if(E.isLight)M.pushLight(E),E.castShadow&&M.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(k)){Z&&Lt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Q);let Ot=ht.update(E),It=E.material;It.visible&&S.push(E,Ot,It,tt,Lt.z,null,z)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(k))){let Ot=ht.update(E),It=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Lt.copy(E.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),Lt.copy(Ot.boundingSphere.center)),Lt.applyMatrix4(E.matrixWorld).applyMatrix4(Q)),Array.isArray(It)){let zt=Ot.groups;for(let Wt=0,se=zt.length;Wt<se;Wt++){let ae=zt[Wt],Ht=It[ae.materialIndex];Ht&&Ht.visible&&S.push(E,Ot,Ht,tt,Lt.z,ae,z)}}else It.visible&&S.push(E,Ot,It,tt,Lt.z,null,z)}}let Nt=E.children;for(let Ot=0,It=Nt.length;Ot<It;Ot++)Wl(Nt[Ot],z,tt,Z)}function Nh(E,z,tt,Z){let{opaque:$,transmissive:Nt,transparent:Ot}=E;M.setupLightsView(tt),K===!0&&kt.setGlobalState(P.clippingPlanes,tt),Z&&y.viewport(lt.copy(Z)),$.length>0&&_o($,z,tt),Nt.length>0&&_o(Nt,z,tt),Ot.length>0&&_o(Ot,z,tt),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Uh(E,z,tt,Z){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Z.id]===void 0){let Ht=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Z.id]=new De(1,1,{generateMipmaps:!0,type:Ht?We:_n,minFilter:zi,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}let Nt=M.state.transmissionRenderTarget[Z.id],Ot=Z.viewport||lt;Nt.setSize(Ot.z*P.transmissionResolutionScale,Ot.w*P.transmissionResolutionScale);let It=P.getRenderTarget(),zt=P.getActiveCubeFace(),Wt=P.getActiveMipmapLevel();P.setRenderTarget(Nt),P.getClearColor(st),mt=P.getClearAlpha(),mt<1&&P.setClearColor(16777215,.5),P.clear(),Ut&&N.render(tt);let se=P.toneMapping;P.toneMapping=Gn;let ae=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),M.setupLightsView(Z),K===!0&&kt.setGlobalState(P.clippingPlanes,Z),_o(E,tt,Z),rt.updateMultisampleRenderTarget(Nt),rt.updateRenderTargetMipmap(Nt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let ge=0,Ue=z.length;ge<Ue;ge++){let Te=z[ge],{object:Ee,geometry:sn,material:Ft,group:un}=Te;if(Ft.side===ke&&Ee.layers.test(Z.layers)){let ue=Ft.side;Ft.side=Ve,Ft.needsUpdate=!0,Fh(Ee,tt,Z,sn,Ft,un),Ft.side=ue,Ft.needsUpdate=!0,Ht=!0}}Ht===!0&&(rt.updateMultisampleRenderTarget(Nt),rt.updateRenderTargetMipmap(Nt))}P.setRenderTarget(It,zt,Wt),P.setClearColor(st,mt),ae!==void 0&&(Z.viewport=ae),P.toneMapping=se}function _o(E,z,tt){let Z=z.isScene===!0?z.overrideMaterial:null;for(let $=0,Nt=E.length;$<Nt;$++){let Ot=E[$],{object:It,geometry:zt,group:Wt}=Ot,se=Ot.material;se.allowOverride===!0&&Z!==null&&(se=Z),It.layers.test(tt.layers)&&Fh(It,z,tt,zt,se,Wt)}}function Fh(E,z,tt,Z,$,Nt){F!==null&&$.isNodeMaterial&&F.setObject(E,$),E.onBeforeRender(P,z,tt,Z,$,Nt),E.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(P,z,tt,Z,E,Nt),$.transparent===!0&&$.side===ke&&$.forceSinglePass===!1?($.side=Ve,$.needsUpdate=!0,P.renderBufferDirect(tt,z,Z,$,E,Nt),$.side=Bi,$.needsUpdate=!0,P.renderBufferDirect(tt,z,Z,$,E,Nt),$.side=ke):P.renderBufferDirect(tt,z,Z,$,E,Nt),E.onAfterRender(P,z,tt,Z,$,Nt)}function vo(E,z,tt){z.isScene!==!0&&(z=Dt);let Z=J.get(E),$=M.state.lights,Nt=M.state.shadowsArray,Ot=$.state.version,It=Et.getParameters(E,$.state,Nt,z,tt,M.state.lightProbeGridArray),zt=Et.getProgramCacheKey(It),Wt=Z.programs;Z.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,Z.fog=z.fog;let se=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Z.envMap=gt.get(E.envMap||Z.environment,se),Z.envMapRotation=Z.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Wt===void 0&&(E.addEventListener("dispose",Xn),Wt=new Map,Z.programs=Wt);let ae=Wt.get(zt);if(ae!==void 0){if(Z.currentProgram===ae&&Z.lightsStateVersion===Ot)return Bh(E,It),ae}else It.uniforms=Et.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,tt,It),E.onBeforeCompile(It,P),ae=Et.acquireProgram(It,zt),Wt.set(zt,ae),Z.uniforms=It.uniforms;let Ht=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ht.clippingPlanes=kt.uniform),Bh(E,It),Z.needsLights=jf(E),Z.lightsStateVersion=Ot,Z.needsLights&&(Ht.ambientLightColor.value=$.state.ambient,Ht.lightProbe.value=$.state.probe,Ht.sunLights.value=$.state.sun,Ht.sunLightShadows.value=$.state.sunShadow,Ht.directionalLights.value=$.state.directional,Ht.directionalLightShadows.value=$.state.directionalShadow,Ht.spotLights.value=$.state.spot,Ht.spotLightShadows.value=$.state.spotShadow,Ht.rectAreaLights.value=$.state.rectArea,Ht.ltc_1.value=$.state.rectAreaLTC1,Ht.ltc_2.value=$.state.rectAreaLTC2,Ht.pointLights.value=$.state.point,Ht.pointLightShadows.value=$.state.pointShadow,Ht.hemisphereLights.value=$.state.hemi,Ht.sunShadowMatrix.value=$.state.sunShadowMatrix,Ht.sunShadowCascade.value=$.state.sunShadowCascade,Ht.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ht.spotLightMatrix.value=$.state.spotLightMatrix,Ht.spotLightMap.value=$.state.spotLightMap,Ht.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.lightProbeGrid=M.state.lightProbeGridArray.length>0,Z.currentProgram=ae,Z.uniformsList=null,ae}function Oh(E){if(E.uniformsList===null){let z=E.currentProgram.getUniforms();E.uniformsList=Qs.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Bh(E,z){let tt=J.get(E);tt.outputColorSpace=z.outputColorSpace,tt.batching=z.batching,tt.batchingColor=z.batchingColor,tt.instancing=z.instancing,tt.instancingColor=z.instancingColor,tt.instancingMorph=z.instancingMorph,tt.skinning=z.skinning,tt.morphTargets=z.morphTargets,tt.morphNormals=z.morphNormals,tt.morphColors=z.morphColors,tt.morphTargetsCount=z.morphTargetsCount,tt.numClippingPlanes=z.numClippingPlanes,tt.numIntersection=z.numClipIntersection,tt.vertexAlphas=z.vertexAlphas,tt.vertexTangents=z.vertexTangents,tt.toneMapping=z.toneMapping}function $f(E,z){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;v.setFromMatrixPosition(z.matrixWorld);for(let tt=0,Z=E.length;tt<Z;tt++){let $=E[tt];if($.texture!==null&&$.boundingBox.containsPoint(v))return $}return null}function Kf(E,z,tt,Z,$){z.isScene!==!0&&(z=Dt),rt.resetTextureUnits();let Nt=z.fog,Ot=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?z.environment:null,It=nt===null?P.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:oe.workingColorSpace,zt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Wt=gt.get(Z.envMap||Ot,zt),se=Z.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,ae=!!tt.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ht=!!tt.morphAttributes.position,ge=!!tt.morphAttributes.normal,Ue=!!tt.morphAttributes.color,Te=Gn;Z.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Te=P.toneMapping);let Ee=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,sn=Ee!==void 0?Ee.length:0,Ft=J.get(Z),un=M.state.lights;if(K===!0&&(ot===!0||E!==it)){let we=E===it&&Z.id===X;kt.setState(Z,E,we)}let ue=!1;Z.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==un.state.version||Ft.outputColorSpace!==It||$.isBatchedMesh&&Ft.batching===!1||!$.isBatchedMesh&&Ft.batching===!0||$.isBatchedMesh&&Ft.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Ft.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Ft.instancing===!1||!$.isInstancedMesh&&Ft.instancing===!0||$.isSkinnedMesh&&Ft.skinning===!1||!$.isSkinnedMesh&&Ft.skinning===!0||$.isInstancedMesh&&Ft.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ft.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ft.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ft.instancingMorph===!1&&$.morphTexture!==null||Ft.envMap!==Wt||Z.fog===!0&&Ft.fog!==Nt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==kt.numPlanes||Ft.numIntersection!==kt.numIntersection)||Ft.vertexAlphas!==se||Ft.vertexTangents!==ae||Ft.morphTargets!==Ht||Ft.morphNormals!==ge||Ft.morphColors!==Ue||Ft.toneMapping!==Te||Ft.morphTargetsCount!==sn||!!Ft.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ue=!0):(ue=!0,Ft.__version=Z.version);let Cn=Ft.currentProgram;ue===!0&&(Cn=vo(Z,z,$),F&&Z.isNodeMaterial&&F.onUpdateProgram(Z,Cn,Ft));let Yn=!1,yi=!1,fs=!1,Me=Cn.getUniforms(),Ne=Ft.uniforms;if(y.useProgram(Cn.program)&&(Yn=!0,yi=!0,fs=!0),Z.id!==X&&(X=Z.id,yi=!0),Ft.needsLights){let we=$f(M.state.lightProbeGridArray,$);Ft.lightProbeGrid!==we&&(Ft.lightProbeGrid=we,yi=!0)}if(Yn||it!==E){y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Me.setValue(U,"projectionMatrix",E.projectionMatrix),Me.setValue(U,"viewMatrix",E.matrixWorldInverse);let Mi=Me.map.cameraPosition;Mi!==void 0&&Mi.setValue(U,dt.setFromMatrixPosition(E.matrixWorld)),I.logarithmicDepthBuffer&&Me.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Me.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),it!==E&&(it=E,yi=!0,fs=!0)}if(Ft.needsLights&&(un.state.sunShadowMap.length>0&&Me.setValue(U,"sunShadowMap",un.state.sunShadowMap,rt),un.state.directionalShadowMap.length>0&&Me.setValue(U,"directionalShadowMap",un.state.directionalShadowMap,rt),un.state.spotShadowMap.length>0&&Me.setValue(U,"spotShadowMap",un.state.spotShadowMap,rt),un.state.pointShadowMap.length>0&&Me.setValue(U,"pointShadowMap",un.state.pointShadowMap,rt)),$.isSkinnedMesh){Me.setOptional(U,$,"bindMatrix"),Me.setOptional(U,$,"bindMatrixInverse");let we=$.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),Me.setValue(U,"boneTexture",we.boneTexture,rt))}$.isBatchedMesh&&(Me.setOptional(U,$,"batchingTexture"),Me.setValue(U,"batchingTexture",$._matricesTexture,rt),Me.setOptional(U,$,"batchingIdTexture"),Me.setValue(U,"batchingIdTexture",$._indirectTexture,rt),Me.setOptional(U,$,"batchingColorTexture"),$._colorsTexture!==null&&Me.setValue(U,"batchingColorTexture",$._colorsTexture,rt));let bi=tt.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&C.update($,tt,Cn),(yi||Ft.receiveShadow!==$.receiveShadow)&&(Ft.receiveShadow=$.receiveShadow,Me.setValue(U,"receiveShadow",$.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&z.environment!==null&&(Ne.envMapIntensity.value=z.environmentIntensity),Ne.dfgLUT!==void 0&&(Ne.dfgLUT.value=pv()),yi){if(Me.setValue(U,"toneMappingExposure",P.toneMappingExposure),Ft.needsLights&&Jf(Ne,fs),Nt&&Z.fog===!0&&Gt.refreshFogUniforms(Ne,Nt),Gt.refreshMaterialUniforms(Ne,Z,j,G,M.state.transmissionRenderTarget[E.id]),Ft.needsLights&&Ft.lightProbeGrid){let we=Ft.lightProbeGrid;Ne.probesSH.value=we.texture,Ne.probesMin.value.copy(we.boundingBox.min),Ne.probesMax.value.copy(we.boundingBox.max),Ne.probesResolution.value.copy(we.resolution)}Qs.upload(U,Oh(Ft),Ne,rt)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Qs.upload(U,Oh(Ft),Ne,rt),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Me.setValue(U,"center",$.center),Me.setValue(U,"modelViewMatrix",$.modelViewMatrix),Me.setValue(U,"normalMatrix",$.normalMatrix),Me.setValue(U,"modelMatrix",$.matrixWorld),Z.uniformsGroups!==void 0){let we=Z.uniformsGroups;for(let Mi=0,ps=we.length;Mi<ps;Mi++){let zh=we[Mi];ct.update(zh,Cn),ct.bind(zh,Cn)}}return Cn}function Jf(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.sunLights.needsUpdate=z,E.sunLightShadows.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function jf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(E,z,tt){let Z=J.get(E);Z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),J.get(E.texture).__webglTexture=z,J.get(E.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:tt,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){let tt=J.get(E);tt.__webglFramebuffer=z,tt.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,tt=0){nt=E,Y=z,W=tt;let Z=null,$=!1,Nt=!1;if(E){let It=J.get(E);if(It.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(U.FRAMEBUFFER,It.__webglFramebuffer),lt.copy(E.viewport),Mt.copy(E.scissor),yt=E.scissorTest,y.viewport(lt),y.scissor(Mt),y.setScissorTest(yt),X=-1;return}else if(It.__webglFramebuffer===void 0)rt.setupRenderTarget(E);else if(It.__hasExternalTextures)rt.rebindTextures(E,J.get(E.texture).__webglTexture,J.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let se=E.depthTexture;if(It.__boundDepthTexture!==se){if(se!==null&&J.has(se)&&(E.width!==se.image.width||E.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(E)}}let zt=E.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Nt=!0);let Wt=J.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Wt[z])?Z=Wt[z][tt]:Z=Wt[z],$=!0):E.samples>0&&rt.useMultisampledRTT(E)===!1?Z=J.get(E).__webglMultisampledFramebuffer:Array.isArray(Wt)?Z=Wt[tt]:Z=Wt,lt.copy(E.viewport),Mt.copy(E.scissor),yt=E.scissorTest}else lt.copy(St).multiplyScalar(j).floor(),Mt.copy(Vt).multiplyScalar(j).floor(),yt=le;if(tt!==0&&(Z=O),y.bindFramebuffer(U.FRAMEBUFFER,Z)&&y.drawBuffers(E,Z),y.viewport(lt),y.scissor(Mt),y.setScissorTest(yt),$){let It=J.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,It.__webglTexture,tt)}else if(Nt){let It=z;for(let zt=0;zt<E.textures.length;zt++){let Wt=J.get(E.textures[zt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+zt,Wt.__webglTexture,tt,It)}}else if(E!==null&&tt!==0){let It=J.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,It.__webglTexture,tt)}X=-1};function kh(E){let z=J.get(E);return(z.__readFormat!==E.format||z.__readType!==E.type)&&(z.__readFormat=E.format,z.__readType=E.type,z.__formatReadable=I.textureFormatReadable(E.format),z.__typeReadable=I.textureTypeReadable(E.type)),z}this.readRenderTargetPixels=function(E,z,tt,Z,$,Nt,Ot,It=0){if(!(E&&E.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=J.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ot!==void 0&&(zt=zt[Ot]),zt){y.bindFramebuffer(U.FRAMEBUFFER,zt);try{let Wt=E.textures[It],se=Wt.format,ae=Wt.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+It);let Ht=kh(Wt);if(Ht.__formatReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ht.__typeReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-Z&&tt>=0&&tt<=E.height-$&&U.readPixels(z,tt,Z,$,ft.convert(se),ft.convert(ae),Nt)}finally{let Wt=nt!==null?J.get(nt).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(E,z,tt,Z,$,Nt,Ot,It=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=J.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ot!==void 0&&(zt=zt[Ot]),zt)if(z>=0&&z<=E.width-Z&&tt>=0&&tt<=E.height-$){y.bindFramebuffer(U.FRAMEBUFFER,zt);let Wt=E.textures[It],se=Wt.format,ae=Wt.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+It);let Ht=kh(Wt);if(Ht.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ht.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ge=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ge),U.bufferData(U.PIXEL_PACK_BUFFER,Nt.byteLength,U.STREAM_READ),U.readPixels(z,tt,Z,$,ft.convert(se),ft.convert(ae),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Ue=nt!==null?J.get(nt).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,Ue);let Te=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await rd(U,Te,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ge),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Nt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ge),U.deleteSync(Te),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,tt=0){let Z=Math.pow(2,-tt),$=Math.floor(E.image.width*Z),Nt=Math.floor(E.image.height*Z),Ot=z!==null?z.x:0,It=z!==null?z.y:0;rt.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,tt,0,0,Ot,It,$,Nt),y.unbindTexture()},this.copyTextureToTexture=function(E,z,tt=null,Z=null,$=0,Nt=0){let Ot,It,zt,Wt,se,ae,Ht,ge,Ue,Te=E.isCompressedTexture?E.mipmaps[Nt]:E.image;if(tt!==null)Ot=tt.max.x-tt.min.x,It=tt.max.y-tt.min.y,zt=tt.isBox3?tt.max.z-tt.min.z:1,Wt=tt.min.x,se=tt.min.y,ae=tt.isBox3?tt.min.z:0;else{let Ne=Math.pow(2,-$);Ot=Math.floor(Te.width*Ne),It=Math.floor(Te.height*Ne),E.isDataArrayTexture?zt=Te.depth:E.isData3DTexture?zt=Math.floor(Te.depth*Ne):zt=1,Wt=0,se=0,ae=0}Z!==null?(Ht=Z.x,ge=Z.y,Ue=Z.z):(Ht=0,ge=0,Ue=0);let Ee=ft.convert(z.format),sn=ft.convert(z.type),Ft;z.isData3DTexture?(rt.setTexture3D(z,0),Ft=U.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(rt.setTexture2DArray(z,0),Ft=U.TEXTURE_2D_ARRAY):(rt.setTexture2D(z,0),Ft=U.TEXTURE_2D),y.activeTexture(U.TEXTURE0),y.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),y.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),y.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);let un=y.getParameter(U.UNPACK_ROW_LENGTH),ue=y.getParameter(U.UNPACK_IMAGE_HEIGHT),Cn=y.getParameter(U.UNPACK_SKIP_PIXELS),Yn=y.getParameter(U.UNPACK_SKIP_ROWS),yi=y.getParameter(U.UNPACK_SKIP_IMAGES);y.pixelStorei(U.UNPACK_ROW_LENGTH,Te.width),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Te.height),y.pixelStorei(U.UNPACK_SKIP_PIXELS,Wt),y.pixelStorei(U.UNPACK_SKIP_ROWS,se),y.pixelStorei(U.UNPACK_SKIP_IMAGES,ae);let fs=E.isDataArrayTexture||E.isData3DTexture,Me=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){let Ne=J.get(E),bi=J.get(z),we=J.get(Ne.__renderTarget),Mi=J.get(bi.__renderTarget);y.bindFramebuffer(U.READ_FRAMEBUFFER,we.__webglFramebuffer),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let ps=0;ps<zt;ps++)fs&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,J.get(E).__webglTexture,$,ae+ps),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,J.get(z).__webglTexture,Nt,Ue+ps)),U.blitFramebuffer(Wt,se,Ot,It,Ht,ge,Ot,It,U.DEPTH_BUFFER_BIT,U.NEAREST);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if($!==0||E.isRenderTargetTexture||J.has(E)){let Ne=J.get(E),bi=J.get(z);y.bindFramebuffer(U.READ_FRAMEBUFFER,D),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,B);for(let we=0;we<zt;we++)fs?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ne.__webglTexture,$,ae+we):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ne.__webglTexture,$),Me?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,bi.__webglTexture,Nt,Ue+we):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,bi.__webglTexture,Nt),$!==0?U.blitFramebuffer(Wt,se,Ot,It,Ht,ge,Ot,It,U.COLOR_BUFFER_BIT,U.NEAREST):Me?U.copyTexSubImage3D(Ft,Nt,Ht,ge,Ue+we,Wt,se,Ot,It):U.copyTexSubImage2D(Ft,Nt,Ht,ge,Wt,se,Ot,It);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Me?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Ft,Nt,Ht,ge,Ue,Ot,It,zt,Ee,sn,Te.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(Ft,Nt,Ht,ge,Ue,Ot,It,zt,Ee,Te.data):U.texSubImage3D(Ft,Nt,Ht,ge,Ue,Ot,It,zt,Ee,sn,Te):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Nt,Ht,ge,Ot,It,Ee,sn,Te.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Nt,Ht,ge,Te.width,Te.height,Ee,Te.data):U.texSubImage2D(U.TEXTURE_2D,Nt,Ht,ge,Ot,It,Ee,sn,Te);y.pixelStorei(U.UNPACK_ROW_LENGTH,un),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ue),y.pixelStorei(U.UNPACK_SKIP_PIXELS,Cn),y.pixelStorei(U.UNPACK_SKIP_ROWS,Yn),y.pixelStorei(U.UNPACK_SKIP_IMAGES,yi),Nt===0&&z.generateMipmaps&&U.generateMipmap(Ft),y.unbindTexture()},this.initRenderTarget=function(E){J.get(E).__webglFramebuffer===void 0&&rt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?rt.setTextureCube(E,0):E.isData3DTexture?rt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?rt.setTexture2DArray(E,0):rt.setTexture2D(E,0),y.unbindTexture()},this.resetState=function(){Y=0,W=0,nt=null,y.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}});function gv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function xv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function _v(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wd),this.state=ve.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function vv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Fi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ve.DOLLY;break;case Fi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ve.ROTATE}break;case Fi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ve.PAN}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(vh)}function yv(i){switch(this.state){case ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function bv(i){this.enabled===!1||this.enableZoom===!1||this.state!==ve.NONE||(i.preventDefault(),this.dispatchEvent(vh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Wd))}function Mv(i){this.enabled!==!1&&this._handleKeyDown(i)}function Sv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Oi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ve.TOUCH_ROTATE;break;case Oi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ve.TOUCH_PAN;break;default:this.state=ve.NONE}break;case 2:switch(this.touches.TWO){case Oi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ve.TOUCH_DOLLY_PAN;break;case Oi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ve.TOUCH_DOLLY_ROTATE;break;default:this.state=ve.NONE}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(vh)}function Ev(i){switch(this._trackPointer(i),this.state){case ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ve.NONE}}function wv(i){this.enabled!==!1&&i.preventDefault()}function Tv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Av(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Gd,vh,Wd,El,Vd,mv,$e,yn,ve,_h,wl,Xd=xe(()=>{Ze();Gd={type:"change"},vh={type:"start"},Wd={type:"end"},El=new pi,Vd=new En,mv=Math.cos(70*Vi.DEG2RAD),$e=new R,yn=2*Math.PI,ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_h=1e-6,wl=class extends Zr{constructor(t,e=null){super(t,e),this.state=ve.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fi.ROTATE,MIDDLE:Fi.DOLLY,RIGHT:Fi.PAN},this.touches={ONE:Oi.ROTATE,TWO:Oi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Ie,this._lastTargetPosition=new R,this._quat=new Ie().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ys,this._sphericalDelta=new Ys,this._scale=1,this._panOffset=new R,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new R,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xv.bind(this),this._onPointerDown=gv.bind(this),this._onPointerUp=_v.bind(this),this._onContextMenu=wv.bind(this),this._onMouseWheel=bv.bind(this),this._onKeyDown=Mv.bind(this),this._onTouchStart=Sv.bind(this),this._onTouchMove=Ev.bind(this),this._onMouseDown=vv.bind(this),this._onMouseMove=yv.bind(this),this._interceptControlDown=Tv.bind(this),this._interceptControlUp=Av.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ve.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Gd),this.update(),this.state=ve.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;$e.copy(e).sub(this.target),$e.applyQuaternion(this._quat),this._spherical.setFromVector3($e),this.autoRotate&&this.state===ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=yn:n>Math.PI&&(n-=yn),s<-Math.PI?s+=yn:s>Math.PI&&(s-=yn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if($e.setFromSpherical(this._spherical),$e.applyQuaternion(this._quatInverse),e.copy(this.target).add($e),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=$e.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=$e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(El.origin.copy(this.object.position),El.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(El.direction))<mv?this.object.lookAt(this.target):(Vd.setFromNormalAndCoplanarPoint(this.object.up,this.target),El.intersectPlane(Vd,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>_h||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_h||this._lastTargetPosition.distanceToSquared(this.target)>_h?(this.dispatchEvent(Gd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?yn/60*this.autoRotateSpeed*t:yn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){$e.setFromMatrixColumn(e,0),$e.multiplyScalar(-t),this._panOffset.add($e)}_panUp(t,e){this.screenSpacePanning===!0?$e.setFromMatrixColumn(e,1):($e.setFromMatrixColumn(e,0),$e.crossVectors(this.object.up,$e)),$e.multiplyScalar(t),this._panOffset.add($e)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;$e.copy(s).sub(this.target);let r=$e.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/e.clientHeight),this._rotateUp(yn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/e.clientHeight),this._rotateUp(yn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}});var nr,yh=xe(()=>{nr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`}});var Rn,Rv,bh,Cv,Wi,ir=xe(()=>{Ze();Rn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Rv=new Ui(-1,1,1,-1,0,1),bh=class extends ie{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}},Cv=new bh,Wi=class{constructor(t){this._mesh=new At(Cv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Rv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}});var Tl,Yd=xe(()=>{Ze();ir();Tl=class extends Rn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Le?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=gi.clone(t.uniforms),this.material=new Le({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Wi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}});var fo,Al,qd=xe(()=>{ir();fo=class extends Rn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Al=class extends Rn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}});var Rl,Zd=xe(()=>{Ze();yh();Yd();qd();Rl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new ut);this._width=n.width,this._height=n.height,e=new De(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:We}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Tl(nr),this.copyPass.material.blending=In,this.timer=new Yr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}fo!==void 0&&(o instanceof fo?n=!0:o instanceof Al&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new ut);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var Cl,$d=xe(()=>{Ze();ir();Cl=class extends Rn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new wt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}});var Kd,Jd=xe(()=>{Ze();Kd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new wt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`}});var sr,jd=xe(()=>{Ze();ir();yh();Jd();sr=class i extends Rn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ut(t.x,t.y):new ut(256,256),this.clearColor=new wt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new De(r,o,{type:We,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new De(r,o,{type:We,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new De(r,o,{type:We,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=Kd;this.highPassUniforms=gi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Le({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ut(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=gi.clone(nr.uniforms),this.blendMaterial=new Le({uniforms:this.copyUniforms,vertexShader:nr.vertexShader,fragmentShader:nr.fragmentShader,premultipliedAlpha:!0,blending:ln,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new wt,this._oldClearAlpha=1,this._basic=new Be,this._fsQuad=new Wi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ut(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new Le({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ut(.5,.5)},direction:{value:new ut(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Le({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};sr.BlurDirectionX=new ut(1,0);sr.BlurDirectionY=new ut(0,1)});var po,Qd=xe(()=>{po={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`}});var Pl,tf=xe(()=>{Ze();ir();Qd();Pl=class extends Rn{constructor(){super(),this.isOutputPass=!0,this.uniforms=gi.clone(po.uniforms),this.material=new Vs({name:po.name,uniforms:this.uniforms,vertexShader:po.vertexShader,fragmentShader:po.fragmentShader}),this._fsQuad=new Wi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},oe.getTransfer(this._outputColorSpace)===pe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===$r?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Kr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Jr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===jr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===to?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===as?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Qr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}});function de(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function Ll(i,t){return t[Math.floor(i()*t.length)%t.length]}function H(i,t,e){return t+(e-t)*i()}function Mh(i,t,e){return Math.min(e,Math.max(t,i))}function ze(i,t=i){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function Dl(i,{repeat:t=[1,1],colorSpace:e=Ce,anisotropy:n=8,wrap:s=an}={}){let r=new ei(i);return r.wrapS=s,r.wrapT=s,r.repeat.set(t[0],t[1]),e&&(r.colorSpace=e),r.anisotropy=n,r.needsUpdate=!0,r}function Dn(i,t,e,n,s=1){let r=i.getImageData(0,0,t,e),o=r.data;for(let a=0;a<o.length;a+=4){let l=(Math.random()-.5)*n;o[a]=Mh(o[a]+l,0,255),o[a+1]=Mh(o[a+1]+l,0,255),o[a+2]=Mh(o[a+2]+l,0,255),s!==1&&(o[a+3]=Math.round(o[a+3]*s))}i.putImageData(r,0,0)}function ef(i,t,e,n,s,r){let o=Math.min(r,n/2,s/2);i.beginPath(),i.moveTo(t+o,e),i.arcTo(t+n,e,t+n,e+s,o),i.arcTo(t+n,e+s,t,e+s,o),i.arcTo(t,e+s,t,e,o),i.arcTo(t,e,t+n,e,o),i.closePath()}function Nl(i,t,e){let n=-i/2,s=-t/2,r=Math.min(e,i/2,t/2),o=new Pi;return o.moveTo(n+r,s),o.lineTo(n+i-r,s),o.quadraticCurveTo(n+i,s,n+i,s+r),o.lineTo(n+i,s+t-r),o.quadraticCurveTo(n+i,s+t,n+i-r,s+t),o.lineTo(n+r,s+t),o.quadraticCurveTo(n,s+t,n,s+t-r),o.lineTo(n,s+r),o.quadraticCurveTo(n,s,n+r,s),o}function Ul(i,t,e,n,s=12,r=1){let o=de(r),a=[];for(let d=0;d<s;d++){let u=d/s*Math.PI*2,f=.84+o()*.26;a.push(new ut(i+Math.cos(u)*e*f,t+Math.sin(u)*n*f))}let l=new Pi,h=new Hn(a.map(d=>new R(d.x,0,d.y)),!0,"catmullrom",.6).getPoints(96);l.moveTo(h[0].x,h[0].z);for(let d=1;d<h.length-1;d++)l.lineTo(h[d].x,h[d].z);return l.closePath(),l}function Sh(i,t,{segments:e=160,y:n=0,yNoise:s=0,seed:r=2,widthFn:o=null}={}){let a=new Hn(i.map(m=>new R(m[0],0,m[1])),!1,"catmullrom",.28),l=de(r),c=[],h=[],d=[],u=0,f=null,g=[];for(let m=0;m<=e;m++){let p=m/e,b=a.getPointAt(p),w=a.getTangentAt(p).normalize(),v=new R(-w.z,0,w.x);f&&(u+=b.distanceTo(f)),f=b.clone();let S=t*(o?o(p):1),M=Math.sin(p*31+r)*.012+(l()-.5)*s,A=b.clone().addScaledVector(v,S/2),_=b.clone().addScaledVector(v,-S/2);if(c.push(A.x,n+M,A.z,_.x,n+M,_.z),h.push(0,u/4,1,u/4),m<e){let T=m*2;d.push(T,T+2,T+1,T+2,T+3,T+1)}g.push([A,_])}let x=new ie;return x.setAttribute("position",new Zt(c,3)),x.setAttribute("uv",new Zt(h,2)),x.setIndex(d),x.computeVertexNormals(),x}function ds(i,t,e,n=0,s=0,r=0,o=1,a=1,l=1){return new te().compose(new R(i,t,e),new Ie().setFromEuler(new pn(n,s,r)),new R(o,a,l))}function ye(i){if(!i.length)return null;let t=0,e=0,n=Object.keys(i[0].attributes);for(let l of i)t+=l.attributes.position.count,e+=l.index?l.index.count:l.attributes.position.count;let s=new ie;for(let l of n){let c=i[0].attributes[l].itemSize,h=new Float32Array(t*c),d=0;for(let u of i){let f=u.attributes[l];f&&(h.set(f.array,d),d+=f.array.length)}s.setAttribute(l,new Se(h,c))}let r=t>65535?new Uint32Array(e):new Uint16Array(e),o=0,a=0;for(let l of i){if(l.index)for(let c=0;c<l.index.count;c++)r[o++]=l.index.array[c]+a;else for(let c=0;c<l.attributes.position.count;c++)r[o++]=c+a;a+=l.attributes.position.count}return s.setIndex(new Se(r,1)),s.computeVertexNormals(),s}function Pv(){if(Il)return Il;let i=ze(128,128),t=i.getContext("2d"),e=t.createRadialGradient(64,64,6,64,64,62);return e.addColorStop(0,"rgba(20,18,14,.66)"),e.addColorStop(.4,"rgba(20,18,14,.28)"),e.addColorStop(1,"rgba(20,18,14,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Il=new ei(i),Il}function hn(i,t,e,n,s,r=.5){let o=new Be({map:Pv(),transparent:!0,opacity:r,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2}),a=new At(new Ge(n,s),o);return a.rotation.x=-Math.PI/2,a.position.set(t,.045,e),a.renderOrder=2,i.add(a),a}function nf(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function sf(i){return 1-Math.pow(1-i,3)}var Il,_i=xe(()=>{Ze();Il=null});function rf(i=11,t="limestone"){let e=ze(1024),n=e.getContext("2d"),s=de(i),r=t==="dark"?[118,112,102]:[199,190,174];n.fillStyle=`rgb(${r[0]},${r[1]},${r[2]})`,n.fillRect(0,0,1024,1024);let o=4,a=4,l=1024/o,c=1024/a,h=4;for(let d=0;d<a;d++)for(let u=0;u<o;u++){let f=d%2*l*.5,g=Math.floor(H(s,-10,11)),x=Math.floor(H(s,-4,7)),m=r[0]+g+x,p=r[1]+g,b=r[2]+g-2,w=(u*l+f)%1024;n.fillStyle=`rgb(${m},${p},${b})`,n.fillRect(w-l-h,d*c-h,l+h*2,c+h*2),n.fillRect(w-h,d*c-h,l+h*2,c+h*2);for(let S=0;S<38;S++){let M=w+H(s,6,l-6),A=d*c+H(s,6,c-6),_=H(s,2,22),T=n.createRadialGradient(M,A,0,M,A,_);T.addColorStop(0,`rgba(255,248,233,${H(s,.006,.035)})`),T.addColorStop(1,"rgba(255,248,233,0)"),n.fillStyle=T,n.fillRect(M-_,A-_,_*2,_*2);let P=(M+512)%1024;n.fillRect(P-_,A-_,_*2,_*2)}if(s()>.45){n.beginPath(),n.strokeStyle=`rgba(76,69,58,${H(s,.025,.07)})`,n.lineWidth=H(s,.5,1.4);let S=w+H(s,6,l-6),M=d*c+H(s,10,c-10);n.moveTo(S,M);for(let A=0;A<6;A++)S+=H(s,-20,24),M+=H(s,-14,14),n.lineTo(S,M);n.stroke()}let v=n.createLinearGradient(0,d*c,0,d*c+22);v.addColorStop(0,"rgba(47,43,36,.075)"),v.addColorStop(1,"rgba(47,43,36,0)"),n.fillStyle=v,n.fillRect(w-h,d*c,l+h*2,22)}n.strokeStyle="rgba(68,63,55,.24)",n.lineWidth=h;for(let d=0;d<=a;d++)n.beginPath(),n.moveTo(0,d*c),n.lineTo(1024,d*c),n.stroke();for(let d=0;d<=o;d++)n.beginPath(),n.moveTo(d*l,0),n.lineTo(d*l,1024),n.stroke();for(let d=0;d<18e3;d++){let u=s()*1024,f=s()*1024,g=H(s,.015,.08);n.fillStyle=s()>.6?`rgba(255,248,231,${g})`:`rgba(48,42,35,${g})`,n.fillRect(u,f,H(s,.7,2.2),H(s,.7,2.2))}return Dn(n,1024,1024,11),e}function Iv(){let i=ze(1024),t=i.getContext("2d"),e=de(303);t.fillStyle="#b8b1a3",t.fillRect(0,0,1024,1024);for(let n=0;n<90;n++){let s=e()*1024,r=e()*1024,o=H(e,40,210),a=t.createRadialGradient(s,r,2,s,r,o);a.addColorStop(0,`rgba(240,235,224,${H(e,.02,.09)})`),a.addColorStop(1,"rgba(240,235,224,0)"),t.fillStyle=a,t.fillRect(s-o,r-o,o*2,o*2)}t.strokeStyle="rgba(74,68,58,.16)",t.lineWidth=3;for(let n=1;n<4;n++)t.beginPath(),t.moveTo(n*1024/4,0),t.lineTo(n*1024/4,1024),t.stroke();for(let n=0;n<24e3;n++){let s=H(e,.015,.095);t.fillStyle=e()>.5?`rgba(255,250,239,${s})`:`rgba(48,44,37,${s})`,t.fillRect(e()*1024,e()*1024,H(e,.5,2.2),H(e,.5,2.2))}return Dn(t,1024,1024,10),i}function Lv(i=4,t=!0){let e=ze(1024,512),n=e.getContext("2d"),s=de(i),r=512/7;for(let o=0;o<7;o++){let a=o*r,l=t?[154+Math.floor(H(s,-18,20)),105+Math.floor(H(s,-12,16)),70+Math.floor(H(s,-8,12))]:[104,99,88];n.fillStyle=`rgb(${l[0]},${l[1]},${l[2]})`,n.fillRect(0,a,1024,r);for(let c=0;c<42;c++){let h=a+H(s,3,r-3),d=H(s,.5,4.5),u=H(s,.006,.024);n.beginPath(),n.strokeStyle=s()>.45?`rgba(63,40,24,${H(s,.025,.14)})`:`rgba(255,229,196,${H(s,.02,.11)})`,n.lineWidth=H(s,.5,2);for(let f=0;f<=1024;f+=16){let g=h+Math.sin(f*u+c)*d+Math.sin(f*u*2.7)*d*.3;f===0?n.moveTo(f,g):n.lineTo(f,g)}n.stroke()}if(s()>.55){let c=H(s,100,924),h=a+r*.5;for(let d=18;d>1;d-=3)n.beginPath(),n.strokeStyle=`rgba(66,42,27,${H(s,.04,.12)})`,n.ellipse(c,h,d*2.2,d*.65,H(s,-.2,.2),0,Math.PI*2),n.stroke()}n.fillStyle="rgba(37,27,20,.38)",n.fillRect(0,a+r-2,1024,2)}return Dn(n,1024,512,12),e}function Dv(){let i=ze(1024),t=i.getContext("2d"),e=de(71);t.fillStyle="#52603c",t.fillRect(0,0,1024,1024);for(let n=0;n<16;n++)t.fillStyle=n%2?`rgba(130,143,92,${H(e,.025,.07)})`:`rgba(26,37,20,${H(e,.02,.055)})`,t.fillRect(0,n*64,1024,64);for(let n=0;n<5e4;n++){let s=e()*1024,r=e()*1024,o=H(e,2,10),a=e();t.strokeStyle=a>.78?`rgba(174,171,104,${H(e,.08,.3)})`:a>.4?`rgba(110,138,67,${H(e,.09,.32)})`:`rgba(62,89,42,${H(e,.1,.35)})`,t.lineWidth=H(e,.6,1.5),t.beginPath(),t.moveTo(s,r),t.quadraticCurveTo(s+H(e,-2,2),r-o*.6,s+H(e,-3,3),r-o),t.stroke()}for(let n=0;n<50;n++){let s=e()*1024,r=e()*1024;t.fillStyle=e()>.5?"rgba(232,224,189,.55)":"rgba(198,172,184,.5)",t.beginPath(),t.arc(s,r,H(e,1,2.7),0,Math.PI*2),t.fill()}return Dn(t,1024,1024,8),i}function Nv(){let i=ze(512),t=i.getContext("2d"),e=de(90);t.fillStyle="#3e3427",t.fillRect(0,0,512,512);for(let n=0;n<8e3;n++)t.fillStyle=e()>.5?`rgba(97,81,59,${H(e,.15,.6)})`:`rgba(21,17,12,${H(e,.1,.5)})`,t.beginPath(),t.ellipse(e()*512,e()*512,H(e,1,4),H(e,.7,3),e()*3,0,Math.PI*2),t.fill();return Dn(t,512,512,16),i}function Fl(i,t="broad"){let n=ze(768),s=n.getContext("2d"),r=de(i);s.clearRect(0,0,768,768);let o=t==="olive",a=o?["#5f684a","#707956","#818965","#969d7a","#4e5941","#a9ad8d"]:["#334b2b","#455f33","#5e753f","#728a4d","#849a5d","#2a4126","#9b9e64"],l=o?780:520,c=s.createRadialGradient(768/2,768/2,20,768/2,768/2,768*.44);c.addColorStop(0,o?"rgba(49,56,38,.26)":"rgba(34,49,27,.3)"),c.addColorStop(.75,o?"rgba(49,56,38,.09)":"rgba(34,49,27,.1)"),c.addColorStop(1,"rgba(40,50,30,0)"),s.fillStyle=c,s.fillRect(0,0,768,768),s.strokeStyle="rgba(67,49,32,.55)";for(let h=0;h<9;h++){let d=H(r,0,Math.PI*2),u=H(r,110,270);s.lineWidth=H(r,1,3.4),s.beginPath(),s.moveTo(768/2,768/2),s.quadraticCurveTo(768/2+Math.cos(d)*u*.55+H(r,-30,30),768/2+Math.sin(d)*u*.55+H(r,-30,30),768/2+Math.cos(d)*u,768/2+Math.sin(d)*u),s.stroke()}for(let h=0;h<l;h++){let d=r()*Math.PI*2,u=Math.pow(r(),.55)*768*.395,f=768/2+Math.cos(d)*u*H(r,.8,1.1),g=768/2+Math.sin(d)*u*.88*H(r,.8,1.1),x=d+H(r,-.9,.9),m=o?H(r,3,8):H(r,9,19),p=o?H(r,12,26):H(r,13,27);s.save(),s.translate(f,g),s.rotate(x),s.fillStyle=Ll(r,a),s.globalAlpha=H(r,.72,1),s.beginPath(),s.ellipse(m*.22,0,m,p*.34,0,0,Math.PI*2),s.fill(),s.strokeStyle="rgba(233,231,189,.2)",s.lineWidth=.65,s.beginPath(),s.moveTo(-m*.7,0),s.lineTo(m*.9,0),s.stroke(),s.restore()}for(let h=0;h<55;h++){let d=H(r,Math.PI*1.05,Math.PI*1.9),u=H(r,768*.2,768*.46),f=768/2+Math.cos(d)*u,g=768/2+Math.sin(d)*u;s.save(),s.translate(f,g),s.rotate(d+H(r,-.6,.6)),s.fillStyle=o?"rgba(207,208,170,.8)":"rgba(179,188,111,.82)",s.beginPath(),s.ellipse(0,0,o?3.2:6.2,o?9:11,0,0,Math.PI*2),s.fill(),s.restore()}return n}function Ol(i=1,t="broad"){let e=ze(96,160),n=e.getContext("2d"),s=de(i*53+9);n.clearRect(0,0,96,160);let o=t==="olive"?[111,121,88]:[72,96,47],a=n.createLinearGradient(20,112,72,26);a.addColorStop(0,`rgb(${o[0]-14},${o[1]-12},${o[2]-8})`),a.addColorStop(.6,`rgb(${o[0]},${o[1]},${o[2]})`),a.addColorStop(1,`rgb(${o[0]+28},${o[1]+25},${o[2]+18})`),n.save(),n.translate(48,82),n.rotate(H(s,-.12,.12)),n.fillStyle=a,n.beginPath(),n.moveTo(0,72),n.bezierCurveTo(-36,34,-31,-56,0,-70),n.bezierCurveTo(31,-56,36,34,0,72),n.closePath(),n.fill(),n.strokeStyle="rgba(216,222,173,.34)",n.lineWidth=1.3,n.beginPath(),n.moveTo(0,67),n.lineTo(0,-60),n.stroke(),n.strokeStyle="rgba(213,220,171,.17)",n.lineWidth=.8;for(let l=0;l<6;l++){let c=38-l*18;n.beginPath(),n.moveTo(0,c),n.quadraticCurveTo(-12,c-6,-20,c-17),n.stroke(),n.beginPath(),n.moveTo(0,c),n.quadraticCurveTo(12,c-6,20,c-17),n.stroke()}return n.strokeStyle="rgba(71, 54, 33, .55)",n.lineWidth=1.7,n.beginPath(),n.moveTo(0,72),n.lineTo(0,89),n.stroke(),n.restore(),e}function Uv(){let i=ze(1600,800),t=i.getContext("2d"),e=de(809);t.clearRect(0,0,1600,800),t.filter="blur(26px)";let n=12;for(let s=0;s<n;s++){let r=e()*1600,o=H(e,210,445),a=H(e,.65,1.35),l=5+Math.floor(e()*5);for(let c=0;c<l;c++){let h=r+H(e,-150,150)*a,d=o+H(e,-24,28)*a,u=H(e,50,150)*a,f=H(e,8,30)*a,g=H(e,.045,.16);t.fillStyle=`rgba(255,246,230,${g})`;for(let x of[-1600,0,1600])t.beginPath(),t.ellipse(h+x,d,u,f,H(e,-.08,.08),0,Math.PI*2),t.fill()}}t.filter="blur(18px)";for(let s=0;s<26;s++){let r=e()*1600,o=H(e,70,360),a=H(e,70,270),l=H(e,2,8);t.fillStyle=`rgba(255,252,243,${H(e,.012,.04)})`;for(let c of[-1600,0,1600])t.beginPath(),t.ellipse(r+c,o,a,l,H(e,-.04,.04),0,Math.PI*2),t.fill()}return t.filter="none",i}function Fv(i=0){let n=ze(512,1024),s=ze(512,1024),r=n.getContext("2d"),o=s.getContext("2d"),a=de(400+i*91),l=[["#687879","#879493","#4c5c5d"],["#78766c","#969287","#59564d"],["#65747e","#8999a3","#4c5a63"],["#7a7266","#968c7d","#5d5448"]],[c,h,d]=l[i%l.length];r.fillStyle=c,r.fillRect(0,0,512,1024),o.fillStyle="#000",o.fillRect(0,0,512,1024);let u=8,f=28,g=512/u,x=1024/f;for(let p=0;p<f;p++){for(let b=0;b<u;b++){let w=a()>(i===0?.68:.76),v=b*g+5,S=p*x+6,M=g-10,A=x-11,_=Math.floor(H(a,30,58));if(r.fillStyle=`rgba(${_},${_+6},${_+7},${H(a,.6,.88)})`,r.fillRect(v,S,M,A),w){let P=a()>.2?[255,196,118]:[178,213,223],L=H(a,.35,.75);o.fillStyle=`rgba(${P[0]},${P[1]},${P[2]},${L})`,o.fillRect(v,S,M,A),a()>.5&&(o.fillStyle="rgba(255,241,205,.25)",o.fillRect(v,S+A*.64,M,1.2))}r.fillStyle="rgba(0,0,0,.2)",r.fillRect(v,S+A-2,M,2)}r.fillStyle=h,r.globalAlpha=.7,r.fillRect(0,p*x,512,3.5),r.globalAlpha=1,o.fillStyle="rgba(0,0,0,.8)",o.fillRect(0,p*x,512,4)}r.fillStyle=d;for(let p=0;p<=u;p++)r.globalAlpha=.72,r.fillRect(p*g-1.5,0,3,1024);r.globalAlpha=1;let m=r.createLinearGradient(0,0,0,1024);return m.addColorStop(0,"rgba(255,235,205,.06)"),m.addColorStop(.55,"rgba(0,0,0,0)"),m.addColorStop(1,"rgba(0,0,0,.18)"),r.fillStyle=m,r.fillRect(0,0,512,1024),Dn(r,512,1024,7),Dn(o,512,1024,5),{base:n,lights:s}}function Ov(){let i=ze(512),t=i.getContext("2d"),e=de(922);t.fillStyle="#808080",t.fillRect(0,0,512,512);for(let n=0;n<512;n+=3)t.strokeStyle=`rgba(255,255,255,${H(e,.03,.08)})`,t.lineWidth=1,t.beginPath(),t.moveTo(0,n),t.lineTo(512,n),t.stroke(),t.strokeStyle=`rgba(0,0,0,${H(e,.025,.07)})`,t.beginPath(),t.moveTo(n,0),t.lineTo(n,512),t.stroke();for(let n=0;n<6e3;n++)t.fillStyle=e()>.5?"rgba(255,255,255,.045)":"rgba(0,0,0,.04)",t.fillRect(e()*512,e()*512,H(e,.5,2.5),H(e,.5,2.5));return Dn(t,512,512,9),i}function Bv(){let i=ze(512,1024),t=i.getContext("2d"),e=de(55);t.fillStyle="#5d4b3c",t.fillRect(0,0,512,1024);for(let s=0;s<250;s++){let r=e()*512;t.strokeStyle=e()>.5?`rgba(33,24,18,${H(e,.06,.28)})`:`rgba(180,154,126,${H(e,.03,.16)})`,t.lineWidth=H(e,.7,3.8),t.beginPath(),t.moveTo(r,-20);for(let o=-20;o<=1044;o+=24)t.lineTo(r+Math.sin(o*H(e,.01,.04)+s)*H(e,2,8),o);t.stroke()}let n=t.createLinearGradient(0,760,0,1024);return n.addColorStop(0,"rgba(69,85,48,0)"),n.addColorStop(1,"rgba(69,85,48,.45)"),t.fillStyle=n,t.fillRect(0,700,512,324),Dn(t,512,1024,16),i}function kv(){let i=ze(640,960),t=i.getContext("2d");return t.fillStyle="#e8e0d0",t.fillRect(0,0,640,960),t.strokeStyle="rgba(44,45,39,.25)",t.lineWidth=2,t.strokeRect(18,18,604,924),t.fillStyle="#b9583c",t.fillRect(56,68,7,78),t.fillStyle="#2d2e28",t.font='600 64px "Microsoft YaHei", "PingFang SC", sans-serif',t.fillText("\u57CE\u5E02\xB7\u547C\u5438",84,128),t.font='400 20px "Segoe UI", sans-serif',t.letterSpacing="5px",t.fillStyle="rgba(45,46,40,.78)",t.fillText("URBAN RESPIRATION",88,165),t.letterSpacing="0px",t.strokeStyle="rgba(45,46,40,.24)",t.beginPath(),t.moveTo(56,210),t.lineTo(584,210),t.stroke(),t.fillStyle="#2d2e28",t.font='400 28px "Microsoft YaHei", "PingFang SC", sans-serif',t.fillText("\u5C4B\u9876\u516C\u5171\u4F11\u61A9\u7A7A\u95F4",56,262),t.fillStyle="rgba(45,46,40,.68)",t.font='400 21px "Microsoft YaHei", "PingFang SC", sans-serif',zv(t,"\u5728\u9AD8\u5BC6\u5EA6\u57CE\u5E02\u4E2D\uFF0C\u8BA9\u7B2C\u4E94\u7ACB\u9762\u6210\u4E3A\u53EF\u505C\u7559\u3001\u53EF\u547C\u5438\u7684\u7A7A\u4E2D\u7EFF\u6D32\u3002",56,305,530,34),t.strokeStyle="rgba(45,46,40,.18)",t.fillStyle="rgba(118,131,92,.14)",ef(t,56,400,528,290,22),t.fill(),t.stroke(),t.strokeStyle="rgba(185,88,60,.6)",t.lineWidth=3,t.beginPath(),t.moveTo(100,650),t.bezierCurveTo(180,520,250,620,310,540),t.bezierCurveTo(380,450,450,560,540,460),t.stroke(),t.fillStyle="rgba(185,88,60,.85)",t.beginPath(),t.arc(310,540,12,0,Math.PI*2),t.fill(),t.font='600 18px "Segoe UI", sans-serif',t.fillText("01",326,534),t.fillStyle="rgba(45,46,40,.5)",t.font='400 16px "Microsoft YaHei", sans-serif',t.fillText("\u4E2D\u592E\u5BA2\u5385",326,556),t.strokeStyle="rgba(45,46,40,.24)",t.lineWidth=1.4,t.beginPath(),t.arc(310,540,92,0,Math.PI*2),t.stroke(),[["38m","\u57CE\u5E02\u6807\u9AD8"],["860\u33A1","\u5C4B\u9876\u7EFF\u5730"],["32","\u6A21\u5757\u5BB6\u5177"]].forEach(([n,s],r)=>{let o=56+r*180;t.fillStyle="#b9583c",t.font='500 42px "Cormorant Garamond", Georgia, serif',t.fillText(n,o,768),t.fillStyle="rgba(45,46,40,.62)",t.font='400 17px "Microsoft YaHei", sans-serif',t.fillText(s,o,798)}),t.fillStyle="rgba(45,46,40,.35)",t.font='400 15px "Segoe UI", sans-serif',t.fillText("THE FIFTH FACADE  /  ROOFTOP COMMONS",56,880),i}function of(i){let t=Math.min(16,i.capabilities.getMaxAnisotropy()),e=(nt,X=[1,1],it=Ce)=>Dl(nt,{repeat:X,colorSpace:it,anisotropy:t}),n=rf(),s=rf(88,"dark"),r=Iv(),o=Lv(),a=Dv(),l=Nv(),c=Bv(),h=Ov(),d=Uv(),u=kv(),f=[0,1,2,3].map(Fv),g=[Fl(12,"broad"),Fl(29,"broad"),Fl(46,"olive"),Fl(67,"olive")],x=[Ol(2,"broad"),Ol(7,"broad"),Ol(13,"olive"),Ol(19,"olive")],m=e(n,[1,1]),p=e(s,[1,1]),b=e(r,[.18,.18]),w=e(o,[1.2,1.2]),v=e(a,[3.5,3.5]),S=e(l,[2,2]),M=e(c,[1,2]),A=e(d,[1,1],null);A.wrapS=an,A.wrapT=je;let _=e(u,[1,1]);_.wrapS=je,_.wrapT=je;let T=f.map(nt=>e(nt.base,[1,1])),P=f.map(nt=>e(nt.lights,[1,1])),L=g.map(nt=>{let X=e(nt,[1,1]);return X.wrapS=je,X.wrapT=je,X}),F=x.map(nt=>{let X=e(nt,[1,1]);return X.wrapS=je,X.wrapT=je,X}),O=m.clone();O.colorSpace=Xe,O.needsUpdate=!0;let D=b.clone();D.colorSpace=Xe,D.needsUpdate=!0;let B=w.clone();B.colorSpace=Xe,B.needsUpdate=!0;let Y=M.clone();Y.colorSpace=Xe,Y.needsUpdate=!0;let W=e(h,[9,9],Xe);return W.colorSpace=Xe,W.needsUpdate=!0,{paving:m,darkPaving:p,deck:b,wood:w,grass:v,soil:S,bark:M,cloud:A,sign:_,facades:T,facadeLights:P,leaves:L,leafSprites:F,fabricBump:W,pavingBump:O,deckBump:D,woodBump:B,barkBump:Y,maxAniso:t,dispose(){[m,p,b,w,v,S,M,A,_,...T,...P,...L,...F,W,O,D,B,Y].forEach(nt=>nt.dispose())}}}function zv(i,t,e,n,s,r){let o=[...t],a="";for(let l of o){let c=a+l;i.measureText(c).width>s&&a?(i.fillText(a,e,n),n+=r,a=l):a=c}return a&&i.fillText(a,e,n),n}var af=xe(()=>{Ze();_i()});function Nn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;mo.copy(t),mo[n]=0,mo.normalize();let c=.5*o/(o+a),h=1-mo.angleTo(i)/l;return Math.sign(mo[e])===1?h*c:a/(o+a)+c+c*(1-h)}var mo,Bl,lf=xe(()=>{Ze();mo=new R;Bl=class i extends me{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new R,c=new R,h=new R(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,x=new R,m=.5/o;for(let p=0,b=0;p<d.length;p+=3,b+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*r,d[p+1]=h.y*Math.sign(l.y)+c.y*r,d[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/g)){case 0:x.set(1,0,0),f[b+0]=Nn(x,c,"z","y",r,n),f[b+1]=1-Nn(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),f[b+0]=1-Nn(x,c,"z","y",r,n),f[b+1]=1-Nn(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),f[b+0]=1-Nn(x,c,"x","z",r,t),f[b+1]=Nn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),f[b+0]=1-Nn(x,c,"x","z",r,t),f[b+1]=1-Nn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),f[b+0]=1-Nn(x,c,"x","y",r,t),f[b+1]=1-Nn(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),f[b+0]=Nn(x,c,"x","y",r,t),f[b+1]=1-Nn(x,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}}});function He(i,t,{cast:e=!0,receive:n=!0,name:s=""}={}){if(!i.length)return null;let r=ye(i);i.forEach(a=>a.dispose());let o=new At(r,t);return o.castShadow=e,o.receiveShadow=n,o.name=s,o}function jt(i,t,e,n,s,r,o=0,a=0,l=0){let c=new me(i,t,e);return c.applyMatrix4(ds(n,s,r,o,a,l)),c}function ri(i,t,e,n,s,r,o=12,a=0,l=0,c=0){let h=new _e(i,t,e,o);return h.applyMatrix4(ds(n,s,r,a,l,c)),h}function cf(i,t,e,n,s,r,o,a=0,l=0,c=0){let h=new Bl(i,t,e,2,n);return h.applyMatrix4(ds(s,r,o,a,l,c)),h}function Wn(i,{length:t=2.3,back:e=!0,arms:n=!1,cushions:s=1,led:r=!0}={}){let o=new he;o.name="timber-bench";let a=[],l=[],c=[],h=[],d=.45,u=.56,f=6,g=.071,x=(u-f*g)/(f-1);for(let m=0;m<f;m++){let p=-u/2+g/2+m*(g+x);a.push(jt(t,.048,g,0,d,p))}for(let m of[-1,1]){let p=m*(t/2-.18);l.push(jt(.055,.43,.47,p,.225,0)),l.push(jt(.065,.055,.56,p,.405,0)),l.push(jt(.08,.025,.6,p,.012,0))}if(l.push(jt(t-.36,.05,.06,0,.29,0)),e){let m=-u/2+.02,p=.13;for(let w of[-1,1]){let v=w*(t/2-.2);l.push(jt(.055,.52,.055,v,.69,m+.055,p))}let b=[[.59,.1],[.73,.1],[.87,.1]];for(let[w,v]of b){let S=m+.055-(w-.59)*.13;a.push(jt(t,v,.042,0,w,S,p))}a.push(jt(t+.04,.055,.12,0,.985,m+.015,p))}if(n)for(let m of[-1,1]){let p=m*(t/2-.14);a.push(jt(.11,.045,.58,p,.67,.01)),l.push(jt(.045,.22,.045,p,.56,.26))}if(r&&c.push(jt(t*.8,.008,.016,0,.405,u/2-.01)),s){let m=Math.max(1,Math.min(s,2));for(let p=0;p<m;p++){let b=m===1?0:p===0?-t*.22:t*.22;h.push(cf(t*(m===1?.55:.34),.075,.38,.035,b,.505,.01))}}return o.add(He(a,i.wood,{name:"bench-wood"})),o.add(He(l,i.darkMetal,{name:"bench-frame"})),c.length&&o.add(He(c,i.ledStrip,{cast:!1,name:"bench-led"})),h.length&&o.add(He(h,i.cushion,{name:"bench-cushion"})),o.userData.seatY=d,o.userData.depth=u,hn(o,0,.035,t*1.32,.95,.28),o}function Eh(i,{arms:t=!0}={}){return Wn(i,{length:.72,back:!0,arms:t,cushions:1,led:!1})}function kl(i,{radius:t=.46,height:e=.43,type:n="side"}={}){let s=new he;s.name="timber-table";let r=[],o=[];r.push(ri(t,t*.96,.055,0,e,0,40));let a=new gn(t*.985,.022,8,48);if(a.rotateX(Math.PI/2),a.translate(0,e-.025,0),r.push(a),o.push(ri(.035,.045,e-.06,0,(e-.06)/2,0,12)),o.push(ri(t*.48,t*.55,.035,0,.018,0,28)),s.add(He(r,i.wood)),s.add(He(o,i.darkMetal)),n==="coffee"){let l=i.ceramic,c=new At(new _e(.038,.032,.06,16),l);c.position.set(t*.35,e+.03,.03),c.castShadow=!0,s.add(c);let h=c.clone();h.position.set(-t*.22,e+.03,-.12),s.add(h);let d=i.book,u=new At(new me(.28,.028,.2),d);u.position.set(-.06,e+.045,.1),u.rotation.y=.36,u.castShadow=!0,s.add(u)}return hn(s,0,.03,t*2.5,t*2.5,.22),s}function go(i){let t=new he;t.name="timber-lounger";let e=[],n=[],s=[],r=.78,o=.33,a=-.8,l=.22;for(let u of[-1,1]){let f=u*(r/2-.04);n.push(jt(.055,.06,1.56,f,.24,-.18,-.16)),n.push(jt(.05,.3,.05,f,.15,-.78)),n.push(jt(.05,.25,.05,f,.15,.35))}let c=9;for(let u=0;u<c;u++){let f=u/(c-1),g=a+f*(l-a),x=o+f*.035;e.push(jt(r-.04,.04,.073,0,x,g,-.1))}let h=-1,d=.95;for(let u=0;u<7;u++){let f=u/6,g=.32+Math.sin(-h)*d*f,x=o+Math.cos(h)*d*f+.02;e.push(jt(r-.04,.047,.077,0,x,g,h))}for(let u of[-1,1]){let f=u*(r/2-.02),g=.32+Math.sin(-h)*d*.5,x=o+Math.cos(h)*d*.5;n.push(jt(.05,.07,d,f,x,g,h)),n.push(jt(.05,.06,.95,f,.52,-.15)),n.push(jt(.045,.18,.045,f,.42,-.58)),n.push(jt(.045,.18,.045,f,.42,.05)),e.push(jt(.085,.045,1.08,f,.61,-.17))}return s.push(cf(r*.8,.075,.7,.04,0,o+.065,-.44)),t.add(He(e,i.wood)),t.add(He(n,i.darkMetal)),t.add(He(s,i.cushion,{name:"lounger-cushion"})),t.userData.seatY=o+.1,hn(t,0,.03,1.2,2.1,.28),t}function hf(i,t,{width:e=1.4,depth:n=.62,height:s=.46,seed:r=3,benchSide:o=0,x:a=0,z:l=0,ry:c=0}={}){let h=new he;h.name="module-planter",h.position.set(a,0,l),h.rotation.y=c;let d=[],u=[],f=[],g=.035;d.push(jt(e,s,g,0,s/2,n/2-g/2)),d.push(jt(e,s,g,0,s/2,-n/2+g/2)),d.push(jt(g,s,n,e/2-g/2,s/2,0)),d.push(jt(g,s,n,-e/2+g/2,s/2,0)),d.push(jt(e-g*2,.045,n-g*2,0,.045,0)),u.push(jt(e+.035,.035,.075,0,s+.012,n/2-.02)),u.push(jt(e+.035,.035,.075,0,s+.012,-n/2+.02)),u.push(jt(.075,.035,n,e/2-.02,s+.012,0)),u.push(jt(.075,.035,n,-e/2+.02,s+.012,0)),f.push(jt(e-.09,.03,n-.09,0,s-.045,0));for(let x of[-1,1])for(let m of[-1,1])d.push(jt(.065,.035,.065,x*(e/2-.1),.017,m*(n/2-.1)));if(o){let x=Math.sign(o),m=n*.96;u.push(jt(m,.048,.34,x*(e/2+.17),.43,0,0,0,0));for(let p of[-.25,.25])d.push(jt(.045,.4,.045,x*(e/2+.17),.2,p))}return h.add(He(d,i.darkMetal,{name:"planter-shell"})),h.add(He(u,i.wood,{name:"planter-cap"})),h.add(He(f,i.soil,{cast:!1,name:"planter-soil"})),h.userData.plantArea={width:e-.12,depth:n-.12,y:s-.03},t&&t.planters.push({x:a,y:s-.03,z:l,ry:c,width:e-.12,depth:n-.12,seed:r,count:Math.round(e*n*62)}),hn(h,0,.05,e+.8,n+.7,.25),h}function wh(i){let t=new he;t.name="timber-stool";let e=[],n=[];e.push(ri(.2,.19,.06,0,.45,0,24));for(let r=0;r<3;r++){let o=r/3*Math.PI*2;n.push(ri(.016,.021,.45,Math.cos(o)*.11,.225,Math.sin(o)*.11,6,0,0,.12))}let s=new gn(.14,.009,5,16);return s.rotateX(Math.PI/2),s.translate(0,.17,0),n.push(s),t.add(He(e,i.wood)),t.add(He(n,i.darkMetal)),hn(t,0,.03,.55,.55,.25),t}function uf(i){let t=new he;t.name="skyline-viewer";let e=[],n=[];e.push(ri(.22,.27,.05,0,.03,0,20)),e.push(ri(.032,.045,.92,0,.5,0,10)),n.push(ri(.075,.075,.06,0,.98,0,16));let s=new _e(.085,.095,.42,18);s.rotateX(Math.PI/2),s.rotateX(-.18),s.translate(0,1.1,.13),n.push(s);for(let o of[-1,1]){let a=new _e(.047,.047,.11,16);a.rotateX(Math.PI/2),a.translate(o*.105,1.12,.36),n.push(a);let l=new _e(.055,.055,.36,16);l.rotateX(Math.PI/2),l.translate(o*.1,1.11,.14),e.push(l)}let r=new gn(.09,.012,6,18,Math.PI*1.4);return r.rotateY(Math.PI/2),r.translate(0,.84,-.04),e.push(r),t.add(He(e,i.darkMetal)),t.add(He(n,i.brass)),hn(t,0,.03,.7,.7,.25),t}function df(i){let t=new he;t.name="waste-bin";let e=[],n=[];return e.push(jt(.38,.74,.38,0,.4,0)),e.push(jt(.4,.045,.4,0,.79,0)),e.push(jt(.02,.16,.24,.195,.57,0)),n.push(jt(.395,.16,.225,0,.48,0)),e.push(jt(.34,.04,.34,0,.025,0)),t.add(He(e,i.darkMetal)),t.add(He(n,i.corten,{cast:!1})),hn(t,0,.04,.8,.8,.3),t}function ff(i){let t=new he;t.name="pet-water-station";let e=[];e.push(ri(.038,.045,.95,0,.48,0,12)),e.push(ri(.09,.09,.035,0,.018,0,24)),e.push(jt(.26,.045,.045,.08,.9,0)),e.push(jt(.045,.12,.16,.19,.84,0));let n=new At(new _e(.17,.13,.09,28),i.ceramic);n.position.set(-.23,.18,.02),n.castShadow=!0,t.add(He(e,i.steel)),t.add(n);let s=new At(new mn(.145,24),i.water);s.rotation.x=-Math.PI/2,s.position.set(-.23,.226,.02),t.add(s);let r=n.clone();return r.scale.setScalar(.7),r.position.set(-.32,.12,.37),t.add(r),hn(t,-.1,.02,.9,.8,.25),t}function pf(i){let t=new he;t.name="park-sign";let e=[];e.push(jt(.05,1.5,.05,-.38,.75,0)),e.push(jt(.05,1.5,.05,.38,.75,0)),e.push(jt(.72,.045,.08,0,1.52,0)),e.push(jt(.8,.035,.4,0,.017,.04)),t.add(He(e,i.darkMetal));let n=new At(new Ge(.76,1.14),i.signFace);n.position.set(0,.91,.027),n.castShadow=!1,n.receiveShadow=!1,t.add(n);let s=new At(new me(.8,1.18,.045),i.darkMetal);return s.position.set(0,.91,0),s.castShadow=!0,t.add(s),n.position.z=.026,hn(t,0,.03,1.2,.6,.25),t}function mf(i,t){let e=[],n=new _e(.075,.085,.74,8);n.translate(0,.37,0),e.push(n);let s=new _e(.082,.082,.035,8);s.translate(0,.755,0),e.push(s);let r=new _e(.115,.12,.035,10);r.translate(0,.018,0),e.push(r);let o=new me(.017,.36,.008);o.translate(0,.38,.074);let a=o.clone();a.translate(0,0,-.148);let l=ye(e);e.forEach(p=>p.dispose());let c=ye([o,a]);o.dispose(),a.dispose();let h=i.darkMetal,d=i.lampLens,u=[[2,12.3,0],[4.8,8.4,0],[6.9,4,0],[9.8,-.6,0],[12.4,-5.1,0],[13,-9,0],[-.2,7.1,0],[-3.7,1,0],[-7.6,-3.8,0],[-11.1,-6.7,0],[9.9,12.1,0],[15.7,7,0],[16.8,-4.6,0],[-14.9,9.7,0],[-10.1,11.2,0],[4,-9.9,0]],f=new wn(l,h,u.length),g=new wn(c,d,u.length);f.castShadow=!0,f.receiveShadow=!0;let x=new te;u.forEach(([p,b],w)=>{x.makeTranslation(p,0,b),f.setMatrixAt(w,x),g.setMatrixAt(w,x),t.lampPositions.push([p,b])});let m=new he;return m.name="path-bollards",m.add(f,g),m}var gf=xe(()=>{Ze();lf();_i()});function Hv(i,t,e,n=.42,s=30){let r=s,o=[],a=[],l=[],c=new R(...i),h=new R(...t),d=new R(...e),u=new R;for(let x=0;x<=r;x++){let m=o.length/3;l.push(m);let p=x/r;for(let b=0;b<=r-x;b++){let w=b/r,v=1-w-p,S=w,M=p;u.set(0,0,0).addScaledVector(c,v).addScaledVector(h,S).addScaledVector(d,M);let A=3*(v*S+S*M+M*v),_=Math.sin((w*2+p*3)*Math.PI)*.035*Math.sin(Math.PI*(w+p));u.y-=n*A+_,o.push(u.x,u.y,u.z),a.push(w*2.6,p*2.6)}}let f=[];for(let x=0;x<r;x++){let m=l[x],p=l[x+1];for(let b=0;b<r-x;b++){let w=m+b,v=m+b+1,S=p+b,M=p+b+1;b<r-x&&f.push(w,v,S),b<r-x-1&&f.push(v,M,S)}}let g=new ie;return g.setAttribute("position",new Zt(o,3)),g.setAttribute("uv",new Zt(a,2)),g.setIndex(f),g.computeVertexNormals(),g}function Th(i,t,e=.08,n=9){let s=[],r=new R(...i),o=new R(...t);for(let a=0;a<=n;a++){let l=a/n,c=r.clone().lerp(o,l);c.y-=Math.sin(Math.PI*l)*e,s.push(c)}return s}function xf(i,t,e,n,s=[]){let r=[...e,...s];for(let o of r){let a=new R(...n),l=new R(...o),c=a.clone().lerp(l,.5);c.y-=.04;let h=new Hn([a,c,l]),d=new is(h,16,.013,4,!1);t.push(d)}}function _f(i){let t=new he;t.name="tensile-canopies";let e=[],n=[],s=[],r=[],o=[],a=[{color:"terracotta"},{color:"cream"},{color:"terracotta"},{color:"cream"},{color:"cream"}],l=[{mast:[6,0,4.7],mastHeight:6.55,corners:[[-3.7,4.25,7.4],[-3.1,4.35,-2.1]],sag:.46,anchors:[[-4.8,0,9.1],[-4.7,0,-4.2],[9.8,0,3.4]]},{mast:[8.7,0,-4],mastHeight:5.8,corners:[[2.7,4.05,-6.8],[5,4.15,1.4]],sag:.38,anchors:[[.7,0,-7.9],[2.9,0,3.4],[10.1,0,-7.1]]},{mast:[9.8,0,10.8],mastHeight:5.3,corners:[[3.1,3.5,9.1],[12.4,3.55,6.2]],sag:.34,anchors:[[2,0,10.8],[13.6,0,4.5],[12.1,0,13.6]]},{mast:[-13.4,0,-5.8],mastHeight:5.35,corners:[[-17.3,3.55,-1.5],[-9.5,3.8,-9.8]],sag:.34,anchors:[[-19.2,0,1],[-8,0,-11.7],[-16.5,0,-9.8]]},{mast:[15.8,0,-8.9],mastHeight:4.55,corners:[[10.9,3.05,-12.1],[18.1,3.1,-4.6]],sag:.3,anchors:[[9.6,0,-13.8],[19.2,0,-2.7],[16.8,0,-6.7]]}],c=de(17);if(l.forEach((h,d)=>{let u=[h.mast[0],h.mastHeight,h.mast[2]],f=u,g=h.corners[0],x=h.corners[1],m=i[a[d].color==="cream"?"sailCream":"sailOrange"],p=Hv(f,g,x,h.sag,34),b=new At(p,m);b.castShadow=!0,b.receiveShadow=!0,b.name=`sail-${d}`,t.add(b);let w=a[d].color==="cream",v=new Be({color:w?16769725:16757110,transparent:!0,opacity:w?.085:.075,side:Ve,depthWrite:!1,blending:ln,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});o.push(v);let S=new At(p,v);S.renderOrder=2,S.name=`sail-underlight-${d}`,t.add(S);let M=[...Th(f,g,.07),...Th(g,x,.08),...Th(x,f,.07)],A=new Hn(M,!0);r.push(new is(A,72,.026,5,!0));let _=3,T=i.sailEdge;for(let O=1;O<=_;O++){let D=O/(_+1),B=new R(...g).lerp(new R(...x),D);B.y-=h.sag*.6;let Y=new R(...f).lerp(B,.5);Y.y-=h.sag*.8;let W=new Hn([new R(...f),Y,B]);r.push(new is(W,18,.007,3,!1))}let P=new _e(.055,.105,h.mastHeight,16,1);P.translate(h.mast[0],h.mastHeight/2,h.mast[2]),n.push(P),n.push(new _e(.23,.28,.11,24).translate(h.mast[0],.055,h.mast[2])),n.push(new _e(.11,.12,.12,16).translate(h.mast[0],.16,h.mast[2])),n.push(new _e(.095,.095,.055,16).translate(h.mast[0],.78,h.mast[2])),n.push(new _e(.105,.085,.16,16).translate(h.mast[0],h.mastHeight-.1,h.mast[2])),xf(t,e,h.anchors.map(O=>[O[0],.03,O[2]]),u);for(let O of[g,x]){let D=[O[0]+(O[0]-h.mast[0])*.12,.03,O[2]+(O[2]-h.mast[2])*.12];xf(t,e,[D],O)}for(let O of h.anchors){let D=new _e(.15,.18,.035,16);D.translate(O[0],.022,O[2]),s.push(D);let B=new gn(.06,.015,6,12);B.rotateX(Math.PI/2),B.translate(O[0],.058,O[2]),s.push(B)}for(let O of[g,x]){let D=new gn(.075,.018,6,12);D.rotateX(Math.PI/2),D.translate(O[0],O[1]-.02,O[2]),s.push(D)}let L=new At(new mn(.72,28),i.gravel);L.rotation.x=-Math.PI/2,L.position.set(h.mast[0],.038,h.mast[2]),L.receiveShadow=!0,t.add(L);let F=new At(new gn(.66,.06,6,36),i.corten);F.rotation.x=Math.PI/2,F.position.set(h.mast[0],.075,h.mast[2]),F.castShadow=!0,F.receiveShadow=!0,t.add(F);for(let O=0;O<14;O++){let D=(O+1)/15,B=new R(...g).lerp(new R(...x),D);B.y-=.06,r.push(new xn(.012,5,4).translate(B.x,B.y,B.z))}}),r.length){let h=ye(r);r.forEach(u=>u.dispose());let d=new At(h,i.sailEdge);d.castShadow=!0,t.add(d)}if(n.length){let h=ye(n);n.forEach(u=>u.dispose());let d=new At(h,i.steel);d.castShadow=!0,d.receiveShadow=!0,t.add(d)}if(e.length){let h=ye(e);e.forEach(u=>u.dispose());let d=new At(h,i.cable);d.castShadow=!1,t.add(d)}if(s.length){let h=ye(s);s.forEach(u=>u.dispose());let d=new At(h,i.steel);d.castShadow=!0,d.receiveShadow=!0,t.add(d)}return{group:t,dispose(){t.traverse(h=>{h.geometry&&h.geometry.dispose()}),o.forEach(h=>h.dispose())}}}var vf=xe(()=>{Ze();_i()});function Vv(i,t){if(!i[t]){let e=Gv[t];if(!e)return new Kt({color:8421504,roughness:.9});i[t]=new Kt({color:new wt(e.color),roughness:e.roughness,metalness:e.metalness||0,envMapIntensity:.3})}return i[t]}function Xi(i,t,e,n=7){let s=new R(...i),o=new R(...t).clone().sub(s),a=o.length(),l=Math.max(e*2.05,a),c=new ts(e,Math.max(.015,l-e*2),3,n),h=new Ie().setFromUnitVectors(new R(0,1,0),o.normalize());return c.applyQuaternion(h),c.translate((i[0]+t[0])/2,(i[1]+t[1])/2,(i[2]+t[2])/2),c}function bn(i,t,e=[1,1,1],n=10){let s=new xn(i,n,Math.max(6,n-2));return s.scale(e[0],e[1],e[2]),s.translate(t[0],t[1],t[2]),s}function oi(i,t,e,n,s=[0,0,0]){let r=new me(i,t,e);return r.applyMatrix4(ds(n[0],n[1],n[2],s[0],s[1],s[2])),r}function Wv(i,t,e,n){let s=e,r=(M,A)=>{A.applyMatrix4(t),(i[M]||=[]).push(A)},o=n==="sitting"||n==="wheelchair",a=n==="walking",l=n==="reading",c=o?.55:.94,h=l?.18:0,d=o?1.08:1.47-h*.12,u=o?1.29:1.68-h*.1,f=0,g=o?-.03:0,x=o?.01:.02,m=new ts(.155,Math.abs(d-c)-.17,4,9);m.scale(1.06,1,.72),m.applyMatrix4(ds(0,(c+d)/2,(f+g)/2,h*.15,0,0)),r(s.coat,m);let p=new _e(.045,.052,.09,7);p.translate(0,u-.19,x),r(s.skin,p),r(s.skin,bn(.104,[0,u,x],[.9,1.08,.9],12)),r(s.skin,bn(.024,[0,u-.01,x+.1],[.8,1,.9],6)),r(s.hair,bn(.0085,[-.035,u+.012,x+.092],[1,1,.55],5)),r(s.hair,bn(.0085,[.035,u+.012,x+.092],[1,1,.55],5)),r(s.skin,bn(.018,[-.096,u-.005,x+.005],[.55,1,.7],5)),r(s.skin,bn(.018,[.096,u-.005,x+.005],[.55,1,.7],5));let b=new xn(.11,12,8,0,Math.PI*2,0,Math.PI*.58);b.scale(.94,.78,.96),b.rotateX(.12),b.translate(0,u+.026,x-.012),r(s.hair,b);let w=bn(.065,[0,u-.035,x-.071],[1.1,1.6,.7],8);r(s.hair,w);let v=.205,S=(M,A)=>{let _=M*v,T=[_,d-.015,g],P,L;if(o)P=[_*1.08,d-.22,g+.045],L=[_*.98,d-.36,g+.16];else if(l)P=[_*1.05,d-.23,g+.08],L=[_*.68,d-.33,g+.24];else if(a){let F=A?1:-1;P=[_*1.08,d-.24,g+F*.13],L=[_*1.08,d-.47,g+F*.2]}else P=[_*1.09,d-.26,g+.015],L=[_*1.05,d-.49,g+.035];r(s.coat,Xi(T,P,.055,7)),r(s.skin,Xi(P,L,.042,7)),r(s.skin,bn(.045,L,[1,1.1,.9],7))};if(S(-1,!0),S(1,!1),o)for(let M of[-1,1]){let A=M*.1,_=[A,.51,.02],T=[A*1.12,.51,.34],P=[A*1.15,.1,.4];r(s.pants,Xi(_,T,.082,7)),r(s.pants,Xi(T,P,.066,7)),r("shoes",oi(.12,.08,.25,[A*1.15,.047,.46]))}else{for(let M of[-1,1]){let A=M*.1,_=a?M<0?.16:-.12:0,T=[A,.9,0],P=[A*1.05,.49,_*.9],L=[A*1.03,.075,_];r(s.pants,Xi(T,P,.082,7)),r(s.pants,Xi(P,L,.065,7)),r("shoes",oi(.12,.08,.24,[A*1.03,.045,_+.05]))}l&&r(s.pants,oi(.26,.18,.26,[0,.93,0]))}}function yf(i,t,e,n,s=1){return new te().compose(new R(i,t,e),new Ie().setFromEuler(new pn(0,n,0)),new R(s,s,s))}function Xv(i,t,e,n,s,r){let o=yf(t,0,e,n,s),a=(h,d)=>{d.applyMatrix4(o),r&&d.applyMatrix4(r),(i[h]||=[]).push(d)},l=new ts(.14,.34,4,8);l.rotateX(Math.PI/2),l.translate(0,.42,-.02),a("dogFur",l),a("dogFur",bn(.13,[0,.52,.32],[.9,1,1.06],9)),a("dogFurLight",bn(.075,[0,.47,.47],[1,.8,1.1],8)),a("dogDark",bn(.034,[0,.48,.54],[1,.8,.7],6)),a("dogFur",bn(.06,[-.07,.63,.34],[.6,1.2,.7],6)),a("dogFur",bn(.06,[.07,.63,.34],[.6,1.2,.7],6));for(let h of[-1,1])for(let d of[-1,1])a("dogFur",Xi([h*.075,.36,.17+d*.02],[h*.085,.04,.22+d*.03],.036,6));let c=Xi([0,.46,-.19],[0,.68,-.4],.035,6);a("dogFur",c)}function Yv(i,t){let e=(s,r)=>{r.applyMatrix4(t),(i[s]||=[]).push(r)},n=new gn(.31,.025,8,28);n.rotateY(Math.PI/2);for(let s of[-1,1]){let r=n.clone();r.translate(s*.33,.33,.07),e("wheelRubber",r);let o=new gn(.265,.012,6,24);o.rotateY(Math.PI/2),o.translate(s*.33,.33,.07),e("wheelMetal",o);let a=new gn(.34,.013,6,28);a.rotateY(Math.PI/2),a.translate(s*.37,.33,.07),e("wheelMetal",a),e("wheelMetal",oi(.035,.65,.035,[s*.33,.47,-.05],[.25,0,0])),e("wheelRubber",bn(.055,[s*.24,.08,.4],[1,.8,1],6))}e("wheelMetal",oi(.55,.035,.03,[0,.59,.13],[.12,0,0])),e("wheelMetal",oi(.55,.035,.03,[0,.72,0],[.12,0,0])),e("wheelMetal",oi(.028,.04,.58,[-.33,.03,.12])),e("wheelMetal",oi(.028,.04,.58,[.33,.03,.12])),e("pantsDark",oi(.46,.035,.4,[0,.52,.06])),e("pantsDark",oi(.46,.42,.035,[0,.73,-.12],[-.1,0,0]))}function bf(){let i=new he;i.name="people";let t={},e={},n=[{x:-2.17,y:0,z:5.75,ry:2.32,palette:{coat:"creamCoat",pants:"pantsDark",skin:"skin2",hair:"hairDark"},pose:"sitting"},{x:-2.93,y:0,z:4.95,ry:2.28,palette:{coat:"oliveCoat",pants:"pantsBlue",skin:"skin3",hair:"hairBrown"},pose:"sitting"},{x:4.95,y:0,z:6.4,ry:-1.02,palette:{coat:"rustCoat",pants:"pantsDark",skin:"skin2",hair:"hairDark"},pose:"wheelchair"},{x:4.2,y:0,z:7.1,ry:-.92,palette:{coat:"charcoalCoat",pants:"pantsSand",skin:"skin1",hair:"hairDark"},pose:"standing"},{x:2.7,y:0,z:8.9,ry:2.32,palette:{coat:"oliveCoat",pants:"pantsDark",skin:"skin3",hair:"hairBrown"},pose:"walking"},{x:14.8,y:0,z:-11.1,ry:Math.PI,palette:{coat:"blueCoat",pants:"pantsDark",skin:"skin1",hair:"hairDark"},pose:"standing"},{x:-13,y:0,z:-3.2,ry:2.3,palette:{coat:"creamCoat",pants:"pantsSand",skin:"skin3",hair:"hairBrown"},pose:"reading"},{x:-10.6,y:.02,z:3.1,ry:2.6,palette:{coat:"rustCoat",pants:"pantsBlue",skin:"skin2",hair:"hairDark"},pose:"standing"},{x:-9.8,y:.02,z:4.2,ry:2.1,scale:.64,palette:{coat:"creamCoat",pants:"pantsDark",skin:"skin3",hair:"hairBrown"},pose:"standing"},{x:12.2,y:0,z:3.6,ry:-2.3,palette:{coat:"charcoalCoat",pants:"pantsSand",skin:"skin1",hair:"hairDark"},pose:"standing"},{x:11.6,y:0,z:4.4,ry:1,palette:{coat:"oliveCoat",pants:"pantsDark",skin:"skin2",hair:"hairBrown"},pose:"standing"},{x:12.35,y:0,z:-10.42,ry:Math.PI,palette:{coat:"creamCoat",pants:"pantsDark",skin:"skin1",hair:"hairBrown"},pose:"sitting"},{x:13.4,y:0,z:-10.42,ry:Math.PI+.06,palette:{coat:"blueCoat",pants:"pantsDark",skin:"skin2",hair:"hairDark"},pose:"sitting"},{x:1.05,y:.02,z:6.15,ry:2.5,scale:.57,palette:{coat:"rustCoat",pants:"pantsBlue",skin:"skin3",hair:"hairBrown"},pose:"walking"},{x:-14.1,y:.02,z:7.2,ry:-1.2,palette:{coat:"charcoalCoat",pants:"pantsDark",skin:"skin1",hair:"hairDark"},pose:"standing"},{x:6.55,y:0,z:2.55,ry:-1.75,palette:{coat:"oliveCoat",pants:"pantsSand",skin:"skin2",hair:"hairBrown"},pose:"sitting"},{x:8.8,y:0,z:.35,ry:-2.55,palette:{coat:"creamCoat",pants:"pantsDark",skin:"skin3",hair:"hairDark"},pose:"standing"},{x:9.55,y:0,z:.05,ry:.75,palette:{coat:"charcoalCoat",pants:"pantsBlue",skin:"skin1",hair:"hairBrown"},pose:"standing"}];for(let l of n){let c=yf(l.x,l.y,l.z,l.ry,l.scale||1);l.pose==="wheelchair"&&Yv(e,c),Wv(e,c,l.palette,l.pose),hn(i,l.x,l.z,.78*(l.scale||1),.7*(l.scale||1),.3)}Xv(e,1.25,9.9,.3,1,null),hn(i,1.25,9.9,.8,.55,.28),e.blanket=e.blanket||[];let s=new Ge(2,1.7);s.rotateX(-Math.PI/2),s.rotateY(.32),s.translate(-11.2,.045,2.45),e.blanket.push(s),e.wheelMetal=e.wheelMetal||[];let r=new _e(.035,.03,.07,10);r.translate(-10.6,.1,2.4),e.wheelMetal.push(r);let o=new _e(.15,.15,.012,20);o.translate(-11.7,.06,2.9),e.creamCoat=e.creamCoat||[],e.creamCoat.push(o);for(let[l,c]of Object.entries(e)){if(!c.length)continue;let h=ye(c);c.forEach(u=>u.dispose());let d=new At(h,Vv(t,l));d.castShadow=!0,d.receiveShadow=!0,d.name=`crowd-${l}`,i.add(d)}let a=new mi(new ie().setFromPoints([new R(2.54,.94,8.72),new R(1.95,.8,9.15),new R(1.45,.6,9.7),new R(1.28,.52,9.85)]),new Qn({color:9205337,transparent:!0,opacity:.9}));return i.add(a),{group:i,dispose(){i.traverse(l=>{l.geometry&&l.geometry.dispose()}),Object.values(t).forEach(l=>l.dispose())}}}var Gv,Mf=xe(()=>{Ze();_i();Gv={skin1:{color:"#c69270",roughness:.88},skin2:{color:"#a66f52",roughness:.9},skin3:{color:"#e0b08c",roughness:.88},hairDark:{color:"#28231f",roughness:.92},hairBrown:{color:"#5a4232",roughness:.92},creamCoat:{color:"#ddd2bd",roughness:.93},oliveCoat:{color:"#5d6650",roughness:.94},rustCoat:{color:"#9c5e45",roughness:.93},charcoalCoat:{color:"#3b3b37",roughness:.94},blueCoat:{color:"#526573",roughness:.94},pantsDark:{color:"#373c3b",roughness:.95},pantsBlue:{color:"#495966",roughness:.95},pantsSand:{color:"#a49278",roughness:.95},shoes:{color:"#272522",roughness:.68,metalness:.08},dogFur:{color:"#a67b4d",roughness:.97},dogFurLight:{color:"#c49b68",roughness:.97},dogDark:{color:"#35261e",roughness:.7},wheelMetal:{color:"#5d6364",metalness:.78,roughness:.35},wheelRubber:{color:"#222423",roughness:.72},blanket:{color:"#c5b49b",roughness:.98}}});function xo(i,t=1,e=1){let n=i.clone();return n.wrapS=an,n.wrapT=an,n.repeat.set(t,e),n.needsUpdate=!0,n}function qv(i){let t=(st,mt,bt)=>{let G=xo(st,mt,bt),j=xo(st,mt,bt);return j.colorSpace=Xe,j.needsUpdate=!0,new Kt({map:G,bumpMap:j,bumpScale:.7,roughness:.78,metalness:.02,color:15853786,envMapIntensity:.35})},e=t(i.paving,1,1),n=t(i.paving,2.2,2.2),s=new Kt({color:6117456,roughness:.84,metalness:.08}),r=new Kt({map:i.deck,bumpMap:i.deckBump,bumpScale:.5,roughness:.79,metalness:.02,envMapIntensity:.28}),o=new Kt({color:5066312,roughness:.55,metalness:.4}),a=xo(i.grass,.22,.22),l=new Kt({map:a,bumpMap:a,bumpScale:.35,roughness:.96,metalness:0,color:14147014}),c=xo(i.soil,.35,.35),h=new Kt({map:c,roughness:1,metalness:0,color:13681064}),d=i.wood,u=new Kt({map:d,bumpMap:i.woodBump,bumpScale:.22,roughness:.55,metalness:.01,envMapIntensity:.38,color:14995640}),f=new Kt({map:d,bumpMap:i.woodBump,bumpScale:.2,color:9137233,roughness:.67,envMapIntensity:.25}),g=new Kt({color:11975092,metalness:.92,roughness:.24,envMapIntensity:1.4}),x=new Kt({color:3027245,metalness:.76,roughness:.4,envMapIntensity:.9}),m=new Kt({color:8606011,metalness:.3,roughness:.74,envMapIntensity:.4}),p=new Kt({color:11117204,roughness:.88,metalness:.03,envMapIntensity:.22}),b=xo(i.darkPaving,.55,.55),w=new Kt({map:b,roughness:.98,metalness:0,color:10459017}),v=new Kt({map:i.bark,bumpMap:i.barkBump,bumpScale:.7,roughness:.97,metalness:0,color:13087384}),S=new ni({color:13133123,roughness:.72,metalness:0,side:ke,bumpMap:i.fabricBump,bumpScale:.0025,sheen:.52,sheenRoughness:.74,sheenColor:new wt(15906959),emissive:new wt(8138520),emissiveIntensity:.06,envMapIntensity:.35,clearcoat:.05}),M=new ni({color:14799545,roughness:.78,metalness:0,side:ke,bumpMap:i.fabricBump,bumpScale:.002,sheen:.58,sheenRoughness:.76,sheenColor:new wt(16770245),emissive:new wt(7295543),emissiveIntensity:.04,envMapIntensity:.35,clearcoat:.05}),A=new Kt({color:8342069,roughness:.8,metalness:.02}),_=new Kt({color:6053980,metalness:.9,roughness:.32,envMapIntensity:1.1}),T=new ni({color:14213597,transparent:!0,opacity:.17,roughness:.08,metalness:0,side:ke,depthWrite:!1,envMapIntensity:2,clearcoat:1,clearcoatRoughness:.03}),P=T.clone();P.opacity=.28,P.color.set(12111819);let L=Zv("rgba(255,196,125,0.9)","rgba(255,162,82,0)"),F=new Be({map:L,color:16760192,transparent:!0,opacity:.5,depthWrite:!1,blending:ln,toneMapped:!1}),O=new Kt({color:16762751,emissive:new wt(16754522),emissiveIntensity:2.4,roughness:.3,metalness:.05}),D=new Kt({color:16764302,emissive:new wt(16756066),emissiveIntensity:2.6,roughness:.25,metalness:.1}),B=new Kt({color:11165253,roughness:.9,metalness:.02,envMapIntensity:.3}),Y=new Kt({color:15261645,roughness:.38,metalness:.05,envMapIntensity:.7}),W=new Kt({color:4018253,roughness:.73}),nt=new ni({color:7902359,roughness:.06,metalness:0,transparent:!0,opacity:.78,envMapIntensity:1.4}),X=new Kt({color:11570003,metalness:.9,roughness:.35,envMapIntensity:1}),it=new Kt({map:i.sign,roughness:.52,metalness:.08,emissive:new wt(16767409),emissiveMap:i.sign,emissiveIntensity:.12,envMapIntensity:.35}),lt=i.leaves.map((st,mt)=>new Kt({map:st,alphaTest:.38,side:ke,roughness:.96,metalness:0,color:13162154,emissive:new wt(1055243),emissiveIntensity:.12,envMapIntensity:.22})),Mt=i.leafSprites.map(st=>new Kt({map:st,alphaTest:.42,side:ke,roughness:.95,metalness:0,color:16777215,emissive:new wt(857609),emissiveIntensity:.1,envMapIntensity:.18})),yt=new Kt({color:3885868,roughness:.99,metalness:0,flatShading:!1});return{path:e,plaza:n,pathEdge:s,deck:r,deckSide:o,lawn:l,soil:h,wood:u,woodDark:f,steel:g,darkMetal:x,corten:m,concrete:p,gravel:w,bark:v,sailOrange:S,sailCream:M,sailEdge:A,cable:_,glass:T,entryGlass:P,poolGlow:F,ledStrip:O,lampLens:D,cushion:B,ceramic:Y,book:W,water:nt,brass:X,signFace:it,leafMats:lt,leafSpriteMats:Mt,foliageCore:yt,textures:{...i,lawnMap:a,soilMap:c,gravelMap:b,poolMap:L}}}function Zv(i,t){let e=ze(128,128),n=e.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,62);s.addColorStop(0,i),s.addColorStop(.35,i),s.addColorStop(1,t),n.fillStyle=s,n.fillRect(0,0,128,128);let r=new ei(e);return r.colorSpace=Ce,r}function $v(){let i=ze(64,64),t=i.getContext("2d");t.clearRect(0,0,64,64);let e=t.createRadialGradient(32,32,0,32,32,28);e.addColorStop(0,"rgba(255,249,221,1)"),e.addColorStop(.3,"rgba(246,224,173,.85)"),e.addColorStop(1,"rgba(240,200,130,0)"),t.fillStyle=e,t.beginPath(),t.arc(32,32,28,0,Math.PI*2),t.fill();let n=new ei(i);return n.colorSpace=Ce,n}function Kv(){let t=ze(1024),e=t.getContext("2d"),n=de(255),s=1024/2,r=1024/2;e.clearRect(0,0,1024,1024),e.fillStyle="#a59a88",e.fillRect(0,0,1024,1024);let o=1024*.497,a=8,l=[[176,167,151],[168,158,142],[183,174,159],[160,151,137],[174,164,148],[156,147,133],[181,171,154],[164,154,139]];for(let c=0;c<a;c++){let h=o*(c/a),d=o*((c+1)/a),u=c<2?16:30,f=c%2*(Math.PI/u);for(let g=0;g<u;g++){let x=f+g/u*Math.PI*2+.0025,m=f+(g+1)/u*Math.PI*2-.0025,p=Math.floor(H(n,-10,11)),b=l[(c+g)%l.length];if(e.fillStyle=`rgb(${b[0]+p},${b[1]+p},${b[2]+p-1})`,e.beginPath(),e.arc(s,r,d-(c>0?.8:0),x,m),e.arc(s,r,h+.8,m,x,!0),e.closePath(),e.fill(),n()>.72){let w=H(n,x+.01,m-.01),v=H(n,h+4,d-4);e.strokeStyle=`rgba(73,67,57,${H(n,.04,.1)})`,e.lineWidth=H(n,.7,1.5),e.beginPath(),e.moveTo(s+Math.cos(w)*v,r+Math.sin(w)*v),e.lineTo(s+Math.cos(w+.03)*(v+18),r+Math.sin(w+.03)*(v+18)),e.stroke()}}}for(let c=0;c<=a;c++){let h=o*(c/a);e.strokeStyle="rgba(55,50,43,.4)",e.lineWidth=c===0?1:2.2,e.beginPath(),e.arc(s,r,h,0,Math.PI*2),e.stroke()}for(let c=0;c<30;c++){let h=c/30*Math.PI*2;e.strokeStyle="rgba(55,50,43,.26)",e.lineWidth=1.4,e.beginPath(),e.moveTo(s+Math.cos(h)*o*.25,r+Math.sin(h)*o*.25),e.lineTo(s+Math.cos(h)*o,r+Math.sin(h)*o),e.stroke()}e.strokeStyle="rgba(51,47,40,.58)",e.lineWidth=4,e.beginPath(),e.arc(s,r,o-2,0,Math.PI*2),e.stroke();for(let c=0;c<2e4;c++){let h=n()*Math.PI*2,d=Math.sqrt(n())*o;e.fillStyle=n()>.5?`rgba(255,246,229,${H(n,.01,.055)})`:`rgba(47,41,33,${H(n,.008,.05)})`,e.fillRect(s+Math.cos(h)*d,r+Math.sin(h)*d,H(n,.6,2.2),H(n,.6,2.2))}return Dn(e,1024,1024,8),t}function Jv(){let t=ze(1024),e=t.getContext("2d");e.clearRect(0,0,1024,1024),e.translate(1024/2,1024/2),e.strokeStyle="rgba(255,240,209,.62)",e.lineWidth=2,e.beginPath(),e.arc(0,0,474,0,Math.PI*2),e.stroke(),e.strokeStyle="rgba(255,240,209,.28)",e.lineWidth=1.2,e.beginPath(),e.arc(0,0,455,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(0,0,190,0,Math.PI*2),e.stroke();let n="URBAN RESPIRATION  \xB7  ROOFTOP COMMONS  \xB7  CITY IN BREATH  \xB7  ";e.fillStyle="rgba(250,232,196,.68)",e.font='500 25px "Cormorant Garamond", Georgia, serif';let s=428,r=[...n],o=-Math.PI/2;for(let l=0;l<r.length;l++)e.save(),e.rotate(o),e.translate(0,-s),e.fillText(r[l],-6,8),e.restore(),o+=.0165;for(let l=0;l<48;l++){let c=l/48*Math.PI*2,h=l%4===0?200:182;e.strokeStyle=l%4===0?"rgba(255,238,201,.55)":"rgba(255,238,201,.25)",e.lineWidth=l%4===0?2.2:1.2,e.beginPath(),e.moveTo(Math.cos(c)*h,Math.sin(c)*h),e.lineTo(Math.cos(c)*232,Math.sin(c)*232),e.stroke()}e.strokeStyle="rgba(255,235,196,.5)",e.lineWidth=1.3,e.beginPath(),e.arc(0,0,54,0,Math.PI*2),e.stroke(),e.fillStyle="rgba(255,235,196,.74)",e.font='400 22px "Cormorant Garamond", Georgia, serif',e.textAlign="center",e.fillText("\xD8 8.40 m",0,8);let a=new ei(t);return a.colorSpace=Ce,a.anisotropy=8,a}function Ah(i,t,e,n){let s=Sh(t,e+.38,{segments:180,y:.022,yNoise:.0015,seed:1}),r=new At(s,n.pathEdge);r.receiveShadow=!0,r.castShadow=!1,i.add(r);let o=Sh(t,e,{segments:200,y:.034,yNoise:.0018,seed:7}),a=new At(o,n.path);return a.receiveShadow=!0,a.castShadow=!1,i.add(a),a}function jv(i,t){let e=[i[0]],n=i[0],s=t;for(let o=1;o<i.length;o++){let a=n,l=i[o],c=a.distanceTo(l);for(;c>=s;){let h=s/c,d=a.clone().lerp(l,h);e.push(d),a=d,c=a.distanceTo(l),s=t}s-=c,n=l}let r=i[i.length-1];return e[e.length-1].distanceTo(r)>t*.4?e.push(r.clone()):e[e.length-1].copy(r),e}function Qv(i){let t=new he;t.name="glass-balustrade";let s=Nl(43.4,29.4,3.9).getPoints(260).map(h=>new R(h.x,0,-h.y)),r=jv(s,2.55),o=[],a=[],l=[],c=0;for(let h=0;h<r.length;h++){let d=r[h],u=r[(h+1)%r.length],f=d.clone().lerp(u,.5);if(!(f.z>14.2&&f.x>-.4&&f.x<6.2)){let x=u.x-d.x,m=u.z-d.z,p=Math.hypot(x,m);if(p>.2){let b=Math.atan2(-m,x),w=new Ge(p-.025,1.02);w.rotateY(b),w.translate(f.x,.655,f.z),o.push(w);let v=new me(p+.02,.075,.06);v.rotateY(b),v.translate(f.x,.075,f.z),a.push(v);let S=new _e(.022,.022,p+.02,7);S.rotateZ(Math.PI/2),S.rotateY(b),S.translate(f.x,1.17,f.z),a.push(S);let M=new me(p-.1,.012,.022);M.rotateY(b),M.translate(f.x,.124,f.z),l.push(M),c++}}if(h%2===0){let x=new _e(.033,.045,1.18,8);x.translate(d.x,.59,d.z),a.push(x)}}if(o.length){let h=new At(ye(o),i.glass);h.castShadow=!1,h.receiveShadow=!1,h.renderOrder=3,t.add(h),o.forEach(d=>d.dispose())}if(a.length){let h=new At(ye(a),i.darkMetal);h.castShadow=!0,h.receiveShadow=!0,t.add(h),a.forEach(d=>d.dispose())}if(l.length){let h=new At(ye(l),i.ledStrip);h.castShadow=!1,h.receiveShadow=!1,t.add(h),l.forEach(d=>d.dispose())}return t.userData.panelCount=c,t}function ty(i,t,e,n,s,{seed:r=4,edgeMaterial:o="corten",height:a=.34,planting:l,count:c=45}={}){let h=Ul(0,0,n,s,14,r),d=new Gs(h,{depth:a,bevelEnabled:!1,curveSegments:14});d.rotateX(-Math.PI/2);let u=new At(d,[i.soil,i[o]]);return u.position.set(t,0,e),u.castShadow=!0,u.receiveShadow=!0,u.name="raised-planting-bed",l&&l.beds.push({cx:t,cz:e,rx:n,rz:s,y:a,seed:r,count:c}),{mesh:u,top:a,cx:t,cz:e,rx:n,rz:s}}function zl(i,t,e,n,s=6){let r=t.clone().sub(i),o=r.length();if(o<.01)return null;let a=new _e(n,e,o,s,1,!1),l=new Ie().setFromUnitVectors(new R(0,1,0),r.clone().normalize());return a.applyQuaternion(l),a.translate((i.x+t.x)/2,(i.y+t.y)/2,(i.z+t.z)/2),a}function ey(i){let t=new he;t.name="trees";let e=[],n=[],s=[[],[],[],[]],r=[[],[],[],[]],o=de(307),a=[{x:-6.4,z:10.4,base:.35,height:4.7,spread:2.6,type:"broad",seed:2},{x:-18.2,z:2,base:.35,height:3.7,spread:2,type:"olive",seed:5},{x:-19,z:-10.7,base:.35,height:3.6,spread:1.9,type:"olive",seed:8},{x:17.1,z:4.3,base:.35,height:4.4,spread:2.5,type:"broad",seed:11},{x:-8.2,z:-12.3,base:.35,height:4.8,spread:2.7,type:"broad",seed:14},{x:11.8,z:12.2,base:.35,height:4,spread:2.3,type:"broad",seed:17},{x:-14.7,z:12.8,base:.35,height:3.4,spread:1.9,type:"olive",seed:20},{x:5.4,z:-12.8,base:.35,height:4.4,spread:2.4,type:"broad",seed:23},{x:-20,z:8,base:.35,height:3.2,spread:1.8,type:"olive",seed:26},{x:18,z:-10,base:.35,height:3.7,spread:2.1,type:"broad",seed:29},{x:1.3,z:-8.7,base:.34,height:4.9,spread:2.45,type:"broad",seed:32}];for(let f of a){let g=de(f.seed*73+9),x=new R(f.x,f.base,f.z),m=f.type==="olive",p=f.height,b=f.spread,w=m?p*.33:p*.42,v=new R(H(g,-.16,.16),1,H(g,-.16,.16)).normalize(),S=x.clone().addScaledVector(v,w),M=zl(x,S,m?.11:.17,m?.055:.075,6);M&&e.push(M);let A=[],_=m?4:3;for(let B=0;B<_;B++){let Y=B/_*Math.PI*2+H(g,-.3,.3),W=new R(Math.cos(Y)*H(g,.5,.9),H(g,.7,1.15),Math.sin(Y)*H(g,.5,.9)).normalize(),nt=S.clone().addScaledVector(W,b*H(g,.65,.95)),X=zl(S,nt,m?.055:.085,m?.018:.025,5);X&&e.push(X);for(let it=0;it<2;it++){let lt=W.clone().applyAxisAngle(new R(0,1,0),H(g,-.65,.65)).add(new R(H(g,-.2,.2),H(g,.25,.65),H(g,-.2,.2))).normalize(),Mt=nt.clone().addScaledVector(lt,b*H(g,.45,.7)),yt=zl(nt,Mt,m?.025:.04,.008,4);yt&&e.push(yt),A.push(Mt)}A.push(nt)}if(!m)for(let B=0;B<3;B++){let Y=x.clone().add(new R(0,w*H(g,.45,.75),0)),W=Y.clone().add(new R(H(g,-1,1)*b*.62,H(g,.45,1.15)*b*.6,H(g,-1,1)*b*.62)),nt=zl(Y,W,.032,.01,4);nt&&e.push(nt),A.push(W)}let T=new R(f.x+H(g,-.2,.2),x.y+p*(m?.63:.7),f.z+H(g,-.2,.2)),P=m?11:14,L=m?2:0,F=L+f.seed%2;for(let B=0;B<P;B++){let Y=H(g,0,Math.PI*2),W=Math.pow(g(),.65)*b,nt=T.x+Math.cos(Y)*W,X=T.z+Math.sin(Y)*W,it=T.y+H(g,-.78,.9)*(m?.6:1),lt=new zr(1,1),Mt=H(g,m?.1:.15,m?.2:.28);lt.scale(Mt*H(g,.85,1.25),Mt*H(g,.55,.9),Mt*H(g,.85,1.25)),lt.translate(nt,it-.12,X),n.push(lt);let yt=2;for(let st=0;st<yt;st++){let mt=H(g,m?.5:.65,m?.95:1.18),bt=new Ge(mt,mt);bt.rotateY(H(g,0,Math.PI)),bt.rotateX(H(g,-.28,.28)),bt.rotateZ(H(g,-.14,.14)),bt.translate(nt+H(g,-.4,.4),it+H(g,-.4,.45),X+H(g,-.4,.4)),s[st===1?L+(f.seed+1)%2:F].push(bt)}}let O=m?620:1120;for(let B=0;B<O;B++){let Y=H(g,0,Math.PI*2),W=H(g,-1,1),nt=Math.pow(g(),.42),X=b*(.35+nt*.78),it=Math.sqrt(Math.max(0,1-W*W)),lt=T.x+Math.cos(Y)*it*X,Mt=T.z+Math.sin(Y)*it*X,yt=T.y+W*b*(m?.4:.62)+H(g,-.12,.15),st=H(g,m?.065:.075,m?.13:.16),mt=st*H(g,1.5,2.05),bt=new Ie().setFromEuler(new pn(H(g,-Math.PI,Math.PI),H(g,0,Math.PI*2),H(g,-.6,.6))),G=new R(st,mt,1),j=new te().compose(new R(lt,yt,Mt),bt,G),xt=new wt().setHSL(H(g,.2,.29),H(g,.3,.52),H(g,.23,.42)),Bt=L+(g()>.5?0:1);r[Bt].push({mat4:j,color:xt})}let D=hn(t,f.x,f.z,b*3.1,b*2.6,.38);D.position.y=.05}let l=ye(e);e.forEach(f=>f.dispose());let c=new At(l,i.bark);c.castShadow=!0,c.receiveShadow=!0,c.name="tree-trunks",t.add(c);let h=ye(n);n.forEach(f=>f.dispose());let d=new At(h,i.foliageCore);d.castShadow=!0,d.receiveShadow=!0,d.name="canopy-volume",t.add(d),s.forEach((f,g)=>{if(!f.length)return;let x=ye(f);f.forEach(p=>p.dispose());let m=new At(x,i.leafMats[g]);m.castShadow=!0,m.receiveShadow=!0,m.name=`canopy-cards-${g}`,t.add(m)});let u=new Ge(1,1);return r.forEach((f,g)=>{if(!f.length)return;let x=new wn(u,i.leafSpriteMats[g],f.length);x.castShadow=!1,x.receiveShadow=!0,x.name=`fine-leaves-${g}`,f.forEach(({mat4:m,color:p},b)=>{x.setMatrixAt(b,m),x.setColorAt(b,p)}),t.add(x)}),{group:t,specs:a}}function Sf(i){let t=qv(i),e=new he;e.name="rooftop-park";let n={value:0},s=new he;s.name="light-pools",e.add(s);let r={beds:[],planters:[],lampPositions:[],blades:[],shrubs:[],points:[]},o=be.deck.width,a=be.deck.depth,l=be.deck.radius,c=Nl(o,a,l),h=new Gs(c,{depth:.8,bevelEnabled:!1,curveSegments:20});h.rotateX(-Math.PI/2);let d=new At(h,[t.deck,t.deckSide]);d.position.y=-.8,d.receiveShadow=!0,d.castShadow=!0,d.name="roof-deck",e.add(d);let u=Nl(o+.05,a+.05,l+.01),f=new ns(u,24);f.rotateX(-Math.PI/2),f.translate(0,-.79,0);let g=new At(f,t.darkMetal);g.receiveShadow=!1,e.add(g);let x=new Qn({color:7235160,transparent:!0,opacity:.32}),m=[];for(let N=-2;N<=2;N++){let C=N*5.1,et=new ie().setFromPoints([new R(-o/2+2,.004,C),new R(o/2-2,.004,C)]);m.push(et)}m.forEach(N=>{let C=new mi(N,x);e.add(C)});let p=[[2.8,14.2],[2.5,12],[2.15,9.7],[2.35,7.6],[2.2,5.6],[.8,3.1],[-1.5,.4],[-4.6,-2.3],[-8,-4.8],[-11.5,-7],[-13.1,-9.6]],b=[[2.25,9.35],[5.8,9],[8.5,6.2],[9.4,2.8],[8.7,-1.1],[6.2,-4.3],[2.4,-5.3],[-1.9,-4.4],[-5,-1.9],[-5.8,1.8],[-4.8,5.7],[-1.9,8.3],[2.25,9.35]],w=[[8.5,6.2],[10.8,4.4],[12.3,1.8],[13.2,-1.4],[13.1,-5],[12.5,-8.5],[11.8,-10.3]];Ah(e,p,2.9,t),Ah(e,b,2.15,t),Ah(e,w,2.3,t);let v=new mn(be.plaza.radius,96);v.rotateX(-Math.PI/2),v.translate(be.plaza.x,.038,be.plaza.z);let S=Kv(),M=Dl(S);M.anisotropy=8;let A=M.clone();A.colorSpace=Xe,A.needsUpdate=!0;let _=new Kt({map:M,bumpMap:A,bumpScale:.55,roughness:.77,metalness:.02,color:15391945,envMapIntensity:.3});t.radialPlaza=_;let T=new At(v,_);T.receiveShadow=!0,T.name="central-plaza",e.add(T);let P=new Ii(4.04,4.095,96);P.rotateX(-Math.PI/2),P.translate(be.plaza.x,.049,be.plaza.z);let L=new At(P,t.brass);L.receiveShadow=!1,e.add(L);let F=new Ii(2.16,2.185,72);F.rotateX(-Math.PI/2),F.translate(be.plaza.x,.05,be.plaza.z),e.add(new At(F,t.brass));let O=Jv(),D=new At(new Ge(9.05,9.05),new Be({map:O,transparent:!0,opacity:.44,depthWrite:!1,toneMapped:!1}));D.rotation.x=-Math.PI/2,D.position.set(be.plaza.x,.051,be.plaza.z),D.renderOrder=2,e.add(D);let B=new At(new me(6.6,.04,.55),t.concrete);B.position.set(2.8,.02,13.65),B.receiveShadow=!0,e.add(B);let Y=new At(new me(6.4,.012,.1),t.darkMetal);Y.position.set(2.8,.052,13.29),e.add(Y);let W=Ul(0,0,4.7,3.5,14,31),nt=Ul(0,0,4.84,3.64,14,31),X=new ns(nt,24);X.rotateX(-Math.PI/2);let it=new At(X,t.darkMetal);it.position.set(-12,.045,3),it.receiveShadow=!0,e.add(it);let lt=new ns(W,32);lt.rotateX(-Math.PI/2);let Mt=new At(lt,t.lawn);Mt.position.set(-12,.066,3),Mt.receiveShadow=!0,Mt.name="pet-lawn",e.add(Mt);for(let N=0;N<3;N++){let C=new At(new _e(.48-N*.04,.48-N*.04,.045,8),t.pathEdge);C.position.set(-8.2+N*.9,.085,2.1+N*.4),C.receiveShadow=!0,e.add(C)}{let N=de(812);for(let C=0;C<3800;C++){let et=N()*Math.PI*2,q=Math.sqrt(N()),ft=-12+Math.cos(et)*q*4.5,pt=3+Math.sin(et)*q*3.25;r.blades.push({x:ft,y:.075,z:pt,h:H(N,.12,.28),w:H(N,.65,1.25),rot:N()*Math.PI,shade:H(N,.75,1.15),tall:!1})}}let yt=[],st=N=>{let C=ty(t,N.cx,N.cz,N.rx,N.rz,{...N,planting:r});e.add(C.mesh),yt.push(C)};st({cx:-6.4,cz:10.4,rx:2.4,rz:1.75,seed:2,height:.35,edgeMaterial:"corten",count:65}),st({cx:-18.15,cz:2,rx:1.75,rz:4.7,seed:5,height:.35,edgeMaterial:"concrete",count:55}),st({cx:-19.05,cz:-10.7,rx:2.05,rz:2.2,seed:8,height:.35,edgeMaterial:"darkMetal",count:55}),st({cx:17.15,cz:4.3,rx:2.2,rz:4.9,seed:11,height:.35,edgeMaterial:"corten",count:60}),st({cx:-8.2,cz:-12.3,rx:4.25,rz:1.85,seed:14,height:.35,edgeMaterial:"concrete",count:75}),st({cx:11.8,cz:12.25,rx:3.8,rz:1.5,seed:17,height:.35,edgeMaterial:"corten",count:55}),st({cx:-14.7,cz:12.85,rx:3.5,rz:1.45,seed:20,height:.35,edgeMaterial:"darkMetal",count:55}),st({cx:5.4,cz:-12.8,rx:2.75,rz:1.85,seed:23,height:.35,edgeMaterial:"concrete",count:55}),st({cx:-20.15,cz:8,rx:1.35,rz:3,seed:26,height:.35,edgeMaterial:"corten",count:40}),st({cx:18,cz:-10,rx:2.2,rz:2.2,seed:29,height:.35,edgeMaterial:"darkMetal",count:45}),st({cx:-6.7,cz:7.9,rx:1.65,rz:1.1,seed:34,height:.3,edgeMaterial:"corten",count:40}),st({cx:8.7,cz:-7.2,rx:1.5,rz:1.05,seed:36,height:.3,edgeMaterial:"darkMetal",count:35}),st({cx:1.3,cz:-8.7,rx:2.35,rz:1.45,seed:39,height:.34,edgeMaterial:"corten",count:44}),yt.forEach(N=>{let C=de(N.seed*97+3),et=Math.round(N.rx*N.rz*46);for(let ft=0;ft<et;ft++){let pt=C()*Math.PI*2,ct=Math.sqrt(C())*.9,Tt=N.cx+Math.cos(pt)*N.rx*ct,vt=N.cz+Math.sin(pt)*N.rz*ct,ee=C()>.48;r.blades.push({x:Tt,y:N.top,z:vt,h:ee?H(C,.4,.98):H(C,.13,.34),w:ee?H(C,.42,.88):H(C,.55,1.05),rot:C()*Math.PI,shade:H(C,.62,1.1),tall:ee}),ee&&C()>.8&&r.points.push([Tt,N.top+H(C,.4,.94),vt])}let q=Math.max(2,Math.round(N.rx*N.rz*1.5));for(let ft=0;ft<q;ft++){let pt=C()*Math.PI*2,ct=Math.sqrt(C())*.76,Tt=H(C,.18,.38);r.shrubs.push({x:N.cx+Math.cos(pt)*N.rx*ct,z:N.cz+Math.sin(pt)*N.rz*ct,y:N.top+Tt*.42,sx:Tt*H(C,.95,1.35),sy:Tt*H(C,.5,.78),sz:Tt*H(C,.95,1.35),color:new wt().setHSL(H(C,.2,.3),H(C,.26,.48),H(C,.16,.28))})}});let mt=ey(t);e.add(mt.group);{let N=de(477),C=[];for(let ft=0;ft<130;ft++){let pt=Ll(N,mt.specs),ct=N()*Math.PI*2,Tt=Math.sqrt(N())*pt.spread*1.4,vt=new mn(H(N,.025,.06),4);vt.rotateX(-Math.PI/2),vt.rotateY(N()*Math.PI),vt.translate(pt.x+Math.cos(ct)*Tt,.07+N()*.005,pt.z+Math.sin(ct)*Tt),C.push(vt)}let et=ye(C);C.forEach(ft=>ft.dispose());let q=new Kt({color:8150326,roughness:.9,side:ke});e.add(new At(et,q)),q.dispose()}let bt=new he;bt.name="furniture",e.add(bt);let G=(N,C,et,q=0,ft=0)=>(N.position.set(C,ft,et),N.rotation.y=q,bt.add(N),N);G(Wn(t,{length:2.7,back:!0,arms:!0,cushions:2}),-2.55,5.35,2.34),G(Wn(t,{length:2.1,back:!0,arms:!1,cushions:1}),6.55,2.55,-1.75),G(Wn(t,{length:1.9,back:!0,arms:!1,cushions:1}),1,-2.05,.22),G(ny(t),3.85,4.38,.12,.055),G(Eh(t,{arms:!0}),2.95,5.18,1.83,.08),G(Eh(t,{arms:!0}),4.45,5.15,-2.52,.08),G(kl(t,{radius:.44,height:.43,type:"coffee"}),3.85,4.38,0,.08),G(wh(t),3.1,3.85,.3,.08),G(wh(t),4.55,3.6,-.4,.08),G(Wn(t,{length:2.25,back:!0,arms:!0,cushions:2}),12.9,-10.45,Math.PI),G(go(t),10.75,-9.6,.56,.045),G(go(t),9.4,-10.45,.78,.045),G(kl(t,{radius:.34,height:.38}),11.25,-11.35,0,.045),G(uf(t),14.85,-12.55,Math.PI+.06,.045),G(go(t),-14.25,-3.4,.62,.045),G(go(t),-12.4,-4.2,.35,.045),G(Wn(t,{length:1.7,back:!0,arms:!1,cushions:1}),-15.6,-6.5,.2),G(kl(t,{radius:.35,height:.38}),-13.35,-4.4,0,.05),G(Wn(t,{length:2.35,back:!0,arms:!1,cushions:1}),-15.8,5.7,1.3),G(ff(t),-9.25,6.1,-.45),G(Wn(t,{length:1.8,back:!0,arms:!1,cushions:1}),-17.4,7.8,1.1),G(Wn(t,{length:2.4,back:!0,arms:!0,cushions:2}),7.7,11.2,-.9),G(df(t),4.55,12.9,-.2),G(pf(t),.15,13,.38),G(Wn(t,{length:2.15,back:!0,arms:!1,cushions:1}),17,0,-1.57),[[-4.3,3.35,1.6,.66,.46,.15,5],[-3.95,4.5,1.2,.56,.42,-.1,9],[5.55,7.15,1.5,.62,.46,-.35,13],[6.3,-1.3,1.3,.58,.42,.2,17],[10.9,-12,1.8,.66,.46,.05,21],[-15.2,2.6,1.35,.6,.44,.7,25],[14.1,6.4,1.2,.58,.44,-.4,29],[3.8,11.2,1.45,.62,.44,.9,33],[-9.8,7.6,1.3,.58,.42,-.6,37],[14.7,-2.4,1.35,.56,.43,.3,41]].forEach(([N,C,et,q,ft,pt,ct],Tt)=>{let vt=hf(t,r,{x:N,z:C,ry:pt,width:et,depth:q,height:ft,seed:ct,benchSide:Tt===2?1:0});bt.add(vt)}),r.planters.forEach(N=>{let C=de(N.seed*41+5);for(let et=0;et<N.count;et++){let q=H(C,-N.width/2,N.width/2),ft=H(C,-N.depth/2,N.depth/2),pt=Math.cos(N.ry),ct=Math.sin(N.ry),Tt=N.x+q*pt+ft*ct,vt=N.z-q*ct+ft*pt,ee=C()>.46;r.blades.push({x:Tt,y:N.y,z:vt,h:ee?H(C,.28,.68):H(C,.1,.24),w:ee?H(C,.38,.76):H(C,.55,1),rot:C()*Math.PI,shade:H(C,.68,1.12),tall:ee}),ee&&C()>.88&&r.points.push([Tt,N.y+H(C,.3,.68),vt])}});let xt=mf(t,r);bt.add(xt);let Bt=new Ge(2,2);Bt.rotateX(-Math.PI/2);let St=new wn(Bt,t.poolGlow,r.lampPositions.length),Vt=new te;r.lampPositions.forEach(([N,C],et)=>{Vt.compose(new R(N,.062,C),new Ie,new R(1,1,1)),St.setMatrixAt(et,Vt)}),St.renderOrder=4,s.add(St);{let N=de(620),C=[];for(let et=0;et<34;et++){let q=H(N,-18.5,18.5),ft=H(N,-12.8,12.8);if(Math.hypot((q+12)/4.8,(ft-3)/3.6)<1.08||Math.hypot(q-1.2,ft-1.9)<4.4)continue;let pt=new me(H(N,.16,.32),.012,.038);pt.rotateY(N()*Math.PI),pt.translate(q,.055,ft),C.push(pt)}if(C.length){let et=ye(C);C.forEach(q=>q.dispose()),e.add(new At(et,t.ledStrip))}}let le=_f(t);e.add(le.group);for(let[N,C,et]of[[-6.9,2.8,.8],[7.6,3.1,1.1],[11.8,7.5,.7]]){let q=new At(new mn(et,28),t.gravel);q.rotation.x=-Math.PI/2,q.position.set(N,.053,C),q.receiveShadow=!0,e.add(q)}{let N=t.concrete.clone();N.color.set(7828330),N.roughness=.95,t.rock=N;let C=de(651);[[-7.65,.36,9.2,.38,.22,.3],[-19.55,.36,8.1,.29,.2,.24],[9.05,.36,-6.65,.32,.18,.26],[16.7,.36,4.75,.4,.24,.3],[-19,.36,-9.9,.34,.2,.26],[.9,.35,-9.1,.3,.2,.3]].forEach(([q,ft,pt,ct,Tt,vt],ee)=>{let ce=new ks(1,1);ce.scale(ct,Tt,vt),ce.rotateY(C()*Math.PI),ce.rotateZ(H(C,-.2,.2));let en=new At(ce,N);en.position.set(q,ft+Tt*.55,pt),en.castShadow=!0,en.receiveShadow=!0,en.name=`boulder-${ee}`,e.add(en)})}let k=bf();e.add(k.group),e.add(Qv(t));let K=(()=>{let N=[];for(let et=0;et<3;et++){let q=new ie,ft=new Float32Array([-.019,0,0,.019,0,0,-.012,.5,.025,.012,.5,.03,0,1,.085]),pt=[0,1,2,2,1,3,2,3,4];q.setAttribute("position",new Se(ft,3)),q.setIndex(pt),q.rotateY(et/3*Math.PI*2+.35),q.translate(Math.cos(et*2.3)*.04,0,Math.sin(et*2.3)*.04),N.push(q)}let C=ye(N);return N.forEach(et=>et.dispose()),C.computeVertexNormals(),C})(),ot=new Kt({color:12108961,roughness:.95,metalness:0,side:ke,vertexColors:!1});ot.onBeforeCompile=N=>{N.uniforms.uWind=n,N.vertexShader=`uniform float uWind;
${N.vertexShader}`,N.vertexShader=N.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
       vec3 iPos = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
       float wind = sin(uWind * 1.15 + iPos.x * 0.72 + iPos.z * 0.53)
                  + 0.42 * sin(uWind * 2.17 + iPos.z * 1.21);
       float bend = pow(max(position.y, 0.0), 1.55);
       transformed.x += wind * bend * 0.075;
       transformed.z += wind * bend * 0.032;
       transformed.y -= abs(wind) * bend * 0.01;
      `)};let Q=new wn(K,ot,r.blades.length);Q.castShadow=!1,Q.receiveShadow=!0,Q.name="grass-blades";let dt=new te,Lt=new Ie,Dt=new R,Ut=new R,Yt=new wt;r.blades.forEach((N,C)=>{Ut.set(N.x,N.y,N.z),Lt.setFromAxisAngle(new R(0,1,0),N.rot),Dt.set(N.w,N.h,N.w),dt.compose(Ut,Lt,Dt),Q.setMatrixAt(C,dt),Yt.setHSL(.235+(N.shade-1)*.026,.33,.14+N.shade*.065),Q.setColorAt(C,Yt)}),e.add(Q);let U=new ks(1,1),fe=new Kt({color:8885875,roughness:.98,metalness:0,flatShading:!1}),Qt=new wn(U,fe,r.shrubs.length);Qt.castShadow=!0,Qt.receiveShadow=!0,Qt.name="shrubs",r.shrubs.forEach((N,C)=>{Ut.set(N.x,N.y,N.z),Lt.setFromAxisAngle(new R(0,1,0),C*.71),Dt.set(N.sx,N.sy,N.sz),dt.compose(Ut,Lt,Dt),Qt.setMatrixAt(C,dt),Qt.setColorAt(C,N.color)}),e.add(Qt);let I=$v();if(r.points.length){let N=new Float32Array(r.points.length*3);r.points.forEach((Tt,vt)=>{N[vt*3]=Tt[0],N[vt*3+1]=Tt[1],N[vt*3+2]=Tt[2]});let C=new ie;C.setAttribute("position",new Se(N,3));let et=new Float32Array(r.points.length*3),q=[new wt("#f3e2ba"),new wt("#e8d9c7"),new wt("#cbbfd0"),new wt("#d8c5ad"),new wt("#b9adca")],ft=de(741);r.points.forEach((Tt,vt)=>{let ee=q[Math.floor(ft()*q.length)];et[vt*3]=ee.r,et[vt*3+1]=ee.g,et[vt*3+2]=ee.b}),C.setAttribute("color",new Se(et,3));let pt=new zn({size:.1,map:I,transparent:!0,opacity:.9,alphaTest:.3,depthWrite:!1,vertexColors:!0,color:16777215,sizeAttenuation:!0}),ct=new ti(C,pt);ct.name="flower-heads",e.add(ct)}let y=[],V=[[-3.6,3,5.4],[7,2.7,-1.7],[12.3,2.5,-7.8],[-13.3,2.5,-4.3],[7.8,2.8,8.8],[-15,2.3,5],[-9.6,2.3,7.2],[2.4,2.2,11]];for(let[N,C,et]of V){let q=new Xr(16757358,0,9,2);q.position.set(N,C,et),e.add(q),y.push(q)}let J=[];for(let[N,C]of[[-6.4,10.4],[17.1,4.3]]){let et=new Wr(16761471,0,10,.52,.88,1.6);et.position.set(N+.4,.25,C+.8),et.target.position.set(N,4.1,C),e.add(et),e.add(et.target),J.push(et)}let rt=de(1337),gt=180,_t=new Float32Array(gt*3),at=[];for(let N=0;N<gt;N++)_t[N*3]=H(rt,-20,20),_t[N*3+1]=H(rt,.5,7.5),_t[N*3+2]=H(rt,-14,14),at.push(H(rt,0,10));let ht=new ie;ht.setAttribute("position",new Se(_t,3));let Et=new zn({size:.035,color:16768432,transparent:!0,opacity:.38,depthWrite:!1,blending:ln,toneMapped:!1,sizeAttenuation:!0}),Gt=new ti(ht,Et);Gt.name="air-particles",e.add(Gt);let Ct=null;function Rt(N){Ct=N;let C=N.lampPower;y.forEach((et,q)=>{et.intensity=(q<3?26:19)*C}),J.forEach(et=>{et.intensity=38*C}),t.ledStrip.emissiveIntensity=.55+C*3,t.lampLens.emissiveIntensity=.35+C*4,t.poolGlow.opacity=.08+C*.55,t.signFace.emissiveIntensity=.08+C*.7,t.sailOrange.emissiveIntensity=.025+N.sailGlow*.06,t.sailCream.emissiveIntensity=.015+N.sailGlow*.045,Et.opacity=N.dust,Et.color.copy(N.dustColor),t.lawn.color.set(N.lawnTint),t.deck.color.set(N.deckTint),t.path.color.set(N.pathTint),t.plaza.color.set(N.pathTint),t.radialPlaza.color.set(N.pathTint),t.wood.color.copy(N.woodTint),t.poolGlow.color.copy(N.lampColor),y.forEach(et=>et.color.copy(N.lampColor)),J.forEach(et=>et.color.copy(N.lampColor)),t.lampLens.emissive.copy(N.lampColor),t.ledStrip.emissive.copy(N.lampColor),t.signFace.emissive.copy(N.lampColor),t.entryGlass.opacity=.22+N.lampPower*.08}let kt=0;function Xt(N){kt+=N,n.value=kt;let C=ht.attributes.position.array;for(let et=0;et<gt;et++)C[et*3]+=Math.sin(kt*.23+at[et])*N*.04,C[et*3+1]+=Math.cos(kt*.17+at[et]*1.7)*N*.022,C[et*3+2]+=Math.cos(kt*.19+at[et])*N*.03;ht.attributes.position.needsUpdate=!0}return{group:e,materials:t,lights:y,setTime:Rt,update:Xt,zones:be.hotspots,dispose(){e.traverse(N=>{N.geometry&&N.geometry.dispose()}),Object.values(t).forEach(N=>{N&&N.isMaterial&&N.dispose()}),O&&O.dispose(),I&&I.dispose(),M.dispose(),A.dispose(),_.dispose(),[t.path,t.plaza].forEach(N=>{N?.map&&N.map.dispose(),N?.bumpMap&&N.bumpMap.dispose()}),Object.values(t.textures||{}).forEach(N=>{N&&N.isTexture&&N.dispose()}),le.dispose(),k.dispose(),mt.group.traverse(N=>{N.geometry&&N.geometry.dispose()})}}}function ny(i){let t=new he;t.name="modular-deck-pad";let e=[];e.push(new me(3.25,.07,2.5).translate(0,.035,0)),e.push(new me(.18,.02,.18).translate(-1.3,.076,.8)),e.push(new me(.18,.02,.18).translate(1.3,.076,-.8));let n=new At(ye(e),i.darkMetal);e.forEach(r=>r.dispose()),n.receiveShadow=!0,n.castShadow=!0,t.add(n);let s=new At(new me(3.18,.035,2.43),i.woodDark);return s.position.y=.085,s.receiveShadow=!0,t.add(s),hn(t,0,.11,4,3.2,.22),t}var be,Rh=xe(()=>{Ze();_i();gf();vf();Mf();be={deck:{width:44,depth:30,radius:4},plaza:{x:1.2,z:1.9,radius:4.2},hotspots:[{id:"central",number:"01",name:"\u4E2D\u592E\u5BA2\u5385",en:"CENTRAL COMMONS",anchor:[1.4,3.1,1.8]},{id:"grove",number:"02",name:"\u6797\u4E0B\u9759\u601D",en:"GROVE REFUGE",anchor:[-13.2,2.5,-5.8]},{id:"terrace",number:"03",name:"\u5929\u9645\u89C2\u666F",en:"SKYLINE TERRACE",anchor:[13.4,2.4,-10.2]},{id:"lawn",number:"04",name:"\u5BA0\u7269\u8349\u576A",en:"PET LAWN",anchor:[-11.4,2.2,3]},{id:"nightwalk",number:"05",name:"\u591C\u5149\u6B65\u9053",en:"NIGHT WALK",anchor:[2.2,1.8,8.9]}],cameras:{central:{pos:[5.3,3.7,17.5],target:[.7,1.1,1.6],fov:47},grove:{pos:[-5.2,3.6,2.4],target:[-13.8,1.5,-5.8],fov:45},terrace:{pos:[6.4,3.4,.7],target:[13.2,1,-10.4],fov:46},lawn:{pos:[.2,3.4,7.6],target:[-12,.9,3],fov:47},nightwalk:{pos:[-2.6,2.2,12.4],target:[4.8,1.1,2.8],fov:52},overview:{pos:[16.4,6.4,23.8],target:[-.9,2.4,.1],fov:48},mobileOverview:{pos:[14.2,10.8,17.2],target:[-1,1.15,-.8],fov:59}}}});function Ef(i){let t={uTop:{value:new wt("#4e6d82")},uHorizon:{value:new wt("#f0b17d")},uBottom:{value:new wt("#655548")},uSunColor:{value:new wt("#ffd6a6")},uCloudColor:{value:new wt("#f3ddc7")},uSunDir:{value:new R(-.35,.14,-.92).normalize()},uSunGlow:{value:1},uCloudOpacity:{value:.8},uHaze:{value:1},uNightGlow:{value:.2},uClouds:{value:i.cloud}},e=new Le({uniforms:t,vertexShader:iy,fragmentShader:sy,side:Ve,depthWrite:!1,fog:!1,toneMapped:!1}),n=new At(new xn(420,48,32),e);n.frustumCulled=!1,n.renderOrder=-1e3,n.name="sky-dome";let s=new he,r=de(91),o=1500,a=new Float32Array(o*3),l=new Float32Array(o*3);for(let f=0;f<o;f++){let g=r()*Math.PI*2,x=Math.pow(r(),.7)*.94+.03,m=Math.sqrt(1-x*x);a[f*3]=Math.cos(g)*m*360,a[f*3+1]=x*360,a[f*3+2]=Math.sin(g)*m*360;let p=r()>.8;l[f*3]=p?1:.8,l[f*3+1]=p?.87:.88,l[f*3+2]=p?.7:1}let c=new ie;c.setAttribute("position",new Se(a,3)),c.setAttribute("color",new Se(l,3));let h=new zn({size:1.55,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,blending:ln}),d=new ti(c,h);d.renderOrder=-999,d.frustumCulled=!1,s.add(d);let u=new he;return u.name="sky",u.add(n,s),{group:u,mesh:n,uniforms:t,stars:d,starMaterial:h,setTime(f){t.uTop.value.copy(f.skyTop),t.uHorizon.value.copy(f.skyHorizon),t.uBottom.value.copy(f.skyBottom),t.uSunColor.value.copy(f.sunColor),t.uCloudColor.value.copy(f.cloudColor),t.uSunDir.value.copy(f.sunDir).normalize(),t.uSunGlow.value=f.sunGlow,t.uCloudOpacity.value=f.cloudOpacity,t.uHaze.value=f.haze,t.uNightGlow.value=f.nightGlow,h.opacity=f.stars},dispose(){n.geometry.dispose(),e.dispose(),c.dispose(),h.dispose()}}}function wf(){let i=new he,t=de(28),e=new Qn({color:3028278,transparent:!0,opacity:.45,depthWrite:!1,toneMapped:!1}),n=[];for(let s=0;s<7;s++){let r=new ie;r.setAttribute("position",new Se(new Float32Array([-.7,0,0,0,.18,.12,0,0,0,0,.18,.12,.7,0,0]),3));let o=new mi(r,e),a=t()*Math.PI*2,l=35+t()*65;o.position.set(Math.cos(a)*l,19+t()*17,Math.sin(a)*l-25),o.scale.setScalar(.8+t()*.8),o.rotation.y=t()*Math.PI*2,o.userData={radius:l,angle:a,speed:.012+t()*.016,bob:t()*6},n.push(o),i.add(o)}return i.name="birds",{group:i,update(s,r){n.forEach(o=>{let a=o.userData;a.angle+=a.speed*r,o.position.x=Math.cos(a.angle)*a.radius,o.position.z=Math.sin(a.angle)*a.radius-25,o.position.y+=Math.sin(s*.55+a.bob)*.0015,o.rotation.y=-a.angle+Math.PI/2;let l=Math.sin(s*2.2+a.bob)*.2;o.scale.y=.7+l})},dispose(){i.traverse(s=>{s.geometry&&s.geometry.dispose()}),e.dispose()}}}var iy,sy,Tf=xe(()=>{Ze();_i();iy=`
  varying vec3 vDir;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vDir = normalize(world.xyz - cameraPosition);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,sy=`
  precision highp float;
  varying vec3 vDir;
  uniform vec3 uTop;
  uniform vec3 uHorizon;
  uniform vec3 uBottom;
  uniform vec3 uSunColor;
  uniform vec3 uCloudColor;
  uniform vec3 uSunDir;
  uniform float uSunGlow;
  uniform float uCloudOpacity;
  uniform float uHaze;
  uniform float uNightGlow;
  uniform sampler2D uClouds;

  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  void main() {
    vec3 dir = normalize(vDir);
    float h = dir.y;
    float up = clamp(h, 0.0, 1.0);
    // A quick, painterly transition from the warm city horizon into the
    // blue of the upper sky. The band stays low, as it does at golden hour.
    float curve = smoothstep(0.005, 0.24, up);
    curve = pow(curve, 0.86);
    vec3 col = mix(uHorizon, uTop, curve);

    // Warm light gathers around the sun and along the city horizon.
    vec2 sunAz = normalize(uSunDir.xz + vec2(0.0001));
    float azimuth = max(dot(normalize(dir.xz + vec2(0.0001)), sunAz), 0.0);
    float horizonBand = exp(-abs(h) * 8.0);
    col += uSunColor * horizonBand * uHaze * (0.08 + pow(azimuth, 5.0) * 0.34);
    col = mix(col, uBottom, smoothstep(0.0, -0.13, h));

    // Sun / moon disc and atmospheric glow.
    float sd = max(dot(dir, uSunDir), 0.0);
    float disc = smoothstep(0.99965, 0.99994, sd);
    float glow = pow(sd, 14.0) * 0.16 + pow(sd, 80.0) * 0.5 + pow(sd, 340.0) * 1.15;
    col += uSunColor * (disc * 3.4 + glow * 0.62) * uSunGlow;

    // A little light pollution near the skyline at night.
    col += vec3(0.12, 0.075, 0.04) * horizonBand * uNightGlow;

    // Equirectangular clouds. The texture is hand-painted, soft and low contrast.
    float u = atan(dir.z, dir.x) / 6.2831853 + 0.5;
    float v = asin(clamp(h, -1.0, 1.0)) / 3.1415926 + 0.5;
    vec4 cloud = texture2D(uClouds, vec2(u, v));
    float cloudMask = smoothstep(0.008, 0.09, h);
    vec3 cloudCol = mix(uCloudColor, uSunColor, pow(sd, 4.0) * 0.55 + pow(azimuth, 5.0) * 0.12);
    col = mix(col, cloudCol, clamp(cloud.a * 1.35, 0.0, 0.8) * uCloudOpacity * cloudMask);

    // Soft dithering avoids banding in the large gradients.
    float n = hash21(gl_FragCoord.xy) - 0.5;
    col += n / 255.0;
    gl_FragColor = vec4(max(col, 0.0), 1.0);
  }
`});function Hl(i,t,e,n,s,r=0){let o=new Ge(i,t,1,1);return o.rotateY(r),o.translate(e,n,s),o}function ai(i,t,e,n,s,r){let o=new me(i,t,e);return o.translate(n,s,r),o}function ry(i,t,e){return[Hl(i,t,0,0,e/2,0),Hl(i,t,0,0,-e/2,Math.PI),Hl(e,t,i/2,0,0,Math.PI/2),Hl(e,t,-i/2,0,0,-Math.PI/2)]}function Af(i){let t=new he;t.name="city";let e=de(542),n=[[1,.62],[1,.84],[1,1.08],[1,1.34]],s=i.facades.map((st,mt)=>{let bt=st.clone();bt.wrapS=an,bt.wrapT=an,bt.repeat.set(n[mt][0],n[mt][1]),bt.needsUpdate=!0;let G=i.facadeLights[mt].clone();return G.wrapS=an,G.wrapT=an,G.repeat.set(n[mt][0],n[mt][1]),G.needsUpdate=!0,new Kt({map:bt,color:14472908,roughness:.38,metalness:.38,emissiveMap:G,emissive:new wt("#ffc98e"),emissiveIntensity:.3,envMapIntensity:.9})}),r=new Kt({color:6910058,roughness:.78,metalness:.22,envMapIntensity:.6}),o=new Kt({color:3158317,roughness:.56,metalness:.6}),a=new Kt({color:14209218,roughness:.5,metalness:.22}),l=new Kt({color:10976090,roughness:.46,metalness:.5}),c=[[],[],[],[]],h=[],d=[],u=[],f=[],g=-40,x=[];function m({x:st,z:mt,w:bt,d:G,topY:j,variant:xt,landmark:Bt=!1,rotation:St=0}){let Vt=j-g,le=ry(bt,Vt,G),k=St,K=new te().makeRotationY(k);le.forEach(Q=>{Q.applyMatrix4(K),Q.translate(st,g+Vt/2,mt),c[xt%4].push(Q)});let ot=new me(bt+.35,.65,G+.35);if(ot.rotateY(k),ot.translate(st,j,mt),h.push(ot),e()>.45||Bt){let Q=bt*H(e,.25,.52),dt=G*H(e,.25,.5);d.push(ai(Q,H(e,1.5,4.2),dt,st+H(e,-bt*.2,bt*.2),j+2.1,mt+H(e,-G*.15,G*.15)))}if(Bt){let Q=H(e,4,11),dt=bt*H(e,.55,.9),Lt=G*H(e,.55,.9),Dt=e()>.5?u:f;Dt.push(ai(dt,Q,.45,st,j+Q/2,mt+Lt/2)),Dt.push(ai(dt,Q,.45,st,j+Q/2,mt-Lt/2)),Dt.push(ai(.45,Q,Lt,st+dt/2,j+Q/2,mt)),Dt.push(ai(.45,Q,Lt,st-dt/2,j+Q/2,mt));let Ut=H(e,8,19);d.push(ai(.22,Ut,.22,st,j+Q+Ut/2,mt)),x.push(new R(st,j+Q+Ut+.3,mt))}else if(e()>.82){let Q=H(e,2,7);d.push(ai(.13,Q,.13,st,j+Q/2,mt)),x.push(new R(st,j+Q+.3,mt))}if(!Bt&&e()>.72){let Q=Math.max(2,Math.floor(Vt/12));for(let dt=1;dt<=Q;dt++){let Lt=g+Vt*dt/(Q+1);u.push(ai(bt+.45,.28,G+.45,st,Lt,mt))}}}[[-78,-68,18,16,-4,1,!1],[-52,-74,22,18,-2,0,!1],[-26,-63,14,13,-8,2,!1],[0,-78,18,16,-3,1,!1],[25,-67,16,15,0,0,!1],[50,-79,20,16,-2,3,!1],[76,-67,18,17,1,2,!1],[101,-82,22,18,-4,0,!1],[-104,-80,24,19,-5,3,!1],[14,-55,10,12,-11,0,!1],[-34,-51,11,12,-12,1,!1],[66,-54,12,10,-10,2,!1],[-62,-45,9,11,-13,0,!1]].forEach(([st,mt,bt,G,j,xt,Bt],St)=>{m({x:st,z:mt,w:bt,d:G,topY:j,variant:xt,landmark:Bt,rotation:St%3*.12})}),[[-139,-155,28,24,5,2,!0],[-103,-172,22,20,7,1,!1],[-72,-143,18,18,7,0,!1],[-40,-169,24,22,18,3,!0],[-8,-151,20,20,13,2,!1],[25,-176,25,22,24,1,!0],[61,-156,22,20,17,0,!1],[97,-183,27,24,31,3,!0],[134,-150,23,21,19,2,!1],[-178,-148,25,23,3,1,!1],[171,-188,24,22,24,0,!1],[-62,-203,26,23,12,1,!0],[12,-212,28,24,32,2,!0],[82,-218,26,23,29,0,!0],[-119,-221,30,25,9,3,!0],[151,-230,28,25,41,1,!1],[-245,-330,30,28,27,1,!0],[220,-320,26,24,34,3,!1]].forEach(([st,mt,bt,G,j,xt,Bt],St)=>{m({x:st,z:mt,w:bt,d:G,topY:j,variant:xt,landmark:Bt,rotation:St%4*.18-.3})});for(let st=0;st<27;st++){let mt=-Math.PI*.94+st/26*Math.PI*.92+H(e,-.03,.03),bt=H(e,295,405),G=Math.cos(mt)*bt,j=Math.sin(mt)*bt-40;m({x:G,z:j,w:H(e,20,34),d:H(e,18,28),topY:H(e,16,54),variant:2+st%2,landmark:st%8===0,rotation:H(e,-.25,.25)})}m({x:-84,z:-402,w:26,d:26,topY:82,variant:1,landmark:!0}),m({x:174,z:-434,w:24,d:24,topY:70,variant:2,landmark:!0}),m({x:24,z:-455,w:22,d:22,topY:94,variant:3,landmark:!0}),c.forEach((st,mt)=>{if(!st.length)return;let bt=ye(st),G=new At(bt,s[mt]);G.name=`city-facades-${mt}`,t.add(G),st.forEach(j=>j.dispose())});let w=new At(ye(h),r);w.name="city-roofs",t.add(w),h.forEach(st=>st.dispose()),d.length&&t.add(new At(ye(d),o)),u.length&&t.add(new At(ye(u),a)),f.length&&t.add(new At(ye(f),l)),[d,u,f].forEach(st=>st.forEach(mt=>mt.dispose()));let v=new xn(.32,8,6),S=new Be({color:16731958,transparent:!0,opacity:.9,toneMapped:!1}),M=new wn(v,S,x.length),A=new te;x.forEach((st,mt)=>{A.makeTranslation(st.x,st.y,st.z),M.setMatrixAt(mt,A)}),t.add(M),v.dispose();let _=new Be({color:2237215}),T=new At(new mn(370,48),_);T.rotation.x=-Math.PI/2,T.position.y=g-.3,t.add(T);let P=190,L=new Float32Array(P*3),F=new Float32Array(P*3);for(let st=0;st<P;st++){let mt=e()*Math.PI*2,bt=55+e()*250;L[st*3]=Math.cos(mt)*bt,L[st*3+1]=g+H(e,-.4,.3),L[st*3+2]=Math.sin(mt)*bt-35,F[st*3]=1,F[st*3+1]=H(e,.5,.85),F[st*3+2]=H(e,.25,.55)}let O=new ie;O.setAttribute("position",new Se(L,3)),O.setAttribute("color",new Se(F,3));let D=new zn({size:2,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.5,blending:ln,depthWrite:!1,toneMapped:!1}),B=new ti(O,D);t.add(B);let Y=new ni({color:4015940,roughness:.22,metalness:.62,clearcoat:.35,clearcoatRoughness:.28,envMapIntensity:1.1}),W=new At(new me(36,38,25),Y);W.position.set(0,-19.4,.5),W.castShadow=!1,W.receiveShadow=!1,t.add(W);let nt=[];for(let st=-2;st<=2;st++)nt.push(ai(.55,37,.25,st*7,-19.5,13.05)),nt.push(ai(.55,37,.25,st*7,-19.5,-12.05));let X=new At(ye(nt),new Kt({color:9211008,metalness:.4,roughness:.5}));nt.forEach(st=>st.dispose()),t.add(X);let it=new At(new me(37.5,.9,26.5),new Kt({color:4868933,roughness:.8,metalness:.2}));it.position.set(0,-38.2,.5),t.add(it);let lt=0,Mt=.5,yt=1;return{group:t,setTime(st){s.forEach((mt,bt)=>{mt.userData.base=st.cityEmission*(.85+bt*.08),mt.emissiveIntensity=mt.userData.base}),Y.emissiveIntensity=st.cityEmission*.6,Mt=st.streetGlow,D.opacity=Mt,_.color.copy(st.cityGround||new wt(2237215)),yt=st.beacon,S.opacity=yt},update(st,mt){lt+=mt;let bt=.45+Math.pow(Math.max(0,Math.sin(lt*1.6+.3)),16)*1.2;S.opacity=Math.min(1,bt*yt),S.color.setHSL(.025,.96,.56),D.opacity=Mt*(.9+Math.sin(st*.13)*.04);let G=.975+Math.sin(st*.21)*.012;s.forEach(j=>{j.userData.base&&(j.emissiveIntensity=j.userData.base*G)})},dispose(){t.traverse(st=>{st.geometry&&st.geometry.dispose()}),s.forEach(st=>{st.map&&st.map.dispose(),st.dispose()}),[r,o,a,l,S,_,D,Y,X.material].forEach(st=>st.dispose()),s.forEach(st=>{st.emissiveMap&&st.emissiveMap.dispose()}),O.dispose()}}}var Rf=xe(()=>{Ze();_i()});function rr(i){let t=Cf[i],e={};return Ch.forEach(n=>{e[n]=new wt(t[n])}),Ph.forEach(n=>{e[n]=t[n]}),e.sunDir=new R(...t.sunDir).normalize(),e}function oy(i,t){let e=new Os,n=t.mesh.material,s=new At(new xn(300,32,20),n);s.frustumCulled=!1,e.add(s);let r=new At(new mn(220,24),new Be({color:2565664}));r.rotation.x=-Math.PI/2,r.position.y=-2,e.add(r);let o=new tr(i);o.compileCubemapShader();let a=o.fromScene(e,.04,.1,700);return r.geometry.dispose(),r.material.dispose(),s.geometry.dispose(),o.dispose(),a.texture}var Cf,Ch,Ph,Gl,Pf=xe(()=>{Ze();Xd();Zd();$d();jd();tf();af();Rh();Tf();Rf();_i();Cf={day:{skyTop:"#7da7c6",skyHorizon:"#e9e2d2",skyBottom:"#b6ada0",sunColor:"#fff3d6",cloudColor:"#f8f4eb",sunDir:[.28,.52,-.81],sunGlow:1,cloudOpacity:.42,haze:.4,nightGlow:0,stars:0,fog:"#b9c7c8",fogNear:125,fogFar:620,hemiSky:"#c9e0ee",hemiGround:"#777264",hemiIntensity:1.45,sunLight:"#fff4df",sunIntensity:3.6,fillColor:"#aac5d2",fillIntensity:.78,exposure:.94,envIntensity:1.08,cityEmission:.02,streetGlow:.06,beacon:.1,lampPower:.015,bloom:.02,sailGlow:.15,dust:.12,dustColor:"#ffe8c4",lawnTint:"#e8eddc",deckTint:"#cfc6b8",pathTint:"#e8dccb",woodTint:"#eddbc7",foliageTint:"#faf3e4",lampColor:"#ffce93"},dusk:{skyTop:"#416f8f",skyHorizon:"#ffd0a0",skyBottom:"#6a6056",sunColor:"#fff0d5",cloudColor:"#f4e7d8",sunDir:[-.36,.16,-.92],sunGlow:.9,cloudOpacity:.28,haze:.72,nightGlow:.12,stars:.02,fog:"#c0c2bd",fogNear:115,fogFar:590,hemiSky:"#c1dae9",hemiGround:"#6b655b",hemiIntensity:1.12,sunLight:"#fff0d7",sunIntensity:3,fillColor:"#b3cfdd",fillIntensity:.85,exposure:1.06,envIntensity:1,cityEmission:.92,streetGlow:.4,beacon:.6,lampPower:.3,bloom:.12,sailGlow:1,dust:.2,dustColor:"#ffd7a9",lawnTint:"#d8e2bc",deckTint:"#b2a79a",pathTint:"#d6c1aa",woodTint:"#dfc4a7",foliageTint:"#f5e5cf",lampColor:"#ffc184"},night:{skyTop:"#07121f",skyHorizon:"#263b4d",skyBottom:"#080e14",sunColor:"#bdd3f4",cloudColor:"#8995a1",sunDir:[.32,.56,-.76],sunGlow:.2,cloudOpacity:.14,haze:.2,nightGlow:1,stars:.92,fog:"#101c27",fogNear:65,fogFar:330,hemiSky:"#46667f",hemiGround:"#202322",hemiIntensity:.56,sunLight:"#b1c9ea",sunIntensity:.46,fillColor:"#38566e",fillIntensity:.3,exposure:1.38,envIntensity:.32,cityEmission:1.35,streetGlow:.9,beacon:1,lampPower:1,bloom:.48,sailGlow:.2,dust:.18,dustColor:"#ffc987",lawnTint:"#7f8f8d",deckTint:"#939fa5",pathTint:"#96a0a5",woodTint:"#aab3b6",foliageTint:"#7c8c85",lampColor:"#ffb86f"}},Ch=["skyTop","skyHorizon","skyBottom","sunColor","cloudColor","fog","hemiSky","hemiGround","sunLight","fillColor","dustColor","lawnTint","deckTint","pathTint","woodTint","foliageTint","lampColor"],Ph=["sunGlow","cloudOpacity","haze","nightGlow","stars","fogNear","fogFar","hemiIntensity","sunIntensity","fillIntensity","exposure","envIntensity","cityEmission","streetGlow","beacon","lampPower","bloom","sailGlow","dust"];Gl=class{constructor(t,{onFrame:e}={}){this.container=t,this.onFrame=e,this.width=Math.max(1,t.clientWidth),this.height=Math.max(1,t.clientHeight),this.destroyed=!1;let n=new bl({antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1});this.renderer=n,n.setPixelRatio(Math.min(window.devicePixelRatio||1,1.7)),n.setSize(this.width,this.height,!1),n.outputColorSpace=Ce,n.toneMapping=as,n.toneMappingExposure=1,n.shadowMap.enabled=!0,n.shadowMap.type=rs,n.setClearColor(725271,1),n.domElement.className="rp3d-canvas",n.domElement.setAttribute("aria-label","\u57CE\u5E02\u5C4B\u9876\u516C\u56ED\u4E09\u7EF4\u573A\u666F"),t.appendChild(n.domElement),this.scene=new Os,this.scene.fog=new Sr(11701360,48,260);let s=this.width/Math.max(1,this.height)<.8,r=s?be.cameras.mobileOverview||be.cameras.overview:be.cameras.overview;this.camera=new Je(r.fov,this.width/this.height,.1,900);let o=s?{pos:[...r.pos],fov:r.fov}:this.adaptView(r.pos,r.target,r.fov);this.camera.position.set(o.pos[0]+4.2,o.pos[1]+2.8,o.pos[2]+5.2),this.controls=new wl(this.camera,n.domElement),this.controls.target.set(...r.target),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.enablePan=!1,this.controls.minDistance=4.6,this.controls.maxDistance=52,this.controls.minPolarAngle=.68,this.controls.maxPolarAngle=Math.PI*.472,this.controls.rotateSpeed=.55,this.controls.zoomSpeed=.75,this.controls.autoRotate=!1,this.controls.update(),this.textures=of(n),this.park=Sf(this.textures),this.scene.add(this.park.group),this.sky=Ef(this.textures),this.scene.add(this.sky.group),this.city=Af(this.textures),this.scene.add(this.city.group),this.birds=wf(),this.scene.add(this.birds.group),this.hemi=new Gr(12179686,7365970,.8),this.scene.add(this.hemi),this.sun=new Xs(16766632,2.4),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.camera.left=-34,this.sun.shadow.camera.right=34,this.sun.shadow.camera.top=34,this.sun.shadow.camera.bottom=-34,this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=150,this.sun.shadow.bias=-35e-5,this.sun.shadow.normalBias=.024,this.scene.add(this.sun),this.scene.add(this.sun.target),this.fill=new Xs(9152187,.55),this.fill.position.set(32,18,34),this.scene.add(this.fill),this.currentPhase="dusk",this.current=rr("dusk"),this.target=rr("dusk"),this.transitionFrom=null,this.transitionStart=0,this.transitionDuration=2.2,this.phaseClock=0,this.sky.setTime(this.current),this.city.setTime(this.current),this.park.setTime(this.current),this.applyLighting(this.current),this.envMap=oy(n,this.sky),this.scene.environment=this.envMap,this.scene.environmentIntensity=this.current.envIntensity;let a=new De(this.width,this.height,{type:We,format:vn,samples:4});this.composer=new Rl(n,a),this.composer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.7)),this.composer.setSize(this.width,this.height),this.renderPass=new Cl(this.scene,this.camera),this.composer.addPass(this.renderPass),this.bloomPass=new sr(new ut(this.width,this.height),.12,.55,.9),this.composer.addPass(this.bloomPass),this.outputPass=new Pl,this.composer.addPass(this.outputPass),this.lastFrameTime=performance.now(),this.elapsed=0,this.activeTransition=null,this.intro={startedAt:performance.now(),duration:3.1,fromPos:this.camera.position.clone(),fromTarget:this.controls.target.clone(),toPos:new R(...o.pos),toTarget:new R(...r.target),fromFov:o.fov+4,toFov:o.fov,done:!1},this.camera.fov=this.intro.fromFov,this.camera.updateProjectionMatrix(),this.pulses=[],this.raycaster=new qr,this.controls.addEventListener("start",()=>{this.intro&&!this.intro.done&&(this.intro.done=!0),this.activeTransition&&this.cancelCameraTransition()}),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.onVisibility=()=>{document.hidden||(this.lastFrameTime=performance.now())},document.addEventListener("visibilitychange",this.onVisibility),this.animate=this.animate.bind(this),this.raf=requestAnimationFrame(this.animate)}adaptView(t,e,n){let s=this.width/Math.max(1,this.height);if(s>=.8)return{pos:[...t],fov:n};let r=s<.55?1.5:1.3,o=new R(...e),a=new R(...t).sub(o).multiplyScalar(r);a.y+=.7;let l=o.clone().add(a);return{pos:[l.x,l.y,l.z],fov:Math.min(67,n+8)}}applyLighting(t){this.scene.fog.color.copy(t.fog),this.scene.fog.near=t.fogNear,this.scene.fog.far=t.fogFar,this.hemi.color.copy(t.hemiSky),this.hemi.groundColor.copy(t.hemiGround),this.hemi.intensity=t.hemiIntensity,this.sun.color.copy(t.sunLight),this.sun.intensity=t.sunIntensity,this.sun.target.position.set(0,0,0),this.sun.position.copy(t.sunDir).multiplyScalar(72),this.sun.position.y+=0,this.fill.color.copy(t.fillColor),this.fill.intensity=t.fillIntensity,this.renderer.toneMappingExposure=t.exposure,this.scene.environmentIntensity=t.envIntensity,this.bloomPass&&(this.bloomPass.strength=t.bloom),this.sky.setTime(t),this.city.setTime(t),this.park.setTime(t)}setTime(t,{immediate:e=!1}={}){return Cf[t]?(this.currentPhase=t,this.target=rr(t),e?(this.current=rr(t),this.applyLighting(this.current),this.transitionFrom=null,t):(this.transitionFrom=rr(this.currentPhase),this.transitionFrom={...this.transitionFrom},Ch.forEach(n=>{this.transitionFrom[n]=this.current[n].clone()}),Ph.forEach(n=>{this.transitionFrom[n]=this.current[n]}),this.transitionFrom.sunDir=this.current.sunDir.clone(),this.transitionStart=performance.now(),t)):this.currentPhase}setZone(t){let e=be.cameras[t];e&&this.flyTo(e.pos,e.target,e.fov,1.55)}flyTo(t,e,n=46,s=1.55,r=!0){this.intro&&(this.intro.done=!0);let o=r?this.adaptView(t,e,n):{pos:[...t],fov:n};this.activeTransition={startedAt:performance.now(),duration:s,fromPos:this.camera.position.clone(),toPos:new R(...o.pos),fromTarget:this.controls.target.clone(),toTarget:new R(...e),fromFov:this.camera.fov,toFov:o.fov},this.controls.enabled=!1}setPaused(t){this.paused=!!t,this.lastFrameTime=performance.now()}cancelCameraTransition(){this.activeTransition&&(this.activeTransition=null,this.controls.enabled=!0,this.camera.fov=42+(this.camera.fov-42),this.camera.updateProjectionMatrix())}pulseAt(t,e,n=16760961){let s=new Ii(.42,.52,64),r=new Be({color:n,transparent:!0,opacity:.9,side:ke,depthWrite:!1,blending:ln,toneMapped:!1}),o=new At(s,r);o.rotation.x=-Math.PI/2,o.position.set(t,.08,e),this.scene.add(o),this.pulses.push({ring:o,age:0,life:1.6,mat:r,geo:s})}projectAnchors(){let t=this.width,e=this.height,n=new R;return be.hotspots.map(s=>{n.set(s.anchor[0],s.anchor[1],s.anchor[2]);let r=n.distanceTo(this.camera.position);n.project(this.camera);let o=(n.x*.5+.5)*t,a=(-n.y*.5+.5)*e;return{id:s.id,x:o,y:a,visible:n.z>-1&&n.z<1&&o>-80&&o<t+80&&a>-40&&a<e+40,near:r}})}resize(){if(this.destroyed)return;let t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);Math.abs(t-this.width)<1&&Math.abs(e-this.height)<1||(this.width=t,this.height=e,this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.7)),this.renderer.setSize(t,e,!1),this.composer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.7)),this.composer.setSize(t,e),this.bloomPass.resolution.set(t,e))}updateTransition(){if(!this.transitionFrom)return;let t=Math.min(1,(performance.now()-this.transitionStart)/(this.transitionDuration*1e3)),e=t*t*(3-2*t);Ch.forEach(n=>this.current[n].copy(this.transitionFrom[n]).lerp(this.target[n],e)),Ph.forEach(n=>{this.current[n]=Vi.lerp(this.transitionFrom[n],this.target[n],e)}),this.current.sunDir.copy(this.transitionFrom.sunDir).lerp(this.target.sunDir,e).normalize(),this.applyLighting(this.current),t>=1&&(this.current=rr(this.currentPhase),this.applyLighting(this.current),this.transitionFrom=null)}updateCamera(){if(this.intro&&!this.intro.done){let t=Math.min(1,(performance.now()-this.intro.startedAt)/(this.intro.duration*1e3)),e=sf(t);this.camera.position.lerpVectors(this.intro.fromPos,this.intro.toPos,e),this.controls.target.lerpVectors(this.intro.fromTarget,this.intro.toTarget,e),this.camera.fov=Vi.lerp(this.intro.fromFov,this.intro.toFov,e),this.camera.updateProjectionMatrix(),this.controls.update(),t>=1&&(this.intro.done=!0);return}if(this.activeTransition){let t=this.activeTransition,e=Math.min(1,(performance.now()-t.startedAt)/(t.duration*1e3)),n=nf(e);this.camera.position.lerpVectors(t.fromPos,t.toPos,n),this.controls.target.lerpVectors(t.fromTarget,t.toTarget,n),this.camera.fov=Vi.lerp(t.fromFov,t.toFov,n),this.camera.updateProjectionMatrix(),this.controls.update(),e>=1&&(this.activeTransition=null,this.controls.enabled=!0)}else this.controls.update()}animate(){if(this.destroyed)return;this.raf=requestAnimationFrame(this.animate);let t=performance.now(),e=Math.max(0,(t-this.lastFrameTime)/1e3);if(this.lastFrameTime=t,this.paused)return;let n=Math.min(.05,e);if(this.elapsed+=n,this.updateTransition(),this.updateCamera(),this.park.update(n),this.city.update(this.elapsed,n),this.birds.update(this.elapsed,n),this.pulses.forEach(s=>{s.age+=n;let r=s.age/s.life;s.ring.scale.setScalar(1+r*8),s.mat.opacity=Math.max(0,.85*(1-r)),r>=1&&(s.ring.removeFromParent(),s.geo.dispose(),s.mat.dispose())}),this.pulses=this.pulses.filter(s=>s.age<s.life),!this.activeTransition&&(!this.intro||this.intro.done)){let s=Math.sin(this.elapsed*.15)*8e-4;this.camera.position.x+=s}this.composer.render(),this.onFrame&&this.onFrame(this)}dispose(){this.destroyed=!0,cancelAnimationFrame(this.raf),this.resizeObserver.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.pulses.forEach(t=>{t.geo.dispose(),t.mat.dispose()}),this.park.dispose(),this.sky.dispose(),this.city.dispose(),this.birds.dispose(),this.envMap?.dispose(),this.composer.dispose(),this.renderer.dispose(),this.textures.dispose(),this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)}}});var Lf,If=xe(()=>{Lf="data:font/woff2;base64,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"});var Nf,Df=xe(()=>{Nf="data:font/woff2;base64,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"});var Ff,Uf=xe(()=>{Ff="data:font/woff2;base64,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"});var Bf,Of=xe(()=>{Bf="data:font/woff2;base64,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"});var zf,kf=xe(()=>{zf="data:font/woff2;base64,d09GMgABAAAAAFxsABAAAAABNfAAAFwIAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGoN+G70CHJJIBmA/U1RBVEQAhTwRCAqD5AiC8HULhW4AATYCJAOLWAQgBYUcB5M/DAcbWPgF7NgjsHEAGDZlPzEyoNsBJbVmH9TsQA0bBwDZ/0eQ/H9K0GIMgex4rbYLUOGdarCZ+tbM2bZnM4FSG7URDgIdGhARkQAMBAGDZb0O4iaPIL0ioC/82kSNgLH6r5NY8HXtIrBxGSNZOXmP59f2P+ecu8tGsSy9wEKL5EJ/JKItusQCbCTLQsVowCjaKOwEozC/DyOX4mO/f+s59/0QCxPjYgGNJrA/El0UoKJlIdHoVakVahXhHcDpTJN00qaSpL5aKltlq02s22q6VSdmjDkiugEXzI9d0AMX5MBFjJtzp6hG1Cq7ZyPuxXDhEQYhERiMwBMIo7ASe53+4eB+PzVr2KCPGFBAK3nsBeQESo6xvPT6u6pL9UEV04Wm0sZHSYx9ejfm3+5ZLBMXoSjCgLDMm9PX3lFqb7KlVGrlNwdowGxZSdS3DAhO/9peEQNlSMrkxJe5tHln8jsIcglItnwQ4vkXyP6uvmtLOam3nvGVgF5166FNs2//7aisMsuobmeIBXsDSHYPDrhAyJqQscm+4XvkNqOeqGkQ0B47ZyKfOuMw5k34/95mmer3Gbml7lm4Ro0zLWuNXQ4SaS1TRklCQbKChdYbbpMkE7VZIzNojBgkG27qjCljjhwTRQ4Bk9BBEvnvTU3b/xcXgIugcqTkJOX2xAtUzJVre3ov3l/w7+4HQGABH8ElLwWACiB4J8+RClgCux8gMy475MgDlahzuKCYHaoYYhdi6T1VlEOqXJUuYxVy2ag8dypll65clC6q0LlzWdvvWzrL3RawYd8Ki0bIuZFIlcyfS9tLaYpedWnu4iJBuDxM9qrvkxA4G0qwjEGQfLdvzHVVuoZd6LW5CbWIi1xqIZdaIzKaXNPr1S5rZrnRQddvKyQ4OQMygocdP2Pzk538f5WLUhQsbHiECmxXUN+7OQv+yesQj2tRX+wjAwRnEQAPoI9ZU0kAQ4E/Php3w2lH7NSlU5s65coUy5ESSmcJ5gmfO0o0gB4nkV5rdKiP3lghfRjyITtq9F86p/qh0jm+D72ZEzsb4YLHXP14EvvUMG4+zaX71i5pwlKGuzfxvuxKfWf3zf/tCsccztkZQ9dKBgATZyIbfZ8ei9ENdd97ylnIpXQEclVdfAcrC933QOPG9dwLTZjQBx/jSdQ1aP1QqB6PCCPSWy2kKAZiFjKmlRm9XNnlz6dAAQUr7YQKa1aPJSXrjkQxADEATowbaWeAbrYdvYjKDL0bLK4KUGf+CowEg0sLi3LA4FpRajao3U4szgMDFHicWJOPk8eOGbf+KcoDox+7w0B8JzvdD4gAYHRyFXVSrTAa/sVCABgHdb7TmSl7czSrkUWITgBhQdBu+5yhXZ/joDNhQEKNCA+yfZRCbk5nyN2+hpwaw5D+eRhyeyxC6CVr065Dp27uDBT2tX1ry++ratqs67JKZX0UCAPadXIloV0lcSjUr5aPAac/nhnVa60qZQrECeTI6NqwyLOjmWdxyNtiNcqMsrGww4M7aWh4F5OtxdBSyIPNhRtWRsbK3TiebF2KJ3h6evCgXcNE4aLnPt8ZGSoi5n3FYDiFlM9eXcc0/lWe0PW53bqb5Dy8KGDO98GRLjAcvIp6D3YWK1x06n7NWAp7nqkL99zpHdEsJMf07UmCj24ZsF2b5SBpsNk2IOVgYB0aVliewv3yKq6Wl2NfHs4n13gw2XVHJ2UGd0wNtNN4oO5g9oIi99hZOR9T3Coj+cmAt2jOLhXCZsdU8I6DgyXyeT5YqxWrvHPBLpNknhAmyIR3/WcccgwfNazCVvnrzG85da9taq6L5W/xG3fD9Fp70t/4ql/slYJ5oNf2zC/nGeA0RcUTP14bewjiBKwFTJFfPjNZQ+bjY5A3r2g/2Ud7Z6/tBU5P78j23dID273bmyvpsbp27bZtw1bt8i17tumZNTtvB7db3uGb8hrf0I7bynyRUIxsYF29li3YrNWhCW3VyuqxEI7jC2HOpxAqj/8Vf8yXeX/gqxkv6mwz5p25NVeyBhLfzAden6HyUebI7Jvds3U2zOppwZqwoG4q1vF+Z+GUzMj0T+c0N3vDpnbKJzS+cUzx5I1p0id1pCMY1tAxA2P0xzefTZB9Tl/sC0/cc8MlZx034JBeO9+CfcPmkH8rXOLqp/mvuhVmKLN5Uq0T0YmWbYUGzb64to4nMM3l3F6xMaJOxxzN88tF2kc7CPnpaLVDEkG97UG8wLWwU2jxlLkoMI4xcvNHJ29ajZiRpg2npZcEroYZeFEj+iqxSRZbACZcKewXV+uIC8KhQ4zyxfsQTFXok71Ya7xfQVOnk0OTgnOjMVqxY9CKwHaoMH9oNoZW2VYZ1M2/3aLQNvtT4oW98YbAnnnvd9J0MGMwYa7OVdKq1dLYrO+0rGCgDY3Uu6qtXUngb1gmGyyeZnnABHNtByOfvM1hbZYIONFCLGKW20SlmueFra+n0apROqjkIMe8/YmHJVuc2+tOuN9y5k08d9aZ0IdzazchLARftnhhyQQ5V34wpjY/69s0i9ygsZte9rKfAxziMEfpY4BBhhnhOCc45c6k1s7lAc5zgYtc4rJd3STF7tk5OVtn4Yyd3omakGQDNc7cZg8FrM2cvOTN3Zr5XFg6Vy2/NHWHF8Z1EeM/8819Lp/Y8xfzZO7NDXdJZ+d4dsA/tOLeeCenm6dzOtS6TVMz5a508YzP8PT2tm8Snpgb9ric1yaEGy3DN7iuagYUY1M6nl3bxtzOGUP1rjSjAMTiDZY958/Yft5PQzAdA/rb5CT4fm54c9jCTHjmUXyHU/Mohtd4auMRe8kFp43oc0C3e2nbdVmrTYMqy+fbNCkLaQGA3Eto5uX8k8WONIBjcWi3uhbwbBpg3UAdzoRpVsO2BRi0fcARRphJL3u83cksAGZbDxBNATO0S44lgobXb7oNWG1Hgfc8IZvv3n9hQAlynkLoG7eY4IEXEKaHNbYWSOCXpx9IDi00B7BYzzVExgRPmngOxDv+oZjCdHDJvam6JTqVtMtZ7XZNezxQtxfq8VG9ftjeKcA+HYjZfzBXtg4teY7SRz8DGoKKdIhe8xlYF2Ms1vvB9qEA+gT6gCwAluvxQPa2K8nOtolsoH0um7jJxBqVTnfAm2PN2R7DZQQHK4artgyfP8QQcskd90KIiViIjUTYeFKIiEkQ5JTSqKgZGJlkypItR648+QoUKuLg5OFVN69TBBtNojsvhguiuyS6/+eYddiA2t1LVEq40VLBdFTjwyJpoRBKuxCVbiEqvUK09KcjgqYioaOOkjUVFdrZIXTyI2EqhE5RctKmQ3EyFGohJmzyZ0OCjFo92pR7aT49lABNlhHfT1KXkhwYlmJEBBgMMdLecGPDzRz+a2AgBxb8UhsH3h0bBTgXvljSow0AhnpLZZMEY9KTIRt9srGHZf+BWcOYYDd7xb8TGoyyjyHrvckbKFJCY23EYGCHGpds0ncSWfs+3oHsuwQ0AWgGy0+X/bpJ0zJ6J47nFl21HU/FBY/fWx0U5YShWhdk3nIrLbXYSwCDABpny/rgLbVA+J63q7x4h3Rlb8pc2RV4dt2zQ4ny0QRZlvJsBBDtMIC0Q7FORot+1UIbblfePthAZobs+REEA6MBooWiW2b1au/Nq8buLDZOF2iBJ/Fj9jHJfb3E2XtnWE36jaayBK5bNXRvMP3q7bk+nnCHUlaB473QWSH/rnS+VePwXZdhkZf40nvl441dJHgFAk47UHoZrJl1FgyWMNkUlgvRqvnH46LLgNYRAZCYnWDGhjCwPOkSNdlQEVSvuPoOssUdt+L6xPZCjvK0kAq06BDmclhK/MJ7whuXEAd+Opamx0rsbjTPYp4kTbz42D2551n6SjIS83yqOGZGaa14XiuWKj1IhPTCqOJStP9V84qdjHt5FzMR1qspGdXezujaIgF4DuAMHOllYCIEKUqjSgOd4f8RNhOWOKzYELLjSZEPX7r8JdGXIpezYsV8zbeAn0U6BFijS6rNtsq13Q4FdtmtSI99ih100AKHHbZQnz4lhhxXWjJiw9JE2K1IBa+VqUupIg2SKtNGVJMuebXpU1aXIXX1WSisqWmK6syTs/X58rax2eraVLGRNsOiIQgL3usfgclHMUNSmI0wWymweywBe9MQzlwIuS5RZW7ccXmKxkeYr4iAKBYoHE1kcyewLRCDKF2sOHLiRZcgjkSxJQlJFl2KkNQoW5osSLb4csSQK458UYqlbn5UrEQZjkWiLBOlIspWqQHSKLYmIc1ia5FEqzjaRNcuSocUrYlSNuoib5Mom6MatthKZJso2yVnh5BdQrr7xXoM4r8qPpPhuJP4z2BCamihZmpjhmlKz11QRQkeTJRQQhUePJRQggkPJpowYRrPCr6KY2ZIw/ggpx2rmWL1NFNATINoEYRQBtUwU8yaDWSREB8W8qi12TwwqG4UUJvFH1IRMIbsEkdACiKFRIkvWnQxIuLFlSBKoriSjANguHDQQNnoRjHJonRy3ZXo5oACQ4Edt9uKsgU6KKIKaRoCLROaAE6K9ejleG+Shn2iOyjKYdH1iTIkZcNRLSOOETpuGj7LaFihsegHdR2MLOMyu3IGDHgwyhknaUI4rxCa0BLOpvQCY1eYmHX57hQVXY9lpLOToIso2umBDZkwZcacBUvDnOQjQOTrAqPy1wGmQmS6z/J7jVziBKlR2IVerrgxRwKUl6C8/efnIkoV8+TfXhJE8fgzUgKfzXtEisId33hpYchvrS5sLg04ClWhgH86L5LWjoyMaHPcqd4AjQlYpAMDmJdSrI5WHVIdtTpKdcnVJVWXOJSwZl9+dkZohl9S2NLUOwLcS27pGwSupPQP9AGj/zDjCwJO5nR1NAFDvf1z+4AjvQMtvcC+hN1sZQOraaGOinjp+BHDQEkBy3RxsbM8CcYCcBgkkQgVCgkkQwYBBoML6phGMgPh4dkwAJUdr3ws/sj5UH2wrn+l98Y79Na+2Jf3eA8gP+/ydZ1vp4UtVdLXxyNeIG4we2yKmBIBlmOwrUZIWwxrs6G7ziH8BZjSWaKF8j/BmT3pLyz09sNW6yO1OqoSRzTfYeU6rmw9SjCoUgNpnkNIq7vawfNcaHUylDoQSuwP850IefaFXHtDtt5Bwk5uim6XRSW7TU7Prn2UA3W+q1lpoYPVnPbUb7tUyJs/sKep8iL7ObEPoKT5YYT2YlEzUauBTEslFOEAcS/t5Y1zK157xEzURu5INFTBdUaOdG55ZEnlMmKQ6VxwDBTDWUdH6zi1A3trZmoRa9Sub6tMZUfpiV565bU33prwzvsdpxfy0COPPTFm3FPP0qWY2C8Mo5xxD6BjWIni4KQ40a9Kib2+h/WmXHfDTbfcdsdd95xx1jmjzrvgoksuuxJPneOcGHHfe9AuSRQvxruHevj117DzIhZj0RlX6q90O9Ydy2IvqXiW3rYTA2p40HZiAEm7y1m5GLe79Khw8PnohXMTKgQY4XjwuQhlgMbyCM4adcElqOUdRYwQo29oR5HIiwozYVpnKdWA0whdvZjil21Sit7cPJsBMcazVkoG6sGh2Vwc8SBP3TrLRgHNuaNJfcUH4qH48bdH93n9ClTlmU/qF2Pz4v38wzyfVXg7k7KmaT+HIhOOdr7ndEVqrStVF8lBg3m4eZcMhj7GMnS/LUzEJDrSRWUWmx2NCT85vFGyTsNS1yh5uozjJ/m1qRd23BHdNlutQbksoczo9bjuWri0iWvVWFxTKL1KpVQ1kfrrK1ZeZHnlCpaymCX1FhTUM7/QT/NjfXJVDqIwZipGlVPQR7dSD220fIkvyrIfmI9FgSYdhuznzZdPlSffIstUWGPOVA+NWkLgdwee8oXcPrWMPG9l/lveZelGNaIpGsCPJ/b+KyB9+DlXn9QbV/JS4HRnFsxQ4b9pc8Ky5fq3ks6fTwGoi1ICQABgn38jAAnitWUVgChBeg3u/ptRjKgAf2U8jKBVmlFUBoi0YhfCcVFTgL8PwFtgIlZIi6jZWeXNdVPznAzAZc7BYofIkKXoXJqz82AeLSIUYRLd37D0s/Sr9IdETaIp0ZEYSKwkjhJPSXeQaTeHLT32Tya7AAC4JCw46nIkS5G5yLUlkIUwNv1VoiIR769U4qDjoehvf01DcF7Ev6+0a5MiWdc/N/fp56efnv6A5R7/ty8Lx2Xj/41vGpeMXRu7OuaJaYAO2H2jOK/iHQq91dURvYFb64k2uMzRIXwFpAIaFSmkoSURx6bEQuDgqlGlWgpzgYpWM7A2gmS+jFEnNh+8tlEZwTYw+zX8vLhy45GOjF4Dtd5iJEiULHULwXKX/JgSpVbtrkWbdh1WW7P+K5vot99tmXDJUAcl4FPKr4xbiR6WTmWrXiqrIXa1KIiNchUTGZYMp7MDIYwoJC5UkGDhQoShyOHj4OJRoUiJMiYD5kyYsmRWRRamcfQ/TtxZW2WW6WaIM9Ns8ZJkSZch0zxF5iiWYqUGteo0qS+2Rhus02m9LVptJdXcXCNadMqSzcAkkzEErbL4AABtBwD4p4CcCEI+AiQdBwAAAAsAACwYhSAIBMMIjDEq96EijeAonQZyTVHKITla1wRio1QHKitgJDkfdWtoaixBcCCjTOiLJA5EvbGDJonsjIDyNI1keOXSPhzYmxJrM7o5RMI0hoNUwxgEJifCQYMWjV63Ac741TeF+pbOjV3R/o2KQE+ZinAgWkFTwyACyGipt0UY3Uf51JiLTCJVBGgt0vdvLHW53SgpRL6GWOeLSEGi0DV/FXYwNM/+2MAFryzJDERIBQE+m2axb1HEGDlSVFFm0ThHqbbTJF8tMXJh2OAnjxHl0jAjj5jhHlYeAUTENvjW2I/kqyV8+fLwwA/0oB5k9kDzzM1509jkkfp0swi6shTZxHYougt8+x5XoxYhsyxIUrriV12U5r+vJOoksyAgFQZ8iGT9EirN2XR+7gvivdqmxAlJJSDhWk+G8to76RxzFE5tlazSE3rZ97B1y2Dfdh8BnIKu9QG4EBvPAAG+hxWc5K2QQuLQ+gMftT3h8sde+zbJLAhIhQBJfPjp67ovSQEF8dS9DUrkyBgSy1lkL2eV5mKVF9HNtb7v9IV2fXzUq7J7p+38ZxVqQoAAweOD1w4J7WRozHMoDxtWf/ThpGBS0VfkPL1n7xzaQBkd7h73KYWX2ZiTq9s5tEv/uuj+p6kPe4V0Hsab4agZzu4HGI+A8cM53IgFuo/eHzWCzjxduuykFx0u8LCANDgiKeCG63ocmTuHQkj4yu/baWifwtequKKXz1rTl1duJ0Hirnv72pzK7hF2t92KJpuzl53Dh56j0cJ+LfgueS6JvNkoqDw5NUIy263CoeRdCkWS4dF1v/6p39HSQWkic5RB51RbAsGrmSvFLEghA6IvksAhDwPUc1fe1lCspIBnhTSWG5CDUnJKQmNg3spBaYANoBNPwBryC537lVW4K6uG6kDVG5pBhG89EtLJtaLvXCAcGJdXsnWo7iIUxRKi2wNAbwngHZPHty9NaZzPa+d6VYUepJWhykiCVyQWiaOsHLSF1EOjdRQn+JypJfChrvH31Y0PgCV0vl5YHRDs1uuodgWbE+7Bi0xO5+HrrBAVK+QeQAJWAAzVH6cFCt5OX0Ntock5y86+C6TIWPeVLpSyqXbRKJRMJGg6wZ6U8T8FGV124hk59ZAPEUNd/0sA95xYAOyiym/uegA95goXPAUjKjEU7GyF+qSjeFCiK2FHodO4ERJVXxG9x7k+3f1zlRUnjsmuUL6MZCdvlQfMMaEC1A5zwRYwBsiCCukui5N0dDb+SRm2vbZffcylDZAypY9NjFS9Uk+59w9IzHF/EnBpGJYPTPt0SgqegkH5moN3dkBPvHo4eTTAhTiDceP0hA+QR3TcraxFn+ZTWZ+/9E9gBfjlaX9ivuZxScd5m0pLPtjlT7wmIGjIgGXMF5AV0SykK5hknVGVBRe0kmtq0KiVtL0Bl3vbVmQd0zyM0fUs06TOZY3sAAFtREVOlug39b2DMKfvTUtVTOQ4mmnSRv+PvEqZuTPunXgtblvX3L32UeufKH1Vo3819c4WqOvo37r86WFU6hF9PcvaZ02tGKhVbbhwGpE5WAryT8hB9BhWILdtTn/CtJiaOqMke9VN7EKXE4ZfgLQX6Pjvf0r3U/M41wthMxPGZbSZgOwlpFM3390dLbIEeCeZCz7TuyefNheiiBDzc2JB5NqW5AmYO2o3rsIWVmrhaCSjUZwyBRQPy+QkFTEmW+VmrWhWxzhTZgW3MZRnZ9KGvaOB2qxKuvRuVrOx4IweEeUhdkrCVjStbw/75oMpZy+5A84RHmYVgYgHtPBz1pgzHpSRIuU7nIu7ZoANHyYp347kRV5phuXv4Y2zIm+hj34J5z2h6qROMFMwJzjBH6E+k3vwjrg+Hv9tVul8NmvTBWyeDE7FuWdoj8p5weMuJ3kTv3me45HqB2Id8l+Zq5vlVhmQzRDTPI+9uFWY4V7vRdF3W5b99fLwsPmJ6MDXhsE7mGqsDMx4qLYmmscEnVqnv2mVIyCnFrAeDD99omPxVoSHaqbsnAuq0dd4AdH1x0UaSyZ4J4ILnDEO3pHPB8tBIL6FQX1u09w9eD8l7bTkNOoK9DvZxIhsa9pFVzxEC3XOcY2q5/dKZ5qKZTLnqymex5n5chaRhOw9Ki4Piy+Spo+nnuNpdr0wen6gyNcZfqvcwxB/ukGMGaV/muAL8b2sfF8wX56ZFkC7WhhN5EO16KJNgKo+J1Hk0Vcmks4B8SYBQhlQm8g0nieq3fukh7YHqJUIyx+XHHq+gaS41m0OqKbpPGXU4eHgHPpr5jrB/PCn66M7tODtXw8zUosDBo1KFsu0AclipFwViywfCFoEG+ucONV8YsUUD/cC8IPTO1oRpNkwpG1Q94DUTFiA3tDqGBTvjhNjBlRrMzfbWF+DLWLo38dTVf9d/uF9to1I+BO1rMjFrP3cVjA55wLwxE5xwHKR7iJjS5HB2P5R+xGQHmU6JKHMDjH82LcI07CI36Fk86jFulhm4rGmw5R1xom6rzMBMzv6rnZ3NLChfUz9zZ2wiX47AxDBhbF33y0u0zm1wFPfLpywqdpCtey8UB8muKSFZgQy4/eWC/Sh46E8Xpv7unjnMqWbDTvAuZxmGpDVaAar1HaXre8iNqxXdTLfV3cHK1fNFPfLKyV/t44PiZpUG2SfqUsq7bHV5iFXP5H4fCfgzIce/seTs140U15eLal2reCr70byWI998lyVR2NZLoImIDCDADDxWCiuoY7UtqJpprvufecrRnPjhCFEG8TjGqc0A99JgIcZem9cW6veq7Z+CrAIU+vJABeMHxJwwg657S4U2xm08Zi0kJpO6tYgzFnUezh7DnF99mcDZ9vntuGNMw2z1uAYvMwKtZysX1nzmnZ32yKAajugvhNLQYDlRbai+FTNfJlHEI4ympB6CjYdCcAGXILCTszPskFvCVTN22VG+DRBLw1yjpJ6K13ZbRDVrEBduI5OTtamqE4S6RYPKf/4+HySmKuXgXOV00Kz6Tau5zrx4FruAK7MiJLM3GrOaHW0mFf1V2I6dRiT8RndJm1EFxpEx4LvLuhUtMJ3ak3XTGszx0ypYk/tFGqZaQyE6m+a6VO6Krc9ZrIxmvWluOEZLP98Alpl/Y9sUsFkq/LsjKWhUshhchKje+2SG+TWHb/PDeIfVb7a5Jro2pJ77vUg+51IcS9sSZTzf91zOGXWkP04Uy2rua3vs1429qo7+PId+teYunixF+iYv7a3VDaDp0thL5H1Zy8SRNsmJx6q1GJ8QKhduAiuk2/NX7MWdAQIsJsJsV6dUJJktTww7iIjKqVbxijbA2TmbqZVYQq1U4bmlJZiE5qMM7apO9KKaXPJ6NT5mDEQ4SnpIOejLWpxl7Fg5X4qVeAMYGnaD0qKRd+gmw55eLwby6Yh/7HnAhx6ZkduD/VwD4HUlbfNkCpRUWnSrHNTaFOnP5V8Eay+6Ugha3ZpDLBTJljeZr3I1sOfuaOKnTmZIau8K7ozisCNglxw4jn/8+NNlEptonqKafDeBbo/aM0akTMVOvA+TnVULks4VEJSkZye6BEVlkqTRef0CFbhvASKx/cSk8ZCRDW3t2eZSs+A+lF2bRcNSq2dnTlOS5rKdW0KcDUQ0JvinGxYFr9QaSBnE+9MG+TKoB7AsT6HMQEtyX+TGcVyOGyqCMF0HOMSSnYBwo/XvIccUnHNJWmmnYtbutJg5EIk5+NByoeWdIOXDzlpUEt66oxznNR9EpkxwJapN5ZhA8bvcxbOuzvioH9F9aB3Paww7Bkd0SoWyq7ULwHqxIjZUloOe1jkOgOA60xDVVlsNrz7oMEuB4XaaFhvXXZ8jHq5xiKpfGorh8Gg3cAbkRl+ixU6PwZym6skyLHK2sX6y5FrKop6bKmvq+KYtyManEZIz0IJaHaWJ6MTtfW5pl0zJONsckoRwOagH5PaTS6EnohHBB1HJoxnNX2Dsv8/ERx7HWLqI6CR1TAQC4HRKdAilc14rylgb7zDpPAzfODTzo2ELNIjrFMPTKirojt6b2wr3TVV9eroGFGRj2A1gU1Ppj6by2bN0Lay8n3HSnj46uYAtGRErjHa1kjlSKXlGI2O1nD71RTpDoV2Hy0iV3PBClnDvi+NB6bAMm2E3orUAvZP66rfWC7sCySRtlQtA4h2rYddt2LWn1FhVr/FjVbZOIY/NeiFMs/CKyTjgUZgCWxa8pkDzdyGCPtawiOkmIzvmLhQD+T5rsaOSG9PDYP+47bvyPy7YgnjIxBw7UylMG7/7mC+kdSvu0EjDWMQzdxErKtkO8ZTiRL78BS99J/CwvmRNLs4KSM3UWFRaZKNuNK/BAmeJ8h0ZfBvbhpDs0Ck1LK+MyXPGy6Mzv4vQeUq6/jW7nLqHTW27sin/8MG1KiE6lBXZ0FDiua1IlOTVlK34cS84gMXaaCWLuBPk/lhXmK3rC4TOalbBXJ6oL+d4TWuWeFFe6eMrg8ANufZ+/zMscfJw+mkzXmqo+AK4xtuigpmQ5yWp1DTQWbSq33L6XXmiRUKAVKXcQj10clXT+QFAnWpzOVpHNkL5n6DA6OMRyb6u5S6n//+W8CVCR2T50zFV97bJ8JqeRxTGVfAEQoMVNATVM1ImKATmk0zqZEM0K8Ro8KF909dPVngx8LCcZTlk14TZgd4IzDowewaeCUMWuqEj1zi85jldpz3kdb0yhrKGRGw/QIy85xJWafqYUc9J/B3aGl33TdtedxCe0USe3eaeq1B6I36Y+kj4x67DtYKyosozzVg5lqi0yxR/PXMqyXVtTXAhJnmORHTgcRw2bZPJXuDWuI/cBhl0+5VSu4hhGnA9Kj6qDKTlYSxUHcR0BAlXgGT2cVPOofMplDZQA/5AKlKDImBRRurzyHEx24S8CPAxo29BSUsL7p0TO3yaME4yR6VkjEu4cPsMIyCNtXCoKMFp7juHb0ScL43lwF2dIxOEPNYqmZaBkrjEW9j4mV4SKqEcBEJ5bPoluFVCB/8ZcxuqecSW41zclgcgwDg6ls/gkGkkk2zYvScvQAEeLmK4oQz+ZoJcgrA36ol5Wy8WeEHge+tPMJbTJ2OotixfzWV0Qho34ZtIq6j5yh/rfelo96Vi75VpCNZ1vyXrFWchTe9sLi/gegVLaPLI1xCjPp6JXYgH/Xy9ga6jzopSlgnTkTR9OqqIipfX2wrbCKmy8yVYRMs9VpUt6EfVjWqE06OwQuzaUyG3MxeoUF0VQsZGl01AQYYxFJ7YRAhF3UgdvqO1uabY7dCEGAs2dxTWBonvJsB1ca+hT+ER0NVXEBo6PHVY6o6uhxCCJB1GNetY1UvMf1K8cZfEbbrS/nMaqQFDS6P018dZZrtiutkM5IeqRPT5HhCdbQGTjW2DLYS1SSYGWe4TkzpugpXK+TYk6MQIPzr4S+9aB6720chDNpFgr7lHnXeulqommqk1ChSo1iNGjWK1aj5O/Jq1KtRosCnUm/Tb5495jhTnr6+jYo8soywgTcjvLW64ds6lZVl7HNoKg5l4Zat1e0aSlpq2Hxr51qfthlZRnE2Wzh8kS399bi2zZ5ODxgKFNa5IDM8bm3mnmHUMKJ5uO+TQlSV65hhB1nW6OWy+T3uEoB7o6ouQHaL0eNnSVJKLne5Lo2t56umlv32xXp8CnWzzGQj+DplqGne4qQanRfkWD7zVao4qsIG8+3nt7OF1OAIcLcp2Yy8W3KZNz1D5pZKohpGU87E2nASRxW6kTSaakm2CZZvFkdcVWn3d4cIEB0z0R/tdHlAYy3EUBfuXRg6JQfsbphL6wB2us8wtpwtrvucdILW2fkHkDPO+CTPrfSNoshXuDGX2eiApkuQUJbb6cjgQu4ltU228E72QfYPZGEOd0QDBEiAk0It347U3KMX7bPcD28efg6mljlpZuPxF9PB9U/P/iKyojvpWSGffaRHe6b7vg0X/e6WdqLmN596ORvyLdV6TkA5oe+WeSSWQfmZ9KyA6DTYlCRY/1BYTD7DaXv99BaJsyU5/SjLrr4mMWUZnV3VGCKqR43skBmdbWeVT6vc9FQ1oIlfzB0EGI8dgR7j451tIYCGd8ZkuVsvigLdb5qDQB6I9b4eBBUN1sOpObBXzXvu74EjDbX7xB3EVFGviuihJ4Y1f2ALfqrub+6K8a5v9REyIO1VSyZ2Y8fKsvOkLRaKu6K+7Hqs432WeaXrYTsxYCYZIFVp9QdBL+9jFApruEZakoaxTT7EQgCgeWen5h2fbmDANNzZau0K8seeyU6dGj4VyhjVCOiZgcNIDXKLk6sjY1WrfLFdQ38vfd3zVC5Fdda+jGSoTTuEsvooRNjwvVQn6VGa0gHKboeQrMarkByFhONGNXezL6svQ/0BjmxPcdOfp5bXezKB7gKWAcjyfQCHpKlDpie/2vDlKBY1xoBAAOgN9aS79oEohfyhhH4naTygrIO6aZeeRzAJBqxepZh+CBOSWh8NEMldRbCsGOpYlvtVHFxDaPF0bAtLA2GhB+WlgIQAERvbxUI5BRHtXF06AHMBIvFHxXiaytp3lzJTLXVbOHAsY1dCukAyddSnOVRwSV6f7ZTTdQmlJHKoxpIHh2TflCK62ccP9XOdltnlOWlPiIv7iz3Wf5LvWLjd2t67g5+sO8a260g6/O2Zq1dnxhyrqpOZJCkVlkJXOkow9Th8iHtBI6jOKokgW+vl8NVWJiyF0BBEd1y64pqeSfqwtjlofBxqdw58Hyn+XhKT8L3WSXmCVU1afZZTnVrfEI0ebyHWdexRu7jBDDGiwsJJNAOb+9M+luI+WEKobbaZkdfp6llyXOuAEIV+UFyGI/TXu6d7G1e5nrdeHA9YI+iO+gCWrHoOVLlIyMmbvLNyU/Y957Bmdxaa1GjW9oA+oUeq2Cpdm8LL4bhAS8H4WjLPSQ3d4Um+0heXXsP4ByhoUumfRZWK5yMyEczrqKbvCV0Y0oMHaYj31u6yg3xTRL1qPcPZiWxN/AMYFnjVaIBFQ8cWM1FmgEK6pXx94Oy3TMdjC5LQmmSM+BqakjOCw1VbkWTzYFwOr7252S1LBHrK6wKTuzqW1pXXv9Qh9nkZxhJ7gslIQIWGYjd7N5CPS5uWl0MPJg2tzYEEOFK1KHOWKasllJmETKhpeoSeujNIash8kS2bBjOnWXdCSRdWSjeFpzp3Z+pkneLALc+ybpbKsB8FRIEIX+sDCtGeXZTjGnHRShM8B0yUHBgdlTPzczPPamsmYV/lKrC4xYXCcJ39rdTJvy3Sy56/AEIqfl9Ehe7fdWwN1Th1ovDWcIlLx2zfjg9up5ctqN1Qv2YbPlg9I3aLF9TQysSubcxmEdUypqymOs2hbaHCqDlrcUTc/FOH1Ux1VPu2N5jjRWVbG/KdZkAHRmCBLUNhEf2v8AysUBS8eEcEIzAXEonO8iAE0vdV+d9a++PMfg+UgBEya0mKyP6Z97OLIu2lmAwZC6TfOS7JWmfu2xJCuoio9rro/dhx2cjslzZ2mR79v+Zf18tsQ6cuwRjac4fHatiJtmHn0nDOml18jhSwhxGY/2rU4D5/XfdpKozAk8k8or82A9qDHVqLMTV1J1KYd0sbOC91qpweL7gHT2DeMh1tLozABrXPga9u+2B0rJBMhTEizJW0KAtY5xXPRkib8PSr6csUq9RDc+EzuGiQyKkBpsYvFAbTieCiTZZYvSFX5CGLxUNsiAoSBWJ/+F5PhxGmQtyIkP86u9Am7x29URko+E/xKYaFuPbkiRApEI7saHoDKIkNxGLJVsRnqw41frxkbToQ0QOYkXhPQU4TMmcHze0aaYuOpRepQ9hAK5eS3A9R4ISyWrvL2mN1jyMhxMWYNtaXZWfl9Xq1fmwLJupOr1j8Qw0C9M3p9WReai7/Lzbn3vBJiqiNmZv6Yu6Bd5FD7peeJuc6mbOXgG8Iz0kWSVA2hEAS/r+B4XuTXToQAdk2ccprvNp5pdmrGOWIzzHeHBvOsNBco7bIYmbtFWQgvbzUmGe6MFV6beIQkJsO8flQApScDIUNoApzSpcmf4cwY5UOQqAFSa7wDzmncTTNoolI/nwfELrVVZHRn+py54OnhRNMb4OORvkSOkWmHlfvVxxOK2uDTlGFg0SOH1A7f47CA4+zVmU3rEYYPmYfY9fiLN5v9Bm+DBjiprFjf4baGB1KEys/+7cBbfLdjVlUha8RbUfjeaeu0dtaNd7GYjlx9VWNcsTt08nSUA5dmX1VbTlYtTyTeaNHZagCuDSrJJkWCN2b8On1zAsZKrS/VyRQdJZHM8tuBedfNLSPxXeS0oVEx7voXT2q2JcWisGniblx+fK0B/Bjty6MGzYxqhC3Z6w7vljvUXuwxvKkxKR+iAqT3RG/xz9i9Y8xwsxW7Y6+WJna+GrTBnOdjsyA7VWAEBKRDcXXlrrq6VyyPfxuIwOgroc4JhI140OehfpdbfhOd76+qyDLKhYRiwsUCxQ7CmZL/nNmYujOZOHXtXCbUBhhYdtiwT+B4XvdXRnJuFEkCgMieMmuQtf9YctEUhNLaFX6Lu9ahERkbD6HoSfitFVQeVccpLFVAKPbZkiKvO5yImaRPO31d1itLLyNxXbi6hqNWq2hoFUYJ8M6cm/lq2rL9qrtBOtS4SqzCv0mc4AervzjCs9JLJOIkOGwr03+/hsYfYcWVDVazG3fE5G3hBgKpF8G9G2y5ce+CtmYHUqiTAjQVknEzd4kWYYzrNB7/4425N8gtz+pdBiCxFtG6svUNokQSHFO73iTn3WICFY3Ljmf8hdwPCStAUR5bzZ0q8utbStwu2uha+Ak5i/T0ZQuBUiAt7PwVpwdw7XADYJA0uTvzP4/qy11+G5okN1w4v4aPfe0lxFGUwL1bH7nF6g68z5G3sTmXGOACJj2VJXjpeoq3VpAxpDxtc21ofLpLdXfopVfzwnIIQRiGnnsJvRrQX/cnt2ltDDDXx2rkLlLdV8a8ruLpB8gwNC4yZ5iaRg34Yx0+G/YJAMGvmZJ1JXTbNczw0inLaJRy+/8945eDV/9iF4/N4pdQxU/oLHvFmUrQQRErXz20LvJz8a/XpSjAESR0GLs8MdDcXwILG/v7pm3B3z3xkcNBdI/AvRtsu3H3razPcQ1jdLrUJEZ+ptskkHGrcg7xS3yXuJH3aVRp4Z7KlRb6JVUV8ncmvIBnbm8ts3NjArEYx2tiy9hcvm8+ZxRhheZn9kYz86vnlzKGqQ5/d3Q0BTLQziNz2dtOpVWZvjPPaMmd3CROGLmJWZiH0dxsvzDzDZ0zXEYw3oucbIBXHw+sg3oYfiC99wNyWIRGSwSms2EeptsxbhLleHWrQJYT3KE4o3vIude4WsD23B+r/EPdl2ZvZNCiy/PlD7Zkyd1f5dfGmzvL+5W7cTkXHS7EmZZvUnd/FDOano54nWMNcdG0osEHpLkH56q9l6DLkFUaVHnSJO/rSm75Q98JQmkFi8Ic64SnO/E9qQksQP6V35rfXDw6uSBPNe4NbqAUUuvlK6rit57v9Css5K1Lq0hXsLG0ZwagJugCWcdMOl9GrAwEddClmeHFerApUVZHndGkC1DiM3SIunQx4mpAaLAvm2HsOyWUvz738TQne4qneKdtEqERrhK1c8qm/Hph0UN/RMCfV1acfN/MvhGsXtTVOMmps7wKiO9SuKwHbgtKw/qstLup9bddCUoiltSDRGaZVOBK5xezgZiT6XGdKFqieVP08zAUydSkmWNUjUaP1D25GX8vwUcoUq/l5lUCbQlNCqZIgg+bRC3b+5eJ7QM/voy78V5+4occSKdX33n+WSkH6ZCzOK3tGnEdf/47ZrP4Y1atvnz8wMNGUADhEAEnxYI3+tIS+Op5vV/Ap5B5iuv7zXHdoPi16mWZpLeHAZlwvsD2Eao6MyNDWJwN1nU/Z6Wl7a6PXQnUPenDoiAHCshbgKk5AUfpEEIxN4r4OxFYSqkvL7BUkrzu7u7cmy2ijxZJ9Wdb58aM0AIxImIpBEWjMBE4f+BVhLW3NKRUGRwkNmIdAqvvgqkojXdMI66qWt/mmuXgH8n4Reuh2FDduSP/QAun2O2Ed2xib+c9chX+AgLn4uzz2x5uJLV0QbwCyQ+o+QgOHjaaoDAiHj0aQGIgNhiTPqzZjeSpDndn/UgCYpwuRVrlvI+4R71iKb8DzVHjgFvYa54dIOg3SXajHN+5tIQMr9lfOxkRxmo3KSDEZgVEd/U+wFQ4uDYF5AhkB4UiT/Bx4vut/SgpyP+PYcccuw5z+nW57IbJV1J9MUi7isc/NjfnwACzbNyRofqLn/9RplYJzEwhuIMZ5jJ4WWXv3rzEV1D8T08YlM/bEGHRnDwlYsbbldvHRIoF36ZYJ/OKzw6++y8Q5GUD5fuFRnrOkZGyGK7IQBoIUf2/PpgkfKSxD0jZe/FoWM2HT2c4BcpVdPMaZ8dnvJdt9dIBdmERGKdSx+m/yYV9eWaiQ2VXudAKbCMWNb1P1p+5czs+YWli8gGrAJmHDAPf8XnABOq54Bu6qF+ANqsUPIw6YzQ8kAn95Fxslp215MFkt09Mr2F8woF3wvK5kHllcuVnoJqo9c4/mS5bOvbSdbTQUM9I0/7XgNWbVbz7NuvzjFHriz0bjd6jSsPlcv23+KFTwdizt0tvGbMJ5AtG6MlW2qOY3+tv34HuIckTELLb9pyaHI/uol9+iaunXfZ5i0hJ7x840t3TjjJSMv5SorKCr5I44jzgcxbtOV6j9PLx0CiNcqFEsGehTjxvoy3eahLbJKDHIGO/dQUbrcbLjJbsdXHYQyduph867ajj6dhnLUMUeW7dj2vKBC+Fwi8Y+abpNjNIu5vopjTidi2uqNt+vykwZD69CuIy11Ic15g2bQKzrZ/w8N3AkVfETACcY1S0aJLjByfZ6Om7Ue7ifB6V5ESRmBNNuDadXl9nJ4+ltw3OxhBY/Zz9Wf0ZQI4Zsj7sfdFAxp3FT6f1CJz+N6YW8NPret/BfzEaL7y3HU9eEoofp3aWEfKNHtBieTMLi14Cqf7wmxDFUlvKQXlwvsD4O6yaRtD32ZgqqPt4WGCPrYJZyD0TpKrxtRvHvm5CdqDF/kl/65FU27f8UaKrO4lifTFBD7h0IjwKOdZWK4ZEBjdnhaZ/8lBVhVpb5dfbwNP40WXdR8Cqhe3CR+ZTZBIXOHih/HBU/iI87GqJpP2MtUpPR1cQ6XxHPIxOcsDhHIIScfcrN5AVTwnDU9/hHf0GmLD9pDyzTv4VFWWbEz2a6yA9+425TWAyF82ErdahBdzXKrY+MjLSqnbnNuabGkikNRSN2OTe6uOF0AgnAj+nVxjePocuE++7gcsdwmGT37lYD/6AHdhyY6KXeAW1PlAxMSOpJz/cQDFfdeuPXGcP/w1g9tPGP1NPrcmQvAP4CLY69BvPaa/QSI4sxAn7hG8zUNVYqMc5wj07Bs9zoHCtiFtn6vvcVaX/VTnP0QcnJzhe51zAzYTR2BwyWLjbUt/HP9j0ZFksfodkMGSMc5qk9fpKnRa7Uy28kKLpoJPFfiFK30ajxxXFdUku5GGtKYM3gIjOobpLgCbEdPARJsoeu11Y6FhQbF1jDTUG/tOI7XoM2sp1hH/OZHab8mbQw9EV2a0W4KB9DS9NoJYEEthc9AaIoBORNt+BfKP3HOUV+q0vPVdKPIzk04Kasf5xO9iy9h2pLHAQBRaCDdPlwZVcit+xlx9LtONpMJvT7PjQCeHvzN9eCaryeePa9KF/+mq4yKfZ6TM9jTxqqmUCNdN+OUfNbYyGyhWqeVVreDithY0+vJ03YuKiX85P2dO3TGEynPIV2Sy8oA1iOkNdvVWxOOuq8pQyvZ8KF2IeKk7TNe4++6abihMZeE+02rmLM2H+O1t1aZIhrsW7aRF5TW29LIYUraCXv8V9JV0oRFdRGyyAmup2Tewqs0xVeB9v1KrTM9zv+uWVfJ/FQconYYV3b+KZHyJs+sQsyJTwytaTHTI6t0CxTl0fpPBrAd9ra/9DNwnX/sDlrsFxUHei2/6BH1A9hHJjvKHSJtxxwMRCvXArPhKq8bj7F8TrX8tkPOF+m8CMTkIigy/rNMw+dd6xMhgvhRfiCB0tAqpNDXmubYL4RRI8WoevVo2muF4L11Rz9IVIcxnVt1kpuWuxJfbXqDVywf6v+/co1jC4XCW/CxHU0BcD5ClkuMivujfVW17rKOPnlpY9qu7SJ/zEJPypbj72812TvfBmQMakeJFQTcwmCG/VKOkTKbxmLYVEwarU6lS/cF3G1ubaXUo9orYCxqS3KBErO6NUNy6vs8SXnZwhGTAPpvosQF3M+nl2SZtefk5o9+wsNg4Rlp4RvwRoPbCNvEjhzliqTNc/DBr8BRrxPlYdZNReyIjOmnUSyFzLPPXWCCHwftzh+rFo2Kq2ylfaeLMFfDf2W/4ct0uhJrTbEa4XZHMamP/gNZarYrZg9Z6P8CRCje+qKyG44BTwLY3xGjqx86MMJMqWuCDnIeQu3wXhrtM2y3ri3KZ/uhoM3trnE9pXJbcohyMwFJJiqm0096LqHQXq5zqKWrbmcK//AKUetK820sdQoxqeUc+JcoyheIWqVrUOrzmm8LDBbrTu+lzT82/ejfEbwBK6fH81jP5y6pFjjH7cwwEz8ocl9n8969wrfSw9KGQ64F8Zric6ds37XRGVVrB3B510GmeYwBmMAQvLEtCW06jQuQWdkmO/ZoB9qw2nNXK0qjVL1qb6zpJ/PVSfPZ3sdgRMvcwtBsfcZyqaDSoTiBOybIagiSd1tcAvwiCd9mqP92pTs2N36nLRj7RSl58dZp/ndhtKz0x/oVA7AibH8EHruIjjscqmwypd2guHSTu6sj0T9R/U5HtarHJcEXGR351tZDLDuUf/5iphRgx73Af4QyYB9yl+XbldA8iPMAh86o+MNsLxEhs5xKgVgHmD5u1y8K9AJcdOB//nsVfzqnmy7D82dY1NMOb7LrDR4tqK7KNWfdZtU9esdVVGmfVDg/V0gqVcu3npRqnF7GMkoM8202dmO9F9d/UP/jE6S0F6OC/y20slXOofK3MshSvIu+eQ68w48i76CIzsxRldodulGSWHjuVv8jHXtvd0/kuc/F6lJL5eyOSfZZwey00/SxeN7MzZJjZzkq1WGvLDbMq+wXFxnPsOySXaOByO71E82wzbE72E1j54JgqeC+QqlUI83y9ZbIoRy56ogzbPuRdxpXzxc6uQ4yKTC03OIx2YP0uAWCPGVIM0ZorpW0F0LumP8zwTdDgZGfHVqPWIvpD3/nKFhNcmXFdWV5unZ+r1tVmf0BMGM4t9BXlGdzJ9uaMGosrmAZU2H+lPlmuaLn2utFvWJTobikFX4C2iCuK+C7bIy65rmlZlk7puaV+W7ap7MTRrDqXxUcAO07OlppnefuC3Ty7sz5oVKaqLZFuQ7cnUq7TYeb1vJ2nkQi4B3W6W+cdIAotb4jU7oLs5p1HvgjvbuildfPSLpcBefSNZcJOZZs2+gqX/oicLp2GMH7YzaKL5QFpNb8qTB8O7r9aPDWW92ES/Y9vhWPYy0YBlsPfmv6vGZDCSp2TLxJRaM++vVUlhVZc/NAz++vr69csFyn+0ctIT6b//9KVhb8qDx57/IkNZYHWpwEjprjNQIxM5tX4Qhr1f+F0WkXwPq2yeH6NPS9t/aVsW8VPFv5gDoujsRelr0pTEDgNZDBeXvkU472mN+biEDccxRuTKnKNS0SZpavxeZ6X6fWKgVJgARvXwSHN/dY9YjgFkgsXgChYVDXeJhG9Y0VXEDfsxFATOOLgcwVnMeZ/0oluYAWi/YDmkJ+u38kxuidXCHjfHNB65Fa2iHDWptBV7LouYCPEv7DUJNeJGEsw/LCf6oOdakhuXD4uS21DavHLZTL/TnIauTR/VF39ITMgrSLeUSF08seeLfzFvxr4v+bGWfhXkk8hxFMMQ6+uobDOT80UzPyWhu9jfV1FE1Uly3Nb1aN14wNy8UGd++lLLeo2h4yOn0S4ZtDhmEyvL7Jb5UAfIjtMt9qntA1pICj1MuiU2eQC47tEqN92g8mk5tUmhB87J+ZVaDyDXc2i1R0nKbiY9LRU1efazwpER3gucuWGHq7zPpP3XxnVbegrDtiUgHoS/sZB7+8PH0AQPEu+0qTM5uDU814/7NtIof9aiP9zBnYcEP2jIPgGQZ7qT6bUPh2amPBPZKyv3vTMZNm0bl01nY3IKf9QObcPs5L7HgNQHjbM6SLYi7pT6vM9JfX5LaqKnt6Scw8lM4xMNo2vkLTmzHWNlvaH4z7TkUPk98w/O9Iea8P3Qso3hfJsOzFK20lVQHVI+Dsr2gF2ts1AqvtHA7qgE3Bsq75Wy2avKWSiaYegs6J/fFZbiBpOE3PqI6ITzW8rvDbF5lsoL2CoYiVpD3nX08U6ZaPakZeYU/XCt/p7jxm9xvecl2Qjs/fDCWX6ikhB2rvGfON72ZdkI4ffAjK7AdXQt9S8XTs5pVam4HwZz5rlvyqbms8BY1Yq3jwUaVMmpLPCmluytCovX5P9j9nJFnlWcDW+1HpUL1JBcIgAeTB+O3q3N5oaJoZbk/0PJNAZNLa81fSKnsW+VWmBluv1p6v0mgjVHbCGzbBxRrC64t6YLlvdnlJ/akhmdPZindG762qHIuy0MKU/6rMKKk9tuqZ85dgy+TuSIrktSysHaJWby7IDq1m7qf9udxOrBsXeX5tqbS0cxk8tyRShK5m8Ga8FFZ9io+6i6VjWSfYwg2N/ZvIMrvnYxIfeQdTFkW+ZSxDgqOvqIna0csyYCtf6VqssHZhBG5iaJ9WQEf3ISaxstjHOWr790CVx98Fxle+uCr8OFeFlOX15KOkvlIf9hjoohQ8soL1oxZiuVGecWWMaK7K7U1JNX6h0NBr6xSM+nJz4CnxF2YL3ZG/4ezl6HUI7bbuJwnDh5YjHXFezZmcVKciMtMCPK1K1y7vzvMxqWUc+L5bJXMsVtuW37vXOrRI5x+zP0QWzcgNZkyk1X7eFL39Ox75sNnMdtyxC/pTWe+rAtMsZWdZaVsOvQ8NXNcU8SVW7VGtoqTlZT4F6CnQFUebsGO/Yaiy0CP/Qz35liROkzLgij++KrHcpMlqy76GdzHPL/FbVxe20+G1fNvM9fJnbE1g6OKS+nxNZEtodIpmw7NjHKvUGSHW4LqMzLhHfDqNj6A0b0d/U/LyMy42AAGwNcb3zh7f31sxyRFKXMQftdjiyL9veYLcGH+AN0CYd8MoxsXHArWIcK17H+Lu9eDcn7Vz9L96UkmIqfY/3gANKRflehk1KTfuJZESWX8faK+UrTcYyErSO4jkxS41Ylm+tJFSG+LNGunaxaM/JUgo+VJuEl0oqOaDdPakYYMlB2YA4LkpNak9giVvkOs1zGjeunRV/WU31WEAejB9oGn4Cq3MimLmOUFw3Vmi3pyjWNdLRkF1lBi+KK1lwcZnihn96VxzwFZY1QFtEVO1ot/x2cErmskdVz9xQK3hhW35lLYcn1i3dknwW4wGSVbJsxPP1dS85NK2LcB/0wWc+yshcLSdNnbqXW5SjeGtmWxoz9Wpy9UvTobm3KqTgC15Xovy5IrpOb5d+Hhr3F1nSOoJXvihs8NqKc9eAwi9FXV/vtfe0bl+xzEVK+0Gw6sdOS/ydSgnclfC5K0VMBuxx0tU28L1/DJOy2kaa+g+BdcXarK0oNovJC8qQeOx0hLrS5xChqU/ra3nY4hyvjL08/KE8w66Paiol8WhT8bXDHAaBsml8jXyycK1/RWggYLcsPR4C2eWH/sbtkU/J7ZKjGfPy7FJ2K47txbdalClqq8c4KZ6FQ1R2QP92hLlqo3h2XuDLCjzXrfgwFiagIv1YAVKua6/7lzvUVLqX6p1OOeuqBgpNbKjlvzua7UHhg2f+2RmcMqdN5qbMEWB40u5CzExahJUvtaFJ1nvocrSyAEWnI4zad0zZwVUBLyhEwE8goRCazWD2lb5V4zIOch/o2iqtZ4Dt7dJt/6eU3rosli37J6L97plyNyQUgu8n+PN6U1XKSwvTL+MC0YnBHUQEOIJk+bPFdQ8ds1TXZWbneLIktceOWWprsualrlOGl1AcWHWKPLe0DSmdZdawAR6FwIqujABxKa4rf9ZYYNzuRaOk3JxAnzcVQiDuIkJ6GgiOVQfMFlVhnCRXntgJniX5W7BFUFl1Ah2XZry5bubPlRHrJIFCtjD4964xfC8k6YCyYMsGO+wFxLhBy4wJ2uOZ9R1lM1ElJXrGUGTw4R7fw+uPqFSWvJPYfrBwI7YV71+ZQFdKFRtfr4uq7Vbj7LdAhoK1dZ63ZVElMDrYRqn89SCDKKc4ukl1oBTilEM/t4ELgBgqLbN2HDsNN6UJmgElzOA1lmvaY6ZYNy0UrWukFBae5pgGy5IrkJWPvNgWTOSoPUc9Rqj1GauVlW16eXT7rKt2QTlwDCmPDbO7qA77ys6JFQ2lQoOGaNCuX1Oxhxa4hDVfNKTmLd0hDRm4+5/H2sGngzIe8FzDk7nOsBpQALxQTbkrqaEXqps6CJ0luevAsyh0U0zPc7mFZBWeEVr4BnCcUxDMkHi75heXxQt7PaPO+Ew3N3hVl+607dogsBY/57oW7YBsfIkmK1bR4HSos3nRktqfgoXiGzbbJxVvFKVY5i22lFZpASXMoJV6pMNNseGc8Sefx1ryLUZ53ZYxhuOIhB1vI5Zij/2oq2vEXA1jeZawUp/nyxE2U21Uh614Zwo4xclxRtibmQ3Meu+m5khurj164s9MTeGH04q8GcvolVhv0qapLnmqtdSwilFOr4Y3mkQALRAB1e/U+927tnBpK5SNVbITUwQIZkINcv/aVRoQAQU/6SmsJACk/HJfz0jdcPHA0rm/18l0noJhcJ8C39XsL0ofw+3dC/NbShtj5S6Xx8SES5uhtXty4dMU3sdL0vf0Ao3UuC6ArcC070u0t5Wu7nGG409XmAHlO2XB9qOX9YpAaoV8G/5aTUF2enlZe4vGYTPNcvE7rMD65fnhiA5YBiOwquPf4PDLe7mxdoqtA5iNUZBOZICvtILzgCgqJ7PujGwP3CDt9qrJCBn7SZ04DWynap+MQduIaFKa/l1q6cItaHi+CX2cDDTDaTemsrS0FW2kOqz1lfr6QXIq5PlVKSsxWgu0fetD9+B1hc9SL1GUusyrwAmO2V6M9lDtiLtkTePIuM9JhviGu62+YLdx6kQnEKHgvKXULzi2JDHaoGS35hKjpDKrRJbloEWmt5kD5SrAOSFN6dG0q8dTO7Ud3wLmrCOdxg1viaIXCjWWWaFsSwCeRLLdGVLfZFzt3mFRv6Oq9jSc7GWVDqilg6si/Xxn6h78SufG7R6OpKDAdXRjWc0C16PaSMX06/ncNHhd+ouKvTl8e+8ia2ltOuDOgSmGf1Pc3nbDNNXWFWNzSkau5QLeRo5sFCu2SOXFkEjvQbP/7WAyW4vwbsRBDxSvqxsadwFXu9aqnk0tDlZJHmTSR7kRo5q8cSqOLjJ1n0xYz0kaFg3pscYXt34oOq7OSZD6SFpNUATpy907UjtcMjAy94uHtPXR7md0bNwCTR9z92WV6kifnThufV6sPHkVBlFUNA1EF6g/g51m1UsnvZpIIPV9bhBttXMJ05nJRMwRuoUiw24VqKV7bxQs6C13o9JNasPhmW2kE0rrbukbjYqx0lEppetzr4Ph3jEUlSb5H6ek0gwZ9VTnWpV3tZRYQ/etm5fmWT1NyP3JVlqYHRBLUkPJFsSJxgAORYWFh+7Ws+b2yM+EDV7jUL7RRVJ9Xy/qEMBUmBnmcq4BRM5z4S/TeaV5ZhYnPIvthd7/z0D5Qqlvph18HIOaj7ufXyLaCzPLIUheBWRsTQxHMv3ZL7wgUb5dAJ0mmpkmnBcu75LxIQTC35Trc4rZbMN2cB9+/2892d/xWZsrgTAKgaWazNSPpZNHMhPkPx3YCIp0oCkG2kks5rmP0WFIzzFNicgIGVkkZFkBd5oqE1wunNyAST4OtxXIKcNzSDrAjYGrrq9vsWYWnoBYgP4KmKzJkHWkkjaRC0bUalJiIr8BmEUT1z8Z3pBdU1b0CZwkHbulCE368AYud3ugiiWgTrXcAVYCwTq+4KltWb22bEAZXIghGxbr6iho1vjlsKl5xToftJeIY6RNhAMzKPpsLEGxXrAlB4imqR4N5YuuKfPvvG4Oj0q4UpXXJhTaCwr/y2WK5bX+uyej9/MlwQQBmfUJnrR4qlDhrXazgNuEC7jdlrrnVWMGHna7scUmplZHjwOtYGrmSv8pMdZ6UnmqhiMLDdFwPrBGx9+5dsnC88w2C+/dnW/Py0wp3kfmme2NTbp55G+N954a3a7ZH895mBnenW9Xv1aIwqT920jhLuzsIYyPk9y5pHOJ0DN1ZlqTPLe/blKEr3kYPDOoHBv6xhyLs9Cm25tzawWZyo8NU07SXkQrwSaswbS2N7aa2cs/yhRPItmB6wJF8xi3FqugvVu9wZKfcY2df+nzpr0JeMy8fFN6/FyypI7TdzeCkoYLEaevgmPpIO+hqkd3x9q+vgQP1DgTUlyv4EiIqjn1kCThl6Rz24DWRSkg3dkVsAIaKkyP+t9/BGmQZUOmveX1PNdhLePY3ubbsnf35k7yYLLanOHDf/M4rgGYB6RdRkmqzeZbGX2KZGLibgDN4Yi+nZpvDt58W8C8hDcwPhxfnMjVX93/VYGCEXgPSbSiW2lbkBU+xGfOQByraqtsq55yYzF7M7yb0hba1rkzgl1v0yf/y6sur4GcWdFp1sZx/9E3eKJgA2/JdzTm6xmy+o3igv92hvVLxIs4Ea2ICW9UfebueYcezRfuzNWVRf/lyD8nkvUNSXNNkm0t5oS1CINM9fAAZ98wZROh/5Su7YKnjqcIjp0XpBw5Jkg5fhg4Pa08+9dUYnM5OhfNO6I8QBol+Tsd5710x42J1GYfySlbOMhUvcE+QgdVzMm0Jptg6U0VsDRx7Y9E3PYQSAEsYdBPb6DzJuCnr4MfrsU4DhZBLByc//C5XOZzGWwtWBQgIHH7c/mSxIPGcOi+HOjfCy+ZB8NSWNYDsZiAD5P5ix+5AZkXfz2A1kGIlcD801RKJkvRQ2kfgXAMvAphOIT4O5cQUMTBEgh/Xa8Vx4rmIfv5tcw6977u+RY5UUGUuVvucFZwlvDvZPnRdmDRrWjRfPo+QV3neb37u+Zb5dIK6Yu4SwQfI6kC6BlRf6+GAidnyXV1MEgDs14QNMye5AW5ulQIgeTPL+aXcdvf/zJEJDXQ2qiliw9KIQSYd+vOn2smob6WDNEg+aWUhsMnudEu32xUdulIRsg4JxnPTpCRZV4WjMDyHlpgdN/kmiwyQmb7gX+3aDLu541NZKmXs46iRleoZGuZg1xWf9hIxmTlogO5wjkFqj5HLsvj9SIF4y0IwBzUXwmcWwBE33rUu7LlFsnkhGLPcJ9CJJbtpEXPI8UNrIzW3y6AT0tyRRcNhAG55JcSNKIzlxT4fzY6hq7aGd2BjWLLt2YhscAMMUbsohhejhTjgaMKafuNsWpHdAc4Cq5oy6TFgjNMlIZQXsDzuh6jzNWGxOn7TVCvD9zYRNLsoLdQz/jdYDGXQNL5P7hAZ0JocUlgotyTNac6Nie9pHSgqKijON/YGC40yRe0o9XC9uIKu1HM+9W/Ul1WYLWkilk56lc2FYtQABl9GFgqFsSV3myrpauv2B3q9+RN+UKO0WlrROfF3kEr0J4eXu9TrBe3alkavFm7+Q2qwLzwdiCTaq7TF0c4HQefsEdr9Hr+Pazp56+ilOvJwycEHWZ/VKUraSkxT0O15MRO39oxR/K9HSbl9iqPz5vhJlj7/x6mMZh0zhOE1lAeijSWNXm+Bth/sRR6QJgyuj6HQ/8riXlyLxW5TaN8g/NP3k3hr3hsnM/4J4k1OEhJ3AjAcclXUkkDlfmY/R7KmsQDiIc1YtIa6wQus7iV5uOM7x0flXyeJjBxyAg5Td0eeY+zsHIUWDDIr3zTlEumNGMUEH19oxeXt6g93DhLXhfUU2WwqzzPHQyarlv366pIS2+SjV/6vGf/E8G+4NrfdkRa1ibaBLJXbP0m4SZTW8A/K27y5HEH2yOhg7+tD/Z26u1AYaqpQ17hzurzObMGa8JztCWl/cXm9uLiks7+EndJqU7uVuZk+ktTVbxjzzGRH2kctOKRVp5O7shXp7gs2rz0UoWp1Gwt6eordpb1u/JGPR5TT8TZSOiUz39qkjrRXYN8YO2q7E5FzGvqcVsze6tL52hLKub77FN+m2EoFhvUF/r7iwuGS0Pu+dOeUKjPkTtkdRm7Q55m5bIBUEMidMHUN3wfEaQUEqMRxX8WZKwPR0h+DiabeNDQeUbI74koXgv+pw0KQIaBg278lqKs5Hnv5gs90CYBBxSrAJ8YEkIi6sjiN3/bkgQmg76PVvYgIAImWclJKJx0NNl6Z3/bj3Y3yBCJwiBRQATkXlHzzyovp4AISAMwNvNdEkKSFCml57Pv8KT3tyOElDa0mILthhLBZPwlvkjKRKP5KIXEn9ucSEJI5Soxn54leSr7OwmIgHQDh2W4TUJInA6v5q5Mc/uaEkRAioVOGwSOjhjqUGtf3xarVKX3My0DZ6KW98V8ipdq49t1uu6xcDoEZBpLMpKO/0hkLXODG+G80ZKR9BBjt9DulaRdz8QOWPorYe4rYjFhGJhKIT+/Y0qGYSYLTn5mLoT+SnMZgpk4DOSmMxpuZMGWpgrv9R+FiiO/EsHzKSMzCUTiyPYEYrGf8DH65rATk1vJFDLo8FmKDdHcwuYTU4nlUvdf5jkVFpGHtRcSdyVmL3k4QBU5YzpNILmig+qI9EwWA8mzOhOWq59seyt3+troOwXqN5Z/Xbn6Q9UDgSUy5bGlCLMLS492FdjEP0l+WRo+xhGLP1wYPPAnLEkZmeEQ3DnbE4z0+8Hq3QvWP7M4NfqNR6YXm6Q2XkJiM3kjDT/5mwRf+GVD0/zNGxacDcXaPrPx5awL5jnOhKQKaBGFHRhWcBUfAo0XDMLYZ8bcymKRDd/LEtan5QzT+7PdHy+UVxtE5ROwZjXcDws0ie5GsmaSHIc1mu7/IptH82xKJ1oy2uExxkl7CVS5QZ4RzSqseQEAim1RdeXkx3gDaP3iep8oFVuhfp1KbQMROOUmW0JcWehrTbCTHZ0LP9xUtip115Zr+F5WFPEnRJO+fgfWaODbZI0GBj49va1w/6EyIYzA3IgEb2bACCz+4S9+DoRAMg3dfzKPavUH/pTACMwxSoSL6Ivo7ITfExUTvi3aKA9oUdvYabOhJ4KXfpOJ52rTQSpnj4Wm3qcWxbd5TgGC3gR7QjJeyNq9FO5/5xHbb8Of7k2wc5LxQnh3Obzj/mPJLt1diT7lqNdhKmj3q8L4YpJ4QOuacz3KTLNW6bKCeLP8D4rlg6dhzSTc4dl3b6EELzwDSXSbu6+xdECdr3SgvxW7vYXDpP3C2/J3q9PMnRbPGD0CQiCQhCnM72yt7b2Ap1NxjOYtqglrNOyxtfsF7CGICjO/H1Oklki87QvIYXJ4wYaMGWbfGcX0nDOkPaj1/fpiWjLBr7W+gAWCe1sv+/zRZw9punH+5gLB5sLIm7BGDdPJag2Z5CIVZZA1/CjvZ6UcVlR0/f0gKAnECf7YxibIaKCFjEbo3JIDDY7o31cFX32FfvuBDCahV/5BE/fRD79FO/sf63DgMAg+UuNmteOHok34QdgU2lBbeLbnEccgwGNJKI2KaUgxz6iUm4JbbCIrUJhokylsZ9azKmXWWgIIRUH/08KQ90tmsdFpMJzdrBmgDb3MXMblGhsF0sTL8u2o5m6K0GoRifcDsk/nEL4VVdr2p1VXnh6A+HnEUtLDP0Qo7HyAV+DYAeB12LqcdFwLPbACXSPSG/zbIlXNEr0usHWby9tLnKg7XiyUii19mxnOw6l6vW97DxqSM3q72Or21khP9B3Xi3CpWfsW052Aivn8e3IYJNAn35OXm56cPT+Ljr7eBhEEqIOkUgiYPYZ3l2ScIIV0YOcYYMn7HsrGp6h12viO92LH0XsBHnPqOuZR0iH6fjjhuT/+PnoKVHxUm66Xt6CJrw4zKwwUNUNyhZX1cf2jAGNIcdP0ADbrDgOuGvMd12fLfRyo0WnPO14WRsYqXtwJX0Oo0Bk+/OqTOQYPspBIgObiyalyvAUlh5V+JNP+IN8/098pAITPmOiY9fUzouY0/p6su5ijLyw7pXFH9fNvt/Rj7fix9pEVPkqLa4Wv0v/feNm4/6BjahvPN//PIORNADB2eV4DAMDzz6exZfU/X1N2a34N4ITev+tdYUCLPZS7L+3jb7semth78KPbRbLTwwS58c8+WrU1xgFi4L3Jex575mc9j8bIOvloFd692M5ExOhzrMPOo/gHVBtzZG2xVm3bJS3r/rjoSrFGwV7l3cts1AVMd9FuceFCltyCx36fRj6fgy5PoAP0BtKBC+hlfQAGlMxu9dTYtFfrDQB+y+4COhMPwqPha4yrSh1e1ZdSaFOiKlI6vKUlyDqU3lXDGfpO+bDGp3XXdmzK0AfWh5n9ye9RLx+09Snps/cbXNMam7kT1uBdfWPCYgnSJdfxq2eYtJfjHzbal2i6d9aB+2vwTuux90Mj6Bt6gTZQU9ZXwhy4jt2dQ/O1xP34jNIC3Il4zjnpdMc16/A2pOxyHX3cyXy7a6t+V0P+1pVRoJfPkEQZRQOTnkgleayyQ0XfIzvug3k3bmuKLblf+lJt/z1zLWmNabT1fqqKVXec1qbatSxamU0XU9NVzn0DOBIrYwdshX2xD87HFjgOa/ln0bAOprAAG2INpDjLfcUDhg8oerH+Uf5xivsmXqL7gesRTpnSYoKq1TllnHIs8qTOzjk6N+fqHJYNkri2jtXUKDgVJh0XuaK0OMfJpt4Pgr3gTst6TmUAE3WXoN/yphsdxc8FZ6gaX2U+8yQ/a16Ph/Q9Wn8yzCvDvW6UY/pcu1pCZ1POeHdouQpdpbl5xtSXGQg0luJt1XOTVHJb5p6iwZRlZG/7QfVe1tftXSf43YclX0gxUp/w+wrrcJYdSi02PipW6pUUbRm3eTG/+SHPieTZ8vTm9QLmr+bOS81Mm6s61uFZW73+gzeqg3363PsqncYSN5r2UEDS0vttf6bjz747meF4j05EnyVHtz4N13ZrMcWvQTNpmlYpvZhp62r311TkJMKUzqbkRgBMd/NctrN3oZmmnOzFZwae4QXZbplbsn2S4aeM0OwLNtvp9WxPxWsX5bZkCKDthrHWkEv88FRsNQi0YQLA1vLyxYhFxYsxTtLFRKhniynOth5Ko8a1mM5R6CIeW2ohIk3IsHkG4ylc3zNAuFTp5sqRqEjMTckMeobiW4/faoE5HJkr+TqWKk+aV/KaSo6ZJaPKnEIxayhF08wjZbmeJVIVH4Kc5daOSxHYpMiUnz+RTYkOuIhlUmtLWDNjkZqz5G1aErMlcReSVK7Y/wQLyYqX4iPVkFsrjnkoueBCRXKZVJ5io5TIKkpNz6yEQvRKloUlg+5m7pgITZlDNUbSZcbYXEnMjA3z5TLnITE6EpXM7Pce4a2aw7xZ7SkwkH2jW92Z9HIvRGj7ckODCKKgiT4DKQy9ZRQZUo264KIpjE1lUoIKyeNxlWmJYMa8JLCQ1lsusAxBXMSDNNIYSACFSZDg9LrN9trH6qlJVBnC4WIkSkbwOygn1H1nWixs+YaNePgEy5Ge885J0iNZL5uEWj/IM1ymTAPOqsnVxWs/NPQxwTdpBXuHFQqBLHuAQHfTJqvYPPOTN1dQCsqzZ3KphYr1hQuTgDjv6S0QXgYdPUMLlSpTYpNF9ovwUaSWE65+14/N2GJLLbPEdDPMNMt7A2br+SnmoBcrEZp0shGNlLrHncibW9rvpH38Aq23gQKRnANT0Ul6eOrEBZUq00dpIK5chUpBibNSo1adeg0aNWnWolXc9j/0Xbr16NWn34BBQ4bNMWKuUWPGTZg0Zdo88xsy6atvLbHQMsutUG6lCpWqVEeqUasueXwaNO1B2ULHZqdU4qITcmmdhgRt6ICD3LFxxEngzNVpZxxy2BFH7bLbiGNoWHQxValQq0adFTVpLt6bWrRWbphcba3UUbsOq6y2Jp5PPusjoU1Lq0RbuWG01jqd1ttgoy6bbLalBh7q3fPYfQ88aatttr9lza35emktNs+opnV0ra2N2ZGBNHE9B1KbnVWHXV3P2rCcHE+0snUB2Z0RPK13D21kV848m/7usPth/N7M6IEe0mEFfkxj5rVb10wYuX5TIuif5W0vzOqYFXMo3mZkVdnZb6dk/WOq2+N2UzvhRRY0rsbVNWhgmXCVtVa35lXPFBdQz7lO+3xnRujcz67nTX0b11vtPhvt6DyhKZvaHs3YzPYoUGDB9mjOWIzHUAaYfJP66LzhG/ae7DKbnzHxSUgiE+fCGobwzDoNbjSGoecjEy9x40aN6CgwAs/8Mh5bgYZM+utS72Nkq/9zTQk1Sb+ult10d34NMi/fwA+khq51K/Trb3GNYEbfQ7Zf9Iu31RYP6tmSzTI6E52nRYseHTq06NGjQaEijOH1EENJTEiMwRIxOBiGigGYlmHaWwyoydtCCSgJQIEBOAAEOAWmAACnyDtECSgJQIEBOAAEOAWmAKCuCw5ds5Cbq1anL3ZuJYmbTZnhsj7UxsOia+XtV/PZfF6anCs/R0qaDluaNmQx0hgM/fmYFfjWnYzv82Sycsx8WpMfr2pvAF6xDZhUbD2yfuXT85zVHS87oyryLuYSS1uzbPU352rPvwMrJ2L3Z5T2Let5/snvpChq31jqdVsbkJvJiEQjEpUD33f4ECC2bBh8zrmAouGSjuSx7VvDMn+r1RviYjwpvhr/yVbuo+oBAAA="});var Hf,Gf=xe(()=>{If();Df();Uf();Of();kf();Hf=`
@font-face {
  font-family: 'RP Calligraphy';
  src: url('${Lf}') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'RP Cormorant';
  src: url('${Nf}') format('woff2');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'RP Cormorant';
  src: url('${Ff}') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'RP Cormorant';
  src: url('${zf}') format('woff2');
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'RP Cormorant';
  src: url('${Bf}') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

.rp3d-host {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 620px;
  overflow: hidden;
  background: #171b17;
}

.rp3d-app {
  --rp-paper: #f1e8d9;
  --rp-paper-bright: #f8f2e7;
  --rp-ink: #292a23;
  --rp-muted: #726d5f;
  --rp-faint: rgba(42, 43, 35, 0.52);
  --rp-line: rgba(51, 50, 42, 0.16);
  --rp-orange: #bd5b3d;
  --rp-orange-deep: #9f442c;
  --rp-olive: #56614a;
  --rp-night: #171c18;
  --rp-glass-dark: rgba(24, 28, 23, 0.58);
  --rp-serif: "Songti SC", "STSong", "Noto Serif SC", "SimSun", serif;
  --rp-sans: "Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", "Helvetica Neue", Arial, sans-serif;
  --rp-latin: "RP Cormorant", "Iowan Old Style", Georgia, serif;
  position: absolute;
  inset: 0;
  overflow: hidden;
  isolation: isolate;
  color: var(--rp-paper);
  font-family: var(--rp-sans);
  font-size: 14px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  background: #101511;
}
.rp3d-app *,
.rp3d-app *::before,
.rp3d-app *::after {
  box-sizing: border-box;
}
.rp3d-app :where(button) {
  appearance: none;
  border: 0;
  margin: 0;
  padding: 0;
  font: inherit;
  color: inherit;
  background: none;
  cursor: pointer;
}
.rp3d-app button:focus-visible,
.rp3d-app a:focus-visible {
  outline: 1px solid var(--rp-orange);
  outline-offset: 3px;
}
.rp3d-app ::selection {
  color: var(--rp-paper-bright);
  background: var(--rp-orange);
}

.rp3d-viewport {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.rp3d-canvas {
  display: block;
  width: 100%;
  height: 100%;
  outline: none;
  cursor: grab;
  touch-action: none;
  filter: saturate(1.09) contrast(1.035);
}
.rp3d-canvas:active {
  cursor: grabbing;
}

/* Atmosphere overlays ------------------------------------------------ */
.rp3d-shade {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background:
    linear-gradient(180deg, rgba(12, 15, 12, 0.48) 0%, rgba(12, 15, 12, 0.12) 17%, rgba(12, 15, 12, 0) 32%),
    linear-gradient(0deg, rgba(11, 14, 11, 0.5) 0%, rgba(11, 14, 11, 0) 24%);
}
.rp3d-vignette {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  background: radial-gradient(130% 100% at 50% 45%, rgba(0, 0, 0, 0) 56%, rgba(6, 8, 6, 0.36) 100%);
}
.rp3d-grain {
  position: absolute;
  inset: -20%;
  z-index: 7;
  pointer-events: none;
  opacity: 0.055;
  mix-blend-mode: soft-light;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.84' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.6'/%3E%3C/svg%3E");
  background-size: 180px 180px;
  animation: rpGrain 12s steps(6) infinite;
}

/* Header ------------------------------------------------------------- */
.rp3d-top {
  position: absolute;
  z-index: 40;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  height: 82px;
  padding: 0 30px;
  pointer-events: none;
}
.rp3d-top > * {
  pointer-events: auto;
}
.rp3d-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 0 0 auto;
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.45);
}
.rp3d-brand-mark {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid rgba(244, 234, 218, 0.52);
  color: #f1e4d1;
  background: rgba(18, 22, 18, 0.2);
  backdrop-filter: blur(10px);
}
.rp3d-brand-mark svg {
  width: 18px;
  height: 18px;
}
.rp3d-brand-copy {
  display: grid;
  gap: 1px;
}
.rp3d-brand-cn {
  display: block;
  font-size: 15px;
  letter-spacing: 0.17em;
  font-weight: 500;
  color: #f7ecdb;
}
.rp3d-brand-en {
  display: block;
  font-family: var(--rp-latin);
  font-size: 8px;
  font-weight: 500;
  letter-spacing: 0.24em;
  color: rgba(245, 232, 211, 0.62);
  text-transform: uppercase;
}
.rp3d-nav {
  position: absolute;
  left: 50%;
  top: 25px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 27px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
}
.rp3d-nav button {
  position: relative;
  padding: 6px 0;
  font-size: 11.5px;
  letter-spacing: 0.12em;
  color: rgba(247, 236, 220, 0.68);
  transition: color 0.3s ease;
}
.rp3d-nav button::before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--rp-orange);
  transform: translateX(-50%) scale(0);
  transition: transform 0.25s ease;
}
.rp3d-nav button:hover {
  color: #fff4e1;
}
.rp3d-nav button.is-active {
  color: #fff7e9;
}
.rp3d-nav button.is-active::before {
  transform: translateX(-50%) scale(1);
}
.rp3d-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 0 0 auto;
}
.rp3d-icon-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  color: rgba(247, 237, 222, 0.78);
  border: 1px solid rgba(243, 231, 213, 0.2);
  background: rgba(22, 27, 22, 0.38);
  backdrop-filter: blur(13px) saturate(1.2);
  transition: color 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}
.rp3d-icon-btn:hover {
  color: #fff4e2;
  border-color: rgba(243, 231, 213, 0.46);
  background: rgba(22, 27, 22, 0.62);
}
.rp3d-icon-btn.is-active {
  color: #f6e6cc;
  border-color: rgba(204, 111, 76, 0.78);
  background: rgba(142, 68, 44, 0.38);
}
.rp3d-icon-btn svg {
  width: 15px;
  height: 15px;
}
.rp3d-icon-btn .rp3d-tooltip {
  position: absolute;
  top: calc(100% + 7px);
  left: 50%;
  transform: translate(-50%, -3px);
  padding: 5px 8px;
  border-radius: 2px;
  color: #f3e8d6;
  background: rgba(19, 23, 19, 0.88);
  border: 1px solid rgba(248, 238, 223, 0.12);
  font-size: 9.5px;
  line-height: 1;
  letter-spacing: 0.1em;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.rp3d-icon-btn:hover .rp3d-tooltip,
.rp3d-icon-btn:focus-visible .rp3d-tooltip {
  opacity: 1;
  transform: translate(-50%, 0);
}
.rp3d-time {
  display: flex;
  align-items: center;
  height: 34px;
  padding: 3px;
  border-radius: 20px;
  border: 1px solid rgba(243, 231, 213, 0.18);
  background: rgba(20, 25, 20, 0.42);
  backdrop-filter: blur(13px) saturate(1.2);
}
.rp3d-time button {
  height: 26px;
  padding: 0 11px;
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 14px;
  font-size: 10px;
  letter-spacing: 0.05em;
  color: rgba(245, 233, 215, 0.58);
  transition: color 0.16s ease;
}
.rp3d-time button svg {
  width: 11px;
  height: 11px;
  opacity: 0.75;
}
.rp3d-time button:hover {
  color: #fff2df;
}
.rp3d-time button.is-active {
  color: #2f2c23;
  background: #f1e6d4;
}
.rp3d-time button.is-active svg {
  opacity: 1;
}

/* Intro panel -------------------------------------------------------- */
.rp3d-hero {
  position: absolute;
  z-index: 20;
  left: 30px;
  top: 108px;
  width: 392px;
  padding: 28px 30px 22px;
  border: 1px solid rgba(255, 250, 240, 0.54);
  border-radius: 2px;
  background:
    linear-gradient(137deg, rgba(249, 243, 233, 0.985) 0%, rgba(241, 232, 218, 0.955) 63%, rgba(235, 222, 204, 0.93) 100%);
  color: var(--rp-ink);
  box-shadow:
    0 26px 65px rgba(8, 10, 8, 0.3),
    0 2px 0 rgba(255, 255, 255, 0.38) inset;
  backdrop-filter: blur(18px) saturate(1.12);
  overflow: hidden;
  transform-origin: top left;
}
.rp3d-hero::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 3px;
  height: 40px;
  background: var(--rp-orange);
}
.rp3d-hero::after {
  content: '';
  position: absolute;
  width: 180px;
  height: 180px;
  right: -104px;
  bottom: -104px;
  border-radius: 50%;
  border: 1px solid rgba(189, 91, 61, 0.16);
  box-shadow: 0 0 0 17px rgba(189, 91, 61, 0.035), 0 0 0 35px rgba(189, 91, 61, 0.025);
  pointer-events: none;
}
.rp3d-kicker {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 9px;
  line-height: 1;
  letter-spacing: 0.19em;
  color: var(--rp-muted);
  text-transform: uppercase;
}
.rp3d-kicker::before {
  content: '';
  display: block;
  width: 21px;
  height: 1px;
  background: var(--rp-orange);
}
.rp3d-title {
  margin: 19px 0 9px;
  font-family: 'RP Calligraphy', var(--rp-serif);
  font-size: clamp(44px, 4.02vw, 58px);
  line-height: 0.98;
  font-weight: 400;
  letter-spacing: 0;
  color: #2b2a21;
  white-space: nowrap;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
}
.rp3d-title .dot {
  display: inline-block;
  margin: 0 5px 0 2px;
  color: var(--rp-orange);
  transform: translateY(-4px);
}
.rp3d-title-en {
  display: flex;
  align-items: baseline;
  gap: 7px;
  font-family: var(--rp-latin);
  font-size: 19px;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: 0.19em;
  color: #454538;
  text-transform: uppercase;
}
.rp3d-title-en em {
  font-style: italic;
  font-weight: 400;
  color: var(--rp-orange-deep);
  letter-spacing: 0.13em;
}
.rp3d-sub {
  margin-top: 8px;
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--rp-muted);
}
.rp3d-sub-en {
  margin-top: 3px;
  font-family: var(--rp-latin);
  font-size: 8.5px;
  font-weight: 500;
  letter-spacing: 0.16em;
  color: #918878;
  text-transform: uppercase;
}
.rp3d-rule {
  height: 1px;
  margin: 18px 0 14px;
  background: linear-gradient(90deg, var(--rp-line), rgba(51, 50, 42, 0));
}
.rp3d-desc {
  margin: 0;
  max-width: 305px;
  color: #5d594c;
  font-size: 11.5px;
  line-height: 1.88;
  letter-spacing: 0.02em;
}
.rp3d-desc strong {
  color: #36372d;
  font-weight: 500;
}
.rp3d-hero-actions {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 19px;
}
.rp3d-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  height: 38px;
  padding: 0 16px;
  border-radius: 1px;
  font-size: 10.5px;
  letter-spacing: 0.09em;
  transition: all 0.28s ease;
}
.rp3d-btn svg {
  width: 13px;
  height: 13px;
}
.rp3d-btn-primary {
  color: #f8edda;
  background: #33352c;
}
.rp3d-btn-primary:hover {
  background: var(--rp-orange-deep);
  transform: translateY(-1px);
}
.rp3d-btn-ghost {
  color: #4b4b3f;
  border: 1px solid rgba(57, 56, 47, 0.22);
}
.rp3d-btn-ghost:hover {
  border-color: var(--rp-orange);
  color: var(--rp-orange-deep);
}
.rp3d-strategy-link {
  margin-left: auto;
  color: #7b7666;
  font-size: 9.5px;
  letter-spacing: 0.08em;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-color: rgba(123, 118, 102, 0.35);
  transition: color 0.25s ease;
}
.rp3d-strategy-link:hover {
  color: var(--rp-orange-deep);
}
.rp3d-metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  margin-top: 20px;
  padding-top: 14px;
  border-top: 1px solid var(--rp-line);
}
.rp3d-metric {
  display: grid;
  gap: 1px;
}
.rp3d-metric b {
  font-family: var(--rp-latin);
  font-size: 24px;
  line-height: 1;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #3b3d31;
}
.rp3d-metric span {
  font-size: 8.5px;
  letter-spacing: 0.08em;
  color: #8a8473;
}
.rp3d-hero-foot {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 14px;
  color: #9b9281;
  font-family: var(--rp-latin);
  font-size: 8px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.rp3d-hero-foot::before {
  content: '';
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--rp-orange);
}

/* Zone rail ---------------------------------------------------------- */
.rp3d-zone-rail {
  position: absolute;
  z-index: 20;
  right: 30px;
  top: 112px;
  width: 196px;
  padding: 17px 16px 13px;
  border: 1px solid rgba(245, 234, 217, 0.17);
  border-radius: 2px;
  color: #f5e9d8;
  background: rgba(24, 29, 23, 0.52);
  backdrop-filter: blur(15px) saturate(1.2);
  box-shadow: 0 16px 48px rgba(8, 10, 8, 0.18);
}
.rp3d-zone-rail-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2px 11px;
  border-bottom: 1px solid rgba(245, 234, 217, 0.12);
  font-family: var(--rp-latin);
  font-size: 8.5px;
  font-weight: 500;
  letter-spacing: 0.17em;
  color: rgba(245, 234, 217, 0.5);
  text-transform: uppercase;
}
.rp3d-zone-rail-head span:last-child {
  color: rgba(245, 234, 217, 0.32);
  letter-spacing: 0.08em;
}
.rp3d-zone-row {
  position: relative;
  display: grid;
  grid-template-columns: 26px 1fr 8px;
  align-items: center;
  gap: 4px;
  width: 100%;
  padding: 11px 2px;
  border-bottom: 1px solid rgba(245, 234, 217, 0.085);
  text-align: left;
  color: rgba(245, 234, 217, 0.64);
  transition: color 0.25s ease;
}
.rp3d-zone-row:last-child {
  border-bottom: 0;
}
.rp3d-zone-row .zn {
  font-family: var(--rp-latin);
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.04em;
  color: rgba(245, 234, 217, 0.38);
  transition: color 0.25s ease;
}
.rp3d-zone-row .zt {
  display: block;
  font-size: 11.5px;
  letter-spacing: 0.08em;
  line-height: 1.35;
}
.rp3d-zone-row .ze {
  display: block;
  margin-top: 2px;
  font-family: var(--rp-latin);
  font-size: 7.5px;
  font-weight: 500;
  letter-spacing: 0.13em;
  color: rgba(245, 234, 217, 0.3);
  text-transform: uppercase;
}
.rp3d-zone-row .zdot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  border: 1px solid rgba(245, 234, 217, 0.3);
  transition: all 0.25s ease;
}
.rp3d-zone-row:hover {
  color: #fff3e1;
}
.rp3d-zone-row.is-active {
  color: #fff7e8;
}
.rp3d-zone-row.is-active .zn {
  color: var(--rp-orange);
}
.rp3d-zone-row.is-active .zdot {
  border-color: var(--rp-orange);
  background: var(--rp-orange);
  box-shadow: 0 0 0 3px rgba(189, 91, 61, 0.14);
}
.rp3d-zone-row.is-active::before {
  content: '';
  position: absolute;
  left: -16px;
  top: 12px;
  bottom: 12px;
  width: 2px;
  background: var(--rp-orange);
}
.rp3d-zone-desc {
  grid-column: 2 / 4;
  display: none;
  margin-top: 5px;
  font-size: 9px;
  line-height: 1.7;
  color: rgba(245, 234, 217, 0.46);
  letter-spacing: 0.02em;
}
.rp3d-zone-row.is-active .rp3d-zone-desc {
  display: block;
}
.rp3d-zone-rail-foot {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 10px;
  padding-top: 11px;
  border-top: 1px solid rgba(245, 234, 217, 0.1);
  font-size: 8px;
  letter-spacing: 0.08em;
  color: rgba(245, 234, 217, 0.33);
}
.rp3d-zone-rail-foot svg {
  width: 11px;
  height: 11px;
  color: var(--rp-orange);
}

/* Bottom controls ---------------------------------------------------- */
.rp3d-bottom {
  position: absolute;
  z-index: 24;
  left: 30px;
  right: 30px;
  bottom: 24px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: end;
  gap: 26px;
  pointer-events: none;
}
.rp3d-bottom > * {
  pointer-events: auto;
}
.rp3d-hint {
  justify-self: start;
  display: flex;
  align-items: center;
  gap: 9px;
  padding-bottom: 4px;
  color: rgba(249, 238, 221, 0.58);
  font-size: 8.5px;
  letter-spacing: 0.09em;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
}
.rp3d-hint svg {
  width: 14px;
  height: 18px;
  opacity: 0.8;
}
.rp3d-hint .divider {
  opacity: 0.35;
}
.rp3d-hint b {
  color: rgba(249, 238, 221, 0.82);
  font-weight: 400;
}
.rp3d-scene-nav {
  position: relative;
  display: grid;
  grid-template-columns: 38px minmax(196px, 236px) 38px;
  align-items: center;
  gap: 2px;
  min-height: 58px;
  padding: 4px;
  border-radius: 2px;
  color: var(--rp-ink);
  background: rgba(244, 236, 223, 0.955);
  border: 1px solid rgba(255, 251, 244, 0.9);
  box-shadow: 0 18px 50px rgba(8, 10, 8, 0.28);
  backdrop-filter: blur(17px) saturate(1.12);
}
.rp3d-scene-arrow {
  width: 38px;
  height: 48px;
  display: grid;
  place-items: center;
  border-right: 1px solid rgba(53, 52, 43, 0.1);
  color: #6a6557;
  transition: color 0.22s ease, background 0.22s ease;
}
.rp3d-scene-arrow:last-of-type {
  border-right: 0;
  border-left: 1px solid rgba(53, 52, 43, 0.1);
}
.rp3d-scene-arrow:hover {
  color: var(--rp-orange-deep);
  background: rgba(255, 252, 245, 0.55);
}
.rp3d-scene-arrow svg {
  width: 16px;
  height: 16px;
}
.rp3d-scene-now {
  min-width: 0;
  padding: 8px 12px 7px;
  display: grid;
  grid-template-columns: 28px 1fr auto;
  align-items: center;
  gap: 8px;
  text-align: left;
}
.rp3d-scene-now .num {
  font-family: var(--rp-latin);
  font-size: 25px;
  line-height: 1;
  font-weight: 400;
  color: var(--rp-orange-deep);
}
.rp3d-scene-now .copy {
  display: grid;
  min-width: 0;
  gap: 1px;
}
.rp3d-scene-now .cn {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: #34362b;
  white-space: nowrap;
}
.rp3d-scene-now .en {
  font-family: var(--rp-latin);
  font-size: 8px;
  font-weight: 500;
  letter-spacing: 0.13em;
  color: #8d8574;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.rp3d-scene-nav .total {
  font-family: var(--rp-latin);
  font-size: 9px;
  letter-spacing: 0.06em;
  color: #a39a88;
  align-self: end;
  padding-bottom: 3px;
}
.rp3d-progress {
  position: absolute;
  left: 49px;
  right: 49px;
  bottom: 5px;
  display: flex;
  gap: 4px;
}
.rp3d-progress i {
  display: block;
  flex: 1;
  height: 1px;
  background: rgba(58, 56, 46, 0.14);
  transition: background 0.35s ease;
}
.rp3d-progress i.is-active {
  background: var(--rp-orange);
}
.rp3d-bottom-meta {
  justify-self: end;
  display: grid;
  justify-items: end;
  gap: 5px;
  padding-bottom: 3px;
  text-align: right;
  text-shadow: 0 1px 12px rgba(0, 0, 0, 0.55);
}
.rp3d-light-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--rp-latin);
  font-size: 8.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  color: rgba(249, 238, 221, 0.56);
  text-transform: uppercase;
}
.rp3d-light-label i {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #e3b47c;
  box-shadow: 0 0 7px rgba(227, 180, 124, 0.7);
}
.rp3d-coordinates {
  font-family: var(--rp-latin);
  font-size: 8px;
  letter-spacing: 0.16em;
  color: rgba(249, 238, 221, 0.33);
}

/* Hotspots ----------------------------------------------------------- */
.rp3d-hotspot-layer {
  position: absolute;
  inset: 0;
  z-index: 12;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.rp3d-app.no-hotspots .rp3d-hotspot-layer {
  opacity: 0;
  visibility: hidden;
}
.rp3d-hotspot {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 0;
  pointer-events: auto;
  color: #f8edda;
  transform-origin: 0 100%;
  opacity: 0;
  transition: opacity 0.35s ease;
  will-change: transform;
}
.rp3d-hotspot.is-visible {
  opacity: 1;
}
.rp3d-hotspot .pin {
  position: relative;
  width: 19px;
  height: 19px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  border-radius: 50%;
  border: 1px solid rgba(255, 249, 238, 0.72);
  background: rgba(35, 37, 29, 0.5);
  backdrop-filter: blur(6px);
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.24);
  transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
}
.rp3d-hotspot .pin::before {
  content: '';
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--rp-orange);
  box-shadow: 0 0 0 3px rgba(189, 91, 61, 0.15);
  animation: rpPulse 3s ease-out infinite;
}
.rp3d-hotspot .pin::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 100%;
  width: 1px;
  height: 12px;
  background: linear-gradient(rgba(255, 244, 228, 0.6), rgba(255, 244, 228, 0));
}
.rp3d-hotspot .copy {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 23px;
  padding: 0 9px 0 7px;
  border-radius: 1px;
  border: 1px solid rgba(255, 248, 235, 0.17);
  background: rgba(22, 26, 21, 0.6);
  backdrop-filter: blur(12px) saturate(1.2);
  white-space: nowrap;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.16);
  transition: background 0.25s ease, transform 0.25s ease;
}
.rp3d-hotspot .copy .num {
  font-family: var(--rp-latin);
  font-size: 11px;
  color: #edbb90;
}
.rp3d-hotspot .copy .name {
  font-size: 9px;
  letter-spacing: 0.08em;
  color: rgba(251, 241, 225, 0.9);
}
.rp3d-hotspot:hover .pin {
  background: rgba(189, 91, 61, 0.8);
  border-color: #f1d7be;
  transform: scale(1.08);
}
.rp3d-hotspot:hover .copy {
  background: rgba(30, 33, 26, 0.82);
  transform: translateY(-1px);
}
.rp3d-hotspot.is-active .pin {
  background: rgba(189, 91, 61, 0.8);
  border-color: #f6dec3;
}
.rp3d-hotspot.is-active .copy {
  border-color: rgba(233, 174, 137, 0.45);
  background: rgba(48, 39, 28, 0.77);
}
.rp3d-hotspot.flip .copy {
  order: -1;
}
.rp3d-hotspot.flip .pin::after {
  left: 50%;
}

/* Drawer ------------------------------------------------------------- */
.rp3d-drawer {
  position: absolute;
  z-index: 34;
  top: 94px;
  right: 30px;
  bottom: 98px;
  width: 408px;
  overflow: auto;
  padding: 27px 27px 24px;
  border: 1px solid rgba(255, 250, 241, 0.76);
  border-radius: 2px;
  color: var(--rp-ink);
  background:
    linear-gradient(150deg, rgba(249, 244, 236, 0.99), rgba(240, 231, 215, 0.985));
  box-shadow: 0 30px 80px rgba(7, 9, 7, 0.34);
  opacity: 0;
  visibility: hidden;
  scrollbar-width: thin;
  scrollbar-color: rgba(67, 65, 53, 0.25) transparent;
}
.rp3d-drawer::-webkit-scrollbar {
  width: 4px;
}
.rp3d-drawer::-webkit-scrollbar-thumb {
  background: rgba(67, 65, 53, 0.25);
}
.rp3d-drawer.is-open {
  opacity: 1;
  visibility: visible;
}
.rp3d-drawer-panel {
  display: none;
}
.rp3d-drawer-panel.is-visible {
  display: block;
}
.rp3d-drawer-close {
  position: absolute;
  top: 17px;
  right: 17px;
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: #777161;
  border: 1px solid rgba(65, 62, 51, 0.16);
  transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}
.rp3d-drawer-close:hover {
  color: var(--rp-orange-deep);
  border-color: rgba(189, 91, 61, 0.4);
  transform: rotate(90deg);
}
.rp3d-drawer-close svg {
  width: 13px;
  height: 13px;
}
.rp3d-drawer-kicker {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--rp-latin);
  font-size: 8.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  color: #918878;
  text-transform: uppercase;
}
.rp3d-drawer-kicker::before {
  content: '';
  width: 17px;
  height: 1px;
  background: var(--rp-orange);
}
.rp3d-drawer h2 {
  margin: 18px 0 7px;
  font-family: var(--rp-serif);
  font-size: 31px;
  line-height: 1.25;
  font-weight: 500;
  letter-spacing: 0.03em;
  color: #2f3027;
}
.rp3d-drawer-sub {
  margin: 0 0 19px;
  color: #7a7465;
  font-size: 10.5px;
  line-height: 1.8;
  letter-spacing: 0.02em;
}
.rp3d-drawer-divider {
  height: 1px;
  margin: 0 0 2px;
  background: var(--rp-line);
}
.rp3d-module-card {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 12px;
  width: 100%;
  padding: 15px 0;
  border-bottom: 1px solid var(--rp-line);
  text-align: left;
  color: var(--rp-ink);
  transition: background 0.25s ease, padding 0.25s ease;
}
.rp3d-module-card:hover {
  background: rgba(255, 252, 246, 0.55);
  padding-left: 8px;
  padding-right: 8px;
}
.rp3d-module-card:last-child {
  border-bottom: 0;
}
.rp3d-module-art {
  position: relative;
  height: 88px;
  border: 1px solid rgba(64, 62, 50, 0.13);
  background:
    linear-gradient(135deg, rgba(255, 252, 245, 0.6), rgba(238, 226, 207, 0.28)),
    repeating-linear-gradient(0deg, rgba(61, 59, 47, 0.035) 0 1px, transparent 1px 11px);
  overflow: hidden;
}
.rp3d-module-art::after {
  content: '';
  position: absolute;
  right: -18px;
  bottom: -31px;
  width: 70px;
  height: 70px;
  border: 1px solid rgba(189, 91, 61, 0.14);
  border-radius: 50%;
}
.rp3d-module-art svg {
  position: absolute;
  inset: 8px;
  width: calc(100% - 16px);
  height: calc(100% - 16px);
  color: var(--rp-orange);
  overflow: visible;
}
.rp3d-module-copy .module-number {
  display: flex;
  align-items: center;
  gap: 7px;
  font-family: var(--rp-latin);
  font-size: 9.5px;
  font-weight: 500;
  letter-spacing: 0.11em;
  color: var(--rp-orange-deep);
  text-transform: uppercase;
}
.rp3d-module-copy .module-number::after {
  content: '';
  flex: 1;
  height: 1px;
  background: rgba(189, 91, 61, 0.22);
}
.rp3d-module-copy h3 {
  margin: 5px 0 2px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.09em;
  color: #33352b;
}
.rp3d-module-copy p {
  margin: 0;
  color: #7a7465;
  font-size: 9.5px;
  line-height: 1.7;
}
.rp3d-module-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 7px;
}
.rp3d-module-tags span {
  padding: 2px 5px;
  border: 1px solid rgba(67, 65, 52, 0.14);
  border-radius: 1px;
  font-size: 8px;
  line-height: 1.45;
  letter-spacing: 0.02em;
  color: #77705f;
}
.rp3d-module-locate {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
  font-family: var(--rp-latin);
  font-size: 8px;
  font-weight: 500;
  letter-spacing: 0.12em;
  color: var(--rp-orange-deep);
  text-transform: uppercase;
}
.rp3d-module-locate svg {
  width: 9px;
  height: 9px;
}
.rp3d-drawer-note {
  display: flex;
  gap: 8px;
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px solid var(--rp-line);
  font-size: 8.5px;
  line-height: 1.7;
  color: #98907e;
}
.rp3d-drawer-note svg {
  flex: 0 0 auto;
  width: 13px;
  height: 13px;
  margin-top: 1px;
  color: var(--rp-orange);
}
.rp3d-strategy-item {
  display: grid;
  grid-template-columns: 30px 1fr;
  gap: 10px;
  padding: 16px 0;
  border-bottom: 1px solid var(--rp-line);
}
.rp3d-strategy-num {
  font-family: var(--rp-latin);
  font-size: 18px;
  line-height: 1;
  color: var(--rp-orange-deep);
}
.rp3d-strategy-item h3 {
  margin: 0 0 4px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: #34362c;
}
.rp3d-strategy-item p {
  margin: 0;
  font-size: 9.5px;
  line-height: 1.78;
  color: #7a7465;
}
.rp3d-palette {
  margin-top: 19px;
}
.rp3d-drawer-label {
  font-family: var(--rp-latin);
  font-size: 8.5px;
  font-weight: 500;
  letter-spacing: 0.17em;
  color: #8f8675;
  text-transform: uppercase;
}
.rp3d-swatches {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 6px;
  margin-top: 10px;
}
.rp3d-swatch {
  display: grid;
  gap: 5px;
  font-size: 8px;
  line-height: 1.3;
  color: #807866;
}
.rp3d-swatch i {
  display: block;
  height: 33px;
  border: 1px solid rgba(55, 52, 43, 0.08);
}
.rp3d-data-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 9px;
  margin-top: 19px;
}
.rp3d-data-cell {
  padding: 11px 12px;
  border: 1px solid var(--rp-line);
  background: rgba(255, 252, 245, 0.38);
}
.rp3d-data-cell b {
  display: block;
  font-family: var(--rp-latin);
  font-size: 22px;
  line-height: 1;
  font-weight: 500;
  color: #3c3e32;
}
.rp3d-data-cell span {
  display: block;
  margin-top: 4px;
  font-size: 8px;
  letter-spacing: 0.05em;
  color: #918877;
}

/* Toast / utility ---------------------------------------------------- */
.rp3d-toast {
  position: absolute;
  z-index: 50;
  left: 50%;
  bottom: 103px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 13px;
  border: 1px solid rgba(246, 235, 219, 0.18);
  border-radius: 2px;
  background: rgba(22, 26, 21, 0.86);
  color: #f4e5d1;
  font-size: 9px;
  letter-spacing: 0.05em;
  backdrop-filter: blur(12px);
  opacity: 0;
  transform: translate(-50%, 8px);
  pointer-events: none;
  transition: opacity 0.28s ease, transform 0.28s ease;
}
.rp3d-toast.is-visible {
  opacity: 1;
  transform: translate(-50%, 0);
}
.rp3d-toast i {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--rp-orange);
}
.rp3d-sr {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

/* Loading ------------------------------------------------------------ */
.rp3d-loader {
  position: absolute;
  z-index: 100;
  inset: 0;
  display: grid;
  place-items: center;
  color: #333329;
  background:
    radial-gradient(70% 90% at 50% 45%, rgba(251, 246, 236, 0.72) 0%, rgba(239, 230, 215, 0.92) 55%, rgba(232, 219, 200, 0.98) 100%),
    #eee4d3;
  overflow: hidden;
  transition: opacity 0.9s ease, visibility 0.9s;
}
.rp3d-loader::before,
.rp3d-loader::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.rp3d-loader::before {
  width: min(78vw, 900px);
  height: min(78vw, 900px);
  border: 1px solid rgba(167, 102, 67, 0.14);
  box-shadow:
    0 0 0 46px rgba(167, 102, 67, 0.035),
    0 0 0 96px rgba(167, 102, 67, 0.025),
    0 0 0 150px rgba(167, 102, 67, 0.018);
}
.rp3d-loader::after {
  width: 38vw;
  height: 38vw;
  right: -10vw;
  bottom: -15vw;
  background: rgba(182, 108, 72, 0.07);
}
.rp3d-loader.is-gone {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}
.rp3d-loader-inner {
  position: relative;
  z-index: 2;
  display: grid;
  justify-items: center;
  width: min(82vw, 430px);
  text-align: center;
}
.rp3d-loader-mark {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: var(--rp-orange, #b65a3c);
  border: 1px solid rgba(133, 91, 62, 0.26);
  margin-bottom: 24px;
}
.rp3d-loader-mark svg {
  width: 20px;
  height: 20px;
}
.rp3d-loader-title {
  font-family: 'RP Calligraphy', var(--rp-serif);
  font-size: 74px;
  line-height: 1;
  letter-spacing: 0.01em;
  color: #33332a;
}
.rp3d-loader-en {
  margin-top: 13px;
  font-family: var(--rp-latin);
  font-size: 13px;
  letter-spacing: 0.31em;
  color: #8a7c68;
  text-transform: uppercase;
}
.rp3d-loader-line {
  width: 190px;
  height: 1px;
  margin-top: 33px;
  background: rgba(100, 86, 68, 0.17);
  overflow: hidden;
}
.rp3d-loader-line::after {
  content: '';
  display: block;
  width: 38%;
  height: 100%;
  background: #b9623f;
  animation: rpLoad 1.7s ease-in-out infinite;
}
.rp3d-loader-status {
  margin-top: 13px;
  font-size: 9px;
  letter-spacing: 0.16em;
  color: #968b78;
}
.rp3d-loader.is-error .rp3d-loader-line {
  display: none;
}
.rp3d-loader.is-error .rp3d-loader-status {
  color: #a64831;
  max-width: 340px;
  line-height: 1.8;
  letter-spacing: 0.06em;
}

/* Reveal ------------------------------------------------------------- */
.rp3d-hero,
.rp3d-zone-rail,
.rp3d-bottom,
.rp3d-top {
  opacity: 0;
  transition: opacity 1s ease;
}
.rp3d-app.is-ready .rp3d-top {
  opacity: 1;
  transition-delay: 0.1s;
}
.rp3d-app.is-ready .rp3d-hero {
  opacity: 1;
  transition-delay: 0.22s;
}
.rp3d-app.is-ready .rp3d-zone-rail {
  opacity: 1;
  transition-delay: 0.38s;
}
.rp3d-app.is-ready .rp3d-bottom {
  opacity: 1;
  transition-delay: 0.48s;
}
.rp3d-app.is-drawer-open .rp3d-hero,
.rp3d-app.is-drawer-open .rp3d-zone-rail,
.rp3d-app.is-drawer-open .rp3d-bottom {
  opacity: 0.12;
  pointer-events: none;
}
.rp3d-app.is-drawer-open .rp3d-hotspot-layer {
  opacity: 0;
  pointer-events: none;
}
.rp3d-app.is-drawer-open .rp3d-drawer {
  pointer-events: auto;
}

/* Responsive --------------------------------------------------------- */
@media (max-width: 1280px) {
  .rp3d-hero {
    width: 350px;
    padding: 25px 25px 19px;
  }
  .rp3d-title {
    font-size: 54px;
  }
  .rp3d-nav {
    gap: 19px;
  }
  .rp3d-zone-rail {
    width: 178px;
    right: 24px;
  }
  .rp3d-top {
    padding: 0 24px;
  }
  .rp3d-bottom {
    left: 24px;
    right: 24px;
  }
  .rp3d-drawer {
    right: 24px;
  }
}
@media (max-width: 1080px) {
  .rp3d-nav {
    display: none;
  }
  .rp3d-hero {
    width: 330px;
  }
  .rp3d-title {
    font-size: 50px;
  }
  .rp3d-zone-rail {
    display: none;
  }
  .rp3d-bottom {
    grid-template-columns: 1fr auto;
  }
  .rp3d-bottom-meta {
    display: none;
  }
  .rp3d-hint {
    display: none;
  }
  .rp3d-scene-nav {
    grid-column: 1 / -1;
    justify-self: center;
  }
}
@media (max-width: 860px) {
  .rp3d-host {
    min-height: 560px;
  }
  .rp3d-top {
    height: 68px;
    padding: 0 17px;
  }
  .rp3d-brand-en {
    display: none;
  }
  .rp3d-brand-mark {
    width: 32px;
    height: 32px;
  }
  .rp3d-brand-cn {
    font-size: 13px;
  }
  .rp3d-actions {
    gap: 6px;
  }
  .rp3d-time button {
    padding: 0 8px;
    font-size: 9px;
  }
  .rp3d-hero {
    left: 17px;
    top: 84px;
    width: min(345px, calc(100% - 34px));
  }
  .rp3d-desc,
  .rp3d-rule {
    display: none;
  }
  .rp3d-title {
    font-size: 52px;
    margin-top: 17px;
  }
  .rp3d-title-en {
    font-size: 16px;
    letter-spacing: 0.14em;
  }
  .rp3d-sub {
    margin-top: 6px;
  }
  .rp3d-hero-actions {
    margin-top: 14px;
  }
  .rp3d-metrics {
    margin-top: 15px;
    padding-top: 11px;
  }
  .rp3d-metric b {
    font-size: 20px;
  }
  .rp3d-hero-foot {
    display: none;
  }
  .rp3d-bottom {
    left: 14px;
    right: 14px;
    bottom: 14px;
  }
  .rp3d-scene-nav {
    width: 100%;
    max-width: 420px;
    grid-template-columns: 42px 1fr 42px;
  }
  .rp3d-drawer {
    top: 74px;
    right: 0;
    bottom: 0;
    left: 0;
    width: auto;
    border-right: 0;
    border-bottom: 0;
    border-left: 0;
    padding: 24px 22px 30px;
  }
  .rp3d-drawer.is-open {
    opacity: 1;
  }
  .rp3d-hotspot .copy .name {
    display: none;
  }
  .rp3d-hotspot .copy {
    padding: 0 4px;
    height: 19px;
  }
  .rp3d-hotspot .copy .num {
    font-size: 9px;
  }
  .rp3d-hotspot .pin {
    width: 16px;
    height: 16px;
  }
}
@media (max-width: 560px) {
  .rp3d-actions .rp3d-icon-btn:first-child {
    display: none;
  }
  .rp3d-hero {
    top: 77px;
    padding: 20px 20px 17px;
  }
  .rp3d-title {
    font-size: clamp(40px, 8.6vw, 48px);
  }
  .rp3d-title-en {
    font-size: 14px;
  }
  .rp3d-kicker {
    font-size: 8px;
  }
  .rp3d-hero-actions {
    gap: 7px;
  }
  .rp3d-btn {
    height: 34px;
    padding: 0 12px;
    font-size: 9.5px;
  }
  .rp3d-metrics {
    gap: 3px;
  }
  .rp3d-metric b {
    font-size: 18px;
  }
  .rp3d-metric span {
    font-size: 7.5px;
  }
  .rp3d-time button {
    padding: 0 7px;
    gap: 0;
    font-size: 0;
  }
  .rp3d-time button svg {
    width: 13px;
    height: 13px;
  }
  .rp3d-loader-title {
    font-size: 58px;
  }
  .rp3d-loader-en {
    font-size: 10px;
  }
  .rp3d-scene-now {
    padding-left: 8px;
    padding-right: 8px;
  }
  .rp3d-scene-now .num {
    font-size: 22px;
  }
  .rp3d-scene-now .cn {
    font-size: 11px;
  }
  .rp3d-module-card {
    grid-template-columns: 82px 1fr;
  }
  .rp3d-module-art {
    height: 80px;
  }
  .rp3d-drawer h2 {
    font-size: 27px;
  }
  .rp3d-toast {
    bottom: 88px;
  }
}
@media (max-height: 740px) and (min-width: 861px) {
  .rp3d-hero {
    top: 94px;
    padding: 22px 25px 17px;
  }
  .rp3d-title {
    font-size: 58px;
    margin-top: 16px;
  }
  .rp3d-title-en {
    font-size: 16px;
  }
  .rp3d-desc {
    line-height: 1.7;
    font-size: 10.5px;
  }
  .rp3d-rule {
    margin: 13px 0 11px;
  }
  .rp3d-hero-actions {
    margin-top: 13px;
  }
  .rp3d-metrics {
    margin-top: 14px;
    padding-top: 10px;
  }
  .rp3d-hero-foot {
    display: none;
  }
  .rp3d-zone-rail {
    top: 95px;
    padding-top: 14px;
    padding-bottom: 9px;
  }
  .rp3d-zone-row {
    padding: 8px 2px;
  }
  .rp3d-zone-desc {
    display: none !important;
  }
  .rp3d-drawer {
    top: 82px;
    bottom: 82px;
  }
  .rp3d-drawer h2 {
    font-size: 27px;
    margin-top: 14px;
  }
}

@keyframes rpPulse {
  0%, 100% { box-shadow: 0 0 0 2px rgba(189, 91, 61, 0.12); }
  45% { box-shadow: 0 0 0 5px rgba(189, 91, 61, 0.03); }
}
@keyframes rpLoad {
  0% { transform: translateX(-110%); }
  55% { transform: translateX(175%); }
  100% { transform: translateX(175%); }
}
@keyframes rpGrain {
  0%, 100% { transform: translate(0, 0); }
  20% { transform: translate(-2%, 1.5%); }
  40% { transform: translate(1.3%, -1.2%); }
  60% { transform: translate(-1%, -2%); }
  80% { transform: translate(2%, 1%); }
}
@media (prefers-reduced-motion: reduce) {
  .rp3d-app *,
  .rp3d-app *::before,
  .rp3d-app *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Fullscreen --------------------------------------------------------- */
.rp3d-app:fullscreen {
  width: 100vw;
  height: 100vh;
}
.rp3d-app:fullscreen .rp3d-host {
  height: 100%;
}
`});function dy(){return Vf.map(i=>`
    <button class="rp3d-module-card" data-focus-module="${i.id}" type="button" aria-label="\u5B9A\u4F4D${i.name}">
      <span class="rp3d-module-art">${i.diagram}</span>
      <span class="rp3d-module-copy">
        <span class="module-number">${i.number} / ${i.en}</span>
        <h3>${i.name}</h3>
        <p>${i.desc}</p>
        <span class="rp3d-module-tags">${i.tags.map(t=>`<span>${t}</span>`).join("")}</span>
        <span class="rp3d-module-locate">${tn.target} \u5728\u573A\u666F\u4E2D\u67E5\u770B</span>
      </span>
    </button>
  `).join("")}function fy(){return[{id:"day",label:"\u767D\u663C",icon:tn.sun},{id:"dusk",label:"\u9EC4\u660F",icon:tn.dusk},{id:"night",label:"\u591C\u95F4",icon:tn.moon}].map(i=>`
    <button type="button" data-time="${i.id}" aria-label="\u5207\u6362\u81F3${i.label}" aria-pressed="${i.id==="dusk"}">
      ${i.icon}<span>${i.label}</span>
    </button>
  `).join("")}function py(){return be.hotspots.map(i=>`
    <button class="rp3d-zone-row" type="button" data-view="${i.id}" aria-label="\u524D\u5F80${Yi[i.id].name}">
      <span class="zn">${i.number}</span>
      <span>
        <span class="zt">${Yi[i.id].name}</span>
        <span class="ze">${Yi[i.id].en}</span>
        <span class="rp3d-zone-desc">${Yi[i.id].desc}</span>
      </span>
      <span class="zdot"></span>
    </button>
  `).join("")}function my(){return be.hotspots.map(i=>`
    <button class="rp3d-hotspot" type="button" data-view="${i.id}" aria-label="\u67E5\u770B${Yi[i.id].name}">
      <span class="pin"></span>
      <span class="copy"><span class="num">${i.number}</span><span class="name">${Yi[i.id].name}</span></span>
    </button>
  `).join("")}function gy(){return`
    <div class="rp3d-drawer-panel" data-panel-content="strategy">
      <div class="rp3d-drawer-kicker">DESIGN STRATEGY / \u8BBE\u8BA1\u7B56\u7565</div>
      <h2>\u8BA9\u5C4B\u9876\u91CD\u65B0\u53C2\u4E0E\u57CE\u5E02\u751F\u6D3B</h2>
      <p class="rp3d-drawer-sub">\u4EE5\u8F7B\u4ECB\u5165\u7684\u65B9\u5F0F\uFF0C\u628A\u88AB\u5FFD\u89C6\u7684\u7B2C\u4E94\u7ACB\u9762\u8F6C\u5316\u4E3A\u53EF\u505C\u7559\u3001\u53EF\u547C\u5438\u3001\u53EF\u5171\u4EAB\u7684\u516C\u5171\u7A7A\u95F4\u3002</p>
      <div class="rp3d-drawer-divider"></div>
      <div class="rp3d-strategy-item">
        <span class="rp3d-strategy-num">01</span>
        <div><h3>\u591A\u7EF4\u906E\u9633</h3><p>\u5F20\u62C9\u819C\u3001\u4E54\u6728\u4E0E\u683C\u6805\u5171\u540C\u8FC7\u6EE4\u76F4\u5C04\u5149\uFF0C\u5F62\u6210\u5C42\u6B21\u4E30\u5BCC\u7684\u9634\u5F71\uFF0C\u964D\u4F4E\u5C4B\u9762\u70ED\u8F90\u5C04\u5E76\u63D0\u5347\u505C\u7559\u8212\u9002\u5EA6\u3002</p></div>
      </div>
      <div class="rp3d-strategy-item">
        <span class="rp3d-strategy-num">02</span>
        <div><h3>\u81EA\u7136\u6E17\u900F</h3><p>\u6A21\u5757\u82B1\u7BB1\u4E0E\u4E0B\u51F9\u5F0F\u79CD\u690D\u5E26\u6536\u96C6\u5C4B\u9762\u96E8\u6C34\uFF0C\u9009\u7528\u672C\u5730\u8010\u65F1\u690D\u7269\uFF0C\u8BA9\u7EFF\u8272\u7CFB\u7EDF\u4EE5\u4F4E\u7EF4\u62A4\u65B9\u5F0F\u6301\u7EED\u751F\u957F\u3002</p></div>
      </div>
      <div class="rp3d-strategy-item">
        <span class="rp3d-strategy-num">03</span>
        <div><h3>\u4E92\u52A8\u5171\u4EAB</h3><p>\u5BB6\u5177\u53EF\u81EA\u7531\u7EC4\u5408\uFF0C\u9002\u914D\u72EC\u5904\u3001\u4EA4\u8C08\u3001\u4EB2\u5B50\u4E0E\u5BA0\u7269\u7B49\u573A\u666F\uFF1B\u8FDE\u7EED\u65E0\u969C\u788D\u52A8\u7EBF\u4FDD\u8BC1\u6240\u6709\u4F7F\u7528\u8005\u5E73\u7B49\u62B5\u8FBE\u3002</p></div>
      </div>
      <div class="rp3d-strategy-item">
        <span class="rp3d-strategy-num">04</span>
        <div><h3>\u53EF\u6301\u7EED\u8BBE\u8BA1</h3><p>\u518D\u751F\u6728\u3001\u4E0D\u9508\u94A2\u3001\u53EF\u66FF\u6362\u819C\u6750\u4E0E\u6807\u51C6\u5316\u8FDE\u63A5\u8282\u70B9\uFF0C\u51CF\u5C11\u73B0\u573A\u6E7F\u4F5C\u4E1A\uFF0C\u4E5F\u8BA9\u7A7A\u95F4\u80FD\u591F\u968F\u65F6\u95F4\u6301\u7EED\u66F4\u65B0\u3002</p></div>
      </div>
      <div class="rp3d-palette">
        <div class="rp3d-drawer-label">MATERIAL PALETTE / \u6750\u6599\u8272\u8C31</div>
        <div class="rp3d-swatches">
          <div class="rp3d-swatch"><i style="background:#9c6b49"></i>\u9632\u8150\u6728</div>
          <div class="rp3d-swatch"><i style="background:#a9aca7"></i>\u4E0D\u9508\u94A2</div>
          <div class="rp3d-swatch"><i style="background:#bf6041"></i>\u906E\u9633\u819C</div>
          <div class="rp3d-swatch"><i style="background:#5e6a4b"></i>\u8010\u65F1\u7EFF\u690D</div>
          <div class="rp3d-swatch"><i style="background:#b5ad9e"></i>\u77F3\u6750\u94FA\u88C5</div>
        </div>
      </div>
      <div class="rp3d-data-grid">
        <div class="rp3d-data-cell"><b>860\u33A1</b><span>\u5C4B\u9876\u7EFF\u5316\u4E0E\u516C\u5171\u7A7A\u95F4</span></div>
        <div class="rp3d-data-cell"><b>100%</b><span>\u65E0\u969C\u788D\u901A\u884C\u8986\u76D6\u7387</span></div>
        <div class="rp3d-data-cell"><b>32</b><span>\u6807\u51C6\u6A21\u5757\u5BB6\u5177\u5355\u5143</span></div>
        <div class="rp3d-data-cell"><b>42%</b><span>\u4E54\u704C\u6728\u906E\u836B\u8986\u76D6\u7387</span></div>
      </div>
      <div class="rp3d-drawer-note">${tn.infoCircle}<span>\u96E8\u6C34\u56DE\u6536\u3001\u592A\u9633\u80FD\u7167\u660E\u4E0E\u6A21\u5757\u5316\u6784\u4EF6\u88AB\u6574\u5408\u8FDB\u7EDF\u4E00\u7684\u5BB6\u5177\u5E95\u5EA7\uFF0C\u8BA9\u53EF\u6301\u7EED\u7B56\u7565\u6210\u4E3A\u53EF\u88AB\u770B\u89C1\u3001\u88AB\u4F7F\u7528\u7684\u65E5\u5E38\u7EC6\u8282\u3002</span></div>
    </div>`}function xy(){return`
    <div class="rp3d-drawer-panel" data-panel-content="modules">
      <div class="rp3d-drawer-kicker">MODULAR FURNITURE / \u5BB6\u5177\u6A21\u5757</div>
      <h2>\u50CF\u79EF\u6728\u4E00\u6837\u751F\u957F\u7684\u5C4B\u9876</h2>
      <p class="rp3d-drawer-sub">\u56DB\u79CD\u57FA\u7840\u5355\u5143\u5171\u4EAB\u540C\u4E00\u5957\u5E95\u5EA7\u3001\u7ACB\u67F1\u4E0E\u5F20\u62C9\u819C\u7CFB\u7EDF\uFF0C\u53EF\u72EC\u7ACB\u4F7F\u7528\uFF0C\u4E5F\u53EF\u62FC\u5408\u6210\u66F4\u5927\u5C3A\u5EA6\u7684\u516C\u5171\u5BA2\u5385\u3002</p>
      <div class="rp3d-drawer-divider"></div>
      ${dy()}
      <div class="rp3d-drawer-note">${tn.leaf}<span>\u6807\u51C6\u6784\u4EF6\u5728\u5DE5\u5382\u9884\u5236\uFF0C\u73B0\u573A\u4EC5\u9700\u8FDE\u63A5\u5E95\u5EA7\u4E0E\u7ACB\u67F1\u3002\u94FA\u88C5\u3001\u82B1\u7BB1\u3001\u706F\u5177\u5747\u53EF\u72EC\u7ACB\u66F4\u6362\uFF0C\u964D\u4F4E\u957F\u671F\u8FD0\u7EF4\u6210\u672C\u3002</span></div>
    </div>`}function Wf(i){let t=!1,e=null,n=!1,s=0,r="dusk",o=null,a=null,l=null,c=null,h=[],d=document.createElement("style");d.setAttribute("data-roofpark-style","1"),d.textContent=Hf,i.appendChild(d);let u=document.createElement("div");u.className="rp3d-app",u.setAttribute("data-time","dusk"),u.setAttribute("data-ready","false"),u.innerHTML=`
    <div class="rp3d-viewport"></div>
    <div class="rp3d-shade"></div>
    <div class="rp3d-vignette"></div>
    <div class="rp3d-grain"></div>

    <header class="rp3d-top">
      <button class="rp3d-brand" type="button" data-action="overview" aria-label="\u8FD4\u56DE\u5C4B\u9876\u5168\u666F">
        <span class="rp3d-brand-mark">${tn.leaf}</span>
        <span class="rp3d-brand-copy">
          <span class="rp3d-brand-cn">\u57CE\u5E02\xB7\u547C\u5438</span>
          <span class="rp3d-brand-en">Urban Respiration</span>
        </span>
      </button>

      <nav class="rp3d-nav" aria-label="\u573A\u666F\u5BFC\u822A">
        <button type="button" data-panel="none" class="is-active">\u7A7A\u95F4\u6F2B\u6E38</button>
        <button type="button" data-panel="modules">\u5BB6\u5177\u6A21\u5757</button>
        <button type="button" data-panel="strategy">\u8BBE\u8BA1\u7B56\u7565</button>
      </nav>

      <div class="rp3d-actions">
        <button class="rp3d-icon-btn is-active" type="button" data-action="hotspots" aria-label="\u663E\u793A\u6216\u9690\u85CF\u7A7A\u95F4\u8282\u70B9" aria-pressed="true" title="\u7A7A\u95F4\u8282\u70B9">
          ${tn.nodes}<span class="rp3d-tooltip">\u7A7A\u95F4\u8282\u70B9</span>
        </button>
        <div class="rp3d-time" role="group" aria-label="\u5149\u7167\u65F6\u6BB5">
          ${fy()}
        </div>
        <button class="rp3d-icon-btn" type="button" data-action="fullscreen" aria-label="\u8FDB\u5165\u5168\u5C4F" title="\u5168\u5C4F\u89C2\u770B">
          ${tn.fullscreen}<span class="rp3d-tooltip">\u5168\u5C4F\u89C2\u770B</span>
        </button>
      </div>
    </header>

    <section class="rp3d-hero" aria-labelledby="rp3d-title">
      <div class="rp3d-kicker">THE FIFTH FACADE / \u5C4B\u9876\u516C\u5171\u7A7A\u95F4</div>
      <h1 class="rp3d-title" id="rp3d-title">\u57CE\u5E02<span class="dot">\xB7</span>\u547C\u5438</h1>
      <div class="rp3d-title-en">Urban <em>Respiration</em></div>
      <div class="rp3d-sub">\u57CE\u5E02\u5C4B\u9876\u516C\u5171\u4F11\u61A9\u7A7A\u95F4\u8BBE\u8BA1</div>
      <div class="rp3d-sub-en">Rooftop Public Rest Space</div>
      <div class="rp3d-rule"></div>
      <p class="rp3d-desc">\u5728\u9AD8\u5BC6\u5EA6\u57CE\u5E02\u4E2D\uFF0C\u5C4B\u9876\u662F\u88AB\u5FFD\u89C6\u7684<strong>\u201C\u7B2C\u4E94\u7ACB\u9762\u201D</strong>\u3002\u4EE5\u8F7B\u76C8\u94A2\u6784\u3001\u900F\u5149\u819C\u6750\u4E0E\u6E29\u6DA6\u6728\u4F5C\uFF0C\u8425\u9020\u4E00\u5904\u53EF\u505C\u7559\u3001\u53EF\u793E\u4EA4\u3001\u53EF\u547C\u5438\u7684\u7A7A\u4E2D\u7EFF\u6D32\uFF0C\u8BA9\u5C4B\u9876\u6210\u4E3A\u57CE\u5E02\u751F\u6D3B\u7684\u5EF6\u4F38\u3002</p>
      <div class="rp3d-hero-actions">
        <button class="rp3d-btn rp3d-btn-primary" type="button" data-view="central" data-action="enter">\u5F00\u59CB\u6F2B\u6E38 ${tn.arrow}</button>
        <button class="rp3d-btn rp3d-btn-ghost" type="button" data-panel="modules">\u5BB6\u5177\u6A21\u5757</button>
        <button class="rp3d-strategy-link" type="button" data-panel="strategy">\u8BBE\u8BA1\u7B56\u7565 \u2197</button>
      </div>
      <div class="rp3d-metrics" aria-label="\u9879\u76EE\u6570\u636E">
        <div class="rp3d-metric"><b>38m</b><span>\u57CE\u5E02\u6807\u9AD8 / ALT.</span></div>
        <div class="rp3d-metric"><b>860\u33A1</b><span>\u5171\u4EAB\u7EFF\u5730 / GREEN</span></div>
        <div class="rp3d-metric"><b>100%</b><span>\u65E0\u969C\u788D / ACCESS</span></div>
      </div>
      <div class="rp3d-hero-foot">MODULAR SYSTEM \xB7 PET FRIENDLY \xB7 LOW CARBON</div>
    </section>

    <aside class="rp3d-zone-rail" aria-label="\u7A7A\u95F4\u8282\u70B9">
      <div class="rp3d-zone-rail-head"><span>SPATIAL CHAPTERS</span><span>01 \u2014 05</span></div>
      ${py()}
      <div class="rp3d-zone-rail-foot">${tn.paw}\u5BA0\u7269\u53CB\u597D\u52A8\u7EBF \xB7 \u5168\u9F84\u5171\u4EAB</div>
    </aside>

    <div class="rp3d-hotspot-layer" aria-label="\u573A\u666F\u70ED\u70B9">
      ${my()}
    </div>

    <aside class="rp3d-drawer" aria-label="\u516C\u56ED\u4FE1\u606F" aria-hidden="true">
      <button class="rp3d-drawer-close" type="button" data-action="close-drawer" aria-label="\u5173\u95ED\u4FE1\u606F\u9762\u677F">${tn.close}</button>
      ${xy()}
      ${gy()}
    </aside>

    <footer class="rp3d-bottom">
      <div class="rp3d-hint">${tn.mouse}<span><b>\u62D6\u52A8</b> \u65CB\u8F6C</span><span class="divider">/</span><span><b>\u6EDA\u8F6E</b> \u7F29\u653E</span><span class="divider">/</span><span><b>\u53CC\u51FB</b> \u805A\u7126</span></div>
      <div class="rp3d-scene-nav" aria-label="\u573A\u666F\u5207\u6362">
        <button class="rp3d-scene-arrow" type="button" data-action="prev" aria-label="\u4E0A\u4E00\u4E2A\u573A\u666F">${tn.arrowLeft}</button>
        <button class="rp3d-scene-now" type="button" data-action="overview" aria-label="\u56DE\u5230\u5C4B\u9876\u5168\u666F">
          <span class="num">00</span>
          <span class="copy"><span class="cn">\u5C4B\u9876\u5168\u666F</span><span class="en">ROOFTOP OVERVIEW</span></span>
          <span class="total">/ 05</span>
        </button>
        <button class="rp3d-scene-arrow" type="button" data-action="next" aria-label="\u4E0B\u4E00\u4E2A\u573A\u666F">${tn.arrowRight}</button>
        <div class="rp3d-progress" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
      </div>
      <div class="rp3d-bottom-meta">
        <div class="rp3d-light-label"><i></i><span>Golden Hour \xB7 18:42</span></div>
        <div class="rp3d-coordinates">ROOFTOP +38M \xB7 31\xB0N CITY CENTER</div>
      </div>
    </footer>

    <div class="rp3d-toast" role="status" aria-live="polite"><i></i><span></span></div>

    <div class="rp3d-loader">
      <div class="rp3d-loader-inner">
        <div class="rp3d-loader-mark">${tn.leaf}</div>
        <div class="rp3d-loader-title">\u57CE\u5E02\xB7\u547C\u5438</div>
        <div class="rp3d-loader-en">Urban Respiration</div>
        <div class="rp3d-loader-line"></div>
        <div class="rp3d-loader-status">\u6B63\u5728\u4E3A\u57CE\u5E02\u5C4B\u9876\u79CD\u4E0B\u4E00\u7247\u7EFF\u6D32</div>
      </div>
    </div>
  `,i.appendChild(u);let f=u,g=f.querySelector(".rp3d-viewport"),x=f.querySelector(".rp3d-drawer"),m=f.querySelector('[data-action="close-drawer"]'),p=[...f.querySelectorAll(".rp3d-nav button")],b=[...f.querySelectorAll(".rp3d-zone-row")],w=[...f.querySelectorAll("[data-time]")],v=[...f.querySelectorAll(".rp3d-hotspot")],S=f.querySelector(".rp3d-scene-now .num"),M=f.querySelector(".rp3d-scene-now .cn"),A=f.querySelector(".rp3d-scene-now .en"),_=[...f.querySelectorAll(".rp3d-progress i")],T=f.querySelector(".rp3d-hint"),P=f.querySelector(".rp3d-loader"),L=f.querySelector(".rp3d-toast"),F=L.querySelector("span"),O=f.querySelector(".rp3d-light-label span"),D=f.querySelector('[data-action="fullscreen"]'),B={day:"Clear Day \xB7 16:20",dusk:"Golden Hour \xB7 18:42",night:"Blue Hour \xB7 21:10"};function Y(){n=!0,u.setAttribute("data-ready","true"),u.classList.add("is-ready"),P.classList.add("is-gone")}function W(k){F&&(F.textContent=k,L.classList.add("is-visible"),l&&clearTimeout(l),l=setTimeout(()=>L.classList.remove("is-visible"),2600))}function nt(k){s=(k%vi.length+vi.length)%vi.length;let K=vi[s];S&&(S.textContent=K.number),M&&(M.textContent=K.name),A&&(A.textContent=K.en),b.forEach(ot=>{let Q=ot.dataset.view===K.id;ot.classList.toggle("is-active",Q),Q?ot.setAttribute("aria-current","true"):ot.removeAttribute("aria-current")}),v.forEach(ot=>{ot.classList.toggle("is-active",ot.dataset.view===K.id)}),_.forEach((ot,Q)=>{ot.classList.toggle("is-active",Q===s-1)})}function X(k,{pulse:K=!0,toast:ot=null}={}){let Q=vi.findIndex(Ut=>Ut.id===k);if(Q<0||(nt(Q),!e))return;let Lt=window.innerWidth<=700&&window.innerHeight>window.innerWidth&&k==="overview"&&be.cameras.mobileOverview,Dt=Lt?be.cameras.mobileOverview:be.cameras[k]||be.cameras.overview;if(e.flyTo(Dt.pos,Dt.target,Dt.fov,1.55,!Lt),K&&k!=="overview"){let Ut=be.hotspots.find(Yt=>Yt.id===k);Ut&&e.pulseAt(Ut.anchor[0],Ut.anchor[2])}ot&&W(ot)}function it(k){X(vi[(s+k+vi.length)%vi.length].id)}function lt(k){r=k,u.setAttribute("data-time",k),w.forEach(K=>{let ot=K.dataset.time===k;K.classList.toggle("is-active",ot),K.setAttribute("aria-pressed",String(ot))}),O&&(O.textContent=B[k])}function Mt(k){if(!k||k===r)return;lt(k),e&&e.setTime(k),W({day:"\u767D\u663C\u6A21\u5F0F \xB7 \u5EFA\u7B51\u4E0E\u7EFF\u690D\u5448\u73B0\u81EA\u7136\u8272\u5F69",dusk:"\u9EC4\u660F\u6A21\u5F0F \xB7 \u6355\u6349\u4E00\u5929\u4E2D\u6700\u67D4\u548C\u7684\u5149",night:"\u591C\u95F4\u6A21\u5F0F \xB7 \u89C2\u5BDF\u8DEF\u5F84\u7167\u660E\u4E0E\u57CE\u5E02\u706F\u706B"}[k])}function yt(k,K){if(!k||k==="none"){st();return}if(o===k){st();return}o=k,a=K||document.activeElement,e?.setPaused(!0),u.classList.add("is-drawer-open"),x.classList.add("is-open"),x.setAttribute("aria-hidden","false"),x.scrollTop=0,f.querySelectorAll("[data-panel-content]").forEach(Q=>{Q.classList.toggle("is-visible",Q.dataset.panelContent===k)}),p.forEach(Q=>{Q.classList.toggle("is-active",Q.dataset.panel===k)});let ot=m;ot&&setTimeout(()=>ot.focus({preventScroll:!0}),320)}function st(){if(!o)return;o=null,e?.setPaused(!1),u.classList.remove("is-drawer-open"),x.classList.remove("is-open"),x.setAttribute("aria-hidden","true"),f.querySelectorAll("[data-panel-content]").forEach(K=>K.classList.remove("is-visible")),p.forEach(K=>K.classList.toggle("is-active",K.dataset.panel==="none"));let k=a;a=null,k&&typeof k.focus=="function"&&setTimeout(()=>k.focus({preventScroll:!0}),60)}function mt(k){let K=f.querySelector('[data-action="hotspots"]');if(!K)return;let ot=typeof k=="boolean"?k:!K.classList.contains("is-active");K.classList.toggle("is-active",ot),K.setAttribute("aria-pressed",String(ot)),K.setAttribute("aria-label",ot?"\u9690\u85CF\u7A7A\u95F4\u8282\u70B9":"\u663E\u793A\u7A7A\u95F4\u8282\u70B9"),f.classList.toggle("no-hotspots",!ot)}function bt(k){let K=Vf.find(dt=>dt.id===k);if(!K||(st(),!e))return;e.flyTo(K.camera.pos,K.camera.target,K.camera.fov,1.55);let ot=K.point;setTimeout(()=>e.pulseAt(ot[0],ot[1]),100);let Q=vi.findIndex(dt=>k==="solo"||k==="social"?dt.id==="central":k==="view"?dt.id==="terrace":dt.id==="grove");Q>=0&&nt(Q),W(`\u5DF2\u5B9A\u4F4D \xB7 ${K.number} ${K.name}`)}function G(){let k=f;document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().catch(()=>{}):k.requestFullscreen?k.requestFullscreen().catch(()=>W("\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u8FDB\u5165\u5168\u5C4F")):W("\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u8FDB\u5165\u5168\u5C4F")}function j(){let k=document.fullscreenElement===f;D&&(D.innerHTML=`${k?tn.compress:tn.fullscreen}<span class="rp3d-tooltip">${k?"\u9000\u51FA\u5168\u5C4F":"\u5168\u5C4F\u89C2\u770B"}</span>`,D.setAttribute("aria-label",k?"\u9000\u51FA\u5168\u5C4F":"\u8FDB\u5165\u5168\u5C4F"))}function xt(k){if(!(k.target&&/^(INPUT|TEXTAREA|SELECT)$/.test(k.target.tagName))){if(k.key==="Escape"){o&&(k.preventDefault(),st());return}if(k.key==="ArrowRight")k.preventDefault(),it(1);else if(k.key==="ArrowLeft")k.preventDefault(),it(-1);else if(k.key==="0")X("overview");else if(/^[1-5]$/.test(k.key)){let K=be.hotspots[Number(k.key)-1];K&&X(K.id)}else if(k.key.toLowerCase()==="t"){let K=["dusk","night","day"];Mt(K[(K.indexOf(r)+1)%K.length])}}}function Bt(k){let K=k.target instanceof Element?k.target:null;if(!K)return;let ot=K.closest("[data-view]");if(ot){X(ot.dataset.view);return}let Q=K.closest("[data-panel]");if(Q){let Yt=Q.dataset.panel;Yt==="none"?st():yt(Yt,Q);return}let dt=K.closest("[data-time]");if(dt){Mt(dt.dataset.time);return}let Lt=K.closest("[data-focus-module]");if(Lt){bt(Lt.dataset.focusModule);return}let Dt=K.closest("[data-action]");if(!Dt)return;let Ut=Dt.dataset.action;Ut==="overview"?X("overview"):Ut==="enter"?X("central",{toast:"\u5DF2\u8FDB\u5165 \xB7 \u4E2D\u592E\u5BA2\u5385"}):Ut==="prev"?it(-1):Ut==="next"?it(1):Ut==="hotspots"?mt():Ut==="fullscreen"?G():Ut==="close-drawer"&&st()}f.addEventListener("click",Bt),document.addEventListener("keydown",xt),document.addEventListener("fullscreenchange",j);let St=k=>{if(!(!e||!n)&&k.target.closest(".rp3d-app")&&!k.target.closest("button, a, .rp3d-drawer, .rp3d-hero")){let K=g.getBoundingClientRect();(k.clientX-K.left)/K.width<.46&&X("central")}};f.addEventListener("dblclick",St);function Vt(){if(!e||!n)return;let k=e.projectAnchors(),K=g.clientWidth||1;k.forEach(ot=>{let Q=v.find(Lt=>Lt.dataset.view===ot.id);if(!Q)return;let dt=ot.visible;if(Q.classList.toggle("is-visible",dt),Q.classList.toggle("flip",dt&&ot.x>K*.62),Q.setAttribute("aria-hidden",String(!dt)),dt){let Lt=Math.max(14,Math.min(K-14,ot.x)),Dt=Math.max(80,Math.min((g.clientHeight||1)-100,ot.y));Q.style.transform=`translate3d(${Lt}px, ${Dt}px, 0) translate(-50%, -100%)`}})}async function le(){try{if(await Promise.race([document.fonts?.ready||Promise.resolve(),new Promise(k=>setTimeout(k,900))]),await new Promise(k=>setTimeout(k,900)),t)return;e=new Gl(g,{onFrame:Vt}),e.setTime(r,{immediate:!0}),nt(0),Vt(),c=null,h.push(setTimeout(()=>{t||(n=!0,Y())},550))}catch(k){console.error("[roofpark] Failed to initialise 3D scene:",k?.stack||k),P.classList.add("is-error");let K=P.querySelector(".rp3d-loader-status");K&&(K.textContent="\u4E09\u7EF4\u573A\u666F\u672A\u80FD\u52A0\u8F7D\u3002\u8BF7\u786E\u8BA4\u6D4F\u89C8\u5668\u5DF2\u542F\u7528 WebGL\uFF0C\u7136\u540E\u5237\u65B0\u9875\u9762\u91CD\u8BD5\u3002")}}return le(),{root:u,getWorld(){return e},destroy(){t=!0,c&&clearTimeout(c),h.forEach(k=>clearTimeout(k)),l&&clearTimeout(l),f.removeEventListener("click",Bt),f.removeEventListener("dblclick",St),document.removeEventListener("keydown",xt),document.removeEventListener("fullscreenchange",j),e&&e.dispose(),e=null,i.innerHTML=""}}}var Yi,vi,Vf,tn,Xf=xe(()=>{Pf();Rh();Gf();Yi={overview:{name:"\u5C4B\u9876\u5168\u666F",en:"ROOFTOP OVERVIEW",desc:"\u4FEF\u77B0\u6574\u5EA7\u5C4B\u9876\u82B1\u56ED\uFF0C\u67E5\u770B\u5F20\u62C9\u819C\u3001\u6A21\u5757\u5BB6\u5177\u4E0E\u57CE\u5E02\u5929\u9645\u7EBF\u4E4B\u95F4\u7684\u5173\u7CFB\u3002"},central:{name:"\u4E2D\u592E\u5BA2\u5385",en:"CENTRAL COMMONS",desc:"\u5F20\u62C9\u819C\u4E0B\u7684\u5171\u4EAB\u805A\u573A\u3002\u53EF\u79FB\u52A8\u5750\u51F3\u4E0E\u4F4E\u77EE\u82B1\u7BB1\u56F4\u5408\u51FA\u8F7B\u76C8\u7684\u4F1A\u5BA2\u5385\uFF0C\u9002\u5408\u4EA4\u8C08\u3001\u9605\u8BFB\u4E0E\u77ED\u6682\u505C\u7559\u3002"},grove:{name:"\u6797\u4E0B\u9759\u601D",en:"GROVE REFUGE",desc:"\u4E54\u6728\u4E0E\u534A\u900F\u660E\u819C\u6750\u5171\u540C\u8FC7\u6EE4\u5929\u5149\uFF0C\u4E3A\u72EC\u5904\u4E0E\u4F4E\u58F0\u4EA4\u8C08\u7559\u51FA\u4E00\u7247\u67D4\u8F6F\u8FB9\u754C\u3002"},terrace:{name:"\u5929\u9645\u89C2\u666F",en:"SKYLINE TERRACE",desc:"\u9762\u5411\u57CE\u5E02\u5929\u9645\u7EBF\u7684\u8FDE\u7EED\u5EA7\u5E2D\uFF0C\u73BB\u7483\u680F\u677F\u4FDD\u6301\u89C6\u7EBF\u901A\u900F\uFF0C\u628A\u6574\u5EA7\u57CE\u5E02\u7EB3\u5165\u516C\u56ED\u80CC\u666F\u3002"},lawn:{name:"\u5BA0\u7269\u8349\u576A",en:"PET LAWN",desc:"\u5F00\u9614\u8349\u576A\u4E0E\u5BA0\u7269\u996E\u6C34\u70B9\u76F8\u8FDE\uFF0C\u513F\u7AE5\u3001\u8001\u4EBA\u4E0E\u5BA0\u7269\u5171\u4EAB\u540C\u4E00\u7247\u67D4\u8F6F\u5730\u8868\u3002"},nightwalk:{name:"\u591C\u5149\u6B65\u9053",en:"NIGHT WALK",desc:"\u5D4C\u5165\u94FA\u88C5\u7684\u706F\u5E26\u6CBF\u65E0\u969C\u788D\u52A8\u7EBF\u5EF6\u4F38\uFF0C\u5165\u591C\u540E\u4EE5\u4F4E\u7167\u5EA6\u6696\u5149\u52FE\u52D2\u8DEF\u5F84\u3002"}},vi=[{id:"overview",number:"00",...Yi.overview},...be.hotspots.map(i=>({id:i.id,number:i.number,...Yi[i.id]}))],Vf=[{id:"solo",number:"01",name:"\u72EC\u7ACB\u4F11\u61A9",en:"SOLO REST",desc:"\u4E00\u6BB5\u836B\u51C9\uFF0C\u4E00\u628A\u5EA7\u51F3\u3002\u4E3A\u4E00\u4E2A\u4EBA\u4FDD\u7559\u7684\u57CE\u5E02\u5EA7\u4F4D\u3002",tags:["\u5F20\u62C9\u906E\u9633\u819C","\u6A21\u5757\u82B1\u7BB1","\u6728\u8D28\u5750\u51F3","\u5FEB\u901F\u5E95\u5EA7"],camera:{pos:[.6,2.8,10.2],target:[-2.5,1,5.3],fov:43},point:[-2.55,5.35],diagram:`
      <svg viewBox="0 0 120 86" fill="none" aria-hidden="true">
        <path d="M16 48 L54 11 L103 34 L63 56 Z" fill="rgba(191,95,60,.12)" stroke="currentColor" stroke-width="1.1"/>
        <path d="M54 11 L54 60 M55 20 C45 34 35 42 21 47 M54 28 C70 36 85 39 102 36" stroke="currentColor" stroke-width=".65" opacity=".65"/>
        <path d="M18 63 L99 63" stroke="currentColor" stroke-width=".7" opacity=".4"/>
        <rect x="37" y="56" width="32" height="8" rx=".8" fill="rgba(191,95,60,.08)" stroke="currentColor" stroke-width="1"/>
        <path d="M40 64 L40 73 M66 64 L66 73" stroke="currentColor" stroke-width=".8"/>
        <rect x="76" y="52" width="12" height="12" fill="rgba(94,112,75,.12)" stroke="currentColor" stroke-width=".8"/>
        <path d="M78 56 C80 51 84 51 86 56 C84 59 80 59 78 56Z" fill="currentColor" opacity=".45"/>
        <path d="M90 43 L90 63" stroke="currentColor" stroke-width=".65" opacity=".45"/>
        <circle cx="90" cy="40" r="1.8" fill="currentColor" opacity=".6"/>
        <path d="M22 77 L96 77" stroke="currentColor" stroke-width=".4" stroke-dasharray="2 3" opacity=".3"/>
      </svg>`},{id:"social",number:"02",name:"\u793E\u4EA4\u5355\u5143",en:"SOCIAL UNIT",desc:"\u7EC4\u5408\u5750\u51F3\u4E0E\u4E00\u5F20\u5C0F\u684C\uFF0C\u56F4\u5408\u51FA\u8F7B\u91CF\u7684\u6237\u5916\u4F1A\u5BA2\u5385\u3002",tags:["\u7EC4\u5408\u5750\u51F3","\u6A21\u5757\u5C0F\u684C","\u5BA0\u7269\u996E\u6C34","\u5171\u4EAB\u906E\u9633"],camera:{pos:[8.8,3.2,8.6],target:[3.8,1,4.4],fov:43},point:[3.85,4.38],diagram:`
      <svg viewBox="0 0 120 86" fill="none" aria-hidden="true">
        <path d="M10 43 L50 9 L111 31 L69 53 Z" fill="rgba(191,95,60,.12)" stroke="currentColor" stroke-width="1.1"/>
        <path d="M50 9 L50 57 M50 19 C36 28 24 35 13 40 M50 26 C70 31 89 34 109 32" stroke="currentColor" stroke-width=".65" opacity=".6"/>
        <rect x="28" y="58" width="25" height="7" rx=".8" fill="rgba(191,95,60,.08)" stroke="currentColor" stroke-width=".9"/>
        <rect x="73" y="56" width="24" height="7" rx=".8" fill="rgba(191,95,60,.08)" stroke="currentColor" stroke-width=".9"/>
        <path d="M31 65 L31 73 M50 65 L50 73 M76 63 L76 73 M94 63 L94 73" stroke="currentColor" stroke-width=".8"/>
        <ellipse cx="62" cy="62" rx="8" ry="3.2" fill="rgba(191,95,60,.08)" stroke="currentColor" stroke-width=".8"/>
        <path d="M62 65 L62 73 M57 73 L67 73" stroke="currentColor" stroke-width=".7"/>
        <circle cx="91" cy="62" r="4" stroke="currentColor" stroke-width=".7"/>
        <circle cx="91" cy="61" r="2" fill="currentColor" opacity=".35"/>
        <path d="M16 78 L105 78" stroke="currentColor" stroke-width=".4" stroke-dasharray="2 3" opacity=".3"/>
      </svg>`},{id:"view",number:"03",name:"\u89C2\u666F\u5355\u5143",en:"VIEW UNIT",desc:"\u671D\u5411\u5929\u9645\u7EBF\u7684\u957F\u51F3\u4E0E\u8EBA\u6905\uFF0C\u628A\u57CE\u5E02\u53D8\u6210\u65E5\u5E38\u80CC\u666F\u3002",tags:["\u89C2\u666F\u5750\u51F3","\u5D4C\u5165\u5F0F\u6276\u624B","\u4F4E\u77EE\u82B1\u7BB1","\u591C\u95F4\u7167\u660E"],camera:{pos:[8.2,2.35,1.1],target:[13.2,1.05,-10],fov:45},point:[12.9,-10.45],diagram:`
      <svg viewBox="0 0 120 86" fill="none" aria-hidden="true">
        <path d="M13 39 L55 10 L105 26 L70 44 Z" fill="rgba(191,95,60,.12)" stroke="currentColor" stroke-width="1.1"/>
        <path d="M55 10 L55 48 M55 17 C45 24 32 29 19 33 M55 23 C73 26 87 26 104 25" stroke="currentColor" stroke-width=".65" opacity=".6"/>
        <path d="M29 47 L29 64 M29 56 L64 56 M64 56 L69 70 M64 56 L59 70" stroke="currentColor" stroke-width="1"/>
        <path d="M39 51 L55 51 M39 56 L55 56" stroke="currentColor" stroke-width=".7" opacity=".8"/>
        <path d="M87 72 L87 83 M89 72 L89 83" stroke="currentColor" stroke-width=".5" opacity=".3"/>
        <path d="M77 73 L77 81 M82 70 L82 83 M100 73 L100 82 M105 75 L105 80" stroke="currentColor" stroke-width=".9" opacity=".5"/>
        <path d="M71 77 L109 77" stroke="currentColor" stroke-width=".6" opacity=".5"/>
        <path d="M20 77 L105 77" stroke="currentColor" stroke-width=".4" stroke-dasharray="2 3" opacity=".3"/>
        <circle cx="33" cy="40" r="1.5" fill="currentColor" opacity=".7"/>
      </svg>`},{id:"cluster",number:"04",name:"\u590D\u5408\u5171\u4EAB",en:"CLUSTER",desc:"\u591A\u4E2A\u6A21\u5757\u62FC\u5408\u6210\u5171\u4EAB\u5E73\u53F0\uFF0C\u517C\u987E\u505C\u7559\u3001\u4EA4\u6D41\u4E0E\u65E0\u969C\u788D\u901A\u884C\u3002",tags:["\u591A\u529F\u80FD\u5E73\u53F0","\u7EC4\u5408\u5BB6\u5177","\u8F6E\u6905\u56DE\u8F6C","\u96E8\u6C34\u82B1\u7BB1"],camera:{pos:[-8.5,3.2,-2.6],target:[-13,.85,-4.7],fov:44},point:[-13.35,-4.35],diagram:`
      <svg viewBox="0 0 120 86" fill="none" aria-hidden="true">
        <path d="M5 45 L38 20 L72 32 L101 19 L115 42 L72 56 L40 48 Z" fill="rgba(191,95,60,.1)" stroke="currentColor" stroke-width="1.1"/>
        <path d="M38 20 L38 59 M101 19 L101 52 M38 28 C50 34 58 39 71 42 M101 26 C88 31 80 37 69 44" stroke="currentColor" stroke-width=".6" opacity=".6"/>
        <rect x="23" y="58" width="24" height="6" rx=".8" stroke="currentColor" stroke-width=".8"/>
        <rect x="56" y="59" width="22" height="6" rx=".8" stroke="currentColor" stroke-width=".8"/>
        <rect x="86" y="50" width="21" height="6" rx=".8" stroke="currentColor" stroke-width=".8"/>
        <path d="M27 64 L27 72 M43 64 L43 72 M60 65 L60 73 M74 65 L74 73 M90 56 L90 72 M103 56 L103 72" stroke="currentColor" stroke-width=".8"/>
        <circle cx="64" cy="53" r="3.8" fill="rgba(191,95,60,.06)" stroke="currentColor" stroke-width=".7"/>
        <path d="M60 53 L68 53 M64 49 L64 57" stroke="currentColor" stroke-width=".6"/>
        <path d="M11 80 L108 80" stroke="currentColor" stroke-width=".4" stroke-dasharray="2 3" opacity=".3"/>
      </svg>`}],tn={arrow:'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8h11M9 3l5 5-5 5" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"/></svg>',arrowLeft:'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M10 2 4 8l6 6" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"/></svg>',arrowRight:'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 2l6 6-6 6" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"/></svg>',arrowUp:'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 10l5-5 5 5" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"/></svg>',close:'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 3l10 10M13 3 3 13" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/></svg>',sun:'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="3" stroke="currentColor" stroke-width="1.1"/><path d="M8 1.2v1.5M8 13.3v1.5M1.2 8h1.5M13.3 8h1.5M3.2 3.2l1.1 1.1M11.7 11.7l1.1 1.1M12.8 3.2l-1.1 1.1M4.3 11.7l-1.1 1.1" stroke="currentColor" stroke-width="1.05" stroke-linecap="round"/></svg>',dusk:'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2.5 11.5h11M4.4 8.7a3.6 3.6 0 0 1 7.2 0M8 2.5v1.6M2.6 5.4 3.8 6.6M13.4 5.4l-1.2 1.2" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/></svg>',moon:'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M12.9 9.8A5.6 5.6 0 0 1 6.2 3a5.7 5.7 0 1 0 6.7 6.8Z" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round"/></svg>',nodes:'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="3" cy="8" r="1.5" stroke="currentColor" stroke-width="1"/><circle cx="12.8" cy="3.4" r="1.5" stroke="currentColor" stroke-width="1"/><circle cx="12.8" cy="12.6" r="1.5" stroke="currentColor" stroke-width="1"/><path d="M4.4 7.4 11.4 4M4.4 8.6l7 3.5" stroke="currentColor" stroke-width="1" stroke-linecap="round"/></svg>',fullscreen:'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2.5 6V2.5H6M10 2.5h3.5V6M13.5 10v3.5H10M6 13.5H2.5V10" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/></svg>',compress:'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 2.5V6H2.5M10 2.5V6h3.5M13.5 10H10v3.5M6 13.5V10H2.5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/></svg>',info:'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.05"/><path d="M8 7v4M8 5.2v.1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>',leaf:'<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 4C12.8 4.3 7 8.1 5.2 14c-.6 2 .2 4.3 2.1 5.3 2 1 4.5.4 6.1-1.1C16.5 15.2 18.8 9.8 20 4Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M4.2 21c1.2-4.8 4-8.5 8.5-11.3" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/></svg>',paw:'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><ellipse cx="4" cy="6" rx="1.35" ry="1.8" stroke="currentColor" stroke-width=".9"/><ellipse cx="7.1" cy="4.5" rx="1.25" ry="1.7" stroke="currentColor" stroke-width=".9"/><ellipse cx="10.4" cy="5" rx="1.2" ry="1.6" stroke="currentColor" stroke-width=".9"/><ellipse cx="12.8" cy="7.4" rx="1.15" ry="1.55" stroke="currentColor" stroke-width=".9"/><path d="M4.2 11.6c.2-1.8 1.7-2.8 3.8-2.8s3.6 1 3.8 2.8c.1 1.2-.9 2.1-2.1 2.1-.8 0-1.2-.4-1.7-.4s-.9.4-1.7.4c-1.2 0-2.2-.9-2.1-2.1Z" stroke="currentColor" stroke-width=".9"/></svg>',mouse:'<svg viewBox="0 0 18 24" fill="none" aria-hidden="true"><rect x="1.5" y="1.5" width="15" height="21" rx="7.5" stroke="currentColor" stroke-width="1"/><path d="M9 5v4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>',target:'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="5.2" stroke="currentColor" stroke-width="1"/><circle cx="8" cy="8" r="1.5" fill="currentColor"/><path d="M8 1v2.2M8 12.8V15M1 8h2.2M12.8 8H15" stroke="currentColor" stroke-width="1" stroke-linecap="round"/></svg>',accessibility:'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="3.2" r="1.35" stroke="currentColor" stroke-width="1"/><path d="M3.2 6.2h9.6M8 6.5v3.6M8 10l-2.6 3M8 10l2.6 3" stroke="currentColor" stroke-width="1.05" stroke-linecap="round"/></svg>',infoCircle:'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1"/><path d="M8 7.2V11M8 5v.1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>'}});var _y=Qf(()=>{Xf();window.__ModuleLoader__.load({id:"@local/roofpark3d",factory(i){let t=i("react"),e=t.createElement;function n(r){let o=r?.size||18;return e("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,style:{display:"block",color:"currentColor"}},e("path",{d:"M3 16.2c2.3-4.6 5.9-7 11-7 2.2 0 4.4.5 6.6 1.6",stroke:"currentColor",strokeWidth:1.3,strokeLinecap:"round"}),e("path",{d:"M4.8 15.4 11 5.8l5.5 9.3",stroke:"currentColor",strokeWidth:1.3,strokeLinejoin:"round"}),e("path",{d:"M6.3 19.7h11.4M8 19.7v-2.1M16 17.6v-2.2M12 19.7v-3.4",stroke:"currentColor",strokeWidth:1.15,strokeLinecap:"round"}))}function s(){let r=t.useRef(null);return t.useEffect(()=>{if(!r.current)return;let o=Wf(r.current);return()=>{o.destroy()}},[]),e("div",{ref:r,className:"rp3d-host","data-roofpark-page":"true",style:{width:"100%",height:"100%",minHeight:"620px",position:"relative",overflow:"hidden",background:"#171b17"}})}return{inject:["slots"],apply(r){r.slots.inject("main",()=>r.slots.register({name:"main",key:"roofpark3d"},s)),r.slots.inject("sidebar.panellist",()=>r.slots.register({name:"sidebar.panellist",id:"roofpark3d",order:20,label:"\u5C4B\u9876\u516C\u56ED"},n))}}}})});_y();})();
