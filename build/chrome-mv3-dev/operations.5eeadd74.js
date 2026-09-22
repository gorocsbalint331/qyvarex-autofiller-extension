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
})({"az7XP":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\kula\\operations.js",
    "bundleId": "2fc148505eeadd74",
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
var j = z(require("e3f2d17bae4588b4"));
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

},{"e3f2d17bae4588b4":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"ltzox":[function(require,module,exports) {
/**
 * Parcel module id: 4wVIP
 * Resolved path: src/contents/sites/kula/operations.js
 * Dependencies:
 *   ./phone-country-code -> fRM2B  =>  src/contents/sites/kula/phone-country-code.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/choice-match -> 6mkI4  =>  src/contents/methods/choice-match.js
 *   ~contents/methods/observer -> eTzUx  =>  src/contents/methods/observer.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "preFillForm", ()=>c), n.export(r, "getKulaSectionAddButton", ()=>u), n.export(r, "getKulaCoverLetterStatus", ()=>b), n.export(r, "fillInputTextField", ()=>I), n.export(r, "fillPhoneField", ()=>j), n.export(r, "fillSelectField", ()=>D), n.export(r, "fillSearchField", ()=>P), n.export(r, "fillCheckboxField", ()=>_), n.export(r, "fillRadioGroupField", ()=>L), n.export(r, "uploadResume", ()=>R), n.export(r, "uploadCoverLetter", ()=>O);
var o = e("~contents/methods/choice-match"), i = e("~contents/methods/answer"), a = e("~contents/methods/observer"), l = e("~utils/delay"), s = e("./phone-country-code");
function u(e1) {
    let t = `//button[normalize-space(text())='Add' and ancestor::div[contains(@class, 'chakra-form-control')]//p[normalize-space(text())='${e1}']]`;
    return document.evaluate(t, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
async function c() {
    let e1 = Array.from(document.querySelectorAll("button, a, [role='button']")).find((e1)=>/application form/i.test(e1.textContent || ""));
    e1 && (e1.click(), await (0, l.delay)(300));
    let t = Array.from(document.querySelectorAll("button, a, [role='button']")).find((e1)=>/apply for this position/i.test(e1.textContent || ""));
    t && (t.click(), await (0, l.delay)(500));
    let r1 = document.querySelectorAll('div[data-test-id="education"]');
    if (0 === r1.length) {
        let e1 = u("Education");
        e1 && (e1.click(), await (0, l.delay)(500));
    }
    let n = document.querySelectorAll('div[data-test-id="experience"]');
    if (0 === n.length) {
        let e1 = u("Experience");
        e1 && (e1.click(), await (0, l.delay)(500));
    }
}
function d(e1) {
    return document.querySelector(`input[type="file"]#${e1}`);
}
function f(e1) {
    return d(e1)?.closest(".chakra-form-control, [class*='form-control']");
}
function p(e1) {
    let t = f(e1);
    if (!t) return null;
    let r1 = Array.from(t.querySelectorAll("div, p, span")).find((e1)=>/^uploaded$/i.test(e1.textContent?.trim() || ""));
    if (!r1) return null;
    let n = r1.parentElement;
    for(; n && n !== t;){
        if (n.querySelector("button")) return n;
        n = n.parentElement;
    }
    return r1.parentElement;
}
function m(e1) {
    let t = p(e1);
    if (!t) return null;
    let r1 = t.querySelector('[aria-label*="delete" i], [aria-label*="remove" i], button[title*="delete" i], button[title*="remove" i]');
    if (r1) return r1;
    let n = t.lastElementChild;
    return n && n !== t && (n.querySelector("svg") || n.childElementCount > 0) ? n : null;
}
function h(e1) {
    let t = d(e1);
    if (!t) return !1;
    if (t.required || "true" === t.getAttribute("aria-required")) return !0;
    let r1 = document.querySelector(`label[for="${e1}"]`);
    return /[*\uff0a]/.test(r1?.textContent || "");
}
function g(e1) {
    return "cover_letter" === e1 || h(e1);
}
function b() {
    let e1 = d("cover_letter");
    return e1 ? "required" : "";
}
async function y(e1) {
    if (!p(e1)) return !0;
    let t = m(e1);
    if (!t) return console.warn(`[kula] Failed to find delete trigger for ${e1}`), !1;
    t.click();
    let r1 = await (0, a.waitForCondition)(()=>!p(e1), {
        timeout: 4e3,
        interval: 100,
        observeTarget: document.body
    });
    return r1 && await (0, l.delay)(150), r1;
}
async function v(e1, t, r1, n, o, i) {
    r1({
        label: i,
        required: g(e1)
    });
    let l = await y(e1);
    if (!l) return o(i), !1;
    let s = await (0, a.waitForCondition)(()=>!!d(e1), {
        timeout: 4e3,
        interval: 100,
        observeTarget: document.body
    });
    if (!s) return o(i), !1;
    let u = d(e1);
    if (!u?.files) return o(i), !1;
    u.files = t.files, u.dispatchEvent(new Event("change", {
        bubbles: !0,
        cancelable: !1
    }));
    let c = await (0, a.waitForCondition)(()=>!!p(e1) || !!d(e1)?.files?.length, {
        timeout: 4e3,
        interval: 100,
        observeTarget: document.body
    });
    return c ? (n(i), !0) : (o(i), !1);
}
let w = {
    jan: 0,
    january: 0,
    feb: 1,
    february: 1,
    mar: 2,
    march: 2,
    apr: 3,
    april: 3,
    may: 4,
    jun: 5,
    june: 5,
    jul: 6,
    july: 6,
    aug: 7,
    august: 7,
    sep: 8,
    sept: 8,
    september: 8,
    oct: 9,
    october: 9,
    nov: 10,
    november: 10,
    dec: 11,
    december: 11
}, S = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
function E(e1) {
    let t = e1.trim().match(/^([A-Za-z]+)\s+(\d{4})$/);
    if (!t) return null;
    let r1 = w[t[1].toLowerCase()], n = Number(t[2]);
    return null != r1 && Number.isFinite(n) ? {
        displayValue: `${S[r1]} ${n}`,
        monthIndex: r1,
        year: n
    } : null;
}
_c = E;
function x(e1) {
    return "input" === e1.tagName.toLowerCase() && (e1.classList.contains("kula-date-field-input-trigger") || null !== e1.closest(".kula-date-field-shell") || null !== e1.closest(".react-datepicker-wrapper"));
}
function C(e1) {
    let t = e1.closest(".kula-date-field-shell");
    return t?.querySelector(".react-datepicker-popper") || document.querySelector(".react-datepicker-popper");
}
_c1 = C;
function A(e1) {
    let t = e1.querySelector(".react-datepicker-year-header")?.textContent || "", r1 = t.match(/\b(\d{4})\b/);
    return r1 ? Number(r1[1]) : null;
}
_c2 = A;
async function k(e1, t) {
    for(let r1 = 0; r1 < 30; r1++){
        let r1 = A(e1);
        if (!r1) return !1;
        if (r1 === t) return !0;
        let n = t < r1 ? "previous" : "next", o = e1.querySelector(`.react-datepicker__navigation--${n}`);
        if (!o) return !1;
        o.click(), await (0, l.delay)(120);
    }
    return A(e1) === t;
}
function T(e1, t) {
    let r1 = Array.from(e1.querySelectorAll(".react-datepicker__month-text"));
    return r1.find((e1)=>{
        let r1 = String(e1.className), n = e1.getAttribute("aria-label") || "", o = "true" === e1.getAttribute("aria-disabled") || r1.includes("react-datepicker__month-text--disabled");
        return !o && r1.includes(`react-datepicker__month-${t.monthIndex}`) && (!n || n.includes(String(t.year)));
    }) || null;
}
_c3 = T;
async function F(e1, t) {
    let r1 = E(t);
    if (!r1) return !1;
    e1.focus(), e1.click();
    let n = await (0, a.waitForCondition)(()=>!!C(e1), {
        timeout: 3e3,
        interval: 100,
        observeTarget: document.body
    });
    if (!n) return !1;
    let o = C(e1);
    if (!o) return !1;
    let i = await k(o, r1.year);
    if (!i) return !1;
    let l = T(o, r1);
    return !!l && (l.dispatchEvent(new MouseEvent("mousedown", {
        bubbles: !0,
        cancelable: !0
    })), l.dispatchEvent(new MouseEvent("mouseup", {
        bubbles: !0,
        cancelable: !0
    })), l.click(), await (0, a.waitForCondition)(()=>e1.value.trim() === r1.displayValue, {
        timeout: 1500,
        interval: 100,
        observeTarget: document.body
    }));
}
_c4 = F;
async function I(e1, t) {
    if (!e1 || x(e1) && await F(e1, t)) return;
    e1.focus();
    let r1 = e1 instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(r1, "value")?.set;
    n ? n.call(e1, t || "") : e1.value = t || "", e1.dispatchEvent(new Event("input", {
        bubbles: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0
    })), await (0, l.delay)(80), e1.dispatchEvent(new KeyboardEvent("keydown", {
        key: "Escape",
        keyCode: 27,
        code: "Escape",
        bubbles: !0,
        cancelable: !0
    })), await (0, l.delay)(50), document.body.dispatchEvent(new MouseEvent("mousedown", {
        bubbles: !0,
        cancelable: !0
    })), document.body.dispatchEvent(new MouseEvent("mouseup", {
        bubbles: !0,
        cancelable: !0
    })), document.body.dispatchEvent(new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0
    })), await (0, l.delay)(50);
}
_c5 = I;
async function j(e1, t) {
    let r1 = e1.$input;
    if (!r1) return;
    let n = t.replace(/\D/g, "") || t;
    await I(r1, n);
}
async function D(e1, t) {
    let r1 = t?.[0];
    if (!r1) return;
    let n = e1.$input;
    if (!n) return;
    if (e1.label === s.KULA_PHONE_COUNTRY_CODE_LABEL && "button" === n.tagName.toLowerCase()) return await (0, s.fillKulaPhoneCountryCode)(n, r1);
    if ("select" === n.tagName.toLowerCase()) {
        let e1 = n;
        r1.toLowerCase().trim();
        let t = (0, o.findExactChoice)(Array.from(e1.options), r1, (e1)=>e1.textContent, (e1)=>e1.value);
        t && (e1.value = t.value, e1.dispatchEvent(new Event("change", {
            bubbles: !0
        })), e1.dispatchEvent(new Event("input", {
            bubbles: !0
        })));
        return;
    }
    let i = n, a = "true" === i.getAttribute("aria-readonly") || "none" === i.inputMode;
    if (i.focus(), await (0, l.delay)(120), i.dispatchEvent(new KeyboardEvent("keydown", {
        key: "ArrowDown",
        keyCode: 40,
        bubbles: !0
    })), await (0, l.delay)(350), !a) {
        let e1 = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set;
        e1 ? e1.call(i, r1) : i.value = r1, i.dispatchEvent(new Event("input", {
            bubbles: !0
        })), i.dispatchEvent(new Event("change", {
            bubbles: !0
        })), await (0, l.delay)(400);
    }
    let u = i.closest('[class*="-container"]'), c = u?.querySelector('[class*="-menu"]') || u?.querySelector('[role="listbox"]');
    if (c || (c = document.querySelector('[class*="-menu"]') || document.querySelector('[role="listbox"]')), c) {
        let e1 = Array.from(c.querySelectorAll('[class*="-option"], [role="option"], li, button')).filter((e1)=>(e1.textContent || "").trim().length > 0);
        if (e1.length > 0) {
            r1.toLowerCase().trim();
            let t = (0, o.findExactChoice)(e1, r1, (e1)=>e1.textContent);
            if (t) {
                t.dispatchEvent(new MouseEvent("mousedown", {
                    bubbles: !0,
                    cancelable: !0
                })), await (0, l.delay)(50), t.dispatchEvent(new MouseEvent("mouseup", {
                    bubbles: !0,
                    cancelable: !0
                })), t.dispatchEvent(new MouseEvent("click", {
                    bubbles: !0,
                    cancelable: !0
                })), await (0, l.delay)(100);
                return;
            }
        }
    }
    i.dispatchEvent(new KeyboardEvent("keydown", {
        key: "Enter",
        keyCode: 13,
        bubbles: !0
    })), await (0, l.delay)(100);
}
_c6 = D;
async function P(e1, t) {
    let r1 = t?.[0];
    if (!r1) return;
    let n = e1.$input;
    if (!n) return;
    let i = n.closest('[data-test-id="company"]'), a = !!i, s = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set, u = ()=>{
        let e1 = Array.from((i || document).querySelectorAll('.chakra-popover__content, [class*="popover__content"], section[role="dialog"]'));
        for (let t of e1){
            let e1 = getComputedStyle(t);
            if ("hidden" !== e1.visibility && "none" !== e1.display && parseFloat(e1.opacity || "1") > .1) return t;
        }
        if (a) return null;
        let t = n.closest('[class*="-container"]');
        return t?.querySelector('[class*="-menu"]') || t?.querySelector('[role="listbox"]') || document.querySelector('[class*="-menu"]:not([style*="display: none"])') || document.querySelector('[role="listbox"]:not([style*="display: none"])');
    }, c = (e1)=>{
        if (a) return Array.from(e1.children).filter((e1)=>{
            let t = e1.textContent?.trim() || "";
            return "div" === e1.tagName.toLowerCase() && !!e1.querySelector("p") && !!t && !/^Add and select\b/i.test(t) && "true" !== e1.getAttribute("aria-disabled");
        });
        let t = Array.from(e1.querySelectorAll('div[class*="css-"], p, span, [class*="-option"], [role="option"], li, button'));
        return t.filter((e1)=>{
            let t = (e1.textContent || "").trim();
            if (0 === t.length) return !1;
            let r1 = e1.querySelector('div[class*="css-"], section, article');
            return !r1;
        });
    }, d = async (e1)=>{
        e1.scrollIntoView({
            block: "nearest",
            behavior: "auto"
        }), await (0, l.delay)(50), e1.dispatchEvent(new MouseEvent("mousedown", {
            bubbles: !0,
            cancelable: !0
        })), await (0, l.delay)(30), e1.dispatchEvent(new MouseEvent("mouseup", {
            bubbles: !0,
            cancelable: !0
        })), e1.dispatchEvent(new MouseEvent("click", {
            bubbles: !0,
            cancelable: !0
        })), await (0, l.delay)(200);
    }, f = 3;
    for(let e1 = 0; e1 < f; e1++){
        n.focus(), await (0, l.delay)(150), s ? s.call(n, r1) : n.value = r1, n.dispatchEvent(new Event("input", {
            bubbles: !0
        })), n.dispatchEvent(new Event("change", {
            bubbles: !0
        }));
        let e1 = null;
        for(let t = 0; t < 15 && (await (0, l.delay)(200), !(e1 = u())); t++);
        if (!e1) continue;
        let t = [];
        for(let r1 = 0; r1 < 10; r1++){
            await (0, l.delay)(200);
            let r1 = u();
            if (!r1) {
                e1 = null;
                break;
            }
            if ((t = c(e1 = r1)).length > 0) break;
        }
        if (!e1 || 0 === t.length) continue;
        let f = (0, o.findExactChoice)(t, r1, (e1)=>e1.textContent);
        if (f && u()) {
            if (await d(f), !u()) {
                if (a && (!(0, o.isExactChoiceMatch)(n.value, f.textContent) || "true" === n.getAttribute("aria-invalid"))) break;
                if (n.blur(), await (0, l.delay)(100), a) {
                    if (!(0, o.isExactChoiceMatch)(n.value, f.textContent) || "true" === n.getAttribute("aria-invalid") || i?.querySelector(".chakra-form__error-message")) break;
                    return !0;
                }
                return;
            }
            if (!a && (n.dispatchEvent(new KeyboardEvent("keydown", {
                key: "Enter",
                keyCode: 13,
                bubbles: !0
            })), await (0, l.delay)(150), !u())) {
                n.blur(), await (0, l.delay)(100);
                return;
            }
        }
    }
    if (a) return s ? s.call(n, "") : n.value = "", n.dispatchEvent(new Event("input", {
        bubbles: !0
    })), n.dispatchEvent(new Event("change", {
        bubbles: !0
    })), n.blur(), !1;
    n.dispatchEvent(new KeyboardEvent("keydown", {
        key: "Enter",
        keyCode: 13,
        bubbles: !0
    })), await (0, l.delay)(150), n.blur(), await (0, l.delay)(100);
}
_c7 = P;
async function _(e1, t) {
    let r1 = (t || []).map((e1)=>e1.toLowerCase().trim()), n = e1.$checkboxs || [];
    for (let e1 of n){
        let t = (e1.closest("label")?.textContent || e1.getAttribute("aria-label") || "").toLowerCase().trim(), n = r1.some((e1)=>(0, o.isExactChoiceMatch)(t, e1));
        n && !e1.checked && (e1.click(), e1.dispatchEvent(new Event("change", {
            bubbles: !0
        })), await (0, l.delay)(60));
    }
}
async function L(e1, t) {
    let r1 = t?.[0]?.toLowerCase().trim();
    if (!r1) return;
    let n = Array.from((e1.$radioParent || document).querySelectorAll('input[type="radio"]')), i = (0, o.findExactChoice)(n.filter((e1)=>!e1.disabled), r1, (e1)=>e1.closest("label")?.textContent, (e1)=>e1.value);
    i && (i.click(), i.dispatchEvent(new Event("change", {
        bubbles: !0
    })), await (0, l.delay)(60));
}
_c8 = L;
async function R(e1, t, r1, n) {
    await v("resume", await (0, i.fetchPdfAsBlob)(e1), t, r1, n, "Resume/CV");
}
_c9 = R;
async function O(e1, t, r1, n) {
    await v("cover_letter", await (0, i.fetchCoverLetterPdfAsBlob)(e1), t, r1, n, "Cover Letter");
}
_c10 = O;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
$RefreshReg$(_c, "E");
$RefreshReg$(_c1, "C");
$RefreshReg$(_c2, "A");
$RefreshReg$(_c3, "T");
$RefreshReg$(_c4, "F");
$RefreshReg$(_c5, "I");
$RefreshReg$(_c6, "D");
$RefreshReg$(_c7, "P");
$RefreshReg$(_c8, "L");
$RefreshReg$(_c9, "R");
$RefreshReg$(_c10, "O");

},{}]},["az7XP","ltzox"], "ltzox", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsZ0JBQWUsRUFBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUc7UUFBQyxTQUFRO1FBQUksVUFBUztRQUFJLGVBQWMsU0FBUztJQUFJO0lBQUcsSUFBRyxDQUFDLEdBQUUsT0FBTyxFQUFFLElBQUcsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFO0lBQUcsSUFBRyxDQUFDLEdBQUcsT0FBTSxPQUFPLEVBQUUsSUFBRyxDQUFDO0lBQUUsRUFBRSxRQUFNLEVBQUUsT0FBTSxFQUFFLGNBQWMsSUFBSSxNQUFNLFVBQVM7UUFBQyxTQUFRLENBQUM7UUFBRSxZQUFXLENBQUM7SUFBQztJQUFJLElBQUksSUFBRSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsZ0JBQWUsRUFBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLE9BQUksQ0FBQyxDQUFDLEVBQUUsS0FBSSxPQUFPLFFBQU87UUFBQyxTQUFRO1FBQUksVUFBUztRQUFJLGVBQWMsU0FBUztJQUFJO0lBQUcsT0FBTyxJQUFHLENBQUEsRUFBRSxJQUFHLENBQUMsQ0FBQSxJQUFJLENBQUEsRUFBRSxJQUFHLENBQUMsQ0FBQTtBQUFFO0FBQUMsSUFBSSxJQUFFO0lBQUMsS0FBSTtJQUFFLFNBQVE7SUFBRSxLQUFJO0lBQUUsVUFBUztJQUFFLEtBQUk7SUFBRSxPQUFNO0lBQUUsS0FBSTtJQUFFLE9BQU07SUFBRSxLQUFJO0lBQUUsS0FBSTtJQUFFLE1BQUs7SUFBRSxLQUFJO0lBQUUsTUFBSztJQUFFLEtBQUk7SUFBRSxRQUFPO0lBQUUsS0FBSTtJQUFFLE1BQUs7SUFBRSxXQUFVO0lBQUUsS0FBSTtJQUFFLFNBQVE7SUFBRSxLQUFJO0lBQUcsVUFBUztJQUFHLEtBQUk7SUFBRyxVQUFTO0FBQUUsR0FBRSxJQUFFO0lBQUM7SUFBTTtJQUFNO0lBQU07SUFBTTtJQUFNO0lBQU07SUFBTTtJQUFNO0lBQU07SUFBTTtJQUFNO0NBQU07QUFBQyxTQUFTLEVBQUUsRUFBQztJQUFFLElBQUksSUFBRSxHQUFFLE9BQU8sTUFBTTtJQUEy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RSxBQUFDLENBQUEsR0FBRSxlQUFhLEVBQUMsRUFBRztZQUFPLElBQUcsTUFBSSxFQUFFLFFBQU8sT0FBTSxDQUFDO1lBQUUsSUFBSSxLQUFFLEdBQUUsY0FBYztZQUF3QyxPQUFNLENBQUM7UUFBQztJQUFFLEdBQUUsSUFBRSxPQUFNO1FBQUksR0FBRSxlQUFlO1lBQUMsT0FBTTtZQUFVLFVBQVM7UUFBTSxJQUFHLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUcsS0FBSSxHQUFFLGNBQWMsSUFBSSxXQUFXLGFBQVk7WUFBQyxTQUFRLENBQUM7WUFBRSxZQUFXLENBQUM7UUFBQyxLQUFJLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUcsS0FBSSxHQUFFLGNBQWMsSUFBSSxXQUFXLFdBQVU7WUFBQyxTQUFRLENBQUM7WUFBRSxZQUFXLENBQUM7UUFBQyxLQUFJLEdBQUUsY0FBYyxJQUFJLFdBQVcsU0FBUTtZQUFDLFNBQVEsQ0FBQztZQUFFLFlBQVcsQ0FBQztRQUFDLEtBQUksTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRztJQUFJLEdBQUUsSUFBRTtJQUFFLElBQUksSUFBSSxLQUFFLEdBQUUsS0FBRSxHQUFFLEtBQUk7UUFBQyxFQUFFLFNBQVEsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRyxNQUFLLElBQUUsRUFBRSxLQUFLLEdBQUUsTUFBRyxFQUFFLFFBQU0sSUFBRSxFQUFFLGNBQWMsSUFBSSxNQUFNLFNBQVE7WUFBQyxTQUFRLENBQUM7UUFBQyxLQUFJLEVBQUUsY0FBYyxJQUFJLE1BQU0sVUFBUztZQUFDLFNBQVEsQ0FBQztRQUFDO1FBQUksSUFBSSxLQUFFO1FBQUssSUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLE1BQUssQ0FBQSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLE1BQUssQ0FBRSxDQUFBLEtBQUUsR0FBRSxDQUFDLEdBQUc7UUFBSyxJQUFHLENBQUMsSUFBRTtRQUFTLElBQUksSUFBRSxFQUFFO1FB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QUUsZ0JBQWMsUUFBTyxFQUFHLGlCQUFpQix5QkFBd0IsSUFBRSxBQUFDLENBQUEsR0FBRSxFQUFFLGVBQWMsRUFBRyxFQUFFLE9BQU8sQ0FBQSxLQUFHLENBQUMsR0FBRSxXQUFVLElBQUUsQ0FBQSxLQUFHLEdBQUUsUUFBUSxVQUFVLGFBQVksQ0FBQSxLQUFHLEdBQUU7SUFBTyxLQUFJLENBQUEsRUFBRSxTQUFRLEVBQUUsY0FBYyxJQUFJLE1BQU0sVUFBUztRQUFDLFNBQVEsQ0FBQztJQUFDLEtBQUksTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRyxHQUFFO0FBQUU7TUFBcFU7QUFBcVUsZUFBZSxFQUFFLEVBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLENBQUM7SUFBRSxNQUFNLEVBQUUsVUFBUyxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsY0FBYSxFQUFHLEtBQUcsR0FBRSxJQUFFLEdBQUU7QUFBWTtNQUE1RTtBQUE2RSxlQUFlLEVBQUUsRUFBQyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsQ0FBQztJQUFFLE1BQU0sRUFBRSxnQkFBZSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUseUJBQXdCLEVBQUcsS0FBRyxHQUFFLElBQUUsR0FBRTtBQUFlO09BQWhHIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS03NTE0MTY2NTU5M2QwNTQ3LmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL2t1bGEvb3BlcmF0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxrdWxhXFxcXG9wZXJhdGlvbnMuanNcIixcImJ1bmRsZUlkXCI6XCIyZmMxNDg1MDVlZWFkZDc0XCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogNHdWSVBcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL2t1bGEvb3BlcmF0aW9ucy5qc1xyXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi9waG9uZS1jb3VudHJ5LWNvZGUgLT4gZlJNMkIgID0+ICBzcmMvY29udGVudHMvc2l0ZXMva3VsYS9waG9uZS1jb3VudHJ5LWNvZGUuanNcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2Fuc3dlciAtPiA3VDVlVyAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2Fuc3dlci5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2Nob2ljZS1tYXRjaCAtPiA2bWtJNCAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2Nob2ljZS1tYXRjaC5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL29ic2VydmVyIC0+IGVUelV4ICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvb2JzZXJ2ZXIuanNcclxuICogICB+dXRpbHMvZGVsYXkgLT4gYW02MTQgID0+ICBzcmMvdXRpbHMvZGVsYXkuanNcclxuICovXHJcblxyXG52YXIgbj1lKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtuLmRlZmluZUludGVyb3BGbGFnKHIpLG4uZXhwb3J0KHIsXCJwcmVGaWxsRm9ybVwiLCgpPT5jKSxuLmV4cG9ydChyLFwiZ2V0S3VsYVNlY3Rpb25BZGRCdXR0b25cIiwoKT0+dSksbi5leHBvcnQocixcImdldEt1bGFDb3ZlckxldHRlclN0YXR1c1wiLCgpPT5iKSxuLmV4cG9ydChyLFwiZmlsbElucHV0VGV4dEZpZWxkXCIsKCk9PkkpLG4uZXhwb3J0KHIsXCJmaWxsUGhvbmVGaWVsZFwiLCgpPT5qKSxuLmV4cG9ydChyLFwiZmlsbFNlbGVjdEZpZWxkXCIsKCk9PkQpLG4uZXhwb3J0KHIsXCJmaWxsU2VhcmNoRmllbGRcIiwoKT0+UCksbi5leHBvcnQocixcImZpbGxDaGVja2JveEZpZWxkXCIsKCk9Pl8pLG4uZXhwb3J0KHIsXCJmaWxsUmFkaW9Hcm91cEZpZWxkXCIsKCk9PkwpLG4uZXhwb3J0KHIsXCJ1cGxvYWRSZXN1bWVcIiwoKT0+Uiksbi5leHBvcnQocixcInVwbG9hZENvdmVyTGV0dGVyXCIsKCk9Pk8pO3ZhciBvPWUoXCJ+Y29udGVudHMvbWV0aG9kcy9jaG9pY2UtbWF0Y2hcIiksaT1lKFwifmNvbnRlbnRzL21ldGhvZHMvYW5zd2VyXCIpLGE9ZShcIn5jb250ZW50cy9tZXRob2RzL29ic2VydmVyXCIpLGw9ZShcIn51dGlscy9kZWxheVwiKSxzPWUoXCIuL3Bob25lLWNvdW50cnktY29kZVwiKTtmdW5jdGlvbiB1KGUpe2xldCB0PWAvL2J1dHRvbltub3JtYWxpemUtc3BhY2UodGV4dCgpKT0nQWRkJyBhbmQgYW5jZXN0b3I6OmRpdltjb250YWlucyhAY2xhc3MsICdjaGFrcmEtZm9ybS1jb250cm9sJyldLy9wW25vcm1hbGl6ZS1zcGFjZSh0ZXh0KCkpPScke2V9J11dYDtyZXR1cm4gZG9jdW1lbnQuZXZhbHVhdGUodCxkb2N1bWVudCxudWxsLFhQYXRoUmVzdWx0LkZJUlNUX09SREVSRURfTk9ERV9UWVBFLG51bGwpLnNpbmdsZU5vZGVWYWx1ZX1hc3luYyBmdW5jdGlvbiBjKCl7bGV0IGU9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uLCBhLCBbcm9sZT0nYnV0dG9uJ11cIikpLmZpbmQoZT0+L2FwcGxpY2F0aW9uIGZvcm0vaS50ZXN0KGUudGV4dENvbnRlbnR8fFwiXCIpKTtlJiYoZS5jbGljaygpLGF3YWl0ICgwLGwuZGVsYXkpKDMwMCkpO2xldCB0PUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvbiwgYSwgW3JvbGU9J2J1dHRvbiddXCIpKS5maW5kKGU9Pi9hcHBseSBmb3IgdGhpcyBwb3NpdGlvbi9pLnRlc3QoZS50ZXh0Q29udGVudHx8XCJcIikpO3QmJih0LmNsaWNrKCksYXdhaXQgKDAsbC5kZWxheSkoNTAwKSk7bGV0IHI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2W2RhdGEtdGVzdC1pZD1cImVkdWNhdGlvblwiXScpO2lmKDA9PT1yLmxlbmd0aCl7bGV0IGU9dShcIkVkdWNhdGlvblwiKTtlJiYoZS5jbGljaygpLGF3YWl0ICgwLGwuZGVsYXkpKDUwMCkpfWxldCBuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdltkYXRhLXRlc3QtaWQ9XCJleHBlcmllbmNlXCJdJyk7aWYoMD09PW4ubGVuZ3RoKXtsZXQgZT11KFwiRXhwZXJpZW5jZVwiKTtlJiYoZS5jbGljaygpLGF3YWl0ICgwLGwuZGVsYXkpKDUwMCkpfX1mdW5jdGlvbiBkKGUpe3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFt0eXBlPVwiZmlsZVwiXSMke2V9YCl9ZnVuY3Rpb24gZihlKXtyZXR1cm4gZChlKT8uY2xvc2VzdChcIi5jaGFrcmEtZm9ybS1jb250cm9sLCBbY2xhc3MqPSdmb3JtLWNvbnRyb2wnXVwiKX1mdW5jdGlvbiBwKGUpe2xldCB0PWYoZSk7aWYoIXQpcmV0dXJuIG51bGw7bGV0IHI9QXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYsIHAsIHNwYW5cIikpLmZpbmQoZT0+L151cGxvYWRlZCQvaS50ZXN0KGUudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIikpO2lmKCFyKXJldHVybiBudWxsO2xldCBuPXIucGFyZW50RWxlbWVudDtmb3IoO24mJm4hPT10Oyl7aWYobi5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpKXJldHVybiBuO249bi5wYXJlbnRFbGVtZW50fXJldHVybiByLnBhcmVudEVsZW1lbnR9ZnVuY3Rpb24gbShlKXtsZXQgdD1wKGUpO2lmKCF0KXJldHVybiBudWxsO2xldCByPXQucXVlcnlTZWxlY3RvcignW2FyaWEtbGFiZWwqPVwiZGVsZXRlXCIgaV0sIFthcmlhLWxhYmVsKj1cInJlbW92ZVwiIGldLCBidXR0b25bdGl0bGUqPVwiZGVsZXRlXCIgaV0sIGJ1dHRvblt0aXRsZSo9XCJyZW1vdmVcIiBpXScpO2lmKHIpcmV0dXJuIHI7bGV0IG49dC5sYXN0RWxlbWVudENoaWxkO3JldHVybiBuJiZuIT09dCYmKG4ucXVlcnlTZWxlY3RvcihcInN2Z1wiKXx8bi5jaGlsZEVsZW1lbnRDb3VudD4wKT9uOm51bGx9ZnVuY3Rpb24gaChlKXtsZXQgdD1kKGUpO2lmKCF0KXJldHVybiExO2lmKHQucmVxdWlyZWR8fFwidHJ1ZVwiPT09dC5nZXRBdHRyaWJ1dGUoXCJhcmlhLXJlcXVpcmVkXCIpKXJldHVybiEwO2xldCByPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7ZX1cIl1gKTtyZXR1cm4vWypcXHVmZjBhXS8udGVzdChyPy50ZXh0Q29udGVudHx8XCJcIil9ZnVuY3Rpb24gZyhlKXtyZXR1cm5cImNvdmVyX2xldHRlclwiPT09ZXx8aChlKX1mdW5jdGlvbiBiKCl7bGV0IGU9ZChcImNvdmVyX2xldHRlclwiKTtyZXR1cm4gZT9cInJlcXVpcmVkXCI6XCJcIn1hc3luYyBmdW5jdGlvbiB5KGUpe2lmKCFwKGUpKXJldHVybiEwO2xldCB0PW0oZSk7aWYoIXQpcmV0dXJuIGNvbnNvbGUud2FybihgW2t1bGFdIEZhaWxlZCB0byBmaW5kIGRlbGV0ZSB0cmlnZ2VyIGZvciAke2V9YCksITE7dC5jbGljaygpO2xldCByPWF3YWl0ICgwLGEud2FpdEZvckNvbmRpdGlvbikoKCk9PiFwKGUpLHt0aW1lb3V0OjRlMyxpbnRlcnZhbDoxMDAsb2JzZXJ2ZVRhcmdldDpkb2N1bWVudC5ib2R5fSk7cmV0dXJuIHImJmF3YWl0ICgwLGwuZGVsYXkpKDE1MCkscn1hc3luYyBmdW5jdGlvbiB2KGUsdCxyLG4sbyxpKXtyKHtsYWJlbDppLHJlcXVpcmVkOmcoZSl9KTtsZXQgbD1hd2FpdCB5KGUpO2lmKCFsKXJldHVybiBvKGkpLCExO2xldCBzPWF3YWl0ICgwLGEud2FpdEZvckNvbmRpdGlvbikoKCk9PiEhZChlKSx7dGltZW91dDo0ZTMsaW50ZXJ2YWw6MTAwLG9ic2VydmVUYXJnZXQ6ZG9jdW1lbnQuYm9keX0pO2lmKCFzKXJldHVybiBvKGkpLCExO2xldCB1PWQoZSk7aWYoIXU/LmZpbGVzKXJldHVybiBvKGkpLCExO3UuZmlsZXM9dC5maWxlcyx1LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMX0pKTtsZXQgYz1hd2FpdCAoMCxhLndhaXRGb3JDb25kaXRpb24pKCgpPT4hIXAoZSl8fCEhZChlKT8uZmlsZXM/Lmxlbmd0aCx7dGltZW91dDo0ZTMsaW50ZXJ2YWw6MTAwLG9ic2VydmVUYXJnZXQ6ZG9jdW1lbnQuYm9keX0pO3JldHVybiBjPyhuKGkpLCEwKToobyhpKSwhMSl9bGV0IHc9e2phbjowLGphbnVhcnk6MCxmZWI6MSxmZWJydWFyeToxLG1hcjoyLG1hcmNoOjIsYXByOjMsYXByaWw6MyxtYXk6NCxqdW46NSxqdW5lOjUsanVsOjYsanVseTo2LGF1Zzo3LGF1Z3VzdDo3LHNlcDo4LHNlcHQ6OCxzZXB0ZW1iZXI6OCxvY3Q6OSxvY3RvYmVyOjksbm92OjEwLG5vdmVtYmVyOjEwLGRlYzoxMSxkZWNlbWJlcjoxMX0sUz1bXCJKYW5cIixcIkZlYlwiLFwiTWFyXCIsXCJBcHJcIixcIk1heVwiLFwiSnVuXCIsXCJKdWxcIixcIkF1Z1wiLFwiU2VwXCIsXCJPY3RcIixcIk5vdlwiLFwiRGVjXCJdO2Z1bmN0aW9uIEUoZSl7bGV0IHQ9ZS50cmltKCkubWF0Y2goL14oW0EtWmEtel0rKVxccysoXFxkezR9KSQvKTtpZighdClyZXR1cm4gbnVsbDtsZXQgcj13W3RbMV0udG9Mb3dlckNhc2UoKV0sbj1OdW1iZXIodFsyXSk7cmV0dXJuIG51bGwhPXImJk51bWJlci5pc0Zpbml0ZShuKT97ZGlzcGxheVZhbHVlOmAke1Nbcl19ICR7bn1gLG1vbnRoSW5kZXg6cix5ZWFyOm59Om51bGx9ZnVuY3Rpb24geChlKXtyZXR1cm5cImlucHV0XCI9PT1lLnRhZ05hbWUudG9Mb3dlckNhc2UoKSYmKGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwia3VsYS1kYXRlLWZpZWxkLWlucHV0LXRyaWdnZXJcIil8fG51bGwhPT1lLmNsb3Nlc3QoXCIua3VsYS1kYXRlLWZpZWxkLXNoZWxsXCIpfHxudWxsIT09ZS5jbG9zZXN0KFwiLnJlYWN0LWRhdGVwaWNrZXItd3JhcHBlclwiKSl9ZnVuY3Rpb24gQyhlKXtsZXQgdD1lLmNsb3Nlc3QoXCIua3VsYS1kYXRlLWZpZWxkLXNoZWxsXCIpO3JldHVybiB0Py5xdWVyeVNlbGVjdG9yKFwiLnJlYWN0LWRhdGVwaWNrZXItcG9wcGVyXCIpfHxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlYWN0LWRhdGVwaWNrZXItcG9wcGVyXCIpfWZ1bmN0aW9uIEEoZSl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwiLnJlYWN0LWRhdGVwaWNrZXIteWVhci1oZWFkZXJcIik/LnRleHRDb250ZW50fHxcIlwiLHI9dC5tYXRjaCgvXFxiKFxcZHs0fSlcXGIvKTtyZXR1cm4gcj9OdW1iZXIoclsxXSk6bnVsbH1hc3luYyBmdW5jdGlvbiBrKGUsdCl7Zm9yKGxldCByPTA7cjwzMDtyKyspe2xldCByPUEoZSk7aWYoIXIpcmV0dXJuITE7aWYocj09PXQpcmV0dXJuITA7bGV0IG49dDxyP1wicHJldmlvdXNcIjpcIm5leHRcIixvPWUucXVlcnlTZWxlY3RvcihgLnJlYWN0LWRhdGVwaWNrZXJfX25hdmlnYXRpb24tLSR7bn1gKTtpZighbylyZXR1cm4hMTtvLmNsaWNrKCksYXdhaXQgKDAsbC5kZWxheSkoMTIwKX1yZXR1cm4gQShlKT09PXR9ZnVuY3Rpb24gVChlLHQpe2xldCByPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXRleHRcIikpO3JldHVybiByLmZpbmQoZT0+e2xldCByPVN0cmluZyhlLmNsYXNzTmFtZSksbj1lLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fFwiXCIsbz1cInRydWVcIj09PWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiKXx8ci5pbmNsdWRlcyhcInJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXRleHQtLWRpc2FibGVkXCIpO3JldHVybiFvJiZyLmluY2x1ZGVzKGByZWFjdC1kYXRlcGlja2VyX19tb250aC0ke3QubW9udGhJbmRleH1gKSYmKCFufHxuLmluY2x1ZGVzKFN0cmluZyh0LnllYXIpKSl9KXx8bnVsbH1hc3luYyBmdW5jdGlvbiBGKGUsdCl7bGV0IHI9RSh0KTtpZighcilyZXR1cm4hMTtlLmZvY3VzKCksZS5jbGljaygpO2xldCBuPWF3YWl0ICgwLGEud2FpdEZvckNvbmRpdGlvbikoKCk9PiEhQyhlKSx7dGltZW91dDozZTMsaW50ZXJ2YWw6MTAwLG9ic2VydmVUYXJnZXQ6ZG9jdW1lbnQuYm9keX0pO2lmKCFuKXJldHVybiExO2xldCBvPUMoZSk7aWYoIW8pcmV0dXJuITE7bGV0IGk9YXdhaXQgayhvLHIueWVhcik7aWYoIWkpcmV0dXJuITE7bGV0IGw9VChvLHIpO3JldHVybiEhbCYmKGwuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlZG93blwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSksbC5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2V1cFwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSksbC5jbGljaygpLGF3YWl0ICgwLGEud2FpdEZvckNvbmRpdGlvbikoKCk9PmUudmFsdWUudHJpbSgpPT09ci5kaXNwbGF5VmFsdWUse3RpbWVvdXQ6MTUwMCxpbnRlcnZhbDoxMDAsb2JzZXJ2ZVRhcmdldDpkb2N1bWVudC5ib2R5fSkpfWFzeW5jIGZ1bmN0aW9uIEkoZSx0KXtpZighZXx8eChlKSYmYXdhaXQgRihlLHQpKXJldHVybjtlLmZvY3VzKCk7bGV0IHI9ZSBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQ/SFRNTFRleHRBcmVhRWxlbWVudC5wcm90b3R5cGU6SFRNTElucHV0RWxlbWVudC5wcm90b3R5cGUsbj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsXCJ2YWx1ZVwiKT8uc2V0O24/bi5jYWxsKGUsdHx8XCJcIik6ZS52YWx1ZT10fHxcIlwiLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwfSkpLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMH0pKSxhd2FpdCAoMCxsLmRlbGF5KSg4MCksZS5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5ZG93blwiLHtrZXk6XCJFc2NhcGVcIixrZXlDb2RlOjI3LGNvZGU6XCJFc2NhcGVcIixidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSksYXdhaXQgKDAsbC5kZWxheSkoNTApLGRvY3VtZW50LmJvZHkuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlZG93blwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSksZG9jdW1lbnQuYm9keS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2V1cFwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSksZG9jdW1lbnQuYm9keS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpLGF3YWl0ICgwLGwuZGVsYXkpKDUwKX1hc3luYyBmdW5jdGlvbiBqKGUsdCl7bGV0IHI9ZS4kaW5wdXQ7aWYoIXIpcmV0dXJuO2xldCBuPXQucmVwbGFjZSgvXFxEL2csXCJcIil8fHQ7YXdhaXQgSShyLG4pfWFzeW5jIGZ1bmN0aW9uIEQoZSx0KXtsZXQgcj10Py5bMF07aWYoIXIpcmV0dXJuO2xldCBuPWUuJGlucHV0O2lmKCFuKXJldHVybjtpZihlLmxhYmVsPT09cy5LVUxBX1BIT05FX0NPVU5UUllfQ09ERV9MQUJFTCYmXCJidXR0b25cIj09PW4udGFnTmFtZS50b0xvd2VyQ2FzZSgpKXJldHVybiBhd2FpdCAoMCxzLmZpbGxLdWxhUGhvbmVDb3VudHJ5Q29kZSkobixyKTtpZihcInNlbGVjdFwiPT09bi50YWdOYW1lLnRvTG93ZXJDYXNlKCkpe2xldCBlPW47ci50b0xvd2VyQ2FzZSgpLnRyaW0oKTtsZXQgdD0oMCxvLmZpbmRFeGFjdENob2ljZSkoQXJyYXkuZnJvbShlLm9wdGlvbnMpLHIsZT0+ZS50ZXh0Q29udGVudCxlPT5lLnZhbHVlKTt0JiYoZS52YWx1ZT10LnZhbHVlLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMH0pKSxlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMH0pKSk7cmV0dXJufWxldCBpPW4sYT1cInRydWVcIj09PWkuZ2V0QXR0cmlidXRlKFwiYXJpYS1yZWFkb25seVwiKXx8XCJub25lXCI9PT1pLmlucHV0TW9kZTtpZihpLmZvY3VzKCksYXdhaXQgKDAsbC5kZWxheSkoMTIwKSxpLmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXlkb3duXCIse2tleTpcIkFycm93RG93blwiLGtleUNvZGU6NDAsYnViYmxlczohMH0pKSxhd2FpdCAoMCxsLmRlbGF5KSgzNTApLCFhKXtsZXQgZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlLFwidmFsdWVcIik/LnNldDtlP2UuY2FsbChpLHIpOmkudmFsdWU9cixpLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMH0pKSxpLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITB9KSksYXdhaXQgKDAsbC5kZWxheSkoNDAwKX1sZXQgdT1pLmNsb3Nlc3QoJ1tjbGFzcyo9XCItY29udGFpbmVyXCJdJyksYz11Py5xdWVyeVNlbGVjdG9yKCdbY2xhc3MqPVwiLW1lbnVcIl0nKXx8dT8ucXVlcnlTZWxlY3RvcignW3JvbGU9XCJsaXN0Ym94XCJdJyk7aWYoY3x8KGM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2NsYXNzKj1cIi1tZW51XCJdJyl8fGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tyb2xlPVwibGlzdGJveFwiXScpKSxjKXtsZXQgZT1BcnJheS5mcm9tKGMucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzKj1cIi1vcHRpb25cIl0sIFtyb2xlPVwib3B0aW9uXCJdLCBsaSwgYnV0dG9uJykpLmZpbHRlcihlPT4oZS50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpLmxlbmd0aD4wKTtpZihlLmxlbmd0aD4wKXtyLnRvTG93ZXJDYXNlKCkudHJpbSgpO2xldCB0PSgwLG8uZmluZEV4YWN0Q2hvaWNlKShlLHIsZT0+ZS50ZXh0Q29udGVudCk7aWYodCl7dC5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2Vkb3duXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKSxhd2FpdCAoMCxsLmRlbGF5KSg1MCksdC5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2V1cFwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSksdC5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpLGF3YWl0ICgwLGwuZGVsYXkpKDEwMCk7cmV0dXJufX19aS5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5ZG93blwiLHtrZXk6XCJFbnRlclwiLGtleUNvZGU6MTMsYnViYmxlczohMH0pKSxhd2FpdCAoMCxsLmRlbGF5KSgxMDApfWFzeW5jIGZ1bmN0aW9uIFAoZSx0KXtsZXQgcj10Py5bMF07aWYoIXIpcmV0dXJuO2xldCBuPWUuJGlucHV0O2lmKCFuKXJldHVybjtsZXQgaT1uLmNsb3Nlc3QoJ1tkYXRhLXRlc3QtaWQ9XCJjb21wYW55XCJdJyksYT0hIWkscz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlLFwidmFsdWVcIik/LnNldCx1PSgpPT57bGV0IGU9QXJyYXkuZnJvbSgoaXx8ZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFrcmEtcG9wb3Zlcl9fY29udGVudCwgW2NsYXNzKj1cInBvcG92ZXJfX2NvbnRlbnRcIl0sIHNlY3Rpb25bcm9sZT1cImRpYWxvZ1wiXScpKTtmb3IobGV0IHQgb2YgZSl7bGV0IGU9Z2V0Q29tcHV0ZWRTdHlsZSh0KTtpZihcImhpZGRlblwiIT09ZS52aXNpYmlsaXR5JiZcIm5vbmVcIiE9PWUuZGlzcGxheSYmcGFyc2VGbG9hdChlLm9wYWNpdHl8fFwiMVwiKT4uMSlyZXR1cm4gdH1pZihhKXJldHVybiBudWxsO2xldCB0PW4uY2xvc2VzdCgnW2NsYXNzKj1cIi1jb250YWluZXJcIl0nKTtyZXR1cm4gdD8ucXVlcnlTZWxlY3RvcignW2NsYXNzKj1cIi1tZW51XCJdJyl8fHQ/LnF1ZXJ5U2VsZWN0b3IoJ1tyb2xlPVwibGlzdGJveFwiXScpfHxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbY2xhc3MqPVwiLW1lbnVcIl06bm90KFtzdHlsZSo9XCJkaXNwbGF5OiBub25lXCJdKScpfHxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cImxpc3Rib3hcIl06bm90KFtzdHlsZSo9XCJkaXNwbGF5OiBub25lXCJdKScpfSxjPWU9PntpZihhKXJldHVybiBBcnJheS5mcm9tKGUuY2hpbGRyZW4pLmZpbHRlcihlPT57bGV0IHQ9ZS50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwiO3JldHVyblwiZGl2XCI9PT1lLnRhZ05hbWUudG9Mb3dlckNhc2UoKSYmISFlLnF1ZXJ5U2VsZWN0b3IoXCJwXCIpJiYhIXQmJiEvXkFkZCBhbmQgc2VsZWN0XFxiL2kudGVzdCh0KSYmXCJ0cnVlXCIhPT1lLmdldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIil9KTtsZXQgdD1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbCgnZGl2W2NsYXNzKj1cImNzcy1cIl0sIHAsIHNwYW4sIFtjbGFzcyo9XCItb3B0aW9uXCJdLCBbcm9sZT1cIm9wdGlvblwiXSwgbGksIGJ1dHRvbicpKTtyZXR1cm4gdC5maWx0ZXIoZT0+e2xldCB0PShlLnRleHRDb250ZW50fHxcIlwiKS50cmltKCk7aWYoMD09PXQubGVuZ3RoKXJldHVybiExO2xldCByPWUucXVlcnlTZWxlY3RvcignZGl2W2NsYXNzKj1cImNzcy1cIl0sIHNlY3Rpb24sIGFydGljbGUnKTtyZXR1cm4hcn0pfSxkPWFzeW5jIGU9PntlLnNjcm9sbEludG9WaWV3KHtibG9jazpcIm5lYXJlc3RcIixiZWhhdmlvcjpcImF1dG9cIn0pLGF3YWl0ICgwLGwuZGVsYXkpKDUwKSxlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZWRvd25cIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpLGF3YWl0ICgwLGwuZGVsYXkpKDMwKSxlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZXVwXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKSxlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSksYXdhaXQgKDAsbC5kZWxheSkoMjAwKX0sZj0zO2ZvcihsZXQgZT0wO2U8ZjtlKyspe24uZm9jdXMoKSxhd2FpdCAoMCxsLmRlbGF5KSgxNTApLHM/cy5jYWxsKG4scik6bi52YWx1ZT1yLG4uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwfSkpLG4uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMH0pKTtsZXQgZT1udWxsO2ZvcihsZXQgdD0wO3Q8MTUmJihhd2FpdCAoMCxsLmRlbGF5KSgyMDApLCEoZT11KCkpKTt0KyspO2lmKCFlKWNvbnRpbnVlO2xldCB0PVtdO2ZvcihsZXQgcj0wO3I8MTA7cisrKXthd2FpdCAoMCxsLmRlbGF5KSgyMDApO2xldCByPXUoKTtpZighcil7ZT1udWxsO2JyZWFrfWlmKCh0PWMoZT1yKSkubGVuZ3RoPjApYnJlYWt9aWYoIWV8fDA9PT10Lmxlbmd0aCljb250aW51ZTtsZXQgZj0oMCxvLmZpbmRFeGFjdENob2ljZSkodCxyLGU9PmUudGV4dENvbnRlbnQpO2lmKGYmJnUoKSl7aWYoYXdhaXQgZChmKSwhdSgpKXtpZihhJiYoISgwLG8uaXNFeGFjdENob2ljZU1hdGNoKShuLnZhbHVlLGYudGV4dENvbnRlbnQpfHxcInRydWVcIj09PW4uZ2V0QXR0cmlidXRlKFwiYXJpYS1pbnZhbGlkXCIpKSlicmVhaztpZihuLmJsdXIoKSxhd2FpdCAoMCxsLmRlbGF5KSgxMDApLGEpe2lmKCEoMCxvLmlzRXhhY3RDaG9pY2VNYXRjaCkobi52YWx1ZSxmLnRleHRDb250ZW50KXx8XCJ0cnVlXCI9PT1uLmdldEF0dHJpYnV0ZShcImFyaWEtaW52YWxpZFwiKXx8aT8ucXVlcnlTZWxlY3RvcihcIi5jaGFrcmEtZm9ybV9fZXJyb3ItbWVzc2FnZVwiKSlicmVhaztyZXR1cm4hMH1yZXR1cm59aWYoIWEmJihuLmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXlkb3duXCIse2tleTpcIkVudGVyXCIsa2V5Q29kZToxMyxidWJibGVzOiEwfSkpLGF3YWl0ICgwLGwuZGVsYXkpKDE1MCksIXUoKSkpe24uYmx1cigpLGF3YWl0ICgwLGwuZGVsYXkpKDEwMCk7cmV0dXJufX19aWYoYSlyZXR1cm4gcz9zLmNhbGwobixcIlwiKTpuLnZhbHVlPVwiXCIsbi5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITB9KSksbi5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSkpLG4uYmx1cigpLCExO24uZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudChcImtleWRvd25cIix7a2V5OlwiRW50ZXJcIixrZXlDb2RlOjEzLGJ1YmJsZXM6ITB9KSksYXdhaXQgKDAsbC5kZWxheSkoMTUwKSxuLmJsdXIoKSxhd2FpdCAoMCxsLmRlbGF5KSgxMDApfWFzeW5jIGZ1bmN0aW9uIF8oZSx0KXtsZXQgcj0odHx8W10pLm1hcChlPT5lLnRvTG93ZXJDYXNlKCkudHJpbSgpKSxuPWUuJGNoZWNrYm94c3x8W107Zm9yKGxldCBlIG9mIG4pe2xldCB0PShlLmNsb3Nlc3QoXCJsYWJlbFwiKT8udGV4dENvbnRlbnR8fGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKXx8XCJcIikudG9Mb3dlckNhc2UoKS50cmltKCksbj1yLnNvbWUoZT0+KDAsby5pc0V4YWN0Q2hvaWNlTWF0Y2gpKHQsZSkpO24mJiFlLmNoZWNrZWQmJihlLmNsaWNrKCksZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSkpLGF3YWl0ICgwLGwuZGVsYXkpKDYwKSl9fWFzeW5jIGZ1bmN0aW9uIEwoZSx0KXtsZXQgcj10Py5bMF0/LnRvTG93ZXJDYXNlKCkudHJpbSgpO2lmKCFyKXJldHVybjtsZXQgbj1BcnJheS5mcm9tKChlLiRyYWRpb1BhcmVudHx8ZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpKSxpPSgwLG8uZmluZEV4YWN0Q2hvaWNlKShuLmZpbHRlcihlPT4hZS5kaXNhYmxlZCkscixlPT5lLmNsb3Nlc3QoXCJsYWJlbFwiKT8udGV4dENvbnRlbnQsZT0+ZS52YWx1ZSk7aSYmKGkuY2xpY2soKSxpLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITB9KSksYXdhaXQgKDAsbC5kZWxheSkoNjApKX1hc3luYyBmdW5jdGlvbiBSKGUsdCxyLG4pe2F3YWl0IHYoXCJyZXN1bWVcIixhd2FpdCAoMCxpLmZldGNoUGRmQXNCbG9iKShlKSx0LHIsbixcIlJlc3VtZS9DVlwiKX1hc3luYyBmdW5jdGlvbiBPKGUsdCxyLG4pe2F3YWl0IHYoXCJjb3Zlcl9sZXR0ZXJcIixhd2FpdCAoMCxpLmZldGNoQ292ZXJMZXR0ZXJQZGZBc0Jsb2IpKGUpLHQscixuLFwiQ292ZXIgTGV0dGVyXCIpfVxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0aW9ucy41ZWVhZGQ3NC5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);