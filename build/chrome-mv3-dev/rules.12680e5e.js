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
})({"l5rI2":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\uber\\rules.js",
    "bundleId": "da0da36712680e5e",
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
var j = z(require("85f470731858ebd1"));
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

},{"85f470731858ebd1":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"1FLny":[function(require,module,exports) {
/**
 * Parcel module id: k57Bl
 * Resolved path: src/contents/sites/uber/rules.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~utils/getTargetOrTimeout -> 1TBhF  =>  src/utils/getTargetOrTimeout.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "UBER_DATE_MONTH_DESCRIPTION", ()=>l), n.export(r, "UBER_DATE_YEAR_DESCRIPTION", ()=>s), n.export(r, "UBER_PHONE_CODE_DESCRIPTION", ()=>u), n.export(r, "findMainForm", ()=>d), n.export(r, "buildUberSectionOptions", ()=>F), n.export(r, "getUberPhoneCodeOptionText", ()=>B), n.export(r, "buildUberPhoneRules", ()=>W), n.export(r, "extractRules", ()=>G), n.export(r, "getFormSnapshot", ()=>K), n.export(r, "getEduAndEmploymentSnapshot", ()=>Z), n.export(r, "getEducationRules", ()=>er), n.export(r, "getEmploymentRules", ()=>en), n.export(r, "sortEducationFields", ()=>ei), n.export(r, "sortEmploymentFields", ()=>ea), n.export(r, "getFormSnapshotFromRules", ()=>es), n.export(r, "getFormSnapshotWithEducationAndEmployment", ()=>eu);
var o = e("~core/enums"), i = e("~utils/getTargetOrTimeout"), a = n.interopDefault(i);
let l = "Return only the month in MM format, from 01 to 12.", s = "Return only the year in YYYY format.", u = "Return the country name shown in the phone country selector, such as United States. Do not return only the dial code because multiple countries can share the same code.";
function c(e1) {
    return (e1 || "").replace(/\s+/g, " ").trim();
}
function d() {
    let e1 = Array.from(document.querySelectorAll("form"));
    if (0 === e1.length) return null;
    let t = (e1)=>{
        let t = e1.querySelectorAll('input[name]:not([type="file"]), textarea[name]').length, r1 = e1.querySelectorAll('input[role="combobox"]').length, n = e1.querySelectorAll('button[type="submit"]').length, o = Array.from(e1.querySelectorAll("button")).some((e1)=>/submit application/i.test((e1.textContent || "").trim()));
        return t + r1 + 50 * n + (o ? 50 : 0);
    }, r1 = e1[0], n = t(r1);
    for (let o of e1.slice(1)){
        let e1 = t(o);
        e1 > n && (r1 = o, n = e1);
    }
    return r1;
}
function f(e1) {
    let t = e1.closest('[data-baseweb="flex-grid-item"]');
    if (t) return t;
    let r1 = e1.closest('[data-baseweb*="form"], [data-baseweb*="control"]');
    if (r1) return r1;
    let n = e1.closest('[class*="form-control"], [class*="field"]');
    if (n) return n;
    let o = e1.closest("span"), i = o?.nextElementSibling;
    if (i) return i;
    let a = e1.parentElement;
    return a && a.querySelector('input, textarea, select, [role="combobox"], [role="radiogroup"]'), a;
}
function p(e1, t, r1, n, o, i) {
    let a = e1.id || "", l = t.getAttribute("for") || "", s = "start-date-month" === a || a.includes("start") && a.includes("month"), u = "end-date-month" === a || a.includes("end") && a.includes("month"), c = "start-date-month" === l || l.includes("start") && l.includes("month"), d = "end-date-month" === l || l.includes("end") && l.includes("month"), f = /start.*date/i.test(r1), p = /end.*date/i.test(r1);
    if (!s && !u && !c && !d && !f && !p) return !1;
    let m = s || c || f ? "start" : "end", h = n.querySelector(`input[name="${o}.${i}.${m}Date.year"]`);
    if (!h) return !1;
    let g = A(h, m);
    return g === e1;
}
function m(e1, t) {
    let r1 = t.querySelector('[role="radiogroup"]');
    if (r1) return r1;
    let n = e1.parentElement;
    if (n && (r1 = n.querySelector('[role="radiogroup"]'))) return r1;
    let o = e1.closest("span");
    if (o) {
        let e1 = o.nextElementSibling;
        if (e1 && (r1 = e1.querySelector('[role="radiogroup"]'))) return r1;
    }
    let i = e1.closest('[data-baseweb="block"]');
    return i && (r1 = i.querySelector('[role="radiogroup"]')) ? r1 : null;
}
function h(e1) {
    return e1 ? e1.startsWith("experiences.") ? "Experience" : e1.startsWith("educations.") ? "Education" : "" : "";
}
function g(e1) {
    if (!e1) return null;
    let t = e1.match(/^(educations|experiences)\.(\d+)\./);
    if (!t) return null;
    let r1 = Number(t[2]);
    return Number.isFinite(r1) ? r1 : null;
}
function b(e1, t, r1) {
    let n = c(t), o = g(r1);
    return e1 && null !== o ? `${e1} ${o + 1} ${n}` : e1 ? `${e1} ${n}` : n;
}
function y(e1) {
    return e1.disabled || e1.hasAttribute("disabled") || e1.hasAttribute("readonly");
}
function v(e1, t, r1) {
    let n = h(r1);
    return b(n, `${e1} - ${t}`, r1);
}
function w(e1, t) {
    let r1 = e1.left - t.left, n = e1.top - t.top;
    return Math.hypot(r1, n);
}
function S(e1) {
    if (!e1.isConnected) return !1;
    let t = window.getComputedStyle(e1);
    if ("none" === t.display || "hidden" === t.visibility) return !1;
    let r1 = e1.getBoundingClientRect();
    return r1.width > 0 && r1.height > 0;
}
_c = S;
function E(e1, t, r1) {
    let n = e1.getBoundingClientRect(), o = Array.from(t.querySelectorAll(r1)), i = o.filter((e1)=>{
        let t = e1;
        return !!S(t) && (!(e1 instanceof HTMLInputElement || e1 instanceof HTMLTextAreaElement || e1 instanceof HTMLSelectElement) || !y(e1));
    });
    if (0 === i.length) return null;
    let a = null;
    for (let e1 of i){
        let t = w(e1.getBoundingClientRect(), n);
        (!a || t < a.score) && (a = {
            element: e1,
            score: t
        });
    }
    return a?.element || null;
}
_c1 = E;
function x(e1) {
    let t = e1.closest('[data-baseweb="flex-grid-item"]') || e1.closest('[data-baseweb="flex-grid"]') || e1.closest('[data-baseweb="block"]') || e1.closest("form") || document.body, r1 = Array.from(t.querySelectorAll('input[name$=".startDate.year"], input[name$=".endDate.year"]'));
    if (0 === r1.length) return null;
    let n = e1.getBoundingClientRect(), o = null;
    for (let e1 of r1){
        let t = w(e1.getBoundingClientRect(), n);
        (!o || t < o.score) && (o = {
            element: e1,
            score: t
        });
    }
    return o?.element || null;
}
function C(e1, t) {
    let r1 = e1.match(RegExp(`^${t}\\.(\\d+)\\.`));
    if (!r1) return null;
    let n = Number(r1[1]);
    return Number.isFinite(n) ? n : null;
}
_c2 = C;
function A(e1, t) {
    let r1 = e1.closest('[data-baseweb="block"]'), n = r1 || e1.closest('[data-baseweb="flex-grid-item"]') || e1.closest('[data-baseweb="flex-grid"]') || e1.closest("form") || document.body, o = e1.getBoundingClientRect(), i = e1.name || "", a = i.includes(".endDate.year"), l = i.includes(".startDate.year"), s = "end" === t || a, u = "start" === t || l, c = "start" === t ? [
        'input[role="combobox"]#start-date-month',
        'input[role="combobox"][id*="start"][id*="month"]'
    ] : [
        'input[role="combobox"]#end-date-month',
        'input[role="combobox"][id*="end"][id*="month"]'
    ], d = [];
    for (let e1 of c){
        let t = Array.from(n.querySelectorAll(e1));
        if (t.length > 0) {
            d = t;
            break;
        }
    }
    if (0 === d.length) {
        let e1 = Array.from(n.querySelectorAll('input[role="combobox"]'));
        for (let t of e1){
            if (t.closest('[data-baseweb="phone-input"]')) continue;
            let e1 = t.getBoundingClientRect(), r1 = 50 > Math.abs(e1.top - o.top) && 200 > Math.abs(e1.left - o.left);
            if (!r1) continue;
            let n = e1.right < o.left, i = s && a || u && l;
            n && i && d.push(t);
        }
    }
    if (0 === d.length) return null;
    let f = null;
    for (let e1 of d){
        let t = w(e1.getBoundingClientRect(), o);
        (!f || t < f.score) && (f = {
            element: e1,
            score: t
        });
    }
    return f?.element || null;
}
_c3 = A;
function k(e1) {
    return /^(Start|End) Date - Month$/i.test(e1) ? l : /^(Start|End) Date - Year$/i.test(e1) ? s : void 0;
}
function T(e1) {
    let t = {
        "start date - month": 1,
        "start date - year": 2,
        "end date - month": 3,
        "end date - year": 4
    };
    return t[e1.toLowerCase()] ?? null;
}
_c4 = T;
function F(e1) {
    return e1.map((e1, t)=>({
            type: e1.type,
            label: e1.label,
            options: e1.options || [],
            description: e1.description || k(e1.label),
            __index: t
        })).sort((e1, t)=>{
        let r1 = T(e1.label), n = T(t.label);
        return null !== r1 && null !== n ? r1 - n : e1.__index - t.__index;
    }).map(({ __index: e1, description: t, ...r1 })=>({
            ...r1,
            ...t ? {
                description: t
            } : {}
        }));
}
_c5 = F;
function I(e1, t, r1) {
    let n = {
        type: r1,
        label: t,
        required: "true" === e1.getAttribute("aria-required"),
        $input: e1,
        $label: e1
    };
    return r1 === o.FIELD_TYPE.SELECT ? n.options = [] : r1 === o.FIELD_TYPE.CHECKBOX && (n.options = [
        "Yes",
        "No"
    ], n.$checkboxs = [
        e1
    ]), n;
}
_c6 = I;
function j(e1, t) {
    return I(e1, t, o.FIELD_TYPE.TEXT);
}
function D(e1, t) {
    return I(e1, t, o.FIELD_TYPE.SELECT);
}
_c7 = D;
function P(e1, t) {
    return I(e1, t, o.FIELD_TYPE.CHECKBOX);
}
_c8 = P;
function _(e1) {
    let t = [];
    for (let r1 of e1){
        let e1 = r1.options || [];
        for (let r1 of e1){
            let e1 = t.find((e1)=>e1.label === r1.label);
            e1 || t.push({
                type: r1.type || "text",
                label: r1.label,
                options: r1.options || [],
                ...r1.description ? {
                    description: r1.description
                } : {}
            });
        }
    }
    return t;
}
function L(e1, t) {
    t?.label && (e1.some((e1)=>e1.label === t.label) || e1.push(t));
}
_c9 = L;
function R(e1, t) {
    let r1 = e1 === o.FIELD_TYPE.EDUCATION, n = r1 ? [
        {
            type: o.FIELD_TYPE.TEXT,
            label: "School",
            required: !1
        },
        {
            type: o.FIELD_TYPE.TEXT,
            label: "Degree",
            required: !1
        },
        {
            type: o.FIELD_TYPE.TEXT,
            label: "Major",
            required: !1
        },
        {
            type: o.FIELD_TYPE.TEXT,
            label: "Start Date - Month",
            required: !1
        },
        {
            type: o.FIELD_TYPE.TEXT,
            label: "Start Date - Year",
            required: !1
        },
        {
            type: o.FIELD_TYPE.TEXT,
            label: "End Date - Month",
            required: !1
        },
        {
            type: o.FIELD_TYPE.TEXT,
            label: "End Date - Year",
            required: !1
        },
        {
            type: o.FIELD_TYPE.CHECKBOX,
            label: "Current",
            required: !1,
            options: [
                "Yes",
                "No"
            ]
        }
    ] : [
        {
            type: o.FIELD_TYPE.TEXT,
            label: "Company",
            required: !1
        },
        {
            type: o.FIELD_TYPE.TEXT,
            label: "Position",
            required: !1
        },
        {
            type: o.FIELD_TYPE.TEXT,
            label: "Description (optional)",
            required: !1
        },
        {
            type: o.FIELD_TYPE.TEXT,
            label: "Start Date - Month",
            required: !1
        },
        {
            type: o.FIELD_TYPE.TEXT,
            label: "Start Date - Year",
            required: !1
        },
        {
            type: o.FIELD_TYPE.TEXT,
            label: "End Date - Month",
            required: !1
        },
        {
            type: o.FIELD_TYPE.TEXT,
            label: "End Date - Year",
            required: !1
        },
        {
            type: o.FIELD_TYPE.CHECKBOX,
            label: "Current",
            required: !1,
            options: [
                "Yes",
                "No"
            ]
        }
    ];
    return {
        type: e1,
        label: t,
        required: !1,
        options: [],
        children: n
    };
}
_c10 = R;
function O(e1) {
    L(e1, R(o.FIELD_TYPE.EDUCATION, "Education")), L(e1, R(o.FIELD_TYPE.EDUCATION, "education")), L(e1, R(o.FIELD_TYPE.EMPLOYMENT, "Employment")), L(e1, R(o.FIELD_TYPE.EMPLOYMENT, "employment"));
}
_c11 = O;
function M(e1) {
    let t = (t)=>Array.from(new Set(Array.from(e1.querySelectorAll(`input[name^="${t}."]`)).map((e1)=>C(e1.name || "", t)).filter((e1)=>null !== e1))).sort((e1, t)=>e1 - t);
    return {
        educationIndices: t("educations"),
        experienceIndices: t("experiences")
    };
}
_c12 = M;
async function N(e1) {
    let t = M(e1), r1 = 0, n = 4;
    await (0, a.default)(()=>{
        let o = M(e1);
        return o.educationIndices.join(",") === t.educationIndices.join(",") && o.experienceIndices.join(",") === t.experienceIndices.join(",") ? r1++ : r1 = 0, t = o, r1 >= n || null;
    }, ()=>!1, 30);
}
_c13 = N;
async function $(e1) {
    let t = Array.from(e1.querySelectorAll('label[data-baseweb="form-control-label"]')), r1 = "Do you reside in the United States?", n = t.find((e1)=>(e1.textContent || "").trim() === r1);
    if (n) {
        let t = n.closest('[data-baseweb="flex-grid-item"]') || n.closest('[data-baseweb="block"]') || n.parentElement, r1 = t?.querySelector('[role="radiogroup"]');
        if (r1) {
            let t = Array.from(r1.querySelectorAll('input[type="radio"]')), n = t.find((e1)=>{
                let t = e1.closest('label[data-baseweb="radio"]'), r1 = (t?.textContent || "").trim().toLowerCase();
                return "yes" === r1 || "yes" === e1.value.toLowerCase();
            });
            if (n?.checked) {
                let t = e1.querySelector('input[name="zipCode"]');
                !t && n && (n.click(), await (0, a.default)(()=>{
                    let t = e1.querySelector('input[name="zipCode"]');
                    return t || null;
                }, ()=>!1, 30));
            } else n && !n.checked && (n.click(), await (0, a.default)(()=>{
                let t = e1.querySelector('input[name="zipCode"]');
                return t || null;
            }, ()=>!1, 30));
        }
    }
    let o = "Please check one of the boxes below", i = t.find((e1)=>(e1.textContent || "").trim() === o);
    if (i) {
        let r1 = i.closest('[data-baseweb="flex-grid-item"]') || i.closest('[data-baseweb="block"]') || i.parentElement, n = r1?.querySelector('[role="radiogroup"]');
        if (n) {
            let r1 = Array.from(n.querySelectorAll('input[type="radio"]')), o = r1.find((e1)=>{
                let t = e1.closest('label[data-baseweb="radio"]'), r1 = (t?.textContent || "").trim().toLowerCase(), n = (e1.value || "").trim().toLowerCase();
                return r1.includes("yes") && r1.includes("disability") || r1.includes("prefer not to say") || n.includes("yes") && n.includes("disability") || n.includes("prefer");
            }), i = "Do you need to request accommodations during the recruiting process due to disability?";
            t.find((e1)=>(e1.textContent || "").trim() === i);
            let l = e1.querySelector('input[name="disabilityAccomodation"]');
            l || !o || o.checked || (o.click(), await (0, a.default)(()=>{
                let t = e1.querySelector('input[name="disabilityAccomodation"]');
                return t || null;
            }, ()=>!1, 30));
        }
    }
}
function B(e1) {
    let t = Array.from(e1.querySelectorAll("div")).map((e1)=>c(e1.textContent || "")).filter(Boolean), r1 = t.find((e1)=>!/^\+\d+$/.test(e1) && /[A-Za-z\u00C0-\u024F\u0370-\u03FF\u0400-\u04FF\u0590-\u05FF\u0600-\u06FF\u4E00-\u9FFF]/.test(e1));
    if (r1) return r1;
    let n = c(e1.textContent || "");
    return n.replace(/\+\d+\s*$/, "").trim() || n;
}
_c14 = B;
async function q(e1, t = {}) {
    try {
        e1.focus(), e1.click();
        let r1 = await (0, a.default)(()=>{
            let t = e1.getAttribute("aria-controls"), r1 = t ? document.getElementById(t) : null;
            return r1 && "listbox" === r1.getAttribute("role") ? r1 : null;
        }, ()=>!1, 2);
        if (r1) return Array.from(r1.querySelectorAll('[role="option"]')).map((e1)=>t.phoneCodeOnly ? B(e1) : c(e1.textContent || "")).filter(Boolean);
    } catch  {} finally{
        try {
            e1.dispatchEvent(new KeyboardEvent("keydown", {
                key: "Escape",
                bubbles: !0
            })), e1.blur();
        } catch  {}
    }
    return [];
}
let U = 'input[name="mobileNumber"], input[type="tel"]:not([role="combobox"]), input[inputmode="tel"]:not([role="combobox"]), input[autocomplete*="tel"]:not([role="combobox"]), input[autocomplete="tel-national"]:not([role="combobox"])';
function H(e1) {
    return /\bnumber\b/i.test(e1) ? e1.replace(/\bnumber\b/i, "code") : `${e1} code`.replace(/\s+/g, " ").trim();
}
_c15 = H;
function Y(e1, t) {
    let r1 = [
        e1.querySelector('[data-baseweb="phone-input"]'),
        t.querySelector('[data-baseweb="phone-input"]')
    ].filter(Boolean);
    return r1.filter((e1, t)=>r1.indexOf(e1) === t);
}
_c16 = Y;
function z(e1, t) {
    for (let r1 of Y(e1, t)){
        let e1 = r1.querySelector('input[role="combobox"]');
        if (e1 && !y(e1)) return e1;
    }
    return null;
}
function V(e1, t) {
    let r1 = e1.querySelector('input[name="mobileNumber"]');
    if (r1 && !y(r1)) return r1;
    let n = t.querySelector('input[name="mobileNumber"]');
    if (n && !y(n)) return n;
    let o = t.querySelectorAll('input[name*="mobile"], input[name*="phone"]');
    for (let e1 of Array.from(o))if (!y(e1) && "hidden" !== e1.type && "combobox" !== e1.getAttribute("role")) return e1;
    for (let r1 of Y(e1, t)){
        let e1 = r1.querySelectorAll(U);
        for (let t of Array.from(e1))if ((!t.name || "mobileNumber" === t.name) && !y(t)) return t;
    }
    let i = E(e1, e1, U);
    if (i && !y(i)) return i;
    let a = t.querySelectorAll(U);
    for (let e1 of Array.from(a))if (!y(e1)) return e1;
    return null;
}
_c17 = V;
async function W(e1, t, r1, n) {
    let i = [], a = z(t, r1);
    if (a) {
        let t = await q(a, {
            phoneCodeOnly: !0
        });
        i.push({
            type: o.FIELD_TYPE.SELECT,
            label: H(e1),
            required: !0,
            options: t,
            description: u,
            $input: a,
            $label: n
        });
    }
    let l = V(t, r1);
    return l && i.push({
        type: o.FIELD_TYPE.TEXT,
        label: e1,
        required: !0,
        $input: l,
        $label: n
    }), i;
}
_c18 = W;
async function G() {
    let e1 = [], t = d();
    if (!t) return e1;
    await N(t), await $(t);
    let r1 = Array.from(t.querySelectorAll('label[data-baseweb="form-control-label"]'));
    for (let n of (0 === r1.length && 0 === (r1 = Array.from(t.querySelectorAll('label:not([for=""])'))).length && (r1 = Array.from(t.querySelectorAll('label[class*="label"], label[class*="Label"]'))), r1)){
        let r1 = c(n.textContent || "");
        if (!r1) continue;
        let i = r1.includes("*"), a = r1.replace(/\s*\*\s*$/, ""), l = f(n);
        if (!l) continue;
        let s = /^zip\s*code|zipcode|zip_code/i.test(a);
        if (s) ;
        else {
            let r1 = m(n, l);
            if (r1) {
                let i = Array.from(r1.querySelectorAll('input[type="radio"]'));
                if (0 === i.length) continue;
                let l = i.map((e1)=>{
                    let r1 = e1.closest('label[data-baseweb="radio"]');
                    r1 || (r1 = e1.closest("label")), !r1 && e1.id && (r1 = t.querySelector(`label[for="${e1.id}"]`));
                    let n = c(r1?.textContent || "") || c(e1.value || "");
                    return n;
                }).filter(Boolean);
                e1.push({
                    type: o.FIELD_TYPE.RADIOGROUP,
                    label: a,
                    required: !0,
                    options: l,
                    $input: i[0],
                    $label: n
                });
                continue;
            }
        }
        let u = E(n, l, "textarea[name]");
        if (u && !y(u)) {
            if (u.name?.startsWith("educations.") || u.name?.startsWith("experiences.")) continue;
            let t = h(u.name);
            e1.push({
                type: o.FIELD_TYPE.TEXT,
                label: b(t, a, u.name),
                required: "true" === u.getAttribute("aria-required") || i,
                $input: u,
                $label: n
            });
            continue;
        }
        if (/phone/i.test(a)) {
            let r1 = await W(a, l, t, n);
            if (r1.length > 0) {
                e1.push(...r1);
                continue;
            }
        }
        let d = null, p = n.getAttribute("for");
        if (p) {
            let e1 = n.closest("form");
            e1 && (d = e1.querySelector(`input[role="combobox"]#${p}`));
        }
        if ((!d || y(d)) && (d = E(n, l, 'input[role="combobox"]')), d && !y(d)) {
            if (/phone/i.test(a)) {
                let e1 = d.closest('[data-baseweb="phone-input"]');
                if (e1) continue;
            }
            let t = /^zip\s*code|zipcode|zip_code/i.test(a) || /^zip\s*code|zipcode|zip_code/i.test(d.name || "");
            if (t) continue;
            let r1 = d.id || "", s = d.name || "", u = a.toLowerCase(), c = "start-date-month" === r1 || r1.includes("start") && r1.includes("month"), f = "end-date-month" === r1 || r1.includes("end") && r1.includes("month");
            c || f || (c = s.includes("startDate") && s.includes("month"), f = s.includes("endDate") && s.includes("month")), c || f || (c = /start.*date.*month|month.*start.*date/i.test(u), f = /end.*date.*month|month.*end.*date/i.test(u));
            let p = x(d), m = p?.name || null;
            if (c || f || !m || (c = m.includes("startDate"), f = m.includes("endDate")), m?.startsWith("educations.") || m?.startsWith("experiences.")) continue;
            let g = E(n, l, 'input[name]:not([type="file"]), textarea[name]') || p, y = g?.name || m, w = c || f ? v(c ? "Start Date" : "End Date", "Month", m) : b(h(y), a, y), S = await q(d), C = l.querySelector('[data-baseweb="form-control-caption"]');
            if (C || (C = l.querySelector('[role="alert"]')), !C) {
                let e1 = l.parentElement;
                e1 && (C = e1.querySelector('[data-baseweb="form-control-caption"]'));
            }
            if (!C && !(C = l.querySelector('[class*="error"], [class*="Error"], [class*="caption"], [class*="Caption"]'))) {
                let e1 = l.parentElement;
                e1 && (C = e1.querySelector('[class*="error"], [class*="Error"]'));
            }
            let A = C?.textContent?.includes("Required field") || C?.textContent?.includes("required") || !1, k = "true" === d.getAttribute("aria-required") || "true" === d.getAttribute("aria-invalid") || i || A, T = /currently.*employed.*subsidiaries?/i.test(w) || /subsidiaries?.*employed/i.test(w);
            e1.push({
                type: o.FIELD_TYPE.SELECT,
                label: w,
                required: k || T,
                options: S,
                $input: d,
                $label: n
            });
            continue;
        }
        let g = null, w = n.getAttribute("for") || "";
        if (w) {
            let e1 = document.getElementById(w);
            e1 instanceof HTMLInputElement && (l.contains(e1) || t.contains(e1)) && (g = e1);
        }
        if (g || (g = E(n, l, 'input:not([type="file"]):not([role="combobox"])')), g && !y(g) && "combobox" !== g.getAttribute("role")) {
            if (g.name?.startsWith("educations.") || g.name?.startsWith("experiences.") || "mobileNumber" === g.name) continue;
            let t = /linkedInURL|githubURL|otherURL/i.test(g.name || "");
            if (t) continue;
            let r1 = h(g.name), l = b(r1, a, g.name), s = (g.name || g.id || g.getAttribute("aria-label") || g.getAttribute("src/contents/sites/metacareers/autocomplete") || "").toLowerCase(), u = /first\s*name|last\s*name/i.test(l);
            if (u) {
                let e1 = /firstname|first\s*name|given-name|givenname|given/i.test(s), t = /lastname|last\s*name|family-name|familyname|family|surname/i.test(s);
                e1 && !t ? l = "First Name" : t && !e1 && (l = "Last Name");
            }
            let c = /first\s*name/i.test(l), d = /last\s*name/i.test(l), f = /^zip\s*code|zipcode|zip_code/i.test(l) || /^zip\s*code|zipcode|zip_code/i.test(g.name || ""), p = /linkedin|github|portfolio/i.test(l);
            if (f) {
                e1.push({
                    type: o.FIELD_TYPE.TEXT,
                    label: l,
                    required: !0,
                    $input: g,
                    $label: n
                });
                continue;
            }
            let m = c || d;
            e1.push({
                type: o.FIELD_TYPE.TEXT,
                label: l,
                required: m || "true" === g.getAttribute("aria-required") && !p || i && !p,
                $input: g,
                $label: n
            });
            continue;
        }
    }
    let n = Array.from(t.querySelectorAll('input[name$=".startDate.year"], input[name$=".endDate.year"]'));
    for (let t of n){
        if (y(t) || t.name?.startsWith("educations.") || t.name?.startsWith("experiences.")) continue;
        let r1 = t.name.includes(".startDate.year") ? "Start Date" : "End Date", n = v(r1, "Year", t.name);
        e1.push({
            type: o.FIELD_TYPE.TEXT,
            label: n,
            required: "true" === t.getAttribute("aria-required"),
            $input: t,
            $label: t
        });
    }
    let i = Array.from(t.querySelectorAll('label[data-baseweb="checkbox"]'));
    for (let r1 of (0 === i.length && 0 === (i = Array.from(t.querySelectorAll('label:has(input[type="checkbox"])'))).length && (i = Array.from(t.querySelectorAll('label[class*="checkbox"]'))), i)){
        let t = r1.querySelector('input[type="checkbox"]');
        if (!t || y(t)) continue;
        let n = c(r1.textContent || "");
        if (!n || t.name?.startsWith("educations.") || t.name?.startsWith("experiences.")) continue;
        let i = h(t.name);
        e1.push({
            type: o.FIELD_TYPE.CHECKBOX,
            label: b(i, n, t.name),
            required: "true" === t.getAttribute("aria-required"),
            options: [
                "Yes",
                "No"
            ],
            $checkboxs: [
                t
            ],
            $input: t,
            $label: r1
        });
    }
    try {
        let t = er();
        t.length > 0 ? e1.push(...t) : O(e1);
    } catch (t) {
        O(e1);
    }
    try {
        let t = en();
        t.length > 0 ? e1.push(...t) : O(e1);
    } catch (t) {
        O(e1);
    }
    for (let t of e1)t.type === o.FIELD_TYPE.RADIOGROUP && (t.required = !0);
    let a = {
        linkedInURL: "LinkedIn",
        githubURL: "Github",
        otherURL: "Portfolio"
    };
    for (let [r1, n] of Object.entries(a)){
        let i = t.querySelector(`input[name="${r1}"][type="url"]:not([type="file"]):not([role="combobox"])`);
        if (!i || y(i)) continue;
        let a = e1.some((e1)=>{
            let t = e1.$input;
            return t?.name === r1;
        });
        if (a) continue;
        let l = null, s = i.closest('[data-baseweb="form-control-container"]');
        if (s) {
            let e1 = s.previousElementSibling;
            e1 && (l = e1.querySelector?.('label[data-baseweb="form-control-label"]'));
        }
        if (!l) {
            let e1 = i.closest('[data-baseweb="block"], [data-baseweb="flex-grid-item"]');
            if (e1) {
                let t = Array.from(e1.querySelectorAll('label[data-baseweb="form-control-label"]')), r1 = null, n = 1 / 0;
                for (let e1 of t)if (i.compareDocumentPosition(e1) & Node.DOCUMENT_POSITION_PRECEDING) {
                    let t = document.createRange();
                    t.setStartAfter(e1), t.setEndBefore(i);
                    let o = t.cloneContents().childNodes.length;
                    o < n && (n = o, r1 = e1);
                }
                r1 && (l = r1);
            }
        }
        !l && i.id && (l = t.querySelector(`label[for="${i.id}"]`));
        let u = n;
        if (l) {
            let e1 = l.textContent?.trim() || l.innerText?.trim();
            if (e1) {
                let t = e1.toLowerCase(), n = r1.toLowerCase(), o = n.includes("linkedin") && t.includes("linkedin"), i = n.includes("github") && t.includes("github"), a = (n.includes("other") || n.includes("portfolio")) && t.includes("portfolio");
                (o || i || a) && (u = e1);
            }
        }
        e1.push({
            type: o.FIELD_TYPE.TEXT,
            label: u,
            required: !1,
            $input: i,
            $label: l
        });
    }
    let l = t.querySelector('input[name="firstName"]'), s = t.querySelector('input[name="lastName"]'), u = (e1)=>String(e1 ?? "").trim().replace(/\s*\*$/, ""), p = (e1)=>/^first\s*name$/i.test(u(e1)), g = (e1)=>/^last\s*name$/i.test(u(e1));
    if (l?.isConnected && s?.isConnected) {
        for (let t of e1){
            if (t.type !== o.FIELD_TYPE.TEXT) continue;
            let e1 = t.label;
            p(e1) ? (t.$input = l, t.label = "First Name") : g(e1) && (t.$input = s, t.label = "Last Name");
        }
        let t = !1, r1 = !1, n = [];
        for (let i of e1){
            if (i.type !== o.FIELD_TYPE.TEXT) {
                n.push(i);
                continue;
            }
            let e1 = i.label;
            if ("First Name" === e1) {
                if (t) continue;
                t = !0;
            } else if ("Last Name" === e1) {
                if (r1) continue;
                r1 = !0;
            }
            n.push(i);
        }
        e1.length = 0, e1.push(...n);
    }
    return e1;
}
_c19 = G;
async function K() {
    let e1 = {}, t = d();
    if (!t) return e1;
    let r1 = Array.from(t.querySelectorAll('input[name]:not([type="file"]), textarea[name]'));
    for (let t of r1){
        if (y(t)) continue;
        let r1 = t.name || t.name;
        if (r1.startsWith("educations.") || r1.startsWith("experiences.")) continue;
        let n = h(r1), o = t.closest('[data-baseweb="flex-grid-item"]') || t.closest('[data-baseweb="block"]') || t.parentElement, i = o?.querySelector('label[data-baseweb="form-control-label"]'), a = c(i?.textContent || ""), l = a;
        l || (l = r1.endsWith(".startDate.year") ? "Start Date - Year" : r1.endsWith(".endDate.year") ? "End Date - Year" : r1), e1[l = b(n, l, r1)] = t.value ?? "";
    }
    let n = Array.from(t.querySelectorAll('label[data-baseweb="checkbox"]'));
    for (let r1 of (0 === n.length && 0 === (n = Array.from(t.querySelectorAll('label:has(input[type="checkbox"])'))).length && (n = Array.from(t.querySelectorAll('label[class*="checkbox"]'))), n)){
        let t = r1.querySelector('input[type="checkbox"]');
        if (!t || t.name?.startsWith("educations.") || t.name?.startsWith("experiences.")) continue;
        let n = c(r1.textContent || ""), o = h(t.name), i = b(o, n || t.name, t.name);
        e1[i] = t.checked ? "Yes" : "No";
    }
    return e1;
}
_c20 = K;
function X(e1, t, r1, n) {
    let i = {};
    for (let [o, a] of Object.entries(n)){
        let n = e1.querySelector(`${a.selector}[name="${r1}.${t}.${o}"]`);
        n && ("checkbox" === n.type ? i[a.key] = n.checked ? "Yes" : "No" : i[a.key] = n.value || "");
    }
    let a = e1.querySelector(`input[name="${r1}.${t}.startDate.year"]`), l = e1.querySelector(`input[name="${r1}.${t}.endDate.year"]`), s = a ? A(a, "start") : null, u = l ? A(l, "end") : null, c = (e1)=>e1 ? "combobox" === e1.getAttribute("role") ? el(e1, o.FIELD_TYPE.SELECT) : e1.value || "" : "", d = c(s), f = c(u);
    return (s || a) && (i.Start = `${d || ""}/${a?.value || ""}`.replace(/^\/$/, "")), (u || l) && (i.End = `${f || ""}/${l?.value || ""}`.replace(/^\/$/, "")), Object.keys(i).length > 0 ? i : null;
}
_c21 = X;
function J(e1, t) {
    return X(e1, t, "educations", {
        schoolName: {
            selector: "input",
            key: "School"
        },
        degree: {
            selector: "input",
            key: "Degree"
        },
        fieldOfStudy: {
            selector: "input",
            key: "Major"
        },
        isCurrent: {
            selector: 'input[type="checkbox"]',
            key: "Current"
        }
    });
}
_c22 = J;
function Q(e1, t) {
    let r1 = e1.querySelector(`textarea[name="experiences.${t}.description"], input[name="experiences.${t}.description"]`), n = X(e1, t, "experiences", {
        companyName: {
            selector: "input",
            key: "Company"
        },
        title: {
            selector: "input",
            key: "Position"
        },
        isCurrent: {
            selector: 'input[type="checkbox"]',
            key: "Current"
        }
    });
    return r1 && n && (n.Description = r1.value || ""), n;
}
_c23 = Q;
function Z() {
    let e1 = d();
    if (!e1) return null;
    let { educationIndices: t, experienceIndices: r1 } = M(e1), n = t.map((t)=>J(e1, t)).filter((e1)=>!!e1), o = r1.map((t)=>Q(e1, t)).filter((e1)=>!!e1), i = {};
    return n.length > 0 && (i.education = n), o.length > 0 && (i.employment = o), Object.keys(i).length > 0 ? i : null;
}
_c24 = Z;
function ee(e1, t, r1) {
    let n = [], o = new Set, i = Array.from(e1.querySelectorAll(`input[name^="${r1}.${t}."], textarea[name^="${r1}.${t}."]`));
    if (0 === i.length) return n;
    let a = i[0], l = a.closest('[data-baseweb="block"]');
    function s(t) {
        let r1 = t.closest('[data-baseweb="flex-grid-item"], [data-baseweb="block"], [data-baseweb="form-control-container"]');
        if (r1) {
            let e1 = r1.querySelector('label[data-baseweb="form-control-label"]');
            if (e1) return e1;
        }
        if (t.id) {
            let r1 = e1.querySelector(`label[for="${t.id}"]`);
            if (r1) return r1;
        }
        if (l) {
            let e1 = Array.from(l.querySelectorAll('label[data-baseweb="form-control-label"]'));
            for (let r1 of e1){
                let e1 = f(r1);
                if (e1 && e1.contains(t)) return r1;
            }
        }
        return null;
    }
    function u(e1, t) {
        if (e1) {
            let t = c(e1.textContent || ""), r1 = t.replace(/\s*\*\s*$/, "").trim();
            if (r1) return r1;
        }
        return t.includes("schoolName") ? "School" : t.includes("degree") ? "Degree" : t.includes("fieldOfStudy") ? "Major (optional)" : t.includes("companyName") ? "Company" : t.includes("title") ? "Position" : t.includes("description") ? "Description (optional)" : t.includes("isCurrent") ? "Current" : "";
    }
    function d(i) {
        if (o.has(i) || y(i) || i.name?.includes("Date.year") || i.name?.includes("Date.month")) return;
        let a = s(i), l = u(a, i.name || "");
        if (l) {
            if (i instanceof HTMLInputElement && "checkbox" === i.type) n.push(P(i, l)), o.add(i);
            else if (i instanceof HTMLTextAreaElement) {
                let e1 = j(i, l);
                e1.required = "true" === i.getAttribute("aria-required"), n.push(e1), o.add(i);
            } else if (i instanceof HTMLInputElement && "combobox" === i.getAttribute("role")) {
                if (p(i, a, l, e1, r1, t)) return;
            } else i instanceof HTMLInputElement && (n.push(j(i, l)), o.add(i));
        }
    }
    for (let e1 of i)d(e1);
    let m = (i, a)=>{
        let l = e1.querySelector(`input[name="${r1}.${t}.${i}Date.year"]`);
        if (!l || o.has(l)) return;
        let s = A(l, i), u = null, d = l.closest('[data-baseweb="flex-grid-item"]');
        if (d && (u = d.querySelector('label[data-baseweb="form-control-label"]')), !u && s) {
            let e1 = s.closest('[data-baseweb="flex-grid-item"]');
            e1 && (u = e1.querySelector('label[data-baseweb="form-control-label"]'));
        }
        let f = u ? c(u.textContent || "").replace(/\s*\*\s*$/, "").trim() : a;
        f = f.replace(/\s*-\s*(Year|Month)\s*$/i, "").trim() || a;
        let p = `${f} - Year`, m = `${f} - Month`;
        s && !o.has(s) && (n.push(D(s, m)), o.add(s)), n.push(j(l, p)), o.add(l);
    };
    return m("start", "Start Date"), m("end", "End Date"), n;
}
function et(e1, t, r1) {
    let n = d();
    if (!n) return [];
    let i = e1 === o.FIELD_TYPE.EDUCATION ? M(n).educationIndices : M(n).experienceIndices, a = [];
    for (let o of i){
        let i = ee(n, o, t);
        if (i.length > 0) {
            let t = i[0];
            a.push({
                type: e1,
                label: r1,
                children: i,
                required: !0,
                options: F(i),
                $input: t?.$input || n
            });
        }
    }
    if (0 === a.length) return a;
    let l = a.map((t, n)=>({
            label: `${r1} ${n + 1}`,
            type: e1,
            children: t.children || [],
            required: !0,
            options: t.options || [],
            $input: t.$input
        })), s = _(l), u = {
        type: e1,
        label: r1,
        children: l,
        required: !0,
        options: s,
        $input: a[0]?.$input || n
    };
    return [
        u
    ];
}
function er() {
    return et(o.FIELD_TYPE.EDUCATION, "educations", "Education");
}
function en() {
    return et(o.FIELD_TYPE.EMPLOYMENT, "experiences", "Employment");
}
function eo(e1, t) {
    return [
        ...e1
    ].sort((e1, r1)=>{
        let n = t[e1.label] || 999, o = t[r1.label] || 999;
        return n - o;
    });
}
function ei(e1) {
    return eo(e1, {
        School: 1,
        Degree: 2,
        Major: 3,
        "Start Date - Month": 4,
        "Start Date - Year": 5,
        "End Date - Month": 6,
        "End Date - Year": 7,
        Current: 8
    });
}
function ea(e1) {
    return eo(e1, {
        Company: 1,
        Position: 2,
        "Description (optional)": 3,
        "Start Date - Month": 4,
        "Start Date - Year": 5,
        "End Date - Month": 6,
        "End Date - Year": 7,
        Current: 8
    });
}
function el(e1, t) {
    if (t === o.FIELD_TYPE.TEXT) return (e1.value || "").trim();
    if (t === o.FIELD_TYPE.CHECKBOX) return e1.checked ? "Yes" : "No";
    if (t === o.FIELD_TYPE.SELECT) {
        let t = e1;
        if ("SELECT" === t.tagName) return t.value || "";
        let r1 = t;
        if ("combobox" === r1.getAttribute("role")) {
            let e1 = r1.getAttribute("aria-activedescendant");
            if (e1) {
                let t = document.getElementById(e1);
                if (t) {
                    let e1 = c(t.textContent || "");
                    if (e1) return e1;
                }
            }
            let t = r1.getAttribute("aria-controls");
            if (t) {
                let e1 = document.getElementById(t);
                if (e1) {
                    let t = e1.querySelector('[role="option"][aria-selected="true"]');
                    if (t) {
                        let e1 = c(t.textContent || "");
                        if (e1) return e1;
                    }
                }
            }
            let n = r1.closest('[data-baseweb="select"]');
            if (n) {
                let e1 = n.querySelector("[value]");
                if (e1) {
                    let t = e1.getAttribute("value") || c(e1.textContent || "");
                    if (t) return t;
                }
            }
            return r1.value || "";
        }
        return t.value || "";
    }
    if (t === o.FIELD_TYPE.RADIOGROUP) {
        let t = e1.closest('[role="radiogroup"]');
        if (!t) return "";
        let r1 = t.querySelector('input[type="radio"]:checked');
        if (!r1) return "";
        let n = r1.closest('label[data-baseweb="radio"]');
        return n ? (n.textContent || "").trim() : r1.value || "";
    }
    return "";
}
async function es(e1) {
    let t = {}, r1 = e1.filter((e1)=>{
        let t = e1.$input;
        return !!t && !!t.isConnected;
    });
    for (let e1 of r1){
        if (e1.type === o.FIELD_TYPE.EDUCATION || e1.type === o.FIELD_TYPE.EMPLOYMENT) continue;
        let r1 = e1.$input;
        if (!r1 || e1.type !== o.FIELD_TYPE.RADIOGROUP && (r1.disabled || r1.hasAttribute("disabled") || r1.hasAttribute("readonly"))) continue;
        let n = el(r1, e1.type);
        e1.label && null !== n && (t[e1.label] = n);
    }
    let n = Z();
    return n ? {
        ...t,
        ...n
    } : t;
}
async function eu() {
    let e1 = await K(), t = Z();
    return t ? {
        ...e1,
        ...t
    } : e1;
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24;
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
$RefreshReg$(_c15, "H");
$RefreshReg$(_c16, "Y");
$RefreshReg$(_c17, "V");
$RefreshReg$(_c18, "W");
$RefreshReg$(_c19, "G");
$RefreshReg$(_c20, "K");
$RefreshReg$(_c21, "X");
$RefreshReg$(_c22, "J");
$RefreshReg$(_c23, "Q");
$RefreshReg$(_c24, "Z");

},{}]},["l5rI2","1FLny"], "1FLny", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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LFNBQU8sR0FBRSxTQUFPO0lBQUU7SUFBQyxPQUFNO0FBQUU7QUFBQyxlQUFlLEdBQUcsRUFBQztJQUFFLElBQUksSUFBRSxDQUFDLEdBQUUsS0FBRSxHQUFFLE9BQU8sQ0FBQTtRQUFJLElBQUksSUFBRSxHQUFFO1FBQU8sT0FBTSxDQUFDLENBQUMsS0FBRyxDQUFDLENBQUMsRUFBRTtJQUFXO0lBQUcsS0FBSSxJQUFJLE1BQUssR0FBRTtRQUFDLElBQUcsR0FBRSxTQUFPLEVBQUUsV0FBVyxhQUFXLEdBQUUsU0FBTyxFQUFFLFdBQVcsWUFBVztRQUFTLElBQUksS0FBRSxHQUFFO1FBQU8sSUFBRyxDQUFDLE1BQUcsR0FBRSxTQUFPLEVBQUUsV0FBVyxjQUFhLENBQUEsR0FBRSxZQUFVLEdBQUUsYUFBYSxlQUFhLEdBQUUsYUFBYSxXQUFVLEdBQUc7UUFBUyxJQUFJLElBQUUsR0FBRyxJQUFFLEdBQUU7UUFBTSxHQUFFLFNBQU8sU0FBTyxLQUFJLENBQUEsQ0FBQyxDQUFDLEdBQUUsTUFBTSxHQUFDLENBQUE7SUFBRTtJQUFDLElBQUksSUFBRTtJQUFJLE9BQU8sSUFBRTtRQUFDLEdBQUcsQ0FBQztRQUFDLEdBQUcsQ0FBQztJQUFBLElBQUU7QUFBQztBQUFDLGVBQWU7SUFBSyxJQUFJLEtBQUUsTUFBTSxLQUFJLElBQUU7SUFBSSxPQUFPLElBQUU7UUFBQyxHQUFHLEVBQUM7UUFBQyxHQUFHLENBQUM7SUFBQSxJQUFFO0FBQUMiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTA4ZWM3OTM1MzBiZWUyMDQuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvdWJlci9ydWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFx1YmVyXFxcXHJ1bGVzLmpzXCIsXCJidW5kbGVJZFwiOlwiZGEwZGEzNjcxMjY4MGU1ZVwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IGs1N0JsXHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy91YmVyL3J1bGVzLmpzXHJcbiAqIERlcGVuZGVuY2llczpcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIH5jb3JlL2VudW1zIC0+IDFPM25jICA9PiAgc3JjL2NvcmUvZW51bXMuanNcclxuICogICB+dXRpbHMvZ2V0VGFyZ2V0T3JUaW1lb3V0IC0+IDFUQmhGICA9PiAgc3JjL3V0aWxzL2dldFRhcmdldE9yVGltZW91dC5qc1xyXG4gKi9cclxuXHJcbnZhciBuPWUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO24uZGVmaW5lSW50ZXJvcEZsYWcociksbi5leHBvcnQocixcIlVCRVJfREFURV9NT05USF9ERVNDUklQVElPTlwiLCgpPT5sKSxuLmV4cG9ydChyLFwiVUJFUl9EQVRFX1lFQVJfREVTQ1JJUFRJT05cIiwoKT0+cyksbi5leHBvcnQocixcIlVCRVJfUEhPTkVfQ09ERV9ERVNDUklQVElPTlwiLCgpPT51KSxuLmV4cG9ydChyLFwiZmluZE1haW5Gb3JtXCIsKCk9PmQpLG4uZXhwb3J0KHIsXCJidWlsZFViZXJTZWN0aW9uT3B0aW9uc1wiLCgpPT5GKSxuLmV4cG9ydChyLFwiZ2V0VWJlclBob25lQ29kZU9wdGlvblRleHRcIiwoKT0+Qiksbi5leHBvcnQocixcImJ1aWxkVWJlclBob25lUnVsZXNcIiwoKT0+Vyksbi5leHBvcnQocixcImV4dHJhY3RSdWxlc1wiLCgpPT5HKSxuLmV4cG9ydChyLFwiZ2V0Rm9ybVNuYXBzaG90XCIsKCk9PkspLG4uZXhwb3J0KHIsXCJnZXRFZHVBbmRFbXBsb3ltZW50U25hcHNob3RcIiwoKT0+Wiksbi5leHBvcnQocixcImdldEVkdWNhdGlvblJ1bGVzXCIsKCk9PmVyKSxuLmV4cG9ydChyLFwiZ2V0RW1wbG95bWVudFJ1bGVzXCIsKCk9PmVuKSxuLmV4cG9ydChyLFwic29ydEVkdWNhdGlvbkZpZWxkc1wiLCgpPT5laSksbi5leHBvcnQocixcInNvcnRFbXBsb3ltZW50RmllbGRzXCIsKCk9PmVhKSxuLmV4cG9ydChyLFwiZ2V0Rm9ybVNuYXBzaG90RnJvbVJ1bGVzXCIsKCk9PmVzKSxuLmV4cG9ydChyLFwiZ2V0Rm9ybVNuYXBzaG90V2l0aEVkdWNhdGlvbkFuZEVtcGxveW1lbnRcIiwoKT0+ZXUpO3ZhciBvPWUoXCJ+Y29yZS9lbnVtc1wiKSxpPWUoXCJ+dXRpbHMvZ2V0VGFyZ2V0T3JUaW1lb3V0XCIpLGE9bi5pbnRlcm9wRGVmYXVsdChpKTtsZXQgbD1cIlJldHVybiBvbmx5IHRoZSBtb250aCBpbiBNTSBmb3JtYXQsIGZyb20gMDEgdG8gMTIuXCIscz1cIlJldHVybiBvbmx5IHRoZSB5ZWFyIGluIFlZWVkgZm9ybWF0LlwiLHU9XCJSZXR1cm4gdGhlIGNvdW50cnkgbmFtZSBzaG93biBpbiB0aGUgcGhvbmUgY291bnRyeSBzZWxlY3Rvciwgc3VjaCBhcyBVbml0ZWQgU3RhdGVzLiBEbyBub3QgcmV0dXJuIG9ubHkgdGhlIGRpYWwgY29kZSBiZWNhdXNlIG11bHRpcGxlIGNvdW50cmllcyBjYW4gc2hhcmUgdGhlIHNhbWUgY29kZS5cIjtmdW5jdGlvbiBjKGUpe3JldHVybihlfHxcIlwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKX1mdW5jdGlvbiBkKCl7bGV0IGU9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZm9ybVwiKSk7aWYoMD09PWUubGVuZ3RoKXJldHVybiBudWxsO2xldCB0PWU9PntsZXQgdD1lLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWVdOm5vdChbdHlwZT1cImZpbGVcIl0pLCB0ZXh0YXJlYVtuYW1lXScpLmxlbmd0aCxyPWUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbcm9sZT1cImNvbWJvYm94XCJdJykubGVuZ3RoLG49ZS5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLmxlbmd0aCxvPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpKS5zb21lKGU9Pi9zdWJtaXQgYXBwbGljYXRpb24vaS50ZXN0KChlLnRleHRDb250ZW50fHxcIlwiKS50cmltKCkpKTtyZXR1cm4gdCtyKzUwKm4rKG8/NTA6MCl9LHI9ZVswXSxuPXQocik7Zm9yKGxldCBvIG9mIGUuc2xpY2UoMSkpe2xldCBlPXQobyk7ZT5uJiYocj1vLG49ZSl9cmV0dXJuIHJ9ZnVuY3Rpb24gZihlKXtsZXQgdD1lLmNsb3Nlc3QoJ1tkYXRhLWJhc2V3ZWI9XCJmbGV4LWdyaWQtaXRlbVwiXScpO2lmKHQpcmV0dXJuIHQ7bGV0IHI9ZS5jbG9zZXN0KCdbZGF0YS1iYXNld2ViKj1cImZvcm1cIl0sIFtkYXRhLWJhc2V3ZWIqPVwiY29udHJvbFwiXScpO2lmKHIpcmV0dXJuIHI7bGV0IG49ZS5jbG9zZXN0KCdbY2xhc3MqPVwiZm9ybS1jb250cm9sXCJdLCBbY2xhc3MqPVwiZmllbGRcIl0nKTtpZihuKXJldHVybiBuO2xldCBvPWUuY2xvc2VzdChcInNwYW5cIiksaT1vPy5uZXh0RWxlbWVudFNpYmxpbmc7aWYoaSlyZXR1cm4gaTtsZXQgYT1lLnBhcmVudEVsZW1lbnQ7cmV0dXJuIGEmJmEucXVlcnlTZWxlY3RvcignaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QsIFtyb2xlPVwiY29tYm9ib3hcIl0sIFtyb2xlPVwicmFkaW9ncm91cFwiXScpLGF9ZnVuY3Rpb24gcChlLHQscixuLG8saSl7bGV0IGE9ZS5pZHx8XCJcIixsPXQuZ2V0QXR0cmlidXRlKFwiZm9yXCIpfHxcIlwiLHM9XCJzdGFydC1kYXRlLW1vbnRoXCI9PT1hfHxhLmluY2x1ZGVzKFwic3RhcnRcIikmJmEuaW5jbHVkZXMoXCJtb250aFwiKSx1PVwiZW5kLWRhdGUtbW9udGhcIj09PWF8fGEuaW5jbHVkZXMoXCJlbmRcIikmJmEuaW5jbHVkZXMoXCJtb250aFwiKSxjPVwic3RhcnQtZGF0ZS1tb250aFwiPT09bHx8bC5pbmNsdWRlcyhcInN0YXJ0XCIpJiZsLmluY2x1ZGVzKFwibW9udGhcIiksZD1cImVuZC1kYXRlLW1vbnRoXCI9PT1sfHxsLmluY2x1ZGVzKFwiZW5kXCIpJiZsLmluY2x1ZGVzKFwibW9udGhcIiksZj0vc3RhcnQuKmRhdGUvaS50ZXN0KHIpLHA9L2VuZC4qZGF0ZS9pLnRlc3Qocik7aWYoIXMmJiF1JiYhYyYmIWQmJiFmJiYhcClyZXR1cm4hMTtsZXQgbT1zfHxjfHxmP1wic3RhcnRcIjpcImVuZFwiLGg9bi5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwiJHtvfS4ke2l9LiR7bX1EYXRlLnllYXJcIl1gKTtpZighaClyZXR1cm4hMTtsZXQgZz1BKGgsbSk7cmV0dXJuIGc9PT1lfWZ1bmN0aW9uIG0oZSx0KXtsZXQgcj10LnF1ZXJ5U2VsZWN0b3IoJ1tyb2xlPVwicmFkaW9ncm91cFwiXScpO2lmKHIpcmV0dXJuIHI7bGV0IG49ZS5wYXJlbnRFbGVtZW50O2lmKG4mJihyPW4ucXVlcnlTZWxlY3RvcignW3JvbGU9XCJyYWRpb2dyb3VwXCJdJykpKXJldHVybiByO2xldCBvPWUuY2xvc2VzdChcInNwYW5cIik7aWYobyl7bGV0IGU9by5uZXh0RWxlbWVudFNpYmxpbmc7aWYoZSYmKHI9ZS5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cInJhZGlvZ3JvdXBcIl0nKSkpcmV0dXJuIHJ9bGV0IGk9ZS5jbG9zZXN0KCdbZGF0YS1iYXNld2ViPVwiYmxvY2tcIl0nKTtyZXR1cm4gaSYmKHI9aS5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cInJhZGlvZ3JvdXBcIl0nKSk/cjpudWxsfWZ1bmN0aW9uIGgoZSl7cmV0dXJuIGU/ZS5zdGFydHNXaXRoKFwiZXhwZXJpZW5jZXMuXCIpP1wiRXhwZXJpZW5jZVwiOmUuc3RhcnRzV2l0aChcImVkdWNhdGlvbnMuXCIpP1wiRWR1Y2F0aW9uXCI6XCJcIjpcIlwifWZ1bmN0aW9uIGcoZSl7aWYoIWUpcmV0dXJuIG51bGw7bGV0IHQ9ZS5tYXRjaCgvXihlZHVjYXRpb25zfGV4cGVyaWVuY2VzKVxcLihcXGQrKVxcLi8pO2lmKCF0KXJldHVybiBudWxsO2xldCByPU51bWJlcih0WzJdKTtyZXR1cm4gTnVtYmVyLmlzRmluaXRlKHIpP3I6bnVsbH1mdW5jdGlvbiBiKGUsdCxyKXtsZXQgbj1jKHQpLG89ZyhyKTtyZXR1cm4gZSYmbnVsbCE9PW8/YCR7ZX0gJHtvKzF9ICR7bn1gOmU/YCR7ZX0gJHtufWA6bn1mdW5jdGlvbiB5KGUpe3JldHVybiBlLmRpc2FibGVkfHxlLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpfHxlLmhhc0F0dHJpYnV0ZShcInJlYWRvbmx5XCIpfWZ1bmN0aW9uIHYoZSx0LHIpe2xldCBuPWgocik7cmV0dXJuIGIobixgJHtlfSAtICR7dH1gLHIpfWZ1bmN0aW9uIHcoZSx0KXtsZXQgcj1lLmxlZnQtdC5sZWZ0LG49ZS50b3AtdC50b3A7cmV0dXJuIE1hdGguaHlwb3QocixuKX1mdW5jdGlvbiBTKGUpe2lmKCFlLmlzQ29ubmVjdGVkKXJldHVybiExO2xldCB0PXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUpO2lmKFwibm9uZVwiPT09dC5kaXNwbGF5fHxcImhpZGRlblwiPT09dC52aXNpYmlsaXR5KXJldHVybiExO2xldCByPWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7cmV0dXJuIHIud2lkdGg+MCYmci5oZWlnaHQ+MH1mdW5jdGlvbiBFKGUsdCxyKXtsZXQgbj1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLG89QXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwocikpLGk9by5maWx0ZXIoZT0+e2xldCB0PWU7cmV0dXJuISFTKHQpJiYoIShlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudHx8ZSBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnR8fGUgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCl8fCF5KGUpKX0pO2lmKDA9PT1pLmxlbmd0aClyZXR1cm4gbnVsbDtsZXQgYT1udWxsO2ZvcihsZXQgZSBvZiBpKXtsZXQgdD13KGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksbik7KCFhfHx0PGEuc2NvcmUpJiYoYT17ZWxlbWVudDplLHNjb3JlOnR9KX1yZXR1cm4gYT8uZWxlbWVudHx8bnVsbH1mdW5jdGlvbiB4KGUpe2xldCB0PWUuY2xvc2VzdCgnW2RhdGEtYmFzZXdlYj1cImZsZXgtZ3JpZC1pdGVtXCJdJyl8fGUuY2xvc2VzdCgnW2RhdGEtYmFzZXdlYj1cImZsZXgtZ3JpZFwiXScpfHxlLmNsb3Nlc3QoJ1tkYXRhLWJhc2V3ZWI9XCJibG9ja1wiXScpfHxlLmNsb3Nlc3QoXCJmb3JtXCIpfHxkb2N1bWVudC5ib2R5LHI9QXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWUkPVwiLnN0YXJ0RGF0ZS55ZWFyXCJdLCBpbnB1dFtuYW1lJD1cIi5lbmREYXRlLnllYXJcIl0nKSk7aWYoMD09PXIubGVuZ3RoKXJldHVybiBudWxsO2xldCBuPWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksbz1udWxsO2ZvcihsZXQgZSBvZiByKXtsZXQgdD13KGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksbik7KCFvfHx0PG8uc2NvcmUpJiYobz17ZWxlbWVudDplLHNjb3JlOnR9KX1yZXR1cm4gbz8uZWxlbWVudHx8bnVsbH1mdW5jdGlvbiBDKGUsdCl7bGV0IHI9ZS5tYXRjaChSZWdFeHAoYF4ke3R9XFxcXC4oXFxcXGQrKVxcXFwuYCkpO2lmKCFyKXJldHVybiBudWxsO2xldCBuPU51bWJlcihyWzFdKTtyZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pP246bnVsbH1mdW5jdGlvbiBBKGUsdCl7bGV0IHI9ZS5jbG9zZXN0KCdbZGF0YS1iYXNld2ViPVwiYmxvY2tcIl0nKSxuPXJ8fGUuY2xvc2VzdCgnW2RhdGEtYmFzZXdlYj1cImZsZXgtZ3JpZC1pdGVtXCJdJyl8fGUuY2xvc2VzdCgnW2RhdGEtYmFzZXdlYj1cImZsZXgtZ3JpZFwiXScpfHxlLmNsb3Nlc3QoXCJmb3JtXCIpfHxkb2N1bWVudC5ib2R5LG89ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxpPWUubmFtZXx8XCJcIixhPWkuaW5jbHVkZXMoXCIuZW5kRGF0ZS55ZWFyXCIpLGw9aS5pbmNsdWRlcyhcIi5zdGFydERhdGUueWVhclwiKSxzPVwiZW5kXCI9PT10fHxhLHU9XCJzdGFydFwiPT09dHx8bCxjPVwic3RhcnRcIj09PXQ/WydpbnB1dFtyb2xlPVwiY29tYm9ib3hcIl0jc3RhcnQtZGF0ZS1tb250aCcsJ2lucHV0W3JvbGU9XCJjb21ib2JveFwiXVtpZCo9XCJzdGFydFwiXVtpZCo9XCJtb250aFwiXSddOlsnaW5wdXRbcm9sZT1cImNvbWJvYm94XCJdI2VuZC1kYXRlLW1vbnRoJywnaW5wdXRbcm9sZT1cImNvbWJvYm94XCJdW2lkKj1cImVuZFwiXVtpZCo9XCJtb250aFwiXSddLGQ9W107Zm9yKGxldCBlIG9mIGMpe2xldCB0PUFycmF5LmZyb20obi5xdWVyeVNlbGVjdG9yQWxsKGUpKTtpZih0Lmxlbmd0aD4wKXtkPXQ7YnJlYWt9fWlmKDA9PT1kLmxlbmd0aCl7bGV0IGU9QXJyYXkuZnJvbShuLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3JvbGU9XCJjb21ib2JveFwiXScpKTtmb3IobGV0IHQgb2YgZSl7aWYodC5jbG9zZXN0KCdbZGF0YS1iYXNld2ViPVwicGhvbmUtaW5wdXRcIl0nKSljb250aW51ZTtsZXQgZT10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLHI9NTA+TWF0aC5hYnMoZS50b3Atby50b3ApJiYyMDA+TWF0aC5hYnMoZS5sZWZ0LW8ubGVmdCk7aWYoIXIpY29udGludWU7bGV0IG49ZS5yaWdodDxvLmxlZnQsaT1zJiZhfHx1JiZsO24mJmkmJmQucHVzaCh0KX19aWYoMD09PWQubGVuZ3RoKXJldHVybiBudWxsO2xldCBmPW51bGw7Zm9yKGxldCBlIG9mIGQpe2xldCB0PXcoZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxvKTsoIWZ8fHQ8Zi5zY29yZSkmJihmPXtlbGVtZW50OmUsc2NvcmU6dH0pfXJldHVybiBmPy5lbGVtZW50fHxudWxsfWZ1bmN0aW9uIGsoZSl7cmV0dXJuL14oU3RhcnR8RW5kKSBEYXRlIC0gTW9udGgkL2kudGVzdChlKT9sOi9eKFN0YXJ0fEVuZCkgRGF0ZSAtIFllYXIkL2kudGVzdChlKT9zOnZvaWQgMH1mdW5jdGlvbiBUKGUpe2xldCB0PXtcInN0YXJ0IGRhdGUgLSBtb250aFwiOjEsXCJzdGFydCBkYXRlIC0geWVhclwiOjIsXCJlbmQgZGF0ZSAtIG1vbnRoXCI6MyxcImVuZCBkYXRlIC0geWVhclwiOjR9O3JldHVybiB0W2UudG9Mb3dlckNhc2UoKV0/P251bGx9ZnVuY3Rpb24gRihlKXtyZXR1cm4gZS5tYXAoKGUsdCk9Pih7dHlwZTplLnR5cGUsbGFiZWw6ZS5sYWJlbCxvcHRpb25zOmUub3B0aW9uc3x8W10sZGVzY3JpcHRpb246ZS5kZXNjcmlwdGlvbnx8ayhlLmxhYmVsKSxfX2luZGV4OnR9KSkuc29ydCgoZSx0KT0+e2xldCByPVQoZS5sYWJlbCksbj1UKHQubGFiZWwpO3JldHVybiBudWxsIT09ciYmbnVsbCE9PW4/ci1uOmUuX19pbmRleC10Ll9faW5kZXh9KS5tYXAoKHtfX2luZGV4OmUsZGVzY3JpcHRpb246dCwuLi5yfSk9Pih7Li4uciwuLi50P3tkZXNjcmlwdGlvbjp0fTp7fX0pKX1mdW5jdGlvbiBJKGUsdCxyKXtsZXQgbj17dHlwZTpyLGxhYmVsOnQscmVxdWlyZWQ6XCJ0cnVlXCI9PT1lLmdldEF0dHJpYnV0ZShcImFyaWEtcmVxdWlyZWRcIiksJGlucHV0OmUsJGxhYmVsOmV9O3JldHVybiByPT09by5GSUVMRF9UWVBFLlNFTEVDVD9uLm9wdGlvbnM9W106cj09PW8uRklFTERfVFlQRS5DSEVDS0JPWCYmKG4ub3B0aW9ucz1bXCJZZXNcIixcIk5vXCJdLG4uJGNoZWNrYm94cz1bZV0pLG59ZnVuY3Rpb24gaihlLHQpe3JldHVybiBJKGUsdCxvLkZJRUxEX1RZUEUuVEVYVCl9ZnVuY3Rpb24gRChlLHQpe3JldHVybiBJKGUsdCxvLkZJRUxEX1RZUEUuU0VMRUNUKX1mdW5jdGlvbiBQKGUsdCl7cmV0dXJuIEkoZSx0LG8uRklFTERfVFlQRS5DSEVDS0JPWCl9ZnVuY3Rpb24gXyhlKXtsZXQgdD1bXTtmb3IobGV0IHIgb2YgZSl7bGV0IGU9ci5vcHRpb25zfHxbXTtmb3IobGV0IHIgb2YgZSl7bGV0IGU9dC5maW5kKGU9PmUubGFiZWw9PT1yLmxhYmVsKTtlfHx0LnB1c2goe3R5cGU6ci50eXBlfHxcInRleHRcIixsYWJlbDpyLmxhYmVsLG9wdGlvbnM6ci5vcHRpb25zfHxbXSwuLi5yLmRlc2NyaXB0aW9uP3tkZXNjcmlwdGlvbjpyLmRlc2NyaXB0aW9ufTp7fX0pfX1yZXR1cm4gdH1mdW5jdGlvbiBMKGUsdCl7dD8ubGFiZWwmJihlLnNvbWUoZT0+ZS5sYWJlbD09PXQubGFiZWwpfHxlLnB1c2godCkpfWZ1bmN0aW9uIFIoZSx0KXtsZXQgcj1lPT09by5GSUVMRF9UWVBFLkVEVUNBVElPTixuPXI/W3t0eXBlOm8uRklFTERfVFlQRS5URVhULGxhYmVsOlwiU2Nob29sXCIscmVxdWlyZWQ6ITF9LHt0eXBlOm8uRklFTERfVFlQRS5URVhULGxhYmVsOlwiRGVncmVlXCIscmVxdWlyZWQ6ITF9LHt0eXBlOm8uRklFTERfVFlQRS5URVhULGxhYmVsOlwiTWFqb3JcIixyZXF1aXJlZDohMX0se3R5cGU6by5GSUVMRF9UWVBFLlRFWFQsbGFiZWw6XCJTdGFydCBEYXRlIC0gTW9udGhcIixyZXF1aXJlZDohMX0se3R5cGU6by5GSUVMRF9UWVBFLlRFWFQsbGFiZWw6XCJTdGFydCBEYXRlIC0gWWVhclwiLHJlcXVpcmVkOiExfSx7dHlwZTpvLkZJRUxEX1RZUEUuVEVYVCxsYWJlbDpcIkVuZCBEYXRlIC0gTW9udGhcIixyZXF1aXJlZDohMX0se3R5cGU6by5GSUVMRF9UWVBFLlRFWFQsbGFiZWw6XCJFbmQgRGF0ZSAtIFllYXJcIixyZXF1aXJlZDohMX0se3R5cGU6by5GSUVMRF9UWVBFLkNIRUNLQk9YLGxhYmVsOlwiQ3VycmVudFwiLHJlcXVpcmVkOiExLG9wdGlvbnM6W1wiWWVzXCIsXCJOb1wiXX1dOlt7dHlwZTpvLkZJRUxEX1RZUEUuVEVYVCxsYWJlbDpcIkNvbXBhbnlcIixyZXF1aXJlZDohMX0se3R5cGU6by5GSUVMRF9UWVBFLlRFWFQsbGFiZWw6XCJQb3NpdGlvblwiLHJlcXVpcmVkOiExfSx7dHlwZTpvLkZJRUxEX1RZUEUuVEVYVCxsYWJlbDpcIkRlc2NyaXB0aW9uIChvcHRpb25hbClcIixyZXF1aXJlZDohMX0se3R5cGU6by5GSUVMRF9UWVBFLlRFWFQsbGFiZWw6XCJTdGFydCBEYXRlIC0gTW9udGhcIixyZXF1aXJlZDohMX0se3R5cGU6by5GSUVMRF9UWVBFLlRFWFQsbGFiZWw6XCJTdGFydCBEYXRlIC0gWWVhclwiLHJlcXVpcmVkOiExfSx7dHlwZTpvLkZJRUxEX1RZUEUuVEVYVCxsYWJlbDpcIkVuZCBEYXRlIC0gTW9udGhcIixyZXF1aXJlZDohMX0se3R5cGU6by5GSUVMRF9UWVBFLlRFWFQsbGFiZWw6XCJFbmQgRGF0ZSAtIFllYXJcIixyZXF1aXJlZDohMX0se3R5cGU6by5GSUVMRF9UWVBFLkNIRUNLQk9YLGxhYmVsOlwiQ3VycmVudFwiLHJlcXVpcmVkOiExLG9wdGlvbnM6W1wiWWVzXCIsXCJOb1wiXX1dO3JldHVybnt0eXBlOmUsbGFiZWw6dCxyZXF1aXJlZDohMSxvcHRpb25zOltdLGNoaWxkcmVuOm59fWZ1bmN0aW9uIE8oZSl7TChlLFIoby5GSUVMRF9UWVBFLkVEVUNBVElPTixcIkVkdWNhdGlvblwiKSksTChlLFIoby5GSUVMRF9UWVBFLkVEVUNBVElPTixcImVkdWNhdGlvblwiKSksTChlLFIoby5GSUVMRF9UWVBFLkVNUExPWU1FTlQsXCJFbXBsb3ltZW50XCIpKSxMKGUsUihvLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVCxcImVtcGxveW1lbnRcIikpfWZ1bmN0aW9uIE0oZSl7bGV0IHQ9dD0+QXJyYXkuZnJvbShuZXcgU2V0KEFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFtuYW1lXj1cIiR7dH0uXCJdYCkpLm1hcChlPT5DKGUubmFtZXx8XCJcIix0KSkuZmlsdGVyKGU9Pm51bGwhPT1lKSkpLnNvcnQoKGUsdCk9PmUtdCk7cmV0dXJue2VkdWNhdGlvbkluZGljZXM6dChcImVkdWNhdGlvbnNcIiksZXhwZXJpZW5jZUluZGljZXM6dChcImV4cGVyaWVuY2VzXCIpfX1hc3luYyBmdW5jdGlvbiBOKGUpe2xldCB0PU0oZSkscj0wLG49NDthd2FpdCAoMCxhLmRlZmF1bHQpKCgpPT57bGV0IG89TShlKTtyZXR1cm4gby5lZHVjYXRpb25JbmRpY2VzLmpvaW4oXCIsXCIpPT09dC5lZHVjYXRpb25JbmRpY2VzLmpvaW4oXCIsXCIpJiZvLmV4cGVyaWVuY2VJbmRpY2VzLmpvaW4oXCIsXCIpPT09dC5leHBlcmllbmNlSW5kaWNlcy5qb2luKFwiLFwiKT9yKys6cj0wLHQ9byxyPj1ufHxudWxsfSwoKT0+ITEsMzApfWFzeW5jIGZ1bmN0aW9uICQoZSl7bGV0IHQ9QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xhYmVsW2RhdGEtYmFzZXdlYj1cImZvcm0tY29udHJvbC1sYWJlbFwiXScpKSxyPVwiRG8geW91IHJlc2lkZSBpbiB0aGUgVW5pdGVkIFN0YXRlcz9cIixuPXQuZmluZChlPT4oZS50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpPT09cik7aWYobil7bGV0IHQ9bi5jbG9zZXN0KCdbZGF0YS1iYXNld2ViPVwiZmxleC1ncmlkLWl0ZW1cIl0nKXx8bi5jbG9zZXN0KCdbZGF0YS1iYXNld2ViPVwiYmxvY2tcIl0nKXx8bi5wYXJlbnRFbGVtZW50LHI9dD8ucXVlcnlTZWxlY3RvcignW3JvbGU9XCJyYWRpb2dyb3VwXCJdJyk7aWYocil7bGV0IHQ9QXJyYXkuZnJvbShyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpKSxuPXQuZmluZChlPT57bGV0IHQ9ZS5jbG9zZXN0KCdsYWJlbFtkYXRhLWJhc2V3ZWI9XCJyYWRpb1wiXScpLHI9KHQ/LnRleHRDb250ZW50fHxcIlwiKS50cmltKCkudG9Mb3dlckNhc2UoKTtyZXR1cm5cInllc1wiPT09cnx8XCJ5ZXNcIj09PWUudmFsdWUudG9Mb3dlckNhc2UoKX0pO2lmKG4/LmNoZWNrZWQpe2xldCB0PWUucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInppcENvZGVcIl0nKTshdCYmbiYmKG4uY2xpY2soKSxhd2FpdCAoMCxhLmRlZmF1bHQpKCgpPT57bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiemlwQ29kZVwiXScpO3JldHVybiB0fHxudWxsfSwoKT0+ITEsMzApKX1lbHNlIG4mJiFuLmNoZWNrZWQmJihuLmNsaWNrKCksYXdhaXQgKDAsYS5kZWZhdWx0KSgoKT0+e2xldCB0PWUucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInppcENvZGVcIl0nKTtyZXR1cm4gdHx8bnVsbH0sKCk9PiExLDMwKSl9fWxldCBvPVwiUGxlYXNlIGNoZWNrIG9uZSBvZiB0aGUgYm94ZXMgYmVsb3dcIixpPXQuZmluZChlPT4oZS50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpPT09byk7aWYoaSl7bGV0IHI9aS5jbG9zZXN0KCdbZGF0YS1iYXNld2ViPVwiZmxleC1ncmlkLWl0ZW1cIl0nKXx8aS5jbG9zZXN0KCdbZGF0YS1iYXNld2ViPVwiYmxvY2tcIl0nKXx8aS5wYXJlbnRFbGVtZW50LG49cj8ucXVlcnlTZWxlY3RvcignW3JvbGU9XCJyYWRpb2dyb3VwXCJdJyk7aWYobil7bGV0IHI9QXJyYXkuZnJvbShuLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpKSxvPXIuZmluZChlPT57bGV0IHQ9ZS5jbG9zZXN0KCdsYWJlbFtkYXRhLWJhc2V3ZWI9XCJyYWRpb1wiXScpLHI9KHQ/LnRleHRDb250ZW50fHxcIlwiKS50cmltKCkudG9Mb3dlckNhc2UoKSxuPShlLnZhbHVlfHxcIlwiKS50cmltKCkudG9Mb3dlckNhc2UoKTtyZXR1cm4gci5pbmNsdWRlcyhcInllc1wiKSYmci5pbmNsdWRlcyhcImRpc2FiaWxpdHlcIil8fHIuaW5jbHVkZXMoXCJwcmVmZXIgbm90IHRvIHNheVwiKXx8bi5pbmNsdWRlcyhcInllc1wiKSYmbi5pbmNsdWRlcyhcImRpc2FiaWxpdHlcIil8fG4uaW5jbHVkZXMoXCJwcmVmZXJcIil9KSxpPVwiRG8geW91IG5lZWQgdG8gcmVxdWVzdCBhY2NvbW1vZGF0aW9ucyBkdXJpbmcgdGhlIHJlY3J1aXRpbmcgcHJvY2VzcyBkdWUgdG8gZGlzYWJpbGl0eT9cIjt0LmZpbmQoZT0+KGUudGV4dENvbnRlbnR8fFwiXCIpLnRyaW0oKT09PWkpO2xldCBsPWUucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImRpc2FiaWxpdHlBY2NvbW9kYXRpb25cIl0nKTtsfHwhb3x8by5jaGVja2VkfHwoby5jbGljaygpLGF3YWl0ICgwLGEuZGVmYXVsdCkoKCk9PntsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJkaXNhYmlsaXR5QWNjb21vZGF0aW9uXCJdJyk7cmV0dXJuIHR8fG51bGx9LCgpPT4hMSwzMCkpfX19ZnVuY3Rpb24gQihlKXtsZXQgdD1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcImRpdlwiKSkubWFwKGU9PmMoZS50ZXh0Q29udGVudHx8XCJcIikpLmZpbHRlcihCb29sZWFuKSxyPXQuZmluZChlPT4hL15cXCtcXGQrJC8udGVzdChlKSYmL1tBLVphLXpcXHUwMEMwLVxcdTAyNEZcXHUwMzcwLVxcdTAzRkZcXHUwNDAwLVxcdTA0RkZcXHUwNTkwLVxcdTA1RkZcXHUwNjAwLVxcdTA2RkZcXHU0RTAwLVxcdTlGRkZdLy50ZXN0KGUpKTtpZihyKXJldHVybiByO2xldCBuPWMoZS50ZXh0Q29udGVudHx8XCJcIik7cmV0dXJuIG4ucmVwbGFjZSgvXFwrXFxkK1xccyokLyxcIlwiKS50cmltKCl8fG59YXN5bmMgZnVuY3Rpb24gcShlLHQ9e30pe3RyeXtlLmZvY3VzKCksZS5jbGljaygpO2xldCByPWF3YWl0ICgwLGEuZGVmYXVsdCkoKCk9PntsZXQgdD1lLmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIikscj10P2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHQpOm51bGw7cmV0dXJuIHImJlwibGlzdGJveFwiPT09ci5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpP3I6bnVsbH0sKCk9PiExLDIpO2lmKHIpcmV0dXJuIEFycmF5LmZyb20oci5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cIm9wdGlvblwiXScpKS5tYXAoZT0+dC5waG9uZUNvZGVPbmx5P0IoZSk6YyhlLnRleHRDb250ZW50fHxcIlwiKSkuZmlsdGVyKEJvb2xlYW4pfWNhdGNoe31maW5hbGx5e3RyeXtlLmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXlkb3duXCIse2tleTpcIkVzY2FwZVwiLGJ1YmJsZXM6ITB9KSksZS5ibHVyKCl9Y2F0Y2h7fX1yZXR1cm5bXX1sZXQgVT0naW5wdXRbbmFtZT1cIm1vYmlsZU51bWJlclwiXSwgaW5wdXRbdHlwZT1cInRlbFwiXTpub3QoW3JvbGU9XCJjb21ib2JveFwiXSksIGlucHV0W2lucHV0bW9kZT1cInRlbFwiXTpub3QoW3JvbGU9XCJjb21ib2JveFwiXSksIGlucHV0W2F1dG9jb21wbGV0ZSo9XCJ0ZWxcIl06bm90KFtyb2xlPVwiY29tYm9ib3hcIl0pLCBpbnB1dFthdXRvY29tcGxldGU9XCJ0ZWwtbmF0aW9uYWxcIl06bm90KFtyb2xlPVwiY29tYm9ib3hcIl0pJztmdW5jdGlvbiBIKGUpe3JldHVybi9cXGJudW1iZXJcXGIvaS50ZXN0KGUpP2UucmVwbGFjZSgvXFxibnVtYmVyXFxiL2ksXCJjb2RlXCIpOmAke2V9IGNvZGVgLnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpfWZ1bmN0aW9uIFkoZSx0KXtsZXQgcj1bZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1iYXNld2ViPVwicGhvbmUtaW5wdXRcIl0nKSx0LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJhc2V3ZWI9XCJwaG9uZS1pbnB1dFwiXScpXS5maWx0ZXIoQm9vbGVhbik7cmV0dXJuIHIuZmlsdGVyKChlLHQpPT5yLmluZGV4T2YoZSk9PT10KX1mdW5jdGlvbiB6KGUsdCl7Zm9yKGxldCByIG9mIFkoZSx0KSl7bGV0IGU9ci5xdWVyeVNlbGVjdG9yKCdpbnB1dFtyb2xlPVwiY29tYm9ib3hcIl0nKTtpZihlJiYheShlKSlyZXR1cm4gZX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBWKGUsdCl7bGV0IHI9ZS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibW9iaWxlTnVtYmVyXCJdJyk7aWYociYmIXkocikpcmV0dXJuIHI7bGV0IG49dC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibW9iaWxlTnVtYmVyXCJdJyk7aWYobiYmIXkobikpcmV0dXJuIG47bGV0IG89dC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lKj1cIm1vYmlsZVwiXSwgaW5wdXRbbmFtZSo9XCJwaG9uZVwiXScpO2ZvcihsZXQgZSBvZiBBcnJheS5mcm9tKG8pKWlmKCF5KGUpJiZcImhpZGRlblwiIT09ZS50eXBlJiZcImNvbWJvYm94XCIhPT1lLmdldEF0dHJpYnV0ZShcInJvbGVcIikpcmV0dXJuIGU7Zm9yKGxldCByIG9mIFkoZSx0KSl7bGV0IGU9ci5xdWVyeVNlbGVjdG9yQWxsKFUpO2ZvcihsZXQgdCBvZiBBcnJheS5mcm9tKGUpKWlmKCghdC5uYW1lfHxcIm1vYmlsZU51bWJlclwiPT09dC5uYW1lKSYmIXkodCkpcmV0dXJuIHR9bGV0IGk9RShlLGUsVSk7aWYoaSYmIXkoaSkpcmV0dXJuIGk7bGV0IGE9dC5xdWVyeVNlbGVjdG9yQWxsKFUpO2ZvcihsZXQgZSBvZiBBcnJheS5mcm9tKGEpKWlmKCF5KGUpKXJldHVybiBlO3JldHVybiBudWxsfWFzeW5jIGZ1bmN0aW9uIFcoZSx0LHIsbil7bGV0IGk9W10sYT16KHQscik7aWYoYSl7bGV0IHQ9YXdhaXQgcShhLHtwaG9uZUNvZGVPbmx5OiEwfSk7aS5wdXNoKHt0eXBlOm8uRklFTERfVFlQRS5TRUxFQ1QsbGFiZWw6SChlKSxyZXF1aXJlZDohMCxvcHRpb25zOnQsZGVzY3JpcHRpb246dSwkaW5wdXQ6YSwkbGFiZWw6bn0pfWxldCBsPVYodCxyKTtyZXR1cm4gbCYmaS5wdXNoKHt0eXBlOm8uRklFTERfVFlQRS5URVhULGxhYmVsOmUscmVxdWlyZWQ6ITAsJGlucHV0OmwsJGxhYmVsOm59KSxpfWFzeW5jIGZ1bmN0aW9uIEcoKXtsZXQgZT1bXSx0PWQoKTtpZighdClyZXR1cm4gZTthd2FpdCBOKHQpLGF3YWl0ICQodCk7bGV0IHI9QXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xhYmVsW2RhdGEtYmFzZXdlYj1cImZvcm0tY29udHJvbC1sYWJlbFwiXScpKTtmb3IobGV0IG4gb2YoMD09PXIubGVuZ3RoJiYwPT09KHI9QXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xhYmVsOm5vdChbZm9yPVwiXCJdKScpKSkubGVuZ3RoJiYocj1BcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbCgnbGFiZWxbY2xhc3MqPVwibGFiZWxcIl0sIGxhYmVsW2NsYXNzKj1cIkxhYmVsXCJdJykpKSxyKSl7bGV0IHI9YyhuLnRleHRDb250ZW50fHxcIlwiKTtpZighciljb250aW51ZTtsZXQgaT1yLmluY2x1ZGVzKFwiKlwiKSxhPXIucmVwbGFjZSgvXFxzKlxcKlxccyokLyxcIlwiKSxsPWYobik7aWYoIWwpY29udGludWU7bGV0IHM9L156aXBcXHMqY29kZXx6aXBjb2RlfHppcF9jb2RlL2kudGVzdChhKTtpZihzKTtlbHNle2xldCByPW0obixsKTtpZihyKXtsZXQgaT1BcnJheS5mcm9tKHIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJykpO2lmKDA9PT1pLmxlbmd0aCljb250aW51ZTtsZXQgbD1pLm1hcChlPT57bGV0IHI9ZS5jbG9zZXN0KCdsYWJlbFtkYXRhLWJhc2V3ZWI9XCJyYWRpb1wiXScpO3J8fChyPWUuY2xvc2VzdChcImxhYmVsXCIpKSwhciYmZS5pZCYmKHI9dC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke2UuaWR9XCJdYCkpO2xldCBuPWMocj8udGV4dENvbnRlbnR8fFwiXCIpfHxjKGUudmFsdWV8fFwiXCIpO3JldHVybiBufSkuZmlsdGVyKEJvb2xlYW4pO2UucHVzaCh7dHlwZTpvLkZJRUxEX1RZUEUuUkFESU9HUk9VUCxsYWJlbDphLHJlcXVpcmVkOiEwLG9wdGlvbnM6bCwkaW5wdXQ6aVswXSwkbGFiZWw6bn0pO2NvbnRpbnVlfX1sZXQgdT1FKG4sbCxcInRleHRhcmVhW25hbWVdXCIpO2lmKHUmJiF5KHUpKXtpZih1Lm5hbWU/LnN0YXJ0c1dpdGgoXCJlZHVjYXRpb25zLlwiKXx8dS5uYW1lPy5zdGFydHNXaXRoKFwiZXhwZXJpZW5jZXMuXCIpKWNvbnRpbnVlO2xldCB0PWgodS5uYW1lKTtlLnB1c2goe3R5cGU6by5GSUVMRF9UWVBFLlRFWFQsbGFiZWw6Yih0LGEsdS5uYW1lKSxyZXF1aXJlZDpcInRydWVcIj09PXUuZ2V0QXR0cmlidXRlKFwiYXJpYS1yZXF1aXJlZFwiKXx8aSwkaW5wdXQ6dSwkbGFiZWw6bn0pO2NvbnRpbnVlfWlmKC9waG9uZS9pLnRlc3QoYSkpe2xldCByPWF3YWl0IFcoYSxsLHQsbik7aWYoci5sZW5ndGg+MCl7ZS5wdXNoKC4uLnIpO2NvbnRpbnVlfX1sZXQgZD1udWxsLHA9bi5nZXRBdHRyaWJ1dGUoXCJmb3JcIik7aWYocCl7bGV0IGU9bi5jbG9zZXN0KFwiZm9ybVwiKTtlJiYoZD1lLnF1ZXJ5U2VsZWN0b3IoYGlucHV0W3JvbGU9XCJjb21ib2JveFwiXSMke3B9YCkpfWlmKCghZHx8eShkKSkmJihkPUUobixsLCdpbnB1dFtyb2xlPVwiY29tYm9ib3hcIl0nKSksZCYmIXkoZCkpe2lmKC9waG9uZS9pLnRlc3QoYSkpe2xldCBlPWQuY2xvc2VzdCgnW2RhdGEtYmFzZXdlYj1cInBob25lLWlucHV0XCJdJyk7aWYoZSljb250aW51ZX1sZXQgdD0vXnppcFxccypjb2RlfHppcGNvZGV8emlwX2NvZGUvaS50ZXN0KGEpfHwvXnppcFxccypjb2RlfHppcGNvZGV8emlwX2NvZGUvaS50ZXN0KGQubmFtZXx8XCJcIik7aWYodCljb250aW51ZTtsZXQgcj1kLmlkfHxcIlwiLHM9ZC5uYW1lfHxcIlwiLHU9YS50b0xvd2VyQ2FzZSgpLGM9XCJzdGFydC1kYXRlLW1vbnRoXCI9PT1yfHxyLmluY2x1ZGVzKFwic3RhcnRcIikmJnIuaW5jbHVkZXMoXCJtb250aFwiKSxmPVwiZW5kLWRhdGUtbW9udGhcIj09PXJ8fHIuaW5jbHVkZXMoXCJlbmRcIikmJnIuaW5jbHVkZXMoXCJtb250aFwiKTtjfHxmfHwoYz1zLmluY2x1ZGVzKFwic3RhcnREYXRlXCIpJiZzLmluY2x1ZGVzKFwibW9udGhcIiksZj1zLmluY2x1ZGVzKFwiZW5kRGF0ZVwiKSYmcy5pbmNsdWRlcyhcIm1vbnRoXCIpKSxjfHxmfHwoYz0vc3RhcnQuKmRhdGUuKm1vbnRofG1vbnRoLipzdGFydC4qZGF0ZS9pLnRlc3QodSksZj0vZW5kLipkYXRlLiptb250aHxtb250aC4qZW5kLipkYXRlL2kudGVzdCh1KSk7bGV0IHA9eChkKSxtPXA/Lm5hbWV8fG51bGw7aWYoY3x8Znx8IW18fChjPW0uaW5jbHVkZXMoXCJzdGFydERhdGVcIiksZj1tLmluY2x1ZGVzKFwiZW5kRGF0ZVwiKSksbT8uc3RhcnRzV2l0aChcImVkdWNhdGlvbnMuXCIpfHxtPy5zdGFydHNXaXRoKFwiZXhwZXJpZW5jZXMuXCIpKWNvbnRpbnVlO2xldCBnPUUobixsLCdpbnB1dFtuYW1lXTpub3QoW3R5cGU9XCJmaWxlXCJdKSwgdGV4dGFyZWFbbmFtZV0nKXx8cCx5PWc/Lm5hbWV8fG0sdz1jfHxmP3YoYz9cIlN0YXJ0IERhdGVcIjpcIkVuZCBEYXRlXCIsXCJNb250aFwiLG0pOmIoaCh5KSxhLHkpLFM9YXdhaXQgcShkKSxDPWwucXVlcnlTZWxlY3RvcignW2RhdGEtYmFzZXdlYj1cImZvcm0tY29udHJvbC1jYXB0aW9uXCJdJyk7aWYoQ3x8KEM9bC5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cImFsZXJ0XCJdJykpLCFDKXtsZXQgZT1sLnBhcmVudEVsZW1lbnQ7ZSYmKEM9ZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1iYXNld2ViPVwiZm9ybS1jb250cm9sLWNhcHRpb25cIl0nKSl9aWYoIUMmJiEoQz1sLnF1ZXJ5U2VsZWN0b3IoJ1tjbGFzcyo9XCJlcnJvclwiXSwgW2NsYXNzKj1cIkVycm9yXCJdLCBbY2xhc3MqPVwiY2FwdGlvblwiXSwgW2NsYXNzKj1cIkNhcHRpb25cIl0nKSkpe2xldCBlPWwucGFyZW50RWxlbWVudDtlJiYoQz1lLnF1ZXJ5U2VsZWN0b3IoJ1tjbGFzcyo9XCJlcnJvclwiXSwgW2NsYXNzKj1cIkVycm9yXCJdJykpfWxldCBBPUM/LnRleHRDb250ZW50Py5pbmNsdWRlcyhcIlJlcXVpcmVkIGZpZWxkXCIpfHxDPy50ZXh0Q29udGVudD8uaW5jbHVkZXMoXCJyZXF1aXJlZFwiKXx8ITEsaz1cInRydWVcIj09PWQuZ2V0QXR0cmlidXRlKFwiYXJpYS1yZXF1aXJlZFwiKXx8XCJ0cnVlXCI9PT1kLmdldEF0dHJpYnV0ZShcImFyaWEtaW52YWxpZFwiKXx8aXx8QSxUPS9jdXJyZW50bHkuKmVtcGxveWVkLipzdWJzaWRpYXJpZXM/L2kudGVzdCh3KXx8L3N1YnNpZGlhcmllcz8uKmVtcGxveWVkL2kudGVzdCh3KTtlLnB1c2goe3R5cGU6by5GSUVMRF9UWVBFLlNFTEVDVCxsYWJlbDp3LHJlcXVpcmVkOmt8fFQsb3B0aW9uczpTLCRpbnB1dDpkLCRsYWJlbDpufSk7Y29udGludWV9bGV0IGc9bnVsbCx3PW4uZ2V0QXR0cmlidXRlKFwiZm9yXCIpfHxcIlwiO2lmKHcpe2xldCBlPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHcpO2UgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50JiYobC5jb250YWlucyhlKXx8dC5jb250YWlucyhlKSkmJihnPWUpfWlmKGd8fChnPUUobixsLCdpbnB1dDpub3QoW3R5cGU9XCJmaWxlXCJdKTpub3QoW3JvbGU9XCJjb21ib2JveFwiXSknKSksZyYmIXkoZykmJlwiY29tYm9ib3hcIiE9PWcuZ2V0QXR0cmlidXRlKFwicm9sZVwiKSl7aWYoZy5uYW1lPy5zdGFydHNXaXRoKFwiZWR1Y2F0aW9ucy5cIil8fGcubmFtZT8uc3RhcnRzV2l0aChcImV4cGVyaWVuY2VzLlwiKXx8XCJtb2JpbGVOdW1iZXJcIj09PWcubmFtZSljb250aW51ZTtsZXQgdD0vbGlua2VkSW5VUkx8Z2l0aHViVVJMfG90aGVyVVJML2kudGVzdChnLm5hbWV8fFwiXCIpO2lmKHQpY29udGludWU7bGV0IHI9aChnLm5hbWUpLGw9YihyLGEsZy5uYW1lKSxzPShnLm5hbWV8fGcuaWR8fGcuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKXx8Zy5nZXRBdHRyaWJ1dGUoXCJzcmMvY29udGVudHMvc2l0ZXMvbWV0YWNhcmVlcnMvYXV0b2NvbXBsZXRlXCIpfHxcIlwiKS50b0xvd2VyQ2FzZSgpLHU9L2ZpcnN0XFxzKm5hbWV8bGFzdFxccypuYW1lL2kudGVzdChsKTtpZih1KXtsZXQgZT0vZmlyc3RuYW1lfGZpcnN0XFxzKm5hbWV8Z2l2ZW4tbmFtZXxnaXZlbm5hbWV8Z2l2ZW4vaS50ZXN0KHMpLHQ9L2xhc3RuYW1lfGxhc3RcXHMqbmFtZXxmYW1pbHktbmFtZXxmYW1pbHluYW1lfGZhbWlseXxzdXJuYW1lL2kudGVzdChzKTtlJiYhdD9sPVwiRmlyc3QgTmFtZVwiOnQmJiFlJiYobD1cIkxhc3QgTmFtZVwiKX1sZXQgYz0vZmlyc3RcXHMqbmFtZS9pLnRlc3QobCksZD0vbGFzdFxccypuYW1lL2kudGVzdChsKSxmPS9eemlwXFxzKmNvZGV8emlwY29kZXx6aXBfY29kZS9pLnRlc3QobCl8fC9eemlwXFxzKmNvZGV8emlwY29kZXx6aXBfY29kZS9pLnRlc3QoZy5uYW1lfHxcIlwiKSxwPS9saW5rZWRpbnxnaXRodWJ8cG9ydGZvbGlvL2kudGVzdChsKTtpZihmKXtlLnB1c2goe3R5cGU6by5GSUVMRF9UWVBFLlRFWFQsbGFiZWw6bCxyZXF1aXJlZDohMCwkaW5wdXQ6ZywkbGFiZWw6bn0pO2NvbnRpbnVlfWxldCBtPWN8fGQ7ZS5wdXNoKHt0eXBlOm8uRklFTERfVFlQRS5URVhULGxhYmVsOmwscmVxdWlyZWQ6bXx8XCJ0cnVlXCI9PT1nLmdldEF0dHJpYnV0ZShcImFyaWEtcmVxdWlyZWRcIikmJiFwfHxpJiYhcCwkaW5wdXQ6ZywkbGFiZWw6bn0pO2NvbnRpbnVlfX1sZXQgbj1BcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZSQ9XCIuc3RhcnREYXRlLnllYXJcIl0sIGlucHV0W25hbWUkPVwiLmVuZERhdGUueWVhclwiXScpKTtmb3IobGV0IHQgb2Ygbil7aWYoeSh0KXx8dC5uYW1lPy5zdGFydHNXaXRoKFwiZWR1Y2F0aW9ucy5cIil8fHQubmFtZT8uc3RhcnRzV2l0aChcImV4cGVyaWVuY2VzLlwiKSljb250aW51ZTtsZXQgcj10Lm5hbWUuaW5jbHVkZXMoXCIuc3RhcnREYXRlLnllYXJcIik/XCJTdGFydCBEYXRlXCI6XCJFbmQgRGF0ZVwiLG49dihyLFwiWWVhclwiLHQubmFtZSk7ZS5wdXNoKHt0eXBlOm8uRklFTERfVFlQRS5URVhULGxhYmVsOm4scmVxdWlyZWQ6XCJ0cnVlXCI9PT10LmdldEF0dHJpYnV0ZShcImFyaWEtcmVxdWlyZWRcIiksJGlucHV0OnQsJGxhYmVsOnR9KX1sZXQgaT1BcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbCgnbGFiZWxbZGF0YS1iYXNld2ViPVwiY2hlY2tib3hcIl0nKSk7Zm9yKGxldCByIG9mKDA9PT1pLmxlbmd0aCYmMD09PShpPUFycmF5LmZyb20odC5xdWVyeVNlbGVjdG9yQWxsKCdsYWJlbDpoYXMoaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdKScpKSkubGVuZ3RoJiYoaT1BcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbCgnbGFiZWxbY2xhc3MqPVwiY2hlY2tib3hcIl0nKSkpLGkpKXtsZXQgdD1yLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO2lmKCF0fHx5KHQpKWNvbnRpbnVlO2xldCBuPWMoci50ZXh0Q29udGVudHx8XCJcIik7aWYoIW58fHQubmFtZT8uc3RhcnRzV2l0aChcImVkdWNhdGlvbnMuXCIpfHx0Lm5hbWU/LnN0YXJ0c1dpdGgoXCJleHBlcmllbmNlcy5cIikpY29udGludWU7bGV0IGk9aCh0Lm5hbWUpO2UucHVzaCh7dHlwZTpvLkZJRUxEX1RZUEUuQ0hFQ0tCT1gsbGFiZWw6YihpLG4sdC5uYW1lKSxyZXF1aXJlZDpcInRydWVcIj09PXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1yZXF1aXJlZFwiKSxvcHRpb25zOltcIlllc1wiLFwiTm9cIl0sJGNoZWNrYm94czpbdF0sJGlucHV0OnQsJGxhYmVsOnJ9KX10cnl7bGV0IHQ9ZXIoKTt0Lmxlbmd0aD4wP2UucHVzaCguLi50KTpPKGUpfWNhdGNoKHQpe08oZSl9dHJ5e2xldCB0PWVuKCk7dC5sZW5ndGg+MD9lLnB1c2goLi4udCk6TyhlKX1jYXRjaCh0KXtPKGUpfWZvcihsZXQgdCBvZiBlKXQudHlwZT09PW8uRklFTERfVFlQRS5SQURJT0dST1VQJiYodC5yZXF1aXJlZD0hMCk7bGV0IGE9e2xpbmtlZEluVVJMOlwiTGlua2VkSW5cIixnaXRodWJVUkw6XCJHaXRodWJcIixvdGhlclVSTDpcIlBvcnRmb2xpb1wifTtmb3IobGV0W3Isbl1vZiBPYmplY3QuZW50cmllcyhhKSl7bGV0IGk9dC5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwiJHtyfVwiXVt0eXBlPVwidXJsXCJdOm5vdChbdHlwZT1cImZpbGVcIl0pOm5vdChbcm9sZT1cImNvbWJvYm94XCJdKWApO2lmKCFpfHx5KGkpKWNvbnRpbnVlO2xldCBhPWUuc29tZShlPT57bGV0IHQ9ZS4kaW5wdXQ7cmV0dXJuIHQ/Lm5hbWU9PT1yfSk7aWYoYSljb250aW51ZTtsZXQgbD1udWxsLHM9aS5jbG9zZXN0KCdbZGF0YS1iYXNld2ViPVwiZm9ybS1jb250cm9sLWNvbnRhaW5lclwiXScpO2lmKHMpe2xldCBlPXMucHJldmlvdXNFbGVtZW50U2libGluZztlJiYobD1lLnF1ZXJ5U2VsZWN0b3I/LignbGFiZWxbZGF0YS1iYXNld2ViPVwiZm9ybS1jb250cm9sLWxhYmVsXCJdJykpfWlmKCFsKXtsZXQgZT1pLmNsb3Nlc3QoJ1tkYXRhLWJhc2V3ZWI9XCJibG9ja1wiXSwgW2RhdGEtYmFzZXdlYj1cImZsZXgtZ3JpZC1pdGVtXCJdJyk7aWYoZSl7bGV0IHQ9QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xhYmVsW2RhdGEtYmFzZXdlYj1cImZvcm0tY29udHJvbC1sYWJlbFwiXScpKSxyPW51bGwsbj0xLzA7Zm9yKGxldCBlIG9mIHQpaWYoaS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlKSZOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX1BSRUNFRElORyl7bGV0IHQ9ZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTt0LnNldFN0YXJ0QWZ0ZXIoZSksdC5zZXRFbmRCZWZvcmUoaSk7bGV0IG89dC5jbG9uZUNvbnRlbnRzKCkuY2hpbGROb2Rlcy5sZW5ndGg7bzxuJiYobj1vLHI9ZSl9ciYmKGw9cil9fSFsJiZpLmlkJiYobD10LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7aS5pZH1cIl1gKSk7bGV0IHU9bjtpZihsKXtsZXQgZT1sLnRleHRDb250ZW50Py50cmltKCl8fGwuaW5uZXJUZXh0Py50cmltKCk7aWYoZSl7bGV0IHQ9ZS50b0xvd2VyQ2FzZSgpLG49ci50b0xvd2VyQ2FzZSgpLG89bi5pbmNsdWRlcyhcImxpbmtlZGluXCIpJiZ0LmluY2x1ZGVzKFwibGlua2VkaW5cIiksaT1uLmluY2x1ZGVzKFwiZ2l0aHViXCIpJiZ0LmluY2x1ZGVzKFwiZ2l0aHViXCIpLGE9KG4uaW5jbHVkZXMoXCJvdGhlclwiKXx8bi5pbmNsdWRlcyhcInBvcnRmb2xpb1wiKSkmJnQuaW5jbHVkZXMoXCJwb3J0Zm9saW9cIik7KG98fGl8fGEpJiYodT1lKX19ZS5wdXNoKHt0eXBlOm8uRklFTERfVFlQRS5URVhULGxhYmVsOnUscmVxdWlyZWQ6ITEsJGlucHV0OmksJGxhYmVsOmx9KX1sZXQgbD10LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJmaXJzdE5hbWVcIl0nKSxzPXQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImxhc3ROYW1lXCJdJyksdT1lPT5TdHJpbmcoZT8/XCJcIikudHJpbSgpLnJlcGxhY2UoL1xccypcXCokLyxcIlwiKSxwPWU9Pi9eZmlyc3RcXHMqbmFtZSQvaS50ZXN0KHUoZSkpLGc9ZT0+L15sYXN0XFxzKm5hbWUkL2kudGVzdCh1KGUpKTtpZihsPy5pc0Nvbm5lY3RlZCYmcz8uaXNDb25uZWN0ZWQpe2ZvcihsZXQgdCBvZiBlKXtpZih0LnR5cGUhPT1vLkZJRUxEX1RZUEUuVEVYVCljb250aW51ZTtsZXQgZT10LmxhYmVsO3AoZSk/KHQuJGlucHV0PWwsdC5sYWJlbD1cIkZpcnN0IE5hbWVcIik6ZyhlKSYmKHQuJGlucHV0PXMsdC5sYWJlbD1cIkxhc3QgTmFtZVwiKX1sZXQgdD0hMSxyPSExLG49W107Zm9yKGxldCBpIG9mIGUpe2lmKGkudHlwZSE9PW8uRklFTERfVFlQRS5URVhUKXtuLnB1c2goaSk7Y29udGludWV9bGV0IGU9aS5sYWJlbDtpZihcIkZpcnN0IE5hbWVcIj09PWUpe2lmKHQpY29udGludWU7dD0hMH1lbHNlIGlmKFwiTGFzdCBOYW1lXCI9PT1lKXtpZihyKWNvbnRpbnVlO3I9ITB9bi5wdXNoKGkpfWUubGVuZ3RoPTAsZS5wdXNoKC4uLm4pfXJldHVybiBlfWFzeW5jIGZ1bmN0aW9uIEsoKXtsZXQgZT17fSx0PWQoKTtpZighdClyZXR1cm4gZTtsZXQgcj1BcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZV06bm90KFt0eXBlPVwiZmlsZVwiXSksIHRleHRhcmVhW25hbWVdJykpO2ZvcihsZXQgdCBvZiByKXtpZih5KHQpKWNvbnRpbnVlO2xldCByPXQubmFtZXx8dC5uYW1lO2lmKHIuc3RhcnRzV2l0aChcImVkdWNhdGlvbnMuXCIpfHxyLnN0YXJ0c1dpdGgoXCJleHBlcmllbmNlcy5cIikpY29udGludWU7bGV0IG49aChyKSxvPXQuY2xvc2VzdCgnW2RhdGEtYmFzZXdlYj1cImZsZXgtZ3JpZC1pdGVtXCJdJyl8fHQuY2xvc2VzdCgnW2RhdGEtYmFzZXdlYj1cImJsb2NrXCJdJyl8fHQucGFyZW50RWxlbWVudCxpPW8/LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2RhdGEtYmFzZXdlYj1cImZvcm0tY29udHJvbC1sYWJlbFwiXScpLGE9YyhpPy50ZXh0Q29udGVudHx8XCJcIiksbD1hO2x8fChsPXIuZW5kc1dpdGgoXCIuc3RhcnREYXRlLnllYXJcIik/XCJTdGFydCBEYXRlIC0gWWVhclwiOnIuZW5kc1dpdGgoXCIuZW5kRGF0ZS55ZWFyXCIpP1wiRW5kIERhdGUgLSBZZWFyXCI6ciksZVtsPWIobixsLHIpXT10LnZhbHVlPz9cIlwifWxldCBuPUFycmF5LmZyb20odC5xdWVyeVNlbGVjdG9yQWxsKCdsYWJlbFtkYXRhLWJhc2V3ZWI9XCJjaGVja2JveFwiXScpKTtmb3IobGV0IHIgb2YoMD09PW4ubGVuZ3RoJiYwPT09KG49QXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xhYmVsOmhhcyhpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0pJykpKS5sZW5ndGgmJihuPUFycmF5LmZyb20odC5xdWVyeVNlbGVjdG9yQWxsKCdsYWJlbFtjbGFzcyo9XCJjaGVja2JveFwiXScpKSksbikpe2xldCB0PXIucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7aWYoIXR8fHQubmFtZT8uc3RhcnRzV2l0aChcImVkdWNhdGlvbnMuXCIpfHx0Lm5hbWU/LnN0YXJ0c1dpdGgoXCJleHBlcmllbmNlcy5cIikpY29udGludWU7bGV0IG49YyhyLnRleHRDb250ZW50fHxcIlwiKSxvPWgodC5uYW1lKSxpPWIobyxufHx0Lm5hbWUsdC5uYW1lKTtlW2ldPXQuY2hlY2tlZD9cIlllc1wiOlwiTm9cIn1yZXR1cm4gZX1mdW5jdGlvbiBYKGUsdCxyLG4pe2xldCBpPXt9O2ZvcihsZXRbbyxhXW9mIE9iamVjdC5lbnRyaWVzKG4pKXtsZXQgbj1lLnF1ZXJ5U2VsZWN0b3IoYCR7YS5zZWxlY3Rvcn1bbmFtZT1cIiR7cn0uJHt0fS4ke299XCJdYCk7biYmKFwiY2hlY2tib3hcIj09PW4udHlwZT9pW2Eua2V5XT1uLmNoZWNrZWQ/XCJZZXNcIjpcIk5vXCI6aVthLmtleV09bi52YWx1ZXx8XCJcIil9bGV0IGE9ZS5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwiJHtyfS4ke3R9LnN0YXJ0RGF0ZS55ZWFyXCJdYCksbD1lLnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCIke3J9LiR7dH0uZW5kRGF0ZS55ZWFyXCJdYCkscz1hP0EoYSxcInN0YXJ0XCIpOm51bGwsdT1sP0EobCxcImVuZFwiKTpudWxsLGM9ZT0+ZT9cImNvbWJvYm94XCI9PT1lLmdldEF0dHJpYnV0ZShcInJvbGVcIik/ZWwoZSxvLkZJRUxEX1RZUEUuU0VMRUNUKTplLnZhbHVlfHxcIlwiOlwiXCIsZD1jKHMpLGY9Yyh1KTtyZXR1cm4oc3x8YSkmJihpLlN0YXJ0PWAke2R8fFwiXCJ9LyR7YT8udmFsdWV8fFwiXCJ9YC5yZXBsYWNlKC9eXFwvJC8sXCJcIikpLCh1fHxsKSYmKGkuRW5kPWAke2Z8fFwiXCJ9LyR7bD8udmFsdWV8fFwiXCJ9YC5yZXBsYWNlKC9eXFwvJC8sXCJcIikpLE9iamVjdC5rZXlzKGkpLmxlbmd0aD4wP2k6bnVsbH1mdW5jdGlvbiBKKGUsdCl7cmV0dXJuIFgoZSx0LFwiZWR1Y2F0aW9uc1wiLHtzY2hvb2xOYW1lOntzZWxlY3RvcjpcImlucHV0XCIsa2V5OlwiU2Nob29sXCJ9LGRlZ3JlZTp7c2VsZWN0b3I6XCJpbnB1dFwiLGtleTpcIkRlZ3JlZVwifSxmaWVsZE9mU3R1ZHk6e3NlbGVjdG9yOlwiaW5wdXRcIixrZXk6XCJNYWpvclwifSxpc0N1cnJlbnQ6e3NlbGVjdG9yOidpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLGtleTpcIkN1cnJlbnRcIn19KX1mdW5jdGlvbiBRKGUsdCl7bGV0IHI9ZS5xdWVyeVNlbGVjdG9yKGB0ZXh0YXJlYVtuYW1lPVwiZXhwZXJpZW5jZXMuJHt0fS5kZXNjcmlwdGlvblwiXSwgaW5wdXRbbmFtZT1cImV4cGVyaWVuY2VzLiR7dH0uZGVzY3JpcHRpb25cIl1gKSxuPVgoZSx0LFwiZXhwZXJpZW5jZXNcIix7Y29tcGFueU5hbWU6e3NlbGVjdG9yOlwiaW5wdXRcIixrZXk6XCJDb21wYW55XCJ9LHRpdGxlOntzZWxlY3RvcjpcImlucHV0XCIsa2V5OlwiUG9zaXRpb25cIn0saXNDdXJyZW50OntzZWxlY3RvcjonaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyxrZXk6XCJDdXJyZW50XCJ9fSk7cmV0dXJuIHImJm4mJihuLkRlc2NyaXB0aW9uPXIudmFsdWV8fFwiXCIpLG59ZnVuY3Rpb24gWigpe2xldCBlPWQoKTtpZighZSlyZXR1cm4gbnVsbDtsZXR7ZWR1Y2F0aW9uSW5kaWNlczp0LGV4cGVyaWVuY2VJbmRpY2VzOnJ9PU0oZSksbj10Lm1hcCh0PT5KKGUsdCkpLmZpbHRlcihlPT4hIWUpLG89ci5tYXAodD0+UShlLHQpKS5maWx0ZXIoZT0+ISFlKSxpPXt9O3JldHVybiBuLmxlbmd0aD4wJiYoaS5lZHVjYXRpb249biksby5sZW5ndGg+MCYmKGkuZW1wbG95bWVudD1vKSxPYmplY3Qua2V5cyhpKS5sZW5ndGg+MD9pOm51bGx9ZnVuY3Rpb24gZWUoZSx0LHIpe2xldCBuPVtdLG89bmV3IFNldCxpPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFtuYW1lXj1cIiR7cn0uJHt0fS5cIl0sIHRleHRhcmVhW25hbWVePVwiJHtyfS4ke3R9LlwiXWApKTtpZigwPT09aS5sZW5ndGgpcmV0dXJuIG47bGV0IGE9aVswXSxsPWEuY2xvc2VzdCgnW2RhdGEtYmFzZXdlYj1cImJsb2NrXCJdJyk7ZnVuY3Rpb24gcyh0KXtsZXQgcj10LmNsb3Nlc3QoJ1tkYXRhLWJhc2V3ZWI9XCJmbGV4LWdyaWQtaXRlbVwiXSwgW2RhdGEtYmFzZXdlYj1cImJsb2NrXCJdLCBbZGF0YS1iYXNld2ViPVwiZm9ybS1jb250cm9sLWNvbnRhaW5lclwiXScpO2lmKHIpe2xldCBlPXIucXVlcnlTZWxlY3RvcignbGFiZWxbZGF0YS1iYXNld2ViPVwiZm9ybS1jb250cm9sLWxhYmVsXCJdJyk7aWYoZSlyZXR1cm4gZX1pZih0LmlkKXtsZXQgcj1lLnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7dC5pZH1cIl1gKTtpZihyKXJldHVybiByfWlmKGwpe2xldCBlPUFycmF5LmZyb20obC5xdWVyeVNlbGVjdG9yQWxsKCdsYWJlbFtkYXRhLWJhc2V3ZWI9XCJmb3JtLWNvbnRyb2wtbGFiZWxcIl0nKSk7Zm9yKGxldCByIG9mIGUpe2xldCBlPWYocik7aWYoZSYmZS5jb250YWlucyh0KSlyZXR1cm4gcn19cmV0dXJuIG51bGx9ZnVuY3Rpb24gdShlLHQpe2lmKGUpe2xldCB0PWMoZS50ZXh0Q29udGVudHx8XCJcIikscj10LnJlcGxhY2UoL1xccypcXCpcXHMqJC8sXCJcIikudHJpbSgpO2lmKHIpcmV0dXJuIHJ9cmV0dXJuIHQuaW5jbHVkZXMoXCJzY2hvb2xOYW1lXCIpP1wiU2Nob29sXCI6dC5pbmNsdWRlcyhcImRlZ3JlZVwiKT9cIkRlZ3JlZVwiOnQuaW5jbHVkZXMoXCJmaWVsZE9mU3R1ZHlcIik/XCJNYWpvciAob3B0aW9uYWwpXCI6dC5pbmNsdWRlcyhcImNvbXBhbnlOYW1lXCIpP1wiQ29tcGFueVwiOnQuaW5jbHVkZXMoXCJ0aXRsZVwiKT9cIlBvc2l0aW9uXCI6dC5pbmNsdWRlcyhcImRlc2NyaXB0aW9uXCIpP1wiRGVzY3JpcHRpb24gKG9wdGlvbmFsKVwiOnQuaW5jbHVkZXMoXCJpc0N1cnJlbnRcIik/XCJDdXJyZW50XCI6XCJcIn1mdW5jdGlvbiBkKGkpe2lmKG8uaGFzKGkpfHx5KGkpfHxpLm5hbWU/LmluY2x1ZGVzKFwiRGF0ZS55ZWFyXCIpfHxpLm5hbWU/LmluY2x1ZGVzKFwiRGF0ZS5tb250aFwiKSlyZXR1cm47bGV0IGE9cyhpKSxsPXUoYSxpLm5hbWV8fFwiXCIpO2lmKGwpe2lmKGkgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50JiZcImNoZWNrYm94XCI9PT1pLnR5cGUpbi5wdXNoKFAoaSxsKSksby5hZGQoaSk7ZWxzZSBpZihpIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCl7bGV0IGU9aihpLGwpO2UucmVxdWlyZWQ9XCJ0cnVlXCI9PT1pLmdldEF0dHJpYnV0ZShcImFyaWEtcmVxdWlyZWRcIiksbi5wdXNoKGUpLG8uYWRkKGkpfWVsc2UgaWYoaSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQmJlwiY29tYm9ib3hcIj09PWkuZ2V0QXR0cmlidXRlKFwicm9sZVwiKSl7aWYocChpLGEsbCxlLHIsdCkpcmV0dXJufWVsc2UgaSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQmJihuLnB1c2goaihpLGwpKSxvLmFkZChpKSl9fWZvcihsZXQgZSBvZiBpKWQoZSk7bGV0IG09KGksYSk9PntsZXQgbD1lLnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCIke3J9LiR7dH0uJHtpfURhdGUueWVhclwiXWApO2lmKCFsfHxvLmhhcyhsKSlyZXR1cm47bGV0IHM9QShsLGkpLHU9bnVsbCxkPWwuY2xvc2VzdCgnW2RhdGEtYmFzZXdlYj1cImZsZXgtZ3JpZC1pdGVtXCJdJyk7aWYoZCYmKHU9ZC5xdWVyeVNlbGVjdG9yKCdsYWJlbFtkYXRhLWJhc2V3ZWI9XCJmb3JtLWNvbnRyb2wtbGFiZWxcIl0nKSksIXUmJnMpe2xldCBlPXMuY2xvc2VzdCgnW2RhdGEtYmFzZXdlYj1cImZsZXgtZ3JpZC1pdGVtXCJdJyk7ZSYmKHU9ZS5xdWVyeVNlbGVjdG9yKCdsYWJlbFtkYXRhLWJhc2V3ZWI9XCJmb3JtLWNvbnRyb2wtbGFiZWxcIl0nKSl9bGV0IGY9dT9jKHUudGV4dENvbnRlbnR8fFwiXCIpLnJlcGxhY2UoL1xccypcXCpcXHMqJC8sXCJcIikudHJpbSgpOmE7Zj1mLnJlcGxhY2UoL1xccyotXFxzKihZZWFyfE1vbnRoKVxccyokL2ksXCJcIikudHJpbSgpfHxhO2xldCBwPWAke2Z9IC0gWWVhcmAsbT1gJHtmfSAtIE1vbnRoYDtzJiYhby5oYXMocykmJihuLnB1c2goRChzLG0pKSxvLmFkZChzKSksbi5wdXNoKGoobCxwKSksby5hZGQobCl9O3JldHVybiBtKFwic3RhcnRcIixcIlN0YXJ0IERhdGVcIiksbShcImVuZFwiLFwiRW5kIERhdGVcIiksbn1mdW5jdGlvbiBldChlLHQscil7bGV0IG49ZCgpO2lmKCFuKXJldHVybltdO2xldCBpPWU9PT1vLkZJRUxEX1RZUEUuRURVQ0FUSU9OP00obikuZWR1Y2F0aW9uSW5kaWNlczpNKG4pLmV4cGVyaWVuY2VJbmRpY2VzLGE9W107Zm9yKGxldCBvIG9mIGkpe2xldCBpPWVlKG4sbyx0KTtpZihpLmxlbmd0aD4wKXtsZXQgdD1pWzBdO2EucHVzaCh7dHlwZTplLGxhYmVsOnIsY2hpbGRyZW46aSxyZXF1aXJlZDohMCxvcHRpb25zOkYoaSksJGlucHV0OnQ/LiRpbnB1dHx8bn0pfX1pZigwPT09YS5sZW5ndGgpcmV0dXJuIGE7bGV0IGw9YS5tYXAoKHQsbik9Pih7bGFiZWw6YCR7cn0gJHtuKzF9YCx0eXBlOmUsY2hpbGRyZW46dC5jaGlsZHJlbnx8W10scmVxdWlyZWQ6ITAsb3B0aW9uczp0Lm9wdGlvbnN8fFtdLCRpbnB1dDp0LiRpbnB1dH0pKSxzPV8obCksdT17dHlwZTplLGxhYmVsOnIsY2hpbGRyZW46bCxyZXF1aXJlZDohMCxvcHRpb25zOnMsJGlucHV0OmFbMF0/LiRpbnB1dHx8bn07cmV0dXJuW3VdfWZ1bmN0aW9uIGVyKCl7cmV0dXJuIGV0KG8uRklFTERfVFlQRS5FRFVDQVRJT04sXCJlZHVjYXRpb25zXCIsXCJFZHVjYXRpb25cIil9ZnVuY3Rpb24gZW4oKXtyZXR1cm4gZXQoby5GSUVMRF9UWVBFLkVNUExPWU1FTlQsXCJleHBlcmllbmNlc1wiLFwiRW1wbG95bWVudFwiKX1mdW5jdGlvbiBlbyhlLHQpe3JldHVyblsuLi5lXS5zb3J0KChlLHIpPT57bGV0IG49dFtlLmxhYmVsXXx8OTk5LG89dFtyLmxhYmVsXXx8OTk5O3JldHVybiBuLW99KX1mdW5jdGlvbiBlaShlKXtyZXR1cm4gZW8oZSx7U2Nob29sOjEsRGVncmVlOjIsTWFqb3I6MyxcIlN0YXJ0IERhdGUgLSBNb250aFwiOjQsXCJTdGFydCBEYXRlIC0gWWVhclwiOjUsXCJFbmQgRGF0ZSAtIE1vbnRoXCI6NixcIkVuZCBEYXRlIC0gWWVhclwiOjcsQ3VycmVudDo4fSl9ZnVuY3Rpb24gZWEoZSl7cmV0dXJuIGVvKGUse0NvbXBhbnk6MSxQb3NpdGlvbjoyLFwiRGVzY3JpcHRpb24gKG9wdGlvbmFsKVwiOjMsXCJTdGFydCBEYXRlIC0gTW9udGhcIjo0LFwiU3RhcnQgRGF0ZSAtIFllYXJcIjo1LFwiRW5kIERhdGUgLSBNb250aFwiOjYsXCJFbmQgRGF0ZSAtIFllYXJcIjo3LEN1cnJlbnQ6OH0pfWZ1bmN0aW9uIGVsKGUsdCl7aWYodD09PW8uRklFTERfVFlQRS5URVhUKXJldHVybihlLnZhbHVlfHxcIlwiKS50cmltKCk7aWYodD09PW8uRklFTERfVFlQRS5DSEVDS0JPWClyZXR1cm4gZS5jaGVja2VkP1wiWWVzXCI6XCJOb1wiO2lmKHQ9PT1vLkZJRUxEX1RZUEUuU0VMRUNUKXtsZXQgdD1lO2lmKFwiU0VMRUNUXCI9PT10LnRhZ05hbWUpcmV0dXJuIHQudmFsdWV8fFwiXCI7bGV0IHI9dDtpZihcImNvbWJvYm94XCI9PT1yLmdldEF0dHJpYnV0ZShcInJvbGVcIikpe2xldCBlPXIuZ2V0QXR0cmlidXRlKFwiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCIpO2lmKGUpe2xldCB0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUpO2lmKHQpe2xldCBlPWModC50ZXh0Q29udGVudHx8XCJcIik7aWYoZSlyZXR1cm4gZX19bGV0IHQ9ci5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpO2lmKHQpe2xldCBlPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHQpO2lmKGUpe2xldCB0PWUucXVlcnlTZWxlY3RvcignW3JvbGU9XCJvcHRpb25cIl1bYXJpYS1zZWxlY3RlZD1cInRydWVcIl0nKTtpZih0KXtsZXQgZT1jKHQudGV4dENvbnRlbnR8fFwiXCIpO2lmKGUpcmV0dXJuIGV9fX1sZXQgbj1yLmNsb3Nlc3QoJ1tkYXRhLWJhc2V3ZWI9XCJzZWxlY3RcIl0nKTtpZihuKXtsZXQgZT1uLnF1ZXJ5U2VsZWN0b3IoXCJbdmFsdWVdXCIpO2lmKGUpe2xldCB0PWUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil8fGMoZS50ZXh0Q29udGVudHx8XCJcIik7aWYodClyZXR1cm4gdH19cmV0dXJuIHIudmFsdWV8fFwiXCJ9cmV0dXJuIHQudmFsdWV8fFwiXCJ9aWYodD09PW8uRklFTERfVFlQRS5SQURJT0dST1VQKXtsZXQgdD1lLmNsb3Nlc3QoJ1tyb2xlPVwicmFkaW9ncm91cFwiXScpO2lmKCF0KXJldHVyblwiXCI7bGV0IHI9dC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCcpO2lmKCFyKXJldHVyblwiXCI7bGV0IG49ci5jbG9zZXN0KCdsYWJlbFtkYXRhLWJhc2V3ZWI9XCJyYWRpb1wiXScpO3JldHVybiBuPyhuLnRleHRDb250ZW50fHxcIlwiKS50cmltKCk6ci52YWx1ZXx8XCJcIn1yZXR1cm5cIlwifWFzeW5jIGZ1bmN0aW9uIGVzKGUpe2xldCB0PXt9LHI9ZS5maWx0ZXIoZT0+e2xldCB0PWUuJGlucHV0O3JldHVybiEhdCYmISF0LmlzQ29ubmVjdGVkfSk7Zm9yKGxldCBlIG9mIHIpe2lmKGUudHlwZT09PW8uRklFTERfVFlQRS5FRFVDQVRJT058fGUudHlwZT09PW8uRklFTERfVFlQRS5FTVBMT1lNRU5UKWNvbnRpbnVlO2xldCByPWUuJGlucHV0O2lmKCFyfHxlLnR5cGUhPT1vLkZJRUxEX1RZUEUuUkFESU9HUk9VUCYmKHIuZGlzYWJsZWR8fHIuaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIil8fHIuaGFzQXR0cmlidXRlKFwicmVhZG9ubHlcIikpKWNvbnRpbnVlO2xldCBuPWVsKHIsZS50eXBlKTtlLmxhYmVsJiZudWxsIT09biYmKHRbZS5sYWJlbF09bil9bGV0IG49WigpO3JldHVybiBuP3suLi50LC4uLm59OnR9YXN5bmMgZnVuY3Rpb24gZXUoKXtsZXQgZT1hd2FpdCBLKCksdD1aKCk7cmV0dXJuIHQ/ey4uLmUsLi4udH06ZX1cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6InJ1bGVzLjEyNjgwZTVlLmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);