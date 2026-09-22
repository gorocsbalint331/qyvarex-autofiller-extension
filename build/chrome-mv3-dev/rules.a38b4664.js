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
})({"6Objo":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\zohorecruit\\rules.js",
    "bundleId": "b11ba12ea38b4664",
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
var j = z(require("665a7361cdc3325f"));
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

},{"665a7361cdc3325f":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"iCdbD":[function(require,module,exports) {
/**
 * Parcel module id: 6kRQQ
 * Resolved path: src/contents/sites/zohorecruit/rules.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getRules", ()=>d), n.export(r, "appendZohoPhoneRulesForTests", ()=>p), n.export(r, "getEduRules", ()=>g), n.export(r, "getExpRules", ()=>b), n.export(r, "getAdditionalFormSnapshotData", ()=>v), n.export(r, "getFormSnapshot", ()=>w);
var o = e("~core/enums");
function i(e1, t) {
    let r1 = e1.querySelector("lyte-drop-button");
    r1 && (r1.dispatchEvent(new MouseEvent("mousedown", {
        bubbles: !0,
        cancelable: !0
    })), r1.dispatchEvent(new MouseEvent("mouseup", {
        bubbles: !0,
        cancelable: !0
    })), r1.dispatchEvent(new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0
    })));
    let n = [], o = document.querySelectorAll(`lyte-drop-item[data-zcqa*="${t}"]`);
    return o.forEach((e1)=>{
        let t = e1.textContent?.trim();
        t && "-None-" !== t && n.push(t);
    }), n;
}
function a(e1) {
    let t = Array.from(e1.querySelectorAll("input[type='text']")), r1 = t.find((e1)=>{
        let t = e1.closest("lyte-yield[style*='display: none'], .lyteDropdownHidden, .lyteSearchInput");
        if (t) return !1;
        let r1 = window.getComputedStyle(e1);
        return "none" !== r1.display && "hidden" !== r1.visibility;
    }) || null;
    return r1 || t[t.length - 1] || null;
}
function l(e1) {
    return e1?.$input instanceof HTMLElement ? e1.$input : Array.isArray(e1?.$input) && e1.$input[0] instanceof HTMLElement ? e1.$input[0] : Array.isArray(e1?.$checkboxs) && e1.$checkboxs[0] instanceof HTMLElement ? e1.$checkboxs[0] : null;
}
function s(e1) {
    return String(e1 || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}
function u(e1) {
    let t = s(`${e1?.label || ""} ${e1?.name || ""}`);
    return e1?.isPhone || t.includes("mobile") || t.includes("phone") ? "contact.mobile" : t.includes("email") ? "contact.email" : t.includes("zip/postal code") || t.includes("zip code") || t.includes("postal code") || t.includes("zip_code") || /\bzip\b/.test(t) ? "address.zip" : t.includes("state/province") || t.includes("state") || t.includes("province") || t.includes("etat") ? "address.state" : t.includes("city") || t.includes("ville") ? "address.city" : t.includes("country") || t.includes("pays") ? "address.country" : t.includes("street") ? "address.street" : "";
}
function c(e1) {
    let t = l(e1), r1 = t?.closest(".crc-form-row, .crc-form-tabularrow") || null, n = r1?.closest(".wbf-doublewrapper, .wdb-doublewrapper") || r1?.closest(".crc-form-sec") || r1 || t;
    return {
        ...e1,
        $fieldRow: r1,
        __zohoClusterRoot: n,
        __zohoSemanticType: u(e1)
    };
}
async function d() {
    let e1 = [], t = document.querySelectorAll(".crc-form-row");
    for (let r1 of t){
        let t = r1.querySelector("rec-tabular-component"), n = r1.querySelector("button.tabular-group-add");
        if (t && n) {
            r1.getAttribute("aria-label") || r1.querySelector(".cw-section-title")?.textContent?.trim();
            let t = "additional_info", n = r1.className.toLowerCase();
            if (n.includes("education")) {
                t = "education";
                let n = await m(r1, "Education");
                n && e1.push(...n);
            } else if (n.includes("experience")) {
                t = "workExperience";
                let n = await m(r1, "Experience");
                n && e1.push(...n);
            }
            continue;
        }
        if (r1.querySelector(".wbf-doublewrapper") || r1.querySelector(".wdb-doublewrapper") || r1.classList.contains("crc-form-sec")) continue;
        let l = r1.querySelector("label.crm-from-label");
        if (!l) continue;
        let s = l.textContent?.replace("*", "").trim() || "", u = !!r1.querySelector(".crc-form-mandatory");
        if (r1.querySelector("rec-captcha-component") || /captcha/i.test(s)) continue;
        let c = r1.querySelector(`crux-phone-component, crux-email-component, crux-text-component, 
       crux-number-component, crux-website-component, crux-picklist-component,
       crux-text-area-component, crux-radio-component, crux-inline-radio-component,
       rec-multi-radio-component, rec-multi-checkbox-component, rec-skills-component`), d = c?.getAttribute("cx-prop-label") || s, p = c?.getAttribute("cx-prop-zcqa") || "", h = Array.from(r1.querySelectorAll("input[type='radio']"));
        if (h.length > 0) {
            let t = Array.from(r1.querySelectorAll("lyte-radiobutton"));
            t.length > 0 && t.forEach((e1)=>{
                let t = e1.querySelector("input"), r1 = e1.getAttribute("lt-prop-label");
                t && r1 && t.setAttribute("data-label", r1);
            }), e1.push({
                type: o.FIELD_TYPE.RADIOGROUP,
                label: d,
                name: p,
                $input: c,
                $checkboxs: h,
                $label: l,
                required: u,
                options: t.length > 0 ? t.map((e1)=>e1.getAttribute("lt-prop-label")).filter(Boolean) : void 0
            });
            continue;
        }
        let g = Array.from(r1.querySelectorAll("input[type='checkbox']"));
        if (g.length > 0) {
            let t = Array.from(r1.querySelectorAll("lyte-checkbox"));
            t.length > 0 && t.forEach((e1)=>{
                let t = e1.querySelector("input"), r1 = e1.getAttribute("lt-prop-label");
                t && r1 && t.setAttribute("data-label", r1);
            }), e1.push({
                type: o.FIELD_TYPE.MULTI_SELECT,
                label: d,
                name: p,
                $input: c,
                $checkboxs: g,
                $label: l,
                required: u,
                options: t.length > 0 ? t.map((e1)=>e1.getAttribute("lt-prop-label")).filter(Boolean) : void 0
            });
            continue;
        }
        if (r1.querySelector(".cnl-firstname-row")) {
            let t = r1.querySelectorAll("crux-picklist-component, crux-text-component");
            t.forEach((t, r1)=>{
                let n = t.getAttribute("cx-prop-label") || s, a = t.getAttribute("cx-prop-zcqa") || "";
                if ("CRUX-PICKLIST-COMPONENT" === t.tagName) {
                    let r1 = t.querySelector("lyte-dropdown");
                    if (r1) {
                        let t = i(r1, n);
                        e1.push({
                            type: o.FIELD_TYPE.SELECT,
                            label: n,
                            name: a,
                            $input: r1,
                            $label: l,
                            required: !1,
                            options: t
                        });
                    }
                } else if ("CRUX-TEXT-COMPONENT" === t.tagName) {
                    let r1 = t.querySelector("lyte-input input");
                    r1 && e1.push({
                        type: o.FIELD_TYPE.TEXT,
                        label: n,
                        name: a,
                        $input: r1,
                        $label: l,
                        required: u
                    });
                }
            });
            continue;
        }
        let b = r1.querySelector("lyte-dropdown");
        if (b) {
            let t = r1.querySelector("crux-phone-component");
            if (t) {
                let t = r1.querySelector(".cxElementValue > lyte-input input") || r1.querySelector("lyte-input:not([is-search]) input");
                f(e1, b, t, l, d, p, u);
            } else {
                let t = a(b);
                if (t) {
                    e1.push({
                        type: o.FIELD_TYPE.TEXT,
                        label: d,
                        name: p,
                        $input: t,
                        $label: l,
                        required: u
                    });
                    continue;
                }
                let r1 = b.querySelector("lyte-drop-button");
                r1 && (r1.dispatchEvent(new MouseEvent("mousedown", {
                    bubbles: !0,
                    cancelable: !0
                })), r1.dispatchEvent(new MouseEvent("mouseup", {
                    bubbles: !0,
                    cancelable: !0
                })), r1.dispatchEvent(new MouseEvent("click", {
                    bubbles: !0,
                    cancelable: !0
                })));
                let n = i(b, d);
                e1.push({
                    type: o.FIELD_TYPE.SELECT,
                    label: d,
                    name: p,
                    $input: b,
                    $label: l,
                    required: u,
                    options: n.length > 0 ? n : void 0
                });
            }
            continue;
        }
        let y = r1.querySelector("textarea");
        if (y) {
            e1.push({
                type: o.FIELD_TYPE.TEXT,
                label: d,
                name: p,
                $input: y,
                $label: l,
                required: u
            });
            continue;
        }
        let v = r1.querySelector("rec-skills-component input.skillset-input, skills-tag #addSkills");
        if (v) {
            e1.push({
                label: d || "Skill Set",
                type: "SKILL_SET",
                $input: v,
                required: u || !!r1.querySelector(".crm-star"),
                name: v.getAttribute("name") || ""
            });
            continue;
        }
        let w = r1.querySelector("lyte-input input");
        if (w) {
            let t = w.getAttribute("placeholder");
            "MM/DD/YYYY" === t ? e1.push({
                type: o.FIELD_TYPE.DATE,
                label: d,
                name: p,
                $input: w,
                $label: l,
                required: u
            }) : e1.push({
                type: o.FIELD_TYPE.TEXT,
                label: d,
                name: p,
                $input: w,
                $label: l,
                required: u
            });
            continue;
        }
    }
    return e1.filter((e1)=>e1.$input || e1.type === o.FIELD_TYPE.SELECT).map((e1)=>c(e1));
}
function f(e1, t, r1, n, a, l, s) {
    e1.push({
        type: o.FIELD_TYPE.SELECT,
        label: "Phone Country Code",
        name: `${l || a}-phone-country-code`,
        $input: t,
        $label: n,
        required: s,
        options: i(t, "Phone Country Code")
    }), r1 && e1.push({
        type: o.FIELD_TYPE.TEXT,
        label: a,
        name: l,
        $input: r1,
        $countryCode: t,
        $label: n,
        isPhone: !0,
        required: s
    });
}
let p = f;
async function m(e1, t) {
    let r1 = [], n = Array.from(e1.querySelectorAll(".tabular-main-div"));
    if (0 === n.length) return null;
    for(let e1 = 0; e1 < n.length; e1++){
        let i = n[e1], a = i.querySelectorAll(".crc-form-tabularrow"), l = [];
        a.forEach((e1)=>{
            let t = e1.querySelector("label"), r1 = t?.textContent?.replace(/\s+/g, " ").trim() || "";
            if (r1.includes("Duration")) {
                let n = Array.from(e1.querySelectorAll("lyte-dropdown")), i = [
                    "Start Month",
                    "Start Year",
                    "End Month",
                    "End Year"
                ];
                n.forEach((e1, n)=>{
                    let a = i[n] || `Date Part ${n + 1}`;
                    l.push({
                        type: o.FIELD_TYPE.SELECT,
                        label: a,
                        name: e1.id || `${r1}_${n}`,
                        $input: e1,
                        $label: t,
                        required: !1
                    });
                });
            } else if (r1.includes("Currently")) {
                let n = e1.querySelector('input[type="checkbox"]');
                n && l.push({
                    type: o.FIELD_TYPE.CHECKBOX,
                    label: r1,
                    name: n.getAttribute("name") || r1,
                    $input: n,
                    $label: t,
                    required: !1,
                    options: [
                        "Yes"
                    ]
                });
            } else {
                let n = e1.querySelector("input, textarea, lyte-dropdown");
                r1 && n && l.push({
                    type: "LYTE-DROPDOWN" === n.tagName ? o.FIELD_TYPE.SELECT : o.FIELD_TYPE.TEXT,
                    label: r1,
                    name: n.getAttribute("name") || r1,
                    $input: n,
                    $label: t,
                    required: !1
                });
            }
        }), l.length > 0 && r1.push({
            type: "Education" === t ? o.FIELD_TYPE.EDUCATION : o.FIELD_TYPE.EMPLOYMENT,
            label: t.toLowerCase(),
            $input: i,
            $label: i,
            required: !1,
            children: l,
            options: l.map((e1)=>({
                    type: e1.type,
                    label: e1.label,
                    options: e1.options || []
                }))
        });
    }
    return r1.length > 0 ? r1 : null;
}
async function h(e1) {
    let t = await d();
    return t.filter((t)=>t.type === e1);
}
async function g() {
    return h(o.FIELD_TYPE.EDUCATION);
}
async function b() {
    return h(o.FIELD_TYPE.EMPLOYMENT);
}
function y(e1) {
    let t = {};
    return e1.children?.forEach((e1)=>{
        t[e1.label] = S(e1.$input, e1.type);
    }), t;
}
async function v(e1) {
    let t = {};
    for (let r1 of e1)(r1.type === o.FIELD_TYPE.EDUCATION || r1.type === o.FIELD_TYPE.EMPLOYMENT) && (t[r1.type] || (t[r1.type] = []), t[r1.type].push(y(r1)));
    return t;
}
async function w(e1) {
    let t = {};
    for (let r1 of e1){
        let e1 = r1.label;
        if (r1.type !== o.FIELD_TYPE.EDUCATION && r1.type !== o.FIELD_TYPE.EMPLOYMENT) {
            if ("SKILL_SET" === r1.type) {
                let r1 = Array.from(document.querySelectorAll(".skl-selected-skill li .skl-tag-name")).map((e1)=>e1.textContent?.trim());
                t[e1] = r1;
                continue;
            }
            if (r1.type === o.FIELD_TYPE.RADIOGROUP) {
                let n = r1.$checkboxs?.find((e1)=>e1.checked);
                t[e1] = n ? n.nextElementSibling?.textContent?.trim() || n.value : "";
                continue;
            }
            t[e1] = S(r1.$input, r1.type);
        }
    }
    return t;
}
function S(e1, t) {
    if (!e1) return "";
    if ("LYTE-DROPDOWN" === e1.tagName) {
        let t = e1.querySelector(".lyteMarginRight.lyteOption")?.textContent?.trim() || e1.querySelector(".lyteDropButton span")?.textContent?.trim();
        return "-None-" === t ? "" : t;
    }
    return t === o.FIELD_TYPE.CHECKBOX ? e1.checked : e1 instanceof HTMLInputElement || e1 instanceof HTMLTextAreaElement ? e1.value : e1.textContent?.trim() || "";
}
_c = S;
var _c;
$RefreshReg$(_c, "S");

},{}]},["6Objo","iCdbD"], "iCdbD", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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LEdBQUc7Z0JBQ1A7WUFDRjtZQUNBLElBQUksR0FBRSxTQUFTLEVBQUUsV0FBVyxZQUFZO2dCQUN0QyxJQUFJLElBQUksR0FBRSxZQUFZLEtBQUssQ0FBQSxLQUFLLEdBQUU7Z0JBQ2xDLENBQUMsQ0FBQyxHQUFFLEdBQUcsSUFBSSxFQUFFLG9CQUFvQixhQUFhLFVBQVUsRUFBRSxRQUFRO2dCQUNsRTtZQUNGO1lBQ0EsQ0FBQyxDQUFDLEdBQUUsR0FBRyxFQUFFLEdBQUUsUUFBUSxHQUFFO1FBQ3ZCO0lBQ0Y7SUFDQSxPQUFPO0FBQ1Q7QUFFQSxTQUFTLEVBQUUsRUFBQyxFQUFFLENBQUM7SUFDYixJQUFJLENBQUMsSUFBRyxPQUFPO0lBQ2YsSUFBSSxvQkFBb0IsR0FBRSxTQUFTO1FBQ2pDLElBQUksSUFBSSxHQUFFLGNBQWMsZ0NBQWdDLGFBQWEsVUFBVSxHQUFFLGNBQy9FLHlCQUF5QixhQUFhO1FBQ3hDLE9BQU8sYUFBYSxJQUFJLEtBQUs7SUFDL0I7SUFDQSxPQUFPLE1BQU0sRUFBRSxXQUFXLFdBQVcsR0FBRSxVQUFVLGNBQWEsb0JBQzVELGNBQWEsc0JBQXNCLEdBQUUsUUFBUSxHQUFFLGFBQWEsVUFBVTtBQUMxRTtLQVRTIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS1kYzNhYzA3MDU2MDZmOGY3LmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL3pvaG9yZWNydWl0L3J1bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBXPU9iamVjdC5jcmVhdGU7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBWPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcT0oZSx0LG8scik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG4gb2YgRyh0KSkhSi5jYWxsKGUsbikmJm4hPT1vJiZQKGUsbix7Z2V0OigpPT50W25dLGVudW1lcmFibGU6IShyPVYodCxuKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgej0oZSx0LG8pPT4obz1lIT1udWxsP1coWChlKSk6e30scSh0fHwhZXx8IWUuX19lc01vZHVsZT9QKG8sXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOm8sZSkpO3ZhciB5PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIEg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSz1uZXcgU2V0KHkpLEQ9ZT0+Sy5oYXMoZSksdWU9eS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBkZT1EKFwiLS1kcnktcnVuXCIpLF89KCk9PkQoXCItLXZlcmJvc2VcIil8fEgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsZmU9XygpO3ZhciB4PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBrPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksVD0oLi4uZSk9PngoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxBPSguLi5lKT0+eChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFE9MCxwPSguLi5lKT0+XygpJiZ4KGBcXHV7MUY3RTF9ICR7USsrfWAsLi4uZSk7dmFyIGM9e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wicGFnZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXHNpdGVzXFxcXHpvaG9yZWNydWl0XFxcXHJ1bGVzLmpzXCIsXCJidW5kbGVJZFwiOlwiYjExYmExMmVhMzhiNDY2NFwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IDZrUlFRXHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy96b2hvcmVjcnVpdC9ydWxlcy5qc1xuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgfmNvcmUvZW51bXMgLT4gMU8zbmMgID0+ICBzcmMvY29yZS9lbnVtcy5qc1xyXG4gKi9cclxuXHJcbnZhciBuID0gZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7XHJcbm4uZGVmaW5lSW50ZXJvcEZsYWcociksIG4uZXhwb3J0KHIsIFwiZ2V0UnVsZXNcIiwgKCkgPT4gZCksIG4uZXhwb3J0KHIsXHJcbiAgXCJhcHBlbmRab2hvUGhvbmVSdWxlc0ZvclRlc3RzXCIsICgpID0+IHApLCBuLmV4cG9ydChyLCBcImdldEVkdVJ1bGVzXCIsICgpID0+IGcpLCBuLmV4cG9ydChyLFxyXG4gIFwiZ2V0RXhwUnVsZXNcIiwgKCkgPT4gYiksIG4uZXhwb3J0KHIsIFwiZ2V0QWRkaXRpb25hbEZvcm1TbmFwc2hvdERhdGFcIiwgKCkgPT4gdiksIG4uZXhwb3J0KHIsXHJcbiAgXCJnZXRGb3JtU25hcHNob3RcIiwgKCkgPT4gdyk7XHJcbnZhciBvID0gZShcIn5jb3JlL2VudW1zXCIpO1xyXG5cclxuZnVuY3Rpb24gaShlLCB0KSB7XHJcbiAgbGV0IHIgPSBlLnF1ZXJ5U2VsZWN0b3IoXCJseXRlLWRyb3AtYnV0dG9uXCIpO1xyXG4gIHIgJiYgKHIuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlZG93blwiLCB7XHJcbiAgICBidWJibGVzOiAhMCxcclxuICAgIGNhbmNlbGFibGU6ICEwXHJcbiAgfSkpLCByLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZXVwXCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgY2FuY2VsYWJsZTogITBcclxuICB9KSksIHIuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgY2FuY2VsYWJsZTogITBcclxuICB9KSkpO1xyXG4gIGxldCBuID0gW10sXHJcbiAgICBvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgbHl0ZS1kcm9wLWl0ZW1bZGF0YS16Y3FhKj1cIiR7dH1cIl1gKTtcclxuICByZXR1cm4gby5mb3JFYWNoKGUgPT4ge1xyXG4gICAgbGV0IHQgPSBlLnRleHRDb250ZW50Py50cmltKCk7XHJcbiAgICB0ICYmIFwiLU5vbmUtXCIgIT09IHQgJiYgbi5wdXNoKHQpXHJcbiAgfSksIG5cclxufVxyXG5cclxuZnVuY3Rpb24gYShlKSB7XHJcbiAgbGV0IHQgPSBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9J3RleHQnXVwiKSksXHJcbiAgICByID0gdC5maW5kKGUgPT4ge1xyXG4gICAgICBsZXQgdCA9IGUuY2xvc2VzdChcclxuICAgICAgICBcImx5dGUteWllbGRbc3R5bGUqPSdkaXNwbGF5OiBub25lJ10sIC5seXRlRHJvcGRvd25IaWRkZW4sIC5seXRlU2VhcmNoSW5wdXRcIik7XHJcbiAgICAgIGlmICh0KSByZXR1cm4gITE7XHJcbiAgICAgIGxldCByID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZSk7XHJcbiAgICAgIHJldHVybiBcIm5vbmVcIiAhPT0gci5kaXNwbGF5ICYmIFwiaGlkZGVuXCIgIT09IHIudmlzaWJpbGl0eVxyXG4gICAgfSkgfHwgbnVsbDtcclxuICByZXR1cm4gciB8fCB0W3QubGVuZ3RoIC0gMV0gfHwgbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBsKGUpIHtcclxuICByZXR1cm4gZT8uJGlucHV0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBlLiRpbnB1dCA6IEFycmF5LmlzQXJyYXkoZT8uJGlucHV0KSAmJiBlLiRpbnB1dFtcclxuICAgIDBdIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBlLiRpbnB1dFswXSA6IEFycmF5LmlzQXJyYXkoZT8uJGNoZWNrYm94cykgJiYgZS4kY2hlY2tib3hzW1xyXG4gICAgMF0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IGUuJGNoZWNrYm94c1swXSA6IG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gcyhlKSB7XHJcbiAgcmV0dXJuIFN0cmluZyhlIHx8IFwiXCIpLm5vcm1hbGl6ZShcIk5GRFwiKS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCBcIlwiKS50b0xvd2VyQ2FzZSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHUoZSkge1xyXG4gIGxldCB0ID0gcyhgJHtlPy5sYWJlbHx8XCJcIn0gJHtlPy5uYW1lfHxcIlwifWApO1xyXG4gIHJldHVybiBlPy5pc1Bob25lIHx8IHQuaW5jbHVkZXMoXCJtb2JpbGVcIikgfHwgdC5pbmNsdWRlcyhcInBob25lXCIpID8gXCJjb250YWN0Lm1vYmlsZVwiIDogdC5pbmNsdWRlcyhcclxuICAgICAgXCJlbWFpbFwiKSA/IFwiY29udGFjdC5lbWFpbFwiIDogdC5pbmNsdWRlcyhcInppcC9wb3N0YWwgY29kZVwiKSB8fCB0LmluY2x1ZGVzKFwiemlwIGNvZGVcIikgfHwgdFxyXG4gICAgLmluY2x1ZGVzKFwicG9zdGFsIGNvZGVcIikgfHwgdC5pbmNsdWRlcyhcInppcF9jb2RlXCIpIHx8IC9cXGJ6aXBcXGIvLnRlc3QodCkgPyBcImFkZHJlc3MuemlwXCIgOiB0XHJcbiAgICAuaW5jbHVkZXMoXCJzdGF0ZS9wcm92aW5jZVwiKSB8fCB0LmluY2x1ZGVzKFwic3RhdGVcIikgfHwgdC5pbmNsdWRlcyhcInByb3ZpbmNlXCIpIHx8IHQuaW5jbHVkZXMoXHJcbiAgICAgIFwiZXRhdFwiKSA/IFwiYWRkcmVzcy5zdGF0ZVwiIDogdC5pbmNsdWRlcyhcImNpdHlcIikgfHwgdC5pbmNsdWRlcyhcInZpbGxlXCIpID8gXCJhZGRyZXNzLmNpdHlcIiA6IHRcclxuICAgIC5pbmNsdWRlcyhcImNvdW50cnlcIikgfHwgdC5pbmNsdWRlcyhcInBheXNcIikgPyBcImFkZHJlc3MuY291bnRyeVwiIDogdC5pbmNsdWRlcyhcInN0cmVldFwiKSA/XHJcbiAgICBcImFkZHJlc3Muc3RyZWV0XCIgOiBcIlwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGMoZSkge1xyXG4gIGxldCB0ID0gbChlKSxcclxuICAgIHIgPSB0Py5jbG9zZXN0KFwiLmNyYy1mb3JtLXJvdywgLmNyYy1mb3JtLXRhYnVsYXJyb3dcIikgfHwgbnVsbCxcclxuICAgIG4gPSByPy5jbG9zZXN0KFwiLndiZi1kb3VibGV3cmFwcGVyLCAud2RiLWRvdWJsZXdyYXBwZXJcIikgfHwgcj8uY2xvc2VzdChcIi5jcmMtZm9ybS1zZWNcIikgfHwgciB8fFxyXG4gICAgdDtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uZSxcclxuICAgICRmaWVsZFJvdzogcixcclxuICAgIF9fem9ob0NsdXN0ZXJSb290OiBuLFxyXG4gICAgX196b2hvU2VtYW50aWNUeXBlOiB1KGUpXHJcbiAgfVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGQoKSB7XHJcbiAgbGV0IGUgPSBbXSxcclxuICAgIHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNyYy1mb3JtLXJvd1wiKTtcclxuICBmb3IgKGxldCByIG9mIHQpIHtcclxuICAgIGxldCB0ID0gci5xdWVyeVNlbGVjdG9yKFwicmVjLXRhYnVsYXItY29tcG9uZW50XCIpLFxyXG4gICAgICBuID0gci5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLnRhYnVsYXItZ3JvdXAtYWRkXCIpO1xyXG4gICAgaWYgKHQgJiYgbikge1xyXG4gICAgICByLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIikgfHwgci5xdWVyeVNlbGVjdG9yKFwiLmN3LXNlY3Rpb24tdGl0bGVcIik/LnRleHRDb250ZW50Py50cmltKCk7XHJcbiAgICAgIGxldCB0ID0gXCJhZGRpdGlvbmFsX2luZm9cIixcclxuICAgICAgICBuID0gci5jbGFzc05hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgaWYgKG4uaW5jbHVkZXMoXCJlZHVjYXRpb25cIikpIHtcclxuICAgICAgICB0ID0gXCJlZHVjYXRpb25cIjtcclxuICAgICAgICBsZXQgbiA9IGF3YWl0IG0ociwgXCJFZHVjYXRpb25cIik7XHJcbiAgICAgICAgbiAmJiBlLnB1c2goLi4ubilcclxuICAgICAgfSBlbHNlIGlmIChuLmluY2x1ZGVzKFwiZXhwZXJpZW5jZVwiKSkge1xyXG4gICAgICAgIHQgPSBcIndvcmtFeHBlcmllbmNlXCI7XHJcbiAgICAgICAgbGV0IG4gPSBhd2FpdCBtKHIsIFwiRXhwZXJpZW5jZVwiKTtcclxuICAgICAgICBuICYmIGUucHVzaCguLi5uKVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnRpbnVlXHJcbiAgICB9XHJcbiAgICBpZiAoci5xdWVyeVNlbGVjdG9yKFwiLndiZi1kb3VibGV3cmFwcGVyXCIpIHx8IHIucXVlcnlTZWxlY3RvcihcIi53ZGItZG91Ymxld3JhcHBlclwiKSB8fCByXHJcbiAgICAgIC5jbGFzc0xpc3QuY29udGFpbnMoXCJjcmMtZm9ybS1zZWNcIikpIGNvbnRpbnVlO1xyXG4gICAgbGV0IGwgPSByLnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbC5jcm0tZnJvbS1sYWJlbFwiKTtcclxuICAgIGlmICghbCkgY29udGludWU7XHJcbiAgICBsZXQgcyA9IGwudGV4dENvbnRlbnQ/LnJlcGxhY2UoXCIqXCIsIFwiXCIpLnRyaW0oKSB8fCBcIlwiLFxyXG4gICAgICB1ID0gISFyLnF1ZXJ5U2VsZWN0b3IoXCIuY3JjLWZvcm0tbWFuZGF0b3J5XCIpO1xyXG4gICAgaWYgKHIucXVlcnlTZWxlY3RvcihcInJlYy1jYXB0Y2hhLWNvbXBvbmVudFwiKSB8fCAvY2FwdGNoYS9pLnRlc3QocykpIGNvbnRpbnVlO1xyXG4gICAgbGV0IGMgPSByLnF1ZXJ5U2VsZWN0b3IoYGNydXgtcGhvbmUtY29tcG9uZW50LCBjcnV4LWVtYWlsLWNvbXBvbmVudCwgY3J1eC10ZXh0LWNvbXBvbmVudCwgXHJcbiAgICAgICBjcnV4LW51bWJlci1jb21wb25lbnQsIGNydXgtd2Vic2l0ZS1jb21wb25lbnQsIGNydXgtcGlja2xpc3QtY29tcG9uZW50LFxyXG4gICAgICAgY3J1eC10ZXh0LWFyZWEtY29tcG9uZW50LCBjcnV4LXJhZGlvLWNvbXBvbmVudCwgY3J1eC1pbmxpbmUtcmFkaW8tY29tcG9uZW50LFxyXG4gICAgICAgcmVjLW11bHRpLXJhZGlvLWNvbXBvbmVudCwgcmVjLW11bHRpLWNoZWNrYm94LWNvbXBvbmVudCwgcmVjLXNraWxscy1jb21wb25lbnRgKSxcclxuICAgICAgZCA9IGM/LmdldEF0dHJpYnV0ZShcImN4LXByb3AtbGFiZWxcIikgfHwgcyxcclxuICAgICAgcCA9IGM/LmdldEF0dHJpYnV0ZShcImN4LXByb3AtemNxYVwiKSB8fCBcIlwiLFxyXG4gICAgICBoID0gQXJyYXkuZnJvbShyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPSdyYWRpbyddXCIpKTtcclxuICAgIGlmIChoLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHQgPSBBcnJheS5mcm9tKHIucXVlcnlTZWxlY3RvckFsbChcImx5dGUtcmFkaW9idXR0b25cIikpO1xyXG4gICAgICB0Lmxlbmd0aCA+IDAgJiYgdC5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgIGxldCB0ID0gZS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIiksXHJcbiAgICAgICAgICByID0gZS5nZXRBdHRyaWJ1dGUoXCJsdC1wcm9wLWxhYmVsXCIpO1xyXG4gICAgICAgIHQgJiYgciAmJiB0LnNldEF0dHJpYnV0ZShcImRhdGEtbGFiZWxcIiwgcilcclxuICAgICAgfSksIGUucHVzaCh7XHJcbiAgICAgICAgdHlwZTogby5GSUVMRF9UWVBFLlJBRElPR1JPVVAsXHJcbiAgICAgICAgbGFiZWw6IGQsXHJcbiAgICAgICAgbmFtZTogcCxcclxuICAgICAgICAkaW5wdXQ6IGMsXHJcbiAgICAgICAgJGNoZWNrYm94czogaCxcclxuICAgICAgICAkbGFiZWw6IGwsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHUsXHJcbiAgICAgICAgb3B0aW9uczogdC5sZW5ndGggPiAwID8gdC5tYXAoZSA9PiBlLmdldEF0dHJpYnV0ZShcImx0LXByb3AtbGFiZWxcIikpLmZpbHRlcihCb29sZWFuKSA6XHJcbiAgICAgICAgICB2b2lkIDBcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnRpbnVlXHJcbiAgICB9XHJcbiAgICBsZXQgZyA9IEFycmF5LmZyb20oci5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiKSk7XHJcbiAgICBpZiAoZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCB0ID0gQXJyYXkuZnJvbShyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJseXRlLWNoZWNrYm94XCIpKTtcclxuICAgICAgdC5sZW5ndGggPiAwICYmIHQuZm9yRWFjaChlID0+IHtcclxuICAgICAgICBsZXQgdCA9IGUucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLFxyXG4gICAgICAgICAgciA9IGUuZ2V0QXR0cmlidXRlKFwibHQtcHJvcC1sYWJlbFwiKTtcclxuICAgICAgICB0ICYmIHIgJiYgdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWxhYmVsXCIsIHIpXHJcbiAgICAgIH0pLCBlLnB1c2goe1xyXG4gICAgICAgIHR5cGU6IG8uRklFTERfVFlQRS5NVUxUSV9TRUxFQ1QsXHJcbiAgICAgICAgbGFiZWw6IGQsXHJcbiAgICAgICAgbmFtZTogcCxcclxuICAgICAgICAkaW5wdXQ6IGMsXHJcbiAgICAgICAgJGNoZWNrYm94czogZyxcclxuICAgICAgICAkbGFiZWw6IGwsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHUsXHJcbiAgICAgICAgb3B0aW9uczogdC5sZW5ndGggPiAwID8gdC5tYXAoZSA9PiBlLmdldEF0dHJpYnV0ZShcImx0LXByb3AtbGFiZWxcIikpLmZpbHRlcihCb29sZWFuKSA6XHJcbiAgICAgICAgICB2b2lkIDBcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnRpbnVlXHJcbiAgICB9XHJcbiAgICBpZiAoci5xdWVyeVNlbGVjdG9yKFwiLmNubC1maXJzdG5hbWUtcm93XCIpKSB7XHJcbiAgICAgIGxldCB0ID0gci5xdWVyeVNlbGVjdG9yQWxsKFwiY3J1eC1waWNrbGlzdC1jb21wb25lbnQsIGNydXgtdGV4dC1jb21wb25lbnRcIik7XHJcbiAgICAgIHQuZm9yRWFjaCgodCwgcikgPT4ge1xyXG4gICAgICAgIGxldCBuID0gdC5nZXRBdHRyaWJ1dGUoXCJjeC1wcm9wLWxhYmVsXCIpIHx8IHMsXHJcbiAgICAgICAgICBhID0gdC5nZXRBdHRyaWJ1dGUoXCJjeC1wcm9wLXpjcWFcIikgfHwgXCJcIjtcclxuICAgICAgICBpZiAoXCJDUlVYLVBJQ0tMSVNULUNPTVBPTkVOVFwiID09PSB0LnRhZ05hbWUpIHtcclxuICAgICAgICAgIGxldCByID0gdC5xdWVyeVNlbGVjdG9yKFwibHl0ZS1kcm9wZG93blwiKTtcclxuICAgICAgICAgIGlmIChyKSB7XHJcbiAgICAgICAgICAgIGxldCB0ID0gaShyLCBuKTtcclxuICAgICAgICAgICAgZS5wdXNoKHtcclxuICAgICAgICAgICAgICB0eXBlOiBvLkZJRUxEX1RZUEUuU0VMRUNULFxyXG4gICAgICAgICAgICAgIGxhYmVsOiBuLFxyXG4gICAgICAgICAgICAgIG5hbWU6IGEsXHJcbiAgICAgICAgICAgICAgJGlucHV0OiByLFxyXG4gICAgICAgICAgICAgICRsYWJlbDogbCxcclxuICAgICAgICAgICAgICByZXF1aXJlZDogITEsXHJcbiAgICAgICAgICAgICAgb3B0aW9uczogdFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoXCJDUlVYLVRFWFQtQ09NUE9ORU5UXCIgPT09IHQudGFnTmFtZSkge1xyXG4gICAgICAgICAgbGV0IHIgPSB0LnF1ZXJ5U2VsZWN0b3IoXCJseXRlLWlucHV0IGlucHV0XCIpO1xyXG4gICAgICAgICAgciAmJiBlLnB1c2goe1xyXG4gICAgICAgICAgICB0eXBlOiBvLkZJRUxEX1RZUEUuVEVYVCxcclxuICAgICAgICAgICAgbGFiZWw6IG4sXHJcbiAgICAgICAgICAgIG5hbWU6IGEsXHJcbiAgICAgICAgICAgICRpbnB1dDogcixcclxuICAgICAgICAgICAgJGxhYmVsOiBsLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogdVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb250aW51ZVxyXG4gICAgfVxyXG4gICAgbGV0IGIgPSByLnF1ZXJ5U2VsZWN0b3IoXCJseXRlLWRyb3Bkb3duXCIpO1xyXG4gICAgaWYgKGIpIHtcclxuICAgICAgbGV0IHQgPSByLnF1ZXJ5U2VsZWN0b3IoXCJjcnV4LXBob25lLWNvbXBvbmVudFwiKTtcclxuICAgICAgaWYgKHQpIHtcclxuICAgICAgICBsZXQgdCA9IHIucXVlcnlTZWxlY3RvcihcIi5jeEVsZW1lbnRWYWx1ZSA+IGx5dGUtaW5wdXQgaW5wdXRcIikgfHwgci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgXCJseXRlLWlucHV0Om5vdChbaXMtc2VhcmNoXSkgaW5wdXRcIik7XHJcbiAgICAgICAgZihlLCBiLCB0LCBsLCBkLCBwLCB1KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCB0ID0gYShiKTtcclxuICAgICAgICBpZiAodCkge1xyXG4gICAgICAgICAgZS5wdXNoKHtcclxuICAgICAgICAgICAgdHlwZTogby5GSUVMRF9UWVBFLlRFWFQsXHJcbiAgICAgICAgICAgIGxhYmVsOiBkLFxyXG4gICAgICAgICAgICBuYW1lOiBwLFxyXG4gICAgICAgICAgICAkaW5wdXQ6IHQsXHJcbiAgICAgICAgICAgICRsYWJlbDogbCxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHIgPSBiLnF1ZXJ5U2VsZWN0b3IoXCJseXRlLWRyb3AtYnV0dG9uXCIpO1xyXG4gICAgICAgIHIgJiYgKHIuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlZG93blwiLCB7XHJcbiAgICAgICAgICBidWJibGVzOiAhMCxcclxuICAgICAgICAgIGNhbmNlbGFibGU6ICEwXHJcbiAgICAgICAgfSkpLCByLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZXVwXCIsIHtcclxuICAgICAgICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgICAgICAgY2FuY2VsYWJsZTogITBcclxuICAgICAgICB9KSksIHIuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIsIHtcclxuICAgICAgICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgICAgICAgY2FuY2VsYWJsZTogITBcclxuICAgICAgICB9KSkpO1xyXG4gICAgICAgIGxldCBuID0gaShiLCBkKTtcclxuICAgICAgICBlLnB1c2goe1xyXG4gICAgICAgICAgdHlwZTogby5GSUVMRF9UWVBFLlNFTEVDVCxcclxuICAgICAgICAgIGxhYmVsOiBkLFxyXG4gICAgICAgICAgbmFtZTogcCxcclxuICAgICAgICAgICRpbnB1dDogYixcclxuICAgICAgICAgICRsYWJlbDogbCxcclxuICAgICAgICAgIHJlcXVpcmVkOiB1LFxyXG4gICAgICAgICAgb3B0aW9uczogbi5sZW5ndGggPiAwID8gbiA6IHZvaWQgMFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuICAgIGxldCB5ID0gci5xdWVyeVNlbGVjdG9yKFwidGV4dGFyZWFcIik7XHJcbiAgICBpZiAoeSkge1xyXG4gICAgICBlLnB1c2goe1xyXG4gICAgICAgIHR5cGU6IG8uRklFTERfVFlQRS5URVhULFxyXG4gICAgICAgIGxhYmVsOiBkLFxyXG4gICAgICAgIG5hbWU6IHAsXHJcbiAgICAgICAgJGlucHV0OiB5LFxyXG4gICAgICAgICRsYWJlbDogbCxcclxuICAgICAgICByZXF1aXJlZDogdVxyXG4gICAgICB9KTtcclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuICAgIGxldCB2ID0gci5xdWVyeVNlbGVjdG9yKFwicmVjLXNraWxscy1jb21wb25lbnQgaW5wdXQuc2tpbGxzZXQtaW5wdXQsIHNraWxscy10YWcgI2FkZFNraWxsc1wiKTtcclxuICAgIGlmICh2KSB7XHJcbiAgICAgIGUucHVzaCh7XHJcbiAgICAgICAgbGFiZWw6IGQgfHwgXCJTa2lsbCBTZXRcIixcclxuICAgICAgICB0eXBlOiBcIlNLSUxMX1NFVFwiLFxyXG4gICAgICAgICRpbnB1dDogdixcclxuICAgICAgICByZXF1aXJlZDogdSB8fCAhIXIucXVlcnlTZWxlY3RvcihcIi5jcm0tc3RhclwiKSxcclxuICAgICAgICBuYW1lOiB2LmdldEF0dHJpYnV0ZShcIm5hbWVcIikgfHwgXCJcIlxyXG4gICAgICB9KTtcclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuICAgIGxldCB3ID0gci5xdWVyeVNlbGVjdG9yKFwibHl0ZS1pbnB1dCBpbnB1dFwiKTtcclxuICAgIGlmICh3KSB7XHJcbiAgICAgIGxldCB0ID0gdy5nZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiKTtcclxuICAgICAgXCJNTS9ERC9ZWVlZXCIgPT09IHQgPyBlLnB1c2goe1xyXG4gICAgICAgIHR5cGU6IG8uRklFTERfVFlQRS5EQVRFLFxyXG4gICAgICAgIGxhYmVsOiBkLFxyXG4gICAgICAgIG5hbWU6IHAsXHJcbiAgICAgICAgJGlucHV0OiB3LFxyXG4gICAgICAgICRsYWJlbDogbCxcclxuICAgICAgICByZXF1aXJlZDogdVxyXG4gICAgICB9KSA6IGUucHVzaCh7XHJcbiAgICAgICAgdHlwZTogby5GSUVMRF9UWVBFLlRFWFQsXHJcbiAgICAgICAgbGFiZWw6IGQsXHJcbiAgICAgICAgbmFtZTogcCxcclxuICAgICAgICAkaW5wdXQ6IHcsXHJcbiAgICAgICAgJGxhYmVsOiBsLFxyXG4gICAgICAgIHJlcXVpcmVkOiB1XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb250aW51ZVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZS5maWx0ZXIoZSA9PiBlLiRpbnB1dCB8fCBlLnR5cGUgPT09IG8uRklFTERfVFlQRS5TRUxFQ1QpLm1hcChlID0+IGMoZSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGYoZSwgdCwgciwgbiwgYSwgbCwgcykge1xyXG4gIGUucHVzaCh7XHJcbiAgICB0eXBlOiBvLkZJRUxEX1RZUEUuU0VMRUNULFxyXG4gICAgbGFiZWw6IFwiUGhvbmUgQ291bnRyeSBDb2RlXCIsXHJcbiAgICBuYW1lOiBgJHtsfHxhfS1waG9uZS1jb3VudHJ5LWNvZGVgLFxyXG4gICAgJGlucHV0OiB0LFxyXG4gICAgJGxhYmVsOiBuLFxyXG4gICAgcmVxdWlyZWQ6IHMsXHJcbiAgICBvcHRpb25zOiBpKHQsIFwiUGhvbmUgQ291bnRyeSBDb2RlXCIpXHJcbiAgfSksIHIgJiYgZS5wdXNoKHtcclxuICAgIHR5cGU6IG8uRklFTERfVFlQRS5URVhULFxyXG4gICAgbGFiZWw6IGEsXHJcbiAgICBuYW1lOiBsLFxyXG4gICAgJGlucHV0OiByLFxyXG4gICAgJGNvdW50cnlDb2RlOiB0LFxyXG4gICAgJGxhYmVsOiBuLFxyXG4gICAgaXNQaG9uZTogITAsXHJcbiAgICByZXF1aXJlZDogc1xyXG4gIH0pXHJcbn1cclxubGV0IHAgPSBmO1xyXG5hc3luYyBmdW5jdGlvbiBtKGUsIHQpIHtcclxuICBsZXQgciA9IFtdLFxyXG4gICAgbiA9IEFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYnVsYXItbWFpbi1kaXZcIikpO1xyXG4gIGlmICgwID09PSBuLmxlbmd0aCkgcmV0dXJuIG51bGw7XHJcbiAgZm9yIChsZXQgZSA9IDA7IGUgPCBuLmxlbmd0aDsgZSsrKSB7XHJcbiAgICBsZXQgaSA9IG5bZV0sXHJcbiAgICAgIGEgPSBpLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3JjLWZvcm0tdGFidWxhcnJvd1wiKSxcclxuICAgICAgbCA9IFtdO1xyXG4gICAgYS5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICBsZXQgdCA9IGUucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpLFxyXG4gICAgICAgIHIgPSB0Py50ZXh0Q29udGVudD8ucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpIHx8IFwiXCI7XHJcbiAgICAgIGlmIChyLmluY2x1ZGVzKFwiRHVyYXRpb25cIikpIHtcclxuICAgICAgICBsZXQgbiA9IEFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwibHl0ZS1kcm9wZG93blwiKSksXHJcbiAgICAgICAgICBpID0gW1wiU3RhcnQgTW9udGhcIiwgXCJTdGFydCBZZWFyXCIsIFwiRW5kIE1vbnRoXCIsIFwiRW5kIFllYXJcIl07XHJcbiAgICAgICAgbi5mb3JFYWNoKChlLCBuKSA9PiB7XHJcbiAgICAgICAgICBsZXQgYSA9IGlbbl0gfHwgYERhdGUgUGFydCAke24rMX1gO1xyXG4gICAgICAgICAgbC5wdXNoKHtcclxuICAgICAgICAgICAgdHlwZTogby5GSUVMRF9UWVBFLlNFTEVDVCxcclxuICAgICAgICAgICAgbGFiZWw6IGEsXHJcbiAgICAgICAgICAgIG5hbWU6IGUuaWQgfHwgYCR7cn1fJHtufWAsXHJcbiAgICAgICAgICAgICRpbnB1dDogZSxcclxuICAgICAgICAgICAgJGxhYmVsOiB0LFxyXG4gICAgICAgICAgICByZXF1aXJlZDogITFcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIGlmIChyLmluY2x1ZGVzKFwiQ3VycmVudGx5XCIpKSB7XHJcbiAgICAgICAgbGV0IG4gPSBlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xyXG4gICAgICAgIG4gJiYgbC5wdXNoKHtcclxuICAgICAgICAgIHR5cGU6IG8uRklFTERfVFlQRS5DSEVDS0JPWCxcclxuICAgICAgICAgIGxhYmVsOiByLFxyXG4gICAgICAgICAgbmFtZTogbi5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpIHx8IHIsXHJcbiAgICAgICAgICAkaW5wdXQ6IG4sXHJcbiAgICAgICAgICAkbGFiZWw6IHQsXHJcbiAgICAgICAgICByZXF1aXJlZDogITEsXHJcbiAgICAgICAgICBvcHRpb25zOiBbXCJZZXNcIl1cclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBuID0gZS5xdWVyeVNlbGVjdG9yKFwiaW5wdXQsIHRleHRhcmVhLCBseXRlLWRyb3Bkb3duXCIpO1xyXG4gICAgICAgIHIgJiYgbiAmJiBsLnB1c2goe1xyXG4gICAgICAgICAgdHlwZTogXCJMWVRFLURST1BET1dOXCIgPT09IG4udGFnTmFtZSA/IG8uRklFTERfVFlQRS5TRUxFQ1QgOiBvLkZJRUxEX1RZUEUuVEVYVCxcclxuICAgICAgICAgIGxhYmVsOiByLFxyXG4gICAgICAgICAgbmFtZTogbi5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpIHx8IHIsXHJcbiAgICAgICAgICAkaW5wdXQ6IG4sXHJcbiAgICAgICAgICAkbGFiZWw6IHQsXHJcbiAgICAgICAgICByZXF1aXJlZDogITFcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KSwgbC5sZW5ndGggPiAwICYmIHIucHVzaCh7XHJcbiAgICAgIHR5cGU6IFwiRWR1Y2F0aW9uXCIgPT09IHQgPyBvLkZJRUxEX1RZUEUuRURVQ0FUSU9OIDogby5GSUVMRF9UWVBFLkVNUExPWU1FTlQsXHJcbiAgICAgIGxhYmVsOiB0LnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICRpbnB1dDogaSxcclxuICAgICAgJGxhYmVsOiBpLFxyXG4gICAgICByZXF1aXJlZDogITEsXHJcbiAgICAgIGNoaWxkcmVuOiBsLFxyXG4gICAgICBvcHRpb25zOiBsLm1hcChlID0+ICh7XHJcbiAgICAgICAgdHlwZTogZS50eXBlLFxyXG4gICAgICAgIGxhYmVsOiBlLmxhYmVsLFxyXG4gICAgICAgIG9wdGlvbnM6IGUub3B0aW9ucyB8fCBbXVxyXG4gICAgICB9KSlcclxuICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiByLmxlbmd0aCA+IDAgPyByIDogbnVsbFxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGgoZSkge1xyXG4gIGxldCB0ID0gYXdhaXQgZCgpO1xyXG4gIHJldHVybiB0LmZpbHRlcih0ID0+IHQudHlwZSA9PT0gZSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiBnKCkge1xyXG4gIHJldHVybiBoKG8uRklFTERfVFlQRS5FRFVDQVRJT04pXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gYigpIHtcclxuICByZXR1cm4gaChvLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVClcclxufVxyXG5cclxuZnVuY3Rpb24geShlKSB7XHJcbiAgbGV0IHQgPSB7fTtcclxuICByZXR1cm4gZS5jaGlsZHJlbj8uZm9yRWFjaChlID0+IHtcclxuICAgIHRbZS5sYWJlbF0gPSBTKGUuJGlucHV0LCBlLnR5cGUpXHJcbiAgfSksIHRcclxufVxyXG5hc3luYyBmdW5jdGlvbiB2KGUpIHtcclxuICBsZXQgdCA9IHt9O1xyXG4gIGZvciAobGV0IHIgb2YgZSkoci50eXBlID09PSBvLkZJRUxEX1RZUEUuRURVQ0FUSU9OIHx8IHIudHlwZSA9PT0gby5GSUVMRF9UWVBFLkVNUExPWU1FTlQpICYmICh0W1xyXG4gICAgci50eXBlXSB8fCAodFtyLnR5cGVdID0gW10pLCB0W3IudHlwZV0ucHVzaCh5KHIpKSk7XHJcbiAgcmV0dXJuIHRcclxufVxyXG5hc3luYyBmdW5jdGlvbiB3KGUpIHtcclxuICBsZXQgdCA9IHt9O1xyXG4gIGZvciAobGV0IHIgb2YgZSkge1xyXG4gICAgbGV0IGUgPSByLmxhYmVsO1xyXG4gICAgaWYgKHIudHlwZSAhPT0gby5GSUVMRF9UWVBFLkVEVUNBVElPTiAmJiByLnR5cGUgIT09IG8uRklFTERfVFlQRS5FTVBMT1lNRU5UKSB7XHJcbiAgICAgIGlmIChcIlNLSUxMX1NFVFwiID09PSByLnR5cGUpIHtcclxuICAgICAgICBsZXQgciA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5za2wtc2VsZWN0ZWQtc2tpbGwgbGkgLnNrbC10YWctbmFtZVwiKSkubWFwKFxyXG4gICAgICAgICAgZSA9PiBlLnRleHRDb250ZW50Py50cmltKCkpO1xyXG4gICAgICAgIHRbZV0gPSByO1xyXG4gICAgICAgIGNvbnRpbnVlXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHIudHlwZSA9PT0gby5GSUVMRF9UWVBFLlJBRElPR1JPVVApIHtcclxuICAgICAgICBsZXQgbiA9IHIuJGNoZWNrYm94cz8uZmluZChlID0+IGUuY2hlY2tlZCk7XHJcbiAgICAgICAgdFtlXSA9IG4gPyBuLm5leHRFbGVtZW50U2libGluZz8udGV4dENvbnRlbnQ/LnRyaW0oKSB8fCBuLnZhbHVlIDogXCJcIjtcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICB9XHJcbiAgICAgIHRbZV0gPSBTKHIuJGlucHV0LCByLnR5cGUpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFMoZSwgdCkge1xyXG4gIGlmICghZSkgcmV0dXJuIFwiXCI7XHJcbiAgaWYgKFwiTFlURS1EUk9QRE9XTlwiID09PSBlLnRhZ05hbWUpIHtcclxuICAgIGxldCB0ID0gZS5xdWVyeVNlbGVjdG9yKFwiLmx5dGVNYXJnaW5SaWdodC5seXRlT3B0aW9uXCIpPy50ZXh0Q29udGVudD8udHJpbSgpIHx8IGUucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIubHl0ZURyb3BCdXR0b24gc3BhblwiKT8udGV4dENvbnRlbnQ/LnRyaW0oKTtcclxuICAgIHJldHVybiBcIi1Ob25lLVwiID09PSB0ID8gXCJcIiA6IHRcclxuICB9XHJcbiAgcmV0dXJuIHQgPT09IG8uRklFTERfVFlQRS5DSEVDS0JPWCA/IGUuY2hlY2tlZCA6IGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50IHx8XHJcbiAgICBlIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCA/IGUudmFsdWUgOiBlLnRleHRDb250ZW50Py50cmltKCkgfHwgXCJcIlxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZXMuYTM4YjQ2NjQuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);