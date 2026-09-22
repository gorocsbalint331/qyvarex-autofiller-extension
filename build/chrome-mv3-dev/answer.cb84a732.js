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
})({"lscix":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\icims\\answer.js",
    "bundleId": "f98cb1a7cb84a732",
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
var j = z(require("a6d3a411c81c19ee"));
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

},{"a6d3a411c81c19ee":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"aj0XV":[function(require,module,exports) {
/**
 * Parcel module id: 9Ic4b
 * Resolved path: src/contents/sites/icims/answer.js
 * Dependencies:
 *   ./utils -> DQtoj  =>  src/contents/sites/icims/utils.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~constants -> 6VEjR  =>  src/constants.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/phone-country-code -> 8nENw  =>  src/core/phone-country-code.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "ICIMS_PACKET_VETERAN_LABEL", ()=>p), n.export(r, "ICIMS_PACKET_DISABILITY_LABEL", ()=>m), n.export(r, "ICIMS_PACKET_MATCHERS", ()=>v), n.export(r, "ICIMS_AGREEMENT_SIGNATURE_LABEL", ()=>w), n.export(r, "ICIMS_AUTO_CHECK_CHECKBOX_LABELS", ()=>S), n.export(r, "ICIMS_AUTO_ACCEPT_AGREEMENT_SIGNAL_GROUPS", ()=>E), n.export(r, "ICIMS_AUTO_ACCEPT_AGREEMENT_TITLES", ()=>x), n.export(r, "ICIMS_AUTO_CHECK_CHECKBOX_SIGNAL_GROUPS", ()=>C), n.export(r, "ICIMS_LEGACY_END_DATE_MATCH_LABELS", ()=>ee), n.export(r, "ICIMS_EMPLOYMENT_END_DATE_RECORD_KEYS", ()=>et), n.export(r, "ICIMS_EDUCATION_END_DATE_RECORD_KEYS", ()=>er), n.export(r, "resolveIcimsPacketLabel", ()=>eo), n.export(r, "isIcimsPacketSemanticTitle", ()=>ei), n.export(r, "formatRulesForRequest", ()=>eh), n.export(r, "expandIcimsPhoneSectionRulesForRequest", ()=>eb), n.export(r, "normalizeLegacySectionLabel", ()=>ey), n.export(r, "applyIcimsStateProvinceFallback", ()=>ek), n.export(r, "applyIcimsEducationProfileRawFallback", ()=>eT), n.export(r, "formatAnswer", ()=>eF);
var o = e("~constants"), i = e("~core/enums"), a = e("~core/phone-country-code"), l = e("./utils");
let s = 'Employer (If None, enter "N/A")', u = "Employer (If None, enter \u201cN/A\u201d)", c = 'Title (If None, enter "N/A")', d = "Title (If None, enter \u201cN/A\u201d)", f = "Did a current Ascension, AMITA, Presence Health, or their associated Health Ministries employee refer you to this role?", p = "Protected veteran status", m = "How do you know if you have a disability?", h = "Name", g = "Your Name", b = "Today's Date", y = "Signature", v = [
    {
        label: p,
        signalGroups: [
            [
                "voluntary_self_identification_of_veteran_status_template"
            ],
            [
                "vetstatus"
            ],
            [
                "protected veteran"
            ],
            [
                "veteran",
                "identification"
            ]
        ]
    },
    {
        label: m,
        signalGroups: [
            [
                "voluntary_self_identification_of_disability_template"
            ],
            [
                "disability",
                "identification"
            ]
        ]
    }
], w = "Agreement Signature Checking this box is intended to be and constitutes the equivalent of a handwritten signature. By this signature, you are (i) representing that the answers given are truthful and (ii) legally binding yourself to the provisions above following which you selected \u201cI agree.\u201d", S = [
    w,
    "I acknowledge the above notices"
], E = [
    [
        "applicant's certification & agreement",
        "cellular sales services group, llc",
        "consumer background check"
    ],
    [
        "authorization to use likeness",
        "your likeness",
        "cellular sales parties"
    ],
    [
        "dispute resolution agreement",
        "all disputes must be arbitrated",
        "american arbitration association"
    ]
], x = [
    "applicant's certification & agreement",
    "authorization to use likeness",
    "dispute resolution agreement"
], C = [
    [
        "please acknowledge",
        "pre-employment assessments"
    ],
    [
        "i agree",
        "false statements",
        "former employment",
        "references"
    ],
    [
        "ai usage acknowledgement",
        "i agree not to use ai",
        "assessments"
    ]
], A = {
    pick: [
        p,
        "Protected Veteran Status",
        "Veteran Status",
        "Voluntary Self-Identification of Veteran Status"
    ],
    spread: [
        p
    ]
}, k = {
    pick: [
        m,
        "Disability",
        "Disability status",
        "Voluntary Self-Identification of Disability"
    ],
    spread: [
        m,
        "Disability",
        "Disability status"
    ]
}, T = {
    pick: [
        h,
        g
    ],
    spread: [
        h,
        g
    ]
}, F = {
    pick: [
        b,
        "Date",
        "Today's date"
    ],
    spread: [
        b
    ]
}, I = {
    pick: [
        y,
        "signature"
    ],
    spread: [
        y
    ]
}, j = {
    pick: [
        "State/Province",
        "State",
        "Province",
        "state",
        "stateProvince"
    ],
    spread: [
        "State/Province"
    ]
}, D = {
    pick: [
        "Phones - Type",
        "Phones - Type - enter mobile for text alerts",
        "Phone - Type",
        "Phone - Type - enter mobile for text alerts",
        "Phone Type",
        "Type"
    ],
    spread: [
        "Phone Type"
    ]
}, P = {
    pick: [
        "Phones - Type",
        "Phones - Type - enter mobile for text alerts",
        "Phone Type",
        "Type"
    ]
}, _ = {
    pick: [
        "Phones - Phone Number",
        "Phones - Number",
        "Phone - Phone Number",
        "Phone Number",
        "Number",
        "phoneNumber"
    ],
    spread: [
        "Phone Number",
        "Number (xxx) xxx-xxxx"
    ]
}, L = {
    pick: [
        "Phones - Phone Number",
        "Phones - Number",
        "Phone Number",
        "Number",
        "phoneNumber"
    ]
}, R = {
    pick: [
        "Phones - Phone Country Code",
        "Phone - Phone Country Code",
        "Phone Country Code",
        "Country Code",
        "countryCode"
    ],
    spread: [
        "Phone Country Code",
        "Country Code"
    ]
}, O = {
    pick: [
        "Phones - Phone Country Code",
        "Phone Country Code",
        "Country Code",
        "countryCode"
    ]
}, M = {
    pick: [
        "Salary Currency",
        "Currency"
    ],
    spread: [
        "Salary Currency",
        "Currency"
    ]
}, N = {
    pick: [
        "Desired Salary",
        "Salary",
        "Amount",
        "Amount (Numbers only)"
    ],
    spread: [
        "Desired Salary",
        "Amount (Numbers only)"
    ]
}, $ = {
    pick: [
        "Salary Time Frame",
        "Time Frame"
    ],
    spread: [
        "Salary Time Frame",
        "Time Frame"
    ]
}, B = {
    pick: [
        "Salary Currency",
        "Desired Salary - Currency",
        "Desired Salary Max - Currency",
        "Currency"
    ],
    spread: [
        "Salary Currency",
        "Currency"
    ]
}, q = {
    pick: [
        "Desired Salary - Amount (Numbers only)",
        "Desired Salary - Amount",
        "Desired Salary Max - Amount (Numbers only)",
        "Desired Salary Max - Amount",
        "Desired Salary",
        "Salary",
        "Amount",
        "Amount (Numbers only)"
    ],
    spread: [
        "Desired Salary",
        "Amount (Numbers only)"
    ]
}, U = {
    pick: [
        "Desired Salary - Time Frame",
        "Desired Salary Max - Time Frame",
        "Salary Time Frame",
        "Time Frame"
    ],
    spread: [
        "Salary Time Frame",
        "Time Frame"
    ]
}, H = 'select[id$="Salary_Currency"], select[name$="Salary_Currency"], .iCIMS_Forms_SalaryField select[id$="_Currency"], .iCIMS_Forms_SalaryField select[name$="_Currency"]', Y = 'select[id$="Salary_Timeframe"], select[name$="Salary_Timeframe"], .iCIMS_Forms_SalaryField select[id$="_Timeframe"], .iCIMS_Forms_SalaryField select[name$="_Timeframe"], .iCIMS_Forms_SalaryField select[id$="_TimeFrame"], .iCIMS_Forms_SalaryField select[name$="_TimeFrame"]', z = {
    pick: [
        "organization",
        "Organization",
        "Employer",
        s,
        u
    ],
    spread: [
        "organization",
        "Organization",
        "Employer",
        s,
        u
    ]
}, V = {
    pick: [
        "jobTitle",
        "Job Title",
        "Title",
        c,
        d
    ],
    spread: [
        "jobTitle",
        "Job Title",
        "Title",
        c,
        d
    ]
}, W = [
    "School",
    "school",
    "organization",
    "Organization"
], G = [
    "rawSchool",
    "School original answer",
    "School",
    "School/Institution",
    "school",
    "organization",
    "Organization"
], K = [
    "School",
    "School/Institution"
], X = [
    "Study",
    "Major/Area of Study"
], J = [
    "rawMajor"
], Q = [
    "Study",
    "Major"
], Z = [
    "Study",
    "Major",
    "Area of Study",
    "Major/Area of Study"
], ee = [
    "To"
], et = [
    "End",
    "End Date",
    "End Date (Leave blank if current employer)"
], er = [
    "End",
    "End Date",
    "School End Date",
    "Graduation Date",
    "Completion Date"
];
function en(e1, t) {
    let r1 = (0, l.normalizeIcimsWhitespace)(e1).toLowerCase();
    return !!r1 && t.some((e1)=>e1.every((e1)=>r1.includes(e1)));
}
function eo(e1, t, r1 = "") {
    let n = [
        e1,
        t,
        r1
    ].join(" ");
    return v.find(({ signalGroups: e1 })=>en(n, e1))?.label ?? "";
}
function ei(e1) {
    return v.some(({ signalGroups: t })=>en(e1, t));
}
function ea(e1) {
    let t = (0, l.normalizeIcimsRuleLabel)(e1).toLowerCase();
    return "school/institution" === t ? "Please return the school name in English." : "what is your desired salary?" === t ? "Please return your desired salary. It must be a number." : "amount (numbers only)" === t || "amount" === t ? "Please return a specific number for the expected salary." : "time frame" === t || "salary time frame" === t ? "Please return the exact option value, not a number." : "if yes, what is/was date of your separation?" === t ? "This question asks for the specific date you left your job." : "are you open to relocation? if yes, please list cities you are willing to relocate to where we have an office location. current locations are wilkes-barre, pa, new york, ny, parsippany, nj, rancho cordova, ca. upcoming office locations: philadelphia, pa, conshohocken, pa, atlanta, ga, dallas, tx, chicago, il, scottsdale, az." === t ? "Please return either 'Yes' or 'No'." : void 0;
}
function el(e1) {
    let t = ep(e1, 'select[id$="PhoneType"], select[name$="PhoneType"]');
    return t;
}
function es(e1) {
    let t = String(e1 ?? "").replace(/\D/g, "");
    return t ? `+${t}` : "";
}
function eu(e1) {
    let t = Array.isArray(e1) ? e1[0] : e1, r1 = (0, l.normalizeIcimsWhitespace)(String(t ?? ""));
    if (!r1) return "";
    let n = (0, a.resolveIso2FromCountryName)(r1);
    return n ? "us" === n ? "United States" : "ca" === n ? "Canada" : r1 : "";
}
function ec(e1) {
    let t = es(e1);
    return t ? "+1" === t ? "United States" : t : eu(e1);
}
function ed(e1, t, r1) {
    return {
        countryCode: ec((0, a.resolvePhoneCountrySource)(e1, r1, t)),
        phoneNumber: (0, a.resolvePhoneFieldValue)(e1, r1, t)
    };
}
function ef(e1) {
    let t = (0, l.normalizeIcimsWhitespace)(e1);
    return t ? o.STATE_MAP[t.toUpperCase()] ?? t : "";
}
function ep(e1, t) {
    let r1 = (0, l.normalizeIcimsWhitespace)(e1);
    if (!r1) return "";
    if ("undefined" == typeof document) return r1;
    let n = document.querySelector(t);
    if (!n) return r1;
    let o = Array.from(n.options).map((e1)=>({
            text: (0, l.normalizeIcimsWhitespace)(e1.text),
            value: (0, l.normalizeIcimsWhitespace)(e1.value)
        })).filter((e1)=>!!e1.text && "\u2014 Make a Selection \u2014" !== e1.text);
    return o.find((e1)=>e1.text === r1 || e1.value === r1)?.text || (Number.isInteger(Number(r1)) ? o[Number(r1)]?.text : "") || r1;
}
function em(e1) {
    let t = (0, l.normalizeIcimsRuleLabel)(e1.label), r1 = ("description" in e1 ? e1.description : void 0) ?? ea(t), n = {
        ...e1,
        label: t,
        ...r1 ? {
            description: r1
        } : {}
    }, o = "children" in e1 ? e1.children : void 0;
    if (Array.isArray(o)) {
        let e1 = [];
        for (let t of o)e1.push(em(t));
        n.children = e1;
    }
    return n;
}
function eh(e1) {
    let t = [], r1 = new Set;
    for (let n of e1){
        if (n.type === i.FIELD_TYPE.EDUCATION || n.type === i.FIELD_TYPE.EMPLOYMENT) {
            let e1 = String(n.type);
            if (r1.has(e1)) continue;
            r1.add(e1);
        }
        t.push(em(n));
    }
    return t;
}
function eg(e1) {
    let t = (0, l.normalizeIcimsWhitespace)(e1).toLowerCase();
    return /^phones?\b/.test(t) || /\bphone number\b/.test(t);
}
function eb(e1) {
    return e1.flatMap((e1)=>e1.type === i.FIELD_TYPE.SECTION && eg(e1.label) && Array.isArray(e1.children) ? e1.children ?? [] : [
            e1
        ]);
}
function ey(e1) {
    let t = (0, l.normalizeIcimsWhitespace)(e1).replace(/[:\uff1a]\s*$/, "");
    if (!t) return "";
    let r1 = t.toLowerCase();
    return "employer name" === r1 || "name of employer" === r1 ? "Employer" : "school name" === r1 || "school/institution name" === r1 ? "School" : "from" === r1 ? "Start Date" : "to" === r1 ? "End Date" : t;
}
function ev(e1) {
    if ("boolean" == typeof e1) return e1;
    if ("number" == typeof e1) return 1 === e1;
    if ("string" == typeof e1) {
        let t = e1.trim().toLowerCase();
        return "true" === t || "yes" === t || "y" === t || "1" === t;
    }
    return !1;
}
function ew(e1) {
    if (null == e1) return "";
    let t = Array.isArray(e1) ? e1[0] : e1;
    return null == t ? "" : String(t).trim();
}
function eS(e1) {
    let t = (0, l.normalizeIcimsWhitespace)(String(e1 ?? ""));
    if (!t) return null;
    let r1 = t.match(/^([^:\uff1a]+?)\s*[:\uff1a]\s*(.+)$/);
    return r1 ? {
        "Phone Type": r1[1].trim(),
        "Phone Number": r1[2].trim()
    } : {
        "Phone Number": t
    };
}
function eE(e1) {
    if (e1 && "object" == typeof e1 && !Array.isArray(e1)) return e1;
    if (!Array.isArray(e1)) return null;
    let t = e1.find((e1)=>e1 && "object" == typeof e1 && !Array.isArray(e1));
    if (t) return t;
    let r1 = e1.find((e1)=>"string" == typeof e1 && (0, l.normalizeIcimsWhitespace)(e1));
    return r1 ? eS(r1) : null;
}
function ex(e1, t) {
    if (!e1) return "";
    for (let r1 of t){
        let t = ew(e1[r1]);
        if (t) return t;
    }
    return "";
}
function eC(e1) {
    let t = (0, l.normalizeIcimsWhitespace)(e1).toLowerCase();
    return "other" === t || "others" === t;
}
function eA(e1, t, r1) {
    for (let n of r1)e1[n] = t;
}
function ek(e1, t) {
    let r1 = String(t ?? "").trim();
    if (!r1) return e1;
    let n = e1.regular ?? {}, o = ex(n, j.pick);
    return o || (n["State/Province"] = r1, e1.regular = n), e1;
}
function eT(e1, t) {
    let r1 = e1.education, n = t?.education;
    return Array.isArray(r1) && Array.isArray(n) && r1.forEach((e1, t)=>{
        let r1 = n[t];
        if (e1 && r1) {
            if (!ex(e1, [
                "rawSchool"
            ])) {
                let t = ex(r1, [
                    "organization"
                ]);
                t && (e1.rawSchool = t);
            }
            if (!ex(e1, [
                "rawDegree"
            ])) {
                let t = ex(r1, [
                    "accreditation"
                ]);
                t && (e1.rawDegree = t);
            }
        }
    }), e1;
}
function eF(e1) {
    if (e1.regular) {
        let t = ex(e1.regular, [
            "Referral",
            "referral"
        ]);
        t && (e1.regular[f] = t);
        let r1 = ex(e1.regular, A.pick);
        r1 && eA(e1.regular, r1.trim(), A.spread);
        let n = ex(e1.regular, k.pick);
        n && eA(e1.regular, n, k.spread);
        let o = ex(e1.regular, T.pick);
        o && eA(e1.regular, o, T.spread);
        let i = ex(e1.regular, F.pick);
        i && eA(e1.regular, i, F.spread);
        let a = ex(e1.regular, I.pick);
        a && eA(e1.regular, ev(a) ? "true" : a, I.spread);
        let s = ex(e1.regular, j.pick), u = s ? ef(s) : "";
        u && eA(e1.regular, u, j.spread);
        let c = e1.regular.Phones ?? e1.regular.Phone, d = eE(c), p = ex(e1.regular, D.pick) || ex(d, P.pick), m = p ? el(p) : "";
        m && eA(e1.regular, m, D.spread);
        let h = ex(e1.regular, _.pick) || ex(d, L.pick), g = ex(e1.regular, R.pick) || ex(d, O.pick), b = h ? ed(h, e1.country, g) : null, y = g ? ec(g) : b?.countryCode ?? "";
        h && eA(e1.regular, b?.phoneNumber || h, _.spread), y && eA(e1.regular, y, R.spread);
        let v = e1.regular["Desired Salary"] ?? e1.regular["Desired Salary Max"] ?? e1.regular.Salary, w = v && "object" == typeof v && !Array.isArray(v) ? v : null;
        if (w) {
            let t = ex(w, M.pick);
            t && eA(e1.regular, t, M.spread);
            let r1 = ex(w, N.pick);
            r1 && eA(e1.regular, r1, N.spread);
            let n = ex(w, $.pick);
            n && eA(e1.regular, n, $.spread);
        }
        let S = ex(e1.regular, B.pick), E = ex(e1.regular, q.pick), x = ex(e1.regular, U.pick), C = S ? ep(S, H) : "", z = [
            "undefined",
            "null"
        ].includes((0, l.normalizeIcimsWhitespace)(E)) ? "" : (0, l.normalizeIcimsWhitespace)(E), V = x ? ep(x, Y) : "";
        C && eA(e1.regular, C, B.spread), z && eA(e1.regular, z, q.spread), V && eA(e1.regular, V, U.spread);
    }
    if (e1.workExperience?.length) for (let t of e1.workExperience){
        let e1 = ex(t, z.pick) || "N/A", r1 = ex(t, V.pick) || "N/A";
        eA(t, e1, z.spread), eA(t, r1, V.spread), t?.Start && (t["Start Date"] = t.Start), t?.End && (t["End Date"] = t.End, t["End Date (Leave blank if current employer)"] = t.End);
    }
    if (e1.education?.length) for (let t of e1.education){
        let e1 = ex(t, G);
        e1 && (t.rawSchool = e1);
        let r1 = ex(t, J);
        if (r1) t.rawMajor = r1;
        else for (let e1 of Q){
            let r1 = ex(t, [
                e1
            ]);
            if (r1 && !eC(r1)) {
                t.rawMajor = r1;
                break;
            }
        }
        let n = ex(t, W);
        n && eA(t, n, K);
        let o = ex(t, X);
        o && eA(t, o, Z), t?.Start && (t["Start Date"] = t.Start), t?.End && (t["End Date"] = t.End, t["School End Date"] = t.End, t["Graduation Date"] = t.End, t["Completion Date"] = t.End);
    }
    return e1;
}

},{}]},["lscix","aj0XV"], "aj0XV", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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LEtBQUksQ0FBQSxHQUFFLFlBQVUsQ0FBQTtZQUFFO1FBQUM7SUFBQyxJQUFHO0FBQUM7QUFBQyxTQUFTLEdBQUcsRUFBQztJQUFFLElBQUcsR0FBRSxTQUFRO1FBQUMsSUFBSSxJQUFFLEdBQUcsR0FBRSxTQUFRO1lBQUM7WUFBVztTQUFXO1FBQUUsS0FBSSxDQUFBLEdBQUUsT0FBTyxDQUFDLEVBQUUsR0FBQyxDQUFBO1FBQUcsSUFBSSxLQUFFLEdBQUcsR0FBRSxTQUFRLEVBQUU7UUFBTSxNQUFHLEdBQUcsR0FBRSxTQUFRLEdBQUUsUUFBTyxFQUFFO1FBQVEsSUFBSSxJQUFFLEdBQUcsR0FBRSxTQUFRLEVBQUU7UUFBTSxLQUFHLEdBQUcsR0FBRSxTQUFRLEdBQUUsRUFBRTtRQUFRLElBQUksSUFBRSxHQUFHLEdBQUUsU0FBUSxFQUFFO1FBQU0sS0FBRyxHQUFHLEdBQUUsU0FBUSxHQUFFLEVBQUU7UUFBUSxJQUFJLElBQUUsR0FBRyxHQUFFLFNBQVEsRUFBRTtRQUFNLEtBQUcsR0FBRyxHQUFFLFNBQVEsR0FBRSxFQUFFO1FBQVEsSUFBSSxJQUFFLEdBQUcsR0FBRSxTQUFRLEVBQUU7UUFBTSxLQUFHLEdBQUcsR0FBRSxTQUFRLEdBQUcsS0FBRyxTQUFPLEdBQUUsRUFBRTtRQUFRLElBQUksSUFBRSxHQUFHLEdBQUUsU0FBUSxFQUFFLE9BQU0sSUFBRSxJQUFFLEdBQUcsS0FBRztRQUFHLEtBQUcsR0FBRyxHQUFFLFNBQVEsR0FBRSxFQUFFO1FBQVEsSUFBSSxJQUFFLEdBQUUsUUFBUSxVQUFRLEdBQUUsUUFBUSxPQUFNLElBQUUsR0FBRyxJQUFHLElBQUUsR0FBRyxHQUFFLFNBQVEsRUFBRSxTQUFPLEdBQUcsR0FBRSxFQUFFLE9BQU0sSUFBRSxJQUFFLEdBQUcsS0FBRztRQUFHLEtBQUcsR0FBRyxHQUFFLFNBQVEsR0FBRSxFQUFFO1FBQVEsSUFBSSxJQUFFLEdBQUcsR0FBRSxTQUFRLEVBQUUsU0FBTyxHQUFHLEdBQUUsRUFBRSxPQUFNLElBQUUsR0FBRyxHQUFFLFNBQVEsRUFBRSxTQUFPLEdBQUcsR0FBRSxFQUFFLE9BQU0sSUFBRSxJQUFFLEdBQUcsR0FBRSxHQUFFLFNBQVEsS0FBRyxNQUFLLElBQUUsSUFBRSxHQUFHLEtBQUcsR0FBRyxlQUFhO1FBQUcsS0FBRyxHQUFHLEdBQUUsU0FBUSxHQUFHLGVBQWEsR0FBRSxFQUFFLFNBQVEsS0FBRyxHQUFHLEdBQUUsU0FBUSxHQUFFLEVBQUU7UUFBUSxJQUFJLElBQUUsR0FBRSxPQUFPLENBQUMsaUJBQWlCLElBQUUsR0FBRSxPQUFPLENBQUMscUJBQXFCLElBQUUsR0FBRSxRQUFRLFFBQU8sSUFBRSxLQUFHLFlBQVUsT0FBTyxLQUFHLENBQUMsTUFBTSxRQUFRLEtBQUcsSUFBRTtRQUFLLElBQUcsR0FBRTtZQUFDLElBQUksSUFBRSxHQUFHLEdBQUUsRUFBRTtZQUFNLEtBQUcsR0FBRyxHQUFFLFNBQVEsR0FBRSxFQUFFO1lBQVEsSUFBSSxLQUFFLEdBQUcsR0FBRSxFQUFFO1lBQU0sTUFBRyxHQUFHLEdBQUUsU0FBUSxJQUFFLEVBQUU7WUFBUSxJQUFJLElBQUUsR0FBRyxHQUFFLEVBQUU7WUFBTSxLQUFHLEdBQUcsR0FBRSxTQUFRLEdBQUUsRUFBRTtRQUFPO1FBQUMsSUFBSSxJQUFFLEdBQUcsR0FBRSxTQUFRLEVBQUUsT0FBTSxJQUFFLEdBQUcsR0FBRSxTQUFRLEVBQUUsT0FBTSxJQUFFLEdBQUcsR0FBRSxTQUFRLEVBQUUsT0FBTSxJQUFFLElBQUUsR0FBRyxHQUFFLEtBQUcsSUFBRyxJQUFFO1lBQUM7WUFBWTtTQUFPLENBQUMsU0FBUyxBQUFDLENBQUEsR0FBRSxFQUFFLHdCQUF1QixFQUFHLE1BQUksS0FBRyxBQUFDLENBQUEsR0FBRSxFQUFFLHdCQUF1QixFQUFHLElBQUcsSUFBRSxJQUFFLEdBQUcsR0FBRSxLQUFHO1FBQUcsS0FBRyxHQUFHLEdBQUUsU0FBUSxHQUFFLEVBQUUsU0FBUSxLQUFHLEdBQUcsR0FBRSxTQUFRLEdBQUUsRUFBRSxTQUFRLEtBQUcsR0FBRyxHQUFFLFNBQVEsR0FBRSxFQUFFO0lBQU87SUFBQyxJQUFHLEdBQUUsZ0JBQWdCLFFBQU8sS0FBSSxJQUFJLEtBQUssR0FBRSxlQUFlO1FBQUMsSUFBSSxLQUFFLEdBQUcsR0FBRSxFQUFFLFNBQU8sT0FBTSxLQUFFLEdBQUcsR0FBRSxFQUFFLFNBQU87UUFBTSxHQUFHLEdBQUUsSUFBRSxFQUFFLFNBQVEsR0FBRyxHQUFFLElBQUUsRUFBRSxTQUFRLEdBQUcsU0FBUSxDQUFBLENBQUMsQ0FBQyxhQUFhLEdBQUMsRUFBRSxLQUFJLEdBQUcsR0FBRyxPQUFNLENBQUEsQ0FBQyxDQUFDLFdBQVcsR0FBQyxFQUFFLEtBQUksQ0FBQyxDQUFDLDZDQUE2QyxHQUFDLEVBQUUsR0FBRTtJQUFFO0lBQUMsSUFBRyxHQUFFLFdBQVcsUUFBTyxLQUFJLElBQUksS0FBSyxHQUFFLFVBQVU7UUFBQyxJQUFJLEtBQUUsR0FBRyxHQUFFO1FBQUcsTUFBSSxDQUFBLEVBQUUsWUFBVSxFQUFBO1FBQUcsSUFBSSxLQUFFLEdBQUcsR0FBRTtRQUFHLElBQUcsSUFBRSxFQUFFLFdBQVM7YUFBTyxLQUFJLElBQUksTUFBSyxFQUFFO1lBQUMsSUFBSSxLQUFFLEdBQUcsR0FBRTtnQkFBQzthQUFFO1lBQUUsSUFBRyxNQUFHLENBQUMsR0FBRyxLQUFHO2dCQUFDLEVBQUUsV0FBUztnQkFBRTtZQUFLO1FBQUM7UUFBQyxJQUFJLElBQUUsR0FBRyxHQUFFO1FBQUcsS0FBRyxHQUFHLEdBQUUsR0FBRTtRQUFHLElBQUksSUFBRSxHQUFHLEdBQUU7UUFBRyxLQUFHLEdBQUcsR0FBRSxHQUFFLElBQUcsR0FBRyxTQUFRLENBQUEsQ0FBQyxDQUFDLGFBQWEsR0FBQyxFQUFFLEtBQUksR0FBRyxHQUFHLE9BQU0sQ0FBQSxDQUFDLENBQUMsV0FBVyxHQUFDLEVBQUUsS0FBSSxDQUFDLENBQUMsa0JBQWtCLEdBQUMsRUFBRSxLQUFJLENBQUMsQ0FBQyxrQkFBa0IsR0FBQyxFQUFFLEtBQUksQ0FBQyxDQUFDLGtCQUFrQixHQUFDLEVBQUUsR0FBRTtJQUFFO0lBQUMsT0FBTztBQUFDIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS1hZjgzNThiN2RjNGE0MzIyLmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL2ljaW1zL2Fuc3dlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxpY2ltc1xcXFxhbnN3ZXIuanNcIixcImJ1bmRsZUlkXCI6XCJmOThjYjFhN2NiODRhNzMyXCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogOUljNGJcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL2ljaW1zL2Fuc3dlci5qc1xyXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi91dGlscyAtPiBEUXRvaiAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9pY2ltcy91dGlscy5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgfmNvbnN0YW50cyAtPiA2VkVqUiAgPT4gIHNyYy9jb25zdGFudHMuanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqICAgfmNvcmUvcGhvbmUtY291bnRyeS1jb2RlIC0+IDhuRU53ICA9PiAgc3JjL2NvcmUvcGhvbmUtY291bnRyeS1jb2RlLmpzXHJcbiAqL1xyXG5cclxudmFyIG49ZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7bi5kZWZpbmVJbnRlcm9wRmxhZyhyKSxuLmV4cG9ydChyLFwiSUNJTVNfUEFDS0VUX1ZFVEVSQU5fTEFCRUxcIiwoKT0+cCksbi5leHBvcnQocixcIklDSU1TX1BBQ0tFVF9ESVNBQklMSVRZX0xBQkVMXCIsKCk9Pm0pLG4uZXhwb3J0KHIsXCJJQ0lNU19QQUNLRVRfTUFUQ0hFUlNcIiwoKT0+diksbi5leHBvcnQocixcIklDSU1TX0FHUkVFTUVOVF9TSUdOQVRVUkVfTEFCRUxcIiwoKT0+dyksbi5leHBvcnQocixcIklDSU1TX0FVVE9fQ0hFQ0tfQ0hFQ0tCT1hfTEFCRUxTXCIsKCk9PlMpLG4uZXhwb3J0KHIsXCJJQ0lNU19BVVRPX0FDQ0VQVF9BR1JFRU1FTlRfU0lHTkFMX0dST1VQU1wiLCgpPT5FKSxuLmV4cG9ydChyLFwiSUNJTVNfQVVUT19BQ0NFUFRfQUdSRUVNRU5UX1RJVExFU1wiLCgpPT54KSxuLmV4cG9ydChyLFwiSUNJTVNfQVVUT19DSEVDS19DSEVDS0JPWF9TSUdOQUxfR1JPVVBTXCIsKCk9PkMpLG4uZXhwb3J0KHIsXCJJQ0lNU19MRUdBQ1lfRU5EX0RBVEVfTUFUQ0hfTEFCRUxTXCIsKCk9PmVlKSxuLmV4cG9ydChyLFwiSUNJTVNfRU1QTE9ZTUVOVF9FTkRfREFURV9SRUNPUkRfS0VZU1wiLCgpPT5ldCksbi5leHBvcnQocixcIklDSU1TX0VEVUNBVElPTl9FTkRfREFURV9SRUNPUkRfS0VZU1wiLCgpPT5lciksbi5leHBvcnQocixcInJlc29sdmVJY2ltc1BhY2tldExhYmVsXCIsKCk9PmVvKSxuLmV4cG9ydChyLFwiaXNJY2ltc1BhY2tldFNlbWFudGljVGl0bGVcIiwoKT0+ZWkpLG4uZXhwb3J0KHIsXCJmb3JtYXRSdWxlc0ZvclJlcXVlc3RcIiwoKT0+ZWgpLG4uZXhwb3J0KHIsXCJleHBhbmRJY2ltc1Bob25lU2VjdGlvblJ1bGVzRm9yUmVxdWVzdFwiLCgpPT5lYiksbi5leHBvcnQocixcIm5vcm1hbGl6ZUxlZ2FjeVNlY3Rpb25MYWJlbFwiLCgpPT5leSksbi5leHBvcnQocixcImFwcGx5SWNpbXNTdGF0ZVByb3ZpbmNlRmFsbGJhY2tcIiwoKT0+ZWspLG4uZXhwb3J0KHIsXCJhcHBseUljaW1zRWR1Y2F0aW9uUHJvZmlsZVJhd0ZhbGxiYWNrXCIsKCk9PmVUKSxuLmV4cG9ydChyLFwiZm9ybWF0QW5zd2VyXCIsKCk9PmVGKTt2YXIgbz1lKFwifmNvbnN0YW50c1wiKSxpPWUoXCJ+Y29yZS9lbnVtc1wiKSxhPWUoXCJ+Y29yZS9waG9uZS1jb3VudHJ5LWNvZGVcIiksbD1lKFwiLi91dGlsc1wiKTtsZXQgcz0nRW1wbG95ZXIgKElmIE5vbmUsIGVudGVyIFwiTi9BXCIpJyx1PVwiRW1wbG95ZXIgKElmIE5vbmUsIGVudGVyIFxcdTIwMWNOL0FcXHUyMDFkKVwiLGM9J1RpdGxlIChJZiBOb25lLCBlbnRlciBcIk4vQVwiKScsZD1cIlRpdGxlIChJZiBOb25lLCBlbnRlciBcXHUyMDFjTi9BXFx1MjAxZClcIixmPVwiRGlkIGEgY3VycmVudCBBc2NlbnNpb24sIEFNSVRBLCBQcmVzZW5jZSBIZWFsdGgsIG9yIHRoZWlyIGFzc29jaWF0ZWQgSGVhbHRoIE1pbmlzdHJpZXMgZW1wbG95ZWUgcmVmZXIgeW91IHRvIHRoaXMgcm9sZT9cIixwPVwiUHJvdGVjdGVkIHZldGVyYW4gc3RhdHVzXCIsbT1cIkhvdyBkbyB5b3Uga25vdyBpZiB5b3UgaGF2ZSBhIGRpc2FiaWxpdHk/XCIsaD1cIk5hbWVcIixnPVwiWW91ciBOYW1lXCIsYj1cIlRvZGF5J3MgRGF0ZVwiLHk9XCJTaWduYXR1cmVcIix2PVt7bGFiZWw6cCxzaWduYWxHcm91cHM6W1tcInZvbHVudGFyeV9zZWxmX2lkZW50aWZpY2F0aW9uX29mX3ZldGVyYW5fc3RhdHVzX3RlbXBsYXRlXCJdLFtcInZldHN0YXR1c1wiXSxbXCJwcm90ZWN0ZWQgdmV0ZXJhblwiXSxbXCJ2ZXRlcmFuXCIsXCJpZGVudGlmaWNhdGlvblwiXV19LHtsYWJlbDptLHNpZ25hbEdyb3VwczpbW1widm9sdW50YXJ5X3NlbGZfaWRlbnRpZmljYXRpb25fb2ZfZGlzYWJpbGl0eV90ZW1wbGF0ZVwiXSxbXCJkaXNhYmlsaXR5XCIsXCJpZGVudGlmaWNhdGlvblwiXV19XSx3PVwiQWdyZWVtZW50IFNpZ25hdHVyZSBDaGVja2luZyB0aGlzIGJveCBpcyBpbnRlbmRlZCB0byBiZSBhbmQgY29uc3RpdHV0ZXMgdGhlIGVxdWl2YWxlbnQgb2YgYSBoYW5kd3JpdHRlbiBzaWduYXR1cmUuIEJ5IHRoaXMgc2lnbmF0dXJlLCB5b3UgYXJlIChpKSByZXByZXNlbnRpbmcgdGhhdCB0aGUgYW5zd2VycyBnaXZlbiBhcmUgdHJ1dGhmdWwgYW5kIChpaSkgbGVnYWxseSBiaW5kaW5nIHlvdXJzZWxmIHRvIHRoZSBwcm92aXNpb25zIGFib3ZlIGZvbGxvd2luZyB3aGljaCB5b3Ugc2VsZWN0ZWQgXFx1MjAxY0kgYWdyZWUuXFx1MjAxZFwiLFM9W3csXCJJIGFja25vd2xlZGdlIHRoZSBhYm92ZSBub3RpY2VzXCJdLEU9W1tcImFwcGxpY2FudCdzIGNlcnRpZmljYXRpb24gJiBhZ3JlZW1lbnRcIixcImNlbGx1bGFyIHNhbGVzIHNlcnZpY2VzIGdyb3VwLCBsbGNcIixcImNvbnN1bWVyIGJhY2tncm91bmQgY2hlY2tcIl0sW1wiYXV0aG9yaXphdGlvbiB0byB1c2UgbGlrZW5lc3NcIixcInlvdXIgbGlrZW5lc3NcIixcImNlbGx1bGFyIHNhbGVzIHBhcnRpZXNcIl0sW1wiZGlzcHV0ZSByZXNvbHV0aW9uIGFncmVlbWVudFwiLFwiYWxsIGRpc3B1dGVzIG11c3QgYmUgYXJiaXRyYXRlZFwiLFwiYW1lcmljYW4gYXJiaXRyYXRpb24gYXNzb2NpYXRpb25cIl1dLHg9W1wiYXBwbGljYW50J3MgY2VydGlmaWNhdGlvbiAmIGFncmVlbWVudFwiLFwiYXV0aG9yaXphdGlvbiB0byB1c2UgbGlrZW5lc3NcIixcImRpc3B1dGUgcmVzb2x1dGlvbiBhZ3JlZW1lbnRcIl0sQz1bW1wicGxlYXNlIGFja25vd2xlZGdlXCIsXCJwcmUtZW1wbG95bWVudCBhc3Nlc3NtZW50c1wiXSxbXCJpIGFncmVlXCIsXCJmYWxzZSBzdGF0ZW1lbnRzXCIsXCJmb3JtZXIgZW1wbG95bWVudFwiLFwicmVmZXJlbmNlc1wiXSxbXCJhaSB1c2FnZSBhY2tub3dsZWRnZW1lbnRcIixcImkgYWdyZWUgbm90IHRvIHVzZSBhaVwiLFwiYXNzZXNzbWVudHNcIl1dLEE9e3BpY2s6W3AsXCJQcm90ZWN0ZWQgVmV0ZXJhbiBTdGF0dXNcIixcIlZldGVyYW4gU3RhdHVzXCIsXCJWb2x1bnRhcnkgU2VsZi1JZGVudGlmaWNhdGlvbiBvZiBWZXRlcmFuIFN0YXR1c1wiXSxzcHJlYWQ6W3BdfSxrPXtwaWNrOlttLFwiRGlzYWJpbGl0eVwiLFwiRGlzYWJpbGl0eSBzdGF0dXNcIixcIlZvbHVudGFyeSBTZWxmLUlkZW50aWZpY2F0aW9uIG9mIERpc2FiaWxpdHlcIl0sc3ByZWFkOlttLFwiRGlzYWJpbGl0eVwiLFwiRGlzYWJpbGl0eSBzdGF0dXNcIl19LFQ9e3BpY2s6W2gsZ10sc3ByZWFkOltoLGddfSxGPXtwaWNrOltiLFwiRGF0ZVwiLFwiVG9kYXkncyBkYXRlXCJdLHNwcmVhZDpbYl19LEk9e3BpY2s6W3ksXCJzaWduYXR1cmVcIl0sc3ByZWFkOlt5XX0saj17cGljazpbXCJTdGF0ZS9Qcm92aW5jZVwiLFwiU3RhdGVcIixcIlByb3ZpbmNlXCIsXCJzdGF0ZVwiLFwic3RhdGVQcm92aW5jZVwiXSxzcHJlYWQ6W1wiU3RhdGUvUHJvdmluY2VcIl19LEQ9e3BpY2s6W1wiUGhvbmVzIC0gVHlwZVwiLFwiUGhvbmVzIC0gVHlwZSAtIGVudGVyIG1vYmlsZSBmb3IgdGV4dCBhbGVydHNcIixcIlBob25lIC0gVHlwZVwiLFwiUGhvbmUgLSBUeXBlIC0gZW50ZXIgbW9iaWxlIGZvciB0ZXh0IGFsZXJ0c1wiLFwiUGhvbmUgVHlwZVwiLFwiVHlwZVwiXSxzcHJlYWQ6W1wiUGhvbmUgVHlwZVwiXX0sUD17cGljazpbXCJQaG9uZXMgLSBUeXBlXCIsXCJQaG9uZXMgLSBUeXBlIC0gZW50ZXIgbW9iaWxlIGZvciB0ZXh0IGFsZXJ0c1wiLFwiUGhvbmUgVHlwZVwiLFwiVHlwZVwiXX0sXz17cGljazpbXCJQaG9uZXMgLSBQaG9uZSBOdW1iZXJcIixcIlBob25lcyAtIE51bWJlclwiLFwiUGhvbmUgLSBQaG9uZSBOdW1iZXJcIixcIlBob25lIE51bWJlclwiLFwiTnVtYmVyXCIsXCJwaG9uZU51bWJlclwiXSxzcHJlYWQ6W1wiUGhvbmUgTnVtYmVyXCIsXCJOdW1iZXIgKHh4eCkgeHh4LXh4eHhcIl19LEw9e3BpY2s6W1wiUGhvbmVzIC0gUGhvbmUgTnVtYmVyXCIsXCJQaG9uZXMgLSBOdW1iZXJcIixcIlBob25lIE51bWJlclwiLFwiTnVtYmVyXCIsXCJwaG9uZU51bWJlclwiXX0sUj17cGljazpbXCJQaG9uZXMgLSBQaG9uZSBDb3VudHJ5IENvZGVcIixcIlBob25lIC0gUGhvbmUgQ291bnRyeSBDb2RlXCIsXCJQaG9uZSBDb3VudHJ5IENvZGVcIixcIkNvdW50cnkgQ29kZVwiLFwiY291bnRyeUNvZGVcIl0sc3ByZWFkOltcIlBob25lIENvdW50cnkgQ29kZVwiLFwiQ291bnRyeSBDb2RlXCJdfSxPPXtwaWNrOltcIlBob25lcyAtIFBob25lIENvdW50cnkgQ29kZVwiLFwiUGhvbmUgQ291bnRyeSBDb2RlXCIsXCJDb3VudHJ5IENvZGVcIixcImNvdW50cnlDb2RlXCJdfSxNPXtwaWNrOltcIlNhbGFyeSBDdXJyZW5jeVwiLFwiQ3VycmVuY3lcIl0sc3ByZWFkOltcIlNhbGFyeSBDdXJyZW5jeVwiLFwiQ3VycmVuY3lcIl19LE49e3BpY2s6W1wiRGVzaXJlZCBTYWxhcnlcIixcIlNhbGFyeVwiLFwiQW1vdW50XCIsXCJBbW91bnQgKE51bWJlcnMgb25seSlcIl0sc3ByZWFkOltcIkRlc2lyZWQgU2FsYXJ5XCIsXCJBbW91bnQgKE51bWJlcnMgb25seSlcIl19LCQ9e3BpY2s6W1wiU2FsYXJ5IFRpbWUgRnJhbWVcIixcIlRpbWUgRnJhbWVcIl0sc3ByZWFkOltcIlNhbGFyeSBUaW1lIEZyYW1lXCIsXCJUaW1lIEZyYW1lXCJdfSxCPXtwaWNrOltcIlNhbGFyeSBDdXJyZW5jeVwiLFwiRGVzaXJlZCBTYWxhcnkgLSBDdXJyZW5jeVwiLFwiRGVzaXJlZCBTYWxhcnkgTWF4IC0gQ3VycmVuY3lcIixcIkN1cnJlbmN5XCJdLHNwcmVhZDpbXCJTYWxhcnkgQ3VycmVuY3lcIixcIkN1cnJlbmN5XCJdfSxxPXtwaWNrOltcIkRlc2lyZWQgU2FsYXJ5IC0gQW1vdW50IChOdW1iZXJzIG9ubHkpXCIsXCJEZXNpcmVkIFNhbGFyeSAtIEFtb3VudFwiLFwiRGVzaXJlZCBTYWxhcnkgTWF4IC0gQW1vdW50IChOdW1iZXJzIG9ubHkpXCIsXCJEZXNpcmVkIFNhbGFyeSBNYXggLSBBbW91bnRcIixcIkRlc2lyZWQgU2FsYXJ5XCIsXCJTYWxhcnlcIixcIkFtb3VudFwiLFwiQW1vdW50IChOdW1iZXJzIG9ubHkpXCJdLHNwcmVhZDpbXCJEZXNpcmVkIFNhbGFyeVwiLFwiQW1vdW50IChOdW1iZXJzIG9ubHkpXCJdfSxVPXtwaWNrOltcIkRlc2lyZWQgU2FsYXJ5IC0gVGltZSBGcmFtZVwiLFwiRGVzaXJlZCBTYWxhcnkgTWF4IC0gVGltZSBGcmFtZVwiLFwiU2FsYXJ5IFRpbWUgRnJhbWVcIixcIlRpbWUgRnJhbWVcIl0sc3ByZWFkOltcIlNhbGFyeSBUaW1lIEZyYW1lXCIsXCJUaW1lIEZyYW1lXCJdfSxIPSdzZWxlY3RbaWQkPVwiU2FsYXJ5X0N1cnJlbmN5XCJdLCBzZWxlY3RbbmFtZSQ9XCJTYWxhcnlfQ3VycmVuY3lcIl0sIC5pQ0lNU19Gb3Jtc19TYWxhcnlGaWVsZCBzZWxlY3RbaWQkPVwiX0N1cnJlbmN5XCJdLCAuaUNJTVNfRm9ybXNfU2FsYXJ5RmllbGQgc2VsZWN0W25hbWUkPVwiX0N1cnJlbmN5XCJdJyxZPSdzZWxlY3RbaWQkPVwiU2FsYXJ5X1RpbWVmcmFtZVwiXSwgc2VsZWN0W25hbWUkPVwiU2FsYXJ5X1RpbWVmcmFtZVwiXSwgLmlDSU1TX0Zvcm1zX1NhbGFyeUZpZWxkIHNlbGVjdFtpZCQ9XCJfVGltZWZyYW1lXCJdLCAuaUNJTVNfRm9ybXNfU2FsYXJ5RmllbGQgc2VsZWN0W25hbWUkPVwiX1RpbWVmcmFtZVwiXSwgLmlDSU1TX0Zvcm1zX1NhbGFyeUZpZWxkIHNlbGVjdFtpZCQ9XCJfVGltZUZyYW1lXCJdLCAuaUNJTVNfRm9ybXNfU2FsYXJ5RmllbGQgc2VsZWN0W25hbWUkPVwiX1RpbWVGcmFtZVwiXScsej17cGljazpbXCJvcmdhbml6YXRpb25cIixcIk9yZ2FuaXphdGlvblwiLFwiRW1wbG95ZXJcIixzLHVdLHNwcmVhZDpbXCJvcmdhbml6YXRpb25cIixcIk9yZ2FuaXphdGlvblwiLFwiRW1wbG95ZXJcIixzLHVdfSxWPXtwaWNrOltcImpvYlRpdGxlXCIsXCJKb2IgVGl0bGVcIixcIlRpdGxlXCIsYyxkXSxzcHJlYWQ6W1wiam9iVGl0bGVcIixcIkpvYiBUaXRsZVwiLFwiVGl0bGVcIixjLGRdfSxXPVtcIlNjaG9vbFwiLFwic2Nob29sXCIsXCJvcmdhbml6YXRpb25cIixcIk9yZ2FuaXphdGlvblwiXSxHPVtcInJhd1NjaG9vbFwiLFwiU2Nob29sIG9yaWdpbmFsIGFuc3dlclwiLFwiU2Nob29sXCIsXCJTY2hvb2wvSW5zdGl0dXRpb25cIixcInNjaG9vbFwiLFwib3JnYW5pemF0aW9uXCIsXCJPcmdhbml6YXRpb25cIl0sSz1bXCJTY2hvb2xcIixcIlNjaG9vbC9JbnN0aXR1dGlvblwiXSxYPVtcIlN0dWR5XCIsXCJNYWpvci9BcmVhIG9mIFN0dWR5XCJdLEo9W1wicmF3TWFqb3JcIl0sUT1bXCJTdHVkeVwiLFwiTWFqb3JcIl0sWj1bXCJTdHVkeVwiLFwiTWFqb3JcIixcIkFyZWEgb2YgU3R1ZHlcIixcIk1ham9yL0FyZWEgb2YgU3R1ZHlcIl0sZWU9W1wiVG9cIl0sZXQ9W1wiRW5kXCIsXCJFbmQgRGF0ZVwiLFwiRW5kIERhdGUgKExlYXZlIGJsYW5rIGlmIGN1cnJlbnQgZW1wbG95ZXIpXCJdLGVyPVtcIkVuZFwiLFwiRW5kIERhdGVcIixcIlNjaG9vbCBFbmQgRGF0ZVwiLFwiR3JhZHVhdGlvbiBEYXRlXCIsXCJDb21wbGV0aW9uIERhdGVcIl07ZnVuY3Rpb24gZW4oZSx0KXtsZXQgcj0oMCxsLm5vcm1hbGl6ZUljaW1zV2hpdGVzcGFjZSkoZSkudG9Mb3dlckNhc2UoKTtyZXR1cm4hIXImJnQuc29tZShlPT5lLmV2ZXJ5KGU9PnIuaW5jbHVkZXMoZSkpKX1mdW5jdGlvbiBlbyhlLHQscj1cIlwiKXtsZXQgbj1bZSx0LHJdLmpvaW4oXCIgXCIpO3JldHVybiB2LmZpbmQoKHtzaWduYWxHcm91cHM6ZX0pPT5lbihuLGUpKT8ubGFiZWw/P1wiXCJ9ZnVuY3Rpb24gZWkoZSl7cmV0dXJuIHYuc29tZSgoe3NpZ25hbEdyb3Vwczp0fSk9PmVuKGUsdCkpfWZ1bmN0aW9uIGVhKGUpe2xldCB0PSgwLGwubm9ybWFsaXplSWNpbXNSdWxlTGFiZWwpKGUpLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJzY2hvb2wvaW5zdGl0dXRpb25cIj09PXQ/XCJQbGVhc2UgcmV0dXJuIHRoZSBzY2hvb2wgbmFtZSBpbiBFbmdsaXNoLlwiOlwid2hhdCBpcyB5b3VyIGRlc2lyZWQgc2FsYXJ5P1wiPT09dD9cIlBsZWFzZSByZXR1cm4geW91ciBkZXNpcmVkIHNhbGFyeS4gSXQgbXVzdCBiZSBhIG51bWJlci5cIjpcImFtb3VudCAobnVtYmVycyBvbmx5KVwiPT09dHx8XCJhbW91bnRcIj09PXQ/XCJQbGVhc2UgcmV0dXJuIGEgc3BlY2lmaWMgbnVtYmVyIGZvciB0aGUgZXhwZWN0ZWQgc2FsYXJ5LlwiOlwidGltZSBmcmFtZVwiPT09dHx8XCJzYWxhcnkgdGltZSBmcmFtZVwiPT09dD9cIlBsZWFzZSByZXR1cm4gdGhlIGV4YWN0IG9wdGlvbiB2YWx1ZSwgbm90IGEgbnVtYmVyLlwiOlwiaWYgeWVzLCB3aGF0IGlzL3dhcyBkYXRlIG9mIHlvdXIgc2VwYXJhdGlvbj9cIj09PXQ/XCJUaGlzIHF1ZXN0aW9uIGFza3MgZm9yIHRoZSBzcGVjaWZpYyBkYXRlIHlvdSBsZWZ0IHlvdXIgam9iLlwiOlwiYXJlIHlvdSBvcGVuIHRvIHJlbG9jYXRpb24/IGlmIHllcywgcGxlYXNlIGxpc3QgY2l0aWVzIHlvdSBhcmUgd2lsbGluZyB0byByZWxvY2F0ZSB0byB3aGVyZSB3ZSBoYXZlIGFuIG9mZmljZSBsb2NhdGlvbi4gY3VycmVudCBsb2NhdGlvbnMgYXJlIHdpbGtlcy1iYXJyZSwgcGEsIG5ldyB5b3JrLCBueSwgcGFyc2lwcGFueSwgbmosIHJhbmNobyBjb3Jkb3ZhLCBjYS4gdXBjb21pbmcgb2ZmaWNlIGxvY2F0aW9uczogcGhpbGFkZWxwaGlhLCBwYSwgY29uc2hvaG9ja2VuLCBwYSwgYXRsYW50YSwgZ2EsIGRhbGxhcywgdHgsIGNoaWNhZ28sIGlsLCBzY290dHNkYWxlLCBhei5cIj09PXQ/XCJQbGVhc2UgcmV0dXJuIGVpdGhlciAnWWVzJyBvciAnTm8nLlwiOnZvaWQgMH1mdW5jdGlvbiBlbChlKXtsZXQgdD1lcChlLCdzZWxlY3RbaWQkPVwiUGhvbmVUeXBlXCJdLCBzZWxlY3RbbmFtZSQ9XCJQaG9uZVR5cGVcIl0nKTtyZXR1cm4gdH1mdW5jdGlvbiBlcyhlKXtsZXQgdD1TdHJpbmcoZT8/XCJcIikucmVwbGFjZSgvXFxEL2csXCJcIik7cmV0dXJuIHQ/YCske3R9YDpcIlwifWZ1bmN0aW9uIGV1KGUpe2xldCB0PUFycmF5LmlzQXJyYXkoZSk/ZVswXTplLHI9KDAsbC5ub3JtYWxpemVJY2ltc1doaXRlc3BhY2UpKFN0cmluZyh0Pz9cIlwiKSk7aWYoIXIpcmV0dXJuXCJcIjtsZXQgbj0oMCxhLnJlc29sdmVJc28yRnJvbUNvdW50cnlOYW1lKShyKTtyZXR1cm4gbj9cInVzXCI9PT1uP1wiVW5pdGVkIFN0YXRlc1wiOlwiY2FcIj09PW4/XCJDYW5hZGFcIjpyOlwiXCJ9ZnVuY3Rpb24gZWMoZSl7bGV0IHQ9ZXMoZSk7cmV0dXJuIHQ/XCIrMVwiPT09dD9cIlVuaXRlZCBTdGF0ZXNcIjp0OmV1KGUpfWZ1bmN0aW9uIGVkKGUsdCxyKXtyZXR1cm57Y291bnRyeUNvZGU6ZWMoKDAsYS5yZXNvbHZlUGhvbmVDb3VudHJ5U291cmNlKShlLHIsdCkpLHBob25lTnVtYmVyOigwLGEucmVzb2x2ZVBob25lRmllbGRWYWx1ZSkoZSxyLHQpfX1mdW5jdGlvbiBlZihlKXtsZXQgdD0oMCxsLm5vcm1hbGl6ZUljaW1zV2hpdGVzcGFjZSkoZSk7cmV0dXJuIHQ/by5TVEFURV9NQVBbdC50b1VwcGVyQ2FzZSgpXT8/dDpcIlwifWZ1bmN0aW9uIGVwKGUsdCl7bGV0IHI9KDAsbC5ub3JtYWxpemVJY2ltc1doaXRlc3BhY2UpKGUpO2lmKCFyKXJldHVyblwiXCI7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGRvY3VtZW50KXJldHVybiByO2xldCBuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodCk7aWYoIW4pcmV0dXJuIHI7bGV0IG89QXJyYXkuZnJvbShuLm9wdGlvbnMpLm1hcChlPT4oe3RleHQ6KDAsbC5ub3JtYWxpemVJY2ltc1doaXRlc3BhY2UpKGUudGV4dCksdmFsdWU6KDAsbC5ub3JtYWxpemVJY2ltc1doaXRlc3BhY2UpKGUudmFsdWUpfSkpLmZpbHRlcihlPT4hIWUudGV4dCYmXCJcXHUyMDE0IE1ha2UgYSBTZWxlY3Rpb24gXFx1MjAxNFwiIT09ZS50ZXh0KTtyZXR1cm4gby5maW5kKGU9PmUudGV4dD09PXJ8fGUudmFsdWU9PT1yKT8udGV4dHx8KE51bWJlci5pc0ludGVnZXIoTnVtYmVyKHIpKT9vW051bWJlcihyKV0/LnRleHQ6XCJcIil8fHJ9ZnVuY3Rpb24gZW0oZSl7bGV0IHQ9KDAsbC5ub3JtYWxpemVJY2ltc1J1bGVMYWJlbCkoZS5sYWJlbCkscj0oXCJkZXNjcmlwdGlvblwiaW4gZT9lLmRlc2NyaXB0aW9uOnZvaWQgMCk/P2VhKHQpLG49ey4uLmUsbGFiZWw6dCwuLi5yP3tkZXNjcmlwdGlvbjpyfTp7fX0sbz1cImNoaWxkcmVuXCJpbiBlP2UuY2hpbGRyZW46dm9pZCAwO2lmKEFycmF5LmlzQXJyYXkobykpe2xldCBlPVtdO2ZvcihsZXQgdCBvZiBvKWUucHVzaChlbSh0KSk7bi5jaGlsZHJlbj1lfXJldHVybiBufWZ1bmN0aW9uIGVoKGUpe2xldCB0PVtdLHI9bmV3IFNldDtmb3IobGV0IG4gb2YgZSl7aWYobi50eXBlPT09aS5GSUVMRF9UWVBFLkVEVUNBVElPTnx8bi50eXBlPT09aS5GSUVMRF9UWVBFLkVNUExPWU1FTlQpe2xldCBlPVN0cmluZyhuLnR5cGUpO2lmKHIuaGFzKGUpKWNvbnRpbnVlO3IuYWRkKGUpfXQucHVzaChlbShuKSl9cmV0dXJuIHR9ZnVuY3Rpb24gZWcoZSl7bGV0IHQ9KDAsbC5ub3JtYWxpemVJY2ltc1doaXRlc3BhY2UpKGUpLnRvTG93ZXJDYXNlKCk7cmV0dXJuL15waG9uZXM/XFxiLy50ZXN0KHQpfHwvXFxicGhvbmUgbnVtYmVyXFxiLy50ZXN0KHQpfWZ1bmN0aW9uIGViKGUpe3JldHVybiBlLmZsYXRNYXAoZT0+ZS50eXBlPT09aS5GSUVMRF9UWVBFLlNFQ1RJT04mJmVnKGUubGFiZWwpJiZBcnJheS5pc0FycmF5KGUuY2hpbGRyZW4pP2UuY2hpbGRyZW4/P1tdOltlXSl9ZnVuY3Rpb24gZXkoZSl7bGV0IHQ9KDAsbC5ub3JtYWxpemVJY2ltc1doaXRlc3BhY2UpKGUpLnJlcGxhY2UoL1s6XFx1ZmYxYV1cXHMqJC8sXCJcIik7aWYoIXQpcmV0dXJuXCJcIjtsZXQgcj10LnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJlbXBsb3llciBuYW1lXCI9PT1yfHxcIm5hbWUgb2YgZW1wbG95ZXJcIj09PXI/XCJFbXBsb3llclwiOlwic2Nob29sIG5hbWVcIj09PXJ8fFwic2Nob29sL2luc3RpdHV0aW9uIG5hbWVcIj09PXI/XCJTY2hvb2xcIjpcImZyb21cIj09PXI/XCJTdGFydCBEYXRlXCI6XCJ0b1wiPT09cj9cIkVuZCBEYXRlXCI6dH1mdW5jdGlvbiBldihlKXtpZihcImJvb2xlYW5cIj09dHlwZW9mIGUpcmV0dXJuIGU7aWYoXCJudW1iZXJcIj09dHlwZW9mIGUpcmV0dXJuIDE9PT1lO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXtsZXQgdD1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpO3JldHVyblwidHJ1ZVwiPT09dHx8XCJ5ZXNcIj09PXR8fFwieVwiPT09dHx8XCIxXCI9PT10fXJldHVybiExfWZ1bmN0aW9uIGV3KGUpe2lmKG51bGw9PWUpcmV0dXJuXCJcIjtsZXQgdD1BcnJheS5pc0FycmF5KGUpP2VbMF06ZTtyZXR1cm4gbnVsbD09dD9cIlwiOlN0cmluZyh0KS50cmltKCl9ZnVuY3Rpb24gZVMoZSl7bGV0IHQ9KDAsbC5ub3JtYWxpemVJY2ltc1doaXRlc3BhY2UpKFN0cmluZyhlPz9cIlwiKSk7aWYoIXQpcmV0dXJuIG51bGw7bGV0IHI9dC5tYXRjaCgvXihbXjpcXHVmZjFhXSs/KVxccypbOlxcdWZmMWFdXFxzKiguKykkLyk7cmV0dXJuIHI/e1wiUGhvbmUgVHlwZVwiOnJbMV0udHJpbSgpLFwiUGhvbmUgTnVtYmVyXCI6clsyXS50cmltKCl9OntcIlBob25lIE51bWJlclwiOnR9fWZ1bmN0aW9uIGVFKGUpe2lmKGUmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiYhQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZTtpZighQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gbnVsbDtsZXQgdD1lLmZpbmQoZT0+ZSYmXCJvYmplY3RcIj09dHlwZW9mIGUmJiFBcnJheS5pc0FycmF5KGUpKTtpZih0KXJldHVybiB0O2xldCByPWUuZmluZChlPT5cInN0cmluZ1wiPT10eXBlb2YgZSYmKDAsbC5ub3JtYWxpemVJY2ltc1doaXRlc3BhY2UpKGUpKTtyZXR1cm4gcj9lUyhyKTpudWxsfWZ1bmN0aW9uIGV4KGUsdCl7aWYoIWUpcmV0dXJuXCJcIjtmb3IobGV0IHIgb2YgdCl7bGV0IHQ9ZXcoZVtyXSk7aWYodClyZXR1cm4gdH1yZXR1cm5cIlwifWZ1bmN0aW9uIGVDKGUpe2xldCB0PSgwLGwubm9ybWFsaXplSWNpbXNXaGl0ZXNwYWNlKShlKS50b0xvd2VyQ2FzZSgpO3JldHVyblwib3RoZXJcIj09PXR8fFwib3RoZXJzXCI9PT10fWZ1bmN0aW9uIGVBKGUsdCxyKXtmb3IobGV0IG4gb2YgcillW25dPXR9ZnVuY3Rpb24gZWsoZSx0KXtsZXQgcj1TdHJpbmcodD8/XCJcIikudHJpbSgpO2lmKCFyKXJldHVybiBlO2xldCBuPWUucmVndWxhcj8/e30sbz1leChuLGoucGljayk7cmV0dXJuIG98fChuW1wiU3RhdGUvUHJvdmluY2VcIl09cixlLnJlZ3VsYXI9biksZX1mdW5jdGlvbiBlVChlLHQpe2xldCByPWUuZWR1Y2F0aW9uLG49dD8uZWR1Y2F0aW9uO3JldHVybiBBcnJheS5pc0FycmF5KHIpJiZBcnJheS5pc0FycmF5KG4pJiZyLmZvckVhY2goKGUsdCk9PntsZXQgcj1uW3RdO2lmKGUmJnIpe2lmKCFleChlLFtcInJhd1NjaG9vbFwiXSkpe2xldCB0PWV4KHIsW1wib3JnYW5pemF0aW9uXCJdKTt0JiYoZS5yYXdTY2hvb2w9dCl9aWYoIWV4KGUsW1wicmF3RGVncmVlXCJdKSl7bGV0IHQ9ZXgocixbXCJhY2NyZWRpdGF0aW9uXCJdKTt0JiYoZS5yYXdEZWdyZWU9dCl9fX0pLGV9ZnVuY3Rpb24gZUYoZSl7aWYoZS5yZWd1bGFyKXtsZXQgdD1leChlLnJlZ3VsYXIsW1wiUmVmZXJyYWxcIixcInJlZmVycmFsXCJdKTt0JiYoZS5yZWd1bGFyW2ZdPXQpO2xldCByPWV4KGUucmVndWxhcixBLnBpY2spO3ImJmVBKGUucmVndWxhcixyLnRyaW0oKSxBLnNwcmVhZCk7bGV0IG49ZXgoZS5yZWd1bGFyLGsucGljayk7biYmZUEoZS5yZWd1bGFyLG4say5zcHJlYWQpO2xldCBvPWV4KGUucmVndWxhcixULnBpY2spO28mJmVBKGUucmVndWxhcixvLFQuc3ByZWFkKTtsZXQgaT1leChlLnJlZ3VsYXIsRi5waWNrKTtpJiZlQShlLnJlZ3VsYXIsaSxGLnNwcmVhZCk7bGV0IGE9ZXgoZS5yZWd1bGFyLEkucGljayk7YSYmZUEoZS5yZWd1bGFyLGV2KGEpP1widHJ1ZVwiOmEsSS5zcHJlYWQpO2xldCBzPWV4KGUucmVndWxhcixqLnBpY2spLHU9cz9lZihzKTpcIlwiO3UmJmVBKGUucmVndWxhcix1LGouc3ByZWFkKTtsZXQgYz1lLnJlZ3VsYXIuUGhvbmVzPz9lLnJlZ3VsYXIuUGhvbmUsZD1lRShjKSxwPWV4KGUucmVndWxhcixELnBpY2spfHxleChkLFAucGljayksbT1wP2VsKHApOlwiXCI7bSYmZUEoZS5yZWd1bGFyLG0sRC5zcHJlYWQpO2xldCBoPWV4KGUucmVndWxhcixfLnBpY2spfHxleChkLEwucGljayksZz1leChlLnJlZ3VsYXIsUi5waWNrKXx8ZXgoZCxPLnBpY2spLGI9aD9lZChoLGUuY291bnRyeSxnKTpudWxsLHk9Zz9lYyhnKTpiPy5jb3VudHJ5Q29kZT8/XCJcIjtoJiZlQShlLnJlZ3VsYXIsYj8ucGhvbmVOdW1iZXJ8fGgsXy5zcHJlYWQpLHkmJmVBKGUucmVndWxhcix5LFIuc3ByZWFkKTtsZXQgdj1lLnJlZ3VsYXJbXCJEZXNpcmVkIFNhbGFyeVwiXT8/ZS5yZWd1bGFyW1wiRGVzaXJlZCBTYWxhcnkgTWF4XCJdPz9lLnJlZ3VsYXIuU2FsYXJ5LHc9diYmXCJvYmplY3RcIj09dHlwZW9mIHYmJiFBcnJheS5pc0FycmF5KHYpP3Y6bnVsbDtpZih3KXtsZXQgdD1leCh3LE0ucGljayk7dCYmZUEoZS5yZWd1bGFyLHQsTS5zcHJlYWQpO2xldCByPWV4KHcsTi5waWNrKTtyJiZlQShlLnJlZ3VsYXIscixOLnNwcmVhZCk7bGV0IG49ZXgodywkLnBpY2spO24mJmVBKGUucmVndWxhcixuLCQuc3ByZWFkKX1sZXQgUz1leChlLnJlZ3VsYXIsQi5waWNrKSxFPWV4KGUucmVndWxhcixxLnBpY2spLHg9ZXgoZS5yZWd1bGFyLFUucGljayksQz1TP2VwKFMsSCk6XCJcIix6PVtcInVuZGVmaW5lZFwiLFwibnVsbFwiXS5pbmNsdWRlcygoMCxsLm5vcm1hbGl6ZUljaW1zV2hpdGVzcGFjZSkoRSkpP1wiXCI6KDAsbC5ub3JtYWxpemVJY2ltc1doaXRlc3BhY2UpKEUpLFY9eD9lcCh4LFkpOlwiXCI7QyYmZUEoZS5yZWd1bGFyLEMsQi5zcHJlYWQpLHomJmVBKGUucmVndWxhcix6LHEuc3ByZWFkKSxWJiZlQShlLnJlZ3VsYXIsVixVLnNwcmVhZCl9aWYoZS53b3JrRXhwZXJpZW5jZT8ubGVuZ3RoKWZvcihsZXQgdCBvZiBlLndvcmtFeHBlcmllbmNlKXtsZXQgZT1leCh0LHoucGljayl8fFwiTi9BXCIscj1leCh0LFYucGljayl8fFwiTi9BXCI7ZUEodCxlLHouc3ByZWFkKSxlQSh0LHIsVi5zcHJlYWQpLHQ/LlN0YXJ0JiYodFtcIlN0YXJ0IERhdGVcIl09dC5TdGFydCksdD8uRW5kJiYodFtcIkVuZCBEYXRlXCJdPXQuRW5kLHRbXCJFbmQgRGF0ZSAoTGVhdmUgYmxhbmsgaWYgY3VycmVudCBlbXBsb3llcilcIl09dC5FbmQpfWlmKGUuZWR1Y2F0aW9uPy5sZW5ndGgpZm9yKGxldCB0IG9mIGUuZWR1Y2F0aW9uKXtsZXQgZT1leCh0LEcpO2UmJih0LnJhd1NjaG9vbD1lKTtsZXQgcj1leCh0LEopO2lmKHIpdC5yYXdNYWpvcj1yO2Vsc2UgZm9yKGxldCBlIG9mIFEpe2xldCByPWV4KHQsW2VdKTtpZihyJiYhZUMocikpe3QucmF3TWFqb3I9cjticmVha319bGV0IG49ZXgodCxXKTtuJiZlQSh0LG4sSyk7bGV0IG89ZXgodCxYKTtvJiZlQSh0LG8sWiksdD8uU3RhcnQmJih0W1wiU3RhcnQgRGF0ZVwiXT10LlN0YXJ0KSx0Py5FbmQmJih0W1wiRW5kIERhdGVcIl09dC5FbmQsdFtcIlNjaG9vbCBFbmQgRGF0ZVwiXT10LkVuZCx0W1wiR3JhZHVhdGlvbiBEYXRlXCJdPXQuRW5kLHRbXCJDb21wbGV0aW9uIERhdGVcIl09dC5FbmQpfXJldHVybiBlfVxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyLmNiODRhNzMyLmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);