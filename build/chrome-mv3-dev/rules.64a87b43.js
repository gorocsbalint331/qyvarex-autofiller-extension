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
})({"g85UF":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\bytedance\\rules.js",
    "bundleId": "b2ffd06c64a87b43",
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
var j = z(require("9e5efc57cdb3f150"));
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

},{"9e5efc57cdb3f150":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"dVSFo":[function(require,module,exports) {
/**
 * Parcel module id: 8j7Jw
 * Resolved path: src/contents/sites/bytedance/rules.js
 * Dependencies:
 *   ./answer -> ZCM0a  =>  src/contents/sites/bytedance/answer.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "BYTEDANCE_DATE_RANGE_DESCRIPTION", ()=>s), n.export(r, "LINKEDIN_PROFILE_URL_DESCRIPTION", ()=>u), n.export(r, "getBytedanceSelectRuleLabel", ()=>d), n.export(r, "getBytedanceTextRuleDescription", ()=>p), n.export(r, "getBytedanceRuleDescription", ()=>m), n.export(r, "buildBytedanceSectionOptions", ()=>h), n.export(r, "refreshBytedanceStructuredSectionOptions", ()=>g), n.export(r, "applyBytedanceHydratedSelectOptions", ()=>b), n.export(r, "getEducationRules", ()=>P), n.export(r, "getExperienceRules", ()=>_), n.export(r, "extractRules", ()=>L), n.export(r, "getFormSnapshot", ()=>H), n.export(r, "getPrivacyPolicyCheckboxes", ()=>z);
var o = e("~core/enums"), i = e("./answer");
let a = [
    "education"
], l = [
    [
        "work",
        "experience"
    ]
], s = 'Use YYYY-MM format. This is a date range with two separate inputs: start and end. Return as "YYYY-MM / YYYY-MM"; if the record is current, return "YYYY-MM / Present".', u = "Return the applicant's LinkedIn profile URL. If no LinkedIn URL is available, return an empty string.";
function c(e1) {
    return e1.replace(/[*\uff0a]\s*$/g, "").trim().replace(/\s+/g, " ");
}
function d(e1, t) {
    let r1 = e1.classList.contains("ud__select__selector__search__input") && !!e1.closest(".ud__input-group") && "mobile" === t.trim().toLowerCase();
    return r1 ? "Phone Country Code" : t;
}
function f(e1) {
    let t = e1.toLowerCase().trim().replace(/\s+/g, " ");
    return "start & end date" === t;
}
function p(e1) {
    let t = c(e1).replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return "urlid" === t ? u : void 0;
}
function m(e1) {
    return f(e1) ? s : p(e1);
}
function h(e1) {
    return e1.map((e1)=>({
            type: e1.type,
            label: e1.label,
            ...e1.options?.length ? {
                options: e1.options
            } : {},
            ...e1.description ? {
                description: e1.description
            } : {}
        }));
}
function g(e1) {
    for (let t of e1){
        if (t.type !== o.FIELD_TYPE.EDUCATION && t.type !== o.FIELD_TYPE.EMPLOYMENT) continue;
        let e1 = t;
        Array.isArray(e1.children) && (e1.options = h(e1.children));
    }
}
function b(e1, t) {
    t.length > 0 && (e1.options = t);
}
function y(e1) {
    let t = e1, r1 = t.labels;
    if (r1 && r1.length > 0) {
        let e1 = (r1[0].textContent || "").trim();
        if (e1) return r1[0];
    }
    let n = e1.id;
    if (n) {
        let e1 = document.querySelector(`label[for="${CSS.escape(n)}"]`);
        if (e1) return e1;
    }
    let o = e1.closest(".atsx-form-item");
    if (o) {
        let e1 = o.querySelector(".atsx-form-item-label label") || o.querySelector("label");
        if (e1) return e1;
    }
    let i = e1.closest(".ud-formily-item");
    if (i) {
        let e1 = i.querySelector(".ud-formily-item-label label") || i.querySelector("label") || i.querySelector(".ud-formily-item-label-content") || i.querySelector(".ud-formily-item-label");
        if (e1) return e1;
    }
    let a = e1.closest("label");
    if (a) return a;
    let l = e1.closest('[class*="form-item"]') || e1.closest("div, fieldset, li, section, form"), s = l?.querySelector("label") || l?.parentElement?.querySelector("label");
    return s || null;
}
function v(e1) {
    let t = e1.closest('[class*="applyFormModuleWrapper__"]');
    if (t) return t;
    let r1 = e1.closest('[class*="applyFormModuleWrapper"]');
    return r1 ? r1.closest('[class*="applyFormModuleWrapper__"]') || r1 : null;
}
function w(e1) {
    let t = e1.querySelector(".applyFormModuleWrapper-text")?.textContent || e1.querySelector(".applyFormModuleWrapper-title")?.textContent || "";
    return (t || "").trim().toLowerCase();
}
function S(e1) {
    let t = e1.querySelector(".applyFormModuleWrapper-text")?.textContent || e1.querySelector(".applyFormModuleWrapper-title")?.textContent || "";
    return (t || "").trim();
}
_c = S;
function E(e1) {
    let t = Array.from(document.querySelectorAll('[class*="applyFormModuleWrapper__"]'));
    for (let r1 of e1){
        let e1 = t.find((e1)=>{
            let t = w(e1);
            return r1.every((e1)=>t.includes(e1));
        });
        if (e1) return e1;
    }
    return null;
}
_c1 = E;
function x(e1) {
    let t = v(e1);
    if (!t) return !1;
    let r1 = w(t);
    return !!(a.some((e1)=>r1.includes(e1)) || r1.includes("experience"));
}
function C() {
    let e1 = Array.from(document.querySelectorAll('[class*="applyFormModuleWrapper__"]'));
    return e1.filter((e1)=>{
        let t = w(e1);
        return t.includes("education") || t.includes("experience");
    });
}
_c2 = C;
function A(e1, t) {
    let r1 = (t?.textContent || "").trim(), n = e1.closest(".ud-formily-item"), o = !!n?.querySelector(".ud-formily-item-asterisk");
    return o || r1.includes("*") || (t?.className?.toLowerCase().includes("required") ?? !1) || e1 instanceof HTMLInputElement && e1.required || e1 instanceof HTMLSelectElement && e1.required || e1 instanceof HTMLTextAreaElement && e1.required || !1;
}
_c3 = A;
function k(e1) {
    return Array.from(e1.options).map((e1)=>(e1.textContent || e1.value || "").trim()).filter((e1)=>e1 && ![
            "--",
            "select",
            "please select"
        ].includes(e1.toLowerCase()));
}
function T(e1, t) {
    let r1 = (e1.name || "").trim();
    return r1 ? Array.from(t.querySelectorAll(`input[type="radio"][name="${CSS.escape(r1)}"]`)).filter((e1)=>!e1.disabled) : [];
}
_c4 = T;
function F(e1, t) {
    let r1 = [];
    for (let n of e1){
        let e1 = t.querySelector(`label[for="${CSS.escape(n.id)}"]`)?.textContent || n.value, o = (e1 || "").trim();
        o && r1.push(o);
    }
    return r1;
}
_c5 = F;
function I(e1, t, r1) {
    let n;
    let a = y(e1);
    if (!a) return null;
    let l = a.textContent?.trim() || "", s = c(l);
    if (!s) return null;
    let u = s.toLowerCase();
    if ("preferred work location" === u) return null;
    let h = null, g = [];
    if (e1 instanceof HTMLInputElement && e1.classList.contains("atsx-select-search__field")) {
        if ((0, i.isSkippableInput)(e1)) return null;
        let t = e1.closest(".atsx-select"), r1 = s.toLowerCase(), l = r1.includes("school") || !!t?.classList.contains("atsx-select-combobox") || !!t?.classList.contains("atsx-select-no-arrow");
        if (l) return n = o.FIELD_TYPE.TEXT, h = e1, {
            type: n,
            label: s,
            required: A(e1, a),
            $input: h,
            $label: a
        };
        n = o.FIELD_TYPE.SELECT;
        let u = e1.closest('[role="combobox"]') || e1.closest(".atsx-select-selection") || e1.closest(".atsx-select");
        return h = u || e1, g = [], {
            type: n,
            label: s,
            required: A(e1, a),
            options: g,
            $input: h,
            $label: a
        };
    }
    if (e1 instanceof HTMLInputElement && "combobox" === e1.getAttribute("role") && e1.closest(".ud__select")) {
        if ((0, i.isSkippableInput)(e1)) return null;
        let t = d(e1, s), r1 = e1.closest(".ud__select"), n = r1?.querySelector(".ud__select__selector");
        h = n || e1;
        let l = (e1)=>{
            if (!e1 || 0 === e1.length) return [];
            let t = Array.from(e1).map((e1)=>(e1.textContent || "").trim()).filter(Boolean);
            return Array.from(new Set(t));
        }, u = r1?.querySelectorAll(".ud__select__list__item");
        if (0 === (g = l(u)).length && h) {
            let e1 = h.getBoundingClientRect(), t = Array.from(document.querySelectorAll(".ud__select__dropdown")).filter(N), r1 = null;
            for (let n of t){
                let t = n.querySelectorAll(".ud__select__list__item");
                if (!t || 0 === t.length) continue;
                let o = n.getBoundingClientRect(), i = (o.left || 0) - (e1.left || 0), a = (o.top || 0) - (e1.bottom || 0), l = Math.hypot(i, a), s = e1.width > 0 ? Math.abs(o.width - e1.width) / e1.width : 0, u = l + 200 * s;
                (!r1 || u < r1.score) && (r1 = {
                    el: n,
                    score: u
                });
            }
            if (r1) {
                let e1 = r1.el.querySelectorAll(".ud__select__list__item");
                g = l(e1);
            }
        }
        return {
            type: o.FIELD_TYPE.SELECT,
            label: t,
            required: A(e1, a),
            options: g,
            $input: h,
            $label: a
        };
    }
    if ("INPUT" === e1.tagName) {
        let l = e1;
        if ((0, i.isSkippableInput)(l)) return null;
        if ("checkbox" === l.type) {
            let e1 = (l.closest(".atsx-form-item-control")?.textContent || l.closest(".atsx-form-item")?.textContent || "").toLowerCase();
            if (e1.includes("privacy policy")) return null;
            n = o.FIELD_TYPE.CHECKBOX, h = l;
            let t = c((a.textContent || l.value || "").trim());
            return g = t ? [
                t
            ] : [], {
                type: n,
                label: s,
                required: A(l, a),
                options: g,
                $checkboxs: [
                    l
                ],
                $input: h,
                $label: a
            };
        }
        if ("radio" === l.type) {
            n = o.FIELD_TYPE.RADIOGROUP;
            let e1 = T(l, t);
            if (0 === e1.length) return null;
            let i = y(e1[0]) || a, s = c(i?.textContent?.trim() || "");
            if (!s) return null;
            g = F(e1, r1);
            let u = e1[0].closest("fieldset") || e1[0].closest("div") || i?.closest("fieldset") || t;
            return {
                type: n,
                label: s,
                required: e1.some((e1)=>e1.required) || (i?.textContent?.includes("*") ?? !1),
                options: g,
                $radioParent: u,
                $input: e1[0],
                $label: i || u
            };
        }
        return (h = l, f(s)) ? {
            type: n = o.FIELD_TYPE.DATE,
            label: s,
            required: A(l, a),
            description: m(s),
            $input: h,
            $label: a
        } : {
            type: n = o.FIELD_TYPE.TEXT,
            label: s,
            required: A(l, a),
            description: p(s),
            $input: h,
            $label: a
        };
    }
    if ("SELECT" === e1.tagName) {
        let t = e1;
        return t.disabled ? null : (n = o.FIELD_TYPE.SELECT, h = t, g = k(t), {
            type: n,
            label: s,
            required: A(t, a),
            options: g,
            $input: h,
            $label: a
        });
    }
    if ("TEXTAREA" === e1.tagName) {
        let t = e1;
        return t.disabled || t.readOnly ? null : (h = t, f(s)) ? {
            type: n = o.FIELD_TYPE.DATE,
            label: s,
            required: A(t, a),
            description: m(s),
            $input: h,
            $label: a
        } : {
            type: n = o.FIELD_TYPE.TEXT,
            label: s,
            required: A(t, a),
            description: p(s),
            $input: h,
            $label: a
        };
    }
    return null;
}
_c6 = I;
function j(e1, t, r1) {
    let n = Array.from(e1.querySelectorAll("input, select, textarea")), o = r1?.excludedSectionContainers, i = o && o.length > 0 ? new Set(o) : null, a = new Set, l = new Set, s = [];
    for (let o of n){
        if (o instanceof HTMLInputElement) {
            let e1 = o.closest(".throne-biz-date-range-picker-wrapper");
            if (e1) {
                if (l.has(e1)) continue;
                l.add(e1);
            }
        }
        if (i) {
            let e1 = v(o);
            if (e1 && i.has(e1)) continue;
        } else if (r1?.excludeEduOrEmployment && x(o)) continue;
        if (o instanceof HTMLInputElement && "radio" === o.type) {
            let e1 = (o.name || "").trim();
            if (!e1 || a.has(e1)) continue;
            a.add(e1);
        }
        let n = I(o, e1, t);
        n && s.push(n);
    }
    return s;
}
function D(e1) {
    let t = Array.from(e1.querySelectorAll('[class*="apply-form-array-card-content__"] .register-form-group-wrapper'));
    if (t.length > 0) return t;
    let r1 = Array.from(e1.children).filter((e1)=>{
        let t = e1;
        return t.querySelector(".ud-formily-item") || t.querySelector("input, select, textarea");
    });
    return r1.length > 0 ? r1 : e1.querySelector(".ud-formily-item, input, select, textarea") ? [
        e1
    ] : [];
}
_c7 = D;
function P() {
    let e1 = E([
        a
    ]);
    if (!e1) return [];
    let t = document.body, r1 = D(e1), n = [], i = S(e1) || "Education";
    for (let e1 of r1){
        let r1 = j(e1, t);
        0 !== r1.length && n.push({
            type: o.FIELD_TYPE.EDUCATION,
            label: i,
            required: !0,
            children: r1,
            options: h(r1)
        });
    }
    return n;
}
_c8 = P;
function _() {
    let e1 = E(l);
    if (!e1) return [];
    let t = document.body, r1 = D(e1), n = [], i = S(e1) || "Work Experience";
    for (let e1 of r1){
        let r1 = j(e1, t);
        0 !== r1.length && n.push({
            type: o.FIELD_TYPE.EMPLOYMENT,
            label: i,
            required: !0,
            children: r1,
            options: h(r1)
        });
    }
    return n;
}
async function L() {
    let e1 = document.body, t = [];
    t.push(...P()), t.push(..._());
    let r1 = [
        ...C()
    ];
    return t.push(...j(e1, e1, {
        excludeEduOrEmployment: !0,
        excludedSectionContainers: r1
    })), await U(t, e1), g(t), t;
}
_c9 = L;
function R(e1) {
    let t = [], r1 = [
        ...e1
    ];
    for(; r1.length;){
        let e1 = r1.shift();
        t.push(e1);
        let n = e1;
        if (Array.isArray(n.children)) for (let e1 of n.children)r1.push(e1);
    }
    return t;
}
_c10 = R;
async function O(e1) {
    let t = e1.querySelector(".rc-virtual-list-holder");
    if (!t) return [];
    let r1 = t.firstElementChild;
    if (!r1) return [];
    let n = r1.scrollHeight || r1.offsetHeight;
    if (n <= t.clientHeight) return [];
    let o = new Set, i = ()=>{
        let t = e1.querySelectorAll(".ud__select__list__item");
        for (let e1 of Array.from(t)){
            let t = (e1.textContent || "").trim();
            t && o.add(t);
        }
    };
    t.dispatchEvent(new WheelEvent("wheel", {
        deltaY: -n,
        bubbles: !0,
        cancelable: !0
    })), await new Promise((e1)=>setTimeout(e1, 60)), i();
    let a = Math.max(t.clientHeight - 32, 32), l = Math.ceil(n / a) + 2;
    for(let e1 = 0; e1 < l; e1++){
        let r1 = o.size;
        if (t.dispatchEvent(new WheelEvent("wheel", {
            deltaY: a,
            bubbles: !0,
            cancelable: !0
        })), await new Promise((e1)=>setTimeout(e1, 60)), i(), e1 > 0 && o.size === r1) break;
    }
    return Array.from(o);
}
_c11 = O;
function M(e1) {
    let t = e1.closest(".ud__select"), r1 = t?.querySelector(".ud__select__dropdown");
    if (r1 && N(r1)) return r1;
    let n = e1.getBoundingClientRect(), o = Array.from(document.querySelectorAll(".ud__select__dropdown")).filter(N), i = null;
    for (let e1 of o){
        let t = e1.getBoundingClientRect(), r1 = (t.left || 0) - (n.left || 0), o = (t.top || 0) - (n.bottom || 0), a = Math.hypot(r1, o), l = n.width > 0 ? Math.abs(t.width - n.width) / n.width : 0, s = a + 200 * l;
        (!i || s < i.score) && (i = {
            el: e1,
            score: s
        });
    }
    return i?.el ?? null;
}
_c12 = M;
function N(e1) {
    if (e1.classList.contains("ud__select__dropdown-hidden")) return !1;
    let t = e1.getBoundingClientRect();
    if (0 === t.width && 0 === t.height) return !1;
    let r1 = getComputedStyle(e1);
    return "none" !== r1.display && "hidden" !== r1.visibility;
}
_c13 = N;
function $(e1) {
    let t = e1.querySelectorAll(".ud__select__list__item");
    return t && 0 !== t.length ? Array.from(new Set(Array.from(t).map((e1)=>(e1.textContent || "").trim()).filter(Boolean))) : [];
}
function B(e1) {
    let t = e1.closest(".ud__select"), r1 = t?.querySelectorAll(".ud__select__list__item"), n = r1 && r1.length ? Array.from(new Set(Array.from(r1).map((e1)=>(e1.textContent || "").trim()).filter(Boolean))) : [];
    if (n.length) return n;
    let o = e1.getBoundingClientRect(), i = Array.from(document.querySelectorAll(".ud__select__dropdown")).filter(N), a = null;
    for (let e1 of i){
        let t = $(e1);
        if (0 === t.length) continue;
        let r1 = e1.getBoundingClientRect(), n = (r1.left || 0) - (o.left || 0), i = (r1.top || 0) - (o.bottom || 0), l = Math.hypot(n, i), s = o.width > 0 ? Math.abs(r1.width - o.width) / o.width : 0, u = l + 200 * s;
        (!a || u < a.score) && (a = {
            el: e1,
            score: u
        });
    }
    return a ? $(a.el) : [];
}
_c14 = B;
function q(e1) {
    let t = v(e1);
    if (!t) return !1;
    let r1 = w(t);
    return r1.includes("education");
}
async function U(e1, t) {
    let r1 = R(e1), n = r1.filter((e1)=>e1.type === o.FIELD_TYPE.SELECT && Array.isArray(e1.options) && (e1.options?.length ?? 0) === 0);
    for (let e1 of n){
        let t = e1.$input;
        if (!t || !(t instanceof HTMLElement)) continue;
        let r1 = t.closest(".ud__select"), n = t.closest(".atsx-select");
        if (!r1 && !n || n && q(t)) continue;
        try {
            t.scrollIntoView({
                block: "center",
                behavior: "auto"
            });
        } catch  {}
        await new Promise((e1)=>setTimeout(e1, 80));
        try {
            t.dispatchEvent(new MouseEvent("mousedown", {
                bubbles: !0,
                cancelable: !0
            })), t.dispatchEvent(new MouseEvent("mouseup", {
                bubbles: !0,
                cancelable: !0
            })), t.click();
        } catch  {}
        await new Promise((e1)=>setTimeout(e1, r1 ? 120 : 200));
        let o = [];
        if (r1) {
            let e1 = M(t);
            e1 && (o = await O(e1)), 0 === o.length && (o = B(t));
        } else if (n) {
            let e1 = t.getAttribute("aria-controls") || "", r1 = (e1 ? document.getElementById(e1) : null) || document.querySelector('[role="listbox"]');
            if (r1) {
                let e1 = r1.querySelectorAll('[role="option"], li, [class*="list__item"]');
                for (let t of Array.from(e1)){
                    let e1 = (t.textContent || "").trim();
                    e1 && o.push(e1);
                }
                o = Array.from(new Set(o));
            }
        }
        b(e1, o), document.dispatchEvent(new KeyboardEvent("keydown", {
            key: "Escape",
            bubbles: !0
        })), document.dispatchEvent(new KeyboardEvent("keyup", {
            key: "Escape",
            bubbles: !0
        })), await new Promise((e1)=>setTimeout(e1, 50));
    }
}
_c15 = U;
async function H(e1) {
    let t = document.body, r1 = {}, n = (e1)=>{
        if (e1 instanceof HTMLInputElement || e1 instanceof HTMLTextAreaElement) {
            if ("checkbox" === e1.type || "radio" === e1.type) return;
            if (e1 instanceof HTMLInputElement && e1.classList.contains("atsx-date-picker-period-hidden-input")) {
                let t = e1.closest(".atsx-date-picker-period-month");
                if (t) {
                    let e1 = Array.from(t.querySelectorAll(".atsx-date-picker-period-month-label")), r1 = (e1)=>{
                        if (!e1) return "";
                        let t = e1.querySelector('[data-cy="year"]')?.textContent?.trim() || "", r1 = e1.querySelector('[data-cy="month"]')?.textContent?.trim() || "", n = t.toUpperCase(), o = r1.toUpperCase();
                        return "PRESENT" === n ? "Present" : t && r1 && "YYYY" !== n && "MM" !== o ? `${t}-${r1}` : "";
                    }, n = r1(e1[0]), o = r1(e1[1]);
                    return n && o ? `${n} - ${o}` : n || o || "";
                }
                return "";
            }
            return (e1.value || "").trim();
        }
        if (e1 instanceof HTMLSelectElement) return e1.options?.[e1.selectedIndex]?.textContent?.trim()?.trim() || "";
        let t = e1.closest?.(".ud__select");
        if (t) {
            let e1 = t.querySelector(".ud__select__selector__selectItem");
            if (e1) return (e1.textContent || "").trim();
            let r1 = Array.from(t.querySelectorAll('.ud__select__selector__content [class*="tag"], .ud__select__selector__content .ud__tag')), n = r1.map((e1)=>(e1.textContent || "").trim()).filter(Boolean);
            return Array.from(new Set(n));
        }
        let r1 = e1.closest?.(".atsx-select");
        if (r1) {
            let e1 = r1.querySelector(".atsx-select-selection-selected-value"), t = e1?.querySelector("[data-cy-value]") || e1?.querySelector(".atsx-clamp-content"), n = t?.getAttribute?.("data-cy-value") || t?.textContent?.trim() || e1?.textContent?.trim() || "";
            return "Please choose" === (n = n.trim()) && (n = ""), n;
        }
    }, i = (e1)=>{
        let { $input: r1, type: i, $checkboxs: a, options: l } = e1;
        if (!r1 || !document.contains(r1)) return "";
        if (i === o.FIELD_TYPE.CHECKBOX) {
            if (a?.length) {
                let e1 = a.map((e1, t)=>e1.checked ? l?.[t] || "Checked" : null).filter(Boolean);
                return 1 === e1.length ? e1[0] : e1;
            }
            return r1.checked || !1;
        }
        if (i === o.FIELD_TYPE.RADIOGROUP) {
            let n = e1.$radioParent || t;
            if (!document.contains(n)) return "";
            let o = n.querySelector(`input[type=radio][name="${CSS.escape(r1.name || "")}"]:checked`);
            return o ? c((o.closest("label")?.textContent || o.value || "").trim()) : "";
        }
        let s = n(r1);
        return void 0 !== s ? s : "";
    };
    for (let t of e1)t.type !== o.FIELD_TYPE.EDUCATION && t.type !== o.FIELD_TYPE.EMPLOYMENT && "$input" in t && t.$input && (r1[t.label] = i(t));
    let a = P(), l = a.map((e1)=>{
        let t = {};
        return e1.children.forEach((e1)=>{
            t[e1.label] = i(e1);
        }), t;
    }), s = _(), u = s.map((e1)=>{
        let t = {};
        return e1.children.forEach((e1)=>{
            t[e1.label] = i(e1);
        }), t;
    });
    return {
        ...r1,
        education: l,
        employment: u
    };
}
_c16 = H;
function Y(e1) {
    if ("checkbox" !== e1.type) return !1;
    if (e1.closest(".resumeEdit-privacyArea")) return !0;
    let t = (e1.closest(".atsx-form-item-control")?.textContent || e1.closest("label")?.textContent || "").trim().toLowerCase();
    return t.includes("privacy policy");
}
_c17 = Y;
function z() {
    return Array.from(document.querySelectorAll('input[type="checkbox"], input.atsx-checkbox-input')).filter(Y);
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17;
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

},{}]},["g85UF","dVSFo"], "dVSFo", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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RSxRQUFRLFVBQVUsZUFBYSxFQUFDLEVBQUcsT0FBTztJQUFjLE9BQU8sRUFBRSxTQUFTO0FBQWlCO09BQTdPO0FBQThPLFNBQVM7SUFBSSxPQUFPLE1BQU0sS0FBSyxTQUFTLGlCQUFpQixzREFBc0QsT0FBTztBQUFFIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS1kZjBhMjk0OWFjMTRkNzdmLmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL2J5dGVkYW5jZS9ydWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxieXRlZGFuY2VcXFxccnVsZXMuanNcIixcImJ1bmRsZUlkXCI6XCJiMmZmZDA2YzY0YTg3YjQzXCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogOGo3SndcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL2J5dGVkYW5jZS9ydWxlcy5qc1xyXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi9hbnN3ZXIgLT4gWkNNMGEgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvYnl0ZWRhbmNlL2Fuc3dlci5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgfmNvcmUvZW51bXMgLT4gMU8zbmMgID0+ICBzcmMvY29yZS9lbnVtcy5qc1xyXG4gKi9cclxuXHJcbnZhciBuPWUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO24uZGVmaW5lSW50ZXJvcEZsYWcociksbi5leHBvcnQocixcIkJZVEVEQU5DRV9EQVRFX1JBTkdFX0RFU0NSSVBUSU9OXCIsKCk9PnMpLG4uZXhwb3J0KHIsXCJMSU5LRURJTl9QUk9GSUxFX1VSTF9ERVNDUklQVElPTlwiLCgpPT51KSxuLmV4cG9ydChyLFwiZ2V0Qnl0ZWRhbmNlU2VsZWN0UnVsZUxhYmVsXCIsKCk9PmQpLG4uZXhwb3J0KHIsXCJnZXRCeXRlZGFuY2VUZXh0UnVsZURlc2NyaXB0aW9uXCIsKCk9PnApLG4uZXhwb3J0KHIsXCJnZXRCeXRlZGFuY2VSdWxlRGVzY3JpcHRpb25cIiwoKT0+bSksbi5leHBvcnQocixcImJ1aWxkQnl0ZWRhbmNlU2VjdGlvbk9wdGlvbnNcIiwoKT0+aCksbi5leHBvcnQocixcInJlZnJlc2hCeXRlZGFuY2VTdHJ1Y3R1cmVkU2VjdGlvbk9wdGlvbnNcIiwoKT0+Zyksbi5leHBvcnQocixcImFwcGx5Qnl0ZWRhbmNlSHlkcmF0ZWRTZWxlY3RPcHRpb25zXCIsKCk9PmIpLG4uZXhwb3J0KHIsXCJnZXRFZHVjYXRpb25SdWxlc1wiLCgpPT5QKSxuLmV4cG9ydChyLFwiZ2V0RXhwZXJpZW5jZVJ1bGVzXCIsKCk9Pl8pLG4uZXhwb3J0KHIsXCJleHRyYWN0UnVsZXNcIiwoKT0+TCksbi5leHBvcnQocixcImdldEZvcm1TbmFwc2hvdFwiLCgpPT5IKSxuLmV4cG9ydChyLFwiZ2V0UHJpdmFjeVBvbGljeUNoZWNrYm94ZXNcIiwoKT0+eik7dmFyIG89ZShcIn5jb3JlL2VudW1zXCIpLGk9ZShcIi4vYW5zd2VyXCIpO2xldCBhPVtcImVkdWNhdGlvblwiXSxsPVtbXCJ3b3JrXCIsXCJleHBlcmllbmNlXCJdXSxzPSdVc2UgWVlZWS1NTSBmb3JtYXQuIFRoaXMgaXMgYSBkYXRlIHJhbmdlIHdpdGggdHdvIHNlcGFyYXRlIGlucHV0czogc3RhcnQgYW5kIGVuZC4gUmV0dXJuIGFzIFwiWVlZWS1NTSAvIFlZWVktTU1cIjsgaWYgdGhlIHJlY29yZCBpcyBjdXJyZW50LCByZXR1cm4gXCJZWVlZLU1NIC8gUHJlc2VudFwiLicsdT1cIlJldHVybiB0aGUgYXBwbGljYW50J3MgTGlua2VkSW4gcHJvZmlsZSBVUkwuIElmIG5vIExpbmtlZEluIFVSTCBpcyBhdmFpbGFibGUsIHJldHVybiBhbiBlbXB0eSBzdHJpbmcuXCI7ZnVuY3Rpb24gYyhlKXtyZXR1cm4gZS5yZXBsYWNlKC9bKlxcdWZmMGFdXFxzKiQvZyxcIlwiKS50cmltKCkucmVwbGFjZSgvXFxzKy9nLFwiIFwiKX1mdW5jdGlvbiBkKGUsdCl7bGV0IHI9ZS5jbGFzc0xpc3QuY29udGFpbnMoXCJ1ZF9fc2VsZWN0X19zZWxlY3Rvcl9fc2VhcmNoX19pbnB1dFwiKSYmISFlLmNsb3Nlc3QoXCIudWRfX2lucHV0LWdyb3VwXCIpJiZcIm1vYmlsZVwiPT09dC50cmltKCkudG9Mb3dlckNhc2UoKTtyZXR1cm4gcj9cIlBob25lIENvdW50cnkgQ29kZVwiOnR9ZnVuY3Rpb24gZihlKXtsZXQgdD1lLnRvTG93ZXJDYXNlKCkudHJpbSgpLnJlcGxhY2UoL1xccysvZyxcIiBcIik7cmV0dXJuXCJzdGFydCAmIGVuZCBkYXRlXCI9PT10fWZ1bmN0aW9uIHAoZSl7bGV0IHQ9YyhlKS5yZXBsYWNlKC9bXmEtekEtWjAtOV0vZyxcIlwiKS50b0xvd2VyQ2FzZSgpO3JldHVyblwidXJsaWRcIj09PXQ/dTp2b2lkIDB9ZnVuY3Rpb24gbShlKXtyZXR1cm4gZihlKT9zOnAoZSl9ZnVuY3Rpb24gaChlKXtyZXR1cm4gZS5tYXAoZT0+KHt0eXBlOmUudHlwZSxsYWJlbDplLmxhYmVsLC4uLmUub3B0aW9ucz8ubGVuZ3RoP3tvcHRpb25zOmUub3B0aW9uc306e30sLi4uZS5kZXNjcmlwdGlvbj97ZGVzY3JpcHRpb246ZS5kZXNjcmlwdGlvbn06e319KSl9ZnVuY3Rpb24gZyhlKXtmb3IobGV0IHQgb2YgZSl7aWYodC50eXBlIT09by5GSUVMRF9UWVBFLkVEVUNBVElPTiYmdC50eXBlIT09by5GSUVMRF9UWVBFLkVNUExPWU1FTlQpY29udGludWU7bGV0IGU9dDtBcnJheS5pc0FycmF5KGUuY2hpbGRyZW4pJiYoZS5vcHRpb25zPWgoZS5jaGlsZHJlbikpfX1mdW5jdGlvbiBiKGUsdCl7dC5sZW5ndGg+MCYmKGUub3B0aW9ucz10KX1mdW5jdGlvbiB5KGUpe2xldCB0PWUscj10LmxhYmVscztpZihyJiZyLmxlbmd0aD4wKXtsZXQgZT0oclswXS50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpO2lmKGUpcmV0dXJuIHJbMF19bGV0IG49ZS5pZDtpZihuKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke0NTUy5lc2NhcGUobil9XCJdYCk7aWYoZSlyZXR1cm4gZX1sZXQgbz1lLmNsb3Nlc3QoXCIuYXRzeC1mb3JtLWl0ZW1cIik7aWYobyl7bGV0IGU9by5xdWVyeVNlbGVjdG9yKFwiLmF0c3gtZm9ybS1pdGVtLWxhYmVsIGxhYmVsXCIpfHxvLnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbFwiKTtpZihlKXJldHVybiBlfWxldCBpPWUuY2xvc2VzdChcIi51ZC1mb3JtaWx5LWl0ZW1cIik7aWYoaSl7bGV0IGU9aS5xdWVyeVNlbGVjdG9yKFwiLnVkLWZvcm1pbHktaXRlbS1sYWJlbCBsYWJlbFwiKXx8aS5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIil8fGkucXVlcnlTZWxlY3RvcihcIi51ZC1mb3JtaWx5LWl0ZW0tbGFiZWwtY29udGVudFwiKXx8aS5xdWVyeVNlbGVjdG9yKFwiLnVkLWZvcm1pbHktaXRlbS1sYWJlbFwiKTtpZihlKXJldHVybiBlfWxldCBhPWUuY2xvc2VzdChcImxhYmVsXCIpO2lmKGEpcmV0dXJuIGE7bGV0IGw9ZS5jbG9zZXN0KCdbY2xhc3MqPVwiZm9ybS1pdGVtXCJdJyl8fGUuY2xvc2VzdChcImRpdiwgZmllbGRzZXQsIGxpLCBzZWN0aW9uLCBmb3JtXCIpLHM9bD8ucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpfHxsPy5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIik7cmV0dXJuIHN8fG51bGx9ZnVuY3Rpb24gdihlKXtsZXQgdD1lLmNsb3Nlc3QoJ1tjbGFzcyo9XCJhcHBseUZvcm1Nb2R1bGVXcmFwcGVyX19cIl0nKTtpZih0KXJldHVybiB0O2xldCByPWUuY2xvc2VzdCgnW2NsYXNzKj1cImFwcGx5Rm9ybU1vZHVsZVdyYXBwZXJcIl0nKTtyZXR1cm4gcj9yLmNsb3Nlc3QoJ1tjbGFzcyo9XCJhcHBseUZvcm1Nb2R1bGVXcmFwcGVyX19cIl0nKXx8cjpudWxsfWZ1bmN0aW9uIHcoZSl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwiLmFwcGx5Rm9ybU1vZHVsZVdyYXBwZXItdGV4dFwiKT8udGV4dENvbnRlbnR8fGUucXVlcnlTZWxlY3RvcihcIi5hcHBseUZvcm1Nb2R1bGVXcmFwcGVyLXRpdGxlXCIpPy50ZXh0Q29udGVudHx8XCJcIjtyZXR1cm4odHx8XCJcIikudHJpbSgpLnRvTG93ZXJDYXNlKCl9ZnVuY3Rpb24gUyhlKXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoXCIuYXBwbHlGb3JtTW9kdWxlV3JhcHBlci10ZXh0XCIpPy50ZXh0Q29udGVudHx8ZS5xdWVyeVNlbGVjdG9yKFwiLmFwcGx5Rm9ybU1vZHVsZVdyYXBwZXItdGl0bGVcIik/LnRleHRDb250ZW50fHxcIlwiO3JldHVybih0fHxcIlwiKS50cmltKCl9ZnVuY3Rpb24gRShlKXtsZXQgdD1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzcyo9XCJhcHBseUZvcm1Nb2R1bGVXcmFwcGVyX19cIl0nKSk7Zm9yKGxldCByIG9mIGUpe2xldCBlPXQuZmluZChlPT57bGV0IHQ9dyhlKTtyZXR1cm4gci5ldmVyeShlPT50LmluY2x1ZGVzKGUpKX0pO2lmKGUpcmV0dXJuIGV9cmV0dXJuIG51bGx9ZnVuY3Rpb24geChlKXtsZXQgdD12KGUpO2lmKCF0KXJldHVybiExO2xldCByPXcodCk7cmV0dXJuISEoYS5zb21lKGU9PnIuaW5jbHVkZXMoZSkpfHxyLmluY2x1ZGVzKFwiZXhwZXJpZW5jZVwiKSl9ZnVuY3Rpb24gQygpe2xldCBlPUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzKj1cImFwcGx5Rm9ybU1vZHVsZVdyYXBwZXJfX1wiXScpKTtyZXR1cm4gZS5maWx0ZXIoZT0+e2xldCB0PXcoZSk7cmV0dXJuIHQuaW5jbHVkZXMoXCJlZHVjYXRpb25cIil8fHQuaW5jbHVkZXMoXCJleHBlcmllbmNlXCIpfSl9ZnVuY3Rpb24gQShlLHQpe2xldCByPSh0Py50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpLG49ZS5jbG9zZXN0KFwiLnVkLWZvcm1pbHktaXRlbVwiKSxvPSEhbj8ucXVlcnlTZWxlY3RvcihcIi51ZC1mb3JtaWx5LWl0ZW0tYXN0ZXJpc2tcIik7cmV0dXJuIG98fHIuaW5jbHVkZXMoXCIqXCIpfHwodD8uY2xhc3NOYW1lPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwicmVxdWlyZWRcIik/PyExKXx8ZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQmJmUucmVxdWlyZWR8fGUgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCYmZS5yZXF1aXJlZHx8ZSBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQmJmUucmVxdWlyZWR8fCExfWZ1bmN0aW9uIGsoZSl7cmV0dXJuIEFycmF5LmZyb20oZS5vcHRpb25zKS5tYXAoZT0+KGUudGV4dENvbnRlbnR8fGUudmFsdWV8fFwiXCIpLnRyaW0oKSkuZmlsdGVyKGU9PmUmJiFbXCItLVwiLFwic2VsZWN0XCIsXCJwbGVhc2Ugc2VsZWN0XCJdLmluY2x1ZGVzKGUudG9Mb3dlckNhc2UoKSkpfWZ1bmN0aW9uIFQoZSx0KXtsZXQgcj0oZS5uYW1lfHxcIlwiKS50cmltKCk7cmV0dXJuIHI/QXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiJHtDU1MuZXNjYXBlKHIpfVwiXWApKS5maWx0ZXIoZT0+IWUuZGlzYWJsZWQpOltdfWZ1bmN0aW9uIEYoZSx0KXtsZXQgcj1bXTtmb3IobGV0IG4gb2YgZSl7bGV0IGU9dC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke0NTUy5lc2NhcGUobi5pZCl9XCJdYCk/LnRleHRDb250ZW50fHxuLnZhbHVlLG89KGV8fFwiXCIpLnRyaW0oKTtvJiZyLnB1c2gobyl9cmV0dXJuIHJ9ZnVuY3Rpb24gSShlLHQscil7bGV0IG47bGV0IGE9eShlKTtpZighYSlyZXR1cm4gbnVsbDtsZXQgbD1hLnRleHRDb250ZW50Py50cmltKCl8fFwiXCIscz1jKGwpO2lmKCFzKXJldHVybiBudWxsO2xldCB1PXMudG9Mb3dlckNhc2UoKTtpZihcInByZWZlcnJlZCB3b3JrIGxvY2F0aW9uXCI9PT11KXJldHVybiBudWxsO2xldCBoPW51bGwsZz1bXTtpZihlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCYmZS5jbGFzc0xpc3QuY29udGFpbnMoXCJhdHN4LXNlbGVjdC1zZWFyY2hfX2ZpZWxkXCIpKXtpZigoMCxpLmlzU2tpcHBhYmxlSW5wdXQpKGUpKXJldHVybiBudWxsO2xldCB0PWUuY2xvc2VzdChcIi5hdHN4LXNlbGVjdFwiKSxyPXMudG9Mb3dlckNhc2UoKSxsPXIuaW5jbHVkZXMoXCJzY2hvb2xcIil8fCEhdD8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXRzeC1zZWxlY3QtY29tYm9ib3hcIil8fCEhdD8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXRzeC1zZWxlY3Qtbm8tYXJyb3dcIik7aWYobClyZXR1cm4gbj1vLkZJRUxEX1RZUEUuVEVYVCxoPWUse3R5cGU6bixsYWJlbDpzLHJlcXVpcmVkOkEoZSxhKSwkaW5wdXQ6aCwkbGFiZWw6YX07bj1vLkZJRUxEX1RZUEUuU0VMRUNUO2xldCB1PWUuY2xvc2VzdCgnW3JvbGU9XCJjb21ib2JveFwiXScpfHxlLmNsb3Nlc3QoXCIuYXRzeC1zZWxlY3Qtc2VsZWN0aW9uXCIpfHxlLmNsb3Nlc3QoXCIuYXRzeC1zZWxlY3RcIik7cmV0dXJuIGg9dXx8ZSxnPVtdLHt0eXBlOm4sbGFiZWw6cyxyZXF1aXJlZDpBKGUsYSksb3B0aW9uczpnLCRpbnB1dDpoLCRsYWJlbDphfX1pZihlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCYmXCJjb21ib2JveFwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpJiZlLmNsb3Nlc3QoXCIudWRfX3NlbGVjdFwiKSl7aWYoKDAsaS5pc1NraXBwYWJsZUlucHV0KShlKSlyZXR1cm4gbnVsbDtsZXQgdD1kKGUscykscj1lLmNsb3Nlc3QoXCIudWRfX3NlbGVjdFwiKSxuPXI/LnF1ZXJ5U2VsZWN0b3IoXCIudWRfX3NlbGVjdF9fc2VsZWN0b3JcIik7aD1ufHxlO2xldCBsPWU9PntpZighZXx8MD09PWUubGVuZ3RoKXJldHVybltdO2xldCB0PUFycmF5LmZyb20oZSkubWFwKGU9PihlLnRleHRDb250ZW50fHxcIlwiKS50cmltKCkpLmZpbHRlcihCb29sZWFuKTtyZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KHQpKX0sdT1yPy5xdWVyeVNlbGVjdG9yQWxsKFwiLnVkX19zZWxlY3RfX2xpc3RfX2l0ZW1cIik7aWYoMD09PShnPWwodSkpLmxlbmd0aCYmaCl7bGV0IGU9aC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSx0PUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51ZF9fc2VsZWN0X19kcm9wZG93blwiKSkuZmlsdGVyKE4pLHI9bnVsbDtmb3IobGV0IG4gb2YgdCl7bGV0IHQ9bi5xdWVyeVNlbGVjdG9yQWxsKFwiLnVkX19zZWxlY3RfX2xpc3RfX2l0ZW1cIik7aWYoIXR8fDA9PT10Lmxlbmd0aCljb250aW51ZTtsZXQgbz1uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGk9KG8ubGVmdHx8MCktKGUubGVmdHx8MCksYT0oby50b3B8fDApLShlLmJvdHRvbXx8MCksbD1NYXRoLmh5cG90KGksYSkscz1lLndpZHRoPjA/TWF0aC5hYnMoby53aWR0aC1lLndpZHRoKS9lLndpZHRoOjAsdT1sKzIwMCpzOyghcnx8dTxyLnNjb3JlKSYmKHI9e2VsOm4sc2NvcmU6dX0pfWlmKHIpe2xldCBlPXIuZWwucXVlcnlTZWxlY3RvckFsbChcIi51ZF9fc2VsZWN0X19saXN0X19pdGVtXCIpO2c9bChlKX19cmV0dXJue3R5cGU6by5GSUVMRF9UWVBFLlNFTEVDVCxsYWJlbDp0LHJlcXVpcmVkOkEoZSxhKSxvcHRpb25zOmcsJGlucHV0OmgsJGxhYmVsOmF9fWlmKFwiSU5QVVRcIj09PWUudGFnTmFtZSl7bGV0IGw9ZTtpZigoMCxpLmlzU2tpcHBhYmxlSW5wdXQpKGwpKXJldHVybiBudWxsO2lmKFwiY2hlY2tib3hcIj09PWwudHlwZSl7bGV0IGU9KGwuY2xvc2VzdChcIi5hdHN4LWZvcm0taXRlbS1jb250cm9sXCIpPy50ZXh0Q29udGVudHx8bC5jbG9zZXN0KFwiLmF0c3gtZm9ybS1pdGVtXCIpPy50ZXh0Q29udGVudHx8XCJcIikudG9Mb3dlckNhc2UoKTtpZihlLmluY2x1ZGVzKFwicHJpdmFjeSBwb2xpY3lcIikpcmV0dXJuIG51bGw7bj1vLkZJRUxEX1RZUEUuQ0hFQ0tCT1gsaD1sO2xldCB0PWMoKGEudGV4dENvbnRlbnR8fGwudmFsdWV8fFwiXCIpLnRyaW0oKSk7cmV0dXJuIGc9dD9bdF06W10se3R5cGU6bixsYWJlbDpzLHJlcXVpcmVkOkEobCxhKSxvcHRpb25zOmcsJGNoZWNrYm94czpbbF0sJGlucHV0OmgsJGxhYmVsOmF9fWlmKFwicmFkaW9cIj09PWwudHlwZSl7bj1vLkZJRUxEX1RZUEUuUkFESU9HUk9VUDtsZXQgZT1UKGwsdCk7aWYoMD09PWUubGVuZ3RoKXJldHVybiBudWxsO2xldCBpPXkoZVswXSl8fGEscz1jKGk/LnRleHRDb250ZW50Py50cmltKCl8fFwiXCIpO2lmKCFzKXJldHVybiBudWxsO2c9RihlLHIpO2xldCB1PWVbMF0uY2xvc2VzdChcImZpZWxkc2V0XCIpfHxlWzBdLmNsb3Nlc3QoXCJkaXZcIil8fGk/LmNsb3Nlc3QoXCJmaWVsZHNldFwiKXx8dDtyZXR1cm57dHlwZTpuLGxhYmVsOnMscmVxdWlyZWQ6ZS5zb21lKGU9PmUucmVxdWlyZWQpfHwoaT8udGV4dENvbnRlbnQ/LmluY2x1ZGVzKFwiKlwiKT8/ITEpLG9wdGlvbnM6ZywkcmFkaW9QYXJlbnQ6dSwkaW5wdXQ6ZVswXSwkbGFiZWw6aXx8dX19cmV0dXJuKGg9bCxmKHMpKT97dHlwZTpuPW8uRklFTERfVFlQRS5EQVRFLGxhYmVsOnMscmVxdWlyZWQ6QShsLGEpLGRlc2NyaXB0aW9uOm0ocyksJGlucHV0OmgsJGxhYmVsOmF9Ont0eXBlOm49by5GSUVMRF9UWVBFLlRFWFQsbGFiZWw6cyxyZXF1aXJlZDpBKGwsYSksZGVzY3JpcHRpb246cChzKSwkaW5wdXQ6aCwkbGFiZWw6YX19aWYoXCJTRUxFQ1RcIj09PWUudGFnTmFtZSl7bGV0IHQ9ZTtyZXR1cm4gdC5kaXNhYmxlZD9udWxsOihuPW8uRklFTERfVFlQRS5TRUxFQ1QsaD10LGc9ayh0KSx7dHlwZTpuLGxhYmVsOnMscmVxdWlyZWQ6QSh0LGEpLG9wdGlvbnM6ZywkaW5wdXQ6aCwkbGFiZWw6YX0pfWlmKFwiVEVYVEFSRUFcIj09PWUudGFnTmFtZSl7bGV0IHQ9ZTtyZXR1cm4gdC5kaXNhYmxlZHx8dC5yZWFkT25seT9udWxsOihoPXQsZihzKSk/e3R5cGU6bj1vLkZJRUxEX1RZUEUuREFURSxsYWJlbDpzLHJlcXVpcmVkOkEodCxhKSxkZXNjcmlwdGlvbjptKHMpLCRpbnB1dDpoLCRsYWJlbDphfTp7dHlwZTpuPW8uRklFTERfVFlQRS5URVhULGxhYmVsOnMscmVxdWlyZWQ6QSh0LGEpLGRlc2NyaXB0aW9uOnAocyksJGlucHV0OmgsJGxhYmVsOmF9fXJldHVybiBudWxsfWZ1bmN0aW9uIGooZSx0LHIpe2xldCBuPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWFcIikpLG89cj8uZXhjbHVkZWRTZWN0aW9uQ29udGFpbmVycyxpPW8mJm8ubGVuZ3RoPjA/bmV3IFNldChvKTpudWxsLGE9bmV3IFNldCxsPW5ldyBTZXQscz1bXTtmb3IobGV0IG8gb2Ygbil7aWYobyBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpe2xldCBlPW8uY2xvc2VzdChcIi50aHJvbmUtYml6LWRhdGUtcmFuZ2UtcGlja2VyLXdyYXBwZXJcIik7aWYoZSl7aWYobC5oYXMoZSkpY29udGludWU7bC5hZGQoZSl9fWlmKGkpe2xldCBlPXYobyk7aWYoZSYmaS5oYXMoZSkpY29udGludWV9ZWxzZSBpZihyPy5leGNsdWRlRWR1T3JFbXBsb3ltZW50JiZ4KG8pKWNvbnRpbnVlO2lmKG8gaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50JiZcInJhZGlvXCI9PT1vLnR5cGUpe2xldCBlPShvLm5hbWV8fFwiXCIpLnRyaW0oKTtpZighZXx8YS5oYXMoZSkpY29udGludWU7YS5hZGQoZSl9bGV0IG49SShvLGUsdCk7biYmcy5wdXNoKG4pfXJldHVybiBzfWZ1bmN0aW9uIEQoZSl7bGV0IHQ9QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzcyo9XCJhcHBseS1mb3JtLWFycmF5LWNhcmQtY29udGVudF9fXCJdIC5yZWdpc3Rlci1mb3JtLWdyb3VwLXdyYXBwZXInKSk7aWYodC5sZW5ndGg+MClyZXR1cm4gdDtsZXQgcj1BcnJheS5mcm9tKGUuY2hpbGRyZW4pLmZpbHRlcihlPT57bGV0IHQ9ZTtyZXR1cm4gdC5xdWVyeVNlbGVjdG9yKFwiLnVkLWZvcm1pbHktaXRlbVwiKXx8dC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWFcIil9KTtyZXR1cm4gci5sZW5ndGg+MD9yOmUucXVlcnlTZWxlY3RvcihcIi51ZC1mb3JtaWx5LWl0ZW0sIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpP1tlXTpbXX1mdW5jdGlvbiBQKCl7bGV0IGU9RShbYV0pO2lmKCFlKXJldHVybltdO2xldCB0PWRvY3VtZW50LmJvZHkscj1EKGUpLG49W10saT1TKGUpfHxcIkVkdWNhdGlvblwiO2ZvcihsZXQgZSBvZiByKXtsZXQgcj1qKGUsdCk7MCE9PXIubGVuZ3RoJiZuLnB1c2goe3R5cGU6by5GSUVMRF9UWVBFLkVEVUNBVElPTixsYWJlbDppLHJlcXVpcmVkOiEwLGNoaWxkcmVuOnIsb3B0aW9uczpoKHIpfSl9cmV0dXJuIG59ZnVuY3Rpb24gXygpe2xldCBlPUUobCk7aWYoIWUpcmV0dXJuW107bGV0IHQ9ZG9jdW1lbnQuYm9keSxyPUQoZSksbj1bXSxpPVMoZSl8fFwiV29yayBFeHBlcmllbmNlXCI7Zm9yKGxldCBlIG9mIHIpe2xldCByPWooZSx0KTswIT09ci5sZW5ndGgmJm4ucHVzaCh7dHlwZTpvLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVCxsYWJlbDppLHJlcXVpcmVkOiEwLGNoaWxkcmVuOnIsb3B0aW9uczpoKHIpfSl9cmV0dXJuIG59YXN5bmMgZnVuY3Rpb24gTCgpe2xldCBlPWRvY3VtZW50LmJvZHksdD1bXTt0LnB1c2goLi4uUCgpKSx0LnB1c2goLi4uXygpKTtsZXQgcj1bLi4uQygpXTtyZXR1cm4gdC5wdXNoKC4uLmooZSxlLHtleGNsdWRlRWR1T3JFbXBsb3ltZW50OiEwLGV4Y2x1ZGVkU2VjdGlvbkNvbnRhaW5lcnM6cn0pKSxhd2FpdCBVKHQsZSksZyh0KSx0fWZ1bmN0aW9uIFIoZSl7bGV0IHQ9W10scj1bLi4uZV07Zm9yKDtyLmxlbmd0aDspe2xldCBlPXIuc2hpZnQoKTt0LnB1c2goZSk7bGV0IG49ZTtpZihBcnJheS5pc0FycmF5KG4uY2hpbGRyZW4pKWZvcihsZXQgZSBvZiBuLmNoaWxkcmVuKXIucHVzaChlKX1yZXR1cm4gdH1hc3luYyBmdW5jdGlvbiBPKGUpe2xldCB0PWUucXVlcnlTZWxlY3RvcihcIi5yYy12aXJ0dWFsLWxpc3QtaG9sZGVyXCIpO2lmKCF0KXJldHVybltdO2xldCByPXQuZmlyc3RFbGVtZW50Q2hpbGQ7aWYoIXIpcmV0dXJuW107bGV0IG49ci5zY3JvbGxIZWlnaHR8fHIub2Zmc2V0SGVpZ2h0O2lmKG48PXQuY2xpZW50SGVpZ2h0KXJldHVybltdO2xldCBvPW5ldyBTZXQsaT0oKT0+e2xldCB0PWUucXVlcnlTZWxlY3RvckFsbChcIi51ZF9fc2VsZWN0X19saXN0X19pdGVtXCIpO2ZvcihsZXQgZSBvZiBBcnJheS5mcm9tKHQpKXtsZXQgdD0oZS50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpO3QmJm8uYWRkKHQpfX07dC5kaXNwYXRjaEV2ZW50KG5ldyBXaGVlbEV2ZW50KFwid2hlZWxcIix7ZGVsdGFZOi1uLGJ1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKSxhd2FpdCBuZXcgUHJvbWlzZShlPT5zZXRUaW1lb3V0KGUsNjApKSxpKCk7bGV0IGE9TWF0aC5tYXgodC5jbGllbnRIZWlnaHQtMzIsMzIpLGw9TWF0aC5jZWlsKG4vYSkrMjtmb3IobGV0IGU9MDtlPGw7ZSsrKXtsZXQgcj1vLnNpemU7aWYodC5kaXNwYXRjaEV2ZW50KG5ldyBXaGVlbEV2ZW50KFwid2hlZWxcIix7ZGVsdGFZOmEsYnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpLGF3YWl0IG5ldyBQcm9taXNlKGU9PnNldFRpbWVvdXQoZSw2MCkpLGkoKSxlPjAmJm8uc2l6ZT09PXIpYnJlYWt9cmV0dXJuIEFycmF5LmZyb20obyl9ZnVuY3Rpb24gTShlKXtsZXQgdD1lLmNsb3Nlc3QoXCIudWRfX3NlbGVjdFwiKSxyPXQ/LnF1ZXJ5U2VsZWN0b3IoXCIudWRfX3NlbGVjdF9fZHJvcGRvd25cIik7aWYociYmTihyKSlyZXR1cm4gcjtsZXQgbj1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLG89QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnVkX19zZWxlY3RfX2Ryb3Bkb3duXCIpKS5maWx0ZXIoTiksaT1udWxsO2ZvcihsZXQgZSBvZiBvKXtsZXQgdD1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLHI9KHQubGVmdHx8MCktKG4ubGVmdHx8MCksbz0odC50b3B8fDApLShuLmJvdHRvbXx8MCksYT1NYXRoLmh5cG90KHIsbyksbD1uLndpZHRoPjA/TWF0aC5hYnModC53aWR0aC1uLndpZHRoKS9uLndpZHRoOjAscz1hKzIwMCpsOyghaXx8czxpLnNjb3JlKSYmKGk9e2VsOmUsc2NvcmU6c30pfXJldHVybiBpPy5lbD8/bnVsbH1mdW5jdGlvbiBOKGUpe2lmKGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwidWRfX3NlbGVjdF9fZHJvcGRvd24taGlkZGVuXCIpKXJldHVybiExO2xldCB0PWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7aWYoMD09PXQud2lkdGgmJjA9PT10LmhlaWdodClyZXR1cm4hMTtsZXQgcj1nZXRDb21wdXRlZFN0eWxlKGUpO3JldHVyblwibm9uZVwiIT09ci5kaXNwbGF5JiZcImhpZGRlblwiIT09ci52aXNpYmlsaXR5fWZ1bmN0aW9uICQoZSl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnVkX19zZWxlY3RfX2xpc3RfX2l0ZW1cIik7cmV0dXJuIHQmJjAhPT10Lmxlbmd0aD9BcnJheS5mcm9tKG5ldyBTZXQoQXJyYXkuZnJvbSh0KS5tYXAoZT0+KGUudGV4dENvbnRlbnR8fFwiXCIpLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pKSk6W119ZnVuY3Rpb24gQihlKXtsZXQgdD1lLmNsb3Nlc3QoXCIudWRfX3NlbGVjdFwiKSxyPXQ/LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudWRfX3NlbGVjdF9fbGlzdF9faXRlbVwiKSxuPXImJnIubGVuZ3RoP0FycmF5LmZyb20obmV3IFNldChBcnJheS5mcm9tKHIpLm1hcChlPT4oZS50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpKS5maWx0ZXIoQm9vbGVhbikpKTpbXTtpZihuLmxlbmd0aClyZXR1cm4gbjtsZXQgbz1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGk9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnVkX19zZWxlY3RfX2Ryb3Bkb3duXCIpKS5maWx0ZXIoTiksYT1udWxsO2ZvcihsZXQgZSBvZiBpKXtsZXQgdD0kKGUpO2lmKDA9PT10Lmxlbmd0aCljb250aW51ZTtsZXQgcj1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLG49KHIubGVmdHx8MCktKG8ubGVmdHx8MCksaT0oci50b3B8fDApLShvLmJvdHRvbXx8MCksbD1NYXRoLmh5cG90KG4saSkscz1vLndpZHRoPjA/TWF0aC5hYnMoci53aWR0aC1vLndpZHRoKS9vLndpZHRoOjAsdT1sKzIwMCpzOyghYXx8dTxhLnNjb3JlKSYmKGE9e2VsOmUsc2NvcmU6dX0pfXJldHVybiBhPyQoYS5lbCk6W119ZnVuY3Rpb24gcShlKXtsZXQgdD12KGUpO2lmKCF0KXJldHVybiExO2xldCByPXcodCk7cmV0dXJuIHIuaW5jbHVkZXMoXCJlZHVjYXRpb25cIil9YXN5bmMgZnVuY3Rpb24gVShlLHQpe2xldCByPVIoZSksbj1yLmZpbHRlcihlPT5lLnR5cGU9PT1vLkZJRUxEX1RZUEUuU0VMRUNUJiZBcnJheS5pc0FycmF5KGUub3B0aW9ucykmJihlLm9wdGlvbnM/Lmxlbmd0aD8/MCk9PT0wKTtmb3IobGV0IGUgb2Ygbil7bGV0IHQ9ZS4kaW5wdXQ7aWYoIXR8fCEodCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSljb250aW51ZTtsZXQgcj10LmNsb3Nlc3QoXCIudWRfX3NlbGVjdFwiKSxuPXQuY2xvc2VzdChcIi5hdHN4LXNlbGVjdFwiKTtpZighciYmIW58fG4mJnEodCkpY29udGludWU7dHJ5e3Quc2Nyb2xsSW50b1ZpZXcoe2Jsb2NrOlwiY2VudGVyXCIsYmVoYXZpb3I6XCJhdXRvXCJ9KX1jYXRjaHt9YXdhaXQgbmV3IFByb21pc2UoZT0+c2V0VGltZW91dChlLDgwKSk7dHJ5e3QuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlZG93blwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSksdC5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2V1cFwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSksdC5jbGljaygpfWNhdGNoe31hd2FpdCBuZXcgUHJvbWlzZShlPT5zZXRUaW1lb3V0KGUscj8xMjA6MjAwKSk7bGV0IG89W107aWYocil7bGV0IGU9TSh0KTtlJiYobz1hd2FpdCBPKGUpKSwwPT09by5sZW5ndGgmJihvPUIodCkpfWVsc2UgaWYobil7bGV0IGU9dC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpfHxcIlwiLHI9KGU/ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZSk6bnVsbCl8fGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tyb2xlPVwibGlzdGJveFwiXScpO2lmKHIpe2xldCBlPXIucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJvcHRpb25cIl0sIGxpLCBbY2xhc3MqPVwibGlzdF9faXRlbVwiXScpO2ZvcihsZXQgdCBvZiBBcnJheS5mcm9tKGUpKXtsZXQgZT0odC50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpO2UmJm8ucHVzaChlKX1vPUFycmF5LmZyb20obmV3IFNldChvKSl9fWIoZSxvKSxkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5ZG93blwiLHtrZXk6XCJFc2NhcGVcIixidWJibGVzOiEwfSkpLGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXl1cFwiLHtrZXk6XCJFc2NhcGVcIixidWJibGVzOiEwfSkpLGF3YWl0IG5ldyBQcm9taXNlKGU9PnNldFRpbWVvdXQoZSw1MCkpfX1hc3luYyBmdW5jdGlvbiBIKGUpe2xldCB0PWRvY3VtZW50LmJvZHkscj17fSxuPWU9PntpZihlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudHx8ZSBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpe2lmKFwiY2hlY2tib3hcIj09PWUudHlwZXx8XCJyYWRpb1wiPT09ZS50eXBlKXJldHVybjtpZihlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCYmZS5jbGFzc0xpc3QuY29udGFpbnMoXCJhdHN4LWRhdGUtcGlja2VyLXBlcmlvZC1oaWRkZW4taW5wdXRcIikpe2xldCB0PWUuY2xvc2VzdChcIi5hdHN4LWRhdGUtcGlja2VyLXBlcmlvZC1tb250aFwiKTtpZih0KXtsZXQgZT1BcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbChcIi5hdHN4LWRhdGUtcGlja2VyLXBlcmlvZC1tb250aC1sYWJlbFwiKSkscj1lPT57aWYoIWUpcmV0dXJuXCJcIjtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWN5PVwieWVhclwiXScpPy50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwiLHI9ZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jeT1cIm1vbnRoXCJdJyk/LnRleHRDb250ZW50Py50cmltKCl8fFwiXCIsbj10LnRvVXBwZXJDYXNlKCksbz1yLnRvVXBwZXJDYXNlKCk7cmV0dXJuXCJQUkVTRU5UXCI9PT1uP1wiUHJlc2VudFwiOnQmJnImJlwiWVlZWVwiIT09biYmXCJNTVwiIT09bz9gJHt0fS0ke3J9YDpcIlwifSxuPXIoZVswXSksbz1yKGVbMV0pO3JldHVybiBuJiZvP2Ake259IC0gJHtvfWA6bnx8b3x8XCJcIn1yZXR1cm5cIlwifXJldHVybihlLnZhbHVlfHxcIlwiKS50cmltKCl9aWYoZSBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KXJldHVybiBlLm9wdGlvbnM/LltlLnNlbGVjdGVkSW5kZXhdPy50ZXh0Q29udGVudD8udHJpbSgpPy50cmltKCl8fFwiXCI7bGV0IHQ9ZS5jbG9zZXN0Py4oXCIudWRfX3NlbGVjdFwiKTtpZih0KXtsZXQgZT10LnF1ZXJ5U2VsZWN0b3IoXCIudWRfX3NlbGVjdF9fc2VsZWN0b3JfX3NlbGVjdEl0ZW1cIik7aWYoZSlyZXR1cm4oZS50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpO2xldCByPUFycmF5LmZyb20odC5xdWVyeVNlbGVjdG9yQWxsKCcudWRfX3NlbGVjdF9fc2VsZWN0b3JfX2NvbnRlbnQgW2NsYXNzKj1cInRhZ1wiXSwgLnVkX19zZWxlY3RfX3NlbGVjdG9yX19jb250ZW50IC51ZF9fdGFnJykpLG49ci5tYXAoZT0+KGUudGV4dENvbnRlbnR8fFwiXCIpLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pO3JldHVybiBBcnJheS5mcm9tKG5ldyBTZXQobikpfWxldCByPWUuY2xvc2VzdD8uKFwiLmF0c3gtc2VsZWN0XCIpO2lmKHIpe2xldCBlPXIucXVlcnlTZWxlY3RvcihcIi5hdHN4LXNlbGVjdC1zZWxlY3Rpb24tc2VsZWN0ZWQtdmFsdWVcIiksdD1lPy5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY3ktdmFsdWVdXCIpfHxlPy5xdWVyeVNlbGVjdG9yKFwiLmF0c3gtY2xhbXAtY29udGVudFwiKSxuPXQ/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1jeS12YWx1ZVwiKXx8dD8udGV4dENvbnRlbnQ/LnRyaW0oKXx8ZT8udGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIjtyZXR1cm5cIlBsZWFzZSBjaG9vc2VcIj09PShuPW4udHJpbSgpKSYmKG49XCJcIiksbn19LGk9ZT0+e2xldHskaW5wdXQ6cix0eXBlOmksJGNoZWNrYm94czphLG9wdGlvbnM6bH09ZTtpZighcnx8IWRvY3VtZW50LmNvbnRhaW5zKHIpKXJldHVyblwiXCI7aWYoaT09PW8uRklFTERfVFlQRS5DSEVDS0JPWCl7aWYoYT8ubGVuZ3RoKXtsZXQgZT1hLm1hcCgoZSx0KT0+ZS5jaGVja2VkP2w/Llt0XXx8XCJDaGVja2VkXCI6bnVsbCkuZmlsdGVyKEJvb2xlYW4pO3JldHVybiAxPT09ZS5sZW5ndGg/ZVswXTplfXJldHVybiByLmNoZWNrZWR8fCExfWlmKGk9PT1vLkZJRUxEX1RZUEUuUkFESU9HUk9VUCl7bGV0IG49ZS4kcmFkaW9QYXJlbnR8fHQ7aWYoIWRvY3VtZW50LmNvbnRhaW5zKG4pKXJldHVyblwiXCI7bGV0IG89bi5xdWVyeVNlbGVjdG9yKGBpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPVwiJHtDU1MuZXNjYXBlKHIubmFtZXx8XCJcIil9XCJdOmNoZWNrZWRgKTtyZXR1cm4gbz9jKChvLmNsb3Nlc3QoXCJsYWJlbFwiKT8udGV4dENvbnRlbnR8fG8udmFsdWV8fFwiXCIpLnRyaW0oKSk6XCJcIn1sZXQgcz1uKHIpO3JldHVybiB2b2lkIDAhPT1zP3M6XCJcIn07Zm9yKGxldCB0IG9mIGUpdC50eXBlIT09by5GSUVMRF9UWVBFLkVEVUNBVElPTiYmdC50eXBlIT09by5GSUVMRF9UWVBFLkVNUExPWU1FTlQmJlwiJGlucHV0XCJpbiB0JiZ0LiRpbnB1dCYmKHJbdC5sYWJlbF09aSh0KSk7bGV0IGE9UCgpLGw9YS5tYXAoZT0+e2xldCB0PXt9O3JldHVybiBlLmNoaWxkcmVuLmZvckVhY2goZT0+e3RbZS5sYWJlbF09aShlKX0pLHR9KSxzPV8oKSx1PXMubWFwKGU9PntsZXQgdD17fTtyZXR1cm4gZS5jaGlsZHJlbi5mb3JFYWNoKGU9Pnt0W2UubGFiZWxdPWkoZSl9KSx0fSk7cmV0dXJuey4uLnIsZWR1Y2F0aW9uOmwsZW1wbG95bWVudDp1fX1mdW5jdGlvbiBZKGUpe2lmKFwiY2hlY2tib3hcIiE9PWUudHlwZSlyZXR1cm4hMTtpZihlLmNsb3Nlc3QoXCIucmVzdW1lRWRpdC1wcml2YWN5QXJlYVwiKSlyZXR1cm4hMDtsZXQgdD0oZS5jbG9zZXN0KFwiLmF0c3gtZm9ybS1pdGVtLWNvbnRyb2xcIik/LnRleHRDb250ZW50fHxlLmNsb3Nlc3QoXCJsYWJlbFwiKT8udGV4dENvbnRlbnR8fFwiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO3JldHVybiB0LmluY2x1ZGVzKFwicHJpdmFjeSBwb2xpY3lcIil9ZnVuY3Rpb24geigpe3JldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXSwgaW5wdXQuYXRzeC1jaGVja2JveC1pbnB1dCcpKS5maWx0ZXIoWSl9XHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJydWxlcy42NGE4N2I0My5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);