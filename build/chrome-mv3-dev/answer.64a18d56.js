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
})({"04ZXe":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\myworkday\\answer.js",
    "bundleId": "62b65bd364a18d56",
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
var j = z(require("2e3056dd3b1fdd11"));
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

},{"2e3056dd3b1fdd11":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"gw7e5":[function(require,module,exports) {
/**
 * Parcel module id: eUq3l
 * Resolved path: src/contents/sites/myworkday/answer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   ~constants -> 6VEjR  =>  src/constants.js
 *   ~utils/lang -> f5rbp  =>  src/utils/lang.js
 *   ~utils/string -> ijEFi  =>  src/utils/string.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "WORKDAY_DISABILITY_SELF_IDENTIFY_LABEL", ()=>m), n.export(r, "applyWorkdaySelfIdentifyAnswers", ()=>I), n.export(r, "normalizeStateValue", ()=>j), n.export(r, "getWorkdayCountryFillValue", ()=>$), n.export(r, "formatAnswer", ()=>eo);
var o = e("dayjs"), i = n.interopDefault(o), a = e("~constants"), l = e("~utils/lang"), s = e("~utils/string");
let u = [
    "State",
    "State/Province",
    "State / Province",
    "State/Territory",
    "State / Territory",
    "State/Region",
    "State / Region"
], c = [
    "Mobile",
    "Personal Mobile",
    "Home",
    "Cell"
], d = new Set([
    "select one",
    "select",
    "please select",
    "none",
    "not selected"
]), f = {
    canada: [
        "Canada",
        "CA"
    ],
    ca: [
        "Canada",
        "CA"
    ],
    "united states": [
        "United States of America",
        "United States",
        "USA",
        "US"
    ],
    "united states of america": [
        "United States of America",
        "United States",
        "USA",
        "US"
    ],
    us: [
        "United States of America",
        "United States",
        "USA",
        "US"
    ],
    usa: [
        "United States of America",
        "United States",
        "USA",
        "US"
    ],
    "united kingdom": [
        "United Kingdom",
        "UK",
        "GB"
    ],
    uk: [
        "United Kingdom",
        "UK",
        "GB"
    ],
    gb: [
        "United Kingdom",
        "UK",
        "GB"
    ],
    india: [
        "India",
        "IN"
    ],
    in: [
        "India",
        "IN"
    ],
    china: [
        "China",
        "CN"
    ],
    cn: [
        "China",
        "CN"
    ]
}, p = new Set(u.map(S)), m = "Please check one of the boxes below:", h = [
    m,
    "Disability",
    "disability",
    "disabilityStatus"
];
function g(e1) {
    return e1.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}
function b(e1) {
    return String(e1 ?? "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
}
function y(e1) {
    return b(e1).replace(/[^a-zA-Z0-9\s]/g, "").replace(/\s+/g, " ").trim().toLowerCase();
}
function v(e1, t) {
    let r1 = b(t);
    if (!/(?:\.{3}|\u2026)/.test(r1)) return !1;
    let n = y(e1), o = r1.split(/\.{3}|\u2026/).map(y).filter(Boolean);
    if (!n || o.length < 2) return !1;
    let i = 0;
    for (let e1 of o){
        let t = n.indexOf(e1, i);
        if (-1 === t) return !1;
        i = t + e1.length;
    }
    return o.join("").length >= 20;
}
function w(e1, t = []) {
    let r1 = e1.regular || {}, n = Object.entries(r1).filter(([e1])=>/(?:\.{3}|\u2026)/.test(e1));
    if (0 !== n.length && 0 !== t.length) for (let e1 of t){
        let t = e1?.label;
        if (!t || t in r1) continue;
        let o = n.find(([e1])=>v(t, e1));
        o && (r1[t] = o[1]);
    }
}
function S(e1) {
    return g(e1);
}
_c = S;
function E(e1) {
    return p.has(S(e1));
}
_c1 = E;
function x(e1) {
    let t = g(e1);
    return "phonedevicetype" === t || t.includes("phone") && t.includes("device") && t.includes("type");
}
function C(e1) {
    let t = g(e1);
    return t.includes("employee") && t.includes("id");
}
_c2 = C;
function A(e1) {
    let t = g(e1);
    return "addressline2" === t || "address2" === t || "streetaddress2" === t;
}
_c3 = A;
function k(e1) {
    let t = g(e1);
    return "addressline1" === t || "address1" === t || "streetaddress1" === t || "streetaddress" === t;
}
function T(e1) {
    return g(e1).includes("facebook");
}
_c4 = T;
function F(e1) {
    for (let t of e1){
        if (Array.isArray(t)) {
            let e1 = t.find((e1)=>!(0, l.isEmptyValue)(e1));
            if (void 0 !== e1) return e1;
            continue;
        }
        if (!(0, l.isEmptyValue)(t)) return t;
    }
    return null;
}
_c5 = F;
function I(e1, t = {}) {
    e1.regular = {
        ...e1.regular || {}
    };
    let r1 = F([
        ...h.map((t)=>e1.regular[t]),
        t.autofillInfo?.employmentInfo?.disability,
        t.autofillInfo?.disability
    ]), n = null == r1 ? null : String(r1).trim();
    return n && (e1.regular[m] = n), e1;
}
_c6 = I;
function j(e1) {
    let t = Array.isArray(e1) ? e1.find((e1)=>!(0, l.isEmptyValue)(e1)) : e1;
    if (null == t) return null;
    let r1 = String(t).trim();
    if (!r1) return null;
    let n = r1.replace(/\./g, "").toUpperCase();
    if (a.STATE_MAP[n]) return a.STATE_MAP[n];
    let o = r1.toLowerCase();
    return Object.values(a.STATE_MAP).find((e1)=>e1.toLowerCase() === o) ?? null;
}
function D(e1) {
    let t = Array.isArray(e1) ? e1.find((e1)=>!(0, l.isEmptyValue)(e1)) : e1;
    return (0, l.isEmptyValue)(t) ? null : String(t).trim();
}
_c7 = D;
function P(e1) {
    if ((0, l.isEmptyValue)(e1)) return !0;
    let t = D(e1)?.toLowerCase();
    return !t || d.has(t);
}
_c8 = P;
function _(...e1) {
    for (let t of e1){
        let e1 = D(t);
        if (e1) return e1;
    }
    return null;
}
function L(e1) {
    let t = D(e1)?.replace(/\./g, "").replace(/\s+/g, " ").trim().toLowerCase();
    return !!t && ("us" === t || "usa" === t || "united states" === t || "united states of america" === t || "ca" === t || "canada" === t);
}
_c9 = L;
function R(e1) {
    let t = e1.trim().toLowerCase(), r1 = g(e1);
    return "country phone code" === t || "phone country code" === t || "country/region phone code" === t || r1.includes("countryphonecode") || r1.includes("phonecountrycode") || r1.includes("countryregionphonecode") || r1.includes("country") && r1.includes("phone") && r1.includes("code");
}
_c10 = R;
function O(e1) {
    if (R(e1)) return !1;
    let t = e1.trim().toLowerCase(), r1 = g(e1);
    return "country" === t || "country / territory" === t || "country/territory" === t || "country / region" === t || "country/region" === t || "country" === r1 || "countryterritory" === r1 || "countryregion" === r1;
}
_c11 = O;
function M(e1) {
    let t = D(e1)?.replace(/\./g, "").replace(/\s+/g, " ").trim().toLowerCase();
    return t || null;
}
_c12 = M;
function N(e1) {
    let t = M(e1);
    return t ? f[t] ?? null : null;
}
_c13 = N;
function $(e1) {
    return N(e1)?.[0] ?? D(e1);
}
function B(e1) {
    let t = D(e1);
    if (!t) return !1;
    let r1 = t.match(/\+(\d{1,4})/)?.[1];
    if (r1) return "1" === r1;
    let n = t.replace(/\D/g, "");
    return n && n.length <= 4 ? "1" === n : L(t);
}
_c14 = B;
function q(e1) {
    let t = D(e1)?.toLowerCase();
    return !!(t && "select one" !== t);
}
function U(e1) {
    let t = D(e1);
    return !!t && (/(?:^|\s)\+\d{1,4}\b/.test(t) || /^\s*\d{1,4}\s*$/.test(t));
}
_c15 = U;
function H(e1) {
    return Object.entries(e1.regular || {}).some(([e1, t])=>R(e1) && q(t) || "countrycode" === g(e1) && U(t));
}
_c16 = H;
function Y(e1) {
    let t = e1.match(/^\s*\(\s*(\+\d{1,4})\s*\)\s*(.+)$/);
    if (!t) return null;
    let r1 = t[2].replace(/\D/g, "");
    return r1 ? `(${t[1]})${r1}` : null;
}
_c17 = Y;
function z(e1, t = {}) {
    let r1 = e1.regular || {}, n = Object.entries(r1).filter(([e1])=>R(e1)).map(([, e1])=>e1).filter(q);
    if (n.length > 0) return n.some(B);
    let o = [
        t.country,
        e1.country,
        t.autofillInfo?.location?.country,
        ...Object.entries(r1).filter(([e1])=>O(e1)).map(([, e1])=>e1)
    ];
    return o.some(L);
}
function V(e1, t, r1 = {}) {
    let n = String(e1 ?? ""), o = Y(n);
    if (o && !H(t)) return o;
    let i = n.replace(/\D/g, "");
    return i && (/^\s*\+1/.test(n) && i.startsWith("1") || 11 === i.length && i.startsWith("1") && z(t, r1)) ? i.slice(1) : i;
}
_c18 = V;
function W(e1) {
    let t = Object.keys(e1.regular).filter(x);
    if (0 === t.length && !P(e1.regular["Phone Number"])) {
        e1.regular["Phone Device Type"] = c;
        return;
    }
    for (let r1 of t)P(e1.regular[r1]) && (e1.regular[r1] = c);
}
_c19 = W;
function G(e1, t = {}) {
    let r1 = e1.regular || {}, n = Object.entries(r1).find(([e1])=>O(e1))?.[1], o = _(t.country, e1.country, t.autofillInfo?.location?.country, n) ?? n, i = N(o);
    if (i) for (let e1 of Object.keys(r1).filter(O))if (P(r1[e1])) r1[e1] = i;
    else {
        let t = N(r1[e1]);
        t && (r1[e1] = t);
    }
}
_c20 = G;
function K(e1) {
    try {
        return new URL(e1).hostname.replace(/^www\./, "").toLowerCase();
    } catch  {
        return "";
    }
}
_c21 = K;
function X(e1) {
    for (let t of Object.keys(e1.regular).filter(T)){
        let r1 = D(e1.regular[t]);
        if (!r1) continue;
        let n = K(r1);
        !n || n.includes("facebook.com") || n.includes("fb.com") || (e1.regular[t] = "");
    }
}
_c22 = X;
function J(e1) {
    return D(e1)?.replace(/[^a-zA-Z]/g, "").toLowerCase() ?? "";
}
_c23 = J;
function Q(e1) {
    let t = _(e1.regular["First Name"], e1.regular["Given Name"]), r1 = _(e1.regular["Last Name"], e1.regular["Family Name"]), n = J([
        t,
        r1
    ].filter(Boolean).join(" "));
    if (n) for (let t of Object.keys(e1.regular).filter(C))J(e1.regular[t]) === n && (e1.regular[t] = "");
}
_c24 = Q;
function Z(e1) {
    let t = D(e1);
    return !(!t || /\b(apt|apartment|suite|ste|unit|floor|fl|room|rm|#)\b/i.test(t)) && /^\d+\s+\S+/.test(t) && /\b(st|street|ave|avenue|rd|road|blvd|boulevard|ln|lane|dr|drive|ct|court|way|pkwy|parkway)\b\.?$/i.test(t);
}
_c25 = Z;
function ee(e1) {
    return D(e1)?.replace(/[.,]/g, "").replace(/\s+/g, " ").trim().toLowerCase() ?? "";
}
function et(e1) {
    let t = Object.entries(e1.regular).filter(([e1])=>k(e1)).map(([, e1])=>ee(e1)).filter(Boolean);
    if (0 !== t.length) for (let r1 of Object.keys(e1.regular).filter(A)){
        let n = ee(e1.regular[r1]);
        Z(e1.regular[r1]) && t.includes(n) && (e1.regular[r1] = "");
    }
}
function er(e1, t) {
    let r1 = t ?? j(e1.state), n = Object.keys(e1.regular).filter(E);
    if (n.length > 0) {
        for (let t of n){
            let n = e1.regular[t], o = j(n);
            o ? e1.regular[t] = o : (0, l.isEmptyValue)(n) && r1 && (e1.regular[t] = r1);
        }
        return;
    }
    if (r1) for (let t of u)e1.regular[t] = r1;
}
let en = /^(Local\s+|Arabic\s+|Latin\s+|Western\s+)?(First Name|Last Name|Given Name(\(s\))?|Family Name|Surname)(\s*-\s*(Latin|Western|Arabic)(\s+Script)?)?$/i;
function eo(e1, t = {}) {
    if (e1.regular = {
        ...e1.regular || {}
    }, t.autofillInfo, e1.regular) {
        for (let r1 of (w(e1, t.rules), Object.keys(e1.regular)))en.test(r1) && "string" == typeof e1.regular[r1] && (e1.regular[r1] = (0, s.toNameTitleCase)(e1.regular[r1]));
        e1.regular["How Did You Hear About Us?"] = a.SOURCE_VALUES, e1.regular["How did you hear about us?"] = a.SOURCE_VALUES, "string" == typeof e1.regular?.["Phone Number"] && e1.regular["Phone Number"] && (e1.regular["Phone Number"] = V(e1.regular["Phone Number"], e1, t)), (e1.regular?.["Available to work"] === "" || e1.regular?.["Available to work"]) && (e1.regular["Available to work"] = (0, i.default)().format("MM/DD/YYYY")), er(e1), W(e1), G(e1, t), X(e1), Q(e1), et(e1), I(e1, t), e1.regular.Date = (0, i.default)().format("MM/DD/YYYY");
    }
    if (e1.workExperience && e1.workExperience.length > 0) for (let t of e1.workExperience)for (let [e1, r1] of (t?.Start && (t.From = t.Start), t?.End && (t.To = t.End), t && "isCurrent" in t && (t["I currently work here"] = t.isCurrent), Object.entries(t ?? {})))"string" == typeof r1 && (t[e1] = r1.replace(/[<>[\]{}"\\]/g, ""));
    if (e1.education && e1.education.length > 0) for (let t of e1.education)for (let [e1, r1] of (t?.Start && (t.From = t.Start), t?.End && (t.To = t.End), t?.School && (t["School or University"] = t.School), t?.Study && (t["Field of Study"] = t.Study), Object.entries(t ?? {})))"string" == typeof r1 && (t[e1] = r1.replace(/[<>[\]{}"\\]/g, ""));
    return e1;
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

},{}]},["04ZXe","gw7e5"], "gw7e5", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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T0FBUSxDQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUUsR0FBSSxHQUFHLFVBQVcsQ0FBQSxDQUFDLENBQ3RGLHVCQUF1QixHQUFHLEVBQUUsTUFBSyxHQUFJLEdBQUcsU0FBVSxDQUFBLENBQUMsQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLEtBQUksR0FBSSxPQUNuRixRQUFRLEtBQUssQ0FBQyxFQUFDLEVBQUksWUFBWSxPQUFPLE1BQU0sQ0FBQSxDQUFDLENBQUMsR0FBRSxHQUFHLEdBQUUsUUFBUSxpQkFBaUIsR0FBRTtJQUN6RixPQUFPO0FBQ1QiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTA5YmIwZGI3NmViYjc5NjguanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvbXl3b3JrZGF5L2Fuc3dlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxteXdvcmtkYXlcXFxcYW5zd2VyLmpzXCIsXCJidW5kbGVJZFwiOlwiNjJiNjViZDM2NGExOGQ1NlwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IGVVcTNsXHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy9teXdvcmtkYXkvYW5zd2VyLmpzXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyAtPiBjSFVibCAgPT4gIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcclxuICogICBkYXlqcyAtPiBmbmhYcCAgPT4gIF90aWxkZV9ub2RlX21vZHVsZXMvZGF5anMuanNcclxuICogICB+Y29uc3RhbnRzIC0+IDZWRWpSICA9PiAgc3JjL2NvbnN0YW50cy5qc1xyXG4gKiAgIH51dGlscy9sYW5nIC0+IGY1cmJwICA9PiAgc3JjL3V0aWxzL2xhbmcuanNcclxuICogICB+dXRpbHMvc3RyaW5nIC0+IGlqRUZpICA9PiAgc3JjL3V0aWxzL3N0cmluZy5qc1xyXG4gKi9cclxuXHJcbnZhciBuID0gZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7XHJcbm4uZGVmaW5lSW50ZXJvcEZsYWcociksIG4uZXhwb3J0KHIsIFwiV09SS0RBWV9ESVNBQklMSVRZX1NFTEZfSURFTlRJRllfTEFCRUxcIiwgKCkgPT4gbSksIG4uZXhwb3J0KHIsXHJcbiAgICBcImFwcGx5V29ya2RheVNlbGZJZGVudGlmeUFuc3dlcnNcIiwgKCkgPT4gSSksIG4uZXhwb3J0KHIsIFwibm9ybWFsaXplU3RhdGVWYWx1ZVwiLCAoKSA9PiBqKSwgblxyXG4gIC5leHBvcnQociwgXCJnZXRXb3JrZGF5Q291bnRyeUZpbGxWYWx1ZVwiLCAoKSA9PiAkKSwgbi5leHBvcnQociwgXCJmb3JtYXRBbnN3ZXJcIiwgKCkgPT4gZW8pO1xyXG52YXIgbyA9IGUoXCJkYXlqc1wiKSxcclxuICBpID0gbi5pbnRlcm9wRGVmYXVsdChvKSxcclxuICBhID0gZShcIn5jb25zdGFudHNcIiksXHJcbiAgbCA9IGUoXCJ+dXRpbHMvbGFuZ1wiKSxcclxuICBzID0gZShcIn51dGlscy9zdHJpbmdcIik7XHJcbmxldCB1ID0gW1wiU3RhdGVcIiwgXCJTdGF0ZS9Qcm92aW5jZVwiLCBcIlN0YXRlIC8gUHJvdmluY2VcIiwgXCJTdGF0ZS9UZXJyaXRvcnlcIiwgXCJTdGF0ZSAvIFRlcnJpdG9yeVwiLFxyXG4gICAgXCJTdGF0ZS9SZWdpb25cIiwgXCJTdGF0ZSAvIFJlZ2lvblwiXHJcbiAgXSxcclxuICBjID0gW1wiTW9iaWxlXCIsIFwiUGVyc29uYWwgTW9iaWxlXCIsIFwiSG9tZVwiLCBcIkNlbGxcIl0sXHJcbiAgZCA9IG5ldyBTZXQoW1wic2VsZWN0IG9uZVwiLCBcInNlbGVjdFwiLCBcInBsZWFzZSBzZWxlY3RcIiwgXCJub25lXCIsIFwibm90IHNlbGVjdGVkXCJdKSxcclxuICBmID0ge1xyXG4gICAgY2FuYWRhOiBbXCJDYW5hZGFcIiwgXCJDQVwiXSxcclxuICAgIGNhOiBbXCJDYW5hZGFcIiwgXCJDQVwiXSxcclxuICAgIFwidW5pdGVkIHN0YXRlc1wiOiBbXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIiwgXCJVbml0ZWQgU3RhdGVzXCIsIFwiVVNBXCIsIFwiVVNcIl0sXHJcbiAgICBcInVuaXRlZCBzdGF0ZXMgb2YgYW1lcmljYVwiOiBbXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIiwgXCJVbml0ZWQgU3RhdGVzXCIsIFwiVVNBXCIsIFwiVVNcIl0sXHJcbiAgICB1czogW1wiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCIsIFwiVW5pdGVkIFN0YXRlc1wiLCBcIlVTQVwiLCBcIlVTXCJdLFxyXG4gICAgdXNhOiBbXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIiwgXCJVbml0ZWQgU3RhdGVzXCIsIFwiVVNBXCIsIFwiVVNcIl0sXHJcbiAgICBcInVuaXRlZCBraW5nZG9tXCI6IFtcIlVuaXRlZCBLaW5nZG9tXCIsIFwiVUtcIiwgXCJHQlwiXSxcclxuICAgIHVrOiBbXCJVbml0ZWQgS2luZ2RvbVwiLCBcIlVLXCIsIFwiR0JcIl0sXHJcbiAgICBnYjogW1wiVW5pdGVkIEtpbmdkb21cIiwgXCJVS1wiLCBcIkdCXCJdLFxyXG4gICAgaW5kaWE6IFtcIkluZGlhXCIsIFwiSU5cIl0sXHJcbiAgICBpbjogW1wiSW5kaWFcIiwgXCJJTlwiXSxcclxuICAgIGNoaW5hOiBbXCJDaGluYVwiLCBcIkNOXCJdLFxyXG4gICAgY246IFtcIkNoaW5hXCIsIFwiQ05cIl1cclxuICB9LFxyXG4gIHAgPSBuZXcgU2V0KHUubWFwKFMpKSxcclxuICBtID0gXCJQbGVhc2UgY2hlY2sgb25lIG9mIHRoZSBib3hlcyBiZWxvdzpcIixcclxuICBoID0gW20sIFwiRGlzYWJpbGl0eVwiLCBcImRpc2FiaWxpdHlcIiwgXCJkaXNhYmlsaXR5U3RhdHVzXCJdO1xyXG5cclxuZnVuY3Rpb24gZyhlKSB7XHJcbiAgcmV0dXJuIGUucmVwbGFjZSgvW15hLXpBLVowLTldL2csIFwiXCIpLnRvTG93ZXJDYXNlKClcclxufVxyXG5cclxuZnVuY3Rpb24gYihlKSB7XHJcbiAgcmV0dXJuIFN0cmluZyhlID8/IFwiXCIpLnJlcGxhY2UoL1xcdTAwYTAvZywgXCIgXCIpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKVxyXG59XHJcblxyXG5mdW5jdGlvbiB5KGUpIHtcclxuICByZXR1cm4gYihlKS5yZXBsYWNlKC9bXmEtekEtWjAtOVxcc10vZywgXCJcIikucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpLnRvTG93ZXJDYXNlKClcclxufVxyXG5cclxuZnVuY3Rpb24gdihlLCB0KSB7XHJcbiAgbGV0IHIgPSBiKHQpO1xyXG4gIGlmICghLyg/OlxcLnszfXxcXHUyMDI2KS8udGVzdChyKSkgcmV0dXJuICExO1xyXG4gIGxldCBuID0geShlKSxcclxuICAgIG8gPSByLnNwbGl0KC9cXC57M318XFx1MjAyNi8pLm1hcCh5KS5maWx0ZXIoQm9vbGVhbik7XHJcbiAgaWYgKCFuIHx8IG8ubGVuZ3RoIDwgMikgcmV0dXJuICExO1xyXG4gIGxldCBpID0gMDtcclxuICBmb3IgKGxldCBlIG9mIG8pIHtcclxuICAgIGxldCB0ID0gbi5pbmRleE9mKGUsIGkpO1xyXG4gICAgaWYgKC0xID09PSB0KSByZXR1cm4gITE7XHJcbiAgICBpID0gdCArIGUubGVuZ3RoXHJcbiAgfVxyXG4gIHJldHVybiBvLmpvaW4oXCJcIikubGVuZ3RoID49IDIwXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHcoZSwgdCA9IFtdKSB7XHJcbiAgbGV0IHIgPSBlLnJlZ3VsYXIgfHwge30sXHJcbiAgICBuID0gT2JqZWN0LmVudHJpZXMocikuZmlsdGVyKChbZV0pID0+IC8oPzpcXC57M318XFx1MjAyNikvLnRlc3QoZSkpO1xyXG4gIGlmICgwICE9PSBuLmxlbmd0aCAmJiAwICE9PSB0Lmxlbmd0aClcclxuICAgIGZvciAobGV0IGUgb2YgdCkge1xyXG4gICAgICBsZXQgdCA9IGU/LmxhYmVsO1xyXG4gICAgICBpZiAoIXQgfHwgdCBpbiByKSBjb250aW51ZTtcclxuICAgICAgbGV0IG8gPSBuLmZpbmQoKFtlXSkgPT4gdih0LCBlKSk7XHJcbiAgICAgIG8gJiYgKHJbdF0gPSBvWzFdKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBTKGUpIHtcclxuICByZXR1cm4gZyhlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBFKGUpIHtcclxuICByZXR1cm4gcC5oYXMoUyhlKSlcclxufVxyXG5cclxuZnVuY3Rpb24geChlKSB7XHJcbiAgbGV0IHQgPSBnKGUpO1xyXG4gIHJldHVybiBcInBob25lZGV2aWNldHlwZVwiID09PSB0IHx8IHQuaW5jbHVkZXMoXCJwaG9uZVwiKSAmJiB0LmluY2x1ZGVzKFwiZGV2aWNlXCIpICYmIHQuaW5jbHVkZXMoXHJcbiAgICBcInR5cGVcIilcclxufVxyXG5cclxuZnVuY3Rpb24gQyhlKSB7XHJcbiAgbGV0IHQgPSBnKGUpO1xyXG4gIHJldHVybiB0LmluY2x1ZGVzKFwiZW1wbG95ZWVcIikgJiYgdC5pbmNsdWRlcyhcImlkXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEEoZSkge1xyXG4gIGxldCB0ID0gZyhlKTtcclxuICByZXR1cm4gXCJhZGRyZXNzbGluZTJcIiA9PT0gdCB8fCBcImFkZHJlc3MyXCIgPT09IHQgfHwgXCJzdHJlZXRhZGRyZXNzMlwiID09PSB0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGsoZSkge1xyXG4gIGxldCB0ID0gZyhlKTtcclxuICByZXR1cm4gXCJhZGRyZXNzbGluZTFcIiA9PT0gdCB8fCBcImFkZHJlc3MxXCIgPT09IHQgfHwgXCJzdHJlZXRhZGRyZXNzMVwiID09PSB0IHx8IFwic3RyZWV0YWRkcmVzc1wiID09PSB0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFQoZSkge1xyXG4gIHJldHVybiBnKGUpLmluY2x1ZGVzKFwiZmFjZWJvb2tcIilcclxufVxyXG5cclxuZnVuY3Rpb24gRihlKSB7XHJcbiAgZm9yIChsZXQgdCBvZiBlKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0KSkge1xyXG4gICAgICBsZXQgZSA9IHQuZmluZChlID0+ICEoMCwgbC5pc0VtcHR5VmFsdWUpKGUpKTtcclxuICAgICAgaWYgKHZvaWQgMCAhPT0gZSkgcmV0dXJuIGU7XHJcbiAgICAgIGNvbnRpbnVlXHJcbiAgICB9XHJcbiAgICBpZiAoISgwLCBsLmlzRW1wdHlWYWx1ZSkodCkpIHJldHVybiB0XHJcbiAgfVxyXG4gIHJldHVybiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEkoZSwgdCA9IHt9KSB7XHJcbiAgZS5yZWd1bGFyID0ge1xyXG4gICAgLi4uZS5yZWd1bGFyIHx8IHt9XHJcbiAgfTtcclxuICBsZXQgciA9IEYoWy4uLmgubWFwKHQgPT4gZS5yZWd1bGFyW3RdKSwgdC5hdXRvZmlsbEluZm8/LmVtcGxveW1lbnRJbmZvPy5kaXNhYmlsaXR5LCB0LmF1dG9maWxsSW5mb1xyXG4gICAgICA/LmRpc2FiaWxpdHlcclxuICAgIF0pLFxyXG4gICAgbiA9IG51bGwgPT0gciA/IG51bGwgOiBTdHJpbmcocikudHJpbSgpO1xyXG4gIHJldHVybiBuICYmIChlLnJlZ3VsYXJbbV0gPSBuKSwgZVxyXG59XHJcblxyXG5mdW5jdGlvbiBqKGUpIHtcclxuICBsZXQgdCA9IEFycmF5LmlzQXJyYXkoZSkgPyBlLmZpbmQoZSA9PiAhKDAsIGwuaXNFbXB0eVZhbHVlKShlKSkgOiBlO1xyXG4gIGlmIChudWxsID09IHQpIHJldHVybiBudWxsO1xyXG4gIGxldCByID0gU3RyaW5nKHQpLnRyaW0oKTtcclxuICBpZiAoIXIpIHJldHVybiBudWxsO1xyXG4gIGxldCBuID0gci5yZXBsYWNlKC9cXC4vZywgXCJcIikudG9VcHBlckNhc2UoKTtcclxuICBpZiAoYS5TVEFURV9NQVBbbl0pIHJldHVybiBhLlNUQVRFX01BUFtuXTtcclxuICBsZXQgbyA9IHIudG9Mb3dlckNhc2UoKTtcclxuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhhLlNUQVRFX01BUCkuZmluZChlID0+IGUudG9Mb3dlckNhc2UoKSA9PT0gbykgPz8gbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBEKGUpIHtcclxuICBsZXQgdCA9IEFycmF5LmlzQXJyYXkoZSkgPyBlLmZpbmQoZSA9PiAhKDAsIGwuaXNFbXB0eVZhbHVlKShlKSkgOiBlO1xyXG4gIHJldHVybiAoMCwgbC5pc0VtcHR5VmFsdWUpKHQpID8gbnVsbCA6IFN0cmluZyh0KS50cmltKClcclxufVxyXG5cclxuZnVuY3Rpb24gUChlKSB7XHJcbiAgaWYgKCgwLCBsLmlzRW1wdHlWYWx1ZSkoZSkpIHJldHVybiAhMDtcclxuICBsZXQgdCA9IEQoZSk/LnRvTG93ZXJDYXNlKCk7XHJcbiAgcmV0dXJuICF0IHx8IGQuaGFzKHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIF8oLi4uZSkge1xyXG4gIGZvciAobGV0IHQgb2YgZSkge1xyXG4gICAgbGV0IGUgPSBEKHQpO1xyXG4gICAgaWYgKGUpIHJldHVybiBlXHJcbiAgfVxyXG4gIHJldHVybiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEwoZSkge1xyXG4gIGxldCB0ID0gRChlKT8ucmVwbGFjZSgvXFwuL2csIFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gIHJldHVybiAhIXQgJiYgKFwidXNcIiA9PT0gdCB8fCBcInVzYVwiID09PSB0IHx8IFwidW5pdGVkIHN0YXRlc1wiID09PSB0IHx8XHJcbiAgICBcInVuaXRlZCBzdGF0ZXMgb2YgYW1lcmljYVwiID09PSB0IHx8IFwiY2FcIiA9PT0gdCB8fCBcImNhbmFkYVwiID09PSB0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBSKGUpIHtcclxuICBsZXQgdCA9IGUudHJpbSgpLnRvTG93ZXJDYXNlKCksXHJcbiAgICByID0gZyhlKTtcclxuICByZXR1cm4gXCJjb3VudHJ5IHBob25lIGNvZGVcIiA9PT0gdCB8fCBcInBob25lIGNvdW50cnkgY29kZVwiID09PSB0IHx8IFwiY291bnRyeS9yZWdpb24gcGhvbmUgY29kZVwiID09PVxyXG4gICAgdCB8fCByLmluY2x1ZGVzKFwiY291bnRyeXBob25lY29kZVwiKSB8fCByLmluY2x1ZGVzKFwicGhvbmVjb3VudHJ5Y29kZVwiKSB8fCByLmluY2x1ZGVzKFxyXG4gICAgICBcImNvdW50cnlyZWdpb25waG9uZWNvZGVcIikgfHwgci5pbmNsdWRlcyhcImNvdW50cnlcIikgJiYgci5pbmNsdWRlcyhcInBob25lXCIpICYmIHIuaW5jbHVkZXMoXHJcbiAgICAgIFwiY29kZVwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBPKGUpIHtcclxuICBpZiAoUihlKSkgcmV0dXJuICExO1xyXG4gIGxldCB0ID0gZS50cmltKCkudG9Mb3dlckNhc2UoKSxcclxuICAgIHIgPSBnKGUpO1xyXG4gIHJldHVybiBcImNvdW50cnlcIiA9PT0gdCB8fCBcImNvdW50cnkgLyB0ZXJyaXRvcnlcIiA9PT0gdCB8fCBcImNvdW50cnkvdGVycml0b3J5XCIgPT09IHQgfHxcclxuICAgIFwiY291bnRyeSAvIHJlZ2lvblwiID09PSB0IHx8IFwiY291bnRyeS9yZWdpb25cIiA9PT0gdCB8fCBcImNvdW50cnlcIiA9PT0gciB8fCBcImNvdW50cnl0ZXJyaXRvcnlcIiA9PT1cclxuICAgIHIgfHwgXCJjb3VudHJ5cmVnaW9uXCIgPT09IHJcclxufVxyXG5cclxuZnVuY3Rpb24gTShlKSB7XHJcbiAgbGV0IHQgPSBEKGUpPy5yZXBsYWNlKC9cXC4vZywgXCJcIikucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgcmV0dXJuIHQgfHwgbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBOKGUpIHtcclxuICBsZXQgdCA9IE0oZSk7XHJcbiAgcmV0dXJuIHQgPyBmW3RdID8/IG51bGwgOiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uICQoZSkge1xyXG4gIHJldHVybiBOKGUpPy5bMF0gPz8gRChlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBCKGUpIHtcclxuICBsZXQgdCA9IEQoZSk7XHJcbiAgaWYgKCF0KSByZXR1cm4gITE7XHJcbiAgbGV0IHIgPSB0Lm1hdGNoKC9cXCsoXFxkezEsNH0pLyk/LlsxXTtcclxuICBpZiAocikgcmV0dXJuIFwiMVwiID09PSByO1xyXG4gIGxldCBuID0gdC5yZXBsYWNlKC9cXEQvZywgXCJcIik7XHJcbiAgcmV0dXJuIG4gJiYgbi5sZW5ndGggPD0gNCA/IFwiMVwiID09PSBuIDogTCh0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBxKGUpIHtcclxuICBsZXQgdCA9IEQoZSk/LnRvTG93ZXJDYXNlKCk7XHJcbiAgcmV0dXJuICEhKHQgJiYgXCJzZWxlY3Qgb25lXCIgIT09IHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFUoZSkge1xyXG4gIGxldCB0ID0gRChlKTtcclxuICByZXR1cm4gISF0ICYmICgvKD86XnxcXHMpXFwrXFxkezEsNH1cXGIvLnRlc3QodCkgfHwgL15cXHMqXFxkezEsNH1cXHMqJC8udGVzdCh0KSlcclxufVxyXG5cclxuZnVuY3Rpb24gSChlKSB7XHJcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGUucmVndWxhciB8fCB7fSkuc29tZSgoW2UsIHRdKSA9PiBSKGUpICYmIHEodCkgfHwgXCJjb3VudHJ5Y29kZVwiID09PSBnKGUpICYmXHJcbiAgICBVKHQpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBZKGUpIHtcclxuICBsZXQgdCA9IGUubWF0Y2goL15cXHMqXFwoXFxzKihcXCtcXGR7MSw0fSlcXHMqXFwpXFxzKiguKykkLyk7XHJcbiAgaWYgKCF0KSByZXR1cm4gbnVsbDtcclxuICBsZXQgciA9IHRbMl0ucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xyXG4gIHJldHVybiByID8gYCgke3RbMV19KSR7cn1gIDogbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiB6KGUsIHQgPSB7fSkge1xyXG4gIGxldCByID0gZS5yZWd1bGFyIHx8IHt9LFxyXG4gICAgbiA9IE9iamVjdC5lbnRyaWVzKHIpLmZpbHRlcigoW2VdKSA9PiBSKGUpKS5tYXAoKFssIGVdKSA9PiBlKS5maWx0ZXIocSk7XHJcbiAgaWYgKG4ubGVuZ3RoID4gMCkgcmV0dXJuIG4uc29tZShCKTtcclxuICBsZXQgbyA9IFt0LmNvdW50cnksIGUuY291bnRyeSwgdC5hdXRvZmlsbEluZm8/LmxvY2F0aW9uPy5jb3VudHJ5LCAuLi5PYmplY3QuZW50cmllcyhyKS5maWx0ZXIoKFtcclxuICAgIGVdKSA9PiBPKGUpKS5tYXAoKFssIGVdKSA9PiBlKV07XHJcbiAgcmV0dXJuIG8uc29tZShMKVxyXG59XHJcblxyXG5mdW5jdGlvbiBWKGUsIHQsIHIgPSB7fSkge1xyXG4gIGxldCBuID0gU3RyaW5nKGUgPz8gXCJcIiksXHJcbiAgICBvID0gWShuKTtcclxuICBpZiAobyAmJiAhSCh0KSkgcmV0dXJuIG87XHJcbiAgbGV0IGkgPSBuLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcclxuICByZXR1cm4gaSAmJiAoL15cXHMqXFwrMS8udGVzdChuKSAmJiBpLnN0YXJ0c1dpdGgoXCIxXCIpIHx8IDExID09PSBpLmxlbmd0aCAmJiBpLnN0YXJ0c1dpdGgoXCIxXCIpICYmIHooXHJcbiAgICB0LCByKSkgPyBpLnNsaWNlKDEpIDogaVxyXG59XHJcblxyXG5mdW5jdGlvbiBXKGUpIHtcclxuICBsZXQgdCA9IE9iamVjdC5rZXlzKGUucmVndWxhcikuZmlsdGVyKHgpO1xyXG4gIGlmICgwID09PSB0Lmxlbmd0aCAmJiAhUChlLnJlZ3VsYXJbXCJQaG9uZSBOdW1iZXJcIl0pKSB7XHJcbiAgICBlLnJlZ3VsYXJbXCJQaG9uZSBEZXZpY2UgVHlwZVwiXSA9IGM7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgZm9yIChsZXQgciBvZiB0KSBQKGUucmVndWxhcltyXSkgJiYgKGUucmVndWxhcltyXSA9IGMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEcoZSwgdCA9IHt9KSB7XHJcbiAgbGV0IHIgPSBlLnJlZ3VsYXIgfHwge30sXHJcbiAgICBuID0gT2JqZWN0LmVudHJpZXMocikuZmluZCgoW2VdKSA9PiBPKGUpKT8uWzFdLFxyXG4gICAgbyA9IF8odC5jb3VudHJ5LCBlLmNvdW50cnksIHQuYXV0b2ZpbGxJbmZvPy5sb2NhdGlvbj8uY291bnRyeSwgbikgPz8gbixcclxuICAgIGkgPSBOKG8pO1xyXG4gIGlmIChpKVxyXG4gICAgZm9yIChsZXQgZSBvZiBPYmplY3Qua2V5cyhyKS5maWx0ZXIoTykpXHJcbiAgICAgIGlmIChQKHJbZV0pKSByW2VdID0gaTtcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IHQgPSBOKHJbZV0pO1xyXG4gICAgICAgIHQgJiYgKHJbZV0gPSB0KVxyXG4gICAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEsoZSkge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gbmV3IFVSTChlKS5ob3N0bmFtZS5yZXBsYWNlKC9ed3d3XFwuLywgXCJcIikudG9Mb3dlckNhc2UoKVxyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuIFwiXCJcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFgoZSkge1xyXG4gIGZvciAobGV0IHQgb2YgT2JqZWN0LmtleXMoZS5yZWd1bGFyKS5maWx0ZXIoVCkpIHtcclxuICAgIGxldCByID0gRChlLnJlZ3VsYXJbdF0pO1xyXG4gICAgaWYgKCFyKSBjb250aW51ZTtcclxuICAgIGxldCBuID0gSyhyKTtcclxuICAgICFuIHx8IG4uaW5jbHVkZXMoXCJmYWNlYm9vay5jb21cIikgfHwgbi5pbmNsdWRlcyhcImZiLmNvbVwiKSB8fCAoZS5yZWd1bGFyW3RdID0gXCJcIilcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEooZSkge1xyXG4gIHJldHVybiBEKGUpPy5yZXBsYWNlKC9bXmEtekEtWl0vZywgXCJcIikudG9Mb3dlckNhc2UoKSA/PyBcIlwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFEoZSkge1xyXG4gIGxldCB0ID0gXyhlLnJlZ3VsYXJbXCJGaXJzdCBOYW1lXCJdLCBlLnJlZ3VsYXJbXCJHaXZlbiBOYW1lXCJdKSxcclxuICAgIHIgPSBfKGUucmVndWxhcltcIkxhc3QgTmFtZVwiXSwgZS5yZWd1bGFyW1wiRmFtaWx5IE5hbWVcIl0pLFxyXG4gICAgbiA9IEooW3QsIHJdLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKSk7XHJcbiAgaWYgKG4pXHJcbiAgICBmb3IgKGxldCB0IG9mIE9iamVjdC5rZXlzKGUucmVndWxhcikuZmlsdGVyKEMpKSBKKGUucmVndWxhclt0XSkgPT09IG4gJiYgKGUucmVndWxhclt0XSA9IFwiXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFooZSkge1xyXG4gIGxldCB0ID0gRChlKTtcclxuICByZXR1cm4gISghdCB8fCAvXFxiKGFwdHxhcGFydG1lbnR8c3VpdGV8c3RlfHVuaXR8Zmxvb3J8Zmx8cm9vbXxybXwjKVxcYi9pLnRlc3QodCkpICYmIC9eXFxkK1xccytcXFMrL1xyXG4gICAgLnRlc3QodCkgJiZcclxuICAgIC9cXGIoc3R8c3RyZWV0fGF2ZXxhdmVudWV8cmR8cm9hZHxibHZkfGJvdWxldmFyZHxsbnxsYW5lfGRyfGRyaXZlfGN0fGNvdXJ0fHdheXxwa3d5fHBhcmt3YXkpXFxiXFwuPyQvaVxyXG4gICAgLnRlc3QodClcclxufVxyXG5cclxuZnVuY3Rpb24gZWUoZSkge1xyXG4gIHJldHVybiBEKGUpPy5yZXBsYWNlKC9bLixdL2csIFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpID8/IFwiXCJcclxufVxyXG5cclxuZnVuY3Rpb24gZXQoZSkge1xyXG4gIGxldCB0ID0gT2JqZWN0LmVudHJpZXMoZS5yZWd1bGFyKS5maWx0ZXIoKFtlXSkgPT4gayhlKSkubWFwKChbLCBlXSkgPT4gZWUoZSkpLmZpbHRlcihCb29sZWFuKTtcclxuICBpZiAoMCAhPT0gdC5sZW5ndGgpXHJcbiAgICBmb3IgKGxldCByIG9mIE9iamVjdC5rZXlzKGUucmVndWxhcikuZmlsdGVyKEEpKSB7XHJcbiAgICAgIGxldCBuID0gZWUoZS5yZWd1bGFyW3JdKTtcclxuICAgICAgWihlLnJlZ3VsYXJbcl0pICYmIHQuaW5jbHVkZXMobikgJiYgKGUucmVndWxhcltyXSA9IFwiXCIpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVyKGUsIHQpIHtcclxuICBsZXQgciA9IHQgPz8gaihlLnN0YXRlKSxcclxuICAgIG4gPSBPYmplY3Qua2V5cyhlLnJlZ3VsYXIpLmZpbHRlcihFKTtcclxuICBpZiAobi5sZW5ndGggPiAwKSB7XHJcbiAgICBmb3IgKGxldCB0IG9mIG4pIHtcclxuICAgICAgbGV0IG4gPSBlLnJlZ3VsYXJbdF0sXHJcbiAgICAgICAgbyA9IGoobik7XHJcbiAgICAgIG8gPyBlLnJlZ3VsYXJbdF0gPSBvIDogKDAsIGwuaXNFbXB0eVZhbHVlKShuKSAmJiByICYmIChlLnJlZ3VsYXJbdF0gPSByKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGlmIChyKVxyXG4gICAgZm9yIChsZXQgdCBvZiB1KSBlLnJlZ3VsYXJbdF0gPSByXHJcbn1cclxubGV0IGVuID1cclxuICAvXihMb2NhbFxccyt8QXJhYmljXFxzK3xMYXRpblxccyt8V2VzdGVyblxccyspPyhGaXJzdCBOYW1lfExhc3QgTmFtZXxHaXZlbiBOYW1lKFxcKHNcXCkpP3xGYW1pbHkgTmFtZXxTdXJuYW1lKShcXHMqLVxccyooTGF0aW58V2VzdGVybnxBcmFiaWMpKFxccytTY3JpcHQpPyk/JC9pO1xyXG5cclxuZnVuY3Rpb24gZW8oZSwgdCA9IHt9KSB7XHJcbiAgaWYgKGUucmVndWxhciA9IHtcclxuICAgICAgLi4uZS5yZWd1bGFyIHx8IHt9XHJcbiAgICB9LCB0LmF1dG9maWxsSW5mbywgZS5yZWd1bGFyKSB7XHJcbiAgICBmb3IgKGxldCByIG9mICh3KGUsIHQucnVsZXMpLCBPYmplY3Qua2V5cyhlLnJlZ3VsYXIpKSkgZW4udGVzdChyKSAmJiBcInN0cmluZ1wiID09IHR5cGVvZiBlXHJcbiAgICAgIC5yZWd1bGFyW3JdICYmIChlLnJlZ3VsYXJbcl0gPSAoMCwgcy50b05hbWVUaXRsZUNhc2UpKGUucmVndWxhcltyXSkpO1xyXG4gICAgZS5yZWd1bGFyW1wiSG93IERpZCBZb3UgSGVhciBBYm91dCBVcz9cIl0gPSBhLlNPVVJDRV9WQUxVRVMsIGUucmVndWxhcltcclxuICAgICAgICBcIkhvdyBkaWQgeW91IGhlYXIgYWJvdXQgdXM/XCJdID0gYS5TT1VSQ0VfVkFMVUVTLCBcInN0cmluZ1wiID09IHR5cGVvZiBlLnJlZ3VsYXI/LltcclxuICAgICAgICBcIlBob25lIE51bWJlclwiXHJcbiAgICAgIF0gJiYgZS5yZWd1bGFyW1wiUGhvbmUgTnVtYmVyXCJdICYmIChlLnJlZ3VsYXJbXCJQaG9uZSBOdW1iZXJcIl0gPSBWKGUucmVndWxhcltcIlBob25lIE51bWJlclwiXSwgZSxcclxuICAgICAgICB0KSksIChlLnJlZ3VsYXI/LltcIkF2YWlsYWJsZSB0byB3b3JrXCJdID09PSBcIlwiIHx8IGUucmVndWxhcj8uW1wiQXZhaWxhYmxlIHRvIHdvcmtcIl0pICYmIChlXHJcbiAgICAgICAgLnJlZ3VsYXJbXCJBdmFpbGFibGUgdG8gd29ya1wiXSA9ICgwLCBpLmRlZmF1bHQpKCkuZm9ybWF0KFwiTU0vREQvWVlZWVwiKSksIGVyKGUpLCBXKGUpLCBHKGUsXHJcbiAgICAgIHQpLCBYKGUpLCBRKGUpLCBldChlKSwgSShlLCB0KSwgZS5yZWd1bGFyLkRhdGUgPSAoMCwgaS5kZWZhdWx0KSgpLmZvcm1hdChcIk1NL0REL1lZWVlcIilcclxuICB9XHJcbiAgaWYgKGUud29ya0V4cGVyaWVuY2UgJiYgZS53b3JrRXhwZXJpZW5jZS5sZW5ndGggPiAwKVxyXG4gICAgZm9yIChsZXQgdCBvZiBlLndvcmtFeHBlcmllbmNlKVxyXG4gICAgICBmb3IgKGxldCBbZSwgcl0gb2YodD8uU3RhcnQgJiYgKHQuRnJvbSA9IHQuU3RhcnQpLCB0Py5FbmQgJiYgKHQuVG8gPSB0LkVuZCksIHQgJiZcclxuICAgICAgICAgIFwiaXNDdXJyZW50XCIgaW4gdCAmJiAodFtcIkkgY3VycmVudGx5IHdvcmsgaGVyZVwiXSA9IHQuaXNDdXJyZW50KSwgT2JqZWN0LmVudHJpZXModCA/PyB7fSkpKVxyXG4gICAgICAgIFwic3RyaW5nXCIgPT0gdHlwZW9mIHIgJiYgKHRbZV0gPSByLnJlcGxhY2UoL1s8PltcXF17fVwiXFxcXF0vZywgXCJcIikpO1xyXG4gIGlmIChlLmVkdWNhdGlvbiAmJiBlLmVkdWNhdGlvbi5sZW5ndGggPiAwKVxyXG4gICAgZm9yIChsZXQgdCBvZiBlLmVkdWNhdGlvbilcclxuICAgICAgZm9yIChsZXQgW2UsIHJdIG9mKHQ/LlN0YXJ0ICYmICh0LkZyb20gPSB0LlN0YXJ0KSwgdD8uRW5kICYmICh0LlRvID0gdC5FbmQpLCB0Py5TY2hvb2wgJiYgKHRbXHJcbiAgICAgICAgICAgIFwiU2Nob29sIG9yIFVuaXZlcnNpdHlcIl0gPSB0LlNjaG9vbCksIHQ/LlN0dWR5ICYmICh0W1wiRmllbGQgb2YgU3R1ZHlcIl0gPSB0LlN0dWR5KSwgT2JqZWN0XHJcbiAgICAgICAgICAuZW50cmllcyh0ID8/IHt9KSkpIFwic3RyaW5nXCIgPT0gdHlwZW9mIHIgJiYgKHRbZV0gPSByLnJlcGxhY2UoL1s8PltcXF17fVwiXFxcXF0vZywgXCJcIikpO1xyXG4gIHJldHVybiBlXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJhbnN3ZXIuNjRhMThkNTYuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);