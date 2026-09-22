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
})({"k2XBu":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\google\\answer.js",
    "bundleId": "cbdadbf1346df27c",
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
var j = z(require("2dd1191efa7e0faf"));
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

},{"2dd1191efa7e0faf":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"dW5Jr":[function(require,module,exports) {
/**
 * Parcel module id: 7manN
 * Resolved path: src/contents/sites/google/answer.js
 * Dependencies:
 *   ./skills-operation -> cPUQK  =>  src/contents/sites/google/skills-operation.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   lodash-es -> p4RBe  =>  lodash-es.js
 *   ~constants/country -> 7z2Rw  =>  src/constants/country.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/cover-letter -> 7VR5i  =>  src/contents/methods/cover-letter.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/utils -> aTDh5  =>  src/core/utils.js
 *   ~enums/http -> eJFqj  =>  src/enums/http.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "GOOGLE_PREFERRED_LOCATIONS_DESCRIPTION", ()=>h), n.export(r, "getGoogleFieldDescription", ()=>y), n.export(r, "serializeRulesForApi", ()=>v), n.export(r, "getRawValueInRecord", ()=>E), n.export(r, "normalizeGoogleSkillsItems", ()=>A), n.export(r, "isPreferredWorkLocationLabel", ()=>F), n.export(r, "findPreferredWorkLocationOptionIndex", ()=>D), n.export(r, "attachGoogleEmploymentRuleContext", ()=>P), n.export(r, "resolveCountryDataValue", ()=>B), n.export(r, "getGoogleOperationConfigOverrides", ()=>q), n.export(r, "requestGoogleFormAnswers", ()=>U), n.export(r, "STATE_PROVINCE_NAME_TO_CODE", ()=>W), n.export(r, "mapEducationRecordToRegular", ()=>J), n.export(r, "normalizeEmailsForContactDetails", ()=>Z), n.export(r, "formatAnswer", ()=>ey);
var o = e("@plasmohq/messaging"), i = e("lodash-es"), a = e("~contents/methods/answer"), l = e("~contents/methods/cancellation"), s = e("~contents/methods/cover-letter"), u = e("~core/enums"), c = e("~constants/country"), d = e("~core/utils"), f = e("~enums/http"), p = e("./skills-operation");
let m = [
    "$input",
    "$label",
    "children",
    "$checkboxs",
    "$radioParent",
    "__originalRowIndex"
], h = "The role is offered in multiple locations. Please select one preferred location from the list below. *";
function g(e1) {
    return (e1 || "").replace(/\s+/g, " ").trim();
}
function b() {
    return "docs.google.com" === window.location.hostname && window.location.pathname.startsWith("/forms/");
}
function y(e1) {
    let t = g(e1).toLowerCase();
    if ("preferred location" === t || "preferred locations" === t) return h;
}
function v(e1) {
    return e1.map((e1)=>{
        let t = (0, i.omit)(e1, ...m);
        return (e1.type === u.FIELD_TYPE.EDUCATION || e1.type === u.FIELD_TYPE.EMPLOYMENT) && Array.isArray(e1.children) && e1.children.length > 0 && (t.options = e1.children.map((e1)=>(0, i.omit)(e1, ...m))), "State / province" === e1.label && e1.type !== u.FIELD_TYPE.EDUCATION && e1.type !== u.FIELD_TYPE.EMPLOYMENT && (t.label = "State"), t;
    });
}
let w = {
    "Do you currently need, or will you someday require, Google to sponsor work authorization for you to work in the country of employment?": "Do you need work sponsor in the country of employment?",
    "Have you worked at Alphabet before?": "Alphabet experience",
    "State / province": "State"
}, S = [
    "Which locations(s) do you prefer working out of?",
    "Which location(s) do you prefer working out of?"
];
function E(e1, t) {
    for(let r1 in t)if ((0, a.isMatched)(e1, r1)) return {
        found: !0,
        value: t[r1]
    };
    let r1 = w[e1];
    return r1 && void 0 !== t[r1] ? {
        found: !0,
        value: t[r1]
    } : {
        found: !1
    };
}
_c = E;
function x(e1) {
    return !!("" === e1 || null == e1 || "string" == typeof e1 && "" === e1.trim() || Array.isArray(e1) && (0 === e1.length || e1.every((e1)=>null == e1 || "" === String(e1).trim())));
}
function C(e1) {
    return e1.filter((e1)=>"string" == typeof e1).map((e1)=>e1.trim()).filter(Boolean);
}
_c1 = C;
function A(e1) {
    return Array.isArray(e1) ? C(e1) : "string" == typeof e1 ? C(e1.split(",")) : [];
}
_c2 = A;
function k(e1) {
    return e1.trim().toLowerCase();
}
function T(e1) {
    if (!e1 || "object" != typeof e1 || Array.isArray(e1)) return !1;
    let t = e1;
    if ("filled" !== t.status && "partial" !== t.status && "missing" !== t.status) return !1;
    let r1 = [
        t.requestedItems,
        t.succeededItems,
        t.failedItems
    ];
    if (!r1.every((e1)=>Array.isArray(e1) && e1.every((e1)=>"string" == typeof e1))) return !1;
    let [n, o, i] = r1, a = n.map(k);
    if (a.some((e1)=>!e1) || new Set(a).size !== a.length) return !1;
    let l = new Set(a), s = o.map(k), u = i.map(k), c = new Set(s), d = new Set(u);
    if (c.size !== s.length || d.size !== u.length) return !1;
    let f = (e1)=>[
            ...e1
        ].every((e1)=>l.has(e1));
    if (!f(c) || !f(d) || [
        ...c
    ].some((e1)=>d.has(e1))) return !1;
    let p = new Set([
        ...c,
        ...d
    ]);
    return !!(p.size === l.size && [
        ...l
    ].every((e1)=>p.has(e1))) && ("filled" === t.status ? l.size > 0 && 0 === d.size && c.size === l.size : "partial" === t.status ? c.size > 0 && d.size > 0 : 0 === c.size);
}
_c3 = T;
function F(e1) {
    let t = String(e1 ?? "").trim().toLowerCase();
    return S.some((e1)=>e1.trim().toLowerCase() === t);
}
_c4 = F;
function I(e1) {
    return (e1 || "").replace(/\s+/g, " ").trim().toLowerCase();
}
_c5 = I;
function j(e1) {
    let t = I(e1);
    if (!t) return [];
    let r1 = t.split(",").map((e1)=>e1.trim()).filter(Boolean), n = [
        t
    ];
    return r1.length >= 2 && n.push(r1.slice(0, 2).join(", ")), r1.length >= 1 && n.push(r1[0]), Array.from(new Set(n.filter(Boolean)));
}
function D(e1, t) {
    let r1 = I(t);
    for(let t = 0; t < e1.length; t++){
        let n = I(e1[t] ?? "");
        if (n && n === r1) return {
            index: t,
            matchMode: "exact"
        };
    }
    let n = j(t);
    for (let t of n)for(let r1 = 0; r1 < e1.length; r1++){
        let n = I(e1[r1] ?? "");
        if (n && (n.startsWith(t) || t.startsWith(n))) return {
            index: r1,
            matchMode: "prefix"
        };
    }
    for (let t of n)for(let r1 = 0; r1 < e1.length; r1++){
        let n = I(e1[r1] ?? "");
        if (n && (n.includes(t) || t.includes(n))) return {
            index: r1,
            matchMode: "partial"
        };
    }
    return {
        index: -1,
        matchMode: "none"
    };
}
_c6 = D;
function P(e1, t) {
    let r1 = (e1)=>e1.type === u.FIELD_TYPE.EMPLOYMENT && Array.isArray(e1.children), n = (e1, t)=>{
        let r1 = {
            ...e1
        };
        return r1.__debugWorkCountry = t, r1;
    };
    return e1.map((e1, o)=>{
        if (!r1(e1)) return e1;
        let i = t[o];
        if (!i) return e1;
        let a = e1.children.map((e1)=>{
            let t = String(e1.label ?? "").trim().toLowerCase(), r1 = "country / region" === t || "country" === t || "country/region" === t;
            return r1 ? n(e1, {
                rowIndex: o,
                employer: String(i["Employer name"] ?? i.Company ?? "").trim(),
                country: String(i["Country / Region"] ?? i.Country ?? i.country ?? "").trim(),
                state: String(i.State ?? i["State / province"] ?? "").trim()
            }) : e1;
        });
        return {
            ...e1,
            children: a
        };
    });
}
_c7 = P;
function _(e1) {
    let t = String(Array.isArray(e1) ? e1[0] ?? "" : e1 ?? "").replace(/\s+/g, " ").trim();
    if (!t) return "";
    let r1 = t.split(/[\uff0c,]/).map((e1)=>e1.replace(/\s+/g, " ").trim()).filter(Boolean);
    return r1.length >= 3 ? r1.slice(0, 2).join(", ") : t;
}
function L(e1, t) {
    if (!F(e1)) return t;
    if (Array.isArray(t)) {
        let e1 = _(t[0]);
        return e1 ? [
            e1
        ] : t;
    }
    let r1 = _(t);
    return r1 || t;
}
_c8 = L;
function R(e1) {
    return (e1 || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/&/g, " and ").replace(/['\u2019]/g, "").replace(/[^a-z0-9]+/gi, " ").replace(/\s+/g, " ").trim().toLowerCase();
}
_c9 = R;
function O(e1) {
    let t = String(e1 ?? "").replace(/[^a-z0-9]/gi, "").toLowerCase();
    return "country" === t || "countryregion" === t;
}
_c10 = O;
let M = new Map, N = new Map;
for (let e1 of c.COUNTRY_OPTIONS){
    let t = String(e1.code ?? "").trim().toUpperCase(), r1 = String(e1.label ?? e1.value ?? "").trim();
    if (!t || !r1) continue;
    let n = {
        code: t,
        label: r1
    };
    for (let o of (M.set(t, n), [
        r1,
        e1.value
    ])){
        let e1 = R(String(o ?? ""));
        !e1 || N.has(e1) || N.set(e1, n);
    }
}
let $ = {
    [R("United States of America")]: "US",
    [R("US")]: "US",
    [R("USA")]: "US",
    [R("Canada")]: "CA",
    [R("CA")]: "CA",
    [R("CAN")]: "CA",
    [R("United Kingdom")]: "GB",
    [R("UK")]: "GB",
    [R("Great Britain")]: "GB"
};
function B(e1) {
    let t = (e1 || "").trim();
    if (!t) return "";
    let r1 = M.get(t.toUpperCase());
    if (r1) return r1.code;
    let n = R(t), o = $[n];
    return o || (N.get(n)?.code ?? "");
}
_c11 = B;
function q(e1) {
    let { handlers: t, progressTracker: r1, createOperationHandler: n } = e1, o = {}, i = async (e1, t, n, o)=>{
        n && (0, l.updateCurrentField)(e1.label);
        try {
            let i = await (0, l.withSkip)(o);
            n && (e1.label === p.GOOGLE_SKILLS_LABEL ? T(i) ? r1.updateFieldItemProgress(e1.label, i) : r1.updateMissedProgress(e1.label) : T(i) ? r1.updateFieldItemProgress(e1.label, i) : x(t) || !1 === i ? r1.updateMissedProgress(e1.label) : r1.updateFilledProgress(e1.label));
        } catch (t) {
            if (t instanceof l.CancelledError) throw t;
            if (t instanceof l.SkippedError) {
                if (n) {
                    r1.updateMissedProgress(e1.label);
                    return;
                }
                throw t;
            }
            n && r1.updateMissedProgress(e1.label);
        }
    }, a = t[u.FIELD_TYPE.TEXT], s = "function" == typeof a ? a : a?.handler, c = "object" == typeof a && a.options?.expectArray !== !1;
    o[u.FIELD_TYPE.TEXT] = async (e1, t, r1 = !0)=>{
        let o = E(e1.label, t);
        if (o.found) {
            let n = "state" === String(e1?.label ?? "").trim().toLowerCase() && "" !== B(String(t?.["Country / Region"] ?? t?.Country ?? t?.country ?? "").trim()), a = n ? {
                ...e1,
                __preferStateSelect: !0
            } : e1, l = e1.label === p.GOOGLE_SKILLS_LABEL && Array.isArray(o.value) ? o.value : c ? Array.isArray(o.value) ? o.value : [
                o.value
            ] : Array.isArray(o.value) ? o.value[0] : o.value, u = L(e1.label, l);
            await i(e1, u, r1, async ()=>s(a, u));
            return;
        }
        await n(s, {
            expectArray: c
        })(e1, t, r1);
    };
    let d = t[u.FIELD_TYPE.SELECT];
    if (o[u.FIELD_TYPE.SELECT] = async (e1, t, r1 = !0)=>{
        let o = E(e1.label, t);
        if (o.found) {
            let t = Array.isArray(o.value) ? o.value[0] : o.value;
            await i(e1, t, r1, async ()=>d(e1, t));
            return;
        }
        await n(d, {
            expectArray: !0
        })(e1, t, r1);
    }, b()) {
        let e1 = t[u.FIELD_TYPE.CHECKBOX];
        o[u.FIELD_TYPE.CHECKBOX] = async (t, r1, o = !0)=>{
            let a = E(t.label, r1);
            if (a.found) {
                let r1 = Array.isArray(a.value) ? a.value : [
                    a.value
                ];
                await i(t, r1, o, async ()=>e1(t, r1));
                return;
            }
            await n(e1, {
                expectArray: !0
            })(t, r1, o);
        };
        let r1 = t[u.FIELD_TYPE.RADIOGROUP];
        o[u.FIELD_TYPE.RADIOGROUP] = async (e1, t, o = !0)=>{
            let a = E(e1.label, t);
            if (a.found) {
                let t = Array.isArray(a.value) ? a.value : [
                    a.value
                ];
                await i(e1, t, o, async ()=>r1(e1, t));
                return;
            }
            await n(r1, {
                expectArray: !0
            })(e1, t, o);
        };
    }
    if (!b()) {
        let e1 = t[u.FIELD_TYPE.RADIOGROUP];
        o[u.FIELD_TYPE.RADIOGROUP] = async (t, r1, o = !0)=>{
            let a = E(t.label, r1);
            if (a.found) {
                let r1 = Array.isArray(a.value) ? a.value : [
                    a.value
                ];
                await i(t, r1, o, async ()=>e1(t, r1));
                return;
            }
            await n(e1, {
                expectArray: !0
            })(t, r1, o);
        };
    }
    return o;
}
async function U(e1) {
    let { elements: t, token: r1, getSiteName: n, fromAgent: i, resumeId: l, tailorId: s } = e1, u = await (0, o.sendToBackground)({
        name: "getGptResults",
        body: {
            params: {
                elements: t,
                token: r1,
                url: (0, d.removeEndStrings)("undefined" != typeof window ? window.location.href : ""),
                parser: "internal",
                source: n,
                fromAgent: !!i,
                ...l && {
                    resumeId: l
                },
                ...s && {
                    tailorId: s
                }
            }
        }
    });
    if (u?.data?.data === f.CUSTOM_ERROR_CODES.RESUME_MISSING_KEY) throw new a.ResumeMissingCodeError(f.CUSTOM_ERROR_CODES.RESUME_MISSING_KEY);
    if (u?.data?.HTTP_STATUS) throw new a.HTTPError(u?.data?.HTTP_STATUS);
    return u;
}
_c12 = U;
function H(e1) {
    let t = e1.trim();
    return !!t && !!(/^\d+$/.test(t) || /^\d{5}-\d{4}$/.test(t) || /^[A-Za-z]\d[A-Za-z]\s?\d[A-Za-z]\d$/.test(t) || /^[A-Za-z]{1,2}\d[A-Za-z\d]?\s?\d[A-Za-z]{2}$/.test(t));
}
_c13 = H;
function Y(e1, t) {
    for (let r1 of t){
        let t = e1?.[r1];
        if (null != t) {
            if (Array.isArray(t)) {
                let e1 = t.find((e1)=>"" !== String(e1 ?? "").trim());
                if (null != e1) return e1;
                continue;
            }
            if ("" !== String(t).trim()) return t;
        }
    }
    return "";
}
_c14 = Y;
let z = new Set([
    "al",
    "ak",
    "az",
    "ar",
    "ca",
    "co",
    "ct",
    "de",
    "fl",
    "ga",
    "hi",
    "id",
    "il",
    "in",
    "ia",
    "ks",
    "ky",
    "la",
    "me",
    "md",
    "ma",
    "mi",
    "mn",
    "ms",
    "mo",
    "mt",
    "ne",
    "nv",
    "nh",
    "nj",
    "nm",
    "ny",
    "nc",
    "nd",
    "oh",
    "ok",
    "or",
    "pa",
    "ri",
    "sc",
    "sd",
    "tn",
    "tx",
    "ut",
    "vt",
    "va",
    "wa",
    "wv",
    "wi",
    "wy",
    "dc"
]), V = new Set([
    "ab",
    "bc",
    "mb",
    "nb",
    "nl",
    "ns",
    "on",
    "pe",
    "qc",
    "sk",
    "nt",
    "nu",
    "yt"
]), W = {
    alabama: "al",
    alaska: "ak",
    arizona: "az",
    arkansas: "ar",
    california: "ca",
    colorado: "co",
    connecticut: "ct",
    delaware: "de",
    florida: "fl",
    georgia: "ga",
    hawaii: "hi",
    idaho: "id",
    illinois: "il",
    indiana: "in",
    iowa: "ia",
    kansas: "ks",
    kentucky: "ky",
    louisiana: "la",
    maine: "me",
    maryland: "md",
    massachusetts: "ma",
    michigan: "mi",
    minnesota: "mn",
    mississippi: "ms",
    missouri: "mo",
    montana: "mt",
    nebraska: "ne",
    nevada: "nv",
    "new hampshire": "nh",
    "new jersey": "nj",
    "new mexico": "nm",
    "new york": "ny",
    "north carolina": "nc",
    "north dakota": "nd",
    ohio: "oh",
    oklahoma: "ok",
    oregon: "or",
    pennsylvania: "pa",
    "rhode island": "ri",
    "south carolina": "sc",
    "south dakota": "sd",
    tennessee: "tn",
    texas: "tx",
    utah: "ut",
    vermont: "vt",
    virginia: "va",
    washington: "wa",
    "west virginia": "wv",
    wisconsin: "wi",
    wyoming: "wy",
    "district of columbia": "dc",
    alberta: "ab",
    "british columbia": "bc",
    manitoba: "mb",
    "new brunswick": "nb",
    "newfoundland and labrador": "nl",
    "nova scotia": "ns",
    ontario: "on",
    "prince edward island": "pe",
    quebec: "qc",
    saskatchewan: "sk",
    "northwest territories": "nt",
    nunavut: "nu",
    yukon: "yt"
};
function G(e1) {
    let t = e1.trim().toLowerCase().replace(/\s+/g, " ");
    if (!t) return "";
    let r1 = 2 === t.length ? t : W[t] ?? "";
    return r1 ? z.has(r1) ? "United States" : V.has(r1) ? "Canada" : "" : "";
}
_c15 = G;
function K(e1) {
    if (!e1 || !e1.trim()) return "";
    let t = e1.split(",").map((e1)=>e1.trim()).filter(Boolean);
    if (t.length >= 2) {
        let e1 = t[t.length - 1].toLowerCase(), r1 = "usa" === e1 || "us" === e1 || "united states" === e1, n = "canada" === e1 || "ca" === e1;
        if (r1 || n) {
            let e1 = t.length >= 3 ? t[t.length - 2] : t[0], r1 = e1.trim().toLowerCase().replace(/\s+/g, " ");
            if (!r1) return "";
            let n = 2 === r1.length ? r1 : W[r1] ?? "";
            if (n && (z.has(n) || V.has(n))) return e1.trim();
        }
    }
    return "";
}
_c16 = K;
function X(e1) {
    if (!e1 || !e1.trim()) return e1;
    let t = e1.trim(), r1 = M.get(t.toUpperCase());
    if (r1) return r1.label;
    let n = R(t), o = $[n];
    if (o) return M.get(o)?.label ?? t;
    let i = N.get(n);
    return i ? i.label : t;
}
_c17 = X;
function J(e1) {
    let t = String(Y(e1, [
        "Country / Region",
        "Country",
        "country",
        "CountryRegion",
        "country_region"
    ]) ?? "").trim(), r1 = /^\d+$/.test(t) ? "" : t ? X(t) : "";
    return {
        "School name": String(Y(e1, [
            "School name",
            "School",
            "school",
            "schoolName"
        ]) ?? "").trim(),
        Degree: String(Y(e1, [
            "Degree",
            "degree"
        ]) ?? "").trim(),
        "Degree Status": String(Y(e1, [
            "Degree Status",
            "DegreeStatus",
            "degreeStatus",
            "status",
            "Status"
        ]) ?? "").trim(),
        "Major / area of study": String(Y(e1, [
            "Major / area of study",
            "Major",
            "major",
            "fieldOfStudy"
        ]) ?? "").trim(),
        "Country / Region": r1
    };
}
_c18 = J;
function Q(e1) {
    let t = e1?.Email;
    if (Array.isArray(t)) return Math.max(0, t.length - 1);
    let r1 = 0;
    for (let t of [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
    ])"" !== (e1?.[`Additional email address ${t}`] ?? "").toString().trim() && r1++;
    return r1;
}
_c19 = Q;
function Z(e1, t) {
    let r1 = Array.isArray(e1.Email) ? e1.Email.map((e1)=>String(e1 ?? "").trim()).filter(Boolean) : [], n = String(e1["Email address"] ?? "").trim();
    n && !r1.length && r1.push(n);
    let o = new Set(r1.map((e1)=>e1.toLowerCase()));
    for(let t = 1; t <= 20; t++){
        let n = String(e1[`Additional email address ${t}`] ?? "").trim();
        n && !o.has(n.toLowerCase()) && (r1.push(n), o.add(n.toLowerCase()));
    }
    let i = t.trim().toLowerCase(), a = n.toLowerCase(), l = [], s = new Set;
    for (let e1 of r1){
        if (t && e1.toLowerCase() === i || !t && n && e1.toLowerCase() === a) continue;
        let r1 = e1.toLowerCase();
        s.has(r1) || (s.add(r1), l.push(e1));
    }
    if (0 === l.length) return {
        regular: e1,
        additionalEmailCount: Q(e1)
    };
    let u = t || n || "", c = [
        u,
        ...l
    ], d = Math.max(0, c.length - 1), f = (e1)=>{
        let t = e1.match(/^Additional email address (\d+)$/);
        return !t || parseInt(t[1], 10) <= d;
    }, p = {};
    Object.keys(e1).filter(f).forEach((t)=>{
        p[t] = e1[t];
    }), p.Email = c.length ? c : e1.Email, p["Email address"] = c[0] ?? e1["Email address"] ?? "";
    for(let e1 = 1; e1 <= d; e1++)p[`Additional email address ${e1}`] = c[e1];
    return {
        regular: p,
        additionalEmailCount: d
    };
}
_c20 = Z;
let ee = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
function et(e1) {
    let t = String(e1 ?? "").trim();
    if (!t) return null;
    let r1 = t.match(/^(\d{4})-(\d{1,2})(?:-\d{1,2})?/);
    if (!r1) return null;
    let n = r1[1], o = parseInt(r1[2], 10);
    if (o < 1 || o > 12) return null;
    let i = ee[o - 1] ?? String(o);
    return {
        month: i,
        year: n
    };
}
function er(e1) {
    let t = String(e1 ?? "").trim();
    if (!t) return "";
    if (ee.some((e1)=>e1.toLowerCase() === t.toLowerCase())) return t;
    let r1 = parseInt(t, 10);
    return isNaN(r1) ? t : 0 === r1 ? "" : r1 >= 1 && r1 <= 12 ? ee[r1 - 1] : t;
}
function en(e1) {
    let t = Y(e1, [
        "School",
        "school",
        "schoolName",
        "School Name",
        "Institution",
        "Institution Name",
        "University",
        "College"
    ]), r1 = Y(e1, [
        "Degree",
        "degree"
    ]), n = Y(e1, [
        "Major",
        "major",
        "Major / area of study",
        "Field Of Study",
        "fieldOfStudy",
        "Study",
        "study"
    ]), o = Y(e1, [
        "Country / Region",
        "Country",
        "country",
        "CountryRegion",
        "country_region"
    ]), i = String(o ?? "").trim(), a = Y(e1, [
        "State",
        "state",
        "State / province"
    ]), l = String(a ?? "").trim();
    e1.School = String(t ?? "").trim(), e1.Degree = String(r1 ?? "").trim(), e1.Major = String(n ?? "").trim();
    let s = /^\d+$/.test(i) ? "" : i;
    if (!s && l) {
        let e1 = G(l);
        e1 && (s = e1);
    }
    e1["Country / Region"] = s ? X(s) : "";
}
function eo(e1) {
    let t = Y(e1, [
        "Company",
        "company",
        "companyName",
        "Employer",
        "Employer name"
    ]), r1 = Y(e1, [
        "Position",
        "position",
        "title",
        "Title",
        "Job title"
    ]);
    e1.Company = String(t ?? "").trim(), e1.Position = String(r1 ?? "").trim(), e1["Employer name"] = e1.Company, e1["Job title"] = e1.Position;
    let n = Y(e1, [
        "Start",
        "start",
        "startDate"
    ]), o = et(String(n ?? "").trim()), i = Y(e1, [
        "Start Date - Month",
        "Start Month",
        "StartDateMonth",
        "Month",
        "month",
        "startMonth"
    ]), a = Y(e1, [
        "Start Date - Year",
        "Start Year",
        "StartDateYear",
        "Year",
        "year",
        "startYear"
    ]);
    o ? (e1["Start Month"] = o.month, e1["Start Year"] = o.year) : (e1["Start Month"] = er(i), e1["Start Year"] = String(e1["Start Year"] ?? a ?? "").trim());
    let l = e1.isCurrent ?? e1.is_current, s = null != l && "" !== String(l).trim(), u = !0 === l || "yes" === String(l ?? "").toLowerCase() || "true" === String(l ?? "").toLowerCase(), c = Y(e1, [
        "This is your current job",
        "currentJob",
        "current_job"
    ]), d = !0 === c || "yes" === String(c ?? "").toLowerCase() || "true" === String(c ?? "").toLowerCase(), f = "0" === String(c ?? "") || "false" === String(c ?? "").toLowerCase(), p = s ? u : !f && d;
    if (e1["This is your current job"] = p, e1.isCurrent = p, e1.is_current = p, e1.currentJob = p, e1.current_job = p, p) e1["End Month"] = "", e1["End Year"] = "";
    else {
        let t = Y(e1, [
            "End",
            "end",
            "endDate"
        ]), r1 = et(String(t ?? "").trim()), n = Y(e1, [
            "End Date - Month",
            "End Month",
            "EndDateMonth",
            "endMonth"
        ]), o = Y(e1, [
            "End Date - Year",
            "End Year",
            "EndDateYear",
            "endYear"
        ]);
        r1 ? (e1["End Month"] = r1.month, e1["End Year"] = r1.year) : (e1["End Month"] = er(n), e1["End Year"] = String(o ?? "").trim());
    }
    let m = Y(e1, [
        "Country / Region",
        "Country",
        "country",
        "CountryRegion",
        "country_region"
    ]), h = Y(e1, [
        "City",
        "city"
    ]), g = Y(e1, [
        "State",
        "state",
        "State / province"
    ]), b = String(m ?? "").trim(), y = String(g ?? "").trim(), v = /^\d+$/.test(b) ? "" : b;
    if (!v && y) {
        let e1 = G(y);
        e1 && (v = e1);
    }
    e1["Country / Region"] = v ? X(v) : "", e1.City = String(h ?? "").trim(), e1.State = y, e1["State / province"] = y;
}
function ei(e1) {
    Array.isArray(e1.education) && e1.education.forEach((e1)=>{
        e1 && "object" == typeof e1 && en(e1);
    }), Array.isArray(e1.workExperience) && e1.workExperience.forEach((e1)=>{
        e1 && "object" == typeof e1 && eo(e1);
    });
}
function ea(e1, t, r1) {
    if (!e1 || !e1.trim()) return !1;
    let n = e1.trim(), o = [
        t,
        r1
    ].filter(Boolean).join(" "), i = [
        r1,
        t
    ].filter(Boolean).join(" ");
    return n === t || n === r1 || n === o || n === i;
}
function el(e1, t, r1) {
    let n = [
        "School",
        "school",
        "schoolName",
        "School Name",
        "Institution",
        "Institution Name",
        "University",
        "College"
    ];
    for (let o of n){
        let n = e1?.[o];
        if (null == n) continue;
        let i = Array.isArray(n) ? n[0] : n, a = String(i ?? "").trim();
        if (a && !ea(a, t, r1)) return a;
    }
    return "";
}
function es(e1, t, r1) {
    let n = [
        "Company",
        "company",
        "Employer",
        "Employer name",
        "companyName"
    ];
    for (let o of n){
        let n = e1?.[o];
        if (null == n) continue;
        let i = Array.isArray(n) ? n[0] : n, a = String(i ?? "").trim();
        if (a && !ea(a, t, r1)) return a;
    }
    return "";
}
let eu = [
    "Graduated",
    "Incomplete",
    "Now attending"
], ec = [
    "bachelor",
    "master",
    "phd",
    "doctorate",
    "associate",
    "b.s.",
    "m.s.",
    "b.a.",
    "m.a.",
    "bachelor's",
    "master's",
    "ph.d.",
    "mba",
    "bs",
    "ms",
    "ba",
    "ma"
];
function ed(e1) {
    return null == e1 ? "" : Array.isArray(e1) ? String(e1[0] ?? "").trim() : String(e1).trim();
}
function ef(e1) {
    if (!e1 || !e1.trim()) return !1;
    let t = e1.trim().toLowerCase();
    return ec.some((e1)=>t === e1 || t.startsWith(e1 + " ") || t.includes(" " + e1));
}
function ep(e1, t) {
    let r1 = ed(e1["Degree Status"]), n = eu.some((e1)=>e1.toLowerCase() === r1.toLowerCase());
    if (!n) {
        if (Array.isArray(t.education) && t.education.length > 0) {
            let r1 = t.education[0], n = ed(r1?.DegreeStatus ?? r1?.["Degree Status"] ?? r1?.status ?? r1?.Status);
            if (eu.some((e1)=>e1.toLowerCase() === n.toLowerCase())) {
                e1["Degree Status"] = n;
                return;
            }
        }
        if (r1 && ef(r1)) {
            let t = ed(e1.Degree);
            t || (e1.Degree = r1.trim()), e1["Degree Status"] = "";
            return;
        }
        e1["Degree Status"] = "";
    }
}
function em(e1, t) {
    let r1 = e1?.regular;
    if (!r1 || "object" != typeof r1) return;
    let n = String(ed(r1["First name"])).trim(), o = String(ed(r1["Last name"])).trim(), i = Y(r1, [
        "Middle name",
        "Middle Name",
        "Middle",
        "Middle initial",
        "middleName",
        "middle_name",
        "middleInitial",
        "middle_initial"
    ]), a = String(i ?? "").trim();
    r1["Middle name"] = a && ea(a, n, o) ? "" : a;
    let l = Y(r1, [
        "Suffix",
        "suffix",
        "Name suffix",
        "nameSuffix",
        "name_suffix"
    ]);
    r1.Suffix = String(l ?? "").trim();
    let s = Y(r1, [
        "Address",
        "address",
        "street",
        "streetAddress",
        "street_address",
        "Address Line 1",
        "addressLine1"
    ]), u = Y(r1, [
        "Zip/postal code",
        "Zip",
        "zip",
        "postalCode",
        "postal_code",
        "Zip code"
    ]), c = String(u ?? "").trim();
    r1["Zip/postal code"] = c;
    let d = String(s ?? "").trim();
    d && c && d === c && (d = ""), d && H(d) && (d = ""), r1.Address = d;
    let f = String(t ?? "").trim(), m = f ? X(f) : "";
    for (let e1 of (r1["Country / Region"] = m, Object.keys(r1)))O(e1) && (r1[e1] = m);
    let h = Y(r1, [
        "City",
        "city"
    ]);
    r1.City = String(h ?? "").trim();
    let g = Y(r1, [
        "State / province",
        "State",
        "state",
        "stateProvince",
        "state_province"
    ]), b = String(g ?? "").trim();
    if (!b && ("United States" === r1["Country / Region"] || "Canada" === r1["Country / Region"])) {
        let e1 = String(Y(r1, [
            "Which locations(s) do you prefer working out of?",
            "Which location(s) do you prefer working out of?",
            "locations",
            "Locations",
            "preferred_locations",
            "preferredLocations"
        ]) ?? "").trim(), t = K(e1);
        t && (b = t);
    }
    if (r1["State / province"] = b, r1.State = b, Array.isArray(e1.education) && e1.education.length > 0) {
        let t = e1.education[0], i = el(t, n, o);
        i && (r1["School name"] = i), t?.Degree && (r1.Degree = t.Degree), t?.Major && (r1["Major / area of study"] = t.Major);
    }
    if (Array.isArray(e1.workExperience) && e1.workExperience.length > 0) {
        let t = e1.workExperience[0], i = es(t, n, o);
        i && (r1["Employer name"] = i), t?.Position && (r1["Job title"] = t.Position);
    }
    ep(r1, e1);
    let y = Y(r1, [
        "Have you worked at Alphabet before?",
        "Alphabet experience",
        "alphabetExperience",
        "alphabet_experience",
        "workedAtAlphabet"
    ]), v = String(y ?? "").trim().toLowerCase(), w = "yes" === v || "true" === v || "1" === v || "y" === v ? "yes" : "no";
    if (r1["Have you worked at Alphabet before?"] = w, !ed(r1.Month) && Array.isArray(e1.education) && e1.education.length > 0) {
        let t = e1.education[0], n = Y(t, [
            "Month",
            "month",
            "Start Date - Month",
            "StartDateMonth"
        ]);
        n && (r1.Month = n);
    }
    let S = ed(r1["School name"]);
    S && ea(S, n, o) && (r1["School name"] = "");
    let E = ed(r1["Employer name"]);
    E && ea(E, n, o) && (r1["Employer name"] = "");
    let x = [];
    Array.isArray(e1.workExperience) && e1.workExperience.length > 0 && (x = e1.workExperience.filter((e1)=>e1 && "object" == typeof e1).map((e1)=>{
        let t = {
            ...e1
        }, r1 = es(t, n, o);
        return r1 && (t["Employer name"] = r1), t;
    })), r1["Work experience"] = x, r1["Applying for your first job?"] = (x.length, "no");
    for(let e1 = 1; e1 <= x.length; e1++){
        let t = x[e1 - 1];
        t && (r1[`Work experience ${e1} - Employer name`] = ed(t["Employer name"]) ?? "", r1[`Work experience ${e1} - Job title`] = ed(t["Job title"]) ?? "");
    }
    let A = p.GOOGLE_SKILLS_LABEL, k = Array.isArray(e1.skills) ? C(e1.skills) : [];
    if (k.length > 0) r1[A] = k;
    else {
        let e1 = r1[A];
        Array.isArray(e1) ? r1[A] = C(e1) : "string" == typeof e1 && e1.trim() && (r1[A] = e1.trim());
    }
    let T = [
        "Which locations(s) do you prefer working out of?",
        "Which location(s) do you prefer working out of?"
    ], F = Y(r1, [
        "locations",
        "Locations",
        "preferred_locations",
        "preferredLocations",
        ...T
    ]);
    if (null != F && "" !== F) {
        let e1 = Array.isArray(F) ? F.map((e1)=>String(e1 ?? "").trim()).filter(Boolean).join(", ") : String(F).trim();
        if (e1) for (let t of T)r1[t] = e1;
    }
    let I = Y(r1, [
        "Preferred Location",
        "preferredLocation",
        "Preferred location",
        "preferred_location"
    ]);
    I && (r1["Preferred Location"] = String(I).trim());
    let j = [
        "Additional location(s)",
        "additionalLocations",
        "Additional locations",
        "additional_locations"
    ], D = r1["Additional location(s)"];
    if (null == D || "" === D) {
        for (let e1 of j){
            let t = r1?.[e1];
            if (null != t) {
                if (Array.isArray(t) && t.length > 0) {
                    D = t;
                    break;
                }
                if ("string" == typeof t && "" !== t.trim()) {
                    D = t.trim();
                    break;
                }
            }
        }
        null != D && "" !== D && (r1["Additional location(s)"] = D);
    }
    let P = Y(r1, [
        "Gender",
        "gender",
        "genderIdentity"
    ]);
    P && (r1.Gender = String(P).trim());
    let _ = Y(r1, [
        "Veteran status",
        "veteranStatus",
        "veteran_status"
    ]);
    _ && (r1["Veteran status"] = String(_).trim());
    let L = Y(r1, [
        "Disability",
        "disability",
        "disabilityStatus"
    ]);
    L && (r1.Disability = String(L).trim());
    let R = r1["Race / ethnic group"];
    if (null == R || "" === R) {
        let e1 = Y(r1, [
            "Race / ethnic group",
            "raceEthnicGroup",
            "race_ethnic_group",
            "race"
        ]);
        "" !== e1 && (r1["Race / ethnic group"] = Array.isArray(e1) ? e1 : String(e1).trim());
    }
    let M = Y(r1, [
        "Privacy policy consent",
        "privacyPolicyConsent",
        "consent",
        "privacy_consent"
    ]);
    "" !== M && (r1["Privacy policy consent"] = M), (void 0 === r1["Consent terms"] || null === r1["Consent terms"] || "" === String(r1["Consent terms"] ?? "").trim()) && (r1["Consent terms"] = "true");
    let N = [];
    if (Array.isArray(r1.Email) && r1.Email.length > 0) N = r1.Email.map((e1)=>String(e1 ?? "").trim()).filter((e1)=>"" !== e1);
    else {
        let e1 = String(Y(r1, [
            "Email address",
            "email",
            "primaryEmail",
            "primary_email"
        ]) ?? "").trim(), t = Y(r1, [
            "Additional email",
            "additional_emails",
            "additionalEmails",
            "Additional emails"
        ]), n = [];
        if (Array.isArray(t) && t.length > 0) n = t.map((e1)=>String(e1 ?? "").trim()).filter((e1)=>"" !== e1);
        else if ("string" == typeof t && t.trim()) n = [
            t.trim()
        ];
        else for(let e1 = 1; e1 <= 20; e1++){
            let t = String(r1[`Additional email address ${e1}`] ?? "").trim();
            "" !== t && n.push(t);
        }
        let o = new Set, i = e1.toLowerCase();
        for (let t of (i && (N.push(e1), o.add(i)), n)){
            let e1 = t.toLowerCase();
            o.has(e1) || (o.add(e1), N.push(t));
        }
    }
    let $ = Math.max(0, N.length - 1), B = (e1)=>{
        let t = e1.match(/^Additional email address (\d+)$/);
        return !t || parseInt(t[1], 10) <= $;
    }, q = {};
    Object.keys(r1).filter(B).forEach((e1)=>{
        q[e1] = r1[e1];
    }), q.Email = N, q["Email address"] = N[0] ?? "";
    for(let e1 = 1; e1 <= $; e1++)q[`Additional email address ${e1}`] = N[e1];
    e1.regular = q;
    let U = [];
    if (Array.isArray((r1 = e1.regular).Phone) && r1.Phone.length > 0) {
        let e1 = new Set;
        for (let t of r1.Phone){
            let r1 = eg(t) ?? ("string" == typeof t ? t.trim() : "");
            !r1 || e1.has(r1) || (e1.add(r1), U.push(r1));
        }
    } else {
        let e1 = Y(r1, [
            "Phone number",
            "Primary phone",
            "Mobile phone number",
            "Phone",
            "phone number",
            "Primary phone number",
            "phone",
            "primary_phone",
            "mobile"
        ]), t = Y(r1, [
            "Additional phone",
            "additional_phones",
            "additionalPhones",
            "Additional phones"
        ]), n = [];
        if (Array.isArray(t) && t.length > 0) n = t.map((e1)=>String(e1 ?? "").trim()).filter((e1)=>"" !== e1);
        else if ("string" == typeof t && t.trim()) n = [
            t.trim()
        ];
        else for(let e1 = 1; e1 <= 20; e1++){
            let t = String(r1[`Additional phone number ${e1}`] ?? "").trim();
            "" !== t && n.push(t);
        }
        let o = eg(e1);
        o && U.push(o);
        let i = new Set;
        for (let e1 of (o && i.add(o), n)){
            let t = eg(e1);
            !t || i.has(t) || (i.add(t), U.push(t));
        }
    }
    let z = U[0] ?? "", V = Math.max(0, U.length - 1), W = (e1)=>{
        let t = e1.match(/^Additional phone number (\d+)$/);
        return !t || parseInt(t[1], 10) <= V;
    }, G = {};
    Object.keys(r1).filter(W).forEach((e1)=>{
        G[e1] = r1[e1];
    }), G.Phone = U, G["Primary phone"] = z, G["Phone number"] = z;
    for(let e1 = 1; e1 <= V; e1++)G[`Additional phone number ${e1}`] = U[e1];
    e1.regular = G;
}
let eh = [
    {
        prefix: "1",
        minTotal: 11
    },
    {
        prefix: "86",
        minTotal: 13
    },
    {
        prefix: "44",
        minTotal: 12
    },
    {
        prefix: "372",
        minTotal: 10
    },
    {
        prefix: "33",
        minTotal: 11
    },
    {
        prefix: "49",
        minTotal: 12
    },
    {
        prefix: "81",
        minTotal: 12
    },
    {
        prefix: "91",
        minTotal: 12
    },
    {
        prefix: "353",
        minTotal: 12
    },
    {
        prefix: "358",
        minTotal: 12
    },
    {
        prefix: "370",
        minTotal: 11
    },
    {
        prefix: "371",
        minTotal: 11
    },
    {
        prefix: "32",
        minTotal: 11
    },
    {
        prefix: "31",
        minTotal: 11
    },
    {
        prefix: "61",
        minTotal: 11
    },
    {
        prefix: "82",
        minTotal: 12
    },
    {
        prefix: "65",
        minTotal: 10
    },
    {
        prefix: "852",
        minTotal: 11
    },
    {
        prefix: "886",
        minTotal: 12
    }
];
function eg(e1) {
    let t;
    if (null == e1) return null;
    if (Array.isArray(e1) && e1.length > 0) t = String(e1[0] ?? "").trim();
    else {
        if ("string" != typeof e1) return null;
        t = e1.trim();
    }
    if (!t) return null;
    let r1 = t.replace(/\D/g, "");
    if (!r1.length) return null;
    let n = t.includes("+");
    if (n) {
        let e1 = [
            ...eh
        ].sort((e1, t)=>t.prefix.length - e1.prefix.length);
        for (let { prefix: t, minTotal: n } of e1)if (r1.length >= n && r1.startsWith(t)) {
            let e1 = r1.slice(t.length);
            if (e1.length >= 6 && e1.length <= 15) return e1;
        }
    }
    return r1;
}
let eb = [
    "Phone number",
    "Primary phone",
    "Mobile phone number",
    "Phone",
    "phone number",
    "Primary phone number"
];
function ey(e1, t = {}) {
    if (!e1) return e1;
    try {
        let { coverLetter: r1, autofillCountry: n } = t, o = (0, s.applyCoverLetterTextToAnswer)(e1, r1, [
            "Cover letter",
            "Cover Letter"
        ]), i = (0, s.formatCoverLetterMarkdownAsText)(r1?.markdown);
        (e1 = o).regular && "object" == typeof e1.regular || (e1.regular = {});
        let a = {
            ...e1.regular
        };
        for (let e1 of (!i || a["Cover letter"] || a["Cover Letter"] || (a["Cover letter"] = i), Object.keys(a))){
            let t = a[e1];
            null != t && "string" == typeof t && (a[e1] = t.trim());
        }
        for (let e1 of eb){
            let t = a[e1], r1 = eg(t);
            if (null !== r1) {
                a[e1] = r1;
                break;
            }
        }
        return ei(e1), e1.regular = a, em(e1, n), e1;
    } catch (t) {
        return e1;
    }
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20;
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
$RefreshReg$(_c11, "B");
$RefreshReg$(_c12, "U");
$RefreshReg$(_c13, "H");
$RefreshReg$(_c14, "Y");
$RefreshReg$(_c15, "G");
$RefreshReg$(_c16, "K");
$RefreshReg$(_c17, "X");
$RefreshReg$(_c18, "J");
$RefreshReg$(_c19, "Q");
$RefreshReg$(_c20, "Z");

},{}]},["k2XBu","dW5Jr"], "dW5Jr", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QUM7SUFBQztBQUFDO0tBQTdJO0FBQThJLFNBQVMsRUFBRSxFQUFDO0lBQUUsT0FBTSxDQUFDLENBQUUsQ0FBQSxPQUFLLE1BQUcsUUFBTSxNQUFHLFlBQVUsT0FBTyxNQUFHLE9BQUssR0FBRSxVQUFRLE1BQU0sUUFBUSxPQUFLLENBQUEsTUFBSSxHQUFFLFVBQVEsR0FBRSxNQUFNLENBQUEsS0FBRyxRQUFNLE1BQUcsT0FBSyxPQUFPLElBQUcsT0FBTSxDQUFDO0FBQUU7QUFBQyxTQUFTLEVBQUUsRUFBQztJQUFFLE9BQU8sR0FBRSxPQUFPLENBQUEsS0FBRyxZQUFVLE9BQU8sSUFBRyxJQUFJLENBQUEsS0FBRyxHQUFFLFFBQVEsT0FBTztBQUFRO01BQTVFO0FBQTZFLFNBQVMsRUFBRSxFQUFDO0lBQUUsT0FBTyxNQUFNLFFBQVEsTUFBRyxFQUFFLE1BQUcsWUFBVSxPQUFPLEtBQUUsRUFBRSxHQUFFLE1BQU0sUUFBTSxFQUFFO0FBQUE7TUFBdkU7QUFBd0UsU0FBUyxFQUFFLEVBQUM7SUFBRSxPQUFPLEdBQUUsT0FBTztBQUFhO0FBQUMsU0FBUyxFQUFFLEVBQUM7SUFBRSxJQUFHLENBQUMsTUFBRyxZQUFVLE9BQU8sTUFBRyxNQUFNLFFBQVEsS0FBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUU7SUFBRSxJQUFHLGFBQVcsRUFBRSxVQUFRLGNBQVksRUFBRSxVQUFRLGNBQVksRUFBRSxRQUFPLE9BQU0sQ0FBQztJQUFFLElBQUksS0FBRTtRQUFDLEVBQUU7UUFBZSxFQUFFO1FBQWUsRUFBRTtLQUFZO0lBQUMsSUFBRyxDQUFDLEdBQUUsTUFBTSxDQUFBLEtBQUcsTUFBTSxRQUFRLE9BQUksR0FBRSxNQUFNLENBQUEsS0FBRyxZQUFVLE9BQU8sTUFBSSxPQUFNLENBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxHQUFFLEVBQUUsR0FBQyxJQUFFLElBQUUsRUFBRSxJQUFJO0lBQUcsSUFBRyxFQUFFLEtBQUssQ0FBQSxLQUFHLENBQUMsT0FBSSxJQUFJLElBQUksR0FBRyxTQUFPLEVBQUUsUUFBTyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsSUFBSSxJQUFJLElBQUcsSUFBRSxFQUFFLElBQUksSUFBRyxJQUFFLEVBQUUsSUFBSSxJQUFHLElBQUUsSUFBSSxJQUFJLElBQUcsSUFBRSxJQUFJLElBQUk7SUFBRyxJQUFHLEVBQUUsU0FBTyxFQUFFLFVBQVEsRUFBRSxTQUFPLEVBQUUsUUFBTyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsQ0FBQSxLQUFHO2VBQUk7U0FBRSxDQUFDLE1BQU0sQ0FBQSxLQUFHLEVBQUUsSUFBSTtJQUFJLElBQUcsQ0FBQyxFQUFFLE1BQUksQ0FBQyxFQUFFLE1BQUk7V0FBSTtLQUFFLENBQUMsS0FBSyxDQUFBLEtBQUcsRUFBRSxJQUFJLE1BQUksT0FBTSxDQUFDO0lBQUUsSUFBSSxJQUFFLElBQUksSUFBSTtXQUFJO1dBQUs7S0FBRTtJQUFFLE9BQU0sQ0FBQyxDQUFFLENBQUEsRUFBRSxTQUFPLEVBQUUsUUFBTTtXQUFJO0tBQUUsQ0FBQyxNQUFNLENBQUEsS0FBRyxFQUFFLElBQUksSUFBRSxLQUFLLENBQUEsYUFBVyxFQUFFLFNBQU8sRUFBRSxPQUFLLEtBQUcsTUFBSSxFQUFFLFFBQU0sRUFBRSxTQUFPLEVBQUUsT0FBSyxjQUFZLEVBQUUsU0FBTyxFQUFFLE9BQUssS0FBRyxFQUFFLE9BQUssSUFBRSxNQUFJLEVBQUUsSUFBRztBQUFFO01BQXJ1QjtBQUFzdUIsU0FBUyxFQUFFLEVBQUM7SUFBRSxJQUFJLElBQUUsT0FBTyxNQUFHLElBQUksT0FBTztJQUFjLE9BQU8sRUFBRSxLQUFLLENBQUEsS0FBRyxHQUFFLE9BQU8sa0JBQWdCO0FBQUU7TUFBMUY7QUFBMkYsU0FBUyxFQUFFLEVBQUM7SUFBRSxPQUFNLEFBQUMsQ0FBQSxNQUFHLEVBQUMsRUFBRyxRQUFRLFFBQU8sS0FBSyxPQUFPO0FBQWE7TUFBM0Q7QUFBNEQsU0FBUyxFQUFFLEVBQUM7SUFBRSxJQUFJLElBQUUsRUFBRTtJQUFHLElBQUcsQ0FBQyxHQUFFLE9BQU0sRUFBRTtJQUFDLElBQUksS0FBRSxFQUFFLE1BQU0sS0FBSyxJQUFJLENBQUEsS0FBRyxHQUFFLFFBQVEsT0FBTyxVQUFTLElBQUU7UUFBQztLQUFFO0lBQUMsT0FBTyxHQUFFLFVBQVEsS0FBRyxFQUFFLEtBQUssR0FBRSxNQUFNLEdBQUUsR0FBRyxLQUFLLFFBQU8sR0FBRSxVQUFRLEtBQUcsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFFLEdBQUUsTUFBTSxLQUFLLElBQUksSUFBSSxFQUFFLE9BQU87QUFBVTtBQUFDLFNBQVMsRUFBRSxFQUFDLEVBQUMsQ0FBQztJQUFFLElBQUksS0FBRSxFQUFFO0lBQUcsSUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEdBQUUsUUFBTyxJQUFJO1FBQUMsSUFBSSxJQUFFLEVBQUUsRUFBQyxDQUFDLEVBQUUsSUFBRTtRQUFJLElBQUcsS0FBRyxNQUFJLElBQUUsT0FBTTtZQUFDLE9BQU07WUFBRSxXQUFVO1FBQU87SUFBQztJQUFDLElBQUksSUFBRSxFQUFFO0lBQUcsS0FBSSxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksS0FBRSxHQUFFLEtBQUUsR0FBRSxRQUFPLEtBQUk7UUFBQyxJQUFJLElBQUUsRUFBRSxFQUFDLENBQUMsR0FBRSxJQUFFO1FBQUksSUFBRyxLQUFJLENBQUEsRUFBRSxXQUFXLE1BQUksRUFBRSxXQUFXLEVBQUMsR0FBRyxPQUFNO1lBQUMsT0FBTTtZQUFFLFdBQVU7UUFBUTtJQUFDO0lBQUMsS0FBSSxJQUFJLEtBQUssRUFBRSxJQUFJLElBQUksS0FBRSxHQUFFLEtBQUUsR0FBRSxRQUFPLEtBQUk7UUFBQyxJQUFJLElBQUUsRUFBRSxFQUFDLENBQUMsR0FBRSxJQUFFO1FBQUksSUFBRyxLQUFJLENBQUEsRUFBRSxTQUFTLE1BQUksRUFBRSxTQUFTLEVBQUMsR0FBRyxPQUFNO1lBQUMsT0FBTTtZQUFFLFdBQVU7UUFBUztJQUFDO0lBQUMsT0FBTTtRQUFDLE9BQU07UUFBRyxXQUFVO0lBQU07QUFBQztNQUF6YTtBQUEwYSxTQUFTLEVBQUUsRUFBQyxFQUFDLENBQUM7SUFBRSxJQUFJ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U0FBVTtRQUFFLEtBQUcsQ0FBQSxFQUFDLENBQUMsWUFBWSxHQUFDLEdBQUUsT0FBTSxFQUFDLENBQUMsV0FBVyxHQUFDLEdBQUUsSUFBRyxJQUFJLENBQUEsRUFBQyxDQUFDLFlBQVksR0FBQyxHQUFHLElBQUcsRUFBQyxDQUFDLFdBQVcsR0FBQyxPQUFPLEtBQUcsSUFBSSxNQUFLO0lBQUU7SUFBQyxJQUFJLElBQUUsRUFBRSxJQUFFO1FBQUM7UUFBbUI7UUFBVTtRQUFVO1FBQWdCO0tBQWlCLEdBQUUsSUFBRSxFQUFFLElBQUU7UUFBQztRQUFPO0tBQU8sR0FBRSxJQUFFLEVBQUUsSUFBRTtRQUFDO1FBQVE7UUFBUTtLQUFtQixHQUFFLElBQUUsT0FBTyxLQUFHLElBQUksUUFBTyxJQUFFLE9BQU8sS0FBRyxJQUFJLFFBQU8sSUFBRSxRQUFRLEtBQUssS0FBRyxLQUFHO0lBQUUsSUFBRyxDQUFDLEtBQUcsR0FBRTtRQUFDLElBQUksS0FBRSxFQUFFO1FBQUcsTUFBSSxDQUFBLElBQUUsRUFBQTtJQUFFO0lBQUMsRUFBQyxDQUFDLG1CQUFtQixHQUFDLElBQUUsRUFBRSxLQUFHLElBQUcsR0FBRSxPQUFLLE9BQU8sS0FBRyxJQUFJLFFBQU8sR0FBRSxRQUFNLEdBQUUsRUFBQyxDQUFDLG1CQUFtQixHQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsRUFBQztJQUFFLE1BQU0sUUFBUSxHQUFFLGNBQVksR0FBRSxVQUFVLFFBQVEsQ0FBQTtRQUFJLE1BQUcsWUFBVSxPQUFPLE1BQUcsR0FBRztJQUFFLElBQUcsTUFBTSxRQUFRLEdBQUUsbUJBQWlCLEdBQUUsZUFBZSxRQUFRLENBQUE7UUFBSSxNQUFHLFlBQVUsT0FBTyxNQUFHLEdBQUc7SUFBRTtBQUFFO0FBQUMsU0FBUyxHQUFHLEVBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQztJQUFFLElBQUcsQ0FBQyxNQUFHLENBQUMsR0FBRSxRQUFPLE9BQU0sQ0FBQztJQUFFLElBQUksSUFBRSxHQUFFLFFBQU8sSUFBRTtRQUFDO1FBQUU7S0FBRSxDQUFDLE9BQU8s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QU0sSUFBSSxJQUFJLEtBQUUsR0FBRSxNQUFHLElBQUcsS0FBSTtZQUFDLElBQUksSUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDLHdCQUF3QixFQUFFLEdBQUUsQ0FBQyxDQUFDLElBQUUsSUFBSTtZQUFPLE9BQUssS0FBRyxFQUFFLEtBQUs7UUFBRTtRQUFDLElBQUksSUFBRSxHQUFHO1FBQUcsS0FBRyxFQUFFLEtBQUs7UUFBRyxJQUFJLElBQUUsSUFBSTtRQUFJLEtBQUksSUFBSSxNQUFLLENBQUEsS0FBRyxFQUFFLElBQUksSUFBRyxDQUFBLEVBQUc7WUFBQyxJQUFJLElBQUUsR0FBRztZQUFHLENBQUMsS0FBRyxFQUFFLElBQUksTUFBSyxDQUFBLEVBQUUsSUFBSSxJQUFHLEVBQUUsS0FBSyxFQUFDO1FBQUU7SUFBQztJQUFDLElBQUksSUFBRSxDQUFDLENBQUMsRUFBRSxJQUFFLElBQUcsSUFBRSxLQUFLLElBQUksR0FBRSxFQUFFLFNBQU8sSUFBRyxJQUFFLENBQUE7UUFBSSxJQUFJLElBQUUsR0FBRSxNQUFNO1FBQW1DLE9BQU0sQ0FBQyxLQUFHLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBQyxPQUFLO0lBQUMsR0FBRSxJQUFFLENBQUM7SUFBRSxPQUFPLEtBQUssSUFBRyxPQUFPLEdBQUcsUUFBUSxDQUFBO1FBQUksQ0FBQyxDQUFDLEdBQUUsR0FBQyxFQUFDLENBQUMsR0FBRTtJQUFBLElBQUcsRUFBRSxRQUFNLEdBQUUsQ0FBQyxDQUFDLGdCQUFnQixHQUFDLEdBQUUsQ0FBQyxDQUFDLGVBQWUsR0FBQztJQUFFLElBQUksSUFBSSxLQUFFLEdBQUUsTUFBRyxHQUFFLEtBQUksQ0FBQyxDQUFDLENBQUMsd0JBQXdCLEVBQUUsR0FBRSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRTtJQUFDLEdBQUUsVUFBUTtBQUFDO0FBQUMsSUFBSSxLQUFHO0lBQUM7UUFBQyxRQUFPO1FBQUksVUFBUztJQUFFO0lBQUU7UUFBQyxRQUFPO1FBQUssVUFBUztJQUFFO0lBQUU7UUFBQyxRQUFPO1FBQUssVUFBUztJQUFFO0lBQUU7UUFBQyxRQUFPO1FBQU0sVUFBUztJQUFFO0lBQUU7UUFBQyxRQUFPO1FBQUssVUFBUztJQUFFO0lBQUU7UUFBQyxRQUFPO1FBQUssVUFBUztJQUFFO0lBQUU7UUFBQyxRQUFPO1FBQUssVUFBUztJQUFFO0lBQUU7UUFBQyxRQUFPO1FBQUssVUFBUztJQUFFO0lBQUU7UUFBQyxRQUFPO1FBQU0sVUFBUztJQUFFO0lBQUU7UUFBQyxRQUFPO1FBQU0sVUFBUztJQUFFO0lBQUU7UUFBQyxRQUFPO1FBQU0sVUFBUztJQUFFO0lBQUU7UUFBQyxRQUFPO1FBQU0sVUFBUztJQUFFO0lBQUU7UUFBQyxRQUFPO1FBQUssVUFBUztJQUFFO0lBQUU7UUFBQyxRQUFPO1FBQUssVUFBUztJQUFFO0lBQUU7UUFBQyxRQUFPO1FBQUssVUFBUztJQUFFO0lBQUU7UUFBQyxRQUFPO1FBQUssVUFBUztJQUFFO0lBQUU7UUFBQyxRQUFPO1FBQUssVUFBUztJQUFFO0lBQUU7UUFBQyxRQUFPO1FBQU0sVUFBUztJQUFFO0lBQUU7UUFBQyxRQUFPO1FBQU0sVUFBUztJQUFFO0NBQUU7QUFBQyxTQUFTLEdBQUcsRUFBQztJQUFFLElBQUk7SUFBRSxJQUFHLFFBQU0sSUFBRSxPQUFPO0lBQUssSUFBRyxNQUFNLFFBQVEsT0FBSSxHQUFFLFNBQU8sR0FBRSxJQUFFLE9BQU8sRUFBQyxDQUFDLEVBQUUsSUFBRSxJQUFJO1NBQVc7UUFBQyxJQUFHLFlBQVUsT0FBTyxJQUFFLE9BQU87UUFBSyxJQUFFLEdBQUU7SUFBTTtJQUFDLElBQUcsQ0FBQyxHQUFFLE9BQU87SUFBSyxJQUFJLEtBQUUsRUFBRSxRQUFRLE9BQU07SUFBSSxJQUFHLENBQUMsR0FBRSxRQUFPLE9BQU87SUFBSyxJQUFJLElBQUUsRUFBRSxTQUFTO0lBQUssSUFBRyxHQUFFO1FBQUMsSUFBSSxLQUFFO2VBQUk7U0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFFLElBQUksRUFBRSxPQUFPLFNBQU8sR0FBRSxPQUFPO1FBQVEsS0FBSSxJQUFHLEVBQUMsUUFBTyxDQUFDLEVBQUMsVUFBUyxDQUFDLEVBQUMsSUFBRyxHQUFFLElBQUcsR0FBRSxVQUFRLEtBQUcsR0FBRSxXQUFXLElBQUc7WUFBQyxJQUFJLEtBQUUsR0FBRSxNQUFNLEVBQUU7WUFBUSxJQUFHLEdBQUUsVUFBUSxLQUFHLEdBQUUsVUFBUSxJQUFHLE9BQU87UUFBQztJQUFDO0lBQUMsT0FBTztBQUFDO0FBQUMsSUFBSSxLQUFHO0lBQUM7SUFBZTtJQUFnQjtJQUFzQjtJQUFRO0lBQWU7Q0FBdUI7QUFBQyxTQUFTLEdBQUcsRUFBQyxFQUFDLElBQUUsQ0FBQyxDQUFDO0lBQUUsSUFBRyxDQUFDLElBQUUsT0FBTztJQUFFLElBQUc7UUFBQyxJQUFHLEVBQUMsYUFBWSxFQUFDLEVBQUMsaUJBQWdCLENBQUMsRUFBQyxHQUFDLEdBQUUsSUFBRSxBQUFDLENBQUEsR0FBRSxFQUFFLDRCQUEyQixFQUFHLElBQUUsSUFBRTtZQUFDO1lBQWU7U0FBZSxHQUFFLElBQUUsQUFBQyxDQUFBLEdBQUUsRUFBRSwrQkFBOEIsRUFBRyxJQUFHO1FBQVcsQ0FBQSxLQUFFLENBQUEsRUFBRyxXQUFTLFlBQVUsT0FBTyxHQUFFLFdBQVUsQ0FBQSxHQUFFLFVBQVEsQ0FBQyxDQUFBO1FBQUcsSUFBSSxJQUFFO1lBQUMsR0FBRyxHQUFFLE9BQU87UUFBQTtRQUFFLEtBQUksSUFBSSxNQUFLLENBQUEsQ0FBQyxLQUFHLENBQUMsQ0FBQyxlQUFlLElBQUUsQ0FBQyxDQUFDLGVBQWUsSUFBRyxDQUFBLENBQUMsQ0FBQyxlQUFlLEdBQUMsQ0FBQSxHQUFHLE9BQU8sS0FBSyxFQUFDLEVBQUc7WUFBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLEdBQUU7WUFBQyxRQUFNLEtBQUcsWUFBVSxPQUFPLEtBQUksQ0FBQSxDQUFDLENBQUMsR0FBRSxHQUFDLEVBQUUsTUFBSztRQUFFO1FBQUMsS0FBSSxJQUFJLE1BQUssR0FBRztZQUFDLElBQUksSUFBRSxDQUFDLENBQUMsR0FBRSxFQUFDLEtBQUUsR0FBRztZQUFHLElBQUcsU0FBTyxJQUFFO2dCQUFDLENBQUMsQ0FBQyxHQUFFLEdBQUM7Z0JBQUU7WUFBSztRQUFDO1FBQUMsT0FBTyxHQUFHLEtBQUcsR0FBRSxVQUFRLEdBQUUsR0FBRyxJQUFFLElBQUc7SUFBQyxFQUFDLE9BQU0sR0FBRTtRQUFDLE9BQU87SUFBQztBQUFDIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS0zYWNkYmI2OTlhZjVjZTc1LmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL2dvb2dsZS9hbnN3ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxcZ29vZ2xlXFxcXGFuc3dlci5qc1wiLFwiYnVuZGxlSWRcIjpcImNiZGFkYmYxMzQ2ZGYyN2NcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiA3bWFuTlxyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvZ29vZ2xlL2Fuc3dlci5qc1xuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIC4vc2tpbGxzLW9wZXJhdGlvbiAtPiBjUFVRSyAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9nb29nbGUvc2tpbGxzLW9wZXJhdGlvbi5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgQHBsYXNtb2hxL21lc3NhZ2luZyAtPiA5Mkd5QiAgPT4gIEBwbGFzbW9ocS9tZXNzYWdpbmcuanNcclxuICogICBsb2Rhc2gtZXMgLT4gcDRSQmUgID0+ICBsb2Rhc2gtZXMuanNcclxuICogICB+Y29uc3RhbnRzL2NvdW50cnkgLT4gN3oyUncgID0+ICBzcmMvY29uc3RhbnRzL2NvdW50cnkuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXIgLT4gN1Q1ZVcgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9hbnN3ZXIuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb24gLT4gbHVKZnMgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb24uanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9jb3Zlci1sZXR0ZXIgLT4gN1ZSNWkgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9jb3Zlci1sZXR0ZXIuanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqICAgfmNvcmUvdXRpbHMgLT4gYVREaDUgID0+ICBzcmMvY29yZS91dGlscy5qc1xyXG4gKiAgIH5lbnVtcy9odHRwIC0+IGVKRnFqICA9PiAgc3JjL2VudW1zL2h0dHAuanNcclxuICovXHJcblxyXG52YXIgbj1lKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtuLmRlZmluZUludGVyb3BGbGFnKHIpLG4uZXhwb3J0KHIsXCJHT09HTEVfUFJFRkVSUkVEX0xPQ0FUSU9OU19ERVNDUklQVElPTlwiLCgpPT5oKSxuLmV4cG9ydChyLFwiZ2V0R29vZ2xlRmllbGREZXNjcmlwdGlvblwiLCgpPT55KSxuLmV4cG9ydChyLFwic2VyaWFsaXplUnVsZXNGb3JBcGlcIiwoKT0+diksbi5leHBvcnQocixcImdldFJhd1ZhbHVlSW5SZWNvcmRcIiwoKT0+RSksbi5leHBvcnQocixcIm5vcm1hbGl6ZUdvb2dsZVNraWxsc0l0ZW1zXCIsKCk9PkEpLG4uZXhwb3J0KHIsXCJpc1ByZWZlcnJlZFdvcmtMb2NhdGlvbkxhYmVsXCIsKCk9PkYpLG4uZXhwb3J0KHIsXCJmaW5kUHJlZmVycmVkV29ya0xvY2F0aW9uT3B0aW9uSW5kZXhcIiwoKT0+RCksbi5leHBvcnQocixcImF0dGFjaEdvb2dsZUVtcGxveW1lbnRSdWxlQ29udGV4dFwiLCgpPT5QKSxuLmV4cG9ydChyLFwicmVzb2x2ZUNvdW50cnlEYXRhVmFsdWVcIiwoKT0+Qiksbi5leHBvcnQocixcImdldEdvb2dsZU9wZXJhdGlvbkNvbmZpZ092ZXJyaWRlc1wiLCgpPT5xKSxuLmV4cG9ydChyLFwicmVxdWVzdEdvb2dsZUZvcm1BbnN3ZXJzXCIsKCk9PlUpLG4uZXhwb3J0KHIsXCJTVEFURV9QUk9WSU5DRV9OQU1FX1RPX0NPREVcIiwoKT0+Vyksbi5leHBvcnQocixcIm1hcEVkdWNhdGlvblJlY29yZFRvUmVndWxhclwiLCgpPT5KKSxuLmV4cG9ydChyLFwibm9ybWFsaXplRW1haWxzRm9yQ29udGFjdERldGFpbHNcIiwoKT0+Wiksbi5leHBvcnQocixcImZvcm1hdEFuc3dlclwiLCgpPT5leSk7dmFyIG89ZShcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIiksaT1lKFwibG9kYXNoLWVzXCIpLGE9ZShcIn5jb250ZW50cy9tZXRob2RzL2Fuc3dlclwiKSxsPWUoXCJ+Y29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb25cIikscz1lKFwifmNvbnRlbnRzL21ldGhvZHMvY292ZXItbGV0dGVyXCIpLHU9ZShcIn5jb3JlL2VudW1zXCIpLGM9ZShcIn5jb25zdGFudHMvY291bnRyeVwiKSxkPWUoXCJ+Y29yZS91dGlsc1wiKSxmPWUoXCJ+ZW51bXMvaHR0cFwiKSxwPWUoXCIuL3NraWxscy1vcGVyYXRpb25cIik7bGV0IG09W1wiJGlucHV0XCIsXCIkbGFiZWxcIixcImNoaWxkcmVuXCIsXCIkY2hlY2tib3hzXCIsXCIkcmFkaW9QYXJlbnRcIixcIl9fb3JpZ2luYWxSb3dJbmRleFwiXSxoPVwiVGhlIHJvbGUgaXMgb2ZmZXJlZCBpbiBtdWx0aXBsZSBsb2NhdGlvbnMuIFBsZWFzZSBzZWxlY3Qgb25lIHByZWZlcnJlZCBsb2NhdGlvbiBmcm9tIHRoZSBsaXN0IGJlbG93LiAqXCI7ZnVuY3Rpb24gZyhlKXtyZXR1cm4oZXx8XCJcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCl9ZnVuY3Rpb24gYigpe3JldHVyblwiZG9jcy5nb29nbGUuY29tXCI9PT13aW5kb3cubG9jYXRpb24uaG9zdG5hbWUmJndpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2Zvcm1zL1wiKX1mdW5jdGlvbiB5KGUpe2xldCB0PWcoZSkudG9Mb3dlckNhc2UoKTtpZihcInByZWZlcnJlZCBsb2NhdGlvblwiPT09dHx8XCJwcmVmZXJyZWQgbG9jYXRpb25zXCI9PT10KXJldHVybiBofWZ1bmN0aW9uIHYoZSl7cmV0dXJuIGUubWFwKGU9PntsZXQgdD0oMCxpLm9taXQpKGUsLi4ubSk7cmV0dXJuKGUudHlwZT09PXUuRklFTERfVFlQRS5FRFVDQVRJT058fGUudHlwZT09PXUuRklFTERfVFlQRS5FTVBMT1lNRU5UKSYmQXJyYXkuaXNBcnJheShlLmNoaWxkcmVuKSYmZS5jaGlsZHJlbi5sZW5ndGg+MCYmKHQub3B0aW9ucz1lLmNoaWxkcmVuLm1hcChlPT4oMCxpLm9taXQpKGUsLi4ubSkpKSxcIlN0YXRlIC8gcHJvdmluY2VcIj09PWUubGFiZWwmJmUudHlwZSE9PXUuRklFTERfVFlQRS5FRFVDQVRJT04mJmUudHlwZSE9PXUuRklFTERfVFlQRS5FTVBMT1lNRU5UJiYodC5sYWJlbD1cIlN0YXRlXCIpLHR9KX1sZXQgdz17XCJEbyB5b3UgY3VycmVudGx5IG5lZWQsIG9yIHdpbGwgeW91IHNvbWVkYXkgcmVxdWlyZSwgR29vZ2xlIHRvIHNwb25zb3Igd29yayBhdXRob3JpemF0aW9uIGZvciB5b3UgdG8gd29yayBpbiB0aGUgY291bnRyeSBvZiBlbXBsb3ltZW50P1wiOlwiRG8geW91IG5lZWQgd29yayBzcG9uc29yIGluIHRoZSBjb3VudHJ5IG9mIGVtcGxveW1lbnQ/XCIsXCJIYXZlIHlvdSB3b3JrZWQgYXQgQWxwaGFiZXQgYmVmb3JlP1wiOlwiQWxwaGFiZXQgZXhwZXJpZW5jZVwiLFwiU3RhdGUgLyBwcm92aW5jZVwiOlwiU3RhdGVcIn0sUz1bXCJXaGljaCBsb2NhdGlvbnMocykgZG8geW91IHByZWZlciB3b3JraW5nIG91dCBvZj9cIixcIldoaWNoIGxvY2F0aW9uKHMpIGRvIHlvdSBwcmVmZXIgd29ya2luZyBvdXQgb2Y/XCJdO2Z1bmN0aW9uIEUoZSx0KXtmb3IobGV0IHIgaW4gdClpZigoMCxhLmlzTWF0Y2hlZCkoZSxyKSlyZXR1cm57Zm91bmQ6ITAsdmFsdWU6dFtyXX07bGV0IHI9d1tlXTtyZXR1cm4gciYmdm9pZCAwIT09dFtyXT97Zm91bmQ6ITAsdmFsdWU6dFtyXX06e2ZvdW5kOiExfX1mdW5jdGlvbiB4KGUpe3JldHVybiEhKFwiXCI9PT1lfHxudWxsPT1lfHxcInN0cmluZ1wiPT10eXBlb2YgZSYmXCJcIj09PWUudHJpbSgpfHxBcnJheS5pc0FycmF5KGUpJiYoMD09PWUubGVuZ3RofHxlLmV2ZXJ5KGU9Pm51bGw9PWV8fFwiXCI9PT1TdHJpbmcoZSkudHJpbSgpKSkpfWZ1bmN0aW9uIEMoZSl7cmV0dXJuIGUuZmlsdGVyKGU9Plwic3RyaW5nXCI9PXR5cGVvZiBlKS5tYXAoZT0+ZS50cmltKCkpLmZpbHRlcihCb29sZWFuKX1mdW5jdGlvbiBBKGUpe3JldHVybiBBcnJheS5pc0FycmF5KGUpP0MoZSk6XCJzdHJpbmdcIj09dHlwZW9mIGU/QyhlLnNwbGl0KFwiLFwiKSk6W119ZnVuY3Rpb24gayhlKXtyZXR1cm4gZS50cmltKCkudG9Mb3dlckNhc2UoKX1mdW5jdGlvbiBUKGUpe2lmKCFlfHxcIm9iamVjdFwiIT10eXBlb2YgZXx8QXJyYXkuaXNBcnJheShlKSlyZXR1cm4hMTtsZXQgdD1lO2lmKFwiZmlsbGVkXCIhPT10LnN0YXR1cyYmXCJwYXJ0aWFsXCIhPT10LnN0YXR1cyYmXCJtaXNzaW5nXCIhPT10LnN0YXR1cylyZXR1cm4hMTtsZXQgcj1bdC5yZXF1ZXN0ZWRJdGVtcyx0LnN1Y2NlZWRlZEl0ZW1zLHQuZmFpbGVkSXRlbXNdO2lmKCFyLmV2ZXJ5KGU9PkFycmF5LmlzQXJyYXkoZSkmJmUuZXZlcnkoZT0+XCJzdHJpbmdcIj09dHlwZW9mIGUpKSlyZXR1cm4hMTtsZXRbbixvLGldPXIsYT1uLm1hcChrKTtpZihhLnNvbWUoZT0+IWUpfHxuZXcgU2V0KGEpLnNpemUhPT1hLmxlbmd0aClyZXR1cm4hMTtsZXQgbD1uZXcgU2V0KGEpLHM9by5tYXAoayksdT1pLm1hcChrKSxjPW5ldyBTZXQocyksZD1uZXcgU2V0KHUpO2lmKGMuc2l6ZSE9PXMubGVuZ3RofHxkLnNpemUhPT11Lmxlbmd0aClyZXR1cm4hMTtsZXQgZj1lPT5bLi4uZV0uZXZlcnkoZT0+bC5oYXMoZSkpO2lmKCFmKGMpfHwhZihkKXx8Wy4uLmNdLnNvbWUoZT0+ZC5oYXMoZSkpKXJldHVybiExO2xldCBwPW5ldyBTZXQoWy4uLmMsLi4uZF0pO3JldHVybiEhKHAuc2l6ZT09PWwuc2l6ZSYmWy4uLmxdLmV2ZXJ5KGU9PnAuaGFzKGUpKSkmJihcImZpbGxlZFwiPT09dC5zdGF0dXM/bC5zaXplPjAmJjA9PT1kLnNpemUmJmMuc2l6ZT09PWwuc2l6ZTpcInBhcnRpYWxcIj09PXQuc3RhdHVzP2Muc2l6ZT4wJiZkLnNpemU+MDowPT09Yy5zaXplKX1mdW5jdGlvbiBGKGUpe2xldCB0PVN0cmluZyhlPz9cIlwiKS50cmltKCkudG9Mb3dlckNhc2UoKTtyZXR1cm4gUy5zb21lKGU9PmUudHJpbSgpLnRvTG93ZXJDYXNlKCk9PT10KX1mdW5jdGlvbiBJKGUpe3JldHVybihlfHxcIlwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpfWZ1bmN0aW9uIGooZSl7bGV0IHQ9SShlKTtpZighdClyZXR1cm5bXTtsZXQgcj10LnNwbGl0KFwiLFwiKS5tYXAoZT0+ZS50cmltKCkpLmZpbHRlcihCb29sZWFuKSxuPVt0XTtyZXR1cm4gci5sZW5ndGg+PTImJm4ucHVzaChyLnNsaWNlKDAsMikuam9pbihcIiwgXCIpKSxyLmxlbmd0aD49MSYmbi5wdXNoKHJbMF0pLEFycmF5LmZyb20obmV3IFNldChuLmZpbHRlcihCb29sZWFuKSkpfWZ1bmN0aW9uIEQoZSx0KXtsZXQgcj1JKHQpO2ZvcihsZXQgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbj1JKGVbdF0/P1wiXCIpO2lmKG4mJm49PT1yKXJldHVybntpbmRleDp0LG1hdGNoTW9kZTpcImV4YWN0XCJ9fWxldCBuPWoodCk7Zm9yKGxldCB0IG9mIG4pZm9yKGxldCByPTA7cjxlLmxlbmd0aDtyKyspe2xldCBuPUkoZVtyXT8/XCJcIik7aWYobiYmKG4uc3RhcnRzV2l0aCh0KXx8dC5zdGFydHNXaXRoKG4pKSlyZXR1cm57aW5kZXg6cixtYXRjaE1vZGU6XCJwcmVmaXhcIn19Zm9yKGxldCB0IG9mIG4pZm9yKGxldCByPTA7cjxlLmxlbmd0aDtyKyspe2xldCBuPUkoZVtyXT8/XCJcIik7aWYobiYmKG4uaW5jbHVkZXModCl8fHQuaW5jbHVkZXMobikpKXJldHVybntpbmRleDpyLG1hdGNoTW9kZTpcInBhcnRpYWxcIn19cmV0dXJue2luZGV4Oi0xLG1hdGNoTW9kZTpcIm5vbmVcIn19ZnVuY3Rpb24gUChlLHQpe2xldCByPWU9PmUudHlwZT09PXUuRklFTERfVFlQRS5FTVBMT1lNRU5UJiZBcnJheS5pc0FycmF5KGUuY2hpbGRyZW4pLG49KGUsdCk9PntsZXQgcj17Li4uZX07cmV0dXJuIHIuX19kZWJ1Z1dvcmtDb3VudHJ5PXQscn07cmV0dXJuIGUubWFwKChlLG8pPT57aWYoIXIoZSkpcmV0dXJuIGU7bGV0IGk9dFtvXTtpZighaSlyZXR1cm4gZTtsZXQgYT1lLmNoaWxkcmVuLm1hcChlPT57bGV0IHQ9U3RyaW5nKGUubGFiZWw/P1wiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpLHI9XCJjb3VudHJ5IC8gcmVnaW9uXCI9PT10fHxcImNvdW50cnlcIj09PXR8fFwiY291bnRyeS9yZWdpb25cIj09PXQ7cmV0dXJuIHI/bihlLHtyb3dJbmRleDpvLGVtcGxveWVyOlN0cmluZyhpW1wiRW1wbG95ZXIgbmFtZVwiXT8/aS5Db21wYW55Pz9cIlwiKS50cmltKCksY291bnRyeTpTdHJpbmcoaVtcIkNvdW50cnkgLyBSZWdpb25cIl0/P2kuQ291bnRyeT8/aS5jb3VudHJ5Pz9cIlwiKS50cmltKCksc3RhdGU6U3RyaW5nKGkuU3RhdGU/P2lbXCJTdGF0ZSAvIHByb3ZpbmNlXCJdPz9cIlwiKS50cmltKCl9KTplfSk7cmV0dXJuey4uLmUsY2hpbGRyZW46YX19KX1mdW5jdGlvbiBfKGUpe2xldCB0PVN0cmluZyhBcnJheS5pc0FycmF5KGUpP2VbMF0/P1wiXCI6ZT8/XCJcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCk7aWYoIXQpcmV0dXJuXCJcIjtsZXQgcj10LnNwbGl0KC9bXFx1ZmYwYyxdLykubWFwKGU9PmUucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCkpLmZpbHRlcihCb29sZWFuKTtyZXR1cm4gci5sZW5ndGg+PTM/ci5zbGljZSgwLDIpLmpvaW4oXCIsIFwiKTp0fWZ1bmN0aW9uIEwoZSx0KXtpZighRihlKSlyZXR1cm4gdDtpZihBcnJheS5pc0FycmF5KHQpKXtsZXQgZT1fKHRbMF0pO3JldHVybiBlP1tlXTp0fWxldCByPV8odCk7cmV0dXJuIHJ8fHR9ZnVuY3Rpb24gUihlKXtyZXR1cm4oZXx8XCJcIikubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csXCJcIikucmVwbGFjZSgvJi9nLFwiIGFuZCBcIikucmVwbGFjZSgvWydcXHUyMDE5XS9nLFwiXCIpLnJlcGxhY2UoL1teYS16MC05XSsvZ2ksXCIgXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpLnRvTG93ZXJDYXNlKCl9ZnVuY3Rpb24gTyhlKXtsZXQgdD1TdHJpbmcoZT8/XCJcIikucmVwbGFjZSgvW15hLXowLTldL2dpLFwiXCIpLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJjb3VudHJ5XCI9PT10fHxcImNvdW50cnlyZWdpb25cIj09PXR9bGV0IE09bmV3IE1hcCxOPW5ldyBNYXA7Zm9yKGxldCBlIG9mIGMuQ09VTlRSWV9PUFRJT05TKXtsZXQgdD1TdHJpbmcoZS5jb2RlPz9cIlwiKS50cmltKCkudG9VcHBlckNhc2UoKSxyPVN0cmluZyhlLmxhYmVsPz9lLnZhbHVlPz9cIlwiKS50cmltKCk7aWYoIXR8fCFyKWNvbnRpbnVlO2xldCBuPXtjb2RlOnQsbGFiZWw6cn07Zm9yKGxldCBvIG9mKE0uc2V0KHQsbiksW3IsZS52YWx1ZV0pKXtsZXQgZT1SKFN0cmluZyhvPz9cIlwiKSk7IWV8fE4uaGFzKGUpfHxOLnNldChlLG4pfX1sZXQgJD17W1IoXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIildOlwiVVNcIixbUihcIlVTXCIpXTpcIlVTXCIsW1IoXCJVU0FcIildOlwiVVNcIixbUihcIkNhbmFkYVwiKV06XCJDQVwiLFtSKFwiQ0FcIildOlwiQ0FcIixbUihcIkNBTlwiKV06XCJDQVwiLFtSKFwiVW5pdGVkIEtpbmdkb21cIildOlwiR0JcIixbUihcIlVLXCIpXTpcIkdCXCIsW1IoXCJHcmVhdCBCcml0YWluXCIpXTpcIkdCXCJ9O2Z1bmN0aW9uIEIoZSl7bGV0IHQ9KGV8fFwiXCIpLnRyaW0oKTtpZighdClyZXR1cm5cIlwiO2xldCByPU0uZ2V0KHQudG9VcHBlckNhc2UoKSk7aWYocilyZXR1cm4gci5jb2RlO2xldCBuPVIodCksbz0kW25dO3JldHVybiBvfHwoTi5nZXQobik/LmNvZGU/P1wiXCIpfWZ1bmN0aW9uIHEoZSl7bGV0e2hhbmRsZXJzOnQscHJvZ3Jlc3NUcmFja2VyOnIsY3JlYXRlT3BlcmF0aW9uSGFuZGxlcjpufT1lLG89e30saT1hc3luYyhlLHQsbixvKT0+e24mJigwLGwudXBkYXRlQ3VycmVudEZpZWxkKShlLmxhYmVsKTt0cnl7bGV0IGk9YXdhaXQgKDAsbC53aXRoU2tpcCkobyk7biYmKGUubGFiZWw9PT1wLkdPT0dMRV9TS0lMTFNfTEFCRUw/VChpKT9yLnVwZGF0ZUZpZWxkSXRlbVByb2dyZXNzKGUubGFiZWwsaSk6ci51cGRhdGVNaXNzZWRQcm9ncmVzcyhlLmxhYmVsKTpUKGkpP3IudXBkYXRlRmllbGRJdGVtUHJvZ3Jlc3MoZS5sYWJlbCxpKTp4KHQpfHwhMT09PWk/ci51cGRhdGVNaXNzZWRQcm9ncmVzcyhlLmxhYmVsKTpyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKGUubGFiZWwpKX1jYXRjaCh0KXtpZih0IGluc3RhbmNlb2YgbC5DYW5jZWxsZWRFcnJvcil0aHJvdyB0O2lmKHQgaW5zdGFuY2VvZiBsLlNraXBwZWRFcnJvcil7aWYobil7ci51cGRhdGVNaXNzZWRQcm9ncmVzcyhlLmxhYmVsKTtyZXR1cm59dGhyb3cgdH1uJiZyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKGUubGFiZWwpfX0sYT10W3UuRklFTERfVFlQRS5URVhUXSxzPVwiZnVuY3Rpb25cIj09dHlwZW9mIGE/YTphPy5oYW5kbGVyLGM9XCJvYmplY3RcIj09dHlwZW9mIGEmJmEub3B0aW9ucz8uZXhwZWN0QXJyYXkhPT0hMTtvW3UuRklFTERfVFlQRS5URVhUXT1hc3luYyhlLHQscj0hMCk9PntsZXQgbz1FKGUubGFiZWwsdCk7aWYoby5mb3VuZCl7bGV0IG49XCJzdGF0ZVwiPT09U3RyaW5nKGU/LmxhYmVsPz9cIlwiKS50cmltKCkudG9Mb3dlckNhc2UoKSYmXCJcIiE9PUIoU3RyaW5nKHQ/LltcIkNvdW50cnkgLyBSZWdpb25cIl0/P3Q/LkNvdW50cnk/P3Q/LmNvdW50cnk/P1wiXCIpLnRyaW0oKSksYT1uP3suLi5lLF9fcHJlZmVyU3RhdGVTZWxlY3Q6ITB9OmUsbD1lLmxhYmVsPT09cC5HT09HTEVfU0tJTExTX0xBQkVMJiZBcnJheS5pc0FycmF5KG8udmFsdWUpP28udmFsdWU6Yz9BcnJheS5pc0FycmF5KG8udmFsdWUpP28udmFsdWU6W28udmFsdWVdOkFycmF5LmlzQXJyYXkoby52YWx1ZSk/by52YWx1ZVswXTpvLnZhbHVlLHU9TChlLmxhYmVsLGwpO2F3YWl0IGkoZSx1LHIsYXN5bmMoKT0+cyhhLHUpKTtyZXR1cm59YXdhaXQgbihzLHtleHBlY3RBcnJheTpjfSkoZSx0LHIpfTtsZXQgZD10W3UuRklFTERfVFlQRS5TRUxFQ1RdO2lmKG9bdS5GSUVMRF9UWVBFLlNFTEVDVF09YXN5bmMoZSx0LHI9ITApPT57bGV0IG89RShlLmxhYmVsLHQpO2lmKG8uZm91bmQpe2xldCB0PUFycmF5LmlzQXJyYXkoby52YWx1ZSk/by52YWx1ZVswXTpvLnZhbHVlO2F3YWl0IGkoZSx0LHIsYXN5bmMoKT0+ZChlLHQpKTtyZXR1cm59YXdhaXQgbihkLHtleHBlY3RBcnJheTohMH0pKGUsdCxyKX0sYigpKXtsZXQgZT10W3UuRklFTERfVFlQRS5DSEVDS0JPWF07b1t1LkZJRUxEX1RZUEUuQ0hFQ0tCT1hdPWFzeW5jKHQscixvPSEwKT0+e2xldCBhPUUodC5sYWJlbCxyKTtpZihhLmZvdW5kKXtsZXQgcj1BcnJheS5pc0FycmF5KGEudmFsdWUpP2EudmFsdWU6W2EudmFsdWVdO2F3YWl0IGkodCxyLG8sYXN5bmMoKT0+ZSh0LHIpKTtyZXR1cm59YXdhaXQgbihlLHtleHBlY3RBcnJheTohMH0pKHQscixvKX07bGV0IHI9dFt1LkZJRUxEX1RZUEUuUkFESU9HUk9VUF07b1t1LkZJRUxEX1RZUEUuUkFESU9HUk9VUF09YXN5bmMoZSx0LG89ITApPT57bGV0IGE9RShlLmxhYmVsLHQpO2lmKGEuZm91bmQpe2xldCB0PUFycmF5LmlzQXJyYXkoYS52YWx1ZSk/YS52YWx1ZTpbYS52YWx1ZV07YXdhaXQgaShlLHQsbyxhc3luYygpPT5yKGUsdCkpO3JldHVybn1hd2FpdCBuKHIse2V4cGVjdEFycmF5OiEwfSkoZSx0LG8pfX1pZighYigpKXtsZXQgZT10W3UuRklFTERfVFlQRS5SQURJT0dST1VQXTtvW3UuRklFTERfVFlQRS5SQURJT0dST1VQXT1hc3luYyh0LHIsbz0hMCk9PntsZXQgYT1FKHQubGFiZWwscik7aWYoYS5mb3VuZCl7bGV0IHI9QXJyYXkuaXNBcnJheShhLnZhbHVlKT9hLnZhbHVlOlthLnZhbHVlXTthd2FpdCBpKHQscixvLGFzeW5jKCk9PmUodCxyKSk7cmV0dXJufWF3YWl0IG4oZSx7ZXhwZWN0QXJyYXk6ITB9KSh0LHIsbyl9fXJldHVybiBvfWFzeW5jIGZ1bmN0aW9uIFUoZSl7bGV0e2VsZW1lbnRzOnQsdG9rZW46cixnZXRTaXRlTmFtZTpuLGZyb21BZ2VudDppLHJlc3VtZUlkOmwsdGFpbG9ySWQ6c309ZSx1PWF3YWl0ICgwLG8uc2VuZFRvQmFja2dyb3VuZCkoe25hbWU6XCJnZXRHcHRSZXN1bHRzXCIsYm9keTp7cGFyYW1zOntlbGVtZW50czp0LHRva2VuOnIsdXJsOigwLGQucmVtb3ZlRW5kU3RyaW5ncykoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3cubG9jYXRpb24uaHJlZjpcIlwiKSxwYXJzZXI6XCJpbnRlcm5hbFwiLHNvdXJjZTpuLGZyb21BZ2VudDohIWksLi4ubCYme3Jlc3VtZUlkOmx9LC4uLnMmJnt0YWlsb3JJZDpzfX19fSk7aWYodT8uZGF0YT8uZGF0YT09PWYuQ1VTVE9NX0VSUk9SX0NPREVTLlJFU1VNRV9NSVNTSU5HX0tFWSl0aHJvdyBuZXcgYS5SZXN1bWVNaXNzaW5nQ29kZUVycm9yKGYuQ1VTVE9NX0VSUk9SX0NPREVTLlJFU1VNRV9NSVNTSU5HX0tFWSk7aWYodT8uZGF0YT8uSFRUUF9TVEFUVVMpdGhyb3cgbmV3IGEuSFRUUEVycm9yKHU/LmRhdGE/LkhUVFBfU1RBVFVTKTtyZXR1cm4gdX1mdW5jdGlvbiBIKGUpe2xldCB0PWUudHJpbSgpO3JldHVybiEhdCYmISEoL15cXGQrJC8udGVzdCh0KXx8L15cXGR7NX0tXFxkezR9JC8udGVzdCh0KXx8L15bQS1aYS16XVxcZFtBLVphLXpdXFxzP1xcZFtBLVphLXpdXFxkJC8udGVzdCh0KXx8L15bQS1aYS16XXsxLDJ9XFxkW0EtWmEtelxcZF0/XFxzP1xcZFtBLVphLXpdezJ9JC8udGVzdCh0KSl9ZnVuY3Rpb24gWShlLHQpe2ZvcihsZXQgciBvZiB0KXtsZXQgdD1lPy5bcl07aWYobnVsbCE9dCl7aWYoQXJyYXkuaXNBcnJheSh0KSl7bGV0IGU9dC5maW5kKGU9PlwiXCIhPT1TdHJpbmcoZT8/XCJcIikudHJpbSgpKTtpZihudWxsIT1lKXJldHVybiBlO2NvbnRpbnVlfWlmKFwiXCIhPT1TdHJpbmcodCkudHJpbSgpKXJldHVybiB0fX1yZXR1cm5cIlwifWxldCB6PW5ldyBTZXQoW1wiYWxcIixcImFrXCIsXCJhelwiLFwiYXJcIixcImNhXCIsXCJjb1wiLFwiY3RcIixcImRlXCIsXCJmbFwiLFwiZ2FcIixcImhpXCIsXCJpZFwiLFwiaWxcIixcImluXCIsXCJpYVwiLFwia3NcIixcImt5XCIsXCJsYVwiLFwibWVcIixcIm1kXCIsXCJtYVwiLFwibWlcIixcIm1uXCIsXCJtc1wiLFwibW9cIixcIm10XCIsXCJuZVwiLFwibnZcIixcIm5oXCIsXCJualwiLFwibm1cIixcIm55XCIsXCJuY1wiLFwibmRcIixcIm9oXCIsXCJva1wiLFwib3JcIixcInBhXCIsXCJyaVwiLFwic2NcIixcInNkXCIsXCJ0blwiLFwidHhcIixcInV0XCIsXCJ2dFwiLFwidmFcIixcIndhXCIsXCJ3dlwiLFwid2lcIixcInd5XCIsXCJkY1wiXSksVj1uZXcgU2V0KFtcImFiXCIsXCJiY1wiLFwibWJcIixcIm5iXCIsXCJubFwiLFwibnNcIixcIm9uXCIsXCJwZVwiLFwicWNcIixcInNrXCIsXCJudFwiLFwibnVcIixcInl0XCJdKSxXPXthbGFiYW1hOlwiYWxcIixhbGFza2E6XCJha1wiLGFyaXpvbmE6XCJhelwiLGFya2Fuc2FzOlwiYXJcIixjYWxpZm9ybmlhOlwiY2FcIixjb2xvcmFkbzpcImNvXCIsY29ubmVjdGljdXQ6XCJjdFwiLGRlbGF3YXJlOlwiZGVcIixmbG9yaWRhOlwiZmxcIixnZW9yZ2lhOlwiZ2FcIixoYXdhaWk6XCJoaVwiLGlkYWhvOlwiaWRcIixpbGxpbm9pczpcImlsXCIsaW5kaWFuYTpcImluXCIsaW93YTpcImlhXCIsa2Fuc2FzOlwia3NcIixrZW50dWNreTpcImt5XCIsbG91aXNpYW5hOlwibGFcIixtYWluZTpcIm1lXCIsbWFyeWxhbmQ6XCJtZFwiLG1hc3NhY2h1c2V0dHM6XCJtYVwiLG1pY2hpZ2FuOlwibWlcIixtaW5uZXNvdGE6XCJtblwiLG1pc3Npc3NpcHBpOlwibXNcIixtaXNzb3VyaTpcIm1vXCIsbW9udGFuYTpcIm10XCIsbmVicmFza2E6XCJuZVwiLG5ldmFkYTpcIm52XCIsXCJuZXcgaGFtcHNoaXJlXCI6XCJuaFwiLFwibmV3IGplcnNleVwiOlwibmpcIixcIm5ldyBtZXhpY29cIjpcIm5tXCIsXCJuZXcgeW9ya1wiOlwibnlcIixcIm5vcnRoIGNhcm9saW5hXCI6XCJuY1wiLFwibm9ydGggZGFrb3RhXCI6XCJuZFwiLG9oaW86XCJvaFwiLG9rbGFob21hOlwib2tcIixvcmVnb246XCJvclwiLHBlbm5zeWx2YW5pYTpcInBhXCIsXCJyaG9kZSBpc2xhbmRcIjpcInJpXCIsXCJzb3V0aCBjYXJvbGluYVwiOlwic2NcIixcInNvdXRoIGRha290YVwiOlwic2RcIix0ZW5uZXNzZWU6XCJ0blwiLHRleGFzOlwidHhcIix1dGFoOlwidXRcIix2ZXJtb250OlwidnRcIix2aXJnaW5pYTpcInZhXCIsd2FzaGluZ3RvbjpcIndhXCIsXCJ3ZXN0IHZpcmdpbmlhXCI6XCJ3dlwiLHdpc2NvbnNpbjpcIndpXCIsd3lvbWluZzpcInd5XCIsXCJkaXN0cmljdCBvZiBjb2x1bWJpYVwiOlwiZGNcIixhbGJlcnRhOlwiYWJcIixcImJyaXRpc2ggY29sdW1iaWFcIjpcImJjXCIsbWFuaXRvYmE6XCJtYlwiLFwibmV3IGJydW5zd2lja1wiOlwibmJcIixcIm5ld2ZvdW5kbGFuZCBhbmQgbGFicmFkb3JcIjpcIm5sXCIsXCJub3ZhIHNjb3RpYVwiOlwibnNcIixvbnRhcmlvOlwib25cIixcInByaW5jZSBlZHdhcmQgaXNsYW5kXCI6XCJwZVwiLHF1ZWJlYzpcInFjXCIsc2Fza2F0Y2hld2FuOlwic2tcIixcIm5vcnRod2VzdCB0ZXJyaXRvcmllc1wiOlwibnRcIixudW5hdnV0OlwibnVcIix5dWtvbjpcInl0XCJ9O2Z1bmN0aW9uIEcoZSl7bGV0IHQ9ZS50cmltKCkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpO2lmKCF0KXJldHVyblwiXCI7bGV0IHI9Mj09PXQubGVuZ3RoP3Q6V1t0XT8/XCJcIjtyZXR1cm4gcj96LmhhcyhyKT9cIlVuaXRlZCBTdGF0ZXNcIjpWLmhhcyhyKT9cIkNhbmFkYVwiOlwiXCI6XCJcIn1mdW5jdGlvbiBLKGUpe2lmKCFlfHwhZS50cmltKCkpcmV0dXJuXCJcIjtsZXQgdD1lLnNwbGl0KFwiLFwiKS5tYXAoZT0+ZS50cmltKCkpLmZpbHRlcihCb29sZWFuKTtpZih0Lmxlbmd0aD49Mil7bGV0IGU9dFt0Lmxlbmd0aC0xXS50b0xvd2VyQ2FzZSgpLHI9XCJ1c2FcIj09PWV8fFwidXNcIj09PWV8fFwidW5pdGVkIHN0YXRlc1wiPT09ZSxuPVwiY2FuYWRhXCI9PT1lfHxcImNhXCI9PT1lO2lmKHJ8fG4pe2xldCBlPXQubGVuZ3RoPj0zP3RbdC5sZW5ndGgtMl06dFswXSxyPWUudHJpbSgpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLFwiIFwiKTtpZighcilyZXR1cm5cIlwiO2xldCBuPTI9PT1yLmxlbmd0aD9yOldbcl0/P1wiXCI7aWYobiYmKHouaGFzKG4pfHxWLmhhcyhuKSkpcmV0dXJuIGUudHJpbSgpfX1yZXR1cm5cIlwifWZ1bmN0aW9uIFgoZSl7aWYoIWV8fCFlLnRyaW0oKSlyZXR1cm4gZTtsZXQgdD1lLnRyaW0oKSxyPU0uZ2V0KHQudG9VcHBlckNhc2UoKSk7aWYocilyZXR1cm4gci5sYWJlbDtsZXQgbj1SKHQpLG89JFtuXTtpZihvKXJldHVybiBNLmdldChvKT8ubGFiZWw/P3Q7bGV0IGk9Ti5nZXQobik7cmV0dXJuIGk/aS5sYWJlbDp0fWZ1bmN0aW9uIEooZSl7bGV0IHQ9U3RyaW5nKFkoZSxbXCJDb3VudHJ5IC8gUmVnaW9uXCIsXCJDb3VudHJ5XCIsXCJjb3VudHJ5XCIsXCJDb3VudHJ5UmVnaW9uXCIsXCJjb3VudHJ5X3JlZ2lvblwiXSk/P1wiXCIpLnRyaW0oKSxyPS9eXFxkKyQvLnRlc3QodCk/XCJcIjp0P1godCk6XCJcIjtyZXR1cm57XCJTY2hvb2wgbmFtZVwiOlN0cmluZyhZKGUsW1wiU2Nob29sIG5hbWVcIixcIlNjaG9vbFwiLFwic2Nob29sXCIsXCJzY2hvb2xOYW1lXCJdKT8/XCJcIikudHJpbSgpLERlZ3JlZTpTdHJpbmcoWShlLFtcIkRlZ3JlZVwiLFwiZGVncmVlXCJdKT8/XCJcIikudHJpbSgpLFwiRGVncmVlIFN0YXR1c1wiOlN0cmluZyhZKGUsW1wiRGVncmVlIFN0YXR1c1wiLFwiRGVncmVlU3RhdHVzXCIsXCJkZWdyZWVTdGF0dXNcIixcInN0YXR1c1wiLFwiU3RhdHVzXCJdKT8/XCJcIikudHJpbSgpLFwiTWFqb3IgLyBhcmVhIG9mIHN0dWR5XCI6U3RyaW5nKFkoZSxbXCJNYWpvciAvIGFyZWEgb2Ygc3R1ZHlcIixcIk1ham9yXCIsXCJtYWpvclwiLFwiZmllbGRPZlN0dWR5XCJdKT8/XCJcIikudHJpbSgpLFwiQ291bnRyeSAvIFJlZ2lvblwiOnJ9fWZ1bmN0aW9uIFEoZSl7bGV0IHQ9ZT8uRW1haWw7aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gTWF0aC5tYXgoMCx0Lmxlbmd0aC0xKTtsZXQgcj0wO2ZvcihsZXQgdCBvZlsxLDIsMyw0LDUsNiw3LDgsOSwxMF0pXCJcIiE9PShlPy5bYEFkZGl0aW9uYWwgZW1haWwgYWRkcmVzcyAke3R9YF0/P1wiXCIpLnRvU3RyaW5nKCkudHJpbSgpJiZyKys7cmV0dXJuIHJ9ZnVuY3Rpb24gWihlLHQpe2xldCByPUFycmF5LmlzQXJyYXkoZS5FbWFpbCk/ZS5FbWFpbC5tYXAoZT0+U3RyaW5nKGU/P1wiXCIpLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pOltdLG49U3RyaW5nKGVbXCJFbWFpbCBhZGRyZXNzXCJdPz9cIlwiKS50cmltKCk7biYmIXIubGVuZ3RoJiZyLnB1c2gobik7bGV0IG89bmV3IFNldChyLm1hcChlPT5lLnRvTG93ZXJDYXNlKCkpKTtmb3IobGV0IHQ9MTt0PD0yMDt0Kyspe2xldCBuPVN0cmluZyhlW2BBZGRpdGlvbmFsIGVtYWlsIGFkZHJlc3MgJHt0fWBdPz9cIlwiKS50cmltKCk7biYmIW8uaGFzKG4udG9Mb3dlckNhc2UoKSkmJihyLnB1c2gobiksby5hZGQobi50b0xvd2VyQ2FzZSgpKSl9bGV0IGk9dC50cmltKCkudG9Mb3dlckNhc2UoKSxhPW4udG9Mb3dlckNhc2UoKSxsPVtdLHM9bmV3IFNldDtmb3IobGV0IGUgb2Ygcil7aWYodCYmZS50b0xvd2VyQ2FzZSgpPT09aXx8IXQmJm4mJmUudG9Mb3dlckNhc2UoKT09PWEpY29udGludWU7bGV0IHI9ZS50b0xvd2VyQ2FzZSgpO3MuaGFzKHIpfHwocy5hZGQociksbC5wdXNoKGUpKX1pZigwPT09bC5sZW5ndGgpcmV0dXJue3JlZ3VsYXI6ZSxhZGRpdGlvbmFsRW1haWxDb3VudDpRKGUpfTtsZXQgdT10fHxufHxcIlwiLGM9W3UsLi4ubF0sZD1NYXRoLm1heCgwLGMubGVuZ3RoLTEpLGY9ZT0+e2xldCB0PWUubWF0Y2goL15BZGRpdGlvbmFsIGVtYWlsIGFkZHJlc3MgKFxcZCspJC8pO3JldHVybiF0fHxwYXJzZUludCh0WzFdLDEwKTw9ZH0scD17fTtPYmplY3Qua2V5cyhlKS5maWx0ZXIoZikuZm9yRWFjaCh0PT57cFt0XT1lW3RdfSkscC5FbWFpbD1jLmxlbmd0aD9jOmUuRW1haWwscFtcIkVtYWlsIGFkZHJlc3NcIl09Y1swXT8/ZVtcIkVtYWlsIGFkZHJlc3NcIl0/P1wiXCI7Zm9yKGxldCBlPTE7ZTw9ZDtlKyspcFtgQWRkaXRpb25hbCBlbWFpbCBhZGRyZXNzICR7ZX1gXT1jW2VdO3JldHVybntyZWd1bGFyOnAsYWRkaXRpb25hbEVtYWlsQ291bnQ6ZH19bGV0IGVlPVtcIkphbnVhcnlcIixcIkZlYnJ1YXJ5XCIsXCJNYXJjaFwiLFwiQXByaWxcIixcIk1heVwiLFwiSnVuZVwiLFwiSnVseVwiLFwiQXVndXN0XCIsXCJTZXB0ZW1iZXJcIixcIk9jdG9iZXJcIixcIk5vdmVtYmVyXCIsXCJEZWNlbWJlclwiXTtmdW5jdGlvbiBldChlKXtsZXQgdD1TdHJpbmcoZT8/XCJcIikudHJpbSgpO2lmKCF0KXJldHVybiBudWxsO2xldCByPXQubWF0Y2goL14oXFxkezR9KS0oXFxkezEsMn0pKD86LVxcZHsxLDJ9KT8vKTtpZighcilyZXR1cm4gbnVsbDtsZXQgbj1yWzFdLG89cGFyc2VJbnQoclsyXSwxMCk7aWYobzwxfHxvPjEyKXJldHVybiBudWxsO2xldCBpPWVlW28tMV0/P1N0cmluZyhvKTtyZXR1cm57bW9udGg6aSx5ZWFyOm59fWZ1bmN0aW9uIGVyKGUpe2xldCB0PVN0cmluZyhlPz9cIlwiKS50cmltKCk7aWYoIXQpcmV0dXJuXCJcIjtpZihlZS5zb21lKGU9PmUudG9Mb3dlckNhc2UoKT09PXQudG9Mb3dlckNhc2UoKSkpcmV0dXJuIHQ7bGV0IHI9cGFyc2VJbnQodCwxMCk7cmV0dXJuIGlzTmFOKHIpP3Q6MD09PXI/XCJcIjpyPj0xJiZyPD0xMj9lZVtyLTFdOnR9ZnVuY3Rpb24gZW4oZSl7bGV0IHQ9WShlLFtcIlNjaG9vbFwiLFwic2Nob29sXCIsXCJzY2hvb2xOYW1lXCIsXCJTY2hvb2wgTmFtZVwiLFwiSW5zdGl0dXRpb25cIixcIkluc3RpdHV0aW9uIE5hbWVcIixcIlVuaXZlcnNpdHlcIixcIkNvbGxlZ2VcIl0pLHI9WShlLFtcIkRlZ3JlZVwiLFwiZGVncmVlXCJdKSxuPVkoZSxbXCJNYWpvclwiLFwibWFqb3JcIixcIk1ham9yIC8gYXJlYSBvZiBzdHVkeVwiLFwiRmllbGQgT2YgU3R1ZHlcIixcImZpZWxkT2ZTdHVkeVwiLFwiU3R1ZHlcIixcInN0dWR5XCJdKSxvPVkoZSxbXCJDb3VudHJ5IC8gUmVnaW9uXCIsXCJDb3VudHJ5XCIsXCJjb3VudHJ5XCIsXCJDb3VudHJ5UmVnaW9uXCIsXCJjb3VudHJ5X3JlZ2lvblwiXSksaT1TdHJpbmcobz8/XCJcIikudHJpbSgpLGE9WShlLFtcIlN0YXRlXCIsXCJzdGF0ZVwiLFwiU3RhdGUgLyBwcm92aW5jZVwiXSksbD1TdHJpbmcoYT8/XCJcIikudHJpbSgpO2UuU2Nob29sPVN0cmluZyh0Pz9cIlwiKS50cmltKCksZS5EZWdyZWU9U3RyaW5nKHI/P1wiXCIpLnRyaW0oKSxlLk1ham9yPVN0cmluZyhuPz9cIlwiKS50cmltKCk7bGV0IHM9L15cXGQrJC8udGVzdChpKT9cIlwiOmk7aWYoIXMmJmwpe2xldCBlPUcobCk7ZSYmKHM9ZSl9ZVtcIkNvdW50cnkgLyBSZWdpb25cIl09cz9YKHMpOlwiXCJ9ZnVuY3Rpb24gZW8oZSl7bGV0IHQ9WShlLFtcIkNvbXBhbnlcIixcImNvbXBhbnlcIixcImNvbXBhbnlOYW1lXCIsXCJFbXBsb3llclwiLFwiRW1wbG95ZXIgbmFtZVwiXSkscj1ZKGUsW1wiUG9zaXRpb25cIixcInBvc2l0aW9uXCIsXCJ0aXRsZVwiLFwiVGl0bGVcIixcIkpvYiB0aXRsZVwiXSk7ZS5Db21wYW55PVN0cmluZyh0Pz9cIlwiKS50cmltKCksZS5Qb3NpdGlvbj1TdHJpbmcocj8/XCJcIikudHJpbSgpLGVbXCJFbXBsb3llciBuYW1lXCJdPWUuQ29tcGFueSxlW1wiSm9iIHRpdGxlXCJdPWUuUG9zaXRpb247bGV0IG49WShlLFtcIlN0YXJ0XCIsXCJzdGFydFwiLFwic3RhcnREYXRlXCJdKSxvPWV0KFN0cmluZyhuPz9cIlwiKS50cmltKCkpLGk9WShlLFtcIlN0YXJ0IERhdGUgLSBNb250aFwiLFwiU3RhcnQgTW9udGhcIixcIlN0YXJ0RGF0ZU1vbnRoXCIsXCJNb250aFwiLFwibW9udGhcIixcInN0YXJ0TW9udGhcIl0pLGE9WShlLFtcIlN0YXJ0IERhdGUgLSBZZWFyXCIsXCJTdGFydCBZZWFyXCIsXCJTdGFydERhdGVZZWFyXCIsXCJZZWFyXCIsXCJ5ZWFyXCIsXCJzdGFydFllYXJcIl0pO28/KGVbXCJTdGFydCBNb250aFwiXT1vLm1vbnRoLGVbXCJTdGFydCBZZWFyXCJdPW8ueWVhcik6KGVbXCJTdGFydCBNb250aFwiXT1lcihpKSxlW1wiU3RhcnQgWWVhclwiXT1TdHJpbmcoZVtcIlN0YXJ0IFllYXJcIl0/P2E/P1wiXCIpLnRyaW0oKSk7bGV0IGw9ZS5pc0N1cnJlbnQ/P2UuaXNfY3VycmVudCxzPW51bGwhPWwmJlwiXCIhPT1TdHJpbmcobCkudHJpbSgpLHU9ITA9PT1sfHxcInllc1wiPT09U3RyaW5nKGw/P1wiXCIpLnRvTG93ZXJDYXNlKCl8fFwidHJ1ZVwiPT09U3RyaW5nKGw/P1wiXCIpLnRvTG93ZXJDYXNlKCksYz1ZKGUsW1wiVGhpcyBpcyB5b3VyIGN1cnJlbnQgam9iXCIsXCJjdXJyZW50Sm9iXCIsXCJjdXJyZW50X2pvYlwiXSksZD0hMD09PWN8fFwieWVzXCI9PT1TdHJpbmcoYz8/XCJcIikudG9Mb3dlckNhc2UoKXx8XCJ0cnVlXCI9PT1TdHJpbmcoYz8/XCJcIikudG9Mb3dlckNhc2UoKSxmPVwiMFwiPT09U3RyaW5nKGM/P1wiXCIpfHxcImZhbHNlXCI9PT1TdHJpbmcoYz8/XCJcIikudG9Mb3dlckNhc2UoKSxwPXM/dTohZiYmZDtpZihlW1wiVGhpcyBpcyB5b3VyIGN1cnJlbnQgam9iXCJdPXAsZS5pc0N1cnJlbnQ9cCxlLmlzX2N1cnJlbnQ9cCxlLmN1cnJlbnRKb2I9cCxlLmN1cnJlbnRfam9iPXAscCllW1wiRW5kIE1vbnRoXCJdPVwiXCIsZVtcIkVuZCBZZWFyXCJdPVwiXCI7ZWxzZXtsZXQgdD1ZKGUsW1wiRW5kXCIsXCJlbmRcIixcImVuZERhdGVcIl0pLHI9ZXQoU3RyaW5nKHQ/P1wiXCIpLnRyaW0oKSksbj1ZKGUsW1wiRW5kIERhdGUgLSBNb250aFwiLFwiRW5kIE1vbnRoXCIsXCJFbmREYXRlTW9udGhcIixcImVuZE1vbnRoXCJdKSxvPVkoZSxbXCJFbmQgRGF0ZSAtIFllYXJcIixcIkVuZCBZZWFyXCIsXCJFbmREYXRlWWVhclwiLFwiZW5kWWVhclwiXSk7cj8oZVtcIkVuZCBNb250aFwiXT1yLm1vbnRoLGVbXCJFbmQgWWVhclwiXT1yLnllYXIpOihlW1wiRW5kIE1vbnRoXCJdPWVyKG4pLGVbXCJFbmQgWWVhclwiXT1TdHJpbmcobz8/XCJcIikudHJpbSgpKX1sZXQgbT1ZKGUsW1wiQ291bnRyeSAvIFJlZ2lvblwiLFwiQ291bnRyeVwiLFwiY291bnRyeVwiLFwiQ291bnRyeVJlZ2lvblwiLFwiY291bnRyeV9yZWdpb25cIl0pLGg9WShlLFtcIkNpdHlcIixcImNpdHlcIl0pLGc9WShlLFtcIlN0YXRlXCIsXCJzdGF0ZVwiLFwiU3RhdGUgLyBwcm92aW5jZVwiXSksYj1TdHJpbmcobT8/XCJcIikudHJpbSgpLHk9U3RyaW5nKGc/P1wiXCIpLnRyaW0oKSx2PS9eXFxkKyQvLnRlc3QoYik/XCJcIjpiO2lmKCF2JiZ5KXtsZXQgZT1HKHkpO2UmJih2PWUpfWVbXCJDb3VudHJ5IC8gUmVnaW9uXCJdPXY/WCh2KTpcIlwiLGUuQ2l0eT1TdHJpbmcoaD8/XCJcIikudHJpbSgpLGUuU3RhdGU9eSxlW1wiU3RhdGUgLyBwcm92aW5jZVwiXT15fWZ1bmN0aW9uIGVpKGUpe0FycmF5LmlzQXJyYXkoZS5lZHVjYXRpb24pJiZlLmVkdWNhdGlvbi5mb3JFYWNoKGU9PntlJiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZW4oZSl9KSxBcnJheS5pc0FycmF5KGUud29ya0V4cGVyaWVuY2UpJiZlLndvcmtFeHBlcmllbmNlLmZvckVhY2goZT0+e2UmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlbyhlKX0pfWZ1bmN0aW9uIGVhKGUsdCxyKXtpZighZXx8IWUudHJpbSgpKXJldHVybiExO2xldCBuPWUudHJpbSgpLG89W3Qscl0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpLGk9W3IsdF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpO3JldHVybiBuPT09dHx8bj09PXJ8fG49PT1vfHxuPT09aX1mdW5jdGlvbiBlbChlLHQscil7bGV0IG49W1wiU2Nob29sXCIsXCJzY2hvb2xcIixcInNjaG9vbE5hbWVcIixcIlNjaG9vbCBOYW1lXCIsXCJJbnN0aXR1dGlvblwiLFwiSW5zdGl0dXRpb24gTmFtZVwiLFwiVW5pdmVyc2l0eVwiLFwiQ29sbGVnZVwiXTtmb3IobGV0IG8gb2Ygbil7bGV0IG49ZT8uW29dO2lmKG51bGw9PW4pY29udGludWU7bGV0IGk9QXJyYXkuaXNBcnJheShuKT9uWzBdOm4sYT1TdHJpbmcoaT8/XCJcIikudHJpbSgpO2lmKGEmJiFlYShhLHQscikpcmV0dXJuIGF9cmV0dXJuXCJcIn1mdW5jdGlvbiBlcyhlLHQscil7bGV0IG49W1wiQ29tcGFueVwiLFwiY29tcGFueVwiLFwiRW1wbG95ZXJcIixcIkVtcGxveWVyIG5hbWVcIixcImNvbXBhbnlOYW1lXCJdO2ZvcihsZXQgbyBvZiBuKXtsZXQgbj1lPy5bb107aWYobnVsbD09biljb250aW51ZTtsZXQgaT1BcnJheS5pc0FycmF5KG4pP25bMF06bixhPVN0cmluZyhpPz9cIlwiKS50cmltKCk7aWYoYSYmIWVhKGEsdCxyKSlyZXR1cm4gYX1yZXR1cm5cIlwifWxldCBldT1bXCJHcmFkdWF0ZWRcIixcIkluY29tcGxldGVcIixcIk5vdyBhdHRlbmRpbmdcIl0sZWM9W1wiYmFjaGVsb3JcIixcIm1hc3RlclwiLFwicGhkXCIsXCJkb2N0b3JhdGVcIixcImFzc29jaWF0ZVwiLFwiYi5zLlwiLFwibS5zLlwiLFwiYi5hLlwiLFwibS5hLlwiLFwiYmFjaGVsb3Inc1wiLFwibWFzdGVyJ3NcIixcInBoLmQuXCIsXCJtYmFcIixcImJzXCIsXCJtc1wiLFwiYmFcIixcIm1hXCJdO2Z1bmN0aW9uIGVkKGUpe3JldHVybiBudWxsPT1lP1wiXCI6QXJyYXkuaXNBcnJheShlKT9TdHJpbmcoZVswXT8/XCJcIikudHJpbSgpOlN0cmluZyhlKS50cmltKCl9ZnVuY3Rpb24gZWYoZSl7aWYoIWV8fCFlLnRyaW0oKSlyZXR1cm4hMTtsZXQgdD1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpO3JldHVybiBlYy5zb21lKGU9PnQ9PT1lfHx0LnN0YXJ0c1dpdGgoZStcIiBcIil8fHQuaW5jbHVkZXMoXCIgXCIrZSkpfWZ1bmN0aW9uIGVwKGUsdCl7bGV0IHI9ZWQoZVtcIkRlZ3JlZSBTdGF0dXNcIl0pLG49ZXUuc29tZShlPT5lLnRvTG93ZXJDYXNlKCk9PT1yLnRvTG93ZXJDYXNlKCkpO2lmKCFuKXtpZihBcnJheS5pc0FycmF5KHQuZWR1Y2F0aW9uKSYmdC5lZHVjYXRpb24ubGVuZ3RoPjApe2xldCByPXQuZWR1Y2F0aW9uWzBdLG49ZWQocj8uRGVncmVlU3RhdHVzPz9yPy5bXCJEZWdyZWUgU3RhdHVzXCJdPz9yPy5zdGF0dXM/P3I/LlN0YXR1cyk7aWYoZXUuc29tZShlPT5lLnRvTG93ZXJDYXNlKCk9PT1uLnRvTG93ZXJDYXNlKCkpKXtlW1wiRGVncmVlIFN0YXR1c1wiXT1uO3JldHVybn19aWYociYmZWYocikpe2xldCB0PWVkKGUuRGVncmVlKTt0fHwoZS5EZWdyZWU9ci50cmltKCkpLGVbXCJEZWdyZWUgU3RhdHVzXCJdPVwiXCI7cmV0dXJufWVbXCJEZWdyZWUgU3RhdHVzXCJdPVwiXCJ9fWZ1bmN0aW9uIGVtKGUsdCl7bGV0IHI9ZT8ucmVndWxhcjtpZighcnx8XCJvYmplY3RcIiE9dHlwZW9mIHIpcmV0dXJuO2xldCBuPVN0cmluZyhlZChyW1wiRmlyc3QgbmFtZVwiXSkpLnRyaW0oKSxvPVN0cmluZyhlZChyW1wiTGFzdCBuYW1lXCJdKSkudHJpbSgpLGk9WShyLFtcIk1pZGRsZSBuYW1lXCIsXCJNaWRkbGUgTmFtZVwiLFwiTWlkZGxlXCIsXCJNaWRkbGUgaW5pdGlhbFwiLFwibWlkZGxlTmFtZVwiLFwibWlkZGxlX25hbWVcIixcIm1pZGRsZUluaXRpYWxcIixcIm1pZGRsZV9pbml0aWFsXCJdKSxhPVN0cmluZyhpPz9cIlwiKS50cmltKCk7cltcIk1pZGRsZSBuYW1lXCJdPWEmJmVhKGEsbixvKT9cIlwiOmE7bGV0IGw9WShyLFtcIlN1ZmZpeFwiLFwic3VmZml4XCIsXCJOYW1lIHN1ZmZpeFwiLFwibmFtZVN1ZmZpeFwiLFwibmFtZV9zdWZmaXhcIl0pO3IuU3VmZml4PVN0cmluZyhsPz9cIlwiKS50cmltKCk7bGV0IHM9WShyLFtcIkFkZHJlc3NcIixcImFkZHJlc3NcIixcInN0cmVldFwiLFwic3RyZWV0QWRkcmVzc1wiLFwic3RyZWV0X2FkZHJlc3NcIixcIkFkZHJlc3MgTGluZSAxXCIsXCJhZGRyZXNzTGluZTFcIl0pLHU9WShyLFtcIlppcC9wb3N0YWwgY29kZVwiLFwiWmlwXCIsXCJ6aXBcIixcInBvc3RhbENvZGVcIixcInBvc3RhbF9jb2RlXCIsXCJaaXAgY29kZVwiXSksYz1TdHJpbmcodT8/XCJcIikudHJpbSgpO3JbXCJaaXAvcG9zdGFsIGNvZGVcIl09YztsZXQgZD1TdHJpbmcocz8/XCJcIikudHJpbSgpO2QmJmMmJmQ9PT1jJiYoZD1cIlwiKSxkJiZIKGQpJiYoZD1cIlwiKSxyLkFkZHJlc3M9ZDtsZXQgZj1TdHJpbmcodD8/XCJcIikudHJpbSgpLG09Zj9YKGYpOlwiXCI7Zm9yKGxldCBlIG9mKHJbXCJDb3VudHJ5IC8gUmVnaW9uXCJdPW0sT2JqZWN0LmtleXMocikpKU8oZSkmJihyW2VdPW0pO2xldCBoPVkocixbXCJDaXR5XCIsXCJjaXR5XCJdKTtyLkNpdHk9U3RyaW5nKGg/P1wiXCIpLnRyaW0oKTtsZXQgZz1ZKHIsW1wiU3RhdGUgLyBwcm92aW5jZVwiLFwiU3RhdGVcIixcInN0YXRlXCIsXCJzdGF0ZVByb3ZpbmNlXCIsXCJzdGF0ZV9wcm92aW5jZVwiXSksYj1TdHJpbmcoZz8/XCJcIikudHJpbSgpO2lmKCFiJiYoXCJVbml0ZWQgU3RhdGVzXCI9PT1yW1wiQ291bnRyeSAvIFJlZ2lvblwiXXx8XCJDYW5hZGFcIj09PXJbXCJDb3VudHJ5IC8gUmVnaW9uXCJdKSl7bGV0IGU9U3RyaW5nKFkocixbXCJXaGljaCBsb2NhdGlvbnMocykgZG8geW91IHByZWZlciB3b3JraW5nIG91dCBvZj9cIixcIldoaWNoIGxvY2F0aW9uKHMpIGRvIHlvdSBwcmVmZXIgd29ya2luZyBvdXQgb2Y/XCIsXCJsb2NhdGlvbnNcIixcIkxvY2F0aW9uc1wiLFwicHJlZmVycmVkX2xvY2F0aW9uc1wiLFwicHJlZmVycmVkTG9jYXRpb25zXCJdKT8/XCJcIikudHJpbSgpLHQ9SyhlKTt0JiYoYj10KX1pZihyW1wiU3RhdGUgLyBwcm92aW5jZVwiXT1iLHIuU3RhdGU9YixBcnJheS5pc0FycmF5KGUuZWR1Y2F0aW9uKSYmZS5lZHVjYXRpb24ubGVuZ3RoPjApe2xldCB0PWUuZWR1Y2F0aW9uWzBdLGk9ZWwodCxuLG8pO2kmJihyW1wiU2Nob29sIG5hbWVcIl09aSksdD8uRGVncmVlJiYoci5EZWdyZWU9dC5EZWdyZWUpLHQ/Lk1ham9yJiYocltcIk1ham9yIC8gYXJlYSBvZiBzdHVkeVwiXT10Lk1ham9yKX1pZihBcnJheS5pc0FycmF5KGUud29ya0V4cGVyaWVuY2UpJiZlLndvcmtFeHBlcmllbmNlLmxlbmd0aD4wKXtsZXQgdD1lLndvcmtFeHBlcmllbmNlWzBdLGk9ZXModCxuLG8pO2kmJihyW1wiRW1wbG95ZXIgbmFtZVwiXT1pKSx0Py5Qb3NpdGlvbiYmKHJbXCJKb2IgdGl0bGVcIl09dC5Qb3NpdGlvbil9ZXAocixlKTtsZXQgeT1ZKHIsW1wiSGF2ZSB5b3Ugd29ya2VkIGF0IEFscGhhYmV0IGJlZm9yZT9cIixcIkFscGhhYmV0IGV4cGVyaWVuY2VcIixcImFscGhhYmV0RXhwZXJpZW5jZVwiLFwiYWxwaGFiZXRfZXhwZXJpZW5jZVwiLFwid29ya2VkQXRBbHBoYWJldFwiXSksdj1TdHJpbmcoeT8/XCJcIikudHJpbSgpLnRvTG93ZXJDYXNlKCksdz1cInllc1wiPT09dnx8XCJ0cnVlXCI9PT12fHxcIjFcIj09PXZ8fFwieVwiPT09dj9cInllc1wiOlwibm9cIjtpZihyW1wiSGF2ZSB5b3Ugd29ya2VkIGF0IEFscGhhYmV0IGJlZm9yZT9cIl09dywhZWQoci5Nb250aCkmJkFycmF5LmlzQXJyYXkoZS5lZHVjYXRpb24pJiZlLmVkdWNhdGlvbi5sZW5ndGg+MCl7bGV0IHQ9ZS5lZHVjYXRpb25bMF0sbj1ZKHQsW1wiTW9udGhcIixcIm1vbnRoXCIsXCJTdGFydCBEYXRlIC0gTW9udGhcIixcIlN0YXJ0RGF0ZU1vbnRoXCJdKTtuJiYoci5Nb250aD1uKX1sZXQgUz1lZChyW1wiU2Nob29sIG5hbWVcIl0pO1MmJmVhKFMsbixvKSYmKHJbXCJTY2hvb2wgbmFtZVwiXT1cIlwiKTtsZXQgRT1lZChyW1wiRW1wbG95ZXIgbmFtZVwiXSk7RSYmZWEoRSxuLG8pJiYocltcIkVtcGxveWVyIG5hbWVcIl09XCJcIik7bGV0IHg9W107QXJyYXkuaXNBcnJheShlLndvcmtFeHBlcmllbmNlKSYmZS53b3JrRXhwZXJpZW5jZS5sZW5ndGg+MCYmKHg9ZS53b3JrRXhwZXJpZW5jZS5maWx0ZXIoZT0+ZSYmXCJvYmplY3RcIj09dHlwZW9mIGUpLm1hcChlPT57bGV0IHQ9ey4uLmV9LHI9ZXModCxuLG8pO3JldHVybiByJiYodFtcIkVtcGxveWVyIG5hbWVcIl09ciksdH0pKSxyW1wiV29yayBleHBlcmllbmNlXCJdPXgscltcIkFwcGx5aW5nIGZvciB5b3VyIGZpcnN0IGpvYj9cIl09KHgubGVuZ3RoLFwibm9cIik7Zm9yKGxldCBlPTE7ZTw9eC5sZW5ndGg7ZSsrKXtsZXQgdD14W2UtMV07dCYmKHJbYFdvcmsgZXhwZXJpZW5jZSAke2V9IC0gRW1wbG95ZXIgbmFtZWBdPWVkKHRbXCJFbXBsb3llciBuYW1lXCJdKT8/XCJcIixyW2BXb3JrIGV4cGVyaWVuY2UgJHtlfSAtIEpvYiB0aXRsZWBdPWVkKHRbXCJKb2IgdGl0bGVcIl0pPz9cIlwiKX1sZXQgQT1wLkdPT0dMRV9TS0lMTFNfTEFCRUwsaz1BcnJheS5pc0FycmF5KGUuc2tpbGxzKT9DKGUuc2tpbGxzKTpbXTtpZihrLmxlbmd0aD4wKXJbQV09aztlbHNle2xldCBlPXJbQV07QXJyYXkuaXNBcnJheShlKT9yW0FdPUMoZSk6XCJzdHJpbmdcIj09dHlwZW9mIGUmJmUudHJpbSgpJiYocltBXT1lLnRyaW0oKSl9bGV0IFQ9W1wiV2hpY2ggbG9jYXRpb25zKHMpIGRvIHlvdSBwcmVmZXIgd29ya2luZyBvdXQgb2Y/XCIsXCJXaGljaCBsb2NhdGlvbihzKSBkbyB5b3UgcHJlZmVyIHdvcmtpbmcgb3V0IG9mP1wiXSxGPVkocixbXCJsb2NhdGlvbnNcIixcIkxvY2F0aW9uc1wiLFwicHJlZmVycmVkX2xvY2F0aW9uc1wiLFwicHJlZmVycmVkTG9jYXRpb25zXCIsLi4uVF0pO2lmKG51bGwhPUYmJlwiXCIhPT1GKXtsZXQgZT1BcnJheS5pc0FycmF5KEYpP0YubWFwKGU9PlN0cmluZyhlPz9cIlwiKS50cmltKCkpLmZpbHRlcihCb29sZWFuKS5qb2luKFwiLCBcIik6U3RyaW5nKEYpLnRyaW0oKTtpZihlKWZvcihsZXQgdCBvZiBUKXJbdF09ZX1sZXQgST1ZKHIsW1wiUHJlZmVycmVkIExvY2F0aW9uXCIsXCJwcmVmZXJyZWRMb2NhdGlvblwiLFwiUHJlZmVycmVkIGxvY2F0aW9uXCIsXCJwcmVmZXJyZWRfbG9jYXRpb25cIl0pO0kmJihyW1wiUHJlZmVycmVkIExvY2F0aW9uXCJdPVN0cmluZyhJKS50cmltKCkpO2xldCBqPVtcIkFkZGl0aW9uYWwgbG9jYXRpb24ocylcIixcImFkZGl0aW9uYWxMb2NhdGlvbnNcIixcIkFkZGl0aW9uYWwgbG9jYXRpb25zXCIsXCJhZGRpdGlvbmFsX2xvY2F0aW9uc1wiXSxEPXJbXCJBZGRpdGlvbmFsIGxvY2F0aW9uKHMpXCJdO2lmKG51bGw9PUR8fFwiXCI9PT1EKXtmb3IobGV0IGUgb2Ygail7bGV0IHQ9cj8uW2VdO2lmKG51bGwhPXQpe2lmKEFycmF5LmlzQXJyYXkodCkmJnQubGVuZ3RoPjApe0Q9dDticmVha31pZihcInN0cmluZ1wiPT10eXBlb2YgdCYmXCJcIiE9PXQudHJpbSgpKXtEPXQudHJpbSgpO2JyZWFrfX19bnVsbCE9RCYmXCJcIiE9PUQmJihyW1wiQWRkaXRpb25hbCBsb2NhdGlvbihzKVwiXT1EKX1sZXQgUD1ZKHIsW1wiR2VuZGVyXCIsXCJnZW5kZXJcIixcImdlbmRlcklkZW50aXR5XCJdKTtQJiYoci5HZW5kZXI9U3RyaW5nKFApLnRyaW0oKSk7bGV0IF89WShyLFtcIlZldGVyYW4gc3RhdHVzXCIsXCJ2ZXRlcmFuU3RhdHVzXCIsXCJ2ZXRlcmFuX3N0YXR1c1wiXSk7XyYmKHJbXCJWZXRlcmFuIHN0YXR1c1wiXT1TdHJpbmcoXykudHJpbSgpKTtsZXQgTD1ZKHIsW1wiRGlzYWJpbGl0eVwiLFwiZGlzYWJpbGl0eVwiLFwiZGlzYWJpbGl0eVN0YXR1c1wiXSk7TCYmKHIuRGlzYWJpbGl0eT1TdHJpbmcoTCkudHJpbSgpKTtsZXQgUj1yW1wiUmFjZSAvIGV0aG5pYyBncm91cFwiXTtpZihudWxsPT1SfHxcIlwiPT09Uil7bGV0IGU9WShyLFtcIlJhY2UgLyBldGhuaWMgZ3JvdXBcIixcInJhY2VFdGhuaWNHcm91cFwiLFwicmFjZV9ldGhuaWNfZ3JvdXBcIixcInJhY2VcIl0pO1wiXCIhPT1lJiYocltcIlJhY2UgLyBldGhuaWMgZ3JvdXBcIl09QXJyYXkuaXNBcnJheShlKT9lOlN0cmluZyhlKS50cmltKCkpfWxldCBNPVkocixbXCJQcml2YWN5IHBvbGljeSBjb25zZW50XCIsXCJwcml2YWN5UG9saWN5Q29uc2VudFwiLFwiY29uc2VudFwiLFwicHJpdmFjeV9jb25zZW50XCJdKTtcIlwiIT09TSYmKHJbXCJQcml2YWN5IHBvbGljeSBjb25zZW50XCJdPU0pLCh2b2lkIDA9PT1yW1wiQ29uc2VudCB0ZXJtc1wiXXx8bnVsbD09PXJbXCJDb25zZW50IHRlcm1zXCJdfHxcIlwiPT09U3RyaW5nKHJbXCJDb25zZW50IHRlcm1zXCJdPz9cIlwiKS50cmltKCkpJiYocltcIkNvbnNlbnQgdGVybXNcIl09XCJ0cnVlXCIpO2xldCBOPVtdO2lmKEFycmF5LmlzQXJyYXkoci5FbWFpbCkmJnIuRW1haWwubGVuZ3RoPjApTj1yLkVtYWlsLm1hcChlPT5TdHJpbmcoZT8/XCJcIikudHJpbSgpKS5maWx0ZXIoZT0+XCJcIiE9PWUpO2Vsc2V7bGV0IGU9U3RyaW5nKFkocixbXCJFbWFpbCBhZGRyZXNzXCIsXCJlbWFpbFwiLFwicHJpbWFyeUVtYWlsXCIsXCJwcmltYXJ5X2VtYWlsXCJdKT8/XCJcIikudHJpbSgpLHQ9WShyLFtcIkFkZGl0aW9uYWwgZW1haWxcIixcImFkZGl0aW9uYWxfZW1haWxzXCIsXCJhZGRpdGlvbmFsRW1haWxzXCIsXCJBZGRpdGlvbmFsIGVtYWlsc1wiXSksbj1bXTtpZihBcnJheS5pc0FycmF5KHQpJiZ0Lmxlbmd0aD4wKW49dC5tYXAoZT0+U3RyaW5nKGU/P1wiXCIpLnRyaW0oKSkuZmlsdGVyKGU9PlwiXCIhPT1lKTtlbHNlIGlmKFwic3RyaW5nXCI9PXR5cGVvZiB0JiZ0LnRyaW0oKSluPVt0LnRyaW0oKV07ZWxzZSBmb3IobGV0IGU9MTtlPD0yMDtlKyspe2xldCB0PVN0cmluZyhyW2BBZGRpdGlvbmFsIGVtYWlsIGFkZHJlc3MgJHtlfWBdPz9cIlwiKS50cmltKCk7XCJcIiE9PXQmJm4ucHVzaCh0KX1sZXQgbz1uZXcgU2V0LGk9ZS50b0xvd2VyQ2FzZSgpO2ZvcihsZXQgdCBvZihpJiYoTi5wdXNoKGUpLG8uYWRkKGkpKSxuKSl7bGV0IGU9dC50b0xvd2VyQ2FzZSgpO28uaGFzKGUpfHwoby5hZGQoZSksTi5wdXNoKHQpKX19bGV0ICQ9TWF0aC5tYXgoMCxOLmxlbmd0aC0xKSxCPWU9PntsZXQgdD1lLm1hdGNoKC9eQWRkaXRpb25hbCBlbWFpbCBhZGRyZXNzIChcXGQrKSQvKTtyZXR1cm4hdHx8cGFyc2VJbnQodFsxXSwxMCk8PSR9LHE9e307T2JqZWN0LmtleXMocikuZmlsdGVyKEIpLmZvckVhY2goZT0+e3FbZV09cltlXX0pLHEuRW1haWw9TixxW1wiRW1haWwgYWRkcmVzc1wiXT1OWzBdPz9cIlwiO2ZvcihsZXQgZT0xO2U8PSQ7ZSsrKXFbYEFkZGl0aW9uYWwgZW1haWwgYWRkcmVzcyAke2V9YF09TltlXTtlLnJlZ3VsYXI9cTtsZXQgVT1bXTtpZihBcnJheS5pc0FycmF5KChyPWUucmVndWxhcikuUGhvbmUpJiZyLlBob25lLmxlbmd0aD4wKXtsZXQgZT1uZXcgU2V0O2ZvcihsZXQgdCBvZiByLlBob25lKXtsZXQgcj1lZyh0KT8/KFwic3RyaW5nXCI9PXR5cGVvZiB0P3QudHJpbSgpOlwiXCIpOyFyfHxlLmhhcyhyKXx8KGUuYWRkKHIpLFUucHVzaChyKSl9fWVsc2V7bGV0IGU9WShyLFtcIlBob25lIG51bWJlclwiLFwiUHJpbWFyeSBwaG9uZVwiLFwiTW9iaWxlIHBob25lIG51bWJlclwiLFwiUGhvbmVcIixcInBob25lIG51bWJlclwiLFwiUHJpbWFyeSBwaG9uZSBudW1iZXJcIixcInBob25lXCIsXCJwcmltYXJ5X3Bob25lXCIsXCJtb2JpbGVcIl0pLHQ9WShyLFtcIkFkZGl0aW9uYWwgcGhvbmVcIixcImFkZGl0aW9uYWxfcGhvbmVzXCIsXCJhZGRpdGlvbmFsUGhvbmVzXCIsXCJBZGRpdGlvbmFsIHBob25lc1wiXSksbj1bXTtpZihBcnJheS5pc0FycmF5KHQpJiZ0Lmxlbmd0aD4wKW49dC5tYXAoZT0+U3RyaW5nKGU/P1wiXCIpLnRyaW0oKSkuZmlsdGVyKGU9PlwiXCIhPT1lKTtlbHNlIGlmKFwic3RyaW5nXCI9PXR5cGVvZiB0JiZ0LnRyaW0oKSluPVt0LnRyaW0oKV07ZWxzZSBmb3IobGV0IGU9MTtlPD0yMDtlKyspe2xldCB0PVN0cmluZyhyW2BBZGRpdGlvbmFsIHBob25lIG51bWJlciAke2V9YF0/P1wiXCIpLnRyaW0oKTtcIlwiIT09dCYmbi5wdXNoKHQpfWxldCBvPWVnKGUpO28mJlUucHVzaChvKTtsZXQgaT1uZXcgU2V0O2ZvcihsZXQgZSBvZihvJiZpLmFkZChvKSxuKSl7bGV0IHQ9ZWcoZSk7IXR8fGkuaGFzKHQpfHwoaS5hZGQodCksVS5wdXNoKHQpKX19bGV0IHo9VVswXT8/XCJcIixWPU1hdGgubWF4KDAsVS5sZW5ndGgtMSksVz1lPT57bGV0IHQ9ZS5tYXRjaCgvXkFkZGl0aW9uYWwgcGhvbmUgbnVtYmVyIChcXGQrKSQvKTtyZXR1cm4hdHx8cGFyc2VJbnQodFsxXSwxMCk8PVZ9LEc9e307T2JqZWN0LmtleXMocikuZmlsdGVyKFcpLmZvckVhY2goZT0+e0dbZV09cltlXX0pLEcuUGhvbmU9VSxHW1wiUHJpbWFyeSBwaG9uZVwiXT16LEdbXCJQaG9uZSBudW1iZXJcIl09ejtmb3IobGV0IGU9MTtlPD1WO2UrKylHW2BBZGRpdGlvbmFsIHBob25lIG51bWJlciAke2V9YF09VVtlXTtlLnJlZ3VsYXI9R31sZXQgZWg9W3twcmVmaXg6XCIxXCIsbWluVG90YWw6MTF9LHtwcmVmaXg6XCI4NlwiLG1pblRvdGFsOjEzfSx7cHJlZml4OlwiNDRcIixtaW5Ub3RhbDoxMn0se3ByZWZpeDpcIjM3MlwiLG1pblRvdGFsOjEwfSx7cHJlZml4OlwiMzNcIixtaW5Ub3RhbDoxMX0se3ByZWZpeDpcIjQ5XCIsbWluVG90YWw6MTJ9LHtwcmVmaXg6XCI4MVwiLG1pblRvdGFsOjEyfSx7cHJlZml4OlwiOTFcIixtaW5Ub3RhbDoxMn0se3ByZWZpeDpcIjM1M1wiLG1pblRvdGFsOjEyfSx7cHJlZml4OlwiMzU4XCIsbWluVG90YWw6MTJ9LHtwcmVmaXg6XCIzNzBcIixtaW5Ub3RhbDoxMX0se3ByZWZpeDpcIjM3MVwiLG1pblRvdGFsOjExfSx7cHJlZml4OlwiMzJcIixtaW5Ub3RhbDoxMX0se3ByZWZpeDpcIjMxXCIsbWluVG90YWw6MTF9LHtwcmVmaXg6XCI2MVwiLG1pblRvdGFsOjExfSx7cHJlZml4OlwiODJcIixtaW5Ub3RhbDoxMn0se3ByZWZpeDpcIjY1XCIsbWluVG90YWw6MTB9LHtwcmVmaXg6XCI4NTJcIixtaW5Ub3RhbDoxMX0se3ByZWZpeDpcIjg4NlwiLG1pblRvdGFsOjEyfV07ZnVuY3Rpb24gZWcoZSl7bGV0IHQ7aWYobnVsbD09ZSlyZXR1cm4gbnVsbDtpZihBcnJheS5pc0FycmF5KGUpJiZlLmxlbmd0aD4wKXQ9U3RyaW5nKGVbMF0/P1wiXCIpLnRyaW0oKTtlbHNle2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiBudWxsO3Q9ZS50cmltKCl9aWYoIXQpcmV0dXJuIG51bGw7bGV0IHI9dC5yZXBsYWNlKC9cXEQvZyxcIlwiKTtpZighci5sZW5ndGgpcmV0dXJuIG51bGw7bGV0IG49dC5pbmNsdWRlcyhcIitcIik7aWYobil7bGV0IGU9Wy4uLmVoXS5zb3J0KChlLHQpPT50LnByZWZpeC5sZW5ndGgtZS5wcmVmaXgubGVuZ3RoKTtmb3IobGV0e3ByZWZpeDp0LG1pblRvdGFsOm59b2YgZSlpZihyLmxlbmd0aD49biYmci5zdGFydHNXaXRoKHQpKXtsZXQgZT1yLnNsaWNlKHQubGVuZ3RoKTtpZihlLmxlbmd0aD49NiYmZS5sZW5ndGg8PTE1KXJldHVybiBlfX1yZXR1cm4gcn1sZXQgZWI9W1wiUGhvbmUgbnVtYmVyXCIsXCJQcmltYXJ5IHBob25lXCIsXCJNb2JpbGUgcGhvbmUgbnVtYmVyXCIsXCJQaG9uZVwiLFwicGhvbmUgbnVtYmVyXCIsXCJQcmltYXJ5IHBob25lIG51bWJlclwiXTtmdW5jdGlvbiBleShlLHQ9e30pe2lmKCFlKXJldHVybiBlO3RyeXtsZXR7Y292ZXJMZXR0ZXI6cixhdXRvZmlsbENvdW50cnk6bn09dCxvPSgwLHMuYXBwbHlDb3ZlckxldHRlclRleHRUb0Fuc3dlcikoZSxyLFtcIkNvdmVyIGxldHRlclwiLFwiQ292ZXIgTGV0dGVyXCJdKSxpPSgwLHMuZm9ybWF0Q292ZXJMZXR0ZXJNYXJrZG93bkFzVGV4dCkocj8ubWFya2Rvd24pOyhlPW8pLnJlZ3VsYXImJlwib2JqZWN0XCI9PXR5cGVvZiBlLnJlZ3VsYXJ8fChlLnJlZ3VsYXI9e30pO2xldCBhPXsuLi5lLnJlZ3VsYXJ9O2ZvcihsZXQgZSBvZighaXx8YVtcIkNvdmVyIGxldHRlclwiXXx8YVtcIkNvdmVyIExldHRlclwiXXx8KGFbXCJDb3ZlciBsZXR0ZXJcIl09aSksT2JqZWN0LmtleXMoYSkpKXtsZXQgdD1hW2VdO251bGwhPXQmJlwic3RyaW5nXCI9PXR5cGVvZiB0JiYoYVtlXT10LnRyaW0oKSl9Zm9yKGxldCBlIG9mIGViKXtsZXQgdD1hW2VdLHI9ZWcodCk7aWYobnVsbCE9PXIpe2FbZV09cjticmVha319cmV0dXJuIGVpKGUpLGUucmVndWxhcj1hLGVtKGUsbiksZX1jYXRjaCh0KXtyZXR1cm4gZX19XHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJhbnN3ZXIuMzQ2ZGYyN2MuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);