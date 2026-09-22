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
})({"T3JJR":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\myworkday\\education-operation.js",
    "bundleId": "9d228bfb3f1228d2",
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
var j = z(require("691c4ba71a10a1b1"));
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

},{"691c4ba71a10a1b1":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"i3VCf":[function(require,module,exports) {
/**
 * Parcel module id: aet9i
 * Resolved path: src/contents/sites/myworkday/education-operation.js
 * Dependencies:
 *   ../../../core/enums -> 1O3nc  =>  src/core/enums.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/sites/resolve-trace-tracking -> da2o3  =>  src/contents/sites/resolve-trace-tracking.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "buildWorkdayEducationRuntimeValidationRetryRecord", ()=>a), n.export(r, "shouldResolveWorkdayEducationLabel", ()=>_), n.export(r, "getWorkdayEducationOriginalAnswerFromRecord", ()=>L), n.export(r, "buildWorkdayEducationOperation", ()=>R), n.export(r, "mergeWorkdayEducationOperationIntoRecord", ()=>O), n.export(r, "applyWorkdayEducationResolveResult", ()=>M), n.export(r, "buildWorkdayEducationResolveTrackingData", ()=>N), n.export(r, "buildWorkdayEducationRuntimeValidationTrackingData", ()=>q), n.export(r, "getWorkdayEducationRuntimeValidationLogEntries", ()=>U), n.export(r, "getUnresolvedWorkdayEducationRuntimeValidationLogEntries", ()=>H), n.export(r, "resolveWorkdayEducationRecord", ()=>Y), n.export(r, "resolveWorkdayEducationRecordsInParallel", ()=>z);
var o = e("~contents/sites/resolve-trace-tracking"), i = e("../../../core/enums");
function a({ record: e1, ruleLabel: t, attemptedCandidates: r1 }) {
    let n = Array.from(new Set(r1.map((e1)=>String(e1 ?? "").trim()).filter(Boolean)));
    return t && 0 !== n.length ? {
        ...e1,
        [t]: n
    } : {
        ...e1
    };
}
let l = {
    school: "School",
    discipline: "Field of Study",
    degree: "Degree"
}, s = {
    school: new Set([
        "school"
    ]),
    discipline: new Set([
        "fieldofstudy",
        "discipline"
    ]),
    degree: new Set([
        "degree"
    ])
};
function u(e1) {
    return String(e1 ?? "").trim().toLowerCase();
}
function c(e1) {
    let t = u(e1);
    return "field of study" === t ? "discipline" : "degree" === t ? "degree" : "school" === t || "school or university" === t ? "school" : null;
}
function d(e1) {
    let t = u(e1);
    return "field of study" === t ? "Field of Study" : "degree" === t ? "Degree" : "school" === t ? "School" : "school or university" === t ? "School or University" : e1;
}
function f(e1) {
    return "string" == typeof e1?.field_type && e1.field_type.trim() ? u(e1.field_type) : "";
}
function p(e1, t) {
    return s[t].has(f(e1));
}
function m(e1, t) {
    let r1 = Array.isArray(e1?.operation) ? e1.operation : [];
    return r1.find((e1)=>p(e1 ?? {}, t)) ?? null;
}
function h(e1) {
    return e1 ? {
        original_answer: String(e1.original_answer ?? "")
    } : null;
}
function g(e1) {
    return Array.from({
        length: e1.length
    }, (t, r1)=>{
        let n = e1[r1] ?? {}, i = m(n, "school"), a = m(n, "discipline"), l = m(n, "degree");
        return {
            recordIndex: r1,
            school: (0, o.buildResolveTraceField)("school", i, y(n, "school")),
            discipline: (0, o.buildResolveTraceField)("discipline", a, y(n, "discipline")),
            degree: (0, o.buildResolveTraceField)("degree", l, y(n, "degree"))
        };
    });
}
function b(e1) {
    let t = e1.find((e1)=>m(e1 ?? {}, "school")), r1 = e1.find((e1)=>m(e1 ?? {}, "discipline")), n = e1.find((e1)=>m(e1 ?? {}, "degree"));
    return {
        school: (0, o.cloneAutofillOperationCommon)(m(t ?? {}, "school")),
        discipline: (0, o.cloneAutofillOperationCommon)(m(r1 ?? {}, "discipline")),
        degree: (0, o.cloneAutofillOperationCommon)(m(n ?? {}, "degree"))
    };
}
function y(e1, t) {
    return "school" === t ? S(e1?.["School or University"]) || S(e1?.School) : "degree" === t ? S(e1?.Degree) || S(e1?.rawDegree) : S(e1?.["Field of Study"]) || S(e1?.Study);
}
function v(e1) {
    let t = c(e1.label);
    return !!t && ("school" === t ? e1.type === i.FIELD_TYPE.SEARCH || e1.type === i.FIELD_TYPE.MULTI_SELECT : "discipline" === t);
}
function w(e1) {
    return e1.selected_values.find((e1)=>"string" == typeof e1 && e1.trim()) ?? "";
}
function S(e1) {
    return "string" == typeof e1 ? e1.trim() : Array.isArray(e1) ? e1.find((e1)=>"string" == typeof e1 && e1.trim()) ?? "" : "";
}
_c = S;
function E(e1) {
    let t = e1.trim();
    if (!t) return !1;
    if (/^\d+$/.test(t)) return !0;
    try {
        let e1 = JSON.parse(t);
        if (Array.isArray(e1) && e1.length > 0) return e1.every((e1)=>"string" == typeof e1 && /^\d+$/.test(e1.trim()));
    } catch  {}
    return !1;
}
_c1 = E;
function x(e1) {
    return String(e1 ?? "").trim().toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "");
}
function C(e1, t) {
    let r1 = S(t);
    if (!r1) return;
    let n = x(r1);
    !n || e1.some((e1)=>x(e1) === n) || e1.push(r1);
}
_c2 = C;
function A(e1, t) {
    let r1 = m(e1, t), n = [];
    return r1 ? (C(n, y(e1, t)), C(n, r1.original_answer)) : (C(n, y(e1, t)), "discipline" === t ? (C(n, e1?.rawDegree), C(n, e1?.Study)) : "degree" === t ? (C(n, e1?.rawDegree), C(n, e1?.Degree)) : (C(n, e1?.rawSchool), C(n, e1?.School))), n;
}
_c3 = A;
function k(e1, t) {
    return e1 ? "discipline" === t ? S(e1?.["Field of Study"]) || S(e1?.Study) : "degree" === t ? S(e1?.Degree) : S(e1?.["School or University"]) || S(e1?.School) : "";
}
function T({ record: e1, snapshotRecord: t, fieldType: r1 }) {
    let n = m(e1 ?? {}, r1), o = A(e1 ?? {}, r1), i = k(t, r1), a = x(i), l = !!a && o.some((e1)=>x(e1) === a);
    return {
        status: o.length ? a ? l ? "matched" : "mismatched" : "empty" : "not_checked",
        sourceValue: n?.original_answer ?? o[0] ?? "",
        resolveValue: n ? y(e1 ?? {}, r1) : "",
        committedValue: i,
        attemptedCandidates: o
    };
}
_c4 = T;
function F(e1, t, r1) {
    return e1?.find((e1)=>e1.fieldType === t && e1.index === r1);
}
_c5 = F;
function I(e1) {
    return "empty" === e1 ? "reset_after_empty" : "not_checked" === e1 ? "reset_after_not_checked" : "reset_after_mismatch";
}
_c6 = I;
function j(e1, t) {
    return e1 && t ? {
        ...e1,
        status: t.resetApplied ? I(t.initialStatus) : "matched" === e1.status ? "retry_matched" : e1.status,
        initialStatus: t.initialStatus,
        initialCommittedValue: t.initialCommittedValue,
        retryCount: t.retryCount,
        resetApplied: !0 === t.resetApplied
    } : e1;
}
function D({ record: e1, rule: t }) {
    return !!P(t, "school") && (!!m(e1 ?? {}, "school") || (t?.children ?? []).some((e1)=>"school" === c(e1.label) && v(e1)));
}
_c7 = D;
function P(e1, t) {
    return !e1 || (e1.children ?? []).some((e1)=>c(e1.label) === t);
}
_c8 = P;
function _(e1) {
    let t = c(e1);
    return "discipline" === t;
}
function L(e1, t) {
    let r1 = c(t);
    if ("school" === r1) {
        let t = S(e1?.rawSchool);
        if (t) return t;
        let r1 = S(e1?.["School or University"]);
        return r1 || S(e1?.School);
    }
    if ("degree" === r1) {
        let t = S(e1?.rawDegree);
        return t || S(e1?.Degree);
    }
    let n = S(e1?.["Field of Study"]);
    if (n && !E(n)) return n;
    let o = S(e1?.Study);
    if (o && !E(o)) return o;
    let i = S(e1?.rawDegree);
    return i || "";
}
_c9 = L;
function R({ apiBase: e1, label: t, originalAnswer: r1 }) {
    let n = c(t);
    if (!e1 || !e1.trim()) throw Error(`Unable to build workday education operation for ${t}: apiBase is empty`);
    if (!n) throw Error(`Unable to build workday education operation for ${t}: unsupported label`);
    let o = {
        school: {
            question: "What school did you attend?",
            description: "Search and select your school.",
            searchRequestUrl: `${e1}/schools`,
            searchParamDescription: "Search term for the school dropdown."
        },
        discipline: {
            question: "What was your field of study?",
            description: "Search and select your field of study.",
            searchRequestUrl: `${e1}/values/educations/fieldsOfStudy`,
            searchParamDescription: "Search term for the field of study dropdown."
        },
        degree: {
            question: "What degree did you earn?",
            description: "Search and select your degree.",
            searchRequestUrl: `${e1}/values/educations/degrees`,
            searchParamDescription: "Search term for the degree dropdown."
        }
    }, { question: i, description: a, searchRequestUrl: l, searchParamDescription: s } = o[n];
    return {
        field_type: n,
        question: i,
        description: a,
        original_answer: r1,
        search_request_schema: {
            url: l,
            allowed_methods: [
                "GET"
            ],
            headers: {
                accept: "application/json"
            },
            params: [
                {
                    name: "search",
                    location: "query",
                    description: s,
                    default_value: "",
                    isSearchParam: !0
                }
            ]
        }
    };
}
_c10 = R;
function O(e1, t, r1) {
    let n = Array.isArray(e1.operation) ? [
        ...e1.operation
    ] : [], o = {
        ...e1,
        operation: n
    }, i = c(t) ?? ("school" === f(r1) ? "school" : "degree" === f(r1) ? "degree" : "discipline"), a = n.findIndex((e1)=>p(e1 ?? {}, i));
    return a >= 0 ? n.splice(a, 1, r1) : n.push(r1), o;
}
_c11 = O;
function M({ record: e1, label: t, operation: r1, result: n }) {
    if ("SELECT_OPTIONS" !== n.action) return e1;
    let o = w(n);
    return o ? {
        ...O(e1, t, r1),
        [d(t)]: o
    } : e1;
}
_c12 = M;
function N(e1) {
    return Array.isArray(e1) && 0 !== e1.length ? {
        resolve: {
            education: Array.from({
                length: e1.length
            }, (t, r1)=>{
                let n = e1[r1], o = m(n ?? {}, "school"), i = m(n ?? {}, "discipline"), a = m(n ?? {}, "degree");
                return {
                    school: o ? y(n ?? {}, "school") : "",
                    discipline: i ? y(n ?? {}, "discipline") : "",
                    degree: a ? y(n ?? {}, "degree") : ""
                };
            })
        },
        resolvePayload: {
            educationCommon: b(e1),
            education: Array.from({
                length: e1.length
            }, (t, r1)=>{
                let n = e1[r1];
                return {
                    school: h(m(n ?? {}, "school")),
                    discipline: h(m(n ?? {}, "discipline")),
                    degree: h(m(n ?? {}, "degree"))
                };
            })
        },
        resolveTrace: {
            education: g(e1)
        }
    } : {};
}
_c13 = N;
function $(e1, t) {
    return t ? [
        "school",
        "discipline",
        "degree"
    ].map((r1)=>{
        let n = x(k(t, r1));
        return n && A(e1, r1).some((e1)=>x(e1) === n) ? 1 : 0;
    }).reduce((e1, t)=>e1 + t, 0) : 0;
}
function B(e1, t) {
    let r1 = new Set;
    return e1.map((e1, n)=>{
        let o = -1, i = 0;
        for(let n = 0; n < t.length; n++){
            if (r1.has(n)) continue;
            let a = $(e1 ?? {}, t[n]);
            a > i && (i = a, o = n);
        }
        return -1 !== o ? (r1.add(o), t[o]) : r1.has(n) ? void 0 : (r1.add(n), t[n]);
    });
}
_c14 = B;
function q(e1, t = [], r1 = [], n = []) {
    if (!Array.isArray(e1) || 0 === e1.length) return {};
    let o = B(e1, t);
    return {
        validation: {
            education: Array.from({
                length: e1.length
            }, (t, i)=>{
                let a = e1[i] ?? {}, l = o[i], s = r1[i];
                return {
                    school: D({
                        record: a,
                        rule: s
                    }) ? j(T({
                        record: a,
                        snapshotRecord: l,
                        fieldType: "school"
                    }), F(n, "school", i)) : null,
                    discipline: P(s, "discipline") ? j(T({
                        record: a,
                        snapshotRecord: l,
                        fieldType: "discipline"
                    }), F(n, "discipline", i)) : null,
                    degree: P(s, "degree") ? j(T({
                        record: a,
                        snapshotRecord: l,
                        fieldType: "degree"
                    }), F(n, "degree", i)) : null
                };
            })
        }
    };
}
function U(e1) {
    let t = e1?.validation?.education;
    return Array.isArray(t) ? t.flatMap((e1, t)=>[
            "school",
            "discipline",
            "degree"
        ].map((r1)=>{
            let n = e1?.[r1];
            return n?.status ? {
                index: t,
                fieldType: r1,
                fieldLabel: l[r1],
                level: "matched" === n.status || "retry_matched" === n.status ? "info" : "warn",
                status: n.status,
                committedValue: n.committedValue ?? "",
                attemptedCandidates: Array.isArray(n.attemptedCandidates) ? n.attemptedCandidates : []
            } : null;
        }).filter((e1)=>null !== e1)) : [];
}
_c15 = U;
function H(e1) {
    return U(e1).filter((e1)=>"warn" === e1.level && e1.attemptedCandidates.length > 0);
}
_c16 = H;
async function Y({ apiBase: e1, rule: t, record: r1, resolveOperation: n }) {
    if (!v(t)) return r1;
    let o = L(r1, t.label);
    if (!o) return r1;
    let i = R({
        apiBase: e1,
        label: t.label,
        originalAnswer: o
    }), a = await n(i);
    return a ? M({
        record: r1,
        label: t.label,
        operation: a.operation,
        result: a.result
    }) : r1;
}
_c17 = Y;
async function z({ apiBase: e1, rules: t, records: r1, resolveOperation: n }) {
    let o = await Promise.all(r1.map(async (r1, o)=>{
        if (!r1) return r1;
        let i = t[o]?.children ?? [], a = i.filter((e1)=>v(e1));
        if (0 === a.length) return r1;
        let l = await Promise.all(a.map(async (t)=>{
            let o = L(r1, t.label);
            if (!o) return null;
            let i = R({
                apiBase: e1,
                label: t.label,
                originalAnswer: o
            }), a = await n(i);
            return a ? {
                label: t.label,
                operation: a.operation,
                result: a.result
            } : null;
        }));
        return l.reduce((e1, t)=>t ? M({
                record: e1,
                label: t.label,
                operation: t.operation,
                result: t.result
            }) : e1, r1);
    }));
    return o.forEach((e1, t)=>{
        e1 && (r1[t] = e1);
    }), r1;
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17;
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

},{}]},["T3JJR","i3VCf"], "i3VCf", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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bGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtMjhhOTZmYjNmY2ZmNWExYy5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9zaXRlcy9teXdvcmtkYXkvZWR1Y2F0aW9uLW9wZXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxteXdvcmtkYXlcXFxcZWR1Y2F0aW9uLW9wZXJhdGlvbi5qc1wiLFwiYnVuZGxlSWRcIjpcIjlkMjI4YmZiM2YxMjI4ZDJcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiBhZXQ5aVxyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvbXl3b3JrZGF5L2VkdWNhdGlvbi1vcGVyYXRpb24uanNcbiAqIERlcGVuZGVuY2llczpcclxuICogICAuLi8uLi8uLi9jb3JlL2VudW1zIC0+IDFPM25jICA9PiAgc3JjL2NvcmUvZW51bXMuanNcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIH5jb250ZW50cy9zaXRlcy9yZXNvbHZlLXRyYWNlLXRyYWNraW5nIC0+IGRhMm8zICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL3Jlc29sdmUtdHJhY2UtdHJhY2tpbmcuanNcclxuICovXHJcblxyXG52YXIgbiA9IGUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO1xyXG5uLmRlZmluZUludGVyb3BGbGFnKHIpLCBuLmV4cG9ydChyLCBcImJ1aWxkV29ya2RheUVkdWNhdGlvblJ1bnRpbWVWYWxpZGF0aW9uUmV0cnlSZWNvcmRcIiwgKCkgPT4gYSksIG5cclxuICAuZXhwb3J0KHIsIFwic2hvdWxkUmVzb2x2ZVdvcmtkYXlFZHVjYXRpb25MYWJlbFwiLCAoKSA9PiBfKSwgbi5leHBvcnQocixcclxuICAgIFwiZ2V0V29ya2RheUVkdWNhdGlvbk9yaWdpbmFsQW5zd2VyRnJvbVJlY29yZFwiLCAoKSA9PiBMKSwgbi5leHBvcnQocixcclxuICAgIFwiYnVpbGRXb3JrZGF5RWR1Y2F0aW9uT3BlcmF0aW9uXCIsICgpID0+IFIpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJtZXJnZVdvcmtkYXlFZHVjYXRpb25PcGVyYXRpb25JbnRvUmVjb3JkXCIsICgpID0+IE8pLCBuLmV4cG9ydChyLFxyXG4gICAgXCJhcHBseVdvcmtkYXlFZHVjYXRpb25SZXNvbHZlUmVzdWx0XCIsICgpID0+IE0pLCBuLmV4cG9ydChyLFxyXG4gICAgXCJidWlsZFdvcmtkYXlFZHVjYXRpb25SZXNvbHZlVHJhY2tpbmdEYXRhXCIsICgpID0+IE4pLCBuLmV4cG9ydChyLFxyXG4gICAgXCJidWlsZFdvcmtkYXlFZHVjYXRpb25SdW50aW1lVmFsaWRhdGlvblRyYWNraW5nRGF0YVwiLCAoKSA9PiBxKSwgbi5leHBvcnQocixcclxuICAgIFwiZ2V0V29ya2RheUVkdWNhdGlvblJ1bnRpbWVWYWxpZGF0aW9uTG9nRW50cmllc1wiLCAoKSA9PiBVKSwgbi5leHBvcnQocixcclxuICAgIFwiZ2V0VW5yZXNvbHZlZFdvcmtkYXlFZHVjYXRpb25SdW50aW1lVmFsaWRhdGlvbkxvZ0VudHJpZXNcIiwgKCkgPT4gSCksIG4uZXhwb3J0KHIsXHJcbiAgICBcInJlc29sdmVXb3JrZGF5RWR1Y2F0aW9uUmVjb3JkXCIsICgpID0+IFkpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJyZXNvbHZlV29ya2RheUVkdWNhdGlvblJlY29yZHNJblBhcmFsbGVsXCIsICgpID0+IHopO1xyXG52YXIgbyA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvcmVzb2x2ZS10cmFjZS10cmFja2luZ1wiKSxcclxuICBpID0gZShcIi4uLy4uLy4uL2NvcmUvZW51bXNcIik7XHJcblxyXG5mdW5jdGlvbiBhKHtcclxuICByZWNvcmQ6IGUsXHJcbiAgcnVsZUxhYmVsOiB0LFxyXG4gIGF0dGVtcHRlZENhbmRpZGF0ZXM6IHJcclxufSkge1xyXG4gIGxldCBuID0gQXJyYXkuZnJvbShuZXcgU2V0KHIubWFwKGUgPT4gU3RyaW5nKGUgPz8gXCJcIikudHJpbSgpKS5maWx0ZXIoQm9vbGVhbikpKTtcclxuICByZXR1cm4gdCAmJiAwICE9PSBuLmxlbmd0aCA/IHtcclxuICAgIC4uLmUsXHJcbiAgICBbdF06IG5cclxuICB9IDoge1xyXG4gICAgLi4uZVxyXG4gIH1cclxufVxyXG5sZXQgbCA9IHtcclxuICAgIHNjaG9vbDogXCJTY2hvb2xcIixcclxuICAgIGRpc2NpcGxpbmU6IFwiRmllbGQgb2YgU3R1ZHlcIixcclxuICAgIGRlZ3JlZTogXCJEZWdyZWVcIlxyXG4gIH0sXHJcbiAgcyA9IHtcclxuICAgIHNjaG9vbDogbmV3IFNldChbXCJzY2hvb2xcIl0pLFxyXG4gICAgZGlzY2lwbGluZTogbmV3IFNldChbXCJmaWVsZG9mc3R1ZHlcIiwgXCJkaXNjaXBsaW5lXCJdKSxcclxuICAgIGRlZ3JlZTogbmV3IFNldChbXCJkZWdyZWVcIl0pXHJcbiAgfTtcclxuXHJcbmZ1bmN0aW9uIHUoZSkge1xyXG4gIHJldHVybiBTdHJpbmcoZSA/PyBcIlwiKS50cmltKCkudG9Mb3dlckNhc2UoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjKGUpIHtcclxuICBsZXQgdCA9IHUoZSk7XHJcbiAgcmV0dXJuIFwiZmllbGQgb2Ygc3R1ZHlcIiA9PT0gdCA/IFwiZGlzY2lwbGluZVwiIDogXCJkZWdyZWVcIiA9PT0gdCA/IFwiZGVncmVlXCIgOiBcInNjaG9vbFwiID09PSB0IHx8XHJcbiAgICBcInNjaG9vbCBvciB1bml2ZXJzaXR5XCIgPT09IHQgPyBcInNjaG9vbFwiIDogbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBkKGUpIHtcclxuICBsZXQgdCA9IHUoZSk7XHJcbiAgcmV0dXJuIFwiZmllbGQgb2Ygc3R1ZHlcIiA9PT0gdCA/IFwiRmllbGQgb2YgU3R1ZHlcIiA6IFwiZGVncmVlXCIgPT09IHQgPyBcIkRlZ3JlZVwiIDogXCJzY2hvb2xcIiA9PT0gdCA/XHJcbiAgICBcIlNjaG9vbFwiIDogXCJzY2hvb2wgb3IgdW5pdmVyc2l0eVwiID09PSB0ID8gXCJTY2hvb2wgb3IgVW5pdmVyc2l0eVwiIDogZVxyXG59XHJcblxyXG5mdW5jdGlvbiBmKGUpIHtcclxuICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZT8uZmllbGRfdHlwZSAmJiBlLmZpZWxkX3R5cGUudHJpbSgpID8gdShlLmZpZWxkX3R5cGUpIDogXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBwKGUsIHQpIHtcclxuICByZXR1cm4gc1t0XS5oYXMoZihlKSlcclxufVxyXG5cclxuZnVuY3Rpb24gbShlLCB0KSB7XHJcbiAgbGV0IHIgPSBBcnJheS5pc0FycmF5KGU/Lm9wZXJhdGlvbikgPyBlLm9wZXJhdGlvbiA6IFtdO1xyXG4gIHJldHVybiByLmZpbmQoZSA9PiBwKGUgPz8ge30sIHQpKSA/PyBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGgoZSkge1xyXG4gIHJldHVybiBlID8ge1xyXG4gICAgb3JpZ2luYWxfYW5zd2VyOiBTdHJpbmcoZS5vcmlnaW5hbF9hbnN3ZXIgPz8gXCJcIilcclxuICB9IDogbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBnKGUpIHtcclxuICByZXR1cm4gQXJyYXkuZnJvbSh7XHJcbiAgICBsZW5ndGg6IGUubGVuZ3RoXHJcbiAgfSwgKHQsIHIpID0+IHtcclxuICAgIGxldCBuID0gZVtyXSA/PyB7fSxcclxuICAgICAgaSA9IG0obiwgXCJzY2hvb2xcIiksXHJcbiAgICAgIGEgPSBtKG4sIFwiZGlzY2lwbGluZVwiKSxcclxuICAgICAgbCA9IG0obiwgXCJkZWdyZWVcIik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWNvcmRJbmRleDogcixcclxuICAgICAgc2Nob29sOiAoMCwgby5idWlsZFJlc29sdmVUcmFjZUZpZWxkKShcInNjaG9vbFwiLCBpLCB5KG4sIFwic2Nob29sXCIpKSxcclxuICAgICAgZGlzY2lwbGluZTogKDAsIG8uYnVpbGRSZXNvbHZlVHJhY2VGaWVsZCkoXCJkaXNjaXBsaW5lXCIsIGEsIHkobiwgXCJkaXNjaXBsaW5lXCIpKSxcclxuICAgICAgZGVncmVlOiAoMCwgby5idWlsZFJlc29sdmVUcmFjZUZpZWxkKShcImRlZ3JlZVwiLCBsLCB5KG4sIFwiZGVncmVlXCIpKVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGIoZSkge1xyXG4gIGxldCB0ID0gZS5maW5kKGUgPT4gbShlID8/IHt9LCBcInNjaG9vbFwiKSksXHJcbiAgICByID0gZS5maW5kKGUgPT4gbShlID8/IHt9LCBcImRpc2NpcGxpbmVcIikpLFxyXG4gICAgbiA9IGUuZmluZChlID0+IG0oZSA/PyB7fSwgXCJkZWdyZWVcIikpO1xyXG4gIHJldHVybiB7XHJcbiAgICBzY2hvb2w6ICgwLCBvLmNsb25lQXV0b2ZpbGxPcGVyYXRpb25Db21tb24pKG0odCA/PyB7fSwgXCJzY2hvb2xcIikpLFxyXG4gICAgZGlzY2lwbGluZTogKDAsIG8uY2xvbmVBdXRvZmlsbE9wZXJhdGlvbkNvbW1vbikobShyID8/IHt9LCBcImRpc2NpcGxpbmVcIikpLFxyXG4gICAgZGVncmVlOiAoMCwgby5jbG9uZUF1dG9maWxsT3BlcmF0aW9uQ29tbW9uKShtKG4gPz8ge30sIFwiZGVncmVlXCIpKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24geShlLCB0KSB7XHJcbiAgcmV0dXJuIFwic2Nob29sXCIgPT09IHQgPyBTKGU/LltcIlNjaG9vbCBvciBVbml2ZXJzaXR5XCJdKSB8fCBTKGU/LlNjaG9vbCkgOiBcImRlZ3JlZVwiID09PSB0ID8gUyhlXHJcbiAgICA/LkRlZ3JlZSkgfHwgUyhlPy5yYXdEZWdyZWUpIDogUyhlPy5bXCJGaWVsZCBvZiBTdHVkeVwiXSkgfHwgUyhlPy5TdHVkeSlcclxufVxyXG5cclxuZnVuY3Rpb24gdihlKSB7XHJcbiAgbGV0IHQgPSBjKGUubGFiZWwpO1xyXG4gIHJldHVybiAhIXQgJiYgKFwic2Nob29sXCIgPT09IHQgPyBlLnR5cGUgPT09IGkuRklFTERfVFlQRS5TRUFSQ0ggfHwgZS50eXBlID09PSBpLkZJRUxEX1RZUEVcclxuICAgIC5NVUxUSV9TRUxFQ1QgOiBcImRpc2NpcGxpbmVcIiA9PT0gdClcclxufVxyXG5cclxuZnVuY3Rpb24gdyhlKSB7XHJcbiAgcmV0dXJuIGUuc2VsZWN0ZWRfdmFsdWVzLmZpbmQoZSA9PiBcInN0cmluZ1wiID09IHR5cGVvZiBlICYmIGUudHJpbSgpKSA/PyBcIlwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFMoZSkge1xyXG4gIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiBlID8gZS50cmltKCkgOiBBcnJheS5pc0FycmF5KGUpID8gZS5maW5kKGUgPT4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSAmJiBlXHJcbiAgICAudHJpbSgpKSA/PyBcIlwiIDogXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBFKGUpIHtcclxuICBsZXQgdCA9IGUudHJpbSgpO1xyXG4gIGlmICghdCkgcmV0dXJuICExO1xyXG4gIGlmICgvXlxcZCskLy50ZXN0KHQpKSByZXR1cm4gITA7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBlID0gSlNPTi5wYXJzZSh0KTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGUpICYmIGUubGVuZ3RoID4gMCkgcmV0dXJuIGUuZXZlcnkoZSA9PiBcInN0cmluZ1wiID09IHR5cGVvZiBlICYmIC9eXFxkKyQvLnRlc3QoZVxyXG4gICAgICAudHJpbSgpKSlcclxuICB9IGNhdGNoIHt9XHJcbiAgcmV0dXJuICExXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHgoZSkge1xyXG4gIHJldHVybiBTdHJpbmcoZSA/PyBcIlwiKS50cmltKCkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8mL2csIFwiIGFuZCBcIikucmVwbGFjZSgvW15hLXowLTldKy9nLCBcIlwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBDKGUsIHQpIHtcclxuICBsZXQgciA9IFModCk7XHJcbiAgaWYgKCFyKSByZXR1cm47XHJcbiAgbGV0IG4gPSB4KHIpO1xyXG4gICFuIHx8IGUuc29tZShlID0+IHgoZSkgPT09IG4pIHx8IGUucHVzaChyKVxyXG59XHJcblxyXG5mdW5jdGlvbiBBKGUsIHQpIHtcclxuICBsZXQgciA9IG0oZSwgdCksXHJcbiAgICBuID0gW107XHJcbiAgcmV0dXJuIHIgPyAoQyhuLCB5KGUsIHQpKSwgQyhuLCByLm9yaWdpbmFsX2Fuc3dlcikpIDogKEMobiwgeShlLCB0KSksIFwiZGlzY2lwbGluZVwiID09PSB0ID8gKEMobiwgZVxyXG4gICAgPy5yYXdEZWdyZWUpLCBDKG4sIGU/LlN0dWR5KSkgOiBcImRlZ3JlZVwiID09PSB0ID8gKEMobiwgZT8ucmF3RGVncmVlKSwgQyhuLCBlPy5EZWdyZWUpKSA6IChDKFxyXG4gICAgbiwgZT8ucmF3U2Nob29sKSwgQyhuLCBlPy5TY2hvb2wpKSksIG5cclxufVxyXG5cclxuZnVuY3Rpb24gayhlLCB0KSB7XHJcbiAgcmV0dXJuIGUgPyBcImRpc2NpcGxpbmVcIiA9PT0gdCA/IFMoZT8uW1wiRmllbGQgb2YgU3R1ZHlcIl0pIHx8IFMoZT8uU3R1ZHkpIDogXCJkZWdyZWVcIiA9PT0gdCA/IFMoZVxyXG4gICAgPy5EZWdyZWUpIDogUyhlPy5bXCJTY2hvb2wgb3IgVW5pdmVyc2l0eVwiXSkgfHwgUyhlPy5TY2hvb2wpIDogXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBUKHtcclxuICByZWNvcmQ6IGUsXHJcbiAgc25hcHNob3RSZWNvcmQ6IHQsXHJcbiAgZmllbGRUeXBlOiByXHJcbn0pIHtcclxuICBsZXQgbiA9IG0oZSA/PyB7fSwgciksXHJcbiAgICBvID0gQShlID8/IHt9LCByKSxcclxuICAgIGkgPSBrKHQsIHIpLFxyXG4gICAgYSA9IHgoaSksXHJcbiAgICBsID0gISFhICYmIG8uc29tZShlID0+IHgoZSkgPT09IGEpO1xyXG4gIHJldHVybiB7XHJcbiAgICBzdGF0dXM6IG8ubGVuZ3RoID8gYSA/IGwgPyBcIm1hdGNoZWRcIiA6IFwibWlzbWF0Y2hlZFwiIDogXCJlbXB0eVwiIDogXCJub3RfY2hlY2tlZFwiLFxyXG4gICAgc291cmNlVmFsdWU6IG4/Lm9yaWdpbmFsX2Fuc3dlciA/PyBvWzBdID8/IFwiXCIsXHJcbiAgICByZXNvbHZlVmFsdWU6IG4gPyB5KGUgPz8ge30sIHIpIDogXCJcIixcclxuICAgIGNvbW1pdHRlZFZhbHVlOiBpLFxyXG4gICAgYXR0ZW1wdGVkQ2FuZGlkYXRlczogb1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gRihlLCB0LCByKSB7XHJcbiAgcmV0dXJuIGU/LmZpbmQoZSA9PiBlLmZpZWxkVHlwZSA9PT0gdCAmJiBlLmluZGV4ID09PSByKVxyXG59XHJcblxyXG5mdW5jdGlvbiBJKGUpIHtcclxuICByZXR1cm4gXCJlbXB0eVwiID09PSBlID8gXCJyZXNldF9hZnRlcl9lbXB0eVwiIDogXCJub3RfY2hlY2tlZFwiID09PSBlID8gXCJyZXNldF9hZnRlcl9ub3RfY2hlY2tlZFwiIDpcclxuICAgIFwicmVzZXRfYWZ0ZXJfbWlzbWF0Y2hcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBqKGUsIHQpIHtcclxuICByZXR1cm4gZSAmJiB0ID8ge1xyXG4gICAgLi4uZSxcclxuICAgIHN0YXR1czogdC5yZXNldEFwcGxpZWQgPyBJKHQuaW5pdGlhbFN0YXR1cykgOiBcIm1hdGNoZWRcIiA9PT0gZS5zdGF0dXMgPyBcInJldHJ5X21hdGNoZWRcIiA6IGVcclxuICAgICAgLnN0YXR1cyxcclxuICAgIGluaXRpYWxTdGF0dXM6IHQuaW5pdGlhbFN0YXR1cyxcclxuICAgIGluaXRpYWxDb21taXR0ZWRWYWx1ZTogdC5pbml0aWFsQ29tbWl0dGVkVmFsdWUsXHJcbiAgICByZXRyeUNvdW50OiB0LnJldHJ5Q291bnQsXHJcbiAgICByZXNldEFwcGxpZWQ6ICEwID09PSB0LnJlc2V0QXBwbGllZFxyXG4gIH0gOiBlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEQoe1xyXG4gIHJlY29yZDogZSxcclxuICBydWxlOiB0XHJcbn0pIHtcclxuICByZXR1cm4gISFQKHQsIFwic2Nob29sXCIpICYmICghIW0oZSA/PyB7fSwgXCJzY2hvb2xcIikgfHwgKHQ/LmNoaWxkcmVuID8/IFtdKS5zb21lKGUgPT4gXCJzY2hvb2xcIiA9PT1cclxuICAgIGMoZS5sYWJlbCkgJiYgdihlKSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFAoZSwgdCkge1xyXG4gIHJldHVybiAhZSB8fCAoZS5jaGlsZHJlbiA/PyBbXSkuc29tZShlID0+IGMoZS5sYWJlbCkgPT09IHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIF8oZSkge1xyXG4gIGxldCB0ID0gYyhlKTtcclxuICByZXR1cm4gXCJkaXNjaXBsaW5lXCIgPT09IHRcclxufVxyXG5cclxuZnVuY3Rpb24gTChlLCB0KSB7XHJcbiAgbGV0IHIgPSBjKHQpO1xyXG4gIGlmIChcInNjaG9vbFwiID09PSByKSB7XHJcbiAgICBsZXQgdCA9IFMoZT8ucmF3U2Nob29sKTtcclxuICAgIGlmICh0KSByZXR1cm4gdDtcclxuICAgIGxldCByID0gUyhlPy5bXCJTY2hvb2wgb3IgVW5pdmVyc2l0eVwiXSk7XHJcbiAgICByZXR1cm4gciB8fCBTKGU/LlNjaG9vbClcclxuICB9XHJcbiAgaWYgKFwiZGVncmVlXCIgPT09IHIpIHtcclxuICAgIGxldCB0ID0gUyhlPy5yYXdEZWdyZWUpO1xyXG4gICAgcmV0dXJuIHQgfHwgUyhlPy5EZWdyZWUpXHJcbiAgfVxyXG4gIGxldCBuID0gUyhlPy5bXCJGaWVsZCBvZiBTdHVkeVwiXSk7XHJcbiAgaWYgKG4gJiYgIUUobikpIHJldHVybiBuO1xyXG4gIGxldCBvID0gUyhlPy5TdHVkeSk7XHJcbiAgaWYgKG8gJiYgIUUobykpIHJldHVybiBvO1xyXG4gIGxldCBpID0gUyhlPy5yYXdEZWdyZWUpO1xyXG4gIHJldHVybiBpIHx8IFwiXCJcclxufVxyXG5cclxuZnVuY3Rpb24gUih7XHJcbiAgYXBpQmFzZTogZSxcclxuICBsYWJlbDogdCxcclxuICBvcmlnaW5hbEFuc3dlcjogclxyXG59KSB7XHJcbiAgbGV0IG4gPSBjKHQpO1xyXG4gIGlmICghZSB8fCAhZS50cmltKCkpIHRocm93IEVycm9yKFxyXG4gICAgYFVuYWJsZSB0byBidWlsZCB3b3JrZGF5IGVkdWNhdGlvbiBvcGVyYXRpb24gZm9yICR7dH06IGFwaUJhc2UgaXMgZW1wdHlgKTtcclxuICBpZiAoIW4pIHRocm93IEVycm9yKGBVbmFibGUgdG8gYnVpbGQgd29ya2RheSBlZHVjYXRpb24gb3BlcmF0aW9uIGZvciAke3R9OiB1bnN1cHBvcnRlZCBsYWJlbGApO1xyXG4gIGxldCBvID0ge1xyXG4gICAgICBzY2hvb2w6IHtcclxuICAgICAgICBxdWVzdGlvbjogXCJXaGF0IHNjaG9vbCBkaWQgeW91IGF0dGVuZD9cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTZWFyY2ggYW5kIHNlbGVjdCB5b3VyIHNjaG9vbC5cIixcclxuICAgICAgICBzZWFyY2hSZXF1ZXN0VXJsOiBgJHtlfS9zY2hvb2xzYCxcclxuICAgICAgICBzZWFyY2hQYXJhbURlc2NyaXB0aW9uOiBcIlNlYXJjaCB0ZXJtIGZvciB0aGUgc2Nob29sIGRyb3Bkb3duLlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGRpc2NpcGxpbmU6IHtcclxuICAgICAgICBxdWVzdGlvbjogXCJXaGF0IHdhcyB5b3VyIGZpZWxkIG9mIHN0dWR5P1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNlYXJjaCBhbmQgc2VsZWN0IHlvdXIgZmllbGQgb2Ygc3R1ZHkuXCIsXHJcbiAgICAgICAgc2VhcmNoUmVxdWVzdFVybDogYCR7ZX0vdmFsdWVzL2VkdWNhdGlvbnMvZmllbGRzT2ZTdHVkeWAsXHJcbiAgICAgICAgc2VhcmNoUGFyYW1EZXNjcmlwdGlvbjogXCJTZWFyY2ggdGVybSBmb3IgdGhlIGZpZWxkIG9mIHN0dWR5IGRyb3Bkb3duLlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlZ3JlZToge1xyXG4gICAgICAgIHF1ZXN0aW9uOiBcIldoYXQgZGVncmVlIGRpZCB5b3UgZWFybj9cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTZWFyY2ggYW5kIHNlbGVjdCB5b3VyIGRlZ3JlZS5cIixcclxuICAgICAgICBzZWFyY2hSZXF1ZXN0VXJsOiBgJHtlfS92YWx1ZXMvZWR1Y2F0aW9ucy9kZWdyZWVzYCxcclxuICAgICAgICBzZWFyY2hQYXJhbURlc2NyaXB0aW9uOiBcIlNlYXJjaCB0ZXJtIGZvciB0aGUgZGVncmVlIGRyb3Bkb3duLlwiXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBpLFxyXG4gICAgICBkZXNjcmlwdGlvbjogYSxcclxuICAgICAgc2VhcmNoUmVxdWVzdFVybDogbCxcclxuICAgICAgc2VhcmNoUGFyYW1EZXNjcmlwdGlvbjogc1xyXG4gICAgfSA9IG9bbl07XHJcbiAgcmV0dXJuIHtcclxuICAgIGZpZWxkX3R5cGU6IG4sXHJcbiAgICBxdWVzdGlvbjogaSxcclxuICAgIGRlc2NyaXB0aW9uOiBhLFxyXG4gICAgb3JpZ2luYWxfYW5zd2VyOiByLFxyXG4gICAgc2VhcmNoX3JlcXVlc3Rfc2NoZW1hOiB7XHJcbiAgICAgIHVybDogbCxcclxuICAgICAgYWxsb3dlZF9tZXRob2RzOiBbXCJHRVRcIl0sXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHBhcmFtczogW3tcclxuICAgICAgICBuYW1lOiBcInNlYXJjaFwiLFxyXG4gICAgICAgIGxvY2F0aW9uOiBcInF1ZXJ5XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHMsXHJcbiAgICAgICAgZGVmYXVsdF92YWx1ZTogXCJcIixcclxuICAgICAgICBpc1NlYXJjaFBhcmFtOiAhMFxyXG4gICAgICB9XVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gTyhlLCB0LCByKSB7XHJcbiAgbGV0IG4gPSBBcnJheS5pc0FycmF5KGUub3BlcmF0aW9uKSA/IFsuLi5lLm9wZXJhdGlvbl0gOiBbXSxcclxuICAgIG8gPSB7XHJcbiAgICAgIC4uLmUsXHJcbiAgICAgIG9wZXJhdGlvbjogblxyXG4gICAgfSxcclxuICAgIGkgPSBjKHQpID8/IChcInNjaG9vbFwiID09PSBmKHIpID8gXCJzY2hvb2xcIiA6IFwiZGVncmVlXCIgPT09IGYocikgPyBcImRlZ3JlZVwiIDogXCJkaXNjaXBsaW5lXCIpLFxyXG4gICAgYSA9IG4uZmluZEluZGV4KGUgPT4gcChlID8/IHt9LCBpKSk7XHJcbiAgcmV0dXJuIGEgPj0gMCA/IG4uc3BsaWNlKGEsIDEsIHIpIDogbi5wdXNoKHIpLCBvXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE0oe1xyXG4gIHJlY29yZDogZSxcclxuICBsYWJlbDogdCxcclxuICBvcGVyYXRpb246IHIsXHJcbiAgcmVzdWx0OiBuXHJcbn0pIHtcclxuICBpZiAoXCJTRUxFQ1RfT1BUSU9OU1wiICE9PSBuLmFjdGlvbikgcmV0dXJuIGU7XHJcbiAgbGV0IG8gPSB3KG4pO1xyXG4gIHJldHVybiBvID8ge1xyXG4gICAgLi4uTyhlLCB0LCByKSxcclxuICAgIFtkKHQpXTogb1xyXG4gIH0gOiBlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE4oZSkge1xyXG4gIHJldHVybiBBcnJheS5pc0FycmF5KGUpICYmIDAgIT09IGUubGVuZ3RoID8ge1xyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICBlZHVjYXRpb246IEFycmF5LmZyb20oe1xyXG4gICAgICAgIGxlbmd0aDogZS5sZW5ndGhcclxuICAgICAgfSwgKHQsIHIpID0+IHtcclxuICAgICAgICBsZXQgbiA9IGVbcl0sXHJcbiAgICAgICAgICBvID0gbShuID8/IHt9LCBcInNjaG9vbFwiKSxcclxuICAgICAgICAgIGkgPSBtKG4gPz8ge30sIFwiZGlzY2lwbGluZVwiKSxcclxuICAgICAgICAgIGEgPSBtKG4gPz8ge30sIFwiZGVncmVlXCIpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBzY2hvb2w6IG8gPyB5KG4gPz8ge30sIFwic2Nob29sXCIpIDogXCJcIixcclxuICAgICAgICAgIGRpc2NpcGxpbmU6IGkgPyB5KG4gPz8ge30sIFwiZGlzY2lwbGluZVwiKSA6IFwiXCIsXHJcbiAgICAgICAgICBkZWdyZWU6IGEgPyB5KG4gPz8ge30sIFwiZGVncmVlXCIpIDogXCJcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICByZXNvbHZlUGF5bG9hZDoge1xyXG4gICAgICBlZHVjYXRpb25Db21tb246IGIoZSksXHJcbiAgICAgIGVkdWNhdGlvbjogQXJyYXkuZnJvbSh7XHJcbiAgICAgICAgbGVuZ3RoOiBlLmxlbmd0aFxyXG4gICAgICB9LCAodCwgcikgPT4ge1xyXG4gICAgICAgIGxldCBuID0gZVtyXTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgc2Nob29sOiBoKG0obiA/PyB7fSwgXCJzY2hvb2xcIikpLFxyXG4gICAgICAgICAgZGlzY2lwbGluZTogaChtKG4gPz8ge30sIFwiZGlzY2lwbGluZVwiKSksXHJcbiAgICAgICAgICBkZWdyZWU6IGgobShuID8/IHt9LCBcImRlZ3JlZVwiKSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgcmVzb2x2ZVRyYWNlOiB7XHJcbiAgICAgIGVkdWNhdGlvbjogZyhlKVxyXG4gICAgfVxyXG4gIH0gOiB7fVxyXG59XHJcblxyXG5mdW5jdGlvbiAkKGUsIHQpIHtcclxuICByZXR1cm4gdCA/IFtcInNjaG9vbFwiLCBcImRpc2NpcGxpbmVcIiwgXCJkZWdyZWVcIl0ubWFwKHIgPT4ge1xyXG4gICAgbGV0IG4gPSB4KGsodCwgcikpO1xyXG4gICAgcmV0dXJuIG4gJiYgQShlLCByKS5zb21lKGUgPT4geChlKSA9PT0gbikgPyAxIDogMFxyXG4gIH0pLnJlZHVjZSgoZSwgdCkgPT4gZSArIHQsIDApIDogMFxyXG59XHJcblxyXG5mdW5jdGlvbiBCKGUsIHQpIHtcclxuICBsZXQgciA9IG5ldyBTZXQ7XHJcbiAgcmV0dXJuIGUubWFwKChlLCBuKSA9PiB7XHJcbiAgICBsZXQgbyA9IC0xLFxyXG4gICAgICBpID0gMDtcclxuICAgIGZvciAobGV0IG4gPSAwOyBuIDwgdC5sZW5ndGg7IG4rKykge1xyXG4gICAgICBpZiAoci5oYXMobikpIGNvbnRpbnVlO1xyXG4gICAgICBsZXQgYSA9ICQoZSA/PyB7fSwgdFtuXSk7XHJcbiAgICAgIGEgPiBpICYmIChpID0gYSwgbyA9IG4pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gLTEgIT09IG8gPyAoci5hZGQobyksIHRbb10pIDogci5oYXMobikgPyB2b2lkIDAgOiAoci5hZGQobiksIHRbbl0pXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gcShlLCB0ID0gW10sIHIgPSBbXSwgbiA9IFtdKSB7XHJcbiAgaWYgKCFBcnJheS5pc0FycmF5KGUpIHx8IDAgPT09IGUubGVuZ3RoKSByZXR1cm4ge307XHJcbiAgbGV0IG8gPSBCKGUsIHQpO1xyXG4gIHJldHVybiB7XHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIGVkdWNhdGlvbjogQXJyYXkuZnJvbSh7XHJcbiAgICAgICAgbGVuZ3RoOiBlLmxlbmd0aFxyXG4gICAgICB9LCAodCwgaSkgPT4ge1xyXG4gICAgICAgIGxldCBhID0gZVtpXSA/PyB7fSxcclxuICAgICAgICAgIGwgPSBvW2ldLFxyXG4gICAgICAgICAgcyA9IHJbaV07XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHNjaG9vbDogRCh7XHJcbiAgICAgICAgICAgIHJlY29yZDogYSxcclxuICAgICAgICAgICAgcnVsZTogc1xyXG4gICAgICAgICAgfSkgPyBqKFQoe1xyXG4gICAgICAgICAgICByZWNvcmQ6IGEsXHJcbiAgICAgICAgICAgIHNuYXBzaG90UmVjb3JkOiBsLFxyXG4gICAgICAgICAgICBmaWVsZFR5cGU6IFwic2Nob29sXCJcclxuICAgICAgICAgIH0pLCBGKG4sIFwic2Nob29sXCIsIGkpKSA6IG51bGwsXHJcbiAgICAgICAgICBkaXNjaXBsaW5lOiBQKHMsIFwiZGlzY2lwbGluZVwiKSA/IGooVCh7XHJcbiAgICAgICAgICAgIHJlY29yZDogYSxcclxuICAgICAgICAgICAgc25hcHNob3RSZWNvcmQ6IGwsXHJcbiAgICAgICAgICAgIGZpZWxkVHlwZTogXCJkaXNjaXBsaW5lXCJcclxuICAgICAgICAgIH0pLCBGKG4sIFwiZGlzY2lwbGluZVwiLCBpKSkgOiBudWxsLFxyXG4gICAgICAgICAgZGVncmVlOiBQKHMsIFwiZGVncmVlXCIpID8gaihUKHtcclxuICAgICAgICAgICAgcmVjb3JkOiBhLFxyXG4gICAgICAgICAgICBzbmFwc2hvdFJlY29yZDogbCxcclxuICAgICAgICAgICAgZmllbGRUeXBlOiBcImRlZ3JlZVwiXHJcbiAgICAgICAgICB9KSwgRihuLCBcImRlZ3JlZVwiLCBpKSkgOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gVShlKSB7XHJcbiAgbGV0IHQgPSBlPy52YWxpZGF0aW9uPy5lZHVjYXRpb247XHJcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodCkgPyB0LmZsYXRNYXAoKGUsIHQpID0+IFtcInNjaG9vbFwiLCBcImRpc2NpcGxpbmVcIiwgXCJkZWdyZWVcIl0ubWFwKHIgPT4ge1xyXG4gICAgbGV0IG4gPSBlPy5bcl07XHJcbiAgICByZXR1cm4gbj8uc3RhdHVzID8ge1xyXG4gICAgICBpbmRleDogdCxcclxuICAgICAgZmllbGRUeXBlOiByLFxyXG4gICAgICBmaWVsZExhYmVsOiBsW3JdLFxyXG4gICAgICBsZXZlbDogXCJtYXRjaGVkXCIgPT09IG4uc3RhdHVzIHx8IFwicmV0cnlfbWF0Y2hlZFwiID09PSBuLnN0YXR1cyA/IFwiaW5mb1wiIDogXCJ3YXJuXCIsXHJcbiAgICAgIHN0YXR1czogbi5zdGF0dXMsXHJcbiAgICAgIGNvbW1pdHRlZFZhbHVlOiBuLmNvbW1pdHRlZFZhbHVlID8/IFwiXCIsXHJcbiAgICAgIGF0dGVtcHRlZENhbmRpZGF0ZXM6IEFycmF5LmlzQXJyYXkobi5hdHRlbXB0ZWRDYW5kaWRhdGVzKSA/IG4uYXR0ZW1wdGVkQ2FuZGlkYXRlcyA6IFtdXHJcbiAgICB9IDogbnVsbFxyXG4gIH0pLmZpbHRlcihlID0+IG51bGwgIT09IGUpKSA6IFtdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEgoZSkge1xyXG4gIHJldHVybiBVKGUpLmZpbHRlcihlID0+IFwid2FyblwiID09PSBlLmxldmVsICYmIGUuYXR0ZW1wdGVkQ2FuZGlkYXRlcy5sZW5ndGggPiAwKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIFkoe1xyXG4gIGFwaUJhc2U6IGUsXHJcbiAgcnVsZTogdCxcclxuICByZWNvcmQ6IHIsXHJcbiAgcmVzb2x2ZU9wZXJhdGlvbjogblxyXG59KSB7XHJcbiAgaWYgKCF2KHQpKSByZXR1cm4gcjtcclxuICBsZXQgbyA9IEwociwgdC5sYWJlbCk7XHJcbiAgaWYgKCFvKSByZXR1cm4gcjtcclxuICBsZXQgaSA9IFIoe1xyXG4gICAgICBhcGlCYXNlOiBlLFxyXG4gICAgICBsYWJlbDogdC5sYWJlbCxcclxuICAgICAgb3JpZ2luYWxBbnN3ZXI6IG9cclxuICAgIH0pLFxyXG4gICAgYSA9IGF3YWl0IG4oaSk7XHJcbiAgcmV0dXJuIGEgPyBNKHtcclxuICAgIHJlY29yZDogcixcclxuICAgIGxhYmVsOiB0LmxhYmVsLFxyXG4gICAgb3BlcmF0aW9uOiBhLm9wZXJhdGlvbixcclxuICAgIHJlc3VsdDogYS5yZXN1bHRcclxuICB9KSA6IHJcclxufVxyXG5hc3luYyBmdW5jdGlvbiB6KHtcclxuICBhcGlCYXNlOiBlLFxyXG4gIHJ1bGVzOiB0LFxyXG4gIHJlY29yZHM6IHIsXHJcbiAgcmVzb2x2ZU9wZXJhdGlvbjogblxyXG59KSB7XHJcbiAgbGV0IG8gPSBhd2FpdCBQcm9taXNlLmFsbChyLm1hcChhc3luYyAociwgbykgPT4ge1xyXG4gICAgaWYgKCFyKSByZXR1cm4gcjtcclxuICAgIGxldCBpID0gdFtvXT8uY2hpbGRyZW4gPz8gW10sXHJcbiAgICAgIGEgPSBpLmZpbHRlcihlID0+IHYoZSkpO1xyXG4gICAgaWYgKDAgPT09IGEubGVuZ3RoKSByZXR1cm4gcjtcclxuICAgIGxldCBsID0gYXdhaXQgUHJvbWlzZS5hbGwoYS5tYXAoYXN5bmMgdCA9PiB7XHJcbiAgICAgIGxldCBvID0gTChyLCB0LmxhYmVsKTtcclxuICAgICAgaWYgKCFvKSByZXR1cm4gbnVsbDtcclxuICAgICAgbGV0IGkgPSBSKHtcclxuICAgICAgICAgIGFwaUJhc2U6IGUsXHJcbiAgICAgICAgICBsYWJlbDogdC5sYWJlbCxcclxuICAgICAgICAgIG9yaWdpbmFsQW5zd2VyOiBvXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgYSA9IGF3YWl0IG4oaSk7XHJcbiAgICAgIHJldHVybiBhID8ge1xyXG4gICAgICAgIGxhYmVsOiB0LmxhYmVsLFxyXG4gICAgICAgIG9wZXJhdGlvbjogYS5vcGVyYXRpb24sXHJcbiAgICAgICAgcmVzdWx0OiBhLnJlc3VsdFxyXG4gICAgICB9IDogbnVsbFxyXG4gICAgfSkpO1xyXG4gICAgcmV0dXJuIGwucmVkdWNlKChlLCB0KSA9PiB0ID8gTSh7XHJcbiAgICAgIHJlY29yZDogZSxcclxuICAgICAgbGFiZWw6IHQubGFiZWwsXHJcbiAgICAgIG9wZXJhdGlvbjogdC5vcGVyYXRpb24sXHJcbiAgICAgIHJlc3VsdDogdC5yZXN1bHRcclxuICAgIH0pIDogZSwgcilcclxuICB9KSk7XHJcbiAgcmV0dXJuIG8uZm9yRWFjaCgoZSwgdCkgPT4ge1xyXG4gICAgZSAmJiAoclt0XSA9IGUpXHJcbiAgfSksIHJcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImVkdWNhdGlvbi1vcGVyYXRpb24uM2YxMjI4ZDIuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);