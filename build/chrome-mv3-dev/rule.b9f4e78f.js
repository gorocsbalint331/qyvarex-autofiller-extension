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
})({"73t3N":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\avature\\rule.js",
    "bundleId": "a8749278b9f4e78f",
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
var j = z(require("fba461635338f9f5"));
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

},{"fba461635338f9f5":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"1UpBn":[function(require,module,exports) {
/**
 * Parcel module id: iVHF6
 * Resolved path: src/contents/sites/avature/rule.js
 * Dependencies:
 *   ./answer -> ctNoD  =>  src/contents/sites/avature/answer.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/phone-country-code -> 8nENw  =>  src/core/phone-country-code.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getLabelElement", ()=>V), n.export(r, "isRequired", ()=>X), n.export(r, "getNormalSectionInfo", ()=>J), n.export(r, "collectDatasetRowInfo", ()=>Z), n.export(r, "extractRules", ()=>ee), n.export(r, "getRule", ()=>et), n.export(r, "getEduRule", ()=>er), n.export(r, "getExpRule", ()=>en), n.export(r, "addEduExp", ()=>eo), n.export(r, "clearEduExp", ()=>ei), n.export(r, "getFormSnapshot", ()=>ew), n.export(r, "getAdditionalFormSnapshotData", ()=>eS);
var o = e("~core/enums"), i = e("~core/phone-country-code"), a = e("~core/xpath"), l = e("~utils/delay"), s = e("./answer");
let u = [
    "school",
    "degree",
    "university"
], c = [
    "employment",
    "work",
    "job",
    "company",
    "employer",
    "title"
], d = './/label | .//legend | .//div[contains(@class, "tc_formLabel")] | .//div[contains(@class, "labelText")] | .//div[contains(@class, "datasetlabelText")] | .//p[contains(@class, "tc_formLabel")] | .//span[contains(@class, "tc_formTitle")]', f = './/div[contains(@id, "multipleDatasetEntry_") and not(contains(@class, "TableSampleRow"))] | .//fieldset[contains(@class, "datasetField__row") and not(contains(@class, "datasetField__row--sample"))]', p = ".multipleDatasetWrapper, .multipleDataset, .MultipleDatasetEntryFormField", m = '[id*="multipleDatasetEntry_"], .datasetField__row', h = `${p}, ${m}`, g = "Return value must be in YYYY-MM format.", b = "YYYY-MM";
function y(e1) {
    let t = (0, s.normalizeAvatureLabel)(e1).toLowerCase();
    return "graduation month/year" === t;
}
function v(e1, t) {
    return "value" === t && e1?.value ? String(e1.value).trim() : String(e1?.getAttribute?.(t) || "").trim();
}
function w(e1) {
    let t = e1.$input || null, r1 = String(t?.getAttribute?.("type") || t?.type || "").toLowerCase();
    if ("date" === r1) return "YYYY-MM-DD";
    if ("month" === r1) return "YYYY-MM";
    let n = [
        "placeholder",
        "pattern",
        "title",
        "aria-label",
        "aria-description",
        "min",
        "max",
        "value"
    ].map((e1)=>v(t, e1)).filter(Boolean).join(" ").toLowerCase(), o = n.match(/(yyyy|yy)[-/\s]*mm[-/\s]*dd/);
    if (o || /\b\d{4}-\d{2}-\d{2}\b/.test(n)) return "YYYY-MM-DD";
    let i = n.match(/mm[-/\s]*dd[-/\s]*(yyyy|yy)/);
    return i ? "yy" === i[1] ? "MM/DD/YY" : "MM/DD/YYYY" : /\b\d{4}-\d{2}\b/.test(n) || /(yyyy|yy)[-/\s]*mm/.test(n) ? "YYYY-MM" : b;
}
function S(e1) {
    let t = (0, s.normalizeAvatureLabel)(e1).toLowerCase();
    return t.includes("current") && !t.includes("employer") && !t.includes("title") && !t.includes("start date");
}
_c = S;
function E(e1, t) {
    let r1 = (0, s.normalizeAvatureLabel)(e1).toLowerCase();
    return r1.includes(t) && r1.includes("date");
}
_c1 = E;
function x(e1, t) {
    let r1 = e1.some((e1)=>S(e1.label)), n = t.some((e1)=>E(String(e1.label || ""), "end"));
    if (!r1 || n) return t;
    let o = e1.find((e1)=>E(e1.label, "start")), i = o ? w(o) : b;
    return console.info("[Avature][Employment] add-hidden-end-date-option", {
        description: i
    }), [
        ...t,
        {
            label: "End Date",
            required: !1,
            type: "date",
            description: i
        }
    ];
}
function C(e1) {
    let t = String(e1.className || "");
    return t.split(/\s+/).includes("select2-hidden-accessible") || e1.hasAttribute("data-select2-id");
}
_c2 = C;
function A(e1) {
    let t = (0, s.normalizeAvatureLabel)(e1).toLowerCase();
    return "major(s)" === t || "minor(s)" === t || t.includes("education") && t.includes("degree") && t.includes("certification") && t.includes("training");
}
_c3 = A;
function k(e1, t = {
    bubbles: !0,
    cancelable: !0
}) {
    let r1 = /^mouse|click$/i.test(e1), n = r1 && "function" == typeof MouseEvent ? MouseEvent : Event;
    return new n(e1, t);
}
function T(e1, t) {
    let r1 = "function" == typeof KeyboardEvent ? KeyboardEvent : Event, n = new r1(e1, {
        bubbles: !0,
        cancelable: !0,
        key: t,
        code: "Escape" === t ? "Escape" : t
    });
    try {
        Object.defineProperty(n, "key", {
            value: t
        });
    } catch  {}
    try {
        Object.defineProperty(n, "keyCode", {
            value: "Escape" === t ? 27 : 0
        }), Object.defineProperty(n, "which", {
            value: "Escape" === t ? 27 : 0
        });
    } catch  {}
    return n;
}
_c4 = T;
function F(e1) {
    let t = e1.closest(".datasetfieldSpec, .datasetFieldContainer, .fieldSpecContainer, .fieldSpec, fieldset"), r1 = t?.querySelector(".select2-container");
    if (r1) return r1;
    let n = e1.nextElementSibling;
    if (n?.classList?.contains("select2-container")) return n;
    let o = e1.id || e1.name, i = globalThis.CSS?.escape;
    if (!o || "function" != typeof i) return null;
    let a = `select2Container${o}`, l = document.querySelector(`.select2-selection.${i(a)}`);
    return l?.closest(".select2-container");
}
_c5 = F;
function I(e1) {
    let t = e1.textContent?.trim().toLowerCase() || "", r1 = String(e1.className || "");
    return !t || "group" === e1.getAttribute("role") || !!e1.querySelector(".select2-results__options") || !!e1.querySelector(".select2-results__group") || "true" === e1.getAttribute("aria-disabled") || r1.includes("select2-results__option--disabled") || r1.includes("select2-results__option--load-more") || t.includes("no results") || t.includes("searching") || t.includes("loading");
}
_c6 = I;
function j(e1) {
    return e1 && "undefined" != typeof document ? document.getElementById(e1) : null;
}
function D(e1, t, r1) {
    let n = [
        t.getAttribute("aria-controls"),
        t.getAttribute("aria-owns"),
        r1?.getAttribute("aria-controls"),
        r1?.getAttribute("aria-owns")
    ];
    return e1.id && n.push(`select2-${e1.id}-results`), Array.from(new Set(n.filter(Boolean)));
}
_c7 = D;
function P(e1) {
    return !!(e1?.classList?.contains("select2-results__options") || e1?.getAttribute("role") === "listbox");
}
_c8 = P;
function _(e1 = []) {
    if (e1.length > 0) {
        for (let t of e1){
            let e1 = j(t);
            if (P(e1)) return e1;
        }
        return null;
    }
    let t = [
        ".select2-container--open .select2-results__options",
        ".select2-dropdown .select2-results__options",
        '.select2-results__options[aria-expanded="true"]',
        '.select2-results__options[aria-hidden="false"]'
    ];
    for (let e1 of t){
        let t = document.querySelector(e1);
        if (t) return t;
    }
    return null;
}
function L(e1) {
    let t = Array.from(e1.querySelectorAll(".select2-results__option")), r1 = Array.from(new Set(t.filter((e1)=>!I(e1)).map((e1)=>(0, s.normalizeAvatureLabel)(e1.textContent || "")).filter(Boolean)));
    return {
        filteredOptionCount: r1.length,
        filteredOptions: r1
    };
}
_c9 = L;
function R(e1) {
    if (0 === e1.length) return Array.from(document.querySelectorAll(".select2-container--open .select2-dropdown, .select2-dropdown"));
    let t = [];
    for (let r1 of e1){
        let e1 = j(r1), n = e1?.closest(".select2-dropdown") || e1?.closest(".select2-container");
        n && t.push(n);
    }
    return Array.from(new Set(t));
}
_c10 = R;
function O(e1) {
    let t = e1.ownerDocument?.defaultView || ("undefined" != typeof window ? window : void 0), r1 = t?.jQuery || t?.$;
    if ("function" != typeof r1) return !1;
    try {
        return r1(e1).select2?.("close"), r1(e1).trigger?.("select2:close"), !0;
    } catch  {
        return !1;
    }
}
_c11 = O;
async function M(e1, t) {
    let r1 = Date.now(), n = t, o = L(n);
    for(; 0 === o.filteredOptionCount && Date.now() - r1 < 2500;)await (0, l.delay)(100), o = L(n = _(e1) || n);
    return {
        resultsContainer: n,
        snapshot: o
    };
}
_c12 = M;
function N(e1, t, r1, n = []) {
    let o = [
        r1,
        t
    ].filter(Boolean);
    for (let t of (O(e1), o))t.dispatchEvent(T("keydown", "Escape")), t.dispatchEvent(T("keyup", "Escape")), t.dispatchEvent(T("keypress", "Escape"));
    for (let e1 of o)e1.dispatchEvent(k("focusout")), e1.blur?.();
    document.body?.dispatchEvent(k("mousedown")), document.body?.dispatchEvent(k("mouseup")), document.body?.dispatchEvent(k("click")), e1.dispatchEvent(k("focusout")), e1.blur?.();
    let i = document.activeElement;
    i && o.includes(i) && i.blur?.();
    let a = R(n);
    for (let e1 of a)e1.remove();
    let l = Array.from(document.querySelectorAll(".select2-container--open"));
    for (let e1 of l)e1.classList.remove("select2-container--open"), e1.classList.remove("select2-container--above"), e1.classList.remove("select2-container--below");
}
_c13 = N;
async function $(e1) {
    let t = F(e1), r1 = t?.querySelector(".select2-selection");
    if (!r1) return N(e1, null, null), [];
    let n = r1.querySelector(".select2-search__field"), o = D(e1, r1, n), i = [
        n,
        r1
    ].filter(Boolean);
    try {
        for (let e1 of i){
            e1.focus?.(), e1.dispatchEvent(k("mousedown")), e1.dispatchEvent(k("mouseup")), e1.click(), e1.tagName?.toLowerCase() === "input" && e1.dispatchEvent(k("input", {
                bubbles: !0
            })), await (0, l.delay)(150);
            let t = _(o);
            if (t) break;
        }
        let e1 = Date.now(), t = null;
        for(; Date.now() - e1 < 1500 && !(t = _(o));)await (0, l.delay)(50);
        if (!t) return [];
        let r1 = await M(o, t);
        return r1.snapshot.filteredOptions;
    } finally{
        N(e1, r1, n, o);
    }
}
async function B(e1) {
    for (let t of e1){
        if (!A(t.label)) continue;
        let e1 = t.$input;
        if (e1?.tagName?.toLowerCase() !== "select" || !C(e1)) continue;
        let r1 = t.options;
        if (Array.isArray(r1) && r1.length > 0) continue;
        let n = await $(e1);
        n.length > 0 && (t.options = n);
    }
}
_c14 = B;
function q(e1, t) {
    return e1.classList.contains("SelectFormField") && e1.classList.contains("AutoCompleteField") || t.classList.contains("SelectFormField") && t.classList.contains("AutoCompleteField") && t.classList.contains("AutocompleteSelectFieldChildHtmlElement");
}
function U(e1, t) {
    return e1.classList.contains("CheckBoxListFormField") && e1.classList.contains("AutoCompleteField") || t.classList.contains("CheckBoxListFormField") && t.classList.contains("AutoCompleteField") && t.classList.contains("AutocompleteSelectFieldChildHtmlElement");
}
_c15 = U;
function H(e1) {
    return Array.from(e1.options).map((e1)=>e1.getAttribute("data-option-name") || e1.textContent || "").map(s.normalizeAvatureLabel).filter(Boolean);
}
_c16 = H;
async function Y(e1, t) {
    if (e1.type !== o.FIELD_TYPE.SELECT && e1.type !== o.FIELD_TYPE.MULTI_SELECT) return;
    let r1 = e1.$input;
    if (!r1) return;
    let n = U(t, r1), a = q(t, r1);
    if (!C(r1) && !a && !n) return;
    let l = Array.isArray(e1.options) ? e1.options : [];
    if (n && l.length > 0) return;
    let u = await $(r1), c = e1.label === i.PHONE_COUNTRY_CODE_LABEL;
    if (0 === u.length) {
        c && (e1.description = i.PHONE_COUNTRY_CODE_DESCRIPTION);
        return;
    }
    c && delete e1.description;
    let d = new Set;
    e1.options = [
        ...l,
        ...u
    ].filter((e1)=>{
        let t = (0, s.normalizeAvatureLabel)(e1).toLowerCase();
        return !d.has(t) && (d.add(t), !0);
    });
}
_c17 = Y;
function z(e1) {
    if (!e1 || e1.hidden || "true" === e1.getAttribute("aria-hidden")) return !1;
    let t = e1;
    for(; t;){
        if (t.hidden || "true" === t.getAttribute("aria-hidden")) return !1;
        let e1 = window.getComputedStyle(t);
        if ("none" === e1.display || "hidden" === e1.visibility || "collapse" === e1.visibility) return !1;
        t = t.parentElement;
    }
    return e1.getClientRects().length > 0;
}
function V(e1) {
    return (0, a.getFirstOrderedNodeSafe)(d, e1);
}
_c18 = V;
function W(e1) {
    return (0, a.getFirstOrderedNodeSafe)('.//div[contains(@class, "RadioButtonListContainer")]', e1);
}
_c19 = W;
function G(e1) {
    let t = e1.cloneNode(!0), r1 = t.querySelectorAll('.requiredField, .labelRequiredIcon, span.requiredField, span[class*="required"]');
    r1.forEach((e1)=>e1.remove());
    let n = Array.from(t.childNodes).find((e1)=>e1.nodeType === Node.TEXT_NODE && e1.nodeValue?.trim());
    if (n?.nodeValue?.trim()) return (0, s.normalizeAvatureLabel)(n.nodeValue.trim().split("\n")[0]);
    let o = t.querySelector(".labelText, .datasetlabelText");
    if (o) {
        let e1 = o.querySelectorAll('.requiredField, .labelRequiredIcon, span.requiredField, span[class*="required"]');
        e1.forEach((e1)=>e1.remove());
        let t = o.textContent?.trim() || "";
        if (t) return (0, s.normalizeAvatureLabel)(t.split("\n")[0]);
    }
    let i = t.textContent ?? "";
    return (0, s.normalizeAvatureLabel)(i.trim().split("\n")[0]);
}
_c20 = G;
function K() {
    if ("undefined" == typeof document) return !1;
    let e1 = Array.from(document.querySelectorAll(".fieldSpec, [id*='fieldSpecContainer']"));
    return e1.some((e1)=>{
        let t = V(e1);
        return !!(t && (0, s.isAvaturePhoneCountryCodeLabel)(G(t)));
    });
}
_c21 = K;
function X(e1) {
    let t = (0, a.getFirstOrderedNodeSafe)('.//span[contains(@class, "formrequiredField")] | .//span[contains(@class, "labelRequiredIcon")] | .//span[contains(@class, "requiredField")]', e1);
    return !!t;
}
_c22 = X;
function J(e1) {
    let t = V(e1), r1 = W(e1);
    if (!t && !r1) return null;
    let n = t ? G(t) : "";
    if ((0, s.shouldIgnoreAvatureFieldLabel)(n) && !r1) return null;
    let o = X(e1);
    return {
        section: e1,
        labelElement: t,
        labelText: n,
        required: o
    };
}
_c23 = J;
function Q(e1) {
    let t = (0, a.getOrderedNodesSafe)(f, e1), r1 = [], n = new Set;
    for (let e1 of t){
        let t = Z(e1);
        for (let e1 of t){
            let { row: t, labelElement: o, labelText: i, required: l } = e1, u = (0, a.getFirstOrderedNodeSafe)(".//select | .//input | .//textarea", t), c = u?.id || u?.name || u?.getAttribute?.("data-select2-id") || "", d = `${i}:${u?.tagName || "ROW"}:${c || (0, s.normalizeAvatureLabel)(t.textContent || "")}`, f = i.trim().toLowerCase();
            if (n.has(d) || n.has(f)) continue;
            n.add(d), n.add(f);
            let p = et(t, o, i, l);
            p && p.label && "" !== p.label.trim() && r1.push(p);
        }
    }
    return r1;
}
_c24 = Q;
function Z(e1) {
    let t = (0, a.getOrderedNodesSafe)('.//div[contains(@id, "datasetFieldContainer")] | .//div[contains(@id, "fieldSpecContainer")] | .//div[contains(concat(" ", normalize-space(@class), " "), " datasetfieldSpec ")] | .//div[contains(concat(" ", normalize-space(@class), " "), " fieldSpec ")]', e1), r1 = [];
    for (let e1 of t){
        if (!z(e1)) continue;
        let t = (0, a.getOrderedNodesSafe)(".//select | .//input | .//textarea", e1), n = t.some((e1)=>e1.tagName?.toLowerCase() !== "input" || "hidden" !== e1.type);
        if (!n) continue;
        let o = V(e1);
        if (!o) continue;
        let i = G(o);
        if (!i || (0, s.shouldIgnoreAvatureFieldLabel)(i)) continue;
        let l = (0, a.getFirstOrderedNodeSafe)('.//span[contains(@class, "labelRequiredIcon")]', e1);
        r1.push({
            row: e1,
            labelElement: o,
            labelText: i,
            required: !!l
        });
    }
    return r1;
}
_c25 = Z;
async function ee() {
    let e1 = [], t = 0, r1 = 0, n = 0, o = (0, a.getOrderedNodesSafe)('//fieldset[contains(@class, "Section")] | //div[contains(@class, "Section")]', document.body).filter((e1)=>z(e1));
    for (let i of o){
        let o = (0, a.getOrderedNodesSafe)('.//div[contains(@id, "fieldSpecContainer") and not(@hidden)]', i), l = new Set, s = [];
        for (let e1 of o){
            if (!z(e1)) continue;
            let t = e1.id.match(/^(fieldSpecContainer\d+)/);
            if (!t) continue;
            let r1 = e1.closest(p);
            if (r1 && r1 !== e1 || e1.classList.contains("formContainer")) continue;
            let n = e1.closest(".formContainer"), o = n ? e1.id : t[1];
            l.has(o) || (l.add(o), s.push(e1));
        }
        for (let o of s){
            let i = o.matches(p) || !!o.querySelector(m);
            if (i) {
                t += 1;
                let r1 = await el(o);
                r1.length > 0 ? e1.push(...r1) : n += 1;
                continue;
            }
            let a = J(o);
            if (!a) continue;
            let l = et(a.section, a.labelElement, a.labelText, a.required);
            l && (r1 += 1, await Y(l, a.section), e1.push(l));
        }
    }
    return console.info("[Avature][extractRules] scan-complete", {
        fieldsetCount: o.length,
        datasetSectionCount: t,
        unsupportedDatasetSectionCount: n,
        ordinarySectionCount: r1,
        ruleCount: e1.length
    }), e1.filter((e1)=>"" !== e1.label);
}
function et(e1, t, r1, n) {
    let l = W(e1);
    if ((0, s.shouldIgnoreAvatureFieldLabel)(r1) && !l) return null;
    let u = (0, a.getFirstOrderedNodeSafe)('.//input[@type="text" or @type="email" or @type="tel" or @type="number" or @type="month" or @type="date"]', e1);
    if (u) {
        let e1 = (0, s.isAvaturePhoneNumberLabel)(r1) && K() ? i.LOCAL_PHONE_DESCRIPTION : void 0;
        return r1.toLowerCase().includes("date") ? {
            type: o.FIELD_TYPE.DATE,
            label: (0, s.getAvatureRequestFieldLabel)(r1),
            required: n,
            $input: u,
            $label: t,
            ...e1 ? {
                description: e1
            } : {}
        } : {
            type: o.FIELD_TYPE.TEXT,
            label: (0, s.getAvatureRequestFieldLabel)(r1),
            required: n,
            $input: u,
            $label: t,
            ...e1 ? {
                description: e1
            } : {}
        };
    }
    let c = (0, a.getFirstOrderedNodeSafe)(".//textarea", e1);
    if (c) return {
        type: o.FIELD_TYPE.TEXT,
        label: r1,
        required: n,
        $input: c,
        $label: t
    };
    let d = (0, a.getFirstOrderedNodeSafe)(".//select", e1);
    if (d) {
        let l = U(e1, d), u = (0, a.getOrderedNodesSafe)(".//option", d), c = l ? H(d) : u.map((e1)=>e1.textContent?.trim() || "").filter(Boolean), f = q(e1, d);
        if (c.length > 0 || C(d) || f) {
            let e1 = {
                type: l ? o.FIELD_TYPE.MULTI_SELECT : o.FIELD_TYPE.SELECT,
                label: (0, s.getAvatureRequestFieldLabel)(r1),
                required: n,
                $input: d,
                $label: t,
                options: c,
                optionsMode: !(0, s.isAvaturePhoneCountryCodeLabel)(r1) && (f || l) ? "searchable" : "complete"
            };
            return (0, s.isAvaturePhoneCountryCodeLabel)(r1) && 0 === c.length && (e1.description = i.PHONE_COUNTRY_CODE_DESCRIPTION), e1;
        }
    }
    let f = (0, a.getFirstOrderedNodeSafe)('.//input[contains(@type, "checkbox")]', e1);
    if (f) {
        let i = (0, a.getOrderedNodesSafe)('.//input[contains(@type, "checkbox")]', e1);
        if (i.length > 0) {
            let e1 = i.map((e1)=>e1.textContent.trim());
            return {
                type: o.FIELD_TYPE.CHECKBOX,
                label: r1,
                required: n,
                $checkboxs: i,
                $input: i[0],
                $label: t,
                options: e1
            };
        }
    }
    if (!l) return;
    let p = (0, a.getOrderedNodesSafe)('.//input[@type="radio"]', l);
    if (!p || 0 === p.length) return;
    let m = r1 || "", h = l.closest("fieldset");
    if (h) {
        let e1 = h.querySelector("legend");
        e1?.textContent?.trim() && (m = (0, s.normalizeAvatureLabel)(e1.textContent));
    }
    if (!m || "*" === m.trim() || "" === m.trim()) {
        let e1 = ea(l);
        e1 && (m = (0, s.normalizeAvatureLabel)(e1));
    }
    if (m = (0, s.normalizeAvatureLabel)(m), (0, s.shouldIgnoreAvatureFieldLabel)(m)) return null;
    let g = p.map((e1)=>{
        let t = e1.getAttribute("data-option-name");
        if (t) return t.trim();
        if (e1.id) {
            let t = l.querySelector(`label[for="${e1.id}"]`);
            if (t?.textContent) return t.textContent.trim();
        }
        return "";
    }).filter(Boolean);
    return {
        type: o.FIELD_TYPE.RADIOGROUP,
        label: m,
        required: n,
        $input: null,
        $label: t ?? null,
        $radioParent: l,
        options: g
    };
}
async function er(e1) {
    return (async ()=>{
        if (!e1) return [];
        let t = Q(e1);
        return (await B(t), t.length > 0) ? [
            {
                type: o.FIELD_TYPE.EDUCATION,
                label: "Education",
                required: !0,
                children: t,
                options: t.map((e1)=>{
                    let t = {
                        label: e1.label.trim(),
                        required: e1.required,
                        type: e1.type === o.FIELD_TYPE.SELECT || e1.type === o.FIELD_TYPE.LISTBOX ? "listbox" : e1.type === o.FIELD_TYPE.MULTI_SELECT ? "multi-select" : e1.type === o.FIELD_TYPE.DATE ? "date" : e1.type === o.FIELD_TYPE.CHECKBOX ? "checkbox" : "text"
                    };
                    return e1.type === o.FIELD_TYPE.DATE && (t.description = w(e1)), y(e1.label) && (t.description = g), e1.type === o.FIELD_TYPE.CHECKBOX ? t.options = e1.options && Array.isArray(e1.options) ? e1.options : [] : e1.options && Array.isArray(e1.options) && (t.options = e1.options), t;
                })
            }
        ] : [];
    })();
}
async function en(e1) {
    return (async ()=>{
        if (!e1) return [];
        let t = Q(e1);
        if (t.length > 0) {
            let e1 = t.map((e1)=>{
                let t = {
                    label: e1.label.trim(),
                    required: e1.required,
                    type: e1.type === o.FIELD_TYPE.SELECT || e1.type === o.FIELD_TYPE.LISTBOX ? "listbox" : e1.type === o.FIELD_TYPE.MULTI_SELECT ? "multi-select" : e1.type === o.FIELD_TYPE.DATE ? "date" : e1.type === o.FIELD_TYPE.CHECKBOX ? "checkbox" : "text"
                };
                return e1.type === o.FIELD_TYPE.DATE && (t.description = w(e1)), "Employer" === e1.label && (t.label = "Company Name", t.type = "text"), e1.type === o.FIELD_TYPE.CHECKBOX ? t.options = e1.options && Array.isArray(e1.options) ? e1.options : [] : e1.options && Array.isArray(e1.options) && (t.options = e1.options), t;
            });
            return [
                {
                    type: o.FIELD_TYPE.EMPLOYMENT,
                    label: "Employment",
                    required: !0,
                    children: t,
                    options: x(t, e1)
                }
            ];
        }
        return [];
    })();
}
async function eo(e1) {
    let t = (0, a.getFirstOrderedNodeSafe)('.//a[@id and contains(@id, "addRowFor")]', e1);
    if (!t) return;
    let r1 = new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0
    });
    t.addEventListener("click", (e1)=>e1.preventDefault(), {
        once: !0
    }), t.dispatchEvent(r1), await (0, l.delay)(200);
}
async function ei() {
    let e1 = (0, a.getOrderedNodesSafe)('//div[contains(@class, "multipleDatasetWrapper")] | //div[contains(@class, "multipleDataset")]', document);
    if (0 !== e1.length) {
        for (let t of e1){
            let e1 = (0, a.getOrderedNodesSafe)('.//div[contains(@id, "multipleDatasetEntry_") and not(contains(@id, "_sample")) and not(contains(@class, "TableSampleRow"))]', t);
            if (!(e1.length <= 1)) for(let t = 1; t < e1.length; t++){
                let r1 = (0, a.getFirstOrderedNodeSafe)('.//a[contains(normalize-space(text()), "remove")]', e1[t]);
                r1 && (r1.click(), await (0, l.delay)(150));
            }
        }
        await (0, l.delay)(500);
    }
}
function ea(e1) {
    let t = e1.closest(".fieldSpec");
    if (!t) return null;
    let r1 = t.previousElementSibling, n = !1;
    for(; r1;){
        if (r1.classList.contains("fieldSpec")) {
            let e1 = r1.querySelector("h1, h2, h3, h4, h5, h6"), t = (0, s.normalizeAvatureLabel)(e1?.textContent || "");
            if (t) return t;
            if (n || (n = !0, r1.querySelector('input:not([type="hidden"]), textarea, select'))) {
                r1 = r1.previousElementSibling;
                continue;
            }
            let o = r1.querySelector(".WizardFieldDescription, .tc_formDescription, .description"), i = (0, s.normalizeAvatureLabel)(o?.textContent || "");
            if (i) return (0, s.shouldIgnoreAvatureFieldLabel)(i) ? null : i;
        }
        r1 = r1.previousElementSibling;
    }
    return null;
}
async function el(e1) {
    let t = [], r1 = (0, a.getOrderedNodesSafe)(d, e1);
    if (!r1) return [];
    let n = r1.map((e1)=>G(e1).toLowerCase().trim());
    if (u.some((e1)=>n.some((t)=>t.includes(e1)))) {
        let r1 = await er(e1);
        return r1 && t.push(...r1), t;
    }
    if (c.some((e1)=>n.some((t)=>t.includes(e1)))) {
        let r1 = await en(e1);
        return r1 && t.push(...r1), t;
    }
    return [];
}
function es(e1) {
    let t = e1.querySelector?.("label, legend"), r1 = (0, s.normalizeAvatureLabel)(t?.textContent || "");
    return (0, s.shouldIgnoreAvatureFieldLabel)(r1) ? "" : (0, s.isAvaturePhoneCountryCodeLabel)(r1) ? i.PHONE_COUNTRY_CODE_LABEL : r1;
}
function eu(e1, t) {
    let r1 = t.getAttribute("data-option-name");
    if (r1?.trim()) return (0, s.normalizeAvatureLabel)(r1);
    if (t.id) {
        let r1 = e1.querySelector?.(`label[for="${t.id}"]`), n = (0, s.normalizeAvatureLabel)(r1?.textContent || "");
        if (n) return n;
    }
    return (0, s.normalizeAvatureLabel)(t.value || "");
}
function ec(e1, t) {
    let r1 = e1.querySelector?.(".select2-selection__rendered"), n = (0, s.normalizeAvatureLabel)(r1?.getAttribute("title") || r1?.textContent || "");
    if (n) return n;
    let o = t.querySelector("option:checked");
    return (0, s.normalizeAvatureLabel)(o?.textContent || t.value || "");
}
function ed(e1, t) {
    let r1 = Array.from(t.files || []).map((e1)=>e1.name).filter(Boolean);
    return r1.length > 0 ? r1.join(", ") : (0, s.normalizeAvatureLabel)(e1.querySelector?.(".screenReaderVisibility")?.textContent || "");
}
function ef(e1) {
    let t = e1.querySelector?.('input[type="file"]');
    if (t) return ed(e1, t);
    let r1 = e1.querySelector?.('input[type="radio"]:checked');
    if (r1) return eu(e1, r1);
    let n = Array.from(e1.querySelectorAll?.('input[type="checkbox"]') || []);
    if (n.length > 0) return n.filter((e1)=>e1.checked).map((t)=>eu(e1, t)).filter(Boolean);
    let o = e1.querySelector?.("select");
    if (o) return ec(e1, o);
    let i = e1.querySelector?.("textarea");
    if (i) return i.value || "";
    let a = e1.querySelector?.('input:not([type="hidden"])');
    return a && a.value || "";
}
function ep(e1) {
    let t = e1.querySelector?.('input:not([type="hidden"]), textarea, select');
    return !!t;
}
function em(e1) {
    return !!e1.closest(h);
}
function eh(e1) {
    return !!e1.querySelector?.(m);
}
function eg(e1) {
    let t = e1.id.toLowerCase(), r1 = String(e1.className || "").toLowerCase();
    return t.includes("_sample") || r1.includes("tablesamplerow") || r1.includes("datasetfield__row--sample");
}
function eb(e1, t = {}) {
    let r1 = {}, n = Array.from(e1.querySelectorAll?.(".fieldSpec, [id*='fieldSpecContainer']") || []), o = new Set;
    for (let e1 of n){
        if (o.has(e1) || (o.add(e1), !t.includeDatasetSections && (em(e1) || eh(e1)) || !ep(e1))) continue;
        let n = es(e1);
        if (!n) continue;
        let i = ef(e1);
        r1[n] = i;
    }
    return r1;
}
function ey(e1) {
    let t = Array.from(e1.querySelectorAll?.("label, legend, .datasetlabelText") || []).map((e1)=>(0, s.normalizeAvatureLabel)(e1.textContent || "").toLowerCase().trim());
    if (0 === t.length) {
        let r1 = (0, s.normalizeAvatureLabel)(e1.textContent || "").toLowerCase().trim();
        r1 && t.push(r1);
    }
    return t.some((e1)=>e1.includes("education") || u.some((t)=>e1.includes(t))) ? "education" : t.some((e1)=>e1.includes("experience") || c.some((t)=>e1.includes(t))) ? "employment" : null;
}
function ev(e1) {
    let t = new Set, r1 = Array.from(e1.querySelectorAll?.(p) || []);
    r1.forEach((e1)=>t.add(e1));
    let n = Array.from(e1.querySelectorAll?.(m) || []);
    for (let e1 of n){
        if (eg(e1)) continue;
        let r1 = e1.closest(p);
        if (r1) {
            t.add(r1);
            continue;
        }
        t.add(e1.parentElement || e1);
    }
    return Array.from(t);
}
function ew(e1 = document.body) {
    return eb(e1);
}
function eS(e1 = document.body) {
    let t = {}, r1 = new Map, n = {}, o = ev(e1);
    for (let e1 of o){
        let o = ey(e1);
        if (!o) continue;
        let i = r1.get(o);
        i || (i = new Set, r1.set(o, i));
        let a = Array.from(e1.querySelectorAll?.(m) || []).filter((e1)=>!eg(e1));
        for (let e1 of a){
            if (i.has(e1)) {
                n[o] = (n[o] || 0) + 1;
                continue;
            }
            i.add(e1);
            let r1 = eb(e1, {
                includeDatasetSections: !0
            });
            0 !== Object.keys(r1).length && (t[o] || (t[o] = []), t[o].push(r1));
        }
    }
    return Object.keys(n).length > 0 && console.info("[Avature][Snapshot] skipped duplicate nested dataset rows", {
        skippedDuplicateRowsByDatasetType: n
    }), t;
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

},{}]},["73t3N","1UpBn"], "1UpBn", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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Q0FBQyxFQUFFLEdBQUMsQUFBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLElBQUUsQ0FBQSxJQUFHO2dCQUFFO1lBQVE7WUFBQyxFQUFFLElBQUk7WUFBRyxJQUFJLEtBQUUsR0FBRyxJQUFFO2dCQUFDLHdCQUF1QixDQUFDO1lBQUM7WUFBRyxNQUFJLE9BQU8sS0FBSyxJQUFHLFVBQVMsQ0FBQSxDQUFDLENBQUMsRUFBRSxJQUFHLENBQUEsQ0FBQyxDQUFDLEVBQUUsR0FBQyxFQUFFLEFBQUQsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBQztRQUFFO0lBQUM7SUFBQyxPQUFPLE9BQU8sS0FBSyxHQUFHLFNBQU8sS0FBRyxRQUFRLEtBQUssNkRBQTREO1FBQUMsbUNBQWtDO0lBQUMsSUFBRztBQUFDIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS00MTMyYzdkM2QwY2ZmZjYwLmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL2F2YXR1cmUvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxhdmF0dXJlXFxcXHJ1bGUuanNcIixcImJ1bmRsZUlkXCI6XCJhODc0OTI3OGI5ZjRlNzhmXCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogaVZIRjZcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL2F2YXR1cmUvcnVsZS5qc1xuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIC4vYW5zd2VyIC0+IGN0Tm9EICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2F2YXR1cmUvYW5zd2VyLmpzXHJcbiAqICAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyAtPiBjSFVibCAgPT4gIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqICAgfmNvcmUvcGhvbmUtY291bnRyeS1jb2RlIC0+IDhuRU53ICA9PiAgc3JjL2NvcmUvcGhvbmUtY291bnRyeS1jb2RlLmpzXHJcbiAqICAgfmNvcmUveHBhdGggLT4gYWdFNHUgID0+ICBzcmMvY29yZS94cGF0aC5qc1xyXG4gKiAgIH51dGlscy9kZWxheSAtPiBhbTYxNCAgPT4gIHNyYy91dGlscy9kZWxheS5qc1xyXG4gKi9cclxuXHJcbnZhciBuPWUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO24uZGVmaW5lSW50ZXJvcEZsYWcociksbi5leHBvcnQocixcImdldExhYmVsRWxlbWVudFwiLCgpPT5WKSxuLmV4cG9ydChyLFwiaXNSZXF1aXJlZFwiLCgpPT5YKSxuLmV4cG9ydChyLFwiZ2V0Tm9ybWFsU2VjdGlvbkluZm9cIiwoKT0+Siksbi5leHBvcnQocixcImNvbGxlY3REYXRhc2V0Um93SW5mb1wiLCgpPT5aKSxuLmV4cG9ydChyLFwiZXh0cmFjdFJ1bGVzXCIsKCk9PmVlKSxuLmV4cG9ydChyLFwiZ2V0UnVsZVwiLCgpPT5ldCksbi5leHBvcnQocixcImdldEVkdVJ1bGVcIiwoKT0+ZXIpLG4uZXhwb3J0KHIsXCJnZXRFeHBSdWxlXCIsKCk9PmVuKSxuLmV4cG9ydChyLFwiYWRkRWR1RXhwXCIsKCk9PmVvKSxuLmV4cG9ydChyLFwiY2xlYXJFZHVFeHBcIiwoKT0+ZWkpLG4uZXhwb3J0KHIsXCJnZXRGb3JtU25hcHNob3RcIiwoKT0+ZXcpLG4uZXhwb3J0KHIsXCJnZXRBZGRpdGlvbmFsRm9ybVNuYXBzaG90RGF0YVwiLCgpPT5lUyk7dmFyIG89ZShcIn5jb3JlL2VudW1zXCIpLGk9ZShcIn5jb3JlL3Bob25lLWNvdW50cnktY29kZVwiKSxhPWUoXCJ+Y29yZS94cGF0aFwiKSxsPWUoXCJ+dXRpbHMvZGVsYXlcIikscz1lKFwiLi9hbnN3ZXJcIik7bGV0IHU9W1wic2Nob29sXCIsXCJkZWdyZWVcIixcInVuaXZlcnNpdHlcIl0sYz1bXCJlbXBsb3ltZW50XCIsXCJ3b3JrXCIsXCJqb2JcIixcImNvbXBhbnlcIixcImVtcGxveWVyXCIsXCJ0aXRsZVwiXSxkPScuLy9sYWJlbCB8IC4vL2xlZ2VuZCB8IC4vL2Rpdltjb250YWlucyhAY2xhc3MsIFwidGNfZm9ybUxhYmVsXCIpXSB8IC4vL2Rpdltjb250YWlucyhAY2xhc3MsIFwibGFiZWxUZXh0XCIpXSB8IC4vL2Rpdltjb250YWlucyhAY2xhc3MsIFwiZGF0YXNldGxhYmVsVGV4dFwiKV0gfCAuLy9wW2NvbnRhaW5zKEBjbGFzcywgXCJ0Y19mb3JtTGFiZWxcIildIHwgLi8vc3Bhbltjb250YWlucyhAY2xhc3MsIFwidGNfZm9ybVRpdGxlXCIpXScsZj0nLi8vZGl2W2NvbnRhaW5zKEBpZCwgXCJtdWx0aXBsZURhdGFzZXRFbnRyeV9cIikgYW5kIG5vdChjb250YWlucyhAY2xhc3MsIFwiVGFibGVTYW1wbGVSb3dcIikpXSB8IC4vL2ZpZWxkc2V0W2NvbnRhaW5zKEBjbGFzcywgXCJkYXRhc2V0RmllbGRfX3Jvd1wiKSBhbmQgbm90KGNvbnRhaW5zKEBjbGFzcywgXCJkYXRhc2V0RmllbGRfX3Jvdy0tc2FtcGxlXCIpKV0nLHA9XCIubXVsdGlwbGVEYXRhc2V0V3JhcHBlciwgLm11bHRpcGxlRGF0YXNldCwgLk11bHRpcGxlRGF0YXNldEVudHJ5Rm9ybUZpZWxkXCIsbT0nW2lkKj1cIm11bHRpcGxlRGF0YXNldEVudHJ5X1wiXSwgLmRhdGFzZXRGaWVsZF9fcm93JyxoPWAke3B9LCAke219YCxnPVwiUmV0dXJuIHZhbHVlIG11c3QgYmUgaW4gWVlZWS1NTSBmb3JtYXQuXCIsYj1cIllZWVktTU1cIjtmdW5jdGlvbiB5KGUpe2xldCB0PSgwLHMubm9ybWFsaXplQXZhdHVyZUxhYmVsKShlKS50b0xvd2VyQ2FzZSgpO3JldHVyblwiZ3JhZHVhdGlvbiBtb250aC95ZWFyXCI9PT10fWZ1bmN0aW9uIHYoZSx0KXtyZXR1cm5cInZhbHVlXCI9PT10JiZlPy52YWx1ZT9TdHJpbmcoZS52YWx1ZSkudHJpbSgpOlN0cmluZyhlPy5nZXRBdHRyaWJ1dGU/Lih0KXx8XCJcIikudHJpbSgpfWZ1bmN0aW9uIHcoZSl7bGV0IHQ9ZS4kaW5wdXR8fG51bGwscj1TdHJpbmcodD8uZ2V0QXR0cmlidXRlPy4oXCJ0eXBlXCIpfHx0Py50eXBlfHxcIlwiKS50b0xvd2VyQ2FzZSgpO2lmKFwiZGF0ZVwiPT09cilyZXR1cm5cIllZWVktTU0tRERcIjtpZihcIm1vbnRoXCI9PT1yKXJldHVyblwiWVlZWS1NTVwiO2xldCBuPVtcInBsYWNlaG9sZGVyXCIsXCJwYXR0ZXJuXCIsXCJ0aXRsZVwiLFwiYXJpYS1sYWJlbFwiLFwiYXJpYS1kZXNjcmlwdGlvblwiLFwibWluXCIsXCJtYXhcIixcInZhbHVlXCJdLm1hcChlPT52KHQsZSkpLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKS50b0xvd2VyQ2FzZSgpLG89bi5tYXRjaCgvKHl5eXl8eXkpWy0vXFxzXSptbVstL1xcc10qZGQvKTtpZihvfHwvXFxiXFxkezR9LVxcZHsyfS1cXGR7Mn1cXGIvLnRlc3QobikpcmV0dXJuXCJZWVlZLU1NLUREXCI7bGV0IGk9bi5tYXRjaCgvbW1bLS9cXHNdKmRkWy0vXFxzXSooeXl5eXx5eSkvKTtyZXR1cm4gaT9cInl5XCI9PT1pWzFdP1wiTU0vREQvWVlcIjpcIk1NL0REL1lZWVlcIjovXFxiXFxkezR9LVxcZHsyfVxcYi8udGVzdChuKXx8Lyh5eXl5fHl5KVstL1xcc10qbW0vLnRlc3Qobik/XCJZWVlZLU1NXCI6Yn1mdW5jdGlvbiBTKGUpe2xldCB0PSgwLHMubm9ybWFsaXplQXZhdHVyZUxhYmVsKShlKS50b0xvd2VyQ2FzZSgpO3JldHVybiB0LmluY2x1ZGVzKFwiY3VycmVudFwiKSYmIXQuaW5jbHVkZXMoXCJlbXBsb3llclwiKSYmIXQuaW5jbHVkZXMoXCJ0aXRsZVwiKSYmIXQuaW5jbHVkZXMoXCJzdGFydCBkYXRlXCIpfWZ1bmN0aW9uIEUoZSx0KXtsZXQgcj0oMCxzLm5vcm1hbGl6ZUF2YXR1cmVMYWJlbCkoZSkudG9Mb3dlckNhc2UoKTtyZXR1cm4gci5pbmNsdWRlcyh0KSYmci5pbmNsdWRlcyhcImRhdGVcIil9ZnVuY3Rpb24geChlLHQpe2xldCByPWUuc29tZShlPT5TKGUubGFiZWwpKSxuPXQuc29tZShlPT5FKFN0cmluZyhlLmxhYmVsfHxcIlwiKSxcImVuZFwiKSk7aWYoIXJ8fG4pcmV0dXJuIHQ7bGV0IG89ZS5maW5kKGU9PkUoZS5sYWJlbCxcInN0YXJ0XCIpKSxpPW8/dyhvKTpiO3JldHVybiBjb25zb2xlLmluZm8oXCJbQXZhdHVyZV1bRW1wbG95bWVudF0gYWRkLWhpZGRlbi1lbmQtZGF0ZS1vcHRpb25cIix7ZGVzY3JpcHRpb246aX0pLFsuLi50LHtsYWJlbDpcIkVuZCBEYXRlXCIscmVxdWlyZWQ6ITEsdHlwZTpcImRhdGVcIixkZXNjcmlwdGlvbjppfV19ZnVuY3Rpb24gQyhlKXtsZXQgdD1TdHJpbmcoZS5jbGFzc05hbWV8fFwiXCIpO3JldHVybiB0LnNwbGl0KC9cXHMrLykuaW5jbHVkZXMoXCJzZWxlY3QyLWhpZGRlbi1hY2Nlc3NpYmxlXCIpfHxlLmhhc0F0dHJpYnV0ZShcImRhdGEtc2VsZWN0Mi1pZFwiKX1mdW5jdGlvbiBBKGUpe2xldCB0PSgwLHMubm9ybWFsaXplQXZhdHVyZUxhYmVsKShlKS50b0xvd2VyQ2FzZSgpO3JldHVyblwibWFqb3IocylcIj09PXR8fFwibWlub3IocylcIj09PXR8fHQuaW5jbHVkZXMoXCJlZHVjYXRpb25cIikmJnQuaW5jbHVkZXMoXCJkZWdyZWVcIikmJnQuaW5jbHVkZXMoXCJjZXJ0aWZpY2F0aW9uXCIpJiZ0LmluY2x1ZGVzKFwidHJhaW5pbmdcIil9ZnVuY3Rpb24gayhlLHQ9e2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pe2xldCByPS9ebW91c2V8Y2xpY2skL2kudGVzdChlKSxuPXImJlwiZnVuY3Rpb25cIj09dHlwZW9mIE1vdXNlRXZlbnQ/TW91c2VFdmVudDpFdmVudDtyZXR1cm4gbmV3IG4oZSx0KX1mdW5jdGlvbiBUKGUsdCl7bGV0IHI9XCJmdW5jdGlvblwiPT10eXBlb2YgS2V5Ym9hcmRFdmVudD9LZXlib2FyZEV2ZW50OkV2ZW50LG49bmV3IHIoZSx7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwLGtleTp0LGNvZGU6XCJFc2NhcGVcIj09PXQ/XCJFc2NhcGVcIjp0fSk7dHJ5e09iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwia2V5XCIse3ZhbHVlOnR9KX1jYXRjaHt9dHJ5e09iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwia2V5Q29kZVwiLHt2YWx1ZTpcIkVzY2FwZVwiPT09dD8yNzowfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJ3aGljaFwiLHt2YWx1ZTpcIkVzY2FwZVwiPT09dD8yNzowfSl9Y2F0Y2h7fXJldHVybiBufWZ1bmN0aW9uIEYoZSl7bGV0IHQ9ZS5jbG9zZXN0KFwiLmRhdGFzZXRmaWVsZFNwZWMsIC5kYXRhc2V0RmllbGRDb250YWluZXIsIC5maWVsZFNwZWNDb250YWluZXIsIC5maWVsZFNwZWMsIGZpZWxkc2V0XCIpLHI9dD8ucXVlcnlTZWxlY3RvcihcIi5zZWxlY3QyLWNvbnRhaW5lclwiKTtpZihyKXJldHVybiByO2xldCBuPWUubmV4dEVsZW1lbnRTaWJsaW5nO2lmKG4/LmNsYXNzTGlzdD8uY29udGFpbnMoXCJzZWxlY3QyLWNvbnRhaW5lclwiKSlyZXR1cm4gbjtsZXQgbz1lLmlkfHxlLm5hbWUsaT1nbG9iYWxUaGlzLkNTUz8uZXNjYXBlO2lmKCFvfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBpKXJldHVybiBudWxsO2xldCBhPWBzZWxlY3QyQ29udGFpbmVyJHtvfWAsbD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2VsZWN0Mi1zZWxlY3Rpb24uJHtpKGEpfWApO3JldHVybiBsPy5jbG9zZXN0KFwiLnNlbGVjdDItY29udGFpbmVyXCIpfWZ1bmN0aW9uIEkoZSl7bGV0IHQ9ZS50ZXh0Q29udGVudD8udHJpbSgpLnRvTG93ZXJDYXNlKCl8fFwiXCIscj1TdHJpbmcoZS5jbGFzc05hbWV8fFwiXCIpO3JldHVybiF0fHxcImdyb3VwXCI9PT1lLmdldEF0dHJpYnV0ZShcInJvbGVcIil8fCEhZS5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uc1wiKXx8ISFlLnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0Mi1yZXN1bHRzX19ncm91cFwiKXx8XCJ0cnVlXCI9PT1lLmdldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIil8fHIuaW5jbHVkZXMoXCJzZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0tZGlzYWJsZWRcIil8fHIuaW5jbHVkZXMoXCJzZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0tbG9hZC1tb3JlXCIpfHx0LmluY2x1ZGVzKFwibm8gcmVzdWx0c1wiKXx8dC5pbmNsdWRlcyhcInNlYXJjaGluZ1wiKXx8dC5pbmNsdWRlcyhcImxvYWRpbmdcIil9ZnVuY3Rpb24gaihlKXtyZXR1cm4gZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50P2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUpOm51bGx9ZnVuY3Rpb24gRChlLHQscil7bGV0IG49W3QuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKSx0LmdldEF0dHJpYnV0ZShcImFyaWEtb3duc1wiKSxyPy5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpLHI/LmdldEF0dHJpYnV0ZShcImFyaWEtb3duc1wiKV07cmV0dXJuIGUuaWQmJm4ucHVzaChgc2VsZWN0Mi0ke2UuaWR9LXJlc3VsdHNgKSxBcnJheS5mcm9tKG5ldyBTZXQobi5maWx0ZXIoQm9vbGVhbikpKX1mdW5jdGlvbiBQKGUpe3JldHVybiEhKGU/LmNsYXNzTGlzdD8uY29udGFpbnMoXCJzZWxlY3QyLXJlc3VsdHNfX29wdGlvbnNcIil8fGU/LmdldEF0dHJpYnV0ZShcInJvbGVcIik9PT1cImxpc3Rib3hcIil9ZnVuY3Rpb24gXyhlPVtdKXtpZihlLmxlbmd0aD4wKXtmb3IobGV0IHQgb2YgZSl7bGV0IGU9aih0KTtpZihQKGUpKXJldHVybiBlfXJldHVybiBudWxsfWxldCB0PVtcIi5zZWxlY3QyLWNvbnRhaW5lci0tb3BlbiAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25zXCIsXCIuc2VsZWN0Mi1kcm9wZG93biAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25zXCIsJy5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbnNbYXJpYS1leHBhbmRlZD1cInRydWVcIl0nLCcuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25zW2FyaWEtaGlkZGVuPVwiZmFsc2VcIl0nXTtmb3IobGV0IGUgb2YgdCl7bGV0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlKTtpZih0KXJldHVybiB0fXJldHVybiBudWxsfWZ1bmN0aW9uIEwoZSl7bGV0IHQ9QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25cIikpLHI9QXJyYXkuZnJvbShuZXcgU2V0KHQuZmlsdGVyKGU9PiFJKGUpKS5tYXAoZT0+KDAscy5ub3JtYWxpemVBdmF0dXJlTGFiZWwpKGUudGV4dENvbnRlbnR8fFwiXCIpKS5maWx0ZXIoQm9vbGVhbikpKTtyZXR1cm57ZmlsdGVyZWRPcHRpb25Db3VudDpyLmxlbmd0aCxmaWx0ZXJlZE9wdGlvbnM6cn19ZnVuY3Rpb24gUihlKXtpZigwPT09ZS5sZW5ndGgpcmV0dXJuIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3QyLWNvbnRhaW5lci0tb3BlbiAuc2VsZWN0Mi1kcm9wZG93biwgLnNlbGVjdDItZHJvcGRvd25cIikpO2xldCB0PVtdO2ZvcihsZXQgciBvZiBlKXtsZXQgZT1qKHIpLG49ZT8uY2xvc2VzdChcIi5zZWxlY3QyLWRyb3Bkb3duXCIpfHxlPy5jbG9zZXN0KFwiLnNlbGVjdDItY29udGFpbmVyXCIpO24mJnQucHVzaChuKX1yZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KHQpKX1mdW5jdGlvbiBPKGUpe2xldCB0PWUub3duZXJEb2N1bWVudD8uZGVmYXVsdFZpZXd8fChcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp2b2lkIDApLHI9dD8ualF1ZXJ5fHx0Py4kO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHIpcmV0dXJuITE7dHJ5e3JldHVybiByKGUpLnNlbGVjdDI/LihcImNsb3NlXCIpLHIoZSkudHJpZ2dlcj8uKFwic2VsZWN0MjpjbG9zZVwiKSwhMH1jYXRjaHtyZXR1cm4hMX19YXN5bmMgZnVuY3Rpb24gTShlLHQpe2xldCByPURhdGUubm93KCksbj10LG89TChuKTtmb3IoOzA9PT1vLmZpbHRlcmVkT3B0aW9uQ291bnQmJkRhdGUubm93KCktcjwyNTAwOylhd2FpdCAoMCxsLmRlbGF5KSgxMDApLG89TChuPV8oZSl8fG4pO3JldHVybntyZXN1bHRzQ29udGFpbmVyOm4sc25hcHNob3Q6b319ZnVuY3Rpb24gTihlLHQscixuPVtdKXtsZXQgbz1bcix0XS5maWx0ZXIoQm9vbGVhbik7Zm9yKGxldCB0IG9mKE8oZSksbykpdC5kaXNwYXRjaEV2ZW50KFQoXCJrZXlkb3duXCIsXCJFc2NhcGVcIikpLHQuZGlzcGF0Y2hFdmVudChUKFwia2V5dXBcIixcIkVzY2FwZVwiKSksdC5kaXNwYXRjaEV2ZW50KFQoXCJrZXlwcmVzc1wiLFwiRXNjYXBlXCIpKTtmb3IobGV0IGUgb2YgbyllLmRpc3BhdGNoRXZlbnQoayhcImZvY3Vzb3V0XCIpKSxlLmJsdXI/LigpO2RvY3VtZW50LmJvZHk/LmRpc3BhdGNoRXZlbnQoayhcIm1vdXNlZG93blwiKSksZG9jdW1lbnQuYm9keT8uZGlzcGF0Y2hFdmVudChrKFwibW91c2V1cFwiKSksZG9jdW1lbnQuYm9keT8uZGlzcGF0Y2hFdmVudChrKFwiY2xpY2tcIikpLGUuZGlzcGF0Y2hFdmVudChrKFwiZm9jdXNvdXRcIikpLGUuYmx1cj8uKCk7bGV0IGk9ZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtpJiZvLmluY2x1ZGVzKGkpJiZpLmJsdXI/LigpO2xldCBhPVIobik7Zm9yKGxldCBlIG9mIGEpZS5yZW1vdmUoKTtsZXQgbD1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0Mi1jb250YWluZXItLW9wZW5cIikpO2ZvcihsZXQgZSBvZiBsKWUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdDItY29udGFpbmVyLS1vcGVuXCIpLGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdDItY29udGFpbmVyLS1hYm92ZVwiKSxlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3QyLWNvbnRhaW5lci0tYmVsb3dcIil9YXN5bmMgZnVuY3Rpb24gJChlKXtsZXQgdD1GKGUpLHI9dD8ucXVlcnlTZWxlY3RvcihcIi5zZWxlY3QyLXNlbGVjdGlvblwiKTtpZighcilyZXR1cm4gTihlLG51bGwsbnVsbCksW107bGV0IG49ci5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdDItc2VhcmNoX19maWVsZFwiKSxvPUQoZSxyLG4pLGk9W24scl0uZmlsdGVyKEJvb2xlYW4pO3RyeXtmb3IobGV0IGUgb2YgaSl7ZS5mb2N1cz8uKCksZS5kaXNwYXRjaEV2ZW50KGsoXCJtb3VzZWRvd25cIikpLGUuZGlzcGF0Y2hFdmVudChrKFwibW91c2V1cFwiKSksZS5jbGljaygpLGUudGFnTmFtZT8udG9Mb3dlckNhc2UoKT09PVwiaW5wdXRcIiYmZS5kaXNwYXRjaEV2ZW50KGsoXCJpbnB1dFwiLHtidWJibGVzOiEwfSkpLGF3YWl0ICgwLGwuZGVsYXkpKDE1MCk7bGV0IHQ9XyhvKTtpZih0KWJyZWFrfWxldCBlPURhdGUubm93KCksdD1udWxsO2Zvcig7RGF0ZS5ub3coKS1lPDE1MDAmJiEodD1fKG8pKTspYXdhaXQgKDAsbC5kZWxheSkoNTApO2lmKCF0KXJldHVybltdO2xldCByPWF3YWl0IE0obyx0KTtyZXR1cm4gci5zbmFwc2hvdC5maWx0ZXJlZE9wdGlvbnN9ZmluYWxseXtOKGUscixuLG8pfX1hc3luYyBmdW5jdGlvbiBCKGUpe2ZvcihsZXQgdCBvZiBlKXtpZighQSh0LmxhYmVsKSljb250aW51ZTtsZXQgZT10LiRpbnB1dDtpZihlPy50YWdOYW1lPy50b0xvd2VyQ2FzZSgpIT09XCJzZWxlY3RcInx8IUMoZSkpY29udGludWU7bGV0IHI9dC5vcHRpb25zO2lmKEFycmF5LmlzQXJyYXkocikmJnIubGVuZ3RoPjApY29udGludWU7bGV0IG49YXdhaXQgJChlKTtuLmxlbmd0aD4wJiYodC5vcHRpb25zPW4pfX1mdW5jdGlvbiBxKGUsdCl7cmV0dXJuIGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiU2VsZWN0Rm9ybUZpZWxkXCIpJiZlLmNsYXNzTGlzdC5jb250YWlucyhcIkF1dG9Db21wbGV0ZUZpZWxkXCIpfHx0LmNsYXNzTGlzdC5jb250YWlucyhcIlNlbGVjdEZvcm1GaWVsZFwiKSYmdC5jbGFzc0xpc3QuY29udGFpbnMoXCJBdXRvQ29tcGxldGVGaWVsZFwiKSYmdC5jbGFzc0xpc3QuY29udGFpbnMoXCJBdXRvY29tcGxldGVTZWxlY3RGaWVsZENoaWxkSHRtbEVsZW1lbnRcIil9ZnVuY3Rpb24gVShlLHQpe3JldHVybiBlLmNsYXNzTGlzdC5jb250YWlucyhcIkNoZWNrQm94TGlzdEZvcm1GaWVsZFwiKSYmZS5jbGFzc0xpc3QuY29udGFpbnMoXCJBdXRvQ29tcGxldGVGaWVsZFwiKXx8dC5jbGFzc0xpc3QuY29udGFpbnMoXCJDaGVja0JveExpc3RGb3JtRmllbGRcIikmJnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiQXV0b0NvbXBsZXRlRmllbGRcIikmJnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiQXV0b2NvbXBsZXRlU2VsZWN0RmllbGRDaGlsZEh0bWxFbGVtZW50XCIpfWZ1bmN0aW9uIEgoZSl7cmV0dXJuIEFycmF5LmZyb20oZS5vcHRpb25zKS5tYXAoZT0+ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9wdGlvbi1uYW1lXCIpfHxlLnRleHRDb250ZW50fHxcIlwiKS5tYXAocy5ub3JtYWxpemVBdmF0dXJlTGFiZWwpLmZpbHRlcihCb29sZWFuKX1hc3luYyBmdW5jdGlvbiBZKGUsdCl7aWYoZS50eXBlIT09by5GSUVMRF9UWVBFLlNFTEVDVCYmZS50eXBlIT09by5GSUVMRF9UWVBFLk1VTFRJX1NFTEVDVClyZXR1cm47bGV0IHI9ZS4kaW5wdXQ7aWYoIXIpcmV0dXJuO2xldCBuPVUodCxyKSxhPXEodCxyKTtpZighQyhyKSYmIWEmJiFuKXJldHVybjtsZXQgbD1BcnJheS5pc0FycmF5KGUub3B0aW9ucyk/ZS5vcHRpb25zOltdO2lmKG4mJmwubGVuZ3RoPjApcmV0dXJuO2xldCB1PWF3YWl0ICQociksYz1lLmxhYmVsPT09aS5QSE9ORV9DT1VOVFJZX0NPREVfTEFCRUw7aWYoMD09PXUubGVuZ3RoKXtjJiYoZS5kZXNjcmlwdGlvbj1pLlBIT05FX0NPVU5UUllfQ09ERV9ERVNDUklQVElPTik7cmV0dXJufWMmJmRlbGV0ZSBlLmRlc2NyaXB0aW9uO2xldCBkPW5ldyBTZXQ7ZS5vcHRpb25zPVsuLi5sLC4uLnVdLmZpbHRlcihlPT57bGV0IHQ9KDAscy5ub3JtYWxpemVBdmF0dXJlTGFiZWwpKGUpLnRvTG93ZXJDYXNlKCk7cmV0dXJuIWQuaGFzKHQpJiYoZC5hZGQodCksITApfSl9ZnVuY3Rpb24geihlKXtpZighZXx8ZS5oaWRkZW58fFwidHJ1ZVwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKSlyZXR1cm4hMTtsZXQgdD1lO2Zvcig7dDspe2lmKHQuaGlkZGVufHxcInRydWVcIj09PXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIikpcmV0dXJuITE7bGV0IGU9d2luZG93LmdldENvbXB1dGVkU3R5bGUodCk7aWYoXCJub25lXCI9PT1lLmRpc3BsYXl8fFwiaGlkZGVuXCI9PT1lLnZpc2liaWxpdHl8fFwiY29sbGFwc2VcIj09PWUudmlzaWJpbGl0eSlyZXR1cm4hMTt0PXQucGFyZW50RWxlbWVudH1yZXR1cm4gZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aD4wfWZ1bmN0aW9uIFYoZSl7cmV0dXJuKDAsYS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoZCxlKX1mdW5jdGlvbiBXKGUpe3JldHVybigwLGEuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKCcuLy9kaXZbY29udGFpbnMoQGNsYXNzLCBcIlJhZGlvQnV0dG9uTGlzdENvbnRhaW5lclwiKV0nLGUpfWZ1bmN0aW9uIEcoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoITApLHI9dC5xdWVyeVNlbGVjdG9yQWxsKCcucmVxdWlyZWRGaWVsZCwgLmxhYmVsUmVxdWlyZWRJY29uLCBzcGFuLnJlcXVpcmVkRmllbGQsIHNwYW5bY2xhc3MqPVwicmVxdWlyZWRcIl0nKTtyLmZvckVhY2goZT0+ZS5yZW1vdmUoKSk7bGV0IG49QXJyYXkuZnJvbSh0LmNoaWxkTm9kZXMpLmZpbmQoZT0+ZS5ub2RlVHlwZT09PU5vZGUuVEVYVF9OT0RFJiZlLm5vZGVWYWx1ZT8udHJpbSgpKTtpZihuPy5ub2RlVmFsdWU/LnRyaW0oKSlyZXR1cm4oMCxzLm5vcm1hbGl6ZUF2YXR1cmVMYWJlbCkobi5ub2RlVmFsdWUudHJpbSgpLnNwbGl0KFwiXFxuXCIpWzBdKTtsZXQgbz10LnF1ZXJ5U2VsZWN0b3IoXCIubGFiZWxUZXh0LCAuZGF0YXNldGxhYmVsVGV4dFwiKTtpZihvKXtsZXQgZT1vLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXF1aXJlZEZpZWxkLCAubGFiZWxSZXF1aXJlZEljb24sIHNwYW4ucmVxdWlyZWRGaWVsZCwgc3BhbltjbGFzcyo9XCJyZXF1aXJlZFwiXScpO2UuZm9yRWFjaChlPT5lLnJlbW92ZSgpKTtsZXQgdD1vLnRleHRDb250ZW50Py50cmltKCl8fFwiXCI7aWYodClyZXR1cm4oMCxzLm5vcm1hbGl6ZUF2YXR1cmVMYWJlbCkodC5zcGxpdChcIlxcblwiKVswXSl9bGV0IGk9dC50ZXh0Q29udGVudD8/XCJcIjtyZXR1cm4oMCxzLm5vcm1hbGl6ZUF2YXR1cmVMYWJlbCkoaS50cmltKCkuc3BsaXQoXCJcXG5cIilbMF0pfWZ1bmN0aW9uIEsoKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgZG9jdW1lbnQpcmV0dXJuITE7bGV0IGU9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpZWxkU3BlYywgW2lkKj0nZmllbGRTcGVjQ29udGFpbmVyJ11cIikpO3JldHVybiBlLnNvbWUoZT0+e2xldCB0PVYoZSk7cmV0dXJuISEodCYmKDAscy5pc0F2YXR1cmVQaG9uZUNvdW50cnlDb2RlTGFiZWwpKEcodCkpKX0pfWZ1bmN0aW9uIFgoZSl7bGV0IHQ9KDAsYS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoJy4vL3NwYW5bY29udGFpbnMoQGNsYXNzLCBcImZvcm1yZXF1aXJlZEZpZWxkXCIpXSB8IC4vL3NwYW5bY29udGFpbnMoQGNsYXNzLCBcImxhYmVsUmVxdWlyZWRJY29uXCIpXSB8IC4vL3NwYW5bY29udGFpbnMoQGNsYXNzLCBcInJlcXVpcmVkRmllbGRcIildJyxlKTtyZXR1cm4hIXR9ZnVuY3Rpb24gSihlKXtsZXQgdD1WKGUpLHI9VyhlKTtpZighdCYmIXIpcmV0dXJuIG51bGw7bGV0IG49dD9HKHQpOlwiXCI7aWYoKDAscy5zaG91bGRJZ25vcmVBdmF0dXJlRmllbGRMYWJlbCkobikmJiFyKXJldHVybiBudWxsO2xldCBvPVgoZSk7cmV0dXJue3NlY3Rpb246ZSxsYWJlbEVsZW1lbnQ6dCxsYWJlbFRleHQ6bixyZXF1aXJlZDpvfX1mdW5jdGlvbiBRKGUpe2xldCB0PSgwLGEuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoZixlKSxyPVtdLG49bmV3IFNldDtmb3IobGV0IGUgb2YgdCl7bGV0IHQ9WihlKTtmb3IobGV0IGUgb2YgdCl7bGV0e3Jvdzp0LGxhYmVsRWxlbWVudDpvLGxhYmVsVGV4dDppLHJlcXVpcmVkOmx9PWUsdT0oMCxhLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcIi4vL3NlbGVjdCB8IC4vL2lucHV0IHwgLi8vdGV4dGFyZWFcIix0KSxjPXU/LmlkfHx1Py5uYW1lfHx1Py5nZXRBdHRyaWJ1dGU/LihcImRhdGEtc2VsZWN0Mi1pZFwiKXx8XCJcIixkPWAke2l9OiR7dT8udGFnTmFtZXx8XCJST1dcIn06JHtjfHwoMCxzLm5vcm1hbGl6ZUF2YXR1cmVMYWJlbCkodC50ZXh0Q29udGVudHx8XCJcIil9YCxmPWkudHJpbSgpLnRvTG93ZXJDYXNlKCk7aWYobi5oYXMoZCl8fG4uaGFzKGYpKWNvbnRpbnVlO24uYWRkKGQpLG4uYWRkKGYpO2xldCBwPWV0KHQsbyxpLGwpO3AmJnAubGFiZWwmJlwiXCIhPT1wLmxhYmVsLnRyaW0oKSYmci5wdXNoKHApfX1yZXR1cm4gcn1mdW5jdGlvbiBaKGUpe2xldCB0PSgwLGEuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoJy4vL2Rpdltjb250YWlucyhAaWQsIFwiZGF0YXNldEZpZWxkQ29udGFpbmVyXCIpXSB8IC4vL2Rpdltjb250YWlucyhAaWQsIFwiZmllbGRTcGVjQ29udGFpbmVyXCIpXSB8IC4vL2Rpdltjb250YWlucyhjb25jYXQoXCIgXCIsIG5vcm1hbGl6ZS1zcGFjZShAY2xhc3MpLCBcIiBcIiksIFwiIGRhdGFzZXRmaWVsZFNwZWMgXCIpXSB8IC4vL2Rpdltjb250YWlucyhjb25jYXQoXCIgXCIsIG5vcm1hbGl6ZS1zcGFjZShAY2xhc3MpLCBcIiBcIiksIFwiIGZpZWxkU3BlYyBcIildJyxlKSxyPVtdO2ZvcihsZXQgZSBvZiB0KXtpZigheihlKSljb250aW51ZTtsZXQgdD0oMCxhLmdldE9yZGVyZWROb2Rlc1NhZmUpKFwiLi8vc2VsZWN0IHwgLi8vaW5wdXQgfCAuLy90ZXh0YXJlYVwiLGUpLG49dC5zb21lKGU9PmUudGFnTmFtZT8udG9Mb3dlckNhc2UoKSE9PVwiaW5wdXRcInx8XCJoaWRkZW5cIiE9PWUudHlwZSk7aWYoIW4pY29udGludWU7bGV0IG89VihlKTtpZighbyljb250aW51ZTtsZXQgaT1HKG8pO2lmKCFpfHwoMCxzLnNob3VsZElnbm9yZUF2YXR1cmVGaWVsZExhYmVsKShpKSljb250aW51ZTtsZXQgbD0oMCxhLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKSgnLi8vc3Bhbltjb250YWlucyhAY2xhc3MsIFwibGFiZWxSZXF1aXJlZEljb25cIildJyxlKTtyLnB1c2goe3JvdzplLGxhYmVsRWxlbWVudDpvLGxhYmVsVGV4dDppLHJlcXVpcmVkOiEhbH0pfXJldHVybiByfWFzeW5jIGZ1bmN0aW9uIGVlKCl7bGV0IGU9W10sdD0wLHI9MCxuPTAsbz0oMCxhLmdldE9yZGVyZWROb2Rlc1NhZmUpKCcvL2ZpZWxkc2V0W2NvbnRhaW5zKEBjbGFzcywgXCJTZWN0aW9uXCIpXSB8IC8vZGl2W2NvbnRhaW5zKEBjbGFzcywgXCJTZWN0aW9uXCIpXScsZG9jdW1lbnQuYm9keSkuZmlsdGVyKGU9PnooZSkpO2ZvcihsZXQgaSBvZiBvKXtsZXQgbz0oMCxhLmdldE9yZGVyZWROb2Rlc1NhZmUpKCcuLy9kaXZbY29udGFpbnMoQGlkLCBcImZpZWxkU3BlY0NvbnRhaW5lclwiKSBhbmQgbm90KEBoaWRkZW4pXScsaSksbD1uZXcgU2V0LHM9W107Zm9yKGxldCBlIG9mIG8pe2lmKCF6KGUpKWNvbnRpbnVlO2xldCB0PWUuaWQubWF0Y2goL14oZmllbGRTcGVjQ29udGFpbmVyXFxkKykvKTtpZighdCljb250aW51ZTtsZXQgcj1lLmNsb3Nlc3QocCk7aWYociYmciE9PWV8fGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9ybUNvbnRhaW5lclwiKSljb250aW51ZTtsZXQgbj1lLmNsb3Nlc3QoXCIuZm9ybUNvbnRhaW5lclwiKSxvPW4/ZS5pZDp0WzFdO2wuaGFzKG8pfHwobC5hZGQobykscy5wdXNoKGUpKX1mb3IobGV0IG8gb2Ygcyl7bGV0IGk9by5tYXRjaGVzKHApfHwhIW8ucXVlcnlTZWxlY3RvcihtKTtpZihpKXt0Kz0xO2xldCByPWF3YWl0IGVsKG8pO3IubGVuZ3RoPjA/ZS5wdXNoKC4uLnIpOm4rPTE7Y29udGludWV9bGV0IGE9SihvKTtpZighYSljb250aW51ZTtsZXQgbD1ldChhLnNlY3Rpb24sYS5sYWJlbEVsZW1lbnQsYS5sYWJlbFRleHQsYS5yZXF1aXJlZCk7bCYmKHIrPTEsYXdhaXQgWShsLGEuc2VjdGlvbiksZS5wdXNoKGwpKX19cmV0dXJuIGNvbnNvbGUuaW5mbyhcIltBdmF0dXJlXVtleHRyYWN0UnVsZXNdIHNjYW4tY29tcGxldGVcIix7ZmllbGRzZXRDb3VudDpvLmxlbmd0aCxkYXRhc2V0U2VjdGlvbkNvdW50OnQsdW5zdXBwb3J0ZWREYXRhc2V0U2VjdGlvbkNvdW50Om4sb3JkaW5hcnlTZWN0aW9uQ291bnQ6cixydWxlQ291bnQ6ZS5sZW5ndGh9KSxlLmZpbHRlcihlPT5cIlwiIT09ZS5sYWJlbCl9ZnVuY3Rpb24gZXQoZSx0LHIsbil7bGV0IGw9VyhlKTtpZigoMCxzLnNob3VsZElnbm9yZUF2YXR1cmVGaWVsZExhYmVsKShyKSYmIWwpcmV0dXJuIG51bGw7bGV0IHU9KDAsYS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoJy4vL2lucHV0W0B0eXBlPVwidGV4dFwiIG9yIEB0eXBlPVwiZW1haWxcIiBvciBAdHlwZT1cInRlbFwiIG9yIEB0eXBlPVwibnVtYmVyXCIgb3IgQHR5cGU9XCJtb250aFwiIG9yIEB0eXBlPVwiZGF0ZVwiXScsZSk7aWYodSl7bGV0IGU9KDAscy5pc0F2YXR1cmVQaG9uZU51bWJlckxhYmVsKShyKSYmSygpP2kuTE9DQUxfUEhPTkVfREVTQ1JJUFRJT046dm9pZCAwO3JldHVybiByLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJkYXRlXCIpP3t0eXBlOm8uRklFTERfVFlQRS5EQVRFLGxhYmVsOigwLHMuZ2V0QXZhdHVyZVJlcXVlc3RGaWVsZExhYmVsKShyKSxyZXF1aXJlZDpuLCRpbnB1dDp1LCRsYWJlbDp0LC4uLmU/e2Rlc2NyaXB0aW9uOmV9Ont9fTp7dHlwZTpvLkZJRUxEX1RZUEUuVEVYVCxsYWJlbDooMCxzLmdldEF2YXR1cmVSZXF1ZXN0RmllbGRMYWJlbCkocikscmVxdWlyZWQ6biwkaW5wdXQ6dSwkbGFiZWw6dCwuLi5lP3tkZXNjcmlwdGlvbjplfTp7fX19bGV0IGM9KDAsYS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXCIuLy90ZXh0YXJlYVwiLGUpO2lmKGMpcmV0dXJue3R5cGU6by5GSUVMRF9UWVBFLlRFWFQsbGFiZWw6cixyZXF1aXJlZDpuLCRpbnB1dDpjLCRsYWJlbDp0fTtsZXQgZD0oMCxhLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcIi4vL3NlbGVjdFwiLGUpO2lmKGQpe2xldCBsPVUoZSxkKSx1PSgwLGEuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoXCIuLy9vcHRpb25cIixkKSxjPWw/SChkKTp1Lm1hcChlPT5lLnRleHRDb250ZW50Py50cmltKCl8fFwiXCIpLmZpbHRlcihCb29sZWFuKSxmPXEoZSxkKTtpZihjLmxlbmd0aD4wfHxDKGQpfHxmKXtsZXQgZT17dHlwZTpsP28uRklFTERfVFlQRS5NVUxUSV9TRUxFQ1Q6by5GSUVMRF9UWVBFLlNFTEVDVCxsYWJlbDooMCxzLmdldEF2YXR1cmVSZXF1ZXN0RmllbGRMYWJlbCkocikscmVxdWlyZWQ6biwkaW5wdXQ6ZCwkbGFiZWw6dCxvcHRpb25zOmMsb3B0aW9uc01vZGU6ISgwLHMuaXNBdmF0dXJlUGhvbmVDb3VudHJ5Q29kZUxhYmVsKShyKSYmKGZ8fGwpP1wic2VhcmNoYWJsZVwiOlwiY29tcGxldGVcIn07cmV0dXJuKDAscy5pc0F2YXR1cmVQaG9uZUNvdW50cnlDb2RlTGFiZWwpKHIpJiYwPT09Yy5sZW5ndGgmJihlLmRlc2NyaXB0aW9uPWkuUEhPTkVfQ09VTlRSWV9DT0RFX0RFU0NSSVBUSU9OKSxlfX1sZXQgZj0oMCxhLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKSgnLi8vaW5wdXRbY29udGFpbnMoQHR5cGUsIFwiY2hlY2tib3hcIildJyxlKTtpZihmKXtsZXQgaT0oMCxhLmdldE9yZGVyZWROb2Rlc1NhZmUpKCcuLy9pbnB1dFtjb250YWlucyhAdHlwZSwgXCJjaGVja2JveFwiKV0nLGUpO2lmKGkubGVuZ3RoPjApe2xldCBlPWkubWFwKGU9PmUudGV4dENvbnRlbnQudHJpbSgpKTtyZXR1cm57dHlwZTpvLkZJRUxEX1RZUEUuQ0hFQ0tCT1gsbGFiZWw6cixyZXF1aXJlZDpuLCRjaGVja2JveHM6aSwkaW5wdXQ6aVswXSwkbGFiZWw6dCxvcHRpb25zOmV9fX1pZighbClyZXR1cm47bGV0IHA9KDAsYS5nZXRPcmRlcmVkTm9kZXNTYWZlKSgnLi8vaW5wdXRbQHR5cGU9XCJyYWRpb1wiXScsbCk7aWYoIXB8fDA9PT1wLmxlbmd0aClyZXR1cm47bGV0IG09cnx8XCJcIixoPWwuY2xvc2VzdChcImZpZWxkc2V0XCIpO2lmKGgpe2xldCBlPWgucXVlcnlTZWxlY3RvcihcImxlZ2VuZFwiKTtlPy50ZXh0Q29udGVudD8udHJpbSgpJiYobT0oMCxzLm5vcm1hbGl6ZUF2YXR1cmVMYWJlbCkoZS50ZXh0Q29udGVudCkpfWlmKCFtfHxcIipcIj09PW0udHJpbSgpfHxcIlwiPT09bS50cmltKCkpe2xldCBlPWVhKGwpO2UmJihtPSgwLHMubm9ybWFsaXplQXZhdHVyZUxhYmVsKShlKSl9aWYobT0oMCxzLm5vcm1hbGl6ZUF2YXR1cmVMYWJlbCkobSksKDAscy5zaG91bGRJZ25vcmVBdmF0dXJlRmllbGRMYWJlbCkobSkpcmV0dXJuIG51bGw7bGV0IGc9cC5tYXAoZT0+e2xldCB0PWUuZ2V0QXR0cmlidXRlKFwiZGF0YS1vcHRpb24tbmFtZVwiKTtpZih0KXJldHVybiB0LnRyaW0oKTtpZihlLmlkKXtsZXQgdD1sLnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7ZS5pZH1cIl1gKTtpZih0Py50ZXh0Q29udGVudClyZXR1cm4gdC50ZXh0Q29udGVudC50cmltKCl9cmV0dXJuXCJcIn0pLmZpbHRlcihCb29sZWFuKTtyZXR1cm57dHlwZTpvLkZJRUxEX1RZUEUuUkFESU9HUk9VUCxsYWJlbDptLHJlcXVpcmVkOm4sJGlucHV0Om51bGwsJGxhYmVsOnQ/P251bGwsJHJhZGlvUGFyZW50Omwsb3B0aW9uczpnfX1hc3luYyBmdW5jdGlvbiBlcihlKXtyZXR1cm4oYXN5bmMoKT0+e2lmKCFlKXJldHVybltdO2xldCB0PVEoZSk7cmV0dXJuKGF3YWl0IEIodCksdC5sZW5ndGg+MCk/W3t0eXBlOm8uRklFTERfVFlQRS5FRFVDQVRJT04sbGFiZWw6XCJFZHVjYXRpb25cIixyZXF1aXJlZDohMCxjaGlsZHJlbjp0LG9wdGlvbnM6dC5tYXAoZT0+e2xldCB0PXtsYWJlbDplLmxhYmVsLnRyaW0oKSxyZXF1aXJlZDplLnJlcXVpcmVkLHR5cGU6ZS50eXBlPT09by5GSUVMRF9UWVBFLlNFTEVDVHx8ZS50eXBlPT09by5GSUVMRF9UWVBFLkxJU1RCT1g/XCJsaXN0Ym94XCI6ZS50eXBlPT09by5GSUVMRF9UWVBFLk1VTFRJX1NFTEVDVD9cIm11bHRpLXNlbGVjdFwiOmUudHlwZT09PW8uRklFTERfVFlQRS5EQVRFP1wiZGF0ZVwiOmUudHlwZT09PW8uRklFTERfVFlQRS5DSEVDS0JPWD9cImNoZWNrYm94XCI6XCJ0ZXh0XCJ9O3JldHVybiBlLnR5cGU9PT1vLkZJRUxEX1RZUEUuREFURSYmKHQuZGVzY3JpcHRpb249dyhlKSkseShlLmxhYmVsKSYmKHQuZGVzY3JpcHRpb249ZyksZS50eXBlPT09by5GSUVMRF9UWVBFLkNIRUNLQk9YP3Qub3B0aW9ucz1lLm9wdGlvbnMmJkFycmF5LmlzQXJyYXkoZS5vcHRpb25zKT9lLm9wdGlvbnM6W106ZS5vcHRpb25zJiZBcnJheS5pc0FycmF5KGUub3B0aW9ucykmJih0Lm9wdGlvbnM9ZS5vcHRpb25zKSx0fSl9XTpbXX0pKCl9YXN5bmMgZnVuY3Rpb24gZW4oZSl7cmV0dXJuKGFzeW5jKCk9PntpZighZSlyZXR1cm5bXTtsZXQgdD1RKGUpO2lmKHQubGVuZ3RoPjApe2xldCBlPXQubWFwKGU9PntsZXQgdD17bGFiZWw6ZS5sYWJlbC50cmltKCkscmVxdWlyZWQ6ZS5yZXF1aXJlZCx0eXBlOmUudHlwZT09PW8uRklFTERfVFlQRS5TRUxFQ1R8fGUudHlwZT09PW8uRklFTERfVFlQRS5MSVNUQk9YP1wibGlzdGJveFwiOmUudHlwZT09PW8uRklFTERfVFlQRS5NVUxUSV9TRUxFQ1Q/XCJtdWx0aS1zZWxlY3RcIjplLnR5cGU9PT1vLkZJRUxEX1RZUEUuREFURT9cImRhdGVcIjplLnR5cGU9PT1vLkZJRUxEX1RZUEUuQ0hFQ0tCT1g/XCJjaGVja2JveFwiOlwidGV4dFwifTtyZXR1cm4gZS50eXBlPT09by5GSUVMRF9UWVBFLkRBVEUmJih0LmRlc2NyaXB0aW9uPXcoZSkpLFwiRW1wbG95ZXJcIj09PWUubGFiZWwmJih0LmxhYmVsPVwiQ29tcGFueSBOYW1lXCIsdC50eXBlPVwidGV4dFwiKSxlLnR5cGU9PT1vLkZJRUxEX1RZUEUuQ0hFQ0tCT1g/dC5vcHRpb25zPWUub3B0aW9ucyYmQXJyYXkuaXNBcnJheShlLm9wdGlvbnMpP2Uub3B0aW9uczpbXTplLm9wdGlvbnMmJkFycmF5LmlzQXJyYXkoZS5vcHRpb25zKSYmKHQub3B0aW9ucz1lLm9wdGlvbnMpLHR9KTtyZXR1cm5be3R5cGU6by5GSUVMRF9UWVBFLkVNUExPWU1FTlQsbGFiZWw6XCJFbXBsb3ltZW50XCIscmVxdWlyZWQ6ITAsY2hpbGRyZW46dCxvcHRpb25zOngodCxlKX1dfXJldHVybltdfSkoKX1hc3luYyBmdW5jdGlvbiBlbyhlKXtsZXQgdD0oMCxhLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKSgnLi8vYVtAaWQgYW5kIGNvbnRhaW5zKEBpZCwgXCJhZGRSb3dGb3JcIildJyxlKTtpZighdClyZXR1cm47bGV0IHI9bmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KTt0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGU9PmUucHJldmVudERlZmF1bHQoKSx7b25jZTohMH0pLHQuZGlzcGF0Y2hFdmVudChyKSxhd2FpdCAoMCxsLmRlbGF5KSgyMDApfWFzeW5jIGZ1bmN0aW9uIGVpKCl7bGV0IGU9KDAsYS5nZXRPcmRlcmVkTm9kZXNTYWZlKSgnLy9kaXZbY29udGFpbnMoQGNsYXNzLCBcIm11bHRpcGxlRGF0YXNldFdyYXBwZXJcIildIHwgLy9kaXZbY29udGFpbnMoQGNsYXNzLCBcIm11bHRpcGxlRGF0YXNldFwiKV0nLGRvY3VtZW50KTtpZigwIT09ZS5sZW5ndGgpe2ZvcihsZXQgdCBvZiBlKXtsZXQgZT0oMCxhLmdldE9yZGVyZWROb2Rlc1NhZmUpKCcuLy9kaXZbY29udGFpbnMoQGlkLCBcIm11bHRpcGxlRGF0YXNldEVudHJ5X1wiKSBhbmQgbm90KGNvbnRhaW5zKEBpZCwgXCJfc2FtcGxlXCIpKSBhbmQgbm90KGNvbnRhaW5zKEBjbGFzcywgXCJUYWJsZVNhbXBsZVJvd1wiKSldJyx0KTtpZighKGUubGVuZ3RoPD0xKSlmb3IobGV0IHQ9MTt0PGUubGVuZ3RoO3QrKyl7bGV0IHI9KDAsYS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoJy4vL2FbY29udGFpbnMobm9ybWFsaXplLXNwYWNlKHRleHQoKSksIFwicmVtb3ZlXCIpXScsZVt0XSk7ciYmKHIuY2xpY2soKSxhd2FpdCAoMCxsLmRlbGF5KSgxNTApKX19YXdhaXQgKDAsbC5kZWxheSkoNTAwKX19ZnVuY3Rpb24gZWEoZSl7bGV0IHQ9ZS5jbG9zZXN0KFwiLmZpZWxkU3BlY1wiKTtpZighdClyZXR1cm4gbnVsbDtsZXQgcj10LnByZXZpb3VzRWxlbWVudFNpYmxpbmcsbj0hMTtmb3IoO3I7KXtpZihyLmNsYXNzTGlzdC5jb250YWlucyhcImZpZWxkU3BlY1wiKSl7bGV0IGU9ci5xdWVyeVNlbGVjdG9yKFwiaDEsIGgyLCBoMywgaDQsIGg1LCBoNlwiKSx0PSgwLHMubm9ybWFsaXplQXZhdHVyZUxhYmVsKShlPy50ZXh0Q29udGVudHx8XCJcIik7aWYodClyZXR1cm4gdDtpZihufHwobj0hMCxyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Om5vdChbdHlwZT1cImhpZGRlblwiXSksIHRleHRhcmVhLCBzZWxlY3QnKSkpe3I9ci5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO2NvbnRpbnVlfWxldCBvPXIucXVlcnlTZWxlY3RvcihcIi5XaXphcmRGaWVsZERlc2NyaXB0aW9uLCAudGNfZm9ybURlc2NyaXB0aW9uLCAuZGVzY3JpcHRpb25cIiksaT0oMCxzLm5vcm1hbGl6ZUF2YXR1cmVMYWJlbCkobz8udGV4dENvbnRlbnR8fFwiXCIpO2lmKGkpcmV0dXJuKDAscy5zaG91bGRJZ25vcmVBdmF0dXJlRmllbGRMYWJlbCkoaSk/bnVsbDppfXI9ci5wcmV2aW91c0VsZW1lbnRTaWJsaW5nfXJldHVybiBudWxsfWFzeW5jIGZ1bmN0aW9uIGVsKGUpe2xldCB0PVtdLHI9KDAsYS5nZXRPcmRlcmVkTm9kZXNTYWZlKShkLGUpO2lmKCFyKXJldHVybltdO2xldCBuPXIubWFwKGU9PkcoZSkudG9Mb3dlckNhc2UoKS50cmltKCkpO2lmKHUuc29tZShlPT5uLnNvbWUodD0+dC5pbmNsdWRlcyhlKSkpKXtsZXQgcj1hd2FpdCBlcihlKTtyZXR1cm4gciYmdC5wdXNoKC4uLnIpLHR9aWYoYy5zb21lKGU9Pm4uc29tZSh0PT50LmluY2x1ZGVzKGUpKSkpe2xldCByPWF3YWl0IGVuKGUpO3JldHVybiByJiZ0LnB1c2goLi4uciksdH1yZXR1cm5bXX1mdW5jdGlvbiBlcyhlKXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3I/LihcImxhYmVsLCBsZWdlbmRcIikscj0oMCxzLm5vcm1hbGl6ZUF2YXR1cmVMYWJlbCkodD8udGV4dENvbnRlbnR8fFwiXCIpO3JldHVybigwLHMuc2hvdWxkSWdub3JlQXZhdHVyZUZpZWxkTGFiZWwpKHIpP1wiXCI6KDAscy5pc0F2YXR1cmVQaG9uZUNvdW50cnlDb2RlTGFiZWwpKHIpP2kuUEhPTkVfQ09VTlRSWV9DT0RFX0xBQkVMOnJ9ZnVuY3Rpb24gZXUoZSx0KXtsZXQgcj10LmdldEF0dHJpYnV0ZShcImRhdGEtb3B0aW9uLW5hbWVcIik7aWYocj8udHJpbSgpKXJldHVybigwLHMubm9ybWFsaXplQXZhdHVyZUxhYmVsKShyKTtpZih0LmlkKXtsZXQgcj1lLnF1ZXJ5U2VsZWN0b3I/LihgbGFiZWxbZm9yPVwiJHt0LmlkfVwiXWApLG49KDAscy5ub3JtYWxpemVBdmF0dXJlTGFiZWwpKHI/LnRleHRDb250ZW50fHxcIlwiKTtpZihuKXJldHVybiBufXJldHVybigwLHMubm9ybWFsaXplQXZhdHVyZUxhYmVsKSh0LnZhbHVlfHxcIlwiKX1mdW5jdGlvbiBlYyhlLHQpe2xldCByPWUucXVlcnlTZWxlY3Rvcj8uKFwiLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZFwiKSxuPSgwLHMubm9ybWFsaXplQXZhdHVyZUxhYmVsKShyPy5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKXx8cj8udGV4dENvbnRlbnR8fFwiXCIpO2lmKG4pcmV0dXJuIG47bGV0IG89dC5xdWVyeVNlbGVjdG9yKFwib3B0aW9uOmNoZWNrZWRcIik7cmV0dXJuKDAscy5ub3JtYWxpemVBdmF0dXJlTGFiZWwpKG8/LnRleHRDb250ZW50fHx0LnZhbHVlfHxcIlwiKX1mdW5jdGlvbiBlZChlLHQpe2xldCByPUFycmF5LmZyb20odC5maWxlc3x8W10pLm1hcChlPT5lLm5hbWUpLmZpbHRlcihCb29sZWFuKTtyZXR1cm4gci5sZW5ndGg+MD9yLmpvaW4oXCIsIFwiKTooMCxzLm5vcm1hbGl6ZUF2YXR1cmVMYWJlbCkoZS5xdWVyeVNlbGVjdG9yPy4oXCIuc2NyZWVuUmVhZGVyVmlzaWJpbGl0eVwiKT8udGV4dENvbnRlbnR8fFwiXCIpfWZ1bmN0aW9uIGVmKGUpe2xldCB0PWUucXVlcnlTZWxlY3Rvcj8uKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpO2lmKHQpcmV0dXJuIGVkKGUsdCk7bGV0IHI9ZS5xdWVyeVNlbGVjdG9yPy4oJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkJyk7aWYocilyZXR1cm4gZXUoZSxyKTtsZXQgbj1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbD8uKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKXx8W10pO2lmKG4ubGVuZ3RoPjApcmV0dXJuIG4uZmlsdGVyKGU9PmUuY2hlY2tlZCkubWFwKHQ9PmV1KGUsdCkpLmZpbHRlcihCb29sZWFuKTtsZXQgbz1lLnF1ZXJ5U2VsZWN0b3I/LihcInNlbGVjdFwiKTtpZihvKXJldHVybiBlYyhlLG8pO2xldCBpPWUucXVlcnlTZWxlY3Rvcj8uKFwidGV4dGFyZWFcIik7aWYoaSlyZXR1cm4gaS52YWx1ZXx8XCJcIjtsZXQgYT1lLnF1ZXJ5U2VsZWN0b3I/LignaW5wdXQ6bm90KFt0eXBlPVwiaGlkZGVuXCJdKScpO3JldHVybiBhJiZhLnZhbHVlfHxcIlwifWZ1bmN0aW9uIGVwKGUpe2xldCB0PWUucXVlcnlTZWxlY3Rvcj8uKCdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pLCB0ZXh0YXJlYSwgc2VsZWN0Jyk7cmV0dXJuISF0fWZ1bmN0aW9uIGVtKGUpe3JldHVybiEhZS5jbG9zZXN0KGgpfWZ1bmN0aW9uIGVoKGUpe3JldHVybiEhZS5xdWVyeVNlbGVjdG9yPy4obSl9ZnVuY3Rpb24gZWcoZSl7bGV0IHQ9ZS5pZC50b0xvd2VyQ2FzZSgpLHI9U3RyaW5nKGUuY2xhc3NOYW1lfHxcIlwiKS50b0xvd2VyQ2FzZSgpO3JldHVybiB0LmluY2x1ZGVzKFwiX3NhbXBsZVwiKXx8ci5pbmNsdWRlcyhcInRhYmxlc2FtcGxlcm93XCIpfHxyLmluY2x1ZGVzKFwiZGF0YXNldGZpZWxkX19yb3ctLXNhbXBsZVwiKX1mdW5jdGlvbiBlYihlLHQ9e30pe2xldCByPXt9LG49QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGw/LihcIi5maWVsZFNwZWMsIFtpZCo9J2ZpZWxkU3BlY0NvbnRhaW5lciddXCIpfHxbXSksbz1uZXcgU2V0O2ZvcihsZXQgZSBvZiBuKXtpZihvLmhhcyhlKXx8KG8uYWRkKGUpLCF0LmluY2x1ZGVEYXRhc2V0U2VjdGlvbnMmJihlbShlKXx8ZWgoZSkpfHwhZXAoZSkpKWNvbnRpbnVlO2xldCBuPWVzKGUpO2lmKCFuKWNvbnRpbnVlO2xldCBpPWVmKGUpO3Jbbl09aX1yZXR1cm4gcn1mdW5jdGlvbiBleShlKXtsZXQgdD1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbD8uKFwibGFiZWwsIGxlZ2VuZCwgLmRhdGFzZXRsYWJlbFRleHRcIil8fFtdKS5tYXAoZT0+KDAscy5ub3JtYWxpemVBdmF0dXJlTGFiZWwpKGUudGV4dENvbnRlbnR8fFwiXCIpLnRvTG93ZXJDYXNlKCkudHJpbSgpKTtpZigwPT09dC5sZW5ndGgpe2xldCByPSgwLHMubm9ybWFsaXplQXZhdHVyZUxhYmVsKShlLnRleHRDb250ZW50fHxcIlwiKS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtyJiZ0LnB1c2gocil9cmV0dXJuIHQuc29tZShlPT5lLmluY2x1ZGVzKFwiZWR1Y2F0aW9uXCIpfHx1LnNvbWUodD0+ZS5pbmNsdWRlcyh0KSkpP1wiZWR1Y2F0aW9uXCI6dC5zb21lKGU9PmUuaW5jbHVkZXMoXCJleHBlcmllbmNlXCIpfHxjLnNvbWUodD0+ZS5pbmNsdWRlcyh0KSkpP1wiZW1wbG95bWVudFwiOm51bGx9ZnVuY3Rpb24gZXYoZSl7bGV0IHQ9bmV3IFNldCxyPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsPy4ocCl8fFtdKTtyLmZvckVhY2goZT0+dC5hZGQoZSkpO2xldCBuPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsPy4obSl8fFtdKTtmb3IobGV0IGUgb2Ygbil7aWYoZWcoZSkpY29udGludWU7bGV0IHI9ZS5jbG9zZXN0KHApO2lmKHIpe3QuYWRkKHIpO2NvbnRpbnVlfXQuYWRkKGUucGFyZW50RWxlbWVudHx8ZSl9cmV0dXJuIEFycmF5LmZyb20odCl9ZnVuY3Rpb24gZXcoZT1kb2N1bWVudC5ib2R5KXtyZXR1cm4gZWIoZSl9ZnVuY3Rpb24gZVMoZT1kb2N1bWVudC5ib2R5KXtsZXQgdD17fSxyPW5ldyBNYXAsbj17fSxvPWV2KGUpO2ZvcihsZXQgZSBvZiBvKXtsZXQgbz1leShlKTtpZighbyljb250aW51ZTtsZXQgaT1yLmdldChvKTtpfHwoaT1uZXcgU2V0LHIuc2V0KG8saSkpO2xldCBhPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsPy4obSl8fFtdKS5maWx0ZXIoZT0+IWVnKGUpKTtmb3IobGV0IGUgb2YgYSl7aWYoaS5oYXMoZSkpe25bb109KG5bb118fDApKzE7Y29udGludWV9aS5hZGQoZSk7bGV0IHI9ZWIoZSx7aW5jbHVkZURhdGFzZXRTZWN0aW9uczohMH0pOzAhPT1PYmplY3Qua2V5cyhyKS5sZW5ndGgmJih0W29dfHwodFtvXT1bXSksdFtvXS5wdXNoKHIpKX19cmV0dXJuIE9iamVjdC5rZXlzKG4pLmxlbmd0aD4wJiZjb25zb2xlLmluZm8oXCJbQXZhdHVyZV1bU25hcHNob3RdIHNraXBwZWQgZHVwbGljYXRlIG5lc3RlZCBkYXRhc2V0IHJvd3NcIix7c2tpcHBlZER1cGxpY2F0ZVJvd3NCeURhdGFzZXRUeXBlOm59KSx0fVxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS5iOWY0ZTc4Zi5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);