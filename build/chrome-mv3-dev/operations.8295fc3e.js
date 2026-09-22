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
})({"jjh31":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\jobdiva\\operations.js",
    "bundleId": "d84e62708295fc3e",
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
var j = z(require("fa1e87382ea9bf0b"));
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

},{"fa1e87382ea9bf0b":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"4pMpj":[function(require,module,exports) {
/**
 * Parcel module id: aBF8M
 * Resolved path: src/contents/sites/jobdiva/operations.js
 * Dependencies:
 *   ./answer -> 9tSwu  =>  src/contents/sites/jobdiva/answer.js
 *   ./registration-card -> hEjHq  =>  src/contents/sites/jobdiva/registration-card.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/choice-match -> 6mkI4  =>  src/contents/methods/choice-match.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/shared/filler -> 2aGsX  =>  src/contents/shared/filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 *   ~utils/getTargetOrTimeout -> 1TBhF  =>  src/utils/getTargetOrTimeout.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "findJobdivaDetailApplyButton", ()=>b), n.export(r, "preFillForm", ()=>v), n.export(r, "fillInputTextField", ()=>w), n.export(r, "fillSelectField", ()=>x), n.export(r, "prefillCountry", ()=>C), n.export(r, "fillPhoneCountryField", ()=>A), n.export(r, "fillPhoneSectionField", ()=>T), n.export(r, "fillCheckboxField", ()=>F), n.export(r, "fillRadioGroupFiled", ()=>I), n.export(r, "uploadResume", ()=>P), n.export(r, "expandCollapsedRegCards", ()=>N), n.export(r, "addEducationSection", ()=>W), n.export(r, "addEducationSectionForRoot", ()=>G), n.export(r, "addEmploymentSection", ()=>K), n.export(r, "addEmploymentSectionForRoot", ()=>X);
var o = e("~contents/methods/choice-match"), i = e("~contents/shared/filler"), a = e("~contents/methods/answer"), l = e("~contents/methods/dom"), s = e("~core/enums"), u = e("~core/xpath"), c = e("~utils/delay"), d = e("~utils/getTargetOrTimeout"), f = n.interopDefault(d), p = e("./answer"), m = e("./registration-card");
let h = (e1)=>`contains(concat(" ", normalize-space(@class), " "), " ${e1} ")`;
function g(e1) {
    return String(e1 ?? "").replace(/[*\u2731]/g, "").replace(/\s+/g, " ").trim().toLowerCase();
}
function b(e1, t) {
    let r1 = Array.from(e1).filter((e1)=>{
        let r1 = (e1.textContent || "").replace(/\s+/g, " ").trim().toLowerCase();
        return !e1.disabled && t(e1) && "apply now" === r1;
    });
    return 1 === r1.length ? r1[0] : null;
}
function y(e1) {
    let t = window.getComputedStyle(e1);
    return "none" !== t.display && "hidden" !== t.visibility && e1.getClientRects().length > 0;
}
async function v(e1 = document) {
    let t = b(e1.querySelectorAll("button"), y);
    if (t) {
        console.debug("[jobdiva preFill] entering detail-page application", {
            text: t.textContent?.trim()
        }), Y(t, {
            tag: "[jobdiva preFill]",
            actionLabel: "[detail-apply-now]"
        }), await (0, f.default)(()=>document.querySelector(".job-app-main, .jd-form-layout, .jd-actioncard.jd-reg-introcard") || null, ()=>!1, 40), await (0, c.delay)(300);
        return;
    }
    await (0, c.delay)(300);
    let r1 = e1.querySelectorAll(".jd-actioncard.jd-reg-introcard"), n = (0, m.findJobdivaStartWithResumeCard)(r1, y);
    if (console.debug("[jobdiva preFill] registration resume choice", {
        cardCount: r1.length,
        foundStartWithResumeCard: !!n
    }), n) {
        Y(n, {
            tag: "[jobdiva preFill]",
            actionLabel: "[start-with-resume]"
        }), await (0, f.default)(()=>document.querySelector('.jd-form-layout input[type="file"], .jd-form-layout .jd-dropzone') || null, ()=>!1, 40), await (0, c.delay)(300);
        return;
    }
    await N(e1);
}
async function w(e1, t) {
    if (!e1 || e1 instanceof HTMLInputElement && "password" === e1.type) return;
    e1.focus(), await (0, c.delay)(80);
    let r1 = Object.getOwnPropertyDescriptor(e1 instanceof HTMLInputElement ? window.HTMLInputElement.prototype : window.HTMLTextAreaElement.prototype, "value")?.set;
    r1 ? r1.call(e1, "") : e1.value = "", e1.dispatchEvent(new Event("input", {
        bubbles: !0
    })), await (0, c.delay)(50), r1 ? r1.call(e1, t) : e1.value = t, e1.dispatchEvent(new Event("input", {
        bubbles: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0
    })), await (0, c.delay)(80), e1.blur(), await (0, c.delay)(50);
}
function S(e1) {
    return e1 instanceof HTMLInputElement || e1 instanceof HTMLTextAreaElement;
}
_c = S;
async function E(e1, t) {
    let r1 = (0, u.getFirstOrderedNodeSafe)('.//button[@data-bs-toggle="dropdown"]', e1);
    if (!r1) return;
    let n = "true" === r1.getAttribute("aria-expanded");
    n || (r1.dispatchEvent(new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0,
        view: window
    })), await (0, c.delay)(120));
    let i = (0, u.getOrderedNodesSafe)(`.//div[${h("dropdown-menu")}]//*[${h("dropdown-item")}]`, e1), a = (0, o.findExactChoice)(i, t, (e1)=>e1.textContent);
    if (a) {
        a.dispatchEvent(new MouseEvent("click", {
            bubbles: !0,
            cancelable: !0,
            view: window
        })), await (0, c.delay)(120);
        return;
    }
    r1.dispatchEvent(new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0,
        view: window
    })), await (0, c.delay)(80);
}
_c1 = E;
async function x(e1, t) {
    let r1 = e1.$input;
    if (!r1) return;
    let n = Array.isArray(t) ? t[0] : t, i = String(n ?? "").trim();
    if (i) {
        if (r1 instanceof HTMLSelectElement) {
            let e1 = (0, o.findExactChoice)(Array.from(r1.options), i, (e1)=>e1.textContent, (e1)=>e1.value);
            e1 && (r1.selectedIndex = Array.from(r1.options).indexOf(e1), r1.dispatchEvent(new Event("input", {
                bubbles: !0
            })), r1.dispatchEvent(new Event("change", {
                bubbles: !0
            })), await (0, c.delay)(100));
            return;
        }
        if (r1 instanceof HTMLElement && (r1.classList.contains("jd-form-select") || r1.querySelector?.(".jd-form-select, .dropdown-menu"))) {
            await E(r1, i);
            return;
        }
        r1 instanceof HTMLInputElement && await w(r1, i);
    }
}
async function C(e1, t) {
    let r1 = String(t ?? "").trim();
    if (!r1) return !1;
    let n = Array.from(e1.querySelectorAll(".jd-form-layout")).find((e1)=>{
        let t = e1.querySelector(":scope > label.jd-label");
        return "country" === g(t?.textContent);
    }), o = n?.querySelector(".dropdown.jd-form-select");
    if (!o) return !1;
    let i = Array.from(o.querySelectorAll(".dropdown-menu .dropdown-item")).map((e1)=>String(e1.textContent ?? "").trim()).filter(Boolean), a = (0, p.resolveJobdivaCountryOption)(r1, i);
    if (!a) return !1;
    await x({
        label: "Country",
        type: s.FIELD_TYPE.SELECT,
        required: !1,
        options: [],
        $input: o
    }, a);
    let l = g(o.querySelector("button.jd-form")?.textContent);
    return l === g(a) && (await (0, c.delay)(300), !0);
}
_c2 = C;
async function A(e1, t) {
    if (!t) return;
    let r1 = /^\d+$/.test(t) && Array.isArray(e1.options) && e1.options[Number(t)] || t;
    await x(e1, r1);
}
_c3 = A;
function k(e1, t) {
    let r1;
    for(let n in t)if ((0, a.isMatched)(e1, n)) {
        r1 = t[n];
        break;
    }
    if (null == r1 || "" === r1) throw new i.ValueError(`No matching field for label: ${e1}`);
    let n = (0, p.normalizeJobdivaPhoneValue)(r1);
    if (!n) throw new i.ValueError(`Invalid phone value for label: ${e1}`);
    return n;
}
async function T(e1, t, r1, n, o = !0) {
    try {
        let n = k(e1.label, t);
        if (!n.text) throw new i.ValueError(`Missing phone text for label: ${e1.label}`);
        let a = e1.children || [], l = a.find((e1)=>"type" === e1.label.toLowerCase()), s = a.find((e1)=>"country" === e1.label.toLowerCase()), u = a.find((e1)=>"text" === e1.label.toLowerCase()), c = l && /^\d+$/.test(n.type) && Array.isArray(l.options) && l.options[Number(n.type)] || n.type;
        if (l && c && await x(l, c), s && n.country && await A(s, n.country), u && n.text) {
            if (!S(u.$input)) throw new i.ValueError(`Invalid phone text input for label: ${e1.label}`);
            await w(u.$input, n.text);
        }
        o && r1(e1.label);
    } catch (t) {
        t instanceof i.ValueError || console.error("[jobdiva][phone section]", t), o && n(e1.label);
    }
}
_c4 = T;
async function F(e1, t) {
    let r1 = Array.isArray(t) ? t : [
        t
    ], n = e1.$checkboxs || (e1.$input ? [
        e1.$input
    ] : []), i = (e1)=>!0 === e1 || 1 === e1 || "yes" === String(e1 ?? "").toLowerCase() || "true" === String(e1 ?? "").toLowerCase(), a = (e1)=>String(e1 ?? "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim().toLowerCase(), l = r1.map((e1)=>a(e1)).filter(Boolean), s = (t)=>{
        let r1 = t.id ? a(document.querySelector(`label[for="${t.id}"]`)?.textContent || "") : "", n = a(t.closest("label")?.textContent || ""), o = a(e1.label || "");
        return r1 || n || o || a(t.value);
    }, u = (e1)=>l.some((t)=>!i(t) && (0, o.isExactChoiceMatch)(e1, t));
    if (1 === n.length) {
        let e1 = n[0], t = s(e1), r1 = l.some((e1)=>i(e1)) || u(t);
        e1.checked !== r1 && (e1.click(), await (0, c.delay)(100));
        return;
    }
    for (let e1 of n){
        let t = s(e1), r1 = u(t);
        r1 && !e1.checked && (e1.click(), await (0, c.delay)(80));
    }
}
_c5 = F;
async function I(e1, t) {
    let r1 = String((Array.isArray(t) ? t[0] : t) ?? "").trim();
    if (!r1) return;
    let n = e1.$radios, i = e1.$radioParent || e1.$input?.parentElement || document, a = n && n.length > 0 ? n : Array.from(i.querySelectorAll('input[type="radio"]')), l = (0, o.findExactChoice)(a.filter((e1)=>!e1.disabled), r1, (e1)=>D(e1), (e1)=>e1.value);
    l && !l.checked && (l.click(), await (0, c.delay)(80));
}
_c6 = I;
function j(e1) {
    return e1.replace(/[*\u2731]/g, "").replace(/\s+/g, " ").trim();
}
function D(e1) {
    let t = e1.id ? j(document.querySelector(`label[for="${e1.id}"]`)?.textContent || "") : "", r1 = j(e1.closest("label")?.textContent || ""), n = j(e1.nextElementSibling?.textContent || ""), o = j(e1.closest(".radio-button")?.textContent || "");
    return t || r1 || n || o || j(e1.value);
}
_c7 = D;
async function P(e1 = document, t, r1, n) {
    let o = e1.querySelector('input[type="file"][accept*=".pdf"], input[type="file"][accept*="pdf"], input[type="file"]');
    if (!o) return;
    let i = await (0, a.fetchPdfAsBlob)(t);
    await (0, l.uploadFiles)(o, i, r1, n, "Resume/CV"), await (0, f.default)(()=>e1.querySelector('[class*="uploaded" i], [class*="file-name" i], [class*="resume-name" i]') || null, ()=>!1, 50);
}
_c8 = P;
function _(e1, t) {
    return Array.from(e1.querySelectorAll(t));
}
function L(e1, t) {
    return _(e1, t).filter((e1)=>e1.querySelector(".jd-form-layout"));
}
_c9 = L;
function R(e1, t) {
    return L(e1, t).length;
}
_c10 = R;
function O(e1 = document) {
    return R(e1, ".jd-reg-card.id-reg-workexperience");
}
_c11 = O;
async function M(e1, t, r1) {
    return r1 ? await r1() : R(e1, t);
}
_c12 = M;
async function N(e1 = document) {
    let t = "[jobdiva expandCollapsed]", r1 = Array.from(e1.querySelectorAll(".jd-reg-card")), n = r1.filter((e1)=>!e1.querySelector(".jd-form-layout"));
    for (let e1 of n){
        let r1 = z(e1);
        if (!r1 || r1 === e1) {
            console.warn(`${t} no trigger resolved for card`, e1.className);
            continue;
        }
        Y(r1, {
            tag: t,
            actionLabel: "[expand-collapsed]"
        }), await (0, c.delay)(400);
    }
}
_c13 = N;
function $(e1, t) {
    let r1 = Array.from(e1.querySelectorAll(".jd-reg-entrybtn")).filter((e1)=>{
        let t = (e1.textContent || "").trim().toLowerCase();
        return !t.includes("remove");
    }), n = (e1)=>t.some((t)=>e1.includes(t)), o = r1.find((e1)=>{
        let t = (e1.textContent || "").trim().toLowerCase();
        return t.includes("add") && t.includes("another") && n(t);
    });
    return o || r1.find((e1)=>{
        let t = (e1.textContent || "").trim().toLowerCase();
        return t.includes("add") && n(t);
    }) || null;
}
function B(e1) {
    let t = Array.from(e1.querySelectorAll(".jd-reg-entrybtn")).find((e1)=>(e1.textContent || "").trim().toLowerCase().includes("remove"));
    return t || (0, u.getFirstOrderedNodeSafe)(".//span[contains(normalize-space(text()), 'Remove Entry')]", e1) || null;
}
_c14 = B;
function q(e1, t) {
    for (let r1 of t){
        let t = (0, u.getFirstOrderedNodeSafe)(r1, e1);
        if (t) return t;
    }
    return null;
}
function U(e1) {
    e1.dispatchEvent(new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0,
        view: window
    }));
}
_c15 = U;
function H(e1) {
    let t = (e1)=>(e1 || "").replace(/\s+/g, " ").trim().toLowerCase(), r1 = [
        t(e1.textContent),
        t(e1.previousElementSibling?.textContent),
        t(e1.parentElement?.textContent),
        t(e1.parentElement?.previousElementSibling?.textContent)
    ];
    return r1.some((e1)=>e1.includes("add a reference"));
}
_c16 = H;
function Y(e1, t) {
    if (!e1) return console.warn(`${t.tag} ${t.actionLabel} target is null`), null;
    let r1 = t.resolveClickTarget ? t.resolveClickTarget(e1) : e1;
    return H(r1) ? (console.warn(`${t.tag} ${t.actionLabel} skip unsupported reference trigger`, {
        tag: r1.tagName,
        className: r1.className,
        outerHTMLShort: r1.outerHTML?.slice(0, 200)
    }), null) : (U(r1), r1);
}
_c17 = Y;
function z(e1) {
    let t = (0, u.getFirstOrderedNodeSafe)(".//span[contains(normalize-space(text()), 'Add a')]/following-sibling::span[1]", e1);
    return t || e1.querySelector('span[style*="cursor: pointer"], span[style*="margin-left: auto"]') || e1.querySelector("svg")?.parentElement || e1;
}
async function V(e1, t, r1, n, o) {
    let i = `[jobdiva addRegCardSections ${n.join("/")}]`, a = await M(e1, r1, o?.getCurrentCount);
    for(; a > t;){
        let t = L(e1, r1), n = B(t[t.length - 1]);
        if (!n) {
            console.warn(`${i} removeTarget is null, stop trimming`);
            break;
        }
        Y(n, {
            tag: i,
            actionLabel: "[trim-extra]"
        }), await (0, c.delay)(250), a = await M(e1, r1, o?.getCurrentCount);
    }
    if (t <= 0) return;
    let l = 0;
    for(; a < t;){
        l += 1;
        let s = 0 === a && n.includes("education"), u = 0 === a && (n.includes("employment") || n.includes("experience")), d = null;
        if (s) d = q(e1, [
            ".//span[contains(text(), 'Add a Education')]/following-sibling::span"
        ]);
        else if (u) (d = q(e1, [
            ".//span[contains(text(), 'Add a Work Experience')]/following-sibling::span"
        ])) || (d = $(e1, n));
        else if (0 === a) d = _(e1, r1).find((e1)=>{
            if (e1.querySelector(".jd-form-layout")) return !1;
            let t = (e1.textContent || "").trim().toLowerCase();
            return t.includes("add") && n.some((e1)=>t.includes(e1));
        }) || null;
        else {
            let t = n.includes("employment") || n.includes("experience");
            d = t && q(e1, [
                ".//span[contains(normalize-space(text()), 'Add another work experience')]"
            ]) || $(e1, n);
        }
        if (!d) {
            console.warn(`${i} addTarget is null, break`);
            break;
        }
        let f = Y(d, {
            tag: i,
            actionLabel: "[add-section]",
            resolveClickTarget: s || 0 !== a ? void 0 : z
        });
        if (!f) break;
        let p = 0, m = !1;
        for(; p < 20;){
            let t = await M(e1, r1, o?.getCurrentCount);
            if (t > a) {
                m = !0;
                break;
            }
            await (0, c.delay)(100), p += 1;
        }
        let h = await M(e1, r1, o?.getCurrentCount);
        if (h <= a) {
            console.warn(`${i} section count did not increase after add click`, {
                current: a,
                nextCurrent: h,
                count: t
            });
            break;
        }
        a = h;
    }
    await (0, c.delay)(200);
}
_c18 = V;
async function W(e1) {
    await G(document, e1);
}
_c19 = W;
async function G(e1 = document, t) {
    await V(e1, t, ".jd-reg-card.id-reg-education", [
        "education"
    ]);
}
_c20 = G;
async function K(e1) {
    await X(document, e1);
}
_c21 = K;
async function X(e1 = document, t) {
    await V(e1, t, ".jd-reg-card.id-reg-workexperience", [
        "employment",
        "experience",
        "work",
        "job"
    ], {
        getCurrentCount: ()=>O(e1)
    });
}
_c22 = X;
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
$RefreshReg$(_c15, "U");
$RefreshReg$(_c16, "H");
$RefreshReg$(_c17, "Y");
$RefreshReg$(_c18, "V");
$RefreshReg$(_c19, "W");
$RefreshReg$(_c20, "G");
$RefreshReg$(_c21, "K");
$RefreshReg$(_c22, "X");

},{}]},["jjh31","4pMpj"], "4pMpj", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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LEVBQUcsTUFBSyxLQUFHO1FBQUM7UUFBQyxJQUFJLElBQUUsTUFBTSxFQUFFLElBQUUsSUFBRSxHQUFHO1FBQWlCLElBQUcsS0FBRyxHQUFFO1lBQUMsUUFBUSxLQUFLLENBQUMsRUFBRSxFQUFFLCtDQUErQyxDQUFDLEVBQUM7Z0JBQUMsU0FBUTtnQkFBRSxhQUFZO2dCQUFFLE9BQU07WUFBQztZQUFHO1FBQUs7UUFBQyxJQUFFO0lBQUM7SUFBQyxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHO0FBQUk7T0FBOTVDO0FBQSs1QyxlQUFlLEVBQUUsRUFBQztJQUFFLE1BQU0sRUFBRSxVQUFTO0FBQUU7T0FBeEI7QUFBeUIsZUFBZSxFQUFFLEtBQUUsUUFBUSxFQUFDLENBQUM7SUFBRSxNQUFNLEVBQUUsSUFBRSxHQUFFLGlDQUFnQztRQUFDO0tBQVk7QUFBQztPQUExRTtBQUEyRSxlQUFlLEVBQUUsRUFBQztJQUFFLE1BQU0sRUFBRSxVQUFTO0FBQUU7T0FBeEI7QUFBeUIsZUFBZSxFQUFFLEtBQUUsUUFBUSxFQUFDLENBQUM7SUFBRSxNQUFNLEVBQUUsSUFBRSxHQUFFLHNDQUFxQztRQUFDO1FBQWE7UUFBYTtRQUFPO0tBQU0sRUFBQztRQUFDLGlCQUFnQixJQUFJLEVBQUU7SUFBRTtBQUFFO09BQXJJIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS0yYmNhODZjYjYwODkyYWRkLmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL2pvYmRpdmEvb3BlcmF0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxqb2JkaXZhXFxcXG9wZXJhdGlvbnMuanNcIixcImJ1bmRsZUlkXCI6XCJkODRlNjI3MDgyOTVmYzNlXCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogYUJGOE1cclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL2pvYmRpdmEvb3BlcmF0aW9ucy5qc1xyXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi9hbnN3ZXIgLT4gOXRTd3UgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvam9iZGl2YS9hbnN3ZXIuanNcclxuICogICAuL3JlZ2lzdHJhdGlvbi1jYXJkIC0+IGhFakhxICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2pvYmRpdmEvcmVnaXN0cmF0aW9uLWNhcmQuanNcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2Fuc3dlciAtPiA3VDVlVyAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2Fuc3dlci5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2Nob2ljZS1tYXRjaCAtPiA2bWtJNCAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2Nob2ljZS1tYXRjaC5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2RvbSAtPiBoQTVRYSAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2RvbS5qc1xyXG4gKiAgIH5jb250ZW50cy9zaGFyZWQvZmlsbGVyIC0+IDJhR3NYICA9PiAgc3JjL2NvbnRlbnRzL3NoYXJlZC9maWxsZXIuanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqICAgfmNvcmUveHBhdGggLT4gYWdFNHUgID0+ICBzcmMvY29yZS94cGF0aC5qc1xyXG4gKiAgIH51dGlscy9kZWxheSAtPiBhbTYxNCAgPT4gIHNyYy91dGlscy9kZWxheS5qc1xyXG4gKiAgIH51dGlscy9nZXRUYXJnZXRPclRpbWVvdXQgLT4gMVRCaEYgID0+ICBzcmMvdXRpbHMvZ2V0VGFyZ2V0T3JUaW1lb3V0LmpzXHJcbiAqL1xyXG5cclxudmFyIG49ZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7bi5kZWZpbmVJbnRlcm9wRmxhZyhyKSxuLmV4cG9ydChyLFwiZmluZEpvYmRpdmFEZXRhaWxBcHBseUJ1dHRvblwiLCgpPT5iKSxuLmV4cG9ydChyLFwicHJlRmlsbEZvcm1cIiwoKT0+diksbi5leHBvcnQocixcImZpbGxJbnB1dFRleHRGaWVsZFwiLCgpPT53KSxuLmV4cG9ydChyLFwiZmlsbFNlbGVjdEZpZWxkXCIsKCk9PngpLG4uZXhwb3J0KHIsXCJwcmVmaWxsQ291bnRyeVwiLCgpPT5DKSxuLmV4cG9ydChyLFwiZmlsbFBob25lQ291bnRyeUZpZWxkXCIsKCk9PkEpLG4uZXhwb3J0KHIsXCJmaWxsUGhvbmVTZWN0aW9uRmllbGRcIiwoKT0+VCksbi5leHBvcnQocixcImZpbGxDaGVja2JveEZpZWxkXCIsKCk9PkYpLG4uZXhwb3J0KHIsXCJmaWxsUmFkaW9Hcm91cEZpbGVkXCIsKCk9PkkpLG4uZXhwb3J0KHIsXCJ1cGxvYWRSZXN1bWVcIiwoKT0+UCksbi5leHBvcnQocixcImV4cGFuZENvbGxhcHNlZFJlZ0NhcmRzXCIsKCk9Pk4pLG4uZXhwb3J0KHIsXCJhZGRFZHVjYXRpb25TZWN0aW9uXCIsKCk9PlcpLG4uZXhwb3J0KHIsXCJhZGRFZHVjYXRpb25TZWN0aW9uRm9yUm9vdFwiLCgpPT5HKSxuLmV4cG9ydChyLFwiYWRkRW1wbG95bWVudFNlY3Rpb25cIiwoKT0+Syksbi5leHBvcnQocixcImFkZEVtcGxveW1lbnRTZWN0aW9uRm9yUm9vdFwiLCgpPT5YKTt2YXIgbz1lKFwifmNvbnRlbnRzL21ldGhvZHMvY2hvaWNlLW1hdGNoXCIpLGk9ZShcIn5jb250ZW50cy9zaGFyZWQvZmlsbGVyXCIpLGE9ZShcIn5jb250ZW50cy9tZXRob2RzL2Fuc3dlclwiKSxsPWUoXCJ+Y29udGVudHMvbWV0aG9kcy9kb21cIikscz1lKFwifmNvcmUvZW51bXNcIiksdT1lKFwifmNvcmUveHBhdGhcIiksYz1lKFwifnV0aWxzL2RlbGF5XCIpLGQ9ZShcIn51dGlscy9nZXRUYXJnZXRPclRpbWVvdXRcIiksZj1uLmludGVyb3BEZWZhdWx0KGQpLHA9ZShcIi4vYW5zd2VyXCIpLG09ZShcIi4vcmVnaXN0cmF0aW9uLWNhcmRcIik7bGV0IGg9ZT0+YGNvbnRhaW5zKGNvbmNhdChcIiBcIiwgbm9ybWFsaXplLXNwYWNlKEBjbGFzcyksIFwiIFwiKSwgXCIgJHtlfSBcIilgO2Z1bmN0aW9uIGcoZSl7cmV0dXJuIFN0cmluZyhlPz9cIlwiKS5yZXBsYWNlKC9bKlxcdTI3MzFdL2csXCJcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCkudG9Mb3dlckNhc2UoKX1mdW5jdGlvbiBiKGUsdCl7bGV0IHI9QXJyYXkuZnJvbShlKS5maWx0ZXIoZT0+e2xldCByPShlLnRleHRDb250ZW50fHxcIlwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO3JldHVybiFlLmRpc2FibGVkJiZ0KGUpJiZcImFwcGx5IG5vd1wiPT09cn0pO3JldHVybiAxPT09ci5sZW5ndGg/clswXTpudWxsfWZ1bmN0aW9uIHkoZSl7bGV0IHQ9d2luZG93LmdldENvbXB1dGVkU3R5bGUoZSk7cmV0dXJuXCJub25lXCIhPT10LmRpc3BsYXkmJlwiaGlkZGVuXCIhPT10LnZpc2liaWxpdHkmJmUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGg+MH1hc3luYyBmdW5jdGlvbiB2KGU9ZG9jdW1lbnQpe2xldCB0PWIoZS5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpLHkpO2lmKHQpe2NvbnNvbGUuZGVidWcoXCJbam9iZGl2YSBwcmVGaWxsXSBlbnRlcmluZyBkZXRhaWwtcGFnZSBhcHBsaWNhdGlvblwiLHt0ZXh0OnQudGV4dENvbnRlbnQ/LnRyaW0oKX0pLFkodCx7dGFnOlwiW2pvYmRpdmEgcHJlRmlsbF1cIixhY3Rpb25MYWJlbDpcIltkZXRhaWwtYXBwbHktbm93XVwifSksYXdhaXQgKDAsZi5kZWZhdWx0KSgoKT0+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qb2ItYXBwLW1haW4sIC5qZC1mb3JtLWxheW91dCwgLmpkLWFjdGlvbmNhcmQuamQtcmVnLWludHJvY2FyZFwiKXx8bnVsbCwoKT0+ITEsNDApLGF3YWl0ICgwLGMuZGVsYXkpKDMwMCk7cmV0dXJufWF3YWl0ICgwLGMuZGVsYXkpKDMwMCk7bGV0IHI9ZS5xdWVyeVNlbGVjdG9yQWxsKFwiLmpkLWFjdGlvbmNhcmQuamQtcmVnLWludHJvY2FyZFwiKSxuPSgwLG0uZmluZEpvYmRpdmFTdGFydFdpdGhSZXN1bWVDYXJkKShyLHkpO2lmKGNvbnNvbGUuZGVidWcoXCJbam9iZGl2YSBwcmVGaWxsXSByZWdpc3RyYXRpb24gcmVzdW1lIGNob2ljZVwiLHtjYXJkQ291bnQ6ci5sZW5ndGgsZm91bmRTdGFydFdpdGhSZXN1bWVDYXJkOiEhbn0pLG4pe1kobix7dGFnOlwiW2pvYmRpdmEgcHJlRmlsbF1cIixhY3Rpb25MYWJlbDpcIltzdGFydC13aXRoLXJlc3VtZV1cIn0pLGF3YWl0ICgwLGYuZGVmYXVsdCkoKCk9PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qZC1mb3JtLWxheW91dCBpbnB1dFt0eXBlPVwiZmlsZVwiXSwgLmpkLWZvcm0tbGF5b3V0IC5qZC1kcm9wem9uZScpfHxudWxsLCgpPT4hMSw0MCksYXdhaXQgKDAsYy5kZWxheSkoMzAwKTtyZXR1cm59YXdhaXQgTihlKX1hc3luYyBmdW5jdGlvbiB3KGUsdCl7aWYoIWV8fGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50JiZcInBhc3N3b3JkXCI9PT1lLnR5cGUpcmV0dXJuO2UuZm9jdXMoKSxhd2FpdCAoMCxjLmRlbGF5KSg4MCk7bGV0IHI9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudD93aW5kb3cuSFRNTElucHV0RWxlbWVudC5wcm90b3R5cGU6d2luZG93LkhUTUxUZXh0QXJlYUVsZW1lbnQucHJvdG90eXBlLFwidmFsdWVcIik/LnNldDtyP3IuY2FsbChlLFwiXCIpOmUudmFsdWU9XCJcIixlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMH0pKSxhd2FpdCAoMCxjLmRlbGF5KSg1MCkscj9yLmNhbGwoZSx0KTplLnZhbHVlPXQsZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITB9KSksZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSkpLGF3YWl0ICgwLGMuZGVsYXkpKDgwKSxlLmJsdXIoKSxhd2FpdCAoMCxjLmRlbGF5KSg1MCl9ZnVuY3Rpb24gUyhlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnR8fGUgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50fWFzeW5jIGZ1bmN0aW9uIEUoZSx0KXtsZXQgcj0oMCx1LmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKSgnLi8vYnV0dG9uW0BkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCJdJyxlKTtpZighcilyZXR1cm47bGV0IG49XCJ0cnVlXCI9PT1yLmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIik7bnx8KHIuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCx2aWV3OndpbmRvd30pKSxhd2FpdCAoMCxjLmRlbGF5KSgxMjApKTtsZXQgaT0oMCx1LmdldE9yZGVyZWROb2Rlc1NhZmUpKGAuLy9kaXZbJHtoKFwiZHJvcGRvd24tbWVudVwiKX1dLy8qWyR7aChcImRyb3Bkb3duLWl0ZW1cIil9XWAsZSksYT0oMCxvLmZpbmRFeGFjdENob2ljZSkoaSx0LGU9PmUudGV4dENvbnRlbnQpO2lmKGEpe2EuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCx2aWV3OndpbmRvd30pKSxhd2FpdCAoMCxjLmRlbGF5KSgxMjApO3JldHVybn1yLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsdmlldzp3aW5kb3d9KSksYXdhaXQgKDAsYy5kZWxheSkoODApfWFzeW5jIGZ1bmN0aW9uIHgoZSx0KXtsZXQgcj1lLiRpbnB1dDtpZighcilyZXR1cm47bGV0IG49QXJyYXkuaXNBcnJheSh0KT90WzBdOnQsaT1TdHJpbmcobj8/XCJcIikudHJpbSgpO2lmKGkpe2lmKHIgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCl7bGV0IGU9KDAsby5maW5kRXhhY3RDaG9pY2UpKEFycmF5LmZyb20oci5vcHRpb25zKSxpLGU9PmUudGV4dENvbnRlbnQsZT0+ZS52YWx1ZSk7ZSYmKHIuc2VsZWN0ZWRJbmRleD1BcnJheS5mcm9tKHIub3B0aW9ucykuaW5kZXhPZihlKSxyLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMH0pKSxyLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITB9KSksYXdhaXQgKDAsYy5kZWxheSkoMTAwKSk7cmV0dXJufWlmKHIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCYmKHIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiamQtZm9ybS1zZWxlY3RcIil8fHIucXVlcnlTZWxlY3Rvcj8uKFwiLmpkLWZvcm0tc2VsZWN0LCAuZHJvcGRvd24tbWVudVwiKSkpe2F3YWl0IEUocixpKTtyZXR1cm59ciBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQmJmF3YWl0IHcocixpKX19YXN5bmMgZnVuY3Rpb24gQyhlLHQpe2xldCByPVN0cmluZyh0Pz9cIlwiKS50cmltKCk7aWYoIXIpcmV0dXJuITE7bGV0IG49QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuamQtZm9ybS1sYXlvdXRcIikpLmZpbmQoZT0+e2xldCB0PWUucXVlcnlTZWxlY3RvcihcIjpzY29wZSA+IGxhYmVsLmpkLWxhYmVsXCIpO3JldHVyblwiY291bnRyeVwiPT09Zyh0Py50ZXh0Q29udGVudCl9KSxvPW4/LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24uamQtZm9ybS1zZWxlY3RcIik7aWYoIW8pcmV0dXJuITE7bGV0IGk9QXJyYXkuZnJvbShvLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbVwiKSkubWFwKGU9PlN0cmluZyhlLnRleHRDb250ZW50Pz9cIlwiKS50cmltKCkpLmZpbHRlcihCb29sZWFuKSxhPSgwLHAucmVzb2x2ZUpvYmRpdmFDb3VudHJ5T3B0aW9uKShyLGkpO2lmKCFhKXJldHVybiExO2F3YWl0IHgoe2xhYmVsOlwiQ291bnRyeVwiLHR5cGU6cy5GSUVMRF9UWVBFLlNFTEVDVCxyZXF1aXJlZDohMSxvcHRpb25zOltdLCRpbnB1dDpvfSxhKTtsZXQgbD1nKG8ucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5qZC1mb3JtXCIpPy50ZXh0Q29udGVudCk7cmV0dXJuIGw9PT1nKGEpJiYoYXdhaXQgKDAsYy5kZWxheSkoMzAwKSwhMCl9YXN5bmMgZnVuY3Rpb24gQShlLHQpe2lmKCF0KXJldHVybjtsZXQgcj0vXlxcZCskLy50ZXN0KHQpJiZBcnJheS5pc0FycmF5KGUub3B0aW9ucykmJmUub3B0aW9uc1tOdW1iZXIodCldfHx0O2F3YWl0IHgoZSxyKX1mdW5jdGlvbiBrKGUsdCl7bGV0IHI7Zm9yKGxldCBuIGluIHQpaWYoKDAsYS5pc01hdGNoZWQpKGUsbikpe3I9dFtuXTticmVha31pZihudWxsPT1yfHxcIlwiPT09cil0aHJvdyBuZXcgaS5WYWx1ZUVycm9yKGBObyBtYXRjaGluZyBmaWVsZCBmb3IgbGFiZWw6ICR7ZX1gKTtsZXQgbj0oMCxwLm5vcm1hbGl6ZUpvYmRpdmFQaG9uZVZhbHVlKShyKTtpZighbil0aHJvdyBuZXcgaS5WYWx1ZUVycm9yKGBJbnZhbGlkIHBob25lIHZhbHVlIGZvciBsYWJlbDogJHtlfWApO3JldHVybiBufWFzeW5jIGZ1bmN0aW9uIFQoZSx0LHIsbixvPSEwKXt0cnl7bGV0IG49ayhlLmxhYmVsLHQpO2lmKCFuLnRleHQpdGhyb3cgbmV3IGkuVmFsdWVFcnJvcihgTWlzc2luZyBwaG9uZSB0ZXh0IGZvciBsYWJlbDogJHtlLmxhYmVsfWApO2xldCBhPWUuY2hpbGRyZW58fFtdLGw9YS5maW5kKGU9PlwidHlwZVwiPT09ZS5sYWJlbC50b0xvd2VyQ2FzZSgpKSxzPWEuZmluZChlPT5cImNvdW50cnlcIj09PWUubGFiZWwudG9Mb3dlckNhc2UoKSksdT1hLmZpbmQoZT0+XCJ0ZXh0XCI9PT1lLmxhYmVsLnRvTG93ZXJDYXNlKCkpLGM9bCYmL15cXGQrJC8udGVzdChuLnR5cGUpJiZBcnJheS5pc0FycmF5KGwub3B0aW9ucykmJmwub3B0aW9uc1tOdW1iZXIobi50eXBlKV18fG4udHlwZTtpZihsJiZjJiZhd2FpdCB4KGwsYykscyYmbi5jb3VudHJ5JiZhd2FpdCBBKHMsbi5jb3VudHJ5KSx1JiZuLnRleHQpe2lmKCFTKHUuJGlucHV0KSl0aHJvdyBuZXcgaS5WYWx1ZUVycm9yKGBJbnZhbGlkIHBob25lIHRleHQgaW5wdXQgZm9yIGxhYmVsOiAke2UubGFiZWx9YCk7YXdhaXQgdyh1LiRpbnB1dCxuLnRleHQpfW8mJnIoZS5sYWJlbCl9Y2F0Y2godCl7dCBpbnN0YW5jZW9mIGkuVmFsdWVFcnJvcnx8Y29uc29sZS5lcnJvcihcIltqb2JkaXZhXVtwaG9uZSBzZWN0aW9uXVwiLHQpLG8mJm4oZS5sYWJlbCl9fWFzeW5jIGZ1bmN0aW9uIEYoZSx0KXtsZXQgcj1BcnJheS5pc0FycmF5KHQpP3Q6W3RdLG49ZS4kY2hlY2tib3hzfHwoZS4kaW5wdXQ/W2UuJGlucHV0XTpbXSksaT1lPT4hMD09PWV8fDE9PT1lfHxcInllc1wiPT09U3RyaW5nKGU/P1wiXCIpLnRvTG93ZXJDYXNlKCl8fFwidHJ1ZVwiPT09U3RyaW5nKGU/P1wiXCIpLnRvTG93ZXJDYXNlKCksYT1lPT5TdHJpbmcoZT8/XCJcIikucmVwbGFjZSgvXFx1MDBhMC9nLFwiIFwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpLGw9ci5tYXAoZT0+YShlKSkuZmlsdGVyKEJvb2xlYW4pLHM9dD0+e2xldCByPXQuaWQ/YShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke3QuaWR9XCJdYCk/LnRleHRDb250ZW50fHxcIlwiKTpcIlwiLG49YSh0LmNsb3Nlc3QoXCJsYWJlbFwiKT8udGV4dENvbnRlbnR8fFwiXCIpLG89YShlLmxhYmVsfHxcIlwiKTtyZXR1cm4gcnx8bnx8b3x8YSh0LnZhbHVlKX0sdT1lPT5sLnNvbWUodD0+IWkodCkmJigwLG8uaXNFeGFjdENob2ljZU1hdGNoKShlLHQpKTtpZigxPT09bi5sZW5ndGgpe2xldCBlPW5bMF0sdD1zKGUpLHI9bC5zb21lKGU9PmkoZSkpfHx1KHQpO2UuY2hlY2tlZCE9PXImJihlLmNsaWNrKCksYXdhaXQgKDAsYy5kZWxheSkoMTAwKSk7cmV0dXJufWZvcihsZXQgZSBvZiBuKXtsZXQgdD1zKGUpLHI9dSh0KTtyJiYhZS5jaGVja2VkJiYoZS5jbGljaygpLGF3YWl0ICgwLGMuZGVsYXkpKDgwKSl9fWFzeW5jIGZ1bmN0aW9uIEkoZSx0KXtsZXQgcj1TdHJpbmcoKEFycmF5LmlzQXJyYXkodCk/dFswXTp0KT8/XCJcIikudHJpbSgpO2lmKCFyKXJldHVybjtsZXQgbj1lLiRyYWRpb3MsaT1lLiRyYWRpb1BhcmVudHx8ZS4kaW5wdXQ/LnBhcmVudEVsZW1lbnR8fGRvY3VtZW50LGE9biYmbi5sZW5ndGg+MD9uOkFycmF5LmZyb20oaS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKSksbD0oMCxvLmZpbmRFeGFjdENob2ljZSkoYS5maWx0ZXIoZT0+IWUuZGlzYWJsZWQpLHIsZT0+RChlKSxlPT5lLnZhbHVlKTtsJiYhbC5jaGVja2VkJiYobC5jbGljaygpLGF3YWl0ICgwLGMuZGVsYXkpKDgwKSl9ZnVuY3Rpb24gaihlKXtyZXR1cm4gZS5yZXBsYWNlKC9bKlxcdTI3MzFdL2csXCJcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCl9ZnVuY3Rpb24gRChlKXtsZXQgdD1lLmlkP2ooZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtlLmlkfVwiXWApPy50ZXh0Q29udGVudHx8XCJcIik6XCJcIixyPWooZS5jbG9zZXN0KFwibGFiZWxcIik/LnRleHRDb250ZW50fHxcIlwiKSxuPWooZS5uZXh0RWxlbWVudFNpYmxpbmc/LnRleHRDb250ZW50fHxcIlwiKSxvPWooZS5jbG9zZXN0KFwiLnJhZGlvLWJ1dHRvblwiKT8udGV4dENvbnRlbnR8fFwiXCIpO3JldHVybiB0fHxyfHxufHxvfHxqKGUudmFsdWUpfWFzeW5jIGZ1bmN0aW9uIFAoZT1kb2N1bWVudCx0LHIsbil7bGV0IG89ZS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZmlsZVwiXVthY2NlcHQqPVwiLnBkZlwiXSwgaW5wdXRbdHlwZT1cImZpbGVcIl1bYWNjZXB0Kj1cInBkZlwiXSwgaW5wdXRbdHlwZT1cImZpbGVcIl0nKTtpZighbylyZXR1cm47bGV0IGk9YXdhaXQgKDAsYS5mZXRjaFBkZkFzQmxvYikodCk7YXdhaXQgKDAsbC51cGxvYWRGaWxlcykobyxpLHIsbixcIlJlc3VtZS9DVlwiKSxhd2FpdCAoMCxmLmRlZmF1bHQpKCgpPT5lLnF1ZXJ5U2VsZWN0b3IoJ1tjbGFzcyo9XCJ1cGxvYWRlZFwiIGldLCBbY2xhc3MqPVwiZmlsZS1uYW1lXCIgaV0sIFtjbGFzcyo9XCJyZXN1bWUtbmFtZVwiIGldJyl8fG51bGwsKCk9PiExLDUwKX1mdW5jdGlvbiBfKGUsdCl7cmV0dXJuIEFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKHQpKX1mdW5jdGlvbiBMKGUsdCl7cmV0dXJuIF8oZSx0KS5maWx0ZXIoZT0+ZS5xdWVyeVNlbGVjdG9yKFwiLmpkLWZvcm0tbGF5b3V0XCIpKX1mdW5jdGlvbiBSKGUsdCl7cmV0dXJuIEwoZSx0KS5sZW5ndGh9ZnVuY3Rpb24gTyhlPWRvY3VtZW50KXtyZXR1cm4gUihlLFwiLmpkLXJlZy1jYXJkLmlkLXJlZy13b3JrZXhwZXJpZW5jZVwiKX1hc3luYyBmdW5jdGlvbiBNKGUsdCxyKXtyZXR1cm4gcj9hd2FpdCByKCk6UihlLHQpfWFzeW5jIGZ1bmN0aW9uIE4oZT1kb2N1bWVudCl7bGV0IHQ9XCJbam9iZGl2YSBleHBhbmRDb2xsYXBzZWRdXCIscj1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcIi5qZC1yZWctY2FyZFwiKSksbj1yLmZpbHRlcihlPT4hZS5xdWVyeVNlbGVjdG9yKFwiLmpkLWZvcm0tbGF5b3V0XCIpKTtmb3IobGV0IGUgb2Ygbil7bGV0IHI9eihlKTtpZighcnx8cj09PWUpe2NvbnNvbGUud2FybihgJHt0fSBubyB0cmlnZ2VyIHJlc29sdmVkIGZvciBjYXJkYCxlLmNsYXNzTmFtZSk7Y29udGludWV9WShyLHt0YWc6dCxhY3Rpb25MYWJlbDpcIltleHBhbmQtY29sbGFwc2VkXVwifSksYXdhaXQgKDAsYy5kZWxheSkoNDAwKX19ZnVuY3Rpb24gJChlLHQpe2xldCByPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiLmpkLXJlZy1lbnRyeWJ0blwiKSkuZmlsdGVyKGU9PntsZXQgdD0oZS50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpLnRvTG93ZXJDYXNlKCk7cmV0dXJuIXQuaW5jbHVkZXMoXCJyZW1vdmVcIil9KSxuPWU9PnQuc29tZSh0PT5lLmluY2x1ZGVzKHQpKSxvPXIuZmluZChlPT57bGV0IHQ9KGUudGV4dENvbnRlbnR8fFwiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO3JldHVybiB0LmluY2x1ZGVzKFwiYWRkXCIpJiZ0LmluY2x1ZGVzKFwiYW5vdGhlclwiKSYmbih0KX0pO3JldHVybiBvfHxyLmZpbmQoZT0+e2xldCB0PShlLnRleHRDb250ZW50fHxcIlwiKS50cmltKCkudG9Mb3dlckNhc2UoKTtyZXR1cm4gdC5pbmNsdWRlcyhcImFkZFwiKSYmbih0KX0pfHxudWxsfWZ1bmN0aW9uIEIoZSl7bGV0IHQ9QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuamQtcmVnLWVudHJ5YnRuXCIpKS5maW5kKGU9PihlLnRleHRDb250ZW50fHxcIlwiKS50cmltKCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcInJlbW92ZVwiKSk7cmV0dXJuIHR8fCgwLHUuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFwiLi8vc3Bhbltjb250YWlucyhub3JtYWxpemUtc3BhY2UodGV4dCgpKSwgJ1JlbW92ZSBFbnRyeScpXVwiLGUpfHxudWxsfWZ1bmN0aW9uIHEoZSx0KXtmb3IobGV0IHIgb2YgdCl7bGV0IHQ9KDAsdS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkocixlKTtpZih0KXJldHVybiB0fXJldHVybiBudWxsfWZ1bmN0aW9uIFUoZSl7ZS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwLHZpZXc6d2luZG93fSkpfWZ1bmN0aW9uIEgoZSl7bGV0IHQ9ZT0+KGV8fFwiXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpLnRvTG93ZXJDYXNlKCkscj1bdChlLnRleHRDb250ZW50KSx0KGUucHJldmlvdXNFbGVtZW50U2libGluZz8udGV4dENvbnRlbnQpLHQoZS5wYXJlbnRFbGVtZW50Py50ZXh0Q29udGVudCksdChlLnBhcmVudEVsZW1lbnQ/LnByZXZpb3VzRWxlbWVudFNpYmxpbmc/LnRleHRDb250ZW50KV07cmV0dXJuIHIuc29tZShlPT5lLmluY2x1ZGVzKFwiYWRkIGEgcmVmZXJlbmNlXCIpKX1mdW5jdGlvbiBZKGUsdCl7aWYoIWUpcmV0dXJuIGNvbnNvbGUud2FybihgJHt0LnRhZ30gJHt0LmFjdGlvbkxhYmVsfSB0YXJnZXQgaXMgbnVsbGApLG51bGw7bGV0IHI9dC5yZXNvbHZlQ2xpY2tUYXJnZXQ/dC5yZXNvbHZlQ2xpY2tUYXJnZXQoZSk6ZTtyZXR1cm4gSChyKT8oY29uc29sZS53YXJuKGAke3QudGFnfSAke3QuYWN0aW9uTGFiZWx9IHNraXAgdW5zdXBwb3J0ZWQgcmVmZXJlbmNlIHRyaWdnZXJgLHt0YWc6ci50YWdOYW1lLGNsYXNzTmFtZTpyLmNsYXNzTmFtZSxvdXRlckhUTUxTaG9ydDpyLm91dGVySFRNTD8uc2xpY2UoMCwyMDApfSksbnVsbCk6KFUocikscil9ZnVuY3Rpb24geihlKXtsZXQgdD0oMCx1LmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcIi4vL3NwYW5bY29udGFpbnMobm9ybWFsaXplLXNwYWNlKHRleHQoKSksICdBZGQgYScpXS9mb2xsb3dpbmctc2libGluZzo6c3BhblsxXVwiLGUpO3JldHVybiB0fHxlLnF1ZXJ5U2VsZWN0b3IoJ3NwYW5bc3R5bGUqPVwiY3Vyc29yOiBwb2ludGVyXCJdLCBzcGFuW3N0eWxlKj1cIm1hcmdpbi1sZWZ0OiBhdXRvXCJdJyl8fGUucXVlcnlTZWxlY3RvcihcInN2Z1wiKT8ucGFyZW50RWxlbWVudHx8ZX1hc3luYyBmdW5jdGlvbiBWKGUsdCxyLG4sbyl7bGV0IGk9YFtqb2JkaXZhIGFkZFJlZ0NhcmRTZWN0aW9ucyAke24uam9pbihcIi9cIil9XWAsYT1hd2FpdCBNKGUscixvPy5nZXRDdXJyZW50Q291bnQpO2Zvcig7YT50Oyl7bGV0IHQ9TChlLHIpLG49Qih0W3QubGVuZ3RoLTFdKTtpZighbil7Y29uc29sZS53YXJuKGAke2l9IHJlbW92ZVRhcmdldCBpcyBudWxsLCBzdG9wIHRyaW1taW5nYCk7YnJlYWt9WShuLHt0YWc6aSxhY3Rpb25MYWJlbDpcIlt0cmltLWV4dHJhXVwifSksYXdhaXQgKDAsYy5kZWxheSkoMjUwKSxhPWF3YWl0IE0oZSxyLG8/LmdldEN1cnJlbnRDb3VudCl9aWYodDw9MClyZXR1cm47bGV0IGw9MDtmb3IoO2E8dDspe2wrPTE7bGV0IHM9MD09PWEmJm4uaW5jbHVkZXMoXCJlZHVjYXRpb25cIiksdT0wPT09YSYmKG4uaW5jbHVkZXMoXCJlbXBsb3ltZW50XCIpfHxuLmluY2x1ZGVzKFwiZXhwZXJpZW5jZVwiKSksZD1udWxsO2lmKHMpZD1xKGUsW1wiLi8vc3Bhbltjb250YWlucyh0ZXh0KCksICdBZGQgYSBFZHVjYXRpb24nKV0vZm9sbG93aW5nLXNpYmxpbmc6OnNwYW5cIl0pO2Vsc2UgaWYodSkoZD1xKGUsW1wiLi8vc3Bhbltjb250YWlucyh0ZXh0KCksICdBZGQgYSBXb3JrIEV4cGVyaWVuY2UnKV0vZm9sbG93aW5nLXNpYmxpbmc6OnNwYW5cIl0pKXx8KGQ9JChlLG4pKTtlbHNlIGlmKDA9PT1hKWQ9XyhlLHIpLmZpbmQoZT0+e2lmKGUucXVlcnlTZWxlY3RvcihcIi5qZC1mb3JtLWxheW91dFwiKSlyZXR1cm4hMTtsZXQgdD0oZS50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpLnRvTG93ZXJDYXNlKCk7cmV0dXJuIHQuaW5jbHVkZXMoXCJhZGRcIikmJm4uc29tZShlPT50LmluY2x1ZGVzKGUpKX0pfHxudWxsO2Vsc2V7bGV0IHQ9bi5pbmNsdWRlcyhcImVtcGxveW1lbnRcIil8fG4uaW5jbHVkZXMoXCJleHBlcmllbmNlXCIpO2Q9dCYmcShlLFtcIi4vL3NwYW5bY29udGFpbnMobm9ybWFsaXplLXNwYWNlKHRleHQoKSksICdBZGQgYW5vdGhlciB3b3JrIGV4cGVyaWVuY2UnKV1cIl0pfHwkKGUsbil9aWYoIWQpe2NvbnNvbGUud2FybihgJHtpfSBhZGRUYXJnZXQgaXMgbnVsbCwgYnJlYWtgKTticmVha31sZXQgZj1ZKGQse3RhZzppLGFjdGlvbkxhYmVsOlwiW2FkZC1zZWN0aW9uXVwiLHJlc29sdmVDbGlja1RhcmdldDpzfHwwIT09YT92b2lkIDA6en0pO2lmKCFmKWJyZWFrO2xldCBwPTAsbT0hMTtmb3IoO3A8MjA7KXtsZXQgdD1hd2FpdCBNKGUscixvPy5nZXRDdXJyZW50Q291bnQpO2lmKHQ+YSl7bT0hMDticmVha31hd2FpdCAoMCxjLmRlbGF5KSgxMDApLHArPTF9bGV0IGg9YXdhaXQgTShlLHIsbz8uZ2V0Q3VycmVudENvdW50KTtpZihoPD1hKXtjb25zb2xlLndhcm4oYCR7aX0gc2VjdGlvbiBjb3VudCBkaWQgbm90IGluY3JlYXNlIGFmdGVyIGFkZCBjbGlja2Ase2N1cnJlbnQ6YSxuZXh0Q3VycmVudDpoLGNvdW50OnR9KTticmVha31hPWh9YXdhaXQgKDAsYy5kZWxheSkoMjAwKX1hc3luYyBmdW5jdGlvbiBXKGUpe2F3YWl0IEcoZG9jdW1lbnQsZSl9YXN5bmMgZnVuY3Rpb24gRyhlPWRvY3VtZW50LHQpe2F3YWl0IFYoZSx0LFwiLmpkLXJlZy1jYXJkLmlkLXJlZy1lZHVjYXRpb25cIixbXCJlZHVjYXRpb25cIl0pfWFzeW5jIGZ1bmN0aW9uIEsoZSl7YXdhaXQgWChkb2N1bWVudCxlKX1hc3luYyBmdW5jdGlvbiBYKGU9ZG9jdW1lbnQsdCl7YXdhaXQgVihlLHQsXCIuamQtcmVnLWNhcmQuaWQtcmVnLXdvcmtleHBlcmllbmNlXCIsW1wiZW1wbG95bWVudFwiLFwiZXhwZXJpZW5jZVwiLFwid29ya1wiLFwiam9iXCJdLHtnZXRDdXJyZW50Q291bnQ6KCk9Pk8oZSl9KX1cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6Im9wZXJhdGlvbnMuODI5NWZjM2UuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);