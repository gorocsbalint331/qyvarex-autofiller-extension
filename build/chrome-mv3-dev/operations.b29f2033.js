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
})({"a6aCo":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\ripplehire\\operations.js",
    "bundleId": "cad044fcb29f2033",
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
var j = z(require("3c06d19eaea9238e"));
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

},{"3c06d19eaea9238e":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"h3Cbe":[function(require,module,exports) {
/**
 * Parcel module id: d6wH2
 * Resolved path: src/contents/sites/ripplehire/operations.js
 * Dependencies:
 *   ../../methods/choice-match -> 6mkI4  =>  src/contents/methods/choice-match.js
 *   ./phone-country-code -> eL1jL  =>  src/contents/sites/ripplehire/phone-country-code.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/crawler/utils/input -> iPIvT  =>  src/contents/crawler/utils/input.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/observer -> eTzUx  =>  src/contents/methods/observer.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "findRipplehirePhoneCountryOption", ()=>c.findRipplehirePhoneCountryOption), n.export(r, "formatRipplehirePhoneValue", ()=>c.formatRipplehirePhoneValue), n.export(r, "normalizeRipplehireOptionText", ()=>d), n.export(r, "preselectExpectedSalaryCurrencyToUsd", ()=>p), n.export(r, "getRipplehireMultiselectCandidateValues", ()=>g), n.export(r, "shouldKeepRipplehireCountryValue", ()=>b), n.export(r, "fillAutocomplete", ()=>x), n.export(r, "fillMultiselect", ()=>C), n.export(r, "fillCountryFromStateFallback", ()=>A), n.export(r, "fillInputTextField", ()=>k), n.export(r, "fillPhoneCountryCode", ()=>T), n.export(r, "fillSelectField", ()=>F), n.export(r, "fillCheckboxField", ()=>I), n.export(r, "fillRadioGroupField", ()=>j), n.export(r, "agreementCheckboxField", ()=>D), n.export(r, "openRipplehireResumeUploadInput", ()=>O), n.export(r, "waitForRipplehireResumeFileReady", ()=>Y), n.export(r, "confirmRipplehireResumeUpload", ()=>z), n.export(r, "waitForRipplehireResumeParsingComplete", ()=>Q), n.export(r, "uploadResume", ()=>Z);
var o = e("../../methods/choice-match"), i = e("~contents/crawler/utils/input"), a = e("~contents/methods/answer"), l = e("~contents/methods/dom"), s = e("~contents/methods/observer"), u = e("~utils/delay"), c = e("./phone-country-code");
function d(e1) {
    return String(e1 || "").replace(/\s+/g, " ").trim().toLowerCase();
}
function f(e1) {
    return e1.textContent?.trim() || e1.getAttribute("label")?.trim() || e1.value?.trim() || "";
}
function p() {
    let e1 = document.querySelector("select#currencySymbol, select[name='currencySymbol']");
    if (!e1) return !1;
    let t = Array.from(e1.options).find((e1)=>"$ - usd" === d(f(e1)));
    return !!t && (e1.value === t.value || (Array.from(e1.options).forEach((e1)=>{
        e1.selected = e1 === t;
    }), e1.value = t.value, e1.dispatchEvent(new Event("change", {
        bubbles: !0
    })), e1.dispatchEvent(new Event("input", {
        bubbles: !0
    })), !0));
}
function m(e1) {
    let t = d(e1);
    return !t || t.startsWith("enter ") || t.startsWith("type ") || "select" === t;
}
function h(e1, t) {
    let r1 = t.map(d);
    return e1.find((e1)=>r1.includes(d(e1))) || "";
}
function g({ value: e1, availableValues: t = [] }) {
    let r1 = Array.isArray(e1) ? e1[0] : e1, n = String(r1 || "").trim();
    if (!n) return [];
    let o = [
        n
    ], i = h(t, o);
    return i && !o.includes(i) && o.push(i), o;
}
function b({ currentCountry: e1, country: t, availableValues: r1 = [] }) {
    if (!e1) return !1;
    let n = g({
        value: t || "",
        availableValues: r1
    });
    return 0 === n.length || !!h([
        e1
    ], n);
}
function y(e1) {
    let t = e1.querySelector("select");
    return t ? Array.from(t.options).map(f).filter((e1)=>e1 && !m(e1)) : [];
}
function v(e1) {
    return e1.querySelector("label[for]")?.textContent?.replace(":", "").replace(/\s+/g, " ").trim() || "";
}
function w(e1) {
    let t = e1.querySelector("select");
    if (t) {
        let e1 = Array.from(t.selectedOptions).find((e1)=>!m(f(e1) || e1.value)), r1 = e1 && f(e1) || t.value || "";
        if (r1 && !m(r1)) return r1;
    }
    let r1 = e1.querySelector(".multiselect-selected-text")?.textContent?.trim();
    if (r1 && !m(r1)) return r1;
    let n = e1.querySelector("input:not([type='hidden']), textarea"), o = n?.value?.trim() || "";
    return o && !m(o) ? o : "";
}
function S(e1, t, r1) {
    let n = e1.querySelector("select");
    if (n) {
        let e1 = d(t), r1 = Array.from(n.options).find((t)=>d(t.value) === e1 || d(f(t)) === e1);
        r1 && (n.value = r1.value, r1.selected = !0, n.dispatchEvent(new Event("change", {
            bubbles: !0
        })), n.dispatchEvent(new Event("input", {
            bubbles: !0
        })));
    }
    let o = e1.querySelector(".multiselect-selected-text");
    o && (o.textContent = r1);
    let i = e1.querySelector(".multiselect.dropdown-toggle");
    i?.setAttribute("title", r1);
    let a = e1.querySelector(".help-block");
    a && (a.style.display = "none");
}
_c = S;
function E(e1, t, r1 = t) {
    let n = d(t), o = d(r1), i = e1.querySelector(".multiselect-selected-text")?.textContent?.trim(), a = d(i);
    if (a === n || a === o) return !0;
    let l = e1.querySelector("select");
    return !!l && Array.from(l.selectedOptions).some((e1)=>{
        let t = [
            e1.value,
            f(e1)
        ].map(d);
        return t.includes(n) || t.includes(o);
    });
}
_c1 = E;
async function x(e1, t) {
    e1.focus(), await (0, u.delay)(100), e1.value = t, e1.dispatchEvent(new Event("input", {
        bubbles: !0
    }));
    let r1 = null;
    for(let e1 = 0; e1 < 40 && !(r1 = document.querySelector(".pac-container .pac-item")); e1++)await (0, u.delay)(150);
    r1 && (e1.dispatchEvent(new KeyboardEvent("keydown", {
        key: "ArrowDown",
        keyCode: 40,
        code: "ArrowDown",
        bubbles: !0
    })), await (0, u.delay)(200), e1.dispatchEvent(new KeyboardEvent("keydown", {
        key: "Enter",
        keyCode: 13,
        code: "Enter",
        bubbles: !0
    })), await (0, u.delay)(500), e1.dispatchEvent(new Event("change", {
        bubbles: !0
    })), e1.setAttribute("value", e1.value || ""), e1.blur());
}
async function C(e1, t) {
    let r1 = e1.querySelector("#multi-select") || e1.querySelector(".multi-select");
    if (!r1) return !1;
    let n = g({
        value: t,
        availableValues: y(e1)
    });
    if (0 === n.length) return !1;
    let o = async (t)=>{
        let r1 = e1.querySelector("#multi-select") || e1.querySelector(".multi-select");
        if (!r1) return !1;
        let n = r1.querySelector(".multiselect.dropdown-toggle");
        if (!n) return !1;
        n.scrollIntoView({
            behavior: "smooth",
            block: "center"
        }), await (0, u.delay)(150), "true" !== n.getAttribute("aria-expanded") && (n.click(), await (0, u.delay)(400));
        let o = r1.querySelector(".singleselect-search");
        o && (o.value = t, o.dispatchEvent(new Event("input", {
            bubbles: !0
        })), o.dispatchEvent(new Event("keyup", {
            bubbles: !0
        })), await (0, u.delay)(500));
        let i = r1.querySelectorAll(".multiselect-container li"), a = !1;
        for (let e1 of i){
            let n = e1.querySelector("label.multiselect-option-text"), o = e1.querySelector('input[type="radio"]');
            if (!n || !o || "" === o.value) continue;
            let i = n.textContent?.replace(/\s+/g, " ").trim() || "", l = [
                i,
                o.value
            ].map(d);
            if (l.includes(d(t))) {
                r1.querySelectorAll(".multiselect-container li.active").forEach((e1)=>{
                    e1.classList.remove("active");
                }), e1.classList.add("active"), o.checked = !0, o.click(), o.dispatchEvent(new Event("change", {
                    bubbles: !0
                }));
                let t = e1.querySelector("a");
                t?.click(), n.click(), S(r1, o.value, i), a = !0;
                break;
            }
        }
        return !!a && (await (0, u.delay)(200), E(r1, t));
    };
    for (let e1 of n){
        let t = await o(e1);
        if (t || (await (0, u.delay)(300), t = await o(e1)), t) return !0;
    }
    return !1;
}
_c2 = C;
async function A(e1) {
    let t = Array.from(document.querySelectorAll(".form-group:not(.hide)")).find((e1)=>"country" === d(v(e1)));
    if (!t) return !1;
    let r1 = w(t);
    return !!b({
        currentCountry: r1,
        country: e1,
        availableValues: y(t)
    }) || await C(t, e1 || "");
}
_c3 = A;
async function k(e1, t, r1) {
    let n = e1.$input;
    if (!n) return;
    let o = n.querySelector("#multi-select");
    if (o) return await C(n, t);
    if (!t || "" === t.trim()) return;
    if (n.scrollIntoView({
        behavior: "smooth",
        block: "center"
    }), await (0, u.delay)(100), n.classList.contains("pac-target-input") && n instanceof HTMLInputElement) {
        await x(n, t);
        return;
    }
    e1.label.includes("City") && (t = t.replace(/\s+/g, ""));
    let a = n.closest?.(".intl-tel-input")?.querySelector(".selected-flag");
    a ? t = (0, c.formatRipplehirePhoneValue)(t, r1) : e1.label.toLowerCase().includes("phone") && 11 === t.length && t.startsWith("1") && (t = t.replace(/^1/, ""));
    let l = n.value?.length || 0;
    await (0, i.fillDefaultInputField)(n, t);
    let s = "emailAddr" === n.id || n.getAttribute?.("name") === "emailAddr" ? "email" : "phoneNo" === n.id || n.getAttribute?.("name") === "phoneNo" ? "phone" : null;
    if (!s) return;
    let d = "phone" === s ? n.value.replace(/\D/g, "") === t.replace(/\D/g, "") : n.value.trim() === t.trim();
    return console.debug(`[RippleHire][contact-field] ${JSON.stringify({
        field: s,
        answerPresent: t.length > 0,
        answerLength: t.length,
        beforeLength: l,
        afterLength: n.value?.length || 0,
        committed: d
    })}`), d;
}
async function T(e1, t) {
    if (e1.label !== c.RIPPLEHIRE_PHONE_COUNTRY_CODE_LABEL) return !1;
    let r1 = (Array.isArray(t) ? t : [
        t
    ]).find((e1)=>String(e1 ?? "").trim()), n = String(r1 ?? "").trim();
    if (!n) return !1;
    let o = e1.$input, i = o?.closest?.(".intl-tel-input"), a = i?.querySelector(".selected-flag");
    if (!i || !a) return !1;
    let l = Array.from(i.querySelectorAll("li.country")), s = (0, c.findRipplehirePhoneCountryOption)(n, l);
    if (!s) return !1;
    let d = ()=>{
        if (s.classList?.contains("active")) return !0;
        let e1 = (0, c.readRipplehirePhoneCountryCode)(o);
        return !!e1 && (0, c.findRipplehirePhoneCountryOption)(e1, [
            s
        ]) === s;
    };
    if (d()) return !0;
    let f = async ()=>(a.scrollIntoView({
            behavior: "smooth",
            block: "center"
        }), a.dispatchEvent(new MouseEvent("mousedown", {
            bubbles: !0,
            cancelable: !0
        })), a.click(), await (0, u.delay)(100), s.dispatchEvent(new MouseEvent("mousedown", {
            bubbles: !0,
            cancelable: !0
        })), s.dispatchEvent(new MouseEvent("mouseup", {
            bubbles: !0,
            cancelable: !0
        })), s.click(), await (0, u.delay)(100), d());
    return !!await f() || await f();
}
_c4 = T;
async function F(e1, t) {
    if (!t || 0 === t.length) return;
    let r1 = t[0];
    e1.label;
    let n = e1.$input;
    if (!n) return;
    n.scrollIntoView({
        behavior: "smooth",
        block: "center"
    }), await (0, u.delay)(100);
    let o = Array.from(n.options), i = o.find((e1)=>e1.textContent.trim().toLowerCase() === r1.toLowerCase() || e1.value.toLowerCase() === r1.toLowerCase());
    i && (n.value = i.value, n.dispatchEvent(new Event("change", {
        bubbles: !0
    })), n.dispatchEvent(new Event("input", {
        bubbles: !0
    })));
}
_c5 = F;
async function I(e1, t) {
    e1.label;
    let r1 = e1.$checkboxs || [];
    if (e1.options, r1.length) for (let e1 of (r1[0] && (r1[0].scrollIntoView({
        behavior: "smooth",
        block: "center"
    }), await (0, u.delay)(100)), t)){
        let t = !1;
        for (let n of r1){
            let r1 = n.closest("label");
            if (r1) {
                let i = r1.cloneNode(!0), a = i.querySelector('input[type="checkbox"]');
                a && a.remove();
                let l = i.textContent?.trim() || "";
                if ((0, o.isExactChoiceMatch)(l, e1)) {
                    n.checked || n.click(), t = !0;
                    break;
                }
            }
        }
    }
}
_c6 = I;
async function j(e1, t) {
    e1.label;
    let r1 = t?.[0];
    if (!r1) return;
    let n = e1.$radioParent;
    if (!n) return;
    n.scrollIntoView({
        behavior: "smooth",
        block: "center"
    }), await (0, u.delay)(100);
    let i = Array.from(n.querySelectorAll('input[type="radio"]')), a = null;
    for (let e1 of i){
        if (e1.disabled) continue;
        let t = "", i = n.querySelector(`label[for="${e1.id}"]`);
        if (i) t = i.textContent?.trim() || "";
        else {
            let r1 = e1.closest("label");
            if (r1) {
                let e1 = r1.cloneNode(!0), n = e1.querySelector('input[type="radio"]');
                n && n.remove(), t = e1.textContent?.trim() || "";
            } else {
                let r1 = e1.nextElementSibling;
                r1 && "LABEL" === r1.tagName && (t = r1.textContent?.trim() || "");
            }
        }
        if ((0, o.isExactChoiceMatch)(t, r1)) {
            a = e1;
            break;
        }
    }
    if (a) {
        let e1 = n.querySelector(`label[for="${a.id}"]`), t = e1 || a.closest("label");
        !a.checked && (a.checked = !0, a.dispatchEvent(new Event("change", {
            bubbles: !0
        })), a.dispatchEvent(new Event("click", {
            bubbles: !0
        })), a.dispatchEvent(new Event("input", {
            bubbles: !0
        })), t && (t.click(), await (0, u.delay)(50)));
    }
}
async function D() {
    let e1 = document.querySelectorAll('label.declaration input[type="checkbox"], input[type="checkbox"]#termscondition');
    for (let t of e1)t.checked || (t.checked = !0, t.dispatchEvent(new Event("change", {
        bubbles: !0
    })), t.dispatchEvent(new Event("click", {
        bubbles: !0
    })), t.dispatchEvent(new Event("input", {
        bubbles: !0
    })), await (0, u.delay)(50));
}
_c7 = D;
let P = "#openResume, .openResume", _ = '#resumeDrag, #myModal input[type="file"], input[type="file"][name="resume"]', L = "#resumeSumbmit";
function R() {
    return document.querySelector(_);
}
_c8 = R;
async function O({ maxAttempts: e1 = 20, intervalMs: t = 100 } = {}) {
    let r1 = R();
    if (r1) return r1;
    let n = document.querySelector(P);
    if (!n) return null;
    n.click();
    for(let r1 = 0; r1 < e1; r1 += 1){
        let e1 = R();
        if (e1) return e1;
        await (0, u.delay)(t);
    }
    return null;
}
_c9 = O;
let M = "#myModal", N = ".analyzing-files", $ = ".file-preview, .change-files", B = 1e4, q = 150;
function U(e1) {
    let t = e1.closest?.(M);
    return t ? "modal-parser" : "inline-direct";
}
_c10 = U;
function H() {
    let e1 = document.querySelector(M);
    return !e1 || !e1.querySelector(N) && !!e1.querySelector($);
}
_c11 = H;
async function Y({ timeout: e1 = B, pollInterval: t = q } = {}) {
    let r1 = await (0, s.waitForCondition)(H, {
        timeout: e1,
        interval: t,
        observeTarget: document.body
    });
    return r1 || console.warn("[uploadResume] Timed out waiting for RippleHire resume file to finish analyzing"), r1;
}
_c12 = Y;
function z() {
    let e1 = document.querySelector(L);
    return !!e1 && (e1.click(), !0);
}
let V = [
    "text",
    "email",
    "tel",
    "search",
    "url",
    "number",
    "date"
], W = 800, G = 15e3, K = 200;
function X(e1) {
    let t = e1.tagName.toLowerCase();
    if ("textarea" === t || "select" === t) return !0;
    if ("input" !== t) return !1;
    let r1 = (e1.getAttribute("type") || "text").toLowerCase();
    return V.includes(r1);
}
_c13 = X;
function J() {
    return Array.from(document.querySelectorAll("input, textarea, select")).filter(X).map((e1)=>[
            e1.tagName,
            e1.id,
            e1.getAttribute("name") || "",
            e1.value || ""
        ].join(":")).join("\n");
}
_c14 = J;
async function Q({ stableMs: e1 = W, timeout: t = G, pollInterval: r1 = K } = {}) {
    let n = J(), o = Date.now(), i = !1, a = await (0, s.waitForCondition)(()=>{
        let t = J();
        return t !== n ? (n = t, o = Date.now(), i = !0, !1) : i && Date.now() - o >= e1;
    }, {
        timeout: t,
        interval: r1
    });
    return a || console.warn("[uploadResume] Timed out waiting for RippleHire resume parsing to settle"), a;
}
_c15 = Q;
async function Z(e1, t, r1) {
    let n = await O();
    if (n) {
        let o = U(n);
        if (console.log("[RippleHire][resume-upload] flow-detected", {
            flow: o,
            inputId: n.id || null
        }), await (0, l.uploadFiles)(n, await (0, a.fetchPdfAsBlob)(e1), t, r1, "Resume/CV"), "inline-direct" === o) {
            console.log("[RippleHire][resume-upload] parser-wait-skipped", {
                flow: o,
                reason: "direct-upload-layout"
            });
            return;
        }
        let i = await Y(), s = z();
        if (console.log("[RippleHire][resume-upload] modal-confirm", {
            flow: o,
            fileReady: i,
            confirmed: s
        }), !s) {
            console.warn("[RippleHire][resume-upload] parser-wait-skipped", {
                flow: o,
                reason: "modal-submit-missing"
            });
            return;
        }
        let u = await Q();
        console.log("[RippleHire][resume-upload] parser-wait-complete", {
            flow: o,
            parserSettled: u
        });
    }
}
_c16 = Z;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;
$RefreshReg$(_c, "S");
$RefreshReg$(_c1, "E");
$RefreshReg$(_c2, "C");
$RefreshReg$(_c3, "A");
$RefreshReg$(_c4, "T");
$RefreshReg$(_c5, "F");
$RefreshReg$(_c6, "I");
$RefreshReg$(_c7, "D");
$RefreshReg$(_c8, "R");
$RefreshReg$(_c9, "O");
$RefreshReg$(_c10, "U");
$RefreshReg$(_c11, "H");
$RefreshReg$(_c12, "Y");
$RefreshReg$(_c13, "X");
$RefreshReg$(_c14, "J");
$RefreshReg$(_c15, "Q");
$RefreshReg$(_c16, "Z");

},{}]},["a6aCo","h3Cbe"], "h3Cbe", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFBc0UsSUFBSSxJQUFFLEVBQUUsNEJBQTRCLEdBQUU7Z0JBQUcsRUFBRSxRQUFRLFNBQVMsQ0FBQztvQkFBRSxFQUFFLElBQUk7Z0JBQUU7WUFBRSxJQUFHO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFO1lBQStCLElBQUcsTUFBSSxLQUFLLEdBQUU7Z0JBQUMsSUFBSSxJQUFFO2dCQUFFLEVBQUUsaUNBQStCLElBQUU7b0JBQUMsV0FBVSxJQUFJO29CQUFJLGVBQWMsQ0FBQztvQkFBRSxRQUFPLFNBQVMsQ0FBQzt3QkFBRSxPQUFPO29CQUFHO29CQUFFLHFCQUFvQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxHQUFFO29CQUFFLG1CQUFrQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRTtvQkFBRSxzQkFBcUIsWUFBVztnQkFBQztZQUFDO1lBQUMsSUFBRyxFQUFFLFlBQVc7Z0JBQUMsUUFBUSxLQUFLO2dCQUE4SjtZQUFNO1lBQUMsSUFBSSxJQUFFLEVBQUU7WUFBTyxFQUFFLFNBQU8sU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLE1BQU0sSUFBSSxFQUFDO2dCQUFXLE9BQU8sT0FBTyxFQUFFLG1CQUFpQixjQUFZLE9BQU8sRUFBRSxxQkFBbUIsY0FBWSxFQUFFLElBQUksR0FBRSxJQUFHO1lBQUMsR0FBRSxFQUFFLFVBQVUsUUFBUSxTQUFTLENBQUMsRUFBQyxDQUFDO2dCQUFFLE9BQU8sRUFBRSxtQkFBaUIsY0FBWSxPQUFPLEVBQUUscUJBQW1CLGNBQVksRUFBRSxJQUFJLEdBQUU7WUFBRTtZQUFHLElBQUksSUFBRSxFQUFFLG1CQUFrQixJQUFFLEVBQUUsdUJBQXFCLFlBQVc7WUFBRSxFQUFFLHNCQUFvQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxPQUFPLEtBQUksQ0FBQSxFQUFFLE9BQU8sSUFBRyxNQUFJLFFBQU0sRUFBRSxJQUFJLEdBQUUsRUFBQyxHQUFHLEVBQUUsTUFBTSxJQUFJLEVBQUM7WUFBVSxHQUFFLEVBQUUsb0JBQWtCLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxJQUFJLElBQUUsRUFBRSxJQUFJO2dCQUFHLElBQUcsTUFBSSxLQUFLLEdBQUU7b0JBQUMsRUFBRSxJQUFJLEdBQUU7b0JBQUcsSUFBSSxJQUFFLEVBQUUsU0FBUSxJQUFFLEVBQUU7b0JBQVUsSUFBRyxNQUFJLE1BQUs7d0JBQUMsSUFBSSxJQUFFLEVBQUUsaUJBQWUsUUFBTSxFQUFFLGNBQWMsV0FBUyxRQUFNLEVBQUUsSUFBSSxJQUFHLElBQUUsRUFBRSxpQkFBZSxRQUFNLEVBQUUsY0FBYyxXQUFTO3dCQUFLLENBQUMsS0FBRyxJQUFHLENBQUEsRUFBRSxJQUFJLElBQUcsRUFBRSxPQUFPLEVBQUMsSUFBRyxLQUFHLEtBQUksQ0FBQSxLQUFHLENBQUMsSUFBRyxDQUFBLEVBQUUsT0FBTyxJQUFHLElBQUUsRUFBRSxJQUFJLEtBQUcsRUFBRSxPQUFPLEVBQUMsSUFBRyxDQUFDLEtBQUcsQ0FBQyxLQUFHLEtBQUcsRUFBRSxJQUFJLEVBQUM7b0JBQUUsT0FBTSxFQUFFLElBQUk7Z0JBQUU7Z0JBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxFQUFDO1lBQVU7UUFBRTtRQUFDLFNBQVM7WUFBSyxPQUFNLENBQUM7UUFBQztRQUFDLFNBQVM7WUFBSyxPQUFPLEVBQUU7UUFBSTtRQUFDLFNBQVM7WUFBTSxJQUFJLEdBQUUsR0FBRSxJQUFFLENBQUM7WUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxJQUFHLE9BQU8sS0FBRyxVQUFTLE9BQU8sS0FBSSxDQUFBLElBQUUsR0FBRSxJQUFFLE9BQU8sS0FBRyxVQUFTLEdBQUcsS0FBRyxRQUFPLENBQUEsT0FBTyxLQUFHLGNBQVksT0FBTyxLQUFHLFFBQU8sS0FBSSxFQUFFLEdBQUUsR0FBRSxHQUFFLElBQUc7Z0JBQUUsQ0FBQyxLQUFHLEtBQUksQ0FBQSxJQUFFLENBQUMsR0FBRSxFQUFFLEVBQUM7WUFBRTtRQUFFO1FBQUMsU0FBUyxHQUFHLENBQUM7WUFBRSxPQUFPLE9BQU87Z0JBQUcsS0FBSTtvQkFBWSxJQUFHLEVBQUUsYUFBVyxNQUFLO3dCQUFDLElBQUcsRUFBRSxVQUFVLGtCQUFpQixPQUFNLENBQUM7d0JBQUUsSUFBSSxJQUFFLE9BQU8sb0JBQW9CLEVBQUU7d0JBQVcsSUFBRyxFQUFFLFNBQU8sS0FBRyxDQUFDLENBQUMsRUFBRSxLQUFHLGlCQUFlLEVBQUUsVUFBVSxjQUFZLE9BQU8sV0FBVSxPQUFNLENBQUM7b0JBQUM7b0JBQUMsSUFBSSxJQUFFLEVBQUUsUUFBTSxFQUFFO29CQUFZLE9BQU8sT0FBTyxLQUFHLFlBQVUsU0FBUyxLQUFLO2dCQUFHLEtBQUk7b0JBQVUsSUFBRyxLQUFHLE1BQUssT0FBTyxFQUFFLEdBQUU7d0JBQWEsS0FBSzt3QkFBRSxLQUFLOzRCQUFFLE9BQU0sQ0FBQzt3QkFBRTs0QkFBUSxPQUFNLENBQUM7b0JBQUM7b0JBQUMsT0FBTSxDQUFDO2dCQUFFO29CQUFRLE9BQU0sQ0FBQztZQUFDO1FBQUM7UUFBQyxFQUFFLHVCQUFxQixJQUFHLEVBQUUsaUNBQStCLEdBQUUsRUFBRSxzQ0FBb0MsSUFBRyxFQUFFLDRCQUEwQixJQUFHLEVBQUUsZ0JBQWMsR0FBRSxFQUFFLGtCQUFnQixHQUFFLEVBQUUseUJBQXVCLElBQUcsRUFBRSx1QkFBcUIsSUFBRyxFQUFFLHdCQUFzQixJQUFHLEVBQUUsc0JBQW9CLEdBQUUsRUFBRSxXQUFTLEdBQUUsRUFBRSxlQUFhO0lBQUMsQ0FBQTtBQUFJO0FBQUcsSUFBSSxJQUFFLEVBQUUsQ0FBQyxJQUFHO0lBQUs7SUFBYSxFQUFFLFVBQVE7QUFBRztBQUFHLElBQUksSUFBRSxDQUFDO0FBQUUsR0FBRyxHQUFFO0lBQUMsU0FBUSxJQUFJO0FBQUU7QUFBRyxPQUFPLFVBQVEsR0FBRztBQUFHLElBQUksSUFBRSxFQUFFO0FBQUssRUFBRSxHQUFFLEVBQUUsTUFBSyxPQUFPO0FBQVMsSUFBSSxLQUFHLEVBQUUsU0FDcDVMOzs7Ozs7Ozs7Ozs7QUFZQTs7O0FDYkE7Ozs7Ozs7Ozs7OztDQVlDLEdBRUQsSUFBSSxJQUFFLEVBQUU7QUFBa0QsRUFBRSxrQkFBa0IsSUFBRyxFQUFFLE9BQU8sR0FBRSxvQ0FBbUMsSUFBSSxFQUFFLG1DQUFrQyxFQUFFLE9BQU8sR0FBRSw4QkFBNkIsSUFBSSxFQUFFLDZCQUE0QixFQUFFLE9BQU8sR0FBRSxpQ0FBZ0MsSUFBSSxJQUFHLEVBQUUsT0FBTyxHQUFFLHdDQUF1QyxJQUFJLElBQUcsRUFBRSxPQUFPLEdBQUUsMkNBQTBDLElBQUksSUFBRyxFQUFFLE9BQU8sR0FBRSxvQ0FBbUMsSUFBSSxJQUFHLEVBQUUsT0FBTyxHQUFFLG9CQUFtQixJQUFJLElBQUcsRUFBRSxPQUFPLEdBQUUsbUJBQWtCLElBQUksSUFBRyxFQUFFLE9BQU8sR0FBRSxnQ0FBK0IsSUFBSSxJQUFHLEVBQUUsT0FBTyxHQUFFLHNCQUFxQixJQUFJLElBQUcsRUFBRSxPQUFPLEdBQUUsd0JBQXVCLElBQUksSUFBRyxFQUFFLE9BQU8sR0FBRSxtQkFBa0IsSUFBSSxJQUFHLEVBQUUsT0FBTyxHQUFFLHFCQUFvQixJQUFJLElBQUcsRUFBRSxPQUFPLEdBQUUsdUJBQXNCLElBQUksSUFBRyxFQUFFLE9BQU8sR0FBRSwwQkFBeUIsSUFBSSxJQUFHLEVBQUUsT0FBTyxHQUFFLG1DQUFrQyxJQUFJLElBQUcsRUFBRSxPQUFPLEdBQUUsb0NBQW1DLElBQUksSUFBRyxFQUFFLE9BQU8sR0FBRSxpQ0FBZ0MsSUFBSSxJQUFHLEVBQUUsT0FBTyxHQUFFLDBDQUF5QyxJQUFJLElBQUcsRUFBRSxPQUFPLEdBQUUsZ0JBQWUsSUFBSTtBQUFHLElBQUksSUFBRSxFQUFFLCtCQUE4QixJQUFFLEVBQUUsa0NBQWlDLElBQUUsRUFBRSw2QkFBNEIsSUFBRSxFQUFFLDBCQUF5QixJQUFFLEVBQUUsK0JBQThCLElBQUUsRUFBRSxpQkFBZ0IsSUFBRSxFQUFFO0FBQXdCLFNBQVMsRUFBRSxFQUFDO0lBQUUsT0FBTyxPQUFPLE1BQUcsSUFBSSxRQUFRLFFBQU8sS0FBSyxPQUFPO0FBQWE7QUFBQyxTQUFTLEVBQUUsRUFBQztJQUFFLE9BQU8sR0FBRSxhQUFhLFVBQVEsR0FBRSxhQUFhLFVBQVUsVUFBUSxHQUFFLE9BQU8sVUFBUTtBQUFFO0FBQUMsU0FBUztJQUFJLElBQUksS0FBRSxTQUFTLGNBQWM7SUFBd0QsSUFBRyxDQUFDLElBQUUsT0FBTSxDQUFDO0lBQUUsSUFBSSxJQUFFLE1BQU0sS0FBSyxHQUFFLFNBQVMsS0FBSyxDQUFBLEtBQUcsY0FBWSxFQUFFLEVBQUU7SUFBSyxPQUFNLENBQUMsQ0FBQyxLQUFJLENBQUEsR0FBRSxVQUFRLEVBQUUsU0FBUSxDQUFBLE1BQU0sS0FBSyxHQUFFLFNBQVMsUUFBUSxDQUFBO1FBQUksR0FBRSxXQUFTLE9BQUk7SUFBQyxJQUFHLEdBQUUsUUFBTSxFQUFFLE9BQU0sR0FBRSxjQUFjLElBQUksTUFBTSxVQUFTO1FBQUMsU0FBUSxDQUFDO0lBQUMsS0FBSSxHQUFFLGNBQWMsSUFBSSxNQUFNLFNBQVE7UUFBQyxTQUFRLENBQUM7SUFBQyxLQUFJLENBQUMsQ0FBQSxDQUFDO0FBQUU7QUFBQyxTQUFTLEVBQUUsRUFBQztJQUFFLElBQUksSUFBRSxFQUFFO0lBQUcsT0FBTSxDQUFDLEtBQUcsRUFBRSxXQUFXLGFBQVcsRUFBRSxXQUFXLFlBQVUsYUFBVztBQUFDO0FBQUMsU0FBUyxFQUFFLEVBQUMsRUFBQyxDQUFDO0lBQUUsSUFBSSxLQUFFLEVBQUUsSUFBSTtJQUFHLE9BQU8sR0FBRSxLQUFLLENBQUEsS0FBRyxHQUFFLFNBQVMsRUFBRSxTQUFNO0FBQUU7QUFBQyxTQUFTLEVBQUUsRUFBQyxPQUFNLEVBQUMsRUFBQyxpQkFBZ0IsSUFBRSxFQUFFLEVBQUM7SUFBRSxJQUFJLEtBQUUsTUFBTSxRQUFRLE1BQUcsRUFBQyxDQUFDLEVBQUUsR0FBQyxJQUFFLElBQUUsT0FBTyxNQUFHLElBQUk7SUFBTyxJQUFHLENBQUMsR0FBRSxPQUFNLEVBQUU7SUFBQyxJQUFJLElBQUU7UUFBQztLQUFFLEVBQUMsSUFBRSxFQUFFLEdBQUU7SUFBRyxPQUFPLEtBQUcsQ0FBQyxFQUFFLFNBQVMsTUFBSSxFQUFFLEtBQUssSUFBRztBQUFDO0FBQUMsU0FBUyxFQUFFLEVBQUMsZ0JBQWUsRUFBQyxFQUFDLFNBQVEsQ0FBQyxFQUFDLGlCQUFnQixLQUFFLEVBQUUsRUFBQztJQUFFLElBQUcsQ0FBQyxJQUFFLE9BQU0sQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFO1FBQUMsT0FBTSxLQUFHO1FBQUcsaUJBQWdCO0lBQUM7SUFBRyxPQUFPLE1BQUksRUFBRSxVQUFRLENBQUMsQ0FBQyxFQUFFO1FBQUM7S0FBRSxFQUFDO0FBQUU7QUFBQyxTQUFTLEVBQUUsRUFBQztJQUFFLElBQUksSUFBRSxHQUFFLGNBQWM7SUFBVSxPQUFPLElBQUUsTUFBTSxLQUFLLEVBQUUsU0FBUyxJQUFJLEdBQUcsT0FBTyxDQUFBLEtBQUcsTUFBRyxDQUFDLEVBQUUsT0FBSSxFQUFFO0FBQUE7QUFBQyxTQUFTLEVBQUUsRUFBQztJQUFFLE9BQU8sR0FBRSxjQUFjLGVBQWUsYUFBYSxRQUFRLEtBQUksSUFBSSxRQUFRLFFBQU8sS0FBSyxVQUFRO0FBQUU7QUFBQyxTQUFTLEVBQUUsRUFBQztJQUFFLElBQUksSUFBRSxHQUFFLGNBQWM7SUFBVSxJQUFHLEdBQUU7UUFBQyxJQUFJLEtBQUUsTUFBTSxLQUFLLEVBQUUsaUJBQWlCLEtBQUssQ0FBQSxLQUFHLENBQUMsRUFBRSxFQUFFLE9BQUksR0FBRSxTQUFRLEtBQUUsTUFBRyxFQUFFLE9BQUksRUFBRSxTQUFPO1FBQUcsSUFBRyxNQUFHLENBQUMsRUFBRSxLQUFHLE9BQU87SUFBQztJQUFDLElBQUksS0FBRSxHQUFFLGNBQWMsK0JBQStCLGFBQWE7SUFBTyxJQUFHLE1BQUcsQ0FBQyxFQUFFLEtBQUcsT0FBTztJQUFFLElBQUksSUFBRSxHQUFFLGNBQWMseUNBQXdDLElBQUUsR0FBRyxPQUFPLFVBQVE7SUFBRyxPQUFPLEtBQUcsQ0FBQyxFQUFFLEtBQUcsSUFBRTtBQUFFO0FBQUMsU0FBUyxFQUFFLEVBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQztJQUFFLElBQUksSUFBRSxHQUFFLGNBQWM7SUFBVSxJQUFHLEdBQUU7UUFBQyxJQUFJLEtBQUUsRUFBRSxJQUFHLEtBQUUsTUFBTSxLQUFLLEVBQUUsU0FBUyxLQUFLLENBQUEsSUFBRyxFQUFFLEVBQUUsV0FBUyxNQUFHLEVBQUUsRUFBRSxRQUFNO1FBQUcsTUFBSSxDQUFBLEVBQUUsUUFBTSxHQUFFLE9BQU0sR0FBRSxXQUFTLENBQUMsR0FBRSxFQUFFLGNBQWMsSUFBSSxNQUFNLFVBQVM7WUFBQyxTQUFRLENBQUM7UUFBQyxLQUFJLEVBQUUsY0FBYyxJQUFJLE1BQU0sU0FBUTtZQUFDLFNBQVEsQ0FBQztRQUFDLEdBQUU7SUFBRTtJQUFDLElBQUksSUFBRSxHQUFFLGNBQWM7SUFBOEIsS0FBSSxDQUFBLEVBQUUsY0FBWSxFQUFBO0lBQUcsSUFBSSxJQUFFLEdBQUUsY0FBYztJQUFnQyxHQUFHLGFBQWEsU0FBUTtJQUFHLElBQUksSUFBRSxHQUFFLGNBQWM7SUFBZSxLQUFJLENBQUEsRUFBRSxNQUFNLFVBQVEsTUFBSztBQUFFO0tBQXZkO0FBQXdkLFNBQVMsRUFBRSxFQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUUsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLElBQUcsSUFBRSxFQUFFLEtBQUcsSUFBRSxHQUFFLGNBQWMsK0JBQStCLGFBQWEsUUFBTyxJQUFFLEVBQUU7SUFBRyxJQUFHLE1BQUksS0FBRyxNQUFJLEdBQUUsT0FBTSxDQUFDO0lBQUUsSUFBSSxJQUFFLEdBQUUsY0FBYztJQUFVLE9BQU0sQ0FBQyxDQUFDLEtBQUcsTUFBTSxLQUFLLEVBQUUsaUJBQWlCLEtBQUssQ0FBQTtRQUFJLElBQUksSUFBRTtZQUFDLEdBQUU7WUFBTSxFQUFFO1NBQUcsQ0FBQyxJQUFJO1FBQUcsT0FBTyxFQUFFLFNBQVMsTUFBSSxFQUFFLFNBQVM7SUFBRTtBQUFFO01BQXJSO0FBQXNSLGVBQWUsRUFBRSxFQUFDLEVBQUMsQ0FBQztJQUFFLEdBQUUsU0FB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QUFJLElBQUcsUUFBUSxJQUFJLDZDQUE0QztZQUFDLE1BQUs7WUFBRSxXQUFVO1lBQUUsV0FBVTtRQUFDLElBQUcsQ0FBQyxHQUFFO1lBQUMsUUFBUSxLQUFLLG1EQUFrRDtnQkFBQyxNQUFLO2dCQUFFLFFBQU87WUFBc0I7WUFBRztRQUFNO1FBQUMsSUFBSSxJQUFFLE1BQU07UUFBSSxRQUFRLElBQUksb0RBQW1EO1lBQUMsTUFBSztZQUFFLGVBQWM7UUFBQztJQUFFO0FBQUM7T0FBM3BCIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS0xOTFkNWZlYTNmYWQ2YWI5LmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL3JpcHBsZWhpcmUvb3BlcmF0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxyaXBwbGVoaXJlXFxcXG9wZXJhdGlvbnMuanNcIixcImJ1bmRsZUlkXCI6XCJjYWQwNDRmY2IyOWYyMDMzXCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogZDZ3SDJcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL3JpcHBsZWhpcmUvb3BlcmF0aW9ucy5qc1xyXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi4vLi4vbWV0aG9kcy9jaG9pY2UtbWF0Y2ggLT4gNm1rSTQgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9jaG9pY2UtbWF0Y2guanNcclxuICogICAuL3Bob25lLWNvdW50cnktY29kZSAtPiBlTDFqTCAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9yaXBwbGVoaXJlL3Bob25lLWNvdW50cnktY29kZS5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgfmNvbnRlbnRzL2NyYXdsZXIvdXRpbHMvaW5wdXQgLT4gaVBJdlQgID0+ICBzcmMvY29udGVudHMvY3Jhd2xlci91dGlscy9pbnB1dC5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2Fuc3dlciAtPiA3VDVlVyAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2Fuc3dlci5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2RvbSAtPiBoQTVRYSAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2RvbS5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL29ic2VydmVyIC0+IGVUelV4ICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvb2JzZXJ2ZXIuanNcclxuICogICB+dXRpbHMvZGVsYXkgLT4gYW02MTQgID0+ICBzcmMvdXRpbHMvZGVsYXkuanNcclxuICovXHJcblxyXG52YXIgbj1lKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtuLmRlZmluZUludGVyb3BGbGFnKHIpLG4uZXhwb3J0KHIsXCJmaW5kUmlwcGxlaGlyZVBob25lQ291bnRyeU9wdGlvblwiLCgpPT5jLmZpbmRSaXBwbGVoaXJlUGhvbmVDb3VudHJ5T3B0aW9uKSxuLmV4cG9ydChyLFwiZm9ybWF0UmlwcGxlaGlyZVBob25lVmFsdWVcIiwoKT0+Yy5mb3JtYXRSaXBwbGVoaXJlUGhvbmVWYWx1ZSksbi5leHBvcnQocixcIm5vcm1hbGl6ZVJpcHBsZWhpcmVPcHRpb25UZXh0XCIsKCk9PmQpLG4uZXhwb3J0KHIsXCJwcmVzZWxlY3RFeHBlY3RlZFNhbGFyeUN1cnJlbmN5VG9Vc2RcIiwoKT0+cCksbi5leHBvcnQocixcImdldFJpcHBsZWhpcmVNdWx0aXNlbGVjdENhbmRpZGF0ZVZhbHVlc1wiLCgpPT5nKSxuLmV4cG9ydChyLFwic2hvdWxkS2VlcFJpcHBsZWhpcmVDb3VudHJ5VmFsdWVcIiwoKT0+Yiksbi5leHBvcnQocixcImZpbGxBdXRvY29tcGxldGVcIiwoKT0+eCksbi5leHBvcnQocixcImZpbGxNdWx0aXNlbGVjdFwiLCgpPT5DKSxuLmV4cG9ydChyLFwiZmlsbENvdW50cnlGcm9tU3RhdGVGYWxsYmFja1wiLCgpPT5BKSxuLmV4cG9ydChyLFwiZmlsbElucHV0VGV4dEZpZWxkXCIsKCk9PmspLG4uZXhwb3J0KHIsXCJmaWxsUGhvbmVDb3VudHJ5Q29kZVwiLCgpPT5UKSxuLmV4cG9ydChyLFwiZmlsbFNlbGVjdEZpZWxkXCIsKCk9PkYpLG4uZXhwb3J0KHIsXCJmaWxsQ2hlY2tib3hGaWVsZFwiLCgpPT5JKSxuLmV4cG9ydChyLFwiZmlsbFJhZGlvR3JvdXBGaWVsZFwiLCgpPT5qKSxuLmV4cG9ydChyLFwiYWdyZWVtZW50Q2hlY2tib3hGaWVsZFwiLCgpPT5EKSxuLmV4cG9ydChyLFwib3BlblJpcHBsZWhpcmVSZXN1bWVVcGxvYWRJbnB1dFwiLCgpPT5PKSxuLmV4cG9ydChyLFwid2FpdEZvclJpcHBsZWhpcmVSZXN1bWVGaWxlUmVhZHlcIiwoKT0+WSksbi5leHBvcnQocixcImNvbmZpcm1SaXBwbGVoaXJlUmVzdW1lVXBsb2FkXCIsKCk9PnopLG4uZXhwb3J0KHIsXCJ3YWl0Rm9yUmlwcGxlaGlyZVJlc3VtZVBhcnNpbmdDb21wbGV0ZVwiLCgpPT5RKSxuLmV4cG9ydChyLFwidXBsb2FkUmVzdW1lXCIsKCk9PlopO3ZhciBvPWUoXCIuLi8uLi9tZXRob2RzL2Nob2ljZS1tYXRjaFwiKSxpPWUoXCJ+Y29udGVudHMvY3Jhd2xlci91dGlscy9pbnB1dFwiKSxhPWUoXCJ+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXJcIiksbD1lKFwifmNvbnRlbnRzL21ldGhvZHMvZG9tXCIpLHM9ZShcIn5jb250ZW50cy9tZXRob2RzL29ic2VydmVyXCIpLHU9ZShcIn51dGlscy9kZWxheVwiKSxjPWUoXCIuL3Bob25lLWNvdW50cnktY29kZVwiKTtmdW5jdGlvbiBkKGUpe3JldHVybiBTdHJpbmcoZXx8XCJcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCkudG9Mb3dlckNhc2UoKX1mdW5jdGlvbiBmKGUpe3JldHVybiBlLnRleHRDb250ZW50Py50cmltKCl8fGUuZ2V0QXR0cmlidXRlKFwibGFiZWxcIik/LnRyaW0oKXx8ZS52YWx1ZT8udHJpbSgpfHxcIlwifWZ1bmN0aW9uIHAoKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0I2N1cnJlbmN5U3ltYm9sLCBzZWxlY3RbbmFtZT0nY3VycmVuY3lTeW1ib2wnXVwiKTtpZighZSlyZXR1cm4hMTtsZXQgdD1BcnJheS5mcm9tKGUub3B0aW9ucykuZmluZChlPT5cIiQgLSB1c2RcIj09PWQoZihlKSkpO3JldHVybiEhdCYmKGUudmFsdWU9PT10LnZhbHVlfHwoQXJyYXkuZnJvbShlLm9wdGlvbnMpLmZvckVhY2goZT0+e2Uuc2VsZWN0ZWQ9ZT09PXR9KSxlLnZhbHVlPXQudmFsdWUsZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSkpLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwfSkpLCEwKSl9ZnVuY3Rpb24gbShlKXtsZXQgdD1kKGUpO3JldHVybiF0fHx0LnN0YXJ0c1dpdGgoXCJlbnRlciBcIil8fHQuc3RhcnRzV2l0aChcInR5cGUgXCIpfHxcInNlbGVjdFwiPT09dH1mdW5jdGlvbiBoKGUsdCl7bGV0IHI9dC5tYXAoZCk7cmV0dXJuIGUuZmluZChlPT5yLmluY2x1ZGVzKGQoZSkpKXx8XCJcIn1mdW5jdGlvbiBnKHt2YWx1ZTplLGF2YWlsYWJsZVZhbHVlczp0PVtdfSl7bGV0IHI9QXJyYXkuaXNBcnJheShlKT9lWzBdOmUsbj1TdHJpbmcocnx8XCJcIikudHJpbSgpO2lmKCFuKXJldHVybltdO2xldCBvPVtuXSxpPWgodCxvKTtyZXR1cm4gaSYmIW8uaW5jbHVkZXMoaSkmJm8ucHVzaChpKSxvfWZ1bmN0aW9uIGIoe2N1cnJlbnRDb3VudHJ5OmUsY291bnRyeTp0LGF2YWlsYWJsZVZhbHVlczpyPVtdfSl7aWYoIWUpcmV0dXJuITE7bGV0IG49Zyh7dmFsdWU6dHx8XCJcIixhdmFpbGFibGVWYWx1ZXM6cn0pO3JldHVybiAwPT09bi5sZW5ndGh8fCEhaChbZV0sbil9ZnVuY3Rpb24geShlKXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIik7cmV0dXJuIHQ/QXJyYXkuZnJvbSh0Lm9wdGlvbnMpLm1hcChmKS5maWx0ZXIoZT0+ZSYmIW0oZSkpOltdfWZ1bmN0aW9uIHYoZSl7cmV0dXJuIGUucXVlcnlTZWxlY3RvcihcImxhYmVsW2Zvcl1cIik/LnRleHRDb250ZW50Py5yZXBsYWNlKFwiOlwiLFwiXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpfHxcIlwifWZ1bmN0aW9uIHcoZSl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpO2lmKHQpe2xldCBlPUFycmF5LmZyb20odC5zZWxlY3RlZE9wdGlvbnMpLmZpbmQoZT0+IW0oZihlKXx8ZS52YWx1ZSkpLHI9ZSYmZihlKXx8dC52YWx1ZXx8XCJcIjtpZihyJiYhbShyKSlyZXR1cm4gcn1sZXQgcj1lLnF1ZXJ5U2VsZWN0b3IoXCIubXVsdGlzZWxlY3Qtc2VsZWN0ZWQtdGV4dFwiKT8udGV4dENvbnRlbnQ/LnRyaW0oKTtpZihyJiYhbShyKSlyZXR1cm4gcjtsZXQgbj1lLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dDpub3QoW3R5cGU9J2hpZGRlbiddKSwgdGV4dGFyZWFcIiksbz1uPy52YWx1ZT8udHJpbSgpfHxcIlwiO3JldHVybiBvJiYhbShvKT9vOlwiXCJ9ZnVuY3Rpb24gUyhlLHQscil7bGV0IG49ZS5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpO2lmKG4pe2xldCBlPWQodCkscj1BcnJheS5mcm9tKG4ub3B0aW9ucykuZmluZCh0PT5kKHQudmFsdWUpPT09ZXx8ZChmKHQpKT09PWUpO3ImJihuLnZhbHVlPXIudmFsdWUsci5zZWxlY3RlZD0hMCxuLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITB9KSksbi5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITB9KSkpfWxldCBvPWUucXVlcnlTZWxlY3RvcihcIi5tdWx0aXNlbGVjdC1zZWxlY3RlZC10ZXh0XCIpO28mJihvLnRleHRDb250ZW50PXIpO2xldCBpPWUucXVlcnlTZWxlY3RvcihcIi5tdWx0aXNlbGVjdC5kcm9wZG93bi10b2dnbGVcIik7aT8uc2V0QXR0cmlidXRlKFwidGl0bGVcIixyKTtsZXQgYT1lLnF1ZXJ5U2VsZWN0b3IoXCIuaGVscC1ibG9ja1wiKTthJiYoYS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKX1mdW5jdGlvbiBFKGUsdCxyPXQpe2xldCBuPWQodCksbz1kKHIpLGk9ZS5xdWVyeVNlbGVjdG9yKFwiLm11bHRpc2VsZWN0LXNlbGVjdGVkLXRleHRcIik/LnRleHRDb250ZW50Py50cmltKCksYT1kKGkpO2lmKGE9PT1ufHxhPT09bylyZXR1cm4hMDtsZXQgbD1lLnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIik7cmV0dXJuISFsJiZBcnJheS5mcm9tKGwuc2VsZWN0ZWRPcHRpb25zKS5zb21lKGU9PntsZXQgdD1bZS52YWx1ZSxmKGUpXS5tYXAoZCk7cmV0dXJuIHQuaW5jbHVkZXMobil8fHQuaW5jbHVkZXMobyl9KX1hc3luYyBmdW5jdGlvbiB4KGUsdCl7ZS5mb2N1cygpLGF3YWl0ICgwLHUuZGVsYXkpKDEwMCksZS52YWx1ZT10LGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwfSkpO2xldCByPW51bGw7Zm9yKGxldCBlPTA7ZTw0MCYmIShyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFjLWNvbnRhaW5lciAucGFjLWl0ZW1cIikpO2UrKylhd2FpdCAoMCx1LmRlbGF5KSgxNTApO3ImJihlLmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXlkb3duXCIse2tleTpcIkFycm93RG93blwiLGtleUNvZGU6NDAsY29kZTpcIkFycm93RG93blwiLGJ1YmJsZXM6ITB9KSksYXdhaXQgKDAsdS5kZWxheSkoMjAwKSxlLmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXlkb3duXCIse2tleTpcIkVudGVyXCIsa2V5Q29kZToxMyxjb2RlOlwiRW50ZXJcIixidWJibGVzOiEwfSkpLGF3YWl0ICgwLHUuZGVsYXkpKDUwMCksZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSkpLGUuc2V0QXR0cmlidXRlKFwidmFsdWVcIixlLnZhbHVlfHxcIlwiKSxlLmJsdXIoKSl9YXN5bmMgZnVuY3Rpb24gQyhlLHQpe2xldCByPWUucXVlcnlTZWxlY3RvcihcIiNtdWx0aS1zZWxlY3RcIil8fGUucXVlcnlTZWxlY3RvcihcIi5tdWx0aS1zZWxlY3RcIik7aWYoIXIpcmV0dXJuITE7bGV0IG49Zyh7dmFsdWU6dCxhdmFpbGFibGVWYWx1ZXM6eShlKX0pO2lmKDA9PT1uLmxlbmd0aClyZXR1cm4hMTtsZXQgbz1hc3luYyB0PT57bGV0IHI9ZS5xdWVyeVNlbGVjdG9yKFwiI211bHRpLXNlbGVjdFwiKXx8ZS5xdWVyeVNlbGVjdG9yKFwiLm11bHRpLXNlbGVjdFwiKTtpZighcilyZXR1cm4hMTtsZXQgbj1yLnF1ZXJ5U2VsZWN0b3IoXCIubXVsdGlzZWxlY3QuZHJvcGRvd24tdG9nZ2xlXCIpO2lmKCFuKXJldHVybiExO24uc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOlwic21vb3RoXCIsYmxvY2s6XCJjZW50ZXJcIn0pLGF3YWl0ICgwLHUuZGVsYXkpKDE1MCksXCJ0cnVlXCIhPT1uLmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIikmJihuLmNsaWNrKCksYXdhaXQgKDAsdS5kZWxheSkoNDAwKSk7bGV0IG89ci5xdWVyeVNlbGVjdG9yKFwiLnNpbmdsZXNlbGVjdC1zZWFyY2hcIik7byYmKG8udmFsdWU9dCxvLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMH0pKSxvLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwia2V5dXBcIix7YnViYmxlczohMH0pKSxhd2FpdCAoMCx1LmRlbGF5KSg1MDApKTtsZXQgaT1yLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubXVsdGlzZWxlY3QtY29udGFpbmVyIGxpXCIpLGE9ITE7Zm9yKGxldCBlIG9mIGkpe2xldCBuPWUucXVlcnlTZWxlY3RvcihcImxhYmVsLm11bHRpc2VsZWN0LW9wdGlvbi10ZXh0XCIpLG89ZS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtpZighbnx8IW98fFwiXCI9PT1vLnZhbHVlKWNvbnRpbnVlO2xldCBpPW4udGV4dENvbnRlbnQ/LnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpfHxcIlwiLGw9W2ksby52YWx1ZV0ubWFwKGQpO2lmKGwuaW5jbHVkZXMoZCh0KSkpe3IucXVlcnlTZWxlY3RvckFsbChcIi5tdWx0aXNlbGVjdC1jb250YWluZXIgbGkuYWN0aXZlXCIpLmZvckVhY2goZT0+e2UuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKX0pLGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKSxvLmNoZWNrZWQ9ITAsby5jbGljaygpLG8uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMH0pKTtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoXCJhXCIpO3Q/LmNsaWNrKCksbi5jbGljaygpLFMocixvLnZhbHVlLGkpLGE9ITA7YnJlYWt9fXJldHVybiEhYSYmKGF3YWl0ICgwLHUuZGVsYXkpKDIwMCksRShyLHQpKX07Zm9yKGxldCBlIG9mIG4pe2xldCB0PWF3YWl0IG8oZSk7aWYodHx8KGF3YWl0ICgwLHUuZGVsYXkpKDMwMCksdD1hd2FpdCBvKGUpKSx0KXJldHVybiEwfXJldHVybiExfWFzeW5jIGZ1bmN0aW9uIEEoZSl7bGV0IHQ9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm0tZ3JvdXA6bm90KC5oaWRlKVwiKSkuZmluZChlPT5cImNvdW50cnlcIj09PWQodihlKSkpO2lmKCF0KXJldHVybiExO2xldCByPXcodCk7cmV0dXJuISFiKHtjdXJyZW50Q291bnRyeTpyLGNvdW50cnk6ZSxhdmFpbGFibGVWYWx1ZXM6eSh0KX0pfHxhd2FpdCBDKHQsZXx8XCJcIil9YXN5bmMgZnVuY3Rpb24gayhlLHQscil7bGV0IG49ZS4kaW5wdXQ7aWYoIW4pcmV0dXJuO2xldCBvPW4ucXVlcnlTZWxlY3RvcihcIiNtdWx0aS1zZWxlY3RcIik7aWYobylyZXR1cm4gYXdhaXQgQyhuLHQpO2lmKCF0fHxcIlwiPT09dC50cmltKCkpcmV0dXJuO2lmKG4uc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOlwic21vb3RoXCIsYmxvY2s6XCJjZW50ZXJcIn0pLGF3YWl0ICgwLHUuZGVsYXkpKDEwMCksbi5jbGFzc0xpc3QuY29udGFpbnMoXCJwYWMtdGFyZ2V0LWlucHV0XCIpJiZuIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCl7YXdhaXQgeChuLHQpO3JldHVybn1lLmxhYmVsLmluY2x1ZGVzKFwiQ2l0eVwiKSYmKHQ9dC5yZXBsYWNlKC9cXHMrL2csXCJcIikpO2xldCBhPW4uY2xvc2VzdD8uKFwiLmludGwtdGVsLWlucHV0XCIpPy5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkLWZsYWdcIik7YT90PSgwLGMuZm9ybWF0UmlwcGxlaGlyZVBob25lVmFsdWUpKHQscik6ZS5sYWJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwicGhvbmVcIikmJjExPT09dC5sZW5ndGgmJnQuc3RhcnRzV2l0aChcIjFcIikmJih0PXQucmVwbGFjZSgvXjEvLFwiXCIpKTtsZXQgbD1uLnZhbHVlPy5sZW5ndGh8fDA7YXdhaXQgKDAsaS5maWxsRGVmYXVsdElucHV0RmllbGQpKG4sdCk7bGV0IHM9XCJlbWFpbEFkZHJcIj09PW4uaWR8fG4uZ2V0QXR0cmlidXRlPy4oXCJuYW1lXCIpPT09XCJlbWFpbEFkZHJcIj9cImVtYWlsXCI6XCJwaG9uZU5vXCI9PT1uLmlkfHxuLmdldEF0dHJpYnV0ZT8uKFwibmFtZVwiKT09PVwicGhvbmVOb1wiP1wicGhvbmVcIjpudWxsO2lmKCFzKXJldHVybjtsZXQgZD1cInBob25lXCI9PT1zP24udmFsdWUucmVwbGFjZSgvXFxEL2csXCJcIik9PT10LnJlcGxhY2UoL1xcRC9nLFwiXCIpOm4udmFsdWUudHJpbSgpPT09dC50cmltKCk7cmV0dXJuIGNvbnNvbGUuZGVidWcoYFtSaXBwbGVIaXJlXVtjb250YWN0LWZpZWxkXSAke0pTT04uc3RyaW5naWZ5KHtmaWVsZDpzLGFuc3dlclByZXNlbnQ6dC5sZW5ndGg+MCxhbnN3ZXJMZW5ndGg6dC5sZW5ndGgsYmVmb3JlTGVuZ3RoOmwsYWZ0ZXJMZW5ndGg6bi52YWx1ZT8ubGVuZ3RofHwwLGNvbW1pdHRlZDpkfSl9YCksZH1hc3luYyBmdW5jdGlvbiBUKGUsdCl7aWYoZS5sYWJlbCE9PWMuUklQUExFSElSRV9QSE9ORV9DT1VOVFJZX0NPREVfTEFCRUwpcmV0dXJuITE7bGV0IHI9KEFycmF5LmlzQXJyYXkodCk/dDpbdF0pLmZpbmQoZT0+U3RyaW5nKGU/P1wiXCIpLnRyaW0oKSksbj1TdHJpbmcocj8/XCJcIikudHJpbSgpO2lmKCFuKXJldHVybiExO2xldCBvPWUuJGlucHV0LGk9bz8uY2xvc2VzdD8uKFwiLmludGwtdGVsLWlucHV0XCIpLGE9aT8ucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZC1mbGFnXCIpO2lmKCFpfHwhYSlyZXR1cm4hMTtsZXQgbD1BcnJheS5mcm9tKGkucXVlcnlTZWxlY3RvckFsbChcImxpLmNvdW50cnlcIikpLHM9KDAsYy5maW5kUmlwcGxlaGlyZVBob25lQ291bnRyeU9wdGlvbikobixsKTtpZighcylyZXR1cm4hMTtsZXQgZD0oKT0+e2lmKHMuY2xhc3NMaXN0Py5jb250YWlucyhcImFjdGl2ZVwiKSlyZXR1cm4hMDtsZXQgZT0oMCxjLnJlYWRSaXBwbGVoaXJlUGhvbmVDb3VudHJ5Q29kZSkobyk7cmV0dXJuISFlJiYoMCxjLmZpbmRSaXBwbGVoaXJlUGhvbmVDb3VudHJ5T3B0aW9uKShlLFtzXSk9PT1zfTtpZihkKCkpcmV0dXJuITA7bGV0IGY9YXN5bmMoKT0+KGEuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOlwic21vb3RoXCIsYmxvY2s6XCJjZW50ZXJcIn0pLGEuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlZG93blwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSksYS5jbGljaygpLGF3YWl0ICgwLHUuZGVsYXkpKDEwMCkscy5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2Vkb3duXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKSxzLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZXVwXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKSxzLmNsaWNrKCksYXdhaXQgKDAsdS5kZWxheSkoMTAwKSxkKCkpO3JldHVybiEhYXdhaXQgZigpfHxhd2FpdCBmKCl9YXN5bmMgZnVuY3Rpb24gRihlLHQpe2lmKCF0fHwwPT09dC5sZW5ndGgpcmV0dXJuO2xldCByPXRbMF07ZS5sYWJlbDtsZXQgbj1lLiRpbnB1dDtpZighbilyZXR1cm47bi5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6XCJzbW9vdGhcIixibG9jazpcImNlbnRlclwifSksYXdhaXQgKDAsdS5kZWxheSkoMTAwKTtsZXQgbz1BcnJheS5mcm9tKG4ub3B0aW9ucyksaT1vLmZpbmQoZT0+ZS50ZXh0Q29udGVudC50cmltKCkudG9Mb3dlckNhc2UoKT09PXIudG9Mb3dlckNhc2UoKXx8ZS52YWx1ZS50b0xvd2VyQ2FzZSgpPT09ci50b0xvd2VyQ2FzZSgpKTtpJiYobi52YWx1ZT1pLnZhbHVlLG4uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMH0pKSxuLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMH0pKSl9YXN5bmMgZnVuY3Rpb24gSShlLHQpe2UubGFiZWw7bGV0IHI9ZS4kY2hlY2tib3hzfHxbXTtpZihlLm9wdGlvbnMsci5sZW5ndGgpZm9yKGxldCBlIG9mKHJbMF0mJihyWzBdLnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjpcInNtb290aFwiLGJsb2NrOlwiY2VudGVyXCJ9KSxhd2FpdCAoMCx1LmRlbGF5KSgxMDApKSx0KSl7bGV0IHQ9ITE7Zm9yKGxldCBuIG9mIHIpe2xldCByPW4uY2xvc2VzdChcImxhYmVsXCIpO2lmKHIpe2xldCBpPXIuY2xvbmVOb2RlKCEwKSxhPWkucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7YSYmYS5yZW1vdmUoKTtsZXQgbD1pLnRleHRDb250ZW50Py50cmltKCl8fFwiXCI7aWYoKDAsby5pc0V4YWN0Q2hvaWNlTWF0Y2gpKGwsZSkpe24uY2hlY2tlZHx8bi5jbGljaygpLHQ9ITA7YnJlYWt9fX19fWFzeW5jIGZ1bmN0aW9uIGooZSx0KXtlLmxhYmVsO2xldCByPXQ/LlswXTtpZighcilyZXR1cm47bGV0IG49ZS4kcmFkaW9QYXJlbnQ7aWYoIW4pcmV0dXJuO24uc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOlwic21vb3RoXCIsYmxvY2s6XCJjZW50ZXJcIn0pLGF3YWl0ICgwLHUuZGVsYXkpKDEwMCk7bGV0IGk9QXJyYXkuZnJvbShuLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpKSxhPW51bGw7Zm9yKGxldCBlIG9mIGkpe2lmKGUuZGlzYWJsZWQpY29udGludWU7bGV0IHQ9XCJcIixpPW4ucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtlLmlkfVwiXWApO2lmKGkpdD1pLnRleHRDb250ZW50Py50cmltKCl8fFwiXCI7ZWxzZXtsZXQgcj1lLmNsb3Nlc3QoXCJsYWJlbFwiKTtpZihyKXtsZXQgZT1yLmNsb25lTm9kZSghMCksbj1lLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO24mJm4ucmVtb3ZlKCksdD1lLnRleHRDb250ZW50Py50cmltKCl8fFwiXCJ9ZWxzZXtsZXQgcj1lLm5leHRFbGVtZW50U2libGluZztyJiZcIkxBQkVMXCI9PT1yLnRhZ05hbWUmJih0PXIudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIil9fWlmKCgwLG8uaXNFeGFjdENob2ljZU1hdGNoKSh0LHIpKXthPWU7YnJlYWt9fWlmKGEpe2xldCBlPW4ucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHthLmlkfVwiXWApLHQ9ZXx8YS5jbG9zZXN0KFwibGFiZWxcIik7IWEuY2hlY2tlZCYmKGEuY2hlY2tlZD0hMCxhLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITB9KSksYS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNsaWNrXCIse2J1YmJsZXM6ITB9KSksYS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITB9KSksdCYmKHQuY2xpY2soKSxhd2FpdCAoMCx1LmRlbGF5KSg1MCkpKX19YXN5bmMgZnVuY3Rpb24gRCgpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xhYmVsLmRlY2xhcmF0aW9uIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSwgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdI3Rlcm1zY29uZGl0aW9uJyk7Zm9yKGxldCB0IG9mIGUpdC5jaGVja2VkfHwodC5jaGVja2VkPSEwLHQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMH0pKSx0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2xpY2tcIix7YnViYmxlczohMH0pKSx0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMH0pKSxhd2FpdCAoMCx1LmRlbGF5KSg1MCkpfWxldCBQPVwiI29wZW5SZXN1bWUsIC5vcGVuUmVzdW1lXCIsXz0nI3Jlc3VtZURyYWcsICNteU1vZGFsIGlucHV0W3R5cGU9XCJmaWxlXCJdLCBpbnB1dFt0eXBlPVwiZmlsZVwiXVtuYW1lPVwicmVzdW1lXCJdJyxMPVwiI3Jlc3VtZVN1bWJtaXRcIjtmdW5jdGlvbiBSKCl7cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXyl9YXN5bmMgZnVuY3Rpb24gTyh7bWF4QXR0ZW1wdHM6ZT0yMCxpbnRlcnZhbE1zOnQ9MTAwfT17fSl7bGV0IHI9UigpO2lmKHIpcmV0dXJuIHI7bGV0IG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihQKTtpZighbilyZXR1cm4gbnVsbDtuLmNsaWNrKCk7Zm9yKGxldCByPTA7cjxlO3IrPTEpe2xldCBlPVIoKTtpZihlKXJldHVybiBlO2F3YWl0ICgwLHUuZGVsYXkpKHQpfXJldHVybiBudWxsfWxldCBNPVwiI215TW9kYWxcIixOPVwiLmFuYWx5emluZy1maWxlc1wiLCQ9XCIuZmlsZS1wcmV2aWV3LCAuY2hhbmdlLWZpbGVzXCIsQj0xZTQscT0xNTA7ZnVuY3Rpb24gVShlKXtsZXQgdD1lLmNsb3Nlc3Q/LihNKTtyZXR1cm4gdD9cIm1vZGFsLXBhcnNlclwiOlwiaW5saW5lLWRpcmVjdFwifWZ1bmN0aW9uIEgoKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKE0pO3JldHVybiFlfHwhZS5xdWVyeVNlbGVjdG9yKE4pJiYhIWUucXVlcnlTZWxlY3RvcigkKX1hc3luYyBmdW5jdGlvbiBZKHt0aW1lb3V0OmU9Qixwb2xsSW50ZXJ2YWw6dD1xfT17fSl7bGV0IHI9YXdhaXQgKDAscy53YWl0Rm9yQ29uZGl0aW9uKShILHt0aW1lb3V0OmUsaW50ZXJ2YWw6dCxvYnNlcnZlVGFyZ2V0OmRvY3VtZW50LmJvZHl9KTtyZXR1cm4gcnx8Y29uc29sZS53YXJuKFwiW3VwbG9hZFJlc3VtZV0gVGltZWQgb3V0IHdhaXRpbmcgZm9yIFJpcHBsZUhpcmUgcmVzdW1lIGZpbGUgdG8gZmluaXNoIGFuYWx5emluZ1wiKSxyfWZ1bmN0aW9uIHooKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKEwpO3JldHVybiEhZSYmKGUuY2xpY2soKSwhMCl9bGV0IFY9W1widGV4dFwiLFwiZW1haWxcIixcInRlbFwiLFwic2VhcmNoXCIsXCJ1cmxcIixcIm51bWJlclwiLFwiZGF0ZVwiXSxXPTgwMCxHPTE1ZTMsSz0yMDA7ZnVuY3Rpb24gWChlKXtsZXQgdD1lLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtpZihcInRleHRhcmVhXCI9PT10fHxcInNlbGVjdFwiPT09dClyZXR1cm4hMDtpZihcImlucHV0XCIhPT10KXJldHVybiExO2xldCByPShlLmdldEF0dHJpYnV0ZShcInR5cGVcIil8fFwidGV4dFwiKS50b0xvd2VyQ2FzZSgpO3JldHVybiBWLmluY2x1ZGVzKHIpfWZ1bmN0aW9uIEooKXtyZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIikpLmZpbHRlcihYKS5tYXAoZT0+W2UudGFnTmFtZSxlLmlkLGUuZ2V0QXR0cmlidXRlKFwibmFtZVwiKXx8XCJcIixlLnZhbHVlfHxcIlwiXS5qb2luKFwiOlwiKSkuam9pbihcIlxcblwiKX1hc3luYyBmdW5jdGlvbiBRKHtzdGFibGVNczplPVcsdGltZW91dDp0PUcscG9sbEludGVydmFsOnI9S309e30pe2xldCBuPUooKSxvPURhdGUubm93KCksaT0hMSxhPWF3YWl0ICgwLHMud2FpdEZvckNvbmRpdGlvbikoKCk9PntsZXQgdD1KKCk7cmV0dXJuIHQhPT1uPyhuPXQsbz1EYXRlLm5vdygpLGk9ITAsITEpOmkmJkRhdGUubm93KCktbz49ZX0se3RpbWVvdXQ6dCxpbnRlcnZhbDpyfSk7cmV0dXJuIGF8fGNvbnNvbGUud2FybihcIlt1cGxvYWRSZXN1bWVdIFRpbWVkIG91dCB3YWl0aW5nIGZvciBSaXBwbGVIaXJlIHJlc3VtZSBwYXJzaW5nIHRvIHNldHRsZVwiKSxhfWFzeW5jIGZ1bmN0aW9uIFooZSx0LHIpe2xldCBuPWF3YWl0IE8oKTtpZihuKXtsZXQgbz1VKG4pO2lmKGNvbnNvbGUubG9nKFwiW1JpcHBsZUhpcmVdW3Jlc3VtZS11cGxvYWRdIGZsb3ctZGV0ZWN0ZWRcIix7ZmxvdzpvLGlucHV0SWQ6bi5pZHx8bnVsbH0pLGF3YWl0ICgwLGwudXBsb2FkRmlsZXMpKG4sYXdhaXQgKDAsYS5mZXRjaFBkZkFzQmxvYikoZSksdCxyLFwiUmVzdW1lL0NWXCIpLFwiaW5saW5lLWRpcmVjdFwiPT09byl7Y29uc29sZS5sb2coXCJbUmlwcGxlSGlyZV1bcmVzdW1lLXVwbG9hZF0gcGFyc2VyLXdhaXQtc2tpcHBlZFwiLHtmbG93Om8scmVhc29uOlwiZGlyZWN0LXVwbG9hZC1sYXlvdXRcIn0pO3JldHVybn1sZXQgaT1hd2FpdCBZKCkscz16KCk7aWYoY29uc29sZS5sb2coXCJbUmlwcGxlSGlyZV1bcmVzdW1lLXVwbG9hZF0gbW9kYWwtY29uZmlybVwiLHtmbG93Om8sZmlsZVJlYWR5OmksY29uZmlybWVkOnN9KSwhcyl7Y29uc29sZS53YXJuKFwiW1JpcHBsZUhpcmVdW3Jlc3VtZS11cGxvYWRdIHBhcnNlci13YWl0LXNraXBwZWRcIix7ZmxvdzpvLHJlYXNvbjpcIm1vZGFsLXN1Ym1pdC1taXNzaW5nXCJ9KTtyZXR1cm59bGV0IHU9YXdhaXQgUSgpO2NvbnNvbGUubG9nKFwiW1JpcHBsZUhpcmVdW3Jlc3VtZS11cGxvYWRdIHBhcnNlci13YWl0LWNvbXBsZXRlXCIse2Zsb3c6byxwYXJzZXJTZXR0bGVkOnV9KX19XHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJvcGVyYXRpb25zLmIyOWYyMDMzLmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);