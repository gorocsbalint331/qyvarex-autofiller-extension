(function(define){var __define; typeof define === "function" && (__define=define,define=null);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9iXSw":[function(require,module,exports) {
var global = arguments[3];
var W = Object.create;
var P = Object.defineProperty;
var V = Object.getOwnPropertyDescriptor;
var G = Object.getOwnPropertyNames;
var X = Object.getPrototypeOf, J = Object.prototype.hasOwnProperty;
var q = (e, t, o, r)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let n of G(t))!J.call(e, n) && n !== o && P(e, n, {
        get: ()=>t[n],
        enumerable: !(r = V(t, n)) || r.enumerable
    });
    return e;
};
var z = (e, t, o)=>(o = e != null ? W(X(e)) : {}, q(t || !e || !e.__esModule ? P(o, "default", {
        value: e,
        enumerable: !0
    }) : o, e));
var y = globalThis.process?.argv || [];
var H = ()=>globalThis.process?.env || {};
var K = new Set(y), D = (e)=>K.has(e), ue = y.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var de = D("--dry-run"), _ = ()=>D("--verbose") || H().VERBOSE === "true", fe = _();
var x = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var k = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), T = (...e)=>x("\uD83D\uDD35 INFO", ...e), A = (...e)=>x("\uD83D\uDFE0 WARN", ...e), Q = 0, p = (...e)=>_() && x(`\u{1F7E1} ${Q++}`, ...e);
var c = {
    "isContentScript": false,
    "isBackground": false,
    "isReact": false,
    "runtimes": [
        "page-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\workable\\rules.js",
    "bundleId": "e5a4706eec3d0f9b",
    "envHash": "e792fbbdaa78ee84",
    "verbose": "false",
    "secure": false,
    "serverPort": 1012
};
module.bundle.HMR_BUNDLE_ID = c.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: c.verbose
    }
};
var Y = module.bundle.Module;
function Z(e) {
    Y.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = Z;
module.bundle.hotData = {};
var d = globalThis.browser || globalThis.chrome || null;
async function m(e = !1) {
    e ? (p("Triggering full reload"), d.runtime.sendMessage({
        __plasmo_full_reload__: !0
    })) : globalThis.location?.reload?.();
}
function w() {
    return !c.host || c.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : c.host;
}
function L() {
    return !c.host || c.host === "0.0.0.0" ? "localhost" : c.host;
}
function f() {
    return c.port || location.port;
}
var S = "__plasmo_runtime_page_";
var i = {
    checkedAssets: {},
    assetsToDispose: [],
    assetsToAccept: []
}, B = ()=>{
    i.checkedAssets = {}, i.assetsToDispose = [], i.assetsToAccept = [];
};
function u(e, t) {
    let { modules: o } = e;
    if (!o) return [];
    let r = [], n, s, a;
    for(n in o)for(s in o[n][1])a = o[n][1][s], (a === t || Array.isArray(a) && a[a.length - 1] === t) && r.push([
        e,
        n
    ]);
    return e.parent && (r = r.concat(u(e.parent, t))), r;
}
function R(e, t, o) {
    if (C(e, t, o)) return !0;
    let r = u(module.bundle.root, t), n = !1;
    for(; r.length > 0;){
        let [s, a] = r.shift();
        if (C(s, a, null)) n = !0;
        else {
            let g = u(module.bundle.root, a);
            if (g.length === 0) {
                n = !1;
                break;
            }
            r.push(...g);
        }
    }
    return n;
}
function C(e, t, o) {
    let { modules: r } = e;
    if (!r) return !1;
    if (o && !o[e.HMR_BUNDLE_ID]) return e.parent ? R(e.parent, t, o) : !0;
    if (i.checkedAssets[t]) return !0;
    i.checkedAssets[t] = !0;
    let n = e.cache[t];
    return i.assetsToDispose.push([
        e,
        t
    ]), !n || n.hot && n.hot._acceptCallbacks.length ? (i.assetsToAccept.push([
        e,
        t
    ]), !0) : !1;
}
function M(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function ee(e) {
    if (e.type === "js" && typeof document < "u") return new Promise((t, o)=>{
        let r = document.createElement("script");
        r.src = `${e.url}?t=${Date.now()}`, e.outputFormat === "esmodule" && (r.type = "module"), r.addEventListener("load", ()=>t(r)), r.addEventListener("error", ()=>o(new Error(`Failed to download asset: ${e.id}`))), document.head?.appendChild(r);
    });
}
async function O(e) {
    global.parcelHotUpdate = Object.create(null), e.forEach((o)=>{
        o.url = d.runtime.getURL("/__plasmo_hmr_proxy__?url=" + encodeURIComponent(`${o.url}?t=${Date.now()}`));
    });
    let t = await Promise.all(e.map(ee));
    try {
        e.forEach(function(o) {
            $(module.bundle.root, o);
        });
    } finally{
        delete global.parcelHotUpdate, t && t.forEach((o)=>{
            o && document.head?.removeChild(o);
        });
    }
}
function te(e) {
    let t = e.cloneNode();
    t.onload = function() {
        e.parentNode !== null && e.parentNode.removeChild(e);
    }, t.setAttribute("href", e.getAttribute("href").split("?")[0] + "?" + Date.now()), e.parentNode.insertBefore(t, e.nextSibling);
}
var E = null;
function oe() {
    E || (E = setTimeout(function() {
        let e = document.querySelectorAll('link[rel="stylesheet"]');
        for(var t = 0; t < e.length; t++){
            let o = e[t].getAttribute("href"), r = w(), n = r === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + f()).test(o) : o.indexOf(r + ":" + f());
            /^https?:\/\//i.test(o) && o.indexOf(location.origin) !== 0 && !n || te(e[t]);
        }
        E = null;
    }, 47));
}
function $(e, t) {
    let { modules: o } = e;
    if (o) {
        if (t.type === "css") oe();
        else if (t.type === "js") {
            let r = t.depsByBundle[e.HMR_BUNDLE_ID];
            if (r) {
                if (o[t.id]) {
                    let s = o[t.id][1];
                    for(let a in s)if (!r[a] || r[a] !== s[a]) {
                        let l = s[a];
                        u(module.bundle.root, l).length === 1 && b(module.bundle.root, l);
                    }
                }
                let n = global.parcelHotUpdate[t.id];
                o[t.id] = [
                    n,
                    r
                ];
            } else e.parent && $(e.parent, t);
        }
    }
}
function b(e, t) {
    let o = e.modules;
    if (o) {
        if (o[t]) {
            let r = o[t][1], n = [];
            for(let s in r)u(module.bundle.root, r[s]).length === 1 && n.push(r[s]);
            delete o[t], delete e.cache[t], n.forEach((s)=>{
                b(module.bundle.root, s);
            });
        } else e.parent && b(e.parent, t);
    }
}
function v(e, t) {
    let o = e.cache[t];
    e.hotData[t] = {}, o && o.hot && (o.hot.data = e.hotData[t]), o && o.hot && o.hot._disposeCallbacks.length && o.hot._disposeCallbacks.forEach(function(r) {
        r(e.hotData[t]);
    }), delete e.cache[t];
}
function I(e, t) {
    e(t);
    let o = e.cache[t];
    if (o && o.hot && o.hot._acceptCallbacks.length) {
        let r = u(module.bundle.root, t);
        o.hot._acceptCallbacks.forEach(function(n) {
            let s = n(()=>r);
            s && s.length && (s.forEach(([a, l])=>{
                v(a, l);
            }), i.assetsToAccept.push.apply(i.assetsToAccept, s));
        });
    }
}
function re(e = f()) {
    let t = L();
    return `${c.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function ne(e) {
    typeof e.message == "string" && k("[plasmo/parcel-runtime]: " + e.message);
}
function N(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(re());
    return t.addEventListener("message", async function(o) {
        let r = JSON.parse(o.data);
        if (r.type === "update" && await e(r.assets), r.type === "error") for (let n of r.diagnostics.ansi){
            let s = n.codeframe || n.stack;
            A("[plasmo/parcel-runtime]: " + n.message + `
` + s + `

` + n.hints.join(`
`));
        }
    }), t.addEventListener("error", ne), t.addEventListener("open", ()=>{
        T(`[plasmo/parcel-runtime]: Connected to HMR server for ${c.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        A(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${c.entryFilePath}`);
    }), t;
}
var j = z(require("bbdc6136f2c2dec"));
async function F() {
    j.default.injectIntoGlobalHook(window), window.$RefreshReg$ = function() {}, window.$RefreshSig$ = function() {
        return function(e) {
            return e;
        };
    };
}
var se = `${S}${module.id}__`, h, U = module.bundle.parent;
if (!U || !U.isParcelRequire) {
    try {
        h = d?.runtime.connect({
            name: se
        }), h.onDisconnect.addListener(()=>{
            m();
        }), c.isReact || h.onMessage.addListener(()=>{
            m();
        });
    } catch (e) {
        p(e);
    }
    N(async (e)=>{
        if (p("Page runtime - On HMR Update"), c.isReact) {
            B();
            let t = e.filter((r)=>r.envHash === c.envHash);
            if (t.some((r)=>r.type === "css" || r.type === "js" && R(module.bundle.root, r.id, r.depsByBundle))) try {
                await O(t);
                let r = {};
                for (let [s, a] of i.assetsToDispose)r[a] || (v(s, a), r[a] = !0);
                let n = {};
                for(let s = 0; s < i.assetsToAccept.length; s++){
                    let [a, l] = i.assetsToAccept[s];
                    n[l] || (I(a, l), n[l] = !0);
                }
            } catch (r) {
                c.verbose === "true" && (console.trace(r), alert(JSON.stringify(r))), await m(!0);
            }
        } else {
            let t = e.filter((o)=>o.envHash === c.envHash).some((o)=>M(module.bundle, o.id));
            p("Page runtime -", {
                sourceChanged: t
            }), t && h.postMessage({
                __plasmo_page_changed__: !0
            });
        }
    });
}
c.isReact && (p("Injecting react refresh"), F());

},{"bbdc6136f2c2dec":"iZhE1"}],"iZhE1":[function(require,module,exports) {
var oe = Object.create;
var H = Object.defineProperty;
var ae = Object.getOwnPropertyDescriptor;
var ue = Object.getOwnPropertyNames;
var se = Object.getPrototypeOf, le = Object.prototype.hasOwnProperty;
var z = (o, f)=>()=>(f || o((f = {
            exports: {}
        }).exports, f), f.exports), ce = (o, f)=>{
    for(var s in f)H(o, s, {
        get: f[s],
        enumerable: !0
    });
}, D = (o, f, s, y)=>{
    if (f && typeof f == "object" || typeof f == "function") for (let m of ue(f))!le.call(o, m) && m !== s && H(o, m, {
        get: ()=>f[m],
        enumerable: !(y = ae(f, m)) || y.enumerable
    });
    return o;
}, S = (o, f, s)=>(D(o, f, "default"), s && D(s, f, "default")), G = (o, f, s)=>(s = o != null ? oe(se(o)) : {}, D(f || !o || !o.__esModule ? H(s, "default", {
        value: o,
        enumerable: !0
    }) : s, o)), de = (o)=>D(H({}, "__esModule", {
        value: !0
    }), o);
var N = z((h)=>{
    "use strict";
    (function() {
        "use strict";
        var o = Symbol.for("react.forward_ref"), f = Symbol.for("react.memo"), s = typeof WeakMap == "function" ? WeakMap : Map, y = new Map, m = new s, b = new s, j = new s, E = [], C = new Map, O = new Map, p = new Set, _ = new Set, F = typeof WeakMap == "function" ? new WeakMap : null, T = !1;
        function B(e) {
            if (e.fullKey !== null) return e.fullKey;
            var r = e.ownKey, n;
            try {
                n = e.getCustomHooks();
            } catch (i) {
                return e.forceReset = !0, e.fullKey = r, r;
            }
            for(var t = 0; t < n.length; t++){
                var l = n[t];
                if (typeof l != "function") return e.forceReset = !0, e.fullKey = r, r;
                var d = b.get(l);
                if (d !== void 0) {
                    var a = B(d);
                    d.forceReset && (e.forceReset = !0), r += "\n---\n" + a;
                }
            }
            return e.fullKey = r, r;
        }
        function q(e, r) {
            var n = b.get(e), t = b.get(r);
            return n === void 0 && t === void 0 ? !0 : !(n === void 0 || t === void 0 || B(n) !== B(t) || t.forceReset);
        }
        function $(e) {
            return e.prototype && e.prototype.isReactComponent;
        }
        function k(e, r) {
            return $(e) || $(r) ? !1 : !!q(e, r);
        }
        function Y(e) {
            return j.get(e);
        }
        function Z(e) {
            var r = new Map;
            return e.forEach(function(n, t) {
                r.set(t, n);
            }), r;
        }
        function W(e) {
            var r = new Set;
            return e.forEach(function(n) {
                r.add(n);
            }), r;
        }
        function M(e, r) {
            try {
                return e[r];
            } catch (n) {
                return;
            }
        }
        function J() {
            if (E.length === 0 || T) return null;
            T = !0;
            try {
                var e = new Set, r = new Set, n = E;
                E = [], n.forEach(function(u) {
                    var c = u[0], v = u[1], R = c.current;
                    j.set(R, c), j.set(v, c), c.current = v, k(R, v) ? r.add(c) : e.add(c);
                });
                var t = {
                    updatedFamilies: r,
                    staleFamilies: e
                };
                C.forEach(function(u) {
                    u.setRefreshHandler(Y);
                });
                var l = !1, d = null, a = W(_), i = W(p), g = Z(O);
                if (a.forEach(function(u) {
                    var c = g.get(u);
                    if (c === void 0) throw new Error("Could not find helpers for a root. This is a bug in React Refresh.");
                    if (_.has(u), F !== null && F.has(u)) {
                        var v = F.get(u);
                        try {
                            c.scheduleRoot(u, v);
                        } catch (R) {
                            l || (l = !0, d = R);
                        }
                    }
                }), i.forEach(function(u) {
                    var c = g.get(u);
                    if (c === void 0) throw new Error("Could not find helpers for a root. This is a bug in React Refresh.");
                    p.has(u);
                    try {
                        c.scheduleRefresh(u, t);
                    } catch (v) {
                        l || (l = !0, d = v);
                    }
                }), l) throw d;
                return t;
            } finally{
                T = !1;
            }
        }
        function P(e, r) {
            if (e === null || typeof e != "function" && typeof e != "object" || m.has(e)) return;
            var n = y.get(r);
            if (n === void 0 ? (n = {
                current: e
            }, y.set(r, n)) : E.push([
                n,
                e
            ]), m.set(e, n), typeof e == "object" && e !== null) switch(M(e, "$$typeof")){
                case o:
                    P(e.render, r + "$render");
                    break;
                case f:
                    P(e.type, r + "$type");
                    break;
            }
        }
        function K(e, r) {
            var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, t = arguments.length > 3 ? arguments[3] : void 0;
            if (b.has(e) || b.set(e, {
                forceReset: n,
                ownKey: r,
                fullKey: null,
                getCustomHooks: t || function() {
                    return [];
                }
            }), typeof e == "object" && e !== null) switch(M(e, "$$typeof")){
                case o:
                    K(e.render, r, n, t);
                    break;
                case f:
                    K(e.type, r, n, t);
                    break;
            }
        }
        function x(e) {
            var r = b.get(e);
            r !== void 0 && B(r);
        }
        function Q(e) {
            return y.get(e);
        }
        function X(e) {
            return m.get(e);
        }
        function ee(e) {
            var r = new Set;
            return p.forEach(function(n) {
                var t = O.get(n);
                if (t === void 0) throw new Error("Could not find helpers for a root. This is a bug in React Refresh.");
                var l = t.findHostInstancesForRefresh(n, e);
                l.forEach(function(d) {
                    r.add(d);
                });
            }), r;
        }
        function re(e) {
            var r = e.__REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (r === void 0) {
                var n = 0;
                e.__REACT_DEVTOOLS_GLOBAL_HOOK__ = r = {
                    renderers: new Map,
                    supportsFiber: !0,
                    inject: function(a) {
                        return n++;
                    },
                    onScheduleFiberRoot: function(a, i, g) {},
                    onCommitFiberRoot: function(a, i, g, u) {},
                    onCommitFiberUnmount: function() {}
                };
            }
            if (r.isDisabled) {
                console.warn("Something has shimmed the React DevTools global hook (__REACT_DEVTOOLS_GLOBAL_HOOK__). Fast Refresh is not compatible with this shim and will be disabled.");
                return;
            }
            var t = r.inject;
            r.inject = function(a) {
                var i = t.apply(this, arguments);
                return typeof a.scheduleRefresh == "function" && typeof a.setRefreshHandler == "function" && C.set(i, a), i;
            }, r.renderers.forEach(function(a, i) {
                typeof a.scheduleRefresh == "function" && typeof a.setRefreshHandler == "function" && C.set(i, a);
            });
            var l = r.onCommitFiberRoot, d = r.onScheduleFiberRoot || function() {};
            r.onScheduleFiberRoot = function(a, i, g) {
                return T || (_.delete(i), F !== null && F.set(i, g)), d.apply(this, arguments);
            }, r.onCommitFiberRoot = function(a, i, g, u) {
                var c = C.get(a);
                if (c !== void 0) {
                    O.set(i, c);
                    var v = i.current, R = v.alternate;
                    if (R !== null) {
                        var L = R.memoizedState != null && R.memoizedState.element != null && p.has(i), A = v.memoizedState != null && v.memoizedState.element != null;
                        !L && A ? (p.add(i), _.delete(i)) : L && A || (L && !A ? (p.delete(i), u ? _.add(i) : O.delete(i)) : !L && !A && u && _.add(i));
                    } else p.add(i);
                }
                return l.apply(this, arguments);
            };
        }
        function ne() {
            return !1;
        }
        function te() {
            return p.size;
        }
        function fe() {
            var e, r, n = !1;
            return function(t, l, d, a) {
                if (typeof l == "string") return e || (e = t, r = typeof a == "function"), t != null && (typeof t == "function" || typeof t == "object") && K(t, l, d, a), t;
                !n && r && (n = !0, x(e));
            };
        }
        function ie(e) {
            switch(typeof e){
                case "function":
                    if (e.prototype != null) {
                        if (e.prototype.isReactComponent) return !0;
                        var r = Object.getOwnPropertyNames(e.prototype);
                        if (r.length > 1 || r[0] !== "constructor" || e.prototype.__proto__ !== Object.prototype) return !1;
                    }
                    var n = e.name || e.displayName;
                    return typeof n == "string" && /^[A-Z]/.test(n);
                case "object":
                    if (e != null) switch(M(e, "$$typeof")){
                        case o:
                        case f:
                            return !0;
                        default:
                            return !1;
                    }
                    return !1;
                default:
                    return !1;
            }
        }
        h._getMountedRootCount = te, h.collectCustomHooksForSignature = x, h.createSignatureFunctionForTransform = fe, h.findAffectedHostInstances = ee, h.getFamilyByID = Q, h.getFamilyByType = X, h.hasUnrecoverableErrors = ne, h.injectIntoGlobalHook = re, h.isLikelyComponentType = ie, h.performReactRefresh = J, h.register = P, h.setSignature = K;
    })();
});
var I = z((pe, V)=>{
    "use strict";
    V.exports = N();
});
var w = {};
ce(w, {
    default: ()=>he
});
module.exports = de(w);
var U = G(I());
S(w, G(I()), module.exports);
var he = U.default; /*! Bundled license information:

react-refresh/cjs/react-refresh-runtime.development.js:
  (**
   * @license React
   * react-refresh-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/ 

},{}],"dGTei":[function(require,module,exports) {
/**
 * Parcel module id: 7FMtF
 * Resolved path: src/contents/sites/workable/rules.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/sites/workable/phone-country-code -> 5lsEB  =>  src/contents/sites/workable/phone-country-code.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getRules", ()=>s), n.export(r, "getEduRules", ()=>u), n.export(r, "getExpRules", ()=>c), n.export(r, "extractSingleCheckbox", ()=>b), n.export(r, "extractCheckbox", ()=>C), n.export(r, "getWorkableSalaryFieldType", ()=>k), n.export(r, "isWorkablePhoneInput", ()=>T), n.export(r, "expandWorkablePhoneRule", ()=>F), n.export(r, "getWorkableLabelMeta", ()=>I), n.export(r, "getWorkableCoverLetterStatus", ()=>j), n.export(r, "getTypingSteps", ()=>P), n.export(r, "getSubmitButtonText", ()=>_), n.export(r, "getWorkableSubmitButtonSelector", ()=>L), n.export(r, "getEducationRules", ()=>R), n.export(r, "getExperienceRules", ()=>O), n.export(r, "getLatestSavedEducationFocusRule", ()=>$), n.export(r, "getLatestSavedExperienceFocusRule", ()=>B), n.export(r, "getFormSnapshot", ()=>q);
var o = e("~contents/sites/workable/phone-country-code"), i = e("~core/enums"), a = e("~core/xpath"), l = e("~utils/delay");
async function s() {
    let e1 = Array.from(document.querySelectorAll("section[data-ui='section']>[data-ui='section-fields']")).flatMap((e1)=>Array.from(e1?.children).filter((e1)=>e1 instanceof HTMLElement)), t = [];
    for (let r1 of e1){
        if ("education" === r1.dataset.ui) {
            let e1 = await d(r1);
            e1 && t.push(...e1);
            continue;
        }
        if ("experience" === r1.dataset.ui) {
            let e1 = await f(r1);
            e1 && t.push(...e1);
            continue;
        }
        let e1 = await p(r1);
        e1 && t.push(...F(e1));
    }
    return t;
}
async function u() {
    let e1 = Array.from(document.querySelectorAll("section[data-ui='section']>[data-ui='section-fields']")).flatMap((e1)=>Array.from(e1?.children).filter((e1)=>e1 instanceof HTMLElement)), t = [];
    for (let r1 of e1)if ("education" === r1.dataset.ui) {
        let e1 = await d(r1);
        e1 && t.push(...e1);
    }
    return t;
}
async function c() {
    let e1 = Array.from(document.querySelectorAll("section[data-ui='section']>[data-ui='section-fields']")).flatMap((e1)=>Array.from(e1?.children).filter((e1)=>e1 instanceof HTMLElement)), t = [];
    for (let r1 of e1)if ("experience" === r1.dataset.ui) {
        let e1 = await f(r1);
        e1 && t.push(...e1);
    }
    return t;
}
async function d(e1) {
    if ("education" !== e1.dataset.ui) return null;
    let t = Array.from(e1.querySelectorAll("ul>li [data-ui='editor']")).filter((e1)=>e1 instanceof HTMLElement);
    if (!t?.length) return null;
    let r1 = [];
    for (let e1 of t){
        let t = Array.from(e1.children).filter((e1)=>e1 instanceof HTMLElement), n = [];
        for (let e1 of t){
            let t = await p(e1);
            t && n.push(t);
        }
        n.length && r1.push({
            type: i.FIELD_TYPE.EDUCATION,
            label: "education",
            children: n,
            options: [
                ...n.map((e1)=>({
                        type: e1.type,
                        label: e1.label,
                        options: e1.options || []
                    }))
            ],
            $input: e1,
            $label: e1,
            required: !1
        });
    }
    return r1;
}
async function f(e1) {
    if ("experience" !== e1.dataset.ui) return null;
    let t = Array.from(e1.querySelectorAll("ul>li [data-ui='editor']")).filter((e1)=>e1 instanceof HTMLElement);
    if (!t?.length) return null;
    let r1 = [];
    for (let e1 of t){
        let t = Array.from(e1.children).filter((e1)=>e1 instanceof HTMLElement), n = [];
        for (let e1 of t){
            let t = await p(e1);
            t && n.push(t);
        }
        let o = y(e1);
        o && n.push(o), n.length && r1.push({
            type: i.FIELD_TYPE.EMPLOYMENT,
            label: "experience",
            children: n,
            options: [
                ...n.map((e1)=>({
                        type: e1.type,
                        label: e1.label,
                        options: e1.options || []
                    }))
            ],
            $input: e1,
            $label: e1,
            required: !1
        });
    }
    return r1;
}
async function p(e1) {
    return e1 instanceof HTMLElement && ("absolute" !== e1.style.position || "1px" !== e1.style.width || "hidden" !== e1.style.overflow) ? C(e1) || b(e1) || await A(e1) || D(e1) : null;
}
function m(e1) {
    return (e1 || "").replace(/\s+/g, " ").replace(/^\*\s*/, "").trim();
}
function h(e1) {
    let t = e1?.getAttribute?.("aria-labelledby");
    return t ? t.split(/\s+/).map((e1)=>document.getElementById(e1)?.textContent || "").join(" ").replace(/\s+/g, " ").trim() : "";
}
function g(e1) {
    let t = h(e1);
    if (t) return t;
    let r1 = "function" == typeof e1.closest ? e1.closest("[role='checkbox'], [role='radio']") : null;
    return h(r1);
}
function b(e1) {
    let t = Array.from(e1.querySelectorAll("input[type='checkbox']"));
    if (1 !== t.length) return null;
    let r1 = t[0];
    if (r1.closest("fieldset, [role='group'], [role='radiogroup'], [data-ui='experience']")) return null;
    let n = r1.closest("label") || e1.querySelector("label") || e1, o = [
        r1.getAttribute("aria-label"),
        g(r1),
        r1.labels?.[0]?.textContent ?? "",
        n.textContent,
        e1.textContent
    ].map(m).find(Boolean);
    return o ? {
        type: i.FIELD_TYPE.CHECKBOX,
        label: o,
        required: r1.required || "true" === r1.getAttribute("aria-required") || /^\s*\*/.test(n.textContent || e1.textContent || ""),
        $checkboxs: t,
        $input: r1,
        options: [
            o
        ],
        $label: n
    } : null;
}
function y(e1) {
    let t = (0, a.getFirstOrderedNode)("//div[@role='checkbox' and @aria-labelledby='checkbox_label_current']", e1);
    if (t) {
        let e1 = (0, a.getFirstOrderedNode)("following-sibling::span", t);
        if (!e1) return null;
        let r1 = Array.from(t.querySelectorAll("input[type='checkbox']"));
        return {
            type: i.FIELD_TYPE.CHECKBOX,
            label: e1.textContent?.trim(),
            required: !0,
            $checkboxs: r1,
            $input: r1[0],
            options: [
                e1.textContent?.trim() || ""
            ],
            $label: e1
        };
    }
}
function v(e1, t) {
    let r1 = e1.parentElement;
    for(; r1;){
        if (r1 === t) return !0;
        r1 = r1.parentElement;
    }
    return !1;
}
function w(e1, t) {
    return Array.from(e1.querySelectorAll("[id]")).find((e1)=>e1.id === t) || null;
}
function S(e1, t) {
    return (e1.getAttribute("aria-labelledby") || "").split(/\s+/).map((e1)=>w(t, e1)).filter((t)=>!!t && !v(t, e1)).map((e1)=>e1.innerText || e1.textContent || "").join(" ");
}
_c = S;
function E(e1) {
    let t = e1.querySelector("[data-radioLabel], span[id]");
    return (t?.innerText || t?.textContent || e1.innerText || e1.textContent || "").replace(/\s+/g, " ").trim();
}
_c1 = E;
function x(e1) {
    let t = e1.closest("label")?.querySelector("span[id]");
    return (t?.innerText || t?.textContent || "").replace(/\s+/g, " ").trim();
}
function C(e1) {
    let t = e1.querySelector("fieldset[role='radiogroup'], div[role='radiogroup'], [role='group']");
    if (!t) return null;
    let r1 = (S(t, e1) || Array.from(e1.querySelectorAll("span[id]")).find((e1)=>!v(e1, t))?.textContent || "").replace(/\s+/g, " ").replace(/^\*\s*/, "").trim();
    if (!r1) return null;
    let n = [], o = [], a = Array.from(t.querySelectorAll("[role='radio'], [role='checkbox'], [data-ui='option']"));
    for (let e1 of a){
        let t = e1.querySelector("input[type='radio'], input[type='checkbox']"), r1 = "checkbox" === e1.getAttribute("role") && t ? x(t) : E(e1);
        t && r1 && (n.push(r1), o.push(t));
    }
    if (!o.length) return null;
    let l = o.some((e1)=>e1.required || "true" === e1.getAttribute("aria-required")) || "true" === t.getAttribute("aria-required") || /(^|\s)\*/.test(e1.innerText || e1.textContent || "");
    return {
        type: i.FIELD_TYPE.CHECKBOX,
        label: r1,
        required: l,
        $checkboxs: o,
        options: n,
        $input: o[0],
        $label: t
    };
}
_c2 = C;
async function A(e1) {
    let t = e1.querySelector("div");
    if (!t) return null;
    let r1 = t.querySelector("span");
    if (!r1) return null;
    let n = r1.querySelector("span[id]"), o = n?.textContent?.trim() || r1?.textContent?.trim();
    if (!o || "Country" === o) return null;
    let a = r1?.textContent?.trim()?.startsWith("*") || !1;
    a && (o = o.replace("*", "").trim());
    let s = t.querySelector('div[data-input-type="select"]');
    if (!s) return null;
    let u = s.querySelector('input[type="text"]');
    if (!u) return null;
    u.click(), await (0, l.delay)(400);
    let c = s.innerText.trim(), d = c.split("\n").filter((e1)=>"" !== e1);
    if (document.dispatchEvent(new MouseEvent("mouseup", {
        bubbles: !0,
        cancelable: !0,
        view: window
    })), !d.length) return null;
    let f = Array.from(t.querySelectorAll("input"));
    if (!f?.length) return null;
    let p = f[f.length - 1];
    return p ? {
        type: i.FIELD_TYPE.SELECT,
        label: o,
        required: a,
        options: d,
        $input: p,
        $label: t
    } : null;
}
_c3 = A;
function k(e1) {
    let t = (e1 || "").toLowerCase();
    return /\b(salary|compensation|pay)\b/.test(t) ? /\b(range|minimum and maximum|min and max)\b/.test(t) ? i.FIELD_TYPE.TEXT : i.FIELD_TYPE.NUMBER : i.FIELD_TYPE.TEXT;
}
function T(e1) {
    if (!e1) return !1;
    if ("tel" === (e1.type || "").toLowerCase()) return !0;
    let t = (e1.name || "").toLowerCase(), r1 = (e1.id || "").toLowerCase();
    return !!(t.includes("phone") || r1.includes("phone") || "function" == typeof e1.closest && e1.closest(".iti"));
}
_c4 = T;
function F(e1) {
    if (e1.type !== i.FIELD_TYPE.TEXT || !T(e1.$input)) return [
        e1
    ];
    let t = (0, o.getWorkablePhoneCountryContainer)(e1.$input), r1 = t?.querySelector("button.iti__selected-country, .iti__selected-flag[role='combobox']");
    if (!t || !r1) return [
        e1
    ];
    let n = (0, o.getWorkablePhoneCountryOptions)(t);
    if (!n.length) return [
        e1
    ];
    let a = {
        ...e1,
        description: o.WORKABLE_PHONE_WITH_COUNTRY_CODE_DESCRIPTION
    };
    return [
        a,
        {
            type: i.FIELD_TYPE.SELECT,
            label: o.WORKABLE_PHONE_COUNTRY_CODE_LABEL,
            required: e1.required,
            options: n.map(o.formatWorkablePhoneCountryOption),
            $input: e1.$input,
            $label: r1
        }
    ];
}
_c5 = F;
function I(e1) {
    if (!e1) return {
        labelText: null,
        required: !1
    };
    let t = e1.querySelector("span");
    if (!t) return {
        labelText: null,
        required: !1
    };
    let r1 = t.querySelector("span[id]"), n = r1?.textContent?.trim() || t?.textContent?.trim() || null;
    if (!n) return {
        labelText: null,
        required: !1
    };
    let o = t.textContent?.trim()?.startsWith("*") || !1;
    return o && (n = n.replace("*", "").trim()), {
        labelText: n = n.replace(/\s+/g, " ").trim(),
        required: o
    };
}
_c6 = I;
function j(e1) {
    let t = e1.querySelector('textarea[data-ui="cover_letter"], textarea#cover_letter');
    if (!t) return "";
    let { required: r1 } = I(t.closest("label"));
    return r1 ? "required" : "optional";
}
function D(e1) {
    let t = e1.querySelector("div>label");
    if (!t) return null;
    let { labelText: r1, required: n } = I(t);
    if (!r1) return null;
    if ("Date" === r1) {
        let e1 = t.querySelector("span span[id]");
        if (e1) {
            let t = (0, a.getFirstOrderedNode)('ancestor::section[@data-ui="section"]//h2', e1);
            if (t && t.textContent?.trim() === "Details") return null;
        }
    }
    let o = e1.querySelector("input, textarea");
    return o ? {
        type: k(r1),
        label: r1,
        required: n,
        $input: o,
        $label: t
    } : null;
}
_c7 = D;
function P(e1) {
    let t = e1 ?? "", r1 = [];
    for(let e1 = 0; e1 < t.length; e1++)r1.push({
        char: t[e1],
        valueSoFar: t.slice(0, e1 + 1)
    });
    return r1;
}
_c8 = P;
function _() {
    return "Submit application";
}
function L() {
    return `.//*[@data-ui="apply-button"] | .//button[contains(., "${_()}")]`;
}
_c9 = L;
function R() {
    let e1 = document.querySelector("div[data-ui='education']");
    if (!e1) return [];
    let t = Array.from(e1.querySelectorAll("ul > li")), r1 = [];
    return t.forEach((e1)=>{
        let t = [], n = e1.querySelectorAll("dl");
        if (n.forEach((e1)=>{
            let r1 = e1.querySelector("dt"), n = e1.querySelector("dd");
            if (r1 && n) {
                let e1 = r1.innerText.replace(":", "").trim();
                t.push({
                    type: i.FIELD_TYPE.TEXT,
                    label: e1,
                    $label: r1,
                    $input: n,
                    required: !1
                });
            }
        }), 0 === t.length) {
            let r1 = e1.querySelectorAll("[data-ui='editor'] .styles--36XiB, .field-wrapper");
            r1.forEach((e1)=>{
                let r1 = e1.querySelector("label"), n = e1.querySelector("input, textarea, select");
                r1 && n && t.push({
                    type: i.FIELD_TYPE.TEXT,
                    label: r1.innerText.replace(":", "").trim(),
                    $label: r1,
                    $input: n,
                    required: !1
                });
            });
        }
        t.length > 0 && r1.push({
            type: i.FIELD_TYPE.EDUCATION,
            label: "education",
            children: t,
            $input: e1,
            required: !1,
            options: []
        });
    }), r1;
}
_c10 = R;
function O() {
    let e1 = document.querySelector("div[data-ui='experience'], section[data-ui='experience']");
    if (!e1) return [];
    let t = Array.from(e1.querySelectorAll("ul > li")), r1 = [];
    return t.forEach((e1)=>{
        let t = [], n = e1.querySelectorAll("dl");
        if (n.forEach((e1)=>{
            let r1 = e1.querySelector("dt"), n = e1.querySelector("dd");
            if (r1 && n) {
                let e1 = r1.innerText.trim();
                t.push({
                    type: i.FIELD_TYPE.TEXT,
                    label: e1,
                    $label: r1,
                    $input: n,
                    required: !1
                });
            }
        }), 0 === t.length) {
            let r1 = e1.querySelectorAll(".styles--36XiB, .field-wrapper");
            r1.forEach((e1)=>{
                let r1 = e1.querySelector("label"), n = e1.querySelector("input, textarea, select");
                r1 && n && t.push({
                    type: i.FIELD_TYPE.TEXT,
                    label: r1.innerText.trim(),
                    $label: r1,
                    $input: n,
                    required: !1
                });
            });
        }
        t.length > 0 && r1.push({
            type: i.FIELD_TYPE.EMPLOYMENT,
            label: "workExperience",
            children: t,
            $input: e1,
            required: !1,
            options: []
        });
    }), r1;
}
_c11 = O;
function M(e1) {
    return String(e1 || "").replace(/:/g, "").replace(/\s+/g, " ").trim().toLowerCase();
}
_c12 = M;
function N(e1, t) {
    if (!t || !("children" in t)) return null;
    let r1 = e1.find((e1)=>{
        let t = "$input" in e1 ? e1.$input : null;
        return !!(t && "function" == typeof t.querySelector && t.querySelector("[data-ui='edit-section']"));
    });
    if (!r1 || !("children" in r1) || !("$input" in r1)) return null;
    let n = r1.$input, o = r1.children, i = t.children.map((e1)=>{
        let t = o.find((t)=>M(t.label) === M(e1.label)), r1 = t && "$input" in t ? t.$input : n, i = t && "$label" in t ? t.$label : n;
        return {
            type: e1.type,
            label: e1.label,
            required: e1.required,
            $input: r1,
            $label: i
        };
    });
    return {
        type: t.type,
        label: t.label,
        required: t.required,
        options: "options" in t ? t.options : [],
        $input: n,
        $label: n,
        children: i
    };
}
_c13 = N;
function $(e1) {
    return N(R(), e1);
}
function B(e1) {
    return N(O(), e1);
}
_c14 = B;
async function q(e1) {
    let t = {};
    for (let r1 of e1)r1.type !== i.FIELD_TYPE.EDUCATION && r1.type !== i.FIELD_TYPE.EMPLOYMENT && "$input" in r1 && r1.$input && (t[r1.label] = U(r1));
    let r1 = R();
    r1.length > 0 && (t.education = r1.map((e1)=>{
        let t = {};
        return e1.children.forEach((e1)=>{
            t[e1.label] = U(e1);
        }), t;
    }));
    let n = O();
    return n.length > 0 && (t.employment = n.map((e1)=>{
        let t = {};
        return e1.children.forEach((e1)=>{
            t[e1.label] = U(e1);
        }), t;
    })), t;
}
function U(e1) {
    let { $input: t, type: r1, $checkboxs: n, options: a } = e1;
    if (!t) return "";
    if (e1.label === o.WORKABLE_PHONE_COUNTRY_CODE_LABEL) {
        let e1 = (0, o.getWorkablePhoneCountryContainer)(t);
        return e1 ? (0, o.readWorkableSelectedPhoneCountry)(e1) : "";
    }
    if (r1 === i.FIELD_TYPE.CHECKBOX) {
        if (n && n.length > 0) {
            let e1 = n.map((e1, t)=>e1.checked ? a?.[t] || "Checked" : null).filter(Boolean);
            return 1 === e1.length ? e1[0] : e1;
        }
        return t.checked || !1;
    }
    if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) return t.value || "";
    let l = t.innerText?.trim() || t.textContent?.trim() || "";
    return l;
}
_c15 = U;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
$RefreshReg$(_c, "S");
$RefreshReg$(_c1, "E");
$RefreshReg$(_c2, "C");
$RefreshReg$(_c3, "A");
$RefreshReg$(_c4, "T");
$RefreshReg$(_c5, "F");
$RefreshReg$(_c6, "I");
$RefreshReg$(_c7, "D");
$RefreshReg$(_c8, "P");
$RefreshReg$(_c9, "L");
$RefreshReg$(_c10, "R");
$RefreshReg$(_c11, "O");
$RefreshReg$(_c12, "M");
$RefreshReg$(_c13, "N");
$RefreshReg$(_c14, "B");
$RefreshReg$(_c15, "U");

},{}]},["9iXSw","dGTei"], "dGTei", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLElBQUUsT0FBTztBQUFPLElBQUksSUFBRSxPQUFPO0FBQWUsSUFBSSxJQUFFLE9BQU87QUFBeUIsSUFBSSxJQUFFLE9BQU87QUFBb0IsSUFBSSxJQUFFLE9BQU8sZ0JBQWUsSUFBRSxPQUFPLFVBQVU7QUFBZSxJQUFJLElBQUUsQ0FBQyxHQUFFLEdBQUUsR0FBRTtJQUFLLElBQUcsS0FBRyxPQUFPLEtBQUcsWUFBVSxPQUFPLEtBQUcsWUFBVyxLQUFJLElBQUksS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRSxNQUFJLE1BQUksS0FBRyxFQUFFLEdBQUUsR0FBRTtRQUFDLEtBQUksSUFBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBRSxDQUFBLElBQUUsRUFBRSxHQUFFLEVBQUMsS0FBSSxFQUFFO0lBQVU7SUFBRyxPQUFPO0FBQUM7QUFBRSxJQUFJLElBQUUsQ0FBQyxHQUFFLEdBQUUsSUFBSyxDQUFBLElBQUUsS0FBRyxPQUFLLEVBQUUsRUFBRSxNQUFJLENBQUMsR0FBRSxFQUFFLEtBQUcsQ0FBQyxLQUFHLENBQUMsRUFBRSxhQUFXLEVBQUUsR0FBRSxXQUFVO1FBQUMsT0FBTTtRQUFFLFlBQVcsQ0FBQztJQUFDLEtBQUcsR0FBRSxFQUFDO0FBQUcsSUFBSSxJQUFFLFdBQVcsU0FBUyxRQUFNLEVBQUU7QUFBQyxJQUFJLElBQUUsSUFBSSxXQUFXLFNBQVMsT0FBSyxDQUFDO0FBQUUsSUFBSSxJQUFFLElBQUksSUFBSSxJQUFHLElBQUUsQ0FBQSxJQUFHLEVBQUUsSUFBSSxJQUFHLEtBQUcsRUFBRSxPQUFPLENBQUEsSUFBRyxFQUFFLFdBQVcsU0FBTyxFQUFFLFNBQVMsTUFBTSxJQUFJLENBQUEsSUFBRyxFQUFFLE1BQU0sTUFBTSxPQUFPLENBQUMsR0FBRSxDQUFDLEdBQUUsRUFBRSxHQUFJLENBQUEsQ0FBQyxDQUFDLEVBQUUsR0FBQyxHQUFFLENBQUEsR0FBRyxDQUFDO0FBQUcsSUFBSSxLQUFHLEVBQUUsY0FBYSxJQUFFLElBQUksRUFBRSxnQkFBYyxJQUFJLFlBQVUsUUFBTyxLQUFHO0FBQUksSUFBSSxJQUFFLENBQUMsSUFBRSxFQUFFLEVBQUMsR0FBRyxJQUFJLFFBQVEsSUFBSSxFQUFFLE9BQU8sSUFBRyxRQUFPO0FBQUcsSUFBSSxJQUFFLENBQUMsR0FBRyxJQUFJLFFBQVEsTUFBTSxxQkFBa0IsT0FBTyxJQUFHLFFBQU8sSUFBRyxJQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsd0JBQW9CLElBQUcsSUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLHdCQUFvQixJQUFHLElBQUUsR0FBRSxJQUFFLENBQUMsR0FBRyxJQUFJLE9BQUssRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSTtBQUFHLElBQUksSUFBRTtJQUFDLG1CQUFrQjtJQUFNLGdCQUFlO0lBQU0sV0FBVTtJQUFNLFlBQVc7UUFBQztLQUFlO0lBQUMsUUFBTztJQUFZLFFBQU87SUFBSyxpQkFBZ0I7SUFBK0YsWUFBVztJQUFtQixXQUFVO0lBQW1CLFdBQVU7SUFBUSxVQUFTO0lBQU0sY0FBYTtBQUFJO0FBQUUsT0FBTyxPQUFPLGdCQUFjLEVBQUU7QUFBUyxXQUFXLFVBQVE7SUFBQyxNQUFLLEVBQUU7SUFBQyxLQUFJO1FBQUMsU0FBUSxFQUFFO0lBQU87QUFBQztBQUFFLElBQUksSUFBRSxPQUFPLE9BQU87QUFBTyxTQUFTLEVBQUUsQ0FBQztJQUFFLEVBQUUsS0FBSyxJQUFJLEVBQUMsSUFBRyxJQUFJLENBQUMsTUFBSTtRQUFDLE1BQUssT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFO1FBQUMsa0JBQWlCLEVBQUU7UUFBQyxtQkFBa0IsRUFBRTtRQUFDLFFBQU8sU0FBUyxDQUFDO1lBQUUsSUFBSSxDQUFDLGlCQUFpQixLQUFLLEtBQUcsWUFBVztRQUFFO1FBQUUsU0FBUSxTQUFTLENBQUM7WUFBRSxJQUFJLENBQUMsa0JBQWtCLEtBQUs7UUFBRTtJQUFDLEdBQUUsT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFLEdBQUMsS0FBSztBQUFDO0FBQUMsT0FBTyxPQUFPLFNBQU87QUFBRSxPQUFPLE9BQU8sVUFBUSxDQUFDO0FBQUUsSUFBSSxJQUFFLFdBQVcsV0FBUyxXQUFXLFVBQVE7QUFBSyxlQUFlLEVBQUUsSUFBRSxDQUFDLENBQUM7SUFBRSxJQUFHLENBQUEsRUFBRSwyQkFBMEIsRUFBRSxRQUFRLFlBQVk7UUFBQyx3QkFBdUIsQ0FBQztJQUFDLEVBQUMsSUFBRyxXQUFXLFVBQVU7QUFBVTtBQUFDLFNBQVM7SUFBSSxPQUFNLENBQUMsRUFBRSxRQUFNLEVBQUUsU0FBTyxZQUFVLFNBQVMsU0FBUyxRQUFRLFlBQVUsSUFBRSxTQUFTLFdBQVMsY0FBWSxFQUFFO0FBQUk7QUFBQyxTQUFTO0lBQUksT0FBTSxDQUFDLEVBQUUsUUFBTSxFQUFFLFNBQU8sWUFBVSxjQUFZLEVBQUU7QUFBSTtBQUFDLFNBQVM7SUFBSSxPQUFPLEVBQUUsUUFBTSxTQUFTO0FBQUk7QUFBQyxJQUFJLElBQUU7QUFBeUIsSUFBSSxJQUFFO0lBQUMsZUFBYyxDQUFDO0lBQUUsaUJBQWdCLEVBQUU7SUFBQyxnQkFBZSxFQUFFO0FBQUEsR0FBRSxJQUFFO0lBQUssRUFBRSxnQkFBYyxDQUFDLEdBQUUsRUFBRSxrQkFBZ0IsRUFBRSxFQUFDLEVBQUUsaUJBQWUsRUFBRTtBQUFBO0FBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLEVBQUU7SUFBQyxJQUFJLElBQUUsRUFBRSxFQUFDLEdBQUUsR0FBRTtJQUFFLElBQUksS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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NjIxODBmZDgzZWM2NzAuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvd29ya2FibGUvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxcd29ya2FibGVcXFxccnVsZXMuanNcIixcImJ1bmRsZUlkXCI6XCJlNWE0NzA2ZWVjM2QwZjliXCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogN0ZNdEZcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL3dvcmthYmxlL3J1bGVzLmpzXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyAtPiBjSFVibCAgPT4gIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvd29ya2FibGUvcGhvbmUtY291bnRyeS1jb2RlIC0+IDVsc0VCICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL3dvcmthYmxlL3Bob25lLWNvdW50cnktY29kZS5qc1xyXG4gKiAgIH5jb3JlL2VudW1zIC0+IDFPM25jICA9PiAgc3JjL2NvcmUvZW51bXMuanNcclxuICogICB+Y29yZS94cGF0aCAtPiBhZ0U0dSAgPT4gIHNyYy9jb3JlL3hwYXRoLmpzXHJcbiAqICAgfnV0aWxzL2RlbGF5IC0+IGFtNjE0ICA9PiAgc3JjL3V0aWxzL2RlbGF5LmpzXHJcbiAqL1xyXG5cclxudmFyIG4gPSBlKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtcclxubi5kZWZpbmVJbnRlcm9wRmxhZyhyKSwgbi5leHBvcnQociwgXCJnZXRSdWxlc1wiLCAoKSA9PiBzKSwgbi5leHBvcnQociwgXCJnZXRFZHVSdWxlc1wiLCAoKSA9PiB1KSwgblxyXG4gIC5leHBvcnQociwgXCJnZXRFeHBSdWxlc1wiLCAoKSA9PiBjKSwgbi5leHBvcnQociwgXCJleHRyYWN0U2luZ2xlQ2hlY2tib3hcIiwgKCkgPT4gYiksIG4uZXhwb3J0KHIsXHJcbiAgICBcImV4dHJhY3RDaGVja2JveFwiLCAoKSA9PiBDKSwgbi5leHBvcnQociwgXCJnZXRXb3JrYWJsZVNhbGFyeUZpZWxkVHlwZVwiLCAoKSA9PiBrKSwgbi5leHBvcnQocixcclxuICAgIFwiaXNXb3JrYWJsZVBob25lSW5wdXRcIiwgKCkgPT4gVCksIG4uZXhwb3J0KHIsIFwiZXhwYW5kV29ya2FibGVQaG9uZVJ1bGVcIiwgKCkgPT4gRiksIG4uZXhwb3J0KHIsXHJcbiAgICBcImdldFdvcmthYmxlTGFiZWxNZXRhXCIsICgpID0+IEkpLCBuLmV4cG9ydChyLCBcImdldFdvcmthYmxlQ292ZXJMZXR0ZXJTdGF0dXNcIiwgKCkgPT4gaiksIG5cclxuICAuZXhwb3J0KHIsIFwiZ2V0VHlwaW5nU3RlcHNcIiwgKCkgPT4gUCksIG4uZXhwb3J0KHIsIFwiZ2V0U3VibWl0QnV0dG9uVGV4dFwiLCAoKSA9PiBfKSwgbi5leHBvcnQocixcclxuICAgIFwiZ2V0V29ya2FibGVTdWJtaXRCdXR0b25TZWxlY3RvclwiLCAoKSA9PiBMKSwgbi5leHBvcnQociwgXCJnZXRFZHVjYXRpb25SdWxlc1wiLCAoKSA9PiBSKSwgblxyXG4gIC5leHBvcnQociwgXCJnZXRFeHBlcmllbmNlUnVsZXNcIiwgKCkgPT4gTyksIG4uZXhwb3J0KHIsIFwiZ2V0TGF0ZXN0U2F2ZWRFZHVjYXRpb25Gb2N1c1J1bGVcIiwgKCkgPT5cclxuICAgICQpLCBuLmV4cG9ydChyLCBcImdldExhdGVzdFNhdmVkRXhwZXJpZW5jZUZvY3VzUnVsZVwiLCAoKSA9PiBCKSwgbi5leHBvcnQociwgXCJnZXRGb3JtU25hcHNob3RcIixcclxuICAoKSA9PiBxKTtcclxudmFyIG8gPSBlKFwifmNvbnRlbnRzL3NpdGVzL3dvcmthYmxlL3Bob25lLWNvdW50cnktY29kZVwiKSxcclxuICBpID0gZShcIn5jb3JlL2VudW1zXCIpLFxyXG4gIGEgPSBlKFwifmNvcmUveHBhdGhcIiksXHJcbiAgbCA9IGUoXCJ+dXRpbHMvZGVsYXlcIik7XHJcbmFzeW5jIGZ1bmN0aW9uIHMoKSB7XHJcbiAgbGV0IGUgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwic2VjdGlvbltkYXRhLXVpPSdzZWN0aW9uJ10+W2RhdGEtdWk9J3NlY3Rpb24tZmllbGRzJ11cIikpLmZsYXRNYXAoZSA9PiBBcnJheS5mcm9tKGVcclxuICAgICAgPy5jaGlsZHJlbikuZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSksXHJcbiAgICB0ID0gW107XHJcbiAgZm9yIChsZXQgciBvZiBlKSB7XHJcbiAgICBpZiAoXCJlZHVjYXRpb25cIiA9PT0gci5kYXRhc2V0LnVpKSB7XHJcbiAgICAgIGxldCBlID0gYXdhaXQgZChyKTtcclxuICAgICAgZSAmJiB0LnB1c2goLi4uZSk7XHJcbiAgICAgIGNvbnRpbnVlXHJcbiAgICB9XHJcbiAgICBpZiAoXCJleHBlcmllbmNlXCIgPT09IHIuZGF0YXNldC51aSkge1xyXG4gICAgICBsZXQgZSA9IGF3YWl0IGYocik7XHJcbiAgICAgIGUgJiYgdC5wdXNoKC4uLmUpO1xyXG4gICAgICBjb250aW51ZVxyXG4gICAgfVxyXG4gICAgbGV0IGUgPSBhd2FpdCBwKHIpO1xyXG4gICAgZSAmJiB0LnB1c2goLi4uRihlKSlcclxuICB9XHJcbiAgcmV0dXJuIHRcclxufVxyXG5hc3luYyBmdW5jdGlvbiB1KCkge1xyXG4gIGxldCBlID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcInNlY3Rpb25bZGF0YS11aT0nc2VjdGlvbiddPltkYXRhLXVpPSdzZWN0aW9uLWZpZWxkcyddXCIpKS5mbGF0TWFwKGUgPT4gQXJyYXkuZnJvbShlXHJcbiAgICAgID8uY2hpbGRyZW4pLmZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpLFxyXG4gICAgdCA9IFtdO1xyXG4gIGZvciAobGV0IHIgb2YgZSlcclxuICAgIGlmIChcImVkdWNhdGlvblwiID09PSByLmRhdGFzZXQudWkpIHtcclxuICAgICAgbGV0IGUgPSBhd2FpdCBkKHIpO1xyXG4gICAgICBlICYmIHQucHVzaCguLi5lKVxyXG4gICAgfSByZXR1cm4gdFxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGMoKSB7XHJcbiAgbGV0IGUgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwic2VjdGlvbltkYXRhLXVpPSdzZWN0aW9uJ10+W2RhdGEtdWk9J3NlY3Rpb24tZmllbGRzJ11cIikpLmZsYXRNYXAoZSA9PiBBcnJheS5mcm9tKGVcclxuICAgICAgPy5jaGlsZHJlbikuZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSksXHJcbiAgICB0ID0gW107XHJcbiAgZm9yIChsZXQgciBvZiBlKVxyXG4gICAgaWYgKFwiZXhwZXJpZW5jZVwiID09PSByLmRhdGFzZXQudWkpIHtcclxuICAgICAgbGV0IGUgPSBhd2FpdCBmKHIpO1xyXG4gICAgICBlICYmIHQucHVzaCguLi5lKVxyXG4gICAgfSByZXR1cm4gdFxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGQoZSkge1xyXG4gIGlmIChcImVkdWNhdGlvblwiICE9PSBlLmRhdGFzZXQudWkpIHJldHVybiBudWxsO1xyXG4gIGxldCB0ID0gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ1bD5saSBbZGF0YS11aT0nZWRpdG9yJ11cIikpLmZpbHRlcihlID0+XHJcbiAgICBlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpO1xyXG4gIGlmICghdD8ubGVuZ3RoKSByZXR1cm4gbnVsbDtcclxuICBsZXQgciA9IFtdO1xyXG4gIGZvciAobGV0IGUgb2YgdCkge1xyXG4gICAgbGV0IHQgPSBBcnJheS5mcm9tKGUuY2hpbGRyZW4pLmZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCksXHJcbiAgICAgIG4gPSBbXTtcclxuICAgIGZvciAobGV0IGUgb2YgdCkge1xyXG4gICAgICBsZXQgdCA9IGF3YWl0IHAoZSk7XHJcbiAgICAgIHQgJiYgbi5wdXNoKHQpXHJcbiAgICB9XHJcbiAgICBuLmxlbmd0aCAmJiByLnB1c2goe1xyXG4gICAgICB0eXBlOiBpLkZJRUxEX1RZUEUuRURVQ0FUSU9OLFxyXG4gICAgICBsYWJlbDogXCJlZHVjYXRpb25cIixcclxuICAgICAgY2hpbGRyZW46IG4sXHJcbiAgICAgIG9wdGlvbnM6IFsuLi5uLm1hcChlID0+ICh7XHJcbiAgICAgICAgdHlwZTogZS50eXBlLFxyXG4gICAgICAgIGxhYmVsOiBlLmxhYmVsLFxyXG4gICAgICAgIG9wdGlvbnM6IGUub3B0aW9ucyB8fCBbXVxyXG4gICAgICB9KSldLFxyXG4gICAgICAkaW5wdXQ6IGUsXHJcbiAgICAgICRsYWJlbDogZSxcclxuICAgICAgcmVxdWlyZWQ6ICExXHJcbiAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gclxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGYoZSkge1xyXG4gIGlmIChcImV4cGVyaWVuY2VcIiAhPT0gZS5kYXRhc2V0LnVpKSByZXR1cm4gbnVsbDtcclxuICBsZXQgdCA9IEFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwidWw+bGkgW2RhdGEtdWk9J2VkaXRvciddXCIpKS5maWx0ZXIoZSA9PlxyXG4gICAgZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KTtcclxuICBpZiAoIXQ/Lmxlbmd0aCkgcmV0dXJuIG51bGw7XHJcbiAgbGV0IHIgPSBbXTtcclxuICBmb3IgKGxldCBlIG9mIHQpIHtcclxuICAgIGxldCB0ID0gQXJyYXkuZnJvbShlLmNoaWxkcmVuKS5maWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpLFxyXG4gICAgICBuID0gW107XHJcbiAgICBmb3IgKGxldCBlIG9mIHQpIHtcclxuICAgICAgbGV0IHQgPSBhd2FpdCBwKGUpO1xyXG4gICAgICB0ICYmIG4ucHVzaCh0KVxyXG4gICAgfVxyXG4gICAgbGV0IG8gPSB5KGUpO1xyXG4gICAgbyAmJiBuLnB1c2gobyksIG4ubGVuZ3RoICYmIHIucHVzaCh7XHJcbiAgICAgIHR5cGU6IGkuRklFTERfVFlQRS5FTVBMT1lNRU5ULFxyXG4gICAgICBsYWJlbDogXCJleHBlcmllbmNlXCIsXHJcbiAgICAgIGNoaWxkcmVuOiBuLFxyXG4gICAgICBvcHRpb25zOiBbLi4ubi5tYXAoZSA9PiAoe1xyXG4gICAgICAgIHR5cGU6IGUudHlwZSxcclxuICAgICAgICBsYWJlbDogZS5sYWJlbCxcclxuICAgICAgICBvcHRpb25zOiBlLm9wdGlvbnMgfHwgW11cclxuICAgICAgfSkpXSxcclxuICAgICAgJGlucHV0OiBlLFxyXG4gICAgICAkbGFiZWw6IGUsXHJcbiAgICAgIHJlcXVpcmVkOiAhMVxyXG4gICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIHJcclxufVxyXG5hc3luYyBmdW5jdGlvbiBwKGUpIHtcclxuICByZXR1cm4gZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIChcImFic29sdXRlXCIgIT09IGUuc3R5bGUucG9zaXRpb24gfHwgXCIxcHhcIiAhPT0gZS5zdHlsZVxyXG4gICAgLndpZHRoIHx8IFwiaGlkZGVuXCIgIT09IGUuc3R5bGUub3ZlcmZsb3cpID8gQyhlKSB8fCBiKGUpIHx8IGF3YWl0IEEoZSkgfHwgRChlKSA6IG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gbShlKSB7XHJcbiAgcmV0dXJuIChlIHx8IFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnJlcGxhY2UoL15cXCpcXHMqLywgXCJcIikudHJpbSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGgoZSkge1xyXG4gIGxldCB0ID0gZT8uZ2V0QXR0cmlidXRlPy4oXCJhcmlhLWxhYmVsbGVkYnlcIik7XHJcbiAgcmV0dXJuIHQgPyB0LnNwbGl0KC9cXHMrLykubWFwKGUgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZSk/LnRleHRDb250ZW50IHx8IFwiXCIpLmpvaW4oXCIgXCIpXHJcbiAgICAucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpIDogXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBnKGUpIHtcclxuICBsZXQgdCA9IGgoZSk7XHJcbiAgaWYgKHQpIHJldHVybiB0O1xyXG4gIGxldCByID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBlLmNsb3Nlc3QgPyBlLmNsb3Nlc3QoXCJbcm9sZT0nY2hlY2tib3gnXSwgW3JvbGU9J3JhZGlvJ11cIikgOiBudWxsO1xyXG4gIHJldHVybiBoKHIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGIoZSkge1xyXG4gIGxldCB0ID0gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCIpKTtcclxuICBpZiAoMSAhPT0gdC5sZW5ndGgpIHJldHVybiBudWxsO1xyXG4gIGxldCByID0gdFswXTtcclxuICBpZiAoci5jbG9zZXN0KFwiZmllbGRzZXQsIFtyb2xlPSdncm91cCddLCBbcm9sZT0ncmFkaW9ncm91cCddLCBbZGF0YS11aT0nZXhwZXJpZW5jZSddXCIpKVxyXG4gIHJldHVybiBudWxsO1xyXG4gIGxldCBuID0gci5jbG9zZXN0KFwibGFiZWxcIikgfHwgZS5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIikgfHwgZSxcclxuICAgIG8gPSBbci5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpLCBnKHIpLCByLmxhYmVscz8uWzBdPy50ZXh0Q29udGVudCA/PyBcIlwiLCBuLnRleHRDb250ZW50LCBlXHJcbiAgICAgIC50ZXh0Q29udGVudFxyXG4gICAgXS5tYXAobSkuZmluZChCb29sZWFuKTtcclxuICByZXR1cm4gbyA/IHtcclxuICAgIHR5cGU6IGkuRklFTERfVFlQRS5DSEVDS0JPWCxcclxuICAgIGxhYmVsOiBvLFxyXG4gICAgcmVxdWlyZWQ6IHIucmVxdWlyZWQgfHwgXCJ0cnVlXCIgPT09IHIuZ2V0QXR0cmlidXRlKFwiYXJpYS1yZXF1aXJlZFwiKSB8fCAvXlxccypcXCovLnRlc3QoblxyXG4gICAgICAudGV4dENvbnRlbnQgfHwgZS50ZXh0Q29udGVudCB8fCBcIlwiKSxcclxuICAgICRjaGVja2JveHM6IHQsXHJcbiAgICAkaW5wdXQ6IHIsXHJcbiAgICBvcHRpb25zOiBbb10sXHJcbiAgICAkbGFiZWw6IG5cclxuICB9IDogbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiB5KGUpIHtcclxuICBsZXQgdCA9ICgwLCBhLmdldEZpcnN0T3JkZXJlZE5vZGUpKFxyXG4gICAgXCIvL2RpdltAcm9sZT0nY2hlY2tib3gnIGFuZCBAYXJpYS1sYWJlbGxlZGJ5PSdjaGVja2JveF9sYWJlbF9jdXJyZW50J11cIiwgZSk7XHJcbiAgaWYgKHQpIHtcclxuICAgIGxldCBlID0gKDAsIGEuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoXCJmb2xsb3dpbmctc2libGluZzo6c3BhblwiLCB0KTtcclxuICAgIGlmICghZSkgcmV0dXJuIG51bGw7XHJcbiAgICBsZXQgciA9IEFycmF5LmZyb20odC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiKSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBpLkZJRUxEX1RZUEUuQ0hFQ0tCT1gsXHJcbiAgICAgIGxhYmVsOiBlLnRleHRDb250ZW50Py50cmltKCksXHJcbiAgICAgIHJlcXVpcmVkOiAhMCxcclxuICAgICAgJGNoZWNrYm94czogcixcclxuICAgICAgJGlucHV0OiByWzBdLFxyXG4gICAgICBvcHRpb25zOiBbZS50ZXh0Q29udGVudD8udHJpbSgpIHx8IFwiXCJdLFxyXG4gICAgICAkbGFiZWw6IGVcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHYoZSwgdCkge1xyXG4gIGxldCByID0gZS5wYXJlbnRFbGVtZW50O1xyXG4gIGZvciAoOyByOykge1xyXG4gICAgaWYgKHIgPT09IHQpIHJldHVybiAhMDtcclxuICAgIHIgPSByLnBhcmVudEVsZW1lbnRcclxuICB9XHJcbiAgcmV0dXJuICExXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHcoZSwgdCkge1xyXG4gIHJldHVybiBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcIltpZF1cIikpLmZpbmQoZSA9PiBlLmlkID09PSB0KSB8fCBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFMoZSwgdCkge1xyXG4gIHJldHVybiAoZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIikgfHwgXCJcIikuc3BsaXQoL1xccysvKS5tYXAoZSA9PiB3KHQsIGUpKS5maWx0ZXIodCA9PiAhIXQgJiZcclxuICAgICF2KHQsIGUpKS5tYXAoZSA9PiBlLmlubmVyVGV4dCB8fCBlLnRleHRDb250ZW50IHx8IFwiXCIpLmpvaW4oXCIgXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEUoZSkge1xyXG4gIGxldCB0ID0gZS5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcmFkaW9MYWJlbF0sIHNwYW5baWRdXCIpO1xyXG4gIHJldHVybiAodD8uaW5uZXJUZXh0IHx8IHQ/LnRleHRDb250ZW50IHx8IGUuaW5uZXJUZXh0IHx8IGUudGV4dENvbnRlbnQgfHwgXCJcIikucmVwbGFjZSgvXFxzKy9nLCBcIiBcIilcclxuICAgIC50cmltKClcclxufVxyXG5cclxuZnVuY3Rpb24geChlKSB7XHJcbiAgbGV0IHQgPSBlLmNsb3Nlc3QoXCJsYWJlbFwiKT8ucXVlcnlTZWxlY3RvcihcInNwYW5baWRdXCIpO1xyXG4gIHJldHVybiAodD8uaW5uZXJUZXh0IHx8IHQ/LnRleHRDb250ZW50IHx8IFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKVxyXG59XHJcblxyXG5mdW5jdGlvbiBDKGUpIHtcclxuICBsZXQgdCA9IGUucXVlcnlTZWxlY3RvcihcImZpZWxkc2V0W3JvbGU9J3JhZGlvZ3JvdXAnXSwgZGl2W3JvbGU9J3JhZGlvZ3JvdXAnXSwgW3JvbGU9J2dyb3VwJ11cIik7XHJcbiAgaWYgKCF0KSByZXR1cm4gbnVsbDtcclxuICBsZXQgciA9IChTKHQsIGUpIHx8IEFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwic3BhbltpZF1cIikpLmZpbmQoZSA9PiAhdihlLCB0KSk/LnRleHRDb250ZW50IHx8XHJcbiAgICBcIlwiKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS5yZXBsYWNlKC9eXFwqXFxzKi8sIFwiXCIpLnRyaW0oKTtcclxuICBpZiAoIXIpIHJldHVybiBudWxsO1xyXG4gIGxldCBuID0gW10sXHJcbiAgICBvID0gW10sXHJcbiAgICBhID0gQXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbcm9sZT0ncmFkaW8nXSwgW3JvbGU9J2NoZWNrYm94J10sIFtkYXRhLXVpPSdvcHRpb24nXVwiKSk7XHJcbiAgZm9yIChsZXQgZSBvZiBhKSB7XHJcbiAgICBsZXQgdCA9IGUucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J3JhZGlvJ10sIGlucHV0W3R5cGU9J2NoZWNrYm94J11cIiksXHJcbiAgICAgIHIgPSBcImNoZWNrYm94XCIgPT09IGUuZ2V0QXR0cmlidXRlKFwicm9sZVwiKSAmJiB0ID8geCh0KSA6IEUoZSk7XHJcbiAgICB0ICYmIHIgJiYgKG4ucHVzaChyKSwgby5wdXNoKHQpKVxyXG4gIH1cclxuICBpZiAoIW8ubGVuZ3RoKSByZXR1cm4gbnVsbDtcclxuICBsZXQgbCA9IG8uc29tZShlID0+IGUucmVxdWlyZWQgfHwgXCJ0cnVlXCIgPT09IGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1yZXF1aXJlZFwiKSkgfHwgXCJ0cnVlXCIgPT09IHRcclxuICAgIC5nZXRBdHRyaWJ1dGUoXCJhcmlhLXJlcXVpcmVkXCIpIHx8IC8oXnxcXHMpXFwqLy50ZXN0KGUuaW5uZXJUZXh0IHx8IGUudGV4dENvbnRlbnQgfHwgXCJcIik7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IGkuRklFTERfVFlQRS5DSEVDS0JPWCxcclxuICAgIGxhYmVsOiByLFxyXG4gICAgcmVxdWlyZWQ6IGwsXHJcbiAgICAkY2hlY2tib3hzOiBvLFxyXG4gICAgb3B0aW9uczogbixcclxuICAgICRpbnB1dDogb1swXSxcclxuICAgICRsYWJlbDogdFxyXG4gIH1cclxufVxyXG5hc3luYyBmdW5jdGlvbiBBKGUpIHtcclxuICBsZXQgdCA9IGUucXVlcnlTZWxlY3RvcihcImRpdlwiKTtcclxuICBpZiAoIXQpIHJldHVybiBudWxsO1xyXG4gIGxldCByID0gdC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcclxuICBpZiAoIXIpIHJldHVybiBudWxsO1xyXG4gIGxldCBuID0gci5xdWVyeVNlbGVjdG9yKFwic3BhbltpZF1cIiksXHJcbiAgICBvID0gbj8udGV4dENvbnRlbnQ/LnRyaW0oKSB8fCByPy50ZXh0Q29udGVudD8udHJpbSgpO1xyXG4gIGlmICghbyB8fCBcIkNvdW50cnlcIiA9PT0gbykgcmV0dXJuIG51bGw7XHJcbiAgbGV0IGEgPSByPy50ZXh0Q29udGVudD8udHJpbSgpPy5zdGFydHNXaXRoKFwiKlwiKSB8fCAhMTtcclxuICBhICYmIChvID0gby5yZXBsYWNlKFwiKlwiLCBcIlwiKS50cmltKCkpO1xyXG4gIGxldCBzID0gdC5xdWVyeVNlbGVjdG9yKCdkaXZbZGF0YS1pbnB1dC10eXBlPVwic2VsZWN0XCJdJyk7XHJcbiAgaWYgKCFzKSByZXR1cm4gbnVsbDtcclxuICBsZXQgdSA9IHMucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInRleHRcIl0nKTtcclxuICBpZiAoIXUpIHJldHVybiBudWxsO1xyXG4gIHUuY2xpY2soKSwgYXdhaXQgKDAsIGwuZGVsYXkpKDQwMCk7XHJcbiAgbGV0IGMgPSBzLmlubmVyVGV4dC50cmltKCksXHJcbiAgICBkID0gYy5zcGxpdChcIlxcblwiKS5maWx0ZXIoZSA9PiBcIlwiICE9PSBlKTtcclxuICBpZiAoZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNldXBcIiwge1xyXG4gICAgICBidWJibGVzOiAhMCxcclxuICAgICAgY2FuY2VsYWJsZTogITAsXHJcbiAgICAgIHZpZXc6IHdpbmRvd1xyXG4gICAgfSkpLCAhZC5sZW5ndGgpIHJldHVybiBudWxsO1xyXG4gIGxldCBmID0gQXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKSk7XHJcbiAgaWYgKCFmPy5sZW5ndGgpIHJldHVybiBudWxsO1xyXG4gIGxldCBwID0gZltmLmxlbmd0aCAtIDFdO1xyXG4gIHJldHVybiBwID8ge1xyXG4gICAgdHlwZTogaS5GSUVMRF9UWVBFLlNFTEVDVCxcclxuICAgIGxhYmVsOiBvLFxyXG4gICAgcmVxdWlyZWQ6IGEsXHJcbiAgICBvcHRpb25zOiBkLFxyXG4gICAgJGlucHV0OiBwLFxyXG4gICAgJGxhYmVsOiB0XHJcbiAgfSA6IG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gayhlKSB7XHJcbiAgbGV0IHQgPSAoZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xyXG4gIHJldHVybiAvXFxiKHNhbGFyeXxjb21wZW5zYXRpb258cGF5KVxcYi8udGVzdCh0KSA/IC9cXGIocmFuZ2V8bWluaW11bSBhbmQgbWF4aW11bXxtaW4gYW5kIG1heClcXGIvXHJcbiAgICAudGVzdCh0KSA/IGkuRklFTERfVFlQRS5URVhUIDogaS5GSUVMRF9UWVBFLk5VTUJFUiA6IGkuRklFTERfVFlQRS5URVhUXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFQoZSkge1xyXG4gIGlmICghZSkgcmV0dXJuICExO1xyXG4gIGlmIChcInRlbFwiID09PSAoZS50eXBlIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCkpIHJldHVybiAhMDtcclxuICBsZXQgdCA9IChlLm5hbWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKSxcclxuICAgIHIgPSAoZS5pZCB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xyXG4gIHJldHVybiAhISh0LmluY2x1ZGVzKFwicGhvbmVcIikgfHwgci5pbmNsdWRlcyhcInBob25lXCIpIHx8IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZS5jbG9zZXN0ICYmIGVcclxuICAgIC5jbG9zZXN0KFwiLml0aVwiKSlcclxufVxyXG5cclxuZnVuY3Rpb24gRihlKSB7XHJcbiAgaWYgKGUudHlwZSAhPT0gaS5GSUVMRF9UWVBFLlRFWFQgfHwgIVQoZS4kaW5wdXQpKSByZXR1cm4gW2VdO1xyXG4gIGxldCB0ID0gKDAsIG8uZ2V0V29ya2FibGVQaG9uZUNvdW50cnlDb250YWluZXIpKGUuJGlucHV0KSxcclxuICAgIHIgPSB0Py5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLml0aV9fc2VsZWN0ZWQtY291bnRyeSwgLml0aV9fc2VsZWN0ZWQtZmxhZ1tyb2xlPSdjb21ib2JveCddXCIpO1xyXG4gIGlmICghdCB8fCAhcikgcmV0dXJuIFtlXTtcclxuICBsZXQgbiA9ICgwLCBvLmdldFdvcmthYmxlUGhvbmVDb3VudHJ5T3B0aW9ucykodCk7XHJcbiAgaWYgKCFuLmxlbmd0aCkgcmV0dXJuIFtlXTtcclxuICBsZXQgYSA9IHtcclxuICAgIC4uLmUsXHJcbiAgICBkZXNjcmlwdGlvbjogby5XT1JLQUJMRV9QSE9ORV9XSVRIX0NPVU5UUllfQ09ERV9ERVNDUklQVElPTlxyXG4gIH07XHJcbiAgcmV0dXJuIFthLCB7XHJcbiAgICB0eXBlOiBpLkZJRUxEX1RZUEUuU0VMRUNULFxyXG4gICAgbGFiZWw6IG8uV09SS0FCTEVfUEhPTkVfQ09VTlRSWV9DT0RFX0xBQkVMLFxyXG4gICAgcmVxdWlyZWQ6IGUucmVxdWlyZWQsXHJcbiAgICBvcHRpb25zOiBuLm1hcChvLmZvcm1hdFdvcmthYmxlUGhvbmVDb3VudHJ5T3B0aW9uKSxcclxuICAgICRpbnB1dDogZS4kaW5wdXQsXHJcbiAgICAkbGFiZWw6IHJcclxuICB9XVxyXG59XHJcblxyXG5mdW5jdGlvbiBJKGUpIHtcclxuICBpZiAoIWUpIHJldHVybiB7XHJcbiAgICBsYWJlbFRleHQ6IG51bGwsXHJcbiAgICByZXF1aXJlZDogITFcclxuICB9O1xyXG4gIGxldCB0ID0gZS5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcclxuICBpZiAoIXQpIHJldHVybiB7XHJcbiAgICBsYWJlbFRleHQ6IG51bGwsXHJcbiAgICByZXF1aXJlZDogITFcclxuICB9O1xyXG4gIGxldCByID0gdC5xdWVyeVNlbGVjdG9yKFwic3BhbltpZF1cIiksXHJcbiAgICBuID0gcj8udGV4dENvbnRlbnQ/LnRyaW0oKSB8fCB0Py50ZXh0Q29udGVudD8udHJpbSgpIHx8IG51bGw7XHJcbiAgaWYgKCFuKSByZXR1cm4ge1xyXG4gICAgbGFiZWxUZXh0OiBudWxsLFxyXG4gICAgcmVxdWlyZWQ6ICExXHJcbiAgfTtcclxuICBsZXQgbyA9IHQudGV4dENvbnRlbnQ/LnRyaW0oKT8uc3RhcnRzV2l0aChcIipcIikgfHwgITE7XHJcbiAgcmV0dXJuIG8gJiYgKG4gPSBuLnJlcGxhY2UoXCIqXCIsIFwiXCIpLnRyaW0oKSksIHtcclxuICAgIGxhYmVsVGV4dDogbiA9IG4ucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpLFxyXG4gICAgcmVxdWlyZWQ6IG9cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGooZSkge1xyXG4gIGxldCB0ID0gZS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtkYXRhLXVpPVwiY292ZXJfbGV0dGVyXCJdLCB0ZXh0YXJlYSNjb3Zlcl9sZXR0ZXInKTtcclxuICBpZiAoIXQpIHJldHVybiBcIlwiO1xyXG4gIGxldCB7XHJcbiAgICByZXF1aXJlZDogclxyXG4gIH0gPSBJKHQuY2xvc2VzdChcImxhYmVsXCIpKTtcclxuICByZXR1cm4gciA/IFwicmVxdWlyZWRcIiA6IFwib3B0aW9uYWxcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBEKGUpIHtcclxuICBsZXQgdCA9IGUucXVlcnlTZWxlY3RvcihcImRpdj5sYWJlbFwiKTtcclxuICBpZiAoIXQpIHJldHVybiBudWxsO1xyXG4gIGxldCB7XHJcbiAgICBsYWJlbFRleHQ6IHIsXHJcbiAgICByZXF1aXJlZDogblxyXG4gIH0gPSBJKHQpO1xyXG4gIGlmICghcikgcmV0dXJuIG51bGw7XHJcbiAgaWYgKFwiRGF0ZVwiID09PSByKSB7XHJcbiAgICBsZXQgZSA9IHQucXVlcnlTZWxlY3RvcihcInNwYW4gc3BhbltpZF1cIik7XHJcbiAgICBpZiAoZSkge1xyXG4gICAgICBsZXQgdCA9ICgwLCBhLmdldEZpcnN0T3JkZXJlZE5vZGUpKCdhbmNlc3Rvcjo6c2VjdGlvbltAZGF0YS11aT1cInNlY3Rpb25cIl0vL2gyJywgZSk7XHJcbiAgICAgIGlmICh0ICYmIHQudGV4dENvbnRlbnQ/LnRyaW0oKSA9PT0gXCJEZXRhaWxzXCIpIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBvID0gZS5xdWVyeVNlbGVjdG9yKFwiaW5wdXQsIHRleHRhcmVhXCIpO1xyXG4gIHJldHVybiBvID8ge1xyXG4gICAgdHlwZTogayhyKSxcclxuICAgIGxhYmVsOiByLFxyXG4gICAgcmVxdWlyZWQ6IG4sXHJcbiAgICAkaW5wdXQ6IG8sXHJcbiAgICAkbGFiZWw6IHRcclxuICB9IDogbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBQKGUpIHtcclxuICBsZXQgdCA9IGUgPz8gXCJcIixcclxuICAgIHIgPSBbXTtcclxuICBmb3IgKGxldCBlID0gMDsgZSA8IHQubGVuZ3RoOyBlKyspIHIucHVzaCh7XHJcbiAgICBjaGFyOiB0W2VdLFxyXG4gICAgdmFsdWVTb0ZhcjogdC5zbGljZSgwLCBlICsgMSlcclxuICB9KTtcclxuICByZXR1cm4gclxyXG59XHJcblxyXG5mdW5jdGlvbiBfKCkge1xyXG4gIHJldHVybiBcIlN1Ym1pdCBhcHBsaWNhdGlvblwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEwoKSB7XHJcbiAgcmV0dXJuIGAuLy8qW0BkYXRhLXVpPVwiYXBwbHktYnV0dG9uXCJdIHwgLi8vYnV0dG9uW2NvbnRhaW5zKC4sIFwiJHtfKCl9XCIpXWBcclxufVxyXG5cclxuZnVuY3Rpb24gUigpIHtcclxuICBsZXQgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXZbZGF0YS11aT0nZWR1Y2F0aW9uJ11cIik7XHJcbiAgaWYgKCFlKSByZXR1cm4gW107XHJcbiAgbGV0IHQgPSBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcInVsID4gbGlcIikpLFxyXG4gICAgciA9IFtdO1xyXG4gIHJldHVybiB0LmZvckVhY2goZSA9PiB7XHJcbiAgICBsZXQgdCA9IFtdLFxyXG4gICAgICBuID0gZS5xdWVyeVNlbGVjdG9yQWxsKFwiZGxcIik7XHJcbiAgICBpZiAobi5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgIGxldCByID0gZS5xdWVyeVNlbGVjdG9yKFwiZHRcIiksXHJcbiAgICAgICAgICBuID0gZS5xdWVyeVNlbGVjdG9yKFwiZGRcIik7XHJcbiAgICAgICAgaWYgKHIgJiYgbikge1xyXG4gICAgICAgICAgbGV0IGUgPSByLmlubmVyVGV4dC5yZXBsYWNlKFwiOlwiLCBcIlwiKS50cmltKCk7XHJcbiAgICAgICAgICB0LnB1c2goe1xyXG4gICAgICAgICAgICB0eXBlOiBpLkZJRUxEX1RZUEUuVEVYVCxcclxuICAgICAgICAgICAgbGFiZWw6IGUsXHJcbiAgICAgICAgICAgICRsYWJlbDogcixcclxuICAgICAgICAgICAgJGlucHV0OiBuLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogITFcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSwgMCA9PT0gdC5sZW5ndGgpIHtcclxuICAgICAgbGV0IHIgPSBlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS11aT0nZWRpdG9yJ10gLnN0eWxlcy0tMzZYaUIsIC5maWVsZC13cmFwcGVyXCIpO1xyXG4gICAgICByLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgbGV0IHIgPSBlLnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbFwiKSxcclxuICAgICAgICAgIG4gPSBlLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiKTtcclxuICAgICAgICByICYmIG4gJiYgdC5wdXNoKHtcclxuICAgICAgICAgIHR5cGU6IGkuRklFTERfVFlQRS5URVhULFxyXG4gICAgICAgICAgbGFiZWw6IHIuaW5uZXJUZXh0LnJlcGxhY2UoXCI6XCIsIFwiXCIpLnRyaW0oKSxcclxuICAgICAgICAgICRsYWJlbDogcixcclxuICAgICAgICAgICRpbnB1dDogbixcclxuICAgICAgICAgIHJlcXVpcmVkOiAhMVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB0Lmxlbmd0aCA+IDAgJiYgci5wdXNoKHtcclxuICAgICAgdHlwZTogaS5GSUVMRF9UWVBFLkVEVUNBVElPTixcclxuICAgICAgbGFiZWw6IFwiZWR1Y2F0aW9uXCIsXHJcbiAgICAgIGNoaWxkcmVuOiB0LFxyXG4gICAgICAkaW5wdXQ6IGUsXHJcbiAgICAgIHJlcXVpcmVkOiAhMSxcclxuICAgICAgb3B0aW9uczogW11cclxuICAgIH0pXHJcbiAgfSksIHJcclxufVxyXG5cclxuZnVuY3Rpb24gTygpIHtcclxuICBsZXQgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXZbZGF0YS11aT0nZXhwZXJpZW5jZSddLCBzZWN0aW9uW2RhdGEtdWk9J2V4cGVyaWVuY2UnXVwiKTtcclxuICBpZiAoIWUpIHJldHVybiBbXTtcclxuICBsZXQgdCA9IEFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwidWwgPiBsaVwiKSksXHJcbiAgICByID0gW107XHJcbiAgcmV0dXJuIHQuZm9yRWFjaChlID0+IHtcclxuICAgIGxldCB0ID0gW10sXHJcbiAgICAgIG4gPSBlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkbFwiKTtcclxuICAgIGlmIChuLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgbGV0IHIgPSBlLnF1ZXJ5U2VsZWN0b3IoXCJkdFwiKSxcclxuICAgICAgICAgIG4gPSBlLnF1ZXJ5U2VsZWN0b3IoXCJkZFwiKTtcclxuICAgICAgICBpZiAociAmJiBuKSB7XHJcbiAgICAgICAgICBsZXQgZSA9IHIuaW5uZXJUZXh0LnRyaW0oKTtcclxuICAgICAgICAgIHQucHVzaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IGkuRklFTERfVFlQRS5URVhULFxyXG4gICAgICAgICAgICBsYWJlbDogZSxcclxuICAgICAgICAgICAgJGxhYmVsOiByLFxyXG4gICAgICAgICAgICAkaW5wdXQ6IG4sXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiAhMVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pLCAwID09PSB0Lmxlbmd0aCkge1xyXG4gICAgICBsZXQgciA9IGUucXVlcnlTZWxlY3RvckFsbChcIi5zdHlsZXMtLTM2WGlCLCAuZmllbGQtd3JhcHBlclwiKTtcclxuICAgICAgci5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgIGxldCByID0gZS5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIiksXHJcbiAgICAgICAgICBuID0gZS5xdWVyeVNlbGVjdG9yKFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIik7XHJcbiAgICAgICAgciAmJiBuICYmIHQucHVzaCh7XHJcbiAgICAgICAgICB0eXBlOiBpLkZJRUxEX1RZUEUuVEVYVCxcclxuICAgICAgICAgIGxhYmVsOiByLmlubmVyVGV4dC50cmltKCksXHJcbiAgICAgICAgICAkbGFiZWw6IHIsXHJcbiAgICAgICAgICAkaW5wdXQ6IG4sXHJcbiAgICAgICAgICByZXF1aXJlZDogITFcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgdC5sZW5ndGggPiAwICYmIHIucHVzaCh7XHJcbiAgICAgIHR5cGU6IGkuRklFTERfVFlQRS5FTVBMT1lNRU5ULFxyXG4gICAgICBsYWJlbDogXCJ3b3JrRXhwZXJpZW5jZVwiLFxyXG4gICAgICBjaGlsZHJlbjogdCxcclxuICAgICAgJGlucHV0OiBlLFxyXG4gICAgICByZXF1aXJlZDogITEsXHJcbiAgICAgIG9wdGlvbnM6IFtdXHJcbiAgICB9KVxyXG4gIH0pLCByXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE0oZSkge1xyXG4gIHJldHVybiBTdHJpbmcoZSB8fCBcIlwiKS5yZXBsYWNlKC86L2csIFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE4oZSwgdCkge1xyXG4gIGlmICghdCB8fCAhKFwiY2hpbGRyZW5cIiBpbiB0KSkgcmV0dXJuIG51bGw7XHJcbiAgbGV0IHIgPSBlLmZpbmQoZSA9PiB7XHJcbiAgICBsZXQgdCA9IFwiJGlucHV0XCIgaW4gZSA/IGUuJGlucHV0IDogbnVsbDtcclxuICAgIHJldHVybiAhISh0ICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdC5xdWVyeVNlbGVjdG9yICYmIHQucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCJbZGF0YS11aT0nZWRpdC1zZWN0aW9uJ11cIikpXHJcbiAgfSk7XHJcbiAgaWYgKCFyIHx8ICEoXCJjaGlsZHJlblwiIGluIHIpIHx8ICEoXCIkaW5wdXRcIiBpbiByKSkgcmV0dXJuIG51bGw7XHJcbiAgbGV0IG4gPSByLiRpbnB1dCxcclxuICAgIG8gPSByLmNoaWxkcmVuLFxyXG4gICAgaSA9IHQuY2hpbGRyZW4ubWFwKGUgPT4ge1xyXG4gICAgICBsZXQgdCA9IG8uZmluZCh0ID0+IE0odC5sYWJlbCkgPT09IE0oZS5sYWJlbCkpLFxyXG4gICAgICAgIHIgPSB0ICYmIFwiJGlucHV0XCIgaW4gdCA/IHQuJGlucHV0IDogbixcclxuICAgICAgICBpID0gdCAmJiBcIiRsYWJlbFwiIGluIHQgPyB0LiRsYWJlbCA6IG47XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogZS50eXBlLFxyXG4gICAgICAgIGxhYmVsOiBlLmxhYmVsLFxyXG4gICAgICAgIHJlcXVpcmVkOiBlLnJlcXVpcmVkLFxyXG4gICAgICAgICRpbnB1dDogcixcclxuICAgICAgICAkbGFiZWw6IGlcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IHQudHlwZSxcclxuICAgIGxhYmVsOiB0LmxhYmVsLFxyXG4gICAgcmVxdWlyZWQ6IHQucmVxdWlyZWQsXHJcbiAgICBvcHRpb25zOiBcIm9wdGlvbnNcIiBpbiB0ID8gdC5vcHRpb25zIDogW10sXHJcbiAgICAkaW5wdXQ6IG4sXHJcbiAgICAkbGFiZWw6IG4sXHJcbiAgICBjaGlsZHJlbjogaVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gJChlKSB7XHJcbiAgcmV0dXJuIE4oUigpLCBlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBCKGUpIHtcclxuICByZXR1cm4gTihPKCksIGUpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gcShlKSB7XHJcbiAgbGV0IHQgPSB7fTtcclxuICBmb3IgKGxldCByIG9mIGUpIHIudHlwZSAhPT0gaS5GSUVMRF9UWVBFLkVEVUNBVElPTiAmJiByLnR5cGUgIT09IGkuRklFTERfVFlQRS5FTVBMT1lNRU5UICYmXHJcbiAgICBcIiRpbnB1dFwiIGluIHIgJiYgci4kaW5wdXQgJiYgKHRbci5sYWJlbF0gPSBVKHIpKTtcclxuICBsZXQgciA9IFIoKTtcclxuICByLmxlbmd0aCA+IDAgJiYgKHQuZWR1Y2F0aW9uID0gci5tYXAoZSA9PiB7XHJcbiAgICBsZXQgdCA9IHt9O1xyXG4gICAgcmV0dXJuIGUuY2hpbGRyZW4uZm9yRWFjaChlID0+IHtcclxuICAgICAgdFtlLmxhYmVsXSA9IFUoZSlcclxuICAgIH0pLCB0XHJcbiAgfSkpO1xyXG4gIGxldCBuID0gTygpO1xyXG4gIHJldHVybiBuLmxlbmd0aCA+IDAgJiYgKHQuZW1wbG95bWVudCA9IG4ubWFwKGUgPT4ge1xyXG4gICAgbGV0IHQgPSB7fTtcclxuICAgIHJldHVybiBlLmNoaWxkcmVuLmZvckVhY2goZSA9PiB7XHJcbiAgICAgIHRbZS5sYWJlbF0gPSBVKGUpXHJcbiAgICB9KSwgdFxyXG4gIH0pKSwgdFxyXG59XHJcblxyXG5mdW5jdGlvbiBVKGUpIHtcclxuICBsZXQge1xyXG4gICAgJGlucHV0OiB0LFxyXG4gICAgdHlwZTogcixcclxuICAgICRjaGVja2JveHM6IG4sXHJcbiAgICBvcHRpb25zOiBhXHJcbiAgfSA9IGU7XHJcbiAgaWYgKCF0KSByZXR1cm4gXCJcIjtcclxuICBpZiAoZS5sYWJlbCA9PT0gby5XT1JLQUJMRV9QSE9ORV9DT1VOVFJZX0NPREVfTEFCRUwpIHtcclxuICAgIGxldCBlID0gKDAsIG8uZ2V0V29ya2FibGVQaG9uZUNvdW50cnlDb250YWluZXIpKHQpO1xyXG4gICAgcmV0dXJuIGUgPyAoMCwgby5yZWFkV29ya2FibGVTZWxlY3RlZFBob25lQ291bnRyeSkoZSkgOiBcIlwiXHJcbiAgfVxyXG4gIGlmIChyID09PSBpLkZJRUxEX1RZUEUuQ0hFQ0tCT1gpIHtcclxuICAgIGlmIChuICYmIG4ubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgZSA9IG4ubWFwKChlLCB0KSA9PiBlLmNoZWNrZWQgPyBhPy5bdF0gfHwgXCJDaGVja2VkXCIgOiBudWxsKS5maWx0ZXIoQm9vbGVhbik7XHJcbiAgICAgIHJldHVybiAxID09PSBlLmxlbmd0aCA/IGVbMF0gOiBlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdC5jaGVja2VkIHx8ICExXHJcbiAgfVxyXG4gIGlmICh0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCB8fCB0IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCB8fFxyXG4gICAgdCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSByZXR1cm4gdC52YWx1ZSB8fCBcIlwiO1xyXG4gIGxldCBsID0gdC5pbm5lclRleHQ/LnRyaW0oKSB8fCB0LnRleHRDb250ZW50Py50cmltKCkgfHwgXCJcIjtcclxuICByZXR1cm4gbFxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZXMuZWMzZDBmOWIuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);