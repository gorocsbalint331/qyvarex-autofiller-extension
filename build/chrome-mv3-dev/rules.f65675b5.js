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
})({"ed0IG":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\adp-myjobs\\rules.js",
    "bundleId": "33622889f65675b5",
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
var j = z(require("794a062e0c0b3d39"));
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

},{"794a062e0c0b3d39":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"dOpSV":[function(require,module,exports) {
/**
 * Parcel module id: 7wDqa
 * Resolved path: src/contents/sites/adp-myjobs/rules.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/phone-country-code -> 8nENw  =>  src/core/phone-country-code.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "extractRules", ()=>l), n.export(r, "extractEmploymentRulesForFillFromPage", ()=>u), n.export(r, "expandAdpMyJobsPhoneRules", ()=>h), n.export(r, "shouldFillAdpMyJobsPhoneRule", ()=>g), n.export(r, "normalizeAdpMyJobsSdfRadioOptions", ()=>C), n.export(r, "getFormSnapshot", ()=>R);
var o = e("~core/enums"), i = e("~core/phone-country-code"), a = e("~utils/delay");
async function l() {
    let e1 = [], t = !!document.querySelector('.page-content-container[aria-label="Employment History"]'), r1 = Array.from(document.querySelectorAll("adp-form-group[data-name]"));
    if (t) {
        let t = await s();
        for (let n of (t && e1.push(t), r1))n.closest("rm-repeating-form") || e1.push(...await b(n));
    } else for (let t of r1)e1.push(...await b(t));
    let n = Array.from(document.querySelectorAll('sdf-radio-group[role="radiogroup"]'));
    for (let t of n){
        if (t.closest("adp-form-group[data-name]")) continue;
        let r1 = A(t);
        r1 && e1.push(r1);
    }
    let o = Array.from(document.querySelectorAll("sdf-select-simple"));
    for (let t of o){
        if (t.closest("adp-form-group[data-name]")) continue;
        let r1 = await P(t);
        r1 && e1.push(r1);
    }
    let i = Array.from(document.querySelectorAll("#prescreeningForm sdf-textarea, #prescreeningForm sdf-input, #prescreeningForm textarea, #prescreeningForm input:not([type='hidden'])"));
    for (let t of i){
        if (t.closest("adp-form-group[data-name]") || t.closest("sdf-radio-group, sdf-select-simple")) continue;
        let r1 = D(t);
        r1 && e1.push(r1);
    }
    return e1;
}
async function s() {
    let e1 = document.querySelector('.page-content-container[aria-label="Employment History"]');
    if (!e1) return null;
    let t = e1.querySelector("rm-repeating-form");
    if (!t) return null;
    let r1 = Array.from(t.querySelectorAll("sdf-expandable-box")), n = r1.filter((e1)=>{
        let t = (e1.querySelector('[slot="header"]')?.textContent || "").replace(/\s+/g, " ").trim().toLowerCase() || "";
        return !!t.includes("employer") || !!e1.querySelector("adp-form-group label.form-control-label:not(.form-control-label-hidden)");
    });
    if (0 === n.length) return null;
    let i = n[0], a = Array.from(i.querySelectorAll("adp-form-group[data-name]")), l = [];
    for (let e1 of a)l.push(...await b(e1));
    if (0 === l.length) return null;
    let s = {
        type: o.FIELD_TYPE.EMPLOYMENT,
        label: "employment",
        required: !1,
        children: l,
        options: l.map((e1)=>({
                type: e1.type,
                label: e1.label,
                options: e1.options || []
            }))
    };
    return s;
}
async function u() {
    let e1 = document.querySelector('.page-content-container[aria-label="Employment History"]');
    if (!e1) return [];
    let t = e1.querySelector("rm-repeating-form");
    if (!t) return [];
    let r1 = Array.from(t.querySelectorAll("sdf-expandable-box")), n = r1.filter((e1)=>{
        let t = (e1.querySelector('[slot="header"]')?.textContent || "").replace(/\s+/g, " ").trim().toLowerCase() || "";
        return !!t.includes("employer") || !!e1.querySelector("adp-form-group label.form-control-label:not(.form-control-label-hidden)");
    }), i = [];
    for (let e1 of n){
        let t = Array.from(e1.querySelectorAll("adp-form-group[data-name]")), r1 = [];
        for (let e1 of t)r1.push(...await b(e1));
        0 !== r1.length && i.push({
            type: o.FIELD_TYPE.EMPLOYMENT,
            label: "employment",
            required: !1,
            children: r1,
            options: r1.map((e1)=>({
                    type: e1.type,
                    label: e1.label,
                    options: e1.options || []
                }))
        });
    }
    return i;
}
async function c(e1) {
    try {
        let t = _(".trigger-button[role='button'], [part='frame'][role='button'], [role='button'][aria-expanded]", e1), r1 = _("sdf-icon.expansion-control, [part='expansion-trigger-control']", e1), n = t ?? r1 ?? e1;
        n.click();
        let o = [];
        for(let t = 0; t < 30 && !((o = f(d(e1))).length > 0); t++)await (0, a.delay)(100);
        return n.click(), await (0, a.delay)(300), o;
    } catch  {
        return [];
    }
}
function d(e1) {
    return L("sdf-select-item, [role='option']", e1);
}
function f(e1) {
    return e1.map((e1)=>e1.getAttribute("aria-label")?.trim() || e1.textContent?.replace(/\s+/g, " ").trim() || "").filter((e1)=>e1 && "-" !== e1);
}
function p(e1) {
    return _('sdf-select-simple[embedded-context="phone-number"]', e1);
}
async function m(e1) {
    let t = f(L("sdf-select-item, [role='option']", e1));
    return 0 === t.length && (t = await c(e1)), Array.from(new Set(t));
}
function h(e1, t, r1) {
    return t ? [
        {
            type: o.FIELD_TYPE.SELECT,
            label: i.PHONE_COUNTRY_CODE_LABEL,
            required: e1.required,
            options: r1,
            description: i.PHONE_COUNTRY_CODE_DESCRIPTION,
            $input: t,
            $label: e1.$label
        },
        {
            ...e1,
            description: i.LOCAL_PHONE_DESCRIPTION
        }
    ] : [
        e1
    ];
}
function g(e1, t) {
    return e1.description !== i.LOCAL_PHONE_DESCRIPTION || t;
}
async function b(e1) {
    let t = await y(e1);
    if (!t) return [];
    if (e1.getAttribute("data-name")?.toLowerCase() !== "phone") return [
        t
    ];
    let r1 = e1.querySelector("sdf-phone-number-input"), n = r1 ? p(r1) : null;
    if (!r1 || !n || t.type !== o.FIELD_TYPE.TEXT) return [
        t
    ];
    let i = await m(n);
    return console.debug("[ADP MyJobs][PhoneCountryCode] extracted embedded selector", {
        fieldName: "phone",
        optionCount: i.length
    }), h(t, n, i);
}
async function y(e1) {
    let t = e1.querySelector("label.form-control-label"), r1 = t?.querySelector(".valid-label")?.textContent?.replace(/\s+/g, " ")?.trim() || t?.textContent?.replace(/\s+/g, " ")?.trim() || "", n = w(r1);
    if (!n) return null;
    let i = !!t?.querySelector(".required") || v(e1, t), a = e1.querySelector("sdf-radio-group");
    if (a) {
        let r1 = Array.from(a.querySelectorAll("sdf-radio-button"));
        if (r1.length > 0) {
            let l = C(r1.map((e1)=>E(e1)), r1.length);
            return {
                type: o.FIELD_TYPE.RADIOGROUP,
                label: n,
                required: i,
                options: l.length ? l : void 0,
                $radios: r1,
                $radioParent: a,
                $input: r1[0],
                $label: t || e1
            };
        }
    }
    let l = e1.querySelector("sdf-checkbox");
    if (l) return {
        type: o.FIELD_TYPE.CHECKBOX,
        label: n,
        required: i,
        options: [
            n
        ],
        $checkboxs: [
            l
        ],
        $input: l,
        $label: t || e1
    };
    let s = e1.querySelector("sdf-select-simple");
    if (s) {
        let r1 = Array.from(s.querySelectorAll("sdf-select-item")).map((e1)=>e1.textContent?.replace(/\s+/g, " ")?.trim() || "").filter((e1)=>e1 && "-" !== e1);
        return 0 === r1.length && (r1 = await c(s)), {
            type: o.FIELD_TYPE.SELECT,
            label: n,
            required: i,
            options: r1.length ? r1 : S(n),
            $input: s,
            $label: t || e1
        };
    }
    let u = e1.querySelector("sdf-phone-number-input");
    if (u) {
        let r1 = _('input[type="tel"], input', u);
        return r1 ? {
            type: o.FIELD_TYPE.TEXT,
            label: n,
            required: i,
            $input: r1,
            $label: t || e1
        } : null;
    }
    let d = e1.querySelector("input, textarea");
    if (d) return d.hasAttribute("disabled") || d.readOnly ? null : {
        type: o.FIELD_TYPE.TEXT,
        label: n,
        required: i,
        $input: d,
        $label: t || e1
    };
    let f = e1.querySelector("sdf-textarea");
    if (f) {
        let r1 = _("textarea, input", f);
        return {
            type: o.FIELD_TYPE.TEXT,
            label: n,
            required: i,
            $input: r1 || f,
            $label: t || e1
        };
    }
    let p = e1.querySelector("sdf-date-picker");
    if (p) return {
        type: o.FIELD_TYPE.DATE,
        label: n,
        required: i,
        description: "MM/DD/YYYY",
        $input: p,
        $label: t || e1
    };
    let m = e1.querySelector("sdf-input");
    if (m) {
        let r1 = _("input, textarea", m);
        return r1 ? r1.hasAttribute("disabled") || r1 instanceof HTMLInputElement && r1.readOnly ? null : {
            type: o.FIELD_TYPE.TEXT,
            label: n,
            required: i,
            $input: r1,
            $label: t || e1
        } : {
            type: o.FIELD_TYPE.TEXT,
            label: n,
            required: i,
            $input: m,
            $label: t || e1
        };
    }
    return null;
}
function v(e1, t) {
    if (e1.hasAttribute("required") || "true" === e1.getAttribute("aria-required") || t && (t.classList.contains("required") || t.querySelector(".required, .required-indicator, [class*='required']") || t.textContent?.includes("*"))) return !0;
    let r1 = e1.closest("div, fieldset");
    return !!(r1 && (r1.classList.contains("required") || r1.querySelector(".required, .required-indicator")));
}
function w(e1) {
    return e1.replace(/\s+/g, " ").replace(/\*/g, "").replace(/\u00a0/g, " ").trim();
}
function S(e1) {
    let t = e1.toLowerCase();
    return t.includes("may we contact") ? [
        "Yes",
        "No"
    ] : t.includes("current or previous employer") ? [
        "Current employer",
        "Previous employer"
    ] : "current employer" === t || t.includes("current employer") ? [
        "Yes",
        "No"
    ] : [];
}
_c = S;
function E(e1) {
    let t = e1.getAttribute("aria-label")?.trim();
    if (t) return t;
    let r1 = e1.textContent?.replace(/\s+/g, " ").trim();
    if (r1) return r1;
    let n = e1.getAttribute("aria-describedby") || "", o = n.split(/\s+/).filter(Boolean);
    for (let e1 of o){
        let t = document.getElementById(e1), r1 = t?.textContent?.replace(/\s+/g, " ").trim();
        if (r1) return r1;
    }
    let i = e1.shadowRoot?.textContent?.replace(/\s+/g, " ").trim() || "";
    return i || e1.getAttribute("value")?.trim() || "";
}
_c1 = E;
function x(e1) {
    let t = e1.trim();
    return /^\d{4,}$/.test(t) || /^q_\d+$/i.test(t);
}
function C(e1, t) {
    let r1 = e1.map((e1)=>e1.replace(/\s+/g, " ").trim()).filter(Boolean);
    return 2 === t && (0 === r1.length || r1.every(x)) ? [
        "Yes",
        "No"
    ] : r1;
}
_c2 = C;
function A(e1) {
    let t = e1.querySelector(".sdf-form-control-wrapper--label"), r1 = w(t?.textContent?.replace(/\s+/g, " ").trim() || e1.getAttribute("aria-label") || "");
    if (!r1) return null;
    let n = Array.from(e1.querySelectorAll("sdf-radio-button"));
    if (0 === n.length) return null;
    let i = C(n.map((e1)=>E(e1)), n.length), a = "true" === e1.getAttribute("aria-required") || e1.hasAttribute("required") || !!e1.querySelector('[id$="errorMessage"]:not(:empty), [id*="errorMessage"]:not(:empty)');
    return {
        type: o.FIELD_TYPE.RADIOGROUP,
        label: r1,
        required: a,
        options: i.length ? i : void 0,
        $radios: n,
        $radioParent: e1,
        $input: n[0],
        $label: t || e1
    };
}
_c3 = A;
function k(e1) {
    return /^q_\d+/i.test(e1) || /^\d{4,}$/.test(e1) || /(?:^|[-_])(error|errormessage|required)(?:$|[-_])/i.test(e1);
}
function T(e1) {
    return !!e1 && !/^(error|required|\*)$/i.test(e1);
}
_c4 = T;
function F(e1) {
    for (let t of e1){
        if (k(t)) continue;
        let e1 = document.getElementById(t)?.textContent?.replace(/\s+/g, " ").trim() || "";
        if (T(e1)) return e1;
    }
    return "";
}
_c5 = F;
function I(e1) {
    let t = e1.closest(".section-row")?.parentElement, r1 = t?.previousElementSibling;
    for(; r1;){
        let e1 = r1.querySelector(".sdf-form-control-wrapper--label")?.textContent?.replace(/\s+/g, " ").trim();
        if (e1) return e1;
        let t = r1.textContent?.replace(/\s+/g, " ").trim();
        if (t) return t;
        r1 = r1.previousElementSibling;
    }
    return "";
}
_c6 = I;
function j(e1, t = {}) {
    let r1 = _(".sdf-form-control-wrapper--label, label, [part='label']", e1)?.textContent?.replace(/\s+/g, " ").trim();
    if (r1) return r1;
    let n = e1.getAttribute("aria-label")?.trim();
    if (n) return n;
    let o = e1.getAttribute("aria-labelledby")?.trim().split(/\s+/).filter(Boolean) || [], i = F(o);
    if (i) return i;
    let a = t.fallbackToPreviousDetails ? I(e1) : "";
    return a ? `${a} Details` : "";
}
function D(e1) {
    let t = w(j(e1, {
        fallbackToPreviousDetails: !0
    }));
    if (!t) return null;
    let r1 = _("textarea, input", e1), n = r1 || e1;
    return n instanceof HTMLInputElement && ("hidden" === n.type || n.disabled || n.readOnly) ? null : {
        type: o.FIELD_TYPE.TEXT,
        label: t,
        required: "true" === e1.getAttribute("aria-required") || e1.hasAttribute("required"),
        $input: n,
        $label: e1
    };
}
_c7 = D;
async function P(e1) {
    let t = j(e1);
    if (!t) {
        let r1 = e1.closest(".section-row");
        if (r1) {
            let e1 = r1.previousElementSibling;
            if (e1 || (e1 = r1.parentElement?.previousElementSibling), e1?.querySelector?.("sdf-radio-group, sdf-select-simple, sdf-checkbox, sdf-input") && (e1 = null), e1) {
                let r1 = e1.textContent?.replace(/\s+/g, " ").trim() || "";
                r1.length > 2 && !/^(error|required|\*)$/i.test(r1) && (t = r1);
            }
            if (!t) {
                let e1 = r1.querySelector("label, .form-control-label, [class*='label']");
                t = e1?.textContent?.replace(/\s+/g, " ").trim() || "";
            }
        }
    }
    if (!t) {
        let r1 = e1.getAttribute("aria-label")?.trim();
        r1 && (t = r1);
    }
    let r1 = w(t);
    if (!r1) return null;
    let n = f([
        ...Array.from(e1.querySelectorAll("sdf-select-item")),
        ...d(e1)
    ]);
    0 === n.length && (n = await c(e1));
    let i = e1.closest(".section-row"), a = "true" === e1.getAttribute("aria-required") || e1.hasAttribute("required") || !!i?.querySelector(".required, [class*='required']");
    return {
        type: o.FIELD_TYPE.SELECT,
        label: r1,
        required: a,
        options: n.length ? n : S(r1),
        $input: e1,
        $label: i || e1
    };
}
_c8 = P;
function _(e1, t = document) {
    let r1 = t, n = (HTMLElement, r1.querySelector(e1));
    if (n) return n;
    let o = [], i = (e1)=>{
        if (e1 instanceof ShadowRoot) {
            o.push(...Array.from(e1.children));
            return;
        }
        e1.shadowRoot && o.push(e1.shadowRoot), o.push(...Array.from(e1.children));
    };
    for(r1 instanceof Document ? o.push(...Array.from(r1.documentElement.children)) : r1 instanceof HTMLElement ? (r1.shadowRoot && o.push(r1.shadowRoot), o.push(...Array.from(r1.children))) : r1 instanceof ShadowRoot && o.push(...Array.from(r1.children)); o.length;){
        let t = o.shift(), r1 = (ShadowRoot, t.querySelector(e1));
        if (r1) return r1;
        i(t);
    }
    return null;
}
function L(e1, t = document) {
    let r1 = [], n = t;
    r1.push(...Array.from(n.querySelectorAll(e1)));
    let o = [], i = (e1)=>{
        if (e1 instanceof ShadowRoot) {
            o.push(...Array.from(e1.children));
            return;
        }
        e1.shadowRoot && o.push(e1.shadowRoot), o.push(...Array.from(e1.children));
    };
    for(n instanceof Document ? o.push(...Array.from(n.documentElement.children)) : n instanceof HTMLElement ? (n.shadowRoot && o.push(n.shadowRoot), o.push(...Array.from(n.children))) : n instanceof ShadowRoot && o.push(...Array.from(n.children)); o.length;){
        let t = o.shift();
        r1.push(...Array.from(t.querySelectorAll(e1))), i(t);
    }
    return Array.from(new Set(r1));
}
_c9 = L;
async function R() {
    let e1 = {}, t = Array.from(document.querySelectorAll("adp-form-group[data-name]"));
    for (let r1 of t){
        let t = r1.querySelector("label.form-control-label"), n = t?.querySelector(".valid-label")?.textContent?.replace(/\s+/g, " ")?.trim() || t?.textContent?.replace(/\s+/g, " ")?.trim() || "", o = w(n);
        if (!o) continue;
        let a = r1.querySelector("sdf-checkbox");
        if (a) {
            e1[o] = "true" === a.getAttribute("aria-checked") ? "Yes" : "No";
            continue;
        }
        let l = r1.querySelector("sdf-radio-group");
        if (l) {
            let t = Array.from(l.querySelectorAll("sdf-radio-button")), r1 = t.find((e1)=>"true" === e1.getAttribute("aria-checked"));
            e1[o] = r1 ? E(r1) : "";
            continue;
        }
        let s = r1.querySelector("sdf-select-simple");
        if (s) {
            let t = s.querySelector('sdf-select-item[aria-selected="true"]') || s.querySelector("sdf-select-item[selected]");
            e1[o] = t?.textContent?.replace(/\s+/g, " ")?.trim() || s.value || "";
            continue;
        }
        let u = r1.querySelector("sdf-phone-number-input");
        if (u) {
            let t = _('input[type="tel"], input', u);
            if (r1.getAttribute("data-name")?.toLowerCase() === "phone") {
                let t = p(u), r1 = t ? _('sdf-select-item[aria-selected="true"], sdf-select-item[selected]', t) : null;
                e1[i.PHONE_COUNTRY_CODE_LABEL] = r1?.getAttribute("aria-label")?.trim() || r1?.textContent?.replace(/\s+/g, " ").trim() || r1?.getAttribute("value")?.trim() || "";
            }
            e1[o] = t?.value || "";
            continue;
        }
        let c = r1.querySelector("input, textarea");
        if (c) {
            e1[o] = c.value || "";
            continue;
        }
        let d = r1.querySelector("sdf-input");
        if (d) {
            let t = _("input, textarea", d);
            e1[o] = t?.value || "";
            continue;
        }
        let f = r1.querySelector("sdf-textarea");
        if (f) {
            let t = _("textarea, input", f);
            e1[o] = t?.value || "";
            continue;
        }
        let m = r1.querySelector("sdf-date-picker");
        if (m) {
            let t = _("input", m);
            e1[o] = t?.value || m.value || "";
            continue;
        }
    }
    let r1 = Array.from(document.querySelectorAll('sdf-radio-group[role="radiogroup"]'));
    for (let t of r1){
        if (t.closest("adp-form-group[data-name]")) continue;
        let r1 = t.querySelector(".sdf-form-control-wrapper--label"), n = w(r1?.textContent?.replace(/\s+/g, " ").trim() || t.getAttribute("aria-label") || "");
        if (!n) continue;
        let o = Array.from(t.querySelectorAll("sdf-radio-button")), i = o.find((e1)=>"true" === e1.getAttribute("aria-checked")), a = C(o.map((e1)=>E(e1)), o.length), l = i ? o.indexOf(i) : -1;
        e1[n] = l >= 0 ? a[l] || E(i) : "";
    }
    let n = Array.from(document.querySelectorAll("#prescreeningForm sdf-textarea, #prescreeningForm sdf-input, #prescreeningForm textarea, #prescreeningForm input:not([type='hidden'])"));
    for (let t of n){
        if (t.closest("adp-form-group[data-name]") || t.closest("sdf-radio-group, sdf-select-simple")) continue;
        let r1 = w(j(t, {
            fallbackToPreviousDetails: !0
        }));
        if (!r1) continue;
        let n = _("textarea, input", t);
        e1[r1] = n?.value || t.value || "";
    }
    return e1;
}
_c10 = R;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
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

},{}]},["ed0IG","dOpSV"], "dOpSV", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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UyxJQUFJLEtBQUUsRUFBRSxFQUFFLEdBQUU7WUFBQywyQkFBMEIsQ0FBQztRQUFDO1FBQUksSUFBRyxDQUFDLElBQUU7UUFBUyxJQUFJLElBQUUsRUFBRSxtQkFBa0I7UUFBRyxFQUFDLENBQUMsR0FBRSxHQUFDLEdBQUcsU0FBTyxFQUFFLFNBQU87SUFBRTtJQUFDLE9BQU87QUFBQztPQUFsOUUiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTNhN2U4ZDQ0MjgyYmI4Y2UuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvYWRwLW15am9icy9ydWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxhZHAtbXlqb2JzXFxcXHJ1bGVzLmpzXCIsXCJidW5kbGVJZFwiOlwiMzM2MjI4ODlmNjU2NzViNVwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IDd3RHFhXHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy9hZHAtbXlqb2JzL3J1bGVzLmpzXHJcbiAqIERlcGVuZGVuY2llczpcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIH5jb3JlL2VudW1zIC0+IDFPM25jICA9PiAgc3JjL2NvcmUvZW51bXMuanNcclxuICogICB+Y29yZS9waG9uZS1jb3VudHJ5LWNvZGUgLT4gOG5FTncgID0+ICBzcmMvY29yZS9waG9uZS1jb3VudHJ5LWNvZGUuanNcclxuICogICB+dXRpbHMvZGVsYXkgLT4gYW02MTQgID0+ICBzcmMvdXRpbHMvZGVsYXkuanNcclxuICovXHJcblxyXG52YXIgbj1lKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtuLmRlZmluZUludGVyb3BGbGFnKHIpLG4uZXhwb3J0KHIsXCJleHRyYWN0UnVsZXNcIiwoKT0+bCksbi5leHBvcnQocixcImV4dHJhY3RFbXBsb3ltZW50UnVsZXNGb3JGaWxsRnJvbVBhZ2VcIiwoKT0+dSksbi5leHBvcnQocixcImV4cGFuZEFkcE15Sm9ic1Bob25lUnVsZXNcIiwoKT0+aCksbi5leHBvcnQocixcInNob3VsZEZpbGxBZHBNeUpvYnNQaG9uZVJ1bGVcIiwoKT0+Zyksbi5leHBvcnQocixcIm5vcm1hbGl6ZUFkcE15Sm9ic1NkZlJhZGlvT3B0aW9uc1wiLCgpPT5DKSxuLmV4cG9ydChyLFwiZ2V0Rm9ybVNuYXBzaG90XCIsKCk9PlIpO3ZhciBvPWUoXCJ+Y29yZS9lbnVtc1wiKSxpPWUoXCJ+Y29yZS9waG9uZS1jb3VudHJ5LWNvZGVcIiksYT1lKFwifnV0aWxzL2RlbGF5XCIpO2FzeW5jIGZ1bmN0aW9uIGwoKXtsZXQgZT1bXSx0PSEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtY29udGVudC1jb250YWluZXJbYXJpYS1sYWJlbD1cIkVtcGxveW1lbnQgSGlzdG9yeVwiXScpLHI9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYWRwLWZvcm0tZ3JvdXBbZGF0YS1uYW1lXVwiKSk7aWYodCl7bGV0IHQ9YXdhaXQgcygpO2ZvcihsZXQgbiBvZih0JiZlLnB1c2godCkscikpbi5jbG9zZXN0KFwicm0tcmVwZWF0aW5nLWZvcm1cIil8fGUucHVzaCguLi5hd2FpdCBiKG4pKX1lbHNlIGZvcihsZXQgdCBvZiByKWUucHVzaCguLi5hd2FpdCBiKHQpKTtsZXQgbj1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NkZi1yYWRpby1ncm91cFtyb2xlPVwicmFkaW9ncm91cFwiXScpKTtmb3IobGV0IHQgb2Ygbil7aWYodC5jbG9zZXN0KFwiYWRwLWZvcm0tZ3JvdXBbZGF0YS1uYW1lXVwiKSljb250aW51ZTtsZXQgcj1BKHQpO3ImJmUucHVzaChyKX1sZXQgbz1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZGYtc2VsZWN0LXNpbXBsZVwiKSk7Zm9yKGxldCB0IG9mIG8pe2lmKHQuY2xvc2VzdChcImFkcC1mb3JtLWdyb3VwW2RhdGEtbmFtZV1cIikpY29udGludWU7bGV0IHI9YXdhaXQgUCh0KTtyJiZlLnB1c2gocil9bGV0IGk9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3ByZXNjcmVlbmluZ0Zvcm0gc2RmLXRleHRhcmVhLCAjcHJlc2NyZWVuaW5nRm9ybSBzZGYtaW5wdXQsICNwcmVzY3JlZW5pbmdGb3JtIHRleHRhcmVhLCAjcHJlc2NyZWVuaW5nRm9ybSBpbnB1dDpub3QoW3R5cGU9J2hpZGRlbiddKVwiKSk7Zm9yKGxldCB0IG9mIGkpe2lmKHQuY2xvc2VzdChcImFkcC1mb3JtLWdyb3VwW2RhdGEtbmFtZV1cIil8fHQuY2xvc2VzdChcInNkZi1yYWRpby1ncm91cCwgc2RmLXNlbGVjdC1zaW1wbGVcIikpY29udGludWU7bGV0IHI9RCh0KTtyJiZlLnB1c2gocil9cmV0dXJuIGV9YXN5bmMgZnVuY3Rpb24gcygpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWNvbnRlbnQtY29udGFpbmVyW2FyaWEtbGFiZWw9XCJFbXBsb3ltZW50IEhpc3RvcnlcIl0nKTtpZighZSlyZXR1cm4gbnVsbDtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoXCJybS1yZXBlYXRpbmctZm9ybVwiKTtpZighdClyZXR1cm4gbnVsbDtsZXQgcj1BcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbChcInNkZi1leHBhbmRhYmxlLWJveFwiKSksbj1yLmZpbHRlcihlPT57bGV0IHQ9KGUucXVlcnlTZWxlY3RvcignW3Nsb3Q9XCJoZWFkZXJcIl0nKT8udGV4dENvbnRlbnR8fFwiXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpLnRvTG93ZXJDYXNlKCl8fFwiXCI7cmV0dXJuISF0LmluY2x1ZGVzKFwiZW1wbG95ZXJcIil8fCEhZS5xdWVyeVNlbGVjdG9yKFwiYWRwLWZvcm0tZ3JvdXAgbGFiZWwuZm9ybS1jb250cm9sLWxhYmVsOm5vdCguZm9ybS1jb250cm9sLWxhYmVsLWhpZGRlbilcIil9KTtpZigwPT09bi5sZW5ndGgpcmV0dXJuIG51bGw7bGV0IGk9blswXSxhPUFycmF5LmZyb20oaS5xdWVyeVNlbGVjdG9yQWxsKFwiYWRwLWZvcm0tZ3JvdXBbZGF0YS1uYW1lXVwiKSksbD1bXTtmb3IobGV0IGUgb2YgYSlsLnB1c2goLi4uYXdhaXQgYihlKSk7aWYoMD09PWwubGVuZ3RoKXJldHVybiBudWxsO2xldCBzPXt0eXBlOm8uRklFTERfVFlQRS5FTVBMT1lNRU5ULGxhYmVsOlwiZW1wbG95bWVudFwiLHJlcXVpcmVkOiExLGNoaWxkcmVuOmwsb3B0aW9uczpsLm1hcChlPT4oe3R5cGU6ZS50eXBlLGxhYmVsOmUubGFiZWwsb3B0aW9uczplLm9wdGlvbnN8fFtdfSkpfTtyZXR1cm4gc31hc3luYyBmdW5jdGlvbiB1KCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtY29udGVudC1jb250YWluZXJbYXJpYS1sYWJlbD1cIkVtcGxveW1lbnQgSGlzdG9yeVwiXScpO2lmKCFlKXJldHVybltdO2xldCB0PWUucXVlcnlTZWxlY3RvcihcInJtLXJlcGVhdGluZy1mb3JtXCIpO2lmKCF0KXJldHVybltdO2xldCByPUFycmF5LmZyb20odC5xdWVyeVNlbGVjdG9yQWxsKFwic2RmLWV4cGFuZGFibGUtYm94XCIpKSxuPXIuZmlsdGVyKGU9PntsZXQgdD0oZS5xdWVyeVNlbGVjdG9yKCdbc2xvdD1cImhlYWRlclwiXScpPy50ZXh0Q29udGVudHx8XCJcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCkudG9Mb3dlckNhc2UoKXx8XCJcIjtyZXR1cm4hIXQuaW5jbHVkZXMoXCJlbXBsb3llclwiKXx8ISFlLnF1ZXJ5U2VsZWN0b3IoXCJhZHAtZm9ybS1ncm91cCBsYWJlbC5mb3JtLWNvbnRyb2wtbGFiZWw6bm90KC5mb3JtLWNvbnRyb2wtbGFiZWwtaGlkZGVuKVwiKX0pLGk9W107Zm9yKGxldCBlIG9mIG4pe2xldCB0PUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiYWRwLWZvcm0tZ3JvdXBbZGF0YS1uYW1lXVwiKSkscj1bXTtmb3IobGV0IGUgb2YgdClyLnB1c2goLi4uYXdhaXQgYihlKSk7MCE9PXIubGVuZ3RoJiZpLnB1c2goe3R5cGU6by5GSUVMRF9UWVBFLkVNUExPWU1FTlQsbGFiZWw6XCJlbXBsb3ltZW50XCIscmVxdWlyZWQ6ITEsY2hpbGRyZW46cixvcHRpb25zOnIubWFwKGU9Pih7dHlwZTplLnR5cGUsbGFiZWw6ZS5sYWJlbCxvcHRpb25zOmUub3B0aW9uc3x8W119KSl9KX1yZXR1cm4gaX1hc3luYyBmdW5jdGlvbiBjKGUpe3RyeXtsZXQgdD1fKFwiLnRyaWdnZXItYnV0dG9uW3JvbGU9J2J1dHRvbiddLCBbcGFydD0nZnJhbWUnXVtyb2xlPSdidXR0b24nXSwgW3JvbGU9J2J1dHRvbiddW2FyaWEtZXhwYW5kZWRdXCIsZSkscj1fKFwic2RmLWljb24uZXhwYW5zaW9uLWNvbnRyb2wsIFtwYXJ0PSdleHBhbnNpb24tdHJpZ2dlci1jb250cm9sJ11cIixlKSxuPXQ/P3I/P2U7bi5jbGljaygpO2xldCBvPVtdO2ZvcihsZXQgdD0wO3Q8MzAmJiEoKG89ZihkKGUpKSkubGVuZ3RoPjApO3QrKylhd2FpdCAoMCxhLmRlbGF5KSgxMDApO3JldHVybiBuLmNsaWNrKCksYXdhaXQgKDAsYS5kZWxheSkoMzAwKSxvfWNhdGNoe3JldHVybltdfX1mdW5jdGlvbiBkKGUpe3JldHVybiBMKFwic2RmLXNlbGVjdC1pdGVtLCBbcm9sZT0nb3B0aW9uJ11cIixlKX1mdW5jdGlvbiBmKGUpe3JldHVybiBlLm1hcChlPT5lLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIik/LnRyaW0oKXx8ZS50ZXh0Q29udGVudD8ucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCl8fFwiXCIpLmZpbHRlcihlPT5lJiZcIi1cIiE9PWUpfWZ1bmN0aW9uIHAoZSl7cmV0dXJuIF8oJ3NkZi1zZWxlY3Qtc2ltcGxlW2VtYmVkZGVkLWNvbnRleHQ9XCJwaG9uZS1udW1iZXJcIl0nLGUpfWFzeW5jIGZ1bmN0aW9uIG0oZSl7bGV0IHQ9ZihMKFwic2RmLXNlbGVjdC1pdGVtLCBbcm9sZT0nb3B0aW9uJ11cIixlKSk7cmV0dXJuIDA9PT10Lmxlbmd0aCYmKHQ9YXdhaXQgYyhlKSksQXJyYXkuZnJvbShuZXcgU2V0KHQpKX1mdW5jdGlvbiBoKGUsdCxyKXtyZXR1cm4gdD9be3R5cGU6by5GSUVMRF9UWVBFLlNFTEVDVCxsYWJlbDppLlBIT05FX0NPVU5UUllfQ09ERV9MQUJFTCxyZXF1aXJlZDplLnJlcXVpcmVkLG9wdGlvbnM6cixkZXNjcmlwdGlvbjppLlBIT05FX0NPVU5UUllfQ09ERV9ERVNDUklQVElPTiwkaW5wdXQ6dCwkbGFiZWw6ZS4kbGFiZWx9LHsuLi5lLGRlc2NyaXB0aW9uOmkuTE9DQUxfUEhPTkVfREVTQ1JJUFRJT059XTpbZV19ZnVuY3Rpb24gZyhlLHQpe3JldHVybiBlLmRlc2NyaXB0aW9uIT09aS5MT0NBTF9QSE9ORV9ERVNDUklQVElPTnx8dH1hc3luYyBmdW5jdGlvbiBiKGUpe2xldCB0PWF3YWl0IHkoZSk7aWYoIXQpcmV0dXJuW107aWYoZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIik/LnRvTG93ZXJDYXNlKCkhPT1cInBob25lXCIpcmV0dXJuW3RdO2xldCByPWUucXVlcnlTZWxlY3RvcihcInNkZi1waG9uZS1udW1iZXItaW5wdXRcIiksbj1yP3Aocik6bnVsbDtpZighcnx8IW58fHQudHlwZSE9PW8uRklFTERfVFlQRS5URVhUKXJldHVyblt0XTtsZXQgaT1hd2FpdCBtKG4pO3JldHVybiBjb25zb2xlLmRlYnVnKFwiW0FEUCBNeUpvYnNdW1Bob25lQ291bnRyeUNvZGVdIGV4dHJhY3RlZCBlbWJlZGRlZCBzZWxlY3RvclwiLHtmaWVsZE5hbWU6XCJwaG9uZVwiLG9wdGlvbkNvdW50OmkubGVuZ3RofSksaCh0LG4saSl9YXN5bmMgZnVuY3Rpb24geShlKXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbC5mb3JtLWNvbnRyb2wtbGFiZWxcIikscj10Py5xdWVyeVNlbGVjdG9yKFwiLnZhbGlkLWxhYmVsXCIpPy50ZXh0Q29udGVudD8ucmVwbGFjZSgvXFxzKy9nLFwiIFwiKT8udHJpbSgpfHx0Py50ZXh0Q29udGVudD8ucmVwbGFjZSgvXFxzKy9nLFwiIFwiKT8udHJpbSgpfHxcIlwiLG49dyhyKTtpZighbilyZXR1cm4gbnVsbDtsZXQgaT0hIXQ/LnF1ZXJ5U2VsZWN0b3IoXCIucmVxdWlyZWRcIil8fHYoZSx0KSxhPWUucXVlcnlTZWxlY3RvcihcInNkZi1yYWRpby1ncm91cFwiKTtpZihhKXtsZXQgcj1BcnJheS5mcm9tKGEucXVlcnlTZWxlY3RvckFsbChcInNkZi1yYWRpby1idXR0b25cIikpO2lmKHIubGVuZ3RoPjApe2xldCBsPUMoci5tYXAoZT0+RShlKSksci5sZW5ndGgpO3JldHVybnt0eXBlOm8uRklFTERfVFlQRS5SQURJT0dST1VQLGxhYmVsOm4scmVxdWlyZWQ6aSxvcHRpb25zOmwubGVuZ3RoP2w6dm9pZCAwLCRyYWRpb3M6ciwkcmFkaW9QYXJlbnQ6YSwkaW5wdXQ6clswXSwkbGFiZWw6dHx8ZX19fWxldCBsPWUucXVlcnlTZWxlY3RvcihcInNkZi1jaGVja2JveFwiKTtpZihsKXJldHVybnt0eXBlOm8uRklFTERfVFlQRS5DSEVDS0JPWCxsYWJlbDpuLHJlcXVpcmVkOmksb3B0aW9uczpbbl0sJGNoZWNrYm94czpbbF0sJGlucHV0OmwsJGxhYmVsOnR8fGV9O2xldCBzPWUucXVlcnlTZWxlY3RvcihcInNkZi1zZWxlY3Qtc2ltcGxlXCIpO2lmKHMpe2xldCByPUFycmF5LmZyb20ocy5xdWVyeVNlbGVjdG9yQWxsKFwic2RmLXNlbGVjdC1pdGVtXCIpKS5tYXAoZT0+ZS50ZXh0Q29udGVudD8ucmVwbGFjZSgvXFxzKy9nLFwiIFwiKT8udHJpbSgpfHxcIlwiKS5maWx0ZXIoZT0+ZSYmXCItXCIhPT1lKTtyZXR1cm4gMD09PXIubGVuZ3RoJiYocj1hd2FpdCBjKHMpKSx7dHlwZTpvLkZJRUxEX1RZUEUuU0VMRUNULGxhYmVsOm4scmVxdWlyZWQ6aSxvcHRpb25zOnIubGVuZ3RoP3I6UyhuKSwkaW5wdXQ6cywkbGFiZWw6dHx8ZX19bGV0IHU9ZS5xdWVyeVNlbGVjdG9yKFwic2RmLXBob25lLW51bWJlci1pbnB1dFwiKTtpZih1KXtsZXQgcj1fKCdpbnB1dFt0eXBlPVwidGVsXCJdLCBpbnB1dCcsdSk7cmV0dXJuIHI/e3R5cGU6by5GSUVMRF9UWVBFLlRFWFQsbGFiZWw6bixyZXF1aXJlZDppLCRpbnB1dDpyLCRsYWJlbDp0fHxlfTpudWxsfWxldCBkPWUucXVlcnlTZWxlY3RvcihcImlucHV0LCB0ZXh0YXJlYVwiKTtpZihkKXJldHVybiBkLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpfHxkLnJlYWRPbmx5P251bGw6e3R5cGU6by5GSUVMRF9UWVBFLlRFWFQsbGFiZWw6bixyZXF1aXJlZDppLCRpbnB1dDpkLCRsYWJlbDp0fHxlfTtsZXQgZj1lLnF1ZXJ5U2VsZWN0b3IoXCJzZGYtdGV4dGFyZWFcIik7aWYoZil7bGV0IHI9XyhcInRleHRhcmVhLCBpbnB1dFwiLGYpO3JldHVybnt0eXBlOm8uRklFTERfVFlQRS5URVhULGxhYmVsOm4scmVxdWlyZWQ6aSwkaW5wdXQ6cnx8ZiwkbGFiZWw6dHx8ZX19bGV0IHA9ZS5xdWVyeVNlbGVjdG9yKFwic2RmLWRhdGUtcGlja2VyXCIpO2lmKHApcmV0dXJue3R5cGU6by5GSUVMRF9UWVBFLkRBVEUsbGFiZWw6bixyZXF1aXJlZDppLGRlc2NyaXB0aW9uOlwiTU0vREQvWVlZWVwiLCRpbnB1dDpwLCRsYWJlbDp0fHxlfTtsZXQgbT1lLnF1ZXJ5U2VsZWN0b3IoXCJzZGYtaW5wdXRcIik7aWYobSl7bGV0IHI9XyhcImlucHV0LCB0ZXh0YXJlYVwiLG0pO3JldHVybiByP3IuaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIil8fHIgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50JiZyLnJlYWRPbmx5P251bGw6e3R5cGU6by5GSUVMRF9UWVBFLlRFWFQsbGFiZWw6bixyZXF1aXJlZDppLCRpbnB1dDpyLCRsYWJlbDp0fHxlfTp7dHlwZTpvLkZJRUxEX1RZUEUuVEVYVCxsYWJlbDpuLHJlcXVpcmVkOmksJGlucHV0Om0sJGxhYmVsOnR8fGV9fXJldHVybiBudWxsfWZ1bmN0aW9uIHYoZSx0KXtpZihlLmhhc0F0dHJpYnV0ZShcInJlcXVpcmVkXCIpfHxcInRydWVcIj09PWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1yZXF1aXJlZFwiKXx8dCYmKHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVxdWlyZWRcIil8fHQucXVlcnlTZWxlY3RvcihcIi5yZXF1aXJlZCwgLnJlcXVpcmVkLWluZGljYXRvciwgW2NsYXNzKj0ncmVxdWlyZWQnXVwiKXx8dC50ZXh0Q29udGVudD8uaW5jbHVkZXMoXCIqXCIpKSlyZXR1cm4hMDtsZXQgcj1lLmNsb3Nlc3QoXCJkaXYsIGZpZWxkc2V0XCIpO3JldHVybiEhKHImJihyLmNsYXNzTGlzdC5jb250YWlucyhcInJlcXVpcmVkXCIpfHxyLnF1ZXJ5U2VsZWN0b3IoXCIucmVxdWlyZWQsIC5yZXF1aXJlZC1pbmRpY2F0b3JcIikpKX1mdW5jdGlvbiB3KGUpe3JldHVybiBlLnJlcGxhY2UoL1xccysvZyxcIiBcIikucmVwbGFjZSgvXFwqL2csXCJcIikucmVwbGFjZSgvXFx1MDBhMC9nLFwiIFwiKS50cmltKCl9ZnVuY3Rpb24gUyhlKXtsZXQgdD1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuIHQuaW5jbHVkZXMoXCJtYXkgd2UgY29udGFjdFwiKT9bXCJZZXNcIixcIk5vXCJdOnQuaW5jbHVkZXMoXCJjdXJyZW50IG9yIHByZXZpb3VzIGVtcGxveWVyXCIpP1tcIkN1cnJlbnQgZW1wbG95ZXJcIixcIlByZXZpb3VzIGVtcGxveWVyXCJdOlwiY3VycmVudCBlbXBsb3llclwiPT09dHx8dC5pbmNsdWRlcyhcImN1cnJlbnQgZW1wbG95ZXJcIik/W1wiWWVzXCIsXCJOb1wiXTpbXX1mdW5jdGlvbiBFKGUpe2xldCB0PWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKT8udHJpbSgpO2lmKHQpcmV0dXJuIHQ7bGV0IHI9ZS50ZXh0Q29udGVudD8ucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCk7aWYocilyZXR1cm4gcjtsZXQgbj1lLmdldEF0dHJpYnV0ZShcImFyaWEtZGVzY3JpYmVkYnlcIil8fFwiXCIsbz1uLnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO2ZvcihsZXQgZSBvZiBvKXtsZXQgdD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChlKSxyPXQ/LnRleHRDb250ZW50Py5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKTtpZihyKXJldHVybiByfWxldCBpPWUuc2hhZG93Um9vdD8udGV4dENvbnRlbnQ/LnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpfHxcIlwiO3JldHVybiBpfHxlLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpPy50cmltKCl8fFwiXCJ9ZnVuY3Rpb24geChlKXtsZXQgdD1lLnRyaW0oKTtyZXR1cm4vXlxcZHs0LH0kLy50ZXN0KHQpfHwvXnFfXFxkKyQvaS50ZXN0KHQpfWZ1bmN0aW9uIEMoZSx0KXtsZXQgcj1lLm1hcChlPT5lLnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpKS5maWx0ZXIoQm9vbGVhbik7cmV0dXJuIDI9PT10JiYoMD09PXIubGVuZ3RofHxyLmV2ZXJ5KHgpKT9bXCJZZXNcIixcIk5vXCJdOnJ9ZnVuY3Rpb24gQShlKXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoXCIuc2RmLWZvcm0tY29udHJvbC13cmFwcGVyLS1sYWJlbFwiKSxyPXcodD8udGV4dENvbnRlbnQ/LnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpfHxlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fFwiXCIpO2lmKCFyKXJldHVybiBudWxsO2xldCBuPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwic2RmLXJhZGlvLWJ1dHRvblwiKSk7aWYoMD09PW4ubGVuZ3RoKXJldHVybiBudWxsO2xldCBpPUMobi5tYXAoZT0+RShlKSksbi5sZW5ndGgpLGE9XCJ0cnVlXCI9PT1lLmdldEF0dHJpYnV0ZShcImFyaWEtcmVxdWlyZWRcIil8fGUuaGFzQXR0cmlidXRlKFwicmVxdWlyZWRcIil8fCEhZS5xdWVyeVNlbGVjdG9yKCdbaWQkPVwiZXJyb3JNZXNzYWdlXCJdOm5vdCg6ZW1wdHkpLCBbaWQqPVwiZXJyb3JNZXNzYWdlXCJdOm5vdCg6ZW1wdHkpJyk7cmV0dXJue3R5cGU6by5GSUVMRF9UWVBFLlJBRElPR1JPVVAsbGFiZWw6cixyZXF1aXJlZDphLG9wdGlvbnM6aS5sZW5ndGg/aTp2b2lkIDAsJHJhZGlvczpuLCRyYWRpb1BhcmVudDplLCRpbnB1dDpuWzBdLCRsYWJlbDp0fHxlfX1mdW5jdGlvbiBrKGUpe3JldHVybi9ecV9cXGQrL2kudGVzdChlKXx8L15cXGR7NCx9JC8udGVzdChlKXx8Lyg/Ol58Wy1fXSkoZXJyb3J8ZXJyb3JtZXNzYWdlfHJlcXVpcmVkKSg/OiR8Wy1fXSkvaS50ZXN0KGUpfWZ1bmN0aW9uIFQoZSl7cmV0dXJuISFlJiYhL14oZXJyb3J8cmVxdWlyZWR8XFwqKSQvaS50ZXN0KGUpfWZ1bmN0aW9uIEYoZSl7Zm9yKGxldCB0IG9mIGUpe2lmKGsodCkpY29udGludWU7bGV0IGU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodCk/LnRleHRDb250ZW50Py5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKXx8XCJcIjtpZihUKGUpKXJldHVybiBlfXJldHVyblwiXCJ9ZnVuY3Rpb24gSShlKXtsZXQgdD1lLmNsb3Nlc3QoXCIuc2VjdGlvbi1yb3dcIik/LnBhcmVudEVsZW1lbnQscj10Py5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO2Zvcig7cjspe2xldCBlPXIucXVlcnlTZWxlY3RvcihcIi5zZGYtZm9ybS1jb250cm9sLXdyYXBwZXItLWxhYmVsXCIpPy50ZXh0Q29udGVudD8ucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCk7aWYoZSlyZXR1cm4gZTtsZXQgdD1yLnRleHRDb250ZW50Py5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKTtpZih0KXJldHVybiB0O3I9ci5wcmV2aW91c0VsZW1lbnRTaWJsaW5nfXJldHVyblwiXCJ9ZnVuY3Rpb24gaihlLHQ9e30pe2xldCByPV8oXCIuc2RmLWZvcm0tY29udHJvbC13cmFwcGVyLS1sYWJlbCwgbGFiZWwsIFtwYXJ0PSdsYWJlbCddXCIsZSk/LnRleHRDb250ZW50Py5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKTtpZihyKXJldHVybiByO2xldCBuPWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKT8udHJpbSgpO2lmKG4pcmV0dXJuIG47bGV0IG89ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIik/LnRyaW0oKS5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKXx8W10saT1GKG8pO2lmKGkpcmV0dXJuIGk7bGV0IGE9dC5mYWxsYmFja1RvUHJldmlvdXNEZXRhaWxzP0koZSk6XCJcIjtyZXR1cm4gYT9gJHthfSBEZXRhaWxzYDpcIlwifWZ1bmN0aW9uIEQoZSl7bGV0IHQ9dyhqKGUse2ZhbGxiYWNrVG9QcmV2aW91c0RldGFpbHM6ITB9KSk7aWYoIXQpcmV0dXJuIG51bGw7bGV0IHI9XyhcInRleHRhcmVhLCBpbnB1dFwiLGUpLG49cnx8ZTtyZXR1cm4gbiBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQmJihcImhpZGRlblwiPT09bi50eXBlfHxuLmRpc2FibGVkfHxuLnJlYWRPbmx5KT9udWxsOnt0eXBlOm8uRklFTERfVFlQRS5URVhULGxhYmVsOnQscmVxdWlyZWQ6XCJ0cnVlXCI9PT1lLmdldEF0dHJpYnV0ZShcImFyaWEtcmVxdWlyZWRcIil8fGUuaGFzQXR0cmlidXRlKFwicmVxdWlyZWRcIiksJGlucHV0Om4sJGxhYmVsOmV9fWFzeW5jIGZ1bmN0aW9uIFAoZSl7bGV0IHQ9aihlKTtpZighdCl7bGV0IHI9ZS5jbG9zZXN0KFwiLnNlY3Rpb24tcm93XCIpO2lmKHIpe2xldCBlPXIucHJldmlvdXNFbGVtZW50U2libGluZztpZihlfHwoZT1yLnBhcmVudEVsZW1lbnQ/LnByZXZpb3VzRWxlbWVudFNpYmxpbmcpLGU/LnF1ZXJ5U2VsZWN0b3I/LihcInNkZi1yYWRpby1ncm91cCwgc2RmLXNlbGVjdC1zaW1wbGUsIHNkZi1jaGVja2JveCwgc2RmLWlucHV0XCIpJiYoZT1udWxsKSxlKXtsZXQgcj1lLnRleHRDb250ZW50Py5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKXx8XCJcIjtyLmxlbmd0aD4yJiYhL14oZXJyb3J8cmVxdWlyZWR8XFwqKSQvaS50ZXN0KHIpJiYodD1yKX1pZighdCl7bGV0IGU9ci5xdWVyeVNlbGVjdG9yKFwibGFiZWwsIC5mb3JtLWNvbnRyb2wtbGFiZWwsIFtjbGFzcyo9J2xhYmVsJ11cIik7dD1lPy50ZXh0Q29udGVudD8ucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCl8fFwiXCJ9fX1pZighdCl7bGV0IHI9ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpPy50cmltKCk7ciYmKHQ9cil9bGV0IHI9dyh0KTtpZighcilyZXR1cm4gbnVsbDtsZXQgbj1mKFsuLi5BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcInNkZi1zZWxlY3QtaXRlbVwiKSksLi4uZChlKV0pOzA9PT1uLmxlbmd0aCYmKG49YXdhaXQgYyhlKSk7bGV0IGk9ZS5jbG9zZXN0KFwiLnNlY3Rpb24tcm93XCIpLGE9XCJ0cnVlXCI9PT1lLmdldEF0dHJpYnV0ZShcImFyaWEtcmVxdWlyZWRcIil8fGUuaGFzQXR0cmlidXRlKFwicmVxdWlyZWRcIil8fCEhaT8ucXVlcnlTZWxlY3RvcihcIi5yZXF1aXJlZCwgW2NsYXNzKj0ncmVxdWlyZWQnXVwiKTtyZXR1cm57dHlwZTpvLkZJRUxEX1RZUEUuU0VMRUNULGxhYmVsOnIscmVxdWlyZWQ6YSxvcHRpb25zOm4ubGVuZ3RoP246UyhyKSwkaW5wdXQ6ZSwkbGFiZWw6aXx8ZX19ZnVuY3Rpb24gXyhlLHQ9ZG9jdW1lbnQpe2xldCByPXQsbj0oSFRNTEVsZW1lbnQsci5xdWVyeVNlbGVjdG9yKGUpKTtpZihuKXJldHVybiBuO2xldCBvPVtdLGk9ZT0+e2lmKGUgaW5zdGFuY2VvZiBTaGFkb3dSb290KXtvLnB1c2goLi4uQXJyYXkuZnJvbShlLmNoaWxkcmVuKSk7cmV0dXJufWUuc2hhZG93Um9vdCYmby5wdXNoKGUuc2hhZG93Um9vdCksby5wdXNoKC4uLkFycmF5LmZyb20oZS5jaGlsZHJlbikpfTtmb3IociBpbnN0YW5jZW9mIERvY3VtZW50P28ucHVzaCguLi5BcnJheS5mcm9tKHIuZG9jdW1lbnRFbGVtZW50LmNoaWxkcmVuKSk6ciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50PyhyLnNoYWRvd1Jvb3QmJm8ucHVzaChyLnNoYWRvd1Jvb3QpLG8ucHVzaCguLi5BcnJheS5mcm9tKHIuY2hpbGRyZW4pKSk6ciBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QmJm8ucHVzaCguLi5BcnJheS5mcm9tKHIuY2hpbGRyZW4pKTtvLmxlbmd0aDspe2xldCB0PW8uc2hpZnQoKSxyPShTaGFkb3dSb290LHQucXVlcnlTZWxlY3RvcihlKSk7aWYocilyZXR1cm4gcjtpKHQpfXJldHVybiBudWxsfWZ1bmN0aW9uIEwoZSx0PWRvY3VtZW50KXtsZXQgcj1bXSxuPXQ7ci5wdXNoKC4uLkFycmF5LmZyb20obi5xdWVyeVNlbGVjdG9yQWxsKGUpKSk7bGV0IG89W10saT1lPT57aWYoZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Qpe28ucHVzaCguLi5BcnJheS5mcm9tKGUuY2hpbGRyZW4pKTtyZXR1cm59ZS5zaGFkb3dSb290JiZvLnB1c2goZS5zaGFkb3dSb290KSxvLnB1c2goLi4uQXJyYXkuZnJvbShlLmNoaWxkcmVuKSl9O2ZvcihuIGluc3RhbmNlb2YgRG9jdW1lbnQ/by5wdXNoKC4uLkFycmF5LmZyb20obi5kb2N1bWVudEVsZW1lbnQuY2hpbGRyZW4pKTpuIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ/KG4uc2hhZG93Um9vdCYmby5wdXNoKG4uc2hhZG93Um9vdCksby5wdXNoKC4uLkFycmF5LmZyb20obi5jaGlsZHJlbikpKTpuIGluc3RhbmNlb2YgU2hhZG93Um9vdCYmby5wdXNoKC4uLkFycmF5LmZyb20obi5jaGlsZHJlbikpO28ubGVuZ3RoOyl7bGV0IHQ9by5zaGlmdCgpO3IucHVzaCguLi5BcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbChlKSkpLGkodCl9cmV0dXJuIEFycmF5LmZyb20obmV3IFNldChyKSl9YXN5bmMgZnVuY3Rpb24gUigpe2xldCBlPXt9LHQ9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYWRwLWZvcm0tZ3JvdXBbZGF0YS1uYW1lXVwiKSk7Zm9yKGxldCByIG9mIHQpe2xldCB0PXIucXVlcnlTZWxlY3RvcihcImxhYmVsLmZvcm0tY29udHJvbC1sYWJlbFwiKSxuPXQ/LnF1ZXJ5U2VsZWN0b3IoXCIudmFsaWQtbGFiZWxcIik/LnRleHRDb250ZW50Py5yZXBsYWNlKC9cXHMrL2csXCIgXCIpPy50cmltKCl8fHQ/LnRleHRDb250ZW50Py5yZXBsYWNlKC9cXHMrL2csXCIgXCIpPy50cmltKCl8fFwiXCIsbz13KG4pO2lmKCFvKWNvbnRpbnVlO2xldCBhPXIucXVlcnlTZWxlY3RvcihcInNkZi1jaGVja2JveFwiKTtpZihhKXtlW29dPVwidHJ1ZVwiPT09YS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNoZWNrZWRcIik/XCJZZXNcIjpcIk5vXCI7Y29udGludWV9bGV0IGw9ci5xdWVyeVNlbGVjdG9yKFwic2RmLXJhZGlvLWdyb3VwXCIpO2lmKGwpe2xldCB0PUFycmF5LmZyb20obC5xdWVyeVNlbGVjdG9yQWxsKFwic2RmLXJhZGlvLWJ1dHRvblwiKSkscj10LmZpbmQoZT0+XCJ0cnVlXCI9PT1lLmdldEF0dHJpYnV0ZShcImFyaWEtY2hlY2tlZFwiKSk7ZVtvXT1yP0Uocik6XCJcIjtjb250aW51ZX1sZXQgcz1yLnF1ZXJ5U2VsZWN0b3IoXCJzZGYtc2VsZWN0LXNpbXBsZVwiKTtpZihzKXtsZXQgdD1zLnF1ZXJ5U2VsZWN0b3IoJ3NkZi1zZWxlY3QtaXRlbVthcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXScpfHxzLnF1ZXJ5U2VsZWN0b3IoXCJzZGYtc2VsZWN0LWl0ZW1bc2VsZWN0ZWRdXCIpO2Vbb109dD8udGV4dENvbnRlbnQ/LnJlcGxhY2UoL1xccysvZyxcIiBcIik/LnRyaW0oKXx8cy52YWx1ZXx8XCJcIjtjb250aW51ZX1sZXQgdT1yLnF1ZXJ5U2VsZWN0b3IoXCJzZGYtcGhvbmUtbnVtYmVyLWlucHV0XCIpO2lmKHUpe2xldCB0PV8oJ2lucHV0W3R5cGU9XCJ0ZWxcIl0sIGlucHV0Jyx1KTtpZihyLmdldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiKT8udG9Mb3dlckNhc2UoKT09PVwicGhvbmVcIil7bGV0IHQ9cCh1KSxyPXQ/Xygnc2RmLXNlbGVjdC1pdGVtW2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJdLCBzZGYtc2VsZWN0LWl0ZW1bc2VsZWN0ZWRdJyx0KTpudWxsO2VbaS5QSE9ORV9DT1VOVFJZX0NPREVfTEFCRUxdPXI/LmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIik/LnRyaW0oKXx8cj8udGV4dENvbnRlbnQ/LnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpfHxyPy5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKT8udHJpbSgpfHxcIlwifWVbb109dD8udmFsdWV8fFwiXCI7Y29udGludWV9bGV0IGM9ci5xdWVyeVNlbGVjdG9yKFwiaW5wdXQsIHRleHRhcmVhXCIpO2lmKGMpe2Vbb109Yy52YWx1ZXx8XCJcIjtjb250aW51ZX1sZXQgZD1yLnF1ZXJ5U2VsZWN0b3IoXCJzZGYtaW5wdXRcIik7aWYoZCl7bGV0IHQ9XyhcImlucHV0LCB0ZXh0YXJlYVwiLGQpO2Vbb109dD8udmFsdWV8fFwiXCI7Y29udGludWV9bGV0IGY9ci5xdWVyeVNlbGVjdG9yKFwic2RmLXRleHRhcmVhXCIpO2lmKGYpe2xldCB0PV8oXCJ0ZXh0YXJlYSwgaW5wdXRcIixmKTtlW29dPXQ/LnZhbHVlfHxcIlwiO2NvbnRpbnVlfWxldCBtPXIucXVlcnlTZWxlY3RvcihcInNkZi1kYXRlLXBpY2tlclwiKTtpZihtKXtsZXQgdD1fKFwiaW5wdXRcIixtKTtlW29dPXQ/LnZhbHVlfHxtLnZhbHVlfHxcIlwiO2NvbnRpbnVlfX1sZXQgcj1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NkZi1yYWRpby1ncm91cFtyb2xlPVwicmFkaW9ncm91cFwiXScpKTtmb3IobGV0IHQgb2Ygcil7aWYodC5jbG9zZXN0KFwiYWRwLWZvcm0tZ3JvdXBbZGF0YS1uYW1lXVwiKSljb250aW51ZTtsZXQgcj10LnF1ZXJ5U2VsZWN0b3IoXCIuc2RmLWZvcm0tY29udHJvbC13cmFwcGVyLS1sYWJlbFwiKSxuPXcocj8udGV4dENvbnRlbnQ/LnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpfHx0LmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fFwiXCIpO2lmKCFuKWNvbnRpbnVlO2xldCBvPUFycmF5LmZyb20odC5xdWVyeVNlbGVjdG9yQWxsKFwic2RmLXJhZGlvLWJ1dHRvblwiKSksaT1vLmZpbmQoZT0+XCJ0cnVlXCI9PT1lLmdldEF0dHJpYnV0ZShcImFyaWEtY2hlY2tlZFwiKSksYT1DKG8ubWFwKGU9PkUoZSkpLG8ubGVuZ3RoKSxsPWk/by5pbmRleE9mKGkpOi0xO2Vbbl09bD49MD9hW2xdfHxFKGkpOlwiXCJ9bGV0IG49QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3ByZXNjcmVlbmluZ0Zvcm0gc2RmLXRleHRhcmVhLCAjcHJlc2NyZWVuaW5nRm9ybSBzZGYtaW5wdXQsICNwcmVzY3JlZW5pbmdGb3JtIHRleHRhcmVhLCAjcHJlc2NyZWVuaW5nRm9ybSBpbnB1dDpub3QoW3R5cGU9J2hpZGRlbiddKVwiKSk7Zm9yKGxldCB0IG9mIG4pe2lmKHQuY2xvc2VzdChcImFkcC1mb3JtLWdyb3VwW2RhdGEtbmFtZV1cIil8fHQuY2xvc2VzdChcInNkZi1yYWRpby1ncm91cCwgc2RmLXNlbGVjdC1zaW1wbGVcIikpY29udGludWU7bGV0IHI9dyhqKHQse2ZhbGxiYWNrVG9QcmV2aW91c0RldGFpbHM6ITB9KSk7aWYoIXIpY29udGludWU7bGV0IG49XyhcInRleHRhcmVhLCBpbnB1dFwiLHQpO2Vbcl09bj8udmFsdWV8fHQudmFsdWV8fFwiXCJ9cmV0dXJuIGV9XHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJydWxlcy5mNjU2NzViNS5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);