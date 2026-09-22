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
})({"eGeaD":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\myworkday\\account-preflow.js",
    "bundleId": "824c2c695a07260e",
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
var j = z(require("f44e92d2504ac753"));
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

},{"f44e92d2504ac753":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"9FPsA":[function(require,module,exports) {
/**
 * Parcel module id: hOSkB
 * Resolved path: src/contents/sites/myworkday/account-preflow.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~api/autofill-signup-information -> 52vOt  =>  src/api/autofill-signup-information.js
 *   ~contents/pre-autofill-flow/account-flow -> IgBHR  =>  src/contents/pre-autofill-flow/account-flow.js
 *   ~contents/pre-autofill-flow/dom -> fChu0  =>  src/contents/pre-autofill-flow/dom.js
 *   ~contents/pre-autofill-flow/tracking -> 3L3xh  =>  src/contents/pre-autofill-flow/tracking.js
 *   ~store/autofillResult -> hCUzf  =>  src/store/autofillResult.js
 *   ~store/workday-signup-info -> jjbI7  =>  src/store/workday-signup-info.js
 *   ~utils/getTargetOrTimeout -> 1TBhF  =>  src/utils/getTargetOrTimeout.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "WORKDAY_VERIFY_PASSWORD_INPUT_SELECTOR", ()=>g), n.export(r, "WORKDAY_ACCOUNT_SUBMIT_TRACKING_ATTRIBUTE", ()=>T), n.export(r, "markWorkdayAccountSubmitTracking", ()=>R), n.export(r, "clearWorkdayAccountSubmitTracking", ()=>O), n.export(r, "findWorkdayVerifyPasswordInputs", ()=>Y), n.export(r, "findWorkdayPrivacyNoticeCheckbox", ()=>V), n.export(r, "findWorkdaySignInSubmitButton", ()=>G), n.export(r, "findWorkdaySignInWithEmailButton", ()=>ee), n.export(r, "detectWorkdayForgotPasswordSubmitMessage", ()=>eA), n.export(r, "detectWorkdayAccountSubmitError", ()=>ek), n.export(r, "isWorkdayAccountTransitionUrlInScope", ()=>e3), n.export(r, "shouldOpenWorkdayEmailSignIn", ()=>tP), n.export(r, "clickWorkdaySignInWithEmail", ()=>tR), n.export(r, "trackWorkdayAccountSubmit", ()=>tV), n.export(r, "createWorkdayForgotPasswordFlowAdapter", ()=>tG), n.export(r, "workdayForgotPasswordFlowAdapter", ()=>tK), n.export(r, "createWorkdayResetPasswordFlowAdapter", ()=>tX), n.export(r, "workdayResetPasswordFlowAdapter", ()=>tJ), n.export(r, "workdayAccountFlowAdapter", ()=>tQ), n.export(r, "detectWorkdayAccountFlowMatch", ()=>tZ), n.export(r, "canStartWorkdayStandardAutofillFromAccountFlow", ()=>t0), n.export(r, "hasWorkdayStandardAutofillSignalFromAccountFlow", ()=>t2);
var o = e("@plasmohq/messaging"), i = e("~api/autofill-signup-information"), a = e("~contents/pre-autofill-flow/account-flow"), l = e("~contents/pre-autofill-flow/dom"), s = e("~contents/pre-autofill-flow/tracking"), u = e("~store/autofillResult"), c = e("~store/workday-signup-info"), d = e("~utils/getTargetOrTimeout"), f = n.interopDefault(d);
function p(e1, t) {
    return (0, l.findVisiblePreAutofillElement)(e1, t, e1.defaultView?.HTMLElement);
}
let m = 'input[data-automation-id="email"]', h = 'input[data-automation-id="password"]', g = 'input[data-automation-id="verifyPassword"], input[data-automation-id="confirmPassword"], input[data-automation-id="verifyNewPassword"]', b = 'input[data-automation-id="createAccountCheckbox"]', y = '[data-automation-id="adventureButton"][role="button"], [data-automation-id="continueButton"][role="button"]', v = 'button[data-automation-id="pageFooterNextButton"], button[data-automation-id="bottom-navigation-next-button"]', w = 'button[data-automation-id="SignInWithEmailButton"], [data-automation-id="SignInWithEmailButton"]', S = '[data-automation-id="click_filter"][aria-label="Create Account"], button[data-automation-id="createAccountSubmitButton"]', E = '[data-automation-id="click_filter"][aria-label="Sign In"], [data-automation-id="noCaptchaWrapper"] [data-automation-id="click_filter"][aria-label="Submit"], button[data-automation-id="signInSubmitButton"], [data-automation-id="signInSubmitButton"]', x = '[data-automation-id="click_filter"][aria-label="Reset Password"], button[data-automation-id="resetPasswordButton"], [data-automation-id="resetPasswordButton"]', C = '[data-automation-id="click_filter"][aria-label="Submit"], button[data-automation-id="resetPasswordButton"], [data-automation-id="resetPasswordButton"]', A = '[data-automation-id="alertMessage"][role="alert"], [data-automation-id="alertMessage"]', k = 80, T = "data-jr-workday-account-submit-tracking", F = "data-jr-workday-forgot-password-submit-tracking", I = "JOBRIGHT_DEBUG_WORKDAY_ACCOUNT_FLOW", j = "[MyWorkday sign-in-choice]", D = "[MyWorkday account-flow-detect]", P = '[data-automation-id="errorMessage"][role="alert"], [data-automation-id="errorMessage"]', _ = [
    {
        pattern: /verify your account|verification email|account verification/i,
        message: "Please check your inbox and verify your email address to continue.",
        messageType: "account_verification_required"
    },
    {
        pattern: /reset your password|forgot password|administrator request/i,
        message: "Please reset your password.",
        messageType: "password_reset_required"
    },
    {
        pattern: /wrong email address or password|account might be locked/i,
        message: "You may have registered with this email before. Please try your previous password, or reset it.",
        messageType: "invalid_credentials_or_locked"
    }
];
function L() {
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}
_c = L;
function R(e1, t) {
    return !e1.getAttribute(T) && (e1.setAttribute(T, t), !0);
}
_c1 = R;
function O(e1, t) {
    e1.getAttribute(T) === t && e1.removeAttribute(T);
}
_c2 = O;
function M(e1, t) {
    return (0, l.findVisiblePreAutofillElement)(e1, t, e1.defaultView?.HTMLInputElement);
}
_c3 = M;
function N(e1, t) {
    return (0, l.findVisiblePreAutofillElements)(e1, t, e1.defaultView?.HTMLInputElement);
}
_c4 = N;
function $(e1) {
    return p(e1, y);
}
function B(e1) {
    return K(e1, /^Apply Manually$/i);
}
_c5 = B;
function q(e1) {
    let t = B(e1);
    if (!t) return null;
    let r1 = t.href ?? t.closest?.("a[href]")?.href;
    return "string" == typeof r1 && r1 ? r1 : null;
}
function U(e1) {
    return M(e1, m);
}
_c6 = U;
function H(e1) {
    return M(e1, h);
}
_c7 = H;
function Y(e1) {
    return N(e1, g);
}
_c8 = Y;
function z(e1, t) {
    if (t.hidden || t.getAttribute?.("aria-hidden") === "true" || t.closest?.("[hidden], [aria-hidden='true']")) return !1;
    if ((0, l.isVisiblePreAutofillElement)(t)) return !0;
    let r1 = tH(e1, t);
    if (r1 && (0, l.isVisiblePreAutofillElement)(r1)) return !0;
    let n = t.closest?.('[data-automation-id^="formField-"]'), o = e1.defaultView?.HTMLElement ?? ("undefined" != typeof HTMLElement ? HTMLElement : null);
    if (n && (!o || n instanceof o) && (0, l.isVisiblePreAutofillElement)(n)) return !0;
    let i = t.parentElement;
    return !!i && (0, l.isVisiblePreAutofillElement)(i);
}
function V(e1) {
    return Array.from(e1.querySelectorAll(b)).find((t)=>z(e1, t)) ?? null;
}
_c9 = V;
function W(e1) {
    return p(e1, S);
}
_c10 = W;
function G(e1) {
    return p(e1, E);
}
_c11 = G;
function K(e1, t) {
    if ("function" != typeof e1.querySelectorAll) return null;
    let r1 = Array.from(e1.querySelectorAll("button, a, [role='button']"));
    return r1.find((e1)=>{
        let r1 = e1, n = r1.textContent?.replace(/\s+/g, " ").trim() ?? "", o = r1.getAttribute?.("aria-label")?.replace(/\s+/g, " ").trim() ?? "";
        return (t.test(n) || t.test(o)) && (0, l.isVisiblePreAutofillElement)(r1);
    }) ?? null;
}
_c12 = K;
function X(e1) {
    if (!e1) return null;
    let t = e1.getAttribute?.("data-automation-id") ?? "", r1 = e1.getAttribute?.("aria-label") ?? "", n = e1.getAttribute?.("id") ?? "", o = e1.getAttribute?.("role") ?? "", i = e1.textContent?.replace(/\s+/g, " ").trim() ?? "";
    return [
        t ? `automationId=${t}` : "",
        r1 ? `aria=${r1}` : "",
        n ? `id=${n}` : "",
        o ? `role=${o}` : "",
        i ? `text=${i.slice(0, 120)}` : "",
        `visible=${(0, l.isVisiblePreAutofillElement)(e1)}`
    ].filter(Boolean).join(" | ");
}
_c13 = X;
function J(e1) {
    return "function" != typeof e1.querySelectorAll ? [] : Array.from(e1.querySelectorAll("button, a, [role='button']")).slice(0, 12).map((e1)=>X(e1));
}
_c14 = J;
function Q() {
    if ("undefined" == typeof window) return !1;
    try {
        return window.localStorage?.getItem(I) === "1" || window.sessionStorage?.getItem(I) === "1";
    } catch  {
        return !1;
    }
}
_c15 = Q;
function Z({ document: e1, phase: t, target: r1, url: n, aborted: o }) {
    if (!Q()) return;
    let i = p(e1, w), a = K(e1, /^Sign in with email$/i), l = G(e1), s = es(e1), u = U(e1), c = H(e1), d = K(e1, /^Sign In$/i);
    console.info(j, t, {
        url: n,
        documentTitle: e1.title,
        authTitle: eu(e1),
        aborted: o ?? !1,
        target: r1 ?? null,
        socialShell: ej(e1),
        pendingLoginAuthDom: eD({
            document: e1,
            url: n
        }),
        hasSignInContent: null !== el(e1),
        signInWithEmailAutomation: !!i,
        signInWithEmailAutomationInfo: X(i),
        signInWithEmailText: !!a,
        signInWithEmailTextInfo: X(a),
        nativeSubmit: !!l,
        nativeSubmitInfo: X(l),
        signInForm: !!s,
        signInFormInfo: X(s),
        emailInput: !!u,
        emailInputInfo: X(u),
        passwordInput: !!c,
        passwordInputInfo: X(c),
        visibleSignInButton: !!d,
        visibleSignInButtonInfo: X(d),
        buttons: J(e1)
    });
}
_c16 = Z;
function ee(e1) {
    return p(e1, w) ?? K(e1, /^Sign in with email$/i);
}
function et(e1) {
    return p(e1, 'button[data-automation-id="createAccountSubmitButton"]');
}
function er(e1) {
    return p(e1, 'button[data-automation-id="signInSubmitButton"], [data-automation-id="signInSubmitButton"]');
}
function en(e1) {
    return p(e1, x);
}
function eo(e1) {
    return p(e1, C);
}
function ei({ document: e1, state: t }) {
    return "registration" === t ? W(e1) : "reset_password" === t ? eo(e1) : G(e1);
}
function ea(e1) {
    return p(e1, 'input[data-automation-id="verifyPassword"], input[data-automation-id="createAccountCheckbox"]');
}
function el(e1) {
    return p(e1, '[data-automation-id="signInContent"]');
}
function es(e1) {
    return p(e1, '[data-automation-id="signInForm"]');
}
function eu(e1) {
    return p(e1, '#authViewTitle, [id="authViewTitle"]')?.textContent?.replace(/\s+/g, " ").trim() ?? "";
}
function ec(e1) {
    return null !== el(e1);
}
function ed(e1, t) {
    let r1 = eu(e1);
    return ec(e1) && (t.test(r1) || t.test(el(e1)?.textContent ?? ""));
}
function ef(e1) {
    let t = el(e1) ?? p(e1, '[data-automation-id="applyFlowMyInfoPage"]') ?? p(e1, '[data-automation-id="applyFlowPage"], [data-automation-id="applyFlowMyExpPage"], main, body') ?? e1.body ?? e1.documentElement;
    return t?.textContent?.replace(/\s+/g, " ").trim() ?? "";
}
function ep(e1) {
    let t = [
        e1.title,
        eu(e1),
        ...(0, l.findVisiblePreAutofillElements)(e1, "h1, h2, [role='heading']", e1.defaultView?.HTMLElement).map((e1)=>e1.textContent?.replace(/\s+/g, " ").trim() ?? "")
    ].filter(Boolean).join(" ") ?? "";
    return /\bForgot Password\b/i.test(t);
}
function em(e1) {
    let t = ef(e1), r1 = /\bForgot Password\b/i.test(t) || ep(e1), n = null !== U(e1) && null === H(e1) && null !== en(e1);
    return r1 && n;
}
function eh(e1) {
    let t = [
        e1.title,
        eu(e1),
        ...(0, l.findVisiblePreAutofillElements)(e1, "h1, h2, h3, [role='heading']", e1.defaultView?.HTMLElement).map((e1)=>e1.textContent?.replace(/\s+/g, " ").trim() ?? "")
    ].filter(Boolean).join(" ") ?? "";
    return /\bReset Password\b/i.test(t);
}
function eg(e1) {
    if (!e1) return !1;
    let t = eX(e1);
    return !!t && eY(t.pathname);
}
function eb({ document: e1, url: t }) {
    let r1 = ef(e1), n = /\bReset Password\b/i.test(r1) || eh(e1), o = null !== H(e1) && Y(e1).length > 0 && null === U(e1) && null !== eo(e1);
    return o && n && (eg(t) || /\bPassword Requirements\b/i.test(r1));
}
function ey(e1) {
    return e1.replace(/\s+/g, " ").trim();
}
function ev(e1) {
    return e1.replace(/\s+/g, " ").trim();
}
function ew({ rawMessage: e1, messageType: t }) {
    let r1 = ev(e1);
    return {
        rawMessage: r1,
        messageType: t,
        message: "reset_email_sent" === t ? "Check your email for password reset instructions." : "Password reset is temporarily unavailable. Please contact the administrator."
    };
}
function eS(e1) {
    let t = ey(e1), r1 = _.find(({ pattern: e1 })=>e1.test(t));
    return {
        message: r1?.message ?? t,
        rawMessage: t,
        messageType: r1?.messageType
    };
}
function eE(e1) {
    let t = p(e1, P), r1 = ey(t?.textContent ?? "");
    return r1 || null;
}
function ex(e1) {
    return eC(e1)[0] ?? null;
}
function eC(e1) {
    let t = [], r1 = p(e1, P), n = ev(r1?.textContent ?? "");
    n && t.push(ew({
        rawMessage: n,
        messageType: "reset_failed"
    }));
    let o = p(e1, A), i = ev(o?.textContent ?? "");
    return i && t.push(ew({
        rawMessage: i,
        messageType: "reset_email_sent"
    })), t;
}
async function eA({ document: e1, signal: t }) {
    return (0, f.default)(()=>ex(e1), ()=>t?.aborted ?? !1, 80);
}
async function ek({ document: e1, signal: t }) {
    let r1 = await (0, f.default)(()=>eE(e1), ()=>t?.aborted ?? !1, 80);
    return r1 ? eS(r1) : null;
}
function eT(e1) {
    let t = ef(e1);
    return /\bCreate Account\b/i.test(t) && (/\bVerify New Password\b/i.test(t) || /\bPassword Requirements\b/i.test(t) || /\bAlready have an account\?\s*Sign In\b/i.test(t));
}
function eF(e1) {
    let t = ef(e1);
    return /\bSign In\b/i.test(t) && /\bPassword\b/i.test(t) && null !== p(e1, 'input[data-automation-id="email"]') && null !== p(e1, 'input[data-automation-id="password"]');
}
function eI(e1) {
    let t = eu(e1);
    return null !== el(e1) && /^Sign In$/i.test(t) && null !== ee(e1);
}
function ej(e1) {
    let t = eu(e1), r1 = el(e1), n = r1?.textContent?.replace(/\s+/g, " ").trim() ?? "";
    return null !== r1 && /^Sign In$/i.test(t) && null === U(e1) && null === H(e1) && (/\bSign in with (?:Google|LinkedIn|Apple)\b/i.test(n) || /\bOR\b/i.test(n));
}
function eD({ document: e1, url: t }) {
    if (U(e1) || H(e1) || !t) return !1;
    try {
        let e1 = "undefined" != typeof window ? window.location.href : "https://example.com", r1 = new URL(t, e1).pathname;
        return eU(r1) || eH(r1);
    } catch  {
        return !1;
    }
}
function eP(e1) {
    if (ee(e1)) return "sign_in_with_email";
    let t = null !== G(e1) || null !== es(e1) || null !== U(e1) && null !== H(e1), r1 = null !== K(e1, /^Sign In$/i);
    return t && r1 ? "sign_in_form" : null;
}
function e_(e1) {
    let t = eP(e1);
    return "sign_in_with_email" === t || "sign_in_form" === t && null === et(e1) && null === ea(e1) && !eT(e1);
}
function eL({ document: e1, url: t }) {
    return ej(e1) || eD({
        document: e1,
        url: t
    });
}
function eR({ document: e1, phasePrefix: t, signal: r1, url: n }) {
    Z({
        document: e1,
        phase: `${t}-enter`,
        url: n,
        aborted: r1.aborted
    });
    let o = eP(e1);
    if (Z({
        document: e1,
        phase: `${t}-existing-target`,
        target: o,
        url: n,
        aborted: r1.aborted
    }), o) return {
        target: o,
        shouldWait: !1
    };
    if (r1.aborted) return Z({
        document: e1,
        phase: `${t}-aborted`,
        url: n,
        aborted: !0
    }), {
        target: null,
        shouldWait: !1
    };
    let i = eL({
        document: e1,
        url: n
    });
    return i || Z({
        document: e1,
        phase: `${t}-skip-no-pending-choice`,
        url: n,
        aborted: r1.aborted
    }), {
        target: null,
        shouldWait: i
    };
}
function eO({ document: e1, phasePrefix: t, signal: r1, url: n }) {
    let o = 0;
    return (0, f.default)(()=>{
        o += 1;
        let i = eP(e1);
        return Z({
            document: e1,
            phase: `${t}-poll-${o}`,
            target: i,
            url: n,
            aborted: r1.aborted
        }), i;
    }, ()=>{
        let o = r1.aborted;
        return o && Z({
            document: e1,
            phase: `${t}-poll-aborted`,
            url: n,
            aborted: o
        }), o;
    }, k).then((o)=>(Z({
            document: e1,
            phase: `${t}-poll-result`,
            target: o,
            url: n,
            aborted: r1.aborted
        }), o));
}
function eM(e1) {
    return ed(e1, /^Create Account$/i) || null !== et(e1) || null !== ea(e1) || eT(e1);
}
function eN(e1) {
    return eI(e1) || null !== er(e1) || eF(e1) || e_(e1);
}
function e$(e1) {
    return $(e1)?.textContent?.trim() ?? "";
}
function eB(e1) {
    return /^Apply$/i.test(e$(e1));
}
function eq(e1) {
    return /^Continue Application$/i.test(e$(e1));
}
function eU(e1) {
    return /\/login(?:[/?#]|$)/i.test(e1);
}
function eH(e1) {
    return /\/userHome(?:[/?#]|$)/i.test(e1);
}
function eY(e1) {
    return /\/passwordreset(?:[/?#]|$)/i.test(e1);
}
function ez(e1) {
    return /\/apply\/applyManually(?:[/?#]|$)/i.test(e1);
}
function eV(e1) {
    return /\/apply(?:[/?#]|$)/i.test(e1) && !ez(e1);
}
function eW(e1) {
    return /\/details\//i.test(e1) || /\/job\//i.test(e1);
}
function eG(e1) {
    let t = e1.replace(/\/+$/, "");
    return t || "/";
}
function eK(e1) {
    return eG(e1).replace(/^\/[a-z]{2}-[a-z]{2}(?=\/)/i, "");
}
function eX(e1) {
    try {
        return new URL(e1);
    } catch  {
        return null;
    }
}
function eJ(e1) {
    return e1.searchParams.get("jr_id");
}
function eQ(e1) {
    let t = e1.searchParams.get("redirect");
    if (!t) return null;
    try {
        return eK(new URL(t, e1.origin).pathname);
    } catch  {
        return null;
    }
}
function eZ(e1) {
    let t = eQ(e1), r1 = t ?? eK(e1.pathname), n = r1.search(/\/apply(?:\/applyManually)?(?:\/|$)/i);
    return n >= 0 ? eG(r1.slice(0, n)) : r1;
}
function e0(e1, t) {
    if (e1.hostname.toLowerCase() !== t.hostname.toLowerCase()) return !1;
    let r1 = eJ(e1), n = eJ(t);
    return !r1 || !n || r1 === n;
}
function e2(e1, t) {
    return !!e0(e1, t) && eK(e1.pathname) === eK(t.pathname);
}
function e1(e1, t) {
    return !!e0(e1, t) && eZ(e1) === eZ(t);
}
function e3({ pending: e3, currentUrl: t }) {
    let r1 = eX(e3.sourceUrl), n = eX(t);
    if (!r1 || !n) return !1;
    let o = e3.targetUrl ? eX(e3.targetUrl) : null;
    return !!(o && e2(o, n) || "reset_password" === e3.intent && e0(r1, n) && eY(r1.pathname) && eH(n.pathname)) || e1(r1, n);
}
function e4({ document: e1, url: t }) {
    return !(e7({
        document: e1,
        url: t
    }) || eM(e1)) && eN(e1);
}
function e5({ document: e1, url: t }) {
    return !e7({
        document: e1,
        url: t
    }) && eM(e1);
}
let e6 = /\b(?:My Information|My Experience|Application Questions|Voluntary Disclosures|Self[-\s]?Identify|Review)\b/i, e8 = '[data-automation-id="sectionTitle"], [data-automation-id="pageTitle"], [data-automation-id="stepTitle"], [id="sectionTitle"], [id="pageTitle"], [id="stepTitle"]';
function e9(e1) {
    return (0, l.findVisiblePreAutofillElements)(e1, e8, e1.defaultView?.HTMLElement).map((e1)=>e1.textContent?.replace(/\s+/g, " ").trim() ?? "").filter(Boolean);
}
function e7({ document: e1, url: t }) {
    return !!te(t) && e9(e1).some((e1)=>e6.test(e1));
}
function te(e1) {
    if (!e1) return !1;
    let t = eX(e1);
    return !!t && /\/apply(?:[/?#]|$)/i.test(t.pathname);
}
function tt(e1) {
    return null !== p(e1, 'div[data-automation-id^="formField-"]');
}
function tr(e1) {
    return null !== p(e1, v);
}
function tn({ document: e1, url: t }) {
    return !!e7({
        document: e1,
        url: t
    }) || !(eM(e1) || eN(e1) || B(e1)) && (tr(e1) || tt(e1));
}
function to({ document: e1, url: t, applicationFormSignal: r1, match: n, blockedBy: o }) {
    if (!Q()) return;
    let i = eX(t), a = i?.pathname ?? "";
    console.info(D, {
        url: t,
        pathname: a,
        documentTitle: e1.title,
        authTitle: eu(e1),
        applicationStepTitleTexts: e9(e1),
        loginPath: !!i && eU(a),
        userHomePath: !!i && eH(a),
        applyManuallyPath: !!i && ez(a),
        applyStartPath: !!i && eV(a),
        jobDetailPath: !!i && eW(a),
        applicationFormSignal: r1,
        applicationStepTitleSignal: e7({
            document: e1,
            url: t
        }),
        applicationNavigationSignal: tr(e1),
        applicationFormFieldSignal: tt(e1),
        createAccountSignal: eM(e1),
        signInSignal: eN(e1),
        signInChoiceTarget: eP(e1),
        signInContent: !!el(e1),
        signInForm: !!es(e1),
        emailInput: !!U(e1),
        passwordInput: !!H(e1),
        signInSubmit: !!G(e1),
        visibleSignInButton: !!K(e1, /^Sign In$/i),
        signInWithEmailButton: !!ee(e1),
        blockedBy: o ?? null,
        match: n ? {
            flowId: n.flowId,
            pageKind: n.pageKind,
            ctaText: n.ctaText
        } : null
    });
}
function ti({ document: e1, parsedUrl: t }) {
    return eW(t.pathname) && !eU(t.pathname) && !ez(t.pathname) && eB(e1);
}
function ta({ document: e1, parsedUrl: t }) {
    return eW(t.pathname) && !eU(t.pathname) && !ez(t.pathname) && eq(e1);
}
function tl({ document: e1, parsedUrl: t }) {
    return eW(t.pathname) && eV(t.pathname) && null !== B(e1);
}
let ts = [
    {
        label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.clickApply,
        type: "click",
        run: tj
    },
    {
        label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.selectedApplyManually,
        type: "click",
        transition: {
            timing: "before",
            includeStep: !0,
            currentStep: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.emailAddress,
            getTargetUrl: ({ document: e1 })=>q(e1)
        },
        run: tD
    }
], tu = [
    {
        label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.selectedApplyManually,
        type: "click",
        transition: {
            timing: "before",
            includeStep: !0,
            currentStep: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.emailAddress,
            getTargetUrl: ({ document: e1 })=>q(e1)
        },
        run: tD
    }
], tc = [
    {
        label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.clickContinueApplication,
        type: "click",
        transition: {
            timing: "before",
            includeStep: !0,
            currentStep: null
        },
        run: tj
    }
], td = [
    {
        label: "Prepare Workday Account Form",
        type: "prepare",
        progress: !1,
        run: tI
    },
    {
        label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.emailAddress,
        type: "fill",
        progressGroup: "create_account",
        waitForCredential: "email",
        run: tM
    },
    {
        label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.password,
        type: "fill",
        progressGroup: "create_account",
        waitForCredential: "password",
        run: t$
    },
    {
        label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.verifyNewPassword,
        type: "fill",
        progressGroup: "create_account",
        shouldRun: tq,
        run: tB
    },
    {
        label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.agreePrivacyNotice,
        type: "check",
        progressGroup: "create_account",
        shouldRun: tY,
        run: tz
    },
    {
        label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.clickCreateAccount,
        type: "track_submit",
        progress: !1,
        run: tV
    }
], tf = [
    {
        label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.signInWithEmail,
        type: "click",
        shouldRun: tP,
        run: tR
    },
    {
        label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.clickCreateAccount,
        type: "click",
        shouldRun: t_,
        transition: {
            timing: "after",
            intent: "registration",
            includeStep: !0,
            currentStep: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.emailAddress
        },
        run: tO
    },
    {
        label: "Prepare Workday Account Form",
        type: "prepare",
        progress: !1,
        shouldRun: tL,
        run: tI
    },
    {
        label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.emailAddress,
        type: "fill",
        waitForCredential: "email",
        shouldRun: tL,
        run: tM
    },
    {
        label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.password,
        type: "fill",
        waitForCredential: "password",
        shouldRun: tL,
        run: t$
    },
    {
        label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.clickSignIn,
        type: "track_submit",
        progress: !1,
        shouldRun: tL,
        run: tV
    }
], tp = [
    {
        label: "Prepare Workday Forgot Password Form",
        type: "prepare",
        progress: !1,
        run: tI
    },
    {
        label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.emailAddress,
        type: "fill",
        waitForCredential: "email",
        run: tN
    },
    {
        label: "Track Reset Password",
        type: "track_submit",
        progress: !1,
        submitSession: !1,
        run: tF
    }
], tm = [
    {
        label: "Prepare Workday Account Form",
        type: "prepare",
        progress: !1,
        run: tI
    },
    {
        label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.password,
        type: "fill",
        waitForCredential: "password",
        run: t$
    },
    {
        label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.verifyNewPassword,
        type: "fill",
        waitForCredential: "password",
        run: tB
    },
    {
        label: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.clickResetPassword,
        type: "track_submit",
        progress: !1,
        run: tV
    }
], th = {
    forgot_password: {
        state: "forgot_password",
        ctaText: "Autofill",
        progressTitle: null,
        detect: ({ document: e1 })=>em(e1),
        steps: tp
    }
}, tg = {
    reset_password: {
        state: "reset_password",
        ctaText: "Autofill",
        detect: ({ document: e1, url: t })=>eb({
                document: e1,
                url: t
            }),
        steps: tm
    }
}, tb = {
    create_account: {
        state: "registration",
        detect: e5,
        steps: td
    },
    sign_in: {
        state: "sign_in",
        detect: e4,
        steps: tf
    },
    jd: {
        state: "registration",
        entry: !0,
        excludeUrl: [
            /\/login(?:[/?#]|$)/i,
            /\/apply\/applyManually(?:[/?#]|$)/i
        ],
        detect: ti,
        steps: ts
    },
    apply_start: {
        state: "registration",
        entry: !0,
        excludeUrl: [
            /\/login(?:[/?#]|$)/i,
            /\/apply\/applyManually(?:[/?#]|$)/i
        ],
        detect: tl,
        steps: tu
    },
    jd_continue_application: {
        state: "registration",
        ctaText: "Autofill",
        entry: !0,
        progressTitle: null,
        completeEntryProgress: !0,
        excludeUrl: [
            /\/login(?:[/?#]|$)/i,
            /\/apply\/applyManually(?:[/?#]|$)/i
        ],
        detect: ta,
        steps: tc
    }
}, ty = null;
async function tv() {
    let e1 = await (0, o.sendToBackground)({
        name: "getAutofillInfo",
        body: {
            forceRefresh: !0
        }
    }).catch(()=>null);
    return (0, i.resolveSignupRegistrationEmail)(e1);
}
async function tw() {
    let e1 = await (0, c.getWorkdaySignupInformation)().catch(()=>null);
    return e1?.password ?? "";
}
async function tS() {
    return {
        email: await tv(),
        password: ""
    };
}
async function tE() {
    return {
        email: "",
        password: await tw()
    };
}
function tx() {
    let e1 = (0, u.useAutofillResultStore).getState(), t = e1.autoFillResult;
    if (!t) return;
    let { [a.WORKDAY_FORGOT_PASSWORD_SUBMIT_MESSAGE_KEY]: r1, ...n } = t.userAutoFillResponse ?? {};
    e1.setAutoFillResult({
        ...t,
        userAutoFillResponse: n
    });
}
function tC(e1) {
    let t = (0, u.useAutofillResultStore).getState(), r1 = t.autoFillResult;
    if (!r1) return;
    t.setAutoFillResult({
        ...r1,
        userAutoFillResponse: {
            ...r1.userAutoFillResponse ?? {},
            [a.WORKDAY_FORGOT_PASSWORD_SUBMIT_MESSAGE_KEY]: e1
        },
        currentField: null
    });
    let n = "undefined" != typeof window ? window.location?.href ?? "" : "";
    (0, s.sendWorkdayAccountFlowComplete)({
        targetName: "myworkday",
        url: n,
        pending: {
            flowId: "workday_forgot_password_flow",
            intent: "forgot_password",
            sourceUrl: n,
            sourcePageKind: "forgot_password",
            transitionStep: a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.clickResetPassword,
            completedSteps: [
                a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.emailAddress
            ],
            currentStep: null
        }
    }), "undefined" != typeof document && document.dispatchEvent(new CustomEvent(a.WORKDAY_FORGOT_PASSWORD_SUBMIT_MESSAGE_EVENT));
}
let tA = null, tk = 0;
function tT(e1) {
    return new Promise((t)=>{
        if (e1.aborted) {
            t();
            return;
        }
        let r1 = null, n = ()=>{
            null !== r1 && clearTimeout(r1), e1.removeEventListener("abort", o), t();
        }, o = ()=>n();
        r1 = setTimeout(n, a.PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_REFRESH_DELAY_MS), e1.addEventListener("abort", o, {
            once: !0
        });
    });
}
function tF({ document: e1, signal: t, onSubmit: r1 }) {
    tA?.(), tA = null;
    let n = en(e1);
    if (!n || n.getAttribute(F)) return;
    n.setAttribute(F, "1");
    let o = ()=>{
        r1();
        let n = ++tk;
        tx(), tT(t).then(()=>eA({
                document: e1,
                signal: t
            })).then((e1)=>{
            e1 && !t.aborted && n === tk && tC(e1);
        });
    }, i = ()=>{
        n.removeEventListener("click", o, !0), n.removeAttribute(F), t.removeEventListener("abort", i), tA === i && (tA = null);
    };
    n.addEventListener("click", o, !0), t.addEventListener("abort", i, {
        once: !0
    }), tA = i;
}
function tI({ document: e1 }) {
    (0, l.clearNativeInputValues)([
        U(e1),
        H(e1),
        ...Y(e1)
    ]);
}
async function tj({ document: e1, signal: t }) {
    return (0, l.clickPreAutofillElement)({
        document: e1,
        signal: t,
        findElement: ()=>$(e1)
    });
}
async function tD({ document: e1, signal: t }) {
    return (0, l.clickPreAutofillElement)({
        document: e1,
        signal: t,
        findElement: ()=>B(e1)
    });
}
function tP({ document: e1, url: t, signal: r1 }) {
    let n = eR({
        document: e1,
        phasePrefix: "ui",
        signal: r1,
        url: t
    });
    return n.target ? "sign_in_with_email" === n.target : n.shouldWait;
}
function t_({ entrySession: e1 }) {
    return !!e1 && "registration" === e1.pageKind && e1.completedSteps.includes(a.PRE_AUTOFILL_ACCOUNT_STEP_LABELS.selectedApplyManually);
}
function tL(e1) {
    return !t_(e1);
}
async function tR({ document: e1, signal: t, url: r1 }) {
    let n = eR({
        document: e1,
        phasePrefix: "action",
        signal: t,
        url: r1
    }), o = n.target ?? (n.shouldWait ? await eO({
        document: e1,
        phasePrefix: "action",
        signal: t,
        url: r1
    }) : null);
    return "sign_in_form" === o || ("sign_in_with_email" !== o ? (Z({
        document: e1,
        phase: "action-missing-choice-target",
        target: o,
        url: r1,
        aborted: t.aborted
    }), !1) : (0, l.clickPreAutofillElement)({
        document: e1,
        signal: t,
        findElement: ()=>ee(e1)
    }));
}
async function tO({ document: e1, signal: t }) {
    return (0, l.clickPreAutofillElement)({
        document: e1,
        signal: t,
        findElement: ()=>p(e1, 'button[data-automation-id="createAccountLink"]')
    });
}
async function tM({ document: e1, credentials: t, signal: r1 }) {
    return (0, l.fillPreAutofillInput)({
        document: e1,
        signal: r1,
        findInput: ()=>U(e1),
        value: t.email
    });
}
async function tN({ document: e1, credentials: t, signal: r1 }) {
    return !!t.email && (0, l.fillPreAutofillInput)({
        document: e1,
        signal: r1,
        findInput: ()=>U(e1),
        value: t.email
    });
}
async function t$({ document: e1, credentials: t, signal: r1 }) {
    return (0, l.fillPreAutofillInput)({
        document: e1,
        signal: r1,
        findInput: ()=>H(e1),
        value: t.password
    });
}
async function tB({ document: e1, credentials: t, signal: r1 }) {
    return (0, l.fillPreAutofillInputs)({
        document: e1,
        signal: r1,
        findInputs: ()=>Y(e1),
        value: t.password
    });
}
function tq({ document: e1 }) {
    return Y(e1).length > 0;
}
function tU(e1) {
    return e1.checked || "true" === e1.getAttribute("aria-checked");
}
function tH(e1, t) {
    return t.id ? Array.from(e1.querySelectorAll("label")).find((e1)=>e1.htmlFor === t.id) ?? null : null;
}
function tY({ document: e1 }) {
    return null !== V(e1);
}
async function tz({ document: e1, signal: t }) {
    let r1 = await (0, l.waitForPreAutofillElement)(e1, ()=>V(e1), void 0, t);
    return !t.aborted && (!!(!r1 || tU(r1)) || (r1.click(), !!tU(r1) || (tH(e1, r1)?.click(), tU(r1))));
}
function tV({ document: e1, state: t, url: r1, signal: n, onSubmit: o }) {
    ty?.(), ty = null;
    let i = ei({
        document: e1,
        state: t
    });
    if (!i) return;
    let a = L();
    if (!R(i, a)) return;
    let l = ()=>{
        let e1 = o();
        e1.didSubmit && t1({
            currentUrl: r1,
            pending: e1.pending
        });
    }, s = ()=>{
        i.removeEventListener("click", l, !0), O(i, a), n.removeEventListener("abort", s), ty === s && (ty = null);
    };
    i.addEventListener("click", l, !0), n.addEventListener("abort", s, {
        once: !0
    }), ty = s;
}
let tW = (0, a.createPreAutofillAccountFlowAdapter)({
    flowId: "workday_account_flow",
    rules: tb,
    getEmail: tv,
    getPassword: tw
});
function tG({ getCredentials: e1 = tS } = {}) {
    return (0, a.createPreAutofillAccountFlowAdapter)({
        flowId: "workday_forgot_password_flow",
        rules: th,
        getCredentials: e1
    });
}
let tK = tG();
function tX({ getCredentials: e1 = tE } = {}) {
    return (0, a.createPreAutofillAccountFlowAdapter)({
        flowId: "workday_reset_password_flow",
        rules: tg,
        getCredentials: e1
    });
}
let tJ = tX(), tQ = {
    ...tW,
    detect (e1) {
        let t = tn({
            document: e1.document,
            url: e1.url
        });
        if (t) return to({
            document: e1.document,
            url: e1.url,
            applicationFormSignal: t,
            match: null,
            blockedBy: "application_form_signal"
        }), null;
        let r1 = tW.detect(e1);
        return to({
            document: e1.document,
            url: e1.url,
            applicationFormSignal: t,
            match: r1
        }), r1;
    }
};
function tZ({ url: e1, document: t }) {
    return tQ.detect({
        targetName: "myworkday",
        url: e1,
        document: t
    });
}
function t0({ document: e1, url: t }) {
    return tn({
        document: e1,
        url: t
    });
}
function t2({ document: e1, url: t }) {
    return tn({
        document: e1,
        url: t
    });
}
function t1({ currentUrl: e1, pending: t }) {
    (0, s.sendWorkdayAccountFlowComplete)({
        targetName: "myworkday",
        url: e1,
        pending: t
    });
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;
$RefreshReg$(_c, "L");
$RefreshReg$(_c1, "R");
$RefreshReg$(_c2, "O");
$RefreshReg$(_c3, "M");
$RefreshReg$(_c4, "N");
$RefreshReg$(_c5, "B");
$RefreshReg$(_c6, "U");
$RefreshReg$(_c7, "H");
$RefreshReg$(_c8, "Y");
$RefreshReg$(_c9, "V");
$RefreshReg$(_c10, "W");
$RefreshReg$(_c11, "G");
$RefreshReg$(_c12, "K");
$RefreshReg$(_c13, "X");
$RefreshReg$(_c14, "J");
$RefreshReg$(_c15, "Q");
$RefreshReg$(_c16, "Z");

},{}]},["eGeaD","9FPsA"], "9FPsA", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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Q1Q7UUFDQSxJQUFJLEdBQUcsT0FBTyxHQUFHO1lBQ2YsVUFBVSxHQUFFO1lBQ1osS0FBSyxHQUFFO1lBQ1AsdUJBQXVCO1lBQ3ZCLE9BQU87WUFDUCxXQUFXO1FBQ2IsSUFBSTtRQUNKLElBQUksS0FBSSxHQUFHLE9BQU87UUFDbEIsT0FBTyxHQUFHO1lBQ1IsVUFBVSxHQUFFO1lBQ1osS0FBSyxHQUFFO1lBQ1AsdUJBQXVCO1lBQ3ZCLE9BQU87UUFDVCxJQUFJO0lBQ047QUFDRjtBQUVGLFNBQVMsR0FBRyxFQUNWLEtBQUssRUFBQyxFQUNOLFVBQVUsQ0FBQyxFQUNaO0lBQ0MsT0FBTyxHQUFHLE9BQU87UUFDZixZQUFZO1FBQ1osS0FBSztRQUNMLFVBQVU7SUFDWjtBQUNGO0FBRUEsU0FBUyxHQUFHLEVBQ1YsVUFBVSxFQUFDLEVBQ1gsS0FBSyxDQUFDLEVBQ1A7SUFDQyxPQUFPLEdBQUc7UUFDUixVQUFVO1FBQ1YsS0FBSztJQUNQO0FBQ0Y7QUFFQSxTQUFTLEdBQUcsRUFDVixVQUFVLEVBQUMsRUFDWCxLQUFLLENBQUMsRUFDUDtJQUNDLE9BQU8sR0FBRztRQUNSLFVBQVU7UUFDVixLQUFLO0lBQ1A7QUFDRjtBQUVBLFNBQVMsR0FBRyxFQUNWLFlBQVksRUFBQyxFQUNiLFNBQVMsQ0FBQyxFQUNYO0lBQ0UsQ0FBQSxHQUFHLEVBQUUsOEJBQTZCLEVBQUc7UUFDcEMsWUFBWTtRQUNaLEtBQUs7UUFDTCxTQUFTO0lBQ1g7QUFDRiIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtNDBjZmI0NTEyYTYxOTY4Yy5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9zaXRlcy9teXdvcmtkYXkvYWNjb3VudC1wcmVmbG93LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBXPU9iamVjdC5jcmVhdGU7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBWPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcT0oZSx0LG8scik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG4gb2YgRyh0KSkhSi5jYWxsKGUsbikmJm4hPT1vJiZQKGUsbix7Z2V0OigpPT50W25dLGVudW1lcmFibGU6IShyPVYodCxuKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgej0oZSx0LG8pPT4obz1lIT1udWxsP1coWChlKSk6e30scSh0fHwhZXx8IWUuX19lc01vZHVsZT9QKG8sXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOm8sZSkpO3ZhciB5PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIEg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSz1uZXcgU2V0KHkpLEQ9ZT0+Sy5oYXMoZSksdWU9eS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBkZT1EKFwiLS1kcnktcnVuXCIpLF89KCk9PkQoXCItLXZlcmJvc2VcIil8fEgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsZmU9XygpO3ZhciB4PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBrPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksVD0oLi4uZSk9PngoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxBPSguLi5lKT0+eChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFE9MCxwPSguLi5lKT0+XygpJiZ4KGBcXHV7MUY3RTF9ICR7USsrfWAsLi4uZSk7dmFyIGM9e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wicGFnZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXHNpdGVzXFxcXG15d29ya2RheVxcXFxhY2NvdW50LXByZWZsb3cuanNcIixcImJ1bmRsZUlkXCI6XCI4MjRjMmM2OTVhMDcyNjBlXCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogaE9Ta0JcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL215d29ya2RheS9hY2NvdW50LXByZWZsb3cuanNcbiAqIERlcGVuZGVuY2llczpcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIEBwbGFzbW9ocS9tZXNzYWdpbmcgLT4gOTJHeUIgID0+ICBAcGxhc21vaHEvbWVzc2FnaW5nLmpzXHJcbiAqICAgfmFwaS9hdXRvZmlsbC1zaWdudXAtaW5mb3JtYXRpb24gLT4gNTJ2T3QgID0+ICBzcmMvYXBpL2F1dG9maWxsLXNpZ251cC1pbmZvcm1hdGlvbi5qc1xyXG4gKiAgIH5jb250ZW50cy9wcmUtYXV0b2ZpbGwtZmxvdy9hY2NvdW50LWZsb3cgLT4gSWdCSFIgID0+ICBzcmMvY29udGVudHMvcHJlLWF1dG9maWxsLWZsb3cvYWNjb3VudC1mbG93LmpzXHJcbiAqICAgfmNvbnRlbnRzL3ByZS1hdXRvZmlsbC1mbG93L2RvbSAtPiBmQ2h1MCAgPT4gIHNyYy9jb250ZW50cy9wcmUtYXV0b2ZpbGwtZmxvdy9kb20uanNcclxuICogICB+Y29udGVudHMvcHJlLWF1dG9maWxsLWZsb3cvdHJhY2tpbmcgLT4gM0wzeGggID0+ICBzcmMvY29udGVudHMvcHJlLWF1dG9maWxsLWZsb3cvdHJhY2tpbmcuanNcclxuICogICB+c3RvcmUvYXV0b2ZpbGxSZXN1bHQgLT4gaENVemYgID0+ICBzcmMvc3RvcmUvYXV0b2ZpbGxSZXN1bHQuanNcclxuICogICB+c3RvcmUvd29ya2RheS1zaWdudXAtaW5mbyAtPiBqamJJNyAgPT4gIHNyYy9zdG9yZS93b3JrZGF5LXNpZ251cC1pbmZvLmpzXHJcbiAqICAgfnV0aWxzL2dldFRhcmdldE9yVGltZW91dCAtPiAxVEJoRiAgPT4gIHNyYy91dGlscy9nZXRUYXJnZXRPclRpbWVvdXQuanNcclxuICovXHJcblxyXG52YXIgbiA9IGUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO1xyXG5uLmRlZmluZUludGVyb3BGbGFnKHIpLCBuLmV4cG9ydChyLCBcIldPUktEQVlfVkVSSUZZX1BBU1NXT1JEX0lOUFVUX1NFTEVDVE9SXCIsICgpID0+IGcpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJXT1JLREFZX0FDQ09VTlRfU1VCTUlUX1RSQUNLSU5HX0FUVFJJQlVURVwiLCAoKSA9PiBUKSwgbi5leHBvcnQocixcclxuICAgIFwibWFya1dvcmtkYXlBY2NvdW50U3VibWl0VHJhY2tpbmdcIiwgKCkgPT4gUiksIG4uZXhwb3J0KHIsIFwiY2xlYXJXb3JrZGF5QWNjb3VudFN1Ym1pdFRyYWNraW5nXCIsXHJcbiAgKCkgPT4gTyksIG4uZXhwb3J0KHIsIFwiZmluZFdvcmtkYXlWZXJpZnlQYXNzd29yZElucHV0c1wiLCAoKSA9PiBZKSwgbi5leHBvcnQocixcclxuICAgIFwiZmluZFdvcmtkYXlQcml2YWN5Tm90aWNlQ2hlY2tib3hcIiwgKCkgPT4gViksIG4uZXhwb3J0KHIsIFwiZmluZFdvcmtkYXlTaWduSW5TdWJtaXRCdXR0b25cIiwgKCkgPT5cclxuICAgIEcpLCBuLmV4cG9ydChyLCBcImZpbmRXb3JrZGF5U2lnbkluV2l0aEVtYWlsQnV0dG9uXCIsICgpID0+IGVlKSwgbi5leHBvcnQocixcclxuICAgIFwiZGV0ZWN0V29ya2RheUZvcmdvdFBhc3N3b3JkU3VibWl0TWVzc2FnZVwiLCAoKSA9PiBlQSksIG4uZXhwb3J0KHIsXHJcbiAgICBcImRldGVjdFdvcmtkYXlBY2NvdW50U3VibWl0RXJyb3JcIiwgKCkgPT4gZWspLCBuLmV4cG9ydChyLFxyXG4gICAgXCJpc1dvcmtkYXlBY2NvdW50VHJhbnNpdGlvblVybEluU2NvcGVcIiwgKCkgPT4gZTMpLCBuLmV4cG9ydChyLCBcInNob3VsZE9wZW5Xb3JrZGF5RW1haWxTaWduSW5cIixcclxuICAoKSA9PiB0UCksIG4uZXhwb3J0KHIsIFwiY2xpY2tXb3JrZGF5U2lnbkluV2l0aEVtYWlsXCIsICgpID0+IHRSKSwgbi5leHBvcnQocixcclxuICAgIFwidHJhY2tXb3JrZGF5QWNjb3VudFN1Ym1pdFwiLCAoKSA9PiB0ViksIG4uZXhwb3J0KHIsIFwiY3JlYXRlV29ya2RheUZvcmdvdFBhc3N3b3JkRmxvd0FkYXB0ZXJcIixcclxuICAoKSA9PiB0RyksIG4uZXhwb3J0KHIsIFwid29ya2RheUZvcmdvdFBhc3N3b3JkRmxvd0FkYXB0ZXJcIiwgKCkgPT4gdEspLCBuLmV4cG9ydChyLFxyXG4gICAgXCJjcmVhdGVXb3JrZGF5UmVzZXRQYXNzd29yZEZsb3dBZGFwdGVyXCIsICgpID0+IHRYKSwgbi5leHBvcnQocixcclxuICAgIFwid29ya2RheVJlc2V0UGFzc3dvcmRGbG93QWRhcHRlclwiLCAoKSA9PiB0SiksIG4uZXhwb3J0KHIsIFwid29ya2RheUFjY291bnRGbG93QWRhcHRlclwiLCAoKSA9PlxyXG4gIHRRKSwgbi5leHBvcnQociwgXCJkZXRlY3RXb3JrZGF5QWNjb3VudEZsb3dNYXRjaFwiLCAoKSA9PiB0WiksIG4uZXhwb3J0KHIsXHJcbiAgICBcImNhblN0YXJ0V29ya2RheVN0YW5kYXJkQXV0b2ZpbGxGcm9tQWNjb3VudEZsb3dcIiwgKCkgPT4gdDApLCBuLmV4cG9ydChyLFxyXG4gICAgXCJoYXNXb3JrZGF5U3RhbmRhcmRBdXRvZmlsbFNpZ25hbEZyb21BY2NvdW50Rmxvd1wiLCAoKSA9PiB0Mik7XHJcbnZhciBvID0gZShcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIiksXHJcbiAgaSA9IGUoXCJ+YXBpL2F1dG9maWxsLXNpZ251cC1pbmZvcm1hdGlvblwiKSxcclxuICBhID0gZShcIn5jb250ZW50cy9wcmUtYXV0b2ZpbGwtZmxvdy9hY2NvdW50LWZsb3dcIiksXHJcbiAgbCA9IGUoXCJ+Y29udGVudHMvcHJlLWF1dG9maWxsLWZsb3cvZG9tXCIpLFxyXG4gIHMgPSBlKFwifmNvbnRlbnRzL3ByZS1hdXRvZmlsbC1mbG93L3RyYWNraW5nXCIpLFxyXG4gIHUgPSBlKFwifnN0b3JlL2F1dG9maWxsUmVzdWx0XCIpLFxyXG4gIGMgPSBlKFwifnN0b3JlL3dvcmtkYXktc2lnbnVwLWluZm9cIiksXHJcbiAgZCA9IGUoXCJ+dXRpbHMvZ2V0VGFyZ2V0T3JUaW1lb3V0XCIpLFxyXG4gIGYgPSBuLmludGVyb3BEZWZhdWx0KGQpO1xyXG5cclxuZnVuY3Rpb24gcChlLCB0KSB7XHJcbiAgcmV0dXJuICgwLCBsLmZpbmRWaXNpYmxlUHJlQXV0b2ZpbGxFbGVtZW50KShlLCB0LCBlLmRlZmF1bHRWaWV3Py5IVE1MRWxlbWVudClcclxufVxyXG5sZXQgbSA9ICdpbnB1dFtkYXRhLWF1dG9tYXRpb24taWQ9XCJlbWFpbFwiXScsXHJcbiAgaCA9ICdpbnB1dFtkYXRhLWF1dG9tYXRpb24taWQ9XCJwYXNzd29yZFwiXScsXHJcbiAgZyA9XHJcbiAgJ2lucHV0W2RhdGEtYXV0b21hdGlvbi1pZD1cInZlcmlmeVBhc3N3b3JkXCJdLCBpbnB1dFtkYXRhLWF1dG9tYXRpb24taWQ9XCJjb25maXJtUGFzc3dvcmRcIl0sIGlucHV0W2RhdGEtYXV0b21hdGlvbi1pZD1cInZlcmlmeU5ld1Bhc3N3b3JkXCJdJyxcclxuICBiID0gJ2lucHV0W2RhdGEtYXV0b21hdGlvbi1pZD1cImNyZWF0ZUFjY291bnRDaGVja2JveFwiXScsXHJcbiAgeSA9XHJcbiAgJ1tkYXRhLWF1dG9tYXRpb24taWQ9XCJhZHZlbnR1cmVCdXR0b25cIl1bcm9sZT1cImJ1dHRvblwiXSwgW2RhdGEtYXV0b21hdGlvbi1pZD1cImNvbnRpbnVlQnV0dG9uXCJdW3JvbGU9XCJidXR0b25cIl0nLFxyXG4gIHYgPVxyXG4gICdidXR0b25bZGF0YS1hdXRvbWF0aW9uLWlkPVwicGFnZUZvb3Rlck5leHRCdXR0b25cIl0sIGJ1dHRvbltkYXRhLWF1dG9tYXRpb24taWQ9XCJib3R0b20tbmF2aWdhdGlvbi1uZXh0LWJ1dHRvblwiXScsXHJcbiAgdyA9XHJcbiAgJ2J1dHRvbltkYXRhLWF1dG9tYXRpb24taWQ9XCJTaWduSW5XaXRoRW1haWxCdXR0b25cIl0sIFtkYXRhLWF1dG9tYXRpb24taWQ9XCJTaWduSW5XaXRoRW1haWxCdXR0b25cIl0nLFxyXG4gIFMgPVxyXG4gICdbZGF0YS1hdXRvbWF0aW9uLWlkPVwiY2xpY2tfZmlsdGVyXCJdW2FyaWEtbGFiZWw9XCJDcmVhdGUgQWNjb3VudFwiXSwgYnV0dG9uW2RhdGEtYXV0b21hdGlvbi1pZD1cImNyZWF0ZUFjY291bnRTdWJtaXRCdXR0b25cIl0nLFxyXG4gIEUgPVxyXG4gICdbZGF0YS1hdXRvbWF0aW9uLWlkPVwiY2xpY2tfZmlsdGVyXCJdW2FyaWEtbGFiZWw9XCJTaWduIEluXCJdLCBbZGF0YS1hdXRvbWF0aW9uLWlkPVwibm9DYXB0Y2hhV3JhcHBlclwiXSBbZGF0YS1hdXRvbWF0aW9uLWlkPVwiY2xpY2tfZmlsdGVyXCJdW2FyaWEtbGFiZWw9XCJTdWJtaXRcIl0sIGJ1dHRvbltkYXRhLWF1dG9tYXRpb24taWQ9XCJzaWduSW5TdWJtaXRCdXR0b25cIl0sIFtkYXRhLWF1dG9tYXRpb24taWQ9XCJzaWduSW5TdWJtaXRCdXR0b25cIl0nLFxyXG4gIHggPVxyXG4gICdbZGF0YS1hdXRvbWF0aW9uLWlkPVwiY2xpY2tfZmlsdGVyXCJdW2FyaWEtbGFiZWw9XCJSZXNldCBQYXNzd29yZFwiXSwgYnV0dG9uW2RhdGEtYXV0b21hdGlvbi1pZD1cInJlc2V0UGFzc3dvcmRCdXR0b25cIl0sIFtkYXRhLWF1dG9tYXRpb24taWQ9XCJyZXNldFBhc3N3b3JkQnV0dG9uXCJdJyxcclxuICBDID1cclxuICAnW2RhdGEtYXV0b21hdGlvbi1pZD1cImNsaWNrX2ZpbHRlclwiXVthcmlhLWxhYmVsPVwiU3VibWl0XCJdLCBidXR0b25bZGF0YS1hdXRvbWF0aW9uLWlkPVwicmVzZXRQYXNzd29yZEJ1dHRvblwiXSwgW2RhdGEtYXV0b21hdGlvbi1pZD1cInJlc2V0UGFzc3dvcmRCdXR0b25cIl0nLFxyXG4gIEEgPSAnW2RhdGEtYXV0b21hdGlvbi1pZD1cImFsZXJ0TWVzc2FnZVwiXVtyb2xlPVwiYWxlcnRcIl0sIFtkYXRhLWF1dG9tYXRpb24taWQ9XCJhbGVydE1lc3NhZ2VcIl0nLFxyXG4gIGsgPSA4MCxcclxuICBUID0gXCJkYXRhLWpyLXdvcmtkYXktYWNjb3VudC1zdWJtaXQtdHJhY2tpbmdcIixcclxuICBGID0gXCJkYXRhLWpyLXdvcmtkYXktZm9yZ290LXBhc3N3b3JkLXN1Ym1pdC10cmFja2luZ1wiLFxyXG4gIEkgPSBcIkpPQlJJR0hUX0RFQlVHX1dPUktEQVlfQUNDT1VOVF9GTE9XXCIsXHJcbiAgaiA9IFwiW015V29ya2RheSBzaWduLWluLWNob2ljZV1cIixcclxuICBEID0gXCJbTXlXb3JrZGF5IGFjY291bnQtZmxvdy1kZXRlY3RdXCIsXHJcbiAgUCA9ICdbZGF0YS1hdXRvbWF0aW9uLWlkPVwiZXJyb3JNZXNzYWdlXCJdW3JvbGU9XCJhbGVydFwiXSwgW2RhdGEtYXV0b21hdGlvbi1pZD1cImVycm9yTWVzc2FnZVwiXScsXHJcbiAgXyA9IFt7XHJcbiAgICBwYXR0ZXJuOiAvdmVyaWZ5IHlvdXIgYWNjb3VudHx2ZXJpZmljYXRpb24gZW1haWx8YWNjb3VudCB2ZXJpZmljYXRpb24vaSxcclxuICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGNoZWNrIHlvdXIgaW5ib3ggYW5kIHZlcmlmeSB5b3VyIGVtYWlsIGFkZHJlc3MgdG8gY29udGludWUuXCIsXHJcbiAgICBtZXNzYWdlVHlwZTogXCJhY2NvdW50X3ZlcmlmaWNhdGlvbl9yZXF1aXJlZFwiXHJcbiAgfSwge1xyXG4gICAgcGF0dGVybjogL3Jlc2V0IHlvdXIgcGFzc3dvcmR8Zm9yZ290IHBhc3N3b3JkfGFkbWluaXN0cmF0b3IgcmVxdWVzdC9pLFxyXG4gICAgbWVzc2FnZTogXCJQbGVhc2UgcmVzZXQgeW91ciBwYXNzd29yZC5cIixcclxuICAgIG1lc3NhZ2VUeXBlOiBcInBhc3N3b3JkX3Jlc2V0X3JlcXVpcmVkXCJcclxuICB9LCB7XHJcbiAgICBwYXR0ZXJuOiAvd3JvbmcgZW1haWwgYWRkcmVzcyBvciBwYXNzd29yZHxhY2NvdW50IG1pZ2h0IGJlIGxvY2tlZC9pLFxyXG4gICAgbWVzc2FnZTogXCJZb3UgbWF5IGhhdmUgcmVnaXN0ZXJlZCB3aXRoIHRoaXMgZW1haWwgYmVmb3JlLiBQbGVhc2UgdHJ5IHlvdXIgcHJldmlvdXMgcGFzc3dvcmQsIG9yIHJlc2V0IGl0LlwiLFxyXG4gICAgbWVzc2FnZVR5cGU6IFwiaW52YWxpZF9jcmVkZW50aWFsc19vcl9sb2NrZWRcIlxyXG4gIH1dO1xyXG5cclxuZnVuY3Rpb24gTCgpIHtcclxuICByZXR1cm4gYCR7RGF0ZS5ub3coKX0tJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKX1gXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFIoZSwgdCkge1xyXG4gIHJldHVybiAhZS5nZXRBdHRyaWJ1dGUoVCkgJiYgKGUuc2V0QXR0cmlidXRlKFQsIHQpLCAhMClcclxufVxyXG5cclxuZnVuY3Rpb24gTyhlLCB0KSB7XHJcbiAgZS5nZXRBdHRyaWJ1dGUoVCkgPT09IHQgJiYgZS5yZW1vdmVBdHRyaWJ1dGUoVClcclxufVxyXG5cclxuZnVuY3Rpb24gTShlLCB0KSB7XHJcbiAgcmV0dXJuICgwLCBsLmZpbmRWaXNpYmxlUHJlQXV0b2ZpbGxFbGVtZW50KShlLCB0LCBlLmRlZmF1bHRWaWV3Py5IVE1MSW5wdXRFbGVtZW50KVxyXG59XHJcblxyXG5mdW5jdGlvbiBOKGUsIHQpIHtcclxuICByZXR1cm4gKDAsIGwuZmluZFZpc2libGVQcmVBdXRvZmlsbEVsZW1lbnRzKShlLCB0LCBlLmRlZmF1bHRWaWV3Py5IVE1MSW5wdXRFbGVtZW50KVxyXG59XHJcblxyXG5mdW5jdGlvbiAkKGUpIHtcclxuICByZXR1cm4gcChlLCB5KVxyXG59XHJcblxyXG5mdW5jdGlvbiBCKGUpIHtcclxuICByZXR1cm4gSyhlLCAvXkFwcGx5IE1hbnVhbGx5JC9pKVxyXG59XHJcblxyXG5mdW5jdGlvbiBxKGUpIHtcclxuICBsZXQgdCA9IEIoZSk7XHJcbiAgaWYgKCF0KSByZXR1cm4gbnVsbDtcclxuICBsZXQgciA9IHQuaHJlZiA/PyB0LmNsb3Nlc3Q/LihcImFbaHJlZl1cIik/LmhyZWY7XHJcbiAgcmV0dXJuIFwic3RyaW5nXCIgPT0gdHlwZW9mIHIgJiYgciA/IHIgOiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFUoZSkge1xyXG4gIHJldHVybiBNKGUsIG0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEgoZSkge1xyXG4gIHJldHVybiBNKGUsIGgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFkoZSkge1xyXG4gIHJldHVybiBOKGUsIGcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHooZSwgdCkge1xyXG4gIGlmICh0LmhpZGRlbiB8fCB0LmdldEF0dHJpYnV0ZT8uKFwiYXJpYS1oaWRkZW5cIikgPT09IFwidHJ1ZVwiIHx8IHQuY2xvc2VzdD8uKFxyXG4gICAgICBcIltoaWRkZW5dLCBbYXJpYS1oaWRkZW49J3RydWUnXVwiKSkgcmV0dXJuICExO1xyXG4gIGlmICgoMCwgbC5pc1Zpc2libGVQcmVBdXRvZmlsbEVsZW1lbnQpKHQpKSByZXR1cm4gITA7XHJcbiAgbGV0IHIgPSB0SChlLCB0KTtcclxuICBpZiAociAmJiAoMCwgbC5pc1Zpc2libGVQcmVBdXRvZmlsbEVsZW1lbnQpKHIpKSByZXR1cm4gITA7XHJcbiAgbGV0IG4gPSB0LmNsb3Nlc3Q/LignW2RhdGEtYXV0b21hdGlvbi1pZF49XCJmb3JtRmllbGQtXCJdJyksXHJcbiAgICBvID0gZS5kZWZhdWx0Vmlldz8uSFRNTEVsZW1lbnQgPz8gKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIEhUTUxFbGVtZW50ID8gSFRNTEVsZW1lbnQgOiBudWxsKTtcclxuICBpZiAobiAmJiAoIW8gfHwgbiBpbnN0YW5jZW9mIG8pICYmICgwLCBsLmlzVmlzaWJsZVByZUF1dG9maWxsRWxlbWVudCkobikpIHJldHVybiAhMDtcclxuICBsZXQgaSA9IHQucGFyZW50RWxlbWVudDtcclxuICByZXR1cm4gISFpICYmICgwLCBsLmlzVmlzaWJsZVByZUF1dG9maWxsRWxlbWVudCkoaSlcclxufVxyXG5cclxuZnVuY3Rpb24gVihlKSB7XHJcbiAgcmV0dXJuIEFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKGIpKS5maW5kKHQgPT4geihlLCB0KSkgPz8gbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBXKGUpIHtcclxuICByZXR1cm4gcChlLCBTKVxyXG59XHJcblxyXG5mdW5jdGlvbiBHKGUpIHtcclxuICByZXR1cm4gcChlLCBFKVxyXG59XHJcblxyXG5mdW5jdGlvbiBLKGUsIHQpIHtcclxuICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBlLnF1ZXJ5U2VsZWN0b3JBbGwpIHJldHVybiBudWxsO1xyXG4gIGxldCByID0gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b24sIGEsIFtyb2xlPSdidXR0b24nXVwiKSk7XHJcbiAgcmV0dXJuIHIuZmluZChlID0+IHtcclxuICAgIGxldCByID0gZSxcclxuICAgICAgbiA9IHIudGV4dENvbnRlbnQ/LnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKSA/PyBcIlwiLFxyXG4gICAgICBvID0gci5nZXRBdHRyaWJ1dGU/LihcImFyaWEtbGFiZWxcIik/LnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKSA/PyBcIlwiO1xyXG4gICAgcmV0dXJuICh0LnRlc3QobikgfHwgdC50ZXN0KG8pKSAmJiAoMCwgbC5pc1Zpc2libGVQcmVBdXRvZmlsbEVsZW1lbnQpKHIpXHJcbiAgfSkgPz8gbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBYKGUpIHtcclxuICBpZiAoIWUpIHJldHVybiBudWxsO1xyXG4gIGxldCB0ID0gZS5nZXRBdHRyaWJ1dGU/LihcImRhdGEtYXV0b21hdGlvbi1pZFwiKSA/PyBcIlwiLFxyXG4gICAgciA9IGUuZ2V0QXR0cmlidXRlPy4oXCJhcmlhLWxhYmVsXCIpID8/IFwiXCIsXHJcbiAgICBuID0gZS5nZXRBdHRyaWJ1dGU/LihcImlkXCIpID8/IFwiXCIsXHJcbiAgICBvID0gZS5nZXRBdHRyaWJ1dGU/LihcInJvbGVcIikgPz8gXCJcIixcclxuICAgIGkgPSBlLnRleHRDb250ZW50Py5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCkgPz8gXCJcIjtcclxuICByZXR1cm4gW3QgPyBgYXV0b21hdGlvbklkPSR7dH1gIDogXCJcIiwgciA/IGBhcmlhPSR7cn1gIDogXCJcIiwgbiA/IGBpZD0ke259YCA6IFwiXCIsIG8gPyBgcm9sZT0ke299YCA6XHJcbiAgICBcIlwiLCBpID8gYHRleHQ9JHtpLnNsaWNlKDAsMTIwKX1gIDogXCJcIiwgYHZpc2libGU9JHsoMCxsLmlzVmlzaWJsZVByZUF1dG9maWxsRWxlbWVudCkoZSl9YFxyXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgfCBcIilcclxufVxyXG5cclxuZnVuY3Rpb24gSihlKSB7XHJcbiAgcmV0dXJuIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZS5xdWVyeVNlbGVjdG9yQWxsID8gW10gOiBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiYnV0dG9uLCBhLCBbcm9sZT0nYnV0dG9uJ11cIikpLnNsaWNlKDAsIDEyKS5tYXAoZSA9PiBYKGUpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBRKCkge1xyXG4gIGlmIChcInVuZGVmaW5lZFwiID09IHR5cGVvZiB3aW5kb3cpIHJldHVybiAhMTtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2U/LmdldEl0ZW0oSSkgPT09IFwiMVwiIHx8IHdpbmRvdy5zZXNzaW9uU3RvcmFnZT8uZ2V0SXRlbShJKSA9PT0gXCIxXCJcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiAhMVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gWih7XHJcbiAgZG9jdW1lbnQ6IGUsXHJcbiAgcGhhc2U6IHQsXHJcbiAgdGFyZ2V0OiByLFxyXG4gIHVybDogbixcclxuICBhYm9ydGVkOiBvXHJcbn0pIHtcclxuICBpZiAoIVEoKSkgcmV0dXJuO1xyXG4gIGxldCBpID0gcChlLCB3KSxcclxuICAgIGEgPSBLKGUsIC9eU2lnbiBpbiB3aXRoIGVtYWlsJC9pKSxcclxuICAgIGwgPSBHKGUpLFxyXG4gICAgcyA9IGVzKGUpLFxyXG4gICAgdSA9IFUoZSksXHJcbiAgICBjID0gSChlKSxcclxuICAgIGQgPSBLKGUsIC9eU2lnbiBJbiQvaSk7XHJcbiAgY29uc29sZS5pbmZvKGosIHQsIHtcclxuICAgIHVybDogbixcclxuICAgIGRvY3VtZW50VGl0bGU6IGUudGl0bGUsXHJcbiAgICBhdXRoVGl0bGU6IGV1KGUpLFxyXG4gICAgYWJvcnRlZDogbyA/PyAhMSxcclxuICAgIHRhcmdldDogciA/PyBudWxsLFxyXG4gICAgc29jaWFsU2hlbGw6IGVqKGUpLFxyXG4gICAgcGVuZGluZ0xvZ2luQXV0aERvbTogZUQoe1xyXG4gICAgICBkb2N1bWVudDogZSxcclxuICAgICAgdXJsOiBuXHJcbiAgICB9KSxcclxuICAgIGhhc1NpZ25JbkNvbnRlbnQ6IG51bGwgIT09IGVsKGUpLFxyXG4gICAgc2lnbkluV2l0aEVtYWlsQXV0b21hdGlvbjogISFpLFxyXG4gICAgc2lnbkluV2l0aEVtYWlsQXV0b21hdGlvbkluZm86IFgoaSksXHJcbiAgICBzaWduSW5XaXRoRW1haWxUZXh0OiAhIWEsXHJcbiAgICBzaWduSW5XaXRoRW1haWxUZXh0SW5mbzogWChhKSxcclxuICAgIG5hdGl2ZVN1Ym1pdDogISFsLFxyXG4gICAgbmF0aXZlU3VibWl0SW5mbzogWChsKSxcclxuICAgIHNpZ25JbkZvcm06ICEhcyxcclxuICAgIHNpZ25JbkZvcm1JbmZvOiBYKHMpLFxyXG4gICAgZW1haWxJbnB1dDogISF1LFxyXG4gICAgZW1haWxJbnB1dEluZm86IFgodSksXHJcbiAgICBwYXNzd29yZElucHV0OiAhIWMsXHJcbiAgICBwYXNzd29yZElucHV0SW5mbzogWChjKSxcclxuICAgIHZpc2libGVTaWduSW5CdXR0b246ICEhZCxcclxuICAgIHZpc2libGVTaWduSW5CdXR0b25JbmZvOiBYKGQpLFxyXG4gICAgYnV0dG9uczogSihlKVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVlKGUpIHtcclxuICByZXR1cm4gcChlLCB3KSA/PyBLKGUsIC9eU2lnbiBpbiB3aXRoIGVtYWlsJC9pKVxyXG59XHJcblxyXG5mdW5jdGlvbiBldChlKSB7XHJcbiAgcmV0dXJuIHAoZSwgJ2J1dHRvbltkYXRhLWF1dG9tYXRpb24taWQ9XCJjcmVhdGVBY2NvdW50U3VibWl0QnV0dG9uXCJdJylcclxufVxyXG5cclxuZnVuY3Rpb24gZXIoZSkge1xyXG4gIHJldHVybiBwKGUsXHJcbiAgICAnYnV0dG9uW2RhdGEtYXV0b21hdGlvbi1pZD1cInNpZ25JblN1Ym1pdEJ1dHRvblwiXSwgW2RhdGEtYXV0b21hdGlvbi1pZD1cInNpZ25JblN1Ym1pdEJ1dHRvblwiXScpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuKGUpIHtcclxuICByZXR1cm4gcChlLCB4KVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbyhlKSB7XHJcbiAgcmV0dXJuIHAoZSwgQylcclxufVxyXG5cclxuZnVuY3Rpb24gZWkoe1xyXG4gIGRvY3VtZW50OiBlLFxyXG4gIHN0YXRlOiB0XHJcbn0pIHtcclxuICByZXR1cm4gXCJyZWdpc3RyYXRpb25cIiA9PT0gdCA/IFcoZSkgOiBcInJlc2V0X3Bhc3N3b3JkXCIgPT09IHQgPyBlbyhlKSA6IEcoZSlcclxufVxyXG5cclxuZnVuY3Rpb24gZWEoZSkge1xyXG4gIHJldHVybiBwKGUsXHJcbiAgICAnaW5wdXRbZGF0YS1hdXRvbWF0aW9uLWlkPVwidmVyaWZ5UGFzc3dvcmRcIl0sIGlucHV0W2RhdGEtYXV0b21hdGlvbi1pZD1cImNyZWF0ZUFjY291bnRDaGVja2JveFwiXSdcclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gZWwoZSkge1xyXG4gIHJldHVybiBwKGUsICdbZGF0YS1hdXRvbWF0aW9uLWlkPVwic2lnbkluQ29udGVudFwiXScpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVzKGUpIHtcclxuICByZXR1cm4gcChlLCAnW2RhdGEtYXV0b21hdGlvbi1pZD1cInNpZ25JbkZvcm1cIl0nKVxyXG59XHJcblxyXG5mdW5jdGlvbiBldShlKSB7XHJcbiAgcmV0dXJuIHAoZSwgJyNhdXRoVmlld1RpdGxlLCBbaWQ9XCJhdXRoVmlld1RpdGxlXCJdJyk/LnRleHRDb250ZW50Py5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCkgPz9cclxuICAgIFwiXCJcclxufVxyXG5cclxuZnVuY3Rpb24gZWMoZSkge1xyXG4gIHJldHVybiBudWxsICE9PSBlbChlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlZChlLCB0KSB7XHJcbiAgbGV0IHIgPSBldShlKTtcclxuICByZXR1cm4gZWMoZSkgJiYgKHQudGVzdChyKSB8fCB0LnRlc3QoZWwoZSk/LnRleHRDb250ZW50ID8/IFwiXCIpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlZihlKSB7XHJcbiAgbGV0IHQgPSBlbChlKSA/PyBwKGUsICdbZGF0YS1hdXRvbWF0aW9uLWlkPVwiYXBwbHlGbG93TXlJbmZvUGFnZVwiXScpID8/IHAoZSxcclxuICAgICAgJ1tkYXRhLWF1dG9tYXRpb24taWQ9XCJhcHBseUZsb3dQYWdlXCJdLCBbZGF0YS1hdXRvbWF0aW9uLWlkPVwiYXBwbHlGbG93TXlFeHBQYWdlXCJdLCBtYWluLCBib2R5J1xyXG4gICAgICApID8/IGUuYm9keSA/PyBlLmRvY3VtZW50RWxlbWVudDtcclxuICByZXR1cm4gdD8udGV4dENvbnRlbnQ/LnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKSA/PyBcIlwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVwKGUpIHtcclxuICBsZXQgdCA9IFtlLnRpdGxlLCBldShlKSwgLi4uKDAsIGwuZmluZFZpc2libGVQcmVBdXRvZmlsbEVsZW1lbnRzKShlLCBcImgxLCBoMiwgW3JvbGU9J2hlYWRpbmcnXVwiLCBlXHJcbiAgICAuZGVmYXVsdFZpZXc/LkhUTUxFbGVtZW50KS5tYXAoZSA9PiBlLnRleHRDb250ZW50Py5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCkgPz8gXCJcIildLmZpbHRlcihcclxuICAgIEJvb2xlYW4pLmpvaW4oXCIgXCIpID8/IFwiXCI7XHJcbiAgcmV0dXJuIC9cXGJGb3Jnb3QgUGFzc3dvcmRcXGIvaS50ZXN0KHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVtKGUpIHtcclxuICBsZXQgdCA9IGVmKGUpLFxyXG4gICAgciA9IC9cXGJGb3Jnb3QgUGFzc3dvcmRcXGIvaS50ZXN0KHQpIHx8IGVwKGUpLFxyXG4gICAgbiA9IG51bGwgIT09IFUoZSkgJiYgbnVsbCA9PT0gSChlKSAmJiBudWxsICE9PSBlbihlKTtcclxuICByZXR1cm4gciAmJiBuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVoKGUpIHtcclxuICBsZXQgdCA9IFtlLnRpdGxlLCBldShlKSwgLi4uKDAsIGwuZmluZFZpc2libGVQcmVBdXRvZmlsbEVsZW1lbnRzKShlLFxyXG4gICAgXCJoMSwgaDIsIGgzLCBbcm9sZT0naGVhZGluZyddXCIsIGUuZGVmYXVsdFZpZXc/LkhUTUxFbGVtZW50KS5tYXAoZSA9PiBlLnRleHRDb250ZW50Py5yZXBsYWNlKFxyXG4gICAgL1xccysvZywgXCIgXCIpLnRyaW0oKSA/PyBcIlwiKV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpID8/IFwiXCI7XHJcbiAgcmV0dXJuIC9cXGJSZXNldCBQYXNzd29yZFxcYi9pLnRlc3QodClcclxufVxyXG5cclxuZnVuY3Rpb24gZWcoZSkge1xyXG4gIGlmICghZSkgcmV0dXJuICExO1xyXG4gIGxldCB0ID0gZVgoZSk7XHJcbiAgcmV0dXJuICEhdCAmJiBlWSh0LnBhdGhuYW1lKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlYih7XHJcbiAgZG9jdW1lbnQ6IGUsXHJcbiAgdXJsOiB0XHJcbn0pIHtcclxuICBsZXQgciA9IGVmKGUpLFxyXG4gICAgbiA9IC9cXGJSZXNldCBQYXNzd29yZFxcYi9pLnRlc3QocikgfHwgZWgoZSksXHJcbiAgICBvID0gbnVsbCAhPT0gSChlKSAmJiBZKGUpLmxlbmd0aCA+IDAgJiYgbnVsbCA9PT0gVShlKSAmJiBudWxsICE9PSBlbyhlKTtcclxuICByZXR1cm4gbyAmJiBuICYmIChlZyh0KSB8fCAvXFxiUGFzc3dvcmQgUmVxdWlyZW1lbnRzXFxiL2kudGVzdChyKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZXkoZSkge1xyXG4gIHJldHVybiBlLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKVxyXG59XHJcblxyXG5mdW5jdGlvbiBldihlKSB7XHJcbiAgcmV0dXJuIGUucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV3KHtcclxuICByYXdNZXNzYWdlOiBlLFxyXG4gIG1lc3NhZ2VUeXBlOiB0XHJcbn0pIHtcclxuICBsZXQgciA9IGV2KGUpO1xyXG4gIHJldHVybiB7XHJcbiAgICByYXdNZXNzYWdlOiByLFxyXG4gICAgbWVzc2FnZVR5cGU6IHQsXHJcbiAgICBtZXNzYWdlOiBcInJlc2V0X2VtYWlsX3NlbnRcIiA9PT0gdCA/IFwiQ2hlY2sgeW91ciBlbWFpbCBmb3IgcGFzc3dvcmQgcmVzZXQgaW5zdHJ1Y3Rpb25zLlwiIDpcclxuICAgICAgXCJQYXNzd29yZCByZXNldCBpcyB0ZW1wb3JhcmlseSB1bmF2YWlsYWJsZS4gUGxlYXNlIGNvbnRhY3QgdGhlIGFkbWluaXN0cmF0b3IuXCJcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVTKGUpIHtcclxuICBsZXQgdCA9IGV5KGUpLFxyXG4gICAgciA9IF8uZmluZCgoe1xyXG4gICAgICBwYXR0ZXJuOiBlXHJcbiAgICB9KSA9PiBlLnRlc3QodCkpO1xyXG4gIHJldHVybiB7XHJcbiAgICBtZXNzYWdlOiByPy5tZXNzYWdlID8/IHQsXHJcbiAgICByYXdNZXNzYWdlOiB0LFxyXG4gICAgbWVzc2FnZVR5cGU6IHI/Lm1lc3NhZ2VUeXBlXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlRShlKSB7XHJcbiAgbGV0IHQgPSBwKGUsIFApLFxyXG4gICAgciA9IGV5KHQ/LnRleHRDb250ZW50ID8/IFwiXCIpO1xyXG4gIHJldHVybiByIHx8IG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gZXgoZSkge1xyXG4gIHJldHVybiBlQyhlKVswXSA/PyBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVDKGUpIHtcclxuICBsZXQgdCA9IFtdLFxyXG4gICAgciA9IHAoZSwgUCksXHJcbiAgICBuID0gZXYocj8udGV4dENvbnRlbnQgPz8gXCJcIik7XHJcbiAgbiAmJiB0LnB1c2goZXcoe1xyXG4gICAgcmF3TWVzc2FnZTogbixcclxuICAgIG1lc3NhZ2VUeXBlOiBcInJlc2V0X2ZhaWxlZFwiXHJcbiAgfSkpO1xyXG4gIGxldCBvID0gcChlLCBBKSxcclxuICAgIGkgPSBldihvPy50ZXh0Q29udGVudCA/PyBcIlwiKTtcclxuICByZXR1cm4gaSAmJiB0LnB1c2goZXcoe1xyXG4gICAgcmF3TWVzc2FnZTogaSxcclxuICAgIG1lc3NhZ2VUeXBlOiBcInJlc2V0X2VtYWlsX3NlbnRcIlxyXG4gIH0pKSwgdFxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVBKHtcclxuICBkb2N1bWVudDogZSxcclxuICBzaWduYWw6IHRcclxufSkge1xyXG4gIHJldHVybiAoMCwgZi5kZWZhdWx0KSgoKSA9PiBleChlKSwgKCkgPT4gdD8uYWJvcnRlZCA/PyAhMSwgODApXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZWsoe1xyXG4gIGRvY3VtZW50OiBlLFxyXG4gIHNpZ25hbDogdFxyXG59KSB7XHJcbiAgbGV0IHIgPSBhd2FpdCAoMCwgZi5kZWZhdWx0KSgoKSA9PiBlRShlKSwgKCkgPT4gdD8uYWJvcnRlZCA/PyAhMSwgODApO1xyXG4gIHJldHVybiByID8gZVMocikgOiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVUKGUpIHtcclxuICBsZXQgdCA9IGVmKGUpO1xyXG4gIHJldHVybiAvXFxiQ3JlYXRlIEFjY291bnRcXGIvaS50ZXN0KHQpICYmICgvXFxiVmVyaWZ5IE5ldyBQYXNzd29yZFxcYi9pLnRlc3QodCkgfHxcclxuICAgIC9cXGJQYXNzd29yZCBSZXF1aXJlbWVudHNcXGIvaS50ZXN0KHQpIHx8IC9cXGJBbHJlYWR5IGhhdmUgYW4gYWNjb3VudFxcP1xccypTaWduIEluXFxiL2kudGVzdCh0KSlcclxufVxyXG5cclxuZnVuY3Rpb24gZUYoZSkge1xyXG4gIGxldCB0ID0gZWYoZSk7XHJcbiAgcmV0dXJuIC9cXGJTaWduIEluXFxiL2kudGVzdCh0KSAmJiAvXFxiUGFzc3dvcmRcXGIvaS50ZXN0KHQpICYmIG51bGwgIT09IHAoZSxcclxuICAgICdpbnB1dFtkYXRhLWF1dG9tYXRpb24taWQ9XCJlbWFpbFwiXScpICYmIG51bGwgIT09IHAoZSwgJ2lucHV0W2RhdGEtYXV0b21hdGlvbi1pZD1cInBhc3N3b3JkXCJdJylcclxufVxyXG5cclxuZnVuY3Rpb24gZUkoZSkge1xyXG4gIGxldCB0ID0gZXUoZSk7XHJcbiAgcmV0dXJuIG51bGwgIT09IGVsKGUpICYmIC9eU2lnbiBJbiQvaS50ZXN0KHQpICYmIG51bGwgIT09IGVlKGUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVqKGUpIHtcclxuICBsZXQgdCA9IGV1KGUpLFxyXG4gICAgciA9IGVsKGUpLFxyXG4gICAgbiA9IHI/LnRleHRDb250ZW50Py5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCkgPz8gXCJcIjtcclxuICByZXR1cm4gbnVsbCAhPT0gciAmJiAvXlNpZ24gSW4kL2kudGVzdCh0KSAmJiBudWxsID09PSBVKGUpICYmIG51bGwgPT09IEgoZSkgJiYgKFxyXG4gICAgL1xcYlNpZ24gaW4gd2l0aCAoPzpHb29nbGV8TGlua2VkSW58QXBwbGUpXFxiL2kudGVzdChuKSB8fCAvXFxiT1JcXGIvaS50ZXN0KG4pKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlRCh7XHJcbiAgZG9jdW1lbnQ6IGUsXHJcbiAgdXJsOiB0XHJcbn0pIHtcclxuICBpZiAoVShlKSB8fCBIKGUpIHx8ICF0KSByZXR1cm4gITE7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBlID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygd2luZG93ID8gd2luZG93LmxvY2F0aW9uLmhyZWYgOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgciA9IG5ldyBVUkwodCwgZSkucGF0aG5hbWU7XHJcbiAgICByZXR1cm4gZVUocikgfHwgZUgocilcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiAhMVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZVAoZSkge1xyXG4gIGlmIChlZShlKSkgcmV0dXJuIFwic2lnbl9pbl93aXRoX2VtYWlsXCI7XHJcbiAgbGV0IHQgPSBudWxsICE9PSBHKGUpIHx8IG51bGwgIT09IGVzKGUpIHx8IG51bGwgIT09IFUoZSkgJiYgbnVsbCAhPT0gSChlKSxcclxuICAgIHIgPSBudWxsICE9PSBLKGUsIC9eU2lnbiBJbiQvaSk7XHJcbiAgcmV0dXJuIHQgJiYgciA/IFwic2lnbl9pbl9mb3JtXCIgOiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVfKGUpIHtcclxuICBsZXQgdCA9IGVQKGUpO1xyXG4gIHJldHVybiBcInNpZ25faW5fd2l0aF9lbWFpbFwiID09PSB0IHx8IFwic2lnbl9pbl9mb3JtXCIgPT09IHQgJiYgbnVsbCA9PT0gZXQoZSkgJiYgbnVsbCA9PT0gZWEoZSkgJiYgIVxyXG4gICAgZVQoZSlcclxufVxyXG5cclxuZnVuY3Rpb24gZUwoe1xyXG4gIGRvY3VtZW50OiBlLFxyXG4gIHVybDogdFxyXG59KSB7XHJcbiAgcmV0dXJuIGVqKGUpIHx8IGVEKHtcclxuICAgIGRvY3VtZW50OiBlLFxyXG4gICAgdXJsOiB0XHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZVIoe1xyXG4gIGRvY3VtZW50OiBlLFxyXG4gIHBoYXNlUHJlZml4OiB0LFxyXG4gIHNpZ25hbDogcixcclxuICB1cmw6IG5cclxufSkge1xyXG4gIFooe1xyXG4gICAgZG9jdW1lbnQ6IGUsXHJcbiAgICBwaGFzZTogYCR7dH0tZW50ZXJgLFxyXG4gICAgdXJsOiBuLFxyXG4gICAgYWJvcnRlZDogci5hYm9ydGVkXHJcbiAgfSk7XHJcbiAgbGV0IG8gPSBlUChlKTtcclxuICBpZiAoWih7XHJcbiAgICAgIGRvY3VtZW50OiBlLFxyXG4gICAgICBwaGFzZTogYCR7dH0tZXhpc3RpbmctdGFyZ2V0YCxcclxuICAgICAgdGFyZ2V0OiBvLFxyXG4gICAgICB1cmw6IG4sXHJcbiAgICAgIGFib3J0ZWQ6IHIuYWJvcnRlZFxyXG4gICAgfSksIG8pIHJldHVybiB7XHJcbiAgICB0YXJnZXQ6IG8sXHJcbiAgICBzaG91bGRXYWl0OiAhMVxyXG4gIH07XHJcbiAgaWYgKHIuYWJvcnRlZCkgcmV0dXJuIFooe1xyXG4gICAgZG9jdW1lbnQ6IGUsXHJcbiAgICBwaGFzZTogYCR7dH0tYWJvcnRlZGAsXHJcbiAgICB1cmw6IG4sXHJcbiAgICBhYm9ydGVkOiAhMFxyXG4gIH0pLCB7XHJcbiAgICB0YXJnZXQ6IG51bGwsXHJcbiAgICBzaG91bGRXYWl0OiAhMVxyXG4gIH07XHJcbiAgbGV0IGkgPSBlTCh7XHJcbiAgICBkb2N1bWVudDogZSxcclxuICAgIHVybDogblxyXG4gIH0pO1xyXG4gIHJldHVybiBpIHx8IFooe1xyXG4gICAgZG9jdW1lbnQ6IGUsXHJcbiAgICBwaGFzZTogYCR7dH0tc2tpcC1uby1wZW5kaW5nLWNob2ljZWAsXHJcbiAgICB1cmw6IG4sXHJcbiAgICBhYm9ydGVkOiByLmFib3J0ZWRcclxuICB9KSwge1xyXG4gICAgdGFyZ2V0OiBudWxsLFxyXG4gICAgc2hvdWxkV2FpdDogaVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZU8oe1xyXG4gIGRvY3VtZW50OiBlLFxyXG4gIHBoYXNlUHJlZml4OiB0LFxyXG4gIHNpZ25hbDogcixcclxuICB1cmw6IG5cclxufSkge1xyXG4gIGxldCBvID0gMDtcclxuICByZXR1cm4gKDAsIGYuZGVmYXVsdCkoKCkgPT4ge1xyXG4gICAgbyArPSAxO1xyXG4gICAgbGV0IGkgPSBlUChlKTtcclxuICAgIHJldHVybiBaKHtcclxuICAgICAgZG9jdW1lbnQ6IGUsXHJcbiAgICAgIHBoYXNlOiBgJHt0fS1wb2xsLSR7b31gLFxyXG4gICAgICB0YXJnZXQ6IGksXHJcbiAgICAgIHVybDogbixcclxuICAgICAgYWJvcnRlZDogci5hYm9ydGVkXHJcbiAgICB9KSwgaVxyXG4gIH0sICgpID0+IHtcclxuICAgIGxldCBvID0gci5hYm9ydGVkO1xyXG4gICAgcmV0dXJuIG8gJiYgWih7XHJcbiAgICAgIGRvY3VtZW50OiBlLFxyXG4gICAgICBwaGFzZTogYCR7dH0tcG9sbC1hYm9ydGVkYCxcclxuICAgICAgdXJsOiBuLFxyXG4gICAgICBhYm9ydGVkOiBvXHJcbiAgICB9KSwgb1xyXG4gIH0sIGspLnRoZW4obyA9PiAoWih7XHJcbiAgICBkb2N1bWVudDogZSxcclxuICAgIHBoYXNlOiBgJHt0fS1wb2xsLXJlc3VsdGAsXHJcbiAgICB0YXJnZXQ6IG8sXHJcbiAgICB1cmw6IG4sXHJcbiAgICBhYm9ydGVkOiByLmFib3J0ZWRcclxuICB9KSwgbykpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVNKGUpIHtcclxuICByZXR1cm4gZWQoZSwgL15DcmVhdGUgQWNjb3VudCQvaSkgfHwgbnVsbCAhPT0gZXQoZSkgfHwgbnVsbCAhPT0gZWEoZSkgfHwgZVQoZSlcclxufVxyXG5cclxuZnVuY3Rpb24gZU4oZSkge1xyXG4gIHJldHVybiBlSShlKSB8fCBudWxsICE9PSBlcihlKSB8fCBlRihlKSB8fCBlXyhlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlJChlKSB7XHJcbiAgcmV0dXJuICQoZSk/LnRleHRDb250ZW50Py50cmltKCkgPz8gXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBlQihlKSB7XHJcbiAgcmV0dXJuIC9eQXBwbHkkL2kudGVzdChlJChlKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZXEoZSkge1xyXG4gIHJldHVybiAvXkNvbnRpbnVlIEFwcGxpY2F0aW9uJC9pLnRlc3QoZSQoZSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVVKGUpIHtcclxuICByZXR1cm4gL1xcL2xvZ2luKD86Wy8/I118JCkvaS50ZXN0KGUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVIKGUpIHtcclxuICByZXR1cm4gL1xcL3VzZXJIb21lKD86Wy8/I118JCkvaS50ZXN0KGUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVZKGUpIHtcclxuICByZXR1cm4gL1xcL3Bhc3N3b3JkcmVzZXQoPzpbLz8jXXwkKS9pLnRlc3QoZSlcclxufVxyXG5cclxuZnVuY3Rpb24gZXooZSkge1xyXG4gIHJldHVybiAvXFwvYXBwbHlcXC9hcHBseU1hbnVhbGx5KD86Wy8/I118JCkvaS50ZXN0KGUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVWKGUpIHtcclxuICByZXR1cm4gL1xcL2FwcGx5KD86Wy8/I118JCkvaS50ZXN0KGUpICYmICFleihlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlVyhlKSB7XHJcbiAgcmV0dXJuIC9cXC9kZXRhaWxzXFwvL2kudGVzdChlKSB8fCAvXFwvam9iXFwvL2kudGVzdChlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlRyhlKSB7XHJcbiAgbGV0IHQgPSBlLnJlcGxhY2UoL1xcLyskLywgXCJcIik7XHJcbiAgcmV0dXJuIHQgfHwgXCIvXCJcclxufVxyXG5cclxuZnVuY3Rpb24gZUsoZSkge1xyXG4gIHJldHVybiBlRyhlKS5yZXBsYWNlKC9eXFwvW2Etel17Mn0tW2Etel17Mn0oPz1cXC8pL2ksIFwiXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVYKGUpIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIG5ldyBVUkwoZSlcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlSihlKSB7XHJcbiAgcmV0dXJuIGUuc2VhcmNoUGFyYW1zLmdldChcImpyX2lkXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVRKGUpIHtcclxuICBsZXQgdCA9IGUuc2VhcmNoUGFyYW1zLmdldChcInJlZGlyZWN0XCIpO1xyXG4gIGlmICghdCkgcmV0dXJuIG51bGw7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBlSyhuZXcgVVJMKHQsIGUub3JpZ2luKS5wYXRobmFtZSlcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlWihlKSB7XHJcbiAgbGV0IHQgPSBlUShlKSxcclxuICAgIHIgPSB0ID8/IGVLKGUucGF0aG5hbWUpLFxyXG4gICAgbiA9IHIuc2VhcmNoKC9cXC9hcHBseSg/OlxcL2FwcGx5TWFudWFsbHkpPyg/OlxcL3wkKS9pKTtcclxuICByZXR1cm4gbiA+PSAwID8gZUcoci5zbGljZSgwLCBuKSkgOiByXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGUwKGUsIHQpIHtcclxuICBpZiAoZS5ob3N0bmFtZS50b0xvd2VyQ2FzZSgpICE9PSB0Lmhvc3RuYW1lLnRvTG93ZXJDYXNlKCkpIHJldHVybiAhMTtcclxuICBsZXQgciA9IGVKKGUpLFxyXG4gICAgbiA9IGVKKHQpO1xyXG4gIHJldHVybiAhciB8fCAhbiB8fCByID09PSBuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGUyKGUsIHQpIHtcclxuICByZXR1cm4gISFlMChlLCB0KSAmJiBlSyhlLnBhdGhuYW1lKSA9PT0gZUsodC5wYXRobmFtZSlcclxufVxyXG5cclxuZnVuY3Rpb24gZTEoZSwgdCkge1xyXG4gIHJldHVybiAhIWUwKGUsIHQpICYmIGVaKGUpID09PSBlWih0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBlMyh7XHJcbiAgcGVuZGluZzogZSxcclxuICBjdXJyZW50VXJsOiB0XHJcbn0pIHtcclxuICBsZXQgciA9IGVYKGUuc291cmNlVXJsKSxcclxuICAgIG4gPSBlWCh0KTtcclxuICBpZiAoIXIgfHwgIW4pIHJldHVybiAhMTtcclxuICBsZXQgbyA9IGUudGFyZ2V0VXJsID8gZVgoZS50YXJnZXRVcmwpIDogbnVsbDtcclxuICByZXR1cm4gISEobyAmJiBlMihvLCBuKSB8fCBcInJlc2V0X3Bhc3N3b3JkXCIgPT09IGUuaW50ZW50ICYmIGUwKHIsIG4pICYmIGVZKHIucGF0aG5hbWUpICYmIGVIKG5cclxuICAgIC5wYXRobmFtZSkpIHx8IGUxKHIsIG4pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGU0KHtcclxuICBkb2N1bWVudDogZSxcclxuICB1cmw6IHRcclxufSkge1xyXG4gIHJldHVybiAhKGU3KHtcclxuICAgIGRvY3VtZW50OiBlLFxyXG4gICAgdXJsOiB0XHJcbiAgfSkgfHwgZU0oZSkpICYmIGVOKGUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGU1KHtcclxuICBkb2N1bWVudDogZSxcclxuICB1cmw6IHRcclxufSkge1xyXG4gIHJldHVybiAhZTcoe1xyXG4gICAgZG9jdW1lbnQ6IGUsXHJcbiAgICB1cmw6IHRcclxuICB9KSAmJiBlTShlKVxyXG59XHJcbmxldCBlNiA9XHJcbiAgL1xcYig/Ok15IEluZm9ybWF0aW9ufE15IEV4cGVyaWVuY2V8QXBwbGljYXRpb24gUXVlc3Rpb25zfFZvbHVudGFyeSBEaXNjbG9zdXJlc3xTZWxmWy1cXHNdP0lkZW50aWZ5fFJldmlldylcXGIvaSxcclxuICBlOCA9XHJcbiAgJ1tkYXRhLWF1dG9tYXRpb24taWQ9XCJzZWN0aW9uVGl0bGVcIl0sIFtkYXRhLWF1dG9tYXRpb24taWQ9XCJwYWdlVGl0bGVcIl0sIFtkYXRhLWF1dG9tYXRpb24taWQ9XCJzdGVwVGl0bGVcIl0sIFtpZD1cInNlY3Rpb25UaXRsZVwiXSwgW2lkPVwicGFnZVRpdGxlXCJdLCBbaWQ9XCJzdGVwVGl0bGVcIl0nO1xyXG5cclxuZnVuY3Rpb24gZTkoZSkge1xyXG4gIHJldHVybiAoMCwgbC5maW5kVmlzaWJsZVByZUF1dG9maWxsRWxlbWVudHMpKGUsIGU4LCBlLmRlZmF1bHRWaWV3Py5IVE1MRWxlbWVudCkubWFwKGUgPT4gZVxyXG4gICAgLnRleHRDb250ZW50Py5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCkgPz8gXCJcIikuZmlsdGVyKEJvb2xlYW4pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGU3KHtcclxuICBkb2N1bWVudDogZSxcclxuICB1cmw6IHRcclxufSkge1xyXG4gIHJldHVybiAhIXRlKHQpICYmIGU5KGUpLnNvbWUoZSA9PiBlNi50ZXN0KGUpKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0ZShlKSB7XHJcbiAgaWYgKCFlKSByZXR1cm4gITE7XHJcbiAgbGV0IHQgPSBlWChlKTtcclxuICByZXR1cm4gISF0ICYmIC9cXC9hcHBseSg/OlsvPyNdfCQpL2kudGVzdCh0LnBhdGhuYW1lKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0dChlKSB7XHJcbiAgcmV0dXJuIG51bGwgIT09IHAoZSwgJ2RpdltkYXRhLWF1dG9tYXRpb24taWRePVwiZm9ybUZpZWxkLVwiXScpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyKGUpIHtcclxuICByZXR1cm4gbnVsbCAhPT0gcChlLCB2KVxyXG59XHJcblxyXG5mdW5jdGlvbiB0bih7XHJcbiAgZG9jdW1lbnQ6IGUsXHJcbiAgdXJsOiB0XHJcbn0pIHtcclxuICByZXR1cm4gISFlNyh7XHJcbiAgICBkb2N1bWVudDogZSxcclxuICAgIHVybDogdFxyXG4gIH0pIHx8ICEoZU0oZSkgfHwgZU4oZSkgfHwgQihlKSkgJiYgKHRyKGUpIHx8IHR0KGUpKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0byh7XHJcbiAgZG9jdW1lbnQ6IGUsXHJcbiAgdXJsOiB0LFxyXG4gIGFwcGxpY2F0aW9uRm9ybVNpZ25hbDogcixcclxuICBtYXRjaDogbixcclxuICBibG9ja2VkQnk6IG9cclxufSkge1xyXG4gIGlmICghUSgpKSByZXR1cm47XHJcbiAgbGV0IGkgPSBlWCh0KSxcclxuICAgIGEgPSBpPy5wYXRobmFtZSA/PyBcIlwiO1xyXG4gIGNvbnNvbGUuaW5mbyhELCB7XHJcbiAgICB1cmw6IHQsXHJcbiAgICBwYXRobmFtZTogYSxcclxuICAgIGRvY3VtZW50VGl0bGU6IGUudGl0bGUsXHJcbiAgICBhdXRoVGl0bGU6IGV1KGUpLFxyXG4gICAgYXBwbGljYXRpb25TdGVwVGl0bGVUZXh0czogZTkoZSksXHJcbiAgICBsb2dpblBhdGg6ICEhaSAmJiBlVShhKSxcclxuICAgIHVzZXJIb21lUGF0aDogISFpICYmIGVIKGEpLFxyXG4gICAgYXBwbHlNYW51YWxseVBhdGg6ICEhaSAmJiBleihhKSxcclxuICAgIGFwcGx5U3RhcnRQYXRoOiAhIWkgJiYgZVYoYSksXHJcbiAgICBqb2JEZXRhaWxQYXRoOiAhIWkgJiYgZVcoYSksXHJcbiAgICBhcHBsaWNhdGlvbkZvcm1TaWduYWw6IHIsXHJcbiAgICBhcHBsaWNhdGlvblN0ZXBUaXRsZVNpZ25hbDogZTcoe1xyXG4gICAgICBkb2N1bWVudDogZSxcclxuICAgICAgdXJsOiB0XHJcbiAgICB9KSxcclxuICAgIGFwcGxpY2F0aW9uTmF2aWdhdGlvblNpZ25hbDogdHIoZSksXHJcbiAgICBhcHBsaWNhdGlvbkZvcm1GaWVsZFNpZ25hbDogdHQoZSksXHJcbiAgICBjcmVhdGVBY2NvdW50U2lnbmFsOiBlTShlKSxcclxuICAgIHNpZ25JblNpZ25hbDogZU4oZSksXHJcbiAgICBzaWduSW5DaG9pY2VUYXJnZXQ6IGVQKGUpLFxyXG4gICAgc2lnbkluQ29udGVudDogISFlbChlKSxcclxuICAgIHNpZ25JbkZvcm06ICEhZXMoZSksXHJcbiAgICBlbWFpbElucHV0OiAhIVUoZSksXHJcbiAgICBwYXNzd29yZElucHV0OiAhIUgoZSksXHJcbiAgICBzaWduSW5TdWJtaXQ6ICEhRyhlKSxcclxuICAgIHZpc2libGVTaWduSW5CdXR0b246ICEhSyhlLCAvXlNpZ24gSW4kL2kpLFxyXG4gICAgc2lnbkluV2l0aEVtYWlsQnV0dG9uOiAhIWVlKGUpLFxyXG4gICAgYmxvY2tlZEJ5OiBvID8/IG51bGwsXHJcbiAgICBtYXRjaDogbiA/IHtcclxuICAgICAgZmxvd0lkOiBuLmZsb3dJZCxcclxuICAgICAgcGFnZUtpbmQ6IG4ucGFnZUtpbmQsXHJcbiAgICAgIGN0YVRleHQ6IG4uY3RhVGV4dFxyXG4gICAgfSA6IG51bGxcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB0aSh7XHJcbiAgZG9jdW1lbnQ6IGUsXHJcbiAgcGFyc2VkVXJsOiB0XHJcbn0pIHtcclxuICByZXR1cm4gZVcodC5wYXRobmFtZSkgJiYgIWVVKHQucGF0aG5hbWUpICYmICFleih0LnBhdGhuYW1lKSAmJiBlQihlKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0YSh7XHJcbiAgZG9jdW1lbnQ6IGUsXHJcbiAgcGFyc2VkVXJsOiB0XHJcbn0pIHtcclxuICByZXR1cm4gZVcodC5wYXRobmFtZSkgJiYgIWVVKHQucGF0aG5hbWUpICYmICFleih0LnBhdGhuYW1lKSAmJiBlcShlKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0bCh7XHJcbiAgZG9jdW1lbnQ6IGUsXHJcbiAgcGFyc2VkVXJsOiB0XHJcbn0pIHtcclxuICByZXR1cm4gZVcodC5wYXRobmFtZSkgJiYgZVYodC5wYXRobmFtZSkgJiYgbnVsbCAhPT0gQihlKVxyXG59XHJcbmxldCB0cyA9IFt7XHJcbiAgICBsYWJlbDogYS5QUkVfQVVUT0ZJTExfQUNDT1VOVF9TVEVQX0xBQkVMUy5jbGlja0FwcGx5LFxyXG4gICAgdHlwZTogXCJjbGlja1wiLFxyXG4gICAgcnVuOiB0alxyXG4gIH0sIHtcclxuICAgIGxhYmVsOiBhLlBSRV9BVVRPRklMTF9BQ0NPVU5UX1NURVBfTEFCRUxTLnNlbGVjdGVkQXBwbHlNYW51YWxseSxcclxuICAgIHR5cGU6IFwiY2xpY2tcIixcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgdGltaW5nOiBcImJlZm9yZVwiLFxyXG4gICAgICBpbmNsdWRlU3RlcDogITAsXHJcbiAgICAgIGN1cnJlbnRTdGVwOiBhLlBSRV9BVVRPRklMTF9BQ0NPVU5UX1NURVBfTEFCRUxTLmVtYWlsQWRkcmVzcyxcclxuICAgICAgZ2V0VGFyZ2V0VXJsOiAoe1xyXG4gICAgICAgIGRvY3VtZW50OiBlXHJcbiAgICAgIH0pID0+IHEoZSlcclxuICAgIH0sXHJcbiAgICBydW46IHREXHJcbiAgfV0sXHJcbiAgdHUgPSBbe1xyXG4gICAgbGFiZWw6IGEuUFJFX0FVVE9GSUxMX0FDQ09VTlRfU1RFUF9MQUJFTFMuc2VsZWN0ZWRBcHBseU1hbnVhbGx5LFxyXG4gICAgdHlwZTogXCJjbGlja1wiLFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICB0aW1pbmc6IFwiYmVmb3JlXCIsXHJcbiAgICAgIGluY2x1ZGVTdGVwOiAhMCxcclxuICAgICAgY3VycmVudFN0ZXA6IGEuUFJFX0FVVE9GSUxMX0FDQ09VTlRfU1RFUF9MQUJFTFMuZW1haWxBZGRyZXNzLFxyXG4gICAgICBnZXRUYXJnZXRVcmw6ICh7XHJcbiAgICAgICAgZG9jdW1lbnQ6IGVcclxuICAgICAgfSkgPT4gcShlKVxyXG4gICAgfSxcclxuICAgIHJ1bjogdERcclxuICB9XSxcclxuICB0YyA9IFt7XHJcbiAgICBsYWJlbDogYS5QUkVfQVVUT0ZJTExfQUNDT1VOVF9TVEVQX0xBQkVMUy5jbGlja0NvbnRpbnVlQXBwbGljYXRpb24sXHJcbiAgICB0eXBlOiBcImNsaWNrXCIsXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIHRpbWluZzogXCJiZWZvcmVcIixcclxuICAgICAgaW5jbHVkZVN0ZXA6ICEwLFxyXG4gICAgICBjdXJyZW50U3RlcDogbnVsbFxyXG4gICAgfSxcclxuICAgIHJ1bjogdGpcclxuICB9XSxcclxuICB0ZCA9IFt7XHJcbiAgICBsYWJlbDogXCJQcmVwYXJlIFdvcmtkYXkgQWNjb3VudCBGb3JtXCIsXHJcbiAgICB0eXBlOiBcInByZXBhcmVcIixcclxuICAgIHByb2dyZXNzOiAhMSxcclxuICAgIHJ1bjogdElcclxuICB9LCB7XHJcbiAgICBsYWJlbDogYS5QUkVfQVVUT0ZJTExfQUNDT1VOVF9TVEVQX0xBQkVMUy5lbWFpbEFkZHJlc3MsXHJcbiAgICB0eXBlOiBcImZpbGxcIixcclxuICAgIHByb2dyZXNzR3JvdXA6IFwiY3JlYXRlX2FjY291bnRcIixcclxuICAgIHdhaXRGb3JDcmVkZW50aWFsOiBcImVtYWlsXCIsXHJcbiAgICBydW46IHRNXHJcbiAgfSwge1xyXG4gICAgbGFiZWw6IGEuUFJFX0FVVE9GSUxMX0FDQ09VTlRfU1RFUF9MQUJFTFMucGFzc3dvcmQsXHJcbiAgICB0eXBlOiBcImZpbGxcIixcclxuICAgIHByb2dyZXNzR3JvdXA6IFwiY3JlYXRlX2FjY291bnRcIixcclxuICAgIHdhaXRGb3JDcmVkZW50aWFsOiBcInBhc3N3b3JkXCIsXHJcbiAgICBydW46IHQkXHJcbiAgfSwge1xyXG4gICAgbGFiZWw6IGEuUFJFX0FVVE9GSUxMX0FDQ09VTlRfU1RFUF9MQUJFTFMudmVyaWZ5TmV3UGFzc3dvcmQsXHJcbiAgICB0eXBlOiBcImZpbGxcIixcclxuICAgIHByb2dyZXNzR3JvdXA6IFwiY3JlYXRlX2FjY291bnRcIixcclxuICAgIHNob3VsZFJ1bjogdHEsXHJcbiAgICBydW46IHRCXHJcbiAgfSwge1xyXG4gICAgbGFiZWw6IGEuUFJFX0FVVE9GSUxMX0FDQ09VTlRfU1RFUF9MQUJFTFMuYWdyZWVQcml2YWN5Tm90aWNlLFxyXG4gICAgdHlwZTogXCJjaGVja1wiLFxyXG4gICAgcHJvZ3Jlc3NHcm91cDogXCJjcmVhdGVfYWNjb3VudFwiLFxyXG4gICAgc2hvdWxkUnVuOiB0WSxcclxuICAgIHJ1bjogdHpcclxuICB9LCB7XHJcbiAgICBsYWJlbDogYS5QUkVfQVVUT0ZJTExfQUNDT1VOVF9TVEVQX0xBQkVMUy5jbGlja0NyZWF0ZUFjY291bnQsXHJcbiAgICB0eXBlOiBcInRyYWNrX3N1Ym1pdFwiLFxyXG4gICAgcHJvZ3Jlc3M6ICExLFxyXG4gICAgcnVuOiB0VlxyXG4gIH1dLFxyXG4gIHRmID0gW3tcclxuICAgIGxhYmVsOiBhLlBSRV9BVVRPRklMTF9BQ0NPVU5UX1NURVBfTEFCRUxTLnNpZ25JbldpdGhFbWFpbCxcclxuICAgIHR5cGU6IFwiY2xpY2tcIixcclxuICAgIHNob3VsZFJ1bjogdFAsXHJcbiAgICBydW46IHRSXHJcbiAgfSwge1xyXG4gICAgbGFiZWw6IGEuUFJFX0FVVE9GSUxMX0FDQ09VTlRfU1RFUF9MQUJFTFMuY2xpY2tDcmVhdGVBY2NvdW50LFxyXG4gICAgdHlwZTogXCJjbGlja1wiLFxyXG4gICAgc2hvdWxkUnVuOiB0XyxcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgdGltaW5nOiBcImFmdGVyXCIsXHJcbiAgICAgIGludGVudDogXCJyZWdpc3RyYXRpb25cIixcclxuICAgICAgaW5jbHVkZVN0ZXA6ICEwLFxyXG4gICAgICBjdXJyZW50U3RlcDogYS5QUkVfQVVUT0ZJTExfQUNDT1VOVF9TVEVQX0xBQkVMUy5lbWFpbEFkZHJlc3NcclxuICAgIH0sXHJcbiAgICBydW46IHRPXHJcbiAgfSwge1xyXG4gICAgbGFiZWw6IFwiUHJlcGFyZSBXb3JrZGF5IEFjY291bnQgRm9ybVwiLFxyXG4gICAgdHlwZTogXCJwcmVwYXJlXCIsXHJcbiAgICBwcm9ncmVzczogITEsXHJcbiAgICBzaG91bGRSdW46IHRMLFxyXG4gICAgcnVuOiB0SVxyXG4gIH0sIHtcclxuICAgIGxhYmVsOiBhLlBSRV9BVVRPRklMTF9BQ0NPVU5UX1NURVBfTEFCRUxTLmVtYWlsQWRkcmVzcyxcclxuICAgIHR5cGU6IFwiZmlsbFwiLFxyXG4gICAgd2FpdEZvckNyZWRlbnRpYWw6IFwiZW1haWxcIixcclxuICAgIHNob3VsZFJ1bjogdEwsXHJcbiAgICBydW46IHRNXHJcbiAgfSwge1xyXG4gICAgbGFiZWw6IGEuUFJFX0FVVE9GSUxMX0FDQ09VTlRfU1RFUF9MQUJFTFMucGFzc3dvcmQsXHJcbiAgICB0eXBlOiBcImZpbGxcIixcclxuICAgIHdhaXRGb3JDcmVkZW50aWFsOiBcInBhc3N3b3JkXCIsXHJcbiAgICBzaG91bGRSdW46IHRMLFxyXG4gICAgcnVuOiB0JFxyXG4gIH0sIHtcclxuICAgIGxhYmVsOiBhLlBSRV9BVVRPRklMTF9BQ0NPVU5UX1NURVBfTEFCRUxTLmNsaWNrU2lnbkluLFxyXG4gICAgdHlwZTogXCJ0cmFja19zdWJtaXRcIixcclxuICAgIHByb2dyZXNzOiAhMSxcclxuICAgIHNob3VsZFJ1bjogdEwsXHJcbiAgICBydW46IHRWXHJcbiAgfV0sXHJcbiAgdHAgPSBbe1xyXG4gICAgbGFiZWw6IFwiUHJlcGFyZSBXb3JrZGF5IEZvcmdvdCBQYXNzd29yZCBGb3JtXCIsXHJcbiAgICB0eXBlOiBcInByZXBhcmVcIixcclxuICAgIHByb2dyZXNzOiAhMSxcclxuICAgIHJ1bjogdElcclxuICB9LCB7XHJcbiAgICBsYWJlbDogYS5QUkVfQVVUT0ZJTExfQUNDT1VOVF9TVEVQX0xBQkVMUy5lbWFpbEFkZHJlc3MsXHJcbiAgICB0eXBlOiBcImZpbGxcIixcclxuICAgIHdhaXRGb3JDcmVkZW50aWFsOiBcImVtYWlsXCIsXHJcbiAgICBydW46IHROXHJcbiAgfSwge1xyXG4gICAgbGFiZWw6IFwiVHJhY2sgUmVzZXQgUGFzc3dvcmRcIixcclxuICAgIHR5cGU6IFwidHJhY2tfc3VibWl0XCIsXHJcbiAgICBwcm9ncmVzczogITEsXHJcbiAgICBzdWJtaXRTZXNzaW9uOiAhMSxcclxuICAgIHJ1bjogdEZcclxuICB9XSxcclxuICB0bSA9IFt7XHJcbiAgICBsYWJlbDogXCJQcmVwYXJlIFdvcmtkYXkgQWNjb3VudCBGb3JtXCIsXHJcbiAgICB0eXBlOiBcInByZXBhcmVcIixcclxuICAgIHByb2dyZXNzOiAhMSxcclxuICAgIHJ1bjogdElcclxuICB9LCB7XHJcbiAgICBsYWJlbDogYS5QUkVfQVVUT0ZJTExfQUNDT1VOVF9TVEVQX0xBQkVMUy5wYXNzd29yZCxcclxuICAgIHR5cGU6IFwiZmlsbFwiLFxyXG4gICAgd2FpdEZvckNyZWRlbnRpYWw6IFwicGFzc3dvcmRcIixcclxuICAgIHJ1bjogdCRcclxuICB9LCB7XHJcbiAgICBsYWJlbDogYS5QUkVfQVVUT0ZJTExfQUNDT1VOVF9TVEVQX0xBQkVMUy52ZXJpZnlOZXdQYXNzd29yZCxcclxuICAgIHR5cGU6IFwiZmlsbFwiLFxyXG4gICAgd2FpdEZvckNyZWRlbnRpYWw6IFwicGFzc3dvcmRcIixcclxuICAgIHJ1bjogdEJcclxuICB9LCB7XHJcbiAgICBsYWJlbDogYS5QUkVfQVVUT0ZJTExfQUNDT1VOVF9TVEVQX0xBQkVMUy5jbGlja1Jlc2V0UGFzc3dvcmQsXHJcbiAgICB0eXBlOiBcInRyYWNrX3N1Ym1pdFwiLFxyXG4gICAgcHJvZ3Jlc3M6ICExLFxyXG4gICAgcnVuOiB0VlxyXG4gIH1dLFxyXG4gIHRoID0ge1xyXG4gICAgZm9yZ290X3Bhc3N3b3JkOiB7XHJcbiAgICAgIHN0YXRlOiBcImZvcmdvdF9wYXNzd29yZFwiLFxyXG4gICAgICBjdGFUZXh0OiBcIkF1dG9maWxsXCIsXHJcbiAgICAgIHByb2dyZXNzVGl0bGU6IG51bGwsXHJcbiAgICAgIGRldGVjdDogKHtcclxuICAgICAgICBkb2N1bWVudDogZVxyXG4gICAgICB9KSA9PiBlbShlKSxcclxuICAgICAgc3RlcHM6IHRwXHJcbiAgICB9XHJcbiAgfSxcclxuICB0ZyA9IHtcclxuICAgIHJlc2V0X3Bhc3N3b3JkOiB7XHJcbiAgICAgIHN0YXRlOiBcInJlc2V0X3Bhc3N3b3JkXCIsXHJcbiAgICAgIGN0YVRleHQ6IFwiQXV0b2ZpbGxcIixcclxuICAgICAgZGV0ZWN0OiAoe1xyXG4gICAgICAgIGRvY3VtZW50OiBlLFxyXG4gICAgICAgIHVybDogdFxyXG4gICAgICB9KSA9PiBlYih7XHJcbiAgICAgICAgZG9jdW1lbnQ6IGUsXHJcbiAgICAgICAgdXJsOiB0XHJcbiAgICAgIH0pLFxyXG4gICAgICBzdGVwczogdG1cclxuICAgIH1cclxuICB9LFxyXG4gIHRiID0ge1xyXG4gICAgY3JlYXRlX2FjY291bnQ6IHtcclxuICAgICAgc3RhdGU6IFwicmVnaXN0cmF0aW9uXCIsXHJcbiAgICAgIGRldGVjdDogZTUsXHJcbiAgICAgIHN0ZXBzOiB0ZFxyXG4gICAgfSxcclxuICAgIHNpZ25faW46IHtcclxuICAgICAgc3RhdGU6IFwic2lnbl9pblwiLFxyXG4gICAgICBkZXRlY3Q6IGU0LFxyXG4gICAgICBzdGVwczogdGZcclxuICAgIH0sXHJcbiAgICBqZDoge1xyXG4gICAgICBzdGF0ZTogXCJyZWdpc3RyYXRpb25cIixcclxuICAgICAgZW50cnk6ICEwLFxyXG4gICAgICBleGNsdWRlVXJsOiBbL1xcL2xvZ2luKD86Wy8/I118JCkvaSwgL1xcL2FwcGx5XFwvYXBwbHlNYW51YWxseSg/OlsvPyNdfCQpL2ldLFxyXG4gICAgICBkZXRlY3Q6IHRpLFxyXG4gICAgICBzdGVwczogdHNcclxuICAgIH0sXHJcbiAgICBhcHBseV9zdGFydDoge1xyXG4gICAgICBzdGF0ZTogXCJyZWdpc3RyYXRpb25cIixcclxuICAgICAgZW50cnk6ICEwLFxyXG4gICAgICBleGNsdWRlVXJsOiBbL1xcL2xvZ2luKD86Wy8/I118JCkvaSwgL1xcL2FwcGx5XFwvYXBwbHlNYW51YWxseSg/OlsvPyNdfCQpL2ldLFxyXG4gICAgICBkZXRlY3Q6IHRsLFxyXG4gICAgICBzdGVwczogdHVcclxuICAgIH0sXHJcbiAgICBqZF9jb250aW51ZV9hcHBsaWNhdGlvbjoge1xyXG4gICAgICBzdGF0ZTogXCJyZWdpc3RyYXRpb25cIixcclxuICAgICAgY3RhVGV4dDogXCJBdXRvZmlsbFwiLFxyXG4gICAgICBlbnRyeTogITAsXHJcbiAgICAgIHByb2dyZXNzVGl0bGU6IG51bGwsXHJcbiAgICAgIGNvbXBsZXRlRW50cnlQcm9ncmVzczogITAsXHJcbiAgICAgIGV4Y2x1ZGVVcmw6IFsvXFwvbG9naW4oPzpbLz8jXXwkKS9pLCAvXFwvYXBwbHlcXC9hcHBseU1hbnVhbGx5KD86Wy8/I118JCkvaV0sXHJcbiAgICAgIGRldGVjdDogdGEsXHJcbiAgICAgIHN0ZXBzOiB0Y1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdHkgPSBudWxsO1xyXG5hc3luYyBmdW5jdGlvbiB0digpIHtcclxuICBsZXQgZSA9IGF3YWl0ICgwLCBvLnNlbmRUb0JhY2tncm91bmQpKHtcclxuICAgIG5hbWU6IFwiZ2V0QXV0b2ZpbGxJbmZvXCIsXHJcbiAgICBib2R5OiB7XHJcbiAgICAgIGZvcmNlUmVmcmVzaDogITBcclxuICAgIH1cclxuICB9KS5jYXRjaCgoKSA9PiBudWxsKTtcclxuICByZXR1cm4gKDAsIGkucmVzb2x2ZVNpZ251cFJlZ2lzdHJhdGlvbkVtYWlsKShlKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHR3KCkge1xyXG4gIGxldCBlID0gYXdhaXQgKDAsIGMuZ2V0V29ya2RheVNpZ251cEluZm9ybWF0aW9uKSgpLmNhdGNoKCgpID0+IG51bGwpO1xyXG4gIHJldHVybiBlPy5wYXNzd29yZCA/PyBcIlwiXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdFMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGVtYWlsOiBhd2FpdCB0digpLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCJcclxuICB9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdEUoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IGF3YWl0IHR3KClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHR4KCkge1xyXG4gIGxldCBlID0gKDAsIHUudXNlQXV0b2ZpbGxSZXN1bHRTdG9yZSkuZ2V0U3RhdGUoKSxcclxuICAgIHQgPSBlLmF1dG9GaWxsUmVzdWx0O1xyXG4gIGlmICghdCkgcmV0dXJuO1xyXG4gIGxldCB7XHJcbiAgICBbYS5XT1JLREFZX0ZPUkdPVF9QQVNTV09SRF9TVUJNSVRfTUVTU0FHRV9LRVldOiByLCAuLi5uXHJcbiAgfSA9IHQudXNlckF1dG9GaWxsUmVzcG9uc2UgPz8ge307XHJcbiAgZS5zZXRBdXRvRmlsbFJlc3VsdCh7XHJcbiAgICAuLi50LFxyXG4gICAgdXNlckF1dG9GaWxsUmVzcG9uc2U6IG5cclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB0QyhlKSB7XHJcbiAgbGV0IHQgPSAoMCwgdS51c2VBdXRvZmlsbFJlc3VsdFN0b3JlKS5nZXRTdGF0ZSgpLFxyXG4gICAgciA9IHQuYXV0b0ZpbGxSZXN1bHQ7XHJcbiAgaWYgKCFyKSByZXR1cm47XHJcbiAgdC5zZXRBdXRvRmlsbFJlc3VsdCh7XHJcbiAgICAuLi5yLFxyXG4gICAgdXNlckF1dG9GaWxsUmVzcG9uc2U6IHtcclxuICAgICAgLi4uci51c2VyQXV0b0ZpbGxSZXNwb25zZSA/PyB7fSxcclxuICAgICAgW2EuV09SS0RBWV9GT1JHT1RfUEFTU1dPUkRfU1VCTUlUX01FU1NBR0VfS0VZXTogZVxyXG4gICAgfSxcclxuICAgIGN1cnJlbnRGaWVsZDogbnVsbFxyXG4gIH0pO1xyXG4gIGxldCBuID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygd2luZG93ID8gd2luZG93LmxvY2F0aW9uPy5ocmVmID8/IFwiXCIgOiBcIlwiO1xyXG4gICgwLCBzLnNlbmRXb3JrZGF5QWNjb3VudEZsb3dDb21wbGV0ZSkoe1xyXG4gICAgdGFyZ2V0TmFtZTogXCJteXdvcmtkYXlcIixcclxuICAgIHVybDogbixcclxuICAgIHBlbmRpbmc6IHtcclxuICAgICAgZmxvd0lkOiBcIndvcmtkYXlfZm9yZ290X3Bhc3N3b3JkX2Zsb3dcIixcclxuICAgICAgaW50ZW50OiBcImZvcmdvdF9wYXNzd29yZFwiLFxyXG4gICAgICBzb3VyY2VVcmw6IG4sXHJcbiAgICAgIHNvdXJjZVBhZ2VLaW5kOiBcImZvcmdvdF9wYXNzd29yZFwiLFxyXG4gICAgICB0cmFuc2l0aW9uU3RlcDogYS5QUkVfQVVUT0ZJTExfQUNDT1VOVF9TVEVQX0xBQkVMUy5jbGlja1Jlc2V0UGFzc3dvcmQsXHJcbiAgICAgIGNvbXBsZXRlZFN0ZXBzOiBbYS5QUkVfQVVUT0ZJTExfQUNDT1VOVF9TVEVQX0xBQkVMUy5lbWFpbEFkZHJlc3NdLFxyXG4gICAgICBjdXJyZW50U3RlcDogbnVsbFxyXG4gICAgfVxyXG4gIH0pLCBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBkb2N1bWVudCAmJiBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChhXHJcbiAgICAuV09SS0RBWV9GT1JHT1RfUEFTU1dPUkRfU1VCTUlUX01FU1NBR0VfRVZFTlQpKVxyXG59XHJcbmxldCB0QSA9IG51bGwsXHJcbiAgdGsgPSAwO1xyXG5cclxuZnVuY3Rpb24gdFQoZSkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSh0ID0+IHtcclxuICAgIGlmIChlLmFib3J0ZWQpIHtcclxuICAgICAgdCgpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGxldCByID0gbnVsbCxcclxuICAgICAgbiA9ICgpID0+IHtcclxuICAgICAgICBudWxsICE9PSByICYmIGNsZWFyVGltZW91dChyKSwgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgbyksIHQoKVxyXG4gICAgICB9LFxyXG4gICAgICBvID0gKCkgPT4gbigpO1xyXG4gICAgciA9IHNldFRpbWVvdXQobiwgYS5QUkVfQVVUT0ZJTExfQUNDT1VOVF9TVUJNSVRfRVJST1JfUkVGUkVTSF9ERUxBWV9NUyksIGUuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJhYm9ydFwiLCBvLCB7XHJcbiAgICAgICAgb25jZTogITBcclxuICAgICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB0Rih7XHJcbiAgZG9jdW1lbnQ6IGUsXHJcbiAgc2lnbmFsOiB0LFxyXG4gIG9uU3VibWl0OiByXHJcbn0pIHtcclxuICB0QT8uKCksIHRBID0gbnVsbDtcclxuICBsZXQgbiA9IGVuKGUpO1xyXG4gIGlmICghbiB8fCBuLmdldEF0dHJpYnV0ZShGKSkgcmV0dXJuO1xyXG4gIG4uc2V0QXR0cmlidXRlKEYsIFwiMVwiKTtcclxuICBsZXQgbyA9ICgpID0+IHtcclxuICAgICAgcigpO1xyXG4gICAgICBsZXQgbiA9ICsrdGs7XHJcbiAgICAgIHR4KCksIHRUKHQpLnRoZW4oKCkgPT4gZUEoe1xyXG4gICAgICAgIGRvY3VtZW50OiBlLFxyXG4gICAgICAgIHNpZ25hbDogdFxyXG4gICAgICB9KSkudGhlbihlID0+IHtcclxuICAgICAgICBlICYmICF0LmFib3J0ZWQgJiYgbiA9PT0gdGsgJiYgdEMoZSlcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBpID0gKCkgPT4ge1xyXG4gICAgICBuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvLCAhMCksIG4ucmVtb3ZlQXR0cmlidXRlKEYpLCB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLFxyXG4gICAgICAgIGkpLCB0QSA9PT0gaSAmJiAodEEgPSBudWxsKVxyXG4gICAgfTtcclxuICBuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvLCAhMCksIHQuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIGksIHtcclxuICAgIG9uY2U6ICEwXHJcbiAgfSksIHRBID0gaVxyXG59XHJcblxyXG5mdW5jdGlvbiB0SSh7XHJcbiAgZG9jdW1lbnQ6IGVcclxufSkge1xyXG4gICgwLCBsLmNsZWFyTmF0aXZlSW5wdXRWYWx1ZXMpKFtVKGUpLCBIKGUpLCAuLi5ZKGUpXSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiB0aih7XHJcbiAgZG9jdW1lbnQ6IGUsXHJcbiAgc2lnbmFsOiB0XHJcbn0pIHtcclxuICByZXR1cm4gKDAsIGwuY2xpY2tQcmVBdXRvZmlsbEVsZW1lbnQpKHtcclxuICAgIGRvY3VtZW50OiBlLFxyXG4gICAgc2lnbmFsOiB0LFxyXG4gICAgZmluZEVsZW1lbnQ6ICgpID0+ICQoZSlcclxuICB9KVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHREKHtcclxuICBkb2N1bWVudDogZSxcclxuICBzaWduYWw6IHRcclxufSkge1xyXG4gIHJldHVybiAoMCwgbC5jbGlja1ByZUF1dG9maWxsRWxlbWVudCkoe1xyXG4gICAgZG9jdW1lbnQ6IGUsXHJcbiAgICBzaWduYWw6IHQsXHJcbiAgICBmaW5kRWxlbWVudDogKCkgPT4gQihlKVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRQKHtcclxuICBkb2N1bWVudDogZSxcclxuICB1cmw6IHQsXHJcbiAgc2lnbmFsOiByXHJcbn0pIHtcclxuICBsZXQgbiA9IGVSKHtcclxuICAgIGRvY3VtZW50OiBlLFxyXG4gICAgcGhhc2VQcmVmaXg6IFwidWlcIixcclxuICAgIHNpZ25hbDogcixcclxuICAgIHVybDogdFxyXG4gIH0pO1xyXG4gIHJldHVybiBuLnRhcmdldCA/IFwic2lnbl9pbl93aXRoX2VtYWlsXCIgPT09IG4udGFyZ2V0IDogbi5zaG91bGRXYWl0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRfKHtcclxuICBlbnRyeVNlc3Npb246IGVcclxufSkge1xyXG4gIHJldHVybiAhIWUgJiYgXCJyZWdpc3RyYXRpb25cIiA9PT0gZS5wYWdlS2luZCAmJiBlLmNvbXBsZXRlZFN0ZXBzLmluY2x1ZGVzKGFcclxuICAgIC5QUkVfQVVUT0ZJTExfQUNDT1VOVF9TVEVQX0xBQkVMUy5zZWxlY3RlZEFwcGx5TWFudWFsbHkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRMKGUpIHtcclxuICByZXR1cm4gIXRfKGUpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdFIoe1xyXG4gIGRvY3VtZW50OiBlLFxyXG4gIHNpZ25hbDogdCxcclxuICB1cmw6IHJcclxufSkge1xyXG4gIGxldCBuID0gZVIoe1xyXG4gICAgICBkb2N1bWVudDogZSxcclxuICAgICAgcGhhc2VQcmVmaXg6IFwiYWN0aW9uXCIsXHJcbiAgICAgIHNpZ25hbDogdCxcclxuICAgICAgdXJsOiByXHJcbiAgICB9KSxcclxuICAgIG8gPSBuLnRhcmdldCA/PyAobi5zaG91bGRXYWl0ID8gYXdhaXQgZU8oe1xyXG4gICAgICBkb2N1bWVudDogZSxcclxuICAgICAgcGhhc2VQcmVmaXg6IFwiYWN0aW9uXCIsXHJcbiAgICAgIHNpZ25hbDogdCxcclxuICAgICAgdXJsOiByXHJcbiAgICB9KSA6IG51bGwpO1xyXG4gIHJldHVybiBcInNpZ25faW5fZm9ybVwiID09PSBvIHx8IChcInNpZ25faW5fd2l0aF9lbWFpbFwiICE9PSBvID8gKFooe1xyXG4gICAgZG9jdW1lbnQ6IGUsXHJcbiAgICBwaGFzZTogXCJhY3Rpb24tbWlzc2luZy1jaG9pY2UtdGFyZ2V0XCIsXHJcbiAgICB0YXJnZXQ6IG8sXHJcbiAgICB1cmw6IHIsXHJcbiAgICBhYm9ydGVkOiB0LmFib3J0ZWRcclxuICB9KSwgITEpIDogKDAsIGwuY2xpY2tQcmVBdXRvZmlsbEVsZW1lbnQpKHtcclxuICAgIGRvY3VtZW50OiBlLFxyXG4gICAgc2lnbmFsOiB0LFxyXG4gICAgZmluZEVsZW1lbnQ6ICgpID0+IGVlKGUpXHJcbiAgfSkpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdE8oe1xyXG4gIGRvY3VtZW50OiBlLFxyXG4gIHNpZ25hbDogdFxyXG59KSB7XHJcbiAgcmV0dXJuICgwLCBsLmNsaWNrUHJlQXV0b2ZpbGxFbGVtZW50KSh7XHJcbiAgICBkb2N1bWVudDogZSxcclxuICAgIHNpZ25hbDogdCxcclxuICAgIGZpbmRFbGVtZW50OiAoKSA9PiBwKGUsICdidXR0b25bZGF0YS1hdXRvbWF0aW9uLWlkPVwiY3JlYXRlQWNjb3VudExpbmtcIl0nKVxyXG4gIH0pXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdE0oe1xyXG4gIGRvY3VtZW50OiBlLFxyXG4gIGNyZWRlbnRpYWxzOiB0LFxyXG4gIHNpZ25hbDogclxyXG59KSB7XHJcbiAgcmV0dXJuICgwLCBsLmZpbGxQcmVBdXRvZmlsbElucHV0KSh7XHJcbiAgICBkb2N1bWVudDogZSxcclxuICAgIHNpZ25hbDogcixcclxuICAgIGZpbmRJbnB1dDogKCkgPT4gVShlKSxcclxuICAgIHZhbHVlOiB0LmVtYWlsXHJcbiAgfSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiB0Tih7XHJcbiAgZG9jdW1lbnQ6IGUsXHJcbiAgY3JlZGVudGlhbHM6IHQsXHJcbiAgc2lnbmFsOiByXHJcbn0pIHtcclxuICByZXR1cm4gISF0LmVtYWlsICYmICgwLCBsLmZpbGxQcmVBdXRvZmlsbElucHV0KSh7XHJcbiAgICBkb2N1bWVudDogZSxcclxuICAgIHNpZ25hbDogcixcclxuICAgIGZpbmRJbnB1dDogKCkgPT4gVShlKSxcclxuICAgIHZhbHVlOiB0LmVtYWlsXHJcbiAgfSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiB0JCh7XHJcbiAgZG9jdW1lbnQ6IGUsXHJcbiAgY3JlZGVudGlhbHM6IHQsXHJcbiAgc2lnbmFsOiByXHJcbn0pIHtcclxuICByZXR1cm4gKDAsIGwuZmlsbFByZUF1dG9maWxsSW5wdXQpKHtcclxuICAgIGRvY3VtZW50OiBlLFxyXG4gICAgc2lnbmFsOiByLFxyXG4gICAgZmluZElucHV0OiAoKSA9PiBIKGUpLFxyXG4gICAgdmFsdWU6IHQucGFzc3dvcmRcclxuICB9KVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHRCKHtcclxuICBkb2N1bWVudDogZSxcclxuICBjcmVkZW50aWFsczogdCxcclxuICBzaWduYWw6IHJcclxufSkge1xyXG4gIHJldHVybiAoMCwgbC5maWxsUHJlQXV0b2ZpbGxJbnB1dHMpKHtcclxuICAgIGRvY3VtZW50OiBlLFxyXG4gICAgc2lnbmFsOiByLFxyXG4gICAgZmluZElucHV0czogKCkgPT4gWShlKSxcclxuICAgIHZhbHVlOiB0LnBhc3N3b3JkXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gdHEoe1xyXG4gIGRvY3VtZW50OiBlXHJcbn0pIHtcclxuICByZXR1cm4gWShlKS5sZW5ndGggPiAwXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRVKGUpIHtcclxuICByZXR1cm4gZS5jaGVja2VkIHx8IFwidHJ1ZVwiID09PSBlLmdldEF0dHJpYnV0ZShcImFyaWEtY2hlY2tlZFwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0SChlLCB0KSB7XHJcbiAgcmV0dXJuIHQuaWQgPyBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcImxhYmVsXCIpKS5maW5kKGUgPT4gZS5odG1sRm9yID09PSB0LmlkKSA/PyBudWxsIDogbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiB0WSh7XHJcbiAgZG9jdW1lbnQ6IGVcclxufSkge1xyXG4gIHJldHVybiBudWxsICE9PSBWKGUpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdHooe1xyXG4gIGRvY3VtZW50OiBlLFxyXG4gIHNpZ25hbDogdFxyXG59KSB7XHJcbiAgbGV0IHIgPSBhd2FpdCAoMCwgbC53YWl0Rm9yUHJlQXV0b2ZpbGxFbGVtZW50KShlLCAoKSA9PiBWKGUpLCB2b2lkIDAsIHQpO1xyXG4gIHJldHVybiAhdC5hYm9ydGVkICYmICghISghciB8fCB0VShyKSkgfHwgKHIuY2xpY2soKSwgISF0VShyKSB8fCAodEgoZSwgcik/LmNsaWNrKCksIHRVKHIpKSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRWKHtcclxuICBkb2N1bWVudDogZSxcclxuICBzdGF0ZTogdCxcclxuICB1cmw6IHIsXHJcbiAgc2lnbmFsOiBuLFxyXG4gIG9uU3VibWl0OiBvXHJcbn0pIHtcclxuICB0eT8uKCksIHR5ID0gbnVsbDtcclxuICBsZXQgaSA9IGVpKHtcclxuICAgIGRvY3VtZW50OiBlLFxyXG4gICAgc3RhdGU6IHRcclxuICB9KTtcclxuICBpZiAoIWkpIHJldHVybjtcclxuICBsZXQgYSA9IEwoKTtcclxuICBpZiAoIVIoaSwgYSkpIHJldHVybjtcclxuICBsZXQgbCA9ICgpID0+IHtcclxuICAgICAgbGV0IGUgPSBvKCk7XHJcbiAgICAgIGUuZGlkU3VibWl0ICYmIHQxKHtcclxuICAgICAgICBjdXJyZW50VXJsOiByLFxyXG4gICAgICAgIHBlbmRpbmc6IGUucGVuZGluZ1xyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIHMgPSAoKSA9PiB7XHJcbiAgICAgIGkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGwsICEwKSwgTyhpLCBhKSwgbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgcyksIHR5ID09PSBzICYmXHJcbiAgICAgICAgKHR5ID0gbnVsbClcclxuICAgIH07XHJcbiAgaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbCwgITApLCBuLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBzLCB7XHJcbiAgICBvbmNlOiAhMFxyXG4gIH0pLCB0eSA9IHNcclxufVxyXG5sZXQgdFcgPSAoMCwgYS5jcmVhdGVQcmVBdXRvZmlsbEFjY291bnRGbG93QWRhcHRlcikoe1xyXG4gIGZsb3dJZDogXCJ3b3JrZGF5X2FjY291bnRfZmxvd1wiLFxyXG4gIHJ1bGVzOiB0YixcclxuICBnZXRFbWFpbDogdHYsXHJcbiAgZ2V0UGFzc3dvcmQ6IHR3XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gdEcoe1xyXG4gIGdldENyZWRlbnRpYWxzOiBlID0gdFNcclxufSA9IHt9KSB7XHJcbiAgcmV0dXJuICgwLCBhLmNyZWF0ZVByZUF1dG9maWxsQWNjb3VudEZsb3dBZGFwdGVyKSh7XHJcbiAgICBmbG93SWQ6IFwid29ya2RheV9mb3Jnb3RfcGFzc3dvcmRfZmxvd1wiLFxyXG4gICAgcnVsZXM6IHRoLFxyXG4gICAgZ2V0Q3JlZGVudGlhbHM6IGVcclxuICB9KVxyXG59XHJcbmxldCB0SyA9IHRHKCk7XHJcblxyXG5mdW5jdGlvbiB0WCh7XHJcbiAgZ2V0Q3JlZGVudGlhbHM6IGUgPSB0RVxyXG59ID0ge30pIHtcclxuICByZXR1cm4gKDAsIGEuY3JlYXRlUHJlQXV0b2ZpbGxBY2NvdW50Rmxvd0FkYXB0ZXIpKHtcclxuICAgIGZsb3dJZDogXCJ3b3JrZGF5X3Jlc2V0X3Bhc3N3b3JkX2Zsb3dcIixcclxuICAgIHJ1bGVzOiB0ZyxcclxuICAgIGdldENyZWRlbnRpYWxzOiBlXHJcbiAgfSlcclxufVxyXG5sZXQgdEogPSB0WCgpLFxyXG4gIHRRID0ge1xyXG4gICAgLi4udFcsXHJcbiAgICBkZXRlY3QoZSkge1xyXG4gICAgICBsZXQgdCA9IHRuKHtcclxuICAgICAgICBkb2N1bWVudDogZS5kb2N1bWVudCxcclxuICAgICAgICB1cmw6IGUudXJsXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAodCkgcmV0dXJuIHRvKHtcclxuICAgICAgICBkb2N1bWVudDogZS5kb2N1bWVudCxcclxuICAgICAgICB1cmw6IGUudXJsLFxyXG4gICAgICAgIGFwcGxpY2F0aW9uRm9ybVNpZ25hbDogdCxcclxuICAgICAgICBtYXRjaDogbnVsbCxcclxuICAgICAgICBibG9ja2VkQnk6IFwiYXBwbGljYXRpb25fZm9ybV9zaWduYWxcIlxyXG4gICAgICB9KSwgbnVsbDtcclxuICAgICAgbGV0IHIgPSB0Vy5kZXRlY3QoZSk7XHJcbiAgICAgIHJldHVybiB0byh7XHJcbiAgICAgICAgZG9jdW1lbnQ6IGUuZG9jdW1lbnQsXHJcbiAgICAgICAgdXJsOiBlLnVybCxcclxuICAgICAgICBhcHBsaWNhdGlvbkZvcm1TaWduYWw6IHQsXHJcbiAgICAgICAgbWF0Y2g6IHJcclxuICAgICAgfSksIHJcclxuICAgIH1cclxuICB9O1xyXG5cclxuZnVuY3Rpb24gdFooe1xyXG4gIHVybDogZSxcclxuICBkb2N1bWVudDogdFxyXG59KSB7XHJcbiAgcmV0dXJuIHRRLmRldGVjdCh7XHJcbiAgICB0YXJnZXROYW1lOiBcIm15d29ya2RheVwiLFxyXG4gICAgdXJsOiBlLFxyXG4gICAgZG9jdW1lbnQ6IHRcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB0MCh7XHJcbiAgZG9jdW1lbnQ6IGUsXHJcbiAgdXJsOiB0XHJcbn0pIHtcclxuICByZXR1cm4gdG4oe1xyXG4gICAgZG9jdW1lbnQ6IGUsXHJcbiAgICB1cmw6IHRcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB0Mih7XHJcbiAgZG9jdW1lbnQ6IGUsXHJcbiAgdXJsOiB0XHJcbn0pIHtcclxuICByZXR1cm4gdG4oe1xyXG4gICAgZG9jdW1lbnQ6IGUsXHJcbiAgICB1cmw6IHRcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB0MSh7XHJcbiAgY3VycmVudFVybDogZSxcclxuICBwZW5kaW5nOiB0XHJcbn0pIHtcclxuICAoMCwgcy5zZW5kV29ya2RheUFjY291bnRGbG93Q29tcGxldGUpKHtcclxuICAgIHRhcmdldE5hbWU6IFwibXl3b3JrZGF5XCIsXHJcbiAgICB1cmw6IGUsXHJcbiAgICBwZW5kaW5nOiB0XHJcbiAgfSlcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImFjY291bnQtcHJlZmxvdy41YTA3MjYwZS5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);