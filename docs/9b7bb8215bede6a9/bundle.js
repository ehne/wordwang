!(function () {
  var t,
    e = function (t) {
      var e;
      return function (n) {
        return e || t((e = { exports: {}, parent: n }), e.exports), e.exports;
      };
    },
    n = e(function (t, e) {
      "use strict";
      var n = /\n[\s]+$/,
        r = /^\n[\s]+/,
        o = /[\s]+$/,
        i = /^[\s]+/,
        s = /[\n\s]+/g,
        a = [
          "a",
          "abbr",
          "b",
          "bdi",
          "bdo",
          "br",
          "cite",
          "data",
          "dfn",
          "em",
          "i",
          "kbd",
          "mark",
          "q",
          "rp",
          "rt",
          "rtc",
          "ruby",
          "s",
          "amp",
          "small",
          "span",
          "strong",
          "sub",
          "sup",
          "time",
          "u",
          "var",
          "wbr",
        ],
        u = ["code", "pre", "textarea"];
      t.exports = function t(e, h) {
        if (Array.isArray(h))
          for (
            var c, l, f = e.nodeName.toLowerCase(), L = !1, d = 0, p = h.length;
            d < p;
            d++
          ) {
            var m = h[d];
            if (Array.isArray(m)) t(e, m);
            else {
              ("number" == typeof m ||
                "boolean" == typeof m ||
                "function" == typeof m ||
                m instanceof Date ||
                m instanceof RegExp) &&
                (m = m.toString());
              var C = e.childNodes[e.childNodes.length - 1];
              if ("string" == typeof m)
                (L = !0),
                  C && "#text" === C.nodeName
                    ? (C.nodeValue += m)
                    : ((m = e.ownerDocument.createTextNode(m)),
                      e.appendChild(m),
                      (C = m)),
                  d === p - 1 &&
                    ((L = !1),
                    -1 === a.indexOf(f) && -1 === u.indexOf(f)
                      ? "" ===
                        (c = C.nodeValue
                          .replace(r, "")
                          .replace(o, "")
                          .replace(n, "")
                          .replace(s, " "))
                        ? e.removeChild(C)
                        : (C.nodeValue = c)
                      : -1 === u.indexOf(f) &&
                        ((l = 0 === d ? "" : " "),
                        (c = C.nodeValue
                          .replace(r, l)
                          .replace(i, " ")
                          .replace(o, "")
                          .replace(n, "")
                          .replace(s, " ")),
                        (C.nodeValue = c)));
              else if (m && m.nodeType) {
                L &&
                  ((L = !1),
                  -1 === a.indexOf(f) && -1 === u.indexOf(f)
                    ? "" ===
                      (c = C.nodeValue
                        .replace(r, "")
                        .replace(n, " ")
                        .replace(s, " "))
                      ? e.removeChild(C)
                      : (C.nodeValue = c)
                    : -1 === u.indexOf(f) &&
                      ((c = C.nodeValue
                        .replace(i, " ")
                        .replace(r, "")
                        .replace(n, " ")
                        .replace(s, " ")),
                      (C.nodeValue = c)));
                var v = m.nodeName;
                v && (f = v.toLowerCase()), e.appendChild(m);
              }
            }
          }
      };
    }),
    r = e(function (t, e) {
      "use strict";
      var n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            };
      function r() {
        (this.protocol = null),
          (this.slashes = null),
          (this.auth = null),
          (this.host = null),
          (this.port = null),
          (this.hostname = null),
          (this.hash = null),
          (this.search = null),
          (this.query = null),
          (this.pathname = null),
          (this.path = null),
          (this.href = null);
      }
      e.format = function (t) {
        return (
          mt.isString(t) && (t = m(t)),
          t instanceof r ? t.format() : r.prototype.format.call(t)
        );
      };
      var o = /^([a-z0-9.+-]+:)/i,
        i = /:[0-9]*$/,
        s = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        a = ["{", "}", "|", "\\", "^", "`"].concat([
          "<",
          ">",
          '"',
          "`",
          " ",
          "\r",
          "\n",
          "\t",
        ]),
        u = ["'"].concat(a),
        h = ["%", "/", "?", ";", "#"].concat(u),
        c = ["/", "?", "#"],
        l = /^[+a-z0-9A-Z_-]{0,63}$/,
        f = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        L = { javascript: !0, "javascript:": !0 },
        d = { javascript: !0, "javascript:": !0 },
        p = {
          http: !0,
          https: !0,
          ftp: !0,
          gopher: !0,
          file: !0,
          "http:": !0,
          "https:": !0,
          "ftp:": !0,
          "gopher:": !0,
          "file:": !0,
        };
      function m(t, e, n) {
        if (t && mt.isObject(t) && t instanceof r) return t;
        var o = new r();
        return o.parse(t, e, n), o;
      }
      (r.prototype.parse = function (t, e, r) {
        if (!mt.isString(t))
          throw new TypeError(
            "Parameter 'url' must be a string, not " +
              (void 0 === t ? "undefined" : n(t))
          );
        var i = t.indexOf("?"),
          a = -1 !== i && i < t.indexOf("#") ? "?" : "#",
          m = t.split(a);
        m[0] = m[0].replace(/\\/g, "/");
        var C = (t = m.join(a));
        if (((C = C.trim()), !r && 1 === t.split("#").length)) {
          var v = s.exec(C);
          if (v)
            return (
              (this.path = C),
              (this.href = C),
              (this.pathname = v[1]),
              v[2]
                ? ((this.search = v[2]),
                  (this.query = e
                    ? At.parse(this.search.substr(1))
                    : this.search.substr(1)))
                : e && ((this.search = ""), (this.query = {})),
              this
            );
        }
        var y = o.exec(C);
        if (y) {
          var b = (y = y[0]).toLowerCase();
          (this.protocol = b), (C = C.substr(y.length));
        }
        if (r || y || C.match(/^\/\/[^@\/]+@[^@\/]+/)) {
          var w = "//" === C.substr(0, 2);
          !w || (y && d[y]) || ((C = C.substr(2)), (this.slashes = !0));
        }
        if (!d[y] && (w || (y && !p[y]))) {
          for (var g, _, A = -1, E = 0; E < c.length; E++)
            -1 !== (S = C.indexOf(c[E])) && (-1 === A || S < A) && (A = S);
          for (
            -1 !==
              (_ = -1 === A ? C.lastIndexOf("@") : C.lastIndexOf("@", A)) &&
              ((g = C.slice(0, _)),
              (C = C.slice(_ + 1)),
              (this.auth = decodeURIComponent(g))),
              A = -1,
              E = 0;
            E < h.length;
            E++
          ) {
            var S;
            -1 !== (S = C.indexOf(h[E])) && (-1 === A || S < A) && (A = S);
          }
          -1 === A && (A = C.length),
            (this.host = C.slice(0, A)),
            (C = C.slice(A)),
            this.parseHost(),
            (this.hostname = this.hostname || "");
          var N =
            "[" === this.hostname[0] &&
            "]" === this.hostname[this.hostname.length - 1];
          if (!N)
            for (
              var O = this.hostname.split(/\./), T = ((E = 0), O.length);
              E < T;
              E++
            ) {
              var x = O[E];
              if (x && !x.match(l)) {
                for (var I = "", j = 0, M = x.length; j < M; j++)
                  x.charCodeAt(j) > 127 ? (I += "x") : (I += x[j]);
                if (!I.match(l)) {
                  var R = O.slice(0, E),
                    D = O.slice(E + 1),
                    k = x.match(f);
                  k && (R.push(k[1]), D.unshift(k[2])),
                    D.length && (C = "/" + D.join(".") + C),
                    (this.hostname = R.join("."));
                  break;
                }
              }
            }
          this.hostname.length > 255
            ? (this.hostname = "")
            : (this.hostname = this.hostname.toLowerCase()),
            N || (this.hostname = dt.toASCII(this.hostname));
          var P = this.port ? ":" + this.port : "",
            U = this.hostname || "";
          (this.host = U + P),
            (this.href += this.host),
            N &&
              ((this.hostname = this.hostname.substr(
                1,
                this.hostname.length - 2
              )),
              "/" !== C[0] && (C = "/" + C));
        }
        if (!L[b])
          for (E = 0, T = u.length; E < T; E++) {
            var q = u[E];
            if (-1 !== C.indexOf(q)) {
              var Z = encodeURIComponent(q);
              Z === q && (Z = escape(q)), (C = C.split(q).join(Z));
            }
          }
        var V = C.indexOf("#");
        -1 !== V && ((this.hash = C.substr(V)), (C = C.slice(0, V)));
        var $ = C.indexOf("?");
        if (
          (-1 !== $
            ? ((this.search = C.substr($)),
              (this.query = C.substr($ + 1)),
              e && (this.query = At.parse(this.query)),
              (C = C.slice(0, $)))
            : e && ((this.search = ""), (this.query = {})),
          C && (this.pathname = C),
          p[b] && this.hostname && !this.pathname && (this.pathname = "/"),
          this.pathname || this.search)
        ) {
          P = this.pathname || "";
          var G = this.search || "";
          this.path = P + G;
        }
        return (this.href = this.format()), this;
      }),
        (r.prototype.format = function () {
          var t = this.auth || "";
          t &&
            ((t = (t = encodeURIComponent(t)).replace(/%3A/i, ":")),
            (t += "@"));
          var e = this.protocol || "",
            n = this.pathname || "",
            r = this.hash || "",
            o = !1,
            i = "";
          this.host
            ? (o = t + this.host)
            : this.hostname &&
              ((o =
                t +
                (-1 === this.hostname.indexOf(":")
                  ? this.hostname
                  : "[" + this.hostname + "]")),
              this.port && (o += ":" + this.port)),
            this.query &&
              mt.isObject(this.query) &&
              Object.keys(this.query).length &&
              (i = At.stringify(this.query));
          var s = this.search || (i && "?" + i) || "";
          return (
            e && ":" !== e.substr(-1) && (e += ":"),
            this.slashes || ((!e || p[e]) && !1 !== o)
              ? ((o = "//" + (o || "")),
                n && "/" !== n.charAt(0) && (n = "/" + n))
              : o || (o = ""),
            r && "#" !== r.charAt(0) && (r = "#" + r),
            s && "?" !== s.charAt(0) && (s = "?" + s),
            e +
              o +
              (n = n.replace(/[?#]/g, function (t) {
                return encodeURIComponent(t);
              })) +
              (s = s.replace("#", "%23")) +
              r
          );
        }),
        (r.prototype.resolve = function (t) {
          return this.resolveObject(m(t, !1, !0)).format();
        }),
        (r.prototype.resolveObject = function (t) {
          if (mt.isString(t)) {
            var e = new r();
            e.parse(t, !1, !0), (t = e);
          }
          for (
            var n = new r(), o = Object.keys(this), i = 0;
            i < o.length;
            i++
          ) {
            var s = o[i];
            n[s] = this[s];
          }
          if (((n.hash = t.hash), "" === t.href))
            return (n.href = n.format()), n;
          if (t.slashes && !t.protocol) {
            for (var a = Object.keys(t), u = 0; u < a.length; u++) {
              var h = a[u];
              "protocol" !== h && (n[h] = t[h]);
            }
            return (
              p[n.protocol] &&
                n.hostname &&
                !n.pathname &&
                (n.path = n.pathname = "/"),
              (n.href = n.format()),
              n
            );
          }
          if (t.protocol && t.protocol !== n.protocol) {
            if (!p[t.protocol]) {
              for (var c = Object.keys(t), l = 0; l < c.length; l++) {
                var f = c[l];
                n[f] = t[f];
              }
              return (n.href = n.format()), n;
            }
            if (((n.protocol = t.protocol), t.host || d[t.protocol]))
              n.pathname = t.pathname;
            else {
              for (
                var L = (t.pathname || "").split("/");
                L.length && !(t.host = L.shift());

              );
              t.host || (t.host = ""),
                t.hostname || (t.hostname = ""),
                "" !== L[0] && L.unshift(""),
                L.length < 2 && L.unshift(""),
                (n.pathname = L.join("/"));
            }
            if (
              ((n.search = t.search),
              (n.query = t.query),
              (n.host = t.host || ""),
              (n.auth = t.auth),
              (n.hostname = t.hostname || t.host),
              (n.port = t.port),
              n.pathname || n.search)
            ) {
              var m = n.pathname || "",
                C = n.search || "";
              n.path = m + C;
            }
            return (
              (n.slashes = n.slashes || t.slashes), (n.href = n.format()), n
            );
          }
          var v = n.pathname && "/" === n.pathname.charAt(0),
            y = t.host || (t.pathname && "/" === t.pathname.charAt(0)),
            b = y || v || (n.host && t.pathname),
            w = b,
            g = (n.pathname && n.pathname.split("/")) || [],
            _ =
              ((L = (t.pathname && t.pathname.split("/")) || []),
              n.protocol && !p[n.protocol]);
          if (
            (_ &&
              ((n.hostname = ""),
              (n.port = null),
              n.host && ("" === g[0] ? (g[0] = n.host) : g.unshift(n.host)),
              (n.host = ""),
              t.protocol &&
                ((t.hostname = null),
                (t.port = null),
                t.host && ("" === L[0] ? (L[0] = t.host) : L.unshift(t.host)),
                (t.host = null)),
              (b = b && ("" === L[0] || "" === g[0]))),
            y)
          )
            (n.host = t.host || "" === t.host ? t.host : n.host),
              (n.hostname =
                t.hostname || "" === t.hostname ? t.hostname : n.hostname),
              (n.search = t.search),
              (n.query = t.query),
              (g = L);
          else if (L.length)
            g || (g = []),
              g.pop(),
              (g = g.concat(L)),
              (n.search = t.search),
              (n.query = t.query);
          else if (!mt.isNullOrUndefined(t.search))
            return (
              _ &&
                ((n.hostname = n.host = g.shift()),
                (O =
                  !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) &&
                  ((n.auth = O.shift()), (n.host = n.hostname = O.shift()))),
              (n.search = t.search),
              (n.query = t.query),
              (mt.isNull(n.pathname) && mt.isNull(n.search)) ||
                (n.path =
                  (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
              (n.href = n.format()),
              n
            );
          if (!g.length)
            return (
              (n.pathname = null),
              n.search ? (n.path = "/" + n.search) : (n.path = null),
              (n.href = n.format()),
              n
            );
          for (
            var A = g.slice(-1)[0],
              E =
                ((n.host || t.host || g.length > 1) &&
                  ("." === A || ".." === A)) ||
                "" === A,
              S = 0,
              N = g.length;
            N >= 0;
            N--
          )
            "." === (A = g[N])
              ? g.splice(N, 1)
              : ".." === A
              ? (g.splice(N, 1), S++)
              : S && (g.splice(N, 1), S--);
          if (!b && !w) for (; S--; S) g.unshift("..");
          !b ||
            "" === g[0] ||
            (g[0] && "/" === g[0].charAt(0)) ||
            g.unshift(""),
            E && "/" !== g.join("/").substr(-1) && g.push("");
          var O,
            T = "" === g[0] || (g[0] && "/" === g[0].charAt(0));
          return (
            _ &&
              ((n.hostname = n.host = T ? "" : g.length ? g.shift() : ""),
              (O =
                !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) &&
                ((n.auth = O.shift()), (n.host = n.hostname = O.shift()))),
            (b = b || (n.host && g.length)) && !T && g.unshift(""),
            g.length
              ? (n.pathname = g.join("/"))
              : ((n.pathname = null), (n.path = null)),
            (mt.isNull(n.pathname) && mt.isNull(n.search)) ||
              (n.path =
                (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
            (n.auth = t.auth || n.auth),
            (n.slashes = n.slashes || t.slashes),
            (n.href = n.format()),
            n
          );
        }),
        (r.prototype.parseHost = function () {
          var t = this.host,
            e = i.exec(t);
          e &&
            (":" !== (e = e[0]) && (this.port = e.substr(1)),
            (t = t.substr(0, t.length - e.length))),
            t && (this.hostname = t);
        });
    }),
    o = e(function (t, e) {
      (function (t) {
        function n(t, e) {
          for (var n = 0, r = t.length - 1; r >= 0; r--) {
            var o = t[r];
            "." === o
              ? t.splice(r, 1)
              : ".." === o
              ? (t.splice(r, 1), n++)
              : n && (t.splice(r, 1), n--);
          }
          if (e) for (; n--; n) t.unshift("..");
          return t;
        }
        function r(t, e) {
          if (t.filter) return t.filter(e);
          for (var n = [], r = 0; r < t.length; r++)
            e(t[r], r, t) && n.push(t[r]);
          return n;
        }
        (e.normalize = function (t) {
          var i = e.isAbsolute(t),
            s = "/" === o(t, -1);
          return (
            (t = n(
              r(t.split("/"), function (t) {
                return !!t;
              }),
              !i
            ).join("/")) ||
              i ||
              (t = "."),
            t && s && (t += "/"),
            (i ? "/" : "") + t
          );
        }),
          (e.isAbsolute = function (t) {
            return "/" === t.charAt(0);
          }),
          (e.join = function () {
            var t = Array.prototype.slice.call(arguments, 0);
            return e.normalize(
              r(t, function (t, e) {
                if ("string" != typeof t)
                  throw new TypeError("Arguments to path.join must be strings");
                return t;
              }).join("/")
            );
          });
        var o =
          "b" === "ab".substr(-1)
            ? function (t, e, n) {
                return t.substr(e, n);
              }
            : function (t, e, n) {
                return e < 0 && (e = t.length + e), t.substr(e, n);
              };
      }.call(this, et));
    }),
    i = function (t, e) {
      if (t)
        try {
          var n = document.querySelector(t);
          n && n.scrollIntoView(e);
        } catch (r) {}
    },
    s = function (t) {
      if ("undefined" == typeof document)
        throw new Error("document-ready only runs in the browser");
      var e = document.readyState;
      if ("complete" === e || "interactive" === e) return setTimeout(t, 0);
      document.addEventListener("DOMContentLoaded", function () {
        t();
      });
    };
  "function" == typeof Symbol && Symbol.iterator;
  var a = "undefined" != typeof window;
  function u(t) {
    (this.hasWindow = t),
      (this.hasIdle = this.hasWindow && window.requestIdleCallback),
      (this.method = this.hasIdle
        ? window.requestIdleCallback.bind(window)
        : this.setTimeout),
      (this.scheduled = !1),
      (this.queue = []);
  }
  (u.prototype.push = function (t) {
    this.queue.push(t), this.schedule();
  }),
    (u.prototype.schedule = function () {
      if (!this.scheduled) {
        this.scheduled = !0;
        var t = this;
        this.method(function (e) {
          for (; t.queue.length && e.timeRemaining() > 0; ) t.queue.shift()(e);
          (t.scheduled = !1), t.queue.length && t.schedule();
        });
      }
    }),
    (u.prototype.setTimeout = function (t) {
      setTimeout(t, 0, {
        timeRemaining: function () {
          return 1;
        },
      });
    }),
    (t = function () {
      var t;
      return (
        a
          ? (window._nanoScheduler || (window._nanoScheduler = new u(!0)),
            (t = window._nanoScheduler))
          : (t = new u()),
        t
      );
    }),
    "function" == typeof Symbol && Symbol.iterator;
  var h,
    c = t();
  l.disabled = !0;
  try {
    (h = window.performance),
      (l.disabled =
        "true" === window.localStorage.DISABLE_NANOTIMING || !h.mark);
  } catch (zt) {}
  function l(t) {
    if (l.disabled) return f;
    var e = (1e4 * h.now()).toFixed() % Number.MAX_SAFE_INTEGER,
      n = "start-" + e + "-" + t;
    function r(r) {
      var o = "end-" + e + "-" + t;
      h.mark(o),
        c.push(function () {
          var i = null;
          try {
            var s = t + " [" + e + "]";
            h.measure(s, n, o), h.clearMarks(n), h.clearMarks(o);
          } catch (zt) {
            i = zt;
          }
          r && r(i, t);
        });
    }
    return h.mark(n), (r.uuid = e), r;
  }
  function f(t) {
    t &&
      c.push(function () {
        t(new Error("nanotiming: performance API unavailable"));
      });
  }
  var L = l,
    d = {};
  function p() {
    if (!(this instanceof p)) return new p();
    this.trie = { nodes: {} };
  }
  function m(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }
  "function" == typeof Symbol && Symbol.iterator,
    (d = p),
    (p.prototype.create = function (t) {
      var e = t.replace(/^\//, "").split("/");
      return (function t(n, r) {
        var o = m(e, n) && e[n];
        if (!1 === o) return r;
        var i = null;
        return (
          /^:|^\*/.test(o)
            ? (m(r.nodes, "$$")
                ? (i = r.nodes.$$)
                : ((i = { nodes: {} }), (r.nodes.$$ = i)),
              "*" === o[0] && (r.wildcard = !0),
              (r.name = o.replace(/^:|^\*/, "")))
            : m(r.nodes, o)
            ? (i = r.nodes[o])
            : ((i = { nodes: {} }), (r.nodes[o] = i)),
          t(n + 1, i)
        );
      })(0, this.trie);
    }),
    (p.prototype.match = function (t) {
      var e = t.replace(/^\//, "").split("/"),
        n = {},
        r = (function t(r, o) {
          if (void 0 !== o) {
            var i = e[r];
            if (void 0 === i) return o;
            if (m(o.nodes, i)) return t(r + 1, o.nodes[i]);
            if (o.name) {
              try {
                n[o.name] = decodeURIComponent(i);
              } catch (zt) {
                return t(r, void 0);
              }
              return t(r + 1, o.nodes.$$);
            }
            if (o.wildcard) {
              try {
                n.wildcard = decodeURIComponent(e.slice(r).join("/"));
              } catch (zt) {
                return t(r, void 0);
              }
              return o.nodes.$$;
            }
            return t(r + 1);
          }
        })(0, this.trie);
      if (r) return ((r = Object.assign({}, r)).params = n), r;
    }),
    (p.prototype.mount = function (t, e) {
      var n = t.replace(/^\//, "").split("/"),
        r = null,
        o = null;
      if (1 === n.length) (o = n[0]), (r = this.create(o));
      else {
        var i = n.join("/");
        (o = n[0]), (r = this.create(i));
      }
      Object.assign(r.nodes, e.nodes),
        e.name && (r.name = e.name),
        r.nodes[""] &&
          (Object.keys(r.nodes[""]).forEach(function (t) {
            "nodes" !== t && (r[t] = r.nodes[""][t]);
          }),
          Object.assign(r.nodes, r.nodes[""].nodes),
          delete r.nodes[""].nodes);
    }),
    "function" == typeof Symbol && Symbol.iterator;
  var C = function t(e) {
      if (!(this instanceof t)) return new t(e);
      var n = (e || "").replace(/^\//, ""),
        r = d();
      return (
        (o._trie = r),
        (o.on = function (t, e) {
          if (((t = t || "/"), e._wayfarer && e._trie))
            r.mount(t, e._trie.trie);
          else {
            var n = r.create(t);
            (n.cb = e), (n.route = t);
          }
          return o;
        }),
        (o.emit = o),
        (o.match = i),
        (o._wayfarer = !0),
        o
      );
      function o(t) {
        var e = i(t),
          n = new Array(arguments.length);
        n[0] = e.params;
        for (var r = 1; r < n.length; r++) n[r] = arguments[r];
        return e.cb.apply(e.cb, n);
      }
      function i(t) {
        var e = r.match(t);
        if (e && e.cb) return new s(e);
        var o = r.match(n);
        if (o && o.cb) return new s(o);
        throw new Error("route '" + t + "' did not match");
      }
      function s(t) {
        (this.cb = t.cb), (this.route = t.route), (this.params = t.params);
      }
    },
    v = {},
    y =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          },
    b = /file:\/\//.test(
      "object" === ("undefined" == typeof window ? "undefined" : y(window)) &&
        window.location &&
        window.location.origin
    ),
    w = new RegExp("^(file://|/)(.*.html?/?)?"),
    g = new RegExp(
      "^(http(s)?(://))?(www.)?[a-zA-Z0-9-_.]+(:[0-9]{1,5})?(/{1})?"
    ),
    _ = new RegExp("#"),
    A = new RegExp("[?].*$");
  function E(t) {
    if (!(this instanceof E)) return new E(t);
    (t = t || {}), (this.router = C(t.default || "/404"));
  }
  function S(t, e) {
    return (
      (t = e ? t.replace(w, "") : t.replace(g, "")),
      decodeURI(t.replace(A, "").replace(_, "/"))
    );
  }
  (v = E),
    (E.prototype.on = function (t, e) {
      (t = t.replace(/^[#/]/, "")), this.router.on(t, e);
    }),
    (E.prototype.emit = function (t) {
      return (t = S(t, b)), this.router.emit(t);
    }),
    (E.prototype.match = function (t) {
      return (t = S(t, b)), this.router.match(t);
    });
  function N(t, e) {
    if (!t) throw new Error(e || "AssertionError");
  }
  (N.notEqual = function (t, e, n) {}),
    (N.notOk = function (t, e) {}),
    (N.equal = function (t, e, n) {}),
    (N.ok = N);
  var O = [
      "onclick",
      "ondblclick",
      "onmousedown",
      "onmouseup",
      "onmouseover",
      "onmousemove",
      "onmouseout",
      "onmouseenter",
      "onmouseleave",
      "ontouchcancel",
      "ontouchend",
      "ontouchmove",
      "ontouchstart",
      "ondragstart",
      "ondrag",
      "ondragenter",
      "ondragleave",
      "ondragover",
      "ondrop",
      "ondragend",
      "onkeydown",
      "onkeypress",
      "onkeyup",
      "onunload",
      "onabort",
      "onerror",
      "onresize",
      "onscroll",
      "onselect",
      "onchange",
      "onsubmit",
      "onreset",
      "onfocus",
      "onblur",
      "oninput",
      "oncontextmenu",
      "onfocusin",
      "onfocusout",
    ],
    T = O.length;
  function x(t, e, n) {
    t[n] !== e[n] &&
      ((e[n] = t[n]), t[n] ? e.setAttribute(n, "") : e.removeAttribute(n));
  }
  var I = function (t, e) {
    var n = t.nodeType,
      r = t.nodeName;
    1 === n &&
      (function (t, e) {
        for (
          var n = e.attributes,
            r = t.attributes,
            o = null,
            i = null,
            s = null,
            a = null,
            u = r.length - 1;
          u >= 0;
          --u
        )
          (s = (a = r[u]).name),
            (o = a.namespaceURI),
            (i = a.value),
            o
              ? ((s = a.localName || s),
                e.getAttributeNS(o, s) !== i && e.setAttributeNS(o, s, i))
              : e.hasAttribute(s)
              ? e.getAttribute(s) !== i &&
                ("null" === i || "undefined" === i
                  ? e.removeAttribute(s)
                  : e.setAttribute(s, i))
              : e.setAttribute(s, i);
        for (var h = n.length - 1; h >= 0; --h)
          !1 !== (a = n[h]).specified &&
            ((s = a.name),
            (o = a.namespaceURI)
              ? ((s = a.localName || s),
                t.hasAttributeNS(o, s) || e.removeAttributeNS(o, s))
              : t.hasAttributeNS(null, s) || e.removeAttribute(s));
      })(t, e),
      (3 !== n && 8 !== n) ||
        (e.nodeValue !== t.nodeValue && (e.nodeValue = t.nodeValue)),
      "INPUT" === r
        ? (function (t, e) {
            var n = t.value,
              r = e.value;
            x(t, e, "checked"),
              x(t, e, "disabled"),
              t.indeterminate !== e.indeterminate &&
                (e.indeterminate = t.indeterminate),
              n !== r && (e.setAttribute("value", n), (e.value = n)),
              "null" === n && ((e.value = ""), e.removeAttribute("value")),
              t.hasAttributeNS(null, "value")
                ? "range" === e.type && (e.value = n)
                : e.removeAttribute("value");
          })(t, e)
        : "OPTION" === r
        ? (function (t, e) {
            x(t, e, "selected");
          })(t, e)
        : "TEXTAREA" === r &&
          (function (t, e) {
            var n = t.value;
            if (
              (n !== e.value && (e.value = n),
              e.firstChild && e.firstChild.nodeValue !== n)
            ) {
              if ("" === n && e.firstChild.nodeValue === e.placeholder) return;
              e.firstChild.nodeValue = n;
            }
          })(t, e),
      (function (t, e) {
        for (var n = 0; n < T; n++) {
          var r = O[n];
          t[r] ? (e[r] = t[r]) : e[r] && (e[r] = void 0);
        }
      })(t, e);
  };
  "function" == typeof Symbol && Symbol.iterator;
  var j = 3;
  function M(t, e) {
    return e
      ? t
        ? t.isSameNode && t.isSameNode(e)
          ? e
          : t.tagName !== e.tagName || R(t) !== R(e)
          ? t
          : (I(t, e), D(t, e), e)
        : null
      : t;
  }
  function R(t) {
    return t.dataset ? t.dataset.nanomorphComponentId : void 0;
  }
  function D(t, e) {
    for (
      var n, r, o, i, s = 0, a = 0;
      (n = e.childNodes[a]), (r = t.childNodes[a - s]), n || r;
      a++
    )
      if (r)
        if (n)
          if (k(r, n)) (o = M(r, n)) !== n && (e.replaceChild(o, n), s++);
          else {
            i = null;
            for (var u = a; u < e.childNodes.length; u++)
              if (k(e.childNodes[u], r)) {
                i = e.childNodes[u];
                break;
              }
            i
              ? ((o = M(r, i)) !== i && s++, e.insertBefore(o, n))
              : r.id || n.id
              ? (e.insertBefore(r, n), s++)
              : (o = M(r, n)) !== n && (e.replaceChild(o, n), s++);
          }
        else e.appendChild(r), s++;
      else e.removeChild(n), a--;
  }
  function k(t, e) {
    return t.id
      ? t.id === e.id
      : t.isSameNode
      ? t.isSameNode(e)
      : t.tagName === e.tagName && t.type === j && t.nodeValue === e.nodeValue;
  }
  var P = function (t, e, n) {
    return n && n.childrenOnly ? (D(e, t), t) : M(e, t);
  };
  "function" == typeof Symbol && Symbol.iterator;
  var U = /([^?=&]+)(=([^&]*))?/g;
  "function" == typeof Symbol && Symbol.iterator;
  var q = /(noopener|noreferrer) (noopener|noreferrer)/,
    Z = /^[\w-_]+:/;
  "function" == typeof Symbol && Symbol.iterator;
  var V = function (t, e, n) {
      var r,
        o = t.length;
      if (!(e >= o || 0 === n)) {
        var i = o - (n = e + n > o ? o - e : n);
        for (r = e; r < i; ++r) t[r] = t[r + n];
        t.length = i;
      }
    },
    $ = {};
  function G(t) {
    if (!(this instanceof G)) return new G(t);
    (this._name = t || "nanobus"),
      (this._starListeners = []),
      (this._listeners = {});
  }
  "function" == typeof Symbol && Symbol.iterator,
    ($ = G),
    (G.prototype.emit = function (t) {
      for (var e = [], n = 1, r = arguments.length; n < r; n++)
        e.push(arguments[n]);
      var o = L(this._name + "('" + t.toString() + "')"),
        i = this._listeners[t];
      return (
        i && i.length > 0 && this._emit(this._listeners[t], e),
        this._starListeners.length > 0 &&
          this._emit(this._starListeners, t, e, o.uuid),
        o(),
        this
      );
    }),
    (G.prototype.on = G.prototype.addListener = function (t, e) {
      return (
        "*" === t
          ? this._starListeners.push(e)
          : (this._listeners[t] || (this._listeners[t] = []),
            this._listeners[t].push(e)),
        this
      );
    }),
    (G.prototype.prependListener = function (t, e) {
      return (
        "*" === t
          ? this._starListeners.unshift(e)
          : (this._listeners[t] || (this._listeners[t] = []),
            this._listeners[t].unshift(e)),
        this
      );
    }),
    (G.prototype.once = function (t, e) {
      var n = this;
      return (
        this.on(t, function r() {
          e.apply(n, arguments), n.removeListener(t, r);
        }),
        this
      );
    }),
    (G.prototype.prependOnceListener = function (t, e) {
      var n = this;
      return (
        this.prependListener(t, function r() {
          e.apply(n, arguments), n.removeListener(t, r);
        }),
        this
      );
    }),
    (G.prototype.removeListener = function (t, e) {
      return "*" === t
        ? ((this._starListeners = this._starListeners.slice()),
          n(this._starListeners, e))
        : (void 0 !== this._listeners[t] &&
            (this._listeners[t] = this._listeners[t].slice()),
          n(this._listeners[t], e));
      function n(t, e) {
        if (t) {
          var n = t.indexOf(e);
          return -1 !== n ? (V(t, n, 1), !0) : void 0;
        }
      }
    }),
    (G.prototype.removeAllListeners = function (t) {
      return (
        t
          ? "*" === t
            ? (this._starListeners = [])
            : (this._listeners[t] = [])
          : ((this._starListeners = []), (this._listeners = {})),
        this
      );
    }),
    (G.prototype.listeners = function (t) {
      var e = "*" !== t ? this._listeners[t] : this._starListeners,
        n = [];
      if (e) for (var r = e.length, o = 0; o < r; o++) n.push(e[o]);
      return n;
    }),
    (G.prototype._emit = function (t, e, n, r) {
      if (void 0 !== t && 0 !== t.length) {
        void 0 === n && ((n = e), (e = null)),
          e && (n = void 0 !== r ? [e].concat(n, r) : [e].concat(n));
        for (var o = t.length, i = 0; i < o; i++) {
          var s = t[i];
          s.apply(s, n);
        }
      }
    });
  var W = {};
  function H(t) {
    if (!(this instanceof H)) return new H(t);
    "number" == typeof t && (t = { max: t }),
      t || (t = {}),
      (this.cache = {}),
      (this.head = this.tail = null),
      (this.length = 0),
      (this.max = t.max || 1e3),
      (this.maxAge = t.maxAge || 0);
  }
  (W = H),
    Object.defineProperty(H.prototype, "keys", {
      get: function () {
        return Object.keys(this.cache);
      },
    }),
    (H.prototype.clear = function () {
      (this.cache = {}), (this.head = this.tail = null), (this.length = 0);
    }),
    (H.prototype.remove = function (t) {
      if (
        ("string" != typeof t && (t = "" + t), this.cache.hasOwnProperty(t))
      ) {
        var e = this.cache[t];
        return delete this.cache[t], this._unlink(t, e.prev, e.next), e.value;
      }
    }),
    (H.prototype._unlink = function (t, e, n) {
      this.length--,
        0 === this.length
          ? (this.head = this.tail = null)
          : this.head === t
          ? ((this.head = e), (this.cache[this.head].next = null))
          : this.tail === t
          ? ((this.tail = n), (this.cache[this.tail].prev = null))
          : ((this.cache[e].next = n), (this.cache[n].prev = e));
    }),
    (H.prototype.peek = function (t) {
      if (this.cache.hasOwnProperty(t)) {
        var e = this.cache[t];
        if (this._checkAge(t, e)) return e.value;
      }
    }),
    (H.prototype.set = function (t, e) {
      var n;
      if (
        ("string" != typeof t && (t = "" + t), this.cache.hasOwnProperty(t))
      ) {
        if (
          (((n = this.cache[t]).value = e),
          this.maxAge && (n.modified = Date.now()),
          t === this.head)
        )
          return e;
        this._unlink(t, n.prev, n.next);
      } else
        (n = { value: e, modified: 0, next: null, prev: null }),
          this.maxAge && (n.modified = Date.now()),
          (this.cache[t] = n),
          this.length === this.max && this.evict();
      return (
        this.length++,
        (n.next = null),
        (n.prev = this.head),
        this.head && (this.cache[this.head].next = t),
        (this.head = t),
        this.tail || (this.tail = t),
        e
      );
    }),
    (H.prototype._checkAge = function (t, e) {
      return !(
        this.maxAge &&
        Date.now() - e.modified > this.maxAge &&
        (this.remove(t), 1)
      );
    }),
    (H.prototype.get = function (t) {
      if (
        ("string" != typeof t && (t = "" + t), this.cache.hasOwnProperty(t))
      ) {
        var e = this.cache[t];
        if (this._checkAge(t, e))
          return (
            this.head !== t &&
              (t === this.tail
                ? ((this.tail = e.next), (this.cache[this.tail].prev = null))
                : (this.cache[e.prev].next = e.next),
              (this.cache[e.next].prev = e.prev),
              (this.cache[this.head].next = t),
              (e.prev = this.head),
              (e.next = null),
              (this.head = t)),
            e.value
          );
      }
    }),
    (H.prototype.evict = function () {
      this.tail && this.remove(this.tail);
    });
  var F = {};
  function K(t, e, n) {
    (this.cache = "number" == typeof n ? new W(n) : n || new W(100)),
      (this.state = t),
      (this.emit = e);
  }
  function z(t) {
    return new (t.bind.apply(t, arguments))();
  }
  "function" == typeof Symbol && Symbol.iterator,
    (F = K),
    (K.prototype.render = function (t, e) {
      var n = this.cache.get(e);
      if (!n) {
        for (var r = [], o = 2, i = arguments.length; o < i; o++)
          r.push(arguments[o]);
        r.unshift(t, e, this.state, this.emit),
          (n = z.apply(z, r)),
          this.cache.set(e, n);
      }
      return n;
    });
  var B =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          },
    Y = X,
    Q = {};
  function X(t) {
    var e = L("choo.constructor");
    if (!(this instanceof X)) return new X(t);
    t = t || {};
    var n = this;
    (this._events = {
      DOMCONTENTLOADED: "DOMContentLoaded",
      DOMTITLECHANGE: "DOMTitleChange",
      REPLACESTATE: "replaceState",
      PUSHSTATE: "pushState",
      NAVIGATE: "navigate",
      POPSTATE: "popState",
      RENDER: "render",
    }),
      (this._historyEnabled = void 0 === t.history || t.history),
      (this._hrefEnabled = void 0 === t.href || t.href),
      (this._hashEnabled = void 0 !== t.hash && t.hash),
      (this._hasWindow = "undefined" != typeof window),
      (this._cache = t.cache),
      (this._loaded = !1),
      (this._stores = [
        function (t) {
          n.emitter.prependListener(n._events.DOMTITLECHANGE, function (e) {
            (t.title = e), n._hasWindow && (document.title = e);
          });
        },
      ]),
      (this._tree = null);
    var r = { events: this._events, components: {} };
    this._hasWindow
      ? ((this.state = window.initialState
          ? Object.assign({}, window.initialState, r)
          : r),
        delete window.initialState)
      : (this.state = r),
      (this.router = v({ curry: !0 })),
      (this.emitter = $("choo.emit")),
      (this.emit = this.emitter.emit.bind(this.emitter)),
      this._hasWindow && (this.state.title = document.title),
      e();
  }
  (X.prototype.route = function (t, e) {
    var n = L("choo.route('" + t + "')");
    this.router.on(t, e), n();
  }),
    (X.prototype.use = function (t) {
      var e = this;
      this._stores.push(function (n) {
        var r = "choo.use";
        r = t.storeName ? r + "(" + t.storeName + ")" : r;
        var o = L(r);
        t(n, e.emitter, e), o();
      });
    }),
    (X.prototype.start = function () {
      var t,
        e,
        n = L("choo.start"),
        r = this;
      return (
        this._historyEnabled &&
          (this.emitter.prependListener(this._events.NAVIGATE, function () {
            r._matchRoute(r.state),
              r._loaded &&
                (r.emitter.emit(r._events.RENDER),
                setTimeout(i.bind(null, window.location.hash), 0));
          }),
          this.emitter.prependListener(this._events.POPSTATE, function () {
            r.emitter.emit(r._events.NAVIGATE);
          }),
          this.emitter.prependListener(this._events.PUSHSTATE, function (t) {
            window.history.pushState(Q, null, t),
              r.emitter.emit(r._events.NAVIGATE);
          }),
          this.emitter.prependListener(this._events.REPLACESTATE, function (t) {
            window.history.replaceState(Q, null, t),
              r.emitter.emit(r._events.NAVIGATE);
          }),
          (window.onpopstate = function () {
            r.emitter.emit(r._events.POPSTATE);
          }),
          r._hrefEnabled &&
            ((t = function (t) {
              var e = t.href,
                n = t.hash;
              e !== window.location.href
                ? r.emitter.emit(r._events.PUSHSTATE, e)
                : !r._hashEnabled && n && i(n);
            }),
            (e = e || window.document),
            window.addEventListener("click", function (n) {
              if (
                !(
                  (n.button && 0 !== n.button) ||
                  n.ctrlKey ||
                  n.metaKey ||
                  n.altKey ||
                  n.shiftKey ||
                  n.defaultPrevented
                )
              ) {
                var r = (function t(n) {
                  if (n && n !== e)
                    return "a" !== n.localName || void 0 === n.href
                      ? t(n.parentNode)
                      : n;
                })(n.target);
                r &&
                  (window.location.protocol !== r.protocol ||
                    window.location.hostname !== r.hostname ||
                    window.location.port !== r.port ||
                    r.hasAttribute("data-nanohref-ignore") ||
                    r.hasAttribute("download") ||
                    ("_blank" === r.getAttribute("target") &&
                      q.test(r.getAttribute("rel"))) ||
                    Z.test(r.getAttribute("href")) ||
                    (n.preventDefault(), t(r)));
              }
            }))),
        this._setCache(this.state),
        this._matchRoute(this.state),
        this._stores.forEach(function (t) {
          t(r.state);
        }),
        (this._tree = this._prerender(this.state)),
        this.emitter.prependListener(
          r._events.RENDER,
          (function (t, e) {
            e || (e = window.requestAnimationFrame);
            var n = !1,
              r = null;
            return function () {
              null !== r ||
                n ||
                ((n = !0),
                e(function () {
                  n = !1;
                  for (var e = r.length, o = new Array(e), i = 0; i < e; i++)
                    o[i] = r[i];
                  t.apply(t, o), (r = null);
                })),
                (r = arguments);
            };
          })(function () {
            var t = L("choo.render"),
              e = r._prerender(r.state),
              n = L("choo.morph");
            P(r._tree, e), n(), t();
          })
        ),
        s(function () {
          r.emitter.emit(r._events.DOMCONTENTLOADED), (r._loaded = !0);
        }),
        n(),
        this._tree
      );
    }),
    (X.prototype.mount = function (t) {
      var e = L("choo.mount('" + t + "')");
      if ("object" !== ("undefined" == typeof window ? "undefined" : B(window)))
        return (this.selector = t), e(), this;
      var n = this;
      s(function () {
        var e = L("choo.render"),
          r = n.start();
        n._tree = "string" == typeof t ? document.querySelector(t) : t;
        var o = L("choo.morph");
        P(n._tree, r), o(), e();
      }),
        e();
    }),
    (X.prototype.toString = function (t, e) {
      ((e = e || {}).components = e.components || {}),
        (e.events = Object.assign({}, e.events, this._events)),
        this._setCache(e),
        this._matchRoute(e, t),
        this.emitter.removeAllListeners(),
        this._stores.forEach(function (t) {
          t(e);
        });
      var n = this._prerender(e);
      return "string" == typeof n.outerHTML ? n.outerHTML : n.toString();
    }),
    (X.prototype._matchRoute = function (t, e) {
      var n, r;
      e
        ? ((n = e.replace(/\?.+$/, "").replace(/\/$/, "")),
          this._hashEnabled || (n = n.replace(/#.+$/, "")),
          (r = e))
        : ((n = window.location.pathname.replace(/\/$/, "")),
          this._hashEnabled && (n += window.location.hash.replace(/^#/, "/")),
          (r = window.location.search));
      var o,
        i = this.router.match(n);
      (this._handler = i.cb),
        (t.href = n),
        (t.query =
          ((o = {}),
          r.replace(/^.*\?/, "").replace(U, function (t, e, n, r) {
            var i = decodeURIComponent(r),
              s = decodeURIComponent(e);
            o.hasOwnProperty(s)
              ? Array.isArray(o[s])
                ? o[s].push(i)
                : (o[s] = [o[s], i])
              : (o[s] = i);
          }),
          o)),
        (t.route = i.route),
        (t.params = i.params);
    }),
    (X.prototype._prerender = function (t) {
      var e = L("choo.prerender('" + t.route + "')"),
        n = this._handler(t, this.emit);
      return e(), n;
    }),
    (X.prototype._setCache = function (t) {
      var e = new F(t, this.emitter.emit.bind(this.emitter), this._cache);
      function n(t, n) {
        for (var r = [], o = 0, i = arguments.length; o < i; o++)
          r.push(arguments[o]);
        return e.render.apply(e, r);
      }
      (t.cache = n),
        (n.toJSON = function () {
          return null;
        });
    });
  var J,
    tt,
    et = {},
    nt = (et = {});
  function rt() {
    throw new Error("setTimeout has not been defined");
  }
  function ot() {
    throw new Error("clearTimeout has not been defined");
  }
  function it(t) {
    if (J === setTimeout) return setTimeout(t, 0);
    if ((J === rt || !J) && setTimeout)
      return (J = setTimeout), setTimeout(t, 0);
    try {
      return J(t, 0);
    } catch (zt) {
      try {
        return J.call(null, t, 0);
      } catch (zt) {
        return J.call(this, t, 0);
      }
    }
  }
  !(function () {
    try {
      J = "function" == typeof setTimeout ? setTimeout : rt;
    } catch (zt) {
      J = rt;
    }
    try {
      tt = "function" == typeof clearTimeout ? clearTimeout : ot;
    } catch (zt) {
      tt = ot;
    }
  })();
  var st,
    at = [],
    ut = !1,
    ht = -1;
  function ct() {
    ut &&
      st &&
      ((ut = !1),
      st.length ? (at = st.concat(at)) : (ht = -1),
      at.length && lt());
  }
  function lt() {
    if (!ut) {
      var t = it(ct);
      ut = !0;
      for (var e = at.length; e; ) {
        for (st = at, at = []; ++ht < e; ) st && st[ht].run();
        (ht = -1), (e = at.length);
      }
      (st = null),
        (ut = !1),
        (function (t) {
          if (tt === clearTimeout) return clearTimeout(t);
          if ((tt === ot || !tt) && clearTimeout)
            return (tt = clearTimeout), clearTimeout(t);
          try {
            tt(t);
          } catch (zt) {
            try {
              return tt.call(null, t);
            } catch (zt) {
              return tt.call(this, t);
            }
          }
        })(t);
    }
  }
  function ft(t, e) {
    (this.fun = t), (this.array = e);
  }
  function Lt() {}
  (nt.nextTick = function (t) {
    var e = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    at.push(new ft(t, e)), 1 !== at.length || ut || it(lt);
  }),
    (ft.prototype.run = function () {
      this.fun.apply(null, this.array);
    }),
    (nt.title = "browser"),
    (nt.browser = !0),
    (nt.env = {}),
    (nt.argv = []),
    (nt.version = ""),
    (nt.versions = {}),
    (nt.on = Lt),
    (nt.addListener = Lt),
    (nt.once = Lt),
    (nt.off = Lt),
    (nt.removeListener = Lt),
    (nt.removeAllListeners = Lt),
    (nt.emit = Lt),
    (nt.prependListener = Lt),
    (nt.prependOnceListener = Lt),
    (nt.listeners = function (t) {
      return [];
    }),
    (nt.binding = function (t) {
      throw new Error("process.binding is not supported");
    }),
    (nt.cwd = function () {
      return "/";
    }),
    (nt.chdir = function (t) {
      throw new Error("process.chdir is not supported");
    }),
    (nt.umask = function () {
      return 0;
    });
  var dt = { exports: {} };
  (function (t) {
    var e =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          };
    !(function (n) {
      var r =
          "object" == (void 0 === dt.exports ? "undefined" : e(dt.exports)) &&
          dt.exports &&
          !dt.exports.nodeType &&
          dt.exports,
        o = "object" == e(dt) && dt && !dt.nodeType && dt,
        i = "object" == (void 0 === t ? "undefined" : e(t)) && t;
      (i.global !== i && i.window !== i && i.self !== i) || (n = i);
      var s,
        a,
        u = 2147483647,
        h = 36,
        c = 1,
        l = 26,
        f = 38,
        L = 700,
        d = 72,
        p = 128,
        m = "-",
        C = /^xn--/,
        v = /[^\x20-\x7E]/,
        y = /[\x2E\u3002\uFF0E\uFF61]/g,
        b = {
          overflow: "Overflow: input needs wider integers to process",
          "not-basic": "Illegal input >= 0x80 (not a basic code point)",
          "invalid-input": "Invalid input",
        },
        w = h - c,
        g = Math.floor,
        _ = String.fromCharCode;
      function A(t) {
        throw new RangeError(b[t]);
      }
      function E(t, e) {
        for (var n = t.length, r = []; n--; ) r[n] = e(t[n]);
        return r;
      }
      function S(t, e) {
        var n = t.split("@"),
          r = "";
        return (
          n.length > 1 && ((r = n[0] + "@"), (t = n[1])),
          r + E((t = t.replace(y, ".")).split("."), e).join(".")
        );
      }
      function N(t) {
        for (var e, n, r = [], o = 0, i = t.length; o < i; )
          (e = t.charCodeAt(o++)) >= 55296 && e <= 56319 && o < i
            ? 56320 == (64512 & (n = t.charCodeAt(o++)))
              ? r.push(((1023 & e) << 10) + (1023 & n) + 65536)
              : (r.push(e), o--)
            : r.push(e);
        return r;
      }
      function O(t) {
        return E(t, function (t) {
          var e = "";
          return (
            t > 65535 &&
              ((e += _((((t -= 65536) >>> 10) & 1023) | 55296)),
              (t = 56320 | (1023 & t))),
            e + _(t)
          );
        }).join("");
      }
      function T(t, e) {
        return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
      }
      function x(t, e, n) {
        var r = 0;
        for (t = n ? g(t / L) : t >> 1, t += g(t / e); t > (w * l) >> 1; r += h)
          t = g(t / w);
        return g(r + ((w + 1) * t) / (t + f));
      }
      function I(t) {
        var e,
          n,
          r,
          o,
          i,
          s,
          a,
          f,
          L,
          C,
          v,
          y = [],
          b = t.length,
          w = 0,
          _ = p,
          E = d;
        for ((n = t.lastIndexOf(m)) < 0 && (n = 0), r = 0; r < n; ++r)
          t.charCodeAt(r) >= 128 && A("not-basic"), y.push(t.charCodeAt(r));
        for (o = n > 0 ? n + 1 : 0; o < b; ) {
          for (
            i = w, s = 1, a = h;
            o >= b && A("invalid-input"),
              ((f =
                (v = t.charCodeAt(o++)) - 48 < 10
                  ? v - 22
                  : v - 65 < 26
                  ? v - 65
                  : v - 97 < 26
                  ? v - 97
                  : h) >= h ||
                f > g((u - w) / s)) &&
                A("overflow"),
              (w += f * s),
              !(f < (L = a <= E ? c : a >= E + l ? l : a - E));
            a += h
          )
            s > g(u / (C = h - L)) && A("overflow"), (s *= C);
          (E = x(w - i, (e = y.length + 1), 0 == i)),
            g(w / e) > u - _ && A("overflow"),
            (_ += g(w / e)),
            (w %= e),
            y.splice(w++, 0, _);
        }
        return O(y);
      }
      function j(t) {
        var e,
          n,
          r,
          o,
          i,
          s,
          a,
          f,
          L,
          C,
          v,
          y,
          b,
          w,
          E,
          S = [];
        for (y = (t = N(t)).length, e = p, n = 0, i = d, s = 0; s < y; ++s)
          (v = t[s]) < 128 && S.push(_(v));
        for (r = o = S.length, o && S.push(m); r < y; ) {
          for (a = u, s = 0; s < y; ++s) (v = t[s]) >= e && v < a && (a = v);
          for (
            a - e > g((u - n) / (b = r + 1)) && A("overflow"),
              n += (a - e) * b,
              e = a,
              s = 0;
            s < y;
            ++s
          )
            if (((v = t[s]) < e && ++n > u && A("overflow"), v == e)) {
              for (
                f = n, L = h;
                !(f < (C = L <= i ? c : L >= i + l ? l : L - i));
                L += h
              )
                (E = f - C),
                  (w = h - C),
                  S.push(_(T(C + (E % w), 0))),
                  (f = g(E / w));
              S.push(_(T(f, 0))), (i = x(n, b, r == o)), (n = 0), ++r;
            }
          ++n, ++e;
        }
        return S.join("");
      }
      if (
        ((s = {
          version: "1.4.1",
          ucs2: { decode: N, encode: O },
          decode: I,
          encode: j,
          toASCII: function (t) {
            return S(t, function (t) {
              return v.test(t) ? "xn--" + j(t) : t;
            });
          },
          toUnicode: function (t) {
            return S(t, function (t) {
              return C.test(t) ? I(t.slice(4).toLowerCase()) : t;
            });
          },
        }),
        "function" == typeof define && "object" == e(define.amd) && define.amd)
      )
        define("punycode", function () {
          return s;
        });
      else if (r && o)
        if (dt.exports == r) o.exports = s;
        else for (a in s) s.hasOwnProperty(a) && (r[a] = s[a]);
      else n.punycode = s;
    })(this);
  }.call(
    this,
    "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : {}
  ),
    (dt = dt.exports));
  var pt =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          },
    mt = {
      isString: function (t) {
        return "string" == typeof t;
      },
      isObject: function (t) {
        return "object" === (void 0 === t ? "undefined" : pt(t)) && null !== t;
      },
      isNull: function (t) {
        return null === t;
      },
      isNullOrUndefined: function (t) {
        return null == t;
      },
    };
  function Ct(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }
  var vt =
      Array.isArray ||
      function (t) {
        return "[object Array]" === Object.prototype.toString.call(t);
      },
    yt =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          },
    bt = function (t) {
      switch (void 0 === t ? "undefined" : yt(t)) {
        case "string":
          return t;
        case "boolean":
          return t ? "true" : "false";
        case "number":
          return isFinite(t) ? t : "";
        default:
          return "";
      }
    },
    wt =
      Array.isArray ||
      function (t) {
        return "[object Array]" === Object.prototype.toString.call(t);
      };
  function gt(t, e) {
    if (t.map) return t.map(e);
    for (var n = [], r = 0; r < t.length; r++) n.push(e(t[r], r));
    return n;
  }
  var _t =
      Object.keys ||
      function (t) {
        var e = [];
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
        return e;
      },
    At = {
      parse: function (t, e, n, r) {
        (e = e || "&"), (n = n || "=");
        var o = {};
        if ("string" != typeof t || 0 === t.length) return o;
        var i = /\+/g;
        t = t.split(e);
        var s = 1e3;
        r && "number" == typeof r.maxKeys && (s = r.maxKeys);
        var a = t.length;
        s > 0 && a > s && (a = s);
        for (var u = 0; u < a; ++u) {
          var h,
            c,
            l,
            f,
            L = t[u].replace(i, "%20"),
            d = L.indexOf(n);
          d >= 0
            ? ((h = L.substr(0, d)), (c = L.substr(d + 1)))
            : ((h = L), (c = "")),
            (l = decodeURIComponent(h)),
            (f = decodeURIComponent(c)),
            Ct(o, l)
              ? vt(o[l])
                ? o[l].push(f)
                : (o[l] = [o[l], f])
              : (o[l] = f);
        }
        return o;
      },
      stringify: function (t, e, n, r) {
        return (
          (e = e || "&"),
          (n = n || "="),
          null === t && (t = void 0),
          "object" === (void 0 === t ? "undefined" : yt(t))
            ? gt(_t(t), function (r) {
                var o = encodeURIComponent(bt(r)) + n;
                return wt(t[r])
                  ? gt(t[r], function (t) {
                      return o + encodeURIComponent(bt(t));
                    }).join(e)
                  : o + encodeURIComponent(bt(t[r]));
              }).join(e)
            : r
            ? encodeURIComponent(bt(r)) + n + encodeURIComponent(bt(t))
            : ""
        );
      },
    },
    Et = {};
  (function (t) {
    "function" == typeof Symbol && Symbol.iterator, (Et = n);
    var e = (n.events = {
      INSTALLED: "sw:installed",
      UPDATED: "sw:updated",
      REDUNDANT: "sw:redundant",
      POST_MESSAGE: "sw:postMessage",
      MESSAGE: "sw:message",
      SYNC: "sw:sync",
      NOTIFICATION_REQUEST: "sw:notificationRequest",
      ERROR: "log:error",
    });
    function n(n, i) {
      return (
        (n = n || "/sw.js"),
        (i = i || {}),
        function (s, a) {
          a.on(s.events.DOMCONTENTLOADED, function () {
            if ((i = Object.assign({ scope: "/" }, i)).electron) {
              var u = o({}),
                h = r({});
              (i.scope = u.join(t, i.scope)),
                (n = h.format({
                  pathname: u.join(t, n.replace(/^\//, "")),
                  protocol: "file:",
                  slashes: !0,
                })),
                delete i.electron;
            }
            if (
              ((window.onmessage = function (t) {
                a.emit(e.MESSAGE, {
                  data: t.data,
                  channel: "window",
                  port: null,
                });
              }),
              window.MessageChannel)
            ) {
              var c = new MessageChannel();
              (c.port1.onmessage = function (t) {
                a.emit(e.MESSAGE, {
                  data: t.data,
                  channel: "messageChannel",
                  port: "port1",
                });
              }),
                (c.port2.onmessage = function (t) {
                  a.emit(e.MESSAGE, {
                    data: t.data,
                    channel: "messageChannel",
                    port: "port2",
                  });
                });
            }
            a.on(e.NOTIFICATION_REQUEST, function (t) {
              Notification.requestPermission(function (e) {
                "function" == typeof e && t(e);
              });
            }),
              navigator.serviceWorker &&
                navigator.onLine &&
                ((navigator.serviceWorker.onmessage = function (t) {
                  a.emit(e.MESSAGE, {
                    data: t.data,
                    channel: "navigator.serviceWorker",
                    port: null,
                  });
                }),
                navigator.serviceWorker
                  .register(n, i)
                  .then(function (t) {
                    (t.onupdatefound = function () {
                      var n = t.installing;
                      n.onstatechange = function () {
                        "installed" === n.state
                          ? navigator.serviceWorker.controller
                            ? a.emit(e.UPDATED, t)
                            : a.emit(e.INSTALLED, t)
                          : "redundant" === n.state && a.emit(e.REDUNDANT, t);
                      };
                    }),
                      t.sync &&
                        (function (t) {
                          t.sync
                            .getTags()
                            .then(function (t) {
                              s.syncTags = t;
                            })
                            .catch(function (t) {
                              a.emit(e.ERROR, t);
                            });
                        })(t);
                  })
                  .catch(function (t) {
                    a.emit(e.ERROR, t);
                  }),
                navigator.serviceWorker.ready
                  .then(function (t) {
                    new Promise(function (n) {
                      var r = t.active;
                      "activated" !== r.state
                        ? (r.addEventListener("statechange", n, { once: !0 }),
                          a.on(e.POST_MESSAGE, function (t) {
                            r.postMessage(t);
                          }))
                        : n();
                    }).then(function () {
                      t.navigationPreload && t.navigationPreload.enable();
                    }),
                      a.on(e.SYNC, function (n) {
                        t.sync
                          .register(n)
                          .then(function () {
                            return t.sync.getTags();
                          })
                          .then(function (t) {
                            s.syncTags = t;
                          })
                          .catch(function (t) {
                            a.emit(e.ERROR, t);
                          });
                      });
                  })
                  .catch(function (t) {
                    a.emit(e.ERROR, t);
                  }));
          });
        }
      );
    }
  }.call(this, "/node_modules/choo-service-worker"));
  var St = {},
    Nt = {};
  (function (t) {
    var e,
      n = void 0 !== t ? t : "undefined" != typeof window ? window : {};
    "undefined" != typeof document
      ? (e = document)
      : (e = n["__GLOBAL_DOCUMENT_CACHE@4"]) ||
        (e = n["__GLOBAL_DOCUMENT_CACHE@4"] = St),
      (Nt = e);
  }.call(
    this,
    "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : {}
  ));
  var Ot = {};
  (function (t) {
    var e;
    (e =
      "undefined" != typeof window
        ? window
        : void 0 !== t
        ? t
        : "undefined" != typeof self
        ? self
        : {}),
      (Ot = e);
  }.call(
    this,
    "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : {}
  ));
  var Tt,
    xt = Object.create(null),
    It = "onloadid" + (new Date() % 9e6).toString(36),
    jt = "data-" + It,
    Mt = 0;
  if (Ot && Ot.MutationObserver) {
    var Rt = new MutationObserver(function (t) {
      if (!(Object.keys(xt).length < 1))
        for (var e = 0; e < t.length; e++)
          t[e].attributeName !== jt
            ? (Ut(t[e].removedNodes, Pt), Ut(t[e].addedNodes, kt))
            : ((n = t[e]),
              (r = kt),
              (o = Pt),
              (i = void 0),
              (i = n.target.getAttribute(jt)),
              (function (t, e) {
                return !(!t || !e) && xt[t][3] === xt[e][3];
              })(n.oldValue, i)
                ? (xt[i] = xt[n.oldValue])
                : (xt[n.oldValue] && o(n.oldValue, n.target),
                  xt[i] && r(i, n.target)));
      var n, r, o, i;
    });
    Nt.body
      ? Dt(Rt)
      : Nt.addEventListener("DOMContentLoaded", function (t) {
          Dt(Rt);
        });
  }
  function Dt(t) {
    t.observe(Nt.documentElement, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeOldValue: !0,
      attributeFilter: [jt],
    });
  }
  function kt(t, e) {
    xt[t][0] && 0 === xt[t][2] && (xt[t][0](e), (xt[t][2] = 1));
  }
  function Pt(t, e) {
    xt[t][1] && 1 === xt[t][2] && (xt[t][1](e), (xt[t][2] = 0));
  }
  function Ut(t, e) {
    for (var n = Object.keys(xt), r = 0; r < t.length; r++) {
      if (t[r] && t[r].getAttribute && t[r].getAttribute(jt)) {
        var o = t[r].getAttribute(jt);
        n.forEach(function (n) {
          o === n && e(n, t[r]);
        });
      }
      t[r].childNodes.length > 0 && Ut(t[r].childNodes, e);
    }
  }
  (Tt = function t(e, n, r, o) {
    return (
      (n = n || function () {}),
      (r = r || function () {}),
      e.setAttribute(jt, "o" + Mt),
      (xt["o" + Mt] = [n, r, 0, o || t.caller]),
      (Mt += 1),
      e
    );
  }).KEY_ATTR = jt;
  var qt,
    Zt = (Tt.KEY_ID = It),
    Vt = Tt.KEY_ATTR;
  function $t(t) {
    (this._hasWindow = "undefined" != typeof window),
      (this._id = null),
      (this._ncID = null),
      (this._olID = null),
      (this._proxy = null),
      (this._loaded = !1),
      (this._rootNodeName = null),
      (this._name = t || "nanocomponent"),
      (this._rerender = !1),
      (this._handleLoad = this._handleLoad.bind(this)),
      (this._handleUnload = this._handleUnload.bind(this)),
      (this._arguments = []);
    var e = this;
    Object.defineProperty(this, "element", {
      get: function () {
        var t = Nt.getElementById(e._id);
        if (t) return t.dataset.nanocomponent === e._ncID ? t : void 0;
      },
    });
  }
  (qt = $t),
    ($t.prototype.render = function () {
      for (
        var t,
          e = L(this._name + ".render"),
          n = new Array(arguments.length),
          r = 0;
        r < arguments.length;
        r++
      )
        n[r] = arguments[r];
      if (this._hasWindow) {
        if (this.element) {
          t = this.element;
          var o = L(this._name + ".update"),
            i = this._rerender || this.update.apply(this, n);
          if ((o(), this._rerender && (this._rerender = !1), i)) {
            var s = this._handleRender(n),
              a = L(this._name + ".morph");
            P(t, s), a(), this.afterupdate && this.afterupdate(t);
          }
          return (
            this._proxy || (this._proxy = this._createProxy()), e(), this._proxy
          );
        }
        return (
          this._reset(),
          (t = this._handleRender(n)),
          this.beforerender && this.beforerender(t),
          (this.load || this.unload || this.afterreorder) &&
            (Tt(t, this._handleLoad, this._handleUnload, this._ncID),
            (this._olID = t.dataset[Zt])),
          e(),
          t
        );
      }
      var u = L(this._name + ".create");
      return (t = this.createElement.apply(this, n)), u(), e(), t;
    }),
    ($t.prototype.rerender = function () {
      (this._rerender = !0), this.render.apply(this, this._arguments);
    }),
    ($t.prototype._handleRender = function (t) {
      var e = L(this._name + ".createElement"),
        n = this.createElement.apply(this, t);
      return (
        e(),
        this._rootNodeName || (this._rootNodeName = n.nodeName),
        (this._arguments = t),
        this._brandNode(this._ensureID(n))
      );
    }),
    ($t.prototype._createProxy = function () {
      var t = Nt.createElement(this._rootNodeName),
        e = this;
      return (
        this._brandNode(t),
        (t.id = this._id),
        t.setAttribute("data-proxy", ""),
        (t.isSameNode = function (t) {
          return t && t.dataset.nanocomponent === e._ncID;
        }),
        t
      );
    }),
    ($t.prototype._reset = function () {
      (this._ncID =
        "ncid-" +
        Math.floor(65536 * (1 + Math.random()))
          .toString(16)
          .substring(1)),
        (this._olID = null),
        (this._id = null),
        (this._proxy = null),
        (this._rootNodeName = null);
    }),
    ($t.prototype._brandNode = function (t) {
      return (
        t.setAttribute("data-nanocomponent", this._ncID),
        this._olID && t.setAttribute(Vt, this._olID),
        t
      );
    }),
    ($t.prototype._ensureID = function (t) {
      return (
        t.id ? (this._id = t.id) : (t.id = this._id = this._ncID),
        this._proxy &&
          this._proxy.id !== this._id &&
          (this._proxy.id = this._id),
        t
      );
    }),
    ($t.prototype._handleLoad = function (t) {
      this._loaded
        ? this.afterreorder && this.afterreorder(t)
        : ((this._loaded = !0), this.load && this.load(t));
    }),
    ($t.prototype._handleUnload = function (t) {
      this.element || ((this._loaded = !1), this.unload && this.unload(t));
    }),
    ($t.prototype.createElement = function () {
      throw new Error("nanocomponent: createElement should be implemented!");
    }),
    ($t.prototype.update = function () {
      throw new Error("nanocomponent: update should be implemented!");
    });
  var Gt = qt,
    Wt = (function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    })(),
    Ht = new ((function (t) {
      function e(t, n, r) {
        return (
          (function (t, n) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this),
          (function (t, e) {
            if (!t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !e || ("object" != typeof e && "function" != typeof e)
              ? t
              : e;
          })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this))
        );
      }
      return (
        (function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (t.__proto__ = e));
        })(e, Gt),
        Wt(e, [
          {
            key: "createElement",
            value: function () {
              return (function () {
                var t = n({}),
                  e = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "svg"
                  );
                e.setAttributeNS(null, "width", "50%"),
                  e.setAttributeNS(null, "viewBox", "0 0 854 252"),
                  e.setAttributeNS(null, "version", "1.1");
                var r = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "title"
                );
                t(r, ["wordwang"]);
                var o = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "g"
                );
                o.setAttributeNS(null, "id", "github"),
                  o.setAttributeNS(null, "stroke", "none"),
                  o.setAttributeNS(null, "stroke-width", "1"),
                  o.setAttributeNS(null, "fill", "none"),
                  o.setAttributeNS(null, "fill-rule", "evenodd");
                var i = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "g"
                );
                i.setAttributeNS(null, "id", "wordwang"),
                  i.setAttributeNS(
                    null,
                    "transform",
                    "translate(-213.000000, -194.000000)"
                  ),
                  i.setAttributeNS(null, "fill", "#000000"),
                  i.setAttributeNS(null, "fill-rule", "nonzero"),
                  i.setAttributeNS(null, "stroke", "#000000");
                var s = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "path"
                );
                return (
                  s.setAttributeNS(
                    null,
                    "d",
                    "M231.846154,357 L232.615499,356.848459 L232.922699,356.787687 L234.064853,356.561739 L235.268447,356.323325 L236.542933,356.070887 L236.724102,356.035047 L237.652004,355.851172 L237.872557,355.807541 L238,355.782609 C237.179487,349.289855 232.871795,321.289855 225.076923,271.782609 C221.794872,250.681159 220.153846,237.086957 220.153846,231 L214,231 C214,237.492754 215.641026,251.492754 218.923077,273 C226.717949,322.101449 231.025641,350.101449 231.846154,357 Z M313.212121,407.666667 C312.808081,406.444444 312.505051,405.222222 312.30303,404 L311.69697,400.333333 L311.69697,400.333333 C311.494949,399.111111 311.292929,397.685185 311.090909,396.055556 C310.888889,394.425926 310.686869,393 310.484848,391.777778 C310.282828,390.555556 309.979798,389.231481 309.575758,387.805556 C309.171717,386.37963 308.767677,384.851852 308.363636,383.222222 C303.515152,364.888889 299.676768,346.148148 296.848485,327 L296.815094,327.006844 L296.813138,326.96448 C296.597693,324.124832 295.397354,313.340376 293.212121,294.611111 C292.808081,291.759259 292.40404,284.833333 292,273.833333 C292,271.796296 290.888889,270.675926 288.666667,270.472222 C286.444444,270.268519 285.333333,271.388889 285.333333,273.833333 C285.333333,283.611111 282.10101,304.592593 275.636364,336.777778 C269.575758,368.555556 263.515152,391.37037 257.454545,405.222222 C257.050505,406.037037 255.535354,408.481481 252.909091,412.555556 C251.033189,415.465608 249.260359,418.375661 247.5906,421.285714 L247.337276,421.732391 L247.306122,421.06746 C247.203051,418.884921 247.151515,417.066138 247.151515,415.611111 C247.151515,402.981481 244.121212,383.018519 238.060606,355.722222 L237.935094,355.747253 L237.717882,355.791058 L236.80404,355.975662 L236.625616,356.011644 L235.37044,356.265084 L234.185082,356.504444 L233.060234,356.731289 L232.757688,356.792302 L232,356.944444 C237.656566,383.833333 240.484848,403.388889 240.484848,415.611111 C240.484848,417.648148 240.686869,420.5 241.090909,424.166667 C241.494949,427.833333 241.69697,430.685185 241.69697,432.722222 C241.292929,435.574074 242.505051,437 245.333333,437 L245.332719,433.944444 L248.363636,433.944444 C248.363636,433.537037 249.070707,432.111111 250.484848,429.666667 C251.89899,427.222222 253.414141,424.675926 255.030303,422.027778 C256.646465,419.37963 258.262626,416.62963 259.878788,413.777778 C261.494949,410.925926 262.707071,408.888889 263.515152,407.666667 C269.086012,393.623457 275.048761,370.886831 281.4034,339.45679 L281.69697,338 C284.345138,324.648817 286.450911,313.177658 288.014287,303.586523 L288.076961,303.192871 L288.103707,303.41967 C289.893155,318.904627 290.787879,327.172144 290.787879,328.222222 C293.212121,347.37037 297.050505,366.314815 302.30303,385.055556 C303.111111,387.092593 303.717172,389.638889 304.121212,392.694444 C304.525253,395.75 304.929293,398.703704 305.333333,401.555556 C305.737374,404.407407 306.343434,407.055556 307.151515,409.5 L307.218004,409.48592 L307.250421,409.769483 C307.605359,412.866062 307.875421,414.507716 308.060606,414.694444 C308.262626,414.898148 308.464646,415.509259 308.666667,416.527778 C308.868687,417.546296 309.070707,418.666667 309.272727,419.888889 C309.474747,421.111111 309.878788,422.537037 310.484848,424.166667 C311.090909,425.796296 311.69697,427.324074 312.30303,428.75 C312.909091,430.175926 313.616162,431.5 314.424242,432.722222 C315.232323,433.944444 316.242424,434.759259 317.454545,435.166667 C320.686869,436.796296 323.313131,435.166667 325.333333,430.277778 L324.824597,430.074009 L325.234385,429.223923 C326.223871,427.103741 327.064935,424.90873 327.757576,422.638889 L330.181818,414.694444 L330.181818,414.694444 C330.989899,412.046296 331.59596,409.398148 332,406.75 C332.40404,404.101852 332.909091,401.351852 333.515152,398.5 C334.121212,395.648148 334.525253,393.101852 334.727273,390.861111 C334.929293,388.62037 335.232323,385.972222 335.636364,382.916667 C336.040404,379.861111 336.444444,377.314815 336.848485,375.277778 C343.064491,338.454416 347.599486,302.196061 350.45347,266.502712 L350.787652,262.2232 L350.821783,261.682757 C351.607261,248.959458 352,226.731873 352,195 L345.939394,195 C345.939394,227.185185 345.535354,249.388889 344.727273,261.611111 C341.494949,298.277778 336.848485,335.759259 330.787879,374.055556 C330.383838,376.092593 329.676768,380.472222 328.666667,387.194444 C327.656566,393.916667 326.949495,398.907407 326.545455,402.166667 C326.141414,405.425926 325.232323,409.5 323.818182,414.388889 C322.40404,419.277778 320.888889,423.759259 319.272727,427.833333 C318.464646,426.203704 316.646465,421.111111 313.818182,412.555556 L313.818182,410.111111 L313.818182,410.111111 L313.212121,408.277778 L310.181818,408.888889 L313.212121,407.666667 Z M382.142857,427.34375 C379.714286,426.9375 377.994048,426.429688 376.982143,425.820312 C375.970238,425.210938 374.654762,423.890625 373.035714,421.859375 C371.563853,420.012784 370.259248,418.501937 369.121901,417.326834 L369.115247,417.322115 L369.032366,417.07959 C368.104787,414.455892 366.333953,410.98584 363.719866,406.669434 L363.321429,406.015625 C360.083333,400.734375 358.059524,396.671875 357.25,393.828125 L354.214286,395.046875 L356.035714,392.609375 C354.011905,390.578125 353,381.640625 353,365.796875 L353,331.671875 C353.404762,328.015625 353.809524,322.429688 354.214286,314.914062 C354.619048,307.398438 355.02381,301.304688 355.428571,296.632812 C355.833333,291.960938 356.642857,286.476562 357.857143,280.179688 C358.984694,274.332589 360.286747,269.098493 361.763302,264.4774 L362.107143,263.421875 C363.321429,258.953125 365.85119,253.773438 369.696429,247.882812 C373.541667,241.992188 376.880952,238.03125 379.714286,236 L388.820481,236 L389.315886,236.00195 C393.341486,236.03315 399.045714,236.43875 406.428571,237.21875 C411.042857,237.70625 415.001429,238.0475 418.304286,238.2425 L418.60215,238.260635 L418.607893,238.283966 C418.99467,240.379486 419.488467,243.477539 420.089286,247.578125 C421.10119,254.484375 421.607143,258.75 421.607143,260.375 L424.642857,260.375 L421.607143,260.984375 C422.821429,267.484375 424.642857,277.84375 427.071429,292.0625 L427.18647,292.040075 L427.236032,292.276458 C428.016772,296.169236 428.97381,300.769792 430.107143,306.078125 C431.321429,311.765625 432.434524,317.148438 433.446429,322.226562 C434.458333,327.304688 434.964286,331.875 434.964286,335.9375 L438,335.9375 L434.964286,336.546875 C437.797619,350.359375 438,363.15625 435.571429,374.9375 C432.333333,396.875 427.27381,411.5 420.392857,418.8125 C415.130952,426.9375 409.666667,431 404,431 C393.880952,431 386.797619,429.984375 382.75,427.953125 L380.928571,430.390625 L382.142857,427.34375 Z M428.193548,260.108504 C428.193548,247.517505 426.971827,238.706259 424.528386,233.674768 L424.51189,233.643975 L424.51324,232.049853 C424.250361,232.049853 423.97705,232.04726 423.693308,232.042073 L423.602707,232.041851 L423.460642,231.827285 C423.20822,231.46359 422.945702,231.131132 422.673086,230.829912 L421.531528,231.963774 L421.369644,231.954545 C417.842682,231.76393 413.165623,231.28739 407.338469,230.524927 C399.56893,229.508309 393.435083,229 388.936928,229 C381.985235,229 377.896004,229.406647 376.669234,230.219941 C367.672926,235.506354 360.721233,245.875855 355.814155,261.328446 C353.360616,268.241447 351.622693,275.154448 350.600385,282.067449 C349.578077,288.98045 348.658,298.434995 347.840154,310.431085 C347.022308,322.427175 346.613385,329.238514 346.613385,330.865103 L349.680308,331.475073 L346.613385,331.475073 L346.613385,365.633431 C346.613385,366.040078 346.511154,368.174976 346.306692,372.038123 C346.102231,375.901271 346,378.951124 346,381.187683 C346,383.424242 346.511154,386.16911 347.533462,389.422287 C348.482748,392.443095 349.696477,394.937958 351.174651,396.906877 L351.251186,397.00759 L351.266997,397.0444 C352.551219,400.16987 354.680323,404.135519 357.654309,408.941349 C360.925694,414.227761 362.765848,418.090909 363.174771,420.530792 L366.240934,419.31085 L364.401541,421.750733 C364.810464,422.15738 365.730541,423.173998 367.161772,424.800587 C368.593003,426.427175 369.717541,427.647116 370.535388,428.460411 C371.353234,429.273705 372.682234,430.188661 374.522388,431.205279 C376.158081,432.108939 377.874548,432.771623 379.67179,433.193331 L379.784468,433.219353 L379.736158,433.340176 C385.052159,435.780059 393.230621,437 404.271545,437 C411.875776,437 418.892445,432.325675 425.321553,422.977025 L425.491736,422.725905 L425.74001,422.970674 C433.384234,414.968909 438.851347,399.684891 442.141348,377.11862 L442.301396,376.002933 C444.754935,363.396872 444.550473,349.774194 441.688012,335.134897 L441.682736,335.136849 L441.672693,334.535082 C441.524613,328.546664 440.302949,320.511998 438.007703,310.431085 C435.554165,299.654936 434.327395,293.046921 434.327395,290.607038 C431.464933,276.374389 429.420318,266.208211 428.193548,260.108504 Z M496.723404,237.376623 C494.690307,236.155844 492.65721,235.138528 490.624113,234.324675 C488.591017,233.510823 486.761229,232.69697 485.134752,231.883117 C483.508274,231.069264 481.576832,230.458874 479.340426,230.051948 C477.104019,229.645022 475.375887,229.238095 474.156028,228.831169 C472.93617,228.424242 471.208038,228.119048 468.971631,227.915584 C466.735225,227.712121 465.108747,227.508658 464.092199,227.305195 C463.14342,227.115296 461.48622,227.014016 459.120599,227.001356 L440.609929,227 L440.609929,227 L440.609929,233.103896 L440,233.103896 L443.049645,233.714286 L443.049645,233.103896 L458.297872,233.103896 L458.297872,233.103896 C460.737589,233.103896 462.465721,233.205628 463.48227,233.409091 C464.498818,233.612554 466.023641,233.816017 468.056738,234.019481 C470.089835,234.222944 471.716312,234.528139 472.93617,234.935065 C474.156028,235.341991 475.680851,235.748918 477.510638,236.155844 C479.340426,236.562771 481.068558,237.071429 482.695035,237.681818 C484.321513,238.292208 486.1513,239.004329 488.184397,239.818182 C490.217494,240.632035 492.250591,241.649351 494.283688,242.87013 L494.34037,242.725785 L494.455912,242.804251 C511.012491,254.417401 519.29078,265.8333 519.29078,277.051948 C519.29078,278.150649 519.373121,279.578961 519.537801,281.336883 L519.595745,281.935065 C519.799054,283.969697 519.900709,285.597403 519.900709,286.818182 L519.900709,295.974026 L519.900709,295.974026 C519.08747,300.450216 513.191489,307.164502 502.212766,316.116883 L504.042553,318.558442 L504.117973,318.660206 L504.119534,318.663331 L504.225711,318.805527 L504.231956,318.81334 L504.233518,318.814903 L504.28036,318.877407 L504.319396,318.928972 L504.330326,318.944598 L504.431818,319.080544 L504.444309,319.09617 L504.498959,319.169612 L504.527064,319.207115 L504.53331,319.214928 L504.605135,319.310246 L504.630118,319.344623 L504.637925,319.353999 L504.672276,319.400877 L504.726926,319.472756 L504.783137,319.549324 L504.820611,319.597764 L504.898682,319.702458 L504.911173,319.719647 L504.91898,319.730585 L505.001736,319.839967 L505.045455,319.899345 L505.048578,319.902471 L505.064192,319.924347 L505.087614,319.955599 L505.17193,320.068106 L505.185983,320.085295 L505.201597,320.107171 L505.256247,320.17905 L505.323388,320.269681 L505.335879,320.285307 L505.335879,320.28687 L505.396774,320.368125 L505.415511,320.391564 L505.45767,320.447817 L505.47953,320.477506 L505.49046,320.493132 L505.513881,320.522822 L505.565408,320.591576 L505.607566,320.64783 L505.616934,320.661893 L505.635671,320.686895 L505.705935,320.78065 L505.749655,320.838466 L505.773076,320.869718 L505.83241,320.949411 L505.838656,320.957224 L505.87234,321 C518.477541,310.82684 525.186761,302.688312 526,296.584416 L526,277.051948 L526,277.051948 C526,263.21645 516.444444,249.991342 497.333333,237.376623 L495.503546,239.818182 L496.723404,237.376623 Z M437,233.695312 L440,233.304688 L437,233.304688 L437,233.695312 Z M486.478261,416 L486.577699,415.826612 L486.857184,415.339167 L486.90076,415.263935 L487.14268,414.842318 L487.325998,414.525714 L487.435688,414.334498 L487.733205,413.817273 L487.752739,413.782792 L488.036732,413.289078 L488.180982,413.038302 L488.23913,412.938776 L488.374819,412.74991 L488.442436,412.654302 L488.451452,412.641763 L488.657309,412.356506 L488.676843,412.328294 L488.705393,412.28911 L488.768502,412.201339 L488.881198,412.044604 L488.91125,412.002286 L489.114102,411.720163 L489.156175,411.662171 L489.172704,411.640229 L489.244829,411.538351 L489.357525,411.381616 L489.411619,411.307951 L489.581414,411.071282 L489.609963,411.030531 L489.676078,410.939624 L489.787271,410.784457 L489.87292,410.665339 L489.949553,410.558759 L490,410.489796 C479.826087,402.734694 472.782609,394.571429 468.869565,386 L468.813859,386.02351 L468.378102,386.205322 L467.859702,386.421616 L467.371355,386.625371 L467.225601,386.686498 L467.108398,386.735086 L466.950624,386.800914 L466.109163,387.152 L466.079111,387.164539 L465.934783,387.22449 L465.861233,387.255445 L465.357859,387.465469 L465.252676,387.509355 L465.034798,387.600261 L464.468315,387.836931 L464.403702,387.863576 L463.997998,388.032849 L463.60732,388.195853 L463,388.44898 C467.695652,398.244898 475.521739,407.428571 486.478261,416 Z M513.617021,432 L513.66781,431.86624 L513.724239,431.722311 L513.783718,431.568996 L513.847773,431.404729 L513.914877,431.23264 L513.986557,431.051164 L514.061288,430.860302 L514.139068,430.660053 L514.221424,430.448853 L514.30683,430.229831 L514.395286,430.001422 L514.488317,429.763627 L514.569148,429.555556 L514.572198,429.546169 L514.584399,429.518009 L514.584399,429.516444 L514.6027,429.471076 L514.628627,429.403804 L514.66218,429.31776 L514.685056,429.258311 L514.703357,429.212942 L514.752161,429.087787 L514.788763,428.992356 L514.808511,428.944444 L514.895521,428.717013 L514.979402,428.504249 L515.008379,428.43072 L515.043456,428.341547 L515.109036,428.172587 L515.122762,428.136604 L515.177666,427.99424 L515.24172,427.833102 L515.250871,427.809636 L515.325601,427.617209 L515.363729,427.518649 L515.403381,427.41696 L515.46286,427.266773 L515.490312,427.196373 L515.519289,427.119716 L515.574193,426.978916 L515.619946,426.864711 L515.629097,426.83968 L515.680951,426.706702 L515.731279,426.576853 L515.752631,426.522098 L515.780083,426.451698 L515.827361,426.331236 L515.873114,426.213902 L515.88989,426.171662 L515.917342,426.101262 L515.960045,425.993316 L516,425.888889 C510.836879,424.259259 502.695035,418.962963 491.574468,410 L491.523266,410.068836 L491.445485,410.175218 L491.358554,410.294116 L491.245696,410.448996 L491.178592,410.539733 L491.149615,410.580409 L490.977277,410.81664 L490.922374,410.890169 L490.807991,411.046613 L490.734786,411.148302 L490.718009,411.170204 L490.675306,411.228089 L490.469417,411.509689 L490.438915,411.551929 L490.324532,411.708373 L490.260477,411.795982 L490.2315,411.835093 L490.211674,411.863253 L490.002735,412.147982 L489.993584,412.160498 L489.924954,412.255929 L489.787234,412.444444 L489.728215,412.543787 L489.581805,412.794098 L489.29356,413.286898 L489.273734,413.321316 L488.971763,413.837582 L488.86043,414.028444 L488.674367,414.344462 L488.428825,414.765298 L488.384597,414.840391 L488.100927,415.326933 L488,415.5 C499.914894,424.462963 508.453901,429.962963 513.617021,432 Z M450.784483,316.77994 C449.376437,316.166168 448.068966,315.859281 446.862069,315.859281 C446.45977,315.4501 445.252874,315.245509 443.241379,315.245509 L443.240494,318.314568 L442.773956,318.314568 L442.790888,318.152404 C442.923591,316.845296 443.073755,315.467149 443.241379,314.017964 L439.62069,313.404192 L443.241379,313.404192 L443.24195,312.256704 C443.250315,303.646099 443.3507,290.730192 443.543103,273.508982 C443.744253,255.50499 443.844828,242.001996 443.844828,233 L437.206897,233 C437.206897,242.001996 437.106322,255.402695 436.905172,273.202096 C436.704023,291.001497 436.603448,304.402196 436.603448,313.404192 C436.201149,318.314371 436,323.531437 436,329.055389 C436,334.579341 436.100575,340.717066 436.301724,347.468563 C436.502874,354.22006 436.603448,359.232535 436.603448,362.505988 L439.62069,362.505988 L436.603448,363.11976 C437.005747,365.57485 437.206897,369.462076 437.206897,374.781437 C437.206897,380.100798 437.408046,384.397206 437.810345,387.670659 C439.017241,399.946108 439.62069,408.129741 439.62069,412.221557 L439.62069,434.317365 C439.218391,435.135729 439.017241,436.363273 439.017241,438 L445.051724,438 C445.454023,437.181637 445.655172,435.954092 445.655172,434.317365 L445.655172,412.221557 C445.655172,408.129741 445.051724,399.741517 443.844828,387.056886 C443.442529,384.601796 443.341954,380.612275 443.543103,375.088323 C443.744253,369.564371 443.643678,365.370259 443.241379,362.505988 C443.241379,358.823353 443.04023,353.401697 442.637931,346.241018 C442.252395,339.378701 442.051594,334.113506 442.03553,330.445435 L442.033984,330.133566 L442.112338,330.450895 C443.318688,335.401456 445.103081,341.380898 447.465517,348.389222 C449.409962,352.344644 452.012277,358.594212 455.272462,367.137924 L455.612069,368.02994 C459.031609,377.031936 461.747126,383.578842 463.758621,387.670659 L464.383004,387.416901 L464.78466,387.25349 L465.201763,387.083794 L465.268191,387.057083 L465.850591,386.819823 L466.074591,386.72869 L466.182728,386.684695 L466.700246,386.474146 L466.775862,386.443114 L466.924246,386.383013 L466.955142,386.370443 L467.820246,386.018481 L467.982453,385.952489 L468.102949,385.90378 L468.252797,385.842501 L468.754866,385.638237 L469.287832,385.421404 L469.735832,385.239138 L469.793103,385.215569 C467.781609,381.123752 465.066092,374.679142 461.646552,365.881737 C458.227011,357.084331 455.310345,350.43513 452.896552,345.934132 L452.72728,346.01898 L452.617092,345.666006 C449.483932,335.740434 447.508679,328.170295 446.691333,322.955591 L446.63757,322.607243 L446.862069,322.610778 L446.862069,322.610778 C446.862069,322.610778 447.163793,322.713074 447.767241,322.917665 C448.37069,323.122255 449.175287,323.326846 450.181034,323.531437 C451.186782,323.736028 452.091954,323.838323 452.896552,323.838323 C454.908046,325.47505 456.91954,326.498004 458.931034,326.907186 L460.137818,323.839109 L459.534483,327.520958 C463.95977,328.748503 471.905172,328.953094 483.37069,328.134731 C494.836207,327.316367 502.37931,324.861277 506,320.769461 L505.966673,320.726448 L505.960494,320.718592 L505.901791,320.638457 L505.878618,320.607032 L505.835363,320.548896 L505.765846,320.45462 L505.747308,320.42948 L505.738039,320.415339 L505.696328,320.358774 L505.645349,320.289638 L505.622177,320.259784 L505.611363,320.244072 L505.589735,320.214218 L505.548025,320.157653 L505.529487,320.134084 L505.469239,320.052378 L505.469239,320.050807 L505.45688,320.035095 L505.390453,319.943962 L505.336384,319.871684 L505.320935,319.849686 L505.307032,319.832402 L505.223611,319.719272 L505.200439,319.687847 L505.184991,319.665849 L505.181901,319.662707 L505.138646,319.602999 L505.05677,319.493011 L505.049046,319.482012 L505.036687,319.464728 L504.959446,319.359454 L504.92237,319.310745 L504.866756,319.233753 L504.812687,319.161475 L504.778701,319.114338 L504.770977,319.10491 L504.74626,319.070343 L504.675197,318.974496 L504.669018,318.96664 L504.641211,318.928929 L504.587142,318.85508 L504.574784,318.839368 L504.47437,318.702668 L504.463556,318.686956 L504.424935,318.635104 L504.378591,318.572254 L504.377046,318.570683 L504.370866,318.562826 L504.265818,318.419842 L504.264273,318.416699 L504.189655,318.314371 L501.775862,316.473054 C499.362069,318.928144 493.025862,320.56487 482.767241,321.383234 C472.508621,322.201597 465.166667,321.997006 460.741379,320.769461 L460.724853,320.850577 L460.62963,320.777039 C460.257131,320.499199 459.791507,320.189787 459.232759,319.848802 C458.227011,319.23503 457.221264,318.723553 456.215517,318.314371 C455.20977,317.90519 454.103448,317.700599 452.896552,317.700599 C452.896552,317.700599 452.192529,317.393713 450.784483,316.77994 Z M525.076923,428.941176 L523.74359,428.51634 C522.786325,428.211329 521.692308,427.862745 520.461538,427.470588 C518.615385,426.882353 517.282051,426.392157 516.461538,426 L516.420266,426.100518 L516.376156,426.204424 L516.347799,426.272188 L516.330469,426.312847 L516.283208,426.425788 L516.234371,426.541741 L516.206014,426.609506 L516.183959,426.662212 L516.131971,426.7872 L516.078408,426.9152 L516.068956,426.939294 L516.021694,427.049224 L515.96498,427.184753 L515.935048,427.258541 L515.906691,427.326306 L515.845251,427.470871 L515.804291,427.568753 L515.764906,427.663624 L515.687713,427.848847 L515.67826,427.871435 L515.612094,428.026541 L515.55538,428.163576 L515.541202,428.198212 L515.47346,428.360847 L515.437226,428.446682 L515.407294,428.517459 L515.320648,428.722259 L515.230769,428.941176 L515.210371,428.987294 L515.172562,429.079153 L515.122149,429.199624 L515.103245,429.243294 L515.079614,429.300518 L515.044956,429.383341 L515.018174,429.448094 L514.999269,429.491765 L514.999269,429.493271 L514.986666,429.520376 L514.983516,429.529412 L514.90002,429.729694 L514.803922,429.958588 L514.712549,430.178447 L514.624328,430.389271 L514.539257,430.592565 L514.458913,430.785318 L514.381719,430.969035 L514.307676,431.143718 L514.238359,431.309365 L514.172193,431.467482 L514.110753,431.615059 L514.052463,431.7536 L514,431.882353 C514.820513,431.882353 515.846154,432.176471 517.076923,432.764706 C518.307692,433.352941 519.435897,433.843137 520.461538,434.235294 C521.487179,434.627451 522.717949,435.019608 524.153846,435.411765 C525.589744,435.803922 526.923077,436 528.153846,436 L530,436 L530,429.529412 L528.153846,429.529412 C527.333333,429.529412 526.307692,429.333333 525.076923,428.941176 Z M604.018125,289.540931 L600.96857,290.762813 C611.133752,325.382807 613.573396,354.911625 608.287501,379.349267 C607.904812,380.115938 607.432078,381.784575 606.8693,384.355179 L606.762724,384.847737 C606.152813,387.698795 605.746206,389.531618 605.542902,390.346206 C605.339599,391.160794 604.932991,392.891794 604.32308,395.539205 C603.713169,398.186617 603.306562,400.01944 603.103259,401.037675 C602.899955,402.05591 602.391696,403.583263 601.578481,405.619733 C600.765267,407.656203 600.053704,409.285379 599.443793,410.507261 C598.833882,411.729143 598.122319,413.256496 597.309105,415.089319 C596.49589,416.922142 595.682676,418.551319 594.869461,419.976848 C594.404767,420.791436 593.873688,421.572775 593.276224,422.320866 L592.86792,422.811907 L592.503007,422.856417 C590.77357,423.095362 588.716138,423.662859 586.330708,424.558906 C583.07785,425.780788 579.72334,427.104493 576.267178,428.530023 C572.811016,429.955552 570.676328,430.871963 569.863113,431.279257 L569.864227,431.288837 L569.430477,431.300397 C566.729142,431.406096 563.31554,431.908167 559.189672,432.80661 C554.513688,433.824845 551.159178,434.333963 549.126142,434.333963 L549.126085,438 L546.686498,435.555845 L535.09819,435.555845 L535.09819,435.555845 C533.878369,435.555845 532.455243,435.657668 530.828814,435.861315 C530.3951,435.915621 530.019214,435.962686 529.701156,436.002511 L529.651092,436.009016 L529.666735,435.852278 C529.75335,435.02805 529.937406,433.911003 530.218903,432.501139 C530.62551,430.464669 530.828814,428.631846 530.828814,427.00267 L530.828814,403.78691 L530.828814,368.352328 L530.828814,318.255161 C530.828814,309.294692 530.523859,295.752165 529.913948,277.627581 C529.33176,260.326841 529.027434,247.01552 529.000971,237.69362 L529,237.589436 L529.227006,237.584516 C531.084175,237.542237 533.447843,237.449221 536.318012,237.305471 C540.384085,237.101824 543.331988,237 545.161721,237 C546.991453,237 549.736053,237.203647 553.395518,237.610941 C558.186091,238.410718 567.092202,243.725603 580.113851,253.555594 L580.437838,253.801954 L580.476067,253.856419 C581.366571,255.152355 583.013162,257.373959 585.415842,260.521231 C588.058789,263.98323 589.888522,266.426994 590.90504,267.852524 C591.921558,269.278053 593.344684,271.416346 595.174417,274.267405 C597.004149,277.118463 598.325623,279.765874 599.138838,282.209638 C599.952052,284.653403 600.561963,287.300814 600.96857,290.151872 L604.018125,289.540931 Z M605.989777,287.933526 C605.584029,284.681118 604.873971,281.631985 603.859601,278.786127 C602.845232,275.94027 601.425115,273.094412 599.59925,270.248555 C597.773386,267.402697 596.251832,265.065029 595.034589,263.235549 C593.817345,261.406069 591.890044,258.763487 589.252684,255.307803 C586.615323,251.852119 584.890896,249.514451 584.0794,248.294798 L581.644914,250.124277 L583.470779,247.684971 C569.269609,237.114644 559.32879,231.422929 553.648322,230.609827 C550.808088,230.203276 547.866417,230 544.823309,230 C541.780201,230 538.432782,230.101638 534.781053,230.304913 C531.129324,230.508189 528.28909,230.609827 526.260351,230.609827 L525.651729,230.609827 L526.260351,233.65896 L525.929204,235.311248 L525.043108,235.488439 L522,234.878613 L522,235.488439 L522.001257,236.790621 C522.018862,246.095516 522.221317,259.382554 522.608622,276.651734 C523.014369,294.743256 523.217243,308.261079 523.217243,317.205202 L523.217243,367.210983 L523.217243,402.580925 L523.217243,425.754335 C523.217243,426.973988 523.115806,428.600193 522.912932,430.632948 C522.710058,432.665703 522.608622,434.291908 522.608622,435.511561 L522.608622,438.560694 L527.476369,438.561279 L527.477594,441 C528.28909,441 529.506333,440.898362 531.129324,440.695087 C532.627469,440.507448 533.607026,440.406411 534.067993,440.391978 L534.171401,440.390954 L534.276869,440.391978 C534.737837,440.406411 535.717394,440.507448 537.215539,440.695087 C538.83853,440.898362 540.360084,441 541.780201,441 C543.200318,441 544.721872,440.898362 546.344863,440.695087 C547.218781,440.585631 547.975056,440.32883 548.613689,439.924684 L548.840641,439.769614 L549.155041,439.757761 C551.880063,439.637301 555.406562,439.035003 559.734537,437.950867 C564.60351,436.731214 567.849492,436.121387 569.472483,436.121387 L569.471062,433.072254 L570.689726,436.121387 C571.906969,435.714836 574.341455,434.698459 577.993185,433.072254 C581.644914,431.44605 584.890896,430.124759 587.73113,429.108382 C590.571364,428.092004 592.397228,427.583815 593.208724,427.583815 L593.208277,424.535853 L595.64321,426.364162 C597.266201,424.737958 598.686318,422.908478 599.903561,420.875723 C601.120804,418.842967 602.338047,416.505299 603.555291,413.862717 C604.772534,411.220135 605.685466,409.18738 606.294088,407.764451 C606.902709,406.341522 607.612768,403.902216 608.424263,400.446532 C609.235759,396.990848 609.742943,394.856455 609.945817,394.043353 C610.148691,393.23025 610.655876,390.587669 611.467371,386.115607 C612.249884,381.803262 612.843756,379.570083 613.248986,379.416071 L613.293236,379.407514 C618.567956,354.201349 616.13347,323.710019 605.989777,287.933526 Z M625.846154,357 L626.616517,356.848459 L626.923717,356.787687 L628.064295,356.561739 L628.923077,356.391304 L629.269465,356.323325 L630.543951,356.070887 L630.72512,356.035047 L631.653022,355.851172 L631.873575,355.807541 L632,355.782609 C631.179487,349.289855 626.871795,321.289855 619.076923,271.782609 C615.794872,250.681159 614.153846,237.086957 614.153846,231 L608,231 C608,237.492754 609.641026,251.492754 612.923077,273 C620.717949,322.101449 625.025641,350.101449 625.846154,357 Z M708.212121,407.666667 C707.808081,406.444444 707.505051,405.222222 707.30303,404 L706.69697,400.333333 L706.69697,400.333333 C706.494949,399.111111 706.292929,397.685185 706.090909,396.055556 C705.888889,394.425926 705.686869,393 705.484848,391.777778 C705.282828,390.555556 704.979798,389.231481 704.575758,387.805556 C704.171717,386.37963 703.767677,384.851852 703.363636,383.222222 C698.515152,364.888889 694.676768,346.148148 691.848485,327 L691.816097,327.006844 L691.813138,326.96448 C691.597693,324.124832 690.397354,313.340376 688.212121,294.611111 C687.808081,291.759259 687.40404,284.833333 687,273.833333 C687,271.796296 685.888889,270.675926 683.666667,270.472222 C681.444444,270.268519 680.333333,271.388889 680.333333,273.833333 C680.333333,283.611111 677.10101,304.592593 670.636364,336.777778 C664.575758,368.555556 658.515152,391.37037 652.454545,405.222222 C652.050505,406.037037 650.535354,408.481481 647.909091,412.555556 C646.033189,415.465608 644.260359,418.375661 642.5906,421.285714 L642.338279,421.730827 L642.306122,421.06746 C642.203051,418.884921 642.151515,417.066138 642.151515,415.611111 C642.151515,402.981481 639.121212,383.018519 633.060606,355.722222 L632.936097,355.747253 L632.718885,355.791058 L631.805042,355.975662 L631.626618,356.011644 L630.371442,356.265084 L630.030303,356.333333 L629.184533,356.504444 L628.061236,356.731289 L627.758691,356.792302 L627,356.944444 C632.656566,383.833333 635.484848,403.388889 635.484848,415.611111 C635.484848,417.648148 635.686869,420.5 636.090909,424.166667 C636.494949,427.833333 636.69697,430.685185 636.69697,432.722222 C636.292929,435.574074 637.505051,437 640.333333,437 L640.33217,433.944444 L643.363636,433.944444 C643.363636,433.537037 644.070707,432.111111 645.484848,429.666667 C646.89899,427.222222 648.414141,424.675926 650.030303,422.027778 C651.646465,419.37963 653.262626,416.62963 654.878788,413.777778 C656.494949,410.925926 657.707071,408.888889 658.515152,407.666667 C664.086012,393.623457 670.048761,370.886831 676.4034,339.45679 L676.69697,338 C679.345138,324.648817 681.450911,313.177658 683.014287,303.586523 L683.076412,303.192871 L683.103707,303.41967 C684.893155,318.904627 685.787879,327.172144 685.787879,328.222222 C688.212121,347.37037 692.050505,366.314815 697.30303,385.055556 C698.111111,387.092593 698.717172,389.638889 699.121212,392.694444 C699.525253,395.75 699.929293,398.703704 700.333333,401.555556 C700.737374,404.407407 701.343434,407.055556 702.151515,409.5 L702.217455,409.48592 L702.250421,409.769483 C702.605359,412.866062 702.875421,414.507716 703.060606,414.694444 C703.262626,414.898148 703.464646,415.509259 703.666667,416.527778 C703.868687,417.546296 704.070707,418.666667 704.272727,419.888889 C704.474747,421.111111 704.878788,422.537037 705.484848,424.166667 C706.090909,425.796296 706.69697,427.324074 707.30303,428.75 C707.909091,430.175926 708.616162,431.5 709.424242,432.722222 C710.232323,433.944444 711.242424,434.759259 712.454545,435.166667 C715.686869,436.796296 718.313131,435.166667 720.333333,430.277778 L719.8256,430.074009 L720.234385,429.223923 C721.223871,427.103741 722.064935,424.90873 722.757576,422.638889 C723.565657,419.990741 724.373737,417.342593 725.181818,414.694444 C725.989899,412.046296 726.59596,409.398148 727,406.75 C727.40404,404.101852 727.909091,401.351852 728.515152,398.5 C729.121212,395.648148 729.525253,393.101852 729.727273,390.861111 C729.929293,388.62037 730.232323,385.972222 730.636364,382.916667 C731.040404,379.861111 731.444444,377.314815 731.848485,375.277778 C738.064491,338.454416 742.599486,302.196061 745.45347,266.502712 L745.787103,262.2232 L745.821783,261.682757 C746.607261,248.959458 747,226.731873 747,195 L740.939394,195 C740.939394,227.185185 740.535354,249.388889 739.727273,261.611111 C736.494949,298.277778 731.848485,335.759259 725.787879,374.055556 C725.383838,376.092593 724.676768,380.472222 723.666667,387.194444 C722.656566,393.916667 721.949495,398.907407 721.545455,402.166667 C721.141414,405.425926 720.232323,409.5 718.818182,414.388889 C717.40404,419.277778 715.888889,423.759259 714.272727,427.833333 C713.464646,426.203704 711.646465,421.111111 708.818182,412.555556 L708.818182,410.111111 L708.818182,410.111111 L708.212121,408.277778 L705.181818,408.888889 L708.212121,407.666667 Z M748.188855,369.793086 L747.926829,371.213433 C742.642276,399.735821 740,421.331343 740,436 L746.097561,436 C746.097561,422.146269 748.841463,400.856343 754.329268,372.130224 C756.189541,362.392556 757.734513,353.439146 758.964185,345.269993 L759.013325,344.932481 L790,344.93209 L829.02439,344.93209 L829.02439,338.820149 L828.414634,341.876119 L828.414634,338.820149 L790,338.820149 L759.890594,338.820932 L759.985759,338.129505 C761.70257,325.426818 762.560976,314.859271 762.560976,306.426866 C762.560976,305.61194 764.796748,301.944776 769.268293,295.425373 L769.549838,295.051173 C770.857495,293.321535 773.304297,290.186567 776.890244,285.646269 C780.752033,280.756716 783.902439,276.376493 786.341463,272.505597 C788.592871,268.932463 790.324722,265.446125 791.537018,262.046584 L791.651764,261.711519 L791.829268,261.809701 C792.235772,260.994776 792.743902,259.772388 793.353659,258.142537 C793.447467,257.891791 793.53887,257.655511 793.627868,257.433697 L793.715374,257.217825 C794.439678,259.362285 795.335366,261.504104 796.402439,263.643284 C798.231707,267.310448 800.46748,271.181343 803.109756,275.25597 C805.752033,279.330597 807.682927,282.386567 808.902439,284.423881 C812.96748,292.980597 817.439024,303.370896 822.317073,315.594776 C824.756098,321.706716 828.719512,333.930597 834.207317,352.266418 C839.695122,370.602239 844.878049,384.659701 849.756098,394.438806 L849.898008,394.355292 L849.932355,394.477006 C850.3992,396.08139 851.255081,398.309701 852.5,401.16194 C853.922764,404.421642 854.939024,407.070149 855.54878,409.107463 C856.158537,411.144776 856.768293,413.487687 857.378049,416.136194 C857.987805,418.784701 858.292683,421.331343 858.292683,423.776119 L865,423.776119 C865,420.923881 864.593496,417.969776 863.780488,414.913806 C862.96748,411.857836 862.154472,409.311194 861.341463,407.273881 C860.528455,405.236567 859.512195,402.486194 858.292683,399.022761 C857.073171,395.559328 856.056911,393.216418 855.243902,391.99403 L852.804878,392.605224 L855.243902,391.382836 C851.99187,384.45597 848.841463,376.510448 845.792683,367.546269 C842.743902,358.58209 839.695122,349.006716 836.646341,338.820149 C833.597561,328.633582 830.853659,320.280597 828.414634,313.761194 C823.536585,301.129851 818.861789,290.535821 814.390244,281.979104 C813.170732,279.534328 811.646341,276.885821 809.817073,274.033582 C807.987805,271.181343 806.463415,268.634701 805.243902,266.393657 C804.02439,264.152612 802.703252,261.60597 801.280488,258.753731 C799.857724,255.901493 798.943089,253.252985 798.536585,250.808209 C797.317073,247.141045 795.081301,246.122388 791.829268,247.752239 C791.422764,248.159701 790.914634,248.872761 790.304878,249.891418 C789.695122,250.910075 789.186992,251.826866 788.780488,252.641791 L787.560976,255.086567 L787.560976,255.086567 C787.154472,255.901493 786.849593,256.614552 786.646341,257.225746 C786.443089,257.83694 786.341463,258.346269 786.341463,258.753731 L788.056838,259.708759 L786.341463,259.364925 C785.121951,262.624627 783.394309,265.986194 781.158537,269.449627 C778.922764,272.91306 775.873984,277.089552 772.012195,281.979104 C768.150407,286.868657 765.609756,290.128358 764.390244,291.758209 C763.98374,292.165672 763.272358,292.980597 762.256098,294.202985 C761.239837,295.425373 760.325203,296.545896 759.512195,297.564552 C758.699187,298.583209 757.886179,299.907463 757.073171,301.537313 C756.260163,303.167164 755.853659,304.797015 755.853659,306.426866 C755.853659,320.851045 753.298724,341.973118 748.188855,369.793086 L748.188855,369.793086 Z M829.304688,345 L829.304688,342 L829.695312,345 L829.304688,345 Z M743,436.695312 L740,436.304688 L740,436.695312 L743,436.695312 Z M747,436.695312 L747,436.304688 L744,436.695312 L747,436.695312 Z M963.6,343 C963.6,329.981197 964,310.249573 964.8,283.805128 C965.6,257.360684 966,237.425641 966,224 L960,224 C960,237.018803 959.5,256.750427 958.5,283.194872 C957.5,309.639316 957,329.574359 957,343 L963.6,343 Z M963.333462,436 C963.333462,436 963.555641,436.66656 964,437.99968 L958,438 L958,436.00096 L963.333462,436 Z M957.109713,424 L957.890287,423 L957.890287,424 L957.109713,424 Z M955,424.695312 L955,424.304688 L958,424.304688 L955,424.695312 Z M861,436.695312 L858,436.304688 L858,436.695312 L861,436.695312 Z M865,436.695312 L865,436.304688 L862,436.695312 L865,436.695312 Z M964,415.173252 L964,414.040031 C963.990064,406.300505 963.88839,394.866696 963.694286,379.738602 C963.490476,363.854103 963.388571,351.838906 963.388571,343.693009 L963.388571,343.082067 L960.331429,343.693009 L956.662857,343.082067 L956.662857,343.693009 C956.662857,351.838906 956.866667,363.854103 957.274286,379.738602 C957.681905,395.6231 957.885714,407.43465 957.885714,415.173252 L957.884655,416.617422 L957.840335,416.469118 C956.877016,413.441454 954.854048,409.547492 951.771429,404.787234 L951.578234,404.902971 L951.523825,404.638601 C950.651318,400.738795 947.4729,394.678917 941.988571,386.458967 C935.466667,376.683891 932.205714,370.574468 932.205714,368.130699 L929.148571,368.130699 L932.205714,367.519757 C928.129524,356.522796 923.441905,346.544073 918.142857,337.583587 C916.92,335.547112 915.493333,333.408815 913.862857,331.168693 C912.232381,328.928571 910.70381,326.892097 909.277143,325.059271 C907.850476,323.226444 906.525714,321.291793 905.302857,319.255319 C905.302857,318.848024 904.895238,317.524316 904.08,315.284195 C903.264762,313.044073 902.347619,311.109422 901.328571,309.480243 C900.513333,308.1769 899.632876,306.873556 898.6872,305.570213 L898.465928,305.272268 L898.577143,305.203647 C887.571429,285.653495 878.807619,269.768997 872.285714,257.550152 C866.986667,246.960486 863.929524,240.443769 863.114286,238 L857,238 L857,240.443769 L857,269.768997 L857,338.194529 L857,339.540068 C857.008315,350.511613 857.110057,366.456717 857.305714,387.37538 C857.509524,409.165653 857.611429,425.355623 857.611429,435.945289 L863.725714,435.945289 L863.725244,434.673608 C863.717565,424.077209 863.615817,408.311133 863.42,387.37538 C863.21619,365.585106 863.114286,349.191489 863.114286,338.194529 L863.114286,269.768997 L863.11303,253.775604 L863.138756,253.826345 C864.051435,255.721621 865.062326,257.777479 866.171429,259.993921 C873.100952,272.620061 882.068571,288.708207 893.074286,308.258359 L895.518549,307.036474 L893.685714,309.480243 C894.500952,310.294833 895.214286,311.31307 895.825714,312.534954 C896.437143,313.756839 897.150476,315.386018 897.965714,317.422492 C898.780952,319.458967 899.392381,321.088146 899.8,322.31003 C901.430476,325.161094 903.774286,328.6231 906.831429,332.696049 C909.888571,336.768997 911.824762,339.416413 912.64,340.638298 C917.939048,349.191489 922.422857,358.762918 926.091429,369.352584 L926.152197,369.32795 L926.180162,369.593636 C926.74214,374.436842 929.973515,381.280504 935.874286,390.12462 C942.39619,399.899696 945.657143,405.398176 945.657143,406.620061 L948.714286,406.620061 L946.268571,408.452888 C949.937143,414.155015 951.771429,418.024316 951.771429,420.06079 C951.771429,422.408725 952.324324,424.342319 953.430114,425.861571 L953.644373,426.142256 L953.655627,426.344768 C953.738814,427.508467 953.925986,428.672167 954.217143,429.835866 C954.624762,431.465046 955.032381,432.788754 955.44,433.806991 C955.847619,434.825228 956.051429,435.334347 956.051429,435.334347 L956.056482,435.65749 C956.090169,436.700972 956.292294,437.407847 956.662857,437.778116 L956.662857,437.778116 L957.884655,437.778507 L957.885714,439 L964,439 L964,434.112462 L964,415.173252 Z M957.667964,424.3045 L959,424.4605 L959,424.6955 L957,424.6955 L957.667964,424.3045 Z M1014.30409,228 C997.274854,233.681159 987.746589,237.130435 985.719298,238.347826 L987.54386,240.782609 L985.111111,238.956522 C984.705653,239.362319 983.489279,240.478261 981.461988,242.304348 C979.434698,244.130435 977.91423,245.550725 976.900585,246.565217 C975.88694,247.57971 974.77193,249.101449 973.555556,251.130435 C972.339181,253.15942 971.325536,255.188406 970.51462,257.217391 C968.892788,260.463768 967.575049,264.115942 966.561404,268.173913 C965.547758,272.231884 964.838207,275.072464 964.432749,276.695652 C964.02729,278.318841 963.520468,282.275362 962.912281,288.565217 C962.304094,294.855072 962,298.202899 962,298.608696 L962,311.391304 L965.040936,311.391304 L968.081871,312 L968.081871,311.391304 L968.081871,299.217391 C968.487329,297.594203 968.791423,295.26087 968.994152,292.217391 C969.196881,289.173913 969.39961,286.84058 969.602339,285.217391 C969.805068,283.594203 970.109162,281.463768 970.51462,278.826087 C970.920078,276.188406 971.325536,273.956522 971.730994,272.130435 C972.136452,270.304348 972.744639,268.275362 973.555556,266.043478 C974.366472,263.811594 975.177388,261.681159 975.988304,259.652174 L973.554559,258.434783 L976.596491,259.652174 C977.001949,258.028986 977.711501,256.405797 978.725146,254.782609 C979.738791,253.15942 980.651072,251.942029 981.461988,251.130435 L982.783864,249.807453 C983.228627,249.362319 983.738036,248.852484 984.31209,248.27795 L985.415205,247.173913 C986.718463,245.869565 987.763138,244.824017 988.54923,244.037267 L988.762935,243.824529 L988.844564,243.784916 C990.64824,242.923495 999.476763,239.78184 1015.33013,234.359951 L1016.10314,234.094748 L1016.59418,234.100316 C1023.47696,234.211646 1028.79547,235.018787 1032.54971,236.521739 L1033.15651,233.479235 L1033.15789,236.521739 C1033.56335,236.521739 1036.40156,237.942029 1041.67251,240.782609 C1046.94347,243.623188 1049.57895,245.043478 1049.57895,245.043478 L1052.01128,243.218365 L1050.18713,245.652174 C1056.67446,250.115942 1059.91813,258.231884 1059.91813,270 L1066,270 C1066,255.797101 1061.94542,245.855072 1053.83626,240.173913 L1053.8158,240.207805 C1052.00488,238.663471 1048.76803,236.724638 1044.10526,234.391304 C1039.77555,232.224638 1036.54016,230.947852 1034.39909,230.560947 L1034.3289,230.551263 L1034.37427,230.434783 C1029.91423,228.811594 1023.4269,228 1014.91228,228 L1014.91206,231.043673 L1014.30409,228 Z M961,311.695312 L964,311.304688 L961,311.304688 L961,311.695312 Z M959.8,375 L959.8,374.394231 L962.8,374.394231 L965.8,373.788462 C965,370.153846 964.6,367.125 964.6,364.701923 C964.6,362.682692 964.5,359.754808 964.3,355.918269 C964.1,352.081731 964,349.254808 964,347.4375 C964,345.620192 964.2,342.894231 964.6,339.259615 C964.6,337.240385 965,333.100962 965.8,326.841346 C966.6,320.581731 967,315.634615 967,312 L961,312 C961,315.230769 960.6,319.875 959.8,325.932692 C959,331.990385 958.4,336.230769 958,338.653846 L958,364.701923 L958,364.701923 C958,367.528846 958.6,370.961538 959.8,375 Z M1006.62428,328.609375 L1006.62428,334.703125 L1008.47977,334.703125 L1045.5896,334.703125 C1053.83622,334.703125 1058.1657,334.90625 1058.57803,335.3125 L1060.4335,332.26621 L1059.19653,335.3125 C1059.60886,336.125 1058.99037,340.390625 1057.34104,348.109375 C1056.10405,352.171875 1055.1763,356.742188 1054.5578,361.820312 C1053.93931,366.898438 1053.42389,371.976562 1053.01156,377.054688 C1052.59923,382.132812 1051.98073,386.296875 1051.15607,389.546875 C1049.91908,392.390625 1048.78516,398.28125 1047.75434,407.21875 C1046.72351,416.15625 1044.14644,422.453125 1040.02312,426.109375 C1034.67808,431.751736 1028.62603,435.826775 1021.86696,438.334491 L1021.46719,438.47881 L1021.46821,438.296875 C1009.32505,438.296875 1000.53105,437.196953 995.086214,434.997109 L994.741786,434.85493 L994.872832,434.640625 C993.635838,433.828125 991.471098,432.507812 988.378613,430.679688 C985.286127,428.851562 982.812139,427.328125 980.956647,426.109375 C979.101156,424.890625 977.142582,423.367188 975.080925,421.539062 C973.019268,419.710938 971.782274,417.984375 971.369942,416.359375 L968.277457,416.96875 L970.751445,415.75 C967.040462,409.65625 965.184971,396.25 965.184971,375.53125 L959,375.53125 L959,389.546875 L959,389.546875 C959,391.171875 959.103083,393.710938 959.309249,397.164062 C959.515414,400.617188 959.824663,403.359375 960.236994,405.390625 C960.649326,407.421875 961.370906,409.65625 962.401734,412.09375 C963.285301,414.183036 964.244603,416.123087 965.279639,417.913903 L965.392762,418.10521 L965.184971,418.1875 C966.009634,421.03125 967.65896,423.671875 970.132948,426.109375 C972.606936,428.546875 974.874759,430.375 976.936416,431.59375 C978.998073,432.8125 981.678227,434.335938 984.976879,436.164062 C988.27553,437.992188 990.337187,439.3125 991.16185,440.125 L993.015931,437.68789 L991.780347,440.125 C997.965318,443.375 1007.86127,445 1021.46821,445 L1021.46719,441.34453 L1022.08671,444.390625 C1030.04897,442.037177 1037.43465,437.600791 1044.24376,431.081469 L1044.9711,430.375 C1049.91908,425.90625 1053.11464,418.390625 1054.5578,407.828125 C1055.9721,397.476875 1056.69339,392.197738 1056.72168,391.990713 L1056.72254,391.984375 C1058.37187,387.921875 1059.4027,383.25 1059.81503,377.96875 C1060.22736,372.6875 1060.63969,367.507812 1061.05202,362.429688 C1061.46435,357.351562 1062.28902,353.1875 1063.52601,349.9375 L1060.43509,348.71953 L1063.52601,349.328125 C1065.17534,341.609375 1066,337.546875 1066,337.140625 C1066,332.480699 1064.55541,329.876622 1061.66624,329.328395 L1061.62893,329.32249 L1061.67052,329.21875 C1060.02119,328.40625 1058.1657,328 1056.10405,328 C1054.04239,328 1051.87765,328.101562 1049.60983,328.304688 C1047.48374,328.495117 1046.17306,328.596283 1045.67778,328.608185 L1008.47977,328.609375 L1006.62428,328.609375 Z M966,376.695312 L966,376.304688 L963,376.304688 L966,376.695312 Z"
                  ),
                  t(i, [s]),
                  t(o, [i]),
                  t(e, [r, o]),
                  e
                );
              })();
            },
          },
          {
            key: "update",
            value: function () {
              return !1;
            },
          },
        ]),
        e
      );
    })())(),
    Ft = function (t, e) {
      return (
        "chootest - main" !== t.title &&
          e(t.events.DOMTITLECHANGE, "chootest - main"),
        (function () {
          var t = n({}),
            e = document.createElement("body"),
            r = document.createElement("header"),
            o = document.createElement("h1");
          t(o, [arguments[0]]);
          var i = document.createElement("p");
          t(i, ["a language-agnostic word-based eso-lang."]);
          var s = document.createElement("nav"),
            a = document.createElement("ul"),
            u = document.createElement("li"),
            h = document.createElement("a");
          h.setAttribute("href", "https://github.com/ehne/wordwang"),
            t(h, ["about"]),
            t(u, ["\n              ", h, "\n            "]);
          var c = document.createElement("li"),
            l = document.createElement("a");
          l.setAttribute("href", "#demo"),
            t(l, ["demo"]),
            t(c, ["\n              ", l, "\n            "]);
          var f = document.createElement("li"),
            L = document.createElement("a");
            L.setAttribute("href", "#"),
            t(L, [" "]),
            t(f, ["\n              ", L, "\n            "]),
            t(a, [
              "\n            ",
              u,
              "\n            ",
              c,
              "\n            ",
              f,
              "\n          ",
            ]),
            t(s, ["\n          ", a, "\n        "]),
            t(r, [
              "\n        ",
              o,
              "\n        ",
              i,
              "\n        ",
              s,
              "\n      ",
            ]);
          var d = document.createElement("main"),
            p = document.createComment(
              '<section id="about">\n          <h2>about</h2>\n          <p>A program in wordwang consists of a string of words with spaces between them, and sometimes an exclamation point between two words and no space.</p>\n        </section>'
            ),
            m = document.createElement("section");
          m.setAttribute("id", "demo");
          var C = document.createElement("h2");
          t(C, ["demo"]);
          var v = document.createElement("p"),
            y = document.createElement("fieldset"),
            b = document.createElement("form");
          b.onsubmit = arguments[3];
          var w = document.createElement("label");
          w.setAttribute("for", "ww-code"), t(w, ["Your wordwang code:"]);
          var g = document.createElement("textarea");
          g.setAttribute("name", "ww-code"),
            g.setAttribute("rows", "4"),
            t(g, [arguments[1]]);
          var _ = document.createElement("label");
          _.setAttribute("for", "ww-tape-length"), t(_, ["The tape length: "]);
          var A = document.createElement("input");
          A.setAttribute("type", "number"),
            A.setAttribute("id", "ww-tape-length"),
            A.setAttribute("value", arguments[2]),
            A.setAttribute("name", "ww-tape-length");
          var E = document.createElement("button");
          E.setAttribute("type", "submit"),
            t(E, ["Send"]),
            t(b, [
              "\n              ",
              w,
              "\n              ",
              g,
              "\n              ",
              _,
              "\n              ",
              A,
              "\n              ",
              E,
              "\n          ",
            ]);
          var S = document.createElement("form"),
            N = document.createElement("p"),
            O = document.createElement("label");
          O.setAttribute("for", "ww-output"), t(O, ["Output tape:"]);
          var T = document.createElement("input");
          T.setAttribute("type", "text"),
            T.setAttribute("id", "ww-output"),
            T.setAttribute("value", arguments[4]),
            T.setAttribute("readonly", "readonly"),
            t(S, [
              "\n          ",
              N,
              "\n          ",
              O,
              "\n          ",
              T,
              "\n  \n          ",
            ]),
            t(y, [
              "\n          ",
              b,
              "\n          \n          ",
              S,
              "\n          ",
            ]),
            t(m, [
              "\n          ",
              C,
              "\n          ",
              v,
              "\n          ",
              y,
              "\n        ",
            ]),
            t(d, ["\n        ", p, "\n        ", m, "\n      "]);
          var x = document.createElement("footer"),
            I = document.createElement("p"),
            j = document.createElement("a");
          return (
            j.setAttribute("href", "https://darcylf.me"),
            t(j, ["darcylf"]),
            t(I, ["made by ", j, " in 2020"]),
            t(x, ["\n        ", I, "\n      "]),
            t(e, ["\n      ", r, "\n      ", d, "\n      ", x, "\n    "]),
            e
          );
        })(
          Ht.render(),
          t.code,
          t.tapeLength,
          function (n) {
            n.preventDefault();
            var r = n.currentTarget,
              o = new FormData(r),
              i = (new Headers({ "Content-Type": "application/json" }), {}),
              s = !0,
              a = !1,
              u = void 0;
            try {
              for (
                var h, c = o.entries()[Symbol.iterator]();
                !(s = (h = c.next()).done);
                s = !0
              ) {
                var l = h.value;
                i[l[0]] = l[1];
              }
            } catch (L) {
              (a = !0), (u = L);
            } finally {
              try {
                !s && c.return && c.return();
              } finally {
                if (a) throw u;
              }
            }
            console.log(i),
              (t.code = i["ww-code"]),
              (t.tapeLength = i["ww-tape-length"]);
            var f = (function (t) {
              var e,
                n = 0,
                r = 0,
                o = parseInt(t["ww-tape-length"]),
                i = t["ww-code"],
                s = new Array(o).fill(0),
                a =
                  ((e = []),
                  (function (t) {
                    var e = [];
                    return (
                      t.split(" ").forEach(function (t) {
                        e.push(t.split("!"));
                      }),
                      e
                    );
                  })(i).forEach(function (t, n) {
                    var r = [Math.round(Math.sqrt(t[0].length + n)) % 4];
                    t.length > 1 && r.push(t[1].length), e.push(r);
                  }),
                  console.log(e),
                  e);
              for (console.log(a), console.log(s); r <= a.length - 1; ) {
                var u = a[r];
                switch (u[0]) {
                  case 0:
                    (s[n] = (s[n] + 1) % 2), (r += 1);
                    break;
                  case 1:
                    (n += 1), (r += 1);
                    break;
                  case 2:
                    (n -= 1), (r += 1);
                    break;
                  case 3:
                    s[n] ? (r = u[1] - 1) : (r += 1);
                  default:
                    r += 1;
                }
              }
              return s.pop(), s;
            })(i);
            e("outputTape:replace", f);
          },
          t.outputTape
        )
      );
    },
    Kt = Y();
  Kt.use(Et()),
    Kt.use(function (t, e) {
      (t.outputTape = []),
        (t.code = "cool a autoschadehersteller International beanie!I"),
        (t.tapeLength = "10"),
        e.on("DOMContentLoaded", function () {
          e.on("outputTape:replace", function (n) {
            (t.outputTape = n), e.emit(t.events.RENDER);
          });
        });
    }),
    Kt.route("/", Ft),
    Kt.route("/*", Ft),
    Kt.route("/wordwang", Ft),
    Kt.mount("body");
})();
//# sourceMappingURL=bundle.js.map
