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
})({"hneTa":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\ultipro\\rules.js",
    "bundleId": "6b33cba2375afa93",
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
var j = z(require("dadd29d33a691d94"));
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

},{"dadd29d33a691d94":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"qgxaY":[function(require,module,exports) {
/**
 * Parcel module id: e0jMO
 * Resolved path: src/contents/sites/ultipro/rules.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "ULTIPRO_DESCRIPTION_FIELD_HINT", ()=>a), n.export(r, "extractUltiproTypeaheadOptions", ()=>c), n.export(r, "extractRules", ()=>f), n.export(r, "getUltiproVisibleSection", ()=>g), n.export(r, "isUltiproReviewCopyLayout", ()=>b), n.export(r, "getUltiproSectionEditors", ()=>y), n.export(r, "getUltiproSectionEditor", ()=>v), n.export(r, "extractExpAndEduRuleFromElement", ()=>A), n.export(r, "isElementHidden", ()=>k), n.export(r, "getFormSnapshot", ()=>en);
var o = e("~core/enums"), i = e("~core/xpath");
let a = "Return this description in English. Keep it within 2000 characters and do not exceed 2000 characters.", l = "Level of Education / Degree", s = "degreeOptions";
function u(e1) {
    let t = e1.getAttribute("data-bind") || "", r1 = t.match(/\btypeahead\s*:\s*\{[\s\S]*?\bsource\s*:\s*(?:[\w$]+(?:\[[^\]]+\])?\.)*([A-Za-z_$][\w$]*)/);
    return r1?.[1] || "";
}
function c(e1, t = document.scripts) {
    if (u(e1) !== s) return [];
    let r1 = RegExp(`\\b(?:var|let|const)\\s+${s}\\s*=\\s*(\\[[\\s\\S]*?\\])\\s*;`);
    for (let e1 of t){
        let t = e1.textContent || "", n = t.match(r1)?.[1];
        if (n) try {
            let e1 = JSON.parse(n);
            return Array.from(new Set(e1.map((e1)=>"string" == typeof e1?.Name ? e1.Name.trim() : "").filter(Boolean)));
        } catch  {
            console.warn("[Ultipro][DegreeTypeahead] could not parse static options");
            break;
        }
    }
    return [];
}
function d(e1, t) {
    return e1 === l && "combobox" === t.getAttribute("role") && "list" === t.getAttribute("aria-autocomplete") && u(t) === s;
}
async function f(e1 = {}) {
    let t = [], r1 = [], n = [], o = [];
    try {
        await e1.beforeContactInformationExtraction?.();
        let i = await p();
        t.push(...i), r1 = await M(), n = await R(), o = await O(), console.info(`[Ultipro][Questions] captured before Contact Information cancel; contact=${i.length}; country=${r1.length}; general=${n.length}; application=${o.length}`);
    } finally{
        await e1.afterQuestionExtraction?.();
    }
    let i = await x();
    t.push(...i);
    let a = await C();
    t.push(...a);
    let l = await I();
    t.push(...l);
    let s = await D();
    t.push(...s);
    let u = await P();
    t.push(...u);
    let c = await _();
    t.push(...c);
    let d = await L();
    return t.push(...d), t.push(...n), t.push(...o), t.push(...r1), t;
}
async function p() {
    let e1 = [], t = [
        "WorkExperienceSection",
        "EducationSection",
        "CandidateSkills",
        "CandidateBehaviors",
        "CandidateMotivations",
        "LicensesAndCertificationsSection",
        "CandidateLinkEdit",
        "Questions",
        "ApplicationQuestions",
        "CountryQuestions"
    ], r1 = t.map((e1)=>`not(ancestor::*[@id='${e1}'])`).join(" and "), n = (0, i.getOrderedNodes)(`//div[
      (contains(@class, 'col-md-24') and @data-bind='configurableVisibility: $parent.willingToRelocateConfig')
      or ((contains(@class, 'col-md-8') or contains(@class, 'col-md-16')) and ${r1})
    ]`);
    for (let t of n){
        if (k(t)) continue;
        let r1 = t.querySelectorAll("input, select, textarea");
        if (0 === r1.length) continue;
        let n = Array.from(r1).some((e1)=>T(e1));
        if (n) {
            let r1 = m(t);
            r1 && e1.push(r1);
        }
    }
    return e1;
}
function m(e1) {
    if (k(e1)) return null;
    let t = e1.querySelector("label");
    if (!t) return null;
    let r1 = t.textContent?.trim() || "";
    if (!r1) return null;
    let n = t.classList.contains("required"), i = t.getAttribute("for") || "", a = F(e1, i ? `select#${CSS.escape(i)}` : "select");
    if (a) {
        let e1 = Array.from(a.querySelectorAll("option")).slice(1).map((e1)=>e1.textContent?.trim()).filter((e1)=>!!e1);
        return {
            type: o.FIELD_TYPE.SELECT,
            label: r1,
            required: n,
            $label: t,
            options: e1,
            $input: a
        };
    }
    let l = F(e1, i ? `input[type='checkbox']#${CSS.escape(i)}` : "input[type='checkbox']");
    if (l) return {
        type: o.FIELD_TYPE.CHECKBOX,
        label: r1,
        required: n,
        $label: t,
        $input: l
    };
    let s = F(e1, i ? `input#${CSS.escape(i)}, textarea#${CSS.escape(i)}` : "input[type='text'], textarea");
    return s ? {
        type: o.FIELD_TYPE.TEXT,
        label: r1,
        required: n,
        $label: t,
        $input: s
    } : null;
}
let h = {
    education: [
        "#EducationSection",
        "[data-automation='education-section']"
    ],
    employment: [
        "#WorkExperienceSection",
        "[data-automation='work-experience-section']"
    ]
};
function g(e1) {
    for (let t of h[e1]){
        let e1 = Array.from(document.querySelectorAll(t)).find((e1)=>!k(e1));
        if (e1) return e1;
    }
    return null;
}
function b(e1) {
    return !e1.querySelector("ul.listtype");
}
function y(e1) {
    let t = Array.from(e1.querySelectorAll('ul.listtype > li[data-automation="panel-list-item"]'));
    if (t.length > 0) return t;
    let r1 = Array.from(e1.querySelectorAll("[data-automation='work-experience-item'], [data-automation='education-panel'], [data-automation='panel-list-item']")).filter((t)=>t !== e1).map((e1)=>e1.closest("[data-automation='panel-list-item']") ?? e1);
    return Array.from(new Set(r1));
}
function v(e1, t = []) {
    let r1 = y(e1);
    return t.length > 0 ? r1.find((e1)=>!t.includes(e1)) ?? null : r1[0] ?? null;
}
function w(e1) {
    return e1.querySelector("button[data-automation='primary-action-button']");
}
async function S(e1, t, r1) {
    let n = (e1)=>e1.filter((e1)=>!k(e1)).map(A).filter((e1)=>!!e1);
    if (b(e1)) return n(Array.from(e1.querySelectorAll("div.form-group")).filter((e1)=>!e1.querySelector("div.form-group")));
    t.click(), await new Promise((e1)=>setTimeout(e1, 200));
    let o = n((0, i.getOrderedNodes)(r1)), a = e1.querySelector("button[data-automation='cancel-button']");
    return a && (a.click(), await new Promise((e1)=>setTimeout(e1, 200))), o;
}
_c = S;
async function E(e1, t, r1, n) {
    let o = g(e1);
    if (!o) return [];
    let i = w(o);
    if (!i) return [];
    let a = await S(o, i, n), l = {
        label: t,
        type: r1,
        required: !0,
        $input: i,
        children: a,
        options: a.map((e1)=>{
            let t = {
                type: e1.type,
                label: e1.label
            };
            return e1.options && e1.options.length > 0 && (t.options = e1.options), e1.description && (t.description = e1.description), t;
        })
    };
    return [
        l
    ];
}
_c1 = E;
function x() {
    return E("employment", "Employment", o.FIELD_TYPE.EMPLOYMENT, "//*[@id='WorkExperienceSection']//*[@data-automation='work-experience-item']//div[contains(@class, 'col-md-12') or contains(@class, 'col-md-24')][not(ancestor::div[contains(@class, 'collapse') and @aria-expanded='false'])]");
}
function C() {
    return E("education", "Education", o.FIELD_TYPE.EDUCATION, "//*[@data-automation='education-panel']//div[contains(@class, 'col-md-12') or contains(@class, 'col-md-24')]");
}
_c2 = C;
function A(e1) {
    let t = e1.querySelector("label");
    if (!t) return null;
    let r1 = t.textContent?.trim() || "";
    if (!r1) return null;
    let n = t.classList.contains("required"), i = e1.querySelector("select"), l = e1.querySelector("input[type='text']");
    if (i && l && ("To" === r1 || "From" === r1)) {
        let i = "Month Year(YYYY)";
        return {
            type: o.FIELD_TYPE.DATE,
            label: r1,
            required: n,
            $label: t,
            $input: e1,
            description: i
        };
    }
    if (i && !i.disabled) {
        let e1 = Array.from(i.querySelectorAll("option")).slice(1).map((e1)=>e1.textContent?.trim()).filter((e1)=>!!e1);
        return {
            type: o.FIELD_TYPE.SELECT,
            label: r1,
            required: n,
            $label: t,
            options: e1,
            $input: i
        };
    }
    let s = e1.querySelector("ukg-date-input-text");
    if (s) return {
        type: o.FIELD_TYPE.TEXT,
        label: r1,
        required: n,
        $label: t,
        $input: s
    };
    let u = e1.querySelector("input[type='text'], textarea");
    if (u && !u.readOnly && !u.disabled) {
        if ("INPUT" === u.tagName && d(r1, u)) {
            let e1 = c(u);
            return e1.length > 0 ? console.info("[Ultipro][DegreeTypeahead] captured static candidates", {
                optionCount: e1.length
            }) : console.warn("[Ultipro][DegreeTypeahead] static candidate catalog was unavailable"), {
                type: o.FIELD_TYPE.SELECT,
                label: r1,
                required: n,
                $label: t,
                $input: u,
                options: e1,
                optionsMode: "complete"
            };
        }
        let e1 = "Description" === r1 ? a : void 0;
        return {
            type: o.FIELD_TYPE.TEXT,
            label: r1,
            required: n,
            $label: t,
            $input: u,
            ...e1 ? {
                description: e1
            } : {}
        };
    }
    return null;
}
_c3 = A;
function k(e1) {
    if ("none" === e1.style.display || e1.classList.contains("collapse") && !e1.classList.contains("in")) return !0;
    let t = e1.closest("[style*='display: none'], .collapse:not(.in)");
    return !!t;
}
function T(e1) {
    if (k(e1)) return !1;
    if (e1 instanceof HTMLInputElement && ("checkbox" === e1.type || "radio" === e1.type)) return !e1.disabled;
    let t = e1, r1 = e1.hasAttribute("readonly") && ("readonly" === e1.getAttribute("readonly") || "true" === e1.getAttribute("readonly"));
    return !r1 && !t.disabled;
}
_c4 = T;
function F(e1, t) {
    return Array.from(e1.querySelectorAll(t)).find((e1)=>T(e1)) ?? null;
}
_c5 = F;
async function I() {
    let e1 = document.querySelector("#CandidateSkills");
    if (!e1) return [];
    let t = e1.querySelector("div[class='panel-heading']"), r1 = e1.querySelector("button[data-automation='primary-action-button']");
    if (!r1) return [];
    let n = e1.querySelector("input");
    if (!n) return [];
    let i = {
        label: "Skills",
        type: o.FIELD_TYPE.TEXT,
        required: !1,
        $label: t,
        $input: n
    };
    return [
        i
    ];
}
_c6 = I;
async function j(e1, t) {
    let r1 = !1, n = e1.querySelector("select");
    n || !t || t.disabled || (t.click(), r1 = !0, await new Promise((e1)=>setTimeout(e1, 300)), n = e1.querySelector("select"));
    let o = n ? Array.from(n.querySelectorAll("option")).map((e1)=>e1.textContent?.trim()).filter((e1)=>!!e1) : [];
    if (r1) {
        let t = e1.querySelector("button[data-automation='cancel-button']");
        t && (t.click(), await new Promise((e1)=>setTimeout(e1, 300)));
    }
    return o;
}
async function D() {
    let e1 = document.querySelector("#CandidateBehaviors");
    if (!e1) return [];
    let t = e1.querySelector("button[data-automation='primary-action-button']");
    if (!t) return [];
    let r1 = e1.querySelector("div[class='panel-heading']"), n = await j(e1, t), i = {
        label: "Behaviors",
        type: o.FIELD_TYPE.MULTI_SELECT,
        required: !1,
        $label: r1,
        $input: e1,
        options: n
    };
    return [
        i
    ];
}
_c7 = D;
async function P() {
    let e1 = document.querySelector("#CandidateMotivations");
    if (!e1) return [];
    let t = e1.querySelector("button[data-automation='primary-action-button']");
    if (!t) return [];
    let r1 = e1.querySelector("div[class='panel-heading']"), n = await j(e1, t), i = {
        label: "Motivations",
        type: o.FIELD_TYPE.MULTI_SELECT,
        required: !1,
        $input: e1,
        $label: r1,
        options: n
    };
    return [
        i
    ];
}
_c8 = P;
async function _() {
    let e1 = document.querySelector("#LicensesAndCertificationsSection");
    if (!e1 || k(e1)) return [];
    let t = (0, i.getFirstOrderedNode)("//*[@id='LicensesAndCertificationsSection']//button[@data-automation='primary-action-button']");
    if (!t) return [];
    t.click(), await new Promise((e1)=>setTimeout(e1, 300));
    let r1 = (0, i.getOrderedNodes)("//*[@id='LicensesAndCertificationsSection']//div[contains(@class, 'col-md-16') or contains(@class, 'col-md-8')]"), n = [];
    for (let e1 of r1){
        let t = e1.closest("div.collapse");
        if (!t || t.classList.contains("in")) {
            if (e1.querySelector("div.form-group")) {
                let t = e1.querySelector("div.form-group");
                if (t) {
                    let e1 = $(t);
                    e1.label && !e1.label.includes("License") && (e1.label = "license" + e1.label), e1 && (e1.__ultiproDialogSection = "certifications", n.push(e1));
                }
            } else {
                let t = $(e1);
                t && (t.__ultiproDialogSection = "certifications", n.push(t));
            }
        }
    }
    let o = (0, i.getFirstOrderedNode)("//*[@id='LicensesAndCertificationsSection']//button[@data-automation='cancel-button']");
    return o && (o.click(), await new Promise((e1)=>setTimeout(e1, 200))), n;
}
async function L() {
    let e1 = document.querySelector("#CandidateLinkEdit");
    if (!e1 || k(e1)) return [];
    let t = (0, i.getFirstOrderedNode)("//*[@id='CandidateLinkEdit']//button[@data-automation='primary-action-button' and not(contains(@style, 'display: none'))]");
    if (!t) return [];
    t.click(), await new Promise((e1)=>setTimeout(e1, 300));
    let r1 = (0, i.getOrderedNodes)("//*[@id='CandidateLinkEdit']//div[contains(@class, 'col-sm-14') or contains(@class, 'col-sm-10')]"), n = [];
    for (let e1 of r1){
        let t = $(e1);
        t?.label && !t.label.includes("Link") && (t.label = "link" + t.label), t && (t.__ultiproDialogSection = "links", n.push(t));
    }
    let o = (0, i.getFirstOrderedNode)("//*[@id='CandidateLinkEdit']//button[@data-automation='cancel-button']");
    return o && (o.click(), await new Promise((e1)=>setTimeout(e1, 200))), n;
}
_c9 = L;
async function R() {
    let e1 = [], t = (0, i.getOrderedNodes)("//*[@id='Questions']//div[contains(@class, 'form-group')]");
    for (let r1 of t){
        if (q(r1) || r1.querySelector("div.form-group")) continue;
        let t = $(r1);
        t && e1.push(t);
    }
    let r1 = (0, i.getOrderedNodes)('//*[@id="Questions"]//div[@data-bind and contains(@data-bind, "visible:")]//*[contains(@class, "form-group")]');
    for (let t of r1){
        if (q(t)) continue;
        let r1 = $(t);
        if (r1) {
            let t = e1.find((e1)=>e1.label === r1.label);
            t || e1.push(r1);
        }
    }
    let n = (0, i.getOrderedNodes)('//*[@id="Questions"]//div[@role="radiogroup" and @aria-labelledby="EmployeeReferral"]');
    for (let t of n){
        if (q(t)) continue;
        let r1 = $(t);
        if (r1) {
            let t = e1.find((e1)=>e1.label === r1.label);
            t || e1.push(r1);
        }
    }
    return e1;
}
_c10 = R;
async function O() {
    let e1 = [], t = (0, i.getOrderedNodes)("//*[@id='ApplicationQuestions']//div[contains(@class, 'form-group')]");
    for (let r1 of t){
        if (q(r1) || r1.querySelector("div.form-group")) continue;
        let t = $(r1);
        t && e1.push(t);
    }
    return e1;
}
_c11 = O;
async function M() {
    let e1 = [], t = (0, i.getOrderedNodes)("//*[@id='CountryQuestions']//div[contains(@class, 'form-group')]");
    for (let r1 of t){
        if (q(r1)) continue;
        let t = $(r1);
        t && e1.push(t);
    }
    let r1 = N();
    return r1 && e1.push(r1), e1;
}
_c12 = M;
function N() {
    let e1 = document.querySelector('select[data-automation="country-questions-race"]');
    if (!e1) return null;
    let t = e1.getAttribute("id"), r1 = t ? document.querySelector(`label[for="${t}"]`) : null, n = B(e1);
    return {
        type: o.FIELD_TYPE.SELECT,
        label: "Race",
        required: !0,
        $label: r1,
        options: n,
        $input: e1
    };
}
_c13 = N;
function $(e1) {
    let t = e1.querySelector("label"), r1 = "", n = !1;
    if (t && (r1 = t.textContent?.trim() || "", t.classList.contains("required") && (n = !0)), !r1) {
        let t = e1.querySelector("input, select, textarea");
        if (t) {
            let e1 = t.getAttribute("aria-label")?.trim();
            e1 && (r1 = e1);
        }
    }
    if (!r1) return null;
    let i = t?.getAttribute("for") || "", a = null;
    if (i && (a = e1.querySelector(`select#${CSS.escape(i)}`)), a || (a = e1.querySelector("select")), a && !a.disabled) {
        let i = B(a), l = e1.querySelector("div.checkbox");
        if (l) {
            let e1 = l.querySelector("label"), s = e1?.querySelector("span:not(.sr-only)");
            if (s) {
                let e1 = s.textContent?.replace(/\s+/g, " ").trim() || "";
                if (e1) return i.push(e1), {
                    type: o.FIELD_TYPE.MULTI_SELECT,
                    label: r1,
                    required: n,
                    $label: t,
                    options: i,
                    $input: a
                };
            }
        }
        return {
            type: o.FIELD_TYPE.SELECT,
            label: r1,
            required: n,
            $label: t,
            options: i,
            $input: a
        };
    }
    let l = e1.querySelector('[role="radiogroup"]');
    if (l || "radiogroup" !== e1.getAttribute("role") || (l = e1), l) {
        let e1 = Array.from(l.querySelectorAll('input[type="radio"]'));
        if (e1.length > 0) {
            let i = [];
            for (let t of e1){
                let e1 = t.closest("label") || t.parentElement?.querySelector("label");
                if (e1) {
                    let r1 = e1.textContent?.trim() || t.value;
                    r1 && i.push(r1);
                } else {
                    let e1 = t.nextElementSibling;
                    if (e1 && "SPAN" === e1.tagName) {
                        let t = e1.textContent?.trim();
                        t && i.push(t);
                    }
                }
            }
            return {
                type: o.FIELD_TYPE.CHECKBOX,
                label: r1,
                required: n,
                $label: t,
                options: i,
                $checkboxs: e1
            };
        }
    }
    let s = Array.from(e1.querySelectorAll("label.radio, div[role='radiogroup'] > div > label"));
    if (s.length > 0) {
        let e1 = s.map((e1)=>e1.textContent?.trim()).filter((e1)=>!!e1), i = s.map((e1)=>e1.querySelector("input[type='radio']")).filter((e1)=>!!e1);
        if (i.length > 0) return {
            type: o.FIELD_TYPE.CHECKBOX,
            label: r1,
            required: n,
            $label: t,
            options: e1,
            $checkboxs: i
        };
    }
    let u = e1.querySelector("ukg-date-input-text");
    if (u) return {
        type: o.FIELD_TYPE.DATE,
        label: r1,
        required: n,
        $label: t,
        $input: u
    };
    let c = null;
    return (i && (c = e1.querySelector(`input#${CSS.escape(i)}, textarea#${CSS.escape(i)}`)), c || (c = e1.querySelector("input[type='text'], textarea")), c && !c.readOnly) ? {
        type: o.FIELD_TYPE.TEXT,
        label: r1,
        required: n,
        $label: t,
        $input: c
    } : null;
}
function B(e1) {
    let t = Array.from(e1.querySelectorAll("option"));
    return t.slice(1).map((e1)=>e1.textContent?.trim()).filter((e1)=>!!e1);
}
_c14 = B;
function q(e1) {
    if ("none" === e1.style.display || e1.classList.contains("collapse") && !e1.classList.contains("in")) return !0;
    let t = e1.closest("[style*='display: none'], .collapse:not(.in)");
    return !!t;
}
let U = 200;
function H(e1) {
    if (k(e1)) return null;
    let t = e1.querySelector("label");
    if (!t) return null;
    let r1 = t.textContent?.trim() || "";
    if (!r1) return null;
    let n = t.getAttribute("for") || "", o = "", i = F(e1, n ? `select#${CSS.escape(n)}` : "select");
    if (i) return {
        label: r1,
        value: o = i.options[i.selectedIndex]?.textContent?.trim() || ""
    };
    let a = F(e1, n ? `input[type='checkbox']#${CSS.escape(n)}` : "input[type='checkbox']");
    if (a) return {
        label: r1,
        value: o = a.checked ? "Yes" : "No"
    };
    let l = F(e1, n ? `input#${CSS.escape(n)}, textarea#${CSS.escape(n)}` : "input[type='text'], textarea");
    if (l) {
        if ("TEXTAREA" === l.tagName) o = l.value || "";
        else {
            let e1 = l;
            e1.type, o = e1.value || "";
        }
        return {
            label: r1,
            value: o
        };
    }
    let s = e1.querySelector("ukg-date-input-text");
    if (s) {
        let e1 = s.querySelector('input[aria-label="Month"]'), t = s.querySelector('input[aria-label="Day"]'), n = s.querySelector('input[aria-label="Year"]');
        return e1 && t && n && (o = [
            e1.value,
            t.value,
            n.value
        ].filter(Boolean).join("/") || ""), {
            label: r1,
            value: o
        };
    }
    return null;
}
_c15 = H;
function Y(e1) {
    let t = e1.querySelector("label"), r1 = t?.textContent?.trim() || "";
    if (!r1) {
        let t = e1.querySelector("input, select, textarea");
        r1 = t?.getAttribute("aria-label")?.trim() || "";
    }
    if (!r1) return null;
    let n = t?.getAttribute("for") || "", o = "", i = (n ? e1.querySelector(`select#${CSS.escape(n)}`) : null) || e1.querySelector("select");
    if (i && !i.disabled) {
        let t = i.options[i.selectedIndex];
        o = t?.textContent?.trim() || "";
        let n = !t?.value || /choose/i.test(o);
        if (n || !o) {
            let t = e1.querySelector('div.checkbox input[type="checkbox"]:checked');
            if (t) {
                let r1 = t.closest("label") || (t.id ? e1.querySelector(`label[for="${t.id}"]`) : null), n = r1?.querySelector("span:not(.sr-only)"), i = (n?.textContent || r1?.textContent || "").replace(/\s+/g, " ").trim();
                i && (o = i);
            }
        }
        return {
            label: r1,
            value: o
        };
    }
    let a = e1.querySelector('[role="radiogroup"]') || ("radiogroup" === e1.getAttribute("role") ? e1 : null);
    if (a) {
        let e1 = a.querySelector('input[type="radio"]:checked');
        return e1 && (o = eo(e1)), {
            label: r1,
            value: o
        };
    }
    let l = e1.querySelectorAll('input[type="radio"]');
    if (l.length > 0) {
        let e1 = Array.from(l).find((e1)=>e1.checked);
        return e1 && (o = eo(e1)), {
            label: r1,
            value: o
        };
    }
    let s = e1.querySelector("ukg-date-input-text");
    if (s) {
        let e1 = (e1)=>{
            let t = `input[aria-label="${e1}"]`;
            return s.querySelector(t) || s.shadowRoot?.querySelector(t);
        }, t = e1("Month"), n = e1("Day"), i = e1("Year");
        if (t?.value && n?.value && i?.value && (o = `${t.value}/${n.value}/${i.value}`), !o) {
            let e1 = s.value || s.getAttribute("value") || "";
            if (e1) {
                let t = e1.match(/^(\d{4})-(\d{2})-(\d{2})$/);
                o = t ? `${t[2]}/${t[3]}/${t[1]}` : e1;
            }
        }
        return {
            label: r1,
            value: o
        };
    }
    let u = n ? e1.querySelector(`input#${CSS.escape(n)}, textarea#${CSS.escape(n)}`) : e1.querySelector("input[type='text'], textarea");
    return u && !u.readOnly ? (u.tagName, o = u.value, {
        label: r1,
        value: o?.trim() || ""
    }) : null;
}
_c16 = Y;
function z() {
    let e1 = {}, t = [
        "WorkExperienceSection",
        "EducationSection",
        "CandidateSkills",
        "CandidateBehaviors",
        "CandidateMotivations",
        "LicensesAndCertificationsSection",
        "CandidateLinkEdit",
        "Questions",
        "ApplicationQuestions",
        "CountryQuestions"
    ], r1 = t.map((e1)=>`not(ancestor::*[@id='${e1}'])`).join(" and "), n = (0, i.getOrderedNodes)(`//div[
      (contains(@class, 'col-md-24') and @data-bind='configurableVisibility: $parent.willingToRelocateConfig')
      or ((contains(@class, 'col-md-8') or contains(@class, 'col-md-16')) and ${r1})
    ]`);
    for (let t of n){
        if (k(t)) continue;
        let r1 = t.querySelectorAll("input, select, textarea");
        if (0 === r1.length) continue;
        let n = H(t);
        n && (e1[n.label] = n.value);
    }
    return e1;
}
function V(e1) {
    let t = {}, r1 = e1.querySelectorAll("div.form-group");
    for (let e1 of r1){
        if (e1.closest("div.collapse:not(.in)")) continue;
        let r1 = e1.querySelector("label"), n = r1?.textContent?.trim() || "";
        if (!n || "Month" === n || "Year (YYYY)" === n) continue;
        if ("From" === n || "To" === n) {
            let r1 = e1.querySelector("select"), o = e1.querySelector("input[placeholder='YYYY'], input[maxlength='4']"), i = r1?.options[r1.selectedIndex]?.textContent?.trim() || "", a = o?.value?.trim() || "";
            t[n] = [
                i,
                a
            ].filter(Boolean).join(" ");
            continue;
        }
        let o = Y(e1);
        o && (t[o.label] = o.value);
    }
    return t;
}
_c17 = V;
let W = 400, G = 300;
async function K() {
    let e1 = document.querySelector("#WorkExperienceSection");
    if (!e1) return [];
    let t = e1.querySelector("ul.listtype");
    if (!t) return [];
    let r1 = Array.from(t.querySelectorAll("li.row, li[data-automation='panel-list-item']")), n = [];
    for (let e1 of r1){
        let t = e1.querySelector("button[data-automation='edit-button']");
        if (!t || t.disabled) continue;
        t.click(), await new Promise((e1)=>setTimeout(e1, W));
        let r1 = e1.querySelector("[data-automation='work-experience-item']");
        if (r1) {
            let e1 = V(r1), t = Object.values(e1).every((e1)=>!String(e1).trim());
            t || n.push(e1);
        }
        let o = e1.querySelector("button[data-automation='cancel-button']");
        o && (o.click(), await new Promise((e1)=>setTimeout(e1, G)));
    }
    return n;
}
_c18 = K;
async function X() {
    let e1 = document.querySelector("#EducationSection");
    if (!e1) return [];
    let t = e1.querySelector("ul.listtype");
    if (!t) return [];
    let r1 = Array.from(t.querySelectorAll("li.row, li[data-automation='panel-list-item']")), n = [];
    for (let e1 of r1){
        let t = e1.querySelector("button[data-automation='edit-button']");
        if (!t || t.disabled) continue;
        t.click(), await new Promise((e1)=>setTimeout(e1, W));
        let r1 = e1.querySelector("[data-automation='work-experience-item'], [data-automation='education-panel']") || e1, o = V(r1), i = Object.values(o).every((e1)=>!String(e1).trim());
        i || n.push(o);
        let a = e1.querySelector("button[data-automation='cancel-button']");
        a && (a.click(), await new Promise((e1)=>setTimeout(e1, G)));
    }
    return n;
}
_c19 = X;
async function J(e1) {
    let t = document.querySelector(`#${e1}`);
    if (!t) return "";
    let r1 = ()=>{
        let e1 = [], r1 = t.querySelectorAll("ul li span div strong, [data-automation='selected-item'] strong[data-automation='skill-label'], ul.listtype > li[data-automation='selected-item'] strong, ul.listtype > li[data-automation='selected-item']");
        if (r1.forEach((t)=>{
            let r1 = (t.textContent || t.innerText || "").trim();
            (r1 = (r1 = r1.replace(/\s*[\r\n]+\s*/g, ", ")).split(",").map((e1)=>e1.trim()).filter((e1)=>"not specified" !== e1.toLowerCase()).join(", ")) && e1.push(r1);
        }), e1.length) return [
            ...new Set(e1)
        ];
        let n = t.querySelectorAll("ul li strong, ul li span");
        return n.forEach((t)=>{
            let r1 = (t.textContent || "").trim();
            (r1 = (r1 = r1.replace(/\s*[\r\n]+\s*/g, ", ")).split(",").map((e1)=>e1.trim()).filter((e1)=>"not specified" !== e1.toLowerCase()).join(", ")) && e1.push(r1);
        }), [
            ...new Set(e1)
        ];
    }, n = r1();
    if (n.length > 0) return n.join(", ");
    let o = t.querySelector("button[data-automation='primary-action-button']");
    if (o) {
        o.click(), await new Promise((e1)=>setTimeout(e1, 300)), n = r1();
        let e1 = t.querySelector("button[data-automation='cancel-button']");
        e1 && (e1.click(), await new Promise((e1)=>setTimeout(e1, U)));
    }
    return n.join(", ");
}
_c20 = J;
async function Q() {
    let e1 = document.querySelector("#LicensesAndCertificationsSection");
    if (!e1) return null;
    let t = e1.querySelector("ul");
    if (!t) return null;
    let r1 = Array.from(t.querySelectorAll("li.row, li[data-automation='panel-list-item'], li")), n = [];
    for (let e1 of r1){
        let t = e1.querySelector("button[data-automation='edit-button']") || e1.querySelector("div.presence-section-header-label.clickable-header") || e1.querySelector("strong");
        if (!t || t instanceof HTMLButtonElement && t.disabled) continue;
        t.click(), await new Promise((e1)=>setTimeout(e1, W));
        let r1 = {}, o = e1.querySelectorAll("div.form-group");
        for (let e1 of o){
            if (q(e1) || e1.querySelector("div.form-group")) continue;
            let t = Y(e1);
            if (t) {
                let e1 = t.label.includes("License") ? t.label : "license" + t.label;
                r1[e1] = t.value;
            }
        }
        let i = Object.values(r1).every((e1)=>!String(e1).trim());
        i || n.push(r1);
        let a = e1.querySelector("button[data-automation='cancel-button']");
        a && (a.click(), await new Promise((e1)=>setTimeout(e1, G)));
    }
    return n.length ? n : null;
}
_c21 = Q;
async function Z() {
    let e1 = document.querySelector("#CandidateLinkEdit");
    if (!e1) return null;
    let t = (0, i.getFirstOrderedNode)("//*[@id='CandidateLinkEdit']//button[@data-automation='primary-action-button' and not(contains(@style, 'display: none'))]");
    if (!t) return null;
    t.click(), await new Promise((e1)=>setTimeout(e1, 300));
    let r1 = (0, i.getOrderedNodes)("//*[@id='CandidateLinkEdit']//div[contains(@class, 'col-sm-14') or contains(@class, 'col-sm-10')]"), n = {};
    for (let e1 of r1){
        let t = Y(e1);
        if (t) {
            let e1 = t.label.includes("Link") ? t.label : "link" + t.label;
            n[e1] = t.value;
        }
    }
    let o = (0, i.getFirstOrderedNode)("//*[@id='CandidateLinkEdit']//button[@data-automation='cancel-button']");
    o && (o.click(), await new Promise((e1)=>setTimeout(e1, U)));
    let a = Object.values(n).every((e1)=>!String(e1).trim());
    return a && Object.keys(n).length > 0 ? null : Object.keys(n).length ? n : null;
}
_c22 = Z;
function ee() {
    let e1 = {}, t = (0, i.getOrderedNodes)("//*[@id='Questions']//div[contains(@class, 'form-group')]");
    for (let r1 of t){
        if (q(r1) || r1.querySelector("div.form-group")) continue;
        let t = Y(r1);
        t && (e1[t.label] = t.value);
    }
    let r1 = (0, i.getOrderedNodes)('//*[@id="Questions"]//div[@data-bind and contains(@data-bind, "visible:")]//*[contains(@class, "form-group")]');
    for (let t of r1){
        if (q(t)) continue;
        let r1 = Y(t);
        r1 && void 0 === e1[r1.label] && (e1[r1.label] = r1.value);
    }
    let n = (0, i.getOrderedNodes)('//*[@id="Questions"]//div[@role="radiogroup" and @aria-labelledby="EmployeeReferral"]');
    for (let t of n){
        if (q(t)) continue;
        let r1 = Y(t);
        r1 && void 0 === e1[r1.label] && (e1[r1.label] = r1.value);
    }
    return e1;
}
function et() {
    let e1 = {}, t = (0, i.getOrderedNodes)("//*[@id='ApplicationQuestions']//div[contains(@class, 'form-group')]");
    for (let r1 of t){
        if (q(r1) || r1.querySelector("div.form-group")) continue;
        let t = Y(r1);
        t && (e1[t.label] = t.value);
    }
    return e1;
}
function er() {
    let e1 = {}, t = (0, i.getOrderedNodes)("//*[@id='CountryQuestions']//div[contains(@class, 'form-group')]");
    for (let r1 of t){
        if (q(r1)) continue;
        let t = Y(r1);
        t && (e1[t.label] = t.value);
    }
    let r1 = document.querySelector('select[data-automation="country-questions-race"]');
    if (r1) {
        let t = document.querySelector(`label[for="${r1.id}"]`)?.textContent?.trim() || "Race", n = r1.options[r1.selectedIndex]?.textContent?.trim() || "";
        e1[t] = n;
    }
    return e1;
}
async function en() {
    let e1 = {};
    Object.assign(e1, z());
    let t = await K();
    t.length && (e1.employment = t);
    let r1 = await X();
    r1.length && (e1.education = r1);
    let n = await J("CandidateSkills");
    n && (e1.Skills = n);
    let o = await J("CandidateBehaviors");
    o && (e1.Behaviors = o);
    let i = await J("CandidateMotivations");
    i && (e1.Motivations = i);
    let a = await Q();
    a && (e1.licensesAndCertifications = a);
    let l = await Z();
    return l && (e1.links = l), Object.assign(e1, ee()), Object.assign(e1, et()), Object.assign(e1, er()), e1;
}
function eo(e1) {
    let t = e1.closest("label");
    if (t) return Array.from(t.childNodes).filter((e1)=>e1.nodeType === Node.TEXT_NODE || "INPUT" !== e1.tagName).map((e1)=>e1.textContent?.trim()).filter(Boolean).join(" ").trim();
    if (e1.id) {
        let t = document.querySelector(`label[for="${e1.id}"]`);
        if (t) return t.textContent?.trim() || "";
    }
    let r1 = e1.nextElementSibling;
    return r1 && r1.textContent?.trim() ? r1.textContent.trim() : e1.value || "";
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22;
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
$RefreshReg$(_c18, "K");
$RefreshReg$(_c19, "X");
$RefreshReg$(_c20, "J");
$RefreshReg$(_c21, "Q");
$RefreshReg$(_c22, "Z");

},{}]},["hneTa","qgxaY"], "qgxaY", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QUUsYUFBYSxTQUFPLEdBQUUsWUFBWSxTQUFPLEdBQUUsU0FBTztBQUFFIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS1iMGM3ZjFkNTZjODViYTJkLmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL3VsdGlwcm8vcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxcdWx0aXByb1xcXFxydWxlcy5qc1wiLFwiYnVuZGxlSWRcIjpcIjZiMzNjYmEyMzc1YWZhOTNcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiBlMGpNT1xyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvdWx0aXByby9ydWxlcy5qc1xyXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyAtPiBjSFVibCAgPT4gIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqICAgfmNvcmUveHBhdGggLT4gYWdFNHUgID0+ICBzcmMvY29yZS94cGF0aC5qc1xyXG4gKi9cclxuXHJcbnZhciBuPWUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO24uZGVmaW5lSW50ZXJvcEZsYWcociksbi5leHBvcnQocixcIlVMVElQUk9fREVTQ1JJUFRJT05fRklFTERfSElOVFwiLCgpPT5hKSxuLmV4cG9ydChyLFwiZXh0cmFjdFVsdGlwcm9UeXBlYWhlYWRPcHRpb25zXCIsKCk9PmMpLG4uZXhwb3J0KHIsXCJleHRyYWN0UnVsZXNcIiwoKT0+Ziksbi5leHBvcnQocixcImdldFVsdGlwcm9WaXNpYmxlU2VjdGlvblwiLCgpPT5nKSxuLmV4cG9ydChyLFwiaXNVbHRpcHJvUmV2aWV3Q29weUxheW91dFwiLCgpPT5iKSxuLmV4cG9ydChyLFwiZ2V0VWx0aXByb1NlY3Rpb25FZGl0b3JzXCIsKCk9PnkpLG4uZXhwb3J0KHIsXCJnZXRVbHRpcHJvU2VjdGlvbkVkaXRvclwiLCgpPT52KSxuLmV4cG9ydChyLFwiZXh0cmFjdEV4cEFuZEVkdVJ1bGVGcm9tRWxlbWVudFwiLCgpPT5BKSxuLmV4cG9ydChyLFwiaXNFbGVtZW50SGlkZGVuXCIsKCk9PmspLG4uZXhwb3J0KHIsXCJnZXRGb3JtU25hcHNob3RcIiwoKT0+ZW4pO3ZhciBvPWUoXCJ+Y29yZS9lbnVtc1wiKSxpPWUoXCJ+Y29yZS94cGF0aFwiKTtsZXQgYT1cIlJldHVybiB0aGlzIGRlc2NyaXB0aW9uIGluIEVuZ2xpc2guIEtlZXAgaXQgd2l0aGluIDIwMDAgY2hhcmFjdGVycyBhbmQgZG8gbm90IGV4Y2VlZCAyMDAwIGNoYXJhY3RlcnMuXCIsbD1cIkxldmVsIG9mIEVkdWNhdGlvbiAvIERlZ3JlZVwiLHM9XCJkZWdyZWVPcHRpb25zXCI7ZnVuY3Rpb24gdShlKXtsZXQgdD1lLmdldEF0dHJpYnV0ZShcImRhdGEtYmluZFwiKXx8XCJcIixyPXQubWF0Y2goL1xcYnR5cGVhaGVhZFxccyo6XFxzKlxce1tcXHNcXFNdKj9cXGJzb3VyY2VcXHMqOlxccyooPzpbXFx3JF0rKD86XFxbW15cXF1dK1xcXSk/XFwuKSooW0EtWmEtel8kXVtcXHckXSopLyk7cmV0dXJuIHI/LlsxXXx8XCJcIn1mdW5jdGlvbiBjKGUsdD1kb2N1bWVudC5zY3JpcHRzKXtpZih1KGUpIT09cylyZXR1cm5bXTtsZXQgcj1SZWdFeHAoYFxcXFxiKD86dmFyfGxldHxjb25zdClcXFxccyske3N9XFxcXHMqPVxcXFxzKihcXFxcW1tcXFxcc1xcXFxTXSo/XFxcXF0pXFxcXHMqO2ApO2ZvcihsZXQgZSBvZiB0KXtsZXQgdD1lLnRleHRDb250ZW50fHxcIlwiLG49dC5tYXRjaChyKT8uWzFdO2lmKG4pdHJ5e2xldCBlPUpTT04ucGFyc2Uobik7cmV0dXJuIEFycmF5LmZyb20obmV3IFNldChlLm1hcChlPT5cInN0cmluZ1wiPT10eXBlb2YgZT8uTmFtZT9lLk5hbWUudHJpbSgpOlwiXCIpLmZpbHRlcihCb29sZWFuKSkpfWNhdGNoe2NvbnNvbGUud2FybihcIltVbHRpcHJvXVtEZWdyZWVUeXBlYWhlYWRdIGNvdWxkIG5vdCBwYXJzZSBzdGF0aWMgb3B0aW9uc1wiKTticmVha319cmV0dXJuW119ZnVuY3Rpb24gZChlLHQpe3JldHVybiBlPT09bCYmXCJjb21ib2JveFwiPT09dC5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpJiZcImxpc3RcIj09PXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1hdXRvY29tcGxldGVcIikmJnUodCk9PT1zfWFzeW5jIGZ1bmN0aW9uIGYoZT17fSl7bGV0IHQ9W10scj1bXSxuPVtdLG89W107dHJ5e2F3YWl0IGUuYmVmb3JlQ29udGFjdEluZm9ybWF0aW9uRXh0cmFjdGlvbj8uKCk7bGV0IGk9YXdhaXQgcCgpO3QucHVzaCguLi5pKSxyPWF3YWl0IE0oKSxuPWF3YWl0IFIoKSxvPWF3YWl0IE8oKSxjb25zb2xlLmluZm8oYFtVbHRpcHJvXVtRdWVzdGlvbnNdIGNhcHR1cmVkIGJlZm9yZSBDb250YWN0IEluZm9ybWF0aW9uIGNhbmNlbDsgY29udGFjdD0ke2kubGVuZ3RofTsgY291bnRyeT0ke3IubGVuZ3RofTsgZ2VuZXJhbD0ke24ubGVuZ3RofTsgYXBwbGljYXRpb249JHtvLmxlbmd0aH1gKX1maW5hbGx5e2F3YWl0IGUuYWZ0ZXJRdWVzdGlvbkV4dHJhY3Rpb24/LigpfWxldCBpPWF3YWl0IHgoKTt0LnB1c2goLi4uaSk7bGV0IGE9YXdhaXQgQygpO3QucHVzaCguLi5hKTtsZXQgbD1hd2FpdCBJKCk7dC5wdXNoKC4uLmwpO2xldCBzPWF3YWl0IEQoKTt0LnB1c2goLi4ucyk7bGV0IHU9YXdhaXQgUCgpO3QucHVzaCguLi51KTtsZXQgYz1hd2FpdCBfKCk7dC5wdXNoKC4uLmMpO2xldCBkPWF3YWl0IEwoKTtyZXR1cm4gdC5wdXNoKC4uLmQpLHQucHVzaCguLi5uKSx0LnB1c2goLi4ubyksdC5wdXNoKC4uLnIpLHR9YXN5bmMgZnVuY3Rpb24gcCgpe2xldCBlPVtdLHQ9W1wiV29ya0V4cGVyaWVuY2VTZWN0aW9uXCIsXCJFZHVjYXRpb25TZWN0aW9uXCIsXCJDYW5kaWRhdGVTa2lsbHNcIixcIkNhbmRpZGF0ZUJlaGF2aW9yc1wiLFwiQ2FuZGlkYXRlTW90aXZhdGlvbnNcIixcIkxpY2Vuc2VzQW5kQ2VydGlmaWNhdGlvbnNTZWN0aW9uXCIsXCJDYW5kaWRhdGVMaW5rRWRpdFwiLFwiUXVlc3Rpb25zXCIsXCJBcHBsaWNhdGlvblF1ZXN0aW9uc1wiLFwiQ291bnRyeVF1ZXN0aW9uc1wiXSxyPXQubWFwKGU9PmBub3QoYW5jZXN0b3I6OipbQGlkPScke2V9J10pYCkuam9pbihcIiBhbmQgXCIpLG49KDAsaS5nZXRPcmRlcmVkTm9kZXMpKGAvL2RpdltcclxuICAgICAgKGNvbnRhaW5zKEBjbGFzcywgJ2NvbC1tZC0yNCcpIGFuZCBAZGF0YS1iaW5kPSdjb25maWd1cmFibGVWaXNpYmlsaXR5OiAkcGFyZW50LndpbGxpbmdUb1JlbG9jYXRlQ29uZmlnJylcclxuICAgICAgb3IgKChjb250YWlucyhAY2xhc3MsICdjb2wtbWQtOCcpIG9yIGNvbnRhaW5zKEBjbGFzcywgJ2NvbC1tZC0xNicpKSBhbmQgJHtyfSlcclxuICAgIF1gKTtmb3IobGV0IHQgb2Ygbil7aWYoayh0KSljb250aW51ZTtsZXQgcj10LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYVwiKTtpZigwPT09ci5sZW5ndGgpY29udGludWU7bGV0IG49QXJyYXkuZnJvbShyKS5zb21lKGU9PlQoZSkpO2lmKG4pe2xldCByPW0odCk7ciYmZS5wdXNoKHIpfX1yZXR1cm4gZX1mdW5jdGlvbiBtKGUpe2lmKGsoZSkpcmV0dXJuIG51bGw7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIik7aWYoIXQpcmV0dXJuIG51bGw7bGV0IHI9dC50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwiO2lmKCFyKXJldHVybiBudWxsO2xldCBuPXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVxdWlyZWRcIiksaT10LmdldEF0dHJpYnV0ZShcImZvclwiKXx8XCJcIixhPUYoZSxpP2BzZWxlY3QjJHtDU1MuZXNjYXBlKGkpfWA6XCJzZWxlY3RcIik7aWYoYSl7bGV0IGU9QXJyYXkuZnJvbShhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIikpLnNsaWNlKDEpLm1hcChlPT5lLnRleHRDb250ZW50Py50cmltKCkpLmZpbHRlcihlPT4hIWUpO3JldHVybnt0eXBlOm8uRklFTERfVFlQRS5TRUxFQ1QsbGFiZWw6cixyZXF1aXJlZDpuLCRsYWJlbDp0LG9wdGlvbnM6ZSwkaW5wdXQ6YX19bGV0IGw9RihlLGk/YGlucHV0W3R5cGU9J2NoZWNrYm94J10jJHtDU1MuZXNjYXBlKGkpfWA6XCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCIpO2lmKGwpcmV0dXJue3R5cGU6by5GSUVMRF9UWVBFLkNIRUNLQk9YLGxhYmVsOnIscmVxdWlyZWQ6biwkbGFiZWw6dCwkaW5wdXQ6bH07bGV0IHM9RihlLGk/YGlucHV0IyR7Q1NTLmVzY2FwZShpKX0sIHRleHRhcmVhIyR7Q1NTLmVzY2FwZShpKX1gOlwiaW5wdXRbdHlwZT0ndGV4dCddLCB0ZXh0YXJlYVwiKTtyZXR1cm4gcz97dHlwZTpvLkZJRUxEX1RZUEUuVEVYVCxsYWJlbDpyLHJlcXVpcmVkOm4sJGxhYmVsOnQsJGlucHV0OnN9Om51bGx9bGV0IGg9e2VkdWNhdGlvbjpbXCIjRWR1Y2F0aW9uU2VjdGlvblwiLFwiW2RhdGEtYXV0b21hdGlvbj0nZWR1Y2F0aW9uLXNlY3Rpb24nXVwiXSxlbXBsb3ltZW50OltcIiNXb3JrRXhwZXJpZW5jZVNlY3Rpb25cIixcIltkYXRhLWF1dG9tYXRpb249J3dvcmstZXhwZXJpZW5jZS1zZWN0aW9uJ11cIl19O2Z1bmN0aW9uIGcoZSl7Zm9yKGxldCB0IG9mIGhbZV0pe2xldCBlPUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0KSkuZmluZChlPT4hayhlKSk7aWYoZSlyZXR1cm4gZX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBiKGUpe3JldHVybiFlLnF1ZXJ5U2VsZWN0b3IoXCJ1bC5saXN0dHlwZVwiKX1mdW5jdGlvbiB5KGUpe2xldCB0PUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKCd1bC5saXN0dHlwZSA+IGxpW2RhdGEtYXV0b21hdGlvbj1cInBhbmVsLWxpc3QtaXRlbVwiXScpKTtpZih0Lmxlbmd0aD4wKXJldHVybiB0O2xldCByPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYXV0b21hdGlvbj0nd29yay1leHBlcmllbmNlLWl0ZW0nXSwgW2RhdGEtYXV0b21hdGlvbj0nZWR1Y2F0aW9uLXBhbmVsJ10sIFtkYXRhLWF1dG9tYXRpb249J3BhbmVsLWxpc3QtaXRlbSddXCIpKS5maWx0ZXIodD0+dCE9PWUpLm1hcChlPT5lLmNsb3Nlc3QoXCJbZGF0YS1hdXRvbWF0aW9uPSdwYW5lbC1saXN0LWl0ZW0nXVwiKT8/ZSk7cmV0dXJuIEFycmF5LmZyb20obmV3IFNldChyKSl9ZnVuY3Rpb24gdihlLHQ9W10pe2xldCByPXkoZSk7cmV0dXJuIHQubGVuZ3RoPjA/ci5maW5kKGU9PiF0LmluY2x1ZGVzKGUpKT8/bnVsbDpyWzBdPz9udWxsfWZ1bmN0aW9uIHcoZSl7cmV0dXJuIGUucXVlcnlTZWxlY3RvcihcImJ1dHRvbltkYXRhLWF1dG9tYXRpb249J3ByaW1hcnktYWN0aW9uLWJ1dHRvbiddXCIpfWFzeW5jIGZ1bmN0aW9uIFMoZSx0LHIpe2xldCBuPWU9PmUuZmlsdGVyKGU9PiFrKGUpKS5tYXAoQSkuZmlsdGVyKGU9PiEhZSk7aWYoYihlKSlyZXR1cm4gbihBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcImRpdi5mb3JtLWdyb3VwXCIpKS5maWx0ZXIoZT0+IWUucXVlcnlTZWxlY3RvcihcImRpdi5mb3JtLWdyb3VwXCIpKSk7dC5jbGljaygpLGF3YWl0IG5ldyBQcm9taXNlKGU9PnNldFRpbWVvdXQoZSwyMDApKTtsZXQgbz1uKCgwLGkuZ2V0T3JkZXJlZE5vZGVzKShyKSksYT1lLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25bZGF0YS1hdXRvbWF0aW9uPSdjYW5jZWwtYnV0dG9uJ11cIik7cmV0dXJuIGEmJihhLmNsaWNrKCksYXdhaXQgbmV3IFByb21pc2UoZT0+c2V0VGltZW91dChlLDIwMCkpKSxvfWFzeW5jIGZ1bmN0aW9uIEUoZSx0LHIsbil7bGV0IG89ZyhlKTtpZighbylyZXR1cm5bXTtsZXQgaT13KG8pO2lmKCFpKXJldHVybltdO2xldCBhPWF3YWl0IFMobyxpLG4pLGw9e2xhYmVsOnQsdHlwZTpyLHJlcXVpcmVkOiEwLCRpbnB1dDppLGNoaWxkcmVuOmEsb3B0aW9uczphLm1hcChlPT57bGV0IHQ9e3R5cGU6ZS50eXBlLGxhYmVsOmUubGFiZWx9O3JldHVybiBlLm9wdGlvbnMmJmUub3B0aW9ucy5sZW5ndGg+MCYmKHQub3B0aW9ucz1lLm9wdGlvbnMpLGUuZGVzY3JpcHRpb24mJih0LmRlc2NyaXB0aW9uPWUuZGVzY3JpcHRpb24pLHR9KX07cmV0dXJuW2xdfWZ1bmN0aW9uIHgoKXtyZXR1cm4gRShcImVtcGxveW1lbnRcIixcIkVtcGxveW1lbnRcIixvLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVCxcIi8vKltAaWQ9J1dvcmtFeHBlcmllbmNlU2VjdGlvbiddLy8qW0BkYXRhLWF1dG9tYXRpb249J3dvcmstZXhwZXJpZW5jZS1pdGVtJ10vL2Rpdltjb250YWlucyhAY2xhc3MsICdjb2wtbWQtMTInKSBvciBjb250YWlucyhAY2xhc3MsICdjb2wtbWQtMjQnKV1bbm90KGFuY2VzdG9yOjpkaXZbY29udGFpbnMoQGNsYXNzLCAnY29sbGFwc2UnKSBhbmQgQGFyaWEtZXhwYW5kZWQ9J2ZhbHNlJ10pXVwiKX1mdW5jdGlvbiBDKCl7cmV0dXJuIEUoXCJlZHVjYXRpb25cIixcIkVkdWNhdGlvblwiLG8uRklFTERfVFlQRS5FRFVDQVRJT04sXCIvLypbQGRhdGEtYXV0b21hdGlvbj0nZWR1Y2F0aW9uLXBhbmVsJ10vL2Rpdltjb250YWlucyhAY2xhc3MsICdjb2wtbWQtMTInKSBvciBjb250YWlucyhAY2xhc3MsICdjb2wtbWQtMjQnKV1cIil9ZnVuY3Rpb24gQShlKXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbFwiKTtpZighdClyZXR1cm4gbnVsbDtsZXQgcj10LnRleHRDb250ZW50Py50cmltKCl8fFwiXCI7aWYoIXIpcmV0dXJuIG51bGw7bGV0IG49dC5jbGFzc0xpc3QuY29udGFpbnMoXCJyZXF1aXJlZFwiKSxpPWUucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKSxsPWUucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J3RleHQnXVwiKTtpZihpJiZsJiYoXCJUb1wiPT09cnx8XCJGcm9tXCI9PT1yKSl7bGV0IGk9XCJNb250aCBZZWFyKFlZWVkpXCI7cmV0dXJue3R5cGU6by5GSUVMRF9UWVBFLkRBVEUsbGFiZWw6cixyZXF1aXJlZDpuLCRsYWJlbDp0LCRpbnB1dDplLGRlc2NyaXB0aW9uOml9fWlmKGkmJiFpLmRpc2FibGVkKXtsZXQgZT1BcnJheS5mcm9tKGkucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKSkuc2xpY2UoMSkubWFwKGU9PmUudGV4dENvbnRlbnQ/LnRyaW0oKSkuZmlsdGVyKGU9PiEhZSk7cmV0dXJue3R5cGU6by5GSUVMRF9UWVBFLlNFTEVDVCxsYWJlbDpyLHJlcXVpcmVkOm4sJGxhYmVsOnQsb3B0aW9uczplLCRpbnB1dDppfX1sZXQgcz1lLnF1ZXJ5U2VsZWN0b3IoXCJ1a2ctZGF0ZS1pbnB1dC10ZXh0XCIpO2lmKHMpcmV0dXJue3R5cGU6by5GSUVMRF9UWVBFLlRFWFQsbGFiZWw6cixyZXF1aXJlZDpuLCRsYWJlbDp0LCRpbnB1dDpzfTtsZXQgdT1lLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSd0ZXh0J10sIHRleHRhcmVhXCIpO2lmKHUmJiF1LnJlYWRPbmx5JiYhdS5kaXNhYmxlZCl7aWYoXCJJTlBVVFwiPT09dS50YWdOYW1lJiZkKHIsdSkpe2xldCBlPWModSk7cmV0dXJuIGUubGVuZ3RoPjA/Y29uc29sZS5pbmZvKFwiW1VsdGlwcm9dW0RlZ3JlZVR5cGVhaGVhZF0gY2FwdHVyZWQgc3RhdGljIGNhbmRpZGF0ZXNcIix7b3B0aW9uQ291bnQ6ZS5sZW5ndGh9KTpjb25zb2xlLndhcm4oXCJbVWx0aXByb11bRGVncmVlVHlwZWFoZWFkXSBzdGF0aWMgY2FuZGlkYXRlIGNhdGFsb2cgd2FzIHVuYXZhaWxhYmxlXCIpLHt0eXBlOm8uRklFTERfVFlQRS5TRUxFQ1QsbGFiZWw6cixyZXF1aXJlZDpuLCRsYWJlbDp0LCRpbnB1dDp1LG9wdGlvbnM6ZSxvcHRpb25zTW9kZTpcImNvbXBsZXRlXCJ9fWxldCBlPVwiRGVzY3JpcHRpb25cIj09PXI/YTp2b2lkIDA7cmV0dXJue3R5cGU6by5GSUVMRF9UWVBFLlRFWFQsbGFiZWw6cixyZXF1aXJlZDpuLCRsYWJlbDp0LCRpbnB1dDp1LC4uLmU/e2Rlc2NyaXB0aW9uOmV9Ont9fX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBrKGUpe2lmKFwibm9uZVwiPT09ZS5zdHlsZS5kaXNwbGF5fHxlLmNsYXNzTGlzdC5jb250YWlucyhcImNvbGxhcHNlXCIpJiYhZS5jbGFzc0xpc3QuY29udGFpbnMoXCJpblwiKSlyZXR1cm4hMDtsZXQgdD1lLmNsb3Nlc3QoXCJbc3R5bGUqPSdkaXNwbGF5OiBub25lJ10sIC5jb2xsYXBzZTpub3QoLmluKVwiKTtyZXR1cm4hIXR9ZnVuY3Rpb24gVChlKXtpZihrKGUpKXJldHVybiExO2lmKGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50JiYoXCJjaGVja2JveFwiPT09ZS50eXBlfHxcInJhZGlvXCI9PT1lLnR5cGUpKXJldHVybiFlLmRpc2FibGVkO2xldCB0PWUscj1lLmhhc0F0dHJpYnV0ZShcInJlYWRvbmx5XCIpJiYoXCJyZWFkb25seVwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJyZWFkb25seVwiKXx8XCJ0cnVlXCI9PT1lLmdldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIpKTtyZXR1cm4hciYmIXQuZGlzYWJsZWR9ZnVuY3Rpb24gRihlLHQpe3JldHVybiBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbCh0KSkuZmluZChlPT5UKGUpKT8/bnVsbH1hc3luYyBmdW5jdGlvbiBJKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNDYW5kaWRhdGVTa2lsbHNcIik7aWYoIWUpcmV0dXJuW107bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwiZGl2W2NsYXNzPSdwYW5lbC1oZWFkaW5nJ11cIikscj1lLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25bZGF0YS1hdXRvbWF0aW9uPSdwcmltYXJ5LWFjdGlvbi1idXR0b24nXVwiKTtpZighcilyZXR1cm5bXTtsZXQgbj1lLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtpZighbilyZXR1cm5bXTtsZXQgaT17bGFiZWw6XCJTa2lsbHNcIix0eXBlOm8uRklFTERfVFlQRS5URVhULHJlcXVpcmVkOiExLCRsYWJlbDp0LCRpbnB1dDpufTtyZXR1cm5baV19YXN5bmMgZnVuY3Rpb24gaihlLHQpe2xldCByPSExLG49ZS5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpO258fCF0fHx0LmRpc2FibGVkfHwodC5jbGljaygpLHI9ITAsYXdhaXQgbmV3IFByb21pc2UoZT0+c2V0VGltZW91dChlLDMwMCkpLG49ZS5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpKTtsZXQgbz1uP0FycmF5LmZyb20obi5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpKS5tYXAoZT0+ZS50ZXh0Q29udGVudD8udHJpbSgpKS5maWx0ZXIoZT0+ISFlKTpbXTtpZihyKXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25bZGF0YS1hdXRvbWF0aW9uPSdjYW5jZWwtYnV0dG9uJ11cIik7dCYmKHQuY2xpY2soKSxhd2FpdCBuZXcgUHJvbWlzZShlPT5zZXRUaW1lb3V0KGUsMzAwKSkpfXJldHVybiBvfWFzeW5jIGZ1bmN0aW9uIEQoKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0NhbmRpZGF0ZUJlaGF2aW9yc1wiKTtpZighZSlyZXR1cm5bXTtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25bZGF0YS1hdXRvbWF0aW9uPSdwcmltYXJ5LWFjdGlvbi1idXR0b24nXVwiKTtpZighdClyZXR1cm5bXTtsZXQgcj1lLnF1ZXJ5U2VsZWN0b3IoXCJkaXZbY2xhc3M9J3BhbmVsLWhlYWRpbmcnXVwiKSxuPWF3YWl0IGooZSx0KSxpPXtsYWJlbDpcIkJlaGF2aW9yc1wiLHR5cGU6by5GSUVMRF9UWVBFLk1VTFRJX1NFTEVDVCxyZXF1aXJlZDohMSwkbGFiZWw6ciwkaW5wdXQ6ZSxvcHRpb25zOm59O3JldHVybltpXX1hc3luYyBmdW5jdGlvbiBQKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNDYW5kaWRhdGVNb3RpdmF0aW9uc1wiKTtpZighZSlyZXR1cm5bXTtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25bZGF0YS1hdXRvbWF0aW9uPSdwcmltYXJ5LWFjdGlvbi1idXR0b24nXVwiKTtpZighdClyZXR1cm5bXTtsZXQgcj1lLnF1ZXJ5U2VsZWN0b3IoXCJkaXZbY2xhc3M9J3BhbmVsLWhlYWRpbmcnXVwiKSxuPWF3YWl0IGooZSx0KSxpPXtsYWJlbDpcIk1vdGl2YXRpb25zXCIsdHlwZTpvLkZJRUxEX1RZUEUuTVVMVElfU0VMRUNULHJlcXVpcmVkOiExLCRpbnB1dDplLCRsYWJlbDpyLG9wdGlvbnM6bn07cmV0dXJuW2ldfWFzeW5jIGZ1bmN0aW9uIF8oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0xpY2Vuc2VzQW5kQ2VydGlmaWNhdGlvbnNTZWN0aW9uXCIpO2lmKCFlfHxrKGUpKXJldHVybltdO2xldCB0PSgwLGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoXCIvLypbQGlkPSdMaWNlbnNlc0FuZENlcnRpZmljYXRpb25zU2VjdGlvbiddLy9idXR0b25bQGRhdGEtYXV0b21hdGlvbj0ncHJpbWFyeS1hY3Rpb24tYnV0dG9uJ11cIik7aWYoIXQpcmV0dXJuW107dC5jbGljaygpLGF3YWl0IG5ldyBQcm9taXNlKGU9PnNldFRpbWVvdXQoZSwzMDApKTtsZXQgcj0oMCxpLmdldE9yZGVyZWROb2RlcykoXCIvLypbQGlkPSdMaWNlbnNlc0FuZENlcnRpZmljYXRpb25zU2VjdGlvbiddLy9kaXZbY29udGFpbnMoQGNsYXNzLCAnY29sLW1kLTE2Jykgb3IgY29udGFpbnMoQGNsYXNzLCAnY29sLW1kLTgnKV1cIiksbj1bXTtmb3IobGV0IGUgb2Ygcil7bGV0IHQ9ZS5jbG9zZXN0KFwiZGl2LmNvbGxhcHNlXCIpO2lmKCF0fHx0LmNsYXNzTGlzdC5jb250YWlucyhcImluXCIpKXtpZihlLnF1ZXJ5U2VsZWN0b3IoXCJkaXYuZm9ybS1ncm91cFwiKSl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwiZGl2LmZvcm0tZ3JvdXBcIik7aWYodCl7bGV0IGU9JCh0KTtlLmxhYmVsJiYhZS5sYWJlbC5pbmNsdWRlcyhcIkxpY2Vuc2VcIikmJihlLmxhYmVsPVwibGljZW5zZVwiK2UubGFiZWwpLGUmJihlLl9fdWx0aXByb0RpYWxvZ1NlY3Rpb249XCJjZXJ0aWZpY2F0aW9uc1wiLG4ucHVzaChlKSl9fWVsc2V7bGV0IHQ9JChlKTt0JiYodC5fX3VsdGlwcm9EaWFsb2dTZWN0aW9uPVwiY2VydGlmaWNhdGlvbnNcIixuLnB1c2godCkpfX19bGV0IG89KDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlKShcIi8vKltAaWQ9J0xpY2Vuc2VzQW5kQ2VydGlmaWNhdGlvbnNTZWN0aW9uJ10vL2J1dHRvbltAZGF0YS1hdXRvbWF0aW9uPSdjYW5jZWwtYnV0dG9uJ11cIik7cmV0dXJuIG8mJihvLmNsaWNrKCksYXdhaXQgbmV3IFByb21pc2UoZT0+c2V0VGltZW91dChlLDIwMCkpKSxufWFzeW5jIGZ1bmN0aW9uIEwoKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0NhbmRpZGF0ZUxpbmtFZGl0XCIpO2lmKCFlfHxrKGUpKXJldHVybltdO2xldCB0PSgwLGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoXCIvLypbQGlkPSdDYW5kaWRhdGVMaW5rRWRpdCddLy9idXR0b25bQGRhdGEtYXV0b21hdGlvbj0ncHJpbWFyeS1hY3Rpb24tYnV0dG9uJyBhbmQgbm90KGNvbnRhaW5zKEBzdHlsZSwgJ2Rpc3BsYXk6IG5vbmUnKSldXCIpO2lmKCF0KXJldHVybltdO3QuY2xpY2soKSxhd2FpdCBuZXcgUHJvbWlzZShlPT5zZXRUaW1lb3V0KGUsMzAwKSk7bGV0IHI9KDAsaS5nZXRPcmRlcmVkTm9kZXMpKFwiLy8qW0BpZD0nQ2FuZGlkYXRlTGlua0VkaXQnXS8vZGl2W2NvbnRhaW5zKEBjbGFzcywgJ2NvbC1zbS0xNCcpIG9yIGNvbnRhaW5zKEBjbGFzcywgJ2NvbC1zbS0xMCcpXVwiKSxuPVtdO2ZvcihsZXQgZSBvZiByKXtsZXQgdD0kKGUpO3Q/LmxhYmVsJiYhdC5sYWJlbC5pbmNsdWRlcyhcIkxpbmtcIikmJih0LmxhYmVsPVwibGlua1wiK3QubGFiZWwpLHQmJih0Ll9fdWx0aXByb0RpYWxvZ1NlY3Rpb249XCJsaW5rc1wiLG4ucHVzaCh0KSl9bGV0IG89KDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlKShcIi8vKltAaWQ9J0NhbmRpZGF0ZUxpbmtFZGl0J10vL2J1dHRvbltAZGF0YS1hdXRvbWF0aW9uPSdjYW5jZWwtYnV0dG9uJ11cIik7cmV0dXJuIG8mJihvLmNsaWNrKCksYXdhaXQgbmV3IFByb21pc2UoZT0+c2V0VGltZW91dChlLDIwMCkpKSxufWFzeW5jIGZ1bmN0aW9uIFIoKXtsZXQgZT1bXSx0PSgwLGkuZ2V0T3JkZXJlZE5vZGVzKShcIi8vKltAaWQ9J1F1ZXN0aW9ucyddLy9kaXZbY29udGFpbnMoQGNsYXNzLCAnZm9ybS1ncm91cCcpXVwiKTtmb3IobGV0IHIgb2YgdCl7aWYocShyKXx8ci5xdWVyeVNlbGVjdG9yKFwiZGl2LmZvcm0tZ3JvdXBcIikpY29udGludWU7bGV0IHQ9JChyKTt0JiZlLnB1c2godCl9bGV0IHI9KDAsaS5nZXRPcmRlcmVkTm9kZXMpKCcvLypbQGlkPVwiUXVlc3Rpb25zXCJdLy9kaXZbQGRhdGEtYmluZCBhbmQgY29udGFpbnMoQGRhdGEtYmluZCwgXCJ2aXNpYmxlOlwiKV0vLypbY29udGFpbnMoQGNsYXNzLCBcImZvcm0tZ3JvdXBcIildJyk7Zm9yKGxldCB0IG9mIHIpe2lmKHEodCkpY29udGludWU7bGV0IHI9JCh0KTtpZihyKXtsZXQgdD1lLmZpbmQoZT0+ZS5sYWJlbD09PXIubGFiZWwpO3R8fGUucHVzaChyKX19bGV0IG49KDAsaS5nZXRPcmRlcmVkTm9kZXMpKCcvLypbQGlkPVwiUXVlc3Rpb25zXCJdLy9kaXZbQHJvbGU9XCJyYWRpb2dyb3VwXCIgYW5kIEBhcmlhLWxhYmVsbGVkYnk9XCJFbXBsb3llZVJlZmVycmFsXCJdJyk7Zm9yKGxldCB0IG9mIG4pe2lmKHEodCkpY29udGludWU7bGV0IHI9JCh0KTtpZihyKXtsZXQgdD1lLmZpbmQoZT0+ZS5sYWJlbD09PXIubGFiZWwpO3R8fGUucHVzaChyKX19cmV0dXJuIGV9YXN5bmMgZnVuY3Rpb24gTygpe2xldCBlPVtdLHQ9KDAsaS5nZXRPcmRlcmVkTm9kZXMpKFwiLy8qW0BpZD0nQXBwbGljYXRpb25RdWVzdGlvbnMnXS8vZGl2W2NvbnRhaW5zKEBjbGFzcywgJ2Zvcm0tZ3JvdXAnKV1cIik7Zm9yKGxldCByIG9mIHQpe2lmKHEocil8fHIucXVlcnlTZWxlY3RvcihcImRpdi5mb3JtLWdyb3VwXCIpKWNvbnRpbnVlO2xldCB0PSQocik7dCYmZS5wdXNoKHQpfXJldHVybiBlfWFzeW5jIGZ1bmN0aW9uIE0oKXtsZXQgZT1bXSx0PSgwLGkuZ2V0T3JkZXJlZE5vZGVzKShcIi8vKltAaWQ9J0NvdW50cnlRdWVzdGlvbnMnXS8vZGl2W2NvbnRhaW5zKEBjbGFzcywgJ2Zvcm0tZ3JvdXAnKV1cIik7Zm9yKGxldCByIG9mIHQpe2lmKHEocikpY29udGludWU7bGV0IHQ9JChyKTt0JiZlLnB1c2godCl9bGV0IHI9TigpO3JldHVybiByJiZlLnB1c2gociksZX1mdW5jdGlvbiBOKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0W2RhdGEtYXV0b21hdGlvbj1cImNvdW50cnktcXVlc3Rpb25zLXJhY2VcIl0nKTtpZighZSlyZXR1cm4gbnVsbDtsZXQgdD1lLmdldEF0dHJpYnV0ZShcImlkXCIpLHI9dD9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke3R9XCJdYCk6bnVsbCxuPUIoZSk7cmV0dXJue3R5cGU6by5GSUVMRF9UWVBFLlNFTEVDVCxsYWJlbDpcIlJhY2VcIixyZXF1aXJlZDohMCwkbGFiZWw6cixvcHRpb25zOm4sJGlucHV0OmV9fWZ1bmN0aW9uICQoZSl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIikscj1cIlwiLG49ITE7aWYodCYmKHI9dC50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwiLHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVxdWlyZWRcIikmJihuPSEwKSksIXIpe2xldCB0PWUucXVlcnlTZWxlY3RvcihcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpO2lmKHQpe2xldCBlPXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKT8udHJpbSgpO2UmJihyPWUpfX1pZighcilyZXR1cm4gbnVsbDtsZXQgaT10Py5nZXRBdHRyaWJ1dGUoXCJmb3JcIil8fFwiXCIsYT1udWxsO2lmKGkmJihhPWUucXVlcnlTZWxlY3Rvcihgc2VsZWN0IyR7Q1NTLmVzY2FwZShpKX1gKSksYXx8KGE9ZS5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpKSxhJiYhYS5kaXNhYmxlZCl7bGV0IGk9QihhKSxsPWUucXVlcnlTZWxlY3RvcihcImRpdi5jaGVja2JveFwiKTtpZihsKXtsZXQgZT1sLnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbFwiKSxzPWU/LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuOm5vdCguc3Itb25seSlcIik7aWYocyl7bGV0IGU9cy50ZXh0Q29udGVudD8ucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCl8fFwiXCI7aWYoZSlyZXR1cm4gaS5wdXNoKGUpLHt0eXBlOm8uRklFTERfVFlQRS5NVUxUSV9TRUxFQ1QsbGFiZWw6cixyZXF1aXJlZDpuLCRsYWJlbDp0LG9wdGlvbnM6aSwkaW5wdXQ6YX19fXJldHVybnt0eXBlOm8uRklFTERfVFlQRS5TRUxFQ1QsbGFiZWw6cixyZXF1aXJlZDpuLCRsYWJlbDp0LG9wdGlvbnM6aSwkaW5wdXQ6YX19bGV0IGw9ZS5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cInJhZGlvZ3JvdXBcIl0nKTtpZihsfHxcInJhZGlvZ3JvdXBcIiE9PWUuZ2V0QXR0cmlidXRlKFwicm9sZVwiKXx8KGw9ZSksbCl7bGV0IGU9QXJyYXkuZnJvbShsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpKTtpZihlLmxlbmd0aD4wKXtsZXQgaT1bXTtmb3IobGV0IHQgb2YgZSl7bGV0IGU9dC5jbG9zZXN0KFwibGFiZWxcIil8fHQucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpO2lmKGUpe2xldCByPWUudGV4dENvbnRlbnQ/LnRyaW0oKXx8dC52YWx1ZTtyJiZpLnB1c2gocil9ZWxzZXtsZXQgZT10Lm5leHRFbGVtZW50U2libGluZztpZihlJiZcIlNQQU5cIj09PWUudGFnTmFtZSl7bGV0IHQ9ZS50ZXh0Q29udGVudD8udHJpbSgpO3QmJmkucHVzaCh0KX19fXJldHVybnt0eXBlOm8uRklFTERfVFlQRS5DSEVDS0JPWCxsYWJlbDpyLHJlcXVpcmVkOm4sJGxhYmVsOnQsb3B0aW9uczppLCRjaGVja2JveHM6ZX19fWxldCBzPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwibGFiZWwucmFkaW8sIGRpdltyb2xlPSdyYWRpb2dyb3VwJ10gPiBkaXYgPiBsYWJlbFwiKSk7aWYocy5sZW5ndGg+MCl7bGV0IGU9cy5tYXAoZT0+ZS50ZXh0Q29udGVudD8udHJpbSgpKS5maWx0ZXIoZT0+ISFlKSxpPXMubWFwKGU9PmUucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J3JhZGlvJ11cIikpLmZpbHRlcihlPT4hIWUpO2lmKGkubGVuZ3RoPjApcmV0dXJue3R5cGU6by5GSUVMRF9UWVBFLkNIRUNLQk9YLGxhYmVsOnIscmVxdWlyZWQ6biwkbGFiZWw6dCxvcHRpb25zOmUsJGNoZWNrYm94czppfX1sZXQgdT1lLnF1ZXJ5U2VsZWN0b3IoXCJ1a2ctZGF0ZS1pbnB1dC10ZXh0XCIpO2lmKHUpcmV0dXJue3R5cGU6by5GSUVMRF9UWVBFLkRBVEUsbGFiZWw6cixyZXF1aXJlZDpuLCRsYWJlbDp0LCRpbnB1dDp1fTtsZXQgYz1udWxsO3JldHVybihpJiYoYz1lLnF1ZXJ5U2VsZWN0b3IoYGlucHV0IyR7Q1NTLmVzY2FwZShpKX0sIHRleHRhcmVhIyR7Q1NTLmVzY2FwZShpKX1gKSksY3x8KGM9ZS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ndGV4dCddLCB0ZXh0YXJlYVwiKSksYyYmIWMucmVhZE9ubHkpP3t0eXBlOm8uRklFTERfVFlQRS5URVhULGxhYmVsOnIscmVxdWlyZWQ6biwkbGFiZWw6dCwkaW5wdXQ6Y306bnVsbH1mdW5jdGlvbiBCKGUpe2xldCB0PUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpKTtyZXR1cm4gdC5zbGljZSgxKS5tYXAoZT0+ZS50ZXh0Q29udGVudD8udHJpbSgpKS5maWx0ZXIoZT0+ISFlKX1mdW5jdGlvbiBxKGUpe2lmKFwibm9uZVwiPT09ZS5zdHlsZS5kaXNwbGF5fHxlLmNsYXNzTGlzdC5jb250YWlucyhcImNvbGxhcHNlXCIpJiYhZS5jbGFzc0xpc3QuY29udGFpbnMoXCJpblwiKSlyZXR1cm4hMDtsZXQgdD1lLmNsb3Nlc3QoXCJbc3R5bGUqPSdkaXNwbGF5OiBub25lJ10sIC5jb2xsYXBzZTpub3QoLmluKVwiKTtyZXR1cm4hIXR9bGV0IFU9MjAwO2Z1bmN0aW9uIEgoZSl7aWYoayhlKSlyZXR1cm4gbnVsbDtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbFwiKTtpZighdClyZXR1cm4gbnVsbDtsZXQgcj10LnRleHRDb250ZW50Py50cmltKCl8fFwiXCI7aWYoIXIpcmV0dXJuIG51bGw7bGV0IG49dC5nZXRBdHRyaWJ1dGUoXCJmb3JcIil8fFwiXCIsbz1cIlwiLGk9RihlLG4/YHNlbGVjdCMke0NTUy5lc2NhcGUobil9YDpcInNlbGVjdFwiKTtpZihpKXJldHVybntsYWJlbDpyLHZhbHVlOm89aS5vcHRpb25zW2kuc2VsZWN0ZWRJbmRleF0/LnRleHRDb250ZW50Py50cmltKCl8fFwiXCJ9O2xldCBhPUYoZSxuP2BpbnB1dFt0eXBlPSdjaGVja2JveCddIyR7Q1NTLmVzY2FwZShuKX1gOlwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiKTtpZihhKXJldHVybntsYWJlbDpyLHZhbHVlOm89YS5jaGVja2VkP1wiWWVzXCI6XCJOb1wifTtsZXQgbD1GKGUsbj9gaW5wdXQjJHtDU1MuZXNjYXBlKG4pfSwgdGV4dGFyZWEjJHtDU1MuZXNjYXBlKG4pfWA6XCJpbnB1dFt0eXBlPSd0ZXh0J10sIHRleHRhcmVhXCIpO2lmKGwpe2lmKFwiVEVYVEFSRUFcIj09PWwudGFnTmFtZSlvPWwudmFsdWV8fFwiXCI7ZWxzZXtsZXQgZT1sO2UudHlwZSxvPWUudmFsdWV8fFwiXCJ9cmV0dXJue2xhYmVsOnIsdmFsdWU6b319bGV0IHM9ZS5xdWVyeVNlbGVjdG9yKFwidWtnLWRhdGUtaW5wdXQtdGV4dFwiKTtpZihzKXtsZXQgZT1zLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2FyaWEtbGFiZWw9XCJNb250aFwiXScpLHQ9cy5xdWVyeVNlbGVjdG9yKCdpbnB1dFthcmlhLWxhYmVsPVwiRGF5XCJdJyksbj1zLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2FyaWEtbGFiZWw9XCJZZWFyXCJdJyk7cmV0dXJuIGUmJnQmJm4mJihvPVtlLnZhbHVlLHQudmFsdWUsbi52YWx1ZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIvXCIpfHxcIlwiKSx7bGFiZWw6cix2YWx1ZTpvfX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBZKGUpe2xldCB0PWUucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpLHI9dD8udGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIjtpZighcil7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwiaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWFcIik7cj10Py5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpPy50cmltKCl8fFwiXCJ9aWYoIXIpcmV0dXJuIG51bGw7bGV0IG49dD8uZ2V0QXR0cmlidXRlKFwiZm9yXCIpfHxcIlwiLG89XCJcIixpPShuP2UucXVlcnlTZWxlY3Rvcihgc2VsZWN0IyR7Q1NTLmVzY2FwZShuKX1gKTpudWxsKXx8ZS5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpO2lmKGkmJiFpLmRpc2FibGVkKXtsZXQgdD1pLm9wdGlvbnNbaS5zZWxlY3RlZEluZGV4XTtvPXQ/LnRleHRDb250ZW50Py50cmltKCl8fFwiXCI7bGV0IG49IXQ/LnZhbHVlfHwvY2hvb3NlL2kudGVzdChvKTtpZihufHwhbyl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKCdkaXYuY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQnKTtpZih0KXtsZXQgcj10LmNsb3Nlc3QoXCJsYWJlbFwiKXx8KHQuaWQ/ZS5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke3QuaWR9XCJdYCk6bnVsbCksbj1yPy5xdWVyeVNlbGVjdG9yKFwic3Bhbjpub3QoLnNyLW9ubHkpXCIpLGk9KG4/LnRleHRDb250ZW50fHxyPy50ZXh0Q29udGVudHx8XCJcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCk7aSYmKG89aSl9fXJldHVybntsYWJlbDpyLHZhbHVlOm99fWxldCBhPWUucXVlcnlTZWxlY3RvcignW3JvbGU9XCJyYWRpb2dyb3VwXCJdJyl8fChcInJhZGlvZ3JvdXBcIj09PWUuZ2V0QXR0cmlidXRlKFwicm9sZVwiKT9lOm51bGwpO2lmKGEpe2xldCBlPWEucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQnKTtyZXR1cm4gZSYmKG89ZW8oZSkpLHtsYWJlbDpyLHZhbHVlOm99fWxldCBsPWUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7aWYobC5sZW5ndGg+MCl7bGV0IGU9QXJyYXkuZnJvbShsKS5maW5kKGU9PmUuY2hlY2tlZCk7cmV0dXJuIGUmJihvPWVvKGUpKSx7bGFiZWw6cix2YWx1ZTpvfX1sZXQgcz1lLnF1ZXJ5U2VsZWN0b3IoXCJ1a2ctZGF0ZS1pbnB1dC10ZXh0XCIpO2lmKHMpe2xldCBlPWU9PntsZXQgdD1gaW5wdXRbYXJpYS1sYWJlbD1cIiR7ZX1cIl1gO3JldHVybiBzLnF1ZXJ5U2VsZWN0b3IodCl8fHMuc2hhZG93Um9vdD8ucXVlcnlTZWxlY3Rvcih0KX0sdD1lKFwiTW9udGhcIiksbj1lKFwiRGF5XCIpLGk9ZShcIlllYXJcIik7aWYodD8udmFsdWUmJm4/LnZhbHVlJiZpPy52YWx1ZSYmKG89YCR7dC52YWx1ZX0vJHtuLnZhbHVlfS8ke2kudmFsdWV9YCksIW8pe2xldCBlPXMudmFsdWV8fHMuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil8fFwiXCI7aWYoZSl7bGV0IHQ9ZS5tYXRjaCgvXihcXGR7NH0pLShcXGR7Mn0pLShcXGR7Mn0pJC8pO289dD9gJHt0WzJdfS8ke3RbM119LyR7dFsxXX1gOmV9fXJldHVybntsYWJlbDpyLHZhbHVlOm99fWxldCB1PW4/ZS5xdWVyeVNlbGVjdG9yKGBpbnB1dCMke0NTUy5lc2NhcGUobil9LCB0ZXh0YXJlYSMke0NTUy5lc2NhcGUobil9YCk6ZS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ndGV4dCddLCB0ZXh0YXJlYVwiKTtyZXR1cm4gdSYmIXUucmVhZE9ubHk/KHUudGFnTmFtZSxvPXUudmFsdWUse2xhYmVsOnIsdmFsdWU6bz8udHJpbSgpfHxcIlwifSk6bnVsbH1mdW5jdGlvbiB6KCl7bGV0IGU9e30sdD1bXCJXb3JrRXhwZXJpZW5jZVNlY3Rpb25cIixcIkVkdWNhdGlvblNlY3Rpb25cIixcIkNhbmRpZGF0ZVNraWxsc1wiLFwiQ2FuZGlkYXRlQmVoYXZpb3JzXCIsXCJDYW5kaWRhdGVNb3RpdmF0aW9uc1wiLFwiTGljZW5zZXNBbmRDZXJ0aWZpY2F0aW9uc1NlY3Rpb25cIixcIkNhbmRpZGF0ZUxpbmtFZGl0XCIsXCJRdWVzdGlvbnNcIixcIkFwcGxpY2F0aW9uUXVlc3Rpb25zXCIsXCJDb3VudHJ5UXVlc3Rpb25zXCJdLHI9dC5tYXAoZT0+YG5vdChhbmNlc3Rvcjo6KltAaWQ9JyR7ZX0nXSlgKS5qb2luKFwiIGFuZCBcIiksbj0oMCxpLmdldE9yZGVyZWROb2RlcykoYC8vZGl2W1xyXG4gICAgICAoY29udGFpbnMoQGNsYXNzLCAnY29sLW1kLTI0JykgYW5kIEBkYXRhLWJpbmQ9J2NvbmZpZ3VyYWJsZVZpc2liaWxpdHk6ICRwYXJlbnQud2lsbGluZ1RvUmVsb2NhdGVDb25maWcnKVxyXG4gICAgICBvciAoKGNvbnRhaW5zKEBjbGFzcywgJ2NvbC1tZC04Jykgb3IgY29udGFpbnMoQGNsYXNzLCAnY29sLW1kLTE2JykpIGFuZCAke3J9KVxyXG4gICAgXWApO2ZvcihsZXQgdCBvZiBuKXtpZihrKHQpKWNvbnRpbnVlO2xldCByPXQucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpO2lmKDA9PT1yLmxlbmd0aCljb250aW51ZTtsZXQgbj1IKHQpO24mJihlW24ubGFiZWxdPW4udmFsdWUpfXJldHVybiBlfWZ1bmN0aW9uIFYoZSl7bGV0IHQ9e30scj1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYuZm9ybS1ncm91cFwiKTtmb3IobGV0IGUgb2Ygcil7aWYoZS5jbG9zZXN0KFwiZGl2LmNvbGxhcHNlOm5vdCguaW4pXCIpKWNvbnRpbnVlO2xldCByPWUucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpLG49cj8udGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIjtpZighbnx8XCJNb250aFwiPT09bnx8XCJZZWFyIChZWVlZKVwiPT09biljb250aW51ZTtpZihcIkZyb21cIj09PW58fFwiVG9cIj09PW4pe2xldCByPWUucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKSxvPWUucXVlcnlTZWxlY3RvcihcImlucHV0W3BsYWNlaG9sZGVyPSdZWVlZJ10sIGlucHV0W21heGxlbmd0aD0nNCddXCIpLGk9cj8ub3B0aW9uc1tyLnNlbGVjdGVkSW5kZXhdPy50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwiLGE9bz8udmFsdWU/LnRyaW0oKXx8XCJcIjt0W25dPVtpLGFdLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKTtjb250aW51ZX1sZXQgbz1ZKGUpO28mJih0W28ubGFiZWxdPW8udmFsdWUpfXJldHVybiB0fWxldCBXPTQwMCxHPTMwMDthc3luYyBmdW5jdGlvbiBLKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNXb3JrRXhwZXJpZW5jZVNlY3Rpb25cIik7aWYoIWUpcmV0dXJuW107bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwidWwubGlzdHR5cGVcIik7aWYoIXQpcmV0dXJuW107bGV0IHI9QXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaS5yb3csIGxpW2RhdGEtYXV0b21hdGlvbj0ncGFuZWwtbGlzdC1pdGVtJ11cIikpLG49W107Zm9yKGxldCBlIG9mIHIpe2xldCB0PWUucXVlcnlTZWxlY3RvcihcImJ1dHRvbltkYXRhLWF1dG9tYXRpb249J2VkaXQtYnV0dG9uJ11cIik7aWYoIXR8fHQuZGlzYWJsZWQpY29udGludWU7dC5jbGljaygpLGF3YWl0IG5ldyBQcm9taXNlKGU9PnNldFRpbWVvdXQoZSxXKSk7bGV0IHI9ZS5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtYXV0b21hdGlvbj0nd29yay1leHBlcmllbmNlLWl0ZW0nXVwiKTtpZihyKXtsZXQgZT1WKHIpLHQ9T2JqZWN0LnZhbHVlcyhlKS5ldmVyeShlPT4hU3RyaW5nKGUpLnRyaW0oKSk7dHx8bi5wdXNoKGUpfWxldCBvPWUucXVlcnlTZWxlY3RvcihcImJ1dHRvbltkYXRhLWF1dG9tYXRpb249J2NhbmNlbC1idXR0b24nXVwiKTtvJiYoby5jbGljaygpLGF3YWl0IG5ldyBQcm9taXNlKGU9PnNldFRpbWVvdXQoZSxHKSkpfXJldHVybiBufWFzeW5jIGZ1bmN0aW9uIFgoKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0VkdWNhdGlvblNlY3Rpb25cIik7aWYoIWUpcmV0dXJuW107bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwidWwubGlzdHR5cGVcIik7aWYoIXQpcmV0dXJuW107bGV0IHI9QXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaS5yb3csIGxpW2RhdGEtYXV0b21hdGlvbj0ncGFuZWwtbGlzdC1pdGVtJ11cIikpLG49W107Zm9yKGxldCBlIG9mIHIpe2xldCB0PWUucXVlcnlTZWxlY3RvcihcImJ1dHRvbltkYXRhLWF1dG9tYXRpb249J2VkaXQtYnV0dG9uJ11cIik7aWYoIXR8fHQuZGlzYWJsZWQpY29udGludWU7dC5jbGljaygpLGF3YWl0IG5ldyBQcm9taXNlKGU9PnNldFRpbWVvdXQoZSxXKSk7bGV0IHI9ZS5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtYXV0b21hdGlvbj0nd29yay1leHBlcmllbmNlLWl0ZW0nXSwgW2RhdGEtYXV0b21hdGlvbj0nZWR1Y2F0aW9uLXBhbmVsJ11cIil8fGUsbz1WKHIpLGk9T2JqZWN0LnZhbHVlcyhvKS5ldmVyeShlPT4hU3RyaW5nKGUpLnRyaW0oKSk7aXx8bi5wdXNoKG8pO2xldCBhPWUucXVlcnlTZWxlY3RvcihcImJ1dHRvbltkYXRhLWF1dG9tYXRpb249J2NhbmNlbC1idXR0b24nXVwiKTthJiYoYS5jbGljaygpLGF3YWl0IG5ldyBQcm9taXNlKGU9PnNldFRpbWVvdXQoZSxHKSkpfXJldHVybiBufWFzeW5jIGZ1bmN0aW9uIEooZSl7bGV0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZX1gKTtpZighdClyZXR1cm5cIlwiO2xldCByPSgpPT57bGV0IGU9W10scj10LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ1bCBsaSBzcGFuIGRpdiBzdHJvbmcsIFtkYXRhLWF1dG9tYXRpb249J3NlbGVjdGVkLWl0ZW0nXSBzdHJvbmdbZGF0YS1hdXRvbWF0aW9uPSdza2lsbC1sYWJlbCddLCB1bC5saXN0dHlwZSA+IGxpW2RhdGEtYXV0b21hdGlvbj0nc2VsZWN0ZWQtaXRlbSddIHN0cm9uZywgdWwubGlzdHR5cGUgPiBsaVtkYXRhLWF1dG9tYXRpb249J3NlbGVjdGVkLWl0ZW0nXVwiKTtpZihyLmZvckVhY2godD0+e2xldCByPSh0LnRleHRDb250ZW50fHx0LmlubmVyVGV4dHx8XCJcIikudHJpbSgpOyhyPShyPXIucmVwbGFjZSgvXFxzKltcXHJcXG5dK1xccyovZyxcIiwgXCIpKS5zcGxpdChcIixcIikubWFwKGU9PmUudHJpbSgpKS5maWx0ZXIoZT0+XCJub3Qgc3BlY2lmaWVkXCIhPT1lLnRvTG93ZXJDYXNlKCkpLmpvaW4oXCIsIFwiKSkmJmUucHVzaChyKX0pLGUubGVuZ3RoKXJldHVyblsuLi5uZXcgU2V0KGUpXTtsZXQgbj10LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ1bCBsaSBzdHJvbmcsIHVsIGxpIHNwYW5cIik7cmV0dXJuIG4uZm9yRWFjaCh0PT57bGV0IHI9KHQudGV4dENvbnRlbnR8fFwiXCIpLnRyaW0oKTsocj0ocj1yLnJlcGxhY2UoL1xccypbXFxyXFxuXStcXHMqL2csXCIsIFwiKSkuc3BsaXQoXCIsXCIpLm1hcChlPT5lLnRyaW0oKSkuZmlsdGVyKGU9Plwibm90IHNwZWNpZmllZFwiIT09ZS50b0xvd2VyQ2FzZSgpKS5qb2luKFwiLCBcIikpJiZlLnB1c2gocil9KSxbLi4ubmV3IFNldChlKV19LG49cigpO2lmKG4ubGVuZ3RoPjApcmV0dXJuIG4uam9pbihcIiwgXCIpO2xldCBvPXQucXVlcnlTZWxlY3RvcihcImJ1dHRvbltkYXRhLWF1dG9tYXRpb249J3ByaW1hcnktYWN0aW9uLWJ1dHRvbiddXCIpO2lmKG8pe28uY2xpY2soKSxhd2FpdCBuZXcgUHJvbWlzZShlPT5zZXRUaW1lb3V0KGUsMzAwKSksbj1yKCk7bGV0IGU9dC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uW2RhdGEtYXV0b21hdGlvbj0nY2FuY2VsLWJ1dHRvbiddXCIpO2UmJihlLmNsaWNrKCksYXdhaXQgbmV3IFByb21pc2UoZT0+c2V0VGltZW91dChlLFUpKSl9cmV0dXJuIG4uam9pbihcIiwgXCIpfWFzeW5jIGZ1bmN0aW9uIFEoKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0xpY2Vuc2VzQW5kQ2VydGlmaWNhdGlvbnNTZWN0aW9uXCIpO2lmKCFlKXJldHVybiBudWxsO2xldCB0PWUucXVlcnlTZWxlY3RvcihcInVsXCIpO2lmKCF0KXJldHVybiBudWxsO2xldCByPUFycmF5LmZyb20odC5xdWVyeVNlbGVjdG9yQWxsKFwibGkucm93LCBsaVtkYXRhLWF1dG9tYXRpb249J3BhbmVsLWxpc3QtaXRlbSddLCBsaVwiKSksbj1bXTtmb3IobGV0IGUgb2Ygcil7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uW2RhdGEtYXV0b21hdGlvbj0nZWRpdC1idXR0b24nXVwiKXx8ZS5xdWVyeVNlbGVjdG9yKFwiZGl2LnByZXNlbmNlLXNlY3Rpb24taGVhZGVyLWxhYmVsLmNsaWNrYWJsZS1oZWFkZXJcIil8fGUucXVlcnlTZWxlY3RvcihcInN0cm9uZ1wiKTtpZighdHx8dCBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50JiZ0LmRpc2FibGVkKWNvbnRpbnVlO3QuY2xpY2soKSxhd2FpdCBuZXcgUHJvbWlzZShlPT5zZXRUaW1lb3V0KGUsVykpO2xldCByPXt9LG89ZS5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2LmZvcm0tZ3JvdXBcIik7Zm9yKGxldCBlIG9mIG8pe2lmKHEoZSl8fGUucXVlcnlTZWxlY3RvcihcImRpdi5mb3JtLWdyb3VwXCIpKWNvbnRpbnVlO2xldCB0PVkoZSk7aWYodCl7bGV0IGU9dC5sYWJlbC5pbmNsdWRlcyhcIkxpY2Vuc2VcIik/dC5sYWJlbDpcImxpY2Vuc2VcIit0LmxhYmVsO3JbZV09dC52YWx1ZX19bGV0IGk9T2JqZWN0LnZhbHVlcyhyKS5ldmVyeShlPT4hU3RyaW5nKGUpLnRyaW0oKSk7aXx8bi5wdXNoKHIpO2xldCBhPWUucXVlcnlTZWxlY3RvcihcImJ1dHRvbltkYXRhLWF1dG9tYXRpb249J2NhbmNlbC1idXR0b24nXVwiKTthJiYoYS5jbGljaygpLGF3YWl0IG5ldyBQcm9taXNlKGU9PnNldFRpbWVvdXQoZSxHKSkpfXJldHVybiBuLmxlbmd0aD9uOm51bGx9YXN5bmMgZnVuY3Rpb24gWigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQ2FuZGlkYXRlTGlua0VkaXRcIik7aWYoIWUpcmV0dXJuIG51bGw7bGV0IHQ9KDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlKShcIi8vKltAaWQ9J0NhbmRpZGF0ZUxpbmtFZGl0J10vL2J1dHRvbltAZGF0YS1hdXRvbWF0aW9uPSdwcmltYXJ5LWFjdGlvbi1idXR0b24nIGFuZCBub3QoY29udGFpbnMoQHN0eWxlLCAnZGlzcGxheTogbm9uZScpKV1cIik7aWYoIXQpcmV0dXJuIG51bGw7dC5jbGljaygpLGF3YWl0IG5ldyBQcm9taXNlKGU9PnNldFRpbWVvdXQoZSwzMDApKTtsZXQgcj0oMCxpLmdldE9yZGVyZWROb2RlcykoXCIvLypbQGlkPSdDYW5kaWRhdGVMaW5rRWRpdCddLy9kaXZbY29udGFpbnMoQGNsYXNzLCAnY29sLXNtLTE0Jykgb3IgY29udGFpbnMoQGNsYXNzLCAnY29sLXNtLTEwJyldXCIpLG49e307Zm9yKGxldCBlIG9mIHIpe2xldCB0PVkoZSk7aWYodCl7bGV0IGU9dC5sYWJlbC5pbmNsdWRlcyhcIkxpbmtcIik/dC5sYWJlbDpcImxpbmtcIit0LmxhYmVsO25bZV09dC52YWx1ZX19bGV0IG89KDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlKShcIi8vKltAaWQ9J0NhbmRpZGF0ZUxpbmtFZGl0J10vL2J1dHRvbltAZGF0YS1hdXRvbWF0aW9uPSdjYW5jZWwtYnV0dG9uJ11cIik7byYmKG8uY2xpY2soKSxhd2FpdCBuZXcgUHJvbWlzZShlPT5zZXRUaW1lb3V0KGUsVSkpKTtsZXQgYT1PYmplY3QudmFsdWVzKG4pLmV2ZXJ5KGU9PiFTdHJpbmcoZSkudHJpbSgpKTtyZXR1cm4gYSYmT2JqZWN0LmtleXMobikubGVuZ3RoPjA/bnVsbDpPYmplY3Qua2V5cyhuKS5sZW5ndGg/bjpudWxsfWZ1bmN0aW9uIGVlKCl7bGV0IGU9e30sdD0oMCxpLmdldE9yZGVyZWROb2RlcykoXCIvLypbQGlkPSdRdWVzdGlvbnMnXS8vZGl2W2NvbnRhaW5zKEBjbGFzcywgJ2Zvcm0tZ3JvdXAnKV1cIik7Zm9yKGxldCByIG9mIHQpe2lmKHEocil8fHIucXVlcnlTZWxlY3RvcihcImRpdi5mb3JtLWdyb3VwXCIpKWNvbnRpbnVlO2xldCB0PVkocik7dCYmKGVbdC5sYWJlbF09dC52YWx1ZSl9bGV0IHI9KDAsaS5nZXRPcmRlcmVkTm9kZXMpKCcvLypbQGlkPVwiUXVlc3Rpb25zXCJdLy9kaXZbQGRhdGEtYmluZCBhbmQgY29udGFpbnMoQGRhdGEtYmluZCwgXCJ2aXNpYmxlOlwiKV0vLypbY29udGFpbnMoQGNsYXNzLCBcImZvcm0tZ3JvdXBcIildJyk7Zm9yKGxldCB0IG9mIHIpe2lmKHEodCkpY29udGludWU7bGV0IHI9WSh0KTtyJiZ2b2lkIDA9PT1lW3IubGFiZWxdJiYoZVtyLmxhYmVsXT1yLnZhbHVlKX1sZXQgbj0oMCxpLmdldE9yZGVyZWROb2RlcykoJy8vKltAaWQ9XCJRdWVzdGlvbnNcIl0vL2RpdltAcm9sZT1cInJhZGlvZ3JvdXBcIiBhbmQgQGFyaWEtbGFiZWxsZWRieT1cIkVtcGxveWVlUmVmZXJyYWxcIl0nKTtmb3IobGV0IHQgb2Ygbil7aWYocSh0KSljb250aW51ZTtsZXQgcj1ZKHQpO3ImJnZvaWQgMD09PWVbci5sYWJlbF0mJihlW3IubGFiZWxdPXIudmFsdWUpfXJldHVybiBlfWZ1bmN0aW9uIGV0KCl7bGV0IGU9e30sdD0oMCxpLmdldE9yZGVyZWROb2RlcykoXCIvLypbQGlkPSdBcHBsaWNhdGlvblF1ZXN0aW9ucyddLy9kaXZbY29udGFpbnMoQGNsYXNzLCAnZm9ybS1ncm91cCcpXVwiKTtmb3IobGV0IHIgb2YgdCl7aWYocShyKXx8ci5xdWVyeVNlbGVjdG9yKFwiZGl2LmZvcm0tZ3JvdXBcIikpY29udGludWU7bGV0IHQ9WShyKTt0JiYoZVt0LmxhYmVsXT10LnZhbHVlKX1yZXR1cm4gZX1mdW5jdGlvbiBlcigpe2xldCBlPXt9LHQ9KDAsaS5nZXRPcmRlcmVkTm9kZXMpKFwiLy8qW0BpZD0nQ291bnRyeVF1ZXN0aW9ucyddLy9kaXZbY29udGFpbnMoQGNsYXNzLCAnZm9ybS1ncm91cCcpXVwiKTtmb3IobGV0IHIgb2YgdCl7aWYocShyKSljb250aW51ZTtsZXQgdD1ZKHIpO3QmJihlW3QubGFiZWxdPXQudmFsdWUpfWxldCByPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtkYXRhLWF1dG9tYXRpb249XCJjb3VudHJ5LXF1ZXN0aW9ucy1yYWNlXCJdJyk7aWYocil7bGV0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtyLmlkfVwiXWApPy50ZXh0Q29udGVudD8udHJpbSgpfHxcIlJhY2VcIixuPXIub3B0aW9uc1tyLnNlbGVjdGVkSW5kZXhdPy50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwiO2VbdF09bn1yZXR1cm4gZX1hc3luYyBmdW5jdGlvbiBlbigpe2xldCBlPXt9O09iamVjdC5hc3NpZ24oZSx6KCkpO2xldCB0PWF3YWl0IEsoKTt0Lmxlbmd0aCYmKGUuZW1wbG95bWVudD10KTtsZXQgcj1hd2FpdCBYKCk7ci5sZW5ndGgmJihlLmVkdWNhdGlvbj1yKTtsZXQgbj1hd2FpdCBKKFwiQ2FuZGlkYXRlU2tpbGxzXCIpO24mJihlLlNraWxscz1uKTtsZXQgbz1hd2FpdCBKKFwiQ2FuZGlkYXRlQmVoYXZpb3JzXCIpO28mJihlLkJlaGF2aW9ycz1vKTtsZXQgaT1hd2FpdCBKKFwiQ2FuZGlkYXRlTW90aXZhdGlvbnNcIik7aSYmKGUuTW90aXZhdGlvbnM9aSk7bGV0IGE9YXdhaXQgUSgpO2EmJihlLmxpY2Vuc2VzQW5kQ2VydGlmaWNhdGlvbnM9YSk7bGV0IGw9YXdhaXQgWigpO3JldHVybiBsJiYoZS5saW5rcz1sKSxPYmplY3QuYXNzaWduKGUsZWUoKSksT2JqZWN0LmFzc2lnbihlLGV0KCkpLE9iamVjdC5hc3NpZ24oZSxlcigpKSxlfWZ1bmN0aW9uIGVvKGUpe2xldCB0PWUuY2xvc2VzdChcImxhYmVsXCIpO2lmKHQpcmV0dXJuIEFycmF5LmZyb20odC5jaGlsZE5vZGVzKS5maWx0ZXIoZT0+ZS5ub2RlVHlwZT09PU5vZGUuVEVYVF9OT0RFfHxcIklOUFVUXCIhPT1lLnRhZ05hbWUpLm1hcChlPT5lLnRleHRDb250ZW50Py50cmltKCkpLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKS50cmltKCk7aWYoZS5pZCl7bGV0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtlLmlkfVwiXWApO2lmKHQpcmV0dXJuIHQudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIn1sZXQgcj1lLm5leHRFbGVtZW50U2libGluZztyZXR1cm4gciYmci50ZXh0Q29udGVudD8udHJpbSgpP3IudGV4dENvbnRlbnQudHJpbSgpOmUudmFsdWV8fFwiXCJ9XHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJydWxlcy4zNzVhZmE5My5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);