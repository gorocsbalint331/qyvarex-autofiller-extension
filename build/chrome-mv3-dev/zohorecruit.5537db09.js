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
})({"28Iaj":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\zohorecruit.js",
    "bundleId": "215bfd8e5537db09",
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
var j = z(require("2fe6509c0fa82e96"));
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

},{"2fe6509c0fa82e96":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"dklMa":[function(require,module,exports) {
/**
 * Parcel module id: fVVzT
 * Resolved path: src/contents/sites/zohorecruit.js
 * Dependencies:
 *   ./section-results -> 1A34s  =>  src/contents/sites/zohorecruit/section-results.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/section-results -> 6WWsC  =>  src/contents/methods/section-results.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~contents/sites/zohorecruit/answer -> 9TR3h  =>  src/contents/sites/zohorecruit/answer.js
 *   ~contents/sites/zohorecruit/location-operation -> joTPk  =>  src/contents/sites/zohorecruit/location-operation.js
 *   ~contents/sites/zohorecruit/operations -> ayFdv  =>  src/contents/sites/zohorecruit/operations.js
 *   ~contents/sites/zohorecruit/progress -> gn723  =>  src/contents/sites/zohorecruit/progress.js
 *   ~contents/sites/zohorecruit/rules -> 6kRQQ  =>  src/contents/sites/zohorecruit/rules.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~utils/trace -> 1ik0r  =>  src/utils/trace.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "ZohoRecruit", ()=>$);
var o = e("@plasmohq/messaging"), i = e("~contents/methods/answer"), a = e("~contents/methods/cancellation"), l = e("~contents/methods/dom"), s = e("~contents/sites/base-filler"), u = e("~contents/sites/zohorecruit/answer"), c = e("~contents/sites/zohorecruit/location-operation"), d = e("~contents/sites/zohorecruit/operations"), f = e("~contents/sites/zohorecruit/progress"), p = e("~contents/sites/zohorecruit/rules"), m = e("~core/enums"), h = e("~contents/methods/section-results"), g = e("./section-results"), b = e("~utils/trace");
function y() {
    return document.querySelectorAll(".crc-form-row").length > 0;
}
function v(e1) {
    if (!0 === e1) return !0;
    if (!1 === e1 || null == e1) return !1;
    if ("number" == typeof e1) return 1 === e1;
    let t = String(e1).trim().toLowerCase();
    return [
        "true",
        "yes",
        "y",
        "1",
        "current",
        "present"
    ].includes(t);
}
function w(e1) {
    let t = String(e1 ?? "").trim().toLowerCase();
    return [
        "present",
        "current",
        "ongoing"
    ].includes(t);
}
function S(e1) {
    return "isCurrent" in e1 ? v(e1.isCurrent) : w(e1["End date"] || e1.To || e1.End);
}
_c = S;
function E(e1) {
    return "isCurrent" in e1 ? v(e1.isCurrent) : w(e1["End date"] || e1.To || e1.End);
}
_c1 = E;
function x(e1, t) {
    e1 instanceof HTMLInputElement && e1.checked !== t && e1.click();
}
async function C() {
    let e1 = Array.from(document.querySelectorAll("button.lyte-button, button[type='button']")), t = e1.find((e1)=>{
        let t = e1.textContent?.replace(/\s+/g, " ").trim().toLowerCase();
        return "i'm interested" === t || "i am interested" === t;
    });
    return !!t && (t.scrollIntoView({
        block: "center",
        inline: "center"
    }), t.dispatchEvent(new MouseEvent("mousedown", {
        bubbles: !0,
        cancelable: !0
    })), t.dispatchEvent(new MouseEvent("mouseup", {
        bubbles: !0,
        cancelable: !0
    })), t.dispatchEvent(new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0
    })), !0);
}
_c2 = C;
async function A() {
    let e1 = await (0, p.getRules)();
    if (e1.length > 0 || y()) return e1;
    let t = await C();
    if (!t) return e1;
    for(let t = 0; t < 10 && (await new Promise((e1)=>setTimeout(e1, 500)), !((e1 = await (0, p.getRules)()).length > 0 || y())); t++);
    return e1;
}
_c3 = A;
function k(e1) {
    return String(e1?.__zohoSemanticType || "");
}
function T(e1) {
    return k(e1).startsWith("address.");
}
_c4 = T;
function F(e1) {
    return e1?.__zohoClusterRoot || e1?.$fieldRow || e1?.$input || null;
}
_c5 = F;
function I(e1, t, r1, n, o) {
    let i = [], a = new Set, l = new Map;
    for (let t of e1){
        if (!T(t)) continue;
        let e1 = F(t), r1 = l.get(e1) || [];
        r1.push(t), l.set(e1, r1);
    }
    let s = (e1)=>{
        i.push(async ()=>{
            await r1[e1.type]?.(e1, t);
        });
    };
    for (let u of e1)if (!a.has(u)) {
        if (T(u)) {
            let s = F(u), c = l.get(s) || [];
            if (c.length > 0) {
                c.forEach((e1)=>a.add(e1)), i.push(D(e1, c, t, r1, n, o));
                continue;
            }
        }
        s(u);
    }
    return i;
}
_c6 = I;
function j(e1) {
    let t = e1?.regular || {}, r1 = [
        "Phone Country Code",
        "Country Phone Code"
    ];
    for (let e1 of r1){
        let r1 = t[e1];
        if (null != r1 && String(r1).trim()) return String(r1).trim();
    }
    for (let [e1, r1] of Object.entries(t)){
        let t = e1.toLowerCase(), n = String(r1 ?? "").trim();
        if (n && t.includes("phone") && t.includes("country") && t.includes("code")) return n;
    }
    return e1?.country || "";
}
function D(e1, t, r1, n, o, i) {
    return async ()=>{
        let a = (e1)=>t.find((t)=>k(t) === e1), l = e1.findIndex((e1)=>t.includes(e1)), s = e1.slice(0, -1 === l ? e1.length : l).reverse().find((e1)=>"contact.mobile" === k(e1));
        s && await (0, d.waitForZohoPhoneFieldSettled)(s);
        let u = a("address.country"), f = a("address.zip"), p = a("address.state"), m = a("address.city"), h = P([
            "Country",
            "Pays"
        ], r1), g = P([
            "Zip/Postal Code",
            "Zip Code",
            "Postal Code",
            "ZIP",
            "Code postal"
        ], r1), b = P([
            "State/Province",
            "State",
            "Province",
            "\xc9tat/Province",
            "Etat/Province",
            "\xc9tat",
            "Etat"
        ], r1), y = P([
            "City",
            "Ville"
        ], r1), v = !1, w = (0, c.isZohoRecruitCityAutocompleteRule)(m);
        v || !w || (v = await i(m, y, g), await O(t, o), console.info("[ZohoRecruit][Address] city-resolve-settled", {
            cityResolveCommitted: v,
            hasPostalCode: !!g,
            postalCodeEmpty: !_(f)
        }), v || o.updateMissedProgress(m.label)), !v && f && g && (v = await (0, d.selectZohoAutocompleteOption)(f, g, [
            y,
            b,
            h
        ]), await O(t, o), v || (v = R(t))), v || !m || !y || w || (v = await (0, d.selectZohoAutocompleteOption)(m, y, [
            b,
            h,
            g
        ]), await O(t, o), v || (v = R(t))), v && await O(t, o, 1200), v || (await N(u, r1, n), await N(f, r1, n), await N(p, r1, n), w || await N(m, r1, n)), await N(a("address.street"), r1, n), await O(t, o);
        let S = await L(f, "address.zip");
        S && (0, c.shouldRestoreZohoPostalCode)({
            postalCode: g,
            currentPostalCode: _(S)
        }) && (console.info("[ZohoRecruit][Postal] restore-after-address-settle", {
            cityResolveCommitted: v && w,
            postalRuleRequeried: S !== f
        }), await N(S, r1, n), await O(t, o));
    };
}
_c7 = D;
function P(e1, t) {
    for (let r1 of e1)try {
        return String((0, i.findValueInRecord)(r1, t) || "").trim();
    } catch  {
        continue;
    }
    return "";
}
_c8 = P;
function _(e1) {
    let t = e1?.$input;
    return String(t?.value ?? "").trim();
}
async function L(e1, t) {
    if (!e1 || e1?.$input?.isConnected !== !1) return e1;
    let r1 = await (0, p.getRules)();
    return r1.find((r1)=>k(r1) === t && (r1.label === e1.label || r1.name && r1.name === e1.name)) || e1;
}
_c9 = L;
function R(e1) {
    let t = e1.find((e1)=>"address.zip" === k(e1)), r1 = e1.find((e1)=>"address.city" === k(e1)), n = e1.find((e1)=>"address.state" === k(e1)), o = e1.find((e1)=>"address.country" === k(e1)), i = _(t), a = _(r1), l = _(n), s = _(o);
    return !!(i && (a || l || s)) || !!(a && (l || s));
}
_c10 = R;
async function O(e1, t, r1 = 300) {
    let n = Date.now();
    for(; Date.now() - n < r1;)M(e1, t), await new Promise((e1)=>setTimeout(e1, 100));
    M(e1, t);
}
_c11 = O;
function M(e1, t) {
    for (let r1 of e1){
        let e1 = _(r1);
        e1 && !t.fieldStatus.filledFields.includes(r1.label) && t.updateFilledProgress(r1.label);
    }
}
_c12 = M;
async function N(e1, t, r1) {
    e1 && (_(e1) || await r1[e1.type]?.(e1, t));
}
_c13 = N;
class $ extends s.BaseFiller {
    getFieldHandlers() {
        return {
            [m.FIELD_TYPE.TEXT]: {
                handler: async (e1, t)=>{
                    let r1 = e1.label.toLowerCase();
                    r1.includes("phone") || r1.includes("t\xe9l\xe9phone") || r1.includes("mobile") ? await (0, d.fillPhoneField)(e1, t, j(this.answer), this.answer?.country) : await (0, d.fillAutocompleteField)(e1, t);
                },
                options: {
                    expectArray: !1
                }
            },
            [m.FIELD_TYPE.DATE]: {
                handler: (e1, t)=>(0, d.fillZohoDateField)(e1, t),
                options: {
                    expectArray: !1
                }
            },
            [m.FIELD_TYPE.RADIOGROUP]: {
                handler: (e1, t)=>(0, l.fillCheckBoxesField)(e1, [
                        t
                    ]),
                options: {
                    expectArray: !1
                }
            },
            [m.FIELD_TYPE.SELECT]: {
                handler: (e1, t)=>(0, d.fillZohoDropdownDirectly)(e1, t),
                options: {
                    expectArray: !1
                }
            },
            [m.FIELD_TYPE.MULTI_SELECT]: {
                handler: (e1, t)=>(0, d.fillMultiCheckbox)(e1, t),
                options: {
                    expectArray: !1
                }
            }
        };
    }
    getSiteName() {
        return "zohorecruit";
    }
    async runPreFillForm() {
        this.taskQueue.add(d.preFillForm), await this.taskQueue.run(), await (0, d.clearAllPopups)();
    }
    async extractFormRules() {
        return A();
    }
    formatAnswer(e1) {
        return (0, u.formatAnswer)(e1, e1.country);
    }
    async doFillForm(e1 = !1) {
        await this.initializeFillForm();
        let t = await this.extractFormRules();
        this.snapshotRules = t, this.progressTracker.setFieldsRequiredStatus(t);
        let r1 = await this.fetchFormAnswers(t, e1);
        if ("string" == typeof r1) return r1;
        (0, a.checkpoint)();
        let n = I(t, this.answer.regular, this.operationConfig, this.progressTracker, (e1, t, r1)=>this.resolveZohoCity(e1, t, r1));
        for (let e1 of n)this.taskQueue.add(e1);
        await this.taskQueue.run(), this.disableUploadResume ? this.progressTracker.updateMissedProgress("Resume/CV") : this.taskQueue.add(async ()=>{
            await (0, d.uploadResume)(this.resumeInfo, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
        }), this.coverLetter?.coverLetterId && this.taskQueue.add(async ()=>{
            await (0, d.uploadCoverLetter)(this.coverLetter, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
        });
        let o = t.find((e1)=>"SKILL_SET" === e1.type || e1.label.toLowerCase().includes("skill") || e1.label.toLowerCase().includes("comp\xe9tence") || e1.$input?.classList.contains("skillset-input")), l = o?.label;
        if (o && l && this.answer.skills && this.answer.skills.length > 0) {
            this.progressTracker.updateFieldRequiredStatus({
                label: l,
                required: o.required
            }), (0, a.updateCurrentField)(l);
            try {
                await (0, a.withSkip)(async ()=>{
                    let e1 = await (0, d.fillZohoSkillSetField)(o, this.answer.skills);
                    e1 ? this.progressTracker.updateFilledProgress(l) : this.progressTracker.updateMissedProgress(l);
                });
            } catch (e1) {
                if (e1 instanceof a.CancelledError) throw e1;
                e1 instanceof a.SkippedError || console.error("[ZohoRecruit] skills fill error:", e1), this.progressTracker.updateMissedProgress(l);
            }
        }
        for(let e1 = 1; e1 < this.answer.education.length; e1++)await (0, d.addEducationRow)(e1);
        let s = await (0, p.getEduRules)(), u = (0, h.createSequentialSectionResultReporter)("education", this.progressTracker);
        for(let e1 = 0; e1 < this.answer.education.length; e1++){
            let t = this.answer.education[e1], r1 = s[e1];
            if (r1 && r1.children) {
                let n = r1.children, o = (0, g.createZohoRecordResult)("education", e1, r1, t, u), a = n.filter((e1)=>e1.type === m.FIELD_TYPE.TEXT), l = (0, i.getRegularOperations)(a, t, o.operationConfig(this.operationConfig));
                for (let e1 of l)await e1();
                let s = n.find((e1)=>e1.label.toLowerCase().includes("currently pursuing"));
                if (s && s.$input) {
                    let e1 = S(t);
                    await o.run(s, e1, ()=>{
                        let t = s.$input;
                        return x(t, e1), t instanceof HTMLInputElement && t.checked === e1;
                    });
                }
                let c = n.filter((e1)=>e1.type === m.FIELD_TYPE.SELECT);
                for (let e1 of c){
                    let r1 = t[e1.name] || t[e1.label];
                    if (!r1) {
                        let n = e1.label.toLowerCase();
                        if (n.includes("start") || n.includes("from")) {
                            let e1 = t["Start date"] || t.From;
                            if (e1 && e1.includes("/")) {
                                let [t, o] = e1.split("/");
                                r1 = n.includes("month") ? t : o;
                            }
                        } else if (n.includes("end") || n.includes("to")) {
                            let e1 = t["End date"] || t.To;
                            if (e1 && e1.includes("/")) {
                                let [t, o] = e1.split("/");
                                r1 = n.includes("month") ? t : o;
                            }
                        }
                    }
                    if (r1) try {
                        await o.run(e1, r1, ()=>(0, d.fillZohoDropdownDirectly)(e1, r1));
                    } catch (t) {
                        console.error(`[Zoho-Manual] \u586b\u5145 ${e1.label} \u5931\u8d25`, t);
                    }
                }
            }
        }
        (0, f.shouldMarkZohoSectionFilled)(this.answer.education, s) && this.progressTracker.updateFilledProgress("Education");
        for(let e1 = 1; e1 < this.answer.workExperience.length; e1++)await (0, d.addExperienceRow)(e1);
        let c = await (0, p.getExpRules)(), b = (0, h.createSequentialSectionResultReporter)("employment", this.progressTracker);
        for(let e1 = 0; e1 < this.answer.workExperience.length; e1++){
            let t = this.answer.workExperience[e1], r1 = c[e1];
            if (r1 && r1.children) {
                let n = r1.children, o = (0, g.createZohoRecordResult)("employment", e1, r1, t, b), a = n.filter((e1)=>e1.type === m.FIELD_TYPE.TEXT), l = (0, i.getRegularOperations)(a, t, o.operationConfig(this.operationConfig));
                for (let e1 of l)await e1();
                let s = n.filter((e1)=>e1.type === m.FIELD_TYPE.SELECT);
                for (let e1 of s){
                    let r1 = t[e1.name] || t[e1.label];
                    if (!r1) {
                        let n = e1.label.toLowerCase();
                        if (n.includes("start") || n.includes("from")) {
                            let e1 = t["Start date"] || t.From;
                            if (e1 && e1.includes("/")) {
                                let [t, o] = e1.split("/");
                                r1 = n.includes("month") ? t : o;
                            }
                        } else if (n.includes("end") || n.includes("to")) {
                            let e1 = t["End date"] || t.To;
                            if (e1) {
                                if (e1.toLowerCase().includes("present")) n.includes("month"), r1 = "";
                                else if (e1.includes("/")) {
                                    let [t, o] = e1.split("/");
                                    r1 = n.includes("month") ? t : o;
                                }
                            }
                        }
                    }
                    if (r1) try {
                        await o.run(e1, r1, ()=>(0, d.fillZohoDropdownDirectly)(e1, r1)), await new Promise((e1)=>setTimeout(e1, 300));
                    } catch (t) {
                        console.error(`[Zoho-Manual] \u5de5\u4f5c\u7ecf\u5386 ${e1.label} \u586b\u5145\u5931\u8d25`, t);
                    }
                }
                let u = n.find((e1)=>e1.label.toLowerCase().includes("currently work") || e1.name.toLowerCase().includes("is_current"));
                if (u && u.$input) {
                    let e1 = E(t);
                    await o.run(u, e1, ()=>{
                        let t = u.$input;
                        return x(t, e1), t instanceof HTMLInputElement && t.checked === e1;
                    });
                }
            }
        }
        (0, f.shouldMarkZohoSectionFilled)(this.answer.workExperience, c) && this.progressTracker.updateFilledProgress("Employment"), this.taskQueue.add(async ()=>{
            let e1 = document.querySelectorAll("input");
            e1.forEach((e1)=>e1.dispatchEvent(new Event("blur"))), await (0, d.fillAgreementCheckbox)();
        }), await this.taskQueue.run();
        let y = await this.finalizeFillForm();
        return await this.bindSubmitButtonTracking(t), y;
    }
    async resolveZohoCity(e1, t, r1) {
        let n = e1?.$input;
        if (!n || !(0, c.isZohoRecruitCityAutocompleteRule)(e1)) return !1;
        let i = (0, c.getZohoRecruitCityOriginalAnswer)(this.answer, t, r1), a = Date.now();
        if (console.info("[ZohoRecruit][City] resolve-start", {
            answerSource: i.source,
            hasOriginalAnswer: !!i.value
        }), !i.value) return await (0, d.clearZohoAutocompleteForInput)(n), !1;
        try {
            let t = (0, c.buildZohoRecruitCityOperation)({
                pageUrl: window.location.href,
                originalAnswer: i.value
            }), r1 = await (0, o.sendToBackground)({
                name: "resolveAutofillOperation",
                body: {
                    operation: t,
                    source: "zohorecruit"
                }
            }), l = (0, c.getZohoRecruitResolvedCityValue)(r1);
            if (console.info("[ZohoRecruit][City] resolve-result", {
                action: r1?.result?.action ?? "missing",
                selectedCount: r1?.result?.selected_values?.length ?? 0,
                elapsedMs: Date.now() - a
            }), !l) return await (0, d.clearZohoAutocompleteForInput)(n), !1;
            let s = await (0, d.selectZohoAutocompleteOption)(e1, l, [], {
                exactOnly: !0
            });
            return console.info("[ZohoRecruit][City] commit-result", {
                committed: s,
                elapsedMs: Date.now() - a
            }), s;
        } catch (e1) {
            return console.warn("[ZohoRecruit][City] resolve-failed", {
                reason: e1 instanceof Error ? e1.message : "unknown-error",
                elapsedMs: Date.now() - a
            }), await (0, d.clearZohoAutocompleteForInput)(n), !1;
        }
    }
    async getAutofillSnapshot(e1) {
        return this.snapshotRules = e1, this.fixedAutofillSnapshot = await (0, p.getFormSnapshot)(e1), this.fixedAdditionalAutofillData = await (0, p.getAdditionalFormSnapshotData)(e1), (0, b.trackEvent)("zohorecruit_form_autofill_answer", {
            formUrl: window.location.href,
            answer: {
                ...this.fixedAutofillSnapshot,
                ...this.fixedAdditionalAutofillData
            }
        }), this.fixedAutofillSnapshot;
    }
    async getSubmitSnapshot() {
        let e1 = await (0, p.getFormSnapshot)(this.snapshotRules);
        return this.latestAdditionalSubmitData = await (0, p.getAdditionalFormSnapshotData)(this.snapshotRules), e1;
    }
    getAdditionalAutofillSnapshotData() {
        return this.fixedAdditionalAutofillData;
    }
    getAdditionalSubmitSnapshotData() {
        return this.latestAdditionalSubmitData;
    }
    normalizeAutofillAnswerPairTrackingData(e1) {
        return {
            ...e1,
            formUrl: window.location.href,
            autofillSnapshot: this.fixedAutofillSnapshot,
            additionalAutofillData: this.fixedAdditionalAutofillData
        };
    }
    getSubmitButtonSelector() {
        return './/*[@id="cw-submit-btn"]//button[@type="submit"]';
    }
    checkCoverLetter() {
        (0, d.checkCoverLetter)();
    }
    submitApplication() {
        (0, d.submitApplication)();
    }
    constructor(...e1){
        super(...e1), this.snapshotRules = [], this.fixedAutofillSnapshot = {}, this.fixedAdditionalAutofillData = {}, this.latestAdditionalSubmitData = {};
    }
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;
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

},{}]},["28Iaj","dklMa"], "dklMa", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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L3J1bnRpbWUtMWI1NjhkMDdlZjJkZDM3Mi5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9zaXRlcy96b2hvcmVjcnVpdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFx6b2hvcmVjcnVpdC5qc1wiLFwiYnVuZGxlSWRcIjpcIjIxNWJmZDhlNTUzN2RiMDlcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiBmVlZ6VFxyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvem9ob3JlY3J1aXQuanNcbiAqIERlcGVuZGVuY2llczpcclxuICogICAuL3NlY3Rpb24tcmVzdWx0cyAtPiAxQTM0cyAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy96b2hvcmVjcnVpdC9zZWN0aW9uLXJlc3VsdHMuanNcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIEBwbGFzbW9ocS9tZXNzYWdpbmcgLT4gOTJHeUIgID0+ICBAcGxhc21vaHEvbWVzc2FnaW5nLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvYW5zd2VyIC0+IDdUNWVXICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvYW5zd2VyLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvY2FuY2VsbGF0aW9uIC0+IGx1SmZzICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvY2FuY2VsbGF0aW9uLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvZG9tIC0+IGhBNVFhICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvZG9tLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvc2VjdGlvbi1yZXN1bHRzIC0+IDZXV3NDICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvc2VjdGlvbi1yZXN1bHRzLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL2Jhc2UtZmlsbGVyIC0+IDh4ajZGICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2Jhc2UtZmlsbGVyLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL3pvaG9yZWNydWl0L2Fuc3dlciAtPiA5VFIzaCAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy96b2hvcmVjcnVpdC9hbnN3ZXIuanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvem9ob3JlY3J1aXQvbG9jYXRpb24tb3BlcmF0aW9uIC0+IGpvVFBrICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL3pvaG9yZWNydWl0L2xvY2F0aW9uLW9wZXJhdGlvbi5qc1xyXG4gKiAgIH5jb250ZW50cy9zaXRlcy96b2hvcmVjcnVpdC9vcGVyYXRpb25zIC0+IGF5RmR2ICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL3pvaG9yZWNydWl0L29wZXJhdGlvbnMuanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvem9ob3JlY3J1aXQvcHJvZ3Jlc3MgLT4gZ243MjMgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvem9ob3JlY3J1aXQvcHJvZ3Jlc3MuanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvem9ob3JlY3J1aXQvcnVsZXMgLT4gNmtSUVEgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvem9ob3JlY3J1aXQvcnVsZXMuanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqICAgfnV0aWxzL3RyYWNlIC0+IDFpazByICA9PiAgc3JjL3V0aWxzL3RyYWNlLmpzXHJcbiAqL1xyXG5cclxudmFyIG4gPSBlKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtcclxubi5kZWZpbmVJbnRlcm9wRmxhZyhyKSwgbi5leHBvcnQociwgXCJab2hvUmVjcnVpdFwiLCAoKSA9PiAkKTtcclxudmFyIG8gPSBlKFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiKSxcclxuICBpID0gZShcIn5jb250ZW50cy9tZXRob2RzL2Fuc3dlclwiKSxcclxuICBhID0gZShcIn5jb250ZW50cy9tZXRob2RzL2NhbmNlbGxhdGlvblwiKSxcclxuICBsID0gZShcIn5jb250ZW50cy9tZXRob2RzL2RvbVwiKSxcclxuICBzID0gZShcIn5jb250ZW50cy9zaXRlcy9iYXNlLWZpbGxlclwiKSxcclxuICB1ID0gZShcIn5jb250ZW50cy9zaXRlcy96b2hvcmVjcnVpdC9hbnN3ZXJcIiksXHJcbiAgYyA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvem9ob3JlY3J1aXQvbG9jYXRpb24tb3BlcmF0aW9uXCIpLFxyXG4gIGQgPSBlKFwifmNvbnRlbnRzL3NpdGVzL3pvaG9yZWNydWl0L29wZXJhdGlvbnNcIiksXHJcbiAgZiA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvem9ob3JlY3J1aXQvcHJvZ3Jlc3NcIiksXHJcbiAgcCA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvem9ob3JlY3J1aXQvcnVsZXNcIiksXHJcbiAgbSA9IGUoXCJ+Y29yZS9lbnVtc1wiKSxcclxuICBoID0gZShcIn5jb250ZW50cy9tZXRob2RzL3NlY3Rpb24tcmVzdWx0c1wiKSxcclxuICBnID0gZShcIi4vc2VjdGlvbi1yZXN1bHRzXCIpLFxyXG4gIGIgPSBlKFwifnV0aWxzL3RyYWNlXCIpO1xyXG5cclxuZnVuY3Rpb24geSgpIHtcclxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jcmMtZm9ybS1yb3dcIikubGVuZ3RoID4gMFxyXG59XHJcblxyXG5mdW5jdGlvbiB2KGUpIHtcclxuICBpZiAoITAgPT09IGUpIHJldHVybiAhMDtcclxuICBpZiAoITEgPT09IGUgfHwgbnVsbCA9PSBlKSByZXR1cm4gITE7XHJcbiAgaWYgKFwibnVtYmVyXCIgPT0gdHlwZW9mIGUpIHJldHVybiAxID09PSBlO1xyXG4gIGxldCB0ID0gU3RyaW5nKGUpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gIHJldHVybiBbXCJ0cnVlXCIsIFwieWVzXCIsIFwieVwiLCBcIjFcIiwgXCJjdXJyZW50XCIsIFwicHJlc2VudFwiXS5pbmNsdWRlcyh0KVxyXG59XHJcblxyXG5mdW5jdGlvbiB3KGUpIHtcclxuICBsZXQgdCA9IFN0cmluZyhlID8/IFwiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gIHJldHVybiBbXCJwcmVzZW50XCIsIFwiY3VycmVudFwiLCBcIm9uZ29pbmdcIl0uaW5jbHVkZXModClcclxufVxyXG5cclxuZnVuY3Rpb24gUyhlKSB7XHJcbiAgcmV0dXJuIFwiaXNDdXJyZW50XCIgaW4gZSA/IHYoZS5pc0N1cnJlbnQpIDogdyhlW1wiRW5kIGRhdGVcIl0gfHwgZS5UbyB8fCBlLkVuZClcclxufVxyXG5cclxuZnVuY3Rpb24gRShlKSB7XHJcbiAgcmV0dXJuIFwiaXNDdXJyZW50XCIgaW4gZSA/IHYoZS5pc0N1cnJlbnQpIDogdyhlW1wiRW5kIGRhdGVcIl0gfHwgZS5UbyB8fCBlLkVuZClcclxufVxyXG5cclxuZnVuY3Rpb24geChlLCB0KSB7XHJcbiAgZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgZS5jaGVja2VkICE9PSB0ICYmIGUuY2xpY2soKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIEMoKSB7XHJcbiAgbGV0IGUgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b24ubHl0ZS1idXR0b24sIGJ1dHRvblt0eXBlPSdidXR0b24nXVwiKSksXHJcbiAgICB0ID0gZS5maW5kKGUgPT4ge1xyXG4gICAgICBsZXQgdCA9IGUudGV4dENvbnRlbnQ/LnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICByZXR1cm4gXCJpJ20gaW50ZXJlc3RlZFwiID09PSB0IHx8IFwiaSBhbSBpbnRlcmVzdGVkXCIgPT09IHRcclxuICAgIH0pO1xyXG4gIHJldHVybiAhIXQgJiYgKHQuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgYmxvY2s6IFwiY2VudGVyXCIsXHJcbiAgICBpbmxpbmU6IFwiY2VudGVyXCJcclxuICB9KSwgdC5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2Vkb3duXCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgY2FuY2VsYWJsZTogITBcclxuICB9KSksIHQuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNldXBcIiwge1xyXG4gICAgYnViYmxlczogITAsXHJcbiAgICBjYW5jZWxhYmxlOiAhMFxyXG4gIH0pKSwgdC5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIiwge1xyXG4gICAgYnViYmxlczogITAsXHJcbiAgICBjYW5jZWxhYmxlOiAhMFxyXG4gIH0pKSwgITApXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gQSgpIHtcclxuICBsZXQgZSA9IGF3YWl0ICgwLCBwLmdldFJ1bGVzKSgpO1xyXG4gIGlmIChlLmxlbmd0aCA+IDAgfHwgeSgpKSByZXR1cm4gZTtcclxuICBsZXQgdCA9IGF3YWl0IEMoKTtcclxuICBpZiAoIXQpIHJldHVybiBlO1xyXG4gIGZvciAobGV0IHQgPSAwOyB0IDwgMTAgJiYgKGF3YWl0IG5ldyBQcm9taXNlKGUgPT4gc2V0VGltZW91dChlLCA1MDApKSwgISgoZSA9IGF3YWl0ICgwLCBwXHJcbiAgICAgIC5nZXRSdWxlcykoKSkubGVuZ3RoID4gMCB8fCB5KCkpKTsgdCsrKTtcclxuICByZXR1cm4gZVxyXG59XHJcblxyXG5mdW5jdGlvbiBrKGUpIHtcclxuICByZXR1cm4gU3RyaW5nKGU/Ll9fem9ob1NlbWFudGljVHlwZSB8fCBcIlwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBUKGUpIHtcclxuICByZXR1cm4gayhlKS5zdGFydHNXaXRoKFwiYWRkcmVzcy5cIilcclxufVxyXG5cclxuZnVuY3Rpb24gRihlKSB7XHJcbiAgcmV0dXJuIGU/Ll9fem9ob0NsdXN0ZXJSb290IHx8IGU/LiRmaWVsZFJvdyB8fCBlPy4kaW5wdXQgfHwgbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBJKGUsIHQsIHIsIG4sIG8pIHtcclxuICBsZXQgaSA9IFtdLFxyXG4gICAgYSA9IG5ldyBTZXQsXHJcbiAgICBsID0gbmV3IE1hcDtcclxuICBmb3IgKGxldCB0IG9mIGUpIHtcclxuICAgIGlmICghVCh0KSkgY29udGludWU7XHJcbiAgICBsZXQgZSA9IEYodCksXHJcbiAgICAgIHIgPSBsLmdldChlKSB8fCBbXTtcclxuICAgIHIucHVzaCh0KSwgbC5zZXQoZSwgcilcclxuICB9XHJcbiAgbGV0IHMgPSBlID0+IHtcclxuICAgIGkucHVzaChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IHJbZS50eXBlXT8uKGUsIHQpXHJcbiAgICB9KVxyXG4gIH07XHJcbiAgZm9yIChsZXQgdSBvZiBlKVxyXG4gICAgaWYgKCFhLmhhcyh1KSkge1xyXG4gICAgICBpZiAoVCh1KSkge1xyXG4gICAgICAgIGxldCBzID0gRih1KSxcclxuICAgICAgICAgIGMgPSBsLmdldChzKSB8fCBbXTtcclxuICAgICAgICBpZiAoYy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBjLmZvckVhY2goZSA9PiBhLmFkZChlKSksIGkucHVzaChEKGUsIGMsIHQsIHIsIG4sIG8pKTtcclxuICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHModSlcclxuICAgIH0gcmV0dXJuIGlcclxufVxyXG5cclxuZnVuY3Rpb24gaihlKSB7XHJcbiAgbGV0IHQgPSBlPy5yZWd1bGFyIHx8IHt9LFxyXG4gICAgciA9IFtcIlBob25lIENvdW50cnkgQ29kZVwiLCBcIkNvdW50cnkgUGhvbmUgQ29kZVwiXTtcclxuICBmb3IgKGxldCBlIG9mIHIpIHtcclxuICAgIGxldCByID0gdFtlXTtcclxuICAgIGlmIChudWxsICE9IHIgJiYgU3RyaW5nKHIpLnRyaW0oKSkgcmV0dXJuIFN0cmluZyhyKS50cmltKClcclxuICB9XHJcbiAgZm9yIChsZXQgW2UsIHJdIG9mIE9iamVjdC5lbnRyaWVzKHQpKSB7XHJcbiAgICBsZXQgdCA9IGUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgbiA9IFN0cmluZyhyID8/IFwiXCIpLnRyaW0oKTtcclxuICAgIGlmIChuICYmIHQuaW5jbHVkZXMoXCJwaG9uZVwiKSAmJiB0LmluY2x1ZGVzKFwiY291bnRyeVwiKSAmJiB0LmluY2x1ZGVzKFwiY29kZVwiKSkgcmV0dXJuIG5cclxuICB9XHJcbiAgcmV0dXJuIGU/LmNvdW50cnkgfHwgXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBEKGUsIHQsIHIsIG4sIG8sIGkpIHtcclxuICByZXR1cm4gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IGEgPSBlID0+IHQuZmluZCh0ID0+IGsodCkgPT09IGUpLFxyXG4gICAgICBsID0gZS5maW5kSW5kZXgoZSA9PiB0LmluY2x1ZGVzKGUpKSxcclxuICAgICAgcyA9IGUuc2xpY2UoMCwgLTEgPT09IGwgPyBlLmxlbmd0aCA6IGwpLnJldmVyc2UoKS5maW5kKGUgPT4gXCJjb250YWN0Lm1vYmlsZVwiID09PSBrKGUpKTtcclxuICAgIHMgJiYgYXdhaXQgKDAsIGQud2FpdEZvclpvaG9QaG9uZUZpZWxkU2V0dGxlZCkocyk7XHJcbiAgICBsZXQgdSA9IGEoXCJhZGRyZXNzLmNvdW50cnlcIiksXHJcbiAgICAgIGYgPSBhKFwiYWRkcmVzcy56aXBcIiksXHJcbiAgICAgIHAgPSBhKFwiYWRkcmVzcy5zdGF0ZVwiKSxcclxuICAgICAgbSA9IGEoXCJhZGRyZXNzLmNpdHlcIiksXHJcbiAgICAgIGggPSBQKFtcIkNvdW50cnlcIiwgXCJQYXlzXCJdLCByKSxcclxuICAgICAgZyA9IFAoW1wiWmlwL1Bvc3RhbCBDb2RlXCIsIFwiWmlwIENvZGVcIiwgXCJQb3N0YWwgQ29kZVwiLCBcIlpJUFwiLCBcIkNvZGUgcG9zdGFsXCJdLCByKSxcclxuICAgICAgYiA9IFAoW1wiU3RhdGUvUHJvdmluY2VcIiwgXCJTdGF0ZVwiLCBcIlByb3ZpbmNlXCIsIFwiXFx4Yzl0YXQvUHJvdmluY2VcIiwgXCJFdGF0L1Byb3ZpbmNlXCIsXHJcbiAgICAgICAgXCJcXHhjOXRhdFwiLCBcIkV0YXRcIlxyXG4gICAgICBdLCByKSxcclxuICAgICAgeSA9IFAoW1wiQ2l0eVwiLCBcIlZpbGxlXCJdLCByKSxcclxuICAgICAgdiA9ICExLFxyXG4gICAgICB3ID0gKDAsIGMuaXNab2hvUmVjcnVpdENpdHlBdXRvY29tcGxldGVSdWxlKShtKTtcclxuICAgIHYgfHwgIXcgfHwgKHYgPSBhd2FpdCBpKG0sIHksIGcpLCBhd2FpdCBPKHQsIG8pLCBjb25zb2xlLmluZm8oXHJcbiAgICAgICAgXCJbWm9ob1JlY3J1aXRdW0FkZHJlc3NdIGNpdHktcmVzb2x2ZS1zZXR0bGVkXCIsIHtcclxuICAgICAgICAgIGNpdHlSZXNvbHZlQ29tbWl0dGVkOiB2LFxyXG4gICAgICAgICAgaGFzUG9zdGFsQ29kZTogISFnLFxyXG4gICAgICAgICAgcG9zdGFsQ29kZUVtcHR5OiAhXyhmKVxyXG4gICAgICAgIH0pLCB2IHx8IG8udXBkYXRlTWlzc2VkUHJvZ3Jlc3MobS5sYWJlbCkpLCAhdiAmJiBmICYmIGcgJiYgKHYgPSBhd2FpdCAoMCwgZFxyXG4gICAgICAgIC5zZWxlY3Rab2hvQXV0b2NvbXBsZXRlT3B0aW9uKShmLCBnLCBbeSwgYiwgaF0pLCBhd2FpdCBPKHQsIG8pLCB2IHx8ICh2ID0gUih0KSkpLCB2IHx8ICFcclxuICAgICAgbSB8fCAheSB8fCB3IHx8ICh2ID0gYXdhaXQgKDAsIGQuc2VsZWN0Wm9ob0F1dG9jb21wbGV0ZU9wdGlvbikobSwgeSwgW2IsIGgsIGddKSwgYXdhaXQgTyhcclxuICAgICAgICB0LCBvKSwgdiB8fCAodiA9IFIodCkpKSwgdiAmJiBhd2FpdCBPKHQsIG8sIDEyMDApLCB2IHx8IChhd2FpdCBOKHUsIHIsIG4pLCBhd2FpdCBOKGYsIHIsXHJcbiAgICAgICAgbiksIGF3YWl0IE4ocCwgciwgbiksIHcgfHwgYXdhaXQgTihtLCByLCBuKSksIGF3YWl0IE4oYShcImFkZHJlc3Muc3RyZWV0XCIpLCByLCBuKSxcclxuICAgICAgYXdhaXQgTyh0LCBvKTtcclxuICAgIGxldCBTID0gYXdhaXQgTChmLCBcImFkZHJlc3MuemlwXCIpO1xyXG4gICAgUyAmJiAoMCwgYy5zaG91bGRSZXN0b3JlWm9ob1Bvc3RhbENvZGUpKHtcclxuICAgICAgcG9zdGFsQ29kZTogZyxcclxuICAgICAgY3VycmVudFBvc3RhbENvZGU6IF8oUylcclxuICAgIH0pICYmIChjb25zb2xlLmluZm8oXCJbWm9ob1JlY3J1aXRdW1Bvc3RhbF0gcmVzdG9yZS1hZnRlci1hZGRyZXNzLXNldHRsZVwiLCB7XHJcbiAgICAgIGNpdHlSZXNvbHZlQ29tbWl0dGVkOiB2ICYmIHcsXHJcbiAgICAgIHBvc3RhbFJ1bGVSZXF1ZXJpZWQ6IFMgIT09IGZcclxuICAgIH0pLCBhd2FpdCBOKFMsIHIsIG4pLCBhd2FpdCBPKHQsIG8pKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gUChlLCB0KSB7XHJcbiAgZm9yIChsZXQgciBvZiBlKSB0cnkge1xyXG4gICAgcmV0dXJuIFN0cmluZygoMCwgaS5maW5kVmFsdWVJblJlY29yZCkociwgdCkgfHwgXCJcIikudHJpbSgpXHJcbiAgfSBjYXRjaCB7XHJcbiAgICBjb250aW51ZVxyXG4gIH1cclxuICByZXR1cm4gXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBfKGUpIHtcclxuICBsZXQgdCA9IGU/LiRpbnB1dDtcclxuICByZXR1cm4gU3RyaW5nKHQ/LnZhbHVlID8/IFwiXCIpLnRyaW0oKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIEwoZSwgdCkge1xyXG4gIGlmICghZSB8fCBlPy4kaW5wdXQ/LmlzQ29ubmVjdGVkICE9PSAhMSkgcmV0dXJuIGU7XHJcbiAgbGV0IHIgPSBhd2FpdCAoMCwgcC5nZXRSdWxlcykoKTtcclxuICByZXR1cm4gci5maW5kKHIgPT4gayhyKSA9PT0gdCAmJiAoci5sYWJlbCA9PT0gZS5sYWJlbCB8fCByLm5hbWUgJiYgci5uYW1lID09PSBlLm5hbWUpKSB8fCBlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFIoZSkge1xyXG4gIGxldCB0ID0gZS5maW5kKGUgPT4gXCJhZGRyZXNzLnppcFwiID09PSBrKGUpKSxcclxuICAgIHIgPSBlLmZpbmQoZSA9PiBcImFkZHJlc3MuY2l0eVwiID09PSBrKGUpKSxcclxuICAgIG4gPSBlLmZpbmQoZSA9PiBcImFkZHJlc3Muc3RhdGVcIiA9PT0gayhlKSksXHJcbiAgICBvID0gZS5maW5kKGUgPT4gXCJhZGRyZXNzLmNvdW50cnlcIiA9PT0gayhlKSksXHJcbiAgICBpID0gXyh0KSxcclxuICAgIGEgPSBfKHIpLFxyXG4gICAgbCA9IF8obiksXHJcbiAgICBzID0gXyhvKTtcclxuICByZXR1cm4gISEoaSAmJiAoYSB8fCBsIHx8IHMpKSB8fCAhIShhICYmIChsIHx8IHMpKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIE8oZSwgdCwgciA9IDMwMCkge1xyXG4gIGxldCBuID0gRGF0ZS5ub3coKTtcclxuICBmb3IgKDsgRGF0ZS5ub3coKSAtIG4gPCByOykgTShlLCB0KSwgYXdhaXQgbmV3IFByb21pc2UoZSA9PiBzZXRUaW1lb3V0KGUsIDEwMCkpO1xyXG4gIE0oZSwgdClcclxufVxyXG5cclxuZnVuY3Rpb24gTShlLCB0KSB7XHJcbiAgZm9yIChsZXQgciBvZiBlKSB7XHJcbiAgICBsZXQgZSA9IF8ocik7XHJcbiAgICBlICYmICF0LmZpZWxkU3RhdHVzLmZpbGxlZEZpZWxkcy5pbmNsdWRlcyhyLmxhYmVsKSAmJiB0LnVwZGF0ZUZpbGxlZFByb2dyZXNzKHIubGFiZWwpXHJcbiAgfVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIE4oZSwgdCwgcikge1xyXG4gIGUgJiYgKF8oZSkgfHwgYXdhaXQgcltlLnR5cGVdPy4oZSwgdCkpXHJcbn1cclxuY2xhc3MgJCBleHRlbmRzIHMuQmFzZUZpbGxlciB7XHJcbiAgZ2V0RmllbGRIYW5kbGVycygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIFttLkZJRUxEX1RZUEUuVEVYVF06IHtcclxuICAgICAgICBoYW5kbGVyOiBhc3luYyAoZSwgdCkgPT4ge1xyXG4gICAgICAgICAgbGV0IHIgPSBlLmxhYmVsLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICByLmluY2x1ZGVzKFwicGhvbmVcIikgfHwgci5pbmNsdWRlcyhcInRcXHhlOWxcXHhlOXBob25lXCIpIHx8IHIuaW5jbHVkZXMoXCJtb2JpbGVcIikgP1xyXG4gICAgICAgICAgICBhd2FpdCAoMCwgZC5maWxsUGhvbmVGaWVsZCkoZSwgdCwgaih0aGlzLmFuc3dlciksIHRoaXMuYW5zd2VyPy5jb3VudHJ5KSA6IGF3YWl0IChcclxuICAgICAgICAgICAgICAwLCBkLmZpbGxBdXRvY29tcGxldGVGaWVsZCkoZSwgdClcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGV4cGVjdEFycmF5OiAhMVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgW20uRklFTERfVFlQRS5EQVRFXToge1xyXG4gICAgICAgIGhhbmRsZXI6IChlLCB0KSA9PiAoMCwgZC5maWxsWm9ob0RhdGVGaWVsZCkoZSwgdCksXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgZXhwZWN0QXJyYXk6ICExXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBbbS5GSUVMRF9UWVBFLlJBRElPR1JPVVBdOiB7XHJcbiAgICAgICAgaGFuZGxlcjogKGUsIHQpID0+ICgwLCBsLmZpbGxDaGVja0JveGVzRmllbGQpKGUsIFt0XSksXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgZXhwZWN0QXJyYXk6ICExXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBbbS5GSUVMRF9UWVBFLlNFTEVDVF06IHtcclxuICAgICAgICBoYW5kbGVyOiAoZSwgdCkgPT4gKDAsIGQuZmlsbFpvaG9Ecm9wZG93bkRpcmVjdGx5KShlLCB0KSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITFcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFttLkZJRUxEX1RZUEUuTVVMVElfU0VMRUNUXToge1xyXG4gICAgICAgIGhhbmRsZXI6IChlLCB0KSA9PiAoMCwgZC5maWxsTXVsdGlDaGVja2JveCkoZSwgdCksXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgZXhwZWN0QXJyYXk6ICExXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldFNpdGVOYW1lKCkge1xyXG4gICAgcmV0dXJuIFwiem9ob3JlY3J1aXRcIlxyXG4gIH1cclxuICBhc3luYyBydW5QcmVGaWxsRm9ybSgpIHtcclxuICAgIHRoaXMudGFza1F1ZXVlLmFkZChkLnByZUZpbGxGb3JtKSwgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKCksIGF3YWl0ICgwLCBkLmNsZWFyQWxsUG9wdXBzKSgpXHJcbiAgfVxyXG4gIGFzeW5jIGV4dHJhY3RGb3JtUnVsZXMoKSB7XHJcbiAgICByZXR1cm4gQSgpXHJcbiAgfVxyXG4gIGZvcm1hdEFuc3dlcihlKSB7XHJcbiAgICByZXR1cm4gKDAsIHUuZm9ybWF0QW5zd2VyKShlLCBlLmNvdW50cnkpXHJcbiAgfVxyXG4gIGFzeW5jIGRvRmlsbEZvcm0oZSA9ICExKSB7XHJcbiAgICBhd2FpdCB0aGlzLmluaXRpYWxpemVGaWxsRm9ybSgpO1xyXG4gICAgbGV0IHQgPSBhd2FpdCB0aGlzLmV4dHJhY3RGb3JtUnVsZXMoKTtcclxuICAgIHRoaXMuc25hcHNob3RSdWxlcyA9IHQsIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnNldEZpZWxkc1JlcXVpcmVkU3RhdHVzKHQpO1xyXG4gICAgbGV0IHIgPSBhd2FpdCB0aGlzLmZldGNoRm9ybUFuc3dlcnModCwgZSk7XHJcbiAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgcikgcmV0dXJuIHI7XHJcbiAgICAoMCwgYS5jaGVja3BvaW50KSgpO1xyXG4gICAgbGV0IG4gPSBJKHQsIHRoaXMuYW5zd2VyLnJlZ3VsYXIsIHRoaXMub3BlcmF0aW9uQ29uZmlnLCB0aGlzLnByb2dyZXNzVHJhY2tlciwgKGUsIHQsIHIpID0+XHJcbiAgICAgIHRoaXMucmVzb2x2ZVpvaG9DaXR5KGUsIHQsIHIpKTtcclxuICAgIGZvciAobGV0IGUgb2YgbikgdGhpcy50YXNrUXVldWUuYWRkKGUpO1xyXG4gICAgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKCksIHRoaXMuZGlzYWJsZVVwbG9hZFJlc3VtZSA/IHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgIC51cGRhdGVNaXNzZWRQcm9ncmVzcyhcIlJlc3VtZS9DVlwiKSA6IHRoaXMudGFza1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgKDAsIGQudXBsb2FkUmVzdW1lKSh0aGlzLnJlc3VtZUluZm8sIHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgICAgICAudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cywgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MpXHJcbiAgICAgIH0pLCB0aGlzLmNvdmVyTGV0dGVyPy5jb3ZlckxldHRlcklkICYmIHRoaXMudGFza1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgKDAsIGQudXBsb2FkQ292ZXJMZXR0ZXIpKHRoaXMuY292ZXJMZXR0ZXIsIHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgICAgICAudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cywgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MpXHJcbiAgICAgIH0pO1xyXG4gICAgbGV0IG8gPSB0LmZpbmQoZSA9PiBcIlNLSUxMX1NFVFwiID09PSBlLnR5cGUgfHwgZS5sYWJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwic2tpbGxcIikgfHwgZVxyXG4gICAgICAgIC5sYWJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwiY29tcFxceGU5dGVuY2VcIikgfHwgZS4kaW5wdXQ/LmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgICAgIFwic2tpbGxzZXQtaW5wdXRcIikpLFxyXG4gICAgICBsID0gbz8ubGFiZWw7XHJcbiAgICBpZiAobyAmJiBsICYmIHRoaXMuYW5zd2VyLnNraWxscyAmJiB0aGlzLmFuc3dlci5za2lsbHMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWVsZFJlcXVpcmVkU3RhdHVzKHtcclxuICAgICAgICBsYWJlbDogbCxcclxuICAgICAgICByZXF1aXJlZDogby5yZXF1aXJlZFxyXG4gICAgICB9KSwgKDAsIGEudXBkYXRlQ3VycmVudEZpZWxkKShsKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCAoMCwgYS53aXRoU2tpcCkoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgbGV0IGUgPSBhd2FpdCAoMCwgZC5maWxsWm9ob1NraWxsU2V0RmllbGQpKG8sIHRoaXMuYW5zd2VyLnNraWxscyk7XHJcbiAgICAgICAgICBlID8gdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MobCkgOiB0aGlzLnByb2dyZXNzVHJhY2tlclxyXG4gICAgICAgICAgICAudXBkYXRlTWlzc2VkUHJvZ3Jlc3MobClcclxuICAgICAgICB9KVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBhLkNhbmNlbGxlZEVycm9yKSB0aHJvdyBlO1xyXG4gICAgICAgIGUgaW5zdGFuY2VvZiBhLlNraXBwZWRFcnJvciB8fCBjb25zb2xlLmVycm9yKFwiW1pvaG9SZWNydWl0XSBza2lsbHMgZmlsbCBlcnJvcjpcIiwgZSksXHJcbiAgICAgICAgICB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhsKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBlID0gMTsgZSA8IHRoaXMuYW5zd2VyLmVkdWNhdGlvbi5sZW5ndGg7IGUrKykgYXdhaXQgKDAsIGQuYWRkRWR1Y2F0aW9uUm93KShlKTtcclxuICAgIGxldCBzID0gYXdhaXQgKDAsIHAuZ2V0RWR1UnVsZXMpKCksXHJcbiAgICAgIHUgPSAoMCwgaC5jcmVhdGVTZXF1ZW50aWFsU2VjdGlvblJlc3VsdFJlcG9ydGVyKShcImVkdWNhdGlvblwiLCB0aGlzLnByb2dyZXNzVHJhY2tlcik7XHJcbiAgICBmb3IgKGxldCBlID0gMDsgZSA8IHRoaXMuYW5zd2VyLmVkdWNhdGlvbi5sZW5ndGg7IGUrKykge1xyXG4gICAgICBsZXQgdCA9IHRoaXMuYW5zd2VyLmVkdWNhdGlvbltlXSxcclxuICAgICAgICByID0gc1tlXTtcclxuICAgICAgaWYgKHIgJiYgci5jaGlsZHJlbikge1xyXG4gICAgICAgIGxldCBuID0gci5jaGlsZHJlbixcclxuICAgICAgICAgIG8gPSAoMCwgZy5jcmVhdGVab2hvUmVjb3JkUmVzdWx0KShcImVkdWNhdGlvblwiLCBlLCByLCB0LCB1KSxcclxuICAgICAgICAgIGEgPSBuLmZpbHRlcihlID0+IGUudHlwZSA9PT0gbS5GSUVMRF9UWVBFLlRFWFQpLFxyXG4gICAgICAgICAgbCA9ICgwLCBpLmdldFJlZ3VsYXJPcGVyYXRpb25zKShhLCB0LCBvLm9wZXJhdGlvbkNvbmZpZyh0aGlzLm9wZXJhdGlvbkNvbmZpZykpO1xyXG4gICAgICAgIGZvciAobGV0IGUgb2YgbCkgYXdhaXQgZSgpO1xyXG4gICAgICAgIGxldCBzID0gbi5maW5kKGUgPT4gZS5sYWJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwiY3VycmVudGx5IHB1cnN1aW5nXCIpKTtcclxuICAgICAgICBpZiAocyAmJiBzLiRpbnB1dCkge1xyXG4gICAgICAgICAgbGV0IGUgPSBTKHQpO1xyXG4gICAgICAgICAgYXdhaXQgby5ydW4ocywgZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdCA9IHMuJGlucHV0O1xyXG4gICAgICAgICAgICByZXR1cm4geCh0LCBlKSwgdCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgdC5jaGVja2VkID09PSBlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYyA9IG4uZmlsdGVyKGUgPT4gZS50eXBlID09PSBtLkZJRUxEX1RZUEUuU0VMRUNUKTtcclxuICAgICAgICBmb3IgKGxldCBlIG9mIGMpIHtcclxuICAgICAgICAgIGxldCByID0gdFtlLm5hbWVdIHx8IHRbZS5sYWJlbF07XHJcbiAgICAgICAgICBpZiAoIXIpIHtcclxuICAgICAgICAgICAgbGV0IG4gPSBlLmxhYmVsLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGlmIChuLmluY2x1ZGVzKFwic3RhcnRcIikgfHwgbi5pbmNsdWRlcyhcImZyb21cIikpIHtcclxuICAgICAgICAgICAgICBsZXQgZSA9IHRbXCJTdGFydCBkYXRlXCJdIHx8IHQuRnJvbTtcclxuICAgICAgICAgICAgICBpZiAoZSAmJiBlLmluY2x1ZGVzKFwiL1wiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IFt0LCBvXSA9IGUuc3BsaXQoXCIvXCIpO1xyXG4gICAgICAgICAgICAgICAgciA9IG4uaW5jbHVkZXMoXCJtb250aFwiKSA/IHQgOiBvXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG4uaW5jbHVkZXMoXCJlbmRcIikgfHwgbi5pbmNsdWRlcyhcInRvXCIpKSB7XHJcbiAgICAgICAgICAgICAgbGV0IGUgPSB0W1wiRW5kIGRhdGVcIl0gfHwgdC5UbztcclxuICAgICAgICAgICAgICBpZiAoZSAmJiBlLmluY2x1ZGVzKFwiL1wiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IFt0LCBvXSA9IGUuc3BsaXQoXCIvXCIpO1xyXG4gICAgICAgICAgICAgICAgciA9IG4uaW5jbHVkZXMoXCJtb250aFwiKSA/IHQgOiBvXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAocikgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgby5ydW4oZSwgciwgKCkgPT4gKDAsIGQuZmlsbFpvaG9Ecm9wZG93bkRpcmVjdGx5KShlLCByKSlcclxuICAgICAgICAgIH0gY2F0Y2ggKHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgW1pvaG8tTWFudWFsXSBcXHU1ODZiXFx1NTE0NSAke2UubGFiZWx9IFxcdTU5MzFcXHU4ZDI1YCwgdClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0oMCwgZi5zaG91bGRNYXJrWm9ob1NlY3Rpb25GaWxsZWQpKHRoaXMuYW5zd2VyLmVkdWNhdGlvbiwgcykgJiYgdGhpcy5wcm9ncmVzc1RyYWNrZXJcclxuICAgICAgLnVwZGF0ZUZpbGxlZFByb2dyZXNzKFwiRWR1Y2F0aW9uXCIpO1xyXG4gICAgZm9yIChsZXQgZSA9IDE7IGUgPCB0aGlzLmFuc3dlci53b3JrRXhwZXJpZW5jZS5sZW5ndGg7IGUrKykgYXdhaXQgKDAsIGQuYWRkRXhwZXJpZW5jZVJvdykoXHJcbiAgICBlKTtcclxuICAgIGxldCBjID0gYXdhaXQgKDAsIHAuZ2V0RXhwUnVsZXMpKCksXHJcbiAgICAgIGIgPSAoMCwgaC5jcmVhdGVTZXF1ZW50aWFsU2VjdGlvblJlc3VsdFJlcG9ydGVyKShcImVtcGxveW1lbnRcIiwgdGhpcy5wcm9ncmVzc1RyYWNrZXIpO1xyXG4gICAgZm9yIChsZXQgZSA9IDA7IGUgPCB0aGlzLmFuc3dlci53b3JrRXhwZXJpZW5jZS5sZW5ndGg7IGUrKykge1xyXG4gICAgICBsZXQgdCA9IHRoaXMuYW5zd2VyLndvcmtFeHBlcmllbmNlW2VdLFxyXG4gICAgICAgIHIgPSBjW2VdO1xyXG4gICAgICBpZiAociAmJiByLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgbGV0IG4gPSByLmNoaWxkcmVuLFxyXG4gICAgICAgICAgbyA9ICgwLCBnLmNyZWF0ZVpvaG9SZWNvcmRSZXN1bHQpKFwiZW1wbG95bWVudFwiLCBlLCByLCB0LCBiKSxcclxuICAgICAgICAgIGEgPSBuLmZpbHRlcihlID0+IGUudHlwZSA9PT0gbS5GSUVMRF9UWVBFLlRFWFQpLFxyXG4gICAgICAgICAgbCA9ICgwLCBpLmdldFJlZ3VsYXJPcGVyYXRpb25zKShhLCB0LCBvLm9wZXJhdGlvbkNvbmZpZyh0aGlzLm9wZXJhdGlvbkNvbmZpZykpO1xyXG4gICAgICAgIGZvciAobGV0IGUgb2YgbCkgYXdhaXQgZSgpO1xyXG4gICAgICAgIGxldCBzID0gbi5maWx0ZXIoZSA9PiBlLnR5cGUgPT09IG0uRklFTERfVFlQRS5TRUxFQ1QpO1xyXG4gICAgICAgIGZvciAobGV0IGUgb2Ygcykge1xyXG4gICAgICAgICAgbGV0IHIgPSB0W2UubmFtZV0gfHwgdFtlLmxhYmVsXTtcclxuICAgICAgICAgIGlmICghcikge1xyXG4gICAgICAgICAgICBsZXQgbiA9IGUubGFiZWwudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgaWYgKG4uaW5jbHVkZXMoXCJzdGFydFwiKSB8fCBuLmluY2x1ZGVzKFwiZnJvbVwiKSkge1xyXG4gICAgICAgICAgICAgIGxldCBlID0gdFtcIlN0YXJ0IGRhdGVcIl0gfHwgdC5Gcm9tO1xyXG4gICAgICAgICAgICAgIGlmIChlICYmIGUuaW5jbHVkZXMoXCIvXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgW3QsIG9dID0gZS5zcGxpdChcIi9cIik7XHJcbiAgICAgICAgICAgICAgICByID0gbi5pbmNsdWRlcyhcIm1vbnRoXCIpID8gdCA6IG9cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobi5pbmNsdWRlcyhcImVuZFwiKSB8fCBuLmluY2x1ZGVzKFwidG9cIikpIHtcclxuICAgICAgICAgICAgICBsZXQgZSA9IHRbXCJFbmQgZGF0ZVwiXSB8fCB0LlRvO1xyXG4gICAgICAgICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwicHJlc2VudFwiKSkgbi5pbmNsdWRlcyhcIm1vbnRoXCIpLCByID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGUuaW5jbHVkZXMoXCIvXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgIGxldCBbdCwgb10gPSBlLnNwbGl0KFwiL1wiKTtcclxuICAgICAgICAgICAgICAgICAgciA9IG4uaW5jbHVkZXMoXCJtb250aFwiKSA/IHQgOiBvXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAocikgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgby5ydW4oZSwgciwgKCkgPT4gKDAsIGQuZmlsbFpvaG9Ecm9wZG93bkRpcmVjdGx5KShlLCByKSksIGF3YWl0IG5ldyBQcm9taXNlKFxyXG4gICAgICAgICAgICAgIGUgPT4gc2V0VGltZW91dChlLCAzMDApKVxyXG4gICAgICAgICAgfSBjYXRjaCAodCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICAgICAgIGBbWm9oby1NYW51YWxdIFxcdTVkZTVcXHU0ZjVjXFx1N2VjZlxcdTUzODYgJHtlLmxhYmVsfSBcXHU1ODZiXFx1NTE0NVxcdTU5MzFcXHU4ZDI1YCxcclxuICAgICAgICAgICAgICB0KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdSA9IG4uZmluZChlID0+IGUubGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImN1cnJlbnRseSB3b3JrXCIpIHx8IGUubmFtZVxyXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJpc19jdXJyZW50XCIpKTtcclxuICAgICAgICBpZiAodSAmJiB1LiRpbnB1dCkge1xyXG4gICAgICAgICAgbGV0IGUgPSBFKHQpO1xyXG4gICAgICAgICAgYXdhaXQgby5ydW4odSwgZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdCA9IHUuJGlucHV0O1xyXG4gICAgICAgICAgICByZXR1cm4geCh0LCBlKSwgdCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgdC5jaGVja2VkID09PSBlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSgwLCBmLnNob3VsZE1hcmtab2hvU2VjdGlvbkZpbGxlZCkodGhpcy5hbnN3ZXIud29ya0V4cGVyaWVuY2UsIGMpICYmIHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgIC51cGRhdGVGaWxsZWRQcm9ncmVzcyhcIkVtcGxveW1lbnRcIiksIHRoaXMudGFza1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XHJcbiAgICAgICAgZS5mb3JFYWNoKGUgPT4gZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImJsdXJcIikpKSwgYXdhaXQgKDAsIGRcclxuICAgICAgICAgIC5maWxsQWdyZWVtZW50Q2hlY2tib3gpKClcclxuICAgICAgfSksIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpO1xyXG4gICAgbGV0IHkgPSBhd2FpdCB0aGlzLmZpbmFsaXplRmlsbEZvcm0oKTtcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLmJpbmRTdWJtaXRCdXR0b25UcmFja2luZyh0KSwgeVxyXG4gIH1cclxuICBhc3luYyByZXNvbHZlWm9ob0NpdHkoZSwgdCwgcikge1xyXG4gICAgbGV0IG4gPSBlPy4kaW5wdXQ7XHJcbiAgICBpZiAoIW4gfHwgISgwLCBjLmlzWm9ob1JlY3J1aXRDaXR5QXV0b2NvbXBsZXRlUnVsZSkoZSkpIHJldHVybiAhMTtcclxuICAgIGxldCBpID0gKDAsIGMuZ2V0Wm9ob1JlY3J1aXRDaXR5T3JpZ2luYWxBbnN3ZXIpKHRoaXMuYW5zd2VyLCB0LCByKSxcclxuICAgICAgYSA9IERhdGUubm93KCk7XHJcbiAgICBpZiAoY29uc29sZS5pbmZvKFwiW1pvaG9SZWNydWl0XVtDaXR5XSByZXNvbHZlLXN0YXJ0XCIsIHtcclxuICAgICAgICBhbnN3ZXJTb3VyY2U6IGkuc291cmNlLFxyXG4gICAgICAgIGhhc09yaWdpbmFsQW5zd2VyOiAhIWkudmFsdWVcclxuICAgICAgfSksICFpLnZhbHVlKSByZXR1cm4gYXdhaXQgKDAsIGQuY2xlYXJab2hvQXV0b2NvbXBsZXRlRm9ySW5wdXQpKG4pLCAhMTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB0ID0gKDAsIGMuYnVpbGRab2hvUmVjcnVpdENpdHlPcGVyYXRpb24pKHtcclxuICAgICAgICAgIHBhZ2VVcmw6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxyXG4gICAgICAgICAgb3JpZ2luYWxBbnN3ZXI6IGkudmFsdWVcclxuICAgICAgICB9KSxcclxuICAgICAgICByID0gYXdhaXQgKDAsIG8uc2VuZFRvQmFja2dyb3VuZCkoe1xyXG4gICAgICAgICAgbmFtZTogXCJyZXNvbHZlQXV0b2ZpbGxPcGVyYXRpb25cIixcclxuICAgICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgICAgb3BlcmF0aW9uOiB0LFxyXG4gICAgICAgICAgICBzb3VyY2U6IFwiem9ob3JlY3J1aXRcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGwgPSAoMCwgYy5nZXRab2hvUmVjcnVpdFJlc29sdmVkQ2l0eVZhbHVlKShyKTtcclxuICAgICAgaWYgKGNvbnNvbGUuaW5mbyhcIltab2hvUmVjcnVpdF1bQ2l0eV0gcmVzb2x2ZS1yZXN1bHRcIiwge1xyXG4gICAgICAgICAgYWN0aW9uOiByPy5yZXN1bHQ/LmFjdGlvbiA/PyBcIm1pc3NpbmdcIixcclxuICAgICAgICAgIHNlbGVjdGVkQ291bnQ6IHI/LnJlc3VsdD8uc2VsZWN0ZWRfdmFsdWVzPy5sZW5ndGggPz8gMCxcclxuICAgICAgICAgIGVsYXBzZWRNczogRGF0ZS5ub3coKSAtIGFcclxuICAgICAgICB9KSwgIWwpIHJldHVybiBhd2FpdCAoMCwgZC5jbGVhclpvaG9BdXRvY29tcGxldGVGb3JJbnB1dCkobiksICExO1xyXG4gICAgICBsZXQgcyA9IGF3YWl0ICgwLCBkLnNlbGVjdFpvaG9BdXRvY29tcGxldGVPcHRpb24pKGUsIGwsIFtdLCB7XHJcbiAgICAgICAgZXhhY3RPbmx5OiAhMFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNvbnNvbGUuaW5mbyhcIltab2hvUmVjcnVpdF1bQ2l0eV0gY29tbWl0LXJlc3VsdFwiLCB7XHJcbiAgICAgICAgY29tbWl0dGVkOiBzLFxyXG4gICAgICAgIGVsYXBzZWRNczogRGF0ZS5ub3coKSAtIGFcclxuICAgICAgfSksIHNcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihcIltab2hvUmVjcnVpdF1bQ2l0eV0gcmVzb2x2ZS1mYWlsZWRcIiwge1xyXG4gICAgICAgIHJlYXNvbjogZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogXCJ1bmtub3duLWVycm9yXCIsXHJcbiAgICAgICAgZWxhcHNlZE1zOiBEYXRlLm5vdygpIC0gYVxyXG4gICAgICB9KSwgYXdhaXQgKDAsIGQuY2xlYXJab2hvQXV0b2NvbXBsZXRlRm9ySW5wdXQpKG4pLCAhMVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBnZXRBdXRvZmlsbFNuYXBzaG90KGUpIHtcclxuICAgIHJldHVybiB0aGlzLnNuYXBzaG90UnVsZXMgPSBlLCB0aGlzLmZpeGVkQXV0b2ZpbGxTbmFwc2hvdCA9IGF3YWl0ICgwLCBwLmdldEZvcm1TbmFwc2hvdCkoZSksXHJcbiAgICAgIHRoaXMuZml4ZWRBZGRpdGlvbmFsQXV0b2ZpbGxEYXRhID0gYXdhaXQgKDAsIHAuZ2V0QWRkaXRpb25hbEZvcm1TbmFwc2hvdERhdGEpKGUpLCAoMCwgYlxyXG4gICAgICAgIC50cmFja0V2ZW50KShcInpvaG9yZWNydWl0X2Zvcm1fYXV0b2ZpbGxfYW5zd2VyXCIsIHtcclxuICAgICAgICBmb3JtVXJsOiB3aW5kb3cubG9jYXRpb24uaHJlZixcclxuICAgICAgICBhbnN3ZXI6IHtcclxuICAgICAgICAgIC4uLnRoaXMuZml4ZWRBdXRvZmlsbFNuYXBzaG90LFxyXG4gICAgICAgICAgLi4udGhpcy5maXhlZEFkZGl0aW9uYWxBdXRvZmlsbERhdGFcclxuICAgICAgICB9XHJcbiAgICAgIH0pLCB0aGlzLmZpeGVkQXV0b2ZpbGxTbmFwc2hvdFxyXG4gIH1cclxuICBhc3luYyBnZXRTdWJtaXRTbmFwc2hvdCgpIHtcclxuICAgIGxldCBlID0gYXdhaXQgKDAsIHAuZ2V0Rm9ybVNuYXBzaG90KSh0aGlzLnNuYXBzaG90UnVsZXMpO1xyXG4gICAgcmV0dXJuIHRoaXMubGF0ZXN0QWRkaXRpb25hbFN1Ym1pdERhdGEgPSBhd2FpdCAoMCwgcC5nZXRBZGRpdGlvbmFsRm9ybVNuYXBzaG90RGF0YSkodGhpc1xyXG4gICAgICAuc25hcHNob3RSdWxlcyksIGVcclxuICB9XHJcbiAgZ2V0QWRkaXRpb25hbEF1dG9maWxsU25hcHNob3REYXRhKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZml4ZWRBZGRpdGlvbmFsQXV0b2ZpbGxEYXRhXHJcbiAgfVxyXG4gIGdldEFkZGl0aW9uYWxTdWJtaXRTbmFwc2hvdERhdGEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5sYXRlc3RBZGRpdGlvbmFsU3VibWl0RGF0YVxyXG4gIH1cclxuICBub3JtYWxpemVBdXRvZmlsbEFuc3dlclBhaXJUcmFja2luZ0RhdGEoZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uZSxcclxuICAgICAgZm9ybVVybDogd2luZG93LmxvY2F0aW9uLmhyZWYsXHJcbiAgICAgIGF1dG9maWxsU25hcHNob3Q6IHRoaXMuZml4ZWRBdXRvZmlsbFNuYXBzaG90LFxyXG4gICAgICBhZGRpdGlvbmFsQXV0b2ZpbGxEYXRhOiB0aGlzLmZpeGVkQWRkaXRpb25hbEF1dG9maWxsRGF0YVxyXG4gICAgfVxyXG4gIH1cclxuICBnZXRTdWJtaXRCdXR0b25TZWxlY3RvcigpIHtcclxuICAgIHJldHVybiAnLi8vKltAaWQ9XCJjdy1zdWJtaXQtYnRuXCJdLy9idXR0b25bQHR5cGU9XCJzdWJtaXRcIl0nXHJcbiAgfVxyXG4gIGNoZWNrQ292ZXJMZXR0ZXIoKSB7XHJcbiAgICAoMCwgZC5jaGVja0NvdmVyTGV0dGVyKSgpXHJcbiAgfVxyXG4gIHN1Ym1pdEFwcGxpY2F0aW9uKCkge1xyXG4gICAgKDAsIGQuc3VibWl0QXBwbGljYXRpb24pKClcclxuICB9XHJcbiAgY29uc3RydWN0b3IoLi4uZSkge1xyXG4gICAgc3VwZXIoLi4uZSksIHRoaXMuc25hcHNob3RSdWxlcyA9IFtdLCB0aGlzLmZpeGVkQXV0b2ZpbGxTbmFwc2hvdCA9IHt9LCB0aGlzXHJcbiAgICAgIC5maXhlZEFkZGl0aW9uYWxBdXRvZmlsbERhdGEgPSB7fSwgdGhpcy5sYXRlc3RBZGRpdGlvbmFsU3VibWl0RGF0YSA9IHt9XHJcbiAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiem9ob3JlY3J1aXQuNTUzN2RiMDkuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);