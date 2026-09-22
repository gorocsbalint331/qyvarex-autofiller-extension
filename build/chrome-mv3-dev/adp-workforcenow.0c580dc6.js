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
})({"imGEQ":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\adp-workforcenow.js",
    "bundleId": "d70ccc9b0c580dc6",
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
var j = z(require("d9f04f6854085506"));
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

},{"d9f04f6854085506":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"8nOyT":[function(require,module,exports) {
/**
 * Parcel module id: 8CqoG
 * Resolved path: src/contents/sites/adp-workforcenow.js
 * Dependencies:
 *   ./address -> 3tPLX  =>  src/contents/sites/adp-workforcenow/address.js
 *   ./answer -> 3cqYs  =>  src/contents/sites/adp-workforcenow/answer.js
 *   ./operations -> lIV4n  =>  src/contents/sites/adp-workforcenow/operations.js
 *   ./rules -> 5fFF1  =>  src/contents/sites/adp-workforcenow/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~store/autofillInfo -> 79VNP  =>  src/store/autofillInfo.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "AdpWorkforceNow", ()=>E);
var o = e("@plasmohq/messaging"), i = e("~contents/methods/dom"), a = e("~contents/sites/base-filler"), l = e("~core/enums"), s = e("~store/autofillInfo"), u = e("~utils/delay"), c = e("./address"), d = e("./answer"), f = e("./operations"), p = e("./rules");
function m(e1) {
    return String(e1.label || "").replace(/\s*\*\s*$/, "").replace(/\s+/g, " ").trim().toLowerCase();
}
function h(e1) {
    return "country" === m(e1);
}
function g(e1) {
    return /(^|[\s/])(state|province|territory)($|[\s/])/.test(m(e1));
}
function b(e1) {
    let t = e1.$input;
    return "address line 1" === m(e1) && t instanceof HTMLInputElement && t.classList.contains("pac-target-input");
}
function y(e1) {
    return Array.isArray(e1) ? e1.map(y).find(Boolean) ?? "" : "string" == typeof e1 ? e1.trim() : "number" == typeof e1 ? String(e1) : "";
}
function v(e1, t) {
    return e1.map((e1)=>{
        let r1 = m(e1), n = Object.entries(t).find(([e1])=>m({
                label: e1
            }) === r1), o = y(n?.[1]);
        return {
            label: e1.label,
            type: e1.type,
            present: !!o,
            valueLength: o.length,
            answerLabelMatch: n ? n[0] === e1.label ? "exact" : "normalized" : "missing"
        };
    });
}
function w(e1) {
    return e1 instanceof Error && e1.name ? e1.name : "unknown";
}
function S(e1) {
    let t = e1.findIndex(h), r1 = e1.findIndex(g);
    if (t < 0 || r1 < 0 || t < r1) return e1;
    let n = e1.filter(h), o = e1.filter((e1)=>!h(e1)), i = o.findIndex(g);
    return [
        ...o.slice(0, i),
        ...n,
        ...o.slice(i)
    ];
}
_c = S;
class E extends a.BaseFiller {
    getFieldHandlers() {
        return {
            [l.FIELD_TYPE.TEXT]: {
                handler: (e1, t)=>(0, d.isAdpWorkforceNowPhoneNumberLabel)(e1.label) ? (0, f.fillAdpWorkforceNowPhoneInput)(e1.$input, t, e1.label) : (0, f.fillAdpWorkforceNowTextInput)(e1.$input, t, e1.label),
                options: {
                    expectArray: !1
                }
            },
            [l.FIELD_TYPE.NUMBER]: {
                handler: (e1, t)=>(0, f.fillAdpWorkforceNowTextInput)(e1.$input, String(t ?? ""), e1.label),
                options: {
                    expectArray: !1
                }
            },
            [l.FIELD_TYPE.CHECKBOX]: {
                handler: (e1, t)=>(0, i.fillCheckBoxesField)(e1, t),
                options: {
                    expectArray: !0
                }
            },
            [l.FIELD_TYPE.SELECT]: {
                handler: (e1, t)=>(0, d.isAdpWorkforceNowPhoneCountryCodeLabel)(e1.label) ? (0, f.fillAdpWorkforceNowPhoneCountryCode)(e1.$input, t, e1.label) : (0, f.fillCustomSelectField)(e1?.$input, t),
                options: {
                    expectArray: !0
                }
            },
            [l.FIELD_TYPE.RADIOGROUP]: {
                handler: (e1, t)=>(0, f.fillRadioGroupField)(e1, t),
                options: {
                    expectArray: !0
                }
            }
        };
    }
    async checkCoverLetter() {
        this.coverLetterAdvanceObserverBound || ((0, f.bindCoverLetterAdvanceRecheckObserver)(()=>void this.checkCoverLetter()), this.coverLetterAdvanceObserverBound = !0);
        let e1 = ++this.coverLetterCheckVersion, t = !1;
        for(let r1 = 0; r1 < 40; r1++){
            if (e1 !== this.coverLetterCheckVersion) return;
            let r1 = (0, f.getAdpWorkforceNowAdvanceButton)();
            if (r1 && (t = !0), t) {
                let t = (0, f.getCoverLetterFieldStatus)();
                if ("required" === t) {
                    e1 === this.coverLetterCheckVersion && (0, i.postCoverLetterStatus)(t);
                    return;
                }
            }
            await (0, u.delay)(t ? 200 : 250);
        }
        e1 === this.coverLetterCheckVersion && (0, i.postCoverLetterStatus)("");
    }
    async runPreFillForm() {
        await (0, f.preclickAddButtons)();
        let e1 = await (0, s.useAutofillInfoStore).getState().fetchAutofillInfo();
        this.currentRunCountry = "string" == typeof e1?.location?.country ? e1.location.country : "", this.currentRunCountryCommitted = await (0, f.prefillCountry)(this.currentRunCountry), console.info("[AdpWorkforceNowCountryDebug] prefill-result", JSON.stringify({
            hasCountry: !!this.currentRunCountry,
            committed: this.currentRunCountryCommitted
        })), await (0, f.preselectDesiredSalaryControls)();
    }
    async extractFormRules() {
        return await (0, p.getRules)();
    }
    getSiteName() {
        return "adp-workforcenow";
    }
    async handleResumeUpload() {
        await this.uploadCurrentFileSlots();
    }
    async getAutofillSnapshot() {
        return (0, p.getFormSnapshot)();
    }
    async getSubmitSnapshot() {
        return (0, p.getFormSnapshot)();
    }
    getSubmitButtonSelector() {
        return './/button[@id="ja_sv_cw_next_footer_btn" and normalize-space(.)="Submit"] | .//button[@type="submit" or contains(@class, "submit") or contains(normalize-space(.), "Submit")]';
    }
    async executeSiteSpecificSteps(e1) {
        this.bindNextSnapshotHandler(), await super.executeSiteSpecificSteps(e1);
    }
    async doFillForm(e1 = !1) {
        await this.initializeFillForm();
        let t = S(this.prepareCoverLetterRules(await this.extractFormRules())), { readyRules: r1, deferredRaceRules: n } = (0, p.partitionAdpWorkforceNowVsidRaceRules)(t), o = (0, p.hasAdpWorkforceNowVsidRaceDependency)(), i = this.getRulesWithoutManualCountry(r1);
        if (this.logPhoneRules(i), this.progressTracker.setFieldsRequiredStatus(r1), this.taskQueue.add(f.fillDisabilityStatusIfPresent), await this.taskQueue.run(), await this.handleResumeUpload(), i.length > 0) {
            let t = await this.fetchFormAnswers(i, e1);
            if ("string" == typeof t) return t;
            this.logPhoneAnswerResult(), this.logRegularAnswerSummary(i);
        } else this.answer = (0, d.formatAnswer)({
            regular: {},
            education: [],
            workExperience: [],
            skills: []
        });
        let a = await this.fillCountryFields(r1), l = a ? this.getRulesWithoutManualCountry((0, p.partitionAdpWorkforceNowVsidRaceRules)(S(this.prepareCoverLetterRules(await this.extractFormRules()))).readyRules) : i, s = a ? l : i;
        return a && console.info("[AdpWorkforceNowDebug] rules-refreshed-after-country", JSON.stringify({
            originalRuleCount: i.length,
            refreshedRuleCount: s.length
        })), await this.resolveGooglePlacesAddress(s), await this.fillRegularFields(s), await this.fillDeferredAdpWorkforceNowVsidRace(n, o, e1), await this.fillCoverLetterFields(), await this.executeSiteSpecificSteps(r1), this.finalizeFillForm();
    }
    submitApplication() {
        let e1 = (0, f.getAdpWorkforceNowAdvanceButton)();
        if (!e1?.isConnected) return;
        let t = e1.innerText?.trim() ?? "", r1 = e1.getAttribute("type")?.toLowerCase() ?? "";
        ("Submit" === t || "submit" === r1) && e1.click();
    }
    async uploadCurrentFileSlots() {
        let e1 = (0, f.getResumeUploadDom)();
        if (e1.container && (this.disableUploadResume ? this.progressTracker.updateMissedProgress("Resume/CV") : this.taskQueue.add(async ()=>{
            let e1 = await (0, f.uploadResume)(this.resumeInfo, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
            e1 || this.progressTracker.updateMissedProgress("Resume/CV");
        })), "required" === (0, f.getCoverLetterFieldStatus)()) {
            this.progressTracker.updateFieldRequiredStatus({
                label: "Cover Letter",
                required: !0
            });
            let e1 = this.getCoverLetterFilePayload();
            e1 ? this.taskQueue.add(async ()=>{
                let t = await (0, f.uploadCoverLetter)(e1, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
                t || this.progressTracker.updateMissedProgress("Cover Letter");
            }) : this.progressTracker.updateMissedProgress("Cover Letter");
        }
        await this.taskQueue.run();
    }
    getCoverLetterFilePayload() {
        return this.coverLetter?.coverLetterId && this.coverLetter.coverLetterName ? {
            coverLetterId: this.coverLetter.coverLetterId,
            coverLetterName: this.coverLetter.coverLetterName,
            markdown: this.coverLetter.markdown,
            useLegacyDownload: this.coverLetter.useLegacyDownload
        } : null;
    }
    async fillCountryFields(e1) {
        let t = e1.filter((e1)=>{
            let t = e1.$input;
            return h(e1) && t instanceof HTMLElement;
        }), r1 = !1;
        for (let e1 of t){
            let t = e1.$input;
            this.taskQueue.add(async ()=>{
                if (this.currentRunCountryCommitted) {
                    this.progressTracker.updateFilledProgress(e1.label), console.info("[AdpWorkforceNowCountryDebug] progress", JSON.stringify({
                        label: e1.label,
                        outcome: "prefill-committed"
                    }));
                    return;
                }
                let n = await (0, f.fillCountry)(t, this.currentRunCountry);
                console.info("[AdpWorkforceNowCountryDebug] progress", JSON.stringify({
                    label: e1.label,
                    hasCountry: !!this.currentRunCountry,
                    outcome: n ? "filled-after-prefill" : "not-committed"
                })), n ? (r1 = !0, this.progressTracker.updateFilledProgress(e1.label)) : this.progressTracker.updateMissedProgress(e1.label);
            });
        }
        return t.length > 0 && await this.taskQueue.run(), r1;
    }
    getRulesWithoutManualCountry(e1) {
        return e1.filter((e1)=>!h(e1));
    }
    async waitForEnabledAdpWorkforceNowVsidRaceRule(e1) {
        let t = Date.now() + 1500, r1 = 0, n = null, o = !e1;
        for(; Date.now() <= t;){
            if (r1 += 1, e1 && (o = (0, p.isAdpWorkforceNowVsidRaceRequiredAfterEthnicity)()), !o) {
                await (0, u.delay)(100);
                continue;
            }
            let t = await (0, p.getEnabledAdpWorkforceNowVsidRaceRule)();
            if (t && (n = t, t.options?.length)) return console.info("[AdpWorkforceNow][VSID Race] live rule ready", {
                attempts: r1,
                optionCount: t.options.length
            }), t;
            await (0, u.delay)(100);
        }
        return console.info("[AdpWorkforceNow][VSID Race] live rule wait ended", {
            attempts: r1,
            ethnicityTriggerObserved: o,
            raceControlEnabled: !!n,
            optionCount: n?.options?.length ?? 0
        }), n;
    }
    async fillDeferredAdpWorkforceNowVsidRace(e1, t, r1) {
        if (!e1.length && !t) return;
        console.info("[AdpWorkforceNow][VSID Race] defer dependent rule", {
            deferredRuleCount: e1.length,
            hasVsidRaceDependency: t,
            initialOptionCounts: e1.map((e1)=>e1.options?.length ?? 0)
        });
        let n = await this.waitForEnabledAdpWorkforceNowVsidRaceRule(t);
        if (!n) {
            console.info("[AdpWorkforceNow][VSID Race] not rendered after Ethnicity", {
                deferredRuleCount: e1.length
            });
            return;
        }
        if (this.progressTracker.updateFieldRequiredStatus(n), !n.options?.length) {
            console.warn("[AdpWorkforceNow][VSID Race] enabled control has no options", {
                optionCount: 0
            }), this.progressTracker.updateMissedProgress(n.label);
            return;
        }
        let o = await this.requestFormAnswers([
            n
        ], r1, {
            updateTimeTrace: !1
        });
        if (!o || "string" == typeof o) {
            console.warn("[AdpWorkforceNow][VSID Race] answer request did not return a fillable result", {
                hasErrorCode: "string" == typeof o
            }), this.progressTracker.updateMissedProgress(n.label);
            return;
        }
        this.answer.regular = {
            ...this.answer.regular,
            ...o.regular
        }, this.answer.fillDataList = [
            ...this.answer.fillDataList || [],
            ...o.fillDataList || []
        ];
        let i = this.operationConfig[n.type];
        if (!i) {
            console.warn("[AdpWorkforceNow][VSID Race] no select operation configured"), this.progressTracker.updateMissedProgress(n.label);
            return;
        }
        let a = await i(n, this.answer.regular);
        console.info("[AdpWorkforceNow][VSID Race] fill finished", {
            optionCount: n.options.length,
            filled: a
        });
    }
    logRegularAnswerSummary(e1) {
        let t = v(e1, this.answer?.regular ?? {});
        console.info("[AdpWorkforceNowDebug] answer-summary", JSON.stringify({
            totalFields: t.length,
            answeredFields: t.filter((e1)=>e1.present).length,
            fields: t
        }));
    }
    async resolveGooglePlacesAddress(e1) {
        let t = e1.find(b);
        if (!t) {
            console.info("[AdpWorkforceNowAddressDebug] resolve", JSON.stringify({
                outcome: "skipped-no-google-places-address-rule"
            }));
            return;
        }
        let r1 = (0, c.createAdpAddressSessionToken)();
        try {
            console.info("[AdpWorkforceNowAddressDebug] resolve", JSON.stringify({
                outcome: "suggestions-requested",
                label: t.label,
                sessionTokenLength: r1.length
            }));
            let n = await (0, c.resolveAdpWorkforceNowAddress)({
                answer: this.answer,
                sessionToken: r1,
                requestSuggestions: async (e1)=>{
                    let t = await (0, o.sendToBackground)({
                        name: "getAddressSuggestions",
                        body: e1
                    });
                    return console.info("[AdpWorkforceNowAddressDebug] resolve", JSON.stringify({
                        outcome: "suggestions-received",
                        resultCount: Array.isArray(t) ? t.length : 0
                    })), t;
                },
                resolveSuggestion: async (e1)=>{
                    console.info("[AdpWorkforceNowAddressDebug] resolve", JSON.stringify({
                        outcome: "place-resolve-requested",
                        placeIdLength: e1.placeId.length
                    }));
                    let t = await (0, o.sendToBackground)({
                        name: "resolveAddressSuggestion",
                        body: e1
                    });
                    return console.info("[AdpWorkforceNowAddressDebug] resolve", JSON.stringify({
                        outcome: "place-resolve-received",
                        resolved: !!t && "object" == typeof t && !0 === t.resolved
                    })), t;
                }
            });
            if (!n) {
                console.info("[AdpWorkforceNowAddressDebug] resolve", JSON.stringify({
                    outcome: "no-unique-resolved-address"
                }));
                return;
            }
            this.answer.regular = (0, c.applyResolvedAdpAddressToRegularAnswers)(this.answer.regular, e1.map((e1)=>e1.label), n), console.info("[AdpWorkforceNowAddressDebug] resolve", JSON.stringify({
                outcome: "resolved-address-applied",
                hasCity: !!n.city,
                hasState: !!n.state,
                hasPostalCode: !!n.postalCode
            }));
        } catch (e1) {
            console.warn("[AdpWorkforceNowAddressDebug] resolve", JSON.stringify({
                outcome: "request-failed",
                errorName: w(e1)
            }));
        }
    }
    logPhoneRules(e1) {
        let t = e1.filter((e1)=>(0, d.isAdpWorkforceNowPhoneNumberLabel)(e1.label) || (0, d.isAdpWorkforceNowPhoneCountryCodeLabel)(e1.label)).map((e1)=>({
                label: e1.label,
                type: e1.type,
                hasDescription: !!e1.description,
                optionCount: Array.isArray(e1.options) ? e1.options.length : 0
            }));
        console.info("[AdpWorkforceNowPhoneDebug] rules", JSON.stringify({
            phoneRules: t
        }));
    }
    logPhoneAnswerResult() {
        let e1 = this.answer?.regular || {}, t = [
            "Mobile Number",
            "Home Phone Number",
            (0, d.getAdpWorkforceNowPhoneCountryCodeLabel)("Mobile Number"),
            (0, d.getAdpWorkforceNowPhoneCountryCodeLabel)("Home Phone Number")
        ].filter((e1)=>!!e1), r1 = t.map((t)=>{
            let r1 = e1[t], n = Array.isArray(r1) ? String(r1.find((e1)=>String(e1 ?? "").trim()) ?? "").trim() : String(r1 ?? "").trim();
            return {
                label: t,
                present: !!n,
                valueLength: n.length,
                digitsLength: n.replace(/\D/g, "").length,
                prefixOnly: /^\+\d{1,4}$/.test(n)
            };
        });
        console.info("[AdpWorkforceNowPhoneDebug] answer", JSON.stringify({
            fields: r1
        }));
    }
    bindNextSnapshotHandler() {
        let e1 = document.getElementById("ja_sv_cw_next_footer_btn");
        if (!e1?.isConnected) return;
        let t = e1.innerText?.trim() ?? "";
        if ("Submit" === t) return;
        this.continueButtonHandler && e1.removeEventListener("click", this.continueButtonHandler);
        let r1 = (0, p.getFormSnapshot)();
        this.continueButtonHandler = (0, p.submitHandler).bind(null, r1), e1.addEventListener("click", this.continueButtonHandler);
    }
    constructor(...e1){
        super(...e1), this.formatAnswer = d.formatAnswer, this.continueButtonHandler = null, this.coverLetterCheckVersion = 0, this.coverLetterAdvanceObserverBound = !1, this.currentRunCountry = "", this.currentRunCountryCommitted = !1;
    }
}
var _c;
$RefreshReg$(_c, "S");

},{}]},["imGEQ","8nOyT"], "8nOyT", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QUFDO0lBQ1Q7SUFDQSxZQUFZLEdBQUcsRUFBQyxDQUFFO1FBQ2hCLEtBQUssSUFBSSxLQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsY0FBYyxJQUFJLENBQUMsd0JBQXdCLE1BQU0sSUFBSSxDQUNyRiwwQkFBMEIsR0FBRyxJQUFJLENBQUMsa0NBQWtDLENBQUMsR0FBRyxJQUFJLENBQzVFLG9CQUFvQixJQUFJLElBQUksQ0FBQyw2QkFBNkIsQ0FBQztJQUNoRTtBQUNGIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS0wY2M4Njg0Y2ZkY2RhZTM0LmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL2FkcC13b3JrZm9yY2Vub3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxcYWRwLXdvcmtmb3JjZW5vdy5qc1wiLFwiYnVuZGxlSWRcIjpcImQ3MGNjYzliMGM1ODBkYzZcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiA4Q3FvR1xyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvYWRwLXdvcmtmb3JjZW5vdy5qc1xuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIC4vYWRkcmVzcyAtPiAzdFBMWCAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9hZHAtd29ya2ZvcmNlbm93L2FkZHJlc3MuanNcclxuICogICAuL2Fuc3dlciAtPiAzY3FZcyAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9hZHAtd29ya2ZvcmNlbm93L2Fuc3dlci5qc1xyXG4gKiAgIC4vb3BlcmF0aW9ucyAtPiBsSVY0biAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9hZHAtd29ya2ZvcmNlbm93L29wZXJhdGlvbnMuanNcclxuICogICAuL3J1bGVzIC0+IDVmRkYxICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2FkcC13b3JrZm9yY2Vub3cvcnVsZXMuanNcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIEBwbGFzbW9ocS9tZXNzYWdpbmcgLT4gOTJHeUIgID0+ICBAcGxhc21vaHEvbWVzc2FnaW5nLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvZG9tIC0+IGhBNVFhICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvZG9tLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL2Jhc2UtZmlsbGVyIC0+IDh4ajZGICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2Jhc2UtZmlsbGVyLmpzXHJcbiAqICAgfmNvcmUvZW51bXMgLT4gMU8zbmMgID0+ICBzcmMvY29yZS9lbnVtcy5qc1xyXG4gKiAgIH5zdG9yZS9hdXRvZmlsbEluZm8gLT4gNzlWTlAgID0+ICBzcmMvc3RvcmUvYXV0b2ZpbGxJbmZvLmpzXHJcbiAqICAgfnV0aWxzL2RlbGF5IC0+IGFtNjE0ICA9PiAgc3JjL3V0aWxzL2RlbGF5LmpzXHJcbiAqL1xyXG5cclxudmFyIG4gPSBlKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtcclxubi5kZWZpbmVJbnRlcm9wRmxhZyhyKSwgbi5leHBvcnQociwgXCJBZHBXb3JrZm9yY2VOb3dcIiwgKCkgPT4gRSk7XHJcbnZhciBvID0gZShcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIiksXHJcbiAgaSA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9kb21cIiksXHJcbiAgYSA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvYmFzZS1maWxsZXJcIiksXHJcbiAgbCA9IGUoXCJ+Y29yZS9lbnVtc1wiKSxcclxuICBzID0gZShcIn5zdG9yZS9hdXRvZmlsbEluZm9cIiksXHJcbiAgdSA9IGUoXCJ+dXRpbHMvZGVsYXlcIiksXHJcbiAgYyA9IGUoXCIuL2FkZHJlc3NcIiksXHJcbiAgZCA9IGUoXCIuL2Fuc3dlclwiKSxcclxuICBmID0gZShcIi4vb3BlcmF0aW9uc1wiKSxcclxuICBwID0gZShcIi4vcnVsZXNcIik7XHJcblxyXG5mdW5jdGlvbiBtKGUpIHtcclxuICByZXR1cm4gU3RyaW5nKGUubGFiZWwgfHwgXCJcIikucmVwbGFjZSgvXFxzKlxcKlxccyokLywgXCJcIikucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpLnRvTG93ZXJDYXNlKClcclxufVxyXG5cclxuZnVuY3Rpb24gaChlKSB7XHJcbiAgcmV0dXJuIFwiY291bnRyeVwiID09PSBtKGUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGcoZSkge1xyXG4gIHJldHVybiAvKF58W1xccy9dKShzdGF0ZXxwcm92aW5jZXx0ZXJyaXRvcnkpKCR8W1xccy9dKS8udGVzdChtKGUpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBiKGUpIHtcclxuICBsZXQgdCA9IGUuJGlucHV0O1xyXG4gIHJldHVybiBcImFkZHJlc3MgbGluZSAxXCIgPT09IG0oZSkgJiYgdCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgdC5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICBcInBhYy10YXJnZXQtaW5wdXRcIilcclxufVxyXG5cclxuZnVuY3Rpb24geShlKSB7XHJcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZSkgPyBlLm1hcCh5KS5maW5kKEJvb2xlYW4pID8/IFwiXCIgOiBcInN0cmluZ1wiID09IHR5cGVvZiBlID8gZS50cmltKCkgOlxyXG4gICAgXCJudW1iZXJcIiA9PSB0eXBlb2YgZSA/IFN0cmluZyhlKSA6IFwiXCJcclxufVxyXG5cclxuZnVuY3Rpb24gdihlLCB0KSB7XHJcbiAgcmV0dXJuIGUubWFwKGUgPT4ge1xyXG4gICAgbGV0IHIgPSBtKGUpLFxyXG4gICAgICBuID0gT2JqZWN0LmVudHJpZXModCkuZmluZCgoW2VdKSA9PiBtKHtcclxuICAgICAgICBsYWJlbDogZVxyXG4gICAgICB9KSA9PT0gciksXHJcbiAgICAgIG8gPSB5KG4/LlsxXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsYWJlbDogZS5sYWJlbCxcclxuICAgICAgdHlwZTogZS50eXBlLFxyXG4gICAgICBwcmVzZW50OiAhIW8sXHJcbiAgICAgIHZhbHVlTGVuZ3RoOiBvLmxlbmd0aCxcclxuICAgICAgYW5zd2VyTGFiZWxNYXRjaDogbiA/IG5bMF0gPT09IGUubGFiZWwgPyBcImV4YWN0XCIgOiBcIm5vcm1hbGl6ZWRcIiA6IFwibWlzc2luZ1wiXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gdyhlKSB7XHJcbiAgcmV0dXJuIGUgaW5zdGFuY2VvZiBFcnJvciAmJiBlLm5hbWUgPyBlLm5hbWUgOiBcInVua25vd25cIlxyXG59XHJcblxyXG5mdW5jdGlvbiBTKGUpIHtcclxuICBsZXQgdCA9IGUuZmluZEluZGV4KGgpLFxyXG4gICAgciA9IGUuZmluZEluZGV4KGcpO1xyXG4gIGlmICh0IDwgMCB8fCByIDwgMCB8fCB0IDwgcikgcmV0dXJuIGU7XHJcbiAgbGV0IG4gPSBlLmZpbHRlcihoKSxcclxuICAgIG8gPSBlLmZpbHRlcihlID0+ICFoKGUpKSxcclxuICAgIGkgPSBvLmZpbmRJbmRleChnKTtcclxuICByZXR1cm4gWy4uLm8uc2xpY2UoMCwgaSksIC4uLm4sIC4uLm8uc2xpY2UoaSldXHJcbn1cclxuY2xhc3MgRSBleHRlbmRzIGEuQmFzZUZpbGxlciB7XHJcbiAgZ2V0RmllbGRIYW5kbGVycygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIFtsLkZJRUxEX1RZUEUuVEVYVF06IHtcclxuICAgICAgICBoYW5kbGVyOiAoZSwgdCkgPT4gKDAsIGQuaXNBZHBXb3JrZm9yY2VOb3dQaG9uZU51bWJlckxhYmVsKShlLmxhYmVsKSA/ICgwLCBmXHJcbiAgICAgICAgICAuZmlsbEFkcFdvcmtmb3JjZU5vd1Bob25lSW5wdXQpKGUuJGlucHV0LCB0LCBlLmxhYmVsKSA6ICgwLCBmXHJcbiAgICAgICAgICAuZmlsbEFkcFdvcmtmb3JjZU5vd1RleHRJbnB1dCkoZS4kaW5wdXQsIHQsIGUubGFiZWwpLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGV4cGVjdEFycmF5OiAhMVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgW2wuRklFTERfVFlQRS5OVU1CRVJdOiB7XHJcbiAgICAgICAgaGFuZGxlcjogKGUsIHQpID0+ICgwLCBmLmZpbGxBZHBXb3JrZm9yY2VOb3dUZXh0SW5wdXQpKGUuJGlucHV0LCBTdHJpbmcodCA/PyBcIlwiKSwgZVxyXG4gICAgICAgICAgLmxhYmVsKSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITFcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFtsLkZJRUxEX1RZUEUuQ0hFQ0tCT1hdOiB7XHJcbiAgICAgICAgaGFuZGxlcjogKGUsIHQpID0+ICgwLCBpLmZpbGxDaGVja0JveGVzRmllbGQpKGUsIHQpLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGV4cGVjdEFycmF5OiAhMFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgW2wuRklFTERfVFlQRS5TRUxFQ1RdOiB7XHJcbiAgICAgICAgaGFuZGxlcjogKGUsIHQpID0+ICgwLCBkLmlzQWRwV29ya2ZvcmNlTm93UGhvbmVDb3VudHJ5Q29kZUxhYmVsKShlLmxhYmVsKSA/ICgwLCBmXHJcbiAgICAgICAgICAuZmlsbEFkcFdvcmtmb3JjZU5vd1Bob25lQ291bnRyeUNvZGUpKGUuJGlucHV0LCB0LCBlLmxhYmVsKSA6ICgwLCBmXHJcbiAgICAgICAgICAuZmlsbEN1c3RvbVNlbGVjdEZpZWxkKShlPy4kaW5wdXQsIHQpLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGV4cGVjdEFycmF5OiAhMFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgW2wuRklFTERfVFlQRS5SQURJT0dST1VQXToge1xyXG4gICAgICAgIGhhbmRsZXI6IChlLCB0KSA9PiAoMCwgZi5maWxsUmFkaW9Hcm91cEZpZWxkKShlLCB0KSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgY2hlY2tDb3ZlckxldHRlcigpIHtcclxuICAgIHRoaXMuY292ZXJMZXR0ZXJBZHZhbmNlT2JzZXJ2ZXJCb3VuZCB8fCAoKDAsIGYuYmluZENvdmVyTGV0dGVyQWR2YW5jZVJlY2hlY2tPYnNlcnZlcikoKCkgPT5cclxuICAgICAgdm9pZCB0aGlzLmNoZWNrQ292ZXJMZXR0ZXIoKSksIHRoaXMuY292ZXJMZXR0ZXJBZHZhbmNlT2JzZXJ2ZXJCb3VuZCA9ICEwKTtcclxuICAgIGxldCBlID0gKyt0aGlzLmNvdmVyTGV0dGVyQ2hlY2tWZXJzaW9uLFxyXG4gICAgICB0ID0gITE7XHJcbiAgICBmb3IgKGxldCByID0gMDsgciA8IDQwOyByKyspIHtcclxuICAgICAgaWYgKGUgIT09IHRoaXMuY292ZXJMZXR0ZXJDaGVja1ZlcnNpb24pIHJldHVybjtcclxuICAgICAgbGV0IHIgPSAoMCwgZi5nZXRBZHBXb3JrZm9yY2VOb3dBZHZhbmNlQnV0dG9uKSgpO1xyXG4gICAgICBpZiAociAmJiAodCA9ICEwKSwgdCkge1xyXG4gICAgICAgIGxldCB0ID0gKDAsIGYuZ2V0Q292ZXJMZXR0ZXJGaWVsZFN0YXR1cykoKTtcclxuICAgICAgICBpZiAoXCJyZXF1aXJlZFwiID09PSB0KSB7XHJcbiAgICAgICAgICBlID09PSB0aGlzLmNvdmVyTGV0dGVyQ2hlY2tWZXJzaW9uICYmICgwLCBpLnBvc3RDb3ZlckxldHRlclN0YXR1cykodCk7XHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYXdhaXQgKDAsIHUuZGVsYXkpKHQgPyAyMDAgOiAyNTApXHJcbiAgICB9XHJcbiAgICBlID09PSB0aGlzLmNvdmVyTGV0dGVyQ2hlY2tWZXJzaW9uICYmICgwLCBpLnBvc3RDb3ZlckxldHRlclN0YXR1cykoXCJcIilcclxuICB9XHJcbiAgYXN5bmMgcnVuUHJlRmlsbEZvcm0oKSB7XHJcbiAgICBhd2FpdCAoMCwgZi5wcmVjbGlja0FkZEJ1dHRvbnMpKCk7XHJcbiAgICBsZXQgZSA9IGF3YWl0ICgwLCBzLnVzZUF1dG9maWxsSW5mb1N0b3JlKS5nZXRTdGF0ZSgpLmZldGNoQXV0b2ZpbGxJbmZvKCk7XHJcbiAgICB0aGlzLmN1cnJlbnRSdW5Db3VudHJ5ID0gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZT8ubG9jYXRpb24/LmNvdW50cnkgPyBlLmxvY2F0aW9uLmNvdW50cnkgOiBcIlwiLFxyXG4gICAgICB0aGlzLmN1cnJlbnRSdW5Db3VudHJ5Q29tbWl0dGVkID0gYXdhaXQgKDAsIGYucHJlZmlsbENvdW50cnkpKHRoaXMuY3VycmVudFJ1bkNvdW50cnkpLFxyXG4gICAgICBjb25zb2xlLmluZm8oXCJbQWRwV29ya2ZvcmNlTm93Q291bnRyeURlYnVnXSBwcmVmaWxsLXJlc3VsdFwiLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgaGFzQ291bnRyeTogISF0aGlzLmN1cnJlbnRSdW5Db3VudHJ5LFxyXG4gICAgICAgIGNvbW1pdHRlZDogdGhpcy5jdXJyZW50UnVuQ291bnRyeUNvbW1pdHRlZFxyXG4gICAgICB9KSksIGF3YWl0ICgwLCBmLnByZXNlbGVjdERlc2lyZWRTYWxhcnlDb250cm9scykoKVxyXG4gIH1cclxuICBhc3luYyBleHRyYWN0Rm9ybVJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIGF3YWl0ICgwLCBwLmdldFJ1bGVzKSgpXHJcbiAgfVxyXG4gIGdldFNpdGVOYW1lKCkge1xyXG4gICAgcmV0dXJuIFwiYWRwLXdvcmtmb3JjZW5vd1wiXHJcbiAgfVxyXG4gIGFzeW5jIGhhbmRsZVJlc3VtZVVwbG9hZCgpIHtcclxuICAgIGF3YWl0IHRoaXMudXBsb2FkQ3VycmVudEZpbGVTbG90cygpXHJcbiAgfVxyXG4gIGFzeW5jIGdldEF1dG9maWxsU25hcHNob3QoKSB7XHJcbiAgICByZXR1cm4gKDAsIHAuZ2V0Rm9ybVNuYXBzaG90KSgpXHJcbiAgfVxyXG4gIGFzeW5jIGdldFN1Ym1pdFNuYXBzaG90KCkge1xyXG4gICAgcmV0dXJuICgwLCBwLmdldEZvcm1TbmFwc2hvdCkoKVxyXG4gIH1cclxuICBnZXRTdWJtaXRCdXR0b25TZWxlY3RvcigpIHtcclxuICAgIHJldHVybiAnLi8vYnV0dG9uW0BpZD1cImphX3N2X2N3X25leHRfZm9vdGVyX2J0blwiIGFuZCBub3JtYWxpemUtc3BhY2UoLik9XCJTdWJtaXRcIl0gfCAuLy9idXR0b25bQHR5cGU9XCJzdWJtaXRcIiBvciBjb250YWlucyhAY2xhc3MsIFwic3VibWl0XCIpIG9yIGNvbnRhaW5zKG5vcm1hbGl6ZS1zcGFjZSguKSwgXCJTdWJtaXRcIildJ1xyXG4gIH1cclxuICBhc3luYyBleGVjdXRlU2l0ZVNwZWNpZmljU3RlcHMoZSkge1xyXG4gICAgdGhpcy5iaW5kTmV4dFNuYXBzaG90SGFuZGxlcigpLCBhd2FpdCBzdXBlci5leGVjdXRlU2l0ZVNwZWNpZmljU3RlcHMoZSlcclxuICB9XHJcbiAgYXN5bmMgZG9GaWxsRm9ybShlID0gITEpIHtcclxuICAgIGF3YWl0IHRoaXMuaW5pdGlhbGl6ZUZpbGxGb3JtKCk7XHJcbiAgICBsZXQgdCA9IFModGhpcy5wcmVwYXJlQ292ZXJMZXR0ZXJSdWxlcyhhd2FpdCB0aGlzLmV4dHJhY3RGb3JtUnVsZXMoKSkpLFxyXG4gICAgICB7XHJcbiAgICAgICAgcmVhZHlSdWxlczogcixcclxuICAgICAgICBkZWZlcnJlZFJhY2VSdWxlczogblxyXG4gICAgICB9ID0gKDAsIHAucGFydGl0aW9uQWRwV29ya2ZvcmNlTm93VnNpZFJhY2VSdWxlcykodCksXHJcbiAgICAgIG8gPSAoMCwgcC5oYXNBZHBXb3JrZm9yY2VOb3dWc2lkUmFjZURlcGVuZGVuY3kpKCksXHJcbiAgICAgIGkgPSB0aGlzLmdldFJ1bGVzV2l0aG91dE1hbnVhbENvdW50cnkocik7XHJcbiAgICBpZiAodGhpcy5sb2dQaG9uZVJ1bGVzKGkpLCB0aGlzLnByb2dyZXNzVHJhY2tlci5zZXRGaWVsZHNSZXF1aXJlZFN0YXR1cyhyKSwgdGhpcy50YXNrUXVldWVcclxuICAgICAgLmFkZChmLmZpbGxEaXNhYmlsaXR5U3RhdHVzSWZQcmVzZW50KSwgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKCksIGF3YWl0IHRoaXNcclxuICAgICAgLmhhbmRsZVJlc3VtZVVwbG9hZCgpLCBpLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHQgPSBhd2FpdCB0aGlzLmZldGNoRm9ybUFuc3dlcnMoaSwgZSk7XHJcbiAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiB0KSByZXR1cm4gdDtcclxuICAgICAgdGhpcy5sb2dQaG9uZUFuc3dlclJlc3VsdCgpLCB0aGlzLmxvZ1JlZ3VsYXJBbnN3ZXJTdW1tYXJ5KGkpXHJcbiAgICB9IGVsc2UgdGhpcy5hbnN3ZXIgPSAoMCwgZC5mb3JtYXRBbnN3ZXIpKHtcclxuICAgICAgcmVndWxhcjoge30sXHJcbiAgICAgIGVkdWNhdGlvbjogW10sXHJcbiAgICAgIHdvcmtFeHBlcmllbmNlOiBbXSxcclxuICAgICAgc2tpbGxzOiBbXVxyXG4gICAgfSk7XHJcbiAgICBsZXQgYSA9IGF3YWl0IHRoaXMuZmlsbENvdW50cnlGaWVsZHMociksXHJcbiAgICAgIGwgPSBhID8gdGhpcy5nZXRSdWxlc1dpdGhvdXRNYW51YWxDb3VudHJ5KCgwLCBwLnBhcnRpdGlvbkFkcFdvcmtmb3JjZU5vd1ZzaWRSYWNlUnVsZXMpKFMoXHJcbiAgICAgICAgdGhpcy5wcmVwYXJlQ292ZXJMZXR0ZXJSdWxlcyhhd2FpdCB0aGlzLmV4dHJhY3RGb3JtUnVsZXMoKSkpKS5yZWFkeVJ1bGVzKSA6IGksXHJcbiAgICAgIHMgPSBhID8gbCA6IGk7XHJcbiAgICByZXR1cm4gYSAmJiBjb25zb2xlLmluZm8oXCJbQWRwV29ya2ZvcmNlTm93RGVidWddIHJ1bGVzLXJlZnJlc2hlZC1hZnRlci1jb3VudHJ5XCIsIEpTT05cclxuICAgICAgICAuc3RyaW5naWZ5KHtcclxuICAgICAgICAgIG9yaWdpbmFsUnVsZUNvdW50OiBpLmxlbmd0aCxcclxuICAgICAgICAgIHJlZnJlc2hlZFJ1bGVDb3VudDogcy5sZW5ndGhcclxuICAgICAgICB9KSksIGF3YWl0IHRoaXMucmVzb2x2ZUdvb2dsZVBsYWNlc0FkZHJlc3MocyksIGF3YWl0IHRoaXMuZmlsbFJlZ3VsYXJGaWVsZHMocyksXHJcbiAgICAgIGF3YWl0IHRoaXMuZmlsbERlZmVycmVkQWRwV29ya2ZvcmNlTm93VnNpZFJhY2UobiwgbywgZSksIGF3YWl0IHRoaXNcclxuICAgICAgLmZpbGxDb3ZlckxldHRlckZpZWxkcygpLCBhd2FpdCB0aGlzLmV4ZWN1dGVTaXRlU3BlY2lmaWNTdGVwcyhyKSwgdGhpcy5maW5hbGl6ZUZpbGxGb3JtKClcclxuICB9XHJcbiAgc3VibWl0QXBwbGljYXRpb24oKSB7XHJcbiAgICBsZXQgZSA9ICgwLCBmLmdldEFkcFdvcmtmb3JjZU5vd0FkdmFuY2VCdXR0b24pKCk7XHJcbiAgICBpZiAoIWU/LmlzQ29ubmVjdGVkKSByZXR1cm47XHJcbiAgICBsZXQgdCA9IGUuaW5uZXJUZXh0Py50cmltKCkgPz8gXCJcIixcclxuICAgICAgciA9IGUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKT8udG9Mb3dlckNhc2UoKSA/PyBcIlwiO1xyXG4gICAgKFwiU3VibWl0XCIgPT09IHQgfHwgXCJzdWJtaXRcIiA9PT0gcikgJiYgZS5jbGljaygpXHJcbiAgfVxyXG4gIGFzeW5jIHVwbG9hZEN1cnJlbnRGaWxlU2xvdHMoKSB7XHJcbiAgICBsZXQgZSA9ICgwLCBmLmdldFJlc3VtZVVwbG9hZERvbSkoKTtcclxuICAgIGlmIChlLmNvbnRhaW5lciAmJiAodGhpcy5kaXNhYmxlVXBsb2FkUmVzdW1lID8gdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXHJcbiAgICAgICAgXCJSZXN1bWUvQ1ZcIikgOiB0aGlzLnRhc2tRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCBlID0gYXdhaXQgKDAsIGYudXBsb2FkUmVzdW1lKSh0aGlzLnJlc3VtZUluZm8sIHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgICAgICAudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cywgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MpO1xyXG4gICAgICAgIGUgfHwgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJSZXN1bWUvQ1ZcIilcclxuICAgICAgfSkpLCBcInJlcXVpcmVkXCIgPT09ICgwLCBmLmdldENvdmVyTGV0dGVyRmllbGRTdGF0dXMpKCkpIHtcclxuICAgICAgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cyh7XHJcbiAgICAgICAgbGFiZWw6IFwiQ292ZXIgTGV0dGVyXCIsXHJcbiAgICAgICAgcmVxdWlyZWQ6ICEwXHJcbiAgICAgIH0pO1xyXG4gICAgICBsZXQgZSA9IHRoaXMuZ2V0Q292ZXJMZXR0ZXJGaWxlUGF5bG9hZCgpO1xyXG4gICAgICBlID8gdGhpcy50YXNrUXVldWUuYWRkKGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgdCA9IGF3YWl0ICgwLCBmLnVwbG9hZENvdmVyTGV0dGVyKShlLCB0aGlzLnByb2dyZXNzVHJhY2tlclxyXG4gICAgICAgICAgLnVwZGF0ZUZpZWxkUmVxdWlyZWRTdGF0dXMsIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKTtcclxuICAgICAgICB0IHx8IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFwiQ292ZXIgTGV0dGVyXCIpXHJcbiAgICAgIH0pIDogdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJDb3ZlciBMZXR0ZXJcIilcclxuICAgIH1cclxuICAgIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpXHJcbiAgfVxyXG4gIGdldENvdmVyTGV0dGVyRmlsZVBheWxvYWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb3ZlckxldHRlcj8uY292ZXJMZXR0ZXJJZCAmJiB0aGlzLmNvdmVyTGV0dGVyLmNvdmVyTGV0dGVyTmFtZSA/IHtcclxuICAgICAgY292ZXJMZXR0ZXJJZDogdGhpcy5jb3ZlckxldHRlci5jb3ZlckxldHRlcklkLFxyXG4gICAgICBjb3ZlckxldHRlck5hbWU6IHRoaXMuY292ZXJMZXR0ZXIuY292ZXJMZXR0ZXJOYW1lLFxyXG4gICAgICBtYXJrZG93bjogdGhpcy5jb3ZlckxldHRlci5tYXJrZG93bixcclxuICAgICAgdXNlTGVnYWN5RG93bmxvYWQ6IHRoaXMuY292ZXJMZXR0ZXIudXNlTGVnYWN5RG93bmxvYWRcclxuICAgIH0gOiBudWxsXHJcbiAgfVxyXG4gIGFzeW5jIGZpbGxDb3VudHJ5RmllbGRzKGUpIHtcclxuICAgIGxldCB0ID0gZS5maWx0ZXIoZSA9PiB7XHJcbiAgICAgICAgbGV0IHQgPSBlLiRpbnB1dDtcclxuICAgICAgICByZXR1cm4gaChlKSAmJiB0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnRcclxuICAgICAgfSksXHJcbiAgICAgIHIgPSAhMTtcclxuICAgIGZvciAobGV0IGUgb2YgdCkge1xyXG4gICAgICBsZXQgdCA9IGUuJGlucHV0O1xyXG4gICAgICB0aGlzLnRhc2tRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRSdW5Db3VudHJ5Q29tbWl0dGVkKSB7XHJcbiAgICAgICAgICB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhlLmxhYmVsKSwgY29uc29sZS5pbmZvKFxyXG4gICAgICAgICAgICBcIltBZHBXb3JrZm9yY2VOb3dDb3VudHJ5RGVidWddIHByb2dyZXNzXCIsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICBsYWJlbDogZS5sYWJlbCxcclxuICAgICAgICAgICAgICBvdXRjb21lOiBcInByZWZpbGwtY29tbWl0dGVkXCJcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBuID0gYXdhaXQgKDAsIGYuZmlsbENvdW50cnkpKHQsIHRoaXMuY3VycmVudFJ1bkNvdW50cnkpO1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbyhcIltBZHBXb3JrZm9yY2VOb3dDb3VudHJ5RGVidWddIHByb2dyZXNzXCIsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgbGFiZWw6IGUubGFiZWwsXHJcbiAgICAgICAgICAgIGhhc0NvdW50cnk6ICEhdGhpcy5jdXJyZW50UnVuQ291bnRyeSxcclxuICAgICAgICAgICAgb3V0Y29tZTogbiA/IFwiZmlsbGVkLWFmdGVyLXByZWZpbGxcIiA6IFwibm90LWNvbW1pdHRlZFwiXHJcbiAgICAgICAgICB9KSksIG4gPyAociA9ICEwLCB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhlLmxhYmVsKSkgOiB0aGlzXHJcbiAgICAgICAgICAucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKGUubGFiZWwpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdC5sZW5ndGggPiAwICYmIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpLCByXHJcbiAgfVxyXG4gIGdldFJ1bGVzV2l0aG91dE1hbnVhbENvdW50cnkoZSkge1xyXG4gICAgcmV0dXJuIGUuZmlsdGVyKGUgPT4gIWgoZSkpXHJcbiAgfVxyXG4gIGFzeW5jIHdhaXRGb3JFbmFibGVkQWRwV29ya2ZvcmNlTm93VnNpZFJhY2VSdWxlKGUpIHtcclxuICAgIGxldCB0ID0gRGF0ZS5ub3coKSArIDE1MDAsXHJcbiAgICAgIHIgPSAwLFxyXG4gICAgICBuID0gbnVsbCxcclxuICAgICAgbyA9ICFlO1xyXG4gICAgZm9yICg7IERhdGUubm93KCkgPD0gdDspIHtcclxuICAgICAgaWYgKHIgKz0gMSwgZSAmJiAobyA9ICgwLCBwLmlzQWRwV29ya2ZvcmNlTm93VnNpZFJhY2VSZXF1aXJlZEFmdGVyRXRobmljaXR5KSgpKSwgIW8pIHtcclxuICAgICAgICBhd2FpdCAoMCwgdS5kZWxheSkoMTAwKTtcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICB9XHJcbiAgICAgIGxldCB0ID0gYXdhaXQgKDAsIHAuZ2V0RW5hYmxlZEFkcFdvcmtmb3JjZU5vd1ZzaWRSYWNlUnVsZSkoKTtcclxuICAgICAgaWYgKHQgJiYgKG4gPSB0LCB0Lm9wdGlvbnM/Lmxlbmd0aCkpIHJldHVybiBjb25zb2xlLmluZm8oXHJcbiAgICAgICAgXCJbQWRwV29ya2ZvcmNlTm93XVtWU0lEIFJhY2VdIGxpdmUgcnVsZSByZWFkeVwiLCB7XHJcbiAgICAgICAgICBhdHRlbXB0czogcixcclxuICAgICAgICAgIG9wdGlvbkNvdW50OiB0Lm9wdGlvbnMubGVuZ3RoXHJcbiAgICAgICAgfSksIHQ7XHJcbiAgICAgIGF3YWl0ICgwLCB1LmRlbGF5KSgxMDApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29uc29sZS5pbmZvKFwiW0FkcFdvcmtmb3JjZU5vd11bVlNJRCBSYWNlXSBsaXZlIHJ1bGUgd2FpdCBlbmRlZFwiLCB7XHJcbiAgICAgIGF0dGVtcHRzOiByLFxyXG4gICAgICBldGhuaWNpdHlUcmlnZ2VyT2JzZXJ2ZWQ6IG8sXHJcbiAgICAgIHJhY2VDb250cm9sRW5hYmxlZDogISFuLFxyXG4gICAgICBvcHRpb25Db3VudDogbj8ub3B0aW9ucz8ubGVuZ3RoID8/IDBcclxuICAgIH0pLCBuXHJcbiAgfVxyXG4gIGFzeW5jIGZpbGxEZWZlcnJlZEFkcFdvcmtmb3JjZU5vd1ZzaWRSYWNlKGUsIHQsIHIpIHtcclxuICAgIGlmICghZS5sZW5ndGggJiYgIXQpIHJldHVybjtcclxuICAgIGNvbnNvbGUuaW5mbyhcIltBZHBXb3JrZm9yY2VOb3ddW1ZTSUQgUmFjZV0gZGVmZXIgZGVwZW5kZW50IHJ1bGVcIiwge1xyXG4gICAgICBkZWZlcnJlZFJ1bGVDb3VudDogZS5sZW5ndGgsXHJcbiAgICAgIGhhc1ZzaWRSYWNlRGVwZW5kZW5jeTogdCxcclxuICAgICAgaW5pdGlhbE9wdGlvbkNvdW50czogZS5tYXAoZSA9PiBlLm9wdGlvbnM/Lmxlbmd0aCA/PyAwKVxyXG4gICAgfSk7XHJcbiAgICBsZXQgbiA9IGF3YWl0IHRoaXMud2FpdEZvckVuYWJsZWRBZHBXb3JrZm9yY2VOb3dWc2lkUmFjZVJ1bGUodCk7XHJcbiAgICBpZiAoIW4pIHtcclxuICAgICAgY29uc29sZS5pbmZvKFwiW0FkcFdvcmtmb3JjZU5vd11bVlNJRCBSYWNlXSBub3QgcmVuZGVyZWQgYWZ0ZXIgRXRobmljaXR5XCIsIHtcclxuICAgICAgICBkZWZlcnJlZFJ1bGVDb3VudDogZS5sZW5ndGhcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpZWxkUmVxdWlyZWRTdGF0dXMobiksICFuLm9wdGlvbnM/Lmxlbmd0aCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCJbQWRwV29ya2ZvcmNlTm93XVtWU0lEIFJhY2VdIGVuYWJsZWQgY29udHJvbCBoYXMgbm8gb3B0aW9uc1wiLCB7XHJcbiAgICAgICAgb3B0aW9uQ291bnQ6IDBcclxuICAgICAgfSksIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKG4ubGFiZWwpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGxldCBvID0gYXdhaXQgdGhpcy5yZXF1ZXN0Rm9ybUFuc3dlcnMoW25dLCByLCB7XHJcbiAgICAgIHVwZGF0ZVRpbWVUcmFjZTogITFcclxuICAgIH0pO1xyXG4gICAgaWYgKCFvIHx8IFwic3RyaW5nXCIgPT0gdHlwZW9mIG8pIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiW0FkcFdvcmtmb3JjZU5vd11bVlNJRCBSYWNlXSBhbnN3ZXIgcmVxdWVzdCBkaWQgbm90IHJldHVybiBhIGZpbGxhYmxlIHJlc3VsdFwiLCB7XHJcbiAgICAgICAgICBoYXNFcnJvckNvZGU6IFwic3RyaW5nXCIgPT0gdHlwZW9mIG9cclxuICAgICAgICB9KSwgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3Mobi5sYWJlbCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5hbnN3ZXIucmVndWxhciA9IHtcclxuICAgICAgLi4udGhpcy5hbnN3ZXIucmVndWxhcixcclxuICAgICAgLi4uby5yZWd1bGFyXHJcbiAgICB9LCB0aGlzLmFuc3dlci5maWxsRGF0YUxpc3QgPSBbLi4udGhpcy5hbnN3ZXIuZmlsbERhdGFMaXN0IHx8IFtdLCAuLi5vLmZpbGxEYXRhTGlzdCB8fCBbXV07XHJcbiAgICBsZXQgaSA9IHRoaXMub3BlcmF0aW9uQ29uZmlnW24udHlwZV07XHJcbiAgICBpZiAoIWkpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiW0FkcFdvcmtmb3JjZU5vd11bVlNJRCBSYWNlXSBubyBzZWxlY3Qgb3BlcmF0aW9uIGNvbmZpZ3VyZWRcIiksIHRoaXNcclxuICAgICAgICAucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKG4ubGFiZWwpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGxldCBhID0gYXdhaXQgaShuLCB0aGlzLmFuc3dlci5yZWd1bGFyKTtcclxuICAgIGNvbnNvbGUuaW5mbyhcIltBZHBXb3JrZm9yY2VOb3ddW1ZTSUQgUmFjZV0gZmlsbCBmaW5pc2hlZFwiLCB7XHJcbiAgICAgIG9wdGlvbkNvdW50OiBuLm9wdGlvbnMubGVuZ3RoLFxyXG4gICAgICBmaWxsZWQ6IGFcclxuICAgIH0pXHJcbiAgfVxyXG4gIGxvZ1JlZ3VsYXJBbnN3ZXJTdW1tYXJ5KGUpIHtcclxuICAgIGxldCB0ID0gdihlLCB0aGlzLmFuc3dlcj8ucmVndWxhciA/PyB7fSk7XHJcbiAgICBjb25zb2xlLmluZm8oXCJbQWRwV29ya2ZvcmNlTm93RGVidWddIGFuc3dlci1zdW1tYXJ5XCIsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgdG90YWxGaWVsZHM6IHQubGVuZ3RoLFxyXG4gICAgICBhbnN3ZXJlZEZpZWxkczogdC5maWx0ZXIoZSA9PiBlLnByZXNlbnQpLmxlbmd0aCxcclxuICAgICAgZmllbGRzOiB0XHJcbiAgICB9KSlcclxuICB9XHJcbiAgYXN5bmMgcmVzb2x2ZUdvb2dsZVBsYWNlc0FkZHJlc3MoZSkge1xyXG4gICAgbGV0IHQgPSBlLmZpbmQoYik7XHJcbiAgICBpZiAoIXQpIHtcclxuICAgICAgY29uc29sZS5pbmZvKFwiW0FkcFdvcmtmb3JjZU5vd0FkZHJlc3NEZWJ1Z10gcmVzb2x2ZVwiLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgb3V0Y29tZTogXCJza2lwcGVkLW5vLWdvb2dsZS1wbGFjZXMtYWRkcmVzcy1ydWxlXCJcclxuICAgICAgfSkpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGxldCByID0gKDAsIGMuY3JlYXRlQWRwQWRkcmVzc1Nlc3Npb25Ub2tlbikoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnNvbGUuaW5mbyhcIltBZHBXb3JrZm9yY2VOb3dBZGRyZXNzRGVidWddIHJlc29sdmVcIiwgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIG91dGNvbWU6IFwic3VnZ2VzdGlvbnMtcmVxdWVzdGVkXCIsXHJcbiAgICAgICAgbGFiZWw6IHQubGFiZWwsXHJcbiAgICAgICAgc2Vzc2lvblRva2VuTGVuZ3RoOiByLmxlbmd0aFxyXG4gICAgICB9KSk7XHJcbiAgICAgIGxldCBuID0gYXdhaXQgKDAsIGMucmVzb2x2ZUFkcFdvcmtmb3JjZU5vd0FkZHJlc3MpKHtcclxuICAgICAgICBhbnN3ZXI6IHRoaXMuYW5zd2VyLFxyXG4gICAgICAgIHNlc3Npb25Ub2tlbjogcixcclxuICAgICAgICByZXF1ZXN0U3VnZ2VzdGlvbnM6IGFzeW5jIGUgPT4ge1xyXG4gICAgICAgICAgbGV0IHQgPSBhd2FpdCAoMCwgby5zZW5kVG9CYWNrZ3JvdW5kKSh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiZ2V0QWRkcmVzc1N1Z2dlc3Rpb25zXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IGVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIGNvbnNvbGUuaW5mbyhcIltBZHBXb3JrZm9yY2VOb3dBZGRyZXNzRGVidWddIHJlc29sdmVcIiwgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBvdXRjb21lOiBcInN1Z2dlc3Rpb25zLXJlY2VpdmVkXCIsXHJcbiAgICAgICAgICAgIHJlc3VsdENvdW50OiBBcnJheS5pc0FycmF5KHQpID8gdC5sZW5ndGggOiAwXHJcbiAgICAgICAgICB9KSksIHRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc29sdmVTdWdnZXN0aW9uOiBhc3luYyBlID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIltBZHBXb3JrZm9yY2VOb3dBZGRyZXNzRGVidWddIHJlc29sdmVcIiwgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBvdXRjb21lOiBcInBsYWNlLXJlc29sdmUtcmVxdWVzdGVkXCIsXHJcbiAgICAgICAgICAgIHBsYWNlSWRMZW5ndGg6IGUucGxhY2VJZC5sZW5ndGhcclxuICAgICAgICAgIH0pKTtcclxuICAgICAgICAgIGxldCB0ID0gYXdhaXQgKDAsIG8uc2VuZFRvQmFja2dyb3VuZCkoe1xyXG4gICAgICAgICAgICBuYW1lOiBcInJlc29sdmVBZGRyZXNzU3VnZ2VzdGlvblwiLFxyXG4gICAgICAgICAgICBib2R5OiBlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiBjb25zb2xlLmluZm8oXCJbQWRwV29ya2ZvcmNlTm93QWRkcmVzc0RlYnVnXSByZXNvbHZlXCIsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgb3V0Y29tZTogXCJwbGFjZS1yZXNvbHZlLXJlY2VpdmVkXCIsXHJcbiAgICAgICAgICAgIHJlc29sdmVkOiAhIXQgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgdCAmJiAhMCA9PT0gdC5yZXNvbHZlZFxyXG4gICAgICAgICAgfSkpLCB0XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKCFuKSB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKFwiW0FkcFdvcmtmb3JjZU5vd0FkZHJlc3NEZWJ1Z10gcmVzb2x2ZVwiLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBvdXRjb21lOiBcIm5vLXVuaXF1ZS1yZXNvbHZlZC1hZGRyZXNzXCJcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hbnN3ZXIucmVndWxhciA9ICgwLCBjLmFwcGx5UmVzb2x2ZWRBZHBBZGRyZXNzVG9SZWd1bGFyQW5zd2VycykodGhpcy5hbnN3ZXIucmVndWxhcixcclxuICAgICAgICBlLm1hcChlID0+IGUubGFiZWwpLCBuKSwgY29uc29sZS5pbmZvKFwiW0FkcFdvcmtmb3JjZU5vd0FkZHJlc3NEZWJ1Z10gcmVzb2x2ZVwiLCBKU09OXHJcbiAgICAgICAgLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBvdXRjb21lOiBcInJlc29sdmVkLWFkZHJlc3MtYXBwbGllZFwiLFxyXG4gICAgICAgICAgaGFzQ2l0eTogISFuLmNpdHksXHJcbiAgICAgICAgICBoYXNTdGF0ZTogISFuLnN0YXRlLFxyXG4gICAgICAgICAgaGFzUG9zdGFsQ29kZTogISFuLnBvc3RhbENvZGVcclxuICAgICAgICB9KSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiW0FkcFdvcmtmb3JjZU5vd0FkZHJlc3NEZWJ1Z10gcmVzb2x2ZVwiLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgb3V0Y29tZTogXCJyZXF1ZXN0LWZhaWxlZFwiLFxyXG4gICAgICAgIGVycm9yTmFtZTogdyhlKVxyXG4gICAgICB9KSlcclxuICAgIH1cclxuICB9XHJcbiAgbG9nUGhvbmVSdWxlcyhlKSB7XHJcbiAgICBsZXQgdCA9IGUuZmlsdGVyKGUgPT4gKDAsIGQuaXNBZHBXb3JrZm9yY2VOb3dQaG9uZU51bWJlckxhYmVsKShlLmxhYmVsKSB8fCAoMCwgZFxyXG4gICAgICAuaXNBZHBXb3JrZm9yY2VOb3dQaG9uZUNvdW50cnlDb2RlTGFiZWwpKGUubGFiZWwpKS5tYXAoZSA9PiAoe1xyXG4gICAgICBsYWJlbDogZS5sYWJlbCxcclxuICAgICAgdHlwZTogZS50eXBlLFxyXG4gICAgICBoYXNEZXNjcmlwdGlvbjogISFlLmRlc2NyaXB0aW9uLFxyXG4gICAgICBvcHRpb25Db3VudDogQXJyYXkuaXNBcnJheShlLm9wdGlvbnMpID8gZS5vcHRpb25zLmxlbmd0aCA6IDBcclxuICAgIH0pKTtcclxuICAgIGNvbnNvbGUuaW5mbyhcIltBZHBXb3JrZm9yY2VOb3dQaG9uZURlYnVnXSBydWxlc1wiLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIHBob25lUnVsZXM6IHRcclxuICAgIH0pKVxyXG4gIH1cclxuICBsb2dQaG9uZUFuc3dlclJlc3VsdCgpIHtcclxuICAgIGxldCBlID0gdGhpcy5hbnN3ZXI/LnJlZ3VsYXIgfHwge30sXHJcbiAgICAgIHQgPSBbXCJNb2JpbGUgTnVtYmVyXCIsIFwiSG9tZSBQaG9uZSBOdW1iZXJcIiwgKDAsIGQuZ2V0QWRwV29ya2ZvcmNlTm93UGhvbmVDb3VudHJ5Q29kZUxhYmVsKShcclxuICAgICAgICBcIk1vYmlsZSBOdW1iZXJcIiksICgwLCBkLmdldEFkcFdvcmtmb3JjZU5vd1Bob25lQ291bnRyeUNvZGVMYWJlbCkoXCJIb21lIFBob25lIE51bWJlclwiKV1cclxuICAgICAgLmZpbHRlcihlID0+ICEhZSksXHJcbiAgICAgIHIgPSB0Lm1hcCh0ID0+IHtcclxuICAgICAgICBsZXQgciA9IGVbdF0sXHJcbiAgICAgICAgICBuID0gQXJyYXkuaXNBcnJheShyKSA/IFN0cmluZyhyLmZpbmQoZSA9PiBTdHJpbmcoZSA/PyBcIlwiKS50cmltKCkpID8/IFwiXCIpLnRyaW0oKSA6XHJcbiAgICAgICAgICBTdHJpbmcociA/PyBcIlwiKS50cmltKCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGxhYmVsOiB0LFxyXG4gICAgICAgICAgcHJlc2VudDogISFuLFxyXG4gICAgICAgICAgdmFsdWVMZW5ndGg6IG4ubGVuZ3RoLFxyXG4gICAgICAgICAgZGlnaXRzTGVuZ3RoOiBuLnJlcGxhY2UoL1xcRC9nLCBcIlwiKS5sZW5ndGgsXHJcbiAgICAgICAgICBwcmVmaXhPbmx5OiAvXlxcK1xcZHsxLDR9JC8udGVzdChuKVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICBjb25zb2xlLmluZm8oXCJbQWRwV29ya2ZvcmNlTm93UGhvbmVEZWJ1Z10gYW5zd2VyXCIsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgZmllbGRzOiByXHJcbiAgICB9KSlcclxuICB9XHJcbiAgYmluZE5leHRTbmFwc2hvdEhhbmRsZXIoKSB7XHJcbiAgICBsZXQgZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiamFfc3ZfY3dfbmV4dF9mb290ZXJfYnRuXCIpO1xyXG4gICAgaWYgKCFlPy5pc0Nvbm5lY3RlZCkgcmV0dXJuO1xyXG4gICAgbGV0IHQgPSBlLmlubmVyVGV4dD8udHJpbSgpID8/IFwiXCI7XHJcbiAgICBpZiAoXCJTdWJtaXRcIiA9PT0gdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5jb250aW51ZUJ1dHRvbkhhbmRsZXIgJiYgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jb250aW51ZUJ1dHRvbkhhbmRsZXIpO1xyXG4gICAgbGV0IHIgPSAoMCwgcC5nZXRGb3JtU25hcHNob3QpKCk7XHJcbiAgICB0aGlzLmNvbnRpbnVlQnV0dG9uSGFuZGxlciA9ICgwLCBwLnN1Ym1pdEhhbmRsZXIpLmJpbmQobnVsbCwgciksIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsXHJcbiAgICAgIHRoaXMuY29udGludWVCdXR0b25IYW5kbGVyKVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvciguLi5lKSB7XHJcbiAgICBzdXBlciguLi5lKSwgdGhpcy5mb3JtYXRBbnN3ZXIgPSBkLmZvcm1hdEFuc3dlciwgdGhpcy5jb250aW51ZUJ1dHRvbkhhbmRsZXIgPSBudWxsLCB0aGlzXHJcbiAgICAgIC5jb3ZlckxldHRlckNoZWNrVmVyc2lvbiA9IDAsIHRoaXMuY292ZXJMZXR0ZXJBZHZhbmNlT2JzZXJ2ZXJCb3VuZCA9ICExLCB0aGlzXHJcbiAgICAgIC5jdXJyZW50UnVuQ291bnRyeSA9IFwiXCIsIHRoaXMuY3VycmVudFJ1bkNvdW50cnlDb21taXR0ZWQgPSAhMVxyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImFkcC13b3JrZm9yY2Vub3cuMGM1ODBkYzYuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);