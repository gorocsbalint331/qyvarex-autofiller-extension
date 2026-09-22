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
})({"6KbSs":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\myworkday\\operations.js",
    "bundleId": "c4fa348934e29e77",
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
var j = z(require("76574f240430660e"));
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

},{"76574f240430660e":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"7CaK0":[function(require,module,exports) {
/**
 * Parcel module id: apMik
 * Resolved path: src/contents/sites/myworkday/operations.js
 * Dependencies:
 *   ./agreements -> aCsiw  =>  src/contents/sites/myworkday/agreements.js
 *   ./date-parts -> gh1td  =>  src/contents/sites/myworkday/date-parts.js
 *   ./rules -> 1H2ID  =>  src/contents/sites/myworkday/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/crawler/utils -> dMQWN  =>  src/contents/crawler/utils.js
 *   ~contents/crawler/utils/select -> h22JB  =>  src/contents/crawler/utils/select.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/checkbox-label -> 2KQwH  =>  src/contents/methods/checkbox-label.js
 *   ~contents/methods/choice-match -> 6mkI4  =>  src/contents/methods/choice-match.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/observer -> eTzUx  =>  src/contents/methods/observer.js
 *   ~contents/sites/autofill-answer-pair-tracking -> aCElZ  =>  src/contents/sites/autofill-answer-pair-tracking.js
 *   ~contents/sites/education-item-trace -> j7UGI  =>  src/contents/sites/education-item-trace.js
 *   ~contents/sites/myworkday/snapshot-alignment -> 25NpF  =>  src/contents/sites/myworkday/snapshot-alignment.js
 *   ~core/pagenation -> l1kUK  =>  src/core/pagenation.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~store/url -> b53L3  =>  src/store/url.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 *   ~utils/getTargetOrTimeout -> 1TBhF  =>  src/utils/getTargetOrTimeout.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "fillMyWorkdayTextField", ()=>Y), n.export(r, "fillMyWorkdayCheckbox", ()=>Z), n.export(r, "fillMyWorkdayCheckBoxesField", ()=>er), n.export(r, "fillCountry", ()=>en), n.export(r, "findBestWorkdaySearchOption", ()=>eh), n.export(r, "clearWorkdaySearchSelection", ()=>ey), n.export(r, "getWorkdaySkillsFillSummary", ()=>eC), n.export(r, "WORKDAY_SEARCH_SKILLS_OPTION_MAX_RETRY", ()=>eI), n.export(r, "fillSearchBoxInputField", ()=>ta), n.export(r, "fillListboxButtonField", ()=>ts), n.export(r, "fillMyWorkdayListboxRule", ()=>tf), n.export(r, "getWorkdayResumeUploadInput", ()=>tv), n.export(r, "hasWorkdayResumeUploadInput", ()=>tw), n.export(r, "uploadResume", ()=>tS), n.export(r, "fillSkills", ()=>tE), n.export(r, "preclickAddButtons", ()=>tx), n.export(r, "expandForm", ()=>tj), n.export(r, "blurPage", ()=>t_), n.export(r, "fillMyWorkdayDateField", ()=>tO), n.export(r, "isLoadingCleared", ()=>tU), n.export(r, "isMyWorkdayFormReadyForAutofill", ()=>tY), n.export(r, "waitPageClean", ()=>tz), n.export(r, "unbindMyWorkdaySubmitTracking", ()=>t7), n.export(r, "clearActiveMyWorkdaySubmitTracking", ()=>re), n.export(r, "commitVisibleWorkdayInputsBeforeSubmit", ()=>rh), n.export(r, "submitHandler", ()=>rx), n.export(r, "bindMyWorkdaySubmitTracking", ()=>rA);
var o = e("~contents/methods/choice-match"), i = e("./agreements"), a = e("@plasmohq/messaging"), l = e("~contents/crawler/utils"), s = e("~contents/crawler/utils/select"), u = e("~contents/methods/answer"), c = e("~contents/methods/checkbox-label"), d = e("~contents/methods/dom"), f = e("~contents/methods/observer"), p = e("~contents/sites/autofill-answer-pair-tracking"), m = e("~contents/sites/education-item-trace"), h = e("~contents/sites/myworkday/snapshot-alignment"), g = e("~core/pagenation"), b = e("~core/xpath"), y = e("~store/url"), v = e("~utils/delay"), w = e("~utils/getTargetOrTimeout"), S = n.interopDefault(w), E = e("./date-parts"), x = e("./rules");
let C = "__jr_workday_text_request", A = "__jr_workday_text_response", k = "__jr_workday_select_request", T = "__jr_workday_select_response", F = "__jr_workday_date_request", I = "__jr_workday_date_response", j = "__jr_workday_checkbox_request", D = "__jr_workday_checkbox_response", P = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", _ = "abcdefghijklmnopqrstuvwxyz", L = '[data-automation-id="promptLeafNode"], [data-automation-id="promptOption"], [data-automation-id="radioBtn"]', R = '[data-automation-id="activeListContainer"][role="listbox"], [data-automation-id="activeListContainer"]', O = `translate(@aria-labelledby, "${P}", "${_}")`, M = `
  @data-automation-id="educationSection"
  or (
    contains(${O}, "education")
    and substring(${O}, string-length(${O}) - string-length("-section") + 1) = "-section"
  )
  or ${O}="schools-attended-section"
  or ${O}="academic-experience-section"
`, N = !1;
async function $() {
    if (N) return !0;
    try {
        return await (0, a.sendToBackground)({
            name: "injectWorkdayFiber"
        }), N = !0, !0;
    } catch (e1) {
        return console.warn("[WorkdayFiber] failed to inject main world script:", e1), !1;
    }
}
async function B(e1, t) {
    let r1 = await $();
    if (!r1) return !1;
    let n = `__jr_wd_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    e1.setAttribute("data-jr-wd-fiber-id", n);
    let o = `[data-jr-wd-fiber-id="${n}"]`, i = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    return new Promise((r1)=>{
        let n = setTimeout(()=>{
            document.removeEventListener(A, a), e1.removeAttribute("data-jr-wd-fiber-id"), r1(!1);
        }, 3e3);
        function a(t) {
            let o = t.detail;
            o?.requestId === i && (document.removeEventListener(A, a), clearTimeout(n), e1.removeAttribute("data-jr-wd-fiber-id"), r1(!!o.success));
        }
        document.addEventListener(A, a), document.dispatchEvent(new CustomEvent(C, {
            detail: {
                selector: o,
                value: t,
                requestId: i
            }
        }));
    });
}
_c = B;
async function q(e1, t) {
    let r1 = await $();
    if (!r1) return !1;
    let n = `__jr_wd_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    e1.setAttribute("data-jr-wd-fiber-id", n);
    let o = `[data-jr-wd-fiber-id="${n}"]`, i = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    return new Promise((r1)=>{
        let n = setTimeout(()=>{
            document.removeEventListener(T, a), e1.removeAttribute("data-jr-wd-fiber-id"), r1(!1);
        }, 3e3);
        function a(t) {
            let o = t.detail;
            o?.requestId === i && (document.removeEventListener(T, a), clearTimeout(n), e1.removeAttribute("data-jr-wd-fiber-id"), r1(!!o.success));
        }
        document.addEventListener(T, a), document.dispatchEvent(new CustomEvent(k, {
            detail: {
                selector: o,
                candidates: t,
                requestId: i
            }
        }));
    });
}
async function U(e1, t, r1, n) {
    let o = await $();
    if (!o) return {
        success: !1,
        error: "main world injection failed"
    };
    let i = `__jr_wd_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    e1.setAttribute("data-jr-wd-fiber-id", i);
    let a = `[data-jr-wd-fiber-id="${i}"]`, l = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    return new Promise((o)=>{
        let i = setTimeout(()=>{
            document.removeEventListener(I, s), e1.removeAttribute("data-jr-wd-fiber-id"), o({
                success: !1,
                error: "date fiber request timeout"
            });
        }, 3e3);
        function s(t) {
            let r1 = t.detail;
            r1?.requestId === l && (document.removeEventListener(I, s), clearTimeout(i), e1.removeAttribute("data-jr-wd-fiber-id"), o({
                success: !!r1.success,
                inputHandled: !!r1.inputHandled,
                parentCommitHandled: !!r1.parentCommitHandled,
                contextCommitHandled: !!r1.contextCommitHandled,
                dateFieldMetadataId: "string" == typeof r1.dateFieldMetadataId ? r1.dateFieldMetadataId : void 0,
                error: "string" == typeof r1.error ? r1.error : void 0
            }));
        }
        document.addEventListener(I, s), document.dispatchEvent(new CustomEvent(F, {
            detail: {
                selector: a,
                month: t,
                day: r1,
                year: n,
                requestId: l
            }
        }));
    });
}
_c1 = U;
async function H(e1, t = !0) {
    let r1 = await $();
    if (!r1) return !1;
    let n = `__jr_wd_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    e1.setAttribute("data-jr-wd-fiber-id", n);
    let o = `[data-jr-wd-fiber-id="${n}"]`, i = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    return new Promise((r1)=>{
        let n = setTimeout(()=>{
            document.removeEventListener(D, a), e1.removeAttribute("data-jr-wd-fiber-id"), r1(!1);
        }, 3e3);
        function a(t) {
            let o = t.detail;
            o?.requestId === i && (document.removeEventListener(D, a), clearTimeout(n), e1.removeAttribute("data-jr-wd-fiber-id"), r1(!!o.success));
        }
        document.addEventListener(D, a), document.dispatchEvent(new CustomEvent(j, {
            detail: {
                selector: o,
                checked: t,
                requestId: i
            }
        }));
    });
}
_c2 = H;
async function Y(e1, t) {
    await B(e1, t) || await (0, d.fillInputTextField)(e1, t);
}
_c3 = Y;
function z(e1) {
    return (0, x.isWorkdayInputSelected)(e1);
}
function V(e1) {
    if (!e1.id || "undefined" == typeof document) return null;
    let t = e1.id.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    try {
        return document.querySelector(`label[for="${t}"]`);
    } catch  {
        return null;
    }
}
_c4 = V;
function W(e1) {
    let t = e1.parentElement, r1 = t?.nextElementSibling || t?.previousElementSibling, n = [
        "function" == typeof e1.closest ? e1.closest("label") : null,
        V(e1),
        r1,
        t
    ];
    return n.find((e1)=>!!e1 && "function" == typeof e1.click) || e1;
}
_c5 = W;
async function G(e1, t = 250, r1 = z) {
    let n = Date.now();
    for(; Date.now() - n < t;){
        if (r1(e1)) return !0;
        await (0, v.delay)(25);
    }
    return !!r1(e1);
}
_c6 = G;
async function K(e1, t, r1 = 300, n = 1200) {
    let o = Date.now(), i = null;
    for(; Date.now() - o < n;){
        if (t(e1)) {
            if (i ??= Date.now(), Date.now() - i >= r1) return !0;
        } else i = null;
        await (0, v.delay)(50);
    }
    return !1;
}
_c7 = K;
function X(e1, t) {
    let r1 = t.startsWith("pointer") && "function" == typeof PointerEvent ? PointerEvent : MouseEvent;
    e1.dispatchEvent(new r1(t, {
        bubbles: !0,
        cancelable: !0,
        view: window
    }));
}
_c8 = X;
function J(e1) {
    if ("function" == typeof e1.click) {
        e1.click();
        return;
    }
    e1.dispatchEvent(new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0,
        view: window
    }));
}
_c9 = J;
function Q(e1) {
    if ("function" == typeof e1.dispatchEvent) for (let t of [
        "pointerdown",
        "mousedown",
        "pointerup",
        "mouseup"
    ])X(e1, t);
    if ("function" == typeof e1.click) {
        e1.click();
        return;
    }
    X(e1, "click");
}
_c10 = Q;
async function Z(e1, t = !0, r1 = z, n = !0) {
    let o = (e1)=>r1(e1) === n;
    if (!e1 || o(e1)) return;
    let i = await H(e1, n);
    if (!(i && await G(e1, 500, o))) {
        if (e1.focus(), e1.dispatchEvent(new FocusEvent("focus", {
            bubbles: !0,
            cancelable: !1,
            view: window
        })), t) {
            let t = W(e1);
            t !== e1 ? Q(t) : J(e1);
            let r1 = await G(e1, 250, o);
            r1 || t === e1 || (J(e1), r1 = await G(e1, 250, o)), e1.dispatchEvent(new Event("input", {
                bubbles: !0,
                cancelable: !1
            })), e1.dispatchEvent(new Event("change", {
                bubbles: !0,
                cancelable: !1
            }));
        } else e1.dispatchEvent(new Event("change", {
            bubbles: !0,
            cancelable: !1
        }));
        e1.blur(), e1.dispatchEvent(new FocusEvent("blur", {
            bubbles: !0,
            cancelable: !1,
            view: window
        }));
    }
}
_c11 = Z;
function ee(e1, t, r1) {
    return e1.options?.[r1]?.trim() || (0, c.normalizeRadioCheckText)((0, c.getRadioCheckText)(t));
}
function et(e1, t, r1) {
    let n = (0, c.normalizeRadioCheckText)(e1).replace(/\s+/g, " "), i = t.map((e1)=>(0, c.normalizeRadioCheckText)(String(e1)).replace(/\s+/g, " ")).filter(Boolean);
    if (i.some((e1)=>(0, o.isExactChoiceMatch)(n, e1))) return !0;
    let a = i[0] || "", l = r1.toLowerCase();
    return "true" === a && "yes" === n || "false" === a && "no" === n || n.includes("have read") && "true" === a || (0, u.isMatched)(n, r1) && "true" === a || "true" === a && (n.includes("current") || l.includes("current")) || l.includes("current") && "true" === a;
}
async function er(e1, t) {
    let r1 = Array.isArray(t) ? t : [
        t
    ], n = (0, i.getWorkdayAgreementState)(e1);
    if (null !== n) {
        let t = 1 === r1.length ? String(r1[0]).trim().toLowerCase() : "";
        if ("true" !== t && "false" !== t) return console.info("[MyWorkday][autofill-debug] agreement:no-valid-answer", {
            selected: n,
            required: !!e1.required
        }), n;
        let o = "true" === t, i = e1.$checkboxs[0];
        console.info("[MyWorkday][autofill-debug] agreement:fill-start", {
            selected: n,
            targetSelected: o,
            required: !!e1.required
        }), await Z(i, !0, z, o);
        let a = z(i), l = a === o, s = l && (!e1.required || a);
        return console.info("[MyWorkday][autofill-debug] agreement:fill-result", {
            selected: a,
            targetSelected: o,
            complete: s,
            reason: l ? s ? "answer-matched" : "required-unchecked" : "state-not-committed"
        }), s;
    }
    if (1 === e1.$checkboxs.length && /^i currently work here\s*\*?$/i.test(e1.label.trim()) && 1 === r1.length && "false" === String(r1[0]).trim().toLowerCase()) {
        let t = e1.$checkboxs[0];
        return await Z(t, !0, z, !1), !z(t);
    }
    let o = (0, x.isWorkdaySelfIdentifyLabel)(e1.label), a = o ? x.isWorkdaySelfIdentifyInputSelected : z;
    for(let t = 0; t < e1.$checkboxs.length; t++){
        let n = e1.$checkboxs[t], i = ee(e1, n, t);
        if (i && et(i, r1, e1.label)) for(let e1 = 0; e1 < 2 && !a(n) && (await Z(n, !0, a), !(!o || await K(n, a))); e1++);
    }
    return e1.$checkboxs.some((e1)=>a(e1));
}
async function en(e1 = "United States of America") {
    let t = (0, b.getFirstOrderedNode)('.//button[@data-automation-id="countryDropdown" or @data-automation-id="formField-country" or @id="country--country"]');
    if (!t) return !1;
    let r1 = t;
    return !!ea(r1.textContent, e1) || ts(r1, [
        e1
    ]);
}
function eo(e1) {
    let t = el(e1), r1 = es(e1);
    return !t || "select one" === t || ed(r1, "selectone");
}
function ei(e1, t) {
    return !!(e1 === t || ed(e1, t)) || [
        [
            "unitedstatesofamerica",
            "unitedstates",
            "usa",
            "us"
        ],
        [
            "canada",
            "ca"
        ]
    ].some((r1)=>r1.includes(e1) && r1.includes(t));
}
function ea(e1, t) {
    if (eo(e1)) return !1;
    let r1 = es(e1), n = es(t);
    return !!r1 && !!n && ei(r1, n);
}
function el(e1) {
    return String(e1 ?? "").replace(/\s+/g, " ").trim().toLowerCase();
}
function es(e1) {
    return el(e1).replace(/[^a-z0-9]/g, "");
}
function eu(e1) {
    return el(e1).replace(/[^a-z0-9+#.]/g, "");
}
function ec(e1) {
    return el(e1).split(/[^a-z0-9]+/).filter(Boolean);
}
function ed(e1, t) {
    return !!e1 && !!t && !(e1.length <= t.length) && e1.length % t.length == 0 && e1 === t.repeat(e1.length / t.length);
}
function ef(e1) {
    let t = el(e1?.textContent);
    return "no items" === t || "no items." === t || "no matches found" === t;
}
function ep(e1) {
    return "no matches found" === el(e1);
}
function em(e1) {
    return e1.map((e1)=>el(e1?.textContent)).filter(Boolean).join("|");
}
function eh(e1, t, r1 = {}) {
    let n = r1.strict ?? !0, o = r1.allowFuzzy ?? !0, i = r1.allowExpandedMatch ?? !0, a = el(e1), l = es(e1), u = eu(e1), c = u !== l, d = ec(e1), f = i && (!n || d.length > 1 || l.length <= 3), p = t.filter((e1)=>!ef(e1));
    if (!l || 0 === p.length) return null;
    let m = p.find((e1)=>{
        let t = e1?.textContent, r1 = el(t), n = es(t), o = eu(t), i = o !== n, s = !c && !i;
        return r1 === a || o === u || ed(o, u) || s && (n === l || ed(n, l));
    });
    if (m) return m;
    let h = c || !f ? null : p.find((e1)=>ec(e1?.textContent).includes(l));
    if (h) return h;
    if (n && !c && l.length <= 3 || n && !f) return null;
    let g = c ? u : l, b = p.find((e1)=>{
        let t = c ? eu(e1?.textContent) : es(e1?.textContent);
        return t.length > 0 && t.includes(g);
    });
    if (b) return b;
    if (o) {
        let t = (0, s.fuzzyFindBest)(e1, p, {
            threshold: n ? .7 : .5,
            normalize: (e1)=>el(e1)
        });
        if (t) return t;
    }
    return !n && r1.allowFirstCandidateFallback ? p[0] ?? null : null;
}
function eg(e1) {
    return (0, b.getFirstOrderedNode)('.//ancestor-or-self::*[@data-automation-id="multiselectInputContainer" or @data-automation-id="multiSelectContainer"]', e1) ?? e1.parentElement?.parentElement ?? e1;
}
function eb(e1) {
    let t = e1?.getAttribute?.("data-automation-id");
    return "multiselectInputContainer" === t || "multiSelectContainer" === t;
}
async function ey(e1) {
    if (!e1) return !1;
    let t = eg(e1), r1 = Array.from(t.querySelectorAll('[data-automation-id="selectedItemList"] button, [data-automation-id="selectedItemList"] [role="button"], [data-automation-id="selectedItemList"] [aria-label*="Remove" i], [data-automation-id="selectedItemList"] [title*="Remove" i], [data-automation-id="selectedItemList"] [data-automation-id*="remove" i], [data-automation-id="selectedItemList"] [data-automation-id*="delete" i]')).filter((e1)=>{
        let t = e1;
        return !t.disabled;
    });
    for (let e1 of r1)e1.click?.(), (0, d.triggerEvents)(e1, [
        "mousedown",
        "mouseup",
        "click"
    ]), await (0, v.delay)(50);
    if (r1.length > 0) {
        let e1 = "undefined" != typeof Node && t instanceof Node ? t : void 0;
        await (0, f.waitForCondition)(()=>0 === eE(t).length, {
            timeout: 1e3,
            interval: 50,
            observeTarget: e1
        });
    }
    return e1.value = "", (0, d.triggerEvents)(e1, [
        "input",
        "change",
        "blur"
    ]), e1.blur?.(), r1.length > 0;
}
function ev(e1, t) {
    let r1 = es(e1?.id), n = es(e1?.name), o = es(t?.getAttribute?.("data-automation-id")), i = el(t?.textContent), a = t?.closest?.('[data-automation-id="skillsSection"], [data-automation-id="formField-skills"], [id*="Skills-section"]');
    return r1.includes("skills") || n.includes("skills") || o.includes("skills") || i.includes("type to add skills") || !!a;
}
function ew(e1, t) {
    let r1 = es(e1?.id), n = es(e1?.name), o = es(t?.getAttribute?.("data-automation-id")), i = el(t?.textContent), a = e1?.closest?.('[data-automation-id="formField-fieldOfStudy"]') || t?.closest?.('[data-automation-id="formField-fieldOfStudy"]');
    return r1.includes("fieldofstudy") || n.includes("fieldofstudy") || o.includes("fieldofstudy") || i.includes("field of study") || !!a;
}
function eS(e1, t) {
    let r1 = es(e1?.id), n = es(e1?.name), o = es(t?.getAttribute?.("data-automation-id")), i = el(t?.textContent), a = e1?.closest?.('[data-automation-id="formField-school"]') || t?.closest?.('[data-automation-id="formField-school"]');
    return r1.includes("school") || r1.includes("institution") || n.includes("school") || n.includes("institution") || o.includes("school") || o.includes("institution") || i.includes("school or university") || i.includes("educational institution") || !!a;
}
function eE(e1) {
    return e1 ? (0, b.getOrderedNodes)('.//*[@data-automation-id="selectedItemList" and @role="listbox"]//*[@data-automation-id="menuItem"]', e1).map((e1)=>el(e1?.textContent)).filter(Boolean) : [];
}
function ex(e1, t) {
    let r1 = es(t);
    return !!r1 && eE(e1).some((e1)=>{
        let t = es(e1);
        return t === r1 || ed(t, r1);
    });
}
function eC(e1, t) {
    let r1 = (e1 ?? []).map((e1)=>String(e1 ?? "").trim()).filter(Boolean), n = (t ?? []).map((e1)=>String(e1 ?? "").trim()).filter(Boolean), o = n.map((e1)=>es(e1)).filter(Boolean), i = r1.filter((e1)=>{
        let t = es(e1);
        return !t || !o.some((e1)=>e1 === t || ed(e1, t));
    });
    return {
        requestedCount: r1.length,
        selectedCount: n.length,
        missingSkills: i
    };
}
function eA(e1, t) {
    let r1 = es(t);
    return !!r1 && eE(e1).some((e1)=>{
        let t = es(e1);
        return !!t && t !== r1 && !ed(t, r1);
    });
}
let ek = 'input[data-automation-id="searchBox"], input[placeholder="Search"]', eT = '[data-automation-id="activeListContainer"] input[data-automation-id="searchBox"], [data-automation-id="activeListContainer"] input[placeholder="Search"]', eF = 150, eI = 30, ej = 1, eD = 8, eP = eI + 1, e_ = 2, eL = 12, eR = 2, eO = 800, eM = 5, eN = 500, e$ = 250, eB = 1200, eq = 3, eU = new WeakMap;
function eH(e1 = [], t = null) {
    if (e1.some((e1)=>ep(e1?.textContent))) return !0;
    let r1 = t ? (0, b.getOrderedNodes)('.//*[normalize-space(.)="No matches found" or @title="No matches found"]', t) : (0, b.getOrderedNodes)('//*[@data-automation-id="activeListContainer"]//*[normalize-space(.)="No matches found" or @title="No matches found"]');
    return r1.some((e1)=>{
        let t = "function" == typeof e1.getAttribute ? e1.getAttribute("title") : "";
        return ep(t) || ep(e1.textContent);
    });
}
function eY(e1) {
    return String(e1 ?? "").replace(/\s+/g, " ").trim().slice(0, 80);
}
function ez(e1, t) {
    return {
        inputId: e1.id || void 0,
        inputName: e1.name || void 0,
        inputAutomationId: e1.getAttribute?.("data-automation-id") || void 0,
        rootAutomationId: t?.getAttribute?.("data-automation-id") || void 0
    };
}
function eV(e1, t = {}) {
    console.info(`[MyWorkday][autofill-debug] search:${e1} ${JSON.stringify(t)}`);
}
function eW(e1) {
    return !!e1 && "function" == typeof e1.matches && e1.matches(ek);
}
function eG(e1) {
    return document.activeElement === e1 || void 0 !== e1.offsetParent && null !== e1.offsetParent || "function" == typeof e1.getClientRects && e1.getClientRects().length > 0;
}
function eK() {
    return "undefined" == typeof document || "function" != typeof document.querySelectorAll ? [] : Array.from(document.querySelectorAll(eT)).filter(eG);
}
function eX(e1) {
    return void 0 !== e1.offsetParent && null !== e1.offsetParent || "function" == typeof e1.getClientRects && e1.getClientRects().length > 0;
}
function eJ() {
    let e1 = new Set(eK());
    return "undefined" != typeof document && eW(document.activeElement) && e1.add(document.activeElement), e1;
}
function eQ(e1, t, r1) {
    let n = (e1)=>e1 && "function" == typeof e1.closest ? e1.closest('[data-automation-id="activeListContainer"]') : null, o = (t)=>!r1.has(t) || eU.get(t) === e1;
    if (o(t)) {
        let e1 = n(t);
        if (e1 && eX(e1)) return e1;
    }
    let i = eZ(e1, r1, !1);
    if (!i || !o(i)) return null;
    let a = n(i);
    return a && eX(a) ? a : null;
}
function eZ(e1, t = new Set, r1 = !0) {
    let n = eg(e1), o = (t)=>{
        if (t === e1 || eU.get(t) === e1 || "function" == typeof n.contains && n.contains(t)) return !0;
        let r1 = es(e1?.id), o = es(t?.id);
        if (r1 && o && r1 === o) return !0;
        let i = es(e1?.name), a = es(t?.name);
        return !!i && !!a && i === a;
    }, i = (e1)=>o(e1) || !t.has(e1);
    if ("undefined" != typeof document && eW(document.activeElement) && i(document.activeElement) && (o(document.activeElement) || 0 === t.size)) return document.activeElement;
    let a = eK(), l = a.find(o);
    if (l) return l;
    let s = a.find(i);
    return s || (r1 ? n.querySelector(ek) ?? e1 : null);
}
function e0(e1) {
    let t = eg(e1), r1 = t.querySelector('[data-automation-id="promptIcon"], [data-automation-id="promptSearchButton"]');
    r1 ? (0, d.triggerEvents)(r1, [
        "mousedown",
        "mouseup",
        "click"
    ]) : (0, d.triggerEvents)(t, [
        "mousedown",
        "mouseup",
        "click"
    ]);
}
function e2(e1, t) {
    (0, d.triggerEvents)(e1, [
        "focus"
    ]), e1.focus?.();
    let r1 = Object.getPrototypeOf(e1), n = Object.getOwnPropertyDescriptor(r1, "value")?.set;
    n ? n.call(e1, t) : e1.value = t, (0, d.triggerEvents)(e1, [
        "input",
        "change"
    ]);
    let o = t.slice(-1);
    for (let t of [
        "keydown",
        "keyup"
    ])e1.dispatchEvent(new KeyboardEvent(t, {
        bubbles: !0,
        cancelable: !0,
        key: o,
        code: o ? `Key${o.toUpperCase()}` : "",
        keyCode: o ? o.toUpperCase().charCodeAt(0) : 0
    }));
}
function e1(e1) {
    for (let t of [
        "keydown",
        "keypress",
        "keyup"
    ])e1.dispatchEvent(new KeyboardEvent(t, {
        bubbles: !0,
        cancelable: !0,
        key: "Enter",
        code: "Enter",
        keyCode: 13
    }));
}
function e3() {
    return "undefined" != typeof document && "function" == typeof document.querySelectorAll && document.querySelectorAll('[data-automation-id="activeListContainer"]').length > 0;
}
function e4() {
    if ("undefined" == typeof document || "function" != typeof document.elementFromPoint) return !1;
    let e1 = "function" == typeof document.querySelector ? document.querySelector('[data-automation-id="activeListContainer"]') : null, t = "function" == typeof e1?.getBoundingClientRect ? e1.getBoundingClientRect() : null, r1 = "undefined" != typeof window && window.innerWidth || 0, n = "undefined" != typeof window && window.innerHeight || 0, o = Math.max(16, Math.min(80, Math.max(16, r1 - 16))), i = 120;
    if (t) {
        let e1 = t.top - 120, r1 = t.bottom + 24;
        e1 >= 80 ? i = e1 : n && r1 <= n - 24 && (i = r1);
    }
    n && (i = Math.max(24, Math.min(i, n - 24)));
    let a = document.elementFromPoint(o, i) ?? (0, b.getFirstOrderedNode)('//*[@id="mainContent"] | //main') ?? document.body ?? document.documentElement;
    if (!a) return !1;
    for (let e1 of (a.focus?.(), [
        "pointerover",
        "mouseover",
        "pointermove",
        "mousemove",
        "pointerdown",
        "mousedown",
        "pointerup",
        "mouseup",
        "click"
    ]))e9(a, e1, o, i);
    return !0;
}
async function e5(e1) {
    if ("function" != typeof KeyboardEvent) return;
    let t = eZ(e1) ?? e1;
    for (let e1 of [
        "keydown",
        "keyup"
    ])t.dispatchEvent(new KeyboardEvent(e1, {
        bubbles: !0,
        cancelable: !0,
        key: "Escape",
        code: "Escape",
        keyCode: 27
    }));
    e6(e1), await (0, f.waitForCondition)(()=>!e3(), {
        timeout: 300,
        interval: 50,
        observeTarget: document.body
    });
}
function e6(e1) {
    let t = eZ(e1, new Set, !1), r1 = [
        t,
        e1
    ].filter((e1, t, r1)=>!!e1 && r1.indexOf(e1) === t);
    for (let e1 of r1)e1.blur?.(), e1.dispatchEvent(rp("blur")), e1.dispatchEvent(rp("focusout"));
}
function e8(e2) {
    e1(e2);
}
function e9(e1, t, r1, n) {
    let o = t.startsWith("pointer"), i = t.endsWith("down"), a = {
        bubbles: !0,
        cancelable: !0,
        view: "undefined" != typeof window ? window : null,
        clientX: r1,
        clientY: n,
        screenX: r1,
        screenY: n,
        button: 0,
        buttons: i ? 1 : 0
    };
    if (o && "function" == typeof PointerEvent) {
        e1.dispatchEvent(new PointerEvent(t, {
            ...a,
            pointerId: 1,
            pointerType: "mouse"
        }));
        return;
    }
    e1.dispatchEvent(new MouseEvent(t, a));
}
function e7(e1) {
    return e1 ? {
        tagName: e1.tagName || void 0,
        automationId: e1.getAttribute?.("data-automation-id") || void 0,
        role: e1.getAttribute?.("role") || void 0,
        ariaLabel: e1.getAttribute?.("aria-label") || void 0,
        text: eY(e1.textContent)
    } : null;
}
function te(e1) {
    return ("function" == typeof e1.querySelector ? e1.querySelector(L) : null) ?? e1;
}
function tt({ optionItem: e1, clickTarget: t, rawClickTarget: r1 = null, clickTargetInsideOption: n, usedOptionFallback: o, clientX: i, clientY: a }) {
    return {
        option: e7(e1),
        clickTarget: e7(t),
        rawClickTarget: e7(r1),
        clickTargetInsideOption: n,
        usedOptionFallback: o,
        ...void 0 !== i && void 0 !== a ? {
            clientX: Math.round(i),
            clientY: Math.round(a)
        } : {}
    };
}
function tr(e1, t) {
    return (0, d.triggerEvents)(t, [
        "focus",
        "mousedown",
        "mouseup",
        "click"
    ]), t.click?.(), tt({
        optionItem: e1,
        clickTarget: t,
        clickTargetInsideOption: !0,
        usedOptionFallback: t !== e1
    });
}
function tn(e1) {
    if (!e1 || "function" != typeof e1.dispatchEvent) return !1;
    let t = Number(e1.scrollTop) || 0, r1 = Number(e1.clientHeight) || 0, n = Number(e1.scrollHeight) || 0, o = Math.max(96, Math.floor(.75 * r1) || 160), i = n > r1 ? n - r1 : t + o, a = Math.min(t + o, i);
    return !(a <= t) && (e1.scrollTop = a, e1.dispatchEvent(rp("scroll")), !0);
}
function to() {
    if ("undefined" == typeof document || "function" != typeof document.querySelectorAll) return null;
    let e1 = Array.from(document.querySelectorAll(R));
    return e1.find(eX) ?? null;
}
function ti(e1) {
    e1.scrollIntoView?.({
        block: "center",
        inline: "nearest"
    });
    let t = te(e1);
    if ("function" != typeof e1.getBoundingClientRect || "undefined" == typeof document || "function" != typeof document.elementFromPoint) return tr(e1, t);
    let r1 = e1.getBoundingClientRect();
    if (!r1.width || !r1.height) return tr(e1, t);
    let n = r1.left + Math.min(16, r1.width / 2), o = r1.top + r1.height / 2, i = document.elementFromPoint(n, o), a = !i || i === e1 || !!e1.contains?.(i), l = a ? i ?? e1 : t;
    for (let e1 of [
        "pointerover",
        "mouseover",
        "pointermove",
        "mousemove",
        "pointerdown",
        "mousedown",
        "pointerup",
        "mouseup",
        "click"
    ])e9(l, e1, n, o);
    return e1.click?.(), tt({
        optionItem: e1,
        clickTarget: l,
        rawClickTarget: i,
        clickTargetInsideOption: a,
        usedOptionFallback: !a,
        clientX: n,
        clientY: o
    });
}
async function ta(e4, t, r1 = !1) {
    if (!e4) {
        console.error("Input element not found");
        return;
    }
    let n = null, o = ()=>eg(e4), i = o(), a = ev(e4, i), s = eS(e4, i), u = ew(e4, i), c = s || u, p = a || s, m = a && (r1 || eb(i)), h = a || c, g = !(a || c), y = a || c, w = !m && (p || u), E = !m, x = m || c, C = new Map, A = new Map, k = null, T = ()=>(0, b.getOrderedNodes)('.//*[@data-automation-id="selectedItemList" and @role="listbox"]//*[@data-automation-id="menuItem"]', o()), F = (e1)=>(0, f.waitForCondition)(()=>ex(o(), e1), {
            timeout: eO,
            interval: 50
        }), I = (e1, t)=>(0, f.waitForCondition)(()=>T().length > e1, {
            timeout: t,
            interval: 50,
            observeTarget: o() ?? void 0
        }), j = async (e1)=>{
        if (!x || ex(o(), e1)) return !1;
        let t = es(e1), r1 = A.get(t) ?? 0;
        return !(r1 >= eR) && (A.set(t, r1 + 1), n = null, !0);
    };
    for(let i = 0; i < t.length; i += 1){
        let l = t[i], u = o(), x = ez(e4, u), A = eY(l);
        if (E && null !== k) {
            let e1 = await (0, f.waitForCondition)(()=>T().length > k, {
                timeout: eO,
                interval: 50,
                observeTarget: o() ?? void 0
            });
            if (k = null, e1) break;
        }
        if (ex(u, l)) {
            if (!m) break;
            continue;
        }
        if (!m && T().length > 0 && (await ey(e4), n = null, await (0, v.delay)(50)), (n || T().length > 0) && !m) break;
        await (0, v.delay)(50);
        let D = eJ();
        e0(e4), await (0, v.delay)(100);
        let P = await (0, S.default)(()=>eZ(e4, D, !1), ()=>!1, D.size > 0 ? 8 : 1) ?? eZ(e4, D, !0) ?? e4;
        eU.set(P, e4);
        let _ = "function" == typeof P.closest, L = T().length, R = eQ(e4, P, D) ?? (_ ? await (0, S.default)(()=>eQ(e4, P, D), ()=>!1, eM) : null), O = './/*[@data-automation-id="menuItem" and @role="option"]', M = ()=>(R = R ?? eQ(e4, P, D)) ? (0, b.getOrderedNodes)(O, R) : (0, b.getOrderedNodes)('//*[@data-automation-id="activeListContainer" and @role="listbox"]//*[@data-automation-id="menuItem" and @role="option"]'), N = em(M()), $ = async ()=>{
            if (!w || !eA(o(), l)) return !1;
            let t = es(l), r1 = C.get(t) ?? 0;
            return !(r1 >= 2) && (C.set(t, r1 + 1), await ey(e4), n = null, i -= 1, !0);
        }, B = Date.now();
        if (e2(P, l + ""), e8(P), R = R ?? (_ ? await (0, S.default)(()=>eQ(e4, P, D), ()=>!1, eM) : null), await $()) continue;
        let q = 0, U = 0, H = 0, Y = 0, z = "", V = 0, W = !1, G = c ? eD : a ? eP : ej, K = a ? eI : eF, X = !1, J = (e1, t = {})=>eh(l + "", e1, {
                strict: t.strict ?? p,
                allowFuzzy: !h,
                allowFirstCandidateFallback: !1,
                allowExpandedMatch: !s
            });
        if (eV("start", {
            field: x,
            value: A,
            valueIndex: i,
            valuesCount: t.length,
            multi: r1,
            shouldFillMultiple: m,
            noMatchStableRetry: G,
            maxSearchOptionRetry: K
        }), n = await (0, S.default)(()=>{
            if (ex(o(), l)) return X = !0, eV("selected-during-search", {
                field: x,
                value: A,
                elapsedMs: Date.now() - B,
                retryCount: U,
                resubmitCount: H
            }), null;
            if (E && T().length > L) return X = !0, eV("committed-during-search", {
                field: x,
                value: A,
                elapsedMs: Date.now() - B,
                retryCount: U,
                resubmitCount: H,
                filledCountBeforeSelect: L,
                filledCountAfterSelect: T().length
            }), null;
            let e1 = M(), t = em(e1), r1 = !!N && t === N;
            if (r1) {
                let t = J(e1, {
                    strict: !0
                });
                return t && eV("match", {
                    field: x,
                    value: A,
                    elapsedMs: Date.now() - B,
                    retryCount: U,
                    resubmitCount: H,
                    optionText: eY(t.textContent),
                    optionsAreStale: !0,
                    optionsCount: e1.length
                }), t;
            }
            let n = J(e1);
            return n && eV("match", {
                field: x,
                value: A,
                elapsedMs: Date.now() - B,
                retryCount: U,
                resubmitCount: H,
                optionText: eY(n.textContent),
                optionsAreStale: !1,
                optionsCount: e1.length
            }), n;
        }, ()=>{
            if (ex(o(), l)) return X = !0, eV("selected-during-search", {
                field: x,
                value: A,
                elapsedMs: Date.now() - B,
                retryCount: U,
                resubmitCount: H
            }), !0;
            if (E && T().length > L) return X = !0, eV("committed-during-search", {
                field: x,
                value: A,
                elapsedMs: Date.now() - B,
                retryCount: U,
                resubmitCount: H,
                filledCountBeforeSelect: L,
                filledCountAfterSelect: T().length
            }), !0;
            U += 1;
            let t = M(), r1 = em(t), n = !!N && r1 === N, i = n ? J(t, {
                strict: !0
            }) : J(t);
            if (i) return q = 0, z = "", V = 0, !1;
            let s = eH(t, R), u = t.some((e1)=>!ef(e1));
            if (s) {
                W || (W = !0, eV("no-match-observed", {
                    field: x,
                    value: A,
                    elapsedMs: Date.now() - B,
                    retryCount: U,
                    resubmitCount: H,
                    noMatchStableRetry: G,
                    optionsCount: t.length,
                    hasSearchableOptions: u
                })), z = "", V = 0, q += 1;
                let e1 = q >= G;
                return e1 && eV("no-match-skip", {
                    field: x,
                    value: A,
                    elapsedMs: Date.now() - B,
                    retryCount: U,
                    resubmitCount: H,
                    noMatchRetryCount: q,
                    noMatchStableRetry: G,
                    optionsCount: t.length,
                    hasSearchableOptions: u
                }), e1;
            }
            if (y && u && !s && U % 4 == 0 && tn(R ?? to())) return Y += 1, eV("virtualized-scroll", {
                field: x,
                value: A,
                elapsedMs: Date.now() - B,
                retryCount: U,
                resubmitCount: H,
                scrollCount: Y,
                optionsCount: t.length,
                optionSignature: eY(r1)
            }), !1;
            let d = m || a || c, f = d && t.length > 0 && U % eL == 0 && (m || H < 1);
            if (f) {
                let r1 = eZ(e4);
                e2(r1, l + ""), e8(r1), H += 1, eV("resubmit", {
                    field: x,
                    value: A,
                    elapsedMs: Date.now() - B,
                    retryCount: U,
                    resubmitCount: H,
                    optionsCount: t.length,
                    optionsAreStale: n
                });
            }
            if (g && u && !s && (H > 0 || U >= eL)) {
                r1 === z ? V += 1 : (z = r1, V = 1);
                let e1 = V >= e_;
                return e1 && eV("non-matching-options-skip", {
                    field: x,
                    value: A,
                    elapsedMs: Date.now() - B,
                    retryCount: U,
                    resubmitCount: H,
                    stableCount: V,
                    optionsCount: t.length,
                    optionSignature: eY(r1)
                }), e1;
            }
            return z = "", V = 0, q = 0, !1;
        }, K), !await $()) {
            if (X) {
                if (eV("end-selected-during-search", {
                    field: x,
                    value: A,
                    elapsedMs: Date.now() - B,
                    retryCount: U,
                    resubmitCount: H
                }), !m) break;
                continue;
            }
            if (n) {
                let e2 = ti(n), t = T().length, r1 = await I(L, 250);
                if (r1 && (t = T().length), !r1) {
                    e1(P);
                    let e2 = await I(L, eO);
                    t = T().length, E && !e2 && t <= L && (k = L);
                }
                if (eV("end-option-clicked", {
                    field: x,
                    value: A,
                    elapsedMs: Date.now() - B,
                    retryCount: U,
                    resubmitCount: H,
                    didCommitAfterClick: r1,
                    filledCountBeforeSelect: L,
                    filledCountAfterSelect: t,
                    click: e2
                }), (0, d.triggerEvents)(P, [
                    "keypress"
                ]), t <= L && !await F(l) && await j(l)) {
                    i -= 1;
                    continue;
                }
                if (!m) break;
                await (0, v.delay)(200), (0, d.triggerEvents)(P, [
                    "keypress"
                ]);
            } else eV("end-no-option", {
                field: x,
                value: A,
                elapsedMs: Date.now() - B,
                retryCount: U,
                resubmitCount: H,
                noMatchRetryCount: q,
                maxSearchOptionRetry: K
            });
        }
    }
    (0, l.triggerTabEvent)(e4), await (0, v.delay)(200), await e5(e4), tl({
        allowPageClickFallback: e3()
    }), await (0, f.waitForCondition)(()=>!e3(), {
        timeout: 800,
        interval: 50,
        observeTarget: document.body
    }), e6(e4);
}
function tl({ allowPageClickFallback: e1 = !1 } = {}) {
    let t = (0, b.getFirstOrderedNode)('//*[@id="mainContent"] | //main');
    if (e1 && e4(), t) {
        t.focus?.(), e1 && t.click?.();
        for(let e1 = 0; e1 < 3; e1++)(0, d.triggerEvents)(t, [
            "click"
        ]), (0, d.triggerEvents)(t, [
            "mousedown"
        ]), (0, d.triggerEvents)(t, [
            "mouseup"
        ]);
    }
}
async function ts(e1, t) {
    let r1 = th(e1), n = await q(e1, t);
    if (n && await ty(e1, t, r1)) return !0;
    let o = e1.getAttribute("aria-controls"), i = o ? `//ul[@role="listbox"][@id="${o}"][@tabindex="-1"]/li[@id!="select-one"]` : '//ul[@role="listbox"][@tabindex="-1"]/li[@id!="select-one"]', a = null;
    for(let n = 0; n < eq; n += 1){
        0 === (0, b.getOrderedNodes)(i).length && tp(e1), await (0, f.waitForCondition)(()=>(0, b.getOrderedNodes)(i).length > 0, {
            timeout: eN,
            interval: 50,
            observeTarget: document.body
        });
        let n = (0, b.getOrderedNodes)(i);
        for (let e1 of t)if (a = (0, s.findMatchOption)(n, e1)) break;
        if (!a) break;
        let o = a;
        if ((0, d.triggerEvents)(o, [
            "mousedown",
            "mouseup",
            "click"
        ]), await (0, f.waitForCondition)(()=>tb(e1, t, r1, o), {
            timeout: e$,
            interval: 50,
            observeTarget: e1
        }), await ty(e1, t, r1, o) || (o.click?.(), await (0, f.waitForCondition)(()=>tb(e1, t, r1, o), {
            timeout: e$,
            interval: 50,
            observeTarget: e1
        }), await ty(e1, t, r1, o))) return !0;
    }
    return e1.attributes.getNamedItem("aria-expanded")?.value === "true" && (tp(e1), await (0, f.waitForCondition)(()=>0 === (0, b.getOrderedNodesSafe)(i).length, {
        timeout: eN,
        interval: 50,
        observeTarget: document.body
    })), !!(a && await ty(e1, t, r1, a));
}
function tu(e1) {
    return !!e1 && !1 !== e1.isConnected && ("function" != typeof document.contains || document.contains(e1) || !1 !== e1.isConnected);
}
function tc(e1) {
    return (e1 || "").replace("*", "").replace(/\s+/g, " ").trim().toLowerCase();
}
function td(e1, t) {
    let r1 = tc(e1.label);
    return t.find((t)=>t.type === e1.type && tc(t.label) === r1);
}
async function tf(e1, t, r1 = x.getRules) {
    let n = !!tu(e1.$input) && await ts(e1.$input, t);
    if (n) return !0;
    let o = td(e1, await r1());
    return !!o && o.$input !== e1.$input && (Object.assign(e1, o), await ts(e1.$input, t));
}
function tp(e1) {
    e1.dispatchEvent(new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0,
        view: window
    }));
}
function tm(e1) {
    return e1.replace(/[^a-zA-Z0-9\s]/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
}
function th(e1) {
    return tm(e1.textContent || "");
}
function tg(e1) {
    return !e1 || "select one" === e1;
}
function tb(e1, t, r1, n) {
    if (!1 === e1.isConnected && "function" == typeof document.contains && !document.contains(e1)) return !1;
    let o = th(e1);
    if (tg(o)) return !1;
    let i = [
        ...t.map((e1)=>tm(e1)),
        tm(n?.textContent || "")
    ].filter(Boolean);
    return !!i.some((e1)=>o === e1 || o.includes(e1) || e1.includes(o)) || !!n && o !== r1;
}
async function ty(e1, t, r1, n) {
    return !!tb(e1, t, r1, n) && (await (0, v.delay)(eB), tb(e1, t, r1, n));
}
function tv() {
    return (0, b.getFirstOrderedNode)('//div[@aria-labelledby="Resume/CV-section"]//input[@type="file"]') || document.querySelector('input[type="file"][data-automation-id="file-upload-input-ref"]');
}
function tw() {
    return !!tv();
}
async function tS(e1, t, r1) {
    let n = tv();
    if (!n) return "not-applicable";
    let o = (0, b.getFirstOrderedNode)('//div[@data-automation-id="file-upload-item"]//button[@data-automation-id="delete-file"]'), i = 0, a = 15;
    for(; o && i < a;)await (0, v.delay)(150), o.dispatchEvent(new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0,
        view: window
    })), i++, await (0, v.delay)(50), o = (0, b.getFirstOrderedNode)('//div[@data-automation-id="file-upload-item"]//button[@data-automation-id="delete-file"]');
    return await (0, d.uploadFiles)(n, await (0, u.fetchPdfAsBlob)(e1), t, r1, "Resume/CV"), "uploaded";
}
async function tE(e1) {
    let t = 39, r1 = (e1 ?? []).slice(0, t);
    if (0 === r1.length) return !1;
    await (0, v.delay)(150), tl();
    let n = (0, b.getFirstOrderedNode)('//*[@data-automation-id="skillsSection" or @data-automation-id="formField-skills" or contains(@id, "skills")]//input[@placeholder="Search"]');
    if (!n) return !1;
    let o = document.querySelectorAll("#Skills-section ~ div li div[data-automation-id=DELETE_charm]");
    if (o.length > 0) {
        for (let e1 of Array.from(o))await (0, v.delay)(100), (0, d.triggerEvents)(e1, [
            "mousedown",
            "mouseup",
            "click"
        ]);
        await (0, v.delay)(150);
    }
    await ta(n, r1, !0), await (0, v.delay)(100), tl();
    let i = eC(r1, eE(eg(n)));
    return console.info(`[MyWorkday][autofill-debug] skills:summary ${JSON.stringify(i)}`), 0 === i.missingSkills.length;
}
async function tx() {
    let e1 = (0, b.getFirstOrderedNodeSafe)('//div[@data-automation-id="applyFlowMyExpPage"]');
    e1 && (await tC(), 0 === tI() && (await tk(), await (0, f.waitForCondition)(tU, {
        timeout: 1e3,
        observeTarget: document.body
    })), await tA(), 0 === tF() && (await tT(), await (0, f.waitForCondition)(tU, {
        timeout: 1e3,
        observeTarget: document.body
    })));
}
async function tC() {
    let e1 = (0, b.getOrderedNodesSafe)('.//button[text()="Delete"]', (0, b.getFirstOrderedNode)(`//*[@data-automation-id="workExperienceSection"
                or @aria-labelledby="Add-a-Job-section"
                or @aria-labelledby="Work-Experience-section"
                or @aria-labelledby="Work-Experience-*-section"
                or @aria-labelledby="Job-History/Work-Experience-section"
                or @aria-labelledby="Employment-Experience-section"
                or @aria-labelledby="Professional-Experience-section"
                or @aria-labelledby="Relevant-Experience-section"
                or @aria-labelledby="Where-have-you-worked?-section"
                or @aria-labelledby="Employment-History-section"
                or @aria-labelledby="Employment-Detail-section"
              ]`));
    if (e1.length > 0) for (let t of e1)t.click(), await (0, v.delay)(300);
}
async function tA() {
    let e1 = (0, b.getOrderedNodesSafe)('.//button[text()="Delete"]', (0, b.getFirstOrderedNode)(`//*[${M}]`));
    if (e1.length > 0) for (let t of e1)t.click(), await (0, v.delay)(300);
}
async function tk() {
    let e1 = tI(), t = (0, b.getFirstOrderedNodeSafe)(`.//button[
      @data-automation-id="add-button"
      or @data-automation-id="Add"
      or @data-automation-id="Add Another"
      or @aria-label="Add Another Work Experience" or @aria-label="Add Work Experience"
      or text()="Add Another"
      or text()="Add"
    ]`, (0, b.getFirstOrderedNode)(`//*[@data-automation-id="workExperienceSection"
      or @aria-labelledby="Add-a-Job-section"
      or @aria-labelledby="Work-Experience-section"
      or @aria-labelledby="Work-Experience-*-section"
      or @aria-labelledby="Job-History/Work-Experience-section"
      or @aria-labelledby="Employment-Experience-section"
      or @aria-labelledby="Professional-Experience-section"
      or @aria-labelledby="Relevant-Experience-section"
      or @aria-labelledby="Where-have-you-worked?-section"
      or @aria-labelledby="Work-or-Other-Experience-section"
      or @aria-labelledby="Employment-History-section"
      or @aria-labelledby="Work-History-section"
      or @aria-labelledby="Work-History-(Optional)-section"
      or @aria-labelledby="Employment-Detail-section"
    ]`));
    t && (t.click(), await (0, f.waitForCondition)(()=>tI() > e1 && tU(), {
        timeout: 1500,
        interval: 50,
        observeTarget: document.body
    }));
}
async function tT() {
    let e1 = tF(), t = (0, b.getFirstOrderedNodeSafe)(`.//button[(ancestor::*[${M}] and (@data-automation-id="add-button" or @data-automation-id="Add" or @data-automation-id="Add Another"))
          or @aria-label="Add Another Education" or @aria-label="Add Education"
          or @aria-label="Add Schooling" or @aria-label="Add Another Schooling"
          or @aria-label="Add Schools Attended" or @aria-label="Add Another Schools Attended"
          or (starts-with(@aria-label, "Add") and contains(@aria-label, "Education"))
          or text()="Add Another"
          or text()="Add"
        ]`, (0, b.getFirstOrderedNode)(`//*[${M}]`));
    t && (t.click(), await (0, f.waitForCondition)(()=>tF() > e1 && tU(), {
        timeout: 1500,
        interval: 50,
        observeTarget: document.body
    }));
}
function tF() {
    let e1 = (0, b.getOrderedNodes)(`//*[${x.educationGroupXpath}]`);
    return e1.length;
}
function tI() {
    let e1 = (0, b.getOrderedNodes)(`//*[${x.employmentGroupXpath}]`);
    return e1.length;
}
async function tj(e1) {
    await tD(e1.education.length), await tP(e1.workExperience.length);
}
async function tD(e1) {
    for(let t = tF(); t < e1; t += 1){
        await tT();
        let e1 = tF();
        if (e1 <= t) break;
        t = e1 - 1;
    }
}
async function tP(e1) {
    for(let t = tI(); t < e1; t += 1){
        await tk();
        let e1 = tI();
        if (e1 <= t) break;
        t = e1 - 1;
    }
}
async function t_() {
    tl(), tL(), tR();
}
function tL() {
    let e1 = (0, b.getOrderedNodes)('//li[@role="option"][@aria-selected="true"]');
    for (let t of e1)t.dispatchEvent(new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0,
        view: window
    }));
}
function tR() {
    let e1 = (0, b.getOrderedNodesSafe)('//ul[@role="listbox" and @aria-activedescendant="select-one"]');
    for (let t of e1){
        let e1 = t.getAttribute("id"), r1 = (0, b.getFirstOrderedNodeSafe)(`//button[@aria-haspopup="listbox" and @aria-controls="${e1}"]`);
        r1 && r1.click();
    }
}
async function tO(e1, t) {
    let r1 = (0, E.getWorkdayDatePartsForField)(e1, t);
    console.info("[MyWorkday][autofill-debug] date-fill:start", {
        value: t,
        dateParts: r1,
        target: tM(e1)
    });
    let n = await U(e1, r1.month, r1.day, r1.year);
    if (console.info("[MyWorkday][autofill-debug] date-fill:fiber-result", {
        value: t,
        dateParts: r1,
        fiberResult: n,
        target: tM(e1)
    }), n.success) {
        await tN(e1, r1);
        let o = await U(e1, r1.month, r1.day, r1.year);
        console.info("[MyWorkday][autofill-debug] date-fill:post-commit-sync", {
            value: t,
            dateParts: r1,
            fiberResult: o,
            target: tM(e1)
        }), await (0, v.delay)(350);
        let i = (0, E.hasWorkdayDateRequiredError)(e1);
        return console.info("[MyWorkday][autofill-debug] date-fill:committed", {
            value: t,
            dateParts: r1,
            hasRequiredError: i,
            target: tM(e1)
        }), !i || (console.warn("[MyWorkday][autofill-debug] date-fill:required-error", {
            value: t,
            dateParts: r1,
            fiberResult: n,
            postCommitFiberResult: o,
            target: tM(e1)
        }), !1);
    }
    let o = e1.querySelector('[data-automation-id="dateSectionMonth-input"]'), i = e1.querySelector('[data-automation-id="dateSectionYear-input"]'), a = e1.querySelector('[data-automation-id="dateSectionDay-input"]');
    return a && await tB(a, r1.day || "01"), o && await tB(o, r1.month || "01"), i && await tB(i, r1.year), await t$(e1), console.info("[MyWorkday][autofill-debug] date-fill:fallback", {
        value: t,
        dateParts: r1,
        target: tM(e1)
    }), !1;
}
function tM(e1) {
    let t = e1.querySelector('[data-automation-id="dateSectionMonth-input"]'), r1 = e1.querySelector('[data-automation-id="dateSectionDay-input"]'), n = e1.querySelector('[data-automation-id="dateSectionYear-input"]');
    return {
        automationId: e1.getAttribute("data-automation-id"),
        text: e1.textContent?.replace(/\s+/g, " ").trim().slice(0, 240),
        month: t?.value ?? null,
        day: r1?.value ?? null,
        year: n?.value ?? null,
        hasRequiredError: /required and must have a value/i.test(e1.textContent || "")
    };
}
async function tN(e1, t) {
    let r1 = e1.querySelector('[data-automation-id="dateSectionMonth-input"]'), n = e1.querySelector('[data-automation-id="dateSectionDay-input"]'), o = e1.querySelector('[data-automation-id="dateSectionYear-input"]');
    r1 && t.month && await tB(r1, t.month), n && t.day && await tB(n, t.day), o && await tB(o, t.year), await t$(e1);
}
async function t$(e1) {
    let t = Array.from(e1.querySelectorAll('[data-automation-id="dateSectionMonth-input"], [data-automation-id="dateSectionDay-input"], [data-automation-id="dateSectionYear-input"]'));
    for (let e1 of t)e1.dispatchEvent(new FocusEvent("blur", {
        bubbles: !0,
        cancelable: !1,
        relatedTarget: null,
        view: window
    }));
    e1.dispatchEvent(new FocusEvent("focusout", {
        bubbles: !0,
        cancelable: !1,
        relatedTarget: null,
        view: window
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0
    })), await (0, v.delay)(50);
}
async function tB(e1, t) {
    e1.focus(), await (0, v.delay)(20), e1.value = t, e1.dispatchEvent(new Event("input", {
        bubbles: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0
    }));
}
function tq(e1) {
    let t = (0, b.getFirstOrderedNodeSafe)(e1);
    if (!t) return !1;
    let r1 = t.querySelectorAll("*");
    for (let e1 of r1){
        let t = e1.textContent?.trim();
        if (t && /loading/i.test(t)) return !1;
    }
    return !0;
}
function tU() {
    return tq('//div[@data-automation-id="applyFlowMyExpPage"]');
}
function tH() {
    return document.querySelector('[data-automation-id="progressBar"] [data-automation-id="progressBarActiveStep"] label:last-of-type')?.textContent?.trim() || "";
}
function tY() {
    let e1 = document.querySelectorAll('div[data-automation-id^="formField-"]').length > 0, t = !!document.querySelector('[data-automation-id="applyFlowMyExpPage"]');
    return (!!e1 || !!t) && (!/self identify/i.test(tH()) || !!document.querySelector('[data-automation-id="formField-disabilityStatus"] input[type="checkbox"], [data-automation-id="formField-disabilityStatus"] input[type="radio"]'));
}
async function tz() {
    await (0, f.waitForCondition)(()=>tq('//div[@data-automation-id="applyFlowPage"]'), {
        timeout: 8e3,
        interval: 100,
        observeTarget: document.body
    }), await (0, f.waitForCondition)(()=>tY(), {
        timeout: 15e3,
        interval: 200,
        observeTarget: document.body
    });
    let e1 = -1;
    for(let t = 0; t < 10; t++){
        let t = document.querySelectorAll('[data-automation-id^="formField-"]'), r1 = t.length;
        if (r1 > 0 && r1 === e1) break;
        e1 = r1, await (0, v.delay)(300);
    }
}
let tV = 'button[data-automation-id="pageFooterNextButton"], button[data-automation-id="bottom-navigation-next-button"]', tW = null, tG = !1, tK = null, tX = null;
function tJ(e1) {
    if (null == e1 || "object" != typeof e1) return e1;
    if ("function" == typeof structuredClone) try {
        return structuredClone(e1);
    } catch  {}
    return JSON.parse(JSON.stringify(e1));
}
function tQ(e1) {
    let t = tJ(e1.submitSnapshot || {}), r1 = e1.additionalSubmitData || {};
    return void 0 !== r1.education && (t.education = tJ(r1.education)), void 0 !== r1.employment && (t.employment = tJ(r1.employment)), t;
}
function tZ(e1, t) {
    e1 && (e1.snapshot = tQ(t), e1.educationTraceRunId = (0, m.getEducationTraceRunIdFromRecords)(t.additionalSubmitData?.education) ?? e1.educationTraceRunId);
}
function t0() {
    return {
        step: (0, g.getMyWorkdayStepState)()
    };
}
function t2(e1) {
    return (e1 || "").trim().replace(/\s+/g, " ").toLowerCase();
}
function t1(e1, t) {
    return !!e1 && !!t && e1.index === t.index && e1.total === t.total && t2(e1.title) === t2(t.title);
}
function t3(e1, t) {
    return !!e1 && !!t && t.index > e1.index;
}
function t4(e1) {
    return 0 === Object.keys(e1).length;
}
function t5(e1) {
    if (Array.isArray(e1)) return e1.some(t5);
    if (e1 && "object" == typeof e1) return Object.entries(e1).some(([e1, t])=>e1 !== h.MYWORKDAY_EDUCATION_SNAPSHOT_INDEX_KEY && e1 !== m.EDUCATION_TRACE_KEY && t5(t));
    if (null == e1) return !1;
    let t = String(e1).trim().toLowerCase();
    return ![
        "",
        "select one",
        "[]",
        "/",
        "//"
    ].includes(t);
}
function t6(e1) {
    return !Object.values(e1).some(t5);
}
function t8({ autofillSnapshot: e1, additionalSubmitData: t, bindContext: r1, submitContext: n, submitSnapshot: o }) {
    if (t4(o) && t6(t ?? {})) return "empty_submit_snapshot";
    let i = !!r1?.step, a = !!n.step, l = !!i && !!a && t1(r1?.step, n.step);
    if (i && a && !l) return "workday_step_changed";
    let s = Object.keys(e1).filter((e1)=>Object.prototype.hasOwnProperty.call(o, e1)).length;
    return l || 0 !== s ? null : "no_common_submit_keys";
}
function t9({ bindContext: e1, extraData: t, submitContext: r1 }) {
    return e1 ? {
        ...t,
        pageContext: {
            ...t.pageContext ?? {},
            myworkday: {
                bindStep: e1.step,
                submitStep: r1.step,
                stale: !1
            }
        }
    } : t;
}
function t7(e1 = null) {
    return e1 && (e1.button.removeEventListener("click", e1.handler, !0), e1.button.removeEventListener("click", e1.handler), tW === e1 && (tW = null)), null;
}
function re() {
    return tW = t7(tW), null;
}
function rt() {
    "undefined" != typeof window && "function" == typeof window.addEventListener && (tG && tK === window || (window.addEventListener(g.MYWORKDAY_STEP_CHANGE_EVENT, re), tG = !0, tK = window));
}
function rr(e1) {
    let t = e1.toLowerCase();
    return t.includes("phone") || t.includes("mobile") || /(^|[^a-z])cell(ular)?([^a-z]|$)/.test(t) || t.includes("telephone") || /(^|[^a-z])tel([^a-z]|$)/.test(t);
}
function rn(e1) {
    let t = e1.toLowerCase().replace(/\*/g, "").replace(/[:\uff1a]\s*$/, "").replace(/[^a-z0-9]+/g, " ").trim(), r1 = t.replace(/\s+/g, "");
    return "phonecountrycode" === r1 || "countryphonecode" === r1 || "countryregionphonecode" === r1 || "countrycode" === r1;
}
function ro(e1) {
    let t = e1.toLowerCase().replace(/\*/g, "").replace(/[:\uff1a]\s*$/, "").replace(/\s+/g, " ").trim();
    return "skills" === t || "add skills" === t || "type to add skills" === t;
}
function ri(e1) {
    return e1.every((e1)=>"string" == typeof e1) ? [
        ...e1
    ].sort((e1, t)=>{
        let r1 = e1.trim().toLowerCase(), n = t.trim().toLowerCase(), o = r1.localeCompare(n);
        return o || e1.localeCompare(t);
    }) : e1;
}
function ra(e1) {
    let t = e1.replace(/\D/g, "");
    return t || e1;
}
function rl(e1) {
    let t = e1.match(/\+(\d{1,4})\b/);
    if (t?.[1]) return `+${t[1]}`;
    let r1 = e1.replace(/\D/g, "");
    return r1 && r1.length <= 4 ? `+${r1}` : e1;
}
function rs(e1) {
    let t = e1.trim(), r1 = t.replace(/\D/g, "");
    if (r1.length < 7 || r1.length > 15) return !1;
    let n = t.replace(/\s*(?:ext\.?|x)\s*\d+\s*$/i, "");
    return !/[^0-9\s()+.-]/.test(n) && /[().-]/.test(n);
}
function ru(e1, t = "") {
    if (Array.isArray(e1)) {
        let r1 = e1.map((e1)=>ru(e1, t));
        return ro(t) ? ri(r1) : r1;
    }
    return e1 && "object" == typeof e1 ? Object.fromEntries(Object.entries(e1).map(([e1, t])=>[
            e1,
            ru(t, e1)
        ])) : "string" == typeof e1 && rn(t) ? rl(e1) : "string" == typeof e1 && (rr(t) || rs(e1)) ? ra(e1) : e1;
}
function rc(e1) {
    return (0, x.isWorkdaySelfIdentifyLabel)(e1);
}
function rd(e1) {
    if (Array.isArray(e1)) return 0 === e1.length;
    if ("string" != typeof e1) return !1;
    let t = e1.trim();
    if ("[]" === t) return !0;
    try {
        let e1 = JSON.parse(t);
        return Array.isArray(e1) && 0 === e1.length;
    } catch  {
        return !1;
    }
}
function rf(e1, t) {
    let r1 = Object.entries(t).find(([e1, t])=>rc(e1) && rd(t));
    if (!r1) return e1;
    let n = e1, o = r1[1];
    for (let t of Object.keys(e1))rc(t) && (n === e1 && (n = {
        ...e1
    }), n[t] = o);
    return n;
}
function rp(e1) {
    let t = {
        bubbles: !0,
        cancelable: !1,
        ..."undefined" != typeof window ? {
            view: window
        } : {}
    };
    return "function" == typeof FocusEvent && [
        "focus",
        "focusin",
        "blur",
        "focusout"
    ].includes(e1) ? new FocusEvent(e1, t) : new Event(e1, t);
}
function rm(e1) {
    if (e1.disabled) return !1;
    if (e1.tagName?.toUpperCase() === "INPUT") {
        let t = (e1.getAttribute("type") || e1.type || "").toLowerCase();
        if ([
            "hidden",
            "checkbox",
            "radio",
            "file",
            "button",
            "submit",
            "reset"
        ].includes(t)) return !1;
    }
    let t = "function" != typeof e1.getClientRects || e1.getClientRects().length > 0;
    if (!t) return !1;
    let r1 = String(e1.value ?? "").trim().length > 0, n = "true" === e1.getAttribute("aria-invalid");
    return r1 || n;
}
function rh(e1 = document) {
    let t = Array.from(e1.querySelectorAll("input, textarea")), r1 = 0;
    for (let e1 of t)rm(e1) && (e1.focus?.(), e1.dispatchEvent(rp("focus")), e1.dispatchEvent(rp("focusin")), e1.dispatchEvent(new Event("input", {
        bubbles: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0
    })), e1.blur?.(), e1.dispatchEvent(rp("blur")), e1.dispatchEvent(rp("focusout")), r1++);
    return r1;
}
function rg(e1) {
    return (e1.textContent || e1.innerText || e1.getAttribute?.("aria-label") || e1.getAttribute?.("title") || "").replace(/\s+/g, " ").trim().toLowerCase();
}
function rb(e1) {
    let t = rg(e1);
    return t.includes("submit");
}
function ry(e1) {
    let t = e1?.detail?.state;
    return t && "number" == typeof t.index && "number" == typeof t.total && "string" == typeof t.title ? t : (0, g.getMyWorkdayStepState)();
}
function rv() {
    tX?.cleanup(), tX = null;
}
function rw(e1, t) {
    (0, p.sendAutofillAnswerPairEvent)(e1), tZ(t, e1);
}
function rS({ baseline: e1, bindContext: t, payload: r1 }) {
    let n;
    if (!t.step || "undefined" == typeof window || "function" != typeof window.addEventListener) return;
    rv();
    let o = ()=>{
        window.removeEventListener?.(g.MYWORKDAY_STEP_CHANGE_EVENT, i), n && clearTimeout(n), tX?.cleanup === o && (tX = null);
    }, i = (n)=>{
        let i = ry(n);
        t3(t.step, i) && (o(), rw(r1, e1));
    };
    window.addEventListener(g.MYWORKDAY_STEP_CHANGE_EVENT, i), "function" == typeof window.setTimeout && (n = window.setTimeout(()=>{
        o(), console.warn("[MyWorkday] skip autofill_answer_pair:", {
            reason: "workday_step_not_advanced",
            bindStep: t.step,
            submitStep: (0, g.getMyWorkdayStepState)()
        });
    }, 3500)), tX = {
        cleanup: o
    };
}
function rE(e1, t = {}, r1, n) {
    "undefined" != typeof document && "function" == typeof document.querySelectorAll && rh();
    let o = ru(e1), i = (0, m.getEducationTraceRunIdFromRecords)(o.education) ?? n, a = ru((0, x.getFormSnapshot)({
        includeEducationSnapshotIndex: !0,
        includeEducationTrace: !0,
        educationTraceRunId: i ?? void 0
    })), { education: l, employment: s, ...u } = a, { education: c, employment: d, ...f } = o, p = rf(f, u), g = r1 ? t0() : {
        step: null
    }, b = r1 ? t8({
        autofillSnapshot: p,
        additionalSubmitData: {
            education: l,
            employment: s
        },
        bindContext: r1,
        submitContext: g,
        submitSnapshot: u
    }) : null;
    return b ? (console.warn("[MyWorkday] skip autofill_answer_pair:", {
        reason: b,
        bindStep: r1?.step,
        submitStep: g.step,
        autofillKeys: Object.keys(p),
        submitKeys: Object.keys(u)
    }), null) : (0, h.alignMyWorkdayEducationAnswerPairTrackingData)({
        formUrl: (0, y.useUrlStore).getState().currentTabUrl,
        autofillSnapshot: p,
        submitSnapshot: u,
        additionalAutofillData: {
            education: c,
            employment: d
        },
        additionalSubmitData: {
            education: l,
            employment: s
        },
        extraData: t9({
            bindContext: r1,
            extraData: t,
            submitContext: g
        }),
        source: "myworkday"
    });
}
function rx(e1, t = {}, r1) {
    let n = rE(e1, t, r1);
    n && rw(n);
}
function rC({ baseline: e1, bindContext: t, button: r1, extraData: n }) {
    return ()=>{
        let o = rE(e1.snapshot, n, t, e1.educationTraceRunId);
        if (o) {
            if (rb(r1)) {
                rv(), rw(o, e1);
                return;
            }
            rS({
                baseline: e1,
                bindContext: t,
                payload: o
            });
        }
    };
}
function rA(e1, t = null, r1 = {}, n) {
    rt(), t7(t), tW && tW !== t && t7(tW);
    let o = document.querySelector(tV);
    if (!o) return null;
    let i = t0(), a = {
        snapshot: tJ(e1),
        educationTraceRunId: (0, m.getEducationTraceRunIdFromRecords)(e1?.education) ?? n ?? null
    }, l = rC({
        baseline: a,
        bindContext: i,
        button: o,
        extraData: r1
    });
    return o.addEventListener("click", l, !0), tW = {
        button: o,
        handler: l,
        context: i
    };
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
$RefreshReg$(_c, "B");
$RefreshReg$(_c1, "U");
$RefreshReg$(_c2, "H");
$RefreshReg$(_c3, "Y");
$RefreshReg$(_c4, "V");
$RefreshReg$(_c5, "W");
$RefreshReg$(_c6, "G");
$RefreshReg$(_c7, "K");
$RefreshReg$(_c8, "X");
$RefreshReg$(_c9, "J");
$RefreshReg$(_c10, "Q");
$RefreshReg$(_c11, "Z");

},{}]},["6KbSs","7CaK0"], "7CaK0", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QyxFQUFFLEVBQUM7SUFDdEIsSUFBSSxJQUFJLEdBQUcsSUFBRyxHQUFHO0lBQ2pCLEtBQUssR0FBRztBQUNWO0FBRUEsU0FBUyxHQUFHLEVBQ1YsVUFBVSxFQUFDLEVBQ1gsYUFBYSxDQUFDLEVBQ2QsUUFBUSxFQUFDLEVBQ1QsV0FBVyxDQUFDLEVBQ2I7SUFDQyxPQUFPO1FBQ0wsSUFBSSxJQUFJLEdBQUcsR0FBRSxVQUFVLEdBQUcsR0FBRyxHQUFFO1FBQy9CLElBQUksR0FBRztZQUNMLElBQUksR0FBRyxLQUFJO2dCQUNULE1BQU0sR0FBRyxHQUFHO2dCQUNaO1lBQ0Y7WUFDQSxHQUFHO2dCQUNELFVBQVU7Z0JBQ1YsYUFBYTtnQkFDYixTQUFTO1lBQ1g7UUFDRjtJQUNGO0FBQ0Y7QUFFQSxTQUFTLEdBQUcsRUFBQyxFQUFFLElBQUksSUFBSSxFQUFFLEtBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNoQyxNQUFNLEdBQUcsSUFBSSxNQUFNLE9BQU8sS0FBSyxHQUFHO0lBQ2xDLElBQUksSUFBSSxTQUFTLGNBQWM7SUFDL0IsSUFBSSxDQUFDLEdBQUcsT0FBTztJQUNmLElBQUksSUFBSSxNQUNOLElBQUk7UUFDRixVQUFVLEdBQUc7UUFDYixxQkFBcUIsQUFBQyxDQUFBLEdBQUcsRUFBRSxpQ0FBZ0MsRUFBRyxJQUFHLGNBQWMsS0FBSztJQUN0RixHQUNBLElBQUksR0FBRztRQUNMLFVBQVU7UUFDVixhQUFhO1FBQ2IsUUFBUTtRQUNSLFdBQVc7SUFDYjtJQUNGLE9BQU8sRUFBRSxpQkFBaUIsU0FBUyxHQUFHLENBQUMsSUFBSSxLQUFLO1FBQzlDLFFBQVE7UUFDUixTQUFTO1FBQ1QsU0FBUztJQUNYO0FBQ0YiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTE4MjcyYTc2NmQwNWU3NjUuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvbXl3b3JrZGF5L29wZXJhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxcbXl3b3JrZGF5XFxcXG9wZXJhdGlvbnMuanNcIixcImJ1bmRsZUlkXCI6XCJjNGZhMzQ4OTM0ZTI5ZTc3XCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogYXBNaWtcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL215d29ya2RheS9vcGVyYXRpb25zLmpzXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi9hZ3JlZW1lbnRzIC0+IGFDc2l3ICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL215d29ya2RheS9hZ3JlZW1lbnRzLmpzXHJcbiAqICAgLi9kYXRlLXBhcnRzIC0+IGdoMXRkICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL215d29ya2RheS9kYXRlLXBhcnRzLmpzXHJcbiAqICAgLi9ydWxlcyAtPiAxSDJJRCAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9teXdvcmtkYXkvcnVsZXMuanNcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIEBwbGFzbW9ocS9tZXNzYWdpbmcgLT4gOTJHeUIgID0+ICBAcGxhc21vaHEvbWVzc2FnaW5nLmpzXHJcbiAqICAgfmNvbnRlbnRzL2NyYXdsZXIvdXRpbHMgLT4gZE1RV04gID0+ICBzcmMvY29udGVudHMvY3Jhd2xlci91dGlscy5qc1xyXG4gKiAgIH5jb250ZW50cy9jcmF3bGVyL3V0aWxzL3NlbGVjdCAtPiBoMjJKQiAgPT4gIHNyYy9jb250ZW50cy9jcmF3bGVyL3V0aWxzL3NlbGVjdC5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2Fuc3dlciAtPiA3VDVlVyAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2Fuc3dlci5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2NoZWNrYm94LWxhYmVsIC0+IDJLUXdIICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvY2hlY2tib3gtbGFiZWwuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9jaG9pY2UtbWF0Y2ggLT4gNm1rSTQgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9jaG9pY2UtbWF0Y2guanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9kb20gLT4gaEE1UWEgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9kb20uanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9vYnNlcnZlciAtPiBlVHpVeCAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL29ic2VydmVyLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL2F1dG9maWxsLWFuc3dlci1wYWlyLXRyYWNraW5nIC0+IGFDRWxaICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2F1dG9maWxsLWFuc3dlci1wYWlyLXRyYWNraW5nLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL2VkdWNhdGlvbi1pdGVtLXRyYWNlIC0+IGo3VUdJICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2VkdWNhdGlvbi1pdGVtLXRyYWNlLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL215d29ya2RheS9zbmFwc2hvdC1hbGlnbm1lbnQgLT4gMjVOcEYgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvbXl3b3JrZGF5L3NuYXBzaG90LWFsaWdubWVudC5qc1xyXG4gKiAgIH5jb3JlL3BhZ2VuYXRpb24gLT4gbDFrVUsgID0+ICBzcmMvY29yZS9wYWdlbmF0aW9uLmpzXHJcbiAqICAgfmNvcmUveHBhdGggLT4gYWdFNHUgID0+ICBzcmMvY29yZS94cGF0aC5qc1xyXG4gKiAgIH5zdG9yZS91cmwgLT4gYjUzTDMgID0+ICBzcmMvc3RvcmUvdXJsLmpzXHJcbiAqICAgfnV0aWxzL2RlbGF5IC0+IGFtNjE0ICA9PiAgc3JjL3V0aWxzL2RlbGF5LmpzXHJcbiAqICAgfnV0aWxzL2dldFRhcmdldE9yVGltZW91dCAtPiAxVEJoRiAgPT4gIHNyYy91dGlscy9nZXRUYXJnZXRPclRpbWVvdXQuanNcclxuICovXHJcblxyXG52YXIgbiA9IGUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO1xyXG5uLmRlZmluZUludGVyb3BGbGFnKHIpLCBuLmV4cG9ydChyLCBcImZpbGxNeVdvcmtkYXlUZXh0RmllbGRcIiwgKCkgPT4gWSksIG4uZXhwb3J0KHIsXHJcbiAgICBcImZpbGxNeVdvcmtkYXlDaGVja2JveFwiLCAoKSA9PiBaKSwgbi5leHBvcnQociwgXCJmaWxsTXlXb3JrZGF5Q2hlY2tCb3hlc0ZpZWxkXCIsICgpID0+IGVyKSwgblxyXG4gIC5leHBvcnQociwgXCJmaWxsQ291bnRyeVwiLCAoKSA9PiBlbiksIG4uZXhwb3J0KHIsIFwiZmluZEJlc3RXb3JrZGF5U2VhcmNoT3B0aW9uXCIsICgpID0+IGVoKSwgblxyXG4gIC5leHBvcnQociwgXCJjbGVhcldvcmtkYXlTZWFyY2hTZWxlY3Rpb25cIiwgKCkgPT4gZXkpLCBuLmV4cG9ydChyLCBcImdldFdvcmtkYXlTa2lsbHNGaWxsU3VtbWFyeVwiLFxyXG4gICgpID0+IGVDKSwgbi5leHBvcnQociwgXCJXT1JLREFZX1NFQVJDSF9TS0lMTFNfT1BUSU9OX01BWF9SRVRSWVwiLCAoKSA9PiBlSSksIG4uZXhwb3J0KHIsXHJcbiAgICBcImZpbGxTZWFyY2hCb3hJbnB1dEZpZWxkXCIsICgpID0+IHRhKSwgbi5leHBvcnQociwgXCJmaWxsTGlzdGJveEJ1dHRvbkZpZWxkXCIsICgpID0+IHRzKSwgbi5leHBvcnQoXHJcbiAgICByLCBcImZpbGxNeVdvcmtkYXlMaXN0Ym94UnVsZVwiLCAoKSA9PiB0ZiksIG4uZXhwb3J0KHIsIFwiZ2V0V29ya2RheVJlc3VtZVVwbG9hZElucHV0XCIsICgpID0+IHR2KSxcclxuICBuLmV4cG9ydChyLCBcImhhc1dvcmtkYXlSZXN1bWVVcGxvYWRJbnB1dFwiLCAoKSA9PiB0dyksIG4uZXhwb3J0KHIsIFwidXBsb2FkUmVzdW1lXCIsICgpID0+IHRTKSwgblxyXG4gIC5leHBvcnQociwgXCJmaWxsU2tpbGxzXCIsICgpID0+IHRFKSwgbi5leHBvcnQociwgXCJwcmVjbGlja0FkZEJ1dHRvbnNcIiwgKCkgPT4gdHgpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJleHBhbmRGb3JtXCIsICgpID0+IHRqKSwgbi5leHBvcnQociwgXCJibHVyUGFnZVwiLCAoKSA9PiB0XyksIG4uZXhwb3J0KHIsXHJcbiAgICBcImZpbGxNeVdvcmtkYXlEYXRlRmllbGRcIiwgKCkgPT4gdE8pLCBuLmV4cG9ydChyLCBcImlzTG9hZGluZ0NsZWFyZWRcIiwgKCkgPT4gdFUpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJpc015V29ya2RheUZvcm1SZWFkeUZvckF1dG9maWxsXCIsICgpID0+IHRZKSwgbi5leHBvcnQociwgXCJ3YWl0UGFnZUNsZWFuXCIsICgpID0+IHR6KSwgbi5leHBvcnQoXHJcbiAgICByLCBcInVuYmluZE15V29ya2RheVN1Ym1pdFRyYWNraW5nXCIsICgpID0+IHQ3KSwgbi5leHBvcnQociwgXCJjbGVhckFjdGl2ZU15V29ya2RheVN1Ym1pdFRyYWNraW5nXCIsXHJcbiAgICAoKSA9PiByZSksIG4uZXhwb3J0KHIsIFwiY29tbWl0VmlzaWJsZVdvcmtkYXlJbnB1dHNCZWZvcmVTdWJtaXRcIiwgKCkgPT4gcmgpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJzdWJtaXRIYW5kbGVyXCIsICgpID0+IHJ4KSwgbi5leHBvcnQociwgXCJiaW5kTXlXb3JrZGF5U3VibWl0VHJhY2tpbmdcIiwgKCkgPT4gckEpO1xyXG52YXIgbyA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9jaG9pY2UtbWF0Y2hcIiksXHJcbiAgaSA9IGUoXCIuL2FncmVlbWVudHNcIiksXHJcbiAgYSA9IGUoXCJAcGxhc21vaHEvbWVzc2FnaW5nXCIpLFxyXG4gIGwgPSBlKFwifmNvbnRlbnRzL2NyYXdsZXIvdXRpbHNcIiksXHJcbiAgcyA9IGUoXCJ+Y29udGVudHMvY3Jhd2xlci91dGlscy9zZWxlY3RcIiksXHJcbiAgdSA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXJcIiksXHJcbiAgYyA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9jaGVja2JveC1sYWJlbFwiKSxcclxuICBkID0gZShcIn5jb250ZW50cy9tZXRob2RzL2RvbVwiKSxcclxuICBmID0gZShcIn5jb250ZW50cy9tZXRob2RzL29ic2VydmVyXCIpLFxyXG4gIHAgPSBlKFwifmNvbnRlbnRzL3NpdGVzL2F1dG9maWxsLWFuc3dlci1wYWlyLXRyYWNraW5nXCIpLFxyXG4gIG0gPSBlKFwifmNvbnRlbnRzL3NpdGVzL2VkdWNhdGlvbi1pdGVtLXRyYWNlXCIpLFxyXG4gIGggPSBlKFwifmNvbnRlbnRzL3NpdGVzL215d29ya2RheS9zbmFwc2hvdC1hbGlnbm1lbnRcIiksXHJcbiAgZyA9IGUoXCJ+Y29yZS9wYWdlbmF0aW9uXCIpLFxyXG4gIGIgPSBlKFwifmNvcmUveHBhdGhcIiksXHJcbiAgeSA9IGUoXCJ+c3RvcmUvdXJsXCIpLFxyXG4gIHYgPSBlKFwifnV0aWxzL2RlbGF5XCIpLFxyXG4gIHcgPSBlKFwifnV0aWxzL2dldFRhcmdldE9yVGltZW91dFwiKSxcclxuICBTID0gbi5pbnRlcm9wRGVmYXVsdCh3KSxcclxuICBFID0gZShcIi4vZGF0ZS1wYXJ0c1wiKSxcclxuICB4ID0gZShcIi4vcnVsZXNcIik7XHJcbmxldCBDID0gXCJfX2pyX3dvcmtkYXlfdGV4dF9yZXF1ZXN0XCIsXHJcbiAgQSA9IFwiX19qcl93b3JrZGF5X3RleHRfcmVzcG9uc2VcIixcclxuICBrID0gXCJfX2pyX3dvcmtkYXlfc2VsZWN0X3JlcXVlc3RcIixcclxuICBUID0gXCJfX2pyX3dvcmtkYXlfc2VsZWN0X3Jlc3BvbnNlXCIsXHJcbiAgRiA9IFwiX19qcl93b3JrZGF5X2RhdGVfcmVxdWVzdFwiLFxyXG4gIEkgPSBcIl9fanJfd29ya2RheV9kYXRlX3Jlc3BvbnNlXCIsXHJcbiAgaiA9IFwiX19qcl93b3JrZGF5X2NoZWNrYm94X3JlcXVlc3RcIixcclxuICBEID0gXCJfX2pyX3dvcmtkYXlfY2hlY2tib3hfcmVzcG9uc2VcIixcclxuICBQID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiLFxyXG4gIF8gPSBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCIsXHJcbiAgTCA9XHJcbiAgJ1tkYXRhLWF1dG9tYXRpb24taWQ9XCJwcm9tcHRMZWFmTm9kZVwiXSwgW2RhdGEtYXV0b21hdGlvbi1pZD1cInByb21wdE9wdGlvblwiXSwgW2RhdGEtYXV0b21hdGlvbi1pZD1cInJhZGlvQnRuXCJdJyxcclxuICBSID1cclxuICAnW2RhdGEtYXV0b21hdGlvbi1pZD1cImFjdGl2ZUxpc3RDb250YWluZXJcIl1bcm9sZT1cImxpc3Rib3hcIl0sIFtkYXRhLWF1dG9tYXRpb24taWQ9XCJhY3RpdmVMaXN0Q29udGFpbmVyXCJdJyxcclxuICBPID0gYHRyYW5zbGF0ZShAYXJpYS1sYWJlbGxlZGJ5LCBcIiR7UH1cIiwgXCIke199XCIpYCxcclxuICBNID0gYFxyXG4gIEBkYXRhLWF1dG9tYXRpb24taWQ9XCJlZHVjYXRpb25TZWN0aW9uXCJcclxuICBvciAoXHJcbiAgICBjb250YWlucygke099LCBcImVkdWNhdGlvblwiKVxyXG4gICAgYW5kIHN1YnN0cmluZygke099LCBzdHJpbmctbGVuZ3RoKCR7T30pIC0gc3RyaW5nLWxlbmd0aChcIi1zZWN0aW9uXCIpICsgMSkgPSBcIi1zZWN0aW9uXCJcclxuICApXHJcbiAgb3IgJHtPfT1cInNjaG9vbHMtYXR0ZW5kZWQtc2VjdGlvblwiXHJcbiAgb3IgJHtPfT1cImFjYWRlbWljLWV4cGVyaWVuY2Utc2VjdGlvblwiXHJcbmAsXHJcbiAgTiA9ICExO1xyXG5hc3luYyBmdW5jdGlvbiAkKCkge1xyXG4gIGlmIChOKSByZXR1cm4gITA7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBhd2FpdCAoMCwgYS5zZW5kVG9CYWNrZ3JvdW5kKSh7XHJcbiAgICAgIG5hbWU6IFwiaW5qZWN0V29ya2RheUZpYmVyXCJcclxuICAgIH0pLCBOID0gITAsICEwXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIGNvbnNvbGUud2FybihcIltXb3JrZGF5RmliZXJdIGZhaWxlZCB0byBpbmplY3QgbWFpbiB3b3JsZCBzY3JpcHQ6XCIsIGUpLCAhMVxyXG4gIH1cclxufVxyXG5hc3luYyBmdW5jdGlvbiBCKGUsIHQpIHtcclxuICBsZXQgciA9IGF3YWl0ICQoKTtcclxuICBpZiAoIXIpIHJldHVybiAhMTtcclxuICBsZXQgbiA9IGBfX2pyX3dkXyR7RGF0ZS5ub3coKX1fJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLDgpfWA7XHJcbiAgZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWpyLXdkLWZpYmVyLWlkXCIsIG4pO1xyXG4gIGxldCBvID0gYFtkYXRhLWpyLXdkLWZpYmVyLWlkPVwiJHtufVwiXWAsXHJcbiAgICBpID0gYCR7RGF0ZS5ub3coKX1fJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLDgpfWA7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHIgPT4ge1xyXG4gICAgbGV0IG4gPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihBLCBhKSwgZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWpyLXdkLWZpYmVyLWlkXCIpLCByKCExKVxyXG4gICAgfSwgM2UzKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhKHQpIHtcclxuICAgICAgbGV0IG8gPSB0LmRldGFpbDtcclxuICAgICAgbz8ucmVxdWVzdElkID09PSBpICYmIChkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKEEsIGEpLCBjbGVhclRpbWVvdXQobiksIGVcclxuICAgICAgICAucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1qci13ZC1maWJlci1pZFwiKSwgcighIW8uc3VjY2VzcykpXHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKEEsIGEpLCBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChDLCB7XHJcbiAgICAgIGRldGFpbDoge1xyXG4gICAgICAgIHNlbGVjdG9yOiBvLFxyXG4gICAgICAgIHZhbHVlOiB0LFxyXG4gICAgICAgIHJlcXVlc3RJZDogaVxyXG4gICAgICB9XHJcbiAgICB9KSlcclxuICB9KVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHEoZSwgdCkge1xyXG4gIGxldCByID0gYXdhaXQgJCgpO1xyXG4gIGlmICghcikgcmV0dXJuICExO1xyXG4gIGxldCBuID0gYF9fanJfd2RfJHtEYXRlLm5vdygpfV8ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsOCl9YDtcclxuICBlLnNldEF0dHJpYnV0ZShcImRhdGEtanItd2QtZmliZXItaWRcIiwgbik7XHJcbiAgbGV0IG8gPSBgW2RhdGEtanItd2QtZmliZXItaWQ9XCIke259XCJdYCxcclxuICAgIGkgPSBgJHtEYXRlLm5vdygpfV8ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsOCl9YDtcclxuICByZXR1cm4gbmV3IFByb21pc2UociA9PiB7XHJcbiAgICBsZXQgbiA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFQsIGEpLCBlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtanItd2QtZmliZXItaWRcIiksIHIoITEpXHJcbiAgICB9LCAzZTMpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGEodCkge1xyXG4gICAgICBsZXQgbyA9IHQuZGV0YWlsO1xyXG4gICAgICBvPy5yZXF1ZXN0SWQgPT09IGkgJiYgKGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoVCwgYSksIGNsZWFyVGltZW91dChuKSwgZVxyXG4gICAgICAgIC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWpyLXdkLWZpYmVyLWlkXCIpLCByKCEhby5zdWNjZXNzKSlcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoVCwgYSksIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGssIHtcclxuICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgc2VsZWN0b3I6IG8sXHJcbiAgICAgICAgY2FuZGlkYXRlczogdCxcclxuICAgICAgICByZXF1ZXN0SWQ6IGlcclxuICAgICAgfVxyXG4gICAgfSkpXHJcbiAgfSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiBVKGUsIHQsIHIsIG4pIHtcclxuICBsZXQgbyA9IGF3YWl0ICQoKTtcclxuICBpZiAoIW8pIHJldHVybiB7XHJcbiAgICBzdWNjZXNzOiAhMSxcclxuICAgIGVycm9yOiBcIm1haW4gd29ybGQgaW5qZWN0aW9uIGZhaWxlZFwiXHJcbiAgfTtcclxuICBsZXQgaSA9IGBfX2pyX3dkXyR7RGF0ZS5ub3coKX1fJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLDgpfWA7XHJcbiAgZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWpyLXdkLWZpYmVyLWlkXCIsIGkpO1xyXG4gIGxldCBhID0gYFtkYXRhLWpyLXdkLWZpYmVyLWlkPVwiJHtpfVwiXWAsXHJcbiAgICBsID0gYCR7RGF0ZS5ub3coKX1fJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLDgpfWA7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKG8gPT4ge1xyXG4gICAgbGV0IGkgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihJLCBzKSwgZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWpyLXdkLWZpYmVyLWlkXCIpLCBvKHtcclxuICAgICAgICBzdWNjZXNzOiAhMSxcclxuICAgICAgICBlcnJvcjogXCJkYXRlIGZpYmVyIHJlcXVlc3QgdGltZW91dFwiXHJcbiAgICAgIH0pXHJcbiAgICB9LCAzZTMpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHModCkge1xyXG4gICAgICBsZXQgciA9IHQuZGV0YWlsO1xyXG4gICAgICByPy5yZXF1ZXN0SWQgPT09IGwgJiYgKGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoSSwgcyksIGNsZWFyVGltZW91dChpKSwgZVxyXG4gICAgICAgIC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWpyLXdkLWZpYmVyLWlkXCIpLCBvKHtcclxuICAgICAgICAgIHN1Y2Nlc3M6ICEhci5zdWNjZXNzLFxyXG4gICAgICAgICAgaW5wdXRIYW5kbGVkOiAhIXIuaW5wdXRIYW5kbGVkLFxyXG4gICAgICAgICAgcGFyZW50Q29tbWl0SGFuZGxlZDogISFyLnBhcmVudENvbW1pdEhhbmRsZWQsXHJcbiAgICAgICAgICBjb250ZXh0Q29tbWl0SGFuZGxlZDogISFyLmNvbnRleHRDb21taXRIYW5kbGVkLFxyXG4gICAgICAgICAgZGF0ZUZpZWxkTWV0YWRhdGFJZDogXCJzdHJpbmdcIiA9PSB0eXBlb2Ygci5kYXRlRmllbGRNZXRhZGF0YUlkID8gclxyXG4gICAgICAgICAgICAuZGF0ZUZpZWxkTWV0YWRhdGFJZCA6IHZvaWQgMCxcclxuICAgICAgICAgIGVycm9yOiBcInN0cmluZ1wiID09IHR5cGVvZiByLmVycm9yID8gci5lcnJvciA6IHZvaWQgMFxyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihJLCBzKSwgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoRiwge1xyXG4gICAgICBkZXRhaWw6IHtcclxuICAgICAgICBzZWxlY3RvcjogYSxcclxuICAgICAgICBtb250aDogdCxcclxuICAgICAgICBkYXk6IHIsXHJcbiAgICAgICAgeWVhcjogbixcclxuICAgICAgICByZXF1ZXN0SWQ6IGxcclxuICAgICAgfVxyXG4gICAgfSkpXHJcbiAgfSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiBIKGUsIHQgPSAhMCkge1xyXG4gIGxldCByID0gYXdhaXQgJCgpO1xyXG4gIGlmICghcikgcmV0dXJuICExO1xyXG4gIGxldCBuID0gYF9fanJfd2RfJHtEYXRlLm5vdygpfV8ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsOCl9YDtcclxuICBlLnNldEF0dHJpYnV0ZShcImRhdGEtanItd2QtZmliZXItaWRcIiwgbik7XHJcbiAgbGV0IG8gPSBgW2RhdGEtanItd2QtZmliZXItaWQ9XCIke259XCJdYCxcclxuICAgIGkgPSBgJHtEYXRlLm5vdygpfV8ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsOCl9YDtcclxuICByZXR1cm4gbmV3IFByb21pc2UociA9PiB7XHJcbiAgICBsZXQgbiA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKEQsIGEpLCBlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtanItd2QtZmliZXItaWRcIiksIHIoITEpXHJcbiAgICB9LCAzZTMpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGEodCkge1xyXG4gICAgICBsZXQgbyA9IHQuZGV0YWlsO1xyXG4gICAgICBvPy5yZXF1ZXN0SWQgPT09IGkgJiYgKGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoRCwgYSksIGNsZWFyVGltZW91dChuKSwgZVxyXG4gICAgICAgIC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWpyLXdkLWZpYmVyLWlkXCIpLCByKCEhby5zdWNjZXNzKSlcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoRCwgYSksIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGosIHtcclxuICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgc2VsZWN0b3I6IG8sXHJcbiAgICAgICAgY2hlY2tlZDogdCxcclxuICAgICAgICByZXF1ZXN0SWQ6IGlcclxuICAgICAgfVxyXG4gICAgfSkpXHJcbiAgfSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiBZKGUsIHQpIHtcclxuICBhd2FpdCBCKGUsIHQpIHx8IGF3YWl0ICgwLCBkLmZpbGxJbnB1dFRleHRGaWVsZCkoZSwgdClcclxufVxyXG5cclxuZnVuY3Rpb24geihlKSB7XHJcbiAgcmV0dXJuICgwLCB4LmlzV29ya2RheUlucHV0U2VsZWN0ZWQpKGUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFYoZSkge1xyXG4gIGlmICghZS5pZCB8fCBcInVuZGVmaW5lZFwiID09IHR5cGVvZiBkb2N1bWVudCkgcmV0dXJuIG51bGw7XHJcbiAgbGV0IHQgPSBlLmlkLnJlcGxhY2UoL1xcXFwvZywgXCJcXFxcXFxcXFwiKS5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJyk7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke3R9XCJdYClcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBXKGUpIHtcclxuICBsZXQgdCA9IGUucGFyZW50RWxlbWVudCxcclxuICAgIHIgPSB0Py5uZXh0RWxlbWVudFNpYmxpbmcgfHwgdD8ucHJldmlvdXNFbGVtZW50U2libGluZyxcclxuICAgIG4gPSBbXCJmdW5jdGlvblwiID09IHR5cGVvZiBlLmNsb3Nlc3QgPyBlLmNsb3Nlc3QoXCJsYWJlbFwiKSA6IG51bGwsIFYoZSksIHIsIHRdO1xyXG4gIHJldHVybiBuLmZpbmQoZSA9PiAhIWUgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBlLmNsaWNrKSB8fCBlXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gRyhlLCB0ID0gMjUwLCByID0geikge1xyXG4gIGxldCBuID0gRGF0ZS5ub3coKTtcclxuICBmb3IgKDsgRGF0ZS5ub3coKSAtIG4gPCB0Oykge1xyXG4gICAgaWYgKHIoZSkpIHJldHVybiAhMDtcclxuICAgIGF3YWl0ICgwLCB2LmRlbGF5KSgyNSlcclxuICB9XHJcbiAgcmV0dXJuICEhcihlKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIEsoZSwgdCwgciA9IDMwMCwgbiA9IDEyMDApIHtcclxuICBsZXQgbyA9IERhdGUubm93KCksXHJcbiAgICBpID0gbnVsbDtcclxuICBmb3IgKDsgRGF0ZS5ub3coKSAtIG8gPCBuOykge1xyXG4gICAgaWYgKHQoZSkpIHtcclxuICAgICAgaWYgKGkgPz89IERhdGUubm93KCksIERhdGUubm93KCkgLSBpID49IHIpIHJldHVybiAhMFxyXG4gICAgfSBlbHNlIGkgPSBudWxsO1xyXG4gICAgYXdhaXQgKDAsIHYuZGVsYXkpKDUwKVxyXG4gIH1cclxuICByZXR1cm4gITFcclxufVxyXG5cclxuZnVuY3Rpb24gWChlLCB0KSB7XHJcbiAgbGV0IHIgPSB0LnN0YXJ0c1dpdGgoXCJwb2ludGVyXCIpICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgUG9pbnRlckV2ZW50ID8gUG9pbnRlckV2ZW50IDogTW91c2VFdmVudDtcclxuICBlLmRpc3BhdGNoRXZlbnQobmV3IHIodCwge1xyXG4gICAgYnViYmxlczogITAsXHJcbiAgICBjYW5jZWxhYmxlOiAhMCxcclxuICAgIHZpZXc6IHdpbmRvd1xyXG4gIH0pKVxyXG59XHJcblxyXG5mdW5jdGlvbiBKKGUpIHtcclxuICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBlLmNsaWNrKSB7XHJcbiAgICBlLmNsaWNrKCk7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgZS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIiwge1xyXG4gICAgYnViYmxlczogITAsXHJcbiAgICBjYW5jZWxhYmxlOiAhMCxcclxuICAgIHZpZXc6IHdpbmRvd1xyXG4gIH0pKVxyXG59XHJcblxyXG5mdW5jdGlvbiBRKGUpIHtcclxuICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBlLmRpc3BhdGNoRXZlbnQpXHJcbiAgICBmb3IgKGxldCB0IG9mIFtcInBvaW50ZXJkb3duXCIsIFwibW91c2Vkb3duXCIsIFwicG9pbnRlcnVwXCIsIFwibW91c2V1cFwiXSkgWChlLCB0KTtcclxuICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBlLmNsaWNrKSB7XHJcbiAgICBlLmNsaWNrKCk7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgWChlLCBcImNsaWNrXCIpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gWihlLCB0ID0gITAsIHIgPSB6LCBuID0gITApIHtcclxuICBsZXQgbyA9IGUgPT4gcihlKSA9PT0gbjtcclxuICBpZiAoIWUgfHwgbyhlKSkgcmV0dXJuO1xyXG4gIGxldCBpID0gYXdhaXQgSChlLCBuKTtcclxuICBpZiAoIShpICYmIGF3YWl0IEcoZSwgNTAwLCBvKSkpIHtcclxuICAgIGlmIChlLmZvY3VzKCksIGUuZGlzcGF0Y2hFdmVudChuZXcgRm9jdXNFdmVudChcImZvY3VzXCIsIHtcclxuICAgICAgICBidWJibGVzOiAhMCxcclxuICAgICAgICBjYW5jZWxhYmxlOiAhMSxcclxuICAgICAgICB2aWV3OiB3aW5kb3dcclxuICAgICAgfSkpLCB0KSB7XHJcbiAgICAgIGxldCB0ID0gVyhlKTtcclxuICAgICAgdCAhPT0gZSA/IFEodCkgOiBKKGUpO1xyXG4gICAgICBsZXQgciA9IGF3YWl0IEcoZSwgMjUwLCBvKTtcclxuICAgICAgciB8fCB0ID09PSBlIHx8IChKKGUpLCByID0gYXdhaXQgRyhlLCAyNTAsIG8pKSwgZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIsIHtcclxuICAgICAgICBidWJibGVzOiAhMCxcclxuICAgICAgICBjYW5jZWxhYmxlOiAhMVxyXG4gICAgICB9KSksIGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIiwge1xyXG4gICAgICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgICAgIGNhbmNlbGFibGU6ICExXHJcbiAgICAgIH0pKVxyXG4gICAgfSBlbHNlIGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIiwge1xyXG4gICAgICBidWJibGVzOiAhMCxcclxuICAgICAgY2FuY2VsYWJsZTogITFcclxuICAgIH0pKTtcclxuICAgIGUuYmx1cigpLCBlLmRpc3BhdGNoRXZlbnQobmV3IEZvY3VzRXZlbnQoXCJibHVyXCIsIHtcclxuICAgICAgYnViYmxlczogITAsXHJcbiAgICAgIGNhbmNlbGFibGU6ICExLFxyXG4gICAgICB2aWV3OiB3aW5kb3dcclxuICAgIH0pKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZWUoZSwgdCwgcikge1xyXG4gIHJldHVybiBlLm9wdGlvbnM/LltyXT8udHJpbSgpIHx8ICgwLCBjLm5vcm1hbGl6ZVJhZGlvQ2hlY2tUZXh0KSgoMCwgYy5nZXRSYWRpb0NoZWNrVGV4dCkodCkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV0KGUsIHQsIHIpIHtcclxuICBsZXQgbiA9ICgwLCBjLm5vcm1hbGl6ZVJhZGlvQ2hlY2tUZXh0KShlKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKSxcclxuICAgIGkgPSB0Lm1hcChlID0+ICgwLCBjLm5vcm1hbGl6ZVJhZGlvQ2hlY2tUZXh0KShTdHJpbmcoZSkpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpKS5maWx0ZXIoQm9vbGVhbik7XHJcbiAgaWYgKGkuc29tZShlID0+ICgwLCBvLmlzRXhhY3RDaG9pY2VNYXRjaCkobiwgZSkpKSByZXR1cm4gITA7XHJcbiAgbGV0IGEgPSBpWzBdIHx8IFwiXCIsXHJcbiAgICBsID0gci50b0xvd2VyQ2FzZSgpO1xyXG4gIHJldHVybiBcInRydWVcIiA9PT0gYSAmJiBcInllc1wiID09PSBuIHx8IFwiZmFsc2VcIiA9PT0gYSAmJiBcIm5vXCIgPT09IG4gfHwgbi5pbmNsdWRlcyhcImhhdmUgcmVhZFwiKSAmJlxyXG4gICAgXCJ0cnVlXCIgPT09IGEgfHwgKDAsIHUuaXNNYXRjaGVkKShuLCByKSAmJiBcInRydWVcIiA9PT0gYSB8fCBcInRydWVcIiA9PT0gYSAmJiAobi5pbmNsdWRlcyhcclxuICAgICAgXCJjdXJyZW50XCIpIHx8IGwuaW5jbHVkZXMoXCJjdXJyZW50XCIpKSB8fCBsLmluY2x1ZGVzKFwiY3VycmVudFwiKSAmJiBcInRydWVcIiA9PT0gYVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVyKGUsIHQpIHtcclxuICBsZXQgciA9IEFycmF5LmlzQXJyYXkodCkgPyB0IDogW3RdLFxyXG4gICAgbiA9ICgwLCBpLmdldFdvcmtkYXlBZ3JlZW1lbnRTdGF0ZSkoZSk7XHJcbiAgaWYgKG51bGwgIT09IG4pIHtcclxuICAgIGxldCB0ID0gMSA9PT0gci5sZW5ndGggPyBTdHJpbmcoclswXSkudHJpbSgpLnRvTG93ZXJDYXNlKCkgOiBcIlwiO1xyXG4gICAgaWYgKFwidHJ1ZVwiICE9PSB0ICYmIFwiZmFsc2VcIiAhPT0gdCkgcmV0dXJuIGNvbnNvbGUuaW5mbyhcclxuICAgICAgXCJbTXlXb3JrZGF5XVthdXRvZmlsbC1kZWJ1Z10gYWdyZWVtZW50Om5vLXZhbGlkLWFuc3dlclwiLCB7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IG4sXHJcbiAgICAgICAgcmVxdWlyZWQ6ICEhZS5yZXF1aXJlZFxyXG4gICAgICB9KSwgbjtcclxuICAgIGxldCBvID0gXCJ0cnVlXCIgPT09IHQsXHJcbiAgICAgIGkgPSBlLiRjaGVja2JveHNbMF07XHJcbiAgICBjb25zb2xlLmluZm8oXCJbTXlXb3JrZGF5XVthdXRvZmlsbC1kZWJ1Z10gYWdyZWVtZW50OmZpbGwtc3RhcnRcIiwge1xyXG4gICAgICBzZWxlY3RlZDogbixcclxuICAgICAgdGFyZ2V0U2VsZWN0ZWQ6IG8sXHJcbiAgICAgIHJlcXVpcmVkOiAhIWUucmVxdWlyZWRcclxuICAgIH0pLCBhd2FpdCBaKGksICEwLCB6LCBvKTtcclxuICAgIGxldCBhID0geihpKSxcclxuICAgICAgbCA9IGEgPT09IG8sXHJcbiAgICAgIHMgPSBsICYmICghZS5yZXF1aXJlZCB8fCBhKTtcclxuICAgIHJldHVybiBjb25zb2xlLmluZm8oXCJbTXlXb3JrZGF5XVthdXRvZmlsbC1kZWJ1Z10gYWdyZWVtZW50OmZpbGwtcmVzdWx0XCIsIHtcclxuICAgICAgc2VsZWN0ZWQ6IGEsXHJcbiAgICAgIHRhcmdldFNlbGVjdGVkOiBvLFxyXG4gICAgICBjb21wbGV0ZTogcyxcclxuICAgICAgcmVhc29uOiBsID8gcyA/IFwiYW5zd2VyLW1hdGNoZWRcIiA6IFwicmVxdWlyZWQtdW5jaGVja2VkXCIgOiBcInN0YXRlLW5vdC1jb21taXR0ZWRcIlxyXG4gICAgfSksIHNcclxuICB9XHJcbiAgaWYgKDEgPT09IGUuJGNoZWNrYm94cy5sZW5ndGggJiYgL15pIGN1cnJlbnRseSB3b3JrIGhlcmVcXHMqXFwqPyQvaS50ZXN0KGUubGFiZWwudHJpbSgpKSAmJiAxID09PVxyXG4gICAgci5sZW5ndGggJiYgXCJmYWxzZVwiID09PSBTdHJpbmcoclswXSkudHJpbSgpLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgIGxldCB0ID0gZS4kY2hlY2tib3hzWzBdO1xyXG4gICAgcmV0dXJuIGF3YWl0IFoodCwgITAsIHosICExKSwgIXoodClcclxuICB9XHJcbiAgbGV0IG8gPSAoMCwgeC5pc1dvcmtkYXlTZWxmSWRlbnRpZnlMYWJlbCkoZS5sYWJlbCksXHJcbiAgICBhID0gbyA/IHguaXNXb3JrZGF5U2VsZklkZW50aWZ5SW5wdXRTZWxlY3RlZCA6IHo7XHJcbiAgZm9yIChsZXQgdCA9IDA7IHQgPCBlLiRjaGVja2JveHMubGVuZ3RoOyB0KyspIHtcclxuICAgIGxldCBuID0gZS4kY2hlY2tib3hzW3RdLFxyXG4gICAgICBpID0gZWUoZSwgbiwgdCk7XHJcbiAgICBpZiAoaSAmJiBldChpLCByLCBlLmxhYmVsKSlcclxuICAgICAgZm9yIChsZXQgZSA9IDA7IGUgPCAyICYmICFhKG4pICYmIChhd2FpdCBaKG4sICEwLCBhKSwgISghbyB8fCBhd2FpdCBLKG4sIGEpKSk7IGUrKyk7XHJcbiAgfVxyXG4gIHJldHVybiBlLiRjaGVja2JveHMuc29tZShlID0+IGEoZSkpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZW4oZSA9IFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCIpIHtcclxuICBsZXQgdCA9ICgwLCBiLmdldEZpcnN0T3JkZXJlZE5vZGUpKFxyXG4gICAgJy4vL2J1dHRvbltAZGF0YS1hdXRvbWF0aW9uLWlkPVwiY291bnRyeURyb3Bkb3duXCIgb3IgQGRhdGEtYXV0b21hdGlvbi1pZD1cImZvcm1GaWVsZC1jb3VudHJ5XCIgb3IgQGlkPVwiY291bnRyeS0tY291bnRyeVwiXSdcclxuICAgICk7XHJcbiAgaWYgKCF0KSByZXR1cm4gITE7XHJcbiAgbGV0IHIgPSB0O1xyXG4gIHJldHVybiAhIWVhKHIudGV4dENvbnRlbnQsIGUpIHx8IHRzKHIsIFtlXSlcclxufVxyXG5cclxuZnVuY3Rpb24gZW8oZSkge1xyXG4gIGxldCB0ID0gZWwoZSksXHJcbiAgICByID0gZXMoZSk7XHJcbiAgcmV0dXJuICF0IHx8IFwic2VsZWN0IG9uZVwiID09PSB0IHx8IGVkKHIsIFwic2VsZWN0b25lXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVpKGUsIHQpIHtcclxuICByZXR1cm4gISEoZSA9PT0gdCB8fCBlZChlLCB0KSkgfHwgW1xyXG4gICAgW1widW5pdGVkc3RhdGVzb2ZhbWVyaWNhXCIsIFwidW5pdGVkc3RhdGVzXCIsIFwidXNhXCIsIFwidXNcIl0sXHJcbiAgICBbXCJjYW5hZGFcIiwgXCJjYVwiXVxyXG4gIF0uc29tZShyID0+IHIuaW5jbHVkZXMoZSkgJiYgci5pbmNsdWRlcyh0KSlcclxufVxyXG5cclxuZnVuY3Rpb24gZWEoZSwgdCkge1xyXG4gIGlmIChlbyhlKSkgcmV0dXJuICExO1xyXG4gIGxldCByID0gZXMoZSksXHJcbiAgICBuID0gZXModCk7XHJcbiAgcmV0dXJuICEhciAmJiAhIW4gJiYgZWkociwgbilcclxufVxyXG5cclxuZnVuY3Rpb24gZWwoZSkge1xyXG4gIHJldHVybiBTdHJpbmcoZSA/PyBcIlwiKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCkudG9Mb3dlckNhc2UoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlcyhlKSB7XHJcbiAgcmV0dXJuIGVsKGUpLnJlcGxhY2UoL1teYS16MC05XS9nLCBcIlwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBldShlKSB7XHJcbiAgcmV0dXJuIGVsKGUpLnJlcGxhY2UoL1teYS16MC05KyMuXS9nLCBcIlwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlYyhlKSB7XHJcbiAgcmV0dXJuIGVsKGUpLnNwbGl0KC9bXmEtejAtOV0rLykuZmlsdGVyKEJvb2xlYW4pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkKGUsIHQpIHtcclxuICByZXR1cm4gISFlICYmICEhdCAmJiAhKGUubGVuZ3RoIDw9IHQubGVuZ3RoKSAmJiBlLmxlbmd0aCAlIHQubGVuZ3RoID09IDAgJiYgZSA9PT0gdC5yZXBlYXQoZVxyXG4gICAgLmxlbmd0aCAvIHQubGVuZ3RoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlZihlKSB7XHJcbiAgbGV0IHQgPSBlbChlPy50ZXh0Q29udGVudCk7XHJcbiAgcmV0dXJuIFwibm8gaXRlbXNcIiA9PT0gdCB8fCBcIm5vIGl0ZW1zLlwiID09PSB0IHx8IFwibm8gbWF0Y2hlcyBmb3VuZFwiID09PSB0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVwKGUpIHtcclxuICByZXR1cm4gXCJubyBtYXRjaGVzIGZvdW5kXCIgPT09IGVsKGUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVtKGUpIHtcclxuICByZXR1cm4gZS5tYXAoZSA9PiBlbChlPy50ZXh0Q29udGVudCkpLmZpbHRlcihCb29sZWFuKS5qb2luKFwifFwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlaChlLCB0LCByID0ge30pIHtcclxuICBsZXQgbiA9IHIuc3RyaWN0ID8/ICEwLFxyXG4gICAgbyA9IHIuYWxsb3dGdXp6eSA/PyAhMCxcclxuICAgIGkgPSByLmFsbG93RXhwYW5kZWRNYXRjaCA/PyAhMCxcclxuICAgIGEgPSBlbChlKSxcclxuICAgIGwgPSBlcyhlKSxcclxuICAgIHUgPSBldShlKSxcclxuICAgIGMgPSB1ICE9PSBsLFxyXG4gICAgZCA9IGVjKGUpLFxyXG4gICAgZiA9IGkgJiYgKCFuIHx8IGQubGVuZ3RoID4gMSB8fCBsLmxlbmd0aCA8PSAzKSxcclxuICAgIHAgPSB0LmZpbHRlcihlID0+ICFlZihlKSk7XHJcbiAgaWYgKCFsIHx8IDAgPT09IHAubGVuZ3RoKSByZXR1cm4gbnVsbDtcclxuICBsZXQgbSA9IHAuZmluZChlID0+IHtcclxuICAgIGxldCB0ID0gZT8udGV4dENvbnRlbnQsXHJcbiAgICAgIHIgPSBlbCh0KSxcclxuICAgICAgbiA9IGVzKHQpLFxyXG4gICAgICBvID0gZXUodCksXHJcbiAgICAgIGkgPSBvICE9PSBuLFxyXG4gICAgICBzID0gIWMgJiYgIWk7XHJcbiAgICByZXR1cm4gciA9PT0gYSB8fCBvID09PSB1IHx8IGVkKG8sIHUpIHx8IHMgJiYgKG4gPT09IGwgfHwgZWQobiwgbCkpXHJcbiAgfSk7XHJcbiAgaWYgKG0pIHJldHVybiBtO1xyXG4gIGxldCBoID0gYyB8fCAhZiA/IG51bGwgOiBwLmZpbmQoZSA9PiBlYyhlPy50ZXh0Q29udGVudCkuaW5jbHVkZXMobCkpO1xyXG4gIGlmIChoKSByZXR1cm4gaDtcclxuICBpZiAobiAmJiAhYyAmJiBsLmxlbmd0aCA8PSAzIHx8IG4gJiYgIWYpIHJldHVybiBudWxsO1xyXG4gIGxldCBnID0gYyA/IHUgOiBsLFxyXG4gICAgYiA9IHAuZmluZChlID0+IHtcclxuICAgICAgbGV0IHQgPSBjID8gZXUoZT8udGV4dENvbnRlbnQpIDogZXMoZT8udGV4dENvbnRlbnQpO1xyXG4gICAgICByZXR1cm4gdC5sZW5ndGggPiAwICYmIHQuaW5jbHVkZXMoZylcclxuICAgIH0pO1xyXG4gIGlmIChiKSByZXR1cm4gYjtcclxuICBpZiAobykge1xyXG4gICAgbGV0IHQgPSAoMCwgcy5mdXp6eUZpbmRCZXN0KShlLCBwLCB7XHJcbiAgICAgIHRocmVzaG9sZDogbiA/IC43IDogLjUsXHJcbiAgICAgIG5vcm1hbGl6ZTogZSA9PiBlbChlKVxyXG4gICAgfSk7XHJcbiAgICBpZiAodCkgcmV0dXJuIHRcclxuICB9XHJcbiAgcmV0dXJuICFuICYmIHIuYWxsb3dGaXJzdENhbmRpZGF0ZUZhbGxiYWNrID8gcFswXSA/PyBudWxsIDogbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBlZyhlKSB7XHJcbiAgcmV0dXJuICgwLCBiLmdldEZpcnN0T3JkZXJlZE5vZGUpKFxyXG4gICAgJy4vL2FuY2VzdG9yLW9yLXNlbGY6OipbQGRhdGEtYXV0b21hdGlvbi1pZD1cIm11bHRpc2VsZWN0SW5wdXRDb250YWluZXJcIiBvciBAZGF0YS1hdXRvbWF0aW9uLWlkPVwibXVsdGlTZWxlY3RDb250YWluZXJcIl0nLFxyXG4gICAgZSkgPz8gZS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50ID8/IGVcclxufVxyXG5cclxuZnVuY3Rpb24gZWIoZSkge1xyXG4gIGxldCB0ID0gZT8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLWF1dG9tYXRpb24taWRcIik7XHJcbiAgcmV0dXJuIFwibXVsdGlzZWxlY3RJbnB1dENvbnRhaW5lclwiID09PSB0IHx8IFwibXVsdGlTZWxlY3RDb250YWluZXJcIiA9PT0gdFxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGV5KGUpIHtcclxuICBpZiAoIWUpIHJldHVybiAhMTtcclxuICBsZXQgdCA9IGVnKGUpLFxyXG4gICAgciA9IEFycmF5LmZyb20odC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAnW2RhdGEtYXV0b21hdGlvbi1pZD1cInNlbGVjdGVkSXRlbUxpc3RcIl0gYnV0dG9uLCBbZGF0YS1hdXRvbWF0aW9uLWlkPVwic2VsZWN0ZWRJdGVtTGlzdFwiXSBbcm9sZT1cImJ1dHRvblwiXSwgW2RhdGEtYXV0b21hdGlvbi1pZD1cInNlbGVjdGVkSXRlbUxpc3RcIl0gW2FyaWEtbGFiZWwqPVwiUmVtb3ZlXCIgaV0sIFtkYXRhLWF1dG9tYXRpb24taWQ9XCJzZWxlY3RlZEl0ZW1MaXN0XCJdIFt0aXRsZSo9XCJSZW1vdmVcIiBpXSwgW2RhdGEtYXV0b21hdGlvbi1pZD1cInNlbGVjdGVkSXRlbUxpc3RcIl0gW2RhdGEtYXV0b21hdGlvbi1pZCo9XCJyZW1vdmVcIiBpXSwgW2RhdGEtYXV0b21hdGlvbi1pZD1cInNlbGVjdGVkSXRlbUxpc3RcIl0gW2RhdGEtYXV0b21hdGlvbi1pZCo9XCJkZWxldGVcIiBpXSdcclxuICAgICAgKSkuZmlsdGVyKGUgPT4ge1xyXG4gICAgICBsZXQgdCA9IGU7XHJcbiAgICAgIHJldHVybiAhdC5kaXNhYmxlZFxyXG4gICAgfSk7XHJcbiAgZm9yIChsZXQgZSBvZiByKSBlLmNsaWNrPy4oKSwgKDAsIGQudHJpZ2dlckV2ZW50cykoZSwgW1wibW91c2Vkb3duXCIsIFwibW91c2V1cFwiLCBcImNsaWNrXCJdKSxcclxuICAgIGF3YWl0ICgwLCB2LmRlbGF5KSg1MCk7XHJcbiAgaWYgKHIubGVuZ3RoID4gMCkge1xyXG4gICAgbGV0IGUgPSBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBOb2RlICYmIHQgaW5zdGFuY2VvZiBOb2RlID8gdCA6IHZvaWQgMDtcclxuICAgIGF3YWl0ICgwLCBmLndhaXRGb3JDb25kaXRpb24pKCgpID0+IDAgPT09IGVFKHQpLmxlbmd0aCwge1xyXG4gICAgICB0aW1lb3V0OiAxZTMsXHJcbiAgICAgIGludGVydmFsOiA1MCxcclxuICAgICAgb2JzZXJ2ZVRhcmdldDogZVxyXG4gICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIGUudmFsdWUgPSBcIlwiLCAoMCwgZC50cmlnZ2VyRXZlbnRzKShlLCBbXCJpbnB1dFwiLCBcImNoYW5nZVwiLCBcImJsdXJcIl0pLCBlLmJsdXI/LigpLCByXHJcbiAgICAubGVuZ3RoID4gMFxyXG59XHJcblxyXG5mdW5jdGlvbiBldihlLCB0KSB7XHJcbiAgbGV0IHIgPSBlcyhlPy5pZCksXHJcbiAgICBuID0gZXMoZT8ubmFtZSksXHJcbiAgICBvID0gZXModD8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLWF1dG9tYXRpb24taWRcIikpLFxyXG4gICAgaSA9IGVsKHQ/LnRleHRDb250ZW50KSxcclxuICAgIGEgPSB0Py5jbG9zZXN0Py4oXHJcbiAgICAgICdbZGF0YS1hdXRvbWF0aW9uLWlkPVwic2tpbGxzU2VjdGlvblwiXSwgW2RhdGEtYXV0b21hdGlvbi1pZD1cImZvcm1GaWVsZC1za2lsbHNcIl0sIFtpZCo9XCJTa2lsbHMtc2VjdGlvblwiXSdcclxuICAgICAgKTtcclxuICByZXR1cm4gci5pbmNsdWRlcyhcInNraWxsc1wiKSB8fCBuLmluY2x1ZGVzKFwic2tpbGxzXCIpIHx8IG8uaW5jbHVkZXMoXCJza2lsbHNcIikgfHwgaS5pbmNsdWRlcyhcclxuICAgIFwidHlwZSB0byBhZGQgc2tpbGxzXCIpIHx8ICEhYVxyXG59XHJcblxyXG5mdW5jdGlvbiBldyhlLCB0KSB7XHJcbiAgbGV0IHIgPSBlcyhlPy5pZCksXHJcbiAgICBuID0gZXMoZT8ubmFtZSksXHJcbiAgICBvID0gZXModD8uZ2V0QXR0cmlidXRlPy4oXCJkYXRhLWF1dG9tYXRpb24taWRcIikpLFxyXG4gICAgaSA9IGVsKHQ/LnRleHRDb250ZW50KSxcclxuICAgIGEgPSBlPy5jbG9zZXN0Py4oJ1tkYXRhLWF1dG9tYXRpb24taWQ9XCJmb3JtRmllbGQtZmllbGRPZlN0dWR5XCJdJykgfHwgdD8uY2xvc2VzdD8uKFxyXG4gICAgICAnW2RhdGEtYXV0b21hdGlvbi1pZD1cImZvcm1GaWVsZC1maWVsZE9mU3R1ZHlcIl0nKTtcclxuICByZXR1cm4gci5pbmNsdWRlcyhcImZpZWxkb2ZzdHVkeVwiKSB8fCBuLmluY2x1ZGVzKFwiZmllbGRvZnN0dWR5XCIpIHx8IG8uaW5jbHVkZXMoXCJmaWVsZG9mc3R1ZHlcIikgfHwgaVxyXG4gICAgLmluY2x1ZGVzKFwiZmllbGQgb2Ygc3R1ZHlcIikgfHwgISFhXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVTKGUsIHQpIHtcclxuICBsZXQgciA9IGVzKGU/LmlkKSxcclxuICAgIG4gPSBlcyhlPy5uYW1lKSxcclxuICAgIG8gPSBlcyh0Py5nZXRBdHRyaWJ1dGU/LihcImRhdGEtYXV0b21hdGlvbi1pZFwiKSksXHJcbiAgICBpID0gZWwodD8udGV4dENvbnRlbnQpLFxyXG4gICAgYSA9IGU/LmNsb3Nlc3Q/LignW2RhdGEtYXV0b21hdGlvbi1pZD1cImZvcm1GaWVsZC1zY2hvb2xcIl0nKSB8fCB0Py5jbG9zZXN0Py4oXHJcbiAgICAgICdbZGF0YS1hdXRvbWF0aW9uLWlkPVwiZm9ybUZpZWxkLXNjaG9vbFwiXScpO1xyXG4gIHJldHVybiByLmluY2x1ZGVzKFwic2Nob29sXCIpIHx8IHIuaW5jbHVkZXMoXCJpbnN0aXR1dGlvblwiKSB8fCBuLmluY2x1ZGVzKFwic2Nob29sXCIpIHx8IG4uaW5jbHVkZXMoXHJcbiAgICBcImluc3RpdHV0aW9uXCIpIHx8IG8uaW5jbHVkZXMoXCJzY2hvb2xcIikgfHwgby5pbmNsdWRlcyhcImluc3RpdHV0aW9uXCIpIHx8IGkuaW5jbHVkZXMoXHJcbiAgICBcInNjaG9vbCBvciB1bml2ZXJzaXR5XCIpIHx8IGkuaW5jbHVkZXMoXCJlZHVjYXRpb25hbCBpbnN0aXR1dGlvblwiKSB8fCAhIWFcclxufVxyXG5cclxuZnVuY3Rpb24gZUUoZSkge1xyXG4gIHJldHVybiBlID8gKDAsIGIuZ2V0T3JkZXJlZE5vZGVzKShcclxuICAgICcuLy8qW0BkYXRhLWF1dG9tYXRpb24taWQ9XCJzZWxlY3RlZEl0ZW1MaXN0XCIgYW5kIEByb2xlPVwibGlzdGJveFwiXS8vKltAZGF0YS1hdXRvbWF0aW9uLWlkPVwibWVudUl0ZW1cIl0nLFxyXG4gICAgZSkubWFwKGUgPT4gZWwoZT8udGV4dENvbnRlbnQpKS5maWx0ZXIoQm9vbGVhbikgOiBbXVxyXG59XHJcblxyXG5mdW5jdGlvbiBleChlLCB0KSB7XHJcbiAgbGV0IHIgPSBlcyh0KTtcclxuICByZXR1cm4gISFyICYmIGVFKGUpLnNvbWUoZSA9PiB7XHJcbiAgICBsZXQgdCA9IGVzKGUpO1xyXG4gICAgcmV0dXJuIHQgPT09IHIgfHwgZWQodCwgcilcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBlQyhlLCB0KSB7XHJcbiAgbGV0IHIgPSAoZSA/PyBbXSkubWFwKGUgPT4gU3RyaW5nKGUgPz8gXCJcIikudHJpbSgpKS5maWx0ZXIoQm9vbGVhbiksXHJcbiAgICBuID0gKHQgPz8gW10pLm1hcChlID0+IFN0cmluZyhlID8/IFwiXCIpLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pLFxyXG4gICAgbyA9IG4ubWFwKGUgPT4gZXMoZSkpLmZpbHRlcihCb29sZWFuKSxcclxuICAgIGkgPSByLmZpbHRlcihlID0+IHtcclxuICAgICAgbGV0IHQgPSBlcyhlKTtcclxuICAgICAgcmV0dXJuICF0IHx8ICFvLnNvbWUoZSA9PiBlID09PSB0IHx8IGVkKGUsIHQpKVxyXG4gICAgfSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlcXVlc3RlZENvdW50OiByLmxlbmd0aCxcclxuICAgIHNlbGVjdGVkQ291bnQ6IG4ubGVuZ3RoLFxyXG4gICAgbWlzc2luZ1NraWxsczogaVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZUEoZSwgdCkge1xyXG4gIGxldCByID0gZXModCk7XHJcbiAgcmV0dXJuICEhciAmJiBlRShlKS5zb21lKGUgPT4ge1xyXG4gICAgbGV0IHQgPSBlcyhlKTtcclxuICAgIHJldHVybiAhIXQgJiYgdCAhPT0gciAmJiAhZWQodCwgcilcclxuICB9KVxyXG59XHJcbmxldCBlayA9ICdpbnB1dFtkYXRhLWF1dG9tYXRpb24taWQ9XCJzZWFyY2hCb3hcIl0sIGlucHV0W3BsYWNlaG9sZGVyPVwiU2VhcmNoXCJdJyxcclxuICBlVCA9XHJcbiAgJ1tkYXRhLWF1dG9tYXRpb24taWQ9XCJhY3RpdmVMaXN0Q29udGFpbmVyXCJdIGlucHV0W2RhdGEtYXV0b21hdGlvbi1pZD1cInNlYXJjaEJveFwiXSwgW2RhdGEtYXV0b21hdGlvbi1pZD1cImFjdGl2ZUxpc3RDb250YWluZXJcIl0gaW5wdXRbcGxhY2Vob2xkZXI9XCJTZWFyY2hcIl0nLFxyXG4gIGVGID0gMTUwLFxyXG4gIGVJID0gMzAsXHJcbiAgZWogPSAxLFxyXG4gIGVEID0gOCxcclxuICBlUCA9IGVJICsgMSxcclxuICBlXyA9IDIsXHJcbiAgZUwgPSAxMixcclxuICBlUiA9IDIsXHJcbiAgZU8gPSA4MDAsXHJcbiAgZU0gPSA1LFxyXG4gIGVOID0gNTAwLFxyXG4gIGUkID0gMjUwLFxyXG4gIGVCID0gMTIwMCxcclxuICBlcSA9IDMsXHJcbiAgZVUgPSBuZXcgV2Vha01hcDtcclxuXHJcbmZ1bmN0aW9uIGVIKGUgPSBbXSwgdCA9IG51bGwpIHtcclxuICBpZiAoZS5zb21lKGUgPT4gZXAoZT8udGV4dENvbnRlbnQpKSkgcmV0dXJuICEwO1xyXG4gIGxldCByID0gdCA/ICgwLCBiLmdldE9yZGVyZWROb2RlcykoXHJcbiAgICAnLi8vKltub3JtYWxpemUtc3BhY2UoLik9XCJObyBtYXRjaGVzIGZvdW5kXCIgb3IgQHRpdGxlPVwiTm8gbWF0Y2hlcyBmb3VuZFwiXScsIHQpIDogKDAsIGJcclxuICAgIC5nZXRPcmRlcmVkTm9kZXMpKFxyXG4gICAgJy8vKltAZGF0YS1hdXRvbWF0aW9uLWlkPVwiYWN0aXZlTGlzdENvbnRhaW5lclwiXS8vKltub3JtYWxpemUtc3BhY2UoLik9XCJObyBtYXRjaGVzIGZvdW5kXCIgb3IgQHRpdGxlPVwiTm8gbWF0Y2hlcyBmb3VuZFwiXSdcclxuICAgICk7XHJcbiAgcmV0dXJuIHIuc29tZShlID0+IHtcclxuICAgIGxldCB0ID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBlLmdldEF0dHJpYnV0ZSA/IGUuZ2V0QXR0cmlidXRlKFwidGl0bGVcIikgOiBcIlwiO1xyXG4gICAgcmV0dXJuIGVwKHQpIHx8IGVwKGUudGV4dENvbnRlbnQpXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZVkoZSkge1xyXG4gIHJldHVybiBTdHJpbmcoZSA/PyBcIlwiKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCkuc2xpY2UoMCwgODApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV6KGUsIHQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgaW5wdXRJZDogZS5pZCB8fCB2b2lkIDAsXHJcbiAgICBpbnB1dE5hbWU6IGUubmFtZSB8fCB2b2lkIDAsXHJcbiAgICBpbnB1dEF1dG9tYXRpb25JZDogZS5nZXRBdHRyaWJ1dGU/LihcImRhdGEtYXV0b21hdGlvbi1pZFwiKSB8fCB2b2lkIDAsXHJcbiAgICByb290QXV0b21hdGlvbklkOiB0Py5nZXRBdHRyaWJ1dGU/LihcImRhdGEtYXV0b21hdGlvbi1pZFwiKSB8fCB2b2lkIDBcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVWKGUsIHQgPSB7fSkge1xyXG4gIGNvbnNvbGUuaW5mbyhgW015V29ya2RheV1bYXV0b2ZpbGwtZGVidWddIHNlYXJjaDoke2V9ICR7SlNPTi5zdHJpbmdpZnkodCl9YClcclxufVxyXG5cclxuZnVuY3Rpb24gZVcoZSkge1xyXG4gIHJldHVybiAhIWUgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBlLm1hdGNoZXMgJiYgZS5tYXRjaGVzKGVrKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlRyhlKSB7XHJcbiAgcmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGUgfHwgdm9pZCAwICE9PSBlLm9mZnNldFBhcmVudCAmJiBudWxsICE9PSBlLm9mZnNldFBhcmVudCB8fFxyXG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBlLmdldENsaWVudFJlY3RzICYmIGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggPiAwXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVLKCkge1xyXG4gIHJldHVybiBcInVuZGVmaW5lZFwiID09IHR5cGVvZiBkb2N1bWVudCB8fCBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwgPyBbXSA6XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZVQpKS5maWx0ZXIoZUcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVYKGUpIHtcclxuICByZXR1cm4gdm9pZCAwICE9PSBlLm9mZnNldFBhcmVudCAmJiBudWxsICE9PSBlLm9mZnNldFBhcmVudCB8fCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGVcclxuICAgIC5nZXRDbGllbnRSZWN0cyAmJiBlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoID4gMFxyXG59XHJcblxyXG5mdW5jdGlvbiBlSigpIHtcclxuICBsZXQgZSA9IG5ldyBTZXQoZUsoKSk7XHJcbiAgcmV0dXJuIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGRvY3VtZW50ICYmIGVXKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpICYmIGUuYWRkKGRvY3VtZW50XHJcbiAgICAuYWN0aXZlRWxlbWVudCksIGVcclxufVxyXG5cclxuZnVuY3Rpb24gZVEoZSwgdCwgcikge1xyXG4gIGxldCBuID0gZSA9PiBlICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZS5jbG9zZXN0ID8gZS5jbG9zZXN0KFxyXG4gICAgICAnW2RhdGEtYXV0b21hdGlvbi1pZD1cImFjdGl2ZUxpc3RDb250YWluZXJcIl0nKSA6IG51bGwsXHJcbiAgICBvID0gdCA9PiAhci5oYXModCkgfHwgZVUuZ2V0KHQpID09PSBlO1xyXG4gIGlmIChvKHQpKSB7XHJcbiAgICBsZXQgZSA9IG4odCk7XHJcbiAgICBpZiAoZSAmJiBlWChlKSkgcmV0dXJuIGVcclxuICB9XHJcbiAgbGV0IGkgPSBlWihlLCByLCAhMSk7XHJcbiAgaWYgKCFpIHx8ICFvKGkpKSByZXR1cm4gbnVsbDtcclxuICBsZXQgYSA9IG4oaSk7XHJcbiAgcmV0dXJuIGEgJiYgZVgoYSkgPyBhIDogbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBlWihlLCB0ID0gbmV3IFNldCwgciA9ICEwKSB7XHJcbiAgbGV0IG4gPSBlZyhlKSxcclxuICAgIG8gPSB0ID0+IHtcclxuICAgICAgaWYgKHQgPT09IGUgfHwgZVUuZ2V0KHQpID09PSBlIHx8IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygbi5jb250YWlucyAmJiBuLmNvbnRhaW5zKHQpKSByZXR1cm4gITA7XHJcbiAgICAgIGxldCByID0gZXMoZT8uaWQpLFxyXG4gICAgICAgIG8gPSBlcyh0Py5pZCk7XHJcbiAgICAgIGlmIChyICYmIG8gJiYgciA9PT0gbykgcmV0dXJuICEwO1xyXG4gICAgICBsZXQgaSA9IGVzKGU/Lm5hbWUpLFxyXG4gICAgICAgIGEgPSBlcyh0Py5uYW1lKTtcclxuICAgICAgcmV0dXJuICEhaSAmJiAhIWEgJiYgaSA9PT0gYVxyXG4gICAgfSxcclxuICAgIGkgPSBlID0+IG8oZSkgfHwgIXQuaGFzKGUpO1xyXG4gIGlmIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBkb2N1bWVudCAmJiBlVyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSAmJiBpKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpICYmIChcclxuICAgICAgbyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB8fCAwID09PSB0LnNpemUpKSByZXR1cm4gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuICBsZXQgYSA9IGVLKCksXHJcbiAgICBsID0gYS5maW5kKG8pO1xyXG4gIGlmIChsKSByZXR1cm4gbDtcclxuICBsZXQgcyA9IGEuZmluZChpKTtcclxuICByZXR1cm4gcyB8fCAociA/IG4ucXVlcnlTZWxlY3RvcihlaykgPz8gZSA6IG51bGwpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGUwKGUpIHtcclxuICBsZXQgdCA9IGVnKGUpLFxyXG4gICAgciA9IHQucXVlcnlTZWxlY3RvcihcclxuICAgICAgJ1tkYXRhLWF1dG9tYXRpb24taWQ9XCJwcm9tcHRJY29uXCJdLCBbZGF0YS1hdXRvbWF0aW9uLWlkPVwicHJvbXB0U2VhcmNoQnV0dG9uXCJdJyk7XHJcbiAgciA/ICgwLCBkLnRyaWdnZXJFdmVudHMpKHIsIFtcIm1vdXNlZG93blwiLCBcIm1vdXNldXBcIiwgXCJjbGlja1wiXSkgOiAoMCwgZC50cmlnZ2VyRXZlbnRzKSh0LCBbXHJcbiAgICBcIm1vdXNlZG93blwiLCBcIm1vdXNldXBcIiwgXCJjbGlja1wiXHJcbiAgXSlcclxufVxyXG5cclxuZnVuY3Rpb24gZTIoZSwgdCkge1xyXG4gICgwLCBkLnRyaWdnZXJFdmVudHMpKGUsIFtcImZvY3VzXCJdKSwgZS5mb2N1cz8uKCk7XHJcbiAgbGV0IHIgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSksXHJcbiAgICBuID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLCBcInZhbHVlXCIpPy5zZXQ7XHJcbiAgbiA/IG4uY2FsbChlLCB0KSA6IGUudmFsdWUgPSB0LCAoMCwgZC50cmlnZ2VyRXZlbnRzKShlLCBbXCJpbnB1dFwiLCBcImNoYW5nZVwiXSk7XHJcbiAgbGV0IG8gPSB0LnNsaWNlKC0xKTtcclxuICBmb3IgKGxldCB0IG9mIFtcImtleWRvd25cIiwgXCJrZXl1cFwiXSkgZS5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KHQsIHtcclxuICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgY2FuY2VsYWJsZTogITAsXHJcbiAgICBrZXk6IG8sXHJcbiAgICBjb2RlOiBvID8gYEtleSR7by50b1VwcGVyQ2FzZSgpfWAgOiBcIlwiLFxyXG4gICAga2V5Q29kZTogbyA/IG8udG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApIDogMFxyXG4gIH0pKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlMShlKSB7XHJcbiAgZm9yIChsZXQgdCBvZiBbXCJrZXlkb3duXCIsIFwia2V5cHJlc3NcIiwgXCJrZXl1cFwiXSkgZS5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KHQsIHtcclxuICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgY2FuY2VsYWJsZTogITAsXHJcbiAgICBrZXk6IFwiRW50ZXJcIixcclxuICAgIGNvZGU6IFwiRW50ZXJcIixcclxuICAgIGtleUNvZGU6IDEzXHJcbiAgfSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGUzKCkge1xyXG4gIHJldHVybiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBkb2N1bWVudCAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwgJiZcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWF1dG9tYXRpb24taWQ9XCJhY3RpdmVMaXN0Q29udGFpbmVyXCJdJykubGVuZ3RoID4gMFxyXG59XHJcblxyXG5mdW5jdGlvbiBlNCgpIHtcclxuICBpZiAoXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2YgZG9jdW1lbnQgfHwgXCJmdW5jdGlvblwiICE9IHR5cGVvZiBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KSByZXR1cm4gITE7XHJcbiAgbGV0IGUgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnW2RhdGEtYXV0b21hdGlvbi1pZD1cImFjdGl2ZUxpc3RDb250YWluZXJcIl0nKSA6IG51bGwsXHJcbiAgICB0ID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBlPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPyBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogbnVsbCxcclxuICAgIHIgPSBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiB3aW5kb3cgJiYgd2luZG93LmlubmVyV2lkdGggfHwgMCxcclxuICAgIG4gPSBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiB3aW5kb3cgJiYgd2luZG93LmlubmVySGVpZ2h0IHx8IDAsXHJcbiAgICBvID0gTWF0aC5tYXgoMTYsIE1hdGgubWluKDgwLCBNYXRoLm1heCgxNiwgciAtIDE2KSkpLFxyXG4gICAgaSA9IDEyMDtcclxuICBpZiAodCkge1xyXG4gICAgbGV0IGUgPSB0LnRvcCAtIDEyMCxcclxuICAgICAgciA9IHQuYm90dG9tICsgMjQ7XHJcbiAgICBlID49IDgwID8gaSA9IGUgOiBuICYmIHIgPD0gbiAtIDI0ICYmIChpID0gcilcclxuICB9XHJcbiAgbiAmJiAoaSA9IE1hdGgubWF4KDI0LCBNYXRoLm1pbihpLCBuIC0gMjQpKSk7XHJcbiAgbGV0IGEgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KG8sIGkpID8/ICgwLCBiLmdldEZpcnN0T3JkZXJlZE5vZGUpKFxyXG4gICAgJy8vKltAaWQ9XCJtYWluQ29udGVudFwiXSB8IC8vbWFpbicpID8/IGRvY3VtZW50LmJvZHkgPz8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gIGlmICghYSkgcmV0dXJuICExO1xyXG4gIGZvciAobGV0IGUgb2YgKGEuZm9jdXM/LigpLCBbXCJwb2ludGVyb3ZlclwiLCBcIm1vdXNlb3ZlclwiLCBcInBvaW50ZXJtb3ZlXCIsIFwibW91c2Vtb3ZlXCIsXHJcbiAgICAgIFwicG9pbnRlcmRvd25cIiwgXCJtb3VzZWRvd25cIiwgXCJwb2ludGVydXBcIiwgXCJtb3VzZXVwXCIsIFwiY2xpY2tcIlxyXG4gICAgXSkpIGU5KGEsIGUsIG8sIGkpO1xyXG4gIHJldHVybiAhMFxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGU1KGUpIHtcclxuICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBLZXlib2FyZEV2ZW50KSByZXR1cm47XHJcbiAgbGV0IHQgPSBlWihlKSA/PyBlO1xyXG4gIGZvciAobGV0IGUgb2YgW1wia2V5ZG93blwiLCBcImtleXVwXCJdKSB0LmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoZSwge1xyXG4gICAgYnViYmxlczogITAsXHJcbiAgICBjYW5jZWxhYmxlOiAhMCxcclxuICAgIGtleTogXCJFc2NhcGVcIixcclxuICAgIGNvZGU6IFwiRXNjYXBlXCIsXHJcbiAgICBrZXlDb2RlOiAyN1xyXG4gIH0pKTtcclxuICBlNihlKSwgYXdhaXQgKDAsIGYud2FpdEZvckNvbmRpdGlvbikoKCkgPT4gIWUzKCksIHtcclxuICAgIHRpbWVvdXQ6IDMwMCxcclxuICAgIGludGVydmFsOiA1MCxcclxuICAgIG9ic2VydmVUYXJnZXQ6IGRvY3VtZW50LmJvZHlcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBlNihlKSB7XHJcbiAgbGV0IHQgPSBlWihlLCBuZXcgU2V0LCAhMSksXHJcbiAgICByID0gW3QsIGVdLmZpbHRlcigoZSwgdCwgcikgPT4gISFlICYmIHIuaW5kZXhPZihlKSA9PT0gdCk7XHJcbiAgZm9yIChsZXQgZSBvZiByKSBlLmJsdXI/LigpLCBlLmRpc3BhdGNoRXZlbnQocnAoXCJibHVyXCIpKSwgZS5kaXNwYXRjaEV2ZW50KHJwKFwiZm9jdXNvdXRcIikpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGU4KGUpIHtcclxuICBlMShlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlOShlLCB0LCByLCBuKSB7XHJcbiAgbGV0IG8gPSB0LnN0YXJ0c1dpdGgoXCJwb2ludGVyXCIpLFxyXG4gICAgaSA9IHQuZW5kc1dpdGgoXCJkb3duXCIpLFxyXG4gICAgYSA9IHtcclxuICAgICAgYnViYmxlczogITAsXHJcbiAgICAgIGNhbmNlbGFibGU6ICEwLFxyXG4gICAgICB2aWV3OiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiB3aW5kb3cgPyB3aW5kb3cgOiBudWxsLFxyXG4gICAgICBjbGllbnRYOiByLFxyXG4gICAgICBjbGllbnRZOiBuLFxyXG4gICAgICBzY3JlZW5YOiByLFxyXG4gICAgICBzY3JlZW5ZOiBuLFxyXG4gICAgICBidXR0b246IDAsXHJcbiAgICAgIGJ1dHRvbnM6IGkgPyAxIDogMFxyXG4gICAgfTtcclxuICBpZiAobyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFBvaW50ZXJFdmVudCkge1xyXG4gICAgZS5kaXNwYXRjaEV2ZW50KG5ldyBQb2ludGVyRXZlbnQodCwge1xyXG4gICAgICAuLi5hLFxyXG4gICAgICBwb2ludGVySWQ6IDEsXHJcbiAgICAgIHBvaW50ZXJUeXBlOiBcIm1vdXNlXCJcclxuICAgIH0pKTtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQodCwgYSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGU3KGUpIHtcclxuICByZXR1cm4gZSA/IHtcclxuICAgIHRhZ05hbWU6IGUudGFnTmFtZSB8fCB2b2lkIDAsXHJcbiAgICBhdXRvbWF0aW9uSWQ6IGUuZ2V0QXR0cmlidXRlPy4oXCJkYXRhLWF1dG9tYXRpb24taWRcIikgfHwgdm9pZCAwLFxyXG4gICAgcm9sZTogZS5nZXRBdHRyaWJ1dGU/LihcInJvbGVcIikgfHwgdm9pZCAwLFxyXG4gICAgYXJpYUxhYmVsOiBlLmdldEF0dHJpYnV0ZT8uKFwiYXJpYS1sYWJlbFwiKSB8fCB2b2lkIDAsXHJcbiAgICB0ZXh0OiBlWShlLnRleHRDb250ZW50KVxyXG4gIH0gOiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRlKGUpIHtcclxuICByZXR1cm4gKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZS5xdWVyeVNlbGVjdG9yID8gZS5xdWVyeVNlbGVjdG9yKEwpIDogbnVsbCkgPz8gZVxyXG59XHJcblxyXG5mdW5jdGlvbiB0dCh7XHJcbiAgb3B0aW9uSXRlbTogZSxcclxuICBjbGlja1RhcmdldDogdCxcclxuICByYXdDbGlja1RhcmdldDogciA9IG51bGwsXHJcbiAgY2xpY2tUYXJnZXRJbnNpZGVPcHRpb246IG4sXHJcbiAgdXNlZE9wdGlvbkZhbGxiYWNrOiBvLFxyXG4gIGNsaWVudFg6IGksXHJcbiAgY2xpZW50WTogYVxyXG59KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG9wdGlvbjogZTcoZSksXHJcbiAgICBjbGlja1RhcmdldDogZTcodCksXHJcbiAgICByYXdDbGlja1RhcmdldDogZTcociksXHJcbiAgICBjbGlja1RhcmdldEluc2lkZU9wdGlvbjogbixcclxuICAgIHVzZWRPcHRpb25GYWxsYmFjazogbyxcclxuICAgIC4uLnZvaWQgMCAhPT0gaSAmJiB2b2lkIDAgIT09IGEgPyB7XHJcbiAgICAgIGNsaWVudFg6IE1hdGgucm91bmQoaSksXHJcbiAgICAgIGNsaWVudFk6IE1hdGgucm91bmQoYSlcclxuICAgIH0gOiB7fVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdHIoZSwgdCkge1xyXG4gIHJldHVybiAoMCwgZC50cmlnZ2VyRXZlbnRzKSh0LCBbXCJmb2N1c1wiLCBcIm1vdXNlZG93blwiLCBcIm1vdXNldXBcIiwgXCJjbGlja1wiXSksIHQuY2xpY2s/LigpLCB0dCh7XHJcbiAgICBvcHRpb25JdGVtOiBlLFxyXG4gICAgY2xpY2tUYXJnZXQ6IHQsXHJcbiAgICBjbGlja1RhcmdldEluc2lkZU9wdGlvbjogITAsXHJcbiAgICB1c2VkT3B0aW9uRmFsbGJhY2s6IHQgIT09IGVcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB0bihlKSB7XHJcbiAgaWYgKCFlIHx8IFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZS5kaXNwYXRjaEV2ZW50KSByZXR1cm4gITE7XHJcbiAgbGV0IHQgPSBOdW1iZXIoZS5zY3JvbGxUb3ApIHx8IDAsXHJcbiAgICByID0gTnVtYmVyKGUuY2xpZW50SGVpZ2h0KSB8fCAwLFxyXG4gICAgbiA9IE51bWJlcihlLnNjcm9sbEhlaWdodCkgfHwgMCxcclxuICAgIG8gPSBNYXRoLm1heCg5NiwgTWF0aC5mbG9vciguNzUgKiByKSB8fCAxNjApLFxyXG4gICAgaSA9IG4gPiByID8gbiAtIHIgOiB0ICsgbyxcclxuICAgIGEgPSBNYXRoLm1pbih0ICsgbywgaSk7XHJcbiAgcmV0dXJuICEoYSA8PSB0KSAmJiAoZS5zY3JvbGxUb3AgPSBhLCBlLmRpc3BhdGNoRXZlbnQocnAoXCJzY3JvbGxcIikpLCAhMClcclxufVxyXG5cclxuZnVuY3Rpb24gdG8oKSB7XHJcbiAgaWYgKFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIGRvY3VtZW50IHx8IFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCkgcmV0dXJuIG51bGw7XHJcbiAgbGV0IGUgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoUikpO1xyXG4gIHJldHVybiBlLmZpbmQoZVgpID8/IG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gdGkoZSkge1xyXG4gIGUuc2Nyb2xsSW50b1ZpZXc/Lih7XHJcbiAgICBibG9jazogXCJjZW50ZXJcIixcclxuICAgIGlubGluZTogXCJuZWFyZXN0XCJcclxuICB9KTtcclxuICBsZXQgdCA9IHRlKGUpO1xyXG4gIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0IHx8IFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIGRvY3VtZW50IHx8XHJcbiAgICBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQpIHJldHVybiB0cihlLCB0KTtcclxuICBsZXQgciA9IGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgaWYgKCFyLndpZHRoIHx8ICFyLmhlaWdodCkgcmV0dXJuIHRyKGUsIHQpO1xyXG4gIGxldCBuID0gci5sZWZ0ICsgTWF0aC5taW4oMTYsIHIud2lkdGggLyAyKSxcclxuICAgIG8gPSByLnRvcCArIHIuaGVpZ2h0IC8gMixcclxuICAgIGkgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KG4sIG8pLFxyXG4gICAgYSA9ICFpIHx8IGkgPT09IGUgfHwgISFlLmNvbnRhaW5zPy4oaSksXHJcbiAgICBsID0gYSA/IGkgPz8gZSA6IHQ7XHJcbiAgZm9yIChsZXQgZSBvZiBbXCJwb2ludGVyb3ZlclwiLCBcIm1vdXNlb3ZlclwiLCBcInBvaW50ZXJtb3ZlXCIsIFwibW91c2Vtb3ZlXCIsIFwicG9pbnRlcmRvd25cIiwgXCJtb3VzZWRvd25cIixcclxuICAgICAgXCJwb2ludGVydXBcIiwgXCJtb3VzZXVwXCIsIFwiY2xpY2tcIlxyXG4gICAgXSkgZTkobCwgZSwgbiwgbyk7XHJcbiAgcmV0dXJuIGUuY2xpY2s/LigpLCB0dCh7XHJcbiAgICBvcHRpb25JdGVtOiBlLFxyXG4gICAgY2xpY2tUYXJnZXQ6IGwsXHJcbiAgICByYXdDbGlja1RhcmdldDogaSxcclxuICAgIGNsaWNrVGFyZ2V0SW5zaWRlT3B0aW9uOiBhLFxyXG4gICAgdXNlZE9wdGlvbkZhbGxiYWNrOiAhYSxcclxuICAgIGNsaWVudFg6IG4sXHJcbiAgICBjbGllbnRZOiBvXHJcbiAgfSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiB0YShlLCB0LCByID0gITEpIHtcclxuICBpZiAoIWUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJJbnB1dCBlbGVtZW50IG5vdCBmb3VuZFwiKTtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBsZXQgbiA9IG51bGwsXHJcbiAgICBvID0gKCkgPT4gZWcoZSksXHJcbiAgICBpID0gbygpLFxyXG4gICAgYSA9IGV2KGUsIGkpLFxyXG4gICAgcyA9IGVTKGUsIGkpLFxyXG4gICAgdSA9IGV3KGUsIGkpLFxyXG4gICAgYyA9IHMgfHwgdSxcclxuICAgIHAgPSBhIHx8IHMsXHJcbiAgICBtID0gYSAmJiAociB8fCBlYihpKSksXHJcbiAgICBoID0gYSB8fCBjLFxyXG4gICAgZyA9ICEoYSB8fCBjKSxcclxuICAgIHkgPSBhIHx8IGMsXHJcbiAgICB3ID0gIW0gJiYgKHAgfHwgdSksXHJcbiAgICBFID0gIW0sXHJcbiAgICB4ID0gbSB8fCBjLFxyXG4gICAgQyA9IG5ldyBNYXAsXHJcbiAgICBBID0gbmV3IE1hcCxcclxuICAgIGsgPSBudWxsLFxyXG4gICAgVCA9ICgpID0+ICgwLCBiLmdldE9yZGVyZWROb2RlcykoXHJcbiAgICAgICcuLy8qW0BkYXRhLWF1dG9tYXRpb24taWQ9XCJzZWxlY3RlZEl0ZW1MaXN0XCIgYW5kIEByb2xlPVwibGlzdGJveFwiXS8vKltAZGF0YS1hdXRvbWF0aW9uLWlkPVwibWVudUl0ZW1cIl0nLFxyXG4gICAgICBvKCkpLFxyXG4gICAgRiA9IGUgPT4gKDAsIGYud2FpdEZvckNvbmRpdGlvbikoKCkgPT4gZXgobygpLCBlKSwge1xyXG4gICAgICB0aW1lb3V0OiBlTyxcclxuICAgICAgaW50ZXJ2YWw6IDUwXHJcbiAgICB9KSxcclxuICAgIEkgPSAoZSwgdCkgPT4gKDAsIGYud2FpdEZvckNvbmRpdGlvbikoKCkgPT4gVCgpLmxlbmd0aCA+IGUsIHtcclxuICAgICAgdGltZW91dDogdCxcclxuICAgICAgaW50ZXJ2YWw6IDUwLFxyXG4gICAgICBvYnNlcnZlVGFyZ2V0OiBvKCkgPz8gdm9pZCAwXHJcbiAgICB9KSxcclxuICAgIGogPSBhc3luYyBlID0+IHtcclxuICAgICAgaWYgKCF4IHx8IGV4KG8oKSwgZSkpIHJldHVybiAhMTtcclxuICAgICAgbGV0IHQgPSBlcyhlKSxcclxuICAgICAgICByID0gQS5nZXQodCkgPz8gMDtcclxuICAgICAgcmV0dXJuICEociA+PSBlUikgJiYgKEEuc2V0KHQsIHIgKyAxKSwgbiA9IG51bGwsICEwKVxyXG4gICAgfTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHQubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGxldCBsID0gdFtpXSxcclxuICAgICAgdSA9IG8oKSxcclxuICAgICAgeCA9IGV6KGUsIHUpLFxyXG4gICAgICBBID0gZVkobCk7XHJcbiAgICBpZiAoRSAmJiBudWxsICE9PSBrKSB7XHJcbiAgICAgIGxldCBlID0gYXdhaXQgKDAsIGYud2FpdEZvckNvbmRpdGlvbikoKCkgPT4gVCgpLmxlbmd0aCA+IGssIHtcclxuICAgICAgICB0aW1lb3V0OiBlTyxcclxuICAgICAgICBpbnRlcnZhbDogNTAsXHJcbiAgICAgICAgb2JzZXJ2ZVRhcmdldDogbygpID8/IHZvaWQgMFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGsgPSBudWxsLCBlKSBicmVha1xyXG4gICAgfVxyXG4gICAgaWYgKGV4KHUsIGwpKSB7XHJcbiAgICAgIGlmICghbSkgYnJlYWs7XHJcbiAgICAgIGNvbnRpbnVlXHJcbiAgICB9XHJcbiAgICBpZiAoIW0gJiYgVCgpLmxlbmd0aCA+IDAgJiYgKGF3YWl0IGV5KGUpLCBuID0gbnVsbCwgYXdhaXQgKDAsIHYuZGVsYXkpKDUwKSksIChuIHx8IFQoKVxyXG4gICAgICAgIC5sZW5ndGggPiAwKSAmJiAhbSkgYnJlYWs7XHJcbiAgICBhd2FpdCAoMCwgdi5kZWxheSkoNTApO1xyXG4gICAgbGV0IEQgPSBlSigpO1xyXG4gICAgZTAoZSksIGF3YWl0ICgwLCB2LmRlbGF5KSgxMDApO1xyXG4gICAgbGV0IFAgPSBhd2FpdCAoMCwgUy5kZWZhdWx0KSgoKSA9PiBlWihlLCBELCAhMSksICgpID0+ICExLCBELnNpemUgPiAwID8gOCA6IDEpID8/IGVaKGUsIEQsICFcclxuICAgICAgMCkgPz8gZTtcclxuICAgIGVVLnNldChQLCBlKTtcclxuICAgIGxldCBfID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBQLmNsb3Nlc3QsXHJcbiAgICAgIEwgPSBUKCkubGVuZ3RoLFxyXG4gICAgICBSID0gZVEoZSwgUCwgRCkgPz8gKF8gPyBhd2FpdCAoMCwgUy5kZWZhdWx0KSgoKSA9PiBlUShlLCBQLCBEKSwgKCkgPT4gITEsIGVNKSA6IG51bGwpLFxyXG4gICAgICBPID0gJy4vLypbQGRhdGEtYXV0b21hdGlvbi1pZD1cIm1lbnVJdGVtXCIgYW5kIEByb2xlPVwib3B0aW9uXCJdJyxcclxuICAgICAgTSA9ICgpID0+IChSID0gUiA/PyBlUShlLCBQLCBEKSkgPyAoMCwgYi5nZXRPcmRlcmVkTm9kZXMpKE8sIFIpIDogKDAsIGIuZ2V0T3JkZXJlZE5vZGVzKShcclxuICAgICAgICAnLy8qW0BkYXRhLWF1dG9tYXRpb24taWQ9XCJhY3RpdmVMaXN0Q29udGFpbmVyXCIgYW5kIEByb2xlPVwibGlzdGJveFwiXS8vKltAZGF0YS1hdXRvbWF0aW9uLWlkPVwibWVudUl0ZW1cIiBhbmQgQHJvbGU9XCJvcHRpb25cIl0nXHJcbiAgICAgICAgKSxcclxuICAgICAgTiA9IGVtKE0oKSksXHJcbiAgICAgICQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF3IHx8ICFlQShvKCksIGwpKSByZXR1cm4gITE7XHJcbiAgICAgICAgbGV0IHQgPSBlcyhsKSxcclxuICAgICAgICAgIHIgPSBDLmdldCh0KSA/PyAwO1xyXG4gICAgICAgIHJldHVybiAhKHIgPj0gMikgJiYgKEMuc2V0KHQsIHIgKyAxKSwgYXdhaXQgZXkoZSksIG4gPSBudWxsLCBpIC09IDEsICEwKVxyXG4gICAgICB9LCBCID0gRGF0ZS5ub3coKTtcclxuICAgIGlmIChlMihQLCBsICsgXCJcIiksIGU4KFApLCBSID0gUiA/PyAoXyA/IGF3YWl0ICgwLCBTLmRlZmF1bHQpKCgpID0+IGVRKGUsIFAsIEQpLCAoKSA9PiAhMSxcclxuICAgICAgICBlTSkgOiBudWxsKSwgYXdhaXQgJCgpKSBjb250aW51ZTtcclxuICAgIGxldCBxID0gMCxcclxuICAgICAgVSA9IDAsXHJcbiAgICAgIEggPSAwLFxyXG4gICAgICBZID0gMCxcclxuICAgICAgeiA9IFwiXCIsXHJcbiAgICAgIFYgPSAwLFxyXG4gICAgICBXID0gITEsXHJcbiAgICAgIEcgPSBjID8gZUQgOiBhID8gZVAgOiBlaixcclxuICAgICAgSyA9IGEgPyBlSSA6IGVGLFxyXG4gICAgICBYID0gITEsXHJcbiAgICAgIEogPSAoZSwgdCA9IHt9KSA9PiBlaChsICsgXCJcIiwgZSwge1xyXG4gICAgICAgIHN0cmljdDogdC5zdHJpY3QgPz8gcCxcclxuICAgICAgICBhbGxvd0Z1enp5OiAhaCxcclxuICAgICAgICBhbGxvd0ZpcnN0Q2FuZGlkYXRlRmFsbGJhY2s6ICExLFxyXG4gICAgICAgIGFsbG93RXhwYW5kZWRNYXRjaDogIXNcclxuICAgICAgfSk7XHJcbiAgICBpZiAoZVYoXCJzdGFydFwiLCB7XHJcbiAgICAgICAgZmllbGQ6IHgsXHJcbiAgICAgICAgdmFsdWU6IEEsXHJcbiAgICAgICAgdmFsdWVJbmRleDogaSxcclxuICAgICAgICB2YWx1ZXNDb3VudDogdC5sZW5ndGgsXHJcbiAgICAgICAgbXVsdGk6IHIsXHJcbiAgICAgICAgc2hvdWxkRmlsbE11bHRpcGxlOiBtLFxyXG4gICAgICAgIG5vTWF0Y2hTdGFibGVSZXRyeTogRyxcclxuICAgICAgICBtYXhTZWFyY2hPcHRpb25SZXRyeTogS1xyXG4gICAgICB9KSwgbiA9IGF3YWl0ICgwLCBTLmRlZmF1bHQpKCgpID0+IHtcclxuICAgICAgICBpZiAoZXgobygpLCBsKSkgcmV0dXJuIFggPSAhMCwgZVYoXCJzZWxlY3RlZC1kdXJpbmctc2VhcmNoXCIsIHtcclxuICAgICAgICAgIGZpZWxkOiB4LFxyXG4gICAgICAgICAgdmFsdWU6IEEsXHJcbiAgICAgICAgICBlbGFwc2VkTXM6IERhdGUubm93KCkgLSBCLFxyXG4gICAgICAgICAgcmV0cnlDb3VudDogVSxcclxuICAgICAgICAgIHJlc3VibWl0Q291bnQ6IEhcclxuICAgICAgICB9KSwgbnVsbDtcclxuICAgICAgICBpZiAoRSAmJiBUKCkubGVuZ3RoID4gTCkgcmV0dXJuIFggPSAhMCwgZVYoXCJjb21taXR0ZWQtZHVyaW5nLXNlYXJjaFwiLCB7XHJcbiAgICAgICAgICBmaWVsZDogeCxcclxuICAgICAgICAgIHZhbHVlOiBBLFxyXG4gICAgICAgICAgZWxhcHNlZE1zOiBEYXRlLm5vdygpIC0gQixcclxuICAgICAgICAgIHJldHJ5Q291bnQ6IFUsXHJcbiAgICAgICAgICByZXN1Ym1pdENvdW50OiBILFxyXG4gICAgICAgICAgZmlsbGVkQ291bnRCZWZvcmVTZWxlY3Q6IEwsXHJcbiAgICAgICAgICBmaWxsZWRDb3VudEFmdGVyU2VsZWN0OiBUKCkubGVuZ3RoXHJcbiAgICAgICAgfSksIG51bGw7XHJcbiAgICAgICAgbGV0IGUgPSBNKCksXHJcbiAgICAgICAgICB0ID0gZW0oZSksXHJcbiAgICAgICAgICByID0gISFOICYmIHQgPT09IE47XHJcbiAgICAgICAgaWYgKHIpIHtcclxuICAgICAgICAgIGxldCB0ID0gSihlLCB7XHJcbiAgICAgICAgICAgIHN0cmljdDogITBcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIHQgJiYgZVYoXCJtYXRjaFwiLCB7XHJcbiAgICAgICAgICAgIGZpZWxkOiB4LFxyXG4gICAgICAgICAgICB2YWx1ZTogQSxcclxuICAgICAgICAgICAgZWxhcHNlZE1zOiBEYXRlLm5vdygpIC0gQixcclxuICAgICAgICAgICAgcmV0cnlDb3VudDogVSxcclxuICAgICAgICAgICAgcmVzdWJtaXRDb3VudDogSCxcclxuICAgICAgICAgICAgb3B0aW9uVGV4dDogZVkodC50ZXh0Q29udGVudCksXHJcbiAgICAgICAgICAgIG9wdGlvbnNBcmVTdGFsZTogITAsXHJcbiAgICAgICAgICAgIG9wdGlvbnNDb3VudDogZS5sZW5ndGhcclxuICAgICAgICAgIH0pLCB0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBuID0gSihlKTtcclxuICAgICAgICByZXR1cm4gbiAmJiBlVihcIm1hdGNoXCIsIHtcclxuICAgICAgICAgIGZpZWxkOiB4LFxyXG4gICAgICAgICAgdmFsdWU6IEEsXHJcbiAgICAgICAgICBlbGFwc2VkTXM6IERhdGUubm93KCkgLSBCLFxyXG4gICAgICAgICAgcmV0cnlDb3VudDogVSxcclxuICAgICAgICAgIHJlc3VibWl0Q291bnQ6IEgsXHJcbiAgICAgICAgICBvcHRpb25UZXh0OiBlWShuLnRleHRDb250ZW50KSxcclxuICAgICAgICAgIG9wdGlvbnNBcmVTdGFsZTogITEsXHJcbiAgICAgICAgICBvcHRpb25zQ291bnQ6IGUubGVuZ3RoXHJcbiAgICAgICAgfSksIG5cclxuICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgIGlmIChleChvKCksIGwpKSByZXR1cm4gWCA9ICEwLCBlVihcInNlbGVjdGVkLWR1cmluZy1zZWFyY2hcIiwge1xyXG4gICAgICAgICAgZmllbGQ6IHgsXHJcbiAgICAgICAgICB2YWx1ZTogQSxcclxuICAgICAgICAgIGVsYXBzZWRNczogRGF0ZS5ub3coKSAtIEIsXHJcbiAgICAgICAgICByZXRyeUNvdW50OiBVLFxyXG4gICAgICAgICAgcmVzdWJtaXRDb3VudDogSFxyXG4gICAgICAgIH0pLCAhMDtcclxuICAgICAgICBpZiAoRSAmJiBUKCkubGVuZ3RoID4gTCkgcmV0dXJuIFggPSAhMCwgZVYoXCJjb21taXR0ZWQtZHVyaW5nLXNlYXJjaFwiLCB7XHJcbiAgICAgICAgICBmaWVsZDogeCxcclxuICAgICAgICAgIHZhbHVlOiBBLFxyXG4gICAgICAgICAgZWxhcHNlZE1zOiBEYXRlLm5vdygpIC0gQixcclxuICAgICAgICAgIHJldHJ5Q291bnQ6IFUsXHJcbiAgICAgICAgICByZXN1Ym1pdENvdW50OiBILFxyXG4gICAgICAgICAgZmlsbGVkQ291bnRCZWZvcmVTZWxlY3Q6IEwsXHJcbiAgICAgICAgICBmaWxsZWRDb3VudEFmdGVyU2VsZWN0OiBUKCkubGVuZ3RoXHJcbiAgICAgICAgfSksICEwO1xyXG4gICAgICAgIFUgKz0gMTtcclxuICAgICAgICBsZXQgdCA9IE0oKSxcclxuICAgICAgICAgIHIgPSBlbSh0KSxcclxuICAgICAgICAgIG4gPSAhIU4gJiYgciA9PT0gTixcclxuICAgICAgICAgIGkgPSBuID8gSih0LCB7XHJcbiAgICAgICAgICAgIHN0cmljdDogITBcclxuICAgICAgICAgIH0pIDogSih0KTtcclxuICAgICAgICBpZiAoaSkgcmV0dXJuIHEgPSAwLCB6ID0gXCJcIiwgViA9IDAsICExO1xyXG4gICAgICAgIGxldCBzID0gZUgodCwgUiksXHJcbiAgICAgICAgICB1ID0gdC5zb21lKGUgPT4gIWVmKGUpKTtcclxuICAgICAgICBpZiAocykge1xyXG4gICAgICAgICAgVyB8fCAoVyA9ICEwLCBlVihcIm5vLW1hdGNoLW9ic2VydmVkXCIsIHtcclxuICAgICAgICAgICAgZmllbGQ6IHgsXHJcbiAgICAgICAgICAgIHZhbHVlOiBBLFxyXG4gICAgICAgICAgICBlbGFwc2VkTXM6IERhdGUubm93KCkgLSBCLFxyXG4gICAgICAgICAgICByZXRyeUNvdW50OiBVLFxyXG4gICAgICAgICAgICByZXN1Ym1pdENvdW50OiBILFxyXG4gICAgICAgICAgICBub01hdGNoU3RhYmxlUmV0cnk6IEcsXHJcbiAgICAgICAgICAgIG9wdGlvbnNDb3VudDogdC5sZW5ndGgsXHJcbiAgICAgICAgICAgIGhhc1NlYXJjaGFibGVPcHRpb25zOiB1XHJcbiAgICAgICAgICB9KSksIHogPSBcIlwiLCBWID0gMCwgcSArPSAxO1xyXG4gICAgICAgICAgbGV0IGUgPSBxID49IEc7XHJcbiAgICAgICAgICByZXR1cm4gZSAmJiBlVihcIm5vLW1hdGNoLXNraXBcIiwge1xyXG4gICAgICAgICAgICBmaWVsZDogeCxcclxuICAgICAgICAgICAgdmFsdWU6IEEsXHJcbiAgICAgICAgICAgIGVsYXBzZWRNczogRGF0ZS5ub3coKSAtIEIsXHJcbiAgICAgICAgICAgIHJldHJ5Q291bnQ6IFUsXHJcbiAgICAgICAgICAgIHJlc3VibWl0Q291bnQ6IEgsXHJcbiAgICAgICAgICAgIG5vTWF0Y2hSZXRyeUNvdW50OiBxLFxyXG4gICAgICAgICAgICBub01hdGNoU3RhYmxlUmV0cnk6IEcsXHJcbiAgICAgICAgICAgIG9wdGlvbnNDb3VudDogdC5sZW5ndGgsXHJcbiAgICAgICAgICAgIGhhc1NlYXJjaGFibGVPcHRpb25zOiB1XHJcbiAgICAgICAgICB9KSwgZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeSAmJiB1ICYmICFzICYmIFUgJSA0ID09IDAgJiYgdG4oUiA/PyB0bygpKSkgcmV0dXJuIFkgKz0gMSwgZVYoXHJcbiAgICAgICAgXCJ2aXJ0dWFsaXplZC1zY3JvbGxcIiwge1xyXG4gICAgICAgICAgZmllbGQ6IHgsXHJcbiAgICAgICAgICB2YWx1ZTogQSxcclxuICAgICAgICAgIGVsYXBzZWRNczogRGF0ZS5ub3coKSAtIEIsXHJcbiAgICAgICAgICByZXRyeUNvdW50OiBVLFxyXG4gICAgICAgICAgcmVzdWJtaXRDb3VudDogSCxcclxuICAgICAgICAgIHNjcm9sbENvdW50OiBZLFxyXG4gICAgICAgICAgb3B0aW9uc0NvdW50OiB0Lmxlbmd0aCxcclxuICAgICAgICAgIG9wdGlvblNpZ25hdHVyZTogZVkocilcclxuICAgICAgICB9KSwgITE7XHJcbiAgICAgICAgbGV0IGQgPSBtIHx8IGEgfHwgYyxcclxuICAgICAgICAgIGYgPSBkICYmIHQubGVuZ3RoID4gMCAmJiBVICUgZUwgPT0gMCAmJiAobSB8fCBIIDwgMSk7XHJcbiAgICAgICAgaWYgKGYpIHtcclxuICAgICAgICAgIGxldCByID0gZVooZSk7XHJcbiAgICAgICAgICBlMihyLCBsICsgXCJcIiksIGU4KHIpLCBIICs9IDEsIGVWKFwicmVzdWJtaXRcIiwge1xyXG4gICAgICAgICAgICBmaWVsZDogeCxcclxuICAgICAgICAgICAgdmFsdWU6IEEsXHJcbiAgICAgICAgICAgIGVsYXBzZWRNczogRGF0ZS5ub3coKSAtIEIsXHJcbiAgICAgICAgICAgIHJldHJ5Q291bnQ6IFUsXHJcbiAgICAgICAgICAgIHJlc3VibWl0Q291bnQ6IEgsXHJcbiAgICAgICAgICAgIG9wdGlvbnNDb3VudDogdC5sZW5ndGgsXHJcbiAgICAgICAgICAgIG9wdGlvbnNBcmVTdGFsZTogblxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGcgJiYgdSAmJiAhcyAmJiAoSCA+IDAgfHwgVSA+PSBlTCkpIHtcclxuICAgICAgICAgIHIgPT09IHogPyBWICs9IDEgOiAoeiA9IHIsIFYgPSAxKTtcclxuICAgICAgICAgIGxldCBlID0gViA+PSBlXztcclxuICAgICAgICAgIHJldHVybiBlICYmIGVWKFwibm9uLW1hdGNoaW5nLW9wdGlvbnMtc2tpcFwiLCB7XHJcbiAgICAgICAgICAgIGZpZWxkOiB4LFxyXG4gICAgICAgICAgICB2YWx1ZTogQSxcclxuICAgICAgICAgICAgZWxhcHNlZE1zOiBEYXRlLm5vdygpIC0gQixcclxuICAgICAgICAgICAgcmV0cnlDb3VudDogVSxcclxuICAgICAgICAgICAgcmVzdWJtaXRDb3VudDogSCxcclxuICAgICAgICAgICAgc3RhYmxlQ291bnQ6IFYsXHJcbiAgICAgICAgICAgIG9wdGlvbnNDb3VudDogdC5sZW5ndGgsXHJcbiAgICAgICAgICAgIG9wdGlvblNpZ25hdHVyZTogZVkocilcclxuICAgICAgICAgIH0pLCBlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB6ID0gXCJcIiwgViA9IDAsIHEgPSAwLCAhMVxyXG4gICAgICB9LCBLKSwgIWF3YWl0ICQoKSkge1xyXG4gICAgICBpZiAoWCkge1xyXG4gICAgICAgIGlmIChlVihcImVuZC1zZWxlY3RlZC1kdXJpbmctc2VhcmNoXCIsIHtcclxuICAgICAgICAgICAgZmllbGQ6IHgsXHJcbiAgICAgICAgICAgIHZhbHVlOiBBLFxyXG4gICAgICAgICAgICBlbGFwc2VkTXM6IERhdGUubm93KCkgLSBCLFxyXG4gICAgICAgICAgICByZXRyeUNvdW50OiBVLFxyXG4gICAgICAgICAgICByZXN1Ym1pdENvdW50OiBIXHJcbiAgICAgICAgICB9KSwgIW0pIGJyZWFrO1xyXG4gICAgICAgIGNvbnRpbnVlXHJcbiAgICAgIH1cclxuICAgICAgaWYgKG4pIHtcclxuICAgICAgICBsZXQgZSA9IHRpKG4pLFxyXG4gICAgICAgICAgdCA9IFQoKS5sZW5ndGgsXHJcbiAgICAgICAgICByID0gYXdhaXQgSShMLCAyNTApO1xyXG4gICAgICAgIGlmIChyICYmICh0ID0gVCgpLmxlbmd0aCksICFyKSB7XHJcbiAgICAgICAgICBlMShQKTtcclxuICAgICAgICAgIGxldCBlID0gYXdhaXQgSShMLCBlTyk7XHJcbiAgICAgICAgICB0ID0gVCgpLmxlbmd0aCwgRSAmJiAhZSAmJiB0IDw9IEwgJiYgKGsgPSBMKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZVYoXCJlbmQtb3B0aW9uLWNsaWNrZWRcIiwge1xyXG4gICAgICAgICAgICBmaWVsZDogeCxcclxuICAgICAgICAgICAgdmFsdWU6IEEsXHJcbiAgICAgICAgICAgIGVsYXBzZWRNczogRGF0ZS5ub3coKSAtIEIsXHJcbiAgICAgICAgICAgIHJldHJ5Q291bnQ6IFUsXHJcbiAgICAgICAgICAgIHJlc3VibWl0Q291bnQ6IEgsXHJcbiAgICAgICAgICAgIGRpZENvbW1pdEFmdGVyQ2xpY2s6IHIsXHJcbiAgICAgICAgICAgIGZpbGxlZENvdW50QmVmb3JlU2VsZWN0OiBMLFxyXG4gICAgICAgICAgICBmaWxsZWRDb3VudEFmdGVyU2VsZWN0OiB0LFxyXG4gICAgICAgICAgICBjbGljazogZVxyXG4gICAgICAgICAgfSksICgwLCBkLnRyaWdnZXJFdmVudHMpKFAsIFtcImtleXByZXNzXCJdKSwgdCA8PSBMICYmICFhd2FpdCBGKGwpICYmIGF3YWl0IGoobCkpIHtcclxuICAgICAgICAgIGkgLT0gMTtcclxuICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbSkgYnJlYWs7XHJcbiAgICAgICAgYXdhaXQgKDAsIHYuZGVsYXkpKDIwMCksICgwLCBkLnRyaWdnZXJFdmVudHMpKFAsIFtcImtleXByZXNzXCJdKVxyXG4gICAgICB9IGVsc2UgZVYoXCJlbmQtbm8tb3B0aW9uXCIsIHtcclxuICAgICAgICBmaWVsZDogeCxcclxuICAgICAgICB2YWx1ZTogQSxcclxuICAgICAgICBlbGFwc2VkTXM6IERhdGUubm93KCkgLSBCLFxyXG4gICAgICAgIHJldHJ5Q291bnQ6IFUsXHJcbiAgICAgICAgcmVzdWJtaXRDb3VudDogSCxcclxuICAgICAgICBub01hdGNoUmV0cnlDb3VudDogcSxcclxuICAgICAgICBtYXhTZWFyY2hPcHRpb25SZXRyeTogS1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0oMCwgbC50cmlnZ2VyVGFiRXZlbnQpKGUpLCBhd2FpdCAoMCwgdi5kZWxheSkoMjAwKSwgYXdhaXQgZTUoZSksIHRsKHtcclxuICAgIGFsbG93UGFnZUNsaWNrRmFsbGJhY2s6IGUzKClcclxuICB9KSwgYXdhaXQgKDAsIGYud2FpdEZvckNvbmRpdGlvbikoKCkgPT4gIWUzKCksIHtcclxuICAgIHRpbWVvdXQ6IDgwMCxcclxuICAgIGludGVydmFsOiA1MCxcclxuICAgIG9ic2VydmVUYXJnZXQ6IGRvY3VtZW50LmJvZHlcclxuICB9KSwgZTYoZSlcclxufVxyXG5cclxuZnVuY3Rpb24gdGwoe1xyXG4gIGFsbG93UGFnZUNsaWNrRmFsbGJhY2s6IGUgPSAhMVxyXG59ID0ge30pIHtcclxuICBsZXQgdCA9ICgwLCBiLmdldEZpcnN0T3JkZXJlZE5vZGUpKCcvLypbQGlkPVwibWFpbkNvbnRlbnRcIl0gfCAvL21haW4nKTtcclxuICBpZiAoZSAmJiBlNCgpLCB0KSB7XHJcbiAgICB0LmZvY3VzPy4oKSwgZSAmJiB0LmNsaWNrPy4oKTtcclxuICAgIGZvciAobGV0IGUgPSAwOyBlIDwgMzsgZSsrKSgwLCBkLnRyaWdnZXJFdmVudHMpKHQsIFtcImNsaWNrXCJdKSwgKDAsIGQudHJpZ2dlckV2ZW50cykodCwgW1xyXG4gICAgICBcIm1vdXNlZG93blwiXHJcbiAgICBdKSwgKDAsIGQudHJpZ2dlckV2ZW50cykodCwgW1wibW91c2V1cFwiXSlcclxuICB9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdHMoZSwgdCkge1xyXG4gIGxldCByID0gdGgoZSksXHJcbiAgICBuID0gYXdhaXQgcShlLCB0KTtcclxuICBpZiAobiAmJiBhd2FpdCB0eShlLCB0LCByKSkgcmV0dXJuICEwO1xyXG4gIGxldCBvID0gZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpLFxyXG4gICAgaSA9IG8gPyBgLy91bFtAcm9sZT1cImxpc3Rib3hcIl1bQGlkPVwiJHtvfVwiXVtAdGFiaW5kZXg9XCItMVwiXS9saVtAaWQhPVwic2VsZWN0LW9uZVwiXWAgOlxyXG4gICAgJy8vdWxbQHJvbGU9XCJsaXN0Ym94XCJdW0B0YWJpbmRleD1cIi0xXCJdL2xpW0BpZCE9XCJzZWxlY3Qtb25lXCJdJyxcclxuICAgIGEgPSBudWxsO1xyXG4gIGZvciAobGV0IG4gPSAwOyBuIDwgZXE7IG4gKz0gMSkge1xyXG4gICAgMCA9PT0gKDAsIGIuZ2V0T3JkZXJlZE5vZGVzKShpKS5sZW5ndGggJiYgdHAoZSksIGF3YWl0ICgwLCBmLndhaXRGb3JDb25kaXRpb24pKCgpID0+ICgwLCBiXHJcbiAgICAgIC5nZXRPcmRlcmVkTm9kZXMpKGkpLmxlbmd0aCA+IDAsIHtcclxuICAgICAgdGltZW91dDogZU4sXHJcbiAgICAgIGludGVydmFsOiA1MCxcclxuICAgICAgb2JzZXJ2ZVRhcmdldDogZG9jdW1lbnQuYm9keVxyXG4gICAgfSk7XHJcbiAgICBsZXQgbiA9ICgwLCBiLmdldE9yZGVyZWROb2RlcykoaSk7XHJcbiAgICBmb3IgKGxldCBlIG9mIHQpXHJcbiAgICAgIGlmIChhID0gKDAsIHMuZmluZE1hdGNoT3B0aW9uKShuLCBlKSkgYnJlYWs7XHJcbiAgICBpZiAoIWEpIGJyZWFrO1xyXG4gICAgbGV0IG8gPSBhO1xyXG4gICAgaWYgKCgwLCBkLnRyaWdnZXJFdmVudHMpKG8sIFtcIm1vdXNlZG93blwiLCBcIm1vdXNldXBcIiwgXCJjbGlja1wiXSksIGF3YWl0ICgwLCBmLndhaXRGb3JDb25kaXRpb24pKFxyXG4gICAgICAgICgpID0+IHRiKGUsIHQsIHIsIG8pLCB7XHJcbiAgICAgICAgICB0aW1lb3V0OiBlJCxcclxuICAgICAgICAgIGludGVydmFsOiA1MCxcclxuICAgICAgICAgIG9ic2VydmVUYXJnZXQ6IGVcclxuICAgICAgICB9KSwgYXdhaXQgdHkoZSwgdCwgciwgbykgfHwgKG8uY2xpY2s/LigpLCBhd2FpdCAoMCwgZi53YWl0Rm9yQ29uZGl0aW9uKSgoKSA9PiB0YihlLCB0LCByLFxyXG4gICAgICAgIG8pLCB7XHJcbiAgICAgICAgdGltZW91dDogZSQsXHJcbiAgICAgICAgaW50ZXJ2YWw6IDUwLFxyXG4gICAgICAgIG9ic2VydmVUYXJnZXQ6IGVcclxuICAgICAgfSksIGF3YWl0IHR5KGUsIHQsIHIsIG8pKSkgcmV0dXJuICEwXHJcbiAgfVxyXG4gIHJldHVybiBlLmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKFwiYXJpYS1leHBhbmRlZFwiKT8udmFsdWUgPT09IFwidHJ1ZVwiICYmICh0cChlKSwgYXdhaXQgKDAsIGZcclxuICAgIC53YWl0Rm9yQ29uZGl0aW9uKSgoKSA9PiAwID09PSAoMCwgYi5nZXRPcmRlcmVkTm9kZXNTYWZlKShpKS5sZW5ndGgsIHtcclxuICAgIHRpbWVvdXQ6IGVOLFxyXG4gICAgaW50ZXJ2YWw6IDUwLFxyXG4gICAgb2JzZXJ2ZVRhcmdldDogZG9jdW1lbnQuYm9keVxyXG4gIH0pKSwgISEoYSAmJiBhd2FpdCB0eShlLCB0LCByLCBhKSlcclxufVxyXG5cclxuZnVuY3Rpb24gdHUoZSkge1xyXG4gIHJldHVybiAhIWUgJiYgITEgIT09IGUuaXNDb25uZWN0ZWQgJiYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZG9jdW1lbnQuY29udGFpbnMgfHwgZG9jdW1lbnRcclxuICAgIC5jb250YWlucyhlKSB8fCAhMSAhPT0gZS5pc0Nvbm5lY3RlZClcclxufVxyXG5cclxuZnVuY3Rpb24gdGMoZSkge1xyXG4gIHJldHVybiAoZSB8fCBcIlwiKS5yZXBsYWNlKFwiKlwiLCBcIlwiKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCkudG9Mb3dlckNhc2UoKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0ZChlLCB0KSB7XHJcbiAgbGV0IHIgPSB0YyhlLmxhYmVsKTtcclxuICByZXR1cm4gdC5maW5kKHQgPT4gdC50eXBlID09PSBlLnR5cGUgJiYgdGModC5sYWJlbCkgPT09IHIpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdGYoZSwgdCwgciA9IHguZ2V0UnVsZXMpIHtcclxuICBsZXQgbiA9ICEhdHUoZS4kaW5wdXQpICYmIGF3YWl0IHRzKGUuJGlucHV0LCB0KTtcclxuICBpZiAobikgcmV0dXJuICEwO1xyXG4gIGxldCBvID0gdGQoZSwgYXdhaXQgcigpKTtcclxuICByZXR1cm4gISFvICYmIG8uJGlucHV0ICE9PSBlLiRpbnB1dCAmJiAoT2JqZWN0LmFzc2lnbihlLCBvKSwgYXdhaXQgdHMoZS4kaW5wdXQsIHQpKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0cChlKSB7XHJcbiAgZS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIiwge1xyXG4gICAgYnViYmxlczogITAsXHJcbiAgICBjYW5jZWxhYmxlOiAhMCxcclxuICAgIHZpZXc6IHdpbmRvd1xyXG4gIH0pKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0bShlKSB7XHJcbiAgcmV0dXJuIGUucmVwbGFjZSgvW15hLXpBLVowLTlcXHNdL2csIFwiIFwiKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCkudG9Mb3dlckNhc2UoKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0aChlKSB7XHJcbiAgcmV0dXJuIHRtKGUudGV4dENvbnRlbnQgfHwgXCJcIilcclxufVxyXG5cclxuZnVuY3Rpb24gdGcoZSkge1xyXG4gIHJldHVybiAhZSB8fCBcInNlbGVjdCBvbmVcIiA9PT0gZVxyXG59XHJcblxyXG5mdW5jdGlvbiB0YihlLCB0LCByLCBuKSB7XHJcbiAgaWYgKCExID09PSBlLmlzQ29ubmVjdGVkICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZG9jdW1lbnQuY29udGFpbnMgJiYgIWRvY3VtZW50LmNvbnRhaW5zKGUpKVxyXG4gICAgcmV0dXJuICExO1xyXG4gIGxldCBvID0gdGgoZSk7XHJcbiAgaWYgKHRnKG8pKSByZXR1cm4gITE7XHJcbiAgbGV0IGkgPSBbLi4udC5tYXAoZSA9PiB0bShlKSksIHRtKG4/LnRleHRDb250ZW50IHx8IFwiXCIpXS5maWx0ZXIoQm9vbGVhbik7XHJcbiAgcmV0dXJuICEhaS5zb21lKGUgPT4gbyA9PT0gZSB8fCBvLmluY2x1ZGVzKGUpIHx8IGUuaW5jbHVkZXMobykpIHx8ICEhbiAmJiBvICE9PSByXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdHkoZSwgdCwgciwgbikge1xyXG4gIHJldHVybiAhIXRiKGUsIHQsIHIsIG4pICYmIChhd2FpdCAoMCwgdi5kZWxheSkoZUIpLCB0YihlLCB0LCByLCBuKSlcclxufVxyXG5cclxuZnVuY3Rpb24gdHYoKSB7XHJcbiAgcmV0dXJuICgwLCBiLmdldEZpcnN0T3JkZXJlZE5vZGUpKFxyXG4gICAgJy8vZGl2W0BhcmlhLWxhYmVsbGVkYnk9XCJSZXN1bWUvQ1Ytc2VjdGlvblwiXS8vaW5wdXRbQHR5cGU9XCJmaWxlXCJdJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICdpbnB1dFt0eXBlPVwiZmlsZVwiXVtkYXRhLWF1dG9tYXRpb24taWQ9XCJmaWxlLXVwbG9hZC1pbnB1dC1yZWZcIl0nKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0dygpIHtcclxuICByZXR1cm4gISF0digpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdFMoZSwgdCwgcikge1xyXG4gIGxldCBuID0gdHYoKTtcclxuICBpZiAoIW4pIHJldHVybiBcIm5vdC1hcHBsaWNhYmxlXCI7XHJcbiAgbGV0IG8gPSAoMCwgYi5nZXRGaXJzdE9yZGVyZWROb2RlKShcclxuICAgICAgJy8vZGl2W0BkYXRhLWF1dG9tYXRpb24taWQ9XCJmaWxlLXVwbG9hZC1pdGVtXCJdLy9idXR0b25bQGRhdGEtYXV0b21hdGlvbi1pZD1cImRlbGV0ZS1maWxlXCJdJyksXHJcbiAgICBpID0gMCxcclxuICAgIGEgPSAxNTtcclxuICBmb3IgKDsgbyAmJiBpIDwgYTspIGF3YWl0ICgwLCB2LmRlbGF5KSgxNTApLCBvLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiLCB7XHJcbiAgICBidWJibGVzOiAhMCxcclxuICAgIGNhbmNlbGFibGU6ICEwLFxyXG4gICAgdmlldzogd2luZG93XHJcbiAgfSkpLCBpKyssIGF3YWl0ICgwLCB2LmRlbGF5KSg1MCksIG8gPSAoMCwgYi5nZXRGaXJzdE9yZGVyZWROb2RlKShcclxuICAgICcvL2RpdltAZGF0YS1hdXRvbWF0aW9uLWlkPVwiZmlsZS11cGxvYWQtaXRlbVwiXS8vYnV0dG9uW0BkYXRhLWF1dG9tYXRpb24taWQ9XCJkZWxldGUtZmlsZVwiXScpO1xyXG4gIHJldHVybiBhd2FpdCAoMCwgZC51cGxvYWRGaWxlcykobiwgYXdhaXQgKDAsIHUuZmV0Y2hQZGZBc0Jsb2IpKGUpLCB0LCByLCBcIlJlc3VtZS9DVlwiKSxcclxuICAgIFwidXBsb2FkZWRcIlxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHRFKGUpIHtcclxuICBsZXQgdCA9IDM5LFxyXG4gICAgciA9IChlID8/IFtdKS5zbGljZSgwLCB0KTtcclxuICBpZiAoMCA9PT0gci5sZW5ndGgpIHJldHVybiAhMTtcclxuICBhd2FpdCAoMCwgdi5kZWxheSkoMTUwKSwgdGwoKTtcclxuICBsZXQgbiA9ICgwLCBiLmdldEZpcnN0T3JkZXJlZE5vZGUpKFxyXG4gICAgJy8vKltAZGF0YS1hdXRvbWF0aW9uLWlkPVwic2tpbGxzU2VjdGlvblwiIG9yIEBkYXRhLWF1dG9tYXRpb24taWQ9XCJmb3JtRmllbGQtc2tpbGxzXCIgb3IgY29udGFpbnMoQGlkLCBcInNraWxsc1wiKV0vL2lucHV0W0BwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXSdcclxuICAgICk7XHJcbiAgaWYgKCFuKSByZXR1cm4gITE7XHJcbiAgbGV0IG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgXCIjU2tpbGxzLXNlY3Rpb24gfiBkaXYgbGkgZGl2W2RhdGEtYXV0b21hdGlvbi1pZD1ERUxFVEVfY2hhcm1dXCIpO1xyXG4gIGlmIChvLmxlbmd0aCA+IDApIHtcclxuICAgIGZvciAobGV0IGUgb2YgQXJyYXkuZnJvbShvKSkgYXdhaXQgKDAsIHYuZGVsYXkpKDEwMCksICgwLCBkLnRyaWdnZXJFdmVudHMpKGUsIFtcIm1vdXNlZG93blwiLFxyXG4gICAgICBcIm1vdXNldXBcIiwgXCJjbGlja1wiXHJcbiAgICBdKTtcclxuICAgIGF3YWl0ICgwLCB2LmRlbGF5KSgxNTApXHJcbiAgfVxyXG4gIGF3YWl0IHRhKG4sIHIsICEwKSwgYXdhaXQgKDAsIHYuZGVsYXkpKDEwMCksIHRsKCk7XHJcbiAgbGV0IGkgPSBlQyhyLCBlRShlZyhuKSkpO1xyXG4gIHJldHVybiBjb25zb2xlLmluZm8oYFtNeVdvcmtkYXldW2F1dG9maWxsLWRlYnVnXSBza2lsbHM6c3VtbWFyeSAke0pTT04uc3RyaW5naWZ5KGkpfWApLCAwID09PSBpXHJcbiAgICAubWlzc2luZ1NraWxscy5sZW5ndGhcclxufVxyXG5hc3luYyBmdW5jdGlvbiB0eCgpIHtcclxuICBsZXQgZSA9ICgwLCBiLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKSgnLy9kaXZbQGRhdGEtYXV0b21hdGlvbi1pZD1cImFwcGx5Rmxvd015RXhwUGFnZVwiXScpO1xyXG4gIGUgJiYgKGF3YWl0IHRDKCksIDAgPT09IHRJKCkgJiYgKGF3YWl0IHRrKCksIGF3YWl0ICgwLCBmLndhaXRGb3JDb25kaXRpb24pKHRVLCB7XHJcbiAgICB0aW1lb3V0OiAxZTMsXHJcbiAgICBvYnNlcnZlVGFyZ2V0OiBkb2N1bWVudC5ib2R5XHJcbiAgfSkpLCBhd2FpdCB0QSgpLCAwID09PSB0RigpICYmIChhd2FpdCB0VCgpLCBhd2FpdCAoMCwgZi53YWl0Rm9yQ29uZGl0aW9uKSh0VSwge1xyXG4gICAgdGltZW91dDogMWUzLFxyXG4gICAgb2JzZXJ2ZVRhcmdldDogZG9jdW1lbnQuYm9keVxyXG4gIH0pKSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiB0QygpIHtcclxuICBsZXQgZSA9ICgwLCBiLmdldE9yZGVyZWROb2Rlc1NhZmUpKCcuLy9idXR0b25bdGV4dCgpPVwiRGVsZXRlXCJdJywgKDAsIGIuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoYC8vKltAZGF0YS1hdXRvbWF0aW9uLWlkPVwid29ya0V4cGVyaWVuY2VTZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgIG9yIEBhcmlhLWxhYmVsbGVkYnk9XCJBZGQtYS1Kb2Itc2VjdGlvblwiXHJcbiAgICAgICAgICAgICAgICBvciBAYXJpYS1sYWJlbGxlZGJ5PVwiV29yay1FeHBlcmllbmNlLXNlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgb3IgQGFyaWEtbGFiZWxsZWRieT1cIldvcmstRXhwZXJpZW5jZS0qLXNlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgb3IgQGFyaWEtbGFiZWxsZWRieT1cIkpvYi1IaXN0b3J5L1dvcmstRXhwZXJpZW5jZS1zZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgIG9yIEBhcmlhLWxhYmVsbGVkYnk9XCJFbXBsb3ltZW50LUV4cGVyaWVuY2Utc2VjdGlvblwiXHJcbiAgICAgICAgICAgICAgICBvciBAYXJpYS1sYWJlbGxlZGJ5PVwiUHJvZmVzc2lvbmFsLUV4cGVyaWVuY2Utc2VjdGlvblwiXHJcbiAgICAgICAgICAgICAgICBvciBAYXJpYS1sYWJlbGxlZGJ5PVwiUmVsZXZhbnQtRXhwZXJpZW5jZS1zZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgIG9yIEBhcmlhLWxhYmVsbGVkYnk9XCJXaGVyZS1oYXZlLXlvdS13b3JrZWQ/LXNlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgb3IgQGFyaWEtbGFiZWxsZWRieT1cIkVtcGxveW1lbnQtSGlzdG9yeS1zZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgIG9yIEBhcmlhLWxhYmVsbGVkYnk9XCJFbXBsb3ltZW50LURldGFpbC1zZWN0aW9uXCJcclxuICAgICAgICAgICAgICBdYCkpO1xyXG4gIGlmIChlLmxlbmd0aCA+IDApXHJcbiAgICBmb3IgKGxldCB0IG9mIGUpIHQuY2xpY2soKSwgYXdhaXQgKDAsIHYuZGVsYXkpKDMwMClcclxufVxyXG5hc3luYyBmdW5jdGlvbiB0QSgpIHtcclxuICBsZXQgZSA9ICgwLCBiLmdldE9yZGVyZWROb2Rlc1NhZmUpKCcuLy9idXR0b25bdGV4dCgpPVwiRGVsZXRlXCJdJywgKDAsIGIuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoXHJcbiAgICBgLy8qWyR7TX1dYCkpO1xyXG4gIGlmIChlLmxlbmd0aCA+IDApXHJcbiAgICBmb3IgKGxldCB0IG9mIGUpIHQuY2xpY2soKSwgYXdhaXQgKDAsIHYuZGVsYXkpKDMwMClcclxufVxyXG5hc3luYyBmdW5jdGlvbiB0aygpIHtcclxuICBsZXQgZSA9IHRJKCksXHJcbiAgICB0ID0gKDAsIGIuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKGAuLy9idXR0b25bXHJcbiAgICAgIEBkYXRhLWF1dG9tYXRpb24taWQ9XCJhZGQtYnV0dG9uXCJcclxuICAgICAgb3IgQGRhdGEtYXV0b21hdGlvbi1pZD1cIkFkZFwiXHJcbiAgICAgIG9yIEBkYXRhLWF1dG9tYXRpb24taWQ9XCJBZGQgQW5vdGhlclwiXHJcbiAgICAgIG9yIEBhcmlhLWxhYmVsPVwiQWRkIEFub3RoZXIgV29yayBFeHBlcmllbmNlXCIgb3IgQGFyaWEtbGFiZWw9XCJBZGQgV29yayBFeHBlcmllbmNlXCJcclxuICAgICAgb3IgdGV4dCgpPVwiQWRkIEFub3RoZXJcIlxyXG4gICAgICBvciB0ZXh0KCk9XCJBZGRcIlxyXG4gICAgXWAsICgwLCBiLmdldEZpcnN0T3JkZXJlZE5vZGUpKGAvLypbQGRhdGEtYXV0b21hdGlvbi1pZD1cIndvcmtFeHBlcmllbmNlU2VjdGlvblwiXHJcbiAgICAgIG9yIEBhcmlhLWxhYmVsbGVkYnk9XCJBZGQtYS1Kb2Itc2VjdGlvblwiXHJcbiAgICAgIG9yIEBhcmlhLWxhYmVsbGVkYnk9XCJXb3JrLUV4cGVyaWVuY2Utc2VjdGlvblwiXHJcbiAgICAgIG9yIEBhcmlhLWxhYmVsbGVkYnk9XCJXb3JrLUV4cGVyaWVuY2UtKi1zZWN0aW9uXCJcclxuICAgICAgb3IgQGFyaWEtbGFiZWxsZWRieT1cIkpvYi1IaXN0b3J5L1dvcmstRXhwZXJpZW5jZS1zZWN0aW9uXCJcclxuICAgICAgb3IgQGFyaWEtbGFiZWxsZWRieT1cIkVtcGxveW1lbnQtRXhwZXJpZW5jZS1zZWN0aW9uXCJcclxuICAgICAgb3IgQGFyaWEtbGFiZWxsZWRieT1cIlByb2Zlc3Npb25hbC1FeHBlcmllbmNlLXNlY3Rpb25cIlxyXG4gICAgICBvciBAYXJpYS1sYWJlbGxlZGJ5PVwiUmVsZXZhbnQtRXhwZXJpZW5jZS1zZWN0aW9uXCJcclxuICAgICAgb3IgQGFyaWEtbGFiZWxsZWRieT1cIldoZXJlLWhhdmUteW91LXdvcmtlZD8tc2VjdGlvblwiXHJcbiAgICAgIG9yIEBhcmlhLWxhYmVsbGVkYnk9XCJXb3JrLW9yLU90aGVyLUV4cGVyaWVuY2Utc2VjdGlvblwiXHJcbiAgICAgIG9yIEBhcmlhLWxhYmVsbGVkYnk9XCJFbXBsb3ltZW50LUhpc3Rvcnktc2VjdGlvblwiXHJcbiAgICAgIG9yIEBhcmlhLWxhYmVsbGVkYnk9XCJXb3JrLUhpc3Rvcnktc2VjdGlvblwiXHJcbiAgICAgIG9yIEBhcmlhLWxhYmVsbGVkYnk9XCJXb3JrLUhpc3RvcnktKE9wdGlvbmFsKS1zZWN0aW9uXCJcclxuICAgICAgb3IgQGFyaWEtbGFiZWxsZWRieT1cIkVtcGxveW1lbnQtRGV0YWlsLXNlY3Rpb25cIlxyXG4gICAgXWApKTtcclxuICB0ICYmICh0LmNsaWNrKCksIGF3YWl0ICgwLCBmLndhaXRGb3JDb25kaXRpb24pKCgpID0+IHRJKCkgPiBlICYmIHRVKCksIHtcclxuICAgIHRpbWVvdXQ6IDE1MDAsXHJcbiAgICBpbnRlcnZhbDogNTAsXHJcbiAgICBvYnNlcnZlVGFyZ2V0OiBkb2N1bWVudC5ib2R5XHJcbiAgfSkpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdFQoKSB7XHJcbiAgbGV0IGUgPSB0RigpLFxyXG4gICAgdCA9ICgwLCBiLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShgLi8vYnV0dG9uWyhhbmNlc3Rvcjo6Klske019XSBhbmQgKEBkYXRhLWF1dG9tYXRpb24taWQ9XCJhZGQtYnV0dG9uXCIgb3IgQGRhdGEtYXV0b21hdGlvbi1pZD1cIkFkZFwiIG9yIEBkYXRhLWF1dG9tYXRpb24taWQ9XCJBZGQgQW5vdGhlclwiKSlcclxuICAgICAgICAgIG9yIEBhcmlhLWxhYmVsPVwiQWRkIEFub3RoZXIgRWR1Y2F0aW9uXCIgb3IgQGFyaWEtbGFiZWw9XCJBZGQgRWR1Y2F0aW9uXCJcclxuICAgICAgICAgIG9yIEBhcmlhLWxhYmVsPVwiQWRkIFNjaG9vbGluZ1wiIG9yIEBhcmlhLWxhYmVsPVwiQWRkIEFub3RoZXIgU2Nob29saW5nXCJcclxuICAgICAgICAgIG9yIEBhcmlhLWxhYmVsPVwiQWRkIFNjaG9vbHMgQXR0ZW5kZWRcIiBvciBAYXJpYS1sYWJlbD1cIkFkZCBBbm90aGVyIFNjaG9vbHMgQXR0ZW5kZWRcIlxyXG4gICAgICAgICAgb3IgKHN0YXJ0cy13aXRoKEBhcmlhLWxhYmVsLCBcIkFkZFwiKSBhbmQgY29udGFpbnMoQGFyaWEtbGFiZWwsIFwiRWR1Y2F0aW9uXCIpKVxyXG4gICAgICAgICAgb3IgdGV4dCgpPVwiQWRkIEFub3RoZXJcIlxyXG4gICAgICAgICAgb3IgdGV4dCgpPVwiQWRkXCJcclxuICAgICAgICBdYCwgKDAsIGIuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoYC8vKlske019XWApKTtcclxuICB0ICYmICh0LmNsaWNrKCksIGF3YWl0ICgwLCBmLndhaXRGb3JDb25kaXRpb24pKCgpID0+IHRGKCkgPiBlICYmIHRVKCksIHtcclxuICAgIHRpbWVvdXQ6IDE1MDAsXHJcbiAgICBpbnRlcnZhbDogNTAsXHJcbiAgICBvYnNlcnZlVGFyZ2V0OiBkb2N1bWVudC5ib2R5XHJcbiAgfSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRGKCkge1xyXG4gIGxldCBlID0gKDAsIGIuZ2V0T3JkZXJlZE5vZGVzKShgLy8qWyR7eC5lZHVjYXRpb25Hcm91cFhwYXRofV1gKTtcclxuICByZXR1cm4gZS5sZW5ndGhcclxufVxyXG5cclxuZnVuY3Rpb24gdEkoKSB7XHJcbiAgbGV0IGUgPSAoMCwgYi5nZXRPcmRlcmVkTm9kZXMpKGAvLypbJHt4LmVtcGxveW1lbnRHcm91cFhwYXRofV1gKTtcclxuICByZXR1cm4gZS5sZW5ndGhcclxufVxyXG5hc3luYyBmdW5jdGlvbiB0aihlKSB7XHJcbiAgYXdhaXQgdEQoZS5lZHVjYXRpb24ubGVuZ3RoKSwgYXdhaXQgdFAoZS53b3JrRXhwZXJpZW5jZS5sZW5ndGgpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdEQoZSkge1xyXG4gIGZvciAobGV0IHQgPSB0RigpOyB0IDwgZTsgdCArPSAxKSB7XHJcbiAgICBhd2FpdCB0VCgpO1xyXG4gICAgbGV0IGUgPSB0RigpO1xyXG4gICAgaWYgKGUgPD0gdCkgYnJlYWs7XHJcbiAgICB0ID0gZSAtIDFcclxuICB9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdFAoZSkge1xyXG4gIGZvciAobGV0IHQgPSB0SSgpOyB0IDwgZTsgdCArPSAxKSB7XHJcbiAgICBhd2FpdCB0aygpO1xyXG4gICAgbGV0IGUgPSB0SSgpO1xyXG4gICAgaWYgKGUgPD0gdCkgYnJlYWs7XHJcbiAgICB0ID0gZSAtIDFcclxuICB9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdF8oKSB7XHJcbiAgdGwoKSwgdEwoKSwgdFIoKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0TCgpIHtcclxuICBsZXQgZSA9ICgwLCBiLmdldE9yZGVyZWROb2RlcykoJy8vbGlbQHJvbGU9XCJvcHRpb25cIl1bQGFyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJdJyk7XHJcbiAgZm9yIChsZXQgdCBvZiBlKSB0LmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiLCB7XHJcbiAgICBidWJibGVzOiAhMCxcclxuICAgIGNhbmNlbGFibGU6ICEwLFxyXG4gICAgdmlldzogd2luZG93XHJcbiAgfSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRSKCkge1xyXG4gIGxldCBlID0gKDAsIGIuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoXHJcbiAgICAnLy91bFtAcm9sZT1cImxpc3Rib3hcIiBhbmQgQGFyaWEtYWN0aXZlZGVzY2VuZGFudD1cInNlbGVjdC1vbmVcIl0nKTtcclxuICBmb3IgKGxldCB0IG9mIGUpIHtcclxuICAgIGxldCBlID0gdC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSxcclxuICAgICAgciA9ICgwLCBiLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcclxuICAgICAgICBgLy9idXR0b25bQGFyaWEtaGFzcG9wdXA9XCJsaXN0Ym94XCIgYW5kIEBhcmlhLWNvbnRyb2xzPVwiJHtlfVwiXWApO1xyXG4gICAgciAmJiByLmNsaWNrKClcclxuICB9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdE8oZSwgdCkge1xyXG4gIGxldCByID0gKDAsIEUuZ2V0V29ya2RheURhdGVQYXJ0c0ZvckZpZWxkKShlLCB0KTtcclxuICBjb25zb2xlLmluZm8oXCJbTXlXb3JrZGF5XVthdXRvZmlsbC1kZWJ1Z10gZGF0ZS1maWxsOnN0YXJ0XCIsIHtcclxuICAgIHZhbHVlOiB0LFxyXG4gICAgZGF0ZVBhcnRzOiByLFxyXG4gICAgdGFyZ2V0OiB0TShlKVxyXG4gIH0pO1xyXG4gIGxldCBuID0gYXdhaXQgVShlLCByLm1vbnRoLCByLmRheSwgci55ZWFyKTtcclxuICBpZiAoY29uc29sZS5pbmZvKFwiW015V29ya2RheV1bYXV0b2ZpbGwtZGVidWddIGRhdGUtZmlsbDpmaWJlci1yZXN1bHRcIiwge1xyXG4gICAgICB2YWx1ZTogdCxcclxuICAgICAgZGF0ZVBhcnRzOiByLFxyXG4gICAgICBmaWJlclJlc3VsdDogbixcclxuICAgICAgdGFyZ2V0OiB0TShlKVxyXG4gICAgfSksIG4uc3VjY2Vzcykge1xyXG4gICAgYXdhaXQgdE4oZSwgcik7XHJcbiAgICBsZXQgbyA9IGF3YWl0IFUoZSwgci5tb250aCwgci5kYXksIHIueWVhcik7XHJcbiAgICBjb25zb2xlLmluZm8oXCJbTXlXb3JrZGF5XVthdXRvZmlsbC1kZWJ1Z10gZGF0ZS1maWxsOnBvc3QtY29tbWl0LXN5bmNcIiwge1xyXG4gICAgICB2YWx1ZTogdCxcclxuICAgICAgZGF0ZVBhcnRzOiByLFxyXG4gICAgICBmaWJlclJlc3VsdDogbyxcclxuICAgICAgdGFyZ2V0OiB0TShlKVxyXG4gICAgfSksIGF3YWl0ICgwLCB2LmRlbGF5KSgzNTApO1xyXG4gICAgbGV0IGkgPSAoMCwgRS5oYXNXb3JrZGF5RGF0ZVJlcXVpcmVkRXJyb3IpKGUpO1xyXG4gICAgcmV0dXJuIGNvbnNvbGUuaW5mbyhcIltNeVdvcmtkYXldW2F1dG9maWxsLWRlYnVnXSBkYXRlLWZpbGw6Y29tbWl0dGVkXCIsIHtcclxuICAgICAgdmFsdWU6IHQsXHJcbiAgICAgIGRhdGVQYXJ0czogcixcclxuICAgICAgaGFzUmVxdWlyZWRFcnJvcjogaSxcclxuICAgICAgdGFyZ2V0OiB0TShlKVxyXG4gICAgfSksICFpIHx8IChjb25zb2xlLndhcm4oXCJbTXlXb3JrZGF5XVthdXRvZmlsbC1kZWJ1Z10gZGF0ZS1maWxsOnJlcXVpcmVkLWVycm9yXCIsIHtcclxuICAgICAgdmFsdWU6IHQsXHJcbiAgICAgIGRhdGVQYXJ0czogcixcclxuICAgICAgZmliZXJSZXN1bHQ6IG4sXHJcbiAgICAgIHBvc3RDb21taXRGaWJlclJlc3VsdDogbyxcclxuICAgICAgdGFyZ2V0OiB0TShlKVxyXG4gICAgfSksICExKVxyXG4gIH1cclxuICBsZXQgbyA9IGUucXVlcnlTZWxlY3RvcignW2RhdGEtYXV0b21hdGlvbi1pZD1cImRhdGVTZWN0aW9uTW9udGgtaW5wdXRcIl0nKSxcclxuICAgIGkgPSBlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWF1dG9tYXRpb24taWQ9XCJkYXRlU2VjdGlvblllYXItaW5wdXRcIl0nKSxcclxuICAgIGEgPSBlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWF1dG9tYXRpb24taWQ9XCJkYXRlU2VjdGlvbkRheS1pbnB1dFwiXScpO1xyXG4gIHJldHVybiBhICYmIGF3YWl0IHRCKGEsIHIuZGF5IHx8IFwiMDFcIiksIG8gJiYgYXdhaXQgdEIobywgci5tb250aCB8fCBcIjAxXCIpLCBpICYmIGF3YWl0IHRCKGksIHJcclxuICAgIC55ZWFyKSwgYXdhaXQgdCQoZSksIGNvbnNvbGUuaW5mbyhcIltNeVdvcmtkYXldW2F1dG9maWxsLWRlYnVnXSBkYXRlLWZpbGw6ZmFsbGJhY2tcIiwge1xyXG4gICAgdmFsdWU6IHQsXHJcbiAgICBkYXRlUGFydHM6IHIsXHJcbiAgICB0YXJnZXQ6IHRNKGUpXHJcbiAgfSksICExXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRNKGUpIHtcclxuICBsZXQgdCA9IGUucXVlcnlTZWxlY3RvcignW2RhdGEtYXV0b21hdGlvbi1pZD1cImRhdGVTZWN0aW9uTW9udGgtaW5wdXRcIl0nKSxcclxuICAgIHIgPSBlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWF1dG9tYXRpb24taWQ9XCJkYXRlU2VjdGlvbkRheS1pbnB1dFwiXScpLFxyXG4gICAgbiA9IGUucXVlcnlTZWxlY3RvcignW2RhdGEtYXV0b21hdGlvbi1pZD1cImRhdGVTZWN0aW9uWWVhci1pbnB1dFwiXScpO1xyXG4gIHJldHVybiB7XHJcbiAgICBhdXRvbWF0aW9uSWQ6IGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hdXRvbWF0aW9uLWlkXCIpLFxyXG4gICAgdGV4dDogZS50ZXh0Q29udGVudD8ucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpLnNsaWNlKDAsIDI0MCksXHJcbiAgICBtb250aDogdD8udmFsdWUgPz8gbnVsbCxcclxuICAgIGRheTogcj8udmFsdWUgPz8gbnVsbCxcclxuICAgIHllYXI6IG4/LnZhbHVlID8/IG51bGwsXHJcbiAgICBoYXNSZXF1aXJlZEVycm9yOiAvcmVxdWlyZWQgYW5kIG11c3QgaGF2ZSBhIHZhbHVlL2kudGVzdChlLnRleHRDb250ZW50IHx8IFwiXCIpXHJcbiAgfVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHROKGUsIHQpIHtcclxuICBsZXQgciA9IGUucXVlcnlTZWxlY3RvcignW2RhdGEtYXV0b21hdGlvbi1pZD1cImRhdGVTZWN0aW9uTW9udGgtaW5wdXRcIl0nKSxcclxuICAgIG4gPSBlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWF1dG9tYXRpb24taWQ9XCJkYXRlU2VjdGlvbkRheS1pbnB1dFwiXScpLFxyXG4gICAgbyA9IGUucXVlcnlTZWxlY3RvcignW2RhdGEtYXV0b21hdGlvbi1pZD1cImRhdGVTZWN0aW9uWWVhci1pbnB1dFwiXScpO1xyXG4gIHIgJiYgdC5tb250aCAmJiBhd2FpdCB0QihyLCB0Lm1vbnRoKSwgbiAmJiB0LmRheSAmJiBhd2FpdCB0QihuLCB0LmRheSksIG8gJiYgYXdhaXQgdEIobywgdFxyXG4gICAgLnllYXIpLCBhd2FpdCB0JChlKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHQkKGUpIHtcclxuICBsZXQgdCA9IEFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJ1tkYXRhLWF1dG9tYXRpb24taWQ9XCJkYXRlU2VjdGlvbk1vbnRoLWlucHV0XCJdLCBbZGF0YS1hdXRvbWF0aW9uLWlkPVwiZGF0ZVNlY3Rpb25EYXktaW5wdXRcIl0sIFtkYXRhLWF1dG9tYXRpb24taWQ9XCJkYXRlU2VjdGlvblllYXItaW5wdXRcIl0nXHJcbiAgICApKTtcclxuICBmb3IgKGxldCBlIG9mIHQpIGUuZGlzcGF0Y2hFdmVudChuZXcgRm9jdXNFdmVudChcImJsdXJcIiwge1xyXG4gICAgYnViYmxlczogITAsXHJcbiAgICBjYW5jZWxhYmxlOiAhMSxcclxuICAgIHJlbGF0ZWRUYXJnZXQ6IG51bGwsXHJcbiAgICB2aWV3OiB3aW5kb3dcclxuICB9KSk7XHJcbiAgZS5kaXNwYXRjaEV2ZW50KG5ldyBGb2N1c0V2ZW50KFwiZm9jdXNvdXRcIiwge1xyXG4gICAgYnViYmxlczogITAsXHJcbiAgICBjYW5jZWxhYmxlOiAhMSxcclxuICAgIHJlbGF0ZWRUYXJnZXQ6IG51bGwsXHJcbiAgICB2aWV3OiB3aW5kb3dcclxuICB9KSksIGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIiwge1xyXG4gICAgYnViYmxlczogITBcclxuICB9KSksIGF3YWl0ICgwLCB2LmRlbGF5KSg1MClcclxufVxyXG5hc3luYyBmdW5jdGlvbiB0QihlLCB0KSB7XHJcbiAgZS5mb2N1cygpLCBhd2FpdCAoMCwgdi5kZWxheSkoMjApLCBlLnZhbHVlID0gdCwgZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwXHJcbiAgfSkpLCBlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwXHJcbiAgfSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRxKGUpIHtcclxuICBsZXQgdCA9ICgwLCBiLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShlKTtcclxuICBpZiAoIXQpIHJldHVybiAhMTtcclxuICBsZXQgciA9IHQucXVlcnlTZWxlY3RvckFsbChcIipcIik7XHJcbiAgZm9yIChsZXQgZSBvZiByKSB7XHJcbiAgICBsZXQgdCA9IGUudGV4dENvbnRlbnQ/LnRyaW0oKTtcclxuICAgIGlmICh0ICYmIC9sb2FkaW5nL2kudGVzdCh0KSkgcmV0dXJuICExXHJcbiAgfVxyXG4gIHJldHVybiAhMFxyXG59XHJcblxyXG5mdW5jdGlvbiB0VSgpIHtcclxuICByZXR1cm4gdHEoJy8vZGl2W0BkYXRhLWF1dG9tYXRpb24taWQ9XCJhcHBseUZsb3dNeUV4cFBhZ2VcIl0nKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0SCgpIHtcclxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICdbZGF0YS1hdXRvbWF0aW9uLWlkPVwicHJvZ3Jlc3NCYXJcIl0gW2RhdGEtYXV0b21hdGlvbi1pZD1cInByb2dyZXNzQmFyQWN0aXZlU3RlcFwiXSBsYWJlbDpsYXN0LW9mLXR5cGUnXHJcbiAgICApPy50ZXh0Q29udGVudD8udHJpbSgpIHx8IFwiXCJcclxufVxyXG5cclxuZnVuY3Rpb24gdFkoKSB7XHJcbiAgbGV0IGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXZbZGF0YS1hdXRvbWF0aW9uLWlkXj1cImZvcm1GaWVsZC1cIl0nKS5sZW5ndGggPiAwLFxyXG4gICAgdCA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYXV0b21hdGlvbi1pZD1cImFwcGx5Rmxvd015RXhwUGFnZVwiXScpO1xyXG4gIHJldHVybiAoISFlIHx8ICEhdCkgJiYgKCEvc2VsZiBpZGVudGlmeS9pLnRlc3QodEgoKSkgfHwgISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgJ1tkYXRhLWF1dG9tYXRpb24taWQ9XCJmb3JtRmllbGQtZGlzYWJpbGl0eVN0YXR1c1wiXSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sIFtkYXRhLWF1dG9tYXRpb24taWQ9XCJmb3JtRmllbGQtZGlzYWJpbGl0eVN0YXR1c1wiXSBpbnB1dFt0eXBlPVwicmFkaW9cIl0nXHJcbiAgICApKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHR6KCkge1xyXG4gIGF3YWl0ICgwLCBmLndhaXRGb3JDb25kaXRpb24pKCgpID0+IHRxKCcvL2RpdltAZGF0YS1hdXRvbWF0aW9uLWlkPVwiYXBwbHlGbG93UGFnZVwiXScpLCB7XHJcbiAgICB0aW1lb3V0OiA4ZTMsXHJcbiAgICBpbnRlcnZhbDogMTAwLFxyXG4gICAgb2JzZXJ2ZVRhcmdldDogZG9jdW1lbnQuYm9keVxyXG4gIH0pLCBhd2FpdCAoMCwgZi53YWl0Rm9yQ29uZGl0aW9uKSgoKSA9PiB0WSgpLCB7XHJcbiAgICB0aW1lb3V0OiAxNWUzLFxyXG4gICAgaW50ZXJ2YWw6IDIwMCxcclxuICAgIG9ic2VydmVUYXJnZXQ6IGRvY3VtZW50LmJvZHlcclxuICB9KTtcclxuICBsZXQgZSA9IC0xO1xyXG4gIGZvciAobGV0IHQgPSAwOyB0IDwgMTA7IHQrKykge1xyXG4gICAgbGV0IHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hdXRvbWF0aW9uLWlkXj1cImZvcm1GaWVsZC1cIl0nKSxcclxuICAgICAgciA9IHQubGVuZ3RoO1xyXG4gICAgaWYgKHIgPiAwICYmIHIgPT09IGUpIGJyZWFrO1xyXG4gICAgZSA9IHIsIGF3YWl0ICgwLCB2LmRlbGF5KSgzMDApXHJcbiAgfVxyXG59XHJcbmxldCB0ViA9XHJcbiAgJ2J1dHRvbltkYXRhLWF1dG9tYXRpb24taWQ9XCJwYWdlRm9vdGVyTmV4dEJ1dHRvblwiXSwgYnV0dG9uW2RhdGEtYXV0b21hdGlvbi1pZD1cImJvdHRvbS1uYXZpZ2F0aW9uLW5leHQtYnV0dG9uXCJdJyxcclxuICB0VyA9IG51bGwsXHJcbiAgdEcgPSAhMSxcclxuICB0SyA9IG51bGwsXHJcbiAgdFggPSBudWxsO1xyXG5cclxuZnVuY3Rpb24gdEooZSkge1xyXG4gIGlmIChudWxsID09IGUgfHwgXCJvYmplY3RcIiAhPSB0eXBlb2YgZSkgcmV0dXJuIGU7XHJcbiAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygc3RydWN0dXJlZENsb25lKSB0cnkge1xyXG4gICAgcmV0dXJuIHN0cnVjdHVyZWRDbG9uZShlKVxyXG4gIH0gY2F0Y2gge31cclxuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlKSlcclxufVxyXG5cclxuZnVuY3Rpb24gdFEoZSkge1xyXG4gIGxldCB0ID0gdEooZS5zdWJtaXRTbmFwc2hvdCB8fCB7fSksXHJcbiAgICByID0gZS5hZGRpdGlvbmFsU3VibWl0RGF0YSB8fCB7fTtcclxuICByZXR1cm4gdm9pZCAwICE9PSByLmVkdWNhdGlvbiAmJiAodC5lZHVjYXRpb24gPSB0SihyLmVkdWNhdGlvbikpLCB2b2lkIDAgIT09IHIuZW1wbG95bWVudCAmJiAodFxyXG4gICAgLmVtcGxveW1lbnQgPSB0SihyLmVtcGxveW1lbnQpKSwgdFxyXG59XHJcblxyXG5mdW5jdGlvbiB0WihlLCB0KSB7XHJcbiAgZSAmJiAoZS5zbmFwc2hvdCA9IHRRKHQpLCBlLmVkdWNhdGlvblRyYWNlUnVuSWQgPSAoMCwgbS5nZXRFZHVjYXRpb25UcmFjZVJ1bklkRnJvbVJlY29yZHMpKHRcclxuICAgIC5hZGRpdGlvbmFsU3VibWl0RGF0YT8uZWR1Y2F0aW9uKSA/PyBlLmVkdWNhdGlvblRyYWNlUnVuSWQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHQwKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBzdGVwOiAoMCwgZy5nZXRNeVdvcmtkYXlTdGVwU3RhdGUpKClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHQyKGUpIHtcclxuICByZXR1cm4gKGUgfHwgXCJcIikudHJpbSgpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRvTG93ZXJDYXNlKClcclxufVxyXG5cclxuZnVuY3Rpb24gdDEoZSwgdCkge1xyXG4gIHJldHVybiAhIWUgJiYgISF0ICYmIGUuaW5kZXggPT09IHQuaW5kZXggJiYgZS50b3RhbCA9PT0gdC50b3RhbCAmJiB0MihlLnRpdGxlKSA9PT0gdDIodC50aXRsZSlcclxufVxyXG5cclxuZnVuY3Rpb24gdDMoZSwgdCkge1xyXG4gIHJldHVybiAhIWUgJiYgISF0ICYmIHQuaW5kZXggPiBlLmluZGV4XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHQ0KGUpIHtcclxuICByZXR1cm4gMCA9PT0gT2JqZWN0LmtleXMoZSkubGVuZ3RoXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHQ1KGUpIHtcclxuICBpZiAoQXJyYXkuaXNBcnJheShlKSkgcmV0dXJuIGUuc29tZSh0NSk7XHJcbiAgaWYgKGUgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgZSkgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGUpLnNvbWUoKFtlLCB0XSkgPT4gZSAhPT0gaFxyXG4gICAgLk1ZV09SS0RBWV9FRFVDQVRJT05fU05BUFNIT1RfSU5ERVhfS0VZICYmIGUgIT09IG0uRURVQ0FUSU9OX1RSQUNFX0tFWSAmJiB0NSh0KSk7XHJcbiAgaWYgKG51bGwgPT0gZSkgcmV0dXJuICExO1xyXG4gIGxldCB0ID0gU3RyaW5nKGUpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gIHJldHVybiAhW1wiXCIsIFwic2VsZWN0IG9uZVwiLCBcIltdXCIsIFwiL1wiLCBcIi8vXCJdLmluY2x1ZGVzKHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHQ2KGUpIHtcclxuICByZXR1cm4gIU9iamVjdC52YWx1ZXMoZSkuc29tZSh0NSlcclxufVxyXG5cclxuZnVuY3Rpb24gdDgoe1xyXG4gIGF1dG9maWxsU25hcHNob3Q6IGUsXHJcbiAgYWRkaXRpb25hbFN1Ym1pdERhdGE6IHQsXHJcbiAgYmluZENvbnRleHQ6IHIsXHJcbiAgc3VibWl0Q29udGV4dDogbixcclxuICBzdWJtaXRTbmFwc2hvdDogb1xyXG59KSB7XHJcbiAgaWYgKHQ0KG8pICYmIHQ2KHQgPz8ge30pKSByZXR1cm4gXCJlbXB0eV9zdWJtaXRfc25hcHNob3RcIjtcclxuICBsZXQgaSA9ICEhcj8uc3RlcCxcclxuICAgIGEgPSAhIW4uc3RlcCxcclxuICAgIGwgPSAhIWkgJiYgISFhICYmIHQxKHI/LnN0ZXAsIG4uc3RlcCk7XHJcbiAgaWYgKGkgJiYgYSAmJiAhbCkgcmV0dXJuIFwid29ya2RheV9zdGVwX2NoYW5nZWRcIjtcclxuICBsZXQgcyA9IE9iamVjdC5rZXlzKGUpLmZpbHRlcihlID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBlKSkubGVuZ3RoO1xyXG4gIHJldHVybiBsIHx8IDAgIT09IHMgPyBudWxsIDogXCJub19jb21tb25fc3VibWl0X2tleXNcIlxyXG59XHJcblxyXG5mdW5jdGlvbiB0OSh7XHJcbiAgYmluZENvbnRleHQ6IGUsXHJcbiAgZXh0cmFEYXRhOiB0LFxyXG4gIHN1Ym1pdENvbnRleHQ6IHJcclxufSkge1xyXG4gIHJldHVybiBlID8ge1xyXG4gICAgLi4udCxcclxuICAgIHBhZ2VDb250ZXh0OiB7XHJcbiAgICAgIC4uLnQucGFnZUNvbnRleHQgPz8ge30sXHJcbiAgICAgIG15d29ya2RheToge1xyXG4gICAgICAgIGJpbmRTdGVwOiBlLnN0ZXAsXHJcbiAgICAgICAgc3VibWl0U3RlcDogci5zdGVwLFxyXG4gICAgICAgIHN0YWxlOiAhMVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSA6IHRcclxufVxyXG5cclxuZnVuY3Rpb24gdDcoZSA9IG51bGwpIHtcclxuICByZXR1cm4gZSAmJiAoZS5idXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUuaGFuZGxlciwgITApLCBlLmJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgXCJjbGlja1wiLCBlLmhhbmRsZXIpLCB0VyA9PT0gZSAmJiAodFcgPSBudWxsKSksIG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gcmUoKSB7XHJcbiAgcmV0dXJuIHRXID0gdDcodFcpLCBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJ0KCkge1xyXG4gIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICYmICh0RyAmJiB0SyA9PT1cclxuICAgIHdpbmRvdyB8fCAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZy5NWVdPUktEQVlfU1RFUF9DSEFOR0VfRVZFTlQsIHJlKSwgdEcgPSAhMCwgdEsgPSB3aW5kb3cpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBycihlKSB7XHJcbiAgbGV0IHQgPSBlLnRvTG93ZXJDYXNlKCk7XHJcbiAgcmV0dXJuIHQuaW5jbHVkZXMoXCJwaG9uZVwiKSB8fCB0LmluY2x1ZGVzKFwibW9iaWxlXCIpIHx8IC8oXnxbXmEtel0pY2VsbCh1bGFyKT8oW15hLXpdfCQpLy50ZXN0KHQpIHx8XHJcbiAgICB0LmluY2x1ZGVzKFwidGVsZXBob25lXCIpIHx8IC8oXnxbXmEtel0pdGVsKFteYS16XXwkKS8udGVzdCh0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBybihlKSB7XHJcbiAgbGV0IHQgPSBlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFwqL2csIFwiXCIpLnJlcGxhY2UoL1s6XFx1ZmYxYV1cXHMqJC8sIFwiXCIpLnJlcGxhY2UoL1teYS16MC05XSsvZyxcclxuICAgICAgXCIgXCIpLnRyaW0oKSxcclxuICAgIHIgPSB0LnJlcGxhY2UoL1xccysvZywgXCJcIik7XHJcbiAgcmV0dXJuIFwicGhvbmVjb3VudHJ5Y29kZVwiID09PSByIHx8IFwiY291bnRyeXBob25lY29kZVwiID09PSByIHx8IFwiY291bnRyeXJlZ2lvbnBob25lY29kZVwiID09PSByIHx8XHJcbiAgICBcImNvdW50cnljb2RlXCIgPT09IHJcclxufVxyXG5cclxuZnVuY3Rpb24gcm8oZSkge1xyXG4gIGxldCB0ID0gZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcKi9nLCBcIlwiKS5yZXBsYWNlKC9bOlxcdWZmMWFdXFxzKiQvLCBcIlwiKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKVxyXG4gIC50cmltKCk7XHJcbiAgcmV0dXJuIFwic2tpbGxzXCIgPT09IHQgfHwgXCJhZGQgc2tpbGxzXCIgPT09IHQgfHwgXCJ0eXBlIHRvIGFkZCBza2lsbHNcIiA9PT0gdFxyXG59XHJcblxyXG5mdW5jdGlvbiByaShlKSB7XHJcbiAgcmV0dXJuIGUuZXZlcnkoZSA9PiBcInN0cmluZ1wiID09IHR5cGVvZiBlKSA/IFsuLi5lXS5zb3J0KChlLCB0KSA9PiB7XHJcbiAgICBsZXQgciA9IGUudHJpbSgpLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgIG4gPSB0LnRyaW0oKS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICBvID0gci5sb2NhbGVDb21wYXJlKG4pO1xyXG4gICAgcmV0dXJuIG8gfHwgZS5sb2NhbGVDb21wYXJlKHQpXHJcbiAgfSkgOiBlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhKGUpIHtcclxuICBsZXQgdCA9IGUucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xyXG4gIHJldHVybiB0IHx8IGVcclxufVxyXG5cclxuZnVuY3Rpb24gcmwoZSkge1xyXG4gIGxldCB0ID0gZS5tYXRjaCgvXFwrKFxcZHsxLDR9KVxcYi8pO1xyXG4gIGlmICh0Py5bMV0pIHJldHVybiBgKyR7dFsxXX1gO1xyXG4gIGxldCByID0gZS5yZXBsYWNlKC9cXEQvZywgXCJcIik7XHJcbiAgcmV0dXJuIHIgJiYgci5sZW5ndGggPD0gNCA/IGArJHtyfWAgOiBlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJzKGUpIHtcclxuICBsZXQgdCA9IGUudHJpbSgpLFxyXG4gICAgciA9IHQucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xyXG4gIGlmIChyLmxlbmd0aCA8IDcgfHwgci5sZW5ndGggPiAxNSkgcmV0dXJuICExO1xyXG4gIGxldCBuID0gdC5yZXBsYWNlKC9cXHMqKD86ZXh0XFwuP3x4KVxccypcXGQrXFxzKiQvaSwgXCJcIik7XHJcbiAgcmV0dXJuICEvW14wLTlcXHMoKSsuLV0vLnRlc3QobikgJiYgL1soKS4tXS8udGVzdChuKVxyXG59XHJcblxyXG5mdW5jdGlvbiBydShlLCB0ID0gXCJcIikge1xyXG4gIGlmIChBcnJheS5pc0FycmF5KGUpKSB7XHJcbiAgICBsZXQgciA9IGUubWFwKGUgPT4gcnUoZSwgdCkpO1xyXG4gICAgcmV0dXJuIHJvKHQpID8gcmkocikgOiByXHJcbiAgfVxyXG4gIHJldHVybiBlICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIGUgPyBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoZSkubWFwKChbZSwgdF0pID0+IFtlLCBydSh0LFxyXG4gICAgZSldKSkgOiBcInN0cmluZ1wiID09IHR5cGVvZiBlICYmIHJuKHQpID8gcmwoZSkgOiBcInN0cmluZ1wiID09IHR5cGVvZiBlICYmIChycih0KSB8fCBycyhlKSkgPyByYShcclxuICAgIGUpIDogZVxyXG59XHJcblxyXG5mdW5jdGlvbiByYyhlKSB7XHJcbiAgcmV0dXJuICgwLCB4LmlzV29ya2RheVNlbGZJZGVudGlmeUxhYmVsKShlKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZChlKSB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoZSkpIHJldHVybiAwID09PSBlLmxlbmd0aDtcclxuICBpZiAoXCJzdHJpbmdcIiAhPSB0eXBlb2YgZSkgcmV0dXJuICExO1xyXG4gIGxldCB0ID0gZS50cmltKCk7XHJcbiAgaWYgKFwiW11cIiA9PT0gdCkgcmV0dXJuICEwO1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgZSA9IEpTT04ucGFyc2UodCk7XHJcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShlKSAmJiAwID09PSBlLmxlbmd0aFxyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuICExXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZihlLCB0KSB7XHJcbiAgbGV0IHIgPSBPYmplY3QuZW50cmllcyh0KS5maW5kKChbZSwgdF0pID0+IHJjKGUpICYmIHJkKHQpKTtcclxuICBpZiAoIXIpIHJldHVybiBlO1xyXG4gIGxldCBuID0gZSxcclxuICAgIG8gPSByWzFdO1xyXG4gIGZvciAobGV0IHQgb2YgT2JqZWN0LmtleXMoZSkpIHJjKHQpICYmIChuID09PSBlICYmIChuID0ge1xyXG4gICAgLi4uZVxyXG4gIH0pLCBuW3RdID0gbyk7XHJcbiAgcmV0dXJuIG5cclxufVxyXG5cclxuZnVuY3Rpb24gcnAoZSkge1xyXG4gIGxldCB0ID0ge1xyXG4gICAgYnViYmxlczogITAsXHJcbiAgICBjYW5jZWxhYmxlOiAhMSxcclxuICAgIC4uLlwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdyA/IHtcclxuICAgICAgdmlldzogd2luZG93XHJcbiAgICB9IDoge31cclxuICB9O1xyXG4gIHJldHVybiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIEZvY3VzRXZlbnQgJiYgW1wiZm9jdXNcIiwgXCJmb2N1c2luXCIsIFwiYmx1clwiLCBcImZvY3Vzb3V0XCJdLmluY2x1ZGVzKGUpID9cclxuICAgIG5ldyBGb2N1c0V2ZW50KGUsIHQpIDogbmV3IEV2ZW50KGUsIHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJtKGUpIHtcclxuICBpZiAoZS5kaXNhYmxlZCkgcmV0dXJuICExO1xyXG4gIGlmIChlLnRhZ05hbWU/LnRvVXBwZXJDYXNlKCkgPT09IFwiSU5QVVRcIikge1xyXG4gICAgbGV0IHQgPSAoZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpIHx8IGUudHlwZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgaWYgKFtcImhpZGRlblwiLCBcImNoZWNrYm94XCIsIFwicmFkaW9cIiwgXCJmaWxlXCIsIFwiYnV0dG9uXCIsIFwic3VibWl0XCIsIFwicmVzZXRcIl0uaW5jbHVkZXModCkpIHJldHVybiAhMVxyXG4gIH1cclxuICBsZXQgdCA9IFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZS5nZXRDbGllbnRSZWN0cyB8fCBlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoID4gMDtcclxuICBpZiAoIXQpIHJldHVybiAhMTtcclxuICBsZXQgciA9IFN0cmluZyhlLnZhbHVlID8/IFwiXCIpLnRyaW0oKS5sZW5ndGggPiAwLFxyXG4gICAgbiA9IFwidHJ1ZVwiID09PSBlLmdldEF0dHJpYnV0ZShcImFyaWEtaW52YWxpZFwiKTtcclxuICByZXR1cm4gciB8fCBuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJoKGUgPSBkb2N1bWVudCkge1xyXG4gIGxldCB0ID0gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgdGV4dGFyZWFcIikpLFxyXG4gICAgciA9IDA7XHJcbiAgZm9yIChsZXQgZSBvZiB0KSBybShlKSAmJiAoZS5mb2N1cz8uKCksIGUuZGlzcGF0Y2hFdmVudChycChcImZvY3VzXCIpKSwgZS5kaXNwYXRjaEV2ZW50KHJwKFxyXG4gICAgXCJmb2N1c2luXCIpKSwgZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwXHJcbiAgfSkpLCBlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwXHJcbiAgfSkpLCBlLmJsdXI/LigpLCBlLmRpc3BhdGNoRXZlbnQocnAoXCJibHVyXCIpKSwgZS5kaXNwYXRjaEV2ZW50KHJwKFwiZm9jdXNvdXRcIikpLCByKyspO1xyXG4gIHJldHVybiByXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJnKGUpIHtcclxuICByZXR1cm4gKGUudGV4dENvbnRlbnQgfHwgZS5pbm5lclRleHQgfHwgZS5nZXRBdHRyaWJ1dGU/LihcImFyaWEtbGFiZWxcIikgfHwgZS5nZXRBdHRyaWJ1dGU/LihcclxuICAgIFwidGl0bGVcIikgfHwgXCJcIikucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpLnRvTG93ZXJDYXNlKClcclxufVxyXG5cclxuZnVuY3Rpb24gcmIoZSkge1xyXG4gIGxldCB0ID0gcmcoZSk7XHJcbiAgcmV0dXJuIHQuaW5jbHVkZXMoXCJzdWJtaXRcIilcclxufVxyXG5cclxuZnVuY3Rpb24gcnkoZSkge1xyXG4gIGxldCB0ID0gZT8uZGV0YWlsPy5zdGF0ZTtcclxuICByZXR1cm4gdCAmJiBcIm51bWJlclwiID09IHR5cGVvZiB0LmluZGV4ICYmIFwibnVtYmVyXCIgPT0gdHlwZW9mIHQudG90YWwgJiYgXCJzdHJpbmdcIiA9PSB0eXBlb2YgdFxyXG4gICAgLnRpdGxlID8gdCA6ICgwLCBnLmdldE15V29ya2RheVN0ZXBTdGF0ZSkoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBydigpIHtcclxuICB0WD8uY2xlYW51cCgpLCB0WCA9IG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gcncoZSwgdCkge1xyXG4gICgwLCBwLnNlbmRBdXRvZmlsbEFuc3dlclBhaXJFdmVudCkoZSksIHRaKHQsIGUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJTKHtcclxuICBiYXNlbGluZTogZSxcclxuICBiaW5kQ29udGV4dDogdCxcclxuICBwYXlsb2FkOiByXHJcbn0pIHtcclxuICBsZXQgbjtcclxuICBpZiAoIXQuc3RlcCB8fCBcInVuZGVmaW5lZFwiID09IHR5cGVvZiB3aW5kb3cgfHwgXCJmdW5jdGlvblwiICE9IHR5cGVvZiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcilcclxuICAgIHJldHVybjtcclxuICBydigpO1xyXG4gIGxldCBvID0gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcj8uKGcuTVlXT1JLREFZX1NURVBfQ0hBTkdFX0VWRU5ULCBpKSwgbiAmJiBjbGVhclRpbWVvdXQobiksIHRYXHJcbiAgICAgICAgPy5jbGVhbnVwID09PSBvICYmICh0WCA9IG51bGwpXHJcbiAgICB9LFxyXG4gICAgaSA9IG4gPT4ge1xyXG4gICAgICBsZXQgaSA9IHJ5KG4pO1xyXG4gICAgICB0Myh0LnN0ZXAsIGkpICYmIChvKCksIHJ3KHIsIGUpKVxyXG4gICAgfTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihnLk1ZV09SS0RBWV9TVEVQX0NIQU5HRV9FVkVOVCwgaSksIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygd2luZG93XHJcbiAgICAuc2V0VGltZW91dCAmJiAobiA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgbygpLCBjb25zb2xlLndhcm4oXCJbTXlXb3JrZGF5XSBza2lwIGF1dG9maWxsX2Fuc3dlcl9wYWlyOlwiLCB7XHJcbiAgICAgICAgcmVhc29uOiBcIndvcmtkYXlfc3RlcF9ub3RfYWR2YW5jZWRcIixcclxuICAgICAgICBiaW5kU3RlcDogdC5zdGVwLFxyXG4gICAgICAgIHN1Ym1pdFN0ZXA6ICgwLCBnLmdldE15V29ya2RheVN0ZXBTdGF0ZSkoKVxyXG4gICAgICB9KVxyXG4gICAgfSwgMzUwMCkpLCB0WCA9IHtcclxuICAgICAgY2xlYW51cDogb1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByRShlLCB0ID0ge30sIHIsIG4pIHtcclxuICBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBkb2N1bWVudCAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwgJiYgcmgoKTtcclxuICBsZXQgbyA9IHJ1KGUpLFxyXG4gICAgaSA9ICgwLCBtLmdldEVkdWNhdGlvblRyYWNlUnVuSWRGcm9tUmVjb3Jkcykoby5lZHVjYXRpb24pID8/IG4sXHJcbiAgICBhID0gcnUoKDAsIHguZ2V0Rm9ybVNuYXBzaG90KSh7XHJcbiAgICAgIGluY2x1ZGVFZHVjYXRpb25TbmFwc2hvdEluZGV4OiAhMCxcclxuICAgICAgaW5jbHVkZUVkdWNhdGlvblRyYWNlOiAhMCxcclxuICAgICAgZWR1Y2F0aW9uVHJhY2VSdW5JZDogaSA/PyB2b2lkIDBcclxuICAgIH0pKSxcclxuICAgIHtcclxuICAgICAgZWR1Y2F0aW9uOiBsLFxyXG4gICAgICBlbXBsb3ltZW50OiBzLFxyXG4gICAgICAuLi51XHJcbiAgICB9ID0gYSxcclxuICAgIHtcclxuICAgICAgZWR1Y2F0aW9uOiBjLFxyXG4gICAgICBlbXBsb3ltZW50OiBkLFxyXG4gICAgICAuLi5mXHJcbiAgICB9ID0gbyxcclxuICAgIHAgPSByZihmLCB1KSxcclxuICAgIGcgPSByID8gdDAoKSA6IHtcclxuICAgICAgc3RlcDogbnVsbFxyXG4gICAgfSxcclxuICAgIGIgPSByID8gdDgoe1xyXG4gICAgICBhdXRvZmlsbFNuYXBzaG90OiBwLFxyXG4gICAgICBhZGRpdGlvbmFsU3VibWl0RGF0YToge1xyXG4gICAgICAgIGVkdWNhdGlvbjogbCxcclxuICAgICAgICBlbXBsb3ltZW50OiBzXHJcbiAgICAgIH0sXHJcbiAgICAgIGJpbmRDb250ZXh0OiByLFxyXG4gICAgICBzdWJtaXRDb250ZXh0OiBnLFxyXG4gICAgICBzdWJtaXRTbmFwc2hvdDogdVxyXG4gICAgfSkgOiBudWxsO1xyXG4gIHJldHVybiBiID8gKGNvbnNvbGUud2FybihcIltNeVdvcmtkYXldIHNraXAgYXV0b2ZpbGxfYW5zd2VyX3BhaXI6XCIsIHtcclxuICAgIHJlYXNvbjogYixcclxuICAgIGJpbmRTdGVwOiByPy5zdGVwLFxyXG4gICAgc3VibWl0U3RlcDogZy5zdGVwLFxyXG4gICAgYXV0b2ZpbGxLZXlzOiBPYmplY3Qua2V5cyhwKSxcclxuICAgIHN1Ym1pdEtleXM6IE9iamVjdC5rZXlzKHUpXHJcbiAgfSksIG51bGwpIDogKDAsIGguYWxpZ25NeVdvcmtkYXlFZHVjYXRpb25BbnN3ZXJQYWlyVHJhY2tpbmdEYXRhKSh7XHJcbiAgICBmb3JtVXJsOiAoMCwgeS51c2VVcmxTdG9yZSkuZ2V0U3RhdGUoKS5jdXJyZW50VGFiVXJsLFxyXG4gICAgYXV0b2ZpbGxTbmFwc2hvdDogcCxcclxuICAgIHN1Ym1pdFNuYXBzaG90OiB1LFxyXG4gICAgYWRkaXRpb25hbEF1dG9maWxsRGF0YToge1xyXG4gICAgICBlZHVjYXRpb246IGMsXHJcbiAgICAgIGVtcGxveW1lbnQ6IGRcclxuICAgIH0sXHJcbiAgICBhZGRpdGlvbmFsU3VibWl0RGF0YToge1xyXG4gICAgICBlZHVjYXRpb246IGwsXHJcbiAgICAgIGVtcGxveW1lbnQ6IHNcclxuICAgIH0sXHJcbiAgICBleHRyYURhdGE6IHQ5KHtcclxuICAgICAgYmluZENvbnRleHQ6IHIsXHJcbiAgICAgIGV4dHJhRGF0YTogdCxcclxuICAgICAgc3VibWl0Q29udGV4dDogZ1xyXG4gICAgfSksXHJcbiAgICBzb3VyY2U6IFwibXl3b3JrZGF5XCJcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiByeChlLCB0ID0ge30sIHIpIHtcclxuICBsZXQgbiA9IHJFKGUsIHQsIHIpO1xyXG4gIG4gJiYgcncobilcclxufVxyXG5cclxuZnVuY3Rpb24gckMoe1xyXG4gIGJhc2VsaW5lOiBlLFxyXG4gIGJpbmRDb250ZXh0OiB0LFxyXG4gIGJ1dHRvbjogcixcclxuICBleHRyYURhdGE6IG5cclxufSkge1xyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICBsZXQgbyA9IHJFKGUuc25hcHNob3QsIG4sIHQsIGUuZWR1Y2F0aW9uVHJhY2VSdW5JZCk7XHJcbiAgICBpZiAobykge1xyXG4gICAgICBpZiAocmIocikpIHtcclxuICAgICAgICBydigpLCBydyhvLCBlKTtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICByUyh7XHJcbiAgICAgICAgYmFzZWxpbmU6IGUsXHJcbiAgICAgICAgYmluZENvbnRleHQ6IHQsXHJcbiAgICAgICAgcGF5bG9hZDogb1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gckEoZSwgdCA9IG51bGwsIHIgPSB7fSwgbikge1xyXG4gIHJ0KCksIHQ3KHQpLCB0VyAmJiB0VyAhPT0gdCAmJiB0Nyh0Vyk7XHJcbiAgbGV0IG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRWKTtcclxuICBpZiAoIW8pIHJldHVybiBudWxsO1xyXG4gIGxldCBpID0gdDAoKSxcclxuICAgIGEgPSB7XHJcbiAgICAgIHNuYXBzaG90OiB0SihlKSxcclxuICAgICAgZWR1Y2F0aW9uVHJhY2VSdW5JZDogKDAsIG0uZ2V0RWR1Y2F0aW9uVHJhY2VSdW5JZEZyb21SZWNvcmRzKShlPy5lZHVjYXRpb24pID8/IG4gPz8gbnVsbFxyXG4gICAgfSxcclxuICAgIGwgPSByQyh7XHJcbiAgICAgIGJhc2VsaW5lOiBhLFxyXG4gICAgICBiaW5kQ29udGV4dDogaSxcclxuICAgICAgYnV0dG9uOiBvLFxyXG4gICAgICBleHRyYURhdGE6IHJcclxuICAgIH0pO1xyXG4gIHJldHVybiBvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsLCAhMCksIHRXID0ge1xyXG4gICAgYnV0dG9uOiBvLFxyXG4gICAgaGFuZGxlcjogbCxcclxuICAgIGNvbnRleHQ6IGlcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJvcGVyYXRpb25zLjM0ZTI5ZTc3LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);