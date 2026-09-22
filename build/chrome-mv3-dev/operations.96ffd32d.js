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
})({"6NOmI":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\brassring\\operations.js",
    "bundleId": "82b0b0ff96ffd32d",
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
var j = z(require("44b5f0c6b376de4d"));
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

},{"44b5f0c6b376de4d":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"h9Xac":[function(require,module,exports) {
/**
 * Parcel module id: 9ZJbU
 * Resolved path: src/contents/sites/brassring/operations.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/choice-match -> 6mkI4  =>  src/contents/methods/choice-match.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/observer -> eTzUx  =>  src/contents/methods/observer.js
 *   ~contents/shared/filler -> 2aGsX  =>  src/contents/shared/filler.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "buildBrassringFieldFillCandidates", ()=>I), n.export(r, "normalizeBrassringDateValueForInput", ()=>P), n.export(r, "findDependentStateProvinceField", ()=>er), n.export(r, "getAutocompleteListboxId", ()=>es), n.export(r, "findAutocompleteToggle", ()=>ed), n.export(r, "hasCommittedAutocompleteSelection", ()=>eM), n.export(r, "fillInputTextField", ()=>eq), n.export(r, "fillSelectField", ()=>eU), n.export(r, "fillSearchField", ()=>eH), n.export(r, "fillMultiselectField", ()=>eW), n.export(r, "fillRadioGroupField", ()=>e3), n.export(r, "fillCheckboxField", ()=>e4), n.export(r, "BRASSRING_RESUME_LABEL", ()=>e5), n.export(r, "captureBrassringResumeParserBaseline", ()=>td), n.export(r, "waitForBrassringResumeParsingComplete", ()=>tp), n.export(r, "findVisibleUploadDialogInput", ()=>tF), n.export(r, "hasCoverLetterUploadSlot", ()=>tY), n.export(r, "getResumeUploadState", ()=>tV), n.export(r, "hasResumeUploadSlot", ()=>tW), n.export(r, "isCoverLetterRequired", ()=>tG), n.export(r, "getUploadSnapshotValues", ()=>t4), n.export(r, "uploadResume", ()=>rn), n.export(r, "uploadCoverLetter", ()=>ro), n.export(r, "openSectionForEdit", ()=>rh), n.export(r, "ensureSectionCount", ()=>rg), n.export(r, "waitForCompositeSectionRows", ()=>rb), n.export(r, "seedEmptyCompositeSections", ()=>ry), n.export(r, "saveSection", ()=>rw), n.export(r, "preFillForm", ()=>rS), n.export(r, "submitApplication", ()=>rx);
var o = e("~contents/methods/choice-match"), i = e("dayjs"), a = n.interopDefault(i), l = e("@plasmohq/messaging"), s = e("~contents/shared/filler"), u = e("~contents/methods/answer"), c = e("~contents/methods/cancellation"), d = e("~contents/methods/dom"), f = e("~contents/methods/observer"), p = e("~utils/delay");
let m = ".immersive-translate-target-wrapper, [data-immersive-translate-translation-element-mark]", h = ".fieldcontain", g = "#AttachementCatagory", b = "Letter of Recommendation", y = {
    education: {
        addSelector: "#addEdu, a[aria-label*='Education history']",
        listSelector: "ul.educationList, ul[class*='educationList'], ul[aria-label^='Education history']",
        removeClickToken: "addRemoveEducation",
        updateClickToken: "updateEducation",
        doneContainerSelector: ".eduButtonContainer",
        maxCount: 3
    },
    experience: {
        addSelector: "#addExp, a[aria-label*='Work experience']",
        listSelector: "ul.experienceList, ul[class*='experienceList'], ul[aria-label^='Work experience'], ul[aria-label^='Experience']",
        removeClickToken: "addRemoveExperience",
        updateClickToken: "updateExperience",
        doneContainerSelector: ".expButtonContainer, .experienceButtonContainer",
        maxCount: 7
    }
};
function v(e1) {
    return e1.replace(/\s+/g, " ").replace(/[^\p{L}\p{N}\s+#.-]/gu, "").trim().toLowerCase();
}
function w(e1) {
    if (!e1) return "";
    let t = e1.cloneNode(!0);
    return t.querySelectorAll(m).forEach((e1)=>e1.remove()), (t.textContent || "").replace(/\s+/g, " ").trim();
}
function S(e1) {
    let t = Array.isArray(e1) ? e1 : [
        e1
    ];
    return t.flatMap((e1)=>String(e1 ?? "").split(/[\n,;]/)).map((e1)=>e1.trim()).filter(Boolean);
}
_c = S;
let E = [
    {
        pattern: /\b(juris\s+doctor|j\s*d)\b/,
        optionLabels: [
            "Juris Doctor"
        ]
    },
    {
        pattern: /\bprofessional\s+doctorate\b/,
        optionLabels: [
            "Professional Doctorate"
        ]
    },
    {
        pattern: /\b(ph\s*d|phd|doctorate|doctoral|doctor)\b/,
        optionLabels: [
            "Doctorate awarded"
        ]
    },
    {
        pattern: /\b(masters?|m\s*s|m\s*sc|msc|m\s*a|mba|m\s*b\s*a|m\s*eng|meng|m\s*se|mse)\b/,
        optionLabels: [
            "Master's degree"
        ]
    },
    {
        pattern: /\b(bachelors?|b\s*s|b\s*a|b\s*sc|bsc|b\s*eng|beng)\b/,
        optionLabels: [
            "Bachelor's degree"
        ]
    },
    {
        pattern: /\b(associates?|a\s*s|a\s*a)\b/,
        optionLabels: [
            "Associate's degree"
        ]
    },
    {
        pattern: /\bhigh\s+school\b/,
        optionLabels: [
            "High School"
        ]
    },
    {
        pattern: /\bpost\s+graduate\s+certificate\b/,
        optionLabels: [
            "Post Graduate Certificate"
        ]
    },
    {
        pattern: /\b(no\s+degree|none|no\s+final\s+certificate)\b/,
        optionLabels: [
            "No final certificate"
        ]
    },
    {
        pattern: /\b(certificate|certification|cert)\b/,
        optionLabels: [
            "Certificate"
        ]
    },
    {
        pattern: /\bdiploma\b/,
        optionLabels: [
            "Diploma"
        ]
    }
];
function x(e1) {
    return v(String(e1 ?? "")).replace(/[./_-]+/g, " ").replace(/\s+/g, " ").trim();
}
function C(e1) {
    return "degree" === v(String(e1?.label ?? ""));
}
_c1 = C;
function A(e1) {
    return Array.isArray(e1.options) ? e1.options.map((e1)=>"string" == typeof e1 ? e1 : e1 && "object" == typeof e1 && "label" in e1 && "string" == typeof e1.label ? e1.label : "").map((e1)=>e1.trim()).filter(Boolean) : [];
}
_c2 = A;
function k(e1, t) {
    let r1 = A(e1);
    if (0 === r1.length) return null;
    for (let e1 of t){
        let t = x(e1), n = r1.find((e1)=>x(e1) === t);
        if (n) return n;
    }
    return null;
}
function T(e1) {
    let t = x(e1);
    if (!t) return [];
    let r1 = E.find(({ pattern: e1 })=>e1.test(t));
    return r1?.optionLabels || [];
}
_c3 = T;
function F(e1, t) {
    let r1 = x(t);
    r1 && (e1.some((e1)=>x(e1) === r1) || e1.push(t));
}
_c4 = F;
function I(e1, t) {
    let r1 = S(t);
    if (!C(e1)) return r1;
    let n = [];
    for (let t of r1){
        let r1 = T(t);
        0 !== r1.length && F(n, k(e1, r1) || r1[0]);
    }
    for (let e1 of r1)F(n, e1);
    return n;
}
_c5 = I;
function j(e1, t) {
    let r1 = e1 instanceof HTMLTextAreaElement ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(r1, "value")?.set;
    n ? n.call(e1, t) : e1.value = t;
}
function D(e1) {
    let t = e1.trim(), r1 = [
        "jan",
        "feb",
        "mar",
        "apr",
        "may",
        "jun",
        "jul",
        "aug",
        "sep",
        "oct",
        "nov",
        "dec"
    ], n = (e1)=>{
        let t = e1.toLowerCase().replace(/\.$/, "").slice(0, 3), n = r1.indexOf(t);
        return n >= 0 ? n + 1 : 0;
    }, o = t.match(/^((?:19|20)\d{2})[-/.](0?[1-9]|1[0-2])(?:[-/.](0?[1-9]|[12]\d|3[01]))?$/);
    if (o) return {
        year: Number(o[1]),
        month: Number(o[2]),
        day: Number(o[3] || 1)
    };
    let i = t.match(/^(0?[1-9]|1[0-2])[-/.](?:(0?[1-9]|[12]\d|3[01])[-/.])?((?:19|20)\d{2})$/);
    if (i) return {
        year: Number(i[3]),
        month: Number(i[1]),
        day: Number(i[2] || 1)
    };
    let a = t.match(/^([A-Za-z]+)\.?\s+(?:(0?[1-9]|[12]\d|3[01]),?\s+)?((?:19|20)\d{2})$/);
    if (a) {
        let e1 = n(a[1]);
        if (e1 > 0) return {
            year: Number(a[3]),
            month: e1,
            day: Number(a[2] || 1)
        };
    }
    return null;
}
_c6 = D;
function P(e1, t) {
    if (!(e1 instanceof HTMLInputElement)) return t;
    let r1 = String(t ?? "").trim();
    if (!r1) return r1;
    let n = (e1)=>e1.trim().replace(/m+/gi, (e1)=>"M".repeat(e1.length)).replace(/d+/gi, (e1)=>"D".repeat(e1.length)).replace(/y+/gi, (e1)=>2 === e1.length ? "YY" : "YYYY"), o = e1.placeholder?.trim() || "", i = n(o), l = !!i && i.includes("M") && i.includes("D") && i.includes("Y"), s = !!i && /^[MY\s./-]+$/.test(i) && i.includes("M") && i.includes("Y"), u = e1.classList.contains("monthyear") || e1.classList.contains("monthYear") || e1.classList.contains("endmonthYear") || e1.classList.contains("startmonthYear") || e1.hasAttribute("custom-month-picker") || /year\/month|month\/year/i.test(e1.getAttribute("aria-label") || e1.getAttribute("name") || e1.id || "") || s;
    if (l) {
        let e1 = D(r1);
        return e1 ? (0, a.default)(`${e1.year}-${String(e1.month).padStart(2, "0")}-${String(e1.day).padStart(2, "0")}`).format(i) : r1;
    }
    if (!u) return r1;
    let c = (0, a.default)(r1, [
        i,
        "YYYY-MM-DD",
        "YYYY-M-D",
        "YYYY/M/D",
        "YYYY/MM/DD",
        "YYYY-MM",
        "YYYY-M",
        "YYYY/MM",
        "YYYY/M",
        "M/YYYY",
        "MM/YYYY",
        "M-YYYY",
        "MM-YYYY",
        "M.YYYY",
        "MM.YYYY",
        "MMM-YYYY",
        "MMMM-YYYY",
        "MMM YYYY",
        "MMMM YYYY",
        "MMM/YYYY",
        "MMMM/YYYY"
    ].filter(Boolean), !0);
    return c.isValid() ? i ? c.format(i) : /[A-Za-z]/.test(r1) ? c.format("MMM-YYYY") : c.format("M/YYYY") : r1;
}
_c7 = P;
function _(e1) {
    let t = e1.id?.endsWith("-input") ? e1.id.slice(0, -6) : "";
    return t ? document.getElementById(t) : null;
}
function L(e1) {
    return w(e1) || e1.label || e1.value;
}
_c8 = L;
function R(e1) {
    let t = L(e1).trim().toLowerCase();
    return !!(t && e1.value.trim() && ![
        "choose...",
        "select",
        "select one",
        "- select -",
        "-- select --"
    ].includes(t));
}
_c9 = R;
function O(e1) {
    return e1.replace(/^\d+(?:\.\d+)?\.?\s+/, "").trim();
}
_c10 = O;
function M(e1, t) {
    return (0, o.isExactChoiceMatch)(e1, t) || (0, o.isExactChoiceMatch)(O(e1), O(t));
}
_c11 = M;
function N(e1, t) {
    let r1 = t.map(v).filter(Boolean), n = v(L(e1)), o = v(e1.value);
    return r1.some((e1)=>!!e1 && (M(n, e1) || M(o, e1)));
}
_c12 = N;
function $(e1, t) {
    return Array.from(e1.options).find((e1)=>N(e1, t)) || null;
}
function B(e1, t) {
    let r1 = v(t);
    return r1 && Array.from(e1.options).find((e1)=>v(L(e1)) === r1) || null;
}
_c13 = B;
function q(e1) {
    let t = Array.from(e1.options).filter(R).map((e1)=>v(L(e1)));
    return 2 === t.length && t.includes("yes") && t.includes("no");
}
function U(e1) {
    if (e1.id) {
        let t = document.getElementById(e1.id);
        if (t instanceof HTMLSelectElement) return t;
    }
    if (e1.name && "function" == typeof document.getElementsByName) {
        let t = Array.from(document.getElementsByName(e1.name)).find((e1)=>e1 instanceof HTMLSelectElement);
        if (t) return t;
    }
    return e1;
}
_c14 = U;
function H(e1) {
    let t = U(e1), r1 = Array.from(t.options).find((e1)=>e1.selected);
    return {
        id: t.id,
        name: t.name,
        value: t.value,
        isConnected: t.isConnected,
        selectedText: r1 ? L(r1) : "",
        buttonText: t.id ? w(document.getElementById(`${t.id}-button_text`)) : ""
    };
}
_c15 = H;
function Y(e1, t) {
    console.info(`[BrassRingAutofill] ${e1} ${JSON.stringify(t)}`);
}
_c16 = Y;
async function z(e1, t, r1 = 1500) {
    let n = $(e1, t);
    if (n) return n;
    try {
        await (0, f.waitForCondition)(()=>{
            let r1 = $(e1, t);
            return !!(r1 && !e1.disabled);
        }, {
            timeout: r1,
            interval: 100,
            observeTarget: document.body
        });
    } catch  {
        return null;
    }
    return $(e1, t);
}
function V(e1) {
    let t = Array.from(e1.options).filter(R);
    return 1 === t.length ? t[0] : null;
}
_c17 = V;
function W(e1) {
    return /^country(?:\/region)?$/i.test(e1.label.replace(/\s+/g, " ").trim());
}
_c18 = W;
function G(e1) {
    let t = e1.replace(/\s+/g, " ").trim().toLowerCase();
    return "state" === t || "province" === t || "state/province" === t || "state province" === t || "state/region/province" === t || "state region province" === t || "state/region/province/county" === t || "state region province county" === t || "current state" === t || "current province" === t || "current state/province" === t || "current state province" === t;
}
_c19 = G;
function K(e1, t) {
    return e1.required && W(e1) && !!V(t);
}
_c20 = K;
function X() {
    return window.jQuery || window.$;
}
_c21 = X;
function J(e1) {
    return w(e1.querySelector("label.ListView, label[id$='-label'], label"));
}
_c22 = J;
function Q() {
    return Array.from(document.querySelectorAll(h)).filter((e1)=>el(e1)).filter((e1)=>G(J(e1)));
}
_c23 = Q;
function Z(e1) {
    let t = e1.querySelector("input.ui-search-widget, input.ui-autocomplete-input, input[name^='visible-input-']");
    return t || e1.querySelector("select");
}
_c24 = Z;
function ee(e1) {
    return e1.replace(/^visible-input-/i, "").replace(/(^|[_-])(current|country|region|state|province)(?=([_-]|$))/gi, "$1").replace(/[_-]{2,}/g, "_").replace(/^[_-]+|[_-]+$/g, "").toLowerCase();
}
function et(e1) {
    let t = Z(e1), r1 = t instanceof HTMLInputElement ? _(t) : t instanceof HTMLSelectElement ? t : null, n = [
        t?.id,
        t?.getAttribute("name") || "",
        r1?.id || "",
        r1?.getAttribute("name") || ""
    ].filter(Boolean);
    return Array.from(new Set(n.map(ee).filter((e1)=>e1.length > 0)));
}
function er(e1) {
    let t = Q();
    if (0 === t.length) return null;
    let r1 = et(e1);
    if (r1.length > 0) {
        let e1 = t.find((e1)=>{
            let t = et(e1);
            return t.some((e1)=>r1.includes(e1));
        });
        if (e1) return e1;
    }
    let n = Array.from(document.querySelectorAll(h)).filter((e1)=>el(e1)), o = n.indexOf(e1);
    if (o >= 0) {
        let e1 = n.slice(o + 1).find((e1)=>G(J(e1)));
        if (e1) return e1;
    }
    return t[0] || null;
}
function en(e1) {
    let t = e1.$input;
    return t instanceof HTMLElement ? t.closest(h) : null;
}
async function eo(e1) {
    if (!W(e1)) return;
    let t = en(e1);
    try {
        await (0, f.waitForCondition)(()=>{
            let e1 = t ? er(t) : Q()[0] || null;
            if (!e1) return !0;
            let r1 = Z(e1);
            if (!r1 || r1.disabled) return !1;
            if (r1 instanceof HTMLSelectElement) return getSelectOptions(r1).length > 0;
            let n = _(r1);
            return n ? !n.disabled && getSelectOptions(n).length > 0 : !r1.disabled;
        }, {
            timeout: 2e3,
            interval: 100,
            observeTarget: document.body
        });
    } catch  {}
    await (0, p.delay)(200);
}
function ei(e1) {
    (0, d.triggerEvents)(e1, [
        "input",
        "change"
    ]);
}
function ea(e1) {
    e1.scrollIntoView({
        block: "center",
        inline: "nearest"
    }), (0, d.triggerEvents)(e1, [
        "mousedown",
        "mouseup",
        "click"
    ]);
}
function el(e1) {
    if (!(e1 instanceof HTMLElement)) return !1;
    let t = e1;
    for(; t && t !== document.body;){
        let e1 = window.getComputedStyle(t);
        if ("none" === e1.display || "hidden" === e1.visibility || "true" === t.getAttribute("aria-hidden")) return !1;
        t = t.parentElement;
    }
    return !0;
}
function es(e1) {
    return e1.getAttribute("aria-owns") || e1.getAttribute("aria-controls") || (e1.id ? `${e1.id}_listbox` : "");
}
function eu(e1) {
    let t = es(e1);
    if (t) {
        let e1 = document.getElementById(t);
        if (e1) return e1;
    }
    return document.querySelector(".ui-autocomplete.ui-front, ul.ui-autocomplete, [role='listbox']");
}
function ec(e1) {
    let t = eu(e1);
    if (!t) return [];
    let r1 = Array.from(t.querySelectorAll("li.ui-menu-item, .ui-menu-item-wrapper, [role='option'], li")), n = new Set, o = [];
    for (let e1 of r1){
        let t = e1.querySelector(".ui-menu-item-wrapper") || e1, r1 = w(t);
        !r1 || n.has(t) || (n.add(t), o.push(t));
    }
    return o;
}
function ed(e1) {
    return e1.closest(h)?.querySelector(".ui-icon-triangle-1-s, [ng-click*='blanketSearch']") || null;
}
async function ef(e1, t, r1 = []) {
    let n = r1.map(v).filter(Boolean);
    try {
        return await (0, f.waitForCondition)(()=>{
            let t = ec(e1);
            return 0 !== t.length && (0 === n.length || t.some((e1)=>{
                let t = v(w(e1));
                return n.some((e1)=>M(t, e1) || (0, o.isExactChoiceMatch)(t, e1) || (0, o.isExactChoiceMatch)(e1, t));
            }));
        }, {
            timeout: t,
            interval: 100,
            observeTarget: document.body
        }), !0;
    } catch  {
        return !1;
    }
}
async function ep(e1, t) {
    try {
        return await (0, f.waitForCondition)(()=>{
            let t = eu(e1);
            return !!(t && el(t));
        }, {
            timeout: t,
            interval: 100,
            observeTarget: document.body
        }), !0;
    } catch  {
        return !1;
    }
}
function em(e1, t) {
    e1.focus(), j(e1, ""), ei(e1), j(e1, t), e1.dispatchEvent(new Event("input", {
        bubbles: !0,
        composed: !0
    })), e1.dispatchEvent(new KeyboardEvent("keydown", {
        key: t.slice(-1) || "ArrowDown",
        bubbles: !0
    })), e1.dispatchEvent(new KeyboardEvent("keyup", {
        key: t.slice(-1) || "ArrowDown",
        bubbles: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0,
        composed: !0
    }));
}
async function eh(e1, t) {
    e1.focus(), e1.dispatchEvent(new FocusEvent("focusin", {
        bubbles: !0
    })), await (0, p.delay)(50), em(e1, t), await (0, p.delay)(50);
    let r1 = window.jQuery || window.$, n = _(e1);
    try {
        r1?.fn?.autocomplete && r1(e1).autocomplete("search", t);
    } catch  {}
    if (n && await z(n, [
        t
    ], 1200), await ep(e1, 1200), await ef(e1, 2500, [
        t
    ])) return !0;
    let o = ed(e1);
    if (!o) return !1;
    ea(o), await (0, p.delay)(150), e1.focus(), em(e1, t), await (0, p.delay)(50);
    try {
        r1?.fn?.autocomplete && r1(e1).autocomplete("search", t);
    } catch  {}
    if (n && await z(n, [
        t
    ], 1200), await ep(e1, 1200), await ef(e1, 1500, [
        t
    ])) return !0;
    try {
        r1?.fn?.autocomplete && r1(e1).autocomplete("search", "");
    } catch  {}
    return await ep(e1, 1200), await ef(e1, 1500, [
        t
    ]);
}
async function eg(e1, t, r1 = {}) {
    let { allowFirstFallback: n = !0, allowSubstringMatch: i = !0 } = r1;
    for (let r1 of t){
        let t = await eh(e1, r1);
        if (!t) continue;
        let a = ec(e1);
        if (0 === a.length) continue;
        let l = v(r1), s = a.find((e1)=>v(w(e1)) === l) || (i ? a.find((e1)=>{
            let t = v(w(e1));
            return (0, o.isExactChoiceMatch)(t, l);
        }) : null) || (n ? a[0] : null);
        if (!s) {
            eb(e1);
            continue;
        }
        return ea(s), await (0, p.delay)(250), !0;
    }
    return e1.dispatchEvent(new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: !0
    })), e1.blur(), !1;
}
function eb(e1) {
    let t = X();
    try {
        t?.fn?.autocomplete && t(e1).autocomplete("close");
    } catch  {}
    e1.dispatchEvent(new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: !0
    })), e1.dispatchEvent(new KeyboardEvent("keyup", {
        key: "Escape",
        bubbles: !0
    })), e1.blur();
}
function ey(e1) {
    return e1.id ? document.getElementById(`${e1.id}-button`) : null;
}
function ev(e1) {
    let t = ey(e1), r1 = t?.getAttribute("aria-owns") || t?.getAttribute("aria-controls") || (e1.id ? `${e1.id}-menu` : "");
    return r1 ? document.getElementById(r1) : null;
}
function ew(e1) {
    let t = ev(e1);
    if (!t) return [];
    let r1 = Array.from(t.querySelectorAll("li.ui-menu-item, .ui-menu-item-wrapper, [role='option'], li")), n = new Set, o = [];
    for (let e1 of r1){
        let t = e1.querySelector(".ui-menu-item-wrapper") || e1, r1 = w(t);
        !r1 || n.has(t) || (n.add(t), o.push(t));
    }
    return o;
}
function eS(e1, t, r1) {
    let n = t.value, o = t.getAttribute("aria-label") || "", i = [
        L(t),
        n,
        o,
        ...r1
    ].map(v).filter(Boolean), a = v(w(e1));
    return i.some((e1)=>a === e1);
}
function eE(e1) {
    let t = X();
    try {
        t?.fn?.selectmenu && t(e1).selectmenu("refresh");
    } catch  {}
}
function ex(e1, t) {
    e1.focus(), t.selected = !0, e1.value = t.value, ei(e1);
    let r1 = X();
    try {
        r1?.(e1).trigger?.("change");
    } catch  {}
    eE(e1), e1.blur();
}
function eC(e1) {
    let t = ey(e1), r1 = X();
    try {
        r1?.fn?.selectmenu && r1(e1).selectmenu("close");
    } catch  {}
    t?.dispatchEvent(new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: !0
    })), t?.dispatchEvent(new KeyboardEvent("keyup", {
        key: "Escape",
        bubbles: !0
    })), t?.blur();
}
async function eA(e1, t, r1) {
    let n = ey(e1);
    if (!n) return !1;
    let o = q(e1) && r1.some((e1)=>/^(yes|no)$/i.test(e1));
    ea(n), await (0, f.waitForCondition)(()=>ew(e1).length > 0, {
        timeout: 1500,
        interval: 100,
        observeTarget: document.body
    });
    let i = ew(e1).find((e1)=>eS(e1, t, r1));
    return i ? (ea(i), await (0, p.delay)(250), o && Y("binary-select-menu-click-readback", {
        select: H(e1),
        match: {
            value: t.value,
            text: L(t)
        },
        targetConnected: i.isConnected
    }), e1.value !== t.value ? ex(e1, t) : eE(e1), eC(e1), o && Y("binary-select-native-readback", {
        select: H(e1),
        match: {
            value: t.value,
            text: L(t)
        }
    }), !0) : (o && Y("binary-select-menu-target-missing", {
        select: H(e1),
        match: {
            value: t.value,
            text: L(t)
        },
        menuOptions: ew(e1).map(w)
    }), eC(e1), !1);
}
async function ek(e1, t) {
    let r1 = $(e1, t);
    if (!r1) return !1;
    let n = await eA(e1, r1, t);
    return !!n || (ex(e1, r1), await (0, p.delay)(150), !0);
}
function eT(e1) {
    return e1.$input instanceof HTMLSelectElement ? e1.$input : e1.$input instanceof HTMLInputElement ? _(e1.$input) : null;
}
function eF(e1) {
    let t = v(String(e1.label || ""));
    if (!t || "function" != typeof document.querySelectorAll) return null;
    let r1 = Array.from(document.querySelectorAll(h)).filter((e1)=>v(J(e1)) === t).flatMap((e1)=>Array.from(e1.querySelectorAll("select")).filter((e1)=>!e1.disabled));
    return 1 === r1.length ? r1[0] : null;
}
function eI(e1) {
    let t = eF(e1);
    if (t) return t;
    let r1 = eT(e1);
    return r1 ? U(r1) : null;
}
function ej(e1, t) {
    return !!Array.isArray(e1.options) && e1.options.some((e1)=>t.some((t)=>M(String(e1 || ""), t)));
}
function eD(e1) {
    return e1.some((e1)=>/^(yes|no)$/i.test(e1.trim()));
}
function eP(e1) {
    if (!Array.isArray(e1.options)) return !1;
    let t = e1.options.map((e1)=>v(String(e1 || ""))).filter(Boolean);
    return 2 === t.length && t.includes("yes") && t.includes("no");
}
async function e_(e1, t, r1 = 1500) {
    let n = eI(e1), o = eD(t) || eP(e1);
    if (o) {
        let r1 = e1.$input;
        Y("binary-select-live-resolve", {
            label: e1.label,
            candidates: t,
            extractedOptions: Array.isArray(e1.options) ? e1.options : [],
            ruleInput: r1 instanceof HTMLElement ? {
                tagName: r1.tagName,
                id: r1.id,
                name: r1.getAttribute("name") || "",
                isConnected: r1.isConnected
            } : null,
            resolved: n ? H(n) : null
        });
    }
    return n && $(n, t) || !ej(e1, t) && !eD(t) || await (0, f.waitForCondition)(()=>{
        let r1 = eI(e1);
        return !!r1 && (n = r1, !!(!r1.disabled && $(r1, t)));
    }, {
        timeout: r1,
        interval: 50,
        observeTarget: document.body
    }), n;
}
function eL(e1, t, r1) {
    let n = $(t, r1);
    return !!n && (ex(t, n), j(e1, L(n)), ei(e1), !0);
}
function eR(e1, t, r1) {
    let n = v(e1.value), i = v(L(t)), a = [
        L(t),
        t.value,
        ...r1
    ].map(v).filter(Boolean);
    return !!n && a.some((e1)=>M(n, e1) || M(e1, n) || (0, o.isExactChoiceMatch)(n, e1) || (0, o.isExactChoiceMatch)(e1, n) || n === i);
}
function eO(e1, t, r1) {
    let n = $(t, r1);
    return n && t.value === n.value && eR(e1, n, r1) ? n : null;
}
function eM(e1, t, r1) {
    return !!eO(e1, t, r1);
}
async function eN(e1, t, r1, n = 800) {
    let o = eO(e1, t, r1);
    if (o) return o;
    try {
        await (0, f.waitForCondition)(()=>!!eO(e1, t, r1), {
            timeout: n,
            interval: 50,
            observeTarget: document.body
        });
    } catch  {
        return null;
    }
    return eO(e1, t, r1);
}
function e$(e1, t) {
    j(e1, t), ei(e1), e1.dispatchEvent(new Event("change", {
        bubbles: !0,
        composed: !0
    }));
}
async function eB(e1, t, r1, n = 2e3) {
    let o = await z(t, r1, n);
    return !!o && (ex(t, o), e1.focus(), e$(e1, L(o)), e1.blur(), !0);
}
async function eq(e1, t) {
    let r1 = P(e1, t);
    e1.focus(), e1.dispatchEvent(new FocusEvent("focusin", {
        bubbles: !0
    })), await (0, p.delay)(50), j(e1, ""), ei(e1), await (0, p.delay)(50), j(e1, r1), e1.dispatchEvent(new Event("input", {
        bubbles: !0,
        composed: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0,
        composed: !0
    })), await (0, p.delay)(100), e1.dispatchEvent(new FocusEvent("focusout", {
        bubbles: !0
    })), e1.blur();
}
async function eU(e1, t) {
    let r1 = I(e1, t);
    if (0 === r1.length) return;
    let n = e1.$input, o = await e_(e1, r1), i = !!(o && q(o) && (r1.some((e1)=>/^(yes|no)$/i.test(e1)) || eP(e1)));
    if (i && o) {
        let t = $(o, r1);
        Y("binary-select-fill-start", {
            label: e1.label,
            candidates: r1,
            match: t ? {
                value: t.value,
                text: L(t)
            } : null,
            select: H(o)
        });
    }
    if (n instanceof HTMLInputElement) {
        let t = await eg(n, r1, {
            allowFirstFallback: !1
        });
        if (t) {
            if (o) {
                let t = await eN(n, o, r1);
                if (!t && eL(n, o, r1) && (t = await eN(n, o, r1)), !t) {
                    let e1 = await ek(o, r1);
                    if (e1) {
                        let e1 = $(o, r1);
                        e1 && (j(n, L(e1)), ei(n), t = await eN(n, o, r1));
                    }
                }
                if (!t) throw new s.FillError(`(Select) Option click did not commit for "${e1.label}"`);
            }
            eb(n), await eo(e1);
            return;
        }
        if (o) {
            let t = await ek(o, r1);
            if (t) {
                let t = $(o, r1);
                t && (j(n, L(t)), ei(n)), eb(n), await eo(e1);
                return;
            }
        }
    }
    if (o) {
        let t = await ek(o, r1);
        if (t) {
            i && Y("binary-select-fill-readback", {
                label: e1.label,
                candidates: r1,
                select: H(o)
            }), await eo(e1);
            return;
        }
    }
    if (i && o && Y("binary-select-fill-no-match", {
        label: e1.label,
        candidates: r1,
        select: H(o)
    }), o && K(e1, o)) {
        let t = V(o);
        if (t) {
            ex(o, t), n instanceof HTMLInputElement && (j(n, r1[0] || L(t)), ei(n)), await eo(e1);
            return;
        }
    }
    throw new s.FillError(`(Select) Option not found for "${e1.label}"`);
}
async function eH(e1, t) {
    let r1 = I(e1, t);
    if (0 === r1.length) return;
    let n = e1.$input, o = _(n), i = await eg(n, r1, {
        allowFirstFallback: !1
    });
    if (i) {
        if (!o) throw new s.FillError(`(Search) Missing backing select for "${e1.label}"`);
        let t = await eN(n, o, r1);
        if (!t && eL(n, o, r1) && (t = await eN(n, o, r1)), !t) {
            let e1 = await eB(n, o, r1);
            e1 && (t = await eN(n, o, r1));
        }
        if (!t) throw new s.FillError(`(Search) Option click did not commit for "${e1.label}"`);
        eb(n), await eo(e1);
        return;
    }
    if (o) {
        let t = await eB(n, o, r1);
        if (t) {
            let t = await eN(n, o, r1);
            if (!t) throw new s.FillError(`(Search) Select fallback did not commit for "${e1.label}"`);
            eb(n), await eo(e1);
            return;
        }
    }
    throw new s.FillError(`(Search) Option not found for "${e1.label}"`);
}
function eY(e1) {
    return Array.from(e1.querySelectorAll(".selectionList li, [id$='_selection-list'] li")).map(w).filter(Boolean);
}
function ez(e1) {
    return e1.closest(h)?.querySelector("a.addbutton, button.addbutton, [ng-click*='addButtonClickHandler']") || null;
}
async function eV(e1, t, r1, n, o) {
    let i = L(r1);
    e1.focus(), j(e1, i), ei(e1), r1.selected = !0, t.dispatchEvent(new Event("change", {
        bubbles: !0
    }));
    let a = X();
    try {
        a?.(t).trigger?.("change");
    } catch  {}
    if (!n) return !0;
    if (ea(n), !o) return await (0, p.delay)(100), !0;
    try {
        await (0, f.waitForCondition)(()=>eY(o).some((e1)=>(0, u.isMatched)(e1, i)), {
            timeout: 600,
            interval: 50,
            observeTarget: o
        });
    } catch  {
        return !1;
    }
    return !0;
}
async function eW(e1, t) {
    let r1 = S(t).slice(0, 20);
    if (0 === r1.length) return;
    let n = e1.$input, o = eT(e1);
    if (n instanceof HTMLSelectElement) {
        let e1 = r1.map(v), t = new Set(e1);
        for (let e1 of Array.from(n.options))e1.selected = t.has(v(L(e1)));
        console.info(`[BrassRingAutofill] skills-native-select ${JSON.stringify({
            candidateCount: r1.length,
            selectedCount: Array.from(n.options).filter((e1)=>e1.selected).length
        })}`), ei(n), await (0, p.delay)(150);
        return;
    }
    if (!(n instanceof HTMLInputElement)) return;
    let i = n.closest(h), a = ez(n);
    for (let e1 of r1){
        let t = !!i && eY(i).some((t)=>(0, u.isMatched)(t, e1));
        if (t) continue;
        let r1 = o ? B(o, e1) : null;
        if (r1) {
            let e1 = await eV(n, o, r1, a, i);
            if (e1) continue;
        }
        let l = await eg(n, [
            e1
        ], {
            allowFirstFallback: !1,
            allowSubstringMatch: !1
        });
        !l && r1 && (j(n, L(r1)), ei(n), r1.selected = !0, o?.dispatchEvent(new Event("change", {
            bubbles: !0
        })), await (0, p.delay)(100)), l || r1 || (j(n, e1), ei(n)), a && (ea(a), await (0, p.delay)(300)), console.info(`[BrassRingAutofill] skills-candidate-result ${JSON.stringify({
            candidate: e1,
            result: l || r1 ? "exact-match-add" : "raw-add",
            addButtonFound: !!a
        })}`);
    }
    eb(n);
}
function eG(e1) {
    let t = e1.id ? document.querySelector(`label[for="${e1.id}"]`) : null;
    return w(t) || w(e1.closest("label")) || w(e1.nextElementSibling) || e1.value;
}
function eK(e1) {
    let t = v(e1);
    return [
        "yes",
        "true",
        "checked",
        "agree",
        "i agree"
    ].some((e1)=>(0, o.isExactChoiceMatch)(t, e1));
}
function eX(e1) {
    let t = v(e1);
    return [
        "no",
        "false",
        "unchecked",
        "not checked"
    ].some((e1)=>(0, o.isExactChoiceMatch)(t, e1));
}
function eJ(e1, t) {
    return e1.find((e1)=>[
            eG(e1),
            e1.value
        ].some((e1)=>M(e1, t)));
}
function eQ(e1, t) {
    let r1 = eJ(e1, "Yes"), n = eJ(e1, "No");
    if (!r1 || !n) return;
    let i = t.some((e1)=>[
            "yes",
            "true",
            "y",
            "1"
        ].some((t)=>(0, o.isExactChoiceMatch)(e1, t))), a = t.some((e1)=>[
            "no",
            "false",
            "n",
            "0"
        ].some((t)=>(0, o.isExactChoiceMatch)(e1, t)));
    if (i !== a) return i ? r1 : n;
}
function eZ(e1) {
    let t = [
        e1
    ], r1 = (e1)=>{
        e1 instanceof HTMLElement && !t.includes(e1) && t.push(e1);
    }, n = e1.id ? document.querySelector(`label[for="${e1.id}"]`) : null, o = e1.closest("label"), i = e1.closest(".ui-checkbox, .checkbox, li"), a = i?.querySelector(".pseudocheckbox, [role='checkbox']") || e1.parentElement?.querySelector(".pseudocheckbox, [role='checkbox']"), l = e1.nextElementSibling, s = e1.previousElementSibling, u = e1.closest(".fieldcontain")?.querySelector("label");
    return [
        n,
        o,
        a,
        l,
        s,
        u
    ].forEach(r1), t;
}
function e0(e1) {
    let t = [], r1 = (e1)=>{
        e1 instanceof HTMLElement && !t.includes(e1) && t.push(e1);
    }, n = e1.closest(".ui-radio"), o = n?.querySelector(".pseudoradio, [role='radio']") || e1.parentElement?.querySelector(".pseudoradio, [role='radio']"), i = e1.id ? document.querySelector(`label[for="${e1.id}"]`) : null, a = Array.from(e1.labels || []);
    return a.forEach(r1), r1(i), r1(n?.querySelector("label")), r1(o), r1(e1.nextElementSibling), r1(n), r1(e1), t;
}
async function e2(e1) {
    if (!e1.checked) {
        for (let t of (e1.scrollIntoView({
            block: "center",
            inline: "nearest"
        }), e1.focus(), e0(e1)))if (ea(t), t.click(), await (0, p.delay)(150), e1.checked) {
            ei(e1);
            return;
        }
    }
}
async function e1(e1, t) {
    if (e1.checked !== t) {
        for (let r1 of (e1.scrollIntoView({
            block: "center",
            inline: "nearest"
        }), e1.focus(), eZ(e1)))if (r1.click(), await (0, p.delay)(150), e1.checked === t) {
            ei(e1);
            return;
        }
        e1.checked = t, e1.dispatchEvent(new Event("input", {
            bubbles: !0,
            composed: !0
        })), e1.dispatchEvent(new Event("change", {
            bubbles: !0,
            composed: !0
        })), await (0, p.delay)(100);
    }
}
async function e3(e1, t) {
    let r1 = S(t);
    if (0 === r1.length) return !1;
    let n = Array.from(e1.$radioParent.querySelectorAll("input[type='radio']"));
    if (0 === n.length) return !1;
    let o = n.find((e1)=>{
        let t = eG(e1), n = e1.value;
        return r1.some((e1)=>M(t, e1) || M(n, e1));
    });
    return o || (o = eQ(n, r1)), !!o && (o.checked || await e2(o), o.checked);
}
async function e4(e2, t) {
    let r1 = S(t);
    if (0 === r1.length) return !1;
    let n = e2.$checkboxs;
    if (0 === n.length) return !1;
    if (1 === n.length) {
        let t = r1.some((t)=>eK(t) || (0, u.isMatched)(e2.label, t) || (0, o.isExactChoiceMatch)(v(t), v(e2.label))), i = r1.some(eX);
        return (!!t || !!i) && (await e1(n[0], t), n[0].checked === t);
    }
    let i = !1;
    for (let e2 of n){
        let t = eG(e2), n = r1.some((e1)=>M(t, e1));
        n && (i = !0), n && !e2.checked && await e1(e2, !0);
    }
    return i;
}
let e5 = "R\xe9sum\xe9/CV", e6 = "Resume/CV", e8 = "[data-resume-parser-status], [data-parser-status], #resumewidget [role='status'], #resumewidget [aria-live], [id*='resume'][id*='pars'], [class*='resume'][class*='pars'], .ImportProfile [role='status'], .ImportProfile [aria-live]", e9 = 12e3, e7 = 100, te = 800, tt = 750, tr = new Set([
    "text",
    "email",
    "tel",
    "search",
    "url",
    "number",
    "date"
]), tn = new WeakMap, to = 0;
function ti(e1) {
    let t = 2166136261;
    for(let r1 = 0; r1 < e1.length; r1++)t ^= e1.charCodeAt(r1), t = Math.imul(t, 16777619);
    return `${e1.length}:${(t >>> 0).toString(16)}`;
}
function ta(e1, t) {
    let r1 = [
        e1.id,
        e1.getAttribute("data-record-id"),
        e1.getAttribute("data-id")
    ].filter(Boolean).join("|");
    if (r1) return `${e1.tagName}:${r1}`;
    let n = tn.get(e1);
    return n || (n = ++to, tn.set(e1, n)), `${e1.tagName}:runtime-${n}:index-${t}`;
}
function tl(e1) {
    if (!el(e1) || e1.hidden) return !1;
    let t = e1.tagName.toLowerCase();
    if ("textarea" === t || "select" === t) return !0;
    if ("input" !== t) return !1;
    let r1 = (e1.type || "text").toLowerCase();
    return tr.has(r1);
}
function ts() {
    let e1 = Array.from(document.querySelectorAll("input, textarea, select")).filter(tl), t = e1.map((e1, t)=>{
        let r1 = (e1.tagName.toLowerCase(), e1.value);
        return `${ta(e1, t)}=${String(r1 ?? "")}`;
    });
    return {
        signature: ti(t.join("\n")),
        count: e1.length
    };
}
function tu() {
    let e1 = [
        "education",
        "experience"
    ].flatMap((e1)=>ri(e1).filter((e1)=>!rs(e1)).map((t)=>({
                kind: e1,
                row: t
            }))), t = e1.map(({ kind: e1, row: t }, r1)=>`${e1}:${ta(t, r1)}`);
    return {
        signature: ti(t.join("\n")),
        count: e1.length
    };
}
function tc() {
    let e1 = Array.from(document.querySelectorAll(e8)).filter(el), t = "none", r1 = e1.map((e1, r1)=>{
        let n = ta(e1, r1), o = tm([
            e1.getAttribute("data-resume-parser-status"),
            e1.getAttribute("data-parser-status"),
            e1.getAttribute("aria-label"),
            e1.textContent
        ].filter(Boolean).join(" ")), i = /(?:success|complete|completed|ready|imported|processed)/i.test(o) ? "success" : /(?:parsing|processing|extracting|reading|importing|building)[\s\S]*(?:resume|cv|profile)|(?:resume|cv|profile)[\s\S]*(?:parsing|processing|extracting|reading|importing|building)/i.test(o) ? "active" : "none";
        return "active" === i ? t = "active" : "success" === i && "none" === t && (t = "success"), `${n}:${i}`;
    });
    return {
        signature: ti(r1.join("\n")),
        count: e1.length,
        status: t
    };
}
function td() {
    let e1 = ts(), t = tu(), r1 = tc();
    return {
        scalarSignature: e1.signature,
        scalarControlCount: e1.count,
        structuredSignature: t.signature,
        structuredRowCount: t.count,
        parserSurfaceSignature: r1.signature,
        parserSurfaceCount: r1.count,
        parserStatus: r1.status,
        capturedAt: Date.now()
    };
}
function tf(e1) {
    console.info(`[BrassRingAutofill] resume-parser ${JSON.stringify({
        stage: "resume-parser-wait-complete",
        parserDetected: e1.parserDetected,
        parserReady: e1.parserReady,
        elapsedMs: e1.elapsedMs,
        scalarControlCount: e1.scalarControlCount,
        structuredRowCount: e1.structuredRowCount,
        reason: e1.reason
    })}`);
}
async function tp(e1, t = {}) {
    let r1 = t.timeoutMs ?? e9, n = t.intervalMs ?? e7, o = t.quietMs ?? te, i = t.noParserGraceMs ?? tt, a = Date.now(), l = e1, s = "none" !== e1.parserStatus, u = !1, c = a;
    for(; Date.now() - a < r1;){
        let t = td(), r1 = Date.now(), d = t.scalarSignature !== l.scalarSignature, f = t.structuredSignature !== l.structuredSignature, m = t.parserSurfaceSignature !== l.parserSurfaceSignature || t.parserStatus !== l.parserStatus, h = t.scalarSignature !== e1.scalarSignature || t.structuredSignature !== e1.structuredSignature, g = "none" !== t.parserStatus, b = g && t.parserSurfaceCount > 0 && t.parserSurfaceSignature !== e1.parserSurfaceSignature, y = g && (t.parserStatus !== e1.parserStatus || 0 === e1.parserSurfaceCount && t.parserSurfaceCount > 0 || b);
        if (g && (s = !0), (h || b || y) && (u = !0, s = !0), (d || f || m) && (c = r1), u && "active" !== t.parserStatus && r1 - c >= o) {
            let e1 = {
                parserDetected: !0,
                parserReady: !0,
                elapsedMs: r1 - a,
                reason: "parser-quiet",
                scalarControlCount: t.scalarControlCount,
                structuredRowCount: t.structuredRowCount
            };
            return tf(e1), e1;
        }
        if (!s && !u && r1 - a >= i) {
            let e1 = {
                parserDetected: !1,
                parserReady: !0,
                elapsedMs: r1 - a,
                reason: "no-parser-surface",
                scalarControlCount: t.scalarControlCount,
                structuredRowCount: t.structuredRowCount
            };
            return tf(e1), e1;
        }
        l = t, await (0, p.delay)(Math.max(1, n));
    }
    let d = td(), f = {
        parserDetected: s,
        parserReady: !1,
        elapsedMs: Date.now() - a,
        reason: "parser-timeout",
        scalarControlCount: d.scalarControlCount,
        structuredRowCount: d.structuredRowCount
    };
    return tf(f), f;
}
function tm(e1) {
    return e1.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, " ").trim().toLowerCase();
}
function th(e1) {
    return Array.from(e1.querySelectorAll("input[type='file']"));
}
function tg() {
    let e1 = th(document);
    for (let t of Array.from(document.querySelectorAll("iframe")))try {
        let r1 = t.contentDocument || t.contentWindow?.document;
        if (!r1) continue;
        e1.push(...th(r1));
    } catch  {}
    return e1;
}
function tb(e1) {
    return "resume" === e1 ? "resume" : "coverletter";
}
function ty(e1, t) {
    let r1 = e1.src || e1.getAttribute("src") || "";
    if (!r1) return !1;
    try {
        let e1 = new URL(r1, window.location.href);
        return /\/TGNewUI\/Profile\/Home\/ProfileBuilder$/i.test(e1.pathname) && (e1.searchParams.get("calledFrom") || "").toLowerCase() === tb(t);
    } catch  {
        return !1;
    }
}
function tv(e1) {
    return Array.from(document.querySelectorAll("iframe")).find((t)=>el(t) && ty(t, e1)) || null;
}
async function tw(e1) {
    let t = tv(e1);
    if (t) return t;
    try {
        await (0, f.waitForCondition)(()=>!!tv(e1), {
            timeout: 3e3,
            interval: 100,
            observeTarget: document.body
        });
    } catch  {
        return null;
    }
    return tv(e1);
}
function tS(e1) {
    return tm([
        e1.id,
        e1.name,
        e1.getAttribute("aria-label"),
        e1.getAttribute("title")
    ].filter(Boolean).join(" "));
}
function tE(e1) {
    return tm(w(e1.closest(".fieldcontain, .question, .upload, div")));
}
function tx(e1) {
    return (e1.includes("resume") || e1.includes("cv")) && !e1.includes("cover letter");
}
function tC(e1) {
    return e1.includes("cover letter");
}
function tA(e1) {
    return tm([
        e1.getAttribute("aria-label"),
        w(e1.querySelector("h1, h2, h3, h4, h5, h6"))
    ].filter(Boolean).join(" "));
}
function tk(e1, t) {
    let r1 = tA(e1);
    return "resume" === t ? tx(r1) : tC(r1);
}
function tT() {
    return Array.from(document.querySelectorAll(".ImportProfile[role='main'], .ImportProfile.encompassingDiv, [role='main'][aria-label]")).filter(el);
}
function tF(e1) {
    for (let t of tT()){
        if (!tk(t, e1)) continue;
        let r1 = Array.from(t.querySelectorAll("input[type='file']")).find((e1)=>!e1.disabled);
        if (r1) return r1;
    }
    return null;
}
function tI(e1, t) {
    let r1 = tS(e1), n = tE(e1), o = `${r1} ${n}`;
    return "resume" === t ? tx(o) : tC(o);
}
function tj() {
    return document.querySelector("#resumewidget.resumesection");
}
function tD() {
    return document.querySelector("#clwidget.coverlettersection");
}
function tP() {
    return document.querySelector("#attachmentWidget.attachmentsWidget");
}
function t_() {
    return document.querySelector(g);
}
function tL() {
    return t_()?.closest("#attachmentWidget") || tP();
}
function tR() {
    let e1 = tL();
    if (!e1) return null;
    let t = Array.from(e1.querySelectorAll(".ui-widget"));
    return t.find((e1)=>{
        let t = e1.querySelector("h1, h2, h3, h4, h5, h6");
        return v(w(t)) === v(b);
    }) || null;
}
function tO(e1) {
    return Array.from(e1.options).find((e1)=>N(e1, [
            b
        ])) || null;
}
function tM() {
    let e1 = t_();
    return !!(e1 && tO(e1));
}
async function tN() {
    let e1 = t_();
    if (!e1) return !1;
    let t = tO(e1);
    if (!t) return !1;
    if (e1.value === t.value) return !0;
    try {
        let r1 = await eA(e1, t, [
            b
        ]);
        if (r1) return !0;
    } catch  {}
    return ex(e1, t), await (0, p.delay)(250), !0;
}
function t$(e1) {
    if ("resume" === e1) {
        let e1 = tj()?.querySelector("#AddResumeLink");
        return e1 && el(e1) ? e1 : null;
    }
    if ("coverLetter" === e1) {
        let e1 = tD()?.querySelector("#AddCLLink");
        return e1 || (tM() ? document.getElementById("AttachementCatagory-button") : null);
    }
    return null;
}
function tB(e1) {
    return "resume" === e1 ? tj() : "coverLetter" === e1 ? tM() && tL() || tD() : null;
}
function tq(e1) {
    let t = tF(e1);
    if (t) return t;
    let r1 = tB(e1), n = Array.from(r1?.querySelectorAll("input[type='file']") || []), o = n.find((t)=>tI(t, e1)) || n[0];
    if (o) return o;
    let i = tg(), a = "resume" === e1 && 1 === i.length && i[0]?.ownerDocument === document ? i[0] : null;
    return i.find((t)=>tI(t, e1)) || a;
}
async function tU(e1) {
    let t = new Set(tg());
    if ("coverLetter" === e1 && tM()) {
        let e1 = await tN();
        if (e1) try {
            await (0, f.waitForCondition)(()=>tg().some((e1)=>!t.has(e1)), {
                timeout: 2500,
                interval: 100,
                observeTarget: document.body
            });
            let e1 = tg().find((e1)=>!t.has(e1)) || null;
            if (e1) return e1;
        } catch  {}
    }
    if (tv(e1)) return null;
    let r1 = t$(e1);
    if (!r1) return null;
    let n = (e1)=>{
        let t = e1.target;
        t instanceof HTMLInputElement && "file" === t.type && e1.preventDefault();
    };
    document.addEventListener("click", n, !0);
    try {
        ea(r1), await (0, f.waitForCondition)(()=>!!tF(e1) || tg().some((r1)=>!t.has(r1) || tI(r1, e1)), {
            timeout: 2e3,
            interval: 100,
            observeTarget: document.body
        });
    } finally{
        document.removeEventListener("click", n, !0);
    }
    return tF(e1) || tg().find((r1)=>!t.has(r1) || tI(r1, e1)) || null;
}
async function tH(e1) {
    return tq(e1) || await tU(e1);
}
function tY() {
    return !!(tD()?.querySelector("#CoverLetterHeading") && t$("coverLetter") || tM());
}
function tz() {
    return !!tj()?.querySelector("#ResumeHeading");
}
function tV() {
    let e1 = tz(), t = !!t$("resume"), r1 = t1("resume");
    return {
        hasSection: e1,
        canUpload: t,
        uploaded: r1
    };
}
function tW() {
    let e1 = tV();
    return e1.hasSection && (e1.canUpload || e1.uploaded);
}
function tG() {
    return tY();
}
function tK(e1) {
    return tm(e1).replace(/\s+/g, "");
}
function tX(e1, t) {
    let r1 = tK(e1);
    return !(!r1 || /no(resume\/cv|coverletter)selected/.test(r1)) && (t ? r1.includes(tK(t)) : /\.(pdf|docx?|txt|rtf|html?|mhtml?)\b/i.test(e1));
}
function tJ(e1) {
    return e1.match(/[^<>:"|?*\\/]+?\.(?:pdf|docx?|txt|rtf|html?|mhtml?)\b/i)?.[0] || "";
}
function tQ(e1) {
    return (e1.getAttribute("aria-labelledby") || "").split(/\s+/).map((t)=>e1.ownerDocument.getElementById(t)).map(w).filter(Boolean).join(" ");
}
function tZ(e1) {
    let t = Array.from(e1.querySelectorAll("button, a, [role='button'], input[type='button']"));
    return t.find((e1)=>{
        if (!el(e1)) return !1;
        let t = tm([
            w(e1),
            tQ(e1),
            e1.getAttribute("aria-label"),
            e1.getAttribute("aria-labelledby"),
            e1.getAttribute("title"),
            e1.getAttribute("ng-click"),
            e1.getAttribute("data-ng-click"),
            e1.id,
            e1.className
        ].filter(Boolean).join(" "));
        return t.includes("delete") || t.includes("remove") || t.includes("trash") || t.includes("dettachresumecoverletter");
    }) || null;
}
function t0(e1) {
    let t = tR();
    if (!t) return {
        uploadedValue: null,
        fileName: "",
        deleteButton: null
    };
    let r1 = Array.from(t.querySelectorAll(".fileHolder"));
    for (let t of r1){
        let r1 = t.querySelector(".textHolder") || null, n = w(r1), o = tZ(t);
        if (tX(n, e1) && o) return {
            uploadedValue: r1,
            fileName: n,
            deleteButton: o
        };
    }
    return {
        uploadedValue: null,
        fileName: "",
        deleteButton: null
    };
}
function t2(e1, t) {
    if ("coverLetter" === e1 && tM()) return t0(t);
    let r1 = tB(e1);
    if (!r1) return {
        uploadedValue: null,
        fileName: "",
        deleteButton: null
    };
    let n = [
        r1,
        ...Array.from(r1.querySelectorAll("span, div, a, p, li, td"))
    ].filter(el), o = n.find((e1)=>tX(w(e1), t)) || null, i = o ? w(o) : "", a = tZ(r1);
    return {
        uploadedValue: o,
        fileName: i,
        deleteButton: a
    };
}
function t1(e1, t) {
    let r1 = t2(e1, t);
    return !!(r1.uploadedValue && r1.fileName && r1.deleteButton);
}
function t3(e1) {
    if ("coverLetter" === e1 && tM()) {
        let e1 = t0();
        return e1.fileName ? tJ(e1.fileName) || e1.fileName : "";
    }
    let t = tB(e1);
    if (!t) return "";
    let r1 = Array.from(t.querySelectorAll(".fileHolder .textHolder, .fileHolder span, span.textHolder, [class*='fileName'], [class*='filename'], span, a")).filter(el), n = r1.find((e1)=>tX(w(e1)));
    return n ? tJ(w(n)) || w(n) : "";
}
function t4() {
    let e1 = {};
    return t1("resume") && (e1[e6] = t3("resume")), t1("coverLetter") && (e1["Cover Letter"] = t3("coverLetter")), e1;
}
async function t5(e1) {
    let t = t2(e1);
    t.uploadedValue && t.deleteButton && (ea(t.deleteButton), await (0, f.waitForCondition)(()=>!t1(e1), {
        timeout: 2500,
        interval: 100,
        observeTarget: document.body
    }));
}
function t6(e1) {
    let t = e1.ownerDocument.defaultView || window;
    e1.dispatchEvent(new t.Event("input", {
        bubbles: !0,
        cancelable: !1
    })), e1.dispatchEvent(new t.Event("change", {
        bubbles: !0,
        cancelable: !1
    }));
}
function t8(e1) {
    let t = globalThis.Buffer;
    if (t?.from) return t.from(e1).toString("base64");
    let r1 = "", n = 32768;
    for(let t = 0; t < e1.length; t += n){
        let o = e1.subarray(t, t + n);
        r1 += String.fromCharCode(...o);
    }
    return btoa(r1);
}
async function t9(e1, t) {
    let r1 = new Uint8Array(await t.arrayBuffer());
    return {
        kind: e1,
        fileName: t.name,
        fileType: t.type,
        lastModified: t.lastModified,
        base64: t8(r1)
    };
}
function t7(e1) {
    console.error(`[BrassRingAutofill] upload-result ${JSON.stringify({
        stage: e1,
        uploaded: !1,
        reason: "exception"
    })}`);
}
function re() {
    return {
        uploaded: !1,
        parserDetected: !1,
        parserReady: !1
    };
}
async function rt(e1, t, r1, n, o, i = !0) {
    try {
        if (!t || !await tw(e1)) return !1;
        let a = await (0, l.sendToBackground)({
            name: "uploadBrassringProfileBuilderFile",
            body: await t9(e1, t)
        });
        if (!a?.success) return !1;
        let s = await (0, f.waitForCondition)(()=>t1(e1, t.name), {
            timeout: 8e3,
            interval: 150,
            observeTarget: document.body
        });
        if (!s) return !1;
        return r1({
            label: o,
            required: i
        }), n(o), await (0, p.delay)(500), !0;
    } catch  {
        return t7(`upload-${e1}-profile-builder`), !1;
    }
}
async function rr(e1, t, r1, n, o, i, a = !0) {
    try {
        if (!t.files) return !1;
        let l = r1.files[0]?.name || "";
        t.files = r1.files, t6(t);
        let s = await (0, f.waitForCondition)(()=>t1(e1, l), {
            timeout: 6e3,
            interval: 150,
            observeTarget: document.body
        });
        if (!s) return !1;
        return n({
            label: i,
            required: a
        }), o(i), await (0, p.delay)(500), !0;
    } catch  {
        return t7(`upload-${e1}-direct`), !1;
    }
}
async function rn(e1, t, r1) {
    try {
        if (await t5("resume"), !e1) return re();
        let n = await (0, u.fetchPdfAsBlob)(e1), o = n.files[0], i = await tH("resume"), a = td(), l = i ? await rr("resume", i, n, t, r1, e5) : await rt("resume", o, t, r1, e5);
        if (!l) return re();
        let s = await tp(a);
        return {
            uploaded: !0,
            parserDetected: s.parserDetected,
            parserReady: s.parserReady
        };
    } catch (e1) {
        if (e1 instanceof c.CancelledError || e1 instanceof c.SkippedError) throw e1;
        return t7("upload-resume-orchestration"), re();
    }
}
async function ro(e1, t, r1) {
    if (await t5("coverLetter"), !e1?.coverLetterId) return !1;
    let n = await (0, u.fetchCoverLetterPdfAsBlob)(e1), o = n.files[0], i = await tH("coverLetter");
    return i ? await rr("coverLetter", i, n, t, r1, "Cover Letter", tG()) : await rt("coverLetter", o, t, r1, "Cover Letter", tG());
}
function ri(e1) {
    return Array.from(document.querySelectorAll(y[e1].listSelector));
}
function ra(e1) {
    return document.querySelector(y[e1].addSelector);
}
function rl(e1) {
    let t = y[e1].removeClickToken;
    return Array.from(document.querySelectorAll(`a[ng-click*='${t}'][ng-click*='remove'], button[ng-click*='${t}'][ng-click*='remove']`));
}
function rs(e1) {
    return Array.from(e1.querySelectorAll("input:not([type='hidden']):not([type='button']):not([type='submit']), textarea, select")).some((e1)=>!!el(e1) && !e1.disabled && !!e1.closest(h));
}
function ru(e1, t) {
    let r1 = ri(e1)[t];
    if (!r1) return null;
    let n = y[e1].updateClickToken, o = r1.closest(".widgetinner") || r1.parentElement, i = Array.from((o || document).querySelectorAll("a, button"));
    return i.find((e1)=>{
        if (!el(e1)) return !1;
        let t = v([
            w(e1),
            e1.id,
            e1.getAttribute("aria-label"),
            e1.getAttribute("ng-click"),
            e1.getAttribute("data-ng-click")
        ].filter(Boolean).join(" "));
        return t.includes("update") && t.includes(n.toLowerCase());
    }) || i.find((e1)=>{
        if (!el(e1)) return !1;
        let t = v([
            w(e1),
            e1.id,
            e1.getAttribute("aria-label"),
            e1.getAttribute("ng-click"),
            e1.getAttribute("data-ng-click")
        ].filter(Boolean).join(" "));
        return t.startsWith("update") || t.includes(n.toLowerCase());
    }) || null;
}
function rc() {
    let e1 = Array.from(document.querySelectorAll(".ngdialog-content, .profileWarningDialog")).filter(el);
    for (let t of e1){
        let e1 = v(w(t));
        if (!e1.includes("are you sure") || !e1.includes("remove")) continue;
        let r1 = Array.from(t.querySelectorAll("button, a, [role='button']")).find((e1)=>{
            if (!el(e1)) return !1;
            let t = v([
                w(e1),
                e1.getAttribute("aria-label"),
                e1.getAttribute("ng-click"),
                e1.getAttribute("data-ng-click")
            ].filter(Boolean).join(" "));
            return t.includes("yes remove it") || t.includes("removeprofiledata");
        });
        if (r1) return r1;
    }
    return null;
}
function rd() {
    let e1 = rc();
    return !!e1 && (ea(e1), !0);
}
async function rf(e1, t) {
    let r1 = 0;
    return await (0, f.waitForCondition)(()=>{
        if (ri(e1).length < t) return !0;
        let n = Date.now();
        return n - r1 > 150 && rd() && (r1 = n), !1;
    }, {
        timeout: 3500,
        interval: 50,
        observeTarget: document.body
    });
}
async function rp(e1) {
    let t = ra(e1);
    if (!t) return !1;
    let r1 = ri(e1).length;
    return ea(t), await (0, f.waitForCondition)(()=>ri(e1).length > r1, {
        timeout: 2500,
        interval: 100,
        observeTarget: document.body
    }), await (0, p.delay)(300), ri(e1).length > r1;
}
async function rm(e1) {
    let t = rl(e1), r1 = t[t.length - 1];
    if (!r1) return !1;
    let n = ri(e1).length;
    return ea(r1), await rf(e1, n), await (0, p.delay)(300), ri(e1).length < n;
}
async function rh(e1, t) {
    let r1 = ri(e1)[t];
    if (!r1) return !1;
    if (rs(r1)) return !0;
    let n = ru(e1, t);
    if (!n) return !1;
    ea(n), await (0, f.waitForCondition)(()=>{
        let r1 = ri(e1)[t];
        return !!(r1 && rs(r1));
    }, {
        timeout: 2500,
        interval: 100,
        observeTarget: document.body
    }), await (0, p.delay)(200);
    let o = ri(e1)[t];
    return !!(o && rs(o));
}
async function rg(e1, t) {
    let r1 = Math.max(0, Math.min(t, y[e1].maxCount));
    for(; ri(e1).length > r1;){
        let t = await rm(e1);
        if (!t) break;
    }
    for(; ri(e1).length < r1;){
        let t = await rp(e1);
        if (!t) break;
    }
    return ri(e1).length;
}
async function rb(e1, t = 5e3) {
    let r1 = ()=>({
            educationCount: ri("education").length,
            employmentCount: ri("experience").length
        }), n = r1(), o = e1.educationCount > 0 && 0 === n.educationCount, i = e1.employmentCount > 0 && 0 === n.employmentCount;
    (o || i) && await (0, f.waitForCondition)(()=>{
        let e1 = r1();
        return (!o || e1.educationCount > 0) && (!i || e1.employmentCount > 0);
    }, {
        timeout: t,
        interval: 100,
        observeTarget: document.body,
        observerInit: {
            childList: !0,
            subtree: !0
        }
    });
    let a = r1();
    return console.info("[BrassRingAutofill] composite-hydration", {
        profileEducationCount: e1.educationCount,
        profileEmploymentCount: e1.employmentCount,
        initialEducationCount: n.educationCount,
        initialEmploymentCount: n.employmentCount,
        finalEducationCount: a.educationCount,
        finalEmploymentCount: a.employmentCount
    }), a;
}
async function ry(e1) {
    let t = !1;
    for (let [r1, n] of [
        [
            "education",
            e1.educationCount
        ],
        [
            "experience",
            e1.employmentCount
        ]
    ]){
        let e1 = ri(r1).length;
        if (n <= 0 || e1 > 0) continue;
        let o = await rp(r1);
        console.info("[BrassRingAutofill] composite-seed", {
            kind: r1,
            sourceCount: n,
            beforeCount: e1,
            afterCount: ri(r1).length,
            added: o
        }), t = t || o;
    }
    return t;
}
function rv(e1, t) {
    let r1 = y[e1], n = Array.from(document.querySelectorAll(r1.doneContainerSelector)), o = n[t]?.querySelector("button.primaryButton, button[ng-click*='save'], input[type='button']");
    if (o) return o;
    let i = ri(e1), a = i[t], l = a?.parentElement?.querySelector("button.primaryButton, button[ng-click*='save'], input[type='button']");
    return l || Array.from(document.querySelectorAll("button, input[type='button']")).filter((e1)=>/done/i.test(w(e1) || e1.value || ""))[t] || null;
}
async function rw(e1, t) {
    let r1 = rv(e1, t);
    r1 && (ea(r1), await (0, p.delay)(500));
}
async function rS() {
    await (0, f.waitForCondition)(()=>document.querySelectorAll(h).length > 0, {
        timeout: 3e3,
        interval: 100,
        observeTarget: document.body
    });
}
function rE() {
    let e1 = Array.from(document.querySelectorAll("button, input[type='button'], input[type='submit'], a"));
    return e1.find((e1)=>{
        let t = w(e1) || e1.value || "";
        return /^(submit|submit application|apply|continue|next|save and continue)$/i.test(t.trim());
    }) || null;
}
function rx() {
    let e1 = rE();
    e1 && ea(e1);
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24;
$RefreshReg$(_c, "S");
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
$RefreshReg$(_c11, "M");
$RefreshReg$(_c12, "N");
$RefreshReg$(_c13, "B");
$RefreshReg$(_c14, "U");
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

},{}]},["6NOmI","h9Xac"], "h9Xac", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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SSxHQUFFLGNBQWMsSUFBSSxjQUFjLFdBQVU7UUFBQyxLQUFJLEVBQUUsTUFBTSxPQUFLO1FBQVksU0FBUSxDQUFDO0lBQUMsS0FBSSxHQUFFLGNBQWMsSUFBSSxjQUFjLFNBQVE7UUFBQyxLQUFJLEVBQUUsTUFBTSxPQUFLO1FBQVksU0FBUSxDQUFDO0lBQUMsS0FBSSxHQUFFLGNBQWMsSUFBSSxNQUFNLFVBQVM7UUFBQyxTQUFRLENBQUM7UUFBRSxVQUFTLENBQUM7SUFBQztBQUFHO0FBQUMsZUFBZSxHQUFHLEVBQUMsRUFBQyxDQUFDO0lBQUUsR0FBRSxTQUFRLEdBQUUsY0FBYyxJQUFJLFdBQVcsV0FBVTtRQUFDLFNBQVEsQ0FBQztJQUFDLEtBQUksTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRyxLQUFJLEdBQUcsSUFBRSxJQUFHLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUc7SUFBSSxJQUFJLEtBQUUsT0FBTyxVQUFRLE9BQU8sR0FBRSxJQUFFLEVBQUU7SUFBRyxJQUFHO1FBQUMsSUFBRyxJQUFJLGdCQUFjLEdBQUUsSUFBRyxhQUFhLFVBQVM7SUFBRSxFQUFDLE9BQUssQ0FBQztJQUFDLElBQUcsS0FBRyxNQUFNLEVBQUUsR0FBRTtRQUFDO0tBQUUsRUFBQyxPQUFNLE1BQU0sR0FBRyxJQUFFLE9BQU0sTUFBTSxHQUFHLElBQUUsTUFBSztRQUFDO0tBQUUsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsR0FBRztJQUFHLElBQUcsQ0FBQyxHQUFFLE9BQU0sQ0FBQztJQUFFLEdBQUcsSUFBRyxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLE1BQUssR0FBRSxTQUFRLEdBQUcsSUFBRSxJQUFHLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUc7SUFBSSxJQUFHO1FBQUMsSUFBRyxJQUFJLGdCQUFjLEdBQUUsSUFBRyxhQUFhLFVBQVM7SUFBRSxFQUFDLE9BQUssQ0FBQztJQUFDLElBQUcsS0FBRyxNQUFNLEVBQUUsR0FBRTtR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SztLQUFFLENBQUMsSUFBSSxHQUFHLE9BQU8sVUFBUyxJQUFFLEVBQUUsRUFBRTtJQUFJLE9BQU8sRUFBRSxLQUFLLENBQUEsS0FBRyxNQUFJO0FBQUU7QUFBQyxTQUFTLEdBQUcsRUFBQztJQUFFLElBQUksSUFBRTtJQUFJLElBQUc7UUFBQyxHQUFHLElBQUksY0FBWSxFQUFFLElBQUcsV0FBVztJQUFVLEVBQUMsT0FBSyxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsRUFBQyxFQUFDLENBQUM7SUFBRSxHQUFFLFNBQVEsRUFBRSxXQUFTLENBQUMsR0FBRSxHQUFFLFFBQU0sRUFBRSxPQUFNLEdBQUc7SUFBRyxJQUFJLEtBQUU7SUFBSSxJQUFHO1FBQUMsS0FBSSxJQUFHLFVBQVU7SUFBUyxFQUFDLE9BQUssQ0FBQztJQUFDLEdBQUcsS0FBRyxHQUFFO0FBQU07QUFBQyxTQUFTLEdBQUcsRUFBQztJQUFFLElBQUksSUFBRSxHQUFHLEtBQUcsS0FBRTtJQUFJLElBQUc7UUFBQyxJQUFHLElBQUksY0FBWSxHQUFFLElBQUcsV0FBVztJQUFRLEVBQUMsT0FBSyxDQUFDO0lBQUMsR0FBRyxjQUFjLElBQUksY0FBYyxXQUFVO1FBQUMsS0FBSTtRQUFTLFNBQVEsQ0FBQztJQUFDLEtBQUksR0FBRyxjQUFjLElBQUksY0FBYyxTQUFRO1FBQUMsS0FBSTtRQUFTLFNBQVEsQ0FBQztJQUFDLEtBQUksR0FBRztBQUFNO0FBQUMsZUFBZSxHQUFHLEVBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQztJQUFFLElBQUksSUFBRSxHQUFHO0lBQUcsSUFBRyxDQUFDLEdBQUUsT0FBTSxDQUFDO0lBQUUsSUFBSSxJQUFFLEVBQUUsT0FBSSxHQUFFLEtBQUssQ0FBQSxLQUFHLGNBQWMsS0FBSztJQUFJLEdBQUcsSUFBRyxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsZ0JBQWUsRUFBRyxJQUFJLEdBQUcsSUFBRyxTQUFPLEdBQUU7UUFBQyxTQUFRO1FBQUssVUFBUztRQUFJLGVBQWMsU0FBUztJQUFJO0lBQUcsSUFBSSxJQUFFLEdB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QUcsSUFBRSxNQUFJLE1BQUk7QUFBRTtBQUFDLFNBQVMsR0FBRyxFQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxHQUFFO0lBQUcsT0FBTyxLQUFHLEVBQUUsVUFBUSxFQUFFLFNBQU8sR0FBRyxJQUFFLEdBQUUsTUFBRyxJQUFFO0FBQUk7QUFBQyxTQUFTLEdBQUcsRUFBQyxFQUFDLENBQUMsRUFBQyxFQUFDO0lBQUUsT0FBTSxDQUFDLENBQUMsR0FBRyxJQUFFLEdBQUU7QUFBRTtBQUFDLGVBQWUsR0FBRyxFQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxJQUFFLEdBQUc7SUFBRSxJQUFJLElBQUUsR0FBRyxJQUFFLEdBQUU7SUFBRyxJQUFHLEdBQUUsT0FBTztJQUFFLElBQUc7UUFBQyxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsZ0JBQWUsRUFBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUUsR0FBRSxLQUFHO1lBQUMsU0FBUTtZQUFFLFVBQVM7WUFBRyxlQUFjLFNBQVM7UUFBSTtJQUFFLEVBQUMsT0FBSztRQUFDLE9BQU87SUFBSTtJQUFDLE9BQU8sR0FBRyxJQUFFLEdBQUU7QUFBRTtBQUFDLFNBQVMsR0FBRyxFQUFDLEVBQUMsQ0FBQztJQUFFLEVBQUUsSUFBRSxJQUFHLEdBQUcsS0FBRyxHQUFFLGNBQWMsSUFBSSxNQUFNLFVBQVM7UUFBQyxTQUFRLENBQUM7UUFBRSxVQUFTLENBQUM7SUFBQztBQUFHO0FBQUMsZUFBZSxHQUFHLEVBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLElBQUUsR0FBRztJQUFFLElBQUksSUFBRSxNQUFNLEVBQUUsR0FBRSxJQUFFO0lBQUcsT0FBTSxDQUFDLENBQUMsS0FBSSxDQUFBLEdBQUcsR0FBRSxJQUFHLEdBQUUsU0FBUSxHQUFHLElBQUUsRUFBRSxLQUFJLEdBQUUsUUFBTyxDQUFDLENBQUE7QUFBRTtBQUFDLGVBQWUsR0FBRyxFQUFDLEVBQUMsQ0FBQztJQUFFLElBQUksS0FBRSxFQUFFLElBQUU7SUFBRyxH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QUUsZUFBZSxjQUFjLGlDQUFnQyxJQUFFLEdBQUUsS0FBRyxTQUFTLGNBQWMsQ0FBQyxXQUFXLEVBQUUsR0FBRSxHQUFHLEVBQUUsQ0FBQyxJQUFFLE1BQUssSUFBRSxNQUFNLEtBQUssR0FBRSxVQUFRLEVBQUU7SUFBRSxPQUFPLEVBQUUsUUFBUSxLQUFHLEdBQUUsSUFBRyxHQUFFLEdBQUcsY0FBYyxXQUFVLEdBQUUsSUFBRyxHQUFFLEdBQUUscUJBQW9CLEdBQUUsSUFBRyxHQUFFLEtBQUc7QUFBQztBQUFDLGVBQWUsR0FBRyxFQUFDO0lBQUUsSUFBRyxDQUFDLEdBQUUsU0FBUTtRQUFDLEtBQUksSUFBSSxLQUFLLENBQUEsR0FBRSxlQUFlO1lBQUMsT0FBTTtZQUFTLFFBQU87UUFBUyxJQUFHLEdBQUUsU0FBUSxHQUFHLEdBQUMsRUFBRyxJQUFHLEdBQUcsSUFBRyxFQUFFLFNBQVEsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRyxNQUFLLEdBQUUsU0FBUTtZQUFDLEdBQUc7WUFBRztRQUFNO0lBQUM7QUFBQztBQUFDLGVBQWUsR0FBRyxFQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsR0FBRSxZQUFVLEdBQUU7UUFBQyxLQUFJLElBQUksTUFBSyxDQUFBLEdBQUUsZUFBZTtZQUFDLE9BQU07WUFBUyxRQUFPO1FBQVMsSUFBRyxHQUFFLFNBQVEsR0FBRyxHQUFDLEVBQUcsSUFBRyxHQUFFLFNBQVEsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRyxNQUFLLEdBQUUsWUFBVSxHQUFFO1lBQUMsR0FBRztZQUFHO1FBQU07UUFBQyxHQUFFLFVBQVEsR0FBRSxHQUFFLGNBQWMsSUFBSSxNQUFNLFNBQVE7WUFBQyxTQUFRLENBQUM7WUFBRSxVQUFTLENBQUM7UUFBQyxLQUFJLEdBQUUsY0FBYyxJQUFJLE1BQU0sVUFBUztZQUFDLFNBQVEsQ0FBQztZQUFFLFVBQVMsQ0FBQztRQUFDLEtBQUksTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRztJQUFJO0FBQUM7QUFBQyxlQUFlLEdBQUcsRUFBQyxFQUFDLENBQUM7SUFBRSxJQUFJLEtBQUUsRUFBRTtJQUFHLElBQUcsTUFBSSxHQUFFLFFBQU8sT0FBTSxDQUFDO0lBQUUsSUFBSSxJQUFFLE1BQU0sS0FBSyxHQUFFLGFBQWEsaUJBQWlCO0lBQXdCLElBQUcsTUFBSSxFQUFFLFFBQU8sT0FBTSxDQUFDO0lBQUUsSUFBSSxJQUFFLEVBQUUsS0FBSyxDQUFBO1FBQUksSUFBSSxJQUFFLEdBQUcsS0FBRyxJQUFFLEdBQUU7UUFBTSxPQUFPLEdBQUUsS0FBSyxDQUFBLEtBQUcsRUFBRSxHQUFFLE9BQUksRUFBRSxHQUFFO0lBQUc7SUFBRyxPQUFPLEtBQUksQ0FBQSxJQUFFLEdBQUcsR0FBRSxHQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUksQ0FBQSxFQUFFLFdBQVMsTUFBTSxHQUFHLElBQUcsRUFBRSxPQUFNO0FBQUU7QUFBQyxlQUFlLEdBQUcsRUFBQyxFQUFDLENBQUM7SUFBRSxJQUFJLEtBQUUsRUFBRTtJQUFHLElBQUcsTUFBSSxHQUFFLFFBQU8sT0FBTSxDQUFDO0lBQUUsSUFBSSxJQUFFLEdBQUU7SUFBVyxJQUFHLE1BQUksRUFBRSxRQUFPLE9BQU0sQ0FBQztJQUFFLElBQUcsTUFBSSxFQUFFLFFBQU87UUFBQyxJQUFJLElBQUUsR0FBRSxLQUFLLENBQUEsSUFBRyxHQUFHLE1BQUksQUFBQyxDQUFBLEdBQUUsRUFBRSxTQUFRLEVBQUcsR0FBRSxPQUFNLE1BQUksQUFBQyxDQUFBLEdBQUUsRUFBRSxrQkFBaUIsRUFBRyxFQUFFLElBQUcsRUFBRSxHQUFFLFVBQVMsSUFBRSxHQUFFLEtBQUs7UUFBSSxPQUFNLEFBQUMsQ0FBQSxDQUFDLENBQUMsS0FBRyxDQUFDLENBQUMsQ0FBQSxLQUFLLENBQUEsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUMsSUFBRyxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVUsQ0FBQTtJQUFFO0lBQUMsSUFBSSxJQUFFLENBQUM7SUFBRSxLQUFJLElBQUksTUFBSyxFQUFFO1FBQUMsSUFBSSxJQUFFLEdBQUcsS0FBRyxJQUFFLEdBQUUsS0FBSyxDQUFBLEtBQUcsRUFBRSxHQUFFO1FBQUksS0FBSSxDQUFBLElBQUUsQ0FBQyxDQUFBLEdBQUcsS0FBRyxDQUFDLEdBQUUsV0FBUyxNQUFNLEdBQUcsSUFBRSxDQUFDO0lBQUU7SUFBQyxPQUFPO0FBQUM7QUFBQyxJQUFJLEtBQUcsbUJBQWtCLEtBQUcsYUFBWSxLQUFHLHlPQUF3TyxLQUFHLE1BQUssS0FBRyxLQUFJLEtBQUcsS0FBSSxLQUFHLEtBQUksS0FBRyxJQUFJLElBQUk7SUFBQztJQUFPO0lBQVE7SUFBTTtJQUFTO0lBQU07SUFBUztDQUFPLEdBQUUsS0FBRyxJQUFJLFNBQVEsS0FBRztBQUFFLFNBQVMsR0FBRyxFQUFDO0lBQUUsSUFBSSxJQUFFO0lBQVcsSUFBSSxJQUFJLEtBQUUsR0FBRSxLQUFFLEdBQUUsUUFBTyxLQUFJLEtBQUcsR0FBRSxXQUFXLEtBQUcsSUFBRSxLQUFLLEtBQUssR0FBRTtJQUFVLE9BQU0sQ0FBQyxFQUFFLEdBQUUsT0FBTyxDQUFDLEVBQUUsQUFBQyxDQUFBLE1BQUksQ0FBQSxFQUFHLFNBQVMsSUFBSSxDQUFDO0FBQUE7QUFBQyxTQUFTLEdBQUcsRUFBQyxFQUFDLENBQUM7SUFBRSxJQUFJLEtBQUU7UUFBQyxHQUFFO1FBQUcsR0FBRSxhQUFhO1FBQWtCLEdBQUUsYUFBYTtLQUFXLENBQUMsT0FBTyxTQUFTLEtBQUs7SUFBSyxJQUFHLElBQUUsT0FBTSxDQUFDLEVBQUUsR0FBRSxRQUFRLENBQUMsRUFBRSxHQUFFLENBQUM7SUFBQyxJQUFJLElBQUUsR0FBRyxJQUFJO0lBQUcsT0FBTyxLQUFJLENBQUEsSUFBRSxFQUFFLElBQUcsR0FBRyxJQUFJLElBQUUsRUFBQyxHQUFHLENBQUMsRUFBRSxHQUFFLFFBQVEsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQztBQUFBO0FBQUMsU0FBUyxHQUFHLEVBQUM7SUFBRSxJQUFHLENBQUMsR0FBRyxPQUFJLEdBQUUsUUFBTyxPQUFNLENBQUM7SUFB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QUFJLElBQUUsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLGdCQUFlLEVBQUcsSUFBSSxHQUFHLElBQUUsRUFBRSxPQUFNO1lBQUMsU0FBUTtZQUFJLFVBQVM7WUFBSSxlQUFjLFNBQVM7UUFBSTtRQUFHLElBQUcsQ0FBQyxHQUFFLE9BQU0sQ0FBQztRQUFFLE9BQU8sR0FBRTtZQUFDLE9BQU07WUFBRSxVQUFTO1FBQUMsSUFBRyxFQUFFLElBQUcsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRyxNQUFLLENBQUM7SUFBQyxFQUFDLE9BQUs7UUFBQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRSxnQkFBZ0IsQ0FBQyxHQUFFLENBQUM7SUFBQztBQUFDO0FBQUMsZUFBZSxHQUFHLEVBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLElBQUUsQ0FBQyxDQUFDO0lBQUUsSUFBRztRQUFDLElBQUcsQ0FBQyxFQUFFLE9BQU0sT0FBTSxDQUFDO1FBQUUsSUFBSSxJQUFFLEdBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxRQUFNO1FBQUcsRUFBRSxRQUFNLEdBQUUsT0FBTSxHQUFHO1FBQUcsSUFBSSxJQUFFLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxnQkFBZSxFQUFHLElBQUksR0FBRyxJQUFFLElBQUc7WUFBQyxTQUFRO1lBQUksVUFBUztZQUFJLGVBQWMsU0FBUztRQUFJO1FBQUcsSUFBRyxDQUFDLEdBQUUsT0FBTSxDQUFDO1FBQUUsT0FBTyxFQUFFO1lBQUMsT0FBTTtZQUFFLFVBQVM7UUFBQyxJQUFHLEVBQUUsSUFBRyxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLE1BQUssQ0FBQztJQUFDLEVBQUMsT0FBSztRQUFDLE9BQU8sR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFFLE9BQU8sQ0FBQyxHQUFFLENBQUM7SUFBQztBQUFDO0FBQUMsZUFBZSxHQUFHLEVBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQztJQUFFLElB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QUcsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLGdCQUFlLEVBQUcsSUFBSSxHQUFHLElBQUcsU0FBTyxJQUFFO1FBQUMsU0FBUTtRQUFLLFVBQVM7UUFBSSxlQUFjLFNBQVM7SUFBSSxJQUFHLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUcsTUFBSyxHQUFHLElBQUcsU0FBTztBQUFDO0FBQUMsZUFBZSxHQUFHLEVBQUM7SUFBRSxJQUFJLElBQUUsR0FBRyxLQUFHLEtBQUUsQ0FBQyxDQUFDLEVBQUUsU0FBTyxFQUFFO0lBQUMsSUFBRyxDQUFDLElBQUUsT0FBTSxDQUFDO0lBQUUsSUFBSSxJQUFFLEdBQUcsSUFBRztJQUFPLE9BQU8sR0FBRyxLQUFHLE1BQU0sR0FBRyxJQUFFLElBQUcsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRyxNQUFLLEdBQUcsSUFBRyxTQUFPO0FBQUM7QUFBQyxlQUFlLEdBQUcsRUFBQyxFQUFDLENBQUM7SUFBRSxJQUFJLEtBQUUsR0FBRyxHQUFFLENBQUMsRUFBRTtJQUFDLElBQUcsQ0FBQyxJQUFFLE9BQU0sQ0FBQztJQUFFLElBQUcsR0FBRyxLQUFHLE9BQU0sQ0FBQztJQUFFLElBQUksSUFBRSxHQUFHLElBQUU7SUFBRyxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxHQUFHLElBQUcsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLGdCQUFlLEVBQUc7UUFBSyxJQUFJLEtBQUUsR0FBRyxHQUFFLENBQUMsRUFBRTtRQUFDLE9BQU0sQ0FBQyxDQUFFLENBQUEsTUFBRyxHQUFHLEdBQUM7SUFBRSxHQUFFO1FBQUMsU0FBUTtRQUFLLFVBQVM7UUFBSSxlQUFjLFNBQVM7SUFBSSxJQUFHLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUc7SUFBSyxJQUFJLElBQUUsR0FBRyxHQUFFLENBQUMsRUFBRTtJQUFDLE9BQU0sQ0FBQyxDQUFFLENBQUEsS0FBRyxHQUFHLEVBQUM7QUFBRTtBQUFDLGVBQWUsR0FBRyxFQUFDLEVBQUMs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QUFDLFNBQVM7SUFBSyxJQUFJLEtBQUUsTUFBTSxLQUFLLFNBQVMsaUJBQWlCO0lBQTBELE9BQU8sR0FBRSxLQUFLLENBQUE7UUFBSSxJQUFJLElBQUUsRUFBRSxPQUFJLEdBQUUsU0FBTztRQUFHLE9BQU0sdUVBQXVFLEtBQUssRUFBRTtJQUFPLE1BQUk7QUFBSTtBQUFDLFNBQVM7SUFBSyxJQUFJLEtBQUU7SUFBSyxNQUFHLEdBQUc7QUFBRSIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtM2M2NTE2ZjQyZDFhOTJjYS5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9zaXRlcy9icmFzc3Jpbmcvb3BlcmF0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxicmFzc3JpbmdcXFxcb3BlcmF0aW9ucy5qc1wiLFwiYnVuZGxlSWRcIjpcIjgyYjBiMGZmOTZmZmQzMmRcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiA5WkpiVVxyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvYnJhc3NyaW5nL29wZXJhdGlvbnMuanNcclxuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgQHBsYXNtb2hxL21lc3NhZ2luZyAtPiA5Mkd5QiAgPT4gIEBwbGFzbW9ocS9tZXNzYWdpbmcuanNcclxuICogICBkYXlqcyAtPiBmbmhYcCAgPT4gIF90aWxkZV9ub2RlX21vZHVsZXMvZGF5anMuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXIgLT4gN1Q1ZVcgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9hbnN3ZXIuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb24gLT4gbHVKZnMgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb24uanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9jaG9pY2UtbWF0Y2ggLT4gNm1rSTQgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9jaG9pY2UtbWF0Y2guanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9kb20gLT4gaEE1UWEgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9kb20uanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9vYnNlcnZlciAtPiBlVHpVeCAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL29ic2VydmVyLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NoYXJlZC9maWxsZXIgLT4gMmFHc1ggID0+ICBzcmMvY29udGVudHMvc2hhcmVkL2ZpbGxlci5qc1xyXG4gKiAgIH51dGlscy9kZWxheSAtPiBhbTYxNCAgPT4gIHNyYy91dGlscy9kZWxheS5qc1xyXG4gKi9cclxuXHJcbnZhciBuPWUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO24uZGVmaW5lSW50ZXJvcEZsYWcociksbi5leHBvcnQocixcImJ1aWxkQnJhc3NyaW5nRmllbGRGaWxsQ2FuZGlkYXRlc1wiLCgpPT5JKSxuLmV4cG9ydChyLFwibm9ybWFsaXplQnJhc3NyaW5nRGF0ZVZhbHVlRm9ySW5wdXRcIiwoKT0+UCksbi5leHBvcnQocixcImZpbmREZXBlbmRlbnRTdGF0ZVByb3ZpbmNlRmllbGRcIiwoKT0+ZXIpLG4uZXhwb3J0KHIsXCJnZXRBdXRvY29tcGxldGVMaXN0Ym94SWRcIiwoKT0+ZXMpLG4uZXhwb3J0KHIsXCJmaW5kQXV0b2NvbXBsZXRlVG9nZ2xlXCIsKCk9PmVkKSxuLmV4cG9ydChyLFwiaGFzQ29tbWl0dGVkQXV0b2NvbXBsZXRlU2VsZWN0aW9uXCIsKCk9PmVNKSxuLmV4cG9ydChyLFwiZmlsbElucHV0VGV4dEZpZWxkXCIsKCk9PmVxKSxuLmV4cG9ydChyLFwiZmlsbFNlbGVjdEZpZWxkXCIsKCk9PmVVKSxuLmV4cG9ydChyLFwiZmlsbFNlYXJjaEZpZWxkXCIsKCk9PmVIKSxuLmV4cG9ydChyLFwiZmlsbE11bHRpc2VsZWN0RmllbGRcIiwoKT0+ZVcpLG4uZXhwb3J0KHIsXCJmaWxsUmFkaW9Hcm91cEZpZWxkXCIsKCk9PmUzKSxuLmV4cG9ydChyLFwiZmlsbENoZWNrYm94RmllbGRcIiwoKT0+ZTQpLG4uZXhwb3J0KHIsXCJCUkFTU1JJTkdfUkVTVU1FX0xBQkVMXCIsKCk9PmU1KSxuLmV4cG9ydChyLFwiY2FwdHVyZUJyYXNzcmluZ1Jlc3VtZVBhcnNlckJhc2VsaW5lXCIsKCk9PnRkKSxuLmV4cG9ydChyLFwid2FpdEZvckJyYXNzcmluZ1Jlc3VtZVBhcnNpbmdDb21wbGV0ZVwiLCgpPT50cCksbi5leHBvcnQocixcImZpbmRWaXNpYmxlVXBsb2FkRGlhbG9nSW5wdXRcIiwoKT0+dEYpLG4uZXhwb3J0KHIsXCJoYXNDb3ZlckxldHRlclVwbG9hZFNsb3RcIiwoKT0+dFkpLG4uZXhwb3J0KHIsXCJnZXRSZXN1bWVVcGxvYWRTdGF0ZVwiLCgpPT50Viksbi5leHBvcnQocixcImhhc1Jlc3VtZVVwbG9hZFNsb3RcIiwoKT0+dFcpLG4uZXhwb3J0KHIsXCJpc0NvdmVyTGV0dGVyUmVxdWlyZWRcIiwoKT0+dEcpLG4uZXhwb3J0KHIsXCJnZXRVcGxvYWRTbmFwc2hvdFZhbHVlc1wiLCgpPT50NCksbi5leHBvcnQocixcInVwbG9hZFJlc3VtZVwiLCgpPT5ybiksbi5leHBvcnQocixcInVwbG9hZENvdmVyTGV0dGVyXCIsKCk9PnJvKSxuLmV4cG9ydChyLFwib3BlblNlY3Rpb25Gb3JFZGl0XCIsKCk9PnJoKSxuLmV4cG9ydChyLFwiZW5zdXJlU2VjdGlvbkNvdW50XCIsKCk9PnJnKSxuLmV4cG9ydChyLFwid2FpdEZvckNvbXBvc2l0ZVNlY3Rpb25Sb3dzXCIsKCk9PnJiKSxuLmV4cG9ydChyLFwic2VlZEVtcHR5Q29tcG9zaXRlU2VjdGlvbnNcIiwoKT0+cnkpLG4uZXhwb3J0KHIsXCJzYXZlU2VjdGlvblwiLCgpPT5ydyksbi5leHBvcnQocixcInByZUZpbGxGb3JtXCIsKCk9PnJTKSxuLmV4cG9ydChyLFwic3VibWl0QXBwbGljYXRpb25cIiwoKT0+cngpO3ZhciBvPWUoXCJ+Y29udGVudHMvbWV0aG9kcy9jaG9pY2UtbWF0Y2hcIiksaT1lKFwiZGF5anNcIiksYT1uLmludGVyb3BEZWZhdWx0KGkpLGw9ZShcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIikscz1lKFwifmNvbnRlbnRzL3NoYXJlZC9maWxsZXJcIiksdT1lKFwifmNvbnRlbnRzL21ldGhvZHMvYW5zd2VyXCIpLGM9ZShcIn5jb250ZW50cy9tZXRob2RzL2NhbmNlbGxhdGlvblwiKSxkPWUoXCJ+Y29udGVudHMvbWV0aG9kcy9kb21cIiksZj1lKFwifmNvbnRlbnRzL21ldGhvZHMvb2JzZXJ2ZXJcIikscD1lKFwifnV0aWxzL2RlbGF5XCIpO2xldCBtPVwiLmltbWVyc2l2ZS10cmFuc2xhdGUtdGFyZ2V0LXdyYXBwZXIsIFtkYXRhLWltbWVyc2l2ZS10cmFuc2xhdGUtdHJhbnNsYXRpb24tZWxlbWVudC1tYXJrXVwiLGg9XCIuZmllbGRjb250YWluXCIsZz1cIiNBdHRhY2hlbWVudENhdGFnb3J5XCIsYj1cIkxldHRlciBvZiBSZWNvbW1lbmRhdGlvblwiLHk9e2VkdWNhdGlvbjp7YWRkU2VsZWN0b3I6XCIjYWRkRWR1LCBhW2FyaWEtbGFiZWwqPSdFZHVjYXRpb24gaGlzdG9yeSddXCIsbGlzdFNlbGVjdG9yOlwidWwuZWR1Y2F0aW9uTGlzdCwgdWxbY2xhc3MqPSdlZHVjYXRpb25MaXN0J10sIHVsW2FyaWEtbGFiZWxePSdFZHVjYXRpb24gaGlzdG9yeSddXCIscmVtb3ZlQ2xpY2tUb2tlbjpcImFkZFJlbW92ZUVkdWNhdGlvblwiLHVwZGF0ZUNsaWNrVG9rZW46XCJ1cGRhdGVFZHVjYXRpb25cIixkb25lQ29udGFpbmVyU2VsZWN0b3I6XCIuZWR1QnV0dG9uQ29udGFpbmVyXCIsbWF4Q291bnQ6M30sZXhwZXJpZW5jZTp7YWRkU2VsZWN0b3I6XCIjYWRkRXhwLCBhW2FyaWEtbGFiZWwqPSdXb3JrIGV4cGVyaWVuY2UnXVwiLGxpc3RTZWxlY3RvcjpcInVsLmV4cGVyaWVuY2VMaXN0LCB1bFtjbGFzcyo9J2V4cGVyaWVuY2VMaXN0J10sIHVsW2FyaWEtbGFiZWxePSdXb3JrIGV4cGVyaWVuY2UnXSwgdWxbYXJpYS1sYWJlbF49J0V4cGVyaWVuY2UnXVwiLHJlbW92ZUNsaWNrVG9rZW46XCJhZGRSZW1vdmVFeHBlcmllbmNlXCIsdXBkYXRlQ2xpY2tUb2tlbjpcInVwZGF0ZUV4cGVyaWVuY2VcIixkb25lQ29udGFpbmVyU2VsZWN0b3I6XCIuZXhwQnV0dG9uQ29udGFpbmVyLCAuZXhwZXJpZW5jZUJ1dHRvbkNvbnRhaW5lclwiLG1heENvdW50Ojd9fTtmdW5jdGlvbiB2KGUpe3JldHVybiBlLnJlcGxhY2UoL1xccysvZyxcIiBcIikucmVwbGFjZSgvW15cXHB7TH1cXHB7Tn1cXHMrIy4tXS9ndSxcIlwiKS50cmltKCkudG9Mb3dlckNhc2UoKX1mdW5jdGlvbiB3KGUpe2lmKCFlKXJldHVyblwiXCI7bGV0IHQ9ZS5jbG9uZU5vZGUoITApO3JldHVybiB0LnF1ZXJ5U2VsZWN0b3JBbGwobSkuZm9yRWFjaChlPT5lLnJlbW92ZSgpKSwodC50ZXh0Q29udGVudHx8XCJcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCl9ZnVuY3Rpb24gUyhlKXtsZXQgdD1BcnJheS5pc0FycmF5KGUpP2U6W2VdO3JldHVybiB0LmZsYXRNYXAoZT0+U3RyaW5nKGU/P1wiXCIpLnNwbGl0KC9bXFxuLDtdLykpLm1hcChlPT5lLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pfWxldCBFPVt7cGF0dGVybjovXFxiKGp1cmlzXFxzK2RvY3RvcnxqXFxzKmQpXFxiLyxvcHRpb25MYWJlbHM6W1wiSnVyaXMgRG9jdG9yXCJdfSx7cGF0dGVybjovXFxicHJvZmVzc2lvbmFsXFxzK2RvY3RvcmF0ZVxcYi8sb3B0aW9uTGFiZWxzOltcIlByb2Zlc3Npb25hbCBEb2N0b3JhdGVcIl19LHtwYXR0ZXJuOi9cXGIocGhcXHMqZHxwaGR8ZG9jdG9yYXRlfGRvY3RvcmFsfGRvY3RvcilcXGIvLG9wdGlvbkxhYmVsczpbXCJEb2N0b3JhdGUgYXdhcmRlZFwiXX0se3BhdHRlcm46L1xcYihtYXN0ZXJzP3xtXFxzKnN8bVxccypzY3xtc2N8bVxccyphfG1iYXxtXFxzKmJcXHMqYXxtXFxzKmVuZ3xtZW5nfG1cXHMqc2V8bXNlKVxcYi8sb3B0aW9uTGFiZWxzOltcIk1hc3RlcidzIGRlZ3JlZVwiXX0se3BhdHRlcm46L1xcYihiYWNoZWxvcnM/fGJcXHMqc3xiXFxzKmF8YlxccypzY3xic2N8Ylxccyplbmd8YmVuZylcXGIvLG9wdGlvbkxhYmVsczpbXCJCYWNoZWxvcidzIGRlZ3JlZVwiXX0se3BhdHRlcm46L1xcYihhc3NvY2lhdGVzP3xhXFxzKnN8YVxccyphKVxcYi8sb3B0aW9uTGFiZWxzOltcIkFzc29jaWF0ZSdzIGRlZ3JlZVwiXX0se3BhdHRlcm46L1xcYmhpZ2hcXHMrc2Nob29sXFxiLyxvcHRpb25MYWJlbHM6W1wiSGlnaCBTY2hvb2xcIl19LHtwYXR0ZXJuOi9cXGJwb3N0XFxzK2dyYWR1YXRlXFxzK2NlcnRpZmljYXRlXFxiLyxvcHRpb25MYWJlbHM6W1wiUG9zdCBHcmFkdWF0ZSBDZXJ0aWZpY2F0ZVwiXX0se3BhdHRlcm46L1xcYihub1xccytkZWdyZWV8bm9uZXxub1xccytmaW5hbFxccytjZXJ0aWZpY2F0ZSlcXGIvLG9wdGlvbkxhYmVsczpbXCJObyBmaW5hbCBjZXJ0aWZpY2F0ZVwiXX0se3BhdHRlcm46L1xcYihjZXJ0aWZpY2F0ZXxjZXJ0aWZpY2F0aW9ufGNlcnQpXFxiLyxvcHRpb25MYWJlbHM6W1wiQ2VydGlmaWNhdGVcIl19LHtwYXR0ZXJuOi9cXGJkaXBsb21hXFxiLyxvcHRpb25MYWJlbHM6W1wiRGlwbG9tYVwiXX1dO2Z1bmN0aW9uIHgoZSl7cmV0dXJuIHYoU3RyaW5nKGU/P1wiXCIpKS5yZXBsYWNlKC9bLi9fLV0rL2csXCIgXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpfWZ1bmN0aW9uIEMoZSl7cmV0dXJuXCJkZWdyZWVcIj09PXYoU3RyaW5nKGU/LmxhYmVsPz9cIlwiKSl9ZnVuY3Rpb24gQShlKXtyZXR1cm4gQXJyYXkuaXNBcnJheShlLm9wdGlvbnMpP2Uub3B0aW9ucy5tYXAoZT0+XCJzdHJpbmdcIj09dHlwZW9mIGU/ZTplJiZcIm9iamVjdFwiPT10eXBlb2YgZSYmXCJsYWJlbFwiaW4gZSYmXCJzdHJpbmdcIj09dHlwZW9mIGUubGFiZWw/ZS5sYWJlbDpcIlwiKS5tYXAoZT0+ZS50cmltKCkpLmZpbHRlcihCb29sZWFuKTpbXX1mdW5jdGlvbiBrKGUsdCl7bGV0IHI9QShlKTtpZigwPT09ci5sZW5ndGgpcmV0dXJuIG51bGw7Zm9yKGxldCBlIG9mIHQpe2xldCB0PXgoZSksbj1yLmZpbmQoZT0+eChlKT09PXQpO2lmKG4pcmV0dXJuIG59cmV0dXJuIG51bGx9ZnVuY3Rpb24gVChlKXtsZXQgdD14KGUpO2lmKCF0KXJldHVybltdO2xldCByPUUuZmluZCgoe3BhdHRlcm46ZX0pPT5lLnRlc3QodCkpO3JldHVybiByPy5vcHRpb25MYWJlbHN8fFtdfWZ1bmN0aW9uIEYoZSx0KXtsZXQgcj14KHQpO3ImJihlLnNvbWUoZT0+eChlKT09PXIpfHxlLnB1c2godCkpfWZ1bmN0aW9uIEkoZSx0KXtsZXQgcj1TKHQpO2lmKCFDKGUpKXJldHVybiByO2xldCBuPVtdO2ZvcihsZXQgdCBvZiByKXtsZXQgcj1UKHQpOzAhPT1yLmxlbmd0aCYmRihuLGsoZSxyKXx8clswXSl9Zm9yKGxldCBlIG9mIHIpRihuLGUpO3JldHVybiBufWZ1bmN0aW9uIGooZSx0KXtsZXQgcj1lIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudD93aW5kb3cuSFRNTFRleHRBcmVhRWxlbWVudC5wcm90b3R5cGU6d2luZG93LkhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlLG49T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLFwidmFsdWVcIik/LnNldDtuP24uY2FsbChlLHQpOmUudmFsdWU9dH1mdW5jdGlvbiBEKGUpe2xldCB0PWUudHJpbSgpLHI9W1wiamFuXCIsXCJmZWJcIixcIm1hclwiLFwiYXByXCIsXCJtYXlcIixcImp1blwiLFwianVsXCIsXCJhdWdcIixcInNlcFwiLFwib2N0XCIsXCJub3ZcIixcImRlY1wiXSxuPWU9PntsZXQgdD1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFwuJC8sXCJcIikuc2xpY2UoMCwzKSxuPXIuaW5kZXhPZih0KTtyZXR1cm4gbj49MD9uKzE6MH0sbz10Lm1hdGNoKC9eKCg/OjE5fDIwKVxcZHsyfSlbLS8uXSgwP1sxLTldfDFbMC0yXSkoPzpbLS8uXSgwP1sxLTldfFsxMl1cXGR8M1swMV0pKT8kLyk7aWYobylyZXR1cm57eWVhcjpOdW1iZXIob1sxXSksbW9udGg6TnVtYmVyKG9bMl0pLGRheTpOdW1iZXIob1szXXx8MSl9O2xldCBpPXQubWF0Y2goL14oMD9bMS05XXwxWzAtMl0pWy0vLl0oPzooMD9bMS05XXxbMTJdXFxkfDNbMDFdKVstLy5dKT8oKD86MTl8MjApXFxkezJ9KSQvKTtpZihpKXJldHVybnt5ZWFyOk51bWJlcihpWzNdKSxtb250aDpOdW1iZXIoaVsxXSksZGF5Ok51bWJlcihpWzJdfHwxKX07bGV0IGE9dC5tYXRjaCgvXihbQS1aYS16XSspXFwuP1xccysoPzooMD9bMS05XXxbMTJdXFxkfDNbMDFdKSw/XFxzKyk/KCg/OjE5fDIwKVxcZHsyfSkkLyk7aWYoYSl7bGV0IGU9bihhWzFdKTtpZihlPjApcmV0dXJue3llYXI6TnVtYmVyKGFbM10pLG1vbnRoOmUsZGF5Ok51bWJlcihhWzJdfHwxKX19cmV0dXJuIG51bGx9ZnVuY3Rpb24gUChlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKXJldHVybiB0O2xldCByPVN0cmluZyh0Pz9cIlwiKS50cmltKCk7aWYoIXIpcmV0dXJuIHI7bGV0IG49ZT0+ZS50cmltKCkucmVwbGFjZSgvbSsvZ2ksZT0+XCJNXCIucmVwZWF0KGUubGVuZ3RoKSkucmVwbGFjZSgvZCsvZ2ksZT0+XCJEXCIucmVwZWF0KGUubGVuZ3RoKSkucmVwbGFjZSgveSsvZ2ksZT0+Mj09PWUubGVuZ3RoP1wiWVlcIjpcIllZWVlcIiksbz1lLnBsYWNlaG9sZGVyPy50cmltKCl8fFwiXCIsaT1uKG8pLGw9ISFpJiZpLmluY2x1ZGVzKFwiTVwiKSYmaS5pbmNsdWRlcyhcIkRcIikmJmkuaW5jbHVkZXMoXCJZXCIpLHM9ISFpJiYvXltNWVxccy4vLV0rJC8udGVzdChpKSYmaS5pbmNsdWRlcyhcIk1cIikmJmkuaW5jbHVkZXMoXCJZXCIpLHU9ZS5jbGFzc0xpc3QuY29udGFpbnMoXCJtb250aHllYXJcIil8fGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9udGhZZWFyXCIpfHxlLmNsYXNzTGlzdC5jb250YWlucyhcImVuZG1vbnRoWWVhclwiKXx8ZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzdGFydG1vbnRoWWVhclwiKXx8ZS5oYXNBdHRyaWJ1dGUoXCJjdXN0b20tbW9udGgtcGlja2VyXCIpfHwveWVhclxcL21vbnRofG1vbnRoXFwveWVhci9pLnRlc3QoZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpfHxlLmdldEF0dHJpYnV0ZShcIm5hbWVcIil8fGUuaWR8fFwiXCIpfHxzO2lmKGwpe2xldCBlPUQocik7cmV0dXJuIGU/KDAsYS5kZWZhdWx0KShgJHtlLnllYXJ9LSR7U3RyaW5nKGUubW9udGgpLnBhZFN0YXJ0KDIsXCIwXCIpfS0ke1N0cmluZyhlLmRheSkucGFkU3RhcnQoMixcIjBcIil9YCkuZm9ybWF0KGkpOnJ9aWYoIXUpcmV0dXJuIHI7bGV0IGM9KDAsYS5kZWZhdWx0KShyLFtpLFwiWVlZWS1NTS1ERFwiLFwiWVlZWS1NLURcIixcIllZWVkvTS9EXCIsXCJZWVlZL01NL0REXCIsXCJZWVlZLU1NXCIsXCJZWVlZLU1cIixcIllZWVkvTU1cIixcIllZWVkvTVwiLFwiTS9ZWVlZXCIsXCJNTS9ZWVlZXCIsXCJNLVlZWVlcIixcIk1NLVlZWVlcIixcIk0uWVlZWVwiLFwiTU0uWVlZWVwiLFwiTU1NLVlZWVlcIixcIk1NTU0tWVlZWVwiLFwiTU1NIFlZWVlcIixcIk1NTU0gWVlZWVwiLFwiTU1NL1lZWVlcIixcIk1NTU0vWVlZWVwiXS5maWx0ZXIoQm9vbGVhbiksITApO3JldHVybiBjLmlzVmFsaWQoKT9pP2MuZm9ybWF0KGkpOi9bQS1aYS16XS8udGVzdChyKT9jLmZvcm1hdChcIk1NTS1ZWVlZXCIpOmMuZm9ybWF0KFwiTS9ZWVlZXCIpOnJ9ZnVuY3Rpb24gXyhlKXtsZXQgdD1lLmlkPy5lbmRzV2l0aChcIi1pbnB1dFwiKT9lLmlkLnNsaWNlKDAsLTYpOlwiXCI7cmV0dXJuIHQ/ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodCk6bnVsbH1mdW5jdGlvbiBMKGUpe3JldHVybiB3KGUpfHxlLmxhYmVsfHxlLnZhbHVlfWZ1bmN0aW9uIFIoZSl7bGV0IHQ9TChlKS50cmltKCkudG9Mb3dlckNhc2UoKTtyZXR1cm4hISh0JiZlLnZhbHVlLnRyaW0oKSYmIVtcImNob29zZS4uLlwiLFwic2VsZWN0XCIsXCJzZWxlY3Qgb25lXCIsXCItIHNlbGVjdCAtXCIsXCItLSBzZWxlY3QgLS1cIl0uaW5jbHVkZXModCkpfWZ1bmN0aW9uIE8oZSl7cmV0dXJuIGUucmVwbGFjZSgvXlxcZCsoPzpcXC5cXGQrKT9cXC4/XFxzKy8sXCJcIikudHJpbSgpfWZ1bmN0aW9uIE0oZSx0KXtyZXR1cm4oMCxvLmlzRXhhY3RDaG9pY2VNYXRjaCkoZSx0KXx8KDAsby5pc0V4YWN0Q2hvaWNlTWF0Y2gpKE8oZSksTyh0KSl9ZnVuY3Rpb24gTihlLHQpe2xldCByPXQubWFwKHYpLmZpbHRlcihCb29sZWFuKSxuPXYoTChlKSksbz12KGUudmFsdWUpO3JldHVybiByLnNvbWUoZT0+ISFlJiYoTShuLGUpfHxNKG8sZSkpKX1mdW5jdGlvbiAkKGUsdCl7cmV0dXJuIEFycmF5LmZyb20oZS5vcHRpb25zKS5maW5kKGU9Pk4oZSx0KSl8fG51bGx9ZnVuY3Rpb24gQihlLHQpe2xldCByPXYodCk7cmV0dXJuIHImJkFycmF5LmZyb20oZS5vcHRpb25zKS5maW5kKGU9PnYoTChlKSk9PT1yKXx8bnVsbH1mdW5jdGlvbiBxKGUpe2xldCB0PUFycmF5LmZyb20oZS5vcHRpb25zKS5maWx0ZXIoUikubWFwKGU9PnYoTChlKSkpO3JldHVybiAyPT09dC5sZW5ndGgmJnQuaW5jbHVkZXMoXCJ5ZXNcIikmJnQuaW5jbHVkZXMoXCJub1wiKX1mdW5jdGlvbiBVKGUpe2lmKGUuaWQpe2xldCB0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUuaWQpO2lmKHQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudClyZXR1cm4gdH1pZihlLm5hbWUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKXtsZXQgdD1BcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGUubmFtZSkpLmZpbmQoZT0+ZSBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KTtpZih0KXJldHVybiB0fXJldHVybiBlfWZ1bmN0aW9uIEgoZSl7bGV0IHQ9VShlKSxyPUFycmF5LmZyb20odC5vcHRpb25zKS5maW5kKGU9PmUuc2VsZWN0ZWQpO3JldHVybntpZDp0LmlkLG5hbWU6dC5uYW1lLHZhbHVlOnQudmFsdWUsaXNDb25uZWN0ZWQ6dC5pc0Nvbm5lY3RlZCxzZWxlY3RlZFRleHQ6cj9MKHIpOlwiXCIsYnV0dG9uVGV4dDp0LmlkP3coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dC5pZH0tYnV0dG9uX3RleHRgKSk6XCJcIn19ZnVuY3Rpb24gWShlLHQpe2NvbnNvbGUuaW5mbyhgW0JyYXNzUmluZ0F1dG9maWxsXSAke2V9ICR7SlNPTi5zdHJpbmdpZnkodCl9YCl9YXN5bmMgZnVuY3Rpb24geihlLHQscj0xNTAwKXtsZXQgbj0kKGUsdCk7aWYobilyZXR1cm4gbjt0cnl7YXdhaXQgKDAsZi53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+e2xldCByPSQoZSx0KTtyZXR1cm4hIShyJiYhZS5kaXNhYmxlZCl9LHt0aW1lb3V0OnIsaW50ZXJ2YWw6MTAwLG9ic2VydmVUYXJnZXQ6ZG9jdW1lbnQuYm9keX0pfWNhdGNoe3JldHVybiBudWxsfXJldHVybiAkKGUsdCl9ZnVuY3Rpb24gVihlKXtsZXQgdD1BcnJheS5mcm9tKGUub3B0aW9ucykuZmlsdGVyKFIpO3JldHVybiAxPT09dC5sZW5ndGg/dFswXTpudWxsfWZ1bmN0aW9uIFcoZSl7cmV0dXJuL15jb3VudHJ5KD86XFwvcmVnaW9uKT8kL2kudGVzdChlLmxhYmVsLnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpKX1mdW5jdGlvbiBHKGUpe2xldCB0PWUucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCkudG9Mb3dlckNhc2UoKTtyZXR1cm5cInN0YXRlXCI9PT10fHxcInByb3ZpbmNlXCI9PT10fHxcInN0YXRlL3Byb3ZpbmNlXCI9PT10fHxcInN0YXRlIHByb3ZpbmNlXCI9PT10fHxcInN0YXRlL3JlZ2lvbi9wcm92aW5jZVwiPT09dHx8XCJzdGF0ZSByZWdpb24gcHJvdmluY2VcIj09PXR8fFwic3RhdGUvcmVnaW9uL3Byb3ZpbmNlL2NvdW50eVwiPT09dHx8XCJzdGF0ZSByZWdpb24gcHJvdmluY2UgY291bnR5XCI9PT10fHxcImN1cnJlbnQgc3RhdGVcIj09PXR8fFwiY3VycmVudCBwcm92aW5jZVwiPT09dHx8XCJjdXJyZW50IHN0YXRlL3Byb3ZpbmNlXCI9PT10fHxcImN1cnJlbnQgc3RhdGUgcHJvdmluY2VcIj09PXR9ZnVuY3Rpb24gSyhlLHQpe3JldHVybiBlLnJlcXVpcmVkJiZXKGUpJiYhIVYodCl9ZnVuY3Rpb24gWCgpe3JldHVybiB3aW5kb3cualF1ZXJ5fHx3aW5kb3cuJH1mdW5jdGlvbiBKKGUpe3JldHVybiB3KGUucXVlcnlTZWxlY3RvcihcImxhYmVsLkxpc3RWaWV3LCBsYWJlbFtpZCQ9Jy1sYWJlbCddLCBsYWJlbFwiKSl9ZnVuY3Rpb24gUSgpe3JldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaCkpLmZpbHRlcihlPT5lbChlKSkuZmlsdGVyKGU9PkcoSihlKSkpfWZ1bmN0aW9uIFooZSl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwiaW5wdXQudWktc2VhcmNoLXdpZGdldCwgaW5wdXQudWktYXV0b2NvbXBsZXRlLWlucHV0LCBpbnB1dFtuYW1lXj0ndmlzaWJsZS1pbnB1dC0nXVwiKTtyZXR1cm4gdHx8ZS5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpfWZ1bmN0aW9uIGVlKGUpe3JldHVybiBlLnJlcGxhY2UoL152aXNpYmxlLWlucHV0LS9pLFwiXCIpLnJlcGxhY2UoLyhefFtfLV0pKGN1cnJlbnR8Y291bnRyeXxyZWdpb258c3RhdGV8cHJvdmluY2UpKD89KFtfLV18JCkpL2dpLFwiJDFcIikucmVwbGFjZSgvW18tXXsyLH0vZyxcIl9cIikucmVwbGFjZSgvXltfLV0rfFtfLV0rJC9nLFwiXCIpLnRvTG93ZXJDYXNlKCl9ZnVuY3Rpb24gZXQoZSl7bGV0IHQ9WihlKSxyPXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50P18odCk6dCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50P3Q6bnVsbCxuPVt0Py5pZCx0Py5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpfHxcIlwiLHI/LmlkfHxcIlwiLHI/LmdldEF0dHJpYnV0ZShcIm5hbWVcIil8fFwiXCJdLmZpbHRlcihCb29sZWFuKTtyZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KG4ubWFwKGVlKS5maWx0ZXIoZT0+ZS5sZW5ndGg+MCkpKX1mdW5jdGlvbiBlcihlKXtsZXQgdD1RKCk7aWYoMD09PXQubGVuZ3RoKXJldHVybiBudWxsO2xldCByPWV0KGUpO2lmKHIubGVuZ3RoPjApe2xldCBlPXQuZmluZChlPT57bGV0IHQ9ZXQoZSk7cmV0dXJuIHQuc29tZShlPT5yLmluY2x1ZGVzKGUpKX0pO2lmKGUpcmV0dXJuIGV9bGV0IG49QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGgpKS5maWx0ZXIoZT0+ZWwoZSkpLG89bi5pbmRleE9mKGUpO2lmKG8+PTApe2xldCBlPW4uc2xpY2UobysxKS5maW5kKGU9PkcoSihlKSkpO2lmKGUpcmV0dXJuIGV9cmV0dXJuIHRbMF18fG51bGx9ZnVuY3Rpb24gZW4oZSl7bGV0IHQ9ZS4kaW5wdXQ7cmV0dXJuIHQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudD90LmNsb3Nlc3QoaCk6bnVsbH1hc3luYyBmdW5jdGlvbiBlbyhlKXtpZighVyhlKSlyZXR1cm47bGV0IHQ9ZW4oZSk7dHJ5e2F3YWl0ICgwLGYud2FpdEZvckNvbmRpdGlvbikoKCk9PntsZXQgZT10P2VyKHQpOlEoKVswXXx8bnVsbDtpZighZSlyZXR1cm4hMDtsZXQgcj1aKGUpO2lmKCFyfHxyLmRpc2FibGVkKXJldHVybiExO2lmKHIgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudClyZXR1cm4gZ2V0U2VsZWN0T3B0aW9ucyhyKS5sZW5ndGg+MDtsZXQgbj1fKHIpO3JldHVybiBuPyFuLmRpc2FibGVkJiZnZXRTZWxlY3RPcHRpb25zKG4pLmxlbmd0aD4wOiFyLmRpc2FibGVkfSx7dGltZW91dDoyZTMsaW50ZXJ2YWw6MTAwLG9ic2VydmVUYXJnZXQ6ZG9jdW1lbnQuYm9keX0pfWNhdGNoe31hd2FpdCAoMCxwLmRlbGF5KSgyMDApfWZ1bmN0aW9uIGVpKGUpeygwLGQudHJpZ2dlckV2ZW50cykoZSxbXCJpbnB1dFwiLFwiY2hhbmdlXCJdKX1mdW5jdGlvbiBlYShlKXtlLnNjcm9sbEludG9WaWV3KHtibG9jazpcImNlbnRlclwiLGlubGluZTpcIm5lYXJlc3RcIn0pLCgwLGQudHJpZ2dlckV2ZW50cykoZSxbXCJtb3VzZWRvd25cIixcIm1vdXNldXBcIixcImNsaWNrXCJdKX1mdW5jdGlvbiBlbChlKXtpZighKGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpcmV0dXJuITE7bGV0IHQ9ZTtmb3IoO3QmJnQhPT1kb2N1bWVudC5ib2R5Oyl7bGV0IGU9d2luZG93LmdldENvbXB1dGVkU3R5bGUodCk7aWYoXCJub25lXCI9PT1lLmRpc3BsYXl8fFwiaGlkZGVuXCI9PT1lLnZpc2liaWxpdHl8fFwidHJ1ZVwiPT09dC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKSlyZXR1cm4hMTt0PXQucGFyZW50RWxlbWVudH1yZXR1cm4hMH1mdW5jdGlvbiBlcyhlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLW93bnNcIil8fGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKXx8KGUuaWQ/YCR7ZS5pZH1fbGlzdGJveGA6XCJcIil9ZnVuY3Rpb24gZXUoZSl7bGV0IHQ9ZXMoZSk7aWYodCl7bGV0IGU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodCk7aWYoZSlyZXR1cm4gZX1yZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51aS1hdXRvY29tcGxldGUudWktZnJvbnQsIHVsLnVpLWF1dG9jb21wbGV0ZSwgW3JvbGU9J2xpc3Rib3gnXVwiKX1mdW5jdGlvbiBlYyhlKXtsZXQgdD1ldShlKTtpZighdClyZXR1cm5bXTtsZXQgcj1BcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbChcImxpLnVpLW1lbnUtaXRlbSwgLnVpLW1lbnUtaXRlbS13cmFwcGVyLCBbcm9sZT0nb3B0aW9uJ10sIGxpXCIpKSxuPW5ldyBTZXQsbz1bXTtmb3IobGV0IGUgb2Ygcil7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwiLnVpLW1lbnUtaXRlbS13cmFwcGVyXCIpfHxlLHI9dyh0KTshcnx8bi5oYXModCl8fChuLmFkZCh0KSxvLnB1c2godCkpfXJldHVybiBvfWZ1bmN0aW9uIGVkKGUpe3JldHVybiBlLmNsb3Nlc3QoaCk/LnF1ZXJ5U2VsZWN0b3IoXCIudWktaWNvbi10cmlhbmdsZS0xLXMsIFtuZy1jbGljayo9J2JsYW5rZXRTZWFyY2gnXVwiKXx8bnVsbH1hc3luYyBmdW5jdGlvbiBlZihlLHQscj1bXSl7bGV0IG49ci5tYXAodikuZmlsdGVyKEJvb2xlYW4pO3RyeXtyZXR1cm4gYXdhaXQgKDAsZi53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+e2xldCB0PWVjKGUpO3JldHVybiAwIT09dC5sZW5ndGgmJigwPT09bi5sZW5ndGh8fHQuc29tZShlPT57bGV0IHQ9dih3KGUpKTtyZXR1cm4gbi5zb21lKGU9Pk0odCxlKXx8KDAsby5pc0V4YWN0Q2hvaWNlTWF0Y2gpKHQsZSl8fCgwLG8uaXNFeGFjdENob2ljZU1hdGNoKShlLHQpKX0pKX0se3RpbWVvdXQ6dCxpbnRlcnZhbDoxMDAsb2JzZXJ2ZVRhcmdldDpkb2N1bWVudC5ib2R5fSksITB9Y2F0Y2h7cmV0dXJuITF9fWFzeW5jIGZ1bmN0aW9uIGVwKGUsdCl7dHJ5e3JldHVybiBhd2FpdCAoMCxmLndhaXRGb3JDb25kaXRpb24pKCgpPT57bGV0IHQ9ZXUoZSk7cmV0dXJuISEodCYmZWwodCkpfSx7dGltZW91dDp0LGludGVydmFsOjEwMCxvYnNlcnZlVGFyZ2V0OmRvY3VtZW50LmJvZHl9KSwhMH1jYXRjaHtyZXR1cm4hMX19ZnVuY3Rpb24gZW0oZSx0KXtlLmZvY3VzKCksaihlLFwiXCIpLGVpKGUpLGooZSx0KSxlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMCxjb21wb3NlZDohMH0pKSxlLmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXlkb3duXCIse2tleTp0LnNsaWNlKC0xKXx8XCJBcnJvd0Rvd25cIixidWJibGVzOiEwfSkpLGUuZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudChcImtleXVwXCIse2tleTp0LnNsaWNlKC0xKXx8XCJBcnJvd0Rvd25cIixidWJibGVzOiEwfSkpLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMCxjb21wb3NlZDohMH0pKX1hc3luYyBmdW5jdGlvbiBlaChlLHQpe2UuZm9jdXMoKSxlLmRpc3BhdGNoRXZlbnQobmV3IEZvY3VzRXZlbnQoXCJmb2N1c2luXCIse2J1YmJsZXM6ITB9KSksYXdhaXQgKDAscC5kZWxheSkoNTApLGVtKGUsdCksYXdhaXQgKDAscC5kZWxheSkoNTApO2xldCByPXdpbmRvdy5qUXVlcnl8fHdpbmRvdy4kLG49XyhlKTt0cnl7cj8uZm4/LmF1dG9jb21wbGV0ZSYmcihlKS5hdXRvY29tcGxldGUoXCJzZWFyY2hcIix0KX1jYXRjaHt9aWYobiYmYXdhaXQgeihuLFt0XSwxMjAwKSxhd2FpdCBlcChlLDEyMDApLGF3YWl0IGVmKGUsMjUwMCxbdF0pKXJldHVybiEwO2xldCBvPWVkKGUpO2lmKCFvKXJldHVybiExO2VhKG8pLGF3YWl0ICgwLHAuZGVsYXkpKDE1MCksZS5mb2N1cygpLGVtKGUsdCksYXdhaXQgKDAscC5kZWxheSkoNTApO3RyeXtyPy5mbj8uYXV0b2NvbXBsZXRlJiZyKGUpLmF1dG9jb21wbGV0ZShcInNlYXJjaFwiLHQpfWNhdGNoe31pZihuJiZhd2FpdCB6KG4sW3RdLDEyMDApLGF3YWl0IGVwKGUsMTIwMCksYXdhaXQgZWYoZSwxNTAwLFt0XSkpcmV0dXJuITA7dHJ5e3I/LmZuPy5hdXRvY29tcGxldGUmJnIoZSkuYXV0b2NvbXBsZXRlKFwic2VhcmNoXCIsXCJcIil9Y2F0Y2h7fXJldHVybiBhd2FpdCBlcChlLDEyMDApLGF3YWl0IGVmKGUsMTUwMCxbdF0pfWFzeW5jIGZ1bmN0aW9uIGVnKGUsdCxyPXt9KXtsZXR7YWxsb3dGaXJzdEZhbGxiYWNrOm49ITAsYWxsb3dTdWJzdHJpbmdNYXRjaDppPSEwfT1yO2ZvcihsZXQgciBvZiB0KXtsZXQgdD1hd2FpdCBlaChlLHIpO2lmKCF0KWNvbnRpbnVlO2xldCBhPWVjKGUpO2lmKDA9PT1hLmxlbmd0aCljb250aW51ZTtsZXQgbD12KHIpLHM9YS5maW5kKGU9PnYodyhlKSk9PT1sKXx8KGk/YS5maW5kKGU9PntsZXQgdD12KHcoZSkpO3JldHVybigwLG8uaXNFeGFjdENob2ljZU1hdGNoKSh0LGwpfSk6bnVsbCl8fChuP2FbMF06bnVsbCk7aWYoIXMpe2ViKGUpO2NvbnRpbnVlfXJldHVybiBlYShzKSxhd2FpdCAoMCxwLmRlbGF5KSgyNTApLCEwfXJldHVybiBlLmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXlkb3duXCIse2tleTpcIkVzY2FwZVwiLGJ1YmJsZXM6ITB9KSksZS5ibHVyKCksITF9ZnVuY3Rpb24gZWIoZSl7bGV0IHQ9WCgpO3RyeXt0Py5mbj8uYXV0b2NvbXBsZXRlJiZ0KGUpLmF1dG9jb21wbGV0ZShcImNsb3NlXCIpfWNhdGNoe31lLmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXlkb3duXCIse2tleTpcIkVzY2FwZVwiLGJ1YmJsZXM6ITB9KSksZS5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5dXBcIix7a2V5OlwiRXNjYXBlXCIsYnViYmxlczohMH0pKSxlLmJsdXIoKX1mdW5jdGlvbiBleShlKXtyZXR1cm4gZS5pZD9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtlLmlkfS1idXR0b25gKTpudWxsfWZ1bmN0aW9uIGV2KGUpe2xldCB0PWV5KGUpLHI9dD8uZ2V0QXR0cmlidXRlKFwiYXJpYS1vd25zXCIpfHx0Py5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpfHwoZS5pZD9gJHtlLmlkfS1tZW51YDpcIlwiKTtyZXR1cm4gcj9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChyKTpudWxsfWZ1bmN0aW9uIGV3KGUpe2xldCB0PWV2KGUpO2lmKCF0KXJldHVybltdO2xldCByPUFycmF5LmZyb20odC5xdWVyeVNlbGVjdG9yQWxsKFwibGkudWktbWVudS1pdGVtLCAudWktbWVudS1pdGVtLXdyYXBwZXIsIFtyb2xlPSdvcHRpb24nXSwgbGlcIikpLG49bmV3IFNldCxvPVtdO2ZvcihsZXQgZSBvZiByKXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoXCIudWktbWVudS1pdGVtLXdyYXBwZXJcIil8fGUscj13KHQpOyFyfHxuLmhhcyh0KXx8KG4uYWRkKHQpLG8ucHVzaCh0KSl9cmV0dXJuIG99ZnVuY3Rpb24gZVMoZSx0LHIpe2xldCBuPXQudmFsdWUsbz10LmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fFwiXCIsaT1bTCh0KSxuLG8sLi4ucl0ubWFwKHYpLmZpbHRlcihCb29sZWFuKSxhPXYodyhlKSk7cmV0dXJuIGkuc29tZShlPT5hPT09ZSl9ZnVuY3Rpb24gZUUoZSl7bGV0IHQ9WCgpO3RyeXt0Py5mbj8uc2VsZWN0bWVudSYmdChlKS5zZWxlY3RtZW51KFwicmVmcmVzaFwiKX1jYXRjaHt9fWZ1bmN0aW9uIGV4KGUsdCl7ZS5mb2N1cygpLHQuc2VsZWN0ZWQ9ITAsZS52YWx1ZT10LnZhbHVlLGVpKGUpO2xldCByPVgoKTt0cnl7cj8uKGUpLnRyaWdnZXI/LihcImNoYW5nZVwiKX1jYXRjaHt9ZUUoZSksZS5ibHVyKCl9ZnVuY3Rpb24gZUMoZSl7bGV0IHQ9ZXkoZSkscj1YKCk7dHJ5e3I/LmZuPy5zZWxlY3RtZW51JiZyKGUpLnNlbGVjdG1lbnUoXCJjbG9zZVwiKX1jYXRjaHt9dD8uZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudChcImtleWRvd25cIix7a2V5OlwiRXNjYXBlXCIsYnViYmxlczohMH0pKSx0Py5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5dXBcIix7a2V5OlwiRXNjYXBlXCIsYnViYmxlczohMH0pKSx0Py5ibHVyKCl9YXN5bmMgZnVuY3Rpb24gZUEoZSx0LHIpe2xldCBuPWV5KGUpO2lmKCFuKXJldHVybiExO2xldCBvPXEoZSkmJnIuc29tZShlPT4vXih5ZXN8bm8pJC9pLnRlc3QoZSkpO2VhKG4pLGF3YWl0ICgwLGYud2FpdEZvckNvbmRpdGlvbikoKCk9PmV3KGUpLmxlbmd0aD4wLHt0aW1lb3V0OjE1MDAsaW50ZXJ2YWw6MTAwLG9ic2VydmVUYXJnZXQ6ZG9jdW1lbnQuYm9keX0pO2xldCBpPWV3KGUpLmZpbmQoZT0+ZVMoZSx0LHIpKTtyZXR1cm4gaT8oZWEoaSksYXdhaXQgKDAscC5kZWxheSkoMjUwKSxvJiZZKFwiYmluYXJ5LXNlbGVjdC1tZW51LWNsaWNrLXJlYWRiYWNrXCIse3NlbGVjdDpIKGUpLG1hdGNoOnt2YWx1ZTp0LnZhbHVlLHRleHQ6TCh0KX0sdGFyZ2V0Q29ubmVjdGVkOmkuaXNDb25uZWN0ZWR9KSxlLnZhbHVlIT09dC52YWx1ZT9leChlLHQpOmVFKGUpLGVDKGUpLG8mJlkoXCJiaW5hcnktc2VsZWN0LW5hdGl2ZS1yZWFkYmFja1wiLHtzZWxlY3Q6SChlKSxtYXRjaDp7dmFsdWU6dC52YWx1ZSx0ZXh0OkwodCl9fSksITApOihvJiZZKFwiYmluYXJ5LXNlbGVjdC1tZW51LXRhcmdldC1taXNzaW5nXCIse3NlbGVjdDpIKGUpLG1hdGNoOnt2YWx1ZTp0LnZhbHVlLHRleHQ6TCh0KX0sbWVudU9wdGlvbnM6ZXcoZSkubWFwKHcpfSksZUMoZSksITEpfWFzeW5jIGZ1bmN0aW9uIGVrKGUsdCl7bGV0IHI9JChlLHQpO2lmKCFyKXJldHVybiExO2xldCBuPWF3YWl0IGVBKGUscix0KTtyZXR1cm4hIW58fChleChlLHIpLGF3YWl0ICgwLHAuZGVsYXkpKDE1MCksITApfWZ1bmN0aW9uIGVUKGUpe3JldHVybiBlLiRpbnB1dCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50P2UuJGlucHV0OmUuJGlucHV0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudD9fKGUuJGlucHV0KTpudWxsfWZ1bmN0aW9uIGVGKGUpe2xldCB0PXYoU3RyaW5nKGUubGFiZWx8fFwiXCIpKTtpZighdHx8XCJmdW5jdGlvblwiIT10eXBlb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbClyZXR1cm4gbnVsbDtsZXQgcj1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaCkpLmZpbHRlcihlPT52KEooZSkpPT09dCkuZmxhdE1hcChlPT5BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdFwiKSkuZmlsdGVyKGU9PiFlLmRpc2FibGVkKSk7cmV0dXJuIDE9PT1yLmxlbmd0aD9yWzBdOm51bGx9ZnVuY3Rpb24gZUkoZSl7bGV0IHQ9ZUYoZSk7aWYodClyZXR1cm4gdDtsZXQgcj1lVChlKTtyZXR1cm4gcj9VKHIpOm51bGx9ZnVuY3Rpb24gZWooZSx0KXtyZXR1cm4hIUFycmF5LmlzQXJyYXkoZS5vcHRpb25zKSYmZS5vcHRpb25zLnNvbWUoZT0+dC5zb21lKHQ9Pk0oU3RyaW5nKGV8fFwiXCIpLHQpKSl9ZnVuY3Rpb24gZUQoZSl7cmV0dXJuIGUuc29tZShlPT4vXih5ZXN8bm8pJC9pLnRlc3QoZS50cmltKCkpKX1mdW5jdGlvbiBlUChlKXtpZighQXJyYXkuaXNBcnJheShlLm9wdGlvbnMpKXJldHVybiExO2xldCB0PWUub3B0aW9ucy5tYXAoZT0+dihTdHJpbmcoZXx8XCJcIikpKS5maWx0ZXIoQm9vbGVhbik7cmV0dXJuIDI9PT10Lmxlbmd0aCYmdC5pbmNsdWRlcyhcInllc1wiKSYmdC5pbmNsdWRlcyhcIm5vXCIpfWFzeW5jIGZ1bmN0aW9uIGVfKGUsdCxyPTE1MDApe2xldCBuPWVJKGUpLG89ZUQodCl8fGVQKGUpO2lmKG8pe2xldCByPWUuJGlucHV0O1koXCJiaW5hcnktc2VsZWN0LWxpdmUtcmVzb2x2ZVwiLHtsYWJlbDplLmxhYmVsLGNhbmRpZGF0ZXM6dCxleHRyYWN0ZWRPcHRpb25zOkFycmF5LmlzQXJyYXkoZS5vcHRpb25zKT9lLm9wdGlvbnM6W10scnVsZUlucHV0OnIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudD97dGFnTmFtZTpyLnRhZ05hbWUsaWQ6ci5pZCxuYW1lOnIuZ2V0QXR0cmlidXRlKFwibmFtZVwiKXx8XCJcIixpc0Nvbm5lY3RlZDpyLmlzQ29ubmVjdGVkfTpudWxsLHJlc29sdmVkOm4/SChuKTpudWxsfSl9cmV0dXJuIG4mJiQobix0KXx8IWVqKGUsdCkmJiFlRCh0KXx8YXdhaXQgKDAsZi53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+e2xldCByPWVJKGUpO3JldHVybiEhciYmKG49ciwhISghci5kaXNhYmxlZCYmJChyLHQpKSl9LHt0aW1lb3V0OnIsaW50ZXJ2YWw6NTAsb2JzZXJ2ZVRhcmdldDpkb2N1bWVudC5ib2R5fSksbn1mdW5jdGlvbiBlTChlLHQscil7bGV0IG49JCh0LHIpO3JldHVybiEhbiYmKGV4KHQsbiksaihlLEwobikpLGVpKGUpLCEwKX1mdW5jdGlvbiBlUihlLHQscil7bGV0IG49dihlLnZhbHVlKSxpPXYoTCh0KSksYT1bTCh0KSx0LnZhbHVlLC4uLnJdLm1hcCh2KS5maWx0ZXIoQm9vbGVhbik7cmV0dXJuISFuJiZhLnNvbWUoZT0+TShuLGUpfHxNKGUsbil8fCgwLG8uaXNFeGFjdENob2ljZU1hdGNoKShuLGUpfHwoMCxvLmlzRXhhY3RDaG9pY2VNYXRjaCkoZSxuKXx8bj09PWkpfWZ1bmN0aW9uIGVPKGUsdCxyKXtsZXQgbj0kKHQscik7cmV0dXJuIG4mJnQudmFsdWU9PT1uLnZhbHVlJiZlUihlLG4scik/bjpudWxsfWZ1bmN0aW9uIGVNKGUsdCxyKXtyZXR1cm4hIWVPKGUsdCxyKX1hc3luYyBmdW5jdGlvbiBlTihlLHQscixuPTgwMCl7bGV0IG89ZU8oZSx0LHIpO2lmKG8pcmV0dXJuIG87dHJ5e2F3YWl0ICgwLGYud2FpdEZvckNvbmRpdGlvbikoKCk9PiEhZU8oZSx0LHIpLHt0aW1lb3V0Om4saW50ZXJ2YWw6NTAsb2JzZXJ2ZVRhcmdldDpkb2N1bWVudC5ib2R5fSl9Y2F0Y2h7cmV0dXJuIG51bGx9cmV0dXJuIGVPKGUsdCxyKX1mdW5jdGlvbiBlJChlLHQpe2ooZSx0KSxlaShlKSxlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITAsY29tcG9zZWQ6ITB9KSl9YXN5bmMgZnVuY3Rpb24gZUIoZSx0LHIsbj0yZTMpe2xldCBvPWF3YWl0IHoodCxyLG4pO3JldHVybiEhbyYmKGV4KHQsbyksZS5mb2N1cygpLGUkKGUsTChvKSksZS5ibHVyKCksITApfWFzeW5jIGZ1bmN0aW9uIGVxKGUsdCl7bGV0IHI9UChlLHQpO2UuZm9jdXMoKSxlLmRpc3BhdGNoRXZlbnQobmV3IEZvY3VzRXZlbnQoXCJmb2N1c2luXCIse2J1YmJsZXM6ITB9KSksYXdhaXQgKDAscC5kZWxheSkoNTApLGooZSxcIlwiKSxlaShlKSxhd2FpdCAoMCxwLmRlbGF5KSg1MCksaihlLHIpLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwLGNvbXBvc2VkOiEwfSkpLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMCxjb21wb3NlZDohMH0pKSxhd2FpdCAoMCxwLmRlbGF5KSgxMDApLGUuZGlzcGF0Y2hFdmVudChuZXcgRm9jdXNFdmVudChcImZvY3Vzb3V0XCIse2J1YmJsZXM6ITB9KSksZS5ibHVyKCl9YXN5bmMgZnVuY3Rpb24gZVUoZSx0KXtsZXQgcj1JKGUsdCk7aWYoMD09PXIubGVuZ3RoKXJldHVybjtsZXQgbj1lLiRpbnB1dCxvPWF3YWl0IGVfKGUsciksaT0hIShvJiZxKG8pJiYoci5zb21lKGU9Pi9eKHllc3xubykkL2kudGVzdChlKSl8fGVQKGUpKSk7aWYoaSYmbyl7bGV0IHQ9JChvLHIpO1koXCJiaW5hcnktc2VsZWN0LWZpbGwtc3RhcnRcIix7bGFiZWw6ZS5sYWJlbCxjYW5kaWRhdGVzOnIsbWF0Y2g6dD97dmFsdWU6dC52YWx1ZSx0ZXh0OkwodCl9Om51bGwsc2VsZWN0Okgobyl9KX1pZihuIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCl7bGV0IHQ9YXdhaXQgZWcobixyLHthbGxvd0ZpcnN0RmFsbGJhY2s6ITF9KTtpZih0KXtpZihvKXtsZXQgdD1hd2FpdCBlTihuLG8scik7aWYoIXQmJmVMKG4sbyxyKSYmKHQ9YXdhaXQgZU4obixvLHIpKSwhdCl7bGV0IGU9YXdhaXQgZWsobyxyKTtpZihlKXtsZXQgZT0kKG8scik7ZSYmKGoobixMKGUpKSxlaShuKSx0PWF3YWl0IGVOKG4sbyxyKSl9fWlmKCF0KXRocm93IG5ldyBzLkZpbGxFcnJvcihgKFNlbGVjdCkgT3B0aW9uIGNsaWNrIGRpZCBub3QgY29tbWl0IGZvciBcIiR7ZS5sYWJlbH1cImApfWViKG4pLGF3YWl0IGVvKGUpO3JldHVybn1pZihvKXtsZXQgdD1hd2FpdCBlayhvLHIpO2lmKHQpe2xldCB0PSQobyxyKTt0JiYoaihuLEwodCkpLGVpKG4pKSxlYihuKSxhd2FpdCBlbyhlKTtyZXR1cm59fX1pZihvKXtsZXQgdD1hd2FpdCBlayhvLHIpO2lmKHQpe2kmJlkoXCJiaW5hcnktc2VsZWN0LWZpbGwtcmVhZGJhY2tcIix7bGFiZWw6ZS5sYWJlbCxjYW5kaWRhdGVzOnIsc2VsZWN0Okgobyl9KSxhd2FpdCBlbyhlKTtyZXR1cm59fWlmKGkmJm8mJlkoXCJiaW5hcnktc2VsZWN0LWZpbGwtbm8tbWF0Y2hcIix7bGFiZWw6ZS5sYWJlbCxjYW5kaWRhdGVzOnIsc2VsZWN0Okgobyl9KSxvJiZLKGUsbykpe2xldCB0PVYobyk7aWYodCl7ZXgobyx0KSxuIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCYmKGoobixyWzBdfHxMKHQpKSxlaShuKSksYXdhaXQgZW8oZSk7cmV0dXJufX10aHJvdyBuZXcgcy5GaWxsRXJyb3IoYChTZWxlY3QpIE9wdGlvbiBub3QgZm91bmQgZm9yIFwiJHtlLmxhYmVsfVwiYCl9YXN5bmMgZnVuY3Rpb24gZUgoZSx0KXtsZXQgcj1JKGUsdCk7aWYoMD09PXIubGVuZ3RoKXJldHVybjtsZXQgbj1lLiRpbnB1dCxvPV8obiksaT1hd2FpdCBlZyhuLHIse2FsbG93Rmlyc3RGYWxsYmFjazohMX0pO2lmKGkpe2lmKCFvKXRocm93IG5ldyBzLkZpbGxFcnJvcihgKFNlYXJjaCkgTWlzc2luZyBiYWNraW5nIHNlbGVjdCBmb3IgXCIke2UubGFiZWx9XCJgKTtsZXQgdD1hd2FpdCBlTihuLG8scik7aWYoIXQmJmVMKG4sbyxyKSYmKHQ9YXdhaXQgZU4obixvLHIpKSwhdCl7bGV0IGU9YXdhaXQgZUIobixvLHIpO2UmJih0PWF3YWl0IGVOKG4sbyxyKSl9aWYoIXQpdGhyb3cgbmV3IHMuRmlsbEVycm9yKGAoU2VhcmNoKSBPcHRpb24gY2xpY2sgZGlkIG5vdCBjb21taXQgZm9yIFwiJHtlLmxhYmVsfVwiYCk7ZWIobiksYXdhaXQgZW8oZSk7cmV0dXJufWlmKG8pe2xldCB0PWF3YWl0IGVCKG4sbyxyKTtpZih0KXtsZXQgdD1hd2FpdCBlTihuLG8scik7aWYoIXQpdGhyb3cgbmV3IHMuRmlsbEVycm9yKGAoU2VhcmNoKSBTZWxlY3QgZmFsbGJhY2sgZGlkIG5vdCBjb21taXQgZm9yIFwiJHtlLmxhYmVsfVwiYCk7ZWIobiksYXdhaXQgZW8oZSk7cmV0dXJufX10aHJvdyBuZXcgcy5GaWxsRXJyb3IoYChTZWFyY2gpIE9wdGlvbiBub3QgZm91bmQgZm9yIFwiJHtlLmxhYmVsfVwiYCl9ZnVuY3Rpb24gZVkoZSl7cmV0dXJuIEFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdGlvbkxpc3QgbGksIFtpZCQ9J19zZWxlY3Rpb24tbGlzdCddIGxpXCIpKS5tYXAodykuZmlsdGVyKEJvb2xlYW4pfWZ1bmN0aW9uIGV6KGUpe3JldHVybiBlLmNsb3Nlc3QoaCk/LnF1ZXJ5U2VsZWN0b3IoXCJhLmFkZGJ1dHRvbiwgYnV0dG9uLmFkZGJ1dHRvbiwgW25nLWNsaWNrKj0nYWRkQnV0dG9uQ2xpY2tIYW5kbGVyJ11cIil8fG51bGx9YXN5bmMgZnVuY3Rpb24gZVYoZSx0LHIsbixvKXtsZXQgaT1MKHIpO2UuZm9jdXMoKSxqKGUsaSksZWkoZSksci5zZWxlY3RlZD0hMCx0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITB9KSk7bGV0IGE9WCgpO3RyeXthPy4odCkudHJpZ2dlcj8uKFwiY2hhbmdlXCIpfWNhdGNoe31pZighbilyZXR1cm4hMDtpZihlYShuKSwhbylyZXR1cm4gYXdhaXQgKDAscC5kZWxheSkoMTAwKSwhMDt0cnl7YXdhaXQgKDAsZi53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+ZVkobykuc29tZShlPT4oMCx1LmlzTWF0Y2hlZCkoZSxpKSkse3RpbWVvdXQ6NjAwLGludGVydmFsOjUwLG9ic2VydmVUYXJnZXQ6b30pfWNhdGNoe3JldHVybiExfXJldHVybiEwfWFzeW5jIGZ1bmN0aW9uIGVXKGUsdCl7bGV0IHI9Uyh0KS5zbGljZSgwLDIwKTtpZigwPT09ci5sZW5ndGgpcmV0dXJuO2xldCBuPWUuJGlucHV0LG89ZVQoZSk7aWYobiBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KXtsZXQgZT1yLm1hcCh2KSx0PW5ldyBTZXQoZSk7Zm9yKGxldCBlIG9mIEFycmF5LmZyb20obi5vcHRpb25zKSllLnNlbGVjdGVkPXQuaGFzKHYoTChlKSkpO2NvbnNvbGUuaW5mbyhgW0JyYXNzUmluZ0F1dG9maWxsXSBza2lsbHMtbmF0aXZlLXNlbGVjdCAke0pTT04uc3RyaW5naWZ5KHtjYW5kaWRhdGVDb3VudDpyLmxlbmd0aCxzZWxlY3RlZENvdW50OkFycmF5LmZyb20obi5vcHRpb25zKS5maWx0ZXIoZT0+ZS5zZWxlY3RlZCkubGVuZ3RofSl9YCksZWkobiksYXdhaXQgKDAscC5kZWxheSkoMTUwKTtyZXR1cm59aWYoIShuIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpcmV0dXJuO2xldCBpPW4uY2xvc2VzdChoKSxhPWV6KG4pO2ZvcihsZXQgZSBvZiByKXtsZXQgdD0hIWkmJmVZKGkpLnNvbWUodD0+KDAsdS5pc01hdGNoZWQpKHQsZSkpO2lmKHQpY29udGludWU7bGV0IHI9bz9CKG8sZSk6bnVsbDtpZihyKXtsZXQgZT1hd2FpdCBlVihuLG8scixhLGkpO2lmKGUpY29udGludWV9bGV0IGw9YXdhaXQgZWcobixbZV0se2FsbG93Rmlyc3RGYWxsYmFjazohMSxhbGxvd1N1YnN0cmluZ01hdGNoOiExfSk7IWwmJnImJihqKG4sTChyKSksZWkobiksci5zZWxlY3RlZD0hMCxvPy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSkpLGF3YWl0ICgwLHAuZGVsYXkpKDEwMCkpLGx8fHJ8fChqKG4sZSksZWkobikpLGEmJihlYShhKSxhd2FpdCAoMCxwLmRlbGF5KSgzMDApKSxjb25zb2xlLmluZm8oYFtCcmFzc1JpbmdBdXRvZmlsbF0gc2tpbGxzLWNhbmRpZGF0ZS1yZXN1bHQgJHtKU09OLnN0cmluZ2lmeSh7Y2FuZGlkYXRlOmUscmVzdWx0Omx8fHI/XCJleGFjdC1tYXRjaC1hZGRcIjpcInJhdy1hZGRcIixhZGRCdXR0b25Gb3VuZDohIWF9KX1gKX1lYihuKX1mdW5jdGlvbiBlRyhlKXtsZXQgdD1lLmlkP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7ZS5pZH1cIl1gKTpudWxsO3JldHVybiB3KHQpfHx3KGUuY2xvc2VzdChcImxhYmVsXCIpKXx8dyhlLm5leHRFbGVtZW50U2libGluZyl8fGUudmFsdWV9ZnVuY3Rpb24gZUsoZSl7bGV0IHQ9dihlKTtyZXR1cm5bXCJ5ZXNcIixcInRydWVcIixcImNoZWNrZWRcIixcImFncmVlXCIsXCJpIGFncmVlXCJdLnNvbWUoZT0+KDAsby5pc0V4YWN0Q2hvaWNlTWF0Y2gpKHQsZSkpfWZ1bmN0aW9uIGVYKGUpe2xldCB0PXYoZSk7cmV0dXJuW1wibm9cIixcImZhbHNlXCIsXCJ1bmNoZWNrZWRcIixcIm5vdCBjaGVja2VkXCJdLnNvbWUoZT0+KDAsby5pc0V4YWN0Q2hvaWNlTWF0Y2gpKHQsZSkpfWZ1bmN0aW9uIGVKKGUsdCl7cmV0dXJuIGUuZmluZChlPT5bZUcoZSksZS52YWx1ZV0uc29tZShlPT5NKGUsdCkpKX1mdW5jdGlvbiBlUShlLHQpe2xldCByPWVKKGUsXCJZZXNcIiksbj1lSihlLFwiTm9cIik7aWYoIXJ8fCFuKXJldHVybjtsZXQgaT10LnNvbWUoZT0+W1wieWVzXCIsXCJ0cnVlXCIsXCJ5XCIsXCIxXCJdLnNvbWUodD0+KDAsby5pc0V4YWN0Q2hvaWNlTWF0Y2gpKGUsdCkpKSxhPXQuc29tZShlPT5bXCJub1wiLFwiZmFsc2VcIixcIm5cIixcIjBcIl0uc29tZSh0PT4oMCxvLmlzRXhhY3RDaG9pY2VNYXRjaCkoZSx0KSkpO2lmKGkhPT1hKXJldHVybiBpP3I6bn1mdW5jdGlvbiBlWihlKXtsZXQgdD1bZV0scj1lPT57ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50JiYhdC5pbmNsdWRlcyhlKSYmdC5wdXNoKGUpfSxuPWUuaWQ/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtlLmlkfVwiXWApOm51bGwsbz1lLmNsb3Nlc3QoXCJsYWJlbFwiKSxpPWUuY2xvc2VzdChcIi51aS1jaGVja2JveCwgLmNoZWNrYm94LCBsaVwiKSxhPWk/LnF1ZXJ5U2VsZWN0b3IoXCIucHNldWRvY2hlY2tib3gsIFtyb2xlPSdjaGVja2JveCddXCIpfHxlLnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXCIucHNldWRvY2hlY2tib3gsIFtyb2xlPSdjaGVja2JveCddXCIpLGw9ZS5uZXh0RWxlbWVudFNpYmxpbmcscz1lLnByZXZpb3VzRWxlbWVudFNpYmxpbmcsdT1lLmNsb3Nlc3QoXCIuZmllbGRjb250YWluXCIpPy5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIik7cmV0dXJuW24sbyxhLGwscyx1XS5mb3JFYWNoKHIpLHR9ZnVuY3Rpb24gZTAoZSl7bGV0IHQ9W10scj1lPT57ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50JiYhdC5pbmNsdWRlcyhlKSYmdC5wdXNoKGUpfSxuPWUuY2xvc2VzdChcIi51aS1yYWRpb1wiKSxvPW4/LnF1ZXJ5U2VsZWN0b3IoXCIucHNldWRvcmFkaW8sIFtyb2xlPSdyYWRpbyddXCIpfHxlLnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXCIucHNldWRvcmFkaW8sIFtyb2xlPSdyYWRpbyddXCIpLGk9ZS5pZD9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke2UuaWR9XCJdYCk6bnVsbCxhPUFycmF5LmZyb20oZS5sYWJlbHN8fFtdKTtyZXR1cm4gYS5mb3JFYWNoKHIpLHIoaSkscihuPy5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIikpLHIobykscihlLm5leHRFbGVtZW50U2libGluZykscihuKSxyKGUpLHR9YXN5bmMgZnVuY3Rpb24gZTIoZSl7aWYoIWUuY2hlY2tlZCl7Zm9yKGxldCB0IG9mKGUuc2Nyb2xsSW50b1ZpZXcoe2Jsb2NrOlwiY2VudGVyXCIsaW5saW5lOlwibmVhcmVzdFwifSksZS5mb2N1cygpLGUwKGUpKSlpZihlYSh0KSx0LmNsaWNrKCksYXdhaXQgKDAscC5kZWxheSkoMTUwKSxlLmNoZWNrZWQpe2VpKGUpO3JldHVybn19fWFzeW5jIGZ1bmN0aW9uIGUxKGUsdCl7aWYoZS5jaGVja2VkIT09dCl7Zm9yKGxldCByIG9mKGUuc2Nyb2xsSW50b1ZpZXcoe2Jsb2NrOlwiY2VudGVyXCIsaW5saW5lOlwibmVhcmVzdFwifSksZS5mb2N1cygpLGVaKGUpKSlpZihyLmNsaWNrKCksYXdhaXQgKDAscC5kZWxheSkoMTUwKSxlLmNoZWNrZWQ9PT10KXtlaShlKTtyZXR1cm59ZS5jaGVja2VkPXQsZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITAsY29tcG9zZWQ6ITB9KSksZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwLGNvbXBvc2VkOiEwfSkpLGF3YWl0ICgwLHAuZGVsYXkpKDEwMCl9fWFzeW5jIGZ1bmN0aW9uIGUzKGUsdCl7bGV0IHI9Uyh0KTtpZigwPT09ci5sZW5ndGgpcmV0dXJuITE7bGV0IG49QXJyYXkuZnJvbShlLiRyYWRpb1BhcmVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT0ncmFkaW8nXVwiKSk7aWYoMD09PW4ubGVuZ3RoKXJldHVybiExO2xldCBvPW4uZmluZChlPT57bGV0IHQ9ZUcoZSksbj1lLnZhbHVlO3JldHVybiByLnNvbWUoZT0+TSh0LGUpfHxNKG4sZSkpfSk7cmV0dXJuIG98fChvPWVRKG4scikpLCEhbyYmKG8uY2hlY2tlZHx8YXdhaXQgZTIobyksby5jaGVja2VkKX1hc3luYyBmdW5jdGlvbiBlNChlLHQpe2xldCByPVModCk7aWYoMD09PXIubGVuZ3RoKXJldHVybiExO2xldCBuPWUuJGNoZWNrYm94cztpZigwPT09bi5sZW5ndGgpcmV0dXJuITE7aWYoMT09PW4ubGVuZ3RoKXtsZXQgdD1yLnNvbWUodD0+ZUsodCl8fCgwLHUuaXNNYXRjaGVkKShlLmxhYmVsLHQpfHwoMCxvLmlzRXhhY3RDaG9pY2VNYXRjaCkodih0KSx2KGUubGFiZWwpKSksaT1yLnNvbWUoZVgpO3JldHVybighIXR8fCEhaSkmJihhd2FpdCBlMShuWzBdLHQpLG5bMF0uY2hlY2tlZD09PXQpfWxldCBpPSExO2ZvcihsZXQgZSBvZiBuKXtsZXQgdD1lRyhlKSxuPXIuc29tZShlPT5NKHQsZSkpO24mJihpPSEwKSxuJiYhZS5jaGVja2VkJiZhd2FpdCBlMShlLCEwKX1yZXR1cm4gaX1sZXQgZTU9XCJSXFx4ZTlzdW1cXHhlOS9DVlwiLGU2PVwiUmVzdW1lL0NWXCIsZTg9XCJbZGF0YS1yZXN1bWUtcGFyc2VyLXN0YXR1c10sIFtkYXRhLXBhcnNlci1zdGF0dXNdLCAjcmVzdW1ld2lkZ2V0IFtyb2xlPSdzdGF0dXMnXSwgI3Jlc3VtZXdpZGdldCBbYXJpYS1saXZlXSwgW2lkKj0ncmVzdW1lJ11baWQqPSdwYXJzJ10sIFtjbGFzcyo9J3Jlc3VtZSddW2NsYXNzKj0ncGFycyddLCAuSW1wb3J0UHJvZmlsZSBbcm9sZT0nc3RhdHVzJ10sIC5JbXBvcnRQcm9maWxlIFthcmlhLWxpdmVdXCIsZTk9MTJlMyxlNz0xMDAsdGU9ODAwLHR0PTc1MCx0cj1uZXcgU2V0KFtcInRleHRcIixcImVtYWlsXCIsXCJ0ZWxcIixcInNlYXJjaFwiLFwidXJsXCIsXCJudW1iZXJcIixcImRhdGVcIl0pLHRuPW5ldyBXZWFrTWFwLHRvPTA7ZnVuY3Rpb24gdGkoZSl7bGV0IHQ9MjE2NjEzNjI2MTtmb3IobGV0IHI9MDtyPGUubGVuZ3RoO3IrKyl0Xj1lLmNoYXJDb2RlQXQociksdD1NYXRoLmltdWwodCwxNjc3NzYxOSk7cmV0dXJuYCR7ZS5sZW5ndGh9OiR7KHQ+Pj4wKS50b1N0cmluZygxNil9YH1mdW5jdGlvbiB0YShlLHQpe2xldCByPVtlLmlkLGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1yZWNvcmQtaWRcIiksZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpXS5maWx0ZXIoQm9vbGVhbikuam9pbihcInxcIik7aWYocilyZXR1cm5gJHtlLnRhZ05hbWV9OiR7cn1gO2xldCBuPXRuLmdldChlKTtyZXR1cm4gbnx8KG49Kyt0byx0bi5zZXQoZSxuKSksYCR7ZS50YWdOYW1lfTpydW50aW1lLSR7bn06aW5kZXgtJHt0fWB9ZnVuY3Rpb24gdGwoZSl7aWYoIWVsKGUpfHxlLmhpZGRlbilyZXR1cm4hMTtsZXQgdD1lLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtpZihcInRleHRhcmVhXCI9PT10fHxcInNlbGVjdFwiPT09dClyZXR1cm4hMDtpZihcImlucHV0XCIhPT10KXJldHVybiExO2xldCByPShlLnR5cGV8fFwidGV4dFwiKS50b0xvd2VyQ2FzZSgpO3JldHVybiB0ci5oYXMocil9ZnVuY3Rpb24gdHMoKXtsZXQgZT1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiKSkuZmlsdGVyKHRsKSx0PWUubWFwKChlLHQpPT57bGV0IHI9KGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpLGUudmFsdWUpO3JldHVybmAke3RhKGUsdCl9PSR7U3RyaW5nKHI/P1wiXCIpfWB9KTtyZXR1cm57c2lnbmF0dXJlOnRpKHQuam9pbihcIlxcblwiKSksY291bnQ6ZS5sZW5ndGh9fWZ1bmN0aW9uIHR1KCl7bGV0IGU9W1wiZWR1Y2F0aW9uXCIsXCJleHBlcmllbmNlXCJdLmZsYXRNYXAoZT0+cmkoZSkuZmlsdGVyKGU9PiFycyhlKSkubWFwKHQ9Pih7a2luZDplLHJvdzp0fSkpKSx0PWUubWFwKCh7a2luZDplLHJvdzp0fSxyKT0+YCR7ZX06JHt0YSh0LHIpfWApO3JldHVybntzaWduYXR1cmU6dGkodC5qb2luKFwiXFxuXCIpKSxjb3VudDplLmxlbmd0aH19ZnVuY3Rpb24gdGMoKXtsZXQgZT1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZTgpKS5maWx0ZXIoZWwpLHQ9XCJub25lXCIscj1lLm1hcCgoZSxyKT0+e2xldCBuPXRhKGUsciksbz10bShbZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJlc3VtZS1wYXJzZXItc3RhdHVzXCIpLGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1wYXJzZXItc3RhdHVzXCIpLGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSxlLnRleHRDb250ZW50XS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIikpLGk9Lyg/OnN1Y2Nlc3N8Y29tcGxldGV8Y29tcGxldGVkfHJlYWR5fGltcG9ydGVkfHByb2Nlc3NlZCkvaS50ZXN0KG8pP1wic3VjY2Vzc1wiOi8oPzpwYXJzaW5nfHByb2Nlc3Npbmd8ZXh0cmFjdGluZ3xyZWFkaW5nfGltcG9ydGluZ3xidWlsZGluZylbXFxzXFxTXSooPzpyZXN1bWV8Y3Z8cHJvZmlsZSl8KD86cmVzdW1lfGN2fHByb2ZpbGUpW1xcc1xcU10qKD86cGFyc2luZ3xwcm9jZXNzaW5nfGV4dHJhY3Rpbmd8cmVhZGluZ3xpbXBvcnRpbmd8YnVpbGRpbmcpL2kudGVzdChvKT9cImFjdGl2ZVwiOlwibm9uZVwiO3JldHVyblwiYWN0aXZlXCI9PT1pP3Q9XCJhY3RpdmVcIjpcInN1Y2Nlc3NcIj09PWkmJlwibm9uZVwiPT09dCYmKHQ9XCJzdWNjZXNzXCIpLGAke259OiR7aX1gfSk7cmV0dXJue3NpZ25hdHVyZTp0aShyLmpvaW4oXCJcXG5cIikpLGNvdW50OmUubGVuZ3RoLHN0YXR1czp0fX1mdW5jdGlvbiB0ZCgpe2xldCBlPXRzKCksdD10dSgpLHI9dGMoKTtyZXR1cm57c2NhbGFyU2lnbmF0dXJlOmUuc2lnbmF0dXJlLHNjYWxhckNvbnRyb2xDb3VudDplLmNvdW50LHN0cnVjdHVyZWRTaWduYXR1cmU6dC5zaWduYXR1cmUsc3RydWN0dXJlZFJvd0NvdW50OnQuY291bnQscGFyc2VyU3VyZmFjZVNpZ25hdHVyZTpyLnNpZ25hdHVyZSxwYXJzZXJTdXJmYWNlQ291bnQ6ci5jb3VudCxwYXJzZXJTdGF0dXM6ci5zdGF0dXMsY2FwdHVyZWRBdDpEYXRlLm5vdygpfX1mdW5jdGlvbiB0ZihlKXtjb25zb2xlLmluZm8oYFtCcmFzc1JpbmdBdXRvZmlsbF0gcmVzdW1lLXBhcnNlciAke0pTT04uc3RyaW5naWZ5KHtzdGFnZTpcInJlc3VtZS1wYXJzZXItd2FpdC1jb21wbGV0ZVwiLHBhcnNlckRldGVjdGVkOmUucGFyc2VyRGV0ZWN0ZWQscGFyc2VyUmVhZHk6ZS5wYXJzZXJSZWFkeSxlbGFwc2VkTXM6ZS5lbGFwc2VkTXMsc2NhbGFyQ29udHJvbENvdW50OmUuc2NhbGFyQ29udHJvbENvdW50LHN0cnVjdHVyZWRSb3dDb3VudDplLnN0cnVjdHVyZWRSb3dDb3VudCxyZWFzb246ZS5yZWFzb259KX1gKX1hc3luYyBmdW5jdGlvbiB0cChlLHQ9e30pe2xldCByPXQudGltZW91dE1zPz9lOSxuPXQuaW50ZXJ2YWxNcz8/ZTcsbz10LnF1aWV0TXM/P3RlLGk9dC5ub1BhcnNlckdyYWNlTXM/P3R0LGE9RGF0ZS5ub3coKSxsPWUscz1cIm5vbmVcIiE9PWUucGFyc2VyU3RhdHVzLHU9ITEsYz1hO2Zvcig7RGF0ZS5ub3coKS1hPHI7KXtsZXQgdD10ZCgpLHI9RGF0ZS5ub3coKSxkPXQuc2NhbGFyU2lnbmF0dXJlIT09bC5zY2FsYXJTaWduYXR1cmUsZj10LnN0cnVjdHVyZWRTaWduYXR1cmUhPT1sLnN0cnVjdHVyZWRTaWduYXR1cmUsbT10LnBhcnNlclN1cmZhY2VTaWduYXR1cmUhPT1sLnBhcnNlclN1cmZhY2VTaWduYXR1cmV8fHQucGFyc2VyU3RhdHVzIT09bC5wYXJzZXJTdGF0dXMsaD10LnNjYWxhclNpZ25hdHVyZSE9PWUuc2NhbGFyU2lnbmF0dXJlfHx0LnN0cnVjdHVyZWRTaWduYXR1cmUhPT1lLnN0cnVjdHVyZWRTaWduYXR1cmUsZz1cIm5vbmVcIiE9PXQucGFyc2VyU3RhdHVzLGI9ZyYmdC5wYXJzZXJTdXJmYWNlQ291bnQ+MCYmdC5wYXJzZXJTdXJmYWNlU2lnbmF0dXJlIT09ZS5wYXJzZXJTdXJmYWNlU2lnbmF0dXJlLHk9ZyYmKHQucGFyc2VyU3RhdHVzIT09ZS5wYXJzZXJTdGF0dXN8fDA9PT1lLnBhcnNlclN1cmZhY2VDb3VudCYmdC5wYXJzZXJTdXJmYWNlQ291bnQ+MHx8Yik7aWYoZyYmKHM9ITApLChofHxifHx5KSYmKHU9ITAscz0hMCksKGR8fGZ8fG0pJiYoYz1yKSx1JiZcImFjdGl2ZVwiIT09dC5wYXJzZXJTdGF0dXMmJnItYz49byl7bGV0IGU9e3BhcnNlckRldGVjdGVkOiEwLHBhcnNlclJlYWR5OiEwLGVsYXBzZWRNczpyLWEscmVhc29uOlwicGFyc2VyLXF1aWV0XCIsc2NhbGFyQ29udHJvbENvdW50OnQuc2NhbGFyQ29udHJvbENvdW50LHN0cnVjdHVyZWRSb3dDb3VudDp0LnN0cnVjdHVyZWRSb3dDb3VudH07cmV0dXJuIHRmKGUpLGV9aWYoIXMmJiF1JiZyLWE+PWkpe2xldCBlPXtwYXJzZXJEZXRlY3RlZDohMSxwYXJzZXJSZWFkeTohMCxlbGFwc2VkTXM6ci1hLHJlYXNvbjpcIm5vLXBhcnNlci1zdXJmYWNlXCIsc2NhbGFyQ29udHJvbENvdW50OnQuc2NhbGFyQ29udHJvbENvdW50LHN0cnVjdHVyZWRSb3dDb3VudDp0LnN0cnVjdHVyZWRSb3dDb3VudH07cmV0dXJuIHRmKGUpLGV9bD10LGF3YWl0ICgwLHAuZGVsYXkpKE1hdGgubWF4KDEsbikpfWxldCBkPXRkKCksZj17cGFyc2VyRGV0ZWN0ZWQ6cyxwYXJzZXJSZWFkeTohMSxlbGFwc2VkTXM6RGF0ZS5ub3coKS1hLHJlYXNvbjpcInBhcnNlci10aW1lb3V0XCIsc2NhbGFyQ29udHJvbENvdW50OmQuc2NhbGFyQ29udHJvbENvdW50LHN0cnVjdHVyZWRSb3dDb3VudDpkLnN0cnVjdHVyZWRSb3dDb3VudH07cmV0dXJuIHRmKGYpLGZ9ZnVuY3Rpb24gdG0oZSl7cmV0dXJuIGUubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csXCJcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCkudG9Mb3dlckNhc2UoKX1mdW5jdGlvbiB0aChlKXtyZXR1cm4gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPSdmaWxlJ11cIikpfWZ1bmN0aW9uIHRnKCl7bGV0IGU9dGgoZG9jdW1lbnQpO2ZvcihsZXQgdCBvZiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpZnJhbWVcIikpKXRyeXtsZXQgcj10LmNvbnRlbnREb2N1bWVudHx8dC5jb250ZW50V2luZG93Py5kb2N1bWVudDtpZighciljb250aW51ZTtlLnB1c2goLi4udGgocikpfWNhdGNoe31yZXR1cm4gZX1mdW5jdGlvbiB0YihlKXtyZXR1cm5cInJlc3VtZVwiPT09ZT9cInJlc3VtZVwiOlwiY292ZXJsZXR0ZXJcIn1mdW5jdGlvbiB0eShlLHQpe2xldCByPWUuc3JjfHxlLmdldEF0dHJpYnV0ZShcInNyY1wiKXx8XCJcIjtpZighcilyZXR1cm4hMTt0cnl7bGV0IGU9bmV3IFVSTChyLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtyZXR1cm4vXFwvVEdOZXdVSVxcL1Byb2ZpbGVcXC9Ib21lXFwvUHJvZmlsZUJ1aWxkZXIkL2kudGVzdChlLnBhdGhuYW1lKSYmKGUuc2VhcmNoUGFyYW1zLmdldChcImNhbGxlZEZyb21cIil8fFwiXCIpLnRvTG93ZXJDYXNlKCk9PT10Yih0KX1jYXRjaHtyZXR1cm4hMX19ZnVuY3Rpb24gdHYoZSl7cmV0dXJuIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlmcmFtZVwiKSkuZmluZCh0PT5lbCh0KSYmdHkodCxlKSl8fG51bGx9YXN5bmMgZnVuY3Rpb24gdHcoZSl7bGV0IHQ9dHYoZSk7aWYodClyZXR1cm4gdDt0cnl7YXdhaXQgKDAsZi53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+ISF0dihlKSx7dGltZW91dDozZTMsaW50ZXJ2YWw6MTAwLG9ic2VydmVUYXJnZXQ6ZG9jdW1lbnQuYm9keX0pfWNhdGNoe3JldHVybiBudWxsfXJldHVybiB0dihlKX1mdW5jdGlvbiB0UyhlKXtyZXR1cm4gdG0oW2UuaWQsZS5uYW1lLGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSxlLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIikpfWZ1bmN0aW9uIHRFKGUpe3JldHVybiB0bSh3KGUuY2xvc2VzdChcIi5maWVsZGNvbnRhaW4sIC5xdWVzdGlvbiwgLnVwbG9hZCwgZGl2XCIpKSl9ZnVuY3Rpb24gdHgoZSl7cmV0dXJuKGUuaW5jbHVkZXMoXCJyZXN1bWVcIil8fGUuaW5jbHVkZXMoXCJjdlwiKSkmJiFlLmluY2x1ZGVzKFwiY292ZXIgbGV0dGVyXCIpfWZ1bmN0aW9uIHRDKGUpe3JldHVybiBlLmluY2x1ZGVzKFwiY292ZXIgbGV0dGVyXCIpfWZ1bmN0aW9uIHRBKGUpe3JldHVybiB0bShbZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpLHcoZS5xdWVyeVNlbGVjdG9yKFwiaDEsIGgyLCBoMywgaDQsIGg1LCBoNlwiKSldLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKSl9ZnVuY3Rpb24gdGsoZSx0KXtsZXQgcj10QShlKTtyZXR1cm5cInJlc3VtZVwiPT09dD90eChyKTp0QyhyKX1mdW5jdGlvbiB0VCgpe3JldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuSW1wb3J0UHJvZmlsZVtyb2xlPSdtYWluJ10sIC5JbXBvcnRQcm9maWxlLmVuY29tcGFzc2luZ0RpdiwgW3JvbGU9J21haW4nXVthcmlhLWxhYmVsXVwiKSkuZmlsdGVyKGVsKX1mdW5jdGlvbiB0RihlKXtmb3IobGV0IHQgb2YgdFQoKSl7aWYoIXRrKHQsZSkpY29udGludWU7bGV0IHI9QXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPSdmaWxlJ11cIikpLmZpbmQoZT0+IWUuZGlzYWJsZWQpO2lmKHIpcmV0dXJuIHJ9cmV0dXJuIG51bGx9ZnVuY3Rpb24gdEkoZSx0KXtsZXQgcj10UyhlKSxuPXRFKGUpLG89YCR7cn0gJHtufWA7cmV0dXJuXCJyZXN1bWVcIj09PXQ/dHgobyk6dEMobyl9ZnVuY3Rpb24gdGooKXtyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXN1bWV3aWRnZXQucmVzdW1lc2VjdGlvblwiKX1mdW5jdGlvbiB0RCgpe3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsd2lkZ2V0LmNvdmVybGV0dGVyc2VjdGlvblwiKX1mdW5jdGlvbiB0UCgpe3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F0dGFjaG1lbnRXaWRnZXQuYXR0YWNobWVudHNXaWRnZXRcIil9ZnVuY3Rpb24gdF8oKXtyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihnKX1mdW5jdGlvbiB0TCgpe3JldHVybiB0XygpPy5jbG9zZXN0KFwiI2F0dGFjaG1lbnRXaWRnZXRcIil8fHRQKCl9ZnVuY3Rpb24gdFIoKXtsZXQgZT10TCgpO2lmKCFlKXJldHVybiBudWxsO2xldCB0PUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnVpLXdpZGdldFwiKSk7cmV0dXJuIHQuZmluZChlPT57bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwiaDEsIGgyLCBoMywgaDQsIGg1LCBoNlwiKTtyZXR1cm4gdih3KHQpKT09PXYoYil9KXx8bnVsbH1mdW5jdGlvbiB0TyhlKXtyZXR1cm4gQXJyYXkuZnJvbShlLm9wdGlvbnMpLmZpbmQoZT0+TihlLFtiXSkpfHxudWxsfWZ1bmN0aW9uIHRNKCl7bGV0IGU9dF8oKTtyZXR1cm4hIShlJiZ0TyhlKSl9YXN5bmMgZnVuY3Rpb24gdE4oKXtsZXQgZT10XygpO2lmKCFlKXJldHVybiExO2xldCB0PXRPKGUpO2lmKCF0KXJldHVybiExO2lmKGUudmFsdWU9PT10LnZhbHVlKXJldHVybiEwO3RyeXtsZXQgcj1hd2FpdCBlQShlLHQsW2JdKTtpZihyKXJldHVybiEwfWNhdGNoe31yZXR1cm4gZXgoZSx0KSxhd2FpdCAoMCxwLmRlbGF5KSgyNTApLCEwfWZ1bmN0aW9uIHQkKGUpe2lmKFwicmVzdW1lXCI9PT1lKXtsZXQgZT10aigpPy5xdWVyeVNlbGVjdG9yKFwiI0FkZFJlc3VtZUxpbmtcIik7cmV0dXJuIGUmJmVsKGUpP2U6bnVsbH1pZihcImNvdmVyTGV0dGVyXCI9PT1lKXtsZXQgZT10RCgpPy5xdWVyeVNlbGVjdG9yKFwiI0FkZENMTGlua1wiKTtyZXR1cm4gZXx8KHRNKCk/ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJBdHRhY2hlbWVudENhdGFnb3J5LWJ1dHRvblwiKTpudWxsKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiB0QihlKXtyZXR1cm5cInJlc3VtZVwiPT09ZT90aigpOlwiY292ZXJMZXR0ZXJcIj09PWU/dE0oKSYmdEwoKXx8dEQoKTpudWxsfWZ1bmN0aW9uIHRxKGUpe2xldCB0PXRGKGUpO2lmKHQpcmV0dXJuIHQ7bGV0IHI9dEIoZSksbj1BcnJheS5mcm9tKHI/LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPSdmaWxlJ11cIil8fFtdKSxvPW4uZmluZCh0PT50SSh0LGUpKXx8blswXTtpZihvKXJldHVybiBvO2xldCBpPXRnKCksYT1cInJlc3VtZVwiPT09ZSYmMT09PWkubGVuZ3RoJiZpWzBdPy5vd25lckRvY3VtZW50PT09ZG9jdW1lbnQ/aVswXTpudWxsO3JldHVybiBpLmZpbmQodD0+dEkodCxlKSl8fGF9YXN5bmMgZnVuY3Rpb24gdFUoZSl7bGV0IHQ9bmV3IFNldCh0ZygpKTtpZihcImNvdmVyTGV0dGVyXCI9PT1lJiZ0TSgpKXtsZXQgZT1hd2FpdCB0TigpO2lmKGUpdHJ5e2F3YWl0ICgwLGYud2FpdEZvckNvbmRpdGlvbikoKCk9PnRnKCkuc29tZShlPT4hdC5oYXMoZSkpLHt0aW1lb3V0OjI1MDAsaW50ZXJ2YWw6MTAwLG9ic2VydmVUYXJnZXQ6ZG9jdW1lbnQuYm9keX0pO2xldCBlPXRnKCkuZmluZChlPT4hdC5oYXMoZSkpfHxudWxsO2lmKGUpcmV0dXJuIGV9Y2F0Y2h7fX1pZih0dihlKSlyZXR1cm4gbnVsbDtsZXQgcj10JChlKTtpZighcilyZXR1cm4gbnVsbDtsZXQgbj1lPT57bGV0IHQ9ZS50YXJnZXQ7dCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQmJlwiZmlsZVwiPT09dC50eXBlJiZlLnByZXZlbnREZWZhdWx0KCl9O2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLG4sITApO3RyeXtlYShyKSxhd2FpdCAoMCxmLndhaXRGb3JDb25kaXRpb24pKCgpPT4hIXRGKGUpfHx0ZygpLnNvbWUocj0+IXQuaGFzKHIpfHx0SShyLGUpKSx7dGltZW91dDoyZTMsaW50ZXJ2YWw6MTAwLG9ic2VydmVUYXJnZXQ6ZG9jdW1lbnQuYm9keX0pfWZpbmFsbHl7ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsbiwhMCl9cmV0dXJuIHRGKGUpfHx0ZygpLmZpbmQocj0+IXQuaGFzKHIpfHx0SShyLGUpKXx8bnVsbH1hc3luYyBmdW5jdGlvbiB0SChlKXtyZXR1cm4gdHEoZSl8fGF3YWl0IHRVKGUpfWZ1bmN0aW9uIHRZKCl7cmV0dXJuISEodEQoKT8ucXVlcnlTZWxlY3RvcihcIiNDb3ZlckxldHRlckhlYWRpbmdcIikmJnQkKFwiY292ZXJMZXR0ZXJcIil8fHRNKCkpfWZ1bmN0aW9uIHR6KCl7cmV0dXJuISF0aigpPy5xdWVyeVNlbGVjdG9yKFwiI1Jlc3VtZUhlYWRpbmdcIil9ZnVuY3Rpb24gdFYoKXtsZXQgZT10eigpLHQ9ISF0JChcInJlc3VtZVwiKSxyPXQxKFwicmVzdW1lXCIpO3JldHVybntoYXNTZWN0aW9uOmUsY2FuVXBsb2FkOnQsdXBsb2FkZWQ6cn19ZnVuY3Rpb24gdFcoKXtsZXQgZT10VigpO3JldHVybiBlLmhhc1NlY3Rpb24mJihlLmNhblVwbG9hZHx8ZS51cGxvYWRlZCl9ZnVuY3Rpb24gdEcoKXtyZXR1cm4gdFkoKX1mdW5jdGlvbiB0SyhlKXtyZXR1cm4gdG0oZSkucmVwbGFjZSgvXFxzKy9nLFwiXCIpfWZ1bmN0aW9uIHRYKGUsdCl7bGV0IHI9dEsoZSk7cmV0dXJuISghcnx8L25vKHJlc3VtZVxcL2N2fGNvdmVybGV0dGVyKXNlbGVjdGVkLy50ZXN0KHIpKSYmKHQ/ci5pbmNsdWRlcyh0Syh0KSk6L1xcLihwZGZ8ZG9jeD98dHh0fHJ0ZnxodG1sP3xtaHRtbD8pXFxiL2kudGVzdChlKSl9ZnVuY3Rpb24gdEooZSl7cmV0dXJuIGUubWF0Y2goL1tePD46XCJ8PypcXFxcL10rP1xcLig/OnBkZnxkb2N4P3x0eHR8cnRmfGh0bWw/fG1odG1sPylcXGIvaSk/LlswXXx8XCJcIn1mdW5jdGlvbiB0UShlKXtyZXR1cm4oZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIil8fFwiXCIpLnNwbGl0KC9cXHMrLykubWFwKHQ9PmUub3duZXJEb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0KSkubWFwKHcpLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKX1mdW5jdGlvbiB0WihlKXtsZXQgdD1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvbiwgYSwgW3JvbGU9J2J1dHRvbiddLCBpbnB1dFt0eXBlPSdidXR0b24nXVwiKSk7cmV0dXJuIHQuZmluZChlPT57aWYoIWVsKGUpKXJldHVybiExO2xldCB0PXRtKFt3KGUpLHRRKGUpLGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSxlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiKSxlLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpLGUuZ2V0QXR0cmlidXRlKFwibmctY2xpY2tcIiksZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5nLWNsaWNrXCIpLGUuaWQsZS5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKSk7cmV0dXJuIHQuaW5jbHVkZXMoXCJkZWxldGVcIil8fHQuaW5jbHVkZXMoXCJyZW1vdmVcIil8fHQuaW5jbHVkZXMoXCJ0cmFzaFwiKXx8dC5pbmNsdWRlcyhcImRldHRhY2hyZXN1bWVjb3ZlcmxldHRlclwiKX0pfHxudWxsfWZ1bmN0aW9uIHQwKGUpe2xldCB0PXRSKCk7aWYoIXQpcmV0dXJue3VwbG9hZGVkVmFsdWU6bnVsbCxmaWxlTmFtZTpcIlwiLGRlbGV0ZUJ1dHRvbjpudWxsfTtsZXQgcj1BcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbChcIi5maWxlSG9sZGVyXCIpKTtmb3IobGV0IHQgb2Ygcil7bGV0IHI9dC5xdWVyeVNlbGVjdG9yKFwiLnRleHRIb2xkZXJcIil8fG51bGwsbj13KHIpLG89dFoodCk7aWYodFgobixlKSYmbylyZXR1cm57dXBsb2FkZWRWYWx1ZTpyLGZpbGVOYW1lOm4sZGVsZXRlQnV0dG9uOm99fXJldHVybnt1cGxvYWRlZFZhbHVlOm51bGwsZmlsZU5hbWU6XCJcIixkZWxldGVCdXR0b246bnVsbH19ZnVuY3Rpb24gdDIoZSx0KXtpZihcImNvdmVyTGV0dGVyXCI9PT1lJiZ0TSgpKXJldHVybiB0MCh0KTtsZXQgcj10QihlKTtpZighcilyZXR1cm57dXBsb2FkZWRWYWx1ZTpudWxsLGZpbGVOYW1lOlwiXCIsZGVsZXRlQnV0dG9uOm51bGx9O2xldCBuPVtyLC4uLkFycmF5LmZyb20oci5xdWVyeVNlbGVjdG9yQWxsKFwic3BhbiwgZGl2LCBhLCBwLCBsaSwgdGRcIikpXS5maWx0ZXIoZWwpLG89bi5maW5kKGU9PnRYKHcoZSksdCkpfHxudWxsLGk9bz93KG8pOlwiXCIsYT10WihyKTtyZXR1cm57dXBsb2FkZWRWYWx1ZTpvLGZpbGVOYW1lOmksZGVsZXRlQnV0dG9uOmF9fWZ1bmN0aW9uIHQxKGUsdCl7bGV0IHI9dDIoZSx0KTtyZXR1cm4hIShyLnVwbG9hZGVkVmFsdWUmJnIuZmlsZU5hbWUmJnIuZGVsZXRlQnV0dG9uKX1mdW5jdGlvbiB0MyhlKXtpZihcImNvdmVyTGV0dGVyXCI9PT1lJiZ0TSgpKXtsZXQgZT10MCgpO3JldHVybiBlLmZpbGVOYW1lP3RKKGUuZmlsZU5hbWUpfHxlLmZpbGVOYW1lOlwiXCJ9bGV0IHQ9dEIoZSk7aWYoIXQpcmV0dXJuXCJcIjtsZXQgcj1BcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbChcIi5maWxlSG9sZGVyIC50ZXh0SG9sZGVyLCAuZmlsZUhvbGRlciBzcGFuLCBzcGFuLnRleHRIb2xkZXIsIFtjbGFzcyo9J2ZpbGVOYW1lJ10sIFtjbGFzcyo9J2ZpbGVuYW1lJ10sIHNwYW4sIGFcIikpLmZpbHRlcihlbCksbj1yLmZpbmQoZT0+dFgodyhlKSkpO3JldHVybiBuP3RKKHcobikpfHx3KG4pOlwiXCJ9ZnVuY3Rpb24gdDQoKXtsZXQgZT17fTtyZXR1cm4gdDEoXCJyZXN1bWVcIikmJihlW2U2XT10MyhcInJlc3VtZVwiKSksdDEoXCJjb3ZlckxldHRlclwiKSYmKGVbXCJDb3ZlciBMZXR0ZXJcIl09dDMoXCJjb3ZlckxldHRlclwiKSksZX1hc3luYyBmdW5jdGlvbiB0NShlKXtsZXQgdD10MihlKTt0LnVwbG9hZGVkVmFsdWUmJnQuZGVsZXRlQnV0dG9uJiYoZWEodC5kZWxldGVCdXR0b24pLGF3YWl0ICgwLGYud2FpdEZvckNvbmRpdGlvbikoKCk9PiF0MShlKSx7dGltZW91dDoyNTAwLGludGVydmFsOjEwMCxvYnNlcnZlVGFyZ2V0OmRvY3VtZW50LmJvZHl9KSl9ZnVuY3Rpb24gdDYoZSl7bGV0IHQ9ZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3fHx3aW5kb3c7ZS5kaXNwYXRjaEV2ZW50KG5ldyB0LkV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiExfSkpLGUuZGlzcGF0Y2hFdmVudChuZXcgdC5FdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITF9KSl9ZnVuY3Rpb24gdDgoZSl7bGV0IHQ9Z2xvYmFsVGhpcy5CdWZmZXI7aWYodD8uZnJvbSlyZXR1cm4gdC5mcm9tKGUpLnRvU3RyaW5nKFwiYmFzZTY0XCIpO2xldCByPVwiXCIsbj0zMjc2ODtmb3IobGV0IHQ9MDt0PGUubGVuZ3RoO3QrPW4pe2xldCBvPWUuc3ViYXJyYXkodCx0K24pO3IrPVN0cmluZy5mcm9tQ2hhckNvZGUoLi4ubyl9cmV0dXJuIGJ0b2Eocil9YXN5bmMgZnVuY3Rpb24gdDkoZSx0KXtsZXQgcj1uZXcgVWludDhBcnJheShhd2FpdCB0LmFycmF5QnVmZmVyKCkpO3JldHVybntraW5kOmUsZmlsZU5hbWU6dC5uYW1lLGZpbGVUeXBlOnQudHlwZSxsYXN0TW9kaWZpZWQ6dC5sYXN0TW9kaWZpZWQsYmFzZTY0OnQ4KHIpfX1mdW5jdGlvbiB0NyhlKXtjb25zb2xlLmVycm9yKGBbQnJhc3NSaW5nQXV0b2ZpbGxdIHVwbG9hZC1yZXN1bHQgJHtKU09OLnN0cmluZ2lmeSh7c3RhZ2U6ZSx1cGxvYWRlZDohMSxyZWFzb246XCJleGNlcHRpb25cIn0pfWApfWZ1bmN0aW9uIHJlKCl7cmV0dXJue3VwbG9hZGVkOiExLHBhcnNlckRldGVjdGVkOiExLHBhcnNlclJlYWR5OiExfX1hc3luYyBmdW5jdGlvbiBydChlLHQscixuLG8saT0hMCl7dHJ5e2lmKCF0fHwhYXdhaXQgdHcoZSkpcmV0dXJuITE7bGV0IGE9YXdhaXQgKDAsbC5zZW5kVG9CYWNrZ3JvdW5kKSh7bmFtZTpcInVwbG9hZEJyYXNzcmluZ1Byb2ZpbGVCdWlsZGVyRmlsZVwiLGJvZHk6YXdhaXQgdDkoZSx0KX0pO2lmKCFhPy5zdWNjZXNzKXJldHVybiExO2xldCBzPWF3YWl0ICgwLGYud2FpdEZvckNvbmRpdGlvbikoKCk9PnQxKGUsdC5uYW1lKSx7dGltZW91dDo4ZTMsaW50ZXJ2YWw6MTUwLG9ic2VydmVUYXJnZXQ6ZG9jdW1lbnQuYm9keX0pO2lmKCFzKXJldHVybiExO3JldHVybiByKHtsYWJlbDpvLHJlcXVpcmVkOml9KSxuKG8pLGF3YWl0ICgwLHAuZGVsYXkpKDUwMCksITB9Y2F0Y2h7cmV0dXJuIHQ3KGB1cGxvYWQtJHtlfS1wcm9maWxlLWJ1aWxkZXJgKSwhMX19YXN5bmMgZnVuY3Rpb24gcnIoZSx0LHIsbixvLGksYT0hMCl7dHJ5e2lmKCF0LmZpbGVzKXJldHVybiExO2xldCBsPXIuZmlsZXNbMF0/Lm5hbWV8fFwiXCI7dC5maWxlcz1yLmZpbGVzLHQ2KHQpO2xldCBzPWF3YWl0ICgwLGYud2FpdEZvckNvbmRpdGlvbikoKCk9PnQxKGUsbCkse3RpbWVvdXQ6NmUzLGludGVydmFsOjE1MCxvYnNlcnZlVGFyZ2V0OmRvY3VtZW50LmJvZHl9KTtpZighcylyZXR1cm4hMTtyZXR1cm4gbih7bGFiZWw6aSxyZXF1aXJlZDphfSksbyhpKSxhd2FpdCAoMCxwLmRlbGF5KSg1MDApLCEwfWNhdGNoe3JldHVybiB0NyhgdXBsb2FkLSR7ZX0tZGlyZWN0YCksITF9fWFzeW5jIGZ1bmN0aW9uIHJuKGUsdCxyKXt0cnl7aWYoYXdhaXQgdDUoXCJyZXN1bWVcIiksIWUpcmV0dXJuIHJlKCk7bGV0IG49YXdhaXQgKDAsdS5mZXRjaFBkZkFzQmxvYikoZSksbz1uLmZpbGVzWzBdLGk9YXdhaXQgdEgoXCJyZXN1bWVcIiksYT10ZCgpLGw9aT9hd2FpdCBycihcInJlc3VtZVwiLGksbix0LHIsZTUpOmF3YWl0IHJ0KFwicmVzdW1lXCIsbyx0LHIsZTUpO2lmKCFsKXJldHVybiByZSgpO2xldCBzPWF3YWl0IHRwKGEpO3JldHVybnt1cGxvYWRlZDohMCxwYXJzZXJEZXRlY3RlZDpzLnBhcnNlckRldGVjdGVkLHBhcnNlclJlYWR5OnMucGFyc2VyUmVhZHl9fWNhdGNoKGUpe2lmKGUgaW5zdGFuY2VvZiBjLkNhbmNlbGxlZEVycm9yfHxlIGluc3RhbmNlb2YgYy5Ta2lwcGVkRXJyb3IpdGhyb3cgZTtyZXR1cm4gdDcoXCJ1cGxvYWQtcmVzdW1lLW9yY2hlc3RyYXRpb25cIikscmUoKX19YXN5bmMgZnVuY3Rpb24gcm8oZSx0LHIpe2lmKGF3YWl0IHQ1KFwiY292ZXJMZXR0ZXJcIiksIWU/LmNvdmVyTGV0dGVySWQpcmV0dXJuITE7bGV0IG49YXdhaXQgKDAsdS5mZXRjaENvdmVyTGV0dGVyUGRmQXNCbG9iKShlKSxvPW4uZmlsZXNbMF0saT1hd2FpdCB0SChcImNvdmVyTGV0dGVyXCIpO3JldHVybiBpP2F3YWl0IHJyKFwiY292ZXJMZXR0ZXJcIixpLG4sdCxyLFwiQ292ZXIgTGV0dGVyXCIsdEcoKSk6YXdhaXQgcnQoXCJjb3ZlckxldHRlclwiLG8sdCxyLFwiQ292ZXIgTGV0dGVyXCIsdEcoKSl9ZnVuY3Rpb24gcmkoZSl7cmV0dXJuIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh5W2VdLmxpc3RTZWxlY3RvcikpfWZ1bmN0aW9uIHJhKGUpe3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHlbZV0uYWRkU2VsZWN0b3IpfWZ1bmN0aW9uIHJsKGUpe2xldCB0PXlbZV0ucmVtb3ZlQ2xpY2tUb2tlbjtyZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBhW25nLWNsaWNrKj0nJHt0fSddW25nLWNsaWNrKj0ncmVtb3ZlJ10sIGJ1dHRvbltuZy1jbGljayo9JyR7dH0nXVtuZy1jbGljayo9J3JlbW92ZSddYCkpfWZ1bmN0aW9uIHJzKGUpe3JldHVybiBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcImlucHV0Om5vdChbdHlwZT0naGlkZGVuJ10pOm5vdChbdHlwZT0nYnV0dG9uJ10pOm5vdChbdHlwZT0nc3VibWl0J10pLCB0ZXh0YXJlYSwgc2VsZWN0XCIpKS5zb21lKGU9PiEhZWwoZSkmJiFlLmRpc2FibGVkJiYhIWUuY2xvc2VzdChoKSl9ZnVuY3Rpb24gcnUoZSx0KXtsZXQgcj1yaShlKVt0XTtpZighcilyZXR1cm4gbnVsbDtsZXQgbj15W2VdLnVwZGF0ZUNsaWNrVG9rZW4sbz1yLmNsb3Nlc3QoXCIud2lkZ2V0aW5uZXJcIil8fHIucGFyZW50RWxlbWVudCxpPUFycmF5LmZyb20oKG98fGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKFwiYSwgYnV0dG9uXCIpKTtyZXR1cm4gaS5maW5kKGU9PntpZighZWwoZSkpcmV0dXJuITE7bGV0IHQ9dihbdyhlKSxlLmlkLGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSxlLmdldEF0dHJpYnV0ZShcIm5nLWNsaWNrXCIpLGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1uZy1jbGlja1wiKV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpKTtyZXR1cm4gdC5pbmNsdWRlcyhcInVwZGF0ZVwiKSYmdC5pbmNsdWRlcyhuLnRvTG93ZXJDYXNlKCkpfSl8fGkuZmluZChlPT57aWYoIWVsKGUpKXJldHVybiExO2xldCB0PXYoW3coZSksZS5pZCxlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiksZS5nZXRBdHRyaWJ1dGUoXCJuZy1jbGlja1wiKSxlLmdldEF0dHJpYnV0ZShcImRhdGEtbmctY2xpY2tcIildLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKSk7cmV0dXJuIHQuc3RhcnRzV2l0aChcInVwZGF0ZVwiKXx8dC5pbmNsdWRlcyhuLnRvTG93ZXJDYXNlKCkpfSl8fG51bGx9ZnVuY3Rpb24gcmMoKXtsZXQgZT1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmdkaWFsb2ctY29udGVudCwgLnByb2ZpbGVXYXJuaW5nRGlhbG9nXCIpKS5maWx0ZXIoZWwpO2ZvcihsZXQgdCBvZiBlKXtsZXQgZT12KHcodCkpO2lmKCFlLmluY2x1ZGVzKFwiYXJlIHlvdSBzdXJlXCIpfHwhZS5pbmNsdWRlcyhcInJlbW92ZVwiKSljb250aW51ZTtsZXQgcj1BcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvbiwgYSwgW3JvbGU9J2J1dHRvbiddXCIpKS5maW5kKGU9PntpZighZWwoZSkpcmV0dXJuITE7bGV0IHQ9dihbdyhlKSxlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiksZS5nZXRBdHRyaWJ1dGUoXCJuZy1jbGlja1wiKSxlLmdldEF0dHJpYnV0ZShcImRhdGEtbmctY2xpY2tcIildLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKSk7cmV0dXJuIHQuaW5jbHVkZXMoXCJ5ZXMgcmVtb3ZlIGl0XCIpfHx0LmluY2x1ZGVzKFwicmVtb3ZlcHJvZmlsZWRhdGFcIil9KTtpZihyKXJldHVybiByfXJldHVybiBudWxsfWZ1bmN0aW9uIHJkKCl7bGV0IGU9cmMoKTtyZXR1cm4hIWUmJihlYShlKSwhMCl9YXN5bmMgZnVuY3Rpb24gcmYoZSx0KXtsZXQgcj0wO3JldHVybiBhd2FpdCAoMCxmLndhaXRGb3JDb25kaXRpb24pKCgpPT57aWYocmkoZSkubGVuZ3RoPHQpcmV0dXJuITA7bGV0IG49RGF0ZS5ub3coKTtyZXR1cm4gbi1yPjE1MCYmcmQoKSYmKHI9biksITF9LHt0aW1lb3V0OjM1MDAsaW50ZXJ2YWw6NTAsb2JzZXJ2ZVRhcmdldDpkb2N1bWVudC5ib2R5fSl9YXN5bmMgZnVuY3Rpb24gcnAoZSl7bGV0IHQ9cmEoZSk7aWYoIXQpcmV0dXJuITE7bGV0IHI9cmkoZSkubGVuZ3RoO3JldHVybiBlYSh0KSxhd2FpdCAoMCxmLndhaXRGb3JDb25kaXRpb24pKCgpPT5yaShlKS5sZW5ndGg+cix7dGltZW91dDoyNTAwLGludGVydmFsOjEwMCxvYnNlcnZlVGFyZ2V0OmRvY3VtZW50LmJvZHl9KSxhd2FpdCAoMCxwLmRlbGF5KSgzMDApLHJpKGUpLmxlbmd0aD5yfWFzeW5jIGZ1bmN0aW9uIHJtKGUpe2xldCB0PXJsKGUpLHI9dFt0Lmxlbmd0aC0xXTtpZighcilyZXR1cm4hMTtsZXQgbj1yaShlKS5sZW5ndGg7cmV0dXJuIGVhKHIpLGF3YWl0IHJmKGUsbiksYXdhaXQgKDAscC5kZWxheSkoMzAwKSxyaShlKS5sZW5ndGg8bn1hc3luYyBmdW5jdGlvbiByaChlLHQpe2xldCByPXJpKGUpW3RdO2lmKCFyKXJldHVybiExO2lmKHJzKHIpKXJldHVybiEwO2xldCBuPXJ1KGUsdCk7aWYoIW4pcmV0dXJuITE7ZWEobiksYXdhaXQgKDAsZi53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+e2xldCByPXJpKGUpW3RdO3JldHVybiEhKHImJnJzKHIpKX0se3RpbWVvdXQ6MjUwMCxpbnRlcnZhbDoxMDAsb2JzZXJ2ZVRhcmdldDpkb2N1bWVudC5ib2R5fSksYXdhaXQgKDAscC5kZWxheSkoMjAwKTtsZXQgbz1yaShlKVt0XTtyZXR1cm4hIShvJiZycyhvKSl9YXN5bmMgZnVuY3Rpb24gcmcoZSx0KXtsZXQgcj1NYXRoLm1heCgwLE1hdGgubWluKHQseVtlXS5tYXhDb3VudCkpO2Zvcig7cmkoZSkubGVuZ3RoPnI7KXtsZXQgdD1hd2FpdCBybShlKTtpZighdClicmVha31mb3IoO3JpKGUpLmxlbmd0aDxyOyl7bGV0IHQ9YXdhaXQgcnAoZSk7aWYoIXQpYnJlYWt9cmV0dXJuIHJpKGUpLmxlbmd0aH1hc3luYyBmdW5jdGlvbiByYihlLHQ9NWUzKXtsZXQgcj0oKT0+KHtlZHVjYXRpb25Db3VudDpyaShcImVkdWNhdGlvblwiKS5sZW5ndGgsZW1wbG95bWVudENvdW50OnJpKFwiZXhwZXJpZW5jZVwiKS5sZW5ndGh9KSxuPXIoKSxvPWUuZWR1Y2F0aW9uQ291bnQ+MCYmMD09PW4uZWR1Y2F0aW9uQ291bnQsaT1lLmVtcGxveW1lbnRDb3VudD4wJiYwPT09bi5lbXBsb3ltZW50Q291bnQ7KG98fGkpJiZhd2FpdCAoMCxmLndhaXRGb3JDb25kaXRpb24pKCgpPT57bGV0IGU9cigpO3JldHVybighb3x8ZS5lZHVjYXRpb25Db3VudD4wKSYmKCFpfHxlLmVtcGxveW1lbnRDb3VudD4wKX0se3RpbWVvdXQ6dCxpbnRlcnZhbDoxMDAsb2JzZXJ2ZVRhcmdldDpkb2N1bWVudC5ib2R5LG9ic2VydmVySW5pdDp7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITB9fSk7bGV0IGE9cigpO3JldHVybiBjb25zb2xlLmluZm8oXCJbQnJhc3NSaW5nQXV0b2ZpbGxdIGNvbXBvc2l0ZS1oeWRyYXRpb25cIix7cHJvZmlsZUVkdWNhdGlvbkNvdW50OmUuZWR1Y2F0aW9uQ291bnQscHJvZmlsZUVtcGxveW1lbnRDb3VudDplLmVtcGxveW1lbnRDb3VudCxpbml0aWFsRWR1Y2F0aW9uQ291bnQ6bi5lZHVjYXRpb25Db3VudCxpbml0aWFsRW1wbG95bWVudENvdW50Om4uZW1wbG95bWVudENvdW50LGZpbmFsRWR1Y2F0aW9uQ291bnQ6YS5lZHVjYXRpb25Db3VudCxmaW5hbEVtcGxveW1lbnRDb3VudDphLmVtcGxveW1lbnRDb3VudH0pLGF9YXN5bmMgZnVuY3Rpb24gcnkoZSl7bGV0IHQ9ITE7Zm9yKGxldFtyLG5db2ZbW1wiZWR1Y2F0aW9uXCIsZS5lZHVjYXRpb25Db3VudF0sW1wiZXhwZXJpZW5jZVwiLGUuZW1wbG95bWVudENvdW50XV0pe2xldCBlPXJpKHIpLmxlbmd0aDtpZihuPD0wfHxlPjApY29udGludWU7bGV0IG89YXdhaXQgcnAocik7Y29uc29sZS5pbmZvKFwiW0JyYXNzUmluZ0F1dG9maWxsXSBjb21wb3NpdGUtc2VlZFwiLHtraW5kOnIsc291cmNlQ291bnQ6bixiZWZvcmVDb3VudDplLGFmdGVyQ291bnQ6cmkocikubGVuZ3RoLGFkZGVkOm99KSx0PXR8fG99cmV0dXJuIHR9ZnVuY3Rpb24gcnYoZSx0KXtsZXQgcj15W2VdLG49QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHIuZG9uZUNvbnRhaW5lclNlbGVjdG9yKSksbz1uW3RdPy5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLnByaW1hcnlCdXR0b24sIGJ1dHRvbltuZy1jbGljayo9J3NhdmUnXSwgaW5wdXRbdHlwZT0nYnV0dG9uJ11cIik7aWYobylyZXR1cm4gbztsZXQgaT1yaShlKSxhPWlbdF0sbD1hPy5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLnByaW1hcnlCdXR0b24sIGJ1dHRvbltuZy1jbGljayo9J3NhdmUnXSwgaW5wdXRbdHlwZT0nYnV0dG9uJ11cIik7cmV0dXJuIGx8fEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvbiwgaW5wdXRbdHlwZT0nYnV0dG9uJ11cIikpLmZpbHRlcihlPT4vZG9uZS9pLnRlc3QodyhlKXx8ZS52YWx1ZXx8XCJcIikpW3RdfHxudWxsfWFzeW5jIGZ1bmN0aW9uIHJ3KGUsdCl7bGV0IHI9cnYoZSx0KTtyJiYoZWEociksYXdhaXQgKDAscC5kZWxheSkoNTAwKSl9YXN5bmMgZnVuY3Rpb24gclMoKXthd2FpdCAoMCxmLndhaXRGb3JDb25kaXRpb24pKCgpPT5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGgpLmxlbmd0aD4wLHt0aW1lb3V0OjNlMyxpbnRlcnZhbDoxMDAsb2JzZXJ2ZVRhcmdldDpkb2N1bWVudC5ib2R5fSl9ZnVuY3Rpb24gckUoKXtsZXQgZT1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b24sIGlucHV0W3R5cGU9J2J1dHRvbiddLCBpbnB1dFt0eXBlPSdzdWJtaXQnXSwgYVwiKSk7cmV0dXJuIGUuZmluZChlPT57bGV0IHQ9dyhlKXx8ZS52YWx1ZXx8XCJcIjtyZXR1cm4vXihzdWJtaXR8c3VibWl0IGFwcGxpY2F0aW9ufGFwcGx5fGNvbnRpbnVlfG5leHR8c2F2ZSBhbmQgY29udGludWUpJC9pLnRlc3QodC50cmltKCkpfSl8fG51bGx9ZnVuY3Rpb24gcngoKXtsZXQgZT1yRSgpO2UmJmVhKGUpfVxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0aW9ucy45NmZmZDMyZC5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);