import ze from"./D7wrwFTn.js";import De from"./BeX66iH7.js";import Me from"./Bxx1FYYb.js";import Ve from"./Dp3Ajcex.js";import Oe from"./DBwQ5xFK.js";import{_ as Le}from"./BkFUJS_5.js";import{_ as ke}from"./BQgMKhcI.js";import Ie from"./BvlMH_55.js";import{d as Fe,r as ie,o as we,au as Be,c as Te,I as Q,av as I,Z as Pe,aw as We,ax as $e,ay as Y,m as Ue,K as he,S as Ne,b as X,H as Z,w as U,g as N,e as se,j as Re,E as J,az as de,$ as Je}from"./DWXAompB.js";import{u as ae}from"./UK7z0oC4.js";const Ke=Symbol.for("nuxt:client-only"),Qe=Fe({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(a,{slots:e,attrs:t}){const n=ie(!1);return we(()=>{n.value=!0}),Be(Ke,!0),i=>{var l;if(n.value)return(l=e.default)==null?void 0:l.call(e);const r=e.fallback||e.placeholder;if(r)return r();const o=i.fallback||i.placeholder||"",u=i.fallbackTag||i.placeholderTag||"span";return Te(u,t,o)}}});function ve(a,e,t){const[n={},i]=typeof e=="string"?[{},e]:[e,t],r=Q(()=>I(a)),o=n.key||Pe([i,typeof r.value=="string"?r.value:"",...Ge(n)]);if(!o||typeof o!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+o);if(!a)throw new Error("[nuxt] [useFetch] request is missing.");const u=o===i?"$f"+o:o;if(!n.baseURL&&typeof r.value=="string"&&r.value[0]==="/"&&r.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:l,lazy:s,default:c,transform:f,pick:h,watch:d,immediate:y,getCachedData:m,deep:v,dedupe:g,...F}=n,p=We({...$e,...F,cache:typeof n.cache=="boolean"?void 0:n.cache}),A={server:l,lazy:s,default:c,transform:f,pick:h,immediate:y,getCachedData:m,deep:v,dedupe:g,watch:d===!1?[]:[p,r,...d||[]]};let w;return ae(u,()=>{var _;(_=w==null?void 0:w.abort)==null||_.call(w),w=typeof AbortController<"u"?new AbortController:{};const b=I(n.timeout);return b&&setTimeout(()=>w.abort(),b),(n.$fetch||globalThis.$fetch)(r.value,{signal:w.signal,...p})},A)}function Ge(a){var t;const e=[((t=I(a.method))==null?void 0:t.toUpperCase())||"GET",I(a.baseURL)];for(const n of[a.params||a.query]){const i=I(n);if(!i)continue;const r={};for(const[o,u]of Object.entries(i))r[I(o)]=I(u);e.push(r)}return e}var D=function(){return D=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},D.apply(this,arguments)};function He(a,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function u(c){try{s(n.next(c))}catch(f){o(f)}}function l(c){try{s(n.throw(c))}catch(f){o(f)}}function s(c){c.done?r(c.value):i(c.value).then(u,l)}s((n=n.apply(a,e||[])).next())})}function Ye(a,e){var t={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,i,r,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(s){return function(c){return l([s,c])}}function l(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(t=0)),t;)try{if(n=1,i&&(r=s[0]&2?i.return:s[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,s[1])).done)return r;switch(i=0,r&&(s=[s[0]&2,r.value]),s[0]){case 0:case 1:r=s;break;case 4:return t.label++,{value:s[1],done:!1};case 5:t.label++,i=s[1],s=[0];continue;case 7:s=t.ops.pop(),t.trys.pop();continue;default:if(r=t.trys,!(r=r.length>0&&r[r.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!r||s[1]>r[0]&&s[1]<r[3])){t.label=s[1];break}if(s[0]===6&&t.label<r[1]){t.label=r[1],r=s;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(s);break}r[2]&&t.ops.pop(),t.trys.pop();continue}s=e.call(a,t)}catch(c){s=[6,c],i=0}finally{n=r=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}function x(a){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&a[e],n=0;if(t)return t.call(a);if(a&&typeof a.length=="number")return{next:function(){return a&&n>=a.length&&(a=void 0),{value:a&&a[n++],done:!a}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function L(a,e){var t=typeof Symbol=="function"&&a[Symbol.iterator];if(!t)return a;var n=t.call(a),i,r=[],o;try{for(;(e===void 0||e-- >0)&&!(i=n.next()).done;)r.push(i.value)}catch(u){o={error:u}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return r}var Xe="ENTRIES",xe="KEYS",be="VALUES",k="",j=function(){function a(e,t){var n=e._tree,i=Array.from(n.keys());this.set=e,this._type=t,this._path=i.length>0?[{node:n,keys:i}]:[]}return a.prototype.next=function(){var e=this.dive();return this.backtrack(),e},a.prototype.dive=function(){if(this._path.length===0)return{done:!0,value:void 0};var e=R(this._path),t=e.node,n=e.keys;if(R(n)===k)return{done:!1,value:this.result()};var i=t.get(R(n));return this._path.push({node:i,keys:Array.from(i.keys())}),this.dive()},a.prototype.backtrack=function(){if(this._path.length!==0){var e=R(this._path).keys;e.pop(),!(e.length>0)&&(this._path.pop(),this.backtrack())}},a.prototype.key=function(){return this.set._prefix+this._path.map(function(e){var t=e.keys;return R(t)}).filter(function(e){return e!==k}).join("")},a.prototype.value=function(){return R(this._path).node.get(k)},a.prototype.result=function(){switch(this._type){case be:return this.value();case xe:return this.key();default:return[this.key(),this.value()]}},a.prototype[Symbol.iterator]=function(){return this},a}(),R=function(a){return a[a.length-1]},Ze=function(a,e,t){var n=new Map;if(e===void 0)return n;for(var i=e.length+1,r=i+t,o=new Uint8Array(r*i).fill(t+1),u=0;u<i;++u)o[u]=u;for(var l=1;l<r;++l)o[l*i]=l;return Ce(a,e,t,n,o,1,i,""),n},Ce=function(a,e,t,n,i,r,o,u){var l,s,c=r*o;try{e:for(var f=x(a.keys()),h=f.next();!h.done;h=f.next()){var d=h.value;if(d===k){var y=i[c-1];y<=t&&n.set(u,[a.get(d),y])}else{for(var m=r,v=0;v<d.length;++v,++m){for(var g=d[v],F=o*m,p=F-o,A=i[F],w=Math.max(0,m-t-1),V=Math.min(o-1,m+t),b=w;b<V;++b){var C=g!==e[b],_=i[p+b]+ +C,E=i[p+b+1]+1,M=i[F+b]+1,S=i[F+b+1]=Math.min(_,E,M);S<A&&(A=S)}if(A>t)continue e}Ce(a.get(d),e,t,n,i,m,o,u+d)}}}catch(O){l={error:O}}finally{try{h&&!h.done&&(s=f.return)&&s.call(f)}finally{if(l)throw l.error}}},q=function(){function a(e,t){e===void 0&&(e=new Map),t===void 0&&(t=""),this._size=void 0,this._tree=e,this._prefix=t}return a.prototype.atPrefix=function(e){var t,n;if(!e.startsWith(this._prefix))throw new Error("Mismatched prefix");var i=L(H(this._tree,e.slice(this._prefix.length)),2),r=i[0],o=i[1];if(r===void 0){var u=L(ce(o),2),l=u[0],s=u[1];try{for(var c=x(l.keys()),f=c.next();!f.done;f=c.next()){var h=f.value;if(h!==k&&h.startsWith(s)){var d=new Map;return d.set(h.slice(s.length),l.get(h)),new a(d,e)}}}catch(y){t={error:y}}finally{try{f&&!f.done&&(n=c.return)&&n.call(c)}finally{if(t)throw t.error}}}return new a(r,e)},a.prototype.clear=function(){this._size=void 0,this._tree.clear()},a.prototype.delete=function(e){return this._size=void 0,je(this._tree,e)},a.prototype.entries=function(){return new j(this,Xe)},a.prototype.forEach=function(e){var t,n;try{for(var i=x(this),r=i.next();!r.done;r=i.next()){var o=L(r.value,2),u=o[0],l=o[1];e(u,l,this)}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},a.prototype.fuzzyGet=function(e,t){return Ze(this._tree,e,t)},a.prototype.get=function(e){var t=oe(this._tree,e);return t!==void 0?t.get(k):void 0},a.prototype.has=function(e){var t=oe(this._tree,e);return t!==void 0&&t.has(k)},a.prototype.keys=function(){return new j(this,xe)},a.prototype.set=function(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;var n=ee(this._tree,e);return n.set(k,t),this},Object.defineProperty(a.prototype,"size",{get:function(){if(this._size)return this._size;this._size=0;for(var e=this.entries();!e.next().done;)this._size+=1;return this._size},enumerable:!1,configurable:!0}),a.prototype.update=function(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;var n=ee(this._tree,e);return n.set(k,t(n.get(k))),this},a.prototype.fetch=function(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;var n=ee(this._tree,e),i=n.get(k);return i===void 0&&n.set(k,i=t()),i},a.prototype.values=function(){return new j(this,be)},a.prototype[Symbol.iterator]=function(){return this.entries()},a.from=function(e){var t,n,i=new a;try{for(var r=x(e),o=r.next();!o.done;o=r.next()){var u=L(o.value,2),l=u[0],s=u[1];i.set(l,s)}}catch(c){t={error:c}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return i},a.fromObject=function(e){return a.from(Object.entries(e))},a}(),H=function(a,e,t){var n,i;if(t===void 0&&(t=[]),e.length===0||a==null)return[a,t];try{for(var r=x(a.keys()),o=r.next();!o.done;o=r.next()){var u=o.value;if(u!==k&&e.startsWith(u))return t.push([a,u]),H(a.get(u),e.slice(u.length),t)}}catch(l){n={error:l}}finally{try{o&&!o.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}return t.push([a,e]),H(void 0,"",t)},oe=function(a,e){var t,n;if(e.length===0||a==null)return a;try{for(var i=x(a.keys()),r=i.next();!r.done;r=i.next()){var o=r.value;if(o!==k&&e.startsWith(o))return oe(a.get(o),e.slice(o.length))}}catch(u){t={error:u}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},ee=function(a,e){var t,n,i=e.length;e:for(var r=0;a&&r<i;){try{for(var o=(t=void 0,x(a.keys())),u=o.next();!u.done;u=o.next()){var l=u.value;if(l!==k&&e[r]===l[0]){for(var s=Math.min(i-r,l.length),c=1;c<s&&e[r+c]===l[c];)++c;var f=a.get(l);if(c===l.length)a=f;else{var h=new Map;h.set(l.slice(c),f),a.set(e.slice(r,r+c),h),a.delete(l),a=h}r+=c;continue e}}}catch(y){t={error:y}}finally{try{u&&!u.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}var d=new Map;return a.set(e.slice(r),d),d}return a},je=function(a,e){var t=L(H(a,e),2),n=t[0],i=t[1];if(n!==void 0){if(n.delete(k),n.size===0)Se(i);else if(n.size===1){var r=L(n.entries().next().value,2),o=r[0],u=r[1];Ae(i,o,u)}}},Se=function(a){if(a.length!==0){var e=L(ce(a),2),t=e[0],n=e[1];if(t.delete(n),t.size===0)Se(a.slice(0,-1));else if(t.size===1){var i=L(t.entries().next().value,2),r=i[0],o=i[1];r!==k&&Ae(a.slice(0,-1),r,o)}}},Ae=function(a,e,t){if(a.length!==0){var n=L(ce(a),2),i=n[0],r=n[1];i.set(r+e,t),i.delete(r)}},ce=function(a){return a[a.length-1]},K,fe="or",_e="and",qe="and_not",Ee=function(){function a(e){if((e==null?void 0:e.fields)==null)throw new Error('MiniSearch: option "fields" must be provided');var t=e.autoVacuum==null||e.autoVacuum===!0?ne:e.autoVacuum;this._options=D(D(D({},re),e),{autoVacuum:t,searchOptions:D(D({},ye),e.searchOptions||{}),autoSuggestOptions:D(D({},it),e.autoSuggestOptions||{})}),this._index=new q,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=le,this.addFields(this._options.fields)}return a.prototype.add=function(e){var t,n,i,r,o,u,l=this._options,s=l.extractField,c=l.tokenize,f=l.processTerm,h=l.fields,d=l.idField,y=s(e,d);if(y==null)throw new Error('MiniSearch: document does not have ID field "'.concat(d,'"'));if(this._idToShortId.has(y))throw new Error("MiniSearch: duplicate ID ".concat(y));var m=this.addDocumentId(y);this.saveStoredFields(m,e);try{for(var v=x(h),g=v.next();!g.done;g=v.next()){var F=g.value,p=s(e,F);if(p!=null){var A=c(p.toString(),F),w=this._fieldIds[F],V=new Set(A).size;this.addFieldLength(m,w,this._documentCount-1,V);try{for(var b=(i=void 0,x(A)),C=b.next();!C.done;C=b.next()){var _=C.value,E=f(_,F);if(Array.isArray(E))try{for(var M=(o=void 0,x(E)),S=M.next();!S.done;S=M.next()){var O=S.value;this.addTerm(w,m,O)}}catch(z){o={error:z}}finally{try{S&&!S.done&&(u=M.return)&&u.call(M)}finally{if(o)throw o.error}}else E&&this.addTerm(w,m,E)}}catch(z){i={error:z}}finally{try{C&&!C.done&&(r=b.return)&&r.call(b)}finally{if(i)throw i.error}}}}}catch(z){t={error:z}}finally{try{g&&!g.done&&(n=v.return)&&n.call(v)}finally{if(t)throw t.error}}},a.prototype.addAll=function(e){var t,n;try{for(var i=x(e),r=i.next();!r.done;r=i.next()){var o=r.value;this.add(o)}}catch(u){t={error:u}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},a.prototype.addAllAsync=function(e,t){var n=this;t===void 0&&(t={});var i=t.chunkSize,r=i===void 0?10:i,o={chunk:[],promise:Promise.resolve()},u=e.reduce(function(c,f,h){var d=c.chunk,y=c.promise;return d.push(f),(h+1)%r===0?{chunk:[],promise:y.then(function(){return new Promise(function(m){return setTimeout(m,0)})}).then(function(){return n.addAll(d)})}:{chunk:d,promise:y}},o),l=u.chunk,s=u.promise;return s.then(function(){return n.addAll(l)})},a.prototype.remove=function(e){var t,n,i,r,o,u,l=this._options,s=l.tokenize,c=l.processTerm,f=l.extractField,h=l.fields,d=l.idField,y=f(e,d);if(y==null)throw new Error('MiniSearch: document does not have ID field "'.concat(d,'"'));var m=this._idToShortId.get(y);if(m==null)throw new Error("MiniSearch: cannot remove document with ID ".concat(y,": it is not in the index"));try{for(var v=x(h),g=v.next();!g.done;g=v.next()){var F=g.value,p=f(e,F);if(p!=null){var A=s(p.toString(),F),w=this._fieldIds[F],V=new Set(A).size;this.removeFieldLength(m,w,this._documentCount,V);try{for(var b=(i=void 0,x(A)),C=b.next();!C.done;C=b.next()){var _=C.value,E=c(_,F);if(Array.isArray(E))try{for(var M=(o=void 0,x(E)),S=M.next();!S.done;S=M.next()){var O=S.value;this.removeTerm(w,m,O)}}catch(z){o={error:z}}finally{try{S&&!S.done&&(u=M.return)&&u.call(M)}finally{if(o)throw o.error}}else E&&this.removeTerm(w,m,E)}}catch(z){i={error:z}}finally{try{C&&!C.done&&(r=b.return)&&r.call(b)}finally{if(i)throw i.error}}}}}catch(z){t={error:z}}finally{try{g&&!g.done&&(n=v.return)&&n.call(v)}finally{if(t)throw t.error}}this._storedFields.delete(m),this._documentIds.delete(m),this._idToShortId.delete(y),this._fieldLength.delete(m),this._documentCount-=1},a.prototype.removeAll=function(e){var t,n;if(e)try{for(var i=x(e),r=i.next();!r.done;r=i.next()){var o=r.value;this.remove(o)}}catch(u){t={error:u}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}else{if(arguments.length>0)throw new Error("Expected documents to be present. Omit the argument to remove all documents.");this._index=new q,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldLength=new Map,this._avgFieldLength=[],this._storedFields=new Map,this._nextId=0}},a.prototype.discard=function(e){var t=this,n=this._idToShortId.get(e);if(n==null)throw new Error("MiniSearch: cannot discard document with ID ".concat(e,": it is not in the index"));this._idToShortId.delete(e),this._documentIds.delete(n),this._storedFields.delete(n),(this._fieldLength.get(n)||[]).forEach(function(i,r){t.removeFieldLength(n,r,t._documentCount,i)}),this._fieldLength.delete(n),this._documentCount-=1,this._dirtCount+=1,this.maybeAutoVacuum()},a.prototype.maybeAutoVacuum=function(){if(this._options.autoVacuum!==!1){var e=this._options.autoVacuum,t=e.minDirtFactor,n=e.minDirtCount,i=e.batchSize,r=e.batchWait;this.conditionalVacuum({batchSize:i,batchWait:r},{minDirtCount:n,minDirtFactor:t})}},a.prototype.discardAll=function(e){var t,n,i=this._options.autoVacuum;try{this._options.autoVacuum=!1;try{for(var r=x(e),o=r.next();!o.done;o=r.next()){var u=o.value;this.discard(u)}}catch(l){t={error:l}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}finally{this._options.autoVacuum=i}this.maybeAutoVacuum()},a.prototype.replace=function(e){var t=this._options,n=t.idField,i=t.extractField,r=i(e,n);this.discard(r),this.add(e)},a.prototype.vacuum=function(e){return e===void 0&&(e={}),this.conditionalVacuum(e)},a.prototype.conditionalVacuum=function(e,t){var n=this;return this._currentVacuum?(this._enqueuedVacuumConditions=this._enqueuedVacuumConditions&&t,this._enqueuedVacuum!=null?this._enqueuedVacuum:(this._enqueuedVacuum=this._currentVacuum.then(function(){var i=n._enqueuedVacuumConditions;return n._enqueuedVacuumConditions=le,n.performVacuuming(e,i)}),this._enqueuedVacuum)):this.vacuumConditionsMet(t)===!1?Promise.resolve():(this._currentVacuum=this.performVacuuming(e),this._currentVacuum)},a.prototype.performVacuuming=function(e,t){return He(this,void 0,void 0,function(){var n,i,r,o,u,l,s,c,f,h,d,y,m,v,g,F,p,A,w,V,b,C,_,E,M;return Ye(this,function(S){switch(S.label){case 0:if(n=this._dirtCount,!this.vacuumConditionsMet(t))return[3,10];i=e.batchSize||ue.batchSize,r=e.batchWait||ue.batchWait,o=1,S.label=1;case 1:S.trys.push([1,7,8,9]),u=x(this._index),l=u.next(),S.label=2;case 2:if(l.done)return[3,6];s=L(l.value,2),c=s[0],f=s[1];try{for(h=(C=void 0,x(f)),d=h.next();!d.done;d=h.next()){y=L(d.value,2),m=y[0],v=y[1];try{for(g=(E=void 0,x(v)),F=g.next();!F.done;F=g.next())p=L(F.value,1),A=p[0],!this._documentIds.has(A)&&(v.size<=1?f.delete(m):v.delete(A))}catch(O){E={error:O}}finally{try{F&&!F.done&&(M=g.return)&&M.call(g)}finally{if(E)throw E.error}}}}catch(O){C={error:O}}finally{try{d&&!d.done&&(_=h.return)&&_.call(h)}finally{if(C)throw C.error}}return this._index.get(c).size===0&&this._index.delete(c),o%i!==0?[3,4]:[4,new Promise(function(O){return setTimeout(O,r)})];case 3:S.sent(),S.label=4;case 4:o+=1,S.label=5;case 5:return l=u.next(),[3,2];case 6:return[3,9];case 7:return w=S.sent(),V={error:w},[3,9];case 8:try{l&&!l.done&&(b=u.return)&&b.call(u)}finally{if(V)throw V.error}return[7];case 9:this._dirtCount-=n,S.label=10;case 10:return[4,null];case 11:return S.sent(),this._currentVacuum=this._enqueuedVacuum,this._enqueuedVacuum=null,[2]}})})},a.prototype.vacuumConditionsMet=function(e){if(e==null)return!0;var t=e.minDirtCount,n=e.minDirtFactor;return t=t||ne.minDirtCount,n=n||ne.minDirtFactor,this.dirtCount>=t&&this.dirtFactor>=n},Object.defineProperty(a.prototype,"isVacuuming",{get:function(){return this._currentVacuum!=null},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"dirtCount",{get:function(){return this._dirtCount},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"dirtFactor",{get:function(){return this._dirtCount/(1+this._documentCount+this._dirtCount)},enumerable:!1,configurable:!0}),a.prototype.has=function(e){return this._idToShortId.has(e)},a.prototype.getStoredFields=function(e){var t=this._idToShortId.get(e);if(t!=null)return this._storedFields.get(t)},a.prototype.search=function(e,t){var n,i;t===void 0&&(t={});var r=this.executeQuery(e,t),o=[];try{for(var u=x(r),l=u.next();!l.done;l=u.next()){var s=L(l.value,2),c=s[0],f=s[1],h=f.score,d=f.terms,y=f.match,m=d.length||1,v={id:this._documentIds.get(c),score:h*m,terms:Object.keys(y),queryTerms:d,match:y};Object.assign(v,this._storedFields.get(c)),(t.filter==null||t.filter(v))&&o.push(v)}}catch(g){n={error:g}}finally{try{l&&!l.done&&(i=u.return)&&i.call(u)}finally{if(n)throw n.error}}return e===a.wildcard&&t.boostDocument==null&&this._options.searchOptions.boostDocument==null||o.sort(me),o},a.prototype.autoSuggest=function(e,t){var n,i,r,o;t===void 0&&(t={}),t=D(D({},this._options.autoSuggestOptions),t);var u=new Map;try{for(var l=x(this.search(e,t)),s=l.next();!s.done;s=l.next()){var c=s.value,f=c.score,h=c.terms,d=h.join(" "),y=u.get(d);y!=null?(y.score+=f,y.count+=1):u.set(d,{score:f,terms:h,count:1})}}catch(w){n={error:w}}finally{try{s&&!s.done&&(i=l.return)&&i.call(l)}finally{if(n)throw n.error}}var m=[];try{for(var v=x(u),g=v.next();!g.done;g=v.next()){var F=L(g.value,2),y=F[0],p=F[1],f=p.score,h=p.terms,A=p.count;m.push({suggestion:y,terms:h,score:f/A})}}catch(w){r={error:w}}finally{try{g&&!g.done&&(o=v.return)&&o.call(v)}finally{if(r)throw r.error}}return m.sort(me),m},Object.defineProperty(a.prototype,"documentCount",{get:function(){return this._documentCount},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"termCount",{get:function(){return this._index.size},enumerable:!1,configurable:!0}),a.loadJSON=function(e,t){if(t==null)throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");return this.loadJS(JSON.parse(e),t)},a.getDefault=function(e){if(re.hasOwnProperty(e))return te(re,e);throw new Error('MiniSearch: unknown option "'.concat(e,'"'))},a.loadJS=function(e,t){var n,i,r,o,u,l,s=e.index,c=e.documentCount,f=e.nextId,h=e.documentIds,d=e.fieldIds,y=e.fieldLength,m=e.averageFieldLength,v=e.storedFields,g=e.dirtCount,F=e.serializationVersion;if(F!==1&&F!==2)throw new Error("MiniSearch: cannot deserialize an index created with an incompatible version");var p=new a(t);p._documentCount=c,p._nextId=f,p._documentIds=G(h),p._idToShortId=new Map,p._fieldIds=d,p._fieldLength=G(y),p._avgFieldLength=m,p._storedFields=G(v),p._dirtCount=g||0,p._index=new q;try{for(var A=x(p._documentIds),w=A.next();!w.done;w=A.next()){var V=L(w.value,2),b=V[0],C=V[1];p._idToShortId.set(C,b)}}catch(P){n={error:P}}finally{try{w&&!w.done&&(i=A.return)&&i.call(A)}finally{if(n)throw n.error}}try{for(var _=x(s),E=_.next();!E.done;E=_.next()){var M=L(E.value,2),S=M[0],O=M[1],z=new Map;try{for(var T=(u=void 0,x(Object.keys(O))),B=T.next();!B.done;B=T.next()){var W=B.value,$=O[W];F===1&&($=$.ds),z.set(parseInt(W,10),G($))}}catch(P){u={error:P}}finally{try{B&&!B.done&&(l=T.return)&&l.call(T)}finally{if(u)throw u.error}}p._index.set(S,z)}}catch(P){r={error:P}}finally{try{E&&!E.done&&(o=_.return)&&o.call(_)}finally{if(r)throw r.error}}return p},a.prototype.executeQuery=function(e,t){var n=this;if(t===void 0&&(t={}),e===a.wildcard)return this.executeWildcardQuery(t);if(typeof e!="string"){var i=D(D(D({},t),e),{queries:void 0}),r=e.queries.map(function(v){return n.executeQuery(v,i)});return this.combineResults(r,i.combineWith)}var o=this._options,u=o.tokenize,l=o.processTerm,s=o.searchOptions,c=D(D({tokenize:u,processTerm:l},s),t),f=c.tokenize,h=c.processTerm,d=f(e).flatMap(function(v){return h(v)}).filter(function(v){return!!v}),y=d.map(nt(c)),m=y.map(function(v){return n.executeQuerySpec(v,c)});return this.combineResults(m,c.combineWith)},a.prototype.executeQuerySpec=function(e,t){var n,i,r,o,u=D(D({},this._options.searchOptions),t),l=(u.fields||this._options.fields).reduce(function(W,$){var P;return D(D({},W),(P={},P[$]=te(u.boost,$)||1,P))},{}),s=u.boostDocument,c=u.weights,f=u.maxFuzzy,h=u.bm25,d=D(D({},ye.weights),c),y=d.fuzzy,m=d.prefix,v=this._index.get(e.term),g=this.termResults(e.term,e.term,1,v,l,s,h),F,p;if(e.prefix&&(F=this._index.atPrefix(e.term)),e.fuzzy){var A=e.fuzzy===!0?.2:e.fuzzy,w=A<1?Math.min(f,Math.round(e.term.length*A)):A;w&&(p=this._index.fuzzyGet(e.term,w))}if(F)try{for(var V=x(F),b=V.next();!b.done;b=V.next()){var C=L(b.value,2),_=C[0],E=C[1],M=_.length-e.term.length;if(M){p==null||p.delete(_);var S=m*_.length/(_.length+.3*M);this.termResults(e.term,_,S,E,l,s,h,g)}}}catch(W){n={error:W}}finally{try{b&&!b.done&&(i=V.return)&&i.call(V)}finally{if(n)throw n.error}}if(p)try{for(var O=x(p.keys()),z=O.next();!z.done;z=O.next()){var _=z.value,T=L(p.get(_),2),B=T[0],M=T[1];if(M){var S=y*_.length/(_.length+M);this.termResults(e.term,_,S,B,l,s,h,g)}}}catch(W){r={error:W}}finally{try{z&&!z.done&&(o=O.return)&&o.call(O)}finally{if(r)throw r.error}}return g},a.prototype.executeWildcardQuery=function(e){var t,n,i=new Map,r=D(D({},this._options.searchOptions),e);try{for(var o=x(this._documentIds),u=o.next();!u.done;u=o.next()){var l=L(u.value,2),s=l[0],c=l[1],f=r.boostDocument?r.boostDocument(c,"",this._storedFields.get(s)):1;i.set(s,{score:f,terms:[],match:{}})}}catch(h){t={error:h}}finally{try{u&&!u.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return i},a.prototype.combineResults=function(e,t){if(t===void 0&&(t=fe),e.length===0)return new Map;var n=t.toLowerCase();return e.reduce(et[n])||new Map},a.prototype.toJSON=function(){var e,t,n,i,r=[];try{for(var o=x(this._index),u=o.next();!u.done;u=o.next()){var l=L(u.value,2),s=l[0],c=l[1],f={};try{for(var h=(n=void 0,x(c)),d=h.next();!d.done;d=h.next()){var y=L(d.value,2),m=y[0],v=y[1];f[m]=Object.fromEntries(v)}}catch(g){n={error:g}}finally{try{d&&!d.done&&(i=h.return)&&i.call(h)}finally{if(n)throw n.error}}r.push([s,f])}}catch(g){e={error:g}}finally{try{u&&!u.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:r,serializationVersion:2}},a.prototype.termResults=function(e,t,n,i,r,o,u,l){var s,c,f,h,d;if(l===void 0&&(l=new Map),i==null)return l;try{for(var y=x(Object.keys(r)),m=y.next();!m.done;m=y.next()){var v=m.value,g=r[v],F=this._fieldIds[v],p=i.get(F);if(p!=null){var A=p.size,w=this._avgFieldLength[F];try{for(var V=(f=void 0,x(p.keys())),b=V.next();!b.done;b=V.next()){var C=b.value;if(!this._documentIds.has(C)){this.removeTerm(F,C,t),A-=1;continue}var _=o?o(this._documentIds.get(C),t,this._storedFields.get(C)):1;if(_){var E=p.get(C),M=this._fieldLength.get(C)[F],S=rt(E,A,this._documentCount,M,w,u),O=n*g*_*S,z=l.get(C);if(z){z.score+=O,at(z.terms,e);var T=te(z.match,t);T?T.push(v):z.match[t]=[v]}else l.set(C,{score:O,terms:[e],match:(d={},d[t]=[v],d)})}}}catch(B){f={error:B}}finally{try{b&&!b.done&&(h=V.return)&&h.call(V)}finally{if(f)throw f.error}}}}}catch(B){s={error:B}}finally{try{m&&!m.done&&(c=y.return)&&c.call(y)}finally{if(s)throw s.error}}return l},a.prototype.addTerm=function(e,t,n){var i=this._index.fetch(n,ge),r=i.get(e);if(r==null)r=new Map,r.set(t,1),i.set(e,r);else{var o=r.get(t);r.set(t,(o||0)+1)}},a.prototype.removeTerm=function(e,t,n){if(!this._index.has(n)){this.warnDocumentChanged(t,e,n);return}var i=this._index.fetch(n,ge),r=i.get(e);r==null||r.get(t)==null?this.warnDocumentChanged(t,e,n):r.get(t)<=1?r.size<=1?i.delete(e):r.delete(t):r.set(t,r.get(t)-1),this._index.get(n).size===0&&this._index.delete(n)},a.prototype.warnDocumentChanged=function(e,t,n){var i,r;try{for(var o=x(Object.keys(this._fieldIds)),u=o.next();!u.done;u=o.next()){var l=u.value;if(this._fieldIds[l]===t){this._options.logger("warn","MiniSearch: document with ID ".concat(this._documentIds.get(e),' has changed before removal: term "').concat(n,'" was not present in field "').concat(l,'". Removing a document after it has changed can corrupt the index!'),"version_conflict");return}}}catch(s){i={error:s}}finally{try{u&&!u.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}},a.prototype.addDocumentId=function(e){var t=this._nextId;return this._idToShortId.set(e,t),this._documentIds.set(t,e),this._documentCount+=1,this._nextId+=1,t},a.prototype.addFields=function(e){for(var t=0;t<e.length;t++)this._fieldIds[e[t]]=t},a.prototype.addFieldLength=function(e,t,n,i){var r=this._fieldLength.get(e);r==null&&this._fieldLength.set(e,r=[]),r[t]=i;var o=this._avgFieldLength[t]||0,u=o*n+i;this._avgFieldLength[t]=u/(n+1)},a.prototype.removeFieldLength=function(e,t,n,i){if(n===1){this._avgFieldLength[t]=0;return}var r=this._avgFieldLength[t]*n-i;this._avgFieldLength[t]=r/(n-1)},a.prototype.saveStoredFields=function(e,t){var n,i,r=this._options,o=r.storeFields,u=r.extractField;if(!(o==null||o.length===0)){var l=this._storedFields.get(e);l==null&&this._storedFields.set(e,l={});try{for(var s=x(o),c=s.next();!c.done;c=s.next()){var f=c.value,h=u(t,f);h!==void 0&&(l[f]=h)}}catch(d){n={error:d}}finally{try{c&&!c.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}}},a.wildcard=Symbol("*"),a}(),te=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)?a[e]:void 0},et=(K={},K[fe]=function(a,e){var t,n;try{for(var i=x(e.keys()),r=i.next();!r.done;r=i.next()){var o=r.value,u=a.get(o);if(u==null)a.set(o,e.get(o));else{var l=e.get(o),s=l.score,c=l.terms,f=l.match;u.score=u.score+s,u.match=Object.assign(u.match,f),pe(u.terms,c)}}}catch(h){t={error:h}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return a},K[_e]=function(a,e){var t,n,i=new Map;try{for(var r=x(e.keys()),o=r.next();!o.done;o=r.next()){var u=o.value,l=a.get(u);if(l!=null){var s=e.get(u),c=s.score,f=s.terms,h=s.match;pe(l.terms,f),i.set(u,{score:l.score+c,terms:l.terms,match:Object.assign(l.match,h)})}}}catch(d){t={error:d}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return i},K[qe]=function(a,e){var t,n;try{for(var i=x(e.keys()),r=i.next();!r.done;r=i.next()){var o=r.value;a.delete(o)}}catch(u){t={error:u}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return a},K),tt={k:1.2,b:.7,d:.5},rt=function(a,e,t,n,i,r){var o=r.k,u=r.b,l=r.d,s=Math.log(1+(t-e+.5)/(e+.5));return s*(l+a*(o+1)/(a+o*(1-u+u*n/i)))},nt=function(a){return function(e,t,n){var i=typeof a.fuzzy=="function"?a.fuzzy(e,t,n):a.fuzzy||!1,r=typeof a.prefix=="function"?a.prefix(e,t,n):a.prefix===!0;return{term:e,fuzzy:i,prefix:r}}},re={idField:"id",extractField:function(a,e){return a[e]},tokenize:function(a){return a.split(ot)},processTerm:function(a){return a.toLowerCase()},fields:void 0,searchOptions:void 0,storeFields:[],logger:function(a,e){typeof(console==null?void 0:console[a])=="function"&&console[a](e)},autoVacuum:!0},ye={combineWith:fe,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:tt},it={combineWith:_e,prefix:function(a,e,t){return e===t.length-1}},ue={batchSize:1e3,batchWait:10},le={minDirtFactor:.1,minDirtCount:20},ne=D(D({},ue),le),at=function(a,e){a.includes(e)||a.push(e)},pe=function(a,e){var t,n;try{for(var i=x(e),r=i.next();!r.done;r=i.next()){var o=r.value;a.includes(o)||a.push(o)}}catch(u){t={error:u}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},me=function(a,e){var t=a.score,n=e.score;return n-t},ge=function(){return new Map},G=function(a){var e,t,n=new Map;try{for(var i=x(Object.keys(a)),r=i.next();!r.done;r=i.next()){var o=r.value;n.set(parseInt(o,10),a[o])}}catch(u){e={error:u}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}return n},ot=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u;const ut=async(a,e={})=>{const t=Ue(),{content:n}=t.public,{integrity:i,api:{baseURL:r},search:o}=n,{indexed:u}=o||{},l=`${r}/search${i?"-"+i:""}`;if(u){const{options:f}=o||{},{data:h}=await ve(l,{responseType:"text"},"$1gpCpwXPVC");if(!h.value)throw Y({statusCode:500,message:"Missing search data"});return lt(a,h,f)}if(!e.miniSearch)throw Y({statusCode:500,message:"Missing miniSearch options"});const{data:s}=await ve(l,"$K0H4ck8p9J");if(!s.value)throw Y({statusCode:500,message:"Missing search data"});return st(a,s,e.miniSearch)},lt=(a,e,t)=>{const n=Q(()=>Ee.loadJSON(I(e),I(t)));return Q(()=>n.value.search(I(a)))},st=function(a,e,t){const n=Q(()=>new Ee(I(t)));return n.value.addAll(I(e)),Q(()=>n.value.search(I(a)))},ct=se("span",{class:"ss-search-button-icon pi pi-search"},null,-1),ft=se("span",{class:"ss-search-button-label"},"Search...",-1),ht={class:"ss-search-button-shortcut"},Ct=Fe({__name:"Search",async setup(a){let e,t;const n=ie(!1),i=ie(""),{data:r}=([e,t]=he(()=>ae("navigation",()=>Je())),e=await e,t(),e),{data:o}=([e,t]=he(()=>ae("search",()=>ut(i.value),{watch:[i]})),e=await e,t(),e),u=()=>{n.value=!0,i.value=""},l=()=>{n.value=!1},s=c=>{c.key==="/"&&(c.preventDefault(),u())};return we(()=>{window.addEventListener("keydown",s)}),Ne(()=>{window.removeEventListener("keydown",s)}),(c,f)=>{const h=ze,d=De,y=Me,m=Ve,v=Oe,g=Le,F=ke,p=Ie,A=Qe;return X(),Z(A,null,{default:U(()=>[N(d,{class:"ss-search-button",onClick:u},{default:U(()=>[ct,ft,se("span",ht,[N(h,null,{default:U(()=>[Re("/")]),_:1})])]),_:1}),N(p,{class:"ss-search-dialog",visible:J(n),"onUpdate:visible":f[1]||(f[1]=w=>de(n)?n.value=w:null),draggable:!1,modal:"",dismissableMask:""},{header:U(()=>[N(v,{class:"ss-search-input","icon-position":"left"},{default:U(()=>[N(y,{class:"pi pi-search"}),N(m,{modelValue:J(i),"onUpdate:modelValue":f[0]||(f[0]=w=>de(i)?i.value=w:null),placeholder:"Search...",autofocus:""},null,8,["modelValue"])]),_:1})]),default:U(()=>[J(i).length==0?(X(),Z(g,{key:0,contents:J(r),onSelected:l},null,8,["contents"])):(X(),Z(F,{key:1,model:J(o),onSelected:l},null,8,["model"]))]),_:1},8,["visible"])]),_:1})}}});export{Ct as _};
