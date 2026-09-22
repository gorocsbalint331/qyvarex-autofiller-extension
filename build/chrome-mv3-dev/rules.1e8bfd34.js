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
})({"f4ylS":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\taleo\\rules.js",
    "bundleId": "797d84dd1e8bfd34",
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
var j = z(require("33eaa025bf6a918f"));
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

},{"33eaa025bf6a918f":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"lajF3":[function(require,module,exports) {
/**
 * Parcel module id: IwDjp
 * Resolved path: src/contents/sites/taleo/rules.js
 * Dependencies:
 *   ./operations -> eMu8S  =>  src/contents/sites/taleo/operations.js
 *   ./section-options -> lBPpb  =>  src/contents/sites/taleo/section-options.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/crawler/utils/executor -> iAZMN  =>  src/contents/crawler/utils/executor.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils -> czatw  =>  src/utils.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getCwsV2CoverLetterTextarea", ()=>H), n.export(r, "getTaleoTypeIndex", ()=>Y), n.export(r, "handleDuplicateHardcodeItemLabel", ()=>W), n.export(r, "extractRules", ()=>G), n.export(r, "extractInput", ()=>K), n.export(r, "getFormSnapshot", ()=>Q);
var o = e("~contents/crawler/utils/executor"), i = e("~core/enums"), a = e("~core/xpath"), l = e("~utils"), s = e("./operations"), u = e("./section-options");
function c(e1) {
    return e1.replace(/[\u00a0\u200b-\u200d\ufeff]/g, " ").replace(/[\n\r\u21b5]+/g, " ").replace(/\s+/g, " ").replace(/\s*\.\s*required$/i, "").replace(/\s*required$/i, "").trim();
}
function d(e1) {
    return e1.replace(/[\u00a0\u200b-\u200d\ufeff]/g, " ").replace(/[\n\r\u21b5]+/g, " ").replace(/\s+/g, " ").trim();
}
function f(e1, t) {
    let r1 = e1, n = t?.textContent || "", o = t?.getAttribute("title") || "", i = !!t?.querySelector("img.mandatory-img") || /mandatory/i.test(o) || /\brequired\b/i.test(n);
    return !!r1.required || "true" === r1.getAttribute("aria-required") || i;
}
function p(e1) {
    let t = (0, a.getFirstOrderedNode)("./ancestor::fieldset[1]", e1);
    return t ? t.querySelector("legend label") || t.querySelector("legend") : null;
}
function m(e1) {
    let t = p(e1);
    return !!t && f(e1, t);
}
function h(e1, t) {
    let r1 = e1.id || "", n = e1.getAttribute("name") || "";
    return !!("Select a language" === t && (r1.includes("eSignatureBlock-selectOneMenu_language") || n.includes("eSignatureBlock-selectOneMenu_language")));
}
function g(e1) {
    let t = e1.closest(".oracletaleocwsv2-form-group-full");
    if (!t) return "";
    let r1 = t.querySelector(".oracletaleocwsv2-text-above-field-label");
    return c(r1?.textContent || "");
}
function b(e1) {
    return "SPAN" === e1.tagName && e1.classList.contains("input-date-time");
}
function y(e1) {
    let t = [
        e1.id,
        e1.getAttribute("name") || "",
        e1.getAttribute("data-id") || "",
        ...Array.from(e1.querySelectorAll("[id], [name]")).flatMap((e1)=>[
                e1.id || "",
                e1.getAttribute("name") || ""
            ])
    ].join(" ");
    return /EndDate/i.test(t) ? "end" : /BeginDate/i.test(t) ? "begin" : /graduationDate/i.test(t) ? "graduation" : /startDate/i.test(t) ? "start" : null;
}
function v(e1, t) {
    let r1 = c(e1).toLowerCase();
    return "end" === t ? /\bend(\s+date)?\b/.test(r1) || r1.includes("date to") : "begin" === t ? /\b(begin|start)(\s+date)?\b/.test(r1) || r1.includes("date from") : "graduation" === t ? r1.includes("graduation") : /\bstart(\s+date)?\b/.test(r1);
}
function w(e1) {
    return Array.from(e1.querySelectorAll("label, span.entity-label")).filter((e1)=>e1 instanceof HTMLElement && !_(e1) && !(0, l.isEmpty)(c(e1.textContent || "")));
}
function S(e1, t, r1) {
    let n = w(t);
    if (0 === n.length) return null;
    let o = null === r1 ? n : n.filter((e1)=>v(e1.textContent || "", r1)), i = o.length > 0 ? o : n, a = i.filter((t)=>{
        let r1 = t.compareDocumentPosition(e1);
        return !!(r1 & Node.DOCUMENT_POSITION_FOLLOWING);
    });
    if (a.length > 0) return a[a.length - 1];
    let l = i.filter((t)=>{
        let r1 = t.compareDocumentPosition(e1);
        return !!(r1 & Node.DOCUMENT_POSITION_PRECEDING);
    });
    return l.length > 0 ? l[0] : null;
}
_c = S;
function E(e1) {
    let t = y(e1), r1 = Array.from(new Set([
        e1.parentElement,
        e1.closest("td"),
        e1.closest("fieldset")
    ].filter((e1)=>e1 instanceof HTMLElement)));
    for (let n of r1){
        let r1 = S(e1, n, t);
        if (r1) return r1;
    }
    return (0, a.getFirstOrderedNode)('./ancestor::td[1]//*[self::label or (self::span and contains(@class, "entity-label"))][1]', e1) || (0, a.getFirstOrderedNode)('./ancestor::fieldset[1]//*[self::label or (self::span and contains(@class, "entity-label"))][1]', e1);
}
_c1 = E;
function x(e1) {
    let t = e1.querySelector(".input-date-time-text") || e1.querySelector('[id$=".display"]') || e1, r1 = c(t.textContent || "");
    return r1 && "not specified" !== r1.toLowerCase() ? r1 : "";
}
function C(e1) {
    if (!b(e1)) return null;
    let t = E(e1), r1 = c(t?.textContent || "");
    return (0, l.isEmpty)(r1) ? null : {
        type: i.FIELD_TYPE.DATE,
        label: r1,
        required: f(e1, t),
        $label: t,
        $input: e1
    };
}
_c2 = C;
function A(e1, t) {
    let r1 = Array.from(t.querySelectorAll("span.input-date-time")).filter((e1)=>e1 instanceof HTMLElement);
    for (let t of r1){
        let r1 = E(t), n = c(r1?.textContent || ""), o = y(t);
        if (!o && !/\b(begin|start|end|graduation)(\s+date)?\b/i.test(n) && !/\bdate\s+(from|to)\b/i.test(n)) continue;
        let i = C(t);
        i && (e1.some((e1)=>F(e1) === F(i)) || e1.push(i));
    }
}
_c3 = A;
function k(e1) {
    let t = e1.getAttribute("placeholder")?.trim();
    if (t && /[MDY]/i.test(t)) return t;
}
function T(e1) {
    if (!(e1 instanceof HTMLInputElement)) return !1;
    let t = (e1.getAttribute("type") || "").toLowerCase(), r1 = e1.getAttribute("placeholder")?.trim() || "";
    return "date" === t || e1.classList.contains("oracletaleocwsv2-datepicker-trigger") || /[MDY]\s*\/\s*[MDY]\s*\/\s*[Y]{2,4}/i.test(r1);
}
_c4 = T;
function F(e1) {
    let t = "options" in e1 && Array.isArray(e1.options) ? [
        ...e1.options
    ].filter((e1)=>"string" == typeof e1).map(d).join("|") : "";
    return `${e1.type}::${c(e1.label)}::${t}`;
}
_c5 = F;
function I(e1) {
    return `${e1.type}::${c(e1.label)}`;
}
_c6 = I;
function j(e1, t) {
    let r1 = Array.from(new Set([
        ...e1.options || [],
        ...t.options || []
    ])), n = Array.from(new Set([
        ...e1.$checkboxs || [],
        ...t.$checkboxs || []
    ]));
    e1.options = r1, e1.$checkboxs = n, e1.required = e1.required || t.required;
}
function D(e1, t) {
    if (!t) return;
    if (t.type === i.FIELD_TYPE.CHECKBOX) {
        let r1 = e1.find((e1)=>e1.type === i.FIELD_TYPE.CHECKBOX && I(e1) === I(t));
        if (r1) {
            j(r1, t);
            return;
        }
    }
    let r1 = F(t), n = e1.some((e1)=>F(e1) === r1);
    n || e1.push(t);
}
_c7 = D;
function P(e1) {
    return s.TALEO_HARDCODE_CONFIG[e1];
}
_c8 = P;
function _(e1) {
    if (!(e1 instanceof HTMLElement)) return !1;
    let t = e1.getAttribute("style") || "", r1 = e1 instanceof HTMLInputElement ? e1.type.toLowerCase() : "";
    return "hidden" === r1 || /display\s*:\s*none/i.test(t) || e1.classList.contains("hide");
}
function L(e1) {
    if (!(e1 instanceof HTMLElement) || _(e1)) return !1;
    let t = e1.getBoundingClientRect(), r1 = window.getComputedStyle(e1);
    return t.width > 0 && t.height > 0 && "none" !== r1.display && "hidden" !== r1.visibility;
}
_c9 = L;
function R(e1) {
    if (!(e1 instanceof HTMLElement)) return !1;
    let t = e1;
    for(; t;){
        if (t.hidden || _(t)) return !1;
        let e1 = window.getComputedStyle(t);
        if ("none" === e1.display || "hidden" === e1.visibility || "true" === t.getAttribute("aria-hidden")) return !1;
        t = t.parentElement;
    }
    return !0;
}
_c10 = R;
function O(e1, t = {}) {
    let r1 = e1.getAttribute("type") || "checkbox", n = e1.getAttribute("name") || "", o = [];
    if (n && (o = Array.from(document.querySelectorAll(`input[type="${r1}"]`)).filter((e1)=>e1 instanceof HTMLInputElement).filter((e1)=>e1.getAttribute("name") === n && (!!t.allowHidden || R(e1)))), 0 === o.length) {
        let r1 = e1.getAttribute("id");
        if (!r1) return [];
        o = Array.from(document.querySelectorAll(`input[id="${r1}"]`)).filter((e1)=>e1 instanceof HTMLInputElement).filter((e1)=>!!t.allowHidden || R(e1));
    }
    return o;
}
_c11 = O;
function M(e1, t) {
    let r1 = "education" === t ? "oracletaleocwsv2-dynamic-content-education" : "oracletaleocwsv2-dynamic-content-work";
    return !!e1.closest(`div.${r1}`);
}
_c12 = M;
function N(e1, t) {
    return e1 instanceof HTMLElement && (e1.getAttribute("data-type") === t || !!M(e1, t) && !!e1.querySelector("input, textarea, select, a.save-edit-trigger, button.save-edit-trigger"));
}
_c13 = N;
function $(e1) {
    return "work" === e1 ? ".//div[contains(@class, 'well') and .//input[contains(@name, 'WORK_HISTORY_')] and .//a[contains(@class, 'save-edit-trigger') and @aria-label='Save']]" : ".//div[contains(@class, 'well') and (.//input[contains(@name, 'EDUCATION_')] or .//input[contains(@name, 'education_')] or .//select[contains(@name, 'education_')]) and .//a[contains(@class, 'save-edit-trigger') and @aria-label='Save']]";
}
function B(e1) {
    return `.//div[@data-type='${e1}']`;
}
_c14 = B;
function q(e1, t, r1) {
    let n = (0, a.getOrderedNodes)(e1.snapshot[t], document);
    if (2 !== t) return n;
    let o = (0, a.getOrderedNodes)($(r1), document), i = (0, a.getOrderedNodes)(B(r1), document);
    return Array.from(new Set([
        ...n,
        ...o,
        ...i
    ]));
}
function U() {
    let e1 = Array.from(document.querySelectorAll("table.tablelist")).filter(L), t = (0, a.getOrderedNodes)("//div[contains(@id, 'step-') and contains(@class, '-active')]", document).filter(L);
    return 0 === t.length && (t = Array.from(document.querySelectorAll("form")).filter(L)), {
        sections: t = Array.from(new Set([
            ...t,
            ...e1
        ])),
        usingTableListScope: !1
    };
}
_c15 = U;
function H(e1 = {}) {
    let { requireVisible: t = !0 } = e1, r1 = document.querySelectorAll("h2");
    for (let e1 of r1){
        if (e1.textContent?.trim().toLowerCase() !== "cover letter") continue;
        let r1 = e1.nextElementSibling;
        for(; r1 && "H1" !== r1.tagName && "H2" !== r1.tagName;){
            let e1 = r1.matches("textarea") ? r1 : r1.querySelector("textarea");
            if (e1 && (!t || R(e1))) return e1;
            r1 = r1.nextElementSibling;
        }
    }
    return null;
}
_c16 = H;
function Y() {
    for (let e1 of Object.keys(s.TALEO_HARDCODE_CONFIG)){
        let t = P(e1);
        for(let e1 = 0; e1 < t.container.length; e1++){
            let r1 = (0, a.getFirstOrderedNode)(t.container[e1]);
            if (r1) return e1;
        }
    }
    return 0;
}
_c17 = Y;
async function z(e1, t, r1) {
    if (r1 <= 0) return;
    let n = null;
    for(let r1 = 0; r1 < 10; r1++){
        let r1 = (0, a.getFirstOrderedNode)(t, e1);
        if (r1 && "disabled" !== r1.getAttribute("disabled")) {
            n = r1;
            break;
        }
        await (0, o.delay)(200);
    }
    if (n) {
        for(let e1 = 0; e1 < r1; e1++)n.click(), await (0, o.delay)(800);
        await (0, o.delay)(500);
    }
}
async function V({ typeIndex: e1 }) {
    let t = P("education"), r1 = (0, a.getFirstOrderedNode)(t.container[e1]);
    if (r1) {
        let n = (0, a.getOrderedNodes)(t.snapshot[e1], r1);
        0 === n.length && (await z(r1, t.addButton[e1], 2 === e1 ? 1 : 0), await (0, o.delay)(2 === e1 ? 800 : 200));
    }
    let n = P("workExperience"), i = (0, a.getFirstOrderedNode)(n.container[e1]);
    if (i) {
        let t = (0, a.getOrderedNodes)(n.snapshot[e1], i);
        0 === t.length && (await z(i, n.addButton[e1], 2 === e1 ? 1 : 0), await (0, o.delay)(2 === e1 ? 800 : 200));
    }
}
_c18 = V;
function W(e1) {
    let t = {};
    for (let r1 of e1){
        if (!t[r1.label]) {
            t[r1.label] = r1;
            continue;
        }
        let e1 = t[r1.label];
        if (e1.label.toLowerCase().includes("date") || e1.$input && e1.$input.getAttribute("name")?.includes("date")) {
            let t = !0;
            e1.$input && e1.$input.getAttribute("name") && e1.$input.getAttribute("name")?.includes("month") ? t = !0 : e1.options && e1.options.length > 0 && e1.options.includes("January") && (t = !0), t ? (e1.label = e1.label + " Month", r1.label = r1.label + " Year") : (e1.label = e1.label + " Year", r1.label = r1.label + " Month");
        }
    }
}
_c19 = W;
async function G({ typeIndex: e1 }) {
    await V({
        typeIndex: e1
    });
    let { sections: t } = U(), r1 = [], n = null, o = null, l = P("education"), s = (0, a.getFirstOrderedNode)(l.container[e1]);
    s && (n = (0, a.getFirstOrderedNode)(l.addButton[e1], s));
    let c = P("workExperience"), d = (0, a.getFirstOrderedNode)(c.container[e1]);
    d && (o = (0, a.getFirstOrderedNode)(c.addButton[e1], d));
    let f = o ? o.getBoundingClientRect().width : 0, p = n ? n.getBoundingClientRect().width : 0, m = 2 === e1 && R(n), h = 2 === e1 && R(o), g = q(l, e1, "education"), b = [
        ...g
    ].filter((t)=>2 === e1 && N(t, "education") || !!t.querySelector("table") || "education" === t.getAttribute("data-type")), y = q(c, e1, "work"), v = [
        ...y
    ].filter((t)=>2 === e1 && N(t, "work") || !!t.querySelector("table") || "work" === t.getAttribute("data-type")), w = [
        ...b,
        ...v
    ], S = "Candidate eSignature Date", E = !1;
    for (let n of t){
        let t = (0, a.getOrderedNodes)(".//input | .//textarea | .//select", n);
        for (let n of t){
            if (w.some((e1)=>e1.contains(n))) continue;
            let t = await K(n, {
                typeIndex: e1
            });
            if (t) {
                if (t.label === S) {
                    if (E) continue;
                    E = !0;
                }
                D(r1, t);
            }
        }
    }
    if (0 === r1.length && !p && !f) {
        let t = (0, a.getOrderedNodes)("//span[contains(@id, 'mastercontentpanel') and contains(@class, 'mastercontentpanel')]", document);
        for (let n of t){
            let t = (0, a.getOrderedNodes)(".//input | .//textarea | .//select", n);
            for (let n of t){
                let t = await K(n, {
                    typeIndex: e1
                });
                t?.label.includes("Work Experience") || D(r1, t);
            }
        }
    }
    if (2 === e1) {
        let e1 = H();
        if (e1 && !r1.some((t)=>"$input" in t && t.$input === e1)) {
            let t = Array.from(document.querySelectorAll("h2")).find((e1)=>e1.textContent?.trim().toLowerCase() === "cover letter");
            D(r1, {
                type: i.FIELD_TYPE.TEXT,
                label: "Cover Letter",
                required: !1,
                $label: t ?? e1,
                $input: e1
            });
        }
    }
    for (let t of b){
        let n = [], o = (0, a.getOrderedNodes)(1 === e1 ? ".//input[not(@type='submit') and not(@type='hidden')] | .//textarea | .//select | .//span[contains(@class, 'input-date-time')]" : ".//input[not(@type='submit') and not(@type='hidden')] | .//textarea | .//select", t), l = m && M(t, "education") ? {
            allowHidden: !0,
            allowDisabled: !0,
            typeIndex: e1
        } : {
            typeIndex: e1
        };
        for (let e1 of o){
            let t = await K(e1, l);
            t && (n.some((e1)=>F(e1) === F(t)) || n.push(t));
        }
        1 === e1 && A(n, t), W(n), 0 !== n.length && r1.push({
            type: i.FIELD_TYPE.EDUCATION,
            label: "Education",
            required: !0,
            options: (0, u.mapChildrenToOptions)(n),
            children: n
        });
    }
    for (let t of v){
        let n = [], o = (0, a.getOrderedNodes)(1 === e1 ? ".//input[not(@type='submit') and not(@type='hidden')] | .//textarea | .//select | .//span[contains(@class, 'input-date-time')]" : ".//input[not(@type='submit') and not(@type='hidden')] | .//textarea | .//select", t), l = h && M(t, "work") ? {
            allowHidden: !0,
            allowDisabled: !0,
            typeIndex: e1
        } : {
            typeIndex: e1
        };
        for (let e1 of o){
            let t = await K(e1, l);
            !(!t || t.label.includes("Work Experience")) && (n.some((e1)=>F(e1) === F(t)) || n.push(t));
        }
        1 === e1 && A(n, t), W(n), 0 !== n.length && r1.push({
            type: i.FIELD_TYPE.EMPLOYMENT,
            label: "Employment",
            required: !0,
            options: (0, u.mapChildrenToOptions)(n),
            children: n
        });
    }
    let x = [
        document
    ];
    for (let e1 of x){
        let t = (0, a.getOrderedNodes)(".//div[contains(@test-id, 'application-step-questionnaire')]", e1);
        for (let e1 of t){
            let t = (0, a.getOrderedNodes)(".//input | .//textarea | .//select", e1);
            for (let e1 of t){
                let t = await K(e1);
                D(r1, t);
            }
        }
    }
    let C = (0, a.getFirstOrderedNode)(".//button[@test-id='application-next-step']"), k = (0, a.getFirstOrderedNode)(".//input[@value='Save and Continue']"), T = (0, a.getFirstOrderedNode)(".//input[@value='Submit']"), I = C ? C.textContent?.trim() : k ? "Save and Continue" : T ? "Submit" : "";
    return [
        r1.filter((e1)=>!e1?.label.includes("Work Experience")).reduce((e1, t)=>(D(e1, t), e1), []),
        I
    ];
}
_c20 = G;
async function K(e1, t = {}) {
    if (!t.allowHidden && !R(e1)) return null;
    if (1 === t.typeIndex && b(e1)) return C(e1);
    let r1 = (0, a.getFirstOrderedNode)('./ancestor::div[contains(@class,"form-group")]//label', e1), n = document.querySelector(`[for="${e1.id}"]`), s = (0, a.getFirstOrderedNode)("./ancestor::td[1]//label", e1);
    if ("SELECT" === e1.tagName && e1.getAttribute("name")?.toLowerCase().includes("disability") && ((r1 = document.createElement("label")).textContent = "Disability", r1.setAttribute("for", e1.id)), "hidden" === e1.getAttribute("type") || (0, a.getFirstOrderedNode)('./ancestor::div[contains(@class, "tds-form-item")]/ancestor::div[contains(@class, "HiddenFields")]', e1) || "readonly" === e1.getAttribute("readonly") || !t.allowDisabled && e1.hasAttribute("disabled")) return null;
    if ("agreeCheckbox" === e1.id && "checkbox" === e1.getAttribute("type")) {
        let t = (0, a.getFirstOrderedNode)("./ancestor::div[contains(@class, 'submit-information')]//h3", e1), r1 = t?.textContent?.trim() || "";
        return {
            type: i.FIELD_TYPE.CHECKBOX,
            label: r1,
            required: !0,
            $label: t,
            options: [
                "I Agree to the Candidate Acknowledgement"
            ],
            $checkboxs: [
                e1
            ]
        };
    }
    if (!r1 && !n && !s) return null;
    let u = r1?.textContent?.trim() || n?.innerText?.trim() || s?.innerText?.trim() || "";
    u = c(u);
    let p = g(e1);
    p && [
        "select one",
        "please select",
        "yes/no"
    ].includes(u.trim().toLowerCase()) && (u = p);
    let y = r1 || n || s;
    if (h(e1, u)) return null;
    y.getAttribute("for")?.includes("BeginDate") ? u = "BeginDate " + u : y.getAttribute("for")?.includes("EndDate") ? u = "EndDate " + u : y.getAttribute("for")?.includes("graduationDate") && !u.includes("Projected") ? u = "Graduation Date " + u : y.getAttribute("for")?.includes("startDate") && (u = "StartDate " + u);
    let v = f(e1, y) || m(e1);
    if ((0, l.isEmpty)(u)) return null;
    let w = [];
    if ("INPUT" === e1.tagName || "TEXTAREA" === e1.tagName) {
        if ("file" === e1.getAttribute("type")) return null;
        let r1 = [
            "checkbox",
            "radio"
        ].includes(e1.getAttribute("type") || "") ? i.FIELD_TYPE.CHECKBOX : T(e1) ? i.FIELD_TYPE.DATE : i.FIELD_TYPE.TEXT;
        if (r1 === i.FIELD_TYPE.CHECKBOX) {
            let r1 = (0, a.getFirstOrderedNode)("./ancestor::fieldset[1]", e1);
            if (r1) {
                let t = Array.from(r1.querySelectorAll(`input[type="${e1.getAttribute("type") || "checkbox"}"]`));
                if (t[0] !== e1) return null;
                let n = r1.querySelector("legend"), o = c((0, a.getExactText)(n?.textContent || "")), s = t, u = s.reduce((e1, t)=>{
                    let r1 = document.querySelector(`[for="${t.id}"]`), n = d(r1?.textContent || "");
                    return (0, l.isEmpty)(n) || e1.push(n), e1;
                }, []);
                return {
                    type: i.FIELD_TYPE.CHECKBOX,
                    label: o,
                    required: !!v,
                    $label: n,
                    options: u,
                    $checkboxs: s
                };
            }
            let n = O(e1, t);
            return n[0] !== e1 || 0 === (w = n.reduce((e1, t)=>{
                let r1 = document.querySelector(`[for="${t.id}"]`), n = d(r1?.textContent || "");
                return (0, l.isEmpty)(n) || e1.push(n), e1;
            }, [])).length ? null : {
                type: i.FIELD_TYPE.CHECKBOX,
                label: u,
                required: !!v,
                $label: y,
                options: w,
                $checkboxs: n
            };
        }
        if ("combobox" === e1.role) {
            let t = document.createEvent("MouseEvents");
            t.initEvent("mousedown", !0, !0), e1.dispatchEvent(t), await (0, o.delay)(100);
            let r1 = e1.id + "_list", n = document.querySelector(`#${r1}`), a = Array.from(n?.children || []);
            return w = a.reduce((e1, t)=>{
                let r1 = t.textContent?.trim();
                return (0, l.isEmpty)(r1) || e1.push(r1), e1;
            }, []), e1.blur(), await (0, o.delay)(200), {
                type: w.length > 0 && "State/Province" !== u ? i.FIELD_TYPE.DROPDOWN : i.FIELD_TYPE.TEXT,
                label: u,
                required: !!v,
                $input: e1,
                $label: y,
                options: w
            };
        }
        let n = {
            label: u,
            required: !!v,
            $label: y,
            $input: e1
        };
        if (r1 === i.FIELD_TYPE.DATE) {
            let t = {
                ...n,
                type: i.FIELD_TYPE.DATE,
                ...k(e1) ? {
                    description: k(e1)
                } : {}
            };
            return t;
        }
        let s = {
            ...n,
            type: i.FIELD_TYPE.TEXT
        };
        return s;
    }
    if ("SELECT" === e1.tagName) {
        let t = (0, a.getOrderedNodes)("./option", e1);
        w = t.reduce((e1, t)=>{
            let r1 = t.textContent?.trim();
            return !(0, l.isEmpty)(r1) && t.getAttribute("value") && e1.push(r1), e1;
        }, []);
        let r1 = {
            type: i.FIELD_TYPE.SELECT,
            label: u,
            required: !!v,
            $input: e1,
            $label: y,
            options: w
        };
        return r1;
    }
    return null;
}
_c21 = K;
function X(e1) {
    let t = e1;
    if (!t.id) return "";
    let r1 = document.querySelector(`[for="${t.id}"]`);
    return r1?.innerText?.trim() || "";
}
_c22 = X;
function J(e1) {
    if (e1.type === i.FIELD_TYPE.SECTION || e1.type === i.FIELD_TYPE.EDUCATION || e1.type === i.FIELD_TYPE.EMPLOYMENT) {
        let t = {};
        for (let r1 of e1.children)t[r1.label] = J(r1);
        return t;
    }
    if (e1.type === i.FIELD_TYPE.CHECKBOX) return e1.$checkboxs.filter((e1)=>e1.checked).map(X).filter(Boolean);
    if (e1.type === i.FIELD_TYPE.DATE) {
        let t = e1.$input;
        return b(t) ? x(t) : "value" in t ? t.value ?? t.textContent?.trim() ?? "" : t.textContent?.trim() ?? "";
    }
    if (e1.type === i.FIELD_TYPE.SELECT) {
        let t = e1.$input;
        return t.selectedOptions?.[0]?.textContent?.trim() || t.value || "";
    }
    if (e1.type === i.FIELD_TYPE.DROPDOWN) {
        let t = e1.$input;
        return t.value || t.getAttribute("value") || t.textContent?.trim() || "";
    }
    if ("$input" in e1 && e1.$input) {
        let t = e1.$input;
        return t.value ?? t.textContent?.trim() ?? "";
    }
    return "";
}
_c23 = J;
async function Q(e1) {
    let t = {}, r1 = [], n = [];
    for (let o of e1){
        if (o.type === i.FIELD_TYPE.EDUCATION) {
            r1.push(J(o));
            continue;
        }
        if (o.type === i.FIELD_TYPE.EMPLOYMENT) {
            n.push(J(o));
            continue;
        }
        t[o.label] = J(o);
    }
    return {
        ...t,
        education: r1,
        employment: n
    };
}
_c24 = Q;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24;
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

},{}]},["f4ylS","lajF3"], "lajF3", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QUFFLEVBQUUsYUFBYSxVQUFRLEVBQUUsU0FBTztJQUFFO0lBQUMsSUFBRyxHQUFFLFNBQU8sRUFBRSxXQUFXLFVBQVM7UUFBQyxJQUFJLElBQUUsR0FBRTtRQUFPLE9BQU8sRUFBRSxTQUFPLEVBQUUsYUFBYSxZQUFVLEVBQUUsYUFBYSxVQUFRO0lBQUU7SUFBQyxJQUFHLFlBQVcsTUFBRyxHQUFFLFFBQU87UUFBQyxJQUFJLElBQUUsR0FBRTtRQUFPLE9BQU8sRUFBRSxTQUFPLEVBQUUsYUFBYSxVQUFRO0lBQUU7SUFBQyxPQUFNO0FBQUU7T0FBL3NCO0FBQWd0QixlQUFlLEVBQUUsRUFBQztJQUFFLElBQUksSUFBRSxDQUFDLEdBQUUsS0FBRSxFQUFFLEVBQUMsSUFBRSxFQUFFO0lBQUMsS0FBSSxJQUFJLEtBQUssR0FBRTtRQUFDLElBQUcsRUFBRSxTQUFPLEVBQUUsV0FBVyxXQUFVO1lBQUMsR0FBRSxLQUFLLEVBQUU7WUFBSTtRQUFRO1FBQUMsSUFBRyxFQUFFLFNBQU8sRUFBRSxXQUFXLFlBQVc7WUFBQyxFQUFFLEtBQUssRUFBRTtZQUFJO1FBQVE7UUFBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEdBQUMsRUFBRTtJQUFFO0lBQUMsT0FBTTtRQUFDLEdBQUcsQ0FBQztRQUFDLFdBQVU7UUFBRSxZQUFXO0lBQUM7QUFBQztPQUFsTiIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtY2Q2M2Y2NjE0ZjQ4MmRiNi5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9zaXRlcy90YWxlby9ydWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFx0YWxlb1xcXFxydWxlcy5qc1wiLFwiYnVuZGxlSWRcIjpcIjc5N2Q4NGRkMWU4YmZkMzRcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiBJd0RqcFxyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvdGFsZW8vcnVsZXMuanNcclxuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIC4vb3BlcmF0aW9ucyAtPiBlTXU4UyAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy90YWxlby9vcGVyYXRpb25zLmpzXHJcbiAqICAgLi9zZWN0aW9uLW9wdGlvbnMgLT4gbEJQcGIgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvdGFsZW8vc2VjdGlvbi1vcHRpb25zLmpzXHJcbiAqICAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyAtPiBjSFVibCAgPT4gIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcclxuICogICB+Y29udGVudHMvY3Jhd2xlci91dGlscy9leGVjdXRvciAtPiBpQVpNTiAgPT4gIHNyYy9jb250ZW50cy9jcmF3bGVyL3V0aWxzL2V4ZWN1dG9yLmpzXHJcbiAqICAgfmNvcmUvZW51bXMgLT4gMU8zbmMgID0+ICBzcmMvY29yZS9lbnVtcy5qc1xyXG4gKiAgIH5jb3JlL3hwYXRoIC0+IGFnRTR1ICA9PiAgc3JjL2NvcmUveHBhdGguanNcclxuICogICB+dXRpbHMgLT4gY3phdHcgID0+ICBzcmMvdXRpbHMuanNcclxuICovXHJcblxyXG52YXIgbj1lKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtuLmRlZmluZUludGVyb3BGbGFnKHIpLG4uZXhwb3J0KHIsXCJnZXRDd3NWMkNvdmVyTGV0dGVyVGV4dGFyZWFcIiwoKT0+SCksbi5leHBvcnQocixcImdldFRhbGVvVHlwZUluZGV4XCIsKCk9PlkpLG4uZXhwb3J0KHIsXCJoYW5kbGVEdXBsaWNhdGVIYXJkY29kZUl0ZW1MYWJlbFwiLCgpPT5XKSxuLmV4cG9ydChyLFwiZXh0cmFjdFJ1bGVzXCIsKCk9PkcpLG4uZXhwb3J0KHIsXCJleHRyYWN0SW5wdXRcIiwoKT0+Syksbi5leHBvcnQocixcImdldEZvcm1TbmFwc2hvdFwiLCgpPT5RKTt2YXIgbz1lKFwifmNvbnRlbnRzL2NyYXdsZXIvdXRpbHMvZXhlY3V0b3JcIiksaT1lKFwifmNvcmUvZW51bXNcIiksYT1lKFwifmNvcmUveHBhdGhcIiksbD1lKFwifnV0aWxzXCIpLHM9ZShcIi4vb3BlcmF0aW9uc1wiKSx1PWUoXCIuL3NlY3Rpb24tb3B0aW9uc1wiKTtmdW5jdGlvbiBjKGUpe3JldHVybiBlLnJlcGxhY2UoL1tcXHUwMGEwXFx1MjAwYi1cXHUyMDBkXFx1ZmVmZl0vZyxcIiBcIikucmVwbGFjZSgvW1xcblxcclxcdTIxYjVdKy9nLFwiIFwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnJlcGxhY2UoL1xccypcXC5cXHMqcmVxdWlyZWQkL2ksXCJcIikucmVwbGFjZSgvXFxzKnJlcXVpcmVkJC9pLFwiXCIpLnRyaW0oKX1mdW5jdGlvbiBkKGUpe3JldHVybiBlLnJlcGxhY2UoL1tcXHUwMGEwXFx1MjAwYi1cXHUyMDBkXFx1ZmVmZl0vZyxcIiBcIikucmVwbGFjZSgvW1xcblxcclxcdTIxYjVdKy9nLFwiIFwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKX1mdW5jdGlvbiBmKGUsdCl7bGV0IHI9ZSxuPXQ/LnRleHRDb250ZW50fHxcIlwiLG89dD8uZ2V0QXR0cmlidXRlKFwidGl0bGVcIil8fFwiXCIsaT0hIXQ/LnF1ZXJ5U2VsZWN0b3IoXCJpbWcubWFuZGF0b3J5LWltZ1wiKXx8L21hbmRhdG9yeS9pLnRlc3Qobyl8fC9cXGJyZXF1aXJlZFxcYi9pLnRlc3Qobik7cmV0dXJuISFyLnJlcXVpcmVkfHxcInRydWVcIj09PXIuZ2V0QXR0cmlidXRlKFwiYXJpYS1yZXF1aXJlZFwiKXx8aX1mdW5jdGlvbiBwKGUpe2xldCB0PSgwLGEuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoXCIuL2FuY2VzdG9yOjpmaWVsZHNldFsxXVwiLGUpO3JldHVybiB0P3QucXVlcnlTZWxlY3RvcihcImxlZ2VuZCBsYWJlbFwiKXx8dC5xdWVyeVNlbGVjdG9yKFwibGVnZW5kXCIpOm51bGx9ZnVuY3Rpb24gbShlKXtsZXQgdD1wKGUpO3JldHVybiEhdCYmZihlLHQpfWZ1bmN0aW9uIGgoZSx0KXtsZXQgcj1lLmlkfHxcIlwiLG49ZS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpfHxcIlwiO3JldHVybiEhKFwiU2VsZWN0IGEgbGFuZ3VhZ2VcIj09PXQmJihyLmluY2x1ZGVzKFwiZVNpZ25hdHVyZUJsb2NrLXNlbGVjdE9uZU1lbnVfbGFuZ3VhZ2VcIil8fG4uaW5jbHVkZXMoXCJlU2lnbmF0dXJlQmxvY2stc2VsZWN0T25lTWVudV9sYW5ndWFnZVwiKSkpfWZ1bmN0aW9uIGcoZSl7bGV0IHQ9ZS5jbG9zZXN0KFwiLm9yYWNsZXRhbGVvY3dzdjItZm9ybS1ncm91cC1mdWxsXCIpO2lmKCF0KXJldHVyblwiXCI7bGV0IHI9dC5xdWVyeVNlbGVjdG9yKFwiLm9yYWNsZXRhbGVvY3dzdjItdGV4dC1hYm92ZS1maWVsZC1sYWJlbFwiKTtyZXR1cm4gYyhyPy50ZXh0Q29udGVudHx8XCJcIil9ZnVuY3Rpb24gYihlKXtyZXR1cm5cIlNQQU5cIj09PWUudGFnTmFtZSYmZS5jbGFzc0xpc3QuY29udGFpbnMoXCJpbnB1dC1kYXRlLXRpbWVcIil9ZnVuY3Rpb24geShlKXtsZXQgdD1bZS5pZCxlLmdldEF0dHJpYnV0ZShcIm5hbWVcIil8fFwiXCIsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpfHxcIlwiLC4uLkFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkXSwgW25hbWVdXCIpKS5mbGF0TWFwKGU9PltlLmlkfHxcIlwiLGUuZ2V0QXR0cmlidXRlKFwibmFtZVwiKXx8XCJcIl0pXS5qb2luKFwiIFwiKTtyZXR1cm4vRW5kRGF0ZS9pLnRlc3QodCk/XCJlbmRcIjovQmVnaW5EYXRlL2kudGVzdCh0KT9cImJlZ2luXCI6L2dyYWR1YXRpb25EYXRlL2kudGVzdCh0KT9cImdyYWR1YXRpb25cIjovc3RhcnREYXRlL2kudGVzdCh0KT9cInN0YXJ0XCI6bnVsbH1mdW5jdGlvbiB2KGUsdCl7bGV0IHI9YyhlKS50b0xvd2VyQ2FzZSgpO3JldHVyblwiZW5kXCI9PT10Py9cXGJlbmQoXFxzK2RhdGUpP1xcYi8udGVzdChyKXx8ci5pbmNsdWRlcyhcImRhdGUgdG9cIik6XCJiZWdpblwiPT09dD8vXFxiKGJlZ2lufHN0YXJ0KShcXHMrZGF0ZSk/XFxiLy50ZXN0KHIpfHxyLmluY2x1ZGVzKFwiZGF0ZSBmcm9tXCIpOlwiZ3JhZHVhdGlvblwiPT09dD9yLmluY2x1ZGVzKFwiZ3JhZHVhdGlvblwiKTovXFxic3RhcnQoXFxzK2RhdGUpP1xcYi8udGVzdChyKX1mdW5jdGlvbiB3KGUpe3JldHVybiBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcImxhYmVsLCBzcGFuLmVudGl0eS1sYWJlbFwiKSkuZmlsdGVyKGU9PmUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCYmIV8oZSkmJiEoMCxsLmlzRW1wdHkpKGMoZS50ZXh0Q29udGVudHx8XCJcIikpKX1mdW5jdGlvbiBTKGUsdCxyKXtsZXQgbj13KHQpO2lmKDA9PT1uLmxlbmd0aClyZXR1cm4gbnVsbDtsZXQgbz1udWxsPT09cj9uOm4uZmlsdGVyKGU9PnYoZS50ZXh0Q29udGVudHx8XCJcIixyKSksaT1vLmxlbmd0aD4wP286bixhPWkuZmlsdGVyKHQ9PntsZXQgcj10LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGUpO3JldHVybiEhKHImTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkcpfSk7aWYoYS5sZW5ndGg+MClyZXR1cm4gYVthLmxlbmd0aC0xXTtsZXQgbD1pLmZpbHRlcih0PT57bGV0IHI9dC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlKTtyZXR1cm4hIShyJk5vZGUuRE9DVU1FTlRfUE9TSVRJT05fUFJFQ0VESU5HKX0pO3JldHVybiBsLmxlbmd0aD4wP2xbMF06bnVsbH1mdW5jdGlvbiBFKGUpe2xldCB0PXkoZSkscj1BcnJheS5mcm9tKG5ldyBTZXQoW2UucGFyZW50RWxlbWVudCxlLmNsb3Nlc3QoXCJ0ZFwiKSxlLmNsb3Nlc3QoXCJmaWVsZHNldFwiKV0uZmlsdGVyKGU9PmUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpKTtmb3IobGV0IG4gb2Ygcil7bGV0IHI9UyhlLG4sdCk7aWYocilyZXR1cm4gcn1yZXR1cm4oMCxhLmdldEZpcnN0T3JkZXJlZE5vZGUpKCcuL2FuY2VzdG9yOjp0ZFsxXS8vKltzZWxmOjpsYWJlbCBvciAoc2VsZjo6c3BhbiBhbmQgY29udGFpbnMoQGNsYXNzLCBcImVudGl0eS1sYWJlbFwiKSldWzFdJyxlKXx8KDAsYS5nZXRGaXJzdE9yZGVyZWROb2RlKSgnLi9hbmNlc3Rvcjo6ZmllbGRzZXRbMV0vLypbc2VsZjo6bGFiZWwgb3IgKHNlbGY6OnNwYW4gYW5kIGNvbnRhaW5zKEBjbGFzcywgXCJlbnRpdHktbGFiZWxcIikpXVsxXScsZSl9ZnVuY3Rpb24geChlKXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtZGF0ZS10aW1lLXRleHRcIil8fGUucXVlcnlTZWxlY3RvcignW2lkJD1cIi5kaXNwbGF5XCJdJyl8fGUscj1jKHQudGV4dENvbnRlbnR8fFwiXCIpO3JldHVybiByJiZcIm5vdCBzcGVjaWZpZWRcIiE9PXIudG9Mb3dlckNhc2UoKT9yOlwiXCJ9ZnVuY3Rpb24gQyhlKXtpZighYihlKSlyZXR1cm4gbnVsbDtsZXQgdD1FKGUpLHI9Yyh0Py50ZXh0Q29udGVudHx8XCJcIik7cmV0dXJuKDAsbC5pc0VtcHR5KShyKT9udWxsOnt0eXBlOmkuRklFTERfVFlQRS5EQVRFLGxhYmVsOnIscmVxdWlyZWQ6ZihlLHQpLCRsYWJlbDp0LCRpbnB1dDplfX1mdW5jdGlvbiBBKGUsdCl7bGV0IHI9QXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuLmlucHV0LWRhdGUtdGltZVwiKSkuZmlsdGVyKGU9PmUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCk7Zm9yKGxldCB0IG9mIHIpe2xldCByPUUodCksbj1jKHI/LnRleHRDb250ZW50fHxcIlwiKSxvPXkodCk7aWYoIW8mJiEvXFxiKGJlZ2lufHN0YXJ0fGVuZHxncmFkdWF0aW9uKShcXHMrZGF0ZSk/XFxiL2kudGVzdChuKSYmIS9cXGJkYXRlXFxzKyhmcm9tfHRvKVxcYi9pLnRlc3QobikpY29udGludWU7bGV0IGk9Qyh0KTtpJiYoZS5zb21lKGU9PkYoZSk9PT1GKGkpKXx8ZS5wdXNoKGkpKX19ZnVuY3Rpb24gayhlKXtsZXQgdD1lLmdldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIpPy50cmltKCk7aWYodCYmL1tNRFldL2kudGVzdCh0KSlyZXR1cm4gdH1mdW5jdGlvbiBUKGUpe2lmKCEoZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKXJldHVybiExO2xldCB0PShlLmdldEF0dHJpYnV0ZShcInR5cGVcIil8fFwiXCIpLnRvTG93ZXJDYXNlKCkscj1lLmdldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIpPy50cmltKCl8fFwiXCI7cmV0dXJuXCJkYXRlXCI9PT10fHxlLmNsYXNzTGlzdC5jb250YWlucyhcIm9yYWNsZXRhbGVvY3dzdjItZGF0ZXBpY2tlci10cmlnZ2VyXCIpfHwvW01EWV1cXHMqXFwvXFxzKltNRFldXFxzKlxcL1xccypbWV17Miw0fS9pLnRlc3Qocil9ZnVuY3Rpb24gRihlKXtsZXQgdD1cIm9wdGlvbnNcImluIGUmJkFycmF5LmlzQXJyYXkoZS5vcHRpb25zKT9bLi4uZS5vcHRpb25zXS5maWx0ZXIoZT0+XCJzdHJpbmdcIj09dHlwZW9mIGUpLm1hcChkKS5qb2luKFwifFwiKTpcIlwiO3JldHVybmAke2UudHlwZX06OiR7YyhlLmxhYmVsKX06OiR7dH1gfWZ1bmN0aW9uIEkoZSl7cmV0dXJuYCR7ZS50eXBlfTo6JHtjKGUubGFiZWwpfWB9ZnVuY3Rpb24gaihlLHQpe2xldCByPUFycmF5LmZyb20obmV3IFNldChbLi4uZS5vcHRpb25zfHxbXSwuLi50Lm9wdGlvbnN8fFtdXSkpLG49QXJyYXkuZnJvbShuZXcgU2V0KFsuLi5lLiRjaGVja2JveHN8fFtdLC4uLnQuJGNoZWNrYm94c3x8W11dKSk7ZS5vcHRpb25zPXIsZS4kY2hlY2tib3hzPW4sZS5yZXF1aXJlZD1lLnJlcXVpcmVkfHx0LnJlcXVpcmVkfWZ1bmN0aW9uIEQoZSx0KXtpZighdClyZXR1cm47aWYodC50eXBlPT09aS5GSUVMRF9UWVBFLkNIRUNLQk9YKXtsZXQgcj1lLmZpbmQoZT0+ZS50eXBlPT09aS5GSUVMRF9UWVBFLkNIRUNLQk9YJiZJKGUpPT09SSh0KSk7aWYocil7aihyLHQpO3JldHVybn19bGV0IHI9Rih0KSxuPWUuc29tZShlPT5GKGUpPT09cik7bnx8ZS5wdXNoKHQpfWZ1bmN0aW9uIFAoZSl7cmV0dXJuIHMuVEFMRU9fSEFSRENPREVfQ09ORklHW2VdfWZ1bmN0aW9uIF8oZSl7aWYoIShlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKXJldHVybiExO2xldCB0PWUuZ2V0QXR0cmlidXRlKFwic3R5bGVcIil8fFwiXCIscj1lIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudD9lLnR5cGUudG9Mb3dlckNhc2UoKTpcIlwiO3JldHVyblwiaGlkZGVuXCI9PT1yfHwvZGlzcGxheVxccyo6XFxzKm5vbmUvaS50ZXN0KHQpfHxlLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIil9ZnVuY3Rpb24gTChlKXtpZighKGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl8fF8oZSkpcmV0dXJuITE7bGV0IHQ9ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxyPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUpO3JldHVybiB0LndpZHRoPjAmJnQuaGVpZ2h0PjAmJlwibm9uZVwiIT09ci5kaXNwbGF5JiZcImhpZGRlblwiIT09ci52aXNpYmlsaXR5fWZ1bmN0aW9uIFIoZSl7aWYoIShlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKXJldHVybiExO2xldCB0PWU7Zm9yKDt0Oyl7aWYodC5oaWRkZW58fF8odCkpcmV0dXJuITE7bGV0IGU9d2luZG93LmdldENvbXB1dGVkU3R5bGUodCk7aWYoXCJub25lXCI9PT1lLmRpc3BsYXl8fFwiaGlkZGVuXCI9PT1lLnZpc2liaWxpdHl8fFwidHJ1ZVwiPT09dC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKSlyZXR1cm4hMTt0PXQucGFyZW50RWxlbWVudH1yZXR1cm4hMH1mdW5jdGlvbiBPKGUsdD17fSl7bGV0IHI9ZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpfHxcImNoZWNrYm94XCIsbj1lLmdldEF0dHJpYnV0ZShcIm5hbWVcIil8fFwiXCIsbz1bXTtpZihuJiYobz1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9XCIke3J9XCJdYCkpLmZpbHRlcihlPT5lIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkuZmlsdGVyKGU9PmUuZ2V0QXR0cmlidXRlKFwibmFtZVwiKT09PW4mJighIXQuYWxsb3dIaWRkZW58fFIoZSkpKSksMD09PW8ubGVuZ3RoKXtsZXQgcj1lLmdldEF0dHJpYnV0ZShcImlkXCIpO2lmKCFyKXJldHVybltdO289QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFtpZD1cIiR7cn1cIl1gKSkuZmlsdGVyKGU9PmUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KS5maWx0ZXIoZT0+ISF0LmFsbG93SGlkZGVufHxSKGUpKX1yZXR1cm4gb31mdW5jdGlvbiBNKGUsdCl7bGV0IHI9XCJlZHVjYXRpb25cIj09PXQ/XCJvcmFjbGV0YWxlb2N3c3YyLWR5bmFtaWMtY29udGVudC1lZHVjYXRpb25cIjpcIm9yYWNsZXRhbGVvY3dzdjItZHluYW1pYy1jb250ZW50LXdvcmtcIjtyZXR1cm4hIWUuY2xvc2VzdChgZGl2LiR7cn1gKX1mdW5jdGlvbiBOKGUsdCl7cmV0dXJuIGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCYmKGUuZ2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIpPT09dHx8ISFNKGUsdCkmJiEhZS5xdWVyeVNlbGVjdG9yKFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QsIGEuc2F2ZS1lZGl0LXRyaWdnZXIsIGJ1dHRvbi5zYXZlLWVkaXQtdHJpZ2dlclwiKSl9ZnVuY3Rpb24gJChlKXtyZXR1cm5cIndvcmtcIj09PWU/XCIuLy9kaXZbY29udGFpbnMoQGNsYXNzLCAnd2VsbCcpIGFuZCAuLy9pbnB1dFtjb250YWlucyhAbmFtZSwgJ1dPUktfSElTVE9SWV8nKV0gYW5kIC4vL2FbY29udGFpbnMoQGNsYXNzLCAnc2F2ZS1lZGl0LXRyaWdnZXInKSBhbmQgQGFyaWEtbGFiZWw9J1NhdmUnXV1cIjpcIi4vL2Rpdltjb250YWlucyhAY2xhc3MsICd3ZWxsJykgYW5kICguLy9pbnB1dFtjb250YWlucyhAbmFtZSwgJ0VEVUNBVElPTl8nKV0gb3IgLi8vaW5wdXRbY29udGFpbnMoQG5hbWUsICdlZHVjYXRpb25fJyldIG9yIC4vL3NlbGVjdFtjb250YWlucyhAbmFtZSwgJ2VkdWNhdGlvbl8nKV0pIGFuZCAuLy9hW2NvbnRhaW5zKEBjbGFzcywgJ3NhdmUtZWRpdC10cmlnZ2VyJykgYW5kIEBhcmlhLWxhYmVsPSdTYXZlJ11dXCJ9ZnVuY3Rpb24gQihlKXtyZXR1cm5gLi8vZGl2W0BkYXRhLXR5cGU9JyR7ZX0nXWB9ZnVuY3Rpb24gcShlLHQscil7bGV0IG49KDAsYS5nZXRPcmRlcmVkTm9kZXMpKGUuc25hcHNob3RbdF0sZG9jdW1lbnQpO2lmKDIhPT10KXJldHVybiBuO2xldCBvPSgwLGEuZ2V0T3JkZXJlZE5vZGVzKSgkKHIpLGRvY3VtZW50KSxpPSgwLGEuZ2V0T3JkZXJlZE5vZGVzKShCKHIpLGRvY3VtZW50KTtyZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KFsuLi5uLC4uLm8sLi4uaV0pKX1mdW5jdGlvbiBVKCl7bGV0IGU9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidGFibGUudGFibGVsaXN0XCIpKS5maWx0ZXIoTCksdD0oMCxhLmdldE9yZGVyZWROb2RlcykoXCIvL2Rpdltjb250YWlucyhAaWQsICdzdGVwLScpIGFuZCBjb250YWlucyhAY2xhc3MsICctYWN0aXZlJyldXCIsZG9jdW1lbnQpLmZpbHRlcihMKTtyZXR1cm4gMD09PXQubGVuZ3RoJiYodD1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJmb3JtXCIpKS5maWx0ZXIoTCkpLHtzZWN0aW9uczp0PUFycmF5LmZyb20obmV3IFNldChbLi4udCwuLi5lXSkpLHVzaW5nVGFibGVMaXN0U2NvcGU6ITF9fWZ1bmN0aW9uIEgoZT17fSl7bGV0e3JlcXVpcmVWaXNpYmxlOnQ9ITB9PWUscj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaDJcIik7Zm9yKGxldCBlIG9mIHIpe2lmKGUudGV4dENvbnRlbnQ/LnRyaW0oKS50b0xvd2VyQ2FzZSgpIT09XCJjb3ZlciBsZXR0ZXJcIiljb250aW51ZTtsZXQgcj1lLm5leHRFbGVtZW50U2libGluZztmb3IoO3ImJlwiSDFcIiE9PXIudGFnTmFtZSYmXCJIMlwiIT09ci50YWdOYW1lOyl7bGV0IGU9ci5tYXRjaGVzKFwidGV4dGFyZWFcIik/cjpyLnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYVwiKTtpZihlJiYoIXR8fFIoZSkpKXJldHVybiBlO3I9ci5uZXh0RWxlbWVudFNpYmxpbmd9fXJldHVybiBudWxsfWZ1bmN0aW9uIFkoKXtmb3IobGV0IGUgb2YgT2JqZWN0LmtleXMocy5UQUxFT19IQVJEQ09ERV9DT05GSUcpKXtsZXQgdD1QKGUpO2ZvcihsZXQgZT0wO2U8dC5jb250YWluZXIubGVuZ3RoO2UrKyl7bGV0IHI9KDAsYS5nZXRGaXJzdE9yZGVyZWROb2RlKSh0LmNvbnRhaW5lcltlXSk7aWYocilyZXR1cm4gZX19cmV0dXJuIDB9YXN5bmMgZnVuY3Rpb24geihlLHQscil7aWYocjw9MClyZXR1cm47bGV0IG49bnVsbDtmb3IobGV0IHI9MDtyPDEwO3IrKyl7bGV0IHI9KDAsYS5nZXRGaXJzdE9yZGVyZWROb2RlKSh0LGUpO2lmKHImJlwiZGlzYWJsZWRcIiE9PXIuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikpe249cjticmVha31hd2FpdCAoMCxvLmRlbGF5KSgyMDApfWlmKG4pe2ZvcihsZXQgZT0wO2U8cjtlKyspbi5jbGljaygpLGF3YWl0ICgwLG8uZGVsYXkpKDgwMCk7YXdhaXQgKDAsby5kZWxheSkoNTAwKX19YXN5bmMgZnVuY3Rpb24gVih7dHlwZUluZGV4OmV9KXtsZXQgdD1QKFwiZWR1Y2F0aW9uXCIpLHI9KDAsYS5nZXRGaXJzdE9yZGVyZWROb2RlKSh0LmNvbnRhaW5lcltlXSk7aWYocil7bGV0IG49KDAsYS5nZXRPcmRlcmVkTm9kZXMpKHQuc25hcHNob3RbZV0scik7MD09PW4ubGVuZ3RoJiYoYXdhaXQgeihyLHQuYWRkQnV0dG9uW2VdLDI9PT1lPzE6MCksYXdhaXQgKDAsby5kZWxheSkoMj09PWU/ODAwOjIwMCkpfWxldCBuPVAoXCJ3b3JrRXhwZXJpZW5jZVwiKSxpPSgwLGEuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkobi5jb250YWluZXJbZV0pO2lmKGkpe2xldCB0PSgwLGEuZ2V0T3JkZXJlZE5vZGVzKShuLnNuYXBzaG90W2VdLGkpOzA9PT10Lmxlbmd0aCYmKGF3YWl0IHooaSxuLmFkZEJ1dHRvbltlXSwyPT09ZT8xOjApLGF3YWl0ICgwLG8uZGVsYXkpKDI9PT1lPzgwMDoyMDApKX19ZnVuY3Rpb24gVyhlKXtsZXQgdD17fTtmb3IobGV0IHIgb2YgZSl7aWYoIXRbci5sYWJlbF0pe3Rbci5sYWJlbF09cjtjb250aW51ZX1sZXQgZT10W3IubGFiZWxdO2lmKGUubGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImRhdGVcIil8fGUuJGlucHV0JiZlLiRpbnB1dC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpPy5pbmNsdWRlcyhcImRhdGVcIikpe2xldCB0PSEwO2UuJGlucHV0JiZlLiRpbnB1dC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpJiZlLiRpbnB1dC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpPy5pbmNsdWRlcyhcIm1vbnRoXCIpP3Q9ITA6ZS5vcHRpb25zJiZlLm9wdGlvbnMubGVuZ3RoPjAmJmUub3B0aW9ucy5pbmNsdWRlcyhcIkphbnVhcnlcIikmJih0PSEwKSx0PyhlLmxhYmVsPWUubGFiZWwrXCIgTW9udGhcIixyLmxhYmVsPXIubGFiZWwrXCIgWWVhclwiKTooZS5sYWJlbD1lLmxhYmVsK1wiIFllYXJcIixyLmxhYmVsPXIubGFiZWwrXCIgTW9udGhcIil9fX1hc3luYyBmdW5jdGlvbiBHKHt0eXBlSW5kZXg6ZX0pe2F3YWl0IFYoe3R5cGVJbmRleDplfSk7bGV0e3NlY3Rpb25zOnR9PVUoKSxyPVtdLG49bnVsbCxvPW51bGwsbD1QKFwiZWR1Y2F0aW9uXCIpLHM9KDAsYS5nZXRGaXJzdE9yZGVyZWROb2RlKShsLmNvbnRhaW5lcltlXSk7cyYmKG49KDAsYS5nZXRGaXJzdE9yZGVyZWROb2RlKShsLmFkZEJ1dHRvbltlXSxzKSk7bGV0IGM9UChcIndvcmtFeHBlcmllbmNlXCIpLGQ9KDAsYS5nZXRGaXJzdE9yZGVyZWROb2RlKShjLmNvbnRhaW5lcltlXSk7ZCYmKG89KDAsYS5nZXRGaXJzdE9yZGVyZWROb2RlKShjLmFkZEJ1dHRvbltlXSxkKSk7bGV0IGY9bz9vLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoOjAscD1uP24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg6MCxtPTI9PT1lJiZSKG4pLGg9Mj09PWUmJlIobyksZz1xKGwsZSxcImVkdWNhdGlvblwiKSxiPVsuLi5nXS5maWx0ZXIodD0+Mj09PWUmJk4odCxcImVkdWNhdGlvblwiKXx8ISF0LnF1ZXJ5U2VsZWN0b3IoXCJ0YWJsZVwiKXx8XCJlZHVjYXRpb25cIj09PXQuZ2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIpKSx5PXEoYyxlLFwid29ya1wiKSx2PVsuLi55XS5maWx0ZXIodD0+Mj09PWUmJk4odCxcIndvcmtcIil8fCEhdC5xdWVyeVNlbGVjdG9yKFwidGFibGVcIil8fFwid29ya1wiPT09dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIikpLHc9Wy4uLmIsLi4udl0sUz1cIkNhbmRpZGF0ZSBlU2lnbmF0dXJlIERhdGVcIixFPSExO2ZvcihsZXQgbiBvZiB0KXtsZXQgdD0oMCxhLmdldE9yZGVyZWROb2RlcykoXCIuLy9pbnB1dCB8IC4vL3RleHRhcmVhIHwgLi8vc2VsZWN0XCIsbik7Zm9yKGxldCBuIG9mIHQpe2lmKHcuc29tZShlPT5lLmNvbnRhaW5zKG4pKSljb250aW51ZTtsZXQgdD1hd2FpdCBLKG4se3R5cGVJbmRleDplfSk7aWYodCl7aWYodC5sYWJlbD09PVMpe2lmKEUpY29udGludWU7RT0hMH1EKHIsdCl9fX1pZigwPT09ci5sZW5ndGgmJiFwJiYhZil7bGV0IHQ9KDAsYS5nZXRPcmRlcmVkTm9kZXMpKFwiLy9zcGFuW2NvbnRhaW5zKEBpZCwgJ21hc3RlcmNvbnRlbnRwYW5lbCcpIGFuZCBjb250YWlucyhAY2xhc3MsICdtYXN0ZXJjb250ZW50cGFuZWwnKV1cIixkb2N1bWVudCk7Zm9yKGxldCBuIG9mIHQpe2xldCB0PSgwLGEuZ2V0T3JkZXJlZE5vZGVzKShcIi4vL2lucHV0IHwgLi8vdGV4dGFyZWEgfCAuLy9zZWxlY3RcIixuKTtmb3IobGV0IG4gb2YgdCl7bGV0IHQ9YXdhaXQgSyhuLHt0eXBlSW5kZXg6ZX0pO3Q/LmxhYmVsLmluY2x1ZGVzKFwiV29yayBFeHBlcmllbmNlXCIpfHxEKHIsdCl9fX1pZigyPT09ZSl7bGV0IGU9SCgpO2lmKGUmJiFyLnNvbWUodD0+XCIkaW5wdXRcImluIHQmJnQuJGlucHV0PT09ZSkpe2xldCB0PUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImgyXCIpKS5maW5kKGU9PmUudGV4dENvbnRlbnQ/LnRyaW0oKS50b0xvd2VyQ2FzZSgpPT09XCJjb3ZlciBsZXR0ZXJcIik7RChyLHt0eXBlOmkuRklFTERfVFlQRS5URVhULGxhYmVsOlwiQ292ZXIgTGV0dGVyXCIscmVxdWlyZWQ6ITEsJGxhYmVsOnQ/P2UsJGlucHV0OmV9KX19Zm9yKGxldCB0IG9mIGIpe2xldCBuPVtdLG89KDAsYS5nZXRPcmRlcmVkTm9kZXMpKDE9PT1lP1wiLi8vaW5wdXRbbm90KEB0eXBlPSdzdWJtaXQnKSBhbmQgbm90KEB0eXBlPSdoaWRkZW4nKV0gfCAuLy90ZXh0YXJlYSB8IC4vL3NlbGVjdCB8IC4vL3NwYW5bY29udGFpbnMoQGNsYXNzLCAnaW5wdXQtZGF0ZS10aW1lJyldXCI6XCIuLy9pbnB1dFtub3QoQHR5cGU9J3N1Ym1pdCcpIGFuZCBub3QoQHR5cGU9J2hpZGRlbicpXSB8IC4vL3RleHRhcmVhIHwgLi8vc2VsZWN0XCIsdCksbD1tJiZNKHQsXCJlZHVjYXRpb25cIik/e2FsbG93SGlkZGVuOiEwLGFsbG93RGlzYWJsZWQ6ITAsdHlwZUluZGV4OmV9Ont0eXBlSW5kZXg6ZX07Zm9yKGxldCBlIG9mIG8pe2xldCB0PWF3YWl0IEsoZSxsKTt0JiYobi5zb21lKGU9PkYoZSk9PT1GKHQpKXx8bi5wdXNoKHQpKX0xPT09ZSYmQShuLHQpLFcobiksMCE9PW4ubGVuZ3RoJiZyLnB1c2goe3R5cGU6aS5GSUVMRF9UWVBFLkVEVUNBVElPTixsYWJlbDpcIkVkdWNhdGlvblwiLHJlcXVpcmVkOiEwLG9wdGlvbnM6KDAsdS5tYXBDaGlsZHJlblRvT3B0aW9ucykobiksY2hpbGRyZW46bn0pfWZvcihsZXQgdCBvZiB2KXtsZXQgbj1bXSxvPSgwLGEuZ2V0T3JkZXJlZE5vZGVzKSgxPT09ZT9cIi4vL2lucHV0W25vdChAdHlwZT0nc3VibWl0JykgYW5kIG5vdChAdHlwZT0naGlkZGVuJyldIHwgLi8vdGV4dGFyZWEgfCAuLy9zZWxlY3QgfCAuLy9zcGFuW2NvbnRhaW5zKEBjbGFzcywgJ2lucHV0LWRhdGUtdGltZScpXVwiOlwiLi8vaW5wdXRbbm90KEB0eXBlPSdzdWJtaXQnKSBhbmQgbm90KEB0eXBlPSdoaWRkZW4nKV0gfCAuLy90ZXh0YXJlYSB8IC4vL3NlbGVjdFwiLHQpLGw9aCYmTSh0LFwid29ya1wiKT97YWxsb3dIaWRkZW46ITAsYWxsb3dEaXNhYmxlZDohMCx0eXBlSW5kZXg6ZX06e3R5cGVJbmRleDplfTtmb3IobGV0IGUgb2Ygbyl7bGV0IHQ9YXdhaXQgSyhlLGwpOyEoIXR8fHQubGFiZWwuaW5jbHVkZXMoXCJXb3JrIEV4cGVyaWVuY2VcIikpJiYobi5zb21lKGU9PkYoZSk9PT1GKHQpKXx8bi5wdXNoKHQpKX0xPT09ZSYmQShuLHQpLFcobiksMCE9PW4ubGVuZ3RoJiZyLnB1c2goe3R5cGU6aS5GSUVMRF9UWVBFLkVNUExPWU1FTlQsbGFiZWw6XCJFbXBsb3ltZW50XCIscmVxdWlyZWQ6ITAsb3B0aW9uczooMCx1Lm1hcENoaWxkcmVuVG9PcHRpb25zKShuKSxjaGlsZHJlbjpufSl9bGV0IHg9W2RvY3VtZW50XTtmb3IobGV0IGUgb2YgeCl7bGV0IHQ9KDAsYS5nZXRPcmRlcmVkTm9kZXMpKFwiLi8vZGl2W2NvbnRhaW5zKEB0ZXN0LWlkLCAnYXBwbGljYXRpb24tc3RlcC1xdWVzdGlvbm5haXJlJyldXCIsZSk7Zm9yKGxldCBlIG9mIHQpe2xldCB0PSgwLGEuZ2V0T3JkZXJlZE5vZGVzKShcIi4vL2lucHV0IHwgLi8vdGV4dGFyZWEgfCAuLy9zZWxlY3RcIixlKTtmb3IobGV0IGUgb2YgdCl7bGV0IHQ9YXdhaXQgSyhlKTtEKHIsdCl9fX1sZXQgQz0oMCxhLmdldEZpcnN0T3JkZXJlZE5vZGUpKFwiLi8vYnV0dG9uW0B0ZXN0LWlkPSdhcHBsaWNhdGlvbi1uZXh0LXN0ZXAnXVwiKSxrPSgwLGEuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoXCIuLy9pbnB1dFtAdmFsdWU9J1NhdmUgYW5kIENvbnRpbnVlJ11cIiksVD0oMCxhLmdldEZpcnN0T3JkZXJlZE5vZGUpKFwiLi8vaW5wdXRbQHZhbHVlPSdTdWJtaXQnXVwiKSxJPUM/Qy50ZXh0Q29udGVudD8udHJpbSgpOms/XCJTYXZlIGFuZCBDb250aW51ZVwiOlQ/XCJTdWJtaXRcIjpcIlwiO3JldHVybltyLmZpbHRlcihlPT4hZT8ubGFiZWwuaW5jbHVkZXMoXCJXb3JrIEV4cGVyaWVuY2VcIikpLnJlZHVjZSgoZSx0KT0+KEQoZSx0KSxlKSxbXSksSV19YXN5bmMgZnVuY3Rpb24gSyhlLHQ9e30pe2lmKCF0LmFsbG93SGlkZGVuJiYhUihlKSlyZXR1cm4gbnVsbDtpZigxPT09dC50eXBlSW5kZXgmJmIoZSkpcmV0dXJuIEMoZSk7bGV0IHI9KDAsYS5nZXRGaXJzdE9yZGVyZWROb2RlKSgnLi9hbmNlc3Rvcjo6ZGl2W2NvbnRhaW5zKEBjbGFzcyxcImZvcm0tZ3JvdXBcIildLy9sYWJlbCcsZSksbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZm9yPVwiJHtlLmlkfVwiXWApLHM9KDAsYS5nZXRGaXJzdE9yZGVyZWROb2RlKShcIi4vYW5jZXN0b3I6OnRkWzFdLy9sYWJlbFwiLGUpO2lmKFwiU0VMRUNUXCI9PT1lLnRhZ05hbWUmJmUuZ2V0QXR0cmlidXRlKFwibmFtZVwiKT8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImRpc2FiaWxpdHlcIikmJigocj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIikpLnRleHRDb250ZW50PVwiRGlzYWJpbGl0eVwiLHIuc2V0QXR0cmlidXRlKFwiZm9yXCIsZS5pZCkpLFwiaGlkZGVuXCI9PT1lLmdldEF0dHJpYnV0ZShcInR5cGVcIil8fCgwLGEuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoJy4vYW5jZXN0b3I6OmRpdltjb250YWlucyhAY2xhc3MsIFwidGRzLWZvcm0taXRlbVwiKV0vYW5jZXN0b3I6OmRpdltjb250YWlucyhAY2xhc3MsIFwiSGlkZGVuRmllbGRzXCIpXScsZSl8fFwicmVhZG9ubHlcIj09PWUuZ2V0QXR0cmlidXRlKFwicmVhZG9ubHlcIil8fCF0LmFsbG93RGlzYWJsZWQmJmUuaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIikpcmV0dXJuIG51bGw7aWYoXCJhZ3JlZUNoZWNrYm94XCI9PT1lLmlkJiZcImNoZWNrYm94XCI9PT1lLmdldEF0dHJpYnV0ZShcInR5cGVcIikpe2xldCB0PSgwLGEuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoXCIuL2FuY2VzdG9yOjpkaXZbY29udGFpbnMoQGNsYXNzLCAnc3VibWl0LWluZm9ybWF0aW9uJyldLy9oM1wiLGUpLHI9dD8udGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIjtyZXR1cm57dHlwZTppLkZJRUxEX1RZUEUuQ0hFQ0tCT1gsbGFiZWw6cixyZXF1aXJlZDohMCwkbGFiZWw6dCxvcHRpb25zOltcIkkgQWdyZWUgdG8gdGhlIENhbmRpZGF0ZSBBY2tub3dsZWRnZW1lbnRcIl0sJGNoZWNrYm94czpbZV19fWlmKCFyJiYhbiYmIXMpcmV0dXJuIG51bGw7bGV0IHU9cj8udGV4dENvbnRlbnQ/LnRyaW0oKXx8bj8uaW5uZXJUZXh0Py50cmltKCl8fHM/LmlubmVyVGV4dD8udHJpbSgpfHxcIlwiO3U9Yyh1KTtsZXQgcD1nKGUpO3AmJltcInNlbGVjdCBvbmVcIixcInBsZWFzZSBzZWxlY3RcIixcInllcy9ub1wiXS5pbmNsdWRlcyh1LnRyaW0oKS50b0xvd2VyQ2FzZSgpKSYmKHU9cCk7bGV0IHk9cnx8bnx8cztpZihoKGUsdSkpcmV0dXJuIG51bGw7eS5nZXRBdHRyaWJ1dGUoXCJmb3JcIik/LmluY2x1ZGVzKFwiQmVnaW5EYXRlXCIpP3U9XCJCZWdpbkRhdGUgXCIrdTp5LmdldEF0dHJpYnV0ZShcImZvclwiKT8uaW5jbHVkZXMoXCJFbmREYXRlXCIpP3U9XCJFbmREYXRlIFwiK3U6eS5nZXRBdHRyaWJ1dGUoXCJmb3JcIik/LmluY2x1ZGVzKFwiZ3JhZHVhdGlvbkRhdGVcIikmJiF1LmluY2x1ZGVzKFwiUHJvamVjdGVkXCIpP3U9XCJHcmFkdWF0aW9uIERhdGUgXCIrdTp5LmdldEF0dHJpYnV0ZShcImZvclwiKT8uaW5jbHVkZXMoXCJzdGFydERhdGVcIikmJih1PVwiU3RhcnREYXRlIFwiK3UpO2xldCB2PWYoZSx5KXx8bShlKTtpZigoMCxsLmlzRW1wdHkpKHUpKXJldHVybiBudWxsO2xldCB3PVtdO2lmKFwiSU5QVVRcIj09PWUudGFnTmFtZXx8XCJURVhUQVJFQVwiPT09ZS50YWdOYW1lKXtpZihcImZpbGVcIj09PWUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSlyZXR1cm4gbnVsbDtsZXQgcj1bXCJjaGVja2JveFwiLFwicmFkaW9cIl0uaW5jbHVkZXMoZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpfHxcIlwiKT9pLkZJRUxEX1RZUEUuQ0hFQ0tCT1g6VChlKT9pLkZJRUxEX1RZUEUuREFURTppLkZJRUxEX1RZUEUuVEVYVDtpZihyPT09aS5GSUVMRF9UWVBFLkNIRUNLQk9YKXtsZXQgcj0oMCxhLmdldEZpcnN0T3JkZXJlZE5vZGUpKFwiLi9hbmNlc3Rvcjo6ZmllbGRzZXRbMV1cIixlKTtpZihyKXtsZXQgdD1BcnJheS5mcm9tKHIucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT1cIiR7ZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpfHxcImNoZWNrYm94XCJ9XCJdYCkpO2lmKHRbMF0hPT1lKXJldHVybiBudWxsO2xldCBuPXIucXVlcnlTZWxlY3RvcihcImxlZ2VuZFwiKSxvPWMoKDAsYS5nZXRFeGFjdFRleHQpKG4/LnRleHRDb250ZW50fHxcIlwiKSkscz10LHU9cy5yZWR1Y2UoKGUsdCk9PntsZXQgcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZm9yPVwiJHt0LmlkfVwiXWApLG49ZChyPy50ZXh0Q29udGVudHx8XCJcIik7cmV0dXJuKDAsbC5pc0VtcHR5KShuKXx8ZS5wdXNoKG4pLGV9LFtdKTtyZXR1cm57dHlwZTppLkZJRUxEX1RZUEUuQ0hFQ0tCT1gsbGFiZWw6byxyZXF1aXJlZDohIXYsJGxhYmVsOm4sb3B0aW9uczp1LCRjaGVja2JveHM6c319bGV0IG49TyhlLHQpO3JldHVybiBuWzBdIT09ZXx8MD09PSh3PW4ucmVkdWNlKChlLHQpPT57bGV0IHI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2Zvcj1cIiR7dC5pZH1cIl1gKSxuPWQocj8udGV4dENvbnRlbnR8fFwiXCIpO3JldHVybigwLGwuaXNFbXB0eSkobil8fGUucHVzaChuKSxlfSxbXSkpLmxlbmd0aD9udWxsOnt0eXBlOmkuRklFTERfVFlQRS5DSEVDS0JPWCxsYWJlbDp1LHJlcXVpcmVkOiEhdiwkbGFiZWw6eSxvcHRpb25zOncsJGNoZWNrYm94czpufX1pZihcImNvbWJvYm94XCI9PT1lLnJvbGUpe2xldCB0PWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudHNcIik7dC5pbml0RXZlbnQoXCJtb3VzZWRvd25cIiwhMCwhMCksZS5kaXNwYXRjaEV2ZW50KHQpLGF3YWl0ICgwLG8uZGVsYXkpKDEwMCk7bGV0IHI9ZS5pZCtcIl9saXN0XCIsbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtyfWApLGE9QXJyYXkuZnJvbShuPy5jaGlsZHJlbnx8W10pO3JldHVybiB3PWEucmVkdWNlKChlLHQpPT57bGV0IHI9dC50ZXh0Q29udGVudD8udHJpbSgpO3JldHVybigwLGwuaXNFbXB0eSkocil8fGUucHVzaChyKSxlfSxbXSksZS5ibHVyKCksYXdhaXQgKDAsby5kZWxheSkoMjAwKSx7dHlwZTp3Lmxlbmd0aD4wJiZcIlN0YXRlL1Byb3ZpbmNlXCIhPT11P2kuRklFTERfVFlQRS5EUk9QRE9XTjppLkZJRUxEX1RZUEUuVEVYVCxsYWJlbDp1LHJlcXVpcmVkOiEhdiwkaW5wdXQ6ZSwkbGFiZWw6eSxvcHRpb25zOnd9fWxldCBuPXtsYWJlbDp1LHJlcXVpcmVkOiEhdiwkbGFiZWw6eSwkaW5wdXQ6ZX07aWYocj09PWkuRklFTERfVFlQRS5EQVRFKXtsZXQgdD17Li4ubix0eXBlOmkuRklFTERfVFlQRS5EQVRFLC4uLmsoZSk/e2Rlc2NyaXB0aW9uOmsoZSl9Ont9fTtyZXR1cm4gdH1sZXQgcz17Li4ubix0eXBlOmkuRklFTERfVFlQRS5URVhUfTtyZXR1cm4gc31pZihcIlNFTEVDVFwiPT09ZS50YWdOYW1lKXtsZXQgdD0oMCxhLmdldE9yZGVyZWROb2RlcykoXCIuL29wdGlvblwiLGUpO3c9dC5yZWR1Y2UoKGUsdCk9PntsZXQgcj10LnRleHRDb250ZW50Py50cmltKCk7cmV0dXJuISgwLGwuaXNFbXB0eSkocikmJnQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIikmJmUucHVzaChyKSxlfSxbXSk7bGV0IHI9e3R5cGU6aS5GSUVMRF9UWVBFLlNFTEVDVCxsYWJlbDp1LHJlcXVpcmVkOiEhdiwkaW5wdXQ6ZSwkbGFiZWw6eSxvcHRpb25zOnd9O3JldHVybiByfXJldHVybiBudWxsfWZ1bmN0aW9uIFgoZSl7bGV0IHQ9ZTtpZighdC5pZClyZXR1cm5cIlwiO2xldCByPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtmb3I9XCIke3QuaWR9XCJdYCk7cmV0dXJuIHI/LmlubmVyVGV4dD8udHJpbSgpfHxcIlwifWZ1bmN0aW9uIEooZSl7aWYoZS50eXBlPT09aS5GSUVMRF9UWVBFLlNFQ1RJT058fGUudHlwZT09PWkuRklFTERfVFlQRS5FRFVDQVRJT058fGUudHlwZT09PWkuRklFTERfVFlQRS5FTVBMT1lNRU5UKXtsZXQgdD17fTtmb3IobGV0IHIgb2YgZS5jaGlsZHJlbil0W3IubGFiZWxdPUoocik7cmV0dXJuIHR9aWYoZS50eXBlPT09aS5GSUVMRF9UWVBFLkNIRUNLQk9YKXJldHVybiBlLiRjaGVja2JveHMuZmlsdGVyKGU9PmUuY2hlY2tlZCkubWFwKFgpLmZpbHRlcihCb29sZWFuKTtpZihlLnR5cGU9PT1pLkZJRUxEX1RZUEUuREFURSl7bGV0IHQ9ZS4kaW5wdXQ7cmV0dXJuIGIodCk/eCh0KTpcInZhbHVlXCJpbiB0P3QudmFsdWU/P3QudGV4dENvbnRlbnQ/LnRyaW0oKT8/XCJcIjp0LnRleHRDb250ZW50Py50cmltKCk/P1wiXCJ9aWYoZS50eXBlPT09aS5GSUVMRF9UWVBFLlNFTEVDVCl7bGV0IHQ9ZS4kaW5wdXQ7cmV0dXJuIHQuc2VsZWN0ZWRPcHRpb25zPy5bMF0/LnRleHRDb250ZW50Py50cmltKCl8fHQudmFsdWV8fFwiXCJ9aWYoZS50eXBlPT09aS5GSUVMRF9UWVBFLkRST1BET1dOKXtsZXQgdD1lLiRpbnB1dDtyZXR1cm4gdC52YWx1ZXx8dC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKXx8dC50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwifWlmKFwiJGlucHV0XCJpbiBlJiZlLiRpbnB1dCl7bGV0IHQ9ZS4kaW5wdXQ7cmV0dXJuIHQudmFsdWU/P3QudGV4dENvbnRlbnQ/LnRyaW0oKT8/XCJcIn1yZXR1cm5cIlwifWFzeW5jIGZ1bmN0aW9uIFEoZSl7bGV0IHQ9e30scj1bXSxuPVtdO2ZvcihsZXQgbyBvZiBlKXtpZihvLnR5cGU9PT1pLkZJRUxEX1RZUEUuRURVQ0FUSU9OKXtyLnB1c2goSihvKSk7Y29udGludWV9aWYoby50eXBlPT09aS5GSUVMRF9UWVBFLkVNUExPWU1FTlQpe24ucHVzaChKKG8pKTtjb250aW51ZX10W28ubGFiZWxdPUoobyl9cmV0dXJuey4uLnQsZWR1Y2F0aW9uOnIsZW1wbG95bWVudDpufX1cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6InJ1bGVzLjFlOGJmZDM0LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);