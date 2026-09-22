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
})({"f8koC":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\isolved\\rules.js",
    "bundleId": "ead9730c0483a51c",
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
var j = z(require("e3f78db20aa76343"));
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

},{"e3f78db20aa76343":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"klJhQ":[function(require,module,exports) {
/**
 * Parcel module id: bArT1
 * Resolved path: src/contents/sites/isolved/rules.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~utils/getTargetOrTimeout -> 1TBhF  =>  src/utils/getTargetOrTimeout.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "isElementDisabled", ()=>l), n.export(r, "getSectionRecordSnapshot", ()=>g), n.export(r, "isReferencePage", ()=>S), n.export(r, "getEducationRules", ()=>A), n.export(r, "getExperienceRules", ()=>k), n.export(r, "getAddEmploymentButton", ()=>T), n.export(r, "getAddEducationButton", ()=>F), n.export(r, "getEducationEditorRules", ()=>I), n.export(r, "getEmploymentEditorRules", ()=>j), n.export(r, "extractRules", ()=>P), n.export(r, "getFormSnapshot", ()=>_);
var o = e("~core/enums"), i = e("~utils/getTargetOrTimeout"), a = n.interopDefault(i);
function l(e1) {
    return !!("true" === e1.getAttribute("aria-disabled") || e1.hasAttribute("disabled")) || "disabled" in e1 && !!e1.disabled;
}
function s(e1) {
    let t = e1;
    for(; t;){
        if (t.hidden || "true" === t.getAttribute("aria-hidden")) return !1;
        let e1 = window.getComputedStyle(t);
        if ("none" === e1.display || "hidden" === e1.visibility || "collapse" === e1.visibility) return !1;
        t = t.parentElement;
    }
    return !0;
}
function u(e1) {
    return e1 instanceof HTMLSelectElement && ("source_id" === e1.id || "source_id" === e1.name) && !s(e1);
}
function c(e1) {
    let t = e1.id;
    if (t) {
        let e1 = document.querySelector(`label[for="${t}"]`);
        if (e1) return e1;
    }
    let r1 = e1.closest("fieldset, li, .form-group, .form-field");
    if (r1) {
        let e1 = r1.querySelector("label, legend");
        if (e1) return e1;
    }
    let n = e1.nextElementSibling;
    return n && "span" === n.tagName.toLowerCase() && n.textContent?.trim() ? n : null;
}
function d(e1, t) {
    if (e1.hasAttribute("required") || "true" === e1.getAttribute("aria-required")) return !0;
    let r1 = e1.closest("div, fieldset, li, .field, .form-group, [class*='field'], [class*='question']");
    if (r1) {
        if (r1.hasAttribute("required") || r1.querySelector('[class*="required"], .required')) return !0;
        let e1 = r1.querySelector('abbr[title="required"], span[aria-label="required"], [class*="required-mark"], [class*="asterisk"]');
        if (e1) return !0;
    }
    if (t) {
        if (t.querySelector('abbr[title="required"], [class*="required"]')) return !0;
        let e1 = t.cloneNode(!0);
        if (e1.querySelectorAll("input, select, textarea").forEach((e1)=>e1.remove()), e1.textContent?.includes("*")) return !0;
    }
    return !1;
}
function f(e1) {
    return Array.from(e1.options).map((e1)=>e1.textContent?.trim() || e1.value).filter((e1)=>"" !== e1);
}
function p(e1) {
    if (!e1) return "";
    let t = e1.cloneNode(!0);
    return t.querySelectorAll("abbr, [aria-hidden], [class*='required'], [class*='asterisk'], input, select, textarea").forEach((e1)=>e1.remove()), t.textContent?.trim().replace(/[*:]+\s*$/, "").trim() || "";
}
function m(e1) {
    let t = document.querySelector(`label[for="${e1.id}"]`);
    return t?.textContent?.trim() || e1.closest("label")?.textContent?.trim() || e1.value || "";
}
function h(e1) {
    if (!("$input" in e1) || !e1.$input) return "";
    if (e1.type === o.FIELD_TYPE.CHECKBOX) {
        let t = e1, r1 = t.$checkboxs || [
            t.$input
        ], n = r1.map((e1, r1)=>e1.checked ? t.options?.[r1] || m(e1) : null).filter((e1)=>!!e1);
        return 0 === n.length ? "" : 1 === n.length ? n[0] : n;
    }
    if (e1.type === o.FIELD_TYPE.RADIOGROUP) {
        let t = e1.$radioParent, r1 = t?.querySelector('input[type="radio"]:checked');
        return r1 ? m(r1) : "";
    }
    let t = e1.$input;
    return e1.type === o.FIELD_TYPE.SELECT && t instanceof HTMLSelectElement ? t.options[t.selectedIndex]?.textContent?.trim() || "" : (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) && t.value || "";
}
function g(e1) {
    let t = {};
    for (let r1 of e1)t[r1.label] = h(r1);
    return t;
}
function b(e1) {
    return e1.map((e1)=>g(e1.children || [])).filter((e1)=>Object.keys(e1).length > 0);
}
function y(e1, t) {
    if (e1 === o.FIELD_TYPE.EDUCATION) {
        if ("City" === t) return "return to the place where the school is located";
        if ("Country/Territory" === t) return "return the Country/Territory where the school is located";
    }
    if (e1 === o.FIELD_TYPE.EMPLOYMENT) switch(t){
        case "Start":
        case "Start Date":
        case "Date Started":
        case "Dates Employed Month Start Date":
        case "Dates Employed Year Start Date":
            return "return the date in English month-year format, e.g. 'Aug 2018' or 'August 2018'";
        case "End":
        case "End Date":
        case "Date Ended":
        case "Dates Employed Month End Date":
        case "Dates Employed Year End Date":
            return "return the date in English month-year format, e.g. 'Dec 2019' or 'December 2019'. If currently employed, return 'Present'";
        case "Reason For Leaving":
            return "the reason why the applicant left this employer, e.g. 'Seeking new opportunities', 'Career growth', 'Relocation'";
        case "Starting Rate of Pay":
            return "the salary or hourly wage when the applicant started this position";
        case "Ending Rate of Pay":
            return "the salary or hourly wage when the applicant left this position";
        case "Explain Your Duties":
        case "Briefly Explain Your Duties":
            return "a brief summary of the applicant's main job responsibilities and duties at this position";
    }
}
function v(e1) {
    let t = e1.tagName.toLowerCase(), r1 = e1.type?.toLowerCase() || "";
    if ("hidden" === r1 || "submit" === r1 || "button" === r1 || "file" === r1 || "image" === r1 || "reset" === r1 || !s(e1) || l(e1) || "radio" === r1) return null;
    let n = c(e1), i = e1.getAttribute("data-question-title")?.trim() || "", a = p(n) || i;
    if (!a) return null;
    let u = n || (()=>{
        let e1 = document.createElement("span");
        return e1.textContent = a, e1;
    })(), m = d(e1, n);
    if ("checkbox" === r1) return {
        type: o.FIELD_TYPE.CHECKBOX,
        label: a,
        required: m,
        options: [],
        $checkboxs: [
            e1
        ],
        $input: e1,
        $label: u
    };
    if ("select" === t) {
        let t = f(e1);
        return {
            type: o.FIELD_TYPE.SELECT,
            label: a,
            required: m,
            options: t,
            $input: e1,
            $label: u
        };
    }
    return {
        type: o.FIELD_TYPE.TEXT,
        label: a,
        required: m,
        $input: e1,
        $label: u
    };
}
function w(e1) {
    let t = new Map, r1 = Array.from(e1.querySelectorAll('input[type="radio"]')).filter((e1)=>s(e1) && !l(e1));
    for (let e1 of r1){
        let r1 = e1.name || e1.id;
        r1 && (t.has(r1) || t.set(r1, []), t.get(r1).push(e1));
    }
    return t;
}
function S() {
    let e1 = document.querySelector("#landingStrip") || document.body, t = document.querySelector("#steps .step.current"), r1 = t?.textContent?.trim().toLowerCase() || "", n = t?.getAttribute("data-file")?.trim().toLowerCase() || "", o = Array.from(e1.querySelectorAll("input[data-question-title], select[data-question-title], textarea[data-question-title]")).map((e1)=>e1.getAttribute("data-question-title")?.trim().toLowerCase() || "").filter((e1)=>e1.startsWith("reference ")), i = new Set([
        "reference name",
        "reference relationship",
        "reference phone number",
        "reference email address"
    ]), a = o.filter((e1)=>i.has(e1)).length, l = Array.from(e1.querySelectorAll("h1, h2, h3, legend")).some((e1)=>/^reference\s+\d+\*?$/i.test(e1.textContent?.trim() || "")), s = r1.includes("reference") || n.includes("reference");
    return s ? l || a >= 2 : l && a >= 2;
}
_c = S;
function E(e1) {
    return !!e1.closest('form[id*="education"], form[class*="education"], form[id*="employ"], form[class*="employ"], form[id*="experience"], form[class*="experience"]');
}
_c1 = E;
function x(e1) {
    let t = [], r1 = Array.from(e1.querySelectorAll("input:not([type='hidden']):not([type='submit']):not([type='button']):not([type='file']):not([type='radio']):not([type='checkbox']), select, textarea"));
    for (let e1 of r1){
        let r1 = v(e1);
        r1 && t.push(r1);
    }
    let n = Array.from(e1.querySelectorAll('input[type="checkbox"]')).filter((e1)=>s(e1) && "info_use_consent" !== e1.id && "info_use_consent" !== e1.name);
    for (let e1 of n){
        let r1 = v(e1);
        r1 && t.push(r1);
    }
    let i = w(e1);
    for (let [, r1] of i){
        if (0 === r1.length) continue;
        let n = r1[0], i = n.closest('fieldset, [role="group"], [class*="radio-group"], [class*="radios"]') || n.parentElement, a = i && (i.querySelector("legend") || i.querySelector("label")) || c(n);
        if (!a || !s(a)) continue;
        let l = p(a);
        if (!l) continue;
        let u = r1.map((e1)=>m(e1));
        t.push({
            type: o.FIELD_TYPE.RADIOGROUP,
            label: l,
            required: d(n, a),
            options: u.filter((e1)=>e1),
            $radioParent: i || e1,
            $input: n,
            $label: a
        });
    }
    return t;
}
function C(e1, t, r1) {
    return {
        type: e1,
        label: t,
        children: r1,
        options: r1.map((t)=>{
            let r1 = {
                type: t.type,
                label: t.label
            };
            t.type !== o.FIELD_TYPE.TEXT && (r1.options = t.options || []);
            let n = t.description || y(e1, t.label);
            return n && (r1.description = n), r1;
        }),
        required: !1
    };
}
_c2 = C;
function A() {
    let e1 = [], t = document.querySelector("#education_form");
    if (!t) return e1;
    let r1 = x(t);
    return r1.length > 0 && e1.push(C(o.FIELD_TYPE.EDUCATION, "Education", r1)), e1;
}
_c3 = A;
function k() {
    let e1 = [], t = document.querySelector("#employer_form");
    if (!t) return e1;
    let r1 = x(t);
    return r1.length > 0 && e1.push(C(o.FIELD_TYPE.EMPLOYMENT, "Employment", r1)), e1;
}
function T() {
    return document.querySelector('button[onclick*="employment.edit"], a[onclick*="employment.edit"]') || Array.from(document.querySelectorAll("#buttons button, #buttons a")).find((e1)=>e1.textContent?.toLowerCase().includes("add employer") ?? !1) || null;
}
_c4 = T;
function F() {
    return document.querySelector('button[onclick*="education.edit"], a[onclick*="education.edit"]') || Array.from(document.querySelectorAll("#buttons button, #buttons a")).find((e1)=>e1.textContent?.toLowerCase().includes("add education") ?? !1) || null;
}
_c5 = F;
async function I() {
    return await (0, a.default)(()=>{
        let e1 = A();
        if (0 === e1.length) return null;
        let t = e1[e1.length - 1], r1 = t.children;
        return r1 && r1.length >= 2 ? r1 : null;
    }, ()=>!1, 30);
}
_c6 = I;
async function j() {
    return await (0, a.default)(()=>{
        let e1 = k();
        if (0 === e1.length) return null;
        let t = e1[e1.length - 1], r1 = t.children;
        return r1 && r1.length >= 2 ? r1 : null;
    }, ()=>!1, 30);
}
function D(e1) {
    let t = new Map;
    for (let r1 of e1)t.set(r1.label, (t.get(r1.label) || 0) + 1);
    for (let r1 of e1){
        if (1 >= (t.get(r1.label) || 0)) continue;
        let e1 = r1.$input, n = e1?.getAttribute("data-question-title")?.trim();
        n && n !== r1.label && (r1.label = n);
    }
}
_c7 = D;
async function P() {
    let e1 = [];
    if (S()) return e1;
    let t = document.querySelector(".modal-content form"), r1 = t && s(t) ? t : null, n = r1 || document.querySelector("#landingStrip") || document.querySelector("form") || document.querySelector('[class*="application"], [class*="apply"], main') || document.body, i = Array.from(n.querySelectorAll("input:not([type='hidden']):not([type='submit']):not([type='button']):not([type='file']):not([type='radio']):not([type='checkbox']), select, textarea")).filter((e1)=>!E(e1) && "resume_text" !== e1.id && !u(e1));
    for (let t of i){
        let r1 = v(t);
        r1 && e1.push(r1);
    }
    let a = Array.from(n.querySelectorAll('input[type="checkbox"]')).filter((e1)=>!E(e1) && s(e1) && "info_use_consent" !== e1.id && "info_use_consent" !== e1.name), l = new Map;
    for (let e1 of a){
        let t = e1.closest('fieldset, [role="group"], [class*="checkbox-group"], [class*="checkboxes"]') || e1.parentElement;
        l.has(t) || l.set(t, []), l.get(t).push(e1);
    }
    for (let [t, r1] of l){
        if (0 === r1.length) continue;
        let n = t.querySelector("legend") || t.querySelector("label") || c(r1[0]);
        if (!n || !s(n)) continue;
        let i = p(n);
        if (!i) continue;
        let a = r1.map((e1)=>m(e1));
        e1.push({
            type: o.FIELD_TYPE.CHECKBOX,
            label: i,
            required: d(r1[0], n),
            options: a.filter((e1)=>e1),
            $checkboxs: r1,
            $input: r1[0],
            $label: n
        });
    }
    let f = w(n);
    for (let [, t] of f){
        if (0 === t.length) continue;
        let r1 = t[0];
        if (E(r1)) continue;
        let i = r1.closest('fieldset, [role="group"], [class*="radio-group"], [class*="radios"]') || r1.parentElement, a = i && (i.querySelector("legend") || i.querySelector("label")) || c(r1);
        if (!a || !s(a)) continue;
        let l = p(a);
        if (!l) continue;
        let u = t.map((e1)=>m(e1));
        e1.push({
            type: o.FIELD_TYPE.RADIOGROUP,
            label: l,
            required: d(r1, a),
            options: u.filter((e1)=>e1),
            $radioParent: i || n,
            $input: r1,
            $label: a
        });
    }
    return e1.push(...A()), e1.push(...k()), D(e1), e1;
}
_c8 = P;
async function _() {
    let e1 = {}, t = await P();
    for (let r1 of t)r1.type !== o.FIELD_TYPE.EDUCATION && r1.type !== o.FIELD_TYPE.EMPLOYMENT && (e1[r1.label] = h(r1));
    let r1 = A();
    r1.length > 0 && (e1.education = b(r1));
    let n = k();
    return n.length > 0 && (e1.employment = b(n)), e1;
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
$RefreshReg$(_c, "S");
$RefreshReg$(_c1, "E");
$RefreshReg$(_c2, "C");
$RefreshReg$(_c3, "A");
$RefreshReg$(_c4, "T");
$RefreshReg$(_c5, "F");
$RefreshReg$(_c6, "I");
$RefreshReg$(_c7, "D");
$RefreshReg$(_c8, "P");

},{}]},["f8koC","klJhQ"], "klJhQ", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QUFDLEVBQUU7UUFBRSxJQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsSUFBRztRQUFTLElBQUksSUFBRSxFQUFFO1FBQUcsSUFBRyxDQUFDLEdBQUU7UUFBUyxJQUFJLElBQUUsR0FBRSxJQUFJLENBQUEsS0FBRyxFQUFFO1FBQUksR0FBRSxLQUFLO1lBQUMsTUFBSyxFQUFFLFdBQVc7WUFBUyxPQUFNO1lBQUUsVUFBUyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFBRyxTQUFRLEVBQUUsT0FBTyxDQUFBLEtBQUc7WUFBRyxZQUFXO1lBQUUsUUFBTyxFQUFDLENBQUMsRUFBRTtZQUFDLFFBQU87UUFBQztJQUFFO0lBQUMsSUFBSSxJQUFFLEVBQUU7SUFBRyxLQUFJLElBQUcsR0FBRSxFQUFFLElBQUcsRUFBRTtRQUFDLElBQUcsTUFBSSxFQUFFLFFBQU87UUFBUyxJQUFJLEtBQUUsQ0FBQyxDQUFDLEVBQUU7UUFBQyxJQUFHLEVBQUUsS0FBRztRQUFTLElBQUksSUFBRSxHQUFFLFFBQVEsMEVBQXdFLEdBQUUsZUFBYyxJQUFFLEtBQUksQ0FBQSxFQUFFLGNBQWMsYUFBVyxFQUFFLGNBQWMsUUFBTyxLQUFJLEVBQUU7UUFBRyxJQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsSUFBRztRQUFTLElBQUksSUFBRSxFQUFFO1FBQUcsSUFBRyxDQUFDLEdBQUU7UUFBUyxJQUFJLElBQUUsRUFBRSxJQUFJLENBQUEsS0FBRyxFQUFFO1FBQUksR0FBRSxLQUFLO1lBQUMsTUFBSyxFQUFFLFdBQVc7WUFBVyxPQUFNO1lBQUUsVUFBUyxFQUFFLElBQUU7WUFBRyxTQUFRLEVBQUUsT0FBTyxDQUFBLEtBQUc7WUFBRyxjQUFhLEtBQUc7WUFBRSxRQUFPO1lBQUUsUUFBTztRQUFDO0lBQUU7SUFBQyxPQUFPLEdBQUUsUUFBUSxNQUFLLEdBQUUsUUFBUSxNQUFLLEVBQUUsS0FBRztBQUFDO01BQXJtRDtBQUFzbUQsZUFBZTtJQUFJLElBQUksS0FBRSxDQUFDLEdBQUUsSUFBRSxNQUFNO0lBQUksS0FBSSxJQUFJLE1BQUssRUFBRSxHQUFFLFNBQU8sRUFBRSxXQUFXLGFBQVcsR0FBRSxTQUFPLEVBQUUsV0FBVyxjQUFhLENBQUEsRUFBQyxDQUFDLEdBQUUsTUFBTSxHQUFDLEVBQUUsR0FBQztJQUFHLElBQUksS0FBRTtJQUFJLEdBQUUsU0FBTyxLQUFJLENBQUEsR0FBRSxZQUFVLEVBQUUsR0FBQztJQUFHLElBQUksSUFBRTtJQUFJLE9BQU8sRUFBRSxTQUFPLEtBQUksQ0FBQSxHQUFFLGFBQVcsRUFBRSxFQUFDLEdBQUc7QUFBQyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtZDVmNWU2MTVlZDQ1OWE3ZC5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9zaXRlcy9pc29sdmVkL3J1bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBXPU9iamVjdC5jcmVhdGU7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBWPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcT0oZSx0LG8scik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG4gb2YgRyh0KSkhSi5jYWxsKGUsbikmJm4hPT1vJiZQKGUsbix7Z2V0OigpPT50W25dLGVudW1lcmFibGU6IShyPVYodCxuKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgej0oZSx0LG8pPT4obz1lIT1udWxsP1coWChlKSk6e30scSh0fHwhZXx8IWUuX19lc01vZHVsZT9QKG8sXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOm8sZSkpO3ZhciB5PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIEg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSz1uZXcgU2V0KHkpLEQ9ZT0+Sy5oYXMoZSksdWU9eS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBkZT1EKFwiLS1kcnktcnVuXCIpLF89KCk9PkQoXCItLXZlcmJvc2VcIil8fEgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsZmU9XygpO3ZhciB4PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBrPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksVD0oLi4uZSk9PngoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxBPSguLi5lKT0+eChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFE9MCxwPSguLi5lKT0+XygpJiZ4KGBcXHV7MUY3RTF9ICR7USsrfWAsLi4uZSk7dmFyIGM9e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wicGFnZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXHNpdGVzXFxcXGlzb2x2ZWRcXFxccnVsZXMuanNcIixcImJ1bmRsZUlkXCI6XCJlYWQ5NzMwYzA0ODNhNTFjXCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogYkFyVDFcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL2lzb2x2ZWQvcnVsZXMuanNcclxuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgfmNvcmUvZW51bXMgLT4gMU8zbmMgID0+ICBzcmMvY29yZS9lbnVtcy5qc1xyXG4gKiAgIH51dGlscy9nZXRUYXJnZXRPclRpbWVvdXQgLT4gMVRCaEYgID0+ICBzcmMvdXRpbHMvZ2V0VGFyZ2V0T3JUaW1lb3V0LmpzXHJcbiAqL1xyXG5cclxudmFyIG49ZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7bi5kZWZpbmVJbnRlcm9wRmxhZyhyKSxuLmV4cG9ydChyLFwiaXNFbGVtZW50RGlzYWJsZWRcIiwoKT0+bCksbi5leHBvcnQocixcImdldFNlY3Rpb25SZWNvcmRTbmFwc2hvdFwiLCgpPT5nKSxuLmV4cG9ydChyLFwiaXNSZWZlcmVuY2VQYWdlXCIsKCk9PlMpLG4uZXhwb3J0KHIsXCJnZXRFZHVjYXRpb25SdWxlc1wiLCgpPT5BKSxuLmV4cG9ydChyLFwiZ2V0RXhwZXJpZW5jZVJ1bGVzXCIsKCk9PmspLG4uZXhwb3J0KHIsXCJnZXRBZGRFbXBsb3ltZW50QnV0dG9uXCIsKCk9PlQpLG4uZXhwb3J0KHIsXCJnZXRBZGRFZHVjYXRpb25CdXR0b25cIiwoKT0+Riksbi5leHBvcnQocixcImdldEVkdWNhdGlvbkVkaXRvclJ1bGVzXCIsKCk9PkkpLG4uZXhwb3J0KHIsXCJnZXRFbXBsb3ltZW50RWRpdG9yUnVsZXNcIiwoKT0+aiksbi5leHBvcnQocixcImV4dHJhY3RSdWxlc1wiLCgpPT5QKSxuLmV4cG9ydChyLFwiZ2V0Rm9ybVNuYXBzaG90XCIsKCk9Pl8pO3ZhciBvPWUoXCJ+Y29yZS9lbnVtc1wiKSxpPWUoXCJ+dXRpbHMvZ2V0VGFyZ2V0T3JUaW1lb3V0XCIpLGE9bi5pbnRlcm9wRGVmYXVsdChpKTtmdW5jdGlvbiBsKGUpe3JldHVybiEhKFwidHJ1ZVwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIpfHxlLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpKXx8XCJkaXNhYmxlZFwiaW4gZSYmISFlLmRpc2FibGVkfWZ1bmN0aW9uIHMoZSl7bGV0IHQ9ZTtmb3IoO3Q7KXtpZih0LmhpZGRlbnx8XCJ0cnVlXCI9PT10LmdldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpKXJldHVybiExO2xldCBlPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpO2lmKFwibm9uZVwiPT09ZS5kaXNwbGF5fHxcImhpZGRlblwiPT09ZS52aXNpYmlsaXR5fHxcImNvbGxhcHNlXCI9PT1lLnZpc2liaWxpdHkpcmV0dXJuITE7dD10LnBhcmVudEVsZW1lbnR9cmV0dXJuITB9ZnVuY3Rpb24gdShlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50JiYoXCJzb3VyY2VfaWRcIj09PWUuaWR8fFwic291cmNlX2lkXCI9PT1lLm5hbWUpJiYhcyhlKX1mdW5jdGlvbiBjKGUpe2xldCB0PWUuaWQ7aWYodCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHt0fVwiXWApO2lmKGUpcmV0dXJuIGV9bGV0IHI9ZS5jbG9zZXN0KFwiZmllbGRzZXQsIGxpLCAuZm9ybS1ncm91cCwgLmZvcm0tZmllbGRcIik7aWYocil7bGV0IGU9ci5xdWVyeVNlbGVjdG9yKFwibGFiZWwsIGxlZ2VuZFwiKTtpZihlKXJldHVybiBlfWxldCBuPWUubmV4dEVsZW1lbnRTaWJsaW5nO3JldHVybiBuJiZcInNwYW5cIj09PW4udGFnTmFtZS50b0xvd2VyQ2FzZSgpJiZuLnRleHRDb250ZW50Py50cmltKCk/bjpudWxsfWZ1bmN0aW9uIGQoZSx0KXtpZihlLmhhc0F0dHJpYnV0ZShcInJlcXVpcmVkXCIpfHxcInRydWVcIj09PWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1yZXF1aXJlZFwiKSlyZXR1cm4hMDtsZXQgcj1lLmNsb3Nlc3QoXCJkaXYsIGZpZWxkc2V0LCBsaSwgLmZpZWxkLCAuZm9ybS1ncm91cCwgW2NsYXNzKj0nZmllbGQnXSwgW2NsYXNzKj0ncXVlc3Rpb24nXVwiKTtpZihyKXtpZihyLmhhc0F0dHJpYnV0ZShcInJlcXVpcmVkXCIpfHxyLnF1ZXJ5U2VsZWN0b3IoJ1tjbGFzcyo9XCJyZXF1aXJlZFwiXSwgLnJlcXVpcmVkJykpcmV0dXJuITA7bGV0IGU9ci5xdWVyeVNlbGVjdG9yKCdhYmJyW3RpdGxlPVwicmVxdWlyZWRcIl0sIHNwYW5bYXJpYS1sYWJlbD1cInJlcXVpcmVkXCJdLCBbY2xhc3MqPVwicmVxdWlyZWQtbWFya1wiXSwgW2NsYXNzKj1cImFzdGVyaXNrXCJdJyk7aWYoZSlyZXR1cm4hMH1pZih0KXtpZih0LnF1ZXJ5U2VsZWN0b3IoJ2FiYnJbdGl0bGU9XCJyZXF1aXJlZFwiXSwgW2NsYXNzKj1cInJlcXVpcmVkXCJdJykpcmV0dXJuITA7bGV0IGU9dC5jbG9uZU5vZGUoITApO2lmKGUucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpLmZvckVhY2goZT0+ZS5yZW1vdmUoKSksZS50ZXh0Q29udGVudD8uaW5jbHVkZXMoXCIqXCIpKXJldHVybiEwfXJldHVybiExfWZ1bmN0aW9uIGYoZSl7cmV0dXJuIEFycmF5LmZyb20oZS5vcHRpb25zKS5tYXAoZT0+ZS50ZXh0Q29udGVudD8udHJpbSgpfHxlLnZhbHVlKS5maWx0ZXIoZT0+XCJcIiE9PWUpfWZ1bmN0aW9uIHAoZSl7aWYoIWUpcmV0dXJuXCJcIjtsZXQgdD1lLmNsb25lTm9kZSghMCk7cmV0dXJuIHQucXVlcnlTZWxlY3RvckFsbChcImFiYnIsIFthcmlhLWhpZGRlbl0sIFtjbGFzcyo9J3JlcXVpcmVkJ10sIFtjbGFzcyo9J2FzdGVyaXNrJ10sIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpLmZvckVhY2goZT0+ZS5yZW1vdmUoKSksdC50ZXh0Q29udGVudD8udHJpbSgpLnJlcGxhY2UoL1sqOl0rXFxzKiQvLFwiXCIpLnRyaW0oKXx8XCJcIn1mdW5jdGlvbiBtKGUpe2xldCB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7ZS5pZH1cIl1gKTtyZXR1cm4gdD8udGV4dENvbnRlbnQ/LnRyaW0oKXx8ZS5jbG9zZXN0KFwibGFiZWxcIik/LnRleHRDb250ZW50Py50cmltKCl8fGUudmFsdWV8fFwiXCJ9ZnVuY3Rpb24gaChlKXtpZighKFwiJGlucHV0XCJpbiBlKXx8IWUuJGlucHV0KXJldHVyblwiXCI7aWYoZS50eXBlPT09by5GSUVMRF9UWVBFLkNIRUNLQk9YKXtsZXQgdD1lLHI9dC4kY2hlY2tib3hzfHxbdC4kaW5wdXRdLG49ci5tYXAoKGUscik9PmUuY2hlY2tlZD90Lm9wdGlvbnM/LltyXXx8bShlKTpudWxsKS5maWx0ZXIoZT0+ISFlKTtyZXR1cm4gMD09PW4ubGVuZ3RoP1wiXCI6MT09PW4ubGVuZ3RoP25bMF06bn1pZihlLnR5cGU9PT1vLkZJRUxEX1RZUEUuUkFESU9HUk9VUCl7bGV0IHQ9ZS4kcmFkaW9QYXJlbnQscj10Py5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCcpO3JldHVybiByP20ocik6XCJcIn1sZXQgdD1lLiRpbnB1dDtyZXR1cm4gZS50eXBlPT09by5GSUVMRF9UWVBFLlNFTEVDVCYmdCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50P3Qub3B0aW9uc1t0LnNlbGVjdGVkSW5kZXhdPy50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwiOih0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudHx8dCBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpJiZ0LnZhbHVlfHxcIlwifWZ1bmN0aW9uIGcoZSl7bGV0IHQ9e307Zm9yKGxldCByIG9mIGUpdFtyLmxhYmVsXT1oKHIpO3JldHVybiB0fWZ1bmN0aW9uIGIoZSl7cmV0dXJuIGUubWFwKGU9PmcoZS5jaGlsZHJlbnx8W10pKS5maWx0ZXIoZT0+T2JqZWN0LmtleXMoZSkubGVuZ3RoPjApfWZ1bmN0aW9uIHkoZSx0KXtpZihlPT09by5GSUVMRF9UWVBFLkVEVUNBVElPTil7aWYoXCJDaXR5XCI9PT10KXJldHVyblwicmV0dXJuIHRvIHRoZSBwbGFjZSB3aGVyZSB0aGUgc2Nob29sIGlzIGxvY2F0ZWRcIjtpZihcIkNvdW50cnkvVGVycml0b3J5XCI9PT10KXJldHVyblwicmV0dXJuIHRoZSBDb3VudHJ5L1RlcnJpdG9yeSB3aGVyZSB0aGUgc2Nob29sIGlzIGxvY2F0ZWRcIn1pZihlPT09by5GSUVMRF9UWVBFLkVNUExPWU1FTlQpc3dpdGNoKHQpe2Nhc2VcIlN0YXJ0XCI6Y2FzZVwiU3RhcnQgRGF0ZVwiOmNhc2VcIkRhdGUgU3RhcnRlZFwiOmNhc2VcIkRhdGVzIEVtcGxveWVkIE1vbnRoIFN0YXJ0IERhdGVcIjpjYXNlXCJEYXRlcyBFbXBsb3llZCBZZWFyIFN0YXJ0IERhdGVcIjpyZXR1cm5cInJldHVybiB0aGUgZGF0ZSBpbiBFbmdsaXNoIG1vbnRoLXllYXIgZm9ybWF0LCBlLmcuICdBdWcgMjAxOCcgb3IgJ0F1Z3VzdCAyMDE4J1wiO2Nhc2VcIkVuZFwiOmNhc2VcIkVuZCBEYXRlXCI6Y2FzZVwiRGF0ZSBFbmRlZFwiOmNhc2VcIkRhdGVzIEVtcGxveWVkIE1vbnRoIEVuZCBEYXRlXCI6Y2FzZVwiRGF0ZXMgRW1wbG95ZWQgWWVhciBFbmQgRGF0ZVwiOnJldHVyblwicmV0dXJuIHRoZSBkYXRlIGluIEVuZ2xpc2ggbW9udGgteWVhciBmb3JtYXQsIGUuZy4gJ0RlYyAyMDE5JyBvciAnRGVjZW1iZXIgMjAxOScuIElmIGN1cnJlbnRseSBlbXBsb3llZCwgcmV0dXJuICdQcmVzZW50J1wiO2Nhc2VcIlJlYXNvbiBGb3IgTGVhdmluZ1wiOnJldHVyblwidGhlIHJlYXNvbiB3aHkgdGhlIGFwcGxpY2FudCBsZWZ0IHRoaXMgZW1wbG95ZXIsIGUuZy4gJ1NlZWtpbmcgbmV3IG9wcG9ydHVuaXRpZXMnLCAnQ2FyZWVyIGdyb3d0aCcsICdSZWxvY2F0aW9uJ1wiO2Nhc2VcIlN0YXJ0aW5nIFJhdGUgb2YgUGF5XCI6cmV0dXJuXCJ0aGUgc2FsYXJ5IG9yIGhvdXJseSB3YWdlIHdoZW4gdGhlIGFwcGxpY2FudCBzdGFydGVkIHRoaXMgcG9zaXRpb25cIjtjYXNlXCJFbmRpbmcgUmF0ZSBvZiBQYXlcIjpyZXR1cm5cInRoZSBzYWxhcnkgb3IgaG91cmx5IHdhZ2Ugd2hlbiB0aGUgYXBwbGljYW50IGxlZnQgdGhpcyBwb3NpdGlvblwiO2Nhc2VcIkV4cGxhaW4gWW91ciBEdXRpZXNcIjpjYXNlXCJCcmllZmx5IEV4cGxhaW4gWW91ciBEdXRpZXNcIjpyZXR1cm5cImEgYnJpZWYgc3VtbWFyeSBvZiB0aGUgYXBwbGljYW50J3MgbWFpbiBqb2IgcmVzcG9uc2liaWxpdGllcyBhbmQgZHV0aWVzIGF0IHRoaXMgcG9zaXRpb25cIn19ZnVuY3Rpb24gdihlKXtsZXQgdD1lLnRhZ05hbWUudG9Mb3dlckNhc2UoKSxyPWUudHlwZT8udG9Mb3dlckNhc2UoKXx8XCJcIjtpZihcImhpZGRlblwiPT09cnx8XCJzdWJtaXRcIj09PXJ8fFwiYnV0dG9uXCI9PT1yfHxcImZpbGVcIj09PXJ8fFwiaW1hZ2VcIj09PXJ8fFwicmVzZXRcIj09PXJ8fCFzKGUpfHxsKGUpfHxcInJhZGlvXCI9PT1yKXJldHVybiBudWxsO2xldCBuPWMoZSksaT1lLmdldEF0dHJpYnV0ZShcImRhdGEtcXVlc3Rpb24tdGl0bGVcIik/LnRyaW0oKXx8XCJcIixhPXAobil8fGk7aWYoIWEpcmV0dXJuIG51bGw7bGV0IHU9bnx8KCgpPT57bGV0IGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7cmV0dXJuIGUudGV4dENvbnRlbnQ9YSxlfSkoKSxtPWQoZSxuKTtpZihcImNoZWNrYm94XCI9PT1yKXJldHVybnt0eXBlOm8uRklFTERfVFlQRS5DSEVDS0JPWCxsYWJlbDphLHJlcXVpcmVkOm0sb3B0aW9uczpbXSwkY2hlY2tib3hzOltlXSwkaW5wdXQ6ZSwkbGFiZWw6dX07aWYoXCJzZWxlY3RcIj09PXQpe2xldCB0PWYoZSk7cmV0dXJue3R5cGU6by5GSUVMRF9UWVBFLlNFTEVDVCxsYWJlbDphLHJlcXVpcmVkOm0sb3B0aW9uczp0LCRpbnB1dDplLCRsYWJlbDp1fX1yZXR1cm57dHlwZTpvLkZJRUxEX1RZUEUuVEVYVCxsYWJlbDphLHJlcXVpcmVkOm0sJGlucHV0OmUsJGxhYmVsOnV9fWZ1bmN0aW9uIHcoZSl7bGV0IHQ9bmV3IE1hcCxyPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKSkuZmlsdGVyKGU9PnMoZSkmJiFsKGUpKTtmb3IobGV0IGUgb2Ygcil7bGV0IHI9ZS5uYW1lfHxlLmlkO3ImJih0LmhhcyhyKXx8dC5zZXQocixbXSksdC5nZXQocikucHVzaChlKSl9cmV0dXJuIHR9ZnVuY3Rpb24gUygpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGFuZGluZ1N0cmlwXCIpfHxkb2N1bWVudC5ib2R5LHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGVwcyAuc3RlcC5jdXJyZW50XCIpLHI9dD8udGV4dENvbnRlbnQ/LnRyaW0oKS50b0xvd2VyQ2FzZSgpfHxcIlwiLG49dD8uZ2V0QXR0cmlidXRlKFwiZGF0YS1maWxlXCIpPy50cmltKCkudG9Mb3dlckNhc2UoKXx8XCJcIixvPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbZGF0YS1xdWVzdGlvbi10aXRsZV0sIHNlbGVjdFtkYXRhLXF1ZXN0aW9uLXRpdGxlXSwgdGV4dGFyZWFbZGF0YS1xdWVzdGlvbi10aXRsZV1cIikpLm1hcChlPT5lLmdldEF0dHJpYnV0ZShcImRhdGEtcXVlc3Rpb24tdGl0bGVcIik/LnRyaW0oKS50b0xvd2VyQ2FzZSgpfHxcIlwiKS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwicmVmZXJlbmNlIFwiKSksaT1uZXcgU2V0KFtcInJlZmVyZW5jZSBuYW1lXCIsXCJyZWZlcmVuY2UgcmVsYXRpb25zaGlwXCIsXCJyZWZlcmVuY2UgcGhvbmUgbnVtYmVyXCIsXCJyZWZlcmVuY2UgZW1haWwgYWRkcmVzc1wiXSksYT1vLmZpbHRlcihlPT5pLmhhcyhlKSkubGVuZ3RoLGw9QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJoMSwgaDIsIGgzLCBsZWdlbmRcIikpLnNvbWUoZT0+L15yZWZlcmVuY2VcXHMrXFxkK1xcKj8kL2kudGVzdChlLnRleHRDb250ZW50Py50cmltKCl8fFwiXCIpKSxzPXIuaW5jbHVkZXMoXCJyZWZlcmVuY2VcIil8fG4uaW5jbHVkZXMoXCJyZWZlcmVuY2VcIik7cmV0dXJuIHM/bHx8YT49MjpsJiZhPj0yfWZ1bmN0aW9uIEUoZSl7cmV0dXJuISFlLmNsb3Nlc3QoJ2Zvcm1baWQqPVwiZWR1Y2F0aW9uXCJdLCBmb3JtW2NsYXNzKj1cImVkdWNhdGlvblwiXSwgZm9ybVtpZCo9XCJlbXBsb3lcIl0sIGZvcm1bY2xhc3MqPVwiZW1wbG95XCJdLCBmb3JtW2lkKj1cImV4cGVyaWVuY2VcIl0sIGZvcm1bY2xhc3MqPVwiZXhwZXJpZW5jZVwiXScpfWZ1bmN0aW9uIHgoZSl7bGV0IHQ9W10scj1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcImlucHV0Om5vdChbdHlwZT0naGlkZGVuJ10pOm5vdChbdHlwZT0nc3VibWl0J10pOm5vdChbdHlwZT0nYnV0dG9uJ10pOm5vdChbdHlwZT0nZmlsZSddKTpub3QoW3R5cGU9J3JhZGlvJ10pOm5vdChbdHlwZT0nY2hlY2tib3gnXSksIHNlbGVjdCwgdGV4dGFyZWFcIikpO2ZvcihsZXQgZSBvZiByKXtsZXQgcj12KGUpO3ImJnQucHVzaChyKX1sZXQgbj1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykpLmZpbHRlcihlPT5zKGUpJiZcImluZm9fdXNlX2NvbnNlbnRcIiE9PWUuaWQmJlwiaW5mb191c2VfY29uc2VudFwiIT09ZS5uYW1lKTtmb3IobGV0IGUgb2Ygbil7bGV0IHI9dihlKTtyJiZ0LnB1c2gocil9bGV0IGk9dyhlKTtmb3IobGV0WyxyXW9mIGkpe2lmKDA9PT1yLmxlbmd0aCljb250aW51ZTtsZXQgbj1yWzBdLGk9bi5jbG9zZXN0KCdmaWVsZHNldCwgW3JvbGU9XCJncm91cFwiXSwgW2NsYXNzKj1cInJhZGlvLWdyb3VwXCJdLCBbY2xhc3MqPVwicmFkaW9zXCJdJyl8fG4ucGFyZW50RWxlbWVudCxhPWkmJihpLnF1ZXJ5U2VsZWN0b3IoXCJsZWdlbmRcIil8fGkucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpKXx8YyhuKTtpZighYXx8IXMoYSkpY29udGludWU7bGV0IGw9cChhKTtpZighbCljb250aW51ZTtsZXQgdT1yLm1hcChlPT5tKGUpKTt0LnB1c2goe3R5cGU6by5GSUVMRF9UWVBFLlJBRElPR1JPVVAsbGFiZWw6bCxyZXF1aXJlZDpkKG4sYSksb3B0aW9uczp1LmZpbHRlcihlPT5lKSwkcmFkaW9QYXJlbnQ6aXx8ZSwkaW5wdXQ6biwkbGFiZWw6YX0pfXJldHVybiB0fWZ1bmN0aW9uIEMoZSx0LHIpe3JldHVybnt0eXBlOmUsbGFiZWw6dCxjaGlsZHJlbjpyLG9wdGlvbnM6ci5tYXAodD0+e2xldCByPXt0eXBlOnQudHlwZSxsYWJlbDp0LmxhYmVsfTt0LnR5cGUhPT1vLkZJRUxEX1RZUEUuVEVYVCYmKHIub3B0aW9ucz10Lm9wdGlvbnN8fFtdKTtsZXQgbj10LmRlc2NyaXB0aW9ufHx5KGUsdC5sYWJlbCk7cmV0dXJuIG4mJihyLmRlc2NyaXB0aW9uPW4pLHJ9KSxyZXF1aXJlZDohMX19ZnVuY3Rpb24gQSgpe2xldCBlPVtdLHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZHVjYXRpb25fZm9ybVwiKTtpZighdClyZXR1cm4gZTtsZXQgcj14KHQpO3JldHVybiByLmxlbmd0aD4wJiZlLnB1c2goQyhvLkZJRUxEX1RZUEUuRURVQ0FUSU9OLFwiRWR1Y2F0aW9uXCIscikpLGV9ZnVuY3Rpb24gaygpe2xldCBlPVtdLHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbXBsb3llcl9mb3JtXCIpO2lmKCF0KXJldHVybiBlO2xldCByPXgodCk7cmV0dXJuIHIubGVuZ3RoPjAmJmUucHVzaChDKG8uRklFTERfVFlQRS5FTVBMT1lNRU5ULFwiRW1wbG95bWVudFwiLHIpKSxlfWZ1bmN0aW9uIFQoKXtyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW29uY2xpY2sqPVwiZW1wbG95bWVudC5lZGl0XCJdLCBhW29uY2xpY2sqPVwiZW1wbG95bWVudC5lZGl0XCJdJyl8fEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNidXR0b25zIGJ1dHRvbiwgI2J1dHRvbnMgYVwiKSkuZmluZChlPT5lLnRleHRDb250ZW50Py50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwiYWRkIGVtcGxveWVyXCIpPz8hMSl8fG51bGx9ZnVuY3Rpb24gRigpe3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bb25jbGljayo9XCJlZHVjYXRpb24uZWRpdFwiXSwgYVtvbmNsaWNrKj1cImVkdWNhdGlvbi5lZGl0XCJdJyl8fEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNidXR0b25zIGJ1dHRvbiwgI2J1dHRvbnMgYVwiKSkuZmluZChlPT5lLnRleHRDb250ZW50Py50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwiYWRkIGVkdWNhdGlvblwiKT8/ITEpfHxudWxsfWFzeW5jIGZ1bmN0aW9uIEkoKXtyZXR1cm4gYXdhaXQgKDAsYS5kZWZhdWx0KSgoKT0+e2xldCBlPUEoKTtpZigwPT09ZS5sZW5ndGgpcmV0dXJuIG51bGw7bGV0IHQ9ZVtlLmxlbmd0aC0xXSxyPXQuY2hpbGRyZW47cmV0dXJuIHImJnIubGVuZ3RoPj0yP3I6bnVsbH0sKCk9PiExLDMwKX1hc3luYyBmdW5jdGlvbiBqKCl7cmV0dXJuIGF3YWl0ICgwLGEuZGVmYXVsdCkoKCk9PntsZXQgZT1rKCk7aWYoMD09PWUubGVuZ3RoKXJldHVybiBudWxsO2xldCB0PWVbZS5sZW5ndGgtMV0scj10LmNoaWxkcmVuO3JldHVybiByJiZyLmxlbmd0aD49Mj9yOm51bGx9LCgpPT4hMSwzMCl9ZnVuY3Rpb24gRChlKXtsZXQgdD1uZXcgTWFwO2ZvcihsZXQgciBvZiBlKXQuc2V0KHIubGFiZWwsKHQuZ2V0KHIubGFiZWwpfHwwKSsxKTtmb3IobGV0IHIgb2YgZSl7aWYoMT49KHQuZ2V0KHIubGFiZWwpfHwwKSljb250aW51ZTtsZXQgZT1yLiRpbnB1dCxuPWU/LmdldEF0dHJpYnV0ZShcImRhdGEtcXVlc3Rpb24tdGl0bGVcIik/LnRyaW0oKTtuJiZuIT09ci5sYWJlbCYmKHIubGFiZWw9bil9fWFzeW5jIGZ1bmN0aW9uIFAoKXtsZXQgZT1bXTtpZihTKCkpcmV0dXJuIGU7bGV0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250ZW50IGZvcm1cIikscj10JiZzKHQpP3Q6bnVsbCxuPXJ8fGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGFuZGluZ1N0cmlwXCIpfHxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKXx8ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2NsYXNzKj1cImFwcGxpY2F0aW9uXCJdLCBbY2xhc3MqPVwiYXBwbHlcIl0sIG1haW4nKXx8ZG9jdW1lbnQuYm9keSxpPUFycmF5LmZyb20obi5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQ6bm90KFt0eXBlPSdoaWRkZW4nXSk6bm90KFt0eXBlPSdzdWJtaXQnXSk6bm90KFt0eXBlPSdidXR0b24nXSk6bm90KFt0eXBlPSdmaWxlJ10pOm5vdChbdHlwZT0ncmFkaW8nXSk6bm90KFt0eXBlPSdjaGVja2JveCddKSwgc2VsZWN0LCB0ZXh0YXJlYVwiKSkuZmlsdGVyKGU9PiFFKGUpJiZcInJlc3VtZV90ZXh0XCIhPT1lLmlkJiYhdShlKSk7Zm9yKGxldCB0IG9mIGkpe2xldCByPXYodCk7ciYmZS5wdXNoKHIpfWxldCBhPUFycmF5LmZyb20obi5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKSkuZmlsdGVyKGU9PiFFKGUpJiZzKGUpJiZcImluZm9fdXNlX2NvbnNlbnRcIiE9PWUuaWQmJlwiaW5mb191c2VfY29uc2VudFwiIT09ZS5uYW1lKSxsPW5ldyBNYXA7Zm9yKGxldCBlIG9mIGEpe2xldCB0PWUuY2xvc2VzdCgnZmllbGRzZXQsIFtyb2xlPVwiZ3JvdXBcIl0sIFtjbGFzcyo9XCJjaGVja2JveC1ncm91cFwiXSwgW2NsYXNzKj1cImNoZWNrYm94ZXNcIl0nKXx8ZS5wYXJlbnRFbGVtZW50O2wuaGFzKHQpfHxsLnNldCh0LFtdKSxsLmdldCh0KS5wdXNoKGUpfWZvcihsZXRbdCxyXW9mIGwpe2lmKDA9PT1yLmxlbmd0aCljb250aW51ZTtsZXQgbj10LnF1ZXJ5U2VsZWN0b3IoXCJsZWdlbmRcIil8fHQucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpfHxjKHJbMF0pO2lmKCFufHwhcyhuKSljb250aW51ZTtsZXQgaT1wKG4pO2lmKCFpKWNvbnRpbnVlO2xldCBhPXIubWFwKGU9Pm0oZSkpO2UucHVzaCh7dHlwZTpvLkZJRUxEX1RZUEUuQ0hFQ0tCT1gsbGFiZWw6aSxyZXF1aXJlZDpkKHJbMF0sbiksb3B0aW9uczphLmZpbHRlcihlPT5lKSwkY2hlY2tib3hzOnIsJGlucHV0OnJbMF0sJGxhYmVsOm59KX1sZXQgZj13KG4pO2ZvcihsZXRbLHRdb2YgZil7aWYoMD09PXQubGVuZ3RoKWNvbnRpbnVlO2xldCByPXRbMF07aWYoRShyKSljb250aW51ZTtsZXQgaT1yLmNsb3Nlc3QoJ2ZpZWxkc2V0LCBbcm9sZT1cImdyb3VwXCJdLCBbY2xhc3MqPVwicmFkaW8tZ3JvdXBcIl0sIFtjbGFzcyo9XCJyYWRpb3NcIl0nKXx8ci5wYXJlbnRFbGVtZW50LGE9aSYmKGkucXVlcnlTZWxlY3RvcihcImxlZ2VuZFwiKXx8aS5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIikpfHxjKHIpO2lmKCFhfHwhcyhhKSljb250aW51ZTtsZXQgbD1wKGEpO2lmKCFsKWNvbnRpbnVlO2xldCB1PXQubWFwKGU9Pm0oZSkpO2UucHVzaCh7dHlwZTpvLkZJRUxEX1RZUEUuUkFESU9HUk9VUCxsYWJlbDpsLHJlcXVpcmVkOmQocixhKSxvcHRpb25zOnUuZmlsdGVyKGU9PmUpLCRyYWRpb1BhcmVudDppfHxuLCRpbnB1dDpyLCRsYWJlbDphfSl9cmV0dXJuIGUucHVzaCguLi5BKCkpLGUucHVzaCguLi5rKCkpLEQoZSksZX1hc3luYyBmdW5jdGlvbiBfKCl7bGV0IGU9e30sdD1hd2FpdCBQKCk7Zm9yKGxldCByIG9mIHQpci50eXBlIT09by5GSUVMRF9UWVBFLkVEVUNBVElPTiYmci50eXBlIT09by5GSUVMRF9UWVBFLkVNUExPWU1FTlQmJihlW3IubGFiZWxdPWgocikpO2xldCByPUEoKTtyLmxlbmd0aD4wJiYoZS5lZHVjYXRpb249YihyKSk7bGV0IG49aygpO3JldHVybiBuLmxlbmd0aD4wJiYoZS5lbXBsb3ltZW50PWIobikpLGV9XHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJydWxlcy4wNDgzYTUxYy5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);