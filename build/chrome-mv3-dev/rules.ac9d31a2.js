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
})({"kfMMD":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\brassring\\rules.js",
    "bundleId": "c98828b3ac9d31a2",
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
var j = z(require("ecf52cf4301bbff6"));
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

},{"ecf52cf4301bbff6":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"fJQPK":[function(require,module,exports) {
/**
 * Parcel module id: 79ZpG
 * Resolved path: src/contents/sites/brassring/rules.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "BRASSRING_GPA_DESCRIPTION", ()=>f), n.export(r, "buildBrassringDateFormatDescription", ()=>h), n.export(r, "extractRules", ()=>eb), n.export(r, "getEducationRules", ()=>ey), n.export(r, "getExperienceRules", ()=>ev), n.export(r, "getEducationRule", ()=>ew), n.export(r, "getExperienceRule", ()=>eS), n.export(r, "getFormSnapshot", ()=>eY);
var o = e("@plasmohq/messaging"), i = e("~core/enums");
let a = ".fieldcontain", l = "#resumewidget.resumesection", s = "#AttachementCatagory", u = "ul.educationList, ul[class*='educationList'], ul[aria-label^='Education history']", c = "ul.experienceList, ul[class*='experienceList'], ul[aria-label^='Work experience'], ul[aria-label^='Experience']", d = ".immersive-translate-target-wrapper, [data-immersive-translate-translation-element-mark]", f = "Return GPA as numbers only, for example 3.88. Do not include a denominator such as /4.00.", p = "This is the signature date for Voluntary Self-Identification of Disability. Return today's date.", m = "This is my most recent education";
function h(e1, t = {}) {
    let r1 = e1.trim() || "M/D/YYYY", n = t.monthPicker ? "Use the opened month picker." : "Use the opened date picker.";
    return `${n} Return the value in ${r1} format.`;
}
let g = new Set([
    "choose...",
    "placeholder_choose",
    "select",
    "select one",
    "- select -",
    "-- select --",
    "no matches"
]), b = 1e3, y = new Set([
    "major area of study",
    "responsibilities"
]), v = /^Employer(\d+)$/i, w = /^Employer(\d+)JobTitle$/i;
function S(e1) {
    return new Promise((t)=>setTimeout(t, e1));
}
_c = S;
function E(e1) {
    let t = e1;
    for(; t && t !== document.documentElement;){
        let e1 = window.getComputedStyle(t);
        if (t.hidden || "true" === t.getAttribute("aria-hidden") || t.classList.contains("hidden") || t.classList.contains("hiddenField") || t.classList.contains("hide") || "none" === e1.display || "hidden" === e1.visibility || "collapse" === e1.visibility) return !1;
        t = t.parentElement;
    }
    return !0;
}
_c1 = E;
function x(e1) {
    if (!e1) return "";
    let t = e1.cloneNode(!0);
    return t.querySelectorAll(d).forEach((e1)=>e1.remove()), (t.textContent || "").replace(/\*/g, "").replace(/\s+/g, " ").trim();
}
function C(e1) {
    return e1.querySelector("label.ListView, label[id$='-label'], label");
}
_c2 = C;
function A(e1) {
    return x(C(e1));
}
_c3 = A;
function k(e1) {
    return e1.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
}
function T(e1, t) {
    if (!t || /\bother\b/i.test(e1)) return e1;
    let r1 = k(e1);
    if (!r1) return e1;
    let n = [
        t.getAttribute("aria-label"),
        t.getAttribute("title"),
        t.getAttribute("name"),
        t.getAttribute("dbfieldname"),
        t.id
    ].map((e1)=>k(e1 || "")).some((e1)=>/\bother\b/i.test(e1) && e1.includes(r1));
    return n ? `${e1} other` : e1;
}
_c4 = T;
function F(e1, t) {
    return y.has(t.trim().toLowerCase()) && !e1.closest(`${u}, ${c}`);
}
_c5 = F;
function I(e1) {
    return !!e1.querySelector(s);
}
_c6 = I;
function j(e1, t) {
    return F(e1, t) || I(e1);
}
function D(e1) {
    return !!e1.querySelector(".requiredFieldIndicator") || !!e1.querySelector("[aria-required='true'], .required, [required]");
}
_c7 = D;
function P(e1, t) {
    if (!/^date$/i.test(t.trim())) return !1;
    let r1 = e1.previousElementSibling;
    for(let e1 = 0; r1 && e1 < 6; e1++){
        if (x(r1).includes("Voluntary Self-Identification of Disability")) return !0;
        r1 = r1.previousElementSibling;
    }
    return !1;
}
_c8 = P;
function _(e1, t) {
    return e1.closest(a) === t;
}
function L(e1) {
    let t = e1.trim().toLowerCase();
    return !!t && !g.has(t);
}
_c9 = L;
function R(e1) {
    return Array.from(e1.options).some((e1)=>{
        let t = M(e1).trim().toLowerCase();
        return g.has(t);
    });
}
_c10 = R;
function O(e1) {
    let t = new Set, r1 = [];
    for (let n of e1){
        let e1 = n.trim(), o = e1.toLowerCase();
        !L(e1) || t.has(o) || (t.add(o), r1.push(e1));
    }
    return r1;
}
_c11 = O;
function M(e1) {
    let t = x(e1) || e1.getAttribute("aria-label") || e1.label || "";
    if (t.trim()) return t.trim();
    let r1 = e1.value.trim();
    return /^\d+$/.test(r1) ? "" : r1;
}
_c12 = M;
function N(e1) {
    return O(Array.from(e1.options).map(M));
}
_c13 = N;
function $(e1) {
    let t = e1.map((e1)=>e1.trim().toLowerCase());
    return 2 === t.length && t.includes("yes") && t.includes("no");
}
function B(e1) {
    let t = k(e1).replace(/[\/]+/g, " ");
    return [
        "state",
        "province",
        "state province",
        "state region province",
        "state region province county",
        "current state",
        "current province",
        "current state province"
    ].includes(t);
}
_c14 = B;
function q(e1, t) {
    let r1 = t.id ? document.getElementById(`${t.id}-input`) : null;
    return r1 || e1.querySelector("input.ui-search-widget, input.ui-autocomplete-input, input[name^='visible-input-']");
}
function U(e1) {
    let t = e1.id?.endsWith("-input") ? e1.id.slice(0, -6) : "";
    return t ? document.getElementById(t) : null;
}
_c15 = U;
function H(e1) {
    e1.scrollIntoView({
        block: "center",
        inline: "nearest"
    }), e1.dispatchEvent(new MouseEvent("mousedown", {
        bubbles: !0
    })), e1.dispatchEvent(new MouseEvent("mouseup", {
        bubbles: !0
    })), e1.dispatchEvent(new MouseEvent("click", {
        bubbles: !0
    }));
}
_c16 = H;
function Y(e1, t, r1) {
    let n = [
        r1.getAttribute("aria-owns"),
        r1.getAttribute("aria-controls"),
        r1.id ? `${r1.id}_listbox` : "",
        t.id ? `${t.id}-input_listbox` : "",
        t.id ? `${t.id}-menu` : ""
    ].filter((e1)=>!!e1), o = n.map((e1)=>document.getElementById(e1)).filter((e1)=>!!e1);
    if (o.length > 0) return o;
    let i = Array.from(e1.querySelectorAll(".ui-autocomplete, [role='listbox'], ul[id$='_listbox']"));
    return i.length > 0 ? i : Array.from(document.querySelectorAll(".ui-autocomplete.ui-front, ul.ui-autocomplete, [role='listbox']")).filter(E);
}
_c17 = Y;
function z(e1, t, r1) {
    let n = Y(e1, t, r1).flatMap((e1)=>Array.from(e1.querySelectorAll("li.ui-menu-item, .ui-menu-item-wrapper, [role='option'], li")));
    return O(n.map((e1)=>x(e1.querySelector(".ui-menu-item-wrapper") || e1)));
}
function V(e1) {
    let t = window.jQuery || window.$;
    try {
        t?.fn?.autocomplete && t(e1).autocomplete("close");
    } catch  {}
    e1.dispatchEvent(new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: !0
    })), e1.dispatchEvent(new KeyboardEvent("keyup", {
        key: "Escape",
        bubbles: !0
    })), e1.blur();
}
_c18 = V;
async function W(e1) {
    if (!e1.id) return !1;
    try {
        let t = await (0, o.sendToBackground)({
            name: "openBrassringFullPageAutocomplete",
            body: {
                inputId: e1.id
            }
        });
        return t?.opened === !0;
    } catch  {
        return !1;
    }
}
_c19 = W;
async function G(e1, t, r1, n = {}) {
    let o = ()=>{
        let o = n.captureNativeOptions ? N(t) : [];
        return o.length > 1 ? o : z(e1, t, r1);
    }, i = o();
    if (i.length > 0 && !n.forceRefresh) return i;
    let a = i.map((e1)=>e1.toLowerCase()).join("\x01"), l = e1.querySelector(".ui-icon-triangle-1-s, [ng-click*='blanketSearch']"), s = window.jQuery || window.$, u = window.pageSize, c = ()=>{
        n.fullPage && (window.pageSize = b, r1.pageIndex = 0);
    }, d = ()=>{
        n.fullPage && (void 0 === u ? delete window.pageSize : window.pageSize = u);
    };
    try {
        let e1 = !!n.fullPage && await W(r1);
        if (!e1) {
            r1.focus();
            let e1 = l || r1, t = ()=>c();
            n.fullPage ? (e1.addEventListener("mousedown", t, {
                capture: !0,
                once: !0
            }), e1.addEventListener("click", t, {
                capture: !0,
                once: !0
            })) : c(), H(e1), l || c();
            try {
                !l && s?.fn?.autocomplete && s(r1).autocomplete("search", "-1");
            } catch  {}
        }
        let t = [];
        for(let e1 = 0; e1 < 12; e1++){
            await S(100), t = o();
            let e1 = t.map((e1)=>e1.toLowerCase()).join("\x01");
            if (t.length > 0 && (!n.forceRefresh || e1 !== a)) break;
        }
        return t;
    } finally{
        d(), V(r1);
    }
}
_c20 = G;
async function K(e1) {
    if (e1.type !== i.FIELD_TYPE.SELECT && e1.type !== i.FIELD_TYPE.MULTI_SELECT && e1.type !== i.FIELD_TYPE.SEARCH) return;
    let t = e1, r1 = t.$input;
    if (!r1) return;
    let n = r1 instanceof HTMLSelectElement ? r1 : r1 instanceof HTMLInputElement ? U(r1) : null, o = r1.closest(a);
    if (!n || !o || t.type !== i.FIELD_TYPE.SEARCH && (t.options || []).length > 0 && !R(n)) return;
    let l = r1 instanceof HTMLInputElement ? r1 : q(o, n);
    if (!l) return;
    let s = B(t.label), u = s ? z(o, n, l).length : 0, c = await G(o, n, l, {
        forceRefresh: s,
        fullPage: s,
        captureNativeOptions: s
    });
    c.length > 0 && (t.options = c), s && console.info(`[BrassRingAutofill] state-options-hydrated ${JSON.stringify({
        label: t.label,
        selectId: n.id,
        initialRenderedCount: u,
        optionCount: c.length,
        requestedPageSize: b
    })}`);
}
_c21 = K;
function X(e1) {
    let t = e1.id ? document.querySelector(`label[for="${e1.id}"]`) : null, r1 = t || e1.closest("label"), n = x(r1) || x(e1.nextElementSibling) || e1.value;
    return n;
}
_c22 = X;
function J(e1) {
    let t = e1.id ? document.querySelector(`label[for="${e1.id}"]`) : null, r1 = t || e1.closest("label");
    return x(r1) || x(e1.nextElementSibling) || e1.value || "Yes";
}
_c23 = J;
function Q(e1, t, r1, n) {
    let o = Array.from(e1.querySelectorAll("input[type='radio']")).filter((t)=>!t.disabled && _(t, e1));
    if (o.length > 0) return {
        type: i.FIELD_TYPE.RADIOGROUP,
        label: t,
        required: n,
        options: o.map(X).filter(Boolean),
        $input: o[0],
        $label: r1,
        $radioParent: e1
    };
    let a = Array.from(e1.querySelectorAll("input[type='checkbox']")).filter((t)=>!t.disabled && _(t, e1));
    return a.length > 0 ? {
        type: i.FIELD_TYPE.CHECKBOX,
        label: t,
        required: n,
        options: 1 === a.length ? [
            "Yes",
            "No"
        ] : a.map(J).filter(Boolean),
        $label: r1,
        $checkboxs: a
    } : null;
}
_c24 = Q;
function Z(e1) {
    let t = e1.id ? document.querySelector(`label[for="${e1.id}"]`) : null, r1 = e1.closest("label"), n = e1.nextElementSibling, o = e1.previousElementSibling, l = e1.closest(a), s = l ? C(l) : null, u = e1.parentElement, c = t || r1 || (x(n) ? n : null) || (x(o) ? o : null) || s || u, d = x(t) || x(r1) || x(n) || x(o) || x(s) || x(u) || e1.getAttribute("aria-label") || e1.title || e1.value;
    return c && d ? {
        type: i.FIELD_TYPE.CHECKBOX,
        label: d,
        required: !1,
        options: [
            "Yes",
            "No"
        ],
        $label: c,
        $checkboxs: [
            e1
        ]
    } : null;
}
_c25 = Z;
function ee(e1, t, r1, n) {
    let o = Array.from(e1.querySelectorAll("select")).find((t)=>!t.disabled && _(t, e1));
    if (!o) return null;
    let a = q(e1, o), l = N(o), s = a || o;
    return ($(l) && console.info(`[BrassRingAutofill] binary-select-rule-extracted ${JSON.stringify({
        label: t,
        required: n,
        id: o.id,
        name: o.name,
        options: l,
        hasSelectmenuButton: !!(o.id && document.getElementById(`${o.id}-button`))
    })}`), o.multiple || o.classList.contains("multiselect")) ? {
        type: i.FIELD_TYPE.MULTI_SELECT,
        label: t,
        required: n,
        options: l,
        $input: s,
        $label: r1
    } : a ? {
        type: i.FIELD_TYPE.SEARCH,
        label: t,
        required: n,
        options: l,
        $input: a,
        $label: r1
    } : {
        type: i.FIELD_TYPE.SELECT,
        label: t,
        required: n,
        options: l,
        $input: s,
        $label: r1
    };
}
function et(e1, t, r1, n) {
    let o = Array.from(e1.querySelectorAll("textarea, input:not([type='hidden']):not([type='file']):not([type='radio']):not([type='checkbox']):not([type='button']):not([type='submit'])")).find((t)=>!(t.disabled || !_(t, e1) || t instanceof HTMLInputElement && (t.classList.contains("ui-search-widget") || t.name?.startsWith("visible-input-") || t.id?.endsWith("-input") || "password" === t.type)) && E(t));
    if (!o) return null;
    let a = o instanceof HTMLInputElement ? o.placeholder : "", l = e1.classList.contains("datefield") || o.classList.contains("datestring") || o.classList.contains("hasDatepicker") || !!o.closest("[datepicker]") || /^(m|mm|d|dd|y|yy|yyyy)[m/dy/-]*$/i.test(a) || /\bdate\b/i.test(t), s = {
        type: l ? i.FIELD_TYPE.DATE : i.FIELD_TYPE.TEXT,
        label: t,
        required: n,
        $input: o,
        $label: r1
    };
    if ("MMM-YYYY" === a || o.classList.contains("monthyear") || o.classList.contains("monthYear") || /year\/month|month\/year/i.test(t)) s.description = h(a || "MMM-YYYY", {
        monthPicker: !0
    });
    else if (/^gpa$/i.test(t.trim())) s.description = f;
    else if (l) {
        let r1 = a ? a.toUpperCase().replace(/Y+/g, "YYYY") : "M/D/YYYY", n = x(e1.querySelector(".error, [class*='error']")), o = /today/i.test(t) ? "Return today's date" : "";
        s.description = [
            h(r1),
            P(e1, t) ? p : "",
            o.trim(),
            n
        ].filter(Boolean).join(". ");
    }
    return s;
}
function er(e1) {
    if (!E(e1) || e1.closest(l)) return null;
    let t = C(e1), r1 = A(e1);
    if (!t || !r1 || /captcha|verification code/i.test(r1) || j(e1, r1)) return null;
    let n = D(e1), o = ee(e1, r1, t, n) || et(e1, r1, t, n) || Q(e1, r1, t, n);
    return o ? (o.label = T(o.label, o.$input), o) : null;
}
function en(e1) {
    return e1.$input || null;
}
function eo(e1) {
    return en(e1)?.getAttribute("dbfieldname") || "";
}
function ei(e1) {
    return !!e1.closest(`${u}, ${c}`);
}
function ea(e1) {
    return e1.replace(/\s+/g, " ").trim().toLowerCase();
}
function el(e1, t) {
    let r1 = eo(e1), n = ea(e1.label);
    return r1.toLowerCase() === `employer${t}`.toLowerCase() || r1.toLowerCase() === `employer${t}jobtitle`.toLowerCase() || "employer" === n || "job title" === n || "from" === n || "to" === n;
}
function es(e1, t, r1, n) {
    return 0 === n.length ? null : {
        type: e1,
        label: t,
        required: n.some((e1)=>e1.required),
        $input: r1,
        children: n,
        options: eu(n)
    };
}
function eu(e1) {
    return e1.map((e1)=>({
            label: e1.label,
            type: e1.type,
            options: e1.options,
            ...e1.description ? {
                description: e1.description
            } : {}
        }));
}
async function ec(e1) {
    await K(e1);
    let t = e1.children;
    if (Array.isArray(t)) {
        for (let e1 of t)await ec(e1);
        e1.options = eu(t);
    }
}
function ed() {
    let e1 = Array.from(document.querySelectorAll(a)).filter((e1)=>!ei(e1)).map((e1)=>({
            field: e1,
            rule: er(e1)
        })).filter((e1)=>!!e1.rule), t = e1.map((e1, t)=>({
            index: t,
            slotIndex: eo(e1.rule).match(v)?.[1]
        })).filter((e1)=>!!e1.slotIndex);
    return t.map((r1, n)=>{
        let o = t[n + 1]?.index ?? e1.length, i = e1.slice(r1.index, o).filter((e1)=>el(e1.rule, r1.slotIndex)), a = i.some((e1)=>eo(e1.rule).match(v)?.[1] === r1.slotIndex), l = i.some((e1)=>eo(e1.rule).match(w)?.[1] === r1.slotIndex);
        return a && l ? {
            fields: i.map((e1)=>e1.field),
            children: i.map((e1)=>e1.rule)
        } : null;
    }).filter((e1)=>!!e1);
}
function ef() {
    return new Set(ed().flatMap((e1)=>e1.fields));
}
function ep(e1) {
    let t = ed(), r1 = "number" == typeof e1 ? t.slice(0, e1) : t;
    return r1.map((e1)=>es(i.FIELD_TYPE.EMPLOYMENT, "Work Experience", en(e1.children[0]) || void 0, e1.children)).filter(Boolean);
}
function em(e1) {
    let t = "education" === e1 ? u : c;
    return Array.from(document.querySelectorAll(t)).filter(E);
}
function eh(e1, t, r1) {
    let n = Array.from(e1.querySelectorAll(a)).map(er).filter((e1)=>!!e1), o = new Set;
    n.forEach((e1)=>{
        e1.type === i.FIELD_TYPE.CHECKBOX && Array.isArray(e1.$checkboxs) && e1.$checkboxs.forEach((e1)=>o.add(e1));
    });
    let l = Array.from(e1.querySelectorAll("input[type='checkbox']")).filter((e1)=>!e1.disabled && !o.has(e1)).map(Z).filter((e1)=>!!e1), s = [
        ...n,
        ...l
    ];
    return es(t, r1, e1, s);
}
function eg(e1, t) {
    let r1 = "education" === e1 ? i.FIELD_TYPE.EDUCATION : i.FIELD_TYPE.EMPLOYMENT, n = "education" === e1 ? "Education" : "Work Experience", o = em(e1);
    if ("experience" === e1 && 0 === o.length) return ep(t);
    let a = "number" == typeof t ? o.slice(0, t) : o;
    return a.map((e1)=>eh(e1, r1, n)).filter(Boolean);
}
async function eb() {
    let e1 = Array.from(document.querySelectorAll(a)), t = ef(), r1 = [], n = new Set;
    for (let o of e1){
        if (ei(o) || t.has(o)) continue;
        let e1 = er(o);
        if (!e1) continue;
        await K(e1);
        let i = e1.$input;
        i && n.has(i) || (i && n.add(i), r1.push(e1));
    }
    let o = eg("education", 1);
    for (let e1 of o)await ec(e1);
    r1.push(...o);
    let i = eg("experience", 1);
    for (let e1 of i)await ec(e1);
    return r1.push(...i), r1;
}
function ey() {
    return eg("education");
}
function ev() {
    return eg("experience");
}
function ew(e1) {
    let t = em("education")[e1];
    return t ? eh(t, i.FIELD_TYPE.EDUCATION, "Education") : null;
}
function eS(e1) {
    let t = em("experience")[e1];
    return t ? eh(t, i.FIELD_TYPE.EMPLOYMENT, "Work Experience") : ep()[e1] || null;
}
function eE(e1) {
    return Array.from(e1.selectedOptions).map((e1)=>x(e1) || e1.label || e1.value).map((e1)=>e1.trim()).filter(L);
}
function ex(e1) {
    let t = e1.cloneNode(!0);
    return t.querySelectorAll("button, a, [role='button'], .ui-icon").forEach((e1)=>e1.remove()), x(t).replace(/\bRemove selection\b.*$/i, "").replace(/\s+/g, " ").trim();
}
function eC(e1) {
    return Array.from(e1.querySelectorAll(a)).filter((e1)=>E(e1));
}
function eA(e1) {
    let t = {}, r1 = new Set(eC(e1).flatMap((e1)=>Array.from(e1.querySelectorAll("input[type='checkbox']"))).filter((e1)=>_(e1, e1.closest(a)))), n = Array.from(e1.querySelectorAll("input[type='checkbox']")).filter((e1)=>!e1.disabled && !r1.has(e1));
    for (let e1 of n){
        let r1 = Z(e1);
        r1?.label && (t[r1.label] = !!e1.checked && (J(e1) || "Yes"));
    }
    return t;
}
function ek(e1) {
    let t = {};
    for (let r1 of eC(e1)){
        let e1 = er(r1)?.label || A(r1);
        e1 && (t[e1] = eH(r1));
    }
    return {
        ...t,
        ...eA(e1)
    };
}
function eT(e1) {
    let t = e1.cloneNode(!0);
    return t.querySelectorAll("button, a, input, textarea, select, .requiredFieldIndicator").forEach((e1)=>e1.remove()), x(t);
}
function eF(e1) {
    return x(e1.querySelector("h1, h2, h3, h4, [role='heading']"));
}
function eI(e1, t, r1) {
    let n = r1.length ? `(?=\\b(?:${r1.map(ej).join("|")})\\b|$)` : "$", o = e1.match(RegExp(`${ej(t)}\\s*:?\\s*(.*?)\\s*${n}`, "i"));
    return o?.[1]?.trim() || "";
}
function ej(e1) {
    return e1.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function eD(e1) {
    return Object.fromEntries(Object.entries(e1).filter(([, e1])=>Array.isArray(e1) ? e1.length > 0 : "" !== e1 && null != e1));
}
function eP(e1) {
    return k(e1) === k(m);
}
function e_(e1) {
    let t = Array.isArray(e1) ? e1 : [
        e1
    ];
    for (let e1 of t){
        if (!0 === e1) return "Yes";
        if (!1 === e1 || null == e1) continue;
        let t = k(String(e1));
        if ("yes" === t || "checked" === t || "true" === t || t === k(m)) return "Yes";
    }
    return "";
}
function eL(e1) {
    let t = {
        ...e1
    };
    for (let [r1, n] of Object.entries(e1)){
        if (!eP(r1)) continue;
        let e1 = e_(n);
        delete t[r1], e1 && (t[m] = e1);
    }
    return eD(t);
}
function eR(e1, t) {
    return x(e1.querySelector(t));
}
function eO(e1, t) {
    let r1 = eC(e1).find((e1)=>A(e1).toLowerCase() === t.toLowerCase());
    if (!r1) return "";
    let n = r1.cloneNode(!0);
    return n.querySelectorAll("label, button, a, input, textarea, select, .requiredFieldIndicator").forEach((e1)=>e1.remove()), x(n).replace(/^:\s*/, "").trim();
}
function eM(e1) {
    return Array.from(e1.querySelectorAll(".mostRecentStaticText, [ng-if*='MostRecent']")).some((e1)=>E(e1) && /most recent/i.test(x(e1)));
}
function eN(e1) {
    let t = eT(e1), r1 = [
        "Graduation year",
        "Major area of study",
        "Degree",
        "GPA"
    ];
    return eD({
        "School / Educational institution": eR(e1, ":scope > li.institution h4") || eF(e1),
        "Graduation year": eO(e1, "Graduation year") || eI(t, "Graduation year", r1.slice(1)),
        "Major area of study": eO(e1, "Major area of study") || eI(t, "Major area of study", [
            "Degree",
            "GPA"
        ]),
        Degree: eO(e1, "Degree") || eI(t, "Degree", [
            "GPA"
        ]),
        GPA: eO(e1, "GPA") || eI(t, "GPA", []),
        "This is my most recent education": eM(e1) ? "Yes" : ""
    });
}
function e$(e1) {
    let t = e1.querySelector(":scope > li.topParagraph.populated p[align-labels], :scope > li.topParagraph.populated p");
    if (!t) return {
        start: "",
        end: ""
    };
    let r1 = Array.from(t.querySelectorAll("span.fieldcontain")).map(x).filter(Boolean), n = eR(e1, ":scope > li.topParagraph [ng-if*='MostRecent']") || eR(e1, ":scope > li.topParagraph .mostRecent") || eR(e1, ":scope > li.topParagraph .current");
    return {
        start: r1[0] || "",
        end: r1[1] || (/most recent|present|current/i.test(n) ? n : "")
    };
}
function eB(e1) {
    let t = e$(e1), r1 = eO(e1, "Responsibilities") || eI(eT(e1), "Responsibilities", [
        "Reason for Leaving"
    ]);
    return eD({
        Company: eR(e1, ":scope > li.institution h4") || eF(e1),
        "Job title": eR(e1, ":scope > li.topParagraph.populated > div.fieldcontain span.ng-binding"),
        "Start Year/month": t.start,
        "End Year/month": t.end,
        Responsibilities: r1,
        "Reason for Leaving": eO(e1, "Reason for Leaving")
    });
}
function eq(e1, t) {
    let r1 = ek(e1), n = "education" === t ? eN(e1) : eB(e1), o = Object.keys(r1).length > 0 ? eD({
        ...n,
        ...eD(r1)
    }) : n;
    return "education" === t ? eL(o) : o;
}
function eU(e1) {
    let t = em(e1);
    return "experience" === e1 && 0 === t.length ? ed().map((e1)=>{
        let t = {};
        for (let r1 of e1.fields){
            let e1 = er(r1)?.label || A(r1);
            e1 && (t[e1] = eH(r1));
        }
        return eD(t);
    }).filter((e1)=>Object.keys(e1).length > 0) : t.map((t)=>eq(t, e1)).filter((e1)=>Object.keys(e1).length > 0);
}
function eH(e1) {
    let t = Array.from(e1.querySelectorAll("input[type='radio']")).filter((t)=>_(t, e1));
    if (t.length > 0) {
        let e1 = t.find((e1)=>e1.checked);
        return e1 ? X(e1) : "";
    }
    let r1 = Array.from(e1.querySelectorAll("input[type='checkbox']")).filter((t)=>_(t, e1));
    if (r1.length > 0) {
        let e1 = r1.filter((e1)=>e1.checked).map(J).filter(Boolean);
        return 1 === r1.length ? e1[0] || !1 : e1;
    }
    let n = Array.from(e1.querySelectorAll("select")).find((t)=>_(t, e1)) || null;
    if (n) {
        if (n.multiple) {
            let t = Array.from(e1.querySelectorAll(".selectionList li, [id$='_selection-list'] li")).map(ex).filter(Boolean);
            return t.length > 0 ? t : eE(n);
        }
        let t = q(e1, n), r1 = eE(n)[0] || "", o = t?.value?.trim() || "";
        return r1 || (L(o) ? o : "");
    }
    let o = Array.from(e1.querySelectorAll("textarea, input:not([type='hidden']):not([type='file']):not([type='radio']):not([type='checkbox']):not([type='button']):not([type='submit'])")).find((t)=>_(t, e1)) || null;
    return o?.value?.trim() || "";
}
async function eY() {
    let e1 = {}, t = eC(document), r1 = ef();
    for (let n of t){
        if (ei(n) || r1.has(n)) continue;
        let t = er(n);
        if (!t) continue;
        let o = t.label;
        j(n, o) || (e1[o] = eH(n));
    }
    let n = eU("education");
    n.length > 0 && (e1.education = n);
    let o = eU("experience");
    return o.length > 0 && (e1.employment = o), e1;
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25;
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
$RefreshReg$(_c16, "H");
$RefreshReg$(_c17, "Y");
$RefreshReg$(_c18, "V");
$RefreshReg$(_c19, "W");
$RefreshReg$(_c20, "G");
$RefreshReg$(_c21, "K");
$RefreshReg$(_c22, "X");
$RefreshReg$(_c23, "J");
$RefreshReg$(_c24, "Q");
$RefreshReg$(_c25, "Z");

},{}]},["kfMMD","fJQPK"], "fJQPK", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFnQixLQUFLO1FBQUM7UUFBRTtLQUFFLEdBQUUsQ0FBQyxLQUFHLEVBQUUsT0FBSyxFQUFFLElBQUksaUJBQWlCLFNBQVEsQ0FBQSxFQUFFLGVBQWUsS0FBSztRQUFDO1FBQUU7S0FBRSxHQUFFLENBQUMsQ0FBQSxJQUFHLENBQUM7QUFBQztBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBQyxTQUFRLENBQUMsRUFBQyxHQUFDO0lBQUUsT0FBTyxJQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFDLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxDQUFDO0lBQUUsSUFBRyxFQUFFLFNBQU8sUUFBTSxPQUFPLFdBQVMsS0FBSSxPQUFPLElBQUksUUFBUSxDQUFDLEdBQUU7UUFBSyxJQUFJLElBQUUsU0FBUyxjQUFjO1FBQVUsRUFBRSxNQUFJLENBQUMsRUFBRSxFQUFFLElBQUksR0FBRyxFQUFFLEtBQUssTUFBTSxDQUFDLEVBQUMsRUFBRSxpQkFBZSxjQUFhLENBQUEsRUFBRSxPQUFLLFFBQU8sR0FBRyxFQUFFLGlCQUFpQixRQUFPLElBQUksRUFBRSxLQUFJLEVBQUUsaUJBQWlCLFNBQVEsSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLDBCQUEwQixFQUFFLEVBQUUsR0FBRyxDQUFDLEtBQUksU0FBUyxNQUFNLFlBQVk7SUFBRTtBQUFFO0FBQUMsZUFBZSxFQUFFLENBQUM7SUFBRSxPQUFPLGtCQUFnQixPQUFPLE9BQU8sT0FBTSxFQUFFLFFBQVEsQ0FBQTtRQUFJLEVBQUUsTUFBSSxFQUFFLFFBQVEsT0FBTywrQkFBNkIsbUJBQW1CLENBQUMsRUFBRSxFQUFFLElBQUksR0FBRyxFQUFFLEtBQUssTUFBTSxDQUFDO0lBQUU7SUFBRyxJQUFJLElBQUUsTUFBTSxRQUFRLElBQUksRUFBRSxJQUFJO0lBQUssSUFBRztRQUFDLEVBQUUsUUFBUSxTQUFTLENBQUM7WUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1FBQUU7SUFBRSxTQUFRO1FBQUMsT0FBTyxPQUFPLGlCQUFnQixLQUFHLEVBQUUsUUFBUSxDQUFBO1lBQUksS0FBRyxTQUFTLE1BQU0sWUFBWTtRQUFFO0lBQUU7QUFBQztBQUFDLFNBQVMsR0FBRyxDQUFDO0lBQUUsSUFBSSxJQUFFLEVBQUU7SUFBWSxFQUFFLFNBQU87UUFBVyxFQUFFLGVBQWEsUUFBTSxFQUFFLFdBQVcsWUFBWTtJQUFFLEdBQUUsRUFBRSxhQUFhLFFBQU8sRUFBRSxhQUFhLFFBQVEsTUFBTSxJQUFJLENBQUMsRUFBRSxHQUFDLE1BQUksS0FBSyxRQUFPLEVBQUUsV0FBVyxhQUFhLEdBQUUsRUFBRTtBQUFZO0FBQUMsSUFBSSxJQUFFO0FBQUssU0FBUztJQUFLLEtBQUksQ0FBQSxJQUFFLFdBQVc7UUFBVyxJQUFJLElBQUUsU0FBUyxpQkFBaUI7UUFBMEIsSUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJO1lBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxTQUFRLElBQUUsS0FBSSxJQUFFLE1BQUksY0FBWSxJQUFJLE9BQU8sbURBQWlELEtBQUssS0FBSyxLQUFHLEVBQUUsUUFBUSxJQUFFLE1BQUk7WUFBSyxnQkFBZ0IsS0FBSyxNQUFJLEVBQUUsUUFBUSxTQUFTLFlBQVUsS0FBRyxDQUFDLEtBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUFDO1FBQUMsSUFBRTtJQUFJLEdBQUUsR0FBRTtBQUFFO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLEdBQUU7UUFBQyxJQUFHLEVBQUUsU0FBTyxPQUFNO2FBQVUsSUFBRyxFQUFFLFNBQU8sTUFBSztZQUFDLElBQUksSUFBRSxFQUFFLFlBQVksQ0FBQyxFQUFFLGNBQWM7WUFBQyxJQUFHLEdBQUU7Z0JBQUMsSUFBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUM7b0JBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFO29CQUFDLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBRyxDQUFDLENBQUMsRUFBRSxFQUFDO3dCQUFDLElBQUksSUFBRSxDQUFDLENBQUMsRUFBRTt3QkFBQyxFQUFFLE9BQU8sT0FBTyxNQUFLLEdBQUcsV0FBUyxLQUFHLEVBQUUsT0FBTyxPQUFPLE1BQUs7b0JBQUU7Z0JBQUM7Z0JBQUMsSUFBSSxJQUFFLE9BQU8sZUFBZSxDQUFDLEVBQUUsR0FBRztnQkFBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUM7b0JBQUM7b0JBQUU7aUJBQUU7WUFBQSxPQUFNLEVBQUUsVUFBUSxFQUFFLEVBQUUsUUFBTztRQUFFO0lBQUM7QUFBQztBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFO0lBQVEsSUFBRztRQUFFLElBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBQztZQUFDLElBQUksSUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxJQUFFLEVBQUU7WUFBQyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsT0FBTyxPQUFPLE1BQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxXQUFTLEtBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFDLEVBQUUsUUFBUSxDQUFBO2dCQUFJLEVBQUUsT0FBTyxPQUFPLE1BQUs7WUFBRTtRQUFFLE9BQU0sRUFBRSxVQUFRLEVBQUUsRUFBRSxRQUFPOztBQUFFO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBSSxJQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUU7SUFBQyxFQUFFLE9BQU8sQ0FBQyxFQUFFLEdBQUMsQ0FBQyxHQUFFLEtBQUcsRUFBRSxPQUFNLENBQUEsRUFBRSxJQUFJLE9BQUssRUFBRSxPQUFPLENBQUMsRUFBRSxBQUFELEdBQUcsS0FBRyxFQUFFLE9BQUssRUFBRSxJQUFJLGtCQUFrQixVQUFRLEVBQUUsSUFBSSxrQkFBa0IsUUFBUSxTQUFTLENBQUM7UUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUU7SUFBQyxJQUFHLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtBQUFBO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsRUFBRTtJQUFHLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsSUFBRyxLQUFHLEVBQUUsT0FBSyxFQUFFLElBQUksaUJBQWlCLFFBQU87UUFBQyxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSztRQUFHLEVBQUUsSUFBSSxpQkFBaUIsUUFBUSxTQUFTLENBQUM7WUFBRSxJQUFJLElBQUUsRUFBRSxJQUFJO1lBQUcsS0FBRyxFQUFFLFVBQVMsQ0FBQSxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUUsRUFBRTtnQkFBSSxFQUFFLEdBQUU7WUFBRSxJQUFHLEVBQUUsZUFBZSxLQUFLLE1BQU0sRUFBRSxnQkFBZSxFQUFDO1FBQUU7SUFBRTtBQUFDO0FBQUMsU0FBUyxHQUFHLElBQUUsR0FBRztJQUFFLElBQUksSUFBRTtJQUFJLE9BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBUSxTQUFTLGFBQVcsWUFBVSxDQUFDLDhCQUE4QixLQUFLLEtBQUcsUUFBTSxLQUFLLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUFBO0FBQUMsU0FBUyxHQUFHLENBQUM7SUFBRSxPQUFPLEVBQUUsV0FBUyxZQUFVLEVBQUUsOEJBQTRCLEVBQUU7QUFBUTtBQUFDLFNBQVMsRUFBRSxDQUFDO0lBQUUsSUFBRyxPQUFPLFdBQVcsWUFBVSxLQUFJO0lBQU8sSUFBSSxJQUFFLElBQUksVUFBVTtJQUFNLE9BQU8sRUFBRSxpQkFBaUIsV0FBVSxlQUFlLENBQUM7UUFBRSxJQUFJLElBQUUsS0FBSyxNQUFNLEVBQUU7UUFBTSxJQUFHLEVBQUUsU0FBTyxZQUFVLE1BQU0sRUFBRSxFQUFFLFNBQVEsRUFBRSxTQUFPLFNBQVEsS0FBSSxJQUFJLEtBQUssRUFBRSxZQUFZLEtBQUs7WUFBQyxJQUFJLElBQUUsRUFBRSxhQUFXLEVBQUU7WUFBTSxFQUFFLDhCQUE0QixFQUFFLFVBQVEsQ0FBQztBQUNyM0wsQ0FBQyxHQUFDLElBQUUsQ0FBQzs7QUFFTCxDQUFDLEdBQUMsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUNoQixDQUFDO1FBQUU7SUFBQyxJQUFHLEVBQUUsaUJBQWlCLFNBQVEsS0FBSSxFQUFFLGlCQUFpQixRQUFPO1FBQUssRUFBRSxDQUFDLHFEQUFxRCxFQUFFLEVBQUUsY0FBYyxDQUFDO0lBQUMsSUFBRyxFQUFFLGlCQUFpQixTQUFRO1FBQUssRUFBRSxDQUFDLG9FQUFvRSxFQUFFLEVBQUUsY0FBYyxDQUFDO0lBQUMsSUFBRztBQUFDO0FBQUMsSUFBSSxJQUFFLEVBQUUsUUFBUTtBQUEwQixlQUFlO0lBQUksRUFBRSxRQUFRLHFCQUFxQixTQUFRLE9BQU8sZUFBYSxZQUFXLEdBQUUsT0FBTyxlQUFhO1FBQVcsT0FBTyxTQUFTLENBQUM7WUFBRSxPQUFPO1FBQUM7SUFBQztBQUFDO0FBQUMsSUFBSSxLQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFDLEdBQUUsSUFBRSxPQUFPLE9BQU87QUFBTyxJQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsaUJBQWdCO0lBQUMsSUFBRztRQUFDLElBQUUsR0FBRyxRQUFRLFFBQVE7WUFBQyxNQUFLO1FBQUUsSUFBRyxFQUFFLGFBQWEsWUFBWTtZQUFLO1FBQUcsSUFBRyxFQUFFLFdBQVMsRUFBRSxVQUFVLFlBQVk7WUFBSztRQUFHO0lBQUUsRUFBQyxPQUFNLEdBQUU7UUFBQyxFQUFFO0lBQUU7SUFBQyxFQUFFLE9BQU07UUFBSSxJQUFHLEVBQUUsaUNBQWdDLEVBQUUsU0FBUTtZQUFDO1lBQUksSUFBSSxJQUFFLEVBQUUsT0FBTyxDQUFBLElBQUcsRUFBRSxZQUFVLEVBQUU7WUFBUyxJQUFHLEVBQUUsS0FBSyxDQUFBLElBQUcsRUFBRSxTQUFPLFNBQU8sRUFBRSxTQUFPLFFBQU0sRUFBRSxPQUFPLE9BQU8sTUFBSyxFQUFFLElBQUcsRUFBRSxnQkFBZSxJQUFHO2dCQUFDLE1BQU0sRUFBRTtnQkFBRyxJQUFJLElBQUUsQ0FBQztnQkFBRSxLQUFJLElBQUcsQ0FBQyxHQUFFLEVBQUUsSUFBRyxFQUFFLGdCQUFnQixDQUFDLENBQUMsRUFBRSxJQUFHLENBQUEsRUFBRSxHQUFFLElBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUE7Z0JBQUcsSUFBSSxJQUFFLENBQUM7Z0JBQUUsSUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsZUFBZSxRQUFPLElBQUk7b0JBQUMsSUFBRyxDQUFDLEdBQUUsRUFBRSxHQUFDLEVBQUUsY0FBYyxDQUFDLEVBQUU7b0JBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBRyxDQUFBLEVBQUUsR0FBRSxJQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFBO2dCQUFFO1lBQUMsRUFBQyxPQUFNLEdBQUU7Z0JBQUMsRUFBRSxZQUFVLFVBQVMsQ0FBQSxRQUFRLE1BQU0sSUFBRyxNQUFNLEtBQUssVUFBVSxHQUFFLEdBQUcsTUFBTSxFQUFFLENBQUM7WUFBRTtRQUFDLE9BQUs7WUFBQyxJQUFJLElBQUUsRUFBRSxPQUFPLENBQUEsSUFBRyxFQUFFLFlBQVUsRUFBRSxTQUFTLEtBQUssQ0FBQSxJQUFHLEVBQUUsT0FBTyxRQUFPLEVBQUU7WUFBSyxFQUFFLGtCQUFpQjtnQkFBQyxlQUFjO1lBQUMsSUFBRyxLQUFHLEVBQUUsWUFBWTtnQkFBQyx5QkFBd0IsQ0FBQztZQUFDO1FBQUU7SUFBQztBQUFFO0FBQUMsRUFBRSxXQUFVLENBQUEsRUFBRSw0QkFBMkIsR0FBRTs7O0FDSjMwQyxJQUFJLEtBQUcsT0FBTztBQUFPLElBQUksSUFBRSxPQUFPO0FBQWUsSUFBSSxLQUFHLE9BQU87QUFBeUIsSUFBSSxLQUFHLE9BQU87QUFBb0IsSUFBSSxLQUFHLE9BQU8sZ0JBQWUsS0FBRyxPQUFPLFVBQVU7QUFBZSxJQUFJLElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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RyxXQUFTLEtBQUcsU0FBTztBQUFDO0FBQUMsU0FBUyxHQUFHLEVBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLENBQUM7SUFBRSxPQUFPLE1BQUksRUFBRSxTQUFPLE9BQUs7UUFBQyxNQUFLO1FBQUUsT0FBTTtRQUFFLFVBQVMsRUFBRSxLQUFLLENBQUEsS0FBRyxHQUFFO1FBQVUsUUFBTztRQUFFLFVBQVM7UUFBRSxTQUFRLEdBQUc7SUFBRTtBQUFDO0FBQUMsU0FBUyxHQUFHLEVBQUM7SUFBRSxPQUFPLEdBQUUsSUFBSSxDQUFBLEtBQUksQ0FBQTtZQUFDLE9BQU0sR0FBRTtZQUFNLE1BQUssR0FBRTtZQUFLLFNBQVEsR0FBRTtZQUFRLEdBQUcsR0FBRSxjQUFZO2dCQUFDLGFBQVksR0FBRTtZQUFXLElBQUUsQ0FBQyxDQUFDO1FBQUEsQ0FBQTtBQUFHO0FBQUMsZUFBZSxHQUFHLEVBQUM7SUFBRSxNQUFNLEVBQUU7SUFBRyxJQUFJLElBQUUsR0FBRTtJQUFTLElBQUcsTUFBTSxRQUFRLElBQUc7UUFBQyxLQUFJLElBQUksTUFBSyxFQUFFLE1BQU0sR0FBRztRQUFHLEdBQUUsVUFBUSxHQUFHO0lBQUU7QUFBQztBQUFDLFNBQVM7SUFBSyxJQUFJLEtBQUUsTUFBTSxLQUFLLFNBQVMsaUJBQWlCLElBQUksT0FBTyxDQUFBLEtBQUcsQ0FBQyxHQUFHLEtBQUksSUFBSSxDQUFBLEtBQUksQ0FBQTtZQUFDLE9BQU07WUFBRSxNQUFLLEdBQUc7UUFBRSxDQUFBLEdBQUksT0FBTyxDQUFBLEtBQUcsQ0FBQyxDQUFDLEdBQUUsT0FBTSxJQUFFLEdBQUUsSUFBSSxDQUFDLElBQUUsSUFBSyxDQUFBO1lBQUMsT0FBTTtZQUFFLFdBQVUsR0FBRyxHQUFFLE1BQU0sTUFBTSxJQUFJLENBQUMsRUFBRTtRQUFBLENBQUEsR0FBSSxPQUFPLENBQUEsS0FBRyxDQUFDLENBQUMsR0FBRTtJQUFXLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBRTtRQUFLLElBQUksSUFBRSxDQUFDLENBQUMsSUFBRSxFQUFFLEVBQUUs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QUFNLElBQUUsTUFBTSxLQUFLLEdBQUUsaUJBQWlCLDJCQUEyQixPQUFPLENBQUEsS0FBRyxDQUFDLEdBQUUsWUFBVSxDQUFDLEdBQUUsSUFBSTtJQUFJLEtBQUksSUFBSSxNQUFLLEVBQUU7UUFBQyxJQUFJLEtBQUUsRUFBRTtRQUFHLElBQUcsU0FBUSxDQUFBLENBQUMsQ0FBQyxHQUFFLE1BQU0sR0FBQyxDQUFDLENBQUMsR0FBRSxXQUFVLENBQUEsRUFBRSxPQUFJLEtBQUksQ0FBQztJQUFFO0lBQUMsT0FBTztBQUFDO0FBQUMsU0FBUyxHQUFHLEVBQUM7SUFBRSxJQUFJLElBQUUsQ0FBQztJQUFFLEtBQUksSUFBSSxNQUFLLEdBQUcsSUFBRztRQUFDLElBQUksS0FBRSxHQUFHLEtBQUksU0FBTyxFQUFFO1FBQUcsTUFBSSxDQUFBLENBQUMsQ0FBQyxHQUFFLEdBQUMsR0FBRyxHQUFDO0lBQUU7SUFBQyxPQUFNO1FBQUMsR0FBRyxDQUFDO1FBQUMsR0FBRyxHQUFHLEdBQUU7SUFBQTtBQUFDO0FBQUMsU0FBUyxHQUFHLEVBQUM7SUFBRSxJQUFJLElBQUUsR0FBRSxVQUFVLENBQUM7SUFBRyxPQUFPLEVBQUUsaUJBQWlCLCtEQUErRCxRQUFRLENBQUEsS0FBRyxHQUFFLFdBQVUsRUFBRTtBQUFFO0FBQUMsU0FBUyxHQUFHLEVBQUM7SUFBRSxPQUFPLEVBQUUsR0FBRSxjQUFjO0FBQW9DO0FBQUMsU0FBUyxHQUFHLEVBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQztJQUFFLElBQUksSUFBRSxHQUFFLFNBQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRSxJQUFJLElBQUksS0FBSyxLQUFLLE9BQU8sQ0FBQyxHQUFDLEtBQUksSUFBRSxHQUFFLE1BQU0sT0FBTyxDQUFDLEVBQUUsR0FBRyxHQUFHLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxFQUFDO0lBQU0sT0FBTyxHQUFHLENBQUMsRUFBRSxFQUFFLFVBQVE7QUFBRTtBQUFDLFNBQVMsR0FBRyxFQUFDO0lBQUUsT0FBTyxHQUFFLFFBQVEsdUJBQXNCO0FBQU87QUFBQyxTQUFTLEdBQUcsRUFBQztJQUFFLE9BQU8sT0FBTyxZQUFZLE9BQU8sUUFBUSxJQUFHLE9BQU8sQ0FBQyxHQUFFLEdBQUUsR0FBRyxNQUFNLFFBQVEsTUFBRyxHQUFFLFNBQU8sSUFBRSxPQUFLLE1BQUcsUUFBTTtBQUFHO0FBQUMsU0FBUyxHQUFHLEVBQUM7SUFBRSxPQUFPLEVBQUUsUUFBSyxFQUFFO0FBQUU7QUFBQyxTQUFTLEdBQUcsRUFBQztJQUFFLElBQUksSUFBRSxNQUFNLFFBQVEsTUFBRyxLQUFFO1FBQUM7S0FBRTtJQUFDLEtBQUksSUFBSSxNQUFLLEVBQUU7UUFBQyxJQUFHLENBQUMsTUFBSSxJQUFFLE9BQU07UUFBTSxJQUFHLENBQUMsTUFBSSxNQUFHLFFBQU0sSUFBRTtRQUFTLElBQUksSUFBRSxFQUFFLE9BQU87UUFBSSxJQUFHLFVBQVEsS0FBRyxjQUFZLEtBQUcsV0FBUyxLQUFHLE1BQUksRUFBRSxJQUFHLE9BQU07SUFBSztJQUFDLE9BQU07QUFBRTtBQUFDLFNBQVMsR0FBRyxFQUFDO0lBQUUsSUFBSSxJQUFFO1FBQUMsR0FBRyxFQUFDO0lBQUE7SUFBRSxLQUFJLElBQUcsQ0FBQyxJQUFFLEVBQUUsSUFBRyxPQUFPLFFBQVEsSUFBRztRQUFDLElBQUcsQ0FBQyxHQUFHLEtBQUc7UUFBUyxJQUFJLEtBQUUsR0FBRztRQUFHLE9BQU8sQ0FBQyxDQUFDLEdBQUUsRUFBQyxNQUFJLENBQUEsQ0FBQyxDQUFDLEVBQUUsR0FBQyxFQUFBO0lBQUU7SUFBQyxPQUFPLEdBQUc7QUFBRTtBQUFDLFNBQVMsR0FBRyxFQUFDLEVBQUMsQ0FBQztJQUFFLE9BQU8sRUFBRSxHQUFFLGNBQWM7QUFBRztBQUFDLFNBQVMsR0FBRyxFQUFDLEVBQUMsQ0FBQztJQUFFLElBQUksS0FBRSxHQUFHLElBQUcsS0FBSyxDQUFBLEtBQUcsRUFBRSxJQUFHLGtCQUFnQixFQUFFO0lBQWUsSUFBRyxDQUFDLElBQUUsT0FBTTtJQUFHLElBQUksSUFBRSxHQUFFLFVBQVUsQ0FBQztJQUFHLE9BQU8sRUFBRSxp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RTtRQUFNLEVBQUUsR0FBRSxNQUFLLENBQUEsRUFBQyxDQUFDLEVBQUUsR0FBQyxHQUFHLEVBQUM7SUFBRTtJQUFDLElBQUksSUFBRSxHQUFHO0lBQWEsRUFBRSxTQUFPLEtBQUksQ0FBQSxHQUFFLFlBQVUsQ0FBQTtJQUFHLElBQUksSUFBRSxHQUFHO0lBQWMsT0FBTyxFQUFFLFNBQU8sS0FBSSxDQUFBLEdBQUUsYUFBVyxDQUFBLEdBQUc7QUFBQyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtNjZhOGRkZjRlMGUxNTMwMy5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9zaXRlcy9icmFzc3JpbmcvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxcYnJhc3NyaW5nXFxcXHJ1bGVzLmpzXCIsXCJidW5kbGVJZFwiOlwiYzk4ODI4YjNhYzlkMzFhMlwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IDc5WnBHXHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy9icmFzc3JpbmcvcnVsZXMuanNcclxuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgQHBsYXNtb2hxL21lc3NhZ2luZyAtPiA5Mkd5QiAgPT4gIEBwbGFzbW9ocS9tZXNzYWdpbmcuanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqL1xyXG5cclxudmFyIG49ZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7bi5kZWZpbmVJbnRlcm9wRmxhZyhyKSxuLmV4cG9ydChyLFwiQlJBU1NSSU5HX0dQQV9ERVNDUklQVElPTlwiLCgpPT5mKSxuLmV4cG9ydChyLFwiYnVpbGRCcmFzc3JpbmdEYXRlRm9ybWF0RGVzY3JpcHRpb25cIiwoKT0+aCksbi5leHBvcnQocixcImV4dHJhY3RSdWxlc1wiLCgpPT5lYiksbi5leHBvcnQocixcImdldEVkdWNhdGlvblJ1bGVzXCIsKCk9PmV5KSxuLmV4cG9ydChyLFwiZ2V0RXhwZXJpZW5jZVJ1bGVzXCIsKCk9PmV2KSxuLmV4cG9ydChyLFwiZ2V0RWR1Y2F0aW9uUnVsZVwiLCgpPT5ldyksbi5leHBvcnQocixcImdldEV4cGVyaWVuY2VSdWxlXCIsKCk9PmVTKSxuLmV4cG9ydChyLFwiZ2V0Rm9ybVNuYXBzaG90XCIsKCk9PmVZKTt2YXIgbz1lKFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiKSxpPWUoXCJ+Y29yZS9lbnVtc1wiKTtsZXQgYT1cIi5maWVsZGNvbnRhaW5cIixsPVwiI3Jlc3VtZXdpZGdldC5yZXN1bWVzZWN0aW9uXCIscz1cIiNBdHRhY2hlbWVudENhdGFnb3J5XCIsdT1cInVsLmVkdWNhdGlvbkxpc3QsIHVsW2NsYXNzKj0nZWR1Y2F0aW9uTGlzdCddLCB1bFthcmlhLWxhYmVsXj0nRWR1Y2F0aW9uIGhpc3RvcnknXVwiLGM9XCJ1bC5leHBlcmllbmNlTGlzdCwgdWxbY2xhc3MqPSdleHBlcmllbmNlTGlzdCddLCB1bFthcmlhLWxhYmVsXj0nV29yayBleHBlcmllbmNlJ10sIHVsW2FyaWEtbGFiZWxePSdFeHBlcmllbmNlJ11cIixkPVwiLmltbWVyc2l2ZS10cmFuc2xhdGUtdGFyZ2V0LXdyYXBwZXIsIFtkYXRhLWltbWVyc2l2ZS10cmFuc2xhdGUtdHJhbnNsYXRpb24tZWxlbWVudC1tYXJrXVwiLGY9XCJSZXR1cm4gR1BBIGFzIG51bWJlcnMgb25seSwgZm9yIGV4YW1wbGUgMy44OC4gRG8gbm90IGluY2x1ZGUgYSBkZW5vbWluYXRvciBzdWNoIGFzIC80LjAwLlwiLHA9XCJUaGlzIGlzIHRoZSBzaWduYXR1cmUgZGF0ZSBmb3IgVm9sdW50YXJ5IFNlbGYtSWRlbnRpZmljYXRpb24gb2YgRGlzYWJpbGl0eS4gUmV0dXJuIHRvZGF5J3MgZGF0ZS5cIixtPVwiVGhpcyBpcyBteSBtb3N0IHJlY2VudCBlZHVjYXRpb25cIjtmdW5jdGlvbiBoKGUsdD17fSl7bGV0IHI9ZS50cmltKCl8fFwiTS9EL1lZWVlcIixuPXQubW9udGhQaWNrZXI/XCJVc2UgdGhlIG9wZW5lZCBtb250aCBwaWNrZXIuXCI6XCJVc2UgdGhlIG9wZW5lZCBkYXRlIHBpY2tlci5cIjtyZXR1cm5gJHtufSBSZXR1cm4gdGhlIHZhbHVlIGluICR7cn0gZm9ybWF0LmB9bGV0IGc9bmV3IFNldChbXCJjaG9vc2UuLi5cIixcInBsYWNlaG9sZGVyX2Nob29zZVwiLFwic2VsZWN0XCIsXCJzZWxlY3Qgb25lXCIsXCItIHNlbGVjdCAtXCIsXCItLSBzZWxlY3QgLS1cIixcIm5vIG1hdGNoZXNcIl0pLGI9MWUzLHk9bmV3IFNldChbXCJtYWpvciBhcmVhIG9mIHN0dWR5XCIsXCJyZXNwb25zaWJpbGl0aWVzXCJdKSx2PS9eRW1wbG95ZXIoXFxkKykkL2ksdz0vXkVtcGxveWVyKFxcZCspSm9iVGl0bGUkL2k7ZnVuY3Rpb24gUyhlKXtyZXR1cm4gbmV3IFByb21pc2UodD0+c2V0VGltZW91dCh0LGUpKX1mdW5jdGlvbiBFKGUpe2xldCB0PWU7Zm9yKDt0JiZ0IT09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Oyl7bGV0IGU9d2luZG93LmdldENvbXB1dGVkU3R5bGUodCk7aWYodC5oaWRkZW58fFwidHJ1ZVwiPT09dC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKXx8dC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIil8fHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuRmllbGRcIil8fHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKXx8XCJub25lXCI9PT1lLmRpc3BsYXl8fFwiaGlkZGVuXCI9PT1lLnZpc2liaWxpdHl8fFwiY29sbGFwc2VcIj09PWUudmlzaWJpbGl0eSlyZXR1cm4hMTt0PXQucGFyZW50RWxlbWVudH1yZXR1cm4hMH1mdW5jdGlvbiB4KGUpe2lmKCFlKXJldHVyblwiXCI7bGV0IHQ9ZS5jbG9uZU5vZGUoITApO3JldHVybiB0LnF1ZXJ5U2VsZWN0b3JBbGwoZCkuZm9yRWFjaChlPT5lLnJlbW92ZSgpKSwodC50ZXh0Q29udGVudHx8XCJcIikucmVwbGFjZSgvXFwqL2csXCJcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCl9ZnVuY3Rpb24gQyhlKXtyZXR1cm4gZS5xdWVyeVNlbGVjdG9yKFwibGFiZWwuTGlzdFZpZXcsIGxhYmVsW2lkJD0nLWxhYmVsJ10sIGxhYmVsXCIpfWZ1bmN0aW9uIEEoZSl7cmV0dXJuIHgoQyhlKSl9ZnVuY3Rpb24gayhlKXtyZXR1cm4gZS5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLFwiJDEgJDJcIikucmVwbGFjZSgvW18tXSsvZyxcIiBcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCkudG9Mb3dlckNhc2UoKX1mdW5jdGlvbiBUKGUsdCl7aWYoIXR8fC9cXGJvdGhlclxcYi9pLnRlc3QoZSkpcmV0dXJuIGU7bGV0IHI9ayhlKTtpZighcilyZXR1cm4gZTtsZXQgbj1bdC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpLHQuZ2V0QXR0cmlidXRlKFwidGl0bGVcIiksdC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpLHQuZ2V0QXR0cmlidXRlKFwiZGJmaWVsZG5hbWVcIiksdC5pZF0ubWFwKGU9PmsoZXx8XCJcIikpLnNvbWUoZT0+L1xcYm90aGVyXFxiL2kudGVzdChlKSYmZS5pbmNsdWRlcyhyKSk7cmV0dXJuIG4/YCR7ZX0gb3RoZXJgOmV9ZnVuY3Rpb24gRihlLHQpe3JldHVybiB5Lmhhcyh0LnRyaW0oKS50b0xvd2VyQ2FzZSgpKSYmIWUuY2xvc2VzdChgJHt1fSwgJHtjfWApfWZ1bmN0aW9uIEkoZSl7cmV0dXJuISFlLnF1ZXJ5U2VsZWN0b3Iocyl9ZnVuY3Rpb24gaihlLHQpe3JldHVybiBGKGUsdCl8fEkoZSl9ZnVuY3Rpb24gRChlKXtyZXR1cm4hIWUucXVlcnlTZWxlY3RvcihcIi5yZXF1aXJlZEZpZWxkSW5kaWNhdG9yXCIpfHwhIWUucXVlcnlTZWxlY3RvcihcIlthcmlhLXJlcXVpcmVkPSd0cnVlJ10sIC5yZXF1aXJlZCwgW3JlcXVpcmVkXVwiKX1mdW5jdGlvbiBQKGUsdCl7aWYoIS9eZGF0ZSQvaS50ZXN0KHQudHJpbSgpKSlyZXR1cm4hMTtsZXQgcj1lLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7Zm9yKGxldCBlPTA7ciYmZTw2O2UrKyl7aWYoeChyKS5pbmNsdWRlcyhcIlZvbHVudGFyeSBTZWxmLUlkZW50aWZpY2F0aW9uIG9mIERpc2FiaWxpdHlcIikpcmV0dXJuITA7cj1yLnByZXZpb3VzRWxlbWVudFNpYmxpbmd9cmV0dXJuITF9ZnVuY3Rpb24gXyhlLHQpe3JldHVybiBlLmNsb3Nlc3QoYSk9PT10fWZ1bmN0aW9uIEwoZSl7bGV0IHQ9ZS50cmltKCkudG9Mb3dlckNhc2UoKTtyZXR1cm4hIXQmJiFnLmhhcyh0KX1mdW5jdGlvbiBSKGUpe3JldHVybiBBcnJheS5mcm9tKGUub3B0aW9ucykuc29tZShlPT57bGV0IHQ9TShlKS50cmltKCkudG9Mb3dlckNhc2UoKTtyZXR1cm4gZy5oYXModCl9KX1mdW5jdGlvbiBPKGUpe2xldCB0PW5ldyBTZXQscj1bXTtmb3IobGV0IG4gb2YgZSl7bGV0IGU9bi50cmltKCksbz1lLnRvTG93ZXJDYXNlKCk7IUwoZSl8fHQuaGFzKG8pfHwodC5hZGQobyksci5wdXNoKGUpKX1yZXR1cm4gcn1mdW5jdGlvbiBNKGUpe2xldCB0PXgoZSl8fGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKXx8ZS5sYWJlbHx8XCJcIjtpZih0LnRyaW0oKSlyZXR1cm4gdC50cmltKCk7bGV0IHI9ZS52YWx1ZS50cmltKCk7cmV0dXJuL15cXGQrJC8udGVzdChyKT9cIlwiOnJ9ZnVuY3Rpb24gTihlKXtyZXR1cm4gTyhBcnJheS5mcm9tKGUub3B0aW9ucykubWFwKE0pKX1mdW5jdGlvbiAkKGUpe2xldCB0PWUubWFwKGU9PmUudHJpbSgpLnRvTG93ZXJDYXNlKCkpO3JldHVybiAyPT09dC5sZW5ndGgmJnQuaW5jbHVkZXMoXCJ5ZXNcIikmJnQuaW5jbHVkZXMoXCJub1wiKX1mdW5jdGlvbiBCKGUpe2xldCB0PWsoZSkucmVwbGFjZSgvW1xcL10rL2csXCIgXCIpO3JldHVybltcInN0YXRlXCIsXCJwcm92aW5jZVwiLFwic3RhdGUgcHJvdmluY2VcIixcInN0YXRlIHJlZ2lvbiBwcm92aW5jZVwiLFwic3RhdGUgcmVnaW9uIHByb3ZpbmNlIGNvdW50eVwiLFwiY3VycmVudCBzdGF0ZVwiLFwiY3VycmVudCBwcm92aW5jZVwiLFwiY3VycmVudCBzdGF0ZSBwcm92aW5jZVwiXS5pbmNsdWRlcyh0KX1mdW5jdGlvbiBxKGUsdCl7bGV0IHI9dC5pZD9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0LmlkfS1pbnB1dGApOm51bGw7cmV0dXJuIHJ8fGUucXVlcnlTZWxlY3RvcihcImlucHV0LnVpLXNlYXJjaC13aWRnZXQsIGlucHV0LnVpLWF1dG9jb21wbGV0ZS1pbnB1dCwgaW5wdXRbbmFtZV49J3Zpc2libGUtaW5wdXQtJ11cIil9ZnVuY3Rpb24gVShlKXtsZXQgdD1lLmlkPy5lbmRzV2l0aChcIi1pbnB1dFwiKT9lLmlkLnNsaWNlKDAsLTYpOlwiXCI7cmV0dXJuIHQ/ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodCk6bnVsbH1mdW5jdGlvbiBIKGUpe2Uuc2Nyb2xsSW50b1ZpZXcoe2Jsb2NrOlwiY2VudGVyXCIsaW5saW5lOlwibmVhcmVzdFwifSksZS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2Vkb3duXCIse2J1YmJsZXM6ITB9KSksZS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2V1cFwiLHtidWJibGVzOiEwfSkpLGUuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIse2J1YmJsZXM6ITB9KSl9ZnVuY3Rpb24gWShlLHQscil7bGV0IG49W3IuZ2V0QXR0cmlidXRlKFwiYXJpYS1vd25zXCIpLHIuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKSxyLmlkP2Ake3IuaWR9X2xpc3Rib3hgOlwiXCIsdC5pZD9gJHt0LmlkfS1pbnB1dF9saXN0Ym94YDpcIlwiLHQuaWQ/YCR7dC5pZH0tbWVudWA6XCJcIl0uZmlsdGVyKGU9PiEhZSksbz1uLm1hcChlPT5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChlKSkuZmlsdGVyKGU9PiEhZSk7aWYoby5sZW5ndGg+MClyZXR1cm4gbztsZXQgaT1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcIi51aS1hdXRvY29tcGxldGUsIFtyb2xlPSdsaXN0Ym94J10sIHVsW2lkJD0nX2xpc3Rib3gnXVwiKSk7cmV0dXJuIGkubGVuZ3RoPjA/aTpBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudWktYXV0b2NvbXBsZXRlLnVpLWZyb250LCB1bC51aS1hdXRvY29tcGxldGUsIFtyb2xlPSdsaXN0Ym94J11cIikpLmZpbHRlcihFKX1mdW5jdGlvbiB6KGUsdCxyKXtsZXQgbj1ZKGUsdCxyKS5mbGF0TWFwKGU9PkFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwibGkudWktbWVudS1pdGVtLCAudWktbWVudS1pdGVtLXdyYXBwZXIsIFtyb2xlPSdvcHRpb24nXSwgbGlcIikpKTtyZXR1cm4gTyhuLm1hcChlPT54KGUucXVlcnlTZWxlY3RvcihcIi51aS1tZW51LWl0ZW0td3JhcHBlclwiKXx8ZSkpKX1mdW5jdGlvbiBWKGUpe2xldCB0PXdpbmRvdy5qUXVlcnl8fHdpbmRvdy4kO3RyeXt0Py5mbj8uYXV0b2NvbXBsZXRlJiZ0KGUpLmF1dG9jb21wbGV0ZShcImNsb3NlXCIpfWNhdGNoe31lLmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXlkb3duXCIse2tleTpcIkVzY2FwZVwiLGJ1YmJsZXM6ITB9KSksZS5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5dXBcIix7a2V5OlwiRXNjYXBlXCIsYnViYmxlczohMH0pKSxlLmJsdXIoKX1hc3luYyBmdW5jdGlvbiBXKGUpe2lmKCFlLmlkKXJldHVybiExO3RyeXtsZXQgdD1hd2FpdCAoMCxvLnNlbmRUb0JhY2tncm91bmQpKHtuYW1lOlwib3BlbkJyYXNzcmluZ0Z1bGxQYWdlQXV0b2NvbXBsZXRlXCIsYm9keTp7aW5wdXRJZDplLmlkfX0pO3JldHVybiB0Py5vcGVuZWQ9PT0hMH1jYXRjaHtyZXR1cm4hMX19YXN5bmMgZnVuY3Rpb24gRyhlLHQscixuPXt9KXtsZXQgbz0oKT0+e2xldCBvPW4uY2FwdHVyZU5hdGl2ZU9wdGlvbnM/Tih0KTpbXTtyZXR1cm4gby5sZW5ndGg+MT9vOnooZSx0LHIpfSxpPW8oKTtpZihpLmxlbmd0aD4wJiYhbi5mb3JjZVJlZnJlc2gpcmV0dXJuIGk7bGV0IGE9aS5tYXAoZT0+ZS50b0xvd2VyQ2FzZSgpKS5qb2luKFwiXFx4MDFcIiksbD1lLnF1ZXJ5U2VsZWN0b3IoXCIudWktaWNvbi10cmlhbmdsZS0xLXMsIFtuZy1jbGljayo9J2JsYW5rZXRTZWFyY2gnXVwiKSxzPXdpbmRvdy5qUXVlcnl8fHdpbmRvdy4kLHU9d2luZG93LnBhZ2VTaXplLGM9KCk9PntuLmZ1bGxQYWdlJiYod2luZG93LnBhZ2VTaXplPWIsci5wYWdlSW5kZXg9MCl9LGQ9KCk9PntuLmZ1bGxQYWdlJiYodm9pZCAwPT09dT9kZWxldGUgd2luZG93LnBhZ2VTaXplOndpbmRvdy5wYWdlU2l6ZT11KX07dHJ5e2xldCBlPSEhbi5mdWxsUGFnZSYmYXdhaXQgVyhyKTtpZighZSl7ci5mb2N1cygpO2xldCBlPWx8fHIsdD0oKT0+YygpO24uZnVsbFBhZ2U/KGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHQse2NhcHR1cmU6ITAsb25jZTohMH0pLGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdCx7Y2FwdHVyZTohMCxvbmNlOiEwfSkpOmMoKSxIKGUpLGx8fGMoKTt0cnl7IWwmJnM/LmZuPy5hdXRvY29tcGxldGUmJnMocikuYXV0b2NvbXBsZXRlKFwic2VhcmNoXCIsXCItMVwiKX1jYXRjaHt9fWxldCB0PVtdO2ZvcihsZXQgZT0wO2U8MTI7ZSsrKXthd2FpdCBTKDEwMCksdD1vKCk7bGV0IGU9dC5tYXAoZT0+ZS50b0xvd2VyQ2FzZSgpKS5qb2luKFwiXFx4MDFcIik7aWYodC5sZW5ndGg+MCYmKCFuLmZvcmNlUmVmcmVzaHx8ZSE9PWEpKWJyZWFrfXJldHVybiB0fWZpbmFsbHl7ZCgpLFYocil9fWFzeW5jIGZ1bmN0aW9uIEsoZSl7aWYoZS50eXBlIT09aS5GSUVMRF9UWVBFLlNFTEVDVCYmZS50eXBlIT09aS5GSUVMRF9UWVBFLk1VTFRJX1NFTEVDVCYmZS50eXBlIT09aS5GSUVMRF9UWVBFLlNFQVJDSClyZXR1cm47bGV0IHQ9ZSxyPXQuJGlucHV0O2lmKCFyKXJldHVybjtsZXQgbj1yIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQ/cjpyIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudD9VKHIpOm51bGwsbz1yLmNsb3Nlc3QoYSk7aWYoIW58fCFvfHx0LnR5cGUhPT1pLkZJRUxEX1RZUEUuU0VBUkNIJiYodC5vcHRpb25zfHxbXSkubGVuZ3RoPjAmJiFSKG4pKXJldHVybjtsZXQgbD1yIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudD9yOnEobyxuKTtpZighbClyZXR1cm47bGV0IHM9Qih0LmxhYmVsKSx1PXM/eihvLG4sbCkubGVuZ3RoOjAsYz1hd2FpdCBHKG8sbixsLHtmb3JjZVJlZnJlc2g6cyxmdWxsUGFnZTpzLGNhcHR1cmVOYXRpdmVPcHRpb25zOnN9KTtjLmxlbmd0aD4wJiYodC5vcHRpb25zPWMpLHMmJmNvbnNvbGUuaW5mbyhgW0JyYXNzUmluZ0F1dG9maWxsXSBzdGF0ZS1vcHRpb25zLWh5ZHJhdGVkICR7SlNPTi5zdHJpbmdpZnkoe2xhYmVsOnQubGFiZWwsc2VsZWN0SWQ6bi5pZCxpbml0aWFsUmVuZGVyZWRDb3VudDp1LG9wdGlvbkNvdW50OmMubGVuZ3RoLHJlcXVlc3RlZFBhZ2VTaXplOmJ9KX1gKX1mdW5jdGlvbiBYKGUpe2xldCB0PWUuaWQ/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtlLmlkfVwiXWApOm51bGwscj10fHxlLmNsb3Nlc3QoXCJsYWJlbFwiKSxuPXgocil8fHgoZS5uZXh0RWxlbWVudFNpYmxpbmcpfHxlLnZhbHVlO3JldHVybiBufWZ1bmN0aW9uIEooZSl7bGV0IHQ9ZS5pZD9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke2UuaWR9XCJdYCk6bnVsbCxyPXR8fGUuY2xvc2VzdChcImxhYmVsXCIpO3JldHVybiB4KHIpfHx4KGUubmV4dEVsZW1lbnRTaWJsaW5nKXx8ZS52YWx1ZXx8XCJZZXNcIn1mdW5jdGlvbiBRKGUsdCxyLG4pe2xldCBvPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT0ncmFkaW8nXVwiKSkuZmlsdGVyKHQ9PiF0LmRpc2FibGVkJiZfKHQsZSkpO2lmKG8ubGVuZ3RoPjApcmV0dXJue3R5cGU6aS5GSUVMRF9UWVBFLlJBRElPR1JPVVAsbGFiZWw6dCxyZXF1aXJlZDpuLG9wdGlvbnM6by5tYXAoWCkuZmlsdGVyKEJvb2xlYW4pLCRpbnB1dDpvWzBdLCRsYWJlbDpyLCRyYWRpb1BhcmVudDplfTtsZXQgYT1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIikpLmZpbHRlcih0PT4hdC5kaXNhYmxlZCYmXyh0LGUpKTtyZXR1cm4gYS5sZW5ndGg+MD97dHlwZTppLkZJRUxEX1RZUEUuQ0hFQ0tCT1gsbGFiZWw6dCxyZXF1aXJlZDpuLG9wdGlvbnM6MT09PWEubGVuZ3RoP1tcIlllc1wiLFwiTm9cIl06YS5tYXAoSikuZmlsdGVyKEJvb2xlYW4pLCRsYWJlbDpyLCRjaGVja2JveHM6YX06bnVsbH1mdW5jdGlvbiBaKGUpe2xldCB0PWUuaWQ/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtlLmlkfVwiXWApOm51bGwscj1lLmNsb3Nlc3QoXCJsYWJlbFwiKSxuPWUubmV4dEVsZW1lbnRTaWJsaW5nLG89ZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLGw9ZS5jbG9zZXN0KGEpLHM9bD9DKGwpOm51bGwsdT1lLnBhcmVudEVsZW1lbnQsYz10fHxyfHwoeChuKT9uOm51bGwpfHwoeChvKT9vOm51bGwpfHxzfHx1LGQ9eCh0KXx8eChyKXx8eChuKXx8eChvKXx8eChzKXx8eCh1KXx8ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpfHxlLnRpdGxlfHxlLnZhbHVlO3JldHVybiBjJiZkP3t0eXBlOmkuRklFTERfVFlQRS5DSEVDS0JPWCxsYWJlbDpkLHJlcXVpcmVkOiExLG9wdGlvbnM6W1wiWWVzXCIsXCJOb1wiXSwkbGFiZWw6YywkY2hlY2tib3hzOltlXX06bnVsbH1mdW5jdGlvbiBlZShlLHQscixuKXtsZXQgbz1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdFwiKSkuZmluZCh0PT4hdC5kaXNhYmxlZCYmXyh0LGUpKTtpZighbylyZXR1cm4gbnVsbDtsZXQgYT1xKGUsbyksbD1OKG8pLHM9YXx8bztyZXR1cm4oJChsKSYmY29uc29sZS5pbmZvKGBbQnJhc3NSaW5nQXV0b2ZpbGxdIGJpbmFyeS1zZWxlY3QtcnVsZS1leHRyYWN0ZWQgJHtKU09OLnN0cmluZ2lmeSh7bGFiZWw6dCxyZXF1aXJlZDpuLGlkOm8uaWQsbmFtZTpvLm5hbWUsb3B0aW9uczpsLGhhc1NlbGVjdG1lbnVCdXR0b246ISEoby5pZCYmZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7by5pZH0tYnV0dG9uYCkpfSl9YCksby5tdWx0aXBsZXx8by5jbGFzc0xpc3QuY29udGFpbnMoXCJtdWx0aXNlbGVjdFwiKSk/e3R5cGU6aS5GSUVMRF9UWVBFLk1VTFRJX1NFTEVDVCxsYWJlbDp0LHJlcXVpcmVkOm4sb3B0aW9uczpsLCRpbnB1dDpzLCRsYWJlbDpyfTphP3t0eXBlOmkuRklFTERfVFlQRS5TRUFSQ0gsbGFiZWw6dCxyZXF1aXJlZDpuLG9wdGlvbnM6bCwkaW5wdXQ6YSwkbGFiZWw6cn06e3R5cGU6aS5GSUVMRF9UWVBFLlNFTEVDVCxsYWJlbDp0LHJlcXVpcmVkOm4sb3B0aW9uczpsLCRpbnB1dDpzLCRsYWJlbDpyfX1mdW5jdGlvbiBldChlLHQscixuKXtsZXQgbz1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcInRleHRhcmVhLCBpbnB1dDpub3QoW3R5cGU9J2hpZGRlbiddKTpub3QoW3R5cGU9J2ZpbGUnXSk6bm90KFt0eXBlPSdyYWRpbyddKTpub3QoW3R5cGU9J2NoZWNrYm94J10pOm5vdChbdHlwZT0nYnV0dG9uJ10pOm5vdChbdHlwZT0nc3VibWl0J10pXCIpKS5maW5kKHQ9PiEodC5kaXNhYmxlZHx8IV8odCxlKXx8dCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQmJih0LmNsYXNzTGlzdC5jb250YWlucyhcInVpLXNlYXJjaC13aWRnZXRcIil8fHQubmFtZT8uc3RhcnRzV2l0aChcInZpc2libGUtaW5wdXQtXCIpfHx0LmlkPy5lbmRzV2l0aChcIi1pbnB1dFwiKXx8XCJwYXNzd29yZFwiPT09dC50eXBlKSkmJkUodCkpO2lmKCFvKXJldHVybiBudWxsO2xldCBhPW8gaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50P28ucGxhY2Vob2xkZXI6XCJcIixsPWUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGF0ZWZpZWxkXCIpfHxvLmNsYXNzTGlzdC5jb250YWlucyhcImRhdGVzdHJpbmdcIil8fG8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGFzRGF0ZXBpY2tlclwiKXx8ISFvLmNsb3Nlc3QoXCJbZGF0ZXBpY2tlcl1cIil8fC9eKG18bW18ZHxkZHx5fHl5fHl5eXkpW20vZHkvLV0qJC9pLnRlc3QoYSl8fC9cXGJkYXRlXFxiL2kudGVzdCh0KSxzPXt0eXBlOmw/aS5GSUVMRF9UWVBFLkRBVEU6aS5GSUVMRF9UWVBFLlRFWFQsbGFiZWw6dCxyZXF1aXJlZDpuLCRpbnB1dDpvLCRsYWJlbDpyfTtpZihcIk1NTS1ZWVlZXCI9PT1hfHxvLmNsYXNzTGlzdC5jb250YWlucyhcIm1vbnRoeWVhclwiKXx8by5jbGFzc0xpc3QuY29udGFpbnMoXCJtb250aFllYXJcIil8fC95ZWFyXFwvbW9udGh8bW9udGhcXC95ZWFyL2kudGVzdCh0KSlzLmRlc2NyaXB0aW9uPWgoYXx8XCJNTU0tWVlZWVwiLHttb250aFBpY2tlcjohMH0pO2Vsc2UgaWYoL15ncGEkL2kudGVzdCh0LnRyaW0oKSkpcy5kZXNjcmlwdGlvbj1mO2Vsc2UgaWYobCl7bGV0IHI9YT9hLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvWSsvZyxcIllZWVlcIik6XCJNL0QvWVlZWVwiLG49eChlLnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3IsIFtjbGFzcyo9J2Vycm9yJ11cIikpLG89L3RvZGF5L2kudGVzdCh0KT9cIlJldHVybiB0b2RheSdzIGRhdGVcIjpcIlwiO3MuZGVzY3JpcHRpb249W2gociksUChlLHQpP3A6XCJcIixvLnRyaW0oKSxuXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIi4gXCIpfXJldHVybiBzfWZ1bmN0aW9uIGVyKGUpe2lmKCFFKGUpfHxlLmNsb3Nlc3QobCkpcmV0dXJuIG51bGw7bGV0IHQ9QyhlKSxyPUEoZSk7aWYoIXR8fCFyfHwvY2FwdGNoYXx2ZXJpZmljYXRpb24gY29kZS9pLnRlc3Qocil8fGooZSxyKSlyZXR1cm4gbnVsbDtsZXQgbj1EKGUpLG89ZWUoZSxyLHQsbil8fGV0KGUscix0LG4pfHxRKGUscix0LG4pO3JldHVybiBvPyhvLmxhYmVsPVQoby5sYWJlbCxvLiRpbnB1dCksbyk6bnVsbH1mdW5jdGlvbiBlbihlKXtyZXR1cm4gZS4kaW5wdXR8fG51bGx9ZnVuY3Rpb24gZW8oZSl7cmV0dXJuIGVuKGUpPy5nZXRBdHRyaWJ1dGUoXCJkYmZpZWxkbmFtZVwiKXx8XCJcIn1mdW5jdGlvbiBlaShlKXtyZXR1cm4hIWUuY2xvc2VzdChgJHt1fSwgJHtjfWApfWZ1bmN0aW9uIGVhKGUpe3JldHVybiBlLnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpLnRvTG93ZXJDYXNlKCl9ZnVuY3Rpb24gZWwoZSx0KXtsZXQgcj1lbyhlKSxuPWVhKGUubGFiZWwpO3JldHVybiByLnRvTG93ZXJDYXNlKCk9PT1gZW1wbG95ZXIke3R9YC50b0xvd2VyQ2FzZSgpfHxyLnRvTG93ZXJDYXNlKCk9PT1gZW1wbG95ZXIke3R9am9idGl0bGVgLnRvTG93ZXJDYXNlKCl8fFwiZW1wbG95ZXJcIj09PW58fFwiam9iIHRpdGxlXCI9PT1ufHxcImZyb21cIj09PW58fFwidG9cIj09PW59ZnVuY3Rpb24gZXMoZSx0LHIsbil7cmV0dXJuIDA9PT1uLmxlbmd0aD9udWxsOnt0eXBlOmUsbGFiZWw6dCxyZXF1aXJlZDpuLnNvbWUoZT0+ZS5yZXF1aXJlZCksJGlucHV0OnIsY2hpbGRyZW46bixvcHRpb25zOmV1KG4pfX1mdW5jdGlvbiBldShlKXtyZXR1cm4gZS5tYXAoZT0+KHtsYWJlbDplLmxhYmVsLHR5cGU6ZS50eXBlLG9wdGlvbnM6ZS5vcHRpb25zLC4uLmUuZGVzY3JpcHRpb24/e2Rlc2NyaXB0aW9uOmUuZGVzY3JpcHRpb259Ont9fSkpfWFzeW5jIGZ1bmN0aW9uIGVjKGUpe2F3YWl0IEsoZSk7bGV0IHQ9ZS5jaGlsZHJlbjtpZihBcnJheS5pc0FycmF5KHQpKXtmb3IobGV0IGUgb2YgdClhd2FpdCBlYyhlKTtlLm9wdGlvbnM9ZXUodCl9fWZ1bmN0aW9uIGVkKCl7bGV0IGU9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGEpKS5maWx0ZXIoZT0+IWVpKGUpKS5tYXAoZT0+KHtmaWVsZDplLHJ1bGU6ZXIoZSl9KSkuZmlsdGVyKGU9PiEhZS5ydWxlKSx0PWUubWFwKChlLHQpPT4oe2luZGV4OnQsc2xvdEluZGV4OmVvKGUucnVsZSkubWF0Y2godik/LlsxXX0pKS5maWx0ZXIoZT0+ISFlLnNsb3RJbmRleCk7cmV0dXJuIHQubWFwKChyLG4pPT57bGV0IG89dFtuKzFdPy5pbmRleD8/ZS5sZW5ndGgsaT1lLnNsaWNlKHIuaW5kZXgsbykuZmlsdGVyKGU9PmVsKGUucnVsZSxyLnNsb3RJbmRleCkpLGE9aS5zb21lKGU9PmVvKGUucnVsZSkubWF0Y2godik/LlsxXT09PXIuc2xvdEluZGV4KSxsPWkuc29tZShlPT5lbyhlLnJ1bGUpLm1hdGNoKHcpPy5bMV09PT1yLnNsb3RJbmRleCk7cmV0dXJuIGEmJmw/e2ZpZWxkczppLm1hcChlPT5lLmZpZWxkKSxjaGlsZHJlbjppLm1hcChlPT5lLnJ1bGUpfTpudWxsfSkuZmlsdGVyKGU9PiEhZSl9ZnVuY3Rpb24gZWYoKXtyZXR1cm4gbmV3IFNldChlZCgpLmZsYXRNYXAoZT0+ZS5maWVsZHMpKX1mdW5jdGlvbiBlcChlKXtsZXQgdD1lZCgpLHI9XCJudW1iZXJcIj09dHlwZW9mIGU/dC5zbGljZSgwLGUpOnQ7cmV0dXJuIHIubWFwKGU9PmVzKGkuRklFTERfVFlQRS5FTVBMT1lNRU5ULFwiV29yayBFeHBlcmllbmNlXCIsZW4oZS5jaGlsZHJlblswXSl8fHZvaWQgMCxlLmNoaWxkcmVuKSkuZmlsdGVyKEJvb2xlYW4pfWZ1bmN0aW9uIGVtKGUpe2xldCB0PVwiZWR1Y2F0aW9uXCI9PT1lP3U6YztyZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHQpKS5maWx0ZXIoRSl9ZnVuY3Rpb24gZWgoZSx0LHIpe2xldCBuPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKGEpKS5tYXAoZXIpLmZpbHRlcihlPT4hIWUpLG89bmV3IFNldDtuLmZvckVhY2goZT0+e2UudHlwZT09PWkuRklFTERfVFlQRS5DSEVDS0JPWCYmQXJyYXkuaXNBcnJheShlLiRjaGVja2JveHMpJiZlLiRjaGVja2JveHMuZm9yRWFjaChlPT5vLmFkZChlKSl9KTtsZXQgbD1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIikpLmZpbHRlcihlPT4hZS5kaXNhYmxlZCYmIW8uaGFzKGUpKS5tYXAoWikuZmlsdGVyKGU9PiEhZSkscz1bLi4ubiwuLi5sXTtyZXR1cm4gZXModCxyLGUscyl9ZnVuY3Rpb24gZWcoZSx0KXtsZXQgcj1cImVkdWNhdGlvblwiPT09ZT9pLkZJRUxEX1RZUEUuRURVQ0FUSU9OOmkuRklFTERfVFlQRS5FTVBMT1lNRU5ULG49XCJlZHVjYXRpb25cIj09PWU/XCJFZHVjYXRpb25cIjpcIldvcmsgRXhwZXJpZW5jZVwiLG89ZW0oZSk7aWYoXCJleHBlcmllbmNlXCI9PT1lJiYwPT09by5sZW5ndGgpcmV0dXJuIGVwKHQpO2xldCBhPVwibnVtYmVyXCI9PXR5cGVvZiB0P28uc2xpY2UoMCx0KTpvO3JldHVybiBhLm1hcChlPT5laChlLHIsbikpLmZpbHRlcihCb29sZWFuKX1hc3luYyBmdW5jdGlvbiBlYigpe2xldCBlPUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhKSksdD1lZigpLHI9W10sbj1uZXcgU2V0O2ZvcihsZXQgbyBvZiBlKXtpZihlaShvKXx8dC5oYXMobykpY29udGludWU7bGV0IGU9ZXIobyk7aWYoIWUpY29udGludWU7YXdhaXQgSyhlKTtsZXQgaT1lLiRpbnB1dDtpJiZuLmhhcyhpKXx8KGkmJm4uYWRkKGkpLHIucHVzaChlKSl9bGV0IG89ZWcoXCJlZHVjYXRpb25cIiwxKTtmb3IobGV0IGUgb2Ygbylhd2FpdCBlYyhlKTtyLnB1c2goLi4ubyk7bGV0IGk9ZWcoXCJleHBlcmllbmNlXCIsMSk7Zm9yKGxldCBlIG9mIGkpYXdhaXQgZWMoZSk7cmV0dXJuIHIucHVzaCguLi5pKSxyfWZ1bmN0aW9uIGV5KCl7cmV0dXJuIGVnKFwiZWR1Y2F0aW9uXCIpfWZ1bmN0aW9uIGV2KCl7cmV0dXJuIGVnKFwiZXhwZXJpZW5jZVwiKX1mdW5jdGlvbiBldyhlKXtsZXQgdD1lbShcImVkdWNhdGlvblwiKVtlXTtyZXR1cm4gdD9laCh0LGkuRklFTERfVFlQRS5FRFVDQVRJT04sXCJFZHVjYXRpb25cIik6bnVsbH1mdW5jdGlvbiBlUyhlKXtsZXQgdD1lbShcImV4cGVyaWVuY2VcIilbZV07cmV0dXJuIHQ/ZWgodCxpLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVCxcIldvcmsgRXhwZXJpZW5jZVwiKTplcCgpW2VdfHxudWxsfWZ1bmN0aW9uIGVFKGUpe3JldHVybiBBcnJheS5mcm9tKGUuc2VsZWN0ZWRPcHRpb25zKS5tYXAoZT0+eChlKXx8ZS5sYWJlbHx8ZS52YWx1ZSkubWFwKGU9PmUudHJpbSgpKS5maWx0ZXIoTCl9ZnVuY3Rpb24gZXgoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoITApO3JldHVybiB0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b24sIGEsIFtyb2xlPSdidXR0b24nXSwgLnVpLWljb25cIikuZm9yRWFjaChlPT5lLnJlbW92ZSgpKSx4KHQpLnJlcGxhY2UoL1xcYlJlbW92ZSBzZWxlY3Rpb25cXGIuKiQvaSxcIlwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKX1mdW5jdGlvbiBlQyhlKXtyZXR1cm4gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoYSkpLmZpbHRlcihlPT5FKGUpKX1mdW5jdGlvbiBlQShlKXtsZXQgdD17fSxyPW5ldyBTZXQoZUMoZSkuZmxhdE1hcChlPT5BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIikpKS5maWx0ZXIoZT0+XyhlLGUuY2xvc2VzdChhKSkpKSxuPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiKSkuZmlsdGVyKGU9PiFlLmRpc2FibGVkJiYhci5oYXMoZSkpO2ZvcihsZXQgZSBvZiBuKXtsZXQgcj1aKGUpO3I/LmxhYmVsJiYodFtyLmxhYmVsXT0hIWUuY2hlY2tlZCYmKEooZSl8fFwiWWVzXCIpKX1yZXR1cm4gdH1mdW5jdGlvbiBlayhlKXtsZXQgdD17fTtmb3IobGV0IHIgb2YgZUMoZSkpe2xldCBlPWVyKHIpPy5sYWJlbHx8QShyKTtlJiYodFtlXT1lSChyKSl9cmV0dXJuey4uLnQsLi4uZUEoZSl9fWZ1bmN0aW9uIGVUKGUpe2xldCB0PWUuY2xvbmVOb2RlKCEwKTtyZXR1cm4gdC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uLCBhLCBpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCwgLnJlcXVpcmVkRmllbGRJbmRpY2F0b3JcIikuZm9yRWFjaChlPT5lLnJlbW92ZSgpKSx4KHQpfWZ1bmN0aW9uIGVGKGUpe3JldHVybiB4KGUucXVlcnlTZWxlY3RvcihcImgxLCBoMiwgaDMsIGg0LCBbcm9sZT0naGVhZGluZyddXCIpKX1mdW5jdGlvbiBlSShlLHQscil7bGV0IG49ci5sZW5ndGg/YCg/PVxcXFxiKD86JHtyLm1hcChlaikuam9pbihcInxcIil9KVxcXFxifCQpYDpcIiRcIixvPWUubWF0Y2goUmVnRXhwKGAke2VqKHQpfVxcXFxzKjo/XFxcXHMqKC4qPylcXFxccyoke259YCxcImlcIikpO3JldHVybiBvPy5bMV0/LnRyaW0oKXx8XCJcIn1mdW5jdGlvbiBlaihlKXtyZXR1cm4gZS5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZyxcIlxcXFwkJlwiKX1mdW5jdGlvbiBlRChlKXtyZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGUpLmZpbHRlcigoWyxlXSk9PkFycmF5LmlzQXJyYXkoZSk/ZS5sZW5ndGg+MDpcIlwiIT09ZSYmbnVsbCE9ZSkpfWZ1bmN0aW9uIGVQKGUpe3JldHVybiBrKGUpPT09ayhtKX1mdW5jdGlvbiBlXyhlKXtsZXQgdD1BcnJheS5pc0FycmF5KGUpP2U6W2VdO2ZvcihsZXQgZSBvZiB0KXtpZighMD09PWUpcmV0dXJuXCJZZXNcIjtpZighMT09PWV8fG51bGw9PWUpY29udGludWU7bGV0IHQ9ayhTdHJpbmcoZSkpO2lmKFwieWVzXCI9PT10fHxcImNoZWNrZWRcIj09PXR8fFwidHJ1ZVwiPT09dHx8dD09PWsobSkpcmV0dXJuXCJZZXNcIn1yZXR1cm5cIlwifWZ1bmN0aW9uIGVMKGUpe2xldCB0PXsuLi5lfTtmb3IobGV0W3Isbl1vZiBPYmplY3QuZW50cmllcyhlKSl7aWYoIWVQKHIpKWNvbnRpbnVlO2xldCBlPWVfKG4pO2RlbGV0ZSB0W3JdLGUmJih0W21dPWUpfXJldHVybiBlRCh0KX1mdW5jdGlvbiBlUihlLHQpe3JldHVybiB4KGUucXVlcnlTZWxlY3Rvcih0KSl9ZnVuY3Rpb24gZU8oZSx0KXtsZXQgcj1lQyhlKS5maW5kKGU9PkEoZSkudG9Mb3dlckNhc2UoKT09PXQudG9Mb3dlckNhc2UoKSk7aWYoIXIpcmV0dXJuXCJcIjtsZXQgbj1yLmNsb25lTm9kZSghMCk7cmV0dXJuIG4ucXVlcnlTZWxlY3RvckFsbChcImxhYmVsLCBidXR0b24sIGEsIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0LCAucmVxdWlyZWRGaWVsZEluZGljYXRvclwiKS5mb3JFYWNoKGU9PmUucmVtb3ZlKCkpLHgobikucmVwbGFjZSgvXjpcXHMqLyxcIlwiKS50cmltKCl9ZnVuY3Rpb24gZU0oZSl7cmV0dXJuIEFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vc3RSZWNlbnRTdGF0aWNUZXh0LCBbbmctaWYqPSdNb3N0UmVjZW50J11cIikpLnNvbWUoZT0+RShlKSYmL21vc3QgcmVjZW50L2kudGVzdCh4KGUpKSl9ZnVuY3Rpb24gZU4oZSl7bGV0IHQ9ZVQoZSkscj1bXCJHcmFkdWF0aW9uIHllYXJcIixcIk1ham9yIGFyZWEgb2Ygc3R1ZHlcIixcIkRlZ3JlZVwiLFwiR1BBXCJdO3JldHVybiBlRCh7XCJTY2hvb2wgLyBFZHVjYXRpb25hbCBpbnN0aXR1dGlvblwiOmVSKGUsXCI6c2NvcGUgPiBsaS5pbnN0aXR1dGlvbiBoNFwiKXx8ZUYoZSksXCJHcmFkdWF0aW9uIHllYXJcIjplTyhlLFwiR3JhZHVhdGlvbiB5ZWFyXCIpfHxlSSh0LFwiR3JhZHVhdGlvbiB5ZWFyXCIsci5zbGljZSgxKSksXCJNYWpvciBhcmVhIG9mIHN0dWR5XCI6ZU8oZSxcIk1ham9yIGFyZWEgb2Ygc3R1ZHlcIil8fGVJKHQsXCJNYWpvciBhcmVhIG9mIHN0dWR5XCIsW1wiRGVncmVlXCIsXCJHUEFcIl0pLERlZ3JlZTplTyhlLFwiRGVncmVlXCIpfHxlSSh0LFwiRGVncmVlXCIsW1wiR1BBXCJdKSxHUEE6ZU8oZSxcIkdQQVwiKXx8ZUkodCxcIkdQQVwiLFtdKSxcIlRoaXMgaXMgbXkgbW9zdCByZWNlbnQgZWR1Y2F0aW9uXCI6ZU0oZSk/XCJZZXNcIjpcIlwifSl9ZnVuY3Rpb24gZSQoZSl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwiOnNjb3BlID4gbGkudG9wUGFyYWdyYXBoLnBvcHVsYXRlZCBwW2FsaWduLWxhYmVsc10sIDpzY29wZSA+IGxpLnRvcFBhcmFncmFwaC5wb3B1bGF0ZWQgcFwiKTtpZighdClyZXR1cm57c3RhcnQ6XCJcIixlbmQ6XCJcIn07bGV0IHI9QXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuLmZpZWxkY29udGFpblwiKSkubWFwKHgpLmZpbHRlcihCb29sZWFuKSxuPWVSKGUsXCI6c2NvcGUgPiBsaS50b3BQYXJhZ3JhcGggW25nLWlmKj0nTW9zdFJlY2VudCddXCIpfHxlUihlLFwiOnNjb3BlID4gbGkudG9wUGFyYWdyYXBoIC5tb3N0UmVjZW50XCIpfHxlUihlLFwiOnNjb3BlID4gbGkudG9wUGFyYWdyYXBoIC5jdXJyZW50XCIpO3JldHVybntzdGFydDpyWzBdfHxcIlwiLGVuZDpyWzFdfHwoL21vc3QgcmVjZW50fHByZXNlbnR8Y3VycmVudC9pLnRlc3Qobik/bjpcIlwiKX19ZnVuY3Rpb24gZUIoZSl7bGV0IHQ9ZSQoZSkscj1lTyhlLFwiUmVzcG9uc2liaWxpdGllc1wiKXx8ZUkoZVQoZSksXCJSZXNwb25zaWJpbGl0aWVzXCIsW1wiUmVhc29uIGZvciBMZWF2aW5nXCJdKTtyZXR1cm4gZUQoe0NvbXBhbnk6ZVIoZSxcIjpzY29wZSA+IGxpLmluc3RpdHV0aW9uIGg0XCIpfHxlRihlKSxcIkpvYiB0aXRsZVwiOmVSKGUsXCI6c2NvcGUgPiBsaS50b3BQYXJhZ3JhcGgucG9wdWxhdGVkID4gZGl2LmZpZWxkY29udGFpbiBzcGFuLm5nLWJpbmRpbmdcIiksXCJTdGFydCBZZWFyL21vbnRoXCI6dC5zdGFydCxcIkVuZCBZZWFyL21vbnRoXCI6dC5lbmQsUmVzcG9uc2liaWxpdGllczpyLFwiUmVhc29uIGZvciBMZWF2aW5nXCI6ZU8oZSxcIlJlYXNvbiBmb3IgTGVhdmluZ1wiKX0pfWZ1bmN0aW9uIGVxKGUsdCl7bGV0IHI9ZWsoZSksbj1cImVkdWNhdGlvblwiPT09dD9lTihlKTplQihlKSxvPU9iamVjdC5rZXlzKHIpLmxlbmd0aD4wP2VEKHsuLi5uLC4uLmVEKHIpfSk6bjtyZXR1cm5cImVkdWNhdGlvblwiPT09dD9lTChvKTpvfWZ1bmN0aW9uIGVVKGUpe2xldCB0PWVtKGUpO3JldHVyblwiZXhwZXJpZW5jZVwiPT09ZSYmMD09PXQubGVuZ3RoP2VkKCkubWFwKGU9PntsZXQgdD17fTtmb3IobGV0IHIgb2YgZS5maWVsZHMpe2xldCBlPWVyKHIpPy5sYWJlbHx8QShyKTtlJiYodFtlXT1lSChyKSl9cmV0dXJuIGVEKHQpfSkuZmlsdGVyKGU9Pk9iamVjdC5rZXlzKGUpLmxlbmd0aD4wKTp0Lm1hcCh0PT5lcSh0LGUpKS5maWx0ZXIoZT0+T2JqZWN0LmtleXMoZSkubGVuZ3RoPjApfWZ1bmN0aW9uIGVIKGUpe2xldCB0PUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT0ncmFkaW8nXVwiKSkuZmlsdGVyKHQ9Pl8odCxlKSk7aWYodC5sZW5ndGg+MCl7bGV0IGU9dC5maW5kKGU9PmUuY2hlY2tlZCk7cmV0dXJuIGU/WChlKTpcIlwifWxldCByPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiKSkuZmlsdGVyKHQ9Pl8odCxlKSk7aWYoci5sZW5ndGg+MCl7bGV0IGU9ci5maWx0ZXIoZT0+ZS5jaGVja2VkKS5tYXAoSikuZmlsdGVyKEJvb2xlYW4pO3JldHVybiAxPT09ci5sZW5ndGg/ZVswXXx8ITE6ZX1sZXQgbj1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdFwiKSkuZmluZCh0PT5fKHQsZSkpfHxudWxsO2lmKG4pe2lmKG4ubXVsdGlwbGUpe2xldCB0PUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdGlvbkxpc3QgbGksIFtpZCQ9J19zZWxlY3Rpb24tbGlzdCddIGxpXCIpKS5tYXAoZXgpLmZpbHRlcihCb29sZWFuKTtyZXR1cm4gdC5sZW5ndGg+MD90OmVFKG4pfWxldCB0PXEoZSxuKSxyPWVFKG4pWzBdfHxcIlwiLG89dD8udmFsdWU/LnRyaW0oKXx8XCJcIjtyZXR1cm4gcnx8KEwobyk/bzpcIlwiKX1sZXQgbz1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcInRleHRhcmVhLCBpbnB1dDpub3QoW3R5cGU9J2hpZGRlbiddKTpub3QoW3R5cGU9J2ZpbGUnXSk6bm90KFt0eXBlPSdyYWRpbyddKTpub3QoW3R5cGU9J2NoZWNrYm94J10pOm5vdChbdHlwZT0nYnV0dG9uJ10pOm5vdChbdHlwZT0nc3VibWl0J10pXCIpKS5maW5kKHQ9Pl8odCxlKSl8fG51bGw7cmV0dXJuIG8/LnZhbHVlPy50cmltKCl8fFwiXCJ9YXN5bmMgZnVuY3Rpb24gZVkoKXtsZXQgZT17fSx0PWVDKGRvY3VtZW50KSxyPWVmKCk7Zm9yKGxldCBuIG9mIHQpe2lmKGVpKG4pfHxyLmhhcyhuKSljb250aW51ZTtsZXQgdD1lcihuKTtpZighdCljb250aW51ZTtsZXQgbz10LmxhYmVsO2oobixvKXx8KGVbb109ZUgobikpfWxldCBuPWVVKFwiZWR1Y2F0aW9uXCIpO24ubGVuZ3RoPjAmJihlLmVkdWNhdGlvbj1uKTtsZXQgbz1lVShcImV4cGVyaWVuY2VcIik7cmV0dXJuIG8ubGVuZ3RoPjAmJihlLmVtcGxveW1lbnQ9byksZX1cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6InJ1bGVzLmFjOWQzMWEyLmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);