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
})({"lcTnz":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\myworkday\\rules.js",
    "bundleId": "2f592a87ddb65150",
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
var j = z(require("6eacb3c154bb00e3"));
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

},{"6eacb3c154bb00e3":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"jOM1v":[function(require,module,exports) {
/**
 * Parcel module id: 1H2ID
 * Resolved path: src/contents/sites/myworkday/rules.js
 * Dependencies:
 *   ../education-item-trace -> j7UGI  =>  src/contents/sites/education-item-trace.js
 *   ./fiber-options -> kgcUj  =>  src/contents/sites/myworkday/fiber-options.js
 *   ./form-loss -> dkfwU  =>  src/contents/sites/myworkday/form-loss.js
 *   ./snapshot-alignment -> 25NpF  =>  src/contents/sites/myworkday/snapshot-alignment.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/checkbox-label -> 2KQwH  =>  src/contents/methods/checkbox-label.js
 *   ~contents/methods/observer -> eTzUx  =>  src/contents/methods/observer.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 *   ~utils/fieldLabel -> 1RmGw  =>  src/utils/fieldLabel.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "WORKDAY_FORCED_CHECKBOX_ATTRIBUTE", ()=>b), n.export(r, "isWorkdaySkillsFieldLabel", ()=>P), n.export(r, "getWorkdayRegularRules", ()=>_), n.export(r, "findWorkdaySkillsProgressLabel", ()=>L), n.export(r, "findWorkdayCountryProgressLabels", ()=>M), n.export(r, "findFilledMyExperienceProgressLabels", ()=>U), n.export(r, "findFilledWorkdaySelfIdentifyCheckboxProgressLabels", ()=>H), n.export(r, "findUnfilledWorkdaySelfIdentifyCheckboxProgressLabels", ()=>Y), n.export(r, "disambiguateWorkdayDuplicateRuleLabels", ()=>X), n.export(r, "getWorkdayRuleSectionHeading", ()=>ee), n.export(r, "getWorkdayDateDescription", ()=>er), n.export(r, "getWorkdaySalaryFieldType", ()=>en), n.export(r, "isWorkdaySelfIdentifyLabel", ()=>eo), n.export(r, "isWorkdayInputSelected", ()=>ea), n.export(r, "isWorkdaySelfIdentifyInputSelected", ()=>el), n.export(r, "getWorkdayInputLabelText", ()=>es), n.export(r, "getWorkdayEducationApiBase", ()=>eD), n.export(r, "employmentGroupXpath", ()=>eX), n.export(r, "educationGroupXpath", ()=>e0), n.export(r, "getRules", ()=>tQ), n.export(r, "getEduRules", ()=>t0), n.export(r, "getExpRules", ()=>t2), n.export(r, "getSubmitButtonText", ()=>t1), n.export(r, "getGroupSnapshot", ()=>t4), n.export(r, "getFormSnapshot", ()=>t5);
var o = e("~contents/methods/checkbox-label"), i = e("~contents/methods/observer"), a = e("~core/enums"), l = e("~core/xpath"), s = e("~utils/delay"), u = e("~utils/fieldLabel"), c = e("../education-item-trace"), d = e("./fiber-options"), f = e("./form-loss"), p = e("./snapshot-alignment");
let m = new Set([
    "Education",
    "Schools Attended",
    "Schooling",
    "Academic Experience",
    "Education History",
    "Education (Optional)",
    "Education/Schooling"
]), h = new Set([
    "Add a Job",
    "Relevant Experience",
    "Work Experience",
    "Employment Experience",
    "Employment History",
    "Work History",
    "Work History (Optional)",
    "Work or Other Experience",
    "Where have you worked?",
    "Professional Experience",
    "Employment Detail",
    "Job History/Work Experience"
]), g = [
    "Add-a-Job-",
    "Education-",
    "Schools-Attended-",
    "Work-Experience-",
    "Employment-Experience-",
    "Professional-Experience-",
    "Relevant-Experience-",
    "Work-or-Other-Experience-",
    "Where-have-you-worked?-",
    "Employment-History-",
    "Employment-Detail-",
    "Work-History-"
], b = "data-jr-workday-forced-checkbox", y = 2e3, v = 100, w = "/values/educations/degrees", S = "/values/phone/countryCodes", E = "/values/names/countries", x = "countryphonecode", C = 40, A = 12, k = 800, T = 40, F = '[data-automation-id="activeListContainer"][role="listbox"]', I = '[data-automation-id="menuItem"][role="option"], [role="option"]', j = 240, D = new Map;
function P(e1) {
    let t = (0, u.normalizeFieldLabel)(e1, {
        loose: !0
    });
    return "skills" === t || "add skills" === t || "type to add skills" === t;
}
_c = P;
function _(e1) {
    return e1.filter((e1)=>!P(e1.label));
}
function L(e1) {
    return e1.fieldRequiredStatus.find((e1)=>P(e1.label))?.label ?? null;
}
_c1 = L;
function R(e1) {
    let t = (0, u.normalizeFieldLabel)(e1, {
        loose: !0
    }), r1 = t.replace(/\s/g, "");
    return "country phone code" === t || "phone country code" === t || "country region phone code" === t || r1.includes("countryphonecode") || r1.includes("phonecountrycode") || r1.includes("countryregionphonecode") || r1.includes("country") && r1.includes("phone") && r1.includes("code");
}
_c2 = R;
function O(e1) {
    if (R(e1)) return !1;
    let t = (0, u.normalizeFieldLabel)(e1, {
        loose: !0
    }), r1 = t.replace(/\s/g, "");
    return "country" === t || "country territory" === t || "country region" === t || "countryterritory" === r1 || "countryregion" === r1;
}
_c3 = O;
function M(e1) {
    return e1.fieldRequiredStatus.filter((e1)=>O(e1.label)).map((e1)=>e1.label);
}
_c4 = M;
function N(e1, t) {
    let r1 = (0, u.normalizeFieldLabel)(t);
    return e1.fieldRequiredStatus.find((e1)=>u.normalizeFieldLabel(e1.label) === r1)?.label ?? null;
}
_c5 = N;
function $(e1, t) {
    let r1 = (0, u.normalizeFieldLabel)(t);
    return e1.filledFields.some((e1)=>(0, u.normalizeFieldLabel)(e1) === r1);
}
function B(e1) {
    if (Array.isArray(e1)) return e1.some(B);
    if (null == e1) return !1;
    let t = String(e1).trim().toLowerCase();
    return ![
        "",
        "select one",
        "[]",
        "/",
        "//"
    ].includes(t);
}
_c6 = B;
function q(e1) {
    return !!Array.isArray(e1) && e1.some((e1)=>!!e1 && "object" == typeof e1 && Object.entries(e1).some(([e1, t])=>e1 !== p.MYWORKDAY_EDUCATION_SNAPSHOT_INDEX_KEY && e1 !== c.EDUCATION_TRACE_KEY && B(t)));
}
function U(e1, t) {
    let r1 = [], n = [
        {
            label: "Employment",
            groups: t.employment
        },
        {
            label: "Education",
            groups: t.education
        }
    ];
    for (let { label: t, groups: o } of n){
        if (!q(o)) continue;
        let n = N(e1, t);
        !n || $(e1, n) || r1.push(n);
    }
    return r1;
}
_c7 = U;
function H(e1, t = document) {
    let r1 = z(e1);
    return !r1 || $(e1, r1) ? [] : V(t) ? [
        r1
    ] : [];
}
_c8 = H;
function Y(e1, t = document) {
    let r1 = z(e1);
    return r1 && $(e1, r1) ? V(t) ? [] : [
        r1
    ] : [];
}
_c9 = Y;
function z(e1) {
    return e1.fieldRequiredStatus.find((e1)=>eo(e1.label))?.label ?? null;
}
function V(e1 = document) {
    let t = Array.from(e1.querySelectorAll('input[type="checkbox"][id*="disabilityStatus"], input[type="checkbox"][name*="disabilityStatus"]'));
    return t.some(el);
}
_c10 = V;
function W(e1 = "") {
    return e1.replace(/[\u200b-\u200d\ufeff]/g, "").replace(/\u00a0/g, " ").toLowerCase().replace(/\s+/g, " ").trim();
}
_c11 = W;
function G(e1 = "") {
    return e1.replace(/[\u200b-\u200d\ufeff]/g, "").replace(/\*/g, "").trim();
}
_c12 = G;
function K(e1, t) {
    let r1 = /\bname\s*$/i, n = t.replace(/\s+name\s*$/i, "").trim();
    return n && r1.test(t) && r1.test(e1) ? `${n} ${e1}` : `${t}: ${e1}`;
}
_c13 = K;
function X(e1) {
    let t = new Map;
    for (let { label: r1 } of e1)t.set(r1, (t.get(r1) || 0) + 1);
    let r1 = e1.map(({ label: e1, sectionHeading: r1 })=>r1 && (t.get(e1) || 0) > 1 ? K(e1, r1) : e1), n = new Map;
    for (let e1 of r1)n.set(e1, (n.get(e1) || 0) + 1);
    return e1.map((e1, t)=>{
        let o = r1[t];
        return 1 === (n.get(o) || 0) ? {
            ...e1,
            label: o
        } : e1;
    });
}
_c14 = X;
function J(e1 = "") {
    return "degree" === W(G(e1));
}
_c15 = J;
function Q(e1) {
    return (e1 || "").trim().replace(/\s*\*$/, "");
}
_c16 = Q;
function Z(e1) {
    return e1?.tagName !== "H4" ? "" : Q(e1.textContent);
}
_c17 = Z;
function ee(e1) {
    let t = t_(e1), r1 = e1;
    for(; r1;){
        for (let e1 of Array.from(r1.children || [])){
            let t = Z(e1);
            if (t) return t;
        }
        let e1 = r1.previousElementSibling;
        for(; e1;){
            let t = Z(e1);
            if (t) return t;
            e1 = e1.previousElementSibling;
        }
        if (r1 === t) break;
        r1 = r1.parentElement;
    }
    return "";
}
function et(e1) {
    let t = Q(e1);
    return m.has(t) || W(t).includes("education");
}
function er(e1) {
    let t = ()=>{
        let t = !!e1.querySelector('[data-automation-id="dateSectionMonth-input"]'), r1 = !!e1.querySelector('[data-automation-id="dateSectionDay-input"]'), n = !!e1.querySelector('[data-automation-id="dateSectionYear-input"]');
        return t && r1 && n ? "MM/DD/YYYY" : t && n ? "MM/YYYY" : n ? "YYYY" : "";
    }, r1 = t();
    if (r1) return r1;
    let n = (e1)=>{
        let t = e1.trim().toUpperCase();
        return "MM/DD/YYYY" === t || "MM/YYYY" === t || "YYYY" === t ? t : "";
    }, o = (e1 = "")=>{
        let t = e1.trim(), r1 = t.match(/^current value is\s+(.+?)\s*$/i);
        return n(r1?.[1] || "");
    }, i = o(e1.previousElementSibling?.textContent || "");
    if (i) return i;
    let a = ("function" == typeof e1.closest ? e1.closest('[data-automation-id^="formField-"]') : null) || e1.parentElement, l = a?.querySelectorAll?.('[aria-hidden="true"]') || [];
    for (let e1 of Array.from(l)){
        let t = o(e1.textContent || "");
        if (t) return t;
    }
    return "MM/DD/YYYY";
}
function en(e1) {
    return /\b(salary|compensation|pay)\b/i.test(e1) ? /\b(range|minimum and maximum|min and max)\b/i.test(e1) ? a.FIELD_TYPE.TEXT : a.FIELD_TYPE.NUMBER : a.FIELD_TYPE.TEXT;
}
function eo(e1 = "") {
    let t = W(G(e1)).replace(/[:\uff1a]\s*$/, "").replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ").trim();
    return "please check one of the boxes below" === t;
}
function ei(e1) {
    let t = [
        e1.parentElement,
        e1.parentElement?.parentElement,
        "function" == typeof e1.closest ? e1.closest("label") : null
    ];
    return t.some((e1)=>e1?.querySelector?.('svg[class*="wd-icon-check"], .wd-icon-check-small, .wd-icon-check'));
}
function ea(e1) {
    return e1.getAttribute?.(b) !== "true" && (e1.checked || e1.getAttribute?.("aria-checked") === "true" || e1.parentElement?.getAttribute?.("aria-checked") === "true");
}
function el(e1) {
    return e1.getAttribute?.(b) !== "true" && (e1.getAttribute?.("aria-checked") === "true" || e1.parentElement?.getAttribute?.("aria-checked") === "true" || ei(e1));
}
function es(e1, t) {
    return t?.textContent?.trim() || t?.innerText?.trim() || (0, o.getRadioCheckText)(e1);
}
function eu(e1) {
    return (0, l.getFirstOrderedNodeSafe)('.//button[@aria-haspopup="listbox"][@type="button"]', e1);
}
function ec(e1) {
    let t = e1?.replace(/\s+/g, " ").trim() || "";
    return "select one" === t.toLowerCase() ? "" : t;
}
function ed(e1) {
    return e1.map(ec).filter(Boolean);
}
function ef(e1) {
    return e1?.querySelectorAll ? Array.from(e1.querySelectorAll('li:not(#select-one), [role="option"]:not(#select-one)')) : [];
}
function ep(e1) {
    let t = e1?.getBoundingClientRect?.();
    return t && Number.isFinite(t.top) && Number.isFinite(t.bottom) && Number.isFinite(t.left) && Number.isFinite(t.right) ? t : null;
}
function em(e1, t) {
    let r1 = ep(e1);
    if (!r1) return null;
    let n = Math.max(0, Math.min(t.right, r1.right) - Math.max(t.left, r1.left));
    if (n <= 0) return null;
    let o = Math.min(Math.abs(r1.top - t.bottom), Math.abs(t.top - r1.bottom)), i = Math.abs(r1.left - t.left);
    return o + i / 10;
}
function eh() {
    let e1 = Array.from(document.querySelectorAll?.('ul[role="listbox"][tabindex="-1"]') || []);
    return e1.length > 0 ? e1 : (0, l.getOrderedNodes)('//ul[@role="listbox"][@tabindex="-1"]');
}
function eg(e1) {
    let t = e1.getAttribute?.("aria-controls");
    if (!t || "function" != typeof document.getElementById) return null;
    let r1 = document.getElementById(t);
    return r1?.getAttribute?.("role") !== "listbox" ? null : r1;
}
function eb(e1) {
    let t = eg(e1);
    if (ef(t).length > 0) return t;
    let r1 = eh().filter((e1)=>ef(e1).length > 0);
    if (0 === r1.length) return null;
    let n = ep(e1);
    if (!n) return r1[0];
    let o = r1.map((e1)=>({
            listbox: e1,
            distance: em(e1, n)
        })).filter((e1)=>null !== e1.distance && e1.distance <= j).sort((e1, t)=>e1.distance - t.distance);
    return o[0]?.listbox ?? null;
}
function ey() {
    return Array.from(document.querySelectorAll?.(F) || []);
}
function ev(e1) {
    return /\+\d{1,4}\b/.test(e1);
}
function ew() {
    return ey().flatMap((e1)=>e1?.querySelectorAll ? Array.from(e1.querySelectorAll(I)) : []).map((e1)=>ec(e1.textContent)).filter(ev).filter(Boolean);
}
function eS(e1) {
    if ("function" == typeof e1.click) {
        e1.click();
        return;
    }
    "function" == typeof e1.dispatchEvent && e1.dispatchEvent(new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0,
        view: "undefined" != typeof window ? window : null
    }));
}
function eE(e1, t) {
    let r1 = e1.querySelector?.('[data-automation-id="promptIcon"], [data-automation-id="promptSearchButton"]');
    if (r1) {
        eS(r1);
        return;
    }
    t?.focus?.(), t?.click?.();
}
function ex(e1) {
    if ("function" != typeof KeyboardEvent) return;
    let t = new KeyboardEvent("keydown", {
        bubbles: !0,
        cancelable: !0,
        key: "Escape",
        code: "Escape"
    });
    e1?.dispatchEvent?.(t), document.dispatchEvent?.(t);
}
async function eC() {
    let e1 = new Set, t = ()=>{
        for (let t of ew())e1.add(t);
    };
    await (0, i.waitForCondition)(()=>(t(), e1.size > 0), {
        timeout: k,
        interval: 50,
        observeTarget: document.body
    });
    for(let e1 = 0; e1 < T; e1++){
        t();
        let e1 = ey().filter((e1)=>(e1.scrollHeight || 0) > (e1.clientHeight || 0));
        if (0 === e1.length) break;
        let r1 = !1;
        for (let t of e1){
            let e1 = Math.max(0, (t.scrollHeight || 0) - (t.clientHeight || 0)), n = t.scrollTop || 0;
            e1 <= 0 || n >= e1 - 2 || (t.scrollTop = Math.min(e1, n + Math.max(t.clientHeight || 0, 240)), t.dispatchEvent?.(new Event("scroll", {
                bubbles: !0
            })), (t.scrollTop || 0) === n || (r1 = !0));
        }
        if (!r1) break;
        await (0, s.delay)(80);
    }
    return t(), Array.from(e1);
}
async function eA(e1, t) {
    eE(e1, t);
    let r1 = await eC();
    return ex(t), r1;
}
async function ek({ label: e1, labelElement: t, required: r1, listboxSelectElement: n, deadlineMs: o }) {
    let i = (e1)=>o ? Math.max(0, Math.min(e1, o - Date.now())) : e1, u = ()=>ef(eb(n)), c = ()=>(0, l.getOrderedNodes)('//ul[@role="listbox"][@tabindex="-1"]/li[@id!="select-one"]'), f = ()=>{
        let e1 = u();
        return e1.length > 0 ? e1 : c();
    }, p = ()=>f(), m = ()=>p().length > 0, h = ()=>{
        n.dispatchEvent(new MouseEvent("click", {
            bubbles: !0,
            cancelable: !0,
            view: window
        }));
    }, g = async ()=>{
        let e1 = p();
        if (e1.length > 0) return e1;
        let t = i(600);
        return t <= 0 ? [] : await new Promise((r1)=>{
            let n = new MutationObserver(()=>{
                (e1 = p()).length > 0 && (n.disconnect(), r1(e1));
            });
            if (n.observe(document.body, {
                childList: !0,
                subtree: !0
            }), (e1 = p()).length > 0) {
                n.disconnect(), r1(e1);
                return;
            }
            setTimeout(()=>{
                n.disconnect(), r1([]);
            }, t);
        });
    }, b = ed(await (0, d.getWorkdaySelectOptionsViaFiber)(n));
    if (b.length > 0) return {
        label: e1,
        required: r1,
        $label: t,
        $input: n,
        type: a.FIELD_TYPE.LISTBOX,
        options: b
    };
    let y = (0, l.getOrderedNodes)('//div[@visibility="closing"]/ul[@role="listbox"][@tabindex="-1"]/li[@id!="select-one"]');
    if (y.length > 0) {
        let e1 = (0, l.getOrderedNodes)('//button[@aria-expanded="true" and @aria-haspopup="listbox"]');
        for (let t of e1)t.click(), await (0, s.delay)(20), t.click(), await new Promise((e1)=>{
            let t = new MutationObserver(()=>{
                let r1 = (0, l.getOrderedNodes)('//div[@visibility="closing"]/ul[@role="listbox"][@tabindex="-1"]/li[@id!="select-one"]');
                0 === r1.length && (t.disconnect(), e1());
            });
            t.observe(document.body, {
                childList: !0,
                subtree: !0
            }), setTimeout(()=>{
                t.disconnect(), e1();
            }, 600);
        });
    }
    h();
    let v = await g();
    0 === v.length && (n.click?.(), v = await g());
    let w = {
        label: e1,
        required: r1,
        $label: t,
        $input: n,
        type: a.FIELD_TYPE.LISTBOX,
        options: ed(v.map((e1)=>e1.textContent))
    };
    return h(), await new Promise((e1)=>{
        let t = new MutationObserver(()=>{
            m() || (t.disconnect(), e1());
        });
        t.observe(document.body, {
            childList: !0,
            subtree: !0
        }), setTimeout(()=>{
            t.disconnect(), e1();
        }, 600);
    }), w;
}
async function eT({ section: e1, label: t, labelElement: r1, required: n }) {
    let o = Date.now() + y, i = Math.max(1, Math.ceil(y / v));
    for(let a = 0; a < i && Date.now() <= o; a++){
        let i = eu(e1);
        if (i) {
            let e1 = await ek({
                label: t,
                labelElement: r1,
                required: n,
                listboxSelectElement: i,
                deadlineMs: o
            });
            if (e1.options.length > 0) return e1;
        }
        let a = o - Date.now();
        if (a <= 0) break;
        await (0, s.delay)(Math.min(v, a));
    }
    return console.warn("[MyWorkday] Degree listbox did not become ready before timeout; continuing with fallback rule."), null;
}
function eF() {
    let e1 = new Set, t = /(?:https?:\/\/[^"'\s]+)?\/wday\/calypso\/cxs\/jobapplication\/[^/"'?\s]+/g, r1 = (r1 = "")=>{
        let n = r1.match(t) || [];
        for (let t of n)try {
            e1.add(new URL(t, window.location.origin).toString());
        } catch (e1) {
            console.warn("[myworkday] Failed to parse API base candidate:", e1);
        }
    }, n = "function" == typeof performance?.getEntriesByType ? performance.getEntriesByType("resource") : [];
    for (let e1 of n)r1(e1.name);
    let o = Array.from(document.querySelectorAll?.("[src], [href], [action]") || []);
    for (let e1 of o)r1(e1.getAttribute("src") || e1.getAttribute("href") || e1.getAttribute("action") || "");
    for (let e1 of Array.from(document.scripts || []))r1(e1.src || ""), r1(e1.textContent || "");
    return r1(document.documentElement?.innerHTML || ""), Array.from(e1);
}
function eI() {
    let e1 = window.location?.pathname || "", t = e1.split("/").filter(Boolean), r1 = t.indexOf("recruiting"), n = t[r1 + 1], o = t[r1 + 2];
    return !(r1 < 0) && n && o && /^[A-Za-z0-9_-]+$/.test(n) ? new URL(`/wday/calypso/cxs/jobapplication/${n}`, window.location.origin).toString() : null;
}
function ej() {
    let e1 = window.location?.host || "", t = e1.match(/^([A-Za-z0-9-]+)\.wd\d+\.myworkdayjobs\.com$/i), r1 = t?.[1];
    return r1 ? new URL(`/wday/calypso/cxs/jobapplication/${r1}`, window.location.origin).toString() : null;
}
function eD() {
    if ("undefined" == typeof window) return null;
    let e1 = eF();
    return e1[0] || eI() || ej();
}
function eP(e1 = "") {
    let t = W(G(e1));
    return "field of study" === t;
}
function e_(e1) {
    return Array.isArray(e1.options) ? e1.options : [];
}
function eL(e1) {
    if (null == e1) return "";
    let t = "string" == typeof e1 ? e1 : "object" == typeof e1 ? String(e1.descriptor ?? e1.label ?? e1.name ?? e1.value ?? "") : String(e1), r1 = t.replace(/\s+/g, " ").trim();
    return "select one" === r1.toLowerCase() ? "" : r1;
}
function eR(e1) {
    let t = Array.isArray(e1) ? e1 : Array.isArray(e1?.data) ? e1.data : Array.isArray(e1?.results) ? e1.results : Array.isArray(e1?.items) ? e1.items : [];
    return Array.from(new Set(t.map(eL).filter(Boolean)));
}
function eO(e1) {
    if (!e1 || "object" != typeof e1) return null;
    let t = String(e1.id ?? "").trim(), r1 = eL(e1);
    return t && r1 ? {
        id: t,
        descriptor: r1
    } : null;
}
function eM(e1) {
    let t = Array.isArray(e1) ? e1 : Array.isArray(e1?.data) ? e1.data : Array.isArray(e1?.results) ? e1.results : Array.isArray(e1?.items) ? e1.items : [], r1 = new Set, n = [];
    for (let e1 of t){
        let t = eO(e1);
        !t || r1.has(t.id) || (r1.add(t.id), n.push(t));
    }
    return n;
}
async function eN(e1) {
    if ("function" != typeof fetch) return null;
    try {
        let t = await fetch(e1, {
            credentials: "include",
            headers: {
                accept: "application/json"
            }
        });
        if (!t.ok) return console.warn(`[MyWorkday] Failed to fetch Workday options: ${t.status} ${t.statusText} ${e1}`), null;
        return await t.json();
    } catch (e1) {
        return console.warn("[MyWorkday] Failed to fetch Workday options:", e1), null;
    }
}
function e$(e1) {
    if (!e1) return null;
    try {
        let t = new URL(e1, window.location.origin), r1 = t.pathname.match(/\/wday\/calypso\/cxs\/jobapplication\/([^/]+)/);
        return r1?.[1] ?? null;
    } catch (e1) {
        return console.warn("[MyWorkday] Failed to parse Workday API tenant:", e1), null;
    }
}
function eB() {
    let e1 = String(window?.workday?.tenant ?? "").trim();
    if (e1) return e1;
    let t = window.location?.host || "";
    return t.match(/^([A-Za-z0-9-]+)\.wd\d+\.myworkdayjobs\.com$/i)?.[1] ?? null;
}
function eq(e1) {
    if ("undefined" == typeof window) return null;
    let t = e$(e1) || eB();
    if (!t || !/^[A-Za-z0-9_-]+$/.test(t)) return null;
    try {
        let r1 = e1 ? new URL(e1, window.location.origin).origin : window.location.origin;
        return new URL(`/wday/calypso/cxs/common/${t}`, r1).toString();
    } catch (e1) {
        return console.warn("[MyWorkday] Failed to build Workday common API base:", e1), null;
    }
}
async function eU(e1) {
    if (!e1 || "function" != typeof fetch) return [];
    let t = `${e1.replace(/\/$/, "")}${w}`;
    return eR(await eN(t));
}
async function eH(e1) {
    if (!e1 || "function" != typeof fetch) return [];
    let t = `${e1.replace(/\/$/, "")}${E}`;
    return eM(await eN(t));
}
async function eY(e1) {
    if (!e1 || "function" != typeof fetch) return [];
    let t = `${e1.replace(/\/$/, "")}${S}`;
    return eR(await eN(t)).filter(ev);
}
async function ez(e1, t) {
    let r1 = `${e1.replace(/\/$/, "")}/countries/${encodeURIComponent(t.id)}/${x}`;
    return eR(await eN(r1)).filter(ev);
}
async function eV() {
    let e1 = eD(), t = eq(e1);
    if (!e1 || !t) return [];
    let r1 = `${e1.replace(/\/$/, "")}|${t.replace(/\/$/, "")}`, n = D.get(r1);
    if (n) return n;
    let o = (async ()=>{
        let r1 = await eY(e1);
        if (r1.length > 0) return r1;
        let n = await eH(e1);
        if (0 === n.length) return [];
        if (n.length > C) return console.info(`[MyWorkday] Skipping Country Phone Code API hydration for ${n.length} countries.`), [];
        let o = Array.from({
            length: n.length
        }, ()=>[]), i = 0, a = Math.min(A, n.length), l = Array.from({
            length: a
        }, async ()=>{
            for(; i < n.length;){
                let e1 = i++;
                try {
                    o[e1] = await ez(t, n[e1]);
                } catch (e1) {
                    console.warn("[MyWorkday] Failed to fetch Workday country phone code option:", e1);
                }
            }
        });
        await Promise.all(l);
        let s = new Set, u = [];
        for (let e1 of o.flat())s.has(e1) || (s.add(e1), u.push(e1));
        return u;
    })().catch((e1)=>(D.delete(r1), console.warn("[MyWorkday] Failed to fetch Workday country phone code options:", e1), []));
    return D.set(r1, o), o;
}
async function eW(e1, t) {
    let r1 = await eV();
    return r1.length > 0 ? (console.info(`[MyWorkday] Fetched ${r1.length} Country Phone Code options from Workday API.`), r1) : await eA(e1, t);
}
async function eG(e1) {
    let t = e1.filter((e1)=>J(e1.label));
    if (0 === t.length || t.every((e1)=>e_(e1).length > 0)) return;
    let r1 = await eU(eD());
    if (0 !== r1.length) for (let e1 of t)0 === e_(e1).length && (e1.options = r1);
}
function eK(e1) {
    return e1.filter((e1)=>!eP(e1.label) && (!J(e1.label) || e_(e1).length > 0)).map((e1)=>({
            type: J(e1.label) ? a.FIELD_TYPE.LISTBOX : e1.type,
            label: e1.label,
            ...e1.options?.length ? {
                options: e1.options
            } : {},
            ...e1.description ? {
                description: e1.description
            } : {}
        }));
}
let eX = `
  (
    (
      starts-with(@aria-labelledby, "Work-Experience-")
      or starts-with(@aria-labelledby, "Add-a-Job-")
      or starts-with(@aria-labelledby, 'Employment-Experience-')
      or starts-with(@aria-labelledby, 'Professional-Experience-')
      or starts-with(@aria-labelledby, 'Relevant-Experience-')
      or starts-with(@aria-labelledby, 'Work-or-Other-Experience-')
      or starts-with(@aria-labelledby, 'Where-have-you-worked?-')
      or starts-with(@aria-labelledby, 'Employment-History-')
      or starts-with(@aria-labelledby, 'Work-History-')
    )
    and substring(@aria-labelledby, string-length(@aria-labelledby) - string-length("-panel") +1) = "-panel"
  )
  or starts-with(@data-automation-id, 'workExperience-')
`, eJ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", eQ = "abcdefghijklmnopqrstuvwxyz", eZ = `translate(@aria-labelledby, "${eJ}", "${eQ}")`, e0 = `
  (
    (
      starts-with(${eZ}, "education-")
      or starts-with(${eZ}, "schools-attended-")
      or contains(${eZ}, "-education-")
    )
    and substring(${eZ}, string-length(${eZ}) - string-length("-panel") +1) = "-panel"
  )
  or starts-with(@data-automation-id, 'education-')
`, e2 = "//h3 | //h4", e1 = new Set([
    "H3",
    "H4"
]), e3 = 'div[data-automation-id^="formField-"]', e4 = '[data-automation-id="applyFlowPage"]', e5 = '[data-automation-id="applyFlowMyExpPage"]', e6 = `${e4}, ${e5}`, e8 = 'fieldset, div[role="radiogroup"], div[role="group"], div[data-automation-id*="question"], div[data-automation-id*="Question"]', e9 = 'input:not([type="hidden"]), textarea, select, button[aria-haspopup="listbox"]', e7 = '[data-automation-id$="Section"], [aria-labelledby$="-section"]', te = `//*[@data-automation-id="websitesSection"
  or @aria-labelledby="Websites-section"
  or @aria-labelledby="Website-section"]`, tt = new Set([
    "Website",
    "Websites",
    "Website (Optional)",
    "Websites (Optional)"
]), tr = 2e3, tn = 150, to = 4;
function ti() {
    let e1 = (0, l.getFirstOrderedNodeSafe)('//main//h2[not(@data-automation-id="jobTitleHeading")] | //div[@id="mainContent"]//h2[not(@data-automation-id="jobTitleHeading")] | //main//h3 | //div[@id="mainContent"]//h3 | //div[@data-automation-id="applyFlowPage"]//h3 | //div[@data-automation-id="applyFlowMyExpPage"]//h3');
    return e1?.textContent?.trim();
}
function ta(e1) {
    let t = e1, r1 = "function" != typeof e1.getClientRects || e1.getClientRects().length > 0;
    return !!(t.offsetWidth || t.offsetHeight || r1);
}
function tl() {
    return document.querySelector?.('[data-automation-id="progressBar"] [data-automation-id="progressBarActiveStep"]')?.textContent?.replace(/\s+/g, " ").trim();
}
function ts(e1) {
    return e1?.replace(/\s+/g, " ").trim().toLowerCase() || "";
}
function tu() {
    return tl()?.replace(/^current\s+step\s+\d+\s+of\s+\d+\s*/i, "").trim();
}
function tc(e1) {
    let t = Array.from(document.querySelectorAll?.(e1) || []);
    if (t.length > 0) return t;
    let r1 = document.querySelector?.(e1);
    return r1 ? [
        r1
    ] : [];
}
function td(e1) {
    let t = tp([
        ...tc(e4),
        ...tc(e5)
    ]), r1 = tc("#mainContent, main"), n = tp([
        ...t,
        ...r1
    ]);
    if (0 === n.length) return document;
    let o = n.filter(ta), i = o.length > 0 ? o : n, a = [
        tu(),
        e1
    ].map(ts).filter(Boolean);
    if (a.length > 0) {
        let e1 = i.find((e1)=>e1.getAttribute?.("data-automation-id") === "applyFlowPage" && a.some((t)=>ts(e1.textContent).includes(t)));
        if (e1) return e1;
        let t = i.find((e1)=>a.some((t)=>ts(e1.textContent).includes(t)));
        if (t) return t;
    }
    return i[0] || document;
}
function tf(e1) {
    let t = e1.getAttribute("data-automation-id")?.toLowerCase() || "", r1 = e1.textContent?.toLowerCase() || "";
    return t.includes("accepttermsandagreement") || t.includes("agreement") || r1.includes("i agree to and accept the terms");
}
function tp(e1) {
    let t = new Set, r1 = [];
    for (let n of e1)t.has(n) || (t.add(n), r1.push(n));
    return r1;
}
function tm(e1, t) {
    return t.some((t)=>t !== e1 && "function" == typeof t.contains && t.contains(e1));
}
function th(e1, t) {
    return t.some((t)=>t !== e1 && "function" == typeof e1.contains && e1.contains(t));
}
function tg(e1) {
    let t = e1.getAttribute?.("data-automation-id") || "", r1 = e1.getAttribute?.("aria-labelledby") || "", n = r1.toLowerCase(), o = n.endsWith("-panel"), i = o && (n.startsWith("education-") || n.startsWith("schools-attended-") || n.includes("-education-"));
    return t.startsWith("workExperience-") || t.startsWith("education-") || i || o && g.some((e1)=>r1.startsWith(e1));
}
function tb(e1) {
    let t = e1;
    for(; t;){
        if (tg(t)) return !0;
        t = t.parentElement;
    }
    return !1;
}
function ty(e1) {
    return e1?.replace(/\s+/g, " ").trim().toLowerCase() || "";
}
function tv(e1) {
    let t = ty(e1.getAttribute?.("data-automation-id")), r1 = ty(e1.getAttribute?.("aria-label")), n = ty(e1.textContent);
    return "add-button" === t || "add" === t || "add another" === t || "add" === n || "add another" === n || /^add( another)? (website|work experience|education|schooling|schools attended)$/.test(r1);
}
function tw(e1) {
    return Array.from(e1.querySelectorAll?.("button") || []).some(tv);
}
function tS() {
    return tc(e5).some(ta);
}
function tE(e1) {
    return e1.closest?.(e5) || null;
}
function tx(e1) {
    let t = e1.closest?.(e7) || null;
    if (t && t !== e1 && tw(t)) return t;
    let r1 = tE(e1), n = e1.parentElement;
    for(; n && n !== document.body && n !== r1;){
        if (tw(n)) return n;
        n = n.parentElement;
    }
    return tw(e1) ? e1 : null;
}
function tC(e1) {
    let t = e1.getAttribute?.("data-automation-id") || "", r1 = e1.getAttribute?.("aria-labelledby") || "";
    return "websitesSection" === t || "Websites-section" === r1 || "Website-section" === r1;
}
function tA(e1) {
    let t = e1.textContent?.trim().replace(/\s*\*\s*$/, "").trim();
    return !!t && tt.has(t);
}
function tk() {
    let e3 = (0, l.getOrderedNodesSafe)(te), t = (0, l.getOrderedNodesSafe)(e2).filter(tA);
    for (let r1 of t){
        let t = r1.nextElementSibling;
        for(; t && !e1.has(t.tagName);)e3.push(t), t = t.nextElementSibling;
    }
    return tp(e3);
}
function tT(e1, t) {
    let r1 = e1.closest?.(e7) || null;
    return r1 && tC(r1) ? r1 : t.find((t)=>t === e1 || "function" == typeof t.contains && t.contains(e1)) || null;
}
function tF(e1) {
    return tS() && !!tx(e1);
}
function tI(e1) {
    let t = `${e1 || ""} ${tu() || ""}`.toLowerCase().trim();
    return t.includes("my experience") || tS();
}
function tj() {
    let { sections: e1 } = tz("My Experience"), t = tk(), r1 = !1;
    return e1.filter((e1)=>!tb(e1) && (tT(e1, t) ? !r1 && (r1 = !0, !0) : !tF(e1)));
}
async function tD() {
    let e1 = [];
    for (let t of tj()){
        let r1 = await tZ(t);
        r1 && e1.push(r1);
    }
    return e1;
}
function tP() {
    let e1 = {};
    for (let t of tj()){
        let r1 = t3(t);
        r1 && (e1[r1.label] = r1.value);
    }
    return e1;
}
function t_(e1) {
    return e1.closest?.(e6) || null;
}
function tL(e1, t) {
    return e1 !== document && "function" == typeof e1.contains && e1.contains(t);
}
function tR(e1, t) {
    if (t === document) return !0;
    let r1 = t_(e1);
    return !r1 || r1 === t || tL(t, r1);
}
function tO(e1, t) {
    return e1.filter((e1)=>ta(e1) && tR(e1, t));
}
function tM(e1) {
    return !!e1.querySelector?.('input:not([type="hidden"]), textarea, select, button[aria-haspopup="listbox"]');
}
function tN(e1) {
    return !!e1.querySelector?.("label, legend");
}
function t$(e1, t) {
    return e1.querySelectorAll?.(t).length || 0;
}
function tB(e1) {
    let t = e1.getAttribute?.("data-automation-id")?.toLowerCase() || "", r1 = e1.getAttribute?.("role")?.toLowerCase() || "", n = e1.tagName?.toLowerCase() || "", o = e1.textContent?.replace(/\s+/g, " ").trim() || "", i = t$(e1, e9), a = t$(e1, "label, legend");
    return !!(e1 === document.body || "div" === n && !t && !r1 && o.toLowerCase().includes("skip to main content")) || "div" === n && !t && !r1 && (o.length > 2e3 || i > 12 || a > 24);
}
function tq(e1, t, r1) {
    let n = e1.parentElement;
    for(; n && n !== document.body && !(n === r1 || t.includes(n) || tm(n, t));){
        if (tM(n) && tN(n) && !tB(n)) return n;
        n = n.parentElement;
    }
    return null;
}
function tU(e1, t) {
    return Array.from("function" == typeof e1.querySelectorAll ? e1.querySelectorAll(t) : document.querySelectorAll(t));
}
function tH(e1, t) {
    let r1 = Array.from(tU(t, e8)), n = tU(t, e9).map((r1)=>tq(r1, e1, t)).filter(Boolean), o = tp([
        ...r1,
        ...n
    ]);
    return o.filter((r1)=>!(r1 === t || e1.includes(r1) || r1.closest?.(e3) || tm(r1, e1) || th(r1, e1) || !tM(r1) || !tN(r1) || !ta(r1) || tB(r1)));
}
function tY(e1, t) {
    let r1 = `${e1 || ""} ${tl() || ""}`.toLowerCase().trim();
    return r1.includes("voluntary") || r1.includes("disclosure") || t.some(tf);
}
function tz(e1) {
    let t = td(e1), r1 = tO((0, l.getOrderedNodesSafe)('.//div[starts-with(@data-automation-id, "formField-")]', t), t), n = tY(e1, r1), o = t === document || r1.length > 0 && !n ? [] : tO((0, l.getOrderedNodesSafe)('.//div[starts-with(@data-automation-id, "formField-")]', document), t), i = tp([
        ...o,
        ...r1
    ]), a = tY(e1, i);
    if (!a) return {
        sections: i,
        additionalSections: [],
        shouldCollectAdditionalSections: a
    };
    let s = tH(i, t);
    return {
        sections: tp([
            ...i,
            ...s
        ]),
        additionalSections: s,
        shouldCollectAdditionalSections: a
    };
}
function tV(e1) {
    let t = (0, l.getOrderedNodesSafe)(".//label | .//legend", e1)[0];
    return G(t?.textContent || "");
}
function tW(e1) {
    return e1.some((e1)=>{
        let t = (0, u.normalizeFieldLabel)(tV(e1), {
            loose: !0
        });
        return "country" === t || "country / territory" === t;
    });
}
function tG(e1) {
    let t = (0, u.normalizeFieldLabel)(tV(e1), {
        loose: !0
    });
    return "country" === t || "country / territory" === t;
}
function tK(e1) {
    return e1.length > 0 && e1.every(tG);
}
function tX(e1) {
    return e1.map((e1)=>{
        let t = e1.getAttribute?.("data-automation-id") || "", r1 = tV(e1), n = t$(e1, e9);
        return `${t}:${r1}:${n}`;
    }).join("|");
}
async function tJ(e1) {
    let t = "", r1 = 0;
    await (0, i.waitForCondition)(()=>{
        let { sections: n } = tz(e1), o = tX(n);
        return !o || tK(n) ? (t = "", r1 = 0, !1) : (o === t ? r1 += 1 : (t = o, r1 = 1), r1 >= to);
    }, {
        timeout: tr,
        interval: tn,
        observeTarget: document.body
    });
}
async function tQ(e1 = 0) {
    let t = [], r1 = ti();
    if (tI(r1)) return t.push(...await t2()), await (0, s.delay)(200), t.push(...await t0()), await (0, s.delay)(200), t.push(...await tD()), t;
    {
        let n = tz(r1);
        n.sections.length > 0 && tW(n.sections) && await tJ(r1);
        let { sections: o, additionalSections: a, shouldCollectAdditionalSections: l } = tz(r1);
        if (l && e1 < 3 && 0 === a.length && o.some(tf)) {
            let t = 2e3 * Math.pow(1.5, e1), n = o.length, a = await (0, i.waitForCondition)(()=>{
                let e1 = tz(r1);
                return e1.additionalSections.length > 0 || e1.sections.length > n;
            }, {
                timeout: t,
                interval: 200,
                observeTarget: document.body
            });
            if (a) return await tQ(e1 + 1);
        }
        if (0 === o.length) {
            if (e1 < 3) {
                let t = 2e3 * Math.pow(1.5, e1);
                return await (0, i.waitForCondition)(()=>tz(r1).sections.length > 0, {
                    timeout: t,
                    interval: 200,
                    observeTarget: document.body
                }), await tQ(e1 + 1);
            }
            throw Error(f.WORKDAY_NO_FORM_FIELDS_ERROR_MESSAGE);
        }
        let s = [];
        for (let e1 of o){
            let t = await tZ(e1);
            t && s.push({
                section: e1,
                rule: t
            });
        }
        let u = X(s.map(({ section: e1, rule: t })=>({
                rule: t,
                label: t.label,
                sectionHeading: ee(e1)
            })));
        for (let { rule: e1, label: r1, sectionHeading: n } of u)r1 !== e1.label ? (console.debug("[MyWorkday][autofill-debug] duplicate-rule-label-resolved", {
            rawLabel: e1.label,
            sectionHeading: n,
            resolvedLabel: r1
        }), t.push({
            ...e1,
            label: r1
        })) : t.push(e1);
        if (0 === t.length && e1 < 3) {
            let t = 2e3 * Math.pow(1.5, e1);
            return await (0, i.waitForCondition)(()=>tz(r1).sections.length > 0, {
                timeout: t,
                interval: 200,
                observeTarget: document.body
            }), await tQ(e1 + 1);
        }
        return t;
    }
}
async function tZ(e1) {
    let t = (0, l.getOrderedNodes)(".//label | .//legend", e1);
    if (0 === t.length) return console.warn("labelElements not found", e1), null;
    let r1 = t[0], n = r1.textContent?.trim() || "", o = G(n), i = (0, l.getFirstOrderedNodeSafe)(".//abbr", e1), s = (0, l.getFirstOrderedNodeSafe)('.//*[normalize-space(.)="*"]', e1), u = (0, l.getFirstOrderedNodeSafe)('.//*[@aria-required="true" or @required]', e1), c = i?.textContent?.trim() === "*" || s?.textContent?.trim() === "*" || n.includes("*") || eo(o) || !!u;
    if (J(o)) {
        let t = await eT({
            section: e1,
            label: o,
            labelElement: r1,
            required: c
        });
        if (t) return t;
    }
    let d = (0, l.getFirstOrderedNodeSafe)('.//div[@data-automation-id="multiSelectContainer"]', e1);
    if (d) {
        let e1 = (0, l.getFirstOrderedNodeSafe)(".//input[@placeholder='Search']", d), t = R(o) ? await eW(d, e1) : [], n = {
            label: o,
            $label: r1,
            required: c,
            type: a.FIELD_TYPE.MULTI_SELECT,
            $input: e1,
            options: t
        };
        return n;
    }
    let f = eu(e1);
    if (f) return await ek({
        label: o,
        labelElement: r1,
        required: c,
        listboxSelectElement: f
    });
    let p = (0, l.getFirstOrderedNode)('.//input[@placeholder="Search"]', e1);
    if (p) {
        let e1 = {
            label: o,
            $label: r1,
            required: c,
            type: a.FIELD_TYPE.SEARCH,
            $input: p
        };
        return e1;
    }
    let m = (0, l.getFirstOrderedNode)(".//input | .//textarea", e1);
    if (m) {
        let t = m.getAttribute("type");
        if ("acceptTermsAndAgreements" === m.name || m.attributes.getNamedItem("data-automation-id")?.value === "agreementCheckbox") {
            let e1 = {
                label: o,
                $label: r1,
                required: c,
                type: a.FIELD_TYPE.CHECKBOX,
                $checkboxs: [
                    m
                ],
                options: [
                    "true"
                ]
            };
            return e1;
        }
        if ("TEXTAREA" === m.tagName || "INPUT" === m.tagName && "text" === t) {
            let e1 = {
                label: o,
                $label: r1,
                required: c,
                type: en(o),
                $input: m
            };
            return e1;
        }
        if ("INPUT" === m.tagName && ("checkbox" === t || "radio" === t)) {
            let n = (0, l.getFirstOrderedNode)('./ancestor::fieldset[1] | ./ancestor::div[starts-with(@data-automation-id, "formField-")]', m), i = (0, l.getFirstOrderedNode)('.//div[@role="rowgroup"]', e1), s = (0, l.getOrderedNodes)(".//label", n);
            i && (s = (0, l.getOrderedNodesSafe)(".//label", i));
            let u = [], d = [];
            for (let e1 of s){
                let t = (0, l.getFirstOrderedNodeSafe)("..//input[@type='checkbox' or @type='radio']", e1);
                t && (u.push(e1), d.push(t));
            }
            let f = new Set, p = [], h = [];
            for(let e1 = 0; e1 < d.length; e1++)f.has(d[e1]) || (f.add(d[e1]), p.push(d[e1]), h.push(u[e1]));
            if ("checkbox" === t) {
                let e1 = {
                    label: o,
                    $label: r1,
                    required: c,
                    type: a.FIELD_TYPE.CHECKBOX,
                    $checkboxs: 0 == p.length ? [
                        m
                    ] : p,
                    options: h.map((e1)=>e1.textContent?.trim())
                };
                return e1;
            }
            if ("radio" === t) {
                let e1 = {
                    label: o,
                    $label: r1,
                    required: c,
                    type: a.FIELD_TYPE.CHECKBOX,
                    $checkboxs: p,
                    options: h.map((e1)=>e1.textContent?.trim())
                };
                return e1;
            }
        }
        let n = e1.querySelector('[data-automation-id="dateInputWrapper"]');
        if (n) {
            let e1 = {
                label: o,
                $label: r1,
                required: c,
                type: a.FIELD_TYPE.DATE,
                description: er(n),
                $input: n
            };
            return e1;
        }
    }
}
async function t0() {
    let e3 = (0, l.getOrderedNodes)(e2), t = [], r1 = async (e1)=>{
        let t = [];
        for (let r1 of e1){
            let e1 = await tZ(r1);
            e1 && t.push(e1);
        }
        return 0 === t.length ? null : (await eG(t), {
            label: "Education",
            required: !0,
            type: a.FIELD_TYPE.EDUCATION,
            children: t,
            options: eK(t)
        });
    };
    for (let n of e3)if (et(n.textContent)) {
        let e2 = (0, l.getOrderedNodes)("following-sibling::*", n);
        for (let n of e2){
            if (e1.has(n.tagName)) break;
            let e2 = Array.from(new Set((0, l.getOrderedNodesSafe)(`.//descendant-or-self::div[${e0}]`, n))), o = e2.length > 0 ? e2 : [
                n
            ];
            for (let e1 of o){
                let n = [];
                n.push(...(0, l.getOrderedNodesSafe)('.//descendant-or-self::div[starts-with(@data-automation-id, "formField-")]', e1));
                let o = await r1(n);
                o && t.push(o);
            }
        }
    }
    return t;
}
async function t2() {
    let e3 = (0, l.getOrderedNodes)(e2), t = [];
    for (let r1 of e3)if (h.has(r1.textContent?.trim().replace(/\s*\*$/, ""))) {
        let e2 = (0, l.getOrderedNodes)("following-sibling::*", r1);
        for (let r1 of e2){
            if (e1.has(r1.tagName)) break;
            let e2 = [];
            e2.push(...(0, l.getOrderedNodesSafe)('.//descendant-or-self::div[starts-with(@data-automation-id, "formField-")]', r1));
            let n = [];
            for (let t of e2){
                let e1 = await tZ(t);
                e1 && n.push(e1);
            }
            if (0 === n.length) continue;
            let o = {
                label: "Employment",
                required: !0,
                type: a.FIELD_TYPE.EMPLOYMENT,
                children: n,
                options: [
                    ...n.map((e1)=>({
                            type: e1.type,
                            label: e1.label,
                            ...e1.options?.length ? {
                                options: e1.options
                            } : {},
                            ...e1.description ? {
                                description: e1.description
                            } : {}
                        }))
                ]
            };
            t.push(o);
        }
    }
    return t;
}
function t1() {
    let e1 = (0, l.getFirstOrderedNode)('.//input[@type="submit" and @value="Submit Profile"]'), t = e1 ? e1.textContent?.trim() : "";
    return t;
}
function t3(e1, t = !1) {
    let r1 = (0, l.getOrderedNodes)(".//label | .//legend", e1);
    if (0 === r1.length) return console.warn("labelElements not found", e1), null;
    let n = r1[0], o = n.textContent?.trim().replace("*", "");
    if (P(o)) return null;
    let i = (0, l.getFirstOrderedNodeSafe)('.//div[@data-automation-id="multiSelectContainer"]', e1);
    if (i) {
        let r1 = (0, l.getOrderedNodesSafe)('.//li[@data-automation-id="menuItem"]', e1).map((e1)=>e1.textContent?.trim());
        return {
            label: o,
            value: t && r1.length <= 1 ? r1[0] ?? "" : JSON.stringify(r1)
        };
    }
    let a = (0, l.getFirstOrderedNodeSafe)('.//button[@aria-haspopup="listbox"][@type="button"]', e1);
    if (a) return {
        label: o,
        value: a.textContent?.trim()
    };
    let s = (0, l.getFirstOrderedNode)('.//input[@placeholder="Search"]', e1);
    if (s) return {
        label: o,
        value: l.getFirstOrderedNodeSafe('.//li[@data-automation-id="menuItem"]')?.textContent?.trim()
    };
    let u = (0, l.getFirstOrderedNode)(".//input | .//textarea", e1);
    if (u?.name == "acceptTermsAndAgreements") return {
        label: o,
        value: u.checked ? "true" : "false"
    };
    if (u) {
        let t = u.getAttribute("type");
        if ("TEXTAREA" === u.tagName || "INPUT" === u.tagName && ("text" === t || "number" === t)) return {
            label: o,
            value: u.value
        };
        if ("INPUT" === u.tagName && ("checkbox" === t || "radio" === t)) {
            let r1 = (0, l.getFirstOrderedNode)('./ancestor::fieldset[1] | ./ancestor::div[starts-with(@data-automation-id, "formField-")]', u), n = (0, l.getFirstOrderedNode)('.//div[@role="rowgroup"]', e1), i = (0, l.getOrderedNodes)(".//label", r1);
            n && (i = (0, l.getOrderedNodesSafe)(".//label", n));
            let a = [], s = [];
            for (let e1 of i){
                let t = (0, l.getFirstOrderedNodeSafe)("..//input[@type='checkbox' or @type='radio']", e1);
                t && (a.push(e1), s.push(t));
            }
            let c = new Set, d = [], f = [];
            for(let e1 = 0; e1 < s.length; e1++)c.has(s[e1]) || (c.add(s[e1]), d.push(s[e1]), f.push(a[e1]));
            if ("checkbox" === t) {
                if (0 === i.length) return {
                    label: o,
                    value: u.checked ? "true" : "false"
                };
                let e1 = eo(o) ? el : ea, t = f.map((t, r1)=>{
                    let n = d[r1];
                    return n && e1(n) ? es(n, t) : null;
                }).filter((e1)=>!!e1);
                return {
                    label: o,
                    value: JSON.stringify(t)
                };
            }
            if ("radio" === t) {
                let e1 = eo(o) ? el : ea, t = d.map((e1, t)=>({
                        input: e1,
                        option: f[t]
                    })).find(({ input: t })=>e1(t));
                return {
                    label: o,
                    value: t ? es(t.input, t.option) : ""
                };
            }
        }
        let r1 = e1.querySelector('[data-automation-id="dateInputWrapper"]');
        if (r1) {
            let e1 = (0, l.getOrderedNodes)(".//input", r1);
            return {
                label: o,
                value: e1.map((e1)=>e1.value).join("/")
            };
        }
    }
}
function t4(e3, t, r1 = {}, n) {
    let o = (0, l.getOrderedNodes)(e2), i = [];
    for (let a of o){
        let o = n?.(a.textContent) ?? e3.has(Q(a.textContent));
        if (o) {
            let e2 = 0, n = (0, l.getOrderedNodes)("following-sibling::*", a);
            for (let o of n){
                if (e1.has(o.tagName)) break;
                let n = [];
                n.push(...(0, l.getOrderedNodesSafe)(`.//descendant-or-self::div[${t}]`, o));
                for(let t = 0; t < n.length; t++){
                    let o = n[t], a = {}, s = e2++, u = o.getAttribute(p.MYWORKDAY_EDUCATION_SNAPSHOT_INDEX_ATTRIBUTE);
                    r1.markEducationRows && (u = String(s), o.setAttribute(p.MYWORKDAY_EDUCATION_SNAPSHOT_INDEX_ATTRIBUTE, u));
                    let d = (0, c.getEducationTraceForRow)(o, {
                        attributes: p.MYWORKDAY_EDUCATION_TRACE_ATTRIBUTES,
                        includeEducationTrace: r1.includeEducationTrace,
                        markEducationRows: r1.markEducationRows,
                        runId: r1.educationTraceRunId,
                        snapshotIndex: s
                    }), f = [];
                    for (let e1 of (f.push(...(0, l.getOrderedNodesSafe)('.//descendant-or-self::div[starts-with(@data-automation-id, "formField-")]', o)), f)){
                        let t = t3(e1, !0);
                        t && (a[t.label] = t.value);
                    }
                    if (r1.includeEducationSnapshotIndex && u) {
                        let e1 = Number(u);
                        Number.isInteger(e1) && e1 >= 0 && (a[p.MYWORKDAY_EDUCATION_SNAPSHOT_INDEX_KEY] = e1);
                    }
                    d && (a[c.EDUCATION_TRACE_KEY] = d), i.push(a);
                }
            }
        }
    }
    return i;
}
function t5(e1 = {}) {
    let t = {}, r1 = ti();
    if ("My Experience" == r1) t.education = t4(m, e0, e1, et), t.employment = t4(h, eX), Object.assign(t, tP());
    else {
        let e1 = [];
        for (let r1 of (0 === (e1 = (0, l.getOrderedNodes)('(//h2)[1]/..//div[starts-with(@data-automation-id, "formField-")]', document)).length && (e1 = (0, l.getOrderedNodes)('//div[starts-with(@data-automation-id, "formField-")]', document)), e1)){
            let e1 = t3(r1);
            e1 && (t[e1.label] = e1.value);
        }
    }
    return t;
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17;
$RefreshReg$(_c, "P");
$RefreshReg$(_c1, "L");
$RefreshReg$(_c2, "R");
$RefreshReg$(_c3, "O");
$RefreshReg$(_c4, "M");
$RefreshReg$(_c5, "N");
$RefreshReg$(_c6, "B");
$RefreshReg$(_c7, "U");
$RefreshReg$(_c8, "H");
$RefreshReg$(_c9, "Y");
$RefreshReg$(_c10, "V");
$RefreshReg$(_c11, "W");
$RefreshReg$(_c12, "G");
$RefreshReg$(_c13, "K");
$RefreshReg$(_c14, "X");
$RefreshReg$(_c15, "J");
$RefreshReg$(_c16, "Q");
$RefreshReg$(_c17, "Z");

},{}]},["lcTnz","jOM1v"], "jOM1v", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLElBQUUsT0FBTztBQUFPLElBQUksSUFBRSxPQUFPO0FBQWUsSUFBSSxJQUFFLE9BQU87QUFBeUIsSUFBSSxJQUFFLE9BQU87QUFBb0IsSUFBSSxJQUFFLE9BQU8sZ0JBQWUsSUFBRSxPQUFPLFVBQVU7QUFBZSxJQUFJLElBQUUsQ0FBQyxHQUFFLEdBQUUsR0FBRTtJQUFLLElBQUcsS0FBRyxPQUFPLEtBQUcsWUFBVSxPQUFPLEtBQUcsWUFBVyxLQUFJLElBQUksS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRSxNQUFJLE1BQUksS0FBRyxFQUFFLEdBQUUsR0FBRTtRQUFDLEtBQUksSUFBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBRSxDQUFBLElBQUUsRUFBRSxHQUFFLEVBQUMsS0FBSSxFQUFFO0lBQVU7SUFBRyxPQUFPO0FBQUM7QUFBRSxJQUFJLElBQUUsQ0FBQyxHQUFFLEdBQUUsSUFBSyxDQUFBLElBQUUsS0FBRyxPQUFLLEVBQUUsRUFBRSxNQUFJLENBQUMsR0FBRSxFQUFFLEtBQUcsQ0FBQyxLQUFHLENBQUMsRUFBRSxhQUFXLEVBQUUsR0FBRSxXQUFVO1FBQUMsT0FBTTtRQUFFLFlBQVcsQ0FBQztJQUFDLEtBQUcsR0FBRSxFQUFDO0FBQUcsSUFBSSxJQUFFLFdBQVcsU0FBUyxRQUFNLEVBQUU7QUFBQyxJQUFJLElBQUUsSUFBSSxXQUFXLFNBQVMsT0FBSyxDQUFDO0FBQUUsSUFBSSxJQUFFLElBQUksSUFBSSxJQUFHLElBQUUsQ0FBQSxJQUFHLEVBQUUsSUFBSSxJQUFHLEtBQUcsRUFBRSxPQUFPLENBQUEsSUFBRyxFQUFFLFdBQVcsU0FBTyxFQUFFLFNBQVMsTUFBTSxJQUFJLENBQUEsSUFBRyxFQUFFLE1BQU0sTUFBTSxPQUFPLENBQUMsR0FBRSxDQUFDLEdBQUUsRUFBRSxHQUFJLENBQUEsQ0FBQyxDQUFDLEVBQUUsR0FBQyxHQUFFLENBQUEsR0FBRyxDQUFDO0FBQUcsSUFBSSxLQUFHLEVBQUUsY0FBYSxJQUFFLElBQUksRUFBRSxnQkFBYyxJQUFJLFlBQVUsUUFBTyxLQUFHO0FBQUksSUFBSSxJQUFFLENBQUMsSUFBRSxFQUFFLEVBQUMsR0FBRyxJQUFJLFFBQVEsSUFBSSxFQUFFLE9BQU8sSUFBRyxRQUFPO0FBQUcsSUFBSSxJQUFFLENBQUMsR0FBRyxJQUFJLFFBQVEsTUFBTSxxQkFBa0IsT0FBTyxJQUFHLFFBQU8sSUFBRyxJQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsd0JBQW9CLElBQUcsSUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLHdCQUFvQixJQUFHLElBQUUsR0FBRSxJQUFFLENBQUMsR0FBRyxJQUFJLE9BQUssRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSTtBQUFHLElBQUksSUFBRTtJQUFDLG1CQUFrQjtJQUFNLGdCQUFlO0lBQU0sV0FBVTtJQUFNLFlBQVc7UUFBQztLQUFlO0lBQUMsUUFBTztJQUFZLFFBQU87SUFBSyxpQkFBZ0I7SUFBZ0csWUFBVztJQUFtQixXQUFVO0lBQW1CLFdBQVU7SUFBUSxVQUFTO0lBQU0sY0FBYTtBQUFJO0FBQUUsT0FBTyxPQUFPLGdCQUFjLEVBQUU7QUFBUyxXQUFXLFVBQVE7SUFBQyxNQUFLLEVBQUU7SUFBQyxLQUFJO1FBQUMsU0FBUSxFQUFFO0lBQU87QUFBQztBQUFFLElBQUksSUFBRSxPQUFPLE9BQU87QUFBTyxTQUFTLEVBQUUsQ0FBQztJQUFFLEVBQUUsS0FBSyxJQUFJLEVBQUMsSUFBRyxJQUFJLENBQUMsTUFBSTtRQUFDLE1BQUssT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFO1FBQUMsa0JBQWlCLEVBQUU7UUFBQyxtQkFBa0IsRUFBRTtRQUFDLFFBQU8sU0FBUyxDQUFDO1lBQUUsSUFBSSxDQUFDLGlCQUFpQixLQUFLLEtBQUcsWUFBVztRQUFFO1FBQUUsU0FBUSxTQUFTLENBQUM7WUFBRSxJQUFJLENBQUMsa0JBQWtCLEtBQUs7UUFBRTtJQUFDLEdBQUUsT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFLEdBQUMsS0FBSztBQUFDO0FBQUMsT0FBTyxPQUFPLFNBQU87QUFBRSxPQUFPLE9BQU8sVUFBUSxDQUFDO0FBQUUsSUFBSSxJQUFFLFdBQVcsV0FBUyxXQUFXLFVBQVE7QUFBSyxlQUFlLEVBQUUsSUFBRSxDQUFDLENBQUM7SUFBRSxJQUFHLENBQUEsRUFBRSwyQkFBMEIsRUFBRSxRQUFRLFlBQVk7UUFBQyx3QkFBdUIsQ0FBQztJQUFDLEVBQUMsSUFBRyxXQUFXLFVBQVU7QUFBVTtBQUFDLFNBQVM7SUFBSSxPQUFNLENBQUMsRUFBRSxRQUFNLEVBQUUsU0FBTyxZQUFVLFNBQVMsU0FBUyxRQUFRLFlBQVUsSUFBRSxTQUFTLFdBQVMsY0FBWSxFQUFFO0FBQUk7QUFBQyxTQUFTO0lBQUksT0FBTSxDQUFDLEVBQUUsUUFBTSxFQUFFLFNBQU8sWUFBVSxjQUFZLEVBQUU7QUFBSTtBQUFDLFNBQVM7SUFBSSxPQUFPLEVBQUUsUUFBTSxTQUFTO0FBQUk7QUFBQyxJQUFJLElBQUU7QUFBeUIsSUFBSSxJQUFFO0lBQUMsZUFBYyxDQUFDO0lBQUUsaUJBQWdCLEVBQUU7SUFBQyxnQkFBZSxFQUFFO0FBQUEsR0FBRSxJQUFFO0lBQUssRUFBRSxnQkFBYyxDQUFDLEdBQUUsRUFBRSxrQkFBZ0IsRUFBRSxFQUFDLEVBQUUsaUJBQWUsRUFBRTtBQUFBO0FBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLEVBQUU7SUFBQyxJQUFJLElBQUUsRUFBRSxFQUFDLEdBQUUsR0FBRTtJQUFFLElBQUksS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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d0JBQ1osSUFBSSxJQUFJLEdBQUcsSUFBRyxDQUFDO3dCQUNmLEtBQU0sQ0FBQSxDQUFDLENBQUMsRUFBRSxNQUFNLEdBQUcsRUFBRSxLQUFJO29CQUMzQjtvQkFDQSxJQUFJLEdBQUUsaUNBQWlDLEdBQUc7d0JBQ3hDLElBQUksS0FBSSxPQUFPO3dCQUNmLE9BQU8sVUFBVSxPQUFNLE1BQUssS0FBTSxDQUFBLENBQUMsQ0FBQyxFQUFFLHVDQUF1QyxHQUFHLEVBQUE7b0JBQ2xGO29CQUNBLEtBQU0sQ0FBQSxDQUFDLENBQUMsRUFBRSxvQkFBb0IsR0FBRyxDQUFBLEdBQUksRUFBRSxLQUFLO2dCQUM5QztZQUNGO1FBQ0Y7SUFDRjtJQUNBLE9BQU87QUFDVDtBQUVBLFNBQVMsR0FBRyxLQUFJLENBQUMsQ0FBQztJQUNoQixJQUFJLElBQUksQ0FBQyxHQUNQLEtBQUk7SUFDTixJQUFJLG1CQUFtQixJQUFHLEVBQUUsWUFBWSxHQUFHLEdBQUcsSUFBSSxJQUFHLEtBQUssRUFBRSxhQUFhLEdBQUcsR0FBRyxLQUFLLE9BQU8sT0FDekYsR0FBRztTQUNBO1FBQ0gsSUFBSSxLQUFJLEVBQUU7UUFDVixLQUFLLElBQUksTUFBTSxDQUFBLE1BQU0sQUFBQyxDQUFBLEtBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSxlQUFjLEVBQ3hDLHFFQUFxRSxTQUFRLEVBQzlFLFVBQVcsQ0FBQSxLQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsZUFBYyxFQUNsQyx5REFBeUQsU0FBUSxHQUFJLEVBQUEsRUFBSTtZQUM3RSxJQUFJLEtBQUksR0FBRztZQUNYLE1BQU0sQ0FBQSxDQUFDLENBQUMsR0FBRSxNQUFNLEdBQUcsR0FBRSxLQUFJO1FBQzNCO0lBQ0Y7SUFDQSxPQUFPO0FBQ1QiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTc4Y2MyMTU5ZjdiZDUzNzMuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvbXl3b3JrZGF5L3J1bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBXPU9iamVjdC5jcmVhdGU7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBWPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcT0oZSx0LG8scik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG4gb2YgRyh0KSkhSi5jYWxsKGUsbikmJm4hPT1vJiZQKGUsbix7Z2V0OigpPT50W25dLGVudW1lcmFibGU6IShyPVYodCxuKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgej0oZSx0LG8pPT4obz1lIT1udWxsP1coWChlKSk6e30scSh0fHwhZXx8IWUuX19lc01vZHVsZT9QKG8sXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOm8sZSkpO3ZhciB5PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIEg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSz1uZXcgU2V0KHkpLEQ9ZT0+Sy5oYXMoZSksdWU9eS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBkZT1EKFwiLS1kcnktcnVuXCIpLF89KCk9PkQoXCItLXZlcmJvc2VcIil8fEgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsZmU9XygpO3ZhciB4PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBrPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksVD0oLi4uZSk9PngoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxBPSguLi5lKT0+eChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFE9MCxwPSguLi5lKT0+XygpJiZ4KGBcXHV7MUY3RTF9ICR7USsrfWAsLi4uZSk7dmFyIGM9e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wicGFnZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXHNpdGVzXFxcXG15d29ya2RheVxcXFxydWxlcy5qc1wiLFwiYnVuZGxlSWRcIjpcIjJmNTkyYTg3ZGRiNjUxNTBcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiAxSDJJRFxyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvbXl3b3JrZGF5L3J1bGVzLmpzXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi4vZWR1Y2F0aW9uLWl0ZW0tdHJhY2UgLT4gajdVR0kgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvZWR1Y2F0aW9uLWl0ZW0tdHJhY2UuanNcclxuICogICAuL2ZpYmVyLW9wdGlvbnMgLT4ga2djVWogID0+ICBzcmMvY29udGVudHMvc2l0ZXMvbXl3b3JrZGF5L2ZpYmVyLW9wdGlvbnMuanNcclxuICogICAuL2Zvcm0tbG9zcyAtPiBka2Z3VSAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9teXdvcmtkYXkvZm9ybS1sb3NzLmpzXHJcbiAqICAgLi9zbmFwc2hvdC1hbGlnbm1lbnQgLT4gMjVOcEYgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvbXl3b3JrZGF5L3NuYXBzaG90LWFsaWdubWVudC5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvY2hlY2tib3gtbGFiZWwgLT4gMktRd0ggID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9jaGVja2JveC1sYWJlbC5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL29ic2VydmVyIC0+IGVUelV4ICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvb2JzZXJ2ZXIuanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqICAgfmNvcmUveHBhdGggLT4gYWdFNHUgID0+ICBzcmMvY29yZS94cGF0aC5qc1xyXG4gKiAgIH51dGlscy9kZWxheSAtPiBhbTYxNCAgPT4gIHNyYy91dGlscy9kZWxheS5qc1xyXG4gKiAgIH51dGlscy9maWVsZExhYmVsIC0+IDFSbUd3ICA9PiAgc3JjL3V0aWxzL2ZpZWxkTGFiZWwuanNcclxuICovXHJcblxyXG52YXIgbiA9IGUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO1xyXG5uLmRlZmluZUludGVyb3BGbGFnKHIpLCBuLmV4cG9ydChyLCBcIldPUktEQVlfRk9SQ0VEX0NIRUNLQk9YX0FUVFJJQlVURVwiLCAoKSA9PiBiKSwgbi5leHBvcnQocixcclxuICAgIFwiaXNXb3JrZGF5U2tpbGxzRmllbGRMYWJlbFwiLCAoKSA9PiBQKSwgbi5leHBvcnQociwgXCJnZXRXb3JrZGF5UmVndWxhclJ1bGVzXCIsICgpID0+IF8pLCBuLmV4cG9ydChcclxuICAgIHIsIFwiZmluZFdvcmtkYXlTa2lsbHNQcm9ncmVzc0xhYmVsXCIsICgpID0+IEwpLCBuLmV4cG9ydChyLCBcImZpbmRXb3JrZGF5Q291bnRyeVByb2dyZXNzTGFiZWxzXCIsXHJcbiAgKCkgPT4gTSksIG4uZXhwb3J0KHIsIFwiZmluZEZpbGxlZE15RXhwZXJpZW5jZVByb2dyZXNzTGFiZWxzXCIsICgpID0+IFUpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJmaW5kRmlsbGVkV29ya2RheVNlbGZJZGVudGlmeUNoZWNrYm94UHJvZ3Jlc3NMYWJlbHNcIiwgKCkgPT4gSCksIG4uZXhwb3J0KHIsXHJcbiAgICBcImZpbmRVbmZpbGxlZFdvcmtkYXlTZWxmSWRlbnRpZnlDaGVja2JveFByb2dyZXNzTGFiZWxzXCIsICgpID0+IFkpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJkaXNhbWJpZ3VhdGVXb3JrZGF5RHVwbGljYXRlUnVsZUxhYmVsc1wiLCAoKSA9PiBYKSwgbi5leHBvcnQociwgXCJnZXRXb3JrZGF5UnVsZVNlY3Rpb25IZWFkaW5nXCIsXHJcbiAgICAoKSA9PiBlZSksIG4uZXhwb3J0KHIsIFwiZ2V0V29ya2RheURhdGVEZXNjcmlwdGlvblwiLCAoKSA9PiBlciksIG4uZXhwb3J0KHIsXHJcbiAgICBcImdldFdvcmtkYXlTYWxhcnlGaWVsZFR5cGVcIiwgKCkgPT4gZW4pLCBuLmV4cG9ydChyLCBcImlzV29ya2RheVNlbGZJZGVudGlmeUxhYmVsXCIsICgpID0+IGVvKSwgblxyXG4gIC5leHBvcnQociwgXCJpc1dvcmtkYXlJbnB1dFNlbGVjdGVkXCIsICgpID0+IGVhKSwgbi5leHBvcnQociwgXCJpc1dvcmtkYXlTZWxmSWRlbnRpZnlJbnB1dFNlbGVjdGVkXCIsXHJcbiAgICAoKSA9PiBlbCksIG4uZXhwb3J0KHIsIFwiZ2V0V29ya2RheUlucHV0TGFiZWxUZXh0XCIsICgpID0+IGVzKSwgbi5leHBvcnQocixcclxuICAgIFwiZ2V0V29ya2RheUVkdWNhdGlvbkFwaUJhc2VcIiwgKCkgPT4gZUQpLCBuLmV4cG9ydChyLCBcImVtcGxveW1lbnRHcm91cFhwYXRoXCIsICgpID0+IGVYKSwgblxyXG4gIC5leHBvcnQociwgXCJlZHVjYXRpb25Hcm91cFhwYXRoXCIsICgpID0+IGUwKSwgbi5leHBvcnQociwgXCJnZXRSdWxlc1wiLCAoKSA9PiB0USksIG4uZXhwb3J0KHIsXHJcbiAgICBcImdldEVkdVJ1bGVzXCIsICgpID0+IHQwKSwgbi5leHBvcnQociwgXCJnZXRFeHBSdWxlc1wiLCAoKSA9PiB0MiksIG4uZXhwb3J0KHIsXHJcbiAgICBcImdldFN1Ym1pdEJ1dHRvblRleHRcIiwgKCkgPT4gdDEpLCBuLmV4cG9ydChyLCBcImdldEdyb3VwU25hcHNob3RcIiwgKCkgPT4gdDQpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJnZXRGb3JtU25hcHNob3RcIiwgKCkgPT4gdDUpO1xyXG52YXIgbyA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9jaGVja2JveC1sYWJlbFwiKSxcclxuICBpID0gZShcIn5jb250ZW50cy9tZXRob2RzL29ic2VydmVyXCIpLFxyXG4gIGEgPSBlKFwifmNvcmUvZW51bXNcIiksXHJcbiAgbCA9IGUoXCJ+Y29yZS94cGF0aFwiKSxcclxuICBzID0gZShcIn51dGlscy9kZWxheVwiKSxcclxuICB1ID0gZShcIn51dGlscy9maWVsZExhYmVsXCIpLFxyXG4gIGMgPSBlKFwiLi4vZWR1Y2F0aW9uLWl0ZW0tdHJhY2VcIiksXHJcbiAgZCA9IGUoXCIuL2ZpYmVyLW9wdGlvbnNcIiksXHJcbiAgZiA9IGUoXCIuL2Zvcm0tbG9zc1wiKSxcclxuICBwID0gZShcIi4vc25hcHNob3QtYWxpZ25tZW50XCIpO1xyXG5sZXQgbSA9IG5ldyBTZXQoW1wiRWR1Y2F0aW9uXCIsIFwiU2Nob29scyBBdHRlbmRlZFwiLCBcIlNjaG9vbGluZ1wiLCBcIkFjYWRlbWljIEV4cGVyaWVuY2VcIixcclxuICAgIFwiRWR1Y2F0aW9uIEhpc3RvcnlcIiwgXCJFZHVjYXRpb24gKE9wdGlvbmFsKVwiLCBcIkVkdWNhdGlvbi9TY2hvb2xpbmdcIlxyXG4gIF0pLFxyXG4gIGggPSBuZXcgU2V0KFtcIkFkZCBhIEpvYlwiLCBcIlJlbGV2YW50IEV4cGVyaWVuY2VcIiwgXCJXb3JrIEV4cGVyaWVuY2VcIiwgXCJFbXBsb3ltZW50IEV4cGVyaWVuY2VcIixcclxuICAgIFwiRW1wbG95bWVudCBIaXN0b3J5XCIsIFwiV29yayBIaXN0b3J5XCIsIFwiV29yayBIaXN0b3J5IChPcHRpb25hbClcIiwgXCJXb3JrIG9yIE90aGVyIEV4cGVyaWVuY2VcIixcclxuICAgIFwiV2hlcmUgaGF2ZSB5b3Ugd29ya2VkP1wiLCBcIlByb2Zlc3Npb25hbCBFeHBlcmllbmNlXCIsIFwiRW1wbG95bWVudCBEZXRhaWxcIixcclxuICAgIFwiSm9iIEhpc3RvcnkvV29yayBFeHBlcmllbmNlXCJcclxuICBdKSxcclxuICBnID0gW1wiQWRkLWEtSm9iLVwiLCBcIkVkdWNhdGlvbi1cIiwgXCJTY2hvb2xzLUF0dGVuZGVkLVwiLCBcIldvcmstRXhwZXJpZW5jZS1cIixcclxuICAgIFwiRW1wbG95bWVudC1FeHBlcmllbmNlLVwiLCBcIlByb2Zlc3Npb25hbC1FeHBlcmllbmNlLVwiLCBcIlJlbGV2YW50LUV4cGVyaWVuY2UtXCIsXHJcbiAgICBcIldvcmstb3ItT3RoZXItRXhwZXJpZW5jZS1cIiwgXCJXaGVyZS1oYXZlLXlvdS13b3JrZWQ/LVwiLCBcIkVtcGxveW1lbnQtSGlzdG9yeS1cIixcclxuICAgIFwiRW1wbG95bWVudC1EZXRhaWwtXCIsIFwiV29yay1IaXN0b3J5LVwiXHJcbiAgXSxcclxuICBiID0gXCJkYXRhLWpyLXdvcmtkYXktZm9yY2VkLWNoZWNrYm94XCIsXHJcbiAgeSA9IDJlMyxcclxuICB2ID0gMTAwLFxyXG4gIHcgPSBcIi92YWx1ZXMvZWR1Y2F0aW9ucy9kZWdyZWVzXCIsXHJcbiAgUyA9IFwiL3ZhbHVlcy9waG9uZS9jb3VudHJ5Q29kZXNcIixcclxuICBFID0gXCIvdmFsdWVzL25hbWVzL2NvdW50cmllc1wiLFxyXG4gIHggPSBcImNvdW50cnlwaG9uZWNvZGVcIixcclxuICBDID0gNDAsXHJcbiAgQSA9IDEyLFxyXG4gIGsgPSA4MDAsXHJcbiAgVCA9IDQwLFxyXG4gIEYgPSAnW2RhdGEtYXV0b21hdGlvbi1pZD1cImFjdGl2ZUxpc3RDb250YWluZXJcIl1bcm9sZT1cImxpc3Rib3hcIl0nLFxyXG4gIEkgPSAnW2RhdGEtYXV0b21hdGlvbi1pZD1cIm1lbnVJdGVtXCJdW3JvbGU9XCJvcHRpb25cIl0sIFtyb2xlPVwib3B0aW9uXCJdJyxcclxuICBqID0gMjQwLFxyXG4gIEQgPSBuZXcgTWFwO1xyXG5cclxuZnVuY3Rpb24gUChlKSB7XHJcbiAgbGV0IHQgPSAoMCwgdS5ub3JtYWxpemVGaWVsZExhYmVsKShlLCB7XHJcbiAgICBsb29zZTogITBcclxuICB9KTtcclxuICByZXR1cm4gXCJza2lsbHNcIiA9PT0gdCB8fCBcImFkZCBza2lsbHNcIiA9PT0gdCB8fCBcInR5cGUgdG8gYWRkIHNraWxsc1wiID09PSB0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF8oZSkge1xyXG4gIHJldHVybiBlLmZpbHRlcihlID0+ICFQKGUubGFiZWwpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBMKGUpIHtcclxuICByZXR1cm4gZS5maWVsZFJlcXVpcmVkU3RhdHVzLmZpbmQoZSA9PiBQKGUubGFiZWwpKT8ubGFiZWwgPz8gbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBSKGUpIHtcclxuICBsZXQgdCA9ICgwLCB1Lm5vcm1hbGl6ZUZpZWxkTGFiZWwpKGUsIHtcclxuICAgICAgbG9vc2U6ICEwXHJcbiAgICB9KSxcclxuICAgIHIgPSB0LnJlcGxhY2UoL1xccy9nLCBcIlwiKTtcclxuICByZXR1cm4gXCJjb3VudHJ5IHBob25lIGNvZGVcIiA9PT0gdCB8fCBcInBob25lIGNvdW50cnkgY29kZVwiID09PSB0IHx8IFwiY291bnRyeSByZWdpb24gcGhvbmUgY29kZVwiID09PVxyXG4gICAgdCB8fCByLmluY2x1ZGVzKFwiY291bnRyeXBob25lY29kZVwiKSB8fCByLmluY2x1ZGVzKFwicGhvbmVjb3VudHJ5Y29kZVwiKSB8fCByLmluY2x1ZGVzKFxyXG4gICAgICBcImNvdW50cnlyZWdpb25waG9uZWNvZGVcIikgfHwgci5pbmNsdWRlcyhcImNvdW50cnlcIikgJiYgci5pbmNsdWRlcyhcInBob25lXCIpICYmIHIuaW5jbHVkZXMoXHJcbiAgICAgIFwiY29kZVwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBPKGUpIHtcclxuICBpZiAoUihlKSkgcmV0dXJuICExO1xyXG4gIGxldCB0ID0gKDAsIHUubm9ybWFsaXplRmllbGRMYWJlbCkoZSwge1xyXG4gICAgICBsb29zZTogITBcclxuICAgIH0pLFxyXG4gICAgciA9IHQucmVwbGFjZSgvXFxzL2csIFwiXCIpO1xyXG4gIHJldHVybiBcImNvdW50cnlcIiA9PT0gdCB8fCBcImNvdW50cnkgdGVycml0b3J5XCIgPT09IHQgfHwgXCJjb3VudHJ5IHJlZ2lvblwiID09PSB0IHx8XHJcbiAgICBcImNvdW50cnl0ZXJyaXRvcnlcIiA9PT0gciB8fCBcImNvdW50cnlyZWdpb25cIiA9PT0gclxyXG59XHJcblxyXG5mdW5jdGlvbiBNKGUpIHtcclxuICByZXR1cm4gZS5maWVsZFJlcXVpcmVkU3RhdHVzLmZpbHRlcihlID0+IE8oZS5sYWJlbCkpLm1hcChlID0+IGUubGFiZWwpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE4oZSwgdCkge1xyXG4gIGxldCByID0gKDAsIHUubm9ybWFsaXplRmllbGRMYWJlbCkodCk7XHJcbiAgcmV0dXJuIGUuZmllbGRSZXF1aXJlZFN0YXR1cy5maW5kKGUgPT4gdS5ub3JtYWxpemVGaWVsZExhYmVsKGUubGFiZWwpID09PSByKT8ubGFiZWwgPz8gbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiAkKGUsIHQpIHtcclxuICBsZXQgciA9ICgwLCB1Lm5vcm1hbGl6ZUZpZWxkTGFiZWwpKHQpO1xyXG4gIHJldHVybiBlLmZpbGxlZEZpZWxkcy5zb21lKGUgPT4gKDAsIHUubm9ybWFsaXplRmllbGRMYWJlbCkoZSkgPT09IHIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEIoZSkge1xyXG4gIGlmIChBcnJheS5pc0FycmF5KGUpKSByZXR1cm4gZS5zb21lKEIpO1xyXG4gIGlmIChudWxsID09IGUpIHJldHVybiAhMTtcclxuICBsZXQgdCA9IFN0cmluZyhlKS50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICByZXR1cm4gIVtcIlwiLCBcInNlbGVjdCBvbmVcIiwgXCJbXVwiLCBcIi9cIiwgXCIvL1wiXS5pbmNsdWRlcyh0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBxKGUpIHtcclxuICByZXR1cm4gISFBcnJheS5pc0FycmF5KGUpICYmIGUuc29tZShlID0+ICEhZSAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBlICYmIE9iamVjdC5lbnRyaWVzKGUpLnNvbWUoKFtcclxuICAgIGUsIHRcclxuICBdKSA9PiBlICE9PSBwLk1ZV09SS0RBWV9FRFVDQVRJT05fU05BUFNIT1RfSU5ERVhfS0VZICYmIGUgIT09IGMuRURVQ0FUSU9OX1RSQUNFX0tFWSAmJiBCKHQpKSlcclxufVxyXG5cclxuZnVuY3Rpb24gVShlLCB0KSB7XHJcbiAgbGV0IHIgPSBbXSxcclxuICAgIG4gPSBbe1xyXG4gICAgICBsYWJlbDogXCJFbXBsb3ltZW50XCIsXHJcbiAgICAgIGdyb3VwczogdC5lbXBsb3ltZW50XHJcbiAgICB9LCB7XHJcbiAgICAgIGxhYmVsOiBcIkVkdWNhdGlvblwiLFxyXG4gICAgICBncm91cHM6IHQuZWR1Y2F0aW9uXHJcbiAgICB9XTtcclxuICBmb3IgKGxldCB7XHJcbiAgICAgIGxhYmVsOiB0LFxyXG4gICAgICBncm91cHM6IG9cclxuICAgIH1cclxuICAgIG9mIG4pIHtcclxuICAgIGlmICghcShvKSkgY29udGludWU7XHJcbiAgICBsZXQgbiA9IE4oZSwgdCk7XHJcbiAgICAhbiB8fCAkKGUsIG4pIHx8IHIucHVzaChuKVxyXG4gIH1cclxuICByZXR1cm4gclxyXG59XHJcblxyXG5mdW5jdGlvbiBIKGUsIHQgPSBkb2N1bWVudCkge1xyXG4gIGxldCByID0geihlKTtcclxuICByZXR1cm4gIXIgfHwgJChlLCByKSA/IFtdIDogVih0KSA/IFtyXSA6IFtdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFkoZSwgdCA9IGRvY3VtZW50KSB7XHJcbiAgbGV0IHIgPSB6KGUpO1xyXG4gIHJldHVybiByICYmICQoZSwgcikgPyBWKHQpID8gW10gOiBbcl0gOiBbXVxyXG59XHJcblxyXG5mdW5jdGlvbiB6KGUpIHtcclxuICByZXR1cm4gZS5maWVsZFJlcXVpcmVkU3RhdHVzLmZpbmQoZSA9PiBlbyhlLmxhYmVsKSk/LmxhYmVsID8/IG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gVihlID0gZG9jdW1lbnQpIHtcclxuICBsZXQgdCA9IEFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXVtpZCo9XCJkaXNhYmlsaXR5U3RhdHVzXCJdLCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl1bbmFtZSo9XCJkaXNhYmlsaXR5U3RhdHVzXCJdJ1xyXG4gICAgKSk7XHJcbiAgcmV0dXJuIHQuc29tZShlbClcclxufVxyXG5cclxuZnVuY3Rpb24gVyhlID0gXCJcIikge1xyXG4gIHJldHVybiBlLnJlcGxhY2UoL1tcXHUyMDBiLVxcdTIwMGRcXHVmZWZmXS9nLCBcIlwiKS5yZXBsYWNlKC9cXHUwMGEwL2csIFwiIFwiKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoXHJcbiAgICAvXFxzKy9nLCBcIiBcIikudHJpbSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEcoZSA9IFwiXCIpIHtcclxuICByZXR1cm4gZS5yZXBsYWNlKC9bXFx1MjAwYi1cXHUyMDBkXFx1ZmVmZl0vZywgXCJcIikucmVwbGFjZSgvXFwqL2csIFwiXCIpLnRyaW0oKVxyXG59XHJcblxyXG5mdW5jdGlvbiBLKGUsIHQpIHtcclxuICBsZXQgciA9IC9cXGJuYW1lXFxzKiQvaSxcclxuICAgIG4gPSB0LnJlcGxhY2UoL1xccytuYW1lXFxzKiQvaSwgXCJcIikudHJpbSgpO1xyXG4gIHJldHVybiBuICYmIHIudGVzdCh0KSAmJiByLnRlc3QoZSkgPyBgJHtufSAke2V9YCA6IGAke3R9OiAke2V9YFxyXG59XHJcblxyXG5mdW5jdGlvbiBYKGUpIHtcclxuICBsZXQgdCA9IG5ldyBNYXA7XHJcbiAgZm9yIChsZXQge1xyXG4gICAgICBsYWJlbDogclxyXG4gICAgfVxyXG4gICAgb2YgZSkgdC5zZXQociwgKHQuZ2V0KHIpIHx8IDApICsgMSk7XHJcbiAgbGV0IHIgPSBlLm1hcCgoe1xyXG4gICAgICBsYWJlbDogZSxcclxuICAgICAgc2VjdGlvbkhlYWRpbmc6IHJcclxuICAgIH0pID0+IHIgJiYgKHQuZ2V0KGUpIHx8IDApID4gMSA/IEsoZSwgcikgOiBlKSxcclxuICAgIG4gPSBuZXcgTWFwO1xyXG4gIGZvciAobGV0IGUgb2Ygcikgbi5zZXQoZSwgKG4uZ2V0KGUpIHx8IDApICsgMSk7XHJcbiAgcmV0dXJuIGUubWFwKChlLCB0KSA9PiB7XHJcbiAgICBsZXQgbyA9IHJbdF07XHJcbiAgICByZXR1cm4gMSA9PT0gKG4uZ2V0KG8pIHx8IDApID8ge1xyXG4gICAgICAuLi5lLFxyXG4gICAgICBsYWJlbDogb1xyXG4gICAgfSA6IGVcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBKKGUgPSBcIlwiKSB7XHJcbiAgcmV0dXJuIFwiZGVncmVlXCIgPT09IFcoRyhlKSlcclxufVxyXG5cclxuZnVuY3Rpb24gUShlKSB7XHJcbiAgcmV0dXJuIChlIHx8IFwiXCIpLnRyaW0oKS5yZXBsYWNlKC9cXHMqXFwqJC8sIFwiXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFooZSkge1xyXG4gIHJldHVybiBlPy50YWdOYW1lICE9PSBcIkg0XCIgPyBcIlwiIDogUShlLnRleHRDb250ZW50KVxyXG59XHJcblxyXG5mdW5jdGlvbiBlZShlKSB7XHJcbiAgbGV0IHQgPSB0XyhlKSxcclxuICAgIHIgPSBlO1xyXG4gIGZvciAoOyByOykge1xyXG4gICAgZm9yIChsZXQgZSBvZiBBcnJheS5mcm9tKHIuY2hpbGRyZW4gfHwgW10pKSB7XHJcbiAgICAgIGxldCB0ID0gWihlKTtcclxuICAgICAgaWYgKHQpIHJldHVybiB0XHJcbiAgICB9XHJcbiAgICBsZXQgZSA9IHIucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgIGZvciAoOyBlOykge1xyXG4gICAgICBsZXQgdCA9IFooZSk7XHJcbiAgICAgIGlmICh0KSByZXR1cm4gdDtcclxuICAgICAgZSA9IGUucHJldmlvdXNFbGVtZW50U2libGluZ1xyXG4gICAgfVxyXG4gICAgaWYgKHIgPT09IHQpIGJyZWFrO1xyXG4gICAgciA9IHIucGFyZW50RWxlbWVudFxyXG4gIH1cclxuICByZXR1cm4gXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBldChlKSB7XHJcbiAgbGV0IHQgPSBRKGUpO1xyXG4gIHJldHVybiBtLmhhcyh0KSB8fCBXKHQpLmluY2x1ZGVzKFwiZWR1Y2F0aW9uXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVyKGUpIHtcclxuICBsZXQgdCA9ICgpID0+IHtcclxuICAgICAgbGV0IHQgPSAhIWUucXVlcnlTZWxlY3RvcignW2RhdGEtYXV0b21hdGlvbi1pZD1cImRhdGVTZWN0aW9uTW9udGgtaW5wdXRcIl0nKSxcclxuICAgICAgICByID0gISFlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWF1dG9tYXRpb24taWQ9XCJkYXRlU2VjdGlvbkRheS1pbnB1dFwiXScpLFxyXG4gICAgICAgIG4gPSAhIWUucXVlcnlTZWxlY3RvcignW2RhdGEtYXV0b21hdGlvbi1pZD1cImRhdGVTZWN0aW9uWWVhci1pbnB1dFwiXScpO1xyXG4gICAgICByZXR1cm4gdCAmJiByICYmIG4gPyBcIk1NL0REL1lZWVlcIiA6IHQgJiYgbiA/IFwiTU0vWVlZWVwiIDogbiA/IFwiWVlZWVwiIDogXCJcIlxyXG4gICAgfSxcclxuICAgIHIgPSB0KCk7XHJcbiAgaWYgKHIpIHJldHVybiByO1xyXG4gIGxldCBuID0gZSA9PiB7XHJcbiAgICAgIGxldCB0ID0gZS50cmltKCkudG9VcHBlckNhc2UoKTtcclxuICAgICAgcmV0dXJuIFwiTU0vREQvWVlZWVwiID09PSB0IHx8IFwiTU0vWVlZWVwiID09PSB0IHx8IFwiWVlZWVwiID09PSB0ID8gdCA6IFwiXCJcclxuICAgIH0sXHJcbiAgICBvID0gKGUgPSBcIlwiKSA9PiB7XHJcbiAgICAgIGxldCB0ID0gZS50cmltKCksXHJcbiAgICAgICAgciA9IHQubWF0Y2goL15jdXJyZW50IHZhbHVlIGlzXFxzKyguKz8pXFxzKiQvaSk7XHJcbiAgICAgIHJldHVybiBuKHI/LlsxXSB8fCBcIlwiKVxyXG4gICAgfSxcclxuICAgIGkgPSBvKGUucHJldmlvdXNFbGVtZW50U2libGluZz8udGV4dENvbnRlbnQgfHwgXCJcIik7XHJcbiAgaWYgKGkpIHJldHVybiBpO1xyXG4gIGxldCBhID0gKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZS5jbG9zZXN0ID8gZS5jbG9zZXN0KCdbZGF0YS1hdXRvbWF0aW9uLWlkXj1cImZvcm1GaWVsZC1cIl0nKSA6XHJcbiAgICBudWxsKSB8fCBlLnBhcmVudEVsZW1lbnQsXHJcbiAgICBsID0gYT8ucXVlcnlTZWxlY3RvckFsbD8uKCdbYXJpYS1oaWRkZW49XCJ0cnVlXCJdJykgfHwgW107XHJcbiAgZm9yIChsZXQgZSBvZiBBcnJheS5mcm9tKGwpKSB7XHJcbiAgICBsZXQgdCA9IG8oZS50ZXh0Q29udGVudCB8fCBcIlwiKTtcclxuICAgIGlmICh0KSByZXR1cm4gdFxyXG4gIH1cclxuICByZXR1cm4gXCJNTS9ERC9ZWVlZXCJcclxufVxyXG5cclxuZnVuY3Rpb24gZW4oZSkge1xyXG4gIHJldHVybiAvXFxiKHNhbGFyeXxjb21wZW5zYXRpb258cGF5KVxcYi9pLnRlc3QoZSkgPyAvXFxiKHJhbmdlfG1pbmltdW0gYW5kIG1heGltdW18bWluIGFuZCBtYXgpXFxiL2lcclxuICAgIC50ZXN0KGUpID8gYS5GSUVMRF9UWVBFLlRFWFQgOiBhLkZJRUxEX1RZUEUuTlVNQkVSIDogYS5GSUVMRF9UWVBFLlRFWFRcclxufVxyXG5cclxuZnVuY3Rpb24gZW8oZSA9IFwiXCIpIHtcclxuICBsZXQgdCA9IFcoRyhlKSkucmVwbGFjZSgvWzpcXHVmZjFhXVxccyokLywgXCJcIikucmVwbGFjZSgvW15hLXowLTlcXHNdL2csIFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpXHJcbiAgICAudHJpbSgpO1xyXG4gIHJldHVybiBcInBsZWFzZSBjaGVjayBvbmUgb2YgdGhlIGJveGVzIGJlbG93XCIgPT09IHRcclxufVxyXG5cclxuZnVuY3Rpb24gZWkoZSkge1xyXG4gIGxldCB0ID0gW2UucGFyZW50RWxlbWVudCwgZS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50LCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUuY2xvc2VzdCA/IGVcclxuICAgIC5jbG9zZXN0KFwibGFiZWxcIikgOiBudWxsXHJcbiAgXTtcclxuICByZXR1cm4gdC5zb21lKGUgPT4gZT8ucXVlcnlTZWxlY3Rvcj8uKFxyXG4gICAgJ3N2Z1tjbGFzcyo9XCJ3ZC1pY29uLWNoZWNrXCJdLCAud2QtaWNvbi1jaGVjay1zbWFsbCwgLndkLWljb24tY2hlY2snKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZWEoZSkge1xyXG4gIHJldHVybiBlLmdldEF0dHJpYnV0ZT8uKGIpICE9PSBcInRydWVcIiAmJiAoZS5jaGVja2VkIHx8IGUuZ2V0QXR0cmlidXRlPy4oXCJhcmlhLWNoZWNrZWRcIikgPT09XHJcbiAgICBcInRydWVcIiB8fCBlLnBhcmVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZT8uKFwiYXJpYS1jaGVja2VkXCIpID09PSBcInRydWVcIilcclxufVxyXG5cclxuZnVuY3Rpb24gZWwoZSkge1xyXG4gIHJldHVybiBlLmdldEF0dHJpYnV0ZT8uKGIpICE9PSBcInRydWVcIiAmJiAoZS5nZXRBdHRyaWJ1dGU/LihcImFyaWEtY2hlY2tlZFwiKSA9PT0gXCJ0cnVlXCIgfHwgZVxyXG4gICAgLnBhcmVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZT8uKFwiYXJpYS1jaGVja2VkXCIpID09PSBcInRydWVcIiB8fCBlaShlKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZXMoZSwgdCkge1xyXG4gIHJldHVybiB0Py50ZXh0Q29udGVudD8udHJpbSgpIHx8IHQ/LmlubmVyVGV4dD8udHJpbSgpIHx8ICgwLCBvLmdldFJhZGlvQ2hlY2tUZXh0KShlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBldShlKSB7XHJcbiAgcmV0dXJuICgwLCBsLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKSgnLi8vYnV0dG9uW0BhcmlhLWhhc3BvcHVwPVwibGlzdGJveFwiXVtAdHlwZT1cImJ1dHRvblwiXScsIGUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVjKGUpIHtcclxuICBsZXQgdCA9IGU/LnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKSB8fCBcIlwiO1xyXG4gIHJldHVybiBcInNlbGVjdCBvbmVcIiA9PT0gdC50b0xvd2VyQ2FzZSgpID8gXCJcIiA6IHRcclxufVxyXG5cclxuZnVuY3Rpb24gZWQoZSkge1xyXG4gIHJldHVybiBlLm1hcChlYykuZmlsdGVyKEJvb2xlYW4pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVmKGUpIHtcclxuICByZXR1cm4gZT8ucXVlcnlTZWxlY3RvckFsbCA/IEFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJ2xpOm5vdCgjc2VsZWN0LW9uZSksIFtyb2xlPVwib3B0aW9uXCJdOm5vdCgjc2VsZWN0LW9uZSknKSkgOiBbXVxyXG59XHJcblxyXG5mdW5jdGlvbiBlcChlKSB7XHJcbiAgbGV0IHQgPSBlPy5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/LigpO1xyXG4gIHJldHVybiB0ICYmIE51bWJlci5pc0Zpbml0ZSh0LnRvcCkgJiYgTnVtYmVyLmlzRmluaXRlKHQuYm90dG9tKSAmJiBOdW1iZXIuaXNGaW5pdGUodC5sZWZ0KSAmJlxyXG4gICAgTnVtYmVyLmlzRmluaXRlKHQucmlnaHQpID8gdCA6IG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gZW0oZSwgdCkge1xyXG4gIGxldCByID0gZXAoZSk7XHJcbiAgaWYgKCFyKSByZXR1cm4gbnVsbDtcclxuICBsZXQgbiA9IE1hdGgubWF4KDAsIE1hdGgubWluKHQucmlnaHQsIHIucmlnaHQpIC0gTWF0aC5tYXgodC5sZWZ0LCByLmxlZnQpKTtcclxuICBpZiAobiA8PSAwKSByZXR1cm4gbnVsbDtcclxuICBsZXQgbyA9IE1hdGgubWluKE1hdGguYWJzKHIudG9wIC0gdC5ib3R0b20pLCBNYXRoLmFicyh0LnRvcCAtIHIuYm90dG9tKSksXHJcbiAgICBpID0gTWF0aC5hYnMoci5sZWZ0IC0gdC5sZWZ0KTtcclxuICByZXR1cm4gbyArIGkgLyAxMFxyXG59XHJcblxyXG5mdW5jdGlvbiBlaCgpIHtcclxuICBsZXQgZSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbD8uKCd1bFtyb2xlPVwibGlzdGJveFwiXVt0YWJpbmRleD1cIi0xXCJdJykgfHwgW10pO1xyXG4gIHJldHVybiBlLmxlbmd0aCA+IDAgPyBlIDogKDAsIGwuZ2V0T3JkZXJlZE5vZGVzKSgnLy91bFtAcm9sZT1cImxpc3Rib3hcIl1bQHRhYmluZGV4PVwiLTFcIl0nKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlZyhlKSB7XHJcbiAgbGV0IHQgPSBlLmdldEF0dHJpYnV0ZT8uKFwiYXJpYS1jb250cm9sc1wiKTtcclxuICBpZiAoIXQgfHwgXCJmdW5jdGlvblwiICE9IHR5cGVvZiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCkgcmV0dXJuIG51bGw7XHJcbiAgbGV0IHIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0KTtcclxuICByZXR1cm4gcj8uZ2V0QXR0cmlidXRlPy4oXCJyb2xlXCIpICE9PSBcImxpc3Rib3hcIiA/IG51bGwgOiByXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGViKGUpIHtcclxuICBsZXQgdCA9IGVnKGUpO1xyXG4gIGlmIChlZih0KS5sZW5ndGggPiAwKSByZXR1cm4gdDtcclxuICBsZXQgciA9IGVoKCkuZmlsdGVyKGUgPT4gZWYoZSkubGVuZ3RoID4gMCk7XHJcbiAgaWYgKDAgPT09IHIubGVuZ3RoKSByZXR1cm4gbnVsbDtcclxuICBsZXQgbiA9IGVwKGUpO1xyXG4gIGlmICghbikgcmV0dXJuIHJbMF07XHJcbiAgbGV0IG8gPSByLm1hcChlID0+ICh7XHJcbiAgICBsaXN0Ym94OiBlLFxyXG4gICAgZGlzdGFuY2U6IGVtKGUsIG4pXHJcbiAgfSkpLmZpbHRlcihlID0+IG51bGwgIT09IGUuZGlzdGFuY2UgJiYgZS5kaXN0YW5jZSA8PSBqKS5zb3J0KChlLCB0KSA9PiBlLmRpc3RhbmNlIC0gdC5kaXN0YW5jZSk7XHJcbiAgcmV0dXJuIG9bMF0/Lmxpc3Rib3ggPz8gbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBleSgpIHtcclxuICByZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPy4oRikgfHwgW10pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV2KGUpIHtcclxuICByZXR1cm4gL1xcK1xcZHsxLDR9XFxiLy50ZXN0KGUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV3KCkge1xyXG4gIHJldHVybiBleSgpLmZsYXRNYXAoZSA9PiBlPy5xdWVyeVNlbGVjdG9yQWxsID8gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoSSkpIDogW10pLm1hcChlID0+XHJcbiAgICBlYyhlLnRleHRDb250ZW50KSkuZmlsdGVyKGV2KS5maWx0ZXIoQm9vbGVhbilcclxufVxyXG5cclxuZnVuY3Rpb24gZVMoZSkge1xyXG4gIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUuY2xpY2spIHtcclxuICAgIGUuY2xpY2soKTtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUuZGlzcGF0Y2hFdmVudCAmJiBlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiLCB7XHJcbiAgICBidWJibGVzOiAhMCxcclxuICAgIGNhbmNlbGFibGU6ICEwLFxyXG4gICAgdmlldzogXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygd2luZG93ID8gd2luZG93IDogbnVsbFxyXG4gIH0pKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlRShlLCB0KSB7XHJcbiAgbGV0IHIgPSBlLnF1ZXJ5U2VsZWN0b3I/LihcclxuICAgICdbZGF0YS1hdXRvbWF0aW9uLWlkPVwicHJvbXB0SWNvblwiXSwgW2RhdGEtYXV0b21hdGlvbi1pZD1cInByb21wdFNlYXJjaEJ1dHRvblwiXScpO1xyXG4gIGlmIChyKSB7XHJcbiAgICBlUyhyKTtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICB0Py5mb2N1cz8uKCksIHQ/LmNsaWNrPy4oKVxyXG59XHJcblxyXG5mdW5jdGlvbiBleChlKSB7XHJcbiAgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgS2V5Ym9hcmRFdmVudCkgcmV0dXJuO1xyXG4gIGxldCB0ID0gbmV3IEtleWJvYXJkRXZlbnQoXCJrZXlkb3duXCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgY2FuY2VsYWJsZTogITAsXHJcbiAgICBrZXk6IFwiRXNjYXBlXCIsXHJcbiAgICBjb2RlOiBcIkVzY2FwZVwiXHJcbiAgfSk7XHJcbiAgZT8uZGlzcGF0Y2hFdmVudD8uKHQpLCBkb2N1bWVudC5kaXNwYXRjaEV2ZW50Py4odClcclxufVxyXG5hc3luYyBmdW5jdGlvbiBlQygpIHtcclxuICBsZXQgZSA9IG5ldyBTZXQsXHJcbiAgICB0ID0gKCkgPT4ge1xyXG4gICAgICBmb3IgKGxldCB0IG9mIGV3KCkpIGUuYWRkKHQpXHJcbiAgICB9O1xyXG4gIGF3YWl0ICgwLCBpLndhaXRGb3JDb25kaXRpb24pKCgpID0+ICh0KCksIGUuc2l6ZSA+IDApLCB7XHJcbiAgICB0aW1lb3V0OiBrLFxyXG4gICAgaW50ZXJ2YWw6IDUwLFxyXG4gICAgb2JzZXJ2ZVRhcmdldDogZG9jdW1lbnQuYm9keVxyXG4gIH0pO1xyXG4gIGZvciAobGV0IGUgPSAwOyBlIDwgVDsgZSsrKSB7XHJcbiAgICB0KCk7XHJcbiAgICBsZXQgZSA9IGV5KCkuZmlsdGVyKGUgPT4gKGUuc2Nyb2xsSGVpZ2h0IHx8IDApID4gKGUuY2xpZW50SGVpZ2h0IHx8IDApKTtcclxuICAgIGlmICgwID09PSBlLmxlbmd0aCkgYnJlYWs7XHJcbiAgICBsZXQgciA9ICExO1xyXG4gICAgZm9yIChsZXQgdCBvZiBlKSB7XHJcbiAgICAgIGxldCBlID0gTWF0aC5tYXgoMCwgKHQuc2Nyb2xsSGVpZ2h0IHx8IDApIC0gKHQuY2xpZW50SGVpZ2h0IHx8IDApKSxcclxuICAgICAgICBuID0gdC5zY3JvbGxUb3AgfHwgMDtcclxuICAgICAgZSA8PSAwIHx8IG4gPj0gZSAtIDIgfHwgKHQuc2Nyb2xsVG9wID0gTWF0aC5taW4oZSwgbiArIE1hdGgubWF4KHQuY2xpZW50SGVpZ2h0IHx8IDAsIDI0MCkpLFxyXG4gICAgICAgIHQuZGlzcGF0Y2hFdmVudD8uKG5ldyBFdmVudChcInNjcm9sbFwiLCB7XHJcbiAgICAgICAgICBidWJibGVzOiAhMFxyXG4gICAgICAgIH0pKSwgKHQuc2Nyb2xsVG9wIHx8IDApID09PSBuIHx8IChyID0gITApKVxyXG4gICAgfVxyXG4gICAgaWYgKCFyKSBicmVhaztcclxuICAgIGF3YWl0ICgwLCBzLmRlbGF5KSg4MClcclxuICB9XHJcbiAgcmV0dXJuIHQoKSwgQXJyYXkuZnJvbShlKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVBKGUsIHQpIHtcclxuICBlRShlLCB0KTtcclxuICBsZXQgciA9IGF3YWl0IGVDKCk7XHJcbiAgcmV0dXJuIGV4KHQpLCByXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZWsoe1xyXG4gIGxhYmVsOiBlLFxyXG4gIGxhYmVsRWxlbWVudDogdCxcclxuICByZXF1aXJlZDogcixcclxuICBsaXN0Ym94U2VsZWN0RWxlbWVudDogbixcclxuICBkZWFkbGluZU1zOiBvXHJcbn0pIHtcclxuICBsZXQgaSA9IGUgPT4gbyA/IE1hdGgubWF4KDAsIE1hdGgubWluKGUsIG8gLSBEYXRlLm5vdygpKSkgOiBlLFxyXG4gICAgdSA9ICgpID0+IGVmKGViKG4pKSxcclxuICAgIGMgPSAoKSA9PiAoMCwgbC5nZXRPcmRlcmVkTm9kZXMpKFxyXG4gICAgICAnLy91bFtAcm9sZT1cImxpc3Rib3hcIl1bQHRhYmluZGV4PVwiLTFcIl0vbGlbQGlkIT1cInNlbGVjdC1vbmVcIl0nKSxcclxuICAgIGYgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBlID0gdSgpO1xyXG4gICAgICByZXR1cm4gZS5sZW5ndGggPiAwID8gZSA6IGMoKVxyXG4gICAgfSxcclxuICAgIHAgPSAoKSA9PiBmKCksXHJcbiAgICBtID0gKCkgPT4gcCgpLmxlbmd0aCA+IDAsXHJcbiAgICBoID0gKCkgPT4ge1xyXG4gICAgICBuLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiLCB7XHJcbiAgICAgICAgYnViYmxlczogITAsXHJcbiAgICAgICAgY2FuY2VsYWJsZTogITAsXHJcbiAgICAgICAgdmlldzogd2luZG93XHJcbiAgICAgIH0pKVxyXG4gICAgfSxcclxuICAgIGcgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGxldCBlID0gcCgpO1xyXG4gICAgICBpZiAoZS5sZW5ndGggPiAwKSByZXR1cm4gZTtcclxuICAgICAgbGV0IHQgPSBpKDYwMCk7XHJcbiAgICAgIHJldHVybiB0IDw9IDAgPyBbXSA6IGF3YWl0IG5ldyBQcm9taXNlKHIgPT4ge1xyXG4gICAgICAgIGxldCBuID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICAgICAgKGUgPSBwKCkpLmxlbmd0aCA+IDAgJiYgKG4uZGlzY29ubmVjdCgpLCByKGUpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChuLm9ic2VydmUoZG9jdW1lbnQuYm9keSwge1xyXG4gICAgICAgICAgICBjaGlsZExpc3Q6ICEwLFxyXG4gICAgICAgICAgICBzdWJ0cmVlOiAhMFxyXG4gICAgICAgICAgfSksIChlID0gcCgpKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBuLmRpc2Nvbm5lY3QoKSwgcihlKTtcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIG4uZGlzY29ubmVjdCgpLCByKFtdKVxyXG4gICAgICAgIH0sIHQpXHJcbiAgICAgIH0pXHJcbiAgICB9LCBiID0gZWQoYXdhaXQgKDAsIGQuZ2V0V29ya2RheVNlbGVjdE9wdGlvbnNWaWFGaWJlcikobikpO1xyXG4gIGlmIChiLmxlbmd0aCA+IDApIHJldHVybiB7XHJcbiAgICBsYWJlbDogZSxcclxuICAgIHJlcXVpcmVkOiByLFxyXG4gICAgJGxhYmVsOiB0LFxyXG4gICAgJGlucHV0OiBuLFxyXG4gICAgdHlwZTogYS5GSUVMRF9UWVBFLkxJU1RCT1gsXHJcbiAgICBvcHRpb25zOiBiXHJcbiAgfTtcclxuICBsZXQgeSA9ICgwLCBsLmdldE9yZGVyZWROb2RlcykoXHJcbiAgICAnLy9kaXZbQHZpc2liaWxpdHk9XCJjbG9zaW5nXCJdL3VsW0Byb2xlPVwibGlzdGJveFwiXVtAdGFiaW5kZXg9XCItMVwiXS9saVtAaWQhPVwic2VsZWN0LW9uZVwiXScpO1xyXG4gIGlmICh5Lmxlbmd0aCA+IDApIHtcclxuICAgIGxldCBlID0gKDAsIGwuZ2V0T3JkZXJlZE5vZGVzKShcclxuICAgICcvL2J1dHRvbltAYXJpYS1leHBhbmRlZD1cInRydWVcIiBhbmQgQGFyaWEtaGFzcG9wdXA9XCJsaXN0Ym94XCJdJyk7XHJcbiAgICBmb3IgKGxldCB0IG9mIGUpIHQuY2xpY2soKSwgYXdhaXQgKDAsIHMuZGVsYXkpKDIwKSwgdC5jbGljaygpLCBhd2FpdCBuZXcgUHJvbWlzZShlID0+IHtcclxuICAgICAgbGV0IHQgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgICAgbGV0IHIgPSAoMCwgbC5nZXRPcmRlcmVkTm9kZXMpKFxyXG4gICAgICAgICAgJy8vZGl2W0B2aXNpYmlsaXR5PVwiY2xvc2luZ1wiXS91bFtAcm9sZT1cImxpc3Rib3hcIl1bQHRhYmluZGV4PVwiLTFcIl0vbGlbQGlkIT1cInNlbGVjdC1vbmVcIl0nXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIDAgPT09IHIubGVuZ3RoICYmICh0LmRpc2Nvbm5lY3QoKSwgZSgpKVxyXG4gICAgICB9KTtcclxuICAgICAgdC5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcclxuICAgICAgICBjaGlsZExpc3Q6ICEwLFxyXG4gICAgICAgIHN1YnRyZWU6ICEwXHJcbiAgICAgIH0pLCBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0LmRpc2Nvbm5lY3QoKSwgZSgpXHJcbiAgICAgIH0sIDYwMClcclxuICAgIH0pXHJcbiAgfVxyXG4gIGgoKTtcclxuICBsZXQgdiA9IGF3YWl0IGcoKTtcclxuICAwID09PSB2Lmxlbmd0aCAmJiAobi5jbGljaz8uKCksIHYgPSBhd2FpdCBnKCkpO1xyXG4gIGxldCB3ID0ge1xyXG4gICAgbGFiZWw6IGUsXHJcbiAgICByZXF1aXJlZDogcixcclxuICAgICRsYWJlbDogdCxcclxuICAgICRpbnB1dDogbixcclxuICAgIHR5cGU6IGEuRklFTERfVFlQRS5MSVNUQk9YLFxyXG4gICAgb3B0aW9uczogZWQodi5tYXAoZSA9PiBlLnRleHRDb250ZW50KSlcclxuICB9O1xyXG4gIHJldHVybiBoKCksIGF3YWl0IG5ldyBQcm9taXNlKGUgPT4ge1xyXG4gICAgbGV0IHQgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgIG0oKSB8fCAodC5kaXNjb25uZWN0KCksIGUoKSlcclxuICAgIH0pO1xyXG4gICAgdC5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcclxuICAgICAgY2hpbGRMaXN0OiAhMCxcclxuICAgICAgc3VidHJlZTogITBcclxuICAgIH0pLCBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdC5kaXNjb25uZWN0KCksIGUoKVxyXG4gICAgfSwgNjAwKVxyXG4gIH0pLCB3XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZVQoe1xyXG4gIHNlY3Rpb246IGUsXHJcbiAgbGFiZWw6IHQsXHJcbiAgbGFiZWxFbGVtZW50OiByLFxyXG4gIHJlcXVpcmVkOiBuXHJcbn0pIHtcclxuICBsZXQgbyA9IERhdGUubm93KCkgKyB5LFxyXG4gICAgaSA9IE1hdGgubWF4KDEsIE1hdGguY2VpbCh5IC8gdikpO1xyXG4gIGZvciAobGV0IGEgPSAwOyBhIDwgaSAmJiBEYXRlLm5vdygpIDw9IG87IGErKykge1xyXG4gICAgbGV0IGkgPSBldShlKTtcclxuICAgIGlmIChpKSB7XHJcbiAgICAgIGxldCBlID0gYXdhaXQgZWsoe1xyXG4gICAgICAgIGxhYmVsOiB0LFxyXG4gICAgICAgIGxhYmVsRWxlbWVudDogcixcclxuICAgICAgICByZXF1aXJlZDogbixcclxuICAgICAgICBsaXN0Ym94U2VsZWN0RWxlbWVudDogaSxcclxuICAgICAgICBkZWFkbGluZU1zOiBvXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoZS5vcHRpb25zLmxlbmd0aCA+IDApIHJldHVybiBlXHJcbiAgICB9XHJcbiAgICBsZXQgYSA9IG8gLSBEYXRlLm5vdygpO1xyXG4gICAgaWYgKGEgPD0gMCkgYnJlYWs7XHJcbiAgICBhd2FpdCAoMCwgcy5kZWxheSkoTWF0aC5taW4odiwgYSkpXHJcbiAgfVxyXG4gIHJldHVybiBjb25zb2xlLndhcm4oXHJcbiAgICBcIltNeVdvcmtkYXldIERlZ3JlZSBsaXN0Ym94IGRpZCBub3QgYmVjb21lIHJlYWR5IGJlZm9yZSB0aW1lb3V0OyBjb250aW51aW5nIHdpdGggZmFsbGJhY2sgcnVsZS5cIlxyXG4gICAgKSwgbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBlRigpIHtcclxuICBsZXQgZSA9IG5ldyBTZXQsXHJcbiAgICB0ID0gLyg/Omh0dHBzPzpcXC9cXC9bXlwiJ1xcc10rKT9cXC93ZGF5XFwvY2FseXBzb1xcL2N4c1xcL2pvYmFwcGxpY2F0aW9uXFwvW14vXCInP1xcc10rL2csXHJcbiAgICByID0gKHIgPSBcIlwiKSA9PiB7XHJcbiAgICAgIGxldCBuID0gci5tYXRjaCh0KSB8fCBbXTtcclxuICAgICAgZm9yIChsZXQgdCBvZiBuKSB0cnkge1xyXG4gICAgICAgIGUuYWRkKG5ldyBVUkwodCwgd2luZG93LmxvY2F0aW9uLm9yaWdpbikudG9TdHJpbmcoKSlcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIltteXdvcmtkYXldIEZhaWxlZCB0byBwYXJzZSBBUEkgYmFzZSBjYW5kaWRhdGU6XCIsIGUpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBuID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBwZXJmb3JtYW5jZT8uZ2V0RW50cmllc0J5VHlwZSA/IHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUoXHJcbiAgICAgIFwicmVzb3VyY2VcIikgOiBbXTtcclxuICBmb3IgKGxldCBlIG9mIG4pIHIoZS5uYW1lKTtcclxuICBsZXQgbyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbD8uKFwiW3NyY10sIFtocmVmXSwgW2FjdGlvbl1cIikgfHwgW10pO1xyXG4gIGZvciAobGV0IGUgb2YgbykgcihlLmdldEF0dHJpYnV0ZShcInNyY1wiKSB8fCBlLmdldEF0dHJpYnV0ZShcImhyZWZcIikgfHwgZS5nZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIikgfHxcclxuICAgIFwiXCIpO1xyXG4gIGZvciAobGV0IGUgb2YgQXJyYXkuZnJvbShkb2N1bWVudC5zY3JpcHRzIHx8IFtdKSkgcihlLnNyYyB8fCBcIlwiKSwgcihlLnRleHRDb250ZW50IHx8IFwiXCIpO1xyXG4gIHJldHVybiByKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudD8uaW5uZXJIVE1MIHx8IFwiXCIpLCBBcnJheS5mcm9tKGUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVJKCkge1xyXG4gIGxldCBlID0gd2luZG93LmxvY2F0aW9uPy5wYXRobmFtZSB8fCBcIlwiLFxyXG4gICAgdCA9IGUuc3BsaXQoXCIvXCIpLmZpbHRlcihCb29sZWFuKSxcclxuICAgIHIgPSB0LmluZGV4T2YoXCJyZWNydWl0aW5nXCIpLFxyXG4gICAgbiA9IHRbciArIDFdLFxyXG4gICAgbyA9IHRbciArIDJdO1xyXG4gIHJldHVybiAhKHIgPCAwKSAmJiBuICYmIG8gJiYgL15bQS1aYS16MC05Xy1dKyQvLnRlc3QobikgPyBuZXcgVVJMKFxyXG4gICAgYC93ZGF5L2NhbHlwc28vY3hzL2pvYmFwcGxpY2F0aW9uLyR7bn1gLCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKS50b1N0cmluZygpIDogbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBlaigpIHtcclxuICBsZXQgZSA9IHdpbmRvdy5sb2NhdGlvbj8uaG9zdCB8fCBcIlwiLFxyXG4gICAgdCA9IGUubWF0Y2goL14oW0EtWmEtejAtOS1dKylcXC53ZFxcZCtcXC5teXdvcmtkYXlqb2JzXFwuY29tJC9pKSxcclxuICAgIHIgPSB0Py5bMV07XHJcbiAgcmV0dXJuIHIgPyBuZXcgVVJMKGAvd2RheS9jYWx5cHNvL2N4cy9qb2JhcHBsaWNhdGlvbi8ke3J9YCwgd2luZG93LmxvY2F0aW9uLm9yaWdpbikudG9TdHJpbmcoKSA6XHJcbiAgICBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVEKCkge1xyXG4gIGlmIChcInVuZGVmaW5lZFwiID09IHR5cGVvZiB3aW5kb3cpIHJldHVybiBudWxsO1xyXG4gIGxldCBlID0gZUYoKTtcclxuICByZXR1cm4gZVswXSB8fCBlSSgpIHx8IGVqKClcclxufVxyXG5cclxuZnVuY3Rpb24gZVAoZSA9IFwiXCIpIHtcclxuICBsZXQgdCA9IFcoRyhlKSk7XHJcbiAgcmV0dXJuIFwiZmllbGQgb2Ygc3R1ZHlcIiA9PT0gdFxyXG59XHJcblxyXG5mdW5jdGlvbiBlXyhlKSB7XHJcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZS5vcHRpb25zKSA/IGUub3B0aW9ucyA6IFtdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVMKGUpIHtcclxuICBpZiAobnVsbCA9PSBlKSByZXR1cm4gXCJcIjtcclxuICBsZXQgdCA9IFwic3RyaW5nXCIgPT0gdHlwZW9mIGUgPyBlIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZSA/IFN0cmluZyhlLmRlc2NyaXB0b3IgPz8gZS5sYWJlbCA/PyBlXHJcbiAgICAgIC5uYW1lID8/IGUudmFsdWUgPz8gXCJcIikgOiBTdHJpbmcoZSksXHJcbiAgICByID0gdC5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCk7XHJcbiAgcmV0dXJuIFwic2VsZWN0IG9uZVwiID09PSByLnRvTG93ZXJDYXNlKCkgPyBcIlwiIDogclxyXG59XHJcblxyXG5mdW5jdGlvbiBlUihlKSB7XHJcbiAgbGV0IHQgPSBBcnJheS5pc0FycmF5KGUpID8gZSA6IEFycmF5LmlzQXJyYXkoZT8uZGF0YSkgPyBlLmRhdGEgOiBBcnJheS5pc0FycmF5KGU/LnJlc3VsdHMpID8gZVxyXG4gICAgLnJlc3VsdHMgOiBBcnJheS5pc0FycmF5KGU/Lml0ZW1zKSA/IGUuaXRlbXMgOiBbXTtcclxuICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KHQubWFwKGVMKS5maWx0ZXIoQm9vbGVhbikpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlTyhlKSB7XHJcbiAgaWYgKCFlIHx8IFwib2JqZWN0XCIgIT0gdHlwZW9mIGUpIHJldHVybiBudWxsO1xyXG4gIGxldCB0ID0gU3RyaW5nKGUuaWQgPz8gXCJcIikudHJpbSgpLFxyXG4gICAgciA9IGVMKGUpO1xyXG4gIHJldHVybiB0ICYmIHIgPyB7XHJcbiAgICBpZDogdCxcclxuICAgIGRlc2NyaXB0b3I6IHJcclxuICB9IDogbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBlTShlKSB7XHJcbiAgbGV0IHQgPSBBcnJheS5pc0FycmF5KGUpID8gZSA6IEFycmF5LmlzQXJyYXkoZT8uZGF0YSkgPyBlLmRhdGEgOiBBcnJheS5pc0FycmF5KGU/LnJlc3VsdHMpID8gZVxyXG4gICAgLnJlc3VsdHMgOiBBcnJheS5pc0FycmF5KGU/Lml0ZW1zKSA/IGUuaXRlbXMgOiBbXSxcclxuICAgIHIgPSBuZXcgU2V0LFxyXG4gICAgbiA9IFtdO1xyXG4gIGZvciAobGV0IGUgb2YgdCkge1xyXG4gICAgbGV0IHQgPSBlTyhlKTtcclxuICAgICF0IHx8IHIuaGFzKHQuaWQpIHx8IChyLmFkZCh0LmlkKSwgbi5wdXNoKHQpKVxyXG4gIH1cclxuICByZXR1cm4gblxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVOKGUpIHtcclxuICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBmZXRjaCkgcmV0dXJuIG51bGw7XHJcbiAgdHJ5IHtcclxuICAgIGxldCB0ID0gYXdhaXQgZmV0Y2goZSwge1xyXG4gICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKCF0Lm9rKSByZXR1cm4gY29uc29sZS53YXJuKFxyXG4gICAgICBgW015V29ya2RheV0gRmFpbGVkIHRvIGZldGNoIFdvcmtkYXkgb3B0aW9uczogJHt0LnN0YXR1c30gJHt0LnN0YXR1c1RleHR9ICR7ZX1gKSwgbnVsbDtcclxuICAgIHJldHVybiBhd2FpdCB0Lmpzb24oKVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBjb25zb2xlLndhcm4oXCJbTXlXb3JrZGF5XSBGYWlsZWQgdG8gZmV0Y2ggV29ya2RheSBvcHRpb25zOlwiLCBlKSwgbnVsbFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZSQoZSkge1xyXG4gIGlmICghZSkgcmV0dXJuIG51bGw7XHJcbiAgdHJ5IHtcclxuICAgIGxldCB0ID0gbmV3IFVSTChlLCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKSxcclxuICAgICAgciA9IHQucGF0aG5hbWUubWF0Y2goL1xcL3dkYXlcXC9jYWx5cHNvXFwvY3hzXFwvam9iYXBwbGljYXRpb25cXC8oW14vXSspLyk7XHJcbiAgICByZXR1cm4gcj8uWzFdID8/IG51bGxcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gY29uc29sZS53YXJuKFwiW015V29ya2RheV0gRmFpbGVkIHRvIHBhcnNlIFdvcmtkYXkgQVBJIHRlbmFudDpcIiwgZSksIG51bGxcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVCKCkge1xyXG4gIGxldCBlID0gU3RyaW5nKHdpbmRvdz8ud29ya2RheT8udGVuYW50ID8/IFwiXCIpLnRyaW0oKTtcclxuICBpZiAoZSkgcmV0dXJuIGU7XHJcbiAgbGV0IHQgPSB3aW5kb3cubG9jYXRpb24/Lmhvc3QgfHwgXCJcIjtcclxuICByZXR1cm4gdC5tYXRjaCgvXihbQS1aYS16MC05LV0rKVxcLndkXFxkK1xcLm15d29ya2RheWpvYnNcXC5jb20kL2kpPy5bMV0gPz8gbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBlcShlKSB7XHJcbiAgaWYgKFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIHdpbmRvdykgcmV0dXJuIG51bGw7XHJcbiAgbGV0IHQgPSBlJChlKSB8fCBlQigpO1xyXG4gIGlmICghdCB8fCAhL15bQS1aYS16MC05Xy1dKyQvLnRlc3QodCkpIHJldHVybiBudWxsO1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgciA9IGUgPyBuZXcgVVJMKGUsIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pLm9yaWdpbiA6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XHJcbiAgICByZXR1cm4gbmV3IFVSTChgL3dkYXkvY2FseXBzby9jeHMvY29tbW9uLyR7dH1gLCByKS50b1N0cmluZygpXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIGNvbnNvbGUud2FybihcIltNeVdvcmtkYXldIEZhaWxlZCB0byBidWlsZCBXb3JrZGF5IGNvbW1vbiBBUEkgYmFzZTpcIiwgZSksIG51bGxcclxuICB9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZVUoZSkge1xyXG4gIGlmICghZSB8fCBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGZldGNoKSByZXR1cm4gW107XHJcbiAgbGV0IHQgPSBgJHtlLnJlcGxhY2UoL1xcLyQvLFwiXCIpfSR7d31gO1xyXG4gIHJldHVybiBlUihhd2FpdCBlTih0KSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiBlSChlKSB7XHJcbiAgaWYgKCFlIHx8IFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZmV0Y2gpIHJldHVybiBbXTtcclxuICBsZXQgdCA9IGAke2UucmVwbGFjZSgvXFwvJC8sXCJcIil9JHtFfWA7XHJcbiAgcmV0dXJuIGVNKGF3YWl0IGVOKHQpKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVZKGUpIHtcclxuICBpZiAoIWUgfHwgXCJmdW5jdGlvblwiICE9IHR5cGVvZiBmZXRjaCkgcmV0dXJuIFtdO1xyXG4gIGxldCB0ID0gYCR7ZS5yZXBsYWNlKC9cXC8kLyxcIlwiKX0ke1N9YDtcclxuICByZXR1cm4gZVIoYXdhaXQgZU4odCkpLmZpbHRlcihldilcclxufVxyXG5hc3luYyBmdW5jdGlvbiBleihlLCB0KSB7XHJcbiAgbGV0IHIgPSBgJHtlLnJlcGxhY2UoL1xcLyQvLFwiXCIpfS9jb3VudHJpZXMvJHtlbmNvZGVVUklDb21wb25lbnQodC5pZCl9LyR7eH1gO1xyXG4gIHJldHVybiBlUihhd2FpdCBlTihyKSkuZmlsdGVyKGV2KVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVWKCkge1xyXG4gIGxldCBlID0gZUQoKSxcclxuICAgIHQgPSBlcShlKTtcclxuICBpZiAoIWUgfHwgIXQpIHJldHVybiBbXTtcclxuICBsZXQgciA9IGAke2UucmVwbGFjZSgvXFwvJC8sXCJcIil9fCR7dC5yZXBsYWNlKC9cXC8kLyxcIlwiKX1gLFxyXG4gICAgbiA9IEQuZ2V0KHIpO1xyXG4gIGlmIChuKSByZXR1cm4gbjtcclxuICBsZXQgbyA9IChhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgciA9IGF3YWl0IGVZKGUpO1xyXG4gICAgaWYgKHIubGVuZ3RoID4gMCkgcmV0dXJuIHI7XHJcbiAgICBsZXQgbiA9IGF3YWl0IGVIKGUpO1xyXG4gICAgaWYgKDAgPT09IG4ubGVuZ3RoKSByZXR1cm4gW107XHJcbiAgICBpZiAobi5sZW5ndGggPiBDKSByZXR1cm4gY29uc29sZS5pbmZvKFxyXG4gICAgICBgW015V29ya2RheV0gU2tpcHBpbmcgQ291bnRyeSBQaG9uZSBDb2RlIEFQSSBoeWRyYXRpb24gZm9yICR7bi5sZW5ndGh9IGNvdW50cmllcy5gXHJcbiAgICAgICksIFtdO1xyXG4gICAgbGV0IG8gPSBBcnJheS5mcm9tKHtcclxuICAgICAgICBsZW5ndGg6IG4ubGVuZ3RoXHJcbiAgICAgIH0sICgpID0+IFtdKSxcclxuICAgICAgaSA9IDAsXHJcbiAgICAgIGEgPSBNYXRoLm1pbihBLCBuLmxlbmd0aCksXHJcbiAgICAgIGwgPSBBcnJheS5mcm9tKHtcclxuICAgICAgICBsZW5ndGg6IGFcclxuICAgICAgfSwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGZvciAoOyBpIDwgbi5sZW5ndGg7KSB7XHJcbiAgICAgICAgICBsZXQgZSA9IGkrKztcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIG9bZV0gPSBhd2FpdCBleih0LCBuW2VdKVxyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICAgICAgXCJbTXlXb3JrZGF5XSBGYWlsZWQgdG8gZmV0Y2ggV29ya2RheSBjb3VudHJ5IHBob25lIGNvZGUgb3B0aW9uOlwiLCBlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICBhd2FpdCBQcm9taXNlLmFsbChsKTtcclxuICAgIGxldCBzID0gbmV3IFNldCxcclxuICAgICAgdSA9IFtdO1xyXG4gICAgZm9yIChsZXQgZSBvZiBvLmZsYXQoKSkgcy5oYXMoZSkgfHwgKHMuYWRkKGUpLCB1LnB1c2goZSkpO1xyXG4gICAgcmV0dXJuIHVcclxuICB9KSgpLmNhdGNoKGUgPT4gKEQuZGVsZXRlKHIpLCBjb25zb2xlLndhcm4oXHJcbiAgICBcIltNeVdvcmtkYXldIEZhaWxlZCB0byBmZXRjaCBXb3JrZGF5IGNvdW50cnkgcGhvbmUgY29kZSBvcHRpb25zOlwiLCBlKSwgW10pKTtcclxuICByZXR1cm4gRC5zZXQociwgbyksIG9cclxufVxyXG5hc3luYyBmdW5jdGlvbiBlVyhlLCB0KSB7XHJcbiAgbGV0IHIgPSBhd2FpdCBlVigpO1xyXG4gIHJldHVybiByLmxlbmd0aCA+IDAgPyAoY29uc29sZS5pbmZvKFxyXG4gICAgICBgW015V29ya2RheV0gRmV0Y2hlZCAke3IubGVuZ3RofSBDb3VudHJ5IFBob25lIENvZGUgb3B0aW9ucyBmcm9tIFdvcmtkYXkgQVBJLmApLCByKSA6XHJcbiAgICBhd2FpdCBlQShlLCB0KVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVHKGUpIHtcclxuICBsZXQgdCA9IGUuZmlsdGVyKGUgPT4gSihlLmxhYmVsKSk7XHJcbiAgaWYgKDAgPT09IHQubGVuZ3RoIHx8IHQuZXZlcnkoZSA9PiBlXyhlKS5sZW5ndGggPiAwKSkgcmV0dXJuO1xyXG4gIGxldCByID0gYXdhaXQgZVUoZUQoKSk7XHJcbiAgaWYgKDAgIT09IHIubGVuZ3RoKVxyXG4gICAgZm9yIChsZXQgZSBvZiB0KSAwID09PSBlXyhlKS5sZW5ndGggJiYgKGUub3B0aW9ucyA9IHIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVLKGUpIHtcclxuICByZXR1cm4gZS5maWx0ZXIoZSA9PiAhZVAoZS5sYWJlbCkgJiYgKCFKKGUubGFiZWwpIHx8IGVfKGUpLmxlbmd0aCA+IDApKS5tYXAoZSA9PiAoe1xyXG4gICAgdHlwZTogSihlLmxhYmVsKSA/IGEuRklFTERfVFlQRS5MSVNUQk9YIDogZS50eXBlLFxyXG4gICAgbGFiZWw6IGUubGFiZWwsXHJcbiAgICAuLi5lLm9wdGlvbnM/Lmxlbmd0aCA/IHtcclxuICAgICAgb3B0aW9uczogZS5vcHRpb25zXHJcbiAgICB9IDoge30sXHJcbiAgICAuLi5lLmRlc2NyaXB0aW9uID8ge1xyXG4gICAgICBkZXNjcmlwdGlvbjogZS5kZXNjcmlwdGlvblxyXG4gICAgfSA6IHt9XHJcbiAgfSkpXHJcbn1cclxubGV0IGVYID0gYFxyXG4gIChcclxuICAgIChcclxuICAgICAgc3RhcnRzLXdpdGgoQGFyaWEtbGFiZWxsZWRieSwgXCJXb3JrLUV4cGVyaWVuY2UtXCIpXHJcbiAgICAgIG9yIHN0YXJ0cy13aXRoKEBhcmlhLWxhYmVsbGVkYnksIFwiQWRkLWEtSm9iLVwiKVxyXG4gICAgICBvciBzdGFydHMtd2l0aChAYXJpYS1sYWJlbGxlZGJ5LCAnRW1wbG95bWVudC1FeHBlcmllbmNlLScpXHJcbiAgICAgIG9yIHN0YXJ0cy13aXRoKEBhcmlhLWxhYmVsbGVkYnksICdQcm9mZXNzaW9uYWwtRXhwZXJpZW5jZS0nKVxyXG4gICAgICBvciBzdGFydHMtd2l0aChAYXJpYS1sYWJlbGxlZGJ5LCAnUmVsZXZhbnQtRXhwZXJpZW5jZS0nKVxyXG4gICAgICBvciBzdGFydHMtd2l0aChAYXJpYS1sYWJlbGxlZGJ5LCAnV29yay1vci1PdGhlci1FeHBlcmllbmNlLScpXHJcbiAgICAgIG9yIHN0YXJ0cy13aXRoKEBhcmlhLWxhYmVsbGVkYnksICdXaGVyZS1oYXZlLXlvdS13b3JrZWQ/LScpXHJcbiAgICAgIG9yIHN0YXJ0cy13aXRoKEBhcmlhLWxhYmVsbGVkYnksICdFbXBsb3ltZW50LUhpc3RvcnktJylcclxuICAgICAgb3Igc3RhcnRzLXdpdGgoQGFyaWEtbGFiZWxsZWRieSwgJ1dvcmstSGlzdG9yeS0nKVxyXG4gICAgKVxyXG4gICAgYW5kIHN1YnN0cmluZyhAYXJpYS1sYWJlbGxlZGJ5LCBzdHJpbmctbGVuZ3RoKEBhcmlhLWxhYmVsbGVkYnkpIC0gc3RyaW5nLWxlbmd0aChcIi1wYW5lbFwiKSArMSkgPSBcIi1wYW5lbFwiXHJcbiAgKVxyXG4gIG9yIHN0YXJ0cy13aXRoKEBkYXRhLWF1dG9tYXRpb24taWQsICd3b3JrRXhwZXJpZW5jZS0nKVxyXG5gLFxyXG4gIGVKID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiLFxyXG4gIGVRID0gXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5elwiLFxyXG4gIGVaID0gYHRyYW5zbGF0ZShAYXJpYS1sYWJlbGxlZGJ5LCBcIiR7ZUp9XCIsIFwiJHtlUX1cIilgLFxyXG4gIGUwID0gYFxyXG4gIChcclxuICAgIChcclxuICAgICAgc3RhcnRzLXdpdGgoJHtlWn0sIFwiZWR1Y2F0aW9uLVwiKVxyXG4gICAgICBvciBzdGFydHMtd2l0aCgke2VafSwgXCJzY2hvb2xzLWF0dGVuZGVkLVwiKVxyXG4gICAgICBvciBjb250YWlucygke2VafSwgXCItZWR1Y2F0aW9uLVwiKVxyXG4gICAgKVxyXG4gICAgYW5kIHN1YnN0cmluZygke2VafSwgc3RyaW5nLWxlbmd0aCgke2VafSkgLSBzdHJpbmctbGVuZ3RoKFwiLXBhbmVsXCIpICsxKSA9IFwiLXBhbmVsXCJcclxuICApXHJcbiAgb3Igc3RhcnRzLXdpdGgoQGRhdGEtYXV0b21hdGlvbi1pZCwgJ2VkdWNhdGlvbi0nKVxyXG5gLFxyXG4gIGUyID0gXCIvL2gzIHwgLy9oNFwiLFxyXG4gIGUxID0gbmV3IFNldChbXCJIM1wiLCBcIkg0XCJdKSxcclxuICBlMyA9ICdkaXZbZGF0YS1hdXRvbWF0aW9uLWlkXj1cImZvcm1GaWVsZC1cIl0nLFxyXG4gIGU0ID0gJ1tkYXRhLWF1dG9tYXRpb24taWQ9XCJhcHBseUZsb3dQYWdlXCJdJyxcclxuICBlNSA9ICdbZGF0YS1hdXRvbWF0aW9uLWlkPVwiYXBwbHlGbG93TXlFeHBQYWdlXCJdJyxcclxuICBlNiA9IGAke2U0fSwgJHtlNX1gLFxyXG4gIGU4ID1cclxuICAnZmllbGRzZXQsIGRpdltyb2xlPVwicmFkaW9ncm91cFwiXSwgZGl2W3JvbGU9XCJncm91cFwiXSwgZGl2W2RhdGEtYXV0b21hdGlvbi1pZCo9XCJxdWVzdGlvblwiXSwgZGl2W2RhdGEtYXV0b21hdGlvbi1pZCo9XCJRdWVzdGlvblwiXScsXHJcbiAgZTkgPSAnaW5wdXQ6bm90KFt0eXBlPVwiaGlkZGVuXCJdKSwgdGV4dGFyZWEsIHNlbGVjdCwgYnV0dG9uW2FyaWEtaGFzcG9wdXA9XCJsaXN0Ym94XCJdJyxcclxuICBlNyA9ICdbZGF0YS1hdXRvbWF0aW9uLWlkJD1cIlNlY3Rpb25cIl0sIFthcmlhLWxhYmVsbGVkYnkkPVwiLXNlY3Rpb25cIl0nLFxyXG4gIHRlID0gYC8vKltAZGF0YS1hdXRvbWF0aW9uLWlkPVwid2Vic2l0ZXNTZWN0aW9uXCJcclxuICBvciBAYXJpYS1sYWJlbGxlZGJ5PVwiV2Vic2l0ZXMtc2VjdGlvblwiXHJcbiAgb3IgQGFyaWEtbGFiZWxsZWRieT1cIldlYnNpdGUtc2VjdGlvblwiXWAsXHJcbiAgdHQgPSBuZXcgU2V0KFtcIldlYnNpdGVcIiwgXCJXZWJzaXRlc1wiLCBcIldlYnNpdGUgKE9wdGlvbmFsKVwiLCBcIldlYnNpdGVzIChPcHRpb25hbClcIl0pLFxyXG4gIHRyID0gMmUzLFxyXG4gIHRuID0gMTUwLFxyXG4gIHRvID0gNDtcclxuXHJcbmZ1bmN0aW9uIHRpKCkge1xyXG4gIGxldCBlID0gKDAsIGwuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFxyXG4gICAgJy8vbWFpbi8vaDJbbm90KEBkYXRhLWF1dG9tYXRpb24taWQ9XCJqb2JUaXRsZUhlYWRpbmdcIildIHwgLy9kaXZbQGlkPVwibWFpbkNvbnRlbnRcIl0vL2gyW25vdChAZGF0YS1hdXRvbWF0aW9uLWlkPVwiam9iVGl0bGVIZWFkaW5nXCIpXSB8IC8vbWFpbi8vaDMgfCAvL2RpdltAaWQ9XCJtYWluQ29udGVudFwiXS8vaDMgfCAvL2RpdltAZGF0YS1hdXRvbWF0aW9uLWlkPVwiYXBwbHlGbG93UGFnZVwiXS8vaDMgfCAvL2RpdltAZGF0YS1hdXRvbWF0aW9uLWlkPVwiYXBwbHlGbG93TXlFeHBQYWdlXCJdLy9oMydcclxuICAgICk7XHJcbiAgcmV0dXJuIGU/LnRleHRDb250ZW50Py50cmltKClcclxufVxyXG5cclxuZnVuY3Rpb24gdGEoZSkge1xyXG4gIGxldCB0ID0gZSxcclxuICAgIHIgPSBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGUuZ2V0Q2xpZW50UmVjdHMgfHwgZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCA+IDA7XHJcbiAgcmV0dXJuICEhKHQub2Zmc2V0V2lkdGggfHwgdC5vZmZzZXRIZWlnaHQgfHwgcilcclxufVxyXG5cclxuZnVuY3Rpb24gdGwoKSB7XHJcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I/LihcclxuICAgICAgJ1tkYXRhLWF1dG9tYXRpb24taWQ9XCJwcm9ncmVzc0JhclwiXSBbZGF0YS1hdXRvbWF0aW9uLWlkPVwicHJvZ3Jlc3NCYXJBY3RpdmVTdGVwXCJdJylcclxuICAgID8udGV4dENvbnRlbnQ/LnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0cyhlKSB7XHJcbiAgcmV0dXJuIGU/LnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpIHx8IFwiXCJcclxufVxyXG5cclxuZnVuY3Rpb24gdHUoKSB7XHJcbiAgcmV0dXJuIHRsKCk/LnJlcGxhY2UoL15jdXJyZW50XFxzK3N0ZXBcXHMrXFxkK1xccytvZlxccytcXGQrXFxzKi9pLCBcIlwiKS50cmltKClcclxufVxyXG5cclxuZnVuY3Rpb24gdGMoZSkge1xyXG4gIGxldCB0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPy4oZSkgfHwgW10pO1xyXG4gIGlmICh0Lmxlbmd0aCA+IDApIHJldHVybiB0O1xyXG4gIGxldCByID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcj8uKGUpO1xyXG4gIHJldHVybiByID8gW3JdIDogW11cclxufVxyXG5cclxuZnVuY3Rpb24gdGQoZSkge1xyXG4gIGxldCB0ID0gdHAoWy4uLnRjKGU0KSwgLi4udGMoZTUpXSksXHJcbiAgICByID0gdGMoXCIjbWFpbkNvbnRlbnQsIG1haW5cIiksXHJcbiAgICBuID0gdHAoWy4uLnQsIC4uLnJdKTtcclxuICBpZiAoMCA9PT0gbi5sZW5ndGgpIHJldHVybiBkb2N1bWVudDtcclxuICBsZXQgbyA9IG4uZmlsdGVyKHRhKSxcclxuICAgIGkgPSBvLmxlbmd0aCA+IDAgPyBvIDogbixcclxuICAgIGEgPSBbdHUoKSwgZV0ubWFwKHRzKS5maWx0ZXIoQm9vbGVhbik7XHJcbiAgaWYgKGEubGVuZ3RoID4gMCkge1xyXG4gICAgbGV0IGUgPSBpLmZpbmQoZSA9PiBlLmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1hdXRvbWF0aW9uLWlkXCIpID09PSBcImFwcGx5Rmxvd1BhZ2VcIiAmJiBhLnNvbWUodCA9PlxyXG4gICAgICB0cyhlLnRleHRDb250ZW50KS5pbmNsdWRlcyh0KSkpO1xyXG4gICAgaWYgKGUpIHJldHVybiBlO1xyXG4gICAgbGV0IHQgPSBpLmZpbmQoZSA9PiBhLnNvbWUodCA9PiB0cyhlLnRleHRDb250ZW50KS5pbmNsdWRlcyh0KSkpO1xyXG4gICAgaWYgKHQpIHJldHVybiB0XHJcbiAgfVxyXG4gIHJldHVybiBpWzBdIHx8IGRvY3VtZW50XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRmKGUpIHtcclxuICBsZXQgdCA9IGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hdXRvbWF0aW9uLWlkXCIpPy50b0xvd2VyQ2FzZSgpIHx8IFwiXCIsXHJcbiAgICByID0gZS50ZXh0Q29udGVudD8udG9Mb3dlckNhc2UoKSB8fCBcIlwiO1xyXG4gIHJldHVybiB0LmluY2x1ZGVzKFwiYWNjZXB0dGVybXNhbmRhZ3JlZW1lbnRcIikgfHwgdC5pbmNsdWRlcyhcImFncmVlbWVudFwiKSB8fCByLmluY2x1ZGVzKFxyXG4gICAgXCJpIGFncmVlIHRvIGFuZCBhY2NlcHQgdGhlIHRlcm1zXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRwKGUpIHtcclxuICBsZXQgdCA9IG5ldyBTZXQsXHJcbiAgICByID0gW107XHJcbiAgZm9yIChsZXQgbiBvZiBlKSB0LmhhcyhuKSB8fCAodC5hZGQobiksIHIucHVzaChuKSk7XHJcbiAgcmV0dXJuIHJcclxufVxyXG5cclxuZnVuY3Rpb24gdG0oZSwgdCkge1xyXG4gIHJldHVybiB0LnNvbWUodCA9PiB0ICE9PSBlICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdC5jb250YWlucyAmJiB0LmNvbnRhaW5zKGUpKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0aChlLCB0KSB7XHJcbiAgcmV0dXJuIHQuc29tZSh0ID0+IHQgIT09IGUgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBlLmNvbnRhaW5zICYmIGUuY29udGFpbnModCkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRnKGUpIHtcclxuICBsZXQgdCA9IGUuZ2V0QXR0cmlidXRlPy4oXCJkYXRhLWF1dG9tYXRpb24taWRcIikgfHwgXCJcIixcclxuICAgIHIgPSBlLmdldEF0dHJpYnV0ZT8uKFwiYXJpYS1sYWJlbGxlZGJ5XCIpIHx8IFwiXCIsXHJcbiAgICBuID0gci50b0xvd2VyQ2FzZSgpLFxyXG4gICAgbyA9IG4uZW5kc1dpdGgoXCItcGFuZWxcIiksXHJcbiAgICBpID0gbyAmJiAobi5zdGFydHNXaXRoKFwiZWR1Y2F0aW9uLVwiKSB8fCBuLnN0YXJ0c1dpdGgoXCJzY2hvb2xzLWF0dGVuZGVkLVwiKSB8fCBuLmluY2x1ZGVzKFxyXG4gICAgICBcIi1lZHVjYXRpb24tXCIpKTtcclxuICByZXR1cm4gdC5zdGFydHNXaXRoKFwid29ya0V4cGVyaWVuY2UtXCIpIHx8IHQuc3RhcnRzV2l0aChcImVkdWNhdGlvbi1cIikgfHwgaSB8fCBvICYmIGcuc29tZShlID0+IHJcclxuICAgIC5zdGFydHNXaXRoKGUpKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0YihlKSB7XHJcbiAgbGV0IHQgPSBlO1xyXG4gIGZvciAoOyB0Oykge1xyXG4gICAgaWYgKHRnKHQpKSByZXR1cm4gITA7XHJcbiAgICB0ID0gdC5wYXJlbnRFbGVtZW50XHJcbiAgfVxyXG4gIHJldHVybiAhMVxyXG59XHJcblxyXG5mdW5jdGlvbiB0eShlKSB7XHJcbiAgcmV0dXJuIGU/LnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpIHx8IFwiXCJcclxufVxyXG5cclxuZnVuY3Rpb24gdHYoZSkge1xyXG4gIGxldCB0ID0gdHkoZS5nZXRBdHRyaWJ1dGU/LihcImRhdGEtYXV0b21hdGlvbi1pZFwiKSksXHJcbiAgICByID0gdHkoZS5nZXRBdHRyaWJ1dGU/LihcImFyaWEtbGFiZWxcIikpLFxyXG4gICAgbiA9IHR5KGUudGV4dENvbnRlbnQpO1xyXG4gIHJldHVybiBcImFkZC1idXR0b25cIiA9PT0gdCB8fCBcImFkZFwiID09PSB0IHx8IFwiYWRkIGFub3RoZXJcIiA9PT0gdCB8fCBcImFkZFwiID09PSBuIHx8XHJcbiAgICBcImFkZCBhbm90aGVyXCIgPT09IG4gfHxcclxuICAgIC9eYWRkKCBhbm90aGVyKT8gKHdlYnNpdGV8d29yayBleHBlcmllbmNlfGVkdWNhdGlvbnxzY2hvb2xpbmd8c2Nob29scyBhdHRlbmRlZCkkLy50ZXN0KHIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHR3KGUpIHtcclxuICByZXR1cm4gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGw/LihcImJ1dHRvblwiKSB8fCBbXSkuc29tZSh0dilcclxufVxyXG5cclxuZnVuY3Rpb24gdFMoKSB7XHJcbiAgcmV0dXJuIHRjKGU1KS5zb21lKHRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0RShlKSB7XHJcbiAgcmV0dXJuIGUuY2xvc2VzdD8uKGU1KSB8fCBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHR4KGUpIHtcclxuICBsZXQgdCA9IGUuY2xvc2VzdD8uKGU3KSB8fCBudWxsO1xyXG4gIGlmICh0ICYmIHQgIT09IGUgJiYgdHcodCkpIHJldHVybiB0O1xyXG4gIGxldCByID0gdEUoZSksXHJcbiAgICBuID0gZS5wYXJlbnRFbGVtZW50O1xyXG4gIGZvciAoOyBuICYmIG4gIT09IGRvY3VtZW50LmJvZHkgJiYgbiAhPT0gcjspIHtcclxuICAgIGlmICh0dyhuKSkgcmV0dXJuIG47XHJcbiAgICBuID0gbi5wYXJlbnRFbGVtZW50XHJcbiAgfVxyXG4gIHJldHVybiB0dyhlKSA/IGUgOiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRDKGUpIHtcclxuICBsZXQgdCA9IGUuZ2V0QXR0cmlidXRlPy4oXCJkYXRhLWF1dG9tYXRpb24taWRcIikgfHwgXCJcIixcclxuICAgIHIgPSBlLmdldEF0dHJpYnV0ZT8uKFwiYXJpYS1sYWJlbGxlZGJ5XCIpIHx8IFwiXCI7XHJcbiAgcmV0dXJuIFwid2Vic2l0ZXNTZWN0aW9uXCIgPT09IHQgfHwgXCJXZWJzaXRlcy1zZWN0aW9uXCIgPT09IHIgfHwgXCJXZWJzaXRlLXNlY3Rpb25cIiA9PT0gclxyXG59XHJcblxyXG5mdW5jdGlvbiB0QShlKSB7XHJcbiAgbGV0IHQgPSBlLnRleHRDb250ZW50Py50cmltKCkucmVwbGFjZSgvXFxzKlxcKlxccyokLywgXCJcIikudHJpbSgpO1xyXG4gIHJldHVybiAhIXQgJiYgdHQuaGFzKHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRrKCkge1xyXG4gIGxldCBlID0gKDAsIGwuZ2V0T3JkZXJlZE5vZGVzU2FmZSkodGUpLFxyXG4gICAgdCA9ICgwLCBsLmdldE9yZGVyZWROb2Rlc1NhZmUpKGUyKS5maWx0ZXIodEEpO1xyXG4gIGZvciAobGV0IHIgb2YgdCkge1xyXG4gICAgbGV0IHQgPSByLm5leHRFbGVtZW50U2libGluZztcclxuICAgIGZvciAoOyB0ICYmICFlMS5oYXModC50YWdOYW1lKTspIGUucHVzaCh0KSwgdCA9IHQubmV4dEVsZW1lbnRTaWJsaW5nXHJcbiAgfVxyXG4gIHJldHVybiB0cChlKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0VChlLCB0KSB7XHJcbiAgbGV0IHIgPSBlLmNsb3Nlc3Q/LihlNykgfHwgbnVsbDtcclxuICByZXR1cm4gciAmJiB0QyhyKSA/IHIgOiB0LmZpbmQodCA9PiB0ID09PSBlIHx8IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdC5jb250YWlucyAmJiB0LmNvbnRhaW5zKFxyXG4gICAgZSkpIHx8IG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gdEYoZSkge1xyXG4gIHJldHVybiB0UygpICYmICEhdHgoZSlcclxufVxyXG5cclxuZnVuY3Rpb24gdEkoZSkge1xyXG4gIGxldCB0ID0gYCR7ZXx8XCJcIn0gJHt0dSgpfHxcIlwifWAudG9Mb3dlckNhc2UoKS50cmltKCk7XHJcbiAgcmV0dXJuIHQuaW5jbHVkZXMoXCJteSBleHBlcmllbmNlXCIpIHx8IHRTKClcclxufVxyXG5cclxuZnVuY3Rpb24gdGooKSB7XHJcbiAgbGV0IHtcclxuICAgIHNlY3Rpb25zOiBlXHJcbiAgfSA9IHR6KFwiTXkgRXhwZXJpZW5jZVwiKSwgdCA9IHRrKCksIHIgPSAhMTtcclxuICByZXR1cm4gZS5maWx0ZXIoZSA9PiAhdGIoZSkgJiYgKHRUKGUsIHQpID8gIXIgJiYgKHIgPSAhMCwgITApIDogIXRGKGUpKSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiB0RCgpIHtcclxuICBsZXQgZSA9IFtdO1xyXG4gIGZvciAobGV0IHQgb2YgdGooKSkge1xyXG4gICAgbGV0IHIgPSBhd2FpdCB0Wih0KTtcclxuICAgIHIgJiYgZS5wdXNoKHIpXHJcbiAgfVxyXG4gIHJldHVybiBlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRQKCkge1xyXG4gIGxldCBlID0ge307XHJcbiAgZm9yIChsZXQgdCBvZiB0aigpKSB7XHJcbiAgICBsZXQgciA9IHQzKHQpO1xyXG4gICAgciAmJiAoZVtyLmxhYmVsXSA9IHIudmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiBlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRfKGUpIHtcclxuICByZXR1cm4gZS5jbG9zZXN0Py4oZTYpIHx8IG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gdEwoZSwgdCkge1xyXG4gIHJldHVybiBlICE9PSBkb2N1bWVudCAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUuY29udGFpbnMgJiYgZS5jb250YWlucyh0KVxyXG59XHJcblxyXG5mdW5jdGlvbiB0UihlLCB0KSB7XHJcbiAgaWYgKHQgPT09IGRvY3VtZW50KSByZXR1cm4gITA7XHJcbiAgbGV0IHIgPSB0XyhlKTtcclxuICByZXR1cm4gIXIgfHwgciA9PT0gdCB8fCB0TCh0LCByKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0TyhlLCB0KSB7XHJcbiAgcmV0dXJuIGUuZmlsdGVyKGUgPT4gdGEoZSkgJiYgdFIoZSwgdCkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRNKGUpIHtcclxuICByZXR1cm4gISFlLnF1ZXJ5U2VsZWN0b3I/LihcclxuICAgICdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pLCB0ZXh0YXJlYSwgc2VsZWN0LCBidXR0b25bYXJpYS1oYXNwb3B1cD1cImxpc3Rib3hcIl0nKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0TihlKSB7XHJcbiAgcmV0dXJuICEhZS5xdWVyeVNlbGVjdG9yPy4oXCJsYWJlbCwgbGVnZW5kXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHQkKGUsIHQpIHtcclxuICByZXR1cm4gZS5xdWVyeVNlbGVjdG9yQWxsPy4odCkubGVuZ3RoIHx8IDBcclxufVxyXG5cclxuZnVuY3Rpb24gdEIoZSkge1xyXG4gIGxldCB0ID0gZS5nZXRBdHRyaWJ1dGU/LihcImRhdGEtYXV0b21hdGlvbi1pZFwiKT8udG9Mb3dlckNhc2UoKSB8fCBcIlwiLFxyXG4gICAgciA9IGUuZ2V0QXR0cmlidXRlPy4oXCJyb2xlXCIpPy50b0xvd2VyQ2FzZSgpIHx8IFwiXCIsXHJcbiAgICBuID0gZS50YWdOYW1lPy50b0xvd2VyQ2FzZSgpIHx8IFwiXCIsXHJcbiAgICBvID0gZS50ZXh0Q29udGVudD8ucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpIHx8IFwiXCIsXHJcbiAgICBpID0gdCQoZSwgZTkpLFxyXG4gICAgYSA9IHQkKGUsIFwibGFiZWwsIGxlZ2VuZFwiKTtcclxuICByZXR1cm4gISEoZSA9PT0gZG9jdW1lbnQuYm9keSB8fCBcImRpdlwiID09PSBuICYmICF0ICYmICFyICYmIG8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcclxuICAgIFwic2tpcCB0byBtYWluIGNvbnRlbnRcIikpIHx8IFwiZGl2XCIgPT09IG4gJiYgIXQgJiYgIXIgJiYgKG8ubGVuZ3RoID4gMmUzIHx8IGkgPiAxMiB8fCBhID4gMjQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRxKGUsIHQsIHIpIHtcclxuICBsZXQgbiA9IGUucGFyZW50RWxlbWVudDtcclxuICBmb3IgKDsgbiAmJiBuICE9PSBkb2N1bWVudC5ib2R5ICYmICEobiA9PT0gciB8fCB0LmluY2x1ZGVzKG4pIHx8IHRtKG4sIHQpKTspIHtcclxuICAgIGlmICh0TShuKSAmJiB0TihuKSAmJiAhdEIobikpIHJldHVybiBuO1xyXG4gICAgbiA9IG4ucGFyZW50RWxlbWVudFxyXG4gIH1cclxuICByZXR1cm4gbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiB0VShlLCB0KSB7XHJcbiAgcmV0dXJuIEFycmF5LmZyb20oXCJmdW5jdGlvblwiID09IHR5cGVvZiBlLnF1ZXJ5U2VsZWN0b3JBbGwgPyBlLnF1ZXJ5U2VsZWN0b3JBbGwodCkgOiBkb2N1bWVudFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwodCkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRIKGUsIHQpIHtcclxuICBsZXQgciA9IEFycmF5LmZyb20odFUodCwgZTgpKSxcclxuICAgIG4gPSB0VSh0LCBlOSkubWFwKHIgPT4gdHEociwgZSwgdCkpLmZpbHRlcihCb29sZWFuKSxcclxuICAgIG8gPSB0cChbLi4uciwgLi4ubl0pO1xyXG4gIHJldHVybiBvLmZpbHRlcihyID0+ICEociA9PT0gdCB8fCBlLmluY2x1ZGVzKHIpIHx8IHIuY2xvc2VzdD8uKGUzKSB8fCB0bShyLCBlKSB8fCB0aChyLCBlKSB8fCAhdE0oXHJcbiAgICByKSB8fCAhdE4ocikgfHwgIXRhKHIpIHx8IHRCKHIpKSlcclxufVxyXG5cclxuZnVuY3Rpb24gdFkoZSwgdCkge1xyXG4gIGxldCByID0gYCR7ZXx8XCJcIn0gJHt0bCgpfHxcIlwifWAudG9Mb3dlckNhc2UoKS50cmltKCk7XHJcbiAgcmV0dXJuIHIuaW5jbHVkZXMoXCJ2b2x1bnRhcnlcIikgfHwgci5pbmNsdWRlcyhcImRpc2Nsb3N1cmVcIikgfHwgdC5zb21lKHRmKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0eihlKSB7XHJcbiAgbGV0IHQgPSB0ZChlKSxcclxuICAgIHIgPSB0TygoMCwgbC5nZXRPcmRlcmVkTm9kZXNTYWZlKSgnLi8vZGl2W3N0YXJ0cy13aXRoKEBkYXRhLWF1dG9tYXRpb24taWQsIFwiZm9ybUZpZWxkLVwiKV0nLCB0KSxcclxuICAgICAgdCksXHJcbiAgICBuID0gdFkoZSwgciksXHJcbiAgICBvID0gdCA9PT0gZG9jdW1lbnQgfHwgci5sZW5ndGggPiAwICYmICFuID8gW10gOiB0TygoMCwgbC5nZXRPcmRlcmVkTm9kZXNTYWZlKShcclxuICAgICAgJy4vL2RpdltzdGFydHMtd2l0aChAZGF0YS1hdXRvbWF0aW9uLWlkLCBcImZvcm1GaWVsZC1cIildJywgZG9jdW1lbnQpLCB0KSxcclxuICAgIGkgPSB0cChbLi4ubywgLi4ucl0pLFxyXG4gICAgYSA9IHRZKGUsIGkpO1xyXG4gIGlmICghYSkgcmV0dXJuIHtcclxuICAgIHNlY3Rpb25zOiBpLFxyXG4gICAgYWRkaXRpb25hbFNlY3Rpb25zOiBbXSxcclxuICAgIHNob3VsZENvbGxlY3RBZGRpdGlvbmFsU2VjdGlvbnM6IGFcclxuICB9O1xyXG4gIGxldCBzID0gdEgoaSwgdCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNlY3Rpb25zOiB0cChbLi4uaSwgLi4uc10pLFxyXG4gICAgYWRkaXRpb25hbFNlY3Rpb25zOiBzLFxyXG4gICAgc2hvdWxkQ29sbGVjdEFkZGl0aW9uYWxTZWN0aW9uczogYVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdFYoZSkge1xyXG4gIGxldCB0ID0gKDAsIGwuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoXCIuLy9sYWJlbCB8IC4vL2xlZ2VuZFwiLCBlKVswXTtcclxuICByZXR1cm4gRyh0Py50ZXh0Q29udGVudCB8fCBcIlwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0VyhlKSB7XHJcbiAgcmV0dXJuIGUuc29tZShlID0+IHtcclxuICAgIGxldCB0ID0gKDAsIHUubm9ybWFsaXplRmllbGRMYWJlbCkodFYoZSksIHtcclxuICAgICAgbG9vc2U6ICEwXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBcImNvdW50cnlcIiA9PT0gdCB8fCBcImNvdW50cnkgLyB0ZXJyaXRvcnlcIiA9PT0gdFxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRHKGUpIHtcclxuICBsZXQgdCA9ICgwLCB1Lm5vcm1hbGl6ZUZpZWxkTGFiZWwpKHRWKGUpLCB7XHJcbiAgICBsb29zZTogITBcclxuICB9KTtcclxuICByZXR1cm4gXCJjb3VudHJ5XCIgPT09IHQgfHwgXCJjb3VudHJ5IC8gdGVycml0b3J5XCIgPT09IHRcclxufVxyXG5cclxuZnVuY3Rpb24gdEsoZSkge1xyXG4gIHJldHVybiBlLmxlbmd0aCA+IDAgJiYgZS5ldmVyeSh0RylcclxufVxyXG5cclxuZnVuY3Rpb24gdFgoZSkge1xyXG4gIHJldHVybiBlLm1hcChlID0+IHtcclxuICAgIGxldCB0ID0gZS5nZXRBdHRyaWJ1dGU/LihcImRhdGEtYXV0b21hdGlvbi1pZFwiKSB8fCBcIlwiLFxyXG4gICAgICByID0gdFYoZSksXHJcbiAgICAgIG4gPSB0JChlLCBlOSk7XHJcbiAgICByZXR1cm4gYCR7dH06JHtyfToke259YFxyXG4gIH0pLmpvaW4oXCJ8XCIpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdEooZSkge1xyXG4gIGxldCB0ID0gXCJcIixcclxuICAgIHIgPSAwO1xyXG4gIGF3YWl0ICgwLCBpLndhaXRGb3JDb25kaXRpb24pKCgpID0+IHtcclxuICAgIGxldCB7XHJcbiAgICAgIHNlY3Rpb25zOiBuXHJcbiAgICB9ID0gdHooZSksIG8gPSB0WChuKTtcclxuICAgIHJldHVybiAhbyB8fCB0SyhuKSA/ICh0ID0gXCJcIiwgciA9IDAsICExKSA6IChvID09PSB0ID8gciArPSAxIDogKHQgPSBvLCByID0gMSksIHIgPj0gdG8pXHJcbiAgfSwge1xyXG4gICAgdGltZW91dDogdHIsXHJcbiAgICBpbnRlcnZhbDogdG4sXHJcbiAgICBvYnNlcnZlVGFyZ2V0OiBkb2N1bWVudC5ib2R5XHJcbiAgfSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiB0UShlID0gMCkge1xyXG4gIGxldCB0ID0gW10sXHJcbiAgICByID0gdGkoKTtcclxuICBpZiAodEkocikpIHJldHVybiB0LnB1c2goLi4uYXdhaXQgdDIoKSksIGF3YWl0ICgwLCBzLmRlbGF5KSgyMDApLCB0LnB1c2goLi4uYXdhaXQgdDAoKSksIGF3YWl0IChcclxuICAgIDAsIHMuZGVsYXkpKDIwMCksIHQucHVzaCguLi5hd2FpdCB0RCgpKSwgdDtcclxuICB7XHJcbiAgICBsZXQgbiA9IHR6KHIpO1xyXG4gICAgbi5zZWN0aW9ucy5sZW5ndGggPiAwICYmIHRXKG4uc2VjdGlvbnMpICYmIGF3YWl0IHRKKHIpO1xyXG4gICAgbGV0IHtcclxuICAgICAgc2VjdGlvbnM6IG8sXHJcbiAgICAgIGFkZGl0aW9uYWxTZWN0aW9uczogYSxcclxuICAgICAgc2hvdWxkQ29sbGVjdEFkZGl0aW9uYWxTZWN0aW9uczogbFxyXG4gICAgfSA9IHR6KHIpO1xyXG4gICAgaWYgKGwgJiYgZSA8IDMgJiYgMCA9PT0gYS5sZW5ndGggJiYgby5zb21lKHRmKSkge1xyXG4gICAgICBsZXQgdCA9IDJlMyAqIE1hdGgucG93KDEuNSwgZSksXHJcbiAgICAgICAgbiA9IG8ubGVuZ3RoLFxyXG4gICAgICAgIGEgPSBhd2FpdCAoMCwgaS53YWl0Rm9yQ29uZGl0aW9uKSgoKSA9PiB7XHJcbiAgICAgICAgICBsZXQgZSA9IHR6KHIpO1xyXG4gICAgICAgICAgcmV0dXJuIGUuYWRkaXRpb25hbFNlY3Rpb25zLmxlbmd0aCA+IDAgfHwgZS5zZWN0aW9ucy5sZW5ndGggPiBuXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgdGltZW91dDogdCxcclxuICAgICAgICAgIGludGVydmFsOiAyMDAsXHJcbiAgICAgICAgICBvYnNlcnZlVGFyZ2V0OiBkb2N1bWVudC5ib2R5XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGlmIChhKSByZXR1cm4gYXdhaXQgdFEoZSArIDEpXHJcbiAgICB9XHJcbiAgICBpZiAoMCA9PT0gby5sZW5ndGgpIHtcclxuICAgICAgaWYgKGUgPCAzKSB7XHJcbiAgICAgICAgbGV0IHQgPSAyZTMgKiBNYXRoLnBvdygxLjUsIGUpO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCAoMCwgaS53YWl0Rm9yQ29uZGl0aW9uKSgoKSA9PiB0eihyKS5zZWN0aW9ucy5sZW5ndGggPiAwLCB7XHJcbiAgICAgICAgICB0aW1lb3V0OiB0LFxyXG4gICAgICAgICAgaW50ZXJ2YWw6IDIwMCxcclxuICAgICAgICAgIG9ic2VydmVUYXJnZXQ6IGRvY3VtZW50LmJvZHlcclxuICAgICAgICB9KSwgYXdhaXQgdFEoZSArIDEpXHJcbiAgICAgIH1cclxuICAgICAgdGhyb3cgRXJyb3IoZi5XT1JLREFZX05PX0ZPUk1fRklFTERTX0VSUk9SX01FU1NBR0UpXHJcbiAgICB9XHJcbiAgICBsZXQgcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgZSBvZiBvKSB7XHJcbiAgICAgIGxldCB0ID0gYXdhaXQgdFooZSk7XHJcbiAgICAgIHQgJiYgcy5wdXNoKHtcclxuICAgICAgICBzZWN0aW9uOiBlLFxyXG4gICAgICAgIHJ1bGU6IHRcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGxldCB1ID0gWChzLm1hcCgoe1xyXG4gICAgICBzZWN0aW9uOiBlLFxyXG4gICAgICBydWxlOiB0XHJcbiAgICB9KSA9PiAoe1xyXG4gICAgICBydWxlOiB0LFxyXG4gICAgICBsYWJlbDogdC5sYWJlbCxcclxuICAgICAgc2VjdGlvbkhlYWRpbmc6IGVlKGUpXHJcbiAgICB9KSkpO1xyXG4gICAgZm9yIChsZXQge1xyXG4gICAgICAgIHJ1bGU6IGUsXHJcbiAgICAgICAgbGFiZWw6IHIsXHJcbiAgICAgICAgc2VjdGlvbkhlYWRpbmc6IG5cclxuICAgICAgfVxyXG4gICAgICBvZiB1KSByICE9PSBlLmxhYmVsID8gKGNvbnNvbGUuZGVidWcoXHJcbiAgICAgIFwiW015V29ya2RheV1bYXV0b2ZpbGwtZGVidWddIGR1cGxpY2F0ZS1ydWxlLWxhYmVsLXJlc29sdmVkXCIsIHtcclxuICAgICAgICByYXdMYWJlbDogZS5sYWJlbCxcclxuICAgICAgICBzZWN0aW9uSGVhZGluZzogbixcclxuICAgICAgICByZXNvbHZlZExhYmVsOiByXHJcbiAgICAgIH0pLCB0LnB1c2goe1xyXG4gICAgICAuLi5lLFxyXG4gICAgICBsYWJlbDogclxyXG4gICAgfSkpIDogdC5wdXNoKGUpO1xyXG4gICAgaWYgKDAgPT09IHQubGVuZ3RoICYmIGUgPCAzKSB7XHJcbiAgICAgIGxldCB0ID0gMmUzICogTWF0aC5wb3coMS41LCBlKTtcclxuICAgICAgcmV0dXJuIGF3YWl0ICgwLCBpLndhaXRGb3JDb25kaXRpb24pKCgpID0+IHR6KHIpLnNlY3Rpb25zLmxlbmd0aCA+IDAsIHtcclxuICAgICAgICB0aW1lb3V0OiB0LFxyXG4gICAgICAgIGludGVydmFsOiAyMDAsXHJcbiAgICAgICAgb2JzZXJ2ZVRhcmdldDogZG9jdW1lbnQuYm9keVxyXG4gICAgICB9KSwgYXdhaXQgdFEoZSArIDEpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdFxyXG4gIH1cclxufVxyXG5hc3luYyBmdW5jdGlvbiB0WihlKSB7XHJcbiAgbGV0IHQgPSAoMCwgbC5nZXRPcmRlcmVkTm9kZXMpKFwiLi8vbGFiZWwgfCAuLy9sZWdlbmRcIiwgZSk7XHJcbiAgaWYgKDAgPT09IHQubGVuZ3RoKSByZXR1cm4gY29uc29sZS53YXJuKFwibGFiZWxFbGVtZW50cyBub3QgZm91bmRcIiwgZSksIG51bGw7XHJcbiAgbGV0IHIgPSB0WzBdLFxyXG4gICAgbiA9IHIudGV4dENvbnRlbnQ/LnRyaW0oKSB8fCBcIlwiLFxyXG4gICAgbyA9IEcobiksXHJcbiAgICBpID0gKDAsIGwuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFwiLi8vYWJiclwiLCBlKSxcclxuICAgIHMgPSAoMCwgbC5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoJy4vLypbbm9ybWFsaXplLXNwYWNlKC4pPVwiKlwiXScsIGUpLFxyXG4gICAgdSA9ICgwLCBsLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKSgnLi8vKltAYXJpYS1yZXF1aXJlZD1cInRydWVcIiBvciBAcmVxdWlyZWRdJywgZSksXHJcbiAgICBjID0gaT8udGV4dENvbnRlbnQ/LnRyaW0oKSA9PT0gXCIqXCIgfHwgcz8udGV4dENvbnRlbnQ/LnRyaW0oKSA9PT0gXCIqXCIgfHwgbi5pbmNsdWRlcyhcIipcIikgfHwgZW8oXHJcbiAgICAgIG8pIHx8ICEhdTtcclxuICBpZiAoSihvKSkge1xyXG4gICAgbGV0IHQgPSBhd2FpdCBlVCh7XHJcbiAgICAgIHNlY3Rpb246IGUsXHJcbiAgICAgIGxhYmVsOiBvLFxyXG4gICAgICBsYWJlbEVsZW1lbnQ6IHIsXHJcbiAgICAgIHJlcXVpcmVkOiBjXHJcbiAgICB9KTtcclxuICAgIGlmICh0KSByZXR1cm4gdFxyXG4gIH1cclxuICBsZXQgZCA9ICgwLCBsLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKSgnLi8vZGl2W0BkYXRhLWF1dG9tYXRpb24taWQ9XCJtdWx0aVNlbGVjdENvbnRhaW5lclwiXScsIGUpO1xyXG4gIGlmIChkKSB7XHJcbiAgICBsZXQgZSA9ICgwLCBsLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcIi4vL2lucHV0W0BwbGFjZWhvbGRlcj0nU2VhcmNoJ11cIiwgZCksXHJcbiAgICAgIHQgPSBSKG8pID8gYXdhaXQgZVcoZCwgZSkgOiBbXSxcclxuICAgICAgbiA9IHtcclxuICAgICAgICBsYWJlbDogbyxcclxuICAgICAgICAkbGFiZWw6IHIsXHJcbiAgICAgICAgcmVxdWlyZWQ6IGMsXHJcbiAgICAgICAgdHlwZTogYS5GSUVMRF9UWVBFLk1VTFRJX1NFTEVDVCxcclxuICAgICAgICAkaW5wdXQ6IGUsXHJcbiAgICAgICAgb3B0aW9uczogdFxyXG4gICAgICB9O1xyXG4gICAgcmV0dXJuIG5cclxuICB9XHJcbiAgbGV0IGYgPSBldShlKTtcclxuICBpZiAoZikgcmV0dXJuIGF3YWl0IGVrKHtcclxuICAgIGxhYmVsOiBvLFxyXG4gICAgbGFiZWxFbGVtZW50OiByLFxyXG4gICAgcmVxdWlyZWQ6IGMsXHJcbiAgICBsaXN0Ym94U2VsZWN0RWxlbWVudDogZlxyXG4gIH0pO1xyXG4gIGxldCBwID0gKDAsIGwuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoJy4vL2lucHV0W0BwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXScsIGUpO1xyXG4gIGlmIChwKSB7XHJcbiAgICBsZXQgZSA9IHtcclxuICAgICAgbGFiZWw6IG8sXHJcbiAgICAgICRsYWJlbDogcixcclxuICAgICAgcmVxdWlyZWQ6IGMsXHJcbiAgICAgIHR5cGU6IGEuRklFTERfVFlQRS5TRUFSQ0gsXHJcbiAgICAgICRpbnB1dDogcFxyXG4gICAgfTtcclxuICAgIHJldHVybiBlXHJcbiAgfVxyXG4gIGxldCBtID0gKDAsIGwuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoXCIuLy9pbnB1dCB8IC4vL3RleHRhcmVhXCIsIGUpO1xyXG4gIGlmIChtKSB7XHJcbiAgICBsZXQgdCA9IG0uZ2V0QXR0cmlidXRlKFwidHlwZVwiKTtcclxuICAgIGlmIChcImFjY2VwdFRlcm1zQW5kQWdyZWVtZW50c1wiID09PSBtLm5hbWUgfHwgbS5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbShcImRhdGEtYXV0b21hdGlvbi1pZFwiKVxyXG4gICAgICA/LnZhbHVlID09PSBcImFncmVlbWVudENoZWNrYm94XCIpIHtcclxuICAgICAgbGV0IGUgPSB7XHJcbiAgICAgICAgbGFiZWw6IG8sXHJcbiAgICAgICAgJGxhYmVsOiByLFxyXG4gICAgICAgIHJlcXVpcmVkOiBjLFxyXG4gICAgICAgIHR5cGU6IGEuRklFTERfVFlQRS5DSEVDS0JPWCxcclxuICAgICAgICAkY2hlY2tib3hzOiBbbV0sXHJcbiAgICAgICAgb3B0aW9uczogW1widHJ1ZVwiXVxyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm4gZVxyXG4gICAgfVxyXG4gICAgaWYgKFwiVEVYVEFSRUFcIiA9PT0gbS50YWdOYW1lIHx8IFwiSU5QVVRcIiA9PT0gbS50YWdOYW1lICYmIFwidGV4dFwiID09PSB0KSB7XHJcbiAgICAgIGxldCBlID0ge1xyXG4gICAgICAgIGxhYmVsOiBvLFxyXG4gICAgICAgICRsYWJlbDogcixcclxuICAgICAgICByZXF1aXJlZDogYyxcclxuICAgICAgICB0eXBlOiBlbihvKSxcclxuICAgICAgICAkaW5wdXQ6IG1cclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuIGVcclxuICAgIH1cclxuICAgIGlmIChcIklOUFVUXCIgPT09IG0udGFnTmFtZSAmJiAoXCJjaGVja2JveFwiID09PSB0IHx8IFwicmFkaW9cIiA9PT0gdCkpIHtcclxuICAgICAgbGV0IG4gPSAoMCwgbC5nZXRGaXJzdE9yZGVyZWROb2RlKShcclxuICAgICAgICAgICcuL2FuY2VzdG9yOjpmaWVsZHNldFsxXSB8IC4vYW5jZXN0b3I6OmRpdltzdGFydHMtd2l0aChAZGF0YS1hdXRvbWF0aW9uLWlkLCBcImZvcm1GaWVsZC1cIildJyxcclxuICAgICAgICAgIG0pLFxyXG4gICAgICAgIGkgPSAoMCwgbC5nZXRGaXJzdE9yZGVyZWROb2RlKSgnLi8vZGl2W0Byb2xlPVwicm93Z3JvdXBcIl0nLCBlKSxcclxuICAgICAgICBzID0gKDAsIGwuZ2V0T3JkZXJlZE5vZGVzKShcIi4vL2xhYmVsXCIsIG4pO1xyXG4gICAgICBpICYmIChzID0gKDAsIGwuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoXCIuLy9sYWJlbFwiLCBpKSk7XHJcbiAgICAgIGxldCB1ID0gW10sXHJcbiAgICAgICAgZCA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBlIG9mIHMpIHtcclxuICAgICAgICBsZXQgdCA9ICgwLCBsLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcIi4uLy9pbnB1dFtAdHlwZT0nY2hlY2tib3gnIG9yIEB0eXBlPSdyYWRpbyddXCIsIGUpO1xyXG4gICAgICAgIHQgJiYgKHUucHVzaChlKSwgZC5wdXNoKHQpKVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBmID0gbmV3IFNldCxcclxuICAgICAgICBwID0gW10sXHJcbiAgICAgICAgaCA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBlID0gMDsgZSA8IGQubGVuZ3RoOyBlKyspIGYuaGFzKGRbZV0pIHx8IChmLmFkZChkW2VdKSwgcC5wdXNoKGRbZV0pLCBoLnB1c2godVtlXSkpO1xyXG4gICAgICBpZiAoXCJjaGVja2JveFwiID09PSB0KSB7XHJcbiAgICAgICAgbGV0IGUgPSB7XHJcbiAgICAgICAgICBsYWJlbDogbyxcclxuICAgICAgICAgICRsYWJlbDogcixcclxuICAgICAgICAgIHJlcXVpcmVkOiBjLFxyXG4gICAgICAgICAgdHlwZTogYS5GSUVMRF9UWVBFLkNIRUNLQk9YLFxyXG4gICAgICAgICAgJGNoZWNrYm94czogMCA9PSBwLmxlbmd0aCA/IFttXSA6IHAsXHJcbiAgICAgICAgICBvcHRpb25zOiBoLm1hcChlID0+IGUudGV4dENvbnRlbnQ/LnRyaW0oKSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBlXHJcbiAgICAgIH1cclxuICAgICAgaWYgKFwicmFkaW9cIiA9PT0gdCkge1xyXG4gICAgICAgIGxldCBlID0ge1xyXG4gICAgICAgICAgbGFiZWw6IG8sXHJcbiAgICAgICAgICAkbGFiZWw6IHIsXHJcbiAgICAgICAgICByZXF1aXJlZDogYyxcclxuICAgICAgICAgIHR5cGU6IGEuRklFTERfVFlQRS5DSEVDS0JPWCxcclxuICAgICAgICAgICRjaGVja2JveHM6IHAsXHJcbiAgICAgICAgICBvcHRpb25zOiBoLm1hcChlID0+IGUudGV4dENvbnRlbnQ/LnRyaW0oKSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBuID0gZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hdXRvbWF0aW9uLWlkPVwiZGF0ZUlucHV0V3JhcHBlclwiXScpO1xyXG4gICAgaWYgKG4pIHtcclxuICAgICAgbGV0IGUgPSB7XHJcbiAgICAgICAgbGFiZWw6IG8sXHJcbiAgICAgICAgJGxhYmVsOiByLFxyXG4gICAgICAgIHJlcXVpcmVkOiBjLFxyXG4gICAgICAgIHR5cGU6IGEuRklFTERfVFlQRS5EQVRFLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBlcihuKSxcclxuICAgICAgICAkaW5wdXQ6IG5cclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuIGVcclxuICAgIH1cclxuICB9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdDAoKSB7XHJcbiAgbGV0IGUgPSAoMCwgbC5nZXRPcmRlcmVkTm9kZXMpKGUyKSxcclxuICAgIHQgPSBbXSxcclxuICAgIHIgPSBhc3luYyBlID0+IHtcclxuICAgICAgbGV0IHQgPSBbXTtcclxuICAgICAgZm9yIChsZXQgciBvZiBlKSB7XHJcbiAgICAgICAgbGV0IGUgPSBhd2FpdCB0WihyKTtcclxuICAgICAgICBlICYmIHQucHVzaChlKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAwID09PSB0Lmxlbmd0aCA/IG51bGwgOiAoYXdhaXQgZUcodCksIHtcclxuICAgICAgICBsYWJlbDogXCJFZHVjYXRpb25cIixcclxuICAgICAgICByZXF1aXJlZDogITAsXHJcbiAgICAgICAgdHlwZTogYS5GSUVMRF9UWVBFLkVEVUNBVElPTixcclxuICAgICAgICBjaGlsZHJlbjogdCxcclxuICAgICAgICBvcHRpb25zOiBlSyh0KVxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICBmb3IgKGxldCBuIG9mIGUpXHJcbiAgICBpZiAoZXQobi50ZXh0Q29udGVudCkpIHtcclxuICAgICAgbGV0IGUgPSAoMCwgbC5nZXRPcmRlcmVkTm9kZXMpKFwiZm9sbG93aW5nLXNpYmxpbmc6OipcIiwgbik7XHJcbiAgICAgIGZvciAobGV0IG4gb2YgZSkge1xyXG4gICAgICAgIGlmIChlMS5oYXMobi50YWdOYW1lKSkgYnJlYWs7XHJcbiAgICAgICAgbGV0IGUgPSBBcnJheS5mcm9tKG5ldyBTZXQoKDAsIGwuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoYC4vL2Rlc2NlbmRhbnQtb3Itc2VsZjo6ZGl2WyR7ZTB9XWAsXHJcbiAgICAgICAgICAgIG4pKSksXHJcbiAgICAgICAgICBvID0gZS5sZW5ndGggPiAwID8gZSA6IFtuXTtcclxuICAgICAgICBmb3IgKGxldCBlIG9mIG8pIHtcclxuICAgICAgICAgIGxldCBuID0gW107XHJcbiAgICAgICAgICBuLnB1c2goLi4uKDAsIGwuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoXHJcbiAgICAgICAgICAgICcuLy9kZXNjZW5kYW50LW9yLXNlbGY6OmRpdltzdGFydHMtd2l0aChAZGF0YS1hdXRvbWF0aW9uLWlkLCBcImZvcm1GaWVsZC1cIildJywgZSkpO1xyXG4gICAgICAgICAgbGV0IG8gPSBhd2FpdCByKG4pO1xyXG4gICAgICAgICAgbyAmJiB0LnB1c2gobylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gcmV0dXJuIHRcclxufVxyXG5hc3luYyBmdW5jdGlvbiB0MigpIHtcclxuICBsZXQgZSA9ICgwLCBsLmdldE9yZGVyZWROb2RlcykoZTIpLFxyXG4gICAgdCA9IFtdO1xyXG4gIGZvciAobGV0IHIgb2YgZSlcclxuICAgIGlmIChoLmhhcyhyLnRleHRDb250ZW50Py50cmltKCkucmVwbGFjZSgvXFxzKlxcKiQvLCBcIlwiKSkpIHtcclxuICAgICAgbGV0IGUgPSAoMCwgbC5nZXRPcmRlcmVkTm9kZXMpKFwiZm9sbG93aW5nLXNpYmxpbmc6OipcIiwgcik7XHJcbiAgICAgIGZvciAobGV0IHIgb2YgZSkge1xyXG4gICAgICAgIGlmIChlMS5oYXMoci50YWdOYW1lKSkgYnJlYWs7XHJcbiAgICAgICAgbGV0IGUgPSBbXTtcclxuICAgICAgICBlLnB1c2goLi4uKDAsIGwuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoXHJcbiAgICAgICAgICAnLi8vZGVzY2VuZGFudC1vci1zZWxmOjpkaXZbc3RhcnRzLXdpdGgoQGRhdGEtYXV0b21hdGlvbi1pZCwgXCJmb3JtRmllbGQtXCIpXScsIHIpKTtcclxuICAgICAgICBsZXQgbiA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHQgb2YgZSkge1xyXG4gICAgICAgICAgbGV0IGUgPSBhd2FpdCB0Wih0KTtcclxuICAgICAgICAgIGUgJiYgbi5wdXNoKGUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgwID09PSBuLmxlbmd0aCkgY29udGludWU7XHJcbiAgICAgICAgbGV0IG8gPSB7XHJcbiAgICAgICAgICBsYWJlbDogXCJFbXBsb3ltZW50XCIsXHJcbiAgICAgICAgICByZXF1aXJlZDogITAsXHJcbiAgICAgICAgICB0eXBlOiBhLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVCxcclxuICAgICAgICAgIGNoaWxkcmVuOiBuLFxyXG4gICAgICAgICAgb3B0aW9uczogWy4uLm4ubWFwKGUgPT4gKHtcclxuICAgICAgICAgICAgdHlwZTogZS50eXBlLFxyXG4gICAgICAgICAgICBsYWJlbDogZS5sYWJlbCxcclxuICAgICAgICAgICAgLi4uZS5vcHRpb25zPy5sZW5ndGggPyB7XHJcbiAgICAgICAgICAgICAgb3B0aW9uczogZS5vcHRpb25zXHJcbiAgICAgICAgICAgIH0gOiB7fSxcclxuICAgICAgICAgICAgLi4uZS5kZXNjcmlwdGlvbiA/IHtcclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZS5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICB9IDoge31cclxuICAgICAgICAgIH0pKV1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHQucHVzaChvKVxyXG4gICAgICB9XHJcbiAgICB9IHJldHVybiB0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHQxKCkge1xyXG4gIGxldCBlID0gKDAsIGwuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoJy4vL2lucHV0W0B0eXBlPVwic3VibWl0XCIgYW5kIEB2YWx1ZT1cIlN1Ym1pdCBQcm9maWxlXCJdJyksXHJcbiAgICB0ID0gZSA/IGUudGV4dENvbnRlbnQ/LnRyaW0oKSA6IFwiXCI7XHJcbiAgcmV0dXJuIHRcclxufVxyXG5cclxuZnVuY3Rpb24gdDMoZSwgdCA9ICExKSB7XHJcbiAgbGV0IHIgPSAoMCwgbC5nZXRPcmRlcmVkTm9kZXMpKFwiLi8vbGFiZWwgfCAuLy9sZWdlbmRcIiwgZSk7XHJcbiAgaWYgKDAgPT09IHIubGVuZ3RoKSByZXR1cm4gY29uc29sZS53YXJuKFwibGFiZWxFbGVtZW50cyBub3QgZm91bmRcIiwgZSksIG51bGw7XHJcbiAgbGV0IG4gPSByWzBdLFxyXG4gICAgbyA9IG4udGV4dENvbnRlbnQ/LnRyaW0oKS5yZXBsYWNlKFwiKlwiLCBcIlwiKTtcclxuICBpZiAoUChvKSkgcmV0dXJuIG51bGw7XHJcbiAgbGV0IGkgPSAoMCwgbC5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoJy4vL2RpdltAZGF0YS1hdXRvbWF0aW9uLWlkPVwibXVsdGlTZWxlY3RDb250YWluZXJcIl0nLCBlKTtcclxuICBpZiAoaSkge1xyXG4gICAgbGV0IHIgPSAoMCwgbC5nZXRPcmRlcmVkTm9kZXNTYWZlKSgnLi8vbGlbQGRhdGEtYXV0b21hdGlvbi1pZD1cIm1lbnVJdGVtXCJdJywgZSkubWFwKGUgPT4gZVxyXG4gICAgICAudGV4dENvbnRlbnQ/LnRyaW0oKSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsYWJlbDogbyxcclxuICAgICAgdmFsdWU6IHQgJiYgci5sZW5ndGggPD0gMSA/IHJbMF0gPz8gXCJcIiA6IEpTT04uc3RyaW5naWZ5KHIpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBhID0gKDAsIGwuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKCcuLy9idXR0b25bQGFyaWEtaGFzcG9wdXA9XCJsaXN0Ym94XCJdW0B0eXBlPVwiYnV0dG9uXCJdJywgZSk7XHJcbiAgaWYgKGEpIHJldHVybiB7XHJcbiAgICBsYWJlbDogbyxcclxuICAgIHZhbHVlOiBhLnRleHRDb250ZW50Py50cmltKClcclxuICB9O1xyXG4gIGxldCBzID0gKDAsIGwuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoJy4vL2lucHV0W0BwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXScsIGUpO1xyXG4gIGlmIChzKSByZXR1cm4ge1xyXG4gICAgbGFiZWw6IG8sXHJcbiAgICB2YWx1ZTogbC5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSgnLi8vbGlbQGRhdGEtYXV0b21hdGlvbi1pZD1cIm1lbnVJdGVtXCJdJyk/LnRleHRDb250ZW50Py50cmltKClcclxuICB9O1xyXG4gIGxldCB1ID0gKDAsIGwuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoXCIuLy9pbnB1dCB8IC4vL3RleHRhcmVhXCIsIGUpO1xyXG4gIGlmICh1Py5uYW1lID09IFwiYWNjZXB0VGVybXNBbmRBZ3JlZW1lbnRzXCIpIHJldHVybiB7XHJcbiAgICBsYWJlbDogbyxcclxuICAgIHZhbHVlOiB1LmNoZWNrZWQgPyBcInRydWVcIiA6IFwiZmFsc2VcIlxyXG4gIH07XHJcbiAgaWYgKHUpIHtcclxuICAgIGxldCB0ID0gdS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO1xyXG4gICAgaWYgKFwiVEVYVEFSRUFcIiA9PT0gdS50YWdOYW1lIHx8IFwiSU5QVVRcIiA9PT0gdS50YWdOYW1lICYmIChcInRleHRcIiA9PT0gdCB8fCBcIm51bWJlclwiID09PSB0KSlcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsYWJlbDogbyxcclxuICAgICAgICB2YWx1ZTogdS52YWx1ZVxyXG4gICAgICB9O1xyXG4gICAgaWYgKFwiSU5QVVRcIiA9PT0gdS50YWdOYW1lICYmIChcImNoZWNrYm94XCIgPT09IHQgfHwgXCJyYWRpb1wiID09PSB0KSkge1xyXG4gICAgICBsZXQgciA9ICgwLCBsLmdldEZpcnN0T3JkZXJlZE5vZGUpKFxyXG4gICAgICAgICAgJy4vYW5jZXN0b3I6OmZpZWxkc2V0WzFdIHwgLi9hbmNlc3Rvcjo6ZGl2W3N0YXJ0cy13aXRoKEBkYXRhLWF1dG9tYXRpb24taWQsIFwiZm9ybUZpZWxkLVwiKV0nLFxyXG4gICAgICAgICAgdSksXHJcbiAgICAgICAgbiA9ICgwLCBsLmdldEZpcnN0T3JkZXJlZE5vZGUpKCcuLy9kaXZbQHJvbGU9XCJyb3dncm91cFwiXScsIGUpLFxyXG4gICAgICAgIGkgPSAoMCwgbC5nZXRPcmRlcmVkTm9kZXMpKFwiLi8vbGFiZWxcIiwgcik7XHJcbiAgICAgIG4gJiYgKGkgPSAoMCwgbC5nZXRPcmRlcmVkTm9kZXNTYWZlKShcIi4vL2xhYmVsXCIsIG4pKTtcclxuICAgICAgbGV0IGEgPSBbXSxcclxuICAgICAgICBzID0gW107XHJcbiAgICAgIGZvciAobGV0IGUgb2YgaSkge1xyXG4gICAgICAgIGxldCB0ID0gKDAsIGwuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFwiLi4vL2lucHV0W0B0eXBlPSdjaGVja2JveCcgb3IgQHR5cGU9J3JhZGlvJ11cIiwgZSk7XHJcbiAgICAgICAgdCAmJiAoYS5wdXNoKGUpLCBzLnB1c2godCkpXHJcbiAgICAgIH1cclxuICAgICAgbGV0IGMgPSBuZXcgU2V0LFxyXG4gICAgICAgIGQgPSBbXSxcclxuICAgICAgICBmID0gW107XHJcbiAgICAgIGZvciAobGV0IGUgPSAwOyBlIDwgcy5sZW5ndGg7IGUrKykgYy5oYXMoc1tlXSkgfHwgKGMuYWRkKHNbZV0pLCBkLnB1c2goc1tlXSksIGYucHVzaChhW2VdKSk7XHJcbiAgICAgIGlmIChcImNoZWNrYm94XCIgPT09IHQpIHtcclxuICAgICAgICBpZiAoMCA9PT0gaS5sZW5ndGgpIHJldHVybiB7XHJcbiAgICAgICAgICBsYWJlbDogbyxcclxuICAgICAgICAgIHZhbHVlOiB1LmNoZWNrZWQgPyBcInRydWVcIiA6IFwiZmFsc2VcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGUgPSBlbyhvKSA/IGVsIDogZWEsXHJcbiAgICAgICAgICB0ID0gZi5tYXAoKHQsIHIpID0+IHtcclxuICAgICAgICAgICAgbGV0IG4gPSBkW3JdO1xyXG4gICAgICAgICAgICByZXR1cm4gbiAmJiBlKG4pID8gZXMobiwgdCkgOiBudWxsXHJcbiAgICAgICAgICB9KS5maWx0ZXIoZSA9PiAhIWUpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBsYWJlbDogbyxcclxuICAgICAgICAgIHZhbHVlOiBKU09OLnN0cmluZ2lmeSh0KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoXCJyYWRpb1wiID09PSB0KSB7XHJcbiAgICAgICAgbGV0IGUgPSBlbyhvKSA/IGVsIDogZWEsXHJcbiAgICAgICAgICB0ID0gZC5tYXAoKGUsIHQpID0+ICh7XHJcbiAgICAgICAgICAgIGlucHV0OiBlLFxyXG4gICAgICAgICAgICBvcHRpb246IGZbdF1cclxuICAgICAgICAgIH0pKS5maW5kKCh7XHJcbiAgICAgICAgICAgIGlucHV0OiB0XHJcbiAgICAgICAgICB9KSA9PiBlKHQpKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbGFiZWw6IG8sXHJcbiAgICAgICAgICB2YWx1ZTogdCA/IGVzKHQuaW5wdXQsIHQub3B0aW9uKSA6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCByID0gZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hdXRvbWF0aW9uLWlkPVwiZGF0ZUlucHV0V3JhcHBlclwiXScpO1xyXG4gICAgaWYgKHIpIHtcclxuICAgICAgbGV0IGUgPSAoMCwgbC5nZXRPcmRlcmVkTm9kZXMpKFwiLi8vaW5wdXRcIiwgcik7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbGFiZWw6IG8sXHJcbiAgICAgICAgdmFsdWU6IGUubWFwKGUgPT4gZS52YWx1ZSkuam9pbihcIi9cIilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdDQoZSwgdCwgciA9IHt9LCBuKSB7XHJcbiAgbGV0IG8gPSAoMCwgbC5nZXRPcmRlcmVkTm9kZXMpKGUyKSxcclxuICAgIGkgPSBbXTtcclxuICBmb3IgKGxldCBhIG9mIG8pIHtcclxuICAgIGxldCBvID0gbj8uKGEudGV4dENvbnRlbnQpID8/IGUuaGFzKFEoYS50ZXh0Q29udGVudCkpO1xyXG4gICAgaWYgKG8pIHtcclxuICAgICAgbGV0IGUgPSAwLFxyXG4gICAgICAgIG4gPSAoMCwgbC5nZXRPcmRlcmVkTm9kZXMpKFwiZm9sbG93aW5nLXNpYmxpbmc6OipcIiwgYSk7XHJcbiAgICAgIGZvciAobGV0IG8gb2Ygbikge1xyXG4gICAgICAgIGlmIChlMS5oYXMoby50YWdOYW1lKSkgYnJlYWs7XHJcbiAgICAgICAgbGV0IG4gPSBbXTtcclxuICAgICAgICBuLnB1c2goLi4uKDAsIGwuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoYC4vL2Rlc2NlbmRhbnQtb3Itc2VsZjo6ZGl2WyR7dH1dYCwgbykpO1xyXG4gICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgbi5sZW5ndGg7IHQrKykge1xyXG4gICAgICAgICAgbGV0IG8gPSBuW3RdLFxyXG4gICAgICAgICAgICBhID0ge30sXHJcbiAgICAgICAgICAgIHMgPSBlKyssXHJcbiAgICAgICAgICAgIHUgPSBvLmdldEF0dHJpYnV0ZShwLk1ZV09SS0RBWV9FRFVDQVRJT05fU05BUFNIT1RfSU5ERVhfQVRUUklCVVRFKTtcclxuICAgICAgICAgIHIubWFya0VkdWNhdGlvblJvd3MgJiYgKHUgPSBTdHJpbmcocyksIG8uc2V0QXR0cmlidXRlKHBcclxuICAgICAgICAgICAgLk1ZV09SS0RBWV9FRFVDQVRJT05fU05BUFNIT1RfSU5ERVhfQVRUUklCVVRFLCB1KSk7XHJcbiAgICAgICAgICBsZXQgZCA9ICgwLCBjLmdldEVkdWNhdGlvblRyYWNlRm9yUm93KShvLCB7XHJcbiAgICAgICAgICAgICAgYXR0cmlidXRlczogcC5NWVdPUktEQVlfRURVQ0FUSU9OX1RSQUNFX0FUVFJJQlVURVMsXHJcbiAgICAgICAgICAgICAgaW5jbHVkZUVkdWNhdGlvblRyYWNlOiByLmluY2x1ZGVFZHVjYXRpb25UcmFjZSxcclxuICAgICAgICAgICAgICBtYXJrRWR1Y2F0aW9uUm93czogci5tYXJrRWR1Y2F0aW9uUm93cyxcclxuICAgICAgICAgICAgICBydW5JZDogci5lZHVjYXRpb25UcmFjZVJ1bklkLFxyXG4gICAgICAgICAgICAgIHNuYXBzaG90SW5kZXg6IHNcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGYgPSBbXTtcclxuICAgICAgICAgIGZvciAobGV0IGUgb2YgKGYucHVzaCguLi4oMCwgbC5nZXRPcmRlcmVkTm9kZXNTYWZlKShcclxuICAgICAgICAgICAgICAgICcuLy9kZXNjZW5kYW50LW9yLXNlbGY6OmRpdltzdGFydHMtd2l0aChAZGF0YS1hdXRvbWF0aW9uLWlkLCBcImZvcm1GaWVsZC1cIildJywgb1xyXG4gICAgICAgICAgICAgICAgKSksIGYpKSB7XHJcbiAgICAgICAgICAgIGxldCB0ID0gdDMoZSwgITApO1xyXG4gICAgICAgICAgICB0ICYmIChhW3QubGFiZWxdID0gdC52YWx1ZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChyLmluY2x1ZGVFZHVjYXRpb25TbmFwc2hvdEluZGV4ICYmIHUpIHtcclxuICAgICAgICAgICAgbGV0IGUgPSBOdW1iZXIodSk7XHJcbiAgICAgICAgICAgIE51bWJlci5pc0ludGVnZXIoZSkgJiYgZSA+PSAwICYmIChhW3AuTVlXT1JLREFZX0VEVUNBVElPTl9TTkFQU0hPVF9JTkRFWF9LRVldID0gZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGQgJiYgKGFbYy5FRFVDQVRJT05fVFJBQ0VfS0VZXSA9IGQpLCBpLnB1c2goYSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGlcclxufVxyXG5cclxuZnVuY3Rpb24gdDUoZSA9IHt9KSB7XHJcbiAgbGV0IHQgPSB7fSxcclxuICAgIHIgPSB0aSgpO1xyXG4gIGlmIChcIk15IEV4cGVyaWVuY2VcIiA9PSByKSB0LmVkdWNhdGlvbiA9IHQ0KG0sIGUwLCBlLCBldCksIHQuZW1wbG95bWVudCA9IHQ0KGgsIGVYKSwgT2JqZWN0LmFzc2lnbihcclxuICAgIHQsIHRQKCkpO1xyXG4gIGVsc2Uge1xyXG4gICAgbGV0IGUgPSBbXTtcclxuICAgIGZvciAobGV0IHIgb2YgKDAgPT09IChlID0gKDAsIGwuZ2V0T3JkZXJlZE5vZGVzKShcclxuICAgICAgICAgICcoLy9oMilbMV0vLi4vL2RpdltzdGFydHMtd2l0aChAZGF0YS1hdXRvbWF0aW9uLWlkLCBcImZvcm1GaWVsZC1cIildJywgZG9jdW1lbnQpKVxyXG4gICAgICAgIC5sZW5ndGggJiYgKGUgPSAoMCwgbC5nZXRPcmRlcmVkTm9kZXMpKFxyXG4gICAgICAgICAgJy8vZGl2W3N0YXJ0cy13aXRoKEBkYXRhLWF1dG9tYXRpb24taWQsIFwiZm9ybUZpZWxkLVwiKV0nLCBkb2N1bWVudCkpLCBlKSkge1xyXG4gICAgICBsZXQgZSA9IHQzKHIpO1xyXG4gICAgICBlICYmICh0W2UubGFiZWxdID0gZS52YWx1ZSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6InJ1bGVzLmRkYjY1MTUwLmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);