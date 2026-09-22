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
})({"9HCNE":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\smartrecruiters.js",
    "bundleId": "94c8a1f0d721f467",
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
var j = z(require("9c96feaa974f0504"));
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

},{"9c96feaa974f0504":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"dYhS9":[function(require,module,exports) {
/**
 * Parcel module id: 4pApn
 * Resolved path: src/contents/sites/smartrecruiters.js
 * Dependencies:
 *   ../option-resolve-rollout -> kwH9q  =>  src/contents/option-resolve-rollout.js
 *   ./answer -> ahzUi  =>  src/contents/sites/smartrecruiters/answer.js
 *   ./education-operation -> 7CJrO  =>  src/contents/sites/smartrecruiters/education-operation.js
 *   ./location-operation -> 8eiSq  =>  src/contents/sites/smartrecruiters/location-operation.js
 *   ./operations -> lpr2d  =>  src/contents/sites/smartrecruiters/operations.js
 *   ./rules -> fGyHE  =>  src/contents/sites/smartrecruiters/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/fieldLabel -> 1RmGw  =>  src/utils/fieldLabel.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "SmartRecruiters", ()=>W);
var o = e("@plasmohq/messaging"), i = e("~contents/sites/base-filler"), a = e("~core/enums"), l = e("~core/dom"), s = e("~core/xpath"), u = e("~utils/fieldLabel"), c = e("./operations"), d = e("./rules"), f = e("~contents/methods/answer"), p = e("./answer"), m = e("./location-operation"), h = e("./education-operation"), g = e("../option-resolve-rollout");
let b = /^(?:continue(?:\s+to\s+the\s+next\s+page|\s+application)?|next|submit(?:\s+application)?|apply(?:\s+now)?|review\s+and\s+submit|finish)$/i;
function y(e1) {
    return (e1.textContent || e1.getAttribute("aria-label") || e1.getAttribute("title") || "").replace(/\s+/g, " ").trim();
}
function v(e1) {
    return e1 instanceof HTMLButtonElement && e1.disabled || "true" === e1.getAttribute("aria-disabled");
}
let w = {
    requestStep: async (e1)=>await (0, o.sendToBackground)({
            name: "resolveAutofillClientSearchStep",
            body: e1
        }),
    captureCandidates: c.captureSmartRecruitersInstitutionCandidates,
    commitCandidate: (e1, t, r1)=>(0, c.fillSmartRecruitersInstitutionCandidate)(e1, t, r1)
};
function S(e1, t) {
    let r1 = (0, u.normalizeFieldLabel)(t), n = e1?.regular || {};
    for (let [e1, t] of Object.entries(n))if ((0, u.normalizeFieldLabel)(e1) === r1) return t;
    let o = Array.isArray(e1?.fillDataList) ? e1.fillDataList : [];
    for (let e1 of o)if ((0, u.normalizeFieldLabel)(e1?.name) === r1) return e1.value;
}
_c = S;
function E(e1) {
    return (0, u.normalizeFieldLabel)(e1) === (0, u.normalizeFieldLabel)(d.SMARTRECRUITERS_PHONE_COUNTRY_CODE_LABEL);
}
_c1 = E;
function x(e1, t) {
    return E(e1.label) ? (0, d.normalizeSmartRecruitersPhoneCountryText)(t) : t;
}
function C(e1, t) {
    let r1 = {};
    for (let n of e1){
        if (n.type === a.FIELD_TYPE.EDUCATION || n.type === a.FIELD_TYPE.EMPLOYMENT) continue;
        let e1 = S(t, n.label);
        void 0 !== e1 && (r1[n.label] = x(n, e1));
    }
    return r1;
}
_c2 = C;
function A(e1, t) {
    let r1 = (0, p.normalizeSmartRecruitersDateRecordForRule)(e1, t), n = (0, u.normalizeFieldLabel)(t);
    for (let [e1, t] of Object.entries(r1))if ((0, u.normalizeFieldLabel)(e1) === n) return t;
}
_c3 = A;
function k(e1, t) {
    let r1 = e1[0];
    return t.map((t, n)=>{
        let o = e1[n] || r1, i = o?.children || [], a = {};
        for (let e1 of i){
            let r1 = A(t, e1.label);
            void 0 !== r1 && (a[e1.label] = r1);
        }
        return a;
    });
}
function T(e1) {
    return e1 && (e1.textContent?.replace?.(/\s+/g, " ")?.trim?.() || e1.getAttribute?.("label")?.trim?.() || e1.getAttribute?.("value")?.trim?.()) || "";
}
_c4 = T;
function F(e1) {
    let t = Array.from(e1.querySelectorAll?.("spl-select-option") || []), r1 = Array.from(e1.shadowRoot?.querySelectorAll?.("spl-select-option") || []);
    return [
        ...t,
        ...r1
    ];
}
_c5 = F;
function I(e1) {
    let t = e1.getAttribute?.("value")?.trim?.() || ("string" == typeof e1.value ? e1.value.trim() : ""), r1 = F(e1);
    if (t) {
        let e1 = r1.find((e1)=>e1.getAttribute?.("value") === t), n = T(e1 || null);
        if (n) return n;
    }
    let n = e1.querySelector?.('[aria-selected="true"], spl-select-option[selected]'), o = T(n);
    if (o) return o;
    let i = e1.shadowRoot?.querySelector?.('[aria-selected="true"], spl-select-option[selected]'), a = T(i);
    if (a) return a;
    let l = e1.shadowRoot?.querySelector?.("button");
    return l?.textContent?.trim() ? l.textContent.trim() : t || e1.textContent?.trim?.() || "";
}
_c6 = I;
function j(e1) {
    if (!e1) return "";
    if (e1.tagName?.toLowerCase?.() === "spl-select") return I(e1);
    if (void 0 !== e1.value) return e1.value;
    let t = e1.shadowRoot?.querySelector?.("input, textarea");
    if (t && void 0 !== t.value) return t.value;
    let r1 = e1.querySelector?.('[aria-selected="true"], spl-select-option[selected]');
    if (r1?.textContent?.trim()) return r1.textContent.trim();
    let n = e1.shadowRoot?.querySelector?.('[aria-selected="true"], spl-select-option[selected]');
    if (n?.textContent?.trim()) return n.textContent.trim();
    let o = e1.shadowRoot?.querySelector?.("button");
    return o?.textContent?.trim() ? o.textContent.trim() : e1.textContent?.trim?.() || "";
}
function D(e1) {
    return String(e1 ?? "").replace(/\s+/g, " ").replace(/\s*\u00d7\s*$/, "").trim();
}
_c7 = D;
function P(e1) {
    if (!e1?.querySelectorAll) return [];
    let t = [
        "spl-tag",
        '[class*="tag"]',
        '[class*="chip"]',
        '[class*="pill"]',
        '[class*="selected-value"]',
        '[class*="selected-option"]'
    ], r1 = [];
    for (let n of t){
        let t = Array.from(e1.querySelectorAll(n) || []);
        for (let e1 of t){
            let t = D(e1.textContent);
            t && !r1.includes(t) && r1.push(t);
        }
    }
    return r1;
}
_c8 = P;
function _(e1) {
    let t = e1?.closest?.('div[class*="c-spl-multiselect-autocomplete-trigger"]'), r1 = e1?.closest?.("spl-multiselect-autocomplete"), n = [
        t,
        t?.shadowRoot,
        r1,
        r1?.shadowRoot
    ].filter(Boolean);
    for (let e1 of n){
        let t = P(e1);
        if (t.length > 0) return t.join(", ");
    }
    return D(j(e1));
}
function L(e1) {
    let t = e1.$checkboxs || [];
    return t.some((e1)=>e1.checked) ? "Yes" : "No";
}
_c9 = L;
function R(e1) {
    let t = e1.$radioParent, r1 = Array.from(t?.querySelectorAll?.("spl-radio") || []);
    for (let e1 of r1){
        let t = e1.shadowRoot?.querySelector('input[type="radio"]');
        if (!t?.checked) continue;
        let r1 = e1.shadowRoot?.querySelector('span[class*="c-spl-form-field-label-wrapper"]');
        return r1?.textContent?.trim() || t.value || "";
    }
    return "";
}
_c10 = R;
function O(e1) {
    let t;
    return t = e1.type === a.FIELD_TYPE.CHECKBOX ? L(e1) : e1.type === a.FIELD_TYPE.RADIOGROUP ? R(e1) : e1.type === a.FIELD_TYPE.MULTI_SELECT ? _(e1.$input) : j(e1.$input), x(e1, t);
}
_c11 = O;
function M(e1) {
    let t = {};
    for (let r1 of e1)r1.type !== a.FIELD_TYPE.EDUCATION && r1.type !== a.FIELD_TYPE.EMPLOYMENT && (t[r1.label] = O(r1));
    return t;
}
_c12 = M;
function N(e1) {
    return e1.map((e1)=>M(e1.children || []));
}
_c13 = N;
function $(e1) {
    try {
        return (0, d.processEduOrWorkExpAnwser)(e1) || [];
    } catch  {
        return [];
    }
}
function B(e1) {
    return Object.values(e1).some((e1)=>String(e1 ?? "").trim());
}
_c14 = B;
function q(e1) {
    return String(e1 ?? "").replace(/\s+/g, " ").trim().toLowerCase();
}
function U(e1) {
    if ("undefined" == typeof document) return [];
    let t = e1 ? "oc-experience" : "oc-education", r1 = e1 ? "oc-experience-entry" : "oc-education-entry", n = Array.from(document.querySelector(t)?.querySelectorAll(r1) || []);
    return n.map((e1)=>q(e1.textContent)).filter(Boolean);
}
_c15 = U;
function H(e1, t, r1) {
    let n = r1 ? [
        "Title",
        "Company",
        "Office location"
    ] : [
        "Institution",
        "Major",
        "Degree"
    ];
    return n.reduce((r1, n)=>{
        let o = q(e1[n]);
        return o && t.includes(o) ? r1 + 1 : r1;
    }, 0);
}
_c16 = H;
function Y(e1, t) {
    let r1 = U(t);
    if (0 === r1.length) return [];
    let n = new Set;
    return r1.map((r1, o)=>{
        let i = -1, a = 0;
        if (e1.forEach((e1, o)=>{
            if (n.has(o)) return;
            let l = H(e1, r1, t);
            l > a && (a = l, i = o);
        }), i >= 0) return n.add(i), e1[i];
        let l = e1[o];
        if (l) return n.add(o), l;
    }).filter(Boolean);
}
_c17 = Y;
function z(e1, t) {
    let r1 = $(e1), n = N(r1);
    if (n.some(B)) {
        let t = Y(n, e1);
        return t.length > 0 ? t : n;
    }
    return Y(N(t), e1).filter(B);
}
function V(e1, t, r1) {
    let n = k(t, r1), o = Y(n, e1);
    return o.length > 0 ? o : n;
}
_c18 = V;
class W extends i.BaseFiller {
    isSmartRecruitersInstitutionResolveEnabled() {
        return g.V119_OPTION_RESOLVE_ROLLOUT.smartRecruitersEducationInstitution;
    }
    getFieldHandlers() {
        return {
            [a.FIELD_TYPE.TEXT]: async (e1, t)=>{
                let r1 = t?.[0];
                if ((0, m.isSmartRecruitersCityAutocompleteRule)(e1)) return this.fillSmartRecruitersCity(e1, String(r1 ?? ""));
                if (this.isSmartRecruitersInstitutionResolveEnabled() && (0, h.isSmartRecruitersInstitutionRule)(e1)) try {
                    let t = await (0, h.resolveSmartRecruitersInstitutionClientSearch)(e1.$input, String(r1 ?? ""), w);
                    return t.success || (this.educationInstitutionFailed = !0, console.warn("[SmartRecruiters][Institution] client-search-failed", {
                        reason: t.failureReason || "unknown-error",
                        roundCount: t.rounds.length
                    }), await this.markSmartRecruitersEducationInstitutionFailed(e1.$input, {
                        error: Error("client-search-failed"),
                        stage: "commit"
                    })), t.success;
                } catch (t) {
                    return await this.markSmartRecruitersEducationInstitutionFailed(e1.$input, {
                        error: t,
                        stage: "commit"
                    }), !1;
                }
                if (r1) return (0, c.fillInputTextField)(e1.$input, String(r1 ?? ""));
            },
            [a.FIELD_TYPE.SELECT]: async (e1, t)=>(0, m.isSmartRecruitersCityAutocompleteRule)(e1) ? this.fillSmartRecruitersCity(e1, String(t?.[0] ?? "")) : (0, c.fillSelectField)(e1, t),
            [a.FIELD_TYPE.CHECKBOX]: (e1, t)=>(0, c.fillCheckboxField)(e1, t),
            [a.FIELD_TYPE.RADIOGROUP]: (e1, t)=>(0, c.fillRadioGroupFiled)(e1, t),
            [a.FIELD_TYPE.MULTI_SELECT]: (e1, t)=>(0, c.fillMultiSelectField)(e1, t)
        };
    }
    async fillSmartRecruitersCity(e1, t) {
        let r1 = e1.$input;
        if (this.deferredSmartRecruitersCityValues.has(r1)) {
            let e1 = this.deferredSmartRecruitersCityValues.get(r1);
            return this.deferredSmartRecruitersCityValues.delete(r1), console.info("[SmartRecruiters][City] commit-resumed", {
                hasResolvedCity: !!e1
            }), this.commitSmartRecruitersCity(r1, e1 ?? "");
        }
        let n = await this.resolveSmartRecruitersCity(r1, t);
        return this.commitSmartRecruitersCity(r1, n);
    }
    async resolveSmartRecruitersCity(e1, t, r1) {
        let n = (0, m.getSmartRecruitersCityOriginalAnswer)(this.answer, t), i = Date.now();
        if (void 0 === r1 && (e1.setAttribute("data-jr-smartrecruiters-city-resolve-stage", "started"), console.info("[SmartRecruiters][City] resolve-start", {
            answerSource: n.source,
            hasOriginalAnswer: !!n.value
        })), !n.value) return null;
        try {
            let t = void 0 === r1 ? await (0, c.captureSmartRecruitersCityRequest)(e1, n.value) : r1;
            if (!t) return console.warn("[SmartRecruiters][City] resolve-skipped", {
                reason: "autocomplete-request-not-captured"
            }), e1.setAttribute("data-jr-smartrecruiters-city-resolve-stage", "request-missing"), null;
            let a = (0, m.buildSmartRecruitersCityOperation)({
                requestUrl: t,
                originalAnswer: n.value
            }), l = await (0, o.sendToBackground)({
                name: "resolveAutofillOperation",
                body: {
                    operation: a,
                    source: "smartrecruiters"
                }
            }), s = (0, m.getSmartRecruitersResolvedCityValue)(l);
            return console.info("[SmartRecruiters][City] resolve-result", {
                action: l?.result?.action ?? "missing",
                selectedCount: l?.result?.selected_values?.length ?? 0,
                elapsedMs: Date.now() - i
            }), s || null;
        } catch (t) {
            return e1.setAttribute("data-jr-smartrecruiters-city-resolve-stage", "failed"), console.warn("[SmartRecruiters][City] resolve-failed", {
                reason: t instanceof Error ? t.message : "unknown-error",
                elapsedMs: Date.now() - i
            }), null;
        }
    }
    async commitSmartRecruitersCity(e1, t) {
        if (!t) {
            let t = "failed" === e1.getAttribute("data-jr-smartrecruiters-city-resolve-stage");
            return await (0, c.clearSmartRecruitersCityField)(e1), e1.setAttribute("data-jr-smartrecruiters-city-resolve-stage", t ? "failed" : "empty-result"), !1;
        }
        let r1 = await (0, c.fillResolvedSmartRecruitersCityField)(e1, t);
        return e1.setAttribute("data-jr-smartrecruiters-city-resolve-stage", r1 ? "committed" : "commit-failed"), r1;
    }
    async fillRegularFields(e1) {
        this.deferredSmartRecruitersCityValues.clear();
        let t = e1.filter(m.isSmartRecruitersCityAutocompleteRule);
        if (1 !== t.length) {
            await super.fillRegularFields(e1);
            return;
        }
        let [r1] = t, n = r1.$input, o = String((0, f.findValueInRecord)(r1.label, this.answer.regular) ?? ""), i = e1.filter((e1)=>!(0, m.isSmartRecruitersCityAutocompleteRule)(e1)), a = (0, m.getSmartRecruitersCityOriginalAnswer)(this.answer, o), l = Date.now(), s = null;
        if (a.value) {
            n.setAttribute("data-jr-smartrecruiters-city-resolve-stage", "started"), console.info("[SmartRecruiters][City] resolve-start", {
                answerSource: a.source,
                hasOriginalAnswer: !0
            });
            try {
                s = await (0, c.captureSmartRecruitersCityRequest)(n, a.value, 2);
            } catch (e1) {
                n.setAttribute("data-jr-smartrecruiters-city-resolve-stage", "failed"), console.warn("[SmartRecruiters][City] resolve-failed", {
                    reason: e1 instanceof Error ? e1.message : "unknown-error",
                    elapsedMs: Date.now() - l
                });
            }
        }
        console.info("[SmartRecruiters][City] resolve-deferred", {
            immediateRuleCount: i.length,
            hasCapturedRequest: !!s
        }), await (0, m.runDeferredSmartRecruitersCityResolution)({
            startResolve: ()=>s ? this.resolveSmartRecruitersCity(n, o, s) : Promise.resolve(null),
            fillOtherFields: async ()=>{
                for (let e1 of (0, f.getRegularOperations)(i, this.answer.regular, this.operationConfig))this.taskQueue.add(e1);
                await this.taskQueue.run();
            },
            commitResolvedCity: async (e1)=>{
                for (let t of (this.deferredSmartRecruitersCityValues.set(n, e1), console.info("[SmartRecruiters][City] resolve-ready", {
                    hasResolvedCity: !!e1,
                    elapsedMs: Date.now() - l
                }), (0, f.getRegularOperations)([
                    r1
                ], this.answer.regular, this.operationConfig)))this.taskQueue.add(t);
                await this.taskQueue.run();
            }
        });
    }
    async markSmartRecruitersEducationInstitutionFailed(e1, t) {
        this.educationInstitutionFailed = !0, t && console.warn(`[SmartRecruiters][Institution] ${t.stage}-failed`, {
            reason: t.error instanceof Error ? t.error.name : "unknown-error"
        });
        try {
            await (0, c.clearSmartRecruitersInstitutionField)(e1);
        } catch (e1) {
            console.warn("[SmartRecruiters][Institution] cleanup-failed", {
                reason: e1 instanceof Error ? e1.name : "unknown-error"
            });
        }
    }
    async transformSmartRecruitersEducationRecordByRule(e1, t) {
        let r1 = (0, p.normalizeSmartRecruitersDateRecordForRule)(t, e1.label);
        if (!(0, h.isSmartRecruitersInstitutionRule)(e1)) return r1;
        let n = e1.$input, o = (0, h.getSmartRecruitersInstitutionOriginalAnswer)(r1);
        return o ? {
            ...r1,
            [e1.label]: o
        } : (await this.markSmartRecruitersEducationInstitutionFailed(n), {
            ...r1,
            [e1.label]: ""
        });
    }
    async doFillForm(e1 = !1) {
        await this.initializeFillForm();
        let t = await this.extractFormRules();
        this.progressTracker.setFieldsRequiredStatus(t), await this.handleResumeUpload();
        let r1 = await this.fetchFormAnswers(t, e1);
        if ("string" == typeof r1) return r1;
        this.answer = (0, p.formatAnswer)(this.answer, t), await this.fillRegularFields(t);
        let n = await this.runComboQuestionAutofillIfNeeded(t, e1);
        return "string" == typeof n ? n : (t = n, await this.executeSiteSpecificSteps(t), this.finalizeFillForm());
    }
    async executeSiteSpecificSteps(e1) {
        if (this.trackingEducationRules = [], this.trackingEmploymentRules = [], await (0, c.clickAddButton)(!0, this.answer.workExperience?.length - 1 || 0), await (0, c.clickAddButton)(!1, this.answer.education?.length - 1 || 0), this.answer.workExperience.length > 0) {
            let e1 = (0, d.processEduOrWorkExpAnwser)(!0);
            this.trackingEmploymentRules = e1 || [], (0, l.setSectionResultFocusRules)("employment", e1 || []);
            let t = (0, f.getEmploymentOperations)(e1, this.answer.workExperience, this.operationConfig, G, {
                onSectionResultChanged: this.progressTracker.updateSectionResult,
                onCompleted: ()=>this.progressTracker.updateFilledProgress("Employment"),
                onSkipped: ()=>this.progressTracker.updateMissedProgress("Employment")
            }), r1 = [
                ...t
            ];
            for (let e1 of r1)this.taskQueue.add(e1);
            await this.taskQueue.run(), await (0, c.clickSaveButton)(!0);
            let n = (0, d.getSavedSmartRecruitersSectionFocusRules)(!0, e1);
            n ? (this.trackingEmploymentRules = n, (0, l.setSectionResultFocusRules)("employment", n)) : console.debug("[Autofill][smartrecruiters-section-focus] saved targets unavailable", {
                type: "employment",
                expectedRecords: e1.length
            });
        }
        if (this.answer.education.length > 0) {
            this.educationInstitutionFailed = !1;
            let e1 = (0, d.processEduOrWorkExpAnwser)(!1);
            this.trackingEducationRules = e1 || [], (0, l.setSectionResultFocusRules)("education", e1 || []);
            let t = (0, f.getEducationOperations)(e1, this.answer.education, this.operationConfig, (e1, t)=>this.isSmartRecruitersInstitutionResolveEnabled() ? this.transformSmartRecruitersEducationRecordByRule(e1, t) : (0, p.normalizeSmartRecruitersDateRecordForRule)(t, e1.label), {
                onSectionResultChanged: this.progressTracker.updateSectionResult,
                onCompleted: ()=>{
                    if (this.educationInstitutionFailed) {
                        this.progressTracker.updateMissedProgress("Education");
                        return;
                    }
                    this.progressTracker.updateFilledProgress("Education");
                },
                onSkipped: ()=>this.progressTracker.updateMissedProgress("Education")
            }), r1 = [
                ...t
            ];
            for (let e1 of r1)this.taskQueue.add(e1);
            if (await this.taskQueue.run(), !this.educationInstitutionFailed) {
                await (0, c.clickSaveButton)(!1);
                let t = (0, d.getSavedSmartRecruitersSectionFocusRules)(!1, e1);
                t ? (this.trackingEducationRules = t, (0, l.setSectionResultFocusRules)("education", t)) : console.debug("[Autofill][smartrecruiters-section-focus] saved targets unavailable", {
                    type: "education",
                    expectedRecords: e1.length
                });
            }
        }
        await this.bindSubmitButtonTracking(e1);
    }
    async runPreFillForm() {
        this.taskQueue.add(c.preFillForm), await this.taskQueue.run();
    }
    async extractFormRules() {
        return await (0, d.extractRules)();
    }
    getSiteName() {
        return "smartrecruiters";
    }
    async handleResumeUpload() {
        this.disableUploadResume ? (await (0, c.removeResume)(), this.progressTracker.updateMissedProgress("Resume/CV")) : this.taskQueue.add(async ()=>{
            await (0, c.removeResume)(), await (0, c.uploadResume)(this.resumeInfo, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
        }), await this.taskQueue.run();
    }
    getSubmitButtonSelector() {
        return './/button[@type="submit" or contains(@class, "submit") or normalize-space(.)="Submit" or normalize-space(.)="Next" or normalize-space(.)="Continue" or normalize-space(.)="Continue To The Next Page"]';
    }
    getSubmitTrackingDelegationRoot() {
        return document;
    }
    resolveDelegatedSubmitButton(e1) {
        let t = e1.closest("button");
        if (t instanceof HTMLButtonElement) {
            if (v(t)) return null;
            let e1 = y(t);
            return b.test(e1) ? t : null;
        }
        let r1 = e1.closest("spl-button");
        if (!r1 || v(r1)) return null;
        let n = y(r1);
        if (!b.test(n)) return null;
        let o = r1.shadowRoot?.querySelector("button");
        return o instanceof HTMLButtonElement ? v(o) ? null : o : r1;
    }
    async getAutofillSnapshot(e1) {
        this.trackingRules = e1;
        let t = M(e1);
        return B(t) ? t : C(e1, this.answer);
    }
    async getSubmitSnapshot() {
        return this.trackingRules.length > 0 ? M(this.trackingRules) : await (0, d.getFormSnapshot)();
    }
    getAdditionalAutofillSnapshotData() {
        let e1 = {};
        if (this.trackingEducationRules.length > 0) {
            let t = z(!1, this.trackingEducationRules);
            t.length > 0 ? e1.education = t : (this.answer.education || []).length > 0 && (e1.education = k(this.trackingEducationRules, this.answer.education || []));
        }
        if (this.trackingEmploymentRules.length > 0) {
            let t = z(!0, this.trackingEmploymentRules);
            t.length > 0 ? e1.employment = t : (this.answer.workExperience || []).length > 0 && (e1.employment = k(this.trackingEmploymentRules, this.answer.workExperience || []));
        }
        return e1;
    }
    getAdditionalSubmitSnapshotData() {
        let e1 = {};
        if (this.trackingEducationRules.length > 0) {
            let t = z(!1, this.trackingEducationRules);
            t.length > 0 ? e1.education = t : (this.answer.education || []).length > 0 && (e1.education = V(!1, this.trackingEducationRules, this.answer.education || []));
        }
        if (this.trackingEmploymentRules.length > 0) {
            let t = z(!0, this.trackingEmploymentRules);
            t.length > 0 ? e1.employment = t : (this.answer.workExperience || []).length > 0 && (e1.employment = V(!0, this.trackingEmploymentRules, this.answer.workExperience || []));
        }
        return e1;
    }
    submitApplication() {
        let e1 = './/button[@type="submit" or contains(@class, "submit")]', t = (0, s.getFirstOrderedNode)(e1);
        t && t?.click();
    }
    constructor(...e1){
        super(...e1), this.hasComboQuestions = !0, this.comboQuestionMaxRounds = 4, this.comboQuestionSettleDelayMs = 600, this.comboQuestionQuietPeriodMs = 200, this.comboQuestionSettleMaxWaitMs = 1600, this.trackingRules = [], this.trackingEducationRules = [], this.trackingEmploymentRules = [], this.educationInstitutionFailed = !1, this.deferredSmartRecruitersCityValues = new Map;
    }
}
let G = (e1, t)=>(0, p.normalizeSmartRecruitersDateRecordForRule)(t, e1.label);
_c19 = G;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19;
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
$RefreshReg$(_c19, "G");

},{}]},["9HCNE","dYhS9"], "dYhS9", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLElBQUUsT0FBTztBQUFPLElBQUksSUFBRSxPQUFPO0FBQWUsSUFBSSxJQUFFLE9BQU87QUFBeUIsSUFBSSxJQUFFLE9BQU87QUFBb0IsSUFBSSxJQUFFLE9BQU8sZ0JBQWUsSUFBRSxPQUFPLFVBQVU7QUFBZSxJQUFJLElBQUUsQ0FBQyxHQUFFLEdBQUUsR0FBRTtJQUFLLElBQUcsS0FBRyxPQUFPLEtBQUcsWUFBVSxPQUFPLEtBQUcsWUFBVyxLQUFJLElBQUksS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRSxNQUFJLE1BQUksS0FBRyxFQUFFLEdBQUUsR0FBRTtRQUFDLEtBQUksSUFBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBRSxDQUFBLElBQUUsRUFBRSxHQUFFLEVBQUMsS0FBSSxFQUFFO0lBQVU7SUFBRyxPQUFPO0FBQUM7QUFBRSxJQUFJLElBQUUsQ0FBQyxHQUFFLEdBQUUsSUFBSyxDQUFBLElBQUUsS0FBRyxPQUFLLEVBQUUsRUFBRSxNQUFJLENBQUMsR0FBRSxFQUFFLEtBQUcsQ0FBQyxLQUFHLENBQUMsRUFBRSxhQUFXLEVBQUUsR0FBRSxXQUFVO1FBQUMsT0FBTTtRQUFFLFlBQVcsQ0FBQztJQUFDLEtBQUcsR0FBRSxFQUFDO0FBQUcsSUFBSSxJQUFFLFdBQVcsU0FBUyxRQUFNLEVBQUU7QUFBQyxJQUFJLElBQUUsSUFBSSxXQUFXLFNBQVMsT0FBSyxDQUFDO0FBQUUsSUFBSSxJQUFFLElBQUksSUFBSSxJQUFHLElBQUUsQ0FBQSxJQUFHLEVBQUUsSUFBSSxJQUFHLEtBQUcsRUFBRSxPQUFPLENBQUEsSUFBRyxFQUFFLFdBQVcsU0FBTyxFQUFFLFNBQVMsTUFBTSxJQUFJLENBQUEsSUFBRyxFQUFFLE1BQU0sTUFBTSxPQUFPLENBQUMsR0FBRSxDQUFDLEdBQUUsRUFBRSxHQUFJLENBQUEsQ0FBQyxDQUFDLEVBQUUsR0FBQyxHQUFFLENBQUEsR0FBRyxDQUFDO0FBQUcsSUFBSSxLQUFHLEVBQUUsY0FBYSxJQUFFLElBQUksRUFBRSxnQkFBYyxJQUFJLFlBQVUsUUFBTyxLQUFHO0FBQUksSUFBSSxJQUFFLENBQUMsSUFBRSxFQUFFLEVBQUMsR0FBRyxJQUFJLFFBQVEsSUFBSSxFQUFFLE9BQU8sSUFBRyxRQUFPO0FBQUcsSUFBSSxJQUFFLENBQUMsR0FBRyxJQUFJLFFBQVEsTUFBTSxxQkFBa0IsT0FBTyxJQUFHLFFBQU8sSUFBRyxJQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsd0JBQW9CLElBQUcsSUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLHdCQUFvQixJQUFHLElBQUUsR0FBRSxJQUFFLENBQUMsR0FBRyxJQUFJLE9BQUssRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSTtBQUFHLElBQUksSUFBRTtJQUFDLG1CQUFrQjtJQUFNLGdCQUFlO0lBQU0sV0FBVTtJQUFNLFlBQVc7UUFBQztLQUFlO0lBQUMsUUFBTztJQUFZLFFBQU87SUFBSyxpQkFBZ0I7SUFBK0YsWUFBVztJQUFtQixXQUFVO0lBQW1CLFdBQVU7SUFBUSxVQUFTO0lBQU0sY0FBYTtBQUFJO0FBQUUsT0FBTyxPQUFPLGdCQUFjLEVBQUU7QUFBUyxXQUFXLFVBQVE7SUFBQyxNQUFLLEVBQUU7SUFBQyxLQUFJO1FBQUMsU0FBUSxFQUFFO0lBQU87QUFBQztBQUFFLElBQUksSUFBRSxPQUFPLE9BQU87QUFBTyxTQUFTLEVBQUUsQ0FBQztJQUFFLEVBQUUsS0FBSyxJQUFJLEVBQUMsSUFBRyxJQUFJLENBQUMsTUFBSTtRQUFDLE1BQUssT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFO1FBQUMsa0JBQWlCLEVBQUU7UUFBQyxtQkFBa0IsRUFBRTtRQUFDLFFBQU8sU0FBUyxDQUFDO1lBQUUsSUFBSSxDQUFDLGlCQUFpQixLQUFLLEtBQUcsWUFBVztRQUFFO1FBQUUsU0FBUSxTQUFTLENBQUM7WUFBRSxJQUFJLENBQUMsa0JBQWtCLEtBQUs7UUFBRTtJQUFDLEdBQUUsT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFLEdBQUMsS0FBSztBQUFDO0FBQUMsT0FBTyxPQUFPLFNBQU87QUFBRSxPQUFPLE9BQU8sVUFBUSxDQUFDO0FBQUUsSUFBSSxJQUFFLFdBQVcsV0FBUyxXQUFXLFVBQVE7QUFBSyxlQUFlLEVBQUUsSUFBRSxDQUFDLENBQUM7SUFBRSxJQUFHLENBQUEsRUFBRSwyQkFBMEIsRUFBRSxRQUFRLFlBQVk7UUFBQyx3QkFBdUIsQ0FBQztJQUFDLEVBQUMsSUFBRyxXQUFXLFVBQVU7QUFBVTtBQUFDLFNBQVM7SUFBSSxPQUFNLENBQUMsRUFBRSxRQUFNLEVBQUUsU0FBTyxZQUFVLFNBQVMsU0FBUyxRQUFRLFlBQVUsSUFBRSxTQUFTLFdBQVMsY0FBWSxFQUFFO0FBQUk7QUFBQyxTQUFTO0lBQUksT0FBTSxDQUFDLEVBQUUsUUFBTSxFQUFFLFNBQU8sWUFBVSxjQUFZLEVBQUU7QUFBSTtBQUFDLFNBQVM7SUFBSSxPQUFPLEVBQUUsUUFBTSxTQUFTO0FBQUk7QUFBQyxJQUFJLElBQUU7QUFBeUIsSUFBSSxJQUFFO0lBQUMsZUFBYyxDQUFDO0lBQUUsaUJBQWdCLEVBQUU7SUFBQyxnQkFBZSxFQUFFO0FBQUEsR0FBRSxJQUFFO0lBQUssRUFBRSxnQkFBYyxDQUFDLEdBQUUsRUFBRSxrQkFBZ0IsRUFBRSxFQUFDLEVBQUUsaUJBQWUsRUFBRTtBQUFBO0FBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLEVBQUU7SUFBQyxJQUFJLElBQUUsRUFBRSxFQUFDLEdBQUUsR0FBRTtJQUFFLElBQUksS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QyxJQUFHLElBQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSx5Q0FBd0MsRUFBRyxHQUFHLEdBQUU7T0FBcEUiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLWVlY2E1N2JkMzgyNjM1OTQuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvc21hcnRyZWNydWl0ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBXPU9iamVjdC5jcmVhdGU7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBWPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcT0oZSx0LG8scik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG4gb2YgRyh0KSkhSi5jYWxsKGUsbikmJm4hPT1vJiZQKGUsbix7Z2V0OigpPT50W25dLGVudW1lcmFibGU6IShyPVYodCxuKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgej0oZSx0LG8pPT4obz1lIT1udWxsP1coWChlKSk6e30scSh0fHwhZXx8IWUuX19lc01vZHVsZT9QKG8sXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOm8sZSkpO3ZhciB5PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIEg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSz1uZXcgU2V0KHkpLEQ9ZT0+Sy5oYXMoZSksdWU9eS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBkZT1EKFwiLS1kcnktcnVuXCIpLF89KCk9PkQoXCItLXZlcmJvc2VcIil8fEgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsZmU9XygpO3ZhciB4PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBrPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksVD0oLi4uZSk9PngoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxBPSguLi5lKT0+eChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFE9MCxwPSguLi5lKT0+XygpJiZ4KGBcXHV7MUY3RTF9ICR7USsrfWAsLi4uZSk7dmFyIGM9e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wicGFnZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXHNpdGVzXFxcXHNtYXJ0cmVjcnVpdGVycy5qc1wiLFwiYnVuZGxlSWRcIjpcIjk0YzhhMWYwZDcyMWY0NjdcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiA0cEFwblxyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvc21hcnRyZWNydWl0ZXJzLmpzXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi4vb3B0aW9uLXJlc29sdmUtcm9sbG91dCAtPiBrd0g5cSAgPT4gIHNyYy9jb250ZW50cy9vcHRpb24tcmVzb2x2ZS1yb2xsb3V0LmpzXHJcbiAqICAgLi9hbnN3ZXIgLT4gYWh6VWkgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvc21hcnRyZWNydWl0ZXJzL2Fuc3dlci5qc1xyXG4gKiAgIC4vZWR1Y2F0aW9uLW9wZXJhdGlvbiAtPiA3Q0pyTyAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9zbWFydHJlY3J1aXRlcnMvZWR1Y2F0aW9uLW9wZXJhdGlvbi5qc1xyXG4gKiAgIC4vbG9jYXRpb24tb3BlcmF0aW9uIC0+IDhlaVNxICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL3NtYXJ0cmVjcnVpdGVycy9sb2NhdGlvbi1vcGVyYXRpb24uanNcclxuICogICAuL29wZXJhdGlvbnMgLT4gbHByMmQgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvc21hcnRyZWNydWl0ZXJzL29wZXJhdGlvbnMuanNcclxuICogICAuL3J1bGVzIC0+IGZHeUhFICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL3NtYXJ0cmVjcnVpdGVycy9ydWxlcy5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgQHBsYXNtb2hxL21lc3NhZ2luZyAtPiA5Mkd5QiAgPT4gIEBwbGFzbW9ocS9tZXNzYWdpbmcuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXIgLT4gN1Q1ZVcgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9hbnN3ZXIuanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvYmFzZS1maWxsZXIgLT4gOHhqNkYgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvYmFzZS1maWxsZXIuanNcclxuICogICB+Y29yZS9kb20gLT4gaExNSlggID0+ICBzcmMvY29yZS9kb20uanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqICAgfmNvcmUveHBhdGggLT4gYWdFNHUgID0+ICBzcmMvY29yZS94cGF0aC5qc1xyXG4gKiAgIH51dGlscy9maWVsZExhYmVsIC0+IDFSbUd3ICA9PiAgc3JjL3V0aWxzL2ZpZWxkTGFiZWwuanNcclxuICovXHJcblxyXG52YXIgbiA9IGUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO1xyXG5uLmRlZmluZUludGVyb3BGbGFnKHIpLCBuLmV4cG9ydChyLCBcIlNtYXJ0UmVjcnVpdGVyc1wiLCAoKSA9PiBXKTtcclxudmFyIG8gPSBlKFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiKSxcclxuICBpID0gZShcIn5jb250ZW50cy9zaXRlcy9iYXNlLWZpbGxlclwiKSxcclxuICBhID0gZShcIn5jb3JlL2VudW1zXCIpLFxyXG4gIGwgPSBlKFwifmNvcmUvZG9tXCIpLFxyXG4gIHMgPSBlKFwifmNvcmUveHBhdGhcIiksXHJcbiAgdSA9IGUoXCJ+dXRpbHMvZmllbGRMYWJlbFwiKSxcclxuICBjID0gZShcIi4vb3BlcmF0aW9uc1wiKSxcclxuICBkID0gZShcIi4vcnVsZXNcIiksXHJcbiAgZiA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXJcIiksXHJcbiAgcCA9IGUoXCIuL2Fuc3dlclwiKSxcclxuICBtID0gZShcIi4vbG9jYXRpb24tb3BlcmF0aW9uXCIpLFxyXG4gIGggPSBlKFwiLi9lZHVjYXRpb24tb3BlcmF0aW9uXCIpLFxyXG4gIGcgPSBlKFwiLi4vb3B0aW9uLXJlc29sdmUtcm9sbG91dFwiKTtcclxubGV0IGIgPVxyXG4gIC9eKD86Y29udGludWUoPzpcXHMrdG9cXHMrdGhlXFxzK25leHRcXHMrcGFnZXxcXHMrYXBwbGljYXRpb24pP3xuZXh0fHN1Ym1pdCg/OlxccythcHBsaWNhdGlvbik/fGFwcGx5KD86XFxzK25vdyk/fHJldmlld1xccythbmRcXHMrc3VibWl0fGZpbmlzaCkkL2k7XHJcblxyXG5mdW5jdGlvbiB5KGUpIHtcclxuICByZXR1cm4gKGUudGV4dENvbnRlbnQgfHwgZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpIHx8IGUuZ2V0QXR0cmlidXRlKFwidGl0bGVcIikgfHwgXCJcIikucmVwbGFjZShcclxuICAgIC9cXHMrL2csIFwiIFwiKS50cmltKClcclxufVxyXG5cclxuZnVuY3Rpb24gdihlKSB7XHJcbiAgcmV0dXJuIGUgaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCAmJiBlLmRpc2FibGVkIHx8IFwidHJ1ZVwiID09PSBlLmdldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIilcclxufVxyXG5sZXQgdyA9IHtcclxuICByZXF1ZXN0U3RlcDogYXN5bmMgZSA9PiBhd2FpdCAoMCwgby5zZW5kVG9CYWNrZ3JvdW5kKSh7XHJcbiAgICBuYW1lOiBcInJlc29sdmVBdXRvZmlsbENsaWVudFNlYXJjaFN0ZXBcIixcclxuICAgIGJvZHk6IGVcclxuICB9KSxcclxuICBjYXB0dXJlQ2FuZGlkYXRlczogYy5jYXB0dXJlU21hcnRSZWNydWl0ZXJzSW5zdGl0dXRpb25DYW5kaWRhdGVzLFxyXG4gIGNvbW1pdENhbmRpZGF0ZTogKGUsIHQsIHIpID0+ICgwLCBjLmZpbGxTbWFydFJlY3J1aXRlcnNJbnN0aXR1dGlvbkNhbmRpZGF0ZSkoZSwgdCwgcilcclxufTtcclxuXHJcbmZ1bmN0aW9uIFMoZSwgdCkge1xyXG4gIGxldCByID0gKDAsIHUubm9ybWFsaXplRmllbGRMYWJlbCkodCksXHJcbiAgICBuID0gZT8ucmVndWxhciB8fCB7fTtcclxuICBmb3IgKGxldCBbZSwgdF0gb2YgT2JqZWN0LmVudHJpZXMobikpXHJcbiAgICBpZiAoKDAsIHUubm9ybWFsaXplRmllbGRMYWJlbCkoZSkgPT09IHIpIHJldHVybiB0O1xyXG4gIGxldCBvID0gQXJyYXkuaXNBcnJheShlPy5maWxsRGF0YUxpc3QpID8gZS5maWxsRGF0YUxpc3QgOiBbXTtcclxuICBmb3IgKGxldCBlIG9mIG8pXHJcbiAgICBpZiAoKDAsIHUubm9ybWFsaXplRmllbGRMYWJlbCkoZT8ubmFtZSkgPT09IHIpIHJldHVybiBlLnZhbHVlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEUoZSkge1xyXG4gIHJldHVybiAoMCwgdS5ub3JtYWxpemVGaWVsZExhYmVsKShlKSA9PT0gKDAsIHUubm9ybWFsaXplRmllbGRMYWJlbCkoZFxyXG4gICAgLlNNQVJUUkVDUlVJVEVSU19QSE9ORV9DT1VOVFJZX0NPREVfTEFCRUwpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHgoZSwgdCkge1xyXG4gIHJldHVybiBFKGUubGFiZWwpID8gKDAsIGQubm9ybWFsaXplU21hcnRSZWNydWl0ZXJzUGhvbmVDb3VudHJ5VGV4dCkodCkgOiB0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEMoZSwgdCkge1xyXG4gIGxldCByID0ge307XHJcbiAgZm9yIChsZXQgbiBvZiBlKSB7XHJcbiAgICBpZiAobi50eXBlID09PSBhLkZJRUxEX1RZUEUuRURVQ0FUSU9OIHx8IG4udHlwZSA9PT0gYS5GSUVMRF9UWVBFLkVNUExPWU1FTlQpIGNvbnRpbnVlO1xyXG4gICAgbGV0IGUgPSBTKHQsIG4ubGFiZWwpO1xyXG4gICAgdm9pZCAwICE9PSBlICYmIChyW24ubGFiZWxdID0geChuLCBlKSlcclxuICB9XHJcbiAgcmV0dXJuIHJcclxufVxyXG5cclxuZnVuY3Rpb24gQShlLCB0KSB7XHJcbiAgbGV0IHIgPSAoMCwgcC5ub3JtYWxpemVTbWFydFJlY3J1aXRlcnNEYXRlUmVjb3JkRm9yUnVsZSkoZSwgdCksXHJcbiAgICBuID0gKDAsIHUubm9ybWFsaXplRmllbGRMYWJlbCkodCk7XHJcbiAgZm9yIChsZXQgW2UsIHRdIG9mIE9iamVjdC5lbnRyaWVzKHIpKVxyXG4gICAgaWYgKCgwLCB1Lm5vcm1hbGl6ZUZpZWxkTGFiZWwpKGUpID09PSBuKSByZXR1cm4gdFxyXG59XHJcblxyXG5mdW5jdGlvbiBrKGUsIHQpIHtcclxuICBsZXQgciA9IGVbMF07XHJcbiAgcmV0dXJuIHQubWFwKCh0LCBuKSA9PiB7XHJcbiAgICBsZXQgbyA9IGVbbl0gfHwgcixcclxuICAgICAgaSA9IG8/LmNoaWxkcmVuIHx8IFtdLFxyXG4gICAgICBhID0ge307XHJcbiAgICBmb3IgKGxldCBlIG9mIGkpIHtcclxuICAgICAgbGV0IHIgPSBBKHQsIGUubGFiZWwpO1xyXG4gICAgICB2b2lkIDAgIT09IHIgJiYgKGFbZS5sYWJlbF0gPSByKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBUKGUpIHtcclxuICByZXR1cm4gZSAmJiAoZS50ZXh0Q29udGVudD8ucmVwbGFjZT8uKC9cXHMrL2csIFwiIFwiKT8udHJpbT8uKCkgfHwgZS5nZXRBdHRyaWJ1dGU/LihcImxhYmVsXCIpPy50cmltPy5cclxuICAoKSB8fCBlLmdldEF0dHJpYnV0ZT8uKFwidmFsdWVcIik/LnRyaW0/LigpKSB8fCBcIlwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEYoZSkge1xyXG4gIGxldCB0ID0gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGw/LihcInNwbC1zZWxlY3Qtb3B0aW9uXCIpIHx8IFtdKSxcclxuICAgIHIgPSBBcnJheS5mcm9tKGUuc2hhZG93Um9vdD8ucXVlcnlTZWxlY3RvckFsbD8uKFwic3BsLXNlbGVjdC1vcHRpb25cIikgfHwgW10pO1xyXG4gIHJldHVybiBbLi4udCwgLi4ucl1cclxufVxyXG5cclxuZnVuY3Rpb24gSShlKSB7XHJcbiAgbGV0IHQgPSBlLmdldEF0dHJpYnV0ZT8uKFwidmFsdWVcIik/LnRyaW0/LigpIHx8IChcInN0cmluZ1wiID09IHR5cGVvZiBlLnZhbHVlID8gZS52YWx1ZS50cmltKCkgOiBcIlwiKSxcclxuICAgIHIgPSBGKGUpO1xyXG4gIGlmICh0KSB7XHJcbiAgICBsZXQgZSA9IHIuZmluZChlID0+IGUuZ2V0QXR0cmlidXRlPy4oXCJ2YWx1ZVwiKSA9PT0gdCksXHJcbiAgICAgIG4gPSBUKGUgfHwgbnVsbCk7XHJcbiAgICBpZiAobikgcmV0dXJuIG5cclxuICB9XHJcbiAgbGV0IG4gPSBlLnF1ZXJ5U2VsZWN0b3I/LignW2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJdLCBzcGwtc2VsZWN0LW9wdGlvbltzZWxlY3RlZF0nKSxcclxuICAgIG8gPSBUKG4pO1xyXG4gIGlmIChvKSByZXR1cm4gbztcclxuICBsZXQgaSA9IGUuc2hhZG93Um9vdD8ucXVlcnlTZWxlY3Rvcj8uKCdbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0sIHNwbC1zZWxlY3Qtb3B0aW9uW3NlbGVjdGVkXScpLFxyXG4gICAgYSA9IFQoaSk7XHJcbiAgaWYgKGEpIHJldHVybiBhO1xyXG4gIGxldCBsID0gZS5zaGFkb3dSb290Py5xdWVyeVNlbGVjdG9yPy4oXCJidXR0b25cIik7XHJcbiAgcmV0dXJuIGw/LnRleHRDb250ZW50Py50cmltKCkgPyBsLnRleHRDb250ZW50LnRyaW0oKSA6IHQgfHwgZS50ZXh0Q29udGVudD8udHJpbT8uKCkgfHwgXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBqKGUpIHtcclxuICBpZiAoIWUpIHJldHVybiBcIlwiO1xyXG4gIGlmIChlLnRhZ05hbWU/LnRvTG93ZXJDYXNlPy4oKSA9PT0gXCJzcGwtc2VsZWN0XCIpIHJldHVybiBJKGUpO1xyXG4gIGlmICh2b2lkIDAgIT09IGUudmFsdWUpIHJldHVybiBlLnZhbHVlO1xyXG4gIGxldCB0ID0gZS5zaGFkb3dSb290Py5xdWVyeVNlbGVjdG9yPy4oXCJpbnB1dCwgdGV4dGFyZWFcIik7XHJcbiAgaWYgKHQgJiYgdm9pZCAwICE9PSB0LnZhbHVlKSByZXR1cm4gdC52YWx1ZTtcclxuICBsZXQgciA9IGUucXVlcnlTZWxlY3Rvcj8uKCdbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0sIHNwbC1zZWxlY3Qtb3B0aW9uW3NlbGVjdGVkXScpO1xyXG4gIGlmIChyPy50ZXh0Q29udGVudD8udHJpbSgpKSByZXR1cm4gci50ZXh0Q29udGVudC50cmltKCk7XHJcbiAgbGV0IG4gPSBlLnNoYWRvd1Jvb3Q/LnF1ZXJ5U2VsZWN0b3I/LignW2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJdLCBzcGwtc2VsZWN0LW9wdGlvbltzZWxlY3RlZF0nKTtcclxuICBpZiAobj8udGV4dENvbnRlbnQ/LnRyaW0oKSkgcmV0dXJuIG4udGV4dENvbnRlbnQudHJpbSgpO1xyXG4gIGxldCBvID0gZS5zaGFkb3dSb290Py5xdWVyeVNlbGVjdG9yPy4oXCJidXR0b25cIik7XHJcbiAgcmV0dXJuIG8/LnRleHRDb250ZW50Py50cmltKCkgPyBvLnRleHRDb250ZW50LnRyaW0oKSA6IGUudGV4dENvbnRlbnQ/LnRyaW0/LigpIHx8IFwiXCJcclxufVxyXG5cclxuZnVuY3Rpb24gRChlKSB7XHJcbiAgcmV0dXJuIFN0cmluZyhlID8/IFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnJlcGxhY2UoL1xccypcXHUwMGQ3XFxzKiQvLCBcIlwiKS50cmltKClcclxufVxyXG5cclxuZnVuY3Rpb24gUChlKSB7XHJcbiAgaWYgKCFlPy5xdWVyeVNlbGVjdG9yQWxsKSByZXR1cm4gW107XHJcbiAgbGV0IHQgPSBbXCJzcGwtdGFnXCIsICdbY2xhc3MqPVwidGFnXCJdJywgJ1tjbGFzcyo9XCJjaGlwXCJdJywgJ1tjbGFzcyo9XCJwaWxsXCJdJyxcclxuICAgICAgJ1tjbGFzcyo9XCJzZWxlY3RlZC12YWx1ZVwiXScsICdbY2xhc3MqPVwic2VsZWN0ZWQtb3B0aW9uXCJdJ1xyXG4gICAgXSxcclxuICAgIHIgPSBbXTtcclxuICBmb3IgKGxldCBuIG9mIHQpIHtcclxuICAgIGxldCB0ID0gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwobikgfHwgW10pO1xyXG4gICAgZm9yIChsZXQgZSBvZiB0KSB7XHJcbiAgICAgIGxldCB0ID0gRChlLnRleHRDb250ZW50KTtcclxuICAgICAgdCAmJiAhci5pbmNsdWRlcyh0KSAmJiByLnB1c2godClcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJcclxufVxyXG5cclxuZnVuY3Rpb24gXyhlKSB7XHJcbiAgbGV0IHQgPSBlPy5jbG9zZXN0Py4oJ2RpdltjbGFzcyo9XCJjLXNwbC1tdWx0aXNlbGVjdC1hdXRvY29tcGxldGUtdHJpZ2dlclwiXScpLFxyXG4gICAgciA9IGU/LmNsb3Nlc3Q/LihcInNwbC1tdWx0aXNlbGVjdC1hdXRvY29tcGxldGVcIiksXHJcbiAgICBuID0gW3QsIHQ/LnNoYWRvd1Jvb3QsIHIsIHI/LnNoYWRvd1Jvb3RdLmZpbHRlcihCb29sZWFuKTtcclxuICBmb3IgKGxldCBlIG9mIG4pIHtcclxuICAgIGxldCB0ID0gUChlKTtcclxuICAgIGlmICh0Lmxlbmd0aCA+IDApIHJldHVybiB0LmpvaW4oXCIsIFwiKVxyXG4gIH1cclxuICByZXR1cm4gRChqKGUpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBMKGUpIHtcclxuICBsZXQgdCA9IGUuJGNoZWNrYm94cyB8fCBbXTtcclxuICByZXR1cm4gdC5zb21lKGUgPT4gZS5jaGVja2VkKSA/IFwiWWVzXCIgOiBcIk5vXCJcclxufVxyXG5cclxuZnVuY3Rpb24gUihlKSB7XHJcbiAgbGV0IHQgPSBlLiRyYWRpb1BhcmVudCxcclxuICAgIHIgPSBBcnJheS5mcm9tKHQ/LnF1ZXJ5U2VsZWN0b3JBbGw/LihcInNwbC1yYWRpb1wiKSB8fCBbXSk7XHJcbiAgZm9yIChsZXQgZSBvZiByKSB7XHJcbiAgICBsZXQgdCA9IGUuc2hhZG93Um9vdD8ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XHJcbiAgICBpZiAoIXQ/LmNoZWNrZWQpIGNvbnRpbnVlO1xyXG4gICAgbGV0IHIgPSBlLnNoYWRvd1Jvb3Q/LnF1ZXJ5U2VsZWN0b3IoJ3NwYW5bY2xhc3MqPVwiYy1zcGwtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXCJdJyk7XHJcbiAgICByZXR1cm4gcj8udGV4dENvbnRlbnQ/LnRyaW0oKSB8fCB0LnZhbHVlIHx8IFwiXCJcclxuICB9XHJcbiAgcmV0dXJuIFwiXCJcclxufVxyXG5cclxuZnVuY3Rpb24gTyhlKSB7XHJcbiAgbGV0IHQ7XHJcbiAgcmV0dXJuIHQgPSBlLnR5cGUgPT09IGEuRklFTERfVFlQRS5DSEVDS0JPWCA/IEwoZSkgOiBlLnR5cGUgPT09IGEuRklFTERfVFlQRS5SQURJT0dST1VQID8gUihlKSA6IGVcclxuICAgIC50eXBlID09PSBhLkZJRUxEX1RZUEUuTVVMVElfU0VMRUNUID8gXyhlLiRpbnB1dCkgOiBqKGUuJGlucHV0KSwgeChlLCB0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBNKGUpIHtcclxuICBsZXQgdCA9IHt9O1xyXG4gIGZvciAobGV0IHIgb2YgZSkgci50eXBlICE9PSBhLkZJRUxEX1RZUEUuRURVQ0FUSU9OICYmIHIudHlwZSAhPT0gYS5GSUVMRF9UWVBFLkVNUExPWU1FTlQgJiYgKHRbclxyXG4gICAgLmxhYmVsXSA9IE8ocikpO1xyXG4gIHJldHVybiB0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE4oZSkge1xyXG4gIHJldHVybiBlLm1hcChlID0+IE0oZS5jaGlsZHJlbiB8fCBbXSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uICQoZSkge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gKDAsIGQucHJvY2Vzc0VkdU9yV29ya0V4cEFud3NlcikoZSkgfHwgW11cclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBbXVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQihlKSB7XHJcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoZSkuc29tZShlID0+IFN0cmluZyhlID8/IFwiXCIpLnRyaW0oKSlcclxufVxyXG5cclxuZnVuY3Rpb24gcShlKSB7XHJcbiAgcmV0dXJuIFN0cmluZyhlID8/IFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFUoZSkge1xyXG4gIGlmIChcInVuZGVmaW5lZFwiID09IHR5cGVvZiBkb2N1bWVudCkgcmV0dXJuIFtdO1xyXG4gIGxldCB0ID0gZSA/IFwib2MtZXhwZXJpZW5jZVwiIDogXCJvYy1lZHVjYXRpb25cIixcclxuICAgIHIgPSBlID8gXCJvYy1leHBlcmllbmNlLWVudHJ5XCIgOiBcIm9jLWVkdWNhdGlvbi1lbnRyeVwiLFxyXG4gICAgbiA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0KT8ucXVlcnlTZWxlY3RvckFsbChyKSB8fCBbXSk7XHJcbiAgcmV0dXJuIG4ubWFwKGUgPT4gcShlLnRleHRDb250ZW50KSkuZmlsdGVyKEJvb2xlYW4pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEgoZSwgdCwgcikge1xyXG4gIGxldCBuID0gciA/IFtcIlRpdGxlXCIsIFwiQ29tcGFueVwiLCBcIk9mZmljZSBsb2NhdGlvblwiXSA6IFtcIkluc3RpdHV0aW9uXCIsIFwiTWFqb3JcIiwgXCJEZWdyZWVcIl07XHJcbiAgcmV0dXJuIG4ucmVkdWNlKChyLCBuKSA9PiB7XHJcbiAgICBsZXQgbyA9IHEoZVtuXSk7XHJcbiAgICByZXR1cm4gbyAmJiB0LmluY2x1ZGVzKG8pID8gciArIDEgOiByXHJcbiAgfSwgMClcclxufVxyXG5cclxuZnVuY3Rpb24gWShlLCB0KSB7XHJcbiAgbGV0IHIgPSBVKHQpO1xyXG4gIGlmICgwID09PSByLmxlbmd0aCkgcmV0dXJuIFtdO1xyXG4gIGxldCBuID0gbmV3IFNldDtcclxuICByZXR1cm4gci5tYXAoKHIsIG8pID0+IHtcclxuICAgIGxldCBpID0gLTEsXHJcbiAgICAgIGEgPSAwO1xyXG4gICAgaWYgKGUuZm9yRWFjaCgoZSwgbykgPT4ge1xyXG4gICAgICAgIGlmIChuLmhhcyhvKSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBsID0gSChlLCByLCB0KTtcclxuICAgICAgICBsID4gYSAmJiAoYSA9IGwsIGkgPSBvKVxyXG4gICAgICB9KSwgaSA+PSAwKSByZXR1cm4gbi5hZGQoaSksIGVbaV07XHJcbiAgICBsZXQgbCA9IGVbb107XHJcbiAgICBpZiAobCkgcmV0dXJuIG4uYWRkKG8pLCBsXHJcbiAgfSkuZmlsdGVyKEJvb2xlYW4pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHooZSwgdCkge1xyXG4gIGxldCByID0gJChlKSxcclxuICAgIG4gPSBOKHIpO1xyXG4gIGlmIChuLnNvbWUoQikpIHtcclxuICAgIGxldCB0ID0gWShuLCBlKTtcclxuICAgIHJldHVybiB0Lmxlbmd0aCA+IDAgPyB0IDogblxyXG4gIH1cclxuICByZXR1cm4gWShOKHQpLCBlKS5maWx0ZXIoQilcclxufVxyXG5cclxuZnVuY3Rpb24gVihlLCB0LCByKSB7XHJcbiAgbGV0IG4gPSBrKHQsIHIpLFxyXG4gICAgbyA9IFkobiwgZSk7XHJcbiAgcmV0dXJuIG8ubGVuZ3RoID4gMCA/IG8gOiBuXHJcbn1cclxuY2xhc3MgVyBleHRlbmRzIGkuQmFzZUZpbGxlciB7XHJcbiAgaXNTbWFydFJlY3J1aXRlcnNJbnN0aXR1dGlvblJlc29sdmVFbmFibGVkKCkge1xyXG4gICAgcmV0dXJuIGcuVjExOV9PUFRJT05fUkVTT0xWRV9ST0xMT1VULnNtYXJ0UmVjcnVpdGVyc0VkdWNhdGlvbkluc3RpdHV0aW9uXHJcbiAgfVxyXG4gIGdldEZpZWxkSGFuZGxlcnMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBbYS5GSUVMRF9UWVBFLlRFWFRdOiBhc3luYyAoZSwgdCkgPT4ge1xyXG4gICAgICAgIGxldCByID0gdD8uWzBdO1xyXG4gICAgICAgIGlmICgoMCwgbS5pc1NtYXJ0UmVjcnVpdGVyc0NpdHlBdXRvY29tcGxldGVSdWxlKShlKSkgcmV0dXJuIHRoaXNcclxuICAgICAgICAgIC5maWxsU21hcnRSZWNydWl0ZXJzQ2l0eShlLCBTdHJpbmcociA/PyBcIlwiKSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTbWFydFJlY3J1aXRlcnNJbnN0aXR1dGlvblJlc29sdmVFbmFibGVkKCkgJiYgKDAsIGhcclxuICAgICAgICAgICAgLmlzU21hcnRSZWNydWl0ZXJzSW5zdGl0dXRpb25SdWxlKShlKSkgdHJ5IHtcclxuICAgICAgICAgIGxldCB0ID0gYXdhaXQgKDAsIGgucmVzb2x2ZVNtYXJ0UmVjcnVpdGVyc0luc3RpdHV0aW9uQ2xpZW50U2VhcmNoKShlLiRpbnB1dCxcclxuICAgICAgICAgICAgU3RyaW5nKHIgPz8gXCJcIiksIHcpO1xyXG4gICAgICAgICAgcmV0dXJuIHQuc3VjY2VzcyB8fCAodGhpcy5lZHVjYXRpb25JbnN0aXR1dGlvbkZhaWxlZCA9ICEwLCBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICAgIFwiW1NtYXJ0UmVjcnVpdGVyc11bSW5zdGl0dXRpb25dIGNsaWVudC1zZWFyY2gtZmFpbGVkXCIsIHtcclxuICAgICAgICAgICAgICByZWFzb246IHQuZmFpbHVyZVJlYXNvbiB8fCBcInVua25vd24tZXJyb3JcIixcclxuICAgICAgICAgICAgICByb3VuZENvdW50OiB0LnJvdW5kcy5sZW5ndGhcclxuICAgICAgICAgICAgfSksIGF3YWl0IHRoaXMubWFya1NtYXJ0UmVjcnVpdGVyc0VkdWNhdGlvbkluc3RpdHV0aW9uRmFpbGVkKGUuJGlucHV0LCB7XHJcbiAgICAgICAgICAgIGVycm9yOiBFcnJvcihcImNsaWVudC1zZWFyY2gtZmFpbGVkXCIpLFxyXG4gICAgICAgICAgICBzdGFnZTogXCJjb21taXRcIlxyXG4gICAgICAgICAgfSkpLCB0LnN1Y2Nlc3NcclxuICAgICAgICB9IGNhdGNoICh0KSB7XHJcbiAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5tYXJrU21hcnRSZWNydWl0ZXJzRWR1Y2F0aW9uSW5zdGl0dXRpb25GYWlsZWQoZS4kaW5wdXQsIHtcclxuICAgICAgICAgICAgZXJyb3I6IHQsXHJcbiAgICAgICAgICAgIHN0YWdlOiBcImNvbW1pdFwiXHJcbiAgICAgICAgICB9KSwgITFcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHIpIHJldHVybiAoMCwgYy5maWxsSW5wdXRUZXh0RmllbGQpKGUuJGlucHV0LCBTdHJpbmcociA/PyBcIlwiKSlcclxuICAgICAgfSxcclxuICAgICAgW2EuRklFTERfVFlQRS5TRUxFQ1RdOiBhc3luYyAoZSwgdCkgPT4gKDAsIG0uaXNTbWFydFJlY3J1aXRlcnNDaXR5QXV0b2NvbXBsZXRlUnVsZSkoZSkgP1xyXG4gICAgICAgIHRoaXMuZmlsbFNtYXJ0UmVjcnVpdGVyc0NpdHkoZSwgU3RyaW5nKHQ/LlswXSA/PyBcIlwiKSkgOiAoMCwgYy5maWxsU2VsZWN0RmllbGQpKGUsIHQpLFxyXG4gICAgICBbYS5GSUVMRF9UWVBFLkNIRUNLQk9YXTogKGUsIHQpID0+ICgwLCBjLmZpbGxDaGVja2JveEZpZWxkKShlLCB0KSxcclxuICAgICAgW2EuRklFTERfVFlQRS5SQURJT0dST1VQXTogKGUsIHQpID0+ICgwLCBjLmZpbGxSYWRpb0dyb3VwRmlsZWQpKGUsIHQpLFxyXG4gICAgICBbYS5GSUVMRF9UWVBFLk1VTFRJX1NFTEVDVF06IChlLCB0KSA9PiAoMCwgYy5maWxsTXVsdGlTZWxlY3RGaWVsZCkoZSwgdClcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgZmlsbFNtYXJ0UmVjcnVpdGVyc0NpdHkoZSwgdCkge1xyXG4gICAgbGV0IHIgPSBlLiRpbnB1dDtcclxuICAgIGlmICh0aGlzLmRlZmVycmVkU21hcnRSZWNydWl0ZXJzQ2l0eVZhbHVlcy5oYXMocikpIHtcclxuICAgICAgbGV0IGUgPSB0aGlzLmRlZmVycmVkU21hcnRSZWNydWl0ZXJzQ2l0eVZhbHVlcy5nZXQocik7XHJcbiAgICAgIHJldHVybiB0aGlzLmRlZmVycmVkU21hcnRSZWNydWl0ZXJzQ2l0eVZhbHVlcy5kZWxldGUociksIGNvbnNvbGUuaW5mbyhcclxuICAgICAgICBcIltTbWFydFJlY3J1aXRlcnNdW0NpdHldIGNvbW1pdC1yZXN1bWVkXCIsIHtcclxuICAgICAgICAgIGhhc1Jlc29sdmVkQ2l0eTogISFlXHJcbiAgICAgICAgfSksIHRoaXMuY29tbWl0U21hcnRSZWNydWl0ZXJzQ2l0eShyLCBlID8/IFwiXCIpXHJcbiAgICB9XHJcbiAgICBsZXQgbiA9IGF3YWl0IHRoaXMucmVzb2x2ZVNtYXJ0UmVjcnVpdGVyc0NpdHkociwgdCk7XHJcbiAgICByZXR1cm4gdGhpcy5jb21taXRTbWFydFJlY3J1aXRlcnNDaXR5KHIsIG4pXHJcbiAgfVxyXG4gIGFzeW5jIHJlc29sdmVTbWFydFJlY3J1aXRlcnNDaXR5KGUsIHQsIHIpIHtcclxuICAgIGxldCBuID0gKDAsIG0uZ2V0U21hcnRSZWNydWl0ZXJzQ2l0eU9yaWdpbmFsQW5zd2VyKSh0aGlzLmFuc3dlciwgdCksXHJcbiAgICAgIGkgPSBEYXRlLm5vdygpO1xyXG4gICAgaWYgKHZvaWQgMCA9PT0gciAmJiAoZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWpyLXNtYXJ0cmVjcnVpdGVycy1jaXR5LXJlc29sdmUtc3RhZ2VcIixcclxuICAgICAgICBcInN0YXJ0ZWRcIiksIGNvbnNvbGUuaW5mbyhcIltTbWFydFJlY3J1aXRlcnNdW0NpdHldIHJlc29sdmUtc3RhcnRcIiwge1xyXG4gICAgICAgICAgYW5zd2VyU291cmNlOiBuLnNvdXJjZSxcclxuICAgICAgICAgIGhhc09yaWdpbmFsQW5zd2VyOiAhIW4udmFsdWVcclxuICAgICAgICB9KSksICFuLnZhbHVlKSByZXR1cm4gbnVsbDtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB0ID0gdm9pZCAwID09PSByID8gYXdhaXQgKDAsIGMuY2FwdHVyZVNtYXJ0UmVjcnVpdGVyc0NpdHlSZXF1ZXN0KShlLCBuLnZhbHVlKSA6IHI7XHJcbiAgICAgIGlmICghdCkgcmV0dXJuIGNvbnNvbGUud2FybihcIltTbWFydFJlY3J1aXRlcnNdW0NpdHldIHJlc29sdmUtc2tpcHBlZFwiLCB7XHJcbiAgICAgICAgICByZWFzb246IFwiYXV0b2NvbXBsZXRlLXJlcXVlc3Qtbm90LWNhcHR1cmVkXCJcclxuICAgICAgICB9KSwgZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWpyLXNtYXJ0cmVjcnVpdGVycy1jaXR5LXJlc29sdmUtc3RhZ2VcIiwgXCJyZXF1ZXN0LW1pc3NpbmdcIiksXHJcbiAgICAgICAgbnVsbDtcclxuICAgICAgbGV0IGEgPSAoMCwgbS5idWlsZFNtYXJ0UmVjcnVpdGVyc0NpdHlPcGVyYXRpb24pKHtcclxuICAgICAgICAgIHJlcXVlc3RVcmw6IHQsXHJcbiAgICAgICAgICBvcmlnaW5hbEFuc3dlcjogbi52YWx1ZVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGwgPSBhd2FpdCAoMCwgby5zZW5kVG9CYWNrZ3JvdW5kKSh7XHJcbiAgICAgICAgICBuYW1lOiBcInJlc29sdmVBdXRvZmlsbE9wZXJhdGlvblwiLFxyXG4gICAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgICBvcGVyYXRpb246IGEsXHJcbiAgICAgICAgICAgIHNvdXJjZTogXCJzbWFydHJlY3J1aXRlcnNcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHMgPSAoMCwgbS5nZXRTbWFydFJlY3J1aXRlcnNSZXNvbHZlZENpdHlWYWx1ZSkobCk7XHJcbiAgICAgIHJldHVybiBjb25zb2xlLmluZm8oXCJbU21hcnRSZWNydWl0ZXJzXVtDaXR5XSByZXNvbHZlLXJlc3VsdFwiLCB7XHJcbiAgICAgICAgYWN0aW9uOiBsPy5yZXN1bHQ/LmFjdGlvbiA/PyBcIm1pc3NpbmdcIixcclxuICAgICAgICBzZWxlY3RlZENvdW50OiBsPy5yZXN1bHQ/LnNlbGVjdGVkX3ZhbHVlcz8ubGVuZ3RoID8/IDAsXHJcbiAgICAgICAgZWxhcHNlZE1zOiBEYXRlLm5vdygpIC0gaVxyXG4gICAgICB9KSwgcyB8fCBudWxsXHJcbiAgICB9IGNhdGNoICh0KSB7XHJcbiAgICAgIHJldHVybiBlLnNldEF0dHJpYnV0ZShcImRhdGEtanItc21hcnRyZWNydWl0ZXJzLWNpdHktcmVzb2x2ZS1zdGFnZVwiLCBcImZhaWxlZFwiKSwgY29uc29sZVxyXG4gICAgICAgIC53YXJuKFwiW1NtYXJ0UmVjcnVpdGVyc11bQ2l0eV0gcmVzb2x2ZS1mYWlsZWRcIiwge1xyXG4gICAgICAgICAgcmVhc29uOiB0IGluc3RhbmNlb2YgRXJyb3IgPyB0Lm1lc3NhZ2UgOiBcInVua25vd24tZXJyb3JcIixcclxuICAgICAgICAgIGVsYXBzZWRNczogRGF0ZS5ub3coKSAtIGlcclxuICAgICAgICB9KSwgbnVsbFxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBjb21taXRTbWFydFJlY3J1aXRlcnNDaXR5KGUsIHQpIHtcclxuICAgIGlmICghdCkge1xyXG4gICAgICBsZXQgdCA9IFwiZmFpbGVkXCIgPT09IGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1qci1zbWFydHJlY3J1aXRlcnMtY2l0eS1yZXNvbHZlLXN0YWdlXCIpO1xyXG4gICAgICByZXR1cm4gYXdhaXQgKDAsIGMuY2xlYXJTbWFydFJlY3J1aXRlcnNDaXR5RmllbGQpKGUpLCBlLnNldEF0dHJpYnV0ZShcclxuICAgICAgICBcImRhdGEtanItc21hcnRyZWNydWl0ZXJzLWNpdHktcmVzb2x2ZS1zdGFnZVwiLCB0ID8gXCJmYWlsZWRcIiA6IFwiZW1wdHktcmVzdWx0XCIpLCAhMVxyXG4gICAgfVxyXG4gICAgbGV0IHIgPSBhd2FpdCAoMCwgYy5maWxsUmVzb2x2ZWRTbWFydFJlY3J1aXRlcnNDaXR5RmllbGQpKGUsIHQpO1xyXG4gICAgcmV0dXJuIGUuc2V0QXR0cmlidXRlKFwiZGF0YS1qci1zbWFydHJlY3J1aXRlcnMtY2l0eS1yZXNvbHZlLXN0YWdlXCIsIHIgPyBcImNvbW1pdHRlZFwiIDpcclxuICAgICAgXCJjb21taXQtZmFpbGVkXCIpLCByXHJcbiAgfVxyXG4gIGFzeW5jIGZpbGxSZWd1bGFyRmllbGRzKGUpIHtcclxuICAgIHRoaXMuZGVmZXJyZWRTbWFydFJlY3J1aXRlcnNDaXR5VmFsdWVzLmNsZWFyKCk7XHJcbiAgICBsZXQgdCA9IGUuZmlsdGVyKG0uaXNTbWFydFJlY3J1aXRlcnNDaXR5QXV0b2NvbXBsZXRlUnVsZSk7XHJcbiAgICBpZiAoMSAhPT0gdC5sZW5ndGgpIHtcclxuICAgICAgYXdhaXQgc3VwZXIuZmlsbFJlZ3VsYXJGaWVsZHMoZSk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgbGV0IFtyXSA9IHQsIG4gPSByLiRpbnB1dCwgbyA9IFN0cmluZygoMCwgZi5maW5kVmFsdWVJblJlY29yZCkoci5sYWJlbCwgdGhpcy5hbnN3ZXJcclxuICAgICAgICAucmVndWxhcikgPz8gXCJcIiksIGkgPSBlLmZpbHRlcihlID0+ICEoMCwgbS5pc1NtYXJ0UmVjcnVpdGVyc0NpdHlBdXRvY29tcGxldGVSdWxlKShlKSksXHJcbiAgICAgIGEgPSAoMCwgbS5nZXRTbWFydFJlY3J1aXRlcnNDaXR5T3JpZ2luYWxBbnN3ZXIpKHRoaXMuYW5zd2VyLCBvKSwgbCA9IERhdGUubm93KCksIHMgPSBudWxsO1xyXG4gICAgaWYgKGEudmFsdWUpIHtcclxuICAgICAgbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWpyLXNtYXJ0cmVjcnVpdGVycy1jaXR5LXJlc29sdmUtc3RhZ2VcIiwgXCJzdGFydGVkXCIpLCBjb25zb2xlLmluZm8oXHJcbiAgICAgICAgXCJbU21hcnRSZWNydWl0ZXJzXVtDaXR5XSByZXNvbHZlLXN0YXJ0XCIsIHtcclxuICAgICAgICAgIGFuc3dlclNvdXJjZTogYS5zb3VyY2UsXHJcbiAgICAgICAgICBoYXNPcmlnaW5hbEFuc3dlcjogITBcclxuICAgICAgICB9KTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBzID0gYXdhaXQgKDAsIGMuY2FwdHVyZVNtYXJ0UmVjcnVpdGVyc0NpdHlSZXF1ZXN0KShuLCBhLnZhbHVlLCAyKVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWpyLXNtYXJ0cmVjcnVpdGVycy1jaXR5LXJlc29sdmUtc3RhZ2VcIiwgXCJmYWlsZWRcIiksIGNvbnNvbGUud2FybihcclxuICAgICAgICAgIFwiW1NtYXJ0UmVjcnVpdGVyc11bQ2l0eV0gcmVzb2x2ZS1mYWlsZWRcIiwge1xyXG4gICAgICAgICAgICByZWFzb246IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6IFwidW5rbm93bi1lcnJvclwiLFxyXG4gICAgICAgICAgICBlbGFwc2VkTXM6IERhdGUubm93KCkgLSBsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmluZm8oXCJbU21hcnRSZWNydWl0ZXJzXVtDaXR5XSByZXNvbHZlLWRlZmVycmVkXCIsIHtcclxuICAgICAgaW1tZWRpYXRlUnVsZUNvdW50OiBpLmxlbmd0aCxcclxuICAgICAgaGFzQ2FwdHVyZWRSZXF1ZXN0OiAhIXNcclxuICAgIH0pLCBhd2FpdCAoMCwgbS5ydW5EZWZlcnJlZFNtYXJ0UmVjcnVpdGVyc0NpdHlSZXNvbHV0aW9uKSh7XHJcbiAgICAgIHN0YXJ0UmVzb2x2ZTogKCkgPT4gcyA/IHRoaXMucmVzb2x2ZVNtYXJ0UmVjcnVpdGVyc0NpdHkobiwgbywgcykgOiBQcm9taXNlLnJlc29sdmUoXHJcbiAgICAgICAgbnVsbCksXHJcbiAgICAgIGZpbGxPdGhlckZpZWxkczogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2YgKDAsIGYuZ2V0UmVndWxhck9wZXJhdGlvbnMpKGksIHRoaXMuYW5zd2VyLnJlZ3VsYXIsIHRoaXNcclxuICAgICAgICAgICAgLm9wZXJhdGlvbkNvbmZpZykpIHRoaXMudGFza1F1ZXVlLmFkZChlKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKVxyXG4gICAgICB9LFxyXG4gICAgICBjb21taXRSZXNvbHZlZENpdHk6IGFzeW5jIGUgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IHQgb2YgKHRoaXMuZGVmZXJyZWRTbWFydFJlY3J1aXRlcnNDaXR5VmFsdWVzLnNldChuLCBlKSwgY29uc29sZS5pbmZvKFxyXG4gICAgICAgICAgICBcIltTbWFydFJlY3J1aXRlcnNdW0NpdHldIHJlc29sdmUtcmVhZHlcIiwge1xyXG4gICAgICAgICAgICAgIGhhc1Jlc29sdmVkQ2l0eTogISFlLFxyXG4gICAgICAgICAgICAgIGVsYXBzZWRNczogRGF0ZS5ub3coKSAtIGxcclxuICAgICAgICAgICAgfSksICgwLCBmLmdldFJlZ3VsYXJPcGVyYXRpb25zKShbcl0sIHRoaXMuYW5zd2VyLnJlZ3VsYXIsIHRoaXNcclxuICAgICAgICAgICAgLm9wZXJhdGlvbkNvbmZpZykpKSB0aGlzLnRhc2tRdWV1ZS5hZGQodCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgYXN5bmMgbWFya1NtYXJ0UmVjcnVpdGVyc0VkdWNhdGlvbkluc3RpdHV0aW9uRmFpbGVkKGUsIHQpIHtcclxuICAgIHRoaXMuZWR1Y2F0aW9uSW5zdGl0dXRpb25GYWlsZWQgPSAhMCwgdCAmJiBjb25zb2xlLndhcm4oXHJcbiAgICAgIGBbU21hcnRSZWNydWl0ZXJzXVtJbnN0aXR1dGlvbl0gJHt0LnN0YWdlfS1mYWlsZWRgLCB7XHJcbiAgICAgICAgcmVhc29uOiB0LmVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyB0LmVycm9yLm5hbWUgOiBcInVua25vd24tZXJyb3JcIlxyXG4gICAgICB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0ICgwLCBjLmNsZWFyU21hcnRSZWNydWl0ZXJzSW5zdGl0dXRpb25GaWVsZCkoZSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiW1NtYXJ0UmVjcnVpdGVyc11bSW5zdGl0dXRpb25dIGNsZWFudXAtZmFpbGVkXCIsIHtcclxuICAgICAgICByZWFzb246IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubmFtZSA6IFwidW5rbm93bi1lcnJvclwiXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIHRyYW5zZm9ybVNtYXJ0UmVjcnVpdGVyc0VkdWNhdGlvblJlY29yZEJ5UnVsZShlLCB0KSB7XHJcbiAgICBsZXQgciA9ICgwLCBwLm5vcm1hbGl6ZVNtYXJ0UmVjcnVpdGVyc0RhdGVSZWNvcmRGb3JSdWxlKSh0LCBlLmxhYmVsKTtcclxuICAgIGlmICghKDAsIGguaXNTbWFydFJlY3J1aXRlcnNJbnN0aXR1dGlvblJ1bGUpKGUpKSByZXR1cm4gcjtcclxuICAgIGxldCBuID0gZS4kaW5wdXQsXHJcbiAgICAgIG8gPSAoMCwgaC5nZXRTbWFydFJlY3J1aXRlcnNJbnN0aXR1dGlvbk9yaWdpbmFsQW5zd2VyKShyKTtcclxuICAgIHJldHVybiBvID8ge1xyXG4gICAgICAuLi5yLFxyXG4gICAgICBbZS5sYWJlbF06IG9cclxuICAgIH0gOiAoYXdhaXQgdGhpcy5tYXJrU21hcnRSZWNydWl0ZXJzRWR1Y2F0aW9uSW5zdGl0dXRpb25GYWlsZWQobiksIHtcclxuICAgICAgLi4ucixcclxuICAgICAgW2UubGFiZWxdOiBcIlwiXHJcbiAgICB9KVxyXG4gIH1cclxuICBhc3luYyBkb0ZpbGxGb3JtKGUgPSAhMSkge1xyXG4gICAgYXdhaXQgdGhpcy5pbml0aWFsaXplRmlsbEZvcm0oKTtcclxuICAgIGxldCB0ID0gYXdhaXQgdGhpcy5leHRyYWN0Rm9ybVJ1bGVzKCk7XHJcbiAgICB0aGlzLnByb2dyZXNzVHJhY2tlci5zZXRGaWVsZHNSZXF1aXJlZFN0YXR1cyh0KSwgYXdhaXQgdGhpcy5oYW5kbGVSZXN1bWVVcGxvYWQoKTtcclxuICAgIGxldCByID0gYXdhaXQgdGhpcy5mZXRjaEZvcm1BbnN3ZXJzKHQsIGUpO1xyXG4gICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHIpIHJldHVybiByO1xyXG4gICAgdGhpcy5hbnN3ZXIgPSAoMCwgcC5mb3JtYXRBbnN3ZXIpKHRoaXMuYW5zd2VyLCB0KSwgYXdhaXQgdGhpcy5maWxsUmVndWxhckZpZWxkcyh0KTtcclxuICAgIGxldCBuID0gYXdhaXQgdGhpcy5ydW5Db21ib1F1ZXN0aW9uQXV0b2ZpbGxJZk5lZWRlZCh0LCBlKTtcclxuICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiBuID8gbiA6ICh0ID0gbiwgYXdhaXQgdGhpcy5leGVjdXRlU2l0ZVNwZWNpZmljU3RlcHModCksIHRoaXNcclxuICAgICAgLmZpbmFsaXplRmlsbEZvcm0oKSlcclxuICB9XHJcbiAgYXN5bmMgZXhlY3V0ZVNpdGVTcGVjaWZpY1N0ZXBzKGUpIHtcclxuICAgIGlmICh0aGlzLnRyYWNraW5nRWR1Y2F0aW9uUnVsZXMgPSBbXSwgdGhpcy50cmFja2luZ0VtcGxveW1lbnRSdWxlcyA9IFtdLCBhd2FpdCAoMCwgY1xyXG4gICAgICAgIC5jbGlja0FkZEJ1dHRvbikoITAsIHRoaXMuYW5zd2VyLndvcmtFeHBlcmllbmNlPy5sZW5ndGggLSAxIHx8IDApLCBhd2FpdCAoMCwgY1xyXG4gICAgICAgIC5jbGlja0FkZEJ1dHRvbikoITEsIHRoaXMuYW5zd2VyLmVkdWNhdGlvbj8ubGVuZ3RoIC0gMSB8fCAwKSwgdGhpcy5hbnN3ZXIud29ya0V4cGVyaWVuY2VcclxuICAgICAgLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IGUgPSAoMCwgZC5wcm9jZXNzRWR1T3JXb3JrRXhwQW53c2VyKSghMCk7XHJcbiAgICAgIHRoaXMudHJhY2tpbmdFbXBsb3ltZW50UnVsZXMgPSBlIHx8IFtdLCAoMCwgbC5zZXRTZWN0aW9uUmVzdWx0Rm9jdXNSdWxlcykoXCJlbXBsb3ltZW50XCIsXHJcbiAgICAgICAgZSB8fCBbXSk7XHJcbiAgICAgIGxldCB0ID0gKDAsIGYuZ2V0RW1wbG95bWVudE9wZXJhdGlvbnMpKGUsIHRoaXMuYW5zd2VyLndvcmtFeHBlcmllbmNlLCB0aGlzXHJcbiAgICAgICAgICAub3BlcmF0aW9uQ29uZmlnLCBHLCB7XHJcbiAgICAgICAgICAgIG9uU2VjdGlvblJlc3VsdENoYW5nZWQ6IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZVNlY3Rpb25SZXN1bHQsXHJcbiAgICAgICAgICAgIG9uQ29tcGxldGVkOiAoKSA9PiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhcIkVtcGxveW1lbnRcIiksXHJcbiAgICAgICAgICAgIG9uU2tpcHBlZDogKCkgPT4gdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJFbXBsb3ltZW50XCIpXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICByID0gWy4uLnRdO1xyXG4gICAgICBmb3IgKGxldCBlIG9mIHIpIHRoaXMudGFza1F1ZXVlLmFkZChlKTtcclxuICAgICAgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKCksIGF3YWl0ICgwLCBjLmNsaWNrU2F2ZUJ1dHRvbikoITApO1xyXG4gICAgICBsZXQgbiA9ICgwLCBkLmdldFNhdmVkU21hcnRSZWNydWl0ZXJzU2VjdGlvbkZvY3VzUnVsZXMpKCEwLCBlKTtcclxuICAgICAgbiA/ICh0aGlzLnRyYWNraW5nRW1wbG95bWVudFJ1bGVzID0gbiwgKDAsIGwuc2V0U2VjdGlvblJlc3VsdEZvY3VzUnVsZXMpKFwiZW1wbG95bWVudFwiLFxyXG4gICAgICAgIG4pKSA6IGNvbnNvbGUuZGVidWcoXHJcbiAgICAgICAgICBcIltBdXRvZmlsbF1bc21hcnRyZWNydWl0ZXJzLXNlY3Rpb24tZm9jdXNdIHNhdmVkIHRhcmdldHMgdW5hdmFpbGFibGVcIiwge1xyXG4gICAgICAgICAgICB0eXBlOiBcImVtcGxveW1lbnRcIixcclxuICAgICAgICAgICAgZXhwZWN0ZWRSZWNvcmRzOiBlLmxlbmd0aFxyXG4gICAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmFuc3dlci5lZHVjYXRpb24ubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmVkdWNhdGlvbkluc3RpdHV0aW9uRmFpbGVkID0gITE7XHJcbiAgICAgIGxldCBlID0gKDAsIGQucHJvY2Vzc0VkdU9yV29ya0V4cEFud3NlcikoITEpO1xyXG4gICAgICB0aGlzLnRyYWNraW5nRWR1Y2F0aW9uUnVsZXMgPSBlIHx8IFtdLCAoMCwgbC5zZXRTZWN0aW9uUmVzdWx0Rm9jdXNSdWxlcykoXCJlZHVjYXRpb25cIiwgZSB8fFxyXG4gICAgICAgIFtdKTtcclxuICAgICAgbGV0IHQgPSAoMCwgZi5nZXRFZHVjYXRpb25PcGVyYXRpb25zKShlLCB0aGlzLmFuc3dlci5lZHVjYXRpb24sIHRoaXMub3BlcmF0aW9uQ29uZmlnLCAoZSxcclxuICAgICAgICAgICAgdCkgPT4gdGhpcy5pc1NtYXJ0UmVjcnVpdGVyc0luc3RpdHV0aW9uUmVzb2x2ZUVuYWJsZWQoKSA/IHRoaXNcclxuICAgICAgICAgIC50cmFuc2Zvcm1TbWFydFJlY3J1aXRlcnNFZHVjYXRpb25SZWNvcmRCeVJ1bGUoZSwgdCkgOiAoMCwgcFxyXG4gICAgICAgICAgICAubm9ybWFsaXplU21hcnRSZWNydWl0ZXJzRGF0ZVJlY29yZEZvclJ1bGUpKHQsIGUubGFiZWwpLCB7XHJcbiAgICAgICAgICAgIG9uU2VjdGlvblJlc3VsdENoYW5nZWQ6IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZVNlY3Rpb25SZXN1bHQsXHJcbiAgICAgICAgICAgIG9uQ29tcGxldGVkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZWR1Y2F0aW9uSW5zdGl0dXRpb25GYWlsZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFwiRWR1Y2F0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKFwiRWR1Y2F0aW9uXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uU2tpcHBlZDogKCkgPT4gdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJFZHVjYXRpb25cIilcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIHIgPSBbLi4udF07XHJcbiAgICAgIGZvciAobGV0IGUgb2YgcikgdGhpcy50YXNrUXVldWUuYWRkKGUpO1xyXG4gICAgICBpZiAoYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKCksICF0aGlzLmVkdWNhdGlvbkluc3RpdHV0aW9uRmFpbGVkKSB7XHJcbiAgICAgICAgYXdhaXQgKDAsIGMuY2xpY2tTYXZlQnV0dG9uKSghMSk7XHJcbiAgICAgICAgbGV0IHQgPSAoMCwgZC5nZXRTYXZlZFNtYXJ0UmVjcnVpdGVyc1NlY3Rpb25Gb2N1c1J1bGVzKSghMSwgZSk7XHJcbiAgICAgICAgdCA/ICh0aGlzLnRyYWNraW5nRWR1Y2F0aW9uUnVsZXMgPSB0LCAoMCwgbC5zZXRTZWN0aW9uUmVzdWx0Rm9jdXNSdWxlcykoXCJlZHVjYXRpb25cIixcclxuICAgICAgICAgIHQpKSA6IGNvbnNvbGUuZGVidWcoXHJcbiAgICAgICAgICAgIFwiW0F1dG9maWxsXVtzbWFydHJlY3J1aXRlcnMtc2VjdGlvbi1mb2N1c10gc2F2ZWQgdGFyZ2V0cyB1bmF2YWlsYWJsZVwiLCB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJlZHVjYXRpb25cIixcclxuICAgICAgICAgICAgICBleHBlY3RlZFJlY29yZHM6IGUubGVuZ3RoXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGF3YWl0IHRoaXMuYmluZFN1Ym1pdEJ1dHRvblRyYWNraW5nKGUpXHJcbiAgfVxyXG4gIGFzeW5jIHJ1blByZUZpbGxGb3JtKCkge1xyXG4gICAgdGhpcy50YXNrUXVldWUuYWRkKGMucHJlRmlsbEZvcm0pLCBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKVxyXG4gIH1cclxuICBhc3luYyBleHRyYWN0Rm9ybVJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIGF3YWl0ICgwLCBkLmV4dHJhY3RSdWxlcykoKVxyXG4gIH1cclxuICBnZXRTaXRlTmFtZSgpIHtcclxuICAgIHJldHVybiBcInNtYXJ0cmVjcnVpdGVyc1wiXHJcbiAgfVxyXG4gIGFzeW5jIGhhbmRsZVJlc3VtZVVwbG9hZCgpIHtcclxuICAgIHRoaXMuZGlzYWJsZVVwbG9hZFJlc3VtZSA/IChhd2FpdCAoMCwgYy5yZW1vdmVSZXN1bWUpKCksIHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgIC51cGRhdGVNaXNzZWRQcm9ncmVzcyhcIlJlc3VtZS9DVlwiKSkgOiB0aGlzLnRhc2tRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCAoMCwgYy5yZW1vdmVSZXN1bWUpKCksIGF3YWl0ICgwLCBjLnVwbG9hZFJlc3VtZSkodGhpcy5yZXN1bWVJbmZvLCB0aGlzXHJcbiAgICAgICAgLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWVsZFJlcXVpcmVkU3RhdHVzLCB0aGlzLnByb2dyZXNzVHJhY2tlclxyXG4gICAgICAgIC51cGRhdGVGaWxsZWRQcm9ncmVzcylcclxuICAgIH0pLCBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKVxyXG4gIH1cclxuICBnZXRTdWJtaXRCdXR0b25TZWxlY3RvcigpIHtcclxuICAgIHJldHVybiAnLi8vYnV0dG9uW0B0eXBlPVwic3VibWl0XCIgb3IgY29udGFpbnMoQGNsYXNzLCBcInN1Ym1pdFwiKSBvciBub3JtYWxpemUtc3BhY2UoLik9XCJTdWJtaXRcIiBvciBub3JtYWxpemUtc3BhY2UoLik9XCJOZXh0XCIgb3Igbm9ybWFsaXplLXNwYWNlKC4pPVwiQ29udGludWVcIiBvciBub3JtYWxpemUtc3BhY2UoLik9XCJDb250aW51ZSBUbyBUaGUgTmV4dCBQYWdlXCJdJ1xyXG4gIH1cclxuICBnZXRTdWJtaXRUcmFja2luZ0RlbGVnYXRpb25Sb290KCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50XHJcbiAgfVxyXG4gIHJlc29sdmVEZWxlZ2F0ZWRTdWJtaXRCdXR0b24oZSkge1xyXG4gICAgbGV0IHQgPSBlLmNsb3Nlc3QoXCJidXR0b25cIik7XHJcbiAgICBpZiAodCBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50KSB7XHJcbiAgICAgIGlmICh2KHQpKSByZXR1cm4gbnVsbDtcclxuICAgICAgbGV0IGUgPSB5KHQpO1xyXG4gICAgICByZXR1cm4gYi50ZXN0KGUpID8gdCA6IG51bGxcclxuICAgIH1cclxuICAgIGxldCByID0gZS5jbG9zZXN0KFwic3BsLWJ1dHRvblwiKTtcclxuICAgIGlmICghciB8fCB2KHIpKSByZXR1cm4gbnVsbDtcclxuICAgIGxldCBuID0geShyKTtcclxuICAgIGlmICghYi50ZXN0KG4pKSByZXR1cm4gbnVsbDtcclxuICAgIGxldCBvID0gci5zaGFkb3dSb290Py5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xyXG4gICAgcmV0dXJuIG8gaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCA/IHYobykgPyBudWxsIDogbyA6IHJcclxuICB9XHJcbiAgYXN5bmMgZ2V0QXV0b2ZpbGxTbmFwc2hvdChlKSB7XHJcbiAgICB0aGlzLnRyYWNraW5nUnVsZXMgPSBlO1xyXG4gICAgbGV0IHQgPSBNKGUpO1xyXG4gICAgcmV0dXJuIEIodCkgPyB0IDogQyhlLCB0aGlzLmFuc3dlcilcclxuICB9XHJcbiAgYXN5bmMgZ2V0U3VibWl0U25hcHNob3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50cmFja2luZ1J1bGVzLmxlbmd0aCA+IDAgPyBNKHRoaXMudHJhY2tpbmdSdWxlcykgOiBhd2FpdCAoMCwgZC5nZXRGb3JtU25hcHNob3QpXHJcbiAgICAoKVxyXG4gIH1cclxuICBnZXRBZGRpdGlvbmFsQXV0b2ZpbGxTbmFwc2hvdERhdGEoKSB7XHJcbiAgICBsZXQgZSA9IHt9O1xyXG4gICAgaWYgKHRoaXMudHJhY2tpbmdFZHVjYXRpb25SdWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCB0ID0geighMSwgdGhpcy50cmFja2luZ0VkdWNhdGlvblJ1bGVzKTtcclxuICAgICAgdC5sZW5ndGggPiAwID8gZS5lZHVjYXRpb24gPSB0IDogKHRoaXMuYW5zd2VyLmVkdWNhdGlvbiB8fCBbXSkubGVuZ3RoID4gMCAmJiAoZVxyXG4gICAgICAgIC5lZHVjYXRpb24gPSBrKHRoaXMudHJhY2tpbmdFZHVjYXRpb25SdWxlcywgdGhpcy5hbnN3ZXIuZWR1Y2F0aW9uIHx8IFtdKSlcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRyYWNraW5nRW1wbG95bWVudFJ1bGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHQgPSB6KCEwLCB0aGlzLnRyYWNraW5nRW1wbG95bWVudFJ1bGVzKTtcclxuICAgICAgdC5sZW5ndGggPiAwID8gZS5lbXBsb3ltZW50ID0gdCA6ICh0aGlzLmFuc3dlci53b3JrRXhwZXJpZW5jZSB8fCBbXSkubGVuZ3RoID4gMCAmJiAoZVxyXG4gICAgICAgIC5lbXBsb3ltZW50ID0gayh0aGlzLnRyYWNraW5nRW1wbG95bWVudFJ1bGVzLCB0aGlzLmFuc3dlci53b3JrRXhwZXJpZW5jZSB8fCBbXSkpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZVxyXG4gIH1cclxuICBnZXRBZGRpdGlvbmFsU3VibWl0U25hcHNob3REYXRhKCkge1xyXG4gICAgbGV0IGUgPSB7fTtcclxuICAgIGlmICh0aGlzLnRyYWNraW5nRWR1Y2F0aW9uUnVsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgdCA9IHooITEsIHRoaXMudHJhY2tpbmdFZHVjYXRpb25SdWxlcyk7XHJcbiAgICAgIHQubGVuZ3RoID4gMCA/IGUuZWR1Y2F0aW9uID0gdCA6ICh0aGlzLmFuc3dlci5lZHVjYXRpb24gfHwgW10pLmxlbmd0aCA+IDAgJiYgKGVcclxuICAgICAgICAuZWR1Y2F0aW9uID0gVighMSwgdGhpcy50cmFja2luZ0VkdWNhdGlvblJ1bGVzLCB0aGlzLmFuc3dlci5lZHVjYXRpb24gfHwgW10pKVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudHJhY2tpbmdFbXBsb3ltZW50UnVsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgdCA9IHooITAsIHRoaXMudHJhY2tpbmdFbXBsb3ltZW50UnVsZXMpO1xyXG4gICAgICB0Lmxlbmd0aCA+IDAgPyBlLmVtcGxveW1lbnQgPSB0IDogKHRoaXMuYW5zd2VyLndvcmtFeHBlcmllbmNlIHx8IFtdKS5sZW5ndGggPiAwICYmIChlXHJcbiAgICAgICAgLmVtcGxveW1lbnQgPSBWKCEwLCB0aGlzLnRyYWNraW5nRW1wbG95bWVudFJ1bGVzLCB0aGlzLmFuc3dlci53b3JrRXhwZXJpZW5jZSB8fCBbXSkpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZVxyXG4gIH1cclxuICBzdWJtaXRBcHBsaWNhdGlvbigpIHtcclxuICAgIGxldCBlID0gJy4vL2J1dHRvbltAdHlwZT1cInN1Ym1pdFwiIG9yIGNvbnRhaW5zKEBjbGFzcywgXCJzdWJtaXRcIildJyxcclxuICAgICAgdCA9ICgwLCBzLmdldEZpcnN0T3JkZXJlZE5vZGUpKGUpO1xyXG4gICAgdCAmJiB0Py5jbGljaygpXHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKC4uLmUpIHtcclxuICAgIHN1cGVyKC4uLmUpLCB0aGlzLmhhc0NvbWJvUXVlc3Rpb25zID0gITAsIHRoaXMuY29tYm9RdWVzdGlvbk1heFJvdW5kcyA9IDQsIHRoaXNcclxuICAgICAgLmNvbWJvUXVlc3Rpb25TZXR0bGVEZWxheU1zID0gNjAwLCB0aGlzLmNvbWJvUXVlc3Rpb25RdWlldFBlcmlvZE1zID0gMjAwLCB0aGlzXHJcbiAgICAgIC5jb21ib1F1ZXN0aW9uU2V0dGxlTWF4V2FpdE1zID0gMTYwMCwgdGhpcy50cmFja2luZ1J1bGVzID0gW10sIHRoaXNcclxuICAgICAgLnRyYWNraW5nRWR1Y2F0aW9uUnVsZXMgPSBbXSwgdGhpcy50cmFja2luZ0VtcGxveW1lbnRSdWxlcyA9IFtdLCB0aGlzXHJcbiAgICAgIC5lZHVjYXRpb25JbnN0aXR1dGlvbkZhaWxlZCA9ICExLCB0aGlzLmRlZmVycmVkU21hcnRSZWNydWl0ZXJzQ2l0eVZhbHVlcyA9IG5ldyBNYXBcclxuICB9XHJcbn1cclxubGV0IEcgPSAoZSwgdCkgPT4gKDAsIHAubm9ybWFsaXplU21hcnRSZWNydWl0ZXJzRGF0ZVJlY29yZEZvclJ1bGUpKHQsIGUubGFiZWwpXHJcblxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRyZWNydWl0ZXJzLmQ3MjFmNDY3LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);