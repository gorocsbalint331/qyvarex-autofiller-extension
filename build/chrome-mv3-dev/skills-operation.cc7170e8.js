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
})({"gCB8t":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\google\\skills-operation.js",
    "bundleId": "420d4deccc7170e8",
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
var j = z(require("2d1c1c927a4830fc"));
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

},{"2d1c1c927a4830fc":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"aBDbZ":[function(require,module,exports) {
/**
 * Parcel module id: cPUQK
 * Resolved path: src/contents/sites/google/skills-operation.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/autocomplete-listbox -> b2rO1  =>  src/contents/methods/autocomplete-listbox.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "GOOGLE_SKILLS_LABEL", ()=>a), n.export(r, "findExactGoogleSkillOption", ()=>g), n.export(r, "readGoogleSkillChips", ()=>b), n.export(r, "fillGoogleSkillsAutocomplete", ()=>C), n.export(r, "fillGoogleSkillItems", ()=>I);
var o = e("~contents/methods/cancellation"), i = e("~contents/methods/autocomplete-listbox");
let a = "What skills do you have? You can add up to 25 skills";
function l(e1) {
    return s(e1);
}
function s(e1) {
    return (e1 || "").replace(/\s+/g, " ").trim().toLowerCase();
}
function u(e1) {
    return s(e1.textContent ?? "");
}
function c(e1) {
    let t = e1.cloneNode(!0);
    for (let e1 of Array.from(t.querySelectorAll('[data-mdc-deletable="true"]')))e1.remove();
    return u(t);
}
function d(e1) {
    return e1.closest(".rbgmcb")?.parentElement ?? e1.closest(".Pmvvze") ?? e1.parentElement;
}
function f(e1, t) {
    let r1 = e1.getAttribute("aria-label") ?? a, n = d(e1), o = [
        n,
        t
    ].filter((e1, t, r1)=>!!e1 && e1.isConnected && r1.indexOf(e1) === t);
    for (let e1 of o){
        let t = Array.from(e1.querySelectorAll('input[role="combobox"]')).find((e1)=>e1.isConnected && (e1.getAttribute("aria-label") ?? "") === r1);
        if (t) return t;
    }
    return null;
}
function p(e1, t) {
    return (0, i.findAutocompleteListbox)(e1, t, e1.closest(".Pmvvze"));
}
function m(e1, t) {
    let r1 = e1.getAttribute("aria-controls"), n = r1 ? t.getElementById(r1) : null, o = e1.closest(".Pmvvze"), i = s(e1.getAttribute("aria-label") ?? ""), a = o ? Array.from(o.querySelectorAll('[role="listbox"]')) : [];
    return {
        inputConnected: e1.isConnected,
        inputExpanded: "true" === e1.getAttribute("aria-expanded"),
        controlledTargetPresent: !!n,
        controlledTargetRole: n?.getAttribute("role") ?? null,
        scopedListboxCount: a.filter((e1)=>e1.isConnected).length,
        exactLabelListboxCount: a.filter((e1)=>e1.isConnected && s(e1.getAttribute("aria-label") ?? "") === i).length
    };
}
function h(e1, t) {
    console.log(`[GoogleSkillsDebug] ${e1} ${JSON.stringify(t)}`);
}
function g(e1, t) {
    let r1 = s(t);
    return r1 ? Array.from(e1.querySelectorAll('[role="option"]')).find((e1)=>u(e1) === r1) ?? null : null;
}
function b(e1, t = document) {
    let r1 = e1.closest(".Pmvvze"), n = r1 ?? d(e1) ?? t, o = new Set, i = Array.from(n.querySelectorAll('[role="grid"]'));
    for (let e1 of i)if (!(!e1.isConnected || e1.closest('[role="listbox"]'))) for (let t of Array.from(e1.querySelectorAll('[role="row"]'))){
        if (!t.isConnected) continue;
        let e1 = t.querySelector('[role="gridcell"]'), r1 = "true" === t.getAttribute("data-mdc-deletable") || !!t.querySelector('[data-mdc-deletable="true"]'), n = e1 && r1 ? c(e1) : "";
        n && o.add(n);
    }
    return [
        ...o
    ];
}
function y(e1, t) {
    let r1 = "undefined" == typeof HTMLInputElement ? void 0 : Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
    try {
        r1?.set?.call(e1, t);
    } catch  {}
    e1.value !== t && (e1.value = t);
}
function v(e1, t) {
    e1.focus(), e1.dispatchEvent(new Event("focusin", {
        bubbles: !0
    })), y(e1, ""), e1.dispatchEvent(new Event("input", {
        bubbles: !0,
        composed: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0,
        composed: !0
    })), y(e1, t), e1.dispatchEvent(new Event("input", {
        bubbles: !0,
        composed: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0,
        composed: !0
    }));
    try {
        e1.dispatchEvent(new KeyboardEvent("keydown", {
            bubbles: !0,
            key: t[0] || "a"
        }));
    } catch  {
        e1.dispatchEvent(new Event("keydown", {
            bubbles: !0
        }));
    }
}
function w(e1, t, r1) {
    let n = "pointerdown" === t || "mousedown" === t;
    try {
        let o = t.startsWith("pointer") && "undefined" != typeof PointerEvent ? new PointerEvent(t, {
            bubbles: !0,
            cancelable: !0,
            composed: !0,
            view: window,
            button: 0,
            buttons: n ? 1 : 0,
            clientX: r1.x,
            clientY: r1.y,
            pointerId: 1,
            pointerType: "mouse",
            isPrimary: !0,
            pressure: n ? .5 : 0
        }) : "undefined" != typeof MouseEvent ? new MouseEvent(t, {
            bubbles: !0,
            cancelable: !0,
            composed: !0,
            view: window,
            button: 0,
            buttons: n ? 1 : 0,
            clientX: r1.x,
            clientY: r1.y,
            detail: 1
        }) : new Event(t, {
            bubbles: !0,
            cancelable: !0
        });
        return e1.dispatchEvent(o);
    } catch  {
        return e1.dispatchEvent(new Event(t, {
            bubbles: !0,
            cancelable: !0
        }));
    }
}
async function S(e1) {
    let t = e1.querySelector('[jsname="K4r5Ff"]') ?? e1;
    try {
        e1.scrollIntoView({
            block: "nearest",
            inline: "nearest"
        });
    } catch  {}
    try {
        e1.focus({
            preventScroll: !0
        });
    } catch  {}
    let r1 = t.getBoundingClientRect?.(), n = {
        x: r1 ? r1.left + r1.width / 2 : 0,
        y: r1 ? r1.top + r1.height / 2 : 0
    }, o = [];
    return o.push(w(t, "pointerdown", n)), o.push(w(t, "mousedown", n)), await new Promise((e1)=>setTimeout(e1, 50)), o.push(w(t, "pointerup", n)), o.push(w(t, "mouseup", n)), o.push(w(t, "click", n)), e1.isConnected && e1.click(), {
        targetTag: t.tagName?.toLowerCase() ?? null,
        targetJsname: t.getAttribute("jsname"),
        hasLayoutRect: !!r1 && r1.width > 0 && r1.height > 0,
        dispatchAccepted: o.every(Boolean)
    };
}
_c = S;
function E(e1) {
    y(e1, ""), e1.dispatchEvent(new Event("input", {
        bubbles: !0,
        composed: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0,
        composed: !0
    }));
}
_c1 = E;
function x(e1) {
    return e1 instanceof o.CancelledError || e1 instanceof o.SkippedError;
}
async function C(e1, t, r1 = {}) {
    let n = r1.root ?? document, i = r1.wait ?? o.cancellableDelay, a = 0, l = async ()=>{
        (0, o.checkpoint)();
        let t = f(e1, n);
        return t ? b(t, n) : [];
    }, u = {
        readCommittedItems: l,
        readCommittedItemsOnInterruption () {
            let t = f(e1, n);
            return t ? b(t, n) : [];
        },
        async attemptExactItem (t) {
            (0, o.checkpoint)(), a += 1;
            let r1 = a, u = !1, c = 0;
            try {
                let a = f(e1, n);
                if (!a) {
                    h("attempt:no-live-input", {
                        attempt: r1
                    });
                    return;
                }
                h("attempt:start", {
                    attempt: r1,
                    ...m(a, n)
                }), v(a, t), u = !0;
                let d = !1, b = m(a, n);
                for(let a = 0; a < 20; a += 1){
                    (0, o.checkpoint)();
                    let l = f(e1, n);
                    if (!l) break;
                    let s = p(l, n);
                    b = m(l, n);
                    let u = s ? g(s, t) : null;
                    if (u) {
                        (0, o.checkpoint)(), h("attempt:exact-option-found", {
                            attempt: r1,
                            poll: a,
                            optionCount: s?.querySelectorAll('[role="option"]').length ?? 0,
                            listboxSource: s?.id && s.id === l.getAttribute("aria-controls") ? "aria-controls" : "scoped-label"
                        });
                        let e1 = await S(u);
                        d = !0, h("attempt:click-dispatched", {
                            attempt: r1,
                            optionConnectedAfterClick: u.isConnected,
                            ...e1
                        });
                        break;
                    }
                    await i(100);
                }
                if (!d) {
                    h("attempt:no-exact-option", {
                        attempt: r1,
                        ...b
                    });
                    return;
                }
                let y = s(t);
                for(let e1 = 0; e1 < 10; e1 += 1){
                    (0, o.checkpoint)();
                    let t = await l();
                    if (c = t.length, t.some((e1)=>s(e1) === y)) {
                        h("attempt:chip-committed", {
                            attempt: r1,
                            poll: e1,
                            committedCount: c
                        });
                        return;
                    }
                    await i(100);
                }
                h("attempt:click-not-committed", {
                    attempt: r1,
                    committedCount: c
                });
            } finally{
                if (u) try {
                    let t = f(e1, n);
                    t && E(t);
                } catch  {}
            }
        }
    };
    h("fill:start", {
        requestedCount: t.length
    });
    try {
        let e1 = await I(t, u, {
            maxItems: 25,
            maxAttempts: 2,
            isInterruption: x,
            onInterruptedResult: r1.onInterruptedResult
        });
        return h("fill:complete", {
            status: e1.status,
            requestedCount: e1.requestedItems.length,
            succeededCount: e1.succeededItems.length,
            failedCount: e1.failedItems.length
        }), e1;
    } catch (e1) {
        throw h("fill:interrupted", {
            interruption: x(e1),
            errorName: e1 instanceof Error ? e1.name : typeof e1
        }), e1;
    }
}
_c2 = C;
function A(e1) {
    let t = new Set, r1 = [];
    for (let n of e1){
        let e1 = n.trim(), o = l(n);
        !e1 || t.has(o) || (t.add(o), r1.push({
            display: e1,
            key: o
        }));
    }
    return r1;
}
_c3 = A;
function k(e1) {
    return new Set(e1.map(l).filter(Boolean));
}
function T(e1, t, r1) {
    return e1.length > 0 && 0 === r1.length ? "filled" : t.length > 0 && r1.length > 0 ? "partial" : "missing";
}
_c4 = T;
function F(e1, t) {
    return Number.isFinite(e1) ? Math.max(0, Math.floor(e1)) : t;
}
_c5 = F;
async function I(e1, t, r1 = {}) {
    let n = A(e1), o = n.map(({ display: e1 })=>e1), i = [], a = [], s = [], u = F(r1.maxItems, 25), c = Math.max(1, F(r1.maxAttempts, 2)), d = null, f = ()=>({
            status: i.length > 0 ? "partial" : "missing",
            requestedItems: [
                ...s
            ],
            succeededItems: [
                ...i
            ],
            failedItems: [
                ...a
            ]
        }), p = (e1)=>{
        let t = k(e1), r1 = new Set(s.map(l)), o = n.filter((e1)=>r1.has(e1.key) || d?.key === e1.key && t.has(e1.key)), i = [], a = [];
        for (let e1 of o)t.has(e1.key) ? i.push(e1.display) : a.push(e1.display);
        return {
            status: i.length > 0 ? "partial" : "missing",
            requestedItems: o.map(({ display: e1 })=>e1),
            succeededItems: i,
            failedItems: a
        };
    }, m = async (e1)=>{
        if (!r1.isInterruption?.(e1)) return;
        let n = f();
        if (t.readCommittedItemsOnInterruption) try {
            n = p([
                ...await t.readCommittedItemsOnInterruption()
            ]);
        } catch  {}
        try {
            await r1.onInterruptedResult?.(n);
        } catch  {}
        throw e1;
    }, h = async ()=>{
        try {
            let e1 = [
                ...await t.readCommittedItems()
            ];
            return {
                ok: !0,
                keys: k(e1)
            };
        } catch (e1) {
            return await m(e1), {
                ok: !1
            };
        }
    }, g = await h(), b = (e1, t)=>{
        for (let r1 of n.slice(e1))t.has(r1.key) ? i.push(r1.display) : a.push(r1.display), s.push(r1.display);
    };
    for(let e1 = 0; e1 < n.length; e1 += 1){
        let r1 = n[e1], o = g.ok ? g.keys : new Set;
        if (g.ok && o.has(r1.key)) {
            i.push(r1.display), s.push(r1.display);
            continue;
        }
        if (g.ok && o.size >= u) {
            b(e1, o);
            break;
        }
        let l = !1, f = !1;
        d = r1;
        for(let e1 = 0; e1 < c; e1 += 1){
            try {
                await t.attemptExactItem(r1.display);
            } catch (e1) {
                await m(e1);
            }
            if (o = (g = await h()).ok ? g.keys : new Set, g.ok && o.has(r1.key)) {
                l = !0;
                break;
            }
            if (g.ok && o.size >= u) {
                f = !0;
                break;
            }
        }
        if (l) {
            i.push(r1.display), s.push(r1.display), d = null;
            continue;
        }
        if (f) {
            b(e1, o), d = null;
            break;
        }
        a.push(r1.display), s.push(r1.display), d = null;
    }
    let y = await h(), v = y.ok ? y.keys : new Set, w = y.ok ? n.filter(({ key: e1 })=>v.has(e1)).map(({ display: e1 })=>e1) : [], S = y.ok ? n.filter(({ key: e1 })=>!v.has(e1)).map(({ display: e1 })=>e1) : [
        ...o
    ];
    return {
        status: T(o, w, S),
        requestedItems: o,
        succeededItems: w,
        failedItems: S
    };
}
_c6 = I;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
$RefreshReg$(_c, "S");
$RefreshReg$(_c1, "E");
$RefreshReg$(_c2, "C");
$RefreshReg$(_c3, "A");
$RefreshReg$(_c4, "T");
$RefreshReg$(_c5, "F");
$RefreshReg$(_c6, "I");

},{}]},["gCB8t","aBDbZ"], "aBDbZ", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QUFDO2dCQUFFLE1BQUssRUFBRTtZQUFFO1FBQUMsRUFBQyxPQUFNLElBQUU7WUFBQyxPQUFPLE1BQU0sRUFBRSxLQUFHO2dCQUFDLElBQUcsQ0FBQztZQUFDO1FBQUM7SUFBQyxHQUFFLElBQUUsTUFBTSxLQUFJLElBQUUsQ0FBQyxJQUFFO1FBQUssS0FBSSxJQUFJLE1BQUssRUFBRSxNQUFNLElBQUcsRUFBRSxJQUFJLEdBQUUsT0FBSyxFQUFFLEtBQUssR0FBRSxXQUFTLEVBQUUsS0FBSyxHQUFFLFVBQVMsRUFBRSxLQUFLLEdBQUU7SUFBUTtJQUFFLElBQUksSUFBSSxLQUFFLEdBQUUsS0FBRSxFQUFFLFFBQU8sTUFBRyxFQUFFO1FBQUMsSUFBSSxLQUFFLENBQUMsQ0FBQyxHQUFFLEVBQUMsSUFBRSxFQUFFLEtBQUcsRUFBRSxPQUFLLElBQUk7UUFBSSxJQUFHLEVBQUUsTUFBSSxFQUFFLElBQUksR0FBRSxNQUFLO1lBQUMsRUFBRSxLQUFLLEdBQUUsVUFBUyxFQUFFLEtBQUssR0FBRTtZQUFTO1FBQVE7UUFBQyxJQUFHLEVBQUUsTUFBSSxFQUFFLFFBQU0sR0FBRTtZQUFDLEVBQUUsSUFBRTtZQUFHO1FBQUs7UUFBQyxJQUFJLElBQUUsQ0FBQyxHQUFFLElBQUUsQ0FBQztRQUFFLElBQUU7UUFBRSxJQUFJLElBQUksS0FBRSxHQUFFLEtBQUUsR0FBRSxNQUFHLEVBQUU7WUFBQyxJQUFHO2dCQUFDLE1BQU0sRUFBRSxpQkFBaUIsR0FBRTtZQUFRLEVBQUMsT0FBTSxJQUFFO2dCQUFDLE1BQU0sRUFBRTtZQUFFO1lBQUMsSUFBRyxJQUFFLEFBQUMsQ0FBQSxJQUFFLE1BQU0sR0FBRSxFQUFHLEtBQUcsRUFBRSxPQUFLLElBQUksS0FBSSxFQUFFLE1BQUksRUFBRSxJQUFJLEdBQUUsTUFBSztnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLElBQUcsRUFBRSxNQUFJLEVBQUUsUUFBTSxHQUFFO2dCQUFDLElBQUUsQ0FBQztnQkFBRTtZQUFLO1FBQUM7UUFBQyxJQUFHLEdBQUU7WUFBQyxFQUFFLEtBQUssR0FBRSxVQUFTLEVBQUUsS0FBSyxHQUFFLFVBQVMsSUFBRTtZQUFLO1FBQVE7UUFBQyxJQUFHLEdBQUU7WUFBQyxFQUFFLElBQUUsSUFBRyxJQUFFO1lBQUs7UUFBSztRQUFDLEVBQUUsS0FBSyxHQUFFLFVBQVMsRUFBRSxLQUFLLEdBQUUsVUFBUyxJQUFFO0lBQUk7SUFBQyxJQUFJLElBQUUsTUFBTSxLQUFJLElBQUUsRUFBRSxLQUFHLEVBQUUsT0FBSyxJQUFJLEtBQUksSUFBRSxFQUFFLEtBQUcsRUFBRSxPQUFPLENBQUMsRUFBQyxLQUFJLEVBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxLQUFJLElBQUksQ0FBQyxFQUFDLFNBQVEsRUFBQyxFQUFDLEdBQUcsTUFBRyxFQUFFLEVBQUMsSUFBRSxFQUFFLEtBQUcsRUFBRSxPQUFPLENBQUMsRUFBQyxLQUFJLEVBQUMsRUFBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEtBQUksSUFBSSxDQUFDLEVBQUMsU0FBUSxFQUFDLEVBQUMsR0FBRyxNQUFHO1dBQUk7S0FBRTtJQUFDLE9BQU07UUFBQyxRQUFPLEVBQUUsR0FBRSxHQUFFO1FBQUcsZ0JBQWU7UUFBRSxnQkFBZTtRQUFFLGFBQVk7SUFBQztBQUFDO01BQXpwRCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtYzVhODNiNGM1OWIzODExOS5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9zaXRlcy9nb29nbGUvc2tpbGxzLW9wZXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxnb29nbGVcXFxcc2tpbGxzLW9wZXJhdGlvbi5qc1wiLFwiYnVuZGxlSWRcIjpcIjQyMGQ0ZGVjY2M3MTcwZThcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiBjUFVRS1xyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvZ29vZ2xlL3NraWxscy1vcGVyYXRpb24uanNcbiAqIERlcGVuZGVuY2llczpcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2F1dG9jb21wbGV0ZS1saXN0Ym94IC0+IGIyck8xICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvYXV0b2NvbXBsZXRlLWxpc3Rib3guanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb24gLT4gbHVKZnMgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb24uanNcclxuICovXHJcblxyXG52YXIgbj1lKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtuLmRlZmluZUludGVyb3BGbGFnKHIpLG4uZXhwb3J0KHIsXCJHT09HTEVfU0tJTExTX0xBQkVMXCIsKCk9PmEpLG4uZXhwb3J0KHIsXCJmaW5kRXhhY3RHb29nbGVTa2lsbE9wdGlvblwiLCgpPT5nKSxuLmV4cG9ydChyLFwicmVhZEdvb2dsZVNraWxsQ2hpcHNcIiwoKT0+Yiksbi5leHBvcnQocixcImZpbGxHb29nbGVTa2lsbHNBdXRvY29tcGxldGVcIiwoKT0+Qyksbi5leHBvcnQocixcImZpbGxHb29nbGVTa2lsbEl0ZW1zXCIsKCk9PkkpO3ZhciBvPWUoXCJ+Y29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb25cIiksaT1lKFwifmNvbnRlbnRzL21ldGhvZHMvYXV0b2NvbXBsZXRlLWxpc3Rib3hcIik7bGV0IGE9XCJXaGF0IHNraWxscyBkbyB5b3UgaGF2ZT8gWW91IGNhbiBhZGQgdXAgdG8gMjUgc2tpbGxzXCI7ZnVuY3Rpb24gbChlKXtyZXR1cm4gcyhlKX1mdW5jdGlvbiBzKGUpe3JldHVybihlfHxcIlwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpfWZ1bmN0aW9uIHUoZSl7cmV0dXJuIHMoZS50ZXh0Q29udGVudD8/XCJcIil9ZnVuY3Rpb24gYyhlKXtsZXQgdD1lLmNsb25lTm9kZSghMCk7Zm9yKGxldCBlIG9mIEFycmF5LmZyb20odC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tZGMtZGVsZXRhYmxlPVwidHJ1ZVwiXScpKSllLnJlbW92ZSgpO3JldHVybiB1KHQpfWZ1bmN0aW9uIGQoZSl7cmV0dXJuIGUuY2xvc2VzdChcIi5yYmdtY2JcIik/LnBhcmVudEVsZW1lbnQ/P2UuY2xvc2VzdChcIi5QbXZ2emVcIik/P2UucGFyZW50RWxlbWVudH1mdW5jdGlvbiBmKGUsdCl7bGV0IHI9ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpPz9hLG49ZChlKSxvPVtuLHRdLmZpbHRlcigoZSx0LHIpPT4hIWUmJmUuaXNDb25uZWN0ZWQmJnIuaW5kZXhPZihlKT09PXQpO2ZvcihsZXQgZSBvZiBvKXtsZXQgdD1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbcm9sZT1cImNvbWJvYm94XCJdJykpLmZpbmQoZT0+ZS5pc0Nvbm5lY3RlZCYmKGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKT8/XCJcIik9PT1yKTtpZih0KXJldHVybiB0fXJldHVybiBudWxsfWZ1bmN0aW9uIHAoZSx0KXtyZXR1cm4oMCxpLmZpbmRBdXRvY29tcGxldGVMaXN0Ym94KShlLHQsZS5jbG9zZXN0KFwiLlBtdnZ6ZVwiKSl9ZnVuY3Rpb24gbShlLHQpe2xldCByPWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKSxuPXI/dC5nZXRFbGVtZW50QnlJZChyKTpudWxsLG89ZS5jbG9zZXN0KFwiLlBtdnZ6ZVwiKSxpPXMoZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpPz9cIlwiKSxhPW8/QXJyYXkuZnJvbShvLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwibGlzdGJveFwiXScpKTpbXTtyZXR1cm57aW5wdXRDb25uZWN0ZWQ6ZS5pc0Nvbm5lY3RlZCxpbnB1dEV4cGFuZGVkOlwidHJ1ZVwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpLGNvbnRyb2xsZWRUYXJnZXRQcmVzZW50OiEhbixjb250cm9sbGVkVGFyZ2V0Um9sZTpuPy5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpPz9udWxsLHNjb3BlZExpc3Rib3hDb3VudDphLmZpbHRlcihlPT5lLmlzQ29ubmVjdGVkKS5sZW5ndGgsZXhhY3RMYWJlbExpc3Rib3hDb3VudDphLmZpbHRlcihlPT5lLmlzQ29ubmVjdGVkJiZzKGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKT8/XCJcIik9PT1pKS5sZW5ndGh9fWZ1bmN0aW9uIGgoZSx0KXtjb25zb2xlLmxvZyhgW0dvb2dsZVNraWxsc0RlYnVnXSAke2V9ICR7SlNPTi5zdHJpbmdpZnkodCl9YCl9ZnVuY3Rpb24gZyhlLHQpe2xldCByPXModCk7cmV0dXJuIHI/QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwib3B0aW9uXCJdJykpLmZpbmQoZT0+dShlKT09PXIpPz9udWxsOm51bGx9ZnVuY3Rpb24gYihlLHQ9ZG9jdW1lbnQpe2xldCByPWUuY2xvc2VzdChcIi5QbXZ2emVcIiksbj1yPz9kKGUpPz90LG89bmV3IFNldCxpPUFycmF5LmZyb20obi5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cImdyaWRcIl0nKSk7Zm9yKGxldCBlIG9mIGkpaWYoISghZS5pc0Nvbm5lY3RlZHx8ZS5jbG9zZXN0KCdbcm9sZT1cImxpc3Rib3hcIl0nKSkpZm9yKGxldCB0IG9mIEFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cInJvd1wiXScpKSl7aWYoIXQuaXNDb25uZWN0ZWQpY29udGludWU7bGV0IGU9dC5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cImdyaWRjZWxsXCJdJykscj1cInRydWVcIj09PXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1tZGMtZGVsZXRhYmxlXCIpfHwhIXQucXVlcnlTZWxlY3RvcignW2RhdGEtbWRjLWRlbGV0YWJsZT1cInRydWVcIl0nKSxuPWUmJnI/YyhlKTpcIlwiO24mJm8uYWRkKG4pfXJldHVyblsuLi5vXX1mdW5jdGlvbiB5KGUsdCl7bGV0IHI9XCJ1bmRlZmluZWRcIj09dHlwZW9mIEhUTUxJbnB1dEVsZW1lbnQ/dm9pZCAwOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoSFRNTElucHV0RWxlbWVudC5wcm90b3R5cGUsXCJ2YWx1ZVwiKTt0cnl7cj8uc2V0Py5jYWxsKGUsdCl9Y2F0Y2h7fWUudmFsdWUhPT10JiYoZS52YWx1ZT10KX1mdW5jdGlvbiB2KGUsdCl7ZS5mb2N1cygpLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJmb2N1c2luXCIse2J1YmJsZXM6ITB9KSkseShlLFwiXCIpLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwLGNvbXBvc2VkOiEwfSkpLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMCxjb21wb3NlZDohMH0pKSx5KGUsdCksZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITAsY29tcG9zZWQ6ITB9KSksZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwLGNvbXBvc2VkOiEwfSkpO3RyeXtlLmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXlkb3duXCIse2J1YmJsZXM6ITAsa2V5OnRbMF18fFwiYVwifSkpfWNhdGNoe2UuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJrZXlkb3duXCIse2J1YmJsZXM6ITB9KSl9fWZ1bmN0aW9uIHcoZSx0LHIpe2xldCBuPVwicG9pbnRlcmRvd25cIj09PXR8fFwibW91c2Vkb3duXCI9PT10O3RyeXtsZXQgbz10LnN0YXJ0c1dpdGgoXCJwb2ludGVyXCIpJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgUG9pbnRlckV2ZW50P25ldyBQb2ludGVyRXZlbnQodCx7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwLGNvbXBvc2VkOiEwLHZpZXc6d2luZG93LGJ1dHRvbjowLGJ1dHRvbnM6bj8xOjAsY2xpZW50WDpyLngsY2xpZW50WTpyLnkscG9pbnRlcklkOjEscG9pbnRlclR5cGU6XCJtb3VzZVwiLGlzUHJpbWFyeTohMCxwcmVzc3VyZTpuPy41OjB9KTpcInVuZGVmaW5lZFwiIT10eXBlb2YgTW91c2VFdmVudD9uZXcgTW91c2VFdmVudCh0LHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsY29tcG9zZWQ6ITAsdmlldzp3aW5kb3csYnV0dG9uOjAsYnV0dG9uczpuPzE6MCxjbGllbnRYOnIueCxjbGllbnRZOnIueSxkZXRhaWw6MX0pOm5ldyBFdmVudCh0LHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KTtyZXR1cm4gZS5kaXNwYXRjaEV2ZW50KG8pfWNhdGNoe3JldHVybiBlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KHQse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKX19YXN5bmMgZnVuY3Rpb24gUyhlKXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoJ1tqc25hbWU9XCJLNHI1RmZcIl0nKT8/ZTt0cnl7ZS5zY3JvbGxJbnRvVmlldyh7YmxvY2s6XCJuZWFyZXN0XCIsaW5saW5lOlwibmVhcmVzdFwifSl9Y2F0Y2h7fXRyeXtlLmZvY3VzKHtwcmV2ZW50U2Nyb2xsOiEwfSl9Y2F0Y2h7fWxldCByPXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0Py4oKSxuPXt4OnI/ci5sZWZ0K3Iud2lkdGgvMjowLHk6cj9yLnRvcCtyLmhlaWdodC8yOjB9LG89W107cmV0dXJuIG8ucHVzaCh3KHQsXCJwb2ludGVyZG93blwiLG4pKSxvLnB1c2godyh0LFwibW91c2Vkb3duXCIsbikpLGF3YWl0IG5ldyBQcm9taXNlKGU9PnNldFRpbWVvdXQoZSw1MCkpLG8ucHVzaCh3KHQsXCJwb2ludGVydXBcIixuKSksby5wdXNoKHcodCxcIm1vdXNldXBcIixuKSksby5wdXNoKHcodCxcImNsaWNrXCIsbikpLGUuaXNDb25uZWN0ZWQmJmUuY2xpY2soKSx7dGFyZ2V0VGFnOnQudGFnTmFtZT8udG9Mb3dlckNhc2UoKT8/bnVsbCx0YXJnZXRKc25hbWU6dC5nZXRBdHRyaWJ1dGUoXCJqc25hbWVcIiksaGFzTGF5b3V0UmVjdDohIXImJnIud2lkdGg+MCYmci5oZWlnaHQ+MCxkaXNwYXRjaEFjY2VwdGVkOm8uZXZlcnkoQm9vbGVhbil9fWZ1bmN0aW9uIEUoZSl7eShlLFwiXCIpLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwLGNvbXBvc2VkOiEwfSkpLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMCxjb21wb3NlZDohMH0pKX1mdW5jdGlvbiB4KGUpe3JldHVybiBlIGluc3RhbmNlb2Ygby5DYW5jZWxsZWRFcnJvcnx8ZSBpbnN0YW5jZW9mIG8uU2tpcHBlZEVycm9yfWFzeW5jIGZ1bmN0aW9uIEMoZSx0LHI9e30pe2xldCBuPXIucm9vdD8/ZG9jdW1lbnQsaT1yLndhaXQ/P28uY2FuY2VsbGFibGVEZWxheSxhPTAsbD1hc3luYygpPT57KDAsby5jaGVja3BvaW50KSgpO2xldCB0PWYoZSxuKTtyZXR1cm4gdD9iKHQsbik6W119LHU9e3JlYWRDb21taXR0ZWRJdGVtczpsLHJlYWRDb21taXR0ZWRJdGVtc09uSW50ZXJydXB0aW9uKCl7bGV0IHQ9ZihlLG4pO3JldHVybiB0P2IodCxuKTpbXX0sYXN5bmMgYXR0ZW1wdEV4YWN0SXRlbSh0KXsoMCxvLmNoZWNrcG9pbnQpKCksYSs9MTtsZXQgcj1hLHU9ITEsYz0wO3RyeXtsZXQgYT1mKGUsbik7aWYoIWEpe2goXCJhdHRlbXB0Om5vLWxpdmUtaW5wdXRcIix7YXR0ZW1wdDpyfSk7cmV0dXJufWgoXCJhdHRlbXB0OnN0YXJ0XCIse2F0dGVtcHQ6ciwuLi5tKGEsbil9KSx2KGEsdCksdT0hMDtsZXQgZD0hMSxiPW0oYSxuKTtmb3IobGV0IGE9MDthPDIwO2ErPTEpeygwLG8uY2hlY2twb2ludCkoKTtsZXQgbD1mKGUsbik7aWYoIWwpYnJlYWs7bGV0IHM9cChsLG4pO2I9bShsLG4pO2xldCB1PXM/ZyhzLHQpOm51bGw7aWYodSl7KDAsby5jaGVja3BvaW50KSgpLGgoXCJhdHRlbXB0OmV4YWN0LW9wdGlvbi1mb3VuZFwiLHthdHRlbXB0OnIscG9sbDphLG9wdGlvbkNvdW50OnM/LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwib3B0aW9uXCJdJykubGVuZ3RoPz8wLGxpc3Rib3hTb3VyY2U6cz8uaWQmJnMuaWQ9PT1sLmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIik/XCJhcmlhLWNvbnRyb2xzXCI6XCJzY29wZWQtbGFiZWxcIn0pO2xldCBlPWF3YWl0IFModSk7ZD0hMCxoKFwiYXR0ZW1wdDpjbGljay1kaXNwYXRjaGVkXCIse2F0dGVtcHQ6cixvcHRpb25Db25uZWN0ZWRBZnRlckNsaWNrOnUuaXNDb25uZWN0ZWQsLi4uZX0pO2JyZWFrfWF3YWl0IGkoMTAwKX1pZighZCl7aChcImF0dGVtcHQ6bm8tZXhhY3Qtb3B0aW9uXCIse2F0dGVtcHQ6ciwuLi5ifSk7cmV0dXJufWxldCB5PXModCk7Zm9yKGxldCBlPTA7ZTwxMDtlKz0xKXsoMCxvLmNoZWNrcG9pbnQpKCk7bGV0IHQ9YXdhaXQgbCgpO2lmKGM9dC5sZW5ndGgsdC5zb21lKGU9PnMoZSk9PT15KSl7aChcImF0dGVtcHQ6Y2hpcC1jb21taXR0ZWRcIix7YXR0ZW1wdDpyLHBvbGw6ZSxjb21taXR0ZWRDb3VudDpjfSk7cmV0dXJufWF3YWl0IGkoMTAwKX1oKFwiYXR0ZW1wdDpjbGljay1ub3QtY29tbWl0dGVkXCIse2F0dGVtcHQ6cixjb21taXR0ZWRDb3VudDpjfSl9ZmluYWxseXtpZih1KXRyeXtsZXQgdD1mKGUsbik7dCYmRSh0KX1jYXRjaHt9fX19O2goXCJmaWxsOnN0YXJ0XCIse3JlcXVlc3RlZENvdW50OnQubGVuZ3RofSk7dHJ5e2xldCBlPWF3YWl0IEkodCx1LHttYXhJdGVtczoyNSxtYXhBdHRlbXB0czoyLGlzSW50ZXJydXB0aW9uOngsb25JbnRlcnJ1cHRlZFJlc3VsdDpyLm9uSW50ZXJydXB0ZWRSZXN1bHR9KTtyZXR1cm4gaChcImZpbGw6Y29tcGxldGVcIix7c3RhdHVzOmUuc3RhdHVzLHJlcXVlc3RlZENvdW50OmUucmVxdWVzdGVkSXRlbXMubGVuZ3RoLHN1Y2NlZWRlZENvdW50OmUuc3VjY2VlZGVkSXRlbXMubGVuZ3RoLGZhaWxlZENvdW50OmUuZmFpbGVkSXRlbXMubGVuZ3RofSksZX1jYXRjaChlKXt0aHJvdyBoKFwiZmlsbDppbnRlcnJ1cHRlZFwiLHtpbnRlcnJ1cHRpb246eChlKSxlcnJvck5hbWU6ZSBpbnN0YW5jZW9mIEVycm9yP2UubmFtZTp0eXBlb2YgZX0pLGV9fWZ1bmN0aW9uIEEoZSl7bGV0IHQ9bmV3IFNldCxyPVtdO2ZvcihsZXQgbiBvZiBlKXtsZXQgZT1uLnRyaW0oKSxvPWwobik7IWV8fHQuaGFzKG8pfHwodC5hZGQobyksci5wdXNoKHtkaXNwbGF5OmUsa2V5Om99KSl9cmV0dXJuIHJ9ZnVuY3Rpb24gayhlKXtyZXR1cm4gbmV3IFNldChlLm1hcChsKS5maWx0ZXIoQm9vbGVhbikpfWZ1bmN0aW9uIFQoZSx0LHIpe3JldHVybiBlLmxlbmd0aD4wJiYwPT09ci5sZW5ndGg/XCJmaWxsZWRcIjp0Lmxlbmd0aD4wJiZyLmxlbmd0aD4wP1wicGFydGlhbFwiOlwibWlzc2luZ1wifWZ1bmN0aW9uIEYoZSx0KXtyZXR1cm4gTnVtYmVyLmlzRmluaXRlKGUpP01hdGgubWF4KDAsTWF0aC5mbG9vcihlKSk6dH1hc3luYyBmdW5jdGlvbiBJKGUsdCxyPXt9KXtsZXQgbj1BKGUpLG89bi5tYXAoKHtkaXNwbGF5OmV9KT0+ZSksaT1bXSxhPVtdLHM9W10sdT1GKHIubWF4SXRlbXMsMjUpLGM9TWF0aC5tYXgoMSxGKHIubWF4QXR0ZW1wdHMsMikpLGQ9bnVsbCxmPSgpPT4oe3N0YXR1czppLmxlbmd0aD4wP1wicGFydGlhbFwiOlwibWlzc2luZ1wiLHJlcXVlc3RlZEl0ZW1zOlsuLi5zXSxzdWNjZWVkZWRJdGVtczpbLi4uaV0sZmFpbGVkSXRlbXM6Wy4uLmFdfSkscD1lPT57bGV0IHQ9ayhlKSxyPW5ldyBTZXQocy5tYXAobCkpLG89bi5maWx0ZXIoZT0+ci5oYXMoZS5rZXkpfHxkPy5rZXk9PT1lLmtleSYmdC5oYXMoZS5rZXkpKSxpPVtdLGE9W107Zm9yKGxldCBlIG9mIG8pdC5oYXMoZS5rZXkpP2kucHVzaChlLmRpc3BsYXkpOmEucHVzaChlLmRpc3BsYXkpO3JldHVybntzdGF0dXM6aS5sZW5ndGg+MD9cInBhcnRpYWxcIjpcIm1pc3NpbmdcIixyZXF1ZXN0ZWRJdGVtczpvLm1hcCgoe2Rpc3BsYXk6ZX0pPT5lKSxzdWNjZWVkZWRJdGVtczppLGZhaWxlZEl0ZW1zOmF9fSxtPWFzeW5jIGU9PntpZighci5pc0ludGVycnVwdGlvbj8uKGUpKXJldHVybjtsZXQgbj1mKCk7aWYodC5yZWFkQ29tbWl0dGVkSXRlbXNPbkludGVycnVwdGlvbil0cnl7bj1wKFsuLi5hd2FpdCB0LnJlYWRDb21taXR0ZWRJdGVtc09uSW50ZXJydXB0aW9uKCldKX1jYXRjaHt9dHJ5e2F3YWl0IHIub25JbnRlcnJ1cHRlZFJlc3VsdD8uKG4pfWNhdGNoe310aHJvdyBlfSxoPWFzeW5jKCk9Pnt0cnl7bGV0IGU9Wy4uLmF3YWl0IHQucmVhZENvbW1pdHRlZEl0ZW1zKCldO3JldHVybntvazohMCxrZXlzOmsoZSl9fWNhdGNoKGUpe3JldHVybiBhd2FpdCBtKGUpLHtvazohMX19fSxnPWF3YWl0IGgoKSxiPShlLHQpPT57Zm9yKGxldCByIG9mIG4uc2xpY2UoZSkpdC5oYXMoci5rZXkpP2kucHVzaChyLmRpc3BsYXkpOmEucHVzaChyLmRpc3BsYXkpLHMucHVzaChyLmRpc3BsYXkpfTtmb3IobGV0IGU9MDtlPG4ubGVuZ3RoO2UrPTEpe2xldCByPW5bZV0sbz1nLm9rP2cua2V5czpuZXcgU2V0O2lmKGcub2smJm8uaGFzKHIua2V5KSl7aS5wdXNoKHIuZGlzcGxheSkscy5wdXNoKHIuZGlzcGxheSk7Y29udGludWV9aWYoZy5vayYmby5zaXplPj11KXtiKGUsbyk7YnJlYWt9bGV0IGw9ITEsZj0hMTtkPXI7Zm9yKGxldCBlPTA7ZTxjO2UrPTEpe3RyeXthd2FpdCB0LmF0dGVtcHRFeGFjdEl0ZW0oci5kaXNwbGF5KX1jYXRjaChlKXthd2FpdCBtKGUpfWlmKG89KGc9YXdhaXQgaCgpKS5vaz9nLmtleXM6bmV3IFNldCxnLm9rJiZvLmhhcyhyLmtleSkpe2w9ITA7YnJlYWt9aWYoZy5vayYmby5zaXplPj11KXtmPSEwO2JyZWFrfX1pZihsKXtpLnB1c2goci5kaXNwbGF5KSxzLnB1c2goci5kaXNwbGF5KSxkPW51bGw7Y29udGludWV9aWYoZil7YihlLG8pLGQ9bnVsbDticmVha31hLnB1c2goci5kaXNwbGF5KSxzLnB1c2goci5kaXNwbGF5KSxkPW51bGx9bGV0IHk9YXdhaXQgaCgpLHY9eS5vaz95LmtleXM6bmV3IFNldCx3PXkub2s/bi5maWx0ZXIoKHtrZXk6ZX0pPT52LmhhcyhlKSkubWFwKCh7ZGlzcGxheTplfSk9PmUpOltdLFM9eS5vaz9uLmZpbHRlcigoe2tleTplfSk9PiF2LmhhcyhlKSkubWFwKCh7ZGlzcGxheTplfSk9PmUpOlsuLi5vXTtyZXR1cm57c3RhdHVzOlQobyx3LFMpLHJlcXVlc3RlZEl0ZW1zOm8sc3VjY2VlZGVkSXRlbXM6dyxmYWlsZWRJdGVtczpTfX1cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6InNraWxscy1vcGVyYXRpb24uY2M3MTcwZTguanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);