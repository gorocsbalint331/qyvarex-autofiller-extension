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
})({"3b2WV":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\jobdiva\\rules.js",
    "bundleId": "03f992b845fc82a3",
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
var j = z(require("25a10d6acff73500"));
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

},{"25a10d6acff73500":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"6aFT1":[function(require,module,exports) {
/**
 * Parcel module id: bcuXB
 * Resolved path: src/contents/sites/jobdiva/rules.js
 * Dependencies:
 *   ./answer -> 9tSwu  =>  src/contents/sites/jobdiva/answer.js
 *   ./signin-credentials -> 30YY8  =>  src/contents/sites/jobdiva/signin-credentials.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "isUnsupportedJobdivaReferenceLabel", ()=>w), n.export(r, "isInsideUnsupportedJobdivaReferenceSection", ()=>E), n.export(r, "findLabel", ()=>k), n.export(r, "buildJobdivaPhoneSnapshotEntries", ()=>j), n.export(r, "buildJobdivaSelectSnapshotEntries", ()=>P), n.export(r, "getRule", ()=>R), n.export(r, "getEducationRules", ()=>U), n.export(r, "getEducationRulesForRoot", ()=>H), n.export(r, "getExperienceRules", ()=>Y), n.export(r, "getExperienceRulesForRoot", ()=>z), n.export(r, "extractRules", ()=>V), n.export(r, "excludeJobdivaSignInRules", ()=>W), n.export(r, "getFormSnapshot", ()=>J);
var o = e("~core/enums"), i = e("~core/xpath"), a = e("./answer"), l = e("./signin-credentials");
let s = (e1)=>`contains(concat(" ", normalize-space(@class), " "), " ${e1} ")`, u = `.//div[${s("jd-form-layout")}]`, c = `.//label[${s("jd-checkbox")}]`, d = `.//label[${s("jd-label")}]`, f = `.//div[${s("jd-form-select")}]`, p = `.//div[${s("jd-form-phone")}]`, m = `.//input[${s("jd-form")} and not(@type="checkbox") and not(@type="radio") and not(@type="hidden") and not(@type="submit") and not(@type="button") and not(@type="reset") and not(@type="file")]`, h = `.//textarea[${s("jd-form")}]`, g = `.//div[${s("dropdown-menu")}]//*[${s("dropdown-item")}]`, b = './/*[contains(translate(@id, "EDUCATION", "education"), "education") or contains(translate(@class, "EDUCATION", "education"), "education")]';
function y(e1) {
    return e1.replace(/[*\u2731]/g, "").replace(/\s+/g, " ").trim();
}
function v(e1) {
    return e1.getClientRects().length > 0 && "none" !== window.getComputedStyle(e1).display && "hidden" !== window.getComputedStyle(e1).visibility;
}
function w(e1) {
    let t = y(e1).toLowerCase();
    return !(!t || t.includes("preference")) && /\breferences?\b/.test(t);
}
function S(e1) {
    if (!e1) return "";
    let t = e1.querySelector(".jd-reg-title h2, .jd-reg-title");
    return y(t?.textContent || "");
}
_c = S;
function E(e1) {
    if (e1.closest(".jd-reg-card.id-reg-reference")) return !0;
    let t = [
        e1.closest(".row"),
        e1.closest(".modal-content"),
        e1.closest(".job-app-main"),
        e1.closest("form")
    ];
    return t.some((e1)=>w(S(e1)));
}
_c1 = E;
function x(e1) {
    let t = document.createTreeWalker(e1, NodeFilter.SHOW_TEXT, {
        acceptNode (e1) {
            let t = e1.parentElement;
            return !t || t.closest("a, button, script, style, svg") ? NodeFilter.FILTER_REJECT : (e1.textContent || "").trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
    }), r1 = [], n = t.nextNode();
    for(; n;){
        let e1 = (n.textContent || "").trim();
        e1 && r1.push(e1), n = t.nextNode();
    }
    return y(r1.join(" "));
}
function C(e1) {
    let t = Array.from(e1.childNodes).filter((e1)=>e1.nodeType === Node.TEXT_NODE).map((e1)=>e1.textContent || "").join(" ");
    return y(t);
}
_c2 = C;
function A(e1) {
    let t = e1.id ? y(document.querySelector(`label[for="${e1.id}"]`)?.textContent || "") : "", r1 = y(e1.closest("label")?.textContent || ""), n = y(e1.nextElementSibling?.textContent || ""), o = y(e1.closest(".radio-button")?.textContent || "");
    return t || r1 || n || o || y(e1.value);
}
_c3 = A;
function k(e1) {
    let t = (0, i.getFirstOrderedNodeSafe)(`ancestor::div[${s("jd-form-layout")}][1]`, e1);
    if (t) {
        let e1 = (0, i.getFirstOrderedNodeSafe)(d, t);
        if (e1) return e1;
    }
    let r1 = (0, i.getFirstOrderedNodeSafe)(`ancestor::label[${s("jd-checkbox")}][1]`, e1);
    if (r1) {
        let e1 = (0, i.getFirstOrderedNodeSafe)("./label", r1);
        return e1 || r1;
    }
    return null;
}
function T(e1, t) {
    if (t && /\*/.test(t.textContent || "")) return !0;
    let r1 = (0, i.getFirstOrderedNodeSafe)(".//input[@required or @aria-required='true'] | .//textarea[@required or @aria-required='true'] | .//select[@required or @aria-required='true']", e1);
    return !!r1;
}
_c4 = T;
function F(e1) {
    let t = (0, i.getOrderedNodesSafe)(g, e1), r1 = [], n = new Set;
    for (let e1 of t){
        let t = (e1.textContent || "").trim();
        t && (n.has(t) || (n.add(t), r1.push(t)));
    }
    return r1;
}
_c5 = F;
function I(e1) {
    return e1.map((e1)=>({
            label: e1.label,
            type: e1.type,
            options: e1.options || []
        }));
}
_c6 = I;
function j(e1) {
    let t = {
        [a.JOBDIVA_PHONE_COUNTRY_CODE_LABEL]: String(e1.country || "").trim(),
        [y(e1.label) || "Phone"]: String(e1.text || "").trim()
    };
    return void 0 !== e1.type && (t[a.JOBDIVA_PHONE_TYPE_LABEL] = String(e1.type || "").trim()), t;
}
function D(e1) {
    let t = (0, i.getFirstOrderedNodeSafe)(`.//*[${s("dropdown-item")} and contains(concat(" ", normalize-space(@class), " "), " selected ")]`, e1);
    if (t) return y(t.textContent || "");
    let r1 = (0, i.getFirstOrderedNodeSafe)(`.//span[${s("text-truncate")}]`, e1);
    if (r1) return y(r1.textContent || "");
    let n = (0, i.getFirstOrderedNodeSafe)('.//button[@data-bs-toggle="dropdown"]', e1);
    return y(n?.textContent || "");
}
_c7 = D;
function P(e1, t) {
    let r1 = y(e1);
    if (!r1) return [];
    let n = t.map((e1)=>y(String(e1 ?? "")));
    if ([
        "From",
        "To"
    ].includes(r1) && n.length >= 2) return [
        [
            `${r1} Month`,
            n[0]
        ],
        [
            `${r1} Year`,
            n[1]
        ]
    ].filter(([, e1])=>!!e1);
    let o = n.find(Boolean);
    return o ? [
        [
            r1,
            o
        ]
    ] : [];
}
_c8 = P;
function _(e1, t, r1, n) {
    return {
        label: y(n),
        type: o.FIELD_TYPE.SELECT,
        required: T(e1, r1),
        options: F(t),
        $input: t,
        $label: r1
    };
}
function L(e1, t) {
    let r1 = (0, i.getFirstOrderedNodeSafe)(p, e1);
    if (!r1) return null;
    let n = (0, i.getFirstOrderedNodeSafe)(`.//div[${s("jd-form-select")}][1]`, e1), a = (0, i.getFirstOrderedNodeSafe)(`.//div[${s("dropright")}][1]`, r1), l = (0, i.getFirstOrderedNodeSafe)('.//input[@type="tel"]', r1);
    if (!a || !l) return null;
    let u = T(e1, t), c = [];
    return n && c.push({
        label: "type",
        type: o.FIELD_TYPE.SELECT,
        required: u,
        options: F(n),
        $input: n,
        $label: t
    }), c.push({
        label: "country",
        type: o.FIELD_TYPE.SELECT,
        required: u,
        options: F(a),
        $input: a,
        $label: t
    }, {
        label: "text",
        type: o.FIELD_TYPE.TEXT,
        required: u,
        $input: l,
        $label: t
    }), {
        label: y(t.textContent || ""),
        type: o.FIELD_TYPE.SECTION,
        required: u,
        children: c,
        options: I(c),
        $input: r1
    };
}
_c9 = L;
async function R(e1) {
    if (!e1) return null;
    let t = e1.classList.contains("jd-form-layout") ? e1 : (0, i.getFirstOrderedNodeSafe)(`ancestor::div[${s("jd-form-layout")}][1]`, e1) || e1;
    if (E(t)) return null;
    let r1 = (0, i.getFirstOrderedNodeSafe)(d, t), n = "LABEL" === e1.tagName && e1.classList.contains("jd-checkbox") ? e1 : null, a = n ? (0, i.getFirstOrderedNodeSafe)("./label", n) || n : null, l = a || r1;
    if (!l) return null;
    let u = n ? x(l) || y(n.textContent || "") : y(l.textContent || "");
    if (w(u)) return null;
    let c = r1 ? L(t, r1) : null;
    if (c) return c;
    let p = null, g = null;
    if (n) p = (g = (0, i.getFirstOrderedNodeSafe)('.//input[@type="checkbox"]', n)) ? o.FIELD_TYPE.CHECKBOX : null;
    else {
        let e1 = (0, i.getFirstOrderedNodeSafe)('.//input[@type="radio"]', t), r1 = (0, i.getFirstOrderedNodeSafe)(m, t), n = (0, i.getFirstOrderedNodeSafe)(h, t), a = (0, i.getFirstOrderedNodeSafe)(f, t);
        e1 ? (p = o.FIELD_TYPE.RADIOGROUP, g = e1) : r1 ? (p = o.FIELD_TYPE.TEXT, g = r1) : n ? (p = o.FIELD_TYPE.TEXT, g = n) : a && (p = o.FIELD_TYPE.SELECT, g = a);
    }
    if (!p || !g) return null;
    let b = T(n || t, l), v = [];
    if (p === o.FIELD_TYPE.SELECT && (v = F(g)), p === o.FIELD_TYPE.RADIOGROUP) {
        let e1 = t || g.closest("form"), r1 = Array.from((e1 || document).querySelectorAll('input[type="radio"]')), n = g, o = n.name ? r1.filter((e1)=>e1.name === n.name) : r1, i = o.map((e1)=>{
            let t = e1.id ? (document.querySelector(`label[for="${e1.id}"]`)?.textContent || "").trim() : "", r1 = e1.closest("label")?.textContent?.trim() || "";
            return y(t || r1 || e1.value);
        }).filter(Boolean);
        return {
            label: u,
            type: p,
            required: b,
            options: Array.from(new Set(i)),
            $input: n,
            $radioParent: e1 || t,
            $label: l
        };
    }
    return p === o.FIELD_TYPE.CHECKBOX ? {
        label: u,
        type: p,
        required: b,
        options: [
            u
        ],
        $checkboxs: [
            g
        ],
        $input: g,
        $label: l
    } : {
        label: u,
        type: p,
        required: b,
        options: v,
        $input: g,
        $label: l
    };
}
_c10 = R;
function O(e1) {
    return !!(0, i.getFirstOrderedNodeSafe)(`ancestor-or-self::*[${s("education")} or ${s("id-reg-education")} or ${s("id-reg-workexperience")} or contains(translate(@id, "EDUCATIONMPLYRCWORK", "educationmplyrcwork"), "education") or contains(translate(@id, "EDUCATIONMPLYRCWORK", "educationmplyrcwork"), "workexperience")][1]`, e1);
}
_c11 = O;
async function M(e1) {
    let t = [], r1 = (0, i.getOrderedNodesSafe)(`.//div[${s("jd-form-layout")}]`, e1), n = new Set;
    for (let e1 of r1){
        let r1 = (0, i.getFirstOrderedNodeSafe)(d, e1), o = (0, i.getOrderedNodesSafe)(f, e1);
        if (r1 && o.length >= 2 && [
            "From",
            "To"
        ].includes(y(r1.textContent || ""))) {
            let n = y(r1.textContent || "");
            t.push(_(e1, o[0], r1, `${n} Month`), _(e1, o[1], r1, `${n} Year`));
            continue;
        }
        let a = await R(e1);
        if (!a) continue;
        let l = `${a.label}:${a.type}`;
        n.has(l) || (n.add(l), t.push(a));
    }
    return t;
}
_c12 = M;
function N(e1) {
    return I(e1);
}
_c13 = N;
function $(e1) {
    let t = C(e1);
    if (t) return t;
    let r1 = e1.querySelector(".jd-label, label, legend, h1, h2, h3, h4, h5, h6");
    if (r1) return y(r1.textContent || "");
    let n = e1.querySelector('input[type="radio"]');
    return y(n?.name || "");
}
function B(e1, t, r1 = {}) {
    let n = [], i = Array.from(e1.querySelectorAll(".radio-buttons-div"));
    for (let e1 of i){
        if (e1.closest(".jd-form-layout") || r1.skipEduExp && O(e1) || E(e1)) continue;
        let i = Array.from(e1.querySelectorAll('input[type="radio"]')).filter(v);
        if (0 === i.length) continue;
        let a = $(e1);
        if (!a || w(a)) continue;
        let l = `${a}:${o.FIELD_TYPE.RADIOGROUP}`;
        if (t.has(l)) continue;
        t.add(l);
        let s = i.map(A).filter(Boolean);
        n.push({
            label: a,
            type: o.FIELD_TYPE.RADIOGROUP,
            required: /\*/.test(C(e1)) || i.some((e1)=>e1.required || "true" === e1.getAttribute("aria-required")),
            options: Array.from(new Set(s)),
            $input: i[0],
            $radioParent: e1,
            $radios: i
        });
    }
    return n;
}
_c14 = B;
function q(e1, t) {
    return Array.from(e1.querySelectorAll(t)).filter((e1)=>!!e1.querySelector(".jd-form-layout"));
}
async function U() {
    return H(document);
}
_c15 = U;
async function H(e1 = document) {
    let t = [], r1 = G(e1);
    for (let e1 of r1){
        let r1 = await M(e1);
        0 !== r1.length && t.push({
            type: o.FIELD_TYPE.EDUCATION,
            label: "Education",
            required: !0,
            children: r1,
            options: N(r1)
        });
    }
    return t;
}
_c16 = H;
async function Y() {
    return z(document);
}
_c17 = Y;
async function z(e1 = document) {
    let t = [], r1 = K(e1);
    for (let e1 of r1){
        let r1 = await M(e1);
        0 !== r1.length && t.push({
            type: o.FIELD_TYPE.EMPLOYMENT,
            label: "Experience",
            required: !0,
            children: r1,
            options: N(r1)
        });
    }
    return t;
}
async function V(e1 = document, t = "regular") {
    let r1 = [], n = new Set, o = (0, i.getOrderedNodesSafe)(u, e1);
    for (let e1 of o){
        if (O(e1)) continue;
        let t = await R(e1);
        if (!t) continue;
        let o = `${t.label}:${t.type}`;
        n.has(o) || (n.add(o), r1.push(t));
    }
    let a = (0, i.getOrderedNodesSafe)(c, e1);
    for (let e1 of a){
        if (O(e1)) continue;
        let t = await R(e1);
        if (!t) continue;
        let o = `${t.label}:${t.type}`;
        n.has(o) || (n.add(o), r1.push(t));
    }
    if (r1.push(...B(e1, n)), "regular" === t) {
        let t = await H(e1);
        t.length > 0 && r1.push(t[0]);
        let n = await z(e1);
        n.length > 0 && r1.push(n[0]);
    }
    return r1;
}
_c18 = V;
function W(e1, t = document) {
    let r1 = (0, l.getJobdivaSignInInputs)(t);
    return 0 === r1.size ? e1 : e1.flatMap((e1)=>{
        if (r1.has(e1.$input)) return [];
        if (e1.type !== o.FIELD_TYPE.SECTION || !Array.isArray(e1.children)) return [
            e1
        ];
        let n = W(e1.children, t);
        return n.length > 0 ? [
            {
                ...e1,
                children: n
            }
        ] : [];
    });
}
_c19 = W;
function G(e1 = document) {
    let t = q(e1, ".jd-reg-card.id-reg-education");
    if (t.length > 0) return t;
    let r1 = (0, i.getFirstOrderedNodeSafe)(b, e1);
    return r1 ? [
        r1
    ] : [];
}
_c20 = G;
function K(e1 = document) {
    return q(e1, ".jd-reg-card.id-reg-workexperience");
}
_c21 = K;
function X(e1 = document, t = {}) {
    let r1 = {}, n = !0 === t.skipEduExp, o = (0, i.getOrderedNodesSafe)(u, e1);
    for (let e1 of o){
        if (n && O(e1) || E(e1)) continue;
        let o = (0, i.getFirstOrderedNodeSafe)(d, e1);
        if (!o) continue;
        let a = y(o.textContent || "");
        if (!a) continue;
        let l = L(e1, o);
        if (l) {
            let e1 = l.children.find((e1)=>"type" === e1.label), t = l.children.find((e1)=>"country" === e1.label), n = l.children.find((e1)=>"text" === e1.label), o = e1 ? D(e1.$input) : "", i = t ? D(t.$input) : "", s = n?.$input.value || "";
            Object.assign(r1, j({
                label: a,
                type: e1 ? o : void 0,
                country: i,
                text: s
            }));
            continue;
        }
        let s = (0, i.getFirstOrderedNodeSafe)(m, e1);
        if (s) {
            if (t.excludedInputs?.has(s)) continue;
            r1[a] = "password" === s.type ? "" : s.value || "";
            continue;
        }
        let u = (0, i.getFirstOrderedNodeSafe)(h, e1);
        if (u) {
            r1[a] = u.value || "";
            continue;
        }
        let c = (0, i.getOrderedNodesSafe)(f, e1);
        if (c.length > 0) {
            let e1 = c.map((e1)=>D(e1));
            for (let [t, n] of P(a, e1))r1[t] = n;
        }
    }
    let a = (0, i.getOrderedNodesSafe)(c, e1);
    for (let e1 of a){
        if (n && O(e1) || E(e1)) continue;
        let t = (0, i.getFirstOrderedNodeSafe)('.//input[@type="checkbox"]', e1);
        if (!t) continue;
        let o = (0, i.getFirstOrderedNodeSafe)("./label", e1), a = x(o || e1) || y(e1.textContent || "");
        a && (r1[a] = t.checked ? "Yes" : "No");
    }
    let l = new Set;
    for (let t of B(e1, l, {
        skipEduExp: n
    })){
        let e1 = t.$radios || [], n = e1.find((e1)=>e1.checked);
        r1[t.label] = n ? A(n) : "";
    }
    return r1;
}
_c22 = X;
function J(e1 = document) {
    let t = (0, l.getJobdivaSignInInputs)(e1), r1 = X(e1, {
        skipEduExp: !0,
        excludedInputs: t
    }), n = G(e1);
    if (n.length > 0) {
        let e1 = n.map((e1)=>X(e1, {
                excludedInputs: t
            }));
        r1.education = e1.filter((e1)=>Object.keys(e1).length > 0);
    }
    let o = K(e1);
    if (o.length > 0) {
        let e1 = o.map((e1)=>X(e1, {
                excludedInputs: t
            }));
        r1.employment = e1.filter((e1)=>Object.keys(e1).length > 0);
    }
    return r1;
}
_c23 = J;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23;
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

},{}]},["3b2WV","6aFT1"], "6aFT1", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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RUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDO1FBQUMsRUFBRSxJQUFJLE1BQUssQ0FBQSxFQUFFLElBQUksSUFBRyxHQUFFLEtBQUssRUFBQztJQUFFO0lBQUMsSUFBSSxJQUFFLEFBQUMsQ0FBQSxHQUFFLEVBQUUsbUJBQWtCLEVBQUcsR0FBRTtJQUFHLEtBQUksSUFBSSxNQUFLLEVBQUU7UUFBQyxJQUFHLEVBQUUsS0FBRztRQUFTLElBQUksSUFBRSxNQUFNLEVBQUU7UUFBRyxJQUFHLENBQUMsR0FBRTtRQUFTLElBQUksSUFBRSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQztRQUFDLEVBQUUsSUFBSSxNQUFLLENBQUEsRUFBRSxJQUFJLElBQUcsR0FBRSxLQUFLLEVBQUM7SUFBRTtJQUFDLElBQUcsR0FBRSxRQUFRLEVBQUUsSUFBRSxLQUFJLGNBQVksR0FBRTtRQUFDLElBQUksSUFBRSxNQUFNLEVBQUU7UUFBRyxFQUFFLFNBQU8sS0FBRyxHQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFBRSxJQUFJLElBQUUsTUFBTSxFQUFFO1FBQUcsRUFBRSxTQUFPLEtBQUcsR0FBRSxLQUFLLENBQUMsQ0FBQyxFQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7T0FBN2U7QUFBOGUsU0FBUyxFQUFFLEVBQUMsRUFBQyxJQUFFLFFBQVE7SUFBRSxJQUFJLEtBQUUsQUFBQyxDQUFBLEdBQUUsRUFBRSxzQkFBcUIsRUFBRztJQUFHLE9BQU8sTUFBSSxHQUFFLE9BQUssS0FBRSxHQUFFLFFBQVEsQ0FBQTtRQUFJLElBQUcsR0FBRSxJQUFJLEdBQUUsU0FBUSxPQUFNLEVBQUU7UUFBQyxJQUFHLEdBQUUsU0FBTyxFQUFFLFdBQVcsV0FBUyxDQUFDLE1BQU0sUUFBUSxHQUFFLFdBQVUsT0FBTTtZQUFDO1NBQUU7UUFBQyxJQUFJLElBQUUsRUFBRSxHQUFFLFVBQVM7UUFBRyxPQUFPLEVBQUUsU0FBTyxJQUFFO1lBQUM7Z0JBQUMsR0FBRyxFQUFDO2dCQUFDLFVB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SSxJQUFJLEtBQUssRUFBRSxJQUFFLEdBQUU7UUFBQyxZQUFXO0lBQUMsR0FBRztRQUFDLElBQUksS0FBRSxFQUFFLFdBQVMsRUFBRSxFQUFDLElBQUUsR0FBRSxLQUFLLENBQUEsS0FBRyxHQUFFO1FBQVMsRUFBQyxDQUFDLEVBQUUsTUFBTSxHQUFDLElBQUUsRUFBRSxLQUFHO0lBQUU7SUFBQyxPQUFPO0FBQUM7T0FBanJDO0FBQWtyQyxTQUFTLEVBQUUsS0FBRSxRQUFRO0lBQUUsSUFBSSxJQUFFLEFBQUMsQ0FBQSxHQUFFLEVBQUUsc0JBQXFCLEVBQUcsS0FBRyxLQUFFLEVBQUUsSUFBRTtRQUFDLFlBQVcsQ0FBQztRQUFFLGdCQUFlO0lBQUMsSUFBRyxJQUFFLEVBQUU7SUFBRyxJQUFHLEVBQUUsU0FBTyxHQUFFO1FBQUMsSUFBSSxLQUFFLEVBQUUsSUFBSSxDQUFBLEtBQUcsRUFBRSxJQUFFO2dCQUFDLGdCQUFlO1lBQUM7UUFBSSxHQUFFLFlBQVUsR0FBRSxPQUFPLENBQUEsS0FBRyxPQUFPLEtBQUssSUFBRyxTQUFPO0lBQUU7SUFBQyxJQUFJLElBQUUsRUFBRTtJQUFHLElBQUcsRUFBRSxTQUFPLEdBQUU7UUFBQyxJQUFJLEtBQUUsRUFBRSxJQUFJLENBQUEsS0FBRyxFQUFFLElBQUU7Z0JBQUMsZ0JBQWU7WUFBQztRQUFJLEdBQUUsYUFBVyxHQUFFLE9BQU8sQ0FBQSxLQUFHLE9BQU8sS0FBSyxJQUFHLFNBQU87SUFBRTtJQUFDLE9BQU87QUFBQztPQUF2VSIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtNGUwMjMyMWJhOWM2ZDY0ZC5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9zaXRlcy9qb2JkaXZhL3J1bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBXPU9iamVjdC5jcmVhdGU7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBWPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcT0oZSx0LG8scik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG4gb2YgRyh0KSkhSi5jYWxsKGUsbikmJm4hPT1vJiZQKGUsbix7Z2V0OigpPT50W25dLGVudW1lcmFibGU6IShyPVYodCxuKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgej0oZSx0LG8pPT4obz1lIT1udWxsP1coWChlKSk6e30scSh0fHwhZXx8IWUuX19lc01vZHVsZT9QKG8sXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOm8sZSkpO3ZhciB5PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIEg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSz1uZXcgU2V0KHkpLEQ9ZT0+Sy5oYXMoZSksdWU9eS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBkZT1EKFwiLS1kcnktcnVuXCIpLF89KCk9PkQoXCItLXZlcmJvc2VcIil8fEgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsZmU9XygpO3ZhciB4PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBrPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksVD0oLi4uZSk9PngoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxBPSguLi5lKT0+eChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFE9MCxwPSguLi5lKT0+XygpJiZ4KGBcXHV7MUY3RTF9ICR7USsrfWAsLi4uZSk7dmFyIGM9e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wicGFnZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXHNpdGVzXFxcXGpvYmRpdmFcXFxccnVsZXMuanNcIixcImJ1bmRsZUlkXCI6XCIwM2Y5OTJiODQ1ZmM4MmEzXCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogYmN1WEJcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL2pvYmRpdmEvcnVsZXMuanNcclxuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIC4vYW5zd2VyIC0+IDl0U3d1ICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2pvYmRpdmEvYW5zd2VyLmpzXHJcbiAqICAgLi9zaWduaW4tY3JlZGVudGlhbHMgLT4gMzBZWTggID0+ICBzcmMvY29udGVudHMvc2l0ZXMvam9iZGl2YS9zaWduaW4tY3JlZGVudGlhbHMuanNcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIH5jb3JlL2VudW1zIC0+IDFPM25jICA9PiAgc3JjL2NvcmUvZW51bXMuanNcclxuICogICB+Y29yZS94cGF0aCAtPiBhZ0U0dSAgPT4gIHNyYy9jb3JlL3hwYXRoLmpzXHJcbiAqL1xyXG5cclxudmFyIG49ZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7bi5kZWZpbmVJbnRlcm9wRmxhZyhyKSxuLmV4cG9ydChyLFwiaXNVbnN1cHBvcnRlZEpvYmRpdmFSZWZlcmVuY2VMYWJlbFwiLCgpPT53KSxuLmV4cG9ydChyLFwiaXNJbnNpZGVVbnN1cHBvcnRlZEpvYmRpdmFSZWZlcmVuY2VTZWN0aW9uXCIsKCk9PkUpLG4uZXhwb3J0KHIsXCJmaW5kTGFiZWxcIiwoKT0+ayksbi5leHBvcnQocixcImJ1aWxkSm9iZGl2YVBob25lU25hcHNob3RFbnRyaWVzXCIsKCk9PmopLG4uZXhwb3J0KHIsXCJidWlsZEpvYmRpdmFTZWxlY3RTbmFwc2hvdEVudHJpZXNcIiwoKT0+UCksbi5leHBvcnQocixcImdldFJ1bGVcIiwoKT0+Uiksbi5leHBvcnQocixcImdldEVkdWNhdGlvblJ1bGVzXCIsKCk9PlUpLG4uZXhwb3J0KHIsXCJnZXRFZHVjYXRpb25SdWxlc0ZvclJvb3RcIiwoKT0+SCksbi5leHBvcnQocixcImdldEV4cGVyaWVuY2VSdWxlc1wiLCgpPT5ZKSxuLmV4cG9ydChyLFwiZ2V0RXhwZXJpZW5jZVJ1bGVzRm9yUm9vdFwiLCgpPT56KSxuLmV4cG9ydChyLFwiZXh0cmFjdFJ1bGVzXCIsKCk9PlYpLG4uZXhwb3J0KHIsXCJleGNsdWRlSm9iZGl2YVNpZ25JblJ1bGVzXCIsKCk9PlcpLG4uZXhwb3J0KHIsXCJnZXRGb3JtU25hcHNob3RcIiwoKT0+Sik7dmFyIG89ZShcIn5jb3JlL2VudW1zXCIpLGk9ZShcIn5jb3JlL3hwYXRoXCIpLGE9ZShcIi4vYW5zd2VyXCIpLGw9ZShcIi4vc2lnbmluLWNyZWRlbnRpYWxzXCIpO2xldCBzPWU9PmBjb250YWlucyhjb25jYXQoXCIgXCIsIG5vcm1hbGl6ZS1zcGFjZShAY2xhc3MpLCBcIiBcIiksIFwiICR7ZX0gXCIpYCx1PWAuLy9kaXZbJHtzKFwiamQtZm9ybS1sYXlvdXRcIil9XWAsYz1gLi8vbGFiZWxbJHtzKFwiamQtY2hlY2tib3hcIil9XWAsZD1gLi8vbGFiZWxbJHtzKFwiamQtbGFiZWxcIil9XWAsZj1gLi8vZGl2WyR7cyhcImpkLWZvcm0tc2VsZWN0XCIpfV1gLHA9YC4vL2Rpdlske3MoXCJqZC1mb3JtLXBob25lXCIpfV1gLG09YC4vL2lucHV0WyR7cyhcImpkLWZvcm1cIil9IGFuZCBub3QoQHR5cGU9XCJjaGVja2JveFwiKSBhbmQgbm90KEB0eXBlPVwicmFkaW9cIikgYW5kIG5vdChAdHlwZT1cImhpZGRlblwiKSBhbmQgbm90KEB0eXBlPVwic3VibWl0XCIpIGFuZCBub3QoQHR5cGU9XCJidXR0b25cIikgYW5kIG5vdChAdHlwZT1cInJlc2V0XCIpIGFuZCBub3QoQHR5cGU9XCJmaWxlXCIpXWAsaD1gLi8vdGV4dGFyZWFbJHtzKFwiamQtZm9ybVwiKX1dYCxnPWAuLy9kaXZbJHtzKFwiZHJvcGRvd24tbWVudVwiKX1dLy8qWyR7cyhcImRyb3Bkb3duLWl0ZW1cIil9XWAsYj0nLi8vKltjb250YWlucyh0cmFuc2xhdGUoQGlkLCBcIkVEVUNBVElPTlwiLCBcImVkdWNhdGlvblwiKSwgXCJlZHVjYXRpb25cIikgb3IgY29udGFpbnModHJhbnNsYXRlKEBjbGFzcywgXCJFRFVDQVRJT05cIiwgXCJlZHVjYXRpb25cIiksIFwiZWR1Y2F0aW9uXCIpXSc7ZnVuY3Rpb24geShlKXtyZXR1cm4gZS5yZXBsYWNlKC9bKlxcdTI3MzFdL2csXCJcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCl9ZnVuY3Rpb24gdihlKXtyZXR1cm4gZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aD4wJiZcIm5vbmVcIiE9PXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUpLmRpc3BsYXkmJlwiaGlkZGVuXCIhPT13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlKS52aXNpYmlsaXR5fWZ1bmN0aW9uIHcoZSl7bGV0IHQ9eShlKS50b0xvd2VyQ2FzZSgpO3JldHVybiEoIXR8fHQuaW5jbHVkZXMoXCJwcmVmZXJlbmNlXCIpKSYmL1xcYnJlZmVyZW5jZXM/XFxiLy50ZXN0KHQpfWZ1bmN0aW9uIFMoZSl7aWYoIWUpcmV0dXJuXCJcIjtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoXCIuamQtcmVnLXRpdGxlIGgyLCAuamQtcmVnLXRpdGxlXCIpO3JldHVybiB5KHQ/LnRleHRDb250ZW50fHxcIlwiKX1mdW5jdGlvbiBFKGUpe2lmKGUuY2xvc2VzdChcIi5qZC1yZWctY2FyZC5pZC1yZWctcmVmZXJlbmNlXCIpKXJldHVybiEwO2xldCB0PVtlLmNsb3Nlc3QoXCIucm93XCIpLGUuY2xvc2VzdChcIi5tb2RhbC1jb250ZW50XCIpLGUuY2xvc2VzdChcIi5qb2ItYXBwLW1haW5cIiksZS5jbG9zZXN0KFwiZm9ybVwiKV07cmV0dXJuIHQuc29tZShlPT53KFMoZSkpKX1mdW5jdGlvbiB4KGUpe2xldCB0PWRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoZSxOb2RlRmlsdGVyLlNIT1dfVEVYVCx7YWNjZXB0Tm9kZShlKXtsZXQgdD1lLnBhcmVudEVsZW1lbnQ7cmV0dXJuIXR8fHQuY2xvc2VzdChcImEsIGJ1dHRvbiwgc2NyaXB0LCBzdHlsZSwgc3ZnXCIpP05vZGVGaWx0ZXIuRklMVEVSX1JFSkVDVDooZS50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpP05vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVDpOb2RlRmlsdGVyLkZJTFRFUl9SRUpFQ1R9fSkscj1bXSxuPXQubmV4dE5vZGUoKTtmb3IoO247KXtsZXQgZT0obi50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpO2UmJnIucHVzaChlKSxuPXQubmV4dE5vZGUoKX1yZXR1cm4geShyLmpvaW4oXCIgXCIpKX1mdW5jdGlvbiBDKGUpe2xldCB0PUFycmF5LmZyb20oZS5jaGlsZE5vZGVzKS5maWx0ZXIoZT0+ZS5ub2RlVHlwZT09PU5vZGUuVEVYVF9OT0RFKS5tYXAoZT0+ZS50ZXh0Q29udGVudHx8XCJcIikuam9pbihcIiBcIik7cmV0dXJuIHkodCl9ZnVuY3Rpb24gQShlKXtsZXQgdD1lLmlkP3koZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtlLmlkfVwiXWApPy50ZXh0Q29udGVudHx8XCJcIik6XCJcIixyPXkoZS5jbG9zZXN0KFwibGFiZWxcIik/LnRleHRDb250ZW50fHxcIlwiKSxuPXkoZS5uZXh0RWxlbWVudFNpYmxpbmc/LnRleHRDb250ZW50fHxcIlwiKSxvPXkoZS5jbG9zZXN0KFwiLnJhZGlvLWJ1dHRvblwiKT8udGV4dENvbnRlbnR8fFwiXCIpO3JldHVybiB0fHxyfHxufHxvfHx5KGUudmFsdWUpfWZ1bmN0aW9uIGsoZSl7bGV0IHQ9KDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoYGFuY2VzdG9yOjpkaXZbJHtzKFwiamQtZm9ybS1sYXlvdXRcIil9XVsxXWAsZSk7aWYodCl7bGV0IGU9KDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoZCx0KTtpZihlKXJldHVybiBlfWxldCByPSgwLGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKGBhbmNlc3Rvcjo6bGFiZWxbJHtzKFwiamQtY2hlY2tib3hcIil9XVsxXWAsZSk7aWYocil7bGV0IGU9KDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXCIuL2xhYmVsXCIscik7cmV0dXJuIGV8fHJ9cmV0dXJuIG51bGx9ZnVuY3Rpb24gVChlLHQpe2lmKHQmJi9cXCovLnRlc3QodC50ZXh0Q29udGVudHx8XCJcIikpcmV0dXJuITA7bGV0IHI9KDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXCIuLy9pbnB1dFtAcmVxdWlyZWQgb3IgQGFyaWEtcmVxdWlyZWQ9J3RydWUnXSB8IC4vL3RleHRhcmVhW0ByZXF1aXJlZCBvciBAYXJpYS1yZXF1aXJlZD0ndHJ1ZSddIHwgLi8vc2VsZWN0W0ByZXF1aXJlZCBvciBAYXJpYS1yZXF1aXJlZD0ndHJ1ZSddXCIsZSk7cmV0dXJuISFyfWZ1bmN0aW9uIEYoZSl7bGV0IHQ9KDAsaS5nZXRPcmRlcmVkTm9kZXNTYWZlKShnLGUpLHI9W10sbj1uZXcgU2V0O2ZvcihsZXQgZSBvZiB0KXtsZXQgdD0oZS50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpO3QmJihuLmhhcyh0KXx8KG4uYWRkKHQpLHIucHVzaCh0KSkpfXJldHVybiByfWZ1bmN0aW9uIEkoZSl7cmV0dXJuIGUubWFwKGU9Pih7bGFiZWw6ZS5sYWJlbCx0eXBlOmUudHlwZSxvcHRpb25zOmUub3B0aW9uc3x8W119KSl9ZnVuY3Rpb24gaihlKXtsZXQgdD17W2EuSk9CRElWQV9QSE9ORV9DT1VOVFJZX0NPREVfTEFCRUxdOlN0cmluZyhlLmNvdW50cnl8fFwiXCIpLnRyaW0oKSxbeShlLmxhYmVsKXx8XCJQaG9uZVwiXTpTdHJpbmcoZS50ZXh0fHxcIlwiKS50cmltKCl9O3JldHVybiB2b2lkIDAhPT1lLnR5cGUmJih0W2EuSk9CRElWQV9QSE9ORV9UWVBFX0xBQkVMXT1TdHJpbmcoZS50eXBlfHxcIlwiKS50cmltKCkpLHR9ZnVuY3Rpb24gRChlKXtsZXQgdD0oMCxpLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShgLi8vKlske3MoXCJkcm9wZG93bi1pdGVtXCIpfSBhbmQgY29udGFpbnMoY29uY2F0KFwiIFwiLCBub3JtYWxpemUtc3BhY2UoQGNsYXNzKSwgXCIgXCIpLCBcIiBzZWxlY3RlZCBcIildYCxlKTtpZih0KXJldHVybiB5KHQudGV4dENvbnRlbnR8fFwiXCIpO2xldCByPSgwLGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKGAuLy9zcGFuWyR7cyhcInRleHQtdHJ1bmNhdGVcIil9XWAsZSk7aWYocilyZXR1cm4geShyLnRleHRDb250ZW50fHxcIlwiKTtsZXQgbj0oMCxpLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKSgnLi8vYnV0dG9uW0BkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCJdJyxlKTtyZXR1cm4geShuPy50ZXh0Q29udGVudHx8XCJcIil9ZnVuY3Rpb24gUChlLHQpe2xldCByPXkoZSk7aWYoIXIpcmV0dXJuW107bGV0IG49dC5tYXAoZT0+eShTdHJpbmcoZT8/XCJcIikpKTtpZihbXCJGcm9tXCIsXCJUb1wiXS5pbmNsdWRlcyhyKSYmbi5sZW5ndGg+PTIpcmV0dXJuW1tgJHtyfSBNb250aGAsblswXV0sW2Ake3J9IFllYXJgLG5bMV1dXS5maWx0ZXIoKFssZV0pPT4hIWUpO2xldCBvPW4uZmluZChCb29sZWFuKTtyZXR1cm4gbz9bW3Isb11dOltdfWZ1bmN0aW9uIF8oZSx0LHIsbil7cmV0dXJue2xhYmVsOnkobiksdHlwZTpvLkZJRUxEX1RZUEUuU0VMRUNULHJlcXVpcmVkOlQoZSxyKSxvcHRpb25zOkYodCksJGlucHV0OnQsJGxhYmVsOnJ9fWZ1bmN0aW9uIEwoZSx0KXtsZXQgcj0oMCxpLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShwLGUpO2lmKCFyKXJldHVybiBudWxsO2xldCBuPSgwLGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKGAuLy9kaXZbJHtzKFwiamQtZm9ybS1zZWxlY3RcIil9XVsxXWAsZSksYT0oMCxpLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShgLi8vZGl2WyR7cyhcImRyb3ByaWdodFwiKX1dWzFdYCxyKSxsPSgwLGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKCcuLy9pbnB1dFtAdHlwZT1cInRlbFwiXScscik7aWYoIWF8fCFsKXJldHVybiBudWxsO2xldCB1PVQoZSx0KSxjPVtdO3JldHVybiBuJiZjLnB1c2goe2xhYmVsOlwidHlwZVwiLHR5cGU6by5GSUVMRF9UWVBFLlNFTEVDVCxyZXF1aXJlZDp1LG9wdGlvbnM6RihuKSwkaW5wdXQ6biwkbGFiZWw6dH0pLGMucHVzaCh7bGFiZWw6XCJjb3VudHJ5XCIsdHlwZTpvLkZJRUxEX1RZUEUuU0VMRUNULHJlcXVpcmVkOnUsb3B0aW9uczpGKGEpLCRpbnB1dDphLCRsYWJlbDp0fSx7bGFiZWw6XCJ0ZXh0XCIsdHlwZTpvLkZJRUxEX1RZUEUuVEVYVCxyZXF1aXJlZDp1LCRpbnB1dDpsLCRsYWJlbDp0fSkse2xhYmVsOnkodC50ZXh0Q29udGVudHx8XCJcIiksdHlwZTpvLkZJRUxEX1RZUEUuU0VDVElPTixyZXF1aXJlZDp1LGNoaWxkcmVuOmMsb3B0aW9uczpJKGMpLCRpbnB1dDpyfX1hc3luYyBmdW5jdGlvbiBSKGUpe2lmKCFlKXJldHVybiBudWxsO2xldCB0PWUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiamQtZm9ybS1sYXlvdXRcIik/ZTooMCxpLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShgYW5jZXN0b3I6OmRpdlske3MoXCJqZC1mb3JtLWxheW91dFwiKX1dWzFdYCxlKXx8ZTtpZihFKHQpKXJldHVybiBudWxsO2xldCByPSgwLGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKGQsdCksbj1cIkxBQkVMXCI9PT1lLnRhZ05hbWUmJmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiamQtY2hlY2tib3hcIik/ZTpudWxsLGE9bj8oMCxpLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcIi4vbGFiZWxcIixuKXx8bjpudWxsLGw9YXx8cjtpZighbClyZXR1cm4gbnVsbDtsZXQgdT1uP3gobCl8fHkobi50ZXh0Q29udGVudHx8XCJcIik6eShsLnRleHRDb250ZW50fHxcIlwiKTtpZih3KHUpKXJldHVybiBudWxsO2xldCBjPXI/TCh0LHIpOm51bGw7aWYoYylyZXR1cm4gYztsZXQgcD1udWxsLGc9bnVsbDtpZihuKXA9KGc9KDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoJy4vL2lucHV0W0B0eXBlPVwiY2hlY2tib3hcIl0nLG4pKT9vLkZJRUxEX1RZUEUuQ0hFQ0tCT1g6bnVsbDtlbHNle2xldCBlPSgwLGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKCcuLy9pbnB1dFtAdHlwZT1cInJhZGlvXCJdJyx0KSxyPSgwLGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKG0sdCksbj0oMCxpLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShoLHQpLGE9KDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoZix0KTtlPyhwPW8uRklFTERfVFlQRS5SQURJT0dST1VQLGc9ZSk6cj8ocD1vLkZJRUxEX1RZUEUuVEVYVCxnPXIpOm4/KHA9by5GSUVMRF9UWVBFLlRFWFQsZz1uKTphJiYocD1vLkZJRUxEX1RZUEUuU0VMRUNULGc9YSl9aWYoIXB8fCFnKXJldHVybiBudWxsO2xldCBiPVQobnx8dCxsKSx2PVtdO2lmKHA9PT1vLkZJRUxEX1RZUEUuU0VMRUNUJiYodj1GKGcpKSxwPT09by5GSUVMRF9UWVBFLlJBRElPR1JPVVApe2xldCBlPXR8fGcuY2xvc2VzdChcImZvcm1cIikscj1BcnJheS5mcm9tKChlfHxkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJykpLG49ZyxvPW4ubmFtZT9yLmZpbHRlcihlPT5lLm5hbWU9PT1uLm5hbWUpOnIsaT1vLm1hcChlPT57bGV0IHQ9ZS5pZD8oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtlLmlkfVwiXWApPy50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpOlwiXCIscj1lLmNsb3Nlc3QoXCJsYWJlbFwiKT8udGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIjtyZXR1cm4geSh0fHxyfHxlLnZhbHVlKX0pLmZpbHRlcihCb29sZWFuKTtyZXR1cm57bGFiZWw6dSx0eXBlOnAscmVxdWlyZWQ6YixvcHRpb25zOkFycmF5LmZyb20obmV3IFNldChpKSksJGlucHV0Om4sJHJhZGlvUGFyZW50OmV8fHQsJGxhYmVsOmx9fXJldHVybiBwPT09by5GSUVMRF9UWVBFLkNIRUNLQk9YP3tsYWJlbDp1LHR5cGU6cCxyZXF1aXJlZDpiLG9wdGlvbnM6W3VdLCRjaGVja2JveHM6W2ddLCRpbnB1dDpnLCRsYWJlbDpsfTp7bGFiZWw6dSx0eXBlOnAscmVxdWlyZWQ6YixvcHRpb25zOnYsJGlucHV0OmcsJGxhYmVsOmx9fWZ1bmN0aW9uIE8oZSl7cmV0dXJuISEoMCxpLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShgYW5jZXN0b3Itb3Itc2VsZjo6Klske3MoXCJlZHVjYXRpb25cIil9IG9yICR7cyhcImlkLXJlZy1lZHVjYXRpb25cIil9IG9yICR7cyhcImlkLXJlZy13b3JrZXhwZXJpZW5jZVwiKX0gb3IgY29udGFpbnModHJhbnNsYXRlKEBpZCwgXCJFRFVDQVRJT05NUExZUkNXT1JLXCIsIFwiZWR1Y2F0aW9ubXBseXJjd29ya1wiKSwgXCJlZHVjYXRpb25cIikgb3IgY29udGFpbnModHJhbnNsYXRlKEBpZCwgXCJFRFVDQVRJT05NUExZUkNXT1JLXCIsIFwiZWR1Y2F0aW9ubXBseXJjd29ya1wiKSwgXCJ3b3JrZXhwZXJpZW5jZVwiKV1bMV1gLGUpfWFzeW5jIGZ1bmN0aW9uIE0oZSl7bGV0IHQ9W10scj0oMCxpLmdldE9yZGVyZWROb2Rlc1NhZmUpKGAuLy9kaXZbJHtzKFwiamQtZm9ybS1sYXlvdXRcIil9XWAsZSksbj1uZXcgU2V0O2ZvcihsZXQgZSBvZiByKXtsZXQgcj0oMCxpLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShkLGUpLG89KDAsaS5nZXRPcmRlcmVkTm9kZXNTYWZlKShmLGUpO2lmKHImJm8ubGVuZ3RoPj0yJiZbXCJGcm9tXCIsXCJUb1wiXS5pbmNsdWRlcyh5KHIudGV4dENvbnRlbnR8fFwiXCIpKSl7bGV0IG49eShyLnRleHRDb250ZW50fHxcIlwiKTt0LnB1c2goXyhlLG9bMF0scixgJHtufSBNb250aGApLF8oZSxvWzFdLHIsYCR7bn0gWWVhcmApKTtjb250aW51ZX1sZXQgYT1hd2FpdCBSKGUpO2lmKCFhKWNvbnRpbnVlO2xldCBsPWAke2EubGFiZWx9OiR7YS50eXBlfWA7bi5oYXMobCl8fChuLmFkZChsKSx0LnB1c2goYSkpfXJldHVybiB0fWZ1bmN0aW9uIE4oZSl7cmV0dXJuIEkoZSl9ZnVuY3Rpb24gJChlKXtsZXQgdD1DKGUpO2lmKHQpcmV0dXJuIHQ7bGV0IHI9ZS5xdWVyeVNlbGVjdG9yKFwiLmpkLWxhYmVsLCBsYWJlbCwgbGVnZW5kLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2XCIpO2lmKHIpcmV0dXJuIHkoci50ZXh0Q29udGVudHx8XCJcIik7bGV0IG49ZS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtyZXR1cm4geShuPy5uYW1lfHxcIlwiKX1mdW5jdGlvbiBCKGUsdCxyPXt9KXtsZXQgbj1bXSxpPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnJhZGlvLWJ1dHRvbnMtZGl2XCIpKTtmb3IobGV0IGUgb2YgaSl7aWYoZS5jbG9zZXN0KFwiLmpkLWZvcm0tbGF5b3V0XCIpfHxyLnNraXBFZHVFeHAmJk8oZSl8fEUoZSkpY29udGludWU7bGV0IGk9QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpKS5maWx0ZXIodik7aWYoMD09PWkubGVuZ3RoKWNvbnRpbnVlO2xldCBhPSQoZSk7aWYoIWF8fHcoYSkpY29udGludWU7bGV0IGw9YCR7YX06JHtvLkZJRUxEX1RZUEUuUkFESU9HUk9VUH1gO2lmKHQuaGFzKGwpKWNvbnRpbnVlO3QuYWRkKGwpO2xldCBzPWkubWFwKEEpLmZpbHRlcihCb29sZWFuKTtuLnB1c2goe2xhYmVsOmEsdHlwZTpvLkZJRUxEX1RZUEUuUkFESU9HUk9VUCxyZXF1aXJlZDovXFwqLy50ZXN0KEMoZSkpfHxpLnNvbWUoZT0+ZS5yZXF1aXJlZHx8XCJ0cnVlXCI9PT1lLmdldEF0dHJpYnV0ZShcImFyaWEtcmVxdWlyZWRcIikpLG9wdGlvbnM6QXJyYXkuZnJvbShuZXcgU2V0KHMpKSwkaW5wdXQ6aVswXSwkcmFkaW9QYXJlbnQ6ZSwkcmFkaW9zOml9KX1yZXR1cm4gbn1mdW5jdGlvbiBxKGUsdCl7cmV0dXJuIEFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKHQpKS5maWx0ZXIoZT0+ISFlLnF1ZXJ5U2VsZWN0b3IoXCIuamQtZm9ybS1sYXlvdXRcIikpfWFzeW5jIGZ1bmN0aW9uIFUoKXtyZXR1cm4gSChkb2N1bWVudCl9YXN5bmMgZnVuY3Rpb24gSChlPWRvY3VtZW50KXtsZXQgdD1bXSxyPUcoZSk7Zm9yKGxldCBlIG9mIHIpe2xldCByPWF3YWl0IE0oZSk7MCE9PXIubGVuZ3RoJiZ0LnB1c2goe3R5cGU6by5GSUVMRF9UWVBFLkVEVUNBVElPTixsYWJlbDpcIkVkdWNhdGlvblwiLHJlcXVpcmVkOiEwLGNoaWxkcmVuOnIsb3B0aW9uczpOKHIpfSl9cmV0dXJuIHR9YXN5bmMgZnVuY3Rpb24gWSgpe3JldHVybiB6KGRvY3VtZW50KX1hc3luYyBmdW5jdGlvbiB6KGU9ZG9jdW1lbnQpe2xldCB0PVtdLHI9SyhlKTtmb3IobGV0IGUgb2Ygcil7bGV0IHI9YXdhaXQgTShlKTswIT09ci5sZW5ndGgmJnQucHVzaCh7dHlwZTpvLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVCxsYWJlbDpcIkV4cGVyaWVuY2VcIixyZXF1aXJlZDohMCxjaGlsZHJlbjpyLG9wdGlvbnM6TihyKX0pfXJldHVybiB0fWFzeW5jIGZ1bmN0aW9uIFYoZT1kb2N1bWVudCx0PVwicmVndWxhclwiKXtsZXQgcj1bXSxuPW5ldyBTZXQsbz0oMCxpLmdldE9yZGVyZWROb2Rlc1NhZmUpKHUsZSk7Zm9yKGxldCBlIG9mIG8pe2lmKE8oZSkpY29udGludWU7bGV0IHQ9YXdhaXQgUihlKTtpZighdCljb250aW51ZTtsZXQgbz1gJHt0LmxhYmVsfToke3QudHlwZX1gO24uaGFzKG8pfHwobi5hZGQobyksci5wdXNoKHQpKX1sZXQgYT0oMCxpLmdldE9yZGVyZWROb2Rlc1NhZmUpKGMsZSk7Zm9yKGxldCBlIG9mIGEpe2lmKE8oZSkpY29udGludWU7bGV0IHQ9YXdhaXQgUihlKTtpZighdCljb250aW51ZTtsZXQgbz1gJHt0LmxhYmVsfToke3QudHlwZX1gO24uaGFzKG8pfHwobi5hZGQobyksci5wdXNoKHQpKX1pZihyLnB1c2goLi4uQihlLG4pKSxcInJlZ3VsYXJcIj09PXQpe2xldCB0PWF3YWl0IEgoZSk7dC5sZW5ndGg+MCYmci5wdXNoKHRbMF0pO2xldCBuPWF3YWl0IHooZSk7bi5sZW5ndGg+MCYmci5wdXNoKG5bMF0pfXJldHVybiByfWZ1bmN0aW9uIFcoZSx0PWRvY3VtZW50KXtsZXQgcj0oMCxsLmdldEpvYmRpdmFTaWduSW5JbnB1dHMpKHQpO3JldHVybiAwPT09ci5zaXplP2U6ZS5mbGF0TWFwKGU9PntpZihyLmhhcyhlLiRpbnB1dCkpcmV0dXJuW107aWYoZS50eXBlIT09by5GSUVMRF9UWVBFLlNFQ1RJT058fCFBcnJheS5pc0FycmF5KGUuY2hpbGRyZW4pKXJldHVybltlXTtsZXQgbj1XKGUuY2hpbGRyZW4sdCk7cmV0dXJuIG4ubGVuZ3RoPjA/W3suLi5lLGNoaWxkcmVuOm59XTpbXX0pfWZ1bmN0aW9uIEcoZT1kb2N1bWVudCl7bGV0IHQ9cShlLFwiLmpkLXJlZy1jYXJkLmlkLXJlZy1lZHVjYXRpb25cIik7aWYodC5sZW5ndGg+MClyZXR1cm4gdDtsZXQgcj0oMCxpLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShiLGUpO3JldHVybiByP1tyXTpbXX1mdW5jdGlvbiBLKGU9ZG9jdW1lbnQpe3JldHVybiBxKGUsXCIuamQtcmVnLWNhcmQuaWQtcmVnLXdvcmtleHBlcmllbmNlXCIpfWZ1bmN0aW9uIFgoZT1kb2N1bWVudCx0PXt9KXtsZXQgcj17fSxuPSEwPT09dC5za2lwRWR1RXhwLG89KDAsaS5nZXRPcmRlcmVkTm9kZXNTYWZlKSh1LGUpO2ZvcihsZXQgZSBvZiBvKXtpZihuJiZPKGUpfHxFKGUpKWNvbnRpbnVlO2xldCBvPSgwLGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKGQsZSk7aWYoIW8pY29udGludWU7bGV0IGE9eShvLnRleHRDb250ZW50fHxcIlwiKTtpZighYSljb250aW51ZTtsZXQgbD1MKGUsbyk7aWYobCl7bGV0IGU9bC5jaGlsZHJlbi5maW5kKGU9PlwidHlwZVwiPT09ZS5sYWJlbCksdD1sLmNoaWxkcmVuLmZpbmQoZT0+XCJjb3VudHJ5XCI9PT1lLmxhYmVsKSxuPWwuY2hpbGRyZW4uZmluZChlPT5cInRleHRcIj09PWUubGFiZWwpLG89ZT9EKGUuJGlucHV0KTpcIlwiLGk9dD9EKHQuJGlucHV0KTpcIlwiLHM9bj8uJGlucHV0LnZhbHVlfHxcIlwiO09iamVjdC5hc3NpZ24ocixqKHtsYWJlbDphLHR5cGU6ZT9vOnZvaWQgMCxjb3VudHJ5OmksdGV4dDpzfSkpO2NvbnRpbnVlfWxldCBzPSgwLGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKG0sZSk7aWYocyl7aWYodC5leGNsdWRlZElucHV0cz8uaGFzKHMpKWNvbnRpbnVlO3JbYV09XCJwYXNzd29yZFwiPT09cy50eXBlP1wiXCI6cy52YWx1ZXx8XCJcIjtjb250aW51ZX1sZXQgdT0oMCxpLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShoLGUpO2lmKHUpe3JbYV09dS52YWx1ZXx8XCJcIjtjb250aW51ZX1sZXQgYz0oMCxpLmdldE9yZGVyZWROb2Rlc1NhZmUpKGYsZSk7aWYoYy5sZW5ndGg+MCl7bGV0IGU9Yy5tYXAoZT0+RChlKSk7Zm9yKGxldFt0LG5db2YgUChhLGUpKXJbdF09bn19bGV0IGE9KDAsaS5nZXRPcmRlcmVkTm9kZXNTYWZlKShjLGUpO2ZvcihsZXQgZSBvZiBhKXtpZihuJiZPKGUpfHxFKGUpKWNvbnRpbnVlO2xldCB0PSgwLGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKCcuLy9pbnB1dFtAdHlwZT1cImNoZWNrYm94XCJdJyxlKTtpZighdCljb250aW51ZTtsZXQgbz0oMCxpLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcIi4vbGFiZWxcIixlKSxhPXgob3x8ZSl8fHkoZS50ZXh0Q29udGVudHx8XCJcIik7YSYmKHJbYV09dC5jaGVja2VkP1wiWWVzXCI6XCJOb1wiKX1sZXQgbD1uZXcgU2V0O2ZvcihsZXQgdCBvZiBCKGUsbCx7c2tpcEVkdUV4cDpufSkpe2xldCBlPXQuJHJhZGlvc3x8W10sbj1lLmZpbmQoZT0+ZS5jaGVja2VkKTtyW3QubGFiZWxdPW4/QShuKTpcIlwifXJldHVybiByfWZ1bmN0aW9uIEooZT1kb2N1bWVudCl7bGV0IHQ9KDAsbC5nZXRKb2JkaXZhU2lnbkluSW5wdXRzKShlKSxyPVgoZSx7c2tpcEVkdUV4cDohMCxleGNsdWRlZElucHV0czp0fSksbj1HKGUpO2lmKG4ubGVuZ3RoPjApe2xldCBlPW4ubWFwKGU9PlgoZSx7ZXhjbHVkZWRJbnB1dHM6dH0pKTtyLmVkdWNhdGlvbj1lLmZpbHRlcihlPT5PYmplY3Qua2V5cyhlKS5sZW5ndGg+MCl9bGV0IG89SyhlKTtpZihvLmxlbmd0aD4wKXtsZXQgZT1vLm1hcChlPT5YKGUse2V4Y2x1ZGVkSW5wdXRzOnR9KSk7ci5lbXBsb3ltZW50PWUuZmlsdGVyKGU9Pk9iamVjdC5rZXlzKGUpLmxlbmd0aD4wKX1yZXR1cm4gcn1cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6InJ1bGVzLjQ1ZmM4MmEzLmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);