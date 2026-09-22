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
})({"2psIJ":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\methods\\cover-letter.js",
    "bundleId": "0c4eb0788d43a14e",
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
var j = z(require("fcea873e280ecce6"));
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

},{"fcea873e280ecce6":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"a541k":[function(require,module,exports) {
/**
 * Parcel module id: 7VR5i
 * Resolved path: src/contents/methods/cover-letter.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~utils/current-job-id -> cAdEa  =>  src/utils/current-job-id.js
  *
 * Deobfuscated (pretty + export/import rename). Parcel e()/r preserved.
 */ var helpers = e("@parcel/transformer-js/src/esmodule-helpers.js");
helpers.defineInteropFlag(r), helpers.export(r, "DEFAULT_AUTOFILL_COVER_LETTER_PROMPT", ()=>DEFAULT_AUTOFILL_COVER_LETTER_PROMPT), helpers.export(r, "markTextCoverLetterRules", ()=>markTextCoverLetterRules), helpers.export(r, "prepareCoverLetterFillTask", ()=>prepareCoverLetterFillTask), helpers.export(r, "findCoverLetterRules", ()=>findCoverLetterRules), helpers.export(r, "withoutCoverLetterRules", ()=>withoutCoverLetterRules), helpers.export(r, "parseAutofillCoverLetterResumeId", ()=>parseAutofillCoverLetterResumeId), helpers.export(r, "getCurrentAutofillJobId", ()=>getCurrentAutofillJobId), helpers.export(r, "startAutofillCoverLetterRequest", ()=>startAutofillCoverLetterRequest), helpers.export(r, "onAutofillCoverLetterGenerated", ()=>onAutofillCoverLetterGenerated), helpers.export(r, "resolveCoverLetterTextForFill", ()=>resolveCoverLetterTextForFill), helpers.export(r, "fillCoverLetterTask", ()=>fillCoverLetterTask), helpers.export(r, "fillPreparedCoverLetterTask", ()=>fillPreparedCoverLetterTask), helpers.export(r, "formatCoverLetterMarkdownAsText", ()=>formatCoverLetterMarkdownAsText), helpers.export(r, "applyCoverLetterTextToAnswer", ()=>applyCoverLetterTextToAnswer);
var messaging = e("@plasmohq/messaging"), cancellation = e("~contents/methods/cancellation"), enums = e("~core/enums"), currentJobId = e("~utils/current-job-id");
let DEFAULT_AUTOFILL_COVER_LETTER_PROMPT = "Write a tailored cover letter for this job application using the candidate's resume and the job description. Keep it concise, specific, and employer-facing: open with clear interest in the role, connect the candidate's most relevant experience to the company's needs, and close with a confident next step. Do not invent facts, do not include placeholders, and output only the cover letter text.";
function u(e1) {
    return e1.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}
function c(e1) {
    if (!e1) return !1;
    let t = e1.tagName?.toLowerCase(), r1 = (e1.type || e1.getAttribute?.("type") || "")?.toLowerCase() ?? "";
    return "textarea" === t || ("input" === t ? ![
        "button",
        "checkbox",
        "file",
        "hidden",
        "image",
        "radio",
        "reset",
        "submit"
    ].includes(r1) : e1.isContentEditable || e1.getAttribute?.("contenteditable") === "true");
}
function d(e1) {
    let t = u(e1 ?? "");
    return !(!t.includes("cover letter") || /\b(upload|attach|attachment|attached|file|resume|cv)\b/.test(t) || /^(do|did|have|has|will|would|can|could|is|are)\b/.test(t));
}
function f(e1) {
    return e1.type === enums.FIELD_TYPE.TEXT && c(e1.$input) && d(e1.label);
}
function markTextCoverLetterRules(e1 = []) {
    return e1.map((e1)=>{
        let t = e1.children, r1 = f(e1) ? {
            ...e1,
            type: enums.FIELD_TYPE.COVER_LETTER
        } : e1;
        return Array.isArray(t) ? {
            ...r1,
            children: markTextCoverLetterRules(t)
        } : r1;
    });
}
function prepareCoverLetterFillTask({ rules: e1, ...t }) {
    let r1 = markTextCoverLetterRules(e1), _helpersLocal = findCoverLetterRules(r1), _messagingLocal = (e1 = t.coverLetter)=>startAutofillCoverLetterRequest({
            ...t,
            coverLetter: e1,
            rules: r1
        });
    return {
        rules: r1,
        task: _helpersLocal.length ? {
            rules: _helpersLocal,
            coverLetterRequest: _messagingLocal(),
            startCoverLetterRequest: _messagingLocal,
            lateRequestAttempted: !1
        } : null
    };
}
function findCoverLetterRules(e1 = []) {
    let t = [];
    for (let r1 of e1){
        r1.type === enums.FIELD_TYPE.COVER_LETTER && t.push(r1);
        let e1 = r1.children;
        Array.isArray(e1) && t.push(...findCoverLetterRules(e1));
    }
    return t;
}
function withoutCoverLetterRules(e1 = []) {
    return e1.filter((e1)=>e1.type !== enums.FIELD_TYPE.COVER_LETTER).map((e1)=>{
        let t = e1.children;
        return Array.isArray(t) ? {
            ...e1,
            children: withoutCoverLetterRules(t)
        } : e1;
    });
}
function b(e1) {
    return !!e1?.markdown?.trim();
}
function parseAutofillCoverLetterResumeId(e1) {
    if (null == e1 || "" === e1) return;
    if ("number" == typeof e1) return e1;
    let t = e1.trim();
    return t || void 0;
}
function getCurrentAutofillJobId(e1) {
    let t = "undefined" != typeof window ? window.location.href : "";
    return (0, currentJobId.resolveCurrentJobId)({
        explicitJobId: e1,
        pageUrl: t
    });
}
async function w(e1) {
    let t = await (0, messaging.sendToBackground)({
        name: "generateAutofillCoverLetter",
        body: e1
    });
    return t?.data ?? null;
}
function startAutofillCoverLetterRequest({ rules: e1, coverLetter: t, jobId: r1, userPrompt: _helpersLocal2, resumeId: _messagingLocal2, tailorId: _cancellationLocal, coverLetterId: _enumsLocal, generateCoverLetter: _currentJobIdLocal = w }) {
    let _uLocal = findCoverLetterRules(e1);
    if (!_uLocal.length || b(t)) return null;
    let _cLocal = getCurrentAutofillJobId(r1), _dLocal = _helpersLocal2?.trim() || DEFAULT_AUTOFILL_COVER_LETTER_PROMPT;
    if (!_cLocal || !_dLocal) return null;
    let _fLocal = parseAutofillCoverLetterResumeId(_messagingLocal2), _markTextCoverLetterRulesLocal = {
        jobId: _cLocal,
        userPrompt: _dLocal,
        ..._fLocal ? {
            resumeId: _fLocal
        } : {},
        ..._cancellationLocal ? {
            tailorId: _cancellationLocal
        } : {},
        ..._enumsLocal ? {
            coverLetterId: _enumsLocal
        } : {}
    };
    return _currentJobIdLocal(_markTextCoverLetterRulesLocal).then((e1)=>{
        let t = e1 ?? null;
        return t?.coverLetterId && C(t), t;
    }).catch(()=>null);
}
let E = new Set();
function onAutofillCoverLetterGenerated(e1) {
    return E.add(e1), ()=>E.delete(e1);
}
function C(e1) {
    for (let t of E)try {
        t(e1);
    } catch (e1) {
        console.warn("[autofill cover letter] listener threw", e1);
    }
}
_c = C;
function A(e1, t = []) {
    let r1 = e1?.regular ?? {}, _helpersLocal3 = (e1)=>{
        for (let r1 of t){
            let t = u(r1.label), _helpersLocal4 = Object.keys(e1).find((e1)=>u(e1) === t), _messagingLocal4 = _helpersLocal4 ? e1[_helpersLocal4] : void 0, _cancellationLocal3 = k(_messagingLocal4);
            if (_cancellationLocal3) return _cancellationLocal3;
        }
        return "";
    }, _messagingLocal3 = _helpersLocal3(r1);
    if (_messagingLocal3) return _messagingLocal3;
    let _cancellationLocal2 = Object.fromEntries((e1?.fillDataList ?? []).filter((e1)=>e1?.name).map((e1)=>[
            e1.name,
            e1.value
        ]));
    return _helpersLocal3(_cancellationLocal2);
}
_c1 = A;
function k(e1) {
    return Array.isArray(e1) ? e1.map((e1)=>String(e1 ?? "").trim()).find(Boolean) ?? "" : String(e1 ?? "").trim();
}
async function resolveCoverLetterTextForFill({ coverLetter: e1, coverLetterRequest: t, answer: r1, coverLetterRules: _helpersLocal5 }) {
    let _messagingLocal5 = formatCoverLetterMarkdownAsText(e1?.markdown);
    if (_messagingLocal5) return _messagingLocal5;
    let _cancellationLocal4 = t ? await t : null, _enumsLocal2 = formatCoverLetterMarkdownAsText(_cancellationLocal4?.markdown);
    return _enumsLocal2 || A(r1, _helpersLocal5);
}
async function fillCoverLetterTask({ coverLetterRules: e1 = [], coverLetter: t, coverLetterRequest: r1, answer: _helpersLocal6, operationConfig: _messagingLocal6, updateMissedProgress: _currentJobIdLocal2 }) {
    if (!e1.length) return;
    let _DEFAULT_AUTOFILL_COVER_LETTER_PROMPTLocal = await resolveCoverLetterTextForFill({
        coverLetter: t,
        coverLetterRequest: r1,
        answer: _helpersLocal6,
        coverLetterRules: e1
    });
    (0, cancellation.checkpoint)();
    let _uLocal2 = _messagingLocal6[enums.FIELD_TYPE.COVER_LETTER] ?? _messagingLocal6[enums.FIELD_TYPE.TEXT];
    if (!_DEFAULT_AUTOFILL_COVER_LETTER_PROMPTLocal || !_uLocal2) {
        for (let t of e1)_currentJobIdLocal2?.(t.label);
        return;
    }
    let _cLocal2 = Object.fromEntries(e1.map((e1)=>[
            e1.label,
            _DEFAULT_AUTOFILL_COVER_LETTER_PROMPTLocal
        ]));
    for (let t of e1)(0, cancellation.checkpoint)(), await _uLocal2(t, _cLocal2);
}
function I(e1) {
    return {
        ...e1,
        [enums.FIELD_TYPE.COVER_LETTER]: e1[enums.FIELD_TYPE.COVER_LETTER] ?? e1[enums.FIELD_TYPE.TEXT]
    };
}
_c2 = I;
async function fillPreparedCoverLetterTask({ task: e1, coverLetter: t, answer: r1, operationConfig: _helpersLocal7, updateMissedProgress: _messagingLocal7 }) {
    if (!e1?.rules.length) return;
    let _cancellationLocal5 = e1.coverLetterRequest;
    _cancellationLocal5 || e1.lateRequestAttempted || (e1.lateRequestAttempted = !0, _cancellationLocal5 = e1.startCoverLetterRequest(t), e1.coverLetterRequest = _cancellationLocal5), await fillCoverLetterTask({
        coverLetterRules: e1.rules,
        coverLetter: t,
        coverLetterRequest: _cancellationLocal5,
        answer: r1,
        updateMissedProgress: _messagingLocal7,
        operationConfig: I(_helpersLocal7)
    });
}
function D(e1) {
    return e1.replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, '"').replace(/&#39;/gi, "'");
}
_c3 = D;
function P(e1) {
    let t = e1.split("\n").map((e1)=>e1.trim()).filter(Boolean), r1 = t.findIndex((e1)=>/^(dear\b|to\b.*hiring manager|i am applying\b|i'?m applying\b)/i.test(e1));
    return (r1 < 0 && (r1 = t.findIndex((e1)=>/[.!?]$/.test(e1))), r1 <= 0) ? t.join("\n\n") : t.slice(r1).join("\n\n");
}
_c4 = P;
function _(e1) {
    let t = e1.split("\n").map((e1)=>e1.trim()).filter(Boolean);
    if (t.length <= 1) return t.join("\n\n");
    let r1 = t.at(-1) ?? "", _helpersLocal8 = t.at(-2) ?? "", _messagingLocal8 = /^(thank you|thanks|sincerely|best|regards|warm regards)\b/i.test(_helpersLocal8), _cancellationLocal6 = _messagingLocal8 && !/[.;:!?]$/.test(_helpersLocal8) && _helpersLocal8.split(/\s+/).length <= 4, _enumsLocal3 = /^[A-Za-z][A-Za-z .'-]{1,60}$/.test(r1) && !/[.!?]$/.test(r1);
    return _cancellationLocal6 && _enumsLocal3 ? t.slice(0, -2).join("\n\n") : _messagingLocal8 && _enumsLocal3 ? t.slice(0, -1).join("\n\n") : t.join("\n\n");
}
function formatCoverLetterMarkdownAsText(e1) {
    if (!e1?.trim()) return "";
    let t = D(e1.replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n\n").replace(/<[^>]+>/g, "")), r1 = t.replace(/<br\s*\/?>/gi, "\n").replace(/\r\n/g, "\n").replace(/```[\s\S]*?```/g, (e1)=>e1.replace(/^```[^\n]*\n?/, "").replace(/\n?```$/, "").trim()).replace(/`([^`]+)`/g, "$1").replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/^>\s?/gm, "").replace(/^#{1,6}\s*/gm, "").replace(/^\s*[-*+]\s+/gm, "").replace(/^\s*\d+\.\s+/gm, "").replace(/\*\*([^*]+)\*\*/g, "$1").replace(/__([^_]+)__/g, "$1").replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "$1").replace(/(?<!_)_([^_]+)_(?!_)/g, "$1").replace(/\n{3,}/g, "\n\n").trim();
    return _(P(r1));
}
function applyCoverLetterTextToAnswer(e1, t, r1 = [
    "Cover Letter"
]) {
    let _helpersLocal9 = formatCoverLetterMarkdownAsText(t?.markdown);
    if (!_helpersLocal9) return e1;
    let _messagingLocal9 = new Set(r1.map((e1)=>u(e1))), _cancellationLocal7 = (e1)=>!!e1 && _messagingLocal9.has(u(e1)), _enumsLocal4 = !1, _currentJobIdLocal3 = Object.fromEntries(Object.entries(e1.regular ?? {}).map(([e1, t])=>_cancellationLocal7(e1) ? (_enumsLocal4 = !0, [
            e1,
            _helpersLocal9
        ]) : [
            e1,
            t
        ])), _DEFAULT_AUTOFILL_COVER_LETTER_PROMPTLocal2 = e1.fillDataList?.map((e1)=>_cancellationLocal7(e1?.name) ? (_enumsLocal4 = !0, {
            ...e1,
            value: _helpersLocal9
        }) : e1);
    return _enumsLocal4 ? {
        ...e1,
        regular: _currentJobIdLocal3,
        ..._DEFAULT_AUTOFILL_COVER_LETTER_PROMPTLocal2 ? {
            fillDataList: _DEFAULT_AUTOFILL_COVER_LETTER_PROMPTLocal2
        } : {}
    } : e1;
}
var _c, _c1, _c2, _c3, _c4;
$RefreshReg$(_c, "C");
$RefreshReg$(_c1, "A");
$RefreshReg$(_c2, "I");
$RefreshReg$(_c3, "D");
$RefreshReg$(_c4, "P");

},{}]},["2psIJ","a541k"], "a541k", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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ZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtY2Y3MzE5MGYwMjdjNzM5Yi5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9tZXRob2RzL2NvdmVyLWxldHRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxtZXRob2RzXFxcXGNvdmVyLWxldHRlci5qc1wiLFwiYnVuZGxlSWRcIjpcIjBjNGViMDc4OGQ0M2ExNGVcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiA3VlI1aVxyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvbWV0aG9kcy9jb3Zlci1sZXR0ZXIuanNcbiAqIERlcGVuZGVuY2llczpcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIEBwbGFzbW9ocS9tZXNzYWdpbmcgLT4gOTJHeUIgID0+ICBAcGxhc21vaHEvbWVzc2FnaW5nLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvY2FuY2VsbGF0aW9uIC0+IGx1SmZzICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvY2FuY2VsbGF0aW9uLmpzXHJcbiAqICAgfmNvcmUvZW51bXMgLT4gMU8zbmMgID0+ICBzcmMvY29yZS9lbnVtcy5qc1xyXG4gKiAgIH51dGlscy9jdXJyZW50LWpvYi1pZCAtPiBjQWRFYSAgPT4gIHNyYy91dGlscy9jdXJyZW50LWpvYi1pZC5qc1xyXG4gICpcbiAqIERlb2JmdXNjYXRlZCAocHJldHR5ICsgZXhwb3J0L2ltcG9ydCByZW5hbWUpLiBQYXJjZWwgZSgpL3IgcHJlc2VydmVkLlxuICovXG5cbnZhciBoZWxwZXJzID0gZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7XG5oZWxwZXJzLmRlZmluZUludGVyb3BGbGFnKHIpLCBoZWxwZXJzLmV4cG9ydChyLCBcIkRFRkFVTFRfQVVUT0ZJTExfQ09WRVJfTEVUVEVSX1BST01QVFwiLCAoKSA9PiBERUZBVUxUX0FVVE9GSUxMX0NPVkVSX0xFVFRFUl9QUk9NUFQpLCBoZWxwZXJzLmV4cG9ydChyLCBcIm1hcmtUZXh0Q292ZXJMZXR0ZXJSdWxlc1wiLCAoKSA9PiBtYXJrVGV4dENvdmVyTGV0dGVyUnVsZXMpLCBoZWxwZXJzLmV4cG9ydChyLCBcInByZXBhcmVDb3ZlckxldHRlckZpbGxUYXNrXCIsICgpID0+IHByZXBhcmVDb3ZlckxldHRlckZpbGxUYXNrKSwgaGVscGVycy5leHBvcnQociwgXCJmaW5kQ292ZXJMZXR0ZXJSdWxlc1wiLCAoKSA9PiBmaW5kQ292ZXJMZXR0ZXJSdWxlcyksIGhlbHBlcnMuZXhwb3J0KHIsIFwid2l0aG91dENvdmVyTGV0dGVyUnVsZXNcIiwgKCkgPT4gd2l0aG91dENvdmVyTGV0dGVyUnVsZXMpLCBoZWxwZXJzLmV4cG9ydChyLCBcInBhcnNlQXV0b2ZpbGxDb3ZlckxldHRlclJlc3VtZUlkXCIsICgpID0+IHBhcnNlQXV0b2ZpbGxDb3ZlckxldHRlclJlc3VtZUlkKSwgaGVscGVycy5leHBvcnQociwgXCJnZXRDdXJyZW50QXV0b2ZpbGxKb2JJZFwiLCAoKSA9PiBnZXRDdXJyZW50QXV0b2ZpbGxKb2JJZCksIGhlbHBlcnMuZXhwb3J0KHIsIFwic3RhcnRBdXRvZmlsbENvdmVyTGV0dGVyUmVxdWVzdFwiLCAoKSA9PiBzdGFydEF1dG9maWxsQ292ZXJMZXR0ZXJSZXF1ZXN0KSwgaGVscGVycy5leHBvcnQociwgXCJvbkF1dG9maWxsQ292ZXJMZXR0ZXJHZW5lcmF0ZWRcIiwgKCkgPT4gb25BdXRvZmlsbENvdmVyTGV0dGVyR2VuZXJhdGVkKSwgaGVscGVycy5leHBvcnQociwgXCJyZXNvbHZlQ292ZXJMZXR0ZXJUZXh0Rm9yRmlsbFwiLCAoKSA9PiByZXNvbHZlQ292ZXJMZXR0ZXJUZXh0Rm9yRmlsbCksIGhlbHBlcnMuZXhwb3J0KHIsIFwiZmlsbENvdmVyTGV0dGVyVGFza1wiLCAoKSA9PiBmaWxsQ292ZXJMZXR0ZXJUYXNrKSwgaGVscGVycy5leHBvcnQociwgXCJmaWxsUHJlcGFyZWRDb3ZlckxldHRlclRhc2tcIiwgKCkgPT4gZmlsbFByZXBhcmVkQ292ZXJMZXR0ZXJUYXNrKSwgaGVscGVycy5leHBvcnQociwgXCJmb3JtYXRDb3ZlckxldHRlck1hcmtkb3duQXNUZXh0XCIsICgpID0+IGZvcm1hdENvdmVyTGV0dGVyTWFya2Rvd25Bc1RleHQpLCBoZWxwZXJzLmV4cG9ydChyLCBcImFwcGx5Q292ZXJMZXR0ZXJUZXh0VG9BbnN3ZXJcIiwgKCkgPT4gYXBwbHlDb3ZlckxldHRlclRleHRUb0Fuc3dlcik7XG52YXIgbWVzc2FnaW5nID0gZShcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIiksXG4gIGNhbmNlbGxhdGlvbiA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb25cIiksXG4gIGVudW1zID0gZShcIn5jb3JlL2VudW1zXCIpLFxuICBjdXJyZW50Sm9iSWQgPSBlKFwifnV0aWxzL2N1cnJlbnQtam9iLWlkXCIpO1xubGV0IERFRkFVTFRfQVVUT0ZJTExfQ09WRVJfTEVUVEVSX1BST01QVCA9IFwiV3JpdGUgYSB0YWlsb3JlZCBjb3ZlciBsZXR0ZXIgZm9yIHRoaXMgam9iIGFwcGxpY2F0aW9uIHVzaW5nIHRoZSBjYW5kaWRhdGUncyByZXN1bWUgYW5kIHRoZSBqb2IgZGVzY3JpcHRpb24uIEtlZXAgaXQgY29uY2lzZSwgc3BlY2lmaWMsIGFuZCBlbXBsb3llci1mYWNpbmc6IG9wZW4gd2l0aCBjbGVhciBpbnRlcmVzdCBpbiB0aGUgcm9sZSwgY29ubmVjdCB0aGUgY2FuZGlkYXRlJ3MgbW9zdCByZWxldmFudCBleHBlcmllbmNlIHRvIHRoZSBjb21wYW55J3MgbmVlZHMsIGFuZCBjbG9zZSB3aXRoIGEgY29uZmlkZW50IG5leHQgc3RlcC4gRG8gbm90IGludmVudCBmYWN0cywgZG8gbm90IGluY2x1ZGUgcGxhY2Vob2xkZXJzLCBhbmQgb3V0cHV0IG9ubHkgdGhlIGNvdmVyIGxldHRlciB0ZXh0LlwiO1xuZnVuY3Rpb24gdShlKSB7XG4gIHJldHVybiBlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXowLTldKy9nLCBcIiBcIikudHJpbSgpO1xufVxuZnVuY3Rpb24gYyhlKSB7XG4gIGlmICghZSkgcmV0dXJuICExO1xuICBsZXQgdCA9IGUudGFnTmFtZT8udG9Mb3dlckNhc2UoKSxcbiAgICByID0gKGUudHlwZSB8fCBlLmdldEF0dHJpYnV0ZT8uKFwidHlwZVwiKSB8fCBcIlwiKT8udG9Mb3dlckNhc2UoKSA/PyBcIlwiO1xuICByZXR1cm4gXCJ0ZXh0YXJlYVwiID09PSB0IHx8IChcImlucHV0XCIgPT09IHQgPyAhW1wiYnV0dG9uXCIsIFwiY2hlY2tib3hcIiwgXCJmaWxlXCIsIFwiaGlkZGVuXCIsIFwiaW1hZ2VcIiwgXCJyYWRpb1wiLCBcInJlc2V0XCIsIFwic3VibWl0XCJdLmluY2x1ZGVzKHIpIDogZS5pc0NvbnRlbnRFZGl0YWJsZSB8fCBlLmdldEF0dHJpYnV0ZT8uKFwiY29udGVudGVkaXRhYmxlXCIpID09PSBcInRydWVcIik7XG59XG5mdW5jdGlvbiBkKGUpIHtcbiAgbGV0IHQgPSB1KGUgPz8gXCJcIik7XG4gIHJldHVybiAhKCF0LmluY2x1ZGVzKFwiY292ZXIgbGV0dGVyXCIpIHx8IC9cXGIodXBsb2FkfGF0dGFjaHxhdHRhY2htZW50fGF0dGFjaGVkfGZpbGV8cmVzdW1lfGN2KVxcYi8udGVzdCh0KSB8fCAvXihkb3xkaWR8aGF2ZXxoYXN8d2lsbHx3b3VsZHxjYW58Y291bGR8aXN8YXJlKVxcYi8udGVzdCh0KSk7XG59XG5mdW5jdGlvbiBmKGUpIHtcbiAgcmV0dXJuIGUudHlwZSA9PT0gZW51bXMuRklFTERfVFlQRS5URVhUICYmIGMoZS4kaW5wdXQpICYmIGQoZS5sYWJlbCk7XG59XG5mdW5jdGlvbiBtYXJrVGV4dENvdmVyTGV0dGVyUnVsZXMoZSA9IFtdKSB7XG4gIHJldHVybiBlLm1hcChlID0+IHtcbiAgICBsZXQgdCA9IGUuY2hpbGRyZW4sXG4gICAgICByID0gZihlKSA/IHtcbiAgICAgICAgLi4uZSxcbiAgICAgICAgdHlwZTogZW51bXMuRklFTERfVFlQRS5DT1ZFUl9MRVRURVJcbiAgICAgIH0gOiBlO1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHQpID8ge1xuICAgICAgLi4ucixcbiAgICAgIGNoaWxkcmVuOiBtYXJrVGV4dENvdmVyTGV0dGVyUnVsZXModClcbiAgICB9IDogcjtcbiAgfSk7XG59XG5mdW5jdGlvbiBwcmVwYXJlQ292ZXJMZXR0ZXJGaWxsVGFzayh7XG4gIHJ1bGVzOiBlLFxuICAuLi50XG59KSB7XG4gIGxldCByID0gbWFya1RleHRDb3ZlckxldHRlclJ1bGVzKGUpLFxuICAgIF9oZWxwZXJzTG9jYWwgPSBmaW5kQ292ZXJMZXR0ZXJSdWxlcyhyKSxcbiAgICBfbWVzc2FnaW5nTG9jYWwgPSAoZSA9IHQuY292ZXJMZXR0ZXIpID0+IHN0YXJ0QXV0b2ZpbGxDb3ZlckxldHRlclJlcXVlc3Qoe1xuICAgICAgLi4udCxcbiAgICAgIGNvdmVyTGV0dGVyOiBlLFxuICAgICAgcnVsZXM6IHJcbiAgICB9KTtcbiAgcmV0dXJuIHtcbiAgICBydWxlczogcixcbiAgICB0YXNrOiBfaGVscGVyc0xvY2FsLmxlbmd0aCA/IHtcbiAgICAgIHJ1bGVzOiBfaGVscGVyc0xvY2FsLFxuICAgICAgY292ZXJMZXR0ZXJSZXF1ZXN0OiBfbWVzc2FnaW5nTG9jYWwoKSxcbiAgICAgIHN0YXJ0Q292ZXJMZXR0ZXJSZXF1ZXN0OiBfbWVzc2FnaW5nTG9jYWwsXG4gICAgICBsYXRlUmVxdWVzdEF0dGVtcHRlZDogITFcbiAgICB9IDogbnVsbFxuICB9O1xufVxuZnVuY3Rpb24gZmluZENvdmVyTGV0dGVyUnVsZXMoZSA9IFtdKSB7XG4gIGxldCB0ID0gW107XG4gIGZvciAobGV0IHIgb2YgZSkge1xuICAgIHIudHlwZSA9PT0gZW51bXMuRklFTERfVFlQRS5DT1ZFUl9MRVRURVIgJiYgdC5wdXNoKHIpO1xuICAgIGxldCBlID0gci5jaGlsZHJlbjtcbiAgICBBcnJheS5pc0FycmF5KGUpICYmIHQucHVzaCguLi5maW5kQ292ZXJMZXR0ZXJSdWxlcyhlKSk7XG4gIH1cbiAgcmV0dXJuIHQ7XG59XG5mdW5jdGlvbiB3aXRob3V0Q292ZXJMZXR0ZXJSdWxlcyhlID0gW10pIHtcbiAgcmV0dXJuIGUuZmlsdGVyKGUgPT4gZS50eXBlICE9PSBlbnVtcy5GSUVMRF9UWVBFLkNPVkVSX0xFVFRFUikubWFwKGUgPT4ge1xuICAgIGxldCB0ID0gZS5jaGlsZHJlbjtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0KSA/IHtcbiAgICAgIC4uLmUsXG4gICAgICBjaGlsZHJlbjogd2l0aG91dENvdmVyTGV0dGVyUnVsZXModClcbiAgICB9IDogZTtcbiAgfSk7XG59XG5mdW5jdGlvbiBiKGUpIHtcbiAgcmV0dXJuICEhZT8ubWFya2Rvd24/LnRyaW0oKTtcbn1cbmZ1bmN0aW9uIHBhcnNlQXV0b2ZpbGxDb3ZlckxldHRlclJlc3VtZUlkKGUpIHtcbiAgaWYgKG51bGwgPT0gZSB8fCBcIlwiID09PSBlKSByZXR1cm47XG4gIGlmIChcIm51bWJlclwiID09IHR5cGVvZiBlKSByZXR1cm4gZTtcbiAgbGV0IHQgPSBlLnRyaW0oKTtcbiAgcmV0dXJuIHQgfHwgdm9pZCAwO1xufVxuZnVuY3Rpb24gZ2V0Q3VycmVudEF1dG9maWxsSm9iSWQoZSkge1xuICBsZXQgdCA9IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdyA/IHdpbmRvdy5sb2NhdGlvbi5ocmVmIDogXCJcIjtcbiAgcmV0dXJuICgwLCBjdXJyZW50Sm9iSWQucmVzb2x2ZUN1cnJlbnRKb2JJZCkoe1xuICAgIGV4cGxpY2l0Sm9iSWQ6IGUsXG4gICAgcGFnZVVybDogdFxuICB9KTtcbn1cbmFzeW5jIGZ1bmN0aW9uIHcoZSkge1xuICBsZXQgdCA9IGF3YWl0ICgwLCBtZXNzYWdpbmcuc2VuZFRvQmFja2dyb3VuZCkoe1xuICAgIG5hbWU6IFwiZ2VuZXJhdGVBdXRvZmlsbENvdmVyTGV0dGVyXCIsXG4gICAgYm9keTogZVxuICB9KTtcbiAgcmV0dXJuIHQ/LmRhdGEgPz8gbnVsbDtcbn1cbmZ1bmN0aW9uIHN0YXJ0QXV0b2ZpbGxDb3ZlckxldHRlclJlcXVlc3Qoe1xuICBydWxlczogZSxcbiAgY292ZXJMZXR0ZXI6IHQsXG4gIGpvYklkOiByLFxuICB1c2VyUHJvbXB0OiBfaGVscGVyc0xvY2FsMixcbiAgcmVzdW1lSWQ6IF9tZXNzYWdpbmdMb2NhbDIsXG4gIHRhaWxvcklkOiBfY2FuY2VsbGF0aW9uTG9jYWwsXG4gIGNvdmVyTGV0dGVySWQ6IF9lbnVtc0xvY2FsLFxuICBnZW5lcmF0ZUNvdmVyTGV0dGVyOiBfY3VycmVudEpvYklkTG9jYWwgPSB3XG59KSB7XG4gIGxldCBfdUxvY2FsID0gZmluZENvdmVyTGV0dGVyUnVsZXMoZSk7XG4gIGlmICghX3VMb2NhbC5sZW5ndGggfHwgYih0KSkgcmV0dXJuIG51bGw7XG4gIGxldCBfY0xvY2FsID0gZ2V0Q3VycmVudEF1dG9maWxsSm9iSWQociksXG4gICAgX2RMb2NhbCA9IF9oZWxwZXJzTG9jYWwyPy50cmltKCkgfHwgREVGQVVMVF9BVVRPRklMTF9DT1ZFUl9MRVRURVJfUFJPTVBUO1xuICBpZiAoIV9jTG9jYWwgfHwgIV9kTG9jYWwpIHJldHVybiBudWxsO1xuICBsZXQgX2ZMb2NhbCA9IHBhcnNlQXV0b2ZpbGxDb3ZlckxldHRlclJlc3VtZUlkKF9tZXNzYWdpbmdMb2NhbDIpLFxuICAgIF9tYXJrVGV4dENvdmVyTGV0dGVyUnVsZXNMb2NhbCA9IHtcbiAgICAgIGpvYklkOiBfY0xvY2FsLFxuICAgICAgdXNlclByb21wdDogX2RMb2NhbCxcbiAgICAgIC4uLihfZkxvY2FsID8ge1xuICAgICAgICByZXN1bWVJZDogX2ZMb2NhbFxuICAgICAgfSA6IHt9KSxcbiAgICAgIC4uLihfY2FuY2VsbGF0aW9uTG9jYWwgPyB7XG4gICAgICAgIHRhaWxvcklkOiBfY2FuY2VsbGF0aW9uTG9jYWxcbiAgICAgIH0gOiB7fSksXG4gICAgICAuLi4oX2VudW1zTG9jYWwgPyB7XG4gICAgICAgIGNvdmVyTGV0dGVySWQ6IF9lbnVtc0xvY2FsXG4gICAgICB9IDoge30pXG4gICAgfTtcbiAgcmV0dXJuIF9jdXJyZW50Sm9iSWRMb2NhbChfbWFya1RleHRDb3ZlckxldHRlclJ1bGVzTG9jYWwpLnRoZW4oZSA9PiB7XG4gICAgbGV0IHQgPSBlID8/IG51bGw7XG4gICAgcmV0dXJuIHQ/LmNvdmVyTGV0dGVySWQgJiYgQyh0KSwgdDtcbiAgfSkuY2F0Y2goKCkgPT4gbnVsbCk7XG59XG5sZXQgRSA9IG5ldyBTZXQoKTtcbmZ1bmN0aW9uIG9uQXV0b2ZpbGxDb3ZlckxldHRlckdlbmVyYXRlZChlKSB7XG4gIHJldHVybiBFLmFkZChlKSwgKCkgPT4gRS5kZWxldGUoZSk7XG59XG5mdW5jdGlvbiBDKGUpIHtcbiAgZm9yIChsZXQgdCBvZiBFKSB0cnkge1xuICAgIHQoZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLndhcm4oXCJbYXV0b2ZpbGwgY292ZXIgbGV0dGVyXSBsaXN0ZW5lciB0aHJld1wiLCBlKTtcbiAgfVxufVxuZnVuY3Rpb24gQShlLCB0ID0gW10pIHtcbiAgbGV0IHIgPSBlPy5yZWd1bGFyID8/IHt9LFxuICAgIF9oZWxwZXJzTG9jYWwzID0gZSA9PiB7XG4gICAgICBmb3IgKGxldCByIG9mIHQpIHtcbiAgICAgICAgbGV0IHQgPSB1KHIubGFiZWwpLFxuICAgICAgICAgIF9oZWxwZXJzTG9jYWw0ID0gT2JqZWN0LmtleXMoZSkuZmluZChlID0+IHUoZSkgPT09IHQpLFxuICAgICAgICAgIF9tZXNzYWdpbmdMb2NhbDQgPSBfaGVscGVyc0xvY2FsNCA/IGVbX2hlbHBlcnNMb2NhbDRdIDogdm9pZCAwLFxuICAgICAgICAgIF9jYW5jZWxsYXRpb25Mb2NhbDMgPSBrKF9tZXNzYWdpbmdMb2NhbDQpO1xuICAgICAgICBpZiAoX2NhbmNlbGxhdGlvbkxvY2FsMykgcmV0dXJuIF9jYW5jZWxsYXRpb25Mb2NhbDM7XG4gICAgICB9XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9LFxuICAgIF9tZXNzYWdpbmdMb2NhbDMgPSBfaGVscGVyc0xvY2FsMyhyKTtcbiAgaWYgKF9tZXNzYWdpbmdMb2NhbDMpIHJldHVybiBfbWVzc2FnaW5nTG9jYWwzO1xuICBsZXQgX2NhbmNlbGxhdGlvbkxvY2FsMiA9IE9iamVjdC5mcm9tRW50cmllcygoZT8uZmlsbERhdGFMaXN0ID8/IFtdKS5maWx0ZXIoZSA9PiBlPy5uYW1lKS5tYXAoZSA9PiBbZS5uYW1lLCBlLnZhbHVlXSkpO1xuICByZXR1cm4gX2hlbHBlcnNMb2NhbDMoX2NhbmNlbGxhdGlvbkxvY2FsMik7XG59XG5mdW5jdGlvbiBrKGUpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZSkgPyBlLm1hcChlID0+IFN0cmluZyhlID8/IFwiXCIpLnRyaW0oKSkuZmluZChCb29sZWFuKSA/PyBcIlwiIDogU3RyaW5nKGUgPz8gXCJcIikudHJpbSgpO1xufVxuYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZUNvdmVyTGV0dGVyVGV4dEZvckZpbGwoe1xuICBjb3ZlckxldHRlcjogZSxcbiAgY292ZXJMZXR0ZXJSZXF1ZXN0OiB0LFxuICBhbnN3ZXI6IHIsXG4gIGNvdmVyTGV0dGVyUnVsZXM6IF9oZWxwZXJzTG9jYWw1XG59KSB7XG4gIGxldCBfbWVzc2FnaW5nTG9jYWw1ID0gZm9ybWF0Q292ZXJMZXR0ZXJNYXJrZG93bkFzVGV4dChlPy5tYXJrZG93bik7XG4gIGlmIChfbWVzc2FnaW5nTG9jYWw1KSByZXR1cm4gX21lc3NhZ2luZ0xvY2FsNTtcbiAgbGV0IF9jYW5jZWxsYXRpb25Mb2NhbDQgPSB0ID8gYXdhaXQgdCA6IG51bGwsXG4gICAgX2VudW1zTG9jYWwyID0gZm9ybWF0Q292ZXJMZXR0ZXJNYXJrZG93bkFzVGV4dChfY2FuY2VsbGF0aW9uTG9jYWw0Py5tYXJrZG93bik7XG4gIHJldHVybiBfZW51bXNMb2NhbDIgfHwgQShyLCBfaGVscGVyc0xvY2FsNSk7XG59XG5hc3luYyBmdW5jdGlvbiBmaWxsQ292ZXJMZXR0ZXJUYXNrKHtcbiAgY292ZXJMZXR0ZXJSdWxlczogZSA9IFtdLFxuICBjb3ZlckxldHRlcjogdCxcbiAgY292ZXJMZXR0ZXJSZXF1ZXN0OiByLFxuICBhbnN3ZXI6IF9oZWxwZXJzTG9jYWw2LFxuICBvcGVyYXRpb25Db25maWc6IF9tZXNzYWdpbmdMb2NhbDYsXG4gIHVwZGF0ZU1pc3NlZFByb2dyZXNzOiBfY3VycmVudEpvYklkTG9jYWwyXG59KSB7XG4gIGlmICghZS5sZW5ndGgpIHJldHVybjtcbiAgbGV0IF9ERUZBVUxUX0FVVE9GSUxMX0NPVkVSX0xFVFRFUl9QUk9NUFRMb2NhbCA9IGF3YWl0IHJlc29sdmVDb3ZlckxldHRlclRleHRGb3JGaWxsKHtcbiAgICBjb3ZlckxldHRlcjogdCxcbiAgICBjb3ZlckxldHRlclJlcXVlc3Q6IHIsXG4gICAgYW5zd2VyOiBfaGVscGVyc0xvY2FsNixcbiAgICBjb3ZlckxldHRlclJ1bGVzOiBlXG4gIH0pO1xuICAoMCwgY2FuY2VsbGF0aW9uLmNoZWNrcG9pbnQpKCk7XG4gIGxldCBfdUxvY2FsMiA9IF9tZXNzYWdpbmdMb2NhbDZbZW51bXMuRklFTERfVFlQRS5DT1ZFUl9MRVRURVJdID8/IF9tZXNzYWdpbmdMb2NhbDZbZW51bXMuRklFTERfVFlQRS5URVhUXTtcbiAgaWYgKCFfREVGQVVMVF9BVVRPRklMTF9DT1ZFUl9MRVRURVJfUFJPTVBUTG9jYWwgfHwgIV91TG9jYWwyKSB7XG4gICAgZm9yIChsZXQgdCBvZiBlKSBfY3VycmVudEpvYklkTG9jYWwyPy4odC5sYWJlbCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBfY0xvY2FsMiA9IE9iamVjdC5mcm9tRW50cmllcyhlLm1hcChlID0+IFtlLmxhYmVsLCBfREVGQVVMVF9BVVRPRklMTF9DT1ZFUl9MRVRURVJfUFJPTVBUTG9jYWxdKSk7XG4gIGZvciAobGV0IHQgb2YgZSkgKDAsIGNhbmNlbGxhdGlvbi5jaGVja3BvaW50KSgpLCBhd2FpdCBfdUxvY2FsMih0LCBfY0xvY2FsMik7XG59XG5mdW5jdGlvbiBJKGUpIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5lLFxuICAgIFtlbnVtcy5GSUVMRF9UWVBFLkNPVkVSX0xFVFRFUl06IGVbZW51bXMuRklFTERfVFlQRS5DT1ZFUl9MRVRURVJdID8/IGVbZW51bXMuRklFTERfVFlQRS5URVhUXVxuICB9O1xufVxuYXN5bmMgZnVuY3Rpb24gZmlsbFByZXBhcmVkQ292ZXJMZXR0ZXJUYXNrKHtcbiAgdGFzazogZSxcbiAgY292ZXJMZXR0ZXI6IHQsXG4gIGFuc3dlcjogcixcbiAgb3BlcmF0aW9uQ29uZmlnOiBfaGVscGVyc0xvY2FsNyxcbiAgdXBkYXRlTWlzc2VkUHJvZ3Jlc3M6IF9tZXNzYWdpbmdMb2NhbDdcbn0pIHtcbiAgaWYgKCFlPy5ydWxlcy5sZW5ndGgpIHJldHVybjtcbiAgbGV0IF9jYW5jZWxsYXRpb25Mb2NhbDUgPSBlLmNvdmVyTGV0dGVyUmVxdWVzdDtcbiAgX2NhbmNlbGxhdGlvbkxvY2FsNSB8fCBlLmxhdGVSZXF1ZXN0QXR0ZW1wdGVkIHx8IChlLmxhdGVSZXF1ZXN0QXR0ZW1wdGVkID0gITAsIF9jYW5jZWxsYXRpb25Mb2NhbDUgPSBlLnN0YXJ0Q292ZXJMZXR0ZXJSZXF1ZXN0KHQpLCBlLmNvdmVyTGV0dGVyUmVxdWVzdCA9IF9jYW5jZWxsYXRpb25Mb2NhbDUpLCBhd2FpdCBmaWxsQ292ZXJMZXR0ZXJUYXNrKHtcbiAgICBjb3ZlckxldHRlclJ1bGVzOiBlLnJ1bGVzLFxuICAgIGNvdmVyTGV0dGVyOiB0LFxuICAgIGNvdmVyTGV0dGVyUmVxdWVzdDogX2NhbmNlbGxhdGlvbkxvY2FsNSxcbiAgICBhbnN3ZXI6IHIsXG4gICAgdXBkYXRlTWlzc2VkUHJvZ3Jlc3M6IF9tZXNzYWdpbmdMb2NhbDcsXG4gICAgb3BlcmF0aW9uQ29uZmlnOiBJKF9oZWxwZXJzTG9jYWw3KVxuICB9KTtcbn1cbmZ1bmN0aW9uIEQoZSkge1xuICByZXR1cm4gZS5yZXBsYWNlKC8mbmJzcDsvZ2ksIFwiIFwiKS5yZXBsYWNlKC8mYW1wOy9naSwgXCImXCIpLnJlcGxhY2UoLyZsdDsvZ2ksIFwiPFwiKS5yZXBsYWNlKC8mZ3Q7L2dpLCBcIj5cIikucmVwbGFjZSgvJnF1b3Q7L2dpLCAnXCInKS5yZXBsYWNlKC8mIzM5Oy9naSwgXCInXCIpO1xufVxuZnVuY3Rpb24gUChlKSB7XG4gIGxldCB0ID0gZS5zcGxpdChcIlxcblwiKS5tYXAoZSA9PiBlLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pLFxuICAgIHIgPSB0LmZpbmRJbmRleChlID0+IC9eKGRlYXJcXGJ8dG9cXGIuKmhpcmluZyBtYW5hZ2VyfGkgYW0gYXBwbHlpbmdcXGJ8aSc/bSBhcHBseWluZ1xcYikvaS50ZXN0KGUpKTtcbiAgcmV0dXJuIChyIDwgMCAmJiAociA9IHQuZmluZEluZGV4KGUgPT4gL1suIT9dJC8udGVzdChlKSkpLCByIDw9IDApID8gdC5qb2luKFwiXFxuXFxuXCIpIDogdC5zbGljZShyKS5qb2luKFwiXFxuXFxuXCIpO1xufVxuZnVuY3Rpb24gXyhlKSB7XG4gIGxldCB0ID0gZS5zcGxpdChcIlxcblwiKS5tYXAoZSA9PiBlLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pO1xuICBpZiAodC5sZW5ndGggPD0gMSkgcmV0dXJuIHQuam9pbihcIlxcblxcblwiKTtcbiAgbGV0IHIgPSB0LmF0KC0xKSA/PyBcIlwiLFxuICAgIF9oZWxwZXJzTG9jYWw4ID0gdC5hdCgtMikgPz8gXCJcIixcbiAgICBfbWVzc2FnaW5nTG9jYWw4ID0gL14odGhhbmsgeW91fHRoYW5rc3xzaW5jZXJlbHl8YmVzdHxyZWdhcmRzfHdhcm0gcmVnYXJkcylcXGIvaS50ZXN0KF9oZWxwZXJzTG9jYWw4KSxcbiAgICBfY2FuY2VsbGF0aW9uTG9jYWw2ID0gX21lc3NhZ2luZ0xvY2FsOCAmJiAhL1suOzohP10kLy50ZXN0KF9oZWxwZXJzTG9jYWw4KSAmJiBfaGVscGVyc0xvY2FsOC5zcGxpdCgvXFxzKy8pLmxlbmd0aCA8PSA0LFxuICAgIF9lbnVtc0xvY2FsMyA9IC9eW0EtWmEtel1bQS1aYS16IC4nLV17MSw2MH0kLy50ZXN0KHIpICYmICEvWy4hP10kLy50ZXN0KHIpO1xuICByZXR1cm4gX2NhbmNlbGxhdGlvbkxvY2FsNiAmJiBfZW51bXNMb2NhbDMgPyB0LnNsaWNlKDAsIC0yKS5qb2luKFwiXFxuXFxuXCIpIDogX21lc3NhZ2luZ0xvY2FsOCAmJiBfZW51bXNMb2NhbDMgPyB0LnNsaWNlKDAsIC0xKS5qb2luKFwiXFxuXFxuXCIpIDogdC5qb2luKFwiXFxuXFxuXCIpO1xufVxuZnVuY3Rpb24gZm9ybWF0Q292ZXJMZXR0ZXJNYXJrZG93bkFzVGV4dChlKSB7XG4gIGlmICghZT8udHJpbSgpKSByZXR1cm4gXCJcIjtcbiAgbGV0IHQgPSBEKGUucmVwbGFjZSgvPGJyXFxzKlxcLz8+L2dpLCBcIlxcblwiKS5yZXBsYWNlKC88XFwvcD4vZ2ksIFwiXFxuXFxuXCIpLnJlcGxhY2UoLzxbXj5dKz4vZywgXCJcIikpLFxuICAgIHIgPSB0LnJlcGxhY2UoLzxiclxccypcXC8/Pi9naSwgXCJcXG5cIikucmVwbGFjZSgvXFxyXFxuL2csIFwiXFxuXCIpLnJlcGxhY2UoL2BgYFtcXHNcXFNdKj9gYGAvZywgZSA9PiBlLnJlcGxhY2UoL15gYGBbXlxcbl0qXFxuPy8sIFwiXCIpLnJlcGxhY2UoL1xcbj9gYGAkLywgXCJcIikudHJpbSgpKS5yZXBsYWNlKC9gKFteYF0rKWAvZywgXCIkMVwiKS5yZXBsYWNlKC8hXFxbKFteXFxdXSopXFxdXFwoW14pXStcXCkvZywgXCIkMVwiKS5yZXBsYWNlKC9cXFsoW15cXF1dKylcXF1cXChbXildK1xcKS9nLCBcIiQxXCIpLnJlcGxhY2UoL14+XFxzPy9nbSwgXCJcIikucmVwbGFjZSgvXiN7MSw2fVxccyovZ20sIFwiXCIpLnJlcGxhY2UoL15cXHMqWy0qK11cXHMrL2dtLCBcIlwiKS5yZXBsYWNlKC9eXFxzKlxcZCtcXC5cXHMrL2dtLCBcIlwiKS5yZXBsYWNlKC9cXCpcXCooW14qXSspXFwqXFwqL2csIFwiJDFcIikucmVwbGFjZSgvX18oW15fXSspX18vZywgXCIkMVwiKS5yZXBsYWNlKC8oPzwhXFwqKVxcKihbXipdKylcXCooPyFcXCopL2csIFwiJDFcIikucmVwbGFjZSgvKD88IV8pXyhbXl9dKylfKD8hXykvZywgXCIkMVwiKS5yZXBsYWNlKC9cXG57Myx9L2csIFwiXFxuXFxuXCIpLnRyaW0oKTtcbiAgcmV0dXJuIF8oUChyKSk7XG59XG5mdW5jdGlvbiBhcHBseUNvdmVyTGV0dGVyVGV4dFRvQW5zd2VyKGUsIHQsIHIgPSBbXCJDb3ZlciBMZXR0ZXJcIl0pIHtcbiAgbGV0IF9oZWxwZXJzTG9jYWw5ID0gZm9ybWF0Q292ZXJMZXR0ZXJNYXJrZG93bkFzVGV4dCh0Py5tYXJrZG93bik7XG4gIGlmICghX2hlbHBlcnNMb2NhbDkpIHJldHVybiBlO1xuICBsZXQgX21lc3NhZ2luZ0xvY2FsOSA9IG5ldyBTZXQoci5tYXAoZSA9PiB1KGUpKSksXG4gICAgX2NhbmNlbGxhdGlvbkxvY2FsNyA9IGUgPT4gISFlICYmIF9tZXNzYWdpbmdMb2NhbDkuaGFzKHUoZSkpLFxuICAgIF9lbnVtc0xvY2FsNCA9ICExLFxuICAgIF9jdXJyZW50Sm9iSWRMb2NhbDMgPSBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoZS5yZWd1bGFyID8/IHt9KS5tYXAoKFtlLCB0XSkgPT4gX2NhbmNlbGxhdGlvbkxvY2FsNyhlKSA/IChfZW51bXNMb2NhbDQgPSAhMCwgW2UsIF9oZWxwZXJzTG9jYWw5XSkgOiBbZSwgdF0pKSxcbiAgICBfREVGQVVMVF9BVVRPRklMTF9DT1ZFUl9MRVRURVJfUFJPTVBUTG9jYWwyID0gZS5maWxsRGF0YUxpc3Q/Lm1hcChlID0+IF9jYW5jZWxsYXRpb25Mb2NhbDcoZT8ubmFtZSkgPyAoX2VudW1zTG9jYWw0ID0gITAsIHtcbiAgICAgIC4uLmUsXG4gICAgICB2YWx1ZTogX2hlbHBlcnNMb2NhbDlcbiAgICB9KSA6IGUpO1xuICByZXR1cm4gX2VudW1zTG9jYWw0ID8ge1xuICAgIC4uLmUsXG4gICAgcmVndWxhcjogX2N1cnJlbnRKb2JJZExvY2FsMyxcbiAgICAuLi4oX0RFRkFVTFRfQVVUT0ZJTExfQ09WRVJfTEVUVEVSX1BST01QVExvY2FsMiA/IHtcbiAgICAgIGZpbGxEYXRhTGlzdDogX0RFRkFVTFRfQVVUT0ZJTExfQ09WRVJfTEVUVEVSX1BST01QVExvY2FsMlxuICAgIH0gOiB7fSlcbiAgfSA6IGU7XG59XG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiY292ZXItbGV0dGVyLjhkNDNhMTRlLmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);