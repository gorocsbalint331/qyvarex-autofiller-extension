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
})({"6wZLi":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\adp-workforcenow\\rules.js",
    "bundleId": "eec68024045bc25a",
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
var j = z(require("c4577ed741f8de8b"));
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

},{"c4577ed741f8de8b":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"fSz1H":[function(require,module,exports) {
/**
 * Parcel module id: 5fFF1
 * Resolved path: src/contents/sites/adp-workforcenow/rules.js
 * Dependencies:
 *   ./answer -> 3cqYs  =>  src/contents/sites/adp-workforcenow/answer.js
 *   ./operations -> lIV4n  =>  src/contents/sites/adp-workforcenow/operations.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/sites/autofill-answer-pair-tracking -> aCElZ  =>  src/contents/sites/autofill-answer-pair-tracking.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/phone-country-code -> 8nENw  =>  src/core/phone-country-code.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~store/url -> b53L3  =>  src/store/url.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getRules", ()=>m), n.export(r, "extractGuestLoginFormRules", ()=>T), n.export(r, "getAdpQuestionTextFieldType", ()=>_), n.export(r, "isAdpSalaryCurrencySelectLabel", ()=>L), n.export(r, "hasAdpWorkforceNowVsidRaceDependency", ()=>Q), n.export(r, "isAdpWorkforceNowVsidRaceRequiredAfterEthnicity", ()=>ee), n.export(r, "partitionAdpWorkforceNowVsidRaceRules", ()=>et), n.export(r, "getEnabledAdpWorkforceNowVsidRaceRule", ()=>en), n.export(r, "getFormSnapshot", ()=>ey), n.export(r, "submitHandler", ()=>ev);
var o = e("~contents/sites/autofill-answer-pair-tracking"), i = e("~core/enums"), a = e("~core/phone-country-code"), l = e("~core/xpath"), s = e("~store/url"), u = e("./answer"), c = e("./operations");
let d = ".personal-step-container.vsid-padding-container, .vsid-padding-container";
function f(e1) {
    if (!e1 || !e1.isConnected || e1 instanceof HTMLInputElement && "hidden" === e1.type) return !1;
    let t = e1.checkVisibility;
    if ("function" == typeof t) try {
        if (!t.call(e1, {
            checkVisibilityCSS: !0
        })) return !1;
    } catch  {
        if (!t.call(e1)) return !1;
    }
    let r1 = e1;
    for(; r1;){
        if (r1.hasAttribute("hidden") || "true" === r1.getAttribute("aria-hidden")) return !1;
        let e1 = window.getComputedStyle(r1);
        if ("none" === e1.display || "hidden" === e1.visibility) return !1;
        r1 = r1.parentElement;
    }
    if ("function" == typeof e1.getClientRects) {
        let t = e1.getClientRects();
        if (0 === t.length) return !1;
    }
    return !0;
}
function p(e1) {
    let t = e1;
    switch(e1.type){
        case i.FIELD_TYPE.TEXT:
        case i.FIELD_TYPE.SEARCH:
        case i.FIELD_TYPE.DATE:
        case i.FIELD_TYPE.SELECT:
            return f(t.$input ?? null);
        case i.FIELD_TYPE.CHECKBOX:
            if (!t.$checkboxs?.length) return !1;
            return t.$checkboxs.some((e1)=>f(e1));
        case i.FIELD_TYPE.RADIOGROUP:
            return f(t.$radioParent ?? null) || f(t.$input ?? null);
        case i.FIELD_TYPE.RADIO:
        case i.FIELD_TYPE.LISTBOX:
        case i.FIELD_TYPE.MULTI_SELECT:
            return f(t.$input ?? null);
        default:
            return !0;
    }
}
async function m() {
    let e1 = [];
    e1.push(...T());
    let t = (0, l.getOrderedNodesSafe)('.//div[contains(@class, "mdf-validated-field")]');
    for (let r1 of t){
        if (!f(r1)) continue;
        let t = await g(r1);
        t && e1.push(t);
    }
    e1.push(...N());
    let r1 = await $();
    e1.push(...r1);
    let n = await q();
    e1.push(...n);
    let o = await eo();
    e1.push(...o);
    let i = await h();
    return e1.push(...i), e1.filter(p);
}
async function h() {
    let e1 = [], t = document.querySelector(".self-review-attestation");
    if (t) {
        let r1 = t.querySelector('input[type="checkbox"]');
        if (r1) {
            let n = t.querySelector(".self-review-signature-checkbox label, label"), o = t.querySelector("h3")?.textContent?.trim() || "Self Attestation", a = n?.textContent?.trim() || "Yes, I agree to sign electronically.", l = "true" === r1.getAttribute("aria-required") || r1.hasAttribute("required") || !!t.querySelector(".self-review-signature-required");
            e1.push({
                type: i.FIELD_TYPE.CHECKBOX,
                label: o,
                required: l,
                $label: n || r1,
                $checkboxs: [
                    r1
                ],
                options: [
                    a
                ]
            });
        }
    }
    let r1 = document.getElementById("electronicSignature");
    if (r1 && !r1.disabled) {
        let t = null, n = r1.closest(".self-review-signature-label");
        n && (t = n.querySelector("label"));
        let o = t?.textContent?.trim() || r1.getAttribute("aria-label") || "Please type your full name.", a = "true" === r1.getAttribute("aria-required") || r1.hasAttribute("required") || !!t?.classList.contains("required");
        e1.push({
            type: i.FIELD_TYPE.TEXT,
            label: o,
            required: a,
            $label: t || r1,
            $input: r1
        });
    }
    return e1;
}
async function g(e1) {
    let t = e1.querySelector(".mdf-label label");
    if (!t) return null;
    let r1 = t.textContent?.trim() || "";
    if (!r1) return null;
    let n = b(e1, t), o = n.required;
    console.info("[AdpWorkforceNowRequiredDebug] normal-field-requiredness", JSON.stringify({
        label: w(t),
        required: o,
        signals: n.signals
    }));
    let i = [
        ()=>O(e1, t, o),
        ()=>B(e1, t, o),
        ()=>R(e1, t, o),
        ()=>y(e1, t, o)
    ];
    for (let e1 of i){
        let t = await e1();
        if (t) return t;
    }
    return null;
}
function b(e1, t) {
    let r1 = [];
    t.classList.contains("mdf-required-indicator") && r1.push("label-mdf-required-indicator"), t.classList.contains("required-indicator") && r1.push("label-required-indicator"), t.querySelector(".mdf-required-indicator") && r1.push("label-child-mdf-required-indicator"), t.querySelector(".required-indicator") && r1.push("label-child-required-indicator");
    try {
        let e1 = window.getComputedStyle(t, "::after").content;
        e1?.includes("*") && r1.push("label-after-asterisk");
    } catch  {}
    for (let t of e1.querySelectorAll('input, select, textarea, [role="combobox"]'))t.hasAttribute("required") && r1.push("control-required"), "true" === t.getAttribute("aria-required") && r1.push("control-aria-required");
    return {
        required: r1.length > 0,
        signals: r1
    };
}
function y(e1, t, r1) {
    let n = null, o = t.getAttribute("for");
    if (o && (n = document.getElementById(o)), !n) {
        let t = e1.querySelectorAll('input.vdl-textbox, input[type="text"], input[type="email"], input[type="tel"]');
        for (let e1 of t)if (!e1.disabled && !e1.readOnly && "true" !== e1.getAttribute("aria-readonly") && "phone-input" !== e1.getAttribute("data-testid") && "checkbox" !== e1.type && "radio" !== e1.type && "combobox" !== e1.getAttribute("role")) {
            n = e1;
            break;
        }
    }
    if (!n || n.disabled || n.readOnly || "true" === n.getAttribute("aria-readonly") || "checkbox" === n.type || "radio" === n.type || "phone-input" === n.getAttribute("data-testid")) return null;
    let a = t.textContent?.replace("*", "").trim() || "";
    return {
        type: i.FIELD_TYPE.TEXT,
        label: a,
        required: r1,
        $label: t,
        $input: n
    };
}
function v(e1) {
    return (e1 || "").replace(/\*+/g, "").replace(/\s+/g, " ").trim();
}
function w(e1) {
    if (!e1) return "";
    let t = e1.cloneNode(!0);
    return t.querySelectorAll(".mdf-required-indicator, .required-indicator").forEach((e1)=>e1.remove()), v(t.textContent);
}
function S(e1) {
    let t = window.CSS;
    return t?.escape ? t.escape(e1) : e1.replace(/["\\]/g, "\\$&");
}
_c = S;
function E(e1, t) {
    let r1 = v(t).toLowerCase();
    return r1 ? Array.from(e1.querySelectorAll("label, .sdf-label, .input-label")).find((e1)=>v(e1.textContent).toLowerCase() === r1) ?? null : null;
}
_c1 = E;
function x(e1, t = document) {
    let r1 = e1.getAttribute("id");
    if (r1) {
        let e1 = t.querySelector(`label[for="${S(r1)}"]`);
        if (e1) return e1;
    }
    let n = e1.getAttribute("aria-labelledby");
    if (n) for (let e1 of n.split(/\s+/).filter(Boolean)){
        let r1 = t.querySelector(`#${S(e1)}`);
        if (r1) return r1;
    }
    let o = e1.closest(".vdl-field, .mdf-validated-field, .rrui__input, .form-group, .field-container, [role='group']"), i = o?.querySelector("label, .sdf-label, .input-label");
    if (i) return i;
    let a = e1.getAttribute("aria-label");
    return a ? E(t, a) : null;
}
function C(e1, t) {
    return e1.hasAttribute("required") || "true" === e1.getAttribute("aria-required") || !!t?.querySelector(".mdf-required-indicator, .required-indicator") || !!t?.classList.contains("required-indicator");
}
_c2 = C;
function A(e1) {
    return !e1.disabled && !e1.readOnly && "true" !== e1.getAttribute("aria-readonly") && "phone-input" !== e1.getAttribute("data-testid") && "combobox" !== e1.getAttribute("role") && [
        "",
        "text",
        "email",
        "tel",
        "url",
        "number"
    ].includes(e1.getAttribute("type") || e1.type || "");
}
_c3 = A;
function k(e1) {
    return Array.from(e1.options).map((e1)=>e1.textContent?.trim() || e1.value.trim()).filter((e1)=>e1.length > 0);
}
function T(e1 = document) {
    let t = [], r1 = new WeakSet, n = new WeakSet, o = Array.from(e1.querySelectorAll(".login-form-container"));
    for (let l of o){
        for (let n of Array.from(l.querySelectorAll("input"))){
            let o = n;
            if (!A(o) || r1.has(o) || !f(o)) continue;
            let a = x(o, e1), l = w(a) || v(o.getAttribute("aria-label")) || v(o.getAttribute("placeholder")) || v(o.getAttribute("name")) || v(o.id);
            l && (r1.add(o), t.push({
                type: i.FIELD_TYPE.TEXT,
                label: l,
                required: C(o, a),
                $label: a || o,
                $input: o
            }));
        }
        let o = l.querySelector('input[data-testid="phone-input"]');
        if (o && !o.disabled && !r1.has(o) && f(o)) {
            let s = x(o, e1), c = w(s) || v(o.getAttribute("aria-label")) || "Mobile Number", d = (0, u.normalizeAdpWorkforceNowPhoneLabel)(c);
            r1.add(o);
            let f = (s ? M(s) : null) || o.closest('[role="group"]') || l, p = f.querySelector('select[name="phoneCountry"]');
            if (p?.isConnected && !p.disabled && !n.has(p)) {
                n.add(p);
                let e1 = (0, u.getAdpWorkforceNowPhoneCountryCodeLabel)(d) || `${d} Country`;
                t.push({
                    type: i.FIELD_TYPE.SELECT,
                    label: e1,
                    required: C(p, s),
                    $label: s || p,
                    $input: p,
                    options: k(p),
                    description: a.PHONE_COUNTRY_CODE_DESCRIPTION
                });
            }
            t.push({
                type: i.FIELD_TYPE.TEXT,
                label: d,
                required: C(o, s),
                $label: s || o,
                $input: o,
                description: a.LOCAL_PHONE_DESCRIPTION
            });
        }
    }
    return t;
}
_c4 = T;
function F(e1, t) {
    let r1 = ()=>{
        let r1 = t.getAttribute("id");
        if (!r1) return null;
        for (let t of e1.querySelectorAll('[role="combobox"]')){
            let e1 = (t.getAttribute("aria-labelledby") || "").split(/\s+/).filter(Boolean);
            if (e1.includes(r1)) return t;
        }
        return null;
    }, n = t.getAttribute("for");
    if (n) {
        let t = document.getElementById(n);
        if (t) {
            if (I(t)) {
                let t = r1() || e1.querySelector('[role="combobox"]');
                if (t) return t;
            }
            return t;
        }
    }
    let o = r1();
    return o || e1.querySelector('[role="combobox"]');
}
_c5 = F;
function I(e1) {
    if ("INPUT" !== e1.tagName) return !1;
    let t = e1.type;
    return [
        "text",
        "email",
        "tel",
        "url",
        "search",
        "number",
        "password"
    ].includes(t) && "combobox" !== e1.getAttribute("role");
}
_c6 = I;
function j(e1) {
    let t = e1.querySelector(".flex.justify-between");
    if (t) {
        let e1 = t.cloneNode(!0);
        return e1.querySelectorAll("sdf-icon, svg, i").forEach((e1)=>e1.remove()), e1.textContent?.trim() || "";
    }
    let r1 = e1.cloneNode(!0);
    return r1.querySelectorAll("sdf-icon, svg, i").forEach((e1)=>e1.remove()), r1.textContent?.trim() || "";
}
function D(e1) {
    return e1.replace(/\*+/g, "").replace(/\s+/g, " ").trim().toLowerCase();
}
_c7 = D;
function P(e1) {
    return /\bdesired salary\b/.test(D(e1));
}
_c8 = P;
function _(e1) {
    let t = D(e1);
    return /\b(salary|compensation|pay)\b/.test(t) ? /\b(range|minimum and maximum|min and max)\b/.test(t) ? i.FIELD_TYPE.TEXT : i.FIELD_TYPE.NUMBER : i.FIELD_TYPE.TEXT;
}
function L(e1) {
    return "select currency type" === D(e1);
}
_c9 = L;
async function R(e1, t, r1) {
    let n = t.textContent?.replace("*", "").trim() || "", o = n.toLowerCase();
    if ("country" === o) {
        let n = F(e1, t) || e1.querySelector('[role="combobox"]');
        if (!n) return null;
        let o = [];
        if ("SELECT" === n.tagName) o = Array.from(n.options).map((e1)=>e1.textContent?.trim() || "").filter((e1)=>e1.length > 0);
        else if ("combobox" === n.getAttribute("role")) {
            let e1 = await (0, c.getSelectOptionsElement)(n, !1);
            o = (e1 || []).map(j).filter((e1)=>e1.length > 0);
        }
        return {
            type: i.FIELD_TYPE.SELECT,
            label: "Country",
            required: r1,
            $label: t,
            $input: n,
            options: o
        };
    }
    let a = F(e1, t);
    if (a && I(a)) return null;
    if (!a) {
        let o = e1.querySelector('select:not([name="phoneCountry"])');
        if (o) {
            let e1 = Array.from(o.options).map((e1)=>e1.textContent?.trim() || "").filter((e1)=>e1.length > 0);
            if (e1.length > 0) return {
                type: i.FIELD_TYPE.SELECT,
                label: n,
                required: r1,
                $label: t,
                $input: o,
                options: e1
            };
        }
        return null;
    }
    if ("SELECT" === a.tagName) {
        let e1 = a, o = Array.from(e1.options).map((e1)=>e1.textContent?.trim() || "").filter((e1)=>e1.length > 0);
        return o.length > 0 ? {
            type: i.FIELD_TYPE.SELECT,
            label: n,
            required: r1,
            $label: t,
            $input: e1,
            options: o
        } : null;
    }
    if ("combobox" === a.getAttribute("role")) {
        let e1 = await (0, c.getSelectOptionsElement)(a, !1), o = (e1 || []).map(j).filter((e1)=>e1.length > 0);
        return {
            type: i.FIELD_TYPE.SELECT,
            label: n,
            required: r1,
            $label: t,
            $input: a,
            options: o
        };
    }
    return null;
}
_c10 = R;
function O(e1, t, r1) {
    let n = t.getAttribute("for");
    if (!n) return null;
    let o = document.getElementById(n);
    if (!o || "checkbox" !== o.type) return null;
    let a = o.closest(".vdl-checkbox");
    if (!a) return null;
    let l = a.querySelector("label");
    if (!l) return null;
    let s = l.textContent?.trim() || t.textContent?.replace("*", "").trim() || "";
    return {
        type: i.FIELD_TYPE.CHECKBOX,
        label: s,
        required: !1,
        $label: l,
        $checkboxs: [
            o
        ],
        options: [
            s
        ]
    };
}
_c11 = O;
function M(e1) {
    let t = e1.closest('[role="group"]');
    return t || e1.closest(".mdf-validated-field")?.querySelector('[role="group"]') || null;
}
_c12 = M;
function N() {
    let e1 = [], t = [], r1 = document.querySelector(".personal-step-container");
    r1 && t.push(r1), t.push(document);
    let n = (e1)=>{
        for (let r1 of t)for (let t of e1){
            let e1 = r1.querySelector(t);
            if (e1?.isConnected) return e1;
        }
        return null;
    }, o = n([
        "#usePreferredName input[type='checkbox']",
        'input[name="usePreferredName"][type="checkbox"]'
    ]);
    if (o) {
        let t = o.closest(".vdl-checkbox"), r1 = o.closest(".flex.flex-row") || o.closest('[class*="flex-row"]'), n = r1?.querySelector("span"), a = n?.textContent?.trim() || o.getAttribute("aria-label") || t?.getAttribute("aria-label") || "I have a preferred or chosen name";
        e1.push({
            type: i.FIELD_TYPE.CHECKBOX,
            label: "Preferred or chosen name",
            required: "true" === o.getAttribute("aria-required"),
            $label: n || t || o,
            $checkboxs: [
                o
            ],
            options: [
                a
            ]
        });
    }
    let a = n([
        "#consentCheckBox input[type='checkbox']",
        'input[name="consentCheckBox"][type="checkbox"]',
        ".personal-info-consent input[type='checkbox']"
    ]);
    if (a) {
        let t = a.closest(".vdl-checkbox"), r1 = t?.querySelector("label"), n = r1?.textContent?.trim() || a.getAttribute("aria-label") || "(Optional) I would like to receive text messages to this number about my job application.";
        e1.push({
            type: i.FIELD_TYPE.CHECKBOX,
            label: "Text message notifications (optional)",
            required: "true" === a.getAttribute("aria-required"),
            $label: r1 || t || a,
            $checkboxs: [
                a
            ],
            options: [
                n
            ]
        });
    }
    return e1;
}
_c13 = N;
async function $() {
    let e1 = [], t = new WeakSet, r1 = new WeakSet, n = (0, l.getOrderedNodesSafe)('.//label[@id and (contains(@id, "validated_label_mobile") or contains(@id, "validated_label_home"))]');
    for (let o of n){
        let n = (0, u.normalizeAdpWorkforceNowPhoneLabel)(o.textContent);
        if (!n) continue;
        let l = null !== o.querySelector(".mdf-required-indicator"), s = M(o);
        if (!s) continue;
        let c = s.querySelector('select[name="phoneCountry"]');
        if (c && !r1.has(c)) {
            r1.add(c);
            let t = Array.from(c.options).map((e1)=>e1.textContent?.trim() || "").filter((e1)=>e1.length > 0), s = (0, u.getAdpWorkforceNowPhoneCountryCodeLabel)(n) || `${n} Country`;
            e1.push({
                type: i.FIELD_TYPE.SELECT,
                label: s,
                required: l,
                $label: o,
                $input: c,
                options: t,
                description: a.PHONE_COUNTRY_CODE_DESCRIPTION
            });
        }
        let d = s.querySelector('input[data-testid="phone-input"]');
        !d || d.disabled || t.has(d) || (t.add(d), e1.push({
            type: i.FIELD_TYPE.TEXT,
            label: n,
            required: l,
            $label: o,
            $input: d,
            description: a.LOCAL_PHONE_DESCRIPTION
        }));
    }
    return e1;
}
async function B(e1, t, r1) {
    let n = e1.querySelector("sdf-radio-group");
    if (!n) return null;
    let o = Array.from(n.querySelectorAll("sdf-radio-button"));
    if (0 === o.length) return null;
    let a = [], l = [];
    for (let e1 of o){
        let t = e1.getAttribute("label"), r1 = e1.getAttribute("value");
        t ? (a.push(t), l.push(e1)) : r1 && (a.push(r1), l.push(e1));
    }
    if (0 === a.length) return null;
    let s = t.textContent?.replace("*", "").trim() || "", u = o[0]?.querySelector("input[type='radio']"), c = u || o[0];
    return {
        type: i.FIELD_TYPE.RADIOGROUP,
        label: s,
        required: r1,
        $label: t,
        $input: c,
        $radioParent: n,
        options: a
    };
}
_c14 = B;
async function q() {
    let e1 = [], t = document.querySelector(".quesitions-container, .qContainerRowsWhite");
    if (!t) return e1;
    let r1 = (0, l.getOrderedNodesSafe)('.//div[contains(@class, "qMainDiv")]', t);
    for (let t of r1){
        let r1 = t.querySelector(".question-label-container label.qLabel");
        if (!r1) continue;
        let n = r1.textContent?.trim() || "";
        if (!n) continue;
        let o = null !== r1.querySelector(".mdf-required-indicator");
        n.replace("*", "").trim();
        let i = r1.getAttribute("for");
        if (!i) continue;
        let a = [
            ()=>U(t, r1, o),
            ()=>H(t, r1, i, o),
            ()=>Y(t, r1, i, o)
        ];
        for (let t of a){
            let r1 = await t();
            if (r1) {
                e1.push(r1);
                break;
            }
        }
    }
    let n = (0, l.getOrderedNodesSafe)('.//div[contains(@class, "additional-question")]', t);
    for (let t of n){
        let r1 = t.querySelector("sdf-radio-group");
        if (r1) {
            let n = t.querySelector(".question-label-container, .qLabel, span.qLabel");
            if (n) {
                let t = n.textContent?.trim() || "", o = Array.from(r1.querySelectorAll("sdf-radio-button")), a = [];
                for (let e1 of o){
                    let t = e1.getAttribute("label"), r1 = e1.getAttribute("value");
                    t ? a.push(t) : r1 && a.push(r1);
                }
                if (a.length > 0 && !P(t)) {
                    let l = o[0]?.querySelector("input[type='radio']"), s = l || o[0];
                    e1.push({
                        type: i.FIELD_TYPE.RADIOGROUP,
                        label: t,
                        required: !1,
                        $label: n,
                        $input: s,
                        $radioParent: r1,
                        options: a
                    });
                }
            }
        }
        let n = w(t.querySelector(".question-label-container, .qLabel, span.qLabel")), o = t.querySelectorAll('input[type="text"]:not([data-testid="phone-input"])');
        for (let t of o){
            let r1 = t;
            if (r1.disabled) continue;
            let o = r1.getAttribute("aria-label"), i = (P(n) ? n : o) || r1.id || "";
            i && e1.push({
                type: _(i),
                label: i,
                required: "true" === r1.getAttribute("aria-required"),
                $label: r1,
                $input: r1
            });
        }
        let a = t.querySelector("sdf-select-simple");
        if (a) {
            let t = a.getAttribute("aria-label"), r1 = t || "";
            if (r1) {
                if (L(r1)) continue;
                let t = a.querySelector("input");
                t || (t = a.querySelector(".MDFSelectBox__control"));
                let n = t || a, o = await (0, c.getSelectOptionsElement)(n, !1);
                if (o && o.length > 0) {
                    let t = o.map(j).filter((e1)=>e1.length > 0);
                    e1.push({
                        type: i.FIELD_TYPE.SELECT,
                        label: r1,
                        required: "true" === a.getAttribute("required"),
                        $label: a,
                        $input: a,
                        options: t
                    });
                } else e1.push({
                    type: i.FIELD_TYPE.SELECT,
                    label: r1,
                    required: "true" === a.getAttribute("required"),
                    $label: a,
                    $input: a,
                    options: []
                });
            }
        }
        let l = t.querySelector("textarea");
        if (l && !l.disabled) {
            let t = l.getAttribute("aria-label"), r1 = t || "";
            r1 && e1.push({
                type: i.FIELD_TYPE.TEXT,
                label: r1,
                required: !1,
                $label: l,
                $input: l
            });
        }
    }
    return e1;
}
async function U(e1, t, r1) {
    let n = e1.querySelector("sdf-radio-group");
    if (!n) return null;
    let o = Array.from(n.querySelectorAll("sdf-radio-button"));
    if (0 === o.length) return null;
    let a = [], l = [];
    for (let e1 of o){
        let t = e1.getAttribute("label"), r1 = e1.getAttribute("value");
        t ? (a.push(t), l.push(e1)) : r1 && (a.push(r1), l.push(e1));
    }
    if (0 === a.length) return null;
    let s = t.textContent?.replace("*", "").trim() || "", u = o[0]?.querySelector("input[type='radio']"), c = u || o[0];
    return {
        type: i.FIELD_TYPE.RADIOGROUP,
        label: s,
        required: r1,
        $label: t,
        $input: c,
        $radioParent: n,
        options: a
    };
}
_c15 = U;
async function H(e1, t, r1, n) {
    let o = document.getElementById(r1);
    if (!o) {
        let t = e1.querySelector('[role="combobox"]'), r1 = e1.querySelector('[role="button"][aria-expanded]'), n = e1.querySelector("sdf-select-simple");
        if (t) o = t;
        else if (r1) o = r1;
        else if (n) {
            let e1 = n.querySelector('[role="combobox"], [role="button"][aria-expanded], input, button');
            o = e1 || n;
        }
    }
    let a = o?.getAttribute("role"), l = o?.tagName?.toLowerCase() === "sdf-select-simple";
    if (!o || "combobox" !== a && "button" !== a && !l) return null;
    let s = await (0, c.getSelectOptionsElement)(o, !1);
    if (s && s.length > 0) {
        let e1 = s.map(j).filter((e1)=>e1.length > 0), r1 = t.textContent?.replace("*", "").trim() || "";
        return {
            type: i.FIELD_TYPE.SELECT,
            label: r1,
            required: n,
            $label: t,
            $input: o,
            options: e1
        };
    }
    return null;
}
_c16 = H;
function Y(e1, t, r1, n) {
    let o = document.getElementById(r1);
    if (!o || o.disabled || o instanceof HTMLInputElement && ("radio" === o.type || "checkbox" === o.type)) return null;
    let i = t.textContent?.replace("*", "").trim() || "";
    return {
        type: _(i),
        label: i,
        required: n,
        $label: t,
        $input: o
    };
}
_c17 = Y;
function z() {
    return document.querySelector(d);
}
function V(e1, t) {
    return Array.from(e1.querySelectorAll('input[role="combobox"]')).find((e1)=>e1.getAttribute("aria-label")?.trim().toLowerCase() === t.toLowerCase()) ?? null;
}
_c18 = V;
function W(e1) {
    return V(e1, "Race");
}
_c19 = W;
function G(e1) {
    return V(e1, "Ethnicity");
}
_c20 = G;
function K(e1) {
    return !!e1.disabled || "true" === e1.getAttribute("aria-disabled") || !!e1.closest?.("[disabled], [aria-disabled='true']");
}
_c21 = K;
function X(e1) {
    if (e1.type !== i.FIELD_TYPE.SELECT) return !1;
    let t = e1.$input;
    return !!t && ("vsidRace" === t.id || t.getAttribute?.("aria-label")?.trim().toLowerCase() === "race" && !!t.closest?.(d));
}
_c22 = X;
function J(e1) {
    if (e1.type !== i.FIELD_TYPE.SELECT) return !1;
    let t = e1.$input;
    return !!t && ("vsidEthinicity" === t.id || t.getAttribute?.("aria-label")?.trim().toLowerCase() === "ethnicity" && !!t.closest?.(d));
}
_c23 = J;
function Q() {
    let e1 = z();
    return !!(e1 && G(e1));
}
_c24 = Q;
function Z(e1) {
    let t = e1.closest(".vsid-item") || e1.parentElement;
    return t?.querySelector(".MDFSelectBox__single-value")?.textContent?.trim() || "";
}
_c25 = Z;
function ee() {
    let e1 = z();
    if (!e1) return !1;
    let t = G(e1);
    return !!t && "nothispanicorlatino" === Z(t).replace(/[^a-z]/gi, "").toLowerCase();
}
function et(e1) {
    let t = e1.some(J), r1 = e1.filter((e1)=>!!X(e1) && (t || K(e1.$input)));
    return {
        readyRules: e1.filter((e1)=>!r1.includes(e1)),
        deferredRaceRules: r1
    };
}
async function er(e1, t = W(e1)) {
    if (!t) return null;
    let r1 = K(t) ? null : await (0, c.getSelectOptionsElement)(t, !1), n = r1 ? r1.map(j).filter(Boolean) : [];
    return {
        type: i.FIELD_TYPE.SELECT,
        label: t.getAttribute("aria-label") || "Race",
        required: !1,
        $label: t,
        $input: t,
        options: n
    };
}
async function en() {
    let e1 = z();
    if (!e1) return null;
    let t = W(e1);
    return !t || K(t) ? null : await er(e1, t);
}
async function eo() {
    let e1 = [], t = z();
    if (!t) return e1;
    let r1 = (e1)=>{
        if (!e1) return "";
        let t = e1.cloneNode(!0);
        return t.querySelectorAll("sdf-icon-button, sdf-icon, .contents, .mdf-required-indicator").forEach((e1)=>e1.remove()), t.textContent?.trim() || "";
    }, n = Array.from(t.querySelectorAll('input[role="combobox"]'));
    for (let t of n){
        let n = null, o = t.closest(".vsid-component-padding-bottom, .padding-top");
        o && (n = o.querySelector("label.vsid-title, h4"));
        let a = r1(n);
        a || (a = t.getAttribute("aria-label") || "");
        let l = [];
        try {
            let e1 = await (0, c.getSelectOptionsElement)(t, !1);
            e1 && e1.length > 0 && (l = e1.map(j).filter((e1)=>e1.length > 0));
        } catch (e1) {
            console.warn("Failed to get options for VSID Select field:", e1);
        }
        e1.push({
            type: i.FIELD_TYPE.SELECT,
            label: a || "Unknown VSID Field",
            required: !1,
            $label: n || t,
            $input: t,
            options: l
        });
    }
    let o = Array.from(t.querySelectorAll("sdf-radio-group"));
    for (let t of o){
        let n = null, o = t.closest(".vsid-component-padding-bottom, .padding-top");
        o && (n = o.querySelector("h4, label.vsid-title"));
        let a = r1(n);
        a || (a = t.getAttribute("label") || "");
        let l = Array.from(t.querySelectorAll("sdf-radio-button")), s = [];
        for (let e1 of l){
            let t = e1.getAttribute("label") || e1.getAttribute("value");
            t && s.push(t);
        }
        if (s.length > 0) {
            let r1 = l[0].querySelector('input[type="radio"]') || l[0];
            e1.push({
                type: i.FIELD_TYPE.RADIOGROUP,
                label: a || "Unknown VSID Radio",
                required: !1,
                $label: n || t,
                $input: r1,
                $radioParent: t,
                options: s
            });
        }
    }
    let a = Array.from(t.querySelectorAll('input[type="checkbox"]'));
    for (let t of a){
        let n = t.closest(".vdl-checkbox");
        if (!n) continue;
        let o = n.querySelector("label"), a = r1(o);
        a && e1.push({
            type: i.FIELD_TYPE.CHECKBOX,
            label: a,
            required: null !== n.querySelector(".text-action-destructive"),
            $label: o || t,
            $checkboxs: [
                t
            ],
            options: [
                a
            ]
        });
    }
    return e1;
}
function ei(e1, t, r1) {
    let n = t.replace(/\*+/g, "").replace(/\s+/g, " ").trim();
    if (!n) return;
    let o = n, i = 2;
    for(; Object.prototype.hasOwnProperty.call(e1, o);)o = `${n} (${i++})`;
    e1[o] = r1;
}
function ea(e1) {
    let t = e1.options[e1.selectedIndex];
    return (t?.textContent ?? t?.value ?? "").trim();
}
function el(e1) {
    if ("SELECT" === e1.tagName) return ea(e1);
    let t = e1.querySelectorAll(".MDFSelectBox__single-value, .single-value, [class*='SingleValue'], [class*='single-value']");
    for (let e1 of t){
        let t = e1.textContent?.trim();
        if (t) return t;
    }
    let r1 = e1.closest("sdf-select-simple");
    if (r1) for (let e1 of r1.querySelectorAll(".MDFSelectBox__single-value, .single-value")){
        let t = e1.textContent?.trim();
        if (t) return t;
    }
    let n = e1.querySelector('input[type="text"], input[readonly], input:not([type])');
    if (n?.value?.trim()) return n.value.trim();
    let o = e1.getAttribute("aria-label")?.trim();
    if (o) return o;
    let i = e1.textContent?.trim() ?? "";
    return i.length > 400 ? `${i.slice(0, 400)}\u2026` : i;
}
function es(e1) {
    for (let t of e1.querySelectorAll("sdf-radio-button")){
        let e1 = t;
        if (e1.hasAttribute("selected") || "true" === e1.getAttribute("aria-checked")) return e1.getAttribute("label") || e1.getAttribute("value") || e1.textContent?.trim() || "";
        let r1 = t.querySelector('input[type="radio"]');
        if (r1?.checked) return e1.getAttribute("label") || e1.getAttribute("value") || r1.value || "";
    }
    return "";
}
function eu(e1, t) {
    let r1 = e1.querySelector(".mdf-label label");
    if (!r1) return;
    let n = r1.textContent?.replace(/\*+/g, "").replace(/\s+/g, " ").trim() ?? "";
    if (!n) return;
    let o = r1.getAttribute("for");
    if (o) {
        let e1 = document.getElementById(o);
        if (e1?.type === "checkbox") {
            let r1 = e1.closest(".vdl-checkbox"), o = r1?.querySelector("label")?.textContent?.trim() || n;
            ei(t, n, e1.checked ? o || "true" : "false");
            return;
        }
    }
    let i = e1.querySelector("sdf-radio-group");
    if (i) {
        ei(t, n, es(i));
        return;
    }
    let a = F(e1, r1);
    if (a) {
        if ("SELECT" === a.tagName) {
            ei(t, n, ea(a));
            return;
        }
        if (!I(a)) {
            ei(t, n, el(a));
            return;
        }
    }
    let l = e1.querySelector('select:not([name="phoneCountry"])');
    if (l) {
        ei(t, n, ea(l));
        return;
    }
    let s = null;
    if (o && (s = document.getElementById(o)), s || (s = e1.querySelector("textarea")), !s) {
        let t = e1.querySelectorAll('input.vdl-textbox, input[type="text"], input[type="email"], input[type="tel"], input[type="url"], input[type="number"]');
        for (let e1 of t)if ("phone-input" !== e1.getAttribute("data-testid") && "checkbox" !== e1.type && "radio" !== e1.type && "combobox" !== e1.getAttribute("role")) {
            s = e1;
            break;
        }
    }
    !s || s instanceof HTMLInputElement && "checkbox" === s.type || s instanceof HTMLInputElement && "radio" === s.type || ei(t, n, s.value ?? "");
}
function ec(e1) {
    let t = document.querySelector("#usePreferredName input[type='checkbox'], input[name='usePreferredName'][type='checkbox']");
    if (t?.isConnected) {
        let r1 = t.closest(".flex.flex-row") || t.closest('[class*="flex-row"]'), n = r1?.querySelector("span"), o = n?.textContent?.trim() || t.getAttribute("aria-label") || "I have a preferred or chosen name";
        ei(e1, "Preferred or chosen name", t.checked ? o : "false");
    }
    let r1 = document.querySelector("#consentCheckBox input[type='checkbox'], input[name='consentCheckBox'][type='checkbox'], .personal-info-consent input[type='checkbox']");
    if (r1?.isConnected) {
        let t = r1.closest(".vdl-checkbox"), n = t?.querySelector("label"), o = n?.textContent?.trim() || r1.getAttribute("aria-label") || "SMS consent";
        ei(e1, "Text message notifications (optional)", r1.checked ? o : "false");
    }
}
function ed(e1) {
    let t = Array.from(document.querySelectorAll(".login-form-container"));
    for (let r1 of t){
        for (let t of Array.from(r1.querySelectorAll("input"))){
            let r1 = t;
            if (!A(r1) || !f(r1)) continue;
            let n = x(r1), o = w(n) || v(r1.getAttribute("aria-label")) || v(r1.getAttribute("placeholder")) || v(r1.getAttribute("name")) || v(r1.id);
            o && ei(e1, o, r1.value ?? "");
        }
        let t = r1.querySelector('input[data-testid="phone-input"]');
        if (t && !t.disabled && f(t)) {
            let n = x(t), o = (0, u.normalizeAdpWorkforceNowPhoneLabel)(w(n) || v(t.getAttribute("aria-label")) || "Mobile Number");
            ei(e1, o, t.value ?? "");
            let i = (n ? M(n) : null) || t.closest('[role="group"]') || r1, a = i.querySelector('select[name="phoneCountry"]');
            a?.isConnected && !a.disabled && ei(e1, (0, u.getAdpWorkforceNowPhoneCountryCodeLabel)(o) || `${o} Country`, ea(a));
        }
    }
}
function ef(e1) {
    let t = (0, l.getOrderedNodesSafe)('.//label[@id and (contains(@id, "validated_label_mobile") or contains(@id, "validated_label_home"))]');
    for (let r1 of t){
        let t = (0, u.normalizeAdpWorkforceNowPhoneLabel)(r1.textContent);
        if (!t) continue;
        let n = M(r1);
        if (!n) continue;
        let o = n.querySelector('input[data-testid="phone-input"]');
        o && !o.disabled && ei(e1, t, o.value ?? "");
        let i = n.querySelector('select[name="phoneCountry"]');
        i && ei(e1, (0, u.getAdpWorkforceNowPhoneCountryCodeLabel)(t) || `${t} Country`, ea(i));
    }
}
function ep(e1, t) {
    let r1 = e1.querySelector(".question-label-container label.qLabel");
    if (!r1) return;
    let n = r1.textContent?.replace(/\*+/g, "").replace(/\s+/g, " ").trim() ?? "";
    if (!n) return;
    let o = e1.querySelector("sdf-radio-group");
    if (o) {
        ei(t, n, es(o));
        return;
    }
    let i = r1.getAttribute("for");
    if (i) {
        let e1 = document.getElementById(i);
        if (e1) {
            let r1 = e1.closest("sdf-select-simple");
            if ("combobox" === e1.getAttribute("role") || r1) {
                ei(t, n, el(r1 || e1));
                return;
            }
            if (e1 instanceof HTMLSelectElement) {
                ei(t, n, ea(e1));
                return;
            }
            if (e1 instanceof HTMLInputElement || e1 instanceof HTMLTextAreaElement) {
                "radio" !== e1.type && "checkbox" !== e1.type && ei(t, n, e1.value ?? "");
                return;
            }
        }
    }
    let a = e1.querySelector('[role="combobox"]');
    a && ei(t, n, el(a));
}
function em(e1) {
    let t = document.querySelector(".quesitions-container, .qContainerRowsWhite");
    if (!t) return;
    let r1 = (0, l.getOrderedNodesSafe)('.//div[contains(@class, "qMainDiv")]', t);
    for (let t of r1)ep(t, e1);
    let n = (0, l.getOrderedNodesSafe)('.//div[contains(@class, "additional-question")]', t);
    for (let t of n){
        let r1 = t.querySelector("sdf-radio-group");
        if (r1) {
            let n = t.querySelector(".question-label-container, .qLabel, span.qLabel"), o = n?.textContent?.replace(/\*+/g, "").trim() ?? "";
            o && ei(e1, o, es(r1));
        }
        for (let r1 of t.querySelectorAll('input[type="text"]:not([data-testid="phone-input"])')){
            let t = r1;
            if (t.disabled) continue;
            let n = t.getAttribute("aria-label") || t.id || "";
            n && ei(e1, n, t.value ?? "");
        }
        let n = t.querySelector("sdf-select-simple");
        if (n) {
            let r1 = n.getAttribute("aria-label")?.trim() || t.querySelector(".qLabel")?.textContent?.trim() || "Select";
            ei(e1, r1, el(n));
        }
        let o = t.querySelector("textarea");
        if (o && !o.disabled) {
            let t = o.getAttribute("aria-label")?.trim() || "Comment";
            ei(e1, t, o.value ?? "");
        }
    }
}
function eh(e1) {
    if (!e1) return "";
    let t = e1.cloneNode(!0);
    return t.querySelectorAll("sdf-icon-button, sdf-icon, .contents, .mdf-required-indicator").forEach((e1)=>e1.remove()), t.textContent?.trim() || "";
}
function eg(e1) {
    let t = document.querySelector(".personal-step-container.vsid-padding-container, .vsid-padding-container");
    if (t) {
        for (let r1 of t.querySelectorAll('input[role="combobox"]')){
            let t = r1, n = null, o = t.closest(".vsid-component-padding-bottom, .padding-top");
            o && (n = o.querySelector("label.vsid-title, h4"));
            let i = eh(n);
            i || (i = t.getAttribute("aria-label") || "Unknown VSID Field"), ei(e1, i, el(t));
        }
        for (let r1 of t.querySelectorAll("sdf-radio-group")){
            let t = r1, n = null, o = t.closest(".vsid-component-padding-bottom, .padding-top");
            o && (n = o.querySelector("h4, label.vsid-title"));
            let i = eh(n);
            i || (i = t.getAttribute("label") || "Unknown VSID Radio"), ei(e1, i, es(t));
        }
        for (let r1 of t.querySelectorAll('input[type="checkbox"]')){
            let t = r1, n = t.closest(".vdl-checkbox");
            if (!n) continue;
            let o = n.querySelector("label"), i = eh(o);
            i && ei(e1, i, t.checked ? i : "false");
        }
    }
}
function eb(e1) {
    let t = document.querySelector(".self-review-attestation");
    if (t) {
        let r1 = t.querySelector('input[type="checkbox"]');
        if (r1) {
            let n = t.querySelector("h3")?.textContent?.trim() || "Self Attestation", o = t.querySelector(".self-review-signature-checkbox label, label"), i = o?.textContent?.trim() || "Yes, I agree to sign electronically.";
            ei(e1, n, r1.checked ? i : "false");
        }
    }
    let r1 = document.getElementById("electronicSignature");
    if (r1 && !r1.disabled) {
        let t = null, n = r1.closest(".self-review-signature-label");
        n && (t = n.querySelector("label"));
        let o = t?.textContent?.trim() || r1.getAttribute("aria-label") || "Please type your full name.";
        ei(e1, o, r1.value ?? "");
    }
}
function ey() {
    let e1 = {}, t = (0, l.getOrderedNodesSafe)('.//div[contains(@class, "mdf-validated-field")]');
    for (let r1 of t)f(r1) && eu(r1, e1);
    return ed(e1), ec(e1), ef(e1), em(e1), eg(e1), eb(e1), {
        ...e1
    };
}
function ev(e1) {
    let t = ey(), { education: r1, employment: n, ...i } = t, { education: a, employment: l, ...u } = e1;
    (0, o.sendAutofillAnswerPairEvent)({
        formUrl: (0, s.useUrlStore).getState().currentTabUrl,
        autofillSnapshot: u,
        submitSnapshot: i,
        additionalAutofillData: {
            education: a,
            employment: l
        },
        additionalSubmitData: {
            education: r1,
            employment: n
        },
        source: "adp-workforcenow"
    });
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

},{}]},["6wZLi","fSz1H"], "fSz1H", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QUUsR0FBRSxJQUFFLE1BQU0sS0FBSyxHQUFFLFNBQVMsSUFBSSxDQUFBLEtBQUcsR0FBRSxhQUFhLFVBQVEsSUFBSSxPQUFPLENBQUEsS0FBRyxHQUFFLFNBQU87UUFBRyxPQUFPLEVBQUUsU0FBTyxJQUFFO1lBQUMsTUFBSyxFQUFFLFdBQVc7WUFBTyxPQUFNO1lBQUUsVUFBUztZQUFFLFFBQU87WUFBRSxRQUFPO1lBQUUsU0FBUTtRQUFDLElBQUU7SUFBSTtJQUFDLElBQUcsZUFBYSxFQUFFLGFBQWEsU0FBUTtRQUFDLElBQUksS0FBRSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsdUJBQXNCLEVBQUcsR0FBRSxDQUFDLElBQUcsSUFBRSxBQUFDLENBQUEsTUFBRyxFQUFFLEFBQUQsRUFBRyxJQUFJLEdBQUcsT0FBTyxDQUFBLEtBQUcsR0FBRSxTQUFPO1FBQUcsT0FBTTtZQUFDLE1BQUssRUFBRSxXQUFXO1lBQU8sT0FBTTtZQUFFLFVBQVM7WUFBRSxRQUFPO1lBQUUsUUFBTztZQUFFLFNBQVE7UUFBQztJQUFDO0lBQUMsT0FBTztBQUFJO09BQXJzQztBQUFzc0MsU0FBUyxFQUFFLEVBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQztJQUFFLElBQUksSUFBRSxFQUFFLGFBQWE7SUFBTyxJQUFHLENBQUMsR0FBRSxPQUFPO0lBQUssSUFBSSxJQUFFLFNBQVMsZUFBZTtJQUFHLElBQUcsQ0FBQyxLQUFHLGVBQWEsRUFBRSxNQUFLLE9BQU87SUFBSyxJQUFJLElBQUUsRUFBRSxRQUFRO0lBQWlCLElBQUcsQ0FBQyxHQUFFLE9BQU87SUFBSyxJQUFJLElBQUUsRUFBRSxjQUFjO0lBQVMsSUFBRyxDQUFDLEdBQUUsT0FBTztJQUFLLElBQUksSUFBRSxFQUFFLGFBQWEsVUFBUSxFQUFFLGFBQWEsUUFBUSxLQUFJLElBQUksVUFBUTtJQUFHLE9BQU07UUFBQyxNQUFLLEVBQUUsV0FBVztRQUFTLE9BQU07UUFBRSxVQUFTLENBQUM7UUFBRSxRQUFPO1FBQUUsWUFBVztZQUFDO1NBQUU7UUFBQyxTQUFRO1lBQUM7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QUFFO0lBQUcsT0FBTyxHQUFHLEtBQUcsR0FBRyxLQUFHLEdBQUcsS0FBRyxHQUFHLEtBQUcsR0FBRyxLQUFHLEdBQUcsS0FBRztRQUFDLEdBQUcsRUFBQztJQUFBO0FBQUM7QUFBQyxTQUFTLEdBQUcsRUFBQztJQUFFLElBQUksSUFBRSxNQUFLLEVBQUMsV0FBVSxFQUFDLEVBQUMsWUFBVyxDQUFDLEVBQUMsR0FBRyxHQUFFLEdBQUMsR0FBRSxFQUFDLFdBQVUsQ0FBQyxFQUFDLFlBQVcsQ0FBQyxFQUFDLEdBQUcsR0FBRSxHQUFDO0lBQUcsQ0FBQSxHQUFFLEVBQUUsMkJBQTBCLEVBQUc7UUFBQyxTQUFRLEFBQUMsQ0FBQSxHQUFFLEVBQUUsV0FBVSxFQUFHLFdBQVc7UUFBYyxrQkFBaUI7UUFBRSxnQkFBZTtRQUFFLHdCQUF1QjtZQUFDLFdBQVU7WUFBRSxZQUFXO1FBQUM7UUFBRSxzQkFBcUI7WUFBQyxXQUFVO1lBQUUsWUFBVztRQUFDO1FBQUUsUUFBTztJQUFrQjtBQUFFIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS0wYzZmMzVhOGJjODNiMGU3LmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL2FkcC13b3JrZm9yY2Vub3cvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxcYWRwLXdvcmtmb3JjZW5vd1xcXFxydWxlcy5qc1wiLFwiYnVuZGxlSWRcIjpcImVlYzY4MDI0MDQ1YmMyNWFcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiA1ZkZGMVxyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvYWRwLXdvcmtmb3JjZW5vdy9ydWxlcy5qc1xyXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi9hbnN3ZXIgLT4gM2NxWXMgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvYWRwLXdvcmtmb3JjZW5vdy9hbnN3ZXIuanNcclxuICogICAuL29wZXJhdGlvbnMgLT4gbElWNG4gID0+ICBzcmMvY29udGVudHMvc2l0ZXMvYWRwLXdvcmtmb3JjZW5vdy9vcGVyYXRpb25zLmpzXHJcbiAqICAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyAtPiBjSFVibCAgPT4gIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvYXV0b2ZpbGwtYW5zd2VyLXBhaXItdHJhY2tpbmcgLT4gYUNFbFogID0+ICBzcmMvY29udGVudHMvc2l0ZXMvYXV0b2ZpbGwtYW5zd2VyLXBhaXItdHJhY2tpbmcuanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqICAgfmNvcmUvcGhvbmUtY291bnRyeS1jb2RlIC0+IDhuRU53ICA9PiAgc3JjL2NvcmUvcGhvbmUtY291bnRyeS1jb2RlLmpzXHJcbiAqICAgfmNvcmUveHBhdGggLT4gYWdFNHUgID0+ICBzcmMvY29yZS94cGF0aC5qc1xyXG4gKiAgIH5zdG9yZS91cmwgLT4gYjUzTDMgID0+ICBzcmMvc3RvcmUvdXJsLmpzXHJcbiAqL1xyXG5cclxudmFyIG49ZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7bi5kZWZpbmVJbnRlcm9wRmxhZyhyKSxuLmV4cG9ydChyLFwiZ2V0UnVsZXNcIiwoKT0+bSksbi5leHBvcnQocixcImV4dHJhY3RHdWVzdExvZ2luRm9ybVJ1bGVzXCIsKCk9PlQpLG4uZXhwb3J0KHIsXCJnZXRBZHBRdWVzdGlvblRleHRGaWVsZFR5cGVcIiwoKT0+Xyksbi5leHBvcnQocixcImlzQWRwU2FsYXJ5Q3VycmVuY3lTZWxlY3RMYWJlbFwiLCgpPT5MKSxuLmV4cG9ydChyLFwiaGFzQWRwV29ya2ZvcmNlTm93VnNpZFJhY2VEZXBlbmRlbmN5XCIsKCk9PlEpLG4uZXhwb3J0KHIsXCJpc0FkcFdvcmtmb3JjZU5vd1ZzaWRSYWNlUmVxdWlyZWRBZnRlckV0aG5pY2l0eVwiLCgpPT5lZSksbi5leHBvcnQocixcInBhcnRpdGlvbkFkcFdvcmtmb3JjZU5vd1ZzaWRSYWNlUnVsZXNcIiwoKT0+ZXQpLG4uZXhwb3J0KHIsXCJnZXRFbmFibGVkQWRwV29ya2ZvcmNlTm93VnNpZFJhY2VSdWxlXCIsKCk9PmVuKSxuLmV4cG9ydChyLFwiZ2V0Rm9ybVNuYXBzaG90XCIsKCk9PmV5KSxuLmV4cG9ydChyLFwic3VibWl0SGFuZGxlclwiLCgpPT5ldik7dmFyIG89ZShcIn5jb250ZW50cy9zaXRlcy9hdXRvZmlsbC1hbnN3ZXItcGFpci10cmFja2luZ1wiKSxpPWUoXCJ+Y29yZS9lbnVtc1wiKSxhPWUoXCJ+Y29yZS9waG9uZS1jb3VudHJ5LWNvZGVcIiksbD1lKFwifmNvcmUveHBhdGhcIikscz1lKFwifnN0b3JlL3VybFwiKSx1PWUoXCIuL2Fuc3dlclwiKSxjPWUoXCIuL29wZXJhdGlvbnNcIik7bGV0IGQ9XCIucGVyc29uYWwtc3RlcC1jb250YWluZXIudnNpZC1wYWRkaW5nLWNvbnRhaW5lciwgLnZzaWQtcGFkZGluZy1jb250YWluZXJcIjtmdW5jdGlvbiBmKGUpe2lmKCFlfHwhZS5pc0Nvbm5lY3RlZHx8ZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQmJlwiaGlkZGVuXCI9PT1lLnR5cGUpcmV0dXJuITE7bGV0IHQ9ZS5jaGVja1Zpc2liaWxpdHk7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdCl0cnl7aWYoIXQuY2FsbChlLHtjaGVja1Zpc2liaWxpdHlDU1M6ITB9KSlyZXR1cm4hMX1jYXRjaHtpZighdC5jYWxsKGUpKXJldHVybiExfWxldCByPWU7Zm9yKDtyOyl7aWYoci5oYXNBdHRyaWJ1dGUoXCJoaWRkZW5cIil8fFwidHJ1ZVwiPT09ci5nZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKSlyZXR1cm4hMTtsZXQgZT13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShyKTtpZihcIm5vbmVcIj09PWUuZGlzcGxheXx8XCJoaWRkZW5cIj09PWUudmlzaWJpbGl0eSlyZXR1cm4hMTtyPXIucGFyZW50RWxlbWVudH1pZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmdldENsaWVudFJlY3RzKXtsZXQgdD1lLmdldENsaWVudFJlY3RzKCk7aWYoMD09PXQubGVuZ3RoKXJldHVybiExfXJldHVybiEwfWZ1bmN0aW9uIHAoZSl7bGV0IHQ9ZTtzd2l0Y2goZS50eXBlKXtjYXNlIGkuRklFTERfVFlQRS5URVhUOmNhc2UgaS5GSUVMRF9UWVBFLlNFQVJDSDpjYXNlIGkuRklFTERfVFlQRS5EQVRFOmNhc2UgaS5GSUVMRF9UWVBFLlNFTEVDVDpyZXR1cm4gZih0LiRpbnB1dD8/bnVsbCk7Y2FzZSBpLkZJRUxEX1RZUEUuQ0hFQ0tCT1g6aWYoIXQuJGNoZWNrYm94cz8ubGVuZ3RoKXJldHVybiExO3JldHVybiB0LiRjaGVja2JveHMuc29tZShlPT5mKGUpKTtjYXNlIGkuRklFTERfVFlQRS5SQURJT0dST1VQOnJldHVybiBmKHQuJHJhZGlvUGFyZW50Pz9udWxsKXx8Zih0LiRpbnB1dD8/bnVsbCk7Y2FzZSBpLkZJRUxEX1RZUEUuUkFESU86Y2FzZSBpLkZJRUxEX1RZUEUuTElTVEJPWDpjYXNlIGkuRklFTERfVFlQRS5NVUxUSV9TRUxFQ1Q6cmV0dXJuIGYodC4kaW5wdXQ/P251bGwpO2RlZmF1bHQ6cmV0dXJuITB9fWFzeW5jIGZ1bmN0aW9uIG0oKXtsZXQgZT1bXTtlLnB1c2goLi4uVCgpKTtsZXQgdD0oMCxsLmdldE9yZGVyZWROb2Rlc1NhZmUpKCcuLy9kaXZbY29udGFpbnMoQGNsYXNzLCBcIm1kZi12YWxpZGF0ZWQtZmllbGRcIildJyk7Zm9yKGxldCByIG9mIHQpe2lmKCFmKHIpKWNvbnRpbnVlO2xldCB0PWF3YWl0IGcocik7dCYmZS5wdXNoKHQpfWUucHVzaCguLi5OKCkpO2xldCByPWF3YWl0ICQoKTtlLnB1c2goLi4ucik7bGV0IG49YXdhaXQgcSgpO2UucHVzaCguLi5uKTtsZXQgbz1hd2FpdCBlbygpO2UucHVzaCguLi5vKTtsZXQgaT1hd2FpdCBoKCk7cmV0dXJuIGUucHVzaCguLi5pKSxlLmZpbHRlcihwKX1hc3luYyBmdW5jdGlvbiBoKCl7bGV0IGU9W10sdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGYtcmV2aWV3LWF0dGVzdGF0aW9uXCIpO2lmKHQpe2xldCByPXQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7aWYocil7bGV0IG49dC5xdWVyeVNlbGVjdG9yKFwiLnNlbGYtcmV2aWV3LXNpZ25hdHVyZS1jaGVja2JveCBsYWJlbCwgbGFiZWxcIiksbz10LnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKT8udGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJTZWxmIEF0dGVzdGF0aW9uXCIsYT1uPy50ZXh0Q29udGVudD8udHJpbSgpfHxcIlllcywgSSBhZ3JlZSB0byBzaWduIGVsZWN0cm9uaWNhbGx5LlwiLGw9XCJ0cnVlXCI9PT1yLmdldEF0dHJpYnV0ZShcImFyaWEtcmVxdWlyZWRcIil8fHIuaGFzQXR0cmlidXRlKFwicmVxdWlyZWRcIil8fCEhdC5xdWVyeVNlbGVjdG9yKFwiLnNlbGYtcmV2aWV3LXNpZ25hdHVyZS1yZXF1aXJlZFwiKTtlLnB1c2goe3R5cGU6aS5GSUVMRF9UWVBFLkNIRUNLQk9YLGxhYmVsOm8scmVxdWlyZWQ6bCwkbGFiZWw6bnx8ciwkY2hlY2tib3hzOltyXSxvcHRpb25zOlthXX0pfX1sZXQgcj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsZWN0cm9uaWNTaWduYXR1cmVcIik7aWYociYmIXIuZGlzYWJsZWQpe2xldCB0PW51bGwsbj1yLmNsb3Nlc3QoXCIuc2VsZi1yZXZpZXctc2lnbmF0dXJlLWxhYmVsXCIpO24mJih0PW4ucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpKTtsZXQgbz10Py50ZXh0Q29udGVudD8udHJpbSgpfHxyLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fFwiUGxlYXNlIHR5cGUgeW91ciBmdWxsIG5hbWUuXCIsYT1cInRydWVcIj09PXIuZ2V0QXR0cmlidXRlKFwiYXJpYS1yZXF1aXJlZFwiKXx8ci5oYXNBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiKXx8ISF0Py5jbGFzc0xpc3QuY29udGFpbnMoXCJyZXF1aXJlZFwiKTtlLnB1c2goe3R5cGU6aS5GSUVMRF9UWVBFLlRFWFQsbGFiZWw6byxyZXF1aXJlZDphLCRsYWJlbDp0fHxyLCRpbnB1dDpyfSl9cmV0dXJuIGV9YXN5bmMgZnVuY3Rpb24gZyhlKXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoXCIubWRmLWxhYmVsIGxhYmVsXCIpO2lmKCF0KXJldHVybiBudWxsO2xldCByPXQudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIjtpZighcilyZXR1cm4gbnVsbDtsZXQgbj1iKGUsdCksbz1uLnJlcXVpcmVkO2NvbnNvbGUuaW5mbyhcIltBZHBXb3JrZm9yY2VOb3dSZXF1aXJlZERlYnVnXSBub3JtYWwtZmllbGQtcmVxdWlyZWRuZXNzXCIsSlNPTi5zdHJpbmdpZnkoe2xhYmVsOncodCkscmVxdWlyZWQ6byxzaWduYWxzOm4uc2lnbmFsc30pKTtsZXQgaT1bKCk9Pk8oZSx0LG8pLCgpPT5CKGUsdCxvKSwoKT0+UihlLHQsbyksKCk9PnkoZSx0LG8pXTtmb3IobGV0IGUgb2YgaSl7bGV0IHQ9YXdhaXQgZSgpO2lmKHQpcmV0dXJuIHR9cmV0dXJuIG51bGx9ZnVuY3Rpb24gYihlLHQpe2xldCByPVtdO3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWRmLXJlcXVpcmVkLWluZGljYXRvclwiKSYmci5wdXNoKFwibGFiZWwtbWRmLXJlcXVpcmVkLWluZGljYXRvclwiKSx0LmNsYXNzTGlzdC5jb250YWlucyhcInJlcXVpcmVkLWluZGljYXRvclwiKSYmci5wdXNoKFwibGFiZWwtcmVxdWlyZWQtaW5kaWNhdG9yXCIpLHQucXVlcnlTZWxlY3RvcihcIi5tZGYtcmVxdWlyZWQtaW5kaWNhdG9yXCIpJiZyLnB1c2goXCJsYWJlbC1jaGlsZC1tZGYtcmVxdWlyZWQtaW5kaWNhdG9yXCIpLHQucXVlcnlTZWxlY3RvcihcIi5yZXF1aXJlZC1pbmRpY2F0b3JcIikmJnIucHVzaChcImxhYmVsLWNoaWxkLXJlcXVpcmVkLWluZGljYXRvclwiKTt0cnl7bGV0IGU9d2luZG93LmdldENvbXB1dGVkU3R5bGUodCxcIjo6YWZ0ZXJcIikuY29udGVudDtlPy5pbmNsdWRlcyhcIipcIikmJnIucHVzaChcImxhYmVsLWFmdGVyLWFzdGVyaXNrXCIpfWNhdGNoe31mb3IobGV0IHQgb2YgZS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgW3JvbGU9XCJjb21ib2JveFwiXScpKXQuaGFzQXR0cmlidXRlKFwicmVxdWlyZWRcIikmJnIucHVzaChcImNvbnRyb2wtcmVxdWlyZWRcIiksXCJ0cnVlXCI9PT10LmdldEF0dHJpYnV0ZShcImFyaWEtcmVxdWlyZWRcIikmJnIucHVzaChcImNvbnRyb2wtYXJpYS1yZXF1aXJlZFwiKTtyZXR1cm57cmVxdWlyZWQ6ci5sZW5ndGg+MCxzaWduYWxzOnJ9fWZ1bmN0aW9uIHkoZSx0LHIpe2xldCBuPW51bGwsbz10LmdldEF0dHJpYnV0ZShcImZvclwiKTtpZihvJiYobj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChvKSksIW4pe2xldCB0PWUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQudmRsLXRleHRib3gsIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sIGlucHV0W3R5cGU9XCJ0ZWxcIl0nKTtmb3IobGV0IGUgb2YgdClpZighZS5kaXNhYmxlZCYmIWUucmVhZE9ubHkmJlwidHJ1ZVwiIT09ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLXJlYWRvbmx5XCIpJiZcInBob25lLWlucHV0XCIhPT1lLmdldEF0dHJpYnV0ZShcImRhdGEtdGVzdGlkXCIpJiZcImNoZWNrYm94XCIhPT1lLnR5cGUmJlwicmFkaW9cIiE9PWUudHlwZSYmXCJjb21ib2JveFwiIT09ZS5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpKXtuPWU7YnJlYWt9fWlmKCFufHxuLmRpc2FibGVkfHxuLnJlYWRPbmx5fHxcInRydWVcIj09PW4uZ2V0QXR0cmlidXRlKFwiYXJpYS1yZWFkb25seVwiKXx8XCJjaGVja2JveFwiPT09bi50eXBlfHxcInJhZGlvXCI9PT1uLnR5cGV8fFwicGhvbmUtaW5wdXRcIj09PW4uZ2V0QXR0cmlidXRlKFwiZGF0YS10ZXN0aWRcIikpcmV0dXJuIG51bGw7bGV0IGE9dC50ZXh0Q29udGVudD8ucmVwbGFjZShcIipcIixcIlwiKS50cmltKCl8fFwiXCI7cmV0dXJue3R5cGU6aS5GSUVMRF9UWVBFLlRFWFQsbGFiZWw6YSxyZXF1aXJlZDpyLCRsYWJlbDp0LCRpbnB1dDpufX1mdW5jdGlvbiB2KGUpe3JldHVybihlfHxcIlwiKS5yZXBsYWNlKC9cXCorL2csXCJcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCl9ZnVuY3Rpb24gdyhlKXtpZighZSlyZXR1cm5cIlwiO2xldCB0PWUuY2xvbmVOb2RlKCEwKTtyZXR1cm4gdC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1kZi1yZXF1aXJlZC1pbmRpY2F0b3IsIC5yZXF1aXJlZC1pbmRpY2F0b3JcIikuZm9yRWFjaChlPT5lLnJlbW92ZSgpKSx2KHQudGV4dENvbnRlbnQpfWZ1bmN0aW9uIFMoZSl7bGV0IHQ9d2luZG93LkNTUztyZXR1cm4gdD8uZXNjYXBlP3QuZXNjYXBlKGUpOmUucmVwbGFjZSgvW1wiXFxcXF0vZyxcIlxcXFwkJlwiKX1mdW5jdGlvbiBFKGUsdCl7bGV0IHI9dih0KS50b0xvd2VyQ2FzZSgpO3JldHVybiByP0FycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwibGFiZWwsIC5zZGYtbGFiZWwsIC5pbnB1dC1sYWJlbFwiKSkuZmluZChlPT52KGUudGV4dENvbnRlbnQpLnRvTG93ZXJDYXNlKCk9PT1yKT8/bnVsbDpudWxsfWZ1bmN0aW9uIHgoZSx0PWRvY3VtZW50KXtsZXQgcj1lLmdldEF0dHJpYnV0ZShcImlkXCIpO2lmKHIpe2xldCBlPXQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtTKHIpfVwiXWApO2lmKGUpcmV0dXJuIGV9bGV0IG49ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIik7aWYobilmb3IobGV0IGUgb2Ygbi5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKSl7bGV0IHI9dC5xdWVyeVNlbGVjdG9yKGAjJHtTKGUpfWApO2lmKHIpcmV0dXJuIHJ9bGV0IG89ZS5jbG9zZXN0KFwiLnZkbC1maWVsZCwgLm1kZi12YWxpZGF0ZWQtZmllbGQsIC5ycnVpX19pbnB1dCwgLmZvcm0tZ3JvdXAsIC5maWVsZC1jb250YWluZXIsIFtyb2xlPSdncm91cCddXCIpLGk9bz8ucXVlcnlTZWxlY3RvcihcImxhYmVsLCAuc2RmLWxhYmVsLCAuaW5wdXQtbGFiZWxcIik7aWYoaSlyZXR1cm4gaTtsZXQgYT1lLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIik7cmV0dXJuIGE/RSh0LGEpOm51bGx9ZnVuY3Rpb24gQyhlLHQpe3JldHVybiBlLmhhc0F0dHJpYnV0ZShcInJlcXVpcmVkXCIpfHxcInRydWVcIj09PWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1yZXF1aXJlZFwiKXx8ISF0Py5xdWVyeVNlbGVjdG9yKFwiLm1kZi1yZXF1aXJlZC1pbmRpY2F0b3IsIC5yZXF1aXJlZC1pbmRpY2F0b3JcIil8fCEhdD8uY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVxdWlyZWQtaW5kaWNhdG9yXCIpfWZ1bmN0aW9uIEEoZSl7cmV0dXJuIWUuZGlzYWJsZWQmJiFlLnJlYWRPbmx5JiZcInRydWVcIiE9PWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1yZWFkb25seVwiKSYmXCJwaG9uZS1pbnB1dFwiIT09ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlc3RpZFwiKSYmXCJjb21ib2JveFwiIT09ZS5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpJiZbXCJcIixcInRleHRcIixcImVtYWlsXCIsXCJ0ZWxcIixcInVybFwiLFwibnVtYmVyXCJdLmluY2x1ZGVzKGUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKXx8ZS50eXBlfHxcIlwiKX1mdW5jdGlvbiBrKGUpe3JldHVybiBBcnJheS5mcm9tKGUub3B0aW9ucykubWFwKGU9PmUudGV4dENvbnRlbnQ/LnRyaW0oKXx8ZS52YWx1ZS50cmltKCkpLmZpbHRlcihlPT5lLmxlbmd0aD4wKX1mdW5jdGlvbiBUKGU9ZG9jdW1lbnQpe2xldCB0PVtdLHI9bmV3IFdlYWtTZXQsbj1uZXcgV2Vha1NldCxvPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiLmxvZ2luLWZvcm0tY29udGFpbmVyXCIpKTtmb3IobGV0IGwgb2Ygbyl7Zm9yKGxldCBuIG9mIEFycmF5LmZyb20obC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikpKXtsZXQgbz1uO2lmKCFBKG8pfHxyLmhhcyhvKXx8IWYobykpY29udGludWU7bGV0IGE9eChvLGUpLGw9dyhhKXx8dihvLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIikpfHx2KG8uZ2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIikpfHx2KG8uZ2V0QXR0cmlidXRlKFwibmFtZVwiKSl8fHYoby5pZCk7bCYmKHIuYWRkKG8pLHQucHVzaCh7dHlwZTppLkZJRUxEX1RZUEUuVEVYVCxsYWJlbDpsLHJlcXVpcmVkOkMobyxhKSwkbGFiZWw6YXx8bywkaW5wdXQ6b30pKX1sZXQgbz1sLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2RhdGEtdGVzdGlkPVwicGhvbmUtaW5wdXRcIl0nKTtpZihvJiYhby5kaXNhYmxlZCYmIXIuaGFzKG8pJiZmKG8pKXtsZXQgcz14KG8sZSksYz13KHMpfHx2KG8uZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSl8fFwiTW9iaWxlIE51bWJlclwiLGQ9KDAsdS5ub3JtYWxpemVBZHBXb3JrZm9yY2VOb3dQaG9uZUxhYmVsKShjKTtyLmFkZChvKTtsZXQgZj0ocz9NKHMpOm51bGwpfHxvLmNsb3Nlc3QoJ1tyb2xlPVwiZ3JvdXBcIl0nKXx8bCxwPWYucXVlcnlTZWxlY3Rvcignc2VsZWN0W25hbWU9XCJwaG9uZUNvdW50cnlcIl0nKTtpZihwPy5pc0Nvbm5lY3RlZCYmIXAuZGlzYWJsZWQmJiFuLmhhcyhwKSl7bi5hZGQocCk7bGV0IGU9KDAsdS5nZXRBZHBXb3JrZm9yY2VOb3dQaG9uZUNvdW50cnlDb2RlTGFiZWwpKGQpfHxgJHtkfSBDb3VudHJ5YDt0LnB1c2goe3R5cGU6aS5GSUVMRF9UWVBFLlNFTEVDVCxsYWJlbDplLHJlcXVpcmVkOkMocCxzKSwkbGFiZWw6c3x8cCwkaW5wdXQ6cCxvcHRpb25zOmsocCksZGVzY3JpcHRpb246YS5QSE9ORV9DT1VOVFJZX0NPREVfREVTQ1JJUFRJT059KX10LnB1c2goe3R5cGU6aS5GSUVMRF9UWVBFLlRFWFQsbGFiZWw6ZCxyZXF1aXJlZDpDKG8scyksJGxhYmVsOnN8fG8sJGlucHV0Om8sZGVzY3JpcHRpb246YS5MT0NBTF9QSE9ORV9ERVNDUklQVElPTn0pfX1yZXR1cm4gdH1mdW5jdGlvbiBGKGUsdCl7bGV0IHI9KCk9PntsZXQgcj10LmdldEF0dHJpYnV0ZShcImlkXCIpO2lmKCFyKXJldHVybiBudWxsO2ZvcihsZXQgdCBvZiBlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwiY29tYm9ib3hcIl0nKSl7bGV0IGU9KHQuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIpfHxcIlwiKS5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKTtpZihlLmluY2x1ZGVzKHIpKXJldHVybiB0fXJldHVybiBudWxsfSxuPXQuZ2V0QXR0cmlidXRlKFwiZm9yXCIpO2lmKG4pe2xldCB0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG4pO2lmKHQpe2lmKEkodCkpe2xldCB0PXIoKXx8ZS5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cImNvbWJvYm94XCJdJyk7aWYodClyZXR1cm4gdH1yZXR1cm4gdH19bGV0IG89cigpO3JldHVybiBvfHxlLnF1ZXJ5U2VsZWN0b3IoJ1tyb2xlPVwiY29tYm9ib3hcIl0nKX1mdW5jdGlvbiBJKGUpe2lmKFwiSU5QVVRcIiE9PWUudGFnTmFtZSlyZXR1cm4hMTtsZXQgdD1lLnR5cGU7cmV0dXJuW1widGV4dFwiLFwiZW1haWxcIixcInRlbFwiLFwidXJsXCIsXCJzZWFyY2hcIixcIm51bWJlclwiLFwicGFzc3dvcmRcIl0uaW5jbHVkZXModCkmJlwiY29tYm9ib3hcIiE9PWUuZ2V0QXR0cmlidXRlKFwicm9sZVwiKX1mdW5jdGlvbiBqKGUpe2xldCB0PWUucXVlcnlTZWxlY3RvcihcIi5mbGV4Lmp1c3RpZnktYmV0d2VlblwiKTtpZih0KXtsZXQgZT10LmNsb25lTm9kZSghMCk7cmV0dXJuIGUucXVlcnlTZWxlY3RvckFsbChcInNkZi1pY29uLCBzdmcsIGlcIikuZm9yRWFjaChlPT5lLnJlbW92ZSgpKSxlLnRleHRDb250ZW50Py50cmltKCl8fFwiXCJ9bGV0IHI9ZS5jbG9uZU5vZGUoITApO3JldHVybiByLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZGYtaWNvbiwgc3ZnLCBpXCIpLmZvckVhY2goZT0+ZS5yZW1vdmUoKSksci50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwifWZ1bmN0aW9uIEQoZSl7cmV0dXJuIGUucmVwbGFjZSgvXFwqKy9nLFwiXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpLnRvTG93ZXJDYXNlKCl9ZnVuY3Rpb24gUChlKXtyZXR1cm4vXFxiZGVzaXJlZCBzYWxhcnlcXGIvLnRlc3QoRChlKSl9ZnVuY3Rpb24gXyhlKXtsZXQgdD1EKGUpO3JldHVybi9cXGIoc2FsYXJ5fGNvbXBlbnNhdGlvbnxwYXkpXFxiLy50ZXN0KHQpPy9cXGIocmFuZ2V8bWluaW11bSBhbmQgbWF4aW11bXxtaW4gYW5kIG1heClcXGIvLnRlc3QodCk/aS5GSUVMRF9UWVBFLlRFWFQ6aS5GSUVMRF9UWVBFLk5VTUJFUjppLkZJRUxEX1RZUEUuVEVYVH1mdW5jdGlvbiBMKGUpe3JldHVyblwic2VsZWN0IGN1cnJlbmN5IHR5cGVcIj09PUQoZSl9YXN5bmMgZnVuY3Rpb24gUihlLHQscil7bGV0IG49dC50ZXh0Q29udGVudD8ucmVwbGFjZShcIipcIixcIlwiKS50cmltKCl8fFwiXCIsbz1uLnRvTG93ZXJDYXNlKCk7aWYoXCJjb3VudHJ5XCI9PT1vKXtsZXQgbj1GKGUsdCl8fGUucXVlcnlTZWxlY3RvcignW3JvbGU9XCJjb21ib2JveFwiXScpO2lmKCFuKXJldHVybiBudWxsO2xldCBvPVtdO2lmKFwiU0VMRUNUXCI9PT1uLnRhZ05hbWUpbz1BcnJheS5mcm9tKG4ub3B0aW9ucykubWFwKGU9PmUudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIikuZmlsdGVyKGU9PmUubGVuZ3RoPjApO2Vsc2UgaWYoXCJjb21ib2JveFwiPT09bi5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpKXtsZXQgZT1hd2FpdCAoMCxjLmdldFNlbGVjdE9wdGlvbnNFbGVtZW50KShuLCExKTtvPShlfHxbXSkubWFwKGopLmZpbHRlcihlPT5lLmxlbmd0aD4wKX1yZXR1cm57dHlwZTppLkZJRUxEX1RZUEUuU0VMRUNULGxhYmVsOlwiQ291bnRyeVwiLHJlcXVpcmVkOnIsJGxhYmVsOnQsJGlucHV0Om4sb3B0aW9uczpvfX1sZXQgYT1GKGUsdCk7aWYoYSYmSShhKSlyZXR1cm4gbnVsbDtpZighYSl7bGV0IG89ZS5xdWVyeVNlbGVjdG9yKCdzZWxlY3Q6bm90KFtuYW1lPVwicGhvbmVDb3VudHJ5XCJdKScpO2lmKG8pe2xldCBlPUFycmF5LmZyb20oby5vcHRpb25zKS5tYXAoZT0+ZS50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwiKS5maWx0ZXIoZT0+ZS5sZW5ndGg+MCk7aWYoZS5sZW5ndGg+MClyZXR1cm57dHlwZTppLkZJRUxEX1RZUEUuU0VMRUNULGxhYmVsOm4scmVxdWlyZWQ6ciwkbGFiZWw6dCwkaW5wdXQ6byxvcHRpb25zOmV9fXJldHVybiBudWxsfWlmKFwiU0VMRUNUXCI9PT1hLnRhZ05hbWUpe2xldCBlPWEsbz1BcnJheS5mcm9tKGUub3B0aW9ucykubWFwKGU9PmUudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIikuZmlsdGVyKGU9PmUubGVuZ3RoPjApO3JldHVybiBvLmxlbmd0aD4wP3t0eXBlOmkuRklFTERfVFlQRS5TRUxFQ1QsbGFiZWw6bixyZXF1aXJlZDpyLCRsYWJlbDp0LCRpbnB1dDplLG9wdGlvbnM6b306bnVsbH1pZihcImNvbWJvYm94XCI9PT1hLmdldEF0dHJpYnV0ZShcInJvbGVcIikpe2xldCBlPWF3YWl0ICgwLGMuZ2V0U2VsZWN0T3B0aW9uc0VsZW1lbnQpKGEsITEpLG89KGV8fFtdKS5tYXAoaikuZmlsdGVyKGU9PmUubGVuZ3RoPjApO3JldHVybnt0eXBlOmkuRklFTERfVFlQRS5TRUxFQ1QsbGFiZWw6bixyZXF1aXJlZDpyLCRsYWJlbDp0LCRpbnB1dDphLG9wdGlvbnM6b319cmV0dXJuIG51bGx9ZnVuY3Rpb24gTyhlLHQscil7bGV0IG49dC5nZXRBdHRyaWJ1dGUoXCJmb3JcIik7aWYoIW4pcmV0dXJuIG51bGw7bGV0IG89ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobik7aWYoIW98fFwiY2hlY2tib3hcIiE9PW8udHlwZSlyZXR1cm4gbnVsbDtsZXQgYT1vLmNsb3Nlc3QoXCIudmRsLWNoZWNrYm94XCIpO2lmKCFhKXJldHVybiBudWxsO2xldCBsPWEucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpO2lmKCFsKXJldHVybiBudWxsO2xldCBzPWwudGV4dENvbnRlbnQ/LnRyaW0oKXx8dC50ZXh0Q29udGVudD8ucmVwbGFjZShcIipcIixcIlwiKS50cmltKCl8fFwiXCI7cmV0dXJue3R5cGU6aS5GSUVMRF9UWVBFLkNIRUNLQk9YLGxhYmVsOnMscmVxdWlyZWQ6ITEsJGxhYmVsOmwsJGNoZWNrYm94czpbb10sb3B0aW9uczpbc119fWZ1bmN0aW9uIE0oZSl7bGV0IHQ9ZS5jbG9zZXN0KCdbcm9sZT1cImdyb3VwXCJdJyk7cmV0dXJuIHR8fGUuY2xvc2VzdChcIi5tZGYtdmFsaWRhdGVkLWZpZWxkXCIpPy5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cImdyb3VwXCJdJyl8fG51bGx9ZnVuY3Rpb24gTigpe2xldCBlPVtdLHQ9W10scj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBlcnNvbmFsLXN0ZXAtY29udGFpbmVyXCIpO3ImJnQucHVzaChyKSx0LnB1c2goZG9jdW1lbnQpO2xldCBuPWU9Pntmb3IobGV0IHIgb2YgdClmb3IobGV0IHQgb2YgZSl7bGV0IGU9ci5xdWVyeVNlbGVjdG9yKHQpO2lmKGU/LmlzQ29ubmVjdGVkKXJldHVybiBlfXJldHVybiBudWxsfSxvPW4oW1wiI3VzZVByZWZlcnJlZE5hbWUgaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiLCdpbnB1dFtuYW1lPVwidXNlUHJlZmVycmVkTmFtZVwiXVt0eXBlPVwiY2hlY2tib3hcIl0nXSk7aWYobyl7bGV0IHQ9by5jbG9zZXN0KFwiLnZkbC1jaGVja2JveFwiKSxyPW8uY2xvc2VzdChcIi5mbGV4LmZsZXgtcm93XCIpfHxvLmNsb3Nlc3QoJ1tjbGFzcyo9XCJmbGV4LXJvd1wiXScpLG49cj8ucXVlcnlTZWxlY3RvcihcInNwYW5cIiksYT1uPy50ZXh0Q29udGVudD8udHJpbSgpfHxvLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fHQ/LmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fFwiSSBoYXZlIGEgcHJlZmVycmVkIG9yIGNob3NlbiBuYW1lXCI7ZS5wdXNoKHt0eXBlOmkuRklFTERfVFlQRS5DSEVDS0JPWCxsYWJlbDpcIlByZWZlcnJlZCBvciBjaG9zZW4gbmFtZVwiLHJlcXVpcmVkOlwidHJ1ZVwiPT09by5nZXRBdHRyaWJ1dGUoXCJhcmlhLXJlcXVpcmVkXCIpLCRsYWJlbDpufHx0fHxvLCRjaGVja2JveHM6W29dLG9wdGlvbnM6W2FdfSl9bGV0IGE9bihbXCIjY29uc2VudENoZWNrQm94IGlucHV0W3R5cGU9J2NoZWNrYm94J11cIiwnaW5wdXRbbmFtZT1cImNvbnNlbnRDaGVja0JveFwiXVt0eXBlPVwiY2hlY2tib3hcIl0nLFwiLnBlcnNvbmFsLWluZm8tY29uc2VudCBpbnB1dFt0eXBlPSdjaGVja2JveCddXCJdKTtpZihhKXtsZXQgdD1hLmNsb3Nlc3QoXCIudmRsLWNoZWNrYm94XCIpLHI9dD8ucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpLG49cj8udGV4dENvbnRlbnQ/LnRyaW0oKXx8YS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpfHxcIihPcHRpb25hbCkgSSB3b3VsZCBsaWtlIHRvIHJlY2VpdmUgdGV4dCBtZXNzYWdlcyB0byB0aGlzIG51bWJlciBhYm91dCBteSBqb2IgYXBwbGljYXRpb24uXCI7ZS5wdXNoKHt0eXBlOmkuRklFTERfVFlQRS5DSEVDS0JPWCxsYWJlbDpcIlRleHQgbWVzc2FnZSBub3RpZmljYXRpb25zIChvcHRpb25hbClcIixyZXF1aXJlZDpcInRydWVcIj09PWEuZ2V0QXR0cmlidXRlKFwiYXJpYS1yZXF1aXJlZFwiKSwkbGFiZWw6cnx8dHx8YSwkY2hlY2tib3hzOlthXSxvcHRpb25zOltuXX0pfXJldHVybiBlfWFzeW5jIGZ1bmN0aW9uICQoKXtsZXQgZT1bXSx0PW5ldyBXZWFrU2V0LHI9bmV3IFdlYWtTZXQsbj0oMCxsLmdldE9yZGVyZWROb2Rlc1NhZmUpKCcuLy9sYWJlbFtAaWQgYW5kIChjb250YWlucyhAaWQsIFwidmFsaWRhdGVkX2xhYmVsX21vYmlsZVwiKSBvciBjb250YWlucyhAaWQsIFwidmFsaWRhdGVkX2xhYmVsX2hvbWVcIikpXScpO2ZvcihsZXQgbyBvZiBuKXtsZXQgbj0oMCx1Lm5vcm1hbGl6ZUFkcFdvcmtmb3JjZU5vd1Bob25lTGFiZWwpKG8udGV4dENvbnRlbnQpO2lmKCFuKWNvbnRpbnVlO2xldCBsPW51bGwhPT1vLnF1ZXJ5U2VsZWN0b3IoXCIubWRmLXJlcXVpcmVkLWluZGljYXRvclwiKSxzPU0obyk7aWYoIXMpY29udGludWU7bGV0IGM9cy5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbbmFtZT1cInBob25lQ291bnRyeVwiXScpO2lmKGMmJiFyLmhhcyhjKSl7ci5hZGQoYyk7bGV0IHQ9QXJyYXkuZnJvbShjLm9wdGlvbnMpLm1hcChlPT5lLnRleHRDb250ZW50Py50cmltKCl8fFwiXCIpLmZpbHRlcihlPT5lLmxlbmd0aD4wKSxzPSgwLHUuZ2V0QWRwV29ya2ZvcmNlTm93UGhvbmVDb3VudHJ5Q29kZUxhYmVsKShuKXx8YCR7bn0gQ291bnRyeWA7ZS5wdXNoKHt0eXBlOmkuRklFTERfVFlQRS5TRUxFQ1QsbGFiZWw6cyxyZXF1aXJlZDpsLCRsYWJlbDpvLCRpbnB1dDpjLG9wdGlvbnM6dCxkZXNjcmlwdGlvbjphLlBIT05FX0NPVU5UUllfQ09ERV9ERVNDUklQVElPTn0pfWxldCBkPXMucXVlcnlTZWxlY3RvcignaW5wdXRbZGF0YS10ZXN0aWQ9XCJwaG9uZS1pbnB1dFwiXScpOyFkfHxkLmRpc2FibGVkfHx0LmhhcyhkKXx8KHQuYWRkKGQpLGUucHVzaCh7dHlwZTppLkZJRUxEX1RZUEUuVEVYVCxsYWJlbDpuLHJlcXVpcmVkOmwsJGxhYmVsOm8sJGlucHV0OmQsZGVzY3JpcHRpb246YS5MT0NBTF9QSE9ORV9ERVNDUklQVElPTn0pKX1yZXR1cm4gZX1hc3luYyBmdW5jdGlvbiBCKGUsdCxyKXtsZXQgbj1lLnF1ZXJ5U2VsZWN0b3IoXCJzZGYtcmFkaW8tZ3JvdXBcIik7aWYoIW4pcmV0dXJuIG51bGw7bGV0IG89QXJyYXkuZnJvbShuLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZGYtcmFkaW8tYnV0dG9uXCIpKTtpZigwPT09by5sZW5ndGgpcmV0dXJuIG51bGw7bGV0IGE9W10sbD1bXTtmb3IobGV0IGUgb2Ygbyl7bGV0IHQ9ZS5nZXRBdHRyaWJ1dGUoXCJsYWJlbFwiKSxyPWUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik7dD8oYS5wdXNoKHQpLGwucHVzaChlKSk6ciYmKGEucHVzaChyKSxsLnB1c2goZSkpfWlmKDA9PT1hLmxlbmd0aClyZXR1cm4gbnVsbDtsZXQgcz10LnRleHRDb250ZW50Py5yZXBsYWNlKFwiKlwiLFwiXCIpLnRyaW0oKXx8XCJcIix1PW9bMF0/LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSdyYWRpbyddXCIpLGM9dXx8b1swXTtyZXR1cm57dHlwZTppLkZJRUxEX1RZUEUuUkFESU9HUk9VUCxsYWJlbDpzLHJlcXVpcmVkOnIsJGxhYmVsOnQsJGlucHV0OmMsJHJhZGlvUGFyZW50Om4sb3B0aW9uczphfX1hc3luYyBmdW5jdGlvbiBxKCl7bGV0IGU9W10sdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXNpdGlvbnMtY29udGFpbmVyLCAucUNvbnRhaW5lclJvd3NXaGl0ZVwiKTtpZighdClyZXR1cm4gZTtsZXQgcj0oMCxsLmdldE9yZGVyZWROb2Rlc1NhZmUpKCcuLy9kaXZbY29udGFpbnMoQGNsYXNzLCBcInFNYWluRGl2XCIpXScsdCk7Zm9yKGxldCB0IG9mIHIpe2xldCByPXQucXVlcnlTZWxlY3RvcihcIi5xdWVzdGlvbi1sYWJlbC1jb250YWluZXIgbGFiZWwucUxhYmVsXCIpO2lmKCFyKWNvbnRpbnVlO2xldCBuPXIudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIjtpZighbiljb250aW51ZTtsZXQgbz1udWxsIT09ci5xdWVyeVNlbGVjdG9yKFwiLm1kZi1yZXF1aXJlZC1pbmRpY2F0b3JcIik7bi5yZXBsYWNlKFwiKlwiLFwiXCIpLnRyaW0oKTtsZXQgaT1yLmdldEF0dHJpYnV0ZShcImZvclwiKTtpZighaSljb250aW51ZTtsZXQgYT1bKCk9PlUodCxyLG8pLCgpPT5IKHQscixpLG8pLCgpPT5ZKHQscixpLG8pXTtmb3IobGV0IHQgb2YgYSl7bGV0IHI9YXdhaXQgdCgpO2lmKHIpe2UucHVzaChyKTticmVha319fWxldCBuPSgwLGwuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoJy4vL2Rpdltjb250YWlucyhAY2xhc3MsIFwiYWRkaXRpb25hbC1xdWVzdGlvblwiKV0nLHQpO2ZvcihsZXQgdCBvZiBuKXtsZXQgcj10LnF1ZXJ5U2VsZWN0b3IoXCJzZGYtcmFkaW8tZ3JvdXBcIik7aWYocil7bGV0IG49dC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0aW9uLWxhYmVsLWNvbnRhaW5lciwgLnFMYWJlbCwgc3Bhbi5xTGFiZWxcIik7aWYobil7bGV0IHQ9bi50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwiLG89QXJyYXkuZnJvbShyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZGYtcmFkaW8tYnV0dG9uXCIpKSxhPVtdO2ZvcihsZXQgZSBvZiBvKXtsZXQgdD1lLmdldEF0dHJpYnV0ZShcImxhYmVsXCIpLHI9ZS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTt0P2EucHVzaCh0KTpyJiZhLnB1c2gocil9aWYoYS5sZW5ndGg+MCYmIVAodCkpe2xldCBsPW9bMF0/LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSdyYWRpbyddXCIpLHM9bHx8b1swXTtlLnB1c2goe3R5cGU6aS5GSUVMRF9UWVBFLlJBRElPR1JPVVAsbGFiZWw6dCxyZXF1aXJlZDohMSwkbGFiZWw6biwkaW5wdXQ6cywkcmFkaW9QYXJlbnQ6cixvcHRpb25zOmF9KX19fWxldCBuPXcodC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0aW9uLWxhYmVsLWNvbnRhaW5lciwgLnFMYWJlbCwgc3Bhbi5xTGFiZWxcIikpLG89dC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwidGV4dFwiXTpub3QoW2RhdGEtdGVzdGlkPVwicGhvbmUtaW5wdXRcIl0pJyk7Zm9yKGxldCB0IG9mIG8pe2xldCByPXQ7aWYoci5kaXNhYmxlZCljb250aW51ZTtsZXQgbz1yLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiksaT0oUChuKT9uOm8pfHxyLmlkfHxcIlwiO2kmJmUucHVzaCh7dHlwZTpfKGkpLGxhYmVsOmkscmVxdWlyZWQ6XCJ0cnVlXCI9PT1yLmdldEF0dHJpYnV0ZShcImFyaWEtcmVxdWlyZWRcIiksJGxhYmVsOnIsJGlucHV0OnJ9KX1sZXQgYT10LnF1ZXJ5U2VsZWN0b3IoXCJzZGYtc2VsZWN0LXNpbXBsZVwiKTtpZihhKXtsZXQgdD1hLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIikscj10fHxcIlwiO2lmKHIpe2lmKEwocikpY29udGludWU7bGV0IHQ9YS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7dHx8KHQ9YS5xdWVyeVNlbGVjdG9yKFwiLk1ERlNlbGVjdEJveF9fY29udHJvbFwiKSk7bGV0IG49dHx8YSxvPWF3YWl0ICgwLGMuZ2V0U2VsZWN0T3B0aW9uc0VsZW1lbnQpKG4sITEpO2lmKG8mJm8ubGVuZ3RoPjApe2xldCB0PW8ubWFwKGopLmZpbHRlcihlPT5lLmxlbmd0aD4wKTtlLnB1c2goe3R5cGU6aS5GSUVMRF9UWVBFLlNFTEVDVCxsYWJlbDpyLHJlcXVpcmVkOlwidHJ1ZVwiPT09YS5nZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiKSwkbGFiZWw6YSwkaW5wdXQ6YSxvcHRpb25zOnR9KX1lbHNlIGUucHVzaCh7dHlwZTppLkZJRUxEX1RZUEUuU0VMRUNULGxhYmVsOnIscmVxdWlyZWQ6XCJ0cnVlXCI9PT1hLmdldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIpLCRsYWJlbDphLCRpbnB1dDphLG9wdGlvbnM6W119KX19bGV0IGw9dC5xdWVyeVNlbGVjdG9yKFwidGV4dGFyZWFcIik7aWYobCYmIWwuZGlzYWJsZWQpe2xldCB0PWwuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSxyPXR8fFwiXCI7ciYmZS5wdXNoKHt0eXBlOmkuRklFTERfVFlQRS5URVhULGxhYmVsOnIscmVxdWlyZWQ6ITEsJGxhYmVsOmwsJGlucHV0Omx9KX19cmV0dXJuIGV9YXN5bmMgZnVuY3Rpb24gVShlLHQscil7bGV0IG49ZS5xdWVyeVNlbGVjdG9yKFwic2RmLXJhZGlvLWdyb3VwXCIpO2lmKCFuKXJldHVybiBudWxsO2xldCBvPUFycmF5LmZyb20obi5xdWVyeVNlbGVjdG9yQWxsKFwic2RmLXJhZGlvLWJ1dHRvblwiKSk7aWYoMD09PW8ubGVuZ3RoKXJldHVybiBudWxsO2xldCBhPVtdLGw9W107Zm9yKGxldCBlIG9mIG8pe2xldCB0PWUuZ2V0QXR0cmlidXRlKFwibGFiZWxcIikscj1lLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpO3Q/KGEucHVzaCh0KSxsLnB1c2goZSkpOnImJihhLnB1c2gociksbC5wdXNoKGUpKX1pZigwPT09YS5sZW5ndGgpcmV0dXJuIG51bGw7bGV0IHM9dC50ZXh0Q29udGVudD8ucmVwbGFjZShcIipcIixcIlwiKS50cmltKCl8fFwiXCIsdT1vWzBdPy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ncmFkaW8nXVwiKSxjPXV8fG9bMF07cmV0dXJue3R5cGU6aS5GSUVMRF9UWVBFLlJBRElPR1JPVVAsbGFiZWw6cyxyZXF1aXJlZDpyLCRsYWJlbDp0LCRpbnB1dDpjLCRyYWRpb1BhcmVudDpuLG9wdGlvbnM6YX19YXN5bmMgZnVuY3Rpb24gSChlLHQscixuKXtsZXQgbz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChyKTtpZighbyl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cImNvbWJvYm94XCJdJykscj1lLnF1ZXJ5U2VsZWN0b3IoJ1tyb2xlPVwiYnV0dG9uXCJdW2FyaWEtZXhwYW5kZWRdJyksbj1lLnF1ZXJ5U2VsZWN0b3IoXCJzZGYtc2VsZWN0LXNpbXBsZVwiKTtpZih0KW89dDtlbHNlIGlmKHIpbz1yO2Vsc2UgaWYobil7bGV0IGU9bi5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cImNvbWJvYm94XCJdLCBbcm9sZT1cImJ1dHRvblwiXVthcmlhLWV4cGFuZGVkXSwgaW5wdXQsIGJ1dHRvbicpO289ZXx8bn19bGV0IGE9bz8uZ2V0QXR0cmlidXRlKFwicm9sZVwiKSxsPW8/LnRhZ05hbWU/LnRvTG93ZXJDYXNlKCk9PT1cInNkZi1zZWxlY3Qtc2ltcGxlXCI7aWYoIW98fFwiY29tYm9ib3hcIiE9PWEmJlwiYnV0dG9uXCIhPT1hJiYhbClyZXR1cm4gbnVsbDtsZXQgcz1hd2FpdCAoMCxjLmdldFNlbGVjdE9wdGlvbnNFbGVtZW50KShvLCExKTtpZihzJiZzLmxlbmd0aD4wKXtsZXQgZT1zLm1hcChqKS5maWx0ZXIoZT0+ZS5sZW5ndGg+MCkscj10LnRleHRDb250ZW50Py5yZXBsYWNlKFwiKlwiLFwiXCIpLnRyaW0oKXx8XCJcIjtyZXR1cm57dHlwZTppLkZJRUxEX1RZUEUuU0VMRUNULGxhYmVsOnIscmVxdWlyZWQ6biwkbGFiZWw6dCwkaW5wdXQ6byxvcHRpb25zOmV9fXJldHVybiBudWxsfWZ1bmN0aW9uIFkoZSx0LHIsbil7bGV0IG89ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocik7aWYoIW98fG8uZGlzYWJsZWR8fG8gaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50JiYoXCJyYWRpb1wiPT09by50eXBlfHxcImNoZWNrYm94XCI9PT1vLnR5cGUpKXJldHVybiBudWxsO2xldCBpPXQudGV4dENvbnRlbnQ/LnJlcGxhY2UoXCIqXCIsXCJcIikudHJpbSgpfHxcIlwiO3JldHVybnt0eXBlOl8oaSksbGFiZWw6aSxyZXF1aXJlZDpuLCRsYWJlbDp0LCRpbnB1dDpvfX1mdW5jdGlvbiB6KCl7cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZCl9ZnVuY3Rpb24gVihlLHQpe3JldHVybiBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbcm9sZT1cImNvbWJvYm94XCJdJykpLmZpbmQoZT0+ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpPy50cmltKCkudG9Mb3dlckNhc2UoKT09PXQudG9Mb3dlckNhc2UoKSk/P251bGx9ZnVuY3Rpb24gVyhlKXtyZXR1cm4gVihlLFwiUmFjZVwiKX1mdW5jdGlvbiBHKGUpe3JldHVybiBWKGUsXCJFdGhuaWNpdHlcIil9ZnVuY3Rpb24gSyhlKXtyZXR1cm4hIWUuZGlzYWJsZWR8fFwidHJ1ZVwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIpfHwhIWUuY2xvc2VzdD8uKFwiW2Rpc2FibGVkXSwgW2FyaWEtZGlzYWJsZWQ9J3RydWUnXVwiKX1mdW5jdGlvbiBYKGUpe2lmKGUudHlwZSE9PWkuRklFTERfVFlQRS5TRUxFQ1QpcmV0dXJuITE7bGV0IHQ9ZS4kaW5wdXQ7cmV0dXJuISF0JiYoXCJ2c2lkUmFjZVwiPT09dC5pZHx8dC5nZXRBdHRyaWJ1dGU/LihcImFyaWEtbGFiZWxcIik/LnRyaW0oKS50b0xvd2VyQ2FzZSgpPT09XCJyYWNlXCImJiEhdC5jbG9zZXN0Py4oZCkpfWZ1bmN0aW9uIEooZSl7aWYoZS50eXBlIT09aS5GSUVMRF9UWVBFLlNFTEVDVClyZXR1cm4hMTtsZXQgdD1lLiRpbnB1dDtyZXR1cm4hIXQmJihcInZzaWRFdGhpbmljaXR5XCI9PT10LmlkfHx0LmdldEF0dHJpYnV0ZT8uKFwiYXJpYS1sYWJlbFwiKT8udHJpbSgpLnRvTG93ZXJDYXNlKCk9PT1cImV0aG5pY2l0eVwiJiYhIXQuY2xvc2VzdD8uKGQpKX1mdW5jdGlvbiBRKCl7bGV0IGU9eigpO3JldHVybiEhKGUmJkcoZSkpfWZ1bmN0aW9uIFooZSl7bGV0IHQ9ZS5jbG9zZXN0KFwiLnZzaWQtaXRlbVwiKXx8ZS5wYXJlbnRFbGVtZW50O3JldHVybiB0Py5xdWVyeVNlbGVjdG9yKFwiLk1ERlNlbGVjdEJveF9fc2luZ2xlLXZhbHVlXCIpPy50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwifWZ1bmN0aW9uIGVlKCl7bGV0IGU9eigpO2lmKCFlKXJldHVybiExO2xldCB0PUcoZSk7cmV0dXJuISF0JiZcIm5vdGhpc3Bhbmljb3JsYXRpbm9cIj09PVoodCkucmVwbGFjZSgvW15hLXpdL2dpLFwiXCIpLnRvTG93ZXJDYXNlKCl9ZnVuY3Rpb24gZXQoZSl7bGV0IHQ9ZS5zb21lKEopLHI9ZS5maWx0ZXIoZT0+ISFYKGUpJiYodHx8SyhlLiRpbnB1dCkpKTtyZXR1cm57cmVhZHlSdWxlczplLmZpbHRlcihlPT4hci5pbmNsdWRlcyhlKSksZGVmZXJyZWRSYWNlUnVsZXM6cn19YXN5bmMgZnVuY3Rpb24gZXIoZSx0PVcoZSkpe2lmKCF0KXJldHVybiBudWxsO2xldCByPUsodCk/bnVsbDphd2FpdCAoMCxjLmdldFNlbGVjdE9wdGlvbnNFbGVtZW50KSh0LCExKSxuPXI/ci5tYXAoaikuZmlsdGVyKEJvb2xlYW4pOltdO3JldHVybnt0eXBlOmkuRklFTERfVFlQRS5TRUxFQ1QsbGFiZWw6dC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpfHxcIlJhY2VcIixyZXF1aXJlZDohMSwkbGFiZWw6dCwkaW5wdXQ6dCxvcHRpb25zOm59fWFzeW5jIGZ1bmN0aW9uIGVuKCl7bGV0IGU9eigpO2lmKCFlKXJldHVybiBudWxsO2xldCB0PVcoZSk7cmV0dXJuIXR8fEsodCk/bnVsbDphd2FpdCBlcihlLHQpfWFzeW5jIGZ1bmN0aW9uIGVvKCl7bGV0IGU9W10sdD16KCk7aWYoIXQpcmV0dXJuIGU7bGV0IHI9ZT0+e2lmKCFlKXJldHVyblwiXCI7bGV0IHQ9ZS5jbG9uZU5vZGUoITApO3JldHVybiB0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZGYtaWNvbi1idXR0b24sIHNkZi1pY29uLCAuY29udGVudHMsIC5tZGYtcmVxdWlyZWQtaW5kaWNhdG9yXCIpLmZvckVhY2goZT0+ZS5yZW1vdmUoKSksdC50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwifSxuPUFycmF5LmZyb20odC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtyb2xlPVwiY29tYm9ib3hcIl0nKSk7Zm9yKGxldCB0IG9mIG4pe2xldCBuPW51bGwsbz10LmNsb3Nlc3QoXCIudnNpZC1jb21wb25lbnQtcGFkZGluZy1ib3R0b20sIC5wYWRkaW5nLXRvcFwiKTtvJiYobj1vLnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbC52c2lkLXRpdGxlLCBoNFwiKSk7bGV0IGE9cihuKTthfHwoYT10LmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fFwiXCIpO2xldCBsPVtdO3RyeXtsZXQgZT1hd2FpdCAoMCxjLmdldFNlbGVjdE9wdGlvbnNFbGVtZW50KSh0LCExKTtlJiZlLmxlbmd0aD4wJiYobD1lLm1hcChqKS5maWx0ZXIoZT0+ZS5sZW5ndGg+MCkpfWNhdGNoKGUpe2NvbnNvbGUud2FybihcIkZhaWxlZCB0byBnZXQgb3B0aW9ucyBmb3IgVlNJRCBTZWxlY3QgZmllbGQ6XCIsZSl9ZS5wdXNoKHt0eXBlOmkuRklFTERfVFlQRS5TRUxFQ1QsbGFiZWw6YXx8XCJVbmtub3duIFZTSUQgRmllbGRcIixyZXF1aXJlZDohMSwkbGFiZWw6bnx8dCwkaW5wdXQ6dCxvcHRpb25zOmx9KX1sZXQgbz1BcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbChcInNkZi1yYWRpby1ncm91cFwiKSk7Zm9yKGxldCB0IG9mIG8pe2xldCBuPW51bGwsbz10LmNsb3Nlc3QoXCIudnNpZC1jb21wb25lbnQtcGFkZGluZy1ib3R0b20sIC5wYWRkaW5nLXRvcFwiKTtvJiYobj1vLnF1ZXJ5U2VsZWN0b3IoXCJoNCwgbGFiZWwudnNpZC10aXRsZVwiKSk7bGV0IGE9cihuKTthfHwoYT10LmdldEF0dHJpYnV0ZShcImxhYmVsXCIpfHxcIlwiKTtsZXQgbD1BcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbChcInNkZi1yYWRpby1idXR0b25cIikpLHM9W107Zm9yKGxldCBlIG9mIGwpe2xldCB0PWUuZ2V0QXR0cmlidXRlKFwibGFiZWxcIil8fGUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik7dCYmcy5wdXNoKHQpfWlmKHMubGVuZ3RoPjApe2xldCByPWxbMF0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInJhZGlvXCJdJyl8fGxbMF07ZS5wdXNoKHt0eXBlOmkuRklFTERfVFlQRS5SQURJT0dST1VQLGxhYmVsOmF8fFwiVW5rbm93biBWU0lEIFJhZGlvXCIscmVxdWlyZWQ6ITEsJGxhYmVsOm58fHQsJGlucHV0OnIsJHJhZGlvUGFyZW50OnQsb3B0aW9uczpzfSl9fWxldCBhPUFycmF5LmZyb20odC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKSk7Zm9yKGxldCB0IG9mIGEpe2xldCBuPXQuY2xvc2VzdChcIi52ZGwtY2hlY2tib3hcIik7aWYoIW4pY29udGludWU7bGV0IG89bi5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIiksYT1yKG8pO2EmJmUucHVzaCh7dHlwZTppLkZJRUxEX1RZUEUuQ0hFQ0tCT1gsbGFiZWw6YSxyZXF1aXJlZDpudWxsIT09bi5xdWVyeVNlbGVjdG9yKFwiLnRleHQtYWN0aW9uLWRlc3RydWN0aXZlXCIpLCRsYWJlbDpvfHx0LCRjaGVja2JveHM6W3RdLG9wdGlvbnM6W2FdfSl9cmV0dXJuIGV9ZnVuY3Rpb24gZWkoZSx0LHIpe2xldCBuPXQucmVwbGFjZSgvXFwqKy9nLFwiXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpO2lmKCFuKXJldHVybjtsZXQgbz1uLGk9Mjtmb3IoO09iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG8pOylvPWAke259ICgke2krK30pYDtlW29dPXJ9ZnVuY3Rpb24gZWEoZSl7bGV0IHQ9ZS5vcHRpb25zW2Uuc2VsZWN0ZWRJbmRleF07cmV0dXJuKHQ/LnRleHRDb250ZW50Pz90Py52YWx1ZT8/XCJcIikudHJpbSgpfWZ1bmN0aW9uIGVsKGUpe2lmKFwiU0VMRUNUXCI9PT1lLnRhZ05hbWUpcmV0dXJuIGVhKGUpO2xldCB0PWUucXVlcnlTZWxlY3RvckFsbChcIi5NREZTZWxlY3RCb3hfX3NpbmdsZS12YWx1ZSwgLnNpbmdsZS12YWx1ZSwgW2NsYXNzKj0nU2luZ2xlVmFsdWUnXSwgW2NsYXNzKj0nc2luZ2xlLXZhbHVlJ11cIik7Zm9yKGxldCBlIG9mIHQpe2xldCB0PWUudGV4dENvbnRlbnQ/LnRyaW0oKTtpZih0KXJldHVybiB0fWxldCByPWUuY2xvc2VzdChcInNkZi1zZWxlY3Qtc2ltcGxlXCIpO2lmKHIpZm9yKGxldCBlIG9mIHIucXVlcnlTZWxlY3RvckFsbChcIi5NREZTZWxlY3RCb3hfX3NpbmdsZS12YWx1ZSwgLnNpbmdsZS12YWx1ZVwiKSl7bGV0IHQ9ZS50ZXh0Q29udGVudD8udHJpbSgpO2lmKHQpcmV0dXJuIHR9bGV0IG49ZS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbcmVhZG9ubHldLCBpbnB1dDpub3QoW3R5cGVdKScpO2lmKG4/LnZhbHVlPy50cmltKCkpcmV0dXJuIG4udmFsdWUudHJpbSgpO2xldCBvPWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKT8udHJpbSgpO2lmKG8pcmV0dXJuIG87bGV0IGk9ZS50ZXh0Q29udGVudD8udHJpbSgpPz9cIlwiO3JldHVybiBpLmxlbmd0aD40MDA/YCR7aS5zbGljZSgwLDQwMCl9XFx1MjAyNmA6aX1mdW5jdGlvbiBlcyhlKXtmb3IobGV0IHQgb2YgZS5xdWVyeVNlbGVjdG9yQWxsKFwic2RmLXJhZGlvLWJ1dHRvblwiKSl7bGV0IGU9dDtpZihlLmhhc0F0dHJpYnV0ZShcInNlbGVjdGVkXCIpfHxcInRydWVcIj09PWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1jaGVja2VkXCIpKXJldHVybiBlLmdldEF0dHJpYnV0ZShcImxhYmVsXCIpfHxlLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfHxlLnRleHRDb250ZW50Py50cmltKCl8fFwiXCI7bGV0IHI9dC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtpZihyPy5jaGVja2VkKXJldHVybiBlLmdldEF0dHJpYnV0ZShcImxhYmVsXCIpfHxlLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfHxyLnZhbHVlfHxcIlwifXJldHVyblwiXCJ9ZnVuY3Rpb24gZXUoZSx0KXtsZXQgcj1lLnF1ZXJ5U2VsZWN0b3IoXCIubWRmLWxhYmVsIGxhYmVsXCIpO2lmKCFyKXJldHVybjtsZXQgbj1yLnRleHRDb250ZW50Py5yZXBsYWNlKC9cXCorL2csXCJcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCk/P1wiXCI7aWYoIW4pcmV0dXJuO2xldCBvPXIuZ2V0QXR0cmlidXRlKFwiZm9yXCIpO2lmKG8pe2xldCBlPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG8pO2lmKGU/LnR5cGU9PT1cImNoZWNrYm94XCIpe2xldCByPWUuY2xvc2VzdChcIi52ZGwtY2hlY2tib3hcIiksbz1yPy5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIik/LnRleHRDb250ZW50Py50cmltKCl8fG47ZWkodCxuLGUuY2hlY2tlZD9vfHxcInRydWVcIjpcImZhbHNlXCIpO3JldHVybn19bGV0IGk9ZS5xdWVyeVNlbGVjdG9yKFwic2RmLXJhZGlvLWdyb3VwXCIpO2lmKGkpe2VpKHQsbixlcyhpKSk7cmV0dXJufWxldCBhPUYoZSxyKTtpZihhKXtpZihcIlNFTEVDVFwiPT09YS50YWdOYW1lKXtlaSh0LG4sZWEoYSkpO3JldHVybn1pZighSShhKSl7ZWkodCxuLGVsKGEpKTtyZXR1cm59fWxldCBsPWUucXVlcnlTZWxlY3Rvcignc2VsZWN0Om5vdChbbmFtZT1cInBob25lQ291bnRyeVwiXSknKTtpZihsKXtlaSh0LG4sZWEobCkpO3JldHVybn1sZXQgcz1udWxsO2lmKG8mJihzPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG8pKSxzfHwocz1lLnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYVwiKSksIXMpe2xldCB0PWUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQudmRsLXRleHRib3gsIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sIGlucHV0W3R5cGU9XCJ0ZWxcIl0sIGlucHV0W3R5cGU9XCJ1cmxcIl0sIGlucHV0W3R5cGU9XCJudW1iZXJcIl0nKTtmb3IobGV0IGUgb2YgdClpZihcInBob25lLWlucHV0XCIhPT1lLmdldEF0dHJpYnV0ZShcImRhdGEtdGVzdGlkXCIpJiZcImNoZWNrYm94XCIhPT1lLnR5cGUmJlwicmFkaW9cIiE9PWUudHlwZSYmXCJjb21ib2JveFwiIT09ZS5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpKXtzPWU7YnJlYWt9fSFzfHxzIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCYmXCJjaGVja2JveFwiPT09cy50eXBlfHxzIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCYmXCJyYWRpb1wiPT09cy50eXBlfHxlaSh0LG4scy52YWx1ZT8/XCJcIil9ZnVuY3Rpb24gZWMoZSl7bGV0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c2VQcmVmZXJyZWROYW1lIGlucHV0W3R5cGU9J2NoZWNrYm94J10sIGlucHV0W25hbWU9J3VzZVByZWZlcnJlZE5hbWUnXVt0eXBlPSdjaGVja2JveCddXCIpO2lmKHQ/LmlzQ29ubmVjdGVkKXtsZXQgcj10LmNsb3Nlc3QoXCIuZmxleC5mbGV4LXJvd1wiKXx8dC5jbG9zZXN0KCdbY2xhc3MqPVwiZmxleC1yb3dcIl0nKSxuPXI/LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLG89bj8udGV4dENvbnRlbnQ/LnRyaW0oKXx8dC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpfHxcIkkgaGF2ZSBhIHByZWZlcnJlZCBvciBjaG9zZW4gbmFtZVwiO2VpKGUsXCJQcmVmZXJyZWQgb3IgY2hvc2VuIG5hbWVcIix0LmNoZWNrZWQ/bzpcImZhbHNlXCIpfWxldCByPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uc2VudENoZWNrQm94IGlucHV0W3R5cGU9J2NoZWNrYm94J10sIGlucHV0W25hbWU9J2NvbnNlbnRDaGVja0JveCddW3R5cGU9J2NoZWNrYm94J10sIC5wZXJzb25hbC1pbmZvLWNvbnNlbnQgaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiKTtpZihyPy5pc0Nvbm5lY3RlZCl7bGV0IHQ9ci5jbG9zZXN0KFwiLnZkbC1jaGVja2JveFwiKSxuPXQ/LnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbFwiKSxvPW4/LnRleHRDb250ZW50Py50cmltKCl8fHIuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKXx8XCJTTVMgY29uc2VudFwiO2VpKGUsXCJUZXh0IG1lc3NhZ2Ugbm90aWZpY2F0aW9ucyAob3B0aW9uYWwpXCIsci5jaGVja2VkP286XCJmYWxzZVwiKX19ZnVuY3Rpb24gZWQoZSl7bGV0IHQ9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxvZ2luLWZvcm0tY29udGFpbmVyXCIpKTtmb3IobGV0IHIgb2YgdCl7Zm9yKGxldCB0IG9mIEFycmF5LmZyb20oci5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikpKXtsZXQgcj10O2lmKCFBKHIpfHwhZihyKSljb250aW51ZTtsZXQgbj14KHIpLG89dyhuKXx8dihyLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIikpfHx2KHIuZ2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIikpfHx2KHIuZ2V0QXR0cmlidXRlKFwibmFtZVwiKSl8fHYoci5pZCk7byYmZWkoZSxvLHIudmFsdWU/P1wiXCIpfWxldCB0PXIucXVlcnlTZWxlY3RvcignaW5wdXRbZGF0YS10ZXN0aWQ9XCJwaG9uZS1pbnB1dFwiXScpO2lmKHQmJiF0LmRpc2FibGVkJiZmKHQpKXtsZXQgbj14KHQpLG89KDAsdS5ub3JtYWxpemVBZHBXb3JrZm9yY2VOb3dQaG9uZUxhYmVsKSh3KG4pfHx2KHQuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSl8fFwiTW9iaWxlIE51bWJlclwiKTtlaShlLG8sdC52YWx1ZT8/XCJcIik7bGV0IGk9KG4/TShuKTpudWxsKXx8dC5jbG9zZXN0KCdbcm9sZT1cImdyb3VwXCJdJyl8fHIsYT1pLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lPVwicGhvbmVDb3VudHJ5XCJdJyk7YT8uaXNDb25uZWN0ZWQmJiFhLmRpc2FibGVkJiZlaShlLCgwLHUuZ2V0QWRwV29ya2ZvcmNlTm93UGhvbmVDb3VudHJ5Q29kZUxhYmVsKShvKXx8YCR7b30gQ291bnRyeWAsZWEoYSkpfX19ZnVuY3Rpb24gZWYoZSl7bGV0IHQ9KDAsbC5nZXRPcmRlcmVkTm9kZXNTYWZlKSgnLi8vbGFiZWxbQGlkIGFuZCAoY29udGFpbnMoQGlkLCBcInZhbGlkYXRlZF9sYWJlbF9tb2JpbGVcIikgb3IgY29udGFpbnMoQGlkLCBcInZhbGlkYXRlZF9sYWJlbF9ob21lXCIpKV0nKTtmb3IobGV0IHIgb2YgdCl7bGV0IHQ9KDAsdS5ub3JtYWxpemVBZHBXb3JrZm9yY2VOb3dQaG9uZUxhYmVsKShyLnRleHRDb250ZW50KTtpZighdCljb250aW51ZTtsZXQgbj1NKHIpO2lmKCFuKWNvbnRpbnVlO2xldCBvPW4ucXVlcnlTZWxlY3RvcignaW5wdXRbZGF0YS10ZXN0aWQ9XCJwaG9uZS1pbnB1dFwiXScpO28mJiFvLmRpc2FibGVkJiZlaShlLHQsby52YWx1ZT8/XCJcIik7bGV0IGk9bi5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbbmFtZT1cInBob25lQ291bnRyeVwiXScpO2kmJmVpKGUsKDAsdS5nZXRBZHBXb3JrZm9yY2VOb3dQaG9uZUNvdW50cnlDb2RlTGFiZWwpKHQpfHxgJHt0fSBDb3VudHJ5YCxlYShpKSl9fWZ1bmN0aW9uIGVwKGUsdCl7bGV0IHI9ZS5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0aW9uLWxhYmVsLWNvbnRhaW5lciBsYWJlbC5xTGFiZWxcIik7aWYoIXIpcmV0dXJuO2xldCBuPXIudGV4dENvbnRlbnQ/LnJlcGxhY2UoL1xcKisvZyxcIlwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKT8/XCJcIjtpZighbilyZXR1cm47bGV0IG89ZS5xdWVyeVNlbGVjdG9yKFwic2RmLXJhZGlvLWdyb3VwXCIpO2lmKG8pe2VpKHQsbixlcyhvKSk7cmV0dXJufWxldCBpPXIuZ2V0QXR0cmlidXRlKFwiZm9yXCIpO2lmKGkpe2xldCBlPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGkpO2lmKGUpe2xldCByPWUuY2xvc2VzdChcInNkZi1zZWxlY3Qtc2ltcGxlXCIpO2lmKFwiY29tYm9ib3hcIj09PWUuZ2V0QXR0cmlidXRlKFwicm9sZVwiKXx8cil7ZWkodCxuLGVsKHJ8fGUpKTtyZXR1cm59aWYoZSBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KXtlaSh0LG4sZWEoZSkpO3JldHVybn1pZihlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudHx8ZSBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpe1wicmFkaW9cIiE9PWUudHlwZSYmXCJjaGVja2JveFwiIT09ZS50eXBlJiZlaSh0LG4sZS52YWx1ZT8/XCJcIik7cmV0dXJufX19bGV0IGE9ZS5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cImNvbWJvYm94XCJdJyk7YSYmZWkodCxuLGVsKGEpKX1mdW5jdGlvbiBlbShlKXtsZXQgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXNpdGlvbnMtY29udGFpbmVyLCAucUNvbnRhaW5lclJvd3NXaGl0ZVwiKTtpZighdClyZXR1cm47bGV0IHI9KDAsbC5nZXRPcmRlcmVkTm9kZXNTYWZlKSgnLi8vZGl2W2NvbnRhaW5zKEBjbGFzcywgXCJxTWFpbkRpdlwiKV0nLHQpO2ZvcihsZXQgdCBvZiByKWVwKHQsZSk7bGV0IG49KDAsbC5nZXRPcmRlcmVkTm9kZXNTYWZlKSgnLi8vZGl2W2NvbnRhaW5zKEBjbGFzcywgXCJhZGRpdGlvbmFsLXF1ZXN0aW9uXCIpXScsdCk7Zm9yKGxldCB0IG9mIG4pe2xldCByPXQucXVlcnlTZWxlY3RvcihcInNkZi1yYWRpby1ncm91cFwiKTtpZihyKXtsZXQgbj10LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3Rpb24tbGFiZWwtY29udGFpbmVyLCAucUxhYmVsLCBzcGFuLnFMYWJlbFwiKSxvPW4/LnRleHRDb250ZW50Py5yZXBsYWNlKC9cXCorL2csXCJcIikudHJpbSgpPz9cIlwiO28mJmVpKGUsbyxlcyhyKSl9Zm9yKGxldCByIG9mIHQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInRleHRcIl06bm90KFtkYXRhLXRlc3RpZD1cInBob25lLWlucHV0XCJdKScpKXtsZXQgdD1yO2lmKHQuZGlzYWJsZWQpY29udGludWU7bGV0IG49dC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpfHx0LmlkfHxcIlwiO24mJmVpKGUsbix0LnZhbHVlPz9cIlwiKX1sZXQgbj10LnF1ZXJ5U2VsZWN0b3IoXCJzZGYtc2VsZWN0LXNpbXBsZVwiKTtpZihuKXtsZXQgcj1uLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIik/LnRyaW0oKXx8dC5xdWVyeVNlbGVjdG9yKFwiLnFMYWJlbFwiKT8udGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJTZWxlY3RcIjtlaShlLHIsZWwobikpfWxldCBvPXQucXVlcnlTZWxlY3RvcihcInRleHRhcmVhXCIpO2lmKG8mJiFvLmRpc2FibGVkKXtsZXQgdD1vLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIik/LnRyaW0oKXx8XCJDb21tZW50XCI7ZWkoZSx0LG8udmFsdWU/P1wiXCIpfX19ZnVuY3Rpb24gZWgoZSl7aWYoIWUpcmV0dXJuXCJcIjtsZXQgdD1lLmNsb25lTm9kZSghMCk7cmV0dXJuIHQucXVlcnlTZWxlY3RvckFsbChcInNkZi1pY29uLWJ1dHRvbiwgc2RmLWljb24sIC5jb250ZW50cywgLm1kZi1yZXF1aXJlZC1pbmRpY2F0b3JcIikuZm9yRWFjaChlPT5lLnJlbW92ZSgpKSx0LnRleHRDb250ZW50Py50cmltKCl8fFwiXCJ9ZnVuY3Rpb24gZWcoZSl7bGV0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wZXJzb25hbC1zdGVwLWNvbnRhaW5lci52c2lkLXBhZGRpbmctY29udGFpbmVyLCAudnNpZC1wYWRkaW5nLWNvbnRhaW5lclwiKTtpZih0KXtmb3IobGV0IHIgb2YgdC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtyb2xlPVwiY29tYm9ib3hcIl0nKSl7bGV0IHQ9cixuPW51bGwsbz10LmNsb3Nlc3QoXCIudnNpZC1jb21wb25lbnQtcGFkZGluZy1ib3R0b20sIC5wYWRkaW5nLXRvcFwiKTtvJiYobj1vLnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbC52c2lkLXRpdGxlLCBoNFwiKSk7bGV0IGk9ZWgobik7aXx8KGk9dC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpfHxcIlVua25vd24gVlNJRCBGaWVsZFwiKSxlaShlLGksZWwodCkpfWZvcihsZXQgciBvZiB0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZGYtcmFkaW8tZ3JvdXBcIikpe2xldCB0PXIsbj1udWxsLG89dC5jbG9zZXN0KFwiLnZzaWQtY29tcG9uZW50LXBhZGRpbmctYm90dG9tLCAucGFkZGluZy10b3BcIik7byYmKG49by5xdWVyeVNlbGVjdG9yKFwiaDQsIGxhYmVsLnZzaWQtdGl0bGVcIikpO2xldCBpPWVoKG4pO2l8fChpPXQuZ2V0QXR0cmlidXRlKFwibGFiZWxcIil8fFwiVW5rbm93biBWU0lEIFJhZGlvXCIpLGVpKGUsaSxlcyh0KSl9Zm9yKGxldCByIG9mIHQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykpe2xldCB0PXIsbj10LmNsb3Nlc3QoXCIudmRsLWNoZWNrYm94XCIpO2lmKCFuKWNvbnRpbnVlO2xldCBvPW4ucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpLGk9ZWgobyk7aSYmZWkoZSxpLHQuY2hlY2tlZD9pOlwiZmFsc2VcIil9fX1mdW5jdGlvbiBlYihlKXtsZXQgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGYtcmV2aWV3LWF0dGVzdGF0aW9uXCIpO2lmKHQpe2xldCByPXQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7aWYocil7bGV0IG49dC5xdWVyeVNlbGVjdG9yKFwiaDNcIik/LnRleHRDb250ZW50Py50cmltKCl8fFwiU2VsZiBBdHRlc3RhdGlvblwiLG89dC5xdWVyeVNlbGVjdG9yKFwiLnNlbGYtcmV2aWV3LXNpZ25hdHVyZS1jaGVja2JveCBsYWJlbCwgbGFiZWxcIiksaT1vPy50ZXh0Q29udGVudD8udHJpbSgpfHxcIlllcywgSSBhZ3JlZSB0byBzaWduIGVsZWN0cm9uaWNhbGx5LlwiO2VpKGUsbixyLmNoZWNrZWQ/aTpcImZhbHNlXCIpfX1sZXQgcj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsZWN0cm9uaWNTaWduYXR1cmVcIik7aWYociYmIXIuZGlzYWJsZWQpe2xldCB0PW51bGwsbj1yLmNsb3Nlc3QoXCIuc2VsZi1yZXZpZXctc2lnbmF0dXJlLWxhYmVsXCIpO24mJih0PW4ucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpKTtsZXQgbz10Py50ZXh0Q29udGVudD8udHJpbSgpfHxyLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fFwiUGxlYXNlIHR5cGUgeW91ciBmdWxsIG5hbWUuXCI7ZWkoZSxvLHIudmFsdWU/P1wiXCIpfX1mdW5jdGlvbiBleSgpe2xldCBlPXt9LHQ9KDAsbC5nZXRPcmRlcmVkTm9kZXNTYWZlKSgnLi8vZGl2W2NvbnRhaW5zKEBjbGFzcywgXCJtZGYtdmFsaWRhdGVkLWZpZWxkXCIpXScpO2ZvcihsZXQgciBvZiB0KWYocikmJmV1KHIsZSk7cmV0dXJuIGVkKGUpLGVjKGUpLGVmKGUpLGVtKGUpLGVnKGUpLGViKGUpLHsuLi5lfX1mdW5jdGlvbiBldihlKXtsZXQgdD1leSgpLHtlZHVjYXRpb246cixlbXBsb3ltZW50Om4sLi4uaX09dCx7ZWR1Y2F0aW9uOmEsZW1wbG95bWVudDpsLC4uLnV9PWU7KDAsby5zZW5kQXV0b2ZpbGxBbnN3ZXJQYWlyRXZlbnQpKHtmb3JtVXJsOigwLHMudXNlVXJsU3RvcmUpLmdldFN0YXRlKCkuY3VycmVudFRhYlVybCxhdXRvZmlsbFNuYXBzaG90OnUsc3VibWl0U25hcHNob3Q6aSxhZGRpdGlvbmFsQXV0b2ZpbGxEYXRhOntlZHVjYXRpb246YSxlbXBsb3ltZW50Omx9LGFkZGl0aW9uYWxTdWJtaXREYXRhOntlZHVjYXRpb246cixlbXBsb3ltZW50Om59LHNvdXJjZTpcImFkcC13b3JrZm9yY2Vub3dcIn0pfVxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZXMuMDQ1YmMyNWEuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);