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
})({"6uI3k":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\gusto\\rules.js",
    "bundleId": "1ad95f268d50936a",
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
var j = z(require("38deb2e931a2ba44"));
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

},{"38deb2e931a2ba44":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"2tftc":[function(require,module,exports) {
/**
 * Parcel module id: 8bOoA
 * Resolved path: src/contents/sites/gusto/rules.js
 * Dependencies:
 *   ./answer -> FFIyS  =>  src/contents/sites/gusto/answer.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   console -> 7HKue  =>  console.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getFormContainer", ()=>f), n.export(r, "disambiguateGustoDuplicateQuestionLabels", ()=>L), n.export(r, "buildGustoRequestRules", ()=>M), n.export(r, "extractRules", ()=>N), n.export(r, "getGustoSnapshotFromRules", ()=>B), n.export(r, "getFormSnapshot", ()=>q);
var o = e("~core/enums"), i = e("./answer"), a = e("console");
let l = 'form#job-applicant-form[action^="/postings/"][method="post"][enctype="multipart/form-data"]', s = 'input[name^="job_applicant["]:not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"]):not([type="file"]), select[name^="job_applicant["], textarea[name^="job_applicant["]', u = 'input[type="hidden"][name*="[custom_form_response_attributes][answers_attributes]"][name$="[question_uuid]"]', c = "Phone Country Code", d = "Return only the phone number without the country calling code. Do not include the phone country code because it is provided separately.";
function f() {
    return document.querySelector(l);
}
function p(e1) {
    return e1.replace(/[*\uff0a]\s*$/g, "").replace(/\s+/g, " ").trim();
}
function m(e1) {
    return e1.toLowerCase().replace(/\s+/g, " ").trim();
}
function h(e1) {
    let t = document.createElement("span");
    return t.textContent = e1, t;
}
function g(e1) {
    return p(e1.getAttribute("aria-label") || e1.placeholder || e1.getAttribute("name") || "");
}
function b(e1) {
    return (e1 instanceof HTMLInputElement || e1 instanceof HTMLTextAreaElement || e1 instanceof HTMLSelectElement) && m(e1.name || "").includes("[custom_form_response_attributes][answers_attributes]");
}
function y(e1) {
    let t = f(), r1 = e1.parentElement;
    for(; r1 && r1 !== t;){
        if (r1.querySelector(u)) return r1;
        r1 = r1.parentElement;
    }
    return null;
}
function v(e1) {
    let t = e1.querySelector('input[type="hidden"][name$="[question_type]"]');
    return m(t?.value || "");
}
function w(e1) {
    if (!(e1 instanceof HTMLInputElement || e1 instanceof HTMLTextAreaElement) || !b(e1) || !e1.name.endsWith("[text]")) return !1;
    let t = y(e1);
    if (!t) return !1;
    let r1 = v(t);
    return [
        "single_choice",
        "multiple_choice",
        "multi_choice"
    ].includes(r1);
}
function S(e1) {
    let t = v(e1);
    return "multi_choice" === t || "multiple_choice" === t;
}
_c = S;
function E(e1) {
    let t = e1.closest("label");
    if (t instanceof HTMLElement) {
        let e1 = p(t.textContent || "");
        if (e1) return e1;
    }
    if (e1.id) {
        let t = document.querySelector(`label[for="${CSS.escape(e1.id)}"]`);
        if (t instanceof HTMLElement) {
            let e1 = p(t.textContent || "");
            if (e1) return e1;
        }
    }
    return p(e1.value || "");
}
_c1 = E;
function x(e1, t) {
    let r1 = e1.name;
    return r1 ? Array.from(t.querySelectorAll(`input[type="checkbox"][name="${CSS.escape(r1)}"]`)).filter((e1)=>!e1.disabled) : [
        e1
    ];
}
function C(e1) {
    let t = Array.from(e1.children).filter((e1)=>e1 instanceof HTMLElement && "LABEL" === e1.tagName), r1 = t.find((e1)=>!e1.querySelector("input, select, textarea"));
    return r1 || Array.from(e1.querySelectorAll("label")).find((e1)=>!e1.querySelector("input, select, textarea")) || null;
}
_c2 = C;
function A(e1) {
    if (!b(e1)) return null;
    let t = y(e1);
    if (!t) return null;
    let r1 = C(t), n = p(r1?.textContent || ""), o = v(t);
    if (("single_choice" === o || "multiple_choice" === o) && (e1 instanceof HTMLInputElement || e1 instanceof HTMLTextAreaElement) && e1.name.endsWith("[text]")) {
        let t = p(e1.getAttribute("placeholder") || "");
        if (n && t) return h(`${n} - ${t}`);
        if (t) return h(t);
    }
    return n ? r1 : null;
}
_c3 = A;
function k(e1) {
    let t = f();
    if (!t) return null;
    let r1 = A(e1);
    if (r1) return r1;
    let n = e1, o = n.labels;
    if (o && o.length > 0) {
        let e1 = p(o[0].textContent || "");
        if (e1) return o[0];
    }
    let i = e1.id;
    if (i) {
        let e1 = t.querySelector(`label[for="${CSS.escape(i)}"]`);
        if (e1 instanceof HTMLElement) {
            let t = p(e1.textContent || "");
            if (t) return e1;
        }
    }
    let a = e1.closest("label");
    if (a instanceof HTMLElement) {
        let e1 = p(a.textContent || "");
        if (e1) return a;
    }
    let l = [
        e1.previousElementSibling,
        e1.parentElement,
        e1.closest("div, section, fieldset, li, form")
    ];
    for (let t of l){
        if (!t) continue;
        let r1 = t.querySelector("label, legend, [role='heading']");
        if (r1 instanceof HTMLElement) {
            let e1 = p(r1.textContent || "");
            if (e1) return r1;
        }
        let n = Array.from(t.querySelectorAll("div, span, p")).filter((t)=>{
            if (t.contains(e1) || t.querySelector("input, select, textarea, button")) return !1;
            let r1 = p(t.textContent || "");
            return !!r1 && r1.length <= 120;
        });
        if (n[0]) return n[0];
    }
    let s = g(e1);
    return s ? h(s) : null;
}
function T(e1, t) {
    let r1 = t?.textContent || "";
    return r1.includes("*") || e1 instanceof HTMLInputElement && e1.required || e1 instanceof HTMLSelectElement && e1.required || e1 instanceof HTMLTextAreaElement && e1.required || !1;
}
_c4 = T;
function F(e1, t) {
    let r1 = m(e1);
    return !!(r1.includes("start date") || r1.includes("end date") || t instanceof HTMLInputElement && ("date" === t.type || "month" === t.type));
}
_c5 = F;
function I(e1) {
    return Array.from(e1.options).map((e1)=>p(e1.textContent || e1.value || "")).filter((e1)=>e1 && ![
            "select",
            "please select",
            "choose..."
        ].includes(m(e1)));
}
_c6 = I;
function j(e1, t) {
    let r1 = (e1.name || "").trim();
    return r1 ? Array.from(t.querySelectorAll(`input[type="radio"][name="${CSS.escape(r1)}"]`)).filter((e1)=>!e1.disabled) : [];
}
function D(e1) {
    return e1.map((e1)=>P(e1)).filter(Boolean);
}
_c7 = D;
function P(e1) {
    let t = f(), r1 = e1.id ? t?.querySelector(`label[for="${CSS.escape(e1.id)}"]`) : null, n = e1.closest("label");
    return p(r1?.textContent || n?.textContent || e1.value || "");
}
_c8 = P;
function _(e1, t) {
    if (w(e1)) return null;
    let r1 = k(e1), n = p(r1?.textContent || "");
    if (!n) return null;
    if (e1 instanceof HTMLInputElement) {
        if ((0, i.isSkippableInput)(e1)) return null;
        if ("checkbox" === e1.type) {
            let t = y(e1);
            if (t && S(t)) {
                let i = x(e1, t), a = i.map((e1)=>E(e1)).filter(Boolean);
                return {
                    type: o.FIELD_TYPE.CHECKBOX,
                    label: n,
                    required: T(e1, r1),
                    options: a,
                    isMultiCheckboxQuestion: !0,
                    $checkboxs: i,
                    $input: e1,
                    $label: r1 || h(n)
                };
            }
            let i = p(r1?.textContent || e1.value || "");
            return {
                type: o.FIELD_TYPE.CHECKBOX,
                label: n,
                required: T(e1, r1),
                options: i ? [
                    i
                ] : [],
                $checkboxs: [
                    e1
                ],
                $input: e1,
                $label: r1 || h(n)
            };
        }
        if ("radio" === e1.type) {
            let i = j(e1, t);
            return 0 === i.length ? null : {
                type: o.FIELD_TYPE.RADIOGROUP,
                label: n,
                required: T(e1, r1),
                options: D(i),
                $radioParent: e1.closest("fieldset, div") || t,
                $input: i[0],
                $label: r1 || h(n)
            };
        }
        return F(n, e1) ? {
            type: o.FIELD_TYPE.DATE,
            label: n,
            required: T(e1, r1),
            $input: e1,
            $label: r1 || h(n)
        } : {
            type: o.FIELD_TYPE.TEXT,
            label: n,
            required: T(e1, r1),
            $input: e1,
            $label: r1 || h(n)
        };
    }
    if (e1 instanceof HTMLSelectElement) return {
        type: o.FIELD_TYPE.SELECT,
        label: n,
        required: T(e1, r1),
        options: I(e1),
        $input: e1,
        $label: r1 || h(n)
    };
    if (e1 instanceof HTMLTextAreaElement) {
        let t = F(n, e1) ? o.FIELD_TYPE.DATE : o.FIELD_TYPE.TEXT, i = {
            type: t,
            label: n,
            required: T(e1, r1),
            $input: e1,
            $label: r1 || h(n)
        };
        return t === o.FIELD_TYPE.TEXT && "additional information (optional)" === m(n) && (i.description = "Summarize your relevant experience"), i;
    }
    return null;
}
function L(e1) {
    let t = new Map;
    for (let r1 of e1){
        let e1 = m(r1.label);
        t.set(e1, (t.get(e1) || 0) + 1);
    }
    let r1 = new Set(e1.map((e1)=>m(e1.label))), n = new Map;
    return e1.map((e1)=>{
        let o;
        let i = m(e1.label);
        if (2 > (t.get(i) || 0)) return e1;
        let a = n.get(i) || 0;
        do a += 1, o = `${e1.label} [Question ${a}]`;
        while (r1.has(m(o)));
        return n.set(i, a), r1.add(m(o)), {
            ...e1,
            label: o
        };
    });
}
_c9 = L;
function R(e1) {
    let t = Array.from(e1.querySelectorAll(s)), r1 = [], n = new Set, o = new Set;
    for (let i of t){
        if (i instanceof HTMLInputElement && "radio" === i.type && i.name && n.has(i.name)) continue;
        let t = i instanceof HTMLInputElement && "checkbox" === i.type && i.name ? y(i) : null, a = !!(t && S(t));
        if (a && o.has(i.name)) continue;
        let l = _(i, e1);
        l && (i instanceof HTMLInputElement && "radio" === i.type && i.name && n.add(i.name), a && o.add(i.name), r1.push(l));
    }
    return L(r1);
}
_c10 = R;
function O(e1) {
    if (e1.type !== o.FIELD_TYPE.TEXT) return !1;
    let t = e1.$input;
    return !!t && "job_applicant_phone" === t.id && "job_applicant[phone]" === t.name && t.getAttribute?.("data-phone-number-target") === "phone";
}
_c11 = O;
function M(e1) {
    if (e1.some((e1)=>m(e1.label) === m(c))) return e1;
    let t = e1.findIndex(O);
    if (t < 0) return e1;
    let r1 = e1[t], n = {
        type: o.FIELD_TYPE.TEXT,
        label: c,
        required: !1
    }, i = {
        ...r1,
        description: d
    };
    return [
        ...e1.slice(0, t),
        n,
        i,
        ...e1.slice(t + 1)
    ];
}
_c12 = M;
async function N() {
    let e1 = f();
    if (!e1) return [];
    let t = R(e1);
    return (0, a.log)("Extracted rules:", t), t;
}
_c13 = N;
function $(e1) {
    if (e1 instanceof HTMLInputElement) {
        if ("checkbox" === e1.type) return e1.checked ? "Yes" : "No";
        if ("radio" === e1.type) {
            if (!e1.name) return e1.checked ? e1.value : "";
            let t = f()?.querySelector(`input[type="radio"][name="${CSS.escape(e1.name)}"]:checked`);
            return t ? P(t) : "";
        }
        return e1.value || "";
    }
    if (e1 instanceof HTMLSelectElement) {
        let t = e1.options[e1.selectedIndex];
        return p(t?.textContent || e1.value || "");
    }
    return e1.value || "";
}
function B(e1, t = $, r1 = E) {
    let n = {};
    for (let i of e1){
        let e1 = i.$input;
        if (e1) {
            if (i.type === o.FIELD_TYPE.CHECKBOX && i.isMultiCheckboxQuestion) {
                let e1 = i.$checkboxs;
                n[i.label] = (e1 || []).filter((e1)=>e1.checked).map(r1).filter(Boolean).join(", ");
                continue;
            }
            n[i.label] = t(e1);
        }
    }
    return n;
}
_c14 = B;
async function q() {
    let e1 = f();
    return e1 ? B(R(e1)) : {};
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
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

},{}]},["6uI3k","2tftc"], "2tftc", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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LE9BQU8sR0FBRSxTQUFPO0FBQUU7QUFBQyxTQUFTLEVBQUUsRUFBQyxFQUFDLElBQUUsQ0FBQyxFQUFDLEtBQUUsQ0FBQztJQUFFLElBQUksSUFBRSxDQUFDO0lBQUUsS0FBSSxJQUFJLEtBQUssR0FBRTtRQUFDLElBQUksS0FBRSxFQUFFO1FBQU8sSUFBRyxJQUFFO1lBQUMsSUFBRyxFQUFFLFNBQU8sRUFBRSxXQUFXLFlBQVUsRUFBRSx5QkFBd0I7Z0JBQUMsSUFBSSxLQUFFLEVBQUU7Z0JBQVcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxHQUFDLEFBQUMsQ0FBQSxNQUFHLEVBQUUsQUFBRCxFQUFHLE9BQU8sQ0FBQSxLQUFHLEdBQUUsU0FBUyxJQUFJLElBQUcsT0FBTyxTQUFTLEtBQUs7Z0JBQU07WUFBUTtZQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBQyxFQUFFO1FBQUU7SUFBQztJQUFDLE9BQU87QUFBQztPQUF4UDtBQUF5UCxlQUFlO0lBQUksSUFBSSxLQUFFO0lBQUksT0FBTyxLQUFFLEVBQUUsRUFBRSxPQUFJLENBQUM7QUFBQyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtNGJjNWQzMjA5N2JlMWY5YS5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9zaXRlcy9ndXN0by9ydWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxndXN0b1xcXFxydWxlcy5qc1wiLFwiYnVuZGxlSWRcIjpcIjFhZDk1ZjI2OGQ1MDkzNmFcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiA4Yk9vQVxyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvZ3VzdG8vcnVsZXMuanNcclxuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIC4vYW5zd2VyIC0+IEZGSXlTICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2d1c3RvL2Fuc3dlci5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgY29uc29sZSAtPiA3SEt1ZSAgPT4gIGNvbnNvbGUuanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqL1xyXG5cclxudmFyIG49ZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7bi5kZWZpbmVJbnRlcm9wRmxhZyhyKSxuLmV4cG9ydChyLFwiZ2V0Rm9ybUNvbnRhaW5lclwiLCgpPT5mKSxuLmV4cG9ydChyLFwiZGlzYW1iaWd1YXRlR3VzdG9EdXBsaWNhdGVRdWVzdGlvbkxhYmVsc1wiLCgpPT5MKSxuLmV4cG9ydChyLFwiYnVpbGRHdXN0b1JlcXVlc3RSdWxlc1wiLCgpPT5NKSxuLmV4cG9ydChyLFwiZXh0cmFjdFJ1bGVzXCIsKCk9Pk4pLG4uZXhwb3J0KHIsXCJnZXRHdXN0b1NuYXBzaG90RnJvbVJ1bGVzXCIsKCk9PkIpLG4uZXhwb3J0KHIsXCJnZXRGb3JtU25hcHNob3RcIiwoKT0+cSk7dmFyIG89ZShcIn5jb3JlL2VudW1zXCIpLGk9ZShcIi4vYW5zd2VyXCIpLGE9ZShcImNvbnNvbGVcIik7bGV0IGw9J2Zvcm0jam9iLWFwcGxpY2FudC1mb3JtW2FjdGlvbl49XCIvcG9zdGluZ3MvXCJdW21ldGhvZD1cInBvc3RcIl1bZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIl0nLHM9J2lucHV0W25hbWVePVwiam9iX2FwcGxpY2FudFtcIl06bm90KFt0eXBlPVwiaGlkZGVuXCJdKTpub3QoW3R5cGU9XCJzdWJtaXRcIl0pOm5vdChbdHlwZT1cImJ1dHRvblwiXSk6bm90KFt0eXBlPVwicmVzZXRcIl0pOm5vdChbdHlwZT1cImZpbGVcIl0pLCBzZWxlY3RbbmFtZV49XCJqb2JfYXBwbGljYW50W1wiXSwgdGV4dGFyZWFbbmFtZV49XCJqb2JfYXBwbGljYW50W1wiXScsdT0naW5wdXRbdHlwZT1cImhpZGRlblwiXVtuYW1lKj1cIltjdXN0b21fZm9ybV9yZXNwb25zZV9hdHRyaWJ1dGVzXVthbnN3ZXJzX2F0dHJpYnV0ZXNdXCJdW25hbWUkPVwiW3F1ZXN0aW9uX3V1aWRdXCJdJyxjPVwiUGhvbmUgQ291bnRyeSBDb2RlXCIsZD1cIlJldHVybiBvbmx5IHRoZSBwaG9uZSBudW1iZXIgd2l0aG91dCB0aGUgY291bnRyeSBjYWxsaW5nIGNvZGUuIERvIG5vdCBpbmNsdWRlIHRoZSBwaG9uZSBjb3VudHJ5IGNvZGUgYmVjYXVzZSBpdCBpcyBwcm92aWRlZCBzZXBhcmF0ZWx5LlwiO2Z1bmN0aW9uIGYoKXtyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihsKX1mdW5jdGlvbiBwKGUpe3JldHVybiBlLnJlcGxhY2UoL1sqXFx1ZmYwYV1cXHMqJC9nLFwiXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpfWZ1bmN0aW9uIG0oZSl7cmV0dXJuIGUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKX1mdW5jdGlvbiBoKGUpe2xldCB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3JldHVybiB0LnRleHRDb250ZW50PWUsdH1mdW5jdGlvbiBnKGUpe3JldHVybiBwKGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKXx8ZS5wbGFjZWhvbGRlcnx8ZS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpfHxcIlwiKX1mdW5jdGlvbiBiKGUpe3JldHVybihlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudHx8ZSBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnR8fGUgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkmJm0oZS5uYW1lfHxcIlwiKS5pbmNsdWRlcyhcIltjdXN0b21fZm9ybV9yZXNwb25zZV9hdHRyaWJ1dGVzXVthbnN3ZXJzX2F0dHJpYnV0ZXNdXCIpfWZ1bmN0aW9uIHkoZSl7bGV0IHQ9ZigpLHI9ZS5wYXJlbnRFbGVtZW50O2Zvcig7ciYmciE9PXQ7KXtpZihyLnF1ZXJ5U2VsZWN0b3IodSkpcmV0dXJuIHI7cj1yLnBhcmVudEVsZW1lbnR9cmV0dXJuIG51bGx9ZnVuY3Rpb24gdihlKXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJoaWRkZW5cIl1bbmFtZSQ9XCJbcXVlc3Rpb25fdHlwZV1cIl0nKTtyZXR1cm4gbSh0Py52YWx1ZXx8XCJcIil9ZnVuY3Rpb24gdyhlKXtpZighKGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50fHxlIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCl8fCFiKGUpfHwhZS5uYW1lLmVuZHNXaXRoKFwiW3RleHRdXCIpKXJldHVybiExO2xldCB0PXkoZSk7aWYoIXQpcmV0dXJuITE7bGV0IHI9dih0KTtyZXR1cm5bXCJzaW5nbGVfY2hvaWNlXCIsXCJtdWx0aXBsZV9jaG9pY2VcIixcIm11bHRpX2Nob2ljZVwiXS5pbmNsdWRlcyhyKX1mdW5jdGlvbiBTKGUpe2xldCB0PXYoZSk7cmV0dXJuXCJtdWx0aV9jaG9pY2VcIj09PXR8fFwibXVsdGlwbGVfY2hvaWNlXCI9PT10fWZ1bmN0aW9uIEUoZSl7bGV0IHQ9ZS5jbG9zZXN0KFwibGFiZWxcIik7aWYodCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXtsZXQgZT1wKHQudGV4dENvbnRlbnR8fFwiXCIpO2lmKGUpcmV0dXJuIGV9aWYoZS5pZCl7bGV0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtDU1MuZXNjYXBlKGUuaWQpfVwiXWApO2lmKHQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl7bGV0IGU9cCh0LnRleHRDb250ZW50fHxcIlwiKTtpZihlKXJldHVybiBlfX1yZXR1cm4gcChlLnZhbHVlfHxcIlwiKX1mdW5jdGlvbiB4KGUsdCl7bGV0IHI9ZS5uYW1lO3JldHVybiByP0FycmF5LmZyb20odC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl1bbmFtZT1cIiR7Q1NTLmVzY2FwZShyKX1cIl1gKSkuZmlsdGVyKGU9PiFlLmRpc2FibGVkKTpbZV19ZnVuY3Rpb24gQyhlKXtsZXQgdD1BcnJheS5mcm9tKGUuY2hpbGRyZW4pLmZpbHRlcihlPT5lIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQmJlwiTEFCRUxcIj09PWUudGFnTmFtZSkscj10LmZpbmQoZT0+IWUucXVlcnlTZWxlY3RvcihcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpKTtyZXR1cm4gcnx8QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsYWJlbFwiKSkuZmluZChlPT4hZS5xdWVyeVNlbGVjdG9yKFwiaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWFcIikpfHxudWxsfWZ1bmN0aW9uIEEoZSl7aWYoIWIoZSkpcmV0dXJuIG51bGw7bGV0IHQ9eShlKTtpZighdClyZXR1cm4gbnVsbDtsZXQgcj1DKHQpLG49cChyPy50ZXh0Q29udGVudHx8XCJcIiksbz12KHQpO2lmKChcInNpbmdsZV9jaG9pY2VcIj09PW98fFwibXVsdGlwbGVfY2hvaWNlXCI9PT1vKSYmKGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50fHxlIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCkmJmUubmFtZS5lbmRzV2l0aChcIlt0ZXh0XVwiKSl7bGV0IHQ9cChlLmdldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIpfHxcIlwiKTtpZihuJiZ0KXJldHVybiBoKGAke259IC0gJHt0fWApO2lmKHQpcmV0dXJuIGgodCl9cmV0dXJuIG4/cjpudWxsfWZ1bmN0aW9uIGsoZSl7bGV0IHQ9ZigpO2lmKCF0KXJldHVybiBudWxsO2xldCByPUEoZSk7aWYocilyZXR1cm4gcjtsZXQgbj1lLG89bi5sYWJlbHM7aWYobyYmby5sZW5ndGg+MCl7bGV0IGU9cChvWzBdLnRleHRDb250ZW50fHxcIlwiKTtpZihlKXJldHVybiBvWzBdfWxldCBpPWUuaWQ7aWYoaSl7bGV0IGU9dC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke0NTUy5lc2NhcGUoaSl9XCJdYCk7aWYoZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXtsZXQgdD1wKGUudGV4dENvbnRlbnR8fFwiXCIpO2lmKHQpcmV0dXJuIGV9fWxldCBhPWUuY2xvc2VzdChcImxhYmVsXCIpO2lmKGEgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl7bGV0IGU9cChhLnRleHRDb250ZW50fHxcIlwiKTtpZihlKXJldHVybiBhfWxldCBsPVtlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcsZS5wYXJlbnRFbGVtZW50LGUuY2xvc2VzdChcImRpdiwgc2VjdGlvbiwgZmllbGRzZXQsIGxpLCBmb3JtXCIpXTtmb3IobGV0IHQgb2YgbCl7aWYoIXQpY29udGludWU7bGV0IHI9dC5xdWVyeVNlbGVjdG9yKFwibGFiZWwsIGxlZ2VuZCwgW3JvbGU9J2hlYWRpbmcnXVwiKTtpZihyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpe2xldCBlPXAoci50ZXh0Q29udGVudHx8XCJcIik7aWYoZSlyZXR1cm4gcn1sZXQgbj1BcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbChcImRpdiwgc3BhbiwgcFwiKSkuZmlsdGVyKHQ9PntpZih0LmNvbnRhaW5zKGUpfHx0LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgYnV0dG9uXCIpKXJldHVybiExO2xldCByPXAodC50ZXh0Q29udGVudHx8XCJcIik7cmV0dXJuISFyJiZyLmxlbmd0aDw9MTIwfSk7aWYoblswXSlyZXR1cm4gblswXX1sZXQgcz1nKGUpO3JldHVybiBzP2gocyk6bnVsbH1mdW5jdGlvbiBUKGUsdCl7bGV0IHI9dD8udGV4dENvbnRlbnR8fFwiXCI7cmV0dXJuIHIuaW5jbHVkZXMoXCIqXCIpfHxlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCYmZS5yZXF1aXJlZHx8ZSBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50JiZlLnJlcXVpcmVkfHxlIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCYmZS5yZXF1aXJlZHx8ITF9ZnVuY3Rpb24gRihlLHQpe2xldCByPW0oZSk7cmV0dXJuISEoci5pbmNsdWRlcyhcInN0YXJ0IGRhdGVcIil8fHIuaW5jbHVkZXMoXCJlbmQgZGF0ZVwiKXx8dCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQmJihcImRhdGVcIj09PXQudHlwZXx8XCJtb250aFwiPT09dC50eXBlKSl9ZnVuY3Rpb24gSShlKXtyZXR1cm4gQXJyYXkuZnJvbShlLm9wdGlvbnMpLm1hcChlPT5wKGUudGV4dENvbnRlbnR8fGUudmFsdWV8fFwiXCIpKS5maWx0ZXIoZT0+ZSYmIVtcInNlbGVjdFwiLFwicGxlYXNlIHNlbGVjdFwiLFwiY2hvb3NlLi4uXCJdLmluY2x1ZGVzKG0oZSkpKX1mdW5jdGlvbiBqKGUsdCl7bGV0IHI9KGUubmFtZXx8XCJcIikudHJpbSgpO3JldHVybiByP0FycmF5LmZyb20odC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cIiR7Q1NTLmVzY2FwZShyKX1cIl1gKSkuZmlsdGVyKGU9PiFlLmRpc2FibGVkKTpbXX1mdW5jdGlvbiBEKGUpe3JldHVybiBlLm1hcChlPT5QKGUpKS5maWx0ZXIoQm9vbGVhbil9ZnVuY3Rpb24gUChlKXtsZXQgdD1mKCkscj1lLmlkP3Q/LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7Q1NTLmVzY2FwZShlLmlkKX1cIl1gKTpudWxsLG49ZS5jbG9zZXN0KFwibGFiZWxcIik7cmV0dXJuIHAocj8udGV4dENvbnRlbnR8fG4/LnRleHRDb250ZW50fHxlLnZhbHVlfHxcIlwiKX1mdW5jdGlvbiBfKGUsdCl7aWYodyhlKSlyZXR1cm4gbnVsbDtsZXQgcj1rKGUpLG49cChyPy50ZXh0Q29udGVudHx8XCJcIik7aWYoIW4pcmV0dXJuIG51bGw7aWYoZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpe2lmKCgwLGkuaXNTa2lwcGFibGVJbnB1dCkoZSkpcmV0dXJuIG51bGw7aWYoXCJjaGVja2JveFwiPT09ZS50eXBlKXtsZXQgdD15KGUpO2lmKHQmJlModCkpe2xldCBpPXgoZSx0KSxhPWkubWFwKGU9PkUoZSkpLmZpbHRlcihCb29sZWFuKTtyZXR1cm57dHlwZTpvLkZJRUxEX1RZUEUuQ0hFQ0tCT1gsbGFiZWw6bixyZXF1aXJlZDpUKGUsciksb3B0aW9uczphLGlzTXVsdGlDaGVja2JveFF1ZXN0aW9uOiEwLCRjaGVja2JveHM6aSwkaW5wdXQ6ZSwkbGFiZWw6cnx8aChuKX19bGV0IGk9cChyPy50ZXh0Q29udGVudHx8ZS52YWx1ZXx8XCJcIik7cmV0dXJue3R5cGU6by5GSUVMRF9UWVBFLkNIRUNLQk9YLGxhYmVsOm4scmVxdWlyZWQ6VChlLHIpLG9wdGlvbnM6aT9baV06W10sJGNoZWNrYm94czpbZV0sJGlucHV0OmUsJGxhYmVsOnJ8fGgobil9fWlmKFwicmFkaW9cIj09PWUudHlwZSl7bGV0IGk9aihlLHQpO3JldHVybiAwPT09aS5sZW5ndGg/bnVsbDp7dHlwZTpvLkZJRUxEX1RZUEUuUkFESU9HUk9VUCxsYWJlbDpuLHJlcXVpcmVkOlQoZSxyKSxvcHRpb25zOkQoaSksJHJhZGlvUGFyZW50OmUuY2xvc2VzdChcImZpZWxkc2V0LCBkaXZcIil8fHQsJGlucHV0OmlbMF0sJGxhYmVsOnJ8fGgobil9fXJldHVybiBGKG4sZSk/e3R5cGU6by5GSUVMRF9UWVBFLkRBVEUsbGFiZWw6bixyZXF1aXJlZDpUKGUsciksJGlucHV0OmUsJGxhYmVsOnJ8fGgobil9Ont0eXBlOm8uRklFTERfVFlQRS5URVhULGxhYmVsOm4scmVxdWlyZWQ6VChlLHIpLCRpbnB1dDplLCRsYWJlbDpyfHxoKG4pfX1pZihlIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpcmV0dXJue3R5cGU6by5GSUVMRF9UWVBFLlNFTEVDVCxsYWJlbDpuLHJlcXVpcmVkOlQoZSxyKSxvcHRpb25zOkkoZSksJGlucHV0OmUsJGxhYmVsOnJ8fGgobil9O2lmKGUgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50KXtsZXQgdD1GKG4sZSk/by5GSUVMRF9UWVBFLkRBVEU6by5GSUVMRF9UWVBFLlRFWFQsaT17dHlwZTp0LGxhYmVsOm4scmVxdWlyZWQ6VChlLHIpLCRpbnB1dDplLCRsYWJlbDpyfHxoKG4pfTtyZXR1cm4gdD09PW8uRklFTERfVFlQRS5URVhUJiZcImFkZGl0aW9uYWwgaW5mb3JtYXRpb24gKG9wdGlvbmFsKVwiPT09bShuKSYmKGkuZGVzY3JpcHRpb249XCJTdW1tYXJpemUgeW91ciByZWxldmFudCBleHBlcmllbmNlXCIpLGl9cmV0dXJuIG51bGx9ZnVuY3Rpb24gTChlKXtsZXQgdD1uZXcgTWFwO2ZvcihsZXQgciBvZiBlKXtsZXQgZT1tKHIubGFiZWwpO3Quc2V0KGUsKHQuZ2V0KGUpfHwwKSsxKX1sZXQgcj1uZXcgU2V0KGUubWFwKGU9Pm0oZS5sYWJlbCkpKSxuPW5ldyBNYXA7cmV0dXJuIGUubWFwKGU9PntsZXQgbztsZXQgaT1tKGUubGFiZWwpO2lmKDI+KHQuZ2V0KGkpfHwwKSlyZXR1cm4gZTtsZXQgYT1uLmdldChpKXx8MDtkbyBhKz0xLG89YCR7ZS5sYWJlbH0gW1F1ZXN0aW9uICR7YX1dYDt3aGlsZShyLmhhcyhtKG8pKSlyZXR1cm4gbi5zZXQoaSxhKSxyLmFkZChtKG8pKSx7Li4uZSxsYWJlbDpvfX0pfWZ1bmN0aW9uIFIoZSl7bGV0IHQ9QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwocykpLHI9W10sbj1uZXcgU2V0LG89bmV3IFNldDtmb3IobGV0IGkgb2YgdCl7aWYoaSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQmJlwicmFkaW9cIj09PWkudHlwZSYmaS5uYW1lJiZuLmhhcyhpLm5hbWUpKWNvbnRpbnVlO2xldCB0PWkgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50JiZcImNoZWNrYm94XCI9PT1pLnR5cGUmJmkubmFtZT95KGkpOm51bGwsYT0hISh0JiZTKHQpKTtpZihhJiZvLmhhcyhpLm5hbWUpKWNvbnRpbnVlO2xldCBsPV8oaSxlKTtsJiYoaSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQmJlwicmFkaW9cIj09PWkudHlwZSYmaS5uYW1lJiZuLmFkZChpLm5hbWUpLGEmJm8uYWRkKGkubmFtZSksci5wdXNoKGwpKX1yZXR1cm4gTChyKX1mdW5jdGlvbiBPKGUpe2lmKGUudHlwZSE9PW8uRklFTERfVFlQRS5URVhUKXJldHVybiExO2xldCB0PWUuJGlucHV0O3JldHVybiEhdCYmXCJqb2JfYXBwbGljYW50X3Bob25lXCI9PT10LmlkJiZcImpvYl9hcHBsaWNhbnRbcGhvbmVdXCI9PT10Lm5hbWUmJnQuZ2V0QXR0cmlidXRlPy4oXCJkYXRhLXBob25lLW51bWJlci10YXJnZXRcIik9PT1cInBob25lXCJ9ZnVuY3Rpb24gTShlKXtpZihlLnNvbWUoZT0+bShlLmxhYmVsKT09PW0oYykpKXJldHVybiBlO2xldCB0PWUuZmluZEluZGV4KE8pO2lmKHQ8MClyZXR1cm4gZTtsZXQgcj1lW3RdLG49e3R5cGU6by5GSUVMRF9UWVBFLlRFWFQsbGFiZWw6YyxyZXF1aXJlZDohMX0saT17Li4ucixkZXNjcmlwdGlvbjpkfTtyZXR1cm5bLi4uZS5zbGljZSgwLHQpLG4saSwuLi5lLnNsaWNlKHQrMSldfWFzeW5jIGZ1bmN0aW9uIE4oKXtsZXQgZT1mKCk7aWYoIWUpcmV0dXJuW107bGV0IHQ9UihlKTtyZXR1cm4oMCxhLmxvZykoXCJFeHRyYWN0ZWQgcnVsZXM6XCIsdCksdH1mdW5jdGlvbiAkKGUpe2lmKGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KXtpZihcImNoZWNrYm94XCI9PT1lLnR5cGUpcmV0dXJuIGUuY2hlY2tlZD9cIlllc1wiOlwiTm9cIjtpZihcInJhZGlvXCI9PT1lLnR5cGUpe2lmKCFlLm5hbWUpcmV0dXJuIGUuY2hlY2tlZD9lLnZhbHVlOlwiXCI7bGV0IHQ9ZigpPy5xdWVyeVNlbGVjdG9yKGBpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cIiR7Q1NTLmVzY2FwZShlLm5hbWUpfVwiXTpjaGVja2VkYCk7cmV0dXJuIHQ/UCh0KTpcIlwifXJldHVybiBlLnZhbHVlfHxcIlwifWlmKGUgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCl7bGV0IHQ9ZS5vcHRpb25zW2Uuc2VsZWN0ZWRJbmRleF07cmV0dXJuIHAodD8udGV4dENvbnRlbnR8fGUudmFsdWV8fFwiXCIpfXJldHVybiBlLnZhbHVlfHxcIlwifWZ1bmN0aW9uIEIoZSx0PSQscj1FKXtsZXQgbj17fTtmb3IobGV0IGkgb2YgZSl7bGV0IGU9aS4kaW5wdXQ7aWYoZSl7aWYoaS50eXBlPT09by5GSUVMRF9UWVBFLkNIRUNLQk9YJiZpLmlzTXVsdGlDaGVja2JveFF1ZXN0aW9uKXtsZXQgZT1pLiRjaGVja2JveHM7bltpLmxhYmVsXT0oZXx8W10pLmZpbHRlcihlPT5lLmNoZWNrZWQpLm1hcChyKS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiwgXCIpO2NvbnRpbnVlfW5baS5sYWJlbF09dChlKX19cmV0dXJuIG59YXN5bmMgZnVuY3Rpb24gcSgpe2xldCBlPWYoKTtyZXR1cm4gZT9CKFIoZSkpOnt9fVxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZXMuOGQ1MDkzNmEuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);