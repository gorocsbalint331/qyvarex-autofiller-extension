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
})({"1taNK":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\eightfold\\careerhub.js",
    "bundleId": "cc08a3176acc3eeb",
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
var j = z(require("6c958a9ed0ad4195"));
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

},{"6c958a9ed0ad4195":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"7P15y":[function(require,module,exports) {
/**
 * Parcel module id: eMRh5
 * Resolved path: src/contents/sites/eightfold/careerhub.js
 * Dependencies:
 *   ../../option-resolve-rollout -> kwH9q  =>  src/contents/option-resolve-rollout.js
 *   ../answer -> 0548q  =>  src/contents/sites/eightfold/answer.js
 *   ../rules -> 6MF9I  =>  src/contents/sites/eightfold/form-rules.js
 *   ./location-operation -> 38kQO  =>  src/contents/sites/eightfold/location-operation.js
 *   ./operations -> ejJsZ  =>  src/contents/sites/eightfold/operations.js
 *   ./records -> 48qwr  =>  src/contents/sites/eightfold/records.js
 *   ./rules -> dYxzO  =>  src/contents/sites/eightfold/rules.js
 *   ./steps -> llTaO  =>  steps.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "EightfoldCareerHub", ()=>k);
var o = e("@plasmohq/messaging"), i = e("~contents/methods/answer"), a = e("~contents/methods/cancellation"), l = e("~contents/sites/base-filler"), s = e("~core/enums"), u = e("../answer"), c = e("../rules"), d = e("./location-operation"), f = e("../../option-resolve-rollout"), p = e("./operations"), m = e("./records"), h = e("./rules"), g = e("./steps");
let b = 4, y = 600, v = 200, w = 1600;
function S() {
    return {
        education: [],
        workExperience: [],
        skills: [],
        regular: {}
    };
}
_c = S;
function E(e1, t) {
    let r1 = [];
    e1.regular && Object.prototype.hasOwnProperty.call(e1.regular, t) && r1.push(e1.regular[t]);
    let n = e1.fillDataList?.find((e1)=>e1?.name === t)?.value;
    return void 0 !== n && r1.push(n), r1;
}
_c1 = E;
function x(e1, t) {
    if (e1.type === s.FIELD_TYPE.MULTI_SELECT) {
        let e1 = (Array.isArray(t) ? t : [
            t
        ]).filter((e1)=>"string" == typeof e1).map((e1)=>e1.trim()).filter(Boolean);
        return e1.length ? e1 : null;
    }
    let r1 = Array.isArray(t) ? t[0] : t;
    return "string" == typeof r1 && r1.trim() ? r1.trim() : null;
}
function C(e1, t) {
    for (let r1 of E(t, e1.label)){
        let t = x(e1, r1);
        if (null !== t) return t;
    }
    return null;
}
_c2 = C;
function A(e1, t) {
    return (0, m.getCareerHubRecordSnapshots)(e1, t).map(({ card: e1, ...t })=>t);
}
_c3 = A;
class k extends l.BaseFiller {
    getFieldHandlers() {
        return {};
    }
    getCareerHubRoot() {
        return document;
    }
    getCurrentPageUrl() {
        return window.location.href;
    }
    getActiveStep(e1 = this.getCareerHubRoot()) {
        let t = e1;
        return "function" != typeof t?.querySelector || "function" != typeof t?.querySelectorAll ? null : (0, g.getCareerHubActiveStep)(e1);
    }
    resetRunState() {
        this.timeTrace && (this.timeTrace.rulesParseStartTime = Date.now(), this.timeTrace.requestStartTime = 0, this.timeTrace.fillStartTime = 0), this.progressTracker?.clear?.(), this.taskQueue?.clear?.(), this.answer = S();
    }
    stopForStepChange(e1, t) {
        return this.getActiveStep() !== e1 && (this.progressTracker?.clear?.(), console.warn("[CareerHub autofill] stopped", {
            route: "careerhub",
            step: e1,
            ruleCount: t,
            reason: "active-step-changed"
        }), !0);
    }
    async finalizeCareerHubRun() {
        return await this.finalizeFillForm();
    }
    async extractCareerHubActiveRules() {
        return await (0, h.extractCareerHubRules)(this.getCareerHubRoot());
    }
    async waitForCareerHubDynamicRules() {
        await (0, l.waitForComboQuestionsToSettle)(y, v, w);
    }
    async fillCareerHubInputRule(e1, t) {
        return await (0, p.fillCareerHubRule)(e1, t, this.getCareerHubRoot());
    }
    async resolveCareerHubLocationOperation(e1) {
        return await (0, o.sendToBackground)({
            name: "resolveAutofillOperation",
            body: {
                operation: e1,
                source: "eightfold"
            }
        });
    }
    isCareerHubLocationResolveEnabled() {
        return f.V119_OPTION_RESOLVE_ROLLOUT.eightfoldCareerHubLocation;
    }
    isLocationRule(e1) {
        return e1.__careerHub?.step === "personal-info" && e1.__careerHub?.controlId === "location" && e1.type === s.FIELD_TYPE.SELECT;
    }
    async fillCareerHubLocationRule(e1, t) {
        let r1 = (0, d.getCareerHubLocationOriginalAnswer)(this.answer, t);
        if (console.info(`[CareerHub][Location] resolve-start label=${JSON.stringify(e1.label)} answerSource=${r1.source || "missing"} hasOriginalAnswer=${!!r1.value}`), !r1.value) return console.warn("[CareerHub][Location] resolve-skipped reason=empty-original-answer"), {
            committed: !1,
            value: ""
        };
        let n = (0, d.buildCareerHubLocationOperation)({
            currentUrl: this.getCurrentPageUrl(),
            question: e1.label,
            originalAnswer: r1.value
        }), o = await this.resolveCareerHubLocationOperation(n);
        (0, a.checkpoint)();
        let i = (0, d.getCareerHubResolvedLocationValue)(o);
        return (console.info(`[CareerHub][Location] resolve-result action=${o?.result?.action ?? "missing"} selectedCount=${o?.result?.selected_values?.length ?? 0}`), i) ? "personal-info" !== this.getActiveStep() ? {
            committed: !1,
            value: ""
        } : await this.fillCareerHubInputRule(e1, i) : (console.warn("[CareerHub][Location] resolve-not-committed reason=empty-selected-value"), {
            committed: !1,
            value: ""
        });
    }
    async fillCareerHubRecordSection(e1, t) {
        let r1 = (0, i.createSectionResultReporter)("experience" === e1 ? "employment" : "education", {
            onSectionResultChanged: this.progressTracker.updateSectionResult
        });
        return r1.setLabel("experience" === e1 ? "Employment" : "Education"), await (0, m.fillCareerHubRecords)(e1, t, {
            root: this.getCareerHubRoot(),
            sectionReporter: r1
        });
    }
    getCareerHubLiveSnapshot(e1, t) {
        if ("experience" === e1 || "education" === e1) {
            let t = "experience" === e1 ? "Experience" : "Education";
            return {
                [t]: A(e1, this.getCareerHubRoot())
            };
        }
        return (0, p.getCareerHubSnapshot)(t, this.getCareerHubRoot());
    }
    async fillInputRules(e1, t) {
        for (let r1 of e1){
            if (this.stopForStepChange(t, e1.length)) return !1;
            let n = C(r1, this.answer), o = this.isCareerHubLocationResolveEnabled() && this.isLocationRule(r1);
            if (null === n && !o) {
                this.progressTracker.updateMissedProgress(r1.label);
                continue;
            }
            (0, a.updateCurrentField)(r1.label);
            try {
                let i = await (0, a.withSkip)(async ()=>{
                    (0, a.checkpoint)();
                    let e1 = o ? await this.fillCareerHubLocationRule(r1, "string" == typeof n ? n : "") : await this.fillCareerHubInputRule(r1, n);
                    return (0, a.checkpoint)(), e1;
                });
                if (this.stopForStepChange(t, e1.length)) return !1;
                i.committed ? this.progressTracker.updateFilledProgress(r1.label) : this.progressTracker.updateMissedProgress(r1.label);
            } catch (n) {
                if (n instanceof a.CancelledError) throw n;
                this.progressTracker.updateMissedProgress(r1.label), n instanceof a.SkippedError || console.warn("[CareerHub autofill] field not committed", {
                    route: "careerhub",
                    step: t,
                    ruleCount: e1.length,
                    reason: "field-driver-error"
                });
            }
        }
        return !0;
    }
    async fillRecordRule(e1, t) {
        let r1 = "experience" === t ? "Employment" : "Education";
        (0, a.updateCurrentField)(r1);
        let n = "experience" === t ? this.answer.workExperience : this.answer.education;
        if (!Array.isArray(n) || 0 === n.length) return e1.required && this.progressTracker.updateMissedProgress(r1), !0;
        try {
            let e1 = await (0, a.withSkip)(async ()=>{
                (0, a.checkpoint)();
                let e1 = await this.fillCareerHubRecordSection(t, n);
                return (0, a.checkpoint)(), e1;
            });
            if (this.stopForStepChange(t, 1)) return !1;
            let o = e1.length === n.length && e1.every((e1)=>e1.committed);
            o ? this.progressTracker.updateFilledProgress(r1) : this.progressTracker.updateMissedProgress(r1);
        } catch (e1) {
            if (e1 instanceof a.CancelledError) throw e1;
            this.progressTracker.updateMissedProgress(r1), e1 instanceof a.SkippedError || console.warn("[CareerHub autofill] record section not committed", {
                route: "careerhub",
                step: t,
                ruleCount: 1,
                reason: "record-driver-error"
            });
        }
        return !0;
    }
    formatAnswer(e1) {
        return (0, u.formatAnswer)(e1);
    }
    async doFillForm(e1 = !1) {
        this.resetRunState();
        let t = this.getActiveStep();
        if (!t) return await this.finalizeCareerHubRun();
        let r1 = await this.extractCareerHubActiveRules();
        if (this.stopForStepChange(t, r1.length) || 0 === r1.length || r1.some((e1)=>e1.__careerHub?.step !== t)) return await this.finalizeCareerHubRun();
        this.progressTracker.setFieldsRequiredStatus(r1);
        let n = await this.requestFormAnswers(r1, e1);
        if (this.stopForStepChange(t, r1.length)) return await this.finalizeCareerHubRun();
        if ("string" == typeof n) return n;
        if (this.answer = n ?? S(), "experience" === t || "education" === t) return await this.fillRecordRule(r1[0], t), await this.finalizeCareerHubRun();
        if (!await this.fillInputRules(r1, t)) return await this.finalizeCareerHubRun();
        let o = [
            ...r1
        ];
        for(let r1 = 1; r1 <= b && (await this.waitForCareerHubDynamicRules(), !this.stopForStepChange(t, o.length)); r1++){
            let n = await this.extractCareerHubActiveRules();
            if (this.stopForStepChange(t, n.length)) break;
            let i = this.getNewComboQuestionRules(o, n);
            if (0 === i.length || i.some((e1)=>e1.__careerHub?.step !== t)) break;
            o = [
                ...o,
                ...i
            ];
            let a = (0, c.filterAlreadyCommittedEightfoldRules)(i, this.progressTracker.fieldStatus.filledFields, this.getCareerHubLiveSnapshot(t, i));
            if (0 === a.length) {
                console.info("[CareerHub autofill] skipped committed dynamic rules", {
                    route: "careerhub",
                    step: t,
                    round: r1,
                    skippedRuleCount: i.length
                });
                break;
            }
            for (let e1 of (console.info("[CareerHub autofill] discovered dynamic rules", {
                route: "careerhub",
                step: t,
                round: r1,
                newRuleCount: a.length
            }), a))this.progressTracker.updateFieldRequiredStatus(e1);
            let l = await this.requestFormAnswers(a, e1, {
                updateTimeTrace: !1
            });
            if (this.stopForStepChange(t, a.length)) break;
            if ("string" == typeof l) return l;
            if (l && this.mergeComboQuestionAnswer(l, a), !await this.fillInputRules(a, t)) break;
            r1 === b && console.warn("[CareerHub autofill] stopped at dynamic rule round limit", {
                route: "careerhub",
                step: t,
                maxRounds: b,
                totalRuleCount: o.length
            });
        }
        return await this.finalizeCareerHubRun();
    }
    async extractFormRules() {
        return await this.extractCareerHubActiveRules();
    }
    getSiteName() {
        return "eightfold";
    }
    async handleResumeUpload() {}
    getSubmitButtonSelector() {
        return null;
    }
    getSubmitTrackingScopeKey() {
        return this.getActiveStep();
    }
    async getAutofillSnapshot(e1) {
        let t = this.getActiveStep();
        if (!t) return {};
        let r1 = e1.filter((e1)=>e1.__careerHub?.step === t);
        return this.getCareerHubLiveSnapshot(t, r1);
    }
    async getSubmitSnapshot() {
        let e1 = this.getActiveStep();
        if (!e1) return {};
        let t = await this.extractCareerHubActiveRules();
        return this.getActiveStep() !== e1 ? {} : this.getCareerHubLiveSnapshot(e1, t.filter((t)=>t.__careerHub?.step === e1));
    }
    submitApplication() {}
}
var _c, _c1, _c2, _c3;
$RefreshReg$(_c, "S");
$RefreshReg$(_c1, "E");
$RefreshReg$(_c2, "C");
$RefreshReg$(_c3, "A");

},{}]},["1taNK","7P15y"], "7P15y", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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RDtnQkFDbEYsT0FBTztnQkFDUCxNQUFNO2dCQUNOLFdBQVc7Z0JBQ1gsZ0JBQWdCLEVBQUU7WUFDcEI7UUFDRjtRQUNBLE9BQU8sTUFBTSxJQUFJLENBQUM7SUFDcEI7SUFDQSxNQUFNLG1CQUFtQjtRQUN2QixPQUFPLE1BQU0sSUFBSSxDQUFDO0lBQ3BCO0lBQ0EsY0FBYztRQUNaLE9BQU87SUFDVDtJQUNBLE1BQU0scUJBQXFCLENBQUM7SUFDNUIsMEJBQTBCO1FBQ3hCLE9BQU87SUFDVDtJQUNBLDRCQUE0QjtRQUMxQixPQUFPLElBQUksQ0FBQztJQUNkO0lBQ0EsTUFBTSxvQkFBb0IsRUFBQyxFQUFFO1FBQzNCLElBQUksSUFBSSxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7UUFDaEIsSUFBSSxLQUFJLEdBQUUsT0FBTyxDQUFBLEtBQUssR0FBRSxhQUFhLFNBQVM7UUFDOUMsT0FBTyxJQUFJLENBQUMseUJBQXlCLEdBQUc7SUFDMUM7SUFDQSxNQUFNLG9CQUFvQjtRQUN4QixJQUFJLEtBQUksSUFBSSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUcsT0FBTyxDQUFDO1FBQ2hCLElBQUksSUFBSSxNQUFNLElBQUksQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsS0FBSSxDQUFDLElBQUksSUFBSSxDQUFDLHlCQUF5QixJQUFHLEVBQUUsT0FBTyxDQUFBLElBQUssRUFDckYsYUFBYSxTQUFTO0lBQzNCO0lBQ0Esb0JBQW9CLENBQUM7QUFDdkIiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTc5MGFlYzlhMWI0ZmI0NjQuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvZWlnaHRmb2xkL2NhcmVlcmh1Yi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxlaWdodGZvbGRcXFxcY2FyZWVyaHViLmpzXCIsXCJidW5kbGVJZFwiOlwiY2MwOGEzMTc2YWNjM2VlYlwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IGVNUmg1XHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy9laWdodGZvbGQvY2FyZWVyaHViLmpzXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi4vLi4vb3B0aW9uLXJlc29sdmUtcm9sbG91dCAtPiBrd0g5cSAgPT4gIHNyYy9jb250ZW50cy9vcHRpb24tcmVzb2x2ZS1yb2xsb3V0LmpzXHJcbiAqICAgLi4vYW5zd2VyIC0+IDA1NDhxICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2VpZ2h0Zm9sZC9hbnN3ZXIuanNcclxuICogICAuLi9ydWxlcyAtPiA2TUY5SSAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9laWdodGZvbGQvZm9ybS1ydWxlcy5qc1xyXG4gKiAgIC4vbG9jYXRpb24tb3BlcmF0aW9uIC0+IDM4a1FPICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2VpZ2h0Zm9sZC9sb2NhdGlvbi1vcGVyYXRpb24uanNcclxuICogICAuL29wZXJhdGlvbnMgLT4gZWpKc1ogID0+ICBzcmMvY29udGVudHMvc2l0ZXMvZWlnaHRmb2xkL29wZXJhdGlvbnMuanNcclxuICogICAuL3JlY29yZHMgLT4gNDhxd3IgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvZWlnaHRmb2xkL3JlY29yZHMuanNcclxuICogICAuL3J1bGVzIC0+IGRZeHpPICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2VpZ2h0Zm9sZC9ydWxlcy5qc1xyXG4gKiAgIC4vc3RlcHMgLT4gbGxUYU8gID0+ICBzdGVwcy5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgQHBsYXNtb2hxL21lc3NhZ2luZyAtPiA5Mkd5QiAgPT4gIEBwbGFzbW9ocS9tZXNzYWdpbmcuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXIgLT4gN1Q1ZVcgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9hbnN3ZXIuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb24gLT4gbHVKZnMgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb24uanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvYmFzZS1maWxsZXIgLT4gOHhqNkYgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvYmFzZS1maWxsZXIuanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqL1xyXG5cclxudmFyIG4gPSBlKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtcclxubi5kZWZpbmVJbnRlcm9wRmxhZyhyKSwgbi5leHBvcnQociwgXCJFaWdodGZvbGRDYXJlZXJIdWJcIiwgKCkgPT4gayk7XHJcbnZhciBvID0gZShcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIiksXHJcbiAgaSA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXJcIiksXHJcbiAgYSA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb25cIiksXHJcbiAgbCA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvYmFzZS1maWxsZXJcIiksXHJcbiAgcyA9IGUoXCJ+Y29yZS9lbnVtc1wiKSxcclxuICB1ID0gZShcIi4uL2Fuc3dlclwiKSxcclxuICBjID0gZShcIi4uL3J1bGVzXCIpLFxyXG4gIGQgPSBlKFwiLi9sb2NhdGlvbi1vcGVyYXRpb25cIiksXHJcbiAgZiA9IGUoXCIuLi8uLi9vcHRpb24tcmVzb2x2ZS1yb2xsb3V0XCIpLFxyXG4gIHAgPSBlKFwiLi9vcGVyYXRpb25zXCIpLFxyXG4gIG0gPSBlKFwiLi9yZWNvcmRzXCIpLFxyXG4gIGggPSBlKFwiLi9ydWxlc1wiKSxcclxuICBnID0gZShcIi4vc3RlcHNcIik7XHJcbmxldCBiID0gNCxcclxuICB5ID0gNjAwLFxyXG4gIHYgPSAyMDAsXHJcbiAgdyA9IDE2MDA7XHJcblxyXG5mdW5jdGlvbiBTKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBlZHVjYXRpb246IFtdLFxyXG4gICAgd29ya0V4cGVyaWVuY2U6IFtdLFxyXG4gICAgc2tpbGxzOiBbXSxcclxuICAgIHJlZ3VsYXI6IHt9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBFKGUsIHQpIHtcclxuICBsZXQgciA9IFtdO1xyXG4gIGUucmVndWxhciAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZS5yZWd1bGFyLCB0KSAmJiByLnB1c2goZS5yZWd1bGFyW3RdKTtcclxuICBsZXQgbiA9IGUuZmlsbERhdGFMaXN0Py5maW5kKGUgPT4gZT8ubmFtZSA9PT0gdCk/LnZhbHVlO1xyXG4gIHJldHVybiB2b2lkIDAgIT09IG4gJiYgci5wdXNoKG4pLCByXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHgoZSwgdCkge1xyXG4gIGlmIChlLnR5cGUgPT09IHMuRklFTERfVFlQRS5NVUxUSV9TRUxFQ1QpIHtcclxuICAgIGxldCBlID0gKEFycmF5LmlzQXJyYXkodCkgPyB0IDogW3RdKS5maWx0ZXIoZSA9PiBcInN0cmluZ1wiID09IHR5cGVvZiBlKS5tYXAoZSA9PiBlLnRyaW0oKSlcclxuICAgICAgLmZpbHRlcihCb29sZWFuKTtcclxuICAgIHJldHVybiBlLmxlbmd0aCA/IGUgOiBudWxsXHJcbiAgfVxyXG4gIGxldCByID0gQXJyYXkuaXNBcnJheSh0KSA/IHRbMF0gOiB0O1xyXG4gIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiByICYmIHIudHJpbSgpID8gci50cmltKCkgOiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEMoZSwgdCkge1xyXG4gIGZvciAobGV0IHIgb2YgRSh0LCBlLmxhYmVsKSkge1xyXG4gICAgbGV0IHQgPSB4KGUsIHIpO1xyXG4gICAgaWYgKG51bGwgIT09IHQpIHJldHVybiB0XHJcbiAgfVxyXG4gIHJldHVybiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEEoZSwgdCkge1xyXG4gIHJldHVybiAoMCwgbS5nZXRDYXJlZXJIdWJSZWNvcmRTbmFwc2hvdHMpKGUsIHQpLm1hcCgoe1xyXG4gICAgY2FyZDogZSxcclxuICAgIC4uLnRcclxuICB9KSA9PiB0KVxyXG59XHJcbmNsYXNzIGsgZXh0ZW5kcyBsLkJhc2VGaWxsZXIge1xyXG4gIGdldEZpZWxkSGFuZGxlcnMoKSB7XHJcbiAgICByZXR1cm4ge31cclxuICB9XHJcbiAgZ2V0Q2FyZWVySHViUm9vdCgpIHtcclxuICAgIHJldHVybiBkb2N1bWVudFxyXG4gIH1cclxuICBnZXRDdXJyZW50UGFnZVVybCgpIHtcclxuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZlxyXG4gIH1cclxuICBnZXRBY3RpdmVTdGVwKGUgPSB0aGlzLmdldENhcmVlckh1YlJvb3QoKSkge1xyXG4gICAgbGV0IHQgPSBlO1xyXG4gICAgcmV0dXJuIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgdD8ucXVlcnlTZWxlY3RvciB8fCBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHQ/LnF1ZXJ5U2VsZWN0b3JBbGwgP1xyXG4gICAgICBudWxsIDogKDAsIGcuZ2V0Q2FyZWVySHViQWN0aXZlU3RlcCkoZSlcclxuICB9XHJcbiAgcmVzZXRSdW5TdGF0ZSgpIHtcclxuICAgIHRoaXMudGltZVRyYWNlICYmICh0aGlzLnRpbWVUcmFjZS5ydWxlc1BhcnNlU3RhcnRUaW1lID0gRGF0ZS5ub3coKSwgdGhpcy50aW1lVHJhY2VcclxuICAgICAgLnJlcXVlc3RTdGFydFRpbWUgPSAwLCB0aGlzLnRpbWVUcmFjZS5maWxsU3RhcnRUaW1lID0gMCksIHRoaXMucHJvZ3Jlc3NUcmFja2VyPy5jbGVhcj8uXHJcbiAgICAoKSwgdGhpcy50YXNrUXVldWU/LmNsZWFyPy4oKSwgdGhpcy5hbnN3ZXIgPSBTKClcclxuICB9XHJcbiAgc3RvcEZvclN0ZXBDaGFuZ2UoZSwgdCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0QWN0aXZlU3RlcCgpICE9PSBlICYmICh0aGlzLnByb2dyZXNzVHJhY2tlcj8uY2xlYXI/LigpLCBjb25zb2xlLndhcm4oXHJcbiAgICAgIFwiW0NhcmVlckh1YiBhdXRvZmlsbF0gc3RvcHBlZFwiLCB7XHJcbiAgICAgICAgcm91dGU6IFwiY2FyZWVyaHViXCIsXHJcbiAgICAgICAgc3RlcDogZSxcclxuICAgICAgICBydWxlQ291bnQ6IHQsXHJcbiAgICAgICAgcmVhc29uOiBcImFjdGl2ZS1zdGVwLWNoYW5nZWRcIlxyXG4gICAgICB9KSwgITApXHJcbiAgfVxyXG4gIGFzeW5jIGZpbmFsaXplQ2FyZWVySHViUnVuKCkge1xyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZmluYWxpemVGaWxsRm9ybSgpXHJcbiAgfVxyXG4gIGFzeW5jIGV4dHJhY3RDYXJlZXJIdWJBY3RpdmVSdWxlcygpIHtcclxuICAgIHJldHVybiBhd2FpdCAoMCwgaC5leHRyYWN0Q2FyZWVySHViUnVsZXMpKHRoaXMuZ2V0Q2FyZWVySHViUm9vdCgpKVxyXG4gIH1cclxuICBhc3luYyB3YWl0Rm9yQ2FyZWVySHViRHluYW1pY1J1bGVzKCkge1xyXG4gICAgYXdhaXQgKDAsIGwud2FpdEZvckNvbWJvUXVlc3Rpb25zVG9TZXR0bGUpKHksIHYsIHcpXHJcbiAgfVxyXG4gIGFzeW5jIGZpbGxDYXJlZXJIdWJJbnB1dFJ1bGUoZSwgdCkge1xyXG4gICAgcmV0dXJuIGF3YWl0ICgwLCBwLmZpbGxDYXJlZXJIdWJSdWxlKShlLCB0LCB0aGlzLmdldENhcmVlckh1YlJvb3QoKSlcclxuICB9XHJcbiAgYXN5bmMgcmVzb2x2ZUNhcmVlckh1YkxvY2F0aW9uT3BlcmF0aW9uKGUpIHtcclxuICAgIHJldHVybiBhd2FpdCAoMCwgby5zZW5kVG9CYWNrZ3JvdW5kKSh7XHJcbiAgICAgIG5hbWU6IFwicmVzb2x2ZUF1dG9maWxsT3BlcmF0aW9uXCIsXHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICBvcGVyYXRpb246IGUsXHJcbiAgICAgICAgc291cmNlOiBcImVpZ2h0Zm9sZFwiXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIGlzQ2FyZWVySHViTG9jYXRpb25SZXNvbHZlRW5hYmxlZCgpIHtcclxuICAgIHJldHVybiBmLlYxMTlfT1BUSU9OX1JFU09MVkVfUk9MTE9VVC5laWdodGZvbGRDYXJlZXJIdWJMb2NhdGlvblxyXG4gIH1cclxuICBpc0xvY2F0aW9uUnVsZShlKSB7XHJcbiAgICByZXR1cm4gZS5fX2NhcmVlckh1Yj8uc3RlcCA9PT0gXCJwZXJzb25hbC1pbmZvXCIgJiYgZS5fX2NhcmVlckh1Yj8uY29udHJvbElkID09PSBcImxvY2F0aW9uXCIgJiZcclxuICAgICAgZS50eXBlID09PSBzLkZJRUxEX1RZUEUuU0VMRUNUXHJcbiAgfVxyXG4gIGFzeW5jIGZpbGxDYXJlZXJIdWJMb2NhdGlvblJ1bGUoZSwgdCkge1xyXG4gICAgbGV0IHIgPSAoMCwgZC5nZXRDYXJlZXJIdWJMb2NhdGlvbk9yaWdpbmFsQW5zd2VyKSh0aGlzLmFuc3dlciwgdCk7XHJcbiAgICBpZiAoY29uc29sZS5pbmZvKFxyXG4gICAgICAgIGBbQ2FyZWVySHViXVtMb2NhdGlvbl0gcmVzb2x2ZS1zdGFydCBsYWJlbD0ke0pTT04uc3RyaW5naWZ5KGUubGFiZWwpfSBhbnN3ZXJTb3VyY2U9JHtyLnNvdXJjZXx8XCJtaXNzaW5nXCJ9IGhhc09yaWdpbmFsQW5zd2VyPSR7ISFyLnZhbHVlfWBcclxuICAgICAgICApLCAhci52YWx1ZSkgcmV0dXJuIGNvbnNvbGUud2FybihcclxuICAgICAgXCJbQ2FyZWVySHViXVtMb2NhdGlvbl0gcmVzb2x2ZS1za2lwcGVkIHJlYXNvbj1lbXB0eS1vcmlnaW5hbC1hbnN3ZXJcIiksIHtcclxuICAgICAgY29tbWl0dGVkOiAhMSxcclxuICAgICAgdmFsdWU6IFwiXCJcclxuICAgIH07XHJcbiAgICBsZXQgbiA9ICgwLCBkLmJ1aWxkQ2FyZWVySHViTG9jYXRpb25PcGVyYXRpb24pKHtcclxuICAgICAgICBjdXJyZW50VXJsOiB0aGlzLmdldEN1cnJlbnRQYWdlVXJsKCksXHJcbiAgICAgICAgcXVlc3Rpb246IGUubGFiZWwsXHJcbiAgICAgICAgb3JpZ2luYWxBbnN3ZXI6IHIudmFsdWVcclxuICAgICAgfSksXHJcbiAgICAgIG8gPSBhd2FpdCB0aGlzLnJlc29sdmVDYXJlZXJIdWJMb2NhdGlvbk9wZXJhdGlvbihuKTtcclxuICAgICgwLCBhLmNoZWNrcG9pbnQpKCk7XHJcbiAgICBsZXQgaSA9ICgwLCBkLmdldENhcmVlckh1YlJlc29sdmVkTG9jYXRpb25WYWx1ZSkobyk7XHJcbiAgICByZXR1cm4gKGNvbnNvbGUuaW5mbyhcclxuICAgICAgYFtDYXJlZXJIdWJdW0xvY2F0aW9uXSByZXNvbHZlLXJlc3VsdCBhY3Rpb249JHtvPy5yZXN1bHQ/LmFjdGlvbj8/XCJtaXNzaW5nXCJ9IHNlbGVjdGVkQ291bnQ9JHtvPy5yZXN1bHQ/LnNlbGVjdGVkX3ZhbHVlcz8ubGVuZ3RoPz8wfWBcclxuICAgICAgKSwgaSkgPyBcInBlcnNvbmFsLWluZm9cIiAhPT0gdGhpcy5nZXRBY3RpdmVTdGVwKCkgPyB7XHJcbiAgICAgIGNvbW1pdHRlZDogITEsXHJcbiAgICAgIHZhbHVlOiBcIlwiXHJcbiAgICB9IDogYXdhaXQgdGhpcy5maWxsQ2FyZWVySHViSW5wdXRSdWxlKGUsIGkpIDogKGNvbnNvbGUud2FybihcclxuICAgICAgXCJbQ2FyZWVySHViXVtMb2NhdGlvbl0gcmVzb2x2ZS1ub3QtY29tbWl0dGVkIHJlYXNvbj1lbXB0eS1zZWxlY3RlZC12YWx1ZVwiKSwge1xyXG4gICAgICBjb21taXR0ZWQ6ICExLFxyXG4gICAgICB2YWx1ZTogXCJcIlxyXG4gICAgfSlcclxuICB9XHJcbiAgYXN5bmMgZmlsbENhcmVlckh1YlJlY29yZFNlY3Rpb24oZSwgdCkge1xyXG4gICAgbGV0IHIgPSAoMCwgaS5jcmVhdGVTZWN0aW9uUmVzdWx0UmVwb3J0ZXIpKFwiZXhwZXJpZW5jZVwiID09PSBlID8gXCJlbXBsb3ltZW50XCIgOlxyXG4gICAgXCJlZHVjYXRpb25cIiwge1xyXG4gICAgICBvblNlY3Rpb25SZXN1bHRDaGFuZ2VkOiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVTZWN0aW9uUmVzdWx0XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByLnNldExhYmVsKFwiZXhwZXJpZW5jZVwiID09PSBlID8gXCJFbXBsb3ltZW50XCIgOiBcIkVkdWNhdGlvblwiKSwgYXdhaXQgKDAsIG1cclxuICAgICAgLmZpbGxDYXJlZXJIdWJSZWNvcmRzKShlLCB0LCB7XHJcbiAgICAgIHJvb3Q6IHRoaXMuZ2V0Q2FyZWVySHViUm9vdCgpLFxyXG4gICAgICBzZWN0aW9uUmVwb3J0ZXI6IHJcclxuICAgIH0pXHJcbiAgfVxyXG4gIGdldENhcmVlckh1YkxpdmVTbmFwc2hvdChlLCB0KSB7XHJcbiAgICBpZiAoXCJleHBlcmllbmNlXCIgPT09IGUgfHwgXCJlZHVjYXRpb25cIiA9PT0gZSkge1xyXG4gICAgICBsZXQgdCA9IFwiZXhwZXJpZW5jZVwiID09PSBlID8gXCJFeHBlcmllbmNlXCIgOiBcIkVkdWNhdGlvblwiO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIFt0XTogQShlLCB0aGlzLmdldENhcmVlckh1YlJvb3QoKSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICgwLCBwLmdldENhcmVlckh1YlNuYXBzaG90KSh0LCB0aGlzLmdldENhcmVlckh1YlJvb3QoKSlcclxuICB9XHJcbiAgYXN5bmMgZmlsbElucHV0UnVsZXMoZSwgdCkge1xyXG4gICAgZm9yIChsZXQgciBvZiBlKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0b3BGb3JTdGVwQ2hhbmdlKHQsIGUubGVuZ3RoKSkgcmV0dXJuICExO1xyXG4gICAgICBsZXQgbiA9IEMociwgdGhpcy5hbnN3ZXIpLFxyXG4gICAgICAgIG8gPSB0aGlzLmlzQ2FyZWVySHViTG9jYXRpb25SZXNvbHZlRW5hYmxlZCgpICYmIHRoaXMuaXNMb2NhdGlvblJ1bGUocik7XHJcbiAgICAgIGlmIChudWxsID09PSBuICYmICFvKSB7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3Moci5sYWJlbCk7XHJcbiAgICAgICAgY29udGludWVcclxuICAgICAgfSgwLCBhLnVwZGF0ZUN1cnJlbnRGaWVsZCkoci5sYWJlbCk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IGkgPSBhd2FpdCAoMCwgYS53aXRoU2tpcCkoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgKDAsIGEuY2hlY2twb2ludCkoKTtcclxuICAgICAgICAgIGxldCBlID0gbyA/IGF3YWl0IHRoaXMuZmlsbENhcmVlckh1YkxvY2F0aW9uUnVsZShyLCBcInN0cmluZ1wiID09IHR5cGVvZiBuID8gbiA6XHJcbiAgICAgICAgICAgIFwiXCIpIDogYXdhaXQgdGhpcy5maWxsQ2FyZWVySHViSW5wdXRSdWxlKHIsIG4pO1xyXG4gICAgICAgICAgcmV0dXJuICgwLCBhLmNoZWNrcG9pbnQpKCksIGVcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5zdG9wRm9yU3RlcENoYW5nZSh0LCBlLmxlbmd0aCkpIHJldHVybiAhMTtcclxuICAgICAgICBpLmNvbW1pdHRlZCA/IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKHIubGFiZWwpIDogdGhpcy5wcm9ncmVzc1RyYWNrZXJcclxuICAgICAgICAgIC51cGRhdGVNaXNzZWRQcm9ncmVzcyhyLmxhYmVsKVxyXG4gICAgICB9IGNhdGNoIChuKSB7XHJcbiAgICAgICAgaWYgKG4gaW5zdGFuY2VvZiBhLkNhbmNlbGxlZEVycm9yKSB0aHJvdyBuO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKHIubGFiZWwpLCBuIGluc3RhbmNlb2YgYS5Ta2lwcGVkRXJyb3IgfHxcclxuICAgICAgICAgIGNvbnNvbGUud2FybihcIltDYXJlZXJIdWIgYXV0b2ZpbGxdIGZpZWxkIG5vdCBjb21taXR0ZWRcIiwge1xyXG4gICAgICAgICAgICByb3V0ZTogXCJjYXJlZXJodWJcIixcclxuICAgICAgICAgICAgc3RlcDogdCxcclxuICAgICAgICAgICAgcnVsZUNvdW50OiBlLmxlbmd0aCxcclxuICAgICAgICAgICAgcmVhc29uOiBcImZpZWxkLWRyaXZlci1lcnJvclwiXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gITBcclxuICB9XHJcbiAgYXN5bmMgZmlsbFJlY29yZFJ1bGUoZSwgdCkge1xyXG4gICAgbGV0IHIgPSBcImV4cGVyaWVuY2VcIiA9PT0gdCA/IFwiRW1wbG95bWVudFwiIDogXCJFZHVjYXRpb25cIjtcclxuICAgICgwLCBhLnVwZGF0ZUN1cnJlbnRGaWVsZCkocik7XHJcbiAgICBsZXQgbiA9IFwiZXhwZXJpZW5jZVwiID09PSB0ID8gdGhpcy5hbnN3ZXIud29ya0V4cGVyaWVuY2UgOiB0aGlzLmFuc3dlci5lZHVjYXRpb247XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobikgfHwgMCA9PT0gbi5sZW5ndGgpIHJldHVybiBlLnJlcXVpcmVkICYmIHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgIC51cGRhdGVNaXNzZWRQcm9ncmVzcyhyKSwgITA7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgZSA9IGF3YWl0ICgwLCBhLndpdGhTa2lwKShhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgKDAsIGEuY2hlY2twb2ludCkoKTtcclxuICAgICAgICBsZXQgZSA9IGF3YWl0IHRoaXMuZmlsbENhcmVlckh1YlJlY29yZFNlY3Rpb24odCwgbik7XHJcbiAgICAgICAgcmV0dXJuICgwLCBhLmNoZWNrcG9pbnQpKCksIGVcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICh0aGlzLnN0b3BGb3JTdGVwQ2hhbmdlKHQsIDEpKSByZXR1cm4gITE7XHJcbiAgICAgIGxldCBvID0gZS5sZW5ndGggPT09IG4ubGVuZ3RoICYmIGUuZXZlcnkoZSA9PiBlLmNvbW1pdHRlZCk7XHJcbiAgICAgIG8gPyB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhyKSA6IHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgICAgLnVwZGF0ZU1pc3NlZFByb2dyZXNzKHIpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgYS5DYW5jZWxsZWRFcnJvcikgdGhyb3cgZTtcclxuICAgICAgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MociksIGUgaW5zdGFuY2VvZiBhLlNraXBwZWRFcnJvciB8fCBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCJbQ2FyZWVySHViIGF1dG9maWxsXSByZWNvcmQgc2VjdGlvbiBub3QgY29tbWl0dGVkXCIsIHtcclxuICAgICAgICAgIHJvdXRlOiBcImNhcmVlcmh1YlwiLFxyXG4gICAgICAgICAgc3RlcDogdCxcclxuICAgICAgICAgIHJ1bGVDb3VudDogMSxcclxuICAgICAgICAgIHJlYXNvbjogXCJyZWNvcmQtZHJpdmVyLWVycm9yXCJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICEwXHJcbiAgfVxyXG4gIGZvcm1hdEFuc3dlcihlKSB7XHJcbiAgICByZXR1cm4gKDAsIHUuZm9ybWF0QW5zd2VyKShlKVxyXG4gIH1cclxuICBhc3luYyBkb0ZpbGxGb3JtKGUgPSAhMSkge1xyXG4gICAgdGhpcy5yZXNldFJ1blN0YXRlKCk7XHJcbiAgICBsZXQgdCA9IHRoaXMuZ2V0QWN0aXZlU3RlcCgpO1xyXG4gICAgaWYgKCF0KSByZXR1cm4gYXdhaXQgdGhpcy5maW5hbGl6ZUNhcmVlckh1YlJ1bigpO1xyXG4gICAgbGV0IHIgPSBhd2FpdCB0aGlzLmV4dHJhY3RDYXJlZXJIdWJBY3RpdmVSdWxlcygpO1xyXG4gICAgaWYgKHRoaXMuc3RvcEZvclN0ZXBDaGFuZ2UodCwgci5sZW5ndGgpIHx8IDAgPT09IHIubGVuZ3RoIHx8IHIuc29tZShlID0+IGUuX19jYXJlZXJIdWJcclxuICAgICAgICA/LnN0ZXAgIT09IHQpKSByZXR1cm4gYXdhaXQgdGhpcy5maW5hbGl6ZUNhcmVlckh1YlJ1bigpO1xyXG4gICAgdGhpcy5wcm9ncmVzc1RyYWNrZXIuc2V0RmllbGRzUmVxdWlyZWRTdGF0dXMocik7XHJcbiAgICBsZXQgbiA9IGF3YWl0IHRoaXMucmVxdWVzdEZvcm1BbnN3ZXJzKHIsIGUpO1xyXG4gICAgaWYgKHRoaXMuc3RvcEZvclN0ZXBDaGFuZ2UodCwgci5sZW5ndGgpKSByZXR1cm4gYXdhaXQgdGhpcy5maW5hbGl6ZUNhcmVlckh1YlJ1bigpO1xyXG4gICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIG4pIHJldHVybiBuO1xyXG4gICAgaWYgKHRoaXMuYW5zd2VyID0gbiA/PyBTKCksIFwiZXhwZXJpZW5jZVwiID09PSB0IHx8IFwiZWR1Y2F0aW9uXCIgPT09IHQpIHJldHVybiBhd2FpdCB0aGlzXHJcbiAgICAgIC5maWxsUmVjb3JkUnVsZShyWzBdLCB0KSwgYXdhaXQgdGhpcy5maW5hbGl6ZUNhcmVlckh1YlJ1bigpO1xyXG4gICAgaWYgKCFhd2FpdCB0aGlzLmZpbGxJbnB1dFJ1bGVzKHIsIHQpKSByZXR1cm4gYXdhaXQgdGhpcy5maW5hbGl6ZUNhcmVlckh1YlJ1bigpO1xyXG4gICAgbGV0IG8gPSBbLi4ucl07XHJcbiAgICBmb3IgKGxldCByID0gMTsgciA8PSBiICYmIChhd2FpdCB0aGlzLndhaXRGb3JDYXJlZXJIdWJEeW5hbWljUnVsZXMoKSwgIXRoaXNcclxuICAgICAgICAuc3RvcEZvclN0ZXBDaGFuZ2UodCwgby5sZW5ndGgpKTsgcisrKSB7XHJcbiAgICAgIGxldCBuID0gYXdhaXQgdGhpcy5leHRyYWN0Q2FyZWVySHViQWN0aXZlUnVsZXMoKTtcclxuICAgICAgaWYgKHRoaXMuc3RvcEZvclN0ZXBDaGFuZ2UodCwgbi5sZW5ndGgpKSBicmVhaztcclxuICAgICAgbGV0IGkgPSB0aGlzLmdldE5ld0NvbWJvUXVlc3Rpb25SdWxlcyhvLCBuKTtcclxuICAgICAgaWYgKDAgPT09IGkubGVuZ3RoIHx8IGkuc29tZShlID0+IGUuX19jYXJlZXJIdWI/LnN0ZXAgIT09IHQpKSBicmVhaztcclxuICAgICAgbyA9IFsuLi5vLCAuLi5pXTtcclxuICAgICAgbGV0IGEgPSAoMCwgYy5maWx0ZXJBbHJlYWR5Q29tbWl0dGVkRWlnaHRmb2xkUnVsZXMpKGksIHRoaXMucHJvZ3Jlc3NUcmFja2VyLmZpZWxkU3RhdHVzXHJcbiAgICAgICAgLmZpbGxlZEZpZWxkcywgdGhpcy5nZXRDYXJlZXJIdWJMaXZlU25hcHNob3QodCwgaSkpO1xyXG4gICAgICBpZiAoMCA9PT0gYS5sZW5ndGgpIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oXCJbQ2FyZWVySHViIGF1dG9maWxsXSBza2lwcGVkIGNvbW1pdHRlZCBkeW5hbWljIHJ1bGVzXCIsIHtcclxuICAgICAgICAgIHJvdXRlOiBcImNhcmVlcmh1YlwiLFxyXG4gICAgICAgICAgc3RlcDogdCxcclxuICAgICAgICAgIHJvdW5kOiByLFxyXG4gICAgICAgICAgc2tpcHBlZFJ1bGVDb3VudDogaS5sZW5ndGhcclxuICAgICAgICB9KTtcclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGUgb2YgKGNvbnNvbGUuaW5mbyhcIltDYXJlZXJIdWIgYXV0b2ZpbGxdIGRpc2NvdmVyZWQgZHluYW1pYyBydWxlc1wiLCB7XHJcbiAgICAgICAgICByb3V0ZTogXCJjYXJlZXJodWJcIixcclxuICAgICAgICAgIHN0ZXA6IHQsXHJcbiAgICAgICAgICByb3VuZDogcixcclxuICAgICAgICAgIG5ld1J1bGVDb3VudDogYS5sZW5ndGhcclxuICAgICAgICB9KSwgYSkpIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpZWxkUmVxdWlyZWRTdGF0dXMoZSk7XHJcbiAgICAgIGxldCBsID0gYXdhaXQgdGhpcy5yZXF1ZXN0Rm9ybUFuc3dlcnMoYSwgZSwge1xyXG4gICAgICAgIHVwZGF0ZVRpbWVUcmFjZTogITFcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICh0aGlzLnN0b3BGb3JTdGVwQ2hhbmdlKHQsIGEubGVuZ3RoKSkgYnJlYWs7XHJcbiAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBsKSByZXR1cm4gbDtcclxuICAgICAgaWYgKGwgJiYgdGhpcy5tZXJnZUNvbWJvUXVlc3Rpb25BbnN3ZXIobCwgYSksICFhd2FpdCB0aGlzLmZpbGxJbnB1dFJ1bGVzKGEsIHQpKSBicmVhaztcclxuICAgICAgciA9PT0gYiAmJiBjb25zb2xlLndhcm4oXCJbQ2FyZWVySHViIGF1dG9maWxsXSBzdG9wcGVkIGF0IGR5bmFtaWMgcnVsZSByb3VuZCBsaW1pdFwiLCB7XHJcbiAgICAgICAgcm91dGU6IFwiY2FyZWVyaHViXCIsXHJcbiAgICAgICAgc3RlcDogdCxcclxuICAgICAgICBtYXhSb3VuZHM6IGIsXHJcbiAgICAgICAgdG90YWxSdWxlQ291bnQ6IG8ubGVuZ3RoXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5maW5hbGl6ZUNhcmVlckh1YlJ1bigpXHJcbiAgfVxyXG4gIGFzeW5jIGV4dHJhY3RGb3JtUnVsZXMoKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5leHRyYWN0Q2FyZWVySHViQWN0aXZlUnVsZXMoKVxyXG4gIH1cclxuICBnZXRTaXRlTmFtZSgpIHtcclxuICAgIHJldHVybiBcImVpZ2h0Zm9sZFwiXHJcbiAgfVxyXG4gIGFzeW5jIGhhbmRsZVJlc3VtZVVwbG9hZCgpIHt9XHJcbiAgZ2V0U3VibWl0QnV0dG9uU2VsZWN0b3IoKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuICBnZXRTdWJtaXRUcmFja2luZ1Njb3BlS2V5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0QWN0aXZlU3RlcCgpXHJcbiAgfVxyXG4gIGFzeW5jIGdldEF1dG9maWxsU25hcHNob3QoZSkge1xyXG4gICAgbGV0IHQgPSB0aGlzLmdldEFjdGl2ZVN0ZXAoKTtcclxuICAgIGlmICghdCkgcmV0dXJuIHt9O1xyXG4gICAgbGV0IHIgPSBlLmZpbHRlcihlID0+IGUuX19jYXJlZXJIdWI/LnN0ZXAgPT09IHQpO1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2FyZWVySHViTGl2ZVNuYXBzaG90KHQsIHIpXHJcbiAgfVxyXG4gIGFzeW5jIGdldFN1Ym1pdFNuYXBzaG90KCkge1xyXG4gICAgbGV0IGUgPSB0aGlzLmdldEFjdGl2ZVN0ZXAoKTtcclxuICAgIGlmICghZSkgcmV0dXJuIHt9O1xyXG4gICAgbGV0IHQgPSBhd2FpdCB0aGlzLmV4dHJhY3RDYXJlZXJIdWJBY3RpdmVSdWxlcygpO1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0QWN0aXZlU3RlcCgpICE9PSBlID8ge30gOiB0aGlzLmdldENhcmVlckh1YkxpdmVTbmFwc2hvdChlLCB0LmZpbHRlcih0ID0+IHRcclxuICAgICAgLl9fY2FyZWVySHViPy5zdGVwID09PSBlKSlcclxuICB9XHJcbiAgc3VibWl0QXBwbGljYXRpb24oKSB7fVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZWVyaHViLjZhY2MzZWViLmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);