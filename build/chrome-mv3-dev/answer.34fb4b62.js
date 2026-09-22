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
})({"164b2":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\uber\\answer.js",
    "bundleId": "e48b526934fb4b62",
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
var j = z(require("9c83aa068397d1ba"));
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

},{"9c83aa068397d1ba":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"8Ykqy":[function(require,module,exports) {
/**
 * Parcel module id: 4fNc6
 * Resolved path: src/contents/sites/uber/answer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "formatAnswer", ()=>u), n.export(r, "inferRepeatingCountFromRegular", ()=>c), n.export(r, "buildRepeatingGroupRecordsFromRegular", ()=>d), n.export(r, "buildEmploymentRecordsFromRegular", ()=>f), n.export(r, "buildEducationRecordsFromRegular", ()=>p), n.export(r, "findLinksValueInRecord", ()=>h);
let o = {
    jan: "01",
    january: "01",
    feb: "02",
    february: "02",
    mar: "03",
    march: "03",
    apr: "04",
    april: "04",
    may: "05",
    jun: "06",
    june: "06",
    jul: "07",
    july: "07",
    aug: "08",
    august: "08",
    sep: "09",
    sept: "09",
    september: "09",
    oct: "10",
    october: "10",
    nov: "11",
    november: "11",
    dec: "12",
    december: "12"
}, i = [
    "present",
    "current",
    "now",
    "till now",
    "to present",
    "to-present",
    "to current",
    "to-current",
    "to now",
    "to-now",
    "-present"
], a = {
    startMonth: [
        "Start Date - Month",
        "Start date month",
        "Start Month",
        "startMonth",
        "start_month"
    ],
    startYear: [
        "Start Date - Year",
        "Start date year",
        "Start Year",
        "startYear",
        "start_year"
    ],
    endMonth: [
        "End Date - Month",
        "End date month",
        "End Month",
        "endMonth",
        "end_month"
    ],
    endYear: [
        "End Date - Year",
        "End date year",
        "End Year",
        "endYear",
        "end_year"
    ]
};
function l(e1) {
    let t;
    if (null == e1) return null;
    if (Array.isArray(e1) && e1.length > 0) t = String(e1[0] || "").trim();
    else {
        if ("string" != typeof e1) return null;
        t = e1.trim();
    }
    if (!t) return null;
    let r1 = t.replace(/[^\d]/g, "");
    if (r1.length >= 7) {
        let e1 = t.replace(/[^\d+]/g, "");
        return e1 && e1.replace(/\+/g, "").length >= 7 ? e1 : t;
    }
    return r1.length >= 4 ? t : r1.length <= 3 && t.includes("+") && !t.match(/\d{4,}/) ? null : t;
}
function s(e1) {
    let t = [
        "Mobile phone number",
        "Phone",
        "Mobile",
        "Phone number"
    ];
    for (let r1 of t){
        let t = l(e1[r1]);
        null === t ? delete e1[r1] : e1[r1] = t;
    }
}
function u(e1) {
    e1.regular || (e1.regular = {}), s(e1.regular);
    let t = [
        "LinkedIn",
        "Github",
        "Portfolio"
    ];
    for (let r1 of t){
        let t = e1.regular[r1] ?? e1[r1] ?? e1[r1.toLowerCase()], n = null == t ? "" : Array.isArray(t) ? t[0] : t, o = "string" == typeof n && "" !== n.trim();
        o ? e1.regular[r1] = t : delete e1.regular[r1];
    }
    let r1 = [
        "Zip code",
        "Zip Code",
        "ZIP code",
        "ZIP Code",
        "zipcode",
        "zip_code",
        "Zip",
        "zip"
    ], n = e1.profile_data || e1.profileData;
    if (n && "object" == typeof n) {
        for (let t of r1)if (n[t] && !e1.regular[t]) {
            e1.regular[t] = n[t];
            break;
        }
        for(let t in n){
            let o = n[t];
            if (o && "object" == typeof o && !Array.isArray(o)) {
                for (let t of r1)if (o[t] && !e1.regular[t]) {
                    e1.regular[t] = o[t];
                    break;
                }
            }
        }
    }
    let l = null, u = null;
    for (let t of r1)if (e1.regular[t]) {
        l = e1.regular[t], u = t;
        break;
    }
    l && u && "Zip code" !== u && (e1.regular["Zip code"] = l);
    let c = (e1)=>{
        let t = (e1 || "").trim();
        if (!t) return "";
        if (/^\d{1,2}$/.test(t)) {
            let e1 = Number(t);
            if (e1 >= 1 && e1 <= 12) return String(e1).padStart(2, "0");
        }
        let r1 = t.toLowerCase();
        return o[r1] || "";
    }, d = (e1)=>{
        let t = String(e1 ?? "").trim().toLowerCase();
        return !!t && (i.some((e1)=>t === e1) || t.includes("present"));
    }, f = (e1, t)=>{
        for (let r1 of t){
            let t = e1?.[r1];
            if (null != t) {
                if (Array.isArray(t)) {
                    let e1 = t.find((e1)=>"" !== String(e1 ?? "").trim());
                    if (null != e1) return e1;
                    continue;
                }
                if ("" !== String(t).trim()) return t;
            }
        }
        return "";
    }, p = (e1)=>{
        let t = String(e1 ?? "").trim();
        if (!t) return {
            month: "",
            year: ""
        };
        if (d(t)) return {
            month: "",
            year: "present"
        };
        let r1 = t.match(/^(\d{4})[\/\-.](\d{1,2})(?:[\/\-.](\d{1,2}))?/);
        if (r1) {
            let e1 = r1[1], t = String(r1[2]).padStart(2, "0");
            return {
                year: e1,
                month: t
            };
        }
        return (r1 = t.match(/^(\d{1,2})\s*[\/\-.]\s*(\d{4})/)) ? {
            month: String(r1[1]).padStart(2, "0"),
            year: r1[2]
        } : (r1 = t.match(/\b(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t)?(?:ember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)\b[\s\/\-.]*?(\d{4})/i)) ? {
            month: c(r1[1]) || "",
            year: r1[2]
        } : (r1 = t.match(/(\d{4})[\s\/\-.]*\b(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t)?(?:ember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)\b/i)) ? {
            year: r1[1],
            month: c(r1[2]) || ""
        } : (r1 = t.match(/\b(\d{4})\b/)) ? {
            year: r1[1],
            month: ""
        } : {
            month: "",
            year: ""
        };
    }, m = (e1, t, r1, n, o, i, a)=>{
        let l = "";
        l = Array.isArray(a) ? String(a[0] ?? "").trim().toLowerCase() : String(a ?? "").trim().toLowerCase();
        let s = !0 === n || "present" === r1 || d(o) || d(i) || l && [
            "yes",
            "true",
            "1",
            "y"
        ].includes(l);
        s ? (e1.Current = "Yes", e1["End Date - Month"] = "", e1["End Date - Year"] = "") : (e1["End Date - Month"] = t, e1["End Date - Year"] = r1, t || r1 ? e1.Current = "No" : !1 === n ? e1.Current = "No" : l ? e1.Current = [
            "yes",
            "true",
            "1",
            "y"
        ].includes(l) ? "Yes" : "No" : !0 === n ? e1.Current = "Yes" : e1.Current = "No");
    }, h = (e1)=>{
        let t = [
            "Start",
            "start",
            "Start Date",
            "startDate",
            "From"
        ], r1 = [
            "End",
            "end",
            "End Date",
            "endDate",
            "To"
        ], n = f(e1, t), o = f(e1, r1), i = p(n), l = p(o), s = f(e1, a.startMonth), u = f(e1, a.startYear), d = f(e1, a.endMonth), m = f(e1, a.endYear);
        return {
            startMonth: i.month || (s && String(s).trim() ? c(String(s)) : "") || "",
            startYear: i.year || (u && String(u).trim() ? String(u).trim() : "") || "",
            endMonth: l.month || (d && String(d).trim() ? c(String(d)) : "") || "",
            endYear: l.year || (m && String(m).trim() ? String(m).trim() : "") || "",
            endRaw: o,
            endYearExisting: m
        };
    }, g = (e1, t)=>{
        if (!e1 || !t) return e1;
        e1.toLowerCase().trim();
        let r1 = t.toLowerCase().trim();
        if (!r1) return e1;
        let n = [
            RegExp(`\\s+in\\s+${r1.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "i"),
            RegExp(`,\\s*${r1.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "i"),
            RegExp(`\\s+${r1.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "i")
        ], o = e1;
        for (let e1 of n)o = o.replace(e1, "").trim();
        return !o || o.length < 3 ? e1 : o;
    }, b = (e1)=>{
        let t = f(e1, [
            "School",
            "school",
            "schoolName",
            "School Name",
            "Institution",
            "Institution Name",
            "University",
            "College"
        ]), r1 = f(e1, [
            "Degree",
            "degree"
        ]), n = f(e1, [
            "Major",
            "major",
            "Field Of Study",
            "fieldOfStudy",
            "Study",
            "study",
            "Discipline",
            "discipline"
        ]), o = f(e1, [
            "Current",
            "current",
            "isCurrent",
            "Is Current"
        ]), i = void 0 !== e1.isCurrent ? !!e1.isCurrent : null, a = h(e1), l = g(String(r1 || "").trim(), String(n || "").trim()), s = String(n || "").trim();
        e1.School = String(t || "").trim(), e1.Degree = l, e1.Major = s, e1["Start Date - Month"] = a.startMonth, e1["Start Date - Year"] = a.startYear, m(e1, a.endMonth, a.endYear, i, a.endRaw, a.endYearExisting, o);
    }, y = (e1)=>{
        let t = f(e1, [
            "Company",
            "company",
            "companyName",
            "Employer"
        ]), r1 = f(e1, [
            "Position",
            "position",
            "title",
            "Title"
        ]), n = f(e1, [
            "jobDescriptions",
            "Job Description",
            "jobDescription",
            "Description (optional)",
            "Description",
            "description"
        ]), o = f(e1, [
            "Current",
            "current",
            "isCurrent",
            "Is Current"
        ]), i = void 0 !== e1.isCurrent ? !!e1.isCurrent : null, a = h(e1);
        e1.Company = String(t || "").trim(), e1.Position = String(r1 || "").trim(), e1["Description (optional)"] = String(n || "").trim(), delete e1.jobDescriptions, delete e1["Job Description"], delete e1.jobDescription, e1["Start Date - Month"] = a.startMonth, e1["Start Date - Year"] = a.startYear, m(e1, a.endMonth, a.endYear, i, a.endRaw, a.endYearExisting, o);
    };
    Array.isArray(e1.education) && e1.education.forEach((e1)=>{
        e1 && "object" == typeof e1 && b(e1);
    }), Array.isArray(e1.workExperience) && e1.workExperience.forEach((e1)=>{
        e1 && "object" == typeof e1 && y(e1);
    });
    let v = String(e1.regular?.["First Name"] ?? "").trim(), w = String(e1.regular?.["Last Name"] ?? "").trim(), S = [
        v,
        w
    ].filter(Boolean).join(" "), E = [
        w,
        v
    ].filter(Boolean).join(" "), x = (e1)=>{
        if (!e1) return !1;
        let t = e1.trim();
        return t === v || t === w || t === S || t === E;
    }, C = (e1, t)=>{
        for (let r1 of t){
            let t = e1?.[r1];
            if (null == t) continue;
            let n = Array.isArray(t) ? t[0] : t, o = String(n ?? "").trim();
            if (o && !x(o)) return o;
        }
        return "";
    }, A = [
        "School",
        "school",
        "schoolName",
        "School Name",
        "Institution",
        "Institution Name",
        "University",
        "College"
    ], k = [
        "Company",
        "company",
        "companyName",
        "Employer",
        "Employer name"
    ];
    return Array.isArray(e1.education) && e1.education.forEach((e1)=>{
        e1 && "object" == typeof e1 && e1.School && x(String(e1.School)) && (e1.School = C(e1, A));
    }), Array.isArray(e1.workExperience) && e1.workExperience.forEach((e1)=>{
        e1 && "object" == typeof e1 && e1.Company && x(String(e1.Company)) && (e1.Company = C(e1, k));
    }), e1;
}
function c(e1, t, r1, n = 20) {
    let o = e1 || {}, i = 0, a = RegExp(`^${t}\\s+(\\d+)\\s+`);
    for (let e1 of Object.keys(o)){
        let t = e1.match(a);
        if (t) {
            let e1 = Number(t[1]);
            Number.isFinite(e1) && e1 > i && (i = e1);
        }
    }
    let l = 0, s = !1;
    for (let e1 of r1){
        let t = o[e1];
        null != t && "" !== t && (s = !0, Array.isArray(t) && (l = Math.max(l, t.length)));
    }
    let u = Math.max(i, l, s && 0 === i && 0 === l ? 1 : 0);
    return Math.min(u, n);
}
function d(e1, t, r1) {
    let n = e1 || {}, o = r1.map((e1)=>e1.baseKey), i = c(n, t, o, 30);
    if (i <= 0) return [];
    let a = (e1, r1)=>{
        let o = e1.replace(RegExp(`^${t}\\s+`), ()=>`${t} ${r1 + 1} `), i = n[o] ?? n[e1];
        if (Array.isArray(i)) {
            let e1 = i.map((e1)=>String(e1 ?? "").trim()).filter(Boolean);
            return e1[r1] || "";
        }
        return r1 > 0 ? "" : String(i ?? "").trim();
    }, l = [];
    for(let e1 = 0; e1 < i; e1++){
        let t = {}, n = !1;
        for (let o of r1){
            let r1 = a(o.baseKey, e1);
            t[o.recordKey] = r1, r1 && (n = !0);
        }
        n && l.push(t);
    }
    return l;
}
function f(e1) {
    return d(e1, "Experience", [
        {
            baseKey: "Experience Company",
            recordKey: "Company"
        },
        {
            baseKey: "Experience Position",
            recordKey: "Position"
        },
        {
            baseKey: "Experience Description (optional)",
            recordKey: "Description (optional)"
        },
        {
            baseKey: "Experience Current",
            recordKey: "Current"
        },
        {
            baseKey: "Experience Start Date - Month",
            recordKey: "Start Date - Month"
        },
        {
            baseKey: "Experience Start Date - Year",
            recordKey: "Start Date - Year"
        },
        {
            baseKey: "Experience End Date - Month",
            recordKey: "End Date - Month"
        },
        {
            baseKey: "Experience End Date - Year",
            recordKey: "End Date - Year"
        }
    ]);
}
function p(e1) {
    return d(e1, "Education", [
        {
            baseKey: "Education School",
            recordKey: "School"
        },
        {
            baseKey: "Education Degree",
            recordKey: "Degree"
        },
        {
            baseKey: "Education Major (optional)",
            recordKey: "Major"
        },
        {
            baseKey: "Education Current",
            recordKey: "Current"
        },
        {
            baseKey: "Education Start Date - Month",
            recordKey: "Start Date - Month"
        },
        {
            baseKey: "Education Start Date - Year",
            recordKey: "Start Date - Year"
        },
        {
            baseKey: "Education End Date - Month",
            recordKey: "End Date - Month"
        },
        {
            baseKey: "Education End Date - Year",
            recordKey: "End Date - Year"
        }
    ]);
}
function m(e1) {
    return !!(null == e1 || "string" == typeof e1 && "" === e1.trim() || Array.isArray(e1) && (0 === e1.length || 1 === e1.length && (void 0 === e1[0] || null === e1[0] || "" === String(e1[0]).trim())));
}
function h(e1, t) {
    if (!t || !e1) return null;
    let r1 = e1.toLowerCase(), n = null;
    return (r1.includes("linkedin") ? n = t.LinkedIn ?? t.Linkedin ?? t.linkedin ?? t["LinkedIn URL"] ?? t["LinkedIn Profile"] ?? t.linkedInURL ?? t.linkedin_url ?? null : r1.includes("github") ? n = t.Github ?? t.GitHub ?? t.github ?? t["GitHub URL"] ?? t["Github URL"] ?? t.githubURL ?? t.github_url ?? null : r1.includes("portfolio") && (n = t.Portfolio ?? t.portfolio ?? t["Portfolio URL"] ?? t["Portfolio Website"] ?? t.otherURL ?? t.other_url ?? null), m(n)) ? null : n;
}

},{}]},["164b2","8Ykqy"], "8Ykqy", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QUFFLElBQUUsSUFBSTtTQUFXO1FBQUMsSUFBRyxZQUFVLE9BQU8sSUFBRSxPQUFPO1FBQUssSUFBRSxHQUFFO0lBQU07SUFBQyxJQUFHLENBQUMsR0FBRSxPQUFPO0lBQUssSUFBSSxLQUFFLEVBQUUsUUFBUSxVQUFTO0lBQUksSUFBRyxHQUFFLFVBQVEsR0FBRTtRQUFDLElBQUksS0FBRSxFQUFFLFFBQVEsV0FBVTtRQUFJLE9BQU8sTUFBRyxHQUFFLFFBQVEsT0FBTSxJQUFJLFVBQVEsSUFBRSxLQUFFO0lBQUM7SUFBQyxPQUFPLEdBQUUsVUFBUSxJQUFFLElBQUUsR0FBRSxVQUFRLEtBQUcsRUFBRSxTQUFTLFFBQU0sQ0FBQyxFQUFFLE1BQU0sWUFBVSxPQUFLO0FBQUM7QUFBQyxTQUFTLEVBQUUsRUFBQztJQUFFLElBQUksSUFBRTtRQUFDO1FBQXNCO1FBQVE7UUFBUztLQUFlO0lBQUMsS0FBSSxJQUFJLE1BQUssRUFBRTtRQUFDLElBQUksSUFBRSxFQUFFLEVBQUMsQ0FBQyxHQUFFO1FBQUUsU0FBTyxJQUFFLE9BQU8sRUFBQyxDQUFDLEdBQUUsR0FBQyxFQUFDLENBQUMsR0FBRSxHQUFDO0lBQUM7QUFBQztBQUFDLFNBQVMsRUFBRSxFQUFDO0lBQUUsR0FBRSxXQUFVLENBQUEsR0FBRSxVQUFRLENBQUMsQ0FBQSxHQUFHLEVBQUUsR0FBRTtJQUFTLElBQUksSUFBRTtRQUFDO1FBQVc7UUFBUztLQUFZO0lBQUMsS0FBSSxJQUFJLE1BQUssRUFBRTtRQUFDLElBQUksSUFBRSxHQUFFLE9BQU8sQ0FBQyxHQUFFLElBQUUsRUFBQyxDQUFDLEdBQUUsSUFBRSxFQUFDLENBQUMsR0FBRSxjQUFjLEVBQUMsSUFBRSxRQUFNLElBQUUsS0FBRyxNQUFNLFFBQVEsS0FBRyxDQUFDLENBQUMsRUFBRSxHQUFDLEdBQUUsSUFBRSxZQUFVLE9BQU8sS0FBRyxPQUFLLEVBQUU7UUFBTyxJQUFFLEdBQUUsT0FBTyxDQUFDLEdBQUUsR0FBQyxJQUFFLE9BQU8sR0FBRSxPQUFPLENBQUMsR0FBRTtJQUFBO0lBQUMs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QUFRO1lBQVE7WUFBYTtZQUFZO1NBQU8sRUFBQyxLQUFFO1lBQUM7WUFBTTtZQUFNO1lBQVc7WUFBVTtTQUFLLEVBQUMsSUFBRSxFQUFFLElBQUUsSUFBRyxJQUFFLEVBQUUsSUFBRSxLQUFHLElBQUUsRUFBRSxJQUFHLElBQUUsRUFBRSxJQUFHLElBQUUsRUFBRSxJQUFFLEVBQUUsYUFBWSxJQUFFLEVBQUUsSUFBRSxFQUFFLFlBQVcsSUFBRSxFQUFFLElBQUUsRUFBRSxXQUFVLElBQUUsRUFBRSxJQUFFLEVBQUU7UUFBUyxPQUFNO1lBQUMsWUFBVyxFQUFFLFNBQVEsQ0FBQSxLQUFHLE9BQU8sR0FBRyxTQUFPLEVBQUUsT0FBTyxNQUFJLEVBQUMsS0FBSTtZQUFHLFdBQVUsRUFBRSxRQUFPLENBQUEsS0FBRyxPQUFPLEdBQUcsU0FBTyxPQUFPLEdBQUcsU0FBTyxFQUFDLEtBQUk7WUFBRyxVQUFTLEVBQUUsU0FBUSxDQUFBLEtBQUcsT0FBTyxHQUFHLFNBQU8sRUFBRSxPQUFPLE1BQUksRUFBQyxLQUFJO1lBQUcsU0FBUSxFQUFFLFFBQU8sQ0FBQSxLQUFHLE9BQU8sR0FBRyxTQUFPLE9BQU8sR0FBRyxTQUFPLEVBQUMsS0FBSTtZQUFHLFFBQU87WUFBRSxpQkFBZ0I7UUFBQztJQUFDLEdBQUUsSUFBRSxDQUFDLElBQUU7UUFBSyxJQUFHLENBQUMsTUFBRyxDQUFDLEdBQUUsT0FBTztRQUFFLEdBQUUsY0FBYztRQUFPLElBQUksS0FBRSxFQUFFLGNBQWM7UUFBTyxJQUFHLENBQUMsSUFBRSxPQUFPO1FBQUUsSUFBSSxJQUFFO1lBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFFLFFBQVEsdUJBQXNCLFFBQVEsQ0FBQyxFQUFDO1lBQUssT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFFLFFBQVEsdUJBQXNCLFFBQVEsQ0FBQyxFQUFDO1lBQUssT0FBTyxDQUFDLElBQUksRUFBRSxHQUFFLFFBQVEsdUJBQXNCLFFBQVEsQ0FBQyxDQUFDLEVBQUM7U0FBSyxFQUFDLElBQUU7UUFBRSxLQUFJLElBQUksTUFBSyxFQUFFLElBQUUsRUFBRSxRQUFRLElBQUUsSUFBSTtRQUFPLE9BQU0sQ0FBQyxLQUFHLEVBQUUsU0FBTyxJQUFFLEtBQUU7SUFBQyxHQUFFLElBQUUsQ0FBQTtRQUFJLElBQUksSUFBRSxFQUFFLElBQUU7WUFBQztZQUFTO1lBQVM7WUFBYTtZQUFjO1lBQWM7WUFBbUI7WUFBYTtTQUFVLEdBQUUsS0FBRSxFQUFFLElBQUU7WUFBQztZQUFTO1NBQVMsR0FBRSxJQUFFLEVBQUUsSUFBRTtZQUFDO1lBQVE7WUFBUTtZQUFpQjtZQUFlO1lBQVE7WUFBUTtZQUFhO1NBQWEsR0FBRSxJQUFFLEVBQUUsSUFBRTtZQUFDO1lBQVU7WUFBVTtZQUFZO1NBQWEsR0FBRSxJQUFFLEtBQUssTUFBSSxHQUFFLFlBQVUsQ0FBQyxDQUFDLEdBQUUsWUFBVSxNQUFLLElBQUUsRUFBRSxLQUFHLElBQUUsRUFBRSxPQUFPLE1BQUcsSUFBSSxRQUFPLE9BQU8sS0FBRyxJQUFJLFNBQVEsSUFBRSxPQUFPLEtBQUcsSUFBSTtRQUFPLEdBQUUsU0FBTyxPQUFPLEtBQUcsSUFBSSxRQUFPLEdBQUUsU0FBTyxHQUFFLEdBQUUsUUFBTSxHQUFFLEVBQUMsQ0FBQyxxQkFBcUIsR0FBQyxFQUFFLFlBQVcsRUFBQyxDQUFDLG9CQUFvQixHQUFDLEVBQUUsV0FBVSxFQUFFLElBQUUsRUFBRSxVQUFTLEVBQUUsU0FBUSxHQUFFLEVBQUUsUUFBTyxFQUFFLGlCQUFnQjtJQUFFLEdBQUUsSUFBRSxDQUFBO1FBQUksSUFBSSxJQUFFLEVBQUUsSUFBRTtZQUFDO1lBQVU7WUFBVTtZQUFjO1NBQVcsR0FBRSxLQUFFLEVBQUUsSUFBRTtZQUFDO1lBQVc7WUFBVztZQUFRO1NBQVEsR0FBRSxJQUFFLEVBQUUsSUFBRTtZQUFDO1lBQWtCO1lBQWtCO1lBQWlCO1lBQXlCO1lBQWM7U0FBYyxHQUFFLElBQUUsRUFBRSxJQUFFO1lBQUM7WUFBVTtZQUFVO1lBQVk7U0FBYSxHQUFFLElBQUUsS0FBSyxNQUFJLEdBQUUsWUFBVSxDQUFDLENBQUMsR0FBRSxZQUFVLE1BQUssSUFBRSxFQUFFO1FBQUcsR0FBRSxVQUFRLE9BQU8sS0FBRyxJQUFJLFFBQU8sR0FBRSxXQUFTLE9BQU8sTUFBRyxJQUFJLFFBQU8sRUFBQyxDQUFDLHlCQUF5QixHQUFDLE9BQU8sS0FBRyxJQUFJLFFBQU8sT0FBTyxHQUFFLGlCQUFnQixPQUFPLEVBQUMsQ0FBQyxrQkFBa0IsRUFBQyxPQUFPLEdBQUUsZ0JBQWUsRUFBQyxDQUFDLHFCQUFxQixHQUFDLEVBQUUsWUFBVyxFQUFDLENBQUMsb0JBQW9CLEdBQUMsRUFBRSxXQUFVLEVBQUUsSUFBRSxFQUFFLFVBQVMsRUFBRSxTQUFRLEdBQUUsRUFBRSxRQUFPLEVBQUUsaUJBQWdCO0lBQUU7SUFBRSxNQUFNLFFBQVEsR0FBRSxjQUFZLEdBQUUsVUFBVSxRQUFRLENBQUE7UUFBSSxNQUFHLFlBQVUsT0FBTyxNQUFHLEVBQUU7SUFBRSxJQUFHLE1BQU0sUUFBUSxHQUFFLG1CQUFpQixHQUFFLGVBQWUsUUFBUSxDQUFBO1FBQUksTUFBRyxZQUFVLE9BQU8sTUFBRyxFQUFFO0lBQUU7SUFBRyxJQUFJLElBQUUsT0FBTyxHQUFFLFNBQVMsQ0FBQyxhQUFhLElBQUUsSUFBSSxRQUFPLElBQUUsT0FBTyxHQUFFLFNBQVMsQ0FBQyxZQUFZLElBQUUsSUFBSSxRQUFPLElBQUU7UUFBQztRQUFFO0tBQUUsQ0FBQyxPQUFPLFNBQVMsS0FBSyxNQUFLLElBQUU7UUFBQztRQUFFO0tBQUUsQ0FBQyxPQUFPLFNBQVMsS0FBSyxNQUFLLElBQUUsQ0FBQTtRQUFJLElBQUcsQ0FBQyxJQUFFLE9BQU0sQ0FBQztRQUFFLElBQUksSUFBRSxHQUFFO1FBQU8sT0FBTyxNQUFJLEtBQUcsTUFBSSxLQUFHLE1BQUksS0FBRyxNQUFJO0lBQUMsR0FBRSxJQUFFLENBQUMsSUFBRTtRQUFLLEtBQUksSUFBSSxNQUFLLEVBQUU7WUFBQyxJQUFJLElBQUUsSUFBRyxDQUFDLEdBQUU7WUFBQyxJQUFHLFFBQU0sR0FBRTtZQUFTLElBQUksSUFBRSxNQUFNLFFBQVEsS0FBRyxDQUFDLENBQUMsRUFBRSxHQUFDLEdBQUUsSUFBRSxPQUFPLEtBQUcsSUFBSTtZQUFPLElBQUcsS0FBRyxDQUFDLEVBQUUsSUFBRyxPQUFPO1FBQUM7UUFBQyxPQUFNO0lBQUUsR0FBRSxJQUFFO1FBQUM7UUFBUztRQUFTO1FBQWE7UUFBYztRQUFjO1FBQW1CO1FBQWE7S0FBVSxFQUFDLElBQUU7UUFBQztRQUFVO1FBQVU7UUFBYztRQUFXO0tBQWdCO0lBQUMsT0FBTyxNQUFNLFFBQVEsR0FBRSxjQUFZLEdBQUUsVUFBVSxRQUFRLENBQUE7UUFBSSxNQUFHLFlBQVUsT0FBTyxNQUFHLEdBQUUsVUFBUSxFQUFFLE9BQU8sR0FBRSxZQUFXLENBQUEsR0FBRSxTQUFPLEVBQUUsSUFBRSxFQUFDO0lBQUUsSUFBRyxNQUFNLFFBQVEsR0FBRSxtQkFBaUIsR0FBRSxlQUFlLFFBQVEsQ0FBQTtRQUFJLE1BQUcsWUFBVSxPQUFPLE1BQUcsR0FBRSxXQUFTLEVBQUUsT0FBTyxHQUFFLGFBQVksQ0FBQSxHQUFFLFVBQVEsRUFBRSxJQUFFLEVBQUM7SUFBRSxJQUFHO0FBQUM7QUFBQyxTQUFTLEVBQUUsRUFBQyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsSUFBRSxFQUFFO0lBQUUsSUFBSSxJQUFFLE1BQUcsQ0FBQyxHQUFFLElBQUUsR0FBRSxJQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxjQUFjLENBQUM7SUFBRSxLQUFJLElBQUksTUFBSyxPQUFPLEtBQUssR0FBRztRQUFDLElBQUksSUFBRSxHQUFFLE1BQU07UUFBRyxJQUFHLEdBQUU7WUFBQyxJQUFJLEtBQUUsT0FBTyxDQUFDLENBQUMsRUFBRTtZQUFFLE9BQU8sU0FBUyxPQUFJLEtBQUUsS0FBSSxDQUFBLElBQUUsRUFBQTtRQUFFO0lBQUM7SUFBQyxJQUFJLElBQUUsR0FBRSxJQUFFLENBQUM7SUFBRSxLQUFJLElBQUksTUFBSyxHQUFFO1FBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxHQUFFO1FBQUMsUUFBTSxLQUFHLE9BQUssS0FBSSxDQUFBLElBQUUsQ0FBQyxHQUFFLE1BQU0sUUFBUSxNQUFLLENBQUEsSUFBRSxLQUFLLElBQUksR0FBRSxFQUFFLE9BQU0sQ0FBQztJQUFFO0lBQUMsSUFBSSxJQUFFLEtBQUssSUFBSSxHQUFFLEdBQUUsS0FBRyxNQUFJLEtBQUcsTUFBSSxJQUFFLElBQUU7SUFBRyxPQUFPLEtBQUssSUFBSSxHQUFFO0FBQUU7QUFBQyxTQUFTLEVBQUUsRUFBQyxFQUFDLENBQUMsRUFBQyxFQUFDO0lBQUUsSUFBSSxJQUFFLE1BQUcsQ0FBQyxHQUFFLElBQUUsR0FBRSxJQUFJLENBQUEsS0FBRyxHQUFFLFVBQVMsSUFBRSxFQUFFLEdBQUUsR0FBRSxHQUFFO0lBQUksSUFBRyxLQUFHLEdBQUUsT0FBTSxFQUFFO0lBQUMsSUFBSSxJQUFFLENBQUMsSUFBRTtRQUFLLElBQUksSUFBRSxHQUFFLFFBQVEsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUUsRUFBRSxDQUFDLENBQUMsR0FBRSxJQUFFLENBQUMsQ0FBQyxFQUFFLElBQUUsQ0FBQyxDQUFDLEdBQUU7UUFBQyxJQUFHLE1BQU0sUUFBUSxJQUFHO1lBQUMsSUFBSSxLQUFFLEVBQUUsSUFBSSxDQUFBLEtBQUcsT0FBTyxNQUFHLElBQUksUUFBUSxPQUFPO1lBQVMsT0FBTyxFQUFDLENBQUMsR0FBRSxJQUFFO1FBQUU7UUFBQyxPQUFPLEtBQUUsSUFBRSxLQUFHLE9BQU8sS0FBRyxJQUFJO0lBQU0sR0FBRSxJQUFFLEVBQUU7SUFBQyxJQUFJLElBQUksS0FBRSxHQUFFLEtBQUUsR0FBRSxLQUFJO1FBQUMsSUFBSSxJQUFFLENBQUMsR0FBRSxJQUFFLENBQUM7UUFBRSxLQUFJLElBQUksS0FBSyxHQUFFO1lBQUMsSUFBSSxLQUFFLEVBQUUsRUFBRSxTQUFRO1lBQUcsQ0FBQyxDQUFDLEVBQUUsVUFBVSxHQUFDLElBQUUsTUFBSSxDQUFBLElBQUUsQ0FBQyxDQUFBO1FBQUU7UUFBQyxLQUFHLEVBQUUsS0FBSztJQUFFO0lBQUMsT0FBTztBQUFDO0FBQUMsU0FBUyxFQUFFLEVBQUM7SUFBRSxPQUFPLEVBQUUsSUFBRSxjQUFhO1FBQUM7WUFBQyxTQUFRO1lBQXFCLFdBQVU7UUFBUztRQUFFO1lBQUMsU0FBUTtZQUFzQixXQUFVO1FBQVU7UUFBRTtZQUFDLFNBQVE7WUFBb0MsV0FBVTtRQUF3QjtRQUFFO1lBQUMsU0FBUTtZQUFxQixXQUFVO1FBQVM7UUFBRTtZQUFDLFNBQVE7WUFBZ0MsV0FBVTtRQUFvQjtRQUFFO1lBQUMsU0FBUTtZQUErQixXQUFVO1FBQW1CO1FBQUU7WUFBQyxTQUFRO1lBQThCLFdBQVU7UUFBa0I7UUFBRTtZQUFDLFNBQVE7WUFBNkIsV0FBVTtRQUFpQjtLQUFFO0FBQUM7QUFBQyxTQUFTLEVBQUUsRUFBQztJQUFFLE9BQU8sRUFBRSxJQUFFLGFBQVk7UUFBQztZQUFDLFNBQVE7WUFBbUIsV0FBVTtRQUFRO1FBQUU7WUFBQyxTQUFRO1lBQW1CLFdBQVU7UUFBUTtRQUFFO1lBQUMsU0FBUTtZQUE2QixXQUFVO1FBQU87UUFBRTtZQUFDLFNBQVE7WUFBb0IsV0FBVTtRQUFTO1FBQUU7WUFBQyxTQUFRO1lBQStCLFdBQVU7UUFBb0I7UUFBRTtZQUFDLFNBQVE7WUFBOEIsV0FBVTtRQUFtQjtRQUFFO1lBQUMsU0FBUTtZQUE2QixXQUFVO1FBQWtCO1FBQUU7WUFBQyxTQUFRO1lBQTRCLFdBQVU7UUFBaUI7S0FBRTtBQUFDO0FBQUMsU0FBUyxFQUFFLEVBQUM7SUFBRSxPQUFNLENBQUMsQ0FBRSxDQUFBLFFBQU0sTUFBRyxZQUFVLE9BQU8sTUFBRyxPQUFLLEdBQUUsVUFBUSxNQUFNLFFBQVEsT0FBSyxDQUFBLE1BQUksR0FBRSxVQUFRLE1BQUksR0FBRSxVQUFTLENBQUEsS0FBSyxNQUFJLEVBQUMsQ0FBQyxFQUFFLElBQUUsU0FBTyxFQUFDLENBQUMsRUFBRSxJQUFFLE9BQUssT0FBTyxFQUFDLENBQUMsRUFBRSxFQUFFLE1BQUssQ0FBQyxDQUFDO0FBQUU7QUFBQyxTQUFTLEVBQUUsRUFBQyxFQUFDLENBQUM7SUFBRSxJQUFHLENBQUMsS0FBRyxDQUFDLElBQUUsT0FBTztJQUFLLElBQUksS0FBRSxHQUFFLGVBQWMsSUFBRTtJQUFLLE9BQU0sQUFBQyxDQUFBLEdBQUUsU0FBUyxjQUFZLElBQUUsRUFBRSxZQUFVLEVBQUUsWUFBVSxFQUFFLFlBQVUsQ0FBQyxDQUFDLGVBQWUsSUFBRSxDQUFDLENBQUMsbUJBQW1CLElBQUUsRUFBRSxlQUFhLEVBQUUsZ0JBQWMsT0FBSyxHQUFFLFNBQVMsWUFBVSxJQUFFLEVBQUUsVUFBUSxFQUFFLFVBQVEsRUFBRSxVQUFRLENBQUMsQ0FBQyxhQUFhLElBQUUsQ0FBQyxDQUFDLGFBQWEsSUFBRSxFQUFFLGFBQVcsRUFBRSxjQUFZLE9BQUssR0FBRSxTQUFTLGdCQUFlLENBQUEsSUFBRSxFQUFFLGFBQVcsRUFBRSxhQUFXLENBQUMsQ0FBQyxnQkFBZ0IsSUFBRSxDQUFDLENBQUMsb0JBQW9CLElBQUUsRUFBRSxZQUFVLEVBQUUsYUFBVyxJQUFHLEdBQUcsRUFBRSxFQUFDLElBQUcsT0FBSztBQUFDIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS1hN2FlOTM0MjUwZDhlMzUxLmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL3ViZXIvYW5zd2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBXPU9iamVjdC5jcmVhdGU7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBWPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcT0oZSx0LG8scik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG4gb2YgRyh0KSkhSi5jYWxsKGUsbikmJm4hPT1vJiZQKGUsbix7Z2V0OigpPT50W25dLGVudW1lcmFibGU6IShyPVYodCxuKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgej0oZSx0LG8pPT4obz1lIT1udWxsP1coWChlKSk6e30scSh0fHwhZXx8IWUuX19lc01vZHVsZT9QKG8sXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOm8sZSkpO3ZhciB5PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIEg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSz1uZXcgU2V0KHkpLEQ9ZT0+Sy5oYXMoZSksdWU9eS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBkZT1EKFwiLS1kcnktcnVuXCIpLF89KCk9PkQoXCItLXZlcmJvc2VcIil8fEgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsZmU9XygpO3ZhciB4PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBrPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksVD0oLi4uZSk9PngoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxBPSguLi5lKT0+eChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFE9MCxwPSguLi5lKT0+XygpJiZ4KGBcXHV7MUY3RTF9ICR7USsrfWAsLi4uZSk7dmFyIGM9e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wicGFnZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXHNpdGVzXFxcXHViZXJcXFxcYW5zd2VyLmpzXCIsXCJidW5kbGVJZFwiOlwiZTQ4YjUyNjkzNGZiNGI2MlwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IDRmTmM2XHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy91YmVyL2Fuc3dlci5qc1xyXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyAtPiBjSFVibCAgPT4gIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcclxuICovXHJcblxyXG52YXIgbj1lKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtuLmRlZmluZUludGVyb3BGbGFnKHIpLG4uZXhwb3J0KHIsXCJmb3JtYXRBbnN3ZXJcIiwoKT0+dSksbi5leHBvcnQocixcImluZmVyUmVwZWF0aW5nQ291bnRGcm9tUmVndWxhclwiLCgpPT5jKSxuLmV4cG9ydChyLFwiYnVpbGRSZXBlYXRpbmdHcm91cFJlY29yZHNGcm9tUmVndWxhclwiLCgpPT5kKSxuLmV4cG9ydChyLFwiYnVpbGRFbXBsb3ltZW50UmVjb3Jkc0Zyb21SZWd1bGFyXCIsKCk9PmYpLG4uZXhwb3J0KHIsXCJidWlsZEVkdWNhdGlvblJlY29yZHNGcm9tUmVndWxhclwiLCgpPT5wKSxuLmV4cG9ydChyLFwiZmluZExpbmtzVmFsdWVJblJlY29yZFwiLCgpPT5oKTtsZXQgbz17amFuOlwiMDFcIixqYW51YXJ5OlwiMDFcIixmZWI6XCIwMlwiLGZlYnJ1YXJ5OlwiMDJcIixtYXI6XCIwM1wiLG1hcmNoOlwiMDNcIixhcHI6XCIwNFwiLGFwcmlsOlwiMDRcIixtYXk6XCIwNVwiLGp1bjpcIjA2XCIsanVuZTpcIjA2XCIsanVsOlwiMDdcIixqdWx5OlwiMDdcIixhdWc6XCIwOFwiLGF1Z3VzdDpcIjA4XCIsc2VwOlwiMDlcIixzZXB0OlwiMDlcIixzZXB0ZW1iZXI6XCIwOVwiLG9jdDpcIjEwXCIsb2N0b2JlcjpcIjEwXCIsbm92OlwiMTFcIixub3ZlbWJlcjpcIjExXCIsZGVjOlwiMTJcIixkZWNlbWJlcjpcIjEyXCJ9LGk9W1wicHJlc2VudFwiLFwiY3VycmVudFwiLFwibm93XCIsXCJ0aWxsIG5vd1wiLFwidG8gcHJlc2VudFwiLFwidG8tcHJlc2VudFwiLFwidG8gY3VycmVudFwiLFwidG8tY3VycmVudFwiLFwidG8gbm93XCIsXCJ0by1ub3dcIixcIi1wcmVzZW50XCJdLGE9e3N0YXJ0TW9udGg6W1wiU3RhcnQgRGF0ZSAtIE1vbnRoXCIsXCJTdGFydCBkYXRlIG1vbnRoXCIsXCJTdGFydCBNb250aFwiLFwic3RhcnRNb250aFwiLFwic3RhcnRfbW9udGhcIl0sc3RhcnRZZWFyOltcIlN0YXJ0IERhdGUgLSBZZWFyXCIsXCJTdGFydCBkYXRlIHllYXJcIixcIlN0YXJ0IFllYXJcIixcInN0YXJ0WWVhclwiLFwic3RhcnRfeWVhclwiXSxlbmRNb250aDpbXCJFbmQgRGF0ZSAtIE1vbnRoXCIsXCJFbmQgZGF0ZSBtb250aFwiLFwiRW5kIE1vbnRoXCIsXCJlbmRNb250aFwiLFwiZW5kX21vbnRoXCJdLGVuZFllYXI6W1wiRW5kIERhdGUgLSBZZWFyXCIsXCJFbmQgZGF0ZSB5ZWFyXCIsXCJFbmQgWWVhclwiLFwiZW5kWWVhclwiLFwiZW5kX3llYXJcIl19O2Z1bmN0aW9uIGwoZSl7bGV0IHQ7aWYobnVsbD09ZSlyZXR1cm4gbnVsbDtpZihBcnJheS5pc0FycmF5KGUpJiZlLmxlbmd0aD4wKXQ9U3RyaW5nKGVbMF18fFwiXCIpLnRyaW0oKTtlbHNle2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiBudWxsO3Q9ZS50cmltKCl9aWYoIXQpcmV0dXJuIG51bGw7bGV0IHI9dC5yZXBsYWNlKC9bXlxcZF0vZyxcIlwiKTtpZihyLmxlbmd0aD49Nyl7bGV0IGU9dC5yZXBsYWNlKC9bXlxcZCtdL2csXCJcIik7cmV0dXJuIGUmJmUucmVwbGFjZSgvXFwrL2csXCJcIikubGVuZ3RoPj03P2U6dH1yZXR1cm4gci5sZW5ndGg+PTQ/dDpyLmxlbmd0aDw9MyYmdC5pbmNsdWRlcyhcIitcIikmJiF0Lm1hdGNoKC9cXGR7NCx9Lyk/bnVsbDp0fWZ1bmN0aW9uIHMoZSl7bGV0IHQ9W1wiTW9iaWxlIHBob25lIG51bWJlclwiLFwiUGhvbmVcIixcIk1vYmlsZVwiLFwiUGhvbmUgbnVtYmVyXCJdO2ZvcihsZXQgciBvZiB0KXtsZXQgdD1sKGVbcl0pO251bGw9PT10P2RlbGV0ZSBlW3JdOmVbcl09dH19ZnVuY3Rpb24gdShlKXtlLnJlZ3VsYXJ8fChlLnJlZ3VsYXI9e30pLHMoZS5yZWd1bGFyKTtsZXQgdD1bXCJMaW5rZWRJblwiLFwiR2l0aHViXCIsXCJQb3J0Zm9saW9cIl07Zm9yKGxldCByIG9mIHQpe2xldCB0PWUucmVndWxhcltyXT8/ZVtyXT8/ZVtyLnRvTG93ZXJDYXNlKCldLG49bnVsbD09dD9cIlwiOkFycmF5LmlzQXJyYXkodCk/dFswXTp0LG89XCJzdHJpbmdcIj09dHlwZW9mIG4mJlwiXCIhPT1uLnRyaW0oKTtvP2UucmVndWxhcltyXT10OmRlbGV0ZSBlLnJlZ3VsYXJbcl19bGV0IHI9W1wiWmlwIGNvZGVcIixcIlppcCBDb2RlXCIsXCJaSVAgY29kZVwiLFwiWklQIENvZGVcIixcInppcGNvZGVcIixcInppcF9jb2RlXCIsXCJaaXBcIixcInppcFwiXSxuPWUucHJvZmlsZV9kYXRhfHxlLnByb2ZpbGVEYXRhO2lmKG4mJlwib2JqZWN0XCI9PXR5cGVvZiBuKXtmb3IobGV0IHQgb2YgcilpZihuW3RdJiYhZS5yZWd1bGFyW3RdKXtlLnJlZ3VsYXJbdF09blt0XTticmVha31mb3IobGV0IHQgaW4gbil7bGV0IG89blt0XTtpZihvJiZcIm9iamVjdFwiPT10eXBlb2YgbyYmIUFycmF5LmlzQXJyYXkobykpe2ZvcihsZXQgdCBvZiByKWlmKG9bdF0mJiFlLnJlZ3VsYXJbdF0pe2UucmVndWxhclt0XT1vW3RdO2JyZWFrfX19fWxldCBsPW51bGwsdT1udWxsO2ZvcihsZXQgdCBvZiByKWlmKGUucmVndWxhclt0XSl7bD1lLnJlZ3VsYXJbdF0sdT10O2JyZWFrfWwmJnUmJlwiWmlwIGNvZGVcIiE9PXUmJihlLnJlZ3VsYXJbXCJaaXAgY29kZVwiXT1sKTtsZXQgYz1lPT57bGV0IHQ9KGV8fFwiXCIpLnRyaW0oKTtpZighdClyZXR1cm5cIlwiO2lmKC9eXFxkezEsMn0kLy50ZXN0KHQpKXtsZXQgZT1OdW1iZXIodCk7aWYoZT49MSYmZTw9MTIpcmV0dXJuIFN0cmluZyhlKS5wYWRTdGFydCgyLFwiMFwiKX1sZXQgcj10LnRvTG93ZXJDYXNlKCk7cmV0dXJuIG9bcl18fFwiXCJ9LGQ9ZT0+e2xldCB0PVN0cmluZyhlPz9cIlwiKS50cmltKCkudG9Mb3dlckNhc2UoKTtyZXR1cm4hIXQmJihpLnNvbWUoZT0+dD09PWUpfHx0LmluY2x1ZGVzKFwicHJlc2VudFwiKSl9LGY9KGUsdCk9Pntmb3IobGV0IHIgb2YgdCl7bGV0IHQ9ZT8uW3JdO2lmKG51bGwhPXQpe2lmKEFycmF5LmlzQXJyYXkodCkpe2xldCBlPXQuZmluZChlPT5cIlwiIT09U3RyaW5nKGU/P1wiXCIpLnRyaW0oKSk7aWYobnVsbCE9ZSlyZXR1cm4gZTtjb250aW51ZX1pZihcIlwiIT09U3RyaW5nKHQpLnRyaW0oKSlyZXR1cm4gdH19cmV0dXJuXCJcIn0scD1lPT57bGV0IHQ9U3RyaW5nKGU/P1wiXCIpLnRyaW0oKTtpZighdClyZXR1cm57bW9udGg6XCJcIix5ZWFyOlwiXCJ9O2lmKGQodCkpcmV0dXJue21vbnRoOlwiXCIseWVhcjpcInByZXNlbnRcIn07bGV0IHI9dC5tYXRjaCgvXihcXGR7NH0pW1xcL1xcLS5dKFxcZHsxLDJ9KSg/OltcXC9cXC0uXShcXGR7MSwyfSkpPy8pO2lmKHIpe2xldCBlPXJbMV0sdD1TdHJpbmcoclsyXSkucGFkU3RhcnQoMixcIjBcIik7cmV0dXJue3llYXI6ZSxtb250aDp0fX1yZXR1cm4ocj10Lm1hdGNoKC9eKFxcZHsxLDJ9KVxccypbXFwvXFwtLl1cXHMqKFxcZHs0fSkvKSk/e21vbnRoOlN0cmluZyhyWzFdKS5wYWRTdGFydCgyLFwiMFwiKSx5ZWFyOnJbMl19OihyPXQubWF0Y2goL1xcYihqYW4oPzp1YXJ5KT98ZmViKD86cnVhcnkpP3xtYXIoPzpjaCk/fGFwcig/OmlsKT98bWF5fGp1big/OmUpP3xqdWwoPzp5KT98YXVnKD86dXN0KT98c2VwKD86dCk/KD86ZW1iZXIpP3xvY3QoPzpvYmVyKT98bm92KD86ZW1iZXIpP3xkZWMoPzplbWJlcik/KVxcYltcXHNcXC9cXC0uXSo/KFxcZHs0fSkvaSkpP3ttb250aDpjKHJbMV0pfHxcIlwiLHllYXI6clsyXX06KHI9dC5tYXRjaCgvKFxcZHs0fSlbXFxzXFwvXFwtLl0qXFxiKGphbig/OnVhcnkpP3xmZWIoPzpydWFyeSk/fG1hcig/OmNoKT98YXByKD86aWwpP3xtYXl8anVuKD86ZSk/fGp1bCg/OnkpP3xhdWcoPzp1c3QpP3xzZXAoPzp0KT8oPzplbWJlcik/fG9jdCg/Om9iZXIpP3xub3YoPzplbWJlcik/fGRlYyg/OmVtYmVyKT8pXFxiL2kpKT97eWVhcjpyWzFdLG1vbnRoOmMoclsyXSl8fFwiXCJ9OihyPXQubWF0Y2goL1xcYihcXGR7NH0pXFxiLykpP3t5ZWFyOnJbMV0sbW9udGg6XCJcIn06e21vbnRoOlwiXCIseWVhcjpcIlwifX0sbT0oZSx0LHIsbixvLGksYSk9PntsZXQgbD1cIlwiO2w9QXJyYXkuaXNBcnJheShhKT9TdHJpbmcoYVswXT8/XCJcIikudHJpbSgpLnRvTG93ZXJDYXNlKCk6U3RyaW5nKGE/P1wiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO2xldCBzPSEwPT09bnx8XCJwcmVzZW50XCI9PT1yfHxkKG8pfHxkKGkpfHxsJiZbXCJ5ZXNcIixcInRydWVcIixcIjFcIixcInlcIl0uaW5jbHVkZXMobCk7cz8oZS5DdXJyZW50PVwiWWVzXCIsZVtcIkVuZCBEYXRlIC0gTW9udGhcIl09XCJcIixlW1wiRW5kIERhdGUgLSBZZWFyXCJdPVwiXCIpOihlW1wiRW5kIERhdGUgLSBNb250aFwiXT10LGVbXCJFbmQgRGF0ZSAtIFllYXJcIl09cix0fHxyP2UuQ3VycmVudD1cIk5vXCI6ITE9PT1uP2UuQ3VycmVudD1cIk5vXCI6bD9lLkN1cnJlbnQ9W1wieWVzXCIsXCJ0cnVlXCIsXCIxXCIsXCJ5XCJdLmluY2x1ZGVzKGwpP1wiWWVzXCI6XCJOb1wiOiEwPT09bj9lLkN1cnJlbnQ9XCJZZXNcIjplLkN1cnJlbnQ9XCJOb1wiKX0saD1lPT57bGV0IHQ9W1wiU3RhcnRcIixcInN0YXJ0XCIsXCJTdGFydCBEYXRlXCIsXCJzdGFydERhdGVcIixcIkZyb21cIl0scj1bXCJFbmRcIixcImVuZFwiLFwiRW5kIERhdGVcIixcImVuZERhdGVcIixcIlRvXCJdLG49ZihlLHQpLG89ZihlLHIpLGk9cChuKSxsPXAobykscz1mKGUsYS5zdGFydE1vbnRoKSx1PWYoZSxhLnN0YXJ0WWVhciksZD1mKGUsYS5lbmRNb250aCksbT1mKGUsYS5lbmRZZWFyKTtyZXR1cm57c3RhcnRNb250aDppLm1vbnRofHwocyYmU3RyaW5nKHMpLnRyaW0oKT9jKFN0cmluZyhzKSk6XCJcIil8fFwiXCIsc3RhcnRZZWFyOmkueWVhcnx8KHUmJlN0cmluZyh1KS50cmltKCk/U3RyaW5nKHUpLnRyaW0oKTpcIlwiKXx8XCJcIixlbmRNb250aDpsLm1vbnRofHwoZCYmU3RyaW5nKGQpLnRyaW0oKT9jKFN0cmluZyhkKSk6XCJcIil8fFwiXCIsZW5kWWVhcjpsLnllYXJ8fChtJiZTdHJpbmcobSkudHJpbSgpP1N0cmluZyhtKS50cmltKCk6XCJcIil8fFwiXCIsZW5kUmF3Om8sZW5kWWVhckV4aXN0aW5nOm19fSxnPShlLHQpPT57aWYoIWV8fCF0KXJldHVybiBlO2UudG9Mb3dlckNhc2UoKS50cmltKCk7bGV0IHI9dC50b0xvd2VyQ2FzZSgpLnRyaW0oKTtpZighcilyZXR1cm4gZTtsZXQgbj1bUmVnRXhwKGBcXFxccytpblxcXFxzKyR7ci5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZyxcIlxcXFwkJlwiKX1gLFwiaVwiKSxSZWdFeHAoYCxcXFxccyoke3IucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csXCJcXFxcJCZcIil9YCxcImlcIiksUmVnRXhwKGBcXFxccyske3IucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csXCJcXFxcJCZcIil9JGAsXCJpXCIpXSxvPWU7Zm9yKGxldCBlIG9mIG4pbz1vLnJlcGxhY2UoZSxcIlwiKS50cmltKCk7cmV0dXJuIW98fG8ubGVuZ3RoPDM/ZTpvfSxiPWU9PntsZXQgdD1mKGUsW1wiU2Nob29sXCIsXCJzY2hvb2xcIixcInNjaG9vbE5hbWVcIixcIlNjaG9vbCBOYW1lXCIsXCJJbnN0aXR1dGlvblwiLFwiSW5zdGl0dXRpb24gTmFtZVwiLFwiVW5pdmVyc2l0eVwiLFwiQ29sbGVnZVwiXSkscj1mKGUsW1wiRGVncmVlXCIsXCJkZWdyZWVcIl0pLG49ZihlLFtcIk1ham9yXCIsXCJtYWpvclwiLFwiRmllbGQgT2YgU3R1ZHlcIixcImZpZWxkT2ZTdHVkeVwiLFwiU3R1ZHlcIixcInN0dWR5XCIsXCJEaXNjaXBsaW5lXCIsXCJkaXNjaXBsaW5lXCJdKSxvPWYoZSxbXCJDdXJyZW50XCIsXCJjdXJyZW50XCIsXCJpc0N1cnJlbnRcIixcIklzIEN1cnJlbnRcIl0pLGk9dm9pZCAwIT09ZS5pc0N1cnJlbnQ/ISFlLmlzQ3VycmVudDpudWxsLGE9aChlKSxsPWcoU3RyaW5nKHJ8fFwiXCIpLnRyaW0oKSxTdHJpbmcobnx8XCJcIikudHJpbSgpKSxzPVN0cmluZyhufHxcIlwiKS50cmltKCk7ZS5TY2hvb2w9U3RyaW5nKHR8fFwiXCIpLnRyaW0oKSxlLkRlZ3JlZT1sLGUuTWFqb3I9cyxlW1wiU3RhcnQgRGF0ZSAtIE1vbnRoXCJdPWEuc3RhcnRNb250aCxlW1wiU3RhcnQgRGF0ZSAtIFllYXJcIl09YS5zdGFydFllYXIsbShlLGEuZW5kTW9udGgsYS5lbmRZZWFyLGksYS5lbmRSYXcsYS5lbmRZZWFyRXhpc3Rpbmcsbyl9LHk9ZT0+e2xldCB0PWYoZSxbXCJDb21wYW55XCIsXCJjb21wYW55XCIsXCJjb21wYW55TmFtZVwiLFwiRW1wbG95ZXJcIl0pLHI9ZihlLFtcIlBvc2l0aW9uXCIsXCJwb3NpdGlvblwiLFwidGl0bGVcIixcIlRpdGxlXCJdKSxuPWYoZSxbXCJqb2JEZXNjcmlwdGlvbnNcIixcIkpvYiBEZXNjcmlwdGlvblwiLFwiam9iRGVzY3JpcHRpb25cIixcIkRlc2NyaXB0aW9uIChvcHRpb25hbClcIixcIkRlc2NyaXB0aW9uXCIsXCJkZXNjcmlwdGlvblwiXSksbz1mKGUsW1wiQ3VycmVudFwiLFwiY3VycmVudFwiLFwiaXNDdXJyZW50XCIsXCJJcyBDdXJyZW50XCJdKSxpPXZvaWQgMCE9PWUuaXNDdXJyZW50PyEhZS5pc0N1cnJlbnQ6bnVsbCxhPWgoZSk7ZS5Db21wYW55PVN0cmluZyh0fHxcIlwiKS50cmltKCksZS5Qb3NpdGlvbj1TdHJpbmcocnx8XCJcIikudHJpbSgpLGVbXCJEZXNjcmlwdGlvbiAob3B0aW9uYWwpXCJdPVN0cmluZyhufHxcIlwiKS50cmltKCksZGVsZXRlIGUuam9iRGVzY3JpcHRpb25zLGRlbGV0ZSBlW1wiSm9iIERlc2NyaXB0aW9uXCJdLGRlbGV0ZSBlLmpvYkRlc2NyaXB0aW9uLGVbXCJTdGFydCBEYXRlIC0gTW9udGhcIl09YS5zdGFydE1vbnRoLGVbXCJTdGFydCBEYXRlIC0gWWVhclwiXT1hLnN0YXJ0WWVhcixtKGUsYS5lbmRNb250aCxhLmVuZFllYXIsaSxhLmVuZFJhdyxhLmVuZFllYXJFeGlzdGluZyxvKX07QXJyYXkuaXNBcnJheShlLmVkdWNhdGlvbikmJmUuZWR1Y2F0aW9uLmZvckVhY2goZT0+e2UmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZiKGUpfSksQXJyYXkuaXNBcnJheShlLndvcmtFeHBlcmllbmNlKSYmZS53b3JrRXhwZXJpZW5jZS5mb3JFYWNoKGU9PntlJiZcIm9iamVjdFwiPT10eXBlb2YgZSYmeShlKX0pO2xldCB2PVN0cmluZyhlLnJlZ3VsYXI/LltcIkZpcnN0IE5hbWVcIl0/P1wiXCIpLnRyaW0oKSx3PVN0cmluZyhlLnJlZ3VsYXI/LltcIkxhc3QgTmFtZVwiXT8/XCJcIikudHJpbSgpLFM9W3Ysd10uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpLEU9W3csdl0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpLHg9ZT0+e2lmKCFlKXJldHVybiExO2xldCB0PWUudHJpbSgpO3JldHVybiB0PT09dnx8dD09PXd8fHQ9PT1TfHx0PT09RX0sQz0oZSx0KT0+e2ZvcihsZXQgciBvZiB0KXtsZXQgdD1lPy5bcl07aWYobnVsbD09dCljb250aW51ZTtsZXQgbj1BcnJheS5pc0FycmF5KHQpP3RbMF06dCxvPVN0cmluZyhuPz9cIlwiKS50cmltKCk7aWYobyYmIXgobykpcmV0dXJuIG99cmV0dXJuXCJcIn0sQT1bXCJTY2hvb2xcIixcInNjaG9vbFwiLFwic2Nob29sTmFtZVwiLFwiU2Nob29sIE5hbWVcIixcIkluc3RpdHV0aW9uXCIsXCJJbnN0aXR1dGlvbiBOYW1lXCIsXCJVbml2ZXJzaXR5XCIsXCJDb2xsZWdlXCJdLGs9W1wiQ29tcGFueVwiLFwiY29tcGFueVwiLFwiY29tcGFueU5hbWVcIixcIkVtcGxveWVyXCIsXCJFbXBsb3llciBuYW1lXCJdO3JldHVybiBBcnJheS5pc0FycmF5KGUuZWR1Y2F0aW9uKSYmZS5lZHVjYXRpb24uZm9yRWFjaChlPT57ZSYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUuU2Nob29sJiZ4KFN0cmluZyhlLlNjaG9vbCkpJiYoZS5TY2hvb2w9QyhlLEEpKX0pLEFycmF5LmlzQXJyYXkoZS53b3JrRXhwZXJpZW5jZSkmJmUud29ya0V4cGVyaWVuY2UuZm9yRWFjaChlPT57ZSYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUuQ29tcGFueSYmeChTdHJpbmcoZS5Db21wYW55KSkmJihlLkNvbXBhbnk9QyhlLGspKX0pLGV9ZnVuY3Rpb24gYyhlLHQscixuPTIwKXtsZXQgbz1lfHx7fSxpPTAsYT1SZWdFeHAoYF4ke3R9XFxcXHMrKFxcXFxkKylcXFxccytgKTtmb3IobGV0IGUgb2YgT2JqZWN0LmtleXMobykpe2xldCB0PWUubWF0Y2goYSk7aWYodCl7bGV0IGU9TnVtYmVyKHRbMV0pO051bWJlci5pc0Zpbml0ZShlKSYmZT5pJiYoaT1lKX19bGV0IGw9MCxzPSExO2ZvcihsZXQgZSBvZiByKXtsZXQgdD1vW2VdO251bGwhPXQmJlwiXCIhPT10JiYocz0hMCxBcnJheS5pc0FycmF5KHQpJiYobD1NYXRoLm1heChsLHQubGVuZ3RoKSkpfWxldCB1PU1hdGgubWF4KGksbCxzJiYwPT09aSYmMD09PWw/MTowKTtyZXR1cm4gTWF0aC5taW4odSxuKX1mdW5jdGlvbiBkKGUsdCxyKXtsZXQgbj1lfHx7fSxvPXIubWFwKGU9PmUuYmFzZUtleSksaT1jKG4sdCxvLDMwKTtpZihpPD0wKXJldHVybltdO2xldCBhPShlLHIpPT57bGV0IG89ZS5yZXBsYWNlKFJlZ0V4cChgXiR7dH1cXFxccytgKSwoKT0+YCR7dH0gJHtyKzF9IGApLGk9bltvXT8/bltlXTtpZihBcnJheS5pc0FycmF5KGkpKXtsZXQgZT1pLm1hcChlPT5TdHJpbmcoZT8/XCJcIikudHJpbSgpKS5maWx0ZXIoQm9vbGVhbik7cmV0dXJuIGVbcl18fFwiXCJ9cmV0dXJuIHI+MD9cIlwiOlN0cmluZyhpPz9cIlwiKS50cmltKCl9LGw9W107Zm9yKGxldCBlPTA7ZTxpO2UrKyl7bGV0IHQ9e30sbj0hMTtmb3IobGV0IG8gb2Ygcil7bGV0IHI9YShvLmJhc2VLZXksZSk7dFtvLnJlY29yZEtleV09cixyJiYobj0hMCl9biYmbC5wdXNoKHQpfXJldHVybiBsfWZ1bmN0aW9uIGYoZSl7cmV0dXJuIGQoZSxcIkV4cGVyaWVuY2VcIixbe2Jhc2VLZXk6XCJFeHBlcmllbmNlIENvbXBhbnlcIixyZWNvcmRLZXk6XCJDb21wYW55XCJ9LHtiYXNlS2V5OlwiRXhwZXJpZW5jZSBQb3NpdGlvblwiLHJlY29yZEtleTpcIlBvc2l0aW9uXCJ9LHtiYXNlS2V5OlwiRXhwZXJpZW5jZSBEZXNjcmlwdGlvbiAob3B0aW9uYWwpXCIscmVjb3JkS2V5OlwiRGVzY3JpcHRpb24gKG9wdGlvbmFsKVwifSx7YmFzZUtleTpcIkV4cGVyaWVuY2UgQ3VycmVudFwiLHJlY29yZEtleTpcIkN1cnJlbnRcIn0se2Jhc2VLZXk6XCJFeHBlcmllbmNlIFN0YXJ0IERhdGUgLSBNb250aFwiLHJlY29yZEtleTpcIlN0YXJ0IERhdGUgLSBNb250aFwifSx7YmFzZUtleTpcIkV4cGVyaWVuY2UgU3RhcnQgRGF0ZSAtIFllYXJcIixyZWNvcmRLZXk6XCJTdGFydCBEYXRlIC0gWWVhclwifSx7YmFzZUtleTpcIkV4cGVyaWVuY2UgRW5kIERhdGUgLSBNb250aFwiLHJlY29yZEtleTpcIkVuZCBEYXRlIC0gTW9udGhcIn0se2Jhc2VLZXk6XCJFeHBlcmllbmNlIEVuZCBEYXRlIC0gWWVhclwiLHJlY29yZEtleTpcIkVuZCBEYXRlIC0gWWVhclwifV0pfWZ1bmN0aW9uIHAoZSl7cmV0dXJuIGQoZSxcIkVkdWNhdGlvblwiLFt7YmFzZUtleTpcIkVkdWNhdGlvbiBTY2hvb2xcIixyZWNvcmRLZXk6XCJTY2hvb2xcIn0se2Jhc2VLZXk6XCJFZHVjYXRpb24gRGVncmVlXCIscmVjb3JkS2V5OlwiRGVncmVlXCJ9LHtiYXNlS2V5OlwiRWR1Y2F0aW9uIE1ham9yIChvcHRpb25hbClcIixyZWNvcmRLZXk6XCJNYWpvclwifSx7YmFzZUtleTpcIkVkdWNhdGlvbiBDdXJyZW50XCIscmVjb3JkS2V5OlwiQ3VycmVudFwifSx7YmFzZUtleTpcIkVkdWNhdGlvbiBTdGFydCBEYXRlIC0gTW9udGhcIixyZWNvcmRLZXk6XCJTdGFydCBEYXRlIC0gTW9udGhcIn0se2Jhc2VLZXk6XCJFZHVjYXRpb24gU3RhcnQgRGF0ZSAtIFllYXJcIixyZWNvcmRLZXk6XCJTdGFydCBEYXRlIC0gWWVhclwifSx7YmFzZUtleTpcIkVkdWNhdGlvbiBFbmQgRGF0ZSAtIE1vbnRoXCIscmVjb3JkS2V5OlwiRW5kIERhdGUgLSBNb250aFwifSx7YmFzZUtleTpcIkVkdWNhdGlvbiBFbmQgRGF0ZSAtIFllYXJcIixyZWNvcmRLZXk6XCJFbmQgRGF0ZSAtIFllYXJcIn1dKX1mdW5jdGlvbiBtKGUpe3JldHVybiEhKG51bGw9PWV8fFwic3RyaW5nXCI9PXR5cGVvZiBlJiZcIlwiPT09ZS50cmltKCl8fEFycmF5LmlzQXJyYXkoZSkmJigwPT09ZS5sZW5ndGh8fDE9PT1lLmxlbmd0aCYmKHZvaWQgMD09PWVbMF18fG51bGw9PT1lWzBdfHxcIlwiPT09U3RyaW5nKGVbMF0pLnRyaW0oKSkpKX1mdW5jdGlvbiBoKGUsdCl7aWYoIXR8fCFlKXJldHVybiBudWxsO2xldCByPWUudG9Mb3dlckNhc2UoKSxuPW51bGw7cmV0dXJuKHIuaW5jbHVkZXMoXCJsaW5rZWRpblwiKT9uPXQuTGlua2VkSW4/P3QuTGlua2VkaW4/P3QubGlua2VkaW4/P3RbXCJMaW5rZWRJbiBVUkxcIl0/P3RbXCJMaW5rZWRJbiBQcm9maWxlXCJdPz90LmxpbmtlZEluVVJMPz90LmxpbmtlZGluX3VybD8/bnVsbDpyLmluY2x1ZGVzKFwiZ2l0aHViXCIpP249dC5HaXRodWI/P3QuR2l0SHViPz90LmdpdGh1Yj8/dFtcIkdpdEh1YiBVUkxcIl0/P3RbXCJHaXRodWIgVVJMXCJdPz90LmdpdGh1YlVSTD8/dC5naXRodWJfdXJsPz9udWxsOnIuaW5jbHVkZXMoXCJwb3J0Zm9saW9cIikmJihuPXQuUG9ydGZvbGlvPz90LnBvcnRmb2xpbz8/dFtcIlBvcnRmb2xpbyBVUkxcIl0/P3RbXCJQb3J0Zm9saW8gV2Vic2l0ZVwiXT8/dC5vdGhlclVSTD8/dC5vdGhlcl91cmw/P251bGwpLG0obikpP251bGw6bn1cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImFuc3dlci4zNGZiNGI2Mi5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);