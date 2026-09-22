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
})({"3cm8j":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\brassring.js",
    "bundleId": "cd392e78046aa1e2",
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
var j = z(require("6d8695a85859317c"));
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

},{"6d8695a85859317c":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"6XW5v":[function(require,module,exports) {
/**
 * Parcel module id: jiUzT
 * Resolved path: src/contents/sites/brassring.js
 * Dependencies:
 *   ./answer -> LdxVK  =>  src/contents/sites/brassring/answer.js
 *   ./country -> huUp4  =>  src/contents/sites/brassring/country.js
 *   ./operations -> 9ZJbU  =>  src/contents/sites/brassring/operations.js
 *   ./rules -> 79ZpG  =>  src/contents/sites/brassring/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/section-results -> 6WWsC  =>  src/contents/methods/section-results.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Brassring", ()=>R);
var o = e("~contents/methods/section-results"), i = e("dayjs"), a = n.interopDefault(i), l = e("@plasmohq/messaging"), s = e("~contents/methods/answer"), u = e("~contents/methods/cancellation"), c = e("~contents/methods/dom"), d = e("~contents/sites/base-filler"), f = e("~core/enums"), p = e("./answer"), m = e("./country"), h = e("./operations"), g = e("./rules");
function b(e1) {
    return e1.replace(/\s+/g, " ").trim().toLowerCase();
}
function y(e1) {
    let t = b(e1.label), r1 = t.replace(/[\/]+/g, " ").replace(/\s+/g, " ");
    return /^country(?:\/region)?$/.test(t) || "country region" === r1 ? 0 : [
        "state",
        "province",
        "state province",
        "state region province",
        "state region province county",
        "current state",
        "current province",
        "current state province"
    ].includes(r1) ? 2 : 1;
}
function v(e1) {
    let t = b(e1.label);
    if (!/^country(?:\s*\/\s*|\s+)region$/.test(t) || e1.type !== f.FIELD_TYPE.SEARCH) return !1;
    let r1 = e1.$input, n = [
        r1?.id,
        r1?.getAttribute("name") || "",
        r1?.getAttribute("dbfieldname") || ""
    ].join(" ").toLowerCase();
    return /(?:^|\s|[_-])profile(?:\s|[_-]|$)/.test(n);
}
function w(e1) {
    let t = [], r1 = [];
    for (let n of e1)v(n) ? t.push(n) : r1.push(n);
    return {
        geographicCountryRules: t,
        regularRules: r1
    };
}
function S(e1) {
    return e1.filter((e1)=>2 === y(e1)).map((e1)=>({
            label: e1.label,
            type: e1.type,
            optionCount: Array.isArray(e1.options) ? e1.options.length : 0
        }));
}
_c = S;
function E(e1) {
    return e1.map((e1, t)=>({
            rule: e1,
            index: t
        })).sort((e1, t)=>{
        let r1 = y(e1.rule) - y(t.rule);
        return r1 || e1.index - t.index;
    }).map(({ rule: e1 })=>e1);
}
_c1 = E;
function x(e1) {
    let t = Array.isArray(e1) ? e1.find(Boolean) : e1;
    return String(t ?? "").trim();
}
function C(e1) {
    let t = e1?.regular || {}, r1 = Object.entries(t).find(([e1])=>/^country(?:\/region)?$/i.test(e1.replace(/\s+/g, " ").trim()));
    return x(r1?.[1]) || x(t["Country/Region"]) || x(e1?.country);
}
_c2 = C;
function A(e1) {
    let t = String(e1.description || "");
    return e1.type === f.FIELD_TYPE.DATE && /^date$/i.test(e1.label.trim()) && /Voluntary Self-Identification of Disability/i.test(t) && /signature date/i.test(t) && /today/i.test(t);
}
_c3 = A;
function k(e1, t) {
    let r1 = C(t), n = Object.keys(e1).find((e1)=>/^country(?:\/region)?$/i.test(e1.replace(/\s+/g, " ").trim()));
    return r1 && n && (e1[n] = r1), e1;
}
function T(e1) {
    return String(e1 ?? "").replace(/\*/g, "").replace(/\s+/g, " ").trim();
}
_c4 = T;
function F(e1) {
    let t = e1;
    for(; t && t !== document.documentElement;){
        let e1 = "undefined" != typeof window && window.getComputedStyle ? window.getComputedStyle(t) : null, r1 = String(t.className || "");
        if (t.hidden || "true" === t.getAttribute("aria-hidden") || /\b(hidden|hiddenField|hide|ng-hide)\b/.test(r1) || e1?.display === "none" || e1?.visibility === "hidden" || e1?.visibility === "collapse") return !1;
        t = t.parentElement;
    }
    return !0;
}
_c5 = F;
function I() {
    let e1 = Array.from(document.querySelectorAll(".fieldcontain")).filter(F).map((e1)=>T(e1.querySelector("label.ListView, label[id$='-label'], label")?.textContent)).filter((e1)=>e1 && !/^(yes|no)$/i.test(e1));
    return Array.from(new Set(e1)).slice(0, 40);
}
_c6 = I;
function j() {
    return Object.entries((0, h.getUploadSnapshotValues)()).filter(([, e1])=>T(e1)).map(([e1])=>e1).sort();
}
function D() {
    let e1 = T(document.querySelector("#ApplyPageHead")?.textContent), t = T(document.querySelector(".progressBarContainer")?.textContent), r1 = I(), n = j();
    return e1 || t || 0 !== r1.length || 0 !== n.length ? JSON.stringify({
        heading: e1,
        progress: t,
        labels: r1,
        uploadKeys: n
    }) : null;
}
_c7 = D;
function P(e1, t) {
    return Object.entries(t || {}).some(([t, r1])=>!!(0, s.isMatched)(e1, t) && (Array.isArray(r1) ? r1.every((e1)=>"" === String(e1 ?? "").trim()) : "" === String(r1 ?? "").trim()));
}
_c8 = P;
async function _(e1, t) {
    for (let r1 of e1){
        if (r1.type !== f.FIELD_TYPE.TEXT || !/\bother\b/i.test(r1.label) || !P(r1.label, t)) continue;
        let e1 = r1.$input;
        (e1 instanceof HTMLInputElement || e1 instanceof HTMLTextAreaElement) && await (0, h.fillInputTextField)(e1, "");
    }
}
let L = "BrassRing resume parsing did not complete. Please retry Autofill.";
class R extends d.BaseFiller {
    getFieldHandlers() {
        return {
            [f.FIELD_TYPE.TEXT]: {
                handler: (e1, t)=>{
                    let r1 = Array.isArray(t) ? t[0] : t;
                    if (null != r1 && "" !== r1) return (0, h.fillInputTextField)(e1.$input, String(r1));
                },
                options: {
                    expectArray: !0
                }
            },
            [f.FIELD_TYPE.DATE]: {
                handler: (e1, t)=>{
                    let r1 = Array.isArray(t) ? t[0] : t;
                    if (null != r1 && "" !== r1) return (0, h.fillInputTextField)(e1.$input, String(r1));
                },
                options: {
                    expectArray: !0
                }
            },
            [f.FIELD_TYPE.SELECT]: {
                handler: (e1, t)=>(0, h.fillSelectField)(e1, t),
                options: {
                    expectArray: !0
                }
            },
            [f.FIELD_TYPE.SEARCH]: {
                handler: (e1, t)=>(0, h.fillSearchField)(e1, t),
                options: {
                    expectArray: !0
                }
            },
            [f.FIELD_TYPE.MULTI_SELECT]: {
                handler: (e1, t)=>(0, h.fillMultiselectField)(e1, t),
                options: {
                    expectArray: !0
                }
            },
            [f.FIELD_TYPE.CHECKBOX]: {
                handler: (e1, t)=>(0, h.fillCheckboxField)(e1, t),
                options: {
                    expectArray: !0
                }
            },
            [f.FIELD_TYPE.RADIOGROUP]: {
                handler: (e1, t)=>(0, h.fillRadioGroupField)(e1, t),
                options: {
                    expectArray: !0
                }
            }
        };
    }
    async runPreFillForm() {
        this.currentRunCountryCommitted = !1, console.info(`[BrassRingAutofill] fill-stage ${JSON.stringify({
            stage: "prefill-start"
        })}`), await (0, h.preFillForm)(), console.info(`[BrassRingAutofill] fill-stage ${JSON.stringify({
            stage: "prefill-complete"
        })}`);
    }
    async preFillCountryAndRefreshStateRules(e1) {
        let { geographicCountryRules: t } = w(e1), r1 = await (0, m.runBrassringCountryPrefill)({
            fetchAutofillInfo: ()=>(0, l.sendToBackground)({
                    name: "getAutofillInfo",
                    body: {
                        forceRefresh: !0
                    }
                }).catch(()=>null),
            fillCountry: async (e1)=>{
                if (1 !== t.length) return console.info(`[BrassRingAutofill] country-prefill-skipped ${JSON.stringify({
                    reason: "country-control-not-unique",
                    controlCount: t.length
                })}`), !1;
                try {
                    return await (0, h.fillSearchField)(t[0], [
                        e1
                    ]), !0;
                } catch  {
                    return console.info(`[BrassRingAutofill] country-prefill-skipped ${JSON.stringify({
                        reason: "country-commit-rejected"
                    })}`), !1;
                }
            },
            waitForDependentFields: async ()=>!0
        });
        return this.currentRunCountryCommitted = r1.committed, console.info(`[BrassRingAutofill] country-prefill-result ${JSON.stringify({
            hasCountry: !!r1.country,
            committed: r1.committed,
            dependentSettled: r1.dependentSettled
        })}`), r1.committed ? await (0, g.extractRules)() : e1;
    }
    async doFillForm(e1 = !1) {
        await this.initializeFillForm();
        let t = await this.extractFormRules();
        console.info(`[BrassRingAutofill] fill-stage ${JSON.stringify({
            stage: "initial-rules-extracted",
            stateRules: S(t)
        })}`);
        let r1 = await this.handleResumeUpload();
        if (r1?.newUpload && (t = await this.extractFormRules(), console.info(`[BrassRingAutofill] fill-stage ${JSON.stringify({
            stage: "post-parser-rules-extracted",
            parserDetected: r1.parserDetected,
            parserReady: r1.parserReady,
            ruleCount: t.length
        })}`)), r1?.parserDetected && !r1.parserReady) return console.info(`[BrassRingAutofill] fill-stage ${JSON.stringify({
            stage: "resume-parser-abort",
            parserDetected: !0,
            parserReady: !1,
            reason: "parser-timeout"
        })}`), L;
        t = await this.seedEmptyCompositeRules(t), t = await this.preFillCountryAndRefreshStateRules(t), console.info(`[BrassRingAutofill] fill-stage ${JSON.stringify({
            stage: "country-prefill-complete",
            countryCommitted: this.currentRunCountryCommitted,
            stateRules: S(t)
        })}`), t = this.prepareCoverLetterRules(t);
        let { geographicCountryRules: n, regularRules: o } = w(t);
        if (this.progressTracker.setFieldsRequiredStatus(t), r1?.hasSection && !r1.uploaded && (this.progressTracker.updateFieldRequiredStatus({
            label: h.BRASSRING_RESUME_LABEL,
            required: !0,
            type: "file"
        }), this.progressTracker.updateMissedProgress(h.BRASSRING_RESUME_LABEL)), this.currentRunCountryCommitted) for (let e1 of n)this.progressTracker.updateFilledProgress(e1.label);
        console.info(`[BrassRingAutofill] fill-stage ${JSON.stringify({
            stage: "fill-v2-request",
            stateRules: S(o)
        })}`);
        let i = await this.fetchFormAnswers(o, e1);
        if ("string" == typeof i) return i;
        await this.fillRegularFields(o), await this.fillEducationAndEmployment(t), await this.fillCoverLetterFields();
        let a = await this.runComboQuestionAutofillIfNeeded(t, e1);
        return "string" == typeof a ? a : (t = a, await this.executeSiteSpecificSteps(t), await this.finalizeFillForm());
    }
    async extractFormRules() {
        return await (0, g.extractRules)();
    }
    async seedEmptyCompositeRules(e1) {
        let t = e1.some((e1)=>e1.type === f.FIELD_TYPE.EDUCATION), r1 = e1.some((e1)=>e1.type === f.FIELD_TYPE.EMPLOYMENT);
        if (t && r1) return e1;
        let n = await (0, l.sendToBackground)({
            name: "getAutofillInfo",
            body: {
                forceRefresh: !0
            }
        }).catch(()=>null), o = t ? 0 : Array.isArray(n?.education) ? n.education.length : 0, i = r1 ? 0 : Array.isArray(n?.workExperience) ? n.workExperience.length : 0;
        if (0 === o && 0 === i) return e1;
        let a = await (0, h.waitForCompositeSectionRows)({
            educationCount: o,
            employmentCount: i
        }), s = [
            ...e1
        ], u = async (e1, t, r1)=>{
            if (0 === t) return;
            let n = await (0, h.openSectionForEdit)(e1, 0), o = n ? r1() : null;
            console.info("[BrassRingAutofill] composite-rule-prepare", {
                kind: e1,
                rowCount: t,
                opened: n,
                childCount: o?.children?.length ?? 0
            }), o && s.push(o);
        };
        t || await u("education", a.educationCount, ()=>(0, g.getEducationRule)(0)), r1 || await u("experience", a.employmentCount, ()=>(0, g.getExperienceRule)(0));
        let c = s.some((e1)=>e1.type === f.FIELD_TYPE.EDUCATION), d = s.some((e1)=>e1.type === f.FIELD_TYPE.EMPLOYMENT);
        if (c && d) return s;
        let p = await (0, h.seedEmptyCompositeSections)({
            educationCount: c ? 0 : o,
            employmentCount: d ? 0 : i
        });
        if (!p) return s;
        let m = await (0, g.extractRules)();
        for (let e1 of [
            f.FIELD_TYPE.EDUCATION,
            f.FIELD_TYPE.EMPLOYMENT
        ]){
            if (s.some((t)=>t.type === e1)) continue;
            let t = m.find((t)=>t.type === e1);
            t && s.push(t);
        }
        return s;
    }
    getSiteName() {
        return "brassring";
    }
    async fetchFormAnswers(e1, t) {
        if (0 === e1.length) {
            let e1 = Date.now();
            this.timeTrace.requestStartTime = e1, this.timeTrace.fillStartTime = e1, this.answer = {
                education: [],
                workExperience: [],
                skills: [],
                regular: {},
                fillDataList: []
            };
            return;
        }
        return await super.fetchFormAnswers(e1, t);
    }
    async fillRegularFields(e1) {
        let t = E(e1), r1 = t.flatMap((e1)=>A(e1) ? [
                async ()=>{
                    await this.operationConfig[e1.type]?.(e1, {
                        [e1.label]: a.default().format("M/D/YYYY")
                    });
                }
            ] : (0, s.getRegularOperations)([
                e1
            ], this.answer.regular, this.operationConfig));
        for (let e1 of r1)this.taskQueue.add(e1);
        await this.taskQueue.run(), await _(t, this.answer.regular);
    }
    async checkCoverLetter() {
        this.ensureCoverLetterDetectionObserver(), this.postCoverLetterDetectionStatus();
    }
    postCoverLetterDetectionStatus() {
        if (!(0, h.hasCoverLetterUploadSlot)()) {
            (0, c.postCoverLetterStatus)("");
            return;
        }
        (0, c.postCoverLetterStatus)((0, h.isCoverLetterRequired)() ? "required" : "optional");
    }
    registerCoverLetterProgress() {
        if (!(0, h.hasCoverLetterUploadSlot)()) return null;
        let e1 = (0, h.isCoverLetterRequired)();
        return this.progressTracker.updateFieldRequiredStatus({
            label: "Cover Letter",
            required: e1,
            type: "file"
        }), e1;
    }
    ensureCoverLetterDetectionObserver() {
        !this.coverLetterDetectionObserver && document.body && (this.coverLetterDetectionObserver = new MutationObserver(()=>{
            this.coverLetterDetectionTimer && clearTimeout(this.coverLetterDetectionTimer), this.coverLetterDetectionTimer = setTimeout(()=>{
                this.postCoverLetterDetectionStatus();
            }, 500);
        }), this.coverLetterDetectionObserver.observe(document.body, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: [
                "style",
                "class",
                "aria-hidden"
            ]
        }));
    }
    async handleResumeUpload() {
        let e1 = (0, h.getResumeUploadState)();
        if (!e1.hasSection) return {
            hasSection: !1,
            newUpload: !1,
            uploaded: !1,
            parserDetected: !1,
            parserReady: !0
        };
        if (this.progressTracker.updateFieldRequiredStatus({
            label: h.BRASSRING_RESUME_LABEL,
            required: !0,
            type: "file"
        }), this.disableUploadResume) return this.progressTracker.updateMissedProgress(h.BRASSRING_RESUME_LABEL), {
            hasSection: !0,
            newUpload: !1,
            uploaded: !1,
            parserDetected: !1,
            parserReady: !0
        };
        if (e1.uploaded) return this.progressTracker.updateFilledProgress(h.BRASSRING_RESUME_LABEL), {
            hasSection: !0,
            newUpload: !1,
            uploaded: !0,
            parserDetected: !1,
            parserReady: !0
        };
        if (!e1.canUpload) return this.progressTracker.updateMissedProgress(h.BRASSRING_RESUME_LABEL), {
            hasSection: !0,
            newUpload: !1,
            uploaded: !1,
            parserDetected: !1,
            parserReady: !0
        };
        let t = await (0, h.uploadResume)(this.resumeInfo, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
        return t.uploaded || this.progressTracker.updateMissedProgress(h.BRASSRING_RESUME_LABEL), {
            hasSection: !0,
            newUpload: t.uploaded,
            ...t
        };
    }
    async executeSiteSpecificSteps(e1) {
        let t = this.registerCoverLetterProgress(), r1 = null != t && (this.coverLetter?.coverLetterId ? !await (0, h.uploadCoverLetter)(this.coverLetter, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress) : t);
        r1 && t && this.progressTracker.updateMissedProgress("Cover Letter"), await super.executeSiteSpecificSteps(e1);
    }
    async fillEducationAndEmployment() {
        await this.fillCompositeSection("education", this.answer.education || [], g.getEducationRule, "Education"), await this.fillCompositeSection("experience", this.answer.workExperience || [], g.getExperienceRule, "Employment");
    }
    async fillCompositeSection(e1, t, r1, n) {
        let i = t.length;
        if (0 === i) return;
        let a = await (0, h.ensureSectionCount)(e1, i), l = 0 === a ? this.countAvailableCompositeRules(r1, i) : 0;
        if (0 === a && 0 === l) return;
        let c = Math.min(t.length, a || l), d = 0 === a, f = d ? Array.from({
            length: c
        }, (e1, t)=>t) : Array.from({
            length: c
        }, (e1, t)=>c - 1 - t), p = (0, o.createSequentialSectionResultReporter)("education" === e1 ? "education" : "employment", this.progressTracker, n), m = !1, g = !1;
        try {
            for (let o of f){
                d || await (0, h.openSectionForEdit)(e1, o);
                let i = r1(o);
                if (!i?.children?.length) continue;
                m || (this.progressTracker.updateFieldRequiredStatus({
                    label: n,
                    required: !!i.required,
                    type: "education" === e1 ? "education" : "employment"
                }), m = !0);
                let a = {
                    ...p.forRecord(o, [
                        i
                    ]),
                    onSkipped: ()=>{
                        g = !0;
                    }
                }, l = "education" === e1 ? (0, s.getEducationOperations)([
                    i
                ], [
                    t[o]
                ], this.operationConfig, void 0, a, {
                    keepCurrentFieldOnExit: !0
                }) : (0, s.getEmploymentOperations)([
                    i
                ], [
                    t[o]
                ], this.operationConfig, void 0, a, {
                    keepCurrentFieldOnExit: !0
                });
                for (let e1 of l)this.taskQueue.add(e1);
                if (await this.taskQueue.run(), g) break;
                d || (await (0, h.saveSection)(e1, o), p.clearRecordFocus(o));
            }
        } finally{
            (0, u.updateCurrentField)(null);
        }
        if (g) {
            this.progressTracker.updateMissedProgress(n);
            return;
        }
        this.progressTracker.updateFilledProgress(n);
    }
    countAvailableCompositeRules(e1, t) {
        let r1 = 0;
        for(let n = 0; n < t; n++){
            let t = e1(n);
            if (!t?.children?.length) break;
            r1 += 1;
        }
        return r1;
    }
    getSubmitTrackingDelegationRoot() {
        return document;
    }
    getSubmitTrackingScopeKey() {
        return D();
    }
    resolveDelegatedSubmitButton(e1) {
        let t = e1.closest("button, input[type='submit'], input[type='button'], a");
        return t && this.isTrackedNavigationButton(t) ? t : null;
    }
    isTrackedNavigationButton(e1) {
        if (!this.isVisibleNavigationButton(e1)) return !1;
        let t = this.getNavigationButtonText(e1), r1 = e1.id.toLowerCase(), n = (e1.getAttribute("ng-click") || e1.getAttribute("data-ng-click") || "").toLowerCase();
        return !("saveasdraft" === r1 || t.includes("save and finish later") || t.includes("finish later") || t.includes("draft")) && ("shownext" === r1 || "showstart" === r1 || n.includes("gonext") || n.includes("gostart") || n.includes("submit") || t.includes("save and continue") || t.includes("let's get started") || t.includes("submit") || "next" === t || "continue" === t || "apply" === t || "submit application" === t);
    }
    isVisibleNavigationButton(e1) {
        let t = window.getComputedStyle(e1);
        return "none" !== t.display && "hidden" !== t.visibility && "true" !== e1.getAttribute("aria-hidden") && !e1.disabled;
    }
    getNavigationButtonText(e1) {
        return (e1.textContent || e1.value || e1.getAttribute("aria-label") || "").replace(/\s+/g, " ").trim().toLowerCase();
    }
    getSubmitButtonSelector() {
        return "//*[self::button or self::input or self::a][contains(translate(normalize-space(string(.)), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'submit') or contains(translate(normalize-space(@value), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'submit') or contains(translate(normalize-space(string(.)), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'save and continue') or contains(translate(normalize-space(@value), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'save and continue') or contains(translate(normalize-space(string(.)), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), \"let's get started\") or contains(translate(normalize-space(@value), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), \"let's get started\") or translate(normalize-space(string(.)), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = 'next' or translate(normalize-space(@value), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = 'next' or translate(normalize-space(string(.)), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = 'continue' or translate(normalize-space(@value), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = 'continue' or translate(normalize-space(string(.)), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = 'apply' or translate(normalize-space(@value), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = 'apply' or translate(normalize-space(string(.)), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = 'submit application' or translate(normalize-space(@value), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = 'submit application']";
    }
    async getAutofillSnapshot() {
        return k({
            ...await (0, g.getFormSnapshot)(),
            ...(0, h.getUploadSnapshotValues)()
        }, this.answer);
    }
    async getSubmitSnapshot() {
        return k({
            ...await (0, g.getFormSnapshot)(),
            ...(0, h.getUploadSnapshotValues)()
        }, this.answer);
    }
    submitApplication() {
        (0, h.submitApplication)();
    }
    constructor(...e1){
        super(...e1), this.currentRunCountryCommitted = !1, this.formatAnswer = p.formatAnswer;
    }
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
$RefreshReg$(_c, "S");
$RefreshReg$(_c1, "E");
$RefreshReg$(_c2, "C");
$RefreshReg$(_c3, "A");
$RefreshReg$(_c4, "T");
$RefreshReg$(_c5, "F");
$RefreshReg$(_c6, "I");
$RefreshReg$(_c7, "D");
$RefreshReg$(_c8, "P");

},{}]},["3cm8j","6XW5v"], "6XW5v", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLElBQUUsT0FBTztBQUFPLElBQUksSUFBRSxPQUFPO0FBQWUsSUFBSSxJQUFFLE9BQU87QUFBeUIsSUFBSSxJQUFFLE9BQU87QUFBb0IsSUFBSSxJQUFFLE9BQU8sZ0JBQWUsSUFBRSxPQUFPLFVBQVU7QUFBZSxJQUFJLElBQUUsQ0FBQyxHQUFFLEdBQUUsR0FBRTtJQUFLLElBQUcsS0FBRyxPQUFPLEtBQUcsWUFBVSxPQUFPLEtBQUcsWUFBVyxLQUFJLElBQUksS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRSxNQUFJLE1BQUksS0FBRyxFQUFFLEdBQUUsR0FBRTtRQUFDLEtBQUksSUFBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBRSxDQUFBLElBQUUsRUFBRSxHQUFFLEVBQUMsS0FBSSxFQUFFO0lBQVU7SUFBRyxPQUFPO0FBQUM7QUFBRSxJQUFJLElBQUUsQ0FBQyxHQUFFLEdBQUUsSUFBSyxDQUFBLElBQUUsS0FBRyxPQUFLLEVBQUUsRUFBRSxNQUFJLENBQUMsR0FBRSxFQUFFLEtBQUcsQ0FBQyxLQUFHLENBQUMsRUFBRSxhQUFXLEVBQUUsR0FBRSxXQUFVO1FBQUMsT0FBTTtRQUFFLFlBQVcsQ0FBQztJQUFDLEtBQUcsR0FBRSxFQUFDO0FBQUcsSUFBSSxJQUFFLFdBQVcsU0FBUyxRQUFNLEVBQUU7QUFBQyxJQUFJLElBQUUsSUFBSSxXQUFXLFNBQVMsT0FBSyxDQUFDO0FBQUUsSUFBSSxJQUFFLElBQUksSUFBSSxJQUFHLElBQUUsQ0FBQSxJQUFHLEVBQUUsSUFBSSxJQUFHLEtBQUcsRUFBRSxPQUFPLENBQUEsSUFBRyxFQUFFLFdBQVcsU0FBTyxFQUFFLFNBQVMsTUFBTSxJQUFJLENBQUEsSUFBRyxFQUFFLE1BQU0sTUFBTSxPQUFPLENBQUMsR0FBRSxDQUFDLEdBQUUsRUFBRSxHQUFJLENBQUEsQ0FBQyxDQUFDLEVBQUUsR0FBQyxHQUFFLENBQUEsR0FBRyxDQUFDO0FBQUcsSUFBSSxLQUFHLEVBQUUsY0FBYSxJQUFFLElBQUksRUFBRSxnQkFBYyxJQUFJLFlBQVUsUUFBTyxLQUFHO0FBQUksSUFBSSxJQUFFLENBQUMsSUFBRSxFQUFFLEVBQUMsR0FBRyxJQUFJLFFBQVEsSUFBSSxFQUFFLE9BQU8sSUFBRyxRQUFPO0FBQUcsSUFBSSxJQUFFLENBQUMsR0FBRyxJQUFJLFFBQVEsTUFBTSxxQkFBa0IsT0FBTyxJQUFHLFFBQU8sSUFBRyxJQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsd0JBQW9CLElBQUcsSUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLHdCQUFvQixJQUFHLElBQUUsR0FBRSxJQUFFLENBQUMsR0FBRyxJQUFJLE9BQUssRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSTtBQUFHLElBQUksSUFBRTtJQUFDLG1CQUFrQjtJQUFNLGdCQUFlO0lBQU0sV0FBVTtJQUFNLFlBQVc7UUFBQztLQUFlO0lBQUMsUUFBTztJQUFZLFFBQU87SUFBSyxpQkFBZ0I7SUFBeUYsWUFBVztJQUFtQixXQUFVO0lBQW1CLFdBQVU7SUFBUSxVQUFTO0lBQU0sY0FBYTtBQUFJO0FBQUUsT0FBTyxPQUFPLGdCQUFjLEVBQUU7QUFBUyxXQUFXLFVBQVE7SUFBQyxNQUFLLEVBQUU7SUFBQyxLQUFJO1FBQUMsU0FBUSxFQUFFO0lBQU87QUFBQztBQUFFLElBQUksSUFBRSxPQUFPLE9BQU87QUFBTyxTQUFTLEVBQUUsQ0FBQztJQUFFLEVBQUUsS0FBSyxJQUFJLEVBQUMsSUFBRyxJQUFJLENBQUMsTUFBSTtRQUFDLE1BQUssT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFO1FBQUMsa0JBQWlCLEVBQUU7UUFBQyxtQkFBa0IsRUFBRTtRQUFDLFFBQU8sU0FBUyxDQUFDO1lBQUUsSUFBSSxDQUFDLGlCQUFpQixLQUFLLEtBQUcsWUFBVztRQUFFO1FBQUUsU0FBUSxTQUFTLENBQUM7WUFBRSxJQUFJLENBQUMsa0JBQWtCLEtBQUs7UUFBRTtJQUFDLEdBQUUsT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFLEdBQUMsS0FBSztBQUFDO0FBQUMsT0FBTyxPQUFPLFNBQU87QUFBRSxPQUFPLE9BQU8sVUFBUSxDQUFDO0FBQUUsSUFBSSxJQUFFLFdBQVcsV0FBUyxXQUFXLFVBQVE7QUFBSyxlQUFlLEVBQUUsSUFBRSxDQUFDLENBQUM7SUFBRSxJQUFHLENBQUEsRUFBRSwyQkFBMEIsRUFBRSxRQUFRLFlBQVk7UUFBQyx3QkFBdUIsQ0FBQztJQUFDLEVBQUMsSUFBRyxXQUFXLFVBQVU7QUFBVTtBQUFDLFNBQVM7SUFBSSxPQUFNLENBQUMsRUFBRSxRQUFNLEVBQUUsU0FBTyxZQUFVLFNBQVMsU0FBUyxRQUFRLFlBQVUsSUFBRSxTQUFTLFdBQVMsY0FBWSxFQUFFO0FBQUk7QUFBQyxTQUFTO0lBQUksT0FBTSxDQUFDLEVBQUUsUUFBTSxFQUFFLFNBQU8sWUFBVSxjQUFZLEVBQUU7QUFBSTtBQUFDLFNBQVM7SUFBSSxPQUFPLEVBQUUsUUFBTSxTQUFTO0FBQUk7QUFBQyxJQUFJLElBQUU7QUFBeUIsSUFBSSxJQUFFO0lBQUMsZUFBYyxDQUFDO0lBQUUsaUJBQWdCLEVBQUU7SUFBQyxnQkFBZSxFQUFFO0FBQUEsR0FBRSxJQUFFO0lBQUssRUFBRSxnQkFBYyxDQUFDLEdBQUUsRUFBRSxrQkFBZ0IsRUFBRSxFQUFDLEVBQUUsaUJBQWUsRUFBRTtBQUFBO0FBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLEVBQUU7SUFBQyxJQUFJLElBQUUsRUFBRSxFQUFDLEdBQUUsR0FBRTtJQUFFLElBQUksS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFBQVcsVUFBUSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxHQUFFLElBQUUsSUFBSSxHQUFFLElBQUUsSUFBSSxHQUFFLElBQUUsRUFBRSxFQUFDLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsT0FBTyxXQUFTLGFBQVcsSUFBSSxVQUFRLE1BQUssSUFBRSxDQUFDO1FBQUUsU0FBUyxFQUFFLENBQUM7WUFBRSxJQUFHLEVBQUUsWUFBVSxNQUFLLE9BQU8sRUFBRTtZQUFRLElBQUksSUFBRSxFQUFFLFFBQU87WUFBRSxJQUFHO2dCQUFDLElBQUUsRUFBRTtZQUFnQixFQUFDLE9BQU0sR0FBRTtnQkFBQyxPQUFPLEVBQUUsYUFBVyxDQUFDLEdBQUUsRUFBRSxVQUFRLEdBQUU7WUFBQztZQUFDLElBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSTtnQkFBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQUMsSUFBRyxPQUFPLEtBQUcsWUFBVyxPQUFPLEVBQUUsYUFBVyxDQUFDLEdBQUUsRUFBRSxVQUFRLEdBQUU7Z0JBQUUsSUFBSSxJQUFFLEVBQUUsSUFBSTtnQkFBRyxJQUFHLE1BQUksS0FBSyxHQUFFO29CQUFDLElBQUksSUFBRSxFQUFFO29CQUFHLEVBQUUsY0FBYSxDQUFBLEVBQUUsYUFBVyxDQUFDLENBQUEsR0FBRyxLQUFHLFlBQVU7Z0JBQUM7WUFBQztZQUFDLE9BQU8sRUFBRSxVQUFRLEdBQUU7UUFBQztRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxFQUFFLElBQUksSUFBRyxJQUFFLEVBQUUsSUFBSTtZQUFHLE9BQU8sTUFBSSxLQUFLLEtBQUcsTUFBSSxLQUFLLElBQUUsQ0FBQyxJQUFFLENBQUUsQ0FBQSxNQUFJLEtBQUssS0FBRyxNQUFJLEtBQUssS0FBRyxFQUFFLE9BQUssRUFBRSxNQUFJLEVBQUUsVUFBUztRQUFFO1FBQUMsU0FBUyxFQUFFLENBQUM7WUFBRSxPQUFPLEVBQUUsYUFBVyxFQUFFLFVBQVU7UUFBZ0I7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUM7WUFBRSxPQUFPLEVBQUUsTUFBSSxFQUFFLEtBQUcsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUU7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDO1lBQUUsT0FBTyxFQUFFLElBQUk7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDO1lBQUUsSUFBSSxJQUFFLElBQUk7WUFBSSxPQUFPLEVBQUUsUUFBUSxTQUFTLENBQUMsRUFBQyxDQUFDO2dCQUFFLEVBQUUsSUFBSSxHQUFFO1lBQUUsSUFBRztRQUFDO1FBQUMsU0FBUyxFQUFFLENBQUM7WUFBRSxJQUFJLElBQUUsSUFBSTtZQUFJLE9BQU8sRUFBRSxRQUFRLFNBQVMsQ0FBQztnQkFBRSxFQUFFLElBQUk7WUFBRSxJQUFHO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUM7WUFBRSxJQUFHO2dCQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUU7WUFBQSxFQUFDLE9BQU0sR0FBRTtnQkFBQztZQUFNO1FBQUM7UUFBQyxTQUFTO1lBQUksSUFBRyxFQUFFLFdBQVMsS0FBRyxHQUFFLE9BQU87WUFBSyxJQUFFLENBQUM7WUFBRSxJQUFHO2dCQUFDLElBQUksSUFBRSxJQUFJLEtBQUksSUFBRSxJQUFJLEtBQUksSUFBRTtnQkFBRSxJQUFFLEVBQUUsRUFBQyxFQUFFLFFBQVEsU0FBUyxDQUFDO29CQUFFLElBQUksSUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLElBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxJQUFFLEVBQUU7b0JBQVEsRUFBRSxJQUFJLEdBQUUsSUFBRyxFQUFFLElBQUksR0FBRSxJQUFHLEVBQUUsVUFBUSxHQUFFLEVBQUUsR0FBRSxLQUFHLEVBQUUsSUFBSSxLQUFHLEVBQUUsSUFBSTtnQkFBRTtnQkFBRyxJQUFJLElBQUU7b0JBQUMsaUJBQWdCO29CQUFFLGVBQWM7Z0JBQUM7Z0JBQUUsRUFBRSxRQUFRLFNBQVMsQ0FBQztvQkFBRSxFQUFFLGtCQUFrQjtnQkFBRTtnQkFBRyxJQUFJLElBQUUsQ0FBQyxHQUFFLElBQUUsTUFBSyxJQUFFLEVBQUUsSUFBRyxJQUFFLEVBQUUsSUFBRyxJQUFFLEVBQUU7Z0JBQUcsSUFBRyxFQUFFLFFBQVEsU0FBUyxDQUFDO29CQUFFLElBQUksSUFBRSxFQUFFLElBQUk7b0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtvQkFBc0UsSUFBRyxFQUFFLElBQUksSUFBRyxNQUFJLFFBQU0sRUFBRSxJQUFJLElBQUc7d0JBQUMsSUFBSSxJQUFFLEVBQUUsSUFBSTt3QkFBRyxJQUFHOzRCQUFDLEVBQUUsYUFBYSxHQUFFO3dCQUFFLEVBQUMsT0FBTSxHQUFFOzRCQUFDLEtBQUksQ0FBQSxJQUFFLENBQUMsR0FBRSxJQUFFLENBQUE7d0JBQUU7b0JBQUM7Z0JBQUMsSUFBRyxFQUFFLFFBQVEsU0FBUyxDQUFDO29CQUFFLElBQUksSUFBRSxFQUFFLElBQUk7b0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtvQkFBc0UsRUFBRSxJQUFJO29CQUFHLElBQUc7d0JBQUMsRUFBRSxnQkFBZ0IsR0FBRTtvQkFBRSxFQUFDLE9BQU0sR0FBRTt3QkFBQyxLQUFJLENBQUEsSUFBRSxDQUFDLEdBQUUsSUFBRSxDQUFBO29CQUFFO2dCQUFDLElBQUcsR0FBRSxNQUFNO2dCQUFFLE9BQU87WUFBQyxTQUFRO2dCQUFDLElBQUUsQ0FBQztZQUFDO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUM7WUFBRyxJQUFHLE1BQUksUUFBTSxPQUFPLEtBQUcsY0FBWSxPQUFPLEtBQUcsWUFBVSxFQUFFLElBQUksSUFBRztZQUFPLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxJQUFHLE1BQUksS0FBSyxJQUFHLENBQUEsSUFBRTtnQkFBQyxTQUFRO1lBQUMsR0FBRSxFQUFFLElBQUksR0FBRSxFQUFDLElBQUcsRUFBRSxLQUFLO2dCQUFDO2dCQUFFO2FBQUUsR0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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O0lBQ0Esb0JBQW9CO1FBQ2pCLENBQUEsR0FBRyxFQUFFLGlCQUFnQjtJQUN4QjtJQUNBLFlBQVksR0FBRyxFQUFDLENBQUU7UUFDaEIsS0FBSyxJQUFJLEtBQUksSUFBSSxDQUFDLDZCQUE2QixDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRTtJQUMzRTtBQUNGIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS1hZDRhM2VlNGI1YTlkNTY2LmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL2JyYXNzcmluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxicmFzc3JpbmcuanNcIixcImJ1bmRsZUlkXCI6XCJjZDM5MmU3ODA0NmFhMWUyXCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogamlVelRcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL2JyYXNzcmluZy5qc1xuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIC4vYW5zd2VyIC0+IExkeFZLICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2JyYXNzcmluZy9hbnN3ZXIuanNcclxuICogICAuL2NvdW50cnkgLT4gaHVVcDQgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvYnJhc3NyaW5nL2NvdW50cnkuanNcclxuICogICAuL29wZXJhdGlvbnMgLT4gOVpKYlUgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvYnJhc3NyaW5nL29wZXJhdGlvbnMuanNcclxuICogICAuL3J1bGVzIC0+IDc5WnBHICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2JyYXNzcmluZy9ydWxlcy5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgQHBsYXNtb2hxL21lc3NhZ2luZyAtPiA5Mkd5QiAgPT4gIEBwbGFzbW9ocS9tZXNzYWdpbmcuanNcclxuICogICBkYXlqcyAtPiBmbmhYcCAgPT4gIF90aWxkZV9ub2RlX21vZHVsZXMvZGF5anMuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXIgLT4gN1Q1ZVcgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9hbnN3ZXIuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb24gLT4gbHVKZnMgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb24uanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9kb20gLT4gaEE1UWEgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9kb20uanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9zZWN0aW9uLXJlc3VsdHMgLT4gNldXc0MgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9zZWN0aW9uLXJlc3VsdHMuanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvYmFzZS1maWxsZXIgLT4gOHhqNkYgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvYmFzZS1maWxsZXIuanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqL1xyXG5cclxudmFyIG4gPSBlKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtcclxubi5kZWZpbmVJbnRlcm9wRmxhZyhyKSwgbi5leHBvcnQociwgXCJCcmFzc3JpbmdcIiwgKCkgPT4gUik7XHJcbnZhciBvID0gZShcIn5jb250ZW50cy9tZXRob2RzL3NlY3Rpb24tcmVzdWx0c1wiKSxcclxuICBpID0gZShcImRheWpzXCIpLFxyXG4gIGEgPSBuLmludGVyb3BEZWZhdWx0KGkpLFxyXG4gIGwgPSBlKFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiKSxcclxuICBzID0gZShcIn5jb250ZW50cy9tZXRob2RzL2Fuc3dlclwiKSxcclxuICB1ID0gZShcIn5jb250ZW50cy9tZXRob2RzL2NhbmNlbGxhdGlvblwiKSxcclxuICBjID0gZShcIn5jb250ZW50cy9tZXRob2RzL2RvbVwiKSxcclxuICBkID0gZShcIn5jb250ZW50cy9zaXRlcy9iYXNlLWZpbGxlclwiKSxcclxuICBmID0gZShcIn5jb3JlL2VudW1zXCIpLFxyXG4gIHAgPSBlKFwiLi9hbnN3ZXJcIiksXHJcbiAgbSA9IGUoXCIuL2NvdW50cnlcIiksXHJcbiAgaCA9IGUoXCIuL29wZXJhdGlvbnNcIiksXHJcbiAgZyA9IGUoXCIuL3J1bGVzXCIpO1xyXG5cclxuZnVuY3Rpb24gYihlKSB7XHJcbiAgcmV0dXJuIGUucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpLnRvTG93ZXJDYXNlKClcclxufVxyXG5cclxuZnVuY3Rpb24geShlKSB7XHJcbiAgbGV0IHQgPSBiKGUubGFiZWwpLFxyXG4gICAgciA9IHQucmVwbGFjZSgvW1xcL10rL2csIFwiIFwiKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKTtcclxuICByZXR1cm4gL15jb3VudHJ5KD86XFwvcmVnaW9uKT8kLy50ZXN0KHQpIHx8IFwiY291bnRyeSByZWdpb25cIiA9PT0gciA/IDAgOiBbXCJzdGF0ZVwiLCBcInByb3ZpbmNlXCIsXHJcbiAgICBcInN0YXRlIHByb3ZpbmNlXCIsIFwic3RhdGUgcmVnaW9uIHByb3ZpbmNlXCIsIFwic3RhdGUgcmVnaW9uIHByb3ZpbmNlIGNvdW50eVwiLCBcImN1cnJlbnQgc3RhdGVcIixcclxuICAgIFwiY3VycmVudCBwcm92aW5jZVwiLCBcImN1cnJlbnQgc3RhdGUgcHJvdmluY2VcIlxyXG4gIF0uaW5jbHVkZXMocikgPyAyIDogMVxyXG59XHJcblxyXG5mdW5jdGlvbiB2KGUpIHtcclxuICBsZXQgdCA9IGIoZS5sYWJlbCk7XHJcbiAgaWYgKCEvXmNvdW50cnkoPzpcXHMqXFwvXFxzKnxcXHMrKXJlZ2lvbiQvLnRlc3QodCkgfHwgZS50eXBlICE9PSBmLkZJRUxEX1RZUEUuU0VBUkNIKSByZXR1cm4gITE7XHJcbiAgbGV0IHIgPSBlLiRpbnB1dCxcclxuICAgIG4gPSBbcj8uaWQsIHI/LmdldEF0dHJpYnV0ZShcIm5hbWVcIikgfHwgXCJcIiwgcj8uZ2V0QXR0cmlidXRlKFwiZGJmaWVsZG5hbWVcIikgfHwgXCJcIl0uam9pbihcIiBcIilcclxuICAgIC50b0xvd2VyQ2FzZSgpO1xyXG4gIHJldHVybiAvKD86XnxcXHN8W18tXSlwcm9maWxlKD86XFxzfFtfLV18JCkvLnRlc3QobilcclxufVxyXG5cclxuZnVuY3Rpb24gdyhlKSB7XHJcbiAgbGV0IHQgPSBbXSxcclxuICAgIHIgPSBbXTtcclxuICBmb3IgKGxldCBuIG9mIGUpIHYobikgPyB0LnB1c2gobikgOiByLnB1c2gobik7XHJcbiAgcmV0dXJuIHtcclxuICAgIGdlb2dyYXBoaWNDb3VudHJ5UnVsZXM6IHQsXHJcbiAgICByZWd1bGFyUnVsZXM6IHJcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFMoZSkge1xyXG4gIHJldHVybiBlLmZpbHRlcihlID0+IDIgPT09IHkoZSkpLm1hcChlID0+ICh7XHJcbiAgICBsYWJlbDogZS5sYWJlbCxcclxuICAgIHR5cGU6IGUudHlwZSxcclxuICAgIG9wdGlvbkNvdW50OiBBcnJheS5pc0FycmF5KGUub3B0aW9ucykgPyBlLm9wdGlvbnMubGVuZ3RoIDogMFxyXG4gIH0pKVxyXG59XHJcblxyXG5mdW5jdGlvbiBFKGUpIHtcclxuICByZXR1cm4gZS5tYXAoKGUsIHQpID0+ICh7XHJcbiAgICBydWxlOiBlLFxyXG4gICAgaW5kZXg6IHRcclxuICB9KSkuc29ydCgoZSwgdCkgPT4ge1xyXG4gICAgbGV0IHIgPSB5KGUucnVsZSkgLSB5KHQucnVsZSk7XHJcbiAgICByZXR1cm4gciB8fCBlLmluZGV4IC0gdC5pbmRleFxyXG4gIH0pLm1hcCgoe1xyXG4gICAgcnVsZTogZVxyXG4gIH0pID0+IGUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHgoZSkge1xyXG4gIGxldCB0ID0gQXJyYXkuaXNBcnJheShlKSA/IGUuZmluZChCb29sZWFuKSA6IGU7XHJcbiAgcmV0dXJuIFN0cmluZyh0ID8/IFwiXCIpLnRyaW0oKVxyXG59XHJcblxyXG5mdW5jdGlvbiBDKGUpIHtcclxuICBsZXQgdCA9IGU/LnJlZ3VsYXIgfHwge30sXHJcbiAgICByID0gT2JqZWN0LmVudHJpZXModCkuZmluZCgoW2VdKSA9PiAvXmNvdW50cnkoPzpcXC9yZWdpb24pPyQvaS50ZXN0KGUucmVwbGFjZSgvXFxzKy9nLCBcIiBcIilcclxuICAgIC50cmltKCkpKTtcclxuICByZXR1cm4geChyPy5bMV0pIHx8IHgodFtcIkNvdW50cnkvUmVnaW9uXCJdKSB8fCB4KGU/LmNvdW50cnkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEEoZSkge1xyXG4gIGxldCB0ID0gU3RyaW5nKGUuZGVzY3JpcHRpb24gfHwgXCJcIik7XHJcbiAgcmV0dXJuIGUudHlwZSA9PT0gZi5GSUVMRF9UWVBFLkRBVEUgJiYgL15kYXRlJC9pLnRlc3QoZS5sYWJlbC50cmltKCkpICYmXHJcbiAgICAvVm9sdW50YXJ5IFNlbGYtSWRlbnRpZmljYXRpb24gb2YgRGlzYWJpbGl0eS9pLnRlc3QodCkgJiYgL3NpZ25hdHVyZSBkYXRlL2kudGVzdCh0KSAmJiAvdG9kYXkvaVxyXG4gICAgLnRlc3QodClcclxufVxyXG5cclxuZnVuY3Rpb24gayhlLCB0KSB7XHJcbiAgbGV0IHIgPSBDKHQpLFxyXG4gICAgbiA9IE9iamVjdC5rZXlzKGUpLmZpbmQoZSA9PiAvXmNvdW50cnkoPzpcXC9yZWdpb24pPyQvaS50ZXN0KGUucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpKSk7XHJcbiAgcmV0dXJuIHIgJiYgbiAmJiAoZVtuXSA9IHIpLCBlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFQoZSkge1xyXG4gIHJldHVybiBTdHJpbmcoZSA/PyBcIlwiKS5yZXBsYWNlKC9cXCovZywgXCJcIikucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEYoZSkge1xyXG4gIGxldCB0ID0gZTtcclxuICBmb3IgKDsgdCAmJiB0ICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7KSB7XHJcbiAgICBsZXQgZSA9IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdyAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpIDpcclxuICAgICAgbnVsbCxcclxuICAgICAgciA9IFN0cmluZyh0LmNsYXNzTmFtZSB8fCBcIlwiKTtcclxuICAgIGlmICh0LmhpZGRlbiB8fCBcInRydWVcIiA9PT0gdC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKSB8fFxyXG4gICAgICAvXFxiKGhpZGRlbnxoaWRkZW5GaWVsZHxoaWRlfG5nLWhpZGUpXFxiLy50ZXN0KHIpIHx8IGU/LmRpc3BsYXkgPT09IFwibm9uZVwiIHx8IGU/LnZpc2liaWxpdHkgPT09XHJcbiAgICAgIFwiaGlkZGVuXCIgfHwgZT8udmlzaWJpbGl0eSA9PT0gXCJjb2xsYXBzZVwiKSByZXR1cm4gITE7XHJcbiAgICB0ID0gdC5wYXJlbnRFbGVtZW50XHJcbiAgfVxyXG4gIHJldHVybiAhMFxyXG59XHJcblxyXG5mdW5jdGlvbiBJKCkge1xyXG4gIGxldCBlID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpZWxkY29udGFpblwiKSkuZmlsdGVyKEYpLm1hcChlID0+IFQoZVxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbC5MaXN0VmlldywgbGFiZWxbaWQkPSctbGFiZWwnXSwgbGFiZWxcIik/LnRleHRDb250ZW50KSkuZmlsdGVyKGUgPT4gZSAmJiAhXHJcbiAgICAvXih5ZXN8bm8pJC9pLnRlc3QoZSkpO1xyXG4gIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoZSkpLnNsaWNlKDAsIDQwKVxyXG59XHJcblxyXG5mdW5jdGlvbiBqKCkge1xyXG4gIHJldHVybiBPYmplY3QuZW50cmllcygoMCwgaC5nZXRVcGxvYWRTbmFwc2hvdFZhbHVlcykoKSkuZmlsdGVyKChbLCBlXSkgPT4gVChlKSkubWFwKChbZV0pID0+IGUpXHJcbiAgICAuc29ydCgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEQoKSB7XHJcbiAgbGV0IGUgPSBUKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQXBwbHlQYWdlSGVhZFwiKT8udGV4dENvbnRlbnQpLFxyXG4gICAgdCA9IFQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc0JhckNvbnRhaW5lclwiKT8udGV4dENvbnRlbnQpLFxyXG4gICAgciA9IEkoKSxcclxuICAgIG4gPSBqKCk7XHJcbiAgcmV0dXJuIGUgfHwgdCB8fCAwICE9PSByLmxlbmd0aCB8fCAwICE9PSBuLmxlbmd0aCA/IEpTT04uc3RyaW5naWZ5KHtcclxuICAgIGhlYWRpbmc6IGUsXHJcbiAgICBwcm9ncmVzczogdCxcclxuICAgIGxhYmVsczogcixcclxuICAgIHVwbG9hZEtleXM6IG5cclxuICB9KSA6IG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gUChlLCB0KSB7XHJcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHQgfHwge30pLnNvbWUoKFt0LCByXSkgPT4gISEoMCwgcy5pc01hdGNoZWQpKGUsIHQpICYmIChBcnJheS5pc0FycmF5KHIpID8gclxyXG4gICAgLmV2ZXJ5KGUgPT4gXCJcIiA9PT0gU3RyaW5nKGUgPz8gXCJcIikudHJpbSgpKSA6IFwiXCIgPT09IFN0cmluZyhyID8/IFwiXCIpLnRyaW0oKSkpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gXyhlLCB0KSB7XHJcbiAgZm9yIChsZXQgciBvZiBlKSB7XHJcbiAgICBpZiAoci50eXBlICE9PSBmLkZJRUxEX1RZUEUuVEVYVCB8fCAhL1xcYm90aGVyXFxiL2kudGVzdChyLmxhYmVsKSB8fCAhUChyLmxhYmVsLCB0KSkgY29udGludWU7XHJcbiAgICBsZXQgZSA9IHIuJGlucHV0O1xyXG4gICAgKGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50IHx8IGUgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50KSAmJiBhd2FpdCAoMCwgaFxyXG4gICAgICAuZmlsbElucHV0VGV4dEZpZWxkKShlLCBcIlwiKVxyXG4gIH1cclxufVxyXG5sZXQgTCA9IFwiQnJhc3NSaW5nIHJlc3VtZSBwYXJzaW5nIGRpZCBub3QgY29tcGxldGUuIFBsZWFzZSByZXRyeSBBdXRvZmlsbC5cIjtcclxuY2xhc3MgUiBleHRlbmRzIGQuQmFzZUZpbGxlciB7XHJcbiAgZ2V0RmllbGRIYW5kbGVycygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIFtmLkZJRUxEX1RZUEUuVEVYVF06IHtcclxuICAgICAgICBoYW5kbGVyOiAoZSwgdCkgPT4ge1xyXG4gICAgICAgICAgbGV0IHIgPSBBcnJheS5pc0FycmF5KHQpID8gdFswXSA6IHQ7XHJcbiAgICAgICAgICBpZiAobnVsbCAhPSByICYmIFwiXCIgIT09IHIpIHJldHVybiAoMCwgaC5maWxsSW5wdXRUZXh0RmllbGQpKGUuJGlucHV0LCBTdHJpbmcocikpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITBcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFtmLkZJRUxEX1RZUEUuREFURV06IHtcclxuICAgICAgICBoYW5kbGVyOiAoZSwgdCkgPT4ge1xyXG4gICAgICAgICAgbGV0IHIgPSBBcnJheS5pc0FycmF5KHQpID8gdFswXSA6IHQ7XHJcbiAgICAgICAgICBpZiAobnVsbCAhPSByICYmIFwiXCIgIT09IHIpIHJldHVybiAoMCwgaC5maWxsSW5wdXRUZXh0RmllbGQpKGUuJGlucHV0LCBTdHJpbmcocikpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITBcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFtmLkZJRUxEX1RZUEUuU0VMRUNUXToge1xyXG4gICAgICAgIGhhbmRsZXI6IChlLCB0KSA9PiAoMCwgaC5maWxsU2VsZWN0RmllbGQpKGUsIHQpLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGV4cGVjdEFycmF5OiAhMFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgW2YuRklFTERfVFlQRS5TRUFSQ0hdOiB7XHJcbiAgICAgICAgaGFuZGxlcjogKGUsIHQpID0+ICgwLCBoLmZpbGxTZWFyY2hGaWVsZCkoZSwgdCksXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgZXhwZWN0QXJyYXk6ICEwXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBbZi5GSUVMRF9UWVBFLk1VTFRJX1NFTEVDVF06IHtcclxuICAgICAgICBoYW5kbGVyOiAoZSwgdCkgPT4gKDAsIGguZmlsbE11bHRpc2VsZWN0RmllbGQpKGUsIHQpLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGV4cGVjdEFycmF5OiAhMFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgW2YuRklFTERfVFlQRS5DSEVDS0JPWF06IHtcclxuICAgICAgICBoYW5kbGVyOiAoZSwgdCkgPT4gKDAsIGguZmlsbENoZWNrYm94RmllbGQpKGUsIHQpLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGV4cGVjdEFycmF5OiAhMFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgW2YuRklFTERfVFlQRS5SQURJT0dST1VQXToge1xyXG4gICAgICAgIGhhbmRsZXI6IChlLCB0KSA9PiAoMCwgaC5maWxsUmFkaW9Hcm91cEZpZWxkKShlLCB0KSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgcnVuUHJlRmlsbEZvcm0oKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRSdW5Db3VudHJ5Q29tbWl0dGVkID0gITEsIGNvbnNvbGUuaW5mbyhcclxuICAgICAgYFtCcmFzc1JpbmdBdXRvZmlsbF0gZmlsbC1zdGFnZSAke0pTT04uc3RyaW5naWZ5KHtzdGFnZTpcInByZWZpbGwtc3RhcnRcIn0pfWApLCBhd2FpdCAoMCxcclxuICAgICAgaC5wcmVGaWxsRm9ybSkoKSwgY29uc29sZS5pbmZvKFxyXG4gICAgICBgW0JyYXNzUmluZ0F1dG9maWxsXSBmaWxsLXN0YWdlICR7SlNPTi5zdHJpbmdpZnkoe3N0YWdlOlwicHJlZmlsbC1jb21wbGV0ZVwifSl9YClcclxuICB9XHJcbiAgYXN5bmMgcHJlRmlsbENvdW50cnlBbmRSZWZyZXNoU3RhdGVSdWxlcyhlKSB7XHJcbiAgICBsZXQge1xyXG4gICAgICBnZW9ncmFwaGljQ291bnRyeVJ1bGVzOiB0XHJcbiAgICB9ID0gdyhlKSwgciA9IGF3YWl0ICgwLCBtLnJ1bkJyYXNzcmluZ0NvdW50cnlQcmVmaWxsKSh7XHJcbiAgICAgIGZldGNoQXV0b2ZpbGxJbmZvOiAoKSA9PiAoMCwgbC5zZW5kVG9CYWNrZ3JvdW5kKSh7XHJcbiAgICAgICAgbmFtZTogXCJnZXRBdXRvZmlsbEluZm9cIixcclxuICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICBmb3JjZVJlZnJlc2g6ICEwXHJcbiAgICAgICAgfVxyXG4gICAgICB9KS5jYXRjaCgoKSA9PiBudWxsKSxcclxuICAgICAgZmlsbENvdW50cnk6IGFzeW5jIGUgPT4ge1xyXG4gICAgICAgIGlmICgxICE9PSB0Lmxlbmd0aCkgcmV0dXJuIGNvbnNvbGUuaW5mbyhcclxuICAgICAgICAgIGBbQnJhc3NSaW5nQXV0b2ZpbGxdIGNvdW50cnktcHJlZmlsbC1za2lwcGVkICR7SlNPTi5zdHJpbmdpZnkoe3JlYXNvbjpcImNvdW50cnktY29udHJvbC1ub3QtdW5pcXVlXCIsY29udHJvbENvdW50OnQubGVuZ3RofSl9YFxyXG4gICAgICAgICAgKSwgITE7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHJldHVybiBhd2FpdCAoMCwgaC5maWxsU2VhcmNoRmllbGQpKHRbMF0sIFtlXSksICEwXHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICByZXR1cm4gY29uc29sZS5pbmZvKFxyXG4gICAgICAgICAgICBgW0JyYXNzUmluZ0F1dG9maWxsXSBjb3VudHJ5LXByZWZpbGwtc2tpcHBlZCAke0pTT04uc3RyaW5naWZ5KHtyZWFzb246XCJjb3VudHJ5LWNvbW1pdC1yZWplY3RlZFwifSl9YFxyXG4gICAgICAgICAgICApLCAhMVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgd2FpdEZvckRlcGVuZGVudEZpZWxkczogYXN5bmMgKCkgPT4gITBcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFJ1bkNvdW50cnlDb21taXR0ZWQgPSByLmNvbW1pdHRlZCwgY29uc29sZS5pbmZvKFxyXG4gICAgICBgW0JyYXNzUmluZ0F1dG9maWxsXSBjb3VudHJ5LXByZWZpbGwtcmVzdWx0ICR7SlNPTi5zdHJpbmdpZnkoe2hhc0NvdW50cnk6ISFyLmNvdW50cnksY29tbWl0dGVkOnIuY29tbWl0dGVkLGRlcGVuZGVudFNldHRsZWQ6ci5kZXBlbmRlbnRTZXR0bGVkfSl9YFxyXG4gICAgICApLCByLmNvbW1pdHRlZCA/IGF3YWl0ICgwLCBnLmV4dHJhY3RSdWxlcykoKSA6IGVcclxuICB9XHJcbiAgYXN5bmMgZG9GaWxsRm9ybShlID0gITEpIHtcclxuICAgIGF3YWl0IHRoaXMuaW5pdGlhbGl6ZUZpbGxGb3JtKCk7XHJcbiAgICBsZXQgdCA9IGF3YWl0IHRoaXMuZXh0cmFjdEZvcm1SdWxlcygpO1xyXG4gICAgY29uc29sZS5pbmZvKFxyXG4gICAgICBgW0JyYXNzUmluZ0F1dG9maWxsXSBmaWxsLXN0YWdlICR7SlNPTi5zdHJpbmdpZnkoe3N0YWdlOlwiaW5pdGlhbC1ydWxlcy1leHRyYWN0ZWRcIixzdGF0ZVJ1bGVzOlModCl9KX1gXHJcbiAgICAgICk7XHJcbiAgICBsZXQgciA9IGF3YWl0IHRoaXMuaGFuZGxlUmVzdW1lVXBsb2FkKCk7XHJcbiAgICBpZiAocj8ubmV3VXBsb2FkICYmICh0ID0gYXdhaXQgdGhpcy5leHRyYWN0Rm9ybVJ1bGVzKCksIGNvbnNvbGUuaW5mbyhcclxuICAgICAgICBgW0JyYXNzUmluZ0F1dG9maWxsXSBmaWxsLXN0YWdlICR7SlNPTi5zdHJpbmdpZnkoe3N0YWdlOlwicG9zdC1wYXJzZXItcnVsZXMtZXh0cmFjdGVkXCIscGFyc2VyRGV0ZWN0ZWQ6ci5wYXJzZXJEZXRlY3RlZCxwYXJzZXJSZWFkeTpyLnBhcnNlclJlYWR5LHJ1bGVDb3VudDp0Lmxlbmd0aH0pfWBcclxuICAgICAgICApKSwgcj8ucGFyc2VyRGV0ZWN0ZWQgJiYgIXIucGFyc2VyUmVhZHkpIHJldHVybiBjb25zb2xlLmluZm8oXHJcbiAgICAgIGBbQnJhc3NSaW5nQXV0b2ZpbGxdIGZpbGwtc3RhZ2UgJHtKU09OLnN0cmluZ2lmeSh7c3RhZ2U6XCJyZXN1bWUtcGFyc2VyLWFib3J0XCIscGFyc2VyRGV0ZWN0ZWQ6ITAscGFyc2VyUmVhZHk6ITEscmVhc29uOlwicGFyc2VyLXRpbWVvdXRcIn0pfWBcclxuICAgICAgKSwgTDtcclxuICAgIHQgPSBhd2FpdCB0aGlzLnNlZWRFbXB0eUNvbXBvc2l0ZVJ1bGVzKHQpLCB0ID0gYXdhaXQgdGhpc1xyXG4gICAgICAucHJlRmlsbENvdW50cnlBbmRSZWZyZXNoU3RhdGVSdWxlcyh0KSwgY29uc29sZS5pbmZvKFxyXG4gICAgICAgIGBbQnJhc3NSaW5nQXV0b2ZpbGxdIGZpbGwtc3RhZ2UgJHtKU09OLnN0cmluZ2lmeSh7c3RhZ2U6XCJjb3VudHJ5LXByZWZpbGwtY29tcGxldGVcIixjb3VudHJ5Q29tbWl0dGVkOnRoaXMuY3VycmVudFJ1bkNvdW50cnlDb21taXR0ZWQsc3RhdGVSdWxlczpTKHQpfSl9YFxyXG4gICAgICAgICksIHQgPSB0aGlzLnByZXBhcmVDb3ZlckxldHRlclJ1bGVzKHQpO1xyXG4gICAgbGV0IHtcclxuICAgICAgZ2VvZ3JhcGhpY0NvdW50cnlSdWxlczogbixcclxuICAgICAgcmVndWxhclJ1bGVzOiBvXHJcbiAgICB9ID0gdyh0KTtcclxuICAgIGlmICh0aGlzLnByb2dyZXNzVHJhY2tlci5zZXRGaWVsZHNSZXF1aXJlZFN0YXR1cyh0KSwgcj8uaGFzU2VjdGlvbiAmJiAhci51cGxvYWRlZCAmJiAodGhpc1xyXG4gICAgICAgIC5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cyh7XHJcbiAgICAgICAgICBsYWJlbDogaC5CUkFTU1JJTkdfUkVTVU1FX0xBQkVMLFxyXG4gICAgICAgICAgcmVxdWlyZWQ6ICEwLFxyXG4gICAgICAgICAgdHlwZTogXCJmaWxlXCJcclxuICAgICAgICB9KSwgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoaC5CUkFTU1JJTkdfUkVTVU1FX0xBQkVMKSksIHRoaXNcclxuICAgICAgLmN1cnJlbnRSdW5Db3VudHJ5Q29tbWl0dGVkKVxyXG4gICAgICBmb3IgKGxldCBlIG9mIG4pIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKGUubGFiZWwpO1xyXG4gICAgY29uc29sZS5pbmZvKFxyXG4gICAgICBgW0JyYXNzUmluZ0F1dG9maWxsXSBmaWxsLXN0YWdlICR7SlNPTi5zdHJpbmdpZnkoe3N0YWdlOlwiZmlsbC12Mi1yZXF1ZXN0XCIsc3RhdGVSdWxlczpTKG8pfSl9YFxyXG4gICAgICApO1xyXG4gICAgbGV0IGkgPSBhd2FpdCB0aGlzLmZldGNoRm9ybUFuc3dlcnMobywgZSk7XHJcbiAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgaSkgcmV0dXJuIGk7XHJcbiAgICBhd2FpdCB0aGlzLmZpbGxSZWd1bGFyRmllbGRzKG8pLCBhd2FpdCB0aGlzLmZpbGxFZHVjYXRpb25BbmRFbXBsb3ltZW50KHQpLCBhd2FpdCB0aGlzXHJcbiAgICAgIC5maWxsQ292ZXJMZXR0ZXJGaWVsZHMoKTtcclxuICAgIGxldCBhID0gYXdhaXQgdGhpcy5ydW5Db21ib1F1ZXN0aW9uQXV0b2ZpbGxJZk5lZWRlZCh0LCBlKTtcclxuICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiBhID8gYSA6ICh0ID0gYSwgYXdhaXQgdGhpcy5leGVjdXRlU2l0ZVNwZWNpZmljU3RlcHModCksIGF3YWl0IHRoaXNcclxuICAgICAgLmZpbmFsaXplRmlsbEZvcm0oKSlcclxuICB9XHJcbiAgYXN5bmMgZXh0cmFjdEZvcm1SdWxlcygpIHtcclxuICAgIHJldHVybiBhd2FpdCAoMCwgZy5leHRyYWN0UnVsZXMpKClcclxuICB9XHJcbiAgYXN5bmMgc2VlZEVtcHR5Q29tcG9zaXRlUnVsZXMoZSkge1xyXG4gICAgbGV0IHQgPSBlLnNvbWUoZSA9PiBlLnR5cGUgPT09IGYuRklFTERfVFlQRS5FRFVDQVRJT04pLFxyXG4gICAgICByID0gZS5zb21lKGUgPT4gZS50eXBlID09PSBmLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVCk7XHJcbiAgICBpZiAodCAmJiByKSByZXR1cm4gZTtcclxuICAgIGxldCBuID0gYXdhaXQgKDAsIGwuc2VuZFRvQmFja2dyb3VuZCkoe1xyXG4gICAgICAgIG5hbWU6IFwiZ2V0QXV0b2ZpbGxJbmZvXCIsXHJcbiAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgZm9yY2VSZWZyZXNoOiAhMFxyXG4gICAgICAgIH1cclxuICAgICAgfSkuY2F0Y2goKCkgPT4gbnVsbCksXHJcbiAgICAgIG8gPSB0ID8gMCA6IEFycmF5LmlzQXJyYXkobj8uZWR1Y2F0aW9uKSA/IG4uZWR1Y2F0aW9uLmxlbmd0aCA6IDAsXHJcbiAgICAgIGkgPSByID8gMCA6IEFycmF5LmlzQXJyYXkobj8ud29ya0V4cGVyaWVuY2UpID8gbi53b3JrRXhwZXJpZW5jZS5sZW5ndGggOiAwO1xyXG4gICAgaWYgKDAgPT09IG8gJiYgMCA9PT0gaSkgcmV0dXJuIGU7XHJcbiAgICBsZXQgYSA9IGF3YWl0ICgwLCBoLndhaXRGb3JDb21wb3NpdGVTZWN0aW9uUm93cykoe1xyXG4gICAgICAgIGVkdWNhdGlvbkNvdW50OiBvLFxyXG4gICAgICAgIGVtcGxveW1lbnRDb3VudDogaVxyXG4gICAgICB9KSxcclxuICAgICAgcyA9IFsuLi5lXSxcclxuICAgICAgdSA9IGFzeW5jIChlLCB0LCByKSA9PiB7XHJcbiAgICAgICAgaWYgKDAgPT09IHQpIHJldHVybjtcclxuICAgICAgICBsZXQgbiA9IGF3YWl0ICgwLCBoLm9wZW5TZWN0aW9uRm9yRWRpdCkoZSwgMCksXHJcbiAgICAgICAgICBvID0gbiA/IHIoKSA6IG51bGw7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKFwiW0JyYXNzUmluZ0F1dG9maWxsXSBjb21wb3NpdGUtcnVsZS1wcmVwYXJlXCIsIHtcclxuICAgICAgICAgIGtpbmQ6IGUsXHJcbiAgICAgICAgICByb3dDb3VudDogdCxcclxuICAgICAgICAgIG9wZW5lZDogbixcclxuICAgICAgICAgIGNoaWxkQ291bnQ6IG8/LmNoaWxkcmVuPy5sZW5ndGggPz8gMFxyXG4gICAgICAgIH0pLCBvICYmIHMucHVzaChvKVxyXG4gICAgICB9O1xyXG4gICAgdCB8fCBhd2FpdCB1KFwiZWR1Y2F0aW9uXCIsIGEuZWR1Y2F0aW9uQ291bnQsICgpID0+ICgwLCBnLmdldEVkdWNhdGlvblJ1bGUpKDApKSwgciB8fCBhd2FpdCB1KFxyXG4gICAgICBcImV4cGVyaWVuY2VcIiwgYS5lbXBsb3ltZW50Q291bnQsICgpID0+ICgwLCBnLmdldEV4cGVyaWVuY2VSdWxlKSgwKSk7XHJcbiAgICBsZXQgYyA9IHMuc29tZShlID0+IGUudHlwZSA9PT0gZi5GSUVMRF9UWVBFLkVEVUNBVElPTiksXHJcbiAgICAgIGQgPSBzLnNvbWUoZSA9PiBlLnR5cGUgPT09IGYuRklFTERfVFlQRS5FTVBMT1lNRU5UKTtcclxuICAgIGlmIChjICYmIGQpIHJldHVybiBzO1xyXG4gICAgbGV0IHAgPSBhd2FpdCAoMCwgaC5zZWVkRW1wdHlDb21wb3NpdGVTZWN0aW9ucykoe1xyXG4gICAgICBlZHVjYXRpb25Db3VudDogYyA/IDAgOiBvLFxyXG4gICAgICBlbXBsb3ltZW50Q291bnQ6IGQgPyAwIDogaVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIXApIHJldHVybiBzO1xyXG4gICAgbGV0IG0gPSBhd2FpdCAoMCwgZy5leHRyYWN0UnVsZXMpKCk7XHJcbiAgICBmb3IgKGxldCBlIG9mIFtmLkZJRUxEX1RZUEUuRURVQ0FUSU9OLCBmLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVF0pIHtcclxuICAgICAgaWYgKHMuc29tZSh0ID0+IHQudHlwZSA9PT0gZSkpIGNvbnRpbnVlO1xyXG4gICAgICBsZXQgdCA9IG0uZmluZCh0ID0+IHQudHlwZSA9PT0gZSk7XHJcbiAgICAgIHQgJiYgcy5wdXNoKHQpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc1xyXG4gIH1cclxuICBnZXRTaXRlTmFtZSgpIHtcclxuICAgIHJldHVybiBcImJyYXNzcmluZ1wiXHJcbiAgfVxyXG4gIGFzeW5jIGZldGNoRm9ybUFuc3dlcnMoZSwgdCkge1xyXG4gICAgaWYgKDAgPT09IGUubGVuZ3RoKSB7XHJcbiAgICAgIGxldCBlID0gRGF0ZS5ub3coKTtcclxuICAgICAgdGhpcy50aW1lVHJhY2UucmVxdWVzdFN0YXJ0VGltZSA9IGUsIHRoaXMudGltZVRyYWNlLmZpbGxTdGFydFRpbWUgPSBlLCB0aGlzLmFuc3dlciA9IHtcclxuICAgICAgICBlZHVjYXRpb246IFtdLFxyXG4gICAgICAgIHdvcmtFeHBlcmllbmNlOiBbXSxcclxuICAgICAgICBza2lsbHM6IFtdLFxyXG4gICAgICAgIHJlZ3VsYXI6IHt9LFxyXG4gICAgICAgIGZpbGxEYXRhTGlzdDogW11cclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXdhaXQgc3VwZXIuZmV0Y2hGb3JtQW5zd2VycyhlLCB0KVxyXG4gIH1cclxuICBhc3luYyBmaWxsUmVndWxhckZpZWxkcyhlKSB7XHJcbiAgICBsZXQgdCA9IEUoZSksXHJcbiAgICAgIHIgPSB0LmZsYXRNYXAoZSA9PiBBKGUpID8gW2FzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCB0aGlzLm9wZXJhdGlvbkNvbmZpZ1tlLnR5cGVdPy4oZSwge1xyXG4gICAgICAgICAgW2UubGFiZWxdOiBhLmRlZmF1bHQoKS5mb3JtYXQoXCJNL0QvWVlZWVwiKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1dIDogKDAsIHMuZ2V0UmVndWxhck9wZXJhdGlvbnMpKFtlXSwgdGhpcy5hbnN3ZXIucmVndWxhciwgdGhpcy5vcGVyYXRpb25Db25maWcpKTtcclxuICAgIGZvciAobGV0IGUgb2YgcikgdGhpcy50YXNrUXVldWUuYWRkKGUpO1xyXG4gICAgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKCksIGF3YWl0IF8odCwgdGhpcy5hbnN3ZXIucmVndWxhcilcclxuICB9XHJcbiAgYXN5bmMgY2hlY2tDb3ZlckxldHRlcigpIHtcclxuICAgIHRoaXMuZW5zdXJlQ292ZXJMZXR0ZXJEZXRlY3Rpb25PYnNlcnZlcigpLCB0aGlzLnBvc3RDb3ZlckxldHRlckRldGVjdGlvblN0YXR1cygpXHJcbiAgfVxyXG4gIHBvc3RDb3ZlckxldHRlckRldGVjdGlvblN0YXR1cygpIHtcclxuICAgIGlmICghKDAsIGguaGFzQ292ZXJMZXR0ZXJVcGxvYWRTbG90KSgpKSB7XHJcbiAgICAgICgwLCBjLnBvc3RDb3ZlckxldHRlclN0YXR1cykoXCJcIik7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfSgwLCBjLnBvc3RDb3ZlckxldHRlclN0YXR1cykoKDAsIGguaXNDb3ZlckxldHRlclJlcXVpcmVkKSgpID8gXCJyZXF1aXJlZFwiIDogXCJvcHRpb25hbFwiKVxyXG4gIH1cclxuICByZWdpc3RlckNvdmVyTGV0dGVyUHJvZ3Jlc3MoKSB7XHJcbiAgICBpZiAoISgwLCBoLmhhc0NvdmVyTGV0dGVyVXBsb2FkU2xvdCkoKSkgcmV0dXJuIG51bGw7XHJcbiAgICBsZXQgZSA9ICgwLCBoLmlzQ292ZXJMZXR0ZXJSZXF1aXJlZCkoKTtcclxuICAgIHJldHVybiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWVsZFJlcXVpcmVkU3RhdHVzKHtcclxuICAgICAgbGFiZWw6IFwiQ292ZXIgTGV0dGVyXCIsXHJcbiAgICAgIHJlcXVpcmVkOiBlLFxyXG4gICAgICB0eXBlOiBcImZpbGVcIlxyXG4gICAgfSksIGVcclxuICB9XHJcbiAgZW5zdXJlQ292ZXJMZXR0ZXJEZXRlY3Rpb25PYnNlcnZlcigpIHtcclxuICAgICF0aGlzLmNvdmVyTGV0dGVyRGV0ZWN0aW9uT2JzZXJ2ZXIgJiYgZG9jdW1lbnQuYm9keSAmJiAodGhpcy5jb3ZlckxldHRlckRldGVjdGlvbk9ic2VydmVyID1cclxuICAgICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY292ZXJMZXR0ZXJEZXRlY3Rpb25UaW1lciAmJiBjbGVhclRpbWVvdXQodGhpcy5jb3ZlckxldHRlckRldGVjdGlvblRpbWVyKSwgdGhpc1xyXG4gICAgICAgICAgLmNvdmVyTGV0dGVyRGV0ZWN0aW9uVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wb3N0Q292ZXJMZXR0ZXJEZXRlY3Rpb25TdGF0dXMoKVxyXG4gICAgICAgICAgfSwgNTAwKVxyXG4gICAgICB9KSwgdGhpcy5jb3ZlckxldHRlckRldGVjdGlvbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwge1xyXG4gICAgICAgIGNoaWxkTGlzdDogITAsXHJcbiAgICAgICAgc3VidHJlZTogITAsXHJcbiAgICAgICAgYXR0cmlidXRlczogITAsXHJcbiAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBbXCJzdHlsZVwiLCBcImNsYXNzXCIsIFwiYXJpYS1oaWRkZW5cIl1cclxuICAgICAgfSkpXHJcbiAgfVxyXG4gIGFzeW5jIGhhbmRsZVJlc3VtZVVwbG9hZCgpIHtcclxuICAgIGxldCBlID0gKDAsIGguZ2V0UmVzdW1lVXBsb2FkU3RhdGUpKCk7XHJcbiAgICBpZiAoIWUuaGFzU2VjdGlvbikgcmV0dXJuIHtcclxuICAgICAgaGFzU2VjdGlvbjogITEsXHJcbiAgICAgIG5ld1VwbG9hZDogITEsXHJcbiAgICAgIHVwbG9hZGVkOiAhMSxcclxuICAgICAgcGFyc2VyRGV0ZWN0ZWQ6ICExLFxyXG4gICAgICBwYXJzZXJSZWFkeTogITBcclxuICAgIH07XHJcbiAgICBpZiAodGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cyh7XHJcbiAgICAgICAgbGFiZWw6IGguQlJBU1NSSU5HX1JFU1VNRV9MQUJFTCxcclxuICAgICAgICByZXF1aXJlZDogITAsXHJcbiAgICAgICAgdHlwZTogXCJmaWxlXCJcclxuICAgICAgfSksIHRoaXMuZGlzYWJsZVVwbG9hZFJlc3VtZSkgcmV0dXJuIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKGhcclxuICAgICAgLkJSQVNTUklOR19SRVNVTUVfTEFCRUwpLCB7XHJcbiAgICAgIGhhc1NlY3Rpb246ICEwLFxyXG4gICAgICBuZXdVcGxvYWQ6ICExLFxyXG4gICAgICB1cGxvYWRlZDogITEsXHJcbiAgICAgIHBhcnNlckRldGVjdGVkOiAhMSxcclxuICAgICAgcGFyc2VyUmVhZHk6ICEwXHJcbiAgICB9O1xyXG4gICAgaWYgKGUudXBsb2FkZWQpIHJldHVybiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhoXHJcbiAgICAuQlJBU1NSSU5HX1JFU1VNRV9MQUJFTCksIHtcclxuICAgICAgaGFzU2VjdGlvbjogITAsXHJcbiAgICAgIG5ld1VwbG9hZDogITEsXHJcbiAgICAgIHVwbG9hZGVkOiAhMCxcclxuICAgICAgcGFyc2VyRGV0ZWN0ZWQ6ICExLFxyXG4gICAgICBwYXJzZXJSZWFkeTogITBcclxuICAgIH07XHJcbiAgICBpZiAoIWUuY2FuVXBsb2FkKSByZXR1cm4gdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoaFxyXG4gICAgICAuQlJBU1NSSU5HX1JFU1VNRV9MQUJFTCksIHtcclxuICAgICAgICBoYXNTZWN0aW9uOiAhMCxcclxuICAgICAgICBuZXdVcGxvYWQ6ICExLFxyXG4gICAgICAgIHVwbG9hZGVkOiAhMSxcclxuICAgICAgICBwYXJzZXJEZXRlY3RlZDogITEsXHJcbiAgICAgICAgcGFyc2VyUmVhZHk6ICEwXHJcbiAgICAgIH07XHJcbiAgICBsZXQgdCA9IGF3YWl0ICgwLCBoLnVwbG9hZFJlc3VtZSkodGhpcy5yZXN1bWVJbmZvLCB0aGlzLnByb2dyZXNzVHJhY2tlclxyXG4gICAgICAudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cywgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MpO1xyXG4gICAgcmV0dXJuIHQudXBsb2FkZWQgfHwgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoaC5CUkFTU1JJTkdfUkVTVU1FX0xBQkVMKSwge1xyXG4gICAgICBoYXNTZWN0aW9uOiAhMCxcclxuICAgICAgbmV3VXBsb2FkOiB0LnVwbG9hZGVkLFxyXG4gICAgICAuLi50XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIGV4ZWN1dGVTaXRlU3BlY2lmaWNTdGVwcyhlKSB7XHJcbiAgICBsZXQgdCA9IHRoaXMucmVnaXN0ZXJDb3ZlckxldHRlclByb2dyZXNzKCksXHJcbiAgICAgIHIgPSBudWxsICE9IHQgJiYgKHRoaXMuY292ZXJMZXR0ZXI/LmNvdmVyTGV0dGVySWQgPyAhYXdhaXQgKDAsIGgudXBsb2FkQ292ZXJMZXR0ZXIpKHRoaXNcclxuICAgICAgICAuY292ZXJMZXR0ZXIsIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpZWxkUmVxdWlyZWRTdGF0dXMsIHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgICAgLnVwZGF0ZUZpbGxlZFByb2dyZXNzKSA6IHQpO1xyXG4gICAgciAmJiB0ICYmIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFwiQ292ZXIgTGV0dGVyXCIpLCBhd2FpdCBzdXBlclxyXG4gICAgICAuZXhlY3V0ZVNpdGVTcGVjaWZpY1N0ZXBzKGUpXHJcbiAgfVxyXG4gIGFzeW5jIGZpbGxFZHVjYXRpb25BbmRFbXBsb3ltZW50KCkge1xyXG4gICAgYXdhaXQgdGhpcy5maWxsQ29tcG9zaXRlU2VjdGlvbihcImVkdWNhdGlvblwiLCB0aGlzLmFuc3dlci5lZHVjYXRpb24gfHwgW10sIGdcclxuICAgICAgLmdldEVkdWNhdGlvblJ1bGUsIFwiRWR1Y2F0aW9uXCIpLCBhd2FpdCB0aGlzLmZpbGxDb21wb3NpdGVTZWN0aW9uKFwiZXhwZXJpZW5jZVwiLCB0aGlzXHJcbiAgICAgIC5hbnN3ZXIud29ya0V4cGVyaWVuY2UgfHwgW10sIGcuZ2V0RXhwZXJpZW5jZVJ1bGUsIFwiRW1wbG95bWVudFwiKVxyXG4gIH1cclxuICBhc3luYyBmaWxsQ29tcG9zaXRlU2VjdGlvbihlLCB0LCByLCBuKSB7XHJcbiAgICBsZXQgaSA9IHQubGVuZ3RoO1xyXG4gICAgaWYgKDAgPT09IGkpIHJldHVybjtcclxuICAgIGxldCBhID0gYXdhaXQgKDAsIGguZW5zdXJlU2VjdGlvbkNvdW50KShlLCBpKSxcclxuICAgICAgbCA9IDAgPT09IGEgPyB0aGlzLmNvdW50QXZhaWxhYmxlQ29tcG9zaXRlUnVsZXMociwgaSkgOiAwO1xyXG4gICAgaWYgKDAgPT09IGEgJiYgMCA9PT0gbCkgcmV0dXJuO1xyXG4gICAgbGV0IGMgPSBNYXRoLm1pbih0Lmxlbmd0aCwgYSB8fCBsKSxcclxuICAgICAgZCA9IDAgPT09IGEsXHJcbiAgICAgIGYgPSBkID8gQXJyYXkuZnJvbSh7XHJcbiAgICAgICAgbGVuZ3RoOiBjXHJcbiAgICAgIH0sIChlLCB0KSA9PiB0KSA6IEFycmF5LmZyb20oe1xyXG4gICAgICAgIGxlbmd0aDogY1xyXG4gICAgICB9LCAoZSwgdCkgPT4gYyAtIDEgLSB0KSxcclxuICAgICAgcCA9ICgwLCBvLmNyZWF0ZVNlcXVlbnRpYWxTZWN0aW9uUmVzdWx0UmVwb3J0ZXIpKFwiZWR1Y2F0aW9uXCIgPT09IGUgPyBcImVkdWNhdGlvblwiIDpcclxuICAgICAgICBcImVtcGxveW1lbnRcIiwgdGhpcy5wcm9ncmVzc1RyYWNrZXIsIG4pLFxyXG4gICAgICBtID0gITEsXHJcbiAgICAgIGcgPSAhMTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGZvciAobGV0IG8gb2YgZikge1xyXG4gICAgICAgIGQgfHwgYXdhaXQgKDAsIGgub3BlblNlY3Rpb25Gb3JFZGl0KShlLCBvKTtcclxuICAgICAgICBsZXQgaSA9IHIobyk7XHJcbiAgICAgICAgaWYgKCFpPy5jaGlsZHJlbj8ubGVuZ3RoKSBjb250aW51ZTtcclxuICAgICAgICBtIHx8ICh0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWVsZFJlcXVpcmVkU3RhdHVzKHtcclxuICAgICAgICAgIGxhYmVsOiBuLFxyXG4gICAgICAgICAgcmVxdWlyZWQ6ICEhaS5yZXF1aXJlZCxcclxuICAgICAgICAgIHR5cGU6IFwiZWR1Y2F0aW9uXCIgPT09IGUgPyBcImVkdWNhdGlvblwiIDogXCJlbXBsb3ltZW50XCJcclxuICAgICAgICB9KSwgbSA9ICEwKTtcclxuICAgICAgICBsZXQgYSA9IHtcclxuICAgICAgICAgICAgLi4ucC5mb3JSZWNvcmQobywgW2ldKSxcclxuICAgICAgICAgICAgb25Ta2lwcGVkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZyA9ICEwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBsID0gXCJlZHVjYXRpb25cIiA9PT0gZSA/ICgwLCBzLmdldEVkdWNhdGlvbk9wZXJhdGlvbnMpKFtpXSwgW3Rbb11dLCB0aGlzXHJcbiAgICAgICAgICAgIC5vcGVyYXRpb25Db25maWcsIHZvaWQgMCwgYSwge1xyXG4gICAgICAgICAgICAgIGtlZXBDdXJyZW50RmllbGRPbkV4aXQ6ICEwXHJcbiAgICAgICAgICAgIH0pIDogKDAsIHMuZ2V0RW1wbG95bWVudE9wZXJhdGlvbnMpKFtpXSwgW3Rbb11dLCB0aGlzLm9wZXJhdGlvbkNvbmZpZywgdm9pZCAwLCBhLCB7XHJcbiAgICAgICAgICAgIGtlZXBDdXJyZW50RmllbGRPbkV4aXQ6ICEwXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBmb3IgKGxldCBlIG9mIGwpIHRoaXMudGFza1F1ZXVlLmFkZChlKTtcclxuICAgICAgICBpZiAoYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKCksIGcpIGJyZWFrO1xyXG4gICAgICAgIGQgfHwgKGF3YWl0ICgwLCBoLnNhdmVTZWN0aW9uKShlLCBvKSwgcC5jbGVhclJlY29yZEZvY3VzKG8pKVxyXG4gICAgICB9XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICAoMCwgdS51cGRhdGVDdXJyZW50RmllbGQpKG51bGwpXHJcbiAgICB9XHJcbiAgICBpZiAoZykge1xyXG4gICAgICB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhuKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhuKVxyXG4gIH1cclxuICBjb3VudEF2YWlsYWJsZUNvbXBvc2l0ZVJ1bGVzKGUsIHQpIHtcclxuICAgIGxldCByID0gMDtcclxuICAgIGZvciAobGV0IG4gPSAwOyBuIDwgdDsgbisrKSB7XHJcbiAgICAgIGxldCB0ID0gZShuKTtcclxuICAgICAgaWYgKCF0Py5jaGlsZHJlbj8ubGVuZ3RoKSBicmVhaztcclxuICAgICAgciArPSAxXHJcbiAgICB9XHJcbiAgICByZXR1cm4gclxyXG4gIH1cclxuICBnZXRTdWJtaXRUcmFja2luZ0RlbGVnYXRpb25Sb290KCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50XHJcbiAgfVxyXG4gIGdldFN1Ym1pdFRyYWNraW5nU2NvcGVLZXkoKSB7XHJcbiAgICByZXR1cm4gRCgpXHJcbiAgfVxyXG4gIHJlc29sdmVEZWxlZ2F0ZWRTdWJtaXRCdXR0b24oZSkge1xyXG4gICAgbGV0IHQgPSBlLmNsb3Nlc3QoXCJidXR0b24sIGlucHV0W3R5cGU9J3N1Ym1pdCddLCBpbnB1dFt0eXBlPSdidXR0b24nXSwgYVwiKTtcclxuICAgIHJldHVybiB0ICYmIHRoaXMuaXNUcmFja2VkTmF2aWdhdGlvbkJ1dHRvbih0KSA/IHQgOiBudWxsXHJcbiAgfVxyXG4gIGlzVHJhY2tlZE5hdmlnYXRpb25CdXR0b24oZSkge1xyXG4gICAgaWYgKCF0aGlzLmlzVmlzaWJsZU5hdmlnYXRpb25CdXR0b24oZSkpIHJldHVybiAhMTtcclxuICAgIGxldCB0ID0gdGhpcy5nZXROYXZpZ2F0aW9uQnV0dG9uVGV4dChlKSxcclxuICAgICAgciA9IGUuaWQudG9Mb3dlckNhc2UoKSxcclxuICAgICAgbiA9IChlLmdldEF0dHJpYnV0ZShcIm5nLWNsaWNrXCIpIHx8IGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1uZy1jbGlja1wiKSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgcmV0dXJuICEoXCJzYXZlYXNkcmFmdFwiID09PSByIHx8IHQuaW5jbHVkZXMoXCJzYXZlIGFuZCBmaW5pc2ggbGF0ZXJcIikgfHwgdC5pbmNsdWRlcyhcclxuICAgICAgXCJmaW5pc2ggbGF0ZXJcIikgfHwgdC5pbmNsdWRlcyhcImRyYWZ0XCIpKSAmJiAoXCJzaG93bmV4dFwiID09PSByIHx8IFwic2hvd3N0YXJ0XCIgPT09IHIgfHwgblxyXG4gICAgICAuaW5jbHVkZXMoXCJnb25leHRcIikgfHwgbi5pbmNsdWRlcyhcImdvc3RhcnRcIikgfHwgbi5pbmNsdWRlcyhcInN1Ym1pdFwiKSB8fCB0LmluY2x1ZGVzKFxyXG4gICAgICAgIFwic2F2ZSBhbmQgY29udGludWVcIikgfHwgdC5pbmNsdWRlcyhcImxldCdzIGdldCBzdGFydGVkXCIpIHx8IHQuaW5jbHVkZXMoXCJzdWJtaXRcIikgfHxcclxuICAgICAgXCJuZXh0XCIgPT09IHQgfHwgXCJjb250aW51ZVwiID09PSB0IHx8IFwiYXBwbHlcIiA9PT0gdCB8fCBcInN1Ym1pdCBhcHBsaWNhdGlvblwiID09PSB0KVxyXG4gIH1cclxuICBpc1Zpc2libGVOYXZpZ2F0aW9uQnV0dG9uKGUpIHtcclxuICAgIGxldCB0ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZSk7XHJcbiAgICByZXR1cm4gXCJub25lXCIgIT09IHQuZGlzcGxheSAmJiBcImhpZGRlblwiICE9PSB0LnZpc2liaWxpdHkgJiYgXCJ0cnVlXCIgIT09IGUuZ2V0QXR0cmlidXRlKFxyXG4gICAgICBcImFyaWEtaGlkZGVuXCIpICYmICFlLmRpc2FibGVkXHJcbiAgfVxyXG4gIGdldE5hdmlnYXRpb25CdXR0b25UZXh0KGUpIHtcclxuICAgIHJldHVybiAoZS50ZXh0Q29udGVudCB8fCBlLnZhbHVlIHx8IGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSB8fCBcIlwiKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKVxyXG4gICAgICAudHJpbSgpLnRvTG93ZXJDYXNlKClcclxuICB9XHJcbiAgZ2V0U3VibWl0QnV0dG9uU2VsZWN0b3IoKSB7XHJcbiAgICByZXR1cm4gXCIvLypbc2VsZjo6YnV0dG9uIG9yIHNlbGY6OmlucHV0IG9yIHNlbGY6OmFdW2NvbnRhaW5zKHRyYW5zbGF0ZShub3JtYWxpemUtc3BhY2Uoc3RyaW5nKC4pKSwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJywgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JyksICdzdWJtaXQnKSBvciBjb250YWlucyh0cmFuc2xhdGUobm9ybWFsaXplLXNwYWNlKEB2YWx1ZSksICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWicsICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicpLCAnc3VibWl0Jykgb3IgY29udGFpbnModHJhbnNsYXRlKG5vcm1hbGl6ZS1zcGFjZShzdHJpbmcoLikpLCAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonLCAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonKSwgJ3NhdmUgYW5kIGNvbnRpbnVlJykgb3IgY29udGFpbnModHJhbnNsYXRlKG5vcm1hbGl6ZS1zcGFjZShAdmFsdWUpLCAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonLCAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonKSwgJ3NhdmUgYW5kIGNvbnRpbnVlJykgb3IgY29udGFpbnModHJhbnNsYXRlKG5vcm1hbGl6ZS1zcGFjZShzdHJpbmcoLikpLCAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonLCAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonKSwgXFxcImxldCdzIGdldCBzdGFydGVkXFxcIikgb3IgY29udGFpbnModHJhbnNsYXRlKG5vcm1hbGl6ZS1zcGFjZShAdmFsdWUpLCAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonLCAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonKSwgXFxcImxldCdzIGdldCBzdGFydGVkXFxcIikgb3IgdHJhbnNsYXRlKG5vcm1hbGl6ZS1zcGFjZShzdHJpbmcoLikpLCAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonLCAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonKSA9ICduZXh0JyBvciB0cmFuc2xhdGUobm9ybWFsaXplLXNwYWNlKEB2YWx1ZSksICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWicsICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicpID0gJ25leHQnIG9yIHRyYW5zbGF0ZShub3JtYWxpemUtc3BhY2Uoc3RyaW5nKC4pKSwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJywgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JykgPSAnY29udGludWUnIG9yIHRyYW5zbGF0ZShub3JtYWxpemUtc3BhY2UoQHZhbHVlKSwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJywgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JykgPSAnY29udGludWUnIG9yIHRyYW5zbGF0ZShub3JtYWxpemUtc3BhY2Uoc3RyaW5nKC4pKSwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJywgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JykgPSAnYXBwbHknIG9yIHRyYW5zbGF0ZShub3JtYWxpemUtc3BhY2UoQHZhbHVlKSwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJywgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JykgPSAnYXBwbHknIG9yIHRyYW5zbGF0ZShub3JtYWxpemUtc3BhY2Uoc3RyaW5nKC4pKSwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJywgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JykgPSAnc3VibWl0IGFwcGxpY2F0aW9uJyBvciB0cmFuc2xhdGUobm9ybWFsaXplLXNwYWNlKEB2YWx1ZSksICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWicsICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicpID0gJ3N1Ym1pdCBhcHBsaWNhdGlvbiddXCJcclxuICB9XHJcbiAgYXN5bmMgZ2V0QXV0b2ZpbGxTbmFwc2hvdCgpIHtcclxuICAgIHJldHVybiBrKHtcclxuICAgICAgLi4uYXdhaXQgKDAsIGcuZ2V0Rm9ybVNuYXBzaG90KSgpLFxyXG4gICAgICAuLi4oMCwgaC5nZXRVcGxvYWRTbmFwc2hvdFZhbHVlcykoKVxyXG4gICAgfSwgdGhpcy5hbnN3ZXIpXHJcbiAgfVxyXG4gIGFzeW5jIGdldFN1Ym1pdFNuYXBzaG90KCkge1xyXG4gICAgcmV0dXJuIGsoe1xyXG4gICAgICAuLi5hd2FpdCAoMCwgZy5nZXRGb3JtU25hcHNob3QpKCksXHJcbiAgICAgIC4uLigwLCBoLmdldFVwbG9hZFNuYXBzaG90VmFsdWVzKSgpXHJcbiAgICB9LCB0aGlzLmFuc3dlcilcclxuICB9XHJcbiAgc3VibWl0QXBwbGljYXRpb24oKSB7XHJcbiAgICAoMCwgaC5zdWJtaXRBcHBsaWNhdGlvbikoKVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvciguLi5lKSB7XHJcbiAgICBzdXBlciguLi5lKSwgdGhpcy5jdXJyZW50UnVuQ291bnRyeUNvbW1pdHRlZCA9ICExLCB0aGlzLmZvcm1hdEFuc3dlciA9IHAuZm9ybWF0QW5zd2VyXHJcbiAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhc3NyaW5nLjA0NmFhMWUyLmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);