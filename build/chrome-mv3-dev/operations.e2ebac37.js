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
})({"aBojX":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\workable\\operations.js",
    "bundleId": "0d7735dee2ebac37",
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
var j = z(require("2bd1c3a905ee1dd4"));
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

},{"2bd1c3a905ee1dd4":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"259EM":[function(require,module,exports) {
/**
 * Parcel module id: bQ04a
 * Resolved path: src/contents/sites/workable/operations.js
 * Dependencies:
 *   ../../methods/choice-match -> 6mkI4  =>  src/contents/methods/choice-match.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/sites/workable/phone-country-code -> 5lsEB  =>  src/contents/sites/workable/phone-country-code.js
 *   ~contents/sites/workable/rules -> 7FMtF  =>  src/contents/sites/workable/rules.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 *   ~utils/string -> ijEFi  =>  src/utils/string.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "fillWorkablePhoneCountryCode", ()=>C), n.export(r, "resetWorkableCheckboxMainWorldInjectionForTests", ()=>k), n.export(r, "preFillForm", ()=>T), n.export(r, "uploadResume", ()=>F), n.export(r, "cleanSalaryValue", ()=>I), n.export(r, "fillCountry", ()=>j), n.export(r, "preclickAddButtons", ()=>P), n.export(r, "fillReactInputField", ()=>L), n.export(r, "isWorkableAgreementCheckbox", ()=>M), n.export(r, "fillWorkableCheckboxField", ()=>eo), n.export(r, "fillCustomSelectField", ()=>ea), n.export(r, "saveEducation", ()=>el), n.export(r, "saveExperience", ()=>es), n.export(r, "addEducation", ()=>eu), n.export(r, "addExperience", ()=>ec), n.export(r, "fillDateInDetailsSection", ()=>ed), n.export(r, "blurPage", ()=>ef), n.export(r, "submitObserver", ()=>ep);
var o = e("../../methods/choice-match"), i = e("dayjs"), a = n.interopDefault(i), l = e("@plasmohq/messaging"), s = e("~contents/methods/answer"), u = e("~contents/methods/dom"), c = e("~contents/sites/workable/rules"), d = e("~contents/sites/workable/phone-country-code"), f = e("~core/enums"), p = e("~core/xpath"), m = e("~utils/delay"), h = e("~utils/string");
let g = "__jr_workable_checkbox_request", b = "__jr_workable_checkbox_response", y = 1e3, v = 1500, w = 750, S = 50, E = !1, x = !1;
async function C(e1, t) {
    let r1 = (0, d.getWorkablePhoneCountryContainer)(e1.$input);
    if (!r1 || !t) return !1;
    let n = Array.from(r1.querySelectorAll("li.iti__country[role='option'][data-country-code][data-dial-code], li.iti__country[data-country-code][data-dial-code]")), o = n.map(d.parseWorkablePhoneCountryOption), i = (0, d.findWorkablePhoneCountryOption)(t, o);
    if (!i) return !1;
    let a = (0, d.formatWorkablePhoneCountryOption)(i);
    if ((0, d.readWorkableSelectedPhoneCountry)(r1) === a) return !0;
    let l = n[o.indexOf(i)], s = r1.querySelector("button.iti__selected-country, .iti__selected-flag[role='combobox']");
    if (!l || !s) return !1;
    let u = (e1)=>{
        for (let t of [
            "mousedown",
            "mouseup",
            "click"
        ])e1.dispatchEvent(new MouseEvent(t, {
            bubbles: !0,
            cancelable: !0,
            view: window
        }));
    };
    s.focus(), u(s), await (0, m.delay)(200), l.scrollIntoView({
        block: "center"
    }), await (0, m.delay)(100), u(l);
    let c = Math.ceil(w / S);
    for(let e1 = 0; e1 <= c; e1++){
        if ((0, d.readWorkableSelectedPhoneCountry)(r1) === a) return !0;
        e1 < c && await (0, m.delay)(S);
    }
    return !1;
}
_c = C;
function A(e1) {
    let t = (0, p.getFirstOrderedNode)(`//*[@data-ui='${e1}']`);
    return t ? t.querySelector('[data-ui="add-section"]') : null;
}
_c1 = A;
function k() {
    E = !1, x = !1;
}
async function T() {
    if (document.querySelector('[data-ui="cookie-consent-accept"]') && (document.querySelector('[data-ui="cookie-consent-accept"]')?.click(), await (0, m.delay)(50)), document.querySelector('[data-ui="application-form-tab"]')) for(document.querySelector('[data-ui="application-form-tab"]')?.click(); !document.querySelector('[data-ui="application-form"]');)await (0, m.delay)(100);
}
_c2 = T;
async function F(e1, t, r1) {
    let n = (0, p.getFirstOrderedNode)('//input[@type="file" and @data-ui="resume"]') || document.querySelector('input[type="file"][data-ui="resume"]');
    n && await (0, u.uploadFiles)(n, await (0, s.fetchPdfAsBlob)(e1), t, r1, "Resume/CV");
}
_c3 = F;
function I(e1) {
    if (null == e1 || "" === e1) return null;
    let t = String(e1).trim();
    if ("" === t) return null;
    t = (t = t.replace(/[$,\s]/g, "")).replace(/\b(USD|usd|dollars?)\b/gi, "");
    let r1 = t.match(/(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)/);
    if (r1) {
        let e1 = parseFloat(r1[1]), t = parseFloat(r1[2]);
        if (!isNaN(e1) && !isNaN(t)) return String(Math.max(e1, t));
    }
    let n = t.match(/\[([\d\s,.-]+)\]/);
    if (n) {
        let e1 = n[1], t = e1.match(/(\d+(?:\.\d+)?)/g);
        if (t && t.length >= 2) {
            let e1 = t.map((e1)=>parseFloat(e1)).filter((e1)=>!isNaN(e1));
            if (e1.length >= 2) return String(Math.max(...e1));
        } else if (t && 1 === t.length) return t[0];
    }
    let o = t.match(/(\d+(?:\.\d+)?)\s*~\s*(\d+(?:\.\d+)?)/);
    if (o) {
        let e1 = parseFloat(o[1]), t = parseFloat(o[2]);
        if (!isNaN(e1) && !isNaN(t)) return String(Math.max(e1, t));
    }
    let i = t.match(/(\d+(?:\.\d+)?)\s+to\s+(\d+(?:\.\d+)?)/i);
    if (i) {
        let e1 = parseFloat(i[1]), t = parseFloat(i[2]);
        if (!isNaN(e1) && !isNaN(t)) return String(Math.max(e1, t));
    }
    let a = t.match(/(\d+(?:\.\d+)?)(?:\s*[,\s]\s*(\d+(?:\.\d+)?))+/);
    if (a) {
        let e1 = t.match(/(\d+(?:\.\d+)?)/g);
        if (e1 && e1.length >= 2) {
            let t = e1.map((e1)=>parseFloat(e1)).filter((e1)=>!isNaN(e1));
            if (t.length >= 2) return String(Math.max(...t));
        }
    }
    let l = t.match(/(\d+(?:\.\d+)?)/);
    if (l) {
        let e1 = parseFloat(l[1]);
        if (!isNaN(e1)) return String(Math.floor(e1));
    }
    return null;
}
_c4 = I;
function j() {
    let e1 = (0, p.getFirstOrderedNode)("//strong[contains(text(), 'Country')]/ancestor::div[1]/div[1]//div//input");
    if (e1) {
        e1.click();
        let t = (0, p.getFirstOrderedNode)("//strong[contains(text(), 'Country')]/ancestor::div[1]/div[1]//dialog//ul//span[contains(text(), 'United States')]");
        t ? t.click() : D(e1, "United States");
    }
}
function D(e1, t) {
    let r1 = e1.value;
    e1.value = t;
    let n = new InputEvent("input", {
        bubbles: !0
    }), o = e1?._valueTracker;
    o && o.setValue(r1), e1.dispatchEvent(n);
}
_c5 = D;
async function P() {
    let e1 = (0, p.getFirstOrderedNode)('.//a[@aria-label="Clear Profile" and (not(@aria-disabled) or @aria-disabled != "true")]');
    e1 && e1.click();
    let t = A("education");
    t && (t.click(), await (0, m.delay)(100));
    let r1 = A("experience");
    r1 && (r1.click(), await (0, m.delay)(100));
}
_c6 = P;
async function _(e1, t) {
    e1.focus(), D(e1, ""), await (0, m.delay)(30);
    let r1 = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e1), "value"), n = r1?.set;
    for (let { char: r1, valueSoFar: o } of (0, c.getTypingSteps)(t)){
        e1.dispatchEvent(new KeyboardEvent("keydown", {
            key: r1,
            bubbles: !0,
            cancelable: !0
        })), e1.dispatchEvent(new InputEvent("beforeinput", {
            data: r1,
            inputType: "insertText",
            bubbles: !0,
            cancelable: !0
        })), n ? n.call(e1, o) : e1.value = o;
        let t = e1._valueTracker;
        t && t.setValue(o.slice(0, -1)), e1.dispatchEvent(new InputEvent("input", {
            data: r1,
            inputType: "insertText",
            bubbles: !0
        })), e1.dispatchEvent(new KeyboardEvent("keyup", {
            key: r1,
            bubbles: !0,
            cancelable: !0
        })), await (0, m.delay)(30);
    }
    e1.dispatchEvent(new Event("change", {
        bubbles: !0,
        cancelable: !0
    }));
}
async function L(e1, t, r1, n) {
    if (!e1) return;
    let o = r1 || "", i = t, a = !1;
    if ((0, c.isWorkablePhoneInput)(e1)) i = (0, d.formatWorkablePhoneValue)(t, n);
    else if ((0, c.getWorkableSalaryFieldType)(o) === f.FIELD_TYPE.NUMBER) {
        let e1 = I(t);
        if (null === e1) return;
        i = e1, a = !0;
    }
    ei(e1), await (0, m.delay)(100), a ? await _(e1, i) : D(e1, i), p.getFirstOrderedNodeSafe('//*[@data-ui="education"]')?.contains(e1) && (e1.attributes.getNamedItem("name")?.value === "end_date" || e1.attributes.getNamedItem("name")?.value === "start_date") && await (0, m.delay)(300), p.getFirstOrderedNodeSafe('//*[@data-ui="experience"]')?.contains(e1) && (e1.attributes.getNamedItem("name")?.value === "end_date" || e1.attributes.getNamedItem("name")?.value === "start_date") && await (0, m.delay)(300), document.dispatchEvent(new MouseEvent("mousedown", {
        bubbles: !0,
        cancelable: !0,
        view: window
    }));
}
_c7 = L;
function R(e1) {
    return String(e1 ?? "").toLowerCase().replace(/\*/g, "").replace(/\s+/g, " ").trim();
}
_c8 = R;
function O(e1) {
    return [
        "true",
        "yes",
        "y",
        "1",
        "checked",
        "accept",
        "accepted"
    ].includes(R(e1));
}
_c9 = O;
function M(e1) {
    let t = [
        e1.label,
        ...e1.options || []
    ].map(R).join(" ");
    return [
        "agree",
        "agreement",
        "accept",
        "acknowledge",
        "authorize",
        "certify",
        "consent",
        "privacy",
        "terms",
        "notice",
        "read understand"
    ].some((e1)=>t.includes(e1));
}
_c10 = M;
function N(e1, t) {
    if (M(e1) || t.some(O)) return !0;
    let r1 = [
        e1.label,
        ...e1.options || []
    ].map(R).filter(Boolean);
    return t.map(R).filter(Boolean).some((e1)=>r1.some((t)=>(0, o.isExactChoiceMatch)(t, e1)));
}
_c11 = N;
function $(e1) {
    if (!e1) return null;
    for (let t of [
        "aria-checked",
        "data-checked"
    ]){
        let r1 = e1.getAttribute(t);
        if ("true" === r1) return !0;
        if ("false" === r1) return !1;
    }
    return null;
}
function B(e1) {
    if (!e1.id || "undefined" == typeof document) return null;
    let t = e1.id.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    try {
        return document.querySelector(`label[for="${t}"]`);
    } catch  {
        return null;
    }
}
_c12 = B;
function q(e1) {
    return !0 === e1.checked;
}
function U(e1) {
    return $(e1.closest("[role='radio'], [data-ui='option']"));
}
_c13 = U;
function H(e1, t) {
    return t.length > 1 && e1.$label?.getAttribute("role") === "radiogroup";
}
_c14 = H;
function Y(e1, t) {
    let r1 = t.map(R);
    return (e1.options || []).findIndex((e1)=>{
        let t = R(e1);
        return r1.some((e1)=>t === e1 || "true" === e1 && "yes" === t || "false" === e1 && "no" === t);
    });
}
_c15 = Y;
async function z(e1, t, r1) {
    let n = Y(e1, t), o = r1[n];
    if (!o) return !1;
    await en(o, e1);
    let i = U(o);
    return !!o.checked && !1 !== i && r1.every((e1, t)=>{
        if (t === n) return !0;
        let r1 = U(e1);
        return !e1.checked && !0 !== r1;
    });
}
function V(e1, t) {
    t && !e1.includes(t) && e1.push(t);
}
_c16 = V;
function W(e1) {
    return e1 ? R(e1.innerText || e1.textContent || "") : "";
}
_c17 = W;
function G(e1) {
    let t = [
        e1.label,
        ...e1.options || []
    ].map(R).filter((e1)=>e1 && "*" !== e1 && e1.length >= 4);
    return M(e1) && t.push("privacy notice", "consent to the processing", "processing of my data", "part of this application"), Array.from(new Set(t));
}
_c18 = G;
function K(e1, t) {
    let r1 = W(e1);
    return !!r1 && t.some((e1)=>e1.length < 8 ? r1 === e1 : r1.includes(e1) || e1.includes(r1) && r1.length >= 16);
}
_c19 = K;
function X(e1) {
    if ("undefined" == typeof document) return [];
    let t = G(e1);
    return t.length && "function" == typeof document.querySelectorAll ? Array.from(document.querySelectorAll("label, [role='checkbox'], [data-ui='option'], button, span, div")).filter((e1)=>K(e1, t)).sort((e1, t)=>W(e1).length - W(t).length) : [];
}
_c20 = X;
function J(e1, t) {
    let r1 = [], n = e1.closest("[data-ui='option']");
    for (let o of (V(r1, e1.closest("label")), V(r1, B(e1)), V(r1, e1.closest("[role='checkbox']")), V(r1, n), V(r1, t.$label), X(t)))V(r1, o);
    return V(r1, e1), r1;
}
_c21 = J;
function Q(e1) {
    return "function" == typeof MouseEvent ? new MouseEvent(e1, {
        bubbles: !0,
        cancelable: !0,
        view: "undefined" != typeof window ? window : void 0
    }) : new Event(e1, {
        bubbles: !0,
        cancelable: !0
    });
}
_c22 = Q;
function Z(e1) {
    e1.dispatchEvent(new Event("input", {
        bubbles: !0,
        cancelable: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0,
        cancelable: !0
    }));
}
_c23 = Z;
async function ee() {
    if (E) return !0;
    if (x) return !1;
    try {
        let e1 = await new Promise((e1, t)=>{
            let r1 = setTimeout(()=>{
                t(Error("injectWorkableCheckbox timed out"));
            }, y);
            Promise.resolve((0, l.sendToBackground)({
                name: "injectWorkableCheckbox"
            })).then((t)=>{
                clearTimeout(r1), e1(t ?? {});
            }, (e1)=>{
                clearTimeout(r1), t(e1);
            });
        });
        if (e1?.success !== !0) throw Error("injectWorkableCheckbox did not return success=true");
        return E = !0, !0;
    } catch (e1) {
        return x = !0, console.warn("[WorkableCheckbox] failed to inject main world script:", e1), !1;
    }
}
async function et(e1, t) {
    if ("undefined" == typeof document || "function" != typeof document.addEventListener || "function" != typeof document.dispatchEvent) return !1;
    let r1 = await ee();
    if (!r1) return !1;
    let n = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`, o = `__jr_workable_checkbox_${n}`;
    e1.setAttribute("data-jr-workable-checkbox-id", o);
    let i = `[data-jr-workable-checkbox-id="${o}"]`;
    return new Promise((r1)=>{
        let o = setTimeout(()=>{
            document.removeEventListener(b, a), r1(!1);
        }, v);
        function a(t) {
            let i = t.detail;
            i?.requestId === n && (document.removeEventListener(b, a), clearTimeout(o), r1(i?.success === !0 && q(e1)));
        }
        document.addEventListener(b, a), document.dispatchEvent(new CustomEvent(g, {
            detail: {
                requestId: n,
                selector: i,
                label: t.label,
                options: t.options || []
            }
        }));
    });
}
async function er(e1, t) {
    for (let r1 of J(e1, t))if (r1.scrollIntoView?.({
        block: "center",
        inline: "nearest"
    }), r1.focus?.(), r1.dispatchEvent(Q("mousedown")), r1.dispatchEvent(Q("mouseup")), "function" == typeof r1.click ? r1.click() : r1.dispatchEvent(Q("click")), Z(e1), await (0, m.delay)(120), q(e1)) return !0;
    return q(e1);
}
async function en(e1, t) {
    if (q(e1) || await et(e1, t)) return !0;
    for (let r1 of J(e1, t))if (r1.scrollIntoView?.({
        block: "center",
        inline: "nearest"
    }), r1.focus?.(), r1.dispatchEvent(Q("mousedown")), r1.dispatchEvent(Q("mouseup")), "function" == typeof r1.click ? r1.click() : r1.dispatchEvent(Q("click")), Z(e1), await (0, m.delay)(50), q(e1) && (await (0, m.delay)(150), q(e1))) return !0;
    return await er(e1, t);
}
async function eo(e1, t) {
    let r1 = Array.isArray(t) ? t : [
        t
    ], n = Array.from(e1.$checkboxs || []);
    if (!n.length) return !1;
    let o = 1 === n.length && n[0]?.type === "checkbox";
    if (o) {
        let t = n[0];
        return N(e1, r1) ? await en(t, e1) : !q(t);
    }
    if (H(e1, n)) return await z(e1, r1, n);
    let i = await (0, u.fillCheckBoxesField)(e1, r1);
    return !1 !== i && (await (0, m.delay)(50), n.some((e1)=>q(e1)));
}
function ei(e1) {
    let t = new KeyboardEvent("keydown", {
        key: "Backspace",
        code: "Backspace",
        keyCode: 8,
        which: 8,
        bubbles: !0,
        cancelable: !0
    });
    e1?.dispatchEvent(t);
}
async function ea(e1, t) {
    try {
        let r1 = t[0], n = e1.parentElement;
        if (!n) throw Error("No wrapper element found");
        let o = n.querySelector("label");
        if (!o) throw Error("No label element found");
        o.click(), await (0, m.delay)(400);
        let i = n.querySelector("dialog");
        if (!i) throw Error("No dialog element found");
        let a = i.querySelector('input[type="search"]');
        if (a) {
            D(a, r1), await (0, m.delay)(200);
            let e1 = i.querySelector("ul>li");
            if (!e1) return;
            e1.click(), await (0, m.delay)(100);
        } else {
            let e1 = Array.from(i.querySelectorAll("ul>li"));
            if (!e1?.length) throw Error("No options found");
            for (let t of e1){
                let e1 = t.innerText.trim();
                if (e1 && e1.toLowerCase() === r1.toLowerCase()) {
                    t.click(), await (0, m.delay)(100);
                    break;
                }
            }
        }
    } catch  {} finally{
        document.dispatchEvent(new MouseEvent("mouseup", {
            bubbles: !0,
            cancelable: !0,
            view: window
        }));
    }
}
async function el() {
    let e1 = (0, p.getFirstOrderedNode)('//div[@data-ui="education"]//button[@data-ui="save-section"]');
    e1 && (e1.click(), await (0, m.delay)(500));
}
async function es() {
    let e1 = (0, p.getFirstOrderedNode)('//div[@data-ui="experience"]//button[@data-ui="save-section"]');
    e1 && (e1.click(), await (0, m.delay)(500));
}
function eu() {
    let e1 = A("education");
    e1 && e1.click();
}
function ec() {
    let e1 = A("experience");
    e1 && e1.click();
}
async function ed() {
    await L((0, p.getFirstOrderedNode)('//section[@data-ui="section"]//input[@placeholder="YYYY/MM/DD"]'), (0, a.default)().format("YYYY/MM/DD"));
}
function ef() {
    let e1 = (0, p.getFirstOrderedNode)('//*[@id="mainContent"] | //main');
    if (e1) for(let t = 0; t < 3; t++)(0, u.triggerEvents)(e1, [
        "click"
    ]), (0, u.triggerEvents)(e1, [
        "mousedown"
    ]), (0, u.triggerEvents)(e1, [
        "mouseup"
    ]);
}
function ep(e1) {
    if (e1) {
        e1.parentNode;
        let t = new MutationObserver((e1)=>{
            for (let r1 of e1)for (let e1 of r1.addedNodes)(e1?.getAttribute?.("data-ui") === "successful-submit" || e1?.querySelectorAll("[data-ui='successful-submit']").length > 0) && (t.disconnect(), window.top?.postMessage(h.cleanObject({
                type: f.MESSAGE_EVENTS.agentSubmitClicked
            }), {
                targetOrigin: "*"
            }));
        });
        t.observe(document.getElementById("app"), {
            childList: !0,
            subtree: !0
        });
    }
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23;
$RefreshReg$(_c, "C");
$RefreshReg$(_c1, "A");
$RefreshReg$(_c2, "T");
$RefreshReg$(_c3, "F");
$RefreshReg$(_c4, "I");
$RefreshReg$(_c5, "D");
$RefreshReg$(_c6, "P");
$RefreshReg$(_c7, "L");
$RefreshReg$(_c8, "R");
$RefreshReg$(_c9, "O");
$RefreshReg$(_c10, "M");
$RefreshReg$(_c11, "N");
$RefreshReg$(_c12, "B");
$RefreshReg$(_c13, "U");
$RefreshReg$(_c14, "H");
$RefreshReg$(_c15, "Y");
$RefreshReg$(_c16, "V");
$RefreshReg$(_c17, "W");
$RefreshReg$(_c18, "G");
$RefreshReg$(_c19, "K");
$RefreshReg$(_c20, "X");
$RefreshReg$(_c21, "J");
$RefreshReg$(_c22, "Q");
$RefreshReg$(_c23, "Z");

},{}]},["aBojX","259EM"], "259EM", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QUFFLGFBQVksRUFBRyxJQUFHO1FBQUM7S0FBVTtBQUMzQztBQUVBLFNBQVMsR0FBRyxFQUFDO0lBQ1gsSUFBSSxJQUFHO1FBQ0wsR0FBRTtRQUNGLElBQUksSUFBSSxJQUFJLGlCQUFpQixDQUFBO1lBQzNCLEtBQUssSUFBSSxNQUFLLEdBQ1osS0FBSyxJQUFJLE1BQUssR0FBRSxXQUFXLEFBQUMsQ0FBQSxJQUFHLGVBQWUsZUFBZSx1QkFBdUIsSUFDaEYsaUJBQWlCLGlDQUFpQyxTQUFTLENBQUEsS0FBTyxDQUFBLEVBQUUsY0FDdEUsT0FBTyxLQUFLLFlBQVksRUFBRSxZQUFZO2dCQUNwQyxNQUFNLEVBQUUsZUFBZTtZQUN6QixJQUFJO2dCQUNGLGNBQWM7WUFDaEIsRUFBQztRQUNQO1FBQ0EsRUFBRSxRQUFRLFNBQVMsZUFBZSxRQUFRO1lBQ3hDLFdBQVcsQ0FBQztZQUNaLFNBQVMsQ0FBQztRQUNaO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtYzljMWUwZGY1ODdjZDVmMS5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9zaXRlcy93b3JrYWJsZS9vcGVyYXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBXPU9iamVjdC5jcmVhdGU7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBWPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcT0oZSx0LG8scik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG4gb2YgRyh0KSkhSi5jYWxsKGUsbikmJm4hPT1vJiZQKGUsbix7Z2V0OigpPT50W25dLGVudW1lcmFibGU6IShyPVYodCxuKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgej0oZSx0LG8pPT4obz1lIT1udWxsP1coWChlKSk6e30scSh0fHwhZXx8IWUuX19lc01vZHVsZT9QKG8sXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOm8sZSkpO3ZhciB5PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIEg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSz1uZXcgU2V0KHkpLEQ9ZT0+Sy5oYXMoZSksdWU9eS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBkZT1EKFwiLS1kcnktcnVuXCIpLF89KCk9PkQoXCItLXZlcmJvc2VcIil8fEgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsZmU9XygpO3ZhciB4PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBrPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksVD0oLi4uZSk9PngoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxBPSguLi5lKT0+eChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFE9MCxwPSguLi5lKT0+XygpJiZ4KGBcXHV7MUY3RTF9ICR7USsrfWAsLi4uZSk7dmFyIGM9e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wicGFnZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXHNpdGVzXFxcXHdvcmthYmxlXFxcXG9wZXJhdGlvbnMuanNcIixcImJ1bmRsZUlkXCI6XCIwZDc3MzVkZWUyZWJhYzM3XCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogYlEwNGFcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL3dvcmthYmxlL29wZXJhdGlvbnMuanNcbiAqIERlcGVuZGVuY2llczpcclxuICogICAuLi8uLi9tZXRob2RzL2Nob2ljZS1tYXRjaCAtPiA2bWtJNCAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2Nob2ljZS1tYXRjaC5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgQHBsYXNtb2hxL21lc3NhZ2luZyAtPiA5Mkd5QiAgPT4gIEBwbGFzbW9ocS9tZXNzYWdpbmcuanNcclxuICogICBkYXlqcyAtPiBmbmhYcCAgPT4gIF90aWxkZV9ub2RlX21vZHVsZXMvZGF5anMuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXIgLT4gN1Q1ZVcgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9hbnN3ZXIuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9kb20gLT4gaEE1UWEgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9kb20uanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvd29ya2FibGUvcGhvbmUtY291bnRyeS1jb2RlIC0+IDVsc0VCICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL3dvcmthYmxlL3Bob25lLWNvdW50cnktY29kZS5qc1xyXG4gKiAgIH5jb250ZW50cy9zaXRlcy93b3JrYWJsZS9ydWxlcyAtPiA3Rk10RiAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy93b3JrYWJsZS9ydWxlcy5qc1xyXG4gKiAgIH5jb3JlL2VudW1zIC0+IDFPM25jICA9PiAgc3JjL2NvcmUvZW51bXMuanNcclxuICogICB+Y29yZS94cGF0aCAtPiBhZ0U0dSAgPT4gIHNyYy9jb3JlL3hwYXRoLmpzXHJcbiAqICAgfnV0aWxzL2RlbGF5IC0+IGFtNjE0ICA9PiAgc3JjL3V0aWxzL2RlbGF5LmpzXHJcbiAqICAgfnV0aWxzL3N0cmluZyAtPiBpakVGaSAgPT4gIHNyYy91dGlscy9zdHJpbmcuanNcclxuICovXHJcblxyXG52YXIgbiA9IGUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO1xyXG5uLmRlZmluZUludGVyb3BGbGFnKHIpLCBuLmV4cG9ydChyLCBcImZpbGxXb3JrYWJsZVBob25lQ291bnRyeUNvZGVcIiwgKCkgPT4gQyksIG4uZXhwb3J0KHIsXHJcbiAgICBcInJlc2V0V29ya2FibGVDaGVja2JveE1haW5Xb3JsZEluamVjdGlvbkZvclRlc3RzXCIsICgpID0+IGspLCBuLmV4cG9ydChyLCBcInByZUZpbGxGb3JtXCIsICgpID0+XHJcbiAgVCksIG4uZXhwb3J0KHIsIFwidXBsb2FkUmVzdW1lXCIsICgpID0+IEYpLCBuLmV4cG9ydChyLCBcImNsZWFuU2FsYXJ5VmFsdWVcIiwgKCkgPT4gSSksIG4uZXhwb3J0KHIsXHJcbiAgICBcImZpbGxDb3VudHJ5XCIsICgpID0+IGopLCBuLmV4cG9ydChyLCBcInByZWNsaWNrQWRkQnV0dG9uc1wiLCAoKSA9PiBQKSwgbi5leHBvcnQocixcclxuICAgIFwiZmlsbFJlYWN0SW5wdXRGaWVsZFwiLCAoKSA9PiBMKSwgbi5leHBvcnQociwgXCJpc1dvcmthYmxlQWdyZWVtZW50Q2hlY2tib3hcIiwgKCkgPT4gTSksIG4uZXhwb3J0KFxyXG4gICAgciwgXCJmaWxsV29ya2FibGVDaGVja2JveEZpZWxkXCIsICgpID0+IGVvKSwgbi5leHBvcnQociwgXCJmaWxsQ3VzdG9tU2VsZWN0RmllbGRcIiwgKCkgPT4gZWEpLCBuXHJcbiAgLmV4cG9ydChyLCBcInNhdmVFZHVjYXRpb25cIiwgKCkgPT4gZWwpLCBuLmV4cG9ydChyLCBcInNhdmVFeHBlcmllbmNlXCIsICgpID0+IGVzKSwgbi5leHBvcnQocixcclxuICAgIFwiYWRkRWR1Y2F0aW9uXCIsICgpID0+IGV1KSwgbi5leHBvcnQociwgXCJhZGRFeHBlcmllbmNlXCIsICgpID0+IGVjKSwgbi5leHBvcnQocixcclxuICAgIFwiZmlsbERhdGVJbkRldGFpbHNTZWN0aW9uXCIsICgpID0+IGVkKSwgbi5leHBvcnQociwgXCJibHVyUGFnZVwiLCAoKSA9PiBlZiksIG4uZXhwb3J0KHIsXHJcbiAgICBcInN1Ym1pdE9ic2VydmVyXCIsICgpID0+IGVwKTtcclxudmFyIG8gPSBlKFwiLi4vLi4vbWV0aG9kcy9jaG9pY2UtbWF0Y2hcIiksXHJcbiAgaSA9IGUoXCJkYXlqc1wiKSxcclxuICBhID0gbi5pbnRlcm9wRGVmYXVsdChpKSxcclxuICBsID0gZShcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIiksXHJcbiAgcyA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXJcIiksXHJcbiAgdSA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9kb21cIiksXHJcbiAgYyA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvd29ya2FibGUvcnVsZXNcIiksXHJcbiAgZCA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvd29ya2FibGUvcGhvbmUtY291bnRyeS1jb2RlXCIpLFxyXG4gIGYgPSBlKFwifmNvcmUvZW51bXNcIiksXHJcbiAgcCA9IGUoXCJ+Y29yZS94cGF0aFwiKSxcclxuICBtID0gZShcIn51dGlscy9kZWxheVwiKSxcclxuICBoID0gZShcIn51dGlscy9zdHJpbmdcIik7XHJcbmxldCBnID0gXCJfX2pyX3dvcmthYmxlX2NoZWNrYm94X3JlcXVlc3RcIixcclxuICBiID0gXCJfX2pyX3dvcmthYmxlX2NoZWNrYm94X3Jlc3BvbnNlXCIsXHJcbiAgeSA9IDFlMyxcclxuICB2ID0gMTUwMCxcclxuICB3ID0gNzUwLFxyXG4gIFMgPSA1MCxcclxuICBFID0gITEsXHJcbiAgeCA9ICExO1xyXG5hc3luYyBmdW5jdGlvbiBDKGUsIHQpIHtcclxuICBsZXQgciA9ICgwLCBkLmdldFdvcmthYmxlUGhvbmVDb3VudHJ5Q29udGFpbmVyKShlLiRpbnB1dCk7XHJcbiAgaWYgKCFyIHx8ICF0KSByZXR1cm4gITE7XHJcbiAgbGV0IG4gPSBBcnJheS5mcm9tKHIucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCJsaS5pdGlfX2NvdW50cnlbcm9sZT0nb3B0aW9uJ11bZGF0YS1jb3VudHJ5LWNvZGVdW2RhdGEtZGlhbC1jb2RlXSwgbGkuaXRpX19jb3VudHJ5W2RhdGEtY291bnRyeS1jb2RlXVtkYXRhLWRpYWwtY29kZV1cIlxyXG4gICAgICApKSxcclxuICAgIG8gPSBuLm1hcChkLnBhcnNlV29ya2FibGVQaG9uZUNvdW50cnlPcHRpb24pLFxyXG4gICAgaSA9ICgwLCBkLmZpbmRXb3JrYWJsZVBob25lQ291bnRyeU9wdGlvbikodCwgbyk7XHJcbiAgaWYgKCFpKSByZXR1cm4gITE7XHJcbiAgbGV0IGEgPSAoMCwgZC5mb3JtYXRXb3JrYWJsZVBob25lQ291bnRyeU9wdGlvbikoaSk7XHJcbiAgaWYgKCgwLCBkLnJlYWRXb3JrYWJsZVNlbGVjdGVkUGhvbmVDb3VudHJ5KShyKSA9PT0gYSkgcmV0dXJuICEwO1xyXG4gIGxldCBsID0gbltvLmluZGV4T2YoaSldLFxyXG4gICAgcyA9IHIucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5pdGlfX3NlbGVjdGVkLWNvdW50cnksIC5pdGlfX3NlbGVjdGVkLWZsYWdbcm9sZT0nY29tYm9ib3gnXVwiKTtcclxuICBpZiAoIWwgfHwgIXMpIHJldHVybiAhMTtcclxuICBsZXQgdSA9IGUgPT4ge1xyXG4gICAgZm9yIChsZXQgdCBvZiBbXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCIsIFwiY2xpY2tcIl0pIGUuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudCh0LCB7XHJcbiAgICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgICBjYW5jZWxhYmxlOiAhMCxcclxuICAgICAgdmlldzogd2luZG93XHJcbiAgICB9KSlcclxuICB9O1xyXG4gIHMuZm9jdXMoKSwgdShzKSwgYXdhaXQgKDAsIG0uZGVsYXkpKDIwMCksIGwuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgYmxvY2s6IFwiY2VudGVyXCJcclxuICB9KSwgYXdhaXQgKDAsIG0uZGVsYXkpKDEwMCksIHUobCk7XHJcbiAgbGV0IGMgPSBNYXRoLmNlaWwodyAvIFMpO1xyXG4gIGZvciAobGV0IGUgPSAwOyBlIDw9IGM7IGUrKykge1xyXG4gICAgaWYgKCgwLCBkLnJlYWRXb3JrYWJsZVNlbGVjdGVkUGhvbmVDb3VudHJ5KShyKSA9PT0gYSkgcmV0dXJuICEwO1xyXG4gICAgZSA8IGMgJiYgYXdhaXQgKDAsIG0uZGVsYXkpKFMpXHJcbiAgfVxyXG4gIHJldHVybiAhMVxyXG59XHJcblxyXG5mdW5jdGlvbiBBKGUpIHtcclxuICBsZXQgdCA9ICgwLCBwLmdldEZpcnN0T3JkZXJlZE5vZGUpKGAvLypbQGRhdGEtdWk9JyR7ZX0nXWApO1xyXG4gIHJldHVybiB0ID8gdC5xdWVyeVNlbGVjdG9yKCdbZGF0YS11aT1cImFkZC1zZWN0aW9uXCJdJykgOiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGsoKSB7XHJcbiAgRSA9ICExLCB4ID0gITFcclxufVxyXG5hc3luYyBmdW5jdGlvbiBUKCkge1xyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS11aT1cImNvb2tpZS1jb25zZW50LWFjY2VwdFwiXScpICYmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnW2RhdGEtdWk9XCJjb29raWUtY29uc2VudC1hY2NlcHRcIl0nKT8uY2xpY2soKSwgYXdhaXQgKDAsIG0uZGVsYXkpKDUwKSksIGRvY3VtZW50XHJcbiAgICAucXVlcnlTZWxlY3RvcignW2RhdGEtdWk9XCJhcHBsaWNhdGlvbi1mb3JtLXRhYlwiXScpKVxyXG4gICAgZm9yIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS11aT1cImFwcGxpY2F0aW9uLWZvcm0tdGFiXCJdJyk/LmNsaWNrKCk7ICFkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcignW2RhdGEtdWk9XCJhcHBsaWNhdGlvbi1mb3JtXCJdJyk7KSBhd2FpdCAoMCwgbS5kZWxheSkoMTAwKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIEYoZSwgdCwgcikge1xyXG4gIGxldCBuID0gKDAsIHAuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoJy8vaW5wdXRbQHR5cGU9XCJmaWxlXCIgYW5kIEBkYXRhLXVpPVwicmVzdW1lXCJdJykgfHwgZG9jdW1lbnRcclxuICAgIC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZmlsZVwiXVtkYXRhLXVpPVwicmVzdW1lXCJdJyk7XHJcbiAgbiAmJiBhd2FpdCAoMCwgdS51cGxvYWRGaWxlcykobiwgYXdhaXQgKDAsIHMuZmV0Y2hQZGZBc0Jsb2IpKGUpLCB0LCByLCBcIlJlc3VtZS9DVlwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBJKGUpIHtcclxuICBpZiAobnVsbCA9PSBlIHx8IFwiXCIgPT09IGUpIHJldHVybiBudWxsO1xyXG4gIGxldCB0ID0gU3RyaW5nKGUpLnRyaW0oKTtcclxuICBpZiAoXCJcIiA9PT0gdCkgcmV0dXJuIG51bGw7XHJcbiAgdCA9ICh0ID0gdC5yZXBsYWNlKC9bJCxcXHNdL2csIFwiXCIpKS5yZXBsYWNlKC9cXGIoVVNEfHVzZHxkb2xsYXJzPylcXGIvZ2ksIFwiXCIpO1xyXG4gIGxldCByID0gdC5tYXRjaCgvKFxcZCsoPzpcXC5cXGQrKT8pXFxzKi1cXHMqKFxcZCsoPzpcXC5cXGQrKT8pLyk7XHJcbiAgaWYgKHIpIHtcclxuICAgIGxldCBlID0gcGFyc2VGbG9hdChyWzFdKSxcclxuICAgICAgdCA9IHBhcnNlRmxvYXQoclsyXSk7XHJcbiAgICBpZiAoIWlzTmFOKGUpICYmICFpc05hTih0KSkgcmV0dXJuIFN0cmluZyhNYXRoLm1heChlLCB0KSlcclxuICB9XHJcbiAgbGV0IG4gPSB0Lm1hdGNoKC9cXFsoW1xcZFxccywuLV0rKVxcXS8pO1xyXG4gIGlmIChuKSB7XHJcbiAgICBsZXQgZSA9IG5bMV0sXHJcbiAgICAgIHQgPSBlLm1hdGNoKC8oXFxkKyg/OlxcLlxcZCspPykvZyk7XHJcbiAgICBpZiAodCAmJiB0Lmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgIGxldCBlID0gdC5tYXAoZSA9PiBwYXJzZUZsb2F0KGUpKS5maWx0ZXIoZSA9PiAhaXNOYU4oZSkpO1xyXG4gICAgICBpZiAoZS5sZW5ndGggPj0gMikgcmV0dXJuIFN0cmluZyhNYXRoLm1heCguLi5lKSlcclxuICAgIH0gZWxzZSBpZiAodCAmJiAxID09PSB0Lmxlbmd0aCkgcmV0dXJuIHRbMF1cclxuICB9XHJcbiAgbGV0IG8gPSB0Lm1hdGNoKC8oXFxkKyg/OlxcLlxcZCspPylcXHMqflxccyooXFxkKyg/OlxcLlxcZCspPykvKTtcclxuICBpZiAobykge1xyXG4gICAgbGV0IGUgPSBwYXJzZUZsb2F0KG9bMV0pLFxyXG4gICAgICB0ID0gcGFyc2VGbG9hdChvWzJdKTtcclxuICAgIGlmICghaXNOYU4oZSkgJiYgIWlzTmFOKHQpKSByZXR1cm4gU3RyaW5nKE1hdGgubWF4KGUsIHQpKVxyXG4gIH1cclxuICBsZXQgaSA9IHQubWF0Y2goLyhcXGQrKD86XFwuXFxkKyk/KVxccyt0b1xccysoXFxkKyg/OlxcLlxcZCspPykvaSk7XHJcbiAgaWYgKGkpIHtcclxuICAgIGxldCBlID0gcGFyc2VGbG9hdChpWzFdKSxcclxuICAgICAgdCA9IHBhcnNlRmxvYXQoaVsyXSk7XHJcbiAgICBpZiAoIWlzTmFOKGUpICYmICFpc05hTih0KSkgcmV0dXJuIFN0cmluZyhNYXRoLm1heChlLCB0KSlcclxuICB9XHJcbiAgbGV0IGEgPSB0Lm1hdGNoKC8oXFxkKyg/OlxcLlxcZCspPykoPzpcXHMqWyxcXHNdXFxzKihcXGQrKD86XFwuXFxkKyk/KSkrLyk7XHJcbiAgaWYgKGEpIHtcclxuICAgIGxldCBlID0gdC5tYXRjaCgvKFxcZCsoPzpcXC5cXGQrKT8pL2cpO1xyXG4gICAgaWYgKGUgJiYgZS5sZW5ndGggPj0gMikge1xyXG4gICAgICBsZXQgdCA9IGUubWFwKGUgPT4gcGFyc2VGbG9hdChlKSkuZmlsdGVyKGUgPT4gIWlzTmFOKGUpKTtcclxuICAgICAgaWYgKHQubGVuZ3RoID49IDIpIHJldHVybiBTdHJpbmcoTWF0aC5tYXgoLi4udCkpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBsID0gdC5tYXRjaCgvKFxcZCsoPzpcXC5cXGQrKT8pLyk7XHJcbiAgaWYgKGwpIHtcclxuICAgIGxldCBlID0gcGFyc2VGbG9hdChsWzFdKTtcclxuICAgIGlmICghaXNOYU4oZSkpIHJldHVybiBTdHJpbmcoTWF0aC5mbG9vcihlKSlcclxuICB9XHJcbiAgcmV0dXJuIG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gaigpIHtcclxuICBsZXQgZSA9ICgwLCBwLmdldEZpcnN0T3JkZXJlZE5vZGUpKFxyXG4gICAgXCIvL3N0cm9uZ1tjb250YWlucyh0ZXh0KCksICdDb3VudHJ5JyldL2FuY2VzdG9yOjpkaXZbMV0vZGl2WzFdLy9kaXYvL2lucHV0XCIpO1xyXG4gIGlmIChlKSB7XHJcbiAgICBlLmNsaWNrKCk7XHJcbiAgICBsZXQgdCA9ICgwLCBwLmdldEZpcnN0T3JkZXJlZE5vZGUpKFxyXG4gICAgICBcIi8vc3Ryb25nW2NvbnRhaW5zKHRleHQoKSwgJ0NvdW50cnknKV0vYW5jZXN0b3I6OmRpdlsxXS9kaXZbMV0vL2RpYWxvZy8vdWwvL3NwYW5bY29udGFpbnModGV4dCgpLCAnVW5pdGVkIFN0YXRlcycpXVwiXHJcbiAgICAgICk7XHJcbiAgICB0ID8gdC5jbGljaygpIDogRChlLCBcIlVuaXRlZCBTdGF0ZXNcIilcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEQoZSwgdCkge1xyXG4gIGxldCByID0gZS52YWx1ZTtcclxuICBlLnZhbHVlID0gdDtcclxuICBsZXQgbiA9IG5ldyBJbnB1dEV2ZW50KFwiaW5wdXRcIiwge1xyXG4gICAgICBidWJibGVzOiAhMFxyXG4gICAgfSksXHJcbiAgICBvID0gZT8uX3ZhbHVlVHJhY2tlcjtcclxuICBvICYmIG8uc2V0VmFsdWUociksIGUuZGlzcGF0Y2hFdmVudChuKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIFAoKSB7XHJcbiAgbGV0IGUgPSAoMCwgcC5nZXRGaXJzdE9yZGVyZWROb2RlKShcclxuICAgICcuLy9hW0BhcmlhLWxhYmVsPVwiQ2xlYXIgUHJvZmlsZVwiIGFuZCAobm90KEBhcmlhLWRpc2FibGVkKSBvciBAYXJpYS1kaXNhYmxlZCAhPSBcInRydWVcIildJyk7XHJcbiAgZSAmJiBlLmNsaWNrKCk7XHJcbiAgbGV0IHQgPSBBKFwiZWR1Y2F0aW9uXCIpO1xyXG4gIHQgJiYgKHQuY2xpY2soKSwgYXdhaXQgKDAsIG0uZGVsYXkpKDEwMCkpO1xyXG4gIGxldCByID0gQShcImV4cGVyaWVuY2VcIik7XHJcbiAgciAmJiAoci5jbGljaygpLCBhd2FpdCAoMCwgbS5kZWxheSkoMTAwKSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiBfKGUsIHQpIHtcclxuICBlLmZvY3VzKCksIEQoZSwgXCJcIiksIGF3YWl0ICgwLCBtLmRlbGF5KSgzMCk7XHJcbiAgbGV0IHIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5nZXRQcm90b3R5cGVPZihlKSwgXCJ2YWx1ZVwiKSxcclxuICAgIG4gPSByPy5zZXQ7XHJcbiAgZm9yIChsZXQge1xyXG4gICAgICBjaGFyOiByLFxyXG4gICAgICB2YWx1ZVNvRmFyOiBvXHJcbiAgICB9XHJcbiAgICBvZigwLCBjLmdldFR5cGluZ1N0ZXBzKSh0KSkge1xyXG4gICAgZS5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5ZG93blwiLCB7XHJcbiAgICAgIGtleTogcixcclxuICAgICAgYnViYmxlczogITAsXHJcbiAgICAgIGNhbmNlbGFibGU6ICEwXHJcbiAgICB9KSksIGUuZGlzcGF0Y2hFdmVudChuZXcgSW5wdXRFdmVudChcImJlZm9yZWlucHV0XCIsIHtcclxuICAgICAgZGF0YTogcixcclxuICAgICAgaW5wdXRUeXBlOiBcImluc2VydFRleHRcIixcclxuICAgICAgYnViYmxlczogITAsXHJcbiAgICAgIGNhbmNlbGFibGU6ICEwXHJcbiAgICB9KSksIG4gPyBuLmNhbGwoZSwgbykgOiBlLnZhbHVlID0gbztcclxuICAgIGxldCB0ID0gZS5fdmFsdWVUcmFja2VyO1xyXG4gICAgdCAmJiB0LnNldFZhbHVlKG8uc2xpY2UoMCwgLTEpKSwgZS5kaXNwYXRjaEV2ZW50KG5ldyBJbnB1dEV2ZW50KFwiaW5wdXRcIiwge1xyXG4gICAgICBkYXRhOiByLFxyXG4gICAgICBpbnB1dFR5cGU6IFwiaW5zZXJ0VGV4dFwiLFxyXG4gICAgICBidWJibGVzOiAhMFxyXG4gICAgfSkpLCBlLmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXl1cFwiLCB7XHJcbiAgICAgIGtleTogcixcclxuICAgICAgYnViYmxlczogITAsXHJcbiAgICAgIGNhbmNlbGFibGU6ICEwXHJcbiAgICB9KSksIGF3YWl0ICgwLCBtLmRlbGF5KSgzMClcclxuICB9XHJcbiAgZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLCB7XHJcbiAgICBidWJibGVzOiAhMCxcclxuICAgIGNhbmNlbGFibGU6ICEwXHJcbiAgfSkpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gTChlLCB0LCByLCBuKSB7XHJcbiAgaWYgKCFlKSByZXR1cm47XHJcbiAgbGV0IG8gPSByIHx8IFwiXCIsXHJcbiAgICBpID0gdCxcclxuICAgIGEgPSAhMTtcclxuICBpZiAoKDAsIGMuaXNXb3JrYWJsZVBob25lSW5wdXQpKGUpKSBpID0gKDAsIGQuZm9ybWF0V29ya2FibGVQaG9uZVZhbHVlKSh0LCBuKTtcclxuICBlbHNlIGlmICgoMCwgYy5nZXRXb3JrYWJsZVNhbGFyeUZpZWxkVHlwZSkobykgPT09IGYuRklFTERfVFlQRS5OVU1CRVIpIHtcclxuICAgIGxldCBlID0gSSh0KTtcclxuICAgIGlmIChudWxsID09PSBlKSByZXR1cm47XHJcbiAgICBpID0gZSwgYSA9ICEwXHJcbiAgfVxyXG4gIGVpKGUpLCBhd2FpdCAoMCwgbS5kZWxheSkoMTAwKSwgYSA/IGF3YWl0IF8oZSwgaSkgOiBEKGUsIGkpLCBwLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKFxyXG4gICAgJy8vKltAZGF0YS11aT1cImVkdWNhdGlvblwiXScpPy5jb250YWlucyhlKSAmJiAoZS5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbShcIm5hbWVcIik/LnZhbHVlID09PVxyXG4gICAgXCJlbmRfZGF0ZVwiIHx8IGUuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0oXCJuYW1lXCIpPy52YWx1ZSA9PT0gXCJzdGFydF9kYXRlXCIpICYmIGF3YWl0ICgwLCBtXHJcbiAgICAuZGVsYXkpKDMwMCksIHAuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUoJy8vKltAZGF0YS11aT1cImV4cGVyaWVuY2VcIl0nKT8uY29udGFpbnMoZSkgJiYgKGVcclxuICAgIC5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbShcIm5hbWVcIik/LnZhbHVlID09PSBcImVuZF9kYXRlXCIgfHwgZS5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbShcIm5hbWVcIilcclxuICAgID8udmFsdWUgPT09IFwic3RhcnRfZGF0ZVwiKSAmJiBhd2FpdCAoMCwgbS5kZWxheSkoMzAwKSwgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcclxuICAgIFwibW91c2Vkb3duXCIsIHtcclxuICAgICAgYnViYmxlczogITAsXHJcbiAgICAgIGNhbmNlbGFibGU6ICEwLFxyXG4gICAgICB2aWV3OiB3aW5kb3dcclxuICAgIH0pKVxyXG59XHJcblxyXG5mdW5jdGlvbiBSKGUpIHtcclxuICByZXR1cm4gU3RyaW5nKGUgPz8gXCJcIikudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXCovZywgXCJcIikucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE8oZSkge1xyXG4gIHJldHVybiBbXCJ0cnVlXCIsIFwieWVzXCIsIFwieVwiLCBcIjFcIiwgXCJjaGVja2VkXCIsIFwiYWNjZXB0XCIsIFwiYWNjZXB0ZWRcIl0uaW5jbHVkZXMoUihlKSlcclxufVxyXG5cclxuZnVuY3Rpb24gTShlKSB7XHJcbiAgbGV0IHQgPSBbZS5sYWJlbCwgLi4uZS5vcHRpb25zIHx8IFtdXS5tYXAoUikuam9pbihcIiBcIik7XHJcbiAgcmV0dXJuIFtcImFncmVlXCIsIFwiYWdyZWVtZW50XCIsIFwiYWNjZXB0XCIsIFwiYWNrbm93bGVkZ2VcIiwgXCJhdXRob3JpemVcIiwgXCJjZXJ0aWZ5XCIsIFwiY29uc2VudFwiLFxyXG4gICAgXCJwcml2YWN5XCIsIFwidGVybXNcIiwgXCJub3RpY2VcIiwgXCJyZWFkIHVuZGVyc3RhbmRcIlxyXG4gIF0uc29tZShlID0+IHQuaW5jbHVkZXMoZSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE4oZSwgdCkge1xyXG4gIGlmIChNKGUpIHx8IHQuc29tZShPKSkgcmV0dXJuICEwO1xyXG4gIGxldCByID0gW2UubGFiZWwsIC4uLmUub3B0aW9ucyB8fCBbXV0ubWFwKFIpLmZpbHRlcihCb29sZWFuKTtcclxuICByZXR1cm4gdC5tYXAoUikuZmlsdGVyKEJvb2xlYW4pLnNvbWUoZSA9PiByLnNvbWUodCA9PiAoMCwgby5pc0V4YWN0Q2hvaWNlTWF0Y2gpKHQsIGUpKSlcclxufVxyXG5cclxuZnVuY3Rpb24gJChlKSB7XHJcbiAgaWYgKCFlKSByZXR1cm4gbnVsbDtcclxuICBmb3IgKGxldCB0IG9mIFtcImFyaWEtY2hlY2tlZFwiLCBcImRhdGEtY2hlY2tlZFwiXSkge1xyXG4gICAgbGV0IHIgPSBlLmdldEF0dHJpYnV0ZSh0KTtcclxuICAgIGlmIChcInRydWVcIiA9PT0gcikgcmV0dXJuICEwO1xyXG4gICAgaWYgKFwiZmFsc2VcIiA9PT0gcikgcmV0dXJuICExXHJcbiAgfVxyXG4gIHJldHVybiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEIoZSkge1xyXG4gIGlmICghZS5pZCB8fCBcInVuZGVmaW5lZFwiID09IHR5cGVvZiBkb2N1bWVudCkgcmV0dXJuIG51bGw7XHJcbiAgbGV0IHQgPSBlLmlkLnJlcGxhY2UoL1xcXFwvZywgXCJcXFxcXFxcXFwiKS5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJyk7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke3R9XCJdYClcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBxKGUpIHtcclxuICByZXR1cm4gITAgPT09IGUuY2hlY2tlZFxyXG59XHJcblxyXG5mdW5jdGlvbiBVKGUpIHtcclxuICByZXR1cm4gJChlLmNsb3Nlc3QoXCJbcm9sZT0ncmFkaW8nXSwgW2RhdGEtdWk9J29wdGlvbiddXCIpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBIKGUsIHQpIHtcclxuICByZXR1cm4gdC5sZW5ndGggPiAxICYmIGUuJGxhYmVsPy5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpID09PSBcInJhZGlvZ3JvdXBcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBZKGUsIHQpIHtcclxuICBsZXQgciA9IHQubWFwKFIpO1xyXG4gIHJldHVybiAoZS5vcHRpb25zIHx8IFtdKS5maW5kSW5kZXgoZSA9PiB7XHJcbiAgICBsZXQgdCA9IFIoZSk7XHJcbiAgICByZXR1cm4gci5zb21lKGUgPT4gdCA9PT0gZSB8fCBcInRydWVcIiA9PT0gZSAmJiBcInllc1wiID09PSB0IHx8IFwiZmFsc2VcIiA9PT0gZSAmJiBcIm5vXCIgPT09IHQpXHJcbiAgfSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiB6KGUsIHQsIHIpIHtcclxuICBsZXQgbiA9IFkoZSwgdCksXHJcbiAgICBvID0gcltuXTtcclxuICBpZiAoIW8pIHJldHVybiAhMTtcclxuICBhd2FpdCBlbihvLCBlKTtcclxuICBsZXQgaSA9IFUobyk7XHJcbiAgcmV0dXJuICEhby5jaGVja2VkICYmICExICE9PSBpICYmIHIuZXZlcnkoKGUsIHQpID0+IHtcclxuICAgIGlmICh0ID09PSBuKSByZXR1cm4gITA7XHJcbiAgICBsZXQgciA9IFUoZSk7XHJcbiAgICByZXR1cm4gIWUuY2hlY2tlZCAmJiAhMCAhPT0gclxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFYoZSwgdCkge1xyXG4gIHQgJiYgIWUuaW5jbHVkZXModCkgJiYgZS5wdXNoKHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFcoZSkge1xyXG4gIHJldHVybiBlID8gUihlLmlubmVyVGV4dCB8fCBlLnRleHRDb250ZW50IHx8IFwiXCIpIDogXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBHKGUpIHtcclxuICBsZXQgdCA9IFtlLmxhYmVsLCAuLi5lLm9wdGlvbnMgfHwgW11dLm1hcChSKS5maWx0ZXIoZSA9PiBlICYmIFwiKlwiICE9PSBlICYmIGUubGVuZ3RoID49IDQpO1xyXG4gIHJldHVybiBNKGUpICYmIHQucHVzaChcInByaXZhY3kgbm90aWNlXCIsIFwiY29uc2VudCB0byB0aGUgcHJvY2Vzc2luZ1wiLCBcInByb2Nlc3Npbmcgb2YgbXkgZGF0YVwiLFxyXG4gICAgXCJwYXJ0IG9mIHRoaXMgYXBwbGljYXRpb25cIiksIEFycmF5LmZyb20obmV3IFNldCh0KSlcclxufVxyXG5cclxuZnVuY3Rpb24gSyhlLCB0KSB7XHJcbiAgbGV0IHIgPSBXKGUpO1xyXG4gIHJldHVybiAhIXIgJiYgdC5zb21lKGUgPT4gZS5sZW5ndGggPCA4ID8gciA9PT0gZSA6IHIuaW5jbHVkZXMoZSkgfHwgZS5pbmNsdWRlcyhyKSAmJiByLmxlbmd0aCA+PVxyXG4gICAgMTYpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFgoZSkge1xyXG4gIGlmIChcInVuZGVmaW5lZFwiID09IHR5cGVvZiBkb2N1bWVudCkgcmV0dXJuIFtdO1xyXG4gIGxldCB0ID0gRyhlKTtcclxuICByZXR1cm4gdC5sZW5ndGggJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsID8gQXJyYXkuZnJvbShkb2N1bWVudFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsYWJlbCwgW3JvbGU9J2NoZWNrYm94J10sIFtkYXRhLXVpPSdvcHRpb24nXSwgYnV0dG9uLCBzcGFuLCBkaXZcIikpLmZpbHRlcihcclxuICAgIGUgPT4gSyhlLCB0KSkuc29ydCgoZSwgdCkgPT4gVyhlKS5sZW5ndGggLSBXKHQpLmxlbmd0aCkgOiBbXVxyXG59XHJcblxyXG5mdW5jdGlvbiBKKGUsIHQpIHtcclxuICBsZXQgciA9IFtdLFxyXG4gICAgbiA9IGUuY2xvc2VzdChcIltkYXRhLXVpPSdvcHRpb24nXVwiKTtcclxuICBmb3IgKGxldCBvIG9mIChWKHIsIGUuY2xvc2VzdChcImxhYmVsXCIpKSwgVihyLCBCKGUpKSwgVihyLCBlLmNsb3Nlc3QoXCJbcm9sZT0nY2hlY2tib3gnXVwiKSksIFYocixcclxuICAgICAgbiksIFYociwgdC4kbGFiZWwpLCBYKHQpKSkgVihyLCBvKTtcclxuICByZXR1cm4gVihyLCBlKSwgclxyXG59XHJcblxyXG5mdW5jdGlvbiBRKGUpIHtcclxuICByZXR1cm4gXCJmdW5jdGlvblwiID09IHR5cGVvZiBNb3VzZUV2ZW50ID8gbmV3IE1vdXNlRXZlbnQoZSwge1xyXG4gICAgYnViYmxlczogITAsXHJcbiAgICBjYW5jZWxhYmxlOiAhMCxcclxuICAgIHZpZXc6IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdyA/IHdpbmRvdyA6IHZvaWQgMFxyXG4gIH0pIDogbmV3IEV2ZW50KGUsIHtcclxuICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgY2FuY2VsYWJsZTogITBcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBaKGUpIHtcclxuICBlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIiwge1xyXG4gICAgYnViYmxlczogITAsXHJcbiAgICBjYW5jZWxhYmxlOiAhMFxyXG4gIH0pKSwgZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLCB7XHJcbiAgICBidWJibGVzOiAhMCxcclxuICAgIGNhbmNlbGFibGU6ICEwXHJcbiAgfSkpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZWUoKSB7XHJcbiAgaWYgKEUpIHJldHVybiAhMDtcclxuICBpZiAoeCkgcmV0dXJuICExO1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgZSA9IGF3YWl0IG5ldyBQcm9taXNlKChlLCB0KSA9PiB7XHJcbiAgICAgIGxldCByID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdChFcnJvcihcImluamVjdFdvcmthYmxlQ2hlY2tib3ggdGltZWQgb3V0XCIpKVxyXG4gICAgICB9LCB5KTtcclxuICAgICAgUHJvbWlzZS5yZXNvbHZlKCgwLCBsLnNlbmRUb0JhY2tncm91bmQpKHtcclxuICAgICAgICBuYW1lOiBcImluamVjdFdvcmthYmxlQ2hlY2tib3hcIlxyXG4gICAgICB9KSkudGhlbih0ID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQociksIGUodCA/PyB7fSlcclxuICAgICAgfSwgZSA9PiB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHIpLCB0KGUpXHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICAgIGlmIChlPy5zdWNjZXNzICE9PSAhMCkgdGhyb3cgRXJyb3IoXCJpbmplY3RXb3JrYWJsZUNoZWNrYm94IGRpZCBub3QgcmV0dXJuIHN1Y2Nlc3M9dHJ1ZVwiKTtcclxuICAgIHJldHVybiBFID0gITAsICEwXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHggPSAhMCwgY29uc29sZS53YXJuKFwiW1dvcmthYmxlQ2hlY2tib3hdIGZhaWxlZCB0byBpbmplY3QgbWFpbiB3b3JsZCBzY3JpcHQ6XCIsIGUpLCAhMVxyXG4gIH1cclxufVxyXG5hc3luYyBmdW5jdGlvbiBldChlLCB0KSB7XHJcbiAgaWYgKFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIGRvY3VtZW50IHx8IFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciB8fFxyXG4gICAgXCJmdW5jdGlvblwiICE9IHR5cGVvZiBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KSByZXR1cm4gITE7XHJcbiAgbGV0IHIgPSBhd2FpdCBlZSgpO1xyXG4gIGlmICghcikgcmV0dXJuICExO1xyXG4gIGxldCBuID0gYCR7RGF0ZS5ub3coKX1fJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLDgpfWAsXHJcbiAgICBvID0gYF9fanJfd29ya2FibGVfY2hlY2tib3hfJHtufWA7XHJcbiAgZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWpyLXdvcmthYmxlLWNoZWNrYm94LWlkXCIsIG8pO1xyXG4gIGxldCBpID0gYFtkYXRhLWpyLXdvcmthYmxlLWNoZWNrYm94LWlkPVwiJHtvfVwiXWA7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHIgPT4ge1xyXG4gICAgbGV0IG8gPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLCBhKSwgcighMSlcclxuICAgIH0sIHYpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGEodCkge1xyXG4gICAgICBsZXQgaSA9IHQuZGV0YWlsO1xyXG4gICAgICBpPy5yZXF1ZXN0SWQgPT09IG4gJiYgKGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoYiwgYSksIGNsZWFyVGltZW91dChvKSwgcihpXHJcbiAgICAgICAgPy5zdWNjZXNzID09PSAhMCAmJiBxKGUpKSlcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoYiwgYSksIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGcsIHtcclxuICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgcmVxdWVzdElkOiBuLFxyXG4gICAgICAgIHNlbGVjdG9yOiBpLFxyXG4gICAgICAgIGxhYmVsOiB0LmxhYmVsLFxyXG4gICAgICAgIG9wdGlvbnM6IHQub3B0aW9ucyB8fCBbXVxyXG4gICAgICB9XHJcbiAgICB9KSlcclxuICB9KVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVyKGUsIHQpIHtcclxuICBmb3IgKGxldCByIG9mIEooZSwgdCkpXHJcbiAgICBpZiAoci5zY3JvbGxJbnRvVmlldz8uKHtcclxuICAgICAgICBibG9jazogXCJjZW50ZXJcIixcclxuICAgICAgICBpbmxpbmU6IFwibmVhcmVzdFwiXHJcbiAgICAgIH0pLCByLmZvY3VzPy4oKSwgci5kaXNwYXRjaEV2ZW50KFEoXCJtb3VzZWRvd25cIikpLCByLmRpc3BhdGNoRXZlbnQoUShcIm1vdXNldXBcIikpLFxyXG4gICAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHIuY2xpY2sgPyByLmNsaWNrKCkgOiByLmRpc3BhdGNoRXZlbnQoUShcImNsaWNrXCIpKSwgWihlKSwgYXdhaXQgKDAsIG1cclxuICAgICAgICAuZGVsYXkpKDEyMCksIHEoZSkpIHJldHVybiAhMDtcclxuICByZXR1cm4gcShlKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVuKGUsIHQpIHtcclxuICBpZiAocShlKSB8fCBhd2FpdCBldChlLCB0KSkgcmV0dXJuICEwO1xyXG4gIGZvciAobGV0IHIgb2YgSihlLCB0KSlcclxuICAgIGlmIChyLnNjcm9sbEludG9WaWV3Py4oe1xyXG4gICAgICAgIGJsb2NrOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGlubGluZTogXCJuZWFyZXN0XCJcclxuICAgICAgfSksIHIuZm9jdXM/LigpLCByLmRpc3BhdGNoRXZlbnQoUShcIm1vdXNlZG93blwiKSksIHIuZGlzcGF0Y2hFdmVudChRKFwibW91c2V1cFwiKSksXHJcbiAgICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygci5jbGljayA/IHIuY2xpY2soKSA6IHIuZGlzcGF0Y2hFdmVudChRKFwiY2xpY2tcIikpLCBaKGUpLCBhd2FpdCAoMCwgbVxyXG4gICAgICAgIC5kZWxheSkoNTApLCBxKGUpICYmIChhd2FpdCAoMCwgbS5kZWxheSkoMTUwKSwgcShlKSkpIHJldHVybiAhMDtcclxuICByZXR1cm4gYXdhaXQgZXIoZSwgdClcclxufVxyXG5hc3luYyBmdW5jdGlvbiBlbyhlLCB0KSB7XHJcbiAgbGV0IHIgPSBBcnJheS5pc0FycmF5KHQpID8gdCA6IFt0XSxcclxuICAgIG4gPSBBcnJheS5mcm9tKGUuJGNoZWNrYm94cyB8fCBbXSk7XHJcbiAgaWYgKCFuLmxlbmd0aCkgcmV0dXJuICExO1xyXG4gIGxldCBvID0gMSA9PT0gbi5sZW5ndGggJiYgblswXT8udHlwZSA9PT0gXCJjaGVja2JveFwiO1xyXG4gIGlmIChvKSB7XHJcbiAgICBsZXQgdCA9IG5bMF07XHJcbiAgICByZXR1cm4gTihlLCByKSA/IGF3YWl0IGVuKHQsIGUpIDogIXEodClcclxuICB9XHJcbiAgaWYgKEgoZSwgbikpIHJldHVybiBhd2FpdCB6KGUsIHIsIG4pO1xyXG4gIGxldCBpID0gYXdhaXQgKDAsIHUuZmlsbENoZWNrQm94ZXNGaWVsZCkoZSwgcik7XHJcbiAgcmV0dXJuICExICE9PSBpICYmIChhd2FpdCAoMCwgbS5kZWxheSkoNTApLCBuLnNvbWUoZSA9PiBxKGUpKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZWkoZSkge1xyXG4gIGxldCB0ID0gbmV3IEtleWJvYXJkRXZlbnQoXCJrZXlkb3duXCIsIHtcclxuICAgIGtleTogXCJCYWNrc3BhY2VcIixcclxuICAgIGNvZGU6IFwiQmFja3NwYWNlXCIsXHJcbiAgICBrZXlDb2RlOiA4LFxyXG4gICAgd2hpY2g6IDgsXHJcbiAgICBidWJibGVzOiAhMCxcclxuICAgIGNhbmNlbGFibGU6ICEwXHJcbiAgfSk7XHJcbiAgZT8uZGlzcGF0Y2hFdmVudCh0KVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVhKGUsIHQpIHtcclxuICB0cnkge1xyXG4gICAgbGV0IHIgPSB0WzBdLFxyXG4gICAgICBuID0gZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgaWYgKCFuKSB0aHJvdyBFcnJvcihcIk5vIHdyYXBwZXIgZWxlbWVudCBmb3VuZFwiKTtcclxuICAgIGxldCBvID0gbi5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIik7XHJcbiAgICBpZiAoIW8pIHRocm93IEVycm9yKFwiTm8gbGFiZWwgZWxlbWVudCBmb3VuZFwiKTtcclxuICAgIG8uY2xpY2soKSwgYXdhaXQgKDAsIG0uZGVsYXkpKDQwMCk7XHJcbiAgICBsZXQgaSA9IG4ucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcclxuICAgIGlmICghaSkgdGhyb3cgRXJyb3IoXCJObyBkaWFsb2cgZWxlbWVudCBmb3VuZFwiKTtcclxuICAgIGxldCBhID0gaS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwic2VhcmNoXCJdJyk7XHJcbiAgICBpZiAoYSkge1xyXG4gICAgICBEKGEsIHIpLCBhd2FpdCAoMCwgbS5kZWxheSkoMjAwKTtcclxuICAgICAgbGV0IGUgPSBpLnF1ZXJ5U2VsZWN0b3IoXCJ1bD5saVwiKTtcclxuICAgICAgaWYgKCFlKSByZXR1cm47XHJcbiAgICAgIGUuY2xpY2soKSwgYXdhaXQgKDAsIG0uZGVsYXkpKDEwMClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBlID0gQXJyYXkuZnJvbShpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ1bD5saVwiKSk7XHJcbiAgICAgIGlmICghZT8ubGVuZ3RoKSB0aHJvdyBFcnJvcihcIk5vIG9wdGlvbnMgZm91bmRcIik7XHJcbiAgICAgIGZvciAobGV0IHQgb2YgZSkge1xyXG4gICAgICAgIGxldCBlID0gdC5pbm5lclRleHQudHJpbSgpO1xyXG4gICAgICAgIGlmIChlICYmIGUudG9Mb3dlckNhc2UoKSA9PT0gci50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICB0LmNsaWNrKCksIGF3YWl0ICgwLCBtLmRlbGF5KSgxMDApO1xyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGNhdGNoIHt9IGZpbmFsbHkge1xyXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNldXBcIiwge1xyXG4gICAgICBidWJibGVzOiAhMCxcclxuICAgICAgY2FuY2VsYWJsZTogITAsXHJcbiAgICAgIHZpZXc6IHdpbmRvd1xyXG4gICAgfSkpXHJcbiAgfVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVsKCkge1xyXG4gIGxldCBlID0gKDAsIHAuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoXHJcbiAgICAnLy9kaXZbQGRhdGEtdWk9XCJlZHVjYXRpb25cIl0vL2J1dHRvbltAZGF0YS11aT1cInNhdmUtc2VjdGlvblwiXScpO1xyXG4gIGUgJiYgKGUuY2xpY2soKSwgYXdhaXQgKDAsIG0uZGVsYXkpKDUwMCkpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZXMoKSB7XHJcbiAgbGV0IGUgPSAoMCwgcC5nZXRGaXJzdE9yZGVyZWROb2RlKShcclxuICAgICcvL2RpdltAZGF0YS11aT1cImV4cGVyaWVuY2VcIl0vL2J1dHRvbltAZGF0YS11aT1cInNhdmUtc2VjdGlvblwiXScpO1xyXG4gIGUgJiYgKGUuY2xpY2soKSwgYXdhaXQgKDAsIG0uZGVsYXkpKDUwMCkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV1KCkge1xyXG4gIGxldCBlID0gQShcImVkdWNhdGlvblwiKTtcclxuICBlICYmIGUuY2xpY2soKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlYygpIHtcclxuICBsZXQgZSA9IEEoXCJleHBlcmllbmNlXCIpO1xyXG4gIGUgJiYgZS5jbGljaygpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZWQoKSB7XHJcbiAgYXdhaXQgTCgoMCwgcC5nZXRGaXJzdE9yZGVyZWROb2RlKShcclxuICAgICAgJy8vc2VjdGlvbltAZGF0YS11aT1cInNlY3Rpb25cIl0vL2lucHV0W0BwbGFjZWhvbGRlcj1cIllZWVkvTU0vRERcIl0nKSwgKDAsIGEuZGVmYXVsdCkoKVxyXG4gICAgLmZvcm1hdChcIllZWVkvTU0vRERcIikpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVmKCkge1xyXG4gIGxldCBlID0gKDAsIHAuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoJy8vKltAaWQ9XCJtYWluQ29udGVudFwiXSB8IC8vbWFpbicpO1xyXG4gIGlmIChlKVxyXG4gICAgZm9yIChsZXQgdCA9IDA7IHQgPCAzOyB0KyspKDAsIHUudHJpZ2dlckV2ZW50cykoZSwgW1wiY2xpY2tcIl0pLCAoMCwgdS50cmlnZ2VyRXZlbnRzKShlLCBbXHJcbiAgICAgIFwibW91c2Vkb3duXCJcclxuICAgIF0pLCAoMCwgdS50cmlnZ2VyRXZlbnRzKShlLCBbXCJtb3VzZXVwXCJdKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlcChlKSB7XHJcbiAgaWYgKGUpIHtcclxuICAgIGUucGFyZW50Tm9kZTtcclxuICAgIGxldCB0ID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZSA9PiB7XHJcbiAgICAgIGZvciAobGV0IHIgb2YgZSlcclxuICAgICAgICBmb3IgKGxldCBlIG9mIHIuYWRkZWROb2RlcykoZT8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLXVpXCIpID09PSBcInN1Y2Nlc3NmdWwtc3VibWl0XCIgfHwgZVxyXG4gICAgICAgICAgPy5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdWk9J3N1Y2Nlc3NmdWwtc3VibWl0J11cIikubGVuZ3RoID4gMCkgJiYgKHQuZGlzY29ubmVjdCgpLFxyXG4gICAgICAgICAgd2luZG93LnRvcD8ucG9zdE1lc3NhZ2UoaC5jbGVhbk9iamVjdCh7XHJcbiAgICAgICAgICAgIHR5cGU6IGYuTUVTU0FHRV9FVkVOVFMuYWdlbnRTdWJtaXRDbGlja2VkXHJcbiAgICAgICAgICB9KSwge1xyXG4gICAgICAgICAgICB0YXJnZXRPcmlnaW46IFwiKlwiXHJcbiAgICAgICAgICB9KSlcclxuICAgIH0pO1xyXG4gICAgdC5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpLCB7XHJcbiAgICAgIGNoaWxkTGlzdDogITAsXHJcbiAgICAgIHN1YnRyZWU6ICEwXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6Im9wZXJhdGlvbnMuZTJlYmFjMzcuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);