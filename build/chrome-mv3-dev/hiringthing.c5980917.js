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
})({"ksTB0":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\hiringthing.js",
    "bundleId": "6114c478c5980917",
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
var j = z(require("cb40426cfe79f804"));
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

},{"cb40426cfe79f804":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"5J40G":[function(require,module,exports) {
/**
 * Parcel module id: 4guEq
 * Resolved path: src/contents/sites/hiringthing.js
 * Dependencies:
 *   ./answer -> 2wcwR  =>  src/contents/sites/hiringthing/answer.js
 *   ./operations -> kozjd  =>  src/contents/sites/hiringthing/operations.js
 *   ./rules -> fUNlN  =>  src/contents/sites/hiringthing/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~store/autofillInfo -> 79VNP  =>  src/store/autofillInfo.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "HiringThing", ()=>m), n.export(r, "formatHiringThingEmploymentRecord", ()=>g);
var o = e("~contents/methods/answer"), i = e("~contents/methods/dom"), a = e("~contents/sites/base-filler"), l = e("~core/dom"), s = e("~core/enums"), u = e("~store/autofillInfo"), c = e("./answer"), d = e("./operations"), f = e("./rules");
function p(e1) {
    let t = e1?.name || e1?.id || "";
    return /\.(?:st_date|end_date)$/.test(t);
}
class m extends a.BaseFiller {
    getFieldHandlers() {
        return {
            [s.FIELD_TYPE.TEXT]: (e1, t)=>{
                let r1 = Array.isArray(t) ? t[0] : t;
                return e1.$input?.getAttribute("role") === "combobox" ? (0, d.fillReactSelectField)(e1, [
                    String(r1 ?? "")
                ]) : e1.$input?.id === "user.phone" ? (0, d.fillPhoneField)(e1.$input, String(r1 ?? "")) : p(e1.$input) ? (0, d.fillDateTextField)(e1.$input, String(r1 ?? "")) : (0, d.fillInputTextField)(e1.$input, String(r1 ?? ""));
            },
            [s.FIELD_TYPE.RADIOGROUP]: (e1, t)=>(0, d.fillRadioGroupField)(e1, t),
            [s.FIELD_TYPE.SEARCH]: (e1, t)=>(0, d.fillReactSelectField)(e1, t),
            [s.FIELD_TYPE.SELECT]: (e1, t)=>"Country Phone Code" === e1.label ? (0, d.fillHiringThingPhoneCountryCodeField)(e1, t) : (0, d.fillNativeSelectField)(e1, t),
            [s.FIELD_TYPE.CHECKBOX]: (e1, t)=>(0, d.fillCheckboxField)(e1, t)
        };
    }
    async runPreFillForm() {
        this.autofillCountry = "", this.autofillPhoneCountryCode = "";
        let e1 = await (0, u.useAutofillInfoStore).getState().fetchAutofillInfo();
        this.autofillCountry = e1?.location?.country, this.autofillPhoneCountryCode = e1?.phoneCountryCode, this.taskQueue.add(d.preFillForm), await this.taskQueue.run();
    }
    async preFillCountryAndRefreshStateRules(e1) {
        this.skippedDependentStateRules = [];
        let t = String(this.autofillCountry || "").trim(), r1 = e1.filter(d.isHiringThingCountryRule);
        if (!t || 0 === r1.length) return e1;
        let n = e1.filter(d.isHiringThingStateProvinceRule), o = (0, d.getHiringThingCountrySelectionValue)();
        for (let e1 of r1)this.taskQueue.add(()=>(0, d.fillReactSelectField)(e1, [
                t
            ]));
        await this.taskQueue.run();
        let i = o !== (0, d.getHiringThingCountrySelectionValue)();
        if (!i || 0 === n.length) return e1;
        let a = await (0, d.waitForHiringThingStateOptions)(n.flatMap((e1)=>e1.options || []));
        if (!a) return this.skippedDependentStateRules = n, e1.filter((e1)=>!(0, d.isHiringThingStateProvinceRule)(e1));
        let l = (0, f.extractRules)(), s = l.filter(d.isHiringThingStateProvinceRule);
        return console.info("[HiringThing][State] dependent-region-rules-refreshed", {
            optionCount: s.flatMap((e1)=>e1.options || []).length
        }), l;
    }
    async preFillPhoneCountryCode(e1) {
        let t = String(this.autofillPhoneCountryCode ?? "").trim(), r1 = e1.filter((e1)=>e1.type === s.FIELD_TYPE.SELECT && "Country Phone Code" === e1.label);
        if (!t || 0 === r1.length) return;
        let n = 0;
        for (let e1 of r1)this.taskQueue.add(async ()=>{
            await (0, d.fillHiringThingPhoneCountryCodeField)(e1, t) && (n += 1);
        });
        await this.taskQueue.run(), console.info("[HiringThing][PhoneCountry] prefill", {
            ruleCount: r1.length,
            committedCount: n
        });
    }
    async doFillForm(e1 = !1) {
        await this.initializeFillForm();
        let t = await this.extractFormRules();
        for (let e1 of (await this.preFillPhoneCountryCode(t), t = await this.preFillCountryAndRefreshStateRules(t), t = this.prepareCoverLetterRules(t), this.progressTracker.setFieldsRequiredStatus([
            ...t,
            ...this.skippedDependentStateRules
        ]), this.skippedDependentStateRules))this.progressTracker.updateMissedProgress(e1.label);
        let r1 = await this.fetchFormAnswers(t, e1);
        if ("string" == typeof r1) return r1;
        await this.handleResumeUpload(), await this.fillRegularFields(t), await this.fillEducationAndEmployment(t), await this.fillCoverLetterFields();
        let n = await this.runComboQuestionAutofillIfNeeded(t, e1);
        return "string" == typeof n ? n : (t = n, await this.executeSiteSpecificSteps(t), await this.finalizeFillForm());
    }
    async extractFormRules() {
        return (0, f.extractRules)();
    }
    getSiteName() {
        return "hiringthing";
    }
    formatAnswer(e1) {
        return (0, c.formatHiringThingAnswer)(e1, this.autofillCountry, this.autofillPhoneCountryCode);
    }
    async fillRegularFields(e1) {
        let t = e1.filter(d.isHiringThingCountryRule);
        if (0 === t.length) {
            await super.fillRegularFields(e1);
            return;
        }
        let r1 = e1.filter(d.isHiringThingStateProvinceRule), n = (0, d.getHiringThingCountrySelectionValue)();
        for (let e1 of (0, o.getRegularOperations)(t, this.answer.regular, this.operationConfig))this.taskQueue.add(e1);
        await this.taskQueue.run();
        let i = n !== (0, d.getHiringThingCountrySelectionValue)(), a = e1.filter((e1)=>!(0, d.isHiringThingCountryRule)(e1));
        if (i && r1.length > 0) {
            let e1 = await (0, d.waitForHiringThingStateOptions)(r1.flatMap((e1)=>e1.options || []));
            if (e1) a = (0, f.extractRules)().filter((e1)=>!(0, d.isHiringThingCountryRule)(e1));
            else for (let e1 of (a = a.filter((e1)=>!(0, d.isHiringThingStateProvinceRule)(e1)), r1))this.progressTracker.updateMissedProgress(e1.label);
        }
        for (let e1 of (0, o.getRegularOperations)(a, this.answer.regular, this.operationConfig))this.taskQueue.add(e1);
        await this.taskQueue.run();
    }
    async checkCoverLetter() {
        (0, i.postCoverLetterStatus)((0, d.getHiringThingCoverLetterStatus)());
    }
    async handleResumeUpload() {
        if (this.disableUploadResume) {
            this.progressTracker.updateMissedProgress("Resume/CV");
            return;
        }
        this.taskQueue.add(async ()=>{
            await (0, d.uploadResume)(this.resumeInfo, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
        }), await this.taskQueue.run();
    }
    async fillEducationAndEmployment(e1) {
        if (e1.some((e1)=>e1.type === s.FIELD_TYPE.EDUCATION) && this.answer?.education?.length > 0) {
            await (0, d.ensureHiringThingStructuredRows)("education", this.answer.education.length);
            let e1 = (0, f.extractRules)().filter((e1)=>e1.type === s.FIELD_TYPE.EDUCATION);
            for (let t of ((0, l.setSectionResultFocusRules)("education", e1), (0, o.getEducationOperations)(e1, this.answer.education.map(b), this.operationConfig, void 0, {
                onSectionResultChanged: this.progressTracker.updateSectionResult,
                onCompleted: ()=>this.progressTracker.updateFilledProgress("Education"),
                onSkipped: ()=>this.progressTracker.updateMissedProgress("Education")
            })))this.taskQueue.add(t);
            await this.taskQueue.run();
        }
        if (e1.some((e1)=>e1.type === s.FIELD_TYPE.EMPLOYMENT) && this.answer?.workExperience?.length > 0) {
            await (0, d.ensureHiringThingStructuredRows)("employment", this.answer.workExperience.length);
            let e1 = (0, f.extractRules)().filter((e1)=>e1.type === s.FIELD_TYPE.EMPLOYMENT);
            for (let t of ((0, l.setSectionResultFocusRules)("employment", e1), (0, o.getEmploymentOperations)(e1, this.answer.workExperience.map(g), this.operationConfig, void 0, {
                onSectionResultChanged: this.progressTracker.updateSectionResult,
                onCompleted: ()=>this.progressTracker.updateFilledProgress("Employment"),
                onSkipped: ()=>this.progressTracker.updateMissedProgress("Employment")
            })))this.taskQueue.add(t);
            await this.taskQueue.run();
        }
    }
    async executeSiteSpecificSteps(e1) {
        let t = (0, d.getHiringThingCoverLetterStatus)();
        t && this.progressTracker.updateFieldRequiredStatus({
            label: "Cover Letter",
            required: !1
        });
        let r1 = this.coverLetter;
        r1?.coverLetterId && (this.taskQueue.add(async ()=>{
            let e1 = await (0, d.uploadCoverLetter)({
                coverLetterId: r1.coverLetterId,
                coverLetterName: (0, f.getHiringThingCoverLetterName)(r1.coverLetterName),
                markdown: r1.markdown,
                useLegacyDownload: r1.useLegacyDownload
            }, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
            e1 || this.progressTracker.updateMissedProgress("Cover Letter");
        }), await this.taskQueue.run()), await this.bindSubmitButtonTracking(e1);
    }
    getSubmitButtonSelector() {
        return '//button[@type="submit" and contains(normalize-space(.), "Submit Application")]';
    }
    async getAutofillSnapshot(e1) {
        return (0, f.getFormSnapshot)(e1);
    }
    async getSubmitSnapshot() {
        return (0, f.getFormSnapshot)();
    }
    submitApplication() {
        let e1 = document.querySelector('button[type="submit"].submit-app-button, button[type="submit"]');
        e1?.click();
    }
    constructor(...e1){
        super(...e1), this.autofillCountry = "", this.autofillPhoneCountryCode = "", this.skippedDependentStateRules = [];
    }
}
function h(e1, t) {
    for (let r1 of t){
        let t = r1.split(".").reduce((e1, t)=>e1?.[t], e1);
        if (null != t && "" !== t) return t;
    }
    return "";
}
function g(e1) {
    let t = h(e1, [
        "Dates of Employment Start",
        "Start",
        "startDate",
        "start_date",
        "dates.startDate",
        "dates.start_date",
        "dates.start"
    ]), r1 = h(e1, [
        "Dates of Employment End",
        "End",
        "endDate",
        "end_date",
        "dates.endDate",
        "dates.end_date",
        "dates.end",
        "dates.completionDate",
        "dates.completion_date"
    ]);
    return console.info("[HiringThing][Employment] normalized date record", {
        hasStartDate: !!t,
        hasEndDate: !!r1
    }), {
        ...e1,
        "Company Name": h(e1, [
            "Company Name",
            "companyName",
            "company",
            "employer",
            "organization",
            "name"
        ]),
        "Your Position": h(e1, [
            "Your Position",
            "position",
            "title",
            "jobTitle",
            "role"
        ]),
        Duties: h(e1, [
            "Duties",
            "duties",
            "description",
            "summary",
            "responsibilities"
        ]),
        "Reason for Leaving": h(e1, [
            "Reason for Leaving",
            "reasonForLeaving",
            "leavingReason",
            "reason"
        ]),
        "Dates of Employment Start": (0, f.formatHiringThingDate)(t),
        "Dates of Employment End": (0, f.formatHiringThingDate)(r1)
    };
}
function b(e1) {
    let t = h(e1, [
        "completionDate",
        "dates.completionDate",
        "endDate",
        "dates.endDate"
    ]);
    return {
        ...e1,
        "Institution Name": h(e1, [
            "Institution Name",
            "institution",
            "school",
            "schoolName",
            "organization",
            "name"
        ]),
        "Degree/Subject": h(e1, [
            "Degree/Subject",
            "degree",
            "major",
            "discipline",
            "field",
            "fieldOfStudy"
        ]),
        "Degree obtained?": h(e1, [
            "Degree obtained?",
            "degreeObtained",
            "completed",
            "isCompleted"
        ]) || (t ? "Yes" : "")
    };
}

},{}]},["ksTB0","5J40G"], "5J40G", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QUM7UUFDaEIsWUFBWSxDQUFDLENBQUM7SUFDaEIsSUFBSTtRQUNGLEdBQUcsRUFBQztRQUNKLGdCQUFnQixFQUFFLElBQUc7WUFBQztZQUFnQjtZQUFlO1lBQVc7WUFBWTtZQUMxRTtTQUNEO1FBQ0QsaUJBQWlCLEVBQUUsSUFBRztZQUFDO1lBQWlCO1lBQVk7WUFBUztZQUFZO1NBQU87UUFDaEYsUUFBUSxFQUFFLElBQUc7WUFBQztZQUFVO1lBQVU7WUFBZTtZQUFXO1NBQW1CO1FBQy9FLHNCQUFzQixFQUFFLElBQUc7WUFBQztZQUFzQjtZQUFvQjtZQUNwRTtTQUNEO1FBQ0QsNkJBQTZCLEFBQUMsQ0FBQSxHQUFHLEVBQUUscUJBQW9CLEVBQUc7UUFDMUQsMkJBQTJCLEFBQUMsQ0FBQSxHQUFHLEVBQUUscUJBQW9CLEVBQUc7SUFDMUQ7QUFDRjtBQUVBLFNBQVMsRUFBRSxFQUFDO0lBQ1YsSUFBSSxJQUFJLEVBQUUsSUFBRztRQUFDO1FBQWtCO1FBQXdCO1FBQVc7S0FBZ0I7SUFDbkYsT0FBTztRQUNMLEdBQUcsRUFBQztRQUNKLG9CQUFvQixFQUFFLElBQUc7WUFBQztZQUFvQjtZQUFlO1lBQVU7WUFDckU7WUFBZ0I7U0FDakI7UUFDRCxrQkFBa0IsRUFBRSxJQUFHO1lBQUM7WUFBa0I7WUFBVTtZQUFTO1lBQWM7WUFDekU7U0FDRDtRQUNELG9CQUFvQixFQUFFLElBQUc7WUFBQztZQUFvQjtZQUFrQjtZQUFhO1NBQWMsS0FDeEYsQ0FBQSxJQUFJLFFBQVEsRUFBQztJQUNsQjtBQUNGIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS05YjA5YzE0NzNkZGMzODlmLmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL2hpcmluZ3RoaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBXPU9iamVjdC5jcmVhdGU7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBWPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcT0oZSx0LG8scik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG4gb2YgRyh0KSkhSi5jYWxsKGUsbikmJm4hPT1vJiZQKGUsbix7Z2V0OigpPT50W25dLGVudW1lcmFibGU6IShyPVYodCxuKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgej0oZSx0LG8pPT4obz1lIT1udWxsP1coWChlKSk6e30scSh0fHwhZXx8IWUuX19lc01vZHVsZT9QKG8sXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOm8sZSkpO3ZhciB5PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIEg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSz1uZXcgU2V0KHkpLEQ9ZT0+Sy5oYXMoZSksdWU9eS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBkZT1EKFwiLS1kcnktcnVuXCIpLF89KCk9PkQoXCItLXZlcmJvc2VcIil8fEgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsZmU9XygpO3ZhciB4PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBrPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksVD0oLi4uZSk9PngoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxBPSguLi5lKT0+eChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFE9MCxwPSguLi5lKT0+XygpJiZ4KGBcXHV7MUY3RTF9ICR7USsrfWAsLi4uZSk7dmFyIGM9e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wicGFnZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXHNpdGVzXFxcXGhpcmluZ3RoaW5nLmpzXCIsXCJidW5kbGVJZFwiOlwiNjExNGM0NzhjNTk4MDkxN1wiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IDRndUVxXHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy9oaXJpbmd0aGluZy5qc1xuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIC4vYW5zd2VyIC0+IDJ3Y3dSICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2hpcmluZ3RoaW5nL2Fuc3dlci5qc1xyXG4gKiAgIC4vb3BlcmF0aW9ucyAtPiBrb3pqZCAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9oaXJpbmd0aGluZy9vcGVyYXRpb25zLmpzXHJcbiAqICAgLi9ydWxlcyAtPiBmVU5sTiAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9oaXJpbmd0aGluZy9ydWxlcy5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvYW5zd2VyIC0+IDdUNWVXICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvYW5zd2VyLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvZG9tIC0+IGhBNVFhICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvZG9tLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL2Jhc2UtZmlsbGVyIC0+IDh4ajZGICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2Jhc2UtZmlsbGVyLmpzXHJcbiAqICAgfmNvcmUvZG9tIC0+IGhMTUpYICA9PiAgc3JjL2NvcmUvZG9tLmpzXHJcbiAqICAgfmNvcmUvZW51bXMgLT4gMU8zbmMgID0+ICBzcmMvY29yZS9lbnVtcy5qc1xyXG4gKiAgIH5zdG9yZS9hdXRvZmlsbEluZm8gLT4gNzlWTlAgID0+ICBzcmMvc3RvcmUvYXV0b2ZpbGxJbmZvLmpzXHJcbiAqL1xyXG5cclxudmFyIG4gPSBlKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtcclxubi5kZWZpbmVJbnRlcm9wRmxhZyhyKSwgbi5leHBvcnQociwgXCJIaXJpbmdUaGluZ1wiLCAoKSA9PiBtKSwgbi5leHBvcnQocixcclxuICBcImZvcm1hdEhpcmluZ1RoaW5nRW1wbG95bWVudFJlY29yZFwiLCAoKSA9PiBnKTtcclxudmFyIG8gPSBlKFwifmNvbnRlbnRzL21ldGhvZHMvYW5zd2VyXCIpLFxyXG4gIGkgPSBlKFwifmNvbnRlbnRzL21ldGhvZHMvZG9tXCIpLFxyXG4gIGEgPSBlKFwifmNvbnRlbnRzL3NpdGVzL2Jhc2UtZmlsbGVyXCIpLFxyXG4gIGwgPSBlKFwifmNvcmUvZG9tXCIpLFxyXG4gIHMgPSBlKFwifmNvcmUvZW51bXNcIiksXHJcbiAgdSA9IGUoXCJ+c3RvcmUvYXV0b2ZpbGxJbmZvXCIpLFxyXG4gIGMgPSBlKFwiLi9hbnN3ZXJcIiksXHJcbiAgZCA9IGUoXCIuL29wZXJhdGlvbnNcIiksXHJcbiAgZiA9IGUoXCIuL3J1bGVzXCIpO1xyXG5cclxuZnVuY3Rpb24gcChlKSB7XHJcbiAgbGV0IHQgPSBlPy5uYW1lIHx8IGU/LmlkIHx8IFwiXCI7XHJcbiAgcmV0dXJuIC9cXC4oPzpzdF9kYXRlfGVuZF9kYXRlKSQvLnRlc3QodClcclxufVxyXG5jbGFzcyBtIGV4dGVuZHMgYS5CYXNlRmlsbGVyIHtcclxuICBnZXRGaWVsZEhhbmRsZXJzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW3MuRklFTERfVFlQRS5URVhUXTogKGUsIHQpID0+IHtcclxuICAgICAgICBsZXQgciA9IEFycmF5LmlzQXJyYXkodCkgPyB0WzBdIDogdDtcclxuICAgICAgICByZXR1cm4gZS4kaW5wdXQ/LmdldEF0dHJpYnV0ZShcInJvbGVcIikgPT09IFwiY29tYm9ib3hcIiA/ICgwLCBkLmZpbGxSZWFjdFNlbGVjdEZpZWxkKShlLFxyXG4gICAgICAgICAgW1N0cmluZyhyID8/IFwiXCIpXSkgOiBlLiRpbnB1dD8uaWQgPT09IFwidXNlci5waG9uZVwiID8gKDAsIGQuZmlsbFBob25lRmllbGQpKGVcclxuICAgICAgICAgIC4kaW5wdXQsIFN0cmluZyhyID8/IFwiXCIpKSA6IHAoZS4kaW5wdXQpID8gKDAsIGQuZmlsbERhdGVUZXh0RmllbGQpKGUuJGlucHV0LFxyXG4gICAgICAgICAgU3RyaW5nKHIgPz8gXCJcIikpIDogKDAsIGQuZmlsbElucHV0VGV4dEZpZWxkKShlLiRpbnB1dCwgU3RyaW5nKHIgPz8gXCJcIikpXHJcbiAgICAgIH0sXHJcbiAgICAgIFtzLkZJRUxEX1RZUEUuUkFESU9HUk9VUF06IChlLCB0KSA9PiAoMCwgZC5maWxsUmFkaW9Hcm91cEZpZWxkKShlLCB0KSxcclxuICAgICAgW3MuRklFTERfVFlQRS5TRUFSQ0hdOiAoZSwgdCkgPT4gKDAsIGQuZmlsbFJlYWN0U2VsZWN0RmllbGQpKGUsIHQpLFxyXG4gICAgICBbcy5GSUVMRF9UWVBFLlNFTEVDVF06IChlLCB0KSA9PiBcIkNvdW50cnkgUGhvbmUgQ29kZVwiID09PSBlLmxhYmVsID8gKDAsIGRcclxuICAgICAgICAuZmlsbEhpcmluZ1RoaW5nUGhvbmVDb3VudHJ5Q29kZUZpZWxkKShlLCB0KSA6ICgwLCBkLmZpbGxOYXRpdmVTZWxlY3RGaWVsZCkoZSwgdCksXHJcbiAgICAgIFtzLkZJRUxEX1RZUEUuQ0hFQ0tCT1hdOiAoZSwgdCkgPT4gKDAsIGQuZmlsbENoZWNrYm94RmllbGQpKGUsIHQpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIHJ1blByZUZpbGxGb3JtKCkge1xyXG4gICAgdGhpcy5hdXRvZmlsbENvdW50cnkgPSBcIlwiLCB0aGlzLmF1dG9maWxsUGhvbmVDb3VudHJ5Q29kZSA9IFwiXCI7XHJcbiAgICBsZXQgZSA9IGF3YWl0ICgwLCB1LnVzZUF1dG9maWxsSW5mb1N0b3JlKS5nZXRTdGF0ZSgpLmZldGNoQXV0b2ZpbGxJbmZvKCk7XHJcbiAgICB0aGlzLmF1dG9maWxsQ291bnRyeSA9IGU/LmxvY2F0aW9uPy5jb3VudHJ5LCB0aGlzLmF1dG9maWxsUGhvbmVDb3VudHJ5Q29kZSA9IGVcclxuICAgICAgPy5waG9uZUNvdW50cnlDb2RlLCB0aGlzLnRhc2tRdWV1ZS5hZGQoZC5wcmVGaWxsRm9ybSksIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpXHJcbiAgfVxyXG4gIGFzeW5jIHByZUZpbGxDb3VudHJ5QW5kUmVmcmVzaFN0YXRlUnVsZXMoZSkge1xyXG4gICAgdGhpcy5za2lwcGVkRGVwZW5kZW50U3RhdGVSdWxlcyA9IFtdO1xyXG4gICAgbGV0IHQgPSBTdHJpbmcodGhpcy5hdXRvZmlsbENvdW50cnkgfHwgXCJcIikudHJpbSgpLFxyXG4gICAgICByID0gZS5maWx0ZXIoZC5pc0hpcmluZ1RoaW5nQ291bnRyeVJ1bGUpO1xyXG4gICAgaWYgKCF0IHx8IDAgPT09IHIubGVuZ3RoKSByZXR1cm4gZTtcclxuICAgIGxldCBuID0gZS5maWx0ZXIoZC5pc0hpcmluZ1RoaW5nU3RhdGVQcm92aW5jZVJ1bGUpLFxyXG4gICAgICBvID0gKDAsIGQuZ2V0SGlyaW5nVGhpbmdDb3VudHJ5U2VsZWN0aW9uVmFsdWUpKCk7XHJcbiAgICBmb3IgKGxldCBlIG9mIHIpIHRoaXMudGFza1F1ZXVlLmFkZCgoKSA9PiAoMCwgZC5maWxsUmVhY3RTZWxlY3RGaWVsZCkoZSwgW3RdKSk7XHJcbiAgICBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKTtcclxuICAgIGxldCBpID0gbyAhPT0gKDAsIGQuZ2V0SGlyaW5nVGhpbmdDb3VudHJ5U2VsZWN0aW9uVmFsdWUpKCk7XHJcbiAgICBpZiAoIWkgfHwgMCA9PT0gbi5sZW5ndGgpIHJldHVybiBlO1xyXG4gICAgbGV0IGEgPSBhd2FpdCAoMCwgZC53YWl0Rm9ySGlyaW5nVGhpbmdTdGF0ZU9wdGlvbnMpKG4uZmxhdE1hcChlID0+IGUub3B0aW9ucyB8fCBbXSkpO1xyXG4gICAgaWYgKCFhKSByZXR1cm4gdGhpcy5za2lwcGVkRGVwZW5kZW50U3RhdGVSdWxlcyA9IG4sIGUuZmlsdGVyKGUgPT4gISgwLCBkXHJcbiAgICAgIC5pc0hpcmluZ1RoaW5nU3RhdGVQcm92aW5jZVJ1bGUpKGUpKTtcclxuICAgIGxldCBsID0gKDAsIGYuZXh0cmFjdFJ1bGVzKSgpLFxyXG4gICAgICBzID0gbC5maWx0ZXIoZC5pc0hpcmluZ1RoaW5nU3RhdGVQcm92aW5jZVJ1bGUpO1xyXG4gICAgcmV0dXJuIGNvbnNvbGUuaW5mbyhcIltIaXJpbmdUaGluZ11bU3RhdGVdIGRlcGVuZGVudC1yZWdpb24tcnVsZXMtcmVmcmVzaGVkXCIsIHtcclxuICAgICAgb3B0aW9uQ291bnQ6IHMuZmxhdE1hcChlID0+IGUub3B0aW9ucyB8fCBbXSkubGVuZ3RoXHJcbiAgICB9KSwgbFxyXG4gIH1cclxuICBhc3luYyBwcmVGaWxsUGhvbmVDb3VudHJ5Q29kZShlKSB7XHJcbiAgICBsZXQgdCA9IFN0cmluZyh0aGlzLmF1dG9maWxsUGhvbmVDb3VudHJ5Q29kZSA/PyBcIlwiKS50cmltKCksXHJcbiAgICAgIHIgPSBlLmZpbHRlcihlID0+IGUudHlwZSA9PT0gcy5GSUVMRF9UWVBFLlNFTEVDVCAmJiBcIkNvdW50cnkgUGhvbmUgQ29kZVwiID09PSBlLmxhYmVsKTtcclxuICAgIGlmICghdCB8fCAwID09PSByLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgbGV0IG4gPSAwO1xyXG4gICAgZm9yIChsZXQgZSBvZiByKSB0aGlzLnRhc2tRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCAoMCwgZC5maWxsSGlyaW5nVGhpbmdQaG9uZUNvdW50cnlDb2RlRmllbGQpKGUsIHQpICYmIChuICs9IDEpXHJcbiAgICB9KTtcclxuICAgIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpLCBjb25zb2xlLmluZm8oXCJbSGlyaW5nVGhpbmddW1Bob25lQ291bnRyeV0gcHJlZmlsbFwiLCB7XHJcbiAgICAgIHJ1bGVDb3VudDogci5sZW5ndGgsXHJcbiAgICAgIGNvbW1pdHRlZENvdW50OiBuXHJcbiAgICB9KVxyXG4gIH1cclxuICBhc3luYyBkb0ZpbGxGb3JtKGUgPSAhMSkge1xyXG4gICAgYXdhaXQgdGhpcy5pbml0aWFsaXplRmlsbEZvcm0oKTtcclxuICAgIGxldCB0ID0gYXdhaXQgdGhpcy5leHRyYWN0Rm9ybVJ1bGVzKCk7XHJcbiAgICBmb3IgKGxldCBlIG9mIChhd2FpdCB0aGlzLnByZUZpbGxQaG9uZUNvdW50cnlDb2RlKHQpLCB0ID0gYXdhaXQgdGhpc1xyXG4gICAgICAgIC5wcmVGaWxsQ291bnRyeUFuZFJlZnJlc2hTdGF0ZVJ1bGVzKHQpLCB0ID0gdGhpcy5wcmVwYXJlQ292ZXJMZXR0ZXJSdWxlcyh0KSwgdGhpc1xyXG4gICAgICAgIC5wcm9ncmVzc1RyYWNrZXIuc2V0RmllbGRzUmVxdWlyZWRTdGF0dXMoWy4uLnQsIC4uLnRoaXMuc2tpcHBlZERlcGVuZGVudFN0YXRlUnVsZXNdKSxcclxuICAgICAgICB0aGlzLnNraXBwZWREZXBlbmRlbnRTdGF0ZVJ1bGVzKSkgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoZS5sYWJlbCk7XHJcbiAgICBsZXQgciA9IGF3YWl0IHRoaXMuZmV0Y2hGb3JtQW5zd2Vycyh0LCBlKTtcclxuICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiByKSByZXR1cm4gcjtcclxuICAgIGF3YWl0IHRoaXMuaGFuZGxlUmVzdW1lVXBsb2FkKCksIGF3YWl0IHRoaXMuZmlsbFJlZ3VsYXJGaWVsZHModCksIGF3YWl0IHRoaXNcclxuICAgICAgLmZpbGxFZHVjYXRpb25BbmRFbXBsb3ltZW50KHQpLCBhd2FpdCB0aGlzLmZpbGxDb3ZlckxldHRlckZpZWxkcygpO1xyXG4gICAgbGV0IG4gPSBhd2FpdCB0aGlzLnJ1bkNvbWJvUXVlc3Rpb25BdXRvZmlsbElmTmVlZGVkKHQsIGUpO1xyXG4gICAgcmV0dXJuIFwic3RyaW5nXCIgPT0gdHlwZW9mIG4gPyBuIDogKHQgPSBuLCBhd2FpdCB0aGlzLmV4ZWN1dGVTaXRlU3BlY2lmaWNTdGVwcyh0KSwgYXdhaXQgdGhpc1xyXG4gICAgICAuZmluYWxpemVGaWxsRm9ybSgpKVxyXG4gIH1cclxuICBhc3luYyBleHRyYWN0Rm9ybVJ1bGVzKCkge1xyXG4gICAgcmV0dXJuICgwLCBmLmV4dHJhY3RSdWxlcykoKVxyXG4gIH1cclxuICBnZXRTaXRlTmFtZSgpIHtcclxuICAgIHJldHVybiBcImhpcmluZ3RoaW5nXCJcclxuICB9XHJcbiAgZm9ybWF0QW5zd2VyKGUpIHtcclxuICAgIHJldHVybiAoMCwgYy5mb3JtYXRIaXJpbmdUaGluZ0Fuc3dlcikoZSwgdGhpcy5hdXRvZmlsbENvdW50cnksIHRoaXNcclxuICAgICAgLmF1dG9maWxsUGhvbmVDb3VudHJ5Q29kZSlcclxuICB9XHJcbiAgYXN5bmMgZmlsbFJlZ3VsYXJGaWVsZHMoZSkge1xyXG4gICAgbGV0IHQgPSBlLmZpbHRlcihkLmlzSGlyaW5nVGhpbmdDb3VudHJ5UnVsZSk7XHJcbiAgICBpZiAoMCA9PT0gdC5sZW5ndGgpIHtcclxuICAgICAgYXdhaXQgc3VwZXIuZmlsbFJlZ3VsYXJGaWVsZHMoZSk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgbGV0IHIgPSBlLmZpbHRlcihkLmlzSGlyaW5nVGhpbmdTdGF0ZVByb3ZpbmNlUnVsZSksXHJcbiAgICAgIG4gPSAoMCwgZC5nZXRIaXJpbmdUaGluZ0NvdW50cnlTZWxlY3Rpb25WYWx1ZSkoKTtcclxuICAgIGZvciAobGV0IGUgb2YgKDAsIG8uZ2V0UmVndWxhck9wZXJhdGlvbnMpKHQsIHRoaXMuYW5zd2VyLnJlZ3VsYXIsIHRoaXMub3BlcmF0aW9uQ29uZmlnKSlcclxuICAgICAgdGhpcy50YXNrUXVldWUuYWRkKGUpO1xyXG4gICAgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKCk7XHJcbiAgICBsZXQgaSA9IG4gIT09ICgwLCBkLmdldEhpcmluZ1RoaW5nQ291bnRyeVNlbGVjdGlvblZhbHVlKSgpLFxyXG4gICAgICBhID0gZS5maWx0ZXIoZSA9PiAhKDAsIGQuaXNIaXJpbmdUaGluZ0NvdW50cnlSdWxlKShlKSk7XHJcbiAgICBpZiAoaSAmJiByLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IGUgPSBhd2FpdCAoMCwgZC53YWl0Rm9ySGlyaW5nVGhpbmdTdGF0ZU9wdGlvbnMpKHIuZmxhdE1hcChlID0+IGUub3B0aW9ucyB8fCBbXSkpO1xyXG4gICAgICBpZiAoZSkgYSA9ICgwLCBmLmV4dHJhY3RSdWxlcykoKS5maWx0ZXIoZSA9PiAhKDAsIGQuaXNIaXJpbmdUaGluZ0NvdW50cnlSdWxlKShlKSk7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICBmb3IgKGxldCBlIG9mIChhID0gYS5maWx0ZXIoZSA9PiAhKDAsIGQuaXNIaXJpbmdUaGluZ1N0YXRlUHJvdmluY2VSdWxlKShlKSksIHIpKSB0aGlzXHJcbiAgICAgICAgICAucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKGUubGFiZWwpXHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBlIG9mICgwLCBvLmdldFJlZ3VsYXJPcGVyYXRpb25zKShhLCB0aGlzLmFuc3dlci5yZWd1bGFyLCB0aGlzLm9wZXJhdGlvbkNvbmZpZykpXHJcbiAgICAgIHRoaXMudGFza1F1ZXVlLmFkZChlKTtcclxuICAgIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpXHJcbiAgfVxyXG4gIGFzeW5jIGNoZWNrQ292ZXJMZXR0ZXIoKSB7XHJcbiAgICAoMCwgaS5wb3N0Q292ZXJMZXR0ZXJTdGF0dXMpKCgwLCBkLmdldEhpcmluZ1RoaW5nQ292ZXJMZXR0ZXJTdGF0dXMpKCkpXHJcbiAgfVxyXG4gIGFzeW5jIGhhbmRsZVJlc3VtZVVwbG9hZCgpIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVVcGxvYWRSZXN1bWUpIHtcclxuICAgICAgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJSZXN1bWUvQ1ZcIik7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy50YXNrUXVldWUuYWRkKGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgKDAsIGQudXBsb2FkUmVzdW1lKSh0aGlzLnJlc3VtZUluZm8sIHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgICAgLnVwZGF0ZUZpZWxkUmVxdWlyZWRTdGF0dXMsIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKVxyXG4gICAgfSksIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpXHJcbiAgfVxyXG4gIGFzeW5jIGZpbGxFZHVjYXRpb25BbmRFbXBsb3ltZW50KGUpIHtcclxuICAgIGlmIChlLnNvbWUoZSA9PiBlLnR5cGUgPT09IHMuRklFTERfVFlQRS5FRFVDQVRJT04pICYmIHRoaXMuYW5zd2VyPy5lZHVjYXRpb24/Lmxlbmd0aCA+IDApIHtcclxuICAgICAgYXdhaXQgKDAsIGQuZW5zdXJlSGlyaW5nVGhpbmdTdHJ1Y3R1cmVkUm93cykoXCJlZHVjYXRpb25cIiwgdGhpcy5hbnN3ZXIuZWR1Y2F0aW9uLmxlbmd0aCk7XHJcbiAgICAgIGxldCBlID0gKDAsIGYuZXh0cmFjdFJ1bGVzKSgpLmZpbHRlcihlID0+IGUudHlwZSA9PT0gcy5GSUVMRF9UWVBFLkVEVUNBVElPTik7XHJcbiAgICAgIGZvciAobGV0IHQgb2YgKCgwLCBsLnNldFNlY3Rpb25SZXN1bHRGb2N1c1J1bGVzKShcImVkdWNhdGlvblwiLCBlKSwgKDAsIG9cclxuICAgICAgICAgIC5nZXRFZHVjYXRpb25PcGVyYXRpb25zKShlLCB0aGlzLmFuc3dlci5lZHVjYXRpb24ubWFwKGIpLCB0aGlzLm9wZXJhdGlvbkNvbmZpZyxcclxuICAgICAgICAgIHZvaWQgMCwge1xyXG4gICAgICAgICAgICBvblNlY3Rpb25SZXN1bHRDaGFuZ2VkOiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVTZWN0aW9uUmVzdWx0LFxyXG4gICAgICAgICAgICBvbkNvbXBsZXRlZDogKCkgPT4gdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MoXCJFZHVjYXRpb25cIiksXHJcbiAgICAgICAgICAgIG9uU2tpcHBlZDogKCkgPT4gdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJFZHVjYXRpb25cIilcclxuICAgICAgICAgIH0pKSkgdGhpcy50YXNrUXVldWUuYWRkKHQpO1xyXG4gICAgICBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKVxyXG4gICAgfVxyXG4gICAgaWYgKGUuc29tZShlID0+IGUudHlwZSA9PT0gcy5GSUVMRF9UWVBFLkVNUExPWU1FTlQpICYmIHRoaXMuYW5zd2VyPy53b3JrRXhwZXJpZW5jZT8ubGVuZ3RoID5cclxuICAgICAgMCkge1xyXG4gICAgICBhd2FpdCAoMCwgZC5lbnN1cmVIaXJpbmdUaGluZ1N0cnVjdHVyZWRSb3dzKShcImVtcGxveW1lbnRcIiwgdGhpcy5hbnN3ZXIud29ya0V4cGVyaWVuY2VcclxuICAgICAgICAubGVuZ3RoKTtcclxuICAgICAgbGV0IGUgPSAoMCwgZi5leHRyYWN0UnVsZXMpKCkuZmlsdGVyKGUgPT4gZS50eXBlID09PSBzLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVCk7XHJcbiAgICAgIGZvciAobGV0IHQgb2YgKCgwLCBsLnNldFNlY3Rpb25SZXN1bHRGb2N1c1J1bGVzKShcImVtcGxveW1lbnRcIiwgZSksICgwLCBvXHJcbiAgICAgICAgICAuZ2V0RW1wbG95bWVudE9wZXJhdGlvbnMpKGUsIHRoaXMuYW5zd2VyLndvcmtFeHBlcmllbmNlLm1hcChnKSwgdGhpc1xyXG4gICAgICAgICAgLm9wZXJhdGlvbkNvbmZpZywgdm9pZCAwLCB7XHJcbiAgICAgICAgICAgIG9uU2VjdGlvblJlc3VsdENoYW5nZWQ6IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZVNlY3Rpb25SZXN1bHQsXHJcbiAgICAgICAgICAgIG9uQ29tcGxldGVkOiAoKSA9PiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhcIkVtcGxveW1lbnRcIiksXHJcbiAgICAgICAgICAgIG9uU2tpcHBlZDogKCkgPT4gdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJFbXBsb3ltZW50XCIpXHJcbiAgICAgICAgICB9KSkpIHRoaXMudGFza1F1ZXVlLmFkZCh0KTtcclxuICAgICAgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKClcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgZXhlY3V0ZVNpdGVTcGVjaWZpY1N0ZXBzKGUpIHtcclxuICAgIGxldCB0ID0gKDAsIGQuZ2V0SGlyaW5nVGhpbmdDb3ZlckxldHRlclN0YXR1cykoKTtcclxuICAgIHQgJiYgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cyh7XHJcbiAgICAgIGxhYmVsOiBcIkNvdmVyIExldHRlclwiLFxyXG4gICAgICByZXF1aXJlZDogITFcclxuICAgIH0pO1xyXG4gICAgbGV0IHIgPSB0aGlzLmNvdmVyTGV0dGVyO1xyXG4gICAgcj8uY292ZXJMZXR0ZXJJZCAmJiAodGhpcy50YXNrUXVldWUuYWRkKGFzeW5jICgpID0+IHtcclxuICAgICAgbGV0IGUgPSBhd2FpdCAoMCwgZC51cGxvYWRDb3ZlckxldHRlcikoe1xyXG4gICAgICAgICAgY292ZXJMZXR0ZXJJZDogci5jb3ZlckxldHRlcklkLFxyXG4gICAgICAgICAgY292ZXJMZXR0ZXJOYW1lOiAoMCwgZi5nZXRIaXJpbmdUaGluZ0NvdmVyTGV0dGVyTmFtZSkoci5jb3ZlckxldHRlck5hbWUpLFxyXG4gICAgICAgICAgbWFya2Rvd246IHIubWFya2Rvd24sXHJcbiAgICAgICAgICB1c2VMZWdhY3lEb3dubG9hZDogci51c2VMZWdhY3lEb3dubG9hZFxyXG4gICAgICAgIH0sIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpZWxkUmVxdWlyZWRTdGF0dXMsIHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgICAgLnVwZGF0ZUZpbGxlZFByb2dyZXNzKTtcclxuICAgICAgZSB8fCB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhcIkNvdmVyIExldHRlclwiKVxyXG4gICAgfSksIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpKSwgYXdhaXQgdGhpcy5iaW5kU3VibWl0QnV0dG9uVHJhY2tpbmcoZSlcclxuICB9XHJcbiAgZ2V0U3VibWl0QnV0dG9uU2VsZWN0b3IoKSB7XHJcbiAgICByZXR1cm4gJy8vYnV0dG9uW0B0eXBlPVwic3VibWl0XCIgYW5kIGNvbnRhaW5zKG5vcm1hbGl6ZS1zcGFjZSguKSwgXCJTdWJtaXQgQXBwbGljYXRpb25cIildJ1xyXG4gIH1cclxuICBhc3luYyBnZXRBdXRvZmlsbFNuYXBzaG90KGUpIHtcclxuICAgIHJldHVybiAoMCwgZi5nZXRGb3JtU25hcHNob3QpKGUpXHJcbiAgfVxyXG4gIGFzeW5jIGdldFN1Ym1pdFNuYXBzaG90KCkge1xyXG4gICAgcmV0dXJuICgwLCBmLmdldEZvcm1TbmFwc2hvdCkoKVxyXG4gIH1cclxuICBzdWJtaXRBcHBsaWNhdGlvbigpIHtcclxuICAgIGxldCBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdLnN1Ym1pdC1hcHAtYnV0dG9uLCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpO1xyXG4gICAgZT8uY2xpY2soKVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvciguLi5lKSB7XHJcbiAgICBzdXBlciguLi5lKSwgdGhpcy5hdXRvZmlsbENvdW50cnkgPSBcIlwiLCB0aGlzLmF1dG9maWxsUGhvbmVDb3VudHJ5Q29kZSA9IFwiXCIsIHRoaXNcclxuICAgICAgLnNraXBwZWREZXBlbmRlbnRTdGF0ZVJ1bGVzID0gW11cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGgoZSwgdCkge1xyXG4gIGZvciAobGV0IHIgb2YgdCkge1xyXG4gICAgbGV0IHQgPSByLnNwbGl0KFwiLlwiKS5yZWR1Y2UoKGUsIHQpID0+IGU/Llt0XSwgZSk7XHJcbiAgICBpZiAobnVsbCAhPSB0ICYmIFwiXCIgIT09IHQpIHJldHVybiB0XHJcbiAgfVxyXG4gIHJldHVybiBcIlwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGcoZSkge1xyXG4gIGxldCB0ID0gaChlLCBbXCJEYXRlcyBvZiBFbXBsb3ltZW50IFN0YXJ0XCIsIFwiU3RhcnRcIiwgXCJzdGFydERhdGVcIiwgXCJzdGFydF9kYXRlXCIsIFwiZGF0ZXMuc3RhcnREYXRlXCIsXHJcbiAgICAgIFwiZGF0ZXMuc3RhcnRfZGF0ZVwiLCBcImRhdGVzLnN0YXJ0XCJcclxuICAgIF0pLFxyXG4gICAgciA9IGgoZSwgW1wiRGF0ZXMgb2YgRW1wbG95bWVudCBFbmRcIiwgXCJFbmRcIiwgXCJlbmREYXRlXCIsIFwiZW5kX2RhdGVcIiwgXCJkYXRlcy5lbmREYXRlXCIsXHJcbiAgICAgIFwiZGF0ZXMuZW5kX2RhdGVcIiwgXCJkYXRlcy5lbmRcIiwgXCJkYXRlcy5jb21wbGV0aW9uRGF0ZVwiLCBcImRhdGVzLmNvbXBsZXRpb25fZGF0ZVwiXHJcbiAgICBdKTtcclxuICByZXR1cm4gY29uc29sZS5pbmZvKFwiW0hpcmluZ1RoaW5nXVtFbXBsb3ltZW50XSBub3JtYWxpemVkIGRhdGUgcmVjb3JkXCIsIHtcclxuICAgIGhhc1N0YXJ0RGF0ZTogISF0LFxyXG4gICAgaGFzRW5kRGF0ZTogISFyXHJcbiAgfSksIHtcclxuICAgIC4uLmUsXHJcbiAgICBcIkNvbXBhbnkgTmFtZVwiOiBoKGUsIFtcIkNvbXBhbnkgTmFtZVwiLCBcImNvbXBhbnlOYW1lXCIsIFwiY29tcGFueVwiLCBcImVtcGxveWVyXCIsIFwib3JnYW5pemF0aW9uXCIsXHJcbiAgICAgIFwibmFtZVwiXHJcbiAgICBdKSxcclxuICAgIFwiWW91ciBQb3NpdGlvblwiOiBoKGUsIFtcIllvdXIgUG9zaXRpb25cIiwgXCJwb3NpdGlvblwiLCBcInRpdGxlXCIsIFwiam9iVGl0bGVcIiwgXCJyb2xlXCJdKSxcclxuICAgIER1dGllczogaChlLCBbXCJEdXRpZXNcIiwgXCJkdXRpZXNcIiwgXCJkZXNjcmlwdGlvblwiLCBcInN1bW1hcnlcIiwgXCJyZXNwb25zaWJpbGl0aWVzXCJdKSxcclxuICAgIFwiUmVhc29uIGZvciBMZWF2aW5nXCI6IGgoZSwgW1wiUmVhc29uIGZvciBMZWF2aW5nXCIsIFwicmVhc29uRm9yTGVhdmluZ1wiLCBcImxlYXZpbmdSZWFzb25cIixcclxuICAgICAgXCJyZWFzb25cIlxyXG4gICAgXSksXHJcbiAgICBcIkRhdGVzIG9mIEVtcGxveW1lbnQgU3RhcnRcIjogKDAsIGYuZm9ybWF0SGlyaW5nVGhpbmdEYXRlKSh0KSxcclxuICAgIFwiRGF0ZXMgb2YgRW1wbG95bWVudCBFbmRcIjogKDAsIGYuZm9ybWF0SGlyaW5nVGhpbmdEYXRlKShyKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYihlKSB7XHJcbiAgbGV0IHQgPSBoKGUsIFtcImNvbXBsZXRpb25EYXRlXCIsIFwiZGF0ZXMuY29tcGxldGlvbkRhdGVcIiwgXCJlbmREYXRlXCIsIFwiZGF0ZXMuZW5kRGF0ZVwiXSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmUsXHJcbiAgICBcIkluc3RpdHV0aW9uIE5hbWVcIjogaChlLCBbXCJJbnN0aXR1dGlvbiBOYW1lXCIsIFwiaW5zdGl0dXRpb25cIiwgXCJzY2hvb2xcIiwgXCJzY2hvb2xOYW1lXCIsXHJcbiAgICAgIFwib3JnYW5pemF0aW9uXCIsIFwibmFtZVwiXHJcbiAgICBdKSxcclxuICAgIFwiRGVncmVlL1N1YmplY3RcIjogaChlLCBbXCJEZWdyZWUvU3ViamVjdFwiLCBcImRlZ3JlZVwiLCBcIm1ham9yXCIsIFwiZGlzY2lwbGluZVwiLCBcImZpZWxkXCIsXHJcbiAgICAgIFwiZmllbGRPZlN0dWR5XCJcclxuICAgIF0pLFxyXG4gICAgXCJEZWdyZWUgb2J0YWluZWQ/XCI6IGgoZSwgW1wiRGVncmVlIG9idGFpbmVkP1wiLCBcImRlZ3JlZU9idGFpbmVkXCIsIFwiY29tcGxldGVkXCIsIFwiaXNDb21wbGV0ZWRcIl0pIHx8XHJcbiAgICAgICh0ID8gXCJZZXNcIiA6IFwiXCIpXHJcbiAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlyaW5ndGhpbmcuYzU5ODA5MTcuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);